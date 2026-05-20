const roadmapData = [
  {
    main: {
      id: "internet",
      title: "Internet",
      desc: "Dasar dari bagaimana web bekerja secara teknis sebelum masuk ke backend.",
    },
    left: [],
    right: [
      { id: "dns", title: "DNS and how it works?" },
      { id: "http", title: "What is HTTP?" },
      { id: "hosting", title: "What is Hosting?" },
      { id: "browsers", title: "Browsers and how they work?" },
    ],
  },
  {
    main: {
      id: "os",
      title: "Sistem Operasi & Pengetahuan Umum",
      desc: "Memahami sistem operasi dan baris perintah sangat krusial untuk backend.",
    },
    left: [
      { id: "terminal", title: "Terminal Usage", badge: "green" },
      { id: "os_basics", title: "How OS works", badge: "green" },
      { id: "process", title: "Process Management", badge: "purple" },
      { id: "threads", title: "Threads & Concurrency", badge: "purple" },
    ],
    right: [],
  },
  {
    main: {
      id: "language",
      title: "Learn a Language",
      desc: "Pilih bahasa pemrograman utama yang akan Anda kuasai untuk membangun backend.",
    },
    left: [
      { id: "javascript", title: "JavaScript/Node.js", badge: "green" },
      { id: "python", title: "Python", badge: "purple" },
      { id: "go", title: "Go", badge: "purple" },
      { id: "java", title: "Java", badge: "purple" },
      { id: "csharp", title: "C#", badge: "purple" },
    ],
    right: [
      { id: "vcs_heading", title: "Version Control Systems", isRightHeading: true },
    ],
  },
  {
    main: {
      id: "vcs",
      title: "Version Control",
      desc: "Sistem untuk melacak dan mengelola perubahan kode seiring waktu.",
    },
    left: [],
    right: [{ id: "git", title: "Git", badge: "green" }],
  },
  {
    main: {
      id: "hosting",
      title: "VCS Hosting",
      desc: "Layanan cloud untuk menyimpan repository code dan berkolaborasi.",
    },
    left: [
      {
        id: "vcs_hosting_left",
        title: "GitLab & GitHub",
        isHorizontal: true,
        children: [
          { id: "gitlab", title: "GitLab", badge: "green" },
          { id: "github", title: "GitHub", badge: "green" },
        ],
      },
    ],
    right: [
      {
        id: "pkg_mgr",
        title: "Package Managers",
        isGridGroup: true,
        children: [
          { id: "npm", title: "npm", badge: "green" },
          { id: "yarn", title: "yarn", badge: "purple" },
          { id: "pnpm", title: "pnpm", badge: "green" },
        ],
      },
    ],
  },
  {
    main: {
      id: "databases",
      title: "Relational Databases",
      desc: "Database dengan skema terstruktur menggunakan SQL.",
    },
    left: [
      { id: "postgresql", title: "PostgreSQL", badge: "green" },
      { id: "mysql", title: "MySQL", badge: "green" },
      { id: "mariadb", title: "MariaDB", badge: "purple" },
    ],
    right: [
      { id: "nosql_heading", title: "NoSQL Databases", isRightHeading: true },
    ],
  },
  {
    main: {
      id: "nosql",
      title: "NoSQL Databases",
      desc: "Database non-relasional yang lebih fleksibel, cocok untuk struktur data dinamis.",
    },
    left: [],
    right: [
      {
        id: "nosql_group",
        isVerticalGroup: true,
        style: "yellow",
        children: [
          { id: "mongodb", title: "MongoDB", badge: "green" },
          { id: "redis", title: "Redis", badge: "green" },
          { id: "cassandra", title: "Cassandra", badge: "purple" },
        ],
      },
    ],
  },
  {
    main: { id: "project_spacer", title: "", type: "spacer" },
    rowClass: "-mt-12 mb-12",
    left: [
      {
        id: "beginner_projects",
        title: "Beginner Project Ideas",
        desc: "Buat REST API sederhana, sistem autentikasi, dan operasi CRUD dasar dengan database pilihan Anda.",
        isProjectBox: true,
      },
    ],
    right: [
      {
        id: "apis",
        title: "APIs",
        isGroupBottom: true,
        children: [
          { id: "rest", title: "REST", badge: "green" },
          { id: "graphql", title: "GraphQL", badge: "purple" },
          { id: "grpc", title: "gRPC", badge: "purple" },
        ],
      },
    ],
  },
  {
    main: {
      id: "caching",
      title: "Caching",
      desc: "Menyimpan data yang sering diakses di memori cepat untuk mengurangi beban database.",
    },
    left: [
      { id: "redis_cache", title: "Redis", badge: "green" },
      { id: "memcached", title: "Memcached", badge: "purple" },
    ],
    right: [
      { id: "sec_heading", title: "Web Security Knowledge", isRightHeading: true },
    ],
  },
  {
    main: {
      id: "security",
      title: "Web Security",
      desc: "Pahami prinsip-prinsip keamanan web yang krusial bagi backend.",
    },
    left: [],
    right: [
      {
        id: "sec_group",
        isVerticalGroup: true,
        style: "yellow",
        children: [
          { id: "hashing", title: "Hashing Algorithms", badge: "green" },
          { id: "cors", title: "CORS", badge: "green" },
          { id: "owasp", title: "OWASP Top 10", badge: "green" },
        ],
      },
    ],
  },
  {
    main: {
      id: "testing",
      title: "Testing",
      desc: "Menjamin kualitas kode backend melalui berbagai level pengujian.",
    },
    left: [
      { id: "unit_testing", title: "Unit Testing", badge: "green" },
      { id: "integration", title: "Integration Testing", badge: "green" },
      { id: "e2e", title: "E2E Testing", badge: "purple" },
    ],
    right: [
      { id: "ci_cd_heading", title: "CI/CD & Deployment", isRightHeading: true },
    ],
  },
  {
    main: {
      id: "cicd",
      title: "CI/CD",
      desc: "Otomatisasi pengujian dan deployment (Continuous Integration & Continuous Deployment).",
    },
    left: [
      { id: "github_actions", title: "GitHub Actions", badge: "green" },
      { id: "gitlab_ci", title: "GitLab CI", badge: "purple" },
    ],
    right: [
      {
        id: "deploy_group",
        isVerticalGroup: true,
        style: "yellow",
        children: [
          { id: "docker", title: "Docker", badge: "green" },
          { id: "k8s", title: "Kubernetes", badge: "purple" },
          { id: "aws", title: "AWS / Cloud", badge: "purple" },
        ],
      },
    ],
  },
  {
    main: {
      id: "adv_projects",
      type: "project-box",
      title: "Advanced Project Ideas",
      desc: "Pada tahap ini, Anda diharapkan mampu membuat sistem backend berskala besar. Bangun arsitektur microservices, antrean pesan, dan optimasi database.",
    },
    left: [],
    right: [],
  },
  {
    main: {
      id: "continue_learning",
      type: "footer-box",
      title: "Continue Learning with following relevant tracks",
    },
    left: [],
    right: [],
  },
];



const materiData = {
  internet: `
    <p>Sebelum menulis kode backend, Anda harus memahami medan tempat kode Anda berjalan: <strong>Internet</strong>.</p>
    <p>Backend bukan sekadar menulis program, tapi menulis program yang merespons permintaan dari seluruh dunia melalui jaringan global.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Client-Server Model:</strong> Klien (browser/aplikasi) mengirim Request, Backend (server) memproses dan mengembalikan Response.</li>
      <li><strong>IP Address:</strong> Identitas numerik setiap komputer di internet.</li>
      <li><strong>Packets & Routing:</strong> Data tidak dikirim utuh, melainkan dipecah menjadi paket-paket kecil yang dirakit kembali di tujuan.</li>
    </ul>
  `,
  dns: `
    <p><strong>Domain Name System (DNS)</strong> adalah "buku telepon" internet.</p>
    <p>Komputer berkomunikasi menggunakan angka (IP Address seperti <code>192.168.1.1</code>), sedangkan manusia lebih mudah mengingat nama (seperti <code>google.com</code>).</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>A Record:</strong> Memetakan domain ke IPv4.</li>
      <li><strong>CNAME:</strong> Memetakan domain ke domain lain (alias).</li>
      <li><strong>Proses Resolusi:</strong> Saat user mengetik URL, browser bertanya ke DNS Resolver, lalu ke Root Server, TLD Server, hingga Name Server spesifik untuk mendapatkan IP.</li>
    </ul>
  `,
  http: `
    <p><strong>HTTP (Hypertext Transfer Protocol)</strong> adalah aturan baku komunikasi data di web.</p>
    <p>Sebagai Backend Developer, Anda akan berinteraksi dengan HTTP setiap hari saat membuat API.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>HTTP Methods:</strong> <code>GET</code> (mengambil), <code>POST</code> (membuat), <code>PUT/PATCH</code> (memperbarui), <code>DELETE</code> (menghapus).</li>
      <li><strong>Status Codes:</strong> <code>200 OK</code> (Sukses), <code>400 Bad Request</code> (Error dari Klien), <code>404 Not Found</code>, <code>500 Internal Server Error</code> (Error di Backend).</li>
      <li><strong>Headers:</strong> Metadata tambahan seperti format data (<code>Content-Type: application/json</code>) atau autentikasi.</li>
    </ul>
  `,
  browsers: `
    <p>Meski browser adalah ranah Frontend, Backend wajib tahu bagaimana browser bekerja.</p>
    <p>Kenapa? Karena browser adalah konsumen utama dari API Anda.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>CORS (Cross-Origin Resource Sharing):</strong> Mekanisme keamanan browser yang sering memblokir API jika Backend tidak dikonfigurasi dengan benar.</li>
      <li><strong>Cookies & Storage:</strong> Backend dapat memerintahkan browser untuk menyimpan Token Autentikasi (JWT/Session) melalui header <code>Set-Cookie</code>.</li>
      <li><strong>Caching:</strong> Backend menggunakan header (seperti <code>Cache-Control</code>) untuk memberi tahu browser kapan harus menggunakan data lokal atau meminta data baru.</li>
    </ul>
  `,
  hosting: `
    <p><strong>Hosting</strong> adalah tempat Anda menaruh aplikasi backend agar hidup dan bisa diakses 24/7 di internet.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Shared Hosting:</strong> Murah tapi resource dibagi dengan orang lain (jarang dipakai untuk backend modern).</li>
      <li><strong>VPS (Virtual Private Server):</strong> Anda mendapat satu "mesin virtual" utuh (misal di DigitalOcean atau Linode). Anda bebas menginstal OS dan database sendiri.</li>
      <li><strong>PaaS (Platform as a Service):</strong> Layanan seperti Heroku, Vercel, atau Render di mana Anda tinggal upload kode, dan mereka yang mengurus servernya.</li>
    </ul>
  `,
  os: `
    <p>Backend Developer tidak bisa lepas dari <strong>Sistem Operasi (OS)</strong>, khususnya Linux.</p>
    <p>Sebagian besar server di dunia berjalan menggunakan Linux (Ubuntu, Debian, CentOS, dsb). Memahami OS akan sangat membantu saat Anda men-deploy atau mendebug aplikasi.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>I/O (Input/Output):</strong> Bagaimana aplikasi membaca file, menulis log, dan berkomunikasi dengan network.</li>
      <li><strong>Memory Management:</strong> Mengerti apa itu RAM, Swap, dan bagaimana mencegah aplikasi backend Anda kehabisan memori (Out of Memory).</li>
    </ul>
  `,
  terminal: `
    <p><strong>Terminal (CLI)</strong> adalah cara utama berinteraksi dengan server, karena server biasanya tidak memiliki antarmuka visual (GUI).</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Navigasi:</strong> <code>cd</code>, <code>ls</code>, <code>pwd</code>.</li>
      <li><strong>Manajemen File & Folder:</strong> <code>mkdir</code>, <code>rm</code>, <code>cp</code>, <code>mv</code>.</li>
      <li><strong>Membaca File Log:</strong> <code>cat</code> (membaca keseluruhan), <code>tail -f</code> (membaca log secara real-time), <code>grep</code> (mencari kata spesifik di dalam file).</li>
      <li><strong>Networking:</strong> <code>curl</code> (mengetes API dari terminal), <code>ping</code>.</li>
    </ul>
  `,
  os_basics: `
    <p>Pemahaman dasar OS membantu Anda menulis kode yang lebih efisien dan aman.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>File Permissions:</strong> Di Linux, ada hak akses Read (r), Write (w), Execute (x). Backend harus dikonfigurasi agar tidak sembarang orang bisa mengeksekusi file berbahaya.</li>
      <li><strong>Environment Variables:</strong> Cara OS menyimpan konfigurasi rahasia (seperti Password Database) agar tidak ditulis langsung (hardcode) ke dalam file source code.</li>
    </ul>
  `,
  process: `
    <p>Saat Anda menjalankan aplikasi backend (misal <code>node server.js</code>), OS membuat sebuah <strong>Process</strong>.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Process ID (PID):</strong> Identitas unik setiap program yang berjalan.</li>
      <li><strong>Background Process:</strong> Menjalankan aplikasi di latar belakang agar tidak mati saat terminal ditutup (sering dikelola menggunakan tool seperti <code>systemd</code> atau <code>PM2</code>).</li>
      <li><strong>Monitoring:</strong> Menggunakan perintah <code>top</code> atau <code>htop</code> untuk melihat process mana yang memakan CPU atau RAM tertinggi.</li>
    </ul>
  `,
  threads: `
    <p><strong>Threads</strong> adalah pekerja (worker) di dalam sebuah Process.</p>
    <p>Pemahaman concurrency sangat penting untuk backend berskala besar agar bisa menangani ribuan request secara bersamaan.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Multi-threading:</strong> Satu process menjalankan banyak pekerjaan secara paralel. (Sering digunakan di Java dan C#).</li>
      <li><strong>Event-Loop / Asynchronous:</strong> Menangani banyak request dalam satu thread tanpa memblokir pekerjaan lain. (Sangat populer di Node.js).</li>
      <li><strong>Race Conditions:</strong> Bug yang terjadi ketika dua thread mencoba mengubah data yang sama di waktu yang sama.</li>
    </ul>
  `,
  language: `
    <p>Backend butuh bahasa pemrograman sebagai "otaknya". Anda tidak perlu belajar semuanya, <strong>pilih satu dan kuasai secara mendalam</strong>.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Pilih berdasarkan ekosistem (library/framework yang tersedia).</li>
      <li>Pilih berdasarkan kecepatan pengembangan vs performa (misal Python sangat cepat ditulis, tapi Go lebih cepat dieksekusi).</li>
      <li>Pelajari konsep OOP (Object Oriented Programming) atau Functional Programming sesuai bahasa yang dipilih.</li>
    </ul>
  `,
  javascript: `
    <p><strong>JavaScript (Node.js)</strong> sangat populer karena Anda bisa menggunakan bahasa yang sama untuk Frontend dan Backend.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Event-Driven & Non-Blocking:</strong> Sangat efisien untuk I/O (membaca database, request ke API eksternal), cocok untuk aplikasi Real-time seperti Chat atau Game.</li>
      <li><strong>Framework Populer:</strong> Express.js, NestJS, Fastify.</li>
      <li><strong>Kelemahan:</strong> Kurang optimal untuk tugas-tugas komputasi berat (seperti rendering video) karena single-threaded.</li>
    </ul>
  `,
  python: `
    <p><strong>Python</strong> terkenal dengan sintaksnya yang bersih, mudah dibaca, dan pengembangan yang sangat cepat.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Data & AI:</strong> Pilihan mutlak jika backend Anda banyak berurusan dengan Machine Learning, Data Science, atau AI.</li>
      <li><strong>Framework Populer:</strong> Django (lengkap & terstruktur), FastAPI (modern & super cepat), Flask (minimalis).</li>
      <li><strong>Kelemahan:</strong> Kecepatan eksekusi yang relatif lebih lambat dibanding bahasa kompilasi seperti Go atau Java.</li>
    </ul>
  `,
  go: `
    <p><strong>Go (Golang)</strong> diciptakan oleh Google untuk mengatasi tantangan server berskala masif (cloud-native).</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Compiled & Fast:</strong> Kode Go di-compile langsung menjadi machine code, membuatnya sangat cepat (menyamai C++ atau Rust) dengan penggunaan RAM yang sangat kecil.</li>
      <li><strong>Goroutines:</strong> Fitur bawaan yang membuat penanganan concurrency (jutaan tugas bersamaan) menjadi sangat mudah dan ringan.</li>
      <li><strong>Populer untuk:</strong> Microservices, sistem DevOps (Docker/Kubernetes ditulis dengan Go), dan API berkinerja tinggi.</li>
    </ul>
  `,
  java: `
    <p><strong>Java</strong> adalah rajanya aplikasi Enterprise (perbankan, e-commerce raksasa, korporasi).</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Stabilitas & Skalabilitas:</strong> Sangat strongly-typed dan tangguh. Kode Java berjalan di atas JVM (Java Virtual Machine) yang optimal.</li>
      <li><strong>Framework Populer:</strong> Spring Boot (mendominasi pasar enterprise).</li>
      <li><strong>Kelebihan:</strong> Lowongan kerja yang melimpah dan bayaran tinggi di sektor korporat.</li>
    </ul>
  `,
  csharp: `
    <p><strong>C# (dengan ekosistem .NET)</strong> dari Microsoft adalah saingan utama Java di dunia Enterprise, namun kini sangat modern dan cross-platform.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>.NET Core:</strong> Sangat cepat, modern, dan bisa dijalankan di Linux maupun Windows.</li>
      <li><strong>Ekosistem Lengkap:</strong> Entity Framework adalah salah satu ORM (alat komunikasi Database) terbaik yang ada di industri.</li>
      <li><strong>Populer untuk:</strong> Aplikasi enterprise, Game Backend (Unity), dan aplikasi cloud (terutama di ekosistem Azure).</li>
    </ul>
  `,
  vcs_heading: `
    <p>Di dunia profesional, Anda tidak pernah coding sendirian. <strong>Version Control System (VCS)</strong> adalah alat wajib.</p>
    <p>VCS merekam setiap perubahan kode baris-demi-baris, siapa yang mengubah, dan kapan. Memungkinkan tim untuk kembali ke versi kode sebelumnya jika terjadi error fatal.</p>
  `,
  vcs: `
    <p>VCS adalah fondasi kerja kolaboratif.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Menghindari penggunaan folder "Final_V1", "Final_V2", "Fix_Beneran_Final".</li>
      <li><strong>Branching:</strong> Membuat "cabang" ruang kerja sendiri untuk mengembangkan fitur tanpa mengganggu aplikasi utama yang sedang live.</li>
    </ul>
  `,
  git: `
    <p><strong>Git</strong> adalah VCS paling mendominasi di dunia.</p>
    <p>Perintah yang <strong>wajib</strong> Anda kuasai di luar kepala:</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><code>git add</code> & <code>git commit</code>: Menyimpan perubahan secara lokal.</li>
      <li><code>git push</code> & <code>git pull</code>: Sinkronisasi dengan server (GitHub/GitLab).</li>
      <li><code>git branch</code> & <code>git checkout</code>: Berpindah antar cabang fitur.</li>
      <li><code>git merge</code>: Menggabungkan hasil kerja ke cabang utama (main).</li>
    </ul>
  `,
  vcs_hosting_left: `
    <p>Git bekerja secara lokal di laptop Anda. Agar tim lain bisa melihat kode Anda, Anda perlu meng-uploadnya ke <strong>VCS Hosting (Cloud)</strong>.</p>
    <p>Selain sebagai tempat penyimpanan, platform ini menawarkan fitur manajemen proyek, review kode (Pull Request), dan otomatisasi (CI/CD).</p>
  `,
  gitlab: `
    <p><strong>GitLab</strong> sangat populer di kalangan Enterprise dan perusahaan yang menginginkan solusi "All-in-One".</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Kelebihan Utama:</strong> Fitur CI/CD bawaan yang sangat terintegrasi dan mudah disiapkan menggunakan file <code>.gitlab-ci.yml</code>.</li>
      <li><strong>Self-Hosted:</strong> Perusahaan bisa meng-install GitLab di server internal mereka sendiri demi privasi maksimal.</li>
    </ul>
  `,
  github: `
    <p><strong>GitHub</strong> (dimiliki oleh Microsoft) adalah platform VCS hosting terbesar di dunia, rumah bagi hampir semua proyek Open Source.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>GitHub Actions:</strong> Alat otomatisasi yang kini sangat mendominasi untuk melakukan test dan deploy kode secara otomatis.</li>
      <li><strong>Portofolio:</strong> Profil GitHub yang aktif dengan kontribusi hijau adalah "CV kedua" yang sangat kuat bagi developer.</li>
    </ul>
  `,
  pkg_mgr: `
    <p>Aplikasi Anda tidak mungkin dibangun dari nol. Anda akan menggunakan fungsi yang sudah dibuat orang lain (libraries).</p>
    <p><strong>Package Managers</strong> adalah alat untuk mengunduh, mengupdate, dan mengatur versi dari library-library pihak ketiga tersebut agar tidak bentrok.</p>
  `,
  npm: `
    <p><strong>npm (Node Package Manager)</strong> adalah package manager bawaan saat Anda meng-install Node.js.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Memiliki registri (koleksi library) terbesar di seluruh dunia programming.</li>
      <li>Konfigurasi disimpan di file <code>package.json</code>.</li>
      <li>Menggunakan perintah <code>npm install [nama-paket]</code>.</li>
    </ul>
  `,
  yarn: `
    <p><strong>Yarn</strong> diciptakan oleh Facebook untuk mengatasi masalah performa dan keamanan pada versi npm terdahulu.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Lebih cepat dalam proses instalasi berkat fitur caching (tidak mengunduh ulang paket yang sama).</li>
      <li>Sintaks yang lebih rapi (misal: <code>yarn add [nama-paket]</code>).</li>
    </ul>
  `,
  pnpm: `
    <p><strong>pnpm (Performant npm)</strong> adalah package manager modern yang menargetkan efisiensi ruang Hard Drive.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>npm/yarn biasanya membuat folder <code>node_modules</code> yang besar di setiap proyek.</li>
      <li><strong>pnpm</strong> menggunakan strategi <em>global store</em> dan <em>symlink</em>, sehingga jika Anda punya 10 proyek dengan library yang sama, library itu hanya disimpan 1 kali di Hard Drive. Sangat hemat dan cepat.</li>
    </ul>
  `,
  databases: `
    <p>Data adalah jantung dari setiap aplikasi. <strong>Relational Database (RDBMS)</strong> adalah fondasi penyimpanan data berbasis tabel terstruktur (seperti Excel).</p>
    <p>Konsep yang wajib dikuasai:</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>SQL (Structured Query Language):</strong> Bahasa untuk mengambil/memanipulasi data (SELECT, JOIN, GROUP BY).</li>
      <li><strong>ACID:</strong> (Atomicity, Consistency, Isolation, Durability) - Jaminan bahwa transaksi data tidak akan rusak atau setengah jadi.</li>
      <li><strong>Indexing:</strong> Membuat pencarian data yang tadinya butuh 10 detik menjadi 0.01 detik.</li>
    </ul>
  `,
  postgresql: `
    <p><strong>PostgreSQL</strong> adalah database RDBMS Open Source paling canggih dan sangat digemari komunitas modern.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Sangat ketat terhadap standar SQL.</li>
      <li>Mendukung penyimpanan data terstruktur fleksibel seperti JSON (JSONB), sehingga bisa berfungsi sebagian seperti NoSQL.</li>
      <li>Memiliki ekstensi luar biasa seperti PostGIS untuk aplikasi berbasis peta/lokasi.</li>
    </ul>
  `,
  mysql: `
    <p><strong>MySQL</strong> adalah RDBMS yang paling banyak digunakan di seluruh dunia, terutama untuk web konvensional.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Sangat cepat untuk operasi baca (read-heavy operations).</li>
      <li>Ekosistem dukungan sangat luas (standar dari stack LAMP - Linux, Apache, MySQL, PHP).</li>
      <li>Mudah dipelajari dan disiapkan untuk pemula.</li>
    </ul>
  `,
  mariadb: `
    <p><strong>MariaDB</strong> adalah pecahan (fork) langsung dari MySQL, diciptakan oleh pembuat asli MySQL setelah MySQL diakuisisi oleh Oracle.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>100% kompatibel dengan MySQL (Anda bisa mengganti MySQL dengan MariaDB tanpa mengubah kode aplikasi).</li>
      <li>Umumnya memiliki engine storage yang lebih cepat dan fitur keamanan yang lebih modern dibanding MySQL bawaan.</li>
    </ul>
  `,
  nosql_heading: `
    <p>Saat data tidak terstruktur secara kaku, atau membutuhkan performa/skalabilitas masif yang sulit dicapai RDBMS, Backend Developer menggunakan <strong>NoSQL</strong>.</p>
  `,
  nosql: `
    <p><strong>NoSQL (Not Only SQL)</strong> tidak menggunakan struktur tabel/baris/kolom tradisional.</p>
    <p>Berbagai jenis NoSQL (Setiap jenis punya kegunaan spesifik):</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Document Store:</strong> Menyimpan data mirip objek JSON (misal: MongoDB).</li>
      <li><strong>Key-Value Store:</strong> Sangat cepat untuk caching/sesi (misal: Redis).</li>
      <li><strong>Wide-Column:</strong> Untuk data timeseries/log raksasa (misal: Cassandra).</li>
      <li><strong>Graph:</strong> Untuk data yang sangat terhubung relasinya seperti Social Network (misal: Neo4j).</li>
    </ul>
  `,
  nosql_group: `
    <p>Teknologi-teknologi utama NoSQL di industri saat ini.</p>
  `,
  mongodb: `
    <p><strong>MongoDB</strong> adalah Document Database paling populer.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Data disimpan dalam format BSON (mirip JSON di JavaScript).</li>
      <li><strong>Kelebihan:</strong> Sangat fleksibel. Jika Anda ingin menambah kolom baru, tidak perlu migrasi skema tabel (seperti di SQL).</li>
      <li>Sangat cocok dipadukan dengan Node.js (disebut MERN Stack).</li>
    </ul>
  `,
  redis: `
    <p><strong>Redis</strong> adalah database Key-Value in-memory. Artinya data disimpan di RAM, bukan di Hard Drive.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Kecepatan:</strong> Sangat ekstrem (merespons dalam hitungan mikrodetik).</li>
      <li><strong>Guna Utama:</strong> Bukan sebagai database utama, melainkan sebagai Cache (menyimpan hasil query yang berat), menyimpan Sesi Login, atau sistem Antrean (Message Queue/Pub-Sub).</li>
    </ul>
  `,
  cassandra: `
    <p><strong>Apache Cassandra</strong> adalah database untuk Skala Masif yang diciptakan oleh Facebook.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Desain:</strong> Masterless. Tidak ada satu titik utama. Jika 1 server mati dari total 50 server, database tetap hidup tanpa interupsi.</li>
      <li>Sangat cocok untuk data berjumlah terabyte-petabyte dengan kecepatan 'Tulis' (Write) yang gila-gilaan, seperti pencatatan sensor IoT atau tracking aktivitas pengguna.</li>
    </ul>
  `,
  apis: `
    <p><strong>API (Application Programming Interface)</strong> adalah cara agar aplikasi frontend (web/mobile) bisa 'berbicara' dengan aplikasi backend Anda.</p>
    <p>Tugas utama Backend adalah mendesain API yang aman, responsif, dan mudah digunakan oleh tim Frontend.</p>
  `,
  rest: `
    <p><strong>REST (Representational State Transfer)</strong> adalah standar arsitektur API yang paling umum.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Menggunakan URL sebagai "Resource" (misal: <code>/api/users</code>).</li>
      <li>Menggunakan standar HTTP (GET untuk membaca, POST untuk membuat, PUT untuk update, DELETE untuk menghapus).</li>
      <li>Umumnya mengembalikan data dalam format JSON.</li>
    </ul>
  `,
  graphql: `
    <p><strong>GraphQL</strong> diciptakan Facebook untuk memecahkan kelemahan REST.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Masalah REST:</strong> Klien terkadang menerima data terlalu banyak (Over-fetching) atau kurang sehingga harus memanggil API lain (Under-fetching).</li>
      <li><strong>Solusi GraphQL:</strong> Klien mengirim struktur (query) berisi <em>persis data apa yang mereka minta</em>. Backend hanya merespons sesuai struktur tersebut dari satu endpoint tunggal.</li>
    </ul>
  `,
  grpc: `
    <p><strong>gRPC</strong> adalah framework API performa tinggi dari Google.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Menggunakan HTTP/2 dan <strong>Protocol Buffers (Protobuf)</strong> untuk kompresi data biner (bukan JSON yang berupa teks).</li>
      <li>Jauh lebih cepat dan hemat bandwidth dibanding REST.</li>
      <li>Biasanya digunakan untuk komunikasi internal antar backend server (Microservices), bukan untuk frontend publik.</li>
    </ul>
  `,
  caching: `
    <p><strong>Caching</strong> adalah trik menaruh data yang paling sering diminta di tempat yang cepat diakses (RAM), sehingga backend tidak perlu menghitung atau membaca ulang dari Database yang lambat (Hard Drive).</p>
    <p>Ini adalah kunci utama men-scale aplikasi dari menangani 100 request/detik menjadi 10.000 request/detik.</p>
  `,
  redis_cache: `
    <p><strong>Redis</strong> (sekali lagi) adalah pilihan de facto untuk caching modern.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Mendukung struktur data yang kompleks seperti Lists, Sets, dan Hashes di dalam memori.</li>
      <li>Mendukung persisten memori, jadi jika server mati, cache tidak sepenuhnya hilang.</li>
    </ul>
  `,
  memcached: `
    <p><strong>Memcached</strong> adalah pendahulu Redis.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Sangat cepat, ringan, dan spesifik hanya untuk Key-Value caching string biasa.</li>
      <li>Lebih minim fitur dibanding Redis (misal tidak punya Pub/Sub atau penyimpanan disk). Di industri saat ini, sebagian besar orang lebih memilih Redis.</li>
    </ul>
  `,
  sec_heading: `
    <p>Sebagai Backend Developer, Anda adalah benteng terakhir aplikasi. Jika aplikasi diretas, data jutaan user bocor, itu tanggung jawab backend.</p>
  `,
  security: `
    <p>Menerapkan prinsip keamanan sejak hari pertama (Security by Design).</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Autentikasi:</strong> Memastikan siapa usernya (Login/JWT/OAuth).</li>
      <li><strong>Otorisasi:</strong> Memastikan user tersebut boleh melakukan aksi tersebut (Admin vs User biasa).</li>
      <li>Validasi setiap data input dari Klien! (Jangan pernah percaya data dari Klien).</li>
    </ul>
  `,
  sec_group: `
    <p>Praktik utama Keamanan Web.</p>
  `,
  hashing: `
    <p><strong>Hashing</strong> mengubah kata sandi (seperti "rahasia123") menjadi string acak yang tidak bisa dikembalikan ke bentuk asal.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Penting:</strong> Jika database bocor, hacker tetap tidak tahu password aslinya.</li>
      <li>Gunakan algoritma kuat seperti <strong>Bcrypt</strong> atau <strong>Argon2</strong>.</li>
      <li>Tambahkan <em>Salt</em> (string acak pelengkap) agar serangan kamus/rainbow tables gagal.</li>
    </ul>
  `,
  cors: `
    <p><strong>CORS (Cross-Origin Resource Sharing)</strong> menentukan siapa yang boleh memanggil API Anda.</p>
    <p>Secara default, browser memblokir request API dari nama domain yang berbeda dengan server (sebagai perlindungan dari serangan XSS). Anda harus mengatur Header CORS di backend untuk mengizinkan domain Frontend milik Anda saja (misal: <code>https://my-app.com</code>).</p>
  `,
  owasp: `
    <p><strong>OWASP Top 10</strong> adalah standar industri untuk risiko keamanan web paling kritis.</p>
    <p>Yang wajib dipelajari backend:</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>SQL Injection:</strong> Hacker memasukkan kode SQL lewat form input untuk menghapus/membaca database Anda. (Solusi: Gunakan ORM atau Parameterized Queries).</li>
      <li><strong>Broken Access Control:</strong> User biasa bisa mengakses URL Admin.</li>
      <li><strong>XSS (Cross Site Scripting):</strong> Hacker menyuntikkan script JS jahat ke aplikasi Anda.</li>
    </ul>
  `,
  testing: `
    <p>Sistem backend yang besar tidak mungkin dites secara manual (mengklik tombol satu-satu). Anda perlu <strong>Automated Testing</strong>.</p>
    <p>Testing menjaga agar fitur lama tidak rusak ketika Anda menambahkan kode baru di masa depan.</p>
  `,
  unit_testing: `
    <p><strong>Unit Testing</strong> adalah menguji bagian terkecil dari aplikasi (sebuah fungsi/method) secara terisolasi.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Sangat cepat dieksekusi (ribuan test dalam beberapa detik).</li>
      <li>Contoh: Fungsi <code>hitungPajak(1000)</code> harus selalu mengembalikan <code>1100</code>.</li>
      <li>Library populer: Jest/Mocha (Node.js), PyTest (Python), JUnit (Java).</li>
    </ul>
  `,
  integration: `
    <p><strong>Integration Testing</strong> menguji apakah unit-unit yang terpisah dapat bekerja sama dengan baik.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Lebih lambat dari Unit Test, karena seringkali terhubung langsung ke Database sungguhan (atau Test Database) dan API eksternal.</li>
      <li>Contoh: Menguji API <code>/register</code>, apakah data benar-benar tersimpan ke Database Test.</li>
    </ul>
  `,
  e2e: `
    <p><strong>End-to-End (E2E) Testing</strong> menguji keseluruhan alur aplikasi dari perspektif pengguna sungguhan.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Alat seperti Cypress atau Playwright akan mengontrol browser secara otomatis, mengklik tombol, mengisi form, dan memverifikasi respon API.</li>
      <li>Paling lambat dan paling kompleks, namun memberikan jaminan kualitas tertinggi.</li>
    </ul>
  `,
  ci_cd_heading: `
    <p><strong>CI/CD</strong> mengubah proses deployment dari yang asalnya manual via FTP, menjadi sistem otomatis yang berjalan dengan sendirinya layaknya pabrik perakitan mobil.</p>
  `,
  cicd: `
    <p><strong>Continuous Integration (CI):</strong> Setiap kali Anda meng-push kode ke repositori, server CI otomatis men-compile dan menjalankan seluruh Testing. Jika test gagal, kode ditolak masuk ke cabang utama.</p>
    <p><strong>Continuous Deployment (CD):</strong> Jika CI sukses, server CD otomatis men-deploy (memindahkan) aplikasi ke server production / live saat itu juga tanpa intervensi manual.</p>
  `,
  github_actions: `
    <p>Alat CI/CD modern bawaan GitHub.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Sangat populer karena gratis untuk project open source dan langsung terintegrasi dengan repo GitHub Anda.</li>
      <li>Konfigurasi menggunakan format YAML (misal <code>.github/workflows/deploy.yml</code>).</li>
    </ul>
  `,
  gitlab_ci: `
    <p>CI/CD bawaan GitLab.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Dikenal lebih awal dan sangat tangguh untuk perusahaan skala enterprise.</li>
      <li>Menyediakan "Runners" yang kuat, dan visualisasi pipeline (langkah-langkah build-test-deploy) yang sangat intuitif.</li>
    </ul>
  `,
  deploy_group: `
    <p>Di mana dan bagaimana aplikasi backend modern di-deploy (diterbitkan ke publik).</p>
  `,
  docker: `
    <p><strong>Docker</strong> adalah revolusi di dunia deployment menggunakan <em>Container</em>.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li><strong>Masalah lama:</strong> "Kode ini berjalan lancar di laptop saya, tapi kok error di server ya?". (Masalah versi OS, versi Node, dll).</li>
      <li><strong>Solusi Docker:</strong> Membungkus kode, versi sistem, library, dalam satu paket terisolasi (Image) yang dijamin akan berjalan identik di laptop maupun di server manapun.</li>
    </ul>
  `,
  k8s: `
    <p><strong>Kubernetes (K8s)</strong> adalah konduktor orkestra untuk kontainer Docker.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Jika Anda punya aplikasi seperti Gojek/Tokopedia, Anda mungkin butuh menjalankan 100 kontainer Docker bersamaan.</li>
      <li>K8s otomatis mengatur agar jika trafik sedang tinggi, kontainer ditambah (Scale Up). Jika ada server mati, K8s memindahkan kontainer ke server lain secara instan (Self-healing).</li>
    </ul>
  `,
  aws: `
    <p><strong>AWS (Amazon Web Services)</strong> adalah platform Cloud Computing raksasa.</p>
    <ul class="list-disc pl-5 space-y-2 mt-3">
      <li>Daripada Anda membeli komputer fisik untuk server, Anda "menyewa" resource komputasi milik Amazon per detik.</li>
      <li>Layanan utama yang wajib diketahui: <strong>EC2</strong> (menyewa virtual server), <strong>S3</strong> (menyimpan file/gambar massal), <strong>RDS</strong> (managed Database SQL siap pakai).</li>
    </ul>
  `
};

const exampleData = {
  javascript: `// Contoh pembuatan server Express.js sederhana
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ message: 'Mengambil semua data pengguna' });
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: \\\`Pengguna \\\${name} berhasil dibuat\\\` });
});

app.listen(port, () => {
  console.log(\\\`Server berjalan di http://localhost:\\\${port}\\\`);
});`,
  postgresql: `-- Contoh pembuatan tabel dan query SQL dasar
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email) 
VALUES ('johndoe', 'john@example.com');

SELECT * FROM users WHERE username = 'johndoe';`,
  docker: `# Contoh Dockerfile untuk aplikasi Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port and start app
EXPOSE 3000
CMD [ "node", "server.js" ]`,
  rest: `// Contoh standar response JSON dari RESTful API
// GET /api/v1/products/123

{
  "status": "success",
  "data": {
    "product": {
      "id": 123,
      "name": "Wireless Mouse",
      "price": 25.99,
      "category": "Electronics",
      "inStock": true
    }
  }
}`
};

function renderRoadmap() {
  const container = document.getElementById("nodes-container");
  let html = "";

  function getBadgeHtml(badge, align, id) {
    if (!badge || !id) return "";
    const bg = badge === "purple" ? "bg-[#7c3aed]" : "bg-[#15803d]";
    const pos = align === "left" ? "-left-3" : "-right-3";
    return `
        <div id="badge-${id}" class="hidden opacity-0 scale-50 transition-all absolute top-1/2 -translate-y-1/2 ${pos} w-5.5 h-5.5 rounded-full ${bg} text-white flex items-center justify-center text-[11px] shadow-sm z-30 ring-[2.5px] ring-white dark:ring-slate-900">
          <i class="fa-solid fa-check"></i>
        </div>
     `;
  }

  roadmapData.forEach((row, index) => {
    const hasLeft = row.left && row.left.length > 0;
    const hasRight = row.right && row.right.length > 0;

    let leftHtml =
      '<div class="flex-1 flex justify-end pr-8 sm:pr-14 relative">';
    if (hasLeft) {
      let subNodesHtml = row.left
        .map((node) => {
          if (node.isProjectBox) {
            return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" data-solid="true"
                 class="sub-node bg-white border-2 border-slate-100 p-5 rounded-xl shadow-sm w-70 text-left relative z-20 dark:bg-slate-800 dark:border-slate-700">
              <p class="text-slate-800 dark:text-slate-200 text-sm mb-4 font-medium leading-relaxed">
                ${node.desc}
              </p>
              <button onclick="openPanel('${node.id}', '${node.title}', 'Project')"
                      class="w-full bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-lg hover:bg-slate-300 transition-colors text-sm dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                ${node.title}
              </button>
            </div>
           `;
          } else if (node.isTestingRow) {
            return `
            <div class="relative z-20 w-60 flex justify-end">
              <button id="sub-node-testing" data-parent="${row.main.id}" data-side="left" data-solid="true"
                      onclick="openPanel('testing', 'Testing', 'Kategori')"
                      class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-60 text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
                Testing
              </button>
            </div>
           `;
          } else if (node.isLeftHeading) {
            return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" data-solid="true"
                    onclick="openPanel('${node.id}', '${node.title}', 'Kategori')"
                    class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-60 text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
              ${node.title}
            </button>
           `;
          } else if (node.isSolidBlue) {
            return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left"
                    onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                    class="sub-node bg-brand-500 outline-2 outline-offset-2 outline-brand-500 text-white font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:bg-[#254ab3] hover:-translate-y-0.5 transition-all w-60 text-center text-[0.95rem] relative z-20">
              ${node.title}
            </button>
           `;
          } else if (node.isHorizontal) {
            let childrenHtml = node.children
              .map((child) => {
                const badgeHtml = getBadgeHtml(child.badge, "right", child.id);
                return `
             <div class="relative flex-1">
               ${badgeHtml}
               <button id="child-node-${child.id}" data-parent="${node.id}"
                       onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                       class="bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-3 px-3 rounded-[14px] shadow-sm hover:border-brand-500 hover:text-brand-600 transition-all text-[0.8rem] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 w-full text-center relative z-20">
                 ${child.title}
               </button>
             </div>
             `;
              })
              .join("");
            return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" class="sub-node flex gap-3 relative z-20 w-60 justify-end">
              ${childrenHtml}
            </div>
           `;
          } else if (node.isVerticalGroup) {
            let childrenHtml = node.children
              .map((child) => {
                const badgeHtml = getBadgeHtml(child.badge, "left", child.id);
                return `
             <div class="relative">
               ${badgeHtml}
               <button id="child-node-${child.id}" data-parent="${node.id}"
                       onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                       class="bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.85rem] relative z-20 w-full">
                 ${child.title}
               </button>
             </div>
             `;
              })
              .join("");
            return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" class="flex flex-col gap-3 relative z-20 w-60">
               ${childrenHtml}
             </div>
           `;
          } else {
            const badgeHtml = getBadgeHtml(node.badge, "left", node.id);
            return `
            <div class="relative">
              ${badgeHtml}
              <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left"
                      onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                      class="sub-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 hover:shadow-md transition-all w-60 text-right text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 relative z-20">
                ${node.title}
              </button>
            </div>
           `;
          }
        })
        .join("");

      leftHtml += `
        <div class="flex flex-col gap-4 items-end justify-center">
          ${subNodesHtml}
        </div>
      `;
    }
    leftHtml += "</div>";

    let rightHtml =
      '<div class="flex-1 flex justify-start pl-8 sm:pl-14 relative">';
    if (hasRight) {
      let subNodesHtml = row.right
        .map((node) => {
          if (node.isTextNode) {
            return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true"
                 class="sub-node w-60 text-center text-[1.05rem] font-bold text-slate-800 dark:text-slate-200 relative z-20 py-3 bg-transparent flex justify-center items-center">
              ${node.title}
            </div>
           `;
          } else if (node.isRightHeading) {
            return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true"
                    onclick="openPanel('${node.id}', '${node.title}', 'Kategori')"
                    class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-60 text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
              ${node.title}
            </button>
           `;
          } else if (node.isVerticalGroup) {
            let childrenHtml = node.children
              .map((child) => {
                const badgeHtml = getBadgeHtml(child.badge, "right", child.id);
                return `
             <div class="relative">
               ${badgeHtml}
               <button id="child-node-${child.id}" data-parent="${node.id}"
                       onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                       class="bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.85rem] relative z-20 w-full pointer-events-auto">
                 ${child.title}
               </button>
             </div>
             `;
              })
              .join("");
            return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true" class="sub-node w-60 flex flex-col gap-3 relative z-20 pointer-events-none">
               ${childrenHtml}
             </div>
           `;
          } else if (node.isGridGroup) {
            let childrenHtml = node.children
              .map((child) => {
                const badgeHtml = getBadgeHtml(child.badge, "right", child.id);
                return `
             <div class="relative w-full">
               ${badgeHtml}
               <button id="child-node-${child.id}" data-parent="${node.id}"
                       onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                       class="bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.85rem] relative z-20 w-full pointer-events-auto">
                 ${child.title}
               </button>
             </div>
             `;
              })
              .join("");
            return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true" class="sub-node w-60 grid grid-cols-2 gap-3 relative z-20 pointer-events-none">
               ${childrenHtml}
             </div>
           `;
          } else if (node.isGroup || node.isGroupBottom) {
            let childrenHtml = node.children
              .map((child) => {
                const badgeHtml = getBadgeHtml(child.badge, "right", child.id);
                return `
            <div class="relative">
              ${badgeHtml}
              <button id="child-node-${child.id}" data-parent="${node.id}" data-bottom="${node.isGroupBottom ? "true" : "false"}"
                      onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                      class="child-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-2 px-3 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 transition-all text-center text-[0.8rem] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 relative z-20 w-full">
                ${child.title}
              </button>
            </div>
            `;
              })
              .join("");

            const positionClass = node.isGroupBottom
              ? "absolute top-[calc(100%+20px)] left-0 grid grid-cols-1 gap-3 w-full z-20"
              : "absolute bottom-[calc(100%+30px)] left-0 grid grid-cols-2 gap-3 w-full z-20";

            return `
            <div class="relative w-60">
              <div class="${positionClass}">
                ${childrenHtml}
              </div>
              <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true"
                      onclick="openPanel('${node.id}', '${node.title}', 'Kategori')"
                      class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-full text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
                ${node.title}
              </button>
            </div>
          `;
          } else {
            const badgeHtml = getBadgeHtml(node.badge, "right", node.id);
            return `
            <div class="relative">
              ${badgeHtml}
              <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right"
                      onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                      class="sub-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 hover:shadow-md transition-all w-60 text-left text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 relative z-20">
                ${node.title}
              </button>
            </div>
          `;
          }
        })
        .join("");

      rightHtml += `
        <div class="flex flex-col gap-4 items-start justify-center">
          ${subNodesHtml}
        </div>
      `;
    }
    rightHtml += "</div>";

    let centerHtml = "";
    if (row.main.type === "spacer") {
      centerHtml = `
        <div class="w-55 shrink-0 flex justify-center items-center relative z-10 py-5 opacity-0 pointer-events-none">
          <button id="main-node-${row.main.id}" class="w-full py-3 px-5">${row.main.title}</button>
        </div>
      `;
    } else if (row.main.type === "center-group") {
      let childrenHtml = row.main.children
        .map((child) => {
          const spanClass = child.isFull ? "col-span-2" : "";
          const badgeHtml = getBadgeHtml(child.badge, child.align || "right");
          return `<button id="child-node-${child.id}" data-parent="${row.main.id}"
                    onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                    class="${spanClass} bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2 px-3 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.8rem] relative z-20">
              ${badgeHtml}
              ${child.title}
            </button>`;
        })
        .join("");
      centerHtml = `
        <div class="w-55 shrink-0 flex justify-center items-center relative z-20 py-5 bg-slate-50 dark:bg-slate-900" id="main-node-${row.main.id}">
           <div class="grid grid-cols-2 gap-3 w-full">
               ${childrenHtml}
           </div>
        </div>
      `;
    } else if (row.main.type === "project-box") {
      centerHtml = `
        <div class="w-70 shrink-0 flex justify-center items-center relative z-20 py-8">
          <div id="main-node-${row.main.id}" class="bg-white border-2 border-slate-100 p-5 rounded-xl shadow-[0_8px_20px_rgba(47,91,211,0.15)] w-full text-left dark:bg-slate-800 dark:border-slate-700 transition-all hover:-translate-y-1">
            <p class="text-slate-800 dark:text-slate-200 text-[0.9rem] mb-4 font-medium leading-relaxed">
              ${row.main.desc}
            </p>
            <button onclick="openPanel('${row.main.id}', '${row.main.title}', 'Project')"
                    class="w-full bg-slate-100 text-slate-800 font-bold py-3 px-4 rounded-lg hover:bg-slate-200 transition-colors text-sm dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
              ${row.main.title}
            </button>
          </div>
        </div>
      `;
    } else if (row.main.type === "footer-box") {
      centerHtml = `
        <div class="w-160 max-w-[90vw] shrink-0 flex justify-center items-center relative z-20 py-8">
          <div id="main-node-${row.main.id}" class="bg-white border-2 border-[#dbe3f8] p-6 rounded-xl shadow-sm w-full text-center dark:bg-slate-800 dark:border-slate-700">
            <h3 class="text-slate-900 dark:text-white text-[1.05rem] font-bold mb-5 tracking-tight">
              ${row.main.title}
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Frontend</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Fullstack</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">DevOps</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Database Admin</button>
            </div>
          </div>
        </div>
      `;
    } else {
      centerHtml = `
        <div class="w-55 shrink-0 flex justify-center items-center relative z-10 py-5">
          <button id="main-node-${row.main.id}"
                  onclick="openPanel('${row.main.id}', '${row.main.title}', 'Modul Utama', '${row.main.desc}')"
                  class="w-full bg-brand-500 text-white font-bold text-[1rem] py-3 px-5 rounded-xl shadow-brand-sm hover:-translate-y-1 hover:shadow-brand-md transition-all border border-[#5277e3] relative z-20">
            ${row.main.title}
          </button>
        </div>
      `;
    }

    html += `
      <div class="flex w-full items-center justify-center relative ${row.rowClass || ''}">
        ${leftHtml}
        ${centerHtml}
        ${rightHtml}
      </div>
    `;
  });

  container.innerHTML = html;
  setTimeout(drawLines, 50);
}

function drawLines() {
  const svg = document.getElementById("svg-lines");
  svg.innerHTML = "";

  const container = document.getElementById("roadmap-container");
  const containerRect = container.getBoundingClientRect();
  const scale = containerRect.width / container.offsetWidth || 1;

  const subNodes = document.querySelectorAll(".sub-node");
  const isDark = document.documentElement.classList.contains("dark");
  const strokeColor = isDark ? "#3b82f6" : "#2f5bd3";

  subNodes.forEach((sub, i) => {
    const parentId = sub.getAttribute("data-parent");
    const side = sub.getAttribute("data-side");
    const isSolid = sub.getAttribute("data-solid") === "true";
    const parent = document.getElementById(`main-node-${parentId}`);

    if (!parent) return;

    const subRect = sub.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    let startX =
      side === "left"
        ? parentRect.left - containerRect.left + 5
        : parentRect.right - containerRect.left - 5;

    if (parent.parentElement.classList.contains("opacity-0")) {
      startX = parentRect.left + parentRect.width / 2 - containerRect.left;
    }

    let startY = parentRect.top - containerRect.top + parentRect.height / 2;
    let endX =
      side === "left"
        ? subRect.right - containerRect.left - 5
        : subRect.left - containerRect.left + 5;
    let endY = subRect.top - containerRect.top + subRect.height / 2;

    startX /= scale;
    startY /= scale;
    endX /= scale;
    endY /= scale;

    const curveOffset = Math.abs(endX - startX) / 2;
    const cp1x = side === "left" ? startX - curveOffset : startX + curveOffset;
    const cp1y = startY;
    const cp2x = side === "left" ? endX + curveOffset : endX - curveOffset;
    const cp2y = endY;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
    );
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", strokeColor);

    if (isSolid) {
      path.setAttribute("stroke-width", "2.5");
      path.setAttribute("stroke-dasharray", "none");
    } else {
      path.setAttribute("stroke-width", "4");
      path.setAttribute("stroke-dasharray", "0, 12");
      path.setAttribute("stroke-linecap", "round");
    }

    path.style.strokeDashoffset = "1000";
    path.style.animation = `dash 1.5s ease-out forwards ${i * 0.05}s`;
    svg.appendChild(path);
  });

  const groups = document.querySelectorAll('[data-solid="true"]');
  groups.forEach((groupNode) => {
    const groupId = groupNode.id.replace("sub-node-", "");
    const children = document.querySelectorAll(
      `.child-node[data-parent="${groupId}"]`,
    );

    children.forEach((child, i) => {
      const isBottom = child.getAttribute("data-bottom") === "true";
      let startX, startY, endX, endY;

      if (isBottom) {
        if (i === 0) {
          const parentRect = groupNode.getBoundingClientRect();
          startX = parentRect.left + parentRect.width / 2 - containerRect.left;
          startY = parentRect.bottom - containerRect.top;
        } else {
          const prevChild = children[i - 1];
          const prevRect = prevChild.getBoundingClientRect();
          startX = prevRect.left + prevRect.width / 2 - containerRect.left;
          startY = prevRect.bottom - containerRect.top;
        }

        const childRect = child.getBoundingClientRect();
        endX = childRect.left + childRect.width / 2 - containerRect.left;
        endY = childRect.top - containerRect.top;
      } else {
        const isBottomRow = i >= children.length - 2;
        if (!isBottomRow) {
          const sibling = children[i + 2];
          if (!sibling) return;
          const siblingRect = sibling.getBoundingClientRect();
          startX =
            siblingRect.left + siblingRect.width / 2 - containerRect.left;
          startY = siblingRect.top - containerRect.top;
        } else {
          const parentRect = groupNode.getBoundingClientRect();
          startX = parentRect.left + parentRect.width / 2 - containerRect.left;
          startY = parentRect.top - containerRect.top;
        }
        const childRect = child.getBoundingClientRect();
        endX = childRect.left + childRect.width / 2 - containerRect.left;
        endY = childRect.bottom - containerRect.top;
      }

      startX /= scale;
      startY /= scale;
      endX /= scale;
      endY /= scale;

      const curveOffset = Math.abs(startY - endY) / 2;
      const cp1x = startX;
      const cp1y = startY + (isBottom ? curveOffset : -curveOffset);
      const cp2x = endX;
      const cp2y = endY + (isBottom ? -curveOffset : curveOffset);

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute(
        "d",
        `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
      );
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", strokeColor);
      path.setAttribute("stroke-width", "3");
      path.setAttribute("stroke-dasharray", "0, 10");
      path.setAttribute("stroke-linecap", "round");

      path.style.strokeDashoffset = "1000";
      path.style.animation = `dash 1s ease-out forwards 0.8s`;
      svg.appendChild(path);
    });
  });

  function drawVerticalLine(topId, bottomId, isDotted) {
    const topEl = document.getElementById(topId);
    const bottomEl = document.getElementById(bottomId);
    if (topEl && bottomEl) {
      const topRect = topEl.getBoundingClientRect();
      const bottomRect = bottomEl.getBoundingClientRect();

      let startX = topRect.left + topRect.width / 2 - containerRect.left;
      let startY = topRect.bottom - containerRect.top;
      let endX = bottomRect.left + bottomRect.width / 2 - containerRect.left;
      let endY = bottomRect.top - containerRect.top;

      startX /= scale;
      startY /= scale;
      endX /= scale;
      endY /= scale;

      const curveOffset = Math.abs(startY - endY) / 2;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute(
        "d",
        `M ${startX} ${startY} C ${startX} ${startY + curveOffset}, ${endX} ${endY - curveOffset}, ${endX} ${endY}`,
      );
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", strokeColor);
      path.setAttribute("stroke-width", isDotted ? "3" : "2.5");
      if (isDotted) {
        path.setAttribute("stroke-dasharray", "0, 10");
        path.setAttribute("stroke-linecap", "round");
      } else {
        path.setAttribute("stroke-dasharray", "none");
      }

      path.style.strokeDashoffset = "1000";
      path.style.animation = `dash 1s ease-out forwards 0.8s`;
      svg.appendChild(path);
    }
  }

  // Backend specific lines
  drawVerticalLine("sub-node-vcs_heading", "sub-node-git", false);
  drawVerticalLine("sub-node-nosql_heading", "sub-node-nosql_group", false);
  drawVerticalLine("sub-node-sec_heading", "sub-node-sec_group", false);
  drawVerticalLine("sub-node-ci_cd_heading", "sub-node-deploy_group", false);

  // Adjust container margin-bottom on mobile to remove empty space caused by scale
  if (window.innerWidth < 640) {
    const originalHeight = container.offsetHeight;
    const scaledHeight = originalHeight * scale;
    const emptySpace = originalHeight - scaledHeight;
    container.style.marginBottom = `-${emptySpace}px`;
  } else {
    container.style.marginBottom = '0px';
  }
}

window.addEventListener("resize", drawLines);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      drawLines();
    }
  });
});
observer.observe(document.documentElement, { attributes: true });

