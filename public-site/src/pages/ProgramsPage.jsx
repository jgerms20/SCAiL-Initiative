import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, Clock, Copy, Mail, MapPin, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { pathways, courses, courseList } from '../data/programs'
import scMap from '../data/scMap.json'
import { mailto } from '../site'

const PATHWAY_TONE = {
  sea: { dot: 'bg-sea', text: 'text-teal', bar: 'bg-sea' },
  sun: { dot: 'bg-sun', text: 'text-gold', bar: 'bg-sun' },
  coral: { dot: 'bg-coral', text: 'text-coral', bar: 'bg-coral' },
}

const LEGEND = [
  { term: 'Beginner', body: 'No experience needed. We start from the basics.' },
  { term: 'Intermediate', body: 'Builds on the basics, for people ready to lead or teach others.' },
  { term: 'In person', body: 'Everyone together in the room, with an instructor.' },
  { term: 'Hybrid', body: 'A mix of in-person and online sessions.' },
]

const STEPS = [
  { n: '01', title: 'You reach out', body: 'Tell us who you are, where you meet, and what your people want to learn.' },
  { n: '02', title: 'We plan it with you', body: 'Together we shape the course, the room, and what works for your community.' },
  { n: '03', title: 'We bring everything', body: 'The curriculum, the instructor, and the equipment. You bring the room and the people.' },
  { n: '04', title: 'You get follow-up resources', body: 'Take-home material so the learning keeps going after we leave.' },
]

const GROUP_SIZES = ['Under 15', '15–30', '30–60', '60+']

const COUNTIES = scMap.counties.map((c) => c.name).sort((a, b) => a.localeCompare(b))

const fieldClass =
  'mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'

