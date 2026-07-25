/* =========================================================
   BLG · Bilibili Gaming Valorant — data + interactions
   Source: Liquipedia, VLR.gg, TheSpike.gg (July 2026)
   ========================================================= */

const ROSTER = [
  { tag: "Knight",  name: "Liu Yuxiang · 刘宇翔",   role: "Player",  meta: "China",   accent: "pink" },
  { tag: "whzy",    name: "Wang Haozhe · 王昊哲",   role: "Player",  meta: "China",   accent: "cyan" },
  { tag: "rushia",  name: "Wang Xiaojie · 王晓杰",  role: "Player",  meta: "China",   accent: "pink" },
  { tag: "nephh",   name: "Marcus Tan",             role: "Player",  meta: "Singapore", accent: "cyan" },
  { tag: "bud",     name: "Yang Renyu · 杨韧余",    role: "Player",  meta: "China",   accent: "pink" },
  { tag: "yilai",   name: "Gu Yiming · 顾依铭",     role: "Rookie",  meta: "Signed 2026", accent: "cyan" },
];

const STAFF = [
  { tag: "Anaks",  name: "Ye Sang-jun",           role: "Head Coach" },
  { tag: "Jexen",  name: "Wang Lin Xiao · 王林骁", role: "Coach" },
  { tag: "Rain",   name: "Deng Shiyao · 邓诗耀",   role: "Team Leader" },
  { tag: "Gandolf",name: "Jiang Hao · 蒋浩",       role: "Manager" },
  { tag: "balax",  name: "Thong Chern Kwi",        role: "Analyst" },
];

const TIMELINE = [
  {
    year: "2023",
    title: "Division founded",
    desc: "BLG announces its Valorant division and enters the FGC Valorant Invitational 2023 Act 1 Qualifiers within the month.",
    result: "FOUNDED",
    win: false
  },
  {
    year: "2023",
    title: "Valorant Champions 2023",
    desc: "A rookie-year run all the way to Los Angeles closes at 7th–8th place — the result that put BLG on the map.",
    result: "7TH–8TH · $50,000",
    win: true
  },
  {
    year: "2024",
    title: "Champions Tour 2024: China Kickoff",
    desc: "BLG opens the season strong, falling just short in the Play-In final.",
    result: "2ND",
    win: false
  },
  {
    year: "2024",
    title: "FGC Invitational 2024",
    desc: "A perfect run through the invitational bracket ends in a trophy.",
    result: "1ST",
    win: true
  },
  {
    year: "2025",
    title: "VCT 2025: China Stage 2 Playoffs",
    desc: "BLG tops the China Stage 2 bracket to claim their first VCT stage title.",
    result: "1ST",
    win: true
  },
  {
    year: "2025",
    title: "Valorant Champions 2025",
    desc: "A second Champions appearance, competing through the group stage in Paris.",
    result: "GROUP STAGE",
    win: false
  },
  {
    year: "2026",
    title: "China Evolution Series 2026: Act 1",
    desc: "BLG opens the 2026 season by taking the Act 1 main event outright.",
    result: "1ST",
    win: true
  },
];

const RESULTS = [
  { opp: "Nova Esports",        ev: "Esports World Cup 2026 · China Qualifier", score: "1 : 2", win: false },
  { opp: "Wolves Esports",      ev: "Esports World Cup 2026 · China Qualifier", score: "2 : 0", win: true  },
  { opp: "All Gamers",          ev: "VCT 2026 · China Stage 1",                  score: "1 : 2", win: false },
  { opp: "FunPlus Phoenix",     ev: "VCT 2026 · China Stage 1",                  score: "2 : 1", win: true  },
  { opp: "Titan Esports Club",  ev: "VCT 2026 · China Stage 1",                  score: "0 : 2", win: false },
];

const DANMAKU_LINES = [
  "BLG 加油!!!", "无畏契约分部", "GG", "冲鸭 冲鸭", "牛逼!!", "Knight 接管比赛",
  "CHINA #5", "启动!", "下一把", "别慌，还有时间", "yyds", "666666",
  "VCT CHINA", "BLG NB", "弹幕护体", "满编出发", "记得三连", "稳住我们能赢"
];

