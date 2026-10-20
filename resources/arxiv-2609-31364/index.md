# OpenVAM: Open-World Visual Attention Modeling with VLMs

Combines dense saliency prediction with explanations of attended elements, including webpage layouts; evaluates human-attention agreement and textual rationales rather than agent actions.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2609-31364/
- Original source: https://arxiv.org/abs/2609.31364
- Kind: paper
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding, ui-design, evaluation, data-generation
- Evidence checked: 2026-10-20T19:01:29.156954Z
- ID: arxiv:2609.31364

## Limitations

Static human-attention modeling on U-EYE webpage screenshots, with FIWI held out from training; no live-browser, agent-action or task-success evaluation. Gemini-generated reference rationales are expert-checked, and JScore compares generated text with references; human validation covers a separate 100-image subset. Reference text and heatmap alignment do not establish causal explanations of gaze or temporal scanpaths. Several baseline scores come from prior papers. Code/data/weight releases and licenses were not verified; no independent reproduction.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2609-31364/record.json

## Authors

Kiana Hooshanfar, Amirhossein Kazerouni, Alireza Hosseini, Michael Brudno, Babak Taati

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2609-31364/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2609-31364/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2609.31364v1
- First submission: 2026-09-25T14:59:14Z
- Version updated: 2026-09-25T14:59:14Z
- Abstract SHA-256: 9ce76f34abe391289643321027a33ac3cac8b5bd64eaa901f9a5fbf7c5561362
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: CC-BY-4.0 — https://arxiv.org/html/2609.31364v1
- weights: not recorded

- document review: Document declaration only. The paper does not establish code, model-weight or underlying dataset permissions through this license.
  Sources: https://arxiv.org/html/2609.31364v1

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28abs%3A%22desktop+agent%22+OR+abs%3A%22computer+interaction%22+OR+abs%3A%22GUI+automation%22+OR+abs%3A%22web+navigation%22+OR+abs%3A%22browser+automation%22+OR+abs%3A%22visual+grounding%22+OR+abs%3A%22screen+understanding%22+OR+abs%3A%22mobile+agents%22%29+AND+submittedDate%3A%5B202609200000+TO+202610200000%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T15:06:37Z; SHA-256 a3d753815e82190ee2de6f322cd816c32f2dd391f862845305fc7e57300303a6)
- https://arxiv.org/html/2609.31364v1 (retrieved 2026-10-20T19:01:29.156954Z; SHA-256 cd4ba28778b725c63f4a7329f683b2a287db2e46ed228a0d47006fcd95bbce80)
