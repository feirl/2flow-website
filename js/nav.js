/* ============================================================
   2Flow — Global Navigation Component
   Edit the data below to update nav across every page.
   ============================================================ */

(function () {

  var B = '/2flow-website';
  var path = window.location.pathname;

  /* ── Mega menu data ─────────────────────────────────────── */

  var DELIVER_COLS = [
    {
      label: 'eCommerce Fulfilment', cls: 'green',
      items: [
        { href: B + '/deliver/pick-and-pack/',           title: 'Pick &amp; Pack',               desc: 'Accurate, brand-aligned fulfilment at speed' },
        { href: B + '/deliver/kitting-bundling/',         title: 'Kitting &amp; Bundling',         desc: 'Gift sets, subscriptions, multi-SKU assembly' },
        { href: B + '/deliver/returns-refurbishment/',    title: 'Returns &amp; Refurbishment',    desc: 'Fast, clean returns processing and restocking' },
        { href: B + '/deliver/finishing-personalisation/',title: 'Finishing &amp; Personalisation',desc: 'Engraving, inserts, gift messaging, branded packaging' },
        { href: B + '/deliver/compliance-preparation/',   title: 'Compliance Preparation',         desc: 'Regulated labelling, batch control, cold-chain handling' },
      ]
    },
    {
      label: 'OmniChannel Specialists', cls: 'navy',
      items: [
        { href: B + '/deliver/retail-b2b-distribution/', title: 'Retail &amp; B2B Distribution',     desc: 'Compliance-ready wholesale and retail prep' },
        { href: B + '/deliver/amazon-fulfilment/',        title: 'Amazon Fulfilment',                 desc: 'FBA prep, FBM dispatch, seller compliance' },
        { href: B + '/deliver/tiktok-shop/',              title: 'TikTok Shop',                       desc: 'Integrated fulfilment for TikTok Shop sellers' },
        { href: B + '/deliver/pop-up-shops/',             title: 'Pop-up &amp; Own-Store Fulfilment', desc: 'Replenishing your own retail locations and events' },
      ]
    },
    {
      label: 'Beyond Fulfilment', cls: 'slate',
      items: [
        { href: B + '/deliver/live-commerce/',    title: 'Live Commerce Fulfilment',      desc: 'Rapid dispatch for live selling events and flash campaigns' },
        { href: B + '/deliver/same-day-dublin/',  title: 'Same-Day Dublin Delivery',      desc: 'Cut-off noon, delivered same afternoon' },
        { href: B + '/deliver/customer-service/', title: 'Outsourced Customer Service',   desc: 'Your brand voice, our team, seamless CX' },
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
    { href: B + '/why-2flow/faqs',             label: 'FAQs' },
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
          '<div class="mega-item-icon ' + col.cls + '-bg"></div>' +
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
          '<a href="' + B + '/deliver/"' + (inDeliver ? ' class="nav-active"' : '') + '>' +
            'What We Deliver <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
        '</div>' +

        '<div class="nav-item" id="js-solutions-trigger">' +
          '<a href="' + B + '/solutions/"' + (inSolution ? ' class="nav-active"' : '') + '>' +
            'Solutions For <span class="nav-chevron">&#9662;</span>' +
          '</a>' +
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
        '<a href="' + B + '/#contact" class="nav-cta">Book a Call</a>' +
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
