import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Featured Work
        </p>
        <h2 className="section-title">Things I've <span className="accent-text">Built</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', maxWidth: '1100px', marginTop: '40px' }}>
        {projects.map((p, i) => (
          <motion.div key={p.title}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>

            {/* Image */}
            <div style={{
              width: '100%', height: '180px',
              background: p.image ? 'transparent' : 'rgba(255,255,255,0.04)',
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {p.image
                ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                : <span style={{ color: 'rgba(255,255,255,0.08)', fontSize: '3rem' }}>{'</>'}</span>
              }
            </div>

            {/* Content */}
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}/>
                <span style={{ color: 'var(--accent)', fontSize: '.72rem', fontWeight: 600 }}>{p.category}</span>
              </div>

              <span style={{ color: 'var(--muted)', fontSize: '.72rem' }}>{p.date}</span>

              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3 }}>
                {p.title}
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: '10px', fontSize: '.72rem', fontWeight: 500,
                    background: 'rgba(255,102,0,.12)', color: 'var(--accent)',
                    border: '1px solid rgba(255,102,0,.2)',
                  }}>{t}</span>
                ))}
              </div>

              <a href={p.github} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--muted)', fontSize: '.8rem', marginTop: '8px', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                <FaGithub /> Github →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
