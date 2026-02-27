'use client'

import React from 'react'
import { motion } from 'motion/react'
import { UserCircle, ArrowLeft, UserPlus, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [step, setStep] = React.useState(1)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
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
          {/* Sidebar Info */}
          <div className="w-full md:w-80 bg-slate-900 p-8 text-white">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
              <UserPlus size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Create your student account to participate in voter awareness activities, take the digital pledge, and earn points for your institution.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Digital Voter Pledge</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Awareness Quizzes</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Activity Tracking</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex-1 p-8 lg:p-12">
            {step === 1 ? (
              <>
                <div className="mb-10">
                  <h1 className="font-display text-3xl font-bold text-slate-900">Student Registration</h1>
                  <p className="text-slate-500 mt-2">Enter your details to get started</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" required className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" required className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Select College</label>
                    <select required className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50 appearance-none">
                      <option value="">Choose your institution...</option>
                      <option value="1">Government Arts College</option>
                      <option value="2">Engineering Institute of Tech</option>
                      <option value="3">Medical College of District</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Password</label>
                      <input type="password" required className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Confirm Password</label>
                      <input type="password" required className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-slate-50/50" />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <UserPlus size={20} />
                    Create Student Account
                  </button>
                </form>

                <div className="mt-10 text-center">
                  <p className="text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link href="/login" className="text-emerald-600 font-bold hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-24 w-24 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Registration Successful!</h2>
                <p className="mt-4 text-slate-500 max-w-sm mx-auto">
                  Your student account has been created. You can now log in and start earning awareness points.
                </p>
                <Link 
                  href="/login"
                  className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-10 py-4 font-bold text-white shadow-xl hover:bg-slate-800 transition-all active:scale-95"
                >
                  Go to Login
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
