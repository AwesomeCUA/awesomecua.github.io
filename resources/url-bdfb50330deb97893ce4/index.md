# MT-Mind2Web

Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.

- Catalog URL: https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/
- Original source: https://huggingface.co/datasets/magicgh/MT-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, memory
- Evidence checked: 2026-10-17T12:34:10Z
- ID: url:bdfb50330deb97893ce4

## Limitations

The ungated Hub manifest contains train, test-task, test-website and test-subdomain JSON shards plus a candidate-ranking pickle file. Counts distinguish conversation sessions from dialogue turns; neither is a screenshot or action-step count. No pickle or sample data was loaded. The card declares CC-BY-4.0 and identifies the original Mind2Web interactions as its source.

- Record JSON: https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/record.json

## Structured profile

- formats: JSON, auxiliary PKL
- modalities: dialogue text, HTML, element candidates, actions
- splits: train, test_task, test_website, test_subdomain
- supervision: multi-turn web instruction following, element/action prediction

### Count observations

- 600 conversations — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 34 conversations — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 42 conversations — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 44 conversations — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 2,896 dialogue turns — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 191 dialogue turns — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 218 dialogue turns — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 216 dialogue turns — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)

Conversation, dialogue-turn and action-step units differ. The released file manifest is inspected; underlying examples were not downloaded.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the multi-turn annotation release.
  Sources: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md (retrieved 2026-10-17T12:34:10Z; SHA-256 8685e0a26a06b3339b5c078632a7b0ade1ead40e6b586ef1ff3676414699a4bc)
- https://huggingface.co/api/datasets/magicgh/MT-Mind2Web (retrieved 2026-10-17T12:34:10Z; SHA-256 4455e6daf1151694c03b2a1ebd4a7af40b5b079b0568706a1783a0222383bb1d)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
