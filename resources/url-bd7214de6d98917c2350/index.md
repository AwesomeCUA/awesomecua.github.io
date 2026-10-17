# ScreenSpot v2

Second version of the ScreenSpot grounding test set, published by OS-Copilot as separate desktop, mobile and web annotation files with a shared screenshot archive.

- Catalog URL: https://awesomecua.github.io/resources/url-bd7214de6d98917c2350/
- Original source: https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:bd7214de6d98917c2350

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/url-bd7214de6d98917c2350/record.json

## Structured profile

- actions: click coordinates
- evaluation: The inspected Jedi evaluation adapter reads the v2 mobile/desktop/web annotation files, scores a point against the target box, and reports overall, platform, and text/icon accuracy. This is a named compatible evaluator implementation; the OS-Atlas dataset card itself supplies no evaluator specification.
- focus: single-step GUI grounding on the ScreenSpot-v2 release
- observations: screenshot, instruction
- setting: offline

### Count observations

No count recorded.

The public Hub revision 5efbb1f1 contains three platform JSON annotation files and an image ZIP; its card only declares Apache-2.0. No sample total or equivalence to the original ScreenSpot test count is asserted. Keep v2 separate from v1 and retain evaluator/version and coordinate conversion when comparing results. Files were listed, not downloaded as data.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2 (retrieved 2026-10-16T06:38:26Z; SHA-256 7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408)
- https://osatlas.github.io/ (retrieved 2026-10-17T14:22:05Z; SHA-256 94547cb88756cf6a36bfb86d5fe9bdca1e40d7edb9e452c33cb462bbe760fed0)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_screenspot_v2_jedi.py (retrieved 2026-10-17T14:21:09Z; SHA-256 0e8772bc8fd5a25c50d3c2f6b0caee05ed2ab4659d46d99d60adf2b5ab29e997)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py (retrieved 2026-10-17T14:21:09Z; SHA-256 b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a)
- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2 (retrieved 2026-10-16T06:38:26Z; SHA-256 7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408)
