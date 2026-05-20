/* ============================================================
   2Flow — GDPR Cookie Consent + Google Consent Mode v2
   Self-contained. No external libraries. No global pollution
   except window.twoflowOpenCookieModal.
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = '2flow_consent';
  var VERSION     = '2.0.0'; // bumped: v2 adds Google Consent Mode signals

  /* ── Storage ───────────────────────────────────────────── */

  function loadConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && parsed.version === VERSION) return parsed;
      // Version mismatch (e.g. upgrading from v1): discard and re-prompt
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

  /* ── Google Consent Mode v2 signals ────────────────────── */

  function updateGoogleConsent(consent) {
    if (typeof window.gtag !== 'function') return;
    var analytics   = !!(consent && consent.analytics);
    var advertising = !!(consent && consent.advertising);
    window.gtag('consent', 'update', {
      'analytics_storage':  analytics   ? 'granted' : 'denied',
      'ad_storage':         advertising ? 'granted' : 'denied',
      'ad_user_data':       advertising ? 'granted' : 'denied',
      'ad_personalization': advertising ? 'granted' : 'denied'
    });
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
      for (var a = 0; a < s.attributes.length; a++) {
        var attr = s.attributes[a];
        if (attr.name === 'type') continue;
        next.setAttribute(attr.name, attr.value);
      }
      next.type = 'text/javascript';
      if (!s.src && s.textContent) {
        next.text = s.textContent;
      }
      s.setAttribute('data-consent-activated', 'true');
      s.parentNode.insertBefore(next, s.nextSibling);
    }
  }

  /* ── UI controls ──────────────────────────────────────── */

  function showBanner()  { var b = document.getElementById('cc-banner'); if (b) b.style.display = 'flex'; }
  function hideBanner()  { var b = document.getElementById('cc-banner'); if (b) b.style.display = 'none'; }

  function openModal() {
    var m = document.getElementById('cc-modal');
    if (!m) return;
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
    updateGoogleConsent(consent);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  function rejectAll() {
    var consent = saveConsent(false, false);
    updateGoogleConsent(consent);
    // No scripts to activate — don't call activateScripts
    hideBanner();
    closeModal();
  }

  function savePreferences() {
    var a = document.getElementById('cc-toggle-analytics');
    var b = document.getElementById('cc-toggle-advertising');
    var consent = saveConsent(a && a.checked, b && b.checked);
    updateGoogleConsent(consent);
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

    var rejectBtns = document.querySelectorAll('[data-cc-action="reject-all"]');
    for (var j = 0; j < rejectBtns.length; j++) {
      rejectBtns[j].addEventListener('click', rejectAll);
    }

    var manageBtns = document.querySelectorAll('[data-cc-action="manage"]');
    for (var k = 0; k < manageBtns.length; k++) {
      manageBtns[k].addEventListener('click', function (ev) {
        ev.preventDefault();
        openModal();
      });
    }

    var saveBtns = document.querySelectorAll('[data-cc-action="save"]');
    for (var l = 0; l < saveBtns.length; l++) {
      saveBtns[l].addEventListener('click', savePreferences);
    }

    var closeBtns = document.querySelectorAll('[data-cc-action="close"]');
    for (var m = 0; m < closeBtns.length; m++) {
      closeBtns[m].addEventListener('click', closeModal);
    }

    var modal = document.getElementById('cc-modal');
    if (modal) {
      modal.addEventListener('click', function (ev) {
        if (ev.target === modal) closeModal();
      });
    }

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
      // Returning visitor: restore consent signals immediately
      updateGoogleConsent(consent);
      activateScripts(consent);
      hideBanner();
    } else {
      // First visit: banner stays visible, defaults remain denied
      showBanner();
    }
    bind();
  }

  window.twoflowOpenCookieModal = openModal;

  function boot() {
    var tries = 0;
    var max = 40;
    (function waitForBanner() {
      if (document.getElementById('cc-banner')) {
        init();
        return;
      }
      if (++tries >= max) return;
      setTimeout(waitForBanner, 50);
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
