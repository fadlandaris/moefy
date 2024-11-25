import React, { useState } from 'react'
import { navLinks } from '../data/data'

const Sidebar: React.FC = () => {
  const [sideBarData] = useState(navLinks)
  return (
    <nav className='p-10 fixed left-0 bottom-0 top-24 '>
      <div className='flex flex-col items-center gap-y-10 '>
        <button className='p-[12px] bg-primary grid grid-cols-2 gap-[2px] rounded-full'>
          <div className='w-2 h-2 bg-white rounded-sm'/>
          <div className='w-2 h-2 bg-white rounded-sm'/>
          <div className='w-2 h-2 bg-white rounded-sm'/>
          <div className='w-2 h-2 bg-white rounded-sm'/>
        </button>

        <div className='flex flex-col gap-y-4 bg-gradient-to-b from-secondary p-4 rounded-full'>
          {sideBarData.map((side, i) => (
            <div key={i} className='p-1 flex justify-center '>
              {side.icon && <side.icon size={20} weight="fill" className="text-text"/>}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-y-4 '>
          {sideBarData.map((side, i) => (
            <div key={i} className='p-1 flex justify-center  '>
              {side.icon && <side.icon size={20} weight="fill" className="text-text"/>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar