// AngkaNusa data: real Indonesia figures, each with its source and year.
// Sources: BPS (Statistics Indonesia), Bank Indonesia, World Bank, APJII.
// Figures are the published headline values; series are the official annual
// releases. Nothing here is invented: where a value is an estimate the note
// says so.

export const meta = {
  country: 'Indonesia',
  updated: '26 November 2026',
  currency: 'rupiah (Rp)',
};

export const kpis = [
  { id: 'population', label: 'Population', value: '281.6m', note: 'mid-year estimate, 2024', source: 'BPS' },
  { id: 'gdp', label: 'GDP', value: 'Rp22,139tn', note: 'current prices, 2024 · ≈ US$1.40tn', source: 'BPS' },
  { id: 'growth', label: 'Economic growth', value: '5.03%', note: 'real GDP growth, 2024', source: 'BPS' },
  { id: 'gdpCapita', label: 'GDP per capita', value: 'US$4,925', note: 'current US$, 2024', source: 'World Bank' },
  { id: 'inflation', label: 'Inflation', value: '1.57%', note: 'year-on-year CPI, Dec 2024', source: 'BPS' },
  { id: 'unemployment', label: 'Unemployment', value: '4.91%', note: 'open unemployment, Aug 2024', source: 'BPS' },
  { id: 'poverty', label: 'Poverty rate', value: '8.57%', note: 'share of population, Sep 2024', source: 'BPS' },
  { id: 'hdi', label: 'Human Development Index', value: '75.02', note: 'high human development, 2024', source: 'BPS' },
];

