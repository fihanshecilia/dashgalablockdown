import React from 'react';
import { 
  Radio, ArrowUp, Volume2, VolumeX, HelpCircle, Sparkles 
} from 'lucide-react';
import { GAME_DETAILS } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

interface FooterProps {
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isAudioMuted,
  onToggleAudio
}) => {
  const scrollToTop = () => {
    cyberAudio.playClick(800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Tentang Game', href: '#about' },
    { label: 'Mekanik & Kuis', href: '#gameplay' },
    { label: 'Desain Level', href: '#levels' },
    { label: 'Fitur Utama', href: '#features' },
    { label: 'Tim Pengembang', href: '#team' },
  ];

  return (
    <footer className="bg-[#03050a] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Concept summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider block">
                  {GAME_DETAILS.title}
                </span>
                <span className="text-xs font-mono-code text-cyan-400">
                  {GAME_DETAILS.engine} • Alpha Development
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Game petualangan escape room mendebarkan berpadu pemecahan masalah teknis perangkat keras komputer secara realistis. Dikembangkan dengan Unity Engine.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#gameplay"
                onClick={() => cyberAudio.playClick(850)}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Simulasi Kuis Game</span>
              </a>

              <button
                onClick={() => {
                  cyberAudio.playClick(600);
                  onToggleAudio();
                }}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors"
                title={isAudioMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wider block">
              NAVIGASI SHOWCASE
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    cyberAudio.playClick(680);
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Academic & Engine Info */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wider block">
              STATUS PROYEK
            </span>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono-code space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Tahap:</span>
                <span className="text-amber-400 font-bold">ALPHA TESTING</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Engine:</span>
                <span className="text-cyan-400">Unity Engine</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Lisensi:</span>
                <span className="text-emerald-400">Educational Open</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono-code text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kembali Ke Paling Atas</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Lab Lockdown.</span>
            <span>•</span>
            <span>Semua Hak Cipta Dilindungi.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-500/80">
              Proyek Desain Game & Edukasi Rekayasa Perangkat Lunak
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
