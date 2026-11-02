/**
 * FOSINT-SI — main.js
 */

document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  initNav();
  initMobileNav();
  initTimeline();
  initCountdown();
});

/* ── BUILD PAGE ── */
function buildPage() {
  buildMeta();
  buildHero();
  buildCFP();
  buildTimeline();
  buildSubmission();
  buildChairs();
  buildPC();
  buildEditions();
  buildFooter();
}

/* ── Page meta & nav logo ── */
function buildMeta() {
  const c = SITE.conference;
  document.title = `${c.shortName} — ${c.fullName}`;
  qs('.nav-logo').textContent = c.shortName;
  qs('.nav-cta').href = c.submitUrl;
  qs('.nav-cta').target = '_blank';
  qs('.drawer-cta').href = c.submitUrl;
  qs('.drawer-cta').target = '_blank';
}

/* ── Hero ── */
function buildHero() {
  const c = SITE.conference;
  qs('.hero-bg').style.backgroundImage = `url('${c.heroImage}')`;
  qs('.hero-eyebrow').innerHTML = `International Symposium on`;
  qs('#hero h1').innerHTML = c.heroTitle;
  qs('.hero-conjunction').innerHTML = `In conjunction with <a href="${c.conjunction.url}" target="_blank">${c.conjunction.name}</a>`;

  const pills = [
    { icon: iconPin,    text: c.location },
    { icon: iconCal,    text: c.dates },
    { icon: iconPeople, text: c.format },
  ];
  qs('.hero-pills').innerHTML = pills.map(p =>
    `<div class="hero-pill">${p.icon}${p.text}</div>`
  ).join('');
}

/* ── Call for Papers ── */
function buildCFP() {
  qs('.cfp-prose').innerHTML = SITE.callForPapers
    .map(p => `<p>${p}</p>`)
    .join('');
}

