import React from 'react'
import { AiOutlinePrinter, AiOutlineCreditCard } from 'react-icons/ai';
import { MdScanner, MdLaptopMac } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import { motion } from "motion/react"
import { animate } from 'motion';

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    } 
  }
});

const Technologies = () => {
  return (
    <div className='pb-24'>

      <h2 className='my-20 text-center text-4xl'>Technologies</h2>

      <div className='flex flex-wrap items-center justify-center gap-4'>

          <motion.div
           variants={iconVariants(2.5)}
           initial = "initial"
           animate = "animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
              <AiOutlinePrinter className='text-7xl text-cyan-400' />
          </motion.div>

          <motion.div
          variants={iconVariants(3)}
          initial = "initial"
          animate = "animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
              <AiOutlineCreditCard className='text-7xl' />
          </motion.div>

          <motion.div 
          variants={iconVariants(5)}
          initial = "initial"
          animate = "animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
              <MdScanner className='text-7xl text-green-400' />
          </motion.div>

          <motion.div 
          variants={iconVariants(2)}
          initial = "initial"
          animate = "animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
              <MdLaptopMac className='text-7xl text-red-700' />
          </motion.div>

      </div>
      
    </div>
  )
}

export default Technologies
