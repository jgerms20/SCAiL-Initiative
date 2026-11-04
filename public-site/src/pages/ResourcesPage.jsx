import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Plus, ShieldAlert } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Avatar from '../components/Avatar'
import { FOUNDER_SHOWS, asset, mailto } from '../site'
import { team } from '../data/team'

// Every article carries a date (sorted newest first within each group).
// Items whose publish date couldn't be confirmed were removed rather than shown undated.
const articles = [
  {
    category: 'South Carolina',
    items: [
      {
        date: '2026-10-14',
        title: 'SC Department of Education Creates Office to Navigate AI and New Technology',
        source: 'Count on 2 (WCBD)',
        url: 'https://www.counton2.com/news/south-carolina-news/sc-department-of-education-creates-office-to-navigate-ai-and-new-technology/',
        description: 'The state’s new office aims to give districts a shared vision for AI in classrooms. Most districts don’t have AI policies yet, and most teachers say they want guidance.',
      },
      {
        date: '2026-09-23',
        title: 'Tech Week Greenville Spotlights AI in Classrooms and the Workplace',
        source: 'Fox Carolina',
        url: 'https://www.foxcarolina.com/2026/09/23/tech-week-greenville-spotlights-ai-classrooms-workplace/',
        description: 'Upstate educators and employers on how AI is already changing teaching and work, and what people need to keep up.',
      },
      {
        date: '2026-09-01',
        dateLabel: 'Fall 2026',
        title: 'The SC Tech Bulletin: Fall 2026',
        source: 'SC Council on Competitiveness',
        url: 'https://www.sccompetes.org/resource/the-sc-tech-bulletin-fall-2026/',
        description: 'A roundup of South Carolina’s tech and AI ecosystem, including free statewide learning opportunities like the “AI in the AM” webinar series.',
      },
      {
        date: '2026-08-21',
        title: 'Schools Are Starting to Teach AI Literacy. For Many, That Means Helping Kids See Chatbots’ Flaws',
        source: 'Associated Press via U.S. News',
        url: 'https://www.usnews.com/news/best-states/south-carolina/articles/2026-08-21/schools-are-starting-to-teach-ai-literacy-for-many-that-means-helping-kids-see-chatbots-flaws',
        description: 'Charleston-area educators build an AI policy and train staff, while the AP notes South Carolina hasn’t yet published statewide AI guidance for schools.',
      },
      {
        date: '2025-08-19',
        title: 'An AI Divide Is Growing in Schools. This Camp Wants to Level the Playing Field',
        source: 'South Carolina Public Radio',
        url: 'https://www.southcarolinapublicradio.org/2025-08-19/an-ai-divide-is-growing-in-schools-this-camp-wants-to-level-the-playing-field',
        description: 'How the AI skills gap shows up in SC classrooms, and what community-driven programs are doing about it.',
      },
      {
        date: '2025-01-06',
        title: 'South Carolina Industry Recruitment Reaches $8.19 Billion in 2024',
        source: 'SC Department of Commerce',
        url: 'https://www.sccommerce.com/news/south-carolina-industry-recruitment-reaches-819-billion-2024',
        description: 'Record investment flowing into South Carolina. AI-literate communities are best positioned to benefit.',
      },
      {
        date: '2025-01-14',
        dateLabel: '2025–26 session',
        title: 'Bill 3201: Computer Science Education Initiative Act',
        source: 'SC Legislature',
        url: 'https://www.scstatehouse.gov/sess126_2025-2026/bills/3201.htm',
        description: 'Proposed legislation to expand computer science education in SC schools.',
      },
      {
        date: '2024-10-14',
        title: 'South Carolina Tech Industry Intensifies State’s Economic Growth',
        source: 'Columbia Business Monthly',
        url: 'https://www.columbiabusinessmonthly.com/2024/10/14/509275/new-study-south-carolina-tech-industry-intensifies-state-s-economic-growth',
        description: 'SC’s tech economy is booming, but without AI literacy many communities won’t share in the growth.',
      },
    ],
  },
  {
    category: 'Southeast US',
    items: [
      {
        date: '2024-12-11',
        dateLabel: 'Dec 2024',
        title: 'Georgia State to Build AI Literacy Program for Underserved Communities',
        source: 'GovTech',
        url: 'https://www.govtech.com/education/higher-ed/georgia-state-to-build-ai-literacy-program-for-underserved-communities',
        description: 'A peer program next door building AI literacy in communities that need it most.',
      },
      {
        date: '2024-11-26',
        title: 'NC A&T Partnering in $25M Initiative to Boost AI Literacy Among Youth',
        source: 'WUNC',
        url: 'https://www.wunc.org/education/2024-11-26/nc-a-t-state-university-ai-literacy-google',
        description: 'Major investment in youth AI literacy in North Carolina shows the momentum building across the Southeast.',
      },
    ],
  },
  {
    category: 'National & Global',
    items: [
      {
        date: '2026-09-08',
        title: 'Meta Launches Personal AI Agent Muse to Help With Everyday Tasks',
        source: 'PBS NewsHour',
        url: 'https://www.pbs.org/newshour/nation/meta-launches-personal-ai-agent-muse-to-help-with-everyday-tasks',
        description: 'AI tools are starting to act on your behalf: booking, buying and filling out forms. A good reason to learn how they work before you hand them the keys.',
      },
      {
        date: '2026-05-01',
        title: 'aiEDU Opens 2026 Community Catalyst Grants for Rural and Indigenous AI Readiness',
        source: 'aiEDU',
        url: 'https://aiedu.org/catalyst-fund',
        description: 'A national nonprofit funding local AI-readiness work in communities that are often overlooked, the same gap SCAiL works on in South Carolina.',
      },
      {
        date: '2025-09-19',
        title: 'Why AI Readiness Requires Digital Literacy and Inclusion',
        source: 'Brookings Institution',
        url: 'https://www.brookings.edu/articles/why-ai-readiness-requires-digital-literacy-and-inclusion/',
        description: 'Brookings argues AI readiness starts with basic digital literacy and access, the foundation of SCAiL’s approach.',
      },
    ],
  },
].map((g) => ({ ...g, items: [...g.items].sort((a, b) => b.date.localeCompare(a.date)) }))

const NEW_WITHIN_DAYS = 90

function formatDate(a) {
  if (a.dateLabel) return a.dateLabel
  const d = new Date(`${a.date}T12:00:00`)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function isNew(a) {
  return (Date.now() - new Date(`${a.date}T12:00:00`).getTime()) / 86400000 <= NEW_WITHIN_DAYS
}

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'read', label: 'Read' },
  { id: 'listen', label: 'Listen' },
  { id: 'watch', label: 'Watch' },
  { id: 'try', label: 'Try' },
]

const tools = [
  { name: 'ChatGPT', maker: 'OpenAI', url: 'https://chatgpt.com', line: 'A general-purpose chatbot. Good for drafting, explaining and brainstorming.' },
  { name: 'Claude', maker: 'Anthropic', url: 'https://claude.ai', line: 'A conversational assistant. Good for reading long documents and talking a problem through.' },
  { name: 'Gemini', maker: 'Google', url: 'https://gemini.google.com', line: 'Google’s assistant. A natural place to start if you already use Google’s apps.' },
  { name: 'Microsoft Copilot', maker: 'Microsoft', url: 'https://copilot.microsoft.com', line: 'Microsoft’s assistant, open in any web browser. Good for quick questions and everyday writing.' },
  { name: 'NotebookLM', maker: 'Google', url: 'https://notebooklm.google.com', line: 'Answers questions using only the documents you give it. Good for studying and summarizing your own material.' },
  { name: 'Meta Muse', maker: 'Meta', url: 'https://muse.ai', badge: 'New · Sept 2026', line: 'Meta’s personal AI agent. It can take actions for you, like booking or buying, so review every step before you approve it. U.S. only, 18+.' },
]

const podcasts = [
  ...FOUNDER_SHOWS.map((s) => ({
    name: s.name,
    host: 'Joshua German · SCAiL founder',
    url: s.links.find((l) => l.label === 'Spotify')?.url ?? s.links[0].url,
    line: s.line,
    founder: true,
  })),
  { name: 'The Artificial Intelligence Show', host: 'Paul Roetzer & Mike Kaput · SmarterX', url: 'https://podcast.smarterx.ai', line: 'Plain-spoken weekly conversations on what AI means for business and everyday work.' },
  { name: 'The AI Daily Brief', host: 'Nathaniel Whittemore', url: 'https://aidailybrief.ai', line: 'A short daily rundown of the day’s biggest AI news.' },
  { name: 'Hard Fork', host: 'Kevin Roose & Casey Newton · The New York Times', url: 'https://www.nytimes.com/column/hard-fork', line: 'Two tech journalists unpack the week’s technology news with context and humor.' },
  { name: 'Lex Fridman Podcast', host: 'Lex Fridman', url: 'https://lexfridman.com/podcast', line: 'Long, in-depth interviews with researchers, founders and scientists.' },
  { name: 'The AI Podcast', host: 'NVIDIA', url: 'https://blogs.nvidia.com/ai-podcast/', line: 'Conversations about how AI is being used in science, health, industry and more.' },
  { name: 'Practical AI', host: 'Chris Benson & Daniel Whitenack · Changelog', url: 'https://changelog.com/practicalai', line: 'Real-world uses of AI explained for curious, non-expert listeners.' },
]

