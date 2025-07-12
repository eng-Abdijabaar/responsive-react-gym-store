import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaDumbbell } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { PiShoppingCartThin } from 'react-icons/pi'
import { NavMenu } from '../../mockData/data'
import Responsive from './Responsive'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav className=' py-8 px-10 md:px-30'>
    <div className='flex items-center justify-between'>
        {/* Logo section */}
        <motion.div
        animate={{
           x: [-5, 5, -5, 5, 0] ,
           y:[-5, 5, -5, 5, 0]
          }}
        transition={{ duration: 0.5 }}
         className='flex text-2xl items-center gap-1 font-bold uppercase'>
          <FaDumbbell />
          <p>Somali<span className='secondary-color'>Mastery</span></p>
        </motion.div>
        {/* menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {
              NavMenu.map((item)=>(
                <li key={item.id}>
                  <a href={item.link} className='inline-block py-1 px-3 menu-hover font-semibold'>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
        {/* icons section */}
        <div className=' hidden lg:block'>
          <div className='flex items-center gap-2'>
          <button className='text-2xl bg-primary  rounded-full p-2 duration-200'>
            <CiSearch />
          </button>
          <button className='text-2xl bg-primary rounded-full p-2 duration-200'>
            <PiShoppingCartThin />
          </button>
          <button className='bg-primary primary-color font-semibold py-2 px-6 border-2 rounded-md duration-200 '>Login</button>
        </div>
        </div>
        {/* humbergur phone icon */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
          <MdMenu className='text-4xl'/>
        </div>
    </div>
    </nav>

    {/* mobile sideBar */}
    <Responsive open={open}/>
    
    </>
  )
}

export default Navbar