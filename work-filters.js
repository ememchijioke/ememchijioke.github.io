(() => {
  const list = document.querySelector('#work-results');
  const controls = document.querySelector('.work-filters');
  const empty = document.querySelector('#work-empty');
  const count = document.querySelector('#work-count');
  if (!list || !controls || !empty || !count) return;
  const entries = [...list.querySelectorAll('[data-work-kind]')];
  const buttons = [...controls.querySelectorAll('[data-work-filter]')];
  entries.sort((a, b) => {
    const pinned = Number(b.dataset.workStatus === 'ongoing') - Number(a.dataset.workStatus === 'ongoing');
    return pinned || (b.querySelector('time')?.dateTime || '').localeCompare(a.querySelector('time')?.dateTime || '');
  });
  entries.forEach(entry => list.append(entry));
  function filter(kind) {
    let visible = 0;
    entries.forEach(entry => {
      entry.hidden = kind !== 'all' && entry.dataset.workKind !== kind;
      if (!entry.hidden) visible++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.workFilter === kind)));
    empty.hidden = visible !== 0;
    empty.textContent = kind === 'lab' ? 'No lab write-ups published yet.' : 'No entries published yet.';
    const noun = kind === 'all' ? 'entries' : kind === 'lab' ? 'labs' : 'projects';
    count.textContent = `${visible} ${noun} shown`;
  }
  buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.workFilter)));
  filter('all');
  controls.hidden = false;
})();
