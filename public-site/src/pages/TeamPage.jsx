import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, MapPin, Compass } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Avatar from '../components/Avatar'
import { Crescent } from '../components/Palmetto'
import { team } from '../data/team'
import { mailto } from '../site'

const ADVISOR_AREAS = [
  { title: 'AI & technology', body: 'People who build, deploy, or study AI and can explain it without the jargon.' },
  { title: 'Community development', body: 'Leaders who know how change actually happens in South Carolina towns.' },
  { title: 'Education', body: 'Teachers, administrators, and curriculum designers who know how adults and kids learn.' },
  { title: 'Nonprofit leadership', body: 'Operators who have grown mission-driven organizations and can share what they learned.' },
]

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="The founding board.">
        <p>The people volunteering their time to build SCAiL, so that free AI education reaches every corner of South Carolina.</p>
      </PageHero>

      {/* ── Board profiles ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <div className="space-y-24 sm:space-y-32">
          {team.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={p.id}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                    <Avatar person={p} className="aspect-[4/5] w-full rounded-3xl" />
                  </div>
                  <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                    <p className="eyebrow text-muted">{String(i + 1).padStart(2, '0')}</p>
                    <p className="eyebrow mt-6 text-gold">{p.role}</p>
                    <h2 className="mt-3 text-4xl leading-[1.08] sm:text-6xl">{p.name}</h2>
                    <div className="mt-6 space-y-2 text-sm text-muted">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" />
                        {p.hometown}
                      </p>
                      <p className="flex items-center gap-2">
                        <Compass className="h-4 w-4 shrink-0" />
                        {p.focus}
                      </p>
                    </div>
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.bio}</p>
                    {p.linkedin && (
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-semibold text-ink transition hover:border-ink/30"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── Advisory ─────────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-teal">Grow with us</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">We’re looking for advisors.</h2>
              <p className="mt-6 text-lg text-ink-soft">
                Know someone who should help guide SCAiL? We’re looking for advisors in four areas.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {ADVISOR_AREAS.map((a, i) => (
              <Reveal key={a.title} delay={i * 90} className="bg-surface">
                <div className="h-full p-8 sm:p-10">
                  <p className="eyebrow text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-6 text-2xl sm:text-3xl">{a.title}</h3>
                  <p className="mt-3 text-ink-soft">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={mailto({ subject: 'Advisor suggestion for SCAiL', body: 'Who:\nTheir expertise:\nHow you know them:\n' })}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper"
            >
              Suggest an advisor <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Closing call to action ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-14">
            <Crescent className="absolute -right-6 -top-6 w-40 text-night/10 sm:w-56" />
            <p className="eyebrow">Get involved</p>
            <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl">Want to help build this with us?</h2>
            <p className="mt-4 max-w-md text-night/75">
              Volunteer, host a class, or bring SCAiL to your community. There’s a place for you.
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
