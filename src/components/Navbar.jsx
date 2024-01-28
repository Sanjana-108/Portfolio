import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#011321] w-full h-fit fixed top-0 z-50'>
      <div className='' >
        <ul className='flex lg:flex-row flex-wrap gap-16 items-center justify-center mx-auto text-xl my-auto py-2 font-semibold text-[#dce9f2] '>
          
            <li className='cursor-pointer transition-all duration-200 hover:underline ' >
                <Link to='/'>Home</Link>
            </li>
            <li className='cursor-pointer transition-all duration-200 hover:underline '>
                <Link to='/projects'>Projects</Link>
            </li>
            <li className='cursor-pointer transition-all duration-200 hover:underline '>
                <Link to='/education'>Education</Link>
            </li>
            <li className='cursor-pointer transition-all duration-200 hover:underline '>
                <Link to='/skills'>Skills</Link>
            </li>
            <li className='cursor-pointer transition-all duration-200 hover:underline '>
                <Link to='/contact'>Contact</Link>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar