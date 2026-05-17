const roadmapData = [
  {
    main: { id: "internet", title: "Internet", desc: "Dasar dari bagaimana web bekerja secara teknis." },
    left: [],
    right: [
      { id: "dns", title: "DNS and how it works?" },
      { id: "http", title: "What is HTTP?" },
      { id: "hosting", title: "What is Hosting?" },
      { id: "browsers", title: "Browsers and how they work?" }
    ]
  },
  {
    main: { id: "html", title: "HTML", desc: "HyperText Markup Language. Fondasi utama dari setiap website." },
    left: [
      { id: "semantic", title: "Semantic HTML", badge: "green" },
      { id: "forms", title: "Forms and Validations", badge: "green" },
      { id: "a11y", title: "Accessibility", badge: "purple" }
    ],
    right: []
  },
  {
    main: { id: "css", title: "CSS", desc: "Bahasa stylesheet yang digunakan untuk mendesain presentasi dokumen." },
    left: [
      { id: "beginner_projects", title: "Beginner Project Ideas", desc: "HTML, CSS and JavaScript are the backbone of web development. Make sure to practice by building lots of projects.", isProjectBox: true }
    ],
    right: [
      { id: "layouts", title: "Making Layouts (Flexbox/Grid)", badge: "green" },
      { id: "responsive", title: "Responsive Design", badge: "green" },
      { id: "animations", title: "Animations", badge: "purple" }
    ]
  },
  {
    main: { id: "javascript", title: "JavaScript", desc: "Bahasa pemrograman inti untuk membuat web menjadi interaktif." },
    left: [
      { id: "dom", title: "DOM Manipulation", badge: "green" },
      { id: "fetch", title: "Fetch API / Ajax", badge: "green" }
    ],
    right: [
      { id: "es6", title: "ES6+ Syntax", badge: "green" },
      { id: "hoisting", title: "Hoisting & Closures", badge: "purple" }
    ]
  },
  {
    main: { id: "vcs", title: "Version Control", desc: "Sistem untuk melacak dan mengelola perubahan kode seiring waktu." },
    left: [
      { id: "git", title: "Git", badge: "green" }
    ],
    right: []
  },
  {
    main: { id: "hosting", title: "VCS Hosting", desc: "Layanan cloud untuk menyimpan repository code dan berkolaborasi." },
    left: [
      { id: "vcs_hosting_left", title: "GitLab & GitHub", isHorizontal: true, children: [
         { id: "gitlab", title: "GitLab", badge: "green" },
         { id: "github", title: "GitHub", badge: "green" }
      ]}
    ],
    right: [
      { id: "pkg_mgr", title: "Package Managers", isGroup: true, children: [
         { id: "npm", title: "npm", badge: "green" },
         { id: "yarn", title: "yarn", badge: "purple" },
         { id: "pnpm", title: "pnpm", badge: "green" },
         { id: "bun", title: "Bun", badge: "purple" }
      ]}
    ]
  },
  {
    main: { id: "project_spacer", title: "", type: "spacer" },
    left: [
      { id: "project_ideas", title: "Intermediate Project Ideas", desc: "At this point, you should be able to build modern vanilla JS frontend applications.", isProjectBox: true }
    ],
    right: [
      { id: "css_fw", title: "CSS Frameworks", isGroupBottom: true, children: [
         { id: "tailwind", title: "Tailwind CSS", badge: "green" }
      ]}
    ]
  },
  {
    main: { id: "frameworks", title: "Learn a Framework", desc: "Library canggih untuk membuat UI modern skala besar." },
    left: [
      { id: "react", title: "React", badge: "green" },
      { id: "vue", title: "Vue.js", badge: "purple" },
      { id: "angular", title: "Angular", badge: "purple" },
      { id: "svelte", title: "Svelte", badge: "purple" },
      { id: "solid", title: "Solid JS", badge: "purple" }
    ],
    right: [
      { id: "ai_dev_text", title: "AI in Development", isTextNode: true }
    ]
  },
  {
    main: { id: "ai_coding", title: "AI Assisted Coding", desc: "Tools dan platform AI untuk mempercepat penulisan kode." },
    left: [
      { id: "claude", title: "Claude Code", badge: "green" },
      { id: "cursor", title: "Cursor", badge: "green" },
      { id: "copilot", title: "Copilot", badge: "purple" },
      { id: "antigravity", title: "Antigravity", badge: "purple" }
    ],
    right: [
      { id: "learn_basics", title: "Learn the Basics", isRightHeading: true }
    ]
  },
  {
    main: { id: "prompting", title: "Prompting Techniques", desc: "Teknik memberikan instruksi yang efektif ke AI." },
    left: [
      { id: "prompt_eng", title: "Prompt Engineering", isSolidBlue: true }
    ],
    right: [
      { id: "llm_group_1", isVerticalGroup: true, children: [
        {id: "how_llms", title: "How LLMs work", badge: "green"},
        {id: "ai_vs_trad", title: "AI vs Traditional Coding", badge: "green"},
        {id: "applications", title: "Applications", badge: "purple"}
      ]}
    ]
  },
  {
    main: { id: "agents", title: "Agents", desc: "Sistem AI otonom yang dapat menjalankan serangkaian tugas." },
    left: [
      { id: "ai_agents_rm", title: "AI Agents Roadmap", isSolidBlue: true }
    ],
    right: [
      { id: "llm_group_2", isVerticalGroup: true, children: [
        {id: "code_reviews", title: "Code Reviews", badge: "green"},
        {id: "refactoring", title: "Refactoring", badge: "green"},
        {id: "docs_gen", title: "Docs Generation", badge: "purple"}
      ]}
    ]
  },
  {
    main: { id: "mcp", title: "MCP", desc: "Model Context Protocol." },
    left: [],
    right: []
  },
  {
    main: { id: "skills", title: "Skills", desc: "Kemampuan spesifik yang diberikan ke AI Agent." },
    left: [],
    right: []
  },
  {
    main: { id: "implementing_ai", title: "Implementing AI", desc: "Menerapkan AI di real-world project." },
    left: [
      { id: "gemini", title: "Gemini", badge: "green" },
      { id: "openai", title: "OpenAI", badge: "green" },
      { id: "anthropic", title: "Anthropic", badge: "purple" }
    ],
    right: [
      { id: "adv_frontend", title: "Advanced Frontend", isTextNode: true }
    ]
  },
  {
    main: { id: "bundlers", title: "Module Bundlers", desc: "Alat untuk memaketkan banyak file menjadi satu file (bundle)." },
    left: [
      { id: "auth_strat", title: "Auth Strategies", isLeftHeading: true }
    ],
    right: [
      { id: "linters", title: "Linters & Formatters", isRightHeading: true }
    ]
  },
  {
    main: { id: "bundlers_children", type: "center-group", children: [
       { id: "vite", title: "Vite", isFull: true, badge: "purple", align: "right" },
       { id: "swc", title: "SWC", badge: "green", align: "left" },
       { id: "esbuild", title: "esbuild", badge: "purple", align: "right" },
       { id: "rollup", title: "Rollup", badge: "green", align: "left" },
       { id: "rolldown", title: "Rolldown" },
       { id: "parcel", title: "Parcel", isFull: true, badge: "green", align: "left" }
    ]},
    left: [
      { id: "testing_row", isTestingRow: true }
    ],
    right: [
      { id: "linters_group", isVerticalGroup: true, style: "yellow", children: [
        {id: "biome", title: "Biome", badge: "green"},
        {id: "prettier", title: "Prettier", badge: "purple"},
        {id: "eslint", title: "ESLint", badge: "purple"}
      ]}
    ]
  },
  {
    main: { id: "adv_projects", type: "project-box", title: "Advanced Project Ideas", desc: "At this point you should have the expertise of an intermediate level frontend developer. Keep practicing and sharpening your skills." },
    left: [
      { id: "testing_group", isVerticalGroup: true, style: "yellow", children: [
        {id: "vitest", title: "Vitest", badge: "purple"},
        {id: "playwright", title: "Playwright", badge: "purple"},
        {id: "cypress", title: "Cypress", badge: "green"},
        {id: "jest", title: "Jest", badge: "green"}
      ]}
    ],
    right: [
      { id: "security_group", isVerticalGroup: true, style: "yellow", children: [
        {id: "cors", title: "CORS", badge: "purple"},
        {id: "https", title: "HTTPS", badge: "purple"},
        {id: "csp", title: "CSP", badge: "purple"},
        {id: "owasp", title: "OWASP Risks", badge: "purple"}
      ]}
    ]
  },
  {
    main: { id: "web_apis", title: "Web APIs", desc: "API bawaan browser untuk memanipulasi DOM dan fitur device." },
    left: [],
    right: [
      { id: "web_security", title: "Web Security", isRightHeading: true }
    ]
  },
  {
    main: { id: "continue_learning", type: "footer-box", title: "Continue Learning with following relevant tracks" },
    left: [],
    right: []
  }
];

