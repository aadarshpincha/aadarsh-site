import './globals.css'
import ThemeToggle from './components/ThemeToggle'
export const metadata = {
  title: 'Aadarsh Pincha — Equity Research Analyst, Bangalore',
  description: 'Aadarsh Pincha is a finance professional and equity research analyst based in Bangalore, focused on Indian equities. CFA Level II Candidate.',
  keywords: 'Aadarsh Pincha, equity research analyst, Bangalore, Indian equities, CFA, Negen Capital',
  openGraph: {
    title: 'Aadarsh Pincha',
    description: 'Equity research analyst focused on Indian equities.',
    url: 'https://aadarsh-site.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <canvas id="dots" style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}}/>
        <script dangerouslySetInnerHTML={{__html:`
          (function(){
            const canvas = document.getElementById('dots');
            if(!canvas) return;
            const ctx = canvas.getContext('2d');
            let W = canvas.width = window.innerWidth;
            let H = canvas.height = window.innerHeight;
            const dots = Array.from({length:140},()=>({
              x: Math.random()*W,
              y: Math.random()*H,
              r: Math.random()*1.5+0.3,
              dx: (Math.random()-0.5)*0.3,
              dy: (Math.random()-0.5)*0.3,
              o: Math.random()*0.25+0.05
            }));
            function draw(){
              ctx.clearRect(0,0,W,H);
              dots.forEach(d=>{
                ctx.beginPath();
                ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
                ctx.fillStyle='rgba(200,169,110,'+d.o+')';
                ctx.fill();
                d.x+=d.dx; d.y+=d.dy;
                if(d.x<0||d.x>W) d.dx*=-1;
                if(d.y<0||d.y>H) d.dy*=-1;
              });
              requestAnimationFrame(draw);
            }
            draw();
            window.addEventListener('resize',()=>{
              W=canvas.width=window.innerWidth;
              H=canvas.height=window.innerHeight;
            });
          })();
        `}}/>

        <div style={{position:'relative',zIndex:1}}>
          <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(13,15,18,0.9)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border)',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'52px'}}>
            <a href="/" style={{fontSize:'16px',color:'var(--text)',fontFamily:'Bahnschrift,sans-serif'}}>AP</a>
            <ul style={{listStyle:'none',display:'flex',gap:'24px'}}>
              {[['Home','/'],['About','/about'],['Research','/research']].map(([label,href])=>(
                <li key={href}><a href={href} style={{color:'var(--muted)',fontSize:'11px',letterSpacing:'0.07em',textTransform:'uppercase',fontFamily:'Bahnschrift,sans-serif'}}>{label}</a></li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
          {children}
          <footer style={{borderTop:'1px solid var(--border)',padding:'28px 24px',maxWidth:'680px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
            <p style={{fontSize:'11px',color:'var(--dim)',fontFamily:'Bahnschrift,sans-serif'}}>© 2026 Aadarsh Pincha · Bangalore</p>
            <div style={{display:'flex',gap:'20px'}}>
              <a href="mailto:aadarsh.pincha@gmail.com" style={{fontSize:'11px',color:'var(--muted)',fontFamily:'Bahnschrift,sans-serif'}}>Email</a>
              <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{fontSize:'11px',color:'var(--muted)',fontFamily:'Bahnschrift,sans-serif'}}>LinkedIn</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}