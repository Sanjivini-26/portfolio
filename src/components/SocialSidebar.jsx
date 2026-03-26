import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { personal } from '../data'

const items = [
  { icon: <FaLinkedin/>, href: personal.linkedin },
  { icon: <FaGithub/>,   href: personal.github   },
  { icon: <FaEnvelope/>, href: `mailto:${personal.email}` },
  { icon: <FaPhone/>,    href: `tel:${personal.phone || '#'}` },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{
        display: 'inline-flex', gap: '10px',
        padding: '10px 16px', borderRadius: '40px',
      }}>
      {items.map((item, i) => (
        <a key={i} href={item.href} target="_blank" rel="noreferrer"
          style={{
            width: '38px', height: '38px', borderRadius: '8px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--muted)', fontSize: '1rem',
            transition: 'all .2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}>
          {item.icon}
        </a>
      ))}
    </motion.div>
  )
}
