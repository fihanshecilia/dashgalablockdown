import React from 'react';
import { Users, User, ShieldCheck, Terminal, Palette, Music } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/gameData';
import { cyberAudio } from '../utils/audio';

export const TeamSection: React.FC = () => {
  const getRoleIcon = (seed: string) => {
    switch (seed) {
      case 'director': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'programmer': return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'artist': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'audio': return <Music className="w-5 h-5 text-amber-400" />;
      default: return <User className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="team" className="py-20 bg-[#050811] relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>DEVELOPMENT CREW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight uppercase mb-4">
            TIM PENGEMBANG GAME
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Kolaborasi tim dalam merancang ide cerita, visualisasi 3D, coding mekanisme Unity C#, dan kurikulum kuis edukasi.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              onMouseEnter={() => cyberAudio.playClick(620 + idx * 30)}
              className="rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    {getRoleIcon(member.avatarSeed)}
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    DEV 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>

                <span className="text-xs font-mono-code font-bold text-cyan-400 block mb-2">
                  {member.role}
                </span>

                <span className="text-[11px] font-mono-code text-slate-400 block mb-3">
                  Divisi: {member.department}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                <span>UNITY PROJECT TEAM</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
