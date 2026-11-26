// Page views for AngkaNusa: one function per page, each returning HTML.
// Every figure carries its source and year in the text beside it.

import { kpis, series, islands, sectors, provinces, releases, peopleFacts, sources } from './data.js';
import { lineChart, barChart, donutChart } from './charts.js';
import { fmt, fmtInt, pct, esc } from './format.js';

function kpiCard(k) {
  return `<article class="kpi"><p class="kpi-label">${esc(k.label)}</p>
    <p class="kpi-value">${esc(k.value)}</p>
    <p class="kpi-note">${esc(k.note)} · ${esc(k.source)}</p></article>`;
}

function sourceLine(text) {
  return `<p class="src">${esc(text)}</p>`;
}

function pageHead(title, intro) {
  return `<div class="page-head"><h1>${esc(title)}</h1><p class="lede">${esc(intro)}</p></div>`;
}

export function viewOverview() {
  const growth = lineChart(series.gdpGrowth, { unit: '%' });
  const islandBars = barChart(islands.map((i) => ({ name: i.name, value: i.pop })), { unit: 'm' });
  const cards = kpis.map(kpiCard).join('');
  const rel = releases.map((r) =>
    `<li><span class="rel-date">${esc(r.date)}</span><b>${esc(r.title)}</b><span>${esc(r.detail)}</span></li>`).join('');
  return `${pageHead('Indonesia in numbers', 'The official statistics of Indonesia — population, economy, work, health and the regions — from the publications of BPS (Statistics Indonesia) and the World Bank. Every figure below names its source and year.')}
  <section class="kpi-grid" aria-label="Key indicators">${cards}</section>
  <section class="card">
    <div class="card-head"><h2>Real GDP growth, 2015–2024</h2>
      <div class="toggle" role="group" aria-label="Chart range">
        <button data-range="all" class="on" type="button">2015–2024</button>
        <button data-range="recent" type="button">2020–2024</button>
      </div></div>
    <div id="growth-chart">${growth}</div>
    ${sourceLine('Annual real GDP growth, percent. Source: BPS, National Accounts 2024. The 2020 fall (−2.07%) is the COVID-19 recession; growth has held above 5% since 2022.')}
  </section>
  <section class="card">
    <div class="card-head"><h2>Where people live</h2><span class="tag">Population by island, 2024</span></div>
    ${islandBars}
    ${sourceLine('Population in millions, BPS mid-year estimate 2024. Java holds 55.9% of all Indonesians on 6.7% of the land.')}
  </section>
  <section class="card">
    <h2>Latest releases</h2>
    <ul class="releases">${rel}</ul>
    ${sourceLine('Headlines as published by BPS. Full tables for each release are on the Population, Economy and Work pages.')}
  </section>
  <section class="card cta">
    <h2>Explore the numbers</h2>
    <p>Start with <a href="#/population">Population</a> for who lives where, <a href="#/economy">Economy</a> for GDP, trade and prices, <a href="#/labour">Work &amp; income</a> for jobs and poverty, or <a href="#/regions">Regions</a> for all 38 provinces.</p>
  </section>`;
}

