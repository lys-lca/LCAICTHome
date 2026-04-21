/**
 * glossary-ui.js
 * ─────────────────────────────────────────────────────────────
 * LCA ICT Glossary — UI logic: filtering, searching, sorting,
 * alphabet navigation, card rendering and dark/light theme.
 *
 * Depends on:  glossary-data.js  (GLOSSARY, CATEGORIES)
 * ─────────────────────────────────────────────────────────────
 */

// ── THEME ─────────────────────────────────────────────────────
const THEME_KEY = 'lca-ict-glossary-theme';

/**
 * Reads the saved theme from localStorage (or prefers-color-scheme),
 * applies it to <html data-theme="...">, and updates the toggle button.
 */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Default to dark unless user has saved "light" or OS prefers light
  const theme = saved ?? (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ── STATE ─────────────────────────────────────────────────────
let sortAZ        = true;
let currentFilter = 'all';
let currentSearch = '';
let currentAlpha  = null;

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// ── FILTER & SORT ─────────────────────────────────────────────
/**
 * Returns the subset of GLOSSARY entries matching the current
 * search query, category filter and alphabet selection,
 * sorted according to the current sort direction.
 */
function getFilteredTerms() {
  let terms = [...GLOSSARY];

  // Sort A→Z or Z→A
  terms.sort((a, b) =>
    sortAZ ? a.term.localeCompare(b.term) : b.term.localeCompare(a.term)
  );

  // Category filter
  if (currentFilter !== 'all') {
    terms = terms.filter(t => t.tags.includes(currentFilter));
  }

  // Text search — matches term, abbreviation or definition
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    terms = terms.filter(t =>
      t.term.toLowerCase().includes(q) ||
      (t.abbr && t.abbr.toLowerCase().includes(q)) ||
      t.def.toLowerCase().includes(q)
    );
  }

  // Alphabet filter
  if (currentAlpha) {
    terms = terms.filter(t => t.term[0].toUpperCase() === currentAlpha);
  }

  return terms;
}

// ── SEARCH HIGHLIGHT ──────────────────────────────────────────
/**
 * Wraps occurrences of `query` inside `text` with a <mark> tag.
 * Returns the original text unchanged when query is empty.
 */
function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escaped})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

// ── RENDER: ALPHABET NAV ──────────────────────────────────────
/**
 * Rebuilds the A–Z navigation row.
 * Letters that have matching terms are clickable; others are dimmed.
 */
function renderAlphaNav(terms) {
  const nav  = document.getElementById('alpha-nav');
  const used = new Set(terms.map(t => t.term[0].toUpperCase()));

  nav.innerHTML = ALPHABET.map(l => {
    let cls = 'alpha-btn';
    if (!used.has(l)) {
      cls += ' no-items';
    } else {
      cls += ' has-items';
      if (l === currentAlpha) cls += ' active';
    }
    return `<button class="${cls}" data-alpha="${l}" ${!used.has(l) ? 'disabled' : ''}>${l}</button>`;
  }).join('');

  // Attach click handlers to active letters
  nav.querySelectorAll('.alpha-btn.has-items').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.dataset.alpha;
      // Toggle — clicking the active letter clears the filter
      currentAlpha = (currentAlpha === l) ? null : l;
      render();
    });
  });
}

// ── RENDER: CARDS ─────────────────────────────────────────────
/**
 * Builds the card grid grouped by first letter.
 * Shows the no-results panel when the terms array is empty.
 */
function renderCards(terms) {
  const container = document.getElementById('glossary-container');
  const noResults = document.getElementById('no-results');

  if (terms.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    document.getElementById('visible-count').textContent = 0;
    return;
  }

  noResults.style.display = 'none';

  // Group terms by first letter
  const grouped = {};
  terms.forEach(t => {
    const l = t.term[0].toUpperCase();
    if (!grouped[l]) grouped[l] = [];
    grouped[l].push(t);
  });

  // Maintain the current sort direction for section order
  const letters = Object.keys(grouped).sort(
    sortAZ ? undefined : (a, b) => b.localeCompare(a)
  );

  let html = '';

  letters.forEach(letter => {
    const group = grouped[letter];
    const count = group.length;

    html += `
      <div class="alpha-section" id="section-${letter}">
        <div class="alpha-header">
          <span class="alpha-letter">${letter}</span>
          <div class="alpha-line"></div>
          <span class="alpha-count">${count} term${count !== 1 ? 's' : ''}</span>
        </div>
        <div class="cards-grid">`;

    group.forEach((item, i) => {
      const termHl  = highlight(item.term, currentSearch);
      const defHl   = highlight(item.def,  currentSearch);
      const abbrHl  = item.abbr ? highlight(item.abbr, currentSearch) : null;
      const tagsHtml = item.tags
        .map(tag => `<span class="tag ${tag}">${CATEGORIES[tag]?.label ?? tag}</span>`)
        .join('');

      html += `
        <div class="card" style="animation-delay: ${i * 0.03}s">
          <div class="card-head">
            <span class="card-term">${termHl}</span>
            ${item.abbr ? `<span class="card-abbr">${abbrHl}</span>` : ''}
          </div>
          <p class="card-def">${defHl}</p>
          <div class="card-tags">${tagsHtml}</div>
        </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
  document.getElementById('visible-count').textContent = terms.length;
}

// ── MAIN RENDER ───────────────────────────────────────────────
/** Full re-render: runs filter logic then updates nav + cards. */
function render() {
  const terms = getFilteredTerms();
  renderAlphaNav(terms);
  renderCards(terms);
}

// ── FILTER BUTTONS: build from CATEGORIES ─────────────────────
/**
 * Dynamically creates the category filter buttons from CATEGORIES,
 * so adding a new category to glossary-data.js is the only change needed.
 */
function buildFilterButtons() {
  const container = document.getElementById('filter-btns');
  if (!container) return;

  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const btn = document.createElement('button');
    btn.className      = 'filter-btn';
    btn.dataset.filter = key;
    btn.textContent    = meta.label;
    container.appendChild(btn);
  });

  // Attach click handlers to every filter button (including "All")
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentAlpha  = null;
      render();
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // 1. Apply saved/preferred theme before anything renders
  initTheme();

  // 2. Wire up the theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // 3. Show total term count and category count in the stats bar
  document.getElementById('total-count').textContent = GLOSSARY.length;
  document.getElementById('cat-count').textContent   = Object.keys(CATEGORIES).length;

  // 4. Build filter buttons from CATEGORIES data
  buildFilterButtons();

  // 5. Search input
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    currentSearch = searchInput.value.trim();
    currentAlpha  = null;
    render();
  });

  // 6. Sort toggle
  const sortBtn = document.getElementById('sort-toggle');
  sortBtn.addEventListener('click', () => {
    sortAZ = !sortAZ;
    sortBtn.textContent = sortAZ ? 'A→Z ↕' : 'Z→A ↕';
    render();
  });

  // 7. Initial render
  render();
});
