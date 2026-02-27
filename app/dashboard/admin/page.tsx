'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Users, School, ImageIcon, TrendingUp, ArrowUpRight, Clock, CheckCircle2, Bell, FileText, Mic, ShieldAlert } from 'lucide-react'
import React from 'react'

const stats = [
  { label: 'Total Colleges', value: '234', change: '+12%', icon: School, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Active Students', value: '45,201', change: '+18%', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Activities Uploaded', value: '1,240', change: '+5%', icon: ImageIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Pledges Taken', value: '38,900', change: '+22%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
]

const recentActivities = [
  { college: 'Government Arts College', activity: 'Voter Awareness Rally', status: 'Pending Approval', time: '2 hours ago' },
  { college: 'Engineering Institute', activity: 'Digital Pledge Drive', status: 'Approved', time: '5 hours ago' },
  { college: 'Medical College', activity: 'Poster Competition', status: 'Approved', time: '1 day ago' },
]

function AdminDashboardContent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">District Administration Dashboard</h1>
          <p className="text-slate-500">Overview of voter awareness activities across the district.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <FileText size={18} />
            Consolidated Reports
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <ShieldAlert size={18} />
            Random Verification
          </button>
        </div>
      </div>

      {/* RO Talks Integration Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">
            <Mic size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold">RO Talks Integration</h2>
            <p className="text-emerald-50 opacity-90 text-sm">Returning Officer & Instructional talks scheduled for tomorrow at 10:00 AM.</p>
          </div>
        </div>
        <button className="px-6 py-3 rounded-xl bg-white text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-all">
          Join Live Session
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} />
                {stat.change}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities Feed */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Activities Feed</h2>
            <div className="flex gap-2">
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all">All</button>
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-all">Pending</button>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {recentActivities.map((item, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <ImageIcon size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.activity}</p>
                    <p className="text-sm text-slate-500">{item.college}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock size={10} />
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === 'Pending Approval' ? (
                    <>
                      <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm hover:bg-emerald-700 transition-all active:scale-95">
                        Approve
                      </button>
                      <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-all active:scale-95">
                        Reject
                      </button>
                    </>
                  ) : (
                    <button className="px-4 py-2 rounded-xl bg-slate-100 text-slate-500 text-xs font-bold cursor-default">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
            <button className="text-sm font-bold text-slate-600 hover:text-slate-900">View All Activities</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Approve New Colleges
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium">
                <TrendingUp size={18} className="text-blue-400" />
                Generate District Report
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium">
                <Bell size={18} className="text-amber-400" />
                Send Notification to Nodal Officers
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldAlert size={20} className="text-rose-500" />
              Anti-Fraud Protocols
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">One-Mobile-Per-Account</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Duplicate EPIC Detection</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">DOB Verification</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Auto-Watermarking</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Verification Queue</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <p className="text-sm text-slate-600 flex-1">12 Colleges pending verification</p>
                <ArrowUpRight size={16} className="text-slate-400" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-sm text-slate-600 flex-1">45 Activity reports to review</p>
                <ArrowUpRight size={16} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <AdminDashboardContent />
    </DashboardLayout>
  )
}
