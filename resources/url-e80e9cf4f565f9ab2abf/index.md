# AutomotiveUI-Bench-4K

Offline test set of 998 photos and screenshots of in-vehicle infotainment screens from 15 brands, with 4,208 English annotations for locating UI elements and judging expected results as passed or failed.

- Catalog URL: https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/
- Original source: https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, evaluation, screen-understanding, industry
- Evidence checked: 2026-10-19T07:49:42Z
- ID: url:e80e9cf4f565f9ab2abf

## Limitations

Sparks Solutions publishes one ungated test split of 22 Parquet shards at revision d760810c. The card describes mostly photographs of in-vehicle infotainment displays plus some direct screenshots such as Android Auto; its per-brand image counts cover 13 car brands, Apple CarPlay and Google Android Auto and sum to 998. No catalog platform facet fits infotainment systems, so the environment is unspecified. Each annotation pairs a bounding box with either an imperative test action or an expected-result statement labeled passed or failed; UI text is German or English and annotations are English. The card's example code runs the publisher's ELAM-7B model, and its results table is publisher-reported. The card cites arXiv 2505.05895 (Ernhofer et al., 2025). CC-BY-4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/record.json

## Structured profile

- actions: point or bounding box for the referenced UI element, passed or failed verdict for expected results
- evaluation: The card's scoring script counts a grounding hit when the predicted point, or the center of a predicted box, lies inside the annotated box, and scores expected-result verdicts against the passed or failed labels, overall and by UI language.
- focus: grounding infotainment UI elements from test-action commands, judging expected-result statements as passed or failed
- observations: photographs and screenshots of in-vehicle infotainment displays, English test-action or expected-result text
- setting: offline

### Count observations

- 4,208 annotations — test split, the only split, at revision d760810c (reported; source: https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md)
- 998 images — images in the release (reported; source: https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md)
- 2,269 annotations — Test Action rows in the test split, from the Hub dataset viewer's column statistics (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test)
- 1,939 annotations — Expected Result rows in the test split (1,375 passed, 564 failed), from the Hub dataset viewer's column statistics (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test)

Image and annotation totals are the card's. The class split comes from the Hub dataset viewer's statistics for the test split, whose 4,208 rows match the card; the language column is the UI language (2,220 German and 1,988 English rows). The 2.5 GB of Parquet shards were not downloaded.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md (retrieved 2026-10-19T07:49:42Z; SHA-256 5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7)
- https://huggingface.co/api/datasets/sparks-solutions/AutomotiveUI-Bench-4K/revision/d760810c47bed006d88ee70dad7248056fdec223 (retrieved 2026-10-19T07:49:43Z; SHA-256 864ae1e85c8348b194569e78e9ac1defc9c928016ab4f0d0e49895d8e99c0130)
- https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test (retrieved 2026-10-19T07:50:08Z; SHA-256 ae3164aa48bcf6a05f6f6c0dd6d43e463b97a1dc5562b60460f4e787f7841d44)
- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md (retrieved 2026-10-19T07:49:42Z; SHA-256 5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7)
