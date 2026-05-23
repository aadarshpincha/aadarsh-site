'use client'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{background:'transparent',border:'1px solid var(--border)',borderRadius:'20px',padding:'5px 12px',cursor:'pointer',color:'var(--muted)',fontSize:'11px',letterSpacing:'0.05em',fontFamily:'Bahnschrift,sans-serif'}}
    >
      {dark ? '○ Light' : '● Dark'}
    </button>
  )
}