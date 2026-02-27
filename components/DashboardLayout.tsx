'use client'

import React from 'react'
import { motion } from 'motion/react'
import { 
  LayoutDashboard, 
  Users, 
  School, 
  ImageIcon, 
  CheckSquare, 
  LogOut, 
  Bell, 
  Search,
  TrendingUp,
  Plus,
  MoreVertical,
  Calendar,
  Home
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Determine role from pathname (e.g., /dashboard/admin/activities -> admin)
  const role = pathname.split('/')[2] || 'student'

  const sidebarItems = {
    admin: [
      { icon: LayoutDashboard, label: 'District Overview', href: '/dashboard/admin' },
      { icon: School, label: 'Verify Colleges', href: '/dashboard/admin/colleges' },
      { icon: Users, label: 'BDO List', href: '/dashboard/admin/bdo' },
      { icon: ImageIcon, label: 'District Feed', href: '/dashboard/admin/activities' },
    ],
    bdo: [
      { icon: LayoutDashboard, label: 'Block Overview', href: '/dashboard/bdo' },
      { icon: School, label: 'Verify Colleges', href: '/dashboard/bdo/colleges' },
      { icon: ImageIcon, label: 'Block Activities', href: '/dashboard/bdo/activities' },
    ],
    student: [
      { icon: LayoutDashboard, label: 'My Progress', href: '/dashboard/student' },
      { icon: CheckSquare, label: 'Take Pledge', href: '/dashboard/student/pledge' },
      { icon: TrendingUp, label: 'Quizzes', href: '/dashboard/student/quizzes' },
      { icon: ImageIcon, label: 'Upload Activity', href: '/dashboard/student/upload' },
      { icon: ImageIcon, label: 'Gallery', href: '/dashboard/student/gallery' },
    ],
    college: [
      { icon: LayoutDashboard, label: 'College Overview', href: '/dashboard/college' },
      { icon: School, label: 'Departments', href: '/dashboard/college/departments' },
      { icon: ImageIcon, label: 'Upload Activity', href: '/dashboard/college/upload' },
      { icon: Users, label: 'Students List', href: '/dashboard/college/students' },
    ],
    depthead: [
      { icon: LayoutDashboard, label: 'Dept Overview', href: '/dashboard/depthead' },
      { icon: Users, label: 'My Students', href: '/dashboard/depthead/students' },
      { icon: ImageIcon, label: 'Dept Activities', href: '/dashboard/depthead/activities' },
    ]
  }

  const items = sidebarItems[role as keyof typeof sidebarItems] || sidebarItems.student

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 bg-white">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <CheckSquare size={18} />
            </div>
            <span className="font-display text-lg font-bold text-slate-900">SVEEP Tiruvallur</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 font-medium hover:bg-slate-50 hover:text-emerald-600 transition-all group mb-4 border-b border-slate-100"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            Back to Site
          </Link>
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-600 shadow-sm ring-1 ring-emerald-100' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'
                }`}
              >
                <item.icon size={20} className={`transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="rounded-2xl bg-slate-50 p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                {role[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">User Name</p>
                <p className="text-xs text-slate-500 truncate capitalize">{role} Account</p>
              </div>
            </div>
          </div>
          <Link 
            href="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-rose-600 font-medium hover:bg-rose-50 transition-all"
          >
            <LogOut size={20} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search data, students, reports..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-900 hidden sm:block">Dashboard</span>
              <div className="h-8 w-8 rounded-full bg-slate-200" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
