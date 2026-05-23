export default function Home() {
  return (
    <main style={{maxWidth:'680px',margin:'0 auto',padding:'160px 48px 80px'}}>
      
      {/* Hero */}
      <div style={{paddingBottom:'80px',borderBottom:'1px solid var(--border)'}}>
        <p style={{fontSize:'10px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'20px',fontFamily:'Bahnschrift, sans-serif'}}>Bangalore</p>
        <h1 style={{fontFamily:'Bahnschrift, sans-serif',fontSize:'clamp(32px,4vw,48px)',fontWeight:300,lineHeight:1.1,marginBottom:'28px',color:'var(--text)'}}>Aadarsh Pincha</h1>
        <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.85,maxWidth:'480px',marginBottom:'8px',fontFamily:'Bahnschrift, sans-serif'}}>
          I am curious about finding businesses that are still under the radar and diving deep into their business model.
        </p>
        <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.85,maxWidth:'480px',marginBottom:'44px',fontFamily:'Bahnschrift, sans-serif'}}>
          Interested in the growing businesses of tomorrow.
        </p>
        <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" title="LinkedIn" style={{color:'var(--muted)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="mailto:aadarsh.pincha@gmail.com" title="Email" style={{color:'var(--muted)'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Research */}
      <div style={{paddingTop:'64px'}}>
        <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'28px',fontFamily:'Bahnschrift, sans-serif'}}>Research & Ideas</p>
        <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'8px',padding:'44px',textAlign:'center'}}>
          <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'var(--dim)',margin:'0 auto 18px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2 style={{fontFamily:'Bahnschrift, sans-serif',fontSize:'20px',fontWeight:300,marginBottom:'10px',color:'var(--text)'}}>Coming soon</h2>
          <p style={{fontSize:'13px',color:'var(--muted)',maxWidth:'360px',margin:'0 auto 24px',lineHeight:1.8,fontFamily:'Bahnschrift, sans-serif'}}>
            Research notes and investment ideas on Indian equities are in progress. Drop me a note to be notified.
          </p>
          <a href="mailto:aadarsh.pincha@gmail.com?subject=Research — notify me" style={{padding:'9px 22px',fontSize:'11px',letterSpacing:'0.05em',borderRadius:'3px',background:'var(--accent)',color:'#0d0f12',fontWeight:500,display:'inline-block',fontFamily:'Bahnschrift, sans-serif'}}>
            Get notified →
          </a>
        </div>
      </div>

    </main>
  )
}