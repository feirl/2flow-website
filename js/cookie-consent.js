/* ============================================================
   2Flow — GDPR Cookie Consent
   Self-contained. No external libraries. No global pollution
   except window.twoflowOpenCookieModal.
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = '2flow_consent';
  var VERSION     = '1.0.0';

  /* ── Storage ───────────────────────────────────────────── */

  function loadConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && parsed.version === VERSION) return parsed;
      // Schema mismatch: discard stored consent
      localStorage.removeItem(STORAGE_KEY);
      return null;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(analytics, advertising) {
    var payload = {
      version:     VERSION,
      essential:   true,
      analytics:   !!analytics,
      advertising: !!advertising,
      timestamp:   new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) { /* no-op */ }
    return payload;
  }

  /* ── Script activation ────────────────────────────────── */

  function activateScripts(consent) {
    if (!consent) return;
    var gated = document.querySelectorAll(
      'script[type="text/plain"][data-consent]'
    );
    for (var i = 0; i < gated.length; i++) {
      var s = gated[i];
      var category = s.getAttribute('data-consent');
      if (!consent[category]) continue;
      if (s.getAttribute('data-consent-activated') === 'true') continue;

      var next = document.createElement('script');
      // Copy all attributes except type
      for (var a = 0; a < s.attributes.length; a++) {
        var attr = s.attributes[a];
        if (attr.name === 'type') continue;
        next.setAttribute(attr.name, attr.value);
      }
      next.type = 'text/javascript';
      if (!s.src && s.textContent) {
        next.text = s.textContent;
      }
      // Mark original so we don't re-activate it
      s.setAttribute('data-consent-activated', 'true');
      s.parentNode.insertBefore(next, s.nextSibling);
    }
  }

  /* ── UI controls ──────────────────────────────────────── */

  function getEls() {
    return {
      banner:   document.getElementById('cc-banner'),
      modal:    document.getElementById('cc-modal'),
      toggleA:  document.getElementById('cc-toggle-analytics'),
      toggleB:  document.getElementById('cc-toggle-advertising')
    };
  }

  function showBanner()  { var b = document.getElementById('cc-banner'); if (b) b.style.display = 'flex'; }
  function hideBanner()  { var b = document.getElementById('cc-banner'); if (b) b.style.display = 'none'; }

  function openModal() {
    var m = document.getElementById('cc-modal');
    if (!m) return;
    // Pre-populate toggles from saved state (or defaults if first visit)
    var saved = loadConsent();
    var a = document.getElementById('cc-toggle-analytics');
    var b = document.getElementById('cc-toggle-advertising');
    if (a) a.checked = saved ? !!saved.analytics   : false;
    if (b) b.checked = saved ? !!saved.advertising : false;

    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    m.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    var m = document.getElementById('cc-modal');
    if (!m) return;
    m.style.display = 'none';
    document.body.style.overflow = '';
    m.setAttribute('aria-hidden', 'true');
  }

  function acceptAll() {
    var consent = saveConsent(true, true);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  function savePreferences() {
    var a = document.getElementById('cc-toggle-analytics');
    var b = document.getElementById('cc-toggle-advertising');
    var consent = saveConsent(a && a.checked, b && b.checked);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  /* ── Bindings ─────────────────────────────────────────── */

  function bind() {
    var acceptBtns = document.querySelectorAll('[data-cc-action="accept-all"]');
    for (var i = 0; i < acceptBtns.length; i++) {
      acceptBtns[i].addEventListener('click', acceptAll);
    }

    var manageBtns = document.querySelectorAll('[data-cc-action="manage"]');
    for (var j = 0; j < manageBtns.length; j++) {
      manageBtns[j].addEventListener('click', function (ev) {
        ev.preventDefault();
        openModal();
      });
    }

    var saveBtns = document.querySelectorAll('[data-cc-action="save"]');
    for (var k = 0; k < saveBtns.length; k++) {
      saveBtns[k].addEventListener('click', savePreferences);
    }

    var closeBtns = document.querySelectorAll('[data-cc-action="close"]');
    for (var m = 0; m < closeBtns.length; m++) {
      closeBtns[m].addEventListener('click', closeModal);
    }

    // Click-outside to close
    var modal = document.getElementById('cc-modal');
    if (modal) {
      modal.addEventListener('click', function (ev) {
        if (ev.target === modal) closeModal();
      });
    }

    // Escape key
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' || ev.keyCode === 27) {
        var m = document.getElementById('cc-modal');
        if (m && m.style.display === 'flex') closeModal();
      }
    });
  }

  /* ── Init ─────────────────────────────────────────────── */

  function init() {
    var consent = loadConsent();
    if (consent) {
      activateScripts(consent);
      hideBanner();
    } else {
      showBanner();
    }
    bind();
  }

  // Expose modal opener globally for footer "Change cookie preferences" link
  window.twoflowOpenCookieModal = openModal;

  // Footer is injected dynamically — wait for DOM + give footer.js a tick
  function boot() {
    // If banner isn't in DOM yet, poll briefly for footer.js injection
    var tries = 0;
    var max = 40; // ~2 seconds
    (function waitForBanner() {
      if (document.getElementById('cc-banner')) {
        init();
        return;
      }
      if (++tries >= max) return; // give up silently
      setTimeout(waitForBanner, 50);
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
