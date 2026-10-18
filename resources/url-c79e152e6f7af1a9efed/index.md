# ScreenSpot-Pro data

High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.

- Catalog URL: https://awesomecua.github.io/resources/url-c79e152e6f7af1a9efed/
- Original source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T11:35:55Z
- ID: url:c79e152e6f7af1a9efed

## Limitations

This is the benchmark data asset, distinct from its evaluation-code repository. Target counts are not unique image counts.

- Record JSON: https://awesomecua.github.io/resources/url-c79e152e6f7af1a9efed/record.json

## Structured profile

- formats: JSON annotations, screen images
- modalities: high-resolution screenshots, instructions, bounding boxes
- splits: not recorded
- supervision: GUI grounding

### Count observations

- 1,581 target annotations — sum of icon/text counts in the published card table (computed) (computed; source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md)

Counts describe target annotations, not unique screenshots or expanded language/style variants. The evaluation code can reuse a target across configurations.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py (retrieved 2026-10-16T11:38:05Z; SHA-256 a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)
- https://gui-agent.github.io/grounding-leaderboard/ (retrieved 2026-10-18T04:27:10Z; SHA-256 2f7f635dee3c593b40efc61246c082ab1d76f7ce78f84a1d4b6391d30fa4e8fd)
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
