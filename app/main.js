// AngkaNusa router: hash routes, page render, and the working controls
// (chart range toggle, province search, sortable table).

import { routes } from './views.js';
import { series } from './data.js';
import { lineChart } from './charts.js';

const app = document.getElementById('app');
const navLinks = [...document.querySelectorAll('.nav a')];

function currentPath() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return routes[hash] ? hash : '/';
}

function render() {
  const path = currentPath();
  app.innerHTML = routes[path]();
  navLinks.forEach((a) => {
    const href = a.getAttribute('href');
    if (href === `#${path}`) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  wireControls(path);
  window.scrollTo(0, 0);
}

function wireControls(path) {
  if (path === '/') wireGrowthToggle();
  if (path === '/regions') wireRegions();
}

function wireGrowthToggle() {
  const buttons = document.querySelectorAll('.toggle button');
  const box = document.getElementById('growth-chart');
  if (!buttons.length || !box) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');
      const pts = btn.dataset.range === 'recent'
        ? series.gdpGrowth.filter((p) => p.year >= 2020)
        : series.gdpGrowth;
      box.innerHTML = lineChart(pts, { unit: '%' });
    });
  });
}

function wireRegions() {
  const search = document.getElementById('prov-search');
  const table = document.getElementById('prov-table');
  const count = document.getElementById('prov-count');
  if (!search || !table) return;
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach((r) => {
      const hit = r.cells[0].textContent.toLowerCase().includes(q);
      r.style.display = hit ? '' : 'none';
      if (hit) shown += 1;
    });
    count.textContent = `${shown} of 38 provinces shown.`;
  });

  let sortKey = null;
  let sortAsc = true;
  table.querySelectorAll('th[data-sort]').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.sort;
      sortAsc = key === sortKey ? !sortAsc : key === 'name';
      sortKey = key;
      const col = { name: 0, pop: 1, area: 2, density: 3, hdi: 4 }[key];
      const sorted = [...rows].sort((a, b) => {
        const av = a.cells[col].dataset.v ?? a.cells[col].textContent;
        const bv = b.cells[col].dataset.v ?? b.cells[col].textContent;
        const cmp = key === 'name'
          ? String(av).localeCompare(String(bv))
          : Number(av) - Number(bv);
        return sortAsc ? cmp : -cmp;
      });
      sorted.forEach((r) => tbody.appendChild(r));
      table.querySelectorAll('th').forEach((h) => h.classList.remove('sorted-asc', 'sorted-desc'));
      th.classList.add(sortAsc ? 'sorted-asc' : 'sorted-desc');
    });
  });
}

window.addEventListener('hashchange', render);
render();
