// Overview page: the whole country on one screen — a latest-releases
// strip, the headline sentence, eight indicator cards with sparklines,
// and two charts that finish inside the first screenful.

import { kpis, series, islands, releases, stripItems } from './data.js';
import { lineChart, barChart } from './charts.js';
import { kpiCard, sourceLine } from './views.js';
import { esc } from './format.js';

export default function viewOverview() {
  const growth = lineChart(series.gdpGrowth, { unit: '%', height: 154 });
  const islandBars = barChart(
    islands.map((i) => ({ name: i.name, value: i.pop })),
    { unit: 'm', rowH: 24, labelW: 150 },
  );
  const strip = stripItems.map((s) =>
    `<span class="strip-item"><b>${esc(s.value)}</b> ${esc(s.label)}</span>`).join('');
  const cards = kpis.map(kpiCard).join('');
  const rel = releases.map((r) =>
    `<li><span class="rel-date">${esc(r.date)}</span><b>${esc(r.title)}</b><span>${esc(r.detail)}</span></li>`).join('');
  return `<div class="strip" aria-label="Latest releases"><span class="strip-tag">Latest releases</span>${strip}</div>
  <div class="page-head">
    <h1 class="headline">284.4 million people. A Rp23,821 trillion economy. Growth of 5.11%.</h1>
    <p class="lede">Indonesia in 2025, in official figures — population, economy, work, health and the regions, from BPS (Statistics Indonesia) and the World Bank. Every figure names its source and year.</p>
  </div>
  <section class="kpi-grid" aria-label="Key indicators">${cards}</section>
  <div class="two-col">
    <section class="card tight">
      <div class="card-head"><h2>Real GDP growth, 2015–2025</h2>
        <div class="toggle" role="group" aria-label="Chart range">
          <button data-range="all" class="on" type="button">2015–2025</button>
          <button data-range="recent" type="button">2020–2025</button>
        </div></div>
      <div id="growth-chart">${growth}</div>
      ${sourceLine('Annual real GDP growth, %. Source: BPS, National Accounts 2025.')}
    </section>
    <section class="card tight">
      <div class="card-head"><h2>Where people live</h2><span class="tag">Population by island, 2024</span></div>
      ${islandBars}
      ${sourceLine('Population in millions, BPS mid-year estimate 2024. Java holds 55.9% of all Indonesians.')}
    </section>
  </div>
  <section class="card">
    <h2>Latest releases</h2>
    <ul class="releases">${rel}</ul>
    ${sourceLine('Headlines as published by BPS. The figures behind each release are on the Population, Economy, Work and Health pages.')}
  </section>
  <section class="card cta">
    <h2>Explore the numbers</h2>
    <p>Start with <a href="#/population">Population</a> for who lives where, <a href="#/economy">Economy</a> for GDP, trade and prices, <a href="#/labour">Work &amp; income</a> for jobs and poverty, <a href="#/health">Health &amp; education</a> for lives and schooling, or <a href="#/regions">Regions</a> for all 38 provinces.</p>
  </section>`;
}
