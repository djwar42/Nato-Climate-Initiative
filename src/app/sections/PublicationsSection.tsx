'use client'
import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, FileText } from 'lucide-react'

export default function PublicationsSection() {
  const publications = [
    {
      date: '28 Feb. 2025',
      title:
        'Dependency on Chinese Clean Energy Technology: Risks and Challenges for Energy and Cyber Security',
      summary:
        'Renewable energy is breaking its records globally, and the share of electricity...',
      link: 'https://www.enseccoe.org/publications/chinese-clean-energy/'
    },
    {
      date: '06 Feb. 2025',
      title: 'BRELL Desynchronisation Assessment',
      summary:
        'The electricity grid in the Baltic region was constructed in the Soviet-era. Onc...',
      link: 'https://www.enseccoe.org/publications/brell-desynchronisation-assessment/'
    },
    {
      date: '09 Jan. 2025',
      title:
        'Advancements in Electro-Mobility: A Look into the Future of Passenger Cars and more…',
      summary:
        "The article proposes the concept of 'energy superiority' as a fundamental pillar...",
      link: 'https://www.enseccoe.org/publications/electro-mobility/'
    },
    {
      date: '10 Dec. 2024',
      title: 'Ukraine’s resources. Critical raw materials',
      summary:
        'The strategic importance of Ukraine’s critical materials cannot be overstated.',
      link: 'https://www.enseccoe.org/publications/ukraines-resources/'
    },
    {
      date: '18 Nov. 2024',
      title: 'Call for Abstracts – Energy Highlights',
      summary:
        'Energy security is a key topics amongst Allies. NATO outlined the strategic thre...',
      link: 'https://www.enseccoe.org/publications/call-for-abstracts/'
    },
    {
      date: '13 Nov. 2024',
      title: 'Energy Security in the Maritime Environment',
      summary:
        'Publication highlights the integral connection between Energy Security and Marit...',
      link: 'https://www.enseccoe.org/publications/ensec-maritime/'
    },
    {
      date: '08 Oct. 2024',
      title: 'Energy Highlights No.19',
      summary:
        'This issue explores some of most pressing issues in the sector today: commodity...',
      link: 'https://www.enseccoe.org/publications/energy-highlights-no-19/'
    },
    {
      date: '07 Oct. 2024',
      title: 'TTX CORE 24-M Final Evaluation Report',
      summary:
        'Coherent Resilience 2024 – Moldova (CORE 24-M) was a Tabletop Exercise held fr...',
      link: 'https://www.enseccoe.org/publications/ttx-core24m-fer/'
    },
    {
      date: '09 Sep. 2024',
      title:
        'The Indispensable Link between Energy Security and Cyber Security',
      summary:
        'Ransomware, cyber espionage, phishing, and DDoS attacks are just a few examples...',
      link: 'https://www.enseccoe.org/publications/the-indispensable-link-between-energy-security-and-cyber-security/'
    },
    {
      date: '03 Sep. 2024',
      title:
        'Assessment of the technologies that could increase the use of distributed energy generation, thereby reducing the impact of military strikes on centralized power generation facilities in Ukraine and enhancing the security and resilience of energy supply in Ukraine',
      summary:
        "The article discusses the significant impact of Russia's military campaign in Uk...",
      link: 'https://www.enseccoe.org/publications/enhancing-power-autonomy-ukraine-post-war-energy/'
    },
    {
      date: '19 Jun. 2024',
      title:
        'Energy storage and energy efficiency as the key enablers of greater use of renewable energy in electricity consumption',
      summary:
        'Renewable energy sources and increased energy efficiency are essential to achiev...',
      link: 'https://www.enseccoe.org/publications/energy-storage-and-energy-efficiency/'
    },
    {
      date: '10 Jun. 2024',
      title:
        'Executive Summary of the field experiment conducted by NATO ENSEC COE in the summer of 2023, utilizing Hydrogen Fuel Cell technology within the military environment',
      summary:
        'The experiment confirmed the potential of portable hydrogen fuel cells to enhanc...',
      link: 'https://www.enseccoe.org/publications/executive-summary-of-the-field-experiment-conducted-by-nato-ensec-coe-in-the-summer-of-2023-utilizing-hydrogen-fuel-cell-technology-within-the-military-environment/'
    },
    {
      date: '17 May. 2024',
      title: 'TTX CORE 23-Baltic Final Exercise Report',
      summary:
        'This report focuses largely on syndicate responses to the exercise scenario vign...',
      link: 'https://www.enseccoe.org/publications/ttx-core23-b-final-report/'
    },
    {
      date: '02 May. 2024',
      title: 'Assessing Gas Security & Resilience into the Future',
      summary:
        'This article demonstrates the challenges of assessing how gas security might loo...',
      link: 'https://www.enseccoe.org/publications/assessing-gas-security-resilience-into-the-future/'
    },
    {
      date: '25 Apr. 2024',
      title:
        'Unlocking Potential: Synthetic Fuels in Modern Military Operations',
      summary:
        'Synthetic fuels represent a transformative solution for modern military forces s...',
      link: 'https://www.enseccoe.org/publications/synthetic-fuels/'
    },
    {
      date: '23 Apr. 2024',
      title:
        'State-of-the-Art: Energy Efficiency Technologies Transforming the States. Renewable (weather-dependent) Power Generation',
      summary:
        'Weather-dependent power generation resources generally rely on natural climate a...',
      link: 'https://www.enseccoe.org/publications/power-generation/'
    },
    {
      date: '22 Apr. 2024',
      title:
        'Infrastructure needed for e-mobility with a case study in a German context',
      summary:
        'The electrification of transportation is deemed pivotal in reducing CO2 emission...',
      link: 'https://www.enseccoe.org/publications/infrastructure-needed-for-e-mobility-with-a-case-study-in-a-german-context/'
    },
    {
      date: '15 Apr. 2024',
      title: 'Why is Critical Underwater Infrastructure the target?',
      summary:
        'This article aims to shed light on why CUI has become a target and to examine th...',
      link: 'https://www.enseccoe.org/publications/why-is-critical-underwater-infrastructure-the-target/'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8 px-4 md:px-6 lg:px-12 py-16'
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='flex items-center'
      >
        <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
          <FileText size={60} color='#4CAF50' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#4CAF50] ml-4'>
          Publications
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
      >
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
          >
            <motion.div whileHover={{ x: -10 }} transition={{ duration: 0.3 }}>
              <FileText size={40} color='#4CAF50' />
            </motion.div>
            <p className='text-sm text-gray-500 mb-2'>{pub.date}</p>
            <h3 className='text-lg font-bold mb-2'>
              <a
                href={pub.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#4CAF50] hover:text-[#A5D6A7]'
              >
                {pub.title}
              </a>
            </h3>
            <p className='text-gray-700 text-base'>{pub.summary}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        href='https://www.enseccoe.org/'
        target='_blank'
        rel='noopener noreferrer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className='inline-flex items-center bg-[#4CAF50] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#A5D6A7] transition-colors duration-300 mt-4'
      >
        <ExternalLink size={24} className='mr-2' />
        Visit NATO Energy Security Centre of Excellence
      </motion.a>
    </motion.div>
  )
}
