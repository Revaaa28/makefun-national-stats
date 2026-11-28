// Sources & method page: the publishers behind every figure, and how
// the numbers on this site were chosen.

import { sources } from './data-people.js';
import { pageHead, sourceLine } from './views.js';
import { esc } from './format.js';

export default function viewSources() {
  const list = sources.map((s) =>
    `<li><b>${esc(s.abbr)}</b> — ${esc(s.name)}<span>${esc(s.note)}</span></li>`).join('');
  return `${pageHead('Sources & method', 'Every figure on this site names its source and year where it appears. This page lists the publishers and how the numbers were chosen.')}
  <section class="card">
    <h2>Publishers</h2>
    <ul class="releases">${list}</ul>
  </section>
  <section class="card">
    <h2>How the figures were chosen</h2>
    <p><b>Headline values first.</b> Each page leads with the latest published headline figure — 2025 for most headline series, as BPS released them through 2025 and into February 2026 — and shows the annual series behind it, so a visitor can see the trend, not just the point.</p>
    <p><b>One vintage per page.</b> Series on a page come from a single publication vintage, so years line up and nothing mixes a census year with an estimate year without saying so.</p>
    <p><b>Estimates labelled.</b> Island populations are BPS mid-year estimates; province populations are the 2020 Census, labelled as such. Density is computed from those two columns and rounded. The province HDI figures are the 2024 release, the latest BPS has published by province.</p>
    <p><b>No forecasts.</b> Nothing on this site is a projection. Where a publisher has not yet released a newer value, the site shows the latest published year instead of guessing.</p>
    ${sourceLine('Compiled 28 November 2026. Figures are rounded for display; underlying values follow the publishers’ releases.')}
  </section>
  <section class="card">
    <h2>About AngkaNusa</h2>
    <p>AngkaNusa is an independent reader’s guide to Indonesia’s official statistics. It is not affiliated with BPS, Bank Indonesia or the World Bank, and it republishes no official text or branding — figures are cited, words are our own.</p>
  </section>`;
}
