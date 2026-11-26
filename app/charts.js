// Hand-rolled SVG charts for AngkaNusa: line, bar and donut.
// No library, no network — the site draws every chart from its own data.

import { fmt } from './format.js';

const INK = '#0f3d3e';
const ACCENT = '#c77f1a';
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
export function barChart(rows, { width = 640, unit = '', decimals = 1, barColor = TEAL } = {}) {
  const rowH = 34, padT = 6, labelW = 168;
  const height = padT + rows.length * rowH + 8;
  const max = Math.max(...rows.map((r) => r.value));
  const bars = rows.map((r, i) => {
    const y = padT + i * rowH;
    const bw = ((width - labelW - 74) * r.value) / max;
    return `<text x="0" y="${y + 17}" font-size="12.5" fill="${INK}">${r.name}</text>
      <rect x="${labelW}" y="${y + 4}" width="${bw.toFixed(1)}" height="18" rx="3" fill="${barColor}"/>
      <text x="${labelW + bw + 8}" y="${y + 17}" font-size="12.5" font-weight="700" fill="${INK}">${fmt(r.value, decimals)}${unit}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Bar chart">${bars}</svg>`;
}

// Donut chart: slices {name, share}; returns SVG + legend HTML.
export function donutChart(slices, { size = 220 } = {}) {
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
  return `<div class="donut-wrap"><svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Donut chart of shares">${paths}${hole}
    <text x="${cx}" y="${cy - 2}" font-size="15" font-weight="700" fill="${INK}" text-anchor="middle">GDP</text>
    <text x="${cx}" y="${cy + 16}" font-size="11" fill="${MUTED}" text-anchor="middle">by sector, 2024</text></svg>
    <ul class="legend">${legend}</ul></div>`;
}
