// ── IDEAS DATA ──
const ideas = [
  { id:1, title:"AI Legal Assistant for SMEs", desc:"Automates contract review and compliance checks for small businesses using GPT-4.", cat:"AI / SaaS", vs:87, funded:72, investors:14, country:"🇬🇧 UK", filter:"ai" },
  { id:2, title:"Remote Mental Health Platform for Rural Africa", desc:"Connecting rural communities to licensed therapists via USSD and low-bandwidth apps.", cat:"HealthTech", vs:91, funded:55, investors:8, country:"🇳🇬 Nigeria", filter:"health" },
  { id:3, title:"Cross-Border Micro-Payments for Gig Workers", desc:"Instant, zero-fee international payments for freelancers in emerging markets.", cat:"FinTech", vs:79, funded:90, investors:31, country:"🇵🇰 Pakistan", filter:"fintech" },
  { id:4, title:"Gamified Coding Education for K-12", desc:"Teaching programming through story-based game levels aligned with school curriculums.", cat:"EdTech", vs:83, funded:41, investors:19, country:"🇮🇳 India", filter:"edtech" },
  { id:5, title:"Solar Micro-Grid Management SaaS", desc:"Software to manage, optimize and sell excess solar energy in off-grid communities.", cat:"ClimaTech", vs:76, funded:28, investors:6, country:"🇿🇦 South Africa", filter:"climate" },
  { id:6, title:"B2B Restaurant Supply Chain AI", desc:"Predicting ingredient demand and automating procurement for restaurant chains.", cat:"AI / SaaS", vs:88, funded:63, investors:22, country:"🇧🇷 Brazil", filter:"ai" },
];

function renderIdeas(filter = "all") {
  const grid = document.getElementById("ideasGrid");
  const filtered = filter === "all" ? ideas : ideas.filter(i => i.filter === filter);
  grid.innerHTML = filtered.map(idea => `
    <div class="idea-card" data-id="${idea.id}">
      <div class="idea-card-top">
        <span class="idea-cat">${idea.cat}</span>
        <span class="idea-vs">VS ${idea.vs}</span>
      </div>
      <div class="idea-title">${idea.title}</div>
      <div class="idea-desc">${idea.desc}</div>
      <div class="idea-progress">
        <div class="idea-progress-fill" style="width:0%" data-width="${idea.funded}%"></div>
      </div>
      <div class="idea-footer">
        <span>${idea.funded}% funded · ${idea.investors} investors</span>
        <span class="idea-country">${idea.country}</span>
      </div>
    </div>
  `).join("");

  // Animate progress bars
  setTimeout(() => {
    grid.querySelectorAll(".idea-progress-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 100);
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderIdeas(btn.dataset.filter);
  });
});

renderIdeas();

// ── NAVBAR SCROLL ──
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 30);
});

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll("[data-target]").forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const heroStats = document.querySelector(".hero-stats");
if (heroStats) counterObserver.observe(heroStats);

// ── VALIDATION SCORE RING ──
function animateVS() {
  const ring = document.getElementById("vsRing");
  const scoreEl = document.getElementById("vsScore");
  if (!ring || !scoreEl) return;

  // Add SVG gradient
  const svg = ring.closest("svg");
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `<linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6C47FF"/>
    <stop offset="100%" stop-color="#00D4A8"/>
  </linearGradient>`;
  svg.prepend(defs);

  const target = 82;
  const circumference = 502;
  let current = 0;
  const step = target / 80;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    const offset = circumference - (current / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    scoreEl.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 20);

  // Animate dimension bars
  document.querySelectorAll(".dim-fill").forEach(bar => {
    const w = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => { bar.style.width = w; }, 200);
  });
}

const vsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateVS();
      vsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const trustSection = document.querySelector(".trust-section");
if (trustSection) vsObserver.observe(trustSection);

// ── PRICING TOGGLE ──
let isAnnual = false;
const toggleBtn = document.getElementById("toggleBilling");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    isAnnual = !isAnnual;
    toggleBtn.classList.toggle("active", isAnnual);
    document.querySelectorAll(".price-num").forEach(el => {
      el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
    });
  });
}

// ── SMOOTH CARD ENTRANCE ──
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".step-card, .investor-card, .price-card, .testi-card").forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(24px)";
  card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s, box-shadow 0.3s`;
  cardObserver.observe(card);
});
