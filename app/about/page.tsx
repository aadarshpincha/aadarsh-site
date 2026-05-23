export default function About() {
    return (
      <main style={{maxWidth:'680px',margin:'0 auto',padding:'60px 24px'}}>
  
        {/* Hero with photo */}
        <div style={{paddingBottom:'40px',borderBottom:'1px solid var(--border)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'24px',marginBottom:'20px'}}>
            <div style={{flex:1}}>
              <p style={{fontSize:'10px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'12px'}}>Bangalore</p>
              <h1 style={{fontSize:'clamp(28px,6vw,36px)',fontWeight:300,lineHeight:1.1,marginBottom:'0',color:'var(--text)'}}>Aadarsh Pincha</h1>
            </div>
            <div style={{width:'100px',height:'130px',borderRadius:'6px',overflow:'hidden',border:'1px solid var(--border)',flexShrink:0}}>
              <img src="/photo.jpg" alt="Aadarsh Pincha" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
            </div>
          </div>
          <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.9}}>
            Finance professional with experience in equity research and portfolio management. Passed CFA Level I with 1770/1900 — top 10% globally. Currently a CFA Level II Candidate. I'm drawn to businesses where growth is structural, management allocates capital well, and valuation leaves room for a margin of safety.
          </p>
        </div>
  
        {/* Work */}
        <div style={{padding:'36px 0',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'20px'}}>Work</p>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'16px',flexWrap:'wrap'}}>
            <div>
              <div style={{fontSize:'14px',color:'var(--text)',marginBottom:'4px'}}>Equity Research Analyst</div>
              <a href="https://negencapital.com" target="_blank" style={{fontSize:'12px',color:'var(--accent)'}}>Negen Capital →</a>
            </div>
            <div style={{fontSize:'11px',color:'var(--dim)'}}>Sep 2025 – Feb 2026</div>
          </div>
        </div>
  
        {/* Education */}
        <div style={{padding:'36px 0',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'20px'}}>Education</p>
          {[
            ['CFA Institute','Level II Candidate · Level I: 1770/1900 (Top 10%)','2025 –'],
            ["St. Joseph's College of Commerce",'B.Sc. Economics · 8.62 / 10','2022 – 2025'],
            ['Bethany Junior College','ISC Grade 12 · 97.4% · Rank in Mathematics','2020 – 2022'],
          ].map(([name,detail,year])=>(
            <div key={name} style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:'16px',padding:'12px 0',borderBottom:'1px solid var(--border)'}}>
              <div style={{flex:1}}>
                <div style={{fontSize:'13px',color:'var(--text)',marginBottom:'2px'}}>{name}</div>
                <div style={{fontSize:'11px',color:'var(--muted)'}}>{detail}</div>
              </div>
              <div style={{fontSize:'11px',color:'var(--dim)',flexShrink:0}}>{year}</div>
            </div>
          ))}
        </div>
  
        {/* Contact */}
        <div style={{paddingTop:'36px'}}>
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