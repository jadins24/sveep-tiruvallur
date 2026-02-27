'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Users, Search, Filter, CheckCircle2, MessageSquare, MoreVertical, Award } from 'lucide-react'
import React from 'react'

const students = [
  { name: 'Arun Kumar', id: '2024CS001', year: '3rd Year', pledge: true, points: 145 },
  { name: 'Priya Dharshini', id: '2024CS012', year: '3rd Year', pledge: false, points: 25 },
  { name: 'Sanjay Ram', id: '2024CS045', year: '2nd Year', pledge: true, points: 80 },
  { name: 'Meera Jasmine', id: '2024CS099', year: '1st Year', pledge: true, points: 210 },
  { name: 'Rahul Dravid', id: '2024CS105', year: '2nd Year', pledge: false, points: 10 },
]

export default function DeptHeadStudentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Department Students</h1>
          <p className="text-slate-500">Monitor SVEEP engagement for students in your department.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Filter size={18} />
                Filter by Year
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Details</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Year</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Pledge</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Points</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((student, idx) => (
                  <motion.tr 
                    key={student.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
                          {student.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{student.name}</p>
                          <p className="text-xs text-slate-500">{student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{student.year}</td>
                    <td className="p-4">
                      {student.pledge ? (
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">Signed</span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-50 text-amber-600">Pending</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                        <Award size={14} />
                        {student.points}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all" title="Message">
                          <MessageSquare size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                          <MoreVertical size={18} />
                        </button>
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
