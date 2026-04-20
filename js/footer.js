/* ============================================================
   2Flow. Global Footer Component
   To add or change footer links, edit the data below.
   Drop <div id="site-footer"></div> + this script at the
   bottom of every page's <body>.
   ============================================================ */

(function () {
  const BASE = '/2flow-website';

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
          </div>
        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById('site-footer');
  if (placeholder) placeholder.outerHTML = footerHTML;

})();
