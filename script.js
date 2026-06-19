/* ============================================
   Siddhi Manwatkar — Portfolio (vanilla JS)
   Renders all dynamic sections from resume data
   ============================================ */

// ---------- Resume data (source of truth) ----------
const PROFILE = {
  name: "Siddhi Kishor Manwatkar",
  location: "Nagpur, India",
  email: "siddhimanwatkar2005@gmail.com",
  phone: "+91 9561288385",
  linkedin: "https://linkedin.com/in/siddhi-manwatkar",
  linkedinLabel: "linkedin.com/in/siddhi-manwatkar",
};

const EDUCATION = [
  { degree: "B.Sc. Information Technology (Pursuing)", school: "Dr. S. C. Gulhane Prerna College, Nagpur", period: "2023 – 2026", score: null },
  { degree: "HSC — Electronic Science", school: "Baba Nanak Sindhi Hindi Jr. College", period: "2022 – 2023", score: "57.83%" },
  { degree: "SSC", school: "Hindustan Vidyalaya, Nagpur", period: "2020 – 2021", score: "88.40%" },
];

const EXPERIENCE = [
  {
    role: "Back Office Executive",
    company: "Zidion Solution Pvt. Ltd., Nagpur",
    period: "June 2025 – April 2026",
    bullets: [
      "Managed customer interactions and telecalling campaigns, generating leads and maintaining strong client relationships.",
      "Performed accurate data entry and maintained stock sheets, improving record reliability.",
      "Handled daily cash collection and reconciliation, ensuring zero discrepancies.",
      "Followed up with customers proactively, reducing response turnaround time.",
    ],
  },
];

const INTERNSHIPS = [
  {
    title: "Data Analytics & Cyber Security Job Simulation",
    org: "Deloitte (via Forage)",
    period: "July 2025",
    bullets: [
      "Conducted exploratory data analysis and cyber risk profiling using industry-standard frameworks.",
      "Delivered data-driven insights and findings through structured reports and presentations.",
    ],
  },
  {
    title: "GenAI-Powered Data Analytics Job Simulation",
    org: "Tata Group (via Forage)",
    period: "June 2026",
    bullets: [
      "Applied AI-driven techniques for collections strategy, customer segmentation, and data storytelling.",
      "Produced actionable visual dashboards to communicate analytical outcomes to stakeholders.",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Cyber Job Simulation", issuer: "Deloitte (via Forage)", date: "July 2025" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", date: "July 2025" },
  { name: "Technology Job Simulation", issuer: "Deloitte (via Forage)", date: "July – August 2025" },
  { name: "GenAI-Powered Data Analytics Job Simulation", issuer: "Tata Group (via Forage)", date: "June 2026" },
];

const SKILL_GROUPS = [
  { label: "Programming & Web", icon: "code-2", items: ["HTML5", "CSS3", "JavaScript", "SQL", "Object-Oriented Programming"] },
  { label: "Technical Concepts", icon: "shield-check", items: ["Computer Networking", "RESTful APIs", "Generative AI", "Cyber Security"] },
  { label: "Professional", icon: "sparkles", items: ["Data Analysis", "Problem Solving", "Strategic Thinking", "Formal Communication", "Lead Generation"] },
  { label: "Tools & Platforms", icon: "briefcase", items: ["MS Office (Word, Excel)"] },
];

const ACHIEVEMENTS = [
  "First Place — Collegiate Kho-Kho Competition",
  "Best Student Trophy — Awarded by LIC for academic and co-curricular performance",
  "Multiple certificates of excellence for academic performance across school and college",
];

// ---------- Small helper: safe HTML escape ----------
const escape = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

// ---------- Render helpers ----------
function renderEducation() {
  const grid = document.getElementById("education-grid");
  grid.innerHTML = EDUCATION.map((e) => `
    <article class="card">
      <i data-lucide="graduation-cap" class="icon"></i>
      <h3>${escape(e.degree)}</h3>
      <p class="org">${escape(e.school)}</p>
      <div class="footer-row">
        <span class="mono small" style="color: var(--muted-foreground);">${escape(e.period)}</span>
        ${e.score ? `<span class="pill">${escape(e.score)}</span>` : ""}
      </div>
    </article>
  `).join("");
}

function renderExperience() {
  const list = document.getElementById("experience-list");
  list.innerHTML = EXPERIENCE.map((job) => `
    <article class="card" style="padding: 2rem;">
      <div class="exp-head">
        <div>
          <h3>${escape(job.role)}</h3>
          <p class="org">${escape(job.company)}</p>
        </div>
        <span class="tag-period">${escape(job.period)}</span>
      </div>
      <ul class="bullets">
        ${job.bullets.map((b) => `<li>${escape(b)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderInternships() {
  const grid = document.getElementById("internships-grid");
  grid.innerHTML = INTERNSHIPS.map((i) => `
    <article class="card">
      <div class="intern-head">
        <i data-lucide="briefcase" class="icon"></i>
        <span class="mono small" style="color: var(--muted-foreground);">${escape(i.period)}</span>
      </div>
      <h3>${escape(i.title)}</h3>
      <p class="org">${escape(i.org)}</p>
      <ul class="bullets" style="margin-top: 1rem;">
        ${i.bullets.map((b) => `<li>${escape(b)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderCertifications() {
  const grid = document.getElementById("certifications-grid");
  grid.innerHTML = CERTIFICATIONS.map((c) => `
    <article class="card">
      <i data-lucide="award" class="icon" style="width:1.25rem;height:1.25rem;"></i>
      <h3 style="font-size:0.875rem;">${escape(c.name)}</h3>
      <p class="org" style="font-size:0.75rem;">${escape(c.issuer)}</p>
      <p class="mono small" style="margin-top:0.75rem;color:var(--muted-foreground);">${escape(c.date)}</p>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILL_GROUPS.map((g) => `
    <article class="card">
      <div class="skill-head">
        <span class="skill-icon"><i data-lucide="${g.icon}"></i></span>
        <h3 style="margin-top:0;">${escape(g.label)}</h3>
      </div>
      <div class="skill-tags">
        ${g.items.map((it) => `<span class="skill-tag">${escape(it)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  grid.innerHTML = ACHIEVEMENTS.map((a, idx) => `
    <article class="card">
      <span class="achievement-num">0${idx + 1}</span>
      <p class="achievement-text">${escape(a)}</p>
    </article>
  `).join("");
}

function renderContact() {
  const items = [
    { icon: "mail", label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: "phone", label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: "linkedin", label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin },
    { icon: "map-pin", label: "Location", value: PROFILE.location, href: null },
  ];

  const grid = document.getElementById("contact-grid");
  grid.innerHTML = items.map((c) => {
    const inner = `
      <span class="skill-icon"><i data-lucide="${c.icon}"></i></span>
      <div style="min-width:0;">
        <p class="label">${escape(c.label)}</p>
        <p class="value">${escape(c.value)}</p>
      </div>
    `;
    if (c.href) {
      const external = c.href.startsWith("http");
      return `<a class="contact-item" href="${escape(c.href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`;
    }
    return `<div class="contact-item">${inner}</div>`;
  }).join("");
}

// ---------- Nav: scroll backdrop + mobile menu ----------
function setupNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  // Add subtle backdrop after scroll
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu toggle
  toggle.addEventListener("click", () => {
    const open = !menu.hidden;
    menu.hidden = open;
    toggle.innerHTML = open ? '<i data-lucide="menu"></i>' : '<i data-lucide="x"></i>';
    if (window.lucide) window.lucide.createIcons();
  });

  // Close mobile menu when a link is clicked
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.hidden = true;
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderEducation();
  renderExperience();
  renderInternships();
  renderCertifications();
  renderSkills();
  renderAchievements();
  renderContact();

  setupNav();

  // Render all Lucide icons after DOM injection
  if (window.lucide) window.lucide.createIcons();
});