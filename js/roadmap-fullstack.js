const roadmapData = [
  {
    main: {
      id: "web_basics",
      title: "Internet & Web Basics",
      desc: "Fondasi dasar cara kerja web yang wajib dipahami sebelum menjadi developer.",
    },
    left: [
      { id: "how_internet", title: "How the Internet Works" },
      { id: "http_basics", title: "HTTP / HTTPS" },
    ],
    right: [
      { id: "browsers", title: "How Browsers Work" },
      { id: "dns", title: "DNS & Domain" },
    ],
  },
  {
    main: {
      id: "html_css",
      title: "HTML & CSS",
      desc: "Struktur dan tampilan halaman web — fondasi dari semua yang terlihat di browser.",
    },
    left: [
      { id: "html_semantic", title: "Semantic HTML", badge: "green" },
      { id: "css_layout", title: "Flexbox & Grid", badge: "purple" },
    ],
    right: [
      { id: "responsive", title: "Responsive Design" },
      { id: "css_vars", title: "CSS Variables & Animations" },
    ],
  },
  {
    main: {
      id: "javascript",
      title: "JavaScript Core",
      desc: "Bahasa pemrograman utama web — wajib dikuasai baik untuk frontend maupun backend.",
    },
    left: [
      {
        id: "beginner_projects",
        title: "Beginner Project Ideas",
        desc: "Buat kalkulator, to-do list interaktif, atau landing page responsif dari nol.",
        isProjectBox: true,
      },
    ],
    right: [
      { id: "js_dom", title: "DOM Manipulation", badge: "green" },
      { id: "js_async", title: "Async / Await & Fetch", badge: "purple" },
      { id: "js_es6", title: "ES6+ Features", badge: "green" },
    ],
  },
  {
    main: {
      id: "frontend_fw",
      title: "Frontend Framework",
      desc: "Framework modern untuk membangun UI yang reaktif, terstruktur, dan mudah di-maintain.",
    },
    left: [
      { id: "react", title: "React.js", badge: "green" },
      { id: "nextjs", title: "Next.js", badge: "purple" },
    ],
    right: [
      { id: "state_mgmt", title: "State Management", badge: "green" },
      { id: "tailwind_fs", title: "Tailwind CSS", badge: "purple" },
    ],
  },
  {
    main: { id: "project_spacer", title: "", type: "spacer" },
    left: [
      {
        id: "intermediate_projects",
        title: "Intermediate Project Ideas",
        desc: "Buat aplikasi blog, toko online sederhana, atau dashboard data dengan React & API.",
        isProjectBox: true,
      },
    ],
    right: [],
  },
  {
    main: {
      id: "nodejs",
      title: "Node.js & Backend",
      desc: "Runtime JavaScript di server — memungkinkan kamu menulis backend dengan JavaScript.",
    },
    left: [
      { id: "express", title: "Express.js", badge: "green" },
      { id: "restapi", title: "REST API Design", badge: "purple" },
    ],
    right: [
      { id: "middleware", title: "Middleware & Routing" },
      { id: "env_config", title: "Environment & Config" },
    ],
  },
  {
    main: {
      id: "databases",
      title: "Databases",
      desc: "Menyimpan dan mengambil data — inti dari hampir semua aplikasi web.",
    },
    left: [
      { id: "postgresql", title: "PostgreSQL", badge: "green" },
      { id: "mongodb", title: "MongoDB", badge: "purple" },
    ],
    right: [
      { id: "orm", title: "ORM (Prisma / Mongoose)", badge: "green" },
      { id: "sql_basics", title: "SQL Fundamentals", badge: "purple" },
    ],
  },
  {
    main: {
      id: "auth",
      title: "Authentication & Security",
      desc: "Memastikan hanya pengguna yang berhak bisa mengakses resource tertentu.",
    },
    left: [
      { id: "jwt_auth", title: "JWT & Sessions", badge: "purple" },
      { id: "oauth_fs", title: "OAuth 2.0", badge: "green" },
    ],
    right: [
      { id: "bcrypt", title: "Hashing (bcrypt)", badge: "green" },
      { id: "cors_sec", title: "CORS & Security Headers", badge: "purple" },
    ],
  },
  {
    main: { id: "project_spacer_2", title: "", type: "spacer" },
    left: [
      {
        id: "adv_projects",
        title: "Advanced Project Ideas",
        desc: "Buat fullstack app: e-commerce, SaaS sederhana, atau real-time chat dengan WebSocket.",
        isProjectBox: true,
      },
    ],
    right: [],
  },
  {
    main: {
      id: "devops_fs",
      title: "DevOps & Deployment",
      desc: "Membawa aplikasi dari lokal ke production — otomasi, container, dan cloud.",
    },
    left: [
      { id: "docker_fs", title: "Docker", badge: "green" },
      { id: "ci_cd_fs", title: "CI/CD (GitHub Actions)", badge: "purple" },
    ],
    right: [
      { id: "vercel_railway", title: "Vercel / Railway", badge: "green" },
      { id: "nginx_fs", title: "Nginx & Reverse Proxy", badge: "purple" },
    ],
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

const resourcesDB = {
  default: [
    { type: "article", title: "Panduan Resmi & Dokumentasi", url: "#" },
    { type: "video", title: "Crash Course di YouTube", url: "#" },
    { type: "game", title: "Latihan Interaktif (Practice)", url: "#" },
  ],
  math_stats: [
    { type: "article", title: "Statistik untuk Data Science", url: "#" },
  ],
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
                       class="bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2.5 px-4 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.85rem] relative z-20 w-full">
                 ${child.title}
               </button>
             </div>
             `;
              })
              .join("");
            return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" class="w-60 flex flex-col gap-3 relative z-20">
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
          const badgeHtml = getBadgeHtml(child.badge, child.align || "right", child.id);
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
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Nodejs</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Fullstack</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Backend</button>
              <button class="bg-brand-500 text-white font-semibold py-3 px-2 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:bg-brand-600 transition-all text-[0.85rem]">Design System</button>
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
      <div class="flex w-full items-center justify-center relative">
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

  const subNodes = document.querySelectorAll(".sub-node");
  const isDark = document.documentElement.classList.contains("dark");
  const strokeColor = isDark ? "#3b82f6" : "#2f5bd3";

  const isMobile = window.innerWidth < 640;
  const scale = isMobile ? 0.45 : 1;

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
        const parentRect = groupNode.getBoundingClientRect();
        startX = parentRect.left + parentRect.width / 2 - containerRect.left;
        startY = parentRect.bottom - containerRect.top;

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

  function drawHorizontalLine(leftId, rightId) {
    const leftEl = document.getElementById(leftId);
    const rightEl = document.getElementById(rightId);
    if (leftEl && rightEl) {
      const leftRect = leftEl.getBoundingClientRect();
      const rightRect = rightEl.getBoundingClientRect();

      let startX = leftRect.right - containerRect.left;
      let startY = leftRect.top + leftRect.height / 2 - containerRect.top;
      let endX = rightRect.left - containerRect.left;
      let endY = rightRect.top + rightRect.height / 2 - containerRect.top;

      startX /= scale;
      startY /= scale;
      endX /= scale;
      endY /= scale;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute("d", `M ${startX} ${startY} L ${endX} ${endY}`);
      path.setAttribute("stroke", strokeColor);
      path.setAttribute("stroke-width", "2.5");
      svg.appendChild(path);
    }
  }

  // No special vertical lines needed for fullstack roadmap

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
    const res = await fetch(`../../../materi/fullstack/${encodeURIComponent(filename)}`);
    if (res.ok) {
      const data = await res.json();
      jsonDataCache[filename] = data;
      return data;
    }
  } catch (e) { console.error("Gagal memuat:", filename, e); }
  return null;
}

function generateHtmlFromJson(obj) {
  if (Array.isArray(obj)) {
    return `<ul class="list-disc pl-5 space-y-1 mb-3 text-[0.95rem] text-slate-600 dark:text-slate-400">` + obj.map(item => {
      if (typeof item === 'object') {
        const vals = Object.values(item);
        return `<li><strong>${vals[0]}</strong>${vals[1] ? ' — ' + vals[1] : ''}</li>`;
      }
      return `<li>${item}</li>`;
    }).join('') + `</ul>`;
  } else if (typeof obj === 'object' && obj !== null) {
    let html = `<div class="space-y-4">`;
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'description') {
        html = `<p class="mb-3 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-400">${value}</p>` + html;
      } else if (key === 'example' || key === 'examples') {
        continue;
      } else {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        html += `<div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">`;
        html += `<h5 class="font-bold text-brand-700 dark:text-brand-300 capitalize mb-3">${label}</h5>`;
        html += generateHtmlFromJson(value);
        html += `</div>`;
      }
    }
    html += `</div>`;
    return html;
  }
  return `<p class="text-[0.95rem] text-slate-600 dark:text-slate-400">${obj}</p>`;
}

