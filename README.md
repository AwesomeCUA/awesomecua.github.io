<p align="center">
  <a href="https://awesomecua.github.io/"><img src="badges/featured-by-awesomecua-laurel.svg" alt="Featured by Awesome CUA" width="220"></a>
</p>

# Awesome Computer-Use Agents · AwesomeCUA

**A source-backed catalog of computer-use, GUI, browser, and mobile agents.**

[Website](https://awesomecua.github.io/) · [Research papers](https://awesomecua.github.io/papers/) · [中文指南](https://awesomecua.github.io/zh/) · [GitHub organization](https://github.com/AwesomeCUA)
[Read the English research survey](https://awesomecua.github.io/survey/) — an evidence-traced working manuscript with its own frozen research snapshot.


## For people, RAG systems, and agents

```sh
git clone https://github.com/reacher-z/Awesome-CUA.git
```

[Agent instructions](https://awesomecua.github.io/AGENTS.md) · [Agent and RAG guide](https://awesomecua.github.io/agents/) · [中文使用指南](https://awesomecua.github.io/zh/agents/) · [Complete JSONL](https://awesomecua.github.io/downloads/catalog.jsonl)

## Find by task

| Your task | Start here | What you can find |
| --- | --- | --- |
| Find papers | [Research library](https://awesomecua.github.io/papers/) · [Topics](https://awesomecua.github.io/topics/) | Reviewed papers by year and topic, with original sources. |
| Choose a benchmark | [Benchmark guide](https://awesomecua.github.io/guides/gui-agent-benchmarks/) | Platforms, tasks, evaluators, and versions to compare. |
| Find training data | [Training-data guide](https://awesomecua.github.io/guides/gui-agent-training-data/) | Supervision, splits, count units, and data licenses. |
| Build an agent | [Agents](https://awesomecua.github.io/categories/agent/) · [Frameworks](https://awesomecua.github.io/categories/framework/) | Implementation entry points, supported platforms, and papers. |
| Use RAG or an agent | [Agent guide](https://awesomecua.github.io/agents/) · [Data hub](https://awesomecua.github.io/data/) | Complete records or retrieval documents with review states and sources. |
| Trace papers to assets | [Paper–asset connections](https://awesomecua.github.io/connections/) | Code, datasets, and models linked through reviewed primary evidence. |

<details>
<summary>Local examples (after cloning; Python 3.11+, no dependencies required)</summary>

```sh
cd Awesome-CUA
python3 scripts/catalog.py search "grounding" --kind paper --status curated --limit 0 --json
python3 scripts/catalog.py search --kind benchmark --environment web --status curated --limit 0 --json
python3 scripts/catalog.py search --kind dataset --environment android --status curated --limit 0 --json
python3 scripts/catalog.py search --kind framework --status curated --limit 0 --json
python3 scripts/export_rag.py --output dist/rag-documents.jsonl
python3 scripts/catalog.py get arxiv:2404.07972 --related --json
```

</details>

**3,175 resource records** · **1,614 curated** · **2,715 paper and survey records** · **54 discovery documents**

Evidence snapshot: 2026-10-18T13:06:20.028238+00:00. Bibliography counts overlap review-state counts. Resources are not independent projects.

## What is a computer-use agent?

A computer-use agent observes software interfaces, chooses and executes actions, and checks progress toward a user goal. It may operate a browser, desktop application, or phone, sometimes combining graphical interaction with code and tools. See [the primary-source introduction](https://awesomecua.github.io/guides/what-are-computer-use-agents/) and [reviewed research](https://awesomecua.github.io/papers/).

## Explore the ecosystem

| Category | Records | Browse |
| --- | ---: | --- |
| Research papers | 2,697 | [Open directory](https://awesomecua.github.io/categories/paper/) |
| Surveys | 18 | [Open directory](https://awesomecua.github.io/categories/survey/) |
| Models and checkpoints | 98 | [Open directory](https://awesomecua.github.io/categories/model/) |
| Datasets | 86 | [Open directory](https://awesomecua.github.io/categories/dataset/) |
| Benchmarks | 88 | [Open directory](https://awesomecua.github.io/categories/benchmark/) |
| Agents | 43 | [Open directory](https://awesomecua.github.io/categories/agent/) |
| Frameworks | 75 | [Open directory](https://awesomecua.github.io/categories/framework/) |
| Infrastructure | 14 | [Open directory](https://awesomecua.github.io/categories/infrastructure/) |
| Tools | 20 | [Open directory](https://awesomecua.github.io/categories/tool/) |
| Products | 20 | [Open directory](https://awesomecua.github.io/categories/product/) |
| Publishers | 16 | [Open directory](https://awesomecua.github.io/categories/company/) |

Category pages highlight reviewed resources; the [interactive catalog](https://awesomecua.github.io/#catalog) and downloads also expose metadata-only records with their review state.

## Research reading list

- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://awesomecua.github.io/resources/arxiv-2610-22200/) — Introduces an open generalist computer-use stack combining visual and programmatic interaction, with model-controlled observation and task-state decisions. [Original paper](https://arxiv.org/abs/2610.22200).
- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2610-22234/) — Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning. [Original paper](https://arxiv.org/abs/2610.22234).
- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-22280/) — Uses weak-agent uncertainty to decide when to escalate to a stronger model and monitor its subsequent task execution. [Original paper](https://arxiv.org/abs/2610.22280).
- [Teaching Agents in their Own Style: Blackbox Teacher Distillation for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-19834/) — Introduces WebKD, which repairs failed student web-agent trajectories with minimal teacher edits and trains on corrections that preserve the student's reasoning style. [Original paper](https://arxiv.org/abs/2610.19834).
- [How GUI Agents Fail: GraceBench for Execution Stability Diagnosis](https://awesomecua.github.io/resources/arxiv-2610-19900/) — Introduces GraceBench, using application transition graphs and recorded interaction evidence to diagnose deviations, loops, and recovery that final task-success scores can hide. [Original paper](https://arxiv.org/abs/2610.19900).
- [Task-State Governance: A Virtual Machine for Verifiable and Recoverable GUI Agent Execution](https://awesomecua.github.io/resources/arxiv-2610-20100/) — Presents TaskVM, an interface for specifying desired and preserved application state, checking agent actions, and exposing whether changes can be reversed or compensated. [Original paper](https://arxiv.org/abs/2610.20100).
- [Why Generate a Click? Plug-in Decision Heads for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-20107/) — Adds decision heads to a frozen vision-language generator for selecting web actions and targets, with a confidence gate that falls back to text generation. [Original paper](https://arxiv.org/abs/2610.20107).
- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-20390/) — Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure. [Original paper](https://arxiv.org/abs/2610.20390).
- [Player-1: Learning to Play from Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2610-20584/) — Extends computer-use policies to game control through synthetic training environments and richer keyboard and pointer actions. Its evaluation concerns games rather than ordinary productivity workflows. [Original paper](https://arxiv.org/abs/2610.20584).
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.github.io/resources/arxiv-2610-20939/) — Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks. [Original paper](https://arxiv.org/abs/2610.20939).

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

[Suggest a resource or correction](https://github.com/reacher-z/Awesome-CUA/issues/new?template=resource.yml). Supply a primary source and explain uncertain facts. Global completeness is a goal, not a verified claim.

## Automatic updates

[Source catalog and scan code](https://github.com/reacher-z/Awesome-CUA) · [Scan status](https://awesomecua.github.io/updates/)

Discovery is scheduled three times daily at 00:17, 08:17, 16:17 UTC. This website rebuilds at 01:47, 09:47, 17:47 UTC from validated source data. Publication is scheduled 90 minutes after each scan slot and retains its own quality gate. GitHub scheduling can be delayed; the status page records actual completion times.

New discoveries are bibliographic metadata or candidates until a separate editorial review. The publishing workflow uses repository-scoped GitHub tokens and does not require a stored personal access token.