const panel = document.getElementById("side-panel");
const overlay = document.getElementById("side-panel-overlay");
const panelMateri = document.getElementById("panel-content-materi");
const panelExample = document.getElementById("panel-content-example");
const btnMateri = document.getElementById("materi-tab-btn");
const btnExample = document.getElementById("example-tab-btn");



let jsonDataCache = {};

async function fetchMateri(filename) {
  if (jsonDataCache[filename]) return jsonDataCache[filename];
  try {
    const res = await fetch(`../../../materi/backend/${encodeURIComponent(filename)}.json`);
    if (res.ok) {
      const data = await res.json();
      jsonDataCache[filename] = data;
      return data;
    } else {
      console.error("Gagal memuat materi JSON:", filename, "Status", res.status);
    }
  } catch (error) {
    console.error("Gagal memuat materi JSON:", error);
  }
  return null;
}

function generateHtmlFromJson(obj) {
  if (Array.isArray(obj)) {
    return `<ul class="list-disc pl-5 space-y-1 mb-3 text-[0.95rem] text-slate-600 dark:text-slate-400">` + obj.map(item => `<li>${item}</li>`).join('') + `</ul>`;
  } else if (typeof obj === 'object' && obj !== null) {
    let html = `<div class="space-y-4">`;
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'description') {
        html = `<p class="mb-3 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-400">${value}</p>` + html;
      } else if (key !== 'examples') {
        const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        html += `<div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">`;
        html += `<h5 class="font-bold text-brand-700 dark:text-brand-300 capitalize mb-3">${formattedKey}</h5>`;
        html += generateHtmlFromJson(value);
        html += `</div>`;
      }
    }
    html += `</div>`;
    return html;
  } else {
    return `<p class="text-[0.95rem] text-slate-600 dark:text-slate-400">${obj}</p>`;
  }
}

