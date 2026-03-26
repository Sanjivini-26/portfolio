import { motion } from 'framer-motion'
import { education } from '../data'

export default function EducationPage() {
  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.9rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Academic Background
        </p>
        <h2 className="section-title">My <span className="accent-text">Education</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ maxWidth: '900px', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {education.map((e, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: i * 0.12 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: '10px',
              padding: '20px 28px',
              display: 'flex', alignItems: 'center', gap: '24px',
            }}>

            {/* Left: period */}
            <span style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 600, minWidth: '200px', width: '200px', flexShrink: 0 }}>
              {e.period}
            </span>

            {/* Center: institution + degree + grade */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', marginBottom: '6px' }}>
                {e.institution}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '6px' }}>{e.degree}</p>
              <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '1rem' }}>
                {e.grade}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
