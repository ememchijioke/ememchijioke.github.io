(() => {
  const list = document.querySelector('.portfolio-tabs');
  if (!list) return;
  const tabs = [...list.querySelectorAll('a')];
  const panels = tabs.map(tab => document.querySelector(tab.hash));
  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('tabindex', '0');
  });
  function select(index, focus = false, updateHash = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
    if (updateHash) history.replaceState(null, '', tabs[index].hash);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
      event.preventDefault();
      select(index, false, true);
    });
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) {
        event.preventDefault();
        select(target, true, true);
      }
    });
  });
  function fromHash() {
    const index = tabs.findIndex(tab => tab.hash === location.hash);
    select(index < 0 ? 0 : index);
  }
  window.addEventListener('hashchange', () => {
    if (tabs.some(tab => tab.hash === location.hash)) fromHash();
  });
  fromHash();
})();
