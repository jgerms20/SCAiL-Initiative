// One place for everything the whole site links to. Change it here, not in pages.

// ⚠ Confirm this mailbox exists before launch. Every "Get Involved", "Request a
// workshop" and newsletter button opens an email to this address.
export const CONTACT_EMAIL = 'info@scail.org'

export const SOCIAL = {
  x: 'https://x.com/SCAiLorg',
}

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
