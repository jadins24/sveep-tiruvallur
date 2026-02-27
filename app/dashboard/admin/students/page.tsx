'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { Users, Search, Filter, MoreVertical, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

const students = [
  { name: 'Arun Kumar', id: '2024CS001', college: 'Govt Arts College', epic: 'ABC1234567', status: 'Verified', points: 145 },
  { name: 'Priya Dharshini', id: '2024CS012', college: 'Govt Arts College', epic: 'XYZ9876543', status: 'Pending', points: 25 },
  { name: 'Sanjay Ram', id: '2024CS045', college: 'Engineering Institute', epic: 'KLM4567890', status: 'Verified', points: 80 },
  { name: 'Meera Jasmine', id: '2024CS099', college: 'Medical College', epic: 'PQR1122334', status: 'Verified', points: 210 },
]

export default function AdminStudentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Student Database</h1>
            <p className="text-slate-500">Consolidated view of all registered students with anti-fraud verification.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <ShieldCheck size={18} className="text-emerald-600" />
              Run Duplicate Check
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, ID or EPIC..." 
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
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Name</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">College</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">EPIC Number</th>
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
                    <td className="p-4 text-sm text-slate-600">{student.college}</td>
                    <td className="p-4 text-sm text-slate-600 font-mono">{student.epic}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                        {student.points}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        student.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">Showing 4 of 45,201 Students</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
