---
title: "Mind2Web 2 task data and judge scripts | AwesomeCUA"
url: https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/
updated: 2026-10-18
type: dataset
lang: en
---

# Mind2Web 2 task data and judge scripts

Auto-gated Hub release of Mind2Web 2: dev and test task CSVs for long-horizon agentic web search, plus 130 per-task Python evaluation scripts that act as its judge agents.

- Catalog URL: https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/
- Original source: https://huggingface.co/datasets/osunlp/Mind2Web-2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon
- Evidence checked: 2026-10-18T16:01:45Z
- ID: url:4f4c4f0bf0cec93c59d1

## Limitations

The Hub API at revision 54f5b254 reports gated 'auto' (access is approved automatically after a logged-in request) and lists dev_set.csv and test_set.csv as the dev_set and test_set splits, a changelog, and 130 Python files under evaluation_scripts/2025_10_23. The description comes from the project README, which links this dataset as its tasks and judge-agent evaluation scripts and says the scripts for both the public dev set and the test set were released on 2025-10-23. The Hub card metadata declares CC BY 4.0; the repository code is MIT and is not applied to the data. Per the README, scoring with the scripts needs model API keys, and precaching the cited webpages is optional but recommended.

- Record JSON: https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/record.json

## Structured profile

- Formats: CSV, Python
- Modalities: text, Python code
- Splits: dev_set, test_set
- Supervision: task definitions for live-web agentic search, per-task judge-agent evaluation scripts

### Count observations

- 130 per-task evaluation scripts — evaluation_scripts/2025_10_23 in osunlp/Mind2Web-2 at revision 54f5b25 (computed) (computed; source: https://huggingface.co/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23)

The script count is the number of distinct .py files in the pinned tree listing. The automatic access gate leaves the dev and test task CSVs unopened and their per-split task counts unknown.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web-2
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45 (retrieved 2026-10-18T16:01:45Z; SHA-256 c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/1fcbfda98bf5c669daa2ed0a27f1d2f2499475ee/README.md (retrieved 2026-10-18T16:01:21Z; SHA-256 5cc72b992cfc11094dcf341c284d5baadc6c66a302fdfd474b27913fe1c91f6f)
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23 (retrieved 2026-10-18T16:00:57Z; SHA-256 42844a52150a767be14adcad614f2973e537a7154944a24c0dcb6bce6bf47d9d)
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45 (retrieved 2026-10-18T16:01:45Z; SHA-256 c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e)