const creators = [
  { name: 'Approachable AI', url: FOUNDER_SHOWS[0].links[0].url, line: 'SCAiL founder Joshua German’s plain-language AI videos.', founder: true },
  { name: 'Matt Wolfe', url: 'https://www.youtube.com/results?search_query=Matt+Wolfe+AI', line: 'Regular roundups of new AI tools and what they can do.' },
  { name: 'AI Explained', url: 'https://www.youtube.com/results?search_query=AI+Explained', line: 'Careful breakdowns of AI news and how the technology works.' },
  { name: 'Riley Brown', url: 'https://www.youtube.com/results?search_query=Riley+Brown+AI', line: 'Hands-on walkthroughs of using AI tools to build things.' },
  { name: 'The AI Daily Brief', url: 'https://www.youtube.com/results?search_query=The+AI+Daily+Brief', line: 'The daily AI news show, in video form.' },
]

const glossary = [
  { term: 'AI', def: 'Short for artificial intelligence: computer software that can do things we usually think of as needing human judgment, like understanding language, spotting patterns in photos, or writing a paragraph. It learns from lots of examples rather than following a fixed list of instructions.' },
  { term: 'Chatbot', def: 'A program you talk with by typing (or speaking) in everyday language. ChatGPT, Claude, Gemini and Copilot are chatbots. You ask, it answers, and you can keep going back and forth.' },
  { term: 'Prompt', def: 'What you type to an AI: your question or request. Clear, specific prompts usually get better answers. “Explain this letter from my landlord in plain English” works better than “help.”' },
  { term: 'Hallucination', def: 'When an AI states something false in a confident, believable way, like a made-up fact, quote or web address. It isn’t lying on purpose; it is predicting likely words, not checking facts. That’s why important answers should always be double-checked.' },
  { term: 'Deepfake', def: 'A photo, video or audio clip made or altered by AI to show someone saying or doing something they never did. Some are obvious, some are very convincing. If a clip seems shocking, check where it came from before you believe or share it.' },
  { term: 'Model', def: 'The “brain” behind an AI tool: the program that was trained on huge amounts of text, images or other data and now generates the responses. Different companies build different models, and a single chatbot may use several.' },
  { term: 'Voice cloning scam', def: 'A scam where criminals copy someone’s voice, sometimes from just a short clip, and call pretending to be a grandchild, a boss or a relative in trouble. If a call asks for money urgently, hang up and call the person back on a number you already know. Many families also agree on a private code word.' },
  { term: 'Data privacy', def: 'Control over who gets to see and use your personal information. Anything you type into an AI tool may be stored or reviewed by the company, depending on its settings, so keep sensitive details out and check the privacy settings.' },
  { term: 'Generative AI', def: 'AI that makes something new: writing, pictures, music, video or computer code. Chatbots and image generators are generative AI. What it makes can be useful, but it can also be wrong or made up.' },
  { term: 'Large language model (LLM)', def: 'The kind of model behind most chatbots. It learned from an enormous amount of text and works by predicting what words should come next. That’s why it writes so fluently, and also why it can sound sure about things that aren’t true.' },
  { term: 'Training data', def: 'The examples an AI learned from: books, websites, photos, conversations. An AI can only be as good, fair and up to date as what it was trained on, so it may not know recent news or local details.' },
  { term: 'Bias', def: 'When an AI treats some people or ideas unfairly because of patterns in its training data. For example, it may describe certain jobs as belonging to certain groups. Notice it, question it, and don’t let it make important decisions about people on its own.' },
  { term: 'AI agent', def: 'An AI that doesn’t just answer but takes actions for you, like filling out a form, booking a trip, sending an email or making a purchase. Agents can save time, but always check what one is about to do before you approve it.' },
  { term: 'Multimodal', def: 'An AI that works with more than one kind of input, such as text, photos, voice or video. You might snap a picture of a plant, a receipt or a broken part and ask the AI about it.' },
  { term: 'Phishing (AI-powered)', def: 'Fake emails, texts or messages designed to trick you into clicking a link or sharing information. AI makes them better written and more personal than they used to be. Slow down, check the sender, and never act on urgency alone.' },
  { term: 'Fact-checking', def: 'Confirming something with a trusted source before you believe or share it. With AI, check names, numbers, dates, quotes, links, and anything about health, money or the law, because those are exactly where a wrong answer costs the most.' },
]

