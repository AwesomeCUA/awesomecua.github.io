# AgentTime: Can Agents Estimate and Control Their Own Runtime?

Evaluates duration following, runtime forecasts and elapsed-time estimates in native agent harnesses, including OSWorld desktop tasks, with external timers, native graders and work-versus-wait analysis.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-09944/
- Original source: https://arxiv.org/abs/2610.09944
- Kind: paper
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, observability
- Evidence checked: 2026-10-20T15:08:56.488063+00:00
- ID: arxiv:2610.09944

## Limitations

This cross-domain suite includes 16 OSWorld 2.0 tasks among 222 tasks from 18 sources. A single run per task and requested duration, provider effects and incomplete native grades limit comparisons; elapsed time is not evidence of productive work. The OSWorld task 092 video judge was skipped without an API key. The inspected repository README identifies desktop-VM timing and states that the current 222-task forecasting runs will be added; its existing forecasting code covers an earlier study, and transcript work/wait labels are not public. No code or benchmark was executed and no license was verified.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-09944/record.json

## Authors

Michael Ofengenden, Maksym Andriushchenko

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-09944/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-09944/citation.csl.json

## Recorded arXiv snapshot

- Version: 2
- Version source: https://arxiv.org/abs/2610.09944v2
- First submission: 2026-10-07T12:26:24Z
- Version updated: 2026-10-08T09:06:36Z
- Abstract SHA-256: 03aea09f3ed1b75a8a6584efdfa51d45d1cfa9dc53fb3a25efd820c5b72e094a
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agent%22+OR+ti%3A%22browser+agent%22+OR+ti%3AGUI+OR+ti%3A%22Android+agent%22+OR+abs%3A%22computer-use+agents%22+OR+abs%3A%22GUI+agents%22+OR+abs%3A%22browser+agents%22+OR+abs%3A%22mobile+GUI%22%29+AND+submittedDate%3A%5B202610060000+TO+202610200000%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T13:48:10Z; SHA-256 6d8c0463b6d50320246021f0394d0e39c9fd839f1ef1f742c8cdfa231872b059)
- https://arxiv.org/html/2610.09944v2 (retrieved 2026-10-20T15:08:56.488063+00:00; SHA-256 5424a5f9278ef276c84799a08d4e2e171ee93947a38c1d6670c36fa76dc84fe3)
- https://github.com/michaelofengenden/agenttimebench (retrieved 2026-10-20T15:15:05.368243+00:00; SHA-256 9bef76f95b41a7ca39c6fa3276d6122e4b27e1e0bd56a777edcfd7e11e7d7342)
