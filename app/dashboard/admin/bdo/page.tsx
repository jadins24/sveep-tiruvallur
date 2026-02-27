'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Users, Search, Filter, MapPin, Mail, Phone, MoreVertical, UserPlus } from 'lucide-react'
import React from 'react'

const bdos = [
  { id: 1, name: 'S. Muthu Kumar', block: 'Tiruvallur', email: 'bdo.tiruvallur@tn.gov.in', phone: '+91 98765 43210', status: 'Active' },
  { id: 2, name: 'R. Sangeetha', block: 'Avadi', email: 'bdo.avadi@tn.gov.in', phone: '+91 98765 43211', status: 'Active' },
  { id: 3, name: 'K. Rajesh', block: 'Poonamallee', email: 'bdo.poonamallee@tn.gov.in', phone: '+91 98765 43212', status: 'Active' },
  { id: 4, name: 'M. Lakshmi', block: 'Gummidipoondi', email: 'bdo.gummidipoondi@tn.gov.in', phone: '+91 98765 43213', status: 'Inactive' },
]

export default function AdminBDOPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">BDO Management</h1>
            <p className="text-slate-500">Manage Block Development Officers across the district.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95">
            <UserPlus size={18} />
            Add New BDO
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or block..." 
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
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">BDO Details</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Block</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bdos.map((bdo, idx) => (
                  <motion.tr 
                    key={bdo.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">
                          {bdo.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{bdo.name}</p>
                          <p className="text-xs text-slate-500">ID: BDO-2024-{bdo.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <MapPin size={14} className="text-slate-400" />
                        {bdo.block}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <Mail size={12} className="text-slate-400" />
                          {bdo.email}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <Phone size={12} className="text-slate-400" />
                          {bdo.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        bdo.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {bdo.status}
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
        </div>
      </div>
    </DashboardLayout>
  )
}
