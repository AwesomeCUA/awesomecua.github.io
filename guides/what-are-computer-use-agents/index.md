---
title: "What are computer-use agents? | AwesomeCUA"
url: https://awesomecua.com/guides/what-are-computer-use-agents/
updated: 2026-11-11
type: guide
lang: en
---

# What are computer-use agents?

A computer-use agent is an AI system that observes a software interface, decides what action to take, executes it, and checks the resulting state to work toward a user’s goal. The interface may be a browser, desktop application, or mobile device.

Some systems act mainly through screenshots, clicks, and keystrokes. Others combine graphical interaction with code and tool calls. These are two execution designs, and each is compared on its own terms. See the primary descriptions of [UI-TARS](https://arxiv.org/abs/2501.12326) and [OpenGCUA](https://arxiv.org/abs/2610.22200).

## How does a computer-use agent work?

1. Observe: obtain screenshots, page structure, accessibility information, or other exposed state.
1. Plan and ground: decide a useful next step and identify the interface element or tool that can perform it.
1. Act: click, type, scroll, invoke a tool, or execute code within the system’s permitted interface.
1. Check: inspect the new state, determine progress, and retry, replan, stop, or ask for help.

This is a practical decomposition rather than a single mandated architecture. [Agent S](https://arxiv.org/abs/2410.08164) is one example that combines planning with retrieved experience and a computer interaction interface.

## Are GUI grounding and task completion the same?

No. Grounding asks whether a model can locate the correct target on a screen. Task completion additionally involves choosing the right actions, handling transitions, tracking progress, and verifying the final result. Finishing a long workflow takes more than a strong grounding score.

[ScreenSpot-Pro](https://arxiv.org/abs/2504.07981) evaluates grounding in professional interfaces, while [OSWorld](https://arxiv.org/abs/2404.07972) evaluates tasks in real computer environments. Use the benchmark appropriate to the capability you want to measure.

## Which resources should I start with?

- For desktop evaluation: [benchmarks](https://awesomecua.com/categories/benchmark/) and the OSWorld paper.
- For model behavior and perception: [GUI model families and checkpoints](https://awesomecua.com/categories/model/).
- For training: [training data and supervision types](https://awesomecua.com/guides/gui-agent-training-data/).
- For deployment: [frameworks](https://awesomecua.com/categories/framework/) and [execution environments](https://awesomecua.com/categories/infrastructure/).
- For the literature: [reviewed papers and surveys](https://awesomecua.com/papers/).

## How should I interpret this catalog?

A repository, a paper, a dataset, and a model checkpoint can describe related parts of one project. The [editorial policy](https://awesomecua.com/about/) explains how records are reviewed.

Editorial update: 2026-10-16. This guide synthesizes the linked primary research.
