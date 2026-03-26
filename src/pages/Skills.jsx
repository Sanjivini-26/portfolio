import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, softSkills } from '../data'

const tabs = ['All', 'Languages', 'Frameworks', 'Tools & Platforms']

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Technical Arsenal
        </p>
        <h2 className="section-title">Technical <span className="accent-text">Skills</span></h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginTop: '10px', marginBottom: '32px' }}>
          Languages, frameworks, and tools I work with
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)}
            style={{
              padding: '7px 20px', borderRadius: '20px', border: '1px solid',
              borderColor: active === tab ? 'var(--accent)' : 'rgba(255,255,255,0.12)',
              background: active === tab ? 'var(--accent)' : 'transparent',
              color: active === tab ? '#fff' : 'var(--muted)',
              fontWeight: 500, fontSize: '.95rem', cursor: 'pointer',
              transition: 'all .2s',
            }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px', maxWidth: '1100px', marginBottom: '60px' }}>
        {filtered.map((s, i) => (
          <motion.div key={s.name}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, delay: i * 0.04 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '20px 12px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '10px',
              cursor: 'default',
              transition: 'border-color .2s',
            }}
            whileHover={{ borderColor: 'rgba(255,102,0,0.5)', scale: 1.04 }}>
            <img src={s.icon} alt={s.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }}/>
            <span style={{ fontSize: '.9rem', color: 'var(--muted)', textAlign: 'center', fontWeight: 500 }}>{s.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }}>
        <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px' }}>
          Soft <span className="accent-text">Skills</span>
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          {softSkills.map(s => (
            <span key={s} className="glass" style={{
              padding: '10px 22px', borderRadius: '24px', fontWeight: 500,
              border: '1px solid rgba(255,102,0,.3)', color: 'var(--text)', fontSize: '.9rem',
            }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
