import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Copy, Plus } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import scMap from '../data/scMap.json'
import { mailto } from '../site'

const COUNTIES = scMap.counties.map((c) => c.name).sort((a, b) => a.localeCompare(b))

const INTERESTS = [
  'Host a class',
  'Volunteer',
  'Teach with us',
  'Partner or sponsor',
  'Lend my expertise',
  'Spread the word',
  'Support a class',
]

const HELP_MAIL = {
  volunteer: {
    subject: 'I’d like to volunteer with SCAiL',
    body: 'Hi SCAiL team,\n\nI’d like to volunteer: setting up rooms, sitting with learners, or greeting people at classes.\n\nName:\nCounty:\nDays/times I’m usually free:\nAnything else you should know:\n',
  },
  teach: {
    subject: 'I’d like to teach with SCAiL',
    body: 'Hi SCAiL team,\n\nI’m interested in becoming a SCAiL facilitator and in the Train the Trainer course.\n\nName:\nCounty:\nTeaching or training experience:\nBest way to reach me:\n',
  },
  partner: {
    subject: 'Partnering with or sponsoring SCAiL',
    body: 'Hi SCAiL team,\n\nWe’d like to talk about partnering with or sponsoring SCAiL.\n\nOrganization:\nType (employer, church, library, foundation, other):\nYour name and role:\nCounty:\nWhat we have in mind:\n',
  },
  expertise: {
    subject: 'I’d like to lend my expertise to SCAiL',
    body: 'Hi SCAiL team,\n\nI’d like to advise SCAiL.\n\nName:\nCounty:\nMy field (tech, education, community development, nonprofit leadership, other):\nA bit about my background:\n',
  },
  word: {
    subject: 'Help me spread the word about SCAiL',
    body: 'Hi SCAiL team,\n\nI’d like to help spread the word. Please send me something I can share.\n\nName:\nCounty:\nWho I’m going to tell (church, library, school, workplace, friends):\n',
  },
}

const IDEAS = [
  'Tell your pastor or church office',
  'Mention it to your librarian',
  'Ask your principal or teacher',
  'Share with a neighbor who’s curious about AI',
]

const FAQ = [
  { q: 'Is it really free?', a: 'Yes. Every SCAiL class is free to attend. There are no fees, no sign-up costs, and nothing to buy.' },
  { q: 'Do I need a computer or any experience?', a: 'No. Start exactly where you are. We bring the equipment for the hands-on parts, so you can just show up and learn.' },
  { q: 'Where are classes held?', a: 'In community spaces: churches, libraries, community centers, and schools. Our first classes start in the Midlands and grow outward across South Carolina.' },
  { q: 'Who teaches?', a: 'SCAiL facilitators. We’re building our facilitator team now, and if you’d like to join it, use the Teach with us option above.' },
  { q: 'Is SCAiL a 501(c)(3)?', a: 'SCAiL is a new South Carolina nonprofit. We’re working on federal tax-exempt status and will share updates here.' },
  { q: 'Can my organization partner?', a: 'Yes. Email us with a few lines about your organization and what you have in mind, and we’ll take it from there.' },
]

const linkBtn = 'group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition'

