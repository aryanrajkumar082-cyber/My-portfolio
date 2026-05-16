/* =========================================================
   KUMAR ARYAN — PORTFOLIO SCRIPTS
   ========================================================= */

// All 10 Behance projects with thumbnails and links
const projects = [
  {
    num: "01",
    title: "UI/UX — IRCTC Redesign",
    category: "UI / UX",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/f4cd7d247763957.Y3JvcCwxNjU0LDEyOTQsMzYsMA.jpg",
    link: "https://www.behance.net/gallery/247763957/UIUX-IRCTC-Redesign"
  },
  {
    num: "02",
    title: "Trove — Menswear Website",
    category: "UI / UX",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/b200f6247960323.Y3JvcCwxNjU0LDEyOTQsMzYsMA.jpg",
    link: "https://www.behance.net/gallery/247960323/UiUx-Trove-Menswear-Website"
  },
  {
    num: "03",
    title: "What's on India's Plate?",
    category: "Information Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/2dd543246636669.Y3JvcCwxMjczLDk5Niw2OSww.jpg",
    link: "https://www.behance.net/gallery/246636669/Infomation-Design-Whats-on-Indias-Plate"
  },
  {
    num: "04",
    title: "Poster — Social Media Post",
    category: "Graphics",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/d0169e247447285.Y3JvcCwxMDUyLDgyMywyMDUsMA.jpg",
    link: "https://www.behance.net/gallery/247447285/Poster-Design-Social-Media-Post"
  },
  {
    num: "05",
    title: "WCC — APR 2024",
    category: "Social",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/2591ea248153625.Y3JvcCw4MjgsNjQ3LDAsMA.jpg",
    link: "https://www.behance.net/gallery/248153625/Social-Media-Post-WCC-APR-2024"
  },
  {
    num: "06",
    title: "Shahpur Jat — Branding",
    category: "Brand Identity",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/5bb871246508331.Y3JvcCwxMDcwLDgzNyw0MzcsMTM1.jpg",
    link: "https://www.behance.net/gallery/246508331/Branding-Shahpur-jat"
  },
  {
    num: "07",
    title: "Motion Graphics",
    category: "Motion",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/242832248241505.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg",
    link: "https://www.behance.net/gallery/248241505/Motion-Graphics"
  },
  {
    num: "08",
    title: "StrategyWithShikhar — Reels",
    category: "Video Editing",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/b21068248045855.Y3JvcCwzOTk5LDMxMjgsMCw4MjE.jpg",
    link: "https://www.behance.net/gallery/248045855/StrategyWithShikhar-Video-Editing-Reels"
  },
  {
    num: "09",
    title: "Yatra — Travel Magazine",
    category: "Editorial",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/bb4b00247441931.Y3JvcCwzODM1LDMwMDAsODUsMA.jpg",
    link: "https://www.behance.net/gallery/247441931/YatraTravel-Magazine"
  },
  {
    num: "10",
    title: "Pattachitra — Stories in every strokes",
    category: "Illustration / Editorial",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/7ff681247061487.Y3JvcCwzMDU2LDIzOTAsNDY5LDMwMg.jpg",
    link: "https://www.behance.net/gallery/247061487/Pattachitra-Stories-in-every-strokes"
  }
];

// Inject projects into grid
const grid = document.getElementById("projects-grid");
if (grid) {
  grid.innerHTML = projects.map(p => `
    <a class="project" href="${p.link}" target="_blank" rel="noopener" aria-label="View ${p.title} on Behance">
      <div class="project__media">
        <span class="project__num">${p.num}</span>
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project__overlay">
          <span class="project__view">View on Behance ↗</span>
        </div>
      </div>
      <div class="project__info">
        <h3 class="project__title">${p.title}</h3>
        <span class="project__cat">${p.category}</span>
      </div>
    </a>
  `).join("");
}

// Scroll reveal for projects
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".project").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  io.observe(el);
});

// Mobile nav toggle
const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  // Close on link click
  nav.querySelectorAll(".nav__menu a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// Smooth scroll-to-top for anchor #top
document.querySelectorAll('a[href="#top"]').forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
