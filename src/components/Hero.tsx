import React from 'react';
import { 
  HelpCircle, Cpu, Terminal, ArrowRight, 
  Sparkles, Activity, Lock, AlertTriangle 
} from 'lucide-react';
import { GAME_DETAILS } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

interface HeroProps {
  onSimulateQuestions?: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSimulateQuestions, onExploreClick }) => {
  const handleSimulateClick = () => {
    cyberAudio.playClick(880);
    if (onSimulateQuestions) {
      onSimulateQuestions();
    } else {
      const element = document.querySelector('#gameplay');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden cyber-grid">
      
      {/* Radial glow background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono-code shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="font-semibold tracking-wider">OFFICIAL GAME SHOWCASE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold tracking-wider">STATUS: {GAME_DETAILS.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-mono-code">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>UNITY ENGINE (URP)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-4 leading-none uppercase">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              {GAME_DETAILS.title}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-display font-semibold tracking-widest text-cyan-400 mb-6 uppercase flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400"></span>
            {GAME_DETAILS.tagline}
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400"></span>
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {GAME_DETAILS.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={handleSimulateClick}
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-slate-950 font-display font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] transition-all flex items-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 transition-transform group-hover:scale-125" />
            <span>SIMULASI PERTANYAAN SISTEM</span>
            <Sparkles className="w-4 h-4 text-slate-900" />
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick(640);
              onExploreClick();
            }}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/50 text-slate-200 hover:text-cyan-300 font-display font-semibold text-sm tracking-wider uppercase border border-slate-700/80 hover:border-cyan-400/50 shadow-lg transition-all flex items-center gap-2"
          >
            <span>JELAJAHI KONSEP LEVEL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Visual Concept Console */}
        <div className="relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-slate-900/95 to-[#070b16]/95 border border-cyan-500/30 p-4 sm:p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl">
          
          {/* Console Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs font-mono-code text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-slate-300 font-semibold tracking-wider">LAB_SECURITY_SYSTEM_v2.1</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-cyan-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                TELEMETRY: ACTIVE
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-red-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                LOCKDOWN: LEVEL 3
              </span>
            </div>
          </div>

          {/* 3 Level Interactive Showcase Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Level 1 Card */}
            <a 
              href="#levels"
              onClick={() => cyberAudio.playClick(650)}
              className="group cursor-pointer rounded-xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/60 p-4 transition-all hover:bg-slate-900/60 relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all"></div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  LEVEL 01
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 group-hover:text-cyan-300 transition-colors">
                  Dokumen Desain Hal. 4-7 →
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors mb-1">
                RUANG SERVER
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                Perbaiki rak server yang rusak, sambungkan kabel jaringan yang tergeletak, dan selesaikan verifikasi LAN.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Lihat Misi Level 1 →</span>
              </div>
            </a>

            {/* Level 2 Card */}
            <a 
              href="#levels"
              onClick={() => cyberAudio.playClick(650)}
              className="group cursor-pointer rounded-xl bg-slate-950/70 border border-indigo-500/20 hover:border-indigo-400/60 p-4 transition-all hover:bg-slate-900/60 relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/15 transition-all"></div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  LEVEL 02
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 group-hover:text-indigo-300 transition-colors">
                  Dokumen Desain Hal. 8-11 →
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-base group-hover:text-indigo-300 transition-colors mb-1">
                PASANG KABEL PC
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                Koneksikan kabel PC Server ke stopkontak dinding, pasang casing CPU, dan jawab kuis RPL & AI Deepfake.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-indigo-400">
                <Cpu className="w-3.5 h-3.5" />
                <span>Lihat Misi Level 2 →</span>
              </div>
            </a>

            {/* Level 3 Card */}
            <a 
              href="#levels"
              onClick={() => cyberAudio.playClick(650)}
              className="group cursor-pointer rounded-xl bg-slate-950/70 border border-emerald-500/20 hover:border-emerald-400/60 p-4 transition-all hover:bg-slate-900/60 relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-all"></div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  LEVEL 03
                </span>
                <span className="text-[11px] font-mono-code text-slate-400 group-hover:text-emerald-300 transition-colors">
                  Dokumen Desain Hal. 12-17 →
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-base group-hover:text-emerald-300 transition-colors mb-1">
                PINTU KELUAR
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                Membuka smart lock pintu baja darurat yang tercakar untuk kabur sebelum entitas misterius tiba!
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-emerald-400">
                <Lock className="w-3.5 h-3.5" />
                <span>Lihat Misi Level 3 →</span>
              </div>
            </a>

          </div>

          {/* Quick HUD Metrics Bar */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono-code text-slate-400">
            <div className="p-2 rounded bg-slate-900/50">
              <span className="block text-slate-500 text-[10px]">GENRE</span>
              <span className="text-slate-200 font-semibold">{GAME_DETAILS.genre.split('/')[0]}</span>
            </div>
            <div className="p-2 rounded bg-slate-900/50">
              <span className="block text-slate-500 text-[10px]">ENGINE</span>
              <span className="text-cyan-300 font-semibold">{GAME_DETAILS.engine}</span>
            </div>
            <div className="p-2 rounded bg-slate-900/50">
              <span className="block text-slate-500 text-[10px]">INTERACTION</span>
              <span className="text-slate-200 font-semibold">First-Person POV</span>
            </div>
            <div className="p-2 rounded bg-slate-900/50">
              <span className="block text-slate-500 text-[10px]">ROADMAP STATUS</span>
              <span className="text-amber-400 font-semibold">{GAME_DETAILS.status}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
