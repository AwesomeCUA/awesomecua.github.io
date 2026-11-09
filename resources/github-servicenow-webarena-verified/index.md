# WebArena-Verified

An audited re-release of WebArena's 812 web tasks with corrected reference answers and deterministic evaluators that score structured agent responses and captured network traces, plus a 258-task hard subset.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-webarena-verified/
- Original source: https://github.com/ServiceNow/webarena-verified
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-18T11:06:05Z
- ID: github:servicenow/webarena-verified

## Limitations

The README describes this as the verified release of WebArena and keeps the original task file (assets/dataset/test.raw.json) for reference; scores on it are not interchangeable with original WebArena results. The cited paper is a NeurIPS 2025 Scaling Environments for Agents workshop paper on OpenReview (94tlGxmqkN) with no arXiv identifier, so no paper record is linked. The task file is also published as the Hugging Face dataset AmineHA/WebArena-Verified, which was not reviewed here; Apache-2.0 is the repository code license and is not applied to the task data or to the self-hosted site images. Docker images and a PyPI package are documented.

- Record JSON: https://awesomecua.com/resources/github-servicenow-webarena-verified/record.json

## Structured profile

- actions: browser interactions on self-hosted WebArena sites
- evaluation: Deterministic evaluators compare a structured agent response (task type, status, retrieved data) with the reference; 488 of the 812 tasks also check network events from a captured HAR trace, with 663 network-event checks in all. LLM-as-a-judge and substring matching were removed, and runs can be scored offline from saved responses and traces.
- focus: web task completion, information retrieval from self-hosted websites
- observations: not recorded
- setting: interactive

### Count observations

- 812 task definitions — assets/dataset/webarena-verified.json (computed) (computed; source: https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json)
- 258 task IDs — WebArena-Verified Hard subset (assets/dataset/subsets/webarena-verified-hard.json) (computed) (computed; source: https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json)

Counts are unique task_id values in the inspected manifests. Tasks span the shopping, shopping_admin, gitlab, reddit, map and wikipedia sites, including cross-site tasks; each task carries a revision number. The observation format and agent harness are not prescribed. Record the task-file revision, subset and environment images with a score.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/README.md (retrieved 2026-10-18T11:06:05Z; SHA-256 8f343078ba55263182f86ec54497958a1174d90cb8ce7573cedcc29f5c8e6b50)
- https://api.github.com/repos/ServiceNow/webarena-verified (retrieved 2026-10-18T11:06:07Z; SHA-256 564d8926e929185697d0471e5554b84743cf1eae4776045ab46f72b2cab49c31)
- https://api.github.com/repos/ServiceNow/webarena-verified/git/trees/main?recursive=1 (retrieved 2026-10-18T11:06:08Z; SHA-256 7fefd38b6a2cacdc12e0d659e37bed409a3784da269b0c18558e74ab71ae1e06)
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json (retrieved 2026-10-18T11:06:05Z; SHA-256 d65275660814663375028e9017e1f929e3c38321041b125795e2713b52243d30)
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json (retrieved 2026-10-18T11:06:06Z; SHA-256 3b0a4df231bb5a0c642215e521c3fa97701a384f52a734dc2db8f617ad0591a7)
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE (retrieved 2026-10-18T11:06:06Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE (retrieved 2026-10-18T11:06:06Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
