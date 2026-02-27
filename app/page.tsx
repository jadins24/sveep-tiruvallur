'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { motion } from 'motion/react'
import { Vote } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Awareness in Action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Glimpses of SVEEP activities and awareness programs conducted across Tiruvallur district.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-lg group"
              >
                <img 
                  src={`https://picsum.photos/seed/sveep${i}/800/600`} 
                  alt={`SVEEP Activity ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Awareness Program Phase {i}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center text-white sm:px-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What is SVEEP?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
              Systematic Voters&apos; Education and Electoral Participation program, better known as SVEEP, is the flagship program of the Election Commission of India for voter education, spreading voter awareness and promoting voter literacy in India.
            </p>
            <div className="mt-10 flex justify-center">
              <button className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-600 active:scale-95">
                Learn More at ECI
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Vote size={18} />
              </div>
              <span className="font-display text-lg font-bold text-slate-900">SVEEP Tiruvallur</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2024 District Administration. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-emerald-600">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-emerald-600">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-emerald-600">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
