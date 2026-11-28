// Regions page: a tile-grid map of all 38 provinces coloured by HDI,
// then the full searchable, sortable province table.

import { provinces } from './data-provinces.js';
import { pageHead, sourceLine } from './views.js';
import { fmt, fmtInt, esc } from './format.js';

// HDI colour bands, darkest = highest. One hue family (the site's teals)
// for the top bands, warming through amber to terracotta at the bottom,
// so the east–west development gap reads at a glance.
const HDI_BANDS = [
  { min: 80, bg: '#0f3d3e', fg: '#ffffff', label: '80 or more' },
  { min: 76, bg: '#2e7d6b', fg: '#ffffff', label: '76–79.9' },
  { min: 73, bg: '#7fa88f', fg: '#0f3d3e', label: '73–75.9' },
  { min: 70, bg: '#bfd2bd', fg: '#0f3d3e', label: '70–72.9' },
  { min: 65, bg: '#e0a458', fg: '#0f3d3e', label: '65–69.9' },
  { min: 0, bg: '#b34a2c', fg: '#ffffff', label: 'under 65' },
];

function bandFor(hdi) {
  return HDI_BANDS.find((b) => hdi >= b.min);
}

// The tile map: every province is one square on a 16 × 7 grid, placed by
// geography (west left, north up). Clicking a tile filters the table
// below to that province (wired in main.js).
function tileMap() {
  const tiles = provinces.map((p) => {
    const band = bandFor(p.hdi);
    return `<button type="button" class="tile" data-province="${esc(p.name)}"
      title="${esc(p.name)} — HDI ${fmt(p.hdi, 2)}"
      style="grid-column:${p.tile[0] + 1};grid-row:${p.tile[1] + 1};background:${band.bg};color:${band.fg}">${esc(p.code)}</button>`;
  }).join('');
  const legend = HDI_BANDS.map((b) =>
    `<span class="map-chip"><span class="sw" style="background:${b.bg}"></span>${b.label}</span>`).join('');
  const key = [...provinces]
    .sort((a, b) => a.tile[1] - b.tile[1] || a.tile[0] - b.tile[0])
    .map((p) => `<b>${esc(p.code)}</b> ${esc(p.name)}`)
    .join(' · ');
  return `<div class="tilemap" role="group" aria-label="Tile map of the 38 provinces, coloured by HDI">${tiles}</div>
    <div class="map-legend"><span class="map-legend-label">HDI 2024</span>${legend}</div>
    <p class="map-key">${key}</p>`;
}

export default function viewRegions() {
  const rows = provinces.map((p) => {
    const density = (p.pop * 1e6) / p.area;
    return `<tr><td>${esc(p.name)}</td><td class="num" data-v="${p.pop}">${fmt(p.pop, 2)}</td>
      <td class="num" data-v="${p.area}">${fmtInt(p.area)}</td>
      <td class="num" data-v="${density.toFixed(1)}">${fmtInt(density)}</td>
      <td class="num" data-v="${p.hdi}">${fmt(p.hdi, 2)}</td></tr>`;
  }).join('');
  return `${pageHead('Regions — all 38 provinces', 'Every province, mapped and tabulated — population from the 2020 Census (BPS), area in km², HDI 2024 (BPS). Click a tile to find a province in the table; click a column heading to sort.')}
  <section class="card tight">
    <div class="card-head"><h2>Indonesia, tile by tile</h2><span class="tag">Tile map · HDI 2024</span></div>
    ${tileMap()}
    ${sourceLine('Each tile is one province, placed where it sits on the map and coloured by its HDI, 2024 (BPS). Click a tile to find its row in the table below.')}
  </section>
  <section class="card">
    <div class="card-head"><h2>Provinces</h2>
      <label class="search">Search <input id="prov-search" type="search" placeholder="e.g. Java, Papua…" aria-label="Search provinces"></label></div>
    <div class="table-wrap"><table class="facts sortable" id="prov-table">
      <thead><tr>
        <th data-sort="name">Province <span class="arrow">↕</span></th>
        <th data-sort="pop">Population (m) <span class="arrow">↕</span></th>
        <th data-sort="area">Area (km²) <span class="arrow">↕</span></th>
        <th data-sort="density">Density (/km²) <span class="arrow">↕</span></th>
        <th data-sort="hdi">HDI 2024 <span class="arrow">↕</span></th>
      </tr></thead><tbody>${rows}</tbody></table></div>
    <p id="prov-count" class="src">38 provinces shown.</p>
    ${sourceLine('Density is people per km², computed from the census population and land area. HDI 2024: Jakarta highest (82.46), Highland Papua lowest (57.54). Sources: BPS, Population Census 2020 and HDI 2024.')}
  </section>
  <section class="card">
    <h2>Five provinces, five stories</h2>
    <p><b>Jakarta</b> packs 10.56 million people into 664 km² — the densest province by far — and has the country’s highest HDI (82.46, BPS 2024). <b>East Kalimantan</b> hosts the new capital, Nusantara, and the second-highest HDI outside Java. <b>Central Kalimantan</b> is the largest province by land (153,564 km²) and one of the least dense. <b>West Java</b> is the most populous province in the country. <b>Central Java</b> has the lowest provincial minimum wage — and some of the densest farmland on earth.</p>
    ${sourceLine('Sources: BPS, Population Census 2020; BPS, HDI 2024; Ministry of Home Affairs, 2022.')}
  </section>`;
}
