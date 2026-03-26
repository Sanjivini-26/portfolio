import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaUniversity, FaPaperPlane } from 'react-icons/fa'
import { personal } from '../data'

const contactInfo = [
  { icon: <FaEnvelope/>, label: 'Email',      value: personal.email,      href: `mailto:${personal.email}` },
  { icon: <FaPhone/>,    label: 'Phone',      value: personal.phone,      href: `tel:${personal.phone}` },
  { icon: <FaMapMarkerAlt/>, label: 'Location', value: 'Phagwara, Punjab, India', href: null },
  { icon: <FaUniversity/>,   label: 'University', value: 'Lovely Professional University', href: null },
]

const socials = [
  { icon: <FaLinkedin/>, href: personal.linkedin },
  { icon: <FaGithub/>,   href: personal.github },
  { icon: <FaEnvelope/>, href: `mailto:${personal.email}` },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px',
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text)', fontSize: '.88rem', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color .2s',
  }

  return (
    <section className="section" style={{ paddingTop: '100px', paddingLeft: 'calc(5% + 132px)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <p style={{ color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '28px', height: '2px', background: 'var(--accent)', display: 'inline-block' }}/> Get In Touch
        </p>
        <h2 className="section-title">Let's <span className="accent-text">Connect</span></h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', maxWidth: '1000px', marginTop: '40px' }}>

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .2 }}>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px' }}>
            Open to opportunities 🤝
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '28px' }}>
            I'm looking for internships, project collaborations and full-time roles in Data Science, ML and Java backend. Let's build something great together!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            {contactInfo.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', fontSize: '.9rem',
                }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--muted)', fontSize: '.65rem', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{c.label}</p>
                  {c.href
                    ? <a href={c.href} style={{ color: 'var(--text)', fontSize: '.83rem', fontWeight: 500, transition: 'color .2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>{c.value}</a>
                    : <span style={{ color: 'var(--text)', fontSize: '.83rem', fontWeight: 500 }}>{c.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', fontSize: '1rem', transition: 'all .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--muted)' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ color: 'var(--muted)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Your Name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Amit Kumar"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}/>
            </div>
            <div>
              <label style={{ color: 'var(--muted)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email</label>
              <input name="email" value={form.email} onChange={handle} placeholder="amit@company.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}/>
            </div>
          </div>

          <div>
            <label style={{ color: 'var(--muted)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Subject</label>
            <input name="subject" value={form.subject} onChange={handle} placeholder="Internship / Project / Opportunity"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}/>
          </div>

          <div>
            <label style={{ color: 'var(--muted)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Message</label>
            <textarea name="message" value={form.message} onChange={handle}
              placeholder="Tell me about the opportunity or project..."
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}/>
          </div>

          <button
            onClick={() => window.open(`mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`)}
            style={{
              padding: '13px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              background: 'var(--accent)', color: '#fff', fontWeight: 600, fontSize: '.9rem',
              display: 'inline-flex', alignItems: 'center', gap: '8px', width: 'fit-content',
            }}>
            <FaPaperPlane style={{ fontSize: '.8rem' }}/> Send Message
          </button>
        </motion.div>
      </div>
    </section>
  )
}
