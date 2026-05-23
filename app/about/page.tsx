export default function About() {
    return (
      <main style={{maxWidth:'680px',margin:'0 auto',padding:'80px 48px'}}>
  
        {/* Hero with photo */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 160px',gap:'40px',alignItems:'start',paddingBottom:'48px',borderBottom:'1px solid var(--border)'}}>
          <div>
            <p style={{fontSize:'10px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'14px'}}>Bangalore</p>
            <h1 style={{fontSize:'36px',fontWeight:300,lineHeight:1.1,marginBottom:'18px',color:'var(--text)'}}>Aadarsh Pincha</h1>
            <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.9}}>
              Finance professional with experience in equity research and portfolio management. Passed CFA Level I with 1770/1900 — top 10% globally. Currently a CFA Level II Candidate. I'm drawn to businesses where growth is structural, management allocates capital well, and valuation leaves room for a margin of safety.
            </p>
          </div>
          <div style={{width:'160px',height:'210px',borderRadius:'6px',overflow:'hidden',border:'1px solid var(--border)',flexShrink:0}}>
            <img src="/photo.jpg" alt="Aadarsh Pincha" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
          </div>
        </div>
  
        {/* Work */}
        <div style={{padding:'40px 0',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'24px'}}>Work</p>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
            <div>
              <div style={{fontSize:'14px',color:'var(--text)',marginBottom:'4px'}}>Equity Research Analyst</div>
              <a href="https://negencapital.com" target="_blank" style={{fontSize:'12px',color:'var(--accent)'}}>Negen Capital →</a>
            </div>
            <div style={{fontSize:'11px',color:'var(--dim)'}}>Sep 2025 – Feb 2026</div>
          </div>
        </div>
  
        {/* Education */}
        <div style={{padding:'40px 0',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'24px'}}>Education</p>
          {[
            ['CFA Institute','Level II Candidate · Level I: 1770/1900 (Top 10%)','2025 –'],
            ["St. Joseph's College of Commerce",'B.Sc. Economics · 8.62 / 10','2022 – 2025'],
            ['Bethany Junior College','ISC Grade 12 · 97.4% · Rank in Mathematics','2020 – 2022'],
          ].map(([name,detail,year])=>(
            <div key={name} style={{display:'flex',justifyContent:'space-between',alignItems:'start',padding:'14px 0',borderBottom:'1px solid var(--border)'}}>
              <div>
                <div style={{fontSize:'13px',color:'var(--text)',marginBottom:'2px'}}>{name}</div>
                <div style={{fontSize:'11px',color:'var(--muted)'}}>{detail}</div>
              </div>
              <div style={{fontSize:'11px',color:'var(--dim)',flexShrink:0,marginLeft:'24px'}}>{year}</div>
            </div>
          ))}
        </div>
  
        {/* Contact */}
        <div style={{paddingTop:'40px'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Contact</p>
          <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.8}}>
            Reach me at{' '}
            <a href="mailto:aadarsh.pincha@gmail.com" style={{color:'var(--accent)'}}>aadarsh.pincha@gmail.com</a>
            {' '}or on{' '}
            <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{color:'var(--accent)'}}>LinkedIn</a>.
          </p>
        </div>
  
      </main>
    )
  }