'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { motion } from 'motion/react'
import { Upload, ImageIcon, X, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

export default function CollegeUpload() {
  const [files, setFiles] = React.useState<File[]>([])
  const [uploading, setUploading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: { 'image/*': [] }
  })

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setUploading(false)
    setSuccess(true)
    setFiles([])
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Upload Awareness Activity</h1>
          <p className="text-slate-500">Share photos and reports of your college&apos;s SVEEP programs.</p>
        </div>

        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-3"
          >
            <CheckCircle2 size={20} />
            <p className="font-medium">Activity uploaded successfully! It is now pending admin approval.</p>
            <button onClick={() => setSuccess(false)} className="ml-auto text-emerald-400 hover:text-emerald-600">
              <X size={20} />
            </button>
          </motion.div>
        )}

        <form onSubmit={handleUpload} className="space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Activity Title</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Voter Awareness Rally 2024"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Activity Date</label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Description / Report Summary</label>
              <textarea 
                required
                rows={4}
                placeholder="Briefly describe the activity, number of participants, and impact..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Upload Photos</label>
              <div 
                {...getRootProps()} 
                className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${
                  isDragActive ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-400 hover:bg-slate-50'
                }`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-3">
                  <div className="p-4 rounded-full bg-slate-100 text-slate-400">
                    <Upload size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Click or drag photos here</p>
                    <p className="text-sm text-slate-500">Support JPG, PNG up to 10MB each</p>
                  </div>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-200">
                      <img 
                        src={URL.createObjectURL(file)} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                      {/* Watermark Simulation */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-1 text-[8px] text-white font-bold text-center uppercase tracking-tighter">
                        Verified: Govt Arts College • {new Date().toLocaleDateString()}
                      </div>
                      <button 
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="absolute top-2 right-2 p-1 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-700 text-sm">
            <Info size={20} className="shrink-0" />
            <p>By uploading, you confirm that these photos are from an official SVEEP activity conducted by your institution.</p>
          </div>

          <button 
            type="submit"
            disabled={uploading || files.length === 0}
            className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <ImageIcon size={20} />
                Submit Activity Report
              </>
            )}
          </button>
        </form>
      </div>
    </DashboardLayout>
  )
}
