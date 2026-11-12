---
title: "Where to find training data for GUI agents | AwesomeCUA"
url: https://awesomecua.com/guides/gui-agent-training-data/
updated: 2026-11-12
type: guide
lang: en
---

# Where to find training data for GUI agents

Start with the supervision your model needs: screen understanding, element grounding, individual actions, or complete interaction trajectories. Then match the platform, annotation format, split, and license before downloading.

## Which data types are useful?

- Screen understanding: screenshots paired with descriptions, questions, or structural annotations.
- Grounding: an instruction and screen paired with a target element or location.
- Action prediction: observations and instructions paired with the next action.
- Trajectories: sequences of observations and actions that show how a task unfolds.

These supervision types support different objectives. Task coverage is measured by the demonstrations a dataset contains.

## What are concrete starting points?

| Resource | What to inspect |
| --- | --- |
| [Android in the Wild](https://github.com/google-research/google-research/tree/master/android_in_the_wild) | Android task demonstrations with screens, instructions, and actions; distinguish episodes from action examples. |
| [AndroidControl](https://github.com/google-research/google-research/tree/master/android_control) | High-level task goals, step instructions, screenshots, accessibility trees, and action annotations. |
| [AgentNet](https://huggingface.co/datasets/xlangai/AgentNet) | Computer-use demonstrations associated with the [OpenCUA](https://arxiv.org/abs/2508.09123) research stack. |
| [OS-Atlas data](https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data) | GUI grounding data and the publisher’s access and licensing declaration. |
| [Mind2Web](https://github.com/OSU-NLP-Group/Mind2Web) | Web-task demonstrations and generalization splits across sites and domains. |

[Compare source-reviewed dataset formats, counting units, and splits](https://awesomecua.com/compare/datasets/).

## Can I use benchmark examples for training?

Check the intended split and evaluation protocol first. Training on examples used to measure generalization can invalidate the comparison you wanted to make. Preserve the split definitions and document any overlap or filtering decisions rather than treating every downloadable task as training data.

## Does an open code repository imply open training data?

No. Code, datasets, and model weights may be distributed under different licenses. Check the current dataset card, original collection terms, access restrictions, and any upstream components. AwesomeCUA records these declarations separately and leaves unknown values empty. Rights to each asset come from its own license and terms.

## How do I compare dataset scale?

Keep units explicit: tasks, episodes, actions, screenshots, instructions, and UI elements are different quantities. A hosting platform’s size category may count packaged files rather than semantic examples. Compare the quantity that matches the intended training objective.

Continue with the [reviewed dataset directory](https://awesomecua.com/categories/dataset/) or [searchable dataset catalog](https://awesomecua.com/?kind=dataset#catalog). Use [our metadata export](https://awesomecua.com/data/) to inspect sources and licenses programmatically; it contains the resource records.

Editorial update: 2026-10-16.
