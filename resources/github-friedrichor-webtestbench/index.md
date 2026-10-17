# WebTestBench

An end-to-end web-testing benchmark where agents derive test checklists from development instructions, interact with deployed applications and report functional or constraint-related defects.

- Catalog URL: https://awesomecua.github.io/resources/github-friedrichor-webtestbench/
- Original source: https://github.com/friedrichor/WebTestBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, tool-integration
- Evidence checked: 2026-10-17T11:18:18Z
- ID: github:friedrichor/webtestbench

## Limitations

Public evaluation/deployment scripts accompany an ungated Hub release with JSON/JSONL metadata and 100 application ZIP files. The ZIP count is an artifact inventory, not an asserted test-case or defect count. The documented baseline uses Claude Agent SDK and a pinned Playwright MCP version with external model credentials; these were not installed or run. Code and data Apache-2.0 declarations are retained separately.

- Record JSON: https://awesomecua.github.io/resources/github-friedrichor-webtestbench/record.json

## Structured profile

- actions: browser interaction, test checklist generation, defect reports
- evaluation: The supplied WebTester pipeline separates checklist generation from interactive defect detection and provides a scoring workflow.
- focus: web functionality testing, latent permission and business constraints
- observations: web application interface, development instruction
- setting: interactive

### Count observations

- 7 application categories — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md)
- 100 web-application archives — Hub file manifest (computed) (computed; source: https://huggingface.co/api/datasets/friedrichor/WebTestBench)

The 100 archive files are not counted as 100 independent test tasks or defects. Backend/tool versions and deployment settings affect reproducibility.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE
- data: apache-2.0 — https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- code review: Repository source LICENSE; external tools and services retain their own licenses.
  Sources: https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE

- data review: Publisher Hub-card license declaration for the released benchmark dataset.
  Sources: https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md (retrieved 2026-10-17T11:18:18Z; SHA-256 b41472026cd7d4f81a01d58bf39193dc1fabc7875c61e370090a20cc77500cdd)
- https://api.github.com/repos/friedrichor/WebTestBench (retrieved 2026-10-17T11:18:18Z; SHA-256 7203ecc2aae5f1697eeeb804ca8f21d47b9f22a8b8fa43a4064c4e1c49f5e72c)
- https://api.github.com/repos/friedrichor/WebTestBench/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:55Z; SHA-256 bd1f09149b00d59a0078d414216bd2fb78e09ce7212d15bbda84ddec7052c8af)
- https://huggingface.co/api/datasets/friedrichor/WebTestBench (retrieved 2026-10-17T11:23:08Z; SHA-256 db1e97f40107038ae03835dc20f17b13b37e74b5c8587f8c39b441271618f017)
- https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md (retrieved 2026-10-17T11:23:08Z; SHA-256 6f2f94a25ed66a14779f6b4e6686044d0510eb32a0187645cc473978d93f7c5b)
- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE (retrieved 2026-10-17T11:22:55Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