const resourcesDB = {
  default: [
    { type: "article", title: "Panduan Resmi & Dokumentasi", url: "#" },
    { type: "video", title: "Crash Course di YouTube", url: "#" },
    { type: "game", title: "Latihan Interaktif (Practice)", url: "#" }
  ],
  internet: [
    { type: "article", title: "Bagaimana Internet Bekerja?", url: "#" },
    { type: "video", title: "Crash Course Networking", url: "#" }
  ],
  html: [
    { type: "course", title: "HTML Full Course untuk Pemula", url: "#" },
    { type: "article", title: "Panduan MDN Web Docs", url: "#" }
  ],
  css: [
    { type: "game", title: "Flexbox Froggy", url: "#" },
    { type: "game", title: "Grid Garden", url: "#" },
    { type: "video", title: "CSS Masterclass", url: "#" }
  ],
  javascript: [
    { type: "course", title: "JavaScript Fundamentals", url: "#" },
    { type: "article", title: "JavaScript.info", url: "#" }
  ],
  react: [
    { type: "course", title: "React 18 for Beginners", url: "#" },
    { type: "article", title: "Dokumentasi Resmi React.dev", url: "#" }
  ]
};

function renderRoadmap() {
  const container = document.getElementById('nodes-container');
  let html = '';

  function getBadgeHtml(badge, align) {
     if (!badge) return '';
     const bg = badge === 'purple' ? 'bg-[#7c3aed]' : 'bg-[#15803d]';
     const pos = align === 'left' ? '-left-3' : '-right-3';
     return `
        <div class="absolute top-1/2 -translate-y-1/2 ${pos} w-[22px] h-[22px] rounded-full ${bg} text-white flex items-center justify-center text-[11px] shadow-sm z-30 ring-[2.5px] ring-white dark:ring-slate-900">
          <i class="fa-solid fa-check"></i>
        </div>
     `;
  }

  roadmapData.forEach((row, index) => {
    const hasLeft = row.left && row.left.length > 0;
    const hasRight = row.right && row.right.length > 0;

    let leftHtml = '<div class="flex-1 flex justify-end pr-8 sm:pr-14 relative">';
    if (hasLeft) {
      let subNodesHtml = row.left.map(node => {
        if (node.isProjectBox) {
           return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" data-solid="true"
                 class="sub-node bg-white border-2 border-slate-100 p-5 rounded-xl shadow-sm w-[280px] text-left relative z-20 dark:bg-slate-800 dark:border-slate-700">
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
            <div class="relative z-20 w-[240px] flex justify-end">
              <button id="sub-node-testing" data-parent="${row.main.id}" data-side="left" data-solid="true"
                      onclick="openPanel('testing', 'Testing', 'Kategori')"
                      class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-[240px] text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
                Testing
              </button>
            </div>
           `;
        } else if (node.isLeftHeading) {
           return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" data-solid="true"
                    onclick="openPanel('${node.id}', '${node.title}', 'Kategori')"
                    class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-[240px] text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
              ${node.title}
            </button>
           `;
        } else if (node.isSolidBlue) {
           return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left"
                    onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                    class="sub-node bg-[#2f5bd3] outline outline-2 outline-offset-2 outline-[#2f5bd3] text-white font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:bg-[#254ab3] hover:-translate-y-0.5 transition-all w-[240px] text-center text-[0.95rem] relative z-20">
              ${node.title}
            </button>
           `;
        } else if (node.isHorizontal) {
           let childrenHtml = node.children.map(child => {
             const badgeHtml = getBadgeHtml(child.badge, 'right');
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
           }).join('');
           return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" class="sub-node flex gap-3 relative z-20 w-[240px] justify-end">
              ${childrenHtml}
            </div>
           `;
        } else if (node.isVerticalGroup) {
           let childrenHtml = node.children.map(child => {
             const badgeHtml = getBadgeHtml(child.badge, 'left');
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
           }).join('');
           return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left" class="flex flex-col gap-3 relative z-20 w-[240px]">
               ${childrenHtml}
             </div>
           `;
        } else {
           const badgeHtml = getBadgeHtml(node.badge, 'left');
           return `
            <div class="relative">
              ${badgeHtml}
              <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="left"
                      onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                      class="sub-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 hover:shadow-md transition-all w-[240px] text-right text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 relative z-20">
                ${node.title}
              </button>
            </div>
           `;
        }
      }).join('');

      leftHtml += `
        <div class="flex flex-col gap-4 items-end justify-center">
          ${subNodesHtml}
        </div>
      `;
    }
    leftHtml += '</div>';

    let rightHtml = '<div class="flex-1 flex justify-start pl-8 sm:pl-14 relative">';
    if (hasRight) {
      let subNodesHtml = row.right.map(node => {
        if (node.isTextNode) {
           return `
            <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true"
                 class="sub-node w-[240px] text-center text-[1.05rem] font-bold text-slate-800 dark:text-slate-200 relative z-20 py-3 bg-transparent flex justify-center items-center">
              ${node.title}
            </div>
           `;
        } else if (node.isRightHeading) {
           return `
            <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" data-solid="true"
                    onclick="openPanel('${node.id}', '${node.title}', 'Kategori')"
                    class="sub-node bg-brand-50 border-2 border-brand-300 text-brand-700 font-bold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:-translate-y-0.5 transition-all w-[240px] text-center text-[0.95rem] dark:bg-brand-900/40 dark:border-brand-600 dark:text-brand-200 relative z-20">
              ${node.title}
            </button>
           `;
        } else if (node.isVerticalGroup) {
           let childrenHtml = node.children.map(child => {
             const badgeHtml = getBadgeHtml(child.badge, 'right');
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
           }).join('');
           return `
             <div id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right" class="w-[240px] flex flex-col gap-3 relative z-20">
               ${childrenHtml}
             </div>
           `;
        } else if (node.isGroup || node.isGroupBottom) {
          let childrenHtml = node.children.map(child => {
            const badgeHtml = getBadgeHtml(child.badge, 'right');
            return `
            <div class="relative">
              ${badgeHtml}
              <button id="child-node-${child.id}" data-parent="${node.id}" data-bottom="${node.isGroupBottom ? 'true' : 'false'}"
                      onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                      class="child-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-2 px-3 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 transition-all text-center text-[0.8rem] dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 relative z-20 w-full">
                ${child.title}
              </button>
            </div>
            `;
          }).join('');

          const positionClass = node.isGroupBottom
            ? 'absolute top-[calc(100%+20px)] left-0 grid grid-cols-1 gap-3 w-full z-20'
            : 'absolute bottom-[calc(100%+30px)] left-0 grid grid-cols-2 gap-3 w-full z-20';

          return `
            <div class="relative w-[240px]">
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
          const badgeHtml = getBadgeHtml(node.badge, 'right');
          return `
            <div class="relative">
              ${badgeHtml}
              <button id="sub-node-${node.id}" data-parent="${row.main.id}" data-side="right"
                      onclick="openPanel('${node.id}', '${node.title}', 'Sub-modul')"
                      class="sub-node bg-white border-2 border-[#dbe3f8] text-slate-700 font-semibold py-3 px-5 rounded-[14px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 hover:shadow-md transition-all w-[240px] text-left text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 relative z-20">
                ${node.title}
              </button>
            </div>
          `;
        }
      }).join('');

      rightHtml += `
        <div class="flex flex-col gap-4 items-start justify-center">
          ${subNodesHtml}
        </div>
      `;
    }
    rightHtml += '</div>';

    let centerHtml = '';
    if (row.main.type === "spacer") {
      centerHtml = `
        <div class="w-[220px] shrink-0 flex justify-center items-center relative z-10 py-5 opacity-0 pointer-events-none">
          <button id="main-node-${row.main.id}" class="w-full py-3 px-5">${row.main.title}</button>
        </div>
      `;
    } else if (row.main.type === "center-group") {
      let childrenHtml = row.main.children.map(child => {
        const spanClass = child.isFull ? 'col-span-2' : '';
        const badgeHtml = getBadgeHtml(child.badge, child.align || 'right');
        return `<button id="child-node-${child.id}" data-parent="${row.main.id}"
                    onclick="openPanel('${child.id}', '${child.title}', 'Sub-modul')"
                    class="${spanClass} bg-white border-2 border-[#dbe3f8] text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 font-semibold py-2 px-3 rounded-[10px] shadow-sm hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 transition-all text-center text-[0.8rem] relative z-20">
              ${badgeHtml}
              ${child.title}
            </button>`;
      }).join('');
      centerHtml = `
        <div class="w-[220px] shrink-0 flex justify-center items-center relative z-20 py-5 bg-slate-50 dark:bg-slate-900" id="main-node-${row.main.id}">
           <div class="grid grid-cols-2 gap-3 w-full">
               ${childrenHtml}
           </div>
        </div>
      `;
    } else if (row.main.type === "project-box") {
      centerHtml = `
        <div class="w-[280px] shrink-0 flex justify-center items-center relative z-20 py-8">
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
        <div class="w-[640px] max-w-[90vw] shrink-0 flex justify-center items-center relative z-20 py-8">
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
        <div class="w-[220px] shrink-0 flex justify-center items-center relative z-10 py-5">
          <button id="main-node-${row.main.id}"
                  onclick="openPanel('${row.main.id}', '${row.main.title}', 'Modul Utama', '${row.main.desc}')"
                  class="w-full bg-brand-500 text-white font-bold text-[1rem] py-3 px-5 rounded-xl shadow-[0_8px_20px_rgba(47,91,211,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(47,91,211,0.35)] transition-all border border-[#5277e3] relative z-20">
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
  const svg = document.getElementById('svg-lines');
  svg.innerHTML = '';

  const container = document.getElementById('roadmap-container');
  const containerRect = container.getBoundingClientRect();

  const subNodes = document.querySelectorAll('.sub-node');
  const isDark = document.documentElement.classList.contains('dark');
  const strokeColor = isDark ? '#3b82f6' : '#2f5bd3';

  subNodes.forEach((sub, i) => {
    const parentId = sub.getAttribute('data-parent');
    const side = sub.getAttribute('data-side');
    const isSolid = sub.getAttribute('data-solid') === 'true';
    const parent = document.getElementById(`main-node-${parentId}`);

    if (!parent) return;

    const subRect = sub.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    let startX = (side === 'left') ? parentRect.left - containerRect.left + 5 : parentRect.right - containerRect.left - 5;

    if (parent.parentElement.classList.contains('opacity-0')) {
       startX = parentRect.left + (parentRect.width/2) - containerRect.left;
    }

    let startY = parentRect.top - containerRect.top + (parentRect.height / 2);
    let endX = (side === 'left') ? subRect.right - containerRect.left - 5 : subRect.left - containerRect.left + 5;
    let endY = subRect.top - containerRect.top + (subRect.height / 2);

    const curveOffset = Math.abs(endX - startX) / 2;
    const cp1x = (side === 'left') ? startX - curveOffset : startX + curveOffset;
    const cp1y = startY;
    const cp2x = (side === 'left') ? endX + curveOffset : endX - curveOffset;
    const cp2y = endY;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', strokeColor);

    if (isSolid) {
      path.setAttribute('stroke-width', '2.5');
      path.setAttribute('stroke-dasharray', 'none');
    } else {
      path.setAttribute('stroke-width', '4');
      path.setAttribute('stroke-dasharray', '0, 12');
      path.setAttribute('stroke-linecap', 'round');
    }

    path.style.strokeDashoffset = '1000';
    path.style.animation = `dash 1.5s ease-out forwards ${i * 0.05}s`;
    svg.appendChild(path);
  });

  const groups = document.querySelectorAll('[data-solid="true"]');
  groups.forEach(groupNode => {
    const groupId = groupNode.id.replace('sub-node-', '');
    const children = document.querySelectorAll(`.child-node[data-parent="${groupId}"]`);

    children.forEach((child, i) => {
      const isBottom = child.getAttribute('data-bottom') === 'true';
      let startX, startY, endX, endY;

      if (isBottom) {
         const parentRect = groupNode.getBoundingClientRect();
         startX = parentRect.left + (parentRect.width / 2) - containerRect.left;
         startY = parentRect.bottom - containerRect.top;

         const childRect = child.getBoundingClientRect();
         endX = childRect.left + (childRect.width / 2) - containerRect.left;
         endY = childRect.top - containerRect.top;
      } else {
         const isBottomRow = i >= children.length - 2;
         if (!isBottomRow) {
           const sibling = children[i + 2];
           if (!sibling) return;
           const siblingRect = sibling.getBoundingClientRect();
           startX = siblingRect.left + (siblingRect.width / 2) - containerRect.left;
           startY = siblingRect.top - containerRect.top;
         } else {
           const parentRect = groupNode.getBoundingClientRect();
           startX = parentRect.left + (parentRect.width / 2) - containerRect.left;
           startY = parentRect.top - containerRect.top;
         }
         const childRect = child.getBoundingClientRect();
         endX = childRect.left + (childRect.width / 2) - containerRect.left;
         endY = childRect.bottom - containerRect.top;
      }

      const curveOffset = Math.abs(startY - endY) / 2;
      const cp1x = startX;
      const cp1y = startY + (isBottom ? curveOffset : -curveOffset);
      const cp2x = endX;
      const cp2y = endY + (isBottom ? -curveOffset : curveOffset);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', strokeColor);
      path.setAttribute('stroke-width', '3');
      path.setAttribute('stroke-dasharray', '0, 10');
      path.setAttribute('stroke-linecap', 'round');

      path.style.strokeDashoffset = '1000';
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

        let startX = topRect.left + (topRect.width / 2) - containerRect.left;
        let startY = topRect.bottom - containerRect.top;
        let endX = bottomRect.left + (bottomRect.width / 2) - containerRect.left;
        let endY = bottomRect.top - containerRect.top;

        const curveOffset = Math.abs(startY - endY) / 2;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${startX} ${startY} C ${startX} ${startY + curveOffset}, ${endX} ${endY - curveOffset}, ${endX} ${endY}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('stroke-width', isDotted ? '3' : '2.5');
        if (isDotted) {
           path.setAttribute('stroke-dasharray', '0, 10');
           path.setAttribute('stroke-linecap', 'round');
        } else {
           path.setAttribute('stroke-dasharray', 'none');
        }

        path.style.strokeDashoffset = '1000';
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
        let startY = leftRect.top + (leftRect.height / 2) - containerRect.top;
        let endX = rightRect.left - containerRect.left;
        let endY = rightRect.top + (rightRect.height / 2) - containerRect.top;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${startX} ${startY} L ${endX} ${endY}`);
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('stroke-width', '2.5');
        svg.appendChild(path);
     }
  }

  drawVerticalLine('sub-node-pkg_mgr', 'sub-node-css_fw', true);
  drawVerticalLine('sub-node-ai_dev_text', 'sub-node-learn_basics', false);
  drawVerticalLine('sub-node-learn_basics', 'sub-node-llm_group_1', true);
  drawVerticalLine('sub-node-llm_group_1', 'sub-node-llm_group_2', true);
  drawVerticalLine('sub-node-auth_strat', 'sub-node-testing', false);
  drawVerticalLine('sub-node-testing', 'sub-node-testing_group', true);
  drawVerticalLine('sub-node-linters', 'sub-node-linters_group', true);
  drawVerticalLine('sub-node-security_group', 'sub-node-web_security', true);

  function drawMaskLine(topId, bottomId) {
     const topEl = document.getElementById(topId);
     const bottomEl = document.getElementById(bottomId);
     if (topEl && bottomEl) {
        const topRect = topEl.getBoundingClientRect();
        const bottomRect = bottomEl.getBoundingClientRect();

        let startX = topRect.left + (topRect.width / 2) - containerRect.left;
        let startY = topRect.bottom - containerRect.top;
        let endX = bottomRect.left + (bottomRect.width / 2) - containerRect.left;
        let endY = bottomRect.top - containerRect.top;

        const bgColor = isDark ? '#0b1220' : '#f8fafc';

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${startX} ${startY} L ${endX} ${endY}`);
        path.setAttribute('stroke', bgColor);
        path.setAttribute('stroke-width', '6');
        svg.appendChild(path);
     }
  }

  drawMaskLine('main-node-bundlers', 'child-node-vite');
  drawVerticalLine('main-node-bundlers', 'child-node-vite', true);
}

window.addEventListener('resize', drawLines);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      drawLines();
    }
  });
});
observer.observe(document.documentElement, { attributes: true });

const panel = document.getElementById('side-panel');
const overlay = document.getElementById('side-panel-overlay');
const panelContent = document.getElementById('panel-content');

function getIcon(type) {
  if (type === 'video') return 'fa-play';
  if (type === 'game') return 'fa-gamepad';
  if (type === 'course') return 'fa-graduation-cap';
  return 'fa-file-lines';
}

const materiData = {
   "html": "HTML (HyperText Markup Language) adalah kerangka dasar dari setiap halaman web. Di sini Anda belajar tag dasar, elemen semantik (seperti header, footer, article) yang penting untuk SEO dan aksesibilitas, serta cara membuat form interaktif yang divalidasi.",
   "css": "CSS digunakan untuk mendesain dan menata letak elemen web. Anda akan mempelajari Grid dan Flexbox untuk layout responsif, animasi CSS, serta konsep modern seperti CSS Variables dan arsitektur styling yang mudah dipelihara.",
   "javascript": "JavaScript adalah bahasa pemrograman yang membuat web menjadi interaktif. Pelajari konsep dasar seperti variabel, fungsi, dan tipe data, hingga konsep lanjutan seperti closure, hoisting, asinkronus (Promises & async/await), dan manipulasi DOM.",
   "react": "React adalah library UI paling populer saat ini. Fokus pada komponen fungsional, Hooks (useState, useEffect), state management tingkat lanjut, dan integrasi dengan ekosistem modern seperti Next.js.",
   "tailwind": "Tailwind adalah utility-first CSS framework. Alih-alih menulis CSS terpisah, Anda menyusun class langsung di HTML untuk membangun antarmuka kustom secara cepat dan konsisten.",
   "vite": "Vite adalah build tool generasi baru yang sangat cepat. Berbeda dengan Webpack, Vite menggunakan Native ES Modules saat development, membuat server menyala instan dan Hot Module Replacement (HMR) sangat responsif.",
   "vitest": "Vitest adalah framework testing modern yang dirancang khusus untuk bekerja mulus dengan Vite. Cepat, mendukung TypeScript out-of-the-box, dan memiliki API yang sangat mirip dengan Jest.",
   "prompt_eng": "Keahlian menyusun instruksi yang spesifik dan berkonteks tinggi agar AI (seperti Claude atau GPT) dapat menghasilkan kode yang lebih akurat, aman, dan sesuai dengan standar arsitektur proyek Anda.",
   "biome": "Biome adalah toolchain modern untuk proyek web yang menggabungkan linter dan formatter dalam satu alat yang ditulis dengan Rust, sehingga performanya sangat cepat dibandingkan kombinasi ESLint dan Prettier.",
   "owasp": "Mempelajari top 10 kerentanan keamanan web menurut OWASP (seperti XSS, CSRF, Injection). Developer frontend wajib memahami ini untuk mencegah celah keamanan sejak di sisi klien.",
   "testing": "Testing sangat penting untuk memastikan kode berfungsi dengan baik di skala produksi. Kita menggunakan berbagai pendekatan: Unit Testing (menguji per fungsi kecil), Integration Testing (menguji antar komponen), dan E2E Testing (menguji alur pengguna seolah-olah oleh manusia di browser sesungguhnya).",
   "bundlers": "Module bundlers mengumpulkan dan menyatukan semua file JavaScript, CSS, serta aset gambar menjadi satu kesatuan (bundle) sehingga browser dapat memuat aplikasi Anda secara efisien di environment produksi.",
   "linters": "Linters & Formatters secara otomatis memeriksa kesalahan pada kode, memaksakan gaya penulisan yang konsisten antar tim, dan membantu mendeteksi bug (seperti variabel tak terpakai) sebelum kode dijalankan.",
   "web_security": "Aspek keamanan tidak boleh diabaikan. Ini meliputi pemahaman CORS (berbagi sumber daya antar domain), HTTPS, CSP (untuk mencegah Cross-Site Scripting), dan berbagai celah keamanan yang rentan terjadi di sisi klien.",
   "web_apis": "Web API menghubungkan bahasa pemrograman JavaScript dengan fungsionalitas device / browser Anda. API seperti Geolocation, Canvas, Web Storage, atau Web Sockets memungkinkan pembuatan aplikasi web tingkat lanjut (PWA)."
};

function openPanel(id, title, category, desc) {
  const actualDesc = materiData[id] || (desc && desc !== 'undefined' ? desc : `Pelajari materi <strong>${title}</strong> secara mendalam. Modul ini adalah fondasi penting yang akan terus Anda gunakan dalam praktik industri sehari-hari.`);

  const resources = resourcesDB[id] || resourcesDB.default;

  const freeResourcesHtml = resources.map(res => `
    <a href="${res.url}" class="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-brand-600 dark:hover:bg-slate-800">
      <div class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-slate-400 shadow-sm transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-slate-700 dark:text-slate-300">
        <i class="fa-solid ${getIcon(res.type)}"></i>
      </div>
      <div class="flex flex-col">
        <span class="text-[0.65rem] font-bold uppercase text-slate-400 dark:text-slate-500">${res.type}</span>
        <span class="font-semibold text-sm text-slate-800 dark:text-slate-200 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">${res.title}</span>
      </div>
      <i class="fa-solid fa-arrow-right ml-auto text-sm text-brand-500 opacity-0 transform -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0"></i>
    </a>
  `).join('');

  let customContent = '';
  if (id === 'adv_projects' || id === 'beginner_projects' || id === 'project_ideas') {
    customContent = `
      <div class="bg-brand-50 dark:bg-brand-900/30 p-5 rounded-xl border border-brand-200 dark:border-brand-800 mb-8">
        <h4 class="font-bold text-brand-700 dark:text-brand-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-laptop-code"></i> Ide Proyek Latihan
        </h4>
        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2.5">
          <li>Membangun portofolio profesional dengan Next.js</li>
          <li>Aplikasi pencatat tugas (To-Do List interaktif)</li>
          <li>Dashboard admin sederhana yang terhubung API public</li>
          <li>Web kloning e-commerce dengan keranjang belanja (State Management)</li>
        </ul>
      </div>
    `;
  } else {
    customContent = `<p class="text-slate-600 dark:text-slate-400 text-[0.95rem] leading-relaxed mb-8">${actualDesc}</p>`;
  }

  panelContent.innerHTML = `
    <span class="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-500">${category}</span>
    <h2 class="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">${title}</h2>
    ${customContent}

    <div class="border-t border-slate-100 dark:border-slate-800 pt-6">
      <div class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4">
        <i class="fa-solid fa-book-open"></i> Free Resources
      </div>
      <div class="flex flex-col gap-3">
        ${freeResourcesHtml}
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
  overlay.classList.remove('opacity-0', 'pointer-events-none');
  overlay.classList.add('opacity-100');
  panel.classList.remove('translate-x-full');
  panel.classList.add('translate-x-0');
}

function closePanel() {
  document.body.style.overflow = '';
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0', 'pointer-events-none');
  panel.classList.remove('translate-x-0');
  panel.classList.add('translate-x-full');
}

renderRoadmap();
