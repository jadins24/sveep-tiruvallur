'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Users, ImageIcon, Calendar, ArrowUpRight, Plus, CheckCircle2, Clock, UserCog, MessageSquare, XCircle } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Total Students', value: '1,450', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Activities Uploaded', value: '12', icon: ImageIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Upcoming Events', value: '3', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
]

export default function CollegeDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">College Nodal Dashboard</h1>
            <p className="text-slate-500">Government Arts & Science College (AISHE: C-12345)</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <UserCog size={18} />
              Profile Management
            </button>
            <Link 
              href="/dashboard/college/upload"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
            >
              <Plus size={18} />
              Upload New Activity
            </Link>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Department Participation */}
          <div className="lg:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden h-fit">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Department Participation</h2>
              <Link href="/dashboard/college/departments" className="text-xs font-bold text-emerald-600 hover:underline">Manage</Link>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: 'Computer Science', percentage: 85, color: 'bg-emerald-500' },
                { name: 'Mechanical Eng.', percentage: 62, color: 'bg-blue-500' },
                { name: 'Electrical Eng.', percentage: 45, color: 'bg-amber-500' },
                { name: 'Civil Engineering', percentage: 30, color: 'bg-rose-500' },
              ].map((dept) => (
                <div key={dept.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600">{dept.name}</span>
                    <span className="text-slate-900">{dept.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${dept.percentage}%` }}
                      className={`h-full ${dept.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Activities */}
          <div className="lg:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Recent Activities</h2>
              <Link href="/dashboard/college/activities" className="text-sm font-bold text-emerald-600 hover:underline">View Gallery</Link>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="group relative aspect-video rounded-2xl overflow-hidden border border-slate-100">
                    <img 
                      src={`https://picsum.photos/seed/college${i}/400/300`} 
                      alt="Activity" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                      <p className="text-xs font-bold text-white">Voter Awareness Rally</p>
                      <p className="text-[10px] text-white/70">Oct 24, 2024</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Verification Workflow */}
          <div className="lg:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Verification Queue</h2>
              <span className="text-xs font-bold bg-amber-50 text-amber-600 px-2 py-1 rounded-full">12 Pending</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Arun Kumar', id: '2024CS001', status: 'Pending' },
                { name: 'Priya Dharshini', id: '2024CS012', status: 'Pending' },
                { name: 'Sanjay Ram', id: '2024CS045', status: 'Verified' },
              ].map((student, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                      {student.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {student.status === 'Verified' ? (
                      <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <CheckCircle2 size={16} />
                        Verified
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        <button className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all" title="Approve">
                          <CheckCircle2 size={18} />
                        </button>
                        <button className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all" title="Query/Comment">
                          <MessageSquare size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <Link href="/dashboard/college/students" className="text-sm font-bold text-slate-600 hover:text-slate-900">Manage All Students</Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

