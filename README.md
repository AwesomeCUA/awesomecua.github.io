# Awesome Computer-Use Agents · AwesomeCUA

**A source-backed catalog of computer-use, GUI, browser, and mobile agents.**

[Website](https://awesomecua.github.io/) · [Research papers](https://awesomecua.github.io/papers/) · [中文指南](https://awesomecua.github.io/zh/) · [GitHub organization](https://github.com/AwesomeCUA)

**1,984 resource records** · **251 curated** · **1,764 arXiv records** · **21 discovery documents**

Evidence snapshot: 2026-10-16T07:54:03Z. Bibliography counts overlap review-state counts. Resources are not independent projects.

## What is a computer-use agent?

A computer-use agent observes software interfaces, chooses and executes actions, and checks progress toward a user goal. It may operate a browser, desktop application, or phone, sometimes combining graphical interaction with code and tools. See [the primary-source introduction](https://awesomecua.github.io/guides/what-are-computer-use-agents/) and [reviewed research](https://awesomecua.github.io/papers/).

## Explore the ecosystem

| Category | Records | Browse |
| --- | ---: | --- |
| Research papers | 1,753 | [Open directory](https://awesomecua.github.io/categories/paper/) |
| Surveys | 11 | [Open directory](https://awesomecua.github.io/categories/survey/) |
| Models and checkpoints | 43 | [Open directory](https://awesomecua.github.io/categories/model/) |
| Datasets | 32 | [Open directory](https://awesomecua.github.io/categories/dataset/) |
| Benchmarks | 48 | [Open directory](https://awesomecua.github.io/categories/benchmark/) |
| Agents | 24 | [Open directory](https://awesomecua.github.io/categories/agent/) |
| Frameworks | 20 | [Open directory](https://awesomecua.github.io/categories/framework/) |
| Infrastructure | 11 | [Open directory](https://awesomecua.github.io/categories/infrastructure/) |
| Tools | 7 | [Open directory](https://awesomecua.github.io/categories/tool/) |
| Products | 19 | [Open directory](https://awesomecua.github.io/categories/product/) |
| Publishers | 16 | [Open directory](https://awesomecua.github.io/categories/company/) |

Category pages highlight reviewed resources; the [interactive catalog](https://awesomecua.github.io/#catalog) and downloads also expose metadata-only records with their review state.

## Research reading list

- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://awesomecua.github.io/resources/arxiv-2610-22200/) — Introduces an open generalist computer-use stack combining visual and programmatic interaction, with model-controlled observation and task-state decisions. [Original paper](https://arxiv.org/abs/2610.22200).
- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2610-22234/) — Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning. [Original paper](https://arxiv.org/abs/2610.22234).
- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-22280/) — Uses weak-agent uncertainty to decide when to escalate to a stronger model and monitor its subsequent task execution. [Original paper](https://arxiv.org/abs/2610.22280).
- [DeskForge: Dense Supervision from Desktop Environments for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-02320/) — Generates dense desktop supervision by varying real application scenes and combining screenshots, accessibility trees, and window geometry. [Original paper](https://arxiv.org/abs/2610.02320).
- [GoClick: Lightweight Element Grounding Model for Autonomous GUI Interaction](https://awesomecua.github.io/resources/arxiv-2604-23941/) — Studies a compact encoder-decoder grounding model and progressive training-data refinement for resource-constrained GUI interaction. [Original paper](https://arxiv.org/abs/2604.23941).
- [MedSPOT: A Workflow-Aware Sequential Grounding Benchmark for Clinical GUI](https://awesomecua.github.io/resources/arxiv-2603-19993/) — Benchmarks sequential target localization in clinical software workflows, emphasizing how early mistakes affect subsequent interaction steps. [Original paper](https://arxiv.org/abs/2603.19993).
- [OpenCUA: Open Foundations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2508-09123/) — Presents demonstration collection infrastructure, the AgentNet dataset, and a training pipeline for open computer-use models. [Original paper](https://arxiv.org/abs/2508.09123).
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2507-21953/) — Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution. [Original paper](https://arxiv.org/abs/2507.21953).
- [OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety](https://awesomecua.github.io/resources/arxiv-2507-06134/) — Evaluates agent safety across real browser, code, filesystem, shell, and messaging tools using rule-based and model-based assessments. [Original paper](https://arxiv.org/abs/2507.06134).
- [GUI-Actor: Coordinate-Free Visual Grounding for GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-03143/) — Uses an attention-based action head and a verifier to select relevant screen regions without generating coordinates as text. [Original paper](https://arxiv.org/abs/2506.03143).

[All reviewed papers and surveys](https://awesomecua.github.io/papers/). Annotations do not independently reproduce experimental findings.

## Choose a benchmark or training dataset

- [GUI-agent benchmark guide](https://awesomecua.github.io/guides/gui-agent-benchmarks/): distinguish grounding, web tasks, mobile interaction, and desktop execution.
- [Training-data guide](https://awesomecua.github.io/guides/gui-agent-training-data/): compare supervision types, platform, splits, count units, and licenses.
- [Editorial policy](https://awesomecua.github.io/about/) and [coverage ledger](https://awesomecua.github.io/coverage/): understand what was verified and what is still missing.

## Download and reuse the data

- [Full resource catalog — JSONL](https://awesomecua.github.io/downloads/catalog.jsonl)
- [Queryable database — SQLite](https://awesomecua.github.io/downloads/catalog.sqlite)
- [Data documentation](https://awesomecua.github.io/data/) · [JSON Schema](schemas/resource.schema.json)
- [Coverage JSON](https://awesomecua.github.io/downloads/coverage.json) · [Source registry](https://awesomecua.github.io/downloads/sources.json)
- [Machine-readable navigation](https://awesomecua.github.io/llms.txt) · [Curated Markdown](https://awesomecua.github.io/llms-full.txt) · [Research feed](https://awesomecua.github.io/feed.xml)

The downloads contain metadata and original catalog annotations, not upstream training data, model weights, or paper PDFs. Code, data, weights, and document licenses remain separate.

## Website and contributions

This repository hosts the published static website and metadata snapshot. Complete resource pages and guides work without JavaScript; interactive search adds filtering, pagination, and detail dialogs. No API keys, account, paid backend, or external analytics are required.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

GitHub Pages serves the `main` branch root. Original code and annotations use [MIT](LICENSE); linked assets retain their own terms.

[Suggest a resource or correction](https://github.com/AwesomeCUA/awesomecua.github.io/issues/new?template=resource.yml). Supply a primary source and explain uncertain facts. Global completeness is a goal, not a verified claim.
