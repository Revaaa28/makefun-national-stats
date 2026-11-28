// Economy page: growth, the sector donut, inflation and exports.

import { series, sectors } from './data.js';
import { lineChart } from './charts.js';
import { pageHead, sourceLine } from './views.js';
import { fmt } from './format.js';

const INK = '#0f3d3e';
const MUTED = '#5d6b63';

// Donut chart: slices {name, share}; returns SVG + legend HTML.
function donutChart(slices, { size = 220 } = {}) {
  const palette = ['#0f3d3e', '#1f7a6d', '#c77f1a', '#e8a33d', '#7fa88f', '#4a6b7c', '#a34d2d', '#8fa8bf', '#6b7f5e'];
  const r = size / 2 - 8, cx = size / 2, cy = size / 2;
  let a0 = -Math.PI / 2;
  const paths = slices.map((s, i) => {
    const a1 = a0 + (s.share / 100) * Math.PI * 2;
    const large = s.share > 50 ? 1 : 0;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const d = `M ${cx} ${cy} L ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z`;
    a0 = a1;
    return `<path d="${d}" fill="${palette[i % palette.length]}"/>`;
  }).join('');
  const hole = `<circle cx="${cx}" cy="${cy}" r="${(r * 0.58).toFixed(1)}" fill="#fff"/>`;
  const legend = slices.map((s, i) =>
    `<li><span class="sw" style="background:${palette[i % palette.length]}"></span>${s.name}<b>${fmt(s.share, 1)}%</b></li>`).join('');
  return `<div class="donut-wrap"><svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Donut chart of GDP by sector">${paths}${hole}
    <text x="${cx}" y="${cy - 2}" font-size="15" font-weight="700" fill="${INK}" text-anchor="middle">GDP</text>
    <text x="${cx}" y="${cy + 16}" font-size="11" fill="${MUTED}" text-anchor="middle">by sector, 2024</text></svg>
    <ul class="legend">${legend}</ul></div>`;
}

export default function viewEconomy() {
  const growth = lineChart(series.gdpGrowth, { unit: '%' });
  const infl = lineChart(series.inflation, { unit: '%' });
  const exp = lineChart(series.exports, { unit: '' });
  const donut = donutChart(sectors);
  return `${pageHead('Economy', 'GDP Rp23,821 trillion in 2025 (BPS), growing 5.11% — the largest economy in Southeast Asia and the world’s 16th largest by nominal GDP (World Bank). GDP per head reached Rp83.7 million, about US$5,083 (BPS, 2025).')}
  <section class="card">
    <div class="card-head"><h2>Growth, year by year</h2><span class="tag">Real GDP growth, % · BPS</span></div>
    ${growth}
    ${sourceLine('Annual real GDP growth. Source: BPS, National Accounts. Growth has averaged about 5% a year since 2015, outside the pandemic year (2020: −2.07%, the COVID-19 recession), and reached 5.11% in 2025.')}
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
      ${sourceLine('Annual consumer-price inflation, December each year. 2025’s 2.92% sat inside Bank Indonesia’s target band; the 2022 peak of 5.51% followed the fuel-subsidy adjustment. Source: BPS.')}
    </section>
    <section class="card">
      <div class="card-head"><h2>Exports</h2><span class="tag">US$ billion · BPS</span></div>
      ${exp}
      ${sourceLine('Exports of goods, US$ billion. 2024: US$264.70bn against imports of US$233.66bn — a US$31.04bn surplus. Source: BPS.')}
    </section>
  </div>
  <section class="card">
    <h2>Trade in 2024</h2>
    <p>Indonesia’s largest export earners in 2024 were coal, palm oil and its products, and iron and steel (BPS). China took about a quarter of exports; the United States and Japan followed. Imports were led by machinery, electrical equipment and fuels. The rupiah averaged about Rp16,400 per US dollar in 2025 (Bank Indonesia).</p>
    ${sourceLine('Sources: BPS, Foreign Trade Statistics 2024; Bank Indonesia, exchange-rate statistics 2025.')}
  </section>`;
}
