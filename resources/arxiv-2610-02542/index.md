# How To Train Your World Model: Fine-tuning vs RAG for LM-based World Modeling

Compares fine-tuned, retrieval-based and hybrid language-model world models for next-observation prediction and action selection in text environments including WebShop.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-02542/
- Original source: https://arxiv.org/abs/2610.02542
- Kind: paper
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: world-models, planning, evaluation, web-navigation
- Evidence checked: 2026-10-20T15:08:56Z
- ID: arxiv:2610.02542

## Limitations

Adjacent cross-domain study with WebShop as its web evaluation. WebShop uses text-rendered search/product pages and an explicit valid-action menu, not screenshot control or live purchases. A frozen policy proposes five actions; a world model predicts their next observations and the policy scores them before one is executed in the simulator. Utility is normalized environment reward, while fidelity uses a model judge; neither is a universal GUI task-success rate. Fine-tuning and retrieval use collected training experience; the hybrid masks same-episode retrieval, which does not establish general contamination freedom. The retained Atom and v1 HTML abstract wording differs; original bibliographic metadata and its abstract digest are preserved.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-02542/record.json

## Authors

Dhananjay Ashok, Shantanu Agarwal, Vivek Datla, Jonathan May, Alfy Samuel

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-02542/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-02542/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2610.02542v1
- First submission: 2026-10-01T22:30:08Z
- Version updated: 2026-10-01T22:30:08Z
- Abstract SHA-256: 35ded32e7bac9a875a0fa41efad43fed5fb0aab54fade5cfc2a0628b1e666587
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: CC-BY-4.0 — https://arxiv.org/html/2610.02542v1
- weights: not recorded

- document review: The retained version-specific arXiv HTML infobox explicitly labels this paper License: CC BY 4.0. This document declaration does not establish code, training-data or model-weight licenses.
  Sources: https://arxiv.org/html/2610.02542v1

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28abs%3A%22desktop+agent%22+OR+abs%3A%22computer+interaction%22+OR+abs%3A%22GUI+automation%22+OR+abs%3A%22web+navigation%22+OR+abs%3A%22browser+automation%22+OR+abs%3A%22visual+grounding%22+OR+abs%3A%22screen+understanding%22+OR+abs%3A%22mobile+agents%22%29+AND+submittedDate%3A%5B202609200000+TO+202610200000%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T15:06:37Z; SHA-256 a3d753815e82190ee2de6f322cd816c32f2dd391f862845305fc7e57300303a6)
- https://arxiv.org/html/2610.02542v1 (retrieved 2026-10-20T15:08:56Z; SHA-256 d8c22c6b3f07d4156c38af9dd7ca7c06a5d0a11889a7350d821a020e21604590)
