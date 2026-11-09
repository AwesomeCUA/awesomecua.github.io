# Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents

Trains a separate language model to rewrite lengthy web page observations into focused descriptions for LLM web agents, keeping training targets that let several LLMs predict the correct next action.

- Catalog URL: https://awesomecua.com/resources/url-60a2dc930fa11860858a/
- Original source: https://openreview.net/forum?id=3Gzz7ZQLiz
- Kind: paper
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, action-prediction
- Evidence checked: 2026-10-19T07:24:24Z
- ID: url:60a2dc930fa11860858a

## Limitations

Reviewed against the ICLR 2025 proceedings page and PDF; the OpenReview forum lists it as an ICLR 2025 Poster. Experiments were not reproduced. LCoW's contextualization module reads the task, previous actions and a raw page observation such as an accessibility tree, and is retrained each iteration by supervised fine-tuning on the sampled rewrites that let several LLM agents recover the ground-truth action in successful trajectories. Appendix B fine-tunes Phi-3-mini-Instruct for WebShop and Llama-3.1-8B-Instruct for WorkArena and WebArena. WebShop and WorkArena are the main benchmarks; a 165-task WebArena subset tests generalization to unseen task types. The same paper is posted on arXiv as 2503.10689 with the comment "Accepted to ICLR 2025". The paper points to lcowiclr2025.github.io for code, which was not reviewed here.

- Record JSON: https://awesomecua.com/resources/url-60a2dc930fa11860858a/record.json

## Authors

Dongjun Lee, Juyong Lee, Kyuyoung Kim, Jihoon Tack, Jinwoo Shin, Yee Whye Teh, Kimin Lee

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-60a2dc930fa11860858a/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-60a2dc930fa11860858a/citation.csl.json

## Publication record

- Title: Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents
- Authors: Dongjun Lee, Juyong Lee, Kyuyoung Kim, Jihoon Tack, Jinwoo Shin, Yee Whye Teh, Kimin Lee
- Publication date (recorded precision): 2025-05-01
- Publication source: https://openreview.net/forum?id=3Gzz7ZQLiz
- Publication BibTeX: https://awesomecua.com/resources/url-60a2dc930fa11860858a/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-60a2dc930fa11860858a/publication-citation.csl.json
- venue: International Conference on Learning Representations 2025 (ICLR 2025)
- volume: 2025
- pages: 81039-81072
- date basis: Publisher citation_publication_date metadata on the ICLR proceedings page states 2025-05-01; precision=day.
- identity basis: Same work: the ICLR 2025 proceedings page and PDF carry the same title, seven authors and abstract as OpenReview note 3Gzz7ZQLiz (venue ICLR 2025 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. An arXiv preprint, 2503.10689, carries the same title, the same seven authors and the comment "Accepted to ICLR 2025".
- notes: The proceedings page and PDF byline list the same seven authors in the same order. The record URL is the OpenReview forum; the proceedings page and PDF are the retained receipts. No DOI is given.
- Publication evidence: https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html, https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html (retrieved 2026-10-19T07:24:24Z; SHA-256 2f882b8d48b21d0343ed7c6e07e9117d2b95fe250ef01cd51d8590eeba5bc9f8)
- https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf (retrieved 2026-10-19T07:20:22Z; SHA-256 5689819e3e2604077a9afb9f98aa41cb7e2d22f13701446dd5c1a53be9b9d7b6)
- https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html (retrieved 2026-10-19T07:24:24Z; SHA-256 2f882b8d48b21d0343ed7c6e07e9117d2b95fe250ef01cd51d8590eeba5bc9f8)
- https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf (retrieved 2026-10-19T07:20:22Z; SHA-256 5689819e3e2604077a9afb9f98aa41cb7e2d22f13701446dd5c1a53be9b9d7b6)
