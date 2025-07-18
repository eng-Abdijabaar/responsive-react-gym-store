import { motion } from 'framer-motion'
import { slideUp } from '../../utility/animation'

const Banner = ({ image, title, subtitle, link }) => {
    return (
        <div className='px-12 md:px-18 md:py-12'>
            <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner img section  */}
                <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                        src={image} alt="" className='w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover' />
                </div>
                {/* Banner info section  */}
                <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]'>
                    <motion.p
                        variants={slideUp(0.5)}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        className='text-2xl lg:text-4xl font-bold capitalize'>{title}</motion.p>
                    <motion.p
                        variants={slideUp(0.7)}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                    >{subtitle}</motion.p>
                    <motion.div
                        variants={slideUp(0.9)}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        className='flex justify-center md:justify-start'>
                        <button className='bg-primary-color font-semibold py-3 px-6 rounded-md hover:scale-110 duration-300'>Explore More</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner