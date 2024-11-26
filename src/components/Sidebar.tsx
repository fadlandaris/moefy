import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const [sideBarData] = useState(navLinks)
  return (
    <nav className='z-50 px-6 fixed left-1/2 -translate-x-1/2 top-4 md:-translate-x-0 md:left-0 md:top-24 md:bottom-0  '>
      <div className='flex md:flex-col bg-gradient-to-b  from-neutral-950 to-black  rounded-full'>
        {sideBarData.map((side, i) => (
          <Link key={i} to={{pathname: side.link}}>
            <div className='px-6 py-6 md:px-4 md:py-6 flex justify-center rounded-full hover:bg-neutral-900 transition-all duration-500 cursor-pointer '>
              {side.icon && <side.icon size={20} weight="fill" className="text-white"/>}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar