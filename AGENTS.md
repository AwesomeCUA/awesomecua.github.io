# Awesome CUA for agents

Awesome CUA (Awesome Computer-Use Agents, https://awesomecua.com/) is a source-backed catalog of computer-use, GUI, browser and mobile agents: 5,347 curated resources (1,718 papers and surveys, 3,629 models, datasets, benchmarks, agents, frameworks, tools and products), each reviewed against a primary source. 1,188 metadata-only bibliography records are labeled separately. Snapshot 2026-11-10T08:20:17Z.

## Read one item

Every page has a Markdown twin at `index.md` and every resource its complete record at `record.json`. The resource id is the last path segment of its catalog URL.

```sh
curl -sL https://awesomecua.com/resources/<id>/index.md
curl -sL https://awesomecua.com/resources/<id>/record.json
curl -sL https://awesomecua.com/resources/arxiv-2404-07972/index.md
```

Papers carry their arXiv id, so the same item reads through Hugging Face:

```sh
hf papers read 2404.07972
```

Other kinds follow the same pattern: `https://awesomecua.com/categories/<kind>/index.md` where kind is one of model, dataset, benchmark, agent, framework, infrastructure, tool, product, company, learning, survey, paper; `https://awesomecua.com/topics/<topic>/index.md`; `https://awesomecua.com/papers/index.md` (research library, 60 per page).

## Search

```sh
https://awesomecua.com/explore/?q=<query>              # interactive search over every record
curl -sL https://awesomecua.com/api/v1/resources.json  # filter locally, for example with jq
git clone https://github.com/reacher-z/Awesome-CUA.git && python3 scripts/catalog.py search "grounding" --kind model --status curated --json
```

## JSON API

```sh
curl -sL https://awesomecua.com/api/v1/index.json       # endpoint list with counts, bytes and SHA-256
curl -sL https://awesomecua.com/api/v1/resources.json   # curated non-paper resources
curl -sL https://awesomecua.com/api/v1/papers.json      # curated papers and surveys
curl -sL https://awesomecua.com/api/v1/categories.json
curl -sL https://awesomecua.com/api/v1/changes.json     # recent changes
curl -sL https://awesomecua.com/feed.json               # 100 newest reviewed resources (Atom: https://awesomecua.com/feed.xml)
```

## Whole-site files

```sh
curl -sL https://awesomecua.com/llms.txt                # index of Markdown pages, llmstxt.org format
curl -sL https://awesomecua.com/llms-full.txt           # every curated record once, compactly
curl -sL https://awesomecua.com/sitemap.xml
curl -sL https://awesomecua.com/downloads/catalog.jsonl # complete catalog, one JSON object per line
curl -sL https://awesomecua.com/downloads/manifest.json # every download with bytes, SHA-256, counts
curl -sL https://awesomecua.com/downloads/rag-documents.jsonl
curl -sL https://awesomecua.com/downloads/citations.bib
git clone https://github.com/reacher-z/Awesome-CUA.git
```

Hugging Face mirror: `load_dataset("TIGER-Lab/AwesomeCUA", "resources")`.

## Cite

```bibtex
@misc{awesomecua2026,
  title        = {Awesome Computer-Use Agents: a source-backed catalog of computer-use, GUI, browser, and mobile agents},
  author       = {{Awesome CUA}},
  year         = {2026},
  howpublished = {\url{https://awesomecua.com/}},
  note         = {Snapshot 2026-11-10T08:20:17Z; code at https://github.com/reacher-z/Awesome-CUA}
}
```

## FAQ

### What is Awesome CUA?

Awesome CUA is a source-backed catalog of computer-use, GUI, browser and mobile agents: 5,347 reviewed papers, models, datasets, benchmarks, agents, frameworks, tools and products, each linked to its primary source.

### How many resources does it list?

5,347 reviewed records: 1,718 papers and surveys and 3,629 other resources, including 309 benchmarks, 278 datasets, 475 models, 479 agents, 672 frameworks and 1,162 tools. 1,188 metadata-only bibliography records and 187 scan finds are listed separately.

### How is each record reviewed?

A reviewer reads the primary source (paper, repository, model card or project page) and records the evidence, the review date, and code, data, weights and document licenses separately. Unknown facts stay empty. See the [editorial policy](https://awesomecua.com/about/).

### How can I read the catalog from code?

Clone the GitHub repository, download [catalog.jsonl](https://awesomecua.com/downloads/catalog.jsonl), or call the [JSON API under /api/v1/](https://awesomecua.com/api/). Every page has a Markdown version at index.md, and [llms.txt](https://awesomecua.com/llms.txt) lists them all.

### How often is it updated?

Discovery scans run every 8 hours; the latest was 2026-11-11. See [catalog updates](https://awesomecua.com/updates/).

### How do I cite Awesome CUA?

Use CITATION.cff in the GitHub repository, or copy the BibTeX in [AGENTS.md](https://awesomecua.com/AGENTS.md).

### How do I suggest a resource or report a correction?

Open a [GitHub issue form](https://github.com/reacher-z/Awesome-CUA/issues/new/choose). A reviewer reads the primary source first.

## Updates

Discovery scans run every 8 hours. Release tags attach versioned data bundles with SHA-256 checksums: https://github.com/reacher-z/Awesome-CUA/releases

## Contact

Suggest a resource or report a correction: https://github.com/reacher-z/Awesome-CUA/issues/new/choose
