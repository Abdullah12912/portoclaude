import { Project, TimelineEntry } from "./types";

export const projects: Project[] = [
  {
    title: "Living Portfolio",
    slug: "living-portfolio",
    description:
      "Website yang tumbuh bersama pemiliknya — digital garden, OS pribadi, dan portofolio dalam satu sistem terintegrasi.",
    status: "active",
    progress: 35,
    github: "https://github.com/rifqiabdullah/portfolio",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "MDX", "Velite"],
    roadmap: [
      { title: "Scaffold & design system", done: true },
      { title: "Homepage & Now page", done: true },
      { title: "Journey timeline", done: false },
      { title: "Digital Garden (Notes)", done: false },
      { title: "Pulse dashboard", done: false },
      { title: "Deploy ke Vercel", done: false },
    ],
    date: "2026-06-01",
  },
  {
    title: "Agribusiness Research Notes",
    slug: "agribusiness-notes",
    description:
      "Kumpulan riset industri peternakan, ketahanan pangan, dan agribusiness Indonesia — dibangun sebagai second brain.",
    status: "active",
    progress: 20,
    tech: ["Obsidian", "Markdown", "Zotero"],
    roadmap: [
      { title: "Setup sistem PKM", done: true },
      { title: "Riset rantai nilai ayam broiler", done: false },
      { title: "Analisis pasar sapi lokal", done: false },
    ],
    date: "2026-05-01",
  },
  {
    title: "PPQIT Raker System",
    slug: "ppqit-raker",
    description:
      "Sistem dokumentasi evaluasi PDCA dan presentasi kerja tahunan untuk divisi Kepengasuhan & Ketahfidzan.",
    status: "paused",
    progress: 70,
    tech: ["PowerPoint", "Markdown", "PDCA"],
    roadmap: [
      { title: "Presentasi Raker 2026/2027", done: true },
      { title: "Template evaluasi bulanan", done: true },
      { title: "Dashboard progress santri", done: false },
    ],
    date: "2026-04-01",
  },
  {
    title: "Startup Peternakan (Stealth)",
    slug: "startup-peternakan",
    description:
      "Membangun model bisnis berbasis komoditas ternak lokal. Still in ideation — riset pasar dan validasi problem.",
    status: "planning",
    progress: 10,
    tech: ["Business Model Canvas", "Market Research"],
    roadmap: [
      { title: "Riset kompetitor & pasar", done: false },
      { title: "Interview peternak lokal", done: false },
      { title: "MVP concept", done: false },
    ],
    date: "2026-06-15",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: 2026,
    month: 6,
    title: "Masuk UGM — Fapet S1",
    description:
      "Diterima di Ilmu dan Industri Peternakan UGM melalui SNBT 2026. Mulai semester pertama dengan visi agribusiness.",
    category: "education",
    highlight: true,
  },
  {
    year: 2026,
    month: 3,
    title: "Musyrif PPQIT Al Mahir",
    description:
      "Bergabung sebagai Musyrif (pembimbing asrama) di divisi Kepengasuhan dan Ketahfidzan.",
    category: "work",
    highlight: false,
  },
  {
    year: 2025,
    month: 9,
    title: "Junior Admission Staff — UMS",
    description:
      "Bergabung sebagai staf promosi penerimaan mahasiswa baru UMS, menangani fotografi dokumenter, desain grafis, dan video editing.",
    category: "work",
    highlight: false,
  },
  {
    year: 2024,
    month: 7,
    title: "S1 Pendidikan Bahasa Inggris — UMS",
    description:
      "Masuk UMS dengan beasiswa penuh OSC. Pengalaman berharga sebelum memutuskan pindah jalur ke peternakan/agribusiness.",
    category: "education",
    highlight: false,
  },
  {
    year: 2024,
    month: 6,
    title: "Lulus SMA Unggulan CT Arsa Foundation",
    description:
      "Menyelesaikan SMA dengan beasiswa penuh. Sekolah berbasis karakter dan keunggulan akademik.",
    category: "education",
    highlight: true,
  },
  {
    year: 2021,
    month: 7,
    title: "SMP Pesantren Tahfidz Azzayadiy",
    description:
      "Tiga tahun di pesantren tahfidz — fondasi disiplin, hafalan Quran, dan hidup komunal yang membentuk cara berpikir sistem.",
    category: "education",
    highlight: false,
  },
];

