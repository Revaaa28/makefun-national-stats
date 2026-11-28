// Work & income page: unemployment, poverty, human development and
// inequality — four charts, each with its source line.

import { series } from './data.js';
import { lineChart } from './charts.js';
import { pageHead, sourceLine } from './views.js';

export default function viewLabour() {
  const unemp = lineChart(series.unemployment, { unit: '%' });
  const pov = lineChart(series.poverty, { unit: '%' });
  const hdi = lineChart(series.hdi, { unit: '', decimals: 2 });
  const gini = lineChart(series.gini, { unit: '', decimals: 3 });
  return `${pageHead('Work & income', '154.9 million people in the labour force (BPS, August 2025); unemployment 4.85% — and poverty 8.47%, the lowest reading on record.')}
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Unemployment</h2><span class="tag">Open rate, % · BPS</span></div>
      ${unemp}
      ${sourceLine('Open unemployment rate, August each year. Source: BPS, National Labour Force Survey (Sakernas). The 2025 rate, 4.85%, is the lowest in the series shown.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Poverty</h2><span class="tag">Share of population, % · BPS</span></div>
      ${pov}
      ${sourceLine('Poverty rate, September each year to 2024; the latest point is March 2025 (8.47%; 23.85 million people below the line). Source: BPS, National Socio-Economic Survey (Susenas).')}
    </section>
  </div>
  <div class="two-col">
    <section class="card">
      <div class="card-head"><h2>Human development</h2><span class="tag">HDI · BPS</span></div>
      ${hdi}
      ${sourceLine('Human Development Index. 2025: 75.90 — “high human development”, up every year since 2019. Source: BPS.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Inequality</h2><span class="tag">Gini ratio · BPS</span></div>
      ${gini}
      ${sourceLine('Gini ratio, September each year. 0.379 in September 2024 — flat for four years. Source: BPS, Susenas.')}
    </section>
  </div>
  <section class="card">
    <h2>What work pays</h2>
    <p>The average monthly wage was Rp3.33 million in August 2025 (BPS, Sakernas). Formal workers — about 40% of the employed — earn roughly twice the informal average. The statutory provincial minimum wage in 2025 ranged from Rp2.17 million in Central Java to Rp5.40 million in Jakarta (provincial governments, 2025).</p>
    ${sourceLine('Sources: BPS, Sakernas August 2025; provincial minimum-wage decrees, 2025.')}
  </section>`;
}
