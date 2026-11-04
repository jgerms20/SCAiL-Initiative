import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import NightScene from '../components/NightScene'
import SCMap from '../components/SCMap'
import Reveal from '../components/Reveal'
import Avatar from '../components/Avatar'
import { Crescent } from '../components/Palmetto'
import { pathways, courses } from '../data/programs'
import { team } from '../data/team'
import { mailto } from '../site'

const TICKER = ['Free, always', 'No tech background needed', 'We come to you', 'Churches', 'Libraries', 'Community centers', 'Schools', 'Seniors to students', 'All 46 counties']

const PRINCIPLES = [
  { n: '01', title: 'Free, every time', body: 'No fees, no laptops required, no catch. If cost is the barrier, we’ve already lost.' },
  { n: '02', title: 'In the room with you', body: 'We teach in the places people already gather: the fellowship hall, the library, the rec center.' },
  { n: '03', title: 'Every age at the table', body: 'A 70-year-old and a 14-year-old can learn in the same room. That mix is the point.' },
]

const PATHWAY_TONE = {
  sea: { dot: 'bg-sea', text: 'text-teal' },
  sun: { dot: 'bg-sun', text: 'text-gold' },
  coral: { dot: 'bg-coral', text: 'text-coral' },
}

const FLYWHEEL = [
  { phase: 'Now', name: 'Learn', title: 'AI literacy, statewide', body: 'Free classes that build skill and trust in every community.' },
  { phase: 'Next', name: 'Build', title: 'A community incubator', body: 'Turning learners into founders through cohorts, hackathons, and demo days.' },
  { phase: 'Horizon', name: 'Fund', title: 'A community investment fund', body: 'Backing the strongest local ventures, and sending returns back into education.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <NightScene variant="hero" moon={false}>
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 sm:px-8 pt-32 pb-48">
          <Crescent className="rise mb-10 w-14 text-moon sm:w-20" style={{ '--d': '0ms' }} />
          <p className="rise eyebrow text-sea" style={{ '--d': '100ms' }}>
            South Carolina AI Literacy · Est. 2026
          </p>
          <h1 className="rise mt-6 max-w-[14ch] text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95]" style={{ '--d': '200ms' }}>
            <span className="text-sun">AI</span> literacy, rooted in South Carolina.
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-moon/75 sm:text-xl" style={{ '--d': '320ms' }}>
            Free, hands-on classes that help people across the Palmetto State use AI on their own terms: at work, at home, and in their communities.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ '--d': '440ms' }}>
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-night hover:brightness-110 transition"
            >
              Find your pathway
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/programs#request"
              className="inline-flex items-center gap-2 rounded-full border border-moon/30 px-7 py-3.5 font-semibold text-moon hover:bg-moon/10 transition"
            >
              Bring SCAiL to your town
            </Link>
          </div>
        </div>
      </NightScene>

      {/* ── Ticker ───────────────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-night/10 bg-sun py-3.5 text-night" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {TICKER.map((t) => (
                <span key={k + t} className="flex items-center gap-5 px-5 eyebrow font-medium">
                  {t}
                  <Crescent className="w-3 text-night/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Why ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-gold">Why SCAiL exists</p>
          <h2 className="mt-5 max-w-4xl text-4xl leading-[1.08] sm:text-6xl">
            The tools reshaping work shouldn’t belong to a few zip codes.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            South Carolina has the talent. What too many communities don’t have is a patient, local, free place to learn what AI is, what it’s good for, and where it can’t be trusted.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 110} className="bg-surface">
              <div className="h-full p-8 sm:p-10">
                <p className="eyebrow text-muted">{p.n}</p>
                <h3 className="mt-8 text-2xl sm:text-3xl">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-teal">Statewide by design</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Forty-six counties. Every one counts.</h2>
              <p className="mt-6 text-lg text-ink-soft">
                Our first classes start in the Midlands, where SCAiL was founded, and grow outward from there. Hover a county or pick a region to explore.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SCMap className="mt-14" />
          </Reveal>
        </div>
      </section>

      {/* ── Pathways ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-coral">Programs</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Three pathways, eight courses.</h2>
            </div>
            <Link to="/programs" className="group inline-flex items-center gap-2 font-semibold text-ink">
              See every course <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pathways.map((p, i) => {
            const tone = PATHWAY_TONE[p.color]
            return (
              <Reveal key={p.id} delay={i * 120}>
                <Link
                  to={`/programs#${p.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`eyebrow ${tone.text}`}>Pathway {i + 1}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-10 text-4xl">{p.name}</h3>
                  <p className="mt-3 text-ink-soft">{p.tagline}</p>
                  <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
                    {p.courses.map((id) => (
                      <li key={id} className="flex items-center gap-3 text-[15px]">
                        <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                        <span className="flex-1">{courses[id].short}</span>
                        <span className="text-sm text-muted">{courses[id].duration}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── Flywheel ─────────────────────────────────────────────────────── */}
      <NightScene>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
          <Reveal>
            <p className="eyebrow text-sea">The long game</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
              We’re not just teaching <span className="text-sun">AI</span>. We’re building an engine.
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-moon/10 lg:grid-cols-3">
            {FLYWHEEL.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} className="bg-night/80 backdrop-blur">
                <li className="h-full p-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-6xl text-moon">{f.name}</span>
                    <span className={`rounded-full px-3 py-1 eyebrow ${i === 0 ? 'bg-sun text-night' : 'border border-moon/20 text-moon/60'}`}>{f.phase}</span>
                  </div>
                  <h3 className="mt-8 font-sans text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-moon/65">{f.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-moon/60">
              Education creates founders. Founders create companies. Companies create community wealth, and that wealth funds more education.
            </p>
          </Reveal>
        </div>
      </NightScene>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">Who we are</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">The people building SCAiL.</h2>
            </div>
            <Link to="/team" className="group inline-flex items-center gap-2 font-semibold">
              Meet the board <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link to="/team" className="group block">
                <Avatar person={p} className="aspect-[4/5] rounded-2xl transition duration-500 group-hover:-translate-y-1" />
                <p className="mt-4 font-semibold leading-tight">{p.name}</p>
                <p className="text-sm text-muted">{p.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Call to action ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-28 sm:pb-36">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-12">
              <p className="eyebrow">For churches, libraries &amp; schools</p>
              <h3 className="mt-6 text-4xl sm:text-5xl">Host a free class.</h3>
              <p className="mt-4 max-w-md text-night/75">
                A room, some tables, and people who want to learn. We bring the curriculum, the instructor, and the equipment.
              </p>
              <Link to="/programs#request" className="mt-8 inline-flex items-center gap-2 rounded-full bg-night px-6 py-3 font-semibold text-moon">
                Request a workshop <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-10 sm:p-12">
              <p className="eyebrow text-teal">Stay in the loop</p>
              <h3 className="mt-6 text-4xl sm:text-5xl">Hear when classes open near you.</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Occasional updates on new classes, free tools worth trying, and what AI means for South Carolina. No hype.
              </p>
              <a
                href={mailto({ subject: 'Add me to the SCAiL updates list', body: 'Name:\nCounty:\n' })}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper"
              >
                Join the list <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