export function viewPopulation() {
  const facts = peopleFacts.map((f) =>
    `<tr><td>${esc(f.label)}</td><td class="num"><b>${esc(f.value)}</b></td><td>${esc(f.source)}</td></tr>`).join('');
  const top = [...provinces].sort((a, b) => b.pop - a.pop).slice(0, 10)
    .map((p, i) => `<tr><td>${i + 1}</td><td>${esc(p.name)}</td><td class="num">${fmt(p.pop, 2)}m</td><td class="num">${fmtInt(p.area)} km²</td></tr>`).join('');
  return `${pageHead('Population', '281.6 million people (BPS mid-year estimate, 2024) — the world’s fourth-largest population, spread over 17,508 islands and 38 provinces.')}
  <section class="card">
    <h2>People, at a glance</h2>
    <table class="facts"><thead><tr><th>Measure</th><th>Value</th><th>Source</th></tr></thead><tbody>${facts}</tbody></table>
  </section>
  <section class="card">
    <div class="card-head"><h2>Largest provinces</h2><span class="tag">Population Census 2020, BPS</span></div>
    <table class="facts"><thead><tr><th>#</th><th>Province</th><th>Population</th><th>Area</th></tr></thead><tbody>${top}</tbody></table>
    ${sourceLine('West Java alone (48.27m) has more people than Spain. The full 38-province table, searchable and sortable, is on the Regions page.')}
    <p><a class="btn" href="#/regions">See all 38 provinces →</a></p>
  </section>
  <section class="card">
    <h2>Reading the numbers</h2>
    <p>Indonesia’s population grows about 0.8% a year. The median age is 30.1 years (BPS, 2024) — a young country, but ageing: the share over 65 has doubled since 2000. Urbanisation reached 58.6% in 2024 (BPS / World Bank), and the working-age population (15+) stood at 211.6 million in August 2024 (BPS).</p>
    ${sourceLine('Definitions: “working-age” is 15 years and over; urban share follows the World Bank series. Sources: BPS, World Bank World Development Indicators 2024.')}
  </section>`;
}

export function viewEconomy() {
  const growth = lineChart(series.gdpGrowth, { unit: '%' });
  const infl = lineChart(series.inflation, { unit: '%' });
  const exp = lineChart(series.exports, { unit: '' });
  const donut = donutChart(sectors);
  return `${pageHead('Economy', 'GDP Rp22,139 trillion in 2024 (BPS), growing 5.03% — the largest economy in Southeast Asia and the world’s 16th largest by nominal GDP (World Bank, 2024).')}
  <section class="card">
    <div class="card-head"><h2>Growth, year by year</h2><span class="tag">Real GDP growth, % · BPS</span></div>
    ${growth}
    ${sourceLine('Annual real GDP growth. Source: BPS, National Accounts. Growth has averaged 5.0% a year since 2015, outside the pandemic year.')}
  </section>
  <section class="card">
    <h2>What the economy makes</h2>
    ${donut}
    ${sourceLine('Share of GDP at current prices, 2024. Source: BPS. Manufacturing is the largest single sector at 19.0%; services together pass 50%.')}
  </section>
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Inflation</h2><span class="tag">CPI, % y-on-y · BPS</span></div>
      ${infl}
      ${sourceLine('Annual consumer-price inflation. 2024’s 1.57% was the lowest since 2021; the 2022 peak of 5.51% followed the fuel-subsidy adjustment. Source: BPS.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Exports</h2><span class="tag">US$ billion · BPS</span></div>
      ${exp}
      ${sourceLine('Exports of goods, US$ billion. 2024: US$264.70bn against imports of US$233.66bn — a US$31.04bn surplus. Source: BPS.')}
    </section>
  </div>
  <section class="card">
    <h2>Trade in 2024</h2>
    <p>Indonesia’s largest export earners in 2024 were coal, palm oil and its products, and iron and steel (BPS). China took about a quarter of exports; the United States and Japan followed. Imports were led by machinery, electrical equipment and fuels. The rupiah averaged about Rp15,800 per US dollar in 2024 (Bank Indonesia).</p>
    ${sourceLine('Sources: BPS, Foreign Trade Statistics 2024; Bank Indonesia, exchange-rate statistics 2024.')}
  </section>`;
}

