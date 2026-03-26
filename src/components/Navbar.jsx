import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navLinks = [
  { to: '#home',         label: 'Home'         },
  { to: '#about',        label: 'About'        },
  { to: '#skills',       label: 'Skills'       },
  { to: '#projects',     label: 'Projects'     },
  { to: '#training',     label: 'Training'     },
  { to: '#certificates', label: 'Certificates' },
  { to: '#achievements', label: 'Achievements' },
  { to: '#education',    label: 'Education'    },
  { to: '#contact',      label: 'Contact'      },
]

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    navLinks.forEach(l => {
      const el = document.querySelector(l.to)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '14px 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#about" onClick={e => { e.preventDefault(); scrollTo('#about') }} style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 700,
          fontSize: '1.2rem', color: 'var(--accent)', letterSpacing: '.02em',
        }}>
          Sanjivini Antil
        </span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', alignItems: 'center', margin: 0 }}
          className="nav-desktop">
        {navLinks.map(l => (
          <li key={l.to}>
            <a href={l.to}
              onClick={e => { e.preventDefault(); scrollTo(l.to) }}
              style={{
                fontSize: '.83rem', fontWeight: active === l.to ? 700 : 400,
                color: active === l.to ? '#ffffff' : '#888888',
                transition: 'color .2s', textDecoration: 'none', outline: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = active === l.to ? '#ffffff' : '#888888'}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '.9rem', lineHeight: 1 }}>🌙</span>
          <button onClick={toggleTheme}
            style={{
              width: '38px', height: '20px', borderRadius: '10px', border: 'none',
              background: 'var(--accent)', cursor: 'pointer', position: 'relative',
              flexShrink: 0, padding: 0,
            }}>
            <span style={{
              position: 'absolute', top: '2px',
              left: dark ? '18px' : '2px',
              width: '16px', height: '16px', borderRadius: '50%',
              background: '#fff', transition: 'left .22s', display: 'block',
            }}/>
          </button>
          <span style={{ fontSize: '.9rem', lineHeight: 1 }}>☀️</span>
        </div>

        <a href="/portfolio/resume.pdf" download>
          <button style={{
            padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
            background: 'var(--accent)', color: '#fff',
            fontWeight: 600, fontSize: '.8rem',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <FaDownload style={{ fontSize: '.7rem' }}/> Download CV
          </button>
        </a>

        <button onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.2rem',
                   cursor: 'pointer', display: 'none' }}
          className="nav-toggle">
          {open ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(16px)',
            padding: '16px 5%', display: 'flex', flexDirection: 'column', gap: '14px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
          {navLinks.map(l => (
            <a key={l.to} href={l.to}
              onClick={e => { e.preventDefault(); scrollTo(l.to) }}
              style={{
                color: active === l.to ? 'var(--accent)' : 'var(--text)',
                fontWeight: 500, fontSize: '.95rem', textDecoration: 'none',
              }}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-toggle  { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
