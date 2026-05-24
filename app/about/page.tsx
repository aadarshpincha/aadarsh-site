export default function About() {
  return (
    <main style={{paddingTop:'88px'}}>
      <section className="reveal" style={{padding:'60px 48px',borderBottom:'1px solid var(--border)'}}>
        <div style={{display:'flex',gap:'32px',alignItems:'flex-start',marginBottom:'40px'}}>
          <div style={{width:'90px',height:'110px',overflow:'hidden',borderRadius:'6px',flexShrink:0}}>
            <img src="/photo2.jpg" alt="Aadarsh Pincha" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',filter:'brightness(0.8)'}}/>
          </div>
          <div>
            <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'12px'}}>About</p>
            <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(18px,2.5vw,26px)',fontWeight:300,lineHeight:'1.4',fontStyle:'italic',color:'var(--text)'}}>I look for high-growth businesses with durable fundamentals — bought at prices that make sense.</h2>
          </div>
        </div>
        <p style={{fontSize:'14px',fontWeight:300,lineHeight:'1.85',color:'var(--muted)',marginBottom:'16px'}}>Finance professional with experience in equity research and portfolio management across PMS and AIF strategies. My work spans fundamental analysis, multi-asset risk-reward assessment, and factor investing.</p>
        <p style={{fontSize:'14px',fontWeight:300,lineHeight:'1.85',color:'var(--muted)',marginBottom:'16px'}}>Passed CFA Level I in February 2025 with a score of 1770/1900 — top 10% globally. Currently a CFA Level II Candidate.</p>
        <p style={{fontSize:'14px',fontWeight:300,lineHeight:'1.85',color:'var(--muted)',marginBottom:'32px'}}>B.Sc. Economics from St. Joseph's College of Commerce, Bangalore (8.62 GPA). Rank holder in Mathematics at ISC Grade 12 with 97.4%.</p>
        <a href="mailto:aadarsh.pincha@gmail.com" style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text)',display:'inline-flex',alignItems:'center',gap:'8px'}}>→ Get in touch</a>
      </section>

      <section className="reveal" style={{padding:'60px 48px',borderBottom:'1px solid var(--border)'}}>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'32px'}}>Work</p>
        <div style={{borderTop:'1px solid var(--border)',paddingTop:'24px'}}>
          <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:'20px',fontWeight:300,color:'var(--text)',marginBottom:'6px'}}>Equity Research Analyst</p>
          <a href="https://negencapital.com" target="_blank" style={{fontSize:'13px',color:'var(--muted)'}}>Negen Capital ↗</a>
          <p style={{fontSize:'11px',color:'var(--dim)',marginTop:'8px',letterSpacing:'0.06em'}}>SEP 2025 – FEB 2026</p>
        </div>
      </section>

      <section className="reveal" style={{padding:'60px 48px',borderBottom:'1px solid var(--border)'}}>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'32px'}}>Education</p>
        {[
          ['CFA Institute','Level II Candidate · Level I Top 10%','2025 –'],
          ["St. Joseph's College",'B.Sc. Economics · 8.62 GPA','2022 – 2025'],
          ['Bethany Junior College','ISC · 97.4% · Rank in Math','2020 – 2022'],
        ].map(([name,detail,year])=>(
          <div key={name} style={{borderTop:'1px solid var(--border)',padding:'16px 0'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:'16px'}}>
              <div>
                <p style={{fontSize:'13px',color:'var(--text)',marginBottom:'2px'}}>{name}</p>
                <p style={{fontSize:'11px',color:'var(--muted)'}}>{detail}</p>
              </div>
              <p style={{fontSize:'11px',color:'var(--dim)',flexShrink:0}}>{year}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="reveal" style={{padding:'60px 48px'}}>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'32px'}}>Expertise</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
          {['Equity Research','Financial Modelling','Factor Investing','Portfolio Management','Fixed Income','Derivatives','Risk Management','Asset Allocation','SEBI Compliance'].map(skill=>(
            <span key={skill} style={{fontFamily:'Inter,sans-serif',fontSize:'11px',padding:'5px 10px',border:'1px solid var(--border)',color:'var(--muted)'}}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
