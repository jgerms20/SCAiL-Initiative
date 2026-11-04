import { useEffect, useState } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { Crescent, Palmetto } from './Palmetto'
import { NAV, CONTACT_EMAIL, SOCIAL, mailto } from '../site'

export function Wordmark({ className = '' }) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      SC<span className="text-sun">Ai</span>L
    </span>
  )
}

function ThemeToggle({ solid }) {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className={`relative grid h-10 w-10 place-items-center rounded-full border transition-colors ${
        solid ? 'border-line text-ink hover:bg-surface-2' : 'border-moon/25 text-moon hover:bg-moon/10'
      }`}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <Sun className={`absolute h-[18px] w-[18px] transition-all duration-500 ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} />
      <Moon className={`absolute h-[18px] w-[18px] transition-all duration-500 ${dark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
    </button>
  )
}

export default function SiteLayout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Every page opens on a night-sky band, so the bar starts transparent with
  // moonlight text and turns solid once the page scrolls (or the menu opens).
  const solid = scrolled || open

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-paper/85 backdrop-blur-xl border-b border-line text-ink' : 'bg-transparent border-b border-transparent text-moon'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="SCAiL home">
            <Crescent className="w-6 text-current" />
            <Wordmark className="text-[26px] leading-none" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[15px] font-medium transition-opacity ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span className={`absolute inset-x-3.5 -bottom-0.5 h-px bg-current transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle solid={solid} />
            <Link
              to="/get-involved"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sun px-5 py-2.5 text-[15px] font-semibold text-night hover:brightness-110 transition"
            >
              Get involved
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-line bg-paper px-5 pb-6 pt-2" aria-label="Mobile">
            {[...NAV, { to: '/get-involved', label: 'Get involved' }].map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `rise block border-b border-line py-4 font-display text-3xl ${isActive ? 'text-ink' : 'text-ink-soft'}`
                }
                style={{ '--d': `${i * 50}ms` }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="relative overflow-hidden bg-night-deep text-moon grain">
        <Palmetto className="pointer-events-none absolute -bottom-6 right-[4%] h-80 text-moon/[0.05]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <Crescent className="w-7" />
                <Wordmark className="text-3xl" />
              </Link>
              <p className="mt-5 max-w-sm text-moon/65 leading-relaxed">
                South Carolina AI Literacy. Free, hands-on AI education for every community in the Palmetto State.
              </p>
              <a
                href={mailto({ subject: 'Hello from the SCAiL website' })}
                className="mt-6 inline-flex items-center gap-1.5 text-sun font-semibold"
              >
                {CONTACT_EMAIL} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <FooterCol title="Explore" links={[['/programs', 'Programs'], ['/about', 'About'], ['/team', 'Team'], ['/resources', 'Resources']]} />
            <FooterCol title="Take part" links={[['/get-involved', 'Get involved'], ['/programs#request', 'Request a workshop'], ['/get-involved#newsletter', 'Newsletter']]} />
            <div>
              <h4 className="eyebrow text-moon/45 mb-4">Follow</h4>
              <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" className="text-moon/80 hover:text-moon">
                X · @SCAiLorg
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-moon/10 pt-6 text-sm text-moon/45 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} The SCAiL Initiative · A South Carolina nonprofit initiative, founded 2026.</p>
            <p>Palmetto &amp; crescent from the South Carolina state flag. Map data: U.S. Census Bureau.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="eyebrow text-moon/45 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-moon/80 hover:text-moon transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
