export default function Experience() {
    return (
      <main>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'72px 48px 56px',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Experience</p>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,5vw,52px)',fontWeight:400,lineHeight:1.1}}>Work & skills.</h1>
        </div>
  
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'64px 48px'}}>
          <div style={{display:'grid',gridTemplateColumns:'200px 1fr',gap:'48px',paddingBottom:'48px',borderBottom:'1px solid var(--border)'}}>
            <div>
              <div style={{fontSize:'12px',color:'var(--muted)',letterSpacing:'0.04em',marginBottom:'6px'}}>Sep 2025 – Feb 2026</div>
              <div style={{fontSize:'13px',color:'var(--accent)',marginBottom:'2px'}}>Negen Capital</div>
              <div style={{fontSize:'12px',color:'var(--dim)'}}>Mumbai, India</div>
            </div>
            <div>
              <div style={{fontSize:'20px',fontFamily:'Georgia,serif',fontWeight:400,color:'var(--text)',marginBottom:'6px'}}>Equity Research Analyst</div>
              <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'24px',fontStyle:'italic'}}>One of India's top 5 investment management firms, managing PMS and Category I & III AIF strategies.</div>
              <div style={{fontSize:'13px',color:'var(--dim)',marginBottom:'24px',padding:'12px 16px',borderLeft:'2px solid var(--border)',lineHeight:1.6}}>High-conviction, research-driven equity investing across listed Indian companies.</div>
              <ul style={{listStyle:'none',marginBottom:'24px'}}>
                {[
                  'Conducted sector-agnostic fundamental research on 20+ listed companies, covering business models, financials, and operating drivers to support portfolio management decisions.',
                  'Generated 5+ actionable investment ideas and theses for the fund manager, backed by multi-asset risk-reward analysis across equities, fixed income, and alternative instruments.',
                  'Evaluated 5+ IPO opportunities by reviewing DRHPs, benchmarking peers, and assessing valuation and risk factors including derivatives-linked structures.',
                  'Screened 50+ companies using financial and thematic filters — including factor investing signals (value, growth, momentum, quality) — to shortlist candidates for model portfolio construction.',
                  'Maintained SEBI-compliant investment and exit rationale logbooks; supported compliance audits by organising 500+ regulatory and investment records.',
                  'Designed AI-powered analytical dashboards to track investment theses including momentum strategies and ownership movement trends across capital markets.',
                ].map((point,i)=>(
                  <li key={i} style={{fontSize:'14px',color:'var(--muted)',padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px',lineHeight:1.65}}>
                    <span style={{color:'var(--accent)',flexShrink:0}}>—</span>{point}
                  </li>
                ))}
              </ul>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                {['Equity Research','Factor Investing','PMS / AIF','SEBI Compliance','Financial Modelling','IPO Analysis','Portfolio Management'].map(tag=>(
                  <span key={tag} style={{fontSize:'11px',padding:'3px 10px',borderRadius:'2px',background:'var(--surface)',border:'1px solid var(--border)',color:'var(--dim)'}}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
  
          <div style={{paddingTop:'48px'}}>
            <div style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'32px'}}>Skills</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'32px'}}>
              {[
                ['Investment & Research',['Equity Research & Valuation','Financial Modelling','Portfolio Management','Risk Management','Factor Investing','Asset Allocation','Derivatives (Swaps, Futures, Options)','Fixed Income','Multi-asset Analysis']],
                ['Technical',['MS Excel (Advanced)','Python','R Studio','SPSS','Tally ERP','PowerPoint','Google Workspace','Canva']],
                ['Professional',['Stakeholder Communication','Regulatory Compliance','Model Portfolio Construction','Portfolio Restructuring','Investment Exposure Management','Attention to Detail']],
              ].map(([group, skills])=>(
                <div key={group as string}>
                  <div style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'14px'}}>{group}</div>
                  <ul style={{listStyle:'none'}}>
                    {(skills as string[]).map(skill=>(
                      <li key={skill} style={{fontSize:'13px',color:'var(--muted)',padding:'6px 0',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:'8px'}}>
                        <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'var(--accent)',opacity:0.7,flexShrink:0,display:'inline-block'}}/>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }