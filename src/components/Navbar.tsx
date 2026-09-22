import React, { useState } from 'react';
import { 
  Menu, X, Volume2, VolumeX, Bell, Radio, HelpCircle, Sparkles 
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface NavbarProps {
  onOpenNotifications: () => void;
  unreadNotifsCount: number;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenNotifications,
  unreadNotifsCount,
  isAudioMuted,
  onToggleAudio
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'GAMEPLAY & KUIS', href: '#gameplay' },
    { label: 'LEVELS', href: '#levels' },
    { label: 'FEATURES', href: '#features' },
    { label: 'TEAM', href: '#team' },
  ];

  const handleLinkClick = (href: string) => {
    cyberAudio.playClick(720);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050811]/90 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
                <Radio className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                    THE LAB LOCKDOWN
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono-code flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  IN DEVELOPMENT • UNITY ENGINE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-md transition-all font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Audio Toggle */}
            <button
              onClick={() => {
                cyberAudio.playClick(600);
                onToggleAudio();
              }}
              title={isAudioMuted ? "Aktifkan Audio SFX" : "Bisukan Audio"}
              className="p-2 text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 border border-slate-700/60 rounded-lg transition-all"
            >
              {isAudioMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />}
            </button>

            {/* Notification Bell */}
            <button
              onClick={() => {
                cyberAudio.playClick(680);
                onOpenNotifications();
              }}
              title="Notifikasi Pembaruan Game"
              className="relative p-2 text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 border border-slate-700/60 rounded-lg transition-all"
            >
              <Bell className="w-4 h-4" />
              {unreadNotifsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white font-mono-code text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {unreadNotifsCount}
                </span>
              )}
            </button>

            {/* Simulasi Pertanyaan CTA */}
            <a
              href="#gameplay"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#gameplay');
              }}
              className="relative group overflow-hidden px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-display font-bold text-xs tracking-wider rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="tracking-wider">SIMULASI KUIS</span>
              <Sparkles className="w-3 h-3 text-slate-900" />
            </a>

            {/* Hamburger for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b16]/98 border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="px-3 py-2 text-sm font-display font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="#gameplay"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#gameplay');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-display font-bold text-sm rounded-lg"
            >
              <HelpCircle className="w-4 h-4" />
              Coba Simulasi Pertanyaan Sistem
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
