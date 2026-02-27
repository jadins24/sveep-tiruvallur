'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import { motion } from 'motion/react'
import { ImageIcon, MapPin, Calendar, Filter, Search } from 'lucide-react'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Voter Awareness Rally',
    college: 'Government Arts College',
    location: 'District Main Square',
    date: 'Oct 24, 2024',
    image: 'https://picsum.photos/seed/rally1/800/600',
    category: 'Rally'
  },
  {
    id: 2,
    title: 'Digital Pledge Drive',
    college: 'Engineering Institute of Tech',
    location: 'Campus Auditorium',
    date: 'Oct 22, 2024',
    image: 'https://picsum.photos/seed/pledge1/800/600',
    category: 'Pledge'
  },
  {
    id: 3,
    title: 'Street Play on Voting Rights',
    college: 'Medical College of District',
    location: 'Central Bus Stand',
    date: 'Oct 20, 2024',
    image: 'https://picsum.photos/seed/play1/800/600',
    category: 'Cultural'
  },
  {
    id: 4,
    title: 'Poster Making Competition',
    college: 'Women\'s Degree College',
    location: 'College Hall',
    date: 'Oct 18, 2024',
    image: 'https://picsum.photos/seed/poster1/800/600',
    category: 'Competition'
  },
  {
    id: 5,
    title: 'EVM Demonstration Workshop',
    college: 'Polytechnic Institute',
    location: 'Seminar Room 2',
    date: 'Oct 15, 2024',
    image: 'https://picsum.photos/seed/evm1/800/600',
    category: 'Workshop'
  },
  {
    id: 6,
    title: 'Youth Voter Registration Camp',
    college: 'Science Academy',
    location: 'Library Plaza',
    date: 'Oct 12, 2024',
    image: 'https://picsum.photos/seed/camp1/800/600',
    category: 'Registration'
  }
]

export default function GalleryPage() {
  const [filter, setFilter] = React.useState('All')
  const categories = ['All', 'Rally', 'Pledge', 'Cultural', 'Competition', 'Workshop', 'Registration']

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Awareness <span className="text-emerald-600">Gallery</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Witness the impact of SVEEP activities across our district through the eyes of our students and institutions.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by college or activity..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              <Filter size={18} className="text-slate-400 shrink-0 mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    filter === cat 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' 
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-emerald-700 uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.college}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                <ImageIcon size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No activities found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your filter or search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <ImageIcon size={18} />
              </div>
              <span className="font-display text-lg font-bold text-slate-900">SVEEP Gallery</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2024 District Administration. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
