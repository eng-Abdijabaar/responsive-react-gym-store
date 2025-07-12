import { motion } from 'framer-motion'
import { div, link, title } from 'framer-motion/client'
import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { GrYoga } from 'react-icons/gr'
import { slideLeft } from '../../utility/animation'
slideLeft

const equipmentsData = [
    {
      id:1,
      title:'Yoga Equipments',
      des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil atque quo quos temporibus non',
      link:'/',
      icon: <GrYoga />,
      delay: 0.3
    },
    {
      id:2,
      title:'Muscle Equipments',
      des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil atque quo quos temporibus non',
      link:'/',
      icon: <FaDumbbell />,
      delay: 0.6
    },
    {
      id:3,
      title:'Fitness Equipments',
      des:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil atque quo quos temporibus non',
      link:'/',
      icon: <GiGymBag />,
      delay: 0.9
    },
]

const Equipments = () => {
  return (
    <div className='px-12 md:px-18 md:py-12 !py-24'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className='space-y-4 p-6'>
          <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
          <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil atque quo quos temporibus non</p>
        </div>
        {
          equipmentsData.map((item) =>(
            <motion.div
            variants={slideLeft(item.delay)}
            initial='hidden'
            whileInView='visible'
             key={item.id} 
             className='bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
              <div className='text-4xl'>{item.icon}</div>
              <p className='text-2xl font-semibold'>{item.title}</p>
              <p className='text-gray-500'>{item.des}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Equipments