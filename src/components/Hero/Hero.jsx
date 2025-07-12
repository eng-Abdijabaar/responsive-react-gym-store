import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from '../../assets/dumbell.png'
import { motion } from 'framer-motion'
import { slideRight } from '../../utility/animation'


const Hero = () => {
  return (
    <>
    <section className='px-12 md:px-18 md:py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
      {/* Brand info */}
      <div className='flex flex-col justify-center py-14 md:py-0'>
        <div className='text-center md:text-left space-y-6'>
          <motion.h1
          variants={slideRight(0.6)}
          initial='hidden'
          animate='visible'
          className='text-5xl lg:text-7xl leading-relaxed font-bold xl:leading-normal'>Gym gives you the 
          <span className='primary-color'>Health</span>{" "}</motion.h1>
          <motion.p 
          variants={slideRight(1.2)}
          initial='hidden'
          animate='visible'
          className='text-gray-600 xl:max-w-[500px]'>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Nihil atque quo quos temporibus non,
             minus perspiciatis </motion.p>
             {/* button section */}
             <motion.div
          variants={slideRight(1.5)}
          initial='hidden'
          animate='visible' 
             className='flex justify-center items-center gap-8 md:justify-start !mt-4'>
              <button className='flex items-center gap-2 mt-4 bg-primary-color font-semibold py-3 px-6 rounded-md hover:scale-110 duration-300'>{" "}Order Now</button>
              <button className='flex items-center gap-2 mt-4 border-2 border-amber-500 font-semibold py-3 px-6 rounded-md hover:scale-110 duration-300'><FaPlay /> Watch Now</button>
             </motion.div>
        </div>
      </div>
      {/* Hero img */}
      <div className='flex justify-center items-center '>
        <motion.img
        animate={{ rotateY: 180 }}
        transition={{
          duration: 3,
        }}
        src={HeroImg} alt="" className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow scale-x-[-1]' />
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero