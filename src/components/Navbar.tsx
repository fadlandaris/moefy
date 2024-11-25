import React from 'react'
import { Logo } from '../assets/assets'

const Navbar: React.FC = () => {

  return (
    <nav className='fixed top-0 left-0 right-0 p-10 flex justify-between '>
      <img src={Logo} alt="" className='w-[4rem]' />
    </nav>
  )
}

export default Navbar