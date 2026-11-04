import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import NightScene from '../components/NightScene'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { mailto } from '../site'

// Real testimonials. SCAiL has not held classes yet, so this is empty and the
// page shows designed placeholders. Add objects shaped like
//   { quote: '...', name: 'First name or how they want to be credited', role: 'Who they are', county: 'Richland' }
// and real cards will render in place of the placeholders. Only add stories
// the person has agreed in writing to share publicly.
export const testimonials = []

const USE_CASES = [
  {
    who: 'A grandmother in Orangeburg',
    tag: 'AI Safety',
    story:
      'A call comes in that sounds exactly like her grandson, asking for money in a hurry. In class she learns how voice-cloning scams work, and sets up a family code word. The next time a call like that comes, she could hang up and phone him back directly.',
  },
  {
    who: 'A barbershop owner in Florence',
    tag: 'AI for Small Business',
    story:
      'He spends his evenings answering booking messages and writing posts. He learns to use AI to draft a week of social posts and quick replies to common questions, then edits them in his own voice. He could get an hour or two of his evening back.',
  },
  {
    who: 'A youth pastor in Greenville',
    tag: 'AI 101',
    story:
      'Teenagers in her group already use chatbots, and she is not sure what to tell them. She learns what these tools are good at, where they make things up, and how to talk about honesty and checking sources, so the conversation can start from understanding.',
  },
  {
    who: 'A job seeker in Sumter',
    tag: 'AI for Your Job',
    story:
      'His resume has not changed in years and applications go unanswered. He learns to use AI to match his experience to a posting, practice interview questions, and tighten his resume, always checking every claim is true. He could start getting callbacks.',
  },
  {
    who: 'A high school junior in Rock Hill',
    tag: 'Youth AI Lab',
    story:
      'She wants to build something, not just use it. In the lab she learns to turn an idea into a small project, and to use AI as a study partner without letting it do her thinking. She could leave with a project to show and a clear sense of what is hers.',
  },
  {
    who: 'A small farm in Marion County',
    tag: 'AI for Farmers & Agriculture',
    story:
      'Between weather, paperwork, and selling at market, there is never enough time. The family learns to use AI to summarize grant and program forms, plan planting notes, and draft product listings. They could spend more days in the field and fewer at the kitchen table.',
  },
]

const COMMITMENTS = [
  { title: 'People trained', body: 'A simple, honest count of the people who attend our classes.' },
  { title: 'Counties reached', body: 'Which of South Carolina’s 46 counties we have taught in, and which are still waiting.' },
  { title: 'Confidence, before and after', body: 'A short survey at the start and end of every class, so we can see whether people actually feel more capable.' },
  { title: 'Follow-up check-ins', body: 'We will ask learners weeks later whether they are still using what they learned, and what got in the way.' },
  { title: 'Host satisfaction', body: 'The churches, libraries, schools, and centers that welcome us will tell us how we did, and we will publish it.' },
]

const TIMELINE = [
  { label: 'Done', title: 'Founded in 2026', body: 'SCAiL begins in Irmo, with a mission to reach every South Carolina community.' },
  { label: 'Done', title: 'Board formed', body: 'Five people with backgrounds in finance, research, data, policy, and communications.' },
  { label: 'Done', title: 'Curriculum for 8 courses built', body: 'Three pathways of free, hands-on classes, ready to teach.' },
  { label: 'Now', title: 'Booking our first host sites in the Midlands', body: 'Looking for churches, libraries, schools, and community centers to say yes.', now: true },
  { label: 'Next', title: 'First classes, then results here', body: 'We will teach, measure, and publish what we learn, including what did not work.' },
]

function Tag({ children, className = '' }) {
  return <span className={`eyebrow inline-flex rounded-full px-3 py-1 ${className}`}>{children}</span>
}

