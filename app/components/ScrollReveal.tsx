'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Scroll reveal
    const sections = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sections.forEach(s => observer.observe(s))

    // Canvas dots
    const canvas = document.createElement('canvas')
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'
    document.body.prepend(canvas)
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let mouse = { x: W / 2, y: H / 2 }
    const isMobile = window.innerWidth < 768

    const dots = Array.from({ length: isMobile ? 60 : 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      baseO: Math.random() * 0.15 + 0.03,
      o: 0,
    }))

    function draw() {
      ctx.clearRect(0, 0, W, H)
      dots.forEach(d => {
        const dist = Math.hypot(d.x - mouse.x, d.y - mouse.y)
        const influence = Math.max(0, 1 - dist / 180)
        d.o = d.baseO + influence * 0.55

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r + influence * 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,210,190,${d.o})`
        ctx.fill()

        // Drift toward mouse slightly when close
        if (dist < 200) {
          d.x += (mouse.x - d.x) * 0.003
          d.y += (mouse.y - d.y) * 0.003
        }

        d.x += d.dx
        d.y += d.dy
        if (d.x < 0 || d.x > W) d.dx *= -1
        if (d.y < 0 || d.y > H) d.dy *= -1
      })
      requestAnimationFrame(draw)
    }

    draw()

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onTouch = (e: TouchEvent) => {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
    }
    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      observer.disconnect()
      canvas.remove()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return null
}