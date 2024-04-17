import Image from 'next/image'
import Link from 'next/link'
import { LinkedIn, Github, Gmail } from './Assets'

const Hero = () => {
  const svgClasses = 'transition-colors duration-300 hover:text-primary motion-reduce:duration-0 hover:scale-125 hover:opacity-70'

  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ludasaadi/',
      icon: <LinkedIn className={svgClasses} />
    },
    {
      name: 'Github',
      link: 'https://github.com/vandriodd',
      icon: <Github className={svgClasses} />
    },
    {
      name: 'Gmail',
      link: 'mailto:ludasaadi@gmail.com',
      icon: <Gmail className={svgClasses} />
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
    <section className='hero min-h-screen gap-4 px-8'>
      <div className='hero-content flex-col-reverse justify-center lg:flex-row'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl sm:text-3xl md:text-5xl text-center sm:text-left sm:w-full font-semibold'>Hi 👋🏻,<br />I'm <span className='text-primary'>Luz Saavedra</span></h1>
          <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className='flex gap-6 sm:w-full'>
            <button className='btn btn-primary'>
              <Link href='/Luz-Saavedra.pdf' target='_blank' rel='noopener noreferrer' download>Download CV</Link>
            </button>
            <ul className='flex items-center gap-3'>
              {renderSocials}
            </ul>
          </div>
        </div>
        <picture>
          <Image src='/looz.png' className='drop-shadow-sm max-w-[350px]' alt='Profile photo' width={550} height={550} />
        </picture>
      </div>
    </section>
  )
}

export default Hero
