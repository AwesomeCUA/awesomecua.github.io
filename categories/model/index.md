---
title: "Computer-use agent models and checkpoints | AwesomeCUA"
url: https://awesomecua.com/categories/model/
updated: 2026-11-10
type: category
lang: en
---

# Computer-use agent models and checkpoints

Computer-use models are vision-language and GUI-specialized checkpoints that read screens and output target coordinates or actions. Entries cover model families and released checkpoints, many hosted on Hugging Face.

> 475 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-14T00:33:48Z.

HTML page: https://awesomecua.com/categories/model/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Each record is reviewed against its primary sources. Code, data, weights and document licenses are recorded separately.

## How to choose

| Model | Platform | License | Paper | Linked records |
| --- | --- | --- | --- | --- |
| [UI-TARS](https://awesomecua.com/resources/github-bytedance-ui-tars/) | Cross-platform | [Apache-2.0 (code)](https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE) | [arXiv 2501.12326](https://awesomecua.com/resources/arxiv-2501-12326/) | 28 |
| [SeeClick](https://awesomecua.com/resources/github-njucckevin-seeclick/) | Cross-platform | [Apache-2.0 (code)](https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE) | [arXiv 2401.10935](https://awesomecua.com/resources/arxiv-2401-10935/) | 19 |
| [Holo Model Family](https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/) | Cross-platform | — | — | 13 |
| [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/) | — | [Apache-2.0 (weights)](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) | — | 11 |
| [ShowUI](https://awesomecua.com/resources/github-showlab-showui/) | Cross-platform | [Apache-2.0 (code)](https://raw.githubusercontent.com/showlab/ShowUI/HEAD/LICENSE) | [arXiv 2411.17465](https://awesomecua.com/resources/arxiv-2411-17465/) | 10 |
| [Aguvis](https://awesomecua.com/resources/github-xlang-ai-aguvis/) | Cross-platform | — | [arXiv 2412.04454](https://awesomecua.com/resources/arxiv-2412-04454/) | 9 |

## Questions

### Which models are mentioned most in the catalog?

[UI-TARS](https://awesomecua.com/resources/github-bytedance-ui-tars/) (25 records), [SeeClick](https://awesomecua.com/resources/github-njucckevin-seeclick/) (18 records) and [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/) (11 records) are mentioned in the reviewed sources of the most other catalog records.

### Which platforms do these models cover?

Of 475 reviewed models, 190 are tagged web, 179 desktop, 144 cross-platform and 101 mobile; 90 have no platform recorded. An entry tagged with several platforms counts under each.

### How many models are hosted on Hugging Face?

377 of 475 models link a Hugging Face model repository, for example [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/), [Holo4 27B BF16](https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/) and [Holo4 35B-A3B BF16](https://awesomecua.com/resources/url-16083a0225a60882c704/).

### Which licenses do models declare?

The most common declared licenses are Apache-2.0 (251), MIT (86) and licenses marked “other” (34). 75 of 475 have no declared license in their record.

### How is this list ordered?

By the number of catalog records whose reviewed sources mention each entry, most first, then by name. The sort menu above the list switches to A–Z.

---

## UI-TARS

Native GUI agent models; UI-TARS-1.5 adds reinforcement-learned reasoning before acting and an open 7B checkpoint, and UI-TARS-2 extends to games, code and tool use.

- Catalog URL: https://awesomecua.com/resources/github-bytedance-ui-tars/
- Original source: https://github.com/bytedance/UI-TARS
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, planning
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:bytedance/ui-tars

- Record JSON: https://awesomecua.com/resources/github-bytedance-ui-tars/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 0c4feb17b657c0c9a71d7e0c5e2142abbd19bb5cff22e6cd3b6b082644c98ee7)
- https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## SeeClick

GUI grounding model trained to locate visual interface elements.

- Catalog URL: https://awesomecua.com/resources/github-njucckevin-seeclick/
- Original source: https://github.com/njucckevin/SeeClick
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:njucckevin/seeclick

- Record JSON: https://awesomecua.com/resources/github-njucckevin-seeclick/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/readme.md (retrieved 2026-10-16T06:36:00Z; SHA-256 c4112415bec58fc77f9a1e8fa98f8d602c5d382747579dfda9f866900c55995c)
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## Qwen2-VL-7B-Instruct

An instruction-tuned 7B multimodal model for image and video understanding; its card describes visually guided operation of mobile devices.

- Catalog URL: https://awesomecua.com/resources/url-b9c90048411606b00db0/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: mobile-navigation, screen-understanding
- Evidence checked: 2026-11-09T05:05:02Z
- ID: url:b9c90048411606b00db0

### Limitations

The repository contains model weight shards and inference examples using Transformers. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b9c90048411606b00db0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-7B-Instruct (retrieved 2026-11-09T05:05:02Z; SHA-256 650d50a34596177605aed04826278f05cc1a146486913e05efe7db71803b50d0)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-7B-Instruct (retrieved 2026-11-09T05:05:02Z; SHA-256 650d50a34596177605aed04826278f05cc1a146486913e05efe7db71803b50d0)

---

## Aguvis

Vision-based GUI agent models with unified action representations.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-aguvis/
- Original source: https://github.com/xlang-ai/aguvis
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, planning
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:xlang-ai/aguvis

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-aguvis/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)

---

## GUI-Actor

GUI grounding model with attention-based action localization.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-gui-actor/
- Original source: https://github.com/microsoft/GUI-Actor
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:microsoft/gui-actor

- Record JSON: https://awesomecua.com/resources/github-microsoft-gui-actor/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 98a96c38494df4963951e32b81ec4effebe4c8a812ab8d9e7d185d59e86fe2fc)

---

## Holo4 27B BF16

Dense 27B computer-use checkpoint from H Company built on Qwen3.8-27B; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/
- Original source: https://huggingface.co/Hcompany/Holo4-27B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, tool-integration
- Evidence checked: 2026-10-18T16:09:32Z
- ID: url:acd43f38167ba02e7ff8

### Limitations

This is the full-precision BF16 Holo4-27B repository; the card lists FP8, NVFP4 and Q4 GGUF builds as separate repositories and names web, desktop and mobile as target environments. config.json declares Qwen3_5ForConditionalGeneration, while the card and Hub metadata name Qwen/Qwen3.8-27B as the base. The manifest lists 18 Safetensors shards and the Hub reports 27,356,728,560 BF16 parameters. The card declares CC BY-NC 4.0 for the weights and also ships the base model's Apache-2.0 text. OSWorld, OSWorld 2.0 and AutomationBench scores and costs on the card are publisher claims.

- Record JSON: https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md

- weights review: Publisher model-card declaration for the Holo4-27B weights, matched by the repository's CC BY-NC 4.0 LICENSE file; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md, https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE

### Primary evidence

- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md (retrieved 2026-10-18T16:09:32Z; SHA-256 2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123)
- https://huggingface.co/api/models/Hcompany/Holo4-27B (retrieved 2026-10-18T16:09:31Z; SHA-256 32d1105195420bd56f24e9267bbbfd543a407d53468318c2387695fd71faa480)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/config.json (retrieved 2026-10-18T16:09:32Z; SHA-256 c0dac651abc94fc028da5ecef306b23c795ec5ebbd3f30b3772c6995f34c8a44)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE (retrieved 2026-10-18T16:09:33Z; SHA-256 41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md (retrieved 2026-10-18T16:09:32Z; SHA-256 2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123)

---

## Holo4 35B-A3B BF16

A Qwen3.6-based computer-use checkpoint designed to request GUI actions, code execution and tool calls through an external agent harness.

- Catalog URL: https://awesomecua.com/resources/url-16083a0225a60882c704/
- Original source: https://huggingface.co/Hcompany/Holo4-35B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, action-prediction, tool-integration
- Evidence checked: 2026-10-17T04:11:45Z
- ID: url:16083a0225a60882c704

### Limitations

The public manifest contains 26 safetensors shards for the BF16 checkpoint and the card declares Apache-2.0. Quantized FP8/NVFP4/GGUF variants belong to the same model release. The card also contains demos and scores for Holo4-27B. No training corpus or runtime was downloaded.

- Record JSON: https://awesomecua.com/resources/url-16083a0225a60882c704/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md (retrieved 2026-10-17T04:11:45Z; SHA-256 4f1aa5006aa9adaeb5ac549e5a5f8ea164352714a00528b1afb8602812d45b44)
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B (retrieved 2026-10-17T04:11:45Z; SHA-256 7a41bdbfb4a300302a7d3633f12962505d56ba874a37292afccbd48b1bec8287)
- https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md (retrieved 2026-10-17T04:11:45Z; SHA-256 4f1aa5006aa9adaeb5ac549e5a5f8ea164352714a00528b1afb8602812d45b44)

---

## OpenCUA

Open computer-use research stack including models and training resources.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-opencua/
- Original source: https://github.com/xlang-ai/OpenCUA
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation, planning
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:xlang-ai/opencua

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-opencua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 91fed11b234775bde91bb766ee65e1015897ced6668de8e80418fcee09f8f75d)
- https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 a53fdf6cdedc93c99879b2881d8626d61b09e9a03841b3dc6ebe4e267f4fb2bf)

---

## ScaleCUA

Computer-use model family trained with cross-platform interaction data.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-scalecua/
- Original source: https://github.com/OpenGVLab/ScaleCUA
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation, planning
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:opengvlab/scalecua

- Record JSON: https://awesomecua.com/resources/github-opengvlab-scalecua/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 0538701c860afedd5d63c3839039699d8e5a14977d5c339b187ed13ad666c8fa)
- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## UI-TARS 1.5 7B

UI-TARS 1.5 GUI-agent checkpoint in the Qwen2.5-VL architecture with about 8.3B parameters stored in FP32, released under Apache-2.0 for English image-text-to-text use in Transformers.

- Catalog URL: https://awesomecua.com/resources/url-4d32ad3682ae2d71c178/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, planning
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:4d32ad3682ae2d71c178

- Record JSON: https://awesomecua.com/resources/url-4d32ad3682ae2d71c178/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B

### Primary evidence

- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-1.5-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 73b8964fb8ae2c25009dd4621549a3549d357c4c5c766ef7ed441acaef7efbc9)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-1.5-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 73b8964fb8ae2c25009dd4621549a3549d357c4c5c766ef7ed441acaef7efbc9)

---

## Hcompany/Holo4-35B-A3B-GGUF

A GGUF vision-language model for computer use that processes screenshots and tool results, then requests clicks, typing, code execution, and tool calls through an agent harness.

- Catalog URL: https://awesomecua.com/resources/url-d96a6dcdd2aa622c523b/
- Original source: https://huggingface.co/Hcompany/Holo4-35B-A3B-GGUF
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: action-prediction, screen-understanding, tool-integration
- Evidence checked: 2026-11-09T06:16:34Z
- ID: url:d96a6dcdd2aa622c523b

### Limitations

The card identifies a Q4_K_M GGUF checkpoint based on Qwen3.6-35B-A3B and declares Apache License 2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-d96a6dcdd2aa622c523b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-GGUF

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-GGUF (retrieved 2026-11-09T06:16:34Z; SHA-256 8f3181e82dc6e1540c5eb1dd0e4e6a3935e267c60921b2eb790274e9f9e3e123)
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-GGUF (retrieved 2026-11-09T06:16:34Z; SHA-256 8f3181e82dc6e1540c5eb1dd0e4e6a3935e267c60921b2eb790274e9f9e3e123)

---

## Hcompany/Holo4-35B-A3B-NVFP4

Holo4-35B-A3B-NVFP4 is an NVFP4 computer-use vision-language checkpoint that consumes screenshots and tool results to request interface actions through an agent harness.

- Catalog URL: https://awesomecua.com/resources/url-ef732d252e9eb9b04e20/
- Original source: https://huggingface.co/Hcompany/Holo4-35B-A3B-NVFP4
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: action-prediction, grounding, tool-integration
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:ef732d252e9eb9b04e20

### Limitations

The repository lists NVFP4 safetensors weights and configuration files. The card names Qwen3.6-35B-A3B as its base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-ef732d252e9eb9b04e20/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-NVFP4

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-NVFP4 (retrieved 2026-11-09T06:16:33Z; SHA-256 a9800ea79ca5e9f879cff4eef1b52303ce4c71dd6729d6f355ca65f45e4b10ce)
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-NVFP4 (retrieved 2026-11-09T06:16:33Z; SHA-256 a9800ea79ca5e9f879cff4eef1b52303ce4c71dd6729d6f355ca65f45e4b10ce)

---

## Holo4-27B-NVFP4

A quantized Holo4 vision-language checkpoint for computer use across web, desktop, and mobile interfaces, with a harness that executes requested GUI and tool actions.

- Catalog URL: https://awesomecua.com/resources/url-b1457a20d437732b60f7/
- Original source: https://huggingface.co/Hcompany/Holo4-27B-NVFP4
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: screen-understanding, tool-integration, web-navigation, mobile-navigation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:b1457a20d437732b60f7

### Limitations

The card identifies Qwen3.8-27B as the base model. It declares CC BY-NC 4.0 for the weights and says the repository includes both that license and the base model's Apache license.

- Record JSON: https://awesomecua.com/resources/url-b1457a20d437732b60f7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-4.0 — https://huggingface.co/Hcompany/Holo4-27B-NVFP4

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo4-27B-NVFP4 (retrieved 2026-11-09T05:05:20Z; SHA-256 e4ac619f39056f8679cedd3b4b462202f0495f0bf6dc0a82c3ce577f0c72cb90)
- https://huggingface.co/api/models/Hcompany/Holo4-27B-NVFP4 (retrieved 2026-11-09T05:05:20Z; SHA-256 e4ac619f39056f8679cedd3b4b462202f0495f0bf6dc0a82c3ce577f0c72cb90)

---

## Holo4-35B-A3B-FP8

An FP8 vision-language checkpoint for computer use. With an agent harness, it processes screenshots and tool results to request clicks, typing, code and tool calls.

- Catalog URL: https://awesomecua.com/resources/url-f3a7296977a39c37f693/
- Original source: https://huggingface.co/Hcompany/Holo4-35B-A3B-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: screen-understanding, action-prediction, tool-integration
- Evidence checked: 2026-11-09T05:05:14Z
- ID: url:f3a7296977a39c37f693

### Limitations

The repository provides FP8 safetensors weights and configuration files. The card names the hai-agents harness for execution and declares the weights available under Apache License 2.0.

- Record JSON: https://awesomecua.com/resources/url-f3a7296977a39c37f693/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-FP8

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-FP8 (retrieved 2026-11-09T05:05:14Z; SHA-256 370ea84521180e0f9e981b0e5b58ee1d30390e2f0efa9e049bd1c65ec534db15)
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-FP8 (retrieved 2026-11-09T05:05:14Z; SHA-256 370ea84521180e0f9e981b0e5b58ee1d30390e2f0efa9e049bd1c65ec534db15)

---

## OS-Atlas

OS-Atlas GUI action models, including grounding bases fine-tuned from InternVL2-4B and Qwen2-VL-7B-Instruct that accept any image size and output 0-1000 relative coordinates.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-atlas/
- Original source: https://github.com/OS-Copilot/OS-Atlas
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:os-copilot/os-atlas

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-atlas/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 021cf14ec9482d1dab04dfeaadc3e39cdc405a284991cd540f5eeae7dea47a12)
- https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## ShowUI

Lightweight GUI-agent vision-language-action model from Show Lab and Microsoft, released with UI-guided token selection, training code, the ShowUI-web and ShowUI-desktop datasets and vLLM inference.

- Catalog URL: https://awesomecua.com/resources/github-showlab-showui/
- Original source: https://github.com/showlab/ShowUI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, efficiency
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:showlab/showui

- Record JSON: https://awesomecua.com/resources/github-showlab-showui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/showlab/ShowUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/showlab/ShowUI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 730e51422c0ebe00cb2a1a8f4510d9914b1ea735fdb06445fde2b243da80bdd4)
- https://raw.githubusercontent.com/showlab/ShowUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 1b4977f976211c2644742e3a56cf75ecffb4c7c31d1bce456875123ba8bcd342)

---

## Holo4 27B FP8

FP8 block-quantized release of the Holo4-27B computer-use model; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/
- Original source: https://huggingface.co/Hcompany/Holo4-27B-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, tool-integration, efficiency
- Evidence checked: 2026-10-18T15:44:49Z
- ID: url:354c5b46fd423f9b1b85

### Limitations

Hub metadata marks this repository as a quantized derivative of Hcompany/Holo4-27B. Its config.json declares Qwen3_5ForConditionalGeneration with FP8 block quantization of linear layers, while the card names Qwen3.8-27B as the base; the manifest lists 18 Safetensors shards. The card declares CC BY-NC 4.0 for these weights and also ships the base model's Apache-2.0 license. OSWorld and other scores on the card are publisher claims for Holo4-27B.

- Record JSON: https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md

- weights review: Publisher model-card declaration for these quantized weights; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md (retrieved 2026-10-18T15:44:49Z; SHA-256 f474e4100f3e00498129e6cc35fafd5cbe3487e8e557a701650550a6199b4d54)
- https://huggingface.co/api/models/Hcompany/Holo4-27B-FP8 (retrieved 2026-10-18T15:44:49Z; SHA-256 e19d56b53a3e7d316f1a9fb76c55cfb29228a0284798fbadde5391cd0f24d73a)
- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/config.json (retrieved 2026-10-18T15:44:50Z; SHA-256 06bb68e88c7f4eaed33710b6639ea3a4dfa4a24d413be16121fd8d7551e4e761)
- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md (retrieved 2026-10-18T15:44:49Z; SHA-256 f474e4100f3e00498129e6cc35fafd5cbe3487e8e557a701650550a6199b4d54)

---

## Holo4 27B GGUF

Q4_K_M GGUF release of the Holo4-27B computer-use model with a separate F16 vision projector; an external harness sends it screenshots and tool results and executes the actions and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/
- Original source: https://huggingface.co/Hcompany/Holo4-27B-GGUF
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, tool-integration, efficiency
- Evidence checked: 2026-10-19T07:14:40Z
- ID: url:acfd6d395d67ce8011bb

### Limitations

Hub metadata marks this repository as a quantized derivative of Hcompany/Holo4-27B. It holds one Q4_K_M language-model GGUF file and an F16 multimodal projector GGUF; the Hub's GGUF metadata reports the qwen35 architecture, 26,895,998,464 parameters and an importance-matrix quantization. The card text is shared with the BF16 release, so its specification and its OSWorld and other scores describe Holo4-27B. The card declares CC BY-NC 4.0 for the weights and also ships the base model's Apache-2.0 text.

- Record JSON: https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md

- weights review: Publisher model-card declaration for these GGUF weights, matched by the repository's CC BY-NC 4.0 LICENSE file; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md, https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/LICENSE

### Primary evidence

- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md (retrieved 2026-10-19T07:14:40Z; SHA-256 066e6b3fa8220001ebb98747364eccb95d0ea3dd736d5b9ba5d704f9092a098d)
- https://huggingface.co/api/models/Hcompany/Holo4-27B-GGUF/revision/045834b6864fb5cee8e9c72e47ef4c19140ce932 (retrieved 2026-10-19T07:14:36Z; SHA-256 5828a5282e7379d3712843d35f52f4cd82e2864871cef7d1df3128fdbf934d46)
- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/LICENSE (retrieved 2026-10-18T16:11:12Z; SHA-256 41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0)
- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md (retrieved 2026-10-18T16:11:11Z; SHA-256 066e6b3fa8220001ebb98747364eccb95d0ea3dd736d5b9ba5d704f9092a098d)

---

## Holotron4 30B-A3B

NemotronH Nano Omni-based computer-use checkpoint in H Company's Holo4 family; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-7638e3f688374cea2217/
- Original source: https://huggingface.co/Hcompany/Holotron4-30B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, action-prediction, tool-integration
- Evidence checked: 2026-10-18T15:52:15Z
- ID: url:7638e3f688374cea2217

### Limitations

The pinned Hub manifest lists 17 BF16 safetensors shards (about 33.0B parameters by the Hub count) with custom modeling code, and config.json declares the NemotronH_Nano_Omni_Reasoning_V3 architecture. The card says the model is built on NVIDIA Nemotron 3 Nano Omni and lists it in the Holo4 family beside the Qwen-based Holo4 checkpoints; its YAML names no base_model, so none is recorded. The card declares the NVIDIA Open Model Agreement for the weights (Hub license 'other'). OSWorld, OSWorld 2.0, AutomationBench, PinchBench and ALE scores on the card are publisher figures; the FreeCAD demo on the card shows Holo4-27B, a separate checkpoint. An FP8 repository is a separate release. No weights were downloaded or run.

- Record JSON: https://awesomecua.com/resources/url-7638e3f688374cea2217/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md (retrieved 2026-10-18T15:52:15Z; SHA-256 9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c)
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B/revision/52184310f6c916e5e7d4b8f055af49fc41642574 (retrieved 2026-10-18T15:51:48Z; SHA-256 cac950916e085d7206498a31f0b8d9cecd52090d6e04f6c2a34832589e080050)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/config.json (retrieved 2026-10-18T15:51:48Z; SHA-256 b008470b6b727f11fd65a16f9e037553995b04621868e389b2480fed8ac908da)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md (retrieved 2026-10-18T15:52:15Z; SHA-256 9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c)

---

## Holotron4 30B-A3B FP8

FP8 release of Holotron4-30B-A3B, H Company's computer-use model built on Nemotron 3 Nano Omni; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-a72a105e755836154412/
- Original source: https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, tool-integration, efficiency
- Evidence checked: 2026-10-19T06:18:46Z
- ID: url:a72a105e755836154412

### Limitations

The card lists this repository as the FP8 checkpoint of Holotron4-30B-A3B within the Holo4 family, but its Hub metadata declares no base_model link. config.json declares NemotronH_Nano_Omni_Reasoning_V3 with compressed-tensors FP8 quantization of linear layers (per-channel weights, dynamic per-token activations), and the manifest lists 17 Safetensors shards. The card names no target platforms; its GUI scores are OSWorld and OSWorld 2.0, alongside MCP and terminal benchmarks. Those scores are publisher claims for Holotron4-30B-A3B. The card places the weights under the NVIDIA Open Model Agreement.

- Record JSON: https://awesomecua.com/resources/url-a72a105e755836154412/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model Agreement — https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

- weights review: Publisher model-card declaration for these FP8 weights (NVIDIA Open Model Agreement, linked from the card); code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md (retrieved 2026-10-19T06:18:46Z; SHA-256 a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26)
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B-FP8/revision/c2114d9636458189f132f9de5d912bcbc30403dd (retrieved 2026-10-19T06:18:45Z; SHA-256 f5f0b6f378377afdfd40274df0a2574d727037c74a6d6239ca5028bfe0bca4c5)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/config.json (retrieved 2026-10-18T15:57:39Z; SHA-256 f538dcbf62b570a527f939db535bbdedd4c4aea0b125dbc6a27c1f3016d28632)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md (retrieved 2026-10-19T06:18:46Z; SHA-256 a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26)

---

## InternVL

Official repository for the InternVL open-source multimodal foundation model family supporting high-resolution GUI grounding and visual reasoning.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-internvl/
- Original source: https://github.com/OpenGVLab/InternVL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: screen-understanding, grounding, video
- Evidence checked: 2026-11-04T13:12:30Z
- ID: github:opengvlab/internvl

- Record JSON: https://awesomecua.com/resources/github-opengvlab-internvl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/README.md (retrieved 2026-11-04T13:12:30Z; SHA-256 0d5338fba1508bf7ffc9ccb2479c852e20b195394376b3c648750706b1465e10)
- https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/LICENSE (retrieved 2026-11-04T13:41:37Z; SHA-256 8f03d25fbcffafa2254d4d1414bf2a38423a966006b4a6964ee21f728d610bff)

---

## Qwen3-VL / Qwen2.5-VL

Official repository for the Qwen-VL vision-language model series supporting native visual GUI grounding, computer use, and mobile navigation.

- Catalog URL: https://awesomecua.com/resources/github-qwenlm-qwen3-vl/
- Original source: https://github.com/QwenLM/Qwen3-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction, video
- Evidence checked: 2026-11-04T13:12:32Z
- ID: github:qwenlm/qwen3-vl

- Record JSON: https://awesomecua.com/resources/github-qwenlm-qwen3-vl/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/README.md (retrieved 2026-11-04T13:12:32Z; SHA-256 fc21106258c51e0b91a652eef12f5925becb146ea8b8c79a4251ac2e89a2f1ac)
- https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/LICENSE (retrieved 2026-11-04T13:41:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://api.github.com/repos/QwenLM/Qwen2.5-VL (retrieved 2026-10-18T11:06:42Z; SHA-256 16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41)
- https://api.github.com/repos/QwenLM/Qwen3-VL (retrieved 2026-10-18T11:05:59Z; SHA-256 16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41)
- https://api.github.com/repos/QwenLM/Qwen2-VL (retrieved 2026-10-18T11:06:43Z; SHA-256 16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41)

---

## UGround

Code, training data and weights for universal visual grounding of GUI elements from screenshots, including Qwen2-VL-based UGround-V1 at 2B, 7B and 72B and offline and online evaluation suites.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-uground/
- Original source: https://github.com/OSU-NLP-Group/UGround
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:osu-nlp-group/uground

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-uground/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc)
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/LICENSE.txt (retrieved 2026-10-16T06:42:00Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)

---

## CogVLM

CogVLM provides official inference and fine-tuning code for the CogVLM vision-language foundation model and the CogAgent GUI agent.

- Catalog URL: https://awesomecua.com/resources/github-thudm-cogvlm/
- Original source: https://github.com/THUDM/CogVLM
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, android
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-04T13:12:39Z
- ID: github:thudm/cogvlm

- Record JSON: https://awesomecua.com/resources/github-thudm-cogvlm/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/README.md (retrieved 2026-11-04T13:12:39Z; SHA-256 845d0c7f8f13501791a18b61b3f312bdac112273ff742eded3c926b777f0e002)
- https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/LICENSE (retrieved 2026-11-04T13:22:40Z; SHA-256 9a827651650bf66778303e003ccba1b1cd0cfcf4f9e2aa5ed77001a1ef5cde7c)

---

## DeskMind Brain

DeskMind Brain provides local models that choose the next macOS desktop action and return probabilities for typed decisions about targets and task completion.

- Catalog URL: https://awesomecua.com/resources/github-deskmind-ai-brain/
- Original source: https://github.com/deskmind-ai/brain
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: action-prediction, planning, state-tracking, imitation-learning
- Evidence checked: 2026-11-09T21:08:47Z
- ID: github:deskmind-ai/brain

### Limitations

The README describes two model sizes, MLX serving on Apple Silicon, and training with desktop DAgger and LoRA distillation. It states that code and weights use the Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/github-deskmind-ai-brain/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/deskmind-ai/brain/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/deskmind-ai/brain/HEAD/README.md (retrieved 2026-11-09T21:08:47Z; SHA-256 b2605ea621306431b70b655b0923eaa72236f92c1940af20c3f93cc5c39984ed)
- https://raw.githubusercontent.com/deskmind-ai/brain/HEAD/LICENSE (retrieved 2026-11-09T21:11:16Z; SHA-256 1ff13e6d4ef6873561edb424365c17c311cbe0807f4afa5d7dda46ab6c5c659d)

---

## DeskMind Eyes

DeskMind Eyes is a compact 4B GUI visual grounding model and training recipe for localizing click targets on desktop screenshots.

- Catalog URL: https://awesomecua.com/resources/github-deskmind-ai-eyes/
- Original source: https://github.com/deskmind-ai/eyes
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:deskmind-ai/eyes

- Record JSON: https://awesomecua.com/resources/github-deskmind-ai-eyes/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 d9b8b801f17d3448df37a7be1187f32149bac72a3427bf22f04192feea1042c4)
- https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/LICENSE (retrieved 2026-11-04T14:07:24Z; SHA-256 1ff13e6d4ef6873561edb424365c17c311cbe0807f4afa5d7dda46ab6c5c659d)

---

## GUI-Libra

GUI-Libra provides training and evaluation pipelines for native GUI agents using action-aware supervision and partially verifiable RL.

- Catalog URL: https://awesomecua.com/resources/github-gui-libra-gui-libra/
- Original source: https://github.com/GUI-Libra/GUI-Libra
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: reinforcement-learning, grounding, action-prediction
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:gui-libra/gui-libra

- Record JSON: https://awesomecua.com/resources/github-gui-libra-gui-libra/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)

---

## MiniCPM-GUIDance

MiniCPM-V checkpoint released with GUICourse and tuned on its GUIEnv, GUIAct and GUIChat data; card prompts cover next-action generation from a task and action history, and screenshot chat with grounded boxes.

- Catalog URL: https://awesomecua.com/resources/url-73570e699421a5ad04eb/
- Original source: https://huggingface.co/RhapsodyAI/minicpm-guidance
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T15:57:12Z
- ID: url:73570e699421a5ad04eb

### Limitations

GUICourse's README announces this repository as the MiniCPM-GUI weights with inference code. The card's YAML lists GUIChat, GUIEnv and GUIAct and declares Apache-2.0; its prose gives action and grounding prompt templates and a batch-size-one inference example whose output marks an element with a box. config.json gives MiniCPMVForCausalLM; the base checkpoint remains unspecified in the card. The manifest holds one PyTorch weight file. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-73570e699421a5ad04eb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

### Primary evidence

- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance (retrieved 2026-10-18T15:57:12Z; SHA-256 034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9)
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md (retrieved 2026-10-18T15:57:11Z; SHA-256 2dfe7d1252e18ad2f107e4d450440ca6217edfde26684c8763f57ec28790a7d2)
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/config.json (retrieved 2026-10-18T15:57:11Z; SHA-256 4974d4b6f3eacca89a03a88ec790ff3982ddea01fbbc01e8c37b783521c56044)
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md (retrieved 2026-10-18T15:57:11Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance (retrieved 2026-10-18T15:57:12Z; SHA-256 034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9)

---

## Qwen-GUI checkpoint

Qwen-VL checkpoint released with GUICourse and tuned on its GUIAct and GUIChat data; the card's demo draws the box and point coordinates it returns, on a 0–1000 grid, onto the input screenshot.

- Catalog URL: https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/
- Original source: https://huggingface.co/RhapsodyAI/qwen_vl_guidance
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T15:43:24Z
- ID: url:23bc63f93d3c31d74af3

### Limitations

GUICourse's README announces this repository as the Qwen-GUI weights. The card has no prose: its YAML lists GUIChat and GUIAct as datasets and declares Apache-2.0, and its only content is an inference script. config.json gives a QWenLMHeadModel with a 448-pixel visual encoder. The manifest holds one PyTorch weight file plus trainer state. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

### Primary evidence

- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance (retrieved 2026-10-18T15:43:24Z; SHA-256 c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581)
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md (retrieved 2026-10-18T15:43:24Z; SHA-256 d995100b41eaa95f3476df60d95544c4932b2c25d9df7926d77a9fc2741022d6)
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/config.json (retrieved 2026-10-18T15:43:25Z; SHA-256 2c9878d68214797ea1ba0602a6360860d4862f4cf9f56b29cb27af781e6afab3)
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md (retrieved 2026-10-18T15:43:25Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance (retrieved 2026-10-18T15:43:24Z; SHA-256 c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581)

---

## Qwen/Qwen3-VL-8B-Instruct

Qwen3-VL-8B-Instruct is a vision-language checkpoint whose card describes PC and mobile GUI operation, including element recognition and tool calls.

- Catalog URL: https://awesomecua.com/resources/url-90ae002dbf099d42fabb/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:90ae002dbf099d42fabb

### Limitations

The card declares an Apache 2.0 license and provides a Transformers loading example. The repository file list contains Safetensors weight shards and processor files.

- Record JSON: https://awesomecua.com/resources/url-90ae002dbf099d42fabb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Instruct (retrieved 2026-11-09T05:05:17Z; SHA-256 e9b6d66b592dd37dbeca49474d1c59b4cadadd6a4a0496aceb05c3e072455972)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Instruct (retrieved 2026-11-09T05:05:17Z; SHA-256 e9b6d66b592dd37dbeca49474d1c59b4cadadd6a4a0496aceb05c3e072455972)

---

## Aria-UI

Mixture-of-experts GUI grounding model with 3.9B activated parameters that can use text or interleaved image history, with released training data and an AndroidWorld agent.

- Catalog URL: https://awesomecua.com/resources/github-ariaui-aria-ui/
- Original source: https://github.com/AriaUI/Aria-UI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:ariaui/aria-ui

- Record JSON: https://awesomecua.com/resources/github-ariaui-aria-ui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480)

---

## Eagle

Eagle is a vision-language model family that includes LocateAnything, a grounding component documented for locating GUI elements alongside other visual targets.

- Catalog URL: https://awesomecua.com/resources/github-nvlabs-eagle/
- Original source: https://github.com/NVlabs/Eagle
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:57:04Z
- ID: github:nvlabs/eagle

### Limitations

The repository links model collections and contains code and documentation for several Eagle variants and LocateAnything. The README labels the code license Apache 2.0 and the model license NVIDIA License.

- Record JSON: https://awesomecua.com/resources/github-nvlabs-eagle/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/README.md (retrieved 2026-11-09T19:57:04Z; SHA-256 22ca427d29d86db52b7e9d05bc7c20317c06f4ccd5437bfc8beb9d5e61d829a1)
- https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/LICENSE (retrieved 2026-11-09T14:20:50Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Gelato

Release code for Gelato-30B-A3B, a GUI click-grounding model trained with GRPO on Click-100k: EasyR1 configs, click rewards, grounding evaluation scripts and logs, and a GPT-5-planned OS-World agent harness.

- Catalog URL: https://awesomecua.com/resources/github-mlfoundations-gelato/
- Original source: https://github.com/mlfoundations/Gelato
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, reinforcement-learning, data-generation
- Evidence checked: 2026-10-18T15:54:59Z
- ID: github:mlfoundations/gelato

### Limitations

There is no arXiv paper; the README's citation is a GitHub @misc entry. The README describes how Click-100k was filtered (OmniParser element checks, Qwen2.5-VL-7B difficulty and GTA1-7B-2507 alignment filters) and reports 63.88% on ScreenSpot-Pro, 69.15% on OS-World-G with refusal prompting, and 58.71 ± 0.66% automated OS-World success across three runs; none of these was reproduced. It also releases a UI-TARS-1.5-7B baseline trained with the same recipe as mlfoundations/Gelato-UI-TARS-1.5-7B, which has no model card. evaluation/os-world/gelato_agent.py is a modified GTA1.5 OSWorld agent: GPT-5 plans from screenshots and its tool calls become pyautogui commands, with click targets requested from a vLLM-served grounding model; it runs inside an OSWorld checkout. The repository has no license file.

- Record JSON: https://awesomecua.com/resources/github-mlfoundations-gelato/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The recursive tree at commit 2a8757d4 has no LICENSE file and the README states no license, so no code license is established.
  Sources: https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/mlfoundations/Gelato/HEAD/README.md (retrieved 2026-10-18T15:54:59Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)
- https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1 (retrieved 2026-10-18T15:53:36Z; SHA-256 264ea1121a89f66087bdc945fa132b3ffa310ca6333dbc801ed0a443764e4e4c)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md (retrieved 2026-10-18T15:53:37Z; SHA-256 c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/evaluation/os-world/gelato_agent.py (retrieved 2026-10-18T15:53:37Z; SHA-256 060968a137ee7cd396722252742ef8f7a26e81504e1d36d5110c70a25f71d445)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md (retrieved 2026-10-18T15:53:38Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)

---

## Gelato-30B-A3B

Qwen3-VL-30B-A3B-Instruct checkpoint trained with GRPO on Click-100k that returns one (x,y) click point, normalized to 0–1000, for a screenshot and an element description.

- Catalog URL: https://awesomecua.com/resources/url-46502d87b2c13515790a/
- Original source: https://huggingface.co/mlfoundations/Gelato-30B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-18T15:54:59Z
- ID: url:46502d87b2c13515790a

### Limitations

The card's example prompts for one (x,y) point and rescales it from a 0–1000 frame to pixels. The Hub manifest at revision 161e9288 lists 14 Safetensors shards; the API reports 31,070,754,032 BF16 parameters. The release README says the published weights are the step-84 checkpoint of a 100-step DAPO-style GRPO run and that all intermediate checkpoints are released, but the Hub shows only the main branch of this repository.

- Record JSON: https://awesomecua.com/resources/url-46502d87b2c13515790a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

- weights review: Model-card metadata declaration for this checkpoint; the code repository has no license file and the Click-100k data terms are separate.
  Sources: https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

### Primary evidence

- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md (retrieved 2026-10-18T15:54:59Z; SHA-256 ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b)
- https://huggingface.co/api/models/mlfoundations/Gelato-30B-A3B/revision/161e92880a1685a98caa5ef5de8813fe8a43cbb4 (retrieved 2026-10-18T15:53:38Z; SHA-256 89a8d65f413e2664c4355df9de84fc46bd9612d914df96affd05d68f88eb10e7)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md (retrieved 2026-10-18T15:53:38Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)
- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md (retrieved 2026-10-18T15:54:59Z; SHA-256 ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b)

---

## GUI-Actor 7B Qwen2-VL

GUI-Actor checkpoint fine-tuned from Qwen2-VL-7B-Instruct, with about 8.4B BF16 parameters, whose config names a pointer variant of the Qwen2-VL class, under MIT.

- Catalog URL: https://awesomecua.com/resources/url-e3e5dd82a3102689c4ea/
- Original source: https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:e3e5dd82a3102689c4ea

- Record JSON: https://awesomecua.com/resources/url-e3e5dd82a3102689c4ea/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2-VL

### Primary evidence

- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2-VL (retrieved 2026-10-16T06:50:49Z; SHA-256 c76d9811dc6152d1b33bec7f19e808c1882e86cca79bd3fea90075ac9df5c7e6)
- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2-VL (retrieved 2026-10-16T06:50:49Z; SHA-256 c76d9811dc6152d1b33bec7f19e808c1882e86cca79bd3fea90075ac9df5c7e6)

---

## Holo3 35B-A3B

A sparse Qwen3.5-based GUI-action checkpoint released for navigation and computer-use workflows.

- Catalog URL: https://awesomecua.com/resources/url-a349aace3cfde25628a8/
- Original source: https://huggingface.co/Hcompany/Holo3-35B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:a349aace3cfde25628a8

### Limitations

Fourteen public safetensors shards are present. The card declares Apache-2.0 for this release and describes a 35B-total/3B-active MoE architecture. No unpublished enterprise benchmark or training corpus is added solely from its performance claims.

- Record JSON: https://awesomecua.com/resources/url-a349aace3cfde25628a8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 0681f87b059110a4e5dff8955e9feca6c5ea118b326f729f9c0ed0fe49e42d03)
- https://huggingface.co/api/models/Hcompany/Holo3-35B-A3B (retrieved 2026-10-17T04:07:18Z; SHA-256 bc5324dd6ceea9a0cc6bf0639b99d24cdd172af3c5d247bf923fdce1dc11f582)
- https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 0681f87b059110a4e5dff8955e9feca6c5ea118b326f729f9c0ed0fe49e42d03)

---

## Holo3.1 35B-A3B

35B-A3B checkpoint of H Company's Holo3.1 family, a sparse mixture-of-experts vision-language model for web, desktop and mobile computer use with native function calling.

- Catalog URL: https://awesomecua.com/resources/url-0c9ce9f220b2fdfd70b0/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-35B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T15:44:27Z
- ID: url:0c9ce9f220b2fdfd70b0

### Limitations

Hub API at revision 2bdb9285 lists 26 BF16 safetensors shards (about 35.1B parameters) in the Qwen3_5MoeForConditionalGeneration architecture; access is open. The card is written for the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. FP8, NVFP4 and GGUF quantizations are separate Hub repositories outside this record. Benchmark results appear only as images and are not recorded. The card declares Apache-2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-0c9ce9f220b2fdfd70b0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md (retrieved 2026-10-18T15:44:27Z; SHA-256 d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B/revision/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c (retrieved 2026-10-18T15:44:13Z; SHA-256 c21a7d4a5b4439f67cc6d15e45b1a8185726ad490307fd42f9c03ebce23492ff)
- https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md (retrieved 2026-10-18T15:44:27Z; SHA-256 d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a)

---

## OmniParser v2 model bundle

A screen-parsing weight bundle containing icon-region detectors and an icon captioner for converting screenshots into agent-readable interface elements.

- Catalog URL: https://awesomecua.com/resources/url-e21ca7c859544dbf5fb6/
- Original source: https://huggingface.co/microsoft/OmniParser-v2.0
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-16T06:36:04Z
- ID: url:e21ca7c859544dbf5fb6

### Limitations

The manifest contains icon_detect/model.pt, icon_detect_v3/model.pt and icon_caption/model.safetensors. Licenses differ by folder: original YOLOv8 detector AGPL-3.0; YOLOv9-E detector and Florence-2 captioner MIT. The card’s top-level MIT metadata must not cover the entire bundle. Components remain one resource; no binaries were executed.

- Record JSON: https://awesomecua.com/resources/url-e21ca7c859544dbf5fb6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Mixed by component: icon_detect = AGPL-3.0; icon_detect_v3 = MIT; icon_caption = MIT — https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md

- weights review: The top-level Hub metadata says MIT, but the same card and folder licenses distinguish the original detector from the new detector and captioner. Preserve one model-bundle identity with a mixed license declaration.
  Sources: https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/microsoft/OmniParser/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 f4ebaafcc0ab0b9e9cc55cb587678e5c83a5bbd64469fb2cc52bc63843c5cc6d)
- https://huggingface.co/api/models/microsoft/OmniParser-v2.0 (retrieved 2026-10-17T04:03:41Z; SHA-256 1ea8af0cfd9cd716de8af8b78b2451470e1e1f22233a7286c5f40e1f496dc4be)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 6ae154d65bfc2755703440be02acf63a37b741a1101b7c42b666da93a4ed2310)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE (retrieved 2026-10-17T04:09:13Z; SHA-256 4df3c306dddaaf4baffdff5ca820cc679ac8cd6dc263c6a74517783e42fa7a3b)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE (retrieved 2026-10-17T04:06:57Z; SHA-256 646f8936b8ddcd14e13e578ff6857e368780b0d1a4f6066bee89211923a373e2)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE (retrieved 2026-10-17T04:09:13Z; SHA-256 d9a1b1e30d633d5732ea18e3cba9538d293ebc53e1a9e4e96ab739e0c5c4f1cb)

---

## OS-Genesis 4B AC

InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidControl trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-b1837823421bd08cb826/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:04:12Z
- ID: url:b1837823421bd08cb826

### Limitations

This is the 4B AndroidControl (AC) task-specific checkpoint; the card calls it a mobile action model, and the 7B and 8B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card and the OS-Genesis repository README both list it among the AC family models used for the AndroidControl benchmark. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-b1837823421bd08cb826/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md (retrieved 2026-10-18T16:04:12Z; SHA-256 db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AC/revision/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3 (retrieved 2026-10-18T16:03:42Z; SHA-256 212d8f3727374d3fb2f91de0381698199e05855d2206cf68498d36c22b213df4)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/config.json (retrieved 2026-10-18T16:03:42Z; SHA-256 bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:03:42Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md (retrieved 2026-10-18T16:04:12Z; SHA-256 db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394)

---

## OS-Genesis 4B AW

InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidWorld trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-19T06:18:22Z
- ID: url:a2362e23fdcbc73763e6

### Limitations

This is the 4B AndroidWorld (AW) task-specific checkpoint; the 7B and 8B AW checkpoints and the AndroidControl (AC) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card's table caption mentions the AndroidControl Benchmark, while its evaluation link and the OS-Genesis repository README place the AW checkpoints under AndroidWorld. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md (retrieved 2026-10-19T06:18:22Z; SHA-256 e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AW/revision/004b6a2aced3cde9d57be11508f78d8178ed4d09 (retrieved 2026-10-19T06:18:22Z; SHA-256 a26e69689546a2e4ddee5460bbe2fa55679c5fd557098f7e679cdbe323a00015)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/config.json (retrieved 2026-10-18T15:54:46Z; SHA-256 bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T15:54:47Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md (retrieved 2026-10-19T06:18:22Z; SHA-256 e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63)

---

## OS-Genesis 4B WA

The WebArena-oriented InternVL2-4B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.

- Catalog URL: https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:02:38Z
- ID: url:807dadc7dc4ba995bbbe

### Limitations

Hub API at revision 511f2ec2 lists two BF16 safetensors shards (about 4.15B parameters) in the InternVLChatModel architecture, with custom InternVL and Phi-3 modeling files; the repository is publicly accessible. The card declares Apache-2.0 and OpenGVLab/InternVL2-4B as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md (retrieved 2026-10-18T16:02:38Z; SHA-256 bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-WA/revision/511f2ec231a517e79d1f913524b9b652dfc5b98e (retrieved 2026-10-18T16:02:18Z; SHA-256 b8957e2835af052bab25c3fa939601d3fd5fd3d59f48bc1807aadfd4c3ab3df5)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:02:18Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md (retrieved 2026-10-18T16:02:38Z; SHA-256 bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea)

---

## OS-Genesis 7B AC

The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.

- Catalog URL: https://awesomecua.com/resources/url-80858580c1009eba0e98/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:80858580c1009eba0e98

### Limitations

Four public safetensors shards are present. The card declares Apache-2.0. This is the AC task-specific checkpoint; AndroidWorld and WebArena variants are separate releases.

- Record JSON: https://awesomecua.com/resources/url-80858580c1009eba0e98/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 62de4360ad62165bd4dc37d5897d6f5f88813956dff33bac63a24ded50cca118)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AC (retrieved 2026-10-17T04:03:41Z; SHA-256 c35278027cd0e36e2fbbba4861031eca2a52090f20b40fb5aa680b067bb13dac)
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 62de4360ad62165bd4dc37d5897d6f5f88813956dff33bac63a24ded50cca118)

---

## OS-Genesis 7B AW

The AndroidWorld-oriented Qwen2-VL checkpoint trained on mobile trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and screen.

- Catalog URL: https://awesomecua.com/resources/url-7afa17db925828d9a035/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T15:57:04Z
- ID: url:7afa17db925828d9a035

### Limitations

Hub API at revision 069001de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, and names the AW training file of the OS-Genesis mobile data as its training data. The OS-Genesis README lists this checkpoint under AndroidWorld, and the card points to its AndroidWorld evaluation code, but the card's family-table caption says AndroidControl. The card's example loads its processor from OS-Atlas-Base-7B. AndroidControl and WebArena variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-7afa17db925828d9a035/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md (retrieved 2026-10-18T15:57:04Z; SHA-256 d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AW/revision/069001de84358b6a83a3f34638e37df485f49bd0 (retrieved 2026-10-18T15:56:45Z; SHA-256 f118fbcc0b4622cb7eaf9134f5bb578e74ced0d07be442e8b73307296ed7dc64)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T15:56:45Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md (retrieved 2026-10-18T15:57:04Z; SHA-256 d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770)

---

## OS-Genesis 7B WA

The WebArena-oriented Qwen2-VL-7B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.

- Catalog URL: https://awesomecua.com/resources/url-93c98e3b5aea945e0877/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:04:38Z
- ID: url:93c98e3b5aea945e0877

### Limitations

Hub API at revision 710c529d lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history, and loads its processor from OS-Atlas-Base-7B. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-93c98e3b5aea945e0877/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md (retrieved 2026-10-18T16:04:38Z; SHA-256 6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-WA/revision/710c529da0975103edf7e2ad50c0f93fde690a84 (retrieved 2026-10-18T16:04:05Z; SHA-256 4d5370a7b91db042c71ed36c0178c2a556684813e34b85b3c04e7bc190830d68)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:04:24Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md (retrieved 2026-10-18T16:04:38Z; SHA-256 6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5)

---

## OS-Genesis 8B AC

AndroidControl-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-2be7f81cdca0eb8566c6/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-19T06:17:57Z
- ID: url:2be7f81cdca0eb8566c6

### Limitations

This is the AC task-specific checkpoint; the 4B and 7B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases whose results apply to those variants. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. Four public Safetensors shards are present. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-2be7f81cdca0eb8566c6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md (retrieved 2026-10-19T06:17:57Z; SHA-256 a95c10ea8df58998bd2043aa784b9f0f6c3b9cc7e2a57187bd40526761d7acba)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-AC/revision/23c57d2ddd6104166f6831b538938d610e1ac14a (retrieved 2026-10-19T06:17:56Z; SHA-256 c437af293184a7482df050a54eb1766d89b437661cf77984d9b7f2006f6bcfed)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/config.json (retrieved 2026-10-18T15:47:34Z; SHA-256 918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md (retrieved 2026-10-19T06:17:57Z; SHA-256 a95c10ea8df58998bd2043aa784b9f0f6c3b9cc7e2a57187bd40526761d7acba)

---

## OS-Genesis 8B AW

AndroidWorld-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-2eaf614de14193997f33/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T15:49:09Z
- ID: url:2eaf614de14193997f33

### Limitations

This is the AW task-specific checkpoint; the 4B and 7B AW checkpoints and the AndroidControl (AC) and web variants are separate releases whose results apply to those variants. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. Four public Safetensors shards are present. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-2eaf614de14193997f33/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md (retrieved 2026-10-18T15:49:09Z; SHA-256 f0cc611dbfad9747eb40b847ea898dc5acd5e53a7012d4f0a233d00747041c8d)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-AW (retrieved 2026-10-18T15:49:10Z; SHA-256 ecefebf79f90b77f135093ab69ab9a0c562ecac3de4c2dbd2be95b6d9fc0d15b)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/config.json (retrieved 2026-10-18T15:49:10Z; SHA-256 918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md (retrieved 2026-10-18T15:49:09Z; SHA-256 f0cc611dbfad9747eb40b847ea898dc5acd5e53a7012d4f0a233d00747041c8d)

---

## OS-Genesis 8B WA

WebArena-oriented InternVL2-8B checkpoint trained on web trajectories from OS-Genesis reverse task synthesis; the card's example prompt pairs a screenshot and accessibility tree with the instruction and action history.

- Catalog URL: https://awesomecua.com/resources/url-f2c34526651f5f57cf98/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:15:54Z
- ID: url:f2c34526651f5f57cf98

### Limitations

Hub API at revision d1ec7c7f lists four BF16 safetensors shards (about 8.08B parameters) in the InternVLChatModel architecture, with custom InternViT and InternLM2 modeling files; the repository is publicly accessible. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. The card lists this checkpoint in its WA table with the OS-Genesis web training file and points to WebArena evaluation code, although its quick-start sentence calls it a mobile action model and its table caption says AndroidControl. The OS-Genesis README lists it under Web. The card declares Apache-2.0. The 4B and 7B WA checkpoints and the AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint; no weights were loaded.

- Record JSON: https://awesomecua.com/resources/url-f2c34526651f5f57cf98/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md (retrieved 2026-10-18T16:15:54Z; SHA-256 c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-WA/revision/d1ec7c7f7dd2478d1830e04a812fd216a479e34c (retrieved 2026-10-18T16:15:55Z; SHA-256 27a4a4c781412908e220a274b39085507aed74fd56fca2471d9c2b3c7019da37)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/config.json (retrieved 2026-10-18T16:15:55Z; SHA-256 918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md (retrieved 2026-10-18T16:15:54Z; SHA-256 c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e)

---

## Qwen2.5-VL-3B-Instruct

An instruction-tuned vision-language checkpoint that reads visual layouts, localizes points or boxes, and supports computer and phone use. Its card reports screen and mobile-agent evaluations.

- Catalog URL: https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-3B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, android, web, cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, evaluation
- Evidence checked: 2026-11-09T05:05:22Z
- ID: url:52ec96785d9c0ae8e039

### Limitations

The repository contains model weights and configuration files. The card names the qwen-research license and provides Transformers usage instructions.

- Record JSON: https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct (retrieved 2026-11-09T05:05:22Z; SHA-256 63145cf94c6a3272f9b9bf335aa402a05fe796a54fbf9790f80d7ac9293854ab)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct (retrieved 2026-11-09T05:05:22Z; SHA-256 63145cf94c6a3272f9b9bf335aa402a05fe796a54fbf9790f80d7ac9293854ab)

---

## Qwen3-VL-30B-A3B-Instruct

A Qwen3-VL vision-language checkpoint whose model card describes PC and mobile GUI operation, including element recognition, tool use and task completion.

- Catalog URL: https://awesomecua.com/resources/url-7fafb31cac59ad3a7e03/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T21:09:43Z
- ID: url:7fafb31cac59ad3a7e03

### Limitations

The repository provides model weights and Transformers usage examples. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-7fafb31cac59ad3a7e03/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-30B-A3B-Instruct (retrieved 2026-11-09T21:09:43Z; SHA-256 55a6a23ce88fb8ffba5fc621303cfc568e9f0e8f0ae0b413a3080eacfdf104fb)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-30B-A3B-Instruct (retrieved 2026-11-09T21:09:43Z; SHA-256 55a6a23ce88fb8ffba5fc621303cfc568e9f0e8f0ae0b413a3080eacfdf104fb)

---

## ScreenVLM

A model that converts web page screenshots into structured markup containing UI element locations, class labels, and visible text.

- Catalog URL: https://awesomecua.com/resources/url-e3d85e557f8d53f8df64/
- Original source: https://huggingface.co/docling-project/ScreenVLM
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T19:58:08Z
- ID: url:e3d85e557f8d53f8df64

### Limitations

The card describes a ScreenParse v2 checkpoint, a retained v1 branch, and inference examples. It declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-e3d85e557f8d53f8df64/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/docling-project/ScreenVLM

### Primary evidence

- https://huggingface.co/api/models/docling-project/ScreenVLM (retrieved 2026-11-09T19:58:08Z; SHA-256 32f485c020c27777b09d2698a0fbf7ae77712b13cb75ad4d7deecd1d8e6d9c37)
- https://huggingface.co/api/models/docling-project/ScreenVLM (retrieved 2026-11-09T19:58:08Z; SHA-256 32f485c020c27777b09d2698a0fbf7ae77712b13cb75ad4d7deecd1d8e6d9c37)

---

## ShowUI-π

Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.

- Catalog URL: https://awesomecua.com/resources/github-showlab-showui-pi/
- Original source: https://github.com/showlab/showui-pi
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, automation
- Evidence checked: 2026-10-16T11:09:28Z
- ID: github:showlab/showui-pi

- Record JSON: https://awesomecua.com/resources/github-showlab-showui-pi/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef)

---

## Aria-UI/Aria-UI-base

Aria-UI/Aria-UI-base is a released GUI grounding checkpoint that maps an instruction and interface image to target coordinates. The card documents history-aware input and inference examples.

- Catalog URL: https://awesomecua.com/resources/url-2866edbea80fa34aa684/
- Original source: https://huggingface.co/Aria-UI/Aria-UI-base
- Kind: model
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: grounding, screen-understanding, interaction-history
- Evidence checked: 2026-11-09T05:05:02Z
- ID: url:2866edbea80fa34aa684

### Limitations

The repository contains sharded safetensors weights and model code. The card names rhymes-ai/Aria-Base-8K as its base model and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-2866edbea80fa34aa684/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Aria-UI/Aria-UI-base

### Primary evidence

- https://huggingface.co/api/models/Aria-UI/Aria-UI-base (retrieved 2026-11-09T05:05:02Z; SHA-256 3690c301c080841a1d4f5b38970d69b6d35c4ed1b55540e488b0a52b549aa40b)
- https://huggingface.co/api/models/Aria-UI/Aria-UI-base (retrieved 2026-11-09T05:05:02Z; SHA-256 3690c301c080841a1d4f5b38970d69b6d35c4ed1b55540e488b0a52b549aa40b)

---

## AutoGLM Phone 9B Multilingual

Multilingual variant of the AutoGLM phone-agent checkpoint for Open-AutoGLM, likewise fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters.

- Catalog URL: https://awesomecua.com/resources/url-d236e7ec7a2b0028950a/
- Original source: https://huggingface.co/zai-org/AutoGLM-Phone-9B-Multilingual
- Kind: model
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:d236e7ec7a2b0028950a

- Record JSON: https://awesomecua.com/resources/url-d236e7ec7a2b0028950a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/AutoGLM-Phone-9B-Multilingual

### Primary evidence

- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B-Multilingual (retrieved 2026-10-16T06:50:49Z; SHA-256 d66bc86d9fb61f88d1456b36cb0c2c9ab5e178b55bc9d34f307b35733f9b90bc)
- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B-Multilingual (retrieved 2026-10-16T06:50:49Z; SHA-256 d66bc86d9fb61f88d1456b36cb0c2c9ab5e178b55bc9d34f307b35733f9b90bc)

---

## CogAgent

Visual language model for GUI understanding and interaction.

- Catalog URL: https://awesomecua.com/resources/github-thudm-cogagent/
- Original source: https://github.com/THUDM/CogAgent
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:thudm/cogagent

- Record JSON: https://awesomecua.com/resources/github-thudm-cogagent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f025e4bc9d920ec982525394c69b87043aae87fbe719de4b9e973408a44211e2)
- https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 c6a77f53ba7933f07b95807e972e50259921344e777e52a6a8bc690373df2d74)

---

## CogVLM2

CogVLM2 releases high-resolution image and video vision-language models supporting visual grounding, document reading, and GUI understanding.

- Catalog URL: https://awesomecua.com/resources/github-thudm-cogvlm2/
- Original source: https://github.com/THUDM/CogVLM2
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: screen-understanding, video, grounding
- Evidence checked: 2026-11-04T13:12:40Z
- ID: github:thudm/cogvlm2

- Record JSON: https://awesomecua.com/resources/github-thudm-cogvlm2/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/README.md (retrieved 2026-11-04T13:12:40Z; SHA-256 ac03b56804c539c2550c5ad6f90b35c04f3f15df8c91c583c81c3f3bd862bf9b)
- https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/LICENSE (retrieved 2026-11-04T13:22:41Z; SHA-256 38c241871bdea2a35c5b724e543d8bf4229bc5efb8adb4420fb4620e70783d2a)

---

## cua-s1-forms

A 706,048-parameter checkpoint that scores candidate actions for GUI form fields in parallel. It is released as safetensors weights with a configuration file.

- Catalog URL: https://awesomecua.com/resources/url-721c94bd6f2f3edc35ba/
- Original source: https://huggingface.co/cua-ai/cua-s1-forms
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: action-prediction, automation, data-generation
- Evidence checked: 2026-11-09T05:05:07Z
- ID: url:721c94bd6f2f3edc35ba

### Limitations

The card describes training on 10,000 synthetic form episodes and declares an MIT license. Loading requires the cua-s1 package; the repository supplies a safetensors file and JSON configuration.

- Record JSON: https://awesomecua.com/resources/url-721c94bd6f2f3edc35ba/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/cua-ai/cua-s1-forms

### Primary evidence

- https://huggingface.co/api/models/cua-ai/cua-s1-forms (retrieved 2026-11-09T05:05:07Z; SHA-256 09edd46976fa2fcede89193595a0b2e02c9726ab867413ac9b076990650fa1e2)
- https://huggingface.co/api/models/cua-ai/cua-s1-forms (retrieved 2026-11-09T05:05:07Z; SHA-256 09edd46976fa2fcede89193595a0b2e02c9726ab867413ac9b076990650fa1e2)

---

## Dreamer-7B

WebDreamer model checkpoint that predicts the consequences of web actions from screenshots and textual descriptions.

- Catalog URL: https://awesomecua.com/resources/url-e3c1a2a2d556e4728953/
- Original source: https://huggingface.co/osunlp/Dreamer-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, planning
- Evidence checked: 2026-10-16T11:10:45Z
- ID: url:e3c1a2a2d556e4728953

- Record JSON: https://awesomecua.com/resources/url-e3c1a2a2d556e4728953/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md (retrieved 2026-10-16T11:10:45Z; SHA-256 f15e05cc2718948e344bd1fb943402797ef2e3f2130a9ce2fd94d419210c0574)
- https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md (retrieved 2026-10-16T11:10:45Z; SHA-256 f15e05cc2718948e344bd1fb943402797ef2e3f2130a9ce2fd94d419210c0574)

---

## Dreamer-7B-Classifieds

Dreamer-7B-Classifieds is a WebDreamer checkpoint for the Classifieds web domain. It supports planning by simulating the results of candidate actions.

- Catalog URL: https://awesomecua.com/resources/url-b7ccf7acb2e9d8a11853/
- Original source: https://huggingface.co/osunlp/Dreamer-7B-Classifieds
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, world-models, planning
- Evidence checked: 2026-11-09T05:05:05Z
- ID: url:b7ccf7acb2e9d8a11853

### Limitations

The repository contains sharded safetensors weights and tokenizer files. The card names Qwen2-VL-7B as its base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b7ccf7acb2e9d8a11853/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Classifieds

### Primary evidence

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Classifieds (retrieved 2026-11-09T05:05:05Z; SHA-256 e2a0db461f7d647ab0255a9d1deb0d17f512477d1d37ed465412230f87c2ef76)
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Classifieds (retrieved 2026-11-09T05:05:05Z; SHA-256 e2a0db461f7d647ab0255a9d1deb0d17f512477d1d37ed465412230f87c2ef76)

---

## Dreamer-7B-Reddit

Dreamer-7B-Reddit is a Reddit-domain checkpoint for WebDreamer. It predicts the screen state after a proposed action to support web-agent planning.

- Catalog URL: https://awesomecua.com/resources/url-dfa8047521d1f3b3aa54/
- Original source: https://huggingface.co/osunlp/Dreamer-7B-Reddit
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, world-models
- Evidence checked: 2026-11-09T05:05:01Z
- ID: url:dfa8047521d1f3b3aa54

### Limitations

The repository lists safetensors weight shards and names Qwen/Qwen2-VL-7B as its base model. The card declares an Apache 2.0 license and shows a vLLM inference command.

- Record JSON: https://awesomecua.com/resources/url-dfa8047521d1f3b3aa54/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Reddit

### Primary evidence

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Reddit (retrieved 2026-11-09T05:05:01Z; SHA-256 0363a2b2b31601371452e4132e9f41e948bb192cde0b0e377a8b034090eadd87)
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Reddit (retrieved 2026-11-09T05:05:01Z; SHA-256 0363a2b2b31601371452e4132e9f41e948bb192cde0b0e377a8b034090eadd87)

---

## Dreamer-7B-Shopping

A shopping-domain Dreamer-7B checkpoint for WebDreamer, which uses screenshot-conditioned predictions of candidate web actions to support agent planning.

- Catalog URL: https://awesomecua.com/resources/url-3173abbb295c74d0e9ec/
- Original source: https://huggingface.co/osunlp/Dreamer-7B-Shopping
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, planning, web-navigation
- Evidence checked: 2026-11-09T05:05:22Z
- ID: url:3173abbb295c74d0e9ec

### Limitations

The card names Qwen2-VL-7B as the base model, declares an Apache 2.0 license, and links the WebDreamer repository and paper.

- Record JSON: https://awesomecua.com/resources/url-3173abbb295c74d0e9ec/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Shopping

### Primary evidence

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Shopping (retrieved 2026-11-09T05:05:22Z; SHA-256 ffbcb1a16505809a96941c71cbd02364c347c48bc8ae6da412bae7a8326bf96e)
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Shopping (retrieved 2026-11-09T05:05:22Z; SHA-256 ffbcb1a16505809a96941c71cbd02364c347c48bc8ae6da412bae7a8326bf96e)

---

## EvoCUA

Computer-use model and training resources from the EvoCUA project.

- Catalog URL: https://awesomecua.com/resources/github-meituan-evocua/
- Original source: https://github.com/meituan/EvoCUA
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, planning
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:meituan/evocua

- Record JSON: https://awesomecua.com/resources/github-meituan-evocua/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 b00a072dfde61f774db6acf94fcde9bd32337b1b4f16a178998378d842bbbe4d)
- https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## Fara

Microsoft browser-use agent models that act from screenshots by predicting click coordinates without accessibility trees; Fara1.5 comes in 4B, 9B and 27B, succeeding Fara-7B.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-fara/
- Original source: https://github.com/microsoft/fara
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:microsoft/fara

- Record JSON: https://awesomecua.com/resources/github-microsoft-fara/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/fara/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/fara/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 ce11bdfe8354eb9c3b8a985dd5ddd21f88f94fb5fb9d00c9b01a76226f0b0a36)
- https://raw.githubusercontent.com/microsoft/fara/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 98a96c38494df4963951e32b81ec4effebe4c8a812ab8d9e7d185d59e86fe2fc)

---

## Gelato-UI-TARS-1.5-7B

UI-TARS-1.5-7B trained with reinforcement learning on the Click-100k dataset for 255 steps as the Gelato recipe baseline for GUI grounding. The authors report gains over GTA1-7B-2507 on ScreenSpot-Pro and OS-World-G.

- Catalog URL: https://awesomecua.com/resources/url-7617bb21031bc5fb6574/
- Original source: https://huggingface.co/mlfoundations/Gelato-UI-TARS-1.5-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:08Z
- ID: url:7617bb21031bc5fb6574

### Limitations

The repository holds BF16 safetensors weights in four shards (8B parameters per the Hub page) with a Qwen2.5-VL configuration, tokenizer and chat template, and has no model card. The Gelato GitHub repository documents the model and holds the training configurations and evaluation code.

- Record JSON: https://awesomecua.com/resources/url-7617bb21031bc5fb6574/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/mlfoundations/Gelato-UI-TARS-1.5-7B (retrieved 2026-11-10T03:01:08Z; SHA-256 a592b2687f872d401ac2aba5c93afbd743d4af814f783253db0c0881f21ad194)
- https://huggingface.co/api/models/mlfoundations/Gelato-UI-TARS-1.5-7B (retrieved 2026-11-10T03:01:08Z; SHA-256 a592b2687f872d401ac2aba5c93afbd743d4af814f783253db0c0881f21ad194)

---

## GroundNext-7B-V0

GroundNext GUI-grounding checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct with SFT then RLOO on GroundCUA desktop data; it maps a screenshot and instruction to a computer_use click call.

- Catalog URL: https://awesomecua.com/resources/url-174e10a319d62c338879/
- Original source: https://huggingface.co/ServiceNow/GroundNext-7B-V0
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-18T15:37:29Z
- ID: url:174e10a319d62c338879

### Limitations

The card's model is trained on desktop data only and reports publisher-run results on desktop grounding benchmarks and on mobile and web benchmarks (MMBench-GUI, ScreenSpot-v2). Its limitations say the model currently supports mouse clicks only, while the repository's groundcua.py system prompt declares a full computer_use tool schema with keyboard, scroll and drag actions. A 3B GroundNext model appears in the card's OSWorld table, but ServiceNow has not published a 3B checkpoint on the Hub. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen2_5_VLForConditionalGeneration config with 8,292,166,656 BF16 parameters (the card states 7.0B). Apache-2.0 is the card's weight declaration and is not extended to the base model or training data.

- Record JSON: https://awesomecua.com/resources/url-174e10a319d62c338879/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md

### Primary evidence

- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md (retrieved 2026-10-18T15:37:29Z; SHA-256 c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f)
- https://huggingface.co/api/models/ServiceNow/GroundNext-7B-V0?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=config&expand%5B%5D=safetensors&expand%5B%5D=siblings&expand%5B%5D=lastModified (retrieved 2026-10-18T15:37:30Z; SHA-256 a43aea947bea033c19fd4a02f7a9881a728bd264745680f4efe99556fdfa7ee1)
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/groundcua.py (retrieved 2026-10-18T15:37:30Z; SHA-256 8a6fbdd818e027f730677a63c03f7a0e02e7f548b48618a38cef8e7202006cca)
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md (retrieved 2026-10-18T15:37:29Z; SHA-256 c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f)

---

## GUI-Actor-3B-Qwen2.5-VL-LiteTrain

A GUI-grounding checkpoint built on Qwen2.5-VL-3B with an attention-based action head. Given a screenshot and instruction, it predicts a click location.

- Catalog URL: https://awesomecua.com/resources/url-5e0c3173aea8edd0f3b7/
- Original source: https://huggingface.co/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, action-prediction
- Evidence checked: 2026-11-09T19:57:46Z
- ID: url:5e0c3173aea8edd0f3b7

### Limitations

The repository contains model weight shards, processor files and training metadata. The card provides inference code using the GUI-Actor package and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-5e0c3173aea8edd0f3b7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain

### Primary evidence

- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain (retrieved 2026-11-09T19:57:46Z; SHA-256 646a8deab78db5fbfda4348c54577c84845b170df87ddeb97d36f072fa103a8a)
- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain (retrieved 2026-11-09T19:57:46Z; SHA-256 646a8deab78db5fbfda4348c54577c84845b170df87ddeb97d36f072fa103a8a)

---

## GUI-Actor-7B-Qwen2.5-VL

A Qwen2.5-VL-7B checkpoint for locating instructed GUI targets in screenshots. Its attention-based action head predicts click points, with inference code shown in the card.

- Catalog URL: https://awesomecua.com/resources/url-3e58eecd59c404508757/
- Original source: https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2.5-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-11-09T05:04:59Z
- ID: url:3e58eecd59c404508757

### Limitations

The repository lists sharded safetensors weights, processor files, and tokenizer files. The card names Qwen2.5-VL-7B-Instruct as its base model and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-3e58eecd59c404508757/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2.5-VL

### Primary evidence

- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2.5-VL (retrieved 2026-11-09T05:04:59Z; SHA-256 26f23fbbfa2cd832eeab9f61440ae7db69c1d34b00d4442a04fd25e30f445538)
- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2.5-VL (retrieved 2026-11-09T05:04:59Z; SHA-256 26f23fbbfa2cd832eeab9f61440ae7db69c1d34b00d4442a04fd25e30f445538)

---

## GUI-Actor-Verifier-2B

A GUI grounding verifier that checks whether a marked screenshot position matches an instruction and provides a score for candidate action positions.

- Catalog URL: https://awesomecua.com/resources/url-9b653775f6b9270304d3/
- Original source: https://huggingface.co/microsoft/GUI-Actor-Verifier-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reward-models
- Evidence checked: 2026-11-09T05:05:21Z
- ID: url:9b653775f6b9270304d3

### Limitations

The repository lists model weights and tokenizer files. The card names UI-TARS-2B-SFT as its base model and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-9b653775f6b9270304d3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/GUI-Actor-Verifier-2B

### Primary evidence

- https://huggingface.co/api/models/microsoft/GUI-Actor-Verifier-2B (retrieved 2026-11-09T05:05:21Z; SHA-256 170087cdb7fc29cf94daada957f2a8fcdc73efa0ee042f519674bddbd32311d4)
- https://huggingface.co/api/models/microsoft/GUI-Actor-Verifier-2B (retrieved 2026-11-09T05:05:21Z; SHA-256 170087cdb7fc29cf94daada957f2a8fcdc73efa0ee042f519674bddbd32311d4)

---

## GUI-G2

GUI grounding models at 3B and 7B trained with Gaussian rewards for click proximity to element centers and region coverage, with variance scaled to element size.

- Catalog URL: https://awesomecua.com/resources/github-zju-real-gui-g2/
- Original source: https://github.com/ZJU-REAL/GUI-G2
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:zju-real/gui-g2

- Record JSON: https://awesomecua.com/resources/github-zju-real-gui-g2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f9ecdf208ed4b7845ea4dbd1a7c936c016d11f7ec28f17e71338ab3c2f5b5c0d)

---

## GUI-R1

GUI action-model training and evaluation code with verifiable rewards, plus linked reinforcement-learning data and checkpoints.

- Catalog URL: https://awesomecua.com/resources/github-ritzz-ai-gui-r1/
- Original source: https://github.com/ritzz-ai/GUI-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: reinforcement-learning, grounding
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:ritzz-ai/gui-r1

- Record JSON: https://awesomecua.com/resources/github-ritzz-ai-gui-r1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d)
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Holo1 3B

The 3B Holo1 action VLM, fine-tuned from Qwen2.5-VL-3B-Instruct to act as policy, UI localizer or answer validator inside the Surfer-H browser agent.

- Catalog URL: https://awesomecua.com/resources/url-c491c446a71cac1def66/
- Original source: https://huggingface.co/Hcompany/Holo1-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, planning
- Evidence checked: 2026-10-19T06:19:41Z
- ID: url:c491c446a71cac1def66

### Limitations

The manifest lists two Safetensors shards (3,754,622,976 BF16 parameters per the Hub API) plus localization, navigation and ScreenSpot evaluation scripts. The card’s license link and LICENSE file put this checkpoint’s weights under the H Product Research License Agreement, a non-commercial research license that also defers to the Qwen Research License for the base model. The card's 89.7% WebVoyager figure is for Surfer-H with Holo1-3B, measured by the publisher. H's current models page lists later Holo generations and leaves Holo1 unlisted, leaving a family relation unrecorded.

- Record JSON: https://awesomecua.com/resources/url-c491c446a71cac1def66/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: H Product Research License Agreement — https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE

- weights review: The card declares license 'other' and links the repository LICENSE, a custom non-commercial research agreement that defers to the Qwen Research License for base-model materials; code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE

### Primary evidence

- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/README.md (retrieved 2026-10-19T06:19:41Z; SHA-256 1f7d569373b23cfadf64b062afdcc84ff4c2e597d4ec25e96dc2db2a13a35c18)
- https://huggingface.co/api/models/Hcompany/Holo1-3B/revision/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d (retrieved 2026-10-19T06:19:41Z; SHA-256 fca6cbe81ad520747c9f0911339be7604fb8e1a259f5afc132b01aad2d80b9a0)
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/config.json (retrieved 2026-10-18T16:08:06Z; SHA-256 9e259a64de67f56b23a616e241b8cd130923d2a2759f294b6e1a2471465889f9)
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE (retrieved 2026-10-18T16:08:07Z; SHA-256 97a9be6c88b4d129c783ba8389ceabf47ad4a283edd441037904adcbe6b7557c)
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/README.md (retrieved 2026-10-19T06:19:41Z; SHA-256 1f7d569373b23cfadf64b062afdcc84ff4c2e597d4ec25e96dc2db2a13a35c18)

---

## Holo1 7B

A Qwen2.5-VL-based action model released for the Surfer-H web-agent system, supporting policy, interface-localization and validation roles.

- Catalog URL: https://awesomecua.com/resources/url-f35cfcbaeb79663eabeb/
- Original source: https://huggingface.co/Hcompany/Holo1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, planning
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:f35cfcbaeb79663eabeb

### Limitations

Four public safetensors shards and example navigation/localization files are present. The model card declares Apache-2.0. Reported Surfer-H results depend on the assembled policy/localizer/validator configuration.

- Record JSON: https://awesomecua.com/resources/url-f35cfcbaeb79663eabeb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 a7e185380bb02150d761651420cccc9c4a57f67c70a5dec3b7f85af63fb8773b)
- https://huggingface.co/api/models/Hcompany/Holo1-7B (retrieved 2026-10-17T02:44:50Z; SHA-256 66076674ebbdcf9faeb408ebd137ac1283fb56b1011acd7037ebb73e09ba749d)
- https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 a7e185380bb02150d761651420cccc9c4a57f67c70a5dec3b7f85af63fb8773b)

---

## Holo1.5 72B

The 72B member of H Company's Holo1.5 series, fine-tuned from Qwen2.5-VL-72B-Instruct for UI element localization and screen question answering on web, desktop and mobile interfaces.

- Catalog URL: https://awesomecua.com/resources/url-a8e086f155c278e45c55/
- Original source: https://huggingface.co/Hcompany/Holo1.5-72B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding, reinforcement-learning
- Evidence checked: 2026-10-18T16:06:30Z
- ID: url:a8e086f155c278e45c55

### Limitations

The card describes supervised fine-tuning followed by online reinforcement learning (GRPO) on proprietary, synthetic and open-source UI data, with inputs up to 3840 x 2160 pixels. It declares a non-commercial CC BY-NC 4.0 license for the 72B weights, while the 3B and 7B Holo1.5 checkpoints carry different terms, so this declaration is not generalized to the series. The manifest lists 31 Safetensors shards and the Hub reports 73,410,777,344 BF16 parameters. Localization and QA scores on the card are publisher claims.

- Record JSON: https://awesomecua.com/resources/url-a8e086f155c278e45c55/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md

- weights review: Publisher model-card declaration for the 72B weights (non-commercial); the Qwen2.5-VL-72B-Instruct base license, code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md (retrieved 2026-10-18T16:06:30Z; SHA-256 153747d67809932cf8bd4476741ae1b1421ffb7309a754219fc91ccc8632c3be)
- https://huggingface.co/api/models/Hcompany/Holo1.5-72B (retrieved 2026-10-18T16:06:29Z; SHA-256 29fdc7d785278615785a8286c2971fc3bdb4dee9664bfc4a8d4dccf732f9335e)
- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/config.json (retrieved 2026-10-18T16:06:30Z; SHA-256 b0c1c47d5317a857b28f9d5a11a833ba14d38c573db217fced296892c686e6e2)
- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md (retrieved 2026-10-18T16:06:30Z; SHA-256 153747d67809932cf8bd4476741ae1b1421ffb7309a754219fc91ccc8632c3be)

---

## Holo2 235B-A22B

Research-preview Holo2 checkpoint, a 235B-total, 22B-active mixture-of-experts fine-tune of Qwen3-VL-235B-A22B-Thinking for UI localization and navigation on web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-dad3d02b2f9603713287/
- Original source: https://huggingface.co/Hcompany/Holo2-235B-A22B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction, reinforcement-learning
- Evidence checked: 2026-10-18T16:11:14Z
- ID: url:dad3d02b2f9603713287

### Limitations

Hub API at revision f7f85b14 lists 96 BF16 safetensors shards (about 235.7B parameters) in the Qwen3VLMoeForConditionalGeneration architecture; the repository is publicly accessible. H Company's models page calls this release a research preview. The card describes supervised fine-tuning followed by online GRPO on a mix of open-source, synthetic and human-annotated data, some of it proprietary, and reports publisher localization scores including an iterative 'agentic localization' mode. No weights were downloaded. The card declares conflicting licenses; see the license review.

- Record JSON: https://awesomecua.com/resources/url-dad3d02b2f9603713287/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md

- weights review: The card's YAML license field is cc-by-nc-4.0 and its size list gives Holo2-235B-A22B a research-only, non-commercial license, and H Company's models page lists the Holo2-235B-A22B preview under CC BY-NC 4.0; a 'License: Apache 2.0' line in the card's developer block conflicts with both and is not adopted. Code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md, https://hcompany.ai/research/models

### Primary evidence

- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md (retrieved 2026-10-18T16:11:14Z; SHA-256 4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac)
- https://huggingface.co/api/models/Hcompany/Holo2-235B-A22B/revision/f7f85b14ffdeafba313a1198407b9e2722b0341d (retrieved 2026-10-18T16:10:49Z; SHA-256 a106ad31bf308a787574abc132bf3e5201c41a348452e1de476952fd7206beae)
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/config.json (retrieved 2026-10-18T16:10:49Z; SHA-256 c24d2cbea1eff6495a9b28b3bc604afa86d20d347ef8379ed76c6139c171218e)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:10:28Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md (retrieved 2026-10-18T16:11:14Z; SHA-256 4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac)

---

## Holo2 30B-A3B

Mixture-of-experts Holo2 checkpoint fine-tuned from Qwen3-VL-30B-A3B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-ed8d5883c240b78e329f/
- Original source: https://huggingface.co/Hcompany/Holo2-30B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction, reinforcement-learning
- Evidence checked: 2026-10-18T16:06:57Z
- ID: url:ed8d5883c240b78e329f

### Limitations

Hub API at revision 81dfb86d lists 13 BF16 safetensors shards (about 31.07B parameters) and config.json declares Qwen3VLMoeForConditionalGeneration with 128 experts, 8 active per token; the repository is publicly accessible. The card YAML declares CC-BY-NC-4.0 and its size list marks the 30B-A3B as research-only and non-commercial, while a generic 'Apache 2.0' line in the shared family text applies to the 4B and 8B sizes. H Company's models page lists Holo2 at 4B, 8B and 30B-A3B under CC BY-NC 4.0. Navigation and localization scores on the card were measured by the publisher inside its Surfer 2 agent.

- Record JSON: https://awesomecua.com/resources/url-ed8d5883c240b78e329f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

- weights review: The card YAML declares cc-by-nc-4.0 and the card marks Holo2-30B-A3B as research-only (non-commercial); its generic Apache 2.0 line covers the 4B and 8B sizes and is not applied to this checkpoint.
  Sources: https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md (retrieved 2026-10-18T16:06:57Z; SHA-256 1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c)
- https://huggingface.co/api/models/Hcompany/Holo2-30B-A3B/revision/81dfb86d56aef36d2b1d53870328e97eb107cdc8 (retrieved 2026-10-18T16:06:57Z; SHA-256 51245a56fc3139e759c2ad9fdd66c682021be18709e0917827822f5d9c7e5f06)
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/config.json (retrieved 2026-10-18T16:06:57Z; SHA-256 1503651c977346f2c5569e49a58e68dbd97e18540aafc55c6be6617dd56e7464)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:06:57Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md (retrieved 2026-10-18T16:06:57Z; SHA-256 1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c)

---

## Holotron 3 Nano

Computer-use policy checkpoint that H Company post-trained from NVIDIA Nemotron 3 Nano Omni, a hybrid Mamba-MoE model with 3B of 30B parameters active per token, aimed at lower-latency agent workloads.

- Catalog URL: https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/
- Original source: https://huggingface.co/Hcompany/Holotron-3-Nano
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: grounding, action-prediction, efficiency
- Evidence checked: 2026-10-19T06:02:55Z
- ID: url:f39d67f7a4a6f869f39c

### Limitations

Hub API at revision 525e05a4 lists seven safetensors shards (about 33.01B parameters, nearly all BF16) with custom modeling code, and config.json declares NemotronH_Nano_Omni_Reasoning_V3 with 128 routed experts, 6 active per token, and a 262,144-token position limit; the repository is publicly accessible. The card text names the NVIDIA Open Model License while its metadata says 'other' and no license file ships; H's models page lists the same license. The card fetches the RADIO vision code from nvidia/C-RADIOv2-H while the release post names C-RADIOv4, so no encoder version is recorded. OSWorld-Verified, ScreenSpot-Pro, OSWorld-G and internal enterprise scores in the release post are publisher figures.

- Record JSON: https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md

- weights review: Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page.
  Sources: https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md, https://hcompany.ai/research/models

### Primary evidence

- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md (retrieved 2026-10-19T06:02:55Z; SHA-256 5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730)
- https://huggingface.co/api/models/Hcompany/Holotron-3-Nano/revision/525e05a4b21747ea5c32b09a5969bfc425d5e95c (retrieved 2026-10-19T06:02:55Z; SHA-256 2cf0bf25a4651598ffa97f1f8346995e1621d5b7c6e8d9e222da2ff5c65201e1)
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/config.json (retrieved 2026-10-19T06:02:55Z; SHA-256 c35380544d8a4e0363423330906500bf0b542a65daba17af2047637efad8c6ff)
- https://hcompany.ai/research/models (retrieved 2026-10-19T06:02:56Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://hcompany.ai/newsroom/holotron3 (retrieved 2026-10-19T06:02:56Z; SHA-256 f1a85322e0c82ee5b12cf3dbdd986ba2578330df80859a059beddd12f34b573e)
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md (retrieved 2026-10-19T06:02:55Z; SHA-256 5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730)

---

## Holotron-12B

Computer-use policy checkpoint from H Company and NVIDIA, fine-tuned from Nemotron Nano 12B v2 VL on localization and navigation data, with a hybrid SSM-attention backbone for high-throughput multi-image inference.

- Catalog URL: https://awesomecua.com/resources/url-6c16f91d8d79d7836283/
- Original source: https://huggingface.co/Hcompany/Holotron-12B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, web-navigation, efficiency
- Evidence checked: 2026-10-18T15:55:28Z
- ID: url:6c16f91d8d79d7836283

### Limitations

The manifest lists six Safetensors shards, about 13.2B BF16 parameters by the Hub count. The card names the NVIDIA Open Model License in its text but sets no license field and ships no license file; H's models page lists the same license and includes Holotron-12B among the lab's open checkpoints. The fine-tuning mixture is proprietary and not released. Throughput and WebVoyager figures are publisher measurements.

- Record JSON: https://awesomecua.com/resources/url-6c16f91d8d79d7836283/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md

- weights review: Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page; code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md, https://hcompany.ai/research/models

### Primary evidence

- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md (retrieved 2026-10-18T15:55:28Z; SHA-256 92912de5e547c322760b307abb5e917b80bc100237e52e95089019ce42b9e985)
- https://huggingface.co/api/models/Hcompany/Holotron-12B (retrieved 2026-10-18T15:55:18Z; SHA-256 e89d926da5f3eb86e379dc922b002273aa58c7eddcae5526a6307dd650ed4be2)
- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/config.json (retrieved 2026-10-18T15:55:18Z; SHA-256 c122cb7428978b26e1dcb19fdd1bab6db8c33dcb42fc380d505783b5b189594f)
- https://hcompany.ai/research/models (retrieved 2026-10-18T15:55:18Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)

---

## InfiGUI-G1

InfiGUI-G1 3B and 7B grounding models trained with Adaptive Exploration Policy Optimization, which samples several candidate answers per pass under an adaptive exploration reward.

- Catalog URL: https://awesomecua.com/resources/github-infixai-infigui-g1/
- Original source: https://github.com/InfiXAI/InfiGUI-G1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:infixai/infigui-g1

- Record JSON: https://awesomecua.com/resources/github-infixai-infigui-g1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 4b68c82a2dd0063a450bde34c8bffbd931565a91a2982a5b47be7e711815b284)
- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## InfiGUI-G1-3B

A GUI grounding checkpoint based on Qwen2.5-VL-3B-Instruct. It uses adaptive exploration training to locate interface elements from an instruction and screen image.

- Catalog URL: https://awesomecua.com/resources/url-3888a4042043fb547705/
- Original source: https://huggingface.co/InfiX-ai/InfiGUI-G1-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning, screen-understanding
- Evidence checked: 2026-11-09T05:05:13Z
- ID: url:3888a4042043fb547705

### Limitations

The repository provides model weights and an inference example using Transformers and qwen-vl-utils. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-3888a4042043fb547705/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-G1-3B

### Primary evidence

- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-3B (retrieved 2026-11-09T05:05:13Z; SHA-256 a6ffc2328de51d27436848ff4f8ef8f52911a58784105c14d99c1919a98376a8)
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-3B (retrieved 2026-11-09T05:05:13Z; SHA-256 a6ffc2328de51d27436848ff4f8ef8f52911a58784105c14d99c1919a98376a8)

---

## InfiGUI-R1

3B GUI agent trained in two stages: distilling spatial reasoning from teacher models, then reinforcement learning that rewards accurate sub-goals and trains error recovery.

- Catalog URL: https://awesomecua.com/resources/github-reallm-labs-infigui-r1/
- Original source: https://github.com/Reallm-Labs/InfiGUI-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: reinforcement-learning, planning
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:reallm-labs/infigui-r1

- Record JSON: https://awesomecua.com/resources/github-reallm-labs-infigui-r1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 5fd1399c88bdf406e7689765ccf0599b3b7e0ddbed082fa92bffdd7b120bd41a)
- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## microsoft/OmniParser

Released screen-parsing weights that detect actionable UI regions and caption icons in screenshots, supporting structured screen input for GUI agents.

- Catalog URL: https://awesomecua.com/resources/url-b5fb13515d7779218f5d/
- Original source: https://huggingface.co/microsoft/OmniParser
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T05:05:02Z
- ID: url:b5fb13515d7779218f5d

### Limitations

The card identifies fine-tuned YOLOv8 and BLIP-2 models and links the resource's paper. It states AGPL licensing for icon detection and MIT licensing for captioning models.

- Record JSON: https://awesomecua.com/resources/url-b5fb13515d7779218f5d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/OmniParser

### Primary evidence

- https://huggingface.co/api/models/microsoft/OmniParser (retrieved 2026-11-09T05:05:02Z; SHA-256 9fbd565c5f68b75aa994d8f971c0d4aa059a742a145cbc2325e08bf63fb68749)
- https://huggingface.co/api/models/microsoft/OmniParser (retrieved 2026-11-09T05:05:02Z; SHA-256 9fbd565c5f68b75aa994d8f971c0d4aa059a742a145cbc2325e08bf63fb68749)

---

## MolmoPoint-GUI-8B

GUI grounding model that takes one screenshot and an instruction-like query, then returns a point for the referenced location using dedicated pointing tokens.

- Catalog URL: https://awesomecua.com/resources/url-beb2ca7cdaefbef42ee6/
- Original source: https://huggingface.co/allenai/MolmoPoint-GUI-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T05:05:03Z
- ID: url:beb2ca7cdaefbef42ee6

### Limitations

The repository contains sharded model weights and an inference example using Transformers. The card names MolmoPoint-8B as its base model and declares Apache 2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-beb2ca7cdaefbef42ee6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/allenai/MolmoPoint-GUI-8B

### Primary evidence

- https://huggingface.co/api/models/allenai/MolmoPoint-GUI-8B (retrieved 2026-11-09T05:05:03Z; SHA-256 ff04c8e9013cc35ca89cf5f8a3e9735da6bc049b44ae2243065fabcf3c765de5)
- https://huggingface.co/api/models/allenai/MolmoPoint-GUI-8B (retrieved 2026-11-09T05:05:03Z; SHA-256 ff04c8e9013cc35ca89cf5f8a3e9735da6bc049b44ae2243065fabcf3c765de5)

---

## Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16

Nemotron 3 Nano Omni is a released multimodal model for image, video, audio and text understanding. Its card identifies GUI capability and automation for browser agents among its uses.

- Catalog URL: https://awesomecua.com/resources/url-ddb5d413e19be8a4416e/
- Original source: https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-09T21:10:46Z
- ID: url:ddb5d413e19be8a4416e

### Limitations

The repository lists BF16 safetensors weights and model code. The card identifies the NVIDIA Open Model Agreement and describes Linux inference runtimes and GPU requirements.

- Record JSON: https://awesomecua.com/resources/url-ddb5d413e19be8a4416e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16

### Primary evidence

- https://huggingface.co/api/models/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16 (retrieved 2026-11-09T21:10:46Z; SHA-256 1c9095da5ed4e09803719f63484b0b809ab555ed6150b84e2da654b3e0783f3d)
- https://huggingface.co/api/models/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16 (retrieved 2026-11-09T21:10:46Z; SHA-256 1c9095da5ed4e09803719f63484b0b809ab555ed6150b84e2da654b3e0783f3d)

---

## OpAgent-32B

A vision-language model fine-tuned for web navigation. It takes a task instruction and webpage screenshot and produces a browser action or final answer.

- Catalog URL: https://awesomecua.com/resources/url-875b417b3ef43021cd74/
- Original source: https://huggingface.co/codefuse-ai/OpAgent-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, reinforcement-learning
- Evidence checked: 2026-11-09T19:56:06Z
- ID: url:875b417b3ef43021cd74

### Limitations

The card names Qwen3-VL-32B-Thinking as the base model and describes supervised fine-tuning followed by online reinforcement learning. It includes a vLLM inference example and states an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-875b417b3ef43021cd74/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/codefuse-ai/OpAgent-32B

### Primary evidence

- https://huggingface.co/api/models/codefuse-ai/OpAgent-32B (retrieved 2026-11-09T19:56:06Z; SHA-256 c97f43a310d63999646c3855f5d4f0fdaf545248faff35da51f6f9e31b427cbf)
- https://huggingface.co/api/models/codefuse-ai/OpAgent-32B (retrieved 2026-11-09T19:56:06Z; SHA-256 c97f43a310d63999646c3855f5d4f0fdaf545248faff35da51f6f9e31b427cbf)

---

## OS-Atlas Base 4B

OS-Atlas base checkpoint with about 4.1B parameters, fine-tuned from InternVL2-4B and loaded in Transformers through custom InternVL chat model code.

- Catalog URL: https://awesomecua.com/resources/url-30c831a1198b9bc2a0f5/
- Original source: https://huggingface.co/OS-Copilot/OS-Atlas-Base-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:30c831a1198b9bc2a0f5

- Record JSON: https://awesomecua.com/resources/url-30c831a1198b9bc2a0f5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Base-4B

### Primary evidence

- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-4B (retrieved 2026-10-16T06:50:49Z; SHA-256 20c6679849cd81a871809aa7f96145855739c9170608dfa6ec3653e52bd795cb)
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-4B (retrieved 2026-10-16T06:50:49Z; SHA-256 20c6679849cd81a871809aa7f96145855739c9170608dfa6ec3653e52bd795cb)

---

## OS-Atlas Base 7B

OS-Atlas base checkpoint fine-tuned from Qwen2-VL-7B-Instruct, using the standard Qwen2-VL architecture in Transformers with about 8.3B BF16 parameters.

- Catalog URL: https://awesomecua.com/resources/url-82a30f45d9e855f423c7/
- Original source: https://huggingface.co/OS-Copilot/OS-Atlas-Base-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:82a30f45d9e855f423c7

- Record JSON: https://awesomecua.com/resources/url-82a30f45d9e855f423c7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Base-7B

### Primary evidence

- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 a3355c4f884490efe2dc31ad393b869349c35130cc37370dafa19f4f0f5016b7)
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 a3355c4f884490efe2dc31ad393b869349c35130cc37370dafa19f4f0f5016b7)

---

## qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain

A GUI-grounding checkpoint built on Qwen2.5-VL-7B-Instruct with an attention-based action head. Its example predicts a click point from a screenshot and instruction.

- Catalog URL: https://awesomecua.com/resources/url-fe85a6b4ffbdb303f382/
- Original source: https://huggingface.co/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:58:09Z
- ID: url:fe85a6b4ffbdb303f382

### Limitations

The repository contains safetensors weight shards and processor files. The card lists an MIT license and shows inference using the GUI-Actor code.

- Record JSON: https://awesomecua.com/resources/url-fe85a6b4ffbdb303f382/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain

### Primary evidence

- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain (retrieved 2026-11-09T19:58:09Z; SHA-256 ce5b9c2d0e6bf3c3169a79fdc979cad3f06660af5e007481294b70023ac57050)
- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain (retrieved 2026-11-09T19:58:09Z; SHA-256 ce5b9c2d0e6bf3c3169a79fdc979cad3f06660af5e007481294b70023ac57050)

---

## Qwen2.5-VL-3B-UI-R1-E

Qwen2.5-VL-3B-UI-R1-E releases UI-R1-E-3B, a model that predicts click coordinates from interface screenshots and commands, with reported mobile, desktop, and web grounding evaluations.

- Catalog URL: https://awesomecua.com/resources/url-72f3737bb5194fd64852/
- Original source: https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1-E
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: grounding, action-prediction, efficiency, evaluation
- Evidence checked: 2026-11-09T05:05:18Z
- ID: url:72f3737bb5194fd64852

### Limitations

The repository lists weight shards and provides inference and coordinate-rescaling code. The card names Qwen/Qwen2.5-VL-3B-Instruct as its base model and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-72f3737bb5194fd64852/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1-E

### Primary evidence

- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1-E (retrieved 2026-11-09T05:05:18Z; SHA-256 28b879598f08749648e25abff6fb4507850b4991b216d1c914aab5061a9a61a8)
- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1-E (retrieved 2026-11-09T05:05:18Z; SHA-256 28b879598f08749648e25abff6fb4507850b4991b216d1c914aab5061a9a61a8)

---

## Qwen3-VL-2B-Instruct

A vision-language model whose card describes visual-agent operation of PC and mobile interfaces, including element recognition and tool use. This repository releases its weights.

- Catalog URL: https://awesomecua.com/resources/url-c4d0846c44df2c0d4099/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T19:56:26Z
- ID: url:c4d0846c44df2c0d4099

### Limitations

The card includes a Transformers inference example and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-c4d0846c44df2c0d4099/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Instruct (retrieved 2026-11-09T19:56:26Z; SHA-256 aa3efb4a85db9acd2e3ebbbd64bf69335004a35bb4716f4468180159d3ed8280)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Instruct (retrieved 2026-11-09T19:56:26Z; SHA-256 aa3efb4a85db9acd2e3ebbbd64bf69335004a35bb4716f4468180159d3ed8280)

---

## Qwen3-VL-32B-Instruct

Qwen3-VL-32B-Instruct, the 32B instruction-tuned edition of the Qwen3-VL vision-language weights, whose card describes visual-agent operation of PC and mobile GUIs, including element recognition and tool use.

- Catalog URL: https://awesomecua.com/resources/url-560a21b67220296ba009/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-09T19:57:49Z
- ID: url:560a21b67220296ba009

### Limitations

The card provides a Transformers loading example and lists Apache-2.0 as the license.

- Record JSON: https://awesomecua.com/resources/url-560a21b67220296ba009/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Instruct (retrieved 2026-11-09T19:57:49Z; SHA-256 aaa156892314896bcb41497dd293c6e5ff0c9bd0723cf005a78929d0161cf053)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Instruct (retrieved 2026-11-09T19:57:49Z; SHA-256 aaa156892314896bcb41497dd293c6e5ff0c9bd0723cf005a78929d0161cf053)

---

## Rex-Omni

Rex-Omni is a general visual perception model with GUI grounding and pointing modes. The repository provides inference examples, evaluation materials, and fine-tuning code.

- Catalog URL: https://awesomecua.com/resources/github-idea-research-rex-omni/
- Original source: https://github.com/IDEA-Research/Rex-Omni
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:57:06Z
- ID: github:idea-research/rex-omni

### Limitations

The README links model weights hosted on Hugging Face and documents Transformers and vLLM backends. GUI grounding and GUI pointing have separate tutorials.

- Record JSON: https://awesomecua.com/resources/github-idea-research-rex-omni/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/IDEA-Research/Rex-Omni/HEAD/README.md (retrieved 2026-11-09T19:57:06Z; SHA-256 6ba787c341266c13b5042c036a03f56b81b9b3e85ae1ad991abfb2dbbb704d06)

---

## ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld SFT

Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld desktop computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-19T06:05:00Z
- ID: url:f59c2dd51c1f5c570a28

### Limitations

Hub API at revision b13810f3 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus args.json and training-state files under iter_0001838/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md (retrieved 2026-10-19T06:05:00Z; SHA-256 d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld-sft/revision/b13810f35275021d1d70082b4d1071e941a2a857 (retrieved 2026-10-19T06:05:01Z; SHA-256 f27d3fcc8c98d68e9b29f2e43eac963322de6488bf35e5b9991bbbfd4bf05231)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-19T06:05:01Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md (retrieved 2026-10-19T06:05:00Z; SHA-256 d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286)

---

## ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard SFT

Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-7fbde54a49250739baee/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, science
- Evidence checked: 2026-10-18T16:01:08Z
- ID: url:7fbde54a49250739baee

### Limitations

Hub API at revision 2bcf77b8 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus training-state files under iter_0000494/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-7fbde54a49250739baee/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md (retrieved 2026-10-18T16:01:08Z; SHA-256 0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/revision/2bcf77b8a30c161d9ed2e075276877275319d1ad (retrieved 2026-10-18T16:00:48Z; SHA-256 4feef38e55602ab8eb6cbc2f1d8dcccc7d3d1cad0e91128570ca85e9e8caa177)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T16:00:48Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md (retrieved 2026-10-18T16:01:08Z; SHA-256 0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db)

---

## ScaleCUA (THUDM) Qwen3-VL-8B OSWorld SFT

Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point from which online RL trains its OSWorld desktop computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-50501b63a93c611d6e54/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-18T15:57:54Z
- ID: url:50501b63a93c611d6e54

### Limitations

Hub API at revision 406fe375 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training args.json; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-50501b63a93c611d6e54/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md (retrieved 2026-10-18T15:57:54Z; SHA-256 db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/revision/406fe37598dc77b452bee1904c43411fbb6c5fad (retrieved 2026-10-18T15:57:26Z; SHA-256 2dd5f21883e032c18c3a4af56d8772be57672e839367a6fb17c18282da7f170b)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:55:27Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md (retrieved 2026-10-18T15:57:54Z; SHA-256 db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f)

---

## ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard SFT

Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-058cb7a92cba506f9739/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, science
- Evidence checked: 2026-10-18T15:40:15Z
- ID: url:058cb7a92cba506f9739

### Limitations

Hub API at revision 48c39bb3 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; access is open. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-058cb7a92cba506f9739/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md (retrieved 2026-10-18T15:40:15Z; SHA-256 30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/revision/48c39bb30e1920e02c440fc256f5bb4e1d44765b (retrieved 2026-10-18T15:39:37Z; SHA-256 da5c9b828ce4c562b2dbb767829b64960d73d1c0d1161f17ef00dc652f0abb1e)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:39:37Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md (retrieved 2026-10-18T15:40:15Z; SHA-256 30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d)

---

## ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT

Supervised Qwen3.5-9B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-18T16:08:23Z
- ID: url:9b7cc83c55fd75c5b867

### Limitations

Hub API at revision ff2508f6 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0001940/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld-sft/revision/ff2508f621e46efa7ec2d449a182ab9a9a0e9745 (retrieved 2026-10-18T16:08:05Z; SHA-256 e0accb8f68bfa0886c16b9842f29b9076c2860d3f8745c766f864f098ffe71dd)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T16:08:05Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937)

---

## ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard SFT

Supervised Qwen3.5-9B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-af7a03e8199643c3508f/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, science
- Evidence checked: 2026-10-18T15:57:18Z
- ID: url:af7a03e8199643c3508f

### Limitations

Hub API at revision f697d10e lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-af7a03e8199643c3508f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md (retrieved 2026-10-18T15:57:18Z; SHA-256 45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/revision/f697d10e7c30cbc7b88d677a81336210b80827d3 (retrieved 2026-10-18T15:56:44Z; SHA-256 7a2980b96ce8865010151e5dac614a924ee0e59a17d893321ad73e1e708eecbd)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:56:44Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md (retrieved 2026-10-18T15:57:18Z; SHA-256 45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2)

---

## ScreenParser

YOLO11-L UI element detector from IBM Research and ETH Zurich that boxes and labels 55 element classes in web screenshots; the main checkpoint is trained on ScreenParse v2 and the v1 detector stays on a branch.

- Catalog URL: https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/
- Original source: https://huggingface.co/docling-project/ScreenParser
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:04:56Z
- ID: url:8c0b15d51eb7b4156608

### Limitations

The model outputs boxes, class labels and confidences only, without element text; the card suggests OCR or a separate vision-language model for text. It is trained on rendered web screenshots, and the card warns that results may differ on native desktop or mobile screens. The main-branch Hub manifest holds one Ultralytics weight file, best.pt, and the card gives a 1280-pixel fine-tuning resolution. Apache-2.0 is the card's weight declaration; base-model and training-data terms are separate.

- Record JSON: https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

### Primary evidence

- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md (retrieved 2026-10-18T12:04:56Z; SHA-256 0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6)
- https://huggingface.co/api/models/docling-project/ScreenParser (retrieved 2026-10-18T12:04:56Z; SHA-256 be47c7821b642c03e5965e1ce4870b2b6f8240f8418c27469f1ced07293a4909)
- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md (retrieved 2026-10-18T12:04:56Z; SHA-256 0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6)

---

## ShowUI 2B

ShowUI vision-language-action checkpoint fine-tuned from Qwen2-VL-2B-Instruct, published as a single PyTorch weight file under the MIT license and tagged for GUI agents and computer use.

- Catalog URL: https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/
- Original source: https://huggingface.co/showlab/ShowUI-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, efficiency
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:c0f39f7cf2cd9c18e8bd

- Record JSON: https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/showlab/ShowUI-2B

### Primary evidence

- https://huggingface.co/api/models/showlab/ShowUI-2B (retrieved 2026-10-16T06:50:49Z; SHA-256 bb6d120d4795492a197e0a9e9df5c56b7baa8ac5c08182ce0f20f36c8b65783d)
- https://huggingface.co/api/models/showlab/ShowUI-2B (retrieved 2026-10-16T06:50:49Z; SHA-256 bb6d120d4795492a197e0a9e9df5c56b7baa8ac5c08182ce0f20f36c8b65783d)

---

## ShowUI-π checkpoint

A compact visual-action checkpoint that predicts continuous GUI drag trajectories from a screenshot and a natural-language instruction.

- Catalog URL: https://awesomecua.com/resources/url-f70aa7c95824a8729516/
- Original source: https://huggingface.co/showlab/ShowUI-pi
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, action-prediction
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:f70aa7c95824a8729516

### Limitations

A model.safetensors file and policy pre/postprocessor configuration are publicly ungated. The card describes a SmolVLA-based GUI drag-and-drop model despite its generic robotics pipeline tag. No weight-license declaration or specific operating-system coverage is provided.

- Record JSON: https://awesomecua.com/resources/url-f70aa7c95824a8729516/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/showlab/ShowUI-pi/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 64993ab5dc8205e25bda2576055b7e252104c67d4e6eeecb33a1a9742415f67e)
- https://huggingface.co/api/models/showlab/ShowUI-pi (retrieved 2026-10-17T02:44:50Z; SHA-256 ae12ece91946d79c5c6b578d6db07b5f095822be1ca3bc14bb3dc04a771bb010)

---

## UGround-V1-2B

UGround-V1-2B is a Qwen2-VL-based checkpoint for locating targets in GUI screenshots, with reported evaluations on mobile, desktop, and web screens.

- Catalog URL: https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/
- Original source: https://huggingface.co/osunlp/UGround-V1-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T05:04:59Z
- ID: url:fd2143b0da03ceedf25c

### Limitations

The repository contains model weight files and links separate inference code and training data. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/UGround-V1-2B

### Primary evidence

- https://huggingface.co/api/models/osunlp/UGround-V1-2B (retrieved 2026-11-09T05:04:59Z; SHA-256 9c09402997063985387f74a948f02c40e78a1a638fe66a1fd3eaeabaf2bbd923)
- https://huggingface.co/api/models/osunlp/UGround-V1-2B (retrieved 2026-11-09T05:04:59Z; SHA-256 9c09402997063985387f74a948f02c40e78a1a638fe66a1fd3eaeabaf2bbd923)

---

## UI-AGILE

GUI agent trained by RL with a continuous reward, a simple-thinking reward and cropping-based resampling on about 9k samples, plus a plug-in decomposed grounding-and-selection inference method.

- Catalog URL: https://awesomecua.com/resources/github-kdegroup-ui-agile/
- Original source: https://github.com/KDEGroup/UI-AGILE
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:kdegroup/ui-agile

- Record JSON: https://awesomecua.com/resources/github-kdegroup-ui-agile/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 eb2a2767741b53e5a6659ef4b0cc325ac18ffdc4222deef1d0e7671089fcaa39)
- https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 a145c4ec8fd43f59ebe97708b6ee4cef8112959036957eaa4739b8da9a297e8a)

---

## UI-AGILE checkpoint

The released UI-AGILE model for GUI grounding with reward shaping, crop-based resampling and decomposed selection during inference.

- Catalog URL: https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/
- Original source: https://huggingface.co/KDEGroup/UI-AGILE
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, reinforcement-learning, efficiency
- Evidence checked: 2026-10-17T02:44:30Z
- ID: url:b94e285c3f757e2d0f3a

### Limitations

Four safetensors shards and model/tokenizer files are public. The card declares MIT for these weights; the companion dataset has no declared license and is separate.

- Record JSON: https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md

### Primary evidence

- https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 75aed1ebff7dd54ab1dc0112fe524a118d9e8845c2e079080d2bb7954f7ab36e)
- https://huggingface.co/api/models/KDEGroup/UI-AGILE (retrieved 2026-10-17T02:44:29Z; SHA-256 a52032bb185885d47466f0bea26c15ccefeb8d6ff89f3bacc5eb4192c35d45f7)
- https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md (retrieved 2026-10-17T02:43:19Z; SHA-256 ce35413bc1ef28338bc6fd9f132fa271a4f5e0bf23cecd7346f54adf0a964fd7)
- https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 75aed1ebff7dd54ab1dc0112fe524a118d9e8845c2e079080d2bb7954f7ab36e)

---

## UI-R1

Rule-based reinforcement learning for GUI action prediction, releasing UI-R1-3B, trained from Qwen2.5-VL-3B, the efficiency-oriented UI-R1-E-3B, and training data.

- Catalog URL: https://awesomecua.com/resources/github-lll6gg-ui-r1/
- Original source: https://github.com/lll6gg/UI-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: reinforcement-learning, grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:lll6gg/ui-r1

- Record JSON: https://awesomecua.com/resources/github-lll6gg-ui-r1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3)
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## UI2Code_N

A visual language model that turns UI screenshots into code and supports iterative interface editing and polishing. Its card includes a screenshot-to-HTML inference example.

- Catalog URL: https://awesomecua.com/resources/url-b04608609a8c392d110b/
- Original source: https://huggingface.co/zai-org/UI2Code_N
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, ui-design, reinforcement-learning
- Evidence checked: 2026-11-09T19:57:58Z
- ID: url:b04608609a8c392d110b

### Limitations

The card identifies GLM-4.1V-9B-Base as the backbone and gives a Transformers inference example. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-b04608609a8c392d110b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/UI2Code_N

### Primary evidence

- https://huggingface.co/api/models/zai-org/UI2Code_N (retrieved 2026-11-09T19:57:58Z; SHA-256 3fa7d59a5d97b05001ceea60c62e8bfc0d34355b5ec0d0b490d58ebe3bfbc30e)
- https://huggingface.co/api/models/zai-org/UI2Code_N (retrieved 2026-11-09T19:57:58Z; SHA-256 3fa7d59a5d97b05001ceea60c62e8bfc0d34355b5ec0d0b490d58ebe3bfbc30e)

---

## ACT-SOP

LoRA adapter for Llama-2-7b from MobileAgent, a mobile device control agent that adds Standard Operating Procedure (SOP) context and predicts actions on AitW screens.

- Catalog URL: https://awesomecua.com/resources/url-ab4587d17c4f541bb94c/
- Original source: https://huggingface.co/tineding/ACT-SOP
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, workflow
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:ab4587d17c4f541bb94c

### Limitations

The repository holds adapter_model.bin and adapter_config.json plus optimizer and RNG state files. The README fine-tunes with llama-recipes using --peft_method lora and evaluates with code/infer_vllm.py, which reports a task complete score.

- Record JSON: https://awesomecua.com/resources/url-ab4587d17c4f541bb94c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/tineding/ACT-SOP (retrieved 2026-11-10T03:01:13Z; SHA-256 c491fa3f152648fc21b5db1f1062bbda4d47591f337a6ee33878f916cc08472a)
- https://huggingface.co/api/models/tineding/ACT-SOP (retrieved 2026-11-10T03:01:13Z; SHA-256 c491fa3f152648fc21b5db1f1062bbda4d47591f337a6ee33878f916cc08472a)

---

## AgentCPM-GUI

8B on-device smartphone agent built on MiniCPM-V that operates Chinese and English apps from screenshots, trained with reinforcement fine-tuning and a compact JSON action space.

- Catalog URL: https://awesomecua.com/resources/github-openbmb-agentcpm-gui/
- Original source: https://github.com/OpenBMB/AgentCPM-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, mobile-navigation
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:openbmb/agentcpm-gui

- Record JSON: https://awesomecua.com/resources/github-openbmb-agentcpm-gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2cf79e21b5438bf6a2e6bd450ba8c4d86404560dfb61836f7e300112ce74a59d)
- https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## AgentCPM-GUI 8B checkpoint

An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.

- Catalog URL: https://awesomecua.com/resources/url-8ef3985dce697e5feea9/
- Original source: https://huggingface.co/openbmb/AgentCPM-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, grounding, reinforcement-learning
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:8ef3985dce697e5feea9

### Limitations

The Hub provides four safetensors shards and associated model files without gating. Weight metadata declares Apache-2.0, while the prose license section refers specifically to code; these scopes are kept distinct. The card describes Android-app operation, and the CAGUI evaluation data remains a separate existing catalog asset.

- Record JSON: https://awesomecua.com/resources/url-8ef3985dce697e5feea9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md

### Primary evidence

- https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 9016a68e833a7717c922d9363a6d6c56cc7cf6a7087543f5694507668fe9ab75)
- https://huggingface.co/api/models/openbmb/AgentCPM-GUI (retrieved 2026-10-17T02:03:33Z; SHA-256 4d76c8cc19f1ff4c850ba6cc566d50bbd2355e10921a2214e38c921cedfeed4c)
- https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 9016a68e833a7717c922d9363a6d6c56cc7cf6a7087543f5694507668fe9ab75)

---

## AgentTrek-1.0-32B

A web-agent checkpoint fine-tuned from Qwen2.5-32B-Instruct using the AgentTrek trajectory-synthesis project. The release includes model weights.

- Catalog URL: https://awesomecua.com/resources/url-c3ab0f006a880174e645/
- Original source: https://huggingface.co/xlangai/AgentTrek-1.0-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, data-generation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:c3ab0f006a880174e645

### Limitations

The repository contains sharded safetensors weights and tokenizer files. The card links to an evaluation script and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-c3ab0f006a880174e645/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/AgentTrek-1.0-32B

### Primary evidence

- https://huggingface.co/api/models/xlangai/AgentTrek-1.0-32B (retrieved 2026-11-09T06:16:33Z; SHA-256 6c6a672ccd0c8778180d2431b3ef745910341e5d940e7e7c1aa09174a4c4a8f9)
- https://huggingface.co/api/models/xlangai/AgentTrek-1.0-32B (retrieved 2026-11-09T06:16:33Z; SHA-256 6c6a672ccd0c8778180d2431b3ef745910341e5d940e7e7c1aa09174a4c4a8f9)

---

## Aguvis-7B-720P

Aguvis-7B-720P, the released Aguvis checkpoint: a vision-only GUI agent model trained first for grounding and then for planning and reasoning, acting from screenshots on web, desktop and mobile.

- Catalog URL: https://awesomecua.com/resources/url-ac62da857db91f68376b/
- Original source: https://huggingface.co/xlangai/Aguvis-7B-720P
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, android, cross-platform
- Topics: grounding, planning, action-prediction
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:ac62da857db91f68376b

### Limitations

The repository holds four safetensors shards in Qwen2-VL format with a chat template and has no model card. The README runs it through scripts/inference.sh with an image, instruction and optional previous actions; the Hub page reports a 22.9 overall ScreenSpot-Pro score.

- Record JSON: https://awesomecua.com/resources/url-ac62da857db91f68376b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/xlangai/Aguvis-7B-720P (retrieved 2026-11-10T03:01:13Z; SHA-256 80333126ccdbbe8d3d773d8b00c1d477b25c568ee91ecf61ae362d2ef43edfad)
- https://huggingface.co/api/models/xlangai/Aguvis-7B-720P (retrieved 2026-11-10T03:01:13Z; SHA-256 80333126ccdbbe8d3d773d8b00c1d477b25c568ee91ecf61ae362d2ef43edfad)

---

## AGW-35B

A screenshot-based GUI action model fine-tuned on 79,266 synthetic interaction examples. It uses a task, current screen and recent actions to predict structured computer-use calls.

- Catalog URL: https://awesomecua.com/resources/url-39e2a96f88ed3223ece9/
- Original source: https://huggingface.co/YangC777/AGW-35B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, linux, windows, macos
- Topics: action-prediction, grounding, interaction-history, data-generation
- Evidence checked: 2026-11-09T21:08:59Z
- ID: url:39e2a96f88ed3223ece9

### Limitations

The repository lists BF16 safetensors weight shards and a chat template. The card names Qwen3.5-35B-A3B as the base model and says an external harness must execute actions and capture subsequent screenshots.

- Record JSON: https://awesomecua.com/resources/url-39e2a96f88ed3223ece9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/YangC777/AGW-35B

### Primary evidence

- https://huggingface.co/api/models/YangC777/AGW-35B (retrieved 2026-11-09T21:08:59Z; SHA-256 7f10fe3f7b50d83cf556574869f21b52dc4ed68f11c229c07cb8900ec6384c0e)
- https://huggingface.co/api/models/YangC777/AGW-35B (retrieved 2026-11-09T21:08:59Z; SHA-256 7f10fe3f7b50d83cf556574869f21b52dc4ed68f11c229c07cb8900ec6384c0e)

---

## aitw-general-digiq-agent

Digi-Q agent checkpoint for the AitW General task set: an AutoUI device-control policy trained offline with a learned VLM Q-value function that re-ranks proposed actions.

- Catalog URL: https://awesomecua.com/resources/url-0e5617031e625a75cfc7/
- Original source: https://huggingface.co/JackBAI/aitw-general-digiq-agent
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, mobile-navigation, reward-models
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:0e5617031e625a75cfc7

### Limitations

Three PyTorch weight files and random-state files, about 8G in total, released for evaluation without optimizer states. The README reports a test-set score of 59.4; evaluation needs the Android emulator setup from the DigiRL repository.

- Record JSON: https://awesomecua.com/resources/url-0e5617031e625a75cfc7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/JackBAI/aitw-general-digiq-agent (retrieved 2026-11-10T03:01:01Z; SHA-256 a2160b0ebc29a109bca46d62586814fc6bfb98eb6ae292fe42c11dd203ee40a6)
- https://huggingface.co/api/models/JackBAI/aitw-general-digiq-agent (retrieved 2026-11-10T03:01:01Z; SHA-256 a2160b0ebc29a109bca46d62586814fc6bfb98eb6ae292fe42c11dd203ee40a6)

---

## aitw-webshop-digiq-agent

Digi-Q device-control agent checkpoint trained on the AitW Web Shopping task set, an AutoUI-based actor learned offline with a VLM Q-value function; the repository reports a 70.8 test-set score.

- Catalog URL: https://awesomecua.com/resources/url-5281c8befef1059590f3/
- Original source: https://huggingface.co/JackBAI/aitw-webshop-digiq-agent
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, mobile-navigation, reward-models
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:5281c8befef1059590f3

### Limitations

PyTorch .bin weights and random-state files, about 8G. The release holds the AutoUI checkpoint without optimizer states, for evaluation; running it needs the Digi-Q code and an Android emulator set up through the DigiRL environment guide.

- Record JSON: https://awesomecua.com/resources/url-5281c8befef1059590f3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/JackBAI/aitw-webshop-digiq-agent (retrieved 2026-11-10T03:01:04Z; SHA-256 6151425b7a5af145ec07e38fbf157ae58de69a9d3644ebefb9cf7632fc561172)
- https://huggingface.co/api/models/JackBAI/aitw-webshop-digiq-agent (retrieved 2026-11-10T03:01:04Z; SHA-256 6151425b7a5af145ec07e38fbf157ae58de69a9d3644ebefb9cf7632fc561172)

---

## AndroidGen-GLM-4-9B

AndroidGen-GLM-4-9B is a released model for agents that carry out tasks across Android apps without manually labeled interaction data.

- Catalog URL: https://awesomecua.com/resources/url-66d842fe6552d3ca62a1/
- Original source: https://huggingface.co/THUDM/androidgen-glm-4-9b
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction
- Evidence checked: 2026-11-09T19:57:39Z
- ID: url:66d842fe6552d3ca62a1

### Limitations

The repository lists model weight shards and tokenizer files. The card names GLM-4-9B as its base model and points to the AndroidGen repository for inference code and requirements.

- Record JSON: https://awesomecua.com/resources/url-66d842fe6552d3ca62a1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/THUDM/androidgen-glm-4-9b

### Primary evidence

- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b (retrieved 2026-11-09T19:57:39Z; SHA-256 0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3)
- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b (retrieved 2026-11-09T19:57:39Z; SHA-256 0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3)
- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b (retrieved 2026-11-09T20:03:02Z; SHA-256 0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3)
- https://huggingface.co/api/models/zai-org/androidgen-glm-4-9b (retrieved 2026-11-09T20:03:02Z; SHA-256 0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3)

---

## AndroidGen-Llama-3-70B

AndroidGen-Llama-3-70B is a released model for agents that carry out tasks across Android applications such as messaging, email and settings without manually labeled interaction data.

- Catalog URL: https://awesomecua.com/resources/url-75e93dff049c046c586e/
- Original source: https://huggingface.co/THUDM/androidgen-llama-3-70b
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, cross-app
- Evidence checked: 2026-11-09T19:57:47Z
- ID: url:75e93dff049c046c586e

### Limitations

The repository lists model weight shards. The card names Llama-3-70B as its base model and directs readers to a separate GitHub page for inference requirements.

- Record JSON: https://awesomecua.com/resources/url-75e93dff049c046c586e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/THUDM/androidgen-llama-3-70b

### Primary evidence

- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b (retrieved 2026-11-09T19:57:47Z; SHA-256 60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6)
- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b (retrieved 2026-11-09T19:57:47Z; SHA-256 60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6)
- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b (retrieved 2026-11-09T20:03:06Z; SHA-256 60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6)
- https://huggingface.co/api/models/zai-org/androidgen-llama-3-70b (retrieved 2026-11-09T20:03:07Z; SHA-256 60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6)

---

## Aria-UI context-aware checkpoint

The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.

- Catalog URL: https://awesomecua.com/resources/url-085b6811ddd6f797475d/
- Original source: https://huggingface.co/Aria-UI/Aria-UI-context-aware
- Kind: model
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: grounding, interaction-history, action-prediction
- Evidence checked: 2026-10-17T02:44:29Z
- ID: url:085b6811ddd6f797475d

### Limitations

The Hub manifest exposes twelve safetensors shards and model code/configuration, but no README card or model-license declaration. The official repository explicitly announces this context-aware release separately from the base model. Code or base-model licenses are not inherited.

- Record JSON: https://awesomecua.com/resources/url-085b6811ddd6f797475d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/Aria-UI/Aria-UI-context-aware (retrieved 2026-10-17T02:44:29Z; SHA-256 183a8de8928b3b71b171a35149621de078aaf80b4ebde377a5dc3b5cd4a04a27)
- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480)
- https://huggingface.co/api/models/Aria-UI/Aria-UI-context-aware (retrieved 2026-10-17T02:44:29Z; SHA-256 183a8de8928b3b71b171a35149621de078aaf80b4ebde377a5dc3b5cd4a04a27)

---

## asil-qwen35-2b-rl

An ASIL reinforcement-learning checkpoint for an application-control approach based on structured state and semantic actions, released with loadable model weights.

- Catalog URL: https://awesomecua.com/resources/url-d740ec821c7c466db2bf/
- Original source: https://huggingface.co/sharryXR/asil-qwen35-2b-rl
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: action-prediction, reinforcement-learning, tool-integration
- Evidence checked: 2026-11-09T19:57:49Z
- ID: url:d740ec821c7c466db2bf

### Limitations

The card names Qwen/Qwen3.5-2B as the base model and 320 training and 80 validation task prompts. It lists Apache-2.0 as the license.

- Record JSON: https://awesomecua.com/resources/url-d740ec821c7c466db2bf/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-2b-rl

### Primary evidence

- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-rl (retrieved 2026-11-09T19:57:49Z; SHA-256 960d9a3f3df26dd0b0d9c2b8573f734dd16c6e5dc0c069d58fbe04ea6ba6e759)
- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-rl (retrieved 2026-11-09T19:57:49Z; SHA-256 960d9a3f3df26dd0b0d9c2b8573f734dd16c6e5dc0c069d58fbe04ea6ba6e759)

---

## asil-qwen35-9b-rl

ASIL RL checkpoint of Qwen3.5-9B for operating desktop applications from JSON state observations with semantic actions written as code, trained on 320 task prompts after SFT.

- Catalog URL: https://awesomecua.com/resources/url-c5cedb2f95336a8e48aa/
- Original source: https://huggingface.co/sharryXR/asil-qwen35-9b-rl
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, tool-integration, action-prediction
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:c5cedb2f95336a8e48aa

### Limitations

Selected checkpoint global_step_140_actor_hf, resumed from the 9B SFT checkpoint; the repository holds safetensors weights, checkpoint_metadata.json and SHA256SUMS. The ASIL README reports 82.2 for Qwen3.5-9B after RL against 80.4 after SFT on its benchmark.

- Record JSON: https://awesomecua.com/resources/url-c5cedb2f95336a8e48aa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-rl (retrieved 2026-11-10T03:01:14Z; SHA-256 ead3b707bb50caa79112778c69ebfb6b43d935e58c4ecaaa248131ac97accc3a)
- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-rl (retrieved 2026-11-10T03:01:14Z; SHA-256 ead3b707bb50caa79112778c69ebfb6b43d935e58c4ecaaa248131ac97accc3a)

---

## asil-qwen35-9b-sft

An ASIL supervised fine-tuning checkpoint for an application-control approach based on structured state and semantic actions, released with loadable model weights.

- Catalog URL: https://awesomecua.com/resources/url-9960d240939244c3edaa/
- Original source: https://huggingface.co/sharryXR/asil-qwen35-9b-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: action-prediction, imitation-learning, tool-integration
- Evidence checked: 2026-11-09T19:57:49Z
- ID: url:9960d240939244c3edaa

### Limitations

The card names Qwen/Qwen3.5-9B as the base model and reports 2,886 training and 732 validation rows. It lists Apache-2.0 as the license.

- Record JSON: https://awesomecua.com/resources/url-9960d240939244c3edaa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-9b-sft

### Primary evidence

- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-sft (retrieved 2026-11-09T19:57:49Z; SHA-256 fa17d9565392839288c1873e367addaff803a4b6c711df9c8083f83c46ba6d02)
- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-sft (retrieved 2026-11-09T19:57:49Z; SHA-256 fa17d9565392839288c1873e367addaff803a4b6c711df9c8083f83c46ba6d02)

---

## Auto-UI

Trained Auto-UI checkpoints and BLIP-processed AITW features for a chain-of-action agent that predicts device actions from screenshots, previous actions and planned future actions.

- Catalog URL: https://awesomecua.com/resources/url-952cb4c3f308418aa85b/
- Original source: https://huggingface.co/cooelf/Auto-UI
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: action-prediction, interaction-history, mobile-navigation
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:952cb4c3f308418aa85b

### Limitations

The repository holds three archives: Auto-UI-Base.zip, Auto-UI-Large.zip and blip.zip. Inference runs through main.py in the cooelf/Auto-UI GitHub code, whose README declares the Apache-2.0 License.

- Record JSON: https://awesomecua.com/resources/url-952cb4c3f308418aa85b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/cooelf/Auto-UI

### Primary evidence

- https://huggingface.co/api/models/cooelf/Auto-UI (retrieved 2026-11-10T03:01:12Z; SHA-256 0477a5d7c64bacb0d27caed20a12367ff37a367c3ca0fe4980638a5170091b12)
- https://huggingface.co/api/models/cooelf/Auto-UI (retrieved 2026-11-10T03:01:12Z; SHA-256 0477a5d7c64bacb0d27caed20a12367ff37a367c3ca0fe4980638a5170091b12)

---

## AutoGLM Phone 9B

AutoGLM phone-agent checkpoint for Open-AutoGLM, fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters and tagged for Chinese.

- Catalog URL: https://awesomecua.com/resources/url-c918d5c828a3c6cfbc5d/
- Original source: https://huggingface.co/zai-org/AutoGLM-Phone-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:c918d5c828a3c6cfbc5d

- Record JSON: https://awesomecua.com/resources/url-c918d5c828a3c6cfbc5d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/AutoGLM-Phone-9B

### Primary evidence

- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B (retrieved 2026-10-16T06:50:49Z; SHA-256 94b02fa7104849cedee8ddd1fa33e22d3039e05ae9dd03033805a000e3fed847)
- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B (retrieved 2026-10-16T06:50:49Z; SHA-256 94b02fa7104849cedee8ddd1fa33e22d3039e05ae9dd03033805a000e3fed847)

---

## AutoGUI-Qwen-v0.1

A UI vision-language model checkpoint trained on AutoGUI-625k data and fine-tuned from Qwen-VL-Chat for interpreting interfaces.

- Catalog URL: https://awesomecua.com/resources/url-7f1339af63d3f89bd0bf/
- Original source: https://huggingface.co/HongxinLi/AutoGUI-Qwen-v0.1
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T19:57:38Z
- ID: url:7f1339af63d3f89bd0bf

### Limitations

The repository lists sharded safetensors weights and model code. The card leaves usage, evaluation and license details unspecified.

- Record JSON: https://awesomecua.com/resources/url-7f1339af63d3f89bd0bf/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/HongxinLi/AutoGUI-Qwen-v0.1 (retrieved 2026-11-09T19:57:38Z; SHA-256 99e63b39f81ea5511b16f9b96af40c5f66fc370c1e8606ea21a74603228141f0)
- https://huggingface.co/api/models/HongxinLi/AutoGUI-Qwen-v0.1 (retrieved 2026-11-09T19:57:38Z; SHA-256 99e63b39f81ea5511b16f9b96af40c5f66fc370c1e8606ea21a74603228141f0)

---

## blip-icon-captioning

blip-icon-captioning is a BLIP checkpoint fine-tuned to turn macOS interface icons and elements into short natural-language descriptions for accessibility uses.

- Catalog URL: https://awesomecua.com/resources/url-b4a01331e3e89e1bae9d/
- Original source: https://huggingface.co/MacPaw/blip-icon-captioning
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding
- Evidence checked: 2026-11-09T19:57:13Z
- ID: url:b4a01331e3e89e1bae9d

### Limitations

The card identifies Salesforce/blip-image-captioning-base as its base model and includes a Transformers inference example. The repository lists model.safetensors and processor and tokenizer configuration files. The card declares the MIT License.

- Record JSON: https://awesomecua.com/resources/url-b4a01331e3e89e1bae9d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/MacPaw/blip-icon-captioning

### Primary evidence

- https://huggingface.co/api/models/MacPaw/blip-icon-captioning (retrieved 2026-11-09T19:57:13Z; SHA-256 1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b)
- https://huggingface.co/api/models/MacPaw/blip-icon-captioning (retrieved 2026-11-09T19:57:13Z; SHA-256 1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b)
- https://huggingface.co/api/models/MacPaw/blip-icon-captioning (retrieved 2026-11-09T20:02:52Z; SHA-256 1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b)
- https://huggingface.co/api/models/macpaw-research/blip-icon-captioning (retrieved 2026-11-09T20:02:53Z; SHA-256 1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b)

---

## BlueLM-GUI

Mobile GUI agent research release with technical report, benchmark data, and evaluation tooling from vivo AI Lab.

- Catalog URL: https://awesomecua.com/resources/github-vivo-ai-lab-bluelm-gui/
- Original source: https://github.com/vivo-ai-lab/BlueLM-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:vivo-ai-lab/bluelm-gui

### Limitations

The repository lists the agent as in-house. Public model weights were not established by this review; linked benchmark assets have their own access terms.

- Record JSON: https://awesomecua.com/resources/github-vivo-ai-lab-bluelm-gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 5f460f9b2a18315d07b8c48d78dcc764892d09d9250e95f5e591b5966fe59328)
- https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 6036aa17e52be8051fc3c8ede37fc4d0b2bc2589518be7623566c75868612178)

---

## browserground-mlx

browserground-mlx is a 4-bit MLX conversion of a browser grounding model for Apple Silicon. It accepts a screenshot and a target description to locate an interface element.

- Catalog URL: https://awesomecua.com/resources/url-ea8bb3d3d41be83852a0/
- Original source: https://huggingface.co/renezander030/browserground-mlx
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:09:37Z
- ID: url:ea8bb3d3d41be83852a0

### Limitations

The repository lists a safetensors model file, configuration, processor files, and tokenizer files. The card gives Python and CLI examples and states an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-ea8bb3d3d41be83852a0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/renezander030/browserground-mlx

### Primary evidence

- https://huggingface.co/api/models/renezander030/browserground-mlx (retrieved 2026-11-09T21:09:37Z; SHA-256 358c1f2f7cf092446b449e375ba4a8969adf02360b6a0a21fcd9b232803ad6d6)
- https://huggingface.co/api/models/renezander030/browserground-mlx (retrieved 2026-11-09T21:09:37Z; SHA-256 358c1f2f7cf092446b449e375ba4a8969adf02360b6a0a21fcd9b232803ad6d6)

---

## Captioner

Captioner is a dense captioning model for graphical interfaces, released with a checkpoint and links to an online demo and reference server code.

- Catalog URL: https://awesomecua.com/resources/url-4f98919eaf7a92e8faab/
- Original source: https://huggingface.co/Agent-Eval-Refine/Captioner
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-09T19:57:13Z
- ID: url:4f98919eaf7a92e8faab

### Limitations

The repository file list includes a PyTorch model file. The card provides no architecture or evaluation details.

- Record JSON: https://awesomecua.com/resources/url-4f98919eaf7a92e8faab/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/Agent-Eval-Refine/Captioner (retrieved 2026-11-09T19:57:13Z; SHA-256 abaae5206fe3a9725c8c35d130bc5230b0ab89682d0f0a870922beddb4363a65)
- https://huggingface.co/api/models/Agent-Eval-Refine/Captioner (retrieved 2026-11-09T19:57:13Z; SHA-256 abaae5206fe3a9725c8c35d130bc5230b0ab89682d0f0a870922beddb4363a65)

---

## ClawGUI-2B

ClawGUI-2B, a 2B mobile GUI agent model trained end to end with the ClawGUI-RL pipeline and GiGPO; the authors report a 17.1 MobileWorld success rate against an 11.1 baseline.

- Catalog URL: https://awesomecua.com/resources/url-1a54e63277eaffdaef57/
- Original source: https://huggingface.co/SugarVapeur/OpenGUI-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, mobile-navigation
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:1a54e63277eaffdaef57

### Limitations

A single model.safetensors file with tokenizer, processor and chat-template configs; the card declares Apache-2.0. The ClawGUI README also links a ModelScope copy, and the ClawGUI repository holds the RL training, evaluation and deployment code.

- Record JSON: https://awesomecua.com/resources/url-1a54e63277eaffdaef57/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/SugarVapeur/OpenGUI-2B

### Primary evidence

- https://huggingface.co/api/models/SugarVapeur/OpenGUI-2B (retrieved 2026-11-10T03:01:01Z; SHA-256 448868dd028c422209955b031a070562cce041f66740eda893ec03f88d3b2271)
- https://huggingface.co/api/models/SugarVapeur/OpenGUI-2B (retrieved 2026-11-10T03:01:01Z; SHA-256 448868dd028c422209955b031a070562cce041f66740eda893ec03f88d3b2271)
- https://huggingface.co/api/models/SugarVapeur/OpenGUI-2B (retrieved 2026-11-10T03:01:52Z; SHA-256 448868dd028c422209955b031a070562cce041f66740eda893ec03f88d3b2271)
- https://huggingface.co/api/models/SugarVapeur/ClawGUI-2B (retrieved 2026-11-10T03:01:53Z; SHA-256 448868dd028c422209955b031a070562cce041f66740eda893ec03f88d3b2271)

---

## CLM-v0.1-8B

Weights for CLM-8B, a contrastive model with state and action heads on a frozen Qwen3-8B encoder that ranks candidate actions; the authors report computer-use, gaming and tool-calling results.

- Catalog URL: https://awesomecua.com/resources/url-0b272935f82c063d9384/
- Original source: https://huggingface.co/Contrastive-LM/CLM-v0.1-8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: action-prediction, reward-models, efficiency
- Evidence checked: 2026-11-10T06:29:21Z
- ID: url:0b272935f82c063d9384

### Limitations

The repository holds the CLM_v0.1-8B.pt head checkpoint and config; it needs Qwen3-8B embeddings served separately and the contrastive-lm package. License Apache 2.0.

- Record JSON: https://awesomecua.com/resources/url-0b272935f82c063d9384/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Contrastive-LM/CLM-v0.1-8B

### Primary evidence

- https://huggingface.co/api/models/Contrastive-LM/CLM-v0.1-8B (retrieved 2026-11-10T06:29:21Z; SHA-256 8186441e7a773115295d381b40152e332e7751aca34f3834fe3bd2cd3bc40397)
- https://huggingface.co/api/models/Contrastive-LM/CLM-v0.1-8B (retrieved 2026-11-10T06:29:21Z; SHA-256 8186441e7a773115295d381b40152e332e7751aca34f3834fe3bd2cd3bc40397)

---

## CODA-PLANNER-TARS-32B

CODA-PLANNER-TARS-32B is a GUI agent planner checkpoint trained for scientific applications and deployed alongside a specialist executor in ScienceBoard.

- Catalog URL: https://awesomecua.com/resources/url-cf16d0a4a05ea7270ffa/
- Original source: https://huggingface.co/OpenIXCLab/CODA-PLANNER-TARS-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: planning, reinforcement-learning, science, long-horizon
- Evidence checked: 2026-11-09T19:56:16Z
- ID: url:cf16d0a4a05ea7270ffa

### Limitations

The repository contains model weight shards. Its instructions use vLLM and deploy UI-TARS-1.5-7B as the executor. The card declares Apache-2.0 for code and CC-BY-NC-4.0 for data.

- Record JSON: https://awesomecua.com/resources/url-cf16d0a4a05ea7270ffa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenIXCLab/CODA-PLANNER-TARS-32B

### Primary evidence

- https://huggingface.co/api/models/OpenIXCLab/CODA-PLANNER-TARS-32B (retrieved 2026-11-09T19:56:16Z; SHA-256 fa03e0cb8fd8c3729bd58dfc2a32afc609f5fa0be0b930011fa88ef07bb0f600)
- https://huggingface.co/api/models/OpenIXCLab/CODA-PLANNER-TARS-32B (retrieved 2026-11-09T19:56:16Z; SHA-256 fa03e0cb8fd8c3729bd58dfc2a32afc609f5fa0be0b930011fa88ef07bb0f600)

---

## Code2World-8B checkpoint

Released GUI world-model checkpoint that turns a screenshot and proposed action into HTML for rendering a predicted next screen.

- Catalog URL: https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/
- Original source: https://huggingface.co/GD-ML/Code2World
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, screen-understanding
- Evidence checked: 2026-10-18T04:35:15Z
- ID: url:bc3deaf8eeecf569e73b

### Limitations

Card identifies Code2World-8B and Qwen3-VL-8B-Instruct. Public files include four Safetensors shards, an index and rendering/prompt helper scripts. The GitHub adapter targets AndroidWorld. MIT is recorded as the weight declaration, without transferring it to the separate GitHub repository’s code or all training sources.

- Record JSON: https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md

- weights review: Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  Sources: https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md

### Primary evidence

- https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md (retrieved 2026-10-18T04:35:15Z; SHA-256 befc89b09d099b86bda891141bca32b4a13b650c64d9b74ca18a9431e76f6c06)
- https://huggingface.co/api/models/GD-ML/Code2World (retrieved 2026-10-18T04:33:22Z; SHA-256 4c91d95f7533cb5550447c95bfb12d6064fd510ac01cba45ebb8d7fca305fdc9)
- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md (retrieved 2026-10-18T04:27:14Z; SHA-256 26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777)

---

## CogAgent 9B 20241220

A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.

- Catalog URL: https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/
- Original source: https://huggingface.co/zai-org/cogagent-9b-20241220
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, cross-platform
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-17T02:44:29Z
- ID: url:c5eb975c0d66f8a2954f

### Limitations

The former THUDM model URL resolves to zai-org. Six public safetensors shards are present. Weights use the custom CogAgent License, including a registration requirement for commercial use. The card cites the 2023 CogAgent paper as previous work and links a later technical report for this 2024 checkpoint.

- Record JSON: https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md

### Primary evidence

- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 de2c8e7a9792c3d129451ec813d458f83263460a5808cf87c45b04b260a376c9)
- https://huggingface.co/api/models/zai-org/cogagent-9b-20241220 (retrieved 2026-10-17T02:45:05Z; SHA-256 ae72fbc40f9c8afd52d1688b2233e5c915571de33618cfd1ffcb7f3fadfb4402)
- https://huggingface.co/api/models/THUDM/cogagent-9b-20241220 (retrieved 2026-10-17T02:44:29Z; SHA-256 ae72fbc40f9c8afd52d1688b2233e5c915571de33618cfd1ffcb7f3fadfb4402)
- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 c1ad1d99a8d46a00610db35d97c787d10b7e81661e48a1e389ae6cbb51a45630)
- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 de2c8e7a9792c3d129451ec813d458f83263460a5808cf87c45b04b260a376c9)
- https://huggingface.co/api/models/THUDM/cogagent-9b-20241220 (retrieved 2026-10-17T19:15:13Z; SHA-256 35bbe72f95711e042dab7a94bf2711e30a3da50190c7315178c37de5725cc1d9)
- https://huggingface.co/api/models/zai-org/cogagent-9b-20241220 (retrieved 2026-10-17T19:15:14Z; SHA-256 35bbe72f95711e042dab7a94bf2711e30a3da50190c7315178c37de5725cc1d9)

---

## cogagent-vqa-hf

A CogAgent checkpoint oriented toward single-turn visual dialogue; its card also describes GUI screenshot understanding, coordinate actions, and reported GUI dataset results.

- Catalog URL: https://awesomecua.com/resources/url-64d0220e17b4e67485f3/
- Original source: https://huggingface.co/THUDM/cogagent-vqa-hf
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, action-prediction, grounding
- Evidence checked: 2026-11-09T19:57:49Z
- ID: url:64d0220e17b4e67485f3

### Limitations

The repository contains model weight shards and model code. The card states Apache-2.0 metadata and additional terms for commercial use.

- Record JSON: https://awesomecua.com/resources/url-64d0220e17b4e67485f3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/THUDM/cogagent-vqa-hf

### Primary evidence

- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf (retrieved 2026-11-09T19:57:49Z; SHA-256 ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a)
- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf (retrieved 2026-11-09T19:57:49Z; SHA-256 ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a)
- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf (retrieved 2026-11-09T20:03:07Z; SHA-256 ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a)
- https://huggingface.co/api/models/zai-org/cogagent-vqa-hf (retrieved 2026-11-09T20:03:08Z; SHA-256 ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a)

---

## ColorGUI-32B

ColorGUI-32B is a mobile GUI action model adapted from Qwen3-VL-32B-Instruct. It reads screenshots and instructions to select actions for a mobile agent runtime.

- Catalog URL: https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/
- Original source: https://huggingface.co/MadeAgents/ColorGUI-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: mobile-navigation, grounding, action-prediction, reinforcement-learning
- Evidence checked: 2026-11-09T05:04:58Z
- ID: url:38672ac9af2e25fbfb58

### Limitations

The release includes model weight shards and tokenizer files. The card declares an Apache 2.0 license and links the ColorMobileAgent runtime.

- Record JSON: https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/MadeAgents/ColorGUI-32B

### Primary evidence

- https://huggingface.co/api/models/MadeAgents/ColorGUI-32B (retrieved 2026-11-09T05:04:58Z; SHA-256 4ab52eec6daee8dbc7b075fc5f0d420786ef171ba91af6599961d59d2d20bda6)
- https://huggingface.co/api/models/MadeAgents/ColorGUI-32B (retrieved 2026-11-09T05:04:58Z; SHA-256 4ab52eec6daee8dbc7b075fc5f0d420786ef171ba91af6599961d59d2d20bda6)

---

## ConClick-8B

A GUI grounding checkpoint trained to distinguish target elements from distractors using coordinate and ranking supervision, released as an adapter and supporting weights.

- Catalog URL: https://awesomecua.com/resources/url-75cc3b45e7e44c422c4c/
- Original source: https://huggingface.co/ruotian/ConClick-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:57:09Z
- ID: url:75cc3b45e7e44c422c4c

### Limitations

The card names Qwen/Qwen3-VL-8B-Instruct as the base model and lists a LoRA adapter, selection head, and visual-merger state. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-75cc3b45e7e44c422c4c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ruotian/ConClick-8B

### Primary evidence

- https://huggingface.co/api/models/ruotian/ConClick-8B (retrieved 2026-11-09T19:57:09Z; SHA-256 20029d7d91ad2f235788498ca5dbf35ff492ba062feedc2207bcd92d9cdb7abe)
- https://huggingface.co/api/models/ruotian/ConClick-8B (retrieved 2026-11-09T19:57:09Z; SHA-256 20029d7d91ad2f235788498ca5dbf35ff492ba062feedc2207bcd92d9cdb7abe)

---

## Contrastive Language Models

CLM-8B ranks candidate actions against a state with separate embeddings and a serving API. Its authors report evaluations that include computer-use tasks.

- Catalog URL: https://awesomecua.com/resources/github-contrastive-lm-clm/
- Original source: https://github.com/Contrastive-LM/CLM
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: action-prediction, efficiency, evaluation
- Evidence checked: 2026-11-09T21:10:37Z
- ID: github:contrastive-lm/clm

### Limitations

The repository documents serving code, a reference projection head downloaded on first run, and evaluation examples. Serving uses a Qwen3-8B embedding server.

- Record JSON: https://awesomecua.com/resources/github-contrastive-lm-clm/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Contrastive-LM/CLM/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Contrastive-LM/CLM/HEAD/README.md (retrieved 2026-11-09T21:10:37Z; SHA-256 3630343750e87792f0ed805487e524b89d51388538198ca7b4be03987bfcda19)
- https://raw.githubusercontent.com/Contrastive-LM/CLM/HEAD/LICENSE (retrieved 2026-11-09T21:12:22Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## cua-s1-forms-coreml

A Core ML conversion of CUA-S1-FORMS scores candidate actions for forms from task and element text. It provides portable and compiled packages for Apple devices.

- Catalog URL: https://awesomecua.com/resources/url-f742ad40df2e5f109fc3/
- Original source: https://huggingface.co/FluidInference/cua-s1-forms-coreml
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, ios
- Topics: action-prediction, automation, efficiency
- Evidence checked: 2026-11-09T19:56:06Z
- ID: url:f742ad40df2e5f109fc3

### Limitations

The release includes FP16 packages, preprocessing code and conversion reports. The card targets iOS 17 and macOS 14 or newer and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-f742ad40df2e5f109fc3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/FluidInference/cua-s1-forms-coreml

### Primary evidence

- https://huggingface.co/api/models/FluidInference/cua-s1-forms-coreml (retrieved 2026-11-09T19:56:06Z; SHA-256 5e82b52f3b9e454c9b154d002d71304537a729e8d0f9b61362ad6f08f096668a)
- https://huggingface.co/api/models/FluidInference/cua-s1-forms-coreml (retrieved 2026-11-09T19:56:06Z; SHA-256 5e82b52f3b9e454c9b154d002d71304537a729e8d0f9b61362ad6f08f096668a)

---

## cua-s1-nano-0.1

A small computer-use classifier that scores predefined GUI element-action options from accessibility text or screenshot crops in one parallel pass.

- Catalog URL: https://awesomecua.com/resources/url-3cdd5263b3b46a5e2003/
- Original source: https://huggingface.co/cua-ai/cua-s1-nano-0.1
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: action-prediction, screen-understanding, efficiency
- Evidence checked: 2026-11-09T21:09:02Z
- ID: url:3cdd5263b3b46a5e2003

### Limitations

The repository contains text and multimodal safetensors checkpoints with configuration files. The multimodal path uses a separate frozen SigLIP backbone; the weights are Apache-2.0 licensed.

- Record JSON: https://awesomecua.com/resources/url-3cdd5263b3b46a5e2003/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/cua-ai/cua-s1-nano-0.1

### Primary evidence

- https://huggingface.co/api/models/cua-ai/cua-s1-nano-0.1 (retrieved 2026-11-09T21:09:02Z; SHA-256 eae5c1db3eb080dfef7f726eb059280804af449414b3d1883ce04cf5457ba022)
- https://huggingface.co/api/models/cua-ai/cua-s1-nano-0.1 (retrieved 2026-11-09T21:09:02Z; SHA-256 eae5c1db3eb080dfef7f726eb059280804af449414b3d1883ce04cf5457ba022)

---

## CUA_World_State_Model

SEAgent's World State Model, a Qwen2.5-VL-7B-Instruct fine-tune that assesses computer-use trajectories step by step from screenshots, used to label successes and failures and to drive curriculum task generation.

- Catalog URL: https://awesomecua.com/resources/url-f0ffbdc41c9dca4c585f/
- Original source: https://huggingface.co/Zery/CUA_World_State_Model
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reward-models, evaluation, data-generation
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:f0ffbdc41c9dca4c585f

### Limitations

Released as four PyTorch .bin shards with a Qwen2.5-VL processor config. The SEAgent repository serves it through vLLM as gui_judge for task generation and for judging trajectories to build pseudo-labeled SFT and RL data, with evaluation code for AgentRewardBench and OSWorld. License: Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-f0ffbdc41c9dca4c585f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Zery/CUA_World_State_Model

### Primary evidence

- https://huggingface.co/api/models/Zery/CUA_World_State_Model (retrieved 2026-11-10T03:01:15Z; SHA-256 2f3ab36ed8bc1de673d9232e0b005f868578ae9b494dd89bcbad009b2dd1810e)
- https://huggingface.co/api/models/Zery/CUA_World_State_Model (retrieved 2026-11-10T03:01:15Z; SHA-256 2f3ab36ed8bc1de673d9232e0b005f868578ae9b494dd89bcbad009b2dd1810e)

---

## dart-gui-7b

GUI agent checkpoint released with DART, a decoupled asynchronous RL framework that separates environments, rollout, data management and training; the paper reports 42.13% task success on OSWorld.

- Catalog URL: https://awesomecua.com/resources/url-689fea75118e3113476b/
- Original source: https://huggingface.co/dart-gui/dart-gui-7b
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, efficiency
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:689fea75118e3113476b

### Limitations

Seven safetensors shards with tokenizer and chat template files. The DART-GUI repository provides inference, environment, sampling and training code with Docker setups, and its training setup downloads UI-TARS-1.5-7B as the starting checkpoint.

- Record JSON: https://awesomecua.com/resources/url-689fea75118e3113476b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/dart-gui/dart-gui-7b (retrieved 2026-11-10T03:01:04Z; SHA-256 261bbeadefe33a634aef7cc3e7991be0244366896ea35bc8c5afb4f8bbb1960a)
- https://huggingface.co/api/models/dart-gui/dart-gui-7b (retrieved 2026-11-10T03:01:04Z; SHA-256 261bbeadefe33a634aef7cc3e7991be0244366896ea35bc8c5afb4f8bbb1960a)

---

## DeskForge-Gemma4-E4B

DeskForge-Gemma4-E4B is a desktop GUI action model fine-tuned on 200K grounding examples. It maps a screenshot and instruction to a pyautogui action with normalized coordinates.

- Catalog URL: https://awesomecua.com/resources/url-3359275b15ff3be825fc/
- Original source: https://huggingface.co/docling-project/DeskForge-Gemma4-E4B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-11-09T21:09:16Z
- ID: url:3359275b15ff3be825fc

### Limitations

The card describes merged model weights, Transformers and vLLM inference examples, and an Apache 2.0 license. Its training targets are single clicks from Linux desktop screenshots.

- Record JSON: https://awesomecua.com/resources/url-3359275b15ff3be825fc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/docling-project/DeskForge-Gemma4-E4B

### Primary evidence

- https://huggingface.co/api/models/docling-project/DeskForge-Gemma4-E4B (retrieved 2026-11-09T21:09:16Z; SHA-256 3d317ca56d03a13fbc03f646ef0e7f0219d535afc36c217f3c44fc772e8ea9a4)
- https://huggingface.co/api/models/docling-project/DeskForge-Gemma4-E4B (retrieved 2026-11-09T21:09:16Z; SHA-256 3d317ca56d03a13fbc03f646ef0e7f0219d535afc36c217f3c44fc772e8ea9a4)

---

## DeskForge-Qwen3.5-4B

DeskForge-Qwen3.5-4B is a desktop GUI model that turns a screenshot and instruction into a next-action pyautogui call with screen-relative coordinates.

- Catalog URL: https://awesomecua.com/resources/url-9610ef3e1de63d7b647e/
- Original source: https://huggingface.co/docling-project/DeskForge-Qwen3.5-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-11-09T21:09:29Z
- ID: url:9610ef3e1de63d7b647e

### Limitations

The checkpoint fine-tunes Qwen3.5-4B with grounding examples and GUI workflow supervision; the card says its LoRA weights are merged into the base model. The card declares Apache 2.0.

- Record JSON: https://awesomecua.com/resources/url-9610ef3e1de63d7b647e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/docling-project/DeskForge-Qwen3.5-4B

### Primary evidence

- https://huggingface.co/api/models/docling-project/DeskForge-Qwen3.5-4B (retrieved 2026-11-09T21:09:29Z; SHA-256 19e3d0ef014ed86313106b12acf7c7e0b31cea3ce2df686099d46a701b8eda31)
- https://huggingface.co/api/models/docling-project/DeskForge-Qwen3.5-4B (retrieved 2026-11-09T21:09:29Z; SHA-256 19e3d0ef014ed86313106b12acf7c7e0b31cea3ce2df686099d46a701b8eda31)

---

## DeskMind Eyes 4B

DeskMind Eyes 4B maps an element description and screenshot to a click point for Mac applications. The release provides merged model weights and reports GUI grounding results.

- Catalog URL: https://awesomecua.com/resources/url-0f9bf031c9ee17191cd1/
- Original source: https://huggingface.co/deskmind/eyes-4b
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T19:57:15Z
- ID: url:0f9bf031c9ee17191cd1

### Limitations

The card lists BF16 weights on the main revision and an MLX 4-bit build on a separate revision. It says the published weights merge a LoRA trained from GUI-Owl-1.5-4B-Instruct and declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-0f9bf031c9ee17191cd1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/deskmind/eyes-4b

### Primary evidence

- https://huggingface.co/api/models/deskmind/eyes-4b (retrieved 2026-11-09T19:57:15Z; SHA-256 10e51927c859fb5cc6a80ddcfc958ddaa3e31706cf6d5527b0f3157bb1e59d42)
- https://huggingface.co/api/models/deskmind/eyes-4b (retrieved 2026-11-09T19:57:15Z; SHA-256 10e51927c859fb5cc6a80ddcfc958ddaa3e31706cf6d5527b0f3157bb1e59d42)

---

## ELAM-7B

A model fine-tuned on automotive UI screenshots to return tap coordinates for test instructions and judge expected results at relevant interface elements.

- Catalog URL: https://awesomecua.com/resources/url-057b43bab2e1e58fc58e/
- Original source: https://huggingface.co/sparks-solutions/ELAM-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, evaluation, screen-understanding
- Evidence checked: 2026-11-09T19:56:36Z
- ID: url:057b43bab2e1e58fc58e

### Limitations

The card reports training on 17,708 instructions and evaluations for 6,230 images. It identifies Molmo-7B-D-0924 as the base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-057b43bab2e1e58fc58e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/sparks-solutions/ELAM-7B

### Primary evidence

- https://huggingface.co/api/models/sparks-solutions/ELAM-7B (retrieved 2026-11-09T19:56:36Z; SHA-256 4fe9205253eb9bb21cdf49e0d6f1cc4c387f2393eb1372191adef72ee6db573a)
- https://huggingface.co/api/models/sparks-solutions/ELAM-7B (retrieved 2026-11-09T19:56:36Z; SHA-256 4fe9205253eb9bb21cdf49e0d6f1cc4c387f2393eb1372191adef72ee6db573a)

---

## espetro/htlm-lfm2.5-350m

A fine-tuned LFM2.5-350M model that selects click, type, or select actions from an instruction and indexed web elements, with a GGUF file for browser inference.

- Catalog URL: https://awesomecua.com/resources/url-df38112df002157ce4b0/
- Original source: https://huggingface.co/espetro/htlm-lfm2.5-350m
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation, imitation-learning
- Evidence checked: 2026-11-09T19:56:53Z
- ID: url:df38112df002157ce4b0

### Limitations

The card says the model was fine-tuned with LoRA on Mind2Web and reports results on 408 held-out tasks. The listed repository file is a Q8 GGUF checkpoint; the card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-df38112df002157ce4b0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/espetro/htlm-lfm2.5-350m

### Primary evidence

- https://huggingface.co/api/models/espetro/htlm-lfm2.5-350m (retrieved 2026-11-09T19:56:53Z; SHA-256 2ab2ead4590483cdb9c7d792ba9344ca1aaeab3890ee67e54f9f77625801fbb9)
- https://huggingface.co/api/models/espetro/htlm-lfm2.5-350m (retrieved 2026-11-09T19:56:53Z; SHA-256 2ab2ead4590483cdb9c7d792ba9344ca1aaeab3890ee67e54f9f77625801fbb9)

---

## EvoCUA 32B 20260105

Larger EvoCUA computer-use agent checkpoint (20260105 release) with about 33B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.

- Catalog URL: https://awesomecua.com/resources/url-60a95f34072aeb2771cc/
- Original source: https://huggingface.co/meituan/EvoCUA-32B-20260105
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, planning
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:60a95f34072aeb2771cc

- Record JSON: https://awesomecua.com/resources/url-60a95f34072aeb2771cc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/meituan/EvoCUA-32B-20260105

### Primary evidence

- https://huggingface.co/api/models/meituan/EvoCUA-32B-20260105 (retrieved 2026-10-16T06:50:49Z; SHA-256 f42d9537a05f2562b57e5d508f95c3d29a9107d06574318c5715c7da5fb2a86d)
- https://huggingface.co/api/models/meituan/EvoCUA-32B-20260105 (retrieved 2026-10-16T06:50:49Z; SHA-256 f42d9537a05f2562b57e5d508f95c3d29a9107d06574318c5715c7da5fb2a86d)

---

## EvoCUA 8B 20260105

EvoCUA computer-use agent checkpoint (20260105 release) with about 8.8B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.

- Catalog URL: https://awesomecua.com/resources/url-2a2682f86dcb8ebc9a80/
- Original source: https://huggingface.co/meituan/EvoCUA-8B-20260105
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, planning
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:2a2682f86dcb8ebc9a80

- Record JSON: https://awesomecua.com/resources/url-2a2682f86dcb8ebc9a80/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/meituan/EvoCUA-8B-20260105

### Primary evidence

- https://huggingface.co/api/models/meituan/EvoCUA-8B-20260105 (retrieved 2026-10-16T06:50:49Z; SHA-256 3fd1e50729e97746fec57c7d5da6f093d76fb9174e74c3f2c630fed5486fe995)
- https://huggingface.co/api/models/meituan/EvoCUA-8B-20260105 (retrieved 2026-10-16T06:50:49Z; SHA-256 3fd1e50729e97746fec57c7d5da6f093d76fb9174e74c3f2c630fed5486fe995)

---

## Fara 7B

Microsoft's Fara checkpoint, a Qwen2.5-VL-architecture image-text-to-text model with about 8.3B BF16 parameters, English, MIT-licensed and linked to arXiv paper 2511.19663.

- Catalog URL: https://awesomecua.com/resources/url-a4da77ee63f879cc8e63/
- Original source: https://huggingface.co/microsoft/Fara-7b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:a4da77ee63f879cc8e63

- Record JSON: https://awesomecua.com/resources/url-a4da77ee63f879cc8e63/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/Fara-7b

### Primary evidence

- https://huggingface.co/api/models/microsoft/Fara-7b (retrieved 2026-10-16T06:50:49Z; SHA-256 92bfa3c1f34e7e76a35f72389a3b3dd9fdab5fcff0569c9fc8aabe331c703f07)
- https://huggingface.co/api/models/microsoft/Fara-7b (retrieved 2026-10-16T06:50:49Z; SHA-256 92bfa3c1f34e7e76a35f72389a3b3dd9fdab5fcff0569c9fc8aabe331c703f07)
- https://huggingface.co/api/models/microsoft/Fara-7B (retrieved 2026-10-17T19:14:59Z; SHA-256 cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398)
- https://huggingface.co/api/models/microsoft/Fara-7b (retrieved 2026-10-17T19:15:00Z; SHA-256 cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398)
- https://huggingface.co/api/models/microsoft/fara-7b (retrieved 2026-10-17T19:15:01Z; SHA-256 cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398)

---

## Ferret-UI

Screen understanding research within the Ferret model family.

- Catalog URL: https://awesomecua.com/resources/github-apple-ml-ferret/
- Original source: https://github.com/apple/ml-ferret
- Kind: model
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:apple/ml-ferret

### Limitations

The repository has moved from apple/ml-ferret to apple-aiml-research/ml-ferret; evidence uses the dedicated ferretui component.

- Record JSON: https://awesomecua.com/resources/github-apple-ml-ferret/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/apple-aiml-research/ml-ferret/main/ferretui/README.md (retrieved 2026-10-16T06:40:52Z; SHA-256 1973f702c08ca9637ce03bc28fc34188be05826e9d43f9992b08e804f474b1a1)

---

## GELab Zero 4B Preview

Preview GELab-Zero phone-use agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct, with about 4.4B BF16 parameters, tagged for Android in English and Chinese, under Apache-2.0.

- Catalog URL: https://awesomecua.com/resources/url-d7ad447ecd712c6d51b8/
- Original source: https://huggingface.co/stepfun-ai/GELab-Zero-4B-preview
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:d7ad447ecd712c6d51b8

- Record JSON: https://awesomecua.com/resources/url-d7ad447ecd712c6d51b8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/stepfun-ai/GELab-Zero-4B-preview

### Primary evidence

- https://huggingface.co/api/models/stepfun-ai/GELab-Zero-4B-preview (retrieved 2026-10-16T06:50:49Z; SHA-256 cd1efa947316f13967165ac906400170df6d28446804ba0763a49fc21a731e7e)
- https://huggingface.co/api/models/stepfun-ai/GELab-Zero-4B-preview (retrieved 2026-10-16T06:50:49Z; SHA-256 cd1efa947316f13967165ac906400170df6d28446804ba0763a49fc21a731e7e)

---

## GELab-Engine-7B

Qwen2.5-VL 7B checkpoint released with GUI Exploration Lab, a synthetic GUI environment of screens linked by a navigation graph, where agents learn screen navigation through SFT, single-turn RL and multi-turn RL.

- Catalog URL: https://awesomecua.com/resources/url-41b685bbd42fbd4732da/
- Original source: https://huggingface.co/Summoneryhl/GELab-Engine-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-11-10T03:01:08Z
- ID: url:41b685bbd42fbd4732da

### Limitations

Four sharded safetensors files with a Qwen2_5_VLForConditionalGeneration config; the card declares Apache-2.0 and has no other text, and the README link names no training stage. The GE-Lab README evaluates checkpoints with eval/inference_qwen2p5_mixed_vllm.py on its test data.

- Record JSON: https://awesomecua.com/resources/url-41b685bbd42fbd4732da/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Summoneryhl/GELab-Engine-7B

### Primary evidence

- https://huggingface.co/api/models/Summoneryhl/GELab-Engine-7B (retrieved 2026-11-10T03:01:08Z; SHA-256 380b9f778978d2acbe31f6933445aaf1d079cdb26cf29065a7e9e52bdbd4b503)
- https://huggingface.co/api/models/Summoneryhl/GELab-Engine-7B (retrieved 2026-11-10T03:01:08Z; SHA-256 380b9f778978d2acbe31f6933445aaf1d079cdb26cf29065a7e9e52bdbd4b503)

---

## GLM-4.5V

A released vision-language model that documents screen reading, icon recognition, visual-element grounding and desktop operation assistance among its supported tasks.

- Catalog URL: https://awesomecua.com/resources/url-97cfbcd45f879ff71499/
- Original source: https://huggingface.co/zai-org/GLM-4.5V
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T19:57:46Z
- ID: url:97cfbcd45f879ff71499

### Limitations

The repository contains model weight shards, configuration and tokenizer files. The card declares an MIT license and gives usage examples for Transformers, SGLang and vLLM.

- Record JSON: https://awesomecua.com/resources/url-97cfbcd45f879ff71499/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/GLM-4.5V

### Primary evidence

- https://huggingface.co/api/models/zai-org/GLM-4.5V (retrieved 2026-11-09T19:57:46Z; SHA-256 0109dcdce4f3a728e5c0c6ea22102d2cf4fea2480eb1407b8042c5516ea5a15a)
- https://huggingface.co/api/models/zai-org/GLM-4.5V (retrieved 2026-11-09T19:57:46Z; SHA-256 0109dcdce4f3a728e5c0c6ea22102d2cf4fea2480eb1407b8042c5516ea5a15a)

---

## GLM-4.5V-FP8

A vision-language model release with FP8 weights whose card documents screen reading, icon recognition, desktop assistance and visual element localization.

- Catalog URL: https://awesomecua.com/resources/url-fc8bf80ab1747df651ca/
- Original source: https://huggingface.co/zai-org/GLM-4.5V-FP8
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T21:09:35Z
- ID: url:fc8bf80ab1747df651ca

### Limitations

The repository includes safetensors weight shards and configuration files. The card identifies GLM-4.5-Air as its base model and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-fc8bf80ab1747df651ca/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/GLM-4.5V-FP8

### Primary evidence

- https://huggingface.co/api/models/zai-org/GLM-4.5V-FP8 (retrieved 2026-11-09T21:09:35Z; SHA-256 6cd27681315f647131e5d646d6883b75067c6da973deaf49622158f7eef9b4e7)
- https://huggingface.co/api/models/zai-org/GLM-4.5V-FP8 (retrieved 2026-11-09T21:09:35Z; SHA-256 6cd27681315f647131e5d646d6883b75067c6da973deaf49622158f7eef9b4e7)

---

## GLM-4.6V

GLM-4.6V is a vision-language model whose release describes screenshot-based tool use and reconstruction and editing of web interfaces from UI images.

- Catalog URL: https://awesomecua.com/resources/url-17d4fdd26efe4e3b9e05/
- Original source: https://huggingface.co/zai-org/GLM-4.6V
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding, ui-design, tool-integration
- Evidence checked: 2026-11-09T21:09:29Z
- ID: url:17d4fdd26efe4e3b9e05

### Limitations

The Hugging Face repository hosts model weights and gives Transformers, vLLM, and SGLang usage instructions. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-17d4fdd26efe4e3b9e05/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/GLM-4.6V

### Primary evidence

- https://huggingface.co/api/models/zai-org/GLM-4.6V (retrieved 2026-11-09T21:09:29Z; SHA-256 dcc11a24548637b9dbcd5ee9f388ae06621948a97245062872cdddb7e8564b5a)
- https://huggingface.co/api/models/zai-org/GLM-4.6V (retrieved 2026-11-09T21:09:29Z; SHA-256 dcc11a24548637b9dbcd5ee9f388ae06621948a97245062872cdddb7e8564b5a)

---

## GLM-4.6V-Flash

GLM-4.6V-Flash is a vision-language checkpoint that accepts screenshots in tool calls and can reconstruct and edit web interfaces from UI images.

- Catalog URL: https://awesomecua.com/resources/url-e01fe95f620b699bb00d/
- Original source: https://huggingface.co/zai-org/GLM-4.6V-Flash
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: ui-design, screen-understanding, tool-integration
- Evidence checked: 2026-11-09T21:08:30Z
- ID: url:e01fe95f620b699bb00d

### Limitations

The repository lists model weight shards and a Transformers usage example. The card also describes SGLang and vLLM inference options and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-e01fe95f620b699bb00d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/GLM-4.6V-Flash

### Primary evidence

- https://huggingface.co/api/models/zai-org/GLM-4.6V-Flash (retrieved 2026-11-09T21:08:30Z; SHA-256 ff24067088d069d9defee41c41c6aac08dc1939970eaab081fc3546bc4bfce4e)
- https://huggingface.co/api/models/zai-org/GLM-4.6V-Flash (retrieved 2026-11-09T21:08:30Z; SHA-256 ff24067088d069d9defee41c41c6aac08dc1939970eaab081fc3546bc4bfce4e)

---

## GLM-4.6V-FP8

An FP8 multimodal model checkpoint supports tool calls using screenshots as inputs and generates or edits frontend code from images of interfaces.

- Catalog URL: https://awesomecua.com/resources/url-2a99aab63fc1fe65610d/
- Original source: https://huggingface.co/zai-org/GLM-4.6V-FP8
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, ui-design, tool-integration
- Evidence checked: 2026-11-09T19:56:04Z
- ID: url:2a99aab63fc1fe65610d

### Limitations

The repository contains model weight shards and a Transformers usage example. The card also names SGLang and vLLM serving options and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-2a99aab63fc1fe65610d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/GLM-4.6V-FP8

### Primary evidence

- https://huggingface.co/api/models/zai-org/GLM-4.6V-FP8 (retrieved 2026-11-09T19:56:04Z; SHA-256 03b42ee2dee21fa1f5cfda6b31f049514e6476f3e18a1d9fea1c24322accbf35)
- https://huggingface.co/api/models/zai-org/GLM-4.6V-FP8 (retrieved 2026-11-09T19:56:04Z; SHA-256 03b42ee2dee21fa1f5cfda6b31f049514e6476f3e18a1d9fea1c24322accbf35)

---

## GLM-V

Z.ai repository for the open-weight GLM-4.1V-Thinking, GLM-4.5V and GLM-4.6V vision-language models, with GUI-agent prompt examples for mobile, PC and web plus a released VLM reward system.

- Catalog URL: https://awesomecua.com/resources/github-zai-org-glm-v/
- Original source: https://github.com/zai-org/GLM-V
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, reward-models
- Evidence checked: 2026-10-18T11:09:25Z
- ID: github:zai-org/glm-v

### Limitations

General-purpose vision-language model family; the README lists GUI agent operation (screen reading, icon recognition, desktop operation assistance) as one GLM-4.5V capability, so the record is adjacent. The inspected tree has examples/gui-agent prompt and output-handling code for GLM-4.1V and GLM-4.5V, and glmv_reward scripts named for AndroidWorld, OSWorld and WebVoyager. Checkpoints are hosted separately on Hugging Face and ModelScope. The README states (2026-09-02) that maintenance has ended and points to GLM-5 for newer models. github.com/THUDM/GLM-4.1V-Thinking resolves to the same repository 1010055053 and is recorded as a repository alias. The LICENSE file is Apache-2.0 text for repository code; checkpoint weights terms were not reviewed and stay unknown.

- Record JSON: https://awesomecua.com/resources/github-zai-org-glm-v/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/README.md (retrieved 2026-10-18T11:09:25Z; SHA-256 f518aecf28e2a4166b537a8db59797a67fd5e0d8b3d698751898d40b8aa3ad7d)
- https://api.github.com/repos/zai-org/GLM-V (retrieved 2026-10-18T11:09:45Z; SHA-256 3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380)
- https://api.github.com/repos/zai-org/GLM-V/git/trees/main?recursive=1 (retrieved 2026-10-18T11:09:46Z; SHA-256 b37cec03ba134f0230c7711182f9f1920387f162506e59b64a90c0ed4b714c70)
- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE (retrieved 2026-10-18T11:09:52Z; SHA-256 086c6e7f5082b4640dfb03a892f32504f24afd247c702c38a3aae8c3474c54f0)
- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE (retrieved 2026-10-18T11:09:52Z; SHA-256 086c6e7f5082b4640dfb03a892f32504f24afd247c702c38a3aae8c3474c54f0)
- https://api.github.com/repos/THUDM/GLM-4.1V-Thinking (retrieved 2026-10-18T11:09:53Z; SHA-256 3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380)
- https://api.github.com/repos/zai-org/GLM-V (retrieved 2026-10-18T11:09:45Z; SHA-256 3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380)

---

## Go-Browse WebArena Qwen 7B

A Qwen-2.5-7B-Instruct checkpoint fine-tuned on Go-Browse WebArena trajectories for website task execution.

- Catalog URL: https://awesomecua.com/resources/url-db1b7b7efe3755ae5693/
- Original source: https://huggingface.co/apurvaga/go-browse-wa-qwen-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:db1b7b7efe3755ae5693

### Limitations

Seven public safetensors shards and model/tokenizer files are present. The card links the official code and paper but declares no weight license. The code repository’s MIT license is not inherited by this checkpoint, and the separate NNetNav-trained comparison model is not treated as an alias.

- Record JSON: https://awesomecua.com/resources/url-db1b7b7efe3755ae5693/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/apurvaga/go-browse-wa-qwen-7B/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 470ef6f975990518f9622b259a6b8e5761b26dcd22985c248f1df2beb4aa2760)
- https://huggingface.co/api/models/apurvaga/go-browse-wa-qwen-7B (retrieved 2026-10-17T02:44:50Z; SHA-256 d083bf53b20c6c6124f1df29a83ce783799d46a1ab5600d19d658729fc6d67bb)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566)

---

## GroundAnything-VLM

GroundAnything-VLM is an autoregressive visual grounding checkpoint that locates image targets, including GUI elements, from referring instructions.

- Catalog URL: https://awesomecua.com/resources/url-a80a37148148aad731a9/
- Original source: https://huggingface.co/GroundingPI/GroundAnything-VLM
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:56:15Z
- ID: url:a80a37148148aad731a9

### Limitations

The repository provides model weights and a serving recipe. The card says the project's contributions use Apache 2.0 terms while Kimi-derived material retains its upstream license.

- Record JSON: https://awesomecua.com/resources/url-a80a37148148aad731a9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/GroundingPI/GroundAnything-VLM

### Primary evidence

- https://huggingface.co/api/models/GroundingPI/GroundAnything-VLM (retrieved 2026-11-09T19:56:15Z; SHA-256 90330ba68f9e134e894e00af8ba172c39df762f11485d1e970ec540f158ef8dc)
- https://huggingface.co/api/models/GroundingPI/GroundAnything-VLM (retrieved 2026-11-09T19:56:15Z; SHA-256 90330ba68f9e134e894e00af8ba172c39df762f11485d1e970ec540f158ef8dc)

---

## GroundGUI-8B

Screenshot grounding checkpoint that emits a single click in a normalized coordinate space.

- Catalog URL: https://awesomecua.com/resources/url-de31b07ff24ab15d9bdf/
- Original source: https://huggingface.co/PrentisAI/GroundGUI-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, web, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:de31b07ff24ab15d9bdf

### Limitations

License declarations apply to this checkpoint separately from code and training data.

- Record JSON: https://awesomecua.com/resources/url-de31b07ff24ab15d9bdf/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md

### Primary evidence

- https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 73a4690fab49d3b08ea9b0b1e44d62d5ec1802614f5cf22c37ed92dca49aa520)
- https://huggingface.co/api/models/PrentisAI/GroundGUI-8B (retrieved 2026-10-17T01:49:48Z; SHA-256 8b680b9a63e654fe0b43754201d30c91714859578f294f4781e035280e862657)
- https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 73a4690fab49d3b08ea9b0b1e44d62d5ec1802614f5cf22c37ed92dca49aa520)

---

## GT-r1

A GUI defect detection model trained with VLM-R1 reinforcement learning that inspects an app screenshot and labels it as a content display error, UI layout issue, missing UI element or no defect.

- Catalog URL: https://awesomecua.com/resources/url-1a6fc60f2b931acbd057/
- Original source: https://huggingface.co/konkazzz/GT-r1
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:02Z
- ID: url:1a6fc60f2b931acbd057

### Limitations

Four safetensors shards plus a data&evaluate folder with data_train.json (1,593 items), data_test.json (177 items), a Defective_Open_Source archive and model_evaluate.py; the card declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-1a6fc60f2b931acbd057/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/konkazzz/GT-r1

### Primary evidence

- https://huggingface.co/api/models/konkazzz/GT-r1 (retrieved 2026-11-10T03:01:02Z; SHA-256 dff9f194dcc3e2910bd93bb664e9023d85069e9fb72bf94dbc1053275e7e6a27)
- https://huggingface.co/api/models/konkazzz/GT-r1 (retrieved 2026-11-10T03:01:02Z; SHA-256 dff9f194dcc3e2910bd93bb664e9023d85069e9fb72bf94dbc1053275e7e6a27)

---

## GTA1-7B

A released GUI grounding checkpoint trained with GRPO to predict an element's coordinates from a screenshot and description, with inference code and reported evaluations.

- Catalog URL: https://awesomecua.com/resources/url-9ca4709eb2e41c0fced6/
- Original source: https://huggingface.co/HelloKKMe/GTA1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:9ca4709eb2e41c0fced6

### Limitations

The repository includes model weight shards. The card provides a Transformers inference example and declares the Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-9ca4709eb2e41c0fced6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/HelloKKMe/GTA1-7B

### Primary evidence

- https://huggingface.co/api/models/HelloKKMe/GTA1-7B (retrieved 2026-11-09T21:08:46Z; SHA-256 192dbf1ab8b88a71a8e90bfe944560eb0b9da463a27632d77b453e92920137e3)
- https://huggingface.co/api/models/HelloKKMe/GTA1-7B (retrieved 2026-11-09T21:08:46Z; SHA-256 192dbf1ab8b88a71a8e90bfe944560eb0b9da463a27632d77b453e92920137e3)

---

## GTA1-7B

Released GUI grounding checkpoint trained with reinforcement learning to predict click coordinates from screenshots and instructions, with inference examples and reported benchmark results.

- Catalog URL: https://awesomecua.com/resources/url-fa6761a4612fab664a7c/
- Original source: https://huggingface.co/Salesforce/GTA1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, reinforcement-learning, action-prediction, evaluation
- Evidence checked: 2026-11-09T05:05:09Z
- ID: url:fa6761a4612fab664a7c

### Limitations

The card declares an MIT license and shows vLLM-based inference code using the Salesforce/GTA1-7B checkpoint. It reports results on ScreenSpot, OSWorld, and WindowsAgentArena benchmarks.

- Record JSON: https://awesomecua.com/resources/url-fa6761a4612fab664a7c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/Salesforce/GTA1-7B

### Primary evidence

- https://huggingface.co/api/models/Salesforce/GTA1-7B (retrieved 2026-11-09T05:05:09Z; SHA-256 73f8db102da38c690804633c5d9829a06d9c4c73d4a0cf8fdf234b91b90940f8)
- https://huggingface.co/api/models/Salesforce/GTA1-7B (retrieved 2026-11-09T05:05:09Z; SHA-256 73f8db102da38c690804633c5d9829a06d9c4c73d4a0cf8fdf234b91b90940f8)

---

## GTA1-7B-2507

GTA1-7B-2507 is a GUI-grounding checkpoint trained with reinforcement learning to locate described elements in screenshots and return click coordinates.

- Catalog URL: https://awesomecua.com/resources/url-691c52679bb1d3521db7/
- Original source: https://huggingface.co/Salesforce/GTA1-7B-2507
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:691c52679bb1d3521db7

### Limitations

The card includes inference code using Qwen2.5-VL components and declares an Apache-2.0 license. It cites the GTA1 paper.

- Record JSON: https://awesomecua.com/resources/url-691c52679bb1d3521db7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Salesforce/GTA1-7B-2507

### Primary evidence

- https://huggingface.co/api/models/Salesforce/GTA1-7B-2507 (retrieved 2026-11-09T05:05:20Z; SHA-256 3250e912d601fae99985da24b73dde65b523381edcaa1a728c48c43af3dff013)
- https://huggingface.co/api/models/Salesforce/GTA1-7B-2507 (retrieved 2026-11-09T05:05:20Z; SHA-256 3250e912d601fae99985da24b73dde65b523381edcaa1a728c48c43af3dff013)

---

## GUI-Actor 2B Qwen2-VL

GUI-Actor grounding checkpoint built on Qwen2-VL-2B-Instruct with an attention-based action head that proposes ranked click points for an instruction on a screenshot, without emitting coordinates as text.

- Catalog URL: https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/
- Original source: https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-18T12:04:10Z
- ID: url:e42b286fd85b62bd7bb1

### Limitations

Hub API at revision 8f87b366 lists one BF16 safetensors file (about 2.23B parameters); the config names Qwen2VLForConditionalGenerationWithPointer, which loads through the GUI-Actor code. Access to the repository is open. The card says it was fine-tuned for GUI grounding on the cckevinn/GUI-Actor-Data dataset and reports 36.7 on ScreenSpot-Pro, 86.5 on ScreenSpot and 88.6 on ScreenSpot-v2 for this size; these are publisher measurements. The card declares MIT for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md

### Primary evidence

- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md (retrieved 2026-10-18T12:04:10Z; SHA-256 8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413)
- https://huggingface.co/api/models/microsoft/GUI-Actor-2B-Qwen2-VL/revision/8f87b366d004425a9823502553e2097c71116ece (retrieved 2026-10-18T12:04:10Z; SHA-256 1e94e0139ceb46ef70eef0c9b72f22ad623c2d99de41d42522606c0a2847a622)
- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md (retrieved 2026-10-18T12:04:10Z; SHA-256 8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413)

---

## GUI-Actor 3B Qwen2.5-VL

GUI-Actor grounding checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct with an attention-based action head, with about 3.8B BF16 parameters and a config naming a pointer variant of the Qwen2.5-VL class, under MIT.

- Catalog URL: https://awesomecua.com/resources/url-0c400260635b7e4ab7c0/
- Original source: https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-18T12:01:43Z
- ID: url:0c400260635b7e4ab7c0

### Limitations

The card's heading says GUI-Actor-7B with a Qwen2.5-VL-7B backbone, but its metadata, text and usage code name Qwen2.5-VL-3B-Instruct and this repository; the API reports 3,787,653,120 BF16 parameters and the Qwen2_5_VLForConditionalGenerationWithPointer class, which loads through the gui_actor package. The Hub manifest lists two Safetensors shards, an index and trainer_state.json. ScreenSpot results in the card are publisher-reported. MIT is the card's weight declaration; Qwen2.5-VL and training-data terms are separate.

- Record JSON: https://awesomecua.com/resources/url-0c400260635b7e4ab7c0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md

### Primary evidence

- https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md (retrieved 2026-10-18T12:01:43Z; SHA-256 44bd4da4738b849135cd0ec03f8c6ffe6d1bac113b649178b9cbcb3ba295f7c4)
- https://huggingface.co/api/models/microsoft/GUI-Actor-3B-Qwen2.5-VL (retrieved 2026-10-18T12:01:43Z; SHA-256 f2a9b098a0b5f104c1692949849ee4f92f333b74c3cd51c51ed03847386f3464)
- https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md (retrieved 2026-10-18T12:01:43Z; SHA-256 44bd4da4738b849135cd0ec03f8c6ffe6d1bac113b649178b9cbcb3ba295f7c4)

---

## GUI-AIMA-3B

GUI grounding model that predicts click locations from attention between a learnable ANCHOR token and visual patches, extra-trained on 250k GroundCUA samples; the authors report 61.5% on ScreenSpot-Pro with 2-step zoom.

- Catalog URL: https://awesomecua.com/resources/url-638d229f7a02760ae9dc/
- Original source: https://huggingface.co/smz8599/GUI-AIMA-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:638d229f7a02760ae9dc

### Limitations

Two safetensors shards with tokenizer, chat template and args.json; the card lists Qwen/Qwen2.5-3B-Instruct as base model. The GUI-AIMA repository holds training, data preparation and grounding-benchmark evaluation code and a lighter GUI-AIMA-lite-3B variant.

- Record JSON: https://awesomecua.com/resources/url-638d229f7a02760ae9dc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/smz8599/GUI-AIMA-3B (retrieved 2026-11-10T03:01:04Z; SHA-256 5338cbdde8731dbe7995ad199cea259b9157522aec1b9f0bf007d14616224a5a)
- https://huggingface.co/api/models/smz8599/GUI-AIMA-3B (retrieved 2026-11-10T03:01:04Z; SHA-256 5338cbdde8731dbe7995ad199cea259b9157522aec1b9f0bf007d14616224a5a)

---

## GUI-G1

GUI-grounding training code that modifies reasoning templates, reward functions, and the GRPO objective, with a linked model release.

- Catalog URL: https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/
- Original source: https://github.com/Yuqi-Zhou/GUI-G1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:yuqi-zhou/gui-g1

### Limitations

The README retains an older release-pending notice alongside a later checkpoint-release announcement. Check the linked model card for current weight availability and terms.

- Record JSON: https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 2d64349b514c43fb9d0260247300412d33cadc2a029d8279a00cb2a12f26a25a)
- https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/LICENSE (retrieved 2026-10-16T10:48:43Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## GUI-G1 3B v1

A Qwen2.5-VL-3B checkpoint released for R1-style visual grounding experiments, predicting interface target locations from screenshots and instructions.

- Catalog URL: https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/
- Original source: https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-17T02:44:30Z
- ID: url:9dc9d8d3b9a4b32d6f4b

### Limitations

Two public safetensors shards and model/tokenizer configuration are present. The card declares MIT. Its inference example loads the v1 model but names a different 0.1K processor checkpoint.

- Record JSON: https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md

### Primary evidence

- https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 b7a4628a4d65ae226b50086075f3977b8f69ad12d15238a194675875bb9113e8)
- https://huggingface.co/api/models/Yuqi-Zhou/GUI-G1-3B-v1 (retrieved 2026-10-17T02:44:30Z; SHA-256 2f4b2084ca9cfd67f0952ea8c578c87f3a5d721064b5de3a191d7489373125aa)
- https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 b7a4628a4d65ae226b50086075f3977b8f69ad12d15238a194675875bb9113e8)

---

## GUI-G2 3B

The 3B GUI-G2 grounding checkpoint: Qwen2.5-VL-3B-Instruct fine-tuned with Gaussian point and coverage rewards to locate interface elements in screenshots from text instructions.

- Catalog URL: https://awesomecua.com/resources/url-d80fa13b647c4020a755/
- Original source: https://huggingface.co/inclusionAI/GUI-G2-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning, reward-models
- Evidence checked: 2026-10-18T16:05:24Z
- ID: url:d80fa13b647c4020a755

### Limitations

Hub API at revision 41325677 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card names Qwen2.5-VL-3B-Instruct as the base in prose but sets no base_model field. Its ScreenSpot-v2 table reports only the 7B release and says 3B grounding results are still to come, so no score is recorded here. The project README announces the 3B and 7B releases together. Apache-2.0 is the model-card weight declaration, not a code or training-data license.

- Record JSON: https://awesomecua.com/resources/url-d80fa13b647c4020a755/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md

### Primary evidence

- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md (retrieved 2026-10-18T16:05:24Z; SHA-256 fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9)
- https://huggingface.co/api/models/inclusionAI/GUI-G2-3B/revision/413256770087058c21662c05c13fa8c199a08fb4 (retrieved 2026-10-18T16:04:21Z; SHA-256 cfdbdc73fa2cd8fdd0387d849f3d2a0cfa7d5fd794ea18e6672a7a2f91f08f2a)
- https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/5c5c36581654364073385e37deca28f4d765aa94/README.md (retrieved 2026-10-18T16:04:47Z; SHA-256 f9ecdf208ed4b7845ea4dbd1a7c936c016d11f7ec28f17e71338ab3c2f5b5c0d)
- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md (retrieved 2026-10-18T16:05:24Z; SHA-256 fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9)

---

## GUI-G2 7B

A Qwen2.5-VL grounding checkpoint trained with Gaussian point and coverage rewards whose granularity adapts to interface-element scale.

- Catalog URL: https://awesomecua.com/resources/url-90eea6f6d099a3297850/
- Original source: https://huggingface.co/inclusionAI/GUI-G2-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning, reward-models
- Evidence checked: 2026-10-17T02:44:29Z
- ID: url:90eea6f6d099a3297850

### Limitations

The model card and four public safetensors shards establish this specific release. Apache-2.0 is declared for the model. The release targets element grounding; long-horizon task completion is a separate measure.

- Record JSON: https://awesomecua.com/resources/url-90eea6f6d099a3297850/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 cf53a868a010a20b165386edaaafed8918071c35a3babf1766fbb51f020cb4a1)
- https://huggingface.co/api/models/inclusionAI/GUI-G2-7B (retrieved 2026-10-17T02:44:29Z; SHA-256 c1f11fea30d3a64445e983a011db4efb9515a4221ad770e3a5223699e665eebe)
- https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 cf53a868a010a20b165386edaaafed8918071c35a3babf1766fbb51f020cb4a1)

---

## GUI-Owl 1.5 8B Instruct

Instruct variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.

- Catalog URL: https://awesomecua.com/resources/url-d01dfc6e5b5fcece7b41/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, planning, tool-integration, memory
- Evidence checked: 2026-10-18T12:00:37Z
- ID: url:d01dfc6e5b5fcece7b41

### Limitations

The card describes instruct models as the variants for fast inference and edge deployment; the thinking 8B checkpoint is a separate repository. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 8,767,123,696 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- Record JSON: https://awesomecua.com/resources/url-d01dfc6e5b5fcece7b41/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md (retrieved 2026-10-18T12:00:37Z; SHA-256 8475893c60088555dec53ff30acab04533acbaa59a34ea95a15cb7fcf587c546)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-8B-Instruct (retrieved 2026-10-18T12:00:37Z; SHA-256 071c6e2a4a1b5c1f92bd16fe1ca5b56bce8005b95942a0f1f6a45a9c29d83a10)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md (retrieved 2026-10-18T12:00:37Z; SHA-256 8475893c60088555dec53ff30acab04533acbaa59a34ea95a15cb7fcf587c546)

---

## GUI-Owl 32B

The 32B GUI-Owl checkpoint from the Mobile-Agent-v3 project, fine-tuned from Qwen2.5-VL-32B-Instruct for GUI grounding and actions, and usable as specialized agents in the Mobile-Agent-v3 framework.

- Catalog URL: https://awesomecua.com/resources/url-a92e7dfcdfdcacb2e634/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: grounding, action-prediction, planning
- Evidence checked: 2026-10-18T16:07:56Z
- ID: url:a92e7dfcdfdcacb2e634

### Limitations

This is the original GUI-Owl 32B release; the 7B checkpoint and the later GUI-Owl 1.5 generation are separate releases, with results and terms scoped to each release. The card recommends serving with vLLM and gives a tensor-parallel serving script. The manifest lists 18 Safetensors shards and the Hub reports 33,452,718,336 BF16 parameters. The card declares MIT for the checkpoint and marks its online demo as coming soon. Benchmark results on the card are publisher claims.

- Record JSON: https://awesomecua.com/resources/url-a92e7dfcdfdcacb2e634/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md

- weights review: Publisher model-card declaration for the 32B checkpoint; the Qwen2.5-VL-32B-Instruct base license, code and training-data terms are separate.
  Sources: https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md (retrieved 2026-10-18T16:07:56Z; SHA-256 69f9d76257f3367bc0e040abd6829dc1c2e9e0f0a952c36041830d4c81a42899)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-32B (retrieved 2026-10-18T16:07:55Z; SHA-256 39ca8b14b55c5ae7a14435d00f1ead9364415bd4d1519570f760c79fd02b1598)
- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/config.json (retrieved 2026-10-18T16:07:56Z; SHA-256 17e9a4504376618c295560c89a9f35c11a41093c8342cf289645e7434a106205)
- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md (retrieved 2026-10-18T16:07:56Z; SHA-256 69f9d76257f3367bc0e040abd6829dc1c2e9e0f0a952c36041830d4c81a42899)

---

## GUI-Owl 7B

A Qwen2.5-VL-based GUI checkpoint released with Mobile-Agent-v3 for grounded actions and specialized roles in its agent framework.

- Catalog URL: https://awesomecua.com/resources/url-aeb32973694f91ad9920/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: grounding, action-prediction, planning
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:aeb32973694f91ad9920

### Limitations

Five public safetensors shards are present. MIT is declared in this model card. This record identifies the original 7B release. The online demo is still marked forthcoming.

- Record JSON: https://awesomecua.com/resources/url-aeb32973694f91ad9920/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 a0e6dd76aee6f138c15f244f4e2e8ba650b8829295397fdbfa839a8edf852b57)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-7B (retrieved 2026-10-17T04:03:40Z; SHA-256 4822eab7fd35e583d52db7369d7d929d69dbde66b27c9da3d370cad9ec06ec89)
- https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 a0e6dd76aee6f138c15f244f4e2e8ba650b8829295397fdbfa839a8edf852b57)

---

## GUI-Owl 7B Desktop-RL

GUI-Owl 7B variant from Mobile-Agent-v3 that is RL-tuned for desktop use on OSWorld, released as a research checkpoint for validating environment-RL improvements, with production use outside its stated purpose.

- Catalog URL: https://awesomecua.com/resources/url-b01a78c76299196e3df1/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T16:00:10Z
- ID: url:b01a78c76299196e3df1

### Limitations

The card calls this a variant of GUI-Owl that is RL-tuned for desktop environments and deployable the same way as GUI-Owl 7B, mainly for validating environment-RL improvements. The X-PLUG/MobileAgent README links it, in its 2025-09-16 news entry, as the OSWorld RL-tuned GUI-Owl checkpoint released alongside the OSWorld code. Hub metadata names Qwen/Qwen2.5-VL-7B-Instruct as base_model. The Hub API lists seven safetensors shards totalling 8,296,592,640 F32 parameters, and config.json, stored through Git LFS, declares Qwen2_5_VLForConditionalGeneration. The card reports no score for this checkpoint. MIT is the card's weight declaration and is not extended to Qwen2.5-VL or training data.

- Record JSON: https://awesomecua.com/resources/url-b01a78c76299196e3df1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md (retrieved 2026-10-18T16:00:10Z; SHA-256 f68fd27d748f7851d5719f639a082e7ffc50365f960233f7e9f50ffeeb5ed360)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-7B-Desktop-RL/revision/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45 (retrieved 2026-10-18T15:59:24Z; SHA-256 ba81245c83a3fa94d4adc7bbba8faf06755ba6579410048a34ec4ee6396c5c2b)
- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/resolve/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/config.json (retrieved 2026-10-18T15:59:24Z; SHA-256 48286d8ef6956f70158ccf6345d837f07b1445b814054ef71b84f2d172a39c4b)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/11cea575561fb7800b5fb6b6cafa56f7a91de11f/README.md (retrieved 2026-10-18T15:59:24Z; SHA-256 ca402ffd3b05f72a6d72f47de52c962f92e410749a77939044f3301d4330af16)
- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md (retrieved 2026-10-18T16:00:10Z; SHA-256 f68fd27d748f7851d5719f639a082e7ffc50365f960233f7e9f50ffeeb5ed360)

---

## GUI-R1 checkpoint bundle

A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.

- Catalog URL: https://awesomecua.com/resources/url-61a5321db10fc8a312b9/
- Original source: https://huggingface.co/ritzzai/GUI-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos, android, web
- Topics: grounding, reinforcement-learning, action-prediction
- Evidence checked: 2026-10-17T02:44:30Z
- ID: url:61a5321db10fc8a312b9

### Limitations

The manifest contains two safetensors shards in GUI-R1-3B and four in GUI-R1-7B. Both are counted as one Hub resource. The model card declares MIT for the model.

- Record JSON: https://awesomecua.com/resources/url-61a5321db10fc8a312b9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md

### Primary evidence

- https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)
- https://huggingface.co/api/models/ritzzai/GUI-R1 (retrieved 2026-10-17T02:44:29Z; SHA-256 3eff86951de7c36dbd4af006ab3f1350213bdfea384494e59c8abc007793c979)
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d)
- https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:44:30Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)

---

## GUI_Reflection_8b_pretrain

GUI Reflection checkpoint from the GUI pre-training stage, trained on grounding, captioning, OCR and VQA data plus reflection-task data, before the offline SFT stage.

- Catalog URL: https://awesomecua.com/resources/url-534151cf8b1e1df5bf96/
- Original source: https://huggingface.co/craigwu/GUI_Reflection_8b_pretrain
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, self-reflection
- Evidence checked: 2026-11-10T06:29:28Z
- ID: url:534151cf8b1e1df5bf96

### Limitations

The repository holds four safetensors shards in InternVL chat format with InternLM2 tokenizer files and training logs. The card declares an MIT license; the project code is in the GUI_Reflection repository.

- Record JSON: https://awesomecua.com/resources/url-534151cf8b1e1df5bf96/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/craigwu/GUI_Reflection_8b_pretrain

### Primary evidence

- https://huggingface.co/api/models/craigwu/GUI_Reflection_8b_pretrain (retrieved 2026-11-10T06:29:28Z; SHA-256 072c2e3b43de18afdce3f4d5d990d380378bbaaab6246e413b2b6844cd5e8850)
- https://huggingface.co/api/models/craigwu/GUI_Reflection_8b_pretrain (retrieved 2026-11-10T06:29:28Z; SHA-256 072c2e3b43de18afdce3f4d5d990d380378bbaaab6246e413b2b6844cd5e8850)

---

## GUI_Reflection_8b_SFT

Final GUI Reflection agent checkpoint, built on InternVL, that predicts mobile GUI actions from a screenshot and task goal after training on reflection and error-correction data.

- Catalog URL: https://awesomecua.com/resources/url-e2c687595af929b4332a/
- Original source: https://huggingface.co/craigwu/GUI_Reflection_8b_SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, self-reflection
- Evidence checked: 2026-11-10T06:29:28Z
- ID: url:e2c687595af929b4332a

### Limitations

The repository holds four safetensors shards in InternVL chat format with InternLM2 tokenizer files and training logs. Inference uses the GUI_Reflection_Agent class in the project repository. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-e2c687595af929b4332a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/craigwu/GUI_Reflection_8b_SFT

### Primary evidence

- https://huggingface.co/api/models/craigwu/GUI_Reflection_8b_SFT (retrieved 2026-11-10T06:29:28Z; SHA-256 7c2a44f894447e6d1a5641f02b44eaa40b57ff56b41096975c3a63856b42725a)
- https://huggingface.co/api/models/craigwu/GUI_Reflection_8b_SFT (retrieved 2026-11-10T06:29:28Z; SHA-256 7c2a44f894447e6d1a5641f02b44eaa40b57ff56b41096975c3a63856b42725a)

---

## gWorld-32B

A released mobile GUI world model that takes a screenshot and an action, then predicts the next interface as renderable HTML. The card identifies Qwen3-VL-32B as its base.

- Catalog URL: https://awesomecua.com/resources/url-e44096836ef47bc66d9c/
- Original source: https://huggingface.co/trillionlabs/gWorld-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: world-models, mobile-navigation, state-tracking
- Evidence checked: 2026-11-09T21:09:12Z
- ID: url:e44096836ef47bc66d9c

### Limitations

The repository lists checkpoint shards, processor files, and training state files. The card declares an Apache 2.0 license and links the model's paper and MWMBench.

- Record JSON: https://awesomecua.com/resources/url-e44096836ef47bc66d9c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/trillionlabs/gWorld-32B

### Primary evidence

- https://huggingface.co/api/models/trillionlabs/gWorld-32B (retrieved 2026-11-09T21:09:12Z; SHA-256 044f432add0ed69ab2646cdacab87172e34cd115a8576e03a269a8b54b63c34e)
- https://huggingface.co/api/models/trillionlabs/gWorld-32B (retrieved 2026-11-09T21:09:12Z; SHA-256 044f432add0ed69ab2646cdacab87172e34cd115a8576e03a269a8b54b63c34e)

---

## gWorld-8B

gWorld-8B is a released mobile GUI world model that predicts the screen after an action by generating renderable HTML from the current screenshot and action.

- Catalog URL: https://awesomecua.com/resources/url-78802d1a2fce25f20f85/
- Original source: https://huggingface.co/trillionlabs/gWorld-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, screen-understanding, mobile-navigation
- Evidence checked: 2026-11-09T19:56:48Z
- ID: url:78802d1a2fce25f20f85

### Limitations

The card supplies vLLM inference code and names Qwen3-VL-8B-Instruct as the base model. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-78802d1a2fce25f20f85/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/trillionlabs/gWorld-8B

### Primary evidence

- https://huggingface.co/api/models/trillionlabs/gWorld-8B (retrieved 2026-11-09T19:56:48Z; SHA-256 88d2177ad0b5bfadffbe349b132907730d5dc55dfd8028eb2854f5c09756388a)
- https://huggingface.co/api/models/trillionlabs/gWorld-8B (retrieved 2026-11-09T19:56:48Z; SHA-256 88d2177ad0b5bfadffbe349b132907730d5dc55dfd8028eb2854f5c09756388a)

---

## Holo1.5 3B

Smallest Holo1.5 checkpoint, fine-tuned from Qwen2.5-VL-3B-Instruct with supervised training then GRPO, for locating interface elements and answering questions about web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-dc20a06c296207ac11a6/
- Original source: https://huggingface.co/Hcompany/Holo1.5-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:14:15Z
- ID: url:dc20a06c296207ac11a6

### Limitations

Hub API at revision f10805d3 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card describes proprietary training data mixed from open-source, synthetic and human-annotated samples, leaving a specific training dataset unlinked; its localization and screen-QA scores are publisher-reported. Mobile is named without an operating system. The card's license field is 'other': it says the 3B size inherits Qwen's license and names the Qwen Research License, and the repository's LICENSE file is an H research agreement limited to non-commercial use. The 7B and 72B sizes carry different terms, and H Company's models page gives the family one CC BY-NC 4.0 label.

- Record JSON: https://awesomecua.com/resources/url-dc20a06c296207ac11a6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md (retrieved 2026-10-18T16:14:15Z; SHA-256 13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2)
- https://huggingface.co/api/models/Hcompany/Holo1.5-3B/revision/f10805d3a566ac2932ca17dfeeed91986ead01f8 (retrieved 2026-10-18T16:13:49Z; SHA-256 619580184acaa520e054f1844a17b0fc44bef8df2dafb9a47ad0dc3bac759223)
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/LICENSE (retrieved 2026-10-18T16:13:21Z; SHA-256 f91e82dddcf31da795865d15dbe3e7bedd2a4170382df5191d672a2f357c4184)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:10:28Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md (retrieved 2026-10-18T16:14:15Z; SHA-256 13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2)

---

## Holo1.5 7B

H Company's Qwen2.5-VL-7B-based Holo1.5 checkpoint for locating interface elements and answering questions about screens across web, desktop and mobile, trained with supervised fine-tuning then GRPO.

- Catalog URL: https://awesomecua.com/resources/url-98e5813bceb30104d6c4/
- Original source: https://huggingface.co/Hcompany/Holo1.5-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:06:18Z
- ID: url:98e5813bceb30104d6c4

### Limitations

Hub API at revision a1019821 lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card names Qwen/Qwen2.5-VL-7B-Instruct as the base and describes proprietary training data mixed from open-source, synthetic and human-annotated samples, so no training dataset is linked. It declares Apache-2.0 for this 7B size only: the same card says the 3B size inherits Qwen's license and the 72B size is research-only. Mobile is named without an operating system.

- Record JSON: https://awesomecua.com/resources/url-98e5813bceb30104d6c4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md (retrieved 2026-10-18T16:06:18Z; SHA-256 2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922)
- https://huggingface.co/api/models/Hcompany/Holo1.5-7B/revision/a1019821ea078820dc284e90214a397faceab2bf (retrieved 2026-10-18T16:06:05Z; SHA-256 fae52db874701c3cb5f4894d8eb5db5859414f2d6709f9ec4add35f182a975db)
- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md (retrieved 2026-10-18T16:06:18Z; SHA-256 2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922)

---

## InfiGUI-G1 7B

A GUI-grounding checkpoint trained with adaptive exploration rewards and multiple candidate answers to improve instruction-to-element alignment.

- Catalog URL: https://awesomecua.com/resources/url-d70a755e3b2102f25f34/
- Original source: https://huggingface.co/InfiX-ai/InfiGUI-G1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-17T02:44:29Z
- ID: url:d70a755e3b2102f25f34

### Limitations

Four safetensors shards are public. The model card declares Apache-2.0 and identifies Qwen2.5-VL-7B-Instruct as its base. It is the G1 grounding checkpoint, distinct from the previously cataloged InfiGUI-R1 reasoning checkpoint; benchmark scores remain publisher claims.

- Record JSON: https://awesomecua.com/resources/url-d70a755e3b2102f25f34/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 253055f0f77266a64d2db5de8fd04c4202f4cda3be733dd1b00d8565116dd240)
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-7B (retrieved 2026-10-17T02:44:29Z; SHA-256 10278eb0f1600557e432a0f8dde2c40cfffe12330ddb949b6a0fc02bfbc6c9ee)
- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 4b68c82a2dd0063a450bde34c8bffbd931565a91a2982a5b47be7e711815b284)
- https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 253055f0f77266a64d2db5de8fd04c4202f4cda3be733dd1b00d8565116dd240)

---

## InternVL3-14B

InternVL3-14B is a multimodal model whose training includes GUI operation examples; its model card also presents a GUI grounding evaluation.

- Catalog URL: https://awesomecua.com/resources/url-adb613aec8c5ebdeab89/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-14B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:08:31Z
- ID: url:adb613aec8c5ebdeab89

### Limitations

The repository lists sharded safetensors weights and model configuration files. The card links the InternVL3 paper.

- Record JSON: https://awesomecua.com/resources/url-adb613aec8c5ebdeab89/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-14B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-14B (retrieved 2026-11-09T21:08:31Z; SHA-256 68ca55ca2ec0273e86877cc9265f52b9529ece84e25254ebe6c1cee76bf9eb23)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-14B (retrieved 2026-11-09T21:08:31Z; SHA-256 68ca55ca2ec0273e86877cc9265f52b9529ece84e25254ebe6c1cee76bf9eb23)

---

## InternVL3-1B

InternVL3-1B is a multimodal model whose training includes GUI operation examples; its model card also presents a GUI grounding evaluation.

- Catalog URL: https://awesomecua.com/resources/url-6d5151d298f88e2602bb/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-1B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:08:30Z
- ID: url:6d5151d298f88e2602bb

### Limitations

The repository lists a safetensors weight file and model configuration files. The card links the InternVL3 paper.

- Record JSON: https://awesomecua.com/resources/url-6d5151d298f88e2602bb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-1B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-1B (retrieved 2026-11-09T21:08:30Z; SHA-256 2495e141b855ab254deacf1d50662a9d54f8bc6c0fada43410213dffa390f89b)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-1B (retrieved 2026-11-09T21:08:30Z; SHA-256 2495e141b855ab254deacf1d50662a9d54f8bc6c0fada43410213dffa390f89b)

---

## InternVL3-2B

A multimodal model checkpoint whose release documents training on GUI operations and evaluation of GUI grounding alongside broader vision-language tasks.

- Catalog URL: https://awesomecua.com/resources/url-34516ed7cef20f813d93/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-2B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:09:02Z
- ID: url:34516ed7cef20f813d93

### Limitations

The repository provides model weights and inference code. The card names InternVL3-2B-Instruct as its base model.

- Record JSON: https://awesomecua.com/resources/url-34516ed7cef20f813d93/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-2B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-2B (retrieved 2026-11-09T21:09:02Z; SHA-256 b706b948289337ee44c5d3b053a0c9b1345d3cc1d39c50dd6b199d75359fa4f0)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-2B (retrieved 2026-11-09T21:09:02Z; SHA-256 b706b948289337ee44c5d3b053a0c9b1345d3cc1d39c50dd6b199d75359fa4f0)

---

## InternVL3-38B

A released InternVL3-38B multimodal checkpoint from a model family whose card documents GUI-operation training samples and GUI-grounding evaluation.

- Catalog URL: https://awesomecua.com/resources/url-b2a83cef835559f24351/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-38B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:57:41Z
- ID: url:b2a83cef835559f24351

### Limitations

The repository lists safetensors weight shards and inference code. The card describes an InternViT vision component and a Qwen2.5 language component; it declares Apache-2.0 in its front matter.

- Record JSON: https://awesomecua.com/resources/url-b2a83cef835559f24351/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-38B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-38B (retrieved 2026-11-09T19:57:41Z; SHA-256 3e7f8fe4342def3be29016047f1f757d423ec79cb6e6794230c13812cfade1fe)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-38B (retrieved 2026-11-09T19:57:41Z; SHA-256 3e7f8fe4342def3be29016047f1f757d423ec79cb6e6794230c13812cfade1fe)

---

## InternVL3-78B

InternVL3-78B is a released multimodal checkpoint whose model-family card describes GUI-operation training data and a GUI-grounding evaluation alongside broader vision-language tasks.

- Catalog URL: https://awesomecua.com/resources/url-6fc89a4fd815cb273777/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-78B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:10:46Z
- ID: url:6fc89a4fd815cb273777

### Limitations

The repository lists sharded safetensors weights, configuration files, tokenizers and model code. The card links the InternVL3 paper and identifies Qwen as the license name.

- Record JSON: https://awesomecua.com/resources/url-6fc89a4fd815cb273777/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/OpenGVLab/InternVL3-78B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-78B (retrieved 2026-11-09T21:10:46Z; SHA-256 823a56d20cd2bbc47763f82d76a8f0079fbd8eaa577e6409dc82c1ceb3b74128)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-78B (retrieved 2026-11-09T21:10:46Z; SHA-256 823a56d20cd2bbc47763f82d76a8f0079fbd8eaa577e6409dc82c1ceb3b74128)

---

## InternVL3-8B

An 8B multimodal checkpoint whose release describes GUI-operation training data and a GUI-grounding evaluation alongside broader image and video tasks.

- Catalog URL: https://awesomecua.com/resources/url-7c01d4caa44763019e36/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding, tool-integration
- Evidence checked: 2026-11-09T19:56:36Z
- ID: url:7c01d4caa44763019e36

### Limitations

The card identifies OpenGVLab/InternVL3-8B-Instruct as its base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-7c01d4caa44763019e36/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-8B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-8B (retrieved 2026-11-09T19:56:36Z; SHA-256 1392304aae595359fa53b856313d44a39dd078fd6f6f60769afe19e3a2dab04a)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-8B (retrieved 2026-11-09T19:56:36Z; SHA-256 1392304aae595359fa53b856313d44a39dd078fd6f6f60769afe19e3a2dab04a)

---

## InternVL3-9B

A released multimodal checkpoint whose training includes GUI operations and whose card documents GUI grounding alongside broader visual and language tasks.

- Catalog URL: https://awesomecua.com/resources/url-1e3655e5a2b664102ac7/
- Original source: https://huggingface.co/OpenGVLab/InternVL3-9B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T19:57:41Z
- ID: url:1e3655e5a2b664102ac7

### Limitations

The repository lists model weight shards, configuration, tokenizer and modeling files. The card declares an MIT license and identifies InternVL3-9B-Instruct as its fine-tuning base.

- Record JSON: https://awesomecua.com/resources/url-1e3655e5a2b664102ac7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/OpenGVLab/InternVL3-9B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3-9B (retrieved 2026-11-09T19:57:41Z; SHA-256 8b8c470d820e017b8a5ec31954aadd4cbf81c2b58fa109b37f079515e0535052)
- https://huggingface.co/api/models/OpenGVLab/InternVL3-9B (retrieved 2026-11-09T19:57:41Z; SHA-256 8b8c470d820e017b8a5ec31954aadd4cbf81c2b58fa109b37f079515e0535052)

---

## InternVL3_5-14B

InternVL3.5 multimodal checkpoint with 15.1B total parameters, trained with CPT, SFT and Cascade RL. The paper reports its GUI grounding and agent results on ScreenSpot, OSWorld-G and WindowsAgentArena.

- Catalog URL: https://awesomecua.com/resources/url-558abdb3eb20b922e01b/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-14B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, linux, windows, web
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:558abdb3eb20b922e01b

### Limitations

Weights ship as 7 safetensors shards with custom InternVL code files, and the card declares Apache-2.0 and links an HF-format variant. Table 10 of the paper reports ScreenSpot 87.5, ScreenSpot-v2 88.6, OSWorld-G 44.7, WindowsAgentArena 12.5 and WebArena-Lite-v2 12.3 for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-558abdb3eb20b922e01b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-14B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B (retrieved 2026-11-10T03:01:04Z; SHA-256 bb28dc5de062a318855f476375e6b6791b64d70cb3ac5df1cbca19ab02bcd83f)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B (retrieved 2026-11-10T03:01:04Z; SHA-256 bb28dc5de062a318855f476375e6b6791b64d70cb3ac5df1cbca19ab02bcd83f)

---

## InternVL3_5-14B-HF

A Hugging Face format checkpoint in the InternVL3.5 multimodal model family, whose card names GUI interaction among its capabilities and describes Cascade RL training.

- Catalog URL: https://awesomecua.com/resources/url-5304880559ad79f5b797/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-14B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-09T21:09:38Z
- ID: url:5304880559ad79f5b797

### Limitations

The release includes sharded safetensors weights, configuration, processor, and tokenizer files. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-5304880559ad79f5b797/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-14B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B-HF (retrieved 2026-11-09T21:09:38Z; SHA-256 b0b46bd13e669c31405969e91359f2beccf45f9c6feaf583565d6b75780e91ef)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B-HF (retrieved 2026-11-09T21:09:38Z; SHA-256 b0b46bd13e669c31405969e91359f2beccf45f9c6feaf583565d6b75780e91ef)

---

## InternVL3_5-1B

InternVL3_5-1B is a released multimodal checkpoint from the InternVL3.5 family, whose documented capabilities include GUI interaction.

- Catalog URL: https://awesomecua.com/resources/url-b75abe232c389788d2c4/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-1B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-09T21:08:37Z
- ID: url:b75abe232c389788d2c4

### Limitations

The model repository lists a safetensors checkpoint and model, tokenizer and processor files. The card identifies InternVL3_5-1B-MPO as its base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b75abe232c389788d2c4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-1B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B (retrieved 2026-11-09T21:08:37Z; SHA-256 e7a900e88aa17a41519a765faed1b938579793e9721f5bdea2b6da9ac7263f00)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B (retrieved 2026-11-09T21:08:37Z; SHA-256 e7a900e88aa17a41519a765faed1b938579793e9721f5bdea2b6da9ac7263f00)

---

## InternVL3_5-1B-HF

HF-format InternVL3.5-1B checkpoint with a 0.3B vision encoder and 0.8B language model, from a multimodal family trained with Cascade RL that lists GUI interaction among its capabilities.

- Catalog URL: https://awesomecua.com/resources/url-98f37e375e57e027af64/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-1B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:98f37e375e57e027af64

### Limitations

The card lists OpenGVLab/InternVL3_5-1B-MPO as the base model and MMPR-v1.2 and MMPR-Tiny as datasets, and declares an Apache-2.0 license. The InternVL3.5 paper reports GUI grounding and online agent results for the 4B and larger family members.

- Record JSON: https://awesomecua.com/resources/url-98f37e375e57e027af64/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-1B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B-HF (retrieved 2026-11-10T03:01:12Z; SHA-256 e283a4f504c409e9dfbc4e581d0c69dd4f7be197c4a936033d6ef00107e6cbf4)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B-HF (retrieved 2026-11-10T03:01:12Z; SHA-256 e283a4f504c409e9dfbc4e581d0c69dd4f7be197c4a936033d6ef00107e6cbf4)

---

## InternVL3_5-241B-A28B

A released InternVL3.5 multimodal checkpoint from a family whose card describes GUI interaction, Cascade RL training and adaptive visual resolution.

- Catalog URL: https://awesomecua.com/resources/url-c8d93b1c274acd679694/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning, efficiency
- Evidence checked: 2026-11-09T19:57:38Z
- ID: url:c8d93b1c274acd679694

### Limitations

The card links this checkpoint to the InternVL3.5 paper and describes a GitHub-format release. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-c8d93b1c274acd679694/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B (retrieved 2026-11-09T19:57:38Z; SHA-256 74c8b78fb78103a0edbb95dc2bbf9662f8b8c8b595930c92d40d504f7c793384)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B (retrieved 2026-11-09T19:57:38Z; SHA-256 74c8b78fb78103a0edbb95dc2bbf9662f8b8c8b595930c92d40d504f7c793384)

---

## InternVL3_5-241B-A28B-HF

InternVL3_5-241B-A28B-HF releases a Transformers-format multimodal checkpoint from the InternVL3.5 family, whose card describes GUI interaction and efficient visual inference.

- Catalog URL: https://awesomecua.com/resources/url-7c6929dcffffe6553ea9/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, efficiency
- Evidence checked: 2026-11-09T19:56:21Z
- ID: url:7c6929dcffffe6553ea9

### Limitations

The repository lists sharded safetensors weights and tokenizer files. The card declares an Apache-2.0 license and describes the Transformers format as distinct from the GitHub format.

- Record JSON: https://awesomecua.com/resources/url-7c6929dcffffe6553ea9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B-HF (retrieved 2026-11-09T19:56:21Z; SHA-256 bc42847be9fcf10bb509fa66fc2a598fe7ab7e396836c9a10425d3e376dca117)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B-HF (retrieved 2026-11-09T19:56:21Z; SHA-256 bc42847be9fcf10bb509fa66fc2a598fe7ab7e396836c9a10425d3e376dca117)

---

## InternVL3_5-2B

InternVL3.5-2B checkpoint with a 0.3B vision encoder and 2.0B language model, from a multimodal family trained with Cascade RL that lists GUI interaction among its capabilities.

- Catalog URL: https://awesomecua.com/resources/url-feaad5e9f2497d1ed9ca/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-2B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:feaad5e9f2497d1ed9ca

### Limitations

The card lists OpenGVLab/InternVL3_5-2B-MPO as the base model and declares an Apache-2.0 license; the weights are a single model.safetensors file with custom modeling code. The InternVL3.5 paper reports GUI grounding and online agent results for the 4B and larger family members.

- Record JSON: https://awesomecua.com/resources/url-feaad5e9f2497d1ed9ca/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-2B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B (retrieved 2026-11-10T03:01:15Z; SHA-256 2f5f6d452e393632c53f9902b76655fdbc95a289f23e58cc13d5c14fad1fbc80)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B (retrieved 2026-11-10T03:01:15Z; SHA-256 2f5f6d452e393632c53f9902b76655fdbc95a289f23e58cc13d5c14fad1fbc80)

---

## InternVL3_5-2B-HF

HF-format 2.3B-parameter InternVL3.5 checkpoint, a multimodal model whose card lists GUI interaction among its trained skills and reports GUI task results for the family.

- Catalog URL: https://awesomecua.com/resources/url-d1f0e13ad96c108ef09b/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-2B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:d1f0e13ad96c108ef09b

### Limitations

The card's heading reads InternVL3_5-4B and its base_model field names InternVL3_5-4B-MPO, while its family table lists this repository as InternVL3.5-2B-HF. License apache-2.0; weights are in transformers HF format.

- Record JSON: https://awesomecua.com/resources/url-d1f0e13ad96c108ef09b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-2B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B-HF (retrieved 2026-11-10T03:01:14Z; SHA-256 33f64420a4d18568888bd937bb8bb427622d2cca0f4be4bc0f5c95b04df3429a)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B-HF (retrieved 2026-11-10T03:01:14Z; SHA-256 33f64420a4d18568888bd937bb8bb427622d2cca0f4be4bc0f5c95b04df3429a)

---

## InternVL3_5-30B-A3B

InternVL3.5 multimodal checkpoint listed at 30.8B-A3B parameters, trained with CPT, SFT and Cascade RL. The paper reports its GUI grounding and agent results on ScreenSpot, OSWorld-G and WindowsAgentArena.

- Catalog URL: https://awesomecua.com/resources/url-4d7042b462e937c33406/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-30B-A3B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, linux, windows, web
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:03Z
- ID: url:4d7042b462e937c33406

### Limitations

Weights ship as 13 safetensors shards with custom InternVL code files, and the card declares Apache-2.0 and links an HF-format variant. Table 10 of the paper reports ScreenSpot 86.6, ScreenSpot-v2 87.3, OSWorld-G 42.4, WindowsAgentArena 11.0 and WebArena-Lite-v2 10.4 for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-4d7042b462e937c33406/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-30B-A3B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B (retrieved 2026-11-10T03:01:03Z; SHA-256 5b48a44921c4805801a8921a8f9c8d2f6c04da7889bc801ca740a77ce09ead76)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B (retrieved 2026-11-10T03:01:03Z; SHA-256 5b48a44921c4805801a8921a8f9c8d2f6c04da7889bc801ca740a77ce09ead76)

---

## InternVL3_5-30B-A3B-HF

Transformers-format InternVL3.5 checkpoint with 30.8B total and 3B active parameters, whose paper reports GUI grounding and online agent results on ScreenSpot, OSWorld-G, WindowsAgentArena and WebArena-Lite-v2.

- Catalog URL: https://awesomecua.com/resources/url-2ebcbc24ecbdc2db22fb/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-30B-A3B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:2ebcbc24ecbdc2db22fb

### Limitations

The card declares Apache-2.0, needs transformers>=4.52.1 and says models up to 30B fit on one A100 GPU. In the paper's Table 10 the authors report 86.6 on ScreenSpot, 42.4 on OSWorld-G and 11.0 on WindowsAgentArena for InternVL3.5-30B-A3B.

- Record JSON: https://awesomecua.com/resources/url-2ebcbc24ecbdc2db22fb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-30B-A3B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B-HF (retrieved 2026-11-10T03:01:04Z; SHA-256 a7d0d03340a89eaa0d7a333fd9cdaf1b92a82d040f1924e0ea784d94a539dd51)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B-HF (retrieved 2026-11-10T03:01:04Z; SHA-256 a7d0d03340a89eaa0d7a333fd9cdaf1b92a82d040f1924e0ea784d94a539dd51)

---

## InternVL3_5-38B

InternVL3.5 checkpoint with 38.4B parameters, pairing a 5.5B vision encoder with a 32.8B language model, whose paper reports GUI grounding and online agent results on ScreenSpot, OSWorld-G and WindowsAgentArena.

- Catalog URL: https://awesomecua.com/resources/url-33b35b47d8bb269d84a1/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-38B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:05Z
- ID: url:33b35b47d8bb269d84a1

### Limitations

The card declares Apache-2.0 and says the 38B model needs two A100 GPUs. In the paper's Table 10 the authors report 81.0 on ScreenSpot, 42.9 on OSWorld-G and 14.5 on WindowsAgentArena for InternVL3.5-38B.

- Record JSON: https://awesomecua.com/resources/url-33b35b47d8bb269d84a1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-38B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B (retrieved 2026-11-10T03:01:05Z; SHA-256 e24b868c1916b74a88401963a66c6d9287f8d4db2234509abd4e28622c294cf5)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B (retrieved 2026-11-10T03:01:05Z; SHA-256 e24b868c1916b74a88401963a66c6d9287f8d4db2234509abd4e28622c294cf5)

---

## InternVL3_5-38B-HF

An HF-format 38B checkpoint in the InternVL3.5 multimodal model family, whose card lists GUI interaction among its capabilities and describes staged training and inference.

- Catalog URL: https://awesomecua.com/resources/url-099960c12bbdd80f73cb/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-38B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-09T19:57:37Z
- ID: url:099960c12bbdd80f73cb

### Limitations

The card declares an Apache-2.0 license and describes HF and GitHub checkpoint formats. It links the InternVL3.5 paper and states that model weights and code are released.

- Record JSON: https://awesomecua.com/resources/url-099960c12bbdd80f73cb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-38B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B-HF (retrieved 2026-11-09T19:57:37Z; SHA-256 35e171ad3dde46b3fd290a9a2321fd41ed73170b6a7814abfd3b05c7eed7f69c)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B-HF (retrieved 2026-11-09T19:57:37Z; SHA-256 35e171ad3dde46b3fd290a9a2321fd41ed73170b6a7814abfd3b05c7eed7f69c)

---

## InternVL3_5-4B-HF

An HF-format checkpoint in the InternVL3.5 multimodal model family, whose card names GUI interaction among its capabilities. The release includes model weights.

- Catalog URL: https://awesomecua.com/resources/url-0585c680192ac22d2735/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-4B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-09T21:10:18Z
- ID: url:0585c680192ac22d2735

### Limitations

The card lists an OpenGVLab/InternVL3_5-4B-MPO base model and declares an Apache-2.0 license. Its GUI claim is stated for the model family; the supplied text gives no checkpoint-specific GUI evaluation.

- Record JSON: https://awesomecua.com/resources/url-0585c680192ac22d2735/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-4B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-4B-HF (retrieved 2026-11-09T21:10:18Z; SHA-256 7350e1b489be635e0c4e4fc4821c21497910e90af684c18e588b5910f8c72bcf)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-4B-HF (retrieved 2026-11-09T21:10:18Z; SHA-256 7350e1b489be635e0c4e4fc4821c21497910e90af684c18e588b5910f8c72bcf)

---

## InternVL3_5-8B

An 8B multimodal checkpoint in the InternVL3.5 family, whose card describes GUI interaction alongside broader visual reasoning and inference efficiency work.

- Catalog URL: https://awesomecua.com/resources/url-7f7d17a0873e6ffda2b9/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, reinforcement-learning, efficiency
- Evidence checked: 2026-11-09T19:56:36Z
- ID: url:7f7d17a0873e6ffda2b9

### Limitations

The card identifies the checkpoint as a fine-tune of OpenGVLab/InternVL3_5-8B-MPO and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-7f7d17a0873e6ffda2b9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-8B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B (retrieved 2026-11-09T19:56:36Z; SHA-256 d4d7fdbe1e2cd25bb90fe8cddcad4e8e4ded944c1f614eac01ea28c9c2d55d32)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B (retrieved 2026-11-09T19:56:36Z; SHA-256 d4d7fdbe1e2cd25bb90fe8cddcad4e8e4ded944c1f614eac01ea28c9c2d55d32)

---

## InternVL3_5-8B-HF

InternVL3.5-8B multimodal model in Hugging Face Transformers format; its report evaluates the family on GUI grounding and on online agent tasks in OSWorld, WindowsAgentArena and WebArena-Lite-v2.

- Catalog URL: https://awesomecua.com/resources/url-15c5435c1cb4f9e6b737/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-8B-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, linux, windows, web
- Topics: grounding
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:15c5435c1cb4f9e6b737

### Limitations

Four safetensors shards with processor, video-processor and chat-template files for Transformers, fine-tuned from InternVL3_5-8B-MPO; a separate repository holds the GitHub-format checkpoint and the card links conversion scripts. The card declares Apache-2.0 and lists Qwen3 as a component.

- Record JSON: https://awesomecua.com/resources/url-15c5435c1cb4f9e6b737/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-8B-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B-HF (retrieved 2026-11-10T03:01:01Z; SHA-256 e6135acc4a78e7014a1086ddc0ccbed56945a3fc8b91278b64d462ee095563a4)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B-HF (retrieved 2026-11-10T03:01:01Z; SHA-256 e6135acc4a78e7014a1086ddc0ccbed56945a3fc8b91278b64d462ee095563a4)

---

## InternVL3_5-GPT-OSS-20B-A4B-Preview-HF

HF-format InternVL3.5 preview checkpoint built on a GPT-OSS language model (21.2B total, A4B), a multimodal model whose card lists GUI interaction among its trained skills and reports GUI results.

- Catalog URL: https://awesomecua.com/resources/url-c09ce6d4ca2ddaf02fae/
- Original source: https://huggingface.co/OpenGVLab/InternVL3_5-GPT-OSS-20B-A4B-Preview-HF
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:c09ce6d4ca2ddaf02fae

### Limitations

The release holds transformers-format weights with a chat template; license apache-2.0. The card recommends vLLM for deploying InternVL3.5-20B-A4B because of its GPT-OSS language model.

- Record JSON: https://awesomecua.com/resources/url-c09ce6d4ca2ddaf02fae/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-GPT-OSS-20B-A4B-Preview-HF

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-GPT-OSS-20B-A4B-Preview-HF (retrieved 2026-11-10T03:01:13Z; SHA-256 1a17fad5846dd541f4235a57f89891206bfcc5818932364e755d9486a460b74f)
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-GPT-OSS-20B-A4B-Preview-HF (retrieved 2026-11-10T03:01:13Z; SHA-256 1a17fad5846dd541f4235a57f89891206bfcc5818932364e755d9486a460b74f)

---

## Jedi-3B-1080p

A Qwen2.5-VL-3B-based computer-use grounding checkpoint with an example that predicts mouse-action coordinates from an interface image.

- Catalog URL: https://awesomecua.com/resources/url-2f2e38f240a36f31b631/
- Original source: https://huggingface.co/xlangai/Jedi-3B-1080p
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, action-prediction
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:2f2e38f240a36f31b631

### Limitations

The repository lists sharded model weights and processor files. The card recommends vLLM, links sample code, and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-2f2e38f240a36f31b631/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/Jedi-3B-1080p

### Primary evidence

- https://huggingface.co/api/models/xlangai/Jedi-3B-1080p (retrieved 2026-11-09T05:05:20Z; SHA-256 e6be8defd47d47b532d41f0e1ef317c5621bb335ef7e18283043f8d2aa3ffc6c)
- https://huggingface.co/api/models/xlangai/Jedi-3B-1080p (retrieved 2026-11-09T05:05:20Z; SHA-256 e6be8defd47d47b532d41f0e1ef317c5621bb335ef7e18283043f8d2aa3ffc6c)

---

## Jedi-7B-1080p

A released model checkpoint for computer-use grounding research, based on Qwen2.5-VL-7B-Instruct. The repository includes weight shards and tokenizer files.

- Catalog URL: https://awesomecua.com/resources/url-75dee6afef81a56ba4b2/
- Original source: https://huggingface.co/xlangai/Jedi-7B-1080p
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T06:16:36Z
- ID: url:75dee6afef81a56ba4b2

### Limitations

The card declares an Apache-2.0 license and links the paper, project page, and code repository. The supplied file list includes four safetensors weight shards.

- Record JSON: https://awesomecua.com/resources/url-75dee6afef81a56ba4b2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/Jedi-7B-1080p

### Primary evidence

- https://huggingface.co/api/models/xlangai/Jedi-7B-1080p (retrieved 2026-11-09T06:16:36Z; SHA-256 4b71801086c90cb8eb483a1bae937ce492b4c6a13a95a5db8d3e7772476882b8)
- https://huggingface.co/api/models/xlangai/Jedi-7B-1080p (retrieved 2026-11-09T06:16:36Z; SHA-256 4b71801086c90cb8eb483a1bae937ce492b4c6a13a95a5db8d3e7772476882b8)

---

## jiamingzz/lgwm

Released weights for a GUI world model that predicts a screen representation after an action and checks the observed transition, with a separate harm scoring head.

- Catalog URL: https://awesomecua.com/resources/url-512cd7335068b2c17859/
- Original source: https://huggingface.co/jiamingzz/lgwm
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: world-models, state-tracking, safety-security
- Evidence checked: 2026-11-09T19:56:42Z
- ID: url:512cd7335068b2c17859

### Limitations

The release contains world model weights and a linear harm head. Usage calls the companion code with before and after screenshots and an action JSON file. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-512cd7335068b2c17859/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/jiamingzz/lgwm

### Primary evidence

- https://huggingface.co/api/models/jiamingzz/lgwm (retrieved 2026-11-09T19:56:42Z; SHA-256 5db5aa06ea538ead2a48496221efe361892b3affe7efb4148260e29308a2016c)
- https://huggingface.co/api/models/jiamingzz/lgwm (retrieved 2026-11-09T19:56:42Z; SHA-256 5db5aa06ea538ead2a48496221efe361892b3affe7efb4148260e29308a2016c)

---

## KDEGroup/UI-AGILE-3B

A released UI-AGILE checkpoint for GUI grounding, associated with reward design and cropping based resampling during training and image decomposition during inference.

- Catalog URL: https://awesomecua.com/resources/url-642671eabef44827b7de/
- Original source: https://huggingface.co/KDEGroup/UI-AGILE-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning, efficiency
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:642671eabef44827b7de

### Limitations

The repository contains weight shards, configuration files, and evaluation files. The card declares an MIT license and links the project paper and data.

- Record JSON: https://awesomecua.com/resources/url-642671eabef44827b7de/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/KDEGroup/UI-AGILE-3B

### Primary evidence

- https://huggingface.co/api/models/KDEGroup/UI-AGILE-3B (retrieved 2026-11-09T05:05:17Z; SHA-256 ec0be6049411b31a494ebcbda012b512b04e7c88f1e7a1fd94c31b5251fb5ebc)
- https://huggingface.co/api/models/KDEGroup/UI-AGILE-3B (retrieved 2026-11-09T05:05:17Z; SHA-256 ec0be6049411b31a494ebcbda012b512b04e7c88f1e7a1fd94c31b5251fb5ebc)

---

## kev-0.6b-browser-use

kev-0.6b-browser-use is a 0.6B browser decision model that scores candidate page elements and chooses a click, type, or select operation from a task goal.

- Catalog URL: https://awesomecua.com/resources/url-3c55f225a1f66a6261ac/
- Original source: https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation
- Evidence checked: 2026-11-09T19:57:35Z
- ID: url:3c55f225a1f66a6261ac

### Limitations

The release includes a LoRA adapter and pointer head for the Kev base model. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-3c55f225a1f66a6261ac/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use

### Primary evidence

- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use (retrieved 2026-11-09T19:57:35Z; SHA-256 2ef9c22749a81e177eee2ff79037fedc02fe233e26c8eadc7abe9946c7197908)
- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use (retrieved 2026-11-09T19:57:35Z; SHA-256 2ef9c22749a81e177eee2ff79037fedc02fe233e26c8eadc7abe9946c7197908)

---

## kev-0.6b-browser-use-ONNX

A WebGPU-compatible ONNX browser-use model that selects a page element and operation from a goal and candidate elements, with a 4-bit export for JavaScript use.

- Catalog URL: https://awesomecua.com/resources/url-295e0be27996e41738f8/
- Original source: https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use-ONNX
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation
- Evidence checked: 2026-11-09T19:57:36Z
- ID: url:295e0be27996e41738f8

### Limitations

The card lists a 348 MB ONNX model and usage through open-jev and Transformers.js. It says the export derives from a browser-action fine-tune and declares Apache-2.0 for the adapter and head.

- Record JSON: https://awesomecua.com/resources/url-295e0be27996e41738f8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use-ONNX

### Primary evidence

- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use-ONNX (retrieved 2026-11-09T19:57:36Z; SHA-256 6a869c8c7712713082ab101d23fa11596ccaa00af55093dba90221252ba616e2)
- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use-ONNX (retrieved 2026-11-09T19:57:36Z; SHA-256 6a869c8c7712713082ab101d23fa11596ccaa00af55093dba90221252ba616e2)

---

## Kimi-VL-A3B-Instruct

Kimi-VL-A3B-Instruct is a vision-language checkpoint whose card reports performance on desktop agent interaction and screen grounding alongside general multimodal tasks.

- Catalog URL: https://awesomecua.com/resources/url-a42c3bca105218f17645/
- Original source: https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: evaluation, grounding, screen-understanding
- Evidence checked: 2026-11-09T21:08:39Z
- ID: url:a42c3bca105218f17645

### Limitations

The release includes model weights and inference code. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-a42c3bca105218f17645/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct

### Primary evidence

- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Instruct (retrieved 2026-11-09T21:08:39Z; SHA-256 ffb044fb7e251323e8cf708dcddc5b7e5a51d5a1656c222cb508f33e82faa26d)
- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Instruct (retrieved 2026-11-09T21:08:39Z; SHA-256 ffb044fb7e251323e8cf708dcddc5b7e5a51d5a1656c222cb508f33e82faa26d)

---

## Kimi-VL-A3B-Thinking-2506

A multimodal reasoning model with released weights and high-resolution image input. Its authors report GUI grounding evaluations on ScreenSpot-Pro, ScreenSpot-V2 and OSWorld-G.

- Catalog URL: https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/
- Original source: https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking-2506
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:07Z
- ID: url:fb5921fec3f7c313ab5b

### Limitations

The repository lists sharded safetensors weights and custom model and processor code. The card provides vLLM and Transformers inference examples and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking-2506

### Primary evidence

- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking-2506 (retrieved 2026-11-09T05:05:07Z; SHA-256 b1d82ad7857a66051290c6675225d56f00e906d3784934b43d95d2ad31c5a7d2)
- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking-2506 (retrieved 2026-11-09T05:05:07Z; SHA-256 b1d82ad7857a66051290c6675225d56f00e906d3784934b43d95d2ad31c5a7d2)

---

## KV-Ground

KV-Ground releases compact models for locating targets in high-resolution GUI images, alongside training and evaluation code.

- Catalog URL: https://awesomecua.com/resources/github-vocaela-kv-ground/
- Original source: https://github.com/vocaela/kv-ground
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, screen-understanding, reinforcement-learning, data-generation
- Evidence checked: 2026-11-09T21:10:00Z
- ID: github:vocaela/kv-ground

### Limitations

The source links multiple model checkpoints and describes synthetic grounding data, supervised fine-tuning and GRPO training. It reports ScreenSpot benchmark results.

- Record JSON: https://awesomecua.com/resources/github-vocaela-kv-ground/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/vocaela/kv-ground/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vocaela/kv-ground/HEAD/README.md (retrieved 2026-11-09T21:10:00Z; SHA-256 7642449f700860b654d78307918accd2d059df1b55f6252ed0dca9a8203cc6d2)
- https://raw.githubusercontent.com/vocaela/kv-ground/HEAD/LICENSE (retrieved 2026-11-09T21:12:12Z; SHA-256 02537bc3bf42515a728022fa30c3251ddf86d8748a6ef7711fe072d5454b2b6a)

---

## KV-Ground 8B (BaseGuiOwl1.5 0315)

GUI-grounding checkpoint post-trained from GUI-Owl-1.5-8B-Instruct with SFT and GRPO on cleaned and synthesized high-resolution data, aimed at locating elements in large screenshots.

- Catalog URL: https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/
- Original source: https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, cross-platform
- Topics: grounding, reinforcement-learning, data-generation
- Evidence checked: 2026-10-18T11:15:53Z
- ID: url:461125e2d6ac2f030f6b

### Limitations

The Hub repository holds four safetensors shards in the Qwen3-VL architecture inherited from its base. The card, by Kingsware and Vocaela AI, declares CC BY-NC-SA 4.0 for this checkpoint (non-commercial, share-alike). The base model mPLUG/GUI-Owl-1.5-8B-Instruct has no active catalog record, so no variant relation is recorded. Card scores (73.2 on ScreenSpot-Pro without zoom-in, 80.5 with it) are publisher measurements with the publisher's own prompt setup; the card has no training-data release. Smaller 4B siblings from the same publisher are separate Hub repositories.

- Record JSON: https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md

### Primary evidence

- https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md (retrieved 2026-10-18T11:15:53Z; SHA-256 e10fdbfe36ec84b4bd940bea40e11820f37a6b0f92e319eb1045b868553c0431)
- https://huggingface.co/api/models/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315 (retrieved 2026-10-18T11:15:54Z; SHA-256 01bcd8906eefdb60bd77dc340c4a254b228734d0830ad2bdd9cd5c9377759145)
- https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md (retrieved 2026-10-18T11:15:53Z; SHA-256 e10fdbfe36ec84b4bd940bea40e11820f37a6b0f92e319eb1045b868553c0431)

---

## KV-Ground-4B-BaseGuiOwl1.5-0228

A 4B vision-language checkpoint for locating GUI targets in high-resolution images. It is fine-tuned from GUI-Owl-1.5-4B-Instruct with supervised and reward-based post-training.

- Catalog URL: https://awesomecua.com/resources/url-709d8b51bbc8d257318f/
- Original source: https://huggingface.co/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:709d8b51bbc8d257318f

### Limitations

The repository contains sharded safetensors weights and tokenizer files. The card declares a CC BY-NC-SA 4.0 license and points to separate evaluation code.

- Record JSON: https://awesomecua.com/resources/url-709d8b51bbc8d257318f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228

### Primary evidence

- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228 (retrieved 2026-11-09T06:16:33Z; SHA-256 1d8b01966bddfaead27daf01fcb049ad1731149599187be92b9ba71f9baf94d0)
- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228 (retrieved 2026-11-09T06:16:33Z; SHA-256 1d8b01966bddfaead27daf01fcb049ad1731149599187be92b9ba71f9baf94d0)

---

## KV-Ground-4B-BaseQw3vl

A 4B GUI grounding model for high-resolution screenshots and text instructions, fine-tuned from Qwen3-VL-4B-Instruct with supervised and reward-based training.

- Catalog URL: https://awesomecua.com/resources/url-969eb56a53187cda74c7/
- Original source: https://huggingface.co/vocaela/KV-Ground-4B-BaseQw3vl
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, reinforcement-learning
- Evidence checked: 2026-11-09T05:05:00Z
- ID: url:969eb56a53187cda74c7

### Limitations

The card declares a CC BY-NC-SA 4.0 license and points to evaluation code in the kv-ground repository. The file list includes two safetensors weight shards.

- Record JSON: https://awesomecua.com/resources/url-969eb56a53187cda74c7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-4B-BaseQw3vl

### Primary evidence

- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseQw3vl (retrieved 2026-11-09T05:05:00Z; SHA-256 b41afdcedc410f0c62bb513ab5f3536a5f8ca02dad49bbe327ad917a177bd35d)
- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseQw3vl (retrieved 2026-11-09T05:05:00Z; SHA-256 b41afdcedc410f0c62bb513ab5f3536a5f8ca02dad49bbe327ad917a177bd35d)

---

## LFM2-350M-ComputerUse

LoRA adapter for LFM2-350M trained with GRPO to click a button on the MiniWoB click-test task, reading the page as a BrowserGym accessibility tree and acting in a sandboxed browser.

- Catalog URL: https://awesomecua.com/resources/url-b68b02b47c87f006533e/
- Original source: https://huggingface.co/DingoBeast/LFM2-350M-ComputerUse
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:b68b02b47c87f006533e

### Limitations

The repository holds adapter_model.safetensors and a checkpoint-100 folder with optimizer and scheduler state. Per the README, training used LoRA rank 8 and alpha 16 for 100 iterations with up to 10 browser actions per episode on Modal GPUs; the card's quick-start example is generic text generation.

- Record JSON: https://awesomecua.com/resources/url-b68b02b47c87f006533e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse (retrieved 2026-11-10T03:01:13Z; SHA-256 d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f)
- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse (retrieved 2026-11-10T03:01:13Z; SHA-256 d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f)

---

## LocateAnything-3B

LocateAnything-3B is a 3B vision-language grounding model that predicts full bounding boxes in parallel, covering GUI element grounding alongside object detection, documents and OCR.

- Catalog URL: https://awesomecua.com/resources/url-59b8a8cfdd3db7b21058/
- Original source: https://huggingface.co/nvidia/LocateAnything-3B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-11-10T06:29:28Z
- ID: url:59b8a8cfdd3db7b21058

### Limitations

Release contains weights with custom transformers modeling code built on Qwen2.5-3B-Instruct and the MoonViT-SO-400M encoder, plus a batch inference script with Fast, Hybrid and Slow decoding modes. The card targets NVIDIA GPUs on Linux. Declared license: NVIDIA License for academic and non-profit research use.

- Record JSON: https://awesomecua.com/resources/url-59b8a8cfdd3db7b21058/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/nvidia/LocateAnything-3B

### Primary evidence

- https://huggingface.co/api/models/nvidia/LocateAnything-3B (retrieved 2026-11-10T06:29:28Z; SHA-256 3b9e0c52487b57d0816eff8a71b13663f29a1be9803e80c35e60c72b284c0cad)
- https://huggingface.co/api/models/nvidia/LocateAnything-3B (retrieved 2026-11-10T06:29:28Z; SHA-256 3b9e0c52487b57d0816eff8a71b13663f29a1be9803e80c35e60c72b284c0cad)

---

## lora_qformer_test_V4-700_merged

Qwen2.5-VL-7B-Instruct merged with the CoMEM memory module, which compresses past GUI trajectories into 8 continuous embeddings through a LoRA-tuned Q-Former, for web agent tasks.

- Catalog URL: https://awesomecua.com/resources/url-8a5201470d27334977fa/
- Original source: https://huggingface.co/WenyiWU0111/lora_qformer_test_V4-700_merged
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: memory, web-navigation, efficiency
- Evidence checked: 2026-11-10T03:01:09Z
- ID: url:8a5201470d27334977fa

### Limitations

The repository holds merged safetensors weights in seven shards (17B parameters per the Hub page) and has no model card. The CoMEM-Agent README documents it, provides evaluation scripts for MMInA, Mind2Web and WebVoyager, and declares the MIT License.

- Record JSON: https://awesomecua.com/resources/url-8a5201470d27334977fa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/WenyiWU0111/lora_qformer_test_V4-700_merged (retrieved 2026-11-10T03:01:09Z; SHA-256 6e8766a10c7e7e98d54ce69dc360c9cba911ca55ccaf1546ff0b48a45e56744a)
- https://huggingface.co/api/models/WenyiWU0111/lora_qformer_test_V4-700_merged (retrieved 2026-11-10T03:01:09Z; SHA-256 6e8766a10c7e7e98d54ce69dc360c9cba911ca55ccaf1546ff0b48a45e56744a)

---

## lora_qformer_uitars_test_V1-400_merged

UI-TARS-V1.5-7B checkpoint with CoMEM continuous memory merged in, where a LoRA-tuned Q-Former compresses retrieved GUI trajectories into fixed-length embeddings for the web agent.

- Catalog URL: https://awesomecua.com/resources/url-b144605ae24674ffb917/
- Original source: https://huggingface.co/WenyiWU0111/lora_qformer_uitars_test_V1-400_merged
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: memory, web-navigation, efficiency
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:b144605ae24674ffb917

### Limitations

The repository holds seven safetensors shards in Qwen2.5-VL format and has no model card. The CoMEM-Agent code evaluates it on MMInA, Mind2Web and WebVoyager with --use_continuous_memory and --checkpoint_path.

- Record JSON: https://awesomecua.com/resources/url-b144605ae24674ffb917/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/WenyiWU0111/lora_qformer_uitars_test_V1-400_merged (retrieved 2026-11-10T03:01:13Z; SHA-256 dfc6e593c709797ce9742899972f451e372b507de02e8aba73e2a01fe21a30ee)
- https://huggingface.co/api/models/WenyiWU0111/lora_qformer_uitars_test_V1-400_merged (retrieved 2026-11-10T03:01:13Z; SHA-256 dfc6e593c709797ce9742899972f451e372b507de02e8aba73e2a01fe21a30ee)

---

## lumos_unified_ground_iterative

A released Lumos grounding-module checkpoint fine-tuned on web-agent and other interactive tasks within its modular language-agent system.

- Catalog URL: https://awesomecua.com/resources/url-af446270bb6bfd20b77e/
- Original source: https://huggingface.co/ai2lumos/lumos_unified_ground_iterative
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, web-navigation
- Evidence checked: 2026-11-09T21:09:22Z
- ID: url:af446270bb6bfd20b77e

### Limitations

The repository contains PyTorch weight shards and tokenizer files. The card declares an Apache-2.0 license and links the training-annotation dataset.

- Record JSON: https://awesomecua.com/resources/url-af446270bb6bfd20b77e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_unified_ground_iterative

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative (retrieved 2026-11-09T21:09:22Z; SHA-256 93e17d4083dcc874de2687a40e7f220781f171037da9ba7f5804c860ea81e077)
- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative (retrieved 2026-11-09T21:09:22Z; SHA-256 93e17d4083dcc874de2687a40e7f220781f171037da9ba7f5804c860ea81e077)

---

## lumos_unified_ground_iterative-13B

A released Lumos grounding-module checkpoint fine-tuned on web-agent tasks alongside question answering, multimodal and math tasks.

- Catalog URL: https://awesomecua.com/resources/url-b0b2cd616f8c30b4b09d/
- Original source: https://huggingface.co/ai2lumos/lumos_unified_ground_iterative-13B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, planning
- Evidence checked: 2026-11-09T19:56:15Z
- ID: url:b0b2cd616f8c30b4b09d

### Limitations

The card links its training dataset and states an Apache-2.0 license. The repository file list includes sharded model weights and tokenizer files.

- Record JSON: https://awesomecua.com/resources/url-b0b2cd616f8c30b4b09d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_unified_ground_iterative-13B

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative-13B (retrieved 2026-11-09T19:56:15Z; SHA-256 4e8ec057586b93571f89a1a79e2723e0c01be313d8daa8e967aa7d881fb6e817)
- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative-13B (retrieved 2026-11-09T19:56:15Z; SHA-256 4e8ec057586b93571f89a1a79e2723e0c01be313d8daa8e967aa7d881fb6e817)

---

## lumos_unified_plan_iterative

A released Lumos planning checkpoint fine-tuned for web-agent tasks alongside question answering, multimodal, and math tasks.

- Catalog URL: https://awesomecua.com/resources/url-457c2111894524e9dfda/
- Original source: https://huggingface.co/ai2lumos/lumos_unified_plan_iterative
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, action-prediction
- Evidence checked: 2026-11-09T21:08:38Z
- ID: url:457c2111894524e9dfda

### Limitations

The repository lists checkpoint shards and tokenizer files. The card names 55,382 training annotations and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-457c2111894524e9dfda/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_unified_plan_iterative

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_unified_plan_iterative (retrieved 2026-11-09T21:08:38Z; SHA-256 7521d858e51ee9626c7f223db6038b5c9c97a2bcad7a03705d16452ab6809113)
- https://huggingface.co/api/models/ai2lumos/lumos_unified_plan_iterative (retrieved 2026-11-09T21:08:38Z; SHA-256 7521d858e51ee9626c7f223db6038b5c9c97a2bcad7a03705d16452ab6809113)

---

## lumos_unified_plan_iterative-13B

A Lumos planning checkpoint fine-tuned on web-agent, question-answering, multimodal and math tasks within a modular agent system.

- Catalog URL: https://awesomecua.com/resources/url-eb6a5940793aa81153d0/
- Original source: https://huggingface.co/ai2lumos/lumos_unified_plan_iterative-13B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, imitation-learning
- Evidence checked: 2026-11-09T21:10:03Z
- ID: url:eb6a5940793aa81153d0

### Limitations

The card links training data and reports a training annotation count. It states an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-eb6a5940793aa81153d0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_unified_plan_iterative-13B

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_unified_plan_iterative-13B (retrieved 2026-11-09T21:10:03Z; SHA-256 2a033082eaddebae59c7093e1778211b61dca2952e15bac5628f9b072b946c06)
- https://huggingface.co/api/models/ai2lumos/lumos_unified_plan_iterative-13B (retrieved 2026-11-09T21:10:03Z; SHA-256 2a033082eaddebae59c7093e1778211b61dca2952e15bac5628f9b072b946c06)

---

## lumos_web_agent_ground_iterative

A released Lumos grounding checkpoint fine-tuned for web-agent tasks using the Lumos-Iterative formulation. It serves the grounding module of a modular agent.

- Catalog URL: https://awesomecua.com/resources/url-246241a0b6219513cb7f/
- Original source: https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, web-navigation
- Evidence checked: 2026-11-09T19:56:22Z
- ID: url:246241a0b6219513cb7f

### Limitations

The card links a training dataset and names the Agent Lumos paper. The repository lists model weight shards and tokenizer files under an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-246241a0b6219513cb7f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative (retrieved 2026-11-09T19:56:22Z; SHA-256 5491efbb166aafea807c7f73e498adfcf84aa8df19c3329c6d8197594b94200d)
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative (retrieved 2026-11-09T19:56:22Z; SHA-256 5491efbb166aafea807c7f73e498adfcf84aa8df19c3329c6d8197594b94200d)

---

## lumos_web_agent_ground_iterative-13B

A released Lumos checkpoint for grounding web-agent actions within an iterative architecture that separates planning, grounding and execution.

- Catalog URL: https://awesomecua.com/resources/url-dca5b0d8449331bbede4/
- Original source: https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative-13B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, web-navigation
- Evidence checked: 2026-11-09T19:56:33Z
- ID: url:dca5b0d8449331bbede4

### Limitations

The repository lists PyTorch weight shards and tokenizer files. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-dca5b0d8449331bbede4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative-13B

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative-13B (retrieved 2026-11-09T19:56:33Z; SHA-256 33c2d15ee87497ad35d3fedd5e92951d9f3ddb8d2d06dd0d244a01727fd57e18)
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative-13B (retrieved 2026-11-09T19:56:33Z; SHA-256 33c2d15ee87497ad35d3fedd5e92951d9f3ddb8d2d06dd0d244a01727fd57e18)

---

## lumos_web_agent_plan_iterative

A fine-tuned Lumos planning-module checkpoint for web-agent tasks, released as model weights alongside a separately listed training dataset.

- Catalog URL: https://awesomecua.com/resources/url-e35db30fee209ef9b57d/
- Original source: https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation
- Evidence checked: 2026-11-09T19:57:55Z
- ID: url:e35db30fee209ef9b57d

### Limitations

The repository lists model weight shards and tokenizer files. The card declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-e35db30fee209ef9b57d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative (retrieved 2026-11-09T19:57:55Z; SHA-256 28067c7dad6cd2bedd632dd109c50daf52cbaece36d7f4a035e93a5ff3d72500)
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative (retrieved 2026-11-09T19:57:55Z; SHA-256 28067c7dad6cd2bedd632dd109c50daf52cbaece36d7f4a035e93a5ff3d72500)

---

## lumos_web_agent_plan_iterative-13B

A released Lumos checkpoint for planning web-agent tasks within an iterative architecture that separates planning, grounding and execution.

- Catalog URL: https://awesomecua.com/resources/url-7e7de336b1d8a2adce2c/
- Original source: https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative-13B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation
- Evidence checked: 2026-11-09T19:56:33Z
- ID: url:7e7de336b1d8a2adce2c

### Limitations

The repository lists PyTorch weight shards and tokenizer files. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-7e7de336b1d8a2adce2c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative-13B

### Primary evidence

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative-13B (retrieved 2026-11-09T19:56:33Z; SHA-256 51bd7543bd920fad97689e79e105f95e7ace2f03f8a5d70d4a3422025c1d05c2)
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative-13B (retrieved 2026-11-09T19:56:33Z; SHA-256 51bd7543bd920fad97689e79e105f95e7ace2f03f8a5d70d4a3422025c1d05c2)

---

## Magma-8B

Magma-8B is a released multimodal agent checkpoint whose card shows UI navigation tasks alongside robot manipulation and describes training with video data.

- Catalog URL: https://awesomecua.com/resources/url-d3247ff0ff9a1f6bc247/
- Original source: https://huggingface.co/microsoft/Magma-8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, action-prediction, video
- Evidence checked: 2026-11-09T05:04:59Z
- ID: url:d3247ff0ff9a1f6bc247

### Limitations

The repository includes sharded safetensors weights and custom model and processor code. The model card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-d3247ff0ff9a1f6bc247/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/Magma-8B

### Primary evidence

- https://huggingface.co/api/models/microsoft/Magma-8B (retrieved 2026-11-09T05:04:59Z; SHA-256 04adb6a009e93762c09d151efc1294b09bd556fc0c1f18cd0896cf7891134d79)
- https://huggingface.co/api/models/microsoft/Magma-8B (retrieved 2026-11-09T05:04:59Z; SHA-256 04adb6a009e93762c09d151efc1294b09bd556fc0c1f18cd0896cf7891134d79)

---

## Magma-R1

Magma-R1 is a released GUI-agent model trained on curated AndroidControl samples. Its accompanying documentation describes action and grounding evaluation and reward-based training.

- Catalog URL: https://awesomecua.com/resources/url-e5e74846aeaa8398673e/
- Original source: https://huggingface.co/batwBMW/Magma-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, action-prediction, reinforcement-learning, evaluation
- Evidence checked: 2026-11-09T19:55:45Z
- ID: url:e5e74846aeaa8398673e

### Limitations

The repository contains model weight shards and configuration files. Its README also contains project-wide benchmark and evaluation instructions, and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-e5e74846aeaa8398673e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/batwBMW/Magma-R1

### Primary evidence

- https://huggingface.co/api/models/batwBMW/Magma-R1 (retrieved 2026-11-09T19:55:45Z; SHA-256 af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e)
- https://huggingface.co/api/models/batwBMW/Magma-R1 (retrieved 2026-11-09T19:55:45Z; SHA-256 af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e)
- https://huggingface.co/api/models/batwBMW/Magma-R1 (retrieved 2026-11-09T20:02:27Z; SHA-256 af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e)
- https://huggingface.co/api/models/batwBMW/Magma-R1-4B-AndroidControl (retrieved 2026-11-09T20:02:27Z; SHA-256 af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e)

---

## MAI-UI 2B

A 2B MAI-UI checkpoint in the Qwen3-VL architecture, from a GUI agent family whose training data adds agent-user interaction and MCP tool calls to mobile navigation and grounding.

- Catalog URL: https://awesomecua.com/resources/url-4b6d61ff2c1d6c8e1a23/
- Original source: https://huggingface.co/Tongyi-MAI/MAI-UI-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T16:01:02Z
- ID: url:4b6d61ff2c1d6c8e1a23

### Limitations

The manifest lists a single model.safetensors file and the card declares Apache-2.0. The card text and benchmark figures describe the whole 2B-to-235B-A22B family; the project README announces this 2B release together with the 8B. The family figures remain unassigned to this checkpoint. No scores were reproduced and no weights were loaded.

- Record JSON: https://awesomecua.com/resources/url-4b6d61ff2c1d6c8e1a23/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md

- weights review: Publisher model-card declaration for the 2B checkpoint; code and training-data terms are separate.
  Sources: https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md

### Primary evidence

- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md (retrieved 2026-10-18T16:01:02Z; SHA-256 81731cb409cf6cd4af6121161ec6ba5d2862eb147e898ed57ac8bc974f008b3f)
- https://huggingface.co/api/models/Tongyi-MAI/MAI-UI-2B (retrieved 2026-10-18T16:01:01Z; SHA-256 f7448a53766079b6d5f842b11def5b6d6b85ca1968cb7738dad558a24e935afa)
- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/config.json (retrieved 2026-10-18T16:01:03Z; SHA-256 c4e0154f8df18ff6573e8ee9f1ba00cf5503ae585e446aa9fbd4c579f65f06bd)
- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/3deabf1d1fcf31964511929938b7c9485589b29c/README.md (retrieved 2026-10-18T16:01:04Z; SHA-256 a77375cc0c52ea48cb913ea046b2255fb3fc4666380beea7b29fa7c3fea7629f)
- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md (retrieved 2026-10-18T16:01:02Z; SHA-256 81731cb409cf6cd4af6121161ec6ba5d2862eb147e898ed57ac8bc974f008b3f)

---

## MAI-UI 8B

A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.

- Catalog URL: https://awesomecua.com/resources/url-00b1a3abf9bcb424b264/
- Original source: https://huggingface.co/Tongyi-MAI/MAI-UI-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:00b1a3abf9bcb424b264

### Limitations

Four public safetensors shards are present and Apache-2.0 is declared. The card presents family-wide results and device-cloud architecture.

- Record JSON: https://awesomecua.com/resources/url-00b1a3abf9bcb424b264/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md

### Primary evidence

- https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 a1087d2a0dde6e7ba6d79db546ee6360a5ffd95ffbc3add1478eedec603a4187)
- https://huggingface.co/api/models/Tongyi-MAI/MAI-UI-8B (retrieved 2026-10-17T04:07:18Z; SHA-256 349e6d5753fa94a47feb4b2fc53ecd6b9188b645a0cffabef92fd1aa0976ecad)
- https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 a1087d2a0dde6e7ba6d79db546ee6360a5ffd95ffbc3add1478eedec603a4187)

---

## Mano-CUA-2.0-4B

A released GUI action model that takes a desktop screenshot and task context to produce structured actions, including clicks, typing, scrolling and app launches.

- Catalog URL: https://awesomecua.com/resources/url-1b08ff264bbf2f8a10a3/
- Original source: https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: action-prediction, grounding, planning, screen-understanding
- Evidence checked: 2026-11-09T19:58:06Z
- ID: url:1b08ff264bbf2f8a10a3

### Limitations

The card identifies this as the full-precision checkpoint based on Qwen3-VL-4B and provides a Transformers inference example. It declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-1b08ff264bbf2f8a10a3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B

### Primary evidence

- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B (retrieved 2026-11-09T19:58:06Z; SHA-256 fa18eac0c82feadd1d87cbac554a661b9efc07f3d891fadcf45f1dd4414cf24e)
- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B (retrieved 2026-11-09T19:58:06Z; SHA-256 fa18eac0c82feadd1d87cbac554a661b9efc07f3d891fadcf45f1dd4414cf24e)

---

## Mano-CUA-2.0-4B-MLX-8bit

An MLX-quantized Mano-CUA model for Apple Silicon that reads screenshots and task instructions to produce structured GUI actions.

- Catalog URL: https://awesomecua.com/resources/url-430e47e1ca9f3b2a302f/
- Original source: https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B-MLX-8bit
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: action-prediction, grounding, long-horizon, cross-app
- Evidence checked: 2026-11-09T21:09:22Z
- ID: url:430e47e1ca9f3b2a302f

### Limitations

The card includes a single-step inference example, an action space, and coordinate conversion guidance. It requires Apple Silicon macOS and Python 3.12 or newer and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-430e47e1ca9f3b2a302f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B-MLX-8bit

### Primary evidence

- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B-MLX-8bit (retrieved 2026-11-09T21:09:22Z; SHA-256 5dd63814c89ee8b9204d43164eb14ab1133b35a25b20c98ec5216c25c2594860)
- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B-MLX-8bit (retrieved 2026-11-09T21:09:22Z; SHA-256 5dd63814c89ee8b9204d43164eb14ab1133b35a25b20c98ec5216c25c2594860)

---

## Mano-P

Mano-P is an open-source GUI vision-language-action model optimized for edge devices and evaluated on OSWorld and Mind2Web.

- Catalog URL: https://awesomecua.com/resources/github-mininglamp-ai-mano-p/
- Original source: https://github.com/Mininglamp-AI/Mano-P
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, action-prediction, efficiency
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:mininglamp-ai/mano-p

- Record JSON: https://awesomecua.com/resources/github-mininglamp-ai-mano-p/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 1c778701e5304c663970e6ec21cfba2d090ba3579faa428fef5b1183df30b4c9)
- https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/LICENSE (retrieved 2026-11-04T14:07:24Z; SHA-256 583a43ea83ecccb3844708314c171032e9fd514fd4c6d2415a8bed7d924af3c2)

---

## Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2

QLoRA adapter for Llama-3.1-8B-Instruct that acts as the value model of the WMA web agent, rating world-model predictions of each candidate action's outcome so the agent can choose the top-scored one.

- Catalog URL: https://awesomecua.com/resources/url-062d2cb4ccb89de78162/
- Original source: https://huggingface.co/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, web-navigation, world-models
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:062d2cb4ccb89de78162

### Limitations

PEFT 0.12.0 adapter weights (adapter_model.safetensors) with optimizer, scheduler and trainer-state files for the base model meta-llama/Meta-Llama-3.1-8B-Instruct. The WMA paper trains the value function on Mind2Web with rewards set by progress toward the goal; the card states no license.

- Record JSON: https://awesomecua.com/resources/url-062d2cb4ccb89de78162/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2 (retrieved 2026-11-10T03:01:01Z; SHA-256 0d619b9ca316aed1291df800d6c438a217b720197ae4ff759a040a148d03dd63)
- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2 (retrieved 2026-11-10T03:01:01Z; SHA-256 0d619b9ca316aed1291df800d6c438a217b720197ae4ff759a040a148d03dd63)

---

## Meta-Llama-3.1-8B-Instruct-WM-webarena-16k-adapter

PEFT world-model adapter for Llama 3.1 8B Instruct from the WMA web agent project, trained to describe the state changes an action causes so the agent can choose actions on WebArena.

- Catalog URL: https://awesomecua.com/resources/url-58195ef097be91525554/
- Original source: https://huggingface.co/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-WM-webarena-16k-adapter
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:58195ef097be91525554

### Limitations

The repository holds adapter_config.json and adapter_model.safetensors plus optimizer, scheduler and RNG states from training. The WMA-Agents README lists it beside a value-model adapter and world-model training datasets and states an MIT code license and CC BY-NC 4.0 data license.

- Record JSON: https://awesomecua.com/resources/url-58195ef097be91525554/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-WM-webarena-16k-adapter (retrieved 2026-11-10T03:01:04Z; SHA-256 d13b686f37e921acd4763849e9d06b24fef7e90954480da07d768c7373a4caad)
- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-WM-webarena-16k-adapter (retrieved 2026-11-10T03:01:04Z; SHA-256 d13b686f37e921acd4763849e9d06b24fef7e90954480da07d768c7373a4caad)

---

## microsoft/Phi-Ground-Any

A fine-tuned vision model that takes an image and instruction and returns a click point. Its card specifies image resizing and coordinate conversion.

- Catalog URL: https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/
- Original source: https://huggingface.co/microsoft/Phi-Ground-Any
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T05:05:14Z
- ID: url:21687e3bf1eb78f2bcda

### Limitations

The card names Phi-3.5-vision-instruct as the base model and declares an MIT license. The repository file list includes model weight shards.

- Record JSON: https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/Phi-Ground-Any

### Primary evidence

- https://huggingface.co/api/models/microsoft/Phi-Ground-Any (retrieved 2026-11-09T05:05:14Z; SHA-256 5653ffbdfbb6489f77ec9fe090cda813366c6262179fa11e9491f9379a9de834)
- https://huggingface.co/api/models/microsoft/Phi-Ground-Any (retrieved 2026-11-09T05:05:14Z; SHA-256 5653ffbdfbb6489f77ec9fe090cda813366c6262179fa11e9491f9379a9de834)

---

## MindAct_CandidateGeneration_deberta-v3-base

Encoder-only DeBERTa-v3-base model from MindAct that scores task query and page element pairs, so the top 50 candidates on a Mind2Web page go on to the action prediction model.

- Catalog URL: https://awesomecua.com/resources/url-43f98379902167a5f9f3/
- Original source: https://huggingface.co/osunlp/MindAct_CandidateGeneration_deberta-v3-base
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding
- Evidence checked: 2026-11-10T03:01:08Z
- ID: url:43f98379902167a5f9f3

### Limitations

PyTorch weights with a DeBERTa-v2 config and SentencePiece tokenizer; the page has no model card or license field. The Mind2Web README gives candidate_generation/evaluate.py and train.py and publishes the model's scores for the dataset; Mind2Web code is MIT.

- Record JSON: https://awesomecua.com/resources/url-43f98379902167a5f9f3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/osunlp/MindAct_CandidateGeneration_deberta-v3-base (retrieved 2026-11-10T03:01:08Z; SHA-256 65841f4dbb0c07d3d0fddbaad512bb917b0c998b3b647fb1ddac93f9767eaaa1)
- https://huggingface.co/api/models/osunlp/MindAct_CandidateGeneration_deberta-v3-base (retrieved 2026-11-10T03:01:08Z; SHA-256 65841f4dbb0c07d3d0fddbaad512bb917b0c998b3b647fb1ddac93f9767eaaa1)

---

## MirrorGuard checkpoint

Qwen2.5-VL-7B-Instruct fine-tune that reads an instruction, history, screenshot and a computer-use agent's thought, returns the thought unchanged when safe and rewrites or refuses it when risky.

- Catalog URL: https://awesomecua.com/resources/url-5f4264af210fb2686870/
- Original source: https://huggingface.co/WhitzardAgent/MirrorGuard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: safety-security
- Evidence checked: 2026-10-19T06:50:28Z
- ID: url:5f4264af210fb2686870

### Limitations

The card gives the system prompt, a vLLM serving command and training settings (LLaMA-Factory 'full' tags, 6 epochs, learning rate 1e-5). The WhitzardAgent/MirrorGuard code README describes this checkpoint as the final VLM trained on reasoning-correction data from its MirrorWorld pipeline and deploys it as a runtime corrector in its agent examples. The card's GitHub link (github.com/bmz-q-q/MirrorGuard) returns 404. The manifest lists four Safetensors shards and an index.

- Record JSON: https://awesomecua.com/resources/url-5f4264af210fb2686870/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- weights review: The card's metadata declares license 'other' and its License section points to a LICENSE file at github.com/bmz-q-q/MirrorGuard, which returns 404; the MIT license of the WhitzardAgent/MirrorGuard code is not transferred to the weights.
  Sources: https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md

### Primary evidence

- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md (retrieved 2026-10-19T06:50:28Z; SHA-256 477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36)
- https://huggingface.co/api/models/WhitzardAgent/MirrorGuard/revision/ea5025874aa1d8a32cabec9d2c05b5634db34c14 (retrieved 2026-10-19T06:50:29Z; SHA-256 18d2ac4e60be47c04e0fa32dfea16699913196b9ec9bc52a84e889b11aaa0eea)
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/config.json (retrieved 2026-10-19T06:50:29Z; SHA-256 0657beb7641fb2b71666de6760616f429fa4ed39e7b8d8989686ac1a4f2ee1fd)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/README.md (retrieved 2026-10-19T06:50:26Z; SHA-256 90ab7463e9d9c4d6c5e3b60acf385486ca1d9f09455aea0450b167406cfdf728)
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md (retrieved 2026-10-19T06:50:28Z; SHA-256 477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36)

---

## MobileRL 9B checkpoint

A GLM-4.1V-based mobile action checkpoint released by the MobileRL project for Android interaction.

- Catalog URL: https://awesomecua.com/resources/url-d5667c854845c77b9f5b/
- Original source: https://huggingface.co/xuyifan/MobileRL-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, mobile-navigation
- Evidence checked: 2026-10-17T04:03:40Z
- ID: url:d5667c854845c77b9f5b

### Limitations

Five public safetensors shards are present. The short card declares Apache-2.0 and a GLM-4.1V-9B base. The official project confirms the checkpoint and Android targets, and distinguishes MobileRL bounding-box actions from coordinate-format alternatives.

- Record JSON: https://awesomecua.com/resources/url-d5667c854845c77b9f5b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xuyifan/MobileRL-9B

### Primary evidence

- https://huggingface.co/api/models/xuyifan/MobileRL-9B (retrieved 2026-10-17T04:03:40Z; SHA-256 a00f13f5a86f2de7eb9c866cc4d08b958d21b2ac30dc3b9e1662e4bb336b7cb3)
- https://huggingface.co/xuyifan/MobileRL-9B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 5c2d5eb247958f1af0646cbac831ecfbc7f839baa236a0d733075592da81f58e)
- https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 752fad8ebd8b8eda03648329a6fc2585e5bcb2b96875b8aa2ce7d9f3fff78153)
- https://huggingface.co/api/models/xuyifan/MobileRL-9B (retrieved 2026-10-17T04:03:40Z; SHA-256 a00f13f5a86f2de7eb9c866cc4d08b958d21b2ac30dc3b9e1662e4bb336b7cb3)

---

## Model-3b-3ao

A released GUI-agent checkpoint associated with CCPO, which uses coordinate-aware visual compression and distance-based training feedback for multi-turn interface tasks.

- Catalog URL: https://awesomecua.com/resources/url-477342b0eb81469b35a0/
- Original source: https://huggingface.co/HiThink-Research/CCPO-3B-3AO-AITW
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: efficiency, grounding, reinforcement-learning
- Evidence checked: 2026-11-09T21:08:59Z
- ID: url:477342b0eb81469b35a0

### Limitations

The repository contains safetensors weight shards and tokenizer and configuration files. The card points to a separate code repository for the agent pipeline and training scripts and states an MIT license.

- Record JSON: https://awesomecua.com/resources/url-477342b0eb81469b35a0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/HiThink-Research/CCPO-3B-3AO-AITW

### Primary evidence

- https://huggingface.co/api/models/HiThink-Research/CCPO-3B-3AO-AITW (retrieved 2026-11-09T21:08:59Z; SHA-256 8305483dff4a4c3e74f5b7798ff98ff47f8f78fd53fb31776adf5f1ca29bfda5)
- https://huggingface.co/api/models/HiThink-Research/CCPO-3B-3AO-AITW (retrieved 2026-11-09T21:08:59Z; SHA-256 8305483dff4a4c3e74f5b7798ff98ff47f8f78fd53fb31776adf5f1ca29bfda5)

---

## moonshotai/Kimi-VL-A3B-Thinking

Kimi-VL-A3B-Thinking is a released reasoning-focused vision-language checkpoint. Its card also reports Kimi-VL family evaluations on desktop-agent tasks and screen grounding.

- Catalog URL: https://awesomecua.com/resources/url-c1851e7db3b0e53d2218/
- Original source: https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-11-09T21:09:36Z
- ID: url:c1851e7db3b0e53d2218

### Limitations

The repository includes sharded safetensors weights and custom model and processing code. The card declares an MIT license and cites the Kimi-VL technical report.

- Record JSON: https://awesomecua.com/resources/url-c1851e7db3b0e53d2218/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking

### Primary evidence

- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking (retrieved 2026-11-09T21:09:36Z; SHA-256 5d876f6cfad59d67a665eeaa3c4e436b3b96127815a8f6376a73d73e6c8e6832)
- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking (retrieved 2026-11-09T21:09:36Z; SHA-256 5d876f6cfad59d67a665eeaa3c4e436b3b96127815a8f6376a73d73e6c8e6832)

---

## mPLUG/ToolCUA-8B

ToolCUA-8B is a released computer-use model trained to alternate between desktop GUI actions and structured tool calls during task execution.

- Catalog URL: https://awesomecua.com/resources/url-44b65e07d7a869d37dc6/
- Original source: https://huggingface.co/mPLUG/ToolCUA-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: tool-integration, action-prediction, reinforcement-learning, efficiency
- Evidence checked: 2026-11-09T19:57:06Z
- ID: url:44b65e07d7a869d37dc6

### Limitations

The card names Qwen/Qwen3-VL-8B-Instruct as the base model and provides vLLM serving instructions. The repository lists sharded safetensors weights and processor and tokenizer files. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-44b65e07d7a869d37dc6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/mPLUG/ToolCUA-8B

### Primary evidence

- https://huggingface.co/api/models/mPLUG/ToolCUA-8B (retrieved 2026-11-09T19:57:06Z; SHA-256 7c297c5277fc01db2f396c027a6cf6597715c7247dcdf022794f97d023e6cf48)
- https://huggingface.co/api/models/mPLUG/ToolCUA-8B (retrieved 2026-11-09T19:57:06Z; SHA-256 7c297c5277fc01db2f396c027a6cf6597715c7247dcdf022794f97d023e6cf48)

---

## nnetnav-wa-qwen-7B

Qwen-2.5-7B-Instruct fine-tuned on the NNetNav-WA WebArena trajectories, released by the Go-Browse project as its NNetNav-7B comparison model for WebArena web navigation.

- Catalog URL: https://awesomecua.com/resources/url-511ba336435d406f3761/
- Original source: https://huggingface.co/apurvaga/nnetnav-wa-qwen-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-11-10T03:01:03Z
- ID: url:511ba336435d406f3761

### Limitations

Seven safetensors shards in Transformers format. The paper trains it by supervised finetuning on NNetNav-WA, 45K interaction steps across the 5 WebArena domains; the Go-Browse README serves finetuned models with vLLM or SGLang for WebArena runs.

- Record JSON: https://awesomecua.com/resources/url-511ba336435d406f3761/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/apurvaga/nnetnav-wa-qwen-7B (retrieved 2026-11-10T03:01:03Z; SHA-256 0889f2279f45985155d38347ec309ed87f8b9b44519e1874a3e8f03581ac6cfd)
- https://huggingface.co/api/models/apurvaga/nnetnav-wa-qwen-7B (retrieved 2026-11-10T03:01:03Z; SHA-256 0889f2279f45985155d38347ec309ed87f8b9b44519e1874a3e8f03581ac6cfd)

---

## Northstar-CUA-Fast

A 4B-parameter computer-use model trained with GUI reinforcement learning that maps text and screenshots to actions such as clicks, typing, and scrolling.

- Catalog URL: https://awesomecua.com/resources/url-52de9679739ad0a50f69/
- Original source: https://huggingface.co/Tzafon/Northstar-CUA-Fast
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: action-prediction, grounding, reinforcement-learning, self-reflection
- Evidence checked: 2026-11-09T21:08:40Z
- ID: url:52de9679739ad0a50f69

### Limitations

The repository contains safetensors weight shards and tokenizer and processor files. The card declares Apache 2.0 licensing and describes an API and agent harness for running an action loop.

- Record JSON: https://awesomecua.com/resources/url-52de9679739ad0a50f69/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Tzafon/Northstar-CUA-Fast

### Primary evidence

- https://huggingface.co/api/models/Tzafon/Northstar-CUA-Fast (retrieved 2026-11-09T21:08:40Z; SHA-256 8c16e0fbdf1b02da7ece5e9cbd1a5d16e5e3a6faf595e0389cbb5e852739d24b)
- https://huggingface.co/api/models/Tzafon/Northstar-CUA-Fast (retrieved 2026-11-09T21:08:40Z; SHA-256 8c16e0fbdf1b02da7ece5e9cbd1a5d16e5e3a6faf595e0389cbb5e852739d24b)

---

## OmniJev

OmniJev is a multimodal decision model that scores typed choices from screens and other visual input. Released weights and inference code cover web and phone tasks alongside other domains.

- Catalog URL: https://awesomecua.com/resources/github-tinnel123666888-omnijev/
- Original source: https://github.com/tinnel123666888/OmniJev
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, web
- Topics: action-prediction, grounding, screen-understanding, mobile-navigation
- Evidence checked: 2026-11-09T21:09:36Z
- ID: github:tinnel123666888/omnijev

### Limitations

The README lists 0.8B, 2B, and 4B checkpoints based on Qwen3.5, plus a separate generative SFT baseline. It describes recorded-trajectory replay demos and declares Apache-2.0 for the released models.

- Record JSON: https://awesomecua.com/resources/github-tinnel123666888-omnijev/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/tinnel123666888/OmniJev/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tinnel123666888/OmniJev/HEAD/README.md (retrieved 2026-11-09T21:09:36Z; SHA-256 d83fda3a010f5f95ffd09a8cc001de33abca523df2fb998f3bf478ed2a824fb9)
- https://raw.githubusercontent.com/tinnel123666888/OmniJev/HEAD/LICENSE (retrieved 2026-11-09T21:11:50Z; SHA-256 c35d34d2a8cc22ca043ecaf7989586960c9305d45a9ec81ff839b736a3ffbd21)

---

## OmniJev

OmniJev v1.1 is a 4B LoRA adapter with decision heads for Qwen3.5-4B that answers typed questions about screens and other images with probabilities; its task families include androidcontrol and web.

- Catalog URL: https://awesomecua.com/resources/url-6bdda64c5782f03b0f54/
- Original source: https://huggingface.co/tinnel123/OmniJev
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, web
- Topics: screen-understanding, action-prediction, mobile-navigation, web-navigation
- Evidence checked: 2026-11-10T06:29:20Z
- ID: url:6bdda64c5782f03b0f54

### Limitations

The repository holds adapter_model.safetensors, decision and ordinal heads, added-token embeddings, tokenizer and processor files, result reports and release_manifest.json with SHA-256 checksums; the Qwen/Qwen3.5-4B backbone is downloaded separately and inference runs through the OmniJev GitHub code. The card reports per-family accuracy over 30 families, including androidcontrol, pilot_web, point_phone and web. Apache-2.0 covers the adapter and project code.

- Record JSON: https://awesomecua.com/resources/url-6bdda64c5782f03b0f54/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tinnel123/OmniJev

### Primary evidence

- https://huggingface.co/api/models/tinnel123/OmniJev (retrieved 2026-11-10T06:29:20Z; SHA-256 a9ab5b52a2cd3e810702c8d7c38f8c829d000b940d5452cbf7b46f7feb055766)
- https://huggingface.co/api/models/tinnel123/OmniJev (retrieved 2026-11-10T06:29:20Z; SHA-256 a9ab5b52a2cd3e810702c8d7c38f8c829d000b940d5452cbf7b46f7feb055766)

---

## OmniJev-0.8B

OmniJev decision adapter for Qwen3.5-0.8B: LoRA weights and heads that return probabilities for typed questions about screens, video and robot scenes, evaluated on web and phone task families.

- Catalog URL: https://awesomecua.com/resources/url-8d584b241812a89a964e/
- Original source: https://huggingface.co/tinnel123/OmniJev-0.8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web, android
- Topics: action-prediction, screen-understanding
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:8d584b241812a89a964e

### Limitations

Holds LoRA weights, decision and ordinal heads, added-token embeddings, tokenizer and processor files, with SHA-256 checksums in release_manifest.json. The Qwen3.5-0.8B backbone is downloaded separately and loaded through the MSO1 class of the OmniJev code; the adapter is Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-8d584b241812a89a964e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tinnel123/OmniJev-0.8B

### Primary evidence

- https://huggingface.co/api/models/tinnel123/OmniJev-0.8B (retrieved 2026-11-10T06:29:31Z; SHA-256 f152f710df46aa9787ff89d14bd911a460645e08a24e45fddc6ec13a99a3b5d3)
- https://huggingface.co/api/models/tinnel123/OmniJev-0.8B (retrieved 2026-11-10T06:29:31Z; SHA-256 f152f710df46aa9787ff89d14bd911a460645e08a24e45fddc6ec13a99a3b5d3)

---

## OmniJev-2B

OmniJev decision adapter for Qwen3.5-2B: LoRA weights and heads that return probabilities for typed questions about screens, video and robot scenes, evaluated on web and phone task families.

- Catalog URL: https://awesomecua.com/resources/url-aa4abc9055c3f3248a1a/
- Original source: https://huggingface.co/tinnel123/OmniJev-2B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web, android
- Topics: action-prediction, screen-understanding
- Evidence checked: 2026-11-10T06:29:32Z
- ID: url:aa4abc9055c3f3248a1a

### Limitations

Holds LoRA weights, decision and ordinal heads, added-token embeddings, tokenizer and processor files, with SHA-256 checksums in release_manifest.json. The Qwen3.5-2B backbone is downloaded separately and loaded through the MSO1 class of the OmniJev code; the adapter is Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-aa4abc9055c3f3248a1a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tinnel123/OmniJev-2B

### Primary evidence

- https://huggingface.co/api/models/tinnel123/OmniJev-2B (retrieved 2026-11-10T06:29:32Z; SHA-256 f8d500a3abfbd8eaaaf73ba2e0d541c1dfc697817565eae2a2ee408b6d56aed6)
- https://huggingface.co/api/models/tinnel123/OmniJev-2B (retrieved 2026-11-10T06:29:32Z; SHA-256 f8d500a3abfbd8eaaaf73ba2e0d541c1dfc697817565eae2a2ee408b6d56aed6)

---

## OmniJev-SFT-0.8B

Generative SFT baseline from the OmniJev release: a LoRA adapter over Qwen3.5-0.8B, trained for 12,500 steps, that answers image questions with text; the card reports scores on AndroidControl, web and phone families.

- Catalog URL: https://awesomecua.com/resources/url-a236b756e1940a873e9f/
- Original source: https://huggingface.co/tinnel123/OmniJev-SFT-0.8B
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web, android
- Topics: screen-understanding, action-prediction
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:a236b756e1940a873e9f

### Limitations

Holds a LoRA adapter with tokenizer, processor and sft_meta.json files, loaded with transformers and PEFT over a separately downloaded Qwen3.5-0.8B. Apache-2.0 for the adapter.

- Record JSON: https://awesomecua.com/resources/url-a236b756e1940a873e9f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tinnel123/OmniJev-SFT-0.8B

### Primary evidence

- https://huggingface.co/api/models/tinnel123/OmniJev-SFT-0.8B (retrieved 2026-11-10T06:29:31Z; SHA-256 6b64bffb32c7e8d4045a3d186f203e7ee37af42c55b3bd016df03b8363262276)
- https://huggingface.co/api/models/tinnel123/OmniJev-SFT-0.8B (retrieved 2026-11-10T06:29:31Z; SHA-256 6b64bffb32c7e8d4045a3d186f203e7ee37af42c55b3bd016df03b8363262276)

---

## OpenCUA-7B-exl2

OpenCUA-7B-exl2 is a 4.5bpw quantized OpenCUA-7B checkpoint for generating computer actions and locating GUI targets from screenshots.

- Catalog URL: https://awesomecua.com/resources/url-76f3981d219bb87b4eea/
- Original source: https://huggingface.co/sujitvasanth/OpenCUA-7B-exl2
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: action-prediction, grounding, screen-understanding
- Evidence checked: 2026-11-09T05:05:00Z
- ID: url:76f3981d219bb87b4eea

### Limitations

The repository lists a safetensors weight file and sample inference code. The card calls for exllamav2, names Qwen/Qwen2.5-VL-7B-Instruct as a base model, and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-76f3981d219bb87b4eea/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/sujitvasanth/OpenCUA-7B-exl2

### Primary evidence

- https://huggingface.co/api/models/sujitvasanth/OpenCUA-7B-exl2 (retrieved 2026-11-09T05:05:00Z; SHA-256 138ce37b7d0b725626dc1e035434e4fd3e3fabba4408c1681b46ebd068574417)
- https://huggingface.co/api/models/sujitvasanth/OpenCUA-7B-exl2 (retrieved 2026-11-09T05:05:00Z; SHA-256 138ce37b7d0b725626dc1e035434e4fd3e3fabba4408c1681b46ebd068574417)

---

## OpenJev-1.7B

OpenJev-1.7B is a local decision model that scores typed options for browser agent steps, including the next operation and target element.

- Catalog URL: https://awesomecua.com/resources/url-24ec6c30e9bb9946c13f/
- Original source: https://huggingface.co/alanhuangya/OpenJev-1.7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation
- Evidence checked: 2026-11-09T21:08:35Z
- ID: url:24ec6c30e9bb9946c13f

### Limitations

The card identifies a Qwen3-1.7B-Base backbone with merged LoRA weights and a pointer readout. It names Mind2Web and NNetNav-live among its training sources and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-24ec6c30e9bb9946c13f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-1.7B

### Primary evidence

- https://huggingface.co/api/models/alanhuangya/OpenJev-1.7B (retrieved 2026-11-09T21:08:35Z; SHA-256 ef399390bb4f109ffc9fa05cfa0709787e95eeedbe659397aa5c9bc5b36556ce)
- https://huggingface.co/api/models/alanhuangya/OpenJev-1.7B (retrieved 2026-11-09T21:08:35Z; SHA-256 ef399390bb4f109ffc9fa05cfa0709787e95eeedbe659397aa5c9bc5b36556ce)

---

## OpenJev-4B

A local decision model that scores typed options for browser-agent operations and target elements. The release includes weights and reports browser-step evaluations.

- Catalog URL: https://awesomecua.com/resources/url-e592a1ff8bfcafcc7061/
- Original source: https://huggingface.co/alanhuangya/OpenJev-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation, efficiency
- Evidence checked: 2026-11-09T21:08:59Z
- ID: url:e592a1ff8bfcafcc7061

### Limitations

The repository lists model and pointer-head safetensors files, configuration and tokenizer assets. The card names Qwen3.5-4B-Base and a Kev adapter as training bases and declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-e592a1ff8bfcafcc7061/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-4B

### Primary evidence

- https://huggingface.co/api/models/alanhuangya/OpenJev-4B (retrieved 2026-11-09T21:08:59Z; SHA-256 3bed29cd3d9084abb4249e8aac889402743ac2072c6e1f07753374aca9df11c2)
- https://huggingface.co/api/models/alanhuangya/OpenJev-4B (retrieved 2026-11-09T21:08:59Z; SHA-256 3bed29cd3d9084abb4249e8aac889402743ac2072c6e1f07753374aca9df11c2)

---

## OpenJev-8B

OpenJev-8B is a local decision model that scores typed options for browser agent operations and target elements in a single forward pass.

- Catalog URL: https://awesomecua.com/resources/url-8f5a8144b96447be84c5/
- Original source: https://huggingface.co/alanhuangya/OpenJev-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, grounding, web-navigation
- Evidence checked: 2026-11-09T21:08:35Z
- ID: url:8f5a8144b96447be84c5

### Limitations

The card identifies a Qwen3-8B-Base backbone with merged LoRA weights and a pointer readout. It reports tests on Mind2Web and live websites and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-8f5a8144b96447be84c5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-8B

### Primary evidence

- https://huggingface.co/api/models/alanhuangya/OpenJev-8B (retrieved 2026-11-09T21:08:35Z; SHA-256 ac979aefaaf708870e837b361b14a9dc7731546336b4d3235339bc5be25742a5)
- https://huggingface.co/api/models/alanhuangya/OpenJev-8B (retrieved 2026-11-09T21:08:35Z; SHA-256 ac979aefaaf708870e837b361b14a9dc7731546336b4d3235339bc5be25742a5)

---

## OpenMobile-2 27B

Mobile-agent checkpoint based on Qwen3.6-27B for GUI and app-native tool interaction.

- Catalog URL: https://awesomecua.com/resources/url-1611de0e6d606165d12d/
- Original source: https://huggingface.co/OpenMobile-2/OpenMobile-2-27B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, tool-integration
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:1611de0e6d606165d12d

### Limitations

License declarations apply to this checkpoint separately from code and training data.

- Record JSON: https://awesomecua.com/resources/url-1611de0e6d606165d12d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md

### Primary evidence

- https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 ba760ab75e997941dabf0845b34e5fb83daeb83a5cfa16b13929477cfc61a31c)
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-27B (retrieved 2026-10-17T01:49:48Z; SHA-256 c7e388efe1ecfd415b7b5af7f296e62646a0a1380037f1e57ad1a43c26463b9a)
- https://os-copilot.github.io/OpenMobile2-Home/ (retrieved 2026-10-17T01:46:06Z; SHA-256 9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc)
- https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 ba760ab75e997941dabf0845b34e5fb83daeb83a5cfa16b13929477cfc61a31c)
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-27B (retrieved 2026-10-17T19:15:11Z; SHA-256 f669181b7f1b92bbbcb8ab71f0d15d8c3cf93b3665d73d20e9b9f0dc3a36e158)
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-27B (retrieved 2026-10-17T19:15:12Z; SHA-256 f669181b7f1b92bbbcb8ab71f0d15d8c3cf93b3665d73d20e9b9f0dc3a36e158)

---

## OpenMobile-8B

Mobile agent checkpoint with a Qwen3-VL architecture, released with OpenMobile and fine-tuned on its synthesized Android trajectories; the code README serves it with vLLM for AndroidWorld evaluation.

- Catalog URL: https://awesomecua.com/resources/url-6616228d4f267363458e/
- Original source: https://huggingface.co/cckevinn/OpenMobile-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-19T06:53:33Z
- ID: url:6616228d4f267363458e

### Limitations

The Hub model card (README.md) is empty, so identity and purpose come from the OpenMobile code README, which links this repository as the model, lists fine-tuned checkpoints based on OpenMobile data, and uses OpenMobile-8B as the example model for AndroidWorld evaluation. The project page reports AndroidWorld, AndroidLab and MobileWorld results for its Qwen3-VL-8B variant. No base-model ID is declared on the Hub. The manifest lists four Safetensors shards and an index.

- Record JSON: https://awesomecua.com/resources/url-6616228d4f267363458e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- weights review: The Hub card is empty and declares no license; the code README's Apache-2.0 covers the code and says other released artifacts may have their own terms.
  Sources: https://huggingface.co/api/models/cckevinn/OpenMobile-8B/revision/0cd9fc56c7f359ebe62ae273b731f3213fd62b40

### Primary evidence

- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md (retrieved 2026-10-19T06:53:33Z; SHA-256 8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080)
- https://huggingface.co/api/models/cckevinn/OpenMobile-8B/revision/0cd9fc56c7f359ebe62ae273b731f3213fd62b40 (retrieved 2026-10-19T06:53:37Z; SHA-256 07751fda41e98eccbb1e9d439b4fcc93a15580948fa81afa18b439d9143859c0)
- https://huggingface.co/cckevinn/OpenMobile-8B/raw/0cd9fc56c7f359ebe62ae273b731f3213fd62b40/config.json (retrieved 2026-10-19T06:53:38Z; SHA-256 50902136bf6856d8935a6fd84aa9bdb4eedf6ef260d9143421943f5800001fd0)
- https://njucckevin.github.io/openmobile/ (retrieved 2026-10-19T06:53:36Z; SHA-256 b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864)

---

## OpenPhone_model

OpenPhone-3B weights, a 3B on-device model for Android GUI tasks trained with supervised fine-tuning on synthetic reasoning data and then GRPO-style reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/url-836de49b2bbd47d3a6a5/
- Original source: https://huggingface.co/hkuds/OpenPhone_model
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, reinforcement-learning, efficiency
- Evidence checked: 2026-11-10T03:01:09Z
- ID: url:836de49b2bbd47d3a6a5

### Limitations

The repository holds one checkpoint split into checkpoint-2025_09_03.zip.partaa and .partab and has no model card. The HKUDS/OpenPhone README documents it, provides vLLM serving scripts and the training recipe, evaluates on AndroidLab (9 apps, 138 tasks) and declares the MIT License.

- Record JSON: https://awesomecua.com/resources/url-836de49b2bbd47d3a6a5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/hkuds/OpenPhone_model (retrieved 2026-11-10T03:01:09Z; SHA-256 54b516f6cabb5492c8ee36a26353bcba10c96c5933a90dc4dd5893e5199d9826)
- https://huggingface.co/api/models/hkuds/OpenPhone_model (retrieved 2026-11-10T03:01:09Z; SHA-256 54b516f6cabb5492c8ee36a26353bcba10c96c5933a90dc4dd5893e5199d9826)

---

## OpenWebVoyager-opt-1

OpenWebVoyager checkpoint after the first exploration-feedback-optimization round: the imitation-learned multimodal web agent further trained on successful real-website trajectories judged by GPT-4o.

- Catalog URL: https://awesomecua.com/resources/url-bd293c9a5f9bf16b8199/
- Original source: https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-1
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, data-generation
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:bd293c9a5f9bf16b8199

### Limitations

The repository holds seven safetensors shards; the card declares license apache-2.0. The README hosts a checkpoint with server/hf_online_server.py and runs tasks through WebVoyager, and each optimization iteration uses 480 task queries.

- Record JSON: https://awesomecua.com/resources/url-bd293c9a5f9bf16b8199/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-1

### Primary evidence

- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-1 (retrieved 2026-11-10T03:01:13Z; SHA-256 2061b137a20eb3a4c16660ba0e788742e0dd5c24b57606f60e7eb289d6af5b48)
- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-1 (retrieved 2026-11-10T03:01:13Z; SHA-256 2061b137a20eb3a4c16660ba0e788742e0dd5c24b57606f60e7eb289d6af5b48)

---

## OpenWebVoyager-opt-2

The second optimization-iteration checkpoint of OpenWebVoyager, an idefics2-8b multimodal web agent trained by imitation learning and then refined on successful real-website trajectories kept by GPT-4o feedback.

- Catalog URL: https://awesomecua.com/resources/url-f4f6f5bfe051e6ba3d94/
- Original source: https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-2
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:f4f6f5bfe051e6ba3d94

### Limitations

The repository holds seven safetensors shards with processor and tokenizer files; the card carries an Apache-2.0 license. The OpenWebVoyager README lists it as the Optim-2 checkpoint beside the IL, opt-1 and opt-3 releases and runs it with the WebVoyager framework, hosting the agent on an A100 GPU.

- Record JSON: https://awesomecua.com/resources/url-f4f6f5bfe051e6ba3d94/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-2

### Primary evidence

- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-2 (retrieved 2026-11-10T03:01:15Z; SHA-256 d52c4979916bfafc0f47102df11a97cff507116fafa61e59f54dcfeca42fa131)
- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-2 (retrieved 2026-11-10T03:01:15Z; SHA-256 d52c4979916bfafc0f47102df11a97cff507116fafa61e59f54dcfeca42fa131)

---

## OpenWebVoyager-opt-3

Third optimization-stage checkpoint of OpenWebVoyager, an Idefics2-based multimodal web agent trained by imitation learning and then refined on successful self-explored trajectories judged by GPT-4o.

- Catalog URL: https://awesomecua.com/resources/url-2cd89755e4e2511de633/
- Original source: https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-3
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:2cd89755e4e2511de633

### Limitations

Seven sharded safetensors files with processor and tokenizer configs; the card declares Apache-2.0 and has no other text. The OpenWebVoyager README trains with an Idefics2 Megatron script and serves a downloaded checkpoint on an A100 GPU for WebVoyager-style web navigation.

- Record JSON: https://awesomecua.com/resources/url-2cd89755e4e2511de633/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenWebVoyager/OpenWebVoyager-opt-3

### Primary evidence

- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-3 (retrieved 2026-11-10T03:01:04Z; SHA-256 b5dbba4176511daab0906b6a98f165430fec6e4ae9c8b53bab49f1dae0564681)
- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-opt-3 (retrieved 2026-11-10T03:01:04Z; SHA-256 b5dbba4176511daab0906b6a98f165430fec6e4ae9c8b53bab49f1dae0564681)

---

## OpenWebVoyager/OpenWebVoyager-IL

An Idefics2-based multimodal web-agent checkpoint trained by imitation learning on trajectories collected with a web-agent framework.

- Catalog URL: https://awesomecua.com/resources/url-725f9a8225f0f9c40d93/
- Original source: https://huggingface.co/OpenWebVoyager/OpenWebVoyager-IL
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: imitation-learning, web-navigation, action-prediction
- Evidence checked: 2026-11-09T19:56:53Z
- ID: url:725f9a8225f0f9c40d93

### Limitations

The repository lists sharded safetensors weights and tokenizer and processor files. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-725f9a8225f0f9c40d93/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenWebVoyager/OpenWebVoyager-IL

### Primary evidence

- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-IL (retrieved 2026-11-09T19:56:53Z; SHA-256 ad75f6ecf95bd512e863068761e16587b21ba7f103270c565126ca8e44e99ea4)
- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-IL (retrieved 2026-11-09T19:56:53Z; SHA-256 ad75f6ecf95bd512e863068761e16587b21ba7f103270c565126ca8e44e99ea4)

---

## OS-Atlas-Pro-4B

A GUI action checkpoint fine-tuned from OS-Atlas-Base-4B that uses a task instruction, screenshot, and action definitions to generate reasoning and a next action.

- Catalog URL: https://awesomecua.com/resources/url-b87dd2aed7f4c1982b6b/
- Original source: https://huggingface.co/OS-Copilot/OS-Atlas-Pro-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: action-prediction, planning, grounding
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:b87dd2aed7f4c1982b6b

### Limitations

The repository includes safetensors weight shards and model code. The card provides an inference example and declares the Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b87dd2aed7f4c1982b6b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Pro-4B

### Primary evidence

- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Pro-4B (retrieved 2026-11-09T21:08:46Z; SHA-256 b0d065192ca13967bbf8749bff942b5ce1522cd96ca0cf9217158af78410d2bf)
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Pro-4B (retrieved 2026-11-09T21:08:46Z; SHA-256 b0d065192ca13967bbf8749bff942b5ce1522cd96ca0cf9217158af78410d2bf)

---

## OTA-v1

OTA-v1 is a fine-tuned browser-agent checkpoint designed to plan browser actions, use tools and maintain context across multi-step web tasks.

- Catalog URL: https://awesomecua.com/resources/url-404c719910f8f4a37149/
- Original source: https://huggingface.co/OTA-AI/OTA-v1
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, tool-integration, state-tracking
- Evidence checked: 2026-11-09T19:56:21Z
- ID: url:404c719910f8f4a37149

### Limitations

The repository lists safetensors and GGUF weights, tokenizer files and configuration. The card provides a Transformers loading example and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-404c719910f8f4a37149/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OTA-AI/OTA-v1

### Primary evidence

- https://huggingface.co/api/models/OTA-AI/OTA-v1 (retrieved 2026-11-09T19:56:21Z; SHA-256 f3166ac1dec80a0a39e0674a768a060ac82c3f5539467c998f057780ea960d3a)
- https://huggingface.co/api/models/OTA-AI/OTA-v1 (retrieved 2026-11-09T19:56:21Z; SHA-256 f3166ac1dec80a0a39e0674a768a060ac82c3f5539467c998f057780ea960d3a)

---

## PAE LLaVA 7B

A released LLaVA checkpoint for visual browser interaction from the PAE autonomous task-proposal and policy-learning system.

- Catalog URL: https://awesomecua.com/resources/url-5d61c1b5fc8dd650518d/
- Original source: https://huggingface.co/yifeizhou/pae-llava-7b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:5d61c1b5fc8dd650518d

### Limitations

The model is publicly ungated and has seven safetensors shards plus tokenizer and configuration files. Its card declares CC-BY-NC-4.0 for this model. This weight declaration does not settle the separate PAE dataset or code licensing questions.

- Record JSON: https://awesomecua.com/resources/url-5d61c1b5fc8dd650518d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-4.0 — https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md

### Primary evidence

- https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 c0994582f81415c9b0d37e4e5018752e48e511178c4b3898c207a042992db845)
- https://huggingface.co/api/models/yifeizhou/pae-llava-7b (retrieved 2026-10-17T02:02:28Z; SHA-256 1b76d2aebbe15954eff2b8859b884ec6504f8b67ed0b1045d8b3a83c0d132d3a)
- https://raw.githubusercontent.com/amazon-science/PAE/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 3e5f24b3175afeba8635dacc7b66eba1ce89fea49996a20281ff2df5a41f1e24)
- https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 c0994582f81415c9b0d37e4e5018752e48e511178c4b3898c207a042992db845)

---

## PC-Agent-E checkpoint

Computer-use checkpoint fine-tuned on PC-Agent-E trajectories; the model-card prose identifies Qwen2.5-VL-72B-Instruct as its starting model.

- Catalog URL: https://awesomecua.com/resources/url-04aa7569d183379d615c/
- Original source: https://huggingface.co/henryhe0123/PC-Agent-E
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: action-prediction, imitation-learning
- Evidence checked: 2026-10-18T04:35:19Z
- ID: url:04aa7569d183379d615c

### Limitations

Public manifest lists 31 Safetensors shards and their index. The card prose names Qwen2.5-VL-72B-Instruct while its YAML base_model field self-references PC-Agent-E; no base-model relationship is imported from that inconsistent metadata. The model-card MIT declaration is recorded for weights only.

- Record JSON: https://awesomecua.com/resources/url-04aa7569d183379d615c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md

- weights review: Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  Sources: https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md

### Primary evidence

- https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md (retrieved 2026-10-18T04:35:19Z; SHA-256 feb41002efff5ef30fe06f9891efbe954e0d046c0379f7c8ca72b5d8a8a304be)
- https://huggingface.co/api/models/henryhe0123/PC-Agent-E (retrieved 2026-10-18T04:33:21Z; SHA-256 f81a6cea4234e65f8bab390a18487e65dd0b0cb62f0a9458c658ff07e8a7b5f7)
- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d)

---

## Phi-Ground checkpoint

Microsoft Phi-Ground GUI grounding checkpoint fine-tuned from Phi-3.5-vision-instruct, shipped as two PyTorch weight shards with custom Phi-3-V configuration and processing code under MIT.

- Catalog URL: https://awesomecua.com/resources/url-cee45b940d5fbff3ccca/
- Original source: https://huggingface.co/microsoft/Phi-Ground
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:cee45b940d5fbff3ccca

- Record JSON: https://awesomecua.com/resources/url-cee45b940d5fbff3ccca/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/Phi-Ground

### Primary evidence

- https://huggingface.co/api/models/microsoft/Phi-Ground (retrieved 2026-10-16T06:50:49Z; SHA-256 ce8e0ebc3d4c2642bfb6a1d807176eae4c14b52fbc6f221b3c234a9d55e0d362)
- https://huggingface.co/api/models/microsoft/Phi-Ground (retrieved 2026-10-16T06:50:49Z; SHA-256 ce8e0ebc3d4c2642bfb6a1d807176eae4c14b52fbc6f221b3c234a9d55e0d362)

---

## Pix2Struct

Pix2Struct provides official training and inference code for screenshot-parsing vision-language pretraining across web and mobile UI tasks.

- Catalog URL: https://awesomecua.com/resources/github-google-research-pix2struct/
- Original source: https://github.com/google-research/pix2struct
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:google-research/pix2struct

- Record JSON: https://awesomecua.com/resources/github-google-research-pix2struct/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/pix2struct/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/pix2struct/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 ca99e7ffd4a4286e1eec2651d5733e0d9630e2e1f042caa93c22ce0eec465fa5)
- https://raw.githubusercontent.com/google-research/pix2struct/HEAD/LICENSE (retrieved 2026-11-04T13:22:40Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)

---

## pix2struct-large

Pretrained large Pix2Struct weights, an image-to-text model pretrained to parse masked web page screenshots into simplified HTML, intended for fine-tuning on visual language tasks.

- Catalog URL: https://awesomecua.com/resources/url-b2b683f72ef4835c0826/
- Original source: https://huggingface.co/google/pix2struct-large
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:b2b683f72ef4835c0826

### Limitations

The repository holds PyTorch and safetensors weights with the processor and tokenizer files for Hugging Face Transformers, plus instructions for converting T5x checkpoints. Declared license Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-b2b683f72ef4835c0826/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/google/pix2struct-large

### Primary evidence

- https://huggingface.co/api/models/google/pix2struct-large (retrieved 2026-11-10T06:29:27Z; SHA-256 81f8cdbb721f06c0102dd1b7418c114764d8d9777bf31cc69eb6c542eb9b9b0a)
- https://huggingface.co/api/models/google/pix2struct-large (retrieved 2026-11-10T06:29:27Z; SHA-256 81f8cdbb721f06c0102dd1b7418c114764d8d9777bf31cc69eb6c542eb9b9b0a)

---

## Plan-and-Act Actor 70B

Llama-3.3-70B-Instruct-based executor checkpoint from the Plan-and-Act web-agent framework that translates high-level plans into browser actions.

- Catalog URL: https://awesomecua.com/resources/url-8a284d122d7dcf23479d/
- Original source: https://huggingface.co/xTRam1/plan-and-act-actor-70b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, action-prediction, web-navigation
- Evidence checked: 2026-10-17T02:05:41Z
- ID: url:8a284d122d7dcf23479d

- Record JSON: https://awesomecua.com/resources/url-8a284d122d7dcf23479d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/xTRam1/plan-and-act-actor-70b

### Primary evidence

- https://huggingface.co/api/models/xTRam1/plan-and-act-actor-70b (retrieved 2026-10-17T02:05:41Z; SHA-256 a68db8fbf587c35e17526b0fbeb34649e6a03611e61d8be2f4cd36756e7356dd)
- https://huggingface.co/api/models/xTRam1/plan-and-act-actor-70b (retrieved 2026-10-17T02:05:41Z; SHA-256 a68db8fbf587c35e17526b0fbeb34649e6a03611e61d8be2f4cd36756e7356dd)

---

## Plan-and-Act Planner 70B

The planner component of Plan-and-Act, generating structured high-level plans that an executor turns into web actions.

- Catalog URL: https://awesomecua.com/resources/url-3932d69c6b6f9b2a7ba8/
- Original source: https://huggingface.co/xTRam1/plan-and-act-planner-70b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, long-horizon
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:3932d69c6b6f9b2a7ba8

### Limitations

The Hub manifest contains 17 safetensors shards and tokenizer/configuration files. Card metadata declares MIT and Llama-3.3-70B-Instruct as the base, but retains template comments asking the publisher to update those fields if needed. These are recorded as publisher declarations, without claiming they override upstream model terms.

- Record JSON: https://awesomecua.com/resources/url-3932d69c6b6f9b2a7ba8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md

- weights review: The model card declares MIT in its metadata header (license: mit), beside a template comment asking the publisher to update it if needed. It is recorded as the publisher's declaration and does not override the Llama-3.3-70B-Instruct base model terms.
  Sources: https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md

### Primary evidence

- https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 4ef2d84d2b5d9d2972907e6135ea49f1ef088beaf6ef6042dc7d8fb4297a9a3a)
- https://huggingface.co/api/models/xTRam1/plan-and-act-planner-70b (retrieved 2026-10-17T02:02:28Z; SHA-256 d2f757790ded81244e7c9b9e7350ec9fdc304609e387a95c7918db705bda535c)
- https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 feee31aa4d0801cb364578099a13e4f9cdcaa4eb5fbf4312b3fc3f8edd479a14)

---

## PlayJev-0.8B

A 0.8B checkpoint fine-tuned from Qwen3.5-0.8B-Base that picks a move in ten browser games from one rendered frame and an option list, trained by behaviour cloning and three DAgger rounds.

- Catalog URL: https://awesomecua.com/resources/url-b6a26f1b74d70fc783da/
- Original source: https://huggingface.co/OmniJev/PlayJev-0.8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: imitation-learning, action-prediction
- Evidence checked: 2026-11-10T06:29:29Z
- ID: url:b6a26f1b74d70fc783da

### Limitations

The repository holds safetensors weights, a chat template and a data/ folder of training records as JSON lines; the PlayJev code repository supplies the loader and the trainer. License Apache 2.0, the same as the base model.

- Record JSON: https://awesomecua.com/resources/url-b6a26f1b74d70fc783da/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OmniJev/PlayJev-0.8B

### Primary evidence

- https://huggingface.co/api/models/OmniJev/PlayJev-0.8B (retrieved 2026-11-10T06:29:29Z; SHA-256 3bdc05d508ad8ab07a435a9e080328d0dea8df1a475aa7a75ac4de99e2bc81e6)
- https://huggingface.co/api/models/OmniJev/PlayJev-0.8B (retrieved 2026-11-10T06:29:29Z; SHA-256 3bdc05d508ad8ab07a435a9e080328d0dea8df1a475aa7a75ac4de99e2bc81e6)

---

## POINTS-GUI

POINTS-GUI-G-8B GUI grounding model, trained from a POINTS-1.5 base without native grounding through a data pipeline that unifies coordinates, filters noise and adds hard cases.

- Catalog URL: https://awesomecua.com/resources/github-tencent-points-gui/
- Original source: https://github.com/Tencent/POINTS-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:tencent/points-gui

- Record JSON: https://awesomecua.com/resources/github-tencent-points-gui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Tencent/POINTS-GUI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 9f851237932688c15d261c016d51ff5ae80c43c5d0b4eaccac0b48d941118d80)

---

## POINTS-GUI-G 8B

A specialized interface-grounding checkpoint that returns normalized point coordinates for a requested element in a screenshot.

- Catalog URL: https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/
- Original source: https://huggingface.co/tencent/POINTS-GUI-G
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:cc931199bda2bdf1f5f7

### Limitations

Four safetensors shards and model code/configuration are public and ungated. The card declares license other without specifying a named weight license. This release is the grounding model; the same card says the end-to-end GUI agent model is still under development. No end-to-end agent capability is inferred from grounding scores.

- Record JSON: https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md

### Primary evidence

- https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 ac679d3cfdda8754e945d127935c9ed9030e6c9d0c9872f6224909ab2abe5c3f)
- https://huggingface.co/api/models/tencent/POINTS-GUI-G (retrieved 2026-10-17T02:03:33Z; SHA-256 3b97405c0a7f50298cf31a4933d31da356363c2ba5ecfaf73144cedeebc44db2)
- https://raw.githubusercontent.com/Tencent/POINTS-GUI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 9f851237932688c15d261c016d51ff5ae80c43c5d0b4eaccac0b48d941118d80)
- https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 ac679d3cfdda8754e945d127935c9ed9030e6c9d0c9872f6224909ab2abe5c3f)

---

## Qwen2-VL-2B-Instruct

An instruction-tuned vision-language model for image and video understanding. Its card describes potential mobile-device operation from visual input and text instructions.

- Catalog URL: https://awesomecua.com/resources/url-db97f9727111dc76662c/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-2B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, mobile-navigation
- Evidence checked: 2026-11-09T21:08:39Z
- ID: url:db97f9727111dc76662c

### Limitations

The repository lists safetensors weight shards, tokenizer files, and a processor configuration. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-db97f9727111dc76662c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen2-VL-2B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-2B-Instruct (retrieved 2026-11-09T21:08:39Z; SHA-256 30210b8a711395400d1eb602b14d8c48a432841e73d9b1b7e192497f7f35686e)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-2B-Instruct (retrieved 2026-11-09T21:08:39Z; SHA-256 30210b8a711395400d1eb602b14d8c48a432841e73d9b1b7e192497f7f35686e)

---

## Qwen2-VL-72B-Instruct

Qwen2-VL-72B-Instruct is a general vision-language model whose card describes operation of mobile devices from visual input and instructions and reports Android agent evaluations.

- Catalog URL: https://awesomecua.com/resources/url-70a567bbf58ab99d21ee/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: mobile-navigation, screen-understanding, evaluation
- Evidence checked: 2026-11-09T21:09:16Z
- ID: url:70a567bbf58ab99d21ee

### Limitations

The repository contains instruction-tuned model weights. The card reports type-match and exact-match results on the AITZ Android benchmark and names the Tongyi Qianwen license.

- Record JSON: https://awesomecua.com/resources/url-70a567bbf58ab99d21ee/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct (retrieved 2026-11-09T21:09:16Z; SHA-256 053523995be61c6a68eb28c6692d865efa277b4720d2db25cb3493c067f04e5b)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct (retrieved 2026-11-09T21:09:16Z; SHA-256 053523995be61c6a68eb28c6692d865efa277b4720d2db25cb3493c067f04e5b)

---

## Qwen2-VL-72B-Instruct-AWQ

Qwen2-VL-72B-Instruct-AWQ releases quantized weights for a visual instruction model. Its card describes integration with mobile devices for operation guided by images and text.

- Catalog URL: https://awesomecua.com/resources/url-1f488d7ef1c703f97a8a/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-AWQ
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: mobile-navigation, screen-understanding
- Evidence checked: 2026-11-09T19:56:02Z
- ID: url:1f488d7ef1c703f97a8a

### Limitations

The repository lists safetensors weight shards and a Tongyi Qianwen license. The card gives a Transformers loading example and reports vision benchmark and inference-speed results.

- Record JSON: https://awesomecua.com/resources/url-1f488d7ef1c703f97a8a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-AWQ

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-AWQ (retrieved 2026-11-09T19:56:02Z; SHA-256 a9c0013cb0a0e6ca022426ae0a400a9903d856c70012383cb720551224a9b0b0)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-AWQ (retrieved 2026-11-09T19:56:02Z; SHA-256 a9c0013cb0a0e6ca022426ae0a400a9903d856c70012383cb720551224a9b0b0)

---

## Qwen2-VL-72B-Instruct-GPTQ-Int4

A quantized Qwen2-VL vision-language checkpoint for image and video understanding. Its card also describes visual, instruction-guided mobile operation.

- Catalog URL: https://awesomecua.com/resources/url-272f5b74277ca7a8f1f5/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int4
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: mobile-navigation, screen-understanding
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:272f5b74277ca7a8f1f5

### Limitations

The repository contains quantized model weights and inference examples using Transformers and qwen-vl-utils. The card names the Tongyi Qianwen license.

- Record JSON: https://awesomecua.com/resources/url-272f5b74277ca7a8f1f5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int4

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int4 (retrieved 2026-11-09T21:08:46Z; SHA-256 5617dd574555a29c4257bef8fb76062f16896a6e1bda3fbc24eab411c1523c51)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int4 (retrieved 2026-11-09T21:08:46Z; SHA-256 5617dd574555a29c4257bef8fb76062f16896a6e1bda3fbc24eab411c1523c51)

---

## Qwen2-VL-72B-Instruct-GPTQ-Int8

A quantized 72B Qwen2-VL checkpoint for visual instruction following. Its model card describes using visual input and text instructions to operate mobile devices.

- Catalog URL: https://awesomecua.com/resources/url-1419f2835e78de2bc9a4/
- Original source: https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int8
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, mobile-navigation
- Evidence checked: 2026-11-09T21:08:35Z
- ID: url:1419f2835e78de2bc9a4

### Limitations

The repository lists model weight shards, tokenizer files and a quantization configuration. The card identifies the Tongyi Qianwen license.

- Record JSON: https://awesomecua.com/resources/url-1419f2835e78de2bc9a4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int8

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int8 (retrieved 2026-11-09T21:08:35Z; SHA-256 a106c3fc67d10c95481f4f473682176ecdbae80950f2c75909d6f34c4789024f)
- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-GPTQ-Int8 (retrieved 2026-11-09T21:08:35Z; SHA-256 a106c3fc67d10c95481f4f473682176ecdbae80950f2c75909d6f34c4789024f)

---

## Qwen2.5-VL-32B-Instruct

Qwen2.5-VL-32B-Instruct is a released vision-language checkpoint. Its card describes visual-agent computer and phone use, visual localization, and interface benchmark results.

- Catalog URL: https://awesomecua.com/resources/url-beafd78bf2ea84211e6d/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T21:09:44Z
- ID: url:beafd78bf2ea84211e6d

### Limitations

The repository contains model weight shards and tokenizer files. The card identifies this as the instruction-tuned 32B model and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-beafd78bf2ea84211e6d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen2.5-VL-32B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-32B-Instruct (retrieved 2026-11-09T21:09:44Z; SHA-256 106a480f727b6067a9d8eb16ac76774ff445b87c79b801a03733b684412b150c)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-32B-Instruct (retrieved 2026-11-09T21:09:44Z; SHA-256 106a480f727b6067a9d8eb16ac76774ff445b87c79b801a03733b684412b150c)

---

## Qwen2.5-VL-3B-Instruct-AWQ

Qwen2.5-VL-3B-Instruct-AWQ is an AWQ checkpoint of a vision-language model whose card describes tool-directed computer and phone use and visual localization.

- Catalog URL: https://awesomecua.com/resources/url-0ab0de943c5396cdf366/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-3B-Instruct-AWQ
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: mobile-navigation, grounding, tool-integration
- Evidence checked: 2026-11-09T21:09:41Z
- ID: url:0ab0de943c5396cdf366

### Limitations

The card provides a Transformers loading example and names Qwen/Qwen2.5-VL-3B-Instruct as its base model. It declares the qwen-research license.

- Record JSON: https://awesomecua.com/resources/url-0ab0de943c5396cdf366/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct-AWQ (retrieved 2026-11-09T21:09:41Z; SHA-256 3161c9d33a38e5098b00ad5762901eebb7335aab5585e1264f007d55b27ec2a4)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct-AWQ (retrieved 2026-11-09T21:09:41Z; SHA-256 3161c9d33a38e5098b00ad5762901eebb7335aab5585e1264f007d55b27ec2a4)

---

## Qwen2.5-VL-72B-Instruct-AWQ

This instruction-tuned Qwen2.5-VL checkpoint supports visual localization and tool-directed computer and phone use. The repository provides weights and inference examples.

- Catalog URL: https://awesomecua.com/resources/url-fe24586d646989d5c916/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct-AWQ
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform
- Topics: screen-understanding, grounding, mobile-navigation
- Evidence checked: 2026-11-09T21:10:08Z
- ID: url:fe24586d646989d5c916

### Limitations

The repository contains safetensors weight shards and processor and tokenizer files. The card shows loading through Transformers and names the Qwen license.

- Record JSON: https://awesomecua.com/resources/url-fe24586d646989d5c916/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct-AWQ

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-72B-Instruct-AWQ (retrieved 2026-11-09T21:10:08Z; SHA-256 508bf387b85d87e72b5ffd1cf26e4e6d9509c06a193079b6e247ee36e76e7980)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-72B-Instruct-AWQ (retrieved 2026-11-09T21:10:08Z; SHA-256 508bf387b85d87e72b5ffd1cf26e4e6d9509c06a193079b6e247ee36e76e7980)

---

## Qwen2.5-VL-7B-Instruct

Qwen2.5-VL-7B-Instruct releases vision-language weights whose card describes computer and phone use and reports results on screen grounding and mobile-agent benchmarks.

- Catalog URL: https://awesomecua.com/resources/url-557edb1d63e8fcfdee12/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, evaluation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:557edb1d63e8fcfdee12

### Limitations

The repository contains sharded safetensors weights and processor and tokenizer files. The card gives Transformers inference examples and declares the Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-557edb1d63e8fcfdee12/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct (retrieved 2026-11-09T06:16:33Z; SHA-256 59cd17c2cb9b93c463d1debbf33996f42dbfa2de60587a4dee3911ba581a38fe)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct (retrieved 2026-11-09T06:16:33Z; SHA-256 59cd17c2cb9b93c463d1debbf33996f42dbfa2de60587a4dee3911ba581a38fe)

---

## Qwen2.5-VL-7B-Instruct-AWQ

An AWQ release of the instruction-tuned 7B Qwen2.5-VL model. Its card describes interface-image understanding, visual localization, and computer and phone use.

- Catalog URL: https://awesomecua.com/resources/url-06c351d14bee24bc3f01/
- Original source: https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct-AWQ
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T19:56:41Z
- ID: url:06c351d14bee24bc3f01

### Limitations

The release includes model weights and a Transformers usage example. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-06c351d14bee24bc3f01/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct-AWQ

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct-AWQ (retrieved 2026-11-09T19:56:41Z; SHA-256 0bd4c33bb3b06ddd39d22c69a306df62b7925aa9b1c2c61aec7e83b62ddf0327)
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct-AWQ (retrieved 2026-11-09T19:56:41Z; SHA-256 0bd4c33bb3b06ddd39d22c69a306df62b7925aa9b1c2c61aec7e83b62ddf0327)

---

## Qwen3-8B-CK-Pro

Qwen3-8B-CK-Pro is the CK-Pro-8B agent foundation model from Cognitive Kernel-Pro, fine-tuned from Qwen3-8B on self-collected trajectories; the card reports 32.7% Pass@1 on the GAIA dev set.

- Catalog URL: https://awesomecua.com/resources/url-f06109ae04d4c3133f90/
- Original source: https://huggingface.co/CognitiveKernel/Qwen3-8B-CK-Pro
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:f06109ae04d4c3133f90

### Limitations

Safetensors weights in five shards with tokenizer files, base model Qwen/Qwen3-8B, served with transformers. Custom cognitive-kernel-pro license.

- Record JSON: https://awesomecua.com/resources/url-f06109ae04d4c3133f90/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/CognitiveKernel/Qwen3-8B-CK-Pro

### Primary evidence

- https://huggingface.co/api/models/CognitiveKernel/Qwen3-8B-CK-Pro (retrieved 2026-11-10T06:29:31Z; SHA-256 85a0352870fda6e1297d97e0c03fd2558cddaba69f02351cc31814b4c2f2c48e)
- https://huggingface.co/api/models/CognitiveKernel/Qwen3-8B-CK-Pro (retrieved 2026-11-10T06:29:31Z; SHA-256 85a0352870fda6e1297d97e0c03fd2558cddaba69f02351cc31814b4c2f2c48e)

---

## Qwen3-8B-FormFactory-GRPO-LoRA

Qwen3-8B-FormFactory-GRPO-LoRA is a browser form-filling adapter for Qwen3-8B, trained with supervised initialization and online GRPO using real browser execution.

- Catalog URL: https://awesomecua.com/resources/url-4a3799bd1b6db15afffe/
- Original source: https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning, automation
- Evidence checked: 2026-11-09T19:57:07Z
- ID: url:4a3799bd1b6db15afffe

### Limitations

The release includes a PEFT adapter and loading example for Qwen/Qwen3-8B. The card declares Apache-2.0 and reports validation and test rewards on 124 held-out FormFactory tasks.

- Record JSON: https://awesomecua.com/resources/url-4a3799bd1b6db15afffe/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA

### Primary evidence

- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA (retrieved 2026-11-09T19:57:07Z; SHA-256 2e35c05a777801f70a511aea7ca07e4581c108f79e04748554bf60af6508da06)
- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA (retrieved 2026-11-09T19:57:07Z; SHA-256 2e35c05a777801f70a511aea7ca07e4581c108f79e04748554bf60af6508da06)

---

## Qwen3-8B-FormFactory-SFT-LoRA

A Qwen3-8B LoRA adapter fine-tuned on 992 demonstrations for filling web forms in FormFactory, released with instructions for loading it through PEFT.

- Catalog URL: https://awesomecua.com/resources/url-994d4cf27b0931fb53e3/
- Original source: https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-11-09T19:57:37Z
- ID: url:994d4cf27b0931fb53e3

### Limitations

The repository contains adapter weights and configuration files. The card names Qwen/Qwen3-8B as the base model and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-994d4cf27b0931fb53e3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA

### Primary evidence

- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA (retrieved 2026-11-09T19:57:37Z; SHA-256 ebe47e5105423baceefe3a8333ab138044de981e0272c31ea39f08eb1e8b048f)
- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA (retrieved 2026-11-09T19:57:37Z; SHA-256 ebe47e5105423baceefe3a8333ab138044de981e0272c31ea39f08eb1e8b048f)

---

## Qwen3-VL-235B-A22B-Instruct

A Qwen3-VL vision-language checkpoint whose card describes visual-agent operation of PC and mobile GUIs, including element recognition and tool use.

- Catalog URL: https://awesomecua.com/resources/url-8f5ec99c2aad6c73fed7/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, grounding, mobile-navigation
- Evidence checked: 2026-11-09T21:10:03Z
- ID: url:8f5ec99c2aad6c73fed7

### Limitations

The card describes Dense and MoE editions in the model family and states an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-8f5ec99c2aad6c73fed7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Instruct (retrieved 2026-11-09T21:10:03Z; SHA-256 88534190ea474fa58972c60c80bc1b832c3d893929c1cc449767e2a8cbf86fe9)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Instruct (retrieved 2026-11-09T21:10:03Z; SHA-256 88534190ea474fa58972c60c80bc1b832c3d893929c1cc449767e2a8cbf86fe9)

---

## Qwen3-VL-235B-A22B-Thinking

A released Qwen3-VL vision-language checkpoint whose card describes PC and mobile GUI interaction, including recognizing interface elements, invoking tools, and completing tasks.

- Catalog URL: https://awesomecua.com/resources/url-b8702b4ca9ceac2ca3ee/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, android, ios, cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T19:56:49Z
- ID: url:b8702b4ca9ceac2ca3ee

### Limitations

The card provides a Transformers loading example and declares an Apache-2.0 license. The listed neighboring papers are separate publications.

- Record JSON: https://awesomecua.com/resources/url-b8702b4ca9ceac2ca3ee/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Thinking (retrieved 2026-11-09T19:56:49Z; SHA-256 41c314d48b73369382877fe3670622f7586769d5931389ea4ebf310d24c73e23)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Thinking (retrieved 2026-11-09T19:56:49Z; SHA-256 41c314d48b73369382877fe3670622f7586769d5931389ea4ebf310d24c73e23)

---

## Qwen3-VL-2B-Thinking

Qwen3-VL-2B-Thinking, the 2B reasoning edition of the Qwen3-VL vision-language weights, whose card describes visual-agent operation of PC and mobile GUIs, including element recognition and tool use.

- Catalog URL: https://awesomecua.com/resources/url-24013b35fccf6b504bc5/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-2B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-09T19:57:49Z
- ID: url:24013b35fccf6b504bc5

### Limitations

The card provides Transformers and ModelScope usage examples and lists Apache-2.0 as the license.

- Record JSON: https://awesomecua.com/resources/url-24013b35fccf6b504bc5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-2B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Thinking (retrieved 2026-11-09T19:57:49Z; SHA-256 f7a266334fe9b3b7cbf4eb02d77d286177253d64472882808ed1835f409b5dd8)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Thinking (retrieved 2026-11-09T19:57:49Z; SHA-256 f7a266334fe9b3b7cbf4eb02d77d286177253d64472882808ed1835f409b5dd8)

---

## Qwen3-VL-30B-A3B-Thinking

Qwen3-VL-30B-A3B-Thinking is a vision-language checkpoint whose card describes recognizing interface elements and using tools to operate PC and mobile GUIs.

- Catalog URL: https://awesomecua.com/resources/url-1b036956436123d87ff1/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T21:09:38Z
- ID: url:1b036956436123d87ff1

### Limitations

The release provides model weights and a Transformers inference example. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-1b036956436123d87ff1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-30B-A3B-Thinking (retrieved 2026-11-09T21:09:38Z; SHA-256 2bdda3d0c6cbd1f671dee441464b56fec6d5e4996adc265a153b7aadf3eac3dd)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-30B-A3B-Thinking (retrieved 2026-11-09T21:09:38Z; SHA-256 2bdda3d0c6cbd1f671dee441464b56fec6d5e4996adc265a153b7aadf3eac3dd)

---

## Qwen3-VL-32B-Thinking

Qwen3-VL-32B-Thinking is a vision-language checkpoint whose card describes recognizing interface elements and using tools to complete PC and mobile GUI tasks.

- Catalog URL: https://awesomecua.com/resources/url-ecf889aadea335aa5e25/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-32B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, cross-platform
- Topics: screen-understanding, grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T19:56:21Z
- ID: url:ecf889aadea335aa5e25

### Limitations

The repository lists sharded safetensors weights, tokenizer files and preprocessing configuration. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-ecf889aadea335aa5e25/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-32B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Thinking (retrieved 2026-11-09T19:56:21Z; SHA-256 329de228cd1f3af86a45214f1e13d9b6ba1c41f01bff2ab7113451c9da40e55a)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Thinking (retrieved 2026-11-09T19:56:21Z; SHA-256 329de228cd1f3af86a45214f1e13d9b6ba1c41f01bff2ab7113451c9da40e55a)

---

## Qwen3-VL-4B-Instruct

Qwen3-VL-4B-Instruct is a vision-language checkpoint whose card describes recognizing interface elements and using tools to operate PC and mobile GUIs.

- Catalog URL: https://awesomecua.com/resources/url-2c30792aed2821284db6/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T21:09:41Z
- ID: url:2c30792aed2821284db6

### Limitations

The release provides model weights and a Transformers inference example. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-2c30792aed2821284db6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Instruct (retrieved 2026-11-09T21:09:41Z; SHA-256 e7940d2d6534515e2b61779719927c459b1392e841c25aad41ece88a4361a109)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Instruct (retrieved 2026-11-09T21:09:41Z; SHA-256 e7940d2d6534515e2b61779719927c459b1392e841c25aad41ece88a4361a109)

---

## Qwen3-VL-4B-Thinking

A vision-language checkpoint whose card describes visual-agent operation of PC and mobile interfaces, including element recognition and tool use.

- Catalog URL: https://awesomecua.com/resources/url-b5690e43822ef84015c5/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-4B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T19:57:41Z
- ID: url:b5690e43822ef84015c5

### Limitations

The repository lists model weight shards, tokenizer and preprocessing files. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b5690e43822ef84015c5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-4B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Thinking (retrieved 2026-11-09T19:57:41Z; SHA-256 3f1439b5deb5ad3ddf9d6f1abbc7e38ed5b1cec8cf9ffe4207e739f3097bd281)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Thinking (retrieved 2026-11-09T19:57:41Z; SHA-256 3f1439b5deb5ad3ddf9d6f1abbc7e38ed5b1cec8cf9ffe4207e739f3097bd281)

---

## Qwen3-VL-8B-Instruct-MobileWorld-SFT

Qwen3-VL-8B-Instruct fine-tuned on the MobileWorld dataset as a semantic world model that describes in natural language how a mobile GUI screen changes after an action, for planning by mobile agents.

- Catalog URL: https://awesomecua.com/resources/url-e58270c90ea4fa83cfb4/
- Original source: https://huggingface.co/jacklishufan/Qwen3-VL-8B-Instruct-MobileWorld-SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, mobile-navigation, planning
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:e58270c90ea4fa83cfb4

### Limitations

The repository holds four safetensors shards with Qwen3-VL configuration files and no model card. The paper reports fine-tuning for 2 epochs on 8 A6000 GPUs and using the model as the world model of an M3A-based agent on AndroidWorld. The MobileWorldBench repository provides QA and generation evaluation scripts.

- Record JSON: https://awesomecua.com/resources/url-e58270c90ea4fa83cfb4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/jacklishufan/Qwen3-VL-8B-Instruct-MobileWorld-SFT (retrieved 2026-11-10T03:01:14Z; SHA-256 769d2da136a6762c04edc17f83e242e7a30c49c5466b2e0f578f3f685341cf0e)
- https://huggingface.co/api/models/jacklishufan/Qwen3-VL-8B-Instruct-MobileWorld-SFT (retrieved 2026-11-10T03:01:14Z; SHA-256 769d2da136a6762c04edc17f83e242e7a30c49c5466b2e0f578f3f685341cf0e)

---

## Qwen3-VL-8B-Thinking

A general vision-language weight release whose documented visual-agent capability includes recognizing PC and mobile GUI elements and invoking tools to complete tasks.

- Catalog URL: https://awesomecua.com/resources/url-d1305a893a47ac03d0de/
- Original source: https://huggingface.co/Qwen/Qwen3-VL-8B-Thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: screen-understanding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T05:05:19Z
- ID: url:d1305a893a47ac03d0de

### Limitations

The card provides Transformers and ModelScope usage examples and declares Apache-2.0. Its GUI capability is one part of a broader multimodal release.

- Record JSON: https://awesomecua.com/resources/url-d1305a893a47ac03d0de/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-8B-Thinking

### Primary evidence

- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Thinking (retrieved 2026-11-09T05:05:19Z; SHA-256 2aec0c847702f66e9297839816bd758a3e7c349f1541ad8d9386a69244a0a9df)
- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Thinking (retrieved 2026-11-09T05:05:19Z; SHA-256 2aec0c847702f66e9297839816bd758a3e7c349f1541ad8d9386a69244a0a9df)

---

## Qwen3.5-4B-Browser-Agent-SFT-FP8

An FP8 Qwen3.5-4B checkpoint fine-tuned on browser-agent trajectories with structured actions. Its card provides vLLM serving settings and reports BrowseWebApp-Bench v2 results.

- Catalog URL: https://awesomecua.com/resources/url-6eda678ca03ea2b10d2d/
- Original source: https://huggingface.co/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, action-prediction, efficiency
- Evidence checked: 2026-11-09T19:57:41Z
- ID: url:6eda678ca03ea2b10d2d

### Limitations

The release contains merged, post-training FP8 model weights. The card says it uses Qwen/Qwen3.5-4B as its base, LoRA supervised fine-tuning and 3.3k successful executor trajectories; it declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-6eda678ca03ea2b10d2d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8

### Primary evidence

- https://huggingface.co/api/models/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8 (retrieved 2026-11-09T19:57:41Z; SHA-256 ce1d91476215c5367fb4f584a2c0712cb4df7363782e0629a223a9f1a38a00b7)
- https://huggingface.co/api/models/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8 (retrieved 2026-11-09T19:57:41Z; SHA-256 ce1d91476215c5367fb4f584a2c0712cb4df7363782e0629a223a9f1a38a00b7)

---

## Rex-Omni

The 3B-parameter Rex-Omni checkpoint, fine-tuned from Qwen2.5-VL-3B-Instruct, that casts detection, pointing, OCR, keypoints and GUI grounding as next-point prediction; it loads with transformers or vLLM.

- Catalog URL: https://awesomecua.com/resources/url-37880875f816f46f6dfe/
- Original source: https://huggingface.co/IDEA-Research/Rex-Omni
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:37880875f816f46f6dfe

### Limitations

Safetensors weights in two shards with the Qwen2.5-VL processor and tokenizer files; inference uses the rex_omni wrapper from the GitHub repository. Released under the IDEA License 1.0 on top of the Qwen research license.

- Record JSON: https://awesomecua.com/resources/url-37880875f816f46f6dfe/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/IDEA-Research/Rex-Omni

### Primary evidence

- https://huggingface.co/api/models/IDEA-Research/Rex-Omni (retrieved 2026-11-10T06:29:24Z; SHA-256 d175cf6a10743db81c45f6b4ca4cf71539fdfa2232cbf310e1e5a7e613fc76a5)
- https://huggingface.co/api/models/IDEA-Research/Rex-Omni (retrieved 2026-11-10T06:29:24Z; SHA-256 d175cf6a10743db81c45f6b4ca4cf71539fdfa2232cbf310e1e5a7e613fc76a5)

---

## S1-Accurate-LoRA

A LoRA adapter for a desktop agent's decision model uses window screenshots to select an operation and target element from candidate actions when a faster model is uncertain.

- Catalog URL: https://awesomecua.com/resources/url-d34be9d27efef6c1b37a/
- Original source: https://huggingface.co/elidot007/S1-Accurate-LoRA
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: action-prediction, grounding, screen-understanding, state-tracking
- Evidence checked: 2026-11-09T19:58:08Z
- ID: url:d34be9d27efef6c1b37a

### Limitations

The card provides instructions to merge the adapter with OneJev-4B and serve it through qev. It reports evaluation on desktop, browser and mobile test sets and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-d34be9d27efef6c1b37a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/elidot007/S1-Accurate-LoRA

### Primary evidence

- https://huggingface.co/api/models/elidot007/S1-Accurate-LoRA (retrieved 2026-11-09T19:58:08Z; SHA-256 880e1ec62497543e4a985c7dd07fc4522fd312e10b613bddfecef1ec8efc8030)
- https://huggingface.co/api/models/elidot007/S1-Accurate-LoRA (retrieved 2026-11-09T19:58:08Z; SHA-256 880e1ec62497543e4a985c7dd07fc4522fd312e10b613bddfecef1ec8efc8030)

---

## S1-Fast

S1-Fast predicts desktop actions, target elements and step status from a Windows UI Automation snapshot and visual tokens in one encoder pass.

- Catalog URL: https://awesomecua.com/resources/url-51fd7f79dff766278d83/
- Original source: https://huggingface.co/elidot007/S1-Fast
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: action-prediction, grounding, efficiency, state-tracking
- Evidence checked: 2026-11-09T19:56:15Z
- ID: url:51fd7f79dff766278d83

### Limitations

The release includes model weights, configuration, tokenizer, calibration and step-gate files. It was initialized from mmBERT-base; the optional SigLIP2 image tower is separate. The card declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-51fd7f79dff766278d83/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/elidot007/S1-Fast

### Primary evidence

- https://huggingface.co/api/models/elidot007/S1-Fast (retrieved 2026-11-09T19:56:15Z; SHA-256 c8a27232ad121fcc7dda918795fca6e17d7b2321e3f9dd041c366259ecfddfac)
- https://huggingface.co/api/models/elidot007/S1-Fast (retrieved 2026-11-09T19:56:15Z; SHA-256 c8a27232ad121fcc7dda918795fca6e17d7b2321e3f9dd041c366259ecfddfac)

---

## Salesforce/GTA1-32B

A 32B GUI grounding checkpoint trained with GRPO to produce screen actions from tasks and screenshots, with reported results on grounding and desktop agent benchmarks.

- Catalog URL: https://awesomecua.com/resources/url-5288515eb50aef1e84a2/
- Original source: https://huggingface.co/Salesforce/GTA1-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, reinforcement-learning, action-prediction, evaluation
- Evidence checked: 2026-11-09T05:05:01Z
- ID: url:5288515eb50aef1e84a2

### Limitations

The repository lists weight shards and custom model and processor code. The card includes inference and serving examples and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-5288515eb50aef1e84a2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/Salesforce/GTA1-32B

### Primary evidence

- https://huggingface.co/api/models/Salesforce/GTA1-32B (retrieved 2026-11-09T05:05:01Z; SHA-256 54c85b5f2d788df434d7d7a9201a11261a97c81a8059a3e9f6ebed467cd77c12)
- https://huggingface.co/api/models/Salesforce/GTA1-32B (retrieved 2026-11-09T05:05:01Z; SHA-256 54c85b5f2d788df434d7d7a9201a11261a97c81a8059a3e9f6ebed467cd77c12)

---

## ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld

GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:55:21Z
- ID: url:77c708f5cff2d4c95e90

### Limitations

Hub API at revision f877281f lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 66.5% on OSWorld as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card gives no parameter size label. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md (retrieved 2026-10-18T15:55:21Z; SHA-256 782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld/revision/f877281fc6f326fd43271163ea21b028db8eaa22 (retrieved 2026-10-18T15:54:54Z; SHA-256 c06e2f6cb5ce247bf67db276869d4409225968201d0c4565b2ceeef7c19b66a3)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:54:54Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md (retrieved 2026-10-18T15:55:21Z; SHA-256 782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f)

---

## ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard

GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL from a released SFT start point for ScienceBoard scientific-software tasks.

- Catalog URL: https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-18T15:56:10Z
- ID: url:4bcb6a451d6f4d25343c

### Limitations

Hub API at revision 3b089b66 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 49.4% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card states no parameter size, so no label is recorded. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md (retrieved 2026-10-18T15:56:10Z; SHA-256 e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard/revision/3b089b66c9d0ffd3e56477fce32b31ab5ad56361 (retrieved 2026-10-18T15:55:27Z; SHA-256 ce5f0216e60abd678633ad918497e4dd6d3d6332bdc0e196ef9b1627c1466c78)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:55:27Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md (retrieved 2026-10-18T15:56:10Z; SHA-256 e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46)

---

## ScaleCUA (THUDM) Qwen3-VL-8B OSWorld

Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after a released SFT start point.

- Catalog URL: https://awesomecua.com/resources/url-1807bdb33fc352a97240/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:43:12Z
- ID: url:1807bdb33fc352a97240

### Limitations

Hub API at revision d27cdab2 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 67.7% on OSWorld; this is a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-1807bdb33fc352a97240/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md (retrieved 2026-10-18T15:43:12Z; SHA-256 7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld/revision/d27cdab2d500f323af27c0c9fdcf123f40c83d42 (retrieved 2026-10-18T15:42:53Z; SHA-256 39802e7890517c83ddd53b16c3e1196c1cde03d85803d64fa8e49ce48c659838)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:41:39Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md (retrieved 2026-10-18T15:43:12Z; SHA-256 7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546)

---

## ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard

Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-73c169c32b5765688376/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-18T15:49:59Z
- ID: url:73c169c32b5765688376

### Limitations

Hub API at revision 13947f05 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 51.9% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-73c169c32b5765688376/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md (retrieved 2026-10-18T15:49:59Z; SHA-256 7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard/revision/13947f05bff0742e09784310b6c68ae39bff67e5 (retrieved 2026-10-18T15:49:22Z; SHA-256 df0d6a684c4d7ae8657744b285a5e8a30f31fe7f369b771b52f3a15f53cf0b1e)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:49:22Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md (retrieved 2026-10-18T15:49:59Z; SHA-256 7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970)

---

## ScaleCUA (THUDM) Qwen3.5-9B OSWorld

Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-0919e695670c5740a123/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:41:57Z
- ID: url:0919e695670c5740a123

### Limitations

Hub API at revision 2ad1314b lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; access is open. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 68.7% on OSWorld; this is a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-0919e695670c5740a123/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md (retrieved 2026-10-18T15:41:57Z; SHA-256 8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld/revision/2ad1314b6076591e35f299b2efed214e2454deab (retrieved 2026-10-18T15:41:39Z; SHA-256 38f67b1b143810cd843f99f047fd3310b26b0084948a8d6b3dc31999ce20ab74)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:41:39Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md (retrieved 2026-10-18T15:41:57Z; SHA-256 8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44)

---

## ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard

Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-19T06:02:06Z
- ID: url:d2d07c09a1c92e5f4a43

### Limitations

Hub API at revision ca2bc686 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 54.0% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md

### Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard/revision/ca2bc686c6d428fde67b114e002dd69e4eeb59b5 (retrieved 2026-10-19T06:02:06Z; SHA-256 1bfdc228a5e9b8b0b9bc676d77f11b18ae866c936316496ab8793b94dbc53c90)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/config.json (retrieved 2026-10-19T06:02:06Z; SHA-256 19a077d2064ea10c90fb9936730cc621134b53e89c406187c2d6b6a2983739bb)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d)

---

## SCOPE-SFT-9B

A Qwen3.5-9B computer-use checkpoint trained on desktop task demonstrations and safety response trajectories, with reported task and attack-avoidance evaluations.

- Catalog URL: https://awesomecua.com/resources/url-389202404e2653f59838/
- Original source: https://huggingface.co/k4ng/SCOPE-SFT-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: safety-security, imitation-learning, automation
- Evidence checked: 2026-11-09T19:57:37Z
- ID: url:389202404e2653f59838

### Limitations

The release contains model weights and gives a vLLM serving command. The card identifies SATraj-OS as its training data and names OSWorld and OS-BLIND as evaluation benchmarks.

- Record JSON: https://awesomecua.com/resources/url-389202404e2653f59838/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/k4ng/SCOPE-SFT-9B

### Primary evidence

- https://huggingface.co/api/models/k4ng/SCOPE-SFT-9B (retrieved 2026-11-09T19:57:37Z; SHA-256 482eef9011c68bb222e6d73f9fe671622e06ded9f54211de94421898875eef46)
- https://huggingface.co/api/models/k4ng/SCOPE-SFT-9B (retrieved 2026-11-09T19:57:37Z; SHA-256 482eef9011c68bb222e6d73f9fe671622e06ded9f54211de94421898875eef46)

---

## ScreenAgent

ScreenAgent-2312 weights in SAT format, a CogAgent-based vision-language model that drives the ScreenAgent environment, issuing mouse and keyboard actions over VNC in plan, act and reflect stages.

- Catalog URL: https://awesomecua.com/resources/url-92b5cb08491c09243b72/
- Original source: https://huggingface.co/niurl/ScreenAgent
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: action-prediction, planning, self-reflection
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:92b5cb08491c09243b72

### Limitations

The repository holds one archive, ScreenAgent-2312.zip, which is unzipped into train/saved_models and served with cogagent_model_worker.py from the ScreenAgent GitHub repository. The card declares MIT; the ScreenAgent README states that model weights follow the CogVLM License.

- Record JSON: https://awesomecua.com/resources/url-92b5cb08491c09243b72/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/niurl/ScreenAgent

### Primary evidence

- https://huggingface.co/api/models/niurl/ScreenAgent (retrieved 2026-11-10T03:01:12Z; SHA-256 98809e2dc72a02d035bfce8dd3a60e3fb223cfc15880e3afb155a14c79886b48)
- https://huggingface.co/api/models/niurl/ScreenAgent (retrieved 2026-11-10T03:01:12Z; SHA-256 98809e2dc72a02d035bfce8dd3a60e3fb223cfc15880e3afb155a14c79886b48)

---

## SE-GUI-7B

A 7B GUI grounding model built on Qwen2.5-VL and trained with GRPO, a dense point reward and attention-guided self-evolutionary fine-tuning on 3,018 curated seed samples.

- Catalog URL: https://awesomecua.com/resources/url-00f5bfd8c7991012a183/
- Original source: https://huggingface.co/XinBB/SE-GUI-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:00f5bfd8c7991012a183

### Limitations

The repository holds four safetensors shards of a Qwen2.5-VL checkpoint with tokenizer and processor configs; the card declares Apache-2.0. Training, attention-generation and ScreenSpot evaluation code live in the SE-GUI GitHub repository, which also links the SE-GUI-3k seed data.

- Record JSON: https://awesomecua.com/resources/url-00f5bfd8c7991012a183/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/XinBB/SE-GUI-7B

### Primary evidence

- https://huggingface.co/api/models/XinBB/SE-GUI-7B (retrieved 2026-11-10T03:01:01Z; SHA-256 aa8470f7692524a98de9aef2334d67ced0f79e23385ad47a0ab7a7eeb6adc097)
- https://huggingface.co/api/models/XinBB/SE-GUI-7B (retrieved 2026-11-10T03:01:01Z; SHA-256 aa8470f7692524a98de9aef2334d67ced0f79e23385ad47a0ab7a7eeb6adc097)

---

## SEAgent-1.0-7B

Computer-use agent checkpoint from SEAgent, built on UI-TARS-7B-DPO and trained by experiential learning on self-generated OSWorld software tasks; the paper reports 34.5% success on five novel applications.

- Catalog URL: https://awesomecua.com/resources/url-62688de46b172fb0c746/
- Original source: https://huggingface.co/Zery/SEAgent-1.0-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: reinforcement-learning, imitation-learning
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:62688de46b172fb0c746

### Limitations

Four safetensors shards; the card declares Apache-2.0. The SEAgent repository serves it with vLLM under the ui-tars-1.0-7b name for OSWorld runs, and also releases a World State Model checkpoint and RL and SFT training scripts.

- Record JSON: https://awesomecua.com/resources/url-62688de46b172fb0c746/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Zery/SEAgent-1.0-7B

### Primary evidence

- https://huggingface.co/api/models/Zery/SEAgent-1.0-7B (retrieved 2026-11-10T03:01:04Z; SHA-256 59c225dab7c743a7b4ecf8f2c3201b3fd82bcc693139673fee4cc5772963dd50)
- https://huggingface.co/api/models/Zery/SEAgent-1.0-7B (retrieved 2026-11-10T03:01:04Z; SHA-256 59c225dab7c743a7b4ecf8f2c3201b3fd82bcc693139673fee4cc5772963dd50)

---

## SeeClick-aitw

SeeClick visual GUI agent checkpoint fine-tuned on Android in the Wild (AITW) episodes and scored on the AITW test set by action matching with the SeeClick agent-task scripts.

- Catalog URL: https://awesomecua.com/resources/url-a4b101913db4b3673a2b/
- Original source: https://huggingface.co/cckevinn/SeeClick-aitw
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:a4b101913db4b3673a2b

### Limitations

The repository holds ten safetensors shards with Qwen-VL custom code files and has no model card. The SeeClick guide fine-tunes SeeClick-pretrain with LoRA on AITW sft data; evaluation loads Qwen-VL-Chat for the tokenizer and config.

- Record JSON: https://awesomecua.com/resources/url-a4b101913db4b3673a2b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/cckevinn/SeeClick-aitw (retrieved 2026-11-10T03:01:13Z; SHA-256 91cf5b8fae8ad8d83cb55abfb75c819631d8d95aad5b1a87f12bd51991233a26)
- https://huggingface.co/api/models/cckevinn/SeeClick-aitw (retrieved 2026-11-10T03:01:13Z; SHA-256 91cf5b8fae8ad8d83cb55abfb75c819631d8d95aad5b1a87f12bd51991233a26)

---

## Seg2Click Qwen2.5-VL 3B

Seg2Click checkpoint based on Qwen2.5-VL-3B with a custom action-mask decoder.

- Catalog URL: https://awesomecua.com/resources/url-23ad240757185c6f7eac/
- Original source: https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:23ad240757185c6f7eac

### Limitations

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline. The card names the Qwen Research license, unlike the Apache-2.0 declarations on the Qwen3.5 variants.

- Record JSON: https://awesomecua.com/resources/url-23ad240757185c6f7eac/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md

### Primary evidence

- https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 399895cd711d703ff4e016417ca14d13b76988c5625ff120e7083991eb0bd8f2)
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen2.5-VL-3B (retrieved 2026-10-17T01:49:48Z; SHA-256 c580cb5bd811285944337c4ebb461fa498bba09e6082b70e120ceb83e302fcce)
- https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 399895cd711d703ff4e016417ca14d13b76988c5625ff120e7083991eb0bd8f2)

---

## Seg2Click Qwen3.5 0.8B

Compact Seg2Click checkpoint with a merged Qwen3.5 backbone and an action-mask decoder.

- Catalog URL: https://awesomecua.com/resources/url-7405463ba56f9a41e79a/
- Original source: https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:7405463ba56f9a41e79a

### Limitations

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- Record JSON: https://awesomecua.com/resources/url-7405463ba56f9a41e79a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md

### Primary evidence

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 8130a68ede5391bd158ce2cc49c36c5f8c8ebf22b897db6f68e27babbbc66965)
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-0.8B (retrieved 2026-10-17T01:49:48Z; SHA-256 6bd2608de2715e3d76a0c9e9b8fd7540372bfd2f9864db0445d8e548c9afb518)
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 8130a68ede5391bd158ce2cc49c36c5f8c8ebf22b897db6f68e27babbbc66965)

---

## Seg2Click Qwen3.5 2B

Seg2Click checkpoint using a 2B Qwen3.5 backbone to predict a mask and select an interface click.

- Catalog URL: https://awesomecua.com/resources/url-fec1c5aa8fd93cb78923/
- Original source: https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:fec1c5aa8fd93cb78923

### Limitations

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- Record JSON: https://awesomecua.com/resources/url-fec1c5aa8fd93cb78923/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md

### Primary evidence

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 08d14b9dc3010365e543cbb6707b67c5d792118451bbc2d0b70f1f0280cb20e1)
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-2B (retrieved 2026-10-17T01:49:48Z; SHA-256 7b3242c3943537b6a26d8650a78c45044dce06a031ca2ce8bc67d5e482a332ce)
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 08d14b9dc3010365e543cbb6707b67c5d792118451bbc2d0b70f1f0280cb20e1)

---

## Seg2Click Qwen3.5 4B

Seg2Click checkpoint pairing a 4B Qwen3.5 backbone with pixel-level action-mask prediction.

- Catalog URL: https://awesomecua.com/resources/url-29588aa5651b5839c045/
- Original source: https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:29588aa5651b5839c045

### Limitations

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- Record JSON: https://awesomecua.com/resources/url-29588aa5651b5839c045/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md

### Primary evidence

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 98409c81aeba5c9261075ab720204842465041f7df3aee833b28a8e5d4347c56)
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-4B (retrieved 2026-10-17T01:49:48Z; SHA-256 8c94e2115879f474e122cffafe4d14a4e898d832fe094d7f0fffcdba4a14f9d9)
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 98409c81aeba5c9261075ab720204842465041f7df3aee833b28a8e5d4347c56)

---

## Seg2Click Qwen3.5 9B

Seg2Click checkpoint pairing a 9B Qwen3.5 backbone with a decoder for valid GUI click regions.

- Catalog URL: https://awesomecua.com/resources/url-826f3753905c5c43bf46/
- Original source: https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:826f3753905c5c43bf46

### Limitations

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- Record JSON: https://awesomecua.com/resources/url-826f3753905c5c43bf46/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md

### Primary evidence

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 feeb30bda7f86e10d87bdc1b0148d0632aba6df1676931a3d6c65cbdf197df3e)
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-9B (retrieved 2026-10-17T01:49:48Z; SHA-256 f215590b7a7b510085f7f99a8c236816604d4c11a8f5ae544b4ee75771dd4f82)
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 feeb30bda7f86e10d87bdc1b0148d0632aba6df1676931a3d6c65cbdf197df3e)

---

## sharryXR/asil-qwen35-2b-sft

An ASIL Qwen3.5-2B SFT checkpoint released for research on structured application state and semantic actions, with loadable model and tokenizer files.

- Catalog URL: https://awesomecua.com/resources/url-d59976834d3d0d3a1809/
- Original source: https://huggingface.co/sharryXR/asil-qwen35-2b-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: action-prediction, tool-integration
- Evidence checked: 2026-11-09T19:57:06Z
- ID: url:d59976834d3d0d3a1809

### Limitations

The card names Qwen/Qwen3.5-2B as the base model and reports 2,330 training and 594 validation rows. The repository includes model weights, configuration, tokenizer files, checksums, and checkpoint metadata. The declared license is Apache 2.0.

- Record JSON: https://awesomecua.com/resources/url-d59976834d3d0d3a1809/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-2b-sft

### Primary evidence

- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-sft (retrieved 2026-11-09T19:57:06Z; SHA-256 02789997790d246eda7199e8dfd13a9c626805a94db4bf4ebc2bbd31a20025f9)
- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-sft (retrieved 2026-11-09T19:57:06Z; SHA-256 02789997790d246eda7199e8dfd13a9c626805a94db4bf4ebc2bbd31a20025f9)

---

## ShowUI-Narrator

A released 2B model for narrating user actions in GUI screenshots and video, with a pipeline that detects the cursor and processes cropped frames.

- Catalog URL: https://awesomecua.com/resources/url-6b9389a144cbe70c894d/
- Original source: https://huggingface.co/FRank62Wu/ShowUI-Narrator
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, video, action-prediction
- Evidence checked: 2026-11-09T06:16:32Z
- ID: url:6b9389a144cbe70c894d

### Limitations

The card provides model and processor loading examples, screenshot and video processing code, and a separate link to a cursor detector checkpoint. It lists Qwen/Qwen2-VL-2B-Instruct and showlab/ShowUI-2B as base models and declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-6b9389a144cbe70c894d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/FRank62Wu/ShowUI-Narrator

### Primary evidence

- https://huggingface.co/api/models/FRank62Wu/ShowUI-Narrator (retrieved 2026-11-09T06:16:32Z; SHA-256 809581664699bbb638837634c51d78b69be88cc5b74aad6b0824bfcdd66a3eb8)
- https://huggingface.co/api/models/FRank62Wu/ShowUI-Narrator (retrieved 2026-11-09T06:16:32Z; SHA-256 809581664699bbb638837634c51d78b69be88cc5b74aad6b0824bfcdd66a3eb8)

---

## SmolVLM2-2.2B-Instruct-Agentic-GUI

SmolVLM2-2.2B-Instruct fine-tuned in two phases on the aguvis-stage-1 and aguvis-stage-2 datasets to locate screen elements and emit GUI actions as function calls. The authors report 61% on ScreenSpot-v2.

- Catalog URL: https://awesomecua.com/resources/url-915e40f18b217ac63fc6/
- Original source: https://huggingface.co/smolagents/SmolVLM2-2.2B-Instruct-Agentic-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:915e40f18b217ac63fc6

### Limitations

The repository holds a single safetensors checkpoint trained with SFT using TRL 0.18.0 and Transformers 4.54.1. The Smol2Operator README documents the unified action space, data processing tools and training phases; the card's quick-start example is a text-only pipeline.

- Record JSON: https://awesomecua.com/resources/url-915e40f18b217ac63fc6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/smolagents/SmolVLM2-2.2B-Instruct-Agentic-GUI (retrieved 2026-11-10T03:01:12Z; SHA-256 c10e75da9fc1026e620be1eb6bffcdf8c8eb6f310e75d9c76c62cbfb7e95e490)
- https://huggingface.co/api/models/smolagents/SmolVLM2-2.2B-Instruct-Agentic-GUI (retrieved 2026-11-10T03:01:12Z; SHA-256 c10e75da9fc1026e620be1eb6bffcdf8c8eb6f310e75d9c76c62cbfb7e95e490)

---

## SpiritSight-Agent-26B

A 26B vision-based checkpoint for GUI navigation across interface platforms. The release includes model weights and an inference script built around an InternVL2 base model.

- Catalog URL: https://awesomecua.com/resources/url-55be07e942393d43132f/
- Original source: https://huggingface.co/SenseLLM/SpiritSight-Agent-26B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: mobile-navigation, grounding, screen-understanding
- Evidence checked: 2026-11-09T05:04:59Z
- ID: url:55be07e942393d43132f

### Limitations

The repository lists sharded checkpoint files, model and tokenizer code, requirements, and infer_SSAgent-26B.py. The card names InternVL2-26B as the base model and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-55be07e942393d43132f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-26B

### Primary evidence

- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-26B (retrieved 2026-11-09T05:04:59Z; SHA-256 ddd7f759b411f95e5272e2d0d0ecb9aaf3436506145e6dfdd874c13cca4e646b)
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-26B (retrieved 2026-11-09T05:04:59Z; SHA-256 ddd7f759b411f95e5272e2d0d0ecb9aaf3436506145e6dfdd874c13cca4e646b)

---

## SpiritSight-Agent-2B

A 2B vision-based GUI agent checkpoint for interface navigation across GUI platforms, released with an inference script and base-model information.

- Catalog URL: https://awesomecua.com/resources/url-37570eed422d326bfa5a/
- Original source: https://huggingface.co/SenseLLM/SpiritSight-Agent-2B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: screen-understanding, grounding, action-prediction
- Evidence checked: 2026-11-09T05:05:19Z
- ID: url:37570eed422d326bfa5a

### Limitations

The card names OpenGVLab/InternVL2-2B as the base model and provides a requirements file and inference command. It declares Apache-2.0 in card metadata and lists the checkpoint under an InternVL license link.

- Record JSON: https://awesomecua.com/resources/url-37570eed422d326bfa5a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-2B

### Primary evidence

- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-2B (retrieved 2026-11-09T05:05:19Z; SHA-256 bb228dcc21284ec9cfad3bcfbd7722d05515717cc3358c263a348d8de7468e88)
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-2B (retrieved 2026-11-09T05:05:19Z; SHA-256 bb228dcc21284ec9cfad3bcfbd7722d05515717cc3358c263a348d8de7468e88)

---

## STEVE-R1-7B-SFT

STEVE-R1-7B-SFT is a released computer-use checkpoint trained with step-verified data for desktop agent tasks and evaluated on Windows and Ubuntu environments.

- Catalog URL: https://awesomecua.com/resources/url-666844c28be1138b0e37/
- Original source: https://huggingface.co/Fanbin/STEVE-R1-7B-SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: action-prediction, imitation-learning, interaction-history
- Evidence checked: 2026-11-09T05:05:07Z
- ID: url:666844c28be1138b0e37

### Limitations

The repository lists sharded model weights and tokenizer files. The card declares an Apache-2.0 license and links to evaluation trajectories.

- Record JSON: https://awesomecua.com/resources/url-666844c28be1138b0e37/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Fanbin/STEVE-R1-7B-SFT

### Primary evidence

- https://huggingface.co/api/models/Fanbin/STEVE-R1-7B-SFT (retrieved 2026-11-09T05:05:07Z; SHA-256 8656133cd96812a3e238db1209af076b4af6f94ae92f831ef2c4671d3d98bb27)
- https://huggingface.co/api/models/Fanbin/STEVE-R1-7B-SFT (retrieved 2026-11-09T05:05:07Z; SHA-256 8656133cd96812a3e238db1209af076b4af6f94ae92f831ef2c4671d3d98bb27)

---

## THUDM/cogagent-chat-hf

A CogAgent chat checkpoint for interpreting GUI screenshots and proposing plans, next actions, and coordinates. The card describes use with web, desktop, and mobile interfaces.

- Catalog URL: https://awesomecua.com/resources/url-5726382dc813f040f829/
- Original source: https://huggingface.co/THUDM/cogagent-chat-hf
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: screen-understanding, grounding, action-prediction, planning
- Evidence checked: 2026-11-09T19:58:09Z
- ID: url:5726382dc813f040f829

### Limitations

The repository contains safetensors weight shards and model code. The card says model weights are free for academic research and commercial use requires registration under a model license.

- Record JSON: https://awesomecua.com/resources/url-5726382dc813f040f829/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/THUDM/cogagent-chat-hf

### Primary evidence

- https://huggingface.co/api/models/THUDM/cogagent-chat-hf (retrieved 2026-11-09T19:58:09Z; SHA-256 cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b)
- https://huggingface.co/api/models/THUDM/cogagent-chat-hf (retrieved 2026-11-09T19:58:09Z; SHA-256 cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b)
- https://huggingface.co/api/models/THUDM/cogagent-chat-hf (retrieved 2026-11-09T20:03:14Z; SHA-256 cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b)
- https://huggingface.co/api/models/zai-org/cogagent-chat-hf (retrieved 2026-11-09T20:03:14Z; SHA-256 cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b)

---

## TianXi_Action_Grounding_7B

A 7B GUI action-grounding model from the SEA computer-use agent work, released as Qwen2_5_VL safetensors weights; its GitHub repository runs it on ScreenSpot-Pro across instruction styles and languages.

- Catalog URL: https://awesomecua.com/resources/url-f644200c18bea88da7b3/
- Original source: https://huggingface.co/tangliang/TianXi_Action_Grounding_7B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:f644200c18bea88da7b3

### Limitations

The Hugging Face repository holds four safetensors shards with a Qwen2_5_VLForConditionalGeneration config and no model card. The GitHub repository provides run_inference.py, adapted from ScreenSpot-Pro-GUI-Grounding, which logs results to JSON, under a GPL license.

- Record JSON: https://awesomecua.com/resources/url-f644200c18bea88da7b3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/tangliang/TianXi_Action_Grounding_7B (retrieved 2026-11-10T03:01:15Z; SHA-256 80e5b2de84cca20ba222eef0bb60afb5c3274c3dafb4a049201f5f2d531b99b5)
- https://huggingface.co/api/models/tangliang/TianXi_Action_Grounding_7B (retrieved 2026-11-10T03:01:15Z; SHA-256 80e5b2de84cca20ba222eef0bb60afb5c3274c3dafb4a049201f5f2d531b99b5)

---

## UGround V1 7B

UGround-V1 checkpoint fine-tuned from Qwen2-VL-7B, with about 8.3B BF16 parameters in the standard Qwen2-VL architecture, provided as safetensors and a PyTorch file under Apache-2.0.

- Catalog URL: https://awesomecua.com/resources/url-e554295a7f3f5c9ad0d6/
- Original source: https://huggingface.co/osunlp/UGround-V1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:e554295a7f3f5c9ad0d6

- Record JSON: https://awesomecua.com/resources/url-e554295a7f3f5c9ad0d6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/UGround-V1-7B

### Primary evidence

- https://huggingface.co/api/models/osunlp/UGround-V1-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 080c9245276e9ffe5911551a66acd7e91b478f85b96c795d6079465d92580f18)
- https://huggingface.co/api/models/osunlp/UGround-V1-7B (retrieved 2026-10-16T06:50:49Z; SHA-256 080c9245276e9ffe5911551a66acd7e91b478f85b96c795d6079465d92580f18)

---

## UGround-V1-72B

UGround-V1-72B is a Qwen2-VL-based model for locating targets in GUI screenshots, released with weights and reported evaluations on mobile, desktop, and web screens.

- Catalog URL: https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/
- Original source: https://huggingface.co/osunlp/UGround-V1-72B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:04Z
- ID: url:7ea46aa7d2d4470bb1f8

### Limitations

The repository lists sharded safetensors weights and tokenizer files. Its card links to the UGround code repository and specifies the Tongyi Qianwen license.

- Record JSON: https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/osunlp/UGround-V1-72B

### Primary evidence

- https://huggingface.co/api/models/osunlp/UGround-V1-72B (retrieved 2026-11-09T05:05:04Z; SHA-256 e0f71e62a25d8a2067823be2f2ed42d7cc35bc98665e97cacde4b48f6677b20d)
- https://huggingface.co/api/models/osunlp/UGround-V1-72B (retrieved 2026-11-09T05:05:04Z; SHA-256 e0f71e62a25d8a2067823be2f2ed42d7cc35bc98665e97cacde4b48f6677b20d)

---

## UI-Act model

2023 GUI agent model: a text-conditioned encoder-decoder Transformer that reads full-screen captures through a convolutional encoder and predicts left clicks on a 4-pixel grid, demonstrated on GNOME Calculator.

- Catalog URL: https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/
- Original source: https://github.com/TobiasNorlund/UI-Act-model
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: imitation-learning, action-prediction
- Evidence checked: 2026-10-18T15:58:37Z
- ID: github:tobiasnorlund/ui-act-model

### Limitations

The demo model has 1.8M parameters and was trained from scratch by behavioural cloning to compute simple additions and subtractions of up to two-digit numbers in an open GNOME Calculator window on Ubuntu at 1920x1080; the README says it is brittle to new backgrounds, resolutions or other windows. In the demo runner each step grabs the full screen with PIL ImageGrab, resizes it to the configured 1024x576 input, and clicks the predicted position with pyautogui until the model predicts end. Neither the trained checkpoint (run.py expects data/gnome_calculator_model/epoch=14-step=1875.ckpt) nor the demonstration recordings (the data module reads screen.mp4 and events.jsonl under data/screen_recordings/) are in the repository; the README instead offers a VirtualBox VM image, whose HTTP HEAD response on 2026-10-18 reported 23,411,565,568 bytes, last modified 2023-10-11. The README's demo-video URL uses the path TobiasNorlund/UI-Act, a name that the GitHub API now resolves to a different repository (ID 993359793; this one is 702482392). There is no LICENSE file and the GitHub API reports no license. Nothing was run.

- Record JSON: https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README names no license, the repository tree at d591416c has no LICENSE file, and the GitHub API reports no license.
  Sources: https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md

### Primary evidence

- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md (retrieved 2026-10-18T15:58:37Z; SHA-256 6b28fe66bb23f8cdc49643a3c3f054bf41be6f0cbf50ce445c3f87d68a8d27d5)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/run.py (retrieved 2026-10-18T15:58:17Z; SHA-256 c0258669f916d3ad22c580fee4d1d078a8085be07c409675ca2790cc8198bd1f)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/model.py (retrieved 2026-10-18T15:58:18Z; SHA-256 433eac64661a471176012dc0a1956ba63cb38a23dcd64956b9ffc17511388fbd)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/data.py (retrieved 2026-10-18T15:58:18Z; SHA-256 7fdd36de702b677d760fb7fe9767d84ceb2a4c9bf44af68118f4b7ade6d4c977)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/data/gnome_calculator_model/model_config.json (retrieved 2026-10-18T15:58:18Z; SHA-256 cd1a070afc47753b786eab78a678082b42902d6810f1c99bf3303c7ec72f6ddd)

---

## UI-Genie Agent 3B

A Qwen2.5-VL-3B mobile GUI action model fine-tuned on AndroidControl, AMEX, AndroidLab and UI-Genie synthetic trajectories to predict app launches, taps, swipes, typing and system-button presses.

- Catalog URL: https://awesomecua.com/resources/url-43d811a5957d8effb7ed/
- Original source: https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning, action-prediction
- Evidence checked: 2026-10-18T15:58:45Z
- ID: url:43d811a5957d8effb7ed

### Limitations

The manifest lists two Safetensors shards. Unlike the 7B card, this card declares no license and the Hub repository has no license file, so the weights license stays unknown; the GitHub README's MIT statement is not applied to the weights. The card's action table accepts coordinate or Set-of-Mark targets. AndroidControl and AndroidLab scores are publisher claims.

- Record JSON: https://awesomecua.com/resources/url-43d811a5957d8effb7ed/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- weights review: The model card declares no license in its metadata or text and the Hub file list has no license file, so no weights grant is established; the GitHub README's MIT statement concerns the project repository, not these weights.
  Sources: https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/README.md, https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-3B

### Primary evidence

- https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/README.md (retrieved 2026-10-18T15:58:45Z; SHA-256 6883ee5efc983d8f50f700e0ac2e22f62e8e5b489044299868a672bb6d1a334b)
- https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-3B (retrieved 2026-10-18T15:58:45Z; SHA-256 550364016847496bb210e625d6cc867939065a1b8b5543a9f53ef784e74f9cff)
- https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/config.json (retrieved 2026-10-18T15:58:45Z; SHA-256 71f575aa0582eddbdbb5e231685c8f6868e9acaefa333ea448eb0e9389f3a900)
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/f00ad4e85a98f3975f50071213a91ced3474b32c/README.md (retrieved 2026-10-18T15:58:46Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)

---

## UI-Genie Agent 7B

A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.

- Catalog URL: https://awesomecua.com/resources/url-6d959b58bd4a2e98e417/
- Original source: https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning, action-prediction
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:6d959b58bd4a2e98e417

### Limitations

Four public safetensors shards are present and the card declares MIT. Its training-data metadata/link uses UI-Genie-Agent-5k while prose labels it 16k; no precise training-set relationship or count is asserted across those inconsistent references. Larger announced models are not counted as released.

- Record JSON: https://awesomecua.com/resources/url-6d959b58bd4a2e98e417/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 3d4e2deda3e8ecc2e6bbba732c01a84dee2443bb7132ef1aeae444f001d23d69)
- https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-7B (retrieved 2026-10-17T04:03:41Z; SHA-256 20e47378595ed007766a135c37fe6709d8853a780ecd5ef56792f0b88c05aeff)
- https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 3d4e2deda3e8ecc2e6bbba732c01a84dee2443bb7132ef1aeae444f001d23d69)

---

## UI-Ins-32B

A GUI grounding checkpoint that locates interface elements from instructions. Its training combines varied instruction formulations with reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/
- Original source: https://huggingface.co/Tongyi-MiA/UI-Ins-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning, screen-understanding
- Evidence checked: 2026-11-09T05:05:15Z
- ID: url:4fada3187f0d1d1efbe5

### Limitations

The repository contains safetensors checkpoint shards. The card names Qwen/Qwen2.5-VL-32B-Instruct as the base model and declares a CC-BY-NC-SA 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-sa-4.0 — https://huggingface.co/Tongyi-MiA/UI-Ins-32B

### Primary evidence

- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-32B (retrieved 2026-11-09T05:05:15Z; SHA-256 12966d31a45db818cdc985afd62e882c51aa9c9417b8acef4db8103aef1daff3)
- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-32B (retrieved 2026-11-09T05:05:15Z; SHA-256 12966d31a45db818cdc985afd62e882c51aa9c9417b8acef4db8103aef1daff3)

---

## UI-Ins-7B

UI-Ins-7B is a GUI-grounding checkpoint trained on varied instruction formulations and reinforcement learning to locate interface elements for agent actions.

- Catalog URL: https://awesomecua.com/resources/url-62cf0bee7a14cfbc84a0/
- Original source: https://huggingface.co/Tongyi-MiA/UI-Ins-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, reinforcement-learning, mobile-navigation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:62cf0bee7a14cfbc84a0

### Limitations

The card names Qwen2.5-VL-7B-Instruct as its base model and declares a CC-BY-NC-SA 4.0 license. Its sample inference script sets MODEL_PATH to the base model.

- Record JSON: https://awesomecua.com/resources/url-62cf0bee7a14cfbc84a0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-sa-4.0 — https://huggingface.co/Tongyi-MiA/UI-Ins-7B

### Primary evidence

- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-7B (retrieved 2026-11-09T05:05:20Z; SHA-256 703462c6568726d6a0b8c8ebb528a8e0b2adefd62066f5d901fc569474f90a89)
- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-7B (retrieved 2026-11-09T05:05:20Z; SHA-256 703462c6568726d6a0b8c8ebb528a8e0b2adefd62066f5d901fc569474f90a89)

---

## UI-Mate-27B

A 27B GUI agent model from the UI-Mate release, trained from Qwen3.6-27B with supervised fine-tuning and online reinforcement learning to turn instructions and screenshots into keyboard and mouse actions.

- Catalog URL: https://awesomecua.com/resources/url-ad993f634943aadbc3f7/
- Original source: https://huggingface.co/tencent/UI-Mate-27B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: action-prediction, reinforcement-learning, long-horizon
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:ad993f634943aadbc3f7

### Limitations

The repository holds 12 safetensors shards with tokenizer, processor and chat-template files under Apache-2.0. The card reports 77.0 on OSWorld-Verified and 66.2 on WindowsAgentArena and serves the model with vLLM.

- Record JSON: https://awesomecua.com/resources/url-ad993f634943aadbc3f7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tencent/UI-Mate-27B

### Primary evidence

- https://huggingface.co/api/models/tencent/UI-Mate-27B (retrieved 2026-11-10T06:29:31Z; SHA-256 65c5ecfc41daca1876a69568d62f5776ee7c7d3d1b4587869dc25b87ea440c90)
- https://huggingface.co/api/models/tencent/UI-Mate-27B (retrieved 2026-11-10T06:29:31Z; SHA-256 65c5ecfc41daca1876a69568d62f5776ee7c7d3d1b4587869dc25b87ea440c90)

---

## UI-Mate-9B

A 9B GUI agent model from the UI-Mate release, trained from Qwen3.5-9B with supervised fine-tuning and online reinforcement learning to turn instructions and screenshots into keyboard and mouse actions.

- Catalog URL: https://awesomecua.com/resources/url-d9e6788adf3eb50a9b87/
- Original source: https://huggingface.co/tencent/UI-Mate-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: action-prediction, reinforcement-learning, long-horizon
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:d9e6788adf3eb50a9b87

### Limitations

The repository holds 4 safetensors shards with tokenizer, processor and chat-template files under Apache-2.0. The card reports 66.2 on OSWorld-Verified and 61.7 on WindowsAgentArena and serves the model with vLLM.

- Record JSON: https://awesomecua.com/resources/url-d9e6788adf3eb50a9b87/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tencent/UI-Mate-9B

### Primary evidence

- https://huggingface.co/api/models/tencent/UI-Mate-9B (retrieved 2026-11-10T06:29:31Z; SHA-256 2f2eb43fd9910751b69081052aad6f427f54ccaf71fa3330e8dd12d052a49018)
- https://huggingface.co/api/models/tencent/UI-Mate-9B (retrieved 2026-11-10T06:29:31Z; SHA-256 2f2eb43fd9910751b69081052aad6f427f54ccaf71fa3330e8dd12d052a49018)

---

## UI-Mate-democua-27B

A 27B checkpoint of the UI-Mate desktop agent, fine-tuned from Qwen3.6-27B, that reads screenshots and can follow one recorded demonstration to plan keyboard and mouse actions on a new task.

- Catalog URL: https://awesomecua.com/resources/url-4425e20ebe68c9eb805f/
- Original source: https://huggingface.co/tencent/UI-Mate-democua-27B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: action-prediction, workflow, long-horizon
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:4425e20ebe68c9eb805f

### Limitations

The repository holds 12 safetensors shards with tokenizer, processor and chat-template files under Apache-2.0. The card serves it with vLLM through an OpenAI-compatible endpoint and uses the prompt, parser and harness from the UI-Mate GitHub repository.

- Record JSON: https://awesomecua.com/resources/url-4425e20ebe68c9eb805f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/tencent/UI-Mate-democua-27B

### Primary evidence

- https://huggingface.co/api/models/tencent/UI-Mate-democua-27B (retrieved 2026-11-10T06:29:31Z; SHA-256 95f2c30f1a43f62f9f430a12032d5172dafe9869b703507bf3bab2c4513ff58b)
- https://huggingface.co/api/models/tencent/UI-Mate-democua-27B (retrieved 2026-11-10T06:29:31Z; SHA-256 95f2c30f1a43f62f9f430a12032d5172dafe9869b703507bf3bab2c4513ff58b)

---

## UI-R1 3B

A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.

- Catalog URL: https://awesomecua.com/resources/url-f13474d7aa734a30624d/
- Original source: https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, android
- Topics: grounding, reinforcement-learning, action-prediction
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:f13474d7aa734a30624d

### Limitations

Two safetensors shards and tokenizer/configuration files are publicly ungated. The model card declares MIT; upstream base-model terms are separate. The mutable card compares v1, v2 and UI-R1-E results with incomplete commit pinning; this record identifies the Hub release.

- Record JSON: https://awesomecua.com/resources/url-f13474d7aa734a30624d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md

### Primary evidence

- https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 620fbee20a6002bbc13562030ce4988d41ef17b0c033ec6872d83741f597adb8)
- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1 (retrieved 2026-10-17T02:03:33Z; SHA-256 6a206702a1a4faef428460e07f52aaf8fd1f1a144d711d807ca42479b248f697)
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3)
- https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 620fbee20a6002bbc13562030ce4988d41ef17b0c033ec6872d83741f597adb8)

---

## UI-S1 7B

A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.

- Catalog URL: https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/
- Original source: https://huggingface.co/mPLUG/UI-S1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, mobile-navigation, action-prediction
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:1c4ee99a9a55ae71a7ac

### Limitations

Four public safetensors shards are present. The card declares Apache-2.0 for the weights. The project publishes only a portion of its training data.

- Record JSON: https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 341abd3833131080682b27fe0b79e310d7cf9465602b77b8e399e45200552d61)
- https://huggingface.co/api/models/mPLUG/UI-S1-7B (retrieved 2026-10-17T04:03:40Z; SHA-256 d0c25fa2fad8372ffc8b51b63701c7e5548cca08a612c0081c4c317f9532894d)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md (retrieved 2026-10-17T04:06:57Z; SHA-256 f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942)
- https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 341abd3833131080682b27fe0b79e310d7cf9465602b77b8e399e45200552d61)

---

## UI-TARS 7B SFT

SFT-labelled 7B UI-TARS checkpoint: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and multi-step actions on web, mobile and desktop.

- Catalog URL: https://awesomecua.com/resources/url-dbd880ec31b412487945/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-10-18T11:34:11Z
- ID: url:dbd880ec31b412487945

### Limitations

Hub API at revision 3434901a lists seven F32 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 17.7 on OSWorld with a 15-step budget and 33.0 on AndroidWorld for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-dbd880ec31b412487945/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md

### Primary evidence

- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md (retrieved 2026-10-18T11:34:11Z; SHA-256 4a0e03cea82f6d539b7d618e5df4648232c108dda3d0321a6adbbf29dd4db00e)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-7B-SFT (retrieved 2026-10-18T11:34:12Z; SHA-256 593a8f425ecb4c6302873bbb7bda9dec0c66bcb973860d8919a1b4ed6709f2a6)
- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md (retrieved 2026-10-18T11:34:11Z; SHA-256 4a0e03cea82f6d539b7d618e5df4648232c108dda3d0321a6adbbf29dd4db00e)

---

## UI-Venus

GUI agent model family; UI-Venus-2, at 9B and 27B, acts on mobile, web and desktop in one end-to-end agent, trained with keypoint-based multi-judge task verification.

- Catalog URL: https://awesomecua.com/resources/github-inclusionai-ui-venus/
- Original source: https://github.com/inclusionAI/UI-Venus
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, planning
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:inclusionai/ui-venus

- Record JSON: https://awesomecua.com/resources/github-inclusionai-ui-venus/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/inclusionAI/UI-Venus/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 5703c892aaf99d250bf59edf52d359560a80d443f2be13c7aa76af0c1a7f1d67)

---

## UI-Venus 2 9B

UI-Venus 2 GUI-agent checkpoint fine-tuned from Qwen3.5-9B, with about 9.4B BF16 parameters in the Qwen3.5 multimodal architecture, loaded through Transformers for image-text-to-text.

- Catalog URL: https://awesomecua.com/resources/url-611df37e5f3caa6befd7/
- Original source: https://huggingface.co/inclusionAI/UI-Venus-2-9b
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, planning
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:611df37e5f3caa6befd7

- Record JSON: https://awesomecua.com/resources/url-611df37e5f3caa6befd7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b (retrieved 2026-10-16T06:50:49Z; SHA-256 0097be2c0e5c3f3c8aace10de835b0d7c1075531cc7823287c3f5488aebaea08)
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b (retrieved 2026-10-16T06:50:49Z; SHA-256 0097be2c0e5c3f3c8aace10de835b0d7c1075531cc7823287c3f5488aebaea08)
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9B (retrieved 2026-10-17T19:15:02Z; SHA-256 3ec7929329e8e1b09f31dee4a3e67128d68cddc95220a5944f4cd6102dae327e)
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b (retrieved 2026-10-17T19:15:03Z; SHA-256 3ec7929329e8e1b09f31dee4a3e67128d68cddc95220a5944f4cd6102dae327e)

---

## UI-Voyager

A released mobile GUI agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct to operate device interfaces, with AndroidWorld evaluation instructions.

- Catalog URL: https://awesomecua.com/resources/url-e2ddf502803f46085aca/
- Original source: https://huggingface.co/MarsXL/UI-Voyager
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning, self-reflection
- Evidence checked: 2026-11-09T21:08:47Z
- ID: url:e2ddf502803f46085aca

### Limitations

The repository includes safetensors weight shards. The card declares an MIT license and links to evaluation code.

- Record JSON: https://awesomecua.com/resources/url-e2ddf502803f46085aca/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/MarsXL/UI-Voyager

### Primary evidence

- https://huggingface.co/api/models/MarsXL/UI-Voyager (retrieved 2026-11-09T21:08:47Z; SHA-256 f7ab879d9bc522e713eb06d5c1fd5347a6b279d78e6a43b6ccf27e40a24d4018)
- https://huggingface.co/api/models/MarsXL/UI-Voyager (retrieved 2026-11-09T21:08:47Z; SHA-256 f7ab879d9bc522e713eb06d5c1fd5347a6b279d78e6a43b6ccf27e40a24d4018)

---

## UIShift-7B-2K

UIShift-7B, the initial GUI-Shift model: a Qwen2.5-VL model trained with GRPO on 2K AndroidControl samples to infer which action led from one screenshot to the next.

- Catalog URL: https://awesomecua.com/resources/url-0dcc389cc2b1b15fb081/
- Original source: https://huggingface.co/mllmTeam/UIShift-7B-2K
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: action-prediction, reinforcement-learning, mobile-navigation
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:0dcc389cc2b1b15fb081

### Limitations

Four safetensors shards with tokenizer and processor configs. The GUI-Shift repository's legacy README documents AndroidControl data preparation, the VLM-R1-based GRPO training scripts and the AndroidControl test set used for this version.

- Record JSON: https://awesomecua.com/resources/url-0dcc389cc2b1b15fb081/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/mllmTeam/UIShift-7B-2K (retrieved 2026-11-10T03:01:01Z; SHA-256 d12df9a74982afb2e32f4ba9d735cd29425b167c2d4d5ebeffd22621fd956bac)
- https://huggingface.co/api/models/mllmTeam/UIShift-7B-2K (retrieved 2026-11-10T03:01:01Z; SHA-256 d12df9a74982afb2e32f4ba9d735cd29425b167c2d4d5ebeffd22621fd956bac)

---

## UIX-Qwen2

A MultiUI-trained visual-language checkpoint for text-rich webpage understanding and interface tasks.

- Catalog URL: https://awesomecua.com/resources/url-54997a3c67e54abdf319/
- Original source: https://huggingface.co/neulab/UIX-Qwen2
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:54997a3c67e54abdf319

### Limitations

Four public safetensors shards are present. The model card declares odc-by, a data-oriented license designation; it is preserved as a publisher declaration rather than replaced with the code or base-model license. No independent legal scope or evaluation result is asserted.

- Record JSON: https://awesomecua.com/resources/url-54997a3c67e54abdf319/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: odc-by — https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md

### Primary evidence

- https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 91f90e329b76c2ded26a62c41f648a73e685116aa732c86c201592e46a941c44)
- https://huggingface.co/api/models/neulab/UIX-Qwen2 (retrieved 2026-10-17T04:03:40Z; SHA-256 19bd4d126f3ccb4cb3049125d384c76964bd3169c051369ac0c7b64cef9f48b4)
- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 91f90e329b76c2ded26a62c41f648a73e685116aa732c86c201592e46a941c44)

---

## UIX-Qwen2-Mind2Web

UIX-Qwen2 further fine-tuned on the Mind2Web training set; the MultiUI paper evaluates it on predicting the next web action from a screenshot, the task and previous actions.

- Catalog URL: https://awesomecua.com/resources/url-592e434848a1514efef0/
- Original source: https://huggingface.co/neulab/UIX-Qwen2-Mind2Web
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, grounding
- Evidence checked: 2026-10-18T16:06:26Z
- ID: url:592e434848a1514efef0

### Limitations

Hub API at revision cf1654a2 lists four root BF16 safetensors shards (about 8.03B parameters) whose config declares LlavaQwenForCausalLM with the google/siglip-so400m-patch14-384 vision tower; the repository is publicly accessible. It also keeps two intermediate training folders, checkpoint-565 and checkpoint-1130, each with its own weight shards plus scheduler, RNG and trainer state. The MultiUI README lists this repository as UIX-Qwen2-M2W on Qwen2-7B-Instruct. The paper marks -M2W models as further fine-tuned on the Mind2Web training set and reports publisher figures for step success rate and element accuracy for UIX-Qwen2-M2W on the cross-task, cross-website and cross-domain splits. The card declares odc-by, a data-oriented designation kept as the publisher's weight declaration; base-model terms are not resolved.

- Record JSON: https://awesomecua.com/resources/url-592e434848a1514efef0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: odc-by — https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md

### Primary evidence

- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md (retrieved 2026-10-18T16:06:26Z; SHA-256 62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa)
- https://huggingface.co/api/models/neulab/UIX-Qwen2-Mind2Web/revision/cf1654a2df366e87c4ec80009bb958395afe3c35 (retrieved 2026-10-18T16:05:53Z; SHA-256 ab55b10ee9e1daedda116e1ecd3dfa5fa6d37b2f0c62403c79c64dd57e1d9cd3)
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md (retrieved 2026-10-18T16:02:59Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://arxiv.org/html/2410.13824v3 (retrieved 2026-10-18T16:03:00Z; SHA-256 383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c)
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/config.json (retrieved 2026-10-18T16:06:17Z; SHA-256 5deaf05d45d21acaca2d43d129ffadfbda840902167dbaa83a86004d133f2c20)
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md (retrieved 2026-10-18T16:06:26Z; SHA-256 62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa)

---

## V-Droid-8B-0323

A verifier model for the V-Droid Android GUI agent scores candidate actions from a device description and task, helping select the next mobile operation.

- Catalog URL: https://awesomecua.com/resources/url-82adab61eb515398da48/
- Original source: https://huggingface.co/V-Droid/V-Droid-8B-0323
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, reward-models, efficiency
- Evidence checked: 2026-11-09T19:57:04Z
- ID: url:82adab61eb515398da48

### Limitations

The repository listing includes adapter weights and a value-head file. The card says the model was fine-tuned from Llama-3.1-8B-4bit and declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-82adab61eb515398da48/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/V-Droid/V-Droid-8B-0323

### Primary evidence

- https://huggingface.co/api/models/V-Droid/V-Droid-8B-0323 (retrieved 2026-11-09T19:57:04Z; SHA-256 0be9596c50a0c542ab8c9f5649204c5cd1ef4b8af119df5950a56828aee48e80)
- https://huggingface.co/api/models/V-Droid/V-Droid-8B-0323 (retrieved 2026-11-09T19:57:04Z; SHA-256 0be9596c50a0c542ab8c9f5649204c5cd1ef4b8af119df5950a56828aee48e80)

---

## V2P-7B

A GUI grounding checkpoint that takes a screenshot and instruction to locate interaction coordinates. V2P suppresses background attention and emphasizes target centers.

- Catalog URL: https://awesomecua.com/resources/url-a815c128627d11011e89/
- Original source: https://huggingface.co/inclusionAI/V2P-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:a815c128627d11011e89

### Limitations

The repository lists model-weight shards and processor files. The card identifies Qwen2.5-VL-7B-Instruct as its base model and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-a815c128627d11011e89/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/V2P-7B

### Primary evidence

- https://huggingface.co/api/models/inclusionAI/V2P-7B (retrieved 2026-11-09T21:08:46Z; SHA-256 1bbe1829acc087f34495f137b8faeb4ffc05b7f676f2813b312b806ee8210160)
- https://huggingface.co/api/models/inclusionAI/V2P-7B (retrieved 2026-11-09T21:08:46Z; SHA-256 1bbe1829acc087f34495f137b8faeb4ffc05b7f676f2813b312b806ee8210160)

---

## VeriOS-Agent-32B

VeriOS-Agent-32B is a query-driven OS agent checkpoint initialized from Qwen2.5-VL-32B. It is released with model weights for the interaction approach described in the VeriOS paper.

- Catalog URL: https://awesomecua.com/resources/url-97040677a731edfedc2d/
- Original source: https://huggingface.co/wuuuuuz/VeriOS-Agent-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: human-in-the-loop, safety-security, action-prediction
- Evidence checked: 2026-11-09T05:04:58Z
- ID: url:97040677a731edfedc2d

### Limitations

The repository contains sharded safetensors weights, a model index and tokenizer files. The card names Qwen2.5-VL-32B as the initial model.

- Record JSON: https://awesomecua.com/resources/url-97040677a731edfedc2d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-32B (retrieved 2026-11-09T05:04:58Z; SHA-256 b83a1bb40de44e1b7d5a9cf14278f261d26d9b7cfdc6451bf7322da4c9f4c83c)
- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-32B (retrieved 2026-11-09T05:04:58Z; SHA-256 b83a1bb40de44e1b7d5a9cf14278f261d26d9b7cfdc6451bf7322da4c9f4c83c)

---

## VeriOS-Agent-7B

A 7B OS agent model that carries out GUI actions under normal conditions and asks a person for input when it detects an untrustworthy scenario, trained in three stages with SFT and GRPO.

- Catalog URL: https://awesomecua.com/resources/url-0b0a7a841d65715d60b1/
- Original source: https://huggingface.co/wuuuuuz/VeriOS-Agent-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: human-in-the-loop, safety-security, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:0b0a7a841d65715d60b1

### Limitations

Four safetensors shards with tokenizer, processor and training-log files. The VeriOS GitHub repository holds interaction-loop evaluation scripts and LLaMA-Factory training configs and links the VeriOS-Bench dataset (mobile, desktop, web and tablet screens) and a 32B variant on Hugging Face; the paper reports a 19.72% average step-wise success-rate gain.

- Record JSON: https://awesomecua.com/resources/url-0b0a7a841d65715d60b1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-7B (retrieved 2026-11-10T03:01:01Z; SHA-256 abc8ae08f571cea42cc8710437036a06bd4ea1c6e7163ef2a71eeb60806a6740)
- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-7B (retrieved 2026-11-10T03:01:01Z; SHA-256 abc8ae08f571cea42cc8710437036a06bd4ea1c6e7163ef2a71eeb60806a6740)

---

## Vision-ml

Vision-ml locates the close control in a mobile-app popup screenshot and returns screen coordinates for automation; the repository includes prediction code and a pretrained model.

- Catalog URL: https://awesomecua.com/resources/github-meituan-dianping-vision/
- Original source: https://github.com/Meituan-Dianping/vision
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, automation
- Evidence checked: 2026-11-09T19:56:59Z
- ID: github:meituan-dianping/vision

### Limitations

The README describes Python-script and web-server prediction paths, training images and model-training instructions.

- Record JSON: https://awesomecua.com/resources/github-meituan-dianping-vision/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/README.md (retrieved 2026-11-09T19:56:59Z; SHA-256 77ad6833898d2a344431067fe8f69d3b4b8855aea0deccb6737fff240b7d15a1)
- https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/LICENSE (retrieved 2026-11-09T14:20:49Z; SHA-256 344f21123f798b47f16cb7b67c7d4bdb06d920f21d78bc2a2e729eaf4c65cb30)

---

## webarena-world-model-rlvr

A language world model for web page state prediction on WebArena, post-trained with RLVR from an SFT checkpoint and used for model predictive control of web agents.

- Catalog URL: https://awesomecua.com/resources/url-e02a165e76cd7c43e2ca/
- Original source: https://huggingface.co/thuml/webarena-world-model-rlvr
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation, reinforcement-learning, planning
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:e02a165e76cd7c43e2ca

### Limitations

The repository holds one safetensors checkpoint whose Qwen2 config names DeepSeek-R1-Distill-Qwen-1.5B as its base path; the card lists thuml/webarena-world-model-sft as base model and thuml/webarena-world-model-cot as dataset. The RLVR-World code base provides GRPO training scripts and a WebArena evaluation that needs self-hosted WebArena sites. License: MIT.

- Record JSON: https://awesomecua.com/resources/url-e02a165e76cd7c43e2ca/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/thuml/webarena-world-model-rlvr

### Primary evidence

- https://huggingface.co/api/models/thuml/webarena-world-model-rlvr (retrieved 2026-11-10T03:01:14Z; SHA-256 b59a134f67a9f5497901b42e738137b1e08d4767843f836628ffd1a00418d9c4)
- https://huggingface.co/api/models/thuml/webarena-world-model-rlvr (retrieved 2026-11-10T03:01:14Z; SHA-256 b59a134f67a9f5497901b42e738137b1e08d4767843f836628ffd1a00418d9c4)

---

## webarena-world-model-sft

DeepSeek-R1-Distill-Qwen-1.5B fine-tuned as a language world model for WebArena: it predicts which accessibility-tree items change after a web action, trained by SFT on chain-of-thought data before the RLVR stage.

- Catalog URL: https://awesomecua.com/resources/url-42686ac00c4ae107f147/
- Original source: https://huggingface.co/thuml/webarena-world-model-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation
- Evidence checked: 2026-11-10T03:01:08Z
- ID: url:42686ac00c4ae107f147

### Limitations

Two sharded safetensors files and a LICENSE file; the card declares MIT. The RLVR-World lang_wm README merges LoRA weights after SFT, the RLVR-trained counterpart is thuml/webarena-world-model-rlvr, and the paper uses the world model for model predictive control of WebArena agents.

- Record JSON: https://awesomecua.com/resources/url-42686ac00c4ae107f147/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/thuml/webarena-world-model-sft

### Primary evidence

- https://huggingface.co/api/models/thuml/webarena-world-model-sft (retrieved 2026-11-10T03:01:08Z; SHA-256 d731ff5bf196fc58890afd6cac45013aca4705a370d88a1ad6aa402e4c31f3ae)
- https://huggingface.co/api/models/thuml/webarena-world-model-sft (retrieved 2026-11-10T03:01:08Z; SHA-256 d731ff5bf196fc58890afd6cac45013aca4705a370d88a1ad6aa402e4c31f3ae)

---

## WebGenAgent-LM-7B-SFT

The 7B supervised fine-tuned checkpoint of WebGen-Agent, which writes website code from instructions and refines it with screenshot critiques and GUI-agent functional tests.

- Catalog URL: https://awesomecua.com/resources/url-1ff9a17a7d0802a71b1a/
- Original source: https://huggingface.co/luzimu/WebGenAgent-LM-7B-SFT
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: ui-design, imitation-learning
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:1ff9a17a7d0802a71b1a

### Limitations

Safetensors weights fine-tuned from Qwen2.5-Coder-7B-Instruct, trained on the luzimu/webgen-agent_train_sft and webgen-agent_train_step-grpo datasets per the card; inference runs through the WebGen-Agent code with an LLM and a feedback VLM. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-1ff9a17a7d0802a71b1a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/luzimu/WebGenAgent-LM-7B-SFT

### Primary evidence

- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-SFT (retrieved 2026-11-10T06:29:27Z; SHA-256 3f28625fb003c8a47aead14b08a2b2d95a46e506155187b3c5ecfc10d4fdbb8e)
- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-SFT (retrieved 2026-11-10T06:29:27Z; SHA-256 3f28625fb003c8a47aead14b08a2b2d95a46e506155187b3c5ecfc10d4fdbb8e)

---

## WebGenAgent-LM-7B-Step-GRPO

The 7B Step-GRPO checkpoint of WebGen-Agent, which writes website code from instructions; training used screenshot scores and GUI-agent test scores as step-level rewards.

- Catalog URL: https://awesomecua.com/resources/url-cdb9a1ad26e169a411f5/
- Original source: https://huggingface.co/luzimu/WebGenAgent-LM-7B-Step-GRPO
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: ui-design, reinforcement-learning, reward-models
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:cdb9a1ad26e169a411f5

### Limitations

Safetensors weights fine-tuned from Qwen2.5-Coder-7B-Instruct, trained on the luzimu/webgen-agent_train_sft and webgen-agent_train_step-grpo datasets per the card; inference runs through the WebGen-Agent code with an LLM and a feedback VLM. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-cdb9a1ad26e169a411f5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/luzimu/WebGenAgent-LM-7B-Step-GRPO

### Primary evidence

- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-Step-GRPO (retrieved 2026-11-10T06:29:27Z; SHA-256 7a373c46dbe64c242e42afda7ed69ebb16960b7b96f37db4c6b3d7e182c0312b)
- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-Step-GRPO (retrieved 2026-11-10T06:29:27Z; SHA-256 7a373c46dbe64c242e42afda7ed69ebb16960b7b96f37db4c6b3d7e182c0312b)

---

## WebGenAgent-LM-8B-SFT

The 8B supervised fine-tuned checkpoint of WebGen-Agent, which writes website code from instructions and refines it with screenshot critiques and GUI-agent functional tests.

- Catalog URL: https://awesomecua.com/resources/url-b3dd615ebfe977392f90/
- Original source: https://huggingface.co/luzimu/WebGenAgent-LM-8B-SFT
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: ui-design, imitation-learning
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:b3dd615ebfe977392f90

### Limitations

The repository holds the weights in four safetensors shards with tokenizer files, trainer_state.json and training_args.bin; the card's metadata names Qwen/Qwen3-8B as the base model and lists the luzimu/webgen-agent_train_sft and luzimu/webgen-agent_train_step-grpo datasets. For installation and inference the card points to the WebGen-Agent GitHub repository. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-b3dd615ebfe977392f90/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/luzimu/WebGenAgent-LM-8B-SFT

### Primary evidence

- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-SFT (retrieved 2026-11-10T06:29:27Z; SHA-256 e59bca4fac8d94f2c3daed6435021545ae962d70f1f4f04c0165d0ce04b08019)
- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-SFT (retrieved 2026-11-10T06:29:27Z; SHA-256 e59bca4fac8d94f2c3daed6435021545ae962d70f1f4f04c0165d0ce04b08019)

---

## WebGenAgent-LM-8B-Step-GRPO

The 8B Step-GRPO checkpoint of WebGen-Agent, which writes website code from instructions; training used screenshot scores and GUI-agent test scores as step-level rewards.

- Catalog URL: https://awesomecua.com/resources/url-7ebba507c0df876c6113/
- Original source: https://huggingface.co/luzimu/WebGenAgent-LM-8B-Step-GRPO
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: ui-design, reinforcement-learning, reward-models
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:7ebba507c0df876c6113

### Limitations

Safetensors weights fine-tuned from Qwen3-8B, trained on the luzimu/webgen-agent_train_sft and webgen-agent_train_step-grpo datasets per the card; inference runs through the WebGen-Agent code with an LLM and a feedback VLM. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-7ebba507c0df876c6113/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/luzimu/WebGenAgent-LM-8B-Step-GRPO

### Primary evidence

- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-Step-GRPO (retrieved 2026-11-10T06:29:27Z; SHA-256 7fb374523bace23abaa598a02afed56801732e31023cb1133a0f7ad79854d40d)
- https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-Step-GRPO (retrieved 2026-11-10T06:29:27Z; SHA-256 7fb374523bace23abaa598a02afed56801732e31023cb1133a0f7ad79854d40d)

---

## WebJudge 7B

A visual trajectory judge that retains selected intermediate screenshots to evaluate whether a web agent completed its task.

- Catalog URL: https://awesomecua.com/resources/url-772161f06c2b3d4978b5/
- Original source: https://huggingface.co/osunlp/WebJudge-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T04:03:41Z
- ID: url:772161f06c2b3d4978b5

### Limitations

Four public safetensors shards are present. Apache-2.0 is declared for the weights. This is an evaluator checkpoint; human-agreement rates measure agreement with human labels.

- Record JSON: https://awesomecua.com/resources/url-772161f06c2b3d4978b5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 425f11651cdae09997c1b038cdc9c091778c35a51b8de88140fc6dc935b8bb64)
- https://huggingface.co/api/models/osunlp/WebJudge-7B (retrieved 2026-10-17T04:03:41Z; SHA-256 2eebc1f909263be946057306b41d733e29f0f32337dae02da4e989b5477cf31f)
- https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 425f11651cdae09997c1b038cdc9c091778c35a51b8de88140fc6dc935b8bb64)

---

## WebRL-GLM-4-9B

A GLM-based WebRL model released for browser tasks across five WebArena websites. Its card reports evaluation results on WebArena-Lite.

- Catalog URL: https://awesomecua.com/resources/url-f979ca583090405aadee/
- Original source: https://huggingface.co/THUDM/webrl-glm-4-9b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning, evaluation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:f979ca583090405aadee

### Limitations

The repository lists sharded safetensors weights, a tokenizer and model configuration files. The card names THUDM/glm-4-9b as its base model and declares its license as other.

- Record JSON: https://awesomecua.com/resources/url-f979ca583090405aadee/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/THUDM/webrl-glm-4-9b

### Primary evidence

- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b (retrieved 2026-11-09T05:05:20Z; SHA-256 a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3)
- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b (retrieved 2026-11-09T05:05:20Z; SHA-256 a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3)
- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b (retrieved 2026-11-09T05:26:16Z; SHA-256 a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3)
- https://huggingface.co/api/models/zai-org/webrl-glm-4-9b (retrieved 2026-11-09T05:26:16Z; SHA-256 a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3)

---

## webrl-llama-3.1-70b

A released Llama-3.1-70B WebRL model for operating five WebArena websites. Its model card reports WebArena-Lite results and points to inference requirements.

- Catalog URL: https://awesomecua.com/resources/url-5371bf588e7790a66ff0/
- Original source: https://huggingface.co/THUDM/webrl-llama-3.1-70b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning, evaluation
- Evidence checked: 2026-11-09T05:05:10Z
- ID: url:5371bf588e7790a66ff0

### Limitations

The repository lists model weight shards and configuration files. The card identifies meta/Llama-3.1-70B as its base model and marks its license as 'other'.

- Record JSON: https://awesomecua.com/resources/url-5371bf588e7790a66ff0/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/THUDM/webrl-llama-3.1-70b

### Primary evidence

- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b (retrieved 2026-11-09T05:05:10Z; SHA-256 eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0)
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b (retrieved 2026-11-09T05:05:10Z; SHA-256 eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0)
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b (retrieved 2026-11-09T05:25:54Z; SHA-256 eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0)
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-70b (retrieved 2026-11-09T05:25:54Z; SHA-256 eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0)

---

## WebThinker-QwQ-32B

WebThinker-QwQ-32B is a released reasoning model for searching and navigating web pages while drafting research reports. Its card describes training on preferences derived from reasoning trajectories.

- Catalog URL: https://awesomecua.com/resources/url-e058cc2487a805f976fd/
- Original source: https://huggingface.co/lixiaoxi45/WebThinker-QwQ-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, reinforcement-learning
- Evidence checked: 2026-11-09T19:57:08Z
- ID: url:e058cc2487a805f976fd

### Limitations

The repository lists model weight shards and tokenizer files. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-e058cc2487a805f976fd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-QwQ-32B

### Primary evidence

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-QwQ-32B (retrieved 2026-11-09T19:57:08Z; SHA-256 003ae8270255674f17dd313e0848741da5729127e3cae19c80b0c86c20815be5)
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-QwQ-32B (retrieved 2026-11-09T19:57:08Z; SHA-256 003ae8270255674f17dd313e0848741da5729127e3cae19c80b0c86c20815be5)

---

## WebThinker-R1-14B

WebThinker-R1-14B is a released reasoning model whose card describes web search, page exploration through clicks, and report drafting during research tasks.

- Catalog URL: https://awesomecua.com/resources/url-7d198acee96b3ec197aa/
- Original source: https://huggingface.co/lixiaoxi45/WebThinker-R1-14B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, reinforcement-learning
- Evidence checked: 2026-11-09T21:09:35Z
- ID: url:7d198acee96b3ec197aa

### Limitations

The repository lists safetensors weight shards and tokenizer files. The card describes iterative online DPO training and links the model to arXiv:2504.21776.

- Record JSON: https://awesomecua.com/resources/url-7d198acee96b3ec197aa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-R1-14B

### Primary evidence

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-14B (retrieved 2026-11-09T21:09:35Z; SHA-256 ee6fd767309dd6ee321add7050f8d91e3c72ee2aff63b1c63e9536aac566a11f)
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-14B (retrieved 2026-11-09T21:09:35Z; SHA-256 ee6fd767309dd6ee321add7050f8d91e3c72ee2aff63b1c63e9536aac566a11f)

---

## WebThinker-R1-32B

Released reasoning checkpoint for web research that searches and navigates pages through interactive clicks while drafting reports from gathered information.

- Catalog URL: https://awesomecua.com/resources/url-8076f65dc82b4dcea18c/
- Original source: https://huggingface.co/lixiaoxi45/WebThinker-R1-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, reinforcement-learning
- Evidence checked: 2026-11-09T19:58:04Z
- ID: url:8076f65dc82b4dcea18c

### Limitations

The card identifies this as a 32B parameter model and declares an Apache License 2.0 release. It cites the WebThinker paper.

- Record JSON: https://awesomecua.com/resources/url-8076f65dc82b4dcea18c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-R1-32B

### Primary evidence

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-32B (retrieved 2026-11-09T19:58:04Z; SHA-256 07ce80c79e7b3cbd7e779c72a039d8e6daa9ea9b591250f640fb27b88ac9c4a0)
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-32B (retrieved 2026-11-09T19:58:04Z; SHA-256 07ce80c79e7b3cbd7e779c72a039d8e6daa9ea9b591250f640fb27b88ac9c4a0)

---

## WebThinker-R1-7B

A released 7B reasoning model for web research that searches and navigates pages through interactive elements while drafting reports.

- Catalog URL: https://awesomecua.com/resources/url-564c980a531e7204447c/
- Original source: https://huggingface.co/lixiaoxi45/WebThinker-R1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, reinforcement-learning
- Evidence checked: 2026-11-09T19:56:28Z
- ID: url:564c980a531e7204447c

### Limitations

The repository lists model weight shards and tokenizer files. The card describes iterative online DPO training and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-564c980a531e7204447c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-R1-7B

### Primary evidence

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-7B (retrieved 2026-11-09T19:56:28Z; SHA-256 f1948fa6be3295da60b0174956f8e6da7bcd78ccacc6d28d15f91c78f9d85a22)
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-7B (retrieved 2026-11-09T19:56:28Z; SHA-256 f1948fa6be3295da60b0174956f8e6da7bcd78ccacc6d28d15f91c78f9d85a22)

---

## WebVIA-Agent

GLM-4.1V-9B-based web exploration agent from WebVIA that reads a page screenshot and DOM tree and picks click, type or select actions to reach each interactive UI state for UI-to-code work.

- Catalog URL: https://awesomecua.com/resources/url-62724cba1b5814215cf7/
- Original source: https://huggingface.co/zai-org/WebVIA-Agent
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, ui-design
- Evidence checked: 2026-10-18T12:16:11Z
- ID: url:62724cba1b5814215cf7

### Limitations

In the linked code repository, the agent launcher sends the page's DOM tree with element IDs and a screenshot to a configurable OpenAI-compatible endpoint and parses click[id], enter[id][text] and select[id][text] actions from the reply, so this checkpoint is served separately. Hub API at revision d6ee0ce1 lists four BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; access is open. GitHub reports no license for the code repository. The card declares MIT for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-62724cba1b5814215cf7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md

### Primary evidence

- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md (retrieved 2026-10-18T12:16:11Z; SHA-256 1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49)
- https://huggingface.co/api/models/zai-org/WebVIA-Agent/revision/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2 (retrieved 2026-10-18T12:16:12Z; SHA-256 5d7f0dce7579dc1d4c6fe3a82568cec7187c8ef5ee70e27e1b8482ba574f246a)
- https://raw.githubusercontent.com/zheny2751-dotcom/WebVIA/1b228001e8b24f0cab8d9e00a9f6e7ae521d6c67/code/agent/start_agent.py (retrieved 2026-10-18T12:16:12Z; SHA-256 79b219bd4a415a6bac297acf2aefb786d0789e8daad386c6ed6cf831be0a77a1)
- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md (retrieved 2026-10-18T12:16:11Z; SHA-256 1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49)

---

## WildAWM-35B-A3B

WildAWM-35B-A3B is a Qwen3.6-35B-A3B agent checkpoint post-trained on WildAWM cross-interface computer tasks that mix web, MCP and CLI actions, served text-only with SGLang.

- Catalog URL: https://awesomecua.com/resources/url-201acf47dde3df755bfe/
- Original source: https://huggingface.co/ChilleD/WildAWM-35B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: cross-app, tool-integration, long-horizon, reinforcement-learning
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:201acf47dde3df755bfe

### Limitations

Release contains safetensors weights, tokenizer and chat template for Qwen3.6-35B-A3B; the card gives an SGLang launch command with Qwen tool-call and reasoning parsers. A sibling WildAWM-4B checkpoint and the ChilleD/WildAWM task set accompany it.

- Record JSON: https://awesomecua.com/resources/url-201acf47dde3df755bfe/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/ChilleD/WildAWM-35B-A3B (retrieved 2026-11-10T06:29:27Z; SHA-256 31ac22bd6861a0b96dba7ab83f9e2d52bac1bd671bb75bec16c5cfb217b590b0)
- https://huggingface.co/api/models/ChilleD/WildAWM-35B-A3B (retrieved 2026-11-10T06:29:27Z; SHA-256 31ac22bd6861a0b96dba7ab83f9e2d52bac1bd671bb75bec16c5cfb217b590b0)

---

## WildAWM-4B

WildAWM-4B is a Qwen3.5-4B agent checkpoint post-trained on WildAWM cross-interface computer tasks that mix web, MCP and CLI actions, served text-only with SGLang.

- Catalog URL: https://awesomecua.com/resources/url-3f0e524544c55025c9d9/
- Original source: https://huggingface.co/ChilleD/WildAWM-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: cross-app, tool-integration, long-horizon, reinforcement-learning
- Evidence checked: 2026-11-10T06:29:28Z
- ID: url:3f0e524544c55025c9d9

### Limitations

Release contains safetensors weights, tokenizer and chat template for Qwen3.5-4B; the card gives an SGLang launch command with Qwen tool-call and reasoning parsers. A sibling WildAWM-35B-A3B checkpoint and the ChilleD/WildAWM task set accompany it.

- Record JSON: https://awesomecua.com/resources/url-3f0e524544c55025c9d9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/ChilleD/WildAWM-4B (retrieved 2026-11-10T06:29:28Z; SHA-256 55aec7f035b61c0b6f79d43923ba0151d371696e426b1edb80ca45bef5e74f51)
- https://huggingface.co/api/models/ChilleD/WildAWM-4B (retrieved 2026-11-10T06:29:28Z; SHA-256 55aec7f035b61c0b6f79d43923ba0151d371696e426b1edb80ca45bef5e74f51)

---

## YOLOv11l — UI Groups Detection

A YOLO11 fine-tune that detects UI groups such as toolbars and tab groups in macOS application screenshots for accessibility analysis.

- Catalog URL: https://awesomecua.com/resources/url-6106415bee936ef638aa/
- Original source: https://huggingface.co/MacPaw/yolov11l-ui-groups-detection
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T21:09:03Z
- ID: url:6106415bee936ef638aa

### Limitations

The repository includes a model weight file, and the card names Screen2AX-Group as its training data. The card declares an AGPL-3.0 license.

- Record JSON: https://awesomecua.com/resources/url-6106415bee936ef638aa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: agpl-3.0 — https://huggingface.co/MacPaw/yolov11l-ui-groups-detection

### Primary evidence

- https://huggingface.co/api/models/MacPaw/yolov11l-ui-groups-detection (retrieved 2026-11-09T21:09:03Z; SHA-256 78c9845861cf2b1e8dc78a249f1f3ec39915ef0c34ee3d73dc2c53c584cd0450)
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-groups-detection (retrieved 2026-11-09T21:09:03Z; SHA-256 78c9845861cf2b1e8dc78a249f1f3ec39915ef0c34ee3d73dc2c53c584cd0450)
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-groups-detection (retrieved 2026-11-09T21:12:48Z; SHA-256 78c9845861cf2b1e8dc78a249f1f3ec39915ef0c34ee3d73dc2c53c584cd0450)
- https://huggingface.co/api/models/macpaw-research/yolov11l-ui-groups-detection (retrieved 2026-11-09T21:12:48Z; SHA-256 78c9845861cf2b1e8dc78a249f1f3ec39915ef0c34ee3d73dc2c53c584cd0450)

---

## yolov11l-ui-elements-detection

A YOLO11 fine-tune that locates five kinds of interface elements in macOS application screenshots to support accessibility metadata generation.

- Catalog URL: https://awesomecua.com/resources/url-5d824526d56f179d3d51/
- Original source: https://huggingface.co/MacPaw/yolov11l-ui-elements-detection
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T19:57:37Z
- ID: url:5d824526d56f179d3d51

### Limitations

The release contains a .pt checkpoint and lists Screen2AX-Element as its training dataset. The card declares an AGPL-3.0 license and shows inference with Ultralytics.

- Record JSON: https://awesomecua.com/resources/url-5d824526d56f179d3d51/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: agpl-3.0 — https://huggingface.co/MacPaw/yolov11l-ui-elements-detection

### Primary evidence

- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection (retrieved 2026-11-09T19:57:37Z; SHA-256 43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c)
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection (retrieved 2026-11-09T19:57:37Z; SHA-256 43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c)
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection (retrieved 2026-11-09T20:02:59Z; SHA-256 43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c)
- https://huggingface.co/api/models/macpaw-research/yolov11l-ui-elements-detection (retrieved 2026-11-09T20:03:00Z; SHA-256 43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c)

---

## ZeroGUI-AndroidLab-7B

ZeroGUI-AndroidLab-7B is a GUI-agent checkpoint associated with training that generates interface tasks, estimates rewards from screenshots, and adapts through online reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/url-f75cab7180d8f5264606/
- Original source: https://huggingface.co/OpenGVLab/ZeroGUI-AndroidLab-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, data-generation, reward-models
- Evidence checked: 2026-11-09T05:05:18Z
- ID: url:f75cab7180d8f5264606

### Limitations

The repository lists model weight shards and names ByteDance-Seed/UI-TARS-7B-DPO as its base model. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-f75cab7180d8f5264606/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/ZeroGUI-AndroidLab-7B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-AndroidLab-7B (retrieved 2026-11-09T05:05:18Z; SHA-256 5b91439037344829e9cf208738938ada2540b956e262252464758752090af141)
- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-AndroidLab-7B (retrieved 2026-11-09T05:05:18Z; SHA-256 5b91439037344829e9cf208738938ada2540b956e262252464758752090af141)

---

## ZeroGUI-OSWorld-7B

A GUI agent checkpoint associated with ZeroGUI, which trains on generated interface tasks using rewards estimated from trajectory screenshots.

- Catalog URL: https://awesomecua.com/resources/url-6ea345c7ba56049476e8/
- Original source: https://huggingface.co/OpenGVLab/ZeroGUI-OSWorld-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, data-generation, reward-models
- Evidence checked: 2026-11-09T05:05:16Z
- ID: url:6ea345c7ba56049476e8

### Limitations

The repository contains safetensors weight shards and tokenizer files. The card names ByteDance-Seed/UI-TARS-7B-DPO as its base model and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-6ea345c7ba56049476e8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/ZeroGUI-OSWorld-7B

### Primary evidence

- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-OSWorld-7B (retrieved 2026-11-09T05:05:16Z; SHA-256 709c47498a1731a5a85d987023ff2eff18fe42d1792796527bdb7c554a8719b9)
- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-OSWorld-7B (retrieved 2026-11-09T05:05:16Z; SHA-256 709c47498a1731a5a85d987023ff2eff18fe42d1792796527bdb7c554a8719b9)

---

## ZHEN-04/CaptchaAgent

ZHEN-04/CaptchaAgent is a 9B computer-use policy trained on interactive CAPTCHA trajectories. It maps screenshots to tool calls and provides SFT and reinforcement-learning checkpoints.

- Catalog URL: https://awesomecua.com/resources/url-fb67af38dce972b398c3/
- Original source: https://huggingface.co/ZHEN-04/CaptchaAgent
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, screen-understanding, reinforcement-learning, safety-security
- Evidence checked: 2026-11-09T19:55:52Z
- ID: url:fb67af38dce972b398c3

### Limitations

The page lists full bf16 weights, tokenizers, processors, and chat templates in SFT and RL subfolders. Access is manually gated under CC-BY-NC-4.0 terms.

- Record JSON: https://awesomecua.com/resources/url-fb67af38dce972b398c3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-4.0 — https://huggingface.co/ZHEN-04/CaptchaAgent

### Primary evidence

- https://huggingface.co/api/models/ZHEN-04/CaptchaAgent (retrieved 2026-11-09T19:55:52Z; SHA-256 52fa568b43b85f62b3b377f5ec8baffc5da1d14fefd415941f3f2d593527a64f)
- https://huggingface.co/api/models/ZHEN-04/CaptchaAgent (retrieved 2026-11-09T19:55:52Z; SHA-256 52fa568b43b85f62b3b377f5ec8baffc5da1d14fefd415941f3f2d593527a64f)

---

## ZonUI-3B checkpoint

Qwen2.5-VL-3B-based GUI grounding checkpoint that predicts click locations from screenshots and text instructions across desktop, mobile and web screens.

- Catalog URL: https://awesomecua.com/resources/url-c8c046847f829fea4821/
- Original source: https://huggingface.co/zonghanHZH/ZonUI-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-10-18T04:35:16Z
- ID: url:c8c046847f829fea4821

### Limitations

The Hub manifest lists four-part PyTorch and Safetensors files as alternative representations of one checkpoint, plus configuration/tokenizer files. The card’s example rescales predicted locations through the resized image dimensions. Apache-2.0 is the model-card weight declaration; the separate code repository has no project-level license in the inspected tree.

- Record JSON: https://awesomecua.com/resources/url-c8c046847f829fea4821/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md

- weights review: Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  Sources: https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md

### Primary evidence

- https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md (retrieved 2026-10-18T04:35:16Z; SHA-256 0dcd557508c07c9569e642a0319e71162b50c7ac6a0449564760ac2d6fffb089)
- https://huggingface.co/api/models/zonghanHZH/ZonUI-3B (retrieved 2026-10-18T04:33:22Z; SHA-256 c419027b878ed7ebebd91f89a7395506d2f2aa8e1745918833cf1bac9e0a054e)
- https://raw.githubusercontent.com/Han1018/ZonUI-3B/HEAD/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 9918231748808ea1af93b559b0a511f1f9687689766a09b43c7726f14f27248b)
- https://api.github.com/repos/Han1018/ZonUI-3B (retrieved 2026-10-17T15:37:02Z; SHA-256 7e3e63c1f2b38daaf4bb222b51fa5ae6594a0185e618723371e044bee6f05f7d)
- https://api.github.com/repos/Han1018/ZonUI-3B/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:20Z; SHA-256 d4c1500dbaceba738565d766e7b7453abbb6c0b12edaa34e5600d351214bfe4f)

---

## ACT-1

Adept's 2022 action transformer, previewed in demo videos of a Chrome extension that reads a custom rendering of the page and clicks, types and scrolls on its UI elements to carry out typed requests.

- Catalog URL: https://awesomecua.com/resources/url-f885d17601171253d25e/
- Original source: https://www.adept.ai/blog/act-1
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction
- Evidence checked: 2026-10-20T04:02:47Z
- ID: url:f885d17601171253d25e

### Limitations

Announced by the Adept Team on 14 September 2022. The post shows sped-up demo videos only (a Salesforce workflow, spreadsheet work, tasks spanning several tools, looking up information online, and correcting a mistake after one piece of human feedback) and promises a later technical post. It names no weights, API, training data or benchmark results. The live page answers HTTP 403 to scripts (Cloudflare challenge), so the reviewed receipt is the 14 August 2025 Wayback capture.

- Record JSON: https://awesomecua.com/resources/url-f885d17601171253d25e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://web.archive.org/web/20250814162158id_/https://www.adept.ai/blog/act-1 (retrieved 2026-10-20T04:02:47Z; SHA-256 2ae4f05ccf826141f5c315c977ebf6a058737f0760f55eb5f0125894d0b27fa0)

---

## Adept Fuyu-Heavy

Adept multimodal model that scales up the Fuyu architecture for digital agents, aimed mainly at UI understanding; Adept reports MMMU, VQAv2, AI2D and ChartQA scores against Gemini models.

- Catalog URL: https://awesomecua.com/resources/url-1a20a291c766bd4e6861/
- Original source: https://www.adept.ai/blog/adept-fuyu-heavy
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:1a20a291c766bd4e6861

### Limitations

Announced on January 24, 2024 as the model for Adept's enterprise product. The post includes text, chat and multimodal benchmark tables and a UI-understanding demo video.

- Record JSON: https://awesomecua.com/resources/url-1a20a291c766bd4e6861/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://web.archive.org/web/2026/https://www.adept.ai/blog/adept-fuyu-heavy (retrieved 2026-11-10T03:01:15Z; SHA-256 459e710e483cb39df69f015dbd5572e171acfc64b8d20ea44d94409716f285f1)

---

## ARPO UI-TARS-1.5-7B checkpoint

UI-TARS-1.5-7B-derived checkpoint trained with ARPO on OSWorld desktop tasks.

- Catalog URL: https://awesomecua.com/resources/url-db6fc5f29f186d13991c/
- Original source: https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T04:27:12Z
- ID: url:db6fc5f29f186d13991c

### Limitations

The public Hub manifest lists four Safetensors shards, an index and configuration/tokenizer files. No weight license is declared, despite Apache-2.0 being established for the separate code repository.

- Record JSON: https://awesomecua.com/resources/url-db6fc5f29f186d13991c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- weights review: The inspected model card contains no checkpoint-license declaration. The code repository Apache license is not transferred to weights.
  Sources: https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B/raw/2c5604d86c529843ef346698edcf33b170c1e817/README.md

### Primary evidence

- https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 839b2de0e0c614fe8d2df4782d0f6a6e7d33f5c60d8020c9d4a01c61d533f39e)
- https://huggingface.co/api/models/Fanbin/ARPO_UITARS1.5_7B (retrieved 2026-10-18T04:33:21Z; SHA-256 6e19a5339c4e52ca3753cce26ac2034883b96f5cb26383a4b41bc87a5fbf5bf6)
- https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B/raw/2c5604d86c529843ef346698edcf33b170c1e817/README.md (retrieved 2026-10-18T04:35:16Z; SHA-256 b6957fad37a7995e9dde4c7d4a4e0f6e2153b85354b2d234587c2a94ff95d0bd)

---

## browserground

browserground is a compact Qwen3-VL-2B LoRA visual UI-grounding model that maps screenshots and text targets to bounding-box JSON.

- Catalog URL: https://awesomecua.com/resources/github-renezander030-browserground/
- Original source: https://github.com/renezander030/browserground
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:renezander030/browserground

- Record JSON: https://awesomecua.com/resources/github-renezander030-browserground/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/renezander030/browserground/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 d8e153a44312b17fb6e4e3b1aaa7089cfb46f64a87e2e9fd90dc187d4e640608)

---

## BU-30B-A3B-Preview

Browser Use's open-weight browser-agent model, fine-tuned from Qwen3-VL-30B-A3B-Instruct (30B total, 3B active parameters) to serve as the LLM of the browser-use library through BU Cloud or vLLM.

- Catalog URL: https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/
- Original source: https://huggingface.co/browser-use/bu-30b-a3b-preview
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-18T11:36:28Z
- ID: url:2c4b53bc04f33578e9b8

### Limitations

A preview release. The Hub API at revision 28f795cd lists 13 BF16 safetensors shards (31,070,754,032 parameters) in the Qwen3VLMoeForConditionalGeneration architecture; access is open. The card gives a 65,536-token context and quickstarts for BU Cloud (API key) and a local vLLM server, but no benchmark results, training data or training method, so its capability claims were not checked. The card metadata declares no license. The repository's LICENSE is a modified MIT text that withholds all rights from anyone whose company or employer has global consolidated annual revenue above US$1 million (measured for the preceding month), and points them to a commercial license or the hosted service instead.

- Record JSON: https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Modified MIT License (Browser Use, revenue-restricted) — https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

- weights review: The card metadata has no license field. The repository LICENSE is a custom modified MIT text with a revenue restriction, so it is recorded verbatim by name rather than as SPDX MIT.
  Sources: https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

### Primary evidence

- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/README.md (retrieved 2026-10-18T11:36:28Z; SHA-256 a500e70f875f4204c7711df18b46a7e9171c2ac7e3f7569dd0826cf11f4d2587)
- https://huggingface.co/api/models/browser-use/bu-30b-a3b-preview (retrieved 2026-10-18T11:36:30Z; SHA-256 48085eded704d2a53bc4439b3a904d5c4146bd3b29903fcaf55f34d0b24d0a9b)
- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE (retrieved 2026-10-18T11:36:30Z; SHA-256 26272dfb472cc79cdc667dd962b8876b8087297ee7cc9737291b428eb3bfc32e)

---

## Claude 3.7 Sonnet

A Claude release with an optional extended-thinking mode. Anthropic describes its mouse and keyboard computer-use capability and reports OSWorld evaluation results.

- Catalog URL: https://awesomecua.com/resources/url-63264f7cd4510d96e486/
- Original source: https://www.anthropic.com/research/visible-extended-thinking
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: evaluation
- Evidence checked: 2026-11-09T06:16:38Z
- ID: url:63264f7cd4510d96e486

### Limitations

The article says developers can set a thinking budget and describes longer computer-use runs. It also describes a screen-pixel and button-control game experiment.

- Record JSON: https://awesomecua.com/resources/url-63264f7cd4510d96e486/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.anthropic.com/research/visible-extended-thinking (retrieved 2026-11-09T06:16:38Z; SHA-256 6281ff5790e8d6b3fb014cbc888054bbf4c6f6c49b7caa00061c0ffd0e0db8b3)

---

## Claude Computer Use

Claude tool capability for screenshot-based computer interaction.

- Catalog URL: https://awesomecua.com/resources/url-57f17b7d0c18b2d7c8bf/
- Original source: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: planning, grounding
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:57f17b7d0c18b2d7c8bf

- Record JSON: https://awesomecua.com/resources/url-57f17b7d0c18b2d7c8bf/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool (retrieved 2026-10-16T06:38:27Z; SHA-256 de16b4fd611982cfaa160cb0fbdc1b0f0559b90983e452964527704a6de4e72d)

---

## Claude Opus 5

Claude Opus 5 is a general model whose release page reports computer-use performance on OSWorld 2.0 and describes agent work across browser and business tasks.

- Catalog URL: https://awesomecua.com/resources/url-c34a327604b5be4a7c98/
- Original source: https://www.anthropic.com/news/claude-opus-5
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, web
- Topics: evaluation, automation, industry
- Evidence checked: 2026-11-09T06:16:32Z
- ID: url:c34a327604b5be4a7c98

### Limitations

The release page presents OSWorld 2.0 results as Anthropic's claims and includes customer reports about browser-based checking and workflow automation.

- Record JSON: https://awesomecua.com/resources/url-c34a327604b5be4a7c98/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.anthropic.com/news/claude-opus-5 (retrieved 2026-11-09T06:16:32Z; SHA-256 1bd93f18baf22edcdac06587e18f6d3e369a18cd37fad64fdd0e09286967982b)

---

## Claude Sonnet 4.5

Claude Sonnet 4.5 is a general model available through an API. Anthropic reports its computer-use performance on OSWorld and demonstrates browser tasks.

- Catalog URL: https://awesomecua.com/resources/url-18816edf464a073a0120/
- Original source: https://www.anthropic.com/news/claude-sonnet-4-5
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, web, desktop
- Topics: evaluation, web-navigation, screen-understanding
- Evidence checked: 2026-11-09T05:05:11Z
- ID: url:18816edf464a073a0120

### Limitations

The page says developers can access the model as claude-sonnet-4-5 through the Claude API. Its computer-use result and browser demonstration are publisher reports.

- Record JSON: https://awesomecua.com/resources/url-18816edf464a073a0120/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.anthropic.com/news/claude-sonnet-4-5 (retrieved 2026-11-09T05:05:11Z; SHA-256 59443a1408f6f5f4930888cefb8a19bf954457cc6f2edd6c05101373c67977f3)

---

## Claude Sonnet 4.6

A general model whose release documents computer use through visual observation, mouse actions, and keyboard input, with OSWorld evaluation and prompt-injection testing.

- Catalog URL: https://awesomecua.com/resources/url-c4a45eed67ee9087aae3/
- Original source: https://www.anthropic.com/news/claude-sonnet-4-6
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web
- Topics: automation, evaluation, safety-security
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:c4a45eed67ee9087aae3

### Limitations

Anthropic says the model is available through its platform and describes OSWorld-Verified as its computer-use evaluation. The page also discusses navigating spreadsheets and multi-step web forms.

- Record JSON: https://awesomecua.com/resources/url-c4a45eed67ee9087aae3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.anthropic.com/news/claude-sonnet-4-6 (retrieved 2026-11-09T05:05:17Z; SHA-256 581d5cc0335db4ff2f729d78ad7ad2999f462e828f417f91d4e406d6a64b6f98)

---

## CombatVLA

CombatVLA is a vision-language-action model and action tracker for real-time combat control in 3D action role-playing PC games.

- Catalog URL: https://awesomecua.com/resources/github-chenvoid-combatvla/
- Original source: https://github.com/ChenVoid/CombatVLA
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: action-prediction, video, efficiency
- Evidence checked: 2026-11-04T13:12:10Z
- ID: github:chenvoid/combatvla

- Record JSON: https://awesomecua.com/resources/github-chenvoid-combatvla/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ChenVoid/CombatVLA/HEAD/README.md (retrieved 2026-11-04T13:12:10Z; SHA-256 d398c8cec4d5e0625b71ecac6eb484a63d5ff077e57dbfaaa8704def6899e698)

---

## ConClick

ConClick is a GUI grounding model trained with coordinate supervision and target distractor ranking. Its ReClick inference method revisits candidate screen regions before choosing a click.

- Catalog URL: https://awesomecua.com/resources/github-zhangruotian-conclick/
- Original source: https://github.com/zhangruotian/ConClick
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-11-09T06:16:34Z
- ID: github:zhangruotian/conclick

### Limitations

The repository contains training, inference and evaluation scripts and links the released ConClick-8B checkpoint and ConClick-Data dataset. The README specifies Python 3.12, an NVIDIA GPU and Apache-2.0 code licensing.

- Record JSON: https://awesomecua.com/resources/github-zhangruotian-conclick/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/README.md (retrieved 2026-11-09T06:16:34Z; SHA-256 595327cf11b726cba987f4016b92036769373cce48a0ea1d4b9e18471a40953e)
- https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/LICENSE (retrieved 2026-11-09T06:13:38Z; SHA-256 cfe6fe1994b4e2203788d7e7d85cea664802fa2d67b10cf574d4d95eb5c75e67)

---

## DiMo-GUI

GUI grounding research using modality-aware visual reasoning and test-time scaling.

- Catalog URL: https://awesomecua.com/resources/github-vivo-dimo-gui/
- Original source: https://github.com/vivo/DiMo-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, efficiency
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:vivo/dimo-gui

- Record JSON: https://awesomecua.com/resources/github-vivo-dimo-gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/readme.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4f578ecd5cbba12797586892a9190e480291bd267a180f0ce56847764eaac524)
- https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 d1a708ddcd4afc4e40a5d66f2d56835a12d815515ab6a61578e541ed2c0483bb)

---

## Fintor/Fintor-GUI-S2

Fintor-GUI-S2 is a GUI grounding checkpoint fine-tuned from UI-TARS-7B-DPO on OS-Copilot data. Its card reports ScreenSpot Pro and v2 evaluations.

- Catalog URL: https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/
- Original source: https://huggingface.co/Fintor/Fintor-GUI-S2
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:0b3bb9fac5b0ba9777b8

### Limitations

The card says training used SFT and LoRA and declares an Apache 2.0 license. The repository file list contains Safetensors weight shards and processor files.

- Record JSON: https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Fintor/Fintor-GUI-S2

### Primary evidence

- https://huggingface.co/api/models/Fintor/Fintor-GUI-S2 (retrieved 2026-11-09T05:05:17Z; SHA-256 d3c82db971b3898d72b9d1ad17792d457c555bef11e83c2a26ad3e4017d7129e)
- https://huggingface.co/api/models/Fintor/Fintor-GUI-S2 (retrieved 2026-11-09T05:05:17Z; SHA-256 d3c82db971b3898d72b9d1ad17792d457c555bef11e83c2a26ad3e4017d7129e)

---

## Fuyu-8B

Adept's decoder-only multimodal base model that feeds image patches straight into the transformer, released for research on digital agents, UI question answering and screen localization.

- Catalog URL: https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/
- Original source: https://huggingface.co/adept/fuyu-8b
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-19T07:15:27Z
- ID: url:c6e1ffa1f4c6561c3b22

### Limitations

Adjacent: a general image-and-text base model whose card says it was designed for digital agents, UI-based questions and fine-grained localization on screen images, and lists computer control among research uses. The card calls it a raw base model that needs fine-tuning and reports VQAv2, OKVQA, COCO Captions and AI2D scores; GUI or agent evaluation, target platform and training data remain unspecified. Adept's blog post is its only linked description; no paper is linked. The manifest lists two Safetensors shards (9,408,238,592 BF16 parameters per the Hub API). CC BY-NC 4.0 is the card's weights declaration.

- Record JSON: https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-nc-4.0 — https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md

### Primary evidence

- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md (retrieved 2026-10-19T07:15:27Z; SHA-256 8f8beb8b0174e9b661ef5bc795e0342747d0069a590b41167e636172c177c6ff)
- https://huggingface.co/api/models/adept/fuyu-8b/revision/f41defefdb89be0d28cac19d94ce216e37cb6be5 (retrieved 2026-10-19T07:15:26Z; SHA-256 ae28118b1737267db5c334db7f0b492bc5187ac5b975549158c63d392d8acd2e)
- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/config.json (retrieved 2026-10-18T16:12:44Z; SHA-256 cbf11fcb3e60c985b5f5ab8a8e277b17e2910c3060285609dbfbf2354689c8ff)
- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md (retrieved 2026-10-18T16:12:42Z; SHA-256 8f8beb8b0174e9b661ef5bc795e0342747d0069a590b41167e636172c177c6ff)

---

## GELab Zero

Open mobile GUI agent stack pairing a 4B model that runs on consumer hardware with local multi-device infrastructure, an MCP server, and AndroidDaily benchmark tasks.

- Catalog URL: https://awesomecua.com/resources/github-stepfun-ai-gelab-zero/
- Original source: https://github.com/stepfun-ai/gelab-zero
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:stepfun-ai/gelab-zero

- Record JSON: https://awesomecua.com/resources/github-stepfun-ai-gelab-zero/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 462e2b627989a969f7e859e22040a83d38e7c3eac12305d844563b0925f8a787)
- https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 08095ca875809a84572af7129caef5d4f4b052cc32ced7bdeb010fca125e07f0)

---

## Gemini 2.5 Computer Use

Preview Google DeepMind model built on Gemini 2.5 Pro and post-trained for UI control, returning browser and mobile actions from screenshots and recent action history through the Gemini API computer_use tool.

- Catalog URL: https://awesomecua.com/resources/url-44827a16f49e65ba8fb3/
- Original source: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: web-navigation, action-prediction, safety-security
- Evidence checked: 2026-10-18T11:07:00Z
- ID: url:44827a16f49e65ba8fb3

### Limitations

Launch post and model card dated 7 October 2025. The model card says the model is based on Gemini 2.5 Pro (06-2025) with post-training for UI control, is primarily optimized for web browsers, shows promise on mobile UI control and is not yet optimized for OS-level control; its stated knowledge cutoff is January 2025. Benchmark figures on Online-Mind2Web, WebVoyager and AndroidWorld mix self-reported, Browserbase-run and Google-run evaluations. The post states that versions of the model power Project Mariner and the Firebase Testing Agent. This record covers the dated preview release; the Gemini API computer-use capability is recorded separately.

- Record JSON: https://awesomecua.com/resources/url-44827a16f49e65ba8fb3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/ (retrieved 2026-10-18T11:07:00Z; SHA-256 f9481fadf315ecb8e33b7140c3d8d0f917d5b85578bd151c58ccb337617f5694)
- https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Computer-Use-Model-Card.pdf (retrieved 2026-10-18T11:07:02Z; SHA-256 b3f56bc303fcffdc7eb76903843f273565a8eb3a686686cd55195fa2816cc39d)

---

## Gemini Computer Use

Gemini capability for generating interface actions from screenshots.

- Catalog URL: https://awesomecua.com/resources/url-879d4e3e75e83582bde6/
- Original source: https://ai.google.dev/gemini-api/docs/computer-use
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: planning, grounding
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:879d4e3e75e83582bde6

- Record JSON: https://awesomecua.com/resources/url-879d4e3e75e83582bde6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://ai.google.dev/gemini-api/docs/computer-use (retrieved 2026-10-16T06:38:27Z; SHA-256 e7062cfb4c0948d3a2274843f9f493f34cb40dfd634371408086df6141a0e036)

---

## GPA-GUI-Detector

GPA-GUI-Detector is a YOLO model that locates interactive elements such as buttons and icons in interface screenshots and returns bounding boxes for automation workflows.

- Catalog URL: https://awesomecua.com/resources/url-87f28e117d95985d5177/
- Original source: https://huggingface.co/Salesforce/GPA-GUI-Detector
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T05:05:18Z
- ID: url:87f28e117d95985d5177

### Limitations

The release provides model.pt and examples using Ultralytics and OmniParser. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-87f28e117d95985d5177/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/Salesforce/GPA-GUI-Detector

### Primary evidence

- https://huggingface.co/api/models/Salesforce/GPA-GUI-Detector (retrieved 2026-11-09T05:05:18Z; SHA-256 a21e0ffb0cfc81e8b286ddec02d510261a16fc33eea73dd50aa881dd39e33f65)
- https://huggingface.co/api/models/Salesforce/GPA-GUI-Detector (retrieved 2026-11-09T05:05:18Z; SHA-256 a21e0ffb0cfc81e8b286ddec02d510261a16fc33eea73dd50aa881dd39e33f65)

---

## GPT-6 Astra

General OpenAI model whose launch post covers computer use and browsing; OpenAI reports 72.6% on OSWorld 2.0 at about 40 minutes per task, plus ScreenSpot-Pro and Mind2Web results.

- Catalog URL: https://awesomecua.com/resources/url-039a4975e102cb538c36/
- Original source: https://openai.com/index/gpt-6-astra
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, web
- Topics: efficiency, safety-security, web-navigation
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:039a4975e102cb538c36

### Limitations

Access is through ChatGPT plans, the OpenAI API, Microsoft Azure and AWS Bedrock. The post also reports an internal computer-use safety benchmark run in a generic computer-using-agent harness and a Codex harness update for faster computer use.

- Record JSON: https://awesomecua.com/resources/url-039a4975e102cb538c36/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://web.archive.org/web/2026/https://openai.com/index/gpt-6-astra/ (retrieved 2026-11-10T03:01:15Z; SHA-256 d46d07bf2656b2be97a83c844d72ca0d456552ccda48a8b378f23e601dadd079)

---

## GroundAnything

GroundAnything is a 4B parallel-decoding diffusion grounding model for low-latency visual coordinate localization.

- Catalog URL: https://awesomecua.com/resources/github-groundingpi-groundanything/
- Original source: https://github.com/groundingpi/GroundAnything
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-11-04T14:20:13Z
- ID: github:groundingpi/groundanything

- Record JSON: https://awesomecua.com/resources/github-groundingpi-groundanything/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/README.md (retrieved 2026-11-04T14:20:13Z; SHA-256 0ecc01454adad40a97ab0cbe37554e995cc9ba9076f2cd5bf33bb97744c46dac)
- https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/LICENSE (retrieved 2026-11-04T14:23:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## GroundingPI

GroundingPI is a 4B visual grounding foundation model that unifies bounding-box detection, referring expressions, and point localization.

- Catalog URL: https://awesomecua.com/resources/github-groundingpi-groundingpi/
- Original source: https://github.com/groundingpi/GroundingPI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-11-04T14:20:13Z
- ID: github:groundingpi/groundingpi

- Record JSON: https://awesomecua.com/resources/github-groundingpi-groundingpi/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/README.md (retrieved 2026-11-04T14:20:13Z; SHA-256 65367d8d12e665dad4a2510a14a1e8740fbfe4080baa1911b976ff461be9bcf8)
- https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/LICENSE (retrieved 2026-11-04T14:23:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## GUI-AIMA

GUI-AIMA aligns intrinsic multimodal attention heads with context anchors for data-efficient visual GUI element grounding.

- Catalog URL: https://awesomecua.com/resources/github-sjz5202-gui-aima/
- Original source: https://github.com/sjz5202/GUI-AIMA
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-04T13:12:36Z
- ID: github:sjz5202/gui-aima

- Record JSON: https://awesomecua.com/resources/github-sjz5202-gui-aima/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/README.md (retrieved 2026-11-04T13:12:36Z; SHA-256 46a4cb589fb2fdccae60ae3078e4a1d19f9804238b0e3884bc7f056b6ab88b34)
- https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/LICENSE (retrieved 2026-11-04T13:22:43Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## GUI-Libra 3B

GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct (about 4.07B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:ae8e3fa5a67a608804f8

### Limitations

The Hub manifest at revision 98ec8af3 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-3B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

### Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-3B/revision/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f (retrieved 2026-10-18T15:55:30Z; SHA-256 2cae2eed1c4d3c6551b737d48d7cfaad1c87413292530753c0ea80a8a1877755)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab)

---

## GUI-Libra 4B

GUI-Libra checkpoint fine-tuned from Qwen3-VL-4B-Instruct (about 4.83B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:9082bb5effe5d1a1cada

### Limitations

The Hub manifest at revision 35fc6d34 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

### Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-4B/revision/35fc6d34d1ffce801baefb0b693c5be13c4399eb (retrieved 2026-10-18T15:55:30Z; SHA-256 0a1b2bbd4ddab8a2b23af66e43053ffca379d14d29168de8e7510f5df0495dda)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308)

---

## GUI-Libra 7B

GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct (about 8.29B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-f52794224f9541fd9eb3/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:f52794224f9541fd9eb3

### Limitations

The Hub manifest at revision 0355b647 lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-7B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-f52794224f9541fd9eb3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

### Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-7B/revision/0355b647f41136c65bd6c7f6705fba8e5a2e250a (retrieved 2026-10-18T15:55:30Z; SHA-256 3e6048b720e7dc0e10a88eb5b34804a8e063cfa255813281157bce9dbe7981fc)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d)

---

## GUI-Libra 8B

GUI-Libra checkpoint fine-tuned from Qwen3-VL-8B-Instruct (about 8.77B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-6694391b0cf50389d2e9/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:6694391b0cf50389d2e9

### Limitations

The Hub manifest at revision 15ee285b lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-6694391b0cf50389d2e9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

### Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-8B/revision/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3 (retrieved 2026-10-18T15:55:31Z; SHA-256 8a17da30a39508a921bbe7be37ee686ad8517582667cc905785393291c94e78f)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d)

---

## GUI-Owl 1.5 2B Instruct

Smallest instruct checkpoint of GUI-Owl 1.5, a Qwen3-VL-based native GUI agent family from Mobile-Agent-v3.5 for desktop, mobile and browser tasks, usable alone or as a role in that framework.

- Catalog URL: https://awesomecua.com/resources/url-0b94b29f2afbfe8a3abb/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, tool-integration
- Evidence checked: 2026-10-18T12:04:43Z
- ID: url:0b94b29f2afbfe8a3abb

### Limitations

Hub API at revision 528ceaec lists one BF16 safetensors file (about 2.13B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card is written for the whole GUI-Owl 1.5 family (instruct and thinking variants from 2B to 32B) and links the X-PLUG/MobileAgent repository; its tool/MCP, memory and multi-agent claims are family-level. For this checkpoint the card reports 43.5 on OSWorld-Verified, 67.9 on AndroidWorld, 33.0 on OSWorld-MCP, 31.3 on Mobile-World and 25.8 on WindowsAA; these are publisher measurements. The card declares MIT for the checkpoint; it gives no Hub base_model metadata.

- Record JSON: https://awesomecua.com/resources/url-0b94b29f2afbfe8a3abb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md (retrieved 2026-10-18T12:04:43Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-2B-Instruct/revision/528ceaec795bbfbe6103bd79e03db849feadfb24 (retrieved 2026-10-18T12:04:43Z; SHA-256 e4255782c39b634789d8bf608acb5d87360fda8ff3f107fb065f465af98fb5c3)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md (retrieved 2026-10-18T12:04:43Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)

---

## GUI-Owl 1.5 32B Instruct

Instruct variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.

- Catalog URL: https://awesomecua.com/resources/url-6a943fb3667791b6cdb4/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, planning, tool-integration, memory
- Evidence checked: 2026-10-18T12:14:46Z
- ID: url:6a943fb3667791b6cdb4

### Limitations

The card lists 2B, 4B, 8B and 32B instruct and 8B and 32B thinking variants; the 32B thinking checkpoint is a separate repository. The Hub manifest lists 14 Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 33,357,390,064 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- Record JSON: https://awesomecua.com/resources/url-6a943fb3667791b6cdb4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md (retrieved 2026-10-18T12:14:46Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-32B-Instruct (retrieved 2026-10-18T12:14:45Z; SHA-256 b5fe375afd055e9139544f53bd58f72568fdab2fb0c4d70bea1d247ec4f8c4bc)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md (retrieved 2026-10-18T12:14:46Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)

---

## GUI-Owl 1.5 32B Think

Thinking variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.

- Catalog URL: https://awesomecua.com/resources/url-e0e4712ee701f652bf31/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, planning, tool-integration, memory
- Evidence checked: 2026-10-18T15:33:29Z
- ID: url:e0e4712ee701f652bf31

### Limitations

The card's tables label this checkpoint GUI-Owl-1.5-32B-Thinking and describe the thinking models as the larger variants for tasks that need planning and reflection; the 32B instruct checkpoint is a separate repository. The Hub manifest lists 14 Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 33,357,390,064 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- Record JSON: https://awesomecua.com/resources/url-e0e4712ee701f652bf31/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md (retrieved 2026-10-18T15:33:29Z; SHA-256 e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-32B-Think (retrieved 2026-10-18T15:33:29Z; SHA-256 22db276232ececb495d4dae07cc15c7f253387ea10b05b1095f33c256284a60b)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md (retrieved 2026-10-18T15:33:29Z; SHA-256 e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b)

---

## GUI-Owl 1.5 4B Instruct

4B instruct checkpoint of GUI-Owl 1.5, a Qwen3-VL-based native GUI agent family from Mobile-Agent-v3.5 for desktop, mobile and browser tasks, usable alone or as a role in that framework.

- Catalog URL: https://awesomecua.com/resources/url-17a0422036ebea8d4e93/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, tool-integration
- Evidence checked: 2026-10-18T12:24:13Z
- ID: url:17a0422036ebea8d4e93

### Limitations

Hub API at revision 3f061c2c lists two BF16 safetensors shards plus an index (about 4.44B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card is written for the whole GUI-Owl 1.5 family (instruct and thinking variants from 2B to 32B) and links the X-PLUG/MobileAgent repository; its tool/MCP, memory and multi-agent claims are family-level. For this checkpoint the card reports 48.2 on OSWorld-Verified, 69.8 on AndroidWorld, 31.7 on OSWorld-MCP, 32.3 on Mobile-World and 29.4 on WindowsAA; these are publisher measurements. The card declares MIT for the checkpoint; it gives no Hub base_model metadata.

- Record JSON: https://awesomecua.com/resources/url-17a0422036ebea8d4e93/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md (retrieved 2026-10-18T12:24:13Z; SHA-256 e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-4B-Instruct/revision/3f061c2c562cc860c42bf32542a70e07a7ff4840 (retrieved 2026-10-18T12:23:34Z; SHA-256 7e0bd9e15849ccca8d1acd05f5e097400cbc93172e12d7bb06d21bdeed4c8390)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md (retrieved 2026-10-18T12:24:13Z; SHA-256 e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b)

---

## GUI-Owl 1.5 8B Think

Thinking variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.

- Catalog URL: https://awesomecua.com/resources/url-374138c6e18c9f1dd44a/
- Original source: https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, web
- Topics: action-prediction, grounding, planning, tool-integration, memory
- Evidence checked: 2026-10-18T11:59:13Z
- ID: url:374138c6e18c9f1dd44a

### Limitations

The card's tables label this checkpoint GUI-Owl-1.5-8B-Thinking and describe the thinking models as the variants for planning and reflection; the instruct 8B checkpoint is a separate repository. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 8,767,123,696 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- Record JSON: https://awesomecua.com/resources/url-374138c6e18c9f1dd44a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md

### Primary evidence

- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md (retrieved 2026-10-18T11:59:13Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-8B-Think (retrieved 2026-10-18T11:59:13Z; SHA-256 5c42caedff1aa1b8f34f6628a0ce95bac5dc7240b99a8567ba885d6b42922434)
- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md (retrieved 2026-10-18T11:59:13Z; SHA-256 8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8)

---

## GUI-Spotlight

GUI-Spotlight is a think-with-image GUI visual grounding model that iteratively crops and refines focus regions on high-resolution screens.

- Catalog URL: https://awesomecua.com/resources/github-bin123apple-gui-spotlight/
- Original source: https://github.com/bin123apple/GUI_Spotlight
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-04T14:02:35Z
- ID: github:bin123apple/gui_spotlight

- Record JSON: https://awesomecua.com/resources/github-bin123apple-gui-spotlight/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/README.md (retrieved 2026-11-04T14:02:35Z; SHA-256 9beec1999aa27cc05918cb3f3e092a0f3155418bcfd8ecdefd2ffddbcae39cc5)
- https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/LICENSE (retrieved 2026-11-04T14:07:23Z; SHA-256 13ffcb890d9bf315bc89617d32a4a4fb6e82738fcb5e0d24d99d7a4975ae4e07)

---

## GUI-Vid

GUI-Vid is a released video language model retrained on GUI-World for understanding graphical interfaces in video.

- Catalog URL: https://awesomecua.com/resources/url-579b1c0ceac633eeb328/
- Original source: https://huggingface.co/ONE-Lab/GUI-Vid
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, video
- Evidence checked: 2026-11-09T05:05:09Z
- ID: url:579b1c0ceac633eeb328

### Limitations

The repository contains a checkpoint file, ckpt_latest.pth. The card declares a CC-BY-4.0 license and links to the GUI-World repository for usage guidance.

- Record JSON: https://awesomecua.com/resources/url-579b1c0ceac633eeb328/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: cc-by-4.0 — https://huggingface.co/ONE-Lab/GUI-Vid

### Primary evidence

- https://huggingface.co/api/models/ONE-Lab/GUI-Vid (retrieved 2026-11-09T05:05:09Z; SHA-256 8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236)
- https://huggingface.co/api/models/ONE-Lab/GUI-Vid (retrieved 2026-11-09T05:05:09Z; SHA-256 8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236)
- https://huggingface.co/api/models/shuaishuaicdp/GUI-Vid (retrieved 2026-11-09T05:26:45Z; SHA-256 8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236)
- https://huggingface.co/api/models/ONE-Lab/GUI-Vid (retrieved 2026-11-09T05:26:45Z; SHA-256 8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236)

---

## gWorld (GuiWorld)

gWorld is an open-weight 8B/32B mobile GUI world model that predicts next-step screen states via renderable web code generation.

- Catalog URL: https://awesomecua.com/resources/github-trillion-labs-gworld/
- Original source: https://github.com/trillion-labs/gWorld
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, mobile-navigation, action-prediction
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:trillion-labs/gworld

- Record JSON: https://awesomecua.com/resources/github-trillion-labs-gworld/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/trillion-labs/gWorld/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 f5ae4cdd0c25f724765729c5a9e860906e730d8c395b9c3fff65af8b14ae0803)

---

## HobbyLM-1B Computer Use

An on-device LoRA adapter that turns English requests and Mac state into single actions executed by a companion app, with training code and evaluation records.

- Catalog URL: https://awesomecua.com/resources/url-12470a40c8f82ef0294a/
- Original source: https://huggingface.co/Hobbylm/hobbylm-1B-computer-use
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: action-prediction, automation, state-tracking
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:12470a40c8f82ef0294a

### Limitations

The repository lists adapter weights, app code, training data, and evaluation files. The card names HobbyLM-1B Instruct as its base model, uses Apple MLX, and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-12470a40c8f82ef0294a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hobbylm/hobbylm-1B-computer-use

### Primary evidence

- https://huggingface.co/api/models/Hobbylm/hobbylm-1B-computer-use (retrieved 2026-11-09T05:05:20Z; SHA-256 9f0e1701741e7e211d3a754c76cbb157f5412b240dd269b63b3b525758d72451)
- https://huggingface.co/api/models/Hobbylm/hobbylm-1B-computer-use (retrieved 2026-11-09T05:05:20Z; SHA-256 9f0e1701741e7e211d3a754c76cbb157f5412b240dd269b63b3b525758d72451)

---

## Holo Model Family

H computer-use model family and its release-specific access options.

- Catalog URL: https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/
- Original source: https://hcompany.ai/research/models
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: planning, grounding
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:c0bd07d82ce25ad1d99d

- Record JSON: https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://hcompany.ai/research/models (retrieved 2026-10-16T06:38:27Z; SHA-256 84ce0fd682367a6dac5cc5abc39d5c877556024bbf6ffdad30f76fc2ec08523f)

---

## Holo-3.1-35B-A3B-FP8

An FP8 checkpoint in the Holo3.1 vision-language model family for computer-use agents. The card describes web, desktop and mobile tasks and links to deployment guidance.

- Catalog URL: https://awesomecua.com/resources/url-566bd1469811983951f3/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: action-prediction, grounding, mobile-navigation, web-navigation
- Evidence checked: 2026-11-09T05:05:07Z
- ID: url:566bd1469811983951f3

### Limitations

The repository lists sharded safetensors weights, configuration and processor files. The card names Qwen 3.5 family base models and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-566bd1469811983951f3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-FP8

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-FP8 (retrieved 2026-11-09T05:05:07Z; SHA-256 fc6409237ca18993f31b0f8b2f06b1134e0aab9adb41fdc75a79ecf9640e8e1b)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-FP8 (retrieved 2026-11-09T05:05:07Z; SHA-256 fc6409237ca18993f31b0f8b2f06b1134e0aab9adb41fdc75a79ecf9640e8e1b)

---

## Holo-3.1-35B-A3B-GGUF

A quantized Holo3.1 vision-language checkpoint for computer-use agents across web, desktop, and mobile interfaces, with UI grounding and function calling.

- Catalog URL: https://awesomecua.com/resources/url-ee3a18b51eb44d94a94b/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-GGUF
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: grounding, mobile-navigation, tool-integration
- Evidence checked: 2026-11-09T05:05:19Z
- ID: url:ee3a18b51eb44d94a94b

### Limitations

The card lists BF16, FP8, NVFP4, and Q4 GGUF variants for Holo3.1-35B-A3B. It declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-ee3a18b51eb44d94a94b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-GGUF

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-GGUF (retrieved 2026-11-09T05:05:19Z; SHA-256 ca4497b6c786b1fde2f3a37aa3af70c1f169c458bdc87908d7cc206e788d6ce8)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-GGUF (retrieved 2026-11-09T05:05:19Z; SHA-256 ca4497b6c786b1fde2f3a37aa3af70c1f169c458bdc87908d7cc206e788d6ce8)

---

## Holo-3.1-35B-A3B-NVFP4

Holo-3.1-35B-A3B-NVFP4 is a quantized computer-use vision-language checkpoint for web, desktop and mobile tasks, with function-calling support.

- Catalog URL: https://awesomecua.com/resources/url-aeffabf23c16f8cf2139/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-NVFP4
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: web-navigation, mobile-navigation, grounding, tool-integration
- Evidence checked: 2026-11-09T05:05:05Z
- ID: url:aeffabf23c16f8cf2139

### Limitations

The card says the NVFP4 W4A16 weights were made with NVIDIA Model-Optimizer and tested with vLLM. It declares Apache 2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-aeffabf23c16f8cf2139/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-NVFP4

### Primary evidence

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-NVFP4 (retrieved 2026-11-09T05:05:05Z; SHA-256 c3c77ec3402045790703b25448dfee1ffe4bb99cb465e972e9c0afe76067fff3)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-NVFP4 (retrieved 2026-11-09T05:05:05Z; SHA-256 c3c77ec3402045790703b25448dfee1ffe4bb99cb465e972e9c0afe76067fff3)

---

## Holo2 4B

A Qwen3-VL-based checkpoint for navigation and multi-step GUI actions across web, desktop and mobile interfaces.

- Catalog URL: https://awesomecua.com/resources/url-16a51d9e725ad5a5c629/
- Original source: https://huggingface.co/Hcompany/Holo2-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:16a51d9e725ad5a5c629

### Limitations

Two public safetensors shards are present and this 4B model card declares Apache-2.0. The same card assigns different terms to the 30B family member, so the 4B declaration is not generalized to the family.

- Record JSON: https://awesomecua.com/resources/url-16a51d9e725ad5a5c629/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 32232445026dc93113beb6b23d3e43da44d6288a67501f8f0023a78a43efb100)
- https://huggingface.co/api/models/Hcompany/Holo2-4B (retrieved 2026-10-17T04:07:18Z; SHA-256 bb870c78f3075002ae42a7d1f392fda048fa31a58c865290b2a9b4a1137c6dd3)
- https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 32232445026dc93113beb6b23d3e43da44d6288a67501f8f0023a78a43efb100)

---

## Holo2 8B

Holo2 checkpoint fine-tuned from Qwen3-VL-8B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile interfaces.

- Catalog URL: https://awesomecua.com/resources/url-38942453b2b7018c0d01/
- Original source: https://huggingface.co/Hcompany/Holo2-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction, reinforcement-learning
- Evidence checked: 2026-10-18T15:47:52Z
- ID: url:38942453b2b7018c0d01

### Limitations

The manifest lists four Safetensors shards. The card declares Apache-2.0 for the 4B and 8B sizes but research-only, non-commercial terms for Holo2-30B-A3B, so this declaration is not generalized to the family. The navigation and localization scores on the card were measured by the publisher inside its Surfer 2 agent.

- Record JSON: https://awesomecua.com/resources/url-38942453b2b7018c0d01/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md

- weights review: Publisher model-card declaration for the 8B checkpoint; other family sizes, code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md (retrieved 2026-10-18T15:47:52Z; SHA-256 938f9ed77534e28e978c3c6ee515d6c8fbddda9571d9c2be5c76f9cdd5fc3ac4)
- https://huggingface.co/api/models/Hcompany/Holo2-8B (retrieved 2026-10-18T15:47:52Z; SHA-256 6ddb8e359f1fc09d25092eefafd6fe90c746caf135ddf5d0f785dadb840cac97)
- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/config.json (retrieved 2026-10-18T15:47:52Z; SHA-256 caa3330852b71c95f7b8a6dda596ede5cf8edfc81b13b4970506092bae854a0f)
- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md (retrieved 2026-10-18T15:47:52Z; SHA-256 938f9ed77534e28e978c3c6ee515d6c8fbddda9571d9c2be5c76f9cdd5fc3ac4)

---

## Holo3

Holo3 is a computer-use model family trained on synthetic navigation and enterprise workflows. Its publisher reports desktop benchmark results and offers inference access and an open checkpoint.

- Catalog URL: https://awesomecua.com/resources/url-a03c649e4b14e293e2dd/
- Original source: https://hcompany.ai/holo3
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: automation, industry, reinforcement-learning, workflow
- Evidence checked: 2026-11-09T05:04:58Z
- ID: url:a03c649e4b14e293e2dd

### Limitations

The page says Holo3-35B-A3B weights are available on Hugging Face under the Apache2 license. It says all models are available through an inference API.

- Record JSON: https://awesomecua.com/resources/url-a03c649e4b14e293e2dd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://hcompany.ai/holo3 (retrieved 2026-11-09T05:04:58Z; SHA-256 06c345c806f02d24d403572193c43c68cf56766e7abc555cae5fc538fc90274d)

---

## Holo3.1 0.8B

Smallest checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.

- Catalog URL: https://awesomecua.com/resources/url-df84f6a103123387b0dd/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-0.8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T16:21:33Z
- ID: url:df84f6a103123387b0dd

### Limitations

Hub API at revision 72da4c53 lists one BF16 safetensors file in the Qwen3_5ForConditionalGeneration architecture; the Hub's safetensors metadata counts about 1.11B parameters against the publisher's 0.8B label. The repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. H Company's models page lists Holo3.1 at 0.8B, 4B, 9B and 35B-A3B under Apache 2.0, and the card declares Apache-2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-df84f6a103123387b0dd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md (retrieved 2026-10-18T16:21:33Z; SHA-256 d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-0.8B/revision/72da4c53b351eb60e10a7022279019633c479292 (retrieved 2026-10-18T16:21:12Z; SHA-256 db1665371386f7fd8bb07753b3e8478a07c55af8b32ac2eb9b7d371dcc140f73)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:10:28Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md (retrieved 2026-10-18T16:21:33Z; SHA-256 d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a)

---

## Holo3.1 4B

4B checkpoint of H Company's Holo3.1 family, a vision-language model for web, desktop and mobile computer-use agents with native function calling, built on a dense Qwen3.5 architecture.

- Catalog URL: https://awesomecua.com/resources/url-90b24afa7bb8b2181205/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T16:02:24Z
- ID: url:90b24afa7bb8b2181205

### Limitations

Hub API at revision 8c88265a lists two BF16 safetensors shards (about 5.17B parameters, including the vision encoder) in the dense Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes and its prose says the Qwen 3.5 family, so base_model is unset. The card lists quantized releases only for the 35B-A3B size. The card declares Apache-2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-90b24afa7bb8b2181205/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md (retrieved 2026-10-18T16:02:24Z; SHA-256 059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-4B/revision/8c88265a5a159bfd1492db9243733dd2e6e04a6e (retrieved 2026-10-18T16:02:03Z; SHA-256 50190a160f8c380aabc1bd4bc2738f357b2bb84e7efbee9a82fca403da13a306)
- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md (retrieved 2026-10-18T16:02:24Z; SHA-256 059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e)

---

## Holo3.1 9B

9B checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.

- Catalog URL: https://awesomecua.com/resources/url-4e9e46b2c7a0a21e130d/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T15:59:40Z
- ID: url:4e9e46b2c7a0a21e130d

### Limitations

Hub API at revision bcd6a36a lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. H Company's models page lists Holo3.1 at 0.8B, 4B, 9B and 35B-A3B under Apache 2.0, and the card declares Apache-2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-4e9e46b2c7a0a21e130d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md

### Primary evidence

- https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md (retrieved 2026-10-18T15:59:40Z; SHA-256 ce1c6c5fa2863e9aac7816be0e14fdbcbfc097787c548259d252fbab489bead2)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-9B/revision/bcd6a36af9f100f57cba28e2bf6481ac3feedf33 (retrieved 2026-10-18T15:58:50Z; SHA-256 8e62bd9b79c31d2d63f42a9c9ee39d6be9902abb31e56617efa91c293e505f91)
- https://hcompany.ai/research/models (retrieved 2026-10-18T15:59:32Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md (retrieved 2026-10-18T15:59:40Z; SHA-256 ce1c6c5fa2863e9aac7816be0e14fdbcbfc097787c548259d252fbab489bead2)

---

## HTLM

HTLM is a compact 350M browser-agent model fine-tuned on Mind2Web for fast on-device and in-browser DOM action prediction.

- Catalog URL: https://awesomecua.com/resources/github-espetro-htlm/
- Original source: https://github.com/espetro/HTLM
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, efficiency
- Evidence checked: 2026-11-04T14:02:47Z
- ID: github:espetro/htlm

- Record JSON: https://awesomecua.com/resources/github-espetro-htlm/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/espetro/HTLM/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/espetro/HTLM/HEAD/README.md (retrieved 2026-11-04T14:02:47Z; SHA-256 4ad3f8e9ff8ec550408684f13c7791448a02dcc347bc4cb773ef5f642a89fad8)
- https://raw.githubusercontent.com/espetro/HTLM/HEAD/LICENSE (retrieved 2026-11-04T14:07:24Z; SHA-256 2806f9c1240c6bad712ef53fb49d810605345290fc261b85984cca211ec5ce16)

---

## inclusionAI/UI-Venus-Navi-7B

A released UI agent checkpoint based on Qwen2.5-VL that takes screenshots and prior actions to predict GUI navigation actions and element locations.

- Catalog URL: https://awesomecua.com/resources/url-6d36e088ada02184c6bc/
- Original source: https://huggingface.co/inclusionAI/UI-Venus-Navi-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, android, desktop
- Topics: grounding, mobile-navigation, reinforcement-learning, action-prediction
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:6d36e088ada02184c6bc

### Limitations

The repository includes model weight shards and a Transformers inference example. The card names reinforcement fine-tuning and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-6d36e088ada02184c6bc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/UI-Venus-Navi-7B

### Primary evidence

- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-7B (retrieved 2026-11-09T05:05:17Z; SHA-256 b18b0a8cfa580610699a62cb81ae3eab759f5c02e368c1d808b97bc9efb1c119)
- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-7B (retrieved 2026-11-09T05:05:17Z; SHA-256 b18b0a8cfa580610699a62cb81ae3eab759f5c02e368c1d808b97bc9efb1c119)

---

## Indeed-UI

A GUI grounding model described for desktop, mobile, and browser interfaces. Its repository provides ScreenSpot-Pro evaluation and zoom-in scripts.

- Catalog URL: https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/
- Original source: https://github.com/intelligence-indeed/Indeed-UI
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, evaluation, screen-understanding
- Evidence checked: 2026-11-09T05:05:15Z
- ID: github:intelligence-indeed/indeed-ui

### Limitations

The README links to an Indeed-UI-32B checkpoint on ModelScope. Evaluation requires local model and ScreenSpot-Pro dataset paths; the README shows an Apache-2.0 license badge.

- Record JSON: https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/intelligence-indeed/Indeed-UI/HEAD/README.md (retrieved 2026-11-09T05:05:15Z; SHA-256 53c56f90c3480d32b821fc1d752529fa5e8d01085f584312126a2cd74a54b7bf)

---

## Indeed-UI-8B

GUI grounding model fine-tuned from GUI-Owl 1.5-8B with grounding data and high-resolution training; the card reports 73.4 on ScreenSpot-Pro, 94.4 on ScreenSpot-V2 and 68.3 on OSWorld-G.

- Catalog URL: https://awesomecua.com/resources/url-26157e2cda7fb73cf99c/
- Original source: https://www.modelscope.cn/models/IntellgenceIndeed/Indeed-UI-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:26157e2cda7fb73cf99c

### Limitations

The ModelScope repository holds four safetensors shards in the Qwen3VLForConditionalGeneration architecture with tokenizer, chat-template and processor configs. The card names no license.

- Record JSON: https://awesomecua.com/resources/url-26157e2cda7fb73cf99c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.modelscope.cn/models/IntellgenceIndeed/Indeed-UI-8B (retrieved 2026-11-10T03:01:15Z; SHA-256 91fbb536bf6488cf4a4b8aafb3470d0a4d7af9b94858d842c31ae238ba72adb4)

---

## InfiGUI-R1 3B

A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.

- Catalog URL: https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/
- Original source: https://huggingface.co/InfiX-ai/InfiGUI-R1-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, android
- Topics: grounding, reinforcement-learning, self-reflection
- Evidence checked: 2026-10-17T02:05:41Z
- ID: url:35b9879a351cc3b3d7d5

### Limitations

The official Hub API resolves the former Reallm-Labs model namespace to InfiX-ai. Two safetensors shards and model/tokenizer files are public and ungated. The card declares Apache-2.0 for this checkpoint; base-model terms remain separate. Its older loading example still uses the prior namespace.

- Record JSON: https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md

### Primary evidence

- https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md (retrieved 2026-10-17T02:05:41Z; SHA-256 73496fb30838ba9ea291bb6d1e14004ac3318ac03a1ae7b5d6044e0dc14fd46f)
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-R1-3B (retrieved 2026-10-17T02:05:41Z; SHA-256 213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0)
- https://huggingface.co/api/models/Reallm-Labs/InfiGUI-R1-3B (retrieved 2026-10-17T02:03:33Z; SHA-256 213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0)
- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 5fd1399c88bdf406e7689765ccf0599b3b7e0ddbed082fa92bffdd7b120bd41a)
- https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md (retrieved 2026-10-17T02:05:41Z; SHA-256 73496fb30838ba9ea291bb6d1e14004ac3318ac03a1ae7b5d6044e0dc14fd46f)
- https://huggingface.co/api/models/Reallm-Labs/InfiGUI-R1-3B (retrieved 2026-10-17T19:15:15Z; SHA-256 213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0)
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-R1-3B (retrieved 2026-10-17T19:15:16Z; SHA-256 213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0)

---

## jadechoghari/Ferret-UI-Llama8b

Llama-3-8B variant of Ferret-UI for understanding interface screenshots, answering questions about selected regions and locating elements with bounding boxes.

- Catalog URL: https://awesomecua.com/resources/url-4b66957b9799a9e3decc/
- Original source: https://huggingface.co/jadechoghari/Ferret-UI-Llama8b
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-09T05:05:02Z
- ID: url:4b66957b9799a9e3decc

### Limitations

The repository file list contains sharded safetensors weights, configuration files and inference code. The card includes examples for region questions and grounding prompts.

- Record JSON: https://awesomecua.com/resources/url-4b66957b9799a9e3decc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/jadechoghari/Ferret-UI-Llama8b (retrieved 2026-11-09T05:05:02Z; SHA-256 818e7ab08f611536bd20dbfd2e3fb3aba6a5fd01d64c34ab6c9069390646d85c)
- https://huggingface.co/api/models/jadechoghari/Ferret-UI-Llama8b (retrieved 2026-11-09T05:05:02Z; SHA-256 818e7ab08f611536bd20dbfd2e3fb3aba6a5fd01d64c34ab6c9069390646d85c)

---

## kev-browser-use

kev-browser-use is a compact 0.6B System-One action model fine-tuned on Mind2Web for low-latency browser element selection.

- Catalog URL: https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/
- Original source: https://github.com/arbazsiddiqui/kev-browser-use
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, efficiency
- Evidence checked: 2026-11-04T14:41:48Z
- ID: github:arbazsiddiqui/kev-browser-use

- Record JSON: https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/README.md (retrieved 2026-11-04T14:41:48Z; SHA-256 daab246d4be8471a7603c12d52d19b4a1c1ddb27870d657efa1facc50d88c92d)
- https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/LICENSE (retrieved 2026-11-04T14:45:11Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Kimi-VL

Moonshot AI open-weight MoE vision-language model with 2.8B activated LLM parameters and a native-resolution encoder; its README reports OSWorld, ScreenSpot-Pro and OSWorld-G results for OS-agent use.

- Catalog URL: https://awesomecua.com/resources/github-moonshotai-kimi-vl/
- Original source: https://github.com/MoonshotAI/Kimi-VL
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T11:14:16Z
- ID: github:moonshotai/kimi-vl

### Limitations

General-purpose vision-language model family (Kimi-VL-A3B-Instruct, Kimi-VL-A3B-Thinking and Kimi-VL-A3B-Thinking-2506 on Hugging Face); OS-agent interaction and GUI grounding are reported benchmark capabilities, so the record is adjacent. The inspected tree holds only the README, the technical-report PDF, requirements.txt and LICENSE; it offers documentation rather than a GUI-agent harness or evaluator. The MIT LICENSE file applies to this repository; checkpoint cards declare their own weights terms, which were not reviewed. Weights collection: https://huggingface.co/collections/moonshotai/kimi-vl-a3b-67f67b6ac91d3b03d382dd85. The repository file listing was inspected at Git object 41d5ef072bc5.

- Record JSON: https://awesomecua.com/resources/github-moonshotai-kimi-vl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository LICENSE: the MIT license text with typographic quotation marks; it covers this repository, not the separately hosted checkpoints.
  Sources: https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/README.md (retrieved 2026-10-18T11:14:16Z; SHA-256 6efabbe27d40d6180d1ab11eee51a8709b5400343cead682786e1aaee89926f4)
- https://api.github.com/repos/MoonshotAI/Kimi-VL (retrieved 2026-10-18T11:14:17Z; SHA-256 1e4456ecef6609ac5f6a053cd4c337bf98c92ec65d183ac6b046e9a73799929a)
- https://api.github.com/repos/MoonshotAI/Kimi-VL/git/trees/main?recursive=1 (retrieved 2026-10-18T11:14:18Z; SHA-256 0d00b2a3db74a2b2ac0b6148bb376fb107c1b9598a993220c874ece627e5c7ec)
- https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE (retrieved 2026-10-18T11:14:18Z; SHA-256 f0c89806155f93f4ea5cb9e81ef70aad1a7729240132df9706db9584024547db)

---

## Laya-Android

Laya-Android is a compact 322M on-device decision model for Android GUI action selection.

- Catalog URL: https://awesomecua.com/resources/github-byun11-laya-android/
- Original source: https://github.com/Byun11/laya-android
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, efficiency
- Evidence checked: 2026-11-04T14:20:16Z
- ID: github:byun11/laya-android

- Record JSON: https://awesomecua.com/resources/github-byun11-laya-android/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Byun11/laya-android/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Byun11/laya-android/HEAD/README.md (retrieved 2026-11-04T14:20:16Z; SHA-256 a1e8e42f00cdad617bc11a04939d3d6269158f473c088da58e8f4cf33b34838c)
- https://raw.githubusercontent.com/Byun11/laya-android/HEAD/LICENSE (retrieved 2026-11-04T14:23:48Z; SHA-256 a6cba85bc92e0cff7a450b1d873c0eaa2e9fc96bf472df0247a26bec77bf3ff9)

---

## laya-browser

Non-generative browser-agent policy fine-tuned from the 322M laya encoder: one forward pass over page text and the interactive-element list picks the next operation and its target element.

- Catalog URL: https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/
- Original source: https://huggingface.co/cklxx/laya-browser
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, efficiency
- Evidence checked: 2026-10-18T12:13:54Z
- ID: url:c5b0e2eab771f62792fb

### Limitations

Built as the per-step decision head of the jev-ultrafast browser agent. The remote code builds each request from the page URL, title, up to 1,200 characters of page text, the interactive elements with their roles and the last ten actions; it takes no screenshot, and a separate local LLM writes the text that TYPE_TEXT enters. The repository also ships a jev-ultrafast-compatible server, evaluation suites, training pipeline code, a harness patch and result logs. The card reports 11 to 14 of 54 multi-step tasks on held-out real sites for version v19s and 22 to 27 ms per decision on one RTX 4070 Ti SUPER; these are publisher measurements. The card metadata declares Apache-2.0 and says the training datasets keep their own licenses.

- Record JSON: https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md

### Primary evidence

- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md (retrieved 2026-10-18T12:13:54Z; SHA-256 09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2)
- https://huggingface.co/api/models/cklxx/laya-browser/revision/645cf366a2ae35f1086e8c20eff48f909bb49206 (retrieved 2026-10-18T12:13:55Z; SHA-256 cf1089fa62e9a7f942c4bf071708d47d72b712ab9a99b5ba930341df5169e2ac)
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/modeling_laya_browser.py (retrieved 2026-10-18T12:13:55Z; SHA-256 d084f8720ee4a738efc3cee6e0cef78ab983af8cf17939957af2c2265fdd99d1)
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md (retrieved 2026-10-18T12:13:54Z; SHA-256 09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2)

---

## Llama-3-8B-Web

A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.

- Catalog URL: https://awesomecua.com/resources/url-7c3e8c4ba52428584079/
- Original source: https://huggingface.co/McGill-NLP/Llama-3-8B-Web
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, action-prediction
- Evidence checked: 2026-10-17T12:34:10Z
- ID: url:7c3e8c4ba52428584079

### Limitations

The ungated Hub manifest includes model.safetensors, pytorch_model.bin, config and tokenizer files; the two weight formats represent the same checkpoint. The card describes an approximately 24K-example curated WebLINX training subset and evaluates dialogue-guided web navigation. Predictions still require parsing and execution in an external browser environment. The retained weight license is the Meta Llama 3 Community License Agreement, not WebLlama code MIT. No weights were downloaded, model used, or agreement accepted.

- Record JSON: https://awesomecua.com/resources/url-7c3e8c4ba52428584079/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Meta Llama 3 Community License Agreement — https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt

- weights review: Weight license text and card declaration are retained separately from framework code licensing.
  Sources: https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt, https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/README.md

### Primary evidence

- https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/README.md (retrieved 2026-10-17T12:34:10Z; SHA-256 1a445c7894c65c9a7c4247dba446c206c13ac2ecdc129ce93a0de943f2984a18)
- https://huggingface.co/api/models/McGill-NLP/Llama-3-8B-Web (retrieved 2026-10-17T12:34:10Z; SHA-256 69fe17825db0d5f32ccaa84b67fabfa10018e1410da0c70ec0ea9509703feba2)
- https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt (retrieved 2026-10-17T12:36:55Z; SHA-256 6bcca341999ab474e2973116128177b77f97cd64028eeace224035358ce6474f)

---

## Llama8b-NNetNav-WA

A Llama checkpoint trained on demonstrations gathered through WebArena exploration. It takes a task instruction and selects browser actions to navigate webpages.

- Catalog URL: https://awesomecua.com/resources/url-c9d2a9288a568db12bd1/
- Original source: https://huggingface.co/stanfordnlp/llama8b-nnetnav-wa
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning, evaluation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:c9d2a9288a568db12bd1

### Limitations

The release lists model weights and tokenizer files. The card names meta-llama/Llama-3.1-8B-Instruct as the base model and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-c9d2a9288a568db12bd1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/stanfordnlp/llama8b-nnetnav-wa

### Primary evidence

- https://huggingface.co/api/models/stanfordnlp/llama8b-nnetnav-wa (retrieved 2026-11-09T05:05:20Z; SHA-256 631a6fa1e212047dd672cd03b340e842272fa16d1802c7ee22e987c7fba2018a)
- https://huggingface.co/api/models/stanfordnlp/llama8b-nnetnav-wa (retrieved 2026-11-09T05:05:20Z; SHA-256 631a6fa1e212047dd672cd03b340e842272fa16d1802c7ee22e987c7fba2018a)

---

## Magma

Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-magma/
- Original source: https://github.com/microsoft/Magma
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, planning, mobile-navigation
- Evidence checked: 2026-10-17T17:18:21Z
- ID: github:microsoft/magma

- Record JSON: https://awesomecua.com/resources/github-microsoft-magma/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/Magma/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/Magma/HEAD/README.md (retrieved 2026-10-17T17:18:21Z; SHA-256 8aaf8feff6e1d5a533c01afd8afc0cfc0700f0c1c73ba47949b56c11fb8ab5be)
- https://raw.githubusercontent.com/microsoft/Magma/HEAD/LICENSE (retrieved 2026-10-17T17:18:56Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## Milo-Pointer

Milo-Pointer uses a 149M on-device text encoder as a fast first-tier router and action selector for mobile phone agents.

- Catalog URL: https://awesomecua.com/resources/github-chayworks-milo-pointer/
- Original source: https://github.com/chayworks/milo-pointer
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, efficiency, grounding
- Evidence checked: 2026-11-04T14:20:16Z
- ID: github:chayworks/milo-pointer

- Record JSON: https://awesomecua.com/resources/github-chayworks-milo-pointer/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/README.md (retrieved 2026-11-04T14:20:16Z; SHA-256 eb4014518622cc0da35b9466383b6168b2b9deaf5789e80396b0d47610b18752)
- https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/LICENSE (retrieved 2026-11-04T14:23:48Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## MiniMax M3

MiniMax M3 is a multimodal model whose release page describes desktop operation from visual input and cross-application tasks through MiniMax Code.

- Catalog URL: https://awesomecua.com/resources/url-50089323623ee780a426/
- Original source: https://www.minimaxi.com/blog/minimax-m3
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop
- Topics: screen-understanding, cross-app, automation
- Evidence checked: 2026-11-09T06:16:39Z
- ID: url:50089323623ee780a426

### Limitations

The page says M3 is available through MiniMax Code, a token plan, and an API. It says model weights were planned for a later release.

- Record JSON: https://awesomecua.com/resources/url-50089323623ee780a426/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.minimaxi.com/blog/minimax-m3 (retrieved 2026-11-09T06:16:39Z; SHA-256 871aabe31c323df2b04af880a266acddab10ad082b929ad1715176d095339b7c)

---

## MM-Eureka

MM-Eureka provides rule-based multimodal reinforcement learning code, models, and datasets based on OpenRLHF and InternVL.

- Catalog URL: https://awesomecua.com/resources/github-modalminds-mm-eureka/
- Original source: https://github.com/ModalMinds/MM-EUREKA
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: reinforcement-learning, screen-understanding
- Evidence checked: 2026-11-04T13:12:26Z
- ID: github:modalminds/mm-eureka

- Record JSON: https://awesomecua.com/resources/github-modalminds-mm-eureka/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/README.md (retrieved 2026-11-04T13:12:26Z; SHA-256 db5b32aa61f24b12f77b672b151d087390750f983d62eaf9b6b1bff33cae0b23)
- https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/LICENSE (retrieved 2026-11-04T13:41:37Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## MobileVLM

MobileVLM is a vision-language model pre-trained on the Mobile3M UI transition graph for intra-screen and inter-screen mobile UI understanding.

- Catalog URL: https://awesomecua.com/resources/github-xiaomi-mobilevlm/
- Original source: https://github.com/XiaoMi/mobilevlm
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, mobile-navigation, action-prediction
- Evidence checked: 2026-11-04T13:12:45Z
- ID: github:xiaomi/mobilevlm

- Record JSON: https://awesomecua.com/resources/github-xiaomi-mobilevlm/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md (retrieved 2026-11-04T13:12:45Z; SHA-256 e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef)

---

## MP-GUI

MP-GUI provides multimodal perception training and evaluation code with graphical, textual, and spatial experts for GUI understanding.

- Catalog URL: https://awesomecua.com/resources/github-bigtaige-mp-gui/
- Original source: https://github.com/BigTaige/MP-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-04T13:12:08Z
- ID: github:bigtaige/mp-gui

- Record JSON: https://awesomecua.com/resources/github-bigtaige-mp-gui/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/README.md (retrieved 2026-11-04T13:12:08Z; SHA-256 d6253125be06f3ab7f0fe96ca9dfc94559be5f7fab722b8e9e75e9cdfa2a102f)
- https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/LICENSE (retrieved 2026-11-04T13:22:42Z; SHA-256 5b1b6bd7af109e87cdde9905738be3747cad8a199609ac3ce7889aab59bd7f8f)

---

## Muse Spark 1.1

Meta Superintelligence Labs multimodal reasoning model for agentic work, trained to choose between writing scripts and clicking in computer-use workflows that span several applications.

- Catalog URL: https://awesomecua.com/resources/url-f8a956094e526a92caf3/
- Original source: https://ai.meta.com/blog/introducing-muse-spark-meta-model-api
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, web
- Topics: cross-app, tool-integration
- Evidence checked: 2026-11-10T03:01:17Z
- ID: url:f8a956094e526a92caf3

### Limitations

Available through the Meta Model API public preview and in the Meta AI app; the post reports a 1 million token context window and refers to a separate evaluation report. Demos include operating a user's browser to create a Facebook Marketplace listing.

- Record JSON: https://awesomecua.com/resources/url-f8a956094e526a92caf3/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://web.archive.org/web/2026/https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/ (retrieved 2026-11-10T03:01:17Z; SHA-256 b82fb9764c312977fa63d5f3257653fd866a1e14874ad852f4e87ec5c53dc6d6)

---

## Muse-Glimmer-30B-GUI-Grounding-Fast

A LoRA adapter for Muse-Glimmer-30B that returns a UI element's bounding box from a screenshot and instruction, with examples spanning desktop, mobile, and web screens.

- Catalog URL: https://awesomecua.com/resources/url-7645072fe9580fa9993a/
- Original source: https://huggingface.co/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, android, ios, web
- Topics: grounding, efficiency, screen-understanding
- Evidence checked: 2026-11-09T05:05:21Z
- ID: url:7645072fe9580fa9993a

### Limitations

The repository lists adapter configuration and weight files. The card says it uses the Muse-Glimmer-30B base model, describes GUI grounding training data, and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-7645072fe9580fa9993a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast

### Primary evidence

- https://huggingface.co/api/models/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast (retrieved 2026-11-09T05:05:21Z; SHA-256 e8c4160e992a1ec22112341ed4b69762d49779460489e10a7d9a511fcae54558)
- https://huggingface.co/api/models/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast (retrieved 2026-11-09T05:05:21Z; SHA-256 e8c4160e992a1ec22112341ed4b69762d49779460489e10a7d9a511fcae54558)

---

## omniparser-finetuned

omniparser-finetuned releases a Florence-2 icon captioning checkpoint for UI parsing, trained with icon labels and screenshot crops.

- Catalog URL: https://awesomecua.com/resources/url-e2b79e8d1c6a28c65bff/
- Original source: https://huggingface.co/Proteus-Computer-Use/omniparser-finetuned
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T05:05:06Z
- ID: url:e2b79e8d1c6a28c65bff

### Limitations

The card supplies a Transformers inference example and describes Font Awesome icons, Google Maps screenshot anchors and hard negatives. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-e2b79e8d1c6a28c65bff/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/Proteus-Computer-Use/omniparser-finetuned

### Primary evidence

- https://huggingface.co/api/models/Proteus-Computer-Use/omniparser-finetuned (retrieved 2026-11-09T05:05:06Z; SHA-256 031ae002e2b7e7aba726379e23fd732def1869acf97646837df875087474a902)
- https://huggingface.co/api/models/Proteus-Computer-Use/omniparser-finetuned (retrieved 2026-11-09T05:05:06Z; SHA-256 031ae002e2b7e7aba726379e23fd732def1869acf97646837df875087474a902)

---

## OneJev

OneJev is a multimodal System-One decision model based on Qwen that returns calibrated probabilities over typed action choices.

- Catalog URL: https://awesomecua.com/resources/github-omnijev-onejev/
- Original source: https://github.com/OmniJev/OneJev
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: action-prediction, efficiency
- Evidence checked: 2026-11-04T14:41:48Z
- ID: github:omnijev/onejev

- Record JSON: https://awesomecua.com/resources/github-omnijev-onejev/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/README.md (retrieved 2026-11-04T14:41:48Z; SHA-256 93f7ac68c4a05fa8e551d89f068d4546458b1bd4e7cd634eb5949bf2c3c6eb62)
- https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/LICENSE (retrieved 2026-11-04T14:45:10Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## OpenAI CUA

Computer-using model introduced with the Operator research preview.

- Catalog URL: https://awesomecua.com/resources/url-74eeb7c9fb20674fe6e2/
- Original source: https://openai.com/index/computer-using-agent/
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: planning, grounding
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:74eeb7c9fb20674fe6e2

- Record JSON: https://awesomecua.com/resources/url-74eeb7c9fb20674fe6e2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://openai.com/index/computer-using-agent/ (retrieved 2026-10-16T06:38:27Z; SHA-256 14f573af0c4ea3e5922b8831b7f03724936963e293d7c0aaa3fccbb71dbb0cfa)

---

## OpenCSG-Qwen2.5-7B-GUI

A browser automation model for the AutoHub plugin that accepts natural-language requests for web operations and information retrieval.

- Catalog URL: https://awesomecua.com/resources/url-2462fb9d529bac7fa896/
- Original source: https://huggingface.co/opencsg/OpenCSG-Qwen2.5-7B-GUI
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: automation, web-navigation
- Evidence checked: 2026-11-09T05:05:00Z
- ID: url:2462fb9d529bac7fa896

### Limitations

The card names Qwen2.5-VL-7B-Instruct as its base model and declares an Apache-2.0 license. The repository file list includes model weight shards.

- Record JSON: https://awesomecua.com/resources/url-2462fb9d529bac7fa896/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/opencsg/OpenCSG-Qwen2.5-7B-GUI

### Primary evidence

- https://huggingface.co/api/models/opencsg/OpenCSG-Qwen2.5-7B-GUI (retrieved 2026-11-09T05:05:00Z; SHA-256 22fb385a2884521c0d7b02f5b67ef19ed4e099d84d095584b6b046e80734fece)
- https://huggingface.co/api/models/opencsg/OpenCSG-Qwen2.5-7B-GUI (retrieved 2026-11-09T05:05:00Z; SHA-256 22fb385a2884521c0d7b02f5b67ef19ed4e099d84d095584b6b046e80734fece)

---

## OpenCUA 32B

A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.

- Catalog URL: https://awesomecua.com/resources/url-ad7f176848fd84de64e2/
- Original source: https://huggingface.co/xlangai/OpenCUA-32B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos
- Topics: grounding, planning, self-reflection
- Evidence checked: 2026-10-17T02:44:29Z
- ID: url:ad7f176848fd84de64e2

### Limitations

The public manifest contains 64 safetensors shards. The card declares MIT for this model and names its Qwen2.5-VL base; upstream terms remain separate. This is the 32B release, distinct from the existing 72B preview. Family-level and 72B benchmark scores apply to separate releases from this 32B model.

- Record JSON: https://awesomecua.com/resources/url-ad7f176848fd84de64e2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md

### Primary evidence

- https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 151217eb96e4ab22a47c98766052e5cfd76497a2a9197cc125c0237f3fbc59f6)
- https://huggingface.co/api/models/xlangai/OpenCUA-32B (retrieved 2026-10-17T02:44:29Z; SHA-256 a3be2e1a6cd39ee89809baa9504813c4a6a9a03bbd916e82924cc0f89cb5da33)
- https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md (retrieved 2026-10-17T02:44:29Z; SHA-256 151217eb96e4ab22a47c98766052e5cfd76497a2a9197cc125c0237f3fbc59f6)

---

## OpenCUA 72B

A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.

- Catalog URL: https://awesomecua.com/resources/url-4a0b1692589594745a3c/
- Original source: https://huggingface.co/xlangai/OpenCUA-72B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos
- Topics: grounding, planning, action-prediction, self-reflection
- Evidence checked: 2026-10-17T09:14:12Z
- ID: url:4a0b1692589594745a3c

### Limitations

The former OpenCUA-72B-preview API redirects to the canonical xlangai/OpenCUA-72B repository. The public manifest lists 82 safetensors weight shards plus an index and custom model/tokenizer code. The card declares MIT for the released model and describes absolute coordinates after smart resizing.

- Record JSON: https://awesomecua.com/resources/url-4a0b1692589594745a3c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md

- weights review: Publisher model card explicitly declares MIT for the released model; other code and training-data scopes are not generalized.
  Sources: https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md

### Primary evidence

- https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md (retrieved 2026-10-17T09:14:12Z; SHA-256 ebe551af1008a2307d16cf68715fc1861f8c501c4981660dbe08f691cf73d787)
- https://huggingface.co/api/models/xlangai/OpenCUA-72B (retrieved 2026-10-17T09:14:12Z; SHA-256 ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d)
- https://huggingface.co/api/models/xlangai/OpenCUA-72B-preview (retrieved 2026-10-17T09:15:35Z; SHA-256 ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d)
- https://huggingface.co/api/models/xlangai/OpenCUA-72B-preview (retrieved 2026-10-17T19:15:04Z; SHA-256 ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d)
- https://huggingface.co/api/models/xlangai/OpenCUA-72B (retrieved 2026-10-17T19:15:05Z; SHA-256 ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d)

---

## OpenCUA-7B

A Qwen2.5-VL-based computer-use checkpoint that produces desktop actions from screenshots and instructions, using recent screen history for context.

- Catalog URL: https://awesomecua.com/resources/url-2803eda78cff23fb63cc/
- Original source: https://huggingface.co/xlangai/OpenCUA-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos
- Topics: action-prediction, grounding, interaction-history, planning
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:2803eda78cff23fb63cc

### Limitations

The repository lists sharded model weights and custom configuration, modeling, processing and tokenization files. The card recommends vLLM with remote code enabled and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-2803eda78cff23fb63cc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/xlangai/OpenCUA-7B

### Primary evidence

- https://huggingface.co/api/models/xlangai/OpenCUA-7B (retrieved 2026-11-09T05:05:20Z; SHA-256 fadf1f823e27a9ea4f114d6fc1371ebf71e4d2ab909f828cdafc9d073ce1cf5d)
- https://huggingface.co/api/models/xlangai/OpenCUA-7B (retrieved 2026-11-09T05:05:20Z; SHA-256 fadf1f823e27a9ea4f114d6fc1371ebf71e4d2ab909f828cdafc9d073ce1cf5d)

---

## OpenJev

Decision models at 1.7B, 4B and 8B that answer typed questions with calibrated probabilities in one pass; trained on browser-agent steps and general decision data, they pick a web agent's next operation and element.

- Catalog URL: https://awesomecua.com/resources/github-alanhuangyoo-openjev/
- Original source: https://github.com/alanhuangyoo/OpenJev
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, web-navigation, efficiency
- Evidence checked: 2026-10-18T16:16:18Z
- ID: github:alanhuangyoo/openjev

### Limitations

Models and code for an open replacement of a hosted System One decision API. A Qwen3 or Qwen3.5 backbone without its vocabulary head scores each option with a pointer head, so one pass answers every question in a request; a local server exposes POST /v1/systemone. Browser steps arrive as page text, numbered elements and recent actions, and the model chooses an operation (click, type, DONE and others) and a target element. The repository holds the wev package (data conversion for Mind2Web, NNetNav and WebChain, training, calibration, export, serving), teacher-collection scripts, the OpenJev-Bench browser-lane client (2,346 frozen steps stored in the Hub dataset alanhuangya/OpenJev-Data), locked results and the paper source; the paper is a Zenodo deposit (doi 10.5281/zenodo.22941164) with no catalog record. The models also answer general decisions such as triage and routing. Results are publisher-reported, and live-website numbers use an LLM judge.

- Record JSON: https://awesomecua.com/resources/github-alanhuangyoo-openjev/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md

- weights review: All three Hub model cards declare apache-2.0 (OpenJev-4B at 3687132, OpenJev-8B at 32bc7cb, OpenJev-1.7B at 7418ae8). This covers the released weights only; the README warns that parts of the training data are research-only or subject to a model provider's terms.
  Sources: https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md, https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md, https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md

### Primary evidence

- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/README.md (retrieved 2026-10-18T16:16:18Z; SHA-256 c5dee060aab4f95fd80d8d3b463b336e67fbea6f42df31e6f334942335523ebe)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/model.py (retrieved 2026-10-18T16:15:40Z; SHA-256 f7e09479e92b5cc321adc2f6f5116b79cd99c3348fc2ffe55e32b6829c9d08d8)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/serve.py (retrieved 2026-10-18T16:15:40Z; SHA-256 43c32fdd4dc7f0ba95373efde8af01f294271c3375cf0b2a163f3c16fe1f3bf8)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/scripts/wev_bench.py (retrieved 2026-10-18T16:15:41Z; SHA-256 3b1ad4252bca15a371971c966f2b6bf449cb84d5e17e9fa1e731126610fc319b)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/mind2web.py (retrieved 2026-10-18T16:15:41Z; SHA-256 80e3a7862829bee82d1af0db8acb17ac22afea5f348bf48dd49e8ad02f060f89)
- https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 41e6569e5cb51644144ad39ee6d60915fabef9cc9e8fe04b66dff1f0aee27f44)
- https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 d306d34c702cc349375f9052fd60a915392142476d944a27a463d478fe5f6fc7)
- https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 0744b90308c2aa923b80a697eabc36c78a44437ec350e225a881719a9d622f66)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE (retrieved 2026-10-18T16:16:36Z; SHA-256 6b08bb37982c233aa12bcbdf19106da12f3f4fcf800773ea42e28ebeddd34fb8)

---

## OpenMobile-2 9B

Mobile-agent checkpoint trained on OpenMobile-Data-v2 for screenshot actions and app-native tool calls.

- Catalog URL: https://awesomecua.com/resources/url-d35224f787e7ec21ce36/
- Original source: https://huggingface.co/OpenMobile-2/OpenMobile-2-9B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, tool-integration
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:d35224f787e7ec21ce36

### Limitations

License declarations apply to this checkpoint separately from code and training data.

- Record JSON: https://awesomecua.com/resources/url-d35224f787e7ec21ce36/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md

### Primary evidence

- https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 09c59e6b35a5fe1eea528595f326546269ea8a2a75aa404f1f7950b9de5f30d1)
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-9B (retrieved 2026-10-17T01:49:48Z; SHA-256 1aab6befd309e54ba71676670039b4098362974ce0ce89b25872f137d50c103f)
- https://os-copilot.github.io/OpenMobile2-Home/ (retrieved 2026-10-17T01:46:06Z; SHA-256 9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc)
- https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 09c59e6b35a5fe1eea528595f326546269ea8a2a75aa404f1f7950b9de5f30d1)

---

## Orienter

Orienter locates interactable elements in extended reality interface screenshots using application context and a detector. The release includes code and a checkpoint.

- Catalog URL: https://awesomecua.com/resources/url-758f048c78e5c184333c/
- Original source: https://huggingface.co/stereoid/Orienter
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:758f048c78e5c184333c

### Limitations

The repository includes selected evaluation ground truth and excludes dataset images. Full inference requires external image assets, provider access, and a CUDA environment.

- Record JSON: https://awesomecua.com/resources/url-758f048c78e5c184333c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/stereoid/Orienter (retrieved 2026-11-09T06:16:33Z; SHA-256 62976d0af1c4902ddf9e11e3acffd0407d6ae05f34d6434ebd20323bf972ca4a)
- https://huggingface.co/api/models/stereoid/Orienter (retrieved 2026-11-09T06:16:33Z; SHA-256 62976d0af1c4902ddf9e11e3acffd0407d6ae05f34d6434ebd20323bf972ca4a)

---

## OS-Atlas Pro 7B

OS-Atlas action checkpoint fine-tuned from OS-Atlas-Base-7B that reads a screenshot, task and history and writes a thought plus the next basic or user-defined GUI action, in the Qwen2-VL architecture.

- Catalog URL: https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/
- Original source: https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: action-prediction, grounding
- Evidence checked: 2026-10-18T12:03:55Z
- ID: url:9c5e0c8f6784bedeb153

### Limitations

Hub API at revision 6c0135de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card says the checkpoint is fine-tuned from OS-Atlas-Base-7B and is the Pro model of the paper's Section 5.4, while the Hub base_model metadata names Qwen/Qwen2-VL-7B-Instruct. The card's inference example loads weights from local paths; this Hub ID is absent from the example. The card declares Apache-2.0 for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md

### Primary evidence

- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md (retrieved 2026-10-18T12:03:55Z; SHA-256 44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f)
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Pro-7B/revision/6c0135de0627db98533ac4b47ae71fa17cf21c48 (retrieved 2026-10-18T12:03:55Z; SHA-256 8fe182b06e327e37d5b655239aa4e87ce634612e0da9bf6739c6bc94c1bc1ea1)
- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md (retrieved 2026-10-18T12:03:55Z; SHA-256 44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f)

---

## Phi-Ground

Microsoft GUI grounding models from an empirical study of grounding training, from data collection to model training, released as Phi-Ground-4B-7C with evaluation code.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-phi-ground/
- Original source: https://github.com/microsoft/Phi-Ground
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:00Z
- ID: github:microsoft/phi-ground

- Record JSON: https://awesomecua.com/resources/github-microsoft-phi-ground/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a0609394a736dc495d077cd57a2945b018123e5b3f9514d7d5bafb9e690aeae2)
- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## Pix2Struct base (pretrained)

Pretrained base-size Pix2Struct checkpoint in Transformers format, learned by parsing masked web page screenshots into simplified HTML and released only as a starting point for fine-tuning.

- Catalog URL: https://awesomecua.com/resources/url-bb1440d051c68455a72e/
- Original source: https://huggingface.co/google/pix2struct-base
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-18T16:07:20Z
- ID: url:bb1440d051c68455a72e

### Limitations

Adjacent: a general visual-language pretraining checkpoint with broader scope than agent or UI-specific fine-tuning. The card calls it the pretrained version of Pix2Struct for fine-tuning only, quotes the paper abstract, shows the T5X-to-Transformers conversion script, and says the weights were contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada. Hub API at revision 4605659e lists model.safetensors and pytorch_model.bin in the Pix2StructForConditionalGeneration architecture, with 282,285,696 F32 parameters reported for the safetensors file; the repository is publicly accessible. The card leaves scores and a link to the Pix2Struct code repository absent, leaving a family relation unrecorded. The card declares Apache-2.0 for the checkpoint; no pretraining data is part of this release.

- Record JSON: https://awesomecua.com/resources/url-bb1440d051c68455a72e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md

### Primary evidence

- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md (retrieved 2026-10-18T16:07:20Z; SHA-256 4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e)
- https://huggingface.co/api/models/google/pix2struct-base/revision/4605659ec5d82c985955ebdea8210f32fe54a682 (retrieved 2026-10-18T16:07:04Z; SHA-256 bb1962674cf165e80a32f358c4bc2b79714eaa0eb0b79145174e4dbf17d2bad2)
- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md (retrieved 2026-10-18T16:07:20Z; SHA-256 4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e)

---

## Pix2Struct Screen2Words base

Base-size Pix2Struct checkpoint fine-tuned on Screen2Words that writes a short functional summary of a mobile UI screenshot, converted to Transformers from Google's original release.

- Catalog URL: https://awesomecua.com/resources/url-1cf7f8b4b2a1eb9c6547/
- Original source: https://huggingface.co/google/pix2struct-screen2words-base
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:05:32Z
- ID: url:1cf7f8b4b2a1eb9c6547

### Limitations

Hub API at revision 17514729 lists one pytorch_model.bin with tokenizer and processor files in the Pix2StructForConditionalGeneration architecture; access is open. The card says the T5X checkpoint was contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada, and it reuses the generic Pix2Struct description with usage deferred to the pix2struct-textcaps-base card; it gives no Screen2Words scores. The card does not link a code repository, so no family relation is recorded. The card declares Apache-2.0 for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-1cf7f8b4b2a1eb9c6547/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md

### Primary evidence

- https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md (retrieved 2026-10-18T12:05:32Z; SHA-256 d0e7a6212944d78629b8cff07fa563cc71abeef37adff33551ea1ee685f6004c)
- https://huggingface.co/api/models/google/pix2struct-screen2words-base/revision/175147296b4f48000fdd37fc83e1334674cdaa47 (retrieved 2026-10-18T12:05:32Z; SHA-256 79b7a950e057181b26b7c54d72514286a9c0fe8a1791d3ecf5a0ed38c240ec82)
- https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md (retrieved 2026-10-18T12:05:32Z; SHA-256 d0e7a6212944d78629b8cff07fa563cc71abeef37adff33551ea1ee685f6004c)

---

## Pix2Struct Screen2Words large

Large-size Pix2Struct checkpoint fine-tuned on Screen2Words that writes a short functional summary of a mobile UI screenshot, converted to Transformers from Google's original release.

- Catalog URL: https://awesomecua.com/resources/url-6c3e04249787a3de7cbc/
- Original source: https://huggingface.co/google/pix2struct-screen2words-large
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:05:48Z
- ID: url:6c3e04249787a3de7cbc

### Limitations

Hub API at revision a77a669b lists one pytorch_model.bin with tokenizer and processor files in the Pix2StructForConditionalGeneration architecture; access is open. The card says the T5X checkpoint was contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada, and it reuses the generic Pix2Struct description with usage deferred to the pix2struct-textcaps-base card; it gives no Screen2Words scores. The card does not link a code repository, so no family relation is recorded. The card declares Apache-2.0 for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-6c3e04249787a3de7cbc/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md

### Primary evidence

- https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md (retrieved 2026-10-18T12:05:48Z; SHA-256 794bdeb5b631c32f402988542f206679216c91df1e5baff6f062f5eafaaed13a)
- https://huggingface.co/api/models/google/pix2struct-screen2words-large/revision/a77a669b01e9dae3df5be815c5dcc2025385c24f (retrieved 2026-10-18T12:05:48Z; SHA-256 fd94ef9cd3eabee84e08e7f1581b2b9feb88404345dfd8567172695ce33caafb)
- https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md (retrieved 2026-10-18T12:05:48Z; SHA-256 794bdeb5b631c32f402988542f206679216c91df1e5baff6f062f5eafaaed13a)

---

## PTA-1

AskUI's Florence-2-base grounding model of about 270M parameters that returns a bounding box for a described element in a screenshot, intended for low-latency local computer and phone automation.

- Catalog URL: https://awesomecua.com/resources/url-303e1926b8ff4f60e006/
- Original source: https://huggingface.co/AskUI/PTA-1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: grounding, efficiency
- Evidence checked: 2026-10-18T15:50:29Z
- ID: url:303e1926b8ff4f60e006

### Limitations

Inference uses Florence-2's <OPEN_VOCABULARY_DETECTION> task prompt with the element description and the repository's remote code. The card calls its evaluation a first version on 999 samples (333 each from three datasets) scored by click success, marks datasets whose training splits the model saw, and attributes part of its score to data bias; no result was reproduced. MIT is declared on the card for the weights; Florence-2's own terms and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-303e1926b8ff4f60e006/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

### Primary evidence

- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md (retrieved 2026-10-18T15:50:29Z; SHA-256 f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61)
- https://huggingface.co/api/models/AskUI/PTA-1 (retrieved 2026-10-18T15:50:30Z; SHA-256 a51d649a22372d609874dc6a512645770f2e785919f1dab23df5ec2476b75ec6)
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/config.json (retrieved 2026-10-18T15:50:30Z; SHA-256 74c60cc3088daaed377d9399c3a68577c424394ab4e03ced000bfd28d752938e)
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md (retrieved 2026-10-18T15:50:29Z; SHA-256 f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61)

---

## Qwen-AgentWorld

A language world model that predicts the next environment observation across seven domains, including Android screens, browser pages and desktop accessibility trees, released with AgentWorldBench evaluation code.

- Catalog URL: https://awesomecua.com/resources/github-qwenlm-qwen-agentworld/
- Original source: https://github.com/QwenLM/Qwen-AgentWorld
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: android, web, desktop, cross-platform
- Topics: world-models, evaluation, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:00Z
- ID: github:qwenlm/qwen-agentworld

### Limitations

The repository holds the AgentWorldBench evaluation script (eval/eval.py) and per-domain world-model and judge system prompts; the Qwen-AgentWorld-35B-A3B weights (MoE, 35B total, 3B active, 256K context) and the AgentWorldBench dataset are hosted on Hugging Face. The README reports training on more than 10M interaction trajectories and gives SGLang, vLLM and Transformers usage.

- Record JSON: https://awesomecua.com/resources/github-qwenlm-qwen-agentworld/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/cd0aa83dc7a9c733695eb9c4652e0a68b6e6ecde/README.md (retrieved 2026-11-10T03:01:00Z; SHA-256 9d1998bc98242b63ab640e6905e13672b72dfae3ff7063a85580a23f04dbeeee)
- https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/HEAD/LICENSE (retrieved 2026-11-10T02:08:18Z; SHA-256 3e047f3880a1d65c98cd5ee9cf07f433aa3a4a9b9fc9547cf200f6b1a8586d4a)

---

## Qwen-CUA

Qwen-CUA is a screenshot-based computer-use model that generates grounded keyboard and mouse actions. Its release includes weights and a browser reference runtime.

- Catalog URL: https://awesomecua.com/resources/url-a886fea306211d527701/
- Original source: https://huggingface.co/xlangai/Qwen-CUA
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: grounding, action-prediction, screen-understanding, web-navigation
- Evidence checked: 2026-11-09T05:05:09Z
- ID: url:a886fea306211d527701

### Limitations

The card describes BF16 safetensors weights of approximately 807 GB, multi-GPU serving examples and an Apache-2.0 license. The reference demo uses isolated Chromium sessions.

- Record JSON: https://awesomecua.com/resources/url-a886fea306211d527701/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/Qwen-CUA

### Primary evidence

- https://huggingface.co/api/models/xlangai/Qwen-CUA (retrieved 2026-11-09T05:05:09Z; SHA-256 f57511b3463e74efccc48680aa95ea99a25211f9447d0563197ed9bd251c28f9)
- https://huggingface.co/api/models/xlangai/Qwen-CUA (retrieved 2026-11-09T05:05:09Z; SHA-256 f57511b3463e74efccc48680aa95ea99a25211f9447d0563197ed9bd251c28f9)

---

## Qwen2.5-VL

A general vision-language model family whose release documents visual-agent behavior for computer and phone use, alongside image and video understanding.

- Catalog URL: https://awesomecua.com/resources/url-4bece2c969edcdfc2e8d/
- Original source: https://qwenlm.github.io/blog/qwen2.5-vl
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: cross-platform
- Topics: screen-understanding, action-prediction, mobile-navigation
- Evidence checked: 2026-11-09T05:05:15Z
- ID: url:4bece2c969edcdfc2e8d

### Limitations

The page says base and instruction-tuned models in 3B, 7B, and 72B sizes are available through Hugging Face and ModelScope.

- Record JSON: https://awesomecua.com/resources/url-4bece2c969edcdfc2e8d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://qwenlm.github.io/blog/qwen2.5-vl (retrieved 2026-11-09T05:05:15Z; SHA-256 7b00824500da48251647448b615d83a0b62c2f5387fa8d569aedc5ec82810c3f)

---

## ScaleCUA 7B

A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.

- Catalog URL: https://awesomecua.com/resources/url-ff7b1873a3eead89607a/
- Original source: https://huggingface.co/OpenGVLab/ScaleCUA-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, android, linux
- Topics: grounding, action-prediction, planning
- Evidence checked: 2026-10-17T02:45:20Z
- ID: url:ff7b1873a3eead89607a

### Limitations

Four public safetensors shards and model/tokenizer configuration are present. The card declares Apache-2.0. The model card’s Paper link points to the code repository; the arXiv association uses the repository’s explicit citation.

- Record JSON: https://awesomecua.com/resources/url-ff7b1873a3eead89607a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md

### Primary evidence

- https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md (retrieved 2026-10-17T02:45:20Z; SHA-256 e45116466b8b9ef3e93992a1efca8fa5b921a8b041297933210c9f552767ffb8)
- https://huggingface.co/api/models/OpenGVLab/ScaleCUA-7B (retrieved 2026-10-17T02:45:19Z; SHA-256 bad2617fd64633212a30b78d99fb053a662378ab50b42722a04af4104ac2248f)
- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md (retrieved 2026-10-17T01:54:55Z; SHA-256 0538701c860afedd5d63c3839039699d8e5a14977d5c339b187ed13ad666c8fa)
- https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md (retrieved 2026-10-17T02:45:20Z; SHA-256 e45116466b8b9ef3e93992a1efca8fa5b921a8b041297933210c9f552767ffb8)

---

## SE-GUI-3B

GUI grounding model on a Qwen2.5-VL 3B backbone trained with self-evolutionary reinforcement fine-tuning on 3,018 curated samples; the authors report 35.9 on ScreenSpot-Pro.

- Catalog URL: https://awesomecua.com/resources/url-6d6f7ffc6a15e9e75a14/
- Original source: https://huggingface.co/XinBB/SE-GUI-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:6d6f7ffc6a15e9e75a14

### Limitations

Two safetensors shards in Qwen2_5_VL format; the card declares Apache-2.0. The SE-GUI repository holds training and evaluation code, links the SE-GUI-3k seed data on Hugging Face, and its README reports SE-GUI-3B results beside the SE-GUI-7B checkpoint from the same account.

- Record JSON: https://awesomecua.com/resources/url-6d6f7ffc6a15e9e75a14/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/XinBB/SE-GUI-3B

### Primary evidence

- https://huggingface.co/api/models/XinBB/SE-GUI-3B (retrieved 2026-11-10T03:01:04Z; SHA-256 da85f2e6dfda750a7ab6348f78c24fa0d6a39796bc88c8caa42d0b1f8cfcc132)
- https://huggingface.co/api/models/XinBB/SE-GUI-3B (retrieved 2026-11-10T03:01:04Z; SHA-256 da85f2e6dfda750a7ab6348f78c24fa0d6a39796bc88c8caa42d0b1f8cfcc132)

---

## SeeClick checkpoint

The released SeeClick visual grounding checkpoint for mapping an interface screenshot and referring instruction to a point or bounding box.

- Catalog URL: https://awesomecua.com/resources/url-cfea8a0949472a637990/
- Original source: https://huggingface.co/cckevinn/SeeClick
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, android, ios
- Topics: grounding
- Evidence checked: 2026-10-17T02:05:52Z
- ID: url:cfea8a0949472a637990

### Limitations

The public ungated Hub manifest contains ten safetensors shards and model configuration/code but no README model card or explicit weight-license field. The official repository identifies the checkpoint and says incorporated checkpoints follow their original licenses, without resolving a specific standalone weight license. No source or model code was executed.

- Record JSON: https://awesomecua.com/resources/url-cfea8a0949472a637990/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/cckevinn/SeeClick (retrieved 2026-10-17T02:05:52Z; SHA-256 bc9f7c36f3e7c4515fa4982b0dd921a9038ff082cb6b283572d6390ef651c2a9)
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/readme.md (retrieved 2026-10-16T06:36:00Z; SHA-256 c4112415bec58fc77f9a1e8fa98f8d602c5d382747579dfda9f866900c55995c)
- https://huggingface.co/api/models/cckevinn/SeeClick (retrieved 2026-10-17T02:05:52Z; SHA-256 bc9f7c36f3e7c4515fa4982b0dd921a9038ff082cb6b283572d6390ef651c2a9)

---

## Seed1.5-VL

ByteDance Seed vision-language foundation model served by API, whose repository provides cookbooks including GUI-agent prompts for computer and mobile use with click, drag, hotkey, typing and scroll actions.

- Catalog URL: https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/
- Original source: https://github.com/ByteDance-Seed/Seed1.5-VL
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: desktop, cross-platform
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T11:12:25Z
- ID: github:bytedance-seed/seed1.5-vl

### Limitations

General-purpose vision-language model; the README lists GUI control and gameplay among agent-centric abilities, so the record is adjacent. The README names Volcano Engine model ID doubao-1-5-thinking-vision-pro-250428 and offers cookbooks that call that API; it does not state a weights release, and none is assumed. The inspected tree contains GUI/prompt.py (computer-use, mobile-use and grounding prompts), GUI/action_parser.py and GUI/gui.ipynb, plus grounding, 3D, video and long-CoT notebooks and a copy of the technical report. Apache-2.0 applies to the cookbook repository, not to the hosted model.

- Record JSON: https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/README.md (retrieved 2026-10-18T11:12:25Z; SHA-256 07ca02ac02fcec6d7c5206024c351d21067f272aa6383aa61673ae7201bde8c2)
- https://api.github.com/repos/ByteDance-Seed/Seed1.5-VL (retrieved 2026-10-18T11:12:27Z; SHA-256 101377cb1818d8b65f597b94bf8a360a634658bacd9dffd4c1e607f12ce26092)
- https://api.github.com/repos/ByteDance-Seed/Seed1.5-VL/git/trees/main?recursive=1 (retrieved 2026-10-18T11:12:27Z; SHA-256 6d9d8ca54ec7862d83c8431bcc2b8bbeb854f4c798a56195f51271bfd0cb6224)
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/GUI/prompt.py (retrieved 2026-10-18T11:12:28Z; SHA-256 e216a099fb09f4a89a4b345d663afa27c00ff2e10e4893df42cad64d60cba8ef)
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE (retrieved 2026-10-18T11:12:28Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE (retrieved 2026-10-18T11:12:28Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## SpiritSight-Agent 8B base

An InternVL2-based visual GUI checkpoint distributed for grounding and interface navigation, with the publisher recommending task-specific fine-tuning of the base release.

- Catalog URL: https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/
- Original source: https://huggingface.co/SenseLLM/SpiritSight-Agent-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:52b7de0e43b1afc9c226

### Limitations

The Hub manifest exposes four safetensors shards under SpiritSight-Agent-8B-base. The card declares Apache-2.0 and separately links InternVL terms in its model table. This is the published base checkpoint; benchmark-specific fine-tuning is discussed separately. No model code was executed.

- Record JSON: https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md

### Primary evidence

- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3)
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-8B (retrieved 2026-10-17T02:02:28Z; SHA-256 cc2564a3b2011a06f435e16b95cbf1e22072fd39e76fba844657773541586b37)
- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3)

---

## Textual Foresight

Textual Foresight pretrains UI representations by predicting textual descriptions of future screen states resulting from mobile UI actions.

- Catalog URL: https://awesomecua.com/resources/github-aburns4-textualforesight/
- Original source: https://github.com/aburns4/textualforesight
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, action-prediction, world-models
- Evidence checked: 2026-11-04T13:12:04Z
- ID: github:aburns4/textualforesight

- Record JSON: https://awesomecua.com/resources/github-aburns4-textualforesight/record.json

### License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/README.md (retrieved 2026-11-04T13:12:04Z; SHA-256 1ce27542d1e6e9c883279b659758bdf534a446b97e2207bdea069a09999606a3)
- https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/LICENSE.txt (retrieved 2026-11-04T13:22:45Z; SHA-256 5aca00bff81e12a65992c7f2ecfece6ba7a923193c7a1d33a1b60f657e8cf11a)

---

## tti_webarena

TTI-WebArena checkpoint from the Test-Time Interaction work, a multimodal web agent trained with online filtered behavior cloning on WebArena tasks and set in the TTI evaluation configs.

- Catalog URL: https://awesomecua.com/resources/url-a1621345ec327462b86e/
- Original source: https://huggingface.co/sjunhongs/tti_webarena/tree/main
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning, imitation-learning
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:a1621345ec327462b86e

### Limitations

The repository holds pytorch_model.bin with processor, tokenizer and chat-template files; the card declares an MIT license. The TTI README runs WebArena evaluation through scripts/webarena_eval.sh against WebArena containers and uses at least 4 H100 GPUs for training and evaluation.

- Record JSON: https://awesomecua.com/resources/url-a1621345ec327462b86e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/sjunhongs/tti_webarena/tree/main

### Primary evidence

- https://huggingface.co/api/models/sjunhongs/tti_webarena (retrieved 2026-11-10T03:01:12Z; SHA-256 6cdf9cd9ff5bea3cd22f0ec788619662421d0289f86cc3992c79701e0bf53ba3)
- https://huggingface.co/api/models/sjunhongs/tti_webarena (retrieved 2026-11-10T03:01:12Z; SHA-256 6cdf9cd9ff5bea3cd22f0ec788619662421d0289f86cc3992c79701e0bf53ba3)

---

## UI-TARS 2B SFT

SFT-labelled 2B UI-TARS checkpoint, the compact size of the original release: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and GUI actions.

- Catalog URL: https://awesomecua.com/resources/url-bd9f8174e5503055c0bd/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-10-18T11:34:22Z
- ID: url:bd9f8174e5503055c0bd

### Limitations

Hub API at revision f366a1db lists two F32 safetensors shards (about 2.44B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. The card’s online agent table has no 2B row; its sibling links also name a separate GGUF conversion.

- Record JSON: https://awesomecua.com/resources/url-bd9f8174e5503055c0bd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md

### Primary evidence

- https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md (retrieved 2026-10-18T11:34:22Z; SHA-256 4830ae0aa6b32597f9fac19addf31d61cad22b2e415d58e1995805857d69c62d)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-2B-SFT (retrieved 2026-10-18T11:34:23Z; SHA-256 677fccdec48ab2ca045ae66bcbe46ded963dfd1c9c3b47d0a43d32254e5f590e)
- https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md (retrieved 2026-10-18T11:34:22Z; SHA-256 4830ae0aa6b32597f9fac19addf31d61cad22b2e415d58e1995805857d69c62d)

---

## UI-TARS 72B DPO

DPO-labelled 72B UI-TARS checkpoint that its card marks as recommended: a native GUI agent model in the Qwen2-VL architecture for screen perception, element grounding and multi-step actions on web, mobile and desktop.

- Catalog URL: https://awesomecua.com/resources/url-0447e1fb83a794507aa2/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-10-18T11:34:13Z
- ID: url:0447e1fb83a794507aa2

### Limitations

Hub API at revision 43a70a29 lists 31 BF16 safetensors shards (about 73.4B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 22.7 on OSWorld with a 15-step budget and 24.6 with 50 steps for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-0447e1fb83a794507aa2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md

### Primary evidence

- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md (retrieved 2026-10-18T11:34:13Z; SHA-256 153f5c4f95261750b82701e1be952f30a12b14409c898ddf1535a6439b8c0850)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-72B-DPO (retrieved 2026-10-18T11:34:14Z; SHA-256 25e3b62ab6c1c4f63fe30f5c940ba7f0d90b0bf24e76c4e6966b82d4a2c4bdbd)
- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md (retrieved 2026-10-18T11:34:13Z; SHA-256 153f5c4f95261750b82701e1be952f30a12b14409c898ddf1535a6439b8c0850)

---

## UI-TARS 72B SFT

SFT-labelled 72B UI-TARS checkpoint: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and multi-step actions on web, mobile and desktop.

- Catalog URL: https://awesomecua.com/resources/url-fdb901523979ed1e831b/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-10-18T12:03:25Z
- ID: url:fdb901523979ed1e831b

### Limitations

Hub API at revision 8e7a0310 lists 64 F32 safetensors shards (about 73.4B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 18.8 on OSWorld with a 15-step budget and 46.6 on AndroidWorld for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-fdb901523979ed1e831b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md

### Primary evidence

- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md (retrieved 2026-10-18T12:03:25Z; SHA-256 c85c8ecb15f8b6909fc8f46cd9394987b08116bf61e01f3a1808da6708a8798e)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-72B-SFT/revision/8e7a03104915dee7bdbae5ea6e5a80264b316f9e (retrieved 2026-10-18T12:03:24Z; SHA-256 5a45bef8bcbee831d5a1ece2d6cfc674ceed2e978d991215308ef2f06b173e8b)
- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md (retrieved 2026-10-18T12:03:25Z; SHA-256 c85c8ecb15f8b6909fc8f46cd9394987b08116bf61e01f3a1808da6708a8798e)

---

## UI-TARS 7B DPO

DPO-labelled 7B UI-TARS checkpoint that its card marks as recommended: a native GUI agent model in the Qwen2-VL architecture for screen perception, element grounding and multi-step actions on web, mobile and desktop.

- Catalog URL: https://awesomecua.com/resources/url-a8b43a1f2bebd998f612/
- Original source: https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding, action-prediction
- Evidence checked: 2026-10-18T11:31:46Z
- ID: url:a8b43a1f2bebd998f612

### Limitations

Hub API at revision 727b0df3 lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 18.7 on OSWorld with a 15-step budget for this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-a8b43a1f2bebd998f612/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md

### Primary evidence

- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md (retrieved 2026-10-18T11:31:46Z; SHA-256 f66e5528903bccdc2f3f7fe88aa7c4d5f38c19d1d0cdb0c4cba6fad4353b979e)
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-7B-DPO (retrieved 2026-10-18T11:31:46Z; SHA-256 9f6cd8ef805710e84cd86b9cef72ce48c1338e3f6519e0fd0eeb04e76200f9f5)
- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md (retrieved 2026-10-18T11:31:46Z; SHA-256 f66e5528903bccdc2f3f7fe88aa7c4d5f38c19d1d0cdb0c4cba6fad4353b979e)

---

## UI-Venus-Navi-72B

A Qwen2.5-VL-based UI checkpoint for predicting navigation actions and locating interface elements from screenshots, trained with reinforcement fine-tuning.

- Catalog URL: https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/
- Original source: https://huggingface.co/inclusionAI/UI-Venus-Navi-72B
- Kind: model
- Review: curated
- Scope: core
- Environments: android, cross-platform
- Topics: grounding, mobile-navigation, reinforcement-learning, action-prediction
- Evidence checked: 2026-11-09T05:04:57Z
- ID: url:80ec6c9a43360adbbc6b

### Limitations

The repository contains model weight shards and an inference example. The card specifies transformers==4.49.0 and qwen-vl-utils and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/UI-Venus-Navi-72B

### Primary evidence

- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-72B (retrieved 2026-11-09T05:04:57Z; SHA-256 0e19ffd8829289410a825613838f492cdce98f2f04024bd9fbc817946f19d41c)
- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-72B (retrieved 2026-11-09T05:04:57Z; SHA-256 0e19ffd8829289410a825613838f492cdce98f2f04024bd9fbc817946f19d41c)

---

## VGA (Vision GUI Assistant)

Vision GUI Assistant (VGA) provides image-centric fine-tuning code and datasets to reduce hallucinations in vision-language GUI grounding.

- Catalog URL: https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/
- Original source: https://github.com/Linziyang1999/Vision-GUI-assistant
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:linziyang1999/vision-gui-assistant

- Record JSON: https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 90f65410bf548ea8f1798b6c9ff662c5e6f73ac8442e457d9b91f49d57fd954b)
- https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/LICENSE (retrieved 2026-11-04T13:22:42Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## VideoAgentTrek-IDM-s1-7B

Keyframe detection model for the VideoAgentTrek Video2Action pipeline, the first inverse-dynamics stage that finds GUI interaction moments in screen-recorded tutorial videos before a second model labels the actions.

- Catalog URL: https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/
- Original source: https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: video, data-generation
- Evidence checked: 2026-11-10T03:01:02Z
- ID: url:280f2ab56bbc0b630d81

### Limitations

Five safetensors shards of a Qwen2.5-VL checkpoint with tokenizer, processor and chat-template configs; the card declares Apache-2.0. The VideoAgentTrek video2action.py loads it through KEYFRAME_MODEL_PATH for stage 2 keyframe detection, with the IDM-s2 action identifier and an OpenAI-compatible API for validation and inner-monologue stages; a YOLO cursor detector filters videos beforehand.

- Record JSON: https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B

### Primary evidence

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B (retrieved 2026-11-10T03:01:02Z; SHA-256 f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671)
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B (retrieved 2026-11-10T03:01:02Z; SHA-256 f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671)

---

## VideoAgentTrek-IDM-s2-7B

Action identification model in the VideoAgentTrek Video2Action pipeline, which recovers GUI actions such as clicks and typed text from screen-recorded tutorial videos to build computer-use training trajectories.

- Catalog URL: https://awesomecua.com/resources/url-2e88b52ca1717a28fd32/
- Original source: https://huggingface.co/xlangai/VideoAgentTrek-IDM-s2-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: video, data-generation, action-prediction
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:2e88b52ca1717a28fd32

### Limitations

Five sharded safetensors files with processor and tokenizer configs; the card declares Apache-2.0. The README runs it after the VideoAgentTrek-ScreenFilter cursor detector and the VideoAgentTrek-IDM-s1-7B keyframe detector, and the pipeline also needs an OpenAI or DashScope API key.

- Record JSON: https://awesomecua.com/resources/url-2e88b52ca1717a28fd32/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/VideoAgentTrek-IDM-s2-7B

### Primary evidence

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s2-7B (retrieved 2026-11-10T03:01:04Z; SHA-256 fe8dcedcdd247cef5364d9400131125ca342f297b8044ea2f3671899754330d8)
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s2-7B (retrieved 2026-11-10T03:01:04Z; SHA-256 fe8dcedcdd247cef5364d9400131125ca342f297b8044ea2f3671899754330d8)

---

## VideoAgentTrek-ScreenFilter

Cursor-detection model in the VideoAgentTrek pipeline that filters screen-recorded tutorial videos by cursor presence before Video2Action extracts GUI action trajectories.

- Catalog URL: https://awesomecua.com/resources/url-c7e1d8863286e92c47a2/
- Original source: https://huggingface.co/xlangai/VideoAgentTrek-ScreenFilter
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: video, data-generation
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:c7e1d8863286e92c47a2

### Limitations

The repository holds one PyTorch checkpoint file, which video_preprocess.py loads as a YOLO model through YOLO_MODEL_PATH; license agpl-3.0 per the card. The README reports mining 39k YouTube tutorials into 1.52M interaction steps.

- Record JSON: https://awesomecua.com/resources/url-c7e1d8863286e92c47a2/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: agpl-3.0 — https://huggingface.co/xlangai/VideoAgentTrek-ScreenFilter

### Primary evidence

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-ScreenFilter (retrieved 2026-11-10T03:01:14Z; SHA-256 5a8f3711171dbd61ce37b19495b8a75e3725a615744098e9e708152c59211497)
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-ScreenFilter (retrieved 2026-11-10T03:01:14Z; SHA-256 5a8f3711171dbd61ce37b19495b8a75e3725a615744098e9e708152c59211497)

---

## WebRL Llama 3.1 8B

A WebRL browser-policy checkpoint for performing actions in the five website environments of WebArena.

- Catalog URL: https://awesomecua.com/resources/url-a6ee20fea67438d91e06/
- Original source: https://huggingface.co/zai-org/webrl-llama-3.1-8b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning
- Evidence checked: 2026-10-17T02:05:40Z
- ID: url:a6ee20fea67438d91e06

### Limitations

The official Hub API resolves the former THUDM namespace to zai-org. Seven safetensors shards and configuration/tokenizer files are public and ungated. The card marks the weight license as other without naming complete terms, so no permissive weight license is inferred. The card’s evaluation prose also names GLM-4 despite the Llama checkpoint identity; no score is imported.

- Record JSON: https://awesomecua.com/resources/url-a6ee20fea67438d91e06/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md

### Primary evidence

- https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md (retrieved 2026-10-17T02:05:40Z; SHA-256 4712446382f106a115a317d0ec6273a975545386b9cedf56946a96a56479dc9f)
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-8b (retrieved 2026-10-17T02:05:40Z; SHA-256 6523b7f198d8debec2f3074190812955c6251590b61f8a6ea1bbb681b8ea128f)
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-8b (retrieved 2026-10-17T02:02:28Z; SHA-256 6523b7f198d8debec2f3074190812955c6251590b61f8a6ea1bbb681b8ea128f)
- https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md (retrieved 2026-10-17T02:05:40Z; SHA-256 4712446382f106a115a317d0ec6273a975545386b9cedf56946a96a56479dc9f)
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-8b (retrieved 2026-10-17T19:15:06Z; SHA-256 96621f060dddec91453d8c2b451b3793a34b34810d82c7cd13ce4cb05ca90a76)
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-8b (retrieved 2026-10-17T19:15:06Z; SHA-256 96621f060dddec91453d8c2b451b3793a34b34810d82c7cd13ce4cb05ca90a76)

---

## WebRL outcome reward model 8B

The outcome-supervision checkpoint used by WebRL to score browser trajectories during policy training.

- Catalog URL: https://awesomecua.com/resources/url-d1e85aeb6d96859c109d/
- Original source: https://huggingface.co/zai-org/webrl-orm-llama-3.1-8b
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, reinforcement-learning, web-navigation
- Evidence checked: 2026-10-17T02:05:40Z
- ID: url:d1e85aeb6d96859c109d

### Limitations

The official API resolves the former THUDM namespace to zai-org and lists four safetensors shards. No model card or weight-license declaration is present in the inspected manifest. The official WebRL README identifies this as its outcome-supervised reward model, a training component.

- Record JSON: https://awesomecua.com/resources/url-d1e85aeb6d96859c109d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/zai-org/webrl-orm-llama-3.1-8b (retrieved 2026-10-17T02:05:40Z; SHA-256 8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e)
- https://huggingface.co/api/models/THUDM/webrl-orm-llama-3.1-8b (retrieved 2026-10-17T02:02:29Z; SHA-256 8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e)
- https://raw.githubusercontent.com/THUDM/WebRL/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 eb217b96c54c3c2ccfd3a27255c6fd740df40c2d6743ae811858339bf7f740b0)
- https://huggingface.co/api/models/zai-org/webrl-orm-llama-3.1-8b (retrieved 2026-10-17T02:05:40Z; SHA-256 8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e)

---

## WebShepherd 3B

A public text-based process-reward checkpoint from the Web-Shepherd collection for scoring web-agent decisions against task checklists.

- Catalog URL: https://awesomecua.com/resources/url-72f7fe0211c6551b945f/
- Original source: https://huggingface.co/LangAGI-Lab/WebShepherd_3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, web-navigation
- Evidence checked: 2026-10-17T02:45:20Z
- ID: url:72f7fe0211c6551b945f

### Limitations

The official project-linked collection identifies this public 3B checkpoint. The README uses a separate unavailable WebShepherd/web-shepherd-base URL. Two safetensors shards and a Qwen2 causal-language-model configuration are present. No model card or weight license is published in the inspected manifest.

- Record JSON: https://awesomecua.com/resources/url-72f7fe0211c6551b945f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/models/LangAGI-Lab/WebShepherd_3B (retrieved 2026-10-17T02:45:20Z; SHA-256 6f28e86a99b286a575c5e7f8d24d6901655971e9a091493950b59948f4b9ad9b)
- https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8 (retrieved 2026-10-17T02:45:05Z; SHA-256 647d9e7bdad5fe2c03a8cfcd34d93f3b2bf7c1553b517a4a843bc0113fa47456)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
- https://huggingface.co/LangAGI-Lab/WebShepherd_3B/raw/main/config.json (retrieved 2026-10-17T02:49:45Z; SHA-256 252ed290ec84ffd8fa686fb72df68afe7bbd8c19b80538c0b318db60cd107d09)
- https://huggingface.co/api/models/LangAGI-Lab/WebShepherd_3B (retrieved 2026-10-17T02:45:20Z; SHA-256 6f28e86a99b286a575c5e7f8d24d6901655971e9a091493950b59948f4b9ad9b)
