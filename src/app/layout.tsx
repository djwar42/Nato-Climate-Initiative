'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'motion/react'
import { Leaf } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <title>NATO Climate Initiative</title>
      </head>
      <body className={inter.className}>
        <nav className='fixed top-0 w-screen bg-[#4CAF50] text-white p-6 shadow-lg flex items-center z-20'>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 5 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className='mr-4'
          >
            <Leaf size={50} color='#FFFFFF' />
          </motion.div>
          <span className='text-3xl font-bold'>NATO Climate Initiative</span>
        </nav>
        <main className='pt-24 pb-12'>{children}</main>
        <footer className='bg-[#1B5E20] text-white p-6 text-center'>
          <p className='text-lg'>
            NATO Climate Initiative | Website by{' '}
            <a target='_BLANK' href='https://github.com/djwar42'>
              Daniel Warner
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