/* ---------- render roster ---------- */
function renderRoster(){
  const grid = document.getElementById("rosterGrid");
  grid.innerHTML = ROSTER.map(p => `
    <article class="player-card${p.accent === 'cyan' ? ' is-cyan' : ''}">
      <span class="corner tl"></span>
      <span class="corner br"></span>
      <span class="player-role">${p.role}</span>
      <h3 class="player-tag">${p.tag}</h3>
      <p class="player-name">${p.name}</p>
      <div class="player-meta">
        <span class="player-meta-label">REGION</span>
        <span class="player-meta-value">${p.meta}</span>
      </div>
    </article>
  `).join("");
}

/* ---------- render staff ---------- */
function renderStaff(){
  const grid = document.getElementById("staffGrid");
  grid.innerHTML = STAFF.map(s => `
    <div class="staff-card">
      <span class="staff-title">${s.role}</span>
      <h3 class="staff-tag">${s.tag}</h3>
      <p class="staff-name">${s.name}</p>
    </div>
  `).join("");
}

/* ---------- render timeline ---------- */
function renderTimeline(){
  const tl = document.getElementById("timeline");
  tl.innerHTML = TIMELINE.map(t => `
    <div class="tl-item${t.win ? ' is-win' : ''}">
      <span class="tl-dot"></span>
      <span class="tl-year mono">${t.year}</span>
      <h3 class="tl-title">${t.title}</h3>
      <p class="tl-desc">${t.desc}</p>
      <span class="tl-result mono">${t.result}</span>
    </div>
  `).join("");
}

/* ---------- render results ---------- */
function renderResults(){
  const list = document.getElementById("resultsList");
  list.innerHTML = RESULTS.map(r => `
    <div class="result-row">
      <div class="result-event">
        <span class="result-opponent">vs. ${r.opp}</span>
        <span class="result-tourney">${r.ev}</span>
      </div>
      <span class="result-score ${r.win ? 'win' : 'loss'} mono">${r.score}</span>
      <span class="result-tag ${r.win ? 'win' : 'loss'}">${r.win ? 'WIN' : 'LOSS'}</span>
    </div>
  `).join("");
}

/* ---------- danmaku bullet comments ---------- */
function spawnDanmaku(){
  const layer = document.getElementById("danmakuLayer");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#fb7299", "#4be3ff", "#f4f2f7", "#ff9ec4"];
  const line = DANMAKU_LINES[Math.floor(Math.random() * DANMAKU_LINES.length)];
  const el = document.createElement("span");
  el.className = "danmaku-item";
  el.textContent = line;

  const top = Math.random() * 88; // vh
  const duration = 9 + Math.random() * 9; // seconds
  const size = 0.85 + Math.random() * 0.9; // rem-ish scale
  const color = colors[Math.floor(Math.random() * colors.length)];

  el.style.top = top + "vh";
  el.style.fontSize = size + "rem";
  el.style.color = color;
  el.style.opacity = (0.35 + Math.random() * 0.4).toFixed(2);
  el.style.animationDuration = duration + "s";

  layer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000 + 500);
}

function startDanmaku(){
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // seed a handful immediately, staggered
  for (let i = 0; i < 6; i++){
    setTimeout(spawnDanmaku, i * 900);
  }
  setInterval(spawnDanmaku, 1400);
}

/* ---------- ticker: duplicate content for seamless loop ---------- */
function primeTicker(){
  const track = document.getElementById("tickerTrack");
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

/* ---------- nav: scroll state + mobile toggle ---------- */
function setupNav(){
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) nav.style.borderBottomColor = "var(--line-strong)";
    else nav.style.borderBottomColor = "var(--line)";
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- scroll reveal ---------- */
function setupReveal(){
  const targets = document.querySelectorAll(
    ".reveal, .player-card, .staff-card, .tl-item, .result-row"
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(t => io.observe(t));
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderRoster();
  renderStaff();
  renderTimeline();
  renderResults();
  primeTicker();
  setupNav();
  setupReveal();
  startDanmaku();
});
