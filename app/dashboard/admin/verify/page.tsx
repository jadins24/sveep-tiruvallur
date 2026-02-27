'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { CheckSquare, Search, Filter, ShieldAlert, CheckCircle2, XCircle, MessageSquare } from 'lucide-react'
import { motion } from 'motion/react'

const pendingVerifications = [
  { id: 'V-001', type: 'Institution Registration', target: 'New City College', date: '2 hours ago', priority: 'High' },
  { id: 'V-002', type: 'Student Bulk Upload', target: 'Govt Arts College (500 students)', date: '5 hours ago', priority: 'Medium' },
  { id: 'V-003', type: 'Activity Approval', target: 'Engineering Institute - Mega Rally', date: '1 day ago', priority: 'Low' },
  { id: 'V-004', type: 'Nodal Officer Change', target: 'Medical College', date: '1 day ago', priority: 'Medium' },
]

export default function AdminVerifyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Verification Center</h1>
            <p className="text-slate-500">Review and authorize pending registrations and activities.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900">Pending Approvals</h2>
                <span className="text-xs font-bold bg-amber-50 text-amber-600 px-2 py-1 rounded-full">4 Pending</span>
              </div>
              <div className="divide-y divide-slate-100">
                {pendingVerifications.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        item.priority === 'High' ? 'bg-rose-50 text-rose-600' : 
                        item.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        <CheckSquare size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{item.type}</p>
                        <p className="text-sm text-slate-500">{item.target}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{item.date} • Priority: {item.priority}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm hover:bg-emerald-700 transition-all">
                        <CheckCircle2 size={14} />
                        Approve
                      </button>
                      <button className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <ShieldAlert className="text-amber-400" size={24} />
                </div>
                <h3 className="font-bold text-lg">Random Verification</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                System-generated random audit of student data and activity uploads to ensure authenticity.
              </p>
              <button className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all active:scale-95">
                Start Random Audit
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Audit Logs</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Audit Completed: Govt Arts College</p>
                      <p className="text-[10px] text-slate-500">100% Data Authenticity Verified</p>
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
