// AngkaNusa core data: the headline figures and annual series behind the
// overview, economy and labour pages. Real Indonesia figures, each with its
// source and period. Sources: BPS (Statistics Indonesia), Bank Indonesia,
// World Bank. Figures are the published headline values; where a value is
// an estimate the note says so. Province and people data live in
// data-provinces.js and data-people.js, loaded only by the pages that
// need them.

export const meta = {
  country: 'Indonesia',
  updated: '28 November 2026',
  currency: 'rupiah (Rp)',
};

// Headline indicators. `spark` is the recent annual series behind the card's
// sparkline (same publisher as the headline figure); `delta` says where the
// figure stood one period earlier.
export const kpis = [
  { id: 'population', label: 'Population', value: '284.4m', note: 'mid-year estimate, 2025', source: 'BPS',
    spark: [255.5, 258.7, 261.9, 265.0, 268.1, 270.2, 272.7, 275.8, 278.7, 281.6, 284.4], delta: 'from 281.6m in 2024' },
  { id: 'gdp', label: 'GDP', value: 'Rp23,821tn', note: 'current prices, 2025', source: 'BPS',
    spark: [11526, 12402, 13589, 14838, 15833, 15443, 16977, 19588, 20892, 22139, 23821], delta: 'from Rp22,139tn in 2024' },
  { id: 'growth', label: 'Economic growth', value: '5.11%', note: 'real GDP growth, 2025', source: 'BPS',
    spark: [4.88, 5.03, 5.07, 5.17, 5.02, -2.07, 3.70, 5.31, 5.05, 5.03, 5.11], delta: 'from 5.03% in 2024' },
  { id: 'gdpCapita', label: 'GDP per capita', value: 'Rp83.7m', note: 'per head, 2025', source: 'BPS',
    spark: [59.1, 57.2, 62.3, 71.0, 75.0, 78.6, 83.7], delta: 'from Rp78.6m in 2024' },
  { id: 'inflation', label: 'Inflation', value: '2.92%', note: 'year-on-year CPI, Dec 2025', source: 'BPS',
    spark: [2.72, 1.68, 1.87, 5.51, 2.61, 1.57, 2.92], delta: 'from 1.57% in Dec 2024' },
  { id: 'unemployment', label: 'Unemployment', value: '4.85%', note: 'open rate, Aug 2025', source: 'BPS',
    spark: [5.28, 7.07, 6.49, 5.86, 5.32, 4.91, 4.85], delta: 'from 4.91% in Aug 2024' },
  { id: 'poverty', label: 'Poverty rate', value: '8.47%', note: 'share of people, Mar 2025', source: 'BPS',
    spark: [9.22, 10.19, 9.71, 9.57, 9.36, 8.57, 8.47], delta: 'from 8.57% in Sep 2024' },
  { id: 'hdi', label: 'Human Development Index', value: '75.90', note: 'high development, 2025', source: 'BPS',
    spark: [71.92, 71.94, 72.29, 72.91, 74.39, 75.02, 75.90], delta: 'from 75.02 in 2024' },
];

