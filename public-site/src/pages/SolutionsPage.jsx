import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Heart, Briefcase, Store, GraduationCap, Church } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { solutions } from '../data/solutions'
import { courses } from '../data/programs'

const ICONS = { heart: Heart, briefcase: Briefcase, store: Store, graduation: GraduationCap, church: Church }

const TONE = {
  sea: { text: 'text-teal', bg: 'bg-sea' },
  sun: { text: 'text-gold', bg: 'bg-sun' },
  coral: { text: 'text-coral', bg: 'bg-coral' },
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI for You"
        title={
          <>
            Whatever your day looks like, <span className="text-sun">AI</span> can lighten it.
          </>
        }
      >
        <p>
          Pick the part of life you want help with. Each path shows real things you can do with AI, prompts you can try tonight, how to stay safe, and the free class that goes with it.
        </p>
      </PageHero>

      {/* ── Track grid ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-gold">Five places to start</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Start where you already are.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = ICONS[s.icon]
            const tone = TONE[s.color]
            const featured = s.slug === 'churches'
            return (
              <Reveal key={s.slug} delay={(i % 3) * 110} className={featured ? 'md:col-span-2' : ''}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)] sm:p-10 ${
                    featured ? 'night-sky text-moon' : 'border border-line bg-surface hover:border-ink/30'
                  }`}
                >
                  {featured && <Crescent className="pointer-events-none absolute -right-6 -top-6 w-40 text-moon/10" />}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        featured ? 'bg-sun text-night' : 'bg-surface-2 ' + tone.text
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className={`h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        featured ? 'text-moon/60 group-hover:text-moon' : 'text-muted group-hover:text-ink'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className={`relative mt-8 eyebrow ${featured ? 'text-sea' : tone.text}`}>
                    {featured ? 'Bespoke for faith communities' : `Track ${i + 1}`}
                  </p>
                  <h3 className="relative mt-3 text-3xl sm:text-4xl">{s.title}</h3>
                  <p className={`relative mt-3 ${featured ? 'max-w-xl text-moon/75' : 'text-ink-soft'}`}>{s.tagline}</p>
                  <ul className="relative mt-auto flex flex-wrap gap-2 pt-8">
                    {s.who.slice(0, 3).map((w) => (
                      <li
                        key={w}
                        className={`rounded-full px-3 py-1 text-sm ${
                          featured ? 'border border-moon/20 text-moon/80' : 'border border-line bg-surface-2 text-ink-soft'
                        }`}
                      >
                        {w}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── Not sure where to start ──────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-teal">Not sure where to start?</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">Begin with the basics. Everyone does.</h2>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              {courses['ai-101'].title} is a {courses['ai-101'].duration} class with hands-on demos, no jargon, and no code. It is the best first step for every path above.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper"
              >
                See AI 101 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programs#request"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-ink transition hover:bg-surface-2"
              >
                Request a class
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-14">
            <p className="eyebrow">Get involved</p>
            <h2 className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">Know someone who needs this? Bring it to them.</h2>
            <p className="mt-4 max-w-xl text-night/75">
              Host a class, volunteer, or help us reach another county. Every class is free.
            </p>
            <Link
              to="/get-involved"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-night px-6 py-3 font-semibold text-moon"
            >
              Get involved <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
