import { motion } from 'framer-motion'
import { training } from '../data'

export default function Education() {
  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Experience
        </p>
        <h2 className="section-title">Summer <span className="accent-text">Training</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ maxWidth: '1100px', marginTop: '40px', position: 'relative' }}>
        {/* Left orange dot */}
        <div style={{
          position: 'absolute', left: '-28px', top: '50%', transform: 'translateY(-50%)',
          width: '12px', height: '12px', borderRadius: '50%',
          background: 'var(--accent)',
        }}/>

        {training.map((t, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: i * 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,102,0,0.25)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex', gap: '20px',
              marginBottom: '24px',
            }}>

            {/* Icon box */}
            <div style={{
              width: '48px', height: '48px', borderRadius: '10px', flexShrink: 0,
              background: 'rgba(255,102,0,0.12)',
              border: '1px solid rgba(255,102,0,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem',
            }}>
              🎓
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{ color: 'var(--accent)', fontSize: '.9rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {t.org}
              </p>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem', marginBottom: '6px' }}>
                {t.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '20px' }}>{t.period}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {t.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: '8px', color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>•</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <a href={t.link} target="_blank" rel="noreferrer"
                style={{ color: 'var(--muted)', fontSize: '.95rem', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                View Certificate →
              </a>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                {t.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '5px 14px', borderRadius: '6px', fontSize: '.88rem', fontWeight: 500,
                    background: 'rgba(255,102,0,0.1)', color: 'var(--accent)',
                    border: '1px solid rgba(255,102,0,0.2)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
