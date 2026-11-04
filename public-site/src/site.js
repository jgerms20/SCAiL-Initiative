// One place for everything the whole site links to. Change it here, not in pages.

// ⚠ Confirm this mailbox exists before launch. Every "Get Involved", "Request a
// workshop" and newsletter button opens an email to this address.
export const CONTACT_EMAIL = 'info@scail.org'

export const SOCIAL = {
  x: 'https://x.com/SCAiLorg',
}

// Joshua's own shows, featured on the Resources page.
// The Spotify/Apple/YouTube entries are search links (they always land on the
// right show) because the exact show URLs weren't available when this was built.
// Paste the direct links here when you have them; nothing else needs to change.
export const FOUNDER_SHOWS = [
  {
    id: 'approachable-ai',
    name: 'Approachable AI',
    kind: 'Video series & podcast',
    logo: 'media/approachable-ai.png',
    line: 'Joshua’s show on using AI without the jargon: what the tools actually do, and how to start building with them.',
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/results?search_query=Approachable+AI+Joshua+German' },
      { label: 'Spotify', url: 'https://open.spotify.com/search/Approachable%20AI/podcasts' },
    ],
  },
  {
    id: 'eclectic-polymath',
    name: 'The Eclectic Polymath Podcast',
    kind: 'Podcast',
    line: 'Deep dives on history, culture, religion, world leaders and technology, with new episodes every week.',
    featured: {
      label: 'Start with: Anthropic by the Numbers',
      url: 'https://open.spotify.com/episode/1sPFk3tLCuKqSKlX5gvwFh',
    },
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/search/The%20Eclectic%20Polymath%20Podcast/podcasts' },
      { label: 'Apple Podcasts', url: 'https://podcasts.apple.com/us/search?term=The%20Eclectic%20Polymath%20Podcast' },
      { label: 'X', url: 'https://x.com/Eclectic_Plymth' },
    ],
  },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
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
