---
title: "AwesomeCUA static data API"
url: https://awesomecua.com/api/
updated: 2026-11-13
type: documentation
lang: en
---

# AwesomeCUA static data API

> Versioned JSON and CSV files for agents and scripts: curated resources and papers, categories, recent changes and clearly flagged unreviewed candidates, regenerated with every catalog snapshot. No key or account is needed.

Base URL: https://awesomecua.com/api/v1/ · Version 1.0.0 · Snapshot 2026-11-13T16:20:10Z · HTML page: https://awesomecua.com/api/

- [API index](https://awesomecua.com/api/v1/index.json): endpoints with counts, byte sizes and SHA-256
- [JSON Schema](https://awesomecua.com/api/v1/schema.json): validate a file against `$defs/<name>`

## Endpoints

- [resources.json](https://awesomecua.com/api/v1/resources.json) ([CSV](https://awesomecua.com/api/v1/resources.csv)), 3,629 items: Curated resources other than papers: models, datasets, benchmarks, agents, frameworks, infrastructure, tools, products, publishers and learning resources.
- [papers.json](https://awesomecua.com/api/v1/papers.json) ([CSV](https://awesomecua.com/api/v1/papers.csv)), 1,718 items: Curated research papers and surveys, with authors, recorded publication dates, arXiv versions and citation files.
- [categories.json](https://awesomecua.com/api/v1/categories.json) ([CSV](https://awesomecua.com/api/v1/categories.csv)), 47 items: Resource kinds and research topics with curated counts and links to their pages, Markdown and data.
- [changes.json](https://awesomecua.com/api/v1/changes.json) ([CSV](https://awesomecua.com/api/v1/changes.csv)), 7,509 items: Catalog events in the 30 days before the snapshot: editorial reviews, new bibliography records and scope exclusions.
- [candidates.json](https://awesomecua.com/api/v1/candidates.json) ([CSV](https://awesomecua.com/api/v1/candidates.csv)), 1,406 items: UNREVIEWED rows, clearly flagged: bibliography records awaiting relevance review and discovered identifiers awaiting any review. Not part of the curated catalog.

## Identity

Each item keeps the catalog `id`, which never changes when a resource is renamed. `url` is the original source and `page_url` the catalog page. The page's Markdown version, complete record and (for papers) citation files sit at fixed paths below `page_url`, given once per file in `links`, such as `{page_url}record.json`.

## Versions

`version` is the API format version: a new major version means a breaking field change, minor versions add fields. `generated_at` is the newest recorded data time in the snapshot (UTC), so every file built from one source commit carries the same value. `catalog_sha256` fingerprints the source catalog.

## Review states

`resources.json`, `papers.json` and the counts in `categories.json` contain curated records only, each reviewed against a primary source. `candidates.json` is unreviewed and every row says so.

## Licenses

Code, data, weights and document licenses are separate declarations; `null` means no license is recorded. Catalog annotations and these files are MIT licensed; linked resources keep their own terms.

## Caching and CORS

The files are static and served by GitHub Pages with `Access-Control-Allow-Origin: *`, an `ETag` and `Last-Modified`, so browsers can fetch them across origins and clients can send conditional requests. Compare `generated_at` or `catalog_sha256` before re-ingesting.

## CSV

Each CSV has one row per JSON item and repeats `version` and `generated_at` in every row. Lists are joined with `; `, and whitespace inside a value collapses to single spaces.

## Bulk data

- [Catalog JSONL](https://awesomecua.com/downloads/catalog.jsonl): every active record with full evidence
- [SQLite database](https://awesomecua.com/downloads/catalog.sqlite)
- [Download manifest](https://awesomecua.com/downloads/manifest.json)
