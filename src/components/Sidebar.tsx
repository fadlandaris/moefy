import React, { useState } from 'react'
import { navLinks } from '../data/data'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const [sideBarData] = useState(navLinks)
  return (
    <nav className='z-50 px-0 fixed left-1/2 -translate-x-1/2 bottom-4 md:px-6 md:-translate-x-0 md:left-0 md:top-16 md:bottom-0  '>
      <div className='flex md:flex-col bg-gradient-to-b  from-neutral-950 to-black  rounded-full'>
        {sideBarData.map((side, i) => (
          <Link key={i} to={{pathname: side.link}}>
            <div className='p-4 md:p-6 flex justify-center rounded-full hover:bg-neutral-900 transition-all duration-500 cursor-pointer '>
              {side.icon && <side.icon size={20} weight="fill" className="text-white"/>}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar