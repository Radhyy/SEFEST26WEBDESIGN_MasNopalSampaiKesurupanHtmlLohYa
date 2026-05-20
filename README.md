# WorkSim

WorkSim adalah website eksplorasi karier digital yang dibuat sebagai karya final untuk lomba **SEFEST 2026 bidang Web Design** yang diselenggarakan oleh **Himpunan Mahasiswa Software Engineering Telkom University**.

Fokus utama project ini adalah tampilan, desain antarmuka, pengalaman pengguna, interaksi frontend, dan alur simulasi produk berbasis web. WorkSim belum menggunakan backend, database, atau sistem autentikasi sungguhan. Seluruh data demo disimpan di browser menggunakan `localStorage` dan `sessionStorage`.

---

## Ringkasan

WorkSim membantu pelajar, fresh graduate, dan career switcher mengeksplorasi karier digital melalui beberapa halaman utama:

- Landing page dengan positioning produk dan highlight fitur.
- AI Career Advisor berbasis kuis sederhana di sisi frontend.
- Learning Roadmap interaktif untuk beberapa jalur karier digital.
- Career Simulation sebagai preview pengalaman kerja berbasis brief project.
- Skill Passport untuk menampilkan profil, XP, badge, distribusi skill, dan riwayat aktivitas.
- Login dan register demo berbasis browser storage.
- Dark mode lintas halaman.

Project ini dirancang sebagai **static web prototype** yang dapat dijalankan tanpa server aplikasi.

---

## Status Project

Status: **Final untuk kebutuhan lomba Web Design SEFEST 2026**.

Catatan penting:

- Tidak ada backend aplikasi.
- Tidak ada database.
- Login/register hanya simulasi frontend.
- Progress user hanya tersimpan di browser pengguna.
- Fitur AI Career Advisor masih rule-based, bukan AI API sungguhan.
- Fitur Generate CV di Skill Passport memakai Netlify Function sebagai proxy aman untuk membaca API key Useresume dari environment variable.

---

## Fitur Utama

### Landing Page

Halaman utama memperkenalkan WorkSim sebagai platform eksplorasi karier digital dengan visual modern, navigasi responsif, CTA, highlight fitur, dan section pendukung.

### AI Career Advisor

Kuis 3 langkah yang memberikan rekomendasi karier berdasarkan minat pengguna.

- Pilihan minat seperti desain, coding, data, dan bisnis.
- Pilihan tingkat keahlian.
- Hasil rekomendasi karier ditentukan oleh logika frontend.

### Learning Roadmap

Halaman roadmap berisi visual jalur belajar interaktif.

- Roadmap ditampilkan sebagai node dan cabang materi.
- Panel materi muncul saat node dipilih.
- Materi dibaca dari file JSON lokal di folder `materi/`.
- XP diberikan saat user membaca materi atau membuka contoh.
- Progress disimpan ke browser storage.

### Career Simulation

Prototype simulasi kerja berbasis project.

- Preview daftar project seperti UI Slicing, Full Project, Bug Fix, dan Tantangan.
- Unlock mode berdasarkan XP.
- Halaman detail project berisi brief, requirement, deadline, form submit, dan feedback demo.
- Submit project hanya simulasi frontend.

### Skill Passport

Halaman profil gamifikasi untuk menampilkan perkembangan belajar user.

- Profil user demo.
- Level dan XP.
- Badge pencapaian.
- Distribusi skill.
- Riwayat aktivitas.
- Tombol share.
- Tombol Generate CV yang mengirim data Skill Passport ke Netlify Function.

### Generate CV dengan Useresume

Fitur Generate CV memakai API Useresume untuk membuat CV dari data Skill Passport. Karena API key tidak aman jika ditaruh langsung di frontend, WorkSim menggunakan Netlify Function sebagai serverless proxy.

Alur singkat:

1. Frontend Skill Passport mengirim data profil dan skill ke `/.netlify/functions/create-resume`.
2. Netlify Function membaca `USERESUME_API_KEY` dari environment variable.
3. Function meneruskan payload ke Useresume API.
4. Response dari Useresume dikirim kembali ke frontend.

Catatan: Netlify Function ini hanya dipakai untuk menjaga API key tetap aman. WorkSim tetap belum menggunakan backend aplikasi, database, atau autentikasi server-side.

### Login dan Register Demo

Autentikasi hanya untuk kebutuhan simulasi pengalaman pengguna.

- Data akun disimpan di `localStorage`.
- Session login disimpan di `localStorage`.
- Tidak ada validasi server.
- Tidak ada database user.

Dummy login bawaan:

```txt
Email: budi@worksim.id
Password: password123
```

### Dark Mode

Tema terang dan gelap tersedia di seluruh halaman utama. Preferensi tema disimpan di `localStorage`.

---

## Tech Stack

| Teknologi | Kegunaan |
| --- | --- |
| HTML5 | Struktur halaman |
| Tailwind CSS v4 | Styling utility-first |
| CSS3 | Custom styling, layout, animasi, dan responsive design |
| Vanilla JavaScript | Interaksi frontend |
| SweetAlert2 | Toast dan modal |
| Font Awesome 6 | Ikon UI |
| Google Fonts | Typography |
| DiceBear API | Avatar demo |
| Netlify Functions | Proxy aman untuk API key Useresume |
| Useresume API | Generate CV dari Skill Passport |
| Browser Storage | Penyimpanan data demo |

---

## Struktur Project

```txt
worksim_cli/
|-- index.html
|-- README.md
|-- package.json
|-- netlify.toml
|-- assets/
|-- css/
|   |-- input.css
|   `-- output.css
|-- js/
|   |-- shared.js
|   |-- skill-passport.js
|   |-- xp-widget.js
|   |-- login.js
|   |-- register.js
|   |-- ai-career-advisor.js
|   `-- roadmap-*.js
|-- materi/
|   `-- ...
|-- netlify/
|   `-- functions/
|       `-- create-resume.js
`-- pages/
    |-- login/
    |-- register/
    |-- ai-career-advisor/
    |-- learning-roadmap/
    |-- career-simulation/
    |-- skill-passport/
    |-- privacy/
    `-- terms/
```

---

## Data Lokal

Karena belum menggunakan backend, beberapa data disimpan langsung di browser.

| Key | Storage | Isi |
| --- | --- | --- |
| `worksim_user` | `localStorage` | Akun demo/register user |
| `worksim_session` | `localStorage` | Status login demo |
| `worksim_profile` | `localStorage` | Data profil Skill Passport |
| `worksim_progress` | `localStorage` | XP, completed nodes, badge, skill, dan aktivitas |
| `worksim_xp_progress` | `sessionStorage` | Progress XP sementara/kompatibilitas widget |
| `theme` | `localStorage` | Preferensi tema terang/gelap |

Data ini hanya berada di perangkat/browser pengguna dan akan hilang jika storage browser dihapus.

---

## Cara Menjalankan

### Prasyarat

- Node.js v18 atau lebih baru
- npm

**1. Install Dependency**

```bash
npm install
```

**2. Development Tailwind**

```bash
npm run dev
```

Script ini menjalankan Tailwind watch dari `css/input.css` ke `css/output.css`.

**3. Build CSS**

```bash
npm run build
```

**4. Jalankan Website**

Untuk melihat tampilan web saja, project bisa dibuka lewat Live Server atau static server lokal.

Contoh:

```txt
http://127.0.0.1:5500
```

Untuk mencoba fitur Generate CV yang membutuhkan Netlify Function, jalankan:

```bash
npx netlify dev
```

Website akan tersedia di:

```txt
http://localhost:8888
```

Jika membuka website lewat **Live Server / Five Server**, pastikan Netlify Dev tetap berjalan agar endpoint `/.netlify/functions/create-resume` bisa diakses.

### Environment Variable untuk Generate CV

Buat file `.env` dari template `.env.example`, lalu isi API key Useresume:

```env
USERESUME_API_KEY=your_useresume_api_key
```

Untuk deploy, isi environment variable yang sama di dashboard Netlify:

```txt
USERESUME_API_KEY
```

---

## Scripts

| Script | Deskripsi |
| --- | --- |
| `npm run dev` | Watch Tailwind CSS |
| `npm run build` | Build Tailwind CSS minified |
| `npm test` | Placeholder, belum ada test otomatis |

---

## Batasan Project

WorkSim dibuat untuk kebutuhan lomba desain web, sehingga prioritasnya adalah UI, UX, visual, responsiveness, dan storytelling produk. Beberapa fitur masih berupa simulasi:

- Login/register belum aman untuk produksi.
- Progress belum tersinkron antar perangkat.
- Career Simulation belum memproses submit secara nyata.
- AI Career Advisor belum memakai model AI eksternal.
- Skill Passport belum mengambil data dari database.
- Generate CV belum menjadi fitur produksi utama.

---

## Pengembangan Lanjutan

Beberapa ide yang dapat dikembangkan setelah versi lomba:

- Backend dan database user.
- Autentikasi sungguhan.
- Dashboard user.
- Skill Passport yang menghitung skill dari progress roadmap secara dinamis.
- Rekomendasi peningkatan skill berdasarkan skill terlemah.
- Pilihan target CV berdasarkan posisi atau tujuan lamaran.
- Career Simulation dengan penilaian otomatis.
- Integrasi AI untuk feedback project dan career guidance.
- PWA atau mode offline.

---

## Tim Pengembang

- Muhammad Naufal Rafa Al As'ad
- Aliezzar Wijaya
- Radhiyya Alea Akbar

---

## Lomba

Project ini dibuat untuk:

```txt
SEFEST 2026
Bidang: Web Design
Penyelenggara: Himpunan Mahasiswa Software Engineering Telkom University
```

---

## Lisensi

Project ini menggunakan lisensi ISC sesuai `package.json`.
