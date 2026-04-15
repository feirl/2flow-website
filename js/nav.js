/* ============================================================
   2Flow — Global Navigation Component
   To add or change a nav item, edit the data below.
   Drop <div id="site-nav"></div> + this script tag at the
   very top of every page's <body>.
   ============================================================ */

(function () {
  var BASE = '/2flow-website';
  var path = window.location.pathname;

  /* ── Nav data ──────────────────────────────────────────── */

  var deliverItems = [
    {
      col: 'Core Fulfilment', colClass: 'green',
      items: [
        {
          href: BASE + '/deliver/pick-and-pack/',
          iconBg: 'green-bg',
          title: 'Pick &amp; Pack',
          desc: 'Accurate, brand-aligned fulfilment at speed',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"/></svg>',
        },
        {
          href: BASE + '/deliver/kitting-bundling/',
          iconBg: 'green-bg',
          title: 'Kitting &amp; Bundling',
          desc: 'Gift sets, subscriptions &amp; multi-SKU builds',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
        },
      ]
    },
    {
      col: 'Value-Add', colClass: 'navy',
      items: [
        {
          href: BASE + '/deliver/returns-refurbishment/',
          iconBg: 'navy-bg',
          title: 'Returns &amp; Refurbishment',
          desc: 'Grade, repack, and restock returned goods',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>',
        },
        {
          href: BASE + '/deliver/finishing-personalisation/',
          iconBg: 'navy-bg',
          title: 'Finishing &amp; Personalisation',
          desc: 'Inserts, labels, ribbons &amp; bespoke touches',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        },
      ]
    },
    {
      col: 'Compliance &amp; Retail', colClass: 'slate',
      items: [
        {
          href: BASE + '/deliver/compliance-preparation/',
          iconBg: 'slate-bg',
          title: 'Compliance Preparation',
          desc: 'Amazon FBA, retail labelling &amp; audit-ready',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
        },
      ]
    }
  ];

  var solutionsSectors = [
    { href: BASE + '/solutions/beauty-personal-care/', label: 'Beauty &amp; Personal Care' },
    { href: BASE + '/solutions/health-supplements/',  label: 'Health &amp; Supplements' },
    { href: BASE + '/solutions/home-lifestyle/',      label: 'Home &amp; Lifestyle' },
    { href: BASE + '/solutions/consumer-electronics/',label: 'Consumer Electronics' },
  ];

  var solutionsStages = [
    { href: BASE + '/solutions/dtc-brands-scaling/', label: 'DTC Brands Scaling Fast' },
    { href: BASE + '/solutions/moving-into-retail/', label: 'Moving into Retail' },
    { href: BASE + '/solutions/replacing-a-3pl/',   label: 'Replacing a 3PL' },
  ];

  /* ── Helpers ───────────────────────────────────────────── */
  function isActive(href) {
    return path === href || path.indexOf(href.replace(/\/$/, '')) === 0;
  }

  function buildDeliverCols() {
    return deliverItems.map(function(group) {
      var items = group.items.map(function(item) {
        var cls = isActive(item.href) ? ' active' : '';
        return '<a href="' + item.href + '" class="mega-item' + cls + '">' +
          '<div class="mega-item-icon ' + item.iconBg + '">' + item.icon + '</div>' +
          '<div class="mega-item-text"><h4>' + item.title + '</h4><p>' + item.desc + '</p></div>' +
          '</a>';
      }).join('');
      return '<div class="mega-col"><div class="mega-col-label ' + group.colClass + '">' + group.col + '</div>' + items + '</div>';
    }).join('');
  }

  function buildSolutionsCols() {
    var sectors = solutionsSectors.map(function(l) {
      var cls = isActive(l.href) ? ' active' : '';
      return '<a href="' + l.href + '" class="mega-link' + cls + '"><strong>' + l.label + '</strong></a>';
    }).join('');
    var stages = solutionsStages.map(function(l) {
      var cls = isActive(l.href) ? ' active' : '';
      return '<a href="' + l.href + '" class="mega-link' + cls + '"><strong>' + l.label + '</strong></a>';
    }).join('');
    return '<div class="mega-col"><div class="mega-group-title">By Sector</div>' + sectors + '</div>' +
           '<div class="mega-col"><div class="mega-group-title">By Stage</div>' + stages + '</div>';
  }

  /* ── Active top-level detection ────────────────────────── */
  var deliverActive  = path.indexOf('/deliver/')   !== -1 ? ' nav-active' : '';
  var solutionActive = path.indexOf('/solutions/') !== -1 ? ' nav-active' : '';

  /* ── Build nav HTML ─────────────────────────────────────── */
  var navHTML =
    '<nav id="mainNav" role="navigation" aria-label="Main navigation">' +
      '<a href="' + BASE + '/" class="nav-logo" aria-label="2Flow home">' +
        '<img src="' + BASE + '/Images/2flow-logo.png" alt="2Flow" width="120" height="34">' +
      '</a>' +
      '<div class="nav-links" id="navLinks">' +
        '<div class="nav-item" id="deliverNavItem">' +
          '<a href="#" class="' + deliverActive.trim() + '" id="deliverNavBtn" aria-haspopup="true" aria-expanded="false">' +
            'What We Deliver <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
        '</div>' +
        '<div class="nav-item" id="solutionsNavItem">' +
          '<a href="#" class="' + solutionActive.trim() + '" id="solutionsNavBtn" aria-haspopup="true" aria-expanded="false">' +
            'Solutions For <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
        '</div>' +
        '<div class="nav-item has-dropdown">' +
          '<a href="#">About <span class="nav-chevron">&#9662;</span></a>' +
          '<div class="dropdown">' +
            '<a href="' + BASE + '/#about">Our Story</a>' +
            '<a href="' + BASE + '/#team">The Team</a>' +
            '<a href="' + BASE + '/#careers">Careers</a>' +
          '</div>' +
        '</div>' +
        '<div class="nav-item"><a href="' + BASE + '/#contact">Contact</a></div>' +
      '</div>' +
      '<div class="nav-cta-wrap">' +
        '<a href="' + BASE + '/#contact" class="nav-cta">Get a Quote</a>' +
      '</div>' +
      '<button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +

    '<div class="mega-menu" id="deliverMega" role="region" aria-label="What We Deliver">' +
      '<div class="mega-inner deliver-grid">' + buildDeliverCols() + '</div>' +
    '</div>' +

    '<div class="mega-menu" id="solutionsMega" role="region" aria-label="Solutions For">' +
      '<div class="mega-inner solutions-grid">' + buildSolutionsCols() + '</div>' +
    '</div>';

  /* ── Inject HTML ────────────────────────────────────────── */
  var placeholder = document.getElementById('site-nav');
  if (!placeholder) return;
  placeholder.innerHTML = navHTML;

  /* ── Wire up events (elements exist now — no need to wait) ─ */

  // Scroll: logo + text colour flip
  var mainNav = document.getElementById('mainNav');
  function onScroll() {
    if (mainNav) mainNav.classList.toggle('nav-scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Hamburger
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

  // Mega menus
  var deliverBtn    = document.getElementById('deliverNavBtn');
  var deliverMega   = document.getElementById('deliverMega');
  var solutionsBtn  = document.getElementById('solutionsNavBtn');
  var solutionsMega = document.getElementById('solutionsMega');

  function closeAll() {
    if (deliverMega)   { deliverMega.classList.remove('active');   }
    if (solutionsMega) { solutionsMega.classList.remove('active'); }
    if (deliverBtn)    { deliverBtn.setAttribute('aria-expanded', 'false');   }
    if (solutionsBtn)  { solutionsBtn.setAttribute('aria-expanded', 'false'); }
  }

  function toggle(mega, btn) {
    var isOpen = mega.classList.contains('active');
    closeAll();
    if (!isOpen) {
      mega.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  if (deliverBtn && deliverMega) {
    deliverBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggle(deliverMega, deliverBtn);
    });
  }

  if (solutionsBtn && solutionsMega) {
    solutionsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggle(solutionsMega, solutionsBtn);
    });
  }

  // Close on outside click or Escape
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#deliverNavItem') && !e.target.closest('#deliverMega') &&
        !e.target.closest('#solutionsNavItem') && !e.target.closest('#solutionsMega')) {
      closeAll();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAll();
  });

})();
