'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Users, ImageIcon, CheckCircle2, Clock, School, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'My Students', value: '450', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Verified Profiles', value: '410', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Pending Pledges', value: '40', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
]

export default function DeptHeadDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dept Head Dashboard</h1>
            <p className="text-slate-500">Computer Science Department - Monitoring student engagement.</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
            <School className="text-emerald-600" size={18} />
            <span className="text-sm font-bold text-slate-700">Govt Arts College</span>
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
          {/* Student Engagement Tracking */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Student Engagement</h2>
              <Link href="/dashboard/depthead/students" className="text-sm font-bold text-emerald-600 hover:underline">Manage Students</Link>
            </div>
            <div className="p-6 space-y-6">
              {[
                { label: 'Pledge Completion', value: 92, color: 'bg-emerald-500' },
                { label: 'Quiz Participation', value: 75, color: 'bg-blue-500' },
                { label: 'Activity Uploads', value: 45, color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600 uppercase tracking-wider">{item.label}</span>
                    <span className="text-slate-900">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Dept Activities */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Recent Dept Activities</h2>
              <Link href="/dashboard/depthead/activities" className="text-sm font-bold text-emerald-600 hover:underline">Gallery</Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { title: 'Classroom Awareness Talk', date: '25 Oct', points: 50 },
                  { title: 'Poster Making Competition', date: '24 Oct', points: 120 },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <ImageIcon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                        <p className="text-xs text-slate-500">{activity.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-600">+{activity.points} pts</span>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