function extractExample(obj) {
  if (!obj) return null;
  // Cek key 'example' standar dulu
  if (obj.example && obj.example.code) {
    return { title: obj.example.title || '', code: obj.example.code };
  }
  // Scan semua key yang mengandung kata 'example' dan punya property 'code'
  if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      if (
        key.toLowerCase().includes('example') &&
        typeof val === 'object' &&
        val !== null &&
        val.code
      ) {
        return { title: val.title || key.replace(/_/g, ' '), code: val.code };
      }
    }
  }
  return null;
}

const nodeMapping = {
  // Internet & Web Basics — file: "Internet & Web Basics.json"
  "web_basics": { file: "Internet & Web Basics.json", key: "Internet_and_Web_Basics" },
  "how_internet": { file: "Internet & Web Basics.json", key: "How_the_Internet_Works" },
  "http_basics": { file: "Internet & Web Basics.json", key: "HTTP_and_HTTPS" },
  "browsers": { file: "Internet & Web Basics.json", key: "How_Browsers_Work" },
  "dns": { file: "Internet & Web Basics.json", key: "DNS_and_Domain" },

  // HTML & CSS — file: "HTML & CSS.json"
  "html_css": { file: "HTML & CSS.json", key: "HTML_and_CSS" },
  "html_semantic": { file: "HTML & CSS.json", key: "Semantic_HTML" },
  "css_layout": { file: "HTML & CSS.json", key: "Flexbox_and_Grid" },
  "responsive": { file: "HTML & CSS.json", key: "Responsive_Design" },
  "css_vars": { file: "HTML & CSS.json", key: "CSS_Variables_and_Animations" },

  // JavaScript Core — file: "JavaScript Core.json"
  "javascript": { file: "JavaScript Core.json", key: "JavaScript_Core" },
  "js_dom": { file: "JavaScript Core.json", key: "DOM_Manipulation" },
  "js_async": { file: "JavaScript Core.json", key: "Async_Await_and_Fetch" },
  "js_es6": { file: "JavaScript Core.json", key: "ES6_Plus_Features" },

  // Frontend Framework — file: "Frontend Framework.json"
  "frontend_fw": { file: "Frontend Framework.json", key: "Frontend_Framework" },
  "react": { file: "Frontend Framework.json", key: "React_js" },
  "nextjs": { file: "Frontend Framework.json", key: "Next_js" },
  "state_mgmt": { file: "Frontend Framework.json", key: "State_Management" },
  "tailwind_fs": { file: "Frontend Framework.json", key: "Tailwind_CSS" },

  // Node.js & Backend — file: "Node.js & Backend.json"
  "nodejs": { file: "Node.js & Backend.json", key: "Node_js_and_Backend" },
  "express": { file: "Node.js & Backend.json", key: "Express_js" },
  "restapi": { file: "Node.js & Backend.json", key: "REST_API_Design" },
  "middleware": { file: "Node.js & Backend.json", key: "Middleware_and_Routing" },
  "env_config": { file: "Node.js & Backend.json", key: "Environment_and_Config" },

  // Databases — file: "Databases.json"
  "databases": { file: "Databases.json", key: "Databases" },
  "postgresql": { file: "Databases.json", key: "PostgreSQL" },
  "mongodb": { file: "Databases.json", key: "MongoDB" },
  "orm": { file: "Databases.json", key: "ORM_Prisma_and_Mongoose" },
  "sql_basics": { file: "Databases.json", key: "SQL_Fundamentals" },

  // Authentication & Security — file: "Authentication & Security.json"
  "auth": { file: "Authentication & Security.json", key: "Authentication_and_Security" },
  "jwt_auth": { file: "Authentication & Security.json", key: "JWT_and_Sessions" },
  "oauth_fs": { file: "Authentication & Security.json", key: "OAuth_2_0" },
  "bcrypt": { file: "Authentication & Security.json", key: "Hashing_bcrypt" },
  "cors_sec": { file: "Authentication & Security.json", key: "CORS_and_Security_Headers" },

  // DevOps & Deployment — file: "DevOps & Deployment.json"
  "devops_fs": { file: "DevOps & Deployment.json", key: "DevOps_and_Deployment" },
  "docker_fs": { file: "DevOps & Deployment.json", key: "Docker" },
  "ci_cd_fs": { file: "DevOps & Deployment.json", key: "CI_CD_GitHub_Actions" },
  "vercel_railway": { file: "DevOps & Deployment.json", key: "Vercel_and_Railway" },
  "nginx_fs": { file: "DevOps & Deployment.json", key: "Nginx_and_Reverse_Proxy" }
};