// Annual series: year + value. All BPS unless noted.
export const series = {
  gdpGrowth: [
    { year: 2015, v: 4.88 }, { year: 2016, v: 5.03 }, { year: 2017, v: 5.07 },
    { year: 2018, v: 5.17 }, { year: 2019, v: 5.02 }, { year: 2020, v: -2.07 },
    { year: 2021, v: 3.70 }, { year: 2022, v: 5.31 }, { year: 2023, v: 5.05 },
    { year: 2024, v: 5.03 }, { year: 2025, v: 5.11 },
  ],
  inflation: [
    { year: 2019, v: 2.72 }, { year: 2020, v: 1.68 }, { year: 2021, v: 1.87 },
    { year: 2022, v: 5.51 }, { year: 2023, v: 2.61 }, { year: 2024, v: 1.57 },
    { year: 2025, v: 2.92 },
  ],
  unemployment: [
    { year: 2019, v: 5.28 }, { year: 2020, v: 7.07 }, { year: 2021, v: 6.49 },
    { year: 2022, v: 5.86 }, { year: 2023, v: 5.32 }, { year: 2024, v: 4.91 },
    { year: 2025, v: 4.85 },
  ],
  poverty: [
    { year: 2019, v: 9.22 }, { year: 2020, v: 10.19 }, { year: 2021, v: 9.71 },
    { year: 2022, v: 9.57 }, { year: 2023, v: 9.36 }, { year: 2024, v: 8.57 },
    { year: 2025, v: 8.47 },
  ],
  exports: [
    { year: 2019, v: 167.5 }, { year: 2020, v: 163.2 }, { year: 2021, v: 231.6 },
    { year: 2022, v: 291.9 }, { year: 2023, v: 258.8 }, { year: 2024, v: 264.7 },
  ],
  hdi: [
    { year: 2019, v: 71.92 }, { year: 2020, v: 71.94 }, { year: 2021, v: 72.29 },
    { year: 2022, v: 72.91 }, { year: 2023, v: 74.39 }, { year: 2024, v: 75.02 },
    { year: 2025, v: 75.90 },
  ],
  gini: [
    { year: 2019, v: 0.380 }, { year: 2020, v: 0.381 }, { year: 2021, v: 0.381 },
    { year: 2022, v: 0.379 }, { year: 2023, v: 0.379 }, { year: 2024, v: 0.379 },
  ],
};

// Population by major island group, BPS mid-year estimate 2024 (millions).
export const islands = [
  { name: 'Java', pop: 157.3, share: 55.9 },
  { name: 'Sumatra', pop: 61.0, share: 21.7 },
  { name: 'Sulawesi', pop: 20.5, share: 7.3 },
  { name: 'Kalimantan', pop: 17.5, share: 6.2 },
  { name: 'Bali & Nusa Tenggara', pop: 15.8, share: 5.6 },
  { name: 'Maluku & Papua', pop: 8.9, share: 3.2 },
];

// GDP by sector, share of GDP at current prices, 2024 (BPS).
export const sectors = [
  { name: 'Manufacturing', share: 19.0 },
  { name: 'Wholesale & retail trade', share: 12.9 },
  { name: 'Agriculture, forestry & fishing', share: 12.5 },
  { name: 'Construction', share: 10.2 },
  { name: 'Mining & quarrying', share: 8.4 },
  { name: 'Information & communication', share: 4.4 },
  { name: 'Transport & storage', share: 3.9 },
  { name: 'Finance & insurance', share: 4.1 },
  { name: 'Other services', share: 24.6 },
];

// The overview's latest-releases strip: the newest headline readings.
export const stripItems = [
  { label: 'Growth 2025', value: '5.11%' },
  { label: 'Inflation, Dec 2025', value: '2.92%' },
  { label: 'Unemployment, Aug 2025', value: '4.85%' },
  { label: 'Poverty, Mar 2025', value: '8.47%' },
  { label: 'HDI 2025', value: '75.90' },
];

// Latest releases: the most recent official releases behind this site's figures.
export const releases = [
  { date: 'Feb 2026', title: 'Economic Growth 2025', detail: 'GDP grew 5.11% in 2025, to Rp23,821 trillion at current prices; GDP per head reached Rp83.7 million (BPS).' },
  { date: 'Jan 2026', title: 'Consumer Price Index, December 2025', detail: 'Inflation closed 2025 at 2.92% year-on-year, inside Bank Indonesia’s 2.5% ± 1% target band (BPS).' },
  { date: 'Dec 2025', title: 'Human Development Index 2025', detail: 'HDI rose to 75.90, up 0.88 points on 2024; Jakarta still highest, Highland Papua lowest (BPS).' },
  { date: 'Nov 2025', title: 'Labour Force Situation, August 2025', detail: 'Open unemployment 4.85%; labour force 154.9 million; average wage Rp3.33 million a month (BPS).' },
  { date: 'Jul 2025', title: 'Poverty Profile, March 2025', detail: 'Poverty rate 8.47%; 23.85 million people below the line — the lowest reading on record (BPS).' },
  { date: 'Jul 2025', title: 'Population, mid-2025', detail: 'Indonesia’s population reached 284.4 million at mid-2025, up 2.8 million in a year (BPS).' },
];
