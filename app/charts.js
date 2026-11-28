// Hand-rolled SVG charts for AngkaNusa: line, bar and sparkline.
// No library, no network — the site draws every chart from its own data.
// (The donut and the age pyramid live with the pages that use them.)

import { fmt } from './format.js';

const INK = '#0f3d3e';
const TEAL = '#1f7a6d';
const GRID = '#d8ddd8';
const MUTED = '#5d6b63';

function niceTicks(min, max, count = 4) {
  const span = max - min || 1;
  const step = span / count;
  const mag = 10 ** Math.floor(Math.log10(step));
  const norm = step / mag;
  const nice = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
  const s = nice * mag;
  const lo = Math.floor(min / s) * s;
  const out = [];
  for (let v = lo; v <= max + 1e-9; v += s) out.push(Math.round(v * 100) / 100);
  return out;
}

// Line chart: points {year, v}; returns an SVG string.
export function lineChart(points, { width = 640, height = 260, unit = '', decimals = 2 } = {}) {
  const padL = 52, padR = 14, padT = 14, padB = 30;
  const w = width - padL - padR, h = height - padT - padB;
  const vals = points.map((p) => p.v);
  let min = Math.min(...vals), max = Math.max(...vals);
  if (min > 0) min = Math.min(0, min);
  const pad = (max - min) * 0.08 || 1;
  min -= pad; max += pad;
  const x = (i) => padL + (i / (points.length - 1)) * w;
  const y = (v) => padT + h - ((v - min) / (max - min)) * h;
  const ticks = niceTicks(min, max);
  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(points.length - 1).toFixed(1)},${y(min).toFixed(1)} L${x(0).toFixed(1)},${y(min).toFixed(1)} Z`;
  const dots = points.map((p, i) =>
    `<circle cx="${x(i).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="3.6" fill="#fff" stroke="${TEAL}" stroke-width="2"/>`).join('');
  const labels = points.map((p, i) =>
    `<text x="${x(i).toFixed(1)}" y="${height - 8}" font-size="11" fill="${MUTED}" text-anchor="middle">${p.year}</text>`).join('');
  const grid = ticks.map((t) =>
    `<line x1="${padL}" x2="${width - padR}" y1="${y(t).toFixed(1)}" y2="${y(t).toFixed(1)}" stroke="${GRID}" stroke-width="1"/>
     <text x="${padL - 8}" y="${(y(t) + 4).toFixed(1)}" font-size="11" fill="${MUTED}" text-anchor="end">${fmt(t, decimals)}${unit}</text>`).join('');
  const last = points[points.length - 1];
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Line chart, latest value ${fmt(last.v, decimals)}${unit} in ${last.year}">
    ${grid}
    <path d="${area}" fill="${TEAL}" opacity="0.10"/>
    <path d="${line}" fill="none" stroke="${TEAL}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
    <text x="${x(points.length - 1).toFixed(1)}" y="${(y(last.v) - 10).toFixed(1)}" font-size="12" font-weight="700" fill="${INK}" text-anchor="end">${fmt(last.v, decimals)}${unit}</text>
    ${labels}
  </svg>`;
}

// Horizontal bar chart: rows {name, value}; returns an SVG string.
export function barChart(rows, { width = 640, unit = '', decimals = 1, barColor = TEAL, rowH = 34, labelW = 168 } = {}) {
  const padT = 6;
  const height = padT + rows.length * rowH + 8;
  const max = Math.max(...rows.map((r) => r.value));
  const bars = rows.map((r, i) => {
    const y = padT + i * rowH;
    const bw = ((width - labelW - 74) * r.value) / max;
    const midY = y + rowH / 2 + 4;
    return `<text x="0" y="${midY}" font-size="12.5" fill="${INK}">${r.name}</text>
      <rect x="${labelW}" y="${y + (rowH - 18) / 2}" width="${bw.toFixed(1)}" height="18" rx="3" fill="${barColor}"/>
      <text x="${labelW + bw + 8}" y="${midY}" font-size="12.5" font-weight="700" fill="${INK}">${fmt(r.value, decimals)}${unit}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Bar chart">${bars}</svg>`;
}

// Sparkline: a bare trend line for a KPI card — values only, no axes.
// The line is normalised to the series' own range; the last point is
// dotted so the eye lands on the latest value.
export function sparkline(values, { width = 220, height = 26 } = {}) {
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const padY = 3;
  const x = (i) => (i / (values.length - 1)) * (width - 6) + 3;
  const y = (v) => padY + (1 - (v - min) / span) * (height - padY * 2);
  const line = values.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(values.length - 1).toFixed(1)},${height} L${x(0).toFixed(1)},${height} Z`;
  const lx = x(values.length - 1), ly = y(values[values.length - 1]);
  return `<svg class="spark" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
    <path d="${area}" fill="${TEAL}" opacity="0.10"/>
    <path d="${line}" fill="none" stroke="${TEAL}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
    <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="3" fill="${TEAL}"/>
  </svg>`;
}
