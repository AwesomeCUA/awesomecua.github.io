# WorkArena

Browser-based enterprise workflow tasks built around ServiceNow.

- Catalog URL: https://awesomecua.github.io/resources/github-servicenow-workarena/
- Original source: https://github.com/ServiceNow/WorkArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, workflow
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:servicenow/workarena

## Limitations

Inclusion does not establish reproducibility or endorsement.

## Structured profile

- actions: BrowserGym browser actions
- evaluation: Task-specific checks on ServiceNow workflows; levels and task configurations define different evaluations.
- focus: enterprise web workflows, compositional tasks
- observations: multimodal browser observations
- setting: interactive

### Count observations

- 33 task definitions — WorkArena-L1 atomic tasks (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)
- 19,912 task instances — WorkArena-L1 documented instances (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)
- 682 task definitions — WorkArena++ compositional tasks (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)

Definitions and instantiated tasks are different units. ServiceNow instance access is gated. WorkArena-L1 and WorkArena++ should be reported separately.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 834a48f0346036a0fc591a36f9eb6f513b44a2777a66afa0917f28fc63f29334)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)
