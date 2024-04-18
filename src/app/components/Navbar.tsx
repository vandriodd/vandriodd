'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Dropdown, { renderedMenuItems } from './Dropdown'
import { BulbOn, BulbOff, Logo } from './Assets'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <nav className={styles.nav}>
      <div className={styles.logoMenuWrapper}>
        <Dropdown />
        <Link href='/'>
          <Logo className={styles.logo} />
        </Link>
      </div>
      <div className={styles.linksListWrapper}>
        <ul>
          {renderedMenuItems}
        </ul>
      </div>
      <div className={styles.toggleThemeWrapper}>
        <label className='swap swap-rotate'>
          <input type='checkbox' className='theme-controller' value='synthwave' onClick={toggleTheme} />
          <BulbOn className='swap-on w-10 h-10 text-[#e6cc00]' />
          <BulbOff className='swap-off text-current opacity-35 w-10 h-10' />
        </label>
      </div>
    </nav>
  )
}

export default Navbar