export const nowData = {
  focus: "Semester 1 Fapet UGM",
  reading: "The Almanack of Naval Ravikant",
  building: "Living Portfolio",
  learning: "Next.js 15 + TypeScript",
  listening: "Podcast Lex Fridman",
  location: "Yogyakarta, Indonesia",
  updatedAt: "Juni 2026",
};

import { Album } from "./types";

export const albums: Album[] = [
  {
    title: "Raker PPQIT Al Mahir 2026/2027",
    slug: "raker-ppqit-2026",
    category: "Pesantren",
    location: "Wonogiri",
    date: "April 2026",
    coverPhoto: "/photos/raker-ppqit-2026/cover.jpg",
    coverAspect: "wide",
    narasi: "Raker tahun ini pertama kalinya menggunakan kerangka PDCA sebagai tulang punggung evaluasi — bukan sekadar formalitas laporan. Dua hari, banyak perdebatan produktif, dan satu kesepakatan besar soal sistem pengasuhan yang akan dijalankan tahun ini.",
    photos: [
      { id: "01", src: "/photos/raker-ppqit-2026/01.jpg", alt: "Pembukaan sesi pleno", caption: "Pembukaan sesi pleno. Ustadz Direktur memaparkan visi pesantren untuk tahun ajaran baru — lebih terstruktur dari tahun-tahun sebelumnya.", place: "Aula PPQIT Al Mahir", date: "April 2026", aspectRatio: "wide" },
      { id: "02", src: "/photos/raker-ppqit-2026/02.jpg", alt: "Diskusi Kepengasuhan", caption: "Sesi diskusi kelompok Kepengasuhan. Kami membahas sistem evaluasi santri yang selama ini masih terlalu subjektif.", place: "Ruang Diskusi, Al Mahir", date: "April 2026", aspectRatio: "portrait" },
      { id: "03", src: "/photos/raker-ppqit-2026/03.jpg", alt: "Musyrif menyusun target", caption: "Para Musyrif menyusun target triwulan pertama. Ini bagian yang selalu jadi perdebatan paling produktif.", place: "Aula PPQIT Al Mahir", date: "April 2026", aspectRatio: "landscape" },
      { id: "04", src: "/photos/raker-ppqit-2026/04.jpg", alt: "Laporan Ketahfidzan", caption: "Laporan Ketahfidzan — progress hafalan santri dipaparkan per kelas. Ada pencapaian yang tidak terduga tahun ini.", place: "Ruang Pleno, Al Mahir", date: "April 2026", aspectRatio: "portrait" },
      { id: "05", src: "/photos/raker-ppqit-2026/05.jpg", alt: "Istirahat sore", caption: "Istirahat sore. Obrolan di luar ruangan ini yang sering melahirkan keputusan paling jujur.", place: "Halaman PPQIT Al Mahir", date: "April 2026", aspectRatio: "landscape" },
      { id: "06", src: "/photos/raker-ppqit-2026/06.jpg", alt: "Foto bersama", caption: "Foto bersama seluruh staf pengajar dan tim pengasuhan. Tahun baru, sistem baru.", place: "Depan Gedung Al Mahir", date: "April 2026", aspectRatio: "wide" },
    ],
  },
  {
    title: "Keseharian Santri",
    slug: "keseharian-santri",
    category: "Pesantren",
    location: "Al Mahir",
    date: "Maret 2026",
    coverPhoto: "/photos/keseharian-santri/cover.jpg",
    coverAspect: "normal",
    narasi: "Rutinitas harian di pesantren punya ritme yang unik — subuh, halaqah, sekolah, murajaah, tidur, ulang. Foto-foto ini mencoba menangkap hal-hal kecil yang sering terlewat.",
    photos: [
      { id: "01", src: "/photos/keseharian-santri/01.jpg", alt: "Subuh berjamaah", caption: "Subuh berjamaah. Momen paling sunyi sekaligus paling ramai di pesantren.", place: "Masjid Al Mahir", date: "Maret 2026", aspectRatio: "wide" },
      { id: "02", src: "/photos/keseharian-santri/02.jpg", alt: "Halaqah pagi", caption: "Halaqah pagi — santri menyetorkan hafalan sebelum pelajaran dimulai.", place: "Serambi Masjid", date: "Maret 2026", aspectRatio: "portrait" },
      { id: "03", src: "/photos/keseharian-santri/03.jpg", alt: "Makan siang", caption: "Makan siang bersama. Ini salah satu waktu paling bebas dalam sehari.", place: "Dapur Santri", date: "Maret 2026", aspectRatio: "landscape" },
    ],
  },
  {
    title: "PMB UMS 2025",
    slug: "pmb-ums-2025",
    category: "Documentary",
    location: "Surakarta",
    date: "September 2025",
    coverPhoto: "/photos/pmb-ums-2025/cover.jpg",
    coverAspect: "wide",
    narasi: "Dokumentasi penerimaan mahasiswa baru UMS 2025 sebagai bagian dari tim Junior Admission Promotion Staff. Tugas utama: merekam momen, bukan membuatnya terlihat lebih baik dari aslinya.",
    photos: [
      { id: "01", src: "/photos/pmb-ums-2025/01.jpg", alt: "Registrasi mahasiswa baru", caption: "Antrian registrasi hari pertama. Lebih teratur dari yang diperkirakan.", place: "Gedung Induk UMS", date: "September 2025", aspectRatio: "wide" },
      { id: "02", src: "/photos/pmb-ums-2025/02.jpg", alt: "Sesi orientasi", caption: "Sesi orientasi akademik. Ekspresi campuran antara antusias dan cemas.", place: "Auditorium UMS", date: "September 2025", aspectRatio: "landscape" },
      { id: "03", src: "/photos/pmb-ums-2025/03.jpg", alt: "Tim panitia", caption: "Tim panitia di akhir hari pertama. Lelah, tapi selesai.", place: "Kampus UMS", date: "September 2025", aspectRatio: "portrait" },
    ],
  },
  {
    title: "Ospek Fapet UGM 2026",
    slug: "ospek-fapet-ugm-2026",
    category: "Kampus",
    location: "Yogyakarta",
    date: "Juni 2026",
    coverPhoto: "/photos/ospek-fapet-2026/cover.jpg",
    coverAspect: "normal",
    narasi: "Ospek pertama di UGM. Beda dari yang pernah dibayangkan — lebih akademik, lebih serius, tapi juga ada momen-momen yang tidak akan terlupa.",
    photos: [
      { id: "01", src: "/photos/ospek-fapet-2026/01.jpg", alt: "Upacara pembukaan", caption: "Upacara pembukaan di lapangan Fapet. Pertama kali resmi jadi bagian dari UGM.", place: "Lapangan Fapet UGM", date: "Juni 2026", aspectRatio: "wide" },
      { id: "02", src: "/photos/ospek-fapet-2026/02.jpg", alt: "Pengenalan laboratorium", caption: "Pengenalan laboratorium peternakan. Ini yang jadi alasan masuk sini.", place: "Lab Fapet UGM", date: "Juni 2026", aspectRatio: "landscape" },
    ],
  },
];

export const albumsByCategory = albums.reduce<Record<string, Album[]>>((acc, album) => {
  if (!acc[album.category]) acc[album.category] = [];
  acc[album.category].push(album);
  return acc;
}, {});

export const categories = ["Semua", ...Array.from(new Set(albums.map((a) => a.category)))];
