'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Leaf, ArrowDown } from 'lucide-react'

export default function HomeSection() {
  const scrollToNext = () =>
    document
      .getElementById('context-content-scrollto')
      ?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-[radial-gradient(circle_at_center_top,_#1B5E20,_#4CAF50,_#A5D6A7)] text-white py-20 px-4 md:px-6 lg:px-12 text-center -mx-4 md:-mx-6 lg:-mx-12'
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className='mb-8 inline-block'
      >
        <Leaf size={150} color='#FFFFFF' />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-5xl md:text-7xl font-extrabold mb-6'
      >
        NATO Climate Initiative
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-xl md:text-2xl max-w-4xl mx-auto mb-8'
      >
        Launched in 2021 by NATO, this transformative initiative presents a
        comprehensive strategy to address climate change as a critical security
        challenge. Stemming from the{' '}
        <i>Climate Change and Security Action Plan</i>, it confronts a world
        marked by environmental crises, rising temperatures, and resource
        conflicts. It calls for renewed cooperation among Allies and partners,
        integrating mitigation efforts with security operations to ensure a
        sustainable future, emphasizing the urgency of collective action to
        reduce emissions, enhance resilience, and uphold global stability for
        all.
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='cursor-pointer mb-8 inline-block'
        onClick={scrollToNext}
      >
        <ArrowDown size={60} color='#FFFFFF' />
      </motion.div>
      <div id='context-content-scrollto'></div>
    </motion.div>
  )
}
