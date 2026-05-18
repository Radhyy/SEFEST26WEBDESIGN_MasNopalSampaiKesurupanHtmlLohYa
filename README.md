# WorkSim 🚀

**WorkSim** adalah platform eksplorasi & simulasi karier berbasis web yang dirancang untuk membantu siswa dan fresh graduate menemukan arah karier yang paling cocok dengan potensi mereka. Mulai dari asesmen minat berbasis AI, learning roadmap interaktif, simulasi kerja nyata, hingga passport digital yang mencatat seluruh progres belajar — semuanya dalam satu ekosistem.

> ⚠️ **Status: Development Aktif** — Proyek ini masih dalam tahap pengembangan awal. Banyak fitur yang belum stabil, belum konsisten, dan masih berupa prototipe. Cocok untuk eksperimen dan kontribusi awal.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tampilan Proyek](#tampilan-proyek)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Cara Memulai Development](#cara-memulai-development)
- [Scripts yang Tersedia](#scripts-yang-tersedia)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Roadmap](#roadmap)
- [Catatan Pengembangan](#catatan-pengembangan)
- [Tim Pengembang](#tim-pengembang)
- [Lisensi](#lisensi)

---

## Fitur Utama

### 🧠 AI Career Advisor
Kuis interaktif 3 langkah yang menganalisis minat dan tingkat keahlian pengguna, lalu memberikan rekomendasi karier secara instan — semuanya dijalankan di sisi klien.

- **Langkah 1**: Pilih bidang minat (Desain, Coding, Data, Manajemen)
- **Langkah 2**: Tentukan tingkat keahlian
- **Langkah 3**: Dapatkan hasil rekomendasi karier beserta deskripsi singkat

### 🗺️ Learning Roadmap Interaktif
Learning roadmap berbentuk diagram pohon (branching) yang menampilkan jalur belajar Frontend Development secara visual.

- Node-node yang saling terhubung dengan garis SVG
- Panel samping yang berisi deskripsi, ide proyek, dan sumber belajar gratis
- Progress tracking dengan checklist per node
- **Rencana**: Backend, Full Stack, DevOps, Mobile, AI Engineer, dan lainnya

### 🎮 Career Simulation
Simulasi kerja dunia nyata dengan sistem proyek dan submission.

- Berbagai tipe proyek: UI Slicing, Full Project, Bug Fix, Tantangan
- Sistem deadline dan countdown timer
- Form submission (tautan GitHub, live preview, catatan)
- **Saat ini**: Terkunci — membutuhkan Level Freelance (1500 XP) untuk mengakses

### 🛂 Skill Passport
Passport digital / profil pengguna yang menampilkan seluruh pencapaian belajar secara visual dan gamifikasi.

- Level & XP Progress (Beginner → Intermediate → Freelance)
- Badges / pencapaian
- Skill distribution chart (radar chart SVG)
- Activity history timeline
- Menggunakan avatar dari DiceBear API

### 🌙 Dark Mode
Dukungan tema terang dan gelap penuh yang disimpan ke `localStorage`, diintegrasikan ke seluruh halaman.

### ✨ Scroll Reveal
Animasi elemen yang muncul saat pengguna menggulir, menggunakan `IntersectionObserver` native.

---

## Tampilan Proyek

| Halaman | Deskripsi |
|---------|-----------|
| **Landing Page** | Halaman utama dengan hero, fitur, CTA, newsletter |
| **Login** | Form login dengan dummy auth (email: `budi@worksim.id`, sandi: `password123`) |
| **Register** | Form pendaftaran pengguna baru |
| **AI Career Advisor** | Kuis minat karier 3 langkah |
| **Learning Roadmaps** | Daftar semua roadmap (Frontend available, sisanya coming soon) |
| **Frontend Roadmap** | Diagram roadmap Frontend interaktif dengan side panel & XP |
| **Career Simulation** | Lobby simulasi proyek (terkunci) dengan daftar proyek preview |
| **Project Detail** | Detail proyek, brief klien, form submit, deadline countdown |
| **Skill Passport** | Profil pengguna gamifikasi dengan XP, level, badges, skill chart |

---

## Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5** | Struktur halaman |
| **Tailwind CSS v4** | Utility-first CSS framework untuk styling cepat dan konsisten |
| **CSS3** | Kustom styling (animasi, glassmorphism, gradient) |
| **Vanilla JavaScript (ES6+)** | Seluruh logika interaktif tanpa framework |
| **Font Awesome 6** | Ikon UI |
| **Google Fonts** | Plus Jakarta Sans & Sora |
| **DiceBear API** | Avatar pengguna |
| **Git** | Version control |

> **Catatan**: Proyek ini **tidak menggunakan** framework frontend (React, Vue, dll.), backend, database, atau API server. Semua data bersifat statis / hardcoded di sisi klien. `localStorage` digunakan untuk persistensi tema.

---

## Struktur Proyek

```
worksim_cli/
├── index.html                     # Beranda
├── README.md                      # Dokumentasi proyek
├── package.json                   # Konfigurasi npm & dependensi
├── package-lock.json
├── .gitignore
│
├── assets/                        # Aset statis
│   ├── logo/
│   │   └── WorksimLogo.png
│   ├── hero/
│   │   └── phone.png
│   ├── decor/
│   │   ├── blob-soft.svg
│   │   ├── burst.svg
│   │   ├── curve-accent.svg
│   │   └── dots-blue.svg
│   └── arrows/
│       ├── curve-down.svg
│       ├── curve-left.svg
│       └── curve-right.svg
│
├── css/
│   ├── input.css                  # Sumber CSS (Tailwind + kustom)
│   └── output.css                 # Output Tailwind (dihasilkan)
│
├── js/
│   ├── shared.js                  # Navbar, footer, dark mode, scroll reveal
│   ├── home.js                    # Interaktivitas beranda
│   ├── login.js                   # Logika login
│   ├── register.js                # Logika register
│   ├── ai-career-advisor.js       # Logika kuis AI Career Advisor
│   └── roadmap-frontend.js        # Logika roadmap Frontend interaktif
│
└── pages/
    ├── login/
    │   └── index.html             # Form login (dummy auth)
    ├── register/
    │   └── index.html             # Form registrasi
    ├── ai-career-advisor/
    │   └── index.html             # Kuis minat karier 3 langkah
    ├── learning-roadmap/
    │   ├── index.html             # Daftar roadmap
    │   └── roadmap-frontend/
    │       ├── index.html         # Roadmap Frontend interaktif
    │       └── temp.js            # Sisa file lama (tidak dipakai)
    ├── career-simulation/
    │   ├── index.html             # Lobby simulasi
    │   └── project-detail.html    # Detail & submit proyek
    └── skill-passport/
        └── index.html             # Profil gamifikasi
```

---

## Cara Memulai Development

### Prasyarat

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- npm (bawaan Node.js)
- Git

### Langkah-langkah

```bash
# 1. Clone repositori
git clone https://github.com/Radhyy/WEB-DESIGN-SEFEST.git
cd WEB-DESIGN-SEFEST

# 2. Install dependensi
npm install

# 3. Jalankan Tailwind dalam mode watch
npm run dev
```

Perintah `npm run dev` akan mengkompilasi `css/input.css` ke `css/output.css` secara otomatis setiap kali ada perubahan.

### Menjalankan di Browser

Karena ini adalah website statis murni (tanpa server), anda bisa langsung membuka file `index.html` di browser, atau menggunakan ekstensi VS Code seperti **Live Server** untuk hot-reload.

### Build Produksi

```bash
npm run build
```

Menghasilkan `css/output.css` versi minified.

---

## Scripts yang Tersedia

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Mode development — watch Tailwind & compile otomatis |
| `npm run build` | Build produksi — Tailwind minified |
| `npm test` | Placeholder (belum ada test) |

---

## Panduan Kontribusi

Kami sangat terbuka terhadap kontribusi! Karena proyek ini masih dalam tahap awal, setiap bantuan sangat berarti.

### Cara Berkontribusi

1. **Fork** repositori ini
2. Buat branch baru: `git checkout -b feat/fitur-anda`
3. Lakukan perubahan yang diinginkan
4. Pastikan tidak merusak halaman lain
5. Commit dengan pesan yang deskriptif:
   ```
   feat: menambahkan fitur X
   fix: memperbaiki bug Y pada halaman Z
   refactor: memisahkan logika A ke file terpisah
   style: menyesuaikan warna tombol dengan brand guide
   ```
6. Push ke branch: `git push origin feat/fitur-anda`
7. Buat **Pull Request** ke branch `main`

### Pedoman

- **Konsistensi**: Ikuti gaya kode yang sudah ada (format HTML, struktur CSS, pola JS)
- **Tidak ada backend**: Jangan menambahkan dependensi server/backend tanpa diskusi terlebih dahulu
- **Dark mode**: Pastikan fitur baru mendukung tema terang dan gelap
- **Responsif**: Pastikan halaman tetap rapi di berbagai ukuran layar
- **Jangan commit** `node_modules/`, `css/output.css`, atau file hasil build lainnya
- Uji perubahanmu di beberapa browser jika memungkinkan

### Hal yang Bisa Dikerjakan

- [ ] Menambahkan roadmap untuk peran lain (Backend, DevOps, Mobile, dll.)
- [ ] Implementasi sistem autentikasi sungguhan
- [ ] Menghubungkan dengan backend / database
- [ ] Membuat Career Simulation benar-benar fungsional
- [ ] Menambahkan unit test
- [x] Refaktor kode JavaScript agar lebih modular
- [x] Memperbaiki tautan navigasi yang belum konsisten
- [ ] Membuat halaman 404 kustom
- [ ] Optimalisasi performa dan aksesibilitas

---

## Roadmap

### ✅ Tersedia
- [x] Landing page dengan hero dan fitur
- [x] AI Career Advisor (quiz 3 langkah)
- [x] Learning Roadmap — Frontend Developer (interaktif)
- [x] Daftar roadmap (dengan kategori)
- [x] Login & Register (dummy auth)
- [x] Skill Passport (profil gamifikasi)
- [x] Career Simulation (lobby + project preview)
- [x] Dark mode
- [x] Scroll reveal animations

### 🔄 Dalam Pengembangan
- [ ] Career Simulation — fungsional penuh (submit, feedback, solusi)
- [ ] Roadmap Backend Developer
- [ ] Roadmap Full Stack Developer
- [ ] Sistem autentikasi nyata
- [ ] Dashboard pengguna

### 📅 Rencana Mendatang
- [ ] Roadmap DevOps, Mobile, Data Analyst, AI Engineer
- [ ] Roadmap berbasis skill (Web Security, Software Testing, dll.)
- [ ] Sistem database & API backend
- [ ] Fitur forum / diskusi
- [ ] Integrasi dengan layanan eksternal (GitHub API, dll.)
- [ ] Progressive Web App (PWA)
- [ ] Mode offline
- [ ] Dukungan multi-bahasa

---

## Catatan Pengembangan

### Yang Perlu Diketahui

- **Tidak ada backend** — seluruh aplikasi berjalan di sisi klien (static site)
- **Data dummy** — pengguna, XP, badges, dan aktivitas masih berupa data hardcoded
- **Hanya Frontend roadmap** yang sudah diimplementasikan — roadmap lainnya masih "Coming Soon"
- **Career Simulation terkunci** — membutuhkan mekanisme leveling yang belum diintegrasikan penuh
- **Navigasi sudah konsisten** — seluruh tautan footer sudah menggunakan `pages/` bukan `features/`, navbar menggunakan path absolut `/pages/...`
- **Belum ada environment variable** — `.env` sudah di-`.gitignore` sebagai persiapan
- **Belum ada test** — test script di `package.json` masih placeholder

---

## Tim Pengembang
- Muhammad Naufal Rafa Al As'ad
- Aliezzar Wijaya
- Radhiyya Alea Akbar

---

## Lisensi

Proyek ini dilisensikan di bawah **ISC License**. Lihat file `package.json` untuk detail lebih lanjut.

---

> Dibuat dengan ❤️ untuk SEFEST 2026
