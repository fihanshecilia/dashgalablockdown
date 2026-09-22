import React, { useState } from 'react';
import { Bell, BellRing, X, Check, Send, Sparkles, Shield, Clock } from 'lucide-react';
import { NotificationItem } from '../types';
import { cyberAudio } from '../utils/audio';

interface PushNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onSendTestNotification: (title: string, message: string) => void;
}

export const PushNotificationModal: React.FC<PushNotificationModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onSendTestNotification
}) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [customMsg, setCustomMsg] = useState('');

  if (!isOpen) return null;

  const handleToggleSubscription = async () => {
    cyberAudio.playClick(700);
    if (!isSubscribed) {
      if ('Notification' in window && Notification.permission !== 'granted') {
        try {
          await Notification.requestPermission();
        } catch {
          // Fallback
        }
      }
      setIsSubscribed(true);
      cyberAudio.playSuccess();
    } else {
      setIsSubscribed(false);
    }
  };

  const handleDispatchNotification = () => {
    if (!customMsg.trim()) return;
    cyberAudio.playClick(850);
    onSendTestNotification('Pemberitahuan Sistem Lab', customMsg.trim());
    setCustomMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#070b16] rounded-2xl border-2 border-cyan-500/40 p-6 shadow-[0_0_50px_rgba(6,182,212,0.3)] space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <BellRing className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-white">
                SISTEM NOTIFIKASI PUSH
              </h3>
              <p className="text-xs font-mono-code text-slate-400">
                Pembaruan Otomatis Rilis Game & Devlog
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick(500);
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subscription Toggle Banner */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-sm font-semibold text-white block">
              Push Notification Browser
            </span>
            <span className="text-xs font-mono-code text-slate-400 block">
              {isSubscribed ? '● Langganan Aktif (Siap Menerima Notifikasi)' : '○ Langganan Dimatikan'}
            </span>
          </div>

          <button
            onClick={handleToggleSubscription}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all ${
              isSubscribed
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-500/30'
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
            }`}
          >
            {isSubscribed ? 'Aktif' : 'Aktifkan'}
          </button>
        </div>

        {/* Notification History List */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
              RIWAYAT PEMBERITAHUAN TERAKHIR:
            </span>
            <button
              onClick={() => {
                cyberAudio.playClick(600);
                onMarkAllAsRead();
              }}
              className="text-[11px] font-mono-code text-cyan-400 hover:underline"
            >
              Tandai Semua Dibaca
            </button>
          </div>

          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-3 rounded-xl border text-xs font-mono-code transition-all ${
                  n.read
                    ? 'bg-slate-950/60 border-slate-800 text-slate-400'
                    : 'bg-slate-900/90 border-cyan-500/40 text-slate-200 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>}
                    {n.title}
                  </span>
                  <span className="text-[10px] text-slate-500">{n.time}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">{n.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trigger Instant Test Broadcast */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <span className="text-xs font-mono-code text-slate-400 block">
            KIRIM TEST NOTIFIKASI SECARA LANGSUNG:
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Contoh: Alpha Build WebAssembly siap diuji..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleDispatchNotification(); }}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono-code text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleDispatchNotification}
              disabled={!customMsg.trim()}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-display font-bold text-xs uppercase flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