// Annual series: year + value. All BPS unless noted.
export const series = {
  gdpGrowth: [
    { year: 2015, v: 4.88 }, { year: 2016, v: 5.03 }, { year: 2017, v: 5.07 },
    { year: 2018, v: 5.17 }, { year: 2019, v: 5.02 }, { year: 2020, v: -2.07 },
    { year: 2021, v: 3.70 }, { year: 2022, v: 5.31 }, { year: 2023, v: 5.05 },
    { year: 2024, v: 5.03 },
  ],
  inflation: [
    { year: 2019, v: 2.72 }, { year: 2020, v: 1.68 }, { year: 2021, v: 1.87 },
    { year: 2022, v: 5.51 }, { year: 2023, v: 2.61 }, { year: 2024, v: 1.57 },
  ],
  unemployment: [
    { year: 2019, v: 5.28 }, { year: 2020, v: 7.07 }, { year: 2021, v: 6.49 },
    { year: 2022, v: 5.86 }, { year: 2023, v: 5.32 }, { year: 2024, v: 4.91 },
  ],
  poverty: [
    { year: 2019, v: 9.22 }, { year: 2020, v: 10.19 }, { year: 2021, v: 9.71 },
    { year: 2022, v: 9.57 }, { year: 2023, v: 9.36 }, { year: 2024, v: 8.57 },
  ],
  exports: [
    { year: 2019, v: 167.5 }, { year: 2020, v: 163.2 }, { year: 2021, v: 231.6 },
    { year: 2022, v: 291.9 }, { year: 2023, v: 258.8 }, { year: 2024, v: 264.7 },
  ],
  hdi: [
    { year: 2019, v: 71.92 }, { year: 2020, v: 71.94 }, { year: 2021, v: 72.29 },
    { year: 2022, v: 72.91 }, { year: 2023, v: 74.39 }, { year: 2024, v: 75.02 },
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

// Provinces: 2020 Population Census (BPS), millions; area km2; HDI 2024 (BPS).
// The four Papuan provinces created in 2022 (Central, Highland, South and
// Southwest Papua) are shown with their 2020-census populations; Papua and
// West Papua are shown as the remainder after those splits, so the 38 rows
// sum to the census total of 270.20 million.
export const provinces = [
  { name: 'West Java', pop: 48.27, area: 35377, hdi: 73.65 },
  { name: 'East Java', pop: 40.67, area: 47803, hdi: 74.34 },
  { name: 'Central Java', pop: 36.52, area: 32801, hdi: 73.29 },
  { name: 'North Sumatra', pop: 14.80, area: 72882, hdi: 75.76 },
  { name: 'Banten', pop: 11.90, area: 9161, hdi: 74.84 },
  { name: 'Jakarta', pop: 10.56, area: 664, hdi: 82.46 },
  { name: 'South Sulawesi', pop: 9.07, area: 46717, hdi: 73.98 },
  { name: 'Lampung', pop: 9.00, area: 34624, hdi: 70.96 },
  { name: 'South Sumatra', pop: 8.47, area: 91592, hdi: 71.25 },
  { name: 'Riau', pop: 6.39, area: 87024, hdi: 74.00 },
  { name: 'West Sumatra', pop: 5.53, area: 42013, hdi: 74.38 },
  { name: 'West Kalimantan', pop: 5.41, area: 147307, hdi: 70.72 },
  { name: 'East Nusa Tenggara', pop: 5.33, area: 47418, hdi: 66.31 },
  { name: 'West Nusa Tenggara', pop: 5.32, area: 18572, hdi: 70.94 },
  { name: 'Aceh', pop: 5.27, area: 57957, hdi: 74.29 },
  { name: 'Bali', pop: 4.32, area: 5780, hdi: 76.98 },
  { name: 'Papua', pop: 1.05, area: 66171, hdi: 61.39 },
  { name: 'South Kalimantan', pop: 4.07, area: 38744, hdi: 72.74 },
  { name: 'East Kalimantan', pop: 3.77, area: 127267, hdi: 78.20 },
  { name: 'Yogyakarta', pop: 3.67, area: 3133, hdi: 80.47 },
  { name: 'Jambi', pop: 3.55, area: 50058, hdi: 73.38 },
  { name: 'Central Sulawesi', pop: 2.99, area: 61841, hdi: 71.56 },
  { name: 'Central Kalimantan', pop: 2.67, area: 153564, hdi: 72.55 },
  { name: 'North Sulawesi', pop: 2.62, area: 13852, hdi: 74.84 },
  { name: 'Southeast Sulawesi', pop: 2.62, area: 38068, hdi: 72.57 },
  { name: 'Riau Islands', pop: 2.06, area: 8201, hdi: 79.70 },
  { name: 'Bengkulu', pop: 2.01, area: 19986, hdi: 72.98 },
  { name: 'Maluku', pop: 1.85, area: 46914, hdi: 70.91 },
  { name: 'Bangka Belitung', pop: 1.46, area: 16424, hdi: 72.91 },
  { name: 'West Sulawesi', pop: 1.42, area: 16787, hdi: 68.72 },
  { name: 'Highland Papua', pop: 1.39, area: 51413, hdi: 57.54 },
  { name: 'Central Papua', pop: 1.34, area: 61766, hdi: 63.25 },
  { name: 'North Maluku', pop: 1.28, area: 31983, hdi: 70.94 },
  { name: 'Gorontalo', pop: 1.17, area: 11257, hdi: 70.32 },
  { name: 'West Papua', pop: 0.53, area: 64337, hdi: 65.76 },
  { name: 'North Kalimantan', pop: 0.70, area: 70841, hdi: 72.85 },
  { name: 'Southwest Papua', pop: 0.60, area: 39167, hdi: 65.10 },
  { name: 'South Papua', pop: 0.51, area: 117849, hdi: 60.73 },
];

// Latest releases: the most recent official releases behind this site's figures.
export const releases = [
  { date: 'Feb 2025', title: 'Economic Growth 2024', detail: 'GDP grew 5.03% in 2024; GDP Rp22,139 trillion at current prices (BPS).' },
  { date: 'Jan 2025', title: 'Poverty Profile, September 2024', detail: 'Poverty rate 8.57%; 24.06 million people below the line (BPS).' },
  { date: 'Jan 2025', title: 'Exports & Imports 2024', detail: 'Exports US$264.70bn, imports US$233.66bn; surplus US$31.04bn (BPS).' },
  { date: 'Jan 2025', title: 'Consumer Price Index, December 2024', detail: 'Annual inflation 1.57% year-on-year, the lowest since 2021 (BPS).' },
  { date: 'Nov 2024', title: 'Labour Force Situation, August 2024', detail: 'Open unemployment 4.91%; labour force 149.38 million (BPS).' },
  { date: '2025', title: 'Human Development Index 2024', detail: 'HDI 75.02, up 0.63 points on 2023; Jakarta highest at 82.46 (BPS).' },
];

// People facts: one-line answers with source + year.
export const peopleFacts = [
  { label: 'Life expectancy at birth', value: '73.9 years', source: 'BPS, 2024' },
  { label: 'Median age', value: '30.1 years', source: 'BPS, 2024' },
  { label: 'Urban population', value: '58.6%', source: 'BPS / World Bank, 2024' },
  { label: 'Adult literacy (15+)', value: '96.6%', source: 'BPS, 2024' },
  { label: 'Internet users', value: '221.6 million', source: 'APJII, 2024' },
  { label: 'Fertility rate', value: '2.14 children per woman', source: 'BPS, 2024' },
  { label: 'Land area', value: '1,904,569 km²', source: 'BPS' },
  { label: 'Islands', value: '17,508', source: 'BPS' },
  { label: 'Provinces', value: '38', source: 'Ministry of Home Affairs, 2022' },
  { label: 'Working-age population (15+)', value: '211.6 million', source: 'BPS, Aug 2024' },
  { label: 'Labour force participation', value: '70.6%', source: 'BPS, Aug 2024' },
  { label: 'Average monthly wage', value: 'Rp3.27 million', source: 'BPS, Aug 2024' },
];

export const sources = [
  { abbr: 'BPS', name: 'Statistics Indonesia (Badan Pusat Statistik)', note: 'National statistical office. Census, surveys and price statistics quoted throughout this site.' },
  { abbr: 'BI', name: 'Bank Indonesia', note: 'Monetary and balance-of-payments statistics; exchange-rate reference.' },
  { abbr: 'World Bank', name: 'World Bank, World Development Indicators', note: 'GDP per capita and international comparisons, 2024 vintage.' },
  { abbr: 'APJII', name: 'Indonesian Internet Service Providers Association', note: 'Internet penetration survey, 2024.' },
];
