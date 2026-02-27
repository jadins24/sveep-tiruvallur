'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { 
  School, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Users, 
  ImageIcon, 
  ArrowLeft, 
  Calendar, 
  Download,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const collegesData = {
  '1': {
    name: 'Govt Arts & Science College',
    code: 'C-12345',
    block: 'Tiruvallur',
    status: 'Verified',
    students: 1450,
    activities: 12,
    nodalOfficer: 'Dr. S. Arumugam',
    contact: '+91 98400 12345',
    email: 'principal@gasc-tiruvallur.edu.in',
    departments: [
      { name: 'Computer Science', students: 450, participation: '85%' },
      { name: 'Mechanical Eng.', students: 380, participation: '62%' },
      { name: 'Arts & Science', students: 620, participation: '45%' },
    ],
    recentActivities: [
      { id: 1, title: 'National Voters Day Rally', date: 'Jan 25, 2024', type: 'Rally', participants: 450 },
      { id: 2, title: 'Voter Registration Camp', date: 'Feb 12, 2024', type: 'Camp', participants: 120 },
      { id: 3, title: 'Electoral Literacy Workshop', date: 'Mar 05, 2024', type: 'Workshop', participants: 85 },
    ]
  },
  '2': {
    name: 'St. Peters Engineering College',
    code: 'C-54321',
    block: 'Avadi',
    status: 'Pending',
    students: 2100,
    activities: 8,
    nodalOfficer: 'Prof. J. Mary',
    contact: '+91 98400 54321',
    email: 'sveep@stpeters.edu.in',
    departments: [
      { name: 'IT', students: 600, participation: '40%' },
      { name: 'ECE', students: 500, participation: '35%' },
      { name: 'Civil', students: 400, participation: '20%' },
    ],
    recentActivities: [
      { id: 1, title: 'Digital Voter Awareness', date: 'Feb 10, 2024', type: 'Online', participants: 300 },
    ]
  }
}

export default function CollegeDetailPage() {
  const params = useParams()
  const id = params.id as string
  const college = collegesData[id as keyof typeof collegesData] || collegesData['1']

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard/admin/colleges"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{college.name}</h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm text-slate-500 font-medium">AISHE Code: {college.code}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={14} />
                {college.block} Block
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Download size={18} />
              Export Report
            </button>
            {college.status === 'Pending' ? (
              <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                <ShieldCheck size={18} />
                Verify College
              </button>
            ) : (
              <div className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold border border-emerald-100">
                <CheckCircle2 size={18} />
                Verified
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Total Students', value: college.students, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'SVEEP Activities', value: college.activities, icon: ImageIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Participation Rate', value: '68%', icon: CheckCircle2, color: 'text-amber-600', bg: 'bg-amber-50' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <div className={`inline-flex p-3 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
                    <stat.icon size={24} />
                  </div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Departments */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="font-bold text-slate-900">Department Breakdown</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {college.departments.map((dept) => (
                    <div key={dept.name} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-slate-700">{dept.name}</span>
                        <span className="text-slate-500">{dept.students} Students ({dept.participation} participation)</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: dept.participation }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900">Recent Activities</h2>
                <button className="text-sm font-bold text-emerald-600 hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-100">
                {college.recentActivities.map((activity) => (
                  <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <ImageIcon size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar size={12} />
                            {activity.date}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Users size={12} />
                            {activity.participants} participants
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-emerald-600 transition-all">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Nodal Officer Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-slate-900 mb-6">Nodal Officer Details</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                  {college.nodalOfficer[5]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{college.nodalOfficer}</p>
                  <p className="text-xs text-slate-500">College Nodal Officer</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <MessageSquare size={16} />
                  </div>
                  {college.contact}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <ExternalLink size={16} />
                  </div>
                  {college.email}
                </div>
              </div>
              <button className="w-full mt-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all">
                Contact Officer
              </button>
            </div>

            {/* Verification History */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-slate-900 mb-6">Verification History</h2>
              <div className="space-y-6">
                {[
                  { status: 'Verified', by: 'District Admin', date: 'Oct 20, 2024' },
                  { status: 'Reviewed', by: 'BDO Tiruvallur', date: 'Oct 18, 2024' },
                  { status: 'Submitted', by: 'College Nodal', date: 'Oct 15, 2024' },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-3 w-3 rounded-full ${idx === 0 ? 'bg-emerald-500 ring-4 ring-emerald-100' : 'bg-slate-300'}`} />
                      {idx !== 2 && <div className="w-px h-full bg-slate-100 my-1" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{step.status}</p>
                      <p className="text-xs text-slate-500">{step.by} • {step.date}</p>
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
