import { motion } from 'framer-motion'
import { FaDownload, FaFileAlt } from 'react-icons/fa'

export default function Resume() {
  return (
    <section className="section" style={{ paddingTop:'100px' }}>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <h2 className="section-title">My <span className="accent-text">Resume</span></h2>
        <div className="section-line"/>
      </motion.div>

      <div style={{ maxWidth:'800px', margin:'0 auto', textAlign:'center' }}>
        <motion.div className="glass"
          initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}}
          transition={{duration:.7,delay:.2}}
          style={{ padding:'40px', borderRadius:'20px', marginBottom:'32px' }}>
          <div style={{ width:'100%', minHeight:'500px', borderRadius:'12px',
            background:'rgba(255,102,0,.04)', border:'1px dashed rgba(255,102,0,.2)',
            display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'center', gap:'16px' }}>
            <FaFileAlt style={{ fontSize:'4rem', color:'var(--accent)', opacity:.5 }}/>
            <p style={{ color:'var(--muted)', fontSize:'.9rem' }}>
              Place your resume image at <code style={{ color:'var(--accent)' }}>public/resume.png</code>
            </p>
          </div>
        </motion.div>

        <motion.a href={`${import.meta.env.BASE_URL}resume.pdf`} download
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:.6,delay:.4}}
          style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            padding:'14px 36px', borderRadius:'10px', fontWeight:600,
            background:'var(--accent)', color:'#fff', fontSize:'1rem', cursor:'pointer',
          }}>
          <FaDownload/> Download Resume
        </motion.a>
      </div>
    </section>
  )
}
