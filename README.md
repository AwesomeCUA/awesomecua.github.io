<p align="center">
  <a href="https://awesomecua.com/"><img src="badges/featured-by-awesomecua-laurel.svg" alt="Featured by Awesome CUA" width="220"></a>
</p>

# Awesome Computer-Use Agents · AwesomeCUA

**A source-backed catalog of computer-use, GUI, browser, and mobile agents.**

[Website](https://awesomecua.com/) · [Research papers](https://awesomecua.com/papers/) · [中文指南](https://awesomecua.com/zh/) · [GitHub organization](https://github.com/AwesomeCUA)
[Read the English research survey](https://awesomecua.com/survey/) — an evidence-traced working manuscript with its own frozen research snapshot.


## For people, RAG systems, and agents

```sh
git clone https://github.com/reacher-z/Awesome-CUA.git
```

[Agent instructions](https://awesomecua.com/AGENTS.md) · [Agent and RAG guide](https://awesomecua.com/agents/) · [中文使用指南](https://awesomecua.com/zh/agents/) · [Complete JSONL](https://awesomecua.com/downloads/catalog.jsonl)

## Find by task

| Your task           | Start here                                                                                                                                                     | What you can find                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Find papers         | [Research library](https://awesomecua.com/papers/) · [Topics](https://awesomecua.com/topics/) · [Paper–asset connections](https://awesomecua.com/connections/) | Reviewed papers by year and topic, with original sources and the code, datasets and models linked to them through reviewed primary evidence. |
| Choose a benchmark  | [Benchmark guide](https://awesomecua.com/guides/gui-agent-benchmarks/)                                                                                         | Platforms, tasks, evaluators, and versions to compare.                                                                                       |
| Find training data  | [Training-data guide](https://awesomecua.com/guides/gui-agent-training-data/)                                                                                  | Supervision, splits, count units, and data licenses.                                                                                         |
| Build an agent      | [Agents](https://awesomecua.com/categories/agent/) · [Frameworks](https://awesomecua.com/categories/framework/)                                                | Implementation entry points, supported platforms, and papers.                                                                                |
| Use RAG or an agent | [Agent guide](https://awesomecua.com/agents/) · [Data hub](https://awesomecua.com/data/)                                                                       | Complete records or retrieval documents with review states and sources.                                                                      |

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

**4,248 curated resources** · **1,690 reviewed papers and surveys** · **104 discovery documents**

Evidence snapshot: 2026-11-07T05:19:53Z. 451 records awaiting review and 1,090 discovered candidates are listed in the [coverage ledger](https://awesomecua.com/coverage/).

## What is a computer-use agent?

A computer-use agent observes software interfaces, chooses and executes actions, and checks progress toward a user goal. It may operate a browser, desktop application, or phone, sometimes combining graphical interaction with code and tools. See [the primary-source introduction](https://awesomecua.com/guides/what-are-computer-use-agents/) and [reviewed research](https://awesomecua.com/papers/).

## Explore the ecosystem

| Category | Curated | Browse |
| --- | ---: | --- |
| Research papers | 1,661 | [Open directory](https://awesomecua.com/categories/paper/) |
| Surveys | 29 | [Open directory](https://awesomecua.com/categories/survey/) |
| Learning resources | 10 | [Open directory](https://awesomecua.com/categories/learning/) |
| Models and checkpoints | 210 | [Open directory](https://awesomecua.com/categories/model/) |
| Datasets | 158 | [Open directory](https://awesomecua.com/categories/dataset/) |
| Benchmarks | 248 | [Open directory](https://awesomecua.com/categories/benchmark/) |
| Agents | 372 | [Open directory](https://awesomecua.com/categories/agent/) |
| Frameworks | 601 | [Open directory](https://awesomecua.com/categories/framework/) |
| Infrastructure | 64 | [Open directory](https://awesomecua.com/categories/infrastructure/) |
| Tools | 821 | [Open directory](https://awesomecua.com/categories/tool/) |
| Products | 57 | [Open directory](https://awesomecua.com/categories/product/) |
| Publishers | 17 | [Open directory](https://awesomecua.com/categories/company/) |

Category pages highlight reviewed resources; the [interactive catalog](https://awesomecua.com/explore/#catalog) and downloads also expose metadata-only records with their review state.

## Research reading list

- [Can LLM Agents Learn to Test? Maintaining Scoped Experience as Testing Evidence for Mobile GUI Testing](https://awesomecua.com/resources/arxiv-2611-05873/) — AdaptiTest specifies scoped, revalidated memory for an LLM-based mobile GUI tester to reuse routes and locators across read-only Android test workflows. [Original paper](https://arxiv.org/abs/2611.05873).
- [Securing Web Agents with the Compile-Then-Execute Paradigm](https://awesomecua.com/resources/arxiv-2611-06039/) — Baya compiles a web task into a program using a Trusted Website API before viewing live content, limiting how webpage prompt injections can alter agent control flow. [Original paper](https://arxiv.org/abs/2611.06039).
- [MKD2World: A Typed Spatial MarkDown World Model For Web Agents](https://awesomecua.com/resources/arxiv-2611-06544/) — Introduces MKD2World, a desktop web world model that represents interface elements in Typed Spatial Markdown and predicts post-action states, supported by AtomBlock-WebUI annotations. [Original paper](https://arxiv.org/abs/2611.06544).
- [Visual Token Routing: Learning to keep tokens that matter](https://awesomecua.com/resources/arxiv-2611-06854/) — Introduces Visual Token Routing (VTR), which selects visual tokens from current and earlier screenshots to reduce computer-use agent inference cost while retaining action-relevant information. [Original paper](https://arxiv.org/abs/2611.06854).
- [Interpretable Early Termination of Web Navigation Agents via Closed Sequential Pattern Mining](https://awesomecua.com/resources/arxiv-2611-04142/) — Applies sequential pattern mining to MiniWoB++ web-agent traces, producing reviewable failure signatures and an early-termination policy to reduce token use. [Original paper](https://arxiv.org/abs/2611.04142).
- [Voluntary Servitude: Weaponized Safety Warning Mechanisms for Controlling AI Agents](https://awesomecua.com/resources/arxiv-2611-04393/) — Studies fabricated hazard warnings in reviews that steer agents’ choices without explicit commands, including transfer to browser agents, and tests a corroboration requirement. [Original paper](https://arxiv.org/abs/2611.04393).
- [JHiMA-WebRL: A Joint Hierarchical Multi-Agent Reinforcement Learning Framework for Long-Horizon Web Tasks](https://awesomecua.com/resources/arxiv-2611-05263/) — Introduces JHiMA-WebRL, which jointly trains a task decomposer and GUI actor with hierarchical RL for long-horizon web tasks in WebArena. [Original paper](https://arxiv.org/abs/2611.05263).
- [MAGAR: Multimodal Agents for GUI-Based 3D Mechanical Assembly and Minimal Rework](https://awesomecua.com/resources/arxiv-2611-02472/) — Introduces MAGAR-Bench for GUI-based 3D mechanical assembly decisions and recovery, and MAGAR, a selective correction method for assembly outputs and actions. [Original paper](https://arxiv.org/abs/2611.02472).
- [Coati: Host-Grounded Execution for Installable Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2611-02644/) — Introduces Coati, an installable Android GUI agent that checks action outcomes with phone-side evidence, stores per-app procedures, and routes simpler steps to a fast executor. [Original paper](https://arxiv.org/abs/2611.02644).
- [From Local Skills to Long-Horizon Web Tasks: Progressive Skill Exploration for LLM Web Agents](https://awesomecua.com/resources/arxiv-2611-03116/) — Introduces SCOPE, a training method for long web-agent tasks that discovers local skills from rollouts, composes them into chains, and expands them using failure experience. [Original paper](https://arxiv.org/abs/2611.03116).

[All reviewed papers and surveys](https://awesomecua.com/papers/).

## Papers connected to code and data

[Browse reviewed paper–asset relationships](https://awesomecua.com/connections/) · [Download relationships JSON](https://awesomecua.com/downloads/relationships.json)

## Choose a benchmark or training dataset

- [GUI-agent benchmark guide](https://awesomecua.com/guides/gui-agent-benchmarks/): distinguish grounding, web tasks, mobile interaction, and desktop execution.
- [Training-data guide](https://awesomecua.com/guides/gui-agent-training-data/): compare supervision types, platform, splits, count units, and licenses.
- [Editorial policy](https://awesomecua.com/about/) and [coverage ledger](https://awesomecua.com/coverage/): understand what was verified and what is still missing.

## Download and reuse the data

- [Full resource catalog — JSONL](https://awesomecua.com/downloads/catalog.jsonl)
- [Queryable database — SQLite](https://awesomecua.com/downloads/catalog.sqlite)
- [Data documentation](https://awesomecua.com/data/) · [JSON Schema](schemas/resource.schema.json)
- [Coverage JSON](https://awesomecua.com/downloads/coverage.json) · [Source registry](https://awesomecua.com/downloads/sources.json)
- [Scope decisions](https://awesomecua.com/downloads/exclusions.json) · [Raw arXiv archive, including excluded candidates](https://awesomecua.com/downloads/arxiv-archive.jsonl)
- [Machine-readable navigation](https://awesomecua.com/llms.txt) · [Curated Markdown](https://awesomecua.com/llms-full.txt) · [Research feed](https://awesomecua.com/feed.xml)

The downloads contain metadata and original catalog annotations, not upstream training data, model weights, or paper PDFs. Code, data, weights, and document licenses remain separate.

## Website and contributions

This repository hosts the published static website and metadata snapshot. Complete resource pages and guides work without JavaScript; interactive search adds filtering, pagination, and detail dialogs. No API keys, account, paid backend, or external analytics are required.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

GitHub Pages deploys the validated static artifact through the publication workflow. The `main` branch keeps an inspectable snapshot. Original code and annotations use [MIT](LICENSE); linked assets retain their own terms.

[Suggest a resource or correction](https://github.com/reacher-z/Awesome-CUA/issues/new?template=resource.yml). Supply a primary source and explain uncertain facts.

## Automatic updates

[Source catalog and scan code](https://github.com/reacher-z/Awesome-CUA) · [Scan status](https://awesomecua.com/updates/)

Discovery is scheduled at 00:07, 08:07 and 16:07 UTC. This website checks for a new source commit at :25 and :55 past each hour UTC and rebuilds from validated source data only when there is one; each publication retains its own quality gate. GitHub scheduling can be delayed; the status page records actual completion times.

New discoveries are bibliographic metadata or candidates until a separate editorial review. The publishing workflow uses repository-scoped GitHub tokens and does not require a stored personal access token.