function SectionHead({ eyebrow, tone, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${tone}`}>{eyebrow}</p>
      <h2 className="mt-5 text-4xl leading-[1.08] sm:text-6xl">{title}</h2>
      {children && <p className="mt-6 max-w-2xl text-lg text-ink-soft">{children}</p>}
    </div>
  )
}

// "From our founder": Joshua's own shows, plus Joshua as a person to ask.
function FounderFeature() {
  const joshua = team.find((p) => p.id === 'joshua-german')
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 sm:pt-28">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="relative">
            <Avatar person={joshua} photo={joshua.portrait} className="h-full min-h-80 w-full" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-6 text-moon">
              <p className="eyebrow text-sea">From our founder</p>
              <p className="mt-2 font-display text-3xl">{joshua.name}</p>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl leading-tight sm:text-5xl">
              Learn with Joshua, <span className="text-gold">between classes.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              SCAiL’s founder makes two shows of his own. Questions about anything on this page? He’s happy to point you in the right direction.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {FOUNDER_SHOWS.map((s) => (
                <div key={s.id} className="flex flex-col rounded-3xl border border-line bg-paper p-6">
                  <div className="flex items-center gap-4">
                    {s.logo ? (
                      <img src={asset(s.logo)} alt="" className="h-14 w-14 rounded-2xl object-cover" loading="lazy" />
                    ) : (
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-night font-display text-2xl text-sun">EP</span>
                    )}
                    <div>
                      <h3 className="text-2xl leading-tight">{s.name}</h3>
                      <p className="eyebrow mt-1 text-muted">{s.kind}</p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-ink-soft">{s.line}</p>
                  {s.featured && (
                    <a
                      href={s.featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      {s.featured.label} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                    {s.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold transition hover:border-ink/40"
                      >
                        {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailto({ subject: 'A question for Joshua', body: 'Hi Joshua,\n\n' })}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper"
              >
                Ask Joshua a question <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/team" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold">
                Meet the board
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Glossary() {
  const [open, setOpen] = useState(0)
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
        <Reveal>
          <SectionHead eyebrow="Glossary" tone="text-teal" title="AI words, explained like you’re at the kitchen table." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {glossary.map((g, i) => {
              const isOpen = open === i
              return (
                <div key={g.term}>
                  <h3 className="font-sans text-base">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`gloss-${i}`}
                      id={`gloss-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-2xl sm:text-3xl">{g.term}</span>
                      <Plus className={`h-6 w-6 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </button>
                  </h3>
                  <div
                    id={`gloss-${i}`}
                    role="region"
                    aria-labelledby={`gloss-btn-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-7 text-lg text-ink-soft">{g.def}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function ResourcesPage() {
  const [filter, setFilter] = useState('all')
  const show = (id) => filter === 'all' || filter === id

  return (
    <>
      <PageHero eyebrow="Resources" title="Keep learning, at your own pace.">
        <p>Hand-picked places to read, listen, watch and try. Nothing here is required, and all of it is a good next step after a SCAiL class.</p>
      </PageHero>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 border-b border-line bg-paper/90 backdrop-blur sm:top-20">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3.5 sm:px-8" role="group" aria-label="Filter resources">
          {FILTERS.map((f) => {
            const active = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  active ? 'border-ink bg-ink text-paper' : 'border-line bg-surface text-ink-soft hover:border-ink/40 hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {(filter === 'all' || filter === 'listen' || filter === 'watch') && <FounderFeature />}

      <div key={filter} className="rise">
        {/* ── Try ─────────────────────────────────────────────────────────── */}
        {show('try') && (
          <section id="try" className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
            <Reveal>
              <SectionHead eyebrow="Try" tone="text-gold" title="Free tools to play with.">
                The best way to understand AI is to use it a little. Start with something low-stakes, like a recipe, a thank-you note or a question you’ve been curious about.
              </SectionHead>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-14 flex flex-col gap-6 rounded-3xl bg-sun p-8 text-night sm:flex-row sm:items-start sm:p-12">
                <ShieldAlert className="h-10 w-10 shrink-0" aria-hidden="true" />
                <div>
                  <p className="eyebrow">Read this first</p>
                  <h3 className="mt-3 text-3xl sm:text-4xl">Before you type anything in</h3>
                  <ul className="mt-5 max-w-2xl space-y-2.5 text-night/80">
                    <li>Never paste your Social Security number, bank or card numbers, passwords, or medical details.</li>
                    <li>Double-check facts. AI can confidently make things up, so verify anything that matters with a trusted source.</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="eyebrow text-muted">{t.maker}</span>
                        {t.badge && <span className="rounded-full bg-sun px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-night">{t.badge}</span>}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </div>
                    <h3 className="mt-8 text-3xl">{t.name}</h3>
                    <p className="mt-3 text-ink-soft">{t.line}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* ── Listen ──────────────────────────────────────────────────────── */}
        {show('listen') && (
          <section id="listen" className={`${filter === 'all' ? 'border-y border-line bg-surface' : ''}`}>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
              <Reveal>
                <SectionHead eyebrow="Listen" tone="text-teal" title="Podcasts for the commute.">
                  Short daily briefings, long conversations, and two shows from SCAiL’s own founder. Pick one and try an episode or two.
                </SectionHead>
              </Reveal>
              <ul className="mt-14 border-t border-line">
                {podcasts.map((p, i) => (
                  <li key={p.name} className="border-b border-line">
                    <Reveal delay={i * 60}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid gap-3 py-8 sm:grid-cols-12 sm:items-center sm:gap-8"
                      >
                        <div className="sm:col-span-6">
                          <h3 className="text-3xl leading-tight transition-colors group-hover:text-gold sm:text-4xl">{p.name}</h3>
                          <p className="eyebrow mt-3 text-muted">
                            {p.host}
                            {p.founder && <span className="ml-2 rounded-full bg-sun px-2 py-0.5 text-night">From our founder</span>}
                          </p>
                        </div>
                        <p className="text-ink-soft sm:col-span-5">{p.line}</p>
                        <span className="flex items-center gap-1.5 font-semibold sm:col-span-1 sm:justify-end">
                          <span className="sm:sr-only">Listen</span>
                          <ArrowUpRight className="h-6 w-6 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── Watch ───────────────────────────────────────────────────────── */}
        {show('watch') && (
          <section id="watch" className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
            <Reveal>
              <SectionHead eyebrow="Watch" tone="text-coral" title="Creators who explain AI on video.">
                Each card opens YouTube for that creator, so you can pick whichever video looks most useful.
              </SectionHead>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {creators.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(5,15,36,.5)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-coral">{c.founder ? 'From our founder' : 'YouTube'}</span>
                      <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </div>
                    <h3 className="mt-8 text-3xl">{c.name}</h3>
                    <p className="mt-3 flex-1 text-ink-soft">{c.line}</p>
                    <p className="mt-6 border-t border-line pt-4 text-sm text-muted">Opens a YouTube search for this creator</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* ── Read ────────────────────────────────────────────────────────── */}
        {show('read') && (
          <section id="read" className={`${filter === 'all' ? 'border-y border-line bg-surface' : ''}`}>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-32">
              <Reveal>
                <SectionHead eyebrow="Read" tone="text-gold" title="News and research, close to home and far away.">
                  Reporting and analysis on AI literacy, the digital divide, and what it means for communities like ours.
                </SectionHead>
              </Reveal>
              <div className="mt-16 space-y-20">
                {articles.map(({ category, items }, gi) => (
                  <div key={category} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <Reveal className="lg:col-span-4">
                      <div className="lg:sticky lg:top-44">
                        <p className="eyebrow text-muted">{String(gi + 1).padStart(2, '0')}</p>
                        <h3 className="mt-4 text-3xl sm:text-4xl">{category}</h3>
                      </div>
                    </Reveal>
                    <ul className="border-t border-line lg:col-span-8">
                      {items.map((a, i) => (
                        <li key={a.url} className="border-b border-line">
                          <Reveal delay={i * 50}>
                            <a href={a.url} target="_blank" rel="noopener noreferrer" className="group block py-7">
                              <div className="flex items-start justify-between gap-6">
                                <h4 className="font-display text-xl leading-snug transition-colors group-hover:text-gold sm:text-2xl">{a.title}</h4>
                                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                              </div>
                              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                                <span className="eyebrow text-teal">{a.source}</span>
                                <span className="eyebrow text-muted">·</span>
                                <time dateTime={a.date} className="eyebrow text-muted">{formatDate(a)}</time>
                                {isNew(a) && (
                                  <span className="rounded-full bg-sun px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-night">New</span>
                                )}
                              </p>
                              <p className="mt-3 text-ink-soft">{a.description}</p>
                            </a>
                          </Reveal>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Glossary />

      {/* ── Closing ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <Link
            to="/programs"
            className="group inline-flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-3xl leading-tight sm:text-5xl"
          >
            <span>Rather learn in person? <span className="text-gold">Find a free class.</span></span>
            <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
