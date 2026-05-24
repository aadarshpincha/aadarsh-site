import './globals.css'
import type { ReactNode } from 'react'
import ScrollReveal from './components/ScrollReveal'

export const metadata = {
  title: 'Aadarsh Pincha — Equity Research Analyst, Bangalore',
  description: 'Aadarsh Pincha is a finance professional and equity research analyst based in Bangalore, focused on Indian equities. CFA Level II Candidate.',
  keywords: 'Aadarsh Pincha, equity research analyst, Bangalore, Indian equities, CFA, Negen Capital',
  verification: { google: '5sJtUurIc7M74bYp0FEVYTdQxjeXHOIsJvwUm0wp_SE' },
  openGraph: {
    title: 'Aadarsh Pincha',
    description: 'Equity research analyst focused on Indian equities.',
    url: 'https://aadarsh-site.vercel.app',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '28px 48px',
          backdropFilter: 'blur(12px)',
          background: 'rgba(17,17,17,0.7)',
        }}>
          <a href="/" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '17px',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'var(--text)',
          }}>
            Aadarsh Pincha
          </a>
          <ul style={{listStyle:'none', display:'flex', gap:'36px'}}>
            {[['About','/about'],['Research','/research'],['Contact','/contact']].map(([label,href])=>(
              <li key={href}>
                <a href={href} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 300,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {children}

        <footer style={{
          padding: '32px 48px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.08em', color:'var(--dim)'}}>
            © 2026 Aadarsh Pincha
          </span>
          <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{color:'var(--muted)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:aadarsh.pincha@gmail.com" style={{color:'var(--muted)'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}