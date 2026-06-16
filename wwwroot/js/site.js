(() => {
  // ── GROUP TABS ────────────────────────────────────────────
  const tabs   = document.querySelectorAll('.group-tab');
  const rails  = document.querySelectorAll('.page-rail');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.group;

      tabs.forEach(t => t.classList.toggle('gt-active', t.dataset.group === group));

      rails.forEach(r => {
        const shouldOpen = r.dataset.rail === group;
        if (shouldOpen) {
          r.classList.add('rail-open');
        } else {
          r.classList.remove('rail-open');
        }
      });
    });
  });

  // ── MOBILE DRAWER ─────────────────────────────────────────
  const burger  = document.getElementById('navBurger');
  const drawer  = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('drawerClose');

  function openDrawer() {
    drawer  && drawer.classList.add('drawer-open');
    overlay && overlay.classList.add('show');
    burger  && burger.setAttribute('aria-expanded', 'true');
    burger  && burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer  && drawer.classList.remove('drawer-open');
    overlay && overlay.classList.remove('show');
    burger  && burger.setAttribute('aria-expanded', 'false');
    burger  && burger.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger   && burger.addEventListener('click', openDrawer);
  overlay  && overlay.addEventListener('click', closeDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);

  // Close drawer on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
})();
