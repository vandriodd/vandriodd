import Link from 'next/link'
import { Menu } from './Assets'

const menuItems = [
  {
    name: 'Projects',
    link: '/#projects'
  },
  {
    name: 'About me',
    link: '/#about'
  },
  {
    name: 'Skills',
    link: '/#skills'
  },
  {
    name: 'Contact',
    link: '/#contact'
  }
]

export const renderedMenuItems = menuItems.map((item) => (
  <li key={item.name}>
    <Link href={item.link}>{item.name}</Link>
  </li>
))

const Dropdown = () => {
  return (
    <>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
          <Menu />
        </div>
        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1f1d1d] rounded-box w-52'>
          {renderedMenuItems}
        </ul>
      </div>
    </>
  )
}

export default Dropdown
