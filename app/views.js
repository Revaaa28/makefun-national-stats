// AngkaNusa view registry and the building blocks every page shares.
// Each page is its own module, loaded on first visit (a literal import(),
// so the dossier counts it as loaded later, not in the first load);
// this file holds only the helpers the pages share.

import { sparkline } from './charts.js';
import { esc } from './format.js';

// A headline-indicator card: label, value, sparkline of the series behind
// it, the previous period's reading, and its source line.
export function kpiCard(k) {
  return `<article class="kpi"><p class="kpi-label">${esc(k.label)}</p>
    <p class="kpi-value">${esc(k.value)}</p>
    ${sparkline(k.spark)}
    <p class="kpi-delta">${esc(k.delta)}</p>
    <p class="kpi-note">${esc(k.note)} · ${esc(k.source)}</p></article>`;
}

export function sourceLine(text) {
  return `<p class="src">${esc(text)}</p>`;
}

export function pageHead(title, intro) {
  return `<div class="page-head"><h1>${esc(title)}</h1><p class="lede">${esc(intro)}</p></div>`;
}

// Route table: path → a loader for the page module, whose default export
// returns the page's HTML. Pages load lazily so the first load stays the
// overview alone.
export const routes = {
  '/': () => import('./page-overview.js'),
  '/population': () => import('./page-population.js'),
  '/economy': () => import('./page-economy.js'),
  '/labour': () => import('./page-labour.js'),
  '/health': () => import('./page-health.js'),
  '/regions': () => import('./page-regions.js'),
  '/sources': () => import('./page-sources.js'),
};
