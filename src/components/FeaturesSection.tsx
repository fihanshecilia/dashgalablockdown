import React from 'react';
import { 
  Wrench, Puzzle, Cpu, DoorOpen, GraduationCap, 
  Settings, CheckCircle2, Sparkles 
} from 'lucide-react';
import { GAME_FEATURES } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

export const FeaturesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'Puzzle': return <Puzzle className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'DoorOpen': return <DoorOpen className="w-6 h-6 text-emerald-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case 'Settings': return <Settings className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-[#050811] relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GAMEPLAY INNOVATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase mb-4">
            FITUR UTAMA THE LAB LOCKDOWN
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Menghubungkan ketegangan thriller escape room dengan esensi edukasi teknologi dan perbaikan perangkat keras komputer yang realistis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              onMouseEnter={() => cyberAudio.playClick(600 + idx * 30)}
              className="rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-[10px] font-mono-code text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20">
                    FEATURE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono-code text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="line-clamp-1">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
