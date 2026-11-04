import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import NightScene from '../components/NightScene'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { team } from '../data/team'

const VALUES = [
  { n: '01', title: 'Access over exclusion', body: 'AI education for everyone, regardless of background, age, or technical experience.' },
  { n: '02', title: 'Meet people where they are', body: 'We bring workshops to communities. We don’t wait for them to come to us.' },
  { n: '03', title: 'Practical over theoretical', body: 'Real skills you can use today. Not abstract concepts or academic lectures.' },
  { n: '04', title: 'Community first', body: 'Built by and for the communities we serve. Local ownership, local impact.' },
]

const AUDIENCES = [
  'Working adults & job seekers',
  'Small business owners',
  'Farmers & agricultural workers',
  'Youth 14–22',
  'Seniors & retirees',
  'Teachers & community educators',
  'Anyone curious',
]

const PHASES = [
  {
    phase: 'Now',
    name: 'Learn',
    title: 'AI literacy, statewide',
    body: 'Free, hands-on classes in churches, libraries, community centers, and schools, starting in the Midlands and growing across all 46 counties.',
  },
  {
    phase: 'Next',
    name: 'Build',
    title: 'A community incubator',
    body: 'Turning curious learners into founders through cohorts, hackathons, and demo days.',
  },
  {
    phase: 'Horizon',
    name: 'Fund',
    title: 'A community investment fund',
    body: 'Backing the strongest local ventures, and sending returns back into education.',
  },
]

export default function AboutPage() {
  const joshua = team.find((p) => p.id === 'joshua-german')

  return (
    <>
      <PageHero eyebrow="About" title="Built at home, for home.">
        <p>SCAiL exists so no South Carolina community gets left behind as AI reshapes work and daily life.</p>
      </PageHero>

      {/* ── Mission pull quote ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-gold">Our mission</p>
          <blockquote className="mt-8 max-w-5xl font-display text-3xl leading-[1.15] sm:text-5xl lg:text-6xl">
            <span aria-hidden="true" className="mr-1 text-gold">“</span>
            SCAiL equips South Carolina communities with the <span className="text-gold">AI</span> skills they need to compete, earn, and thrive — no technical background required.
            <span aria-hidden="true" className="ml-1 text-gold">”</span>
          </blockquote>
          <div className="mt-10 flex items-center gap-4 text-muted">
            <Crescent className="w-6 text-gold" />
            <span className="eyebrow">South Carolina AI Literacy</span>
          </div>
        </Reveal>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-teal">Why SCAiL exists</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">Access, not talent, is the gap.</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink-soft">
                <p className="text-2xl leading-snug text-ink sm:text-3xl">
                  South Carolina communities are being left behind in the AI revolution, not because they lack talent, but because they lack access.
                </p>
                <p>
                  We don’t teach theory or code. We teach everyday people how to use AI tools to find jobs, grow businesses, protect their families from scams, and build better futures.
                </p>
                <p>
                  So we go where people already gather: community centers, libraries, churches, and schools across the state. Because if you have to drive two hours to learn about AI, you’re not going to learn about AI.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-14 max-w-2xl rounded-3xl border border-line bg-paper p-8 sm:p-10">
                <p className="eyebrow text-coral">A note on the founder</p>
                <p className="mt-5 text-ink-soft">{joshua.bio}</p>
                <p className="mt-4 text-ink-soft">
                  That communications background shapes everything SCAiL does: making complex technology accessible and resonant to real people.
                </p>
                <Link to="/team" className="group mt-7 inline-flex items-center gap-2 font-semibold text-ink">
                  Meet {joshua.name} and the board
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow text-gold">What we believe</p>
                <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">Four commitments we teach by.</h2>
              </div>
            </Reveal>
          </div>
          <ol className="lg:col-span-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <li className="grid gap-4 border-t border-line py-9 sm:grid-cols-[6rem_1fr] sm:gap-8">
                  <span className="font-display text-5xl text-gold sm:text-6xl">{v.n}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{v.title}</h3>
                    <p className="mt-3 max-w-xl text-ink-soft">{v.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Who we serve ─────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow text-coral">Who we serve</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Every age, every trade, every county.</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-14 flex flex-wrap gap-3">
              {AUDIENCES.map((a, i) => (
                <li
                  key={a}
                  className={`rounded-full border px-6 py-3 font-display text-xl sm:text-2xl ${
                    i % 3 === 0 ? 'border-ink bg-ink text-paper' : 'border-line bg-surface text-ink'
                  }`}
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── The long game: vertical timeline ─────────────────────────────── */}
      <NightScene>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-sea">The long game</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">
                It starts with <span className="text-sun">AI</span> literacy. It doesn’t end there.
              </h2>
              <p className="mt-6 max-w-md text-moon/65">
                Education creates founders. Founders create companies. Companies create community wealth, and that wealth funds more education.
              </p>
            </Reveal>
          </div>
          <ol className="relative lg:col-span-7">
            <span aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-sun via-moon/25 to-transparent" />
            {PHASES.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <li className="relative pb-14 pl-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-2 h-6 w-6 rounded-full border-2 ${
                      i === 0 ? 'border-sun bg-sun' : 'border-moon/40 bg-night'
                    }`}
                  />
                  <span className={`eyebrow ${i === 0 ? 'text-sun' : 'text-moon/55'}`}>{p.phase}</span>
                  <h3 className="mt-2 text-5xl sm:text-6xl">{p.name}</h3>
                  <p className="mt-4 font-sans text-lg font-semibold">{p.title}</p>
                  <p className="mt-2 max-w-lg text-moon/65">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </NightScene>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-teal">Join us</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Learn with us, or help us reach your town.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-night transition hover:brightness-110"
              >
                See the programs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition hover:bg-surface-2"
              >
                Get involved
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
