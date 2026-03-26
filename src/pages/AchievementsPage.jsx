import { motion } from 'framer-motion'
import { achievements } from '../data'

export default function AchievementsPage() {
  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Recognition
        </p>
        <h2 className="section-title">Key <span className="accent-text">Achievements</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '1100px', marginTop: '40px' }}>
        {achievements.map((a, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '12px',
            }}>

            {/* Icon + category */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>
                {a.icon}
              </div>
              <span style={{ color: 'var(--accent)', fontSize: '.68rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                {a.category}
              </span>
            </div>

            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '.98rem', lineHeight: 1.4 }}>
              {a.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, flex: 1 }}>
              {a.desc}
            </p>

            {a.link && (
              <a href={a.link} target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 14px', borderRadius: '6px',
                  background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.25)',
                  color: 'var(--accent)', fontSize: '.75rem', fontWeight: 600,
                  width: 'fit-content', transition: 'background .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,102,0,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,102,0,0.1)'}>
                🔗 {a.linkLabel}
              </a>
            )}

            {a.date && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 12px', borderRadius: '6px',
                background: 'rgba(255,102,0,0.08)', border: '1px solid rgba(255,102,0,0.15)',
                color: 'var(--accent)', fontSize: '.72rem', fontWeight: 600, width: 'fit-content',
              }}>
                🗓 {a.date}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
