import { Palmetto, Crescent } from './Palmetto'

// Seeded star field (one star per county) so the sky is the same on every render.
let seed = 46
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
const STARS = Array.from({ length: 46 }, () => ({
  x: rand() * 100,
  y: rand() * 60,
  s: rand() > 0.85 ? 2.5 : 1.5,
  d: rand() * 5,
}))

// The flag at night: indigo sky, crescent, stars, a line of palmettos on the
// horizon. Children render on top. `variant="hero"` makes the scene full height
// with a large foreground tree; "band" is the shorter version for page headers.
export default function NightScene({ children, variant = 'band', moon = true, className = '' }) {
  const hero = variant === 'hero'
  return (
    <section className={`relative isolate overflow-hidden night-sky grain text-moon ${className}`}>
      {/* stars — one per county */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-moon animate-twinkle"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }}
          />
        ))}
      </div>

      {/* the flag's crescent, upper left, as on the flag */}
      {moon && <Crescent className="absolute -z-10 left-[5%] top-8 w-10 text-moon/90 sm:top-10 sm:w-14" />}

      {/* horizon line of palmettos */}
      <div className="absolute inset-x-0 bottom-0 -z-10 flex items-end justify-between px-[2%] text-night-deep" aria-hidden="true">
        <Palmetto className={hero ? 'h-40 sm:h-56 opacity-70' : 'h-24 sm:h-32 opacity-60'} />
        <Palmetto className={`${hero ? 'h-28 sm:h-36' : 'h-16 sm:h-20'} opacity-50 -scale-x-100 hidden sm:block`} />
        <Palmetto className={`${hero ? 'h-20 sm:h-28' : 'h-14'} opacity-40 hidden md:block`} />
        <Palmetto className={`${hero ? 'h-32 sm:h-44' : 'h-20 sm:h-24'} opacity-55 -scale-x-100 hidden md:block`} />
        <Palmetto className={hero ? 'h-24 sm:h-32 opacity-45' : 'h-16 sm:h-20 opacity-45'} />
      </div>

      {/* the hero gets one big white palmetto, like the flag */}
      {hero && (
        <Palmetto
          className="pointer-events-none absolute -z-10 bottom-0 right-[2%] h-[34%] xl:h-[46%] max-h-[620px] text-moon origin-bottom animate-sway hidden md:block"
          style={{ filter: 'drop-shadow(0 0 60px rgba(70,211,196,.18))' }}
        />
      )}

      {/* ground fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-16 -z-10 bg-gradient-to-t from-night-deep/80 to-transparent" aria-hidden="true" />

      {children}
    </section>
  )
}
