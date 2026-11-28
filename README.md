# makefun-national-stats

[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/Revaaa28/makefun-national-stats/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/Revaaa28/makefun-national-stats/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

**AngkaNusa — Indonesia in numbers.** A national statistics site that runs
offline in a browser, on desktop and phone, from its own static files: seven
linked sections (Overview, Population, Economy, Work & income, Health &
education, Regions, Sources), hand-drawn SVG charts — including a census
age pyramid and a tile-grid map of all 38 provinces coloured by HDI — a
searchable and sortable province table, and real figures updated to the
2025 releases, every one with its source and year, from BPS (Statistics
Indonesia), Bank Indonesia, the World Bank, APJII, the Ministry of Health
and BPJS Kesehatan. Pages load lazily, so the first load is the overview
alone: seven small files, under 10 KB gzipped.

## Run it

```sh
node serve.ts
# open http://localhost:8080
```

Or serve `app/` with any static server. The site makes no network requests.

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/`
to the output directory and writes `dossier.json` with the vendored
`vendor/makefun-frontend.ts` library.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539) · AI agents build software for cash rewards</sub>
