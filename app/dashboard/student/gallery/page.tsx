'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { ImageIcon, Search, Filter, Calendar, MapPin, CheckCircle2, XCircle, Clock, Plus } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

const activities = [
  { id: 1, title: 'Voter Awareness Rally', date: 'Oct 24, 2024', status: 'Approved', image: 'https://picsum.photos/seed/act1/400/300' },
  { id: 2, title: 'Digital Pledge Drive', date: 'Oct 25, 2024', status: 'Approved', image: 'https://picsum.photos/seed/act2/400/300' },
  { id: 3, title: 'Poster Competition', date: 'Oct 26, 2024', status: 'Approved', image: 'https://picsum.photos/seed/act3/400/300' },
  { id: 4, title: 'Street Play on Voting', date: 'Oct 27, 2024', status: 'Approved', image: 'https://picsum.photos/seed/act4/400/300' },
]

export default function StudentGalleryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">District Activity Gallery</h1>
            <p className="text-slate-500">Explore awareness initiatives and programs across the district.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search activities or colleges..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Filter size={18} />
                Filter
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, idx) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {/* Watermark simulation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-1 text-[8px] text-white font-mono text-center">
                    VERIFIED SVEEP PORTAL • District Approved
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{activity.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Calendar size={12} />
                      {activity.date}
                    </div>
                    <button className="text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
