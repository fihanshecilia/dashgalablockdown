import { LevelInfo, FeatureItem, GalleryItem, QuizQuestion, RoadmapItem, TeamMember, NotificationItem } from '../types';

export const GAME_DETAILS = {
  title: 'THE LAB LOCKDOWN',
  authorGroup: 'DEV TEAM',
  tagline: 'ESCAPE THE LAB. SOLVE THE SYSTEM.',
  shortDescription: 'Game puzzle-adventure orang pertama (first-person) bertema laboratorium komputer futuristik. Perbaiki server, sambungkan kabel PC, pecahkan smart lock, dan selesaikan tantangan edukatif sebelum sistem runtuh.',
  fullDescription: 'The Lab Lockdown adalah game yang menggabungkan eksplorasi lingkungan laboratorium, interaksi langsung dengan perangkat keras komputer, perbaikan server, dan pertanyaan edukatif berbasis teknologi. Pemain terjebak dalam fasilitas laboratorium tertutup yang mengalami malfungsi sistem dan harus menyelesaikan 3 fase krisis demi membuka pintu keluar darurat.',
  genre: 'Puzzle / Adventure / Educational / Sci-Fi Thriller',
  platform: 'PC (Windows / Linux) & Web (Unity WebGL)',
  engine: 'Unity Engine (URP)',
  developer: 'Game Development Team',
  status: 'IN DEVELOPMENT',
  expectedRelease: 'Early Access Q1 2027',
  perspective: 'First-Person Interaction (POV Hands)',
  soundtrack: 'Cyber Dark Synth & Ambient Lab Soundscape'
};

export const GAME_LEVELS: LevelInfo[] = [
  {
    id: 'level-1',
    number: '01',
    title: 'RUANG SERVER',
    subtitle: 'Server Room Diagnostic & Cabling',
    description: 'Pemain mendekati rak server yang malfungsi di lorong gelap, mengidentifikasi kabel jaringan yang terlepas, dan menyambungkannya kembali ke port server utama.',
    detailedObjective: 'Perbaiki koneksi server pusat, identifikasi port LAN yang putus, dan verifikasi protokol jaringan melalui terminal sistem.',
    interactivity: [
      'Pemeriksaan status LED indikator rak server',
      'Pemasangan kabel UTP/LAN ke switch rackmount',
      'Menjawab verifikasi protokol jaringan (LAN Quiz)'
    ],
    docPageRef: 'Dokumen Desain Hal. 4 - 7',
    accentColor: 'from-blue-500/20 to-cyan-500/10 border-cyan-500/40 text-cyan-400',
    tags: ['Server Rack', 'LAN Cable', 'Network Diagnostic']
  },
  {
    id: 'level-2',
    number: '02',
    title: 'PASANG KABEL PC',
    subtitle: 'Workstation Setup & CPU Casing Repair',
    description: 'Pemain bergerak ke meja workstation PC Server NOC, menyambungkan kabel daya utama ke stopkontak dinding, dan mengamankan casing CPU internal.',
    detailedObjective: 'Mengaktifkan kembali workstation kontrol NOC System v2.1, menghubungkan kabel power supply, dan memulihkan terminal monitor ganda.',
    interactivity: [
      'Pemasangan kabel power ke stopkontak dinding (Power A/B)',
      'Membenarkan penutup casing CPU liquid-cooled',
      'Menjawab kuis Rekayasa Perangkat Lunak (RPL) & AI Security'
    ],
    docPageRef: 'Dokumen Desain Hal. 8 - 11',
    accentColor: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/40 text-indigo-400',
    tags: ['Workstation PC', 'Power Socket', 'RPL & AI Quiz']
  },
  {
    id: 'level-3',
    number: '03',
    title: 'PINTU KELUAR',
    subtitle: 'Smart Lock Security Override & Escape',
    description: 'Mencapai pintu keluar utama berpalang baja dengan tanda EXIT hijau yang mengalami cakar misterius, membuka smart lock sebelum ancaman menjangkau pemain.',
    detailedObjective: 'Memecahkan kode otentikasi biometrik dan teka-teki logika matematika pada panel smart lock untuk membuka gerbang darurat.',
    interactivity: [
      'Interaksi panel smart lock dengan status gembok darurat',
      'Analisis bekas serangan fisik pada panel pintu baja',
      'Menyelesaikan verifikasi logika kode darurat sebelum alarm habis'
    ],
    docPageRef: 'Dokumen Desain Hal. 12 - 17',
    accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400',
    tags: ['Smart Lock', 'Emergency Exit', 'Escaped / Game Over']
  }
];

export const GAME_FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    iconName: 'Wrench',
    title: 'Interactive Environment',
    description: 'Pemain dapat berinteraksi secara fisik dengan objek nyata laboratorium: kabel LAN, rak server, stopkontak, casing CPU, hingga keypad smart lock.',
    highlight: 'Real-time Object Physics & Hands POV'
  },
  {
    id: 'feat-2',
    iconName: 'Puzzle',
    title: 'Puzzle & Question System',
    description: 'Setiap pos pemeriksaan memicu robot AI asisten laboratorium dengan pop-up pertanyaan interaktif yang menguji ketelitian dan pemahaman pemain.',
    highlight: 'Adaptive Tech Quizzes & Cyber Avatar'
  },
  {
    id: 'feat-3',
    iconName: 'Cpu',
    title: 'Technology-Based Gameplay',
    description: 'Konsep game terinspirasi langsung dari lingkungan nyata laboratorium komputer: server data center, kabel jaringan, stopkontak listrik, dan terminal NOC.',
    highlight: 'Authentic Lab Hardware Simulator'
  },
  {
    id: 'feat-4',
    iconName: 'DoorOpen',
    title: 'Escape Objective & Tension',
    description: 'Suasana tegang lockdown fasilitas dengan pencahayaan neon temaram, lorong berdengung, dan ancaman misterius yang mengintai di balik kegelapan.',
    highlight: 'Atmospheric Horror & Thriller Climax'
  },
  {
    id: 'feat-5',
    iconName: 'GraduationCap',
    title: 'Educational Challenge',
    description: 'Pertanyaan mengintegrasikan pengetahuan fundamental informatika: Jaringan Komputer (LAN), Rekayasa Perangkat Lunak (RPL), Etika AI (Deepfake), dan Logika.',
    highlight: 'Gamified Computer Science Learning'
  },
  {
    id: 'feat-6',
    iconName: 'Settings',
    title: 'Audio & Display Accessibility',
    description: 'Menu opsi lengkap: kontrol Master Volume, SFX, Music Volume, serta mode Fullscreen untuk pengalaman bermain yang imersif.',
    highlight: 'Full Control Settings Suite'
  }
];

export const GAME_QUESTIONS: QuizQuestion[] = [
  {
    id: 'quiz-lan',
    level: 1,
    question: 'Apa kepanjangan dari LAN?',
    options: [
      'Local Area Network',
      'Large Access Node',
      'Logic Automation Node',
      'Linear Array Network'
    ],
    correctIndex: 0,
    explanation: 'LAN adalah singkatan dari Local Area Network, yaitu jaringan komputer yang menghubungkan perangkat dalam area geografis terbatas seperti ruangan, kantor, atau laboratorium.',
    topic: 'Jaringan Komputer'
  },
  {
    id: 'quiz-rpl',
    level: 2,
    question: 'Apa kepanjangan dari istilah RPL?',
    options: [
      'Rancang Pemrograman Langsung',
      'Rekayasa Perangkat Lunak',
      'Rangkaian Protokol Laboratorium',
      'Resolusi Perangkat Komputasi'
    ],
    correctIndex: 1,
    explanation: 'RPL merupakan singkatan dari Rekayasa Perangkat Lunak (Software Engineering), bidang yang mendalami seluruh aspek produksi perangkat lunak secara terstruktur dan teruji.',
    topic: 'Software Engineering'
  },
  {
    id: 'quiz-deepfake',
    level: 2,
    question: 'Fenomena penyebaran berita palsu atau manipulasi video yang terlihat sangat nyata menggunakan AI disebut...',
    options: [
      'Phishing Attack',
      'Deepfake',
      'Ransomware',
      'Trojan Horse'
    ],
    correctIndex: 1,
    explanation: 'Deepfake adalah teknologi kecerdasan buatan (deep learning) yang mampu memanipulasi atau membuat video/audio tiruan yang tampak sangat nyata dan berpotensi disalahgunakan.',
    topic: 'Kecerdasan Buatan & Keamanan'
  },
  {
    id: 'quiz-math',
    level: 3,
    question: 'Selesaikan kalkulasi verifikasi smart lock pintu keluar: 3 x 80 = ...?',
    options: [
      '490 (Pernyataan Error)',
      '240 (Nilai Sebenarnya)',
      '280',
      '320'
    ],
    correctIndex: 1,
    explanation: 'Pada layar smart lock darurat tertulis indikator 3 x 80 = 490 yang merupakan anomali enkripsi sistem. Nilai matematis yang benar adalah 240 untuk menetralkan sistem.',
    topic: 'Logika & Kriptografi'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Menu & Cyber Portal',
    category: 'UI',
    description: 'Antarmuka utama game menampilkan opsi Start Game, Setting, dan Exit dengan latar lorong lab futuristik.',
    badge: 'Page 2 Desain',
    docPage: 2
  },
  {
    id: 'gal-2',
    title: 'Audio & Display Options',
    category: 'UI',
    description: 'Panel pengaturan suara komprehensif (Master, SFX, Music) dan tombol peralihan Fullscreen.',
    badge: 'Page 3 Desain',
    docPage: 3
  },
  {
    id: 'gal-3',
    title: 'Level 1: Ruang Server & POV Hands',
    category: 'Gameplay',
    description: 'Pandangan orang pertama mendekati jajaran rak server data center berkilau kabel optik.',
    badge: 'Page 5-6 Desain',
    docPage: 5
  },
  {
    id: 'gal-4',
    title: 'AI Assistant Question Pop-up',
    category: 'Gameplay',
    description: 'Pop-up interaktif robot bermata merah dengan prompt pertanyaan jaringan LAN dan field gembok kunci.',
    badge: 'Page 7 Desain',
    docPage: 7
  },
  {
    id: 'gal-5',
    title: 'Level 2: PC Server Workstation',
    category: 'Environment',
    description: 'Meja operator NOC dengan dua monitor terminal, CPU casing RGB cair, dan stopkontak dinding.',
    badge: 'Page 9 Desain',
    docPage: 9
  },
  {
    id: 'gal-6',
    title: 'Level 3: Reinforced Exit Door',
    category: 'Environment',
    description: 'Pintu baja darurat bersimbol EXIT hijau dengan bekas cakar tajam dan smart lock panel retak.',
    badge: 'Page 13 Desain',
    docPage: 13
  },
  {
    id: 'gal-7',
    title: 'Corridor Anomaly & Entity Shadow',
    category: 'Threat',
    description: 'Tumpahan cairan gelap di lorong server menjelang kemunculan entitas misterius saat melarikan diri.',
    badge: 'Page 15-16 Desain',
    docPage: 15
  },
  {
    id: 'gal-8',
    title: 'Game Over & Continue Protocol',
    category: 'Concept Art',
    description: 'Layar akhir dengan tipografi merah distorsi, dialog konfirmasi Retry/Exit, dan ilustrasi entitas.',
    badge: 'Page 17 & 21 Desain',
    docPage: 17
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    period: 'SEPTEMBER 2026',
    title: 'Concept, Storyboard & UI Design',
    status: 'Completed',
    description: 'Perumusan konsep 3 level permainan, desain storyboard alur cerita, pembuatan dokumen perancangan 25 halaman, serta penentuan mekanik kuis interaktif.',
    deliverables: [
      'Desain wireframe & visual lengkap',
      'Penyusunan kurikulum pertanyaan (LAN, RPL, Deepfake)',
      'Perencanaan arsitektur game di Unity Engine'
    ]
  },
  {
    period: 'OKTOBER 2026',
    title: 'Gameplay Mechanics & Unity Prototyping',
    status: 'In Progress',
    description: 'Implementasi controller first-person, sistem interaksi kabel 3D, physics perbaikan stopkontak, dan logic popup kuis terintegrasi.',
    deliverables: [
      'Prototipe Level 1: Ruang Server interaktif',
      'Modul kabel & slot koneksi modular',
      'Desain audio ambient sci-fi & voice FX'
    ]
  },
  {
    period: 'NOVEMBER 2026',
    title: 'Level 2 & 3 Expansion, Logic Smart Lock',
    status: 'Upcoming',
    description: 'Pembuatan aset 3D PC Server NOC, integrasi panel smart lock beranimasi cakar retak, dan optimasi performa WebAssembly/PC.',
    deliverables: [
      'Level 2 Workstation & CPU casing puzzle',
      'Level 3 Smart Lock door lock mechanics',
      'AI creature animation trigger & jump-tension'
    ]
  },
  {
    period: 'Q1 2027 (FUTURE)',
    title: 'Polishing, Beta Testing & Public Release',
    status: 'Planned',
    description: 'Uji coba terbuka untuk komunitas pelajar dan gamer, penyempurnaan balance teka-teki, serta peluncuran resmi versi PC dan Web.',
    deliverables: [
      'Peluncuran Public Demo di itch.io / Web',
      'Versi Standalone PC Windows/Linux',
      'Panduan Guru/Instruktur untuk modul edukasi IT'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Core Design Team',
    role: 'Game Design & Lead Direction',
    department: 'Creative & Storytelling',
    avatarSeed: 'director',
    description: 'Merancang visi naratif, alur lockdown laboratorium, penyusunan kurikulum pertanyaan, dan storyboard adegan.'
  },
  {
    name: 'Gameplay & Engine Programmer',
    role: 'Unity Engine C# Developer',
    department: 'Technical Engineering',
    avatarSeed: 'programmer',
    description: 'Membangun controller interaksi POV, physics sambungan kabel, sistem state smart lock, dan popup dialog.'
  },
  {
    name: '3D Artist & Environment Designer',
    role: 'Asset & Level Designer',
    department: 'Visual Arts',
    avatarSeed: 'artist',
    description: 'Memodelkan rak server, PC workstation liquid-cooled, pintu baja retak, serta pencahayaan neon lab futuristik.'
  },
  {
    name: 'UI/UX & Sound Designer',
    role: 'Interface & Audio Engineer',
    department: 'Audio Visual Experience',
    avatarSeed: 'audio',
    description: 'Menciptakan antarmuka sci-fi bergaris bersih, efek audio terminal, dengung server, dan ambient ketegangan.'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Development Log #04 Dirilis',
    message: 'Implementasi mekanik Level 1: Ruang Server di Unity URP telah rampung dengan integrasi kabel UTP interaktif.',
    time: 'Baru saja',
    type: 'development',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Pendaftaran Pre-Register Alpha Dibuka',
    message: 'Daftarkan diri Anda untuk mendapatkan akses awal build Unity WebGL pertama The Lab Lockdown.',
    time: '2 jam lalu',
    type: 'milestone',
    read: false
  },
  {
    id: 'notif-3',
    title: 'Sistem Kuis Edukasi Ditambahkan',
    message: 'Pertanyaan seputar Local Area Network (LAN) dan Rekayasa Perangkat Lunak (RPL) berhasil diintegrasikan ke sistem popup game.',
    time: '1 hari lalu',
    type: 'update',
    read: true
  }
];

export const TECH_SPECS = [
  { label: 'Target Platform', value: 'PC (Windows 10/11, Linux 64-bit) & Web (Unity WebGL)' },
  { label: 'Game Engine', value: 'Unity 2022 LTS / Unity 6 (C# Scripting)' },
  { label: 'Render Pipeline', value: 'Universal Render Pipeline (URP) - Real-time Lighting' },
  { label: 'Framerate Target', value: 'Solid 60 FPS (V-Sync support)' },
  { label: 'Controls', value: 'Keyboard (WASD/Arrows) & Mouse (Look & Click Interaction)' },
  { label: 'Language', value: 'Bahasa Indonesia (Primary) & English (Subtitles)' },
  { label: 'Aspect Ratio', value: '16:9 Widescreen (Responsive Ultra-Wide support)' },
  { label: 'Educational Focus', value: 'Dasar Jaringan Komputer, Rekayasa Perangkat Lunak, Literasi AI' }
];
