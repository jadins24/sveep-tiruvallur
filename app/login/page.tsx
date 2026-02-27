'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Shield, School, UserCircle, ArrowLeft, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Role = 'admin' | 'bdo' | 'dept' | 'college' | 'student'

export default function LoginPage() {
  const [role, setRole] = React.useState<Role>('student')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (role === 'admin') {
      router.push(`/dashboard/admin`)
    } else if (role === 'bdo') {
      router.push(`/dashboard/bdo`)
    } else if (role === 'college') {
      router.push(`/dashboard/college`)
    } else if (role === 'dept') {
      router.push(`/dashboard/depthead`)
    } else {
      router.push(`/dashboard/student`)
    }
  }

  const roles: Role[] = ['admin', 'bdo', 'college', 'dept', 'student']

  const roleConfig = {
    admin: {
      title: 'District Admin',
      description: 'Collector & Admin Access',
      icon: Shield,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    bdo: {
      title: 'BDO Login',
      description: 'Block Level Monitoring',
      icon: Shield,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    college: {
      title: 'College Nodal',
      description: 'College Registration & SVEEP',
      icon: School,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    dept: {
      title: 'Dept Head',
      description: 'Departmental Monitoring',
      icon: School,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    student: {
      title: 'Student User',
      description: 'Pledge, Quizzes & Uploads',
      icon: UserCircle,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="p-4 sm:p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Sidebar Role Selector */}
          <div className="w-full md:w-80 bg-slate-50 border-r border-slate-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Select Role</h2>
            <div className="space-y-3">
              {roles.map((r) => {
                const config = roleConfig[r]
                const isActive = role === r
                return (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                      isActive 
                        ? `border-emerald-500 bg-white shadow-md` 
                        : 'border-transparent hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? config.bg + ' ' + config.color : 'bg-slate-200 text-slate-400'}`}>
                      <config.icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{config.title}</p>
                      <p className="text-[10px] opacity-70">{config.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Login Form */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="mb-10">
              <h1 className="font-display text-3xl font-bold text-slate-900">Sign In</h1>
              <p className="text-slate-500 mt-2">Access the {roleConfig[role].title} portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <LogIn size={20} />
                Continue to Dashboard
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-emerald-600 font-bold hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
