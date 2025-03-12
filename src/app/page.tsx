'use client'
import React from 'react'
import HomeSection from './sections/HomeSection'
import ContextSection from './sections/ContextSection'
import StrategiesSection from './sections/StrategiesSection'
import ActionsSection from './sections/ActionsSection'
import PartnershipsSection from './sections/PartnershipsSection'
import FutureSection from './sections/FutureSection'
import PublicationsSection from './sections/PublicationsSection'

export default function Home() {
  return (
    <main className='min-h-screen bg-background text-dark font-sans leading-relaxed'>
      <div className='grid grid-cols-1 gap-12 px-4 md:px-6 lg:px-12'>
        <HomeSection />
        <ContextSection />
        <StrategiesSection />
        <ActionsSection />
        <PartnershipsSection />
        <FutureSection />
        <PublicationsSection />
      </div>
    </main>
  )
}
