'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Network, Scale, Leaf, ExternalLink } from 'lucide-react'

export default function FutureSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8 px-4 md:px-6 lg:px-12 mt-22'
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='flex items-center'
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
          <Network size={60} color='#4CAF50' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
          Future Goals and Reforms
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        NATO aims to achieve net zero emissions by 2050, modernizing operations
        and policies for a sustainable future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Scale size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Net Zero by 2050
          </h3>
          <p className='text-lg'>
            NATO targets net zero emissions, scaling up renewable energy use.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Network size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Policy Updates
          </h3>
          <p className='text-lg'>
            Revising energy policies to align with climate goals.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Leaf size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Innovation
          </h3>
          <p className='text-lg'>
            Investing in green tech for military operations.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        These reforms ensure NATO remains agile in addressing climate
        challenges, aligning sustainability with security priorities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center mt-34'
      >
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className='flex items-center justify-center'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Leaf size={60} color='#4CAF50' />
          </motion.div>
          <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
            A Call to Action
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-xl max-w-4xl mx-auto mt-6 mb-8'
        >
          This initiative offers hope amid crisis. Facing climate, security, and
          resource threats, NATO and its partners must act now — sustainability,
          resilience, and cooperation guiding us to a stable, green future. The
          NATO Climate Initiative is our chance to reforge climate frameworks,
          enhance strategies and extend partnerships worldwide, working towards
          a sustainable future.
        </motion.p>
        <motion.a
          href='https://www.nato.int/cps/en/natohq/official_texts_185174.htm'
          target='_blank'
          rel='noopener noreferrer'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300'
        >
          <ExternalLink size={24} className='mr-2' />
          Read the Full NATO Climate Action Plan
        </motion.a>
      </motion.div>
      {/* Add ~1,500 words */}
    </motion.div>
  )
}
