'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { Upload, ImageIcon, X, CheckCircle2, AlertCircle, MapPin, Calendar } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

export default function StudentUploadPage() {
  const [dragActive, setDragActive] = React.useState(false)
  const [file, setFile] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [uploading, setUploading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setUploading(false)
    setSuccess(true)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Upload Activity Photo</h1>
          <p className="text-slate-500">Share your participation in SVEEP awareness activities.</p>
        </div>

        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xl"
          >
            <div className="mx-auto h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Upload Successful!</h2>
            <p className="text-slate-500 mb-8">Your activity photo has been submitted for verification. You&apos;ve earned 10 awareness points!</p>
            <button 
              onClick={() => {
                setSuccess(false)
                setFile(null)
                setPreview(null)
              }}
              className="px-8 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all"
            >
              Upload Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Activity Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm">
                    <option>Voter Awareness Rally</option>
                    <option>Poster Making</option>
                    <option>Street Play</option>
                    <option>Seminar/Workshop</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Date of Activity</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Description</label>
                <textarea 
                  placeholder="Briefly describe your participation..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Upload Photo</label>
                {!preview ? (
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]) }}
                    className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all ${
                      dragActive ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                      accept="image/*"
                    />
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 mb-4">
                      <Upload size={32} />
                    </div>
                    <p className="text-sm font-bold text-slate-900">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG or JPEG (max. 5MB)</p>
                  </div>
                ) : (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => { setFile(null); setPreview(null) }}
                      className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/70 transition-all"
                    >
                      <X size={20} />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-xl p-3 text-white">
                      <MapPin size={16} className="text-emerald-400" />
                      <span className="text-[10px] font-mono">GEO-TAG: 13.1382° N, 79.9122° E (AUTO-DETECTED)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <AlertCircle className="text-amber-600 shrink-0" size={20} />
              <p className="text-xs text-amber-800">
                Ensure the photo clearly shows the activity. Geo-tagging and timestamp are automatically captured for verification.
              </p>
            </div>

            <button 
              type="submit"
              disabled={!file || uploading}
              className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                !file || uploading ? 'bg-slate-300 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
              }`}
            >
              {uploading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <ImageIcon size={20} />
                  Submit Activity Photo
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </DashboardLayout>
  )
}
