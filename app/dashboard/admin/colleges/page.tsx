'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { School, CheckCircle2, XCircle, MessageSquare, Search, Filter, MapPin, Building2, ArrowRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const initialColleges = [
  { id: 1, name: 'Govt Arts & Science College', code: 'C-12345', block: 'Tiruvallur', status: 'Verified', students: 1450, activities: 12 },
  { id: 2, name: 'St. Peters Engineering College', code: 'C-54321', block: 'Avadi', status: 'Pending', students: 2100, activities: 8 },
  { id: 3, name: 'Tiruvallur Polytechnic', code: 'C-98765', block: 'Tiruvallur', status: 'Verified', students: 850, activities: 15 },
  { id: 4, name: 'Sri Venkateswara College', code: 'C-11223', block: 'Poonamallee', status: 'Pending', students: 1200, activities: 5 },
]

export default function AdminCollegesPage() {
  const [colleges, setColleges] = React.useState(initialColleges)

  const handleVerify = (id: number) => {
    setColleges(colleges.map(c => c.id === id ? { ...c, status: 'Verified' } : c))
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">District College Oversight</h1>
          <p className="text-slate-500">Monitor and verify college participation across all blocks in Tiruvallur District.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by college name, code or block..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Filter size={18} />
                Filter by Block
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">College Details</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Block</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Students</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Activities</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {colleges.map((college, idx) => (
                  <motion.tr 
                    key={college.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                          {college.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{college.name}</p>
                          <p className="text-xs text-slate-500">{college.code}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Building2 size={14} className="text-slate-400" />
                        {college.block}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-bold">{college.students}</td>
                    <td className="p-4 text-sm text-slate-600 font-bold">{college.activities}</td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        college.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {college.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Link 
                          href={`/dashboard/admin/colleges/${college.id}`}
                          className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                          title="View Details"
                        >
                          <ArrowRight size={18} />
                        </Link>
                        {college.status === 'Pending' ? (
                          <>
                            <button 
                              onClick={() => handleVerify(college.id)}
                              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all" 
                              title="Verify College"
                            >
                              <CheckCircle2 size={18} />
                            </button>
                            <button className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all" title="Query">
                              <MessageSquare size={18} />
                            </button>
                          </>
                        ) : (
                          <span className="text-xs font-bold text-emerald-600 px-3 py-1 bg-emerald-50 rounded-lg">Verified</span>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