function generateExampleFromJson(examples) {
  if (!examples) return null;
  let text = '';
  for (const [exName, exData] of Object.entries(examples)) {
    text += `// --- ${exName.replace(/_/g, ' ').toUpperCase()} ---\n`;
    for (const [k, v] of Object.entries(exData)) {
      if (Array.isArray(v)) {
        text += `${k}:\n  - ${v.join('\n  - ')}\n`;
      } else {
        text += `${k}: ${v}\n`;
      }
    }
    text += `\n`;
  }
  return text.trim();
}

async function openPanel(id, title, category, desc) {
  const nodeMapping = {
    // OS
    "terminal": { file: "Sistem Operasi & Pengetahuan Umum", key: "Terminal_Usage" },
    "os_basics": { file: "Sistem Operasi & Pengetahuan Umum", key: "How_OS_Works" },
    "process": { file: "Sistem Operasi & Pengetahuan Umum", key: "Process_Management" },
    "threads": { file: "Sistem Operasi & Pengetahuan Umum", key: "Threads_and_Concurrency" },
    // Languages
    "python": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "Python" },
    "go": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "Go" },
    "rust": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "Rust" },
    "java": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "Java" },
    "csharp": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "C#" },
    "ruby": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "Ruby" },
    "nodejs": { file: "Learn a Language", rootKey: "Learn_a_Language", key: "JavaScript" }, // Note: Assuming JS based on user screenshot
    // Version Control
    "git": { file: "Version Control", rootKey: "Version_Control", key: "Git" },
    "github": { file: "Version Control", rootKey: "Version_Control", key: "GitHub" },
    "gitlab": { file: "Version Control", rootKey: "Version_Control", key: "GitLab" },
    // Package Managers
    "npm": { file: "Package Managers", rootKey: "Package_Managers", key: "npm" },
    "yarn": { file: "Package Managers", rootKey: "Package_Managers", key: "yarn" },
    "pnpm": { file: "Package Managers", rootKey: "Package_Managers", key: "pnpm" },
    // APIs
    "rest": { file: "Api's", rootKey: "APIs_and_Communication", key: "REST" },
    "graphql": { file: "Api's", rootKey: "APIs_and_Communication", key: "GraphQL" },
    "grpc": { file: "Api's", rootKey: "APIs_and_Communication", key: "gRPC" },
    // Databases
    "postgresql": { file: "Relational Databases", rootKey: "Relational_Databases", key: "PostgreSQL" },
    "mysql": { file: "Relational Databases", rootKey: "Relational_Databases", key: "MySQL" },
    "mariadb": { file: "Relational Databases", rootKey: "Relational_Databases", key: "MariaDB" },
    // NoSQL
    "mongodb": { file: "NoSQL Database", rootKey: "NoSQL_Databases", key: "MongoDB" },
    "redis": { file: "NoSQL Database", rootKey: "NoSQL_Databases", key: "Redis" },
    "cassandra": { file: "NoSQL Database", rootKey: "NoSQL_Databases", key: "Cassandra" },
    // Caching
    "redis_cache": { file: "Caching", key: "Redis" },
    "memcached": { file: "Caching", key: "Memcached" },
    // Security
    "security": { file: "Web Security", key: "Web_Security" },
    "hashing": { file: "Web Security", key: "Hashing_Algorithms" },
    "cors": { file: "Web Security", key: "CORS" },
    "owasp": { file: "Web Security", key: "OWASP_Top_10" },
    // Testing
    "unit_testing": { file: "Testing", key: "Unit_Testing" },
    "integration": { file: "Testing", key: "Integration_Testing" },
    "e2e": { file: "Testing", key: "E2E_Testing" },
    // CI/CD
    "github_actions": { file: "cicd", rootKey: "CI_CD", key: "GitHub_Actions" },
    "gitlab_ci": { file: "cicd", rootKey: "CI_CD", key: "GitLab_CI" },
    "docker": { file: "cicd", rootKey: "CI_CD", key: "Docker" },
    "k8s": { file: "cicd", rootKey: "CI_CD", key: "Kubernetes" },
    "aws": { file: "cicd", rootKey: "CI_CD", key: "AWS" }
  };

  let actualDesc = "";
  let currentExample = exampleData[id];

  const mapping = nodeMapping[id];
  if (mapping) {
    const dataObjFile = await fetchMateri(mapping.file);
    if (dataObjFile) {
      let rootData = dataObjFile;
      if (mapping.rootKey && dataObjFile[mapping.rootKey]) {
        rootData = dataObjFile[mapping.rootKey];
      } else if (Object.keys(dataObjFile).length === 1 && typeof dataObjFile[Object.keys(dataObjFile)[0]] === 'object') {
        // Auto-detect root wrapper if exactly one key exists (e.g., "Web_Security")
        const firstKey = Object.keys(dataObjFile)[0];
        rootData = dataObjFile[firstKey];
      }
      
      const dataObj = rootData[mapping.key];
      if (dataObj) {
        actualDesc = generateHtmlFromJson(dataObj);
        if (dataObj.examples) {
          currentExample = generateExampleFromJson(dataObj.examples);
        }
      }
    }
  }

  if (!actualDesc) {
    actualDesc =
      materiData[id] ||
      (desc && desc !== "undefined"
        ? desc
        : `Pelajari materi <strong>${title}</strong> secara mendalam. Modul ini adalah fondasi penting yang akan terus Anda gunakan dalam praktik industri backend.`);
  }

  let customContent = "";
  if (
    id === "adv_projects" ||
    id === "beginner_projects" ||
    id === "project_ideas"
  ) {
    customContent = `
      <div class="bg-brand-50 dark:bg-brand-900/30 p-5 rounded-xl border border-brand-200 dark:border-brand-800 mb-8">
        <h4 class="font-bold text-brand-700 dark:text-brand-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-laptop-code"></i> Ide Proyek Latihan
        </h4>
        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2.5">
          <li>Membangun RESTful API untuk E-Commerce</li>
          <li>Sistem Autentikasi dengan JWT dan Role-based Access</li>
          <li>Real-time chat server menggunakan WebSockets</li>
          <li>Job queue dan background processing dengan Redis</li>
        </ul>
      </div>
    `;
  } else {
    customContent = `<div class="text-slate-600 dark:text-slate-400 text-[0.95rem] leading-relaxed mb-8 space-y-4">${actualDesc}</div>`;
  }

  // Populate Materi Tab
  panelMateri.innerHTML = `
    <span class="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-500">${category}</span>
    <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">${title}</h2>
    ${customContent}
  `;

  // Populate Example Tab
  if (currentExample) {
    panelExample.innerHTML = `
      <span class="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-500">Example Code</span>
      <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">${title}</h2>
      <div class="mt-4 rounded-xl bg-[#1e293b] p-4 overflow-x-auto shadow-inner border border-slate-700">
        <pre><code class="text-sm text-[#e2e8f0] font-mono leading-relaxed">${currentExample}</code></pre>
      </div>
      <button class="mt-6 w-full flex items-center justify-center gap-2 bg-brand-500 text-white font-bold py-3 px-4 rounded-xl shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all">
        <i class="fa-regular fa-copy"></i> Copy Code
      </button>
    `;
    btnExample.classList.remove("hidden");
  } else {
    panelExample.innerHTML = `
      <div class="flex flex-col items-center justify-center h-48 text-slate-400 text-center px-6">
        <i class="fa-solid fa-code text-4xl mb-4 opacity-50"></i>
        <p>Tidak ada contoh kode yang tersedia untuk modul ini.</p>
      </div>
    `;
  }

  // Ensure Materi tab is open by default
  switchPanelTab('materi');

  document.body.style.overflow = "hidden";
  overlay.classList.remove("opacity-0", "pointer-events-none");
  overlay.classList.add("opacity-100");
  panel.classList.remove("translate-x-full");
  panel.classList.add("translate-x-0");

  // === XP Tracking ===
  const isLoggedIn = window.getCurrentUser && window.getCurrentUser();
  const wrapper = document.getElementById("panel-content-wrapper");

  // Track example tab click
  if (currentExample) {
    btnExample.onclick = () => {
      switchPanelTab('example');
      if (isLoggedIn && window.addActivityXP) {
        window.addActivityXP(id, title, 'example', 15);
      }
    };
    btnMateri.onclick = () => switchPanelTab('materi');
  }

  // Track scroll to bottom of materi
  if (wrapper) {
    const scrollHandler = () => {
      if (wrapper.scrollTop + wrapper.clientHeight >= wrapper.scrollHeight - 20) {
        if (isLoggedIn && window.addActivityXP) {
          window.addActivityXP(id, title, 'materi', 25);
        }
        wrapper.removeEventListener("scroll", scrollHandler);
      }
    };
    wrapper.onscroll = null;
    wrapper.addEventListener("scroll", scrollHandler);

    setTimeout(() => {
      if (wrapper.scrollHeight <= wrapper.clientHeight) {
        if (isLoggedIn && window.addActivityXP) {
          window.addActivityXP(id, title, 'materi', 25);
        }
      }
    }, 1000);
  }
}

