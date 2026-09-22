import React, { useState } from 'react';
import { 
  Server, Monitor, DoorClosed, CheckCircle, ChevronRight, 
  Terminal, AlertTriangle, Shield, Play 
} from 'lucide-react';
import { GAME_LEVELS } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

interface LevelsSectionProps {
  onOpenQuestionSim?: () => void;
}

export const LevelsSection: React.FC<LevelsSectionProps> = ({ onOpenQuestionSim }) => {
  const [activeLevelId, setActiveLevelId] = useState<string>('level-1');

  const selectedLevel = GAME_LEVELS.find(l => l.id === activeLevelId) || GAME_LEVELS[0];

  return (
    <section id="levels" className="py-20 bg-[#050811] relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>PROGRESSION HIERARCHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase mb-4">
            LEVEL DESIGN & ENVIRONMENTS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tiga zona kritis laboratorium komputer dengan tingkat tantangan bertahap, dari perbaikan rak server hingga pelarian dramatis di pintu keluar.
          </p>
        </div>

        {/* 3 Level Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GAME_LEVELS.map((level, idx) => {
            const isCurrent = level.id === activeLevelId;
            return (
              <div
                key={level.id}
                onClick={() => {
                  cyberAudio.playClick(600 + idx * 50);
                  setActiveLevelId(level.id);
                }}
                className={`cursor-pointer rounded-2xl p-6 border transition-all relative overflow-hidden group ${
                  isCurrent
                    ? 'bg-slate-900/90 border-cyan-400/80 shadow-[0_0_30px_rgba(6,182,212,0.25)]'
                    : 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {/* Level Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl font-display font-extrabold ${
                    isCurrent ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'
                  }`}>
                    {level.number}
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {level.docPageRef}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {level.title}
                </h3>
                <span className="text-xs font-mono-code text-cyan-400 block mb-3">
                  {level.subtitle}
                </span>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {level.description}
                </p>

                {/* Level Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                  {level.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Level Deep-Dive Inspection Panel */}
        <div className="rounded-3xl bg-slate-900/85 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Screen Representation */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-5 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono-code">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  ZONE_RENDERER: {selectedLevel.title}
                </span>
                <span className="text-slate-500 font-mono-code">
                  POV CAMERA ACTIVE
                </span>
              </div>

              {/* Graphical Preview Simulation of the Level */}
              <div className="h-56 sm:h-64 rounded-xl bg-gradient-to-b from-[#0a0f1d] to-[#04060c] border border-cyan-500/20 p-4 relative flex flex-col justify-between overflow-hidden">
                
                {/* Visual Ambient Elements based on Level */}
                {selectedLevel.id === 'level-1' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono-code text-cyan-400">
                      <span>[RACK A01-A12] STATUS: LINK DOWN</span>
                      <span className="animate-pulse text-red-400">FAULT: PORT 04</span>
                    </div>
                    {/* Server rack racks visual */}
                    <div className="grid grid-cols-3 gap-2 mt-4 opacity-70">
                      {[1, 2, 3].map((r) => (
                        <div key={r} className="h-28 rounded bg-slate-900 border border-cyan-500/30 p-2 space-y-1.5">
                          <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
                          </div>
                          <div className="h-1 bg-slate-800 rounded"></div>
                          <div className="h-1 bg-slate-800 rounded"></div>
                          <div className="h-1 bg-slate-800 rounded"></div>
                          <div className="text-[8px] font-mono-code text-cyan-300 mt-2">UTP CABLE #0{r}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedLevel.id === 'level-2' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono-code text-indigo-400">
                      <span>NOC SYSTEM PROTOCOL v2.1 (ACTIVE)</span>
                      <span className="text-amber-400">POWER: UNPLUGGED</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-3 opacity-80">
                      <div className="h-28 rounded bg-slate-900 border border-indigo-500/40 p-2 flex flex-col justify-between">
                        <span className="text-[9px] font-mono-code text-slate-400">WALL SOCKET POWER A/B</span>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center text-[8px] text-cyan-400">A</div>
                          <div className="w-6 h-6 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center text-[8px] text-cyan-400">B</div>
                        </div>
                      </div>
                      <div className="h-28 rounded bg-slate-900 border border-cyan-500/40 p-2 flex flex-col justify-between">
                        <span className="text-[9px] font-mono-code text-cyan-300">CPU CHASSIS RGB LIQUID</span>
                        <div className="h-10 rounded bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-[10px] text-cyan-300">
                          CASING ALIGNED
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedLevel.id === 'level-3' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono-code text-emerald-400">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
                        EXIT KELUAR
                      </span>
                      <span className="text-red-400 font-bold animate-pulse">SMART LOCK ARMORED</span>
                    </div>
                    {/* Reinforced door visual with claws */}
                    <div className="mt-3 h-28 rounded bg-slate-900 border-2 border-slate-700 p-3 relative flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-display font-bold text-white tracking-widest">DOOR LOCK SEALED</div>
                        <div className="text-[10px] font-mono-code text-red-400 mt-1">CLAW IMPACTS DETECTED</div>
                      </div>
                      {/* Scratch marks lines */}
                      <span className="absolute top-2 left-6 w-16 h-0.5 bg-red-600/70 rotate-45"></span>
                      <span className="absolute top-4 left-8 w-14 h-0.5 bg-red-600/70 rotate-45"></span>
                      <span className="absolute top-6 left-10 w-12 h-0.5 bg-red-600/70 rotate-45"></span>
                    </div>
                  </div>
                )}

                {/* POV Hands indicator footer */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                  <span>[INTERACT WITH OBJECTS]</span>
                  <span className="text-cyan-400 font-bold">FIRST-PERSON POV</span>
                </div>

              </div>

              {/* Direct Question Simulation CTA */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono-code">
                  Pertanyaan interaktif {selectedLevel.title}
                </span>
                <a
                  href="#gameplay"
                  onClick={() => cyberAudio.playClick(800)}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                >
                  <span>Coba Soal Kuis Level</span>
                </a>
              </div>

            </div>

            {/* Detailed Level Narrative & Interactivities */}
            <div className="lg:col-span-6 space-y-5">
              
              <div>
                <span className="px-2.5 py-1 rounded text-xs font-mono-code font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                  FASE {selectedLevel.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                  {selectedLevel.title}
                </h3>
                <p className="text-sm font-mono-code text-slate-400 mt-1">
                  {selectedLevel.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] font-mono-code text-cyan-400 block mb-1">
                  SASARAN UTAMA:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedLevel.detailedObjective}
                </p>
              </div>

              {/* Checklist of Interactive Elements */}
              <div>
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block mb-2">
                  INTERAKSI YANG DAPAT DILAKUKAN PEMAIN:
                </span>
                <ul className="space-y-2">
                  {selectedLevel.interactivity.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-mono-code">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
