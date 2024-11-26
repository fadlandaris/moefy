import React, { useState } from 'react'
import { navLinks } from '../data/data'

const Sidebar: React.FC = () => {
  const [sideBarData] = useState(navLinks)
  return (
    <nav className='px-6 fixed left-0 bottom-0 top-24  '>
      <div className='flex flex-col items-center gap-y-10 '>

        <div className='flex flex-col gap-y-6 bg-gradient-to-b from-neutral-950 to-black p-4 rounded-3xl'>
          {sideBarData.map((side, i) => (
            <div key={i} className='p-1 flex justify-center '>
              {side.icon && <side.icon size={20} weight="fill" className="text-white"/>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar