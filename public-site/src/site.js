// One place for everything the whole site links to. Change it here, not in pages.

// ⚠ Confirm this mailbox exists before launch. Every "Get Involved", "Request a
// workshop" and newsletter button opens an email to this address.
export const CONTACT_EMAIL = 'info@scail.org'

export const SOCIAL = {
  x: 'https://x.com/SCAiLorg',
}

// Joshua's own shows, featured on the Resources page.
// Links come from the Curious & Creative network's own show data.
export const FOUNDER_SHOWS = [
  {
    id: 'approachable-ai',
    name: 'Approachable AI',
    kind: 'Video series & podcast',
    logo: 'media/approachable-ai.png',
    line: 'Joshua’s show on using AI without the jargon: what the tools actually do, and how to start building with them.',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@Approachable.A.I' },
      { label: 'Spotify', url: 'https://open.spotify.com/show/0341xuu1WqXu4NiFUkdTFl' },
    ],
  },
  {
    id: 'eclectic-polymath',
    name: 'The Eclectic Polymath Podcast',
    kind: 'Podcast',
    logo: 'media/eclectic-polymath.jpg',
    line: 'Deep dives on history, culture, religion, world leaders and technology, with new episodes every week.',
    featured: {
      label: 'Start with: Anthropic by the Numbers',
      url: 'https://open.spotify.com/episode/1sPFk3tLCuKqSKlX5gvwFh',
    },
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/show/3dlagzJ0jiWLTB9mF3y069' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/podcast/the-eclectic-polymath-podcast/id6790238134' },
      { label: 'X', url: 'https://x.com/Eclectic_Plymth' },
    ],
  },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/team', label: 'Team' },
  { to: '/resources', label: 'Resources' },
]

// Builds a mailto: link with a prefilled subject and body, so every call to
// action opens a ready-to-send email instead of going nowhere.
export function mailto({ subject = '', body = '' } = {}) {
  const q = new URLSearchParams()
  if (subject) q.set('subject', subject)
  if (body) q.set('body', body)
  // URLSearchParams encodes spaces as "+", which some mail apps show literally.
  return `mailto:${CONTACT_EMAIL}?${q.toString().replace(/\+/g, '%20')}`
}

// Static assets live under Vite's base path (/SCAiL-Initiative/ on GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