function switchPanelTab(tab) {
  if (tab === 'materi') {
    btnMateri.classList.add('text-brand-500', 'border-b-2', 'border-brand-500');
    btnMateri.classList.remove('text-slate-400');
    
    btnExample.classList.remove('text-brand-500', 'border-b-2', 'border-brand-500');
    btnExample.classList.add('text-slate-400');

    panelMateri.classList.remove('opacity-0', 'pointer-events-none');
    panelMateri.classList.add('opacity-100');
    
    panelExample.classList.add('opacity-0', 'pointer-events-none');
    panelExample.classList.remove('opacity-100');
  } else {
    btnExample.classList.add('text-brand-500', 'border-b-2', 'border-brand-500');
    btnExample.classList.remove('text-slate-400');
    
    btnMateri.classList.remove('text-brand-500', 'border-b-2', 'border-brand-500');
    btnMateri.classList.add('text-slate-400');

    panelExample.classList.remove('opacity-0', 'pointer-events-none');
    panelExample.classList.add('opacity-100');
    
    panelMateri.classList.add('opacity-0', 'pointer-events-none');
    panelMateri.classList.remove('opacity-100');
  }

  // Langsung scroll otomatis ke atas
  const wrapper = document.getElementById("panel-content-wrapper");
  if (wrapper) {
    wrapper.scrollTop = 0;
  }
}

function closePanel() {
  document.body.style.overflow = "";
  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0", "pointer-events-none");
  panel.classList.remove("translate-x-0");
  panel.classList.add("translate-x-full");
}

renderRoadmap();
