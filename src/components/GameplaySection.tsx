import React, { useState } from 'react';
import { 
  Gamepad2, Lock, Unlock, HelpCircle, Check, X, 
  Terminal, Sparkles, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { GAME_QUESTIONS } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

export const GameplaySection: React.FC = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [userAnswerIndex, setUserAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuiz = GAME_QUESTIONS[selectedQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    cyberAudio.playClick(700);
    setUserAnswerIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (userAnswerIndex === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    if (userAnswerIndex === currentQuiz.correctIndex) {
      cyberAudio.playSuccess();
      setScore(prev => prev + 1);
    } else {
      cyberAudio.playError();
    }
  };

  const handleNextQuestion = () => {
    cyberAudio.playClick(650);
    setUserAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setSelectedQuestionIndex((prev) => (prev + 1) % GAME_QUESTIONS.length);
  };

  return (
    <section id="gameplay" className="py-20 bg-[#070b16] relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>CORE MECHANICS & PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase mb-4">
            GAMEPLAY & QUESTION SYSTEM
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Eksplorasi first-person bertegangan tinggi di mana setiap langkah penyelamatan memerlukan tindakan fisik pada perangkat keras dan verifikasi kognitif melalui sistem robotik laboratorium.
          </p>
        </div>

        {/* 3 Steps Progression Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Step 1 */}
          <div className="rounded-2xl bg-slate-900/80 border border-cyan-500/30 p-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-mono-code font-bold text-sm">
                01
              </span>
              <span className="text-[11px] font-mono-code text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/50">
                FASE 1: RUANG SERVER
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Pemeriksaan & Colok Kabel Server
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Pemain berjalan mendekati server yang rusak di lorong berkabel, lalu mengklik kabel PC yang tergeletak untuk mencolokkannya ke port yang sesuai.
            </p>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono-code">
              🎯 <strong className="text-slate-200">Misi:</strong> Menemukan kabel UTP putus & menyalakan indikator switch rak data.
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl bg-slate-900/80 border border-indigo-500/30 p-6 relative overflow-hidden group hover:border-indigo-400/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-500/40 flex items-center justify-center font-mono-code font-bold text-sm">
                02
              </span>
              <span className="text-[11px] font-mono-code text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/50">
                FASE 2: PASANG KABEL PC
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
              Workstation NOC & Stopkontak
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Pemain menuju ke meja PC Server operator, menyambungkan kabel daya ke stopkontak dinding (Power A/B), serta membenarkan posisi casing CPU liquid.
            </p>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono-code">
              🎯 <strong className="text-slate-200">Misi:</strong> Memulihkan daya PC Server dan mengaktifkan monitor dual NOC Protocol v2.1.
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl bg-slate-900/80 border border-emerald-500/30 p-6 relative overflow-hidden group hover:border-emerald-400/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-mono-code font-bold text-sm">
                03
              </span>
              <span className="text-[11px] font-mono-code text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/50">
                FASE 3: PINTU KELUAR
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Membuka Smart Lock Pintu Darurat
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Pemain mencapai pintu utama berpalang besi bertanda EXIT dengan bekas goresan cakar, lalu meretas smart lock digital untuk melarikan diri sebelum Game Over.
            </p>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono-code">
              🎯 <strong className="text-slate-200">Misi:</strong> Menembus enkripsi smart lock dan meloloskan diri ke zona You Escaped!
            </div>
          </div>

        </div>

        {/* QUESTION SYSTEM INTERACTIVE SHOWCASE */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-[#050811] border-2 border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-code mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>INTERACTIVE QUESTION SYSTEM SIMULATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Simulasi Pop-up Pertanyaan Edukatif Game
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Uji langsung mekanik pop-up robotik yang muncul saat pemain memperbaiki perangkat di dalam game.
              </p>
            </div>

            {/* Question Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {GAME_QUESTIONS.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    cyberAudio.playClick(600);
                    setSelectedQuestionIndex(idx);
                    setUserAnswerIndex(null);
                    setIsAnswerSubmitted(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold transition-all ${
                    selectedQuestionIndex === idx
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Pertanyaan #{idx + 1} ({q.topic.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>

          {/* Authentic Dialogue Box Simulation */}
          <div className="max-w-3xl mx-auto">
            
            {/* The Robot / AI Assistant Dialog Frame */}
            <div className="relative rounded-2xl bg-gradient-to-r from-slate-900/95 to-slate-950/95 border-2 border-slate-700/80 p-5 sm:p-7 shadow-2xl mb-6">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                
                {/* Robot Avatar Icon with red glow eyes & smile */}
                <div className="relative shrink-0 w-20 h-20 rounded-full bg-slate-950 border-2 border-red-500/80 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                  {/* Robot Head Wireframe SVG */}
                  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
                    {/* Head contour */}
                    <circle cx="50" cy="50" r="42" stroke="#ef4444" strokeWidth="4" fill="#0f172a" />
                    {/* Antenna */}
                    <line x1="50" y1="8" x2="50" y2="0" stroke="#ef4444" strokeWidth="4" />
                    <circle cx="50" cy="0" r="4" fill="#ef4444" />
                    {/* Big red glowing eyes */}
                    <circle cx="34" cy="45" r="11" fill="#ef4444" />
                    <circle cx="66" cy="45" r="11" fill="#ef4444" />
                    {/* Beak / nose triangle */}
                    <polygon points="50,55 45,63 55,63" fill="#ef4444" />
                    {/* Smiling robotic mouth */}
                    <path d="M 32 70 Q 50 86 68 70" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="absolute -bottom-2 px-2 py-0.5 rounded text-[9px] font-mono-code font-bold bg-red-950 text-red-300 border border-red-500/50">
                    AI LOCK
                  </span>
                </div>

                {/* Question Text */}
                <div className="text-center sm:text-left flex-1">
                  <span className="text-[11px] font-mono-code text-cyan-400 block mb-1">
                    VERIFIKASI SISTEM • LEVEL {currentQuiz.level} ({currentQuiz.topic})
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                    {currentQuiz.question}
                  </h4>
                </div>

              </div>

            </div>

            {/* Answer Options Radio / Button List */}
            <div className="space-y-3 mb-6">
              {currentQuiz.options.map((option, idx) => {
                const isSelected = userAnswerIndex === idx;
                const isCorrect = isAnswerSubmitted && idx === currentQuiz.correctIndex;
                const isWrongSelected = isAnswerSubmitted && isSelected && idx !== currentQuiz.correctIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-xl border font-mono-code text-sm transition-all flex items-center justify-between ${
                      isCorrect
                        ? 'bg-emerald-950/70 border-emerald-400 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                        : isWrongSelected
                        ? 'bg-red-950/70 border-red-500 text-red-200'
                        : isSelected
                        ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isSelected 
                          ? 'bg-cyan-500 text-slate-950' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isCorrect && (
                      <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                        <Check className="w-4 h-4" /> BENAR
                      </span>
                    )}
                    {isWrongSelected && (
                      <span className="flex items-center gap-1 text-red-400 font-bold text-xs">
                        <X className="w-4 h-4" /> SALAH
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Control Button (Padlock) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={userAnswerIndex === null}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    userAnswerIndex !== null
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] cursor-pointer hover:brightness-110'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  <span>MASUKKAN JAWABAN</span>
                </button>
              ) : (
                <div className="w-full space-y-4">
                  
                  {/* Feedback explanation box */}
                  <div className={`p-4 rounded-xl border ${
                    userAnswerIndex === currentQuiz.correctIndex
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/50 border-red-500/40 text-red-300'
                  }`}>
                    <div className="flex items-center gap-2 font-bold font-mono-code text-sm mb-1">
                      {userAnswerIndex === currentQuiz.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>AKSES DITERIMA: PROTOKOL TERBUKA</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span>AKSES DITOLAK: JAWABAN SALAH</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {currentQuiz.explanation}
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
                    >
                      <span>SOAL SELANJUTNYA</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
