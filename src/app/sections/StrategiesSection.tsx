'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Leaf, Shield, Globe, ExternalLink } from 'lucide-react'

export default function StrategiesSection() {
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
          <Leaf size={60} color='#4CAF50' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
          Strategies for Climate Mitigation
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The <i>NATO Climate Initiative</i> hinges on three core
        strategies—Emission Reduction, Energy Efficiency, and Resilience
        Building—as detailed in the{' '}
        <a href='https://www.nato.int/cps/en/natohq/official_texts_185174.htm'>
          Climate Change and Security Action Plan
        </a>
        . These strategies underpin NATO’s approach to mitigating climate change
        while ensuring security.
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
            Emission Reduction
          </h3>
          <p className='text-lg'>
            NATO’s 2023 methodology tracks emissions from military operations,
            targeting a <b>20% reduction by 2030</b>.
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
            Energy Efficiency
          </h3>
          <p className='text-lg'>
            Through the Green Defence Framework, NATO reduces fuel use in
            operations, saving <b>15% in energy costs</b>.
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
            Resilience Building
          </h3>
          <p className='text-lg'>
            NATO adapts bases to withstand climate impacts, with{' '}
            <b>80% now resilient</b> to extreme weather.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        Emission reduction is critical as military activities contribute
        significantly to global emissions. NATO’s transparency initiatives
        foster accountability.
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
            Emission Reduction in Action
          </h3>
          <p className='text-lg'>
            NATO’s energy transition programs have reduced emissions by{' '}
            <b>10% since 2020</b> through renewable energy adoption.
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
            Energy Efficiency Examples
          </h3>
          <p className='text-lg'>
            NATO’s Smart Energy Team has implemented solar-powered bases,
            reducing operational costs.
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
            Resilience Building Cases
          </h3>
          <p className='text-lg'>
            NATO’s bases in the Arctic are fortified against melting permafrost,
            ensuring operational continuity.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        These strategies tackle a world where emissions threaten security,
        energy demands strain resources, and resilience is tested by climate
        impacts. They build on NATO’s commitment to sustainability.
      </motion.p>
      <motion.a
        href='https://www.nato.int/cps/en/natohq/topics_91048.htm'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300'
      >
        <ExternalLink size={24} className='mr-2' />
        Explore Green Defence Framework
      </motion.a>
      {/* Add ~3,000 words */}
    </motion.div>
  )
}
