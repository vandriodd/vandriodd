import Image from 'next/image'
import Link from 'next/link'
import { LinkedIn, Github, Gmail } from './Assets'
import styles from './Hero.module.css'

const Hero = () => {
  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ludasaadi/',
      icon: <LinkedIn className={styles.svg} />
    },
    {
      name: 'Github',
      link: 'https://github.com/vandriodd',
      icon: <Github className={styles.svg} />
    },
    {
      name: 'Gmail',
      link: 'mailto:ludasaadi@gmail.com',
      icon: <Gmail className={styles.svg} />
    }
  ]

  const renderSocials = (
    socials.map((social) => {
      return (
        <li key={social.name}>
          <Link href={social.link} target='_blank' rel='noopener noreferrer'>{social.icon}</Link>
        </li>
      )
    })
  )

  return (
    <section className='hero min-h-[calc(100vh-68px)] gap-4 px-8'>
      <div className={styles.content}>
        <header className={styles.heroHeader}>
          <h1>Hi 👋🏻,<br />I'm <span>Luz Saavedra</span></h1>
          <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className={styles.details}>
            <button>
              <Link href='/Luz-Saavedra.pdf' target='_blank' rel='noopener noreferrer' download>Download CV</Link>
            </button>
            <ul>
              {renderSocials}
            </ul>
          </div>
        </header>
        <picture>
          <Image src='/profilephoto.png' className={styles.profilephoto} alt='Profile photo' width={550} height={550} />
        </picture>
      </div>
    </section>
  )
}

export default Hero
