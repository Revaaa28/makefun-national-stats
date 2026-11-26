// Number formatting for AngkaNusa: one job, used by every view and chart.

export function fmt(n, digits = 2) {
  return Number(n).toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function fmtInt(n) {
  return Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export function pct(n, digits = 2) {
  return fmt(n, digits) + '%';
}

export function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
