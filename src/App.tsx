import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GameplaySection } from './components/GameplaySection';
import { LevelsSection } from './components/LevelsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { PushNotificationModal } from './components/PushNotificationModal';
import { INITIAL_NOTIFICATIONS } from './data/gameData';
import { NotificationItem } from './types';
import { cyberAudio } from './utils/audio';

export default function App() {
  // Modal state
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Audio mute state
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  // Notifications state
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  const unreadNotifsCount = notifications.filter(n => !n.read).length;

  const handleToggleAudio = () => {
    const nextMuted = cyberAudio.toggleMute();
    setIsAudioMuted(nextMuted);
  };

  const handleExploreClick = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    cyberAudio.playClick(600);
  };

  const handleSendTestNotification = (title: string, message: string) => {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title,
      message,
      time: 'Baru saja',
      type: 'update',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);

    // Native browser push notification if permitted
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body: message,
          icon: '/favicon.ico'
        });
      } catch {
        // Fallback
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navbar */}
      <Navbar
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        unreadNotifsCount={unreadNotifsCount}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onExploreClick={handleExploreClick}
        />

        {/* 2. About & Narrative Concept */}
        <AboutSection />

        {/* 3. Gameplay Mechanics & Question Verification Simulator */}
        <GameplaySection />

        {/* 4. Level Designs & Zones */}
        <LevelsSection />

        {/* 5. Key Features */}
        <FeaturesSection />

        {/* 6. Development Team */}
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
      />

      {/* Notifications Modal */}
      <PushNotificationModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllNotificationsAsRead}
        onSendTestNotification={handleSendTestNotification}
      />

    </div>
  );
}
