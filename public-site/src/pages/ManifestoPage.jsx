import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import NightScene from '../components/NightScene'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { team } from '../data/team'

const AI = <span className="text-gold">AI</span>

const DECLARATIONS = [
  {
    n: '01',
    statement: <>{AI} should belong to everyone, not a few zip codes.</>,
    body: 'The tools reshaping work, school, and daily life are too important to be understood by only the people who happen to live near the companies that build them.',
  },
  {
    n: '02',
    statement: 'Curiosity is the only prerequisite.',
    body: 'You do not need a degree, a laptop, or a technical background. If you are willing to ask a question and try something, you already have everything you need to start.',
  },
  {
    n: '03',
    statement: 'We go to you.',
    body: 'If you have to drive two hours to learn, most people will not. So we teach in the fellowship hall, the library, the rec center, and the classroom, where people already gather and already trust each other.',
  },
  {
    n: '04',
    statement: 'Nobody gets left behind because of age.',
    body: 'A grandmother and her grandson can learn in the same room and each teach the other something. Curiosity has no age limit, and neither do our classes.',
  },
  {
    n: '05',
    statement: 'Trust is earned in person.',
    body: 'A screen cannot shake your hand. We show up, look people in the eye, answer the hard questions honestly, and come back, because trust is built one room at a time.',
  },
  {
    n: '06',
    statement: <>Use {AI}. Don’t let it use you.</>,
    body: 'We teach the power and the pitfalls together: how to protect your privacy, how to spot a scam, and how to check what a machine tells you before you believe it, repeat it, or act on it.',
  },
  {
    n: '07',
    statement: 'Teach people to fish.',
    body: 'Our goal is skill, not dependence. A good class leaves you more capable on your own, able to judge a tool, switch to another one, and decide for yourself when it is worth using at all.',
  },
  {
    n: '08',
    statement: 'South Carolina’s talent is not the problem. Access is.',
    body: 'The ideas, the work ethic, and the ingenuity are already here, in every one of our 46 counties. What has been missing is a patient, local, welcoming place to start.',
  },
  {
    n: '09',
    statement: 'Learning should be free.',
    body: 'No tuition, no sign-up fee, no upsell. When cost is the barrier, the people who most need the knowledge are the ones who never get it.',
  },
  {
    n: '10',
    statement: 'Knowledge becomes ownership.',
    body: 'Learners become builders, builders become founders, and founders can invest back in the communities that raised them. It starts with a class, and it does not have to end there.',
  },
]

const BEFORE_BAND = DECLARATIONS.slice(0, 5)
const AFTER_BAND = DECLARATIONS.slice(5)

function Declaration({ d, index }) {
  const flip = index % 2 === 1
  return (
    <Reveal>
      <li className={`relative border-t border-line py-14 sm:py-20 ${flip ? 'lg:text-right' : ''}`}>
        <div className={`flex flex-col gap-6 lg:items-start lg:gap-14 ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          <span
            aria-hidden="true"
            className="font-display text-[clamp(6rem,16vw,13rem)] leading-[0.8] text-gold/30 select-none lg:shrink-0"
          >
            {d.n}
          </span>
          <div className={`max-w-3xl ${flip ? 'lg:ml-auto' : ''}`}>
            <p className="eyebrow text-muted">Declaration {d.n}</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">{d.statement}</h2>
            <p className={`mt-6 max-w-xl text-lg text-ink-soft ${flip ? 'lg:ml-auto' : ''}`}>{d.body}</p>
          </div>
        </div>
      </li>
    </Reveal>
  )
}

export default function ManifestoPage() {
  const joshua = team.find((p) => p.id === 'joshua-german')
  const board = team.filter((p) => p.id !== 'joshua-german')

  return (
    <>
      <PageHero eyebrow="Manifesto" title="What we believe.">
        <p>Ten things we hold to, in every classroom, in every county, for as long as SCAiL exists.</p>
      </PageHero>

      {/* ── First half of the declarations ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <ol>
          {BEFORE_BAND.map((d, i) => (
            <Declaration key={d.n} d={d} index={i} />
          ))}
        </ol>
      </section>

      {/* ── The one line ─────────────────────────────────────────────────── */}
      <NightScene className="mt-12 sm:mt-16">
        <div className="mx-auto max-w-7xl px-5 py-32 text-center sm:px-8 sm:py-44">
          <Reveal>
            <Crescent className="mx-auto mb-10 w-12 text-moon sm:w-16" />
            <p className="eyebrow text-sea">If you remember one thing</p>
            <p className="mx-auto mt-8 max-w-5xl font-display text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
              The future of <span className="text-sun">AI</span> should not be reserved for a few zip codes. It belongs in all 46 counties.
            </p>
          </Reveal>
        </div>
      </NightScene>

      {/* ── Second half ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <ol>
          {AFTER_BAND.slice(0, 2).map((d, i) => (
            <Declaration key={d.n} d={d} index={i + BEFORE_BAND.length} />
          ))}
        </ol>
      </section>

      {/* ── Pull quote ───────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
          <Reveal>
            <p className="eyebrow text-teal">The short version</p>
            <blockquote className="mt-8 max-w-5xl font-display text-4xl leading-[1.1] sm:text-6xl lg:text-7xl">
              <span aria-hidden="true" className="mr-1 text-gold">“</span>
              Use <span className="text-gold">AI</span>. Don’t let it use you.
              <span aria-hidden="true" className="ml-1 text-gold">”</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4 text-muted">
              <Crescent className="w-6 text-gold" />
              <span className="eyebrow">The SCAiL manifesto</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <ol>
          {AFTER_BAND.slice(2).map((d, i) => (
            <Declaration key={d.n} d={d} index={i + BEFORE_BAND.length + 2} />
          ))}
        </ol>
      </section>

      {/* ── Sign-off ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <div className="max-w-3xl border-t border-line pt-14">
            <p className="font-display text-5xl text-gold sm:text-6xl">Signed,</p>
            <p className="mt-8 font-display text-3xl sm:text-4xl">{joshua.name}</p>
            <p className="eyebrow mt-2 text-muted">Founder · {joshua.hometown}</p>
            <p className="mt-10 text-ink-soft">and the SCAiL board</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {board.map((p) => (
                <li key={p.id} className="text-ink">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-sm text-muted"> · {p.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 sm:pb-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-16">
            <p className="eyebrow">Join the work</p>
            <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">Believe this too? Bring SCAiL home.</h2>
            <p className="mt-5 max-w-xl text-night/75">
              Host a class, volunteer, or tell a neighbor. Every one of these beliefs starts as one room in one town.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 rounded-full bg-night px-7 py-3.5 font-semibold text-moon transition hover:brightness-125"
              >
                Get involved
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-night/40 px-7 py-3.5 font-semibold text-night transition hover:bg-night/10"
              >
                See the programs
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
