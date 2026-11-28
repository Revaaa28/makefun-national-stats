// AngkaNusa people data: the facts tables for the Population and
// Health & education pages, the census age pyramid, and the publisher
// list for the Sources page. Loaded only by the pages that use it.
// Every figure names its publisher and year.

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
  { label: 'Working-age population (15+)', value: '218.6 million', source: 'BPS, Aug 2025' },
  { label: 'Labour force participation', value: '70.9%', source: 'BPS, Aug 2025' },
  { label: 'Average monthly wage', value: 'Rp3.33 million', source: 'BPS, Aug 2025' },
];

// Health & education facts: one-line answers with source + year.
export const healthFacts = [
  { label: 'Life expectancy at birth', value: '73.9 years', source: 'BPS, 2024' },
  { label: 'Infant mortality', value: 'about 16 per 1,000 births', source: 'World Bank, 2023' },
  { label: 'Stunting, children under 5', value: '19.8%', source: 'SSGI, Ministry of Health, 2024' },
  { label: 'Health-insurance coverage (JKN)', value: '98.7% of the population', source: 'BPJS Kesehatan, 2024' },
  { label: 'Adult literacy (15+)', value: '96.6%', source: 'BPS, 2024' },
  { label: 'Mean years of schooling', value: '8.85 years', source: 'BPS, 2024' },
  { label: 'Expected years of schooling', value: '13.21 years', source: 'BPS, 2024' },
  { label: 'Internet users', value: '221.6 million (79.5% of people)', source: 'APJII, 2024' },
];

// Stunting prevalence among children under five, percent (SSGI — the
// Indonesian Nutritional Status Survey, Ministry of Health). No survey
// was published for 2020.
export const stunting = [
  { year: 2018, v: 30.8 }, { year: 2019, v: 27.7 }, { year: 2021, v: 24.4 },
  { year: 2022, v: 21.6 }, { year: 2023, v: 21.5 }, { year: 2024, v: 19.8 },
];

// Schooling in years (BPS, 2024): what a child starting school today can
// expect, the years schooling is compulsory, and what adults have actually
// completed on average.
export const schooling = [
  { name: 'Expected years of schooling', value: 13.2 },
  { name: 'Compulsory schooling', value: 12 },
  { name: 'Mean years, adults (25+)', value: 8.9 },
];

// Age pyramid: share of the population in each five-year age group, by
// sex, percent. Population Census 2020 (BPS); shares rounded, so they
// may not sum to exactly 100.
export const pyramid = [
  { age: '0–4', m: 4.4, f: 4.2 },
  { age: '5–9', m: 4.5, f: 4.3 },
  { age: '10–14', m: 4.4, f: 4.2 },
  { age: '15–19', m: 4.4, f: 4.2 },
  { age: '20–24', m: 4.4, f: 4.2 },
  { age: '25–29', m: 4.2, f: 4.1 },
  { age: '30–34', m: 4.0, f: 3.9 },
  { age: '35–39', m: 3.7, f: 3.7 },
  { age: '40–44', m: 3.4, f: 3.4 },
  { age: '45–49', m: 3.0, f: 3.1 },
  { age: '50–54', m: 2.6, f: 2.7 },
  { age: '55–59', m: 2.1, f: 2.3 },
  { age: '60–64', m: 1.6, f: 1.8 },
  { age: '65–69', m: 1.2, f: 1.4 },
  { age: '70–74', m: 0.8, f: 1.0 },
  { age: '75+', m: 0.7, f: 1.1 },
];

export const sources = [
  { abbr: 'BPS', name: 'Statistics Indonesia (Badan Pusat Statistik)', note: 'National statistical office. Census, surveys and price statistics quoted throughout this site.' },
  { abbr: 'BI', name: 'Bank Indonesia', note: 'Monetary and balance-of-payments statistics; exchange-rate reference and the inflation target band.' },
  { abbr: 'World Bank', name: 'World Bank, World Development Indicators', note: 'Infant mortality and international comparisons, 2023–2024 vintages.' },
  { abbr: 'APJII', name: 'Indonesian Internet Service Providers Association', note: 'Internet penetration survey, 2024.' },
  { abbr: 'SSGI', name: 'Indonesian Nutritional Status Survey (Ministry of Health)', note: 'Stunting prevalence among children under five, 2018–2024.' },
  { abbr: 'BPJS Kesehatan', name: 'BPJS Kesehatan (national health insurer)', note: 'JKN health-insurance membership and coverage, 2024.' },
];
