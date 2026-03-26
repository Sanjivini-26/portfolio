import { motion } from 'framer-motion'
import { certifications } from '../data'

export default function Achievements() {
  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Verified Skills
        </p>
        <h2 className="section-title">My <span className="accent-text">Certificates</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px', maxWidth: '1100px', marginTop: '40px' }}>
        {certifications.map((c, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: i * 0.1 }}
            whileHover={{ y: -4, borderColor: 'rgba(255,102,0,0.5)' }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px',
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'border-color .2s',
            }}>

            {/* Image */}
            <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
              {c.img
                ? <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                : <div style={{ width: '100%', height: '100%', background: 'rgba(255,102,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🏆</div>
              }
            </div>

            {/* Content */}
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              <span style={{ color: 'var(--accent)', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>{c.issuer}</span>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>{c.title}</h3>
              <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{c.date}</span>
              <a href={c.link} target="_blank" rel="noreferrer"
                style={{ marginTop: '10px', color: 'var(--muted)', fontSize: '.78rem', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                View Certificate →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
