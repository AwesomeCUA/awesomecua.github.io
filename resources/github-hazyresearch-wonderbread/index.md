# WONDERBREAD

An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.

- Catalog URL: https://awesomecua.github.io/resources/github-hazyresearch-wonderbread/
- Original source: https://github.com/HazyResearch/wonderbread
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, workflow, video, screen-understanding
- Evidence checked: 2026-10-17T09:12:11Z
- ID: github:hazyresearch/wonderbread

## Limitations

The repository contains evaluation and collection code; the linked Zenodo release exposes the full, gold and debug demonstration archives and metadata. This measures workflow understanding rather than interactive agent task completion. Zenodo declares CC-BY-4.0 for that dataset; no repository-level code license was found. Archives and human demonstration records were not downloaded.

- Record JSON: https://awesomecua.github.io/resources/github-hazyresearch-wonderbread/record.json

## Structured profile

- actions: generate procedures, segment demonstrations, answer workflow questions, validate and rank procedures
- evaluation: Task-specific scripts evaluate six workflow-understanding task types; model outputs are not treated as successful interactive execution.
- focus: workflow documentation, workflow quality assessment, workflow knowledge transfer
- observations: screen recordings, action traces, screenshots, written standard operating procedures
- setting: offline

### Count observations

- 6 task types — WONDERBREAD BPM benchmark (reported; source: https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md)
- 2,928 human demonstrations — full dataset release 14094162 (reported; source: https://zenodo.org/api/records/14094162)
- 598 web navigation workflows — full dataset release 14094162 (reported; source: https://zenodo.org/api/records/14094162)
- 724 human demonstrations — gold subset used for the original paper evaluations (reported; source: https://zenodo.org/api/records/14094162)

Counts are publisher-reported. The gold subset covers 162 workflows and differs from the full collection; scores require the exact task and subset.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://zenodo.org/api/records/14094162
- document: not recorded
- weights: not recorded

- data review: The linked Zenodo dataset release declares CC-BY-4.0; this does not assign a code license to the repository.
  Sources: https://zenodo.org/api/records/14094162

## Primary evidence

- https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md (retrieved 2026-10-17T09:12:11Z; SHA-256 1e4308d59a22b39543c28b745a58d3d7c47be1ab9df9a4c5c0fe868a810350b2)
- https://api.github.com/repos/HazyResearch/wonderbread (retrieved 2026-10-17T09:12:11Z; SHA-256 5ba27e24455b36b52bf65b3c9f589e760f97a576bb01d622d89836c5bb53b38c)
- https://api.github.com/repos/HazyResearch/wonderbread/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:04Z; SHA-256 accb518a5362948cf96e9f0b684fb6fcc9b26e43a691016ae70a3283c0e1e2c2)
- https://zenodo.org/api/records/14094162 (retrieved 2026-10-17T09:15:34Z; SHA-256 68b4b952c1ab90484d457b392de1d0c95a24f6cc1674c82125a6bd26f1cb1016)
