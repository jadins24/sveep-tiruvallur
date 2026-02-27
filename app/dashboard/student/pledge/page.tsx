'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { CheckSquare, Download, Share2, CheckCircle2, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

export default function StudentPledgePage() {
  const [signed, setSigned] = React.useState(false)
  const [pledgeId, setPledgeId] = React.useState('')

  React.useEffect(() => {
    setPledgeId(`SVEEP-2024-${Math.random().toString(36).substring(7).toUpperCase()}`)
  }, [])

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Digital Voter&apos;s Pledge</h1>
          <p className="text-slate-500 mt-2">Uphold the democratic traditions of our country and the dignity of free, fair and peaceful elections.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12 space-y-8">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck size={48} />
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed text-center italic font-serif">
                &quot;We, the citizens of India, having abiding faith in democracy, hereby pledge to uphold the democratic traditions of our country and the dignity of free, fair and peaceful elections, and to vote in every election fearlessly and without being influenced by considerations of religion, race, caste, community, language or any inducement.&quot;
              </p>
            </div>

            {!signed ? (
              <div className="space-y-6 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <input 
                    type="checkbox" 
                    id="confirm" 
                    className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        // Small delay for effect
                        setTimeout(() => setSigned(true), 500)
                      }
                    }}
                  />
                  <label htmlFor="confirm" className="text-sm font-medium text-slate-700 cursor-pointer">
                    I have read and agree to uphold this pledge as a responsible citizen of India.
                  </label>
                </div>
                <p className="text-center text-xs text-slate-400">
                  By checking the box, you are electronically signing this pledge. Your participation will be recorded and points will be added to your profile.
                </p>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pt-8 border-t border-slate-100 text-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl font-bold border border-emerald-200">
                  <CheckCircle2 size={24} />
                  Pledge Signed Successfully!
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all">
                    <Download size={18} />
                    Download Certificate
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all">
                    <Share2 size={18} />
                    Share on Social Media
                  </button>
                </div>
              </motion.div>
            )}
          </div>
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <p className="text-xs text-slate-500">Electronic Pledge ID: {pledgeId}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
