import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function read() {
  try {
    return localStorage.getItem('scail-theme')
  } catch {
    return null
  }
}

export function ThemeProvider({ children }) {
  // index.html already applied the right class before first paint; start from it.
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#061229' : '#0A1F44')
  }, [dark])

  // Follow the OS setting until the visitor picks a theme themselves.
  useEffect(() => {
    if (read()) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => setDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () =>
    setDark((d) => {
      try {
        localStorage.setItem('scail-theme', d ? 'light' : 'dark')
      } catch {
        // storage blocked (private mode) — theme still switches for this visit
      }
      return !d
    })

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