export default function StoriesPage() {
  const hasStories = testimonials.length > 0
  const shareLink = mailto({
    subject: 'My SCAiL story',
    body: 'Name (or how you would like to be credited):\nCounty:\nWhich class:\nWhat changed for you:\n\nIt is OK for SCAiL to share this publicly: yes / no\n',
  })

  return (
    <>
      <PageHero eyebrow="Stories & impact" title="What AI literacy looks like in real life.">
        <p>
          SCAiL is booking its first classes now. Below are the kinds of moments our classes are built for. Real stories will appear here as classes happen.
        </p>
      </PageHero>

      {/* ── Use cases ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <p className="eyebrow text-gold">What we’re building toward</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Six moments a class could change.</h2>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            These scenarios are illustrative. They are not real people, and nothing here has happened yet. They show what we aim to make possible.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.who} delay={(i % 3) * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                <Tag className="self-start border border-dashed border-muted text-muted">Illustrative example</Tag>
                <h3 className="mt-8 text-2xl sm:text-3xl">{u.who}</h3>
                <p className="mt-4 flex-1 text-ink-soft">{u.story}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                  <span className="eyebrow text-muted">Related class</span>
                  <Tag className="bg-surface-2 text-teal">{u.tag}</Tag>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-32">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-coral">In their words</p>
                <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">
                  {hasStories ? 'Straight from our classrooms.' : 'This wall is waiting for its first story.'}
                </h2>
              </div>
              <a href={shareLink} className="group inline-flex items-center gap-2 font-semibold text-ink">
                <Mail className="h-4 w-4" />
                Took a SCAiL class? Share your story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {hasStories
              ? testimonials.map((t, i) => (
                  <Reveal key={`${t.name}-${i}`} delay={(i % 3) * 100}>
                    <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
                      <span aria-hidden="true" className="font-display text-7xl leading-none text-gold">“</span>
                      <blockquote className="mt-2 flex-1 font-display text-2xl leading-snug">{t.quote}</blockquote>
                      <figcaption className="mt-8 border-t border-line pt-5">
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-muted">{[t.role, t.county && `${t.county} County`].filter(Boolean).join(' · ')}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))
              : [0, 1, 2].map((i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="flex h-full min-h-[16rem] flex-col rounded-3xl border border-dashed border-muted/60 bg-surface p-8">
                      <span aria-hidden="true" className="font-display text-8xl leading-none text-gold/50">“</span>
                      <p className="mt-2 flex-1 font-display text-3xl leading-snug text-ink-soft">Your story could be here.</p>
                      <p className="eyebrow mt-8 text-muted">Name · County · Class</p>
                    </div>
                  </Reveal>
                ))}
          </div>
          {!hasStories && (
            <Reveal delay={150}>
              <a
                href={shareLink}
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper"
              >
                Took a SCAiL class? Share your story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Measurement ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow text-teal">Our commitments</p>
                <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">How we’ll measure impact.</h2>
                <p className="mt-5 text-ink-soft">
                  We have no numbers yet, and we will not make any up. This is what we promise to track and publish once classes begin.
                </p>
              </div>
            </Reveal>
          </div>
          <ol className="lg:col-span-8">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <li className="grid gap-3 border-t border-line py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
                  <span className="font-display text-4xl text-gold sm:text-5xl">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{c.title}</h3>
                    <p className="mt-2 max-w-xl text-ink-soft">{c.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Where we are ─────────────────────────────────────────────────── */}
      <NightScene>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-sea">Where we are right now</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">
                Day one of the <span className="text-sun">AI</span> literacy story.
              </h2>
              <p className="mt-6 max-w-md text-moon/65">
                We would rather be honest about the beginning than pretend we are further along.
              </p>
            </Reveal>
          </div>
          <ol className="relative lg:col-span-7">
            <span aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-px bg-gradient-to-b from-sun via-moon/25 to-transparent" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <li className="relative pb-12 pl-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 ${
                      t.now
                        ? 'border-sun bg-sun shadow-[0_0_0_6px_rgba(226,184,87,.25)]'
                        : t.label === 'Done'
                          ? 'border-sea bg-sea/40'
                          : 'border-moon/40 bg-night'
                    }`}
                  />
                  {t.now ? (
                    <div className="rounded-2xl border border-sun/60 bg-sun/10 p-6">
                      <Tag className="bg-sun text-night">Now</Tag>
                      <h3 className="mt-4 text-3xl sm:text-4xl">{t.title}</h3>
                      <p className="mt-2 max-w-lg text-moon/75">{t.body}</p>
                    </div>
                  ) : (
                    <>
                      <span className={`eyebrow ${t.label === 'Done' ? 'text-sea' : 'text-moon/55'}`}>{t.label}</span>
                      <h3 className="mt-2 text-2xl sm:text-3xl">{t.title}</h3>
                      <p className="mt-2 max-w-lg text-moon/65">{t.body}</p>
                    </>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </NightScene>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Crescent className="mx-auto mb-8 w-10 text-gold" />
            <p className="eyebrow text-teal">Be part of the beginning</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Help write the first story.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              Host a class in your town, or lend your time and skills. The first stories on this page will come from the first people who say yes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/programs#request"
                className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-night transition hover:brightness-110"
              >
                Request a workshop
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
