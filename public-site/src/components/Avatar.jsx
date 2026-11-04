import { useState } from 'react'
import { asset } from '../site'
import { initials } from '../data/team'
import { Palmetto } from './Palmetto'

// Portrait with a monogram fallback, shown until a real photo is added
// (see src/data/team.js) or if the photo fails to load.
export default function Avatar({ person, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = person.photo && !failed

  return (
    <div className={`relative overflow-hidden bg-night ${className}`}>
      {showPhoto ? (
        <img
          src={asset(person.photo)}
          alt={`Portrait of ${person.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="night-sky grid h-full w-full place-items-center" role="img" aria-label={person.name}>
          <Palmetto className="absolute bottom-0 right-[8%] h-[70%] text-moon/[0.08]" />
          <span className="relative font-display text-[clamp(2rem,6vw,3.5rem)] text-moon">{initials(person.name)}</span>
        </div>
      )}
    </div>
  )
}