export default function GetInvolvedPage() {
  const [name, setName] = useState('')
  const [county, setCounty] = useState('')
  const [interests, setInterests] = useState([])
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(-1)

  const toggleInterest = (i) =>
    setInterests((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]))

  const summary = [
    'Hi SCAiL team,',
    '',
    `Name: ${name || '(not given)'}`,
    `County: ${county || '(not given)'}`,
    `I’d like to help by: ${interests.length ? interests.join(', ') : '(not sure yet)'}`,
    '',
    'Message:',
    message || '(none)',
  ].join('\n')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const field =
    'mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-ink/40 focus:outline-none'

  return (
    <>
      <PageHero eyebrow="Get involved" title="Bring SCAiL home.">
        <p>There’s a role for everyone who cares about their community. Pick the one that fits and we’ll take it from there.</p>
      </PageHero>

      {/* ── Ways to help ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-gold">Ways to help</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Six ways to be part of it.</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {/* Featured */}
          <Reveal className="lg:col-span-4">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-12">
              <Crescent className="absolute -right-6 -top-6 w-40 text-night/10" />
              <p className="eyebrow">Most needed</p>
              <h3 className="mt-6 text-4xl sm:text-6xl">Host a class.</h3>
              <p className="mt-4 max-w-lg text-lg text-night/75">
                A room, some tables, and people who want to learn. We bring the curriculum, the instructor, and the equipment. You bring the community.
              </p>
              <div className="mt-8">
                <Link to="/programs#request" className={`${linkBtn} bg-night text-moon hover:brightness-125`}>
                  Request a workshop <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
              <p className="eyebrow text-teal">Volunteer</p>
              <h3 className="mt-6 text-3xl">Give a few hours.</h3>
              <p className="mt-3 flex-1 text-ink-soft">Help set up rooms, sit with learners who want a friendly face beside them, and greet people at the door.</p>
              <a href={mailto(HELP_MAIL.volunteer)} className="group mt-6 inline-flex items-center gap-2 font-semibold">
                Email us to volunteer <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-night p-8 text-moon">
              <p className="eyebrow text-sea">Teach with us</p>
              <h3 className="mt-6 text-3xl">Become a facilitator.</h3>
              <p className="mt-3 flex-1 text-moon/70">Lead classes in your own community. Our Train the Trainer course gets you ready, no teaching résumé required.</p>
              <a href={mailto(HELP_MAIL.teach)} className="group mt-6 inline-flex items-center gap-2 font-semibold text-sun">
                Email us to teach <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface-2 p-8">
              <p className="eyebrow text-coral">Partner or sponsor</p>
              <h3 className="mt-6 text-3xl">Back a class.</h3>
              <p className="mt-3 flex-1 text-ink-soft">Employers, churches, libraries, and foundations: help us open doors in more counties.</p>
              <a href={mailto(HELP_MAIL.partner)} className="group mt-6 inline-flex items-center gap-2 font-semibold">
                Start a conversation <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
              <p className="eyebrow text-gold">Lend your expertise</p>
              <h3 className="mt-6 text-3xl">Advise us.</h3>
              <p className="mt-3 flex-1 text-ink-soft">Work in tech, education, community development, or nonprofit leadership? We’d value your judgment.</p>
              <a href={mailto(HELP_MAIL.expertise)} className="group mt-6 inline-flex items-center gap-2 font-semibold">
                Offer your expertise <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6">
            <div className="grid gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow text-teal">Spread the word</p>
                <h3 className="mt-6 text-3xl sm:text-4xl">The simplest help of all.</h3>
                <a href={mailto(HELP_MAIL.word)} className="group mt-6 inline-flex items-center gap-2 font-semibold">
                  Ask us for something to share <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <ul className="space-y-3">
                {IDEAS.map((idea) => (
                  <li key={idea} className="flex items-center gap-3 text-ink-soft">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Interest form ────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <p className="eyebrow text-teal">Not sure where you fit?</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">Tell us how you’d like to help.</h2>
              <p className="mt-6 text-lg text-ink-soft">
                Fill this in and we’ll write the email for you. <strong className="font-semibold text-ink">Nothing is sent until you press send in your email app.</strong> You can edit anything first.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-3">
              <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-line bg-paper p-6 sm:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-muted">Your name</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} placeholder="Name" />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-muted">Your county</span>
                    <select value={county} onChange={(e) => setCounty(e.target.value)} className={field}>
                      <option value="">Choose a county</option>
                      {COUNTIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <fieldset className="mt-8">
                  <legend className="eyebrow text-muted">I’m interested in</legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {INTERESTS.map((i) => {
                      const on = interests.includes(i)
                      return (
                        <label
                          key={i}
                          className={`cursor-pointer select-none rounded-full border px-4 py-2 text-[15px] transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                            on ? 'border-sun bg-sun font-semibold text-night' : 'border-line bg-surface text-ink-soft hover:border-ink/30'
                          }`}
                        >
                          <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleInterest(i)} />
                          {i}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <label className="mt-8 block">
                  <span className="eyebrow text-muted">A short message</span>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={field}
                    placeholder="What would you like to do, and when are you free?"
                  />
                </label>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={mailto({ subject: 'I’d like to get involved with SCAiL', body: summary })}
                    className={`${linkBtn} bg-ink text-paper hover:opacity-90`}
                  >
                    Open in your email app <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    className={`${linkBtn} border border-line text-ink hover:border-ink/40`}
                    aria-live="polite"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy message'}
                  </button>
                </div>
                <p className="mt-4 text-sm text-muted">
                  This opens a draft in your own email app, addressed to SCAiL. We only receive it once you send it.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <section id="newsletter" className="mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-night p-10 text-moon sm:p-16">
            <Crescent className="absolute -right-8 -top-8 w-48 text-moon/5" />
            <p className="eyebrow text-sea">Stay in the loop</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Hear when classes open near you.</h2>
            <p className="mt-6 max-w-xl text-lg text-moon/70">
              Occasional updates on new classes, free tools worth trying, and what AI means for South Carolina. No hype. Tap the button and send us a quick email to join.
            </p>
            <a
              href={mailto({ subject: 'Add me to the SCAiL updates list', body: 'Name:\nCounty:\n' })}
              className={`${linkBtn} mt-8 bg-sun text-night hover:brightness-110`}
            >
              Join the updates list <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Donations ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-28 sm:pb-36">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-line bg-surface p-8 sm:p-12 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <p className="eyebrow text-coral">Giving</p>
              <h2 className="mt-5 text-3xl leading-[1.1] sm:text-5xl">Want to support a class?</h2>
              <p className="mt-4 max-w-2xl text-ink-soft">
                We don’t take online donations yet. If you’d like to help fund a class, a room, or equipment, email us and we’ll talk through what’s possible.
              </p>
            </div>
            <div className="lg:text-right">
              <a
                href={mailto({
                  subject: 'Supporting a SCAiL class',
                  body: 'Hi SCAiL team,\n\nI’d like to talk about supporting a class.\n\nName:\nCounty:\nWhat I have in mind:\n',
                })}
                className={`${linkBtn} bg-ink text-paper hover:opacity-90`}
              >
                Email about supporting a class <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-28 sm:py-32">
          <Reveal>
            <p className="eyebrow text-gold">Questions</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Good to know.</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {FAQ.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q}>
                  <h3 className="font-sans text-lg font-semibold">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      {f.q}
                      <Plus className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </button>
                  </h3>
                  <div id={`faq-${i}`} role="region" hidden={!isOpen}>
                    <p className="pb-6 pr-10 text-ink-soft">{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-10 text-ink-soft">
            Something else on your mind?{' '}
            <a href={mailto({ subject: 'A question about SCAiL', body: 'Hi SCAiL team,\n\nMy question:\n' })} className="ink-link font-semibold text-ink">
              Email us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
