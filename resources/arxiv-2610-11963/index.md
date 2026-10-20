# Can LLMs Fix It Without Code? Toward Automated Verification of No-Code Bug Fixes

Tests natural-language no-code fixes through GUI execution in Linux Brave. Scripted fixed/buggy-state gates and issue-specific checkers distinguish fix outcomes from the executor's completion claims.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-11963/
- Original source: https://arxiv.org/abs/2610.11963
- Kind: paper
- Review: curated
- Scope: core
- Environments: web, desktop, linux
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-20T13:12:25.581656+00:00
- ID: arxiv:2610.11963

## Limitations

The evaluation reuses 322 fixes from 12 generation configurations and is restricted to nine of 51 candidate issues after environment setup and sanity checks. Resolution counts any success in three runs with a 20-step episode limit; executor harnesses and decoding settings differ. Opening the update page triggers a harness-controlled switch to the fixed browser build. Checker behavior, reconstructed starting states and the two-author human reference limit interpretation. The replication package was linked by the paper but was not inspected; no software, agent, model or result was run or reproduced.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-11963/record.json

## Authors

Utku Boran Torun, Veli Karakaya, Eray Tüzün

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-11963/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-11963/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2610.11963v1
- First submission: 2026-10-08T13:44:53Z
- Version updated: 2026-10-08T13:44:53Z
- Abstract SHA-256: 0e77dcf101ba95684aac51084e43b914c0aca86fc25d061612224118004bdb21
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28abs%3A%22computer-use+agents%22+OR+abs%3A%22GUI+agents%22+OR+abs%3A%22browser+agents%22+OR+abs%3A%22mobile+GUI%22%29+AND+submittedDate%3A%5B202609200000+TO+202610201255%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T12:58:20.217517Z; SHA-256 f275c47a8b6d349a70e39a9e55eea5a09d99d5f35cc896100f3bcfd5b0923e0b)
- https://arxiv.org/html/2610.11963v1 (retrieved 2026-10-20T13:12:25.581656+00:00; SHA-256 9fad44164a6f00446d2c91a31e3e77a4aab8145ac3747e9d1ce0165c1aebda95)
