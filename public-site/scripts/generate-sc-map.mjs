// Regenerates src/data/scMap.json: the real South Carolina outline and all 46
// county shapes, from U.S. Census boundaries (us-atlas), projected with a
// Lambert conformal conic fitted to SC. Regions are SCAiL's planning regions.
//
//   npm i --no-save d3-geo@3 topojson-client@3 us-atlas@3
//   node scripts/generate-sc-map.mjs src/data/scMap.json
import fs from 'node:fs'
import { geoConicConformal, geoPath } from 'd3-geo'
import { feature, merge } from 'topojson-client'
const us = JSON.parse(fs.readFileSync('node_modules/us-atlas/counties-10m.json','utf8'))
const geoms = us.objects.counties.geometries.filter(g => String(g.id).startsWith('45'))
const counties = geoms.map(g => feature(us, g))
const state = merge(us, geoms)
// SC State Plane-like Lambert conformal conic
const W = 800, H = 640, pad = 12
const proj = geoConicConformal().parallels([32.5, 34.83]).rotate([81, 0]).fitExtent([[pad,pad],[W-pad,H-pad]], state)
const path = geoPath(proj).digits(1)
const REGION = {
  Upstate: ['Abbeville','Anderson','Cherokee','Chester','Greenville','Greenwood','Lancaster','Laurens','Oconee','Pickens','Spartanburg','Union','York'],
  Midlands: ['Aiken','Calhoun','Edgefield','Fairfield','Kershaw','Lexington','McCormick','Newberry','Orangeburg','Richland','Saluda','Sumter'],
  'Pee Dee': ['Chesterfield','Clarendon','Darlington','Dillon','Florence','Georgetown','Horry','Lee','Marion','Marlboro','Williamsburg'],
  Lowcountry: ['Allendale','Bamberg','Barnwell','Beaufort','Berkeley','Charleston','Colleton','Dorchester','Hampton','Jasper'],
}
const regionOf = n => Object.entries(REGION).find(([,l]) => l.includes(n))?.[0]
const out = counties.map(c => {
  const r = regionOf(c.properties.name); if (!r) throw new Error('no region: '+c.properties.name)
  const [cx, cy] = path.centroid(c)
  return { id: c.id, name: c.properties.name, region: r, d: path(c), cx: +cx.toFixed(1), cy: +cy.toFixed(1) }
}).sort((a,b)=>a.name.localeCompare(b.name))
const cities = [['Columbia',-81.0348,34.0007],['Greenville',-82.394,34.8526],['Charleston',-79.9311,32.7765],['Florence',-79.7626,34.1954],['Myrtle Beach',-78.8867,33.6891],['Rock Hill',-81.0251,34.9249],['Beaufort',-80.6698,32.4316],['Irmo',-81.1832,34.0857]]
  .map(([name,lon,lat]) => { const [x,y]=proj([lon,lat]); return {name,x:+x.toFixed(1),y:+y.toFixed(1)} })
const data = { viewBox: `0 0 ${W} ${H}`, outline: path(state), counties: out, cities }
fs.writeFileSync(process.argv[2], JSON.stringify(data))
console.log('counties', out.length, Object.fromEntries(Object.keys(REGION).map(k=>[k,out.filter(c=>c.region===k).length])), 'bytes', JSON.stringify(data).length)
