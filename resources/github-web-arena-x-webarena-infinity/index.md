---
title: "WebArena-Infinity | AwesomeCUA"
url: https://awesomecua.com/resources/github-web-arena-x-webarena-infinity/
updated: 2026-10-20
type: benchmark
lang: en
---

# WebArena-Infinity

Generated web apps modeled on GitLab, PayPal, Xero, Elation EHR and other products, each with resettable state and Python-verified tasks for browser agents, plus the coding-agent pipeline that builds them.

- Catalog URL: https://awesomecua.com/resources/github-web-arena-x-webarena-infinity/
- Original source: https://github.com/web-arena-x/webarena-infinity
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, sandbox, data-generation
- Evidence checked: 2026-10-20T04:06:22Z
- ID: github:web-arena-x/webarena-infinity

## Limitations

Documented by a March 2026 blog post at webarena.dev; the README cites that post and no arXiv paper. At commit 1ca7781, apps/ holds 13 generated environments, each a static HTML/CSS/JS app whose browser pushes its full state to a Python server.py; verifiers read GET /api/state, and POST /api/reset restores the seed state. The tree has 1,620 real-task verifiers (260 easy, 260 medium, 1,100 hard) and 737 functional-test verifiers. The blog's initial-release table lists ten of these environments with 1,260 tasks; elation-patient-communication, figma-slides and figma-text-and-typography are further directories outside that table. evaluation/run_eval_parallel.py runs browser-use agents (GPT-4o, Gemini 3 Flash and Pro, Claude Sonnet 4.6) with vision off unless --use-vision is set, and screenshot agents (Gemini and Claude computer use, Kimi K2.5, Qwen 3.5) whose coordinate actions Playwright executes; defaults are 50 steps and a 600-second task limit. infra/pipeline.py runs Claude Code with --dangerously-skip-permissions to generate new apps from documentation, such as the product-manual files under apps/user-manuals, whose rights were not reviewed. The agent trajectories described in the blog are published separately as the Hugging Face dataset webarena-x/webarena-infinity-trajectories.

- Record JSON: https://awesomecua.com/resources/github-web-arena-x-webarena-infinity/record.json

## Structured profile

- Actions / outputs: browser-use element actions, mouse click, drag and scroll, key press and typing
- Evaluation: Before each task the harness posts /api/reset; after the agent finishes, the task's Python verifier reads the app state from GET /api/state and returns pass or fail with a message. Tasks are graded easy, medium or hard, and the blog reports success rate per agent.
- Focus: browser agents on generated replicas of real web applications, programmatic state verification of task outcomes
- Observations: DOM-derived page state through browser-use (screenshots optional), screenshots
- Setting: interactive

### Count observations

- 1,260 tasks — initial release, ten environments (blog statistics table) (reported; source: https://webarena.dev/webarena-infinity/content.md)
- 10 environments — initial release (blog statistics table) (reported; source: https://webarena.dev/webarena-infinity/content.md)
- 13 environment directories — apps/ at commit 1ca7781, excluding ablations, app-description and user-manuals (computed) (computed; source: https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1)
- 1,620 real-task verifier scripts — apps/*/real-tasks/task_*.py at commit 1ca7781 (260 easy, 260 medium, 1,100 hard by file prefix) (computed) (computed; source: https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1)
- 737 functional-test verifier scripts — apps/*/function-tasks/task_*.py at commit 1ca7781 (computed) (computed; source: https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1)

The repository holds three more environment directories than the blog's release table, so state which environments and task suite (real-tasks or function-tasks) a score covers. Keep the agent harness, vision setting, step limit and task timeout with any score. No benchmark run was executed for this review.

## License declarations

- code: MIT — https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/README.md (retrieved 2026-10-20T04:06:22Z; SHA-256 4565d5631292349f2e534fc1602425639d4874cbff64778a28f3ccd6f3086081)
- https://webarena.dev/webarena-infinity/content.md (retrieved 2026-10-20T04:06:17Z; SHA-256 f55d394a98ab18b01578d329c6bfe43de90be336051e6e479c730c39e4181f2b)
- https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1 (retrieved 2026-10-20T04:06:17Z; SHA-256 1680aa208a7a5c4615b642a4cfeeb70d61967f0e774fe37e63c22c18800dd3fa)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/run_eval_parallel.py (retrieved 2026-10-20T04:06:21Z; SHA-256 b4a55c3e5bd0479dd70ab660c190aa10c08ec253d86224fa378fe75fb8f3a920)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/tasks.py (retrieved 2026-10-20T04:06:22Z; SHA-256 a36959f9907e486c768fb42f78f58335df8e7fdd8be9216db54ff51c5bf012a8)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/agents.py (retrieved 2026-10-20T04:06:22Z; SHA-256 4c2819c8126df79a979586ad874eecb947c414ba6356d791254bafe16994886e)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/vision_agents.py (retrieved 2026-10-20T04:06:22Z; SHA-256 03c1cf3728ac0977ed56a9b1dfe52a0bef979443802905d0ea16fa1d88bfd5dc)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/docs/environment-protocol.md (retrieved 2026-10-20T04:06:22Z; SHA-256 21a54a5f85b4cc75539af061d8b066fa582941fc40268d1052dfe17062d46d44)
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/LICENSE (retrieved 2026-10-20T04:07:54Z; SHA-256 8954170f22d127cd7d0b7d1d62c25356d0989167eec26e68c69782892e480b94)
