export default function Home() {
  return (
    <main>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'110px 48px 90px'}}>
        <p style={{fontSize:'11px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'24px'}}>Indian Equities · Fundamental Research · Long-term</p>
        <h1 style={{fontFamily:'Georgia,serif',fontSize:'clamp(44px,6vw,72px)',fontWeight:400,lineHeight:1.08,marginBottom:'28px',color:'var(--text)'}}>Aadarsh Pincha</h1>
        <p style={{fontSize:'18px',color:'var(--muted)',maxWidth:'560px',lineHeight:1.8,marginBottom:'44px'}}>I look for high-growth Indian businesses with durable fundamentals — bought at prices that make sense.</p>
        <div style={{display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <a href="/research" style={{padding:'11px 26px',fontSize:'12px',letterSpacing:'0.05em',borderRadius:'3px',background:'var(--accent)',color:'#0d0f12',fontWeight:500}}>View research</a>
          <a href="/about" style={{padding:'11px 26px',fontSize:'12px',letterSpacing:'0.05em',borderRadius:'3px',background:'transparent',color:'var(--muted)',border:'1px solid var(--border)'}}>About me</a>
        </div>
      </div>

      <div style={{width:'100%',height:'1px',background:'var(--border)',maxWidth:'900px',margin:'0 auto'}}/>

      <div style={{maxWidth:'900px',margin:'0 auto',padding:'80px 48px'}}>
        <p style={{fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)',marginBottom:'40px'}}>Investment philosophy</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px'}}>
          <div style={{fontFamily:'Georgia,serif',fontSize:'26px',fontWeight:400,lineHeight:1.4,color:'var(--text)'}}>
            Growth means nothing without <em style={{color:'var(--accent)'}}>discipline</em> on price.
          </div>
          <div>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.85,marginBottom:'16px'}}>My focus is on Indian listed equities — businesses where growth is structural, not cyclical. I look for companies with strong operating metrics, clean balance sheets, and management teams that allocate capital well.</p>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.85}}>Valuation is the final filter, not an afterthought. I prefer to wait for the right entry than overpay for quality.</p>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'6px',overflow:'hidden',marginTop:'64px'}}>
          {[['20+','Companies researched'],['1770','CFA Level I / 1900'],['5+','Investment ideas'],['50+','Companies screened']].map(([num,label])=>(
            <div key={label} style={{background:'var(--surface)',padding:'28px 24px'}}>
              <div style={{fontFamily:'Georgia,serif',fontSize:'34px',color:'var(--text)',lineHeight:1,marginBottom:'6px'}}>{num}</div>
              <div style={{fontSize:'11px',color:'var(--muted)',letterSpacing:'0.03em'}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}