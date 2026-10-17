# Mobile-Bench-v2 released data

Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.

- Catalog URL: https://awesomecua.github.io/resources/url-1d5b85321b98765141fc/
- Original source: https://huggingface.co/datasets/xwk123/MobileBench-v2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, robustness
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:1d5b85321b98765141fc

## Limitations

The card distinguishes complete common-simple/common-complex JSON files from sampled noisy and ambiguous subsets; common tasks also require the separately cataloged Mobile3M dataset. Card metadata says Apache-2.0, while the prose explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to data. Do not apply the permissive header to dataset payloads, and do not describe every announced split as fully released.

## Structured profile

- actions: mobile UI actions, clarification responses
- evaluation: Paper defines multi-path and noise/ambiguity evaluations; the public card identifies which files are full common-task sets and which are samples.
- focus: offline multi-path evaluation, noisy interfaces, ambiguous instructions
- observations: mobile screenshots, XML UI state, instructions
- setting: offline

### Count observations

No count recorded.

Release completeness differs by split. No full-benchmark sample total is inferred from the archive manifest.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The same first-party card has an Apache-2.0 metadata header but explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to the dataset in its License section. Preserve both declarations and leave a single data license unresolved instead of displaying the permissive header as the data permission.
  Sources: https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 13424be795c7b75b8c2195469c1252a7b3ec633e8bb31f1f6d7e44476611cbe9)
- https://huggingface.co/api/datasets/xwk123/MobileBench-v2 (retrieved 2026-10-17T04:01:33Z; SHA-256 247b1766b8cbdb2943c4602d2667f9f06dec8b84f0d24457080d499177475f22)
- https://export.arxiv.org/api/query?id_list=2503.16788%2C2503.17709%2C2503.18492%2C2503.19537%2C2503.20978%2C2503.21620%2C2503.23434%2C2504.01382%2C2504.07981%2C2504.10445%2C2504.10458%2C2504.11257%2C2504.11281%2C2504.12679%2C2504.13805%2C2504.13865%2C2504.14239%2C2504.18575%2C2504.19838%2C2504.20464%2C2505.10924%2C2505.11891%2C2505.12299%2C2505.12632%2C2505.13227%2C2505.13887%2C2505.13909%2C2505.14289%2C2505.15810%2C2505.16282%2C2505.16827%2C2505.18829%2C2505.19897%2C2505.21496%2C2505.21499%2C2505.21936%2C2505.22648%2C2505.23762%2C2505.24838%2C2506.00618%2C2506.01391%2C2506.01968%2C2506.02456%2C2506.03143%2C2506.03569%2C2506.04135%2C2506.04614%2C2506.07672%2C2506.08012%2C2506.08972&max_results=50 (retrieved 2026-10-16T06:31:42Z; SHA-256 afe4e75ffb8a5c44f4c088a90ffa5f53553036f514aa768f5aee0c5aa38d731e)
- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)
