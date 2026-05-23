import './globals.css'

export const metadata = {
  title: 'Aadarsh Pincha',
  description: 'Analyst focused on Indian equities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Floating dots canvas */}
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

        {/* Nav */}
        <div style={{position:'relative',zIndex:1}}>
          <nav style={{position:'sticky',top:0,zIndex:100,background:'rgba(13,15,18,0.85)',backdropFilter:'blur(10px)',borderBottom:'1px solid var(--border)',padding:'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',height:'58px'}}>
            <a href="/" style={{fontFamily:'"Palatino Linotype",Palatino,serif',fontSize:'17px',color:'var(--text)'}}>AP</a>
            <ul style={{listStyle:'none',display:'flex',gap:'32px'}}>
            {[['Home','/'],['About','/about'],['Research','/research']].map(([label,href])=>(
                <li key={href}><a href={href} style={{color:'var(--muted)',fontSize:'12px',letterSpacing:'0.07em',textTransform:'uppercase'}}>{label}</a></li>
              ))}
            </ul>
          </nav>
          {children}
          <footer style={{borderTop:'1px solid var(--border)',padding:'32px 48px',maxWidth:'780px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{fontSize:'12px',color:'var(--dim)'}}>© 2026 Aadarsh Pincha · Bangalore</p>
            <div style={{display:'flex',gap:'24px'}}>
              <a href="mailto:aadarsh.pincha@gmail.com" style={{fontSize:'12px',color:'var(--muted)'}}>Email</a>
              <a href="https://www.linkedin.com/in/aadarsh-pincha/" target="_blank" style={{fontSize:'12px',color:'var(--muted)'}}>LinkedIn</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}