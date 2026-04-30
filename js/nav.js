/* ============================================================
   2Flow. Global Navigation Component
   Edit the data below to update nav across every page.
   ============================================================ */

(function () {

  var B = '';
  var path = window.location.pathname;

  /* ── Mega menu data ─────────────────────────────────────── */

  // SVG icon paths (viewBox 0 0 24 24)
  var ICONS = {
    pickpack:      '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
    kitting:       '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    returns:       '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    finishing:     '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    compliance:    '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    retail:        '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    amazon:        '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    dtc:           '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    tiktok:        '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    popup:         '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="12" x2="15" y2="22"/><line x1="3" y1="15" x2="21" y2="15"/>',
    live:          '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    sameday:       '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    custservice:   '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mappin:        '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    globe:         '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    beauty:        '<path d="M12 2a5 5 0 0 1 5 5c0 3-2 5.5-5 8-3-2.5-5-5-5-8a5 5 0 0 1 5-5z"/><path d="M12 15c0 3 1.5 5 3 6M12 15c0 3-1.5 5-3 6"/>',
    health:        '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    medical:       '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    homelife:      '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    electronics:   '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    officeelec:    '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="2"/>',
    industrial:    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    subscription:  '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
    scaling:       '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    launch:        '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',
  };

  function icon(key) {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[key] + '</svg>';
  }

  var DELIVER_COLS = [
    {
      label: 'eCommerce Fulfilment', cls: 'green',
      items: [
        { href: B + '/deliver/pick-and-pack/',            icon: 'pickpack',   title: 'Pick &amp; Pack',               desc: 'Accurate, brand-aligned fulfilment at speed' },
        { href: B + '/deliver/kitting-bundling/',          icon: 'kitting',    title: 'Kitting &amp; Bundling',         desc: 'Gift sets, subscriptions, multi-SKU assembly' },
        { href: B + '/deliver/returns-refurbishment/',     icon: 'returns',    title: 'Returns &amp; Refurbishment',    desc: 'Fast, clean returns processing and restocking' },
        { href: B + '/deliver/finishing-personalisation/', icon: 'finishing',  title: 'Finishing &amp; Personalisation',desc: 'Engraving, inserts, gift messaging, branded packaging' },
        { href: B + '/deliver/compliance-preparation/',    icon: 'compliance', title: 'Compliance Preparation',         desc: 'Regulated labelling, batch control, cold-chain handling' },
      ]
    },
    {
      label: 'OmniChannel Specialists', cls: 'navy',
      items: [
        { href: B + '/deliver/dtc-fulfilment/',            icon: 'dtc',      title: 'eCommerce &amp; DTC',               desc: 'Shopify-native fulfilment for direct-to-consumer brands' },
        { href: B + '/deliver/retail-b2b-distribution/',  icon: 'retail',   title: 'Retail &amp; B2B Distribution',     desc: 'Compliance-ready wholesale and retail prep' },
        { href: B + '/deliver/amazon-fulfilment/',         icon: 'amazon',   title: 'Amazon Fulfilment',                 desc: 'FBA prep, FBM dispatch, seller compliance' },
        { href: B + '/deliver/tiktok-shop/',               icon: 'tiktok',   title: 'TikTok Shop',                       desc: 'Integrated fulfilment for TikTok Shop sellers' },
        { href: B + '/deliver/pop-up-shops/',              icon: 'popup',    title: 'Pop-up &amp; Own-Store Fulfilment', desc: 'Replenishing your own retail locations and events' },
        { href: B + '/deliver/live-commerce/',              icon: 'live',     title: 'Live Commerce Fulfilment',          desc: 'A dedicated studio space to host live selling events, with same-day fulfilment to match' },
      ]
    },
    {
      label: 'Where we deliver', cls: 'slate',
      items: [
        { href: B + '/solutions/ireland-domestic/',   icon: 'mappin',  title: 'Ireland Domestic',       desc: 'Next-day island-wide from our Dublin hub' },
        { href: B + '/solutions/dublin-same-day/',    icon: 'sameday', title: 'Dublin Same-Day',        desc: 'Via Cyclone Couriers. Cut-off noon, delivered same afternoon' },
        { href: B + '/solutions/eu-delivery/',        icon: 'globe',   title: 'EU Delivery',            desc: 'Cross-border dispatch to all 27 EU countries, duty-paid options' },
        { href: B + '/solutions/uk-rest-of-world/',   icon: 'globe',   title: 'UK &amp; Rest of World', desc: 'Post-Brexit UK fulfilment and international carriers' },
      ]
    }
  ];

  var SOLUTION_COLS = [
    {
      label: 'By Sector', cls: 'green',
      items: [
        { href: B + '/solutions/beauty-personal-care/',  icon: 'beauty',      title: 'Beauty &amp; Personal Care', desc: 'Subscription boxes, gift sets, branded unboxing' },
        { href: B + '/solutions/health-supplements/',    icon: 'health',      title: 'Health &amp; Supplements',   desc: 'Batch tracking, FIFO, compliance labelling' },
        { href: B + '/solutions/medical-healthcare/',    icon: 'medical',     title: 'Medical &amp; Healthcare',   desc: 'Temperature-sensitive, regulated handling' },
        { href: B + '/solutions/home-lifestyle/',        icon: 'homelife',    title: 'Home &amp; Lifestyle',       desc: 'Premium home goods, gifting, fragile items' },
        { href: B + '/solutions/consumer-electronics/',  icon: 'electronics', title: 'Consumer Electronics',       desc: 'High-value, anti-static, serial number tracking' },
        { href: B + '/solutions/office-electronics/',    icon: 'officeelec',  title: 'Office Electronics',         desc: 'B2B distribution, retail prep, DTC from one operation' },
        { href: B + '/solutions/industrial-scientific/', icon: 'industrial',  title: 'Industrial &amp; Scientific',desc: 'Lot tracking, hazmat compliance, trade documentation' },
      ]
    },
    {
      label: 'By Need', cls: 'navy',
      items: [
        { href: B + '/solutions/subscription-brands/',  icon: 'subscription', title: 'Subscription Brands',       desc: 'Billing cycle dispatch, batch kitting, personalisation' },
        { href: B + '/solutions/dtc-brands-scaling/',   icon: 'scaling',      title: 'DTC Brands Scaling',         desc: 'Shopify-native, same-day dispatch, real-time inventory' },
        { href: B + '/solutions/brand-product-launch/', icon: 'launch',       title: 'Brand &amp; Product Launch', desc: 'Fast onboarding, flexible capacity, launch kitting' },
        { href: B + '/solutions/ireland-domestic/',     icon: 'mappin',       title: 'Ireland Domestic',           desc: 'Next-day island-wide via DPD and An Post' },
        { href: B + '/solutions/dublin-same-day/',      icon: 'sameday',      title: 'Dublin Same-Day',            desc: 'Via Cyclone Couriers. Noon cut-off, same afternoon' },
        { href: B + '/solutions/eu-delivery/',          icon: 'globe',        title: 'EU Delivery',                desc: '27 destinations dispatched from Dublin' },
        { href: B + '/solutions/uk-rest-of-world/',     icon: 'globe',        title: 'UK &amp; Rest of World',     desc: 'Post-Brexit UK fulfilment, international carriers' },
      ]
    }
  ];

  var WHY_LINKS = [
    { href: B + '/why-2flow/our-difference',   label: 'Our Difference' },
    { href: B + '/why-2flow/customer-stories', label: 'Customer Stories' },
    { href: B + '/why-2flow/platform',         label: 'Our Platform' },
    { href: B + '/why-2flow/integrations',     label: 'Integrations' },
    { href: B + '/why-2flow/shopify',          label: 'Shopify Specialists' },
    { href: B + '/why-2flow/meet-the-team',    label: 'Meet the Team' },
    { href: B + '/why-2flow/virtual-tour',     label: 'Visit our Dublin Hub' },
    { href: B + '/faqs/',                     label: 'FAQs' },
  ];

  /* ── Build HTML ──────────────────────────────────────────── */

  function active(href) { return path.indexOf(href) === 0 ? ' active' : ''; }

  function buildDeliverMega() {
    var cols = '';
    for (var i = 0; i < DELIVER_COLS.length; i++) {
      var col = DELIVER_COLS[i];
      var items = '';
      for (var j = 0; j < col.items.length; j++) {
        var l = col.items[j];
        items += '<a href="' + l.href + '" class="mega-item' + active(l.href) + '">' +
          '<div class="mega-item-icon ' + col.cls + '-bg">' + icon(l.icon) + '</div>' +
          '<div class="mega-item-text"><h4>' + l.title + '</h4><p>' + l.desc + '</p></div>' +
          '</a>';
      }
      cols += '<div class="mega-col"><div class="mega-col-label ' + col.cls + '">' + col.label + '</div>' + items + '</div>';
    }
    return '<div id="deliverMega" class="mega-menu">' +
      '<div class="mega-inner deliver-grid">' + cols + '</div>' +
      '</div>';
  }

  function buildSolutionsMega() {
    var cols = '';
    for (var i = 0; i < SOLUTION_COLS.length; i++) {
      var col = SOLUTION_COLS[i];
      var items = '';
      for (var j = 0; j < col.items.length; j++) {
        var l = col.items[j];
        items += '<a href="' + l.href + '" class="mega-item' + active(l.href) + '">' +
          '<div class="mega-item-icon ' + col.cls + '-bg">' + icon(l.icon) + '</div>' +
          '<div class="mega-item-text"><h4>' + l.title + '</h4><p>' + l.desc + '</p></div>' +
          '</a>';
      }
      cols += '<div class="mega-col"><div class="mega-col-label ' + col.cls + '">' + col.label + '</div>' + items + '</div>';
    }
    return '<div id="solutionsMega" class="mega-menu">' +
      '<div class="mega-inner solutions-grid">' + cols + '</div>' +
      '</div>';
  }

  function buildWhyMega() {
    var links = '';
    for (var i = 0; i < WHY_LINKS.length; i++) {
      var l = WHY_LINKS[i];
      links += '<a href="' + l.href + '" class="mega-link' + active(l.href) + '"><strong>' + l.label + '</strong></a>';
    }
    return '<div id="whyMega" class="mega-menu">' +
      '<div class="mega-inner why-grid">' +
      '<div class="mega-col"><div class="mega-group-title">Why 2Flow</div>' + links + '</div>' +
      '</div></div>';
  }

  function buildWhyDropdown() {
    var links = '';
    for (var i = 0; i < WHY_LINKS.length; i++) {
      links += '<a href="' + WHY_LINKS[i].href + '">' + WHY_LINKS[i].label + '</a>';
    }
    return links;
  }

  // "Where we deliver" pages live under /solutions/ but conceptually belong to "What We Deliver"
  var WHERE_WE_DELIVER_PATHS = [
    '/solutions/ireland-domestic/',
    '/solutions/dublin-same-day/',
    '/solutions/eu-delivery/',
    '/solutions/uk-rest-of-world/'
  ];
  var inWhereWeDeliver = WHERE_WE_DELIVER_PATHS.some(function (p) { return path.indexOf(p) === 0; });
  var inDeliver  = path.indexOf('/deliver/') !== -1 || inWhereWeDeliver;
  var inSolution = path.indexOf('/solutions/') !== -1 && !inWhereWeDeliver;
  var inWhy      = path.indexOf('/why-2flow') !== -1;

  var NAV_HTML =
    '<nav id="mainNav" role="navigation" aria-label="Main navigation">' +
      '<a href="' + B + '/" class="nav-logo" aria-label="2Flow home">' +
        '<img class="nav-logo-top" src="' + B + '/Images/2flow-ireland-3pl-cl.png" alt="2Flow | Ireland 3PL">' +
        '<img class="nav-logo-scrolled" src="' + B + '/Images/2flow-ireland-3pl-dublin.png" alt="2Flow | Ireland 3PL Dublin">' +
      '</a>' +
      '<div class="nav-links" id="navLinks">' +

        '<div class="nav-item nav-item-has-mega" id="js-solutions-trigger">' +
          '<a role="button" tabindex="0" class="nav-trigger' + (inSolution ? ' nav-active' : '') + '" aria-haspopup="true" aria-expanded="false">' +
            'Solutions <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
          buildSolutionsMega() +
        '</div>' +

        '<div class="nav-item nav-item-has-mega" id="js-deliver-trigger">' +
          '<a role="button" tabindex="0" class="nav-trigger' + (inDeliver ? ' nav-active' : '') + '" aria-haspopup="true" aria-expanded="false">' +
            'What We Deliver <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
          buildDeliverMega() +
        '</div>' +

        '<div class="nav-item nav-item-has-mega" id="js-why-trigger">' +
          '<a role="button" tabindex="0" class="nav-trigger' + (inWhy ? ' nav-active' : '') + '" aria-haspopup="true" aria-expanded="false">' +
            'Why 2Flow <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
          buildWhyMega() +
        '</div>' +

        '<div class="nav-item"><a href="' + B + '/pricing/">Pricing</a></div>' +

      '</div>' +
      '<div class="nav-cta-wrap">' +
        '<a href="' + B + '/book-a-call/" class="nav-cta">Book a Call</a>' +
      '</div>' +
      '<button class="hamburger" id="js-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>';

  /* ── Inject ──────────────────────────────────────────────── */
  var placeholder = document.getElementById('site-nav');
  if (!placeholder) return;
  placeholder.innerHTML = NAV_HTML;

  /* ── Element refs ────────────────────────────────────────── */
  var mainNav       = document.getElementById('mainNav');
  var navLinks      = document.getElementById('navLinks');
  var hamburger     = document.getElementById('js-hamburger');
  var deliverTrig   = document.getElementById('js-deliver-trigger');
  var solutionsTrig = document.getElementById('js-solutions-trigger');
  var deliverMega   = document.getElementById('deliverMega');
  var solutionsMega = document.getElementById('solutionsMega');
  var whyTrig      = document.getElementById('js-why-trigger');
  var whyMega      = document.getElementById('whyMega');

  /* ── Hover mega menu logic ───────────────────────────────── */
  var currentMega = null;
  var closeTimer  = null;

  function openMega(mega) {
    clearTimeout(closeTimer);
    if (currentMega && currentMega !== mega) {
      currentMega.style.display = 'none';
    }
    mega.style.display = 'block';
    currentMega = mega;
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function() {
      if (currentMega) {
        currentMega.style.display = 'none';
        currentMega = null;
      }
    }, 120);
  }

  function cancelClose() {
    clearTimeout(closeTimer);
  }

  function isMobile() { return window.innerWidth <= 900; }

  function wireHover(trigger, mega) {
    if (!trigger || !mega) return;
    trigger.addEventListener('mouseenter', function() { if (!isMobile()) openMega(mega); });
    trigger.addEventListener('mouseleave', function() { if (!isMobile()) scheduleClose(); });
    mega.addEventListener('mouseenter',    function() { if (!isMobile()) cancelClose(); });
    mega.addEventListener('mouseleave',    function() { if (!isMobile()) scheduleClose(); });
  }

  wireHover(deliverTrig, deliverMega);
  wireHover(solutionsTrig, solutionsMega);
  wireHover(whyTrig, whyMega);

  // Click/tap handler — mobile uses class toggle, desktop uses style.display
  var allMegas = [];  // populated after bindClick calls
  function bindClick(trigger, mega) {
    if (!trigger || !mega) return;
    trigger.querySelector('a').addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // prevent document outside-click handler firing
      if (isMobile()) {
        var isOpen = mega.classList.contains('mob-open');
        // Close all mobile-open megas
        [deliverMega, solutionsMega, whyMega].forEach(function(m) {
          if (m) m.classList.remove('mob-open');
        });
        if (!isOpen) mega.classList.add('mob-open');
      } else {
        var isOpen = mega.style.display === 'block';
        if (currentMega) { currentMega.style.display = 'none'; currentMega = null; }
        if (!isOpen) { mega.style.display = 'block'; currentMega = mega; }
      }
    });
  }

  bindClick(deliverTrig, deliverMega);
  bindClick(solutionsTrig, solutionsMega);
  bindClick(whyTrig, whyMega);

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!currentMega) return;
    var node = e.target;
    while (node) {
      if (node === deliverTrig || node === solutionsTrig || node === whyTrig || node === deliverMega || node === solutionsMega || node === whyMega) return;
      node = node.parentNode;
    }
    if (currentMega) { currentMega.style.display = 'none'; currentMega = null; }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && currentMega) { currentMega.style.display = 'none'; currentMega = null; }
  });

  /* ── Hamburger ───────────────────────────────────────────── */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      // Close any open sub-menus when hamburger closes
      if (!open) {
        [deliverMega, solutionsMega, whyMega].forEach(function(m) {
          if (m) m.classList.remove('mob-open');
        });
      }
    });
  }

  /* ── Scroll: nav background flip ────────────────────────── */
  function onScroll() {
    if (mainNav) mainNav.classList.toggle('nav-scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
