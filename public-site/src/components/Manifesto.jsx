import Reveal from './Reveal'
import { team } from '../data/team'

// SCAiL's manifesto, shown on the About page (#manifesto).
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

export default function Manifesto() {
  const joshua = team.find((p) => p.id === 'joshua-german')
  const board = team.filter((p) => p.id !== 'joshua-german')

  return (
    <section id="manifesto" className="mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8 py-28 sm:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-gold">Our manifesto</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">What we believe.</h2>
              <p className="mt-5 max-w-sm text-ink-soft">
                Ten things we hold to, in every classroom and every county, for as long as SCAiL exists.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ol>
            {DECLARATIONS.map((d, i) => (
              <Reveal key={d.n} delay={(i % 3) * 60}>
                <li className="grid gap-4 border-t border-line py-9 sm:grid-cols-[6rem_1fr] sm:gap-8">
                  <span className="font-display text-5xl text-gold sm:text-6xl">{d.n}</span>
                  <div>
                    <h3 className="text-2xl leading-snug sm:text-3xl">{d.statement}</h3>
                    <p className="mt-3 max-w-xl text-ink-soft">{d.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <div className="border-t border-line pt-10">
              <p className="font-display text-4xl text-gold">Signed,</p>
              <p className="mt-6 font-display text-2xl sm:text-3xl">{joshua.name}</p>
              <p className="eyebrow mt-2 text-muted">Founder &amp; President</p>
              <p className="mt-8 text-ink-soft">and the SCAiL board</p>
              <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                {board.map((p) => (
                  <li key={p.id}>
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-sm text-muted"> · {p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
