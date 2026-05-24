export default function Home() {
  return (
    <main>
      <section className="reveal" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        maxWidth: '680px',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '48px',
        }}>Bangalore, India</p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 52px)',
          fontWeight: 300,
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          color: 'var(--text)',
          marginBottom: '32px',
        }}>
          Aadarsh Pincha
        </h1>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 300,
          lineHeight: '1.85',
          color: 'var(--muted)',
          maxWidth: '380px',
          marginBottom: '12px',
        }}>
          Curious about finding businesses that are still under the radar and diving deep into their business model.
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 300,
          lineHeight: '1.85',
          color: 'var(--muted)',
          maxWidth: '380px',
          marginBottom: '56px',
        }}>
          Interested in the growing businesses of tomorrow.
        </p>

        <div style={{display:'flex', gap:'32px'}}>
          <a href="/about" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>→ About</a>
          <a href="/research" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>→ Research</a>
        </div>
      </section>

      <section className="reveal" style={{
        padding: '120px 48px',
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <div>
          <p style={{fontFamily:'Inter,sans-serif', fontSize:'11px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'32px'}}>
            Research & Ideas
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 300,
            lineHeight: '1.3',
            letterSpacing: '0.02em',
            color: 'var(--text)',
            marginBottom: '32px',
          }}>
            Investment theses on Indian equities.
          </h2>
          <a href="/research" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>→ Request Access</a>
        </div>
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.85',
            color: 'var(--muted)',
          }}>
            Original research on high-growth Indian businesses — sector theses, company deep-dives, and fundamental analysis. Access by request only.
          </p>
        </div>
      </section>
    </main>
  )
}