'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { School, Users, ImageIcon, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Total Colleges', value: '12', icon: School, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Verified Colleges', value: '8', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Pending Verification', value: '4', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
]

export default function BDODashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">BDO Dashboard (Block Level)</h1>
            <p className="text-slate-500">Tiruvallur Block - Monitoring SVEEP activities across colleges.</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
            <MapPin className="text-rose-500" size={18} />
            <span className="text-sm font-bold text-slate-700">Tiruvallur Block</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
            >
              <div className={`inline-flex p-3 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
                <stat.icon size={24} />
              </div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* College Verification Status */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">College Verification Queue</h2>
              <Link href="/dashboard/bdo/colleges" className="text-sm font-bold text-emerald-600 hover:underline">Verify All</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Govt Arts College', code: 'C-12345', status: 'Pending' },
                { name: 'St. Peters Engineering', code: 'C-54321', status: 'Pending' },
                { name: 'Tiruvallur Poly', code: 'C-98765', status: 'Verified' },
              ].map((college, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      {college.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{college.name}</p>
                      <p className="text-xs text-slate-500">{college.code}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {college.status === 'Verified' ? (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">Verified</span>
                    ) : (
                      <Link 
                        href="/dashboard/bdo/colleges" 
                        className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-all"
                      >
                        Review
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Block Activity Feed */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Recent Block Activities</h2>
              <Link href="/dashboard/bdo/activities" className="text-sm font-bold text-emerald-600 hover:underline">View All</Link>
            </div>
            <div className="p-6 space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="h-16 w-16 rounded-xl overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/block${i}/100/100`} alt="Activity" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">Voter Awareness Rally - Govt Arts</p>
                    <p className="text-xs text-slate-500">24 Oct 2024 • 45 Students</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
