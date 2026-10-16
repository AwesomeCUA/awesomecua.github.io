# AwesomeCUA

**The computer-use agent index.**

[Open the website](https://awesomecua.github.io/) · [中文界面](https://awesomecua.github.io/?lang=zh) · [Organization](https://github.com/AwesomeCUA)

Explore papers, models, datasets, benchmarks, agents, frameworks, tools, infrastructure, products, and publishers through a searchable, source-backed catalog.

This snapshot contains **1,947 resource records**: **231 curated** and **1,716 with bibliographic metadata verification only**. Counts are resources, not independent projects. Evidence snapshot: 2026-10-16.

## Explore and download

- [Search the catalog](https://awesomecua.github.io/#catalog)
- [Datasets](https://awesomecua.github.io/?kind=dataset#catalog) · [Models](https://awesomecua.github.io/?kind=model#catalog) · [Benchmarks](https://awesomecua.github.io/?kind=benchmark#catalog)
- [Research papers](https://awesomecua.github.io/?kind=paper#catalog) · [Products](https://awesomecua.github.io/?kind=product#catalog)
- [Full catalog — JSONL](https://awesomecua.github.io/downloads/catalog.jsonl)
- [Queryable database — SQLite](https://awesomecua.github.io/downloads/catalog.sqlite)
- [Coverage ledger](https://awesomecua.github.io/downloads/coverage.json)

## Website

This repository hosts the static website and its published metadata snapshot. Search, filter combinations, pagination, resource details, evidence, licenses, shareable URLs, and English/Chinese UI run in the browser. No credentials, paid service, or external analytics are needed.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. GitHub Pages serves the `main` branch root; `.nojekyll` preserves the static files.

## Quality and contributions

Curated means AI-assisted editorial review against first-party sources. Bibliographic verification does not establish relevance, research quality, or reproducibility. Code, data, and weights licenses are recorded separately. Missing values stay unknown. Global completeness is a goal, not a demonstrated claim.

[Suggest a resource or correction](https://github.com/AwesomeCUA/awesomecua.github.io/issues/new?template=resource.yml). Provide a primary source and describe any uncertain facts.

Original code and annotations use the [MIT license](LICENSE). Linked assets retain their own terms. The downloads contain catalog metadata, not upstream datasets or model weights.
