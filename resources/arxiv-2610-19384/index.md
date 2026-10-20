# MMA-SafetyBench: A Benchmark for Multimodal Agent Safety Evaluation

Builds trajectory-guided visual-injection tests for web, desktop and mobile observations, separating target-matching action predictions from broader semantic compromise.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-19384/
- Original source: https://arxiv.org/abs/2610.19384
- Kind: paper
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, safety-security, grounding
- Evidence checked: 2026-10-20T19:02:16.329923+00:00
- ID: arxiv:2610.19384

## Limitations

ASR measures predicted coordinates inside an annotated target or compromised generated content; actual clicks, environment changes and downstream harm are not verified. SCR additionally counts adopted adversarial intent or task/schema disruption. Clean-task and attacked-trajectory denominators differ, including 42 clean desktop tasks versus 209 adversarial desktop trajectories. Payloads and injection points are fixed, and neutral prompts change both compliance cues and instruction-priority guidance. GPT-5 judging has a 300-trajectory human-label check, with borderline disagreements. Android-style mobile dialogs do not establish an Android runtime. Code/data links were identified but not inspected; no independent reproduction.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-19384/record.json

## Authors

Yuke Wang, Benlei Cui, Shen Pang, Xuemei Dong, Longtao Huang, Hui Xue, Yuwen Zhai, Junjie Li, Jingqun Tang, Haiwen Hong

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-19384/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-19384/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2610.19384v1
- First submission: 2026-10-14T01:30:03Z
- Version updated: 2026-10-14T01:30:03Z
- Abstract SHA-256: da334d943d98b4bf9915c6ca28aab734d736f376e67cbab950aa1af65f540ebf
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: CC-BY-4.0 — https://arxiv.org/html/2610.19384v1
- weights: not recorded

- document review: Paper-specific document declaration only; no code, data or weights permissions are inferred.
  Sources: https://arxiv.org/html/2610.19384v1

## Primary evidence

- https://export.arxiv.org/api/query?id_list=2610.19384%2C2610.22672%2C2610.22697%2C2610.23303%2C2610.23307%2C2610.24729&max_results=6 (retrieved 2026-10-20T05:52:01Z; SHA-256 63e37cd26bfe69455a3fa835f3d6ba4cfcc5bb7dc91f90505920d37b1e08f0b6)
- https://arxiv.org/html/2610.19384v1 (retrieved 2026-10-20T19:02:16.329923+00:00; SHA-256 ca995ec330f62a43d3d4fbbf28dfe83c5fa8b05f5c1e446929493409760268d1)
