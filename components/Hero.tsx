'use client'

import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, School, Users, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              SVEEP <span className="text-emerald-600">Tiruvallur</span>
            </h1>
            
            <p className="mt-4 text-2xl font-bold text-slate-700">
              The Multi-Tier Digital Portal
            </p>
            
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              Official digital platform for voter awareness and participation in Tiruvallur district.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link 
                href="/register" 
                className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-emerald-300 active:scale-95"
              >
                Get Started
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/login" 
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95"
              >
                Portal Login
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/election/800/800" 
                alt="Election Awareness" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