/* ── Timeline ── */
function buildTimeline() {
  const now = Date.now();
  qs('.timeline').innerHTML = SITE.deadlines.map((d, i) => {
    const past  = now > new Date(d.isoDate).getTime();
    const next  = !past && (i === 0 || now > new Date(SITE.deadlines[i - 1].isoDate).getTime());
    const cls   = ['tl-item', d.key ? 'key' : '', past ? 'past' : '', next ? 'active' : ''].filter(Boolean).join(' ');
    const countdownHtml = next ? `<div class="tl-countdown" id="tl-countdown-boxes"></div>` : '';
    return `
      <div class="${cls}">
        <div class="tl-dot"></div>
        <div class="tl-main">
          <div class="tl-title">${d.label}</div>
          <div class="tl-date">${fmtDate(d.isoDate, d.dateOnly)}</div>
          ${countdownHtml}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Submission ── */
function buildSubmission() {
  const s = SITE.submission;
  const c = SITE.conference;

  qs('.sub-prose').innerHTML =
    s.paragraphs.map(p => `<p>${p}</p>`).join('') +
    `<a href="${c.submitUrl}" class="submit-btn" target="_blank">
      ${s.submitLabel}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>`;
}

/* ── Chairs ── */
function buildChairs() {
  qs('.org-chairs-list').innerHTML = SITE.chairs.map(c => `
    <div class="org-list-item">
      <span class="org-list-role">${c.role}</span>
      <span class="org-list-name">${c.name}</span>
      <span class="org-list-affil">${c.affil}</span>
    </div>
  `).join('');
}

/* ── Program Committee ── */
function buildPC() {
  qs('.pc-list').innerHTML = SITE.programCommittee.map(m => `
    <div class="pc-list-item">
      <span class="pc-list-name">${m.name}</span>
      <span class="pc-list-affil">${m.affil}</span>
    </div>
  `).join('');

  const orgBody = qs('.org-body');
  if (orgBody && !orgBody.parentElement.classList.contains('section-body-centered')) {
    const wrap = document.createElement('div');
    wrap.className = 'section-body-centered';
    orgBody.parentNode.insertBefore(wrap, orgBody);
    wrap.appendChild(orgBody);
  }
}

/* ── Previous editions ── */
function buildEditions() {
  qs('.editions-grid').innerHTML = SITE.editions.map(e => {
    const bgStyle = e.image ? `background-image: url('images/${e.image}');` : '';
    const venueStr = e.venue ? `<br>${e.venue}` : '';
    const tag = e.url ? 'a' : 'div';
    const hrefAttr = e.url ? ` href="${e.url}"` : '';
    const linkStr = e.url ? `<span class="ed-link">Visit site &rarr;</span>` : '';
    return `
      <${tag} class="edition-cell"${hrefAttr}>
        <div class="edition-cell-bg" style="${bgStyle}"></div>
        <div class="edition-cell-overlay"></div>
        <div class="edition-cell-content">
          <div class="ed-year">${e.year}</div>
          <div class="ed-location">
            <strong>${e.location}</strong>${venueStr}<br>${e.dates}
          </div>
          ${linkStr}
        </div>
      </${tag}>
    `;
  }).join('');
}

/* ── Footer ── */
function buildFooter() {
  const c = SITE.conference;
  const sep = `<span class="footer-sep">·</span>`;
  qs('footer').innerHTML = `
    <span class="footer-line">
      <strong style="color:var(--white-80)">${c.shortName}</strong>${sep}${c.fullName}${sep}${c.location}${sep}${c.dates}${sep}In conjunction with <a href="${c.conjunction.url}" target="_blank">${c.conjunction.name}</a>${sep}<a href="${c.heroCredit.url}" target="_blank">${c.heroCredit.text}</a>
    </span>
  `;
}

/* ── Navigation bar ── */
function initNav() {
  const nav = qs('#mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

/* ── Mobile navigation ── */
function initMobileNav() {
  const burger = qs('.nav-burger');
  const drawer = qs('.nav-drawer');

  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  qsa('a', drawer).forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Timeline ── */
function initTimeline() {
  const items = qsa('.tl-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const siblings = [...e.target.parentNode.querySelectorAll('.tl-item')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('visible'), idx * 130);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
}

/* ── Countdown ── */
function initCountdown() {
  tick();
  setInterval(tick, 1000);
}

function tick() {
  const now  = Date.now();
  const next = SITE.deadlines.find(d => new Date(d.isoDate).getTime() > now);
  const box  = qs('#tl-countdown-boxes');
  if (!box) return;

  if (!next) {
    box.innerHTML = `<span class="tl-cd-done">Conference underway!</span>`;
    return;
  }

  const diff = new Date(next.isoDate).getTime() - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000)  / 60000);
  const s = Math.floor((diff % 60000)    / 1000);

  const pad = n => String(n).padStart(2, '0');

  if (!box.dataset.built) {
    box.dataset.built = '1';
    box.innerHTML = `
      <div class="tl-cd-boxes">
        <div class="tl-cd-box"><span class="tl-cd-num" id="cd-days">${pad(d)}</span><span class="tl-cd-unit">Days</span></div>
        <div class="tl-cd-sep">:</div>
        <div class="tl-cd-box"><span class="tl-cd-num" id="cd-hrs">${pad(h)}</span><span class="tl-cd-unit">Hrs</span></div>
        <div class="tl-cd-sep">:</div>
        <div class="tl-cd-box"><span class="tl-cd-num" id="cd-min">${pad(m)}</span><span class="tl-cd-unit">Min</span></div>
        <div class="tl-cd-sep">:</div>
        <div class="tl-cd-box"><span class="tl-cd-num" id="cd-sec">${pad(s)}</span><span class="tl-cd-unit">Sec</span></div>
      </div>
    `;
  } else {
    setNum('cd-days', d);
    setNum('cd-hrs',  h);
    setNum('cd-min',  m);
    setNum('cd-sec',  s);
  }
}

/* ── Countdown animation ── */
const _prev = {};
function setNum(id, val) {
  const el = qs(`#${id}`);
  if (!el) return;
  const str = String(val).padStart(2, '0');
  if (_prev[id] !== str) {
    el.textContent = str;
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
    setTimeout(() => el.classList.remove('tick'), 200);
    _prev[id] = str;
  }
}

/* ── Data from data.js ── */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Date formatting ── */
function fmtDate(iso, dateOnly = false) {
  const date = new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
  if (dateOnly) return date;
  const time = new Date(iso).toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', timeZone: 'UTC', hour12: false,
  });
  return ` ${time} UTC · ${date}`;
}

/* ── SVG icons ── */
const iconPin    = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const iconCal    = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
const iconPeople = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`;
