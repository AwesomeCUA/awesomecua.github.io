---
title: "How to choose a GUI-agent benchmark | AwesomeCUA"
url: https://awesomecua.com/guides/gui-agent-benchmarks/
updated: 2026-11-12
type: guide
lang: en
---

# How to choose a GUI-agent benchmark

Choose a benchmark by the capability and environment you need to measure. Screenshot target localization, live website navigation, Android workflows, and cross-application desktop tasks answer different questions.

| Benchmark | Environment | Primary focus |
| --- | --- | --- |
| [OSWorld](https://arxiv.org/abs/2404.07972) | Real desktop environments | Task outcomes checked through execution and application/system state. |
| [WebArena](https://arxiv.org/abs/2307.13854) | Reproducible websites | Functional completion of web tasks. |
| [AndroidWorld](https://arxiv.org/abs/2405.14573) | Android applications | Parameterized interactive tasks with initialization and success checks. |
| [ScreenSpot-Pro](https://arxiv.org/abs/2504.07981) | Professional interface screenshots | Precise localization of requested GUI targets. |

[Compare source-reviewed benchmark protocols, task populations, and interfaces](https://awesomecua.com/compare/benchmarks/).

## Which benchmark is best?

There is no single answer without a deployment target. For a desktop assistant, start with desktop task execution. For a browser agent, use web tasks and the relevant site conditions. For mobile control, test the mobile environment. For a grounding model, isolate target localization before interpreting end-to-end task outcomes. This recommendation follows from the different tasks defined by the linked benchmark papers.

## What must be recorded with a score?

- The benchmark version or commit and task split.
- The exact model checkpoint, agent harness, tools, and observation interface.
- The action or step budget and any retries or multiple attempts.
- The evaluator, success criterion, and aggregation method.
- The environment setup, run date, and whether sites or apps changed.
- Whether the result was reproduced independently or reported by the publisher.

Without these details, apparently similar percentages may refer to different experiments. Rank static grounding accuracy and completed-task rate separately.

## How do I check reproducibility?

Follow the benchmark’s current official setup and evaluation instructions. Compare them with the version used in the paper. The current [OSWorld repository](https://github.com/xlang-ai/OSWorld), [WebArena repository](https://github.com/web-arena-x/webarena), and [AndroidWorld repository](https://github.com/google-research/android_world) are starting points. A reproduction succeeds when your run matches the reported setup and results.

## Where can I find more benchmarks?

Browse the [reviewed benchmark directory](https://awesomecua.com/categories/benchmark/) or use the [interactive benchmark filter](https://awesomecua.com/?kind=benchmark#catalog). Each resource exposes its primary evidence and any recorded specifications.

Editorial update: 2026-10-16.
