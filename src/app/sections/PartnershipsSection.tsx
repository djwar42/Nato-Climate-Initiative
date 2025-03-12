'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Users, Globe, Shield, ExternalLink } from 'lucide-react'

export default function PartnershipsSection() {
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
          <Users size={60} color='#4CAF50' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
          Partnerships for Climate Action
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        NATO collaborates with international organizations, Allies, and partners
        to enhance its climate initiatives, sharing knowledge and resources to
        achieve a sustainable future.
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
            <Users size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Allied Cooperation
          </h3>
          <p className='text-lg'>
            NATO Allies share best practices, with <b>20 countries</b> adopting
            green technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Globe size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            International Bodies
          </h3>
          <p className='text-lg'>
            Partnerships with the EU enhance climate resilience.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Shield size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Regional Partners
          </h3>
          <p className='text-lg'>
            Collaboration with the African Union addresses climate risks in
            conflict zones.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        NATO’s partnerships are crucial for scaling climate solutions, with
        joint projects reducing emissions by <b>5% across initiatives</b> since
        2021.
      </motion.p>
      <motion.a
        href='https://www.nato.int/nato_static_fl2014/assets/pdf/2023/7/pdf/230710-climate-change-best-practices.pdf'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300'
      >
        <ExternalLink size={24} className='mr-2' />
        Explore Climate Change Best Practices
      </motion.a>
      {/* Add ~1,500 words */}
    </motion.div>
  )
}
