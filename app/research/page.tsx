export default function Research() {
  return (
    <main style={{paddingTop:'88px'}}>

      <section className="reveal" style={{padding:'80px 48px', borderBottom:'1px solid var(--border)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'end'}}>
        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>Research & Ideas</p>
          <h1 style={{
            fontFamily:'Cormorant Garamond,serif',
            fontSize:'clamp(36px,5vw,56px)',
            fontWeight:300,
            lineHeight:'1.2',
            letterSpacing:'0.02em',
            color:'var(--text)',
          }}>
            Investment theses<br/>on Indian equities.
          </h1>
        </div>
        <div style={{paddingBottom:'8px'}}>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)'}}>
            Original research on listed Indian companies — high-growth businesses with structural advantages, researched from first principles.
          </p>
        </div>
      </section>

      <section className="reveal" style={{padding:'100px 48px', borderBottom:'1px solid var(--border)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px'}}>
        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>The Approach</p>
          <h2 style={{
            fontFamily:'Cormorant Garamond,serif',
            fontSize:'clamp(22px,2.5vw,32px)',
            fontWeight:300,
            lineHeight:'1.4',
            fontStyle:'italic',
            color:'var(--text)',
          }}>
            Growth means nothing without discipline on price.
          </h2>
        </div>
        <div style={{paddingTop:'60px'}}>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)', marginBottom:'16px'}}>
            My focus is on Indian listed equities — businesses where growth is structural, not cyclical. Strong operating metrics, clean balance sheets, and management teams that allocate capital well.
          </p>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)'}}>
            Valuation is the final filter, not an afterthought.
          </p>
        </div>
      </section>

      <section className="reveal" style={{padding:'120px 48px', borderBottom:'1px solid var(--border)', textAlign:'center'}}>
        <p style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(28px,4vw,48px)', fontWeight:300, lineHeight:'1.3', color:'var(--text)', marginBottom:'32px', fontStyle:'italic'}}>
          Research notes are in progress.<br/>Coming soon.
        </p>
        <p style={{fontSize:'14px', fontWeight:300, color:'var(--muted)', maxWidth:'400px', margin:'0 auto 48px', lineHeight:'1.85'}}>
          Drop a note to be notified when they're available.
        </p>
        <a href="mailto:aadarsh.pincha@gmail.com?subject=Research — notify me" style={{
          fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.12em',
          textTransform:'uppercase', color:'var(--text)', display:'inline-flex', alignItems:'center', gap:'8px'
        }}>→ Get Notified</a>
      </section>

      <section className="reveal" style={{padding:'100px 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px'}}>
        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>Who Gets Access</p>
          <h3 style={{fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(22px,2.5vw,32px)', fontWeight:300, lineHeight:'1.4', color:'var(--text)', marginBottom:'24px'}}>
            Selective, not exclusive.
          </h3>
        </div>
        <div style={{paddingTop:'72px'}}>
          <p style={{fontSize:'14px', fontWeight:300, lineHeight:'1.85', color:'var(--muted)', marginBottom:'32px'}}>
            Research is shared with fund managers, analysts, and CFA candidates who are genuinely interested in Indian equities. Send a short note and I'll get back to you.
          </p>
          <a href="mailto:aadarsh.pincha@gmail.com?subject=Research Access Request" style={{
            fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.12em',
            textTransform:'uppercase', color:'var(--text)', display:'inline-flex', alignItems:'center', gap:'8px'
          }}>→ Request Access</a>
        </div>
      </section>

    </main>
  )
}
