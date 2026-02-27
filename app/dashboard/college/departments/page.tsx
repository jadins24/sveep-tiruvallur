'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { School, Plus, Users, ArrowRight, MoreVertical, Trash2, Edit2 } from 'lucide-react'
import React from 'react'

const initialDepartments = [
  { id: 1, name: 'Computer Science', students: 450, activities: 12, head: 'Dr. Arulmani' },
  { id: 2, name: 'Mechanical Engineering', students: 380, activities: 8, head: 'Prof. Rajesh' },
  { id: 3, name: 'Electrical Engineering', students: 320, activities: 15, head: 'Dr. Sangeetha' },
  { id: 4, name: 'Civil Engineering', students: 290, activities: 5, head: 'Prof. Kumar' },
]

export default function CollegeDepartmentsPage() {
  const [departments, setDepartments] = React.useState(initialDepartments)
  const [isAdding, setIsAdding] = React.useState(false)
  const [newName, setNewName] = React.useState('')
  const [newHead, setNewHead] = React.useState('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName || !newHead) return
    
    const newDept = {
      id: departments.length + 1,
      name: newName,
      students: 0,
      activities: 0,
      head: newHead
    }
    
    setDepartments([...departments, newDept])
    setNewName('')
    setNewHead('')
    setIsAdding(false)
  }

  const handleDelete = (id: number) => {
    setDepartments(departments.filter(d => d.id !== id))
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Department Management</h1>
            <p className="text-slate-500">Manage academic departments and their SVEEP participation.</p>
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
          >
            <Plus size={20} />
            Add Department
          </button>
        </div>

        {isAdding && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h2 className="text-lg font-bold text-slate-900 mb-4">New Department Details</h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Department Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Biotechnology"
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Head of Department</label>
                <input 
                  type="text" 
                  value={newHead}
                  onChange={(e) => setNewHead(e.target.value)}
                  placeholder="e.g. Dr. Sarah"
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="flex items-end gap-2">
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all"
                >
                  Save
                </button>
                <button 
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <School size={24} />
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(dept.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">{dept.name}</h3>
              <p className="text-sm text-slate-500 mb-6">HOD: {dept.head}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students</p>
                  <div className="flex items-center gap-1 mt-1 text-slate-900 font-bold">
                    <Users size={14} className="text-blue-500" />
                    {dept.students}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Activities</p>
                  <div className="flex items-center gap-1 mt-1 text-slate-900 font-bold">
                    <Plus size={14} className="text-emerald-500" />
                    {dept.activities}
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 text-slate-600 text-sm font-bold hover:bg-slate-100 transition-all group/btn">
                View Details
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
