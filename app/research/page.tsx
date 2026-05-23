export default function Research() {
    return (
      <main>
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'72px 48px 56px',borderBottom:'1px solid var(--border)'}}>
          <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'16px'}}>Research & Ideas</p>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(36px,5vw,52px)',fontWeight:400,lineHeight:1.1,marginBottom:'16px'}}>Investment theses<br/>on Indian equities.</h1>
          <p style={{fontSize:'15px',color:'var(--muted)',maxWidth:'540px',lineHeight:1.8}}>Original research on Indian listed companies — sector theses, company deep-dives, and quantitative screens.</p>
        </div>
  
        <div style={{maxWidth:'900px',margin:'0 auto',padding:'64px 48px'}}>
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'8px',padding:'56px 48px',textAlign:'center',marginBottom:'48px'}}>
            <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'var(--dim)',margin:'0 auto 24px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'28px',fontWeight:400,marginBottom:'12px'}}>Coming soon</h2>
            <p style={{fontSize:'14px',color:'var(--muted)',maxWidth:'420px',margin:'0 auto 32px',lineHeight:1.8}}>Research notes and investment ideas on Indian equities are in progress. If you'd like to be notified when they're available, drop me a note.</p>
            <a href="mailto:aadarsh.pincha@gmail.com?subject=Research — notify me" style={{padding:'11px 26px',fontSize:'12px',letterSpacing:'0.05em',borderRadius:'3px',background:'var(--accent)',color:'#0d0f12',fontWeight:500}}>Get notified →</a>
          </div>
  
          <div style={{marginTop:'56px',paddingTop:'56px',borderTop:'1px solid var(--border)'}}>
            <div style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'20px'}}>Who gets access</div>
            <h3 style={{fontFamily:'Georgia,serif',fontSize:'22px',fontWeight:400,marginBottom:'16px'}}>Selective, not exclusive.</h3>
            <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.8,maxWidth:'560px'}}>I'll share research with fund managers, analysts, portfolio management professionals, and CFA candidates who are genuinely interested in Indian equities. If that's you, send a short note about yourself and I'll get back to you.</p>
          </div>
        </div>
      </main>
    )
  }