(() => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  let saved;
  try { saved = localStorage.getItem('theme'); } catch {}
  let dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  function apply() {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    button.innerHTML = dark ? 'day <span aria-hidden="true">☀</span>' : 'night <span aria-hidden="true">◐</span>';
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.setAttribute('aria-pressed', String(dark));
  }
  apply();
  button.addEventListener('click', () => {
    dark = !dark;
    apply();
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  });
})();
