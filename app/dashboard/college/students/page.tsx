'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { Users, Search, Filter, MoreVertical, CheckCircle2, XCircle, MessageSquare, UserPlus } from 'lucide-react'
import { motion } from 'motion/react'

const students = [
  { name: 'Arun Kumar', id: '2024CS001', department: 'Computer Science', year: '3rd Year', status: 'Verified', points: 145 },
  { name: 'Priya Dharshini', id: '2024CS012', department: 'Computer Science', year: '3rd Year', status: 'Pending', points: 25 },
  { name: 'Sanjay Ram', id: '2024CS045', department: 'Mechanical', year: '2nd Year', status: 'Verified', points: 80 },
  { name: 'Meera Jasmine', id: '2024CS099', department: 'Arts', year: '1st Year', status: 'Verified', points: 210 },
  { name: 'Rahul Dravid', id: '2024CS105', department: 'Commerce', year: '2nd Year', status: 'Query Raised', points: 10 },
]

export default function CollegeStudentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Student Management</h1>
            <p className="text-slate-500">Verify student profiles and monitor their participation points.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95">
            <UserPlus size={18} />
            Bulk Import Students
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or ID..." 
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

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Details</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Year</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Points</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
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
                    <td className="p-4 text-sm text-slate-600">{student.department}</td>
                    <td className="p-4 text-sm text-slate-600">{student.year}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                        {student.points}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        student.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 
                        student.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {student.status === 'Pending' && (
                          <>
                            <button className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all">
                              <CheckCircle2 size={16} />
                            </button>
                            <button className="p-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all">
                              <MessageSquare size={16} />
                            </button>
                          </>
                        )}
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
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">Showing 5 of 1,450 Students</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