async function openPanel(id, title, category, desc) {
  let actualDesc = "";
  let exampleObj = null;

  const mapping = nodeMapping[id];
  if (mapping) {
    const dataFile = await fetchMateri(mapping.file);
    if (dataFile) {
      let rootData = dataFile;
      if (mapping.rootKey && dataFile[mapping.rootKey]) {
        rootData = dataFile[mapping.rootKey];
      }
      
      let dataObj = rootData[mapping.key];
      if (mapping.subKey && dataObj) {
        dataObj = dataObj[mapping.subKey];
      }

      if (dataObj) {
        actualDesc = generateHtmlFromJson(dataObj);
        exampleObj = extractExample(dataObj);
      }
    }
  }

  if (!actualDesc) {
    const fallback = desc && desc !== "undefined" ? desc
      : `Pelajari materi <strong>${title}</strong> secara mendalam.`;
    actualDesc = `<p class="text-slate-600 dark:text-slate-400 text-[0.95rem] leading-relaxed">${fallback}</p>`;
  }

  let customContent = "";
  if (id === "adv_projects" || id === "beginner_projects" || id === "project_ideas") {
    customContent = `
      <div class="bg-brand-50 dark:bg-brand-900/30 p-5 rounded-xl border border-brand-200 dark:border-brand-800 mb-8">
        <h4 class="font-bold text-brand-700 dark:text-brand-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-laptop-code"></i> Ide Proyek Latihan
        </h4>
        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2.5">
          <li>Membangun portofolio profesional dengan Next.js</li>
          <li>Aplikasi pencatat tugas (To-Do List interaktif)</li>
          <li>Dashboard admin sederhana yang terhubung API public</li>
          <li>Web kloning e-commerce dengan keranjang belanja</li>
        </ul>
      </div>`;
  } else {
    customContent = `<div class="text-slate-600 dark:text-slate-400 text-[0.95rem] leading-relaxed mb-8 space-y-4">${actualDesc}</div>`;
  }

  panelMateri.innerHTML = `
    <span class="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-500">${category}</span>
    <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">${title}</h2>
    ${customContent}
  `;

  if (exampleObj && exampleObj.code) {
    panelExample.innerHTML = `
      <span class="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-500">Example Code</span>
      <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">${exampleObj.title || title}</h2>
      <div class="mt-4 rounded-xl bg-[#1e293b] p-4 overflow-x-auto shadow-inner border border-slate-700">
        <pre><code class="text-sm text-[#e2e8f0] font-mono leading-relaxed">${exampleObj.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
      </div>
    `;
    btnExample.classList.remove("hidden");
  } else {
    panelExample.innerHTML = `
      <div class="flex flex-col items-center justify-center h-48 text-slate-400 text-center px-6">
        <i class="fa-solid fa-code text-4xl mb-4 opacity-50"></i>
        <p>Tidak ada contoh kode untuk modul ini.</p>
      </div>`;
  }

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
  if (exampleObj && exampleObj.code) {
    const originalBtnExampleClick = btnExample.onclick;
    btnExample.onclick = () => {
      switchPanelTab('example');
      if (isLoggedIn && window.addActivityXP) {
        window.addActivityXP(id, title, 'example', 15);
      }
    };
    // Reset materi tab to just switch
    btnMateri.onclick = () => switchPanelTab('materi');
  }

  // Track scroll to bottom of materi tab
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

    // If content is short (no scroll needed), give XP after 1s
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
  const wrapper = document.getElementById("panel-content-wrapper");
  if (wrapper) wrapper.scrollTop = 0;
}

function closePanel() {
  document.body.style.overflow = "";
  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0", "pointer-events-none");
  panel.classList.remove("translate-x-0");
  panel.classList.add("translate-x-full");
}

renderRoadmap();
