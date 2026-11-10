---
title: "SWE-bench Multimodal | AwesomeCUA"
url: https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/
updated: 2026-10-18
type: benchmark
lang: en
---

# SWE-bench Multimodal

Issue-resolution benchmark for visual JavaScript and TypeScript software, where each task's issue or patch includes screenshots, mockups or renderings and fixes are checked by repository unit tests.

- Catalog URL: https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/
- Original source: https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: evaluation, screen-understanding
- Evidence checked: 2026-10-18T11:11:00Z
- ID: url:cb7f3bdb832d533c96b0

## Limitations

Adjacent scope: agents resolve issues by producing code patches, and every instance requires interpreting interface screenshots, recordings or renderings of front-end software; code-only operation is allowed. The card's prose describes 612 issue-pull request pairs (102 dev, 510 test) from 17 repositories, while the card's dataset_info and the Hub dataset viewer report 100 dev and 480 test rows for the released Parquet files; the published rows are counted here and the difference is unexplained. The card's eval.yaml describes 517 issues with visual elements and the paper abstract reports 617 task instances. The card declares no data license, so data terms remain unknown. An older copy exists at princeton-nlp/SWE-bench_Multimodal. Evaluation uses the SWE-bench harness and per-instance Docker images; nothing was run here.

- Record JSON: https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/record.json

## Structured profile

- Actions / outputs: code patch submission
- Evaluation: Submitted patches are applied in per-instance Docker images and judged by the repository's FAIL_TO_PASS and PASS_TO_PASS unit tests through the SWE-bench harness; the reported metric is the percentage of instances resolved.
- Focus: issue resolution in visual JavaScript/TypeScript software, interpreting screenshots and renderings in issue reports
- Observations: repository checkout, issue text, issue and patch images
- Setting: offline

### Count observations

- 480 task instances — Hub test split as released (dataset_info and dataset viewer) (reported; source: https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal)
- 100 task instances — Hub dev split as released (dataset_info and dataset viewer) (reported; source: https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal)
- 612 issue-pull request pairs — dataset card prose (102 dev and 510 test from 17 repositories) (reported; source: https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md)

The released Parquet rows (100 dev, 480 test) differ from the card's prose totals (102 dev, 510 test); record the Hub revision and split with a score. The dev and test splits use disjoint repositories. Some carbon-design-system accessibility tests fetch a rule engine over the network at evaluation time, so their verdicts can vary between runs.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md (retrieved 2026-10-18T11:11:00Z; SHA-256 dbff146d57bbc200cb584c300d045bc81ab738cec0c07ae405e4f5ebbf5dc6ea)
- https://huggingface.co/api/datasets/SWE-bench/SWE-bench_Multimodal (retrieved 2026-10-18T11:11:01Z; SHA-256 5f1503ae26a328a37c4d3f67d1b73b0d64e3dd80534eed4604a8b65944bcd6dc)
- https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal (retrieved 2026-10-18T11:11:05Z; SHA-256 8347894b2ea01e61e4d74fbbeaeacd7809ae0bef9beabdb74c16636cfbd9a3fc)
