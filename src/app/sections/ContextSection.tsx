'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Leaf, Globe, Shield, AlertTriangle, ExternalLink } from 'lucide-react'

export default function ContextSection() {
  return (
    <motion.div
      id='context-content'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8 px-4 md:px-6 lg:px-12'
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
          Climate as a Security Challenge
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The <i>NATO Climate Initiative</i> emerges at a critical moment for
        global security, as recognized in the{' '}
        <a href='https://www.nato.int/cps/en/natohq/official_texts_185174.htm'>
          Climate Change and Security Action Plan
        </a>
        . The stability that once underpinned international cooperation is
        threatened by climate change, with rising temperatures exacerbating
        resource scarcity and conflict. Global greenhouse gas emissions continue
        to soar, with military activities contributing significantly—often
        unaccounted for in national targets. NATO’s 2022 Strategic Concept
        identifies climate change as a defining challenge, prompting action to
        integrate environmental sustainability into defense strategies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
          <Globe size={40} color='#4CAF50' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          Anchored in NATO’s commitment to collective defense, this initiative
          addresses urgent crises: <b>1.1°C global temperature rise</b> drives
          extreme weather, displacing millions; and{' '}
          <b>over 50% of NATO missions</b> now face climate-related risks.
          Regions like the Arctic experience rapid ice melt, intensifying
          geopolitical tensions. The 2025 NATO Summit aims to deepen these
          efforts, building on NATO’s legacy of adapting to new threats while
          addressing climate-induced instability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
          <Shield size={40} color='#4CAF50' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          Climate change amplifies security risks, with resource competition
          fueling conflicts in areas like the Sahel. NATO’s operational energy
          demands—often reliant on fossil fuels—contribute to emissions,
          necessitating a shift to sustainable practices. The initiative
          highlights successful collaborations, such as NATO’s energy efficiency
          programs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='flex items-start'
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
          <AlertTriangle size={40} color='#4CAF50' />
        </motion.div>
        <p className='text-lg mb-6 ml-4'>
          Emerging threats—cyberattacks on energy infrastructure, climate-driven
          migration, and extreme weather impacting military operations—pose
          novel challenges. NATO notes that <b>80% of its bases</b> are at risk
          from climate hazards. Climate change also exacerbates inequalities,
          with only <b>12% of SDG targets on track</b> by 2030.
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        International frameworks face strain, as climate impacts undermine
        stability. NATO’s role in climate security is vital, rooted in its 2022
        Strategic Concept, pushing for integrated approaches to mitigate
        emissions and enhance resilience.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg mb-6'
      >
        This moment demands action. NATO’s past successes—adapting to
        geopolitical shifts, fostering cooperation—contrast with today’s
        climate-driven threats. Allies must navigate this transition, balancing
        security with sustainability, as the initiative urges a recommitment to
        climate action.
      </motion.p>
      <motion.a
        href='https://www.nato.int/nato_static_fl2014/assets/pdf/2023/7/pdf/230710-NATO-GHG-Methodology.pdf'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300'
      >
        <ExternalLink size={24} className='mr-2' />
        Download GHG Emissions Methodology
      </motion.a>
      {/* Add ~2,000 words */}
    </motion.div>
  )
}
