---
title: "Use AwesomeCUA with agents and RAG"
url: https://awesomecua.com/agents/
updated: 2026-11-11
type: page
lang: en
---

# Use the complete catalog with your agent

Clone once, search locally, and build retrieval workflows from source-backed records. The full catalog is available without an account or API key.

[AGENTS.md](https://awesomecua.com/AGENTS.md) · [中文指南](https://awesomecua.com/zh/agents/)

## 1. Clone the data

```
git clone https://github.com/reacher-z/Awesome-CUA.git
cd Awesome-CUA
git rev-parse HEAD
```

Read data/catalog.jsonl directly, or use the commands below with Python 3.11+. Search and export use the standard library; no model service or dependency installation is needed. Keep the Git commit as your source snapshot identifier.

[Versioned data snapshots](https://github.com/reacher-z/Awesome-CUA/releases) provide a complete data ZIP for repeatable ingestion. Verify SHA256SUMS and retain release-manifest.json with the source commit and catalog fingerprint. The bundle includes catalog, RAG, citations and topic subsets; repository CLI commands below require the source clone.

## 2. Ask a focused question

```
python3 scripts/catalog.py search "grounding" --kind model --status curated --json
python3 scripts/catalog.py search --kind dataset --environment android --status curated --limit 0 --json
python3 scripts/catalog.py search --kind paper --status curated --topic reinforcement-learning --limit 0 --json
```

Search is literal and uses AND across terms. Use aliases when a query is too narrow; --limit 0 returns all matches. Review status and platform/topic tags describe what the catalog has checked.

### Retrieve a record by ID

```
python3 scripts/catalog.py get arxiv:2404.07972 --json
python3 scripts/catalog.py get arxiv:2404.07972 --related --json
```

For a field overview, open the [topic directory](https://awesomecua.com/topics/). Its [JSON manifest](https://awesomecua.com/downloads/topics.json) provides exact reviewed member IDs, complete-record subsets, citations and file fingerprints. Pass a downloaded records.jsonl subset to export_rag.py --input to build a focused retrieval corpus.

Exact lookup returns the original record. Related lookup adds reviewed links in both directions, with their source evidence. Unknown and scope-excluded IDs return distinct nonzero exit codes.

### Resolve a recorded former repository name

```
python3 scripts/catalog.py get github:mnotgod96/appagent --json
python3 scripts/catalog.py search "https://github.com/mnotgod96/AppAgent" --json
```

These commands return the canonical AppAgent record. Use its returned id for joins and retrieval-store updates. The [repository identity observations](https://awesomecua.com/downloads/repository-aliases.json) bind former and current names to the same numeric GitHub repository ID using paired official API receipts. They are dated identity evidence. Aliases and their evidence are included in catalog and RAG records.

Each resource page has a record.json file for direct HTTP retrieval. Scope-excluded records return an explicit excluded decision rather than an active record. [Example JSON](https://awesomecua.com/resources/arxiv-2404-07972/record.json).

## 3. Connect a RAG pipeline

```
python3 scripts/export_rag.py --output dist/rag-documents.jsonl
python3 scripts/export_rag.py --include-metadata --output dist/rag-all-records.jsonl
python3 scripts/catalog.py build
```

Ingest the text field and retain the metadata object. Use id as the stable upsert key. Start with the reviewed export; the full export also includes bibliography entries awaiting relevance review. SQLite is generated at dist/catalog.sqlite.

| Field | Purpose |
| --- | --- |
| `id`<br>`metadata.resource_id` | Stable resource identity |
| `text` | Title, original annotation, context, and source links |
| `metadata.review_status`<br>`metadata.scope` | Filter and explain the evidence boundary |
| `metadata.citation_url`<br>`metadata.source_url` | Catalog permalink and primary source, including the recorded arXiv version when known |
| `metadata.evidence`<br>`metadata.last_verified_at` | Source receipts, fingerprints, and verification dates |
| `metadata.licenses`<br>`metadata.relations` | Separate license scopes and reviewed resource relationships |
| `metadata.record_sha256` | Detect changes to the canonical source-record JSON object |

Reading catalog.jsonl or record.json directly? Those records use url and details.arxiv_snapshot; the RAG exporter adds the metadata citation URLs and record fingerprint shown above. [Catalog ↔ RAG field mapping](https://github.com/reacher-z/Awesome-CUA/blob/main/docs/query-guide.md#catalog-and-rag-field-mapping).

## 4. Export paper citations

```
python3 scripts/export_citations.py --format bibtex --output dist/citations.bib
python3 scripts/export_citations.py --format csl-json --output dist/citations.csl.json
python3 scripts/export_citations.py --id arxiv:2404.07972 --format bibtex
```

The default exports reviewed papers and surveys. Add --include-metadata for all active bibliography entries. Unknown venues and identifiers are omitted; original publication dates and version-update dates remain separate. Individual paper pages provide their own BibTeX and CSL JSON downloads.

### Select the publication edition

```
python3 scripts/export_citations.py --edition publication --format bibtex --output dist/publication-citations.bib
```

This selects reviewed records with publication metadata. The publication uses its own title, authors, venue and date; the default arXiv citation retains its original preprint version. Publisher-only records use their publication in either mode. Year-only and month-only dates stay partial.

[Publication BibTeX](https://awesomecua.com/downloads/publication-citations.bib) · [Publication CSL JSON](https://awesomecua.com/downloads/publication-citations.csl.json) · [Publication observations](https://awesomecua.com/downloads/publications.jsonl)

## Ready-to-use downloads

[Open the data hub](https://awesomecua.com/data/) · [Complete download manifest](https://awesomecua.com/downloads/manifest.json)

The manifest lists each main export with its count, unit, scope, byte size and SHA-256. Verify the file fingerprint before ingestion and keep catalog_sha256 with your retrieval snapshot.

- [Complete catalog](https://awesomecua.com/downloads/catalog.jsonl) — Every active resource and its full source record.
- [SQLite database](https://awesomecua.com/downloads/catalog.sqlite) — Resources, facets, relations, and full-text search.
- [Reviewed retrieval documents](https://awesomecua.com/downloads/rag-documents.jsonl) — One document per reviewed resource, including citations and provenance.
- [All retrieval documents](https://awesomecua.com/downloads/rag-all-records.jsonl) — Includes metadata-only entries with their review state intact.
- [Reviewed paper citations · BibTeX](https://awesomecua.com/downloads/citations.bib) — Recorded authors, dates, and paper versions.
- [Reviewed paper citations · CSL JSON](https://awesomecua.com/downloads/citations.csl.json) — Structured bibliography for reference managers.
- [RAG export manifest](https://awesomecua.com/downloads/rag-manifest.json) — Counts, SHA-256 fingerprints, and the catalog snapshot fingerprint.

## Keep answers traceable

Curated means reviewed against a primary source. Metadata verified means bibliographic identity was checked. Cite the primary resource and catalog permalink, retain dates and recorded versions, and preserve unknown values. Papers, code, datasets, and checkpoints can be related records.

Metadata-only entries may await their first review or remain on hold after source reading. Recorded hold reasons appear in the [coverage ledger](https://awesomecua.com/downloads/coverage.json). Held records remain outside the reviewed retrieval export.

The exports contain catalog metadata and original annotations. Paper full text, model weights, and training examples remain with their publishers. Code, data, weights, and document licenses are separate.

## Update and reconcile

Pull a newer Git commit or fetch a new manifest. Compare record_sha256 for changes and reconcile missing IDs against the complete catalog and scope-exclusion ledger. An absent ID may represent a reviewed scope decision; do not leave stale retrieval documents silently active. Discovery is scheduled every eight hours, with actual outcomes and gaps recorded on the updates page.

[Scan activity](https://awesomecua.com/updates/) · [Coverage ledger](https://awesomecua.com/coverage/) · [Editorial policy](https://awesomecua.com/about/)
