import React from 'react';
import { Compass } from 'lucide-react';
import { GAME_DETAILS } from '../data/gameData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#050811] border-t border-slate-800/80">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>OVERVIEW & CONCEPT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase mb-4">
            ABOUT THE GAME
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {GAME_DETAILS.fullDescription}
          </p>
        </div>

        {/* Story / Concept Banner */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-950/90 border border-cyan-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono-code font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                LATAR BELAKANG CERITA • THE LOCKDOWN CRISIS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                Terperangkap di Fasilitas Komputasi yang Mati Total
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Pemain terbangun di dalam kompleks laboratorium komputer modern yang mendadak mengalami malfungsi sistem berskala tinggi. Seluruh pintu darurat tersegel oleh protokol <span className="text-cyan-400 font-mono-code">SMART LOCK LOCKDOWN</span>. 
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Untuk membuka segel pintu keluar, pemain harus memulihkan sambungan daya dan jaringan secara berurutan: memperbaiki rak server data, menyambungkan workstation PC, dan menyelesaikan verifikasi logika sistem robotik yang menguji pengetahuan seputar dunia teknologi informatika.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 rounded-xl border border-slate-800 p-4 space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">PROTOKOL STATUS</span>
                <span className="text-red-400 font-bold">CONTAINMENT ENGAGED</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">ZONA 01</span>
                <span className="text-cyan-400">RUANG SERVER (DISCONNECTED)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">ZONA 02</span>
                <span className="text-indigo-400">NOC PC WORKSTATION (NO POWER)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">ZONA 03</span>
                <span className="text-amber-400">SMART LOCK EXIT (SEALED)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
