/* ============================================================
   2Flow — Global Navigation Component
   To add or change a nav item, edit the data below.
   Drop <div id="site-nav"></div> + this script at the top
   of every page's <body>.
   ============================================================ */

(function () {
  const BASE = '/2flow-website';
  const path = window.location.pathname;

  /* ── Nav data ──────────────────────────────────────────── */

  const deliverItems = [
    {
      col: 'Core Fulfilment', colClass: 'green',
      items: [
        {
          href: BASE + '/deliver/pick-and-pack/',
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"/></svg>`,
          iconBg: 'green-bg',
          title: 'Pick &amp; Pack',
          desc: 'Accurate, brand-aligned fulfilment at speed',
        },
        {
          href: BASE + '/deliver/kitting-bundling/',
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
          iconBg: 'green-bg',
          title: 'Kitting &amp; Bundling',
          desc: 'Gift sets, subscriptions &amp; multi-SKU builds',
        },
      ]
    },
    {
      col: 'Value-Add', colClass: 'navy',
      items: [
        {
          href: BASE + '/deliver/returns-refurbishment/',
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>`,
          iconBg: 'navy-bg',
          title: 'Returns &amp; Refurbishment',
          desc: 'Grade, repack, and restock returned goods',
        },
        {
          href: BASE + '/deliver/finishing-personalisation/',
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
          iconBg: 'navy-bg',
          title: 'Finishing &amp; Personalisation',
          desc: 'Inserts, labels, ribbons &amp; bespoke touches',
        },
      ]
    },
    {
      col: 'Compliance &amp; Retail', colClass: 'slate',
      items: [
        {
          href: BASE + '/deliver/compliance-preparation/',
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
          iconBg: 'slate-bg',
          title: 'Compliance Preparation',
          desc: 'Amazon FBA, retail labelling &amp; audit-ready',
        },
      ]
    }
  ];

  const solutionsSectors = [
    { href: BASE + '/solutions/beauty-personal-care/', label: 'Beauty &amp; Personal Care' },
    { href: BASE + '/solutions/health-supplements/',  label: 'Health &amp; Supplements' },
    { href: BASE + '/solutions/home-lifestyle/',      label: 'Home &amp; Lifestyle' },
    { href: BASE + '/solutions/consumer-electronics/',label: 'Consumer Electronics' },
  ];

  const solutionsStages = [
    { href: BASE + '/solutions/dtc-brands-scaling/', label: 'DTC Brands Scaling Fast' },
    { href: BASE + '/solutions/moving-into-retail/', label: 'Moving into Retail' },
    { href: BASE + '/solutions/replacing-a-3pl/',   label: 'Replacing a 3PL' },
  ];

  const aboutLinks = [
    { href: BASE + '/#about',   label: 'Our Story' },
    { href: BASE + '/#team',    label: 'The Team' },
    { href: BASE + '/#careers', label: 'Careers' },
  ];

  /* ── Helpers ───────────────────────────────────────────── */
  function isActive(href) {
    return path === href || path.startsWith(href.replace(/\/$/, '') + '/');
  }

  /* ── Build deliver mega menu ───────────────────────────── */
  function buildDeliverMega() {
    const cols = deliverItems.map(group => {
      const items = group.items.map(item => {
        const active = isActive(item.href) ? ' active' : '';
        return `
          <a href="${item.href}" class="mega-item${active}">
            <div class="mega-item-icon ${item.iconBg}">${item.icon}</div>
            <div class="mega-item-text">
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
          </a>`;
      }).join('');
      return `
        <div class="mega-col">
          <div class="mega-col-label ${group.colClass}">${group.col}</div>
          ${items}
        </div>`;
    }).join('');

    return `
      <div class="mega-menu" id="deliverMega" role="region" aria-label="What We Deliver menu">
        <div class="mega-inner deliver-grid">${cols}</div>
      </div>`;
  }

  /* ── Build solutions mega menu ─────────────────────────── */
  function buildSolutionsMega() {
    const sectors = solutionsSectors.map(l => {
      const active = isActive(l.href) ? ' active' : '';
      return `<a href="${l.href}" class="mega-link${active}"><strong>${l.label}</strong></a>`;
    }).join('');

    const stages = solutionsStages.map(l => {
      const active = isActive(l.href) ? ' active' : '';
      return `<a href="${l.href}" class="mega-link${active}"><strong>${l.label}</strong></a>`;
    }).join('');

    return `
      <div class="mega-menu" id="solutionsMega" role="region" aria-label="Solutions For menu">
        <div class="mega-inner solutions-grid">
          <div class="mega-col">
            <div class="mega-group-title">By Sector</div>
            ${sectors}
          </div>
          <div class="mega-col">
            <div class="mega-group-title">By Stage</div>
            ${stages}
          </div>
        </div>
      </div>`;
  }

  /* ── Build about dropdown ──────────────────────────────── */
  function buildAboutDropdown() {
    return aboutLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  }

  /* ── Detect active top-level sections ──────────────────── */
  const deliverActive  = path.includes('/deliver/')   ? ' nav-active' : '';
  const solutionActive = path.includes('/solutions/') ? ' nav-active' : '';
  const aboutActive    = path.includes('/about/')     ? ' nav-active' : '';

  /* ── Build full nav HTML ───────────────────────────────── */
  const navHTML = `
    <a href="#main-content" class="skip-link">Skip to content</a>

    <nav id="mainNav" role="navigation" aria-label="Main navigation">
      <a href="${BASE}/" class="nav-logo" aria-label="2Flow home">
        <img src="${BASE}/Images/2flow-logo.png" alt="2Flow" width="120" height="34">
      </a>

      <div class="nav-links" id="navLinks">
        <div class="nav-item" id="deliverNavItem">
          <a href="#" class="${deliverActive}" aria-haspopup="true" aria-expanded="false" id="deliverNavBtn">
            What We Deliver <span class="nav-chevron">▾</span>
          </a>
        </div>
        <div class="nav-item" id="solutionsNavItem">
          <a href="#" class="${solutionActive}" aria-haspopup="true" aria-expanded="false" id="solutionsNavBtn">
            Solutions For <span class="nav-chevron">▾</span>
          </a>
        </div>
        <div class="nav-item has-dropdown">
          <a href="#" class="${aboutActive}">About <span class="nav-chevron">▾</span></a>
          <div class="dropdown">${buildAboutDropdown()}</div>
        </div>
        <div class="nav-item">
          <a href="${BASE}/#contact">Contact</a>
        </div>
      </div>

      <div class="nav-cta-wrap">
        <a href="${BASE}/#contact" class="nav-cta">Get a Quote</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    ${buildDeliverMega()}
    ${buildSolutionsMega()}
  `;

  /* ── Inject into placeholder ───────────────────────────── */
  const placeholder = document.getElementById('site-nav');
  if (placeholder) placeholder.innerHTML = navHTML;

  /* ── Wire up behaviour (runs after injection) ──────────── */
  document.addEventListener('DOMContentLoaded', function () {

    // Scroll state
    const nav = document.getElementById('mainNav');
    if (nav) {
      function updateScroll() { nav.classList.toggle('nav-scrolled', window.scrollY > 20); }
      window.addEventListener('scroll', updateScroll, { passive: true });
      updateScroll();
    }

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        const open = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
      });
    }

    // Mega menus
    const deliverBtn   = document.getElementById('deliverNavBtn');
    const deliverMega  = document.getElementById('deliverMega');
    const solutionsBtn = document.getElementById('solutionsNavBtn');
    const solutionsMega = document.getElementById('solutionsMega');

    function closeMegas() {
      [deliverMega, solutionsMega].forEach(m => m && m.classList.remove('active'));
      [deliverBtn, solutionsBtn].forEach(b => b && b.setAttribute('aria-expanded', 'false'));
    }

    function toggleMega(btn, mega, other, otherBtn) {
      const isOpen = mega.classList.contains('active');
      other.classList.remove('active');
      otherBtn.setAttribute('aria-expanded', 'false');
      mega.classList.toggle('active', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    }

    if (deliverBtn && deliverMega) {
      deliverBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMega(deliverBtn, deliverMega, solutionsMega, solutionsBtn);
      });
    }

    if (solutionsBtn && solutionsMega) {
      solutionsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMega(solutionsBtn, solutionsMega, deliverMega, deliverBtn);
      });
    }

    document.addEventListener('click', function (e) {
      if (
        !e.target.closest('#deliverNavItem') && !e.target.closest('#deliverMega') &&
        !e.target.closest('#solutionsNavItem') && !e.target.closest('#solutionsMega')
      ) {
        closeMegas();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMegas();
    });
  });

})();
