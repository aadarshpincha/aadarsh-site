export default function About() {
    return (
      <main>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'72px 48px 56px',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>About</p>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,5vw,52px)',fontWeight:400,lineHeight:1.1}}>Finance professional.<br/>Indian equities analyst.</h1>
        </div>
  
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'64px 48px'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'64px'}}>
            <div>
              {[
                <>I'm Aadarsh — a finance professional based in <strong style={{color:'var(--text)',fontWeight:400}}>Bangalore</strong> with a focus on Indian listed equities. My work sits at the intersection of fundamental research, multi-asset analysis, and investment idea generation.</>,
                <>My approach to investing is grounded in business fundamentals — I look for companies with <strong style={{color:'var(--text)',fontWeight:400}}>durable competitive advantages, high-quality earnings, and management teams</strong> that think like owners. Growth is a necessary condition, but I won't overpay for it.</>,
                <>I passed CFA Level I in February 2025 with a score of <strong style={{color:'var(--text)',fontWeight:400}}>1770/1900</strong>, placing in the top 10% globally. I'm currently a <strong style={{color:'var(--text)',fontWeight:400}}>CFA Level II Candidate</strong>, deepening my understanding of equity valuation, fixed income, and derivatives.</>,
                <>Before focusing on equity research, I completed a B.Sc. in Economics from <strong style={{color:'var(--text)',fontWeight:400}}>St. Joseph's College of Commerce, Bangalore</strong>, graduating with an 8.62 GPA. I was a rank holder in Mathematics at ISC Grade 12, scoring 97.4%.</>,
              ].map((text, i) => (
                <p key={i} style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.85,marginBottom:'20px'}}>{text}</p>
              ))}
  
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--accent)',borderRadius:'0 6px 6px 0',padding:'24px 28px',margin:'40px 0'}}>
                <div style={{fontSize:'10px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'8px'}}>CFA Program</div>
                <div style={{fontSize:'15px',color:'var(--text)'}}>Level I — 1770 / 1900 · Top 10% globally</div>
                <div style={{fontSize:'13px',color:'var(--muted)',marginTop:'4px'}}>Level II Candidate · May 2026</div>
              </div>
  
              <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.85}}>Outside of markets, I follow developments in Indian macroeconomics, monetary policy, and capital allocation trends across Indian corporates. I believe the best investment insights come from understanding businesses deeply — their unit economics, their reinvestment opportunities, and the quality of the people running them.</p>
            </div>
  
            <div>
              <div style={{marginBottom:'40px'}}>
                <div style={{fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Education</div>
                {[
                  ['CFA Institute','CFA Level II Candidate','Level I: 1770/1900 · Top 10%'],
                  ["St. Joseph's College of Commerce",'B.Sc. Economics · 2022–2025','8.62 / 10'],
                  ['Bethany Junior College','ISC Grade 12 · 2020–2022','97.4% · Rank in Mathematics'],
                ].map(([name,detail,grade])=>(
                  <div key={name} style={{padding:'14px 0',borderBottom:'1px solid var(--border)'}}>
                    <div style={{fontSize:'14px',color:'var(--text)',marginBottom:'2px'}}>{name}</div>
                    <div style={{fontSize:'12px',color:'var(--muted)'}}>{detail}</div>
                    <div style={{fontSize:'12px',color:'var(--accent)',marginTop:'2px'}}>{grade}</div>
                  </div>
                ))}
              </div>
  
              <div style={{marginBottom:'40px'}}>
                <div style={{fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Languages</div>
                {[['English','Fluent'],['Hindi','Fluent'],['Kannada','Basic'],['French','Basic']].map(([lang,level])=>(
                  <div key={lang} style={{fontSize:'13px',color:'var(--muted)',padding:'6px 0',borderBottom:'1px solid var(--border)',display:'flex',justifyContent:'space-between'}}>
                    {lang}<span style={{fontSize:'11px',color:'var(--dim)'}}>{level}</span>
                  </div>
                ))}
              </div>
  
              <div>
                <div style={{fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Contact</div>
                <div style={{padding:'14px 0',borderBottom:'1px solid var(--border)'}}>
                  <a href="mailto:aadarsh.pincha@gmail.com" style={{fontSize:'14px',color:'var(--accent)'}}>aadarsh.pincha@gmail.com</a>
                </div>
                <div style={{padding:'14px 0'}}>
                  <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{fontSize:'14px',color:'var(--accent)'}}>LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }