# AMEX

Code for AMEX Android GUI data that converts its three annotation levels into question-answer pairs and fine-tunes a LLaMA2-Accessory model, with a released checkpoint.

- Catalog URL: https://awesomecua.github.io/resources/github-yuxiangchai-amex-codebase/
- Original source: https://github.com/YuxiangChai/AMEX-codebase
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:yuxiangchai/amex-codebase

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-yuxiangchai-amex-codebase/record.json

## Structured profile

- formats: not recorded
- modalities: screenshots, element annotations, functionality descriptions, action chains
- splits: not recorded
- supervision: element grounding, UI functionality, interaction trajectories

### Count observations

- > 104,000 screenshots — AMEX collection described in the paper (reported; source: https://arxiv.org/abs/2407.17490)

The main repository contains companion training code. The scale and annotation levels here come from the paper, not an independent download or completeness audit.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 3184bfd612543621e57226e9079132dc8d5695339795a60366d3f6d445e13551)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://yxchai.com/AMEX/ (retrieved 2026-10-18T04:27:11Z; SHA-256 4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa)
- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE (retrieved 2026-10-16T06:42:02Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
