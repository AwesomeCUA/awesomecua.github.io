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

| Your task | Start here | What you can find |
| --- | --- | --- |
| Find papers | [Research library](https://awesomecua.com/papers/) · [Topics](https://awesomecua.com/topics/) | Reviewed papers by year and topic, with original sources. |
| Choose a benchmark | [Benchmark guide](https://awesomecua.com/guides/gui-agent-benchmarks/) | Platforms, tasks, evaluators, and versions to compare. |
| Find training data | [Training-data guide](https://awesomecua.com/guides/gui-agent-training-data/) | Supervision, splits, count units, and data licenses. |
| Build an agent | [Agents](https://awesomecua.com/categories/agent/) · [Frameworks](https://awesomecua.com/categories/framework/) | Implementation entry points, supported platforms, and papers. |
| Use RAG or an agent | [Agent guide](https://awesomecua.com/agents/) · [Data hub](https://awesomecua.com/data/) | Complete records or retrieval documents with review states and sources. |
| Trace papers to assets | [Paper–asset connections](https://awesomecua.com/connections/) | Code, datasets, and models linked through reviewed primary evidence. |

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

**1,674 curated resources** · **1,202 reviewed papers and surveys** · **103 discovery documents**

Evidence snapshot: 2026-11-06T04:18:34Z. Only curated resources are counted. 1,983 records awaiting review and 1,970 discovered candidates are listed separately in the [coverage ledger](https://awesomecua.com/coverage/). Resources are not independent projects.

## What is a computer-use agent?

A computer-use agent observes software interfaces, chooses and executes actions, and checks progress toward a user goal. It may operate a browser, desktop application, or phone, sometimes combining graphical interaction with code and tools. See [the primary-source introduction](https://awesomecua.com/guides/what-are-computer-use-agents/) and [reviewed research](https://awesomecua.com/papers/).

## Explore the ecosystem

| Category | Curated | Browse |
| --- | ---: | --- |
| Research papers | 1,183 | [Open directory](https://awesomecua.com/categories/paper/) |
| Surveys | 19 | [Open directory](https://awesomecua.com/categories/survey/) |
| Learning resources | 2 | [Open directory](https://awesomecua.com/categories/learning/) |
| Models and checkpoints | 98 | [Open directory](https://awesomecua.com/categories/model/) |
| Datasets | 86 | [Open directory](https://awesomecua.com/categories/dataset/) |
| Benchmarks | 90 | [Open directory](https://awesomecua.com/categories/benchmark/) |
| Agents | 45 | [Open directory](https://awesomecua.com/categories/agent/) |
| Frameworks | 79 | [Open directory](https://awesomecua.com/categories/framework/) |
| Infrastructure | 14 | [Open directory](https://awesomecua.com/categories/infrastructure/) |
| Tools | 22 | [Open directory](https://awesomecua.com/categories/tool/) |
| Products | 20 | [Open directory](https://awesomecua.com/categories/product/) |
| Publishers | 16 | [Open directory](https://awesomecua.com/categories/company/) |

Category pages highlight reviewed resources; the [interactive catalog](https://awesomecua.com/#catalog) and downloads also expose metadata-only records with their review state.

## Research reading list

- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.com/resources/arxiv-2610-26071/) — CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks. [Original paper](https://arxiv.org/abs/2610.26071).
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/resources/arxiv-2610-26203/) — FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs. [Original paper](https://arxiv.org/abs/2610.26203).
- [VeriCUA: Learning Proactive Verification for Reliable GUI Agent Rewards](https://awesomecua.com/resources/arxiv-2610-26469/) — VeriCUA trains a Judge to select verification checks and stopping decisions while a frozen Probe inspects the post-task GUI. Single-attempt reinforcement learning balances verdict correctness and Probe use. [Original paper](https://arxiv.org/abs/2610.26469).
- [ScopeMem: Latent Memory That Learns Where to Revise Frozen GUI Agents](https://awesomecua.com/resources/arxiv-2610-26503/) — ScopeMem conditions latent-memory prefixes on a frozen GUI agent's initial action and trains them to correct errors while preserving correct decisions. Its evaluation separates action repairs from harmful revisions. [Original paper](https://arxiv.org/abs/2610.26503).
- [Tandem: Serving Hybrid Linear-Attention GUI Agents on Mobile NPUs](https://awesomecua.com/resources/arxiv-2610-26660/) — Tandem serves hybrid GUI-agent models on Android NPUs using divergence-point state checkpoints, rollback-aware speculative decoding and idle power release between request bursts. [Original paper](https://arxiv.org/abs/2610.26660).
- [Comparing Computer Use Behavior Across Multiple Levels of Abstraction](https://awesomecua.com/resources/arxiv-2610-26703/) — MAP annotates computer-use traces at linked operation, function/consequence, method and goal levels, then compares human and agent workflows through sequence, pattern and effort metrics. [Original paper](https://arxiv.org/abs/2610.26703).
- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.com/resources/arxiv-2610-26828/) — WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning. [Original paper](https://arxiv.org/abs/2610.26828).
- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.com/resources/arxiv-2610-24372/) — Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision. [Original paper](https://arxiv.org/abs/2610.24372).
- [PersonaCUABench: Benchmarking Computer-Use Agents Serving Diverse Personas](https://awesomecua.com/resources/arxiv-2610-22990/) — PersonaCUABench varies simulated user requests and clarification dialogue over fixed web tasks, comparing task completion with requirement handling and persona-agent satisfaction ratings. [Original paper](https://arxiv.org/abs/2610.22990).
- [Adaptation of Computer Use Agents to New Software with User Manuals](https://awesomecua.com/resources/arxiv-2610-23012/) — MAGE retrieves software-manual sections into fixed execution plans and generates setup/main task-plan pairs whose GUI rollouts support application-specific policy adaptation with round-based GRPO. [Original paper](https://arxiv.org/abs/2610.23012).

[All reviewed papers and surveys](https://awesomecua.com/papers/). Annotations do not independently reproduce experimental findings.

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

[Suggest a resource or correction](https://github.com/reacher-z/Awesome-CUA/issues/new?template=resource.yml). Supply a primary source and explain uncertain facts. Global completeness is a goal, not a verified claim.

## Automatic updates

[Source catalog and scan code](https://github.com/reacher-z/Awesome-CUA) · [Scan status](https://awesomecua.com/updates/)

Discovery is scheduled every two hours at 00:07, 02:07, 04:07, 06:07, 08:07, 10:07, 12:07, 14:07, 16:07, 18:07, 20:07, 22:07 UTC. This website checks for a new source commit at :25 and :55 past each hour UTC and rebuilds from validated source data only when there is one; each publication retains its own quality gate. GitHub scheduling can be delayed; the status page records actual completion times.

New discoveries are bibliographic metadata or candidates until a separate editorial review. The publishing workflow uses repository-scoped GitHub tokens and does not require a stored personal access token.
