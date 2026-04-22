/**
 * flashcards.js
 * ─────────────────────────────────────────────────────────────
 * LCA ICT — Flashcard game logic.
 *
 * Card types
 * ──────────
 *   ACRONYM  card.abbr is set  → front shows abbr,  hint reveals term
 *   CONCEPT  card.abbr is null → front shows term,   hint reveals card.hint
 *
 * Hint tracking
 * ─────────────
 *   hintsUsed Set tracks indices where hint was revealed.
 *   Shown in: status bar (live count), review cards, print sheet.
 *
 * Depends on: glossary-data.js (GLOSSARY, CATEGORIES), shared.js
 * ─────────────────────────────────────────────────────────────
 */

// ── STATE ─────────────────────────────────────────────────────
let deck      = [];   // current shuffled card array
let cursor    = 0;    // index into deck
let results   = {};   // { idx: 'correct' | 'wrong' | null }
let hintsUsed = new Set(); // indices where hint was shown
let gameMode  = 'all';
let isFlipped = false;

// ── ELEMENTS ──────────────────────────────────────────────────
const el = id => document.getElementById(id);

const elSetup      = el('setup-panel');
const elGame       = el('game-area');
const elReview     = el('review-panel');
const elCatSelect  = el('cat-select');
const elSetupCount = el('setup-count');
const elBtnStart   = el('btn-start');

const elProgress   = el('progress-bar');
const elCounter    = el('status-counter');
const elScCorrect  = el('score-correct');
const elScWrong    = el('score-wrong');
const elScHints    = el('score-hints');

const elCard       = el('fc-card');
const elCatTag     = el('fc-cat-tag');
const elTypeBadge  = el('fc-type-badge');
const elTerm       = el('fc-term');
const elBtnHint    = el('btn-hint');
const elHintText   = el('fc-hint-text');
const elBackTerm   = el('fc-back-term');
const elDef        = el('fc-def');

const elBtnCorrect = el('btn-correct');
const elBtnWrong   = el('btn-wrong');
const elBtnPrev    = el('btn-prev');
const elBtnNext    = el('btn-next');
const elBtnReset   = el('btn-reset');
const elBtnNew     = el('btn-new-session');

const elRevStats   = el('review-stats');
const elRevWrap    = el('review-incorrect-wrap');
const elBtnRetry   = el('btn-retry-wrong');
const elBtnNewRev  = el('btn-new-session-review');
const elBtnPrint   = el('btn-print');
const elPrintArea  = el('print-area');

// ── HELPERS ───────────────────────────────────────────────────
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isAcronym = card => Boolean(card.abbr);

const catMeta = card => {
  if (!card.tags?.length) return null;
  return CATEGORIES[card.tags[0]] || null;
};

// ── SETUP ─────────────────────────────────────────────────────
function buildCategorySelect() {
  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const opt = Object.assign(document.createElement('option'), {
      value: key, textContent: meta.label
    });
    elCatSelect.appendChild(opt);
  });
}

function getPool() {
  const cat = elCatSelect.value;
  return cat === 'all'
    ? [...GLOSSARY]
    : GLOSSARY.filter(c => c.tags.includes(cat));
}

function updateSetupCount() {
  const pool = getPool();
  const n = gameMode === '10' ? Math.min(10, pool.length) : pool.length;
  elSetupCount.textContent = `${n} card${n !== 1 ? 's' : ''} in selection`;
}

// ── GAME START ────────────────────────────────────────────────
function startSession(cards) {
  deck      = cards || buildDeck();
  cursor    = 0;
  results   = Object.fromEntries(deck.map((_, i) => [i, null]));
  hintsUsed = new Set();

  elSetup.classList.add('hidden');
  elReview.classList.add('hidden');
  elGame.classList.remove('hidden');

  renderCard(0);
}

function buildDeck() {
  let cards = shuffle(getPool());
  if (gameMode === '10') cards = cards.slice(0, 10);
  return cards;
}

// ── RENDER CARD ───────────────────────────────────────────────
function renderCard(idx) {
  const card = deck[idx];
  if (!card) return;

  // Reset flip
  isFlipped = false;
  elCard.classList.remove('flipped');

  // Reset hint UI
  elHintText.classList.add('hidden');
  elHintText.textContent = '';
  elHintText.className = 'fc-hint-text hidden';
  elBtnHint.classList.remove('hidden');

  const acronym = isAcronym(card);
  const meta    = catMeta(card);

  // ── FRONT ──
  // Category tag
  elCatTag.textContent = meta ? meta.label : (card.tags?.[0] || '');
  if (meta) {
    elCatTag.style.color       = meta.color;
    elCatTag.style.borderColor = meta.border;
    elCatTag.style.background  = meta.bg;
  }

  // Type badge
  elTypeBadge.textContent = acronym ? 'Acronym' : 'Term';
  elTypeBadge.className   = `fc-type-badge ${acronym ? 'type-acronym' : 'type-concept'}`;

  // Main display — abbreviation for acronyms, full term for concepts
  elTerm.textContent = acronym ? card.abbr : card.term;

  // Hint button: always visible (acronym hint = term, concept hint = card.hint)
  const hasHint = acronym ? true : Boolean(card.hint);
  elBtnHint.style.display = hasHint ? '' : 'none';

  // ── BACK ──
  // For acronym cards show the full expansion at the top of the back
  if (acronym) {
    elBackTerm.textContent = card.term;
    elBackTerm.classList.remove('hidden');
  } else {
    elBackTerm.textContent = '';
    elBackTerm.classList.add('hidden');
  }
  elDef.textContent = card.def;

  // ── MARKED STATE ──
  elCard.classList.remove('marked-correct', 'marked-wrong');
  const r = results[idx];
  if (r === 'correct') elCard.classList.add('marked-correct');
  if (r === 'wrong')   elCard.classList.add('marked-wrong');

  // Re-show hint-used dot if hint was already used on this card
  renderHintDot(idx);

  // ── PROGRESS ──
  elProgress.style.width = `${((idx + 1) / deck.length) * 100}%`;
  elCounter.textContent  = `${idx + 1} / ${deck.length}`;

  elBtnPrev.disabled = idx === 0;
  elBtnNext.disabled = idx === deck.length - 1;

  refreshScores();
}

function renderHintDot(idx) {
  // Remove any existing dot
  elCard.querySelectorAll('.fc-hint-used-dot').forEach(d => d.remove());
  if (hintsUsed.has(idx)) {
    const dot = document.createElement('div');
    dot.className   = 'fc-hint-used-dot';
    dot.textContent = '💡 hint used';
    // append to front face
    elCard.querySelector('.fc-front').appendChild(dot);
  }
}

function refreshScores() {
  const vals = Object.values(results);
  elScCorrect.textContent = vals.filter(v => v === 'correct').length;
  elScWrong.textContent   = vals.filter(v => v === 'wrong').length;
  elScHints.textContent   = hintsUsed.size;
}

// ── HINT ──────────────────────────────────────────────────────
function showHint() {
  const card    = deck[cursor];
  const acronym = isAcronym(card);

  // Log hint usage
  hintsUsed.add(cursor);
  refreshScores();
  renderHintDot(cursor);

  // Build hint text
  const hintText = acronym ? card.term : (card.hint || '');
  elHintText.textContent = hintText;
  // Acronym hints get a bolder style since it's the full term
  elHintText.className = `fc-hint-text${acronym ? ' hint-acronym' : ''}`;
  elHintText.classList.remove('hidden');
  elBtnHint.classList.add('hidden');
}

// ── FLIP ──────────────────────────────────────────────────────
function flipCard() {
  isFlipped = !isFlipped;
  elCard.classList.toggle('flipped', isFlipped);
}

// ── NAVIGATION ────────────────────────────────────────────────
function goTo(idx) {
  if (idx < 0 || idx >= deck.length) return;
  cursor = idx;
  renderCard(cursor);
}

function advance() {
  if (cursor < deck.length - 1) {
    goTo(cursor + 1);
  } else {
    // Check if any cards are still unmarked
    const anyUnmarked = Object.values(results).some(v => v === null);
    if (!anyUnmarked) showReview();
  }
}

// ── MARK ──────────────────────────────────────────────────────
function markCard(result) {
  results[cursor] = result;
  refreshScores();

  elCard.classList.remove('marked-correct', 'marked-wrong');
  void elCard.offsetWidth; // reflow
  elCard.classList.add(result === 'correct' ? 'marked-correct' : 'marked-wrong');

  setTimeout(() => {
    if (cursor < deck.length - 1) {
      advance();
    } else {
      showReview();
    }
  }, 350);
}

// ── RESET ─────────────────────────────────────────────────────
function resetScores() {
  Object.keys(results).forEach(k => { results[k] = null; });
  hintsUsed.clear();
  renderCard(cursor);
}

function backToSetup() {
  elGame.classList.add('hidden');
  elReview.classList.add('hidden');
  elSetup.classList.remove('hidden');
  updateSetupCount();
}

// ── REVIEW ────────────────────────────────────────────────────
function showReview() {
  elGame.classList.add('hidden');
  elReview.classList.remove('hidden');

  const total   = deck.length;
  const correct = Object.values(results).filter(v => v === 'correct').length;
  const wrong   = Object.values(results).filter(v => v === 'wrong').length;
  const hints   = hintsUsed.size;
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Stats header
  elRevStats.innerHTML = `
    <div class="stat-item stat-correct"><strong>${correct}</strong>Correct</div>
    <div class="stat-item stat-wrong"><strong>${wrong}</strong>Incorrect</div>
    <div class="stat-item stat-hints"><strong>${hints}</strong>Hints Used</div>
    <div class="stat-item stat-pct"><strong>${pct}%</strong>Score</div>
  `;

  // Incorrect cards
  const wrongIndices = Object.entries(results)
    .filter(([, v]) => v === 'wrong')
    .map(([i]) => Number(i));

  elRevWrap.innerHTML = '';

  if (wrongIndices.length === 0) {
    elRevWrap.innerHTML = `
      <p style="text-align:center;color:var(--text-muted);font-family:var(--mono);
                font-size:13px;padding:1.5rem 0;">
        🎉 No incorrect cards — perfect score!
      </p>`;
    elBtnRetry.disabled = true;
    elBtnRetry.style.opacity = '0.35';
    elBtnPrint.disabled = true;
    elBtnPrint.style.opacity = '0.35';
    return;
  }

  elBtnRetry.disabled = false;
  elBtnRetry.style.opacity = '';
  elBtnPrint.disabled = false;
  elBtnPrint.style.opacity = '';

  // Title
  const titleEl = document.createElement('h3');
  titleEl.className = 'review-section-title';
  titleEl.innerHTML = `
    Review Incorrect
    <span class="review-badge review-badge-wrong">${wrongIndices.length}</span>
  `;
  elRevWrap.appendChild(titleEl);

  // Cards
  const cardsWrap = document.createElement('div');
  cardsWrap.className = 'review-cards';

  wrongIndices.forEach(idx => {
    const card      = deck[idx];
    const acronym   = isAcronym(card);
    const hintShown = hintsUsed.has(idx);

    const div = document.createElement('div');
    div.className = `review-card${hintShown ? ' hint-used' : ''}`;

    div.innerHTML = `
      <div class="review-card-header">
        <span class="review-card-term">${acronym ? card.abbr : card.term}</span>
        <span class="review-card-meta">
          ${acronym ? `<span class="review-card-abbr">${card.abbr}</span>` : ''}
          ${hintShown ? `<span class="review-hint-flag">💡 hint used</span>` : ''}
        </span>
      </div>
      ${acronym ? `<div style="font-family:var(--display);font-size:0.9rem;font-weight:700;
                              color:var(--accent);margin-bottom:0.35rem;">${card.term}</div>` : ''}
      <div class="review-card-def">${card.def}</div>
    `;
    cardsWrap.appendChild(div);
  });

  elRevWrap.appendChild(cardsWrap);
}

// ── PRINT ─────────────────────────────────────────────────────
function printIncorrect() {
  const wrongIndices = Object.entries(results)
    .filter(([, v]) => v === 'wrong')
    .map(([i]) => Number(i));

  if (!wrongIndices.length) return;

  const now     = new Date().toLocaleDateString('en-IE', { day: 'numeric', month: 'long', year: 'numeric' });
  const catName = elCatSelect.options[elCatSelect.selectedIndex]?.text || 'All Categories';
  const n       = wrongIndices.length;

  const cardsHtml = wrongIndices.map(idx => {
    const card      = deck[idx];
    const acronym   = isAcronym(card);
    const hintShown = hintsUsed.has(idx);

    return `
      <div class="print-card${hintShown ? ' hint-used' : ''}">
        <div class="print-card-term">
          ${acronym ? card.abbr : card.term}
        </div>
        ${acronym
          ? `<div class="print-card-abbr">Stands for: ${card.term}</div>`
          : ''}
        ${hintShown
          ? `<div class="print-card-hint-used">💡 Hint was used during session</div>`
          : ''}
        <div class="print-card-def">${card.def}</div>
      </div>`;
  }).join('');

  elPrintArea.innerHTML = `
    <div class="print-title">LCA ICT — Flashcard Review</div>
    <div class="print-subtitle">
      Incorrect cards · ${catName} · ${now} · ${n} card${n !== 1 ? 's' : ''}
      ${hintsUsed.size ? ` · ${hintsUsed.size} hint${hintsUsed.size !== 1 ? 's' : ''} used (orange border)` : ''}
    </div>
    <div class="print-cards">${cardsHtml}</div>
  `;

  window.print();
}

// ── TOUCH / SWIPE ─────────────────────────────────────────────
(function initSwipe() {
  let sx = 0, sy = 0;

  elCard.addEventListener('touchstart', e => {
    sx = e.changedTouches[0].clientX;
    sy = e.changedTouches[0].clientY;
  }, { passive: true });

  elCard.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      // Horizontal swipe
      dx < 0 ? advance() : goTo(cursor - 1);
      return;
    }
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      // Tap → flip
      flipCard();
    }
  }, { passive: true });
})();

// ── KEYBOARD ──────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (elGame.classList.contains('hidden')) return;
  switch (e.key) {
    case ' ': case 'Enter':
      e.preventDefault(); flipCard(); break;
    case 'ArrowRight': case 'ArrowDown':
      e.preventDefault(); advance(); break;
    case 'ArrowLeft': case 'ArrowUp':
      e.preventDefault(); goTo(cursor - 1); break;
    case 'h': case 'H':
      if (!elBtnHint.classList.contains('hidden')) showHint(); break;
    case 'c': case 'C':
      if (isFlipped) markCard('correct'); break;
    case 'x': case 'X':
      if (isFlipped) markCard('wrong'); break;
  }
});

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  buildCategorySelect();
  updateSetupCount();

  // Setup controls
  elCatSelect.addEventListener('change', updateSetupCount);

  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameMode = btn.dataset.mode;
      updateSetupCount();
    });
  });

  elBtnStart.addEventListener('click', () => startSession());

  // Card interactions
  elCard.addEventListener('click', e => {
    // Don't flip if the hint button or hint text was clicked
    if (e.target.closest('.btn-hint') || e.target.closest('.fc-hint-text')) return;
    flipCard();
  });
  elCard.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
  });

  // Hint
  elBtnHint.addEventListener('click', e => {
    e.stopPropagation();
    showHint();
  });

  // Mark buttons
  elBtnCorrect.addEventListener('click', () => markCard('correct'));
  elBtnWrong.addEventListener('click',   () => markCard('wrong'));

  // Navigation
  elBtnPrev.addEventListener('click', () => goTo(cursor - 1));
  elBtnNext.addEventListener('click', () => advance());

  // Session controls
  elBtnReset.addEventListener('click', resetScores);
  elBtnNew.addEventListener('click', backToSetup);

  // Review actions
  elBtnRetry.addEventListener('click', () => {
    const wrongCards = Object.entries(results)
      .filter(([, v]) => v === 'wrong')
      .map(([i]) => deck[Number(i)]);
    if (wrongCards.length) startSession(shuffle(wrongCards));
  });

  elBtnNewRev.addEventListener('click', backToSetup);
  elBtnPrint.addEventListener('click',  printIncorrect);
});
