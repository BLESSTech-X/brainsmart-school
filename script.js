(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  $('#year').textContent = new Date().getFullYear();
  const menu = $('#mobileMenu'), scrim = $('#scrim'), toggle = $('#menuToggle');
  function setMenu(open) { menu.classList.toggle('open', open); scrim.classList.toggle('open', open); menu.setAttribute('aria-hidden', String(!open)); toggle.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; }
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $('#menuClose').addEventListener('click', () => setMenu(false)); scrim.addEventListener('click', () => setMenu(false));
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  const slides = [
    {title:'Curious minds.<br><em>Bright futures.</em>', text:'A place where every learner is known, every question matters, and every day brings a new possibility.', image:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=90', pos:'center 42%'},
    {title:'Discover more.<br><em>Become more.</em>', text:'Learning grows when students feel supported, inspired and ready to explore the world around them.', image:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90', pos:'center 48%'},
    {title:'Your ideas.<br><em>Your future.</em>', text:'We help young people build confidence, strong foundations and a lifelong love of learning.', image:'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=90', pos:'center 45%'}
  ];
  let slideIndex = 0, slideTimer = null, paused = false;
  function showSlide(i) { slideIndex = (i + slides.length) % slides.length; const s = slides[slideIndex]; $('#heroTitle').innerHTML = s.title; $('#heroText').textContent = s.text; $('#heroPhoto').style.backgroundImage = `url("${s.image}")`; $('#heroPhoto').style.backgroundPosition = s.pos; $$('#heroDots button').forEach((d, n) => { d.classList.toggle('active', n === slideIndex); d.setAttribute('aria-pressed', String(n === slideIndex)); }); }
  function resetTimer() { clearInterval(slideTimer); if (!paused) slideTimer = setInterval(() => showSlide(slideIndex + 1), 6000); }
  $('#heroPrev').addEventListener('click', () => { showSlide(slideIndex - 1); resetTimer(); }); $('#heroNext').addEventListener('click', () => { showSlide(slideIndex + 1); resetTimer(); });
  $$('#heroDots button').forEach((d, i) => d.addEventListener('click', () => { showSlide(i); resetTimer(); }));
  $('#heroPause').addEventListener('click', e => { paused = !paused; e.currentTarget.textContent = paused ? '▶' : 'Ⅱ'; e.currentTarget.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow'); resetTimer(); });
  let touchX = 0; $('.hero').addEventListener('touchstart', e => touchX = e.changedTouches[0].screenX, {passive:true}); $('.hero').addEventListener('touchend', e => { const delta = e.changedTouches[0].screenX - touchX; if (Math.abs(delta) > 45) { showSlide(slideIndex + (delta < 0 ? 1 : -1)); resetTimer(); } }, {passive:true});
  resetTimer();
  const events = $('#eventsList'); const eventItems = $$('.event-item', events); let eventOffset = 0;
  function rotateEvents(dir) { eventOffset = (eventOffset + dir + eventItems.length) % eventItems.length; eventItems.forEach((item, i) => { item.style.order = (i - eventOffset + eventItems.length) % eventItems.length; }); }
  $('#eventPrev').addEventListener('click', () => rotateEvents(-1)); $('#eventNext').addEventListener('click', () => rotateEvents(1));
  const accessPanel = $('#accessPanel'); $('#accessBtn').addEventListener('click', () => { accessPanel.hidden = !accessPanel.hidden; }); $('#accessClose').addEventListener('click', () => accessPanel.hidden = true);
  $('#largerText').addEventListener('click', () => { document.body.classList.toggle('large-text'); notify(document.body.classList.contains('large-text') ? 'Larger text enabled' : 'Standard text restored'); });
  $('#contrastToggle').addEventListener('click', () => { document.body.classList.toggle('high-contrast'); notify(document.body.classList.contains('high-contrast') ? 'High contrast enabled' : 'Standard contrast restored'); });
  $('#languageBtn').addEventListener('click', () => notify('Language options can be connected when the school confirms its preferred languages.'));
  function notify(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(notify.timer); notify.timer = setTimeout(() => toast.classList.remove('show'), 2600); }
  $('#searchForm').addEventListener('submit', e => { e.preventDefault(); const query = $('#searchInput').value.trim().toLowerCase(); $$('.search-match').forEach(el => el.classList.remove('search-match')); if (!query) { notify('Type a word to search this page.'); return; } const candidates = $$('main h1, main h2, main h3, main p, main a'); const found = candidates.find(el => el.textContent.toLowerCase().includes(query)); if (found) { setMenu(false); found.classList.add('search-match'); found.scrollIntoView({behavior:'smooth', block:'center'}); notify(`Found: ${found.textContent.trim().slice(0,55)}`); setTimeout(() => found.classList.remove('search-match'), 3500); } else notify('No matching content found on this demo page.'); });

  // Expandable mobile navigation groups: plus buttons reveal their own links.
  $('.menu-expand').forEach(button => button.addEventListener('click', () => {
    const group = button.closest('.menu-group');
    const open = group.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '−' : '＋';
  }));
  // Demo search spans the whole visible homepage and navigates to useful pages for common terms.
  const searchRoutes = [
    {terms:['student','login','portal','homework'], url:'students.html'},
    {terms:['admission','enrol','apply','application'], url:'admissions.html'},
    {terms:['staff','teacher','team'], url:'staff.html'},
    {terms:['calendar','term','event','date'], url:'calendar.html'},
    {terms:['curriculum','learning','program','academic'], url:'academics.html'},
    {terms:['family','parent','wellbeing','resource'], url:'families.html'},
    {terms:['contact','phone','email','visit'], url:'contact.html'},
    {terms:['news','announcement','newsletter'], url:'news.html'}
  ];
  const originalSearchHandler = $('#searchForm');
  originalSearchHandler.addEventListener('submit', e => {
    const query = $('#searchInput').value.trim().toLowerCase();
    if (!query) return;
    const route = searchRoutes.find(item => item.terms.some(term => query.includes(term)));
    if (route) { e.preventDefault(); e.stopImmediatePropagation(); window.location.href = route.url; }
  }, true);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); accessPanel.hidden = true; } });
})();
