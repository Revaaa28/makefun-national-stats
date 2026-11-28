// Population page: the census age pyramid, where people live, the facts
// table, and the largest provinces.

import { islands } from './data.js';
import { peopleFacts, pyramid } from './data-people.js';
import { provinces } from './data-provinces.js';
import { barChart } from './charts.js';
import { pageHead, sourceLine } from './views.js';
import { fmt, fmtInt, esc } from './format.js';

const TEAL = '#1f7a6d';
const AMBER = '#c77f1a';
const INK = '#0f3d3e';
const MUTED = '#5d6b63';
const GRID = '#d8ddd8';

// Age pyramid: one row per five-year group, men to the left of the axis,
// women to the right, shares of the whole population in percent. Age
// labels sit in a gutter at the axis, between the two bar fields.
function pyramidChart(groups) {
  const width = 720, rowH = 23, padT = 26, padB = 26, gutter = 30;
  const height = padT + groups.length * rowH + padB;
  const cx = width / 2;
  const maxV = Math.max(...groups.flatMap((g) => [g.m, g.f]));
  const scale = (cx - gutter - 52) / maxV;
  const ticks = [0, 1, 2, 3, 4];
  const grid = ticks.map((t) => {
    const dx = t * scale;
    return `<line x1="${(cx - gutter - dx).toFixed(1)}" x2="${(cx - gutter - dx).toFixed(1)}" y1="${padT - 6}" y2="${height - padB + 4}" stroke="${GRID}" stroke-width="1"/>
      <line x1="${(cx + gutter + dx).toFixed(1)}" x2="${(cx + gutter + dx).toFixed(1)}" y1="${padT - 6}" y2="${height - padB + 4}" stroke="${GRID}" stroke-width="1"/>
      <text x="${(cx - gutter - dx).toFixed(1)}" y="${height - 6}" font-size="11" fill="${MUTED}" text-anchor="middle">${t}%</text>
      <text x="${(cx + gutter + dx).toFixed(1)}" y="${height - 6}" font-size="11" fill="${MUTED}" text-anchor="middle">${t}%</text>`;
  }).join('');
  const rows = groups.map((g, i) => {
    const y = padT + i * rowH;
    const midY = y + rowH / 2 + 4;
    return `<rect x="${(cx - gutter - g.m * scale).toFixed(1)}" y="${y + 3}" width="${(g.m * scale).toFixed(1)}" height="${rowH - 7}" rx="2" fill="${TEAL}"/>
      <rect x="${cx + gutter}" y="${y + 3}" width="${(g.f * scale).toFixed(1)}" height="${rowH - 7}" rx="2" fill="${AMBER}"/>
      <text x="${(cx - gutter - g.m * scale - 7).toFixed(1)}" y="${midY}" font-size="11.5" fill="${INK}" text-anchor="end">${fmt(g.m, 1)}</text>
      <text x="${(cx + gutter + g.f * scale + 7).toFixed(1)}" y="${midY}" font-size="11.5" fill="${INK}">${fmt(g.f, 1)}</text>
      <text x="${cx}" y="${midY}" font-size="11" fill="${MUTED}" text-anchor="middle">${g.age}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Population pyramid, census 2020">
    ${grid}
    <text x="${cx - gutter - 4 * scale}" y="14" font-size="12.5" font-weight="700" fill="${TEAL}">Men</text>
    <text x="${cx + gutter + 4 * scale}" y="14" font-size="12.5" font-weight="700" fill="${AMBER}" text-anchor="end">Women</text>
    ${rows}
  </svg>`;
}

export default function viewPopulation() {
  const facts = peopleFacts.map((f) =>
    `<tr><td>${esc(f.label)}</td><td class="num"><b>${esc(f.value)}</b></td><td>${esc(f.source)}</td></tr>`).join('');
  const islandBars = barChart(islands.map((i) => ({ name: i.name, value: i.pop })), { unit: 'm' });
  const top = [...provinces].sort((a, b) => b.pop - a.pop).slice(0, 10)
    .map((p, i) => `<tr><td>${i + 1}</td><td>${esc(p.name)}</td><td class="num">${fmt(p.pop, 2)}m</td><td class="num">${fmtInt(p.area)} km²</td></tr>`).join('');
  return `${pageHead('Population', '284.4 million people (BPS mid-year estimate, 2025) — the world’s fourth-largest population, spread over 17,508 islands and 38 provinces.')}
  <section class="card">
    <div class="card-head"><h2>The age pyramid</h2><span class="tag">Population Census 2020 · BPS</span></div>
    ${pyramidChart(pyramid)}
    ${sourceLine('Share of the population in each five-year age group, percent; men left, women right. Source: BPS, Population Census 2020 (shares rounded). One Indonesian in four is under 15; one in eighteen is 65 or over.')}
  </section>
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Where people live</h2><span class="tag">By island, 2024</span></div>
      ${islandBars}
      ${sourceLine('Population in millions, BPS mid-year estimate 2024.')}
    </section>
    <section class="card">
      <h2>Reading the numbers</h2>
      <p>Indonesia’s population grows about 1.0% a year — 2.8 million more people in 2025 than in 2024. The median age is 30.1 years (BPS, 2024): a young country, but ageing — the share over 65 has doubled since 2000. Urbanisation reached 58.6% in 2024 (BPS / World Bank), and the working-age population (15+) stood at 218.6 million in August 2025 (BPS).</p>
      ${sourceLine('Definitions: “working-age” is 15 years and over; urban share follows the World Bank series. Sources: BPS; World Bank, World Development Indicators.')}
    </section>
  </div>
  <section class="card">
    <h2>People, at a glance</h2>
    <table class="facts"><thead><tr><th>Measure</th><th>Value</th><th>Source</th></tr></thead><tbody>${facts}</tbody></table>
  </section>
  <section class="card">
    <div class="card-head"><h2>Largest provinces</h2><span class="tag">Population Census 2020, BPS</span></div>
    <table class="facts"><thead><tr><th>#</th><th>Province</th><th>Population</th><th>Area</th></tr></thead><tbody>${top}</tbody></table>
    ${sourceLine('West Java alone (48.27m) has more people than Spain. The full 38-province table, searchable and sortable, is on the Regions page.')}
    <p><a class="btn" href="#/regions">See all 38 provinces →</a></p>
  </section>`;
}
