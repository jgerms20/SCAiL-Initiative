import NightScene from './NightScene'

// Night-sky header used by every interior page.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <NightScene>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-40 pb-32 sm:pt-48 sm:pb-40">
        {eyebrow && (
          <p className="rise eyebrow text-sea" style={{ '--d': '0ms' }}>
            {eyebrow}
          </p>
        )}
        <h1 className="rise mt-4 max-w-4xl text-5xl leading-[1.02] sm:text-7xl" style={{ '--d': '90ms' }}>
          {title}
        </h1>
        {children && (
          <div className="rise mt-6 max-w-2xl text-lg text-moon/75 sm:text-xl" style={{ '--d': '180ms' }}>
            {children}
          </div>
        )}
      </div>
    </NightScene>
  )
}
