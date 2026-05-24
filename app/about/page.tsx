export default function About() {
  return (
    <main style={{paddingTop:'88px'}}>

      {/* Photo + bio split */}
      <section className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        minHeight: '90vh',
      }}>
        {/* Left — photo */}
        <div style={{overflow:'hidden', position:'relative', maxWidth:'120px', maxHeight:'160px', alignSelf:'flex-start', marginTop:'80px', marginLeft:'48px'}}>
          <img
            src="/photo2.jpg"
            alt="Aadarsh Pincha"
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block', filter:'brightness(0.65)'}}
          />
        </div>

        {/* Right — bio */}
        <div style={{padding:'80px 48px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'40px'}}>
            About
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(22px, 2.5vw, 32px)',
            fontWeight: 300,
            lineHeight: '1.4',
            letterSpacing: '0.02em',
            color: 'var(--text)',
            marginBottom: '32px',
            fontStyle: 'italic',
          }}>
            I look for high-growth businesses with durable fundamentals — bought at prices that make sense.
          </h2>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)', marginBottom:'16px'}}>
            Finance professional with experience in equity research and portfolio management across PMS and AIF strategies. My work spans fundamental analysis, multi-asset risk-reward assessment, and factor investing.
          </p>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)', marginBottom:'16px'}}>
            Passed CFA Level I in February 2025 with a score of 1770/1900 — top 10% globally. Currently a CFA Level II Candidate.
          </p>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)', marginBottom:'40px'}}>
            B.Sc. Economics from St. Joseph's College of Commerce, Bangalore (8.62 GPA). Rank holder in Mathematics at ISC Grade 12 with 97.4%.
          </p>
          <a href="mailto:aadarsh.pincha@gmail.com" style={{
            fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.12em',
            textTransform:'uppercase', color:'var(--text)', display:'flex', alignItems:'center', gap:'8px'
          }}>→ Get in touch</a>
        </div>
      </section>

      {/* Work + Education + Skills */}
      <section className="reveal" style={{padding:'100px 48px', borderTop:'1px solid var(--border)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'64px'}}>

        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>Work</p>
          <div style={{borderTop:'1px solid var(--border)', paddingTop:'24px'}}>
            <p style={{fontFamily:'Cormorant Garamond,serif', fontSize:'20px', fontWeight:300, color:'var(--text)', marginBottom:'6px'}}>
              Equity Research Analyst
            </p>
            <a href="https://negencapital.com" target="_blank" style={{fontSize:'13px', color:'var(--muted)', display:'flex', alignItems:'center', gap:'4px'}}>
              Negen Capital ↗
            </a>
            <p style={{fontSize:'11px', color:'var(--dim)', marginTop:'8px', letterSpacing:'0.06em'}}>SEP 2025 – FEB 2026</p>
          </div>
        </div>

        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>Education</p>
          {[
            ['CFA Institute','Level II Candidate · Level I Top 10%','2025 –'],
            ["St. Joseph's College",'B.Sc. Economics · 8.62 GPA','2022 – 2025'],
            ['Bethany Junior College','ISC · 97.4% · Rank in Math','2020 – 2022'],
          ].map(([name,detail,year])=>(
            <div key={name} style={{borderTop:'1px solid var(--border)', padding:'16px 0'}}>
              <p style={{fontSize:'13px', color:'var(--text)', marginBottom:'2px'}}>{name}</p>
              <p style={{fontSize:'11px', color:'var(--muted)'}}>{detail}</p>
              <p style={{fontSize:'11px', color:'var(--dim)', marginTop:'4px', letterSpacing:'0.04em'}}>{year}</p>
            </div>
          ))}
        </div>

        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>Expertise</p>
          <div style={{display:'flex', flexWrap:'wrap', gap:'8px'}}>
            {['Equity Research','Financial Modelling','Factor Investing','Portfolio Management','Fixed Income','Derivatives','Risk Management','Asset Allocation','SEBI Compliance'].map(skill=>(
              <span key={skill} style={{
                fontFamily:'Inter,sans-serif', fontSize:'11px', padding:'5px 10px',
                border:'1px solid var(--border)', color:'var(--muted)', letterSpacing:'0.02em',
              }}>{skill}</span>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}