import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Copy, ShieldAlert, Heart, Briefcase, Store, GraduationCap, Church } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Crescent } from '../components/Palmetto'
import { solutions, solutionBySlug } from '../data/solutions'
import { courses } from '../data/programs'
import { mailto } from '../site'

const ICONS = { heart: Heart, briefcase: Briefcase, store: Store, graduation: GraduationCap, church: Church }

const TONE = {
  sea: { text: 'text-teal', bg: 'bg-sea' },
  sun: { text: 'text-gold', bg: 'bg-sun' },
  coral: { text: 'text-coral', bg: 'bg-coral' },
}

function PromptCard({ item }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the text is still on screen to select */
    }
  }

  return (
    <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
      <p className="eyebrow text-gold">{item.label}</p>
      <p className="mt-4 flex-1 rounded-2xl bg-surface-2 p-5 font-mono text-[15px] leading-relaxed text-ink-soft">{item.prompt}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:opacity-90"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy prompt'}</span>
      </button>
    </div>
  )
}

function AudienceTabs({ audiences }) {
  const [active, setActive] = useState(0)
  const current = audiences[active]
  return (
    <div>
      <div role="tablist" aria-label="Choose your audience" className="flex flex-wrap gap-2">
        {audiences.map((a, i) => (
          <button
            key={a.name}
            type="button"
            role="tab"
            id={`aud-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`aud-panel-${i}`}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === i ? 'bg-ink text-paper' : 'border border-line bg-surface text-ink-soft hover:bg-surface-2'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`aud-panel-${active}`}
        aria-labelledby={`aud-tab-${active}`}
        className="mt-6 rounded-3xl border border-line bg-surface p-8 sm:p-10"
      >
        <h3 className="text-3xl">{current.name}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {current.points.map((p) => (
            <li key={p} className="flex gap-3 text-ink-soft">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SolutionPage() {
  const { slug } = useParams()
  const s = solutionBySlug[slug]
  if (!s) return <Navigate to="/solutions" replace />

  const tone = TONE[s.color]
  const others = solutions.filter((o) => o.slug !== s.slug)
  const heroTitle = s.title.startsWith('AI ') ? (
    <>
      <span className="text-sun">AI</span>
      {s.title.slice(2)}
    </>
  ) : (
    s.title
  )

  return (
    <>
      <PageHero eyebrow="AI for You" title={heroTitle}>
        <p>{s.tagline}</p>
      </PageHero>

      {/* ── Who it's for ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28">
        <Reveal>
          <p className={`eyebrow ${tone.text}`}>Who it’s for</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {s.who.map((w) => (
              <li key={w} className="rounded-full border border-line bg-surface px-4 py-2 text-ink-soft">
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── What you can do ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow text-gold">What you can do</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Small things that add up.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {s.useCases.map((u, i) => (
            <Reveal key={u.title} delay={(i % 3) * 100} className="bg-surface">
              <div className="h-full p-8 sm:p-10">
                <p className="eyebrow text-muted">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-6 text-2xl sm:text-3xl">{u.title}</h3>
                <p className="mt-3 text-ink-soft">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Try it tonight ───────────────────────────────────────────────── */}
      <section className="border-y border-line bg-surface-2/50">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="eyebrow text-teal">Try it tonight</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Copy one. Paste it into any chatbot.</h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft">
              Swap the [bracketed parts] for your own details, and leave out names, numbers, and anything private. If the answer is not quite right, just tell it what to change.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {s.tryThis.map((t, i) => (
              <Reveal key={t.label} delay={(i % 2) * 110}>
                <PromptCard item={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bespoke: first five (small business) ─────────────────────────── */}
      {s.firstFive && (
        <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="eyebrow text-coral">This week</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">First 5 things to try this week.</h2>
          </Reveal>
          <ol className="mt-12 space-y-3">
            {s.firstFive.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <li className="flex items-start gap-5 rounded-2xl border border-line bg-surface p-6">
                  <span className="font-display text-4xl leading-none text-coral">{i + 1}</span>
                  <span className="pt-1 text-lg text-ink-soft">{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {/* ── Bespoke: audiences (education) ───────────────────────────────── */}
      {s.audiences && (
        <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="eyebrow text-teal">For every seat in the room</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Parents, students, and educators.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <AudienceTabs audiences={s.audiences} />
            </div>
          </Reveal>
          {s.districtNote && <p className="mt-6 max-w-3xl text-ink-soft">{s.districtNote}</p>}
        </section>
      )}

      {/* ── Bespoke: two angles (churches) ───────────────────────────────── */}
      {s.angles && (
        <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="eyebrow text-gold">Two ways AI touches your congregation</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">Protect your people. Free up your team.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {s.angles.map((a, i) => (
              <Reveal key={a.name} delay={i * 120}>
                <div className="h-full rounded-3xl border border-line bg-surface p-8 sm:p-10">
                  <p className="eyebrow text-muted">Angle {i + 1}</p>
                  <h3 className="mt-4 text-3xl">{a.name}</h3>
                  <p className="mt-3 text-ink-soft">{a.body}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {a.points.map((p) => (
                      <li key={p} className="flex gap-3 text-ink-soft">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Bespoke: hosting steps (churches) ────────────────────────────── */}
      {s.hostingSteps && (
        <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <p className="eyebrow text-teal">Hosting</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">How hosting a SCAiL class at your church works.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {s.hostingSteps.map((h, i) => (
              <Reveal key={h.title} delay={i * 100} className="bg-surface">
                <li className="h-full p-8">
                  <p className="font-display text-5xl text-gold">{i + 1}</p>
                  <h3 className="mt-6 text-2xl">{h.title}</h3>
                  <p className="mt-3 text-ink-soft">{h.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {/* ── Bespoke: ethics (churches) ───────────────────────────────────── */}
      {s.ethics && (
        <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
              <p className="eyebrow text-gold">An honest note</p>
              <h2 className="mt-5 text-3xl leading-[1.1] sm:text-5xl">{s.ethics.title}</h2>
              <p className="mt-5 max-w-3xl text-lg text-ink-soft">{s.ethics.body}</p>
              <ul className="mt-6 space-y-3">
                {s.ethics.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      )}

      {/* ── Stay safe ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <div className="rounded-3xl border border-sun/50 bg-sun/15 p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-gold" aria-hidden="true" />
              <p className="eyebrow text-gold">Stay safe</p>
            </div>
            <h2 className="mt-4 text-3xl leading-[1.1] sm:text-5xl">Before you type anything in.</h2>
            <ul className="mt-6 space-y-3">
              {s.safety.map((t) => (
                <li key={t} className="flex gap-3 text-lg text-ink-soft">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── Recommended classes ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-coral">Recommended classes</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">Learn it in the room, with us.</h2>
            </div>
            <Link to="/programs" className="group inline-flex items-center gap-2 font-semibold text-ink">
              See every course <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {s.courses.map((id, i) => {
            const c = courses[id]
            if (!c) return null
            return (
              <Reveal key={id} delay={i * 110}>
                <Link
                  to="/programs"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`eyebrow ${tone.text}`}>{c.level}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-2xl sm:text-3xl">{c.title}</h3>
                  <p className="mt-3 flex-1 text-ink-soft">{c.description}</p>
                  <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
                    {c.duration} · {c.format}
                  </p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ── Host a class ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sun p-10 text-night sm:p-14">
            <Crescent className="pointer-events-none absolute -right-6 -top-6 w-40 text-night/10" />
            <p className="eyebrow relative">Free for your community</p>
            <h2 className="relative mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">{s.hostCta.title}</h2>
            <p className="relative mt-4 max-w-xl text-night/75">{s.hostCta.body}</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={mailto({ subject: `Host a SCAiL class: ${s.title}`, body: 'Organization:\nCounty:\nBest way to reach me:\n' })}
                className="group inline-flex items-center gap-2 rounded-full bg-night px-6 py-3 font-semibold text-moon"
              >
                Email us to host <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/programs#request"
                className="inline-flex items-center gap-2 rounded-full border border-night/30 px-6 py-3 font-semibold text-night transition hover:bg-night/10"
              >
                Request a workshop
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── More ways AI can help ────────────────────────────────────────── */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="eyebrow text-teal">More ways AI can help</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => {
              const Icon = ICONS[o.icon]
              const t = TONE[o.color]
              return (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link
                    to={`/solutions/${o.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-ink/30"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${t.text}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-semibold leading-snug">{o.title}</span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <Link to="/solutions" className="group mt-8 inline-flex items-center gap-2 font-semibold text-ink">
            All AI for You paths <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
