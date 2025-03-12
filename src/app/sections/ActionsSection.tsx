'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Globe, Shield, Leaf, ExternalLink } from 'lucide-react'

export default function ActionsSection() {
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
          <Globe size={60} color='#4CAF50' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
          Recommendations for Climate Action
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The initiative offers actionable recommendations to operationalize
        climate mitigation, from reducing emissions to enhancing resilience. It
        urges urgent steps like adopting renewable energy, supported by NATO’s
        2023 methodology.
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
            <Leaf size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Renewable Energy Adoption
          </h3>
          <p className='text-lg'>
            Integrating solar and wind energy into bases reduces emissions by{' '}
            <b>10% annually</b>.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Shield size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Climate-Resilient Operations
          </h3>
          <p className='text-lg'>
            NATO adapts operations to climate risks, protecting{' '}
            <b>80% of bases</b> from extreme weather.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Globe size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Emission Tracking
          </h3>
          <p className='text-lg'>
            NATO’s methodology tracks emissions, setting reduction targets.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        Other actions include scaling up low-carbon technologies, enhancing
        energy efficiency in military operations, and strengthening climate
        resilience through training and infrastructure upgrades.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Leaf size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Low-Carbon Tech
          </h3>
          <p className='text-lg'>
            NATO invests in electric vehicles for logistics, cutting emissions
            by <b>5% yearly</b>.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Shield size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Training Programs
          </h3>
          <p className='text-lg'>
            Climate-focused training ensures operational readiness in adverse
            conditions.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
            <Globe size={50} color='#4CAF50' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#4CAF50] mt-4 mb-2'>
            Infrastructure Upgrades
          </h3>
          <p className='text-lg'>
            NATO upgrades bases for energy efficiency, reducing costs.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        These actions require commitment and resources, integrating
        sustainability with security to address climate change’s impacts.
      </motion.p>
      <motion.a
        href='https://www.nato.int/nato_static_fl2014/assets/pdf/2024/7/pdf/240709-Climate-Security-Impact.pdf'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300'
      >
        <ExternalLink size={24} className='mr-2' />
        View 2024 Climate Impact Assessment
      </motion.a>
      {/* Add ~3,000 words */}
    </motion.div>
  )
}
