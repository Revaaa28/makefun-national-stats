// Health & education page: how long Indonesians live, how children
// grow, and how far schooling goes.

import { healthFacts, stunting, schooling } from './data-people.js';
import { barChart } from './charts.js';
import { pageHead, sourceLine } from './views.js';
import { esc } from './format.js';

export default function viewHealth() {
  const facts = healthFacts.map((f) =>
    `<tr><td>${esc(f.label)}</td><td class="num"><b>${esc(f.value)}</b></td><td>${esc(f.source)}</td></tr>`).join('');
  const stuntBars = barChart(
    stunting.map((s) => ({ name: String(s.year), value: s.v })),
    { unit: '%', decimals: 1, labelW: 64 },
  );
  const schoolBars = barChart(schooling, { unit: ' yrs', decimals: 1, labelW: 210 });
  return `${pageHead('Health & education', 'Life expectancy 73.9 years, near-universal health insurance, and a child starting school today can expect 13.2 years of it — from BPS, the Ministry of Health and BPJS Kesehatan.')}
  <section class="card">
    <h2>Health & education, at a glance</h2>
    <table class="facts"><thead><tr><th>Measure</th><th>Value</th><th>Source</th></tr></thead><tbody>${facts}</tbody></table>
  </section>
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Stunting is falling</h2><span class="tag">Under-fives, % · SSGI</span></div>
      ${stuntBars}
      ${sourceLine('Children under five who are stunted (too short for their age), percent. Source: SSGI, Ministry of Health. No survey was published for 2020. The rate has fallen by a third since 2018.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Schooling, in years</h2><span class="tag">BPS, 2024</span></div>
      ${schoolBars}
      ${sourceLine('Expected years of schooling for a child entering school, the 12 years of compulsory schooling (Wajib Belajar), and the mean years adults aged 25+ have completed. Source: BPS, 2024.')}
    </section>
  </div>
  <section class="card">
    <h2>Reading the numbers</h2>
    <p>Indonesians are living longer and insuring themselves: life expectancy reached 73.9 years in 2024 (BPS), and the national health-insurance scheme, JKN, covered 98.7% of the population by the end of 2024 (BPJS Kesehatan) — one of the largest single-payer systems in the world. The stubborn problem is early childhood: one child in five is still stunted, which is why the fall from 30.8% in 2018 to 19.8% in 2024 is the health statistic officials quote most.</p>
    <p>Schooling shows the same two-sided story. A child starting today can expect 13.21 years of education (BPS, 2024), but adults average only 8.85 years completed — roughly junior-high level. Adult literacy, at 96.6%, is nearly universal among the young and lower among the old, so the averages keep rising as generations turn over.</p>
    ${sourceLine('Sources: BPS, 2024; SSGI (Ministry of Health), 2024; BPJS Kesehatan, 2024; World Bank, World Development Indicators, 2023.')}
  </section>`;
}
