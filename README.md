# WorkSim

WorkSim adalah platform eksplorasi dan simulasi karier berbasis web untuk membantu siswa, fresh graduate, dan career switcher menemukan arah karier digital yang lebih jelas. Di dalamnya ada AI Career Advisor, learning roadmap interaktif, career simulation, dan Skill Passport yang mencatat progres belajar pengguna.

> Status: Development aktif. Beberapa fitur masih berupa prototipe, tetapi Skill Passport sudah mulai memakai data dinamis dari browser storage dan sudah disiapkan untuk integrasi generate CV via Useresume.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Integrasi Useresume](#integrasi-useresume)
- [Struktur Proyek](#struktur-proyek)
- [Cara Memulai Development](#cara-memulai-development)
- [Scripts yang Tersedia](#scripts-yang-tersedia)
- [Catatan Data Lokal](#catatan-data-lokal)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Roadmap](#roadmap)
- [Tim Pengembang](#tim-pengembang)

---

## Fitur Utama

### AI Career Advisor

Kuis interaktif 3 langkah yang menganalisis minat dan tingkat keahlian pengguna, lalu memberikan rekomendasi karier secara instan di sisi klien.

- Pilih bidang minat seperti desain, coding, data, atau manajemen.
- Tentukan tingkat keahlian.
- Dapatkan rekomendasi karier beserta deskripsi singkat.

### Learning Roadmap Interaktif

Roadmap berbentuk diagram pohon untuk membantu pengguna belajar secara bertahap.

- Roadmap Frontend sudah interaktif.
- Node roadmap memiliki panel materi, contoh, dan sumber belajar.
- XP disimpan melalui widget progres dan disinkronkan ke `localStorage`.
- Roadmap lain tersedia sebagai halaman/track tambahan atau masih dalam pengembangan.

### Career Simulation

Simulasi kerja berbasis project dan brief.

- Preview berbagai tipe project seperti UI Slicing, Full Project, Bug Fix, dan Tantangan.
- Ada halaman detail project dengan brief, requirement, deadline, dan form submit.
- Mode akses penuh masih berupa demo/prototipe.

### Skill Passport

Profil gamifikasi pengguna yang menampilkan progres belajar.

- Data profil membaca akun demo dari `worksim_user` dan detail tambahan dari `worksim_profile`.
- Progres XP, skill, badge, dan aktivitas membaca `worksim_progress`.
- Menampilkan level, XP, badges, skill distribution, dan activity timeline.
- Tersedia tombol share passport.
- Tersedia tombol Generate CV yang mengirim data Skill Passport ke Netlify Function.

### Generate CV dengan Useresume

Skill Passport sudah disiapkan untuk membuat CV berbasis data profil dan skill pengguna.

- Frontend memanggil `/.netlify/functions/create-resume`.
- API key Useresume hanya dibaca dari environment variable Netlify.
- Response Useresume dengan `data.file_url` ditampilkan sebagai link PDF CV.
- Jika API belum tersedia saat demo lokal, UI menampilkan mode demo/error yang ramah.

### Dark Mode

Dukungan tema terang dan gelap disimpan di `localStorage` dan digunakan lintas halaman.

---

## Tech Stack

| Teknologi | Kegunaan |
| --- | --- |
| HTML5 | Struktur halaman |
| Tailwind CSS v4 | Styling utility-first |
| CSS3 | Custom styling dan animasi |
| Vanilla JavaScript | Interaksi frontend tanpa framework |
| SweetAlert2 | Toast dan dialog UI |
| Font Awesome 6 | Ikon UI |
| Google Fonts | Plus Jakarta Sans dan Sora |
| DiceBear API | Avatar pengguna |
| Netlify Functions | Proxy aman untuk Useresume API |
| Useresume API | Generate CV PDF |

Catatan: WorkSim tetap tidak memakai framework frontend dan belum memakai database. Satu-satunya server-side runtime saat ini adalah Netlify Function untuk menjaga API key Useresume tetap aman.

---

## Integrasi Useresume

Fitur generate CV menggunakan Netlify Function:

```txt
POST /.netlify/functions/create-resume
```

Function akan memetakan data WorkSim ke payload Useresume:

- `profile.name` -> `content.name`
- `profile.role` -> `content.role`
- `profile.email` -> `content.email`
- `profile.phone` -> `content.phone`
- `profile.address` -> `content.address`
- `profile.summary` -> `content.summary`
- `progress.skills[]` -> `content.skills[]`

Response Useresume yang didukung:

```js
{
  success: true,
  data: {
    file_url: "https://useresume-platform.com/resume/john-doe-resume.pdf",
    file_url_expires_at: 1728388800000,
    file_expires_at: 1728388800000,
    file_size_bytes: 251904
  },
  meta: {
    run_id: "run_123456789",
    credits_used: 1,
    credits_remaining: 499
  }
}
```

Frontend akan menampilkan tombol untuk membuka PDF dari `data.file_url`.

### Environment Variable

Buat file `.env` untuk development lokal atau isi environment variable di dashboard Netlify:

```env
USERESUME_API_KEY=your_useresume_api_key
```

Contoh template tersedia di `.env.example`.

---

## Struktur Proyek

```txt
worksim_cli/
├── index.html
├── README.md
├── package.json
├── netlify.toml
├── .env.example
├── assets/
├── css/
│   ├── input.css
│   └── output.css
├── js/
│   ├── shared.js
│   ├── skill-passport.js
│   ├── xp-widget.js
│   ├── login.js
│   ├── register.js
│   ├── ai-career-advisor.js
│   └── roadmap-*.js
├── netlify/
│   └── functions/
│       └── create-resume.js
└── pages/
    ├── login/
    ├── register/
    ├── ai-career-advisor/
    ├── learning-roadmap/
    ├── career-simulation/
    └── skill-passport/
```

---

## Cara Memulai Development

### Prasyarat

- Node.js v18 atau lebih baru
- npm
- Git
- Netlify CLI untuk menjalankan function secara lokal

Install Netlify CLI jika belum ada:

```bash
npm install -g netlify-cli
```

### Setup

```bash
git clone https://github.com/Radhyy/WEB-DESIGN-SEFEST.git
cd WEB-DESIGN-SEFEST
npm install
```

Salin environment template:

```bash
cp .env.example .env
```

Isi `USERESUME_API_KEY` di `.env`.

### Menjalankan Tailwind

```bash
npm run dev
```

Perintah ini hanya menjalankan Tailwind watch dan mengompilasi `css/input.css` ke `css/output.css`.

### Menjalankan Website dengan Netlify Function

Untuk fitur Generate CV, jalankan website melalui Netlify Dev:

```bash
netlify dev
```

Buka:

```txt
http://localhost:8888
```

Jika memakai VS Code Live Server di `http://127.0.0.1:5500`, pastikan `netlify dev` tetap berjalan di `http://localhost:8888`. Script Skill Passport akan mengarahkan request function dari Live Server ke port `8888`.

### Build Produksi

```bash
npm run build
```

Untuk deploy Netlify, pastikan environment variable `USERESUME_API_KEY` sudah diisi di dashboard Netlify.

---

## Scripts yang Tersedia

| Script | Deskripsi |
| --- | --- |
| `npm run dev` | Watch Tailwind dan compile CSS otomatis |
| `npm run build` | Build Tailwind minified |
| `npm test` | Placeholder, belum ada test otomatis |

---

## Catatan Data Lokal

WorkSim masih memakai browser storage untuk prototipe:

| Key | Storage | Isi |
| --- | --- | --- |
| `worksim_user` | `localStorage` | Akun demo/register user |
| `worksim_session` | `localStorage` | Status login demo |
| `worksim_profile` | `localStorage` | Data profil untuk Skill Passport dan CV |
| `worksim_progress` | `localStorage` | XP, skill, badge, dan aktivitas permanen |
| `worksim_xp_progress` | `sessionStorage` | Progress XP lama/kompatibilitas widget |
| `theme` | `localStorage` | Tema terang/gelap |

Dummy login bawaan:

```txt
Email: budi@worksim.id
Password: password123
```

---

## Panduan Kontribusi

1. Fork repositori ini.
2. Buat branch baru.
3. Lakukan perubahan sesuai pola kode yang sudah ada.
4. Pastikan halaman tetap responsif dan mendukung dark mode.
5. Jangan commit `node_modules/`, `.env`, build output, atau file rahasia.
6. Jalankan pengecekan sintaks untuk file JS yang diubah jika memungkinkan.
7. Buat Pull Request ke branch utama.

Pedoman penting:

- API key eksternal tidak boleh ditaruh di frontend.
- Gunakan Netlify Function untuk integrasi yang membutuhkan secret.
- Pertahankan pola Vanilla JS dan HTML statis yang sudah ada.
- Hindari menambah framework besar tanpa diskusi.

---

## Roadmap

### Tersedia

- [x] Landing page
- [x] Login dan register demo
- [x] AI Career Advisor
- [x] Learning Roadmap Frontend interaktif
- [x] XP widget
- [x] Skill Passport dinamis berbasis localStorage
- [x] Generate CV via Netlify Function dan Useresume
- [x] Career Simulation preview
- [x] Dark mode

### Dalam Pengembangan

- [ ] Form edit profil Skill Passport
- [ ] Mapping project simulasi ke bagian pengalaman/project CV
- [ ] Career Simulation fungsional penuh
- [ ] Roadmap non-Frontend yang lebih lengkap
- [ ] Sistem autentikasi dan database sungguhan
- [ ] Test otomatis

### Rencana Mendatang

- [ ] Dashboard pengguna
- [ ] Integrasi GitHub/API eksternal lain
- [ ] Mode offline/PWA
- [ ] Forum atau diskusi komunitas
- [ ] Dukungan multi-bahasa

---

## Tim Pengembang

- Muhammad Naufal Rafa Al As'ad
- Aliezzar Wijaya
- Radhiyya Alea Akbar

---

## Lisensi

Proyek ini menggunakan ISC License. Lihat `package.json` untuk detail.

---

Dibuat untuk SEFEST 2026.
