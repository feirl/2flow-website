/* ============================================================
   2Flow — Global Navigation Component
   Edit the data objects below to update nav across all pages.
   ============================================================ */

(function () {

  var BASE = '/2flow-website';
  var path = window.location.pathname;

  /* ── Data ───────────────────────────────────────────────── */

  var deliverCols = [
    {
      label: 'Core Fulfilment', cls: 'green',
      links: [
        { href: BASE + '/deliver/pick-and-pack/',    title: 'Pick &amp; Pack',          desc: 'Accurate, brand-aligned fulfilment at speed',         bg: 'green-bg', icon: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z' },
        { href: BASE + '/deliver/kitting-bundling/', title: 'Kitting &amp; Bundling',   desc: 'Gift sets, subscriptions &amp; multi-SKU builds',      bg: 'green-bg', icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z' },
      ]
    },
    {
      label: 'Value-Add', cls: 'navy',
      links: [
        { href: BASE + '/deliver/returns-refurbishment/',    title: 'Returns &amp; Refurbishment',     desc: 'Grade, repack, and restock returned goods',           bg: 'navy-bg', icon: 'M1 4v6h6M3.51 15a9 9 0 102.13-9.36L1 10' },
        { href: BASE + '/deliver/finishing-personalisation/', title: 'Finishing &amp; Personalisation', desc: 'Inserts, labels, ribbons &amp; bespoke touches',       bg: 'navy-bg', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
      ]
    },
    {
      label: 'Compliance &amp; Retail', cls: 'slate',
      links: [
        { href: BASE + '/deliver/compliance-preparation/', title: 'Compliance Preparation', desc: 'Amazon FBA, retail labelling &amp; audit-ready', bg: 'slate-bg', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
      ]
    }
  ];

  var solutionSectors = [
    { href: BASE + '/solutions/beauty-personal-care/', label: 'Beauty &amp; Personal Care' },
    { href: BASE + '/solutions/health-supplements/',   label: 'Health &amp; Supplements' },
    { href: BASE + '/solutions/home-lifestyle/',       label: 'Home &amp; Lifestyle' },
    { href: BASE + '/solutions/consumer-electronics/', label: 'Consumer Electronics' },
  ];

  var solutionStages = [
    { href: BASE + '/solutions/dtc-brands-scaling/', label: 'DTC Brands Scaling Fast' },
    { href: BASE + '/solutions/moving-into-retail/', label: 'Moving into Retail' },
    { href: BASE + '/solutions/replacing-a-3pl/',    label: 'Replacing a 3PL' },
  ];

  /* ── Build HTML strings ──────────────────────────────────── */

  function svg(d) {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="' + d + '"/></svg>';
  }

  function buildDeliverMega() {
    var cols = '';
    for (var i = 0; i < deliverCols.length; i++) {
      var col = deliverCols[i];
      var items = '';
      for (var j = 0; j < col.links.length; j++) {
        var l = col.links[j];
        var active = (path.indexOf(l.href) === 0) ? ' active' : '';
        items += '<a href="' + l.href + '" class="mega-item' + active + '">' +
          '<div class="mega-item-icon ' + l.bg + '">' + svg(l.icon) + '</div>' +
          '<div class="mega-item-text"><h4>' + l.title + '</h4><p>' + l.desc + '</p></div>' +
          '</a>';
      }
      cols += '<div class="mega-col"><div class="mega-col-label ' + col.cls + '">' + col.label + '</div>' + items + '</div>';
    }
    return '<div id="deliverMega" class="mega-menu"><div class="mega-inner deliver-grid">' + cols + '</div></div>';
  }

  function buildSolutionsMega() {
    var s1 = '', s2 = '';
    for (var i = 0; i < solutionSectors.length; i++) {
      var l = solutionSectors[i];
      s1 += '<a href="' + l.href + '" class="mega-link' + (path.indexOf(l.href) === 0 ? ' active' : '') + '"><strong>' + l.label + '</strong></a>';
    }
    for (var i = 0; i < solutionStages.length; i++) {
      var l = solutionStages[i];
      s2 += '<a href="' + l.href + '" class="mega-link' + (path.indexOf(l.href) === 0 ? ' active' : '') + '"><strong>' + l.label + '</strong></a>';
    }
    return '<div id="solutionsMega" class="mega-menu"><div class="mega-inner solutions-grid">' +
      '<div class="mega-col"><div class="mega-group-title">By Sector</div>' + s1 + '</div>' +
      '<div class="mega-col"><div class="mega-group-title">By Stage</div>' + s2 + '</div>' +
      '</div></div>';
  }

  var inDeliver  = path.indexOf('/deliver/')   !== -1;
  var inSolution = path.indexOf('/solutions/') !== -1;

  var html =
    '<nav id="mainNav" role="navigation" aria-label="Main navigation">' +
      '<a href="' + BASE + '/" class="nav-logo" aria-label="2Flow home">' +
        '<img src="' + BASE + '/Images/2flow-logo.png" alt="2Flow" width="120" height="34">' +
      '</a>' +
      '<div class="nav-links" id="navLinks">' +
        '<div class="nav-item">' +
          '<a href="javascript:void(0)" id="js-deliver-btn"' + (inDeliver ? ' class="nav-active"' : '') + '>What We Deliver <span class="nav-chevron">&#9662;</span></a>' +
        '</div>' +
        '<div class="nav-item">' +
          '<a href="javascript:void(0)" id="js-solutions-btn"' + (inSolution ? ' class="nav-active"' : '') + '>Solutions For <span class="nav-chevron">&#9662;</span></a>' +
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
      '<div class="nav-cta-wrap"><a href="' + BASE + '/#contact" class="nav-cta">Get a Quote</a></div>' +
      '<button class="hamburger" id="js-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +
    buildDeliverMega() +
    buildSolutionsMega();

  /* ── Inject ──────────────────────────────────────────────── */

  var placeholder = document.getElementById('site-nav');
  if (!placeholder) return;
  placeholder.innerHTML = html;

  /* ── References (elements exist in DOM immediately after innerHTML) ── */

  var mainNav      = document.getElementById('mainNav');
  var navLinks     = document.getElementById('navLinks');
  var hamburger    = document.getElementById('js-hamburger');
  var deliverBtn   = document.getElementById('js-deliver-btn');
  var solutionsBtn = document.getElementById('js-solutions-btn');
  var deliverMega  = document.getElementById('deliverMega');
  var solutionsMega = document.getElementById('solutionsMega');

  /* ── Mega menu open/close ────────────────────────────────── */

  function showMega(mega) {
    mega.style.display = 'block';
  }

  function hideMega(mega) {
    mega.style.display = '';  // revert to CSS default (none)
  }

  var openMega = null;

  function toggleMega(mega, btn) {
    if (openMega === mega) {
      // Already open — close it
      hideMega(mega);
      openMega = null;
    } else {
      // Close whatever was open
      if (openMega) hideMega(openMega);
      showMega(mega);
      openMega = mega;
    }
  }

  function closeAll() {
    if (openMega) { hideMega(openMega); openMega = null; }
  }

  /* ── Event listeners ─────────────────────────────────────── */

  if (deliverBtn && deliverMega) {
    deliverBtn.onclick = function(e) {
      e.preventDefault();
      toggleMega(deliverMega, deliverBtn);
    };
  }

  if (solutionsBtn && solutionsMega) {
    solutionsBtn.onclick = function(e) {
      e.preventDefault();
      toggleMega(solutionsMega, solutionsBtn);
    };
  }

  // Close on click outside
  document.onclick = function(e) {
    if (!openMega) return;
    var node = e.target;
    // Walk up the DOM — if we hit deliverBtn, solutionsBtn, or an open mega, keep it open
    while (node && node !== document) {
      if (node === deliverBtn || node === solutionsBtn || node === deliverMega || node === solutionsMega) return;
      node = node.parentNode;
    }
    closeAll();
  };

  document.onkeydown = function(e) {
    if (e.key === 'Escape') closeAll();
  };

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.onclick = function() {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    };
  }

  // Scroll: nav background flip
  function onScroll() {
    if (mainNav) mainNav.classList.toggle('nav-scrolled', window.scrollY > 20);
  }
  window.onscroll = onScroll;
  onScroll();

})();
