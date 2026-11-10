---
title: "AgentDojo | AwesomeCUA"
url: https://awesomecua.com/resources/github-ethz-spylab-agentdojo/
updated: 2026-10-18
type: benchmark
lang: en
---

# AgentDojo

Python benchmark package for prompt-injection security of tool-calling agents, with workspace, banking, travel and Slack suites, pluggable attacks and defenses, and a script that scores utility and attack success.

- Catalog URL: https://awesomecua.com/resources/github-ethz-spylab-agentdojo/
- Original source: https://github.com/ethz-spylab/agentdojo
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: safety-security, evaluation, tool-integration
- Evidence checked: 2026-10-18T11:06:20Z
- ID: github:ethz-spylab/agentdojo

## Limitations

Agents interact with simulated applications through function calls; it is included as an adjacent security benchmark for comparison with GUI and browser-agent safety work. The inspected v1 suite directory lists banking, slack, travel and workspace; later suite versions (v1_1 to v1_2_2) exist alongside it, so record the suite version with any score. The README warns that the package API may still change. MIT applies to the repository code.

- Record JSON: https://awesomecua.com/resources/github-ethz-spylab-agentdojo/record.json

## Structured profile

- Actions / outputs: function calls to suite tools
- Evaluation: Each user task is checked for utility, and each injection task is checked for whether the attacker goal was executed; the benchmark script combines suites, attacks and defenses.
- Focus: prompt-injection robustness, task utility under attack
- Observations: tool-call results from simulated applications
- Setting: interactive

### Count observations

- 97 user tasks — suites reported in the paper (version 3 abstract) (reported; source: https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1)
- 629 security test cases — suites reported in the paper (version 3 abstract) (reported; source: https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1)
- 4 task suites — src/agentdojo/default_suites/v1 directory listing (computed) (computed; source: https://api.github.com/repos/ethz-spylab/agentdojo/contents/src/agentdojo/default_suites/v1)

Paper counts describe the reported benchmark; later suite versions in the repository may change tasks. Keep the suite version, attack, defense and model with a result.

## License declarations

- code: MIT — https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/README.md (retrieved 2026-10-18T11:06:20Z; SHA-256 d8c6460ecce9bbf59ed300fbc74b4440188f74cd147a7611836270be49e7660e)
- https://api.github.com/repos/ethz-spylab/agentdojo (retrieved 2026-10-18T11:06:25Z; SHA-256 9ad83f42b22642a9dc444edcb45f07a8b296b36b459c951183d3d8a4f3e47f2d)
- https://api.github.com/repos/ethz-spylab/agentdojo/contents/src/agentdojo/default_suites/v1 (retrieved 2026-10-18T11:06:45Z; SHA-256 3f222c17164d5efd16c1c3b93088c5f51c0eb7d3f034581be3bbe7a4b3b2750d)
- https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1 (retrieved 2026-10-18T11:06:08Z; SHA-256 82f712f54aa9b3b42146ddc85ad8a0f6b765507bfdde986cab3344f50a88bf4b)
- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE (retrieved 2026-10-18T11:06:32Z; SHA-256 4285a071f2d382338e52b4fb0a186d952984a34d43a33d8872e1a1d8cb43401e)
- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE (retrieved 2026-10-18T11:06:32Z; SHA-256 4285a071f2d382338e52b4fb0a186d952984a34d43a33d8872e1a1d8cb43401e)
