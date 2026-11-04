import { asset } from '../site'

// The sabal palmetto and crescent from the South Carolina state flag (public
// domain; traced artwork via Wikimedia Commons). Drawn as a CSS mask so the
// shape takes `currentColor` — color it with any text-* class — while the
// 40 KB outline is downloaded once and cached, however many trees are on screen.

function Masked({ file, ratio, className = '', style }) {
  const url = `url(${asset(file)})`
  return (
    <span
      aria-hidden="true"
      className={`block ${className}`}
      style={{
        aspectRatio: ratio,
        backgroundColor: 'currentColor',
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center bottom',
        maskPosition: 'center bottom',
        ...style,
      }}
    />
  )
}

// Width ÷ height of the extracted artwork (see public/palmetto.svg viewBox)
export function Palmetto({ className = '', style }) {
  return <Masked file="palmetto.svg" ratio="256.7 / 360.6" className={className} style={style} />
}

export function Crescent({ className = '', style }) {
  return <Masked file="crescent.svg" ratio="152.7 / 151.3" className={className} style={style} />
}
