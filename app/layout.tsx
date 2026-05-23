import './globals.css'

export const metadata = {
  title: 'Aadarsh Pincha',
  description: 'Analyst focused on Indian equities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{position:'sticky',top:0,zIndex:100,background:'var(--bg)',borderBottom:'1px solid var(--border)',padding:'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'58px'}}>
          <a href="/" style={{fontFamily:'Georgia,serif',fontSize:'17px',color:'var(--text)'}}>AP</a>
          <ul style={{listStyle:'none',display:'flex',gap:'32px'}}>
            {[['Home','/'],['About','/about'],['Experience','/experience'],['Research','/research']].map(([label,href])=>(
              <li key={href}><a href={href} style={{color:'var(--muted)',fontSize:'12px',letterSpacing:'0.07em',textTransform:'uppercase'}}>{label}</a></li>
            ))}
          </ul>
        </nav>
        {children}
        <footer style={{borderTop:'1px solid var(--border)',padding:'32px 48px',maxWidth:'900px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <p style={{fontSize:'12px',color:'var(--dim)'}}>© 2026 Aadarsh Pincha · Bangalore</p>
          <div style={{display:'flex',gap:'24px'}}>
            <a href="mailto:aadarsh.pincha@gmail.com" style={{fontSize:'12px',color:'var(--muted)'}}>Email</a>
            <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{fontSize:'12px',color:'var(--muted)'}}>LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  )
}