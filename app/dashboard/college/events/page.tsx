'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { Calendar, MapPin, Clock, Users, Plus, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const events = [
  { id: 1, title: 'District Level Voter Quiz', date: 'Nov 05, 2024', time: '10:00 AM', location: 'Main Auditorium', type: 'Competition', participants: 250 },
  { id: 2, title: 'SVEEP Awareness Seminar', date: 'Nov 12, 2024', time: '02:00 PM', location: 'Conference Hall', type: 'Seminar', participants: 120 },
  { id: 3, title: 'National Voters Day Prep', date: 'Jan 20, 2025', time: '11:00 AM', location: 'Grounds', type: 'Planning', participants: 50 },
]

export default function CollegeEventsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Upcoming Events</h1>
            <p className="text-slate-500">Scheduled awareness programs and competitions for your institution.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95">
            <Plus size={18} />
            Propose New Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-50 text-blue-600 uppercase tracking-wider">
                  {event.type}
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Users size={14} />
                  {event.participants} Expected
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {event.title}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar size={16} className="text-slate-400" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock size={16} className="text-slate-400" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="text-slate-400" />
                  {event.location}
                </div>
              </div>
              <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-600 font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                Manage Event
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
