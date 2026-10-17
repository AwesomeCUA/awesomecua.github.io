# Awesome Computer-Use Agents · AwesomeCUA

**A source-backed catalog of computer-use, GUI, browser, and mobile agents.**

[Website](https://awesomecua.github.io/) · [Research papers](https://awesomecua.github.io/papers/) · [中文指南](https://awesomecua.github.io/zh/) · [GitHub organization](https://github.com/AwesomeCUA)

**1,993 resource records** · **569 curated** · **1,724 arXiv records** · **29 discovery documents**

Evidence snapshot: 2026-10-16T13:29:25Z. Bibliography counts overlap review-state counts. Resources are not independent projects.

## What is a computer-use agent?

A computer-use agent observes software interfaces, chooses and executes actions, and checks progress toward a user goal. It may operate a browser, desktop application, or phone, sometimes combining graphical interaction with code and tools. See [the primary-source introduction](https://awesomecua.github.io/guides/what-are-computer-use-agents/) and [reviewed research](https://awesomecua.github.io/papers/).

## Explore the ecosystem

| Category | Records | Browse |
| --- | ---: | --- |
| Research papers | 1,713 | [Open directory](https://awesomecua.github.io/categories/paper/) |
| Surveys | 11 | [Open directory](https://awesomecua.github.io/categories/survey/) |
| Models and checkpoints | 48 | [Open directory](https://awesomecua.github.io/categories/model/) |
| Datasets | 43 | [Open directory](https://awesomecua.github.io/categories/dataset/) |
| Benchmarks | 60 | [Open directory](https://awesomecua.github.io/categories/benchmark/) |
| Agents | 30 | [Open directory](https://awesomecua.github.io/categories/agent/) |
| Frameworks | 31 | [Open directory](https://awesomecua.github.io/categories/framework/) |
| Infrastructure | 12 | [Open directory](https://awesomecua.github.io/categories/infrastructure/) |
| Tools | 10 | [Open directory](https://awesomecua.github.io/categories/tool/) |
| Products | 19 | [Open directory](https://awesomecua.github.io/categories/product/) |
| Publishers | 16 | [Open directory](https://awesomecua.github.io/categories/company/) |

Category pages highlight reviewed resources; the [interactive catalog](https://awesomecua.github.io/#catalog) and downloads also expose metadata-only records with their review state.

## Research reading list

- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://awesomecua.github.io/resources/arxiv-2610-22200/) — Introduces an open generalist computer-use stack combining visual and programmatic interaction, with model-controlled observation and task-state decisions. [Original paper](https://arxiv.org/abs/2610.22200).
- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2610-22234/) — Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning. [Original paper](https://arxiv.org/abs/2610.22234).
- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-22280/) — Uses weak-agent uncertainty to decide when to escalate to a stronger model and monitor its subsequent task execution. [Original paper](https://arxiv.org/abs/2610.22280).
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.github.io/resources/arxiv-2610-20939/) — Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks. [Original paper](https://arxiv.org/abs/2610.20939).
- [Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction](https://awesomecua.github.io/resources/arxiv-2610-12984/) — Aligns human screen recordings, input events, and accessibility information to derive reusable workflow skills from desktop demonstrations. [Original paper](https://arxiv.org/abs/2610.12984).
- [MedImageOSWorld: Benchmarking GUI Agents for Medical Image Consoles](https://awesomecua.github.io/resources/arxiv-2610-04800/) — Evaluates GUI agents in simulated medical-imaging consoles, separately checking workflow completion and acquisition outcomes against hidden anatomical targets. [Original paper](https://arxiv.org/abs/2610.04800).
- [Control OSWorld: An AI Control Environment for GUI Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2610-03818/) — Pairs OSWorld tasks with harmful side objectives to evaluate monitors that detect malicious behavior in computer-use agent trajectories. [Original paper](https://arxiv.org/abs/2610.03818).
- [CUAWright: A Minimal Unified Interface for Digital Agents](https://awesomecua.github.io/resources/arxiv-2610-04116/) — Studies a minimal terminal-based execution framework that lets digital agents construct tools and manage context across browser, desktop, and CAD tasks. [Original paper](https://arxiv.org/abs/2610.04116).
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.github.io/resources/arxiv-2610-00948/) — Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights. [Original paper](https://arxiv.org/abs/2610.00948).
- [DeskForge: Dense Supervision from Desktop Environments for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-02320/) — Generates dense desktop supervision by varying real application scenes and combining screenshots, accessibility trees, and window geometry. [Original paper](https://arxiv.org/abs/2610.02320).

[All reviewed papers and surveys](https://awesomecua.github.io/papers/). Annotations do not independently reproduce experimental findings.

## Papers connected to code and data

[Browse reviewed paper–asset relationships](https://awesomecua.github.io/connections/) · [Download relationships JSON](https://awesomecua.github.io/downloads/relationships.json)

## Choose a benchmark or training dataset

- [GUI-agent benchmark guide](https://awesomecua.github.io/guides/gui-agent-benchmarks/): distinguish grounding, web tasks, mobile interaction, and desktop execution.
- [Training-data guide](https://awesomecua.github.io/guides/gui-agent-training-data/): compare supervision types, platform, splits, count units, and licenses.
- [Editorial policy](https://awesomecua.github.io/about/) and [coverage ledger](https://awesomecua.github.io/coverage/): understand what was verified and what is still missing.

## Download and reuse the data

- [Full resource catalog — JSONL](https://awesomecua.github.io/downloads/catalog.jsonl)
- [Queryable database — SQLite](https://awesomecua.github.io/downloads/catalog.sqlite)
- [Data documentation](https://awesomecua.github.io/data/) · [JSON Schema](schemas/resource.schema.json)
- [Coverage JSON](https://awesomecua.github.io/downloads/coverage.json) · [Source registry](https://awesomecua.github.io/downloads/sources.json)
- [Scope decisions](https://awesomecua.github.io/downloads/exclusions.json) · [Raw arXiv archive, including excluded candidates](https://awesomecua.github.io/downloads/arxiv-archive.jsonl)
- [Machine-readable navigation](https://awesomecua.github.io/llms.txt) · [Curated Markdown](https://awesomecua.github.io/llms-full.txt) · [Research feed](https://awesomecua.github.io/feed.xml)

The downloads contain metadata and original catalog annotations, not upstream training data, model weights, or paper PDFs. Code, data, weights, and document licenses remain separate.

## Website and contributions

This repository hosts the published static website and metadata snapshot. Complete resource pages and guides work without JavaScript; interactive search adds filtering, pagination, and detail dialogs. No API keys, account, paid backend, or external analytics are required.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

GitHub Pages deploys the validated static artifact through the publication workflow. The `main` branch keeps an inspectable snapshot. Original code and annotations use [MIT](LICENSE); linked assets retain their own terms.

[Suggest a resource or correction](https://github.com/AwesomeCUA/awesomecua.github.io/issues/new?template=resource.yml). Supply a primary source and explain uncertain facts. Global completeness is a goal, not a verified claim.

## Automatic updates

[Source catalog and scan code](https://github.com/reacher-z/Awesome-CUA) · [Scan status](https://awesomecua.github.io/updates/)

Discovery runs at 08:17 and 20:17 America/Los_Angeles. This website rebuilds at 08:47 and 20:47 from validated source data. GitHub scheduling can be delayed; the status page records actual completion times.

New discoveries are bibliographic metadata or candidates until a separate editorial review. The publishing workflow uses repository-scoped GitHub tokens and does not require a stored personal access token.
