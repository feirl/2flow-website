/* ============================================================
   2Flow. Global Footer Component
   To add or change footer links, edit the data below.
   Drop <div id="site-footer"></div> + this script at the
   bottom of every page's <body>.
   ============================================================ */

(function () {
  const BASE = '';

  /* ── Footer data ───────────────────────────────────────── */

  const deliverLinks = [
    { href: BASE + '/deliver/pick-and-pack/',          label: 'Pick &amp; Pack' },
    { href: BASE + '/deliver/kitting-bundling/',       label: 'Kitting &amp; Bundling' },
    { href: BASE + '/deliver/returns-refurbishment/',  label: 'Returns &amp; Refurbishment' },
    { href: BASE + '/deliver/finishing-personalisation/', label: 'Finishing &amp; Personalisation' },
    { href: BASE + '/deliver/compliance-preparation/', label: 'Compliance Preparation' },
  ];

  const solutionLinks = [
    { href: BASE + '/solutions/beauty-personal-care/', label: 'Beauty &amp; Personal Care' },
    { href: BASE + '/solutions/health-supplements/',   label: 'Health &amp; Supplements' },
    { href: BASE + '/solutions/home-lifestyle/',       label: 'Home &amp; Lifestyle' },
    { href: BASE + '/solutions/dtc-brands-scaling/',  label: 'DTC Brands Scaling' },
  ];

  const companyLinks = [
    { href: BASE + '/#about',   label: 'About 2Flow' },
    { href: BASE + '/#contact', label: 'Contact Us' },
    { href: BASE + '/#careers', label: 'Careers' },
  ];

  /* ── Build HTML ─────────────────────────────────────────── */
  function linkList(links) {
    return links.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  }

  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">

          <div class="footer-brand">
            <a href="${BASE}/" aria-label="2Flow home">
              <img src="${BASE}/Images/2flow-logo.png" alt="2Flow"
                   height="30" style="filter:brightness(0) invert(1);">
            </a>
            <p>Ireland's eCommerce fulfilment partner. Pick &amp; pack, kitting, returns, and value-add services from our Dublin warehouse.</p>
          </div>

          <div class="footer-col">
            <h5>What We Deliver</h5>
            ${linkList(deliverLinks)}
          </div>

          <div class="footer-col">
            <h5>Solutions For</h5>
            ${linkList(solutionLinks)}
          </div>

          <div class="footer-col">
            <h5>Company</h5>
            ${linkList(companyLinks)}
          </div>

        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} 2Flow Fulfilment Ltd. All rights reserved.</span>
          <div class="footer-bottom-links">
            <a href="${BASE}/privacy/">Privacy Policy</a>
            <a href="${BASE}/terms/">Terms of Service</a>
            <a href="#" data-cc-action="manage">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  /* ── Cookie consent UI (banner + modal + scoped CSS) ──── */

  const consentCSS = `
    <style id="cc-styles">
      /* Banner */
      #cc-banner {
        display: none;
        position: fixed; bottom: 0; left: 0; right: 0;
        z-index: 9999;
        background: #252525;
        color: #ffffff;
        padding: 20px 24px;
        box-shadow: 0 -4px 24px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.55;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
      }
      #cc-banner .cc-banner-text {
        flex: 1 1 460px;
        min-width: 280px;
      }
      #cc-banner .cc-banner-text strong { color: #ffffff; font-weight: 600; display: block; margin-bottom: 4px; font-size: 14px; }
      #cc-banner .cc-banner-text p { margin: 0; color: rgba(255,255,255,0.78); font-size: 13px; line-height: 1.55; }
      #cc-banner .cc-banner-text a {
        color: #5CB800;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      #cc-banner .cc-banner-text a:hover { color: #7fd11f; }
      #cc-banner .cc-banner-actions {
        display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap;
      }
      .cc-btn {
        appearance: none; border: 1px solid transparent; cursor: pointer;
        padding: 10px 18px; border-radius: 6px;
        font-size: 14px; font-weight: 600; line-height: 1;
        font-family: inherit;
        transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        white-space: nowrap;
      }
      .cc-btn-primary {
        background: #5CB800; color: #ffffff; border-color: #5CB800;
      }
      .cc-btn-primary:hover { background: #4a9200; border-color: #4a9200; }
      .cc-btn-ghost {
        background: transparent; color: #ffffff;
        border-color: rgba(255,255,255,0.35);
      }
      .cc-btn-ghost:hover { border-color: #ffffff; }
      .cc-btn-secondary {
        background: #252525; color: #ffffff; border-color: #252525;
      }
      .cc-btn-secondary:hover { background: #383838; border-color: #383838; }

      /* Modal */
      #cc-modal {
        display: none;
        position: fixed; inset: 0;
        background: rgba(5,10,20,0.65);
        z-index: 10000;
        align-items: center; justify-content: center;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      #cc-modal .cc-modal-card {
        background: #ffffff;
        border-radius: 12px;
        max-width: 540px; width: 100%;
        max-height: 90vh; overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        padding: 32px 32px 24px;
        position: relative;
        color: #111111;
      }
      #cc-modal h2 {
        font-size: 20px; font-weight: 700; line-height: 1.3; color: #111111;
        margin: 0 0 8px;
      }
      #cc-modal .cc-modal-intro {
        font-size: 14px; color: #555555; line-height: 1.6;
        margin: 0 0 24px;
      }
      #cc-modal .cc-close {
        position: absolute; top: 14px; right: 14px;
        width: 32px; height: 32px; border: 0; background: transparent;
        font-size: 22px; line-height: 1; cursor: pointer; color: #737373;
        border-radius: 6px;
      }
      #cc-modal .cc-close:hover { color: #111111; background: #F7F9F3; }

      .cc-row {
        display: flex; align-items: flex-start; gap: 16px;
        padding: 18px 0;
        border-top: 1px solid #E4EBD6;
      }
      .cc-row:last-of-type { border-bottom: 1px solid #E4EBD6; }
      .cc-row-text { flex: 1; }
      .cc-row-text h3 { font-size: 15px; font-weight: 600; color: #111111; margin: 0 0 4px; line-height: 1.3; }
      .cc-row-text p  { font-size: 13px; color: #555555; margin: 0; line-height: 1.55; }
      .cc-row-control { flex-shrink: 0; padding-top: 2px; }

      /* Always-on pill */
      .cc-always-on {
        display: inline-block;
        background: #E4EBD6; color: #4a9200;
        font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
        padding: 5px 12px; border-radius: 99px;
      }

      /* Toggle switch */
      .cc-toggle { position: relative; display: inline-block; width: 44px; height: 24px; }
      .cc-toggle input { opacity: 0; width: 0; height: 0; }
      .cc-toggle .cc-slider {
        position: absolute; inset: 0;
        background: #d1d5db; border-radius: 24px;
        cursor: pointer; transition: background 0.2s ease;
      }
      .cc-toggle .cc-slider::before {
        content: '';
        position: absolute;
        top: 3px; left: 3px;
        width: 18px; height: 18px;
        background: #ffffff;
        border-radius: 50%;
        transition: transform 0.2s ease;
        box-shadow: 0 1px 3px rgba(0,0,0,0.15);
      }
      .cc-toggle input:checked + .cc-slider { background: #5CB800; }
      .cc-toggle input:checked + .cc-slider::before { transform: translateX(20px); }
      .cc-toggle input:focus-visible + .cc-slider { outline: 2px solid #5CB800; outline-offset: 2px; }

      .cc-modal-actions {
        display: flex; gap: 10px; justify-content: flex-end;
        margin-top: 24px; flex-wrap: wrap;
      }

      @media (max-width: 640px) {
        #cc-banner { flex-direction: column; align-items: stretch; padding: 18px 20px; }
        #cc-banner .cc-banner-actions { width: 100%; }
        #cc-banner .cc-banner-actions .cc-btn { flex: 1; }
        #cc-modal .cc-modal-card { padding: 26px 22px 20px; }
        .cc-modal-actions .cc-btn { flex: 1; }
      }
    </style>
  `;

  const bannerHTML = `
    <div id="cc-banner" role="region" aria-label="Cookie consent">
      <div class="cc-banner-text">
        <strong>We use cookies</strong>
        <p>We use essential cookies to run this site. With your permission, we also use analytics and advertising cookies to understand how visitors use the site and improve it. Read our <a href="${BASE}/privacy/">Privacy Policy</a>.</p>
      </div>
      <div class="cc-banner-actions">
        <button type="button" class="cc-btn cc-btn-ghost" data-cc-action="manage">Manage Preferences</button>
        <button type="button" class="cc-btn cc-btn-primary" data-cc-action="accept-all">Accept All</button>
      </div>
    </div>
  `;

  const modalHTML = `
    <div id="cc-modal" role="dialog" aria-modal="true" aria-labelledby="cc-modal-title" aria-hidden="true">
      <div class="cc-modal-card">
        <button type="button" class="cc-close" data-cc-action="close" aria-label="Close cookie preferences">&times;</button>
        <h2 id="cc-modal-title">Cookie Preferences</h2>
        <p class="cc-modal-intro">Choose which cookies you're happy for us to use. You can change these preferences at any time from the footer.</p>

        <div class="cc-row">
          <div class="cc-row-text">
            <h3>Essential</h3>
            <p>Required for the site to function. Includes session management and remembering your cookie preferences. Always on.</p>
          </div>
          <div class="cc-row-control">
            <span class="cc-always-on">Always on</span>
          </div>
        </div>

        <div class="cc-row">
          <div class="cc-row-text">
            <h3>Analytics</h3>
            <p>Helps us understand how visitors use the site so we can improve it. Uses Google Analytics (GA4). Anonymised.</p>
          </div>
          <div class="cc-row-control">
            <label class="cc-toggle">
              <input type="checkbox" id="cc-toggle-analytics" aria-label="Enable analytics cookies">
              <span class="cc-slider"></span>
            </label>
          </div>
        </div>

        <div class="cc-row">
          <div class="cc-row-text">
            <h3>Advertising</h3>
            <p>Lets us measure campaign performance and reach the right audiences across Google Ads, LinkedIn, and Meta.</p>
          </div>
          <div class="cc-row-control">
            <label class="cc-toggle">
              <input type="checkbox" id="cc-toggle-advertising" aria-label="Enable advertising cookies">
              <span class="cc-slider"></span>
            </label>
          </div>
        </div>

        <div class="cc-modal-actions">
          <button type="button" class="cc-btn cc-btn-secondary" data-cc-action="accept-all">Accept All</button>
          <button type="button" class="cc-btn cc-btn-primary" data-cc-action="save">Save Preferences</button>
        </div>
      </div>
    </div>
  `;

  const placeholder = document.getElementById('site-footer');
  if (placeholder) {
    placeholder.outerHTML = footerHTML + consentCSS + bannerHTML + modalHTML;
  }

  // Load cookie-consent.js once, after footer + banner + modal are in DOM
  if (!document.getElementById('cc-script')) {
    const s = document.createElement('script');
    s.id = 'cc-script';
    s.src = BASE + '/js/cookie-consent.js';
    s.defer = true;
    document.body.appendChild(s);
  }

})();