function CourseCard({ course, tone }) {
  const [open, setOpen] = useState(false)
  const panelId = `modules-${course.id}`
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)] sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border border-line px-3 py-1 eyebrow ${tone.text}`}>{course.level}</span>
        <span className="rounded-full border border-line px-3 py-1 eyebrow text-muted">{course.format}</span>
      </div>
      <h4 className="mt-6 font-display text-2xl leading-tight sm:text-3xl">{course.title}</h4>
      <dl className="mt-5 flex flex-col gap-2 text-[15px] text-ink-soft">
        <div className="flex items-center gap-2.5">
          <Clock className={`h-4 w-4 shrink-0 ${tone.text}`} aria-hidden="true" />
          <dt className="sr-only">Duration</dt>
          <dd>{course.duration}</dd>
        </div>
        <div className="flex items-start gap-2.5">
          <Users className={`mt-1 h-4 w-4 shrink-0 ${tone.text}`} aria-hidden="true" />
          <dt className="sr-only">Who it’s for</dt>
          <dd>{course.audience}</dd>
        </div>
      </dl>
      <p className="mt-5 text-ink-soft">{course.description}</p>

      <div className="mt-auto pt-7">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 border-t border-line pt-5 text-left font-semibold text-ink"
        >
          What we cover
          <ChevronDown className={`h-5 w-5 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        <div
          id={panelId}
          role="region"
          aria-label={`${course.short} modules`}
          className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          hidden={!open}
        >
          <ul className="space-y-2.5 overflow-hidden pt-4">
            {course.modules.map((m) => (
              <li key={m} className="flex items-start gap-3 text-[15px] text-ink-soft">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`} />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PathwaySection({ pathway, index }) {
  const tone = PATHWAY_TONE[pathway.color]
  const flip = index % 2 === 1
  const list = pathway.courses.map((id) => ({ id, ...courses[id] }))
  return (
    <section
      id={pathway.id}
      className={`scroll-mt-24 border-b border-line ${index % 2 === 1 ? 'bg-surface' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
            <Reveal className="lg:sticky lg:top-28">
              <p className={`eyebrow ${tone.text}`}>Pathway {index + 1}</p>
              <p className="mt-6 font-display text-[7rem] leading-none text-ink/15 sm:text-[9rem]" aria-hidden="true">
                0{index + 1}
              </p>
              <h2 className="-mt-6 text-4xl leading-[1.08] sm:text-6xl">{pathway.name}</h2>
              <p className="mt-5 max-w-md text-lg text-ink-soft">{pathway.tagline}</p>
              <div className="mt-8 max-w-md border-t border-line pt-6">
                <span className={`block h-1 w-12 rounded-full ${tone.bar}`} />
                <p className="mt-5 eyebrow text-muted">You’ll leave with</p>
                <p className="mt-2 text-ink">{pathway.outcome}</p>
              </div>
            </Reveal>
          </div>
          <div className={`grid gap-5 sm:grid-cols-2 lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
            {list.map((c, i) => (
              <Reveal key={c.id} delay={i * 110} className={i % 2 === 1 ? 'sm:mt-12' : ''}>
                <CourseCard course={c} tone={tone} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RequestBuilder() {
  const [org, setOrg] = useState('')
  const [county, setCounty] = useState('')
  const [picked, setPicked] = useState([])
  const [size, setSize] = useState('')
  const [timing, setTiming] = useState('')
  const [name, setName] = useState('')
  const [reach, setReach] = useState('')
  const [copied, setCopied] = useState(false)

  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const chosen = courseList.filter((c) => picked.includes(c.id)).map((c) => c.title)
  const body = [
    'Hello SCAiL team,',
    '',
    `We’d like to request a free workshop${org ? ` for ${org}` : ''}.`,
    '',
    `Organization / venue: ${org || '—'}`,
    `County: ${county || '—'}`,
    `Courses of interest: ${chosen.length ? '' : '—'}`,
    ...chosen.map((t) => `  - ${t}`),
    `Approximate group size: ${size || '—'}`,
    `Preferred timing: ${timing || '—'}`,
    '',
    `Contact name: ${name || '—'}`,
    `Best way to reach me: ${reach || '—'}`,
    '',
    'Thank you!',
  ].join('\n')
  const subject = `Workshop request — ${org || 'SCAiL'}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mt-14 grid gap-5 lg:grid-cols-2">
      <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-line bg-surface p-7 sm:p-10">
        <div className="grid gap-6">
          <div>
            <label htmlFor="req-org" className="font-semibold">Organization or venue name</label>
            <input id="req-org" type="text" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="e.g. Mount Zion Fellowship Hall" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="req-county" className="font-semibold">County</label>
            <select id="req-county" value={county} onChange={(e) => setCounty(e.target.value)} className={fieldClass}>
              <option value="">Choose a county</option>
              {COUNTIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="font-semibold">Which courses interest you?</legend>
            <div className="mt-3 space-y-5">
              {pathways.map((p) => {
                const tone = PATHWAY_TONE[p.color]
                return (
                  <div key={p.id}>
                    <p className={`eyebrow ${tone.text}`}>{p.name}</p>
                    <div className="mt-2 grid gap-2">
                      {p.courses.map((id) => (
                        <label key={id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-[15px] has-[:checked]:border-gold has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold">
                          <input type="checkbox" checked={picked.includes(id)} onChange={() => toggle(id)} className="h-4 w-4 accent-[var(--gold)]" />
                          <span className="flex-1">{courses[id].title}</span>
                          <span className="text-sm text-muted">{courses[id].duration}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="req-size" className="font-semibold">Approximate group size</label>
            <select id="req-size" value={size} onChange={(e) => setSize(e.target.value)} className={fieldClass}>
              <option value="">Choose a size</option>
              {GROUP_SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="req-timing" className="font-semibold">Preferred timing</label>
            <input id="req-timing" type="text" value={timing} onChange={(e) => setTiming(e.target.value)} placeholder="e.g. Saturday mornings in the spring" className={fieldClass} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="req-name" className="font-semibold">Your name</label>
              <input id="req-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="req-reach" className="font-semibold">Best way to reach you</label>
              <input id="req-reach" type="text" value={reach} onChange={(e) => setReach(e.target.value)} placeholder="Phone, email, or both" className={fieldClass} />
            </div>
          </div>
        </div>
      </form>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl bg-night p-7 text-moon sm:p-10">
          <p className="eyebrow text-sea">Your request, live</p>
          <pre
            aria-live="polite"
            className="mt-5 max-h-96 overflow-auto whitespace-pre-wrap rounded-2xl bg-night-deep p-5 font-sans text-[15px] leading-relaxed text-moon/85"
          >
            <span className="text-sun">Subject: {subject}</span>
            {'\n\n'}
            {body}
          </pre>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mailto({ subject, body })}
              className="group inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 font-semibold text-night transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Open in your email app
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-moon/30 px-6 py-3 font-semibold text-moon transition hover:bg-moon/10"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy request'}
            </button>
          </div>
          <p className="mt-6 text-sm text-moon/65">
            This opens your email app with everything filled in. Nothing is sent until you press send, and nothing is stored on this page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Three pathways. Eight courses. All free.">
        Pick a pathway, or request any single course. Every class is free and taught in person, in the places your community already gathers.
      </PageHero>

      {/* ── Legend ───────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-surface-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEGEND.map((l) => (
              <div key={l.term} className="flex gap-3">
                <Crescent className="mt-1.5 w-3 shrink-0 text-gold" />
                <div>
                  <dt className="eyebrow text-ink">{l.term}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{l.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Pathways ─────────────────────────────────────────────────────── */}
      {pathways.map((p, i) => (
        <PathwaySection key={p.id} pathway={p} index={i} />
      ))}

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <p className="eyebrow text-teal">How a workshop works</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">You bring the room. We bring the rest.</h2>
        </Reveal>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} className="bg-surface">
              <li className="h-full list-none p-8 sm:p-10">
                <p className="eyebrow text-muted">{s.n}</p>
                <h3 className="mt-8 text-2xl">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Request builder ──────────────────────────────────────────────── */}
      <section id="request" className="scroll-mt-24 border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-coral">Request a workshop</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Build your request in a minute.</h2>
              <p className="mt-6 text-lg text-ink-soft">
                Fill in what you know and leave the rest blank. We’ll write the email for you. It opens in your own email app, and nothing is sent until you press send.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Free for churches, libraries, community centers, and schools in all 46 counties.
              </p>
            </div>
          </Reveal>
          <RequestBuilder />
        </div>
      </section>

      {/* ── Call to action ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-16">
            <p className="eyebrow">Not sure where to start?</p>
            <h3 className="mt-6 max-w-2xl text-4xl sm:text-6xl">Come learn with us, or help us teach.</h3>
            <p className="mt-4 max-w-xl text-night/75">
              Volunteer, host, partner, or just say hello. There’s a seat for everyone in this work.
            </p>
            <Link to="/get-involved" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-night px-7 py-3.5 font-semibold text-moon">
              Get involved <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
