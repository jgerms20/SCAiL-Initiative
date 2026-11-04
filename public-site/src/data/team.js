// SCAiL founding board.
//
// PHOTOS: drop a square image in public/team/ named after the member's id
// (e.g. public/team/joshua-german.jpg) and set `photo: 'team/joshua-german.jpg'`.
// Until then each card shows a monogram.
//
// LINKEDIN: only fill in a URL you've confirmed. Earlier versions of the site
// used guessed URLs (linkedin.com/in/first-last), which can send visitors to a
// stranger's profile. Kinsey's is the only one Joshua has confirmed.

export const team = [
  {
    id: 'joshua-german',
    name: 'Joshua German',
    role: 'Founder & President',
    hometown: 'Irmo, SC',
    focus: 'Vision, partnerships, storytelling',
    photo: 'team/joshua-german.jpg',
    linkedin: null,
    bio: 'Born and raised in Irmo and a Dutch Fork High School graduate, with family roots in Walterboro and Charleston. Joshua studied journalism at the University of South Carolina, attended Midlands Technical College, and built a career in advertising and marketing before founding SCAiL in 2026 to make sure AI reaches every community in the state.',
  },
  {
    id: 'janel-moore',
    name: 'Janel Moore',
    role: 'Treasurer',
    hometown: 'South Carolina',
    focus: 'Budget, banking, grant reporting',
    photo: null,
    linkedin: null,
    bio: 'A finance professional at JP Morgan and a 2021 University of South Carolina graduate in International Affairs, active in Alpha Kappa Psi. Janel oversees SCAiL’s budget, financial controls, and grant reporting.',
  },
  {
    id: 'kinsey-meggett',
    name: 'Kinsey Meggett, PhD',
    role: 'Secretary',
    hometown: 'Upstate',
    focus: 'Curriculum, community engagement, outcomes',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/kinsey-meggett-phd-265a2b9b/',
    bio: 'A public health researcher with a PhD from Clemson University whose dissertation focused on health equity in underserved communities, and a recipient of Clemson’s MLK Excellence in Service Award. Kinsey keeps SCAiL’s programs grounded in what communities actually need.',
  },
  {
    id: 'tre-jenkins',
    name: 'Tre Jenkins',
    role: 'Technology & Data',
    hometown: 'Irmo, SC',
    focus: 'Digital infrastructure, impact measurement',
    photo: null,
    linkedin: null,
    bio: 'A data technology analyst at Bank of America and a Winthrop University graduate. Tre anchors SCAiL’s technology strategy, data systems, and how we measure impact.',
  },
  {
    id: 'darren-burton',
    name: 'Darren Burton',
    role: 'Education Policy & Operations',
    hometown: 'Irmo, SC',
    focus: 'Education equity, governance, operations',
    photo: null,
    linkedin: null,
    bio: 'A graduate of USC’s Darla Moore School of Business with leadership distinction and an SC Honors College alumnus. His undergraduate thesis, “The Corridor of Shame,” examined school-funding gaps between rural and urban South Carolina districts.',
  },
]

export const initials = (name) =>
  name
    .replace(/,.*$/, '')
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
