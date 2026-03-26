import { motion } from 'framer-motion'
import { personal } from '../data'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const cards = [
  { icon: '📊', title: 'Data Science',      desc: 'Analyzing complex datasets to uncover insights and build predictive models.' },
  { icon: '🤖', title: 'Machine Learning',  desc: 'Building and deploying ML models using Python, Scikit-learn and TensorFlow.' },
  { icon: '🧩', title: 'Problem Solver',    desc: '100+ LeetCode problems solved with optimized solutions.' },
  { icon: '🚀', title: 'Fast Learner',      desc: 'Always exploring new technologies and best practices.' },
]

export default function About() {
  return (
    <section className="section" style={{
      padding: '80px 5% 80px calc(5% + 132px)',
      boxSizing: 'border-box',
    }}>
      <motion.div {...fade(0)} style={{ marginBottom: '48px' }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> About Me
        </p>
        <h2 className="section-title">Who am <span className="accent-text">I?</span></h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginTop: '10px' }}>
          Passionate developer, designer, and problem solver
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto',
        alignItems: 'flex-start',
      }}>

        {/* Left — Who am I */}
        <motion.div {...fade(0.2)} style={{
          flex: '1 1 300px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '32px',
        }}>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.4rem', fontWeight: 700,
            color: 'var(--accent)', marginBottom: '16px',
          }}>Who am I?</h3>

          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '14px', fontSize: '1rem' }}>
            {personal.bio}
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '24px', fontSize: '1rem' }}>
            {personal.bio2}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['👤', 'Name',    personal.name],
              ['🎓', 'College', personal.college],
              ['📊', 'CGPA',    personal.cgpa],
              ['✉️', 'Email',   personal.email],
            ].map(([icon, key, val]) => (
              <div key={key} style={{ display: 'flex', gap: '10px', fontSize: '1rem' }}>
                <span>{icon}</span>
                <span style={{ color: 'var(--muted)' }}>{key}:</span>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Cards */}
        <div style={{
          flex: '1 1 300px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
        }}>
          {cards.map((c, i) => (
            <motion.div key={c.title} {...fade(0.3 + i * 0.1)} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{c.icon}</div>
              <h4 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.1rem', fontWeight: 700,
                color: 'var(--text)', marginBottom: '8px',
              }}>{c.title}</h4>
              <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.7 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
