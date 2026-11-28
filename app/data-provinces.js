// AngkaNusa province data: all 38 provinces, loaded only by the Regions
// page (and the Population page's largest-provinces table).
// Population: 2020 Population Census (BPS), millions; area km²; HDI 2024
// (BPS). The four Papuan provinces created in 2022 (Central, Highland,
// South and Southwest Papua) are shown with their 2020-census
// populations; Papua and West Papua are shown as the remainder after
// those splits, so the 38 rows sum to the census total of 270.20 million.
// `code` is the short label on the tile map; `tile` is the tile's
// [column, row] on a 16 × 7 grid, placed by geography — west at the
// left, north at the top — as tile maps conventionally draw it.

export const provinces = [
  { name: 'West Java', code: 'WJA', tile: [5, 6], pop: 48.27, area: 35377, hdi: 73.65 },
  { name: 'East Java', code: 'EJA', tile: [7, 6], pop: 40.67, area: 47803, hdi: 74.34 },
  { name: 'Central Java', code: 'CJA', tile: [6, 5], pop: 36.52, area: 32801, hdi: 73.29 },
  { name: 'North Sumatra', code: 'NSU', tile: [1, 2], pop: 14.80, area: 72882, hdi: 75.76 },
  { name: 'Banten', code: 'BAN', tile: [3, 6], pop: 11.90, area: 9161, hdi: 74.84 },
  { name: 'Jakarta', code: 'JKT', tile: [4, 6], pop: 10.56, area: 664, hdi: 82.46 },
  { name: 'South Sulawesi', code: 'SSL', tile: [10, 4], pop: 9.07, area: 46717, hdi: 73.98 },
  { name: 'Lampung', code: 'LAM', tile: [2, 5], pop: 9.00, area: 34624, hdi: 70.96 },
  { name: 'South Sumatra', code: 'SSU', tile: [2, 4], pop: 8.47, area: 91592, hdi: 71.25 },
  { name: 'Riau', code: 'RIA', tile: [2, 2], pop: 6.39, area: 87024, hdi: 74.00 },
  { name: 'West Sumatra', code: 'WSU', tile: [1, 3], pop: 5.53, area: 42013, hdi: 74.38 },
  { name: 'West Kalimantan', code: 'WKA', tile: [5, 2], pop: 5.41, area: 147307, hdi: 70.72 },
  { name: 'East Nusa Tenggara', code: 'ENT', tile: [10, 6], pop: 5.33, area: 47418, hdi: 66.31 },
  { name: 'West Nusa Tenggara', code: 'WNT', tile: [9, 6], pop: 5.32, area: 18572, hdi: 70.94 },
  { name: 'Aceh', code: 'ACE', tile: [0, 1], pop: 5.27, area: 57957, hdi: 74.29 },
  { name: 'Bali', code: 'BAL', tile: [8, 6], pop: 4.32, area: 5780, hdi: 76.98 },
  { name: 'Papua', code: 'PAP', tile: [15, 2], pop: 1.05, area: 66171, hdi: 61.39 },
  { name: 'South Kalimantan', code: 'SKA', tile: [7, 4], pop: 4.07, area: 38744, hdi: 72.74 },
  { name: 'East Kalimantan', code: 'EKA', tile: [8, 2], pop: 3.77, area: 127267, hdi: 78.20 },
  { name: 'Yogyakarta', code: 'YOG', tile: [6, 6], pop: 3.67, area: 3133, hdi: 80.47 },
  { name: 'Jambi', code: 'JAM', tile: [2, 3], pop: 3.55, area: 50058, hdi: 73.38 },
  { name: 'Central Sulawesi', code: 'CSL', tile: [10, 2], pop: 2.99, area: 61841, hdi: 71.56 },
  { name: 'Central Kalimantan', code: 'CKA', tile: [6, 3], pop: 2.67, area: 153564, hdi: 72.55 },
  { name: 'North Sulawesi', code: 'NSL', tile: [11, 1], pop: 2.62, area: 13852, hdi: 74.84 },
  { name: 'Southeast Sulawesi', code: 'SES', tile: [11, 3], pop: 2.62, area: 38068, hdi: 72.57 },
  { name: 'Riau Islands', code: 'RII', tile: [3, 1], pop: 2.06, area: 8201, hdi: 79.70 },
  { name: 'Bengkulu', code: 'BEN', tile: [1, 4], pop: 2.01, area: 19986, hdi: 72.98 },
  { name: 'Maluku', code: 'MAL', tile: [12, 2], pop: 1.85, area: 46914, hdi: 70.91 },
  { name: 'Bangka Belitung', code: 'BAB', tile: [4, 2], pop: 1.46, area: 16424, hdi: 72.91 },
  { name: 'West Sulawesi', code: 'WSL', tile: [9, 3], pop: 1.42, area: 16787, hdi: 68.72 },
  { name: 'Highland Papua', code: 'HPA', tile: [14, 3], pop: 1.39, area: 51413, hdi: 57.54 },
  { name: 'Central Papua', code: 'CPA', tile: [14, 2], pop: 1.34, area: 61766, hdi: 63.25 },
  { name: 'North Maluku', code: 'NMA', tile: [12, 1], pop: 1.28, area: 31983, hdi: 70.94 },
  { name: 'Gorontalo', code: 'GOR', tile: [10, 1], pop: 1.17, area: 11257, hdi: 70.32 },
  { name: 'West Papua', code: 'WPA', tile: [14, 0], pop: 0.53, area: 64337, hdi: 65.76 },
  { name: 'North Kalimantan', code: 'NKA', tile: [8, 0], pop: 0.70, area: 70841, hdi: 72.85 },
  { name: 'Southwest Papua', code: 'SWP', tile: [13, 1], pop: 0.60, area: 39167, hdi: 65.10 },
  { name: 'South Papua', code: 'SPA', tile: [15, 4], pop: 0.51, area: 117849, hdi: 60.73 },
];
