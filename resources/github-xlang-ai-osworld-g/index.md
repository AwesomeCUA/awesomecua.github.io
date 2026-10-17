# OSWorld-G

Computer-use grounding benchmark with original and refined instructions, released with the Jedi synthetic data pipeline, a 4-million-example Jedi dataset and Jedi-3B and Jedi-7B models.

- Catalog URL: https://awesomecua.github.io/resources/github-xlang-ai-osworld-g/
- Original source: https://github.com/xlang-ai/OSWorld-G
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:xlang-ai/osworld-g

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-xlang-ai-osworld-g/record.json

## Structured profile

- actions: click point or box center, refusal represented by negative coordinates in the evaluator
- evaluation: The inspected Jedi runner maps predictions from resized-image coordinates back to the original image, then checks the predicted center against rectangle/polygon targets or the refusal rule. It reports overall and classification-group accuracy. This is offline grounding, not OSWorld task-execution success.
- focus: desktop GUI grounding, infeasible-target refusal
- observations: screenshot, instruction
- setting: offline

### Count observations

No count recorded.

The repository retains original OSWorld-G.json and refined OSWorld-G_refined.json instructions; treat them as alternative benchmark versions, not additional disjoint tasks. Refined instructions reduce requirements beyond grounding. The same repository also contains Jedi training/rendering material, which is excluded from benchmark counts. The standalone generic eval.py entry point is a stub; the named model runner supplies image_size to its geometry helper. No task count or successful execution is inferred from repository file totals. Apache-2.0 is recorded for code only.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e814851bc3016a2abf59358f99b80afd9c2bd5894fc34baddfb7e4d0aa03bd45)
- https://api.github.com/repos/xlang-ai/OSWorld-G/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 48308bba4f26b02cb7b8fbbc433bb31ec81c494dabd3af437ddbb10b8d9ce667)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_osworld_g_jedi.py (retrieved 2026-10-17T14:22:04Z; SHA-256 64f64e0b847e0fa200aa6051e20b8035a436df00e2ef0d769688ab13fa4d3046)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py (retrieved 2026-10-17T14:21:09Z; SHA-256 b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
