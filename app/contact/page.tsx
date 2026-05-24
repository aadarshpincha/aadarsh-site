export default function Contact() {
  return (
    <main style={{paddingTop:'88px'}}>
      <section className="reveal" style={{padding:'60px 48px',borderBottom:'1px solid var(--border)'}}>
        <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'32px'}}>Contact</p>
        <h1 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(32px,5vw,52px)',fontWeight:300,lineHeight:'1.2',letterSpacing:'0.02em',color:'var(--text)'}}>Let&apos;s connect.</h1>
      </section>

      <section className="reveal" style={{padding:'60px 48px',borderBottom:'1px solid var(--border)'}}>
        {[{label:'Full Name',type:'text'},{label:'Email Address',type:'email'}].map(({label,type})=>(
          <div key={label} style={{marginBottom:'36px'}}>
            <label style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--muted)',display:'block',marginBottom:'12px'}}>{label}</label>
            <input type={type} style={{width:'100%',background:'transparent',border:'none',borderBottom:'1px solid var(--border)',padding:'8px 0',color:'var(--text)',fontFamily:'Inter,sans-serif',fontSize:'14px',outline:'none'}}/>
          </div>
        ))}
        <div style={{marginBottom:'40px'}}>
          <label style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--muted)',display:'block',marginBottom:'12px'}}>Message</label>
          <textarea rows={4} style={{width:'100%',background:'transparent',border:'none',borderBottom:'1px solid var(--border)',padding:'8px 0',color:'var(--text)',fontFamily:'Inter,sans-serif',fontSize:'14px',outline:'none',resize:'none'}}/>
        </div>
        <a href="mailto:aadarsh.pincha@gmail.com" style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text)',display:'inline-flex',alignItems:'center',gap:'8px'}}>→ Send Message</a>
      </section>

      <section className="reveal" style={{padding:'60px 48px'}}>
        <div style={{marginBottom:'40px'}}>
          <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'16px'}}>Direct Contact</p>
          <a href="mailto:aadarsh.pincha@gmail.com" style={{fontFamily:'Cormorant Garamond,serif',fontSize:'20px',fontWeight:300,color:'var(--text)'}}>aadarsh.pincha@gmail.com</a>
        </div>
        <div style={{marginBottom:'40px'}}>
          <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'16px'}}>Social</p>
          <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{fontFamily:'Cormorant Garamond,serif',fontSize:'20px',fontWeight:300,color:'var(--text)',display:'inline-flex',alignItems:'center',gap:'8px'}}>LinkedIn ↗</a>
        </div>
        <div>
          <p style={{fontFamily:'Inter,sans-serif',fontSize:'11px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'16px'}}>Location</p>
          <p style={{fontFamily:'Cormorant Garamond,serif',fontSize:'20px',fontWeight:300,color:'var(--text)'}}>Bangalore, India</p>
        </div>
      </section>
    </main>
  )
}
