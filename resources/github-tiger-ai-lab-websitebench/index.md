# WebsiteBench

Website reconstruction benchmark: agents explore a production-level site through a browser, rebuild a full-stack version, and are scored by hidden functional and visual test cases across 70 tasks.

- Catalog URL: https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/
- Original source: https://github.com/TIGER-AI-Lab/WebsiteBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon, ui-design
- Evidence checked: 2026-11-06T06:21:48Z
- ID: github:tiger-ai-lab/websitebench

## Limitations

Read at commit 78f5558e. The README and docs/tasks.md were reviewed; the 70 tasks and 46,916 hidden cases were checked by summing the docs/tasks.md table. The README's paper badge has no link and the project page says the paper is coming soon, so no paper relation is recorded. Apache-2.0 is the README's statement for benchmark code, task definitions and verifier; the README says the reference websites reproduce third-party sites, belong to their owners and are provided for non-commercial research only. Leaderboard scores were not checked. This catalog's maintainers also publish this benchmark, so this review is not independent. Nothing was installed or run.

- Record JSON: https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/record.json

## Structured profile

- actions: harness-defined browser actions through the task's local browser service
- evaluation: Hidden test cases per task. A case passes when its functional checks pass and every visual checkpoint's flat-baseline-normalized RGB SSIM reaches 0.99. A task's reward is passed cases divided by cases, weighted equally.
- focus: full-stack website reconstruction from browser exploration, without the source code, visual appearance and functional behavior of the rebuilt site
- observations: not recorded
- setting: interactive

### Count observations

- 70 tasks — released tasks (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md)
- 46,916 test cases — hidden test cases summed over the docs/tasks.md table (computed) (computed; source: https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md)

Agents run through selectable Harbor agents, so observations and actions depend on the agent. Each task requests 8 CPUs, 8 GiB of memory and 20 GiB of disk per environment, with up to 16 hours for the agent.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/README.md (retrieved 2026-11-06T06:21:48Z; SHA-256 c79cb821975c34552a46f01349edd0869c2f20c9a85d4b7811155d3fb7f7f0b2)
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md (retrieved 2026-11-06T06:21:44Z; SHA-256 d98bd00fb45abc63df0fddd6d9f9f5e669396cd53c157e5e06d6de9d103adf09)
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE (retrieved 2026-11-06T06:22:02Z; SHA-256 cda5b289b68650d0643c0ded2d43dc797cb7777c4d943f2b03067250de6d3c26)
