'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { TrendingUp, Award, Clock, ArrowRight, CheckCircle2, Play, ChevronRight, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import React from 'react'

const quizzes = [
  { id: 1, title: 'Electoral Process Basics', description: 'Learn the fundamental steps of how voting works in India.', points: 10, time: '5 mins', difficulty: 'Easy', status: 'Completed' },
  { id: 2, title: 'Digital Voter Services', description: 'Master the NVSP portal and Voter Helpline App features.', points: 20, time: '10 mins', difficulty: 'Medium', status: 'Start' },
  { id: 3, title: 'Constitutional Rights', description: 'Deep dive into your rights and responsibilities as a voter.', points: 30, time: '15 mins', difficulty: 'Hard', status: 'Locked' },
]

const questions = [
  {
    question: "What is the full form of EPIC?",
    options: ["Election Photo ID Card", "Electors Photo Identity Card", "Electronic Photo Identity Card", "Electoral Process Identity Card"],
    correct: 1
  },
  {
    question: "Which mobile app is the official platform for voter registration in India?",
    options: ["Voter Helpline App", "Election India App", "My Vote App", "Digital Voter App"],
    correct: 0
  },
  {
    question: "What is the minimum age required to register as a voter in India?",
    options: ["16 years", "21 years", "18 years", "25 years"],
    correct: 2
  },
  {
    question: "Which national portal provides online services for voters?",
    options: ["Voter.gov.in", "NVSP.in", "Election.gov.in", "DigitalIndia.gov.in"],
    correct: 1
  }
]

export default function StudentQuizzesPage() {
  const [activeQuiz, setActiveQuiz] = React.useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null)
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null)

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return
    setSelectedOption(idx)
    const correct = idx === questions[currentQuestion].correct
    setIsCorrect(correct)
    if (correct) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1)
      setSelectedOption(null)
      setIsCorrect(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setActiveQuiz(null)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedOption(null)
    setIsCorrect(null)
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Gamified Learning</h1>
            <p className="text-slate-500">Complete quizzes to earn awareness points and unlock new levels.</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-2xl border border-amber-200">
            <Award size={20} />
            <span className="text-sm font-bold">Total Points: 145</span>
          </div>
        </div>

        {!activeQuiz ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz, idx) => (
              <motion.div 
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col ${quiz.status === 'Locked' ? 'opacity-60 grayscale' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                    quiz.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-600' : 
                    quiz.difficulty === 'Medium' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'
                  }`}>
                    {quiz.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={14} />
                    {quiz.time}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {quiz.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                  {quiz.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                    <TrendingUp size={16} />
                    {quiz.points} Points
                  </div>
                  {quiz.status === 'Completed' ? (
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                      <CheckCircle2 size={16} />
                      Completed
                    </div>
                  ) : quiz.status === 'Start' ? (
                    <button 
                      onClick={() => setActiveQuiz(quiz.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all"
                    >
                      <Play size={14} fill="currentColor" />
                      Start Quiz
                    </button>
                  ) : (
                    <div className="text-xs font-bold text-slate-400">Locked</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            {showResult ? (
              <div className="p-12 text-center space-y-6">
                <div className="mx-auto h-24 w-24 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award size={48} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Quiz Completed!</h2>
                  <p className="text-slate-500 mt-2">You scored {score} out of {questions.length}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">Points Earned</p>
                  <p className="text-4xl font-black text-emerald-600 mt-2">+{score * 5}</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={resetQuiz}
                    className="flex-1 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={20} />
                    Back to Quizzes
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question</span>
                    <span className="text-lg font-bold text-slate-900">{currentQuestion + 1}/{questions.length}</span>
                  </div>
                  <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-8">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-2xl text-left font-medium transition-all border-2 flex items-center justify-between group ${
                        selectedOption === idx 
                          ? isCorrect 
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                            : 'bg-rose-50 border-rose-500 text-rose-700'
                          : selectedOption !== null && idx === questions[currentQuestion].correct
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                            : 'bg-white border-slate-100 hover:border-slate-200 text-slate-600'
                      }`}
                    >
                      {option}
                      {selectedOption === idx && (
                        isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                      selectedOption === null 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                    }`}
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}

function XCircle({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}
