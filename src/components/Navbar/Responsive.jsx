import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Responsive = ({ open }) => {
  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y:-100}}
          transition={{ duration: 0.8 }}
          
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="p-4">
            <ul className="flex flex-col gap-4 font-semibold bg-primary-color text-white text-xl items-center rounded-xl py-4 uppercase">
              <li><a href='/'>Home</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;
