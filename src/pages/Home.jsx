import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import { personal } from '../data'
import SocialSidebar from '../components/SocialSidebar'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
})

export default function Home() {
  const [titleIdx, setTitleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTitleIdx(i => (i + 1) % personal.titles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      position: 'relative',
    }}>

      {/* Badge — aligned under end of "Aashik Kumar" in navbar */}
      <motion.div {...fade(0.1)} style={{ position: 'absolute', top: '52px', left: 'calc(5% + 132px)' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '5px 14px', borderRadius: '20px',
          border: '1px solid rgba(255,102,0,0.6)',
          color: 'var(--accent)', fontSize: '.78rem', fontWeight: 500,
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
          }}/>
          Open to Internships &amp; Opportunities
        </span>
      </motion.div>

      {/* Main row — vertically centered */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        width: '100%',
        paddingLeft: '132px',
        paddingBottom: '0',
      }}>

        {/* LEFT */}
        <div style={{ flex: '0 1 500px', minWidth: '260px' }}>

          <motion.h1 {...fade(0.15)} style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(4rem, 8.5vw, 7.5rem)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-0.02em', color: 'var(--text)', margin: 0,
          }}>
            {personal.firstName || personal.name.split(' ')[0]}
          </motion.h1>

          <motion.h1 {...fade(0.22)} style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(4rem, 8.5vw, 7.5rem)',
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--accent)',
            margin: '0 0 12px 0',
          }}>
            {personal.lastName || personal.name.split(' ').slice(1).join(' ')}
          </motion.h1>

          <motion.div {...fade(0.3)} style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '26px', height: '2px', background: 'var(--accent)', flexShrink: 0 }}/>
            <motion.span
              key={titleIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '.9rem' }}>
              {personal.titles[titleIdx]}
            </motion.span>
          </motion.div>

          <motion.p {...fade(0.38)} style={{
            color: 'var(--muted)', lineHeight: 1.75,
            maxWidth: '420px', marginBottom: '26px', fontSize: '1rem',
          }}>
            {personal.bio}
          </motion.p>

          <motion.div {...fade(0.45)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
              <button style={{
                padding: '11px 24px', borderRadius: '7px', border: 'none', cursor: 'pointer',
                background: 'var(--accent)', color: '#fff',
                fontWeight: 600, fontSize: '.88rem',
                display: 'flex', alignItems: 'center', gap: '7px',
              }}>
                <FaDownload style={{ fontSize: '.75rem' }}/> Download CV
              </button>
            </a>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '11px 24px', borderRadius: '7px', cursor: 'pointer',
                background: 'transparent', color: 'var(--text)', fontWeight: 600,
                fontSize: '.88rem', border: '1px solid rgba(255,255,255,0.18)',
                display: 'flex', alignItems: 'center', gap: '7px',
              }}>
              Hire Me <FaArrowRight style={{ fontSize: '.75rem' }}/>
            </button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{
            flex: '1',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start', gap: '20px',
            paddingTop: '20px',
            marginLeft: '-60px',
          }}>

          <div style={{
            width: '320px', height: '320px', borderRadius: '50%',
            boxShadow: '0 0 0 3px #ff6600, 0 0 25px 10px rgba(255,102,0,0.55), 0 0 55px 22px rgba(255,80,0,0.22)',
            padding: '14px',
            background: 'transparent',
            flexShrink: 0,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              background: '#1a1a1a',
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {personal.photo
                ? <img src={personal.photo} alt={personal.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}/>
                : <span style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                    fontSize: '3.8rem', color: 'var(--accent)',
                  }}>
                    {personal.name.split(' ').map(n => n[0]).join('')}
                  </span>
              }
            </div>
          </div>

          <SocialSidebar />
        </motion.div>
      </div>

    </section>
  )
}