export function viewLabour() {
  const unemp = lineChart(series.unemployment, { unit: '%' });
  const pov = lineChart(series.poverty, { unit: '%' });
  const hdi = lineChart(series.hdi, { unit: '', decimals: 2 });
  const gini = lineChart(series.gini, { unit: '', decimals: 3 });
  return `${pageHead('Work & income', '149.38 million people in the labour force (BPS, August 2024); unemployment 4.91%, its lowest since 2019 — and poverty 8.57%, its lowest on record.')}
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Unemployment</h2><span class="tag">Open rate, % · BPS</span></div>
      ${unemp}
      ${sourceLine('Open unemployment rate, August each year. Source: BPS, National Labour Force Survey (Sakernas).')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Poverty</h2><span class="tag">Share of population, % · BPS</span></div>
      ${pov}
      ${sourceLine('Poverty rate, September each year. Source: BPS, National Socio-Economic Survey (Susenas). 24.06 million people were below the line in September 2024.')}
    </section>
  </div>
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Human development</h2><span class="tag">HDI · BPS</span></div>
      ${hdi}
      ${sourceLine('Human Development Index. 2024: 75.02 — “high human development”. Source: BPS.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Inequality</h2><span class="tag">Gini ratio · BPS</span></div>
      ${gini}
      ${sourceLine('Gini ratio, September each year. 0.379 in September 2024 — flat for four years. Source: BPS, Susenas.')}
    </section>
  </div>
  <section class="card">
    <h2>What work pays</h2>
    <p>The average monthly wage was Rp3.27 million in August 2024 (BPS, Sakernas). Formal workers — about 40% of the employed — earn roughly twice the informal average. The statutory provincial minimum wage in 2025 ranged from Rp2.17 million in Central Java to Rp5.40 million in Jakarta (provincial governments, 2025).</p>
    ${sourceLine('Sources: BPS, Sakernas August 2024; provincial minimum-wage decrees, 2025.')}
  </section>`;
}

export function viewRegions() {
  const rows = provinces.map((p) => {
    const density = (p.pop * 1e6) / p.area;
    return `<tr><td>${esc(p.name)}</td><td class="num" data-v="${p.pop}">${fmt(p.pop, 2)}</td>
      <td class="num" data-v="${p.area}">${fmtInt(p.area)}</td>
      <td class="num" data-v="${density.toFixed(1)}">${fmtInt(density)}</td>
      <td class="num" data-v="${p.hdi}">${fmt(p.hdi, 2)}</td></tr>`;
  }).join('');
  return `${pageHead('Regions — all 38 provinces', 'Every province, one table. Population is the 2020 Census (BPS); area in km²; HDI 2024 (BPS). Click a column heading to sort; type in the box to filter.')}
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

export function viewSources() {
  const list = sources.map((s) =>
    `<li><b>${esc(s.abbr)}</b> — ${esc(s.name)}<span>${esc(s.note)}</span></li>`).join('');
  return `${pageHead('Sources & method', 'Every figure on this site names its source and year where it appears. This page lists the publishers and how the numbers were chosen.')}
  <section class="card">
    <h2>Publishers</h2>
    <ul class="releases">${list}</ul>
  </section>
  <section class="card">
    <h2>How the figures were chosen</h2>
    <p><b>Headline values first.</b> Each page leads with the latest published headline figure (2024 for most series) and shows the annual series behind it, so a visitor can see the trend, not just the point.</p>
    <p><b>One vintage per page.</b> Series on a page come from a single publication vintage, so years line up and nothing mixes a census year with an estimate year without saying so.</p>
    <p><b>Estimates labelled.</b> Island populations for 2024 are BPS mid-year estimates; province populations are the 2020 Census, labelled as such. Density is computed from those two columns and rounded.</p>
    <p><b>No forecasts.</b> Nothing on this site is a projection. Where BPS has not yet published a 2025 or 2026 value, the site shows the latest published year instead of guessing.</p>
    ${sourceLine('Compiled 26 November 2026. Figures are rounded for display; underlying values follow the publishers’ releases.')}
  </section>
  <section class="card">
    <h2>About AngkaNusa</h2>
    <p>AngkaNusa is an independent reader’s guide to Indonesia’s official statistics. It is not affiliated with BPS, Bank Indonesia or the World Bank, and it republishes no official text or branding — figures are cited, words are our own.</p>
  </section>`;
}

export const routes = {
  '/': viewOverview,
  '/population': viewPopulation,
  '/economy': viewEconomy,
  '/labour': viewLabour,
  '/regions': viewRegions,
  '/sources': viewSources,
};
