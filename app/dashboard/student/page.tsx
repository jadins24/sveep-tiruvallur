'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { CheckSquare, TrendingUp, ImageIcon, Award, ArrowRight, Star, Clock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function StudentDashboard() {
  const [pledgeSigned, setPledgeSigned] = React.useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Student Engagement Portal</h1>
            <p className="text-slate-500">Participate in the democratic process and earn awareness points.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm">
              <Award className="text-amber-500" size={20} />
              <span className="text-sm font-bold text-slate-700">Level 1 Awareness</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200 shadow-sm text-emerald-700">
              <CheckCircle2 size={20} />
              <span className="text-sm font-bold">OTP Verified</span>
            </div>
          </div>
        </div>

        {/* Pledge Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl p-8 text-white shadow-xl transition-all duration-500 ${pledgeSigned ? 'bg-emerald-600' : 'bg-slate-900'}`}
        >
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Digital Voter&apos;s Pledge</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              &quot;We, the citizens of India, having abiding faith in democracy, hereby pledge to uphold the democratic traditions of our country...&quot;
            </p>
            {pledgeSigned ? (
              <div className="flex items-center gap-3 bg-white/20 px-6 py-4 rounded-2xl border border-white/30 backdrop-blur-sm">
                <CheckCircle2 size={24} className="text-emerald-300" />
                <div>
                  <p className="font-bold">Pledge Signed Electronically</p>
                  <p className="text-xs opacity-80">Certificate generated on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setPledgeSigned(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white hover:bg-emerald-600 transition-all active:scale-95"
              >
                Sign the Electronic Pledge
                <ArrowRight size={18} />
              </button>
            )}
          </div>
          {/* Decorative Background Element */}
          <div className="absolute right-[-5%] bottom-[-10%] opacity-10 rotate-12">
            <CheckSquare size={300} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activities & Quizzes */}
          <div className="space-y-8">
            <section>
              <h3 className="font-bold text-slate-900 text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-4">
                <Link href="/dashboard/student/pledge" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Take Digital Pledge</h4>
                      <p className="text-sm text-slate-500">Commit to democratic participation.</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-emerald-600 transition-colors" />
                </Link>

                <Link href="/dashboard/student/quizzes" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Voter Awareness Quizzes</h4>
                      <p className="text-sm text-slate-500">Test your knowledge and earn points.</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </Link>

                <Link href="/dashboard/student/upload" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ImageIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Upload Activity Photo</h4>
                      <p className="text-sm text-slate-500">Share your participation in rallies.</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-purple-600 transition-colors" />
                </Link>
              </div>
            </section>
          </div>

          {/* Status Tracking */}
          <section>
            <h3 className="font-bold text-slate-900 text-lg mb-4">Submission Status</h3>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {[
                  { title: 'Voter Awareness Rally Photo', date: '24 Oct', status: 'Approved' },
                  { title: 'Digital Pledge', date: '25 Oct', status: 'Completed' },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-slate-600">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  )
}
