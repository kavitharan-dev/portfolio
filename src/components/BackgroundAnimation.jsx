import { useEffect, useRef } from 'react'

const MAX_SPEED = 0.7
const FLEE_RADIUS = 160
const IDLE_MS = 2200

function BackgroundAnimation() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let lastMoveTime = Date.now()
    let isIdle = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
      lastMoveTime = Date.now()
      isIdle = false
      container?.classList.remove('background-effects--idle')
    }

    const initParticles = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const count = Math.min(75, Math.floor((w * h) / 18000))

      particles = Array.from({ length: count }, () => {
        const onRight = Math.random() > 0.28
        return {
          x: onRight ? w * 0.38 + Math.random() * w * 0.58 : Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          radius: Math.random() * 1.5 + 1,
          opacity: Math.random() * 0.3 + 0.38,
        }
      })
    }

    const clampSpeed = (p) => {
      const speed = Math.hypot(p.vx, p.vy)
      if (speed > MAX_SPEED) {
        p.vx = (p.vx / speed) * MAX_SPEED
        p.vy = (p.vy / speed) * MAX_SPEED
      }
    }

    const wakeParticles = () => {
      particles.forEach((p) => {
        if (Math.hypot(p.vx, p.vy) < 0.05) {
          p.vx = (Math.random() - 0.5) * 0.28
          p.vy = (Math.random() - 0.5) * 0.28
        }
      })
    }

    const stopParticles = () => {
      particles.forEach((p) => {
        p.vx = 0
        p.vy = 0
      })
    }

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      lastMoveTime = Date.now()

      if (isIdle) {
        isIdle = false
        container?.classList.remove('background-effects--idle')
        wakeParticles()
      }
    }

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const updateParticles = (w, h, mouse) => {
      particles.forEach((p) => {
        const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y)

        if (distMouse < FLEE_RADIUS && distMouse > 1) {
          const fleeStrength = (1 - distMouse / FLEE_RADIUS) ** 1.6
          const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x)

          p.vx += Math.cos(angle) * fleeStrength * 0.08
          p.vy += Math.sin(angle) * fleeStrength * 0.08
          p.x += Math.cos(angle) * fleeStrength * 1.4
          p.y += Math.sin(angle) * fleeStrength * 1.4
        }

        p.x += p.vx
        p.y += p.vy
        clampSpeed(p)

        if (p.x < 0) {
          p.x = 0
          p.vx = Math.abs(p.vx) * 0.6
        }
        if (p.x > w) {
          p.x = w
          p.vx = -Math.abs(p.vx) * 0.6
        }
        if (p.y < 0) {
          p.y = 0
          p.vy = Math.abs(p.vy) * 0.6
        }
        if (p.y > h) {
          p.y = h
          p.vy = -Math.abs(p.vy) * 0.6
        }
      })
    }

    const renderParticles = (mouse) => {
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = p.x - other.x
          const dy = p.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 125) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.18 * (1 - dist / 125)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        const nearCursor =
          !isIdle && distMouse < FLEE_RADIUS ? Math.max(0, 1 - distMouse / FLEE_RADIUS) : 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius + nearCursor * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + nearCursor * 0.12})`
        ctx.fill()

        if (nearCursor > 0.3) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius + 8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${0.06 * nearCursor})`
          ctx.fill()
        }
      })
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const mouse = mouseRef.current
      const now = Date.now()

      if (now - lastMoveTime > IDLE_MS) {
        if (!isIdle) {
          isIdle = true
          stopParticles()
          container?.classList.add('background-effects--idle')
        }
      }

      ctx.clearRect(0, 0, w, h)

      if (!isIdle) {
        updateParticles(w, h, mouse)
      }

      renderParticles(mouse)
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      container?.classList.remove('background-effects--idle')
    }
  }, [])

  return (
    <div ref={containerRef} className="background-effects" aria-hidden="true">
      <span className="bg-orb orb1" />
      <span className="bg-orb orb2" />
      <span className="bg-orb orb3" />
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  )
}

export default BackgroundAnimation
