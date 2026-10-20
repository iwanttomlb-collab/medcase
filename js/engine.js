// Ward RPG engine: registry, progress storage, screen rendering.
//
// Book schema (RPG.registerBooks): { id, kicker, title, lede, docTitle }
// Chapter schema (RPG.registerChapters): { id, title, book, tag }
//   book defaults to the first registered book; tag replaces the 'Ch <id>' label.
//
// Case schema:
//   { id, chapter, title, patient, summary, start, cards: [cardId], nodes: { [nodeId]: Node } }
// Node schema:
//   text      string | string[]   paragraphs; **bold** allowed
//   clue      string | string[]   added to the clue board on entering
//   feedback  string              attending comment shown on entering
//   choices   [{ label, next, once, requires, unless, pin, why }]
//             shown in random order; pin: keep at the end (navigation such as "move on")
//             once: hide after its target node was visited (for workup hubs)
//             requires: node ids that must be visited before the choice shows
//             unless: node ids that hide the choice once any was visited
//             why: why this option is wrong. Without it, a wrong option is one whose target
//               node only loops back here with feedback (that feedback is the reason), or
//               one that leads to a non-good ending. Picking a right option lists the
//               reasons for all wrong siblings.
//   checklist { prompt, submit, revealLabel, options, next, routes }   pick-any order sheet / exam
//             revealLabel: tag on revealed rows (default '主治醫師補開')
//             options: [{ id, group, label, result, clue, key, miss, reveal, waste }]
//               key: expected pick; miss: attending comment when a key item is skipped
//               reveal: still show the result when skipped ("attending ordered it")
//               waste: attending comment when an unnecessary item is picked
//             routes: [{ ifMissedAll: [optionId], next }]  first match wins, else next;
//               the matched route's items get no reveal or miss comment (next node covers them)
//   ending    { grade: 'good'|'ok'|'bad', title, pearls: string[] }
//
// Card schema (RPG.registerCards(chapterId, cards)):
//   { id, title, points: string[], table: { head: string[], rows: string[][] }, note, refs: string[] }
//   A card unlocks when any case listing it in `cards` has been finished.

const RPG = (() => {
  const books = [];
  const chapters = [];
  const cases = {};
  const cards = {};
  const STORE_KEY = 'rheumarpg:v1:progress';
  const BOOK_KEY = 'rheumarpg:v1:book';
  const GRADE_RANK = { bad: 1, ok: 2, good: 3 };
  const GRADE_LABEL = { good: '出院', ok: '留觀', bad: '轉 ICU' };

  let state = null;

  function registerBooks(list) { books.push(...list); }
  function registerChapters(list) { chapters.push(...list); }
  function registerCase(c) { cases[c.id] = c; }
  function registerCards(chapterId, list) {
    list.forEach(card => { cards[card.id] = { ...card, chapter: chapterId }; });
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function saveGrade(caseId, grade) {
    const p = loadProgress();
    if (!p[caseId] || GRADE_RANK[grade] > GRADE_RANK[p[caseId]]) p[caseId] = grade;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }

  const bookOf = ch => ch.book || books[0].id;
  const chTag = ch => ch.tag || `Ch ${ch.id}`;

  function currentBook() {
    let id = null;
    try { id = localStorage.getItem(BOOK_KEY); } catch (e) {}
    return books.find(b => b.id === id) || books[0];
  }

  function setBook(id) {
    try { localStorage.setItem(BOOK_KEY, id); } catch (e) {}
    renderHome();
  }

  function casesOf(chapterId) {
    return Object.values(cases).filter(c => c.chapter === chapterId);
  }

  function cardUnlocked(cardId, progress) {
    return Object.values(cases).some(c => progress[c.id] && asList(c.cards).includes(cardId));
  }

  // Escape, then apply **bold**.
  function fmt(s) {
    const esc = String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return esc.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  const asList = v => (v == null ? [] : Array.isArray(v) ? v : [v]);
  const $ = sel => document.querySelector(sel);

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function show(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.hidden = el.id !== screenId);
    window.scrollTo(0, 0);
  }

  // ---------- Home: chapter map ----------
  function renderHome() {
    const progress = loadProgress();
    const book = currentBook();
    document.title = book.docTitle;
    $('#kicker').innerHTML = fmt(book.kicker);
    $('#book-title').innerHTML = book.title.split('\n').map(fmt).join('<br>');
    $('#lede').innerHTML = fmt(book.lede);
    const tabs = $('#book-tabs');
    tabs.innerHTML = '';
    books.forEach(b => {
      const t = document.createElement('button');
      t.className = 'book-tab' + (b === book ? ' on' : '');
      t.setAttribute('aria-pressed', b === book);
      t.textContent = b.tab;
      t.onclick = () => setBook(b.id);
      tabs.appendChild(t);
    });
    const list = $('#chapter-list');
    list.innerHTML = '';
    chapters.filter(ch => bookOf(ch) === book.id).forEach((ch, i) => {
      const cs = casesOf(ch.id);
      const done = cs.filter(c => progress[c.id]).length;
      const li = document.createElement('li');
      li.style.animationDelay = (i * 30) + 'ms';
      const btn = document.createElement('button');
      btn.className = 'chapter' + (cs.length ? '' : ' locked');
      btn.disabled = !cs.length;
      btn.innerHTML =
        `<span class="ch-num">${ch.tag || ch.id}</span>` +
        `<span class="ch-title">${fmt(ch.title)}</span>` +
        `<span class="ch-meta">${cs.length ? `${done} / ${cs.length} 病例` : '籌備中'}</span>`;
      if (cs.length) btn.onclick = () => renderChapter(ch.id);
      li.appendChild(btn);
      list.appendChild(li);
    });
    const all = Object.keys(cards).filter(id => bookOf(chapters.find(ch => ch.id === cards[id].chapter)) === book.id);
    $('#open-cards').innerHTML =
      `教學卡收藏 <span class="count">${all.filter(id => cardUnlocked(id, progress)).length} / ${all.length}</span>`;
    $('#open-cards').onclick = renderCards;
    show('home');
  }

  // ---------- Chapter: case list ----------
  function renderChapter(chapterId) {
    const ch = chapters.find(c => c.id === chapterId);
    const progress = loadProgress();
    $('#chapter-heading').innerHTML = `<span class="ch-num">${chTag(ch)}</span> ${fmt(ch.title)}`;
    const list = $('#case-list');
    list.innerHTML = '';
    casesOf(chapterId).forEach((c, i) => {
      const grade = progress[c.id];
      const li = document.createElement('li');
      li.style.animationDelay = (i * 60) + 'ms';
      li.innerHTML =
        `<button class="case-card">` +
        `<span class="case-no">CASE ${String(i + 1).padStart(2, '0')}</span>` +
        `<span class="case-title">${fmt(c.title)}</span>` +
        `<span class="case-patient">${fmt(c.patient)}</span>` +
        `<span class="case-summary">${fmt(c.summary)}</span>` +
        (grade ? `<span class="stamp small ${grade}">${GRADE_LABEL[grade]}</span>` : '') +
        `</button>`;
      li.firstChild.onclick = () => startCase(c.id);
      list.appendChild(li);
    });
    $('#back-home').onclick = renderHome;
    show('chapter');
  }

  // ---------- Cards ----------
  function cardHtml(card) {
    let html = `<h4>${fmt(card.title)}</h4>`;
    if (card.points) html += `<ul>${card.points.map(p => `<li>${fmt(p)}</li>`).join('')}</ul>`;
    if (card.table) {
      html += '<div class="table-wrap"><table><thead><tr>' +
        card.table.head.map(h => `<th>${fmt(h)}</th>`).join('') + '</tr></thead><tbody>' +
        card.table.rows.map(r => '<tr>' + r.map(c => `<td>${fmt(c)}</td>`).join('') + '</tr>').join('') +
        '</tbody></table></div>';
    }
    if (card.note) html += `<p class="card-note">${fmt(card.note)}</p>`;
    if (card.refs) html += `<ul class="card-refs">${card.refs.map(r => `<li>${fmt(r)}</li>`).join('')}</ul>`;
    return html;
  }

  function renderCards() {
    const progress = loadProgress();
    const wrap = $('#card-shelf');
    wrap.innerHTML = '';
    const book = currentBook();
    chapters.filter(ch => bookOf(ch) === book.id).forEach(ch => {
      const list = Object.values(cards).filter(c => c.chapter === ch.id);
      if (!list.length) return;
      const sec = document.createElement('section');
      sec.innerHTML = `<h3 class="shelf-head"><span class="ch-num">${chTag(ch)}</span> ${fmt(ch.title)}</h3>`;
      const grid = document.createElement('div');
      grid.className = 'card-grid';
      list.forEach(card => {
        const el = document.createElement('article');
        if (cardUnlocked(card.id, progress)) {
          el.className = 'tcard';
          el.dataset.card = card.id;
          el.innerHTML = cardHtml(card);
        } else {
          const from = casesOf(ch.id).filter(c => asList(c.cards).includes(card.id)).map(c => `「${c.title}」`);
          el.className = 'tcard locked';
          el.innerHTML = `<h4>???</h4><p class="card-note">完成 ${fmt(from.join(' 或 '))} 後解鎖</p>`;
        }
        grid.appendChild(el);
      });
      sec.appendChild(grid);
      wrap.appendChild(sec);
    });
    $('#back-home-cards').onclick = renderHome;
    show('cards');
  }

  // ---------- Play ----------
  function startCase(caseId) {
    const c = cases[caseId];
    state = { caseId, visited: new Set(), clues: [], missed: 0, wasted: 0 };
    $('#play-title').textContent = c.title;
    $('#play-patient').textContent = c.patient;
    $('#back-chapter').onclick = () => renderChapter(c.chapter);
    $('#story').innerHTML = '';
    $('.clipboard h3').onclick = () => $('.clipboard').classList.toggle('open');
    renderClues();
    show('play');
    enterNode(c.start);
  }

  function addClues(list) {
    const before = state.clues.length;
    asList(list).forEach(cl => { if (!state.clues.includes(cl)) state.clues.push(cl); });
    renderClues();
    if (state.clues.length > before) {
      // Restart the flash so a collapsed clipboard (phone layout) still signals new clues.
      const board = $('.clipboard');
      board.classList.remove('pulse');
      void board.offsetWidth;
      board.classList.add('pulse');
    }
  }

  function attending(text) {
    const fb = document.createElement('aside');
    fb.className = 'attending';
    fb.innerHTML = `<span class="who">主治醫師</span>${text}`;
    return fb;
  }

  function enterNode(nodeId) {
    const c = cases[state.caseId];
    const node = c.nodes[nodeId];
    if (!node) { console.error('Missing node', nodeId); return; }
    state.visited.add(nodeId);
    addClues(node.clue);

    const story = $('#story');
    // Freeze previous choices as a log entry.
    story.querySelectorAll('.choices').forEach(el => el.remove());

    const block = document.createElement('section');
    block.className = 'beat';
    asList(node.text).forEach(p => {
      const el = document.createElement('p');
      el.innerHTML = fmt(p);
      block.appendChild(el);
    });
    if (node.feedback) block.appendChild(attending(fmt(node.feedback)));
    story.appendChild(block);

    if (node.ending) renderEnding(node.ending);
    else if (node.checklist) renderChecklist(node.checklist, block);
    else renderChoices(node.choices, block, nodeId);
    block.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Reason a choice is wrong: explicit `why`, else the feedback of a node that only loops back here.
  // Returns '' for a wrong choice with no stated reason (e.g. one leading to a bad ending), null if right.
  function wrongReason(ch, nodeId) {
    if (ch.why) return ch.why;
    const t = cases[state.caseId].nodes[ch.next];
    if (!t) return null;
    const outs = asList(t.choices);
    if (t.feedback && outs.length && outs.every(o => o.next === nodeId)) return t.feedback;
    if (t.ending && t.ending.grade !== 'good') return '';
    return null;
  }

  function explainWrong(picked, choices, nodeId) {
    if (!nodeId || picked.once || picked.pin || wrongReason(picked, nodeId) !== null) return null;
    const rows = asList(choices)
      .filter(ch => ch !== picked && !ch.once && !ch.pin)
      .map(ch => ({ ch, why: wrongReason(ch, nodeId) }))
      .filter(r => r.why);
    if (!rows.length) return null;
    const box = document.createElement('aside');
    box.className = 'attending why-box';
    box.innerHTML = '<span class="who">其他選項為什麼不對</span>' +
      rows.map(r => `<p><span class="why-opt">${fmt(r.ch.label)}</span>${fmt(r.why)}</p>`).join('');
    return box;
  }

  function renderChoices(choices, block, nodeId) {
    const wrap = document.createElement('div');
    wrap.className = 'choices';
    const shown = asList(choices)
      .filter(ch => !(ch.once && state.visited.has(ch.next)))
      .filter(ch => asList(ch.requires).every(r => state.visited.has(r)))
      .filter(ch => !asList(ch.unless).some(r => state.visited.has(r)));
    // Answers are authored first; shuffle so position gives nothing away. Pinned ones stay last.
    [...shuffle(shown.filter(ch => !ch.pin)), ...shown.filter(ch => ch.pin)]
      .forEach(ch => {
        const b = document.createElement('button');
        b.className = 'choice';
        b.innerHTML = fmt(ch.label);
        b.onclick = () => {
          const picked = document.createElement('p');
          picked.className = 'picked';
          picked.innerHTML = fmt(ch.label);
          block.appendChild(picked);
          const why = explainWrong(ch, choices, nodeId);
          if (why) block.appendChild(why);
          enterNode(ch.next);
        };
        wrap.appendChild(b);
      });
    $('#story').appendChild(wrap);
  }

  function renderChecklist(cl, block) {
    const form = document.createElement('form');
    form.className = 'order-sheet';
    if (cl.prompt) form.innerHTML = `<p class="sheet-prompt">${fmt(cl.prompt)}</p>`;

    // Group options, keep group order of first appearance, shuffle within groups.
    const groups = [];
    cl.options.forEach(o => {
      const g = o.group || '';
      let entry = groups.find(x => x.name === g);
      if (!entry) groups.push(entry = { name: g, items: [] });
      entry.items.push(o);
    });
    groups.forEach(g => {
      const fs = document.createElement('fieldset');
      if (g.name) fs.innerHTML = `<legend>${fmt(g.name)}</legend>`;
      shuffle(g.items).forEach(o => {
        const label = document.createElement('label');
        label.className = 'tick';
        label.innerHTML = `<input type="checkbox" value="${o.id}"><span>${fmt(o.label)}</span>`;
        fs.appendChild(label);
      });
      form.appendChild(fs);
    });

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.className = 'btn';
    submit.textContent = cl.submit || '送出';
    const hint = document.createElement('span');
    hint.className = 'sheet-hint';
    const bar = document.createElement('div');
    bar.className = 'sheet-bar';
    bar.append(submit, hint);
    form.appendChild(bar);

    form.onsubmit = e => {
      e.preventDefault();
      const picked = new Set([...form.querySelectorAll('input:checked')].map(i => i.value));
      if (!picked.size) { hint.textContent = '至少勾選一項'; return; }
      form.querySelectorAll('input').forEach(i => i.disabled = true);
      bar.remove();
      form.classList.add('done');
      resolveChecklist(cl, picked, block);
    };
    block.appendChild(form);
  }

  function resolveChecklist(cl, picked, block) {
    const route = asList(cl.routes).find(r => asList(r.ifMissedAll).every(id => !picked.has(id)));
    // Items handled by the matched route: the next node explains them instead.
    const routed = new Set(route ? asList(route.ifMissedAll) : []);
    const report = document.createElement('div');
    report.className = 'report';
    const rows = [];
    const notes = [];
    const clues = [];

    cl.options.forEach(o => {
      const isPicked = picked.has(o.id);
      if (isPicked) {
        rows.push({ o, auto: false });
        if (o.waste) { notes.push(o.waste); state.wasted++; }
      } else if (o.key) {
        state.missed++;
        if (routed.has(o.id)) return;
        if (o.miss) notes.push(o.miss);
        if (o.reveal) rows.push({ o, auto: true });
      }
    });

    rows.forEach(({ o, auto }) => {
      const row = document.createElement('div');
      row.className = 'report-row' + (auto ? ' auto' : '');
      row.innerHTML =
        `<span class="r-label">${fmt(o.label)}${auto ? `<em>${fmt(cl.revealLabel || '主治醫師補開')}</em>` : ''}</span>` +
        `<span class="r-result">${asList(o.result).map(fmt).join('<br>')}</span>`;
      report.appendChild(row);
      clues.push(...asList(o.clue));
    });
    block.appendChild(report);
    addClues(clues);

    if (notes.length) {
      block.appendChild(attending(notes.map(n => `<p>${fmt(n)}</p>`).join('')));
    }
    renderChoices([{ label: '繼續', next: route ? route.next : cl.next }], block);
  }

  function renderClues() {
    const ul = $('#clue-list');
    ul.innerHTML = '';
    $('#clue-count').textContent = state.clues.length;
    if (!state.clues.length) {
      ul.innerHTML = '<li class="empty">尚無線索</li>';
      return;
    }
    state.clues.forEach((cl, i) => {
      const li = document.createElement('li');
      li.innerHTML = fmt(cl);
      if (i === state.clues.length - 1) li.className = 'fresh';
      ul.appendChild(li);
    });
  }

  function renderEnding(ending) {
    const c = cases[state.caseId];
    const before = loadProgress();
    saveGrade(c.id, ending.grade);
    const newCards = asList(c.cards).filter(id => cards[id]);
    const box = document.createElement('section');
    box.className = 'ending ' + ending.grade;
    box.innerHTML =
      `<span class="stamp ${ending.grade}">${GRADE_LABEL[ending.grade]}</span>` +
      `<h3>${fmt(ending.title)}</h3>` +
      `<p class="perf">漏掉的關鍵項目 <b>${state.missed}</b> · 不必要的項目 <b>${state.wasted}</b></p>` +
      `<h4>Teaching pearls</h4>` +
      `<ul>${asList(ending.pearls).map(p => `<li>${fmt(p)}</li>`).join('')}</ul>` +
      (newCards.length
        ? `<h4>教學卡</h4><div class="card-grid">` +
          newCards.map(id => `<article class="tcard${cardUnlocked(id, before) ? '' : ' new'}" data-card="${id}">${cardHtml(cards[id])}</article>`).join('') +
          `</div>`
        : '') +
      `<div class="ending-actions">` +
      `<button class="btn" id="retry">重新挑戰</button>` +
      `<button class="btn ghost" id="to-chapter">回到病例清單</button>` +
      `</div>`;
    $('#story').appendChild(box);
    $('#retry').onclick = () => startCase(c.id);
    $('#to-chapter').onclick = () => renderChapter(c.chapter);
  }

  // ---------- Card viewer: click an unlocked card to read it full size ----------
  // Prev/next walks the cards in the same shelf or ending box.
  let viewList = [];
  let viewIdx = 0;

  function showViewed() {
    const body = $('#card-view-body');
    body.innerHTML = cardHtml(cards[viewList[viewIdx]]);
    body.scrollTop = 0;
    $('#card-view-pos').textContent = `${viewIdx + 1} / ${viewList.length}`;
    $('#card-prev').disabled = viewIdx === 0;
    $('#card-next').disabled = viewIdx === viewList.length - 1;
  }

  function stepCard(d) {
    const i = viewIdx + d;
    if (i < 0 || i >= viewList.length) return;
    viewIdx = i;
    showViewed();
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('.tcard[data-card]');
    if (!el || el.closest('dialog') || String(window.getSelection())) return;
    const scope = el.closest('#card-shelf, .ending') || el.parentElement;
    viewList = [...scope.querySelectorAll('.tcard[data-card]')].map(c => c.dataset.card);
    viewIdx = viewList.indexOf(el.dataset.card);
    showViewed();
    $('#card-view').showModal();
  });
  $('#card-prev').onclick = () => stepCard(-1);
  $('#card-next').onclick = () => stepCard(1);
  $('#card-close').onclick = () => $('#card-view').close();
  $('#card-view').addEventListener('click', e => { if (e.target.id === 'card-view') e.target.close(); });
  $('#card-view').addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') stepCard(-1);
    if (e.key === 'ArrowRight') stepCard(1);
  });

  return { registerBooks, registerChapters, registerCase, registerCards, renderHome };
})();
