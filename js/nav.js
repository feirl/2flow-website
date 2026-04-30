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
      ]
    },
    {
      label: 'Beyond Fulfilment', cls: 'slate',
      items: [
        { href: B + '/deliver/live-commerce/',   icon: 'live',    title: 'Live Commerce Fulfilment',  desc: 'A dedicated studio space to host live selling events, with same-day fulfilment to match' },
        { href: B + '/deliver/same-day-dublin/', icon: 'sameday', title: 'Same-Day Dublin Delivery',  desc: 'Via Cyclone Couriers. Cut-off noon, delivered same afternoon. Ideal for urgent, cold-chain and medical' },
      ]
    }
  ];

  var SOLUTION_SECTORS = [
    { href: B + '/solutions/beauty-personal-care/',  label: 'Beauty &amp; Personal Care' },
    { href: B + '/solutions/health-supplements/',    label: 'Health &amp; Supplements' },
    { href: B + '/solutions/medical-healthcare/',    label: 'Medical &amp; Healthcare' },
    { href: B + '/solutions/home-lifestyle/',        label: 'Home &amp; Lifestyle' },
    { href: B + '/solutions/consumer-electronics/',  label: 'Consumer Electronics' },
    { href: B + '/solutions/office-products/',       label: 'Office Products' },
    { href: B + '/solutions/industrial-scientific/', label: 'Industrial &amp; Scientific' },
  ];

  var SOLUTION_NEEDS = [
    { href: B + '/solutions/subscription-brands/',  label: 'Subscription Brands' },
    { href: B + '/solutions/dtc-brands-scaling/',   label: 'DTC Brands Scaling' },
    { href: B + '/solutions/brand-product-launch/', label: 'Brand / Product Launch' },
    { href: B + '/solutions/ireland-domestic/',     label: 'Ireland Domestic' },
    { href: B + '/solutions/dublin-same-day/',      label: 'Dublin Same-Day' },
    { href: B + '/solutions/eu-delivery/',          label: 'EU Delivery' },
    { href: B + '/solutions/uk-rest-of-world/',     label: 'UK &amp; Rest of World' },
  ];

  var WHY_LINKS = [
    { href: B + '/why-2flow/our-difference',   label: 'Our Difference' },
    { href: B + '/why-2flow/customer-stories', label: 'Customer Stories' },
    { href: B + '/why-2flow/platform',         label: 'Our Platform' },
    { href: B + '/why-2flow/integrations',     label: 'Integrations' },
    { href: B + '/why-2flow/shopify',          label: 'Shopify Specialists' },
    { href: B + '/why-2flow/meet-the-team',    label: 'Meet the Team' },
    { href: B + '/why-2flow/virtual-tour',     label: 'Visit our Dublin Hub' },
    { href: B + '/faqs/',             label: 'FAQs' },
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
    var s1 = '', s2 = '';
    for (var i = 0; i < SOLUTION_SECTORS.length; i++) {
      var l = SOLUTION_SECTORS[i];
      s1 += '<a href="' + l.href + '" class="mega-link' + active(l.href) + '"><strong>' + l.label + '</strong></a>';
    }
    for (var i = 0; i < SOLUTION_NEEDS.length; i++) {
      var l = SOLUTION_NEEDS[i];
      s2 += '<a href="' + l.href + '" class="mega-link' + active(l.href) + '"><strong>' + l.label + '</strong></a>';
    }
    return '<div id="solutionsMega" class="mega-menu">' +
      '<div class="mega-inner solutions-grid">' +
      '<div class="mega-col"><div class="mega-group-title">By Sector</div>' + s1 + '</div>' +
      '<div class="mega-col"><div class="mega-group-title">By Need</div>' + s2 + '</div>' +
      '</div></div>';
  }

  function buildWhyDropdown() {
    var links = '';
    for (var i = 0; i < WHY_LINKS.length; i++) {
      links += '<a href="' + WHY_LINKS[i].href + '">' + WHY_LINKS[i].label + '</a>';
    }
    return links;
  }

  var inDeliver  = path.indexOf('/deliver/')   !== -1;
  var inSolution = path.indexOf('/solutions/') !== -1;
  var inWhy      = path.indexOf('/why-2flow')  !== -1;

  var NAV_HTML =
    '<nav id="mainNav" role="navigation" aria-label="Main navigation">' +
      '<a href="' + B + '/" class="nav-logo" aria-label="2Flow home">' +
        '<img src="' + B + '/Images/2flow-logo.png" alt="2Flow" width="120" height="34">' +
      '</a>' +
      '<div class="nav-links" id="navLinks">' +

        '<div class="nav-item" id="js-deliver-trigger">' +
          '<span' + (inDeliver ? ' class="nav-active"' : '') + '>' +
            'What We Deliver <span class="nav-chevron">&#9662;</span>' +
          '</span>' +
        '</div>' +

        '<div class="nav-item" id="js-solutions-trigger">' +
          '<span' + (inSolution ? ' class="nav-active"' : '') + '>' +
            'Solutions For <span class="nav-chevron">&#9662;</span>' +
          '</span>' +
        '</div>' +

        '<div class="nav-item has-dropdown">' +
          '<a href="' + B + '/why-2flow/"' + (inWhy ? ' class="nav-active"' : '') + '>' +
            'Why 2Flow <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
          '<div class="dropdown">' + buildWhyDropdown() + '</div>' +
        '</div>' +

        '<div class="nav-item"><a href="' + B + '/pricing/">Pricing</a></div>' +

      '</div>' +
      '<div class="nav-cta-wrap">' +
        '<a href="' + B + '/book-a-call/" class="nav-cta">Book a Call</a>' +
      '</div>' +
      '<button class="hamburger" id="js-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</nav>' +
    buildDeliverMega() +
    buildSolutionsMega();

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

  function wireHover(trigger, mega) {
    if (!trigger || !mega) return;

    trigger.addEventListener('mouseenter', function() { openMega(mega); });
    trigger.addEventListener('mouseleave', scheduleClose);

    mega.addEventListener('mouseenter', cancelClose);
    mega.addEventListener('mouseleave', scheduleClose);
  }

  wireHover(deliverTrig, deliverMega);
  wireHover(solutionsTrig, solutionsMega);

  // Also support click/tap (for keyboard and touch users)
  function bindClick(trigger, mega) {
    if (!trigger || !mega) return;
    trigger.querySelector('a').addEventListener('click', function(e) {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        var isOpen = mega.style.display === 'block';
        if (currentMega) { currentMega.style.display = 'none'; currentMega = null; }
        if (!isOpen) { mega.style.display = 'block'; currentMega = mega; }
      }
    });
  }

  bindClick(deliverTrig, deliverMega);
  bindClick(solutionsTrig, solutionsMega);

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!currentMega) return;
    var node = e.target;
    while (node) {
      if (node === deliverTrig || node === solutionsTrig || node === deliverMega || node === solutionsMega) return;
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
    });
  }

  /* ── Scroll: nav background flip ────────────────────────── */
  function onScroll() {
    if (mainNav) mainNav.classList.toggle('nav-scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
