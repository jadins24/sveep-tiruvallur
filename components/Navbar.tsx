'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Vote, LayoutDashboard, LogIn, UserPlus, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [userRole, setUserRole] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Check for logged in user
    const role = localStorage.getItem('userRole')
    setUserRole(role)
  }, [])

  const dashboardHref = userRole === 'admin' || userRole === 'bdo' || userRole === 'dept' 
    ? `/dashboard/admin?role=${userRole}` 
    : `/dashboard/${userRole}`

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                <Vote size={24} />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                SVEEP <span className="text-emerald-600">Tiruvallur</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link href="/gallery" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Gallery</Link>
              <Link href="/#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About SVEEP</Link>
              <div className="h-6 w-px bg-slate-200" />
              
              {userRole ? (
                <Link href={dashboardHref} className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                    <LogIn size={18} />
                    Login
                  </Link>
                  <Link 
                    href="/register" 
                    className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all active:scale-95"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-slate-200 bg-white p-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link href="/gallery" className="text-sm font-medium text-slate-600">Gallery</Link>
            <Link href="/#about" className="text-sm font-medium text-slate-600">About SVEEP</Link>
            
            {userRole ? (
              <Link href={dashboardHref} className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <LogIn size={18} />
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
                >
                  <UserPlus size={18} />
                  Register
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
