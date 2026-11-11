---
title: "Computer-use agent frameworks | AwesomeCUA"
url: https://awesomecua.com/categories/framework/
updated: 2026-11-10
type: category
lang: en
---

# Computer-use agent frameworks

Frameworks are libraries and SDKs for building, running, evaluating or training computer-use agents, from browser-automation agent libraries to reinforcement-learning training stacks.

> 672 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-11T08:21:20Z.

HTML page: https://awesomecua.com/categories/framework/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Each record is reviewed against its primary sources. Code, data, weights and document licenses are recorded separately.

## How to choose

| Framework | Platform | License | Linked records |
| --- | --- | --- | --- |
| [Browser Use](https://awesomecua.com/resources/github-browser-use-browser-use/) | Web | [MIT (code)](https://raw.githubusercontent.com/browser-use/browser-use/HEAD/LICENSE) | 59 |
| [Cua](https://awesomecua.com/resources/github-trycua-cua/) | Desktop | [MIT (code)](https://raw.githubusercontent.com/trycua/cua/HEAD/LICENSE.md) | 46 |
| [Epic EHR Browser Automation](https://awesomecua.com/resources/github-browser-automation-hub-epic-ehr-browser-automation/) | Web | [MIT (code)](https://raw.githubusercontent.com/Browser-Automation-Hub/epic-ehr-browser-automation/HEAD/LICENSE) | 13 |
| [MaaFramework](https://awesomecua.com/resources/github-maaxyz-maaframework/) | Desktop · Mobile · Cross-platform | — | 13 |
| [SCALE-CUA (THUDM)](https://awesomecua.com/resources/github-thudm-scale-cua/) | Desktop | — | 13 |
| [WebMCP](https://awesomecua.com/resources/github-webmachinelearning-webmcp/) | Web | — | 12 |

## Questions

### Which frameworks are mentioned most in the catalog?

[Browser Use](https://awesomecua.com/resources/github-browser-use-browser-use/) (58 records), [Cua](https://awesomecua.com/resources/github-trycua-cua/) (41 records) and [Epic EHR Browser Automation](https://awesomecua.com/resources/github-browser-automation-hub-epic-ehr-browser-automation/) (13 records) are mentioned in the reviewed sources of the most other catalog records.

### Which platforms do these frameworks cover?

Of 672 reviewed frameworks, 469 are tagged web, 309 desktop, 152 cross-platform and 105 mobile; 26 have no platform recorded. An entry tagged with several platforms counts under each.

### Which frameworks come with a research paper?

141 of 672 link the arXiv paper that introduces or documents them, for example [SCALE-CUA (THUDM)](https://awesomecua.com/resources/github-thudm-scale-cua/), [AgentLab](https://awesomecua.com/resources/github-servicenow-agentlab/) and [DigiRL](https://awesomecua.com/resources/github-digirl-agent-digirl/).

### Which licenses do frameworks declare?

The most common declared licenses are MIT (309), Apache-2.0 (159) and GPL-3.0 (7). 180 of 672 have no declared license in their record.

### How is this list ordered?

By the number of catalog records whose reviewed sources mention each entry, most first, then by name. The sort menu above the list switches to A–Z.

---

## Browser Use

Open-source browser agent library that runs locally with any LLM against a local or cloud browser, and also serves as a CLI for coding agents and as a driver for Claude's browser toolset.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-browser-use/
- Original source: https://github.com/browser-use/browser-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:browser-use/browser-use

- Record JSON: https://awesomecua.com/resources/github-browser-use-browser-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/browser-use/browser-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browser-use/browser-use/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 fcca30a036d122e34c943740c29d8cb91642f0c615050a8d54ec891c0eee56d2)
- https://raw.githubusercontent.com/browser-use/browser-use/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 135c57671b0ee957669b05a0ca00cc06f645496d351e2e732832c6e276da9a5e)

---

## Cua

Monorepo behind Cua Spaces, which gives agents full macOS or Linux desktops, plus Cua Driver for operating native apps, Lume for Apple Silicon VMs, Cua Bench and the CUA-S1 decision models.

- Catalog URL: https://awesomecua.com/resources/github-trycua-cua/
- Original source: https://github.com/trycua/cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, workflow
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:trycua/cua

- Record JSON: https://awesomecua.com/resources/github-trycua-cua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/trycua/cua/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/trycua/cua/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 12830b2eeb3edea7af9953b27987f3467fa90803c641e786db09a33643c714d7)
- https://raw.githubusercontent.com/trycua/cua/HEAD/LICENSE.md (retrieved 2026-10-16T06:42:05Z; SHA-256 c0779290c1d4783169aa3dbfb55feb505e563ef8a004bbf55298ceffcfbda8d9)

---

## Epic EHR Browser Automation

A browser automation scaffold for Epic EHR workflows such as appointments, patient lookup, notes and messaging. It documents authentication, sessions and example actions.

- Catalog URL: https://awesomecua.com/resources/github-browser-automation-hub-epic-ehr-browser-automation/
- Original source: https://github.com/Browser-Automation-Hub/epic-ehr-browser-automation
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, workflow, tool-integration
- Evidence checked: 2026-11-09T06:16:38Z
- ID: github:browser-automation-hub/epic-ehr-browser-automation

### Limitations

The repository lists authentication, session, action and utility modules with examples. The README describes local Puppeteer use and an optional managed-browser service, and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-browser-automation-hub-epic-ehr-browser-automation/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Browser-Automation-Hub/epic-ehr-browser-automation/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Browser-Automation-Hub/epic-ehr-browser-automation/HEAD/README.md (retrieved 2026-11-09T06:16:38Z; SHA-256 8b0bc6178f68d2fb50eefbd2b51d9954ca130fcf5b073070dd3751dcd1efa703)
- https://raw.githubusercontent.com/Browser-Automation-Hub/epic-ehr-browser-automation/HEAD/LICENSE (retrieved 2026-11-09T06:13:55Z; SHA-256 1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685)

---

## MaaFramework

MaaFramework is an image-recognition automation framework for black-box testing, with a low-code task pipeline and documented integration and API interfaces.

- Catalog URL: https://awesomecua.com/resources/github-maaxyz-maaframework/
- Original source: https://github.com/MaaXYZ/MaaFramework
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, windows, linux, macos, android
- Topics: automation, screen-understanding, workflow
- Evidence checked: 2026-11-09T19:57:10Z
- ID: github:maaxyz/maaframework

### Limitations

The repository lists C++ source, headers, samples, tests, and documentation. The README names Windows, Linux, macOS, and Android in its platform badge.

- Record JSON: https://awesomecua.com/resources/github-maaxyz-maaframework/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MaaXYZ/MaaFramework/HEAD/README.md (retrieved 2026-11-09T19:57:10Z; SHA-256 49b4064ba88dc41fa9c2bea4581d39b69684e9df4839ec1c5ff5436caac37dda)

---

## SCALE-CUA (THUDM)

Computer-use training framework with VeriGen task synthesis, adaptive rollout sampling, and visual-context segmentation.

- Catalog URL: https://awesomecua.com/resources/github-thudm-scale-cua/
- Original source: https://github.com/THUDM/SCALE-CUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, data-generation, efficiency
- Evidence checked: 2026-10-16T11:09:28Z
- ID: github:thudm/scale-cua

### Limitations

A distinct project from OpenGVLab/ScaleCUA, which documents arXiv:2509.15221.

- Record JSON: https://awesomecua.com/resources/github-thudm-scale-cua/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/SCALE-CUA/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)

---

## WebMCP

A client-side web API proposal that lets pages expose structured JavaScript tools to browser agents. Agents can invoke page functions while sharing the visible interface and context with users.

- Catalog URL: https://awesomecua.com/resources/github-webmachinelearning-webmcp/
- Original source: https://github.com/webmachinelearning/webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, human-in-the-loop, ui-design
- Evidence checked: 2026-11-09T19:57:58Z
- ID: github:webmachinelearning/webmcp

### Limitations

The repository contains API documentation and explainers. The README describes tool registration in page scripts and links to separate TypeScript type definitions.

- Record JSON: https://awesomecua.com/resources/github-webmachinelearning-webmcp/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/webmachinelearning/webmcp/HEAD/README.md (retrieved 2026-11-09T19:57:58Z; SHA-256 8ac90b8bcaa8ae476de7f9f453e3178a9a658f7108d41057ed04f628edbe6714)

---

## Stagehand

Browser automation framework combining code and natural-language actions.

- Catalog URL: https://awesomecua.com/resources/github-browserbase-stagehand/
- Original source: https://github.com/browserbase/stagehand
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:browserbase/stagehand

- Record JSON: https://awesomecua.com/resources/github-browserbase-stagehand/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/browserbase/stagehand/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browserbase/stagehand/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 fb2039ee569e37cf1d652ca26c0a1951a318d4ac3240018b958985c0aec91007)
- https://raw.githubusercontent.com/browserbase/stagehand/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 fac7e7cd1cfc504054ee1fc53c38e0f3099d7357917e85a73792f6511fe0ea96)

---

## AgentLab

Experiment framework for developing and evaluating browser agents.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-agentlab/
- Original source: https://github.com/ServiceNow/AgentLab
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:servicenow/agentlab

- Record JSON: https://awesomecua.com/resources/github-servicenow-agentlab/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/AgentLab/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ServiceNow/AgentLab/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 ca312434db1db852f96fb49bbc0a61f6a93cffe6c0dd3aa2b7ac814681ccc19e)
- https://raw.githubusercontent.com/ServiceNow/AgentLab/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)

---

## Midscene.js

Visual automation toolkit for web, mobile, and desktop interfaces.

- Catalog URL: https://awesomecua.com/resources/github-web-infra-dev-midscene/
- Original source: https://github.com/web-infra-dev/midscene
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: automation, grounding
- Evidence checked: 2026-10-16T06:40:53Z
- ID: github:web-infra-dev/midscene

- Record JSON: https://awesomecua.com/resources/github-web-infra-dev-midscene/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/web-infra-dev/midscene/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/web-infra-dev/midscene/HEAD/README.md (retrieved 2026-10-16T06:40:53Z; SHA-256 8cd83b12f4e1c1b22c27b6ae3ee5415564e61ff4072349ec512982a548ea6ec3)
- https://raw.githubusercontent.com/web-infra-dev/midscene/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 9d26ef3ec511840e10eeaaf1e1b211e196c838823baf6bf9033761f27ab349ce)

---

## VLM-R1

VLM-R1 provides reinforcement learning code for vision-language models, including a GUI training example and a reported defect detection model for interface screens.

- Catalog URL: https://awesomecua.com/resources/github-om-ai-lab-vlm-r1/
- Original source: https://github.com/om-ai-lab/VLM-R1
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: reinforcement-learning, screen-understanding, evaluation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: github:om-ai-lab/vlm-r1

### Limitations

The repository provides training scripts for GRPO, LoRA, multi-node, and multi-image runs. The GUI defect detection checkpoint is linked as a separate model release.

- Record JSON: https://awesomecua.com/resources/github-om-ai-lab-vlm-r1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/om-ai-lab/VLM-R1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/om-ai-lab/VLM-R1/HEAD/README.md (retrieved 2026-11-09T06:16:33Z; SHA-256 6cfadd69823b2af05f1b4c70d1cf78dbe8f361fe0722f03eb6f1524551d291f2)
- https://raw.githubusercontent.com/om-ai-lab/VLM-R1/HEAD/LICENSE (retrieved 2026-11-09T06:13:32Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## hai-agents

hai-agents is a Python SDK and CLI for launching browser and desktop agents through H Company's Agents API and monitoring their sessions.

- Catalog URL: https://awesomecua.com/resources/github-hcompai-hai-agents-python/
- Original source: https://github.com/hcompai/hai-agents-python
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: web-navigation, automation, observability, tool-integration
- Evidence checked: 2026-11-09T05:05:07Z
- ID: github:hcompai/hai-agents-python

### Limitations

The README requires Python 3.10 or newer and describes API key login. It declares an MIT license and offers an optional CLI package extra.

- Record JSON: https://awesomecua.com/resources/github-hcompai-hai-agents-python/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hcompai/hai-agents-python/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hcompai/hai-agents-python/HEAD/README.md (retrieved 2026-11-09T05:05:07Z; SHA-256 1351bd99173bf9d58aaac770f688d2adf3137bf16cc2c621bb025a40b4bfd885)
- https://raw.githubusercontent.com/hcompai/hai-agents-python/HEAD/LICENSE (retrieved 2026-11-09T05:07:28Z; SHA-256 c4f93176e215b03687e6badea344350b4640b7b6fda71590caea32f29f06a68c)

---

## puppeteer-extra

A modular plugin framework for Puppeteer, maintained in a monorepo with plugins and related packages.

- Catalog URL: https://awesomecua.com/resources/github-berstend-puppeteer-extra/
- Original source: https://github.com/berstend/puppeteer-extra
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, tool-integration
- Evidence checked: 2026-11-06T16:36:31Z
- ID: github:berstend/puppeteer-extra

### Limitations

The monorepo also includes playwright-extra for Playwright support. It uses Lerna and Yarn workspaces.

- Record JSON: https://awesomecua.com/resources/github-berstend-puppeteer-extra/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/berstend/puppeteer-extra/39248f1f5deeb21b1e7eb6ae07b8ef73f1231ab9/README.md (retrieved 2026-11-06T16:36:31Z; SHA-256 0f0b47a7506bf234286008258421ab6be6b0532ef6fc972c88bae33bd257beb7)

---

## DigiRL

Reinforcement learning for autonomous mobile device control.

- Catalog URL: https://awesomecua.com/resources/github-digirl-agent-digirl/
- Original source: https://github.com/DigiRL-agent/digirl
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:digirl-agent/digirl

- Record JSON: https://awesomecua.com/resources/github-digirl-agent-digirl/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/DigiRL-agent/digirl/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DigiRL-agent/digirl/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 464e26d88420cd2694abe4c014bfd088417622c3a980aadf19b2bf01988d5b65)
- https://raw.githubusercontent.com/DigiRL-agent/digirl/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Skyvern

Browser workflow automation using vision LLMs and a swarm of agents, offered as a Playwright-compatible SDK and a no-code workflow builder.

- Catalog URL: https://awesomecua.com/resources/github-skyvern-ai-skyvern/
- Original source: https://github.com/Skyvern-AI/skyvern
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:skyvern-ai/skyvern

- Record JSON: https://awesomecua.com/resources/github-skyvern-ai-skyvern/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Skyvern-AI/skyvern/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 68fda945255825907aeada13d19de19209708c14504ac975e63a235f0cd9343b)

---

## LangGraph

LangGraph is a stateful graph orchestration framework for building long-running, cyclical, and human-in-the-loop LLM and CUA agents.

- Catalog URL: https://awesomecua.com/resources/github-langchain-ai-langgraph/
- Original source: https://github.com/langchain-ai/langgraph
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: workflow, state-tracking, human-in-the-loop, memory
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:langchain-ai/langgraph

- Record JSON: https://awesomecua.com/resources/github-langchain-ai-langgraph/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/langchain-ai/langgraph/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/langchain-ai/langgraph/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 3a13e257af1216962d53d72414a7f44ac1fc5cea34d994bdff60ea2a3b045933)
- https://raw.githubusercontent.com/langchain-ai/langgraph/HEAD/LICENSE (retrieved 2026-11-04T13:42:03Z; SHA-256 d9bb52f2e3540d60ff50d8f0f5b6ba649b7fd346948c4c3d086c8afb120763c7)

---

## Notte

Web agent framework and cloud SDKs for managed Chrome sessions, adding a CLI, an MCP server for coding agents, serverless browser functions and an API that builds automations from English tasks.

- Catalog URL: https://awesomecua.com/resources/github-nottelabs-notte/
- Original source: https://github.com/nottelabs/notte
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:nottelabs/notte

- Record JSON: https://awesomecua.com/resources/github-nottelabs-notte/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nottelabs/notte/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 5ecb73264cce10b75ec04dea59aaff77ffde552259fba6932507779a35681c5b)

---

## Seg2Click

Training and inference implementation that predicts an executable-region mask and derives a GUI click from that mask.

- Catalog URL: https://awesomecua.com/resources/github-jcwang0602-seg2click/
- Original source: https://github.com/jcwang0602/Seg2Click
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T01:46:05Z
- ID: github:jcwang0602/seg2click

### Limitations

The repository provides training, evaluation, and a custom mask decoder. Its code license does not determine the licenses of the five model checkpoints. No model execution was performed.

- Record JSON: https://awesomecua.com/resources/github-jcwang0602-seg2click/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/jcwang0602/Seg2Click/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jcwang0602/Seg2Click/HEAD/README.md (retrieved 2026-10-17T01:46:05Z; SHA-256 2316acbef1207925b10b4770e14bdf69f6f4b6b3bc0ddb12e6be107d6f1425da)
- https://raw.githubusercontent.com/jcwang0602/Seg2Click/HEAD/LICENSE (retrieved 2026-10-17T01:52:51Z; SHA-256 57bcc2eb985fa6036bf2bde7f28c4fd359c6b3479a658fea768162cac2a75ba5)

---

## DeskMind Hands

A desktop agent harness that runs planner decisions through macOS input and accessibility controls, with a mock desktop, task verification and oracle-labelled training workflows.

- Catalog URL: https://awesomecua.com/resources/github-deskmind-ai-hands/
- Original source: https://github.com/deskmind-ai/hands
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux
- Topics: automation, screen-understanding, evaluation, data-generation
- Evidence checked: 2026-11-09T21:10:51Z
- ID: github:deskmind-ai/hands

### Limitations

Real desktop runs require macOS, Peekaboo, Screen Recording and Accessibility permissions. The mock desktop runs on Linux CI. The README declares an Apache-2.0 code license.

- Record JSON: https://awesomecua.com/resources/github-deskmind-ai-hands/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/deskmind-ai/hands/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/deskmind-ai/hands/HEAD/README.md (retrieved 2026-11-09T21:10:51Z; SHA-256 a8aa427ad23a4d15d5727f2cd0b00c4da4cc35c5ab3a694d87a9eb4a1a090e18)
- https://raw.githubusercontent.com/deskmind-ai/hands/HEAD/LICENSE (retrieved 2026-11-09T21:12:29Z; SHA-256 1ff13e6d4ef6873561edb424365c17c311cbe0807f4afa5d7dda46ab6c5c659d)

---

## Hronaut

Visible, persistent, dedicated browser runtime that coding agents can control without interrupting the user's personal browser.

- Catalog URL: https://awesomecua.com/resources/github-hronaut-hronaut/
- Original source: https://github.com/hronaut/hronaut
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T17:30:39Z
- ID: github:hronaut/hronaut

- Record JSON: https://awesomecua.com/resources/github-hronaut-hronaut/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hronaut/hronaut/main/README.md (retrieved 2026-11-04T17:30:39Z; SHA-256 5c50237d8669dc34a127be10c0f5c5cc0d5a4e95a2a96967f1321e6d713e8ba2)

---

## openadapt-ml

A Python research package for GUI-action models, with trajectory schemas, model adapters, fine-tuning, grounding, and a policy interface for predicting the next action.

- Catalog URL: https://awesomecua.com/resources/github-openadaptai-openadapt-ml/
- Original source: https://github.com/OpenAdaptAI/openadapt-ml
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, web
- Topics: action-prediction, grounding, imitation-learning, data-generation
- Evidence checked: 2026-11-09T06:16:36Z
- ID: github:openadaptai/openadapt-ml

### Limitations

The README describes synthetic training scenarios, adapters for Qwen3-VL and hosted API models, and a training extra. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-openadaptai-openadapt-ml/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OpenAdaptAI/openadapt-ml/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-ml/HEAD/README.md (retrieved 2026-11-09T06:16:36Z; SHA-256 f6ca09d9a6420a6bd92dce3af12076e92a17d8c783925b136c20a233a4c7d1ba)
- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-ml/HEAD/LICENSE (retrieved 2026-11-09T06:13:47Z; SHA-256 d84e5463aed154b79d26e367c06b9d90032d7ccdcb64d51c1e099a2fcf5301fc)

---

## CUA-Gym

CUA-Gym is a scalable pipeline for synthesizing interactive mock web environments and verifiable RLVR training tasks for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-cua-gym/
- Original source: https://github.com/xlang-ai/CUA-Gym
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, reinforcement-learning, sandbox, evaluation
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:xlang-ai/cua-gym

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-cua-gym/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/CUA-Gym/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/CUA-Gym/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 e8050e2739ae45248329cd505c9e9dde8a88e6b200f826734d9ecf2e3815366a)
- https://raw.githubusercontent.com/xlang-ai/CUA-Gym/HEAD/LICENSE (retrieved 2026-11-04T14:45:12Z; SHA-256 378b0f6fe2df24a4b83ca13662079088f1ae41fe3deb46f1afe47b1d546565b8)

---

## GenericAgent

GenericAgent is a minimal self-evolving agent framework that synthesizes reusable skills for browser, OS, and ADB mobile control.

- Catalog URL: https://awesomecua.com/resources/github-lsdefine-genericagent/
- Original source: https://github.com/lsdefine/GenericAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: self-reflection, memory, automation, tool-integration
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:lsdefine/genericagent

- Record JSON: https://awesomecua.com/resources/github-lsdefine-genericagent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/lsdefine/GenericAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lsdefine/GenericAgent/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 56e2af7c7dd8f05fc9a9682c5045ad5e428deb79001771b95c825f049ffa92e2)
- https://raw.githubusercontent.com/lsdefine/GenericAgent/HEAD/LICENSE (retrieved 2026-11-04T13:46:50Z; SHA-256 1d4ed949b4ec9b506d44198033115b8b9847aa0515f9d3465ab2b0d8f7d65a87)

---

## handraise

Human escalation and live-session handoff layer for Solari browser agents when encountering CAPTCHAs, 2FA, or ambiguity.

- Catalog URL: https://awesomecua.com/resources/github-sy-d-handraise/
- Original source: https://github.com/Sy-D/handraise
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, safety-security, web-navigation
- Evidence checked: 2026-11-04T17:55:24Z
- ID: github:sy-d/handraise

- Record JSON: https://awesomecua.com/resources/github-sy-d-handraise/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Sy-D/handraise/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Sy-D/handraise/main/README.md (retrieved 2026-11-04T17:55:24Z; SHA-256 fa69c1be691989a5412c7425dd6fa85880810b5bbb8a06c23cb1e6040fca9df4)
- https://raw.githubusercontent.com/Sy-D/handraise/HEAD/LICENSE (retrieved 2026-11-04T18:00:26Z; SHA-256 63c82295db55a7166347dd126b820796ca27a7d2f8a97584502b3091d02e40d4)

---

## MAI-UI inference and evaluation code

Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.

- Catalog URL: https://awesomecua.com/resources/github-tongyi-mai-mai-ui/
- Original source: https://github.com/Tongyi-MAI/MAI-UI
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, grounding, tool-integration
- Evidence checked: 2026-10-17T05:29:14Z
- ID: github:tongyi-mai/mai-ui

### Limitations

The original implementation is in the MAI-UI/ subdirectory, with an Apache-2.0 LICENSE there. The current root README also promotes Qwen-UI-Agent, but that follow-up directory contains only documentation/display assets in the inspected tree. The original MAI-UI/ implementation is released; the follow-up Qwen-UI-Agent directory contains documentation/display assets in the inspected tree.

- Record JSON: https://awesomecua.com/resources/github-tongyi-mai-mai-ui/record.json

### License declarations

- code: Apache-2.0 (MAI-UI subdirectory) — https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The implementation and LICENSE live under MAI-UI/. The Apache-2.0 declaration is scoped to MAI-UI/ implementation and LICENSE.
  Sources: https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE, https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/README.md

### Primary evidence

- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/README.md (retrieved 2026-10-17T05:29:14Z; SHA-256 f644a5c0d0eb29b0ff8d8552dd505c5ecedf7c9cd9ab8cf2c617a1a14ecd0c14)
- https://api.github.com/repos/Tongyi-MAI/MAI-UI (retrieved 2026-10-17T04:11:45Z; SHA-256 fd90bc766d7e73889d14e8d3c5c92d384fa86e163222808f6e492509f00a3656)
- https://api.github.com/repos/Tongyi-MAI/MAI-UI/git/trees/main?recursive=1 (retrieved 2026-10-17T04:11:46Z; SHA-256 4340b3d36bc56963fb8173079da8a0f7e91f195994d29fc47a9f7087cb56ffba)
- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE (retrieved 2026-10-17T05:29:15Z; SHA-256 bf989559906a7926b77390082e4267ff7b2b494e8f599a9dc5640319eb45c2ce)

---

## OpenMobile-2 code

Evaluation adapters and training guidance for OpenMobile-2 across Android emulators and browser-rendered mobile simulation.

- Catalog URL: https://awesomecua.com/resources/github-openmobile2-openmobile2-code/
- Original source: https://github.com/OpenMobile2/OpenMobile2-Code
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, tool-integration, evaluation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: github:openmobile2/openmobile2-code

### Limitations

The README marks evaluation code, checkpoints, environments, and data as released; data-construction scripts and other resources remain pending. Each benchmark runtime is started separately. Code terms do not establish dataset permissions.

- Record JSON: https://awesomecua.com/resources/github-openmobile2-openmobile2-code/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d)
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/LICENSE (retrieved 2026-10-17T01:52:51Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)

---

## pyppeteer

Pyppeteer is a Python library for automating Chrome and Chromium pages, with APIs for navigation, screenshots, element queries, and page JavaScript.

- Catalog URL: https://awesomecua.com/resources/github-pyppeteer-pyppeteer/
- Original source: https://github.com/pyppeteer/pyppeteer
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, web-navigation
- Evidence checked: 2026-11-09T21:10:15Z
- ID: github:pyppeteer/pyppeteer

### Limitations

The README requires Python 3.8 or later and declares an MIT license. It says the repository is unmaintained.

- Record JSON: https://awesomecua.com/resources/github-pyppeteer-pyppeteer/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/pyppeteer/pyppeteer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pyppeteer/pyppeteer/HEAD/README.md (retrieved 2026-11-09T21:10:15Z; SHA-256 7b981cf0b05e6660f1a301f07458bdae8ac20dbc8a3e6cc2a7584de15224bd1c)
- https://raw.githubusercontent.com/pyppeteer/pyppeteer/HEAD/LICENSE (retrieved 2026-11-09T21:12:14Z; SHA-256 b7ff9c007e9f3f58bd8d3c4387c7d7df9ed0f1211941422cdbe272ef54d84f95)

---

## Scrapeless Node SDK

A Node.js SDK for creating browser sessions controlled through Playwright or Puppeteer. It also exposes browser profiles, crawling, scraping, and proxy services.

- Catalog URL: https://awesomecua.com/resources/github-scrapeless-ai-sdk-node/
- Original source: https://github.com/scrapeless-ai/sdk-node
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, web-navigation
- Evidence checked: 2026-11-09T21:10:09Z
- ID: github:scrapeless-ai/sdk-node

### Limitations

The README provides browser connection examples and says an API key is required. It declares an MIT license and includes TypeScript definitions.

- Record JSON: https://awesomecua.com/resources/github-scrapeless-ai-sdk-node/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/scrapeless-ai/sdk-node/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scrapeless-ai/sdk-node/HEAD/README.md (retrieved 2026-11-09T21:10:09Z; SHA-256 b4e41e913b7c2dc405473df08a6e1a85385396d74af55ae53a1ec426021a8292)
- https://raw.githubusercontent.com/scrapeless-ai/sdk-node/HEAD/LICENSE (retrieved 2026-11-09T21:12:14Z; SHA-256 1fd8467561cebb8092262020e63e5f8dbe565ece3d2aa7e600145883068bf22c)

---

## Scrapeless Python SDK

The Scrapeless Python SDK creates managed browser sessions for Playwright and Pyppeteer, supports persistent profiles, and exposes web interaction and extraction services.

- Catalog URL: https://awesomecua.com/resources/github-scrapeless-ai-sdk-python/
- Original source: https://github.com/scrapeless-ai/sdk-python
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, automation, workflow
- Evidence checked: 2026-11-09T21:10:46Z
- ID: github:scrapeless-ai/sdk-python

### Limitations

The repository lists SDK code and examples. The README requires a Scrapeless API key and states that the project uses the MIT License.

- Record JSON: https://awesomecua.com/resources/github-scrapeless-ai-sdk-python/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/scrapeless-ai/sdk-python/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scrapeless-ai/sdk-python/HEAD/README.md (retrieved 2026-11-09T21:10:46Z; SHA-256 3214c0a822e4c1aca8a3740e324b3339066112945f317bf315f8edbed8bd2d8d)
- https://raw.githubusercontent.com/scrapeless-ai/sdk-python/HEAD/LICENSE (retrieved 2026-11-09T21:12:23Z; SHA-256 1fd8467561cebb8092262020e63e5f8dbe565ece3d2aa7e600145883068bf22c)

---

## ScreenParse Webshot toolkit

Official ScreenParse code: the Webshot toolkit that renders websites with Playwright, records visible DOM elements as boxed, nested annotations, relabels them with Qwen3-VL, exports YOLO data and evaluates parsers.

- Catalog URL: https://awesomecua.com/resources/github-saidgurbuz-screenparse/
- Original source: https://github.com/Saidgurbuz/screenparse
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, data-generation, evaluation
- Evidence checked: 2026-10-18T15:41:48Z
- ID: github:saidgurbuz/screenparse

### Limitations

The README calls this the official code release for the ICML 2026 paper and links the ScreenParse dataset and the ScreenVLM and ScreenParser checkpoints on Hugging Face; none of them is stored in this repository, and the only training script, scripts/train.py, trains Ultralytics YOLO detectors. At commit b294659b, webshot/src/webshot/worker.py drives Chromium through Playwright, dismisses cookie banners and overlays, and records each visible DOM element's tag, role, attributes, text, bounding rectangle and parent and child indices with a screenshot; vlm_refine.py and vlm_quality_score.py relabel elements and score annotation quality with Qwen3-VL-8B-Instruct by default through vLLM. The evaluation CLI runs YOLO, RT-DETR, OmniParser weights, Qwen3-VL, InternVL3, Gemini, PaddleOCR-VL and ScreenVLM on YOLO-format, GroundCUA or ScreenSpot data and reports PageIoU, label PageIoU, mAP, recall and NED. The Webshot README reports 771K screenshots and 21M elements for the dataset. MIT covers this code only; dataset and checkpoint terms are declared on their own Hub pages.

- Record JSON: https://awesomecua.com/resources/github-saidgurbuz-screenparse/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Saidgurbuz/screenparse/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/README.md (retrieved 2026-10-18T15:41:48Z; SHA-256 50b7a84830bcbbbe8ace25b163f42df2ede1accd6fccd3b84de807c4cea022c5)
- https://api.github.com/repos/Saidgurbuz/screenparse/git/trees/b294659b87fb75f3fd4964310fd2039d385749b3?recursive=1 (retrieved 2026-10-18T15:41:49Z; SHA-256 4fc52981fb4436b08410dc6804fc402abf7e2846aa0a497a25a2bb30247304d3)
- https://api.github.com/repos/Saidgurbuz/screenparse/git/commits/b294659b87fb75f3fd4964310fd2039d385749b3 (retrieved 2026-10-18T15:41:50Z; SHA-256 05221bb76e826548ffe50c72de35d14dfcf84cac210332e8b1d61bd7d1a408e2)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/README.md (retrieved 2026-10-18T15:41:48Z; SHA-256 8230a72807ba5a42426b0c37bc9f622535757217639e563052d5376a9457387b)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/worker.py (retrieved 2026-10-18T15:41:51Z; SHA-256 4b946c642e62e51ca74223882486f8ea14d60615a3b0c864f81ccead16b6c4cb)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/vlm_refine.py (retrieved 2026-10-18T15:41:51Z; SHA-256 bbe1e8d6480be763a960acf26233371436a8c7d56fa1e9453941ddc8e7397125)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/cli.py (retrieved 2026-10-18T15:41:51Z; SHA-256 46668f27c02bfb2e72e5e46d367da7edae0a92bc96e6d11eb3ac3e162d03ae6f)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/evaluation/cli.py (retrieved 2026-10-18T15:41:51Z; SHA-256 3926f452b0ab3d851f4bfb51dd19a9cb9f69a27884af627955a8bf6ebf44ae08)
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/HEAD/LICENSE (retrieved 2026-10-18T15:42:37Z; SHA-256 218ebc9b68eff8966a9254026d63d88c67c8e8aa3127de3dda7a66cae7d666a1)

---

## UI-Genie

Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.

- Catalog URL: https://awesomecua.com/resources/github-euphoria16-ui-genie/
- Original source: https://github.com/Euphoria16/UI-Genie
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, reward-models, imitation-learning
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:euphoria16/ui-genie

### Limitations

The tree contains ms-swift-based training and AndroidControl evaluation scripts. The README says AndroidLab/Android Arena scripts and the 72B checkpoint are still forthcoming. It declares MIT but links a root LICENSE absent from the inspected tree, so the exact code-license scope remains unresolved. Separate Hub weights and data have their own declarations.

- Record JSON: https://awesomecua.com/resources/github-euphoria16-ui-genie/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README declares MIT and links a root LICENSE, but the complete retained tree has no root LICENSE; bundled ms-swift has its own license. The README declares MIT and links a root LICENSE absent from the retained tree; the bundled ms-swift license covers that component.
  Sources: https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md, https://api.github.com/repos/Euphoria16/UI-Genie/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://api.github.com/repos/Euphoria16/UI-Genie (retrieved 2026-10-17T03:59:54Z; SHA-256 a53e4cd3b4391c03c9334745152f8c1f66aff7590051f9bdb7e78b81c6c99a24)
- https://api.github.com/repos/Euphoria16/UI-Genie/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:55Z; SHA-256 c27c6d88d043c964776c04a74517d48644418dca2f5ae9c8ba778d082c12a6ae)

---

## @mcp-b

TypeScript packages that connect pages registering tools through the WebMCP document.modelContext API to MCP, so agents in an extension, the browser or desktop clients can call them.

- Catalog URL: https://awesomecua.com/resources/github-webmcp-org-npm-packages/
- Original source: https://github.com/WebMCP-org/npm-packages
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation
- Evidence checked: 2026-11-10T06:29:32Z
- ID: github:webmcp-org/npm-packages

### Limitations

Packages include @mcp-b/global, @mcp-b/transports, @mcp-b/webmcp-local-relay, @mcp-b/react-webmcp, usewebmcp and @mcp-b/smart-dom-reader. Development needs Node.js 22.18 or later and pnpm 10. License: MIT.

- Record JSON: https://awesomecua.com/resources/github-webmcp-org-npm-packages/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/WebMCP-org/npm-packages/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WebMCP-org/npm-packages/c9d70eccd519c82a1afd22eaaab19f6a37007ad5/README.md (retrieved 2026-11-10T06:29:32Z; SHA-256 be6f7f5b06c22f8bca041c97ca99db096e22ddfb8114c67196738e80c80c5510)
- https://raw.githubusercontent.com/WebMCP-org/npm-packages/HEAD/LICENSE (retrieved 2026-11-10T06:22:35Z; SHA-256 94c733ee952e0c922e566db77612b773e29c19f4fc926c29c1708e8ab92a823a)

---

## Agent Workflow Memory implementation

Research code that extracts reusable browser-task routines from demonstrations or prior executions, stores them as workflow memory and reuses them during subsequent navigation.

- Catalog URL: https://awesomecua.com/resources/github-zorazrw-agent-workflow-memory/
- Original source: https://github.com/zorazrw/agent-workflow-memory
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, memory, web-navigation
- Evidence checked: 2026-10-17T12:30:56Z
- ID: github:zorazrw/agent-workflow-memory

### Limitations

The repository releases separate WebArena and Mind2Web pipelines for online or offline workflow induction and use. WebArena execution requires separately configured browser environments, while Mind2Web workflows require the original dataset and rankings. Apache-2.0 is recorded for this implementation; external benchmark, model and service terms remain separate.

- Record JSON: https://awesomecua.com/resources/github-zorazrw-agent-workflow-memory/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Project source LICENSE, without transferring rights to external benchmark data or model services.
  Sources: https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/README.md (retrieved 2026-10-17T12:30:56Z; SHA-256 dd2cc4823b2a0b913f44fbaecf9f2cea98257871bdf974de6979459e49cb7b63)
- https://api.github.com/repos/zorazrw/agent-workflow-memory (retrieved 2026-10-17T12:30:56Z; SHA-256 f5c44d559932a22add3e94727b9b413d7c286f835db1396ae0fa1f05e20e773e)
- https://api.github.com/repos/zorazrw/agent-workflow-memory/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:06Z; SHA-256 602e2238829ad29ef15c75ac7dc61f8bd3dee6a1a74adf0d8ce023067fde6da3)
- https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/webarena/README.md (retrieved 2026-10-17T12:34:10Z; SHA-256 1e504b3bd326f7858b39e7f2bedf5ff55d69ffb126e11af364b4184fb980882e)
- https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/mind2web/README.md (retrieved 2026-10-17T12:34:11Z; SHA-256 e047de93e1c73a39ab6bbf310f02e6023d15c2b06a2b1e80ad4a0875181a9533)
- https://raw.githubusercontent.com/zorazrw/agent-workflow-memory/HEAD/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## AgentGym

AgentGym provides interactive environments for developing and evaluating agents, including web tasks in WebShop and WebArena, with trajectory collection and training support.

- Catalog URL: https://awesomecua.com/resources/github-woooodyy-agentgym/
- Original source: https://github.com/WooooDyy/AgentGym
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, reinforcement-learning, data-generation
- Evidence checked: 2026-11-09T06:16:34Z
- ID: github:woooodyy/agentgym

### Limitations

The release includes the agentenv Python package and environment servers. The README links separate AgentEval benchmark and AgentTraj-L trajectory releases.

- Record JSON: https://awesomecua.com/resources/github-woooodyy-agentgym/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/WooooDyy/AgentGym/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WooooDyy/AgentGym/HEAD/README.md (retrieved 2026-11-09T06:16:34Z; SHA-256 086fb4cebe0f7be202f44bf3d406dcc3202a1c08d2bc074e99413cf7368a24d0)
- https://raw.githubusercontent.com/WooooDyy/AgentGym/HEAD/LICENSE (retrieved 2026-11-09T06:13:38Z; SHA-256 8ad66ce3d27068244b92e10cf1373ad5b9d52ee9c0d0e1b3fae7697eb66b9168)

---

## AgentGym-RL

A reinforcement-learning framework for multi-turn agents that includes WebArena navigation tasks and a method for increasing interaction length during training.

- Catalog URL: https://awesomecua.com/resources/github-woooodyy-agentgym-rl/
- Original source: https://github.com/WooooDyy/AgentGym-RL
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, long-horizon, web-navigation, evaluation
- Evidence checked: 2026-11-09T21:09:34Z
- ID: github:woooodyy/agentgym-rl

### Limitations

The repository includes training code and examples. The README documents PPO, GRPO, RLOO and REINFORCE++ and recommends CUDA, PyTorch and Python for setup.

- Record JSON: https://awesomecua.com/resources/github-woooodyy-agentgym-rl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/WooooDyy/AgentGym-RL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WooooDyy/AgentGym-RL/HEAD/README.md (retrieved 2026-11-09T21:09:34Z; SHA-256 c90878180c0bd560a5114227839d918ecb91d0b5d80fdf64f02ea4ea5cbc2b95)
- https://raw.githubusercontent.com/WooooDyy/AgentGym-RL/HEAD/LICENSE (retrieved 2026-11-09T21:11:47Z; SHA-256 ae88eae55dad9b25b964260a8c66656dd33158a522783022a89359f0cc9c2d8c)

---

## AgentLab-Knows

AgentLab-Knows extends AgentLab with agent configurations for evaluating browser agents on Google Workspace Docs, Sheets and Slides tasks in the Knows benchmark.

- Catalog URL: https://awesomecua.com/resources/github-farhanishmam-agentlab-knows/
- Original source: https://github.com/farhanishmam/AgentLab-Knows
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-09T21:08:43Z
- ID: github:farhanishmam/agentlab-knows

### Limitations

The README includes an installation command and a Study example using a prebuilt AGENT_* configuration.

- Record JSON: https://awesomecua.com/resources/github-farhanishmam-agentlab-knows/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/farhanishmam/AgentLab-Knows/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/farhanishmam/AgentLab-Knows/HEAD/README.md (retrieved 2026-11-09T21:08:43Z; SHA-256 bf7c22ef015cb6c53249dafaa0c1e5844a72e37d32b725110be92de389fa87b7)
- https://raw.githubusercontent.com/farhanishmam/AgentLab-Knows/HEAD/LICENSE (retrieved 2026-11-09T21:11:14Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)

---

## arc-cua

arc-cua is a macOS computer-use package with an app-window driver and a decision-model loop for executing bounded desktop subtasks handed off by an agent.

- Catalog URL: https://awesomecua.com/resources/github-shhivv-arc-cua/
- Original source: https://github.com/shhivv/arc-cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, efficiency, grounding, safety-security
- Evidence checked: 2026-11-09T21:10:49Z
- ID: github:shhivv/arc-cua

### Limitations

The driver is exposed through Python and MCP interfaces. The action loop accepts a decision-model provider and validates its choices; the README describes API-key requirements for model-backed use.

- Record JSON: https://awesomecua.com/resources/github-shhivv-arc-cua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/shhivv/arc-cua/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shhivv/arc-cua/HEAD/README.md (retrieved 2026-11-09T21:10:49Z; SHA-256 881cbddc889b10b0b48d59fc7ce6c243aa1042ac678df0a7210fb0e8f7c98fdb)
- https://raw.githubusercontent.com/shhivv/arc-cua/HEAD/LICENSE (retrieved 2026-11-09T21:12:29Z; SHA-256 1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685)

---

## AutoGen

AutoGen is Microsoft's multi-agent conversation framework including MultimodalWebSurfer and Magentic-One for web and desktop tasks.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-autogen/
- Original source: https://github.com/microsoft/autogen
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: workflow, planning, web-navigation, tool-integration
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:microsoft/autogen

- Record JSON: https://awesomecua.com/resources/github-microsoft-autogen/record.json

### License declarations

- code: CC-BY-4.0 — https://raw.githubusercontent.com/microsoft/autogen/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/autogen/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 60fa90168565070a61b0f28296ff590bd6853da2477141f5ed0775007c20d7f2)
- https://raw.githubusercontent.com/microsoft/autogen/HEAD/LICENSE (retrieved 2026-11-04T13:46:51Z; SHA-256 7e7170e3cebf88a9f60c7b8421418323c09304da1af4d5e90f4da1dc1c8a2661)

---

## AutoGPT

AutoGPT is an open-source autonomous agent platform for building, orchestrating, and running multi-step web and workspace automation agents.

- Catalog URL: https://awesomecua.com/resources/github-significant-gravitas-autogpt/
- Original source: https://github.com/Significant-Gravitas/AutoGPT
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: planning, workflow, automation, tool-integration
- Evidence checked: 2026-11-04T13:12:36Z
- ID: github:significant-gravitas/autogpt

- Record JSON: https://awesomecua.com/resources/github-significant-gravitas-autogpt/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Significant-Gravitas/AutoGPT/HEAD/README.md (retrieved 2026-11-04T13:12:36Z; SHA-256 78d56ddcb2117f80ee43e26ee2dc44fe22a20c657a6a0bd102f7450978605465)

---

## Brobot

Brobot is a Java visual automation framework that recognizes interface elements and models application states to navigate, perform actions and recover from errors.

- Catalog URL: https://awesomecua.com/resources/github-jspinak-brobot/
- Original source: https://github.com/jspinak/brobot
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: automation, state-tracking, robustness
- Evidence checked: 2026-11-09T19:57:27Z
- ID: github:jspinak/brobot

### Limitations

The repository includes the core library, examples, documentation and GUI integration tests. The README declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-jspinak-brobot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/jspinak/brobot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jspinak/brobot/HEAD/README.md (retrieved 2026-11-09T19:57:27Z; SHA-256 d0beafe0b4842d70641180cc937a0ea2db54762a0c2fef7dcb71360a78e3c405)
- https://raw.githubusercontent.com/jspinak/brobot/HEAD/LICENSE (retrieved 2026-11-09T14:20:57Z; SHA-256 70167e6d633b0e4f530c296c70614e6531923138b7b792105b4740a9e566eb14)

---

## Capybara

Capybara is a web application acceptance testing framework that simulates user interactions through browser and headless drivers.

- Catalog URL: https://awesomecua.com/resources/github-teamcapybara-capybara/
- Original source: https://github.com/teamcapybara/capybara
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, web-navigation, evaluation
- Evidence checked: 2026-11-06T16:36:33Z
- ID: github:teamcapybara/capybara

### Limitations

Capybara requires Ruby 3.0.0 or later. Its default RackTest driver does not support JavaScript or remote applications.

- Record JSON: https://awesomecua.com/resources/github-teamcapybara-capybara/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/teamcapybara/capybara/265d2d175f4be3ddf785d7597bdfd19b231f844a/README.md (retrieved 2026-11-06T16:36:33Z; SHA-256 f0a832e3a8c188d7bf534e44afd6a1072953d593cb00d25eed323f02266e7808)

---

## ClawGUI

Framework for GUI agent training, evaluation, and deployment.

- Catalog URL: https://awesomecua.com/resources/github-zju-real-clawgui/
- Original source: https://github.com/ZJU-REAL/ClawGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: reinforcement-learning, evaluation
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:zju-real/clawgui

- Record JSON: https://awesomecua.com/resources/github-zju-real-clawgui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ZJU-REAL/ClawGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZJU-REAL/ClawGUI/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 3f0aaefce32210dfba428fcf9e609e04e75d4d1520d24a3a6377611a9b83fa6d)
- https://raw.githubusercontent.com/ZJU-REAL/ClawGUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 af69329b4667040c498cc87dfcc165db1f5f9452fe2ad3024ad7eef63d467666)

---

## CLI-Anything

CLI-Anything automatically wraps professional desktop GUI applications such as GIMP, Blender, and LibreOffice into structured agent-native CLIs.

- Catalog URL: https://awesomecua.com/resources/github-hkuds-cli-anything/
- Original source: https://github.com/HKUDS/CLI-Anything
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: tool-integration, automation, workflow
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:hkuds/cli-anything

- Record JSON: https://awesomecua.com/resources/github-hkuds-cli-anything/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/HKUDS/CLI-Anything/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HKUDS/CLI-Anything/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 24669c9549ad753b173eead4ffc465ebc0b8dc9b4d64e7be73cd5b3b03f56ac9)
- https://raw.githubusercontent.com/HKUDS/CLI-Anything/HEAD/LICENSE (retrieved 2026-11-04T13:41:39Z; SHA-256 0cff1a8ac2a381870a2c57cbe9b25f95bea0925b39b7fbf6a04ec23df7c77760)

---

## Computer Use OOTB

Gradio desktop GUI agent for Windows and macOS that needs no Docker, using Claude 3.5 Computer Use over the API or ShowUI and UI-TARS run locally, with multi-display and phone remote control.

- Catalog URL: https://awesomecua.com/resources/github-showlab-computer-use-ootb/
- Original source: https://github.com/showlab/computer_use_ootb
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: workflow
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:showlab/computer_use_ootb

- Record JSON: https://awesomecua.com/resources/github-showlab-computer-use-ootb/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/showlab/computer_use_ootb/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/showlab/computer_use_ootb/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 7b53e58d3efb35d23e58bd75bfa6d36f1e57af9f63556c34935726cead47e322)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://raw.githubusercontent.com/showlab/computer_use_ootb/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 cebb89bae373fa4f9a210ed5b664fbbfcbdb7ac8b5d8c34bfa7e8905d1f63b4e)

---

## CopilotKit OpenBot

Self-hosted enterprise AI assistant and computer-use workspace by CopilotKit with containerized sandboxing and skill orchestration.

- Catalog URL: https://awesomecua.com/resources/github-copilotkit-openbot/
- Original source: https://github.com/CopilotKit/OpenBot
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: sandbox, tool-integration, workflow, automation
- Evidence checked: 2026-11-04T17:20:45Z
- ID: github:copilotkit/openbot

- Record JSON: https://awesomecua.com/resources/github-copilotkit-openbot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/CopilotKit/OpenBot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CopilotKit/OpenBot/main/README.md (retrieved 2026-11-04T17:20:45Z; SHA-256 7c00372f0c436f51e3559fd0e85046cdeddcc9b7089996fc40b8ba8285d0593f)
- https://raw.githubusercontent.com/CopilotKit/OpenBot/HEAD/LICENSE (retrieved 2026-11-04T17:26:38Z; SHA-256 6d35a6bb107ae508da34636387f6208e75a6938e797bc0d5bfa9489d2ca95bad)

---

## CUAWright (formerly Webwright)

Agent framework for browser and desktop tasks using automation code.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-webwright/
- Original source: https://github.com/microsoft/Webwright
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: tool-integration
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:microsoft/webwright

- Record JSON: https://awesomecua.com/resources/github-microsoft-webwright/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/Webwright/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/Webwright/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 7c0f87f684e5ed4d77b175b63a5dcaf0a268644c3662c723713de4cf0ac1de40)
- https://raw.githubusercontent.com/microsoft/Webwright/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## cube-harness

cube-harness runs agent evaluations across compatible benchmarks, including MiniWob, and provides trajectories, screenshots, and an experiment viewer.

- Catalog URL: https://awesomecua.com/resources/github-the-ai-alliance-cube-harness/
- Original source: https://github.com/the-AI-Alliance/cube-harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, observability, recording
- Evidence checked: 2026-11-09T21:10:35Z
- ID: github:the-ai-alliance/cube-harness

### Limitations

The repository includes runtime source code, recipes, tests, and documentation. Its README says the project is in alpha and uses Ray for parallel execution.

- Record JSON: https://awesomecua.com/resources/github-the-ai-alliance-cube-harness/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/the-AI-Alliance/cube-harness/HEAD/README.md (retrieved 2026-11-09T21:10:35Z; SHA-256 ef985f2189e0ccbdb75204bf856b9ae27b4c0824ff5d119454c63384674865c1)

---

## Eko

Eko is a JavaScript framework for building multi-step agents that operate in computer and browser environments, with workflow and tool controls.

- Catalog URL: https://awesomecua.com/resources/github-fellouai-eko/
- Original source: https://github.com/FellouAI/eko
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, planning, automation, human-in-the-loop
- Evidence checked: 2026-11-09T21:09:44Z
- ID: github:fellouai/eko

### Limitations

The source describes browser and Node.js packages, parallel agent execution, pause and resume controls, and MCP integration. It states an MIT license.

- Record JSON: https://awesomecua.com/resources/github-fellouai-eko/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/FellouAI/eko/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FellouAI/eko/HEAD/README.md (retrieved 2026-11-09T21:09:44Z; SHA-256 8e9f6c597bcf826c69b2daf15a33db7c8f9162eabab7b8e25eb32b811454691b)
- https://raw.githubusercontent.com/FellouAI/eko/HEAD/LICENSE (retrieved 2026-11-09T21:12:08Z; SHA-256 7a9b55f12e0d708b8fb0e349c3229ea8bb725aa1ee333e5391909df3935019bd)

---

## midscene-pc

midscene-pc extends Midscene.js to local and remote PC desktops, enabling natural-language GUI automation across Windows, Linux, and macOS.

- Catalog URL: https://awesomecua.com/resources/github-mofangbao-midscene-pc/
- Original source: https://github.com/Mofangbao/midscene-pc
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, linux, macos
- Topics: automation, grounding, screen-understanding
- Evidence checked: 2026-11-04T15:45:42Z
- ID: github:mofangbao/midscene-pc

- Record JSON: https://awesomecua.com/resources/github-mofangbao-midscene-pc/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Mofangbao/midscene-pc/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Mofangbao/midscene-pc/HEAD/README.md (retrieved 2026-11-04T15:45:42Z; SHA-256 04f11e5d34949f51f960840ebaac9d40ce522d50e102af80e572ad889d8c9213)
- https://raw.githubusercontent.com/Mofangbao/midscene-pc/HEAD/LICENSE (retrieved 2026-11-04T15:57:30Z; SHA-256 1e08d60ec9e5067a54c51fcedbce65d82dc55aa363a2ff1336bcdd6340b1f24f)

---

## Nova Act SDK

A Python SDK for defining and deploying browser agents that carry out UI workflows. Nova Act supports code-guided steps, human escalation and workflow monitoring.

- Catalog URL: https://awesomecua.com/resources/github-aws-nova-act/
- Original source: https://github.com/aws/nova-act
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, linux, windows, web
- Topics: web-navigation, workflow, human-in-the-loop, tool-integration
- Evidence checked: 2026-11-09T21:08:45Z
- ID: github:aws/nova-act

### Limitations

The repository includes SDK source and documents API-key authentication. The README names macOS, Ubuntu, WSL2 and Windows prerequisites, plus AWS deployment and console monitoring.

- Record JSON: https://awesomecua.com/resources/github-aws-nova-act/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/aws/nova-act/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aws/nova-act/HEAD/README.md (retrieved 2026-11-09T21:08:45Z; SHA-256 7ace8eda84d6b75ab303536c32eb51e262c16d96543bc307d8a7b73a1e54f9cb)
- https://raw.githubusercontent.com/aws/nova-act/HEAD/LICENSE (retrieved 2026-11-09T21:11:16Z; SHA-256 9c91b6e7d0a4507284e4b11b1d414898a3f97e8e3136663d3161860ce7e13479)

---

## open-compute

Model-agnostic computer-use core providing a unified agent loop and MCP server across Claude, OpenAI CUA, and local backends.

- Catalog URL: https://awesomecua.com/resources/github-ellmos-ai-open-compute/
- Original source: https://github.com/ellmos-ai/open-compute
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: automation, tool-integration, safety-security
- Evidence checked: 2026-11-04T16:30:12Z
- ID: github:ellmos-ai/open-compute

- Record JSON: https://awesomecua.com/resources/github-ellmos-ai-open-compute/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ellmos-ai/open-compute/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ellmos-ai/open-compute/HEAD/README.md (retrieved 2026-11-04T16:30:12Z; SHA-256 689f7f0a7c06b4aaa9ce9d60b61e5bae3c6e24f16230307808b95108bea1d412)
- https://raw.githubusercontent.com/ellmos-ai/open-compute/HEAD/LICENSE (retrieved 2026-11-04T16:34:49Z; SHA-256 007a0f43ee0ef9ef24430d68e3d05bacf17aad354c2cb78e962d14c27d2010a7)

---

## OpenHuman

OpenHuman is an agent harness offered as a desktop app and Rust library, with browser and desktop controls that select actions from visible buttons.

- Catalog URL: https://awesomecua.com/resources/github-tinyhumansai-openhuman/
- Original source: https://github.com/tinyhumansai/openhuman
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux, web
- Topics: automation, tool-integration, efficiency
- Evidence checked: 2026-11-09T21:10:54Z
- ID: github:tinyhumansai/openhuman

### Limitations

The README lists installers for macOS, Windows, and Linux. It describes memory, tool search, and a Rust library for embedding agents.

- Record JSON: https://awesomecua.com/resources/github-tinyhumansai-openhuman/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/tinyhumansai/openhuman/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tinyhumansai/openhuman/HEAD/README.md (retrieved 2026-11-09T21:10:54Z; SHA-256 19198f20e2cccc4ab8d6fd3a35d577088e360f809e4928afd0ce42c2082ea0fe)
- https://raw.githubusercontent.com/tinyhumansai/openhuman/HEAD/LICENSE (retrieved 2026-11-09T21:12:33Z; SHA-256 f80cba4854c07fdc7e39a44088e80c368bad7d430b1f1e634100351ea67aa7b2)

---

## Plan-and-Act

A web-agent framework that separates high-level planning from action execution, with replanning and synthetic planner-data generation components.

- Catalog URL: https://awesomecua.com/resources/github-squeezeailab-plan-and-act/
- Original source: https://github.com/SqueezeAILab/plan-and-act
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:06Z
- ID: github:squeezeailab/plan-and-act

### Limitations

Runnable entry points, framework modules and synthetic-data tooling are published. The repository code declares MIT; separate model and dataset cards have their own declarations. Its setup targets WebArena-Lite and requires that external environment.

- Record JSON: https://awesomecua.com/resources/github-squeezeailab-plan-and-act/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 feee31aa4d0801cb364578099a13e4f9cdcaa4eb5fbf4312b3fc3f8edd479a14)
- https://api.github.com/repos/SqueezeAILab/plan-and-act (retrieved 2026-10-17T02:02:05Z; SHA-256 eada6ee9aa180f55daca059c5e7a4922b320cccb0514864108eba9040b52415c)
- https://api.github.com/repos/SqueezeAILab/plan-and-act/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:05Z; SHA-256 10ff0a1c1abe25454541949fdaac1869d68b5d4426fbb5ef1d487657afcd26f5)
- https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/LICENSE (retrieved 2026-10-17T02:02:15Z; SHA-256 f86e78202a51ab013e1cc47ba37386134601317f5a0c4e4ed287981b52159122)
- https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/LICENSE (retrieved 2026-10-17T02:02:15Z; SHA-256 f86e78202a51ab013e1cc47ba37386134601317f5a0c4e4ed287981b52159122)

---

## Proposer-Agent-Evaluator (PAE)

A browser-agent training system that proposes tasks, collects visual interaction trajectories, and uses automated evaluation to drive policy improvement.

- Catalog URL: https://awesomecua.com/resources/github-amazon-science-pae/
- Original source: https://github.com/amazon-science/PAE
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:06Z
- ID: github:amazon-science/pae

### Limitations

Source code and browser-environment modules are present. The repository LICENSE is CC-BY-NC-4.0, while its README describes that license as applying to a dataset, leaving code scope ambiguous. The separately linked dataset is gated; model and dataset terms require separate checks.

- Record JSON: https://awesomecua.com/resources/github-amazon-science-pae/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/amazon-science/PAE/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 3e5f24b3175afeba8635dacc7b66eba1ce89fea49996a20281ff2df5a41f1e24)
- https://api.github.com/repos/amazon-science/PAE (retrieved 2026-10-17T02:02:05Z; SHA-256 ae4f966004dd672fd5b994add5a5cba1fee9233d4d81b224e94c339728fafd87)
- https://api.github.com/repos/amazon-science/PAE/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:05Z; SHA-256 b1e24a3f38fae67f71033a3f920164d282d3f8bb072f438349dbe9eb23730a7a)
- https://raw.githubusercontent.com/amazon-science/PAE/HEAD/LICENSE.txt (retrieved 2026-10-17T02:02:15Z; SHA-256 db2e35513dbadcdc67f5819a3bfee2777786538dd3531620cd5fbd4b6ed6e538)

---

## Scrapeless SDK Go

Go client for the Scrapeless platform that creates remote browser sessions with anti-detection options, manages profiles and extensions, and calls crawl and scraping APIs.

- Catalog URL: https://awesomecua.com/resources/github-scrapeless-ai-sdk-go/
- Original source: https://github.com/scrapeless-ai/sdk-go
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation
- Evidence checked: 2026-11-10T06:29:30Z
- ID: github:scrapeless-ai/sdk-go

### Limitations

Requires a SCRAPELESS_API_KEY for the hosted service; examples cover browser sessions, profiles, captcha, crawl and proxies. The README declares the MIT License.

- Record JSON: https://awesomecua.com/resources/github-scrapeless-ai-sdk-go/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/scrapeless-ai/sdk-go/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scrapeless-ai/sdk-go/4e20d5ef0b3991a8fc6ed51b21ec274e8452c383/README.md (retrieved 2026-11-10T06:29:30Z; SHA-256 80941423ba242f2fd89bd1c5d2255215eafa75b74c31e25afbbe4dab93bff833)
- https://raw.githubusercontent.com/scrapeless-ai/sdk-go/HEAD/LICENSE (retrieved 2026-11-10T06:22:34Z; SHA-256 1fd8467561cebb8092262020e63e5f8dbe565ece3d2aa7e600145883068bf22c)

---

## SWE-agent

SWE-agent introduces Agent-Computer Interfaces (ACI) enabling language models to autonomously navigate repositories, edit code, and run tests.

- Catalog URL: https://awesomecua.com/resources/github-swe-agent-swe-agent/
- Original source: https://github.com/SWE-agent/SWE-agent
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: tool-integration, sandbox, evaluation
- Evidence checked: 2026-11-04T13:12:38Z
- ID: github:swe-agent/swe-agent

- Record JSON: https://awesomecua.com/resources/github-swe-agent-swe-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SWE-agent/SWE-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SWE-agent/SWE-agent/HEAD/README.md (retrieved 2026-11-04T13:12:38Z; SHA-256 dcd880557720efbab0f5c0e68f2bc742309efecfce83244c9e670ec1f1adf76f)
- https://raw.githubusercontent.com/SWE-agent/SWE-agent/HEAD/LICENSE (retrieved 2026-11-04T13:42:03Z; SHA-256 7610ed3916f6674e34b78417894abd57ff538b3cfdda3085e3643d82acbaf31f)

---

## Tencent AI LAB - Self-Improving Agent

A research code collection for web-agent self-improvement, including WebEvolver's world-model approach and WebCoT's reconstructed reasoning trajectories.

- Catalog URL: https://awesomecua.com/resources/github-tencent-selfevolvingagent/
- Original source: https://github.com/Tencent/SelfEvolvingAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, self-reflection, world-models
- Evidence checked: 2026-11-09T06:16:38Z
- ID: github:tencent/selfevolvingagent

### Limitations

The repository lists separate WebEvolver and WebCoT directories and also includes VScan, a visual-token reduction project.

- Record JSON: https://awesomecua.com/resources/github-tencent-selfevolvingagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/README.md (retrieved 2026-11-09T06:16:38Z; SHA-256 873a78a46309fa3892d94b72cf73fd55542bae0e0ba8235afb26a848a64a8255)

---

## WebDreamer

World-model and planning components that simulate web-action outcomes, with linked training data and model checkpoints.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-webdreamer/
- Original source: https://github.com/OSU-NLP-Group/WebDreamer
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, planning
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:osu-nlp-group/webdreamer

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-webdreamer/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/WebDreamer/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 6602cb260b52ae5b2b93db231a51a38d0463c78d8e71321620e05b4fa31caacb)

---

## WebVIA

WebVIA links an agent that explores web pages and records actions to modules that generate HTML and verify the resulting interface.

- Catalog URL: https://awesomecua.com/resources/github-zheny2751-dotcom-webvia/
- Original source: https://github.com/zheny2751-dotcom/WebVIA
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, recording, ui-design, evaluation
- Evidence checked: 2026-11-09T21:10:54Z
- ID: github:zheny2751-dotcom/webvia

### Limitations

The README lists pipeline scripts, evaluation files, environment setup, and examples. Its quick start calls for API configuration in each module.

- Record JSON: https://awesomecua.com/resources/github-zheny2751-dotcom-webvia/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zheny2751-dotcom/WebVIA/HEAD/README.md (retrieved 2026-11-09T21:10:54Z; SHA-256 7285c55989ba9f4c352fae406b728023f33cc47c3065a142c2689b7d337319c0)

---

## A-MEM

A-MEM implements a Zettelkasten-inspired dynamic memory architecture that links and evolves structured episodic notes for LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-agiresearch-a-mem/
- Original source: https://github.com/agiresearch/A-mem
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon
- Evidence checked: 2026-11-04T13:12:04Z
- ID: github:agiresearch/a-mem

- Record JSON: https://awesomecua.com/resources/github-agiresearch-a-mem/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/agiresearch/A-mem/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agiresearch/A-mem/HEAD/README.md (retrieved 2026-11-04T13:12:04Z; SHA-256 6f7185bb241d8ed5f7c0b8c4716b4f5e5cf1e9a3c630c3a1a92e54c3f5fb88b0)
- https://raw.githubusercontent.com/agiresearch/A-mem/HEAD/LICENSE (retrieved 2026-11-04T13:23:06Z; SHA-256 c8a51c83455b8afc3a11b085ce57c7b9b34c6725d6b2329ce3dd9a273f0add6d)

---

## Accio Computer Use

Hybrid computer-use Python framework combining GUI actions, CLIs, APIs, and file operations in unified workflows.

- Catalog URL: https://awesomecua.com/resources/github-accio-org-accio-cu/
- Original source: https://github.com/Accio-org/accio-cu
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: tool-integration, automation, workflow
- Evidence checked: 2026-11-04T16:51:49Z
- ID: github:accio-org/accio-cu

- Record JSON: https://awesomecua.com/resources/github-accio-org-accio-cu/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Accio-org/accio-cu/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Accio-org/accio-cu/HEAD/README.md (retrieved 2026-11-04T16:51:49Z; SHA-256 e628c0b0e60c96a34fc2599282a978adce2f53bbb686a88cf21d684e4f64da7f)
- https://raw.githubusercontent.com/Accio-org/accio-cu/HEAD/LICENSE (retrieved 2026-11-04T16:56:42Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Active Desktop Context Engine

Zero-cloud Windows OS perception layer and Model Context Protocol server streaming real-time desktop UI context to AI agents.

- Catalog URL: https://awesomecua.com/resources/github-amirf147-active-desktop-context-engine/
- Original source: https://github.com/amirf147/active-desktop-context-engine
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, state-tracking, efficiency, tool-integration
- Evidence checked: 2026-11-04T17:30:41Z
- ID: github:amirf147/active-desktop-context-engine

- Record JSON: https://awesomecua.com/resources/github-amirf147-active-desktop-context-engine/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/amirf147/active-desktop-context-engine/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/amirf147/active-desktop-context-engine/master/README.md (retrieved 2026-11-04T17:30:41Z; SHA-256 53cf2047a4cda292e724cbeead41f30b745c2a25aa75af221eea9e7a42d503d9)
- https://raw.githubusercontent.com/amirf147/active-desktop-context-engine/HEAD/LICENSE (retrieved 2026-11-04T17:39:46Z; SHA-256 5f260af916f8382d34cf653c501306844667e27f4d99ab3a7d10e2726477772d)

---

## AdvAgent (formerly AdvWeb)

Research code for constructing and evaluating adversarial inputs to web agents, with a black-box red-team pipeline using Mind2Web data and SeeAct.

- Catalog URL: https://awesomecua.com/resources/github-ai-secure-advagent/
- Original source: https://github.com/AI-secure/AdvAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, robustness, evaluation
- Evidence checked: 2026-10-17T09:18:18Z
- ID: github:ai-secure/advagent

### Limitations

The official GitHub API resolves AI-secure/AdvWeb to AI-secure/AdvAgent. Public data-generation, SFT/DPO training and evaluation scripts are present, with upstream data and external model APIs required. No repository license was found, and no permission for third-party data or model weights is inferred. The README citation block is empty, so no paper identifier is bound from title similarity alone.

- Record JSON: https://awesomecua.com/resources/github-ai-secure-advagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AI-secure/AdvAgent/HEAD/README.md (retrieved 2026-10-17T09:18:18Z; SHA-256 019d45dd4c383f919f3ac2bf84c672500d63751a49de2dd2bac9c018ffc99881)
- https://api.github.com/repos/AI-secure/AdvAgent (retrieved 2026-10-17T09:18:17Z; SHA-256 3ea44a202a677c0beb744ab05bd687da93a83365b7eb0b7999c3a4c22d7e2608)
- https://api.github.com/repos/AI-secure/AdvAgent/git/trees/master?recursive=1 (retrieved 2026-10-17T09:18:33Z; SHA-256 95929797eb0717ce26b26ccbdc752bfda18fc0070975b32f09827b4e9fec6ecf)
- https://api.github.com/repos/AI-secure/AdvWeb (retrieved 2026-10-17T09:17:48Z; SHA-256 3ea44a202a677c0beb744ab05bd687da93a83365b7eb0b7999c3a4c22d7e2608)

---

## Agentless

Agentless resolves software engineering issues through a three-phase localization, repair, and patch validation pipeline.

- Catalog URL: https://awesomecua.com/resources/github-openautocoder-agentless/
- Original source: https://github.com/OpenAutoCoder/Agentless
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: workflow, efficiency, evaluation
- Evidence checked: 2026-11-04T13:12:29Z
- ID: github:openautocoder/agentless

- Record JSON: https://awesomecua.com/resources/github-openautocoder-agentless/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OpenAutoCoder/Agentless/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenAutoCoder/Agentless/HEAD/README.md (retrieved 2026-11-04T13:12:29Z; SHA-256 06ead5fa5d0aafa7100cce5a8e7dbe66e38d50952c82d56c392852972d1f5a70)
- https://raw.githubusercontent.com/OpenAutoCoder/Agentless/HEAD/LICENSE (retrieved 2026-11-04T13:42:04Z; SHA-256 01be13f66160d7e6227a3cedc1e993b63e497b5d3623ab7fa5798c1fba769cb1)

---

## AGI SDK

AGI SDK provides a browser-agent API and evaluation harness for tasks on deterministic replicas of interactive websites, with support for custom agents.

- Catalog URL: https://awesomecua.com/resources/github-agi-inc-agisdk/
- Original source: https://github.com/agi-inc/agisdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, sandbox, workflow
- Evidence checked: 2026-11-09T05:04:59Z
- ID: github:agi-inc/agisdk

### Limitations

The README includes installation and harness examples, website task sets, and examples for custom agents. Evaluation requires browser dependencies and a model API key.

- Record JSON: https://awesomecua.com/resources/github-agi-inc-agisdk/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/agi-inc/agisdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agi-inc/agisdk/HEAD/README.md (retrieved 2026-11-09T05:04:59Z; SHA-256 eabfa5e71ee0d2de3af06a7c6a51252f391f55b667d4ca6cccde8dd7d08018ba)
- https://raw.githubusercontent.com/agi-inc/agisdk/HEAD/LICENSE (retrieved 2026-11-09T05:07:26Z; SHA-256 4ee9288d1446e1e7bdcb25351183c34e679e566f455edbfcc3748005d736d538)

---

## AI Web

Natural-language Browser Agent execution platform supporting multi-browser scheduling, task queues, and traceable QA test reports.

- Catalog URL: https://awesomecua.com/resources/github-dongxinsuperman-ai-web/
- Original source: https://github.com/dongxinsuperman/ai-web
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, workflow, observability
- Evidence checked: 2026-11-04T16:30:14Z
- ID: github:dongxinsuperman/ai-web

- Record JSON: https://awesomecua.com/resources/github-dongxinsuperman-ai-web/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dongxinsuperman/ai-web/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dongxinsuperman/ai-web/HEAD/README.md (retrieved 2026-11-04T16:30:14Z; SHA-256 acabff4d87f43826da82817928d4bead8d138da3bafec7d7d4d1c70d3ec933c1)
- https://raw.githubusercontent.com/dongxinsuperman/ai-web/HEAD/LICENSE (retrieved 2026-11-04T16:34:51Z; SHA-256 58a9e461713e66323a5ba109c7e4b1a58e0f87382b2ca296ffbe90d2a1c02628)

---

## AnythingLLM

AnythingLLM is a local-first desktop and server application supporting custom AI agents, web browsing, MCP tools, and document RAG.

- Catalog URL: https://awesomecua.com/resources/github-mintplex-labs-anything-llm/
- Original source: https://github.com/Mintplex-Labs/anything-llm
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web, macos, windows, linux
- Topics: workflow, tool-integration, memory, web-navigation
- Evidence checked: 2026-11-04T15:03:37Z
- ID: github:mintplex-labs/anything-llm

- Record JSON: https://awesomecua.com/resources/github-mintplex-labs-anything-llm/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/HEAD/README.md (retrieved 2026-11-04T15:03:37Z; SHA-256 54fa19d813e8bb7bbed9346771e17ad29a9d5753effa19427bea4c38de6c7a2c)
- https://raw.githubusercontent.com/Mintplex-Labs/anything-llm/HEAD/LICENSE (retrieved 2026-11-04T15:22:51Z; SHA-256 782d2dc18a1ed9028ca992520f42b2e0b6187807da0d14455b8ae608e2e5692e)

---

## appium-android

A monorepo of Appium packages for Android device and UI automation, including an Android driver, an ADB wrapper, and a device server for UiAutomator2 commands.

- Catalog URL: https://awesomecua.com/resources/github-appium-appium-android/
- Original source: https://github.com/appium/appium-android
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: android
- Topics: automation, mobile-navigation
- Evidence checked: 2026-11-09T21:10:08Z
- ID: github:appium/appium-android

### Limitations

The README also lists Chromedriver support, a Compose test app, and device-settings tooling. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/github-appium-appium-android/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/appium/appium-android/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/appium/appium-android/HEAD/README.md (retrieved 2026-11-09T21:10:08Z; SHA-256 3638759b0d0651053b0ae8583d951d2591e70a95a93fb99b8696be7002275ca5)
- https://raw.githubusercontent.com/appium/appium-android/HEAD/LICENSE (retrieved 2026-11-09T21:12:13Z; SHA-256 ae9194687e7f3b7d85e8eeb5c973e22d52c4653b1e4332fa0e5c6e82b038ab29)

---

## ARC CUA

Browser harness that gives an agent a token-budgeted accessibility tree with indexed actions and checks each action for state change, plus a document-to-form pipeline and an MCP server.

- Catalog URL: https://awesomecua.com/resources/github-itw-code-arc-cua/
- Original source: https://github.com/itw-code/arc-cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, state-tracking, tool-integration
- Evidence checked: 2026-11-10T06:29:22Z
- ID: github:itw-code/arc-cua

### Limitations

Runs on Solari cloud browsers, a local Chromium or any CDP endpoint; the README reports measured runs on Solari browsers on 2026-09-27/29 and says earlier mock-execution figures were replaced. Benchmarks need GEMINI_API_KEY and SOLARI_API_KEY, and an optional System-2 decision model is served by SGLang.

- Record JSON: https://awesomecua.com/resources/github-itw-code-arc-cua/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/itw-code/arc-cua/27530bdbbcb10713dd64c09d775bf5ab108fc694/README.md (retrieved 2026-11-10T06:29:22Z; SHA-256 61301c7010f6b242cf655e2c4c5242efec6b57107c47dd28ddbc1d586a0d349e)

---

## ASIL (Agent-Software Interaction Layer)

ASIL replaces screenshot-and-click loops with structured application state observations and semantic action interfaces for CUA.

- Catalog URL: https://awesomecua.com/resources/github-sharryxr-asil/
- Original source: https://github.com/sharryXR/ASIL
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, linux
- Topics: tool-integration, screen-understanding, efficiency
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:sharryxr/asil

- Record JSON: https://awesomecua.com/resources/github-sharryxr-asil/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/sharryXR/ASIL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sharryXR/ASIL/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 3ef28636812141a56a170c55c758eeb4affb0a49706b4ce200f643f9f3409adc)
- https://raw.githubusercontent.com/sharryXR/ASIL/HEAD/LICENSE (retrieved 2026-11-04T14:07:41Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## AutoCodeRover

AutoCodeRover combines LLMs with AST-aware code search and spectrum-based fault localization for autonomous program repair.

- Catalog URL: https://awesomecua.com/resources/github-nus-apr-auto-code-rover/
- Original source: https://github.com/nus-apr/auto-code-rover
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: tool-integration, planning, evaluation
- Evidence checked: 2026-11-04T13:12:28Z
- ID: github:nus-apr/auto-code-rover

- Record JSON: https://awesomecua.com/resources/github-nus-apr-auto-code-rover/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nus-apr/auto-code-rover/HEAD/README.md (retrieved 2026-11-04T13:12:28Z; SHA-256 4f1d638718023c068c46aef46335f0843b22cd2a1cbeeee7cc8715e2cf5b742d)

---

## Automata

Record-once, replay-many browser automation runtime for Windows that records live user actions into deterministic workflows.

- Catalog URL: https://awesomecua.com/resources/github-mindattic-automata/
- Original source: https://github.com/mindattic/Automata
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: recording, imitation-learning, efficiency, web-navigation
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:mindattic/automata

- Record JSON: https://awesomecua.com/resources/github-mindattic-automata/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/mindattic/Automata/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mindattic/Automata/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 3145aa9bdea689270e84f786e4396b41bb3fb5e024d4c23c603927ddc0b8161c)
- https://raw.githubusercontent.com/mindattic/Automata/HEAD/LICENSE (retrieved 2026-11-04T17:39:55Z; SHA-256 c717cfc0f1c489ed16b231229a8d63777e82cbc727eefe19e574c838264705eb)

---

## Autonomous Evaluation and Refinement of Digital Agents

Provides VLM evaluator and policy-refinement code for autonomous evaluation and filtered behavioral cloning on WebArena and AndroidInTheWild.

- Catalog URL: https://awesomecua.com/resources/github-berkeley-nlp-agent-eval-refine/
- Original source: https://github.com/Berkeley-NLP/Agent-Eval-Refine
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, android
- Topics: reward-models, self-reflection, reinforcement-learning
- Evidence checked: 2026-11-04T13:12:08Z
- ID: github:berkeley-nlp/agent-eval-refine

- Record JSON: https://awesomecua.com/resources/github-berkeley-nlp-agent-eval-refine/record.json

### License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/Berkeley-NLP/Agent-Eval-Refine/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Berkeley-NLP/Agent-Eval-Refine/HEAD/README.md (retrieved 2026-11-04T13:12:08Z; SHA-256 58ff268b9403642851c550e7d1d2c88446db06ef33e39487068e37edc21ecfbe)
- https://raw.githubusercontent.com/Berkeley-NLP/Agent-Eval-Refine/HEAD/LICENSE (retrieved 2026-11-04T13:22:45Z; SHA-256 79a2ea42cd0ae5d05be34a0ecb095fe7a67eeb9916fe37684a4cd964a3d9fd8c)

---

## AutoWebNav

AutoWebNav is a .NET library for WebView2 browser automation, combining page actions and element resolution with interaction recording and live observation.

- Catalog URL: https://awesomecua.com/resources/github-mindattic-autowebnav/
- Original source: https://github.com/mindattic/AutoWebNav
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web, desktop, windows
- Topics: automation, grounding, recording, observability
- Evidence checked: 2026-11-09T21:10:15Z
- ID: github:mindattic/autowebnav

### Limitations

The README describes a platform-neutral package and a Windows WebView2 package. It requires the .NET 10 SDK and WebView2 Runtime for the latter.

- Record JSON: https://awesomecua.com/resources/github-mindattic-autowebnav/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/mindattic/AutoWebNav/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mindattic/AutoWebNav/HEAD/README.md (retrieved 2026-11-09T21:10:15Z; SHA-256 c8420f2ee45673e30f57c64d79d28e80896ead27547859b6dc3c0177b72465b9)
- https://raw.githubusercontent.com/mindattic/AutoWebNav/HEAD/LICENSE (retrieved 2026-11-09T21:12:14Z; SHA-256 c717cfc0f1c489ed16b231229a8d63777e82cbc727eefe19e574c838264705eb)

---

## Avenir-Web

Avenir-Web trains human-experience-imitating multimodal web agents with mixture-of-grounding experts and experience-tracking memory.

- Catalog URL: https://awesomecua.com/resources/github-princeton-ai2-lab-avenir-web/
- Original source: https://github.com/Princeton-AI2-Lab/Avenir-Web
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, planning, memory
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:princeton-ai2-lab/avenir-web

- Record JSON: https://awesomecua.com/resources/github-princeton-ai2-lab-avenir-web/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Princeton-AI2-Lab/Avenir-Web/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Princeton-AI2-Lab/Avenir-Web/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 76170fbacb4ca0e1aff28d9d8d89393eaf68417f01da8c9f18ca249c3eeb0815)
- https://raw.githubusercontent.com/Princeton-AI2-Lab/Avenir-Web/HEAD/LICENSE.txt (retrieved 2026-11-04T14:45:17Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## BabyAGI

BabyAGI is an autonomous task-management agent framework that iteratively creates, prioritizes, and executes tasks using LLMs and vector memory.

- Catalog URL: https://awesomecua.com/resources/github-yoheinakajima-babyagi/
- Original source: https://github.com/yoheinakajima/babyagi
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: planning, memory, workflow
- Evidence checked: 2026-11-04T13:12:45Z
- ID: github:yoheinakajima/babyagi

- Record JSON: https://awesomecua.com/resources/github-yoheinakajima-babyagi/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yoheinakajima/babyagi/HEAD/README.md (retrieved 2026-11-04T13:12:45Z; SHA-256 06e5fd3c01172ee9eb987456943ceed45f0c11ed6a95824d0da2309e078b2e1d)

---

## Browser Use Pi

Browser Use Pi is a TypeScript SDK for a browser agent that writes JavaScript to control Chrome through CDP and reads accessibility trees and screenshots for feedback.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-browser-use-pi/
- Original source: https://github.com/browser-use/browser-use-pi
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, screen-understanding
- Evidence checked: 2026-11-09T06:16:39Z
- ID: github:browser-use/browser-use-pi

### Limitations

The README provides installation and agent-run examples. It documents cloud or local Chrome sessions and requires model-provider and Browser Use API keys for its cloud example.

- Record JSON: https://awesomecua.com/resources/github-browser-use-browser-use-pi/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/browser-use/browser-use-pi/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browser-use/browser-use-pi/HEAD/README.md (retrieved 2026-11-09T06:16:39Z; SHA-256 d2dc1db793a64eda7bb8ba802be0077c64c3e507532cce9e8b01cfb4851e4d7d)
- https://raw.githubusercontent.com/browser-use/browser-use-pi/HEAD/LICENSE (retrieved 2026-11-09T06:13:57Z; SHA-256 190b68d92770bbd8fc1016cd38a2d75739947d4a398eb36572f6f3e09d66790a)

---

## Browser Use SDKs

Python and TypeScript SDKs connect applications to Browser Use Cloud agents and managed browsers for browser task execution and control.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-sdk/
- Original source: https://github.com/browser-use/sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: github:browser-use/sdk

### Limitations

The README lists Python and TypeScript packages and points to a Cloud quickstart.

- Record JSON: https://awesomecua.com/resources/github-browser-use-sdk/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browser-use/sdk/HEAD/README.md (retrieved 2026-11-09T05:05:20Z; SHA-256 8e1e7c2bc1d25012fe1d915ad26f65efd5f8198f1fe9c9e6c0677ad920c9d537)

---

## Clearcote Browser

Open-source stealth Chromium browser with engine-level fingerprint spoofing designed as a drop-in runtime for AI web agents.

- Catalog URL: https://awesomecua.com/resources/github-clearcotelabs-clearcote-browser/
- Original source: https://github.com/clearcotelabs/clearcote-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, sandbox
- Evidence checked: 2026-11-04T16:30:10Z
- ID: github:clearcotelabs/clearcote-browser

- Record JSON: https://awesomecua.com/resources/github-clearcotelabs-clearcote-browser/record.json

### License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/clearcotelabs/clearcote-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/clearcotelabs/clearcote-browser/HEAD/README.md (retrieved 2026-11-04T16:30:10Z; SHA-256 c0bc4f381bb4d783a9e769598f8836a75bfb90d2aabe8720f5c534d9a0292921)
- https://raw.githubusercontent.com/clearcotelabs/clearcote-browser/HEAD/LICENSE (retrieved 2026-11-04T16:34:48Z; SHA-256 dbb2532099b5525f79fc8d0c0678ff6098370de7ee24e43e67879494121e8de1)

---

## CoAT research implementation

Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.

- Catalog URL: https://awesomecua.com/resources/github-imnearth-coat/
- Original source: https://github.com/IMNearth/CoAT
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: planning, mobile-navigation, action-prediction
- Evidence checked: 2026-10-17T12:30:53Z
- ID: github:imnearth/coat

### Limitations

The tree contains run_coat.py and coat/agent.py, model.py and evaluate.py, with API-backed model configuration. The released annotation/prediction implementation covers API-backed processing; live phone control and checkpoint release remain unverified. AiTZ screens/annotations are linked through external Drive/Baidu bundles. The README has an Apache-2.0 badge, but no license file or explicit component grant is present; code/data/weight rights remain unestablished.

- Record JSON: https://awesomecua.com/resources/github-imnearth-coat/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected non-truncated tree has no license file; the README displays an Apache-2.0 badge.
  Sources: https://raw.githubusercontent.com/IMNearth/CoAT/HEAD/README.md, https://api.github.com/repos/IMNearth/CoAT/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/IMNearth/CoAT/HEAD/README.md (retrieved 2026-10-17T12:30:53Z; SHA-256 7a9fb905b64f2760a137cd267a5e38dd343df1821eda8172b606ab7500d27731)
- https://api.github.com/repos/IMNearth/CoAT (retrieved 2026-10-17T12:30:53Z; SHA-256 d0c5056c9a74913f84a4f809bf01d9fd9ea325ac0a91b4c4a0a51220b2da9d68)
- https://api.github.com/repos/IMNearth/CoAT/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:04Z; SHA-256 29d84ed12dc25035fd539604b06f6cc113080b389edeb9aa605cfa55c5f28151)

---

## Cowork Protocol

A WebMCP collaboration protocol for people and web agents: agents read bounded field focus packets, propose visible changes that a human click applies, and act alone only inside scoped leases.

- Catalog URL: https://awesomecua.com/resources/github-ellmos-ai-cowork-protocol/
- Original source: https://github.com/ellmos-ai/cowork-protocol
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, windows
- Topics: human-in-the-loop, web-navigation, tool-integration, safety-security
- Evidence checked: 2026-11-10T06:29:23Z
- ID: github:ellmos-ai/cowork-protocol

### Limitations

The repository holds the protocol packages, a FormBuilder showcase, a Chrome side-panel bridge extension and a Windows Desktop Companion with an optional Open Compute fallback. It runs on Node.js 22 or newer and accepts an OpenAI-compatible model endpoint. MIT license.

- Record JSON: https://awesomecua.com/resources/github-ellmos-ai-cowork-protocol/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ellmos-ai/cowork-protocol/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ellmos-ai/cowork-protocol/0e0b615f601b79648e0d47c15b8f6b6ce6fa612e/README.md (retrieved 2026-11-10T06:29:23Z; SHA-256 1e76c034aeee60d8c86d7bc7f10b30eb7e316712fd2a83521063f5545affd13d)
- https://raw.githubusercontent.com/ellmos-ai/cowork-protocol/HEAD/LICENSE (retrieved 2026-11-10T06:22:24Z; SHA-256 739ebacc8dda8403cef9e58134236067012b53a126e4f983d44ff4aed6bae07f)

---

## CUBE Standard

A Python protocol for wrapping agent benchmarks behind shared Tool, Task, Benchmark, Observation and Action types, with optional browser sessions, VM backends and browser and desktop computer tools.

- Catalog URL: https://awesomecua.com/resources/github-the-ai-alliance-cube-standard/
- Original source: https://github.com/The-AI-Alliance/cube-standard
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, sandbox
- Evidence checked: 2026-11-10T06:29:31Z
- ID: github:the-ai-alliance/cube-standard

### Limitations

Requires Python 3.12+ and installs from PyPI as cube-standard, with Docker, Modal and Daytona extras; a cube CLI scaffolds, lists and tests benchmark packages. The README marks the project as alpha; code is Apache-2.0 and documentation CC-BY-4.0.

- Record JSON: https://awesomecua.com/resources/github-the-ai-alliance-cube-standard/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/The-AI-Alliance/cube-standard/9ca7c062d211450df05eb8318a1e847b5373b689/README.md (retrieved 2026-11-10T06:29:31Z; SHA-256 923fe3076241f364c4a66bbcff05b68750fa81fac4ef3d0f23d6986c2e568a53)

---

## DeviceBay

Python package that supplies pluggable desktop and browser devices for AI agents, with device configuration stored in SQLite or PostgreSQL.

- Catalog URL: https://awesomecua.com/resources/github-agentsea-devicebay/
- Original source: https://github.com/agentsea/devicebay
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: automation, tool-integration
- Evidence checked: 2026-11-09T05:05:02Z
- ID: github:agentsea/devicebay

### Limitations

The README lists filesystem and GitHub repository devices alongside desktop and browser devices. It provides a pip installation command and describes SQLite as the default configuration store.

- Record JSON: https://awesomecua.com/resources/github-agentsea-devicebay/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/agentsea/devicebay/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agentsea/devicebay/HEAD/README.md (retrieved 2026-11-09T05:05:02Z; SHA-256 28a5f2c562cb79dff28130721e206b0733e40732792912d02f6590f073e17b7d)
- https://raw.githubusercontent.com/agentsea/devicebay/HEAD/LICENSE (retrieved 2026-11-09T05:07:27Z; SHA-256 40f2354eb662ebb7b99d874b45f639e1265bec931073cda9ff21c6cf2cb0c499)

---

## DistRL

Distributed online reinforcement-learning framework for Android agents, with environment setup and trajectory collection tools.

- Catalog URL: https://awesomecua.com/resources/github-distrl-lab-distrl-open/
- Original source: https://github.com/DistRL-lab/distrl-open
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, efficiency
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:distrl-lab/distrl-open

### Limitations

The README identifies model weights and dataset release as pending; this entry covers the code framework.

- Record JSON: https://awesomecua.com/resources/github-distrl-lab-distrl-open/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/DistRL-lab/distrl-open/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DistRL-lab/distrl-open/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 f501f8de6aac53758f60882a8c595a5ac27145f327c73b0cfa7921b45ccae75a)
- https://raw.githubusercontent.com/DistRL-lab/distrl-open/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## DoomArena

A security-testing framework whose attack gateways wrap BrowserGym, OSWorld, tau-bench and mail-agent environments to inject pop-ups, banners and other adversarial content under configurable threat models.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-doomarena/
- Original source: https://github.com/ServiceNow/DoomArena
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, evaluation, robustness
- Evidence checked: 2026-10-18T11:02:25Z
- ID: github:servicenow/doomarena

### Limitations

The inspected tree contains separately installable packages for the core attack library and for BrowserGym, OSWorld, tau-bench, MCP, mail-agent and promptceptor integrations, with web attacks (banner, pop-up, injected div and user-generated content) and an OSWorld pop-up inpainting attack. Running the BrowserGym and OSWorld integrations requires those environments and model API keys. Apache-2.0 covers this repository's code; wrapped benchmarks keep their own terms. Project page: https://servicenow.github.io/DoomArena/.

- Record JSON: https://awesomecua.com/resources/github-servicenow-doomarena/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/README.md (retrieved 2026-10-18T11:02:25Z; SHA-256 f9413fac36822485801e4159423c77e0c090968a7bef4a8b0a0e1d1369be439b)
- https://api.github.com/repos/ServiceNow/DoomArena (retrieved 2026-10-18T11:02:32Z; SHA-256 8f9e575fffd303558aa65232fdd47223effb8229600bbacc7cbd9ea7ce28787e)
- https://api.github.com/repos/ServiceNow/DoomArena/git/trees/main?recursive=1 (retrieved 2026-10-18T11:02:33Z; SHA-256 73de9d44b5823e6d1798bc744641cfbda64c097b29e0dc8613527a5a586d9939)
- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE (retrieved 2026-10-18T11:02:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE (retrieved 2026-10-18T11:02:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## DroidCall generation and evaluation code

Data-generation, fine-tuning and evaluation utilities for teaching small language models to invoke Android intents through predefined functions.

- Catalog URL: https://awesomecua.com/resources/github-ubiquitouslearning-droidcall/
- Original source: https://github.com/UbiquitousLearning/DroidCall
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: android
- Topics: tool-integration, data-generation, evaluation
- Evidence checked: 2026-10-17T02:02:06Z
- ID: github:ubiquitouslearning/droidcall

### Limitations

Source utilities are published under MIT. This component operates through Android intent functions and is marked adjacent to visual GUI agents. Training data is separately released under its own card declaration; no checkpoint release is inferred from the fine-tuning instructions.

- Record JSON: https://awesomecua.com/resources/github-ubiquitouslearning-droidcall/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/UbiquitousLearning/DroidCall/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UbiquitousLearning/DroidCall/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 cfe9d8614b0b0558c37ba7c50371f6c47f119b914061ae815a9e3d796dd9ccfa)
- https://api.github.com/repos/UbiquitousLearning/DroidCall (retrieved 2026-10-17T02:01:50Z; SHA-256 7a4ca3daa6d011ff2d24d993191882d2b5545d8476c7eddf396581c0fef77496)
- https://api.github.com/repos/UbiquitousLearning/DroidCall/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:06Z; SHA-256 d0717d706359969376889eac73ea8764b659f41a2b4f3c1a409110267a912526)
- https://raw.githubusercontent.com/UbiquitousLearning/DroidCall/HEAD/LICENSE (retrieved 2026-10-17T02:02:16Z; SHA-256 2832cc5333f7166924a2823aa38a286d918b39b7fef2ca7af6521766c68a5303)
- https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 08a6c5cfa655e1ecd774a41a9a815e845ad0afd47b289378bc1d6ee66c81dda9)
- https://raw.githubusercontent.com/UbiquitousLearning/DroidCall/HEAD/LICENSE (retrieved 2026-10-17T02:02:16Z; SHA-256 2832cc5333f7166924a2823aa38a286d918b39b7fef2ca7af6521766c68a5303)

---

## ECLAIR

ECLAIR automates enterprise web and desktop workflows from human demonstrations with ground-truth SOP validation and step-level error recovery.

- Catalog URL: https://awesomecua.com/resources/github-hazyresearch-eclair-agents/
- Original source: https://github.com/HazyResearch/eclair-agents
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: workflow, imitation-learning, automation
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:hazyresearch/eclair-agents

- Record JSON: https://awesomecua.com/resources/github-hazyresearch-eclair-agents/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/HazyResearch/eclair-agents/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HazyResearch/eclair-agents/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 231799d29201ec702d63db97bfd6e9767874b91e9333a39fff1f6b2f55e64f80)
- https://raw.githubusercontent.com/HazyResearch/eclair-agents/HEAD/LICENSE (retrieved 2026-11-04T13:41:48Z; SHA-256 e900bf875936d14317d3bb4841496e85e7b098306e63278619471d7f481366f7)

---

## Eigent

Eigent is an open-source multi-agent desktop coworker built on CAMEL-AI for parallel browser, terminal, document, and MCP task execution.

- Catalog URL: https://awesomecua.com/resources/github-eigent-ai-eigent/
- Original source: https://github.com/eigent-ai/eigent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, macos, windows, linux
- Topics: workflow, automation, human-in-the-loop, tool-integration
- Evidence checked: 2026-11-04T15:03:31Z
- ID: github:eigent-ai/eigent

- Record JSON: https://awesomecua.com/resources/github-eigent-ai-eigent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/eigent-ai/eigent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/eigent-ai/eigent/HEAD/README.md (retrieved 2026-11-04T15:03:31Z; SHA-256 8b02c03a2de2cf317c3588c985dd6d276d80029304c1e4462f3eb8c933d37d64)
- https://raw.githubusercontent.com/eigent-ai/eigent/HEAD/LICENSE (retrieved 2026-11-04T15:22:44Z; SHA-256 dc1400b738a63d9abe7dc1de5c29135b35afb6340fcb9c917547c588d22cc400)

---

## Eric Task Master

Durable Playwright and Chrome task runner that keeps long-horizon browser jobs running after the initiating agent session exits.

- Catalog URL: https://awesomecua.com/resources/github-npcworkspace-cmyk-eric-task-master/
- Original source: https://github.com/npcworkspace-cmyk/eric-task-master
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: long-horizon, workflow, web-navigation, automation
- Evidence checked: 2026-11-04T17:30:40Z
- ID: github:npcworkspace-cmyk/eric-task-master

- Record JSON: https://awesomecua.com/resources/github-npcworkspace-cmyk-eric-task-master/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/npcworkspace-cmyk/eric-task-master/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/npcworkspace-cmyk/eric-task-master/main/README.md (retrieved 2026-11-04T17:30:40Z; SHA-256 d3c24c397225f9e254391ba4861d7477a4e69086eb880f62ca9b2a5e5033adf8)
- https://raw.githubusercontent.com/npcworkspace-cmyk/eric-task-master/HEAD/LICENSE (retrieved 2026-11-04T17:39:57Z; SHA-256 9db45fed8df643b3121d98a21f9c012ae973cd387877dd34f503a0dab3dfe08d)

---

## Frigate

A Swift ML package that includes a macOS screen-perception module. It detects regions, recognizes text, classifies interface roles, and produces a page map.

- Catalog URL: https://awesomecua.com/resources/github-rao-studios-frigate/
- Original source: https://github.com/rao-studios/Frigate
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: desktop, macos
- Topics: screen-understanding, grounding
- Evidence checked: 2026-11-09T21:10:57Z
- ID: github:rao-studios/frigate

### Limitations

FrigateVisionAX includes an OpenCV region detector, Apple text recognition, and a bundled ONNX role classifier. Its model and real-capture fixtures use Git LFS; the source states that the module runs only on macOS.

- Record JSON: https://awesomecua.com/resources/github-rao-studios-frigate/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/rao-studios/Frigate/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rao-studios/Frigate/HEAD/README.md (retrieved 2026-11-09T21:10:57Z; SHA-256 27aa67c07c79e61647167485e12e0c0e0341916326a6e19949737593271de156)
- https://raw.githubusercontent.com/rao-studios/Frigate/HEAD/LICENSE (retrieved 2026-11-09T21:12:34Z; SHA-256 c3524435ae6e8561cbfe58903055dba68397cacc6da8715f04aa8e23f607b025)

---

## glassbox

glassbox is an iOS and iPadOS computer-use runtime that drives physical iPhones and iPads from screen observations and hardware/bridge control.

- Catalog URL: https://awesomecua.com/resources/github-yoyicue-glassbox/
- Original source: https://github.com/yoyicue/glassbox
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios, desktop, macos
- Topics: mobile-navigation, grounding, automation
- Evidence checked: 2026-11-04T16:10:37Z
- ID: github:yoyicue/glassbox

- Record JSON: https://awesomecua.com/resources/github-yoyicue-glassbox/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/yoyicue/glassbox/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yoyicue/glassbox/HEAD/README.md (retrieved 2026-11-04T16:10:37Z; SHA-256 fd618f11b3261ad0324e07bc980da667afb6c8cb0ca80094e37a17083304a364)
- https://raw.githubusercontent.com/yoyicue/glassbox/HEAD/LICENSE (retrieved 2026-11-04T16:13:49Z; SHA-256 fa08eb3cdcbb15c104a4637fd29beddd1eeab4c75fe39dabda1bc72dd4af7d87)

---

## Glasswarp Python SDK

Python SDK for the Glasswarp platform enabling AI agents to observe and control remote or local Windows PCs.

- Catalog URL: https://awesomecua.com/resources/github-glasswarp-python-sdk/
- Original source: https://github.com/glasswarp/python-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: automation, screen-understanding, tool-integration
- Evidence checked: 2026-11-04T16:51:49Z
- ID: github:glasswarp/python-sdk

- Record JSON: https://awesomecua.com/resources/github-glasswarp-python-sdk/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/glasswarp/python-sdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/glasswarp/python-sdk/HEAD/README.md (retrieved 2026-11-04T16:51:49Z; SHA-256 192e8c09d341981a3043383ab660aa04ba22dc83c483aaf0d6cd4d7fe3b33c94)
- https://raw.githubusercontent.com/glasswarp/python-sdk/HEAD/LICENSE (retrieved 2026-11-04T16:56:41Z; SHA-256 92fe9cd1fa11de66ce5d7032a961e76718fa1a1281c6f81d87afa6a2d5299506)

---

## Go-Browse

Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.

- Catalog URL: https://awesomecua.com/resources/github-apga-go-browse/
- Original source: https://github.com/ApGa/Go-Browse
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, imitation-learning
- Evidence checked: 2026-10-17T02:44:04Z
- ID: github:apga/go-browse

### Limitations

The release contains exploration agents, data-processing scripts, fine-tuning and WebArena evaluation entry points under MIT. Checkpoints and processed datasets are separate Hub resources with separate license status. The arXiv badge image has an unrelated number; the linked paper and citation consistently identify 2506.03533.

- Record JSON: https://awesomecua.com/resources/github-apga-go-browse/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566)
- https://api.github.com/repos/ApGa/Go-Browse (retrieved 2026-10-17T02:44:04Z; SHA-256 b02ec75f69ab8bbebe0d59eeccdcdcacf11a0d6b00bdfe803c692a9d587301e2)
- https://api.github.com/repos/ApGa/Go-Browse/git/trees/main?recursive=1 (retrieved 2026-10-17T02:44:04Z; SHA-256 cd3a40a596ad9ead856973bb31e5b7f7e88a2f60969799c01a2a8a6d09fe3421)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 e7107f1e1b3a0c65cbbae6c496d9e71b570025bdddebb3d402a6080dd916bcba)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 e7107f1e1b3a0c65cbbae6c496d9e71b570025bdddebb3d402a6080dd916bcba)

---

## GroundGUI training and evaluation code

Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.

- Catalog URL: https://awesomecua.com/resources/github-prentisai-groundgui/
- Original source: https://github.com/PrentisAI/GroundGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, cross-platform
- Topics: grounding, reinforcement-learning, data-generation
- Evidence checked: 2026-10-17T01:46:05Z
- ID: github:prentisai/groundgui

### Limitations

The repository documents separate training-stage environments. Code, model weights, and ScreenRef data have distinct license declarations.

- Record JSON: https://awesomecua.com/resources/github-prentisai-groundgui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/PrentisAI/GroundGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PrentisAI/GroundGUI/HEAD/README.md (retrieved 2026-10-17T01:46:05Z; SHA-256 a495bb4c86cf54cd5e2276433cfecb401fd133287406b1a7e04c3eaaac6305ac)
- https://raw.githubusercontent.com/PrentisAI/GroundGUI/HEAD/LICENSE (retrieved 2026-10-17T01:52:51Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## GUI Grounding via Iterative Narrowing

Implements training-free iterative visual crop-and-narrow refinement for improving MLLM coordinate grounding on GUI screenshots.

- Catalog URL: https://awesomecua.com/resources/github-ant-8-gui-grounding-via-iterative-narrowing/
- Original source: https://github.com/ant-8/GUI-Grounding-via-Iterative-Narrowing
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, training-free
- Evidence checked: 2026-11-04T14:02:38Z
- ID: github:ant-8/gui-grounding-via-iterative-narrowing

- Record JSON: https://awesomecua.com/resources/github-ant-8-gui-grounding-via-iterative-narrowing/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ant-8/GUI-Grounding-via-Iterative-Narrowing/HEAD/README.md (retrieved 2026-11-04T14:02:38Z; SHA-256 6077ffcff5b375c647ea88dac59f96e2355d92d99cca6b0390b43514bc6603f9)

---

## GUI-SD

GUI-SD implements on-policy self-distillation for GUI visual grounding and action prediction using Qwen-VL backbones.

- Catalog URL: https://awesomecua.com/resources/github-zhangyan-ucas-gui-sd-code/
- Original source: https://github.com/zhangyan-ucas/GUI-SD-code
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-04T13:12:46Z
- ID: github:zhangyan-ucas/gui-sd-code

- Record JSON: https://awesomecua.com/resources/github-zhangyan-ucas-gui-sd-code/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zhangyan-ucas/GUI-SD-code/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zhangyan-ucas/GUI-SD-code/HEAD/README.md (retrieved 2026-11-04T13:12:46Z; SHA-256 3f84842607d69200e8604ff7ad8e3992e58e608ae2b7d943faf96f95fcda44ff)
- https://raw.githubusercontent.com/zhangyan-ucas/GUI-SD-code/HEAD/LICENSE (retrieved 2026-11-04T13:22:51Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Guibot

Guibot is a Python GUI automation library unifying template matching, feature detection, cascade classifiers, OCR, and VNC/PyAutoGUI control.

- Catalog URL: https://awesomecua.com/resources/github-intra2net-guibot/
- Original source: https://github.com/intra2net/guibot
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: automation, grounding
- Evidence checked: 2026-11-04T13:12:19Z
- ID: github:intra2net/guibot

- Record JSON: https://awesomecua.com/resources/github-intra2net-guibot/record.json

### License declarations

- code: LGPL-3.0 — https://raw.githubusercontent.com/intra2net/guibot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/intra2net/guibot/HEAD/README.md (retrieved 2026-11-04T13:12:19Z; SHA-256 1c1cc6a0dcd0429a3cb799b68122b13ea00e946e2a6ce0443b85e4688626bdd1)
- https://raw.githubusercontent.com/intra2net/guibot/HEAD/LICENSE (retrieved 2026-11-04T13:23:05Z; SHA-256 da7eabb7bafdf7d3ae5e9f223aa5bdc1eece45ac569dc21b3b037520b4464768)

---

## hai-agents

A TypeScript SDK for running browser agents through H Company's Agents API. It provides session controls, progress events and ways to steer an agent during a task.

- Catalog URL: https://awesomecua.com/resources/github-hcompai-hai-agents-ts/
- Original source: https://github.com/hcompai/hai-agents-ts
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, observability, tool-integration
- Evidence checked: 2026-11-09T19:56:57Z
- ID: github:hcompai/hai-agents-ts

### Limitations

The README specifies Node.js 18 or newer and an API key. The repository contains packages and an OpenAPI specification; the README displays an MIT license badge.

- Record JSON: https://awesomecua.com/resources/github-hcompai-hai-agents-ts/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hcompai/hai-agents-ts/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hcompai/hai-agents-ts/HEAD/README.md (retrieved 2026-11-09T19:56:57Z; SHA-256 ae6c93802cfc75d094c3d9ac194bf596b46261b64bd44ae65ea40aed3c76a00c)
- https://raw.githubusercontent.com/hcompai/hai-agents-ts/HEAD/LICENSE (retrieved 2026-11-09T14:20:47Z; SHA-256 c4f93176e215b03687e6badea344350b4640b7b6fda71590caea32f29f06a68c)

---

## HyperAgent

Library adding natural-language commands to Playwright: accessibility-tree single actions, multi-step tasks that can use screenshots, an MCP client and action caching for replay without LLM calls.

- Catalog URL: https://awesomecua.com/resources/github-hyperbrowserai-hyperagent/
- Original source: https://github.com/hyperbrowserai/HyperAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:hyperbrowserai/hyperagent

- Record JSON: https://awesomecua.com/resources/github-hyperbrowserai-hyperagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hyperbrowserai/HyperAgent/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 9fe74ee087156efde4531a058ccd3abad504032e0bd994979992ed4164c8704b)

---

## InSTA

Code for a web-agent training pipeline that generates website tasks, collects browser trajectories and filters them by judged success. It also serves an agent in a virtual browser.

- Catalog URL: https://awesomecua.com/resources/github-data-for-agents-insta/
- Original source: https://github.com/data-for-agents/insta
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, imitation-learning, evaluation
- Evidence checked: 2026-11-09T19:56:57Z
- ID: github:data-for-agents/insta

### Limitations

The README links a separate dataset and paper. Its example uses an API key for an agent and judge, and the repository includes data-generation, training, evaluation and browser-related directories.

- Record JSON: https://awesomecua.com/resources/github-data-for-agents-insta/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/data-for-agents/insta/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/data-for-agents/insta/HEAD/README.md (retrieved 2026-11-09T19:56:57Z; SHA-256 4bfef2fa6ed02db4355d19cf05f0c4e92430a13bb83983aee0f62149e30c614a)
- https://raw.githubusercontent.com/data-for-agents/insta/HEAD/LICENSE (retrieved 2026-11-09T14:20:47Z; SHA-256 d2aa53e8e75bd171c5ab85cd692335c95f4216fae901f4079b0fe556452af510)

---

## Interlock Relay

Interlock Relay is an Android library that connects sandboxed agents to host-app capabilities through an approval gate. It provides execution backends, quotas, artifacts, and audit logs.

- Catalog URL: https://awesomecua.com/resources/github-wsk-build-interlock-relay/
- Original source: https://github.com/WSK-build/interlock-relay
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: sandbox, safety-security, human-in-the-loop, observability
- Evidence checked: 2026-11-09T21:09:44Z
- ID: github:wsk-build/interlock-relay

### Limitations

The repository includes library code, a sandbox-side CLI, protocol documentation, and a sample host integration. The source declares Apache License 2.0.

- Record JSON: https://awesomecua.com/resources/github-wsk-build-interlock-relay/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/WSK-build/interlock-relay/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WSK-build/interlock-relay/HEAD/README.md (retrieved 2026-11-09T21:09:44Z; SHA-256 afdceb41311699954b1493a1e478a4a33d11311e2f0657b3ee137d8baf809c29)
- https://raw.githubusercontent.com/WSK-build/interlock-relay/HEAD/LICENSE (retrieved 2026-11-09T21:12:07Z; SHA-256 f57f6a2161ed2b417e9101d0f824f6ccdf1c6f5b8f9080b30c2588d08e8424ae)

---

## JARVIS-1

JARVIS-1 is an open-world multimodal Minecraft agent with episodic multimodal memory and goal-conditioned keyboard/mouse control.

- Catalog URL: https://awesomecua.com/resources/github-craftjarvis-jarvis-1/
- Original source: https://github.com/CraftJarvis/JARVIS-1
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: planning, memory, self-reflection, long-horizon
- Evidence checked: 2026-11-04T13:12:12Z
- ID: github:craftjarvis/jarvis-1

- Record JSON: https://awesomecua.com/resources/github-craftjarvis-jarvis-1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CraftJarvis/JARVIS-1/HEAD/README.md (retrieved 2026-11-04T13:12:12Z; SHA-256 b8fc1f1ee7512816e62bfbcc7ffc290cac0dc73173156c7f8ff18e84c429aa09)

---

## KWWKComputerUseCore

A Swift computer-use runtime that captures macOS app state and screenshots and sends mouse and keyboard actions. It offers structured and agent-facing outputs.

- Catalog URL: https://awesomecua.com/resources/github-eyhn-kwwk-computer-use-core/
- Original source: https://github.com/EYHN/kwwk-computer-use-core
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, screen-understanding, tool-integration
- Evidence checked: 2026-11-09T21:10:16Z
- ID: github:eyhn/kwwk-computer-use-core

### Limitations

The package includes app and window discovery, snapshot and session management, and input actions. It requires macOS 14 or newer, Swift 6.1 or newer and Accessibility permission. The README declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-eyhn-kwwk-computer-use-core/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/EYHN/kwwk-computer-use-core/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/EYHN/kwwk-computer-use-core/HEAD/README.md (retrieved 2026-11-09T21:10:16Z; SHA-256 c2fef731289286d0cfdea75e914769a6df70a8497b3438ab942438f370a8c569)
- https://raw.githubusercontent.com/EYHN/kwwk-computer-use-core/HEAD/LICENSE (retrieved 2026-11-09T21:12:15Z; SHA-256 193c0d6cf908df0b9ab26718e394ed9a573688d6354fc0c9f9f0905ac9090ee1)

---

## LaVague

Open-source web agent framework where a World Model turns an objective and the current page into instructions and an Action Engine compiles them into Selenium or Playwright code to run.

- Catalog URL: https://awesomecua.com/resources/github-lavague-ai-lavague/
- Original source: https://github.com/lavague-ai/LaVague
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:lavague-ai/lavague

- Record JSON: https://awesomecua.com/resources/github-lavague-ai-lavague/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/lavague-ai/LaVague/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lavague-ai/LaVague/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 7e4d38b95657b604f5f390e25762d94c8d59164fbb2ae6c140c126bb128dbd4f)
- https://raw.githubusercontent.com/lavague-ai/LaVague/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## LiteWebAgent

Open-source VLM web-agent framework providing Playwright browser control, planning, workflow memory, tree search, and FastAPI/Vercel deployment.

- Catalog URL: https://awesomecua.com/resources/github-pathonai-litewebagent/
- Original source: https://github.com/PathOnAI/LiteWebAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, memory, tool-integration
- Evidence checked: 2026-10-16T13:14:29Z
- ID: github:pathonai/litewebagent

- Record JSON: https://awesomecua.com/resources/github-pathonai-litewebagent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/README.md (retrieved 2026-10-16T13:14:29Z; SHA-256 75f99d9388aee3e0b124ebdb5f33e08fbe8ec999ce1e9eba5cd71c21e60522e0)
- https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/LICENSE (retrieved 2026-11-02T17:35:50Z; SHA-256 ec6ef142e3900e9f5555009b825387e41da67a77a24ee72ef6963c99b065e6eb)

---

## LLM-in-Sandbox

LLM-in-Sandbox equips language models with virtualized Linux computer sandboxes and RL training pipelines for multi-turn task execution.

- Catalog URL: https://awesomecua.com/resources/github-llm-in-sandbox-llm-in-sandbox/
- Original source: https://github.com/llm-in-sandbox/llm-in-sandbox
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: sandbox, reinforcement-learning, tool-integration
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:llm-in-sandbox/llm-in-sandbox

- Record JSON: https://awesomecua.com/resources/github-llm-in-sandbox-llm-in-sandbox/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/llm-in-sandbox/llm-in-sandbox/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/llm-in-sandbox/llm-in-sandbox/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 b03bfc73cb05f79985282999332b626f09905b86e4822eca981e2be28c578cc9)
- https://raw.githubusercontent.com/llm-in-sandbox/llm-in-sandbox/HEAD/LICENSE (retrieved 2026-11-04T13:22:46Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## LongHorizon-Harness

LongHorizon-Harness wraps desktop and CLI agents in a persistent plan-act-verify-recover loop for multi-hour autonomous computer-use workflows.

- Catalog URL: https://awesomecua.com/resources/github-amap-ml-longhorizon-harness/
- Original source: https://github.com/AMAP-ML/LongHorizon-Harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, windows
- Topics: long-horizon, planning, self-reflection, workflow
- Evidence checked: 2026-11-04T13:12:05Z
- ID: github:amap-ml/longhorizon-harness

- Record JSON: https://awesomecua.com/resources/github-amap-ml-longhorizon-harness/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/AMAP-ML/LongHorizon-Harness/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AMAP-ML/LongHorizon-Harness/HEAD/README.md (retrieved 2026-11-04T13:12:05Z; SHA-256 3300007a449cc6d3afc8992a3694e81bfb560ef1bff2a34cf5f272615168e0cc)
- https://raw.githubusercontent.com/AMAP-ML/LongHorizon-Harness/HEAD/LICENSE (retrieved 2026-11-04T13:41:38Z; SHA-256 19811a1bfa17047c5755b8279aab9f2a628b261c4967f1592180af282d99f9cd)

---

## MCP-B

The earlier MCP-B codebase: a Chrome extension that discovers and calls tools websites expose as MCP servers, a Cloudflare Workers backend and a native server that relays those tools to desktop MCP clients.

- Catalog URL: https://awesomecua.com/resources/github-miguelspizza-webmcp/
- Original source: https://github.com/MiguelsPizza/WebMCP
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, history
- Evidence checked: 2026-11-10T06:29:33Z
- ID: github:miguelspizza/webmcp

### Limitations

The monorepo holds the extension, a Cloudflare Workers backend and a native messaging host based on mcp-chrome; the extension chat needs an OpenAI or Anthropic key. Requires Node.js 22.12 or later and pnpm 10. License: AGPL-3.0.

- Record JSON: https://awesomecua.com/resources/github-miguelspizza-webmcp/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MiguelsPizza/WebMCP/1143b2184edd4f33ef60fd1d10b0d71c26a2e87e/README.md (retrieved 2026-11-10T06:29:33Z; SHA-256 7b339faeb5ff2dfbfb281143a92b290c7c3c067a6a301726674bc1909ab05c00)

---

## Melaya

Melaya provides SDKs and documentation for an agent platform that operates Android apps and browser tabs, with scoped permissions and human approvals.

- Catalog URL: https://awesomecua.com/resources/github-melaya-labs-melaya/
- Original source: https://github.com/melaya-labs/melaya
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, android, web
- Topics: mobile-navigation, web-navigation, human-in-the-loop, tool-integration
- Evidence checked: 2026-11-09T21:08:28Z
- ID: github:melaya-labs/melaya

### Limitations

The repository says the hosted platform, agent runtime, Device Control service, and Browser Control service are proprietary. It describes a browser extension and public SDKs.

- Record JSON: https://awesomecua.com/resources/github-melaya-labs-melaya/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/melaya-labs/melaya/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/melaya-labs/melaya/HEAD/README.md (retrieved 2026-11-09T21:08:28Z; SHA-256 193e06f15776f8f17ef61a5e086af5c8b70ed47d494a8a8b0957bb2363df0e18)
- https://raw.githubusercontent.com/melaya-labs/melaya/HEAD/LICENSE (retrieved 2026-11-09T21:11:04Z; SHA-256 b9c94dc6def264fef2c5f5e44eb159397b3d0047c5ebcf53acf346cb08298f54)

---

## Melaya MCP

Agent orchestration and Model Context Protocol runtime connecting AI agents to 6,000+ browser, desktop, and API tools.

- Catalog URL: https://awesomecua.com/resources/github-melaya-labs-melaya-mcp/
- Original source: https://github.com/melaya-labs/melaya-mcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, workflow, automation
- Evidence checked: 2026-11-04T17:55:10Z
- ID: github:melaya-labs/melaya-mcp

- Record JSON: https://awesomecua.com/resources/github-melaya-labs-melaya-mcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/melaya-labs/melaya-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/melaya-labs/melaya-mcp/main/README.md (retrieved 2026-11-04T17:55:10Z; SHA-256 96e9b3d0789a1fe8f7db15743d7d492e57c3d018263fda149a019393af046cb3)
- https://raw.githubusercontent.com/melaya-labs/melaya-mcp/HEAD/LICENSE (retrieved 2026-11-04T18:00:15Z; SHA-256 8f6bf64e82d59b64a74efb06b7b61dc6f86bbf357b2c5aebe769b71cede134a2)

---

## Mem0

Mem0 provides a scalable long-term memory layer for AI agents that extracts, consolidates, and retrieves user and session facts.

- Catalog URL: https://awesomecua.com/resources/github-mem0ai-mem0/
- Original source: https://github.com/mem0ai/mem0
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon, efficiency
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:mem0ai/mem0

- Record JSON: https://awesomecua.com/resources/github-mem0ai-mem0/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mem0ai/mem0/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mem0ai/mem0/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 f72db3426438dbdf6879a2b50583fbee8e7e2dde5d01308c6295bcd09fd3db86)
- https://raw.githubusercontent.com/mem0ai/mem0/HEAD/LICENSE (retrieved 2026-11-04T13:23:07Z; SHA-256 0bbcbe931c353293a2fafce08326181dfeea0e568c566afd4ce8337a70f5e219)

---

## MemAgent

MemAgent studies conversational goal alignment for web agents using task information and fine-tuned language models. Its repository provides data and training and execution scripts.

- Catalog URL: https://awesomecua.com/resources/github-dialogbased-interaction-goal-alignment/
- Original source: https://github.com/DialogBased-Interaction/Goal_Alignment
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, memory, web-navigation, evaluation
- Evidence checked: 2026-11-09T21:08:37Z
- ID: github:dialogbased-interaction/goal_alignment

### Limitations

The README names FastChat and Mind2Web as dependencies of its workflow. It reports BLEU and BERT scores for variants with and without a memory bank.

- Record JSON: https://awesomecua.com/resources/github-dialogbased-interaction-goal-alignment/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DialogBased-Interaction/Goal_Alignment/HEAD/README.md (retrieved 2026-11-09T21:08:37Z; SHA-256 1467c3a418b7b287dc8297f5b699d987df4e091f64c2f18c5cc7c92a34ab7e0b)

---

## MemGUI-Agent

MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.

- Catalog URL: https://awesomecua.com/resources/github-kwai-memgui-agent/
- Original source: https://github.com/kwai/MemGUI-Agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: memory, interaction-history, long-horizon, imitation-learning, evaluation
- Evidence checked: 2026-10-20T03:54:57.854138+00:00
- ID: github:kwai/memgui-agent

### Limitations

The inspected release documentation describes dataset utilities, a LoRA SFT template and gold-step offline evaluation; live Android rollouts are explicitly outside that evaluator and linked to separate benchmark repositories.

- Record JSON: https://awesomecua.com/resources/github-kwai-memgui-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README declares Apache-2.0; the inspected LICENSE is a short notice and link, leaving the code license unconfirmed.
  Sources: https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/LICENSE, https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/README.md (retrieved 2026-10-20T03:54:57.854138+00:00; SHA-256 3f7545f466407ed5336f47d18b12e8354ec352ff83dcf973b1545f81d9a629ac)
- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/evaluation/memgui3k_offline_eval/README.md (retrieved 2026-10-20T03:55:26.237759+00:00; SHA-256 4c92c584b6885a3bde8ee89d04ccf48287e7f6119889f75cde0c034c90bd8217)
- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/LICENSE (retrieved 2026-10-20T03:55:01.061844+00:00; SHA-256 d4e344274155be1d0a192c8ae2940169abb0bd8546d045b96b45810593860636)
- https://api.github.com/search/repositories?q=topic%3Agui-agent+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-18&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-19T19:10:26.954787+00:00; SHA-256 0ae4477b885b0915e43874399c2a6b91f7d07954697370204550df931f7db82c)

---

## META-GUI baseline

Training and evaluation pipeline for conversational mobile GUI agents, with action prediction, response generation, and dataset processing.

- Catalog URL: https://awesomecua.com/resources/github-x-lance-meta-gui-baseline/
- Original source: https://github.com/X-LANCE/META-GUI-baseline
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: mobile-navigation, human-in-the-loop
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:x-lance/meta-gui-baseline

### Limitations

Its README describes mobile GUI agents without naming an operating system.

- Record JSON: https://awesomecua.com/resources/github-x-lance-meta-gui-baseline/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 2cea1be73ea75acd46990ab1fb567fbd83ad58a2bc69ca858b207660df9fe8c1)
- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 01fb614f0536ea76c1c25809cc8cde66cde21a96ac6ca0ea81b2c093e2157d2a)

---

## Midscene iOS

Midscene iOS provides an SDK and playground for automating an iOS device through screen actions and queries. It uses macOS device mirroring and exposes a browser-based playground.

- Catalog URL: https://awesomecua.com/resources/github-lhuanyu-midscene-ios/
- Original source: https://github.com/lhuanyu/midscene-ios
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios, desktop, macos
- Topics: mobile-navigation, automation, screen-understanding
- Evidence checked: 2026-11-09T06:16:36Z
- ID: github:lhuanyu/midscene-ios

### Limitations

The repository contains an SDK and playground package. It requires Node.js, Python, macOS accessibility and screen recording permissions, an iOS device, and Midscene model configuration. The README declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-lhuanyu-midscene-ios/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lhuanyu/midscene-ios/HEAD/README.md (retrieved 2026-11-09T06:16:36Z; SHA-256 82bf5e49bd5dc72b8156539894c378346b5e74b5808229c75201896981a1efce)

---

## Midscene Java

A Java SDK for agents that operate web pages through natural-language instructions. It combines screenshot and DOM grounding with browser actions and execution reports.

- Catalog URL: https://awesomecua.com/resources/github-alstafeev-midscene-java/
- Original source: https://github.com/alstafeev/midscene-java
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, planning, observability
- Evidence checked: 2026-11-09T06:16:33Z
- ID: github:alstafeev/midscene-java

### Limitations

The repository describes core, web-adapter, and visualizer modules. It integrates with Selenium, Playwright, and LangChain4j and shows Maven dependencies for the web and visualizer packages.

- Record JSON: https://awesomecua.com/resources/github-alstafeev-midscene-java/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/alstafeev/midscene-java/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alstafeev/midscene-java/HEAD/README.md (retrieved 2026-11-09T06:16:33Z; SHA-256 0b7436ddd44afbdab843cbf642b5eac3e0fc3aee5931c4e9792ee2637f01307e)
- https://raw.githubusercontent.com/alstafeev/midscene-java/HEAD/LICENSE (retrieved 2026-11-09T06:13:30Z; SHA-256 31f157468a6adbd88b3520b2baf748ae2fc4d3e9f4f8f94f9085b6ac45074088)

---

## Midscene Java

Midscene Java is a framework for natural-language UI automation across web pages and Android apps, with modules for element location, actions, extraction and assertions.

- Catalog URL: https://awesomecua.com/resources/github-master-frank-midscene-java/
- Original source: https://github.com/Master-Frank/midscene-java
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, android
- Topics: automation, grounding, mobile-navigation, web-navigation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: github:master-frank/midscene-java

### Limitations

The repository documents Playwright, Selenium and Android modules. Setup requires Java 17 or newer and an AI model API key; the README displays an MIT license badge.

- Record JSON: https://awesomecua.com/resources/github-master-frank-midscene-java/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Master-Frank/midscene-java/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Master-Frank/midscene-java/HEAD/README.md (retrieved 2026-11-09T06:16:33Z; SHA-256 5aa2a805a8df63ff72dcfed1f11622b3d6e95898cc0eda55595ccdd1fa867065)
- https://raw.githubusercontent.com/Master-Frank/midscene-java/HEAD/LICENSE (retrieved 2026-11-09T06:13:31Z; SHA-256 055f3250ac775fa3a090f56425d894aa5081e082f9801a1f01ec977ec7e953cc)

---

## Midscene Python

Midscene Python is a framework for natural-language automation of websites and Android devices, with model-assisted actions, element location, extraction and assertions.

- Catalog URL: https://awesomecua.com/resources/github-python51888-midscene-python/
- Original source: https://github.com/Python51888/Midscene-Python
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, android
- Topics: automation, grounding, mobile-navigation, web-navigation
- Evidence checked: 2026-11-09T06:16:36Z
- ID: github:python51888/midscene-python

### Limitations

The repository contains core agent, web, Android, CLI and visual-report modules, along with examples and tests. The README lists Selenium or Playwright for web use, ADB for Android and an MIT license.

- Record JSON: https://awesomecua.com/resources/github-python51888-midscene-python/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Python51888/Midscene-Python/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Python51888/Midscene-Python/HEAD/README.md (retrieved 2026-11-09T06:16:36Z; SHA-256 e609e08c247028636d6762458206c835023f5198863560ce6e37e2362e2d0d9a)
- https://raw.githubusercontent.com/Python51888/Midscene-Python/HEAD/LICENSE (retrieved 2026-11-09T06:13:45Z; SHA-256 8921d1fc91e915ddac12279ec5d9ebac71b94bc13b579d78af7db3ad6d587e8c)

---

## MobileForge

Android GUI-agent adaptation framework combining app exploration, generated curricula and rollout feedback with hint-conditioned step-level GRPO; the documented public training path targets Qwen3-VL-8B.

- Catalog URL: https://awesomecua.com/resources/github-kwai-mobileforge/
- Original source: https://github.com/kwai/MobileForge
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, data-generation, reinforcement-learning, evaluation
- Evidence checked: 2026-10-20T03:55:04.230792+00:00
- ID: github:kwai/mobileforge

### Limitations

The root README describes MobileGym exploration/feedback and HiFPO optimization. The training README limits its public training path to the Qwen3-VL-8B experiment. The repository code license applies to code; linked model and dataset collections have separate rights.

- Record JSON: https://awesomecua.com/resources/github-kwai-mobileforge/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/kwai/MobileForge/main/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The complete root LICENSE declares Apache-2.0 for repository code. Linked data and model weights, and third-party dependencies, retain separate licensing requirements.
  Sources: https://raw.githubusercontent.com/kwai/MobileForge/main/LICENSE, https://raw.githubusercontent.com/kwai/MobileForge/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/kwai/MobileForge/main/README.md (retrieved 2026-10-20T03:55:04.230792+00:00; SHA-256 f78f58a6e3b8dd2ae3e8c49a15473782ae258ecd70719f7eeddfa43a10441adf)
- https://raw.githubusercontent.com/kwai/MobileForge/main/training/README.md (retrieved 2026-10-20T03:55:29.533431+00:00; SHA-256 58187fe25d8398ef2ae31de02debd4bc3b932ff1925db86a87f5de65b016aed1)
- https://raw.githubusercontent.com/kwai/MobileForge/main/LICENSE (retrieved 2026-10-20T03:55:07.420029+00:00; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://api.github.com/search/repositories?q=topic%3Agui-agent+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-18&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-19T19:10:26.954787+00:00; SHA-256 0ae4477b885b0915e43874399c2a6b91f7d07954697370204550df931f7db82c)

---

## Mobilewright

Mobilewright automates iOS and Android devices through semantic locators and actions. It exposes accessibility trees that agents can use to inspect and operate mobile apps.

- Catalog URL: https://awesomecua.com/resources/github-mobile-next-mobilewright/
- Original source: https://github.com/mobile-next/mobilewright
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, ios, android
- Topics: automation, mobile-navigation, screen-understanding
- Evidence checked: 2026-11-09T06:16:33Z
- ID: github:mobile-next/mobilewright

### Limitations

The README describes packages for test fixtures, protocol types, device drivers and core locators. It requires Node.js and a booted simulator, emulator or connected device.

- Record JSON: https://awesomecua.com/resources/github-mobile-next-mobilewright/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mobile-next/mobilewright/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mobile-next/mobilewright/HEAD/README.md (retrieved 2026-11-09T06:16:33Z; SHA-256 cc398ec30328a780a630fc77d4f4fe4089655cdf0df5435a6f0a14aacfe53a03)
- https://raw.githubusercontent.com/mobile-next/mobilewright/HEAD/LICENSE (retrieved 2026-11-09T06:13:31Z; SHA-256 32908bb20679e6f178809a8784b6ab5078db0a1444e4a582f4825e74cd1a7a58)

---

## Neurosim

Neurosim is a Python framework for building, simulating, and evaluating multi-step AI and computer-use agent systems.

- Catalog URL: https://awesomecua.com/resources/github-anaishowland-neurosim/
- Original source: https://github.com/anaishowland/neurosim
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, planning, workflow
- Evidence checked: 2026-11-04T15:45:42Z
- ID: github:anaishowland/neurosim

- Record JSON: https://awesomecua.com/resources/github-anaishowland-neurosim/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/anaishowland/neurosim/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/anaishowland/neurosim/HEAD/README.md (retrieved 2026-11-04T15:45:42Z; SHA-256 eb6e494b6d5d302831f2de41c091d2829fd2421622491864f547496dce011f20)
- https://raw.githubusercontent.com/anaishowland/neurosim/HEAD/LICENSE (retrieved 2026-11-04T15:57:29Z; SHA-256 c0088833fbfa37d4394db93592ade9cd30ca0576ae89b3f440014093df93f3cf)

---

## Nuphus

Local-first desktop AI agent platform with real desktop GUI execution and a companion mobile second-screen controller.

- Catalog URL: https://awesomecua.com/resources/github-mrpulor-gh-nuphus/
- Original source: https://github.com/mrpulor-gh/nuphus
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, ios, windows, macos, linux
- Topics: workflow, human-in-the-loop, automation, tool-integration
- Evidence checked: 2026-11-04T17:30:29Z
- ID: github:mrpulor-gh/nuphus

- Record JSON: https://awesomecua.com/resources/github-mrpulor-gh-nuphus/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mrpulor-gh/nuphus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mrpulor-gh/nuphus/main/README.md (retrieved 2026-11-04T17:30:29Z; SHA-256 5108fe1536dafcda2b86e748da87a57e519b981fe922aff7bac9c082ec90f613)
- https://raw.githubusercontent.com/mrpulor-gh/nuphus/HEAD/LICENSE (retrieved 2026-11-04T17:39:55Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Oh My DSH

Oh My DSH coordinates multi-agent teams with a shared compare-and-set task graph and native-vision Windows computer-use for DeepSeek Harness.

- Catalog URL: https://awesomecua.com/resources/github-secretxuan-oh-my-dsh/
- Original source: https://github.com/secretxuan/oh-my-dsh
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: workflow, planning, automation, grounding
- Evidence checked: 2026-11-04T15:03:40Z
- ID: github:secretxuan/oh-my-dsh

- Record JSON: https://awesomecua.com/resources/github-secretxuan-oh-my-dsh/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/secretxuan/oh-my-dsh/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/secretxuan/oh-my-dsh/HEAD/README.md (retrieved 2026-11-04T15:03:40Z; SHA-256 a3307dacd65ef5576590794a19984999c7403fd09dec1f53023fc7389dbf3e5a)
- https://raw.githubusercontent.com/secretxuan/oh-my-dsh/HEAD/LICENSE (retrieved 2026-11-04T15:22:53Z; SHA-256 f72449b2e2a4e57038eae3571c4f9a4c9cfaa6466119512af0cb1daed8d75a55)

---

## ok-script

A Python framework for screen automation of Windows apps, games and Android devices with template matching, OCR and input, plus an MCP server through which coding agents screenshot targets, run, reload and package tasks.

- Catalog URL: https://awesomecua.com/resources/github-ok-oldking-ok-script/
- Original source: https://github.com/ok-oldking/ok-script
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: desktop, windows, android
- Topics: automation, tool-integration, screen-understanding
- Evidence checked: 2026-11-10T06:29:26Z
- ID: github:ok-oldking/ok-script

### Limitations

Installed with pip as ok-script[default] on Python 3.11 or later; the MCP server listens on loopback over Streamable HTTP with a bearer token. Finished tasks run headless or in a PySide6 GUI without the agent. Licensed Apache 2.0 with Commons Clause and additional terms.

- Record JSON: https://awesomecua.com/resources/github-ok-oldking-ok-script/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ok-oldking/ok-script/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ok-oldking/ok-script/37db3d1f236b56168543661f6ea1c3e27f171627/README.md (retrieved 2026-11-10T06:29:26Z; SHA-256 e29214a853e36312ac944c765d8515bab93c15042b80444e48ec12c62c0a8bbb)
- https://raw.githubusercontent.com/ok-oldking/ok-script/HEAD/LICENSE.txt (retrieved 2026-11-10T06:22:28Z; SHA-256 31d615200438b02fb695b86b72b02c8054c5d93837aabc84701b3b44453dc57e)

---

## openadapt-types

openadapt-types supplies validated Python models and JSON schemas for computer-use screens, actions, results, and interaction trajectories.

- Catalog URL: https://awesomecua.com/resources/github-openadaptai-openadapt-types/
- Original source: https://github.com/OpenAdaptAI/openadapt-types
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, windows, macos, linux
- Topics: screen-understanding, state-tracking, grounding, history
- Evidence checked: 2026-11-09T19:57:39Z
- ID: github:openadaptai/openadapt-types

### Limitations

The repository is archived, and the README directs development to the OpenAdapt monorepo. It requires Python 3.10 or later and Pydantic 2, and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-openadaptai-openadapt-types/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OpenAdaptAI/openadapt-types/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-types/HEAD/README.md (retrieved 2026-11-09T19:57:39Z; SHA-256 576d342eb124c8acf78633c38a4741afc9cb57d3bbbed39ccefc3cd405b7450d)
- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-types/HEAD/LICENSE (retrieved 2026-11-09T14:21:12Z; SHA-256 b854970b61fd33ad6cc35ab01cb25caeae9bb24cb7aa210ac7aae17e462bdb8e)

---

## OpenManus

OpenManus is an open-source agent framework that runs tasks from a terminal and integrates browser execution and screenshots through Browser Use.

- Catalog URL: https://awesomecua.com/resources/github-foundationagents-openmanus/
- Original source: https://github.com/FoundationAgents/OpenManus
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: automation, tool-integration, web-navigation
- Evidence checked: 2026-11-06T16:36:34Z
- ID: github:foundationagents/openmanus

### Limitations

The README declares an MIT license. It requires LLM API configuration and describes its multi-agent version as unstable.

- Record JSON: https://awesomecua.com/resources/github-foundationagents-openmanus/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/FoundationAgents/OpenManus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FoundationAgents/OpenManus/3309bf4e416fb1c74b008f3e86494439a31bad53/README.md (retrieved 2026-11-06T16:36:34Z; SHA-256 47782e69584033d58236b5447fc61fd054170374d0c46ccdb863dad417423b57)
- https://raw.githubusercontent.com/FoundationAgents/OpenManus/HEAD/LICENSE (retrieved 2026-11-06T10:58:03Z; SHA-256 79e3e521bf15d45421cdb731ed66ea66ff56c429e02a18a20e9f8958a3d1efcc)

---

## OpenWebAgent

OpenWebAgent provides a Chrome extension, HTML simplification parser, and backend server for building LLM-driven web browsing agents.

- Catalog URL: https://awesomecua.com/resources/github-thudm-openwebagent/
- Original source: https://github.com/THUDM/OpenWebAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-11-04T13:12:42Z
- ID: github:thudm/openwebagent

- Record JSON: https://awesomecua.com/resources/github-thudm-openwebagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/OpenWebAgent/HEAD/readme.md (retrieved 2026-11-04T13:12:42Z; SHA-256 2a02e6b983a34c9afb7a3c2e6bf5fca41e878e6c68f8308f10d1e87ae8d9ffee)

---

## Optics Framework

Optics Framework is a self-healing test automation engine for mobile, web, and TV interfaces with Vision/OCR fallback and an MCP server.

- Catalog URL: https://awesomecua.com/resources/github-mozarkai-optics-framework/
- Original source: https://github.com/mozarkai/optics-framework
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, android, ios
- Topics: automation, evaluation, grounding
- Evidence checked: 2026-11-04T13:12:26Z
- ID: github:mozarkai/optics-framework

- Record JSON: https://awesomecua.com/resources/github-mozarkai-optics-framework/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mozarkai/optics-framework/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mozarkai/optics-framework/HEAD/README.md (retrieved 2026-11-04T13:12:26Z; SHA-256 3df921d0524c768112f341380af22992d12849d61352f2f7c06e709194b5e165)
- https://raw.githubusercontent.com/mozarkai/optics-framework/HEAD/LICENSE (retrieved 2026-11-04T13:41:45Z; SHA-256 7e476637f3217b72839ab47f82d08915ae4295345e449ffd239de907029ea12a)

---

## Orchard-Agentic

Orchard-Agentic holds the Orchard environment service, an RL training stack and evaluation code, with recipes for software, browser-navigation and CLI agents and an index of follow-on projects.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-orchard-agentic/
- Original source: https://github.com/microsoft/Orchard-Agentic
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, sandbox, web-navigation, tool-integration
- Evidence checked: 2026-11-10T06:29:27Z
- ID: github:microsoft/orchard-agentic

### Limitations

Contains orchard_env (Kubernetes sandbox service with a Python SDK), orchard_eval for SWE-bench Verified, and a slime fork as a git submodule with orchard_gui rollout examples. Research data lives in the microsoft/Orchard Hugging Face dataset. Declared license: MIT.

- Record JSON: https://awesomecua.com/resources/github-microsoft-orchard-agentic/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/Orchard-Agentic/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/Orchard-Agentic/769f7460c8cbf1d65521732721f57877ca0a6365/README.md (retrieved 2026-11-10T06:29:27Z; SHA-256 90a81d6574a85656fc429cc3446030be767bf765b20f1a64d2f7eade88d962bb)
- https://raw.githubusercontent.com/microsoft/Orchard-Agentic/HEAD/LICENSE (retrieved 2026-11-10T06:22:28Z; SHA-256 7df20dcdf9197e9945c14858d41c60f11b52b93e5b69e2b63416b874d598d322)

---

## OS-Symphony

OS-Symphony is a holistic computer-use agent framework combining a Reflection-Memory Agent, versatile toolset, and multimodal searcher.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-symphony/
- Original source: https://github.com/OS-Copilot/OS-Symphony
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, linux, windows, macos
- Topics: planning, memory, self-reflection, grounding
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:os-copilot/os-symphony

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-symphony/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OS-Copilot/OS-Symphony/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Symphony/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 6a1e6c0d902f3527cae866139e88c6f9c8a5b67cc9f214c4e697a223b6336546)
- https://raw.githubusercontent.com/OS-Copilot/OS-Symphony/HEAD/LICENSE (retrieved 2026-11-04T14:45:11Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## outlive

Checkpoints and resumes long-running Solari cloud browser sessions across 10-minute container timeouts.

- Catalog URL: https://awesomecua.com/resources/github-sy-d-outlive/
- Original source: https://github.com/Sy-D/outlive
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: long-horizon, state-tracking, web-navigation, robustness
- Evidence checked: 2026-11-04T18:11:33Z
- ID: github:sy-d/outlive

- Record JSON: https://awesomecua.com/resources/github-sy-d-outlive/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Sy-D/outlive/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Sy-D/outlive/main/README.md (retrieved 2026-11-04T18:11:33Z; SHA-256 34dd7ae36b85ccb3e34db93922e704b6457e33f88ba28eb430a6f01fa2b4a4cb)
- https://raw.githubusercontent.com/Sy-D/outlive/HEAD/LICENSE (retrieved 2026-11-04T18:16:34Z; SHA-256 63c82295db55a7166347dd126b820796ca27a7d2f8a97584502b3091d02e40d4)

---

## PC-Agent-E training and deployment

Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.

- Catalog URL: https://awesomecua.com/resources/github-gair-nlp-pc-agent-e/
- Original source: https://github.com/GAIR-NLP/PC-Agent-E
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: data-generation, imitation-learning, automation
- Evidence checked: 2026-10-18T04:27:13Z
- ID: github:gair-nlp/pc-agent-e

### Limitations

README demonstrates Windows and Linux operation and describes thought completion and trajectory augmentation. The released source tree contains postprocess, train and deploy code. The checkpoint, data archive and WindowsAgentArena-V2 are separate resources; external model APIs and a training framework are required.

- Record JSON: https://awesomecua.com/resources/github-gair-nlp-pc-agent-e/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d)
- https://api.github.com/repos/GAIR-NLP/PC-Agent-E (retrieved 2026-10-17T15:37:01Z; SHA-256 30761141ea62c5f20183f359bbc3fc8ccc5b458886d38c5426bae4802a23ee0b)
- https://api.github.com/repos/GAIR-NLP/PC-Agent-E/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:23Z; SHA-256 2fb2aa4ee6f02ccadb631dab4972f96c3fdf545cd92c5854fc191e81cf4ae88a)
- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/LICENSE (retrieved 2026-10-18T04:35:19Z; SHA-256 39e37b84c067596361c491e2e9e22af8805386a24b8352b87e9aca3bddf4f92c)

---

## PlayCoder

PlayCoder generates and refines GUI application code using interactive tests. Its PlayTester observes application screenshots, performs interface actions and feeds results into repair.

- Catalog URL: https://awesomecua.com/resources/github-tencent-playcoder/
- Original source: https://github.com/Tencent/PlayCoder
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, windows, macos, linux
- Topics: evaluation, screen-understanding, automation, self-reflection
- Evidence checked: 2026-11-09T21:10:46Z
- ID: github:tencent/playcoder

### Limitations

The repository lists code for generation, GUI testing and evaluation, plus benchmark metadata and a dataset directory. The README describes PlayEval as covering 43 GUI applications in Python, TypeScript and JavaScript.

- Record JSON: https://awesomecua.com/resources/github-tencent-playcoder/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Tencent/PlayCoder/HEAD/README.md (retrieved 2026-11-09T21:10:46Z; SHA-256 94c02dbd93815ccfc02a4b35f52b455d5fe0c7c6fefcc3ec7e3db806549b73f6)

---

## Plow Hermes Agent Template

Safety-first starter template for building visible-browser Hermes computer-use agents with human approval gates.

- Catalog URL: https://awesomecua.com/resources/github-delltrak-plow-hermes-agent-template/
- Original source: https://github.com/delltrak/plow-hermes-agent-template
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, web-navigation, workflow, tool-integration
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:delltrak/plow-hermes-agent-template

- Record JSON: https://awesomecua.com/resources/github-delltrak-plow-hermes-agent-template/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/delltrak/plow-hermes-agent-template/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/delltrak/plow-hermes-agent-template/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 62b3f6075e3268f226ea4c02966ac4cf379dae4f50789a6efbfff011c95ce694)
- https://raw.githubusercontent.com/delltrak/plow-hermes-agent-template/HEAD/LICENSE (retrieved 2026-11-04T18:16:17Z; SHA-256 fb95ffe5247a8e17c35d88cf6291bb4c5459f83e1255783f461abbcd332d5c29)

---

## Predicate Python SDK

The Predicate Python SDK gives browser agents semantic page snapshots, UI assertions, and run traces so they can verify actions and inspect failures.

- Catalog URL: https://awesomecua.com/resources/github-predicatesystems-predicate-runtime-python/
- Original source: https://github.com/PredicateSystems/predicate-runtime-python
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, observability, screen-understanding, web-navigation
- Evidence checked: 2026-11-09T19:55:43Z
- ID: github:predicatesystems/predicate-runtime-python

### Limitations

The README documents a Playwright-based quickstart, a debugger that attaches to an existing agent loop, and SDK primitives for taking snapshots and acting on elements.

- Record JSON: https://awesomecua.com/resources/github-predicatesystems-predicate-runtime-python/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PredicateSystems/predicate-runtime-python/HEAD/README.md (retrieved 2026-11-09T19:55:43Z; SHA-256 d2cae795a1c68b086c2fe5dd4c7e34718fd6bd3cfd1bb625f7dd3fea93afe417)

---

## Predicate TypeScript SDK

Predicate TypeScript SDK supplies browser-agent snapshots, element actions, assertions and traces for building runs that check UI outcomes.

- Catalog URL: https://awesomecua.com/resources/github-predicatesystems-sdk-typescript/
- Original source: https://github.com/PredicateSystems/sdk-typescript
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, observability, state-tracking, web-navigation
- Evidence checked: 2026-11-09T19:56:08Z
- ID: github:predicatesystems/sdk-typescript

### Limitations

The README documents installation through the runtime package and Chromium for Playwright. It also describes a debugger that attaches to an existing agent loop.

- Record JSON: https://awesomecua.com/resources/github-predicatesystems-sdk-typescript/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PredicateSystems/sdk-typescript/HEAD/README.md (retrieved 2026-11-09T19:56:08Z; SHA-256 33e2e251659361738a82a5146c1cff4892dd2be02c29df0d25784e37e1c1e05f)

---

## predicate-secure

predicate-secure is a security wrapper for browser agents that checks actions against policy, verifies outcomes, and records audit evidence.

- Catalog URL: https://awesomecua.com/resources/github-predicatesystems-predicate-secure/
- Original source: https://github.com/PredicateSystems/predicate-secure
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, web-navigation, observability
- Evidence checked: 2026-11-09T21:10:43Z
- ID: github:predicatesystems/predicate-secure

### Limitations

The README shows browser-use and Playwright integrations. Pre-action blocking requires the Predicate Authority Sidecar; debug tracing and audit logging can run without it.

- Record JSON: https://awesomecua.com/resources/github-predicatesystems-predicate-secure/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PredicateSystems/predicate-secure/HEAD/README.md (retrieved 2026-11-09T21:10:43Z; SHA-256 aeea8bd08fa244843c6e71c41d0baadb7072acaec3499110bd2b9c85cd1457b6)

---

## Programming with Pixels (PwP)

Programming with Pixels provides a framework and benchmark for software-engineering agents that work in IDEs through screenshots, typing, and clicks.

- Catalog URL: https://awesomecua.com/resources/github-programmingwithpixels-pwp/
- Original source: https://github.com/ProgrammingwithPixels/PwP
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, screen-understanding, automation
- Evidence checked: 2026-11-09T19:57:28Z
- ID: github:programmingwithpixels/pwp

### Limitations

The README gives Python and Docker prerequisites, with an optional NVIDIA GPU. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-programmingwithpixels-pwp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ProgrammingwithPixels/PwP/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ProgrammingwithPixels/PwP/HEAD/README.md (retrieved 2026-11-09T19:57:28Z; SHA-256 833a47a7a9f3f517c38af123dfc5cf01411d7a4c5a640494c1f318e1e8461557)
- https://raw.githubusercontent.com/ProgrammingwithPixels/PwP/HEAD/LICENSE (retrieved 2026-11-09T14:21:01Z; SHA-256 6db5f74b64c9e2edb422bb5f1bfcff37cceb1c1166ace23ac3b7bba5a07c32a0)

---

## Pydoll

Pydoll is a Python browser automation library that controls Chrome or Edge through the DevTools Protocol and supports navigation, element interaction, and extraction.

- Catalog URL: https://awesomecua.com/resources/github-autoscrape-labs-pydoll/
- Original source: https://github.com/autoscrape-labs/pydoll
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, web-navigation
- Evidence checked: 2026-11-09T21:10:35Z
- ID: github:autoscrape-labs/pydoll

### Limitations

The README documents synchronous and asynchronous APIs and a Playwright-compatible layer. It requires Python and an installed Chrome or Edge browser.

- Record JSON: https://awesomecua.com/resources/github-autoscrape-labs-pydoll/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/autoscrape-labs/pydoll/HEAD/README.md (retrieved 2026-11-09T21:10:35Z; SHA-256 27486e482d09d9fd70a2327806ca98d23308253e815836ce0751a63c45d90132)

---

## Qontinui

Qontinui is a model-based GUI automation framework that represents application screens as state graphs with visual template and OCR matching.

- Catalog URL: https://awesomecua.com/resources/github-qontinui-qontinui/
- Original source: https://github.com/qontinui/qontinui
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: automation, grounding, state-tracking
- Evidence checked: 2026-11-04T13:12:32Z
- ID: github:qontinui/qontinui

- Record JSON: https://awesomecua.com/resources/github-qontinui-qontinui/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/qontinui/qontinui/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/qontinui/qontinui/HEAD/README.md (retrieved 2026-11-04T13:12:32Z; SHA-256 ca2fca0dfc116d4f36c159a8c938f8ad0380db5c85da7d3b497c54ceb4fc5e89)
- https://raw.githubusercontent.com/qontinui/qontinui/HEAD/LICENSE (retrieved 2026-11-04T13:23:02Z; SHA-256 0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0)

---

## RecreationWorld

Framework for hybrid computer-use agents that inspect running reference apps, implement replicas with coding tools, and verify behavior across five platforms.

- Catalog URL: https://awesomecua.com/resources/github-qwenlm-recreationworld/
- Original source: https://github.com/QwenLM/RecreationWorld
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows, android, web
- Topics: evaluation, tool-integration, sandbox, ui-design
- Evidence checked: 2026-11-09T06:16:37Z
- ID: github:qwenlm/recreationworld

### Limitations

The repository includes provider guides and a task index. Scored runs require a frozen task bundle, a prepared execution environment, and model and judge endpoints. The README declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-qwenlm-recreationworld/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/QwenLM/RecreationWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/QwenLM/RecreationWorld/HEAD/README.md (retrieved 2026-11-09T06:16:37Z; SHA-256 ad108d6bf8d3c03f6c5fd99feb8b688d55eee211a7be9525e20ac453b6297ad3)
- https://raw.githubusercontent.com/QwenLM/RecreationWorld/HEAD/LICENSE (retrieved 2026-11-09T06:13:54Z; SHA-256 a193d5207d8765eb6368f21afaa632bdd95cf8eb85ce69b48d09a5e1a6fd4809)

---

## redux-webmcp

A WebMCP bridge for Redux Toolkit apps that lets browser agents dispatch allowed actions and inspect state changes. Developers can require approval for selected actions.

- Catalog URL: https://awesomecua.com/resources/github-breeznik-redux-webmcp/
- Original source: https://github.com/breeznik/redux-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: automation, state-tracking, observability, human-in-the-loop
- Evidence checked: 2026-11-09T19:56:03Z
- ID: github:breeznik/redux-webmcp

### Limitations

The README includes a store integration example and describes raw dispatch and declared semantic actions. It says WebMCP requires HTTPS or localhost.

- Record JSON: https://awesomecua.com/resources/github-breeznik-redux-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/breeznik/redux-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/breeznik/redux-webmcp/HEAD/README.md (retrieved 2026-11-09T19:56:03Z; SHA-256 20c0611f875cce022f4fcc270268227cbc496aeb3d3c255db84c0604bde91f1c)
- https://raw.githubusercontent.com/breeznik/redux-webmcp/HEAD/LICENSE (retrieved 2026-11-09T14:20:35Z; SHA-256 6687f84b3f13281c5a9f9ed8113a05ada2d72e8a5ffd1933239d00b30ae3d982)

---

## RLVR-World

RLVR-World trains world models with verifiable reinforcement learning to predict state transitions for web and game agents.

- Catalog URL: https://awesomecua.com/resources/github-thuml-rlvr-world/
- Original source: https://github.com/thuml/RLVR-World
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: world-models, reinforcement-learning
- Evidence checked: 2026-11-04T14:02:38Z
- ID: github:thuml/rlvr-world

- Record JSON: https://awesomecua.com/resources/github-thuml-rlvr-world/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/thuml/RLVR-World/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/thuml/RLVR-World/HEAD/README.md (retrieved 2026-11-04T14:02:38Z; SHA-256 db83605195346ccd3b3cad1118f2398c86dc1e43a8303f7d5343777a17c1e34f)
- https://raw.githubusercontent.com/thuml/RLVR-World/HEAD/LICENSE (retrieved 2026-11-04T14:07:28Z; SHA-256 f963a3becf605b20bb9b2e54ee3ae705f8c58234530f1b8766c8e619abc41a1c)

---

## RPA for Python

RPA for Python provides a Python API over TagUI for automating websites, desktop GUI applications via visual OCR, and command-line workflows.

- Catalog URL: https://awesomecua.com/resources/github-tebelorg-rpa-python/
- Original source: https://github.com/tebelorg/RPA-Python
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: automation, workflow
- Evidence checked: 2026-11-04T13:12:39Z
- ID: github:tebelorg/rpa-python

- Record JSON: https://awesomecua.com/resources/github-tebelorg-rpa-python/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/tebelorg/RPA-Python/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tebelorg/RPA-Python/HEAD/README.md (retrieved 2026-11-04T13:12:39Z; SHA-256 01d38067c851fae223fc071029d5cb461141100a8fc5aabf053038299003ca7a)
- https://raw.githubusercontent.com/tebelorg/RPA-Python/HEAD/LICENSE.txt (retrieved 2026-11-04T13:23:03Z; SHA-256 a6a7f70c43d9b85f64b804c6d53780da3d2d05e86d4ee650d2848e7689ddd346)

---

## SCOPE-Gen

A framework that generates and validates desktop GUI tasks for OSWorld, then creates paired safety tasks while retaining the original goal and completion evaluator.

- Catalog URL: https://awesomecua.com/resources/github-k4ngzy-scope-gen/
- Original source: https://github.com/k4ngzy/SCOPE-Gen
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: data-generation, evaluation, safety-security, cross-app
- Evidence checked: 2026-11-09T19:56:53Z
- ID: github:k4ngzy/scope-gen

### Limitations

The pipeline produces task specifications, setup artifacts, evaluators, and counterfactual artifacts. Formal generation requires an OpenAI-compatible endpoint or Codex CLI and a Safactory checkout.

- Record JSON: https://awesomecua.com/resources/github-k4ngzy-scope-gen/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/k4ngzy/SCOPE-Gen/HEAD/README.md (retrieved 2026-11-09T19:56:53Z; SHA-256 4eb912674cb0cac898bae84b05fc9dee979db198b0ed7b2a2ced986078bd62d9)

---

## SE-GUI

SE-GUI provides training and evaluation code for a GUI-grounding model refined with location-based rewards and attention feedback; its README links separate weights and seed data.

- Catalog URL: https://awesomecua.com/resources/github-yxb-nku-se-gui/
- Original source: https://github.com/YXB-NKU/SE-GUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-11-09T06:16:39Z
- ID: github:yxb-nku/se-gui

### Limitations

The README gives a Qwen2.5-VL training command and ScreenSpot evaluation commands. The model checkpoint and dataset are linked to separate Hugging Face repositories.

- Record JSON: https://awesomecua.com/resources/github-yxb-nku-se-gui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/YXB-NKU/SE-GUI/HEAD/README.md (retrieved 2026-11-09T06:16:39Z; SHA-256 6452101c34cd07a9c1b84fbaa52cd6ac228fa71800d549cb09cc6e09f0e920db)

---

## SeleniumBase

Python browser automation framework for web crawling, end-to-end testing and scraping, with a recorder that generates tests and stealth options.

- Catalog URL: https://awesomecua.com/resources/github-seleniumbase-seleniumbase/
- Original source: https://github.com/seleniumbase/SeleniumBase
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, recording, evaluation
- Evidence checked: 2026-11-06T16:36:31Z
- ID: github:seleniumbase/seleniumbase

### Limitations

Release v4.57.1 dated 2026-11-05. Declared license MIT.

- Record JSON: https://awesomecua.com/resources/github-seleniumbase-seleniumbase/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/seleniumbase/SeleniumBase/b806f54ab0c998c90654b59a817d959f7ff7920c/README.md (retrieved 2026-11-06T16:36:31Z; SHA-256 972f3699b8b5b3584a7ec980fcb1f464be33cddd822b2012e946f38ddb808116)

---

## Serpent.AI

A Python framework for building agents that interact with native video games, using plugins and support modules to turn games into research environments.

- Catalog URL: https://awesomecua.com/resources/github-serpentai-serpentai/
- Original source: https://github.com/SerpentAI/SerpentAI
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: automation, sandbox, reinforcement-learning, history
- Evidence checked: 2026-11-09T19:56:09Z
- ID: github:serpentai/serpentai

### Limitations

The README describes a plugin architecture for game support and agents, plus CLI tools and machine-learning experiments. It names Linux and Windows as supported platforms.

- Record JSON: https://awesomecua.com/resources/github-serpentai-serpentai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SerpentAI/SerpentAI/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SerpentAI/SerpentAI/HEAD/README.md (retrieved 2026-11-09T19:56:09Z; SHA-256 7cf4c44912608107e1da70b51230f9a436994c7063306ed77e8ec1fd348c33ba)
- https://raw.githubusercontent.com/SerpentAI/SerpentAI/HEAD/LICENSE.md (retrieved 2026-11-09T14:20:38Z; SHA-256 dfe39ee4a9b642cd7d9c1e7a76b0f21dbb44ec4bbf3949aad5eba3074fd24eee)

---

## SimpAgent

SimpAgent implements context-aware history simplification and visual token pruning to accelerate multimodal GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-jiutian-vl-simpagent/
- Original source: https://github.com/JiuTian-VL/SimpAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, web
- Topics: efficiency, grounding, mobile-navigation
- Evidence checked: 2026-11-04T13:12:20Z
- ID: github:jiutian-vl/simpagent

- Record JSON: https://awesomecua.com/resources/github-jiutian-vl-simpagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JiuTian-VL/SimpAgent/HEAD/README.md (retrieved 2026-11-04T13:12:20Z; SHA-256 97eb4cde1d95f711ed578ca09e93483b3005ff45e24107e14ffb5ffecbafdd96)

---

## Snapsurf

Web navigation and verification layer for AI agents providing compact semantic page digests and typed post-action DOM diffs.

- Catalog URL: https://awesomecua.com/resources/github-zumerlab-snapsurf/
- Original source: https://github.com/zumerlab/snapsurf
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, state-tracking, efficiency
- Evidence checked: 2026-11-04T16:51:56Z
- ID: github:zumerlab/snapsurf

- Record JSON: https://awesomecua.com/resources/github-zumerlab-snapsurf/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/zumerlab/snapsurf/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zumerlab/snapsurf/HEAD/README.md (retrieved 2026-11-04T16:51:56Z; SHA-256 5752022a49f1bd82d7b9bd77836187dfd32cf696c8b58126d821805bbdb82afa)
- https://raw.githubusercontent.com/zumerlab/snapsurf/HEAD/LICENSE (retrieved 2026-11-04T16:56:46Z; SHA-256 2ab24556e776e1112bf830904962d3ee416b1dc424a99d0b425dde0377357197)

---

## Solari Research Suite: ARC & ColdStart

A research suite combining an accessibility-based browser-agent harness with an evaluation harness that changes a web task app and verifies completed actions against database state.

- Catalog URL: https://awesomecua.com/resources/github-itw-code-solari-cookbook/
- Original source: https://github.com/itw-code/solari-cookbook
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, robustness, grounding
- Evidence checked: 2026-11-09T21:10:51Z
- ID: github:itw-code/solari-cookbook

### Limitations

The README describes offline mock tests, committed evaluation artifacts and live runs using Solari sandboxes and a vision model. It identifies the repository as a fork with original ARC and ColdStart work.

- Record JSON: https://awesomecua.com/resources/github-itw-code-solari-cookbook/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/itw-code/solari-cookbook/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/itw-code/solari-cookbook/HEAD/README.md (retrieved 2026-11-09T21:10:51Z; SHA-256 c9c8a67d2a7443813c62c10465a3218b3b003b81d120e3b115179f27045bbb84)
- https://raw.githubusercontent.com/itw-code/solari-cookbook/HEAD/LICENSE (retrieved 2026-11-09T21:12:29Z; SHA-256 3efb6319acebefe4992ff432c420f50c0cb3b922ef658ae0a59d85bfffd7f44f)

---

## spider-browser

A cloud browser SDK with page control, natural-language actions, element observation and autonomous agent runs, provided in several programming languages.

- Catalog URL: https://awesomecua.com/resources/github-spider-rs-spider-browser/
- Original source: https://github.com/spider-rs/spider-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, recording, tool-integration
- Evidence checked: 2026-11-09T19:56:36Z
- ID: github:spider-rs/spider-browser

### Limitations

The README shows TypeScript, Python, Rust and Go clients, and says access requires a Spider API key. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/github-spider-rs-spider-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/spider-rs/spider-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/spider-rs/spider-browser/HEAD/README.md (retrieved 2026-11-09T19:56:36Z; SHA-256 f20b5fd47929dd4f53547df9e22f0759e2a76f12eb5ed92e1723532deab7a5b4)
- https://raw.githubusercontent.com/spider-rs/spider-browser/HEAD/LICENSE (retrieved 2026-11-09T14:20:45Z; SHA-256 1a3b65ed8c3b242aa834ab38e9d5cf85169c88f49cbe83a64d1f2f59238dd820)

---

## Steel Node API Library

TypeScript and JavaScript client for the Steel cloud browser API, with typed calls to create browser sessions, send computer actions, solve CAPTCHAs and manage files, profiles and credentials.

- Catalog URL: https://awesomecua.com/resources/github-steel-dev-steel-node/
- Original source: https://github.com/steel-dev/steel-node
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: sandbox, automation, web-navigation
- Evidence checked: 2026-11-10T03:00:59Z
- ID: github:steel-dev/steel-node

### Limitations

Published on npm as steel-sdk and generated with Stainless; calls need a STEEL_API_KEY. The api.md reference lists sessions, captchas, files, credentials, extensions, profiles, computers and checkpoints endpoints.

- Record JSON: https://awesomecua.com/resources/github-steel-dev-steel-node/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/steel-dev/steel-node/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/steel-dev/steel-node/181486b55c11cb3d57261a91c159643047ebf94c/README.md (retrieved 2026-11-10T03:00:59Z; SHA-256 67bcf656ae4eb7faec3bbaf29eb9fbd037ce203d5661d6b4cbb42ecb7b073087)
- https://raw.githubusercontent.com/steel-dev/steel-node/HEAD/LICENSE (retrieved 2026-11-10T02:08:10Z; SHA-256 9c157c3b920cdacbb9f90e4e1f57ed88c74b831d5dc5ed82cb32893566824b81)

---

## Steel Python API library

Python client for the Steel cloud browser API, with synchronous and asynchronous clients and typed calls to create browser sessions, send computer actions, solve CAPTCHAs and manage files and profiles.

- Catalog URL: https://awesomecua.com/resources/github-steel-dev-steel-python/
- Original source: https://github.com/steel-dev/steel-python
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: sandbox, automation, web-navigation
- Evidence checked: 2026-11-10T03:00:59Z
- ID: github:steel-dev/steel-python

### Limitations

Archived at version 0.19.0; the steel-sdk package on PyPI is now built from github.com/steel-dev/sdk (python/). Generated with Stainless on httpx; requires Python 3.9 or higher and a STEEL_API_KEY. The api.md reference lists sessions, captchas, files, credentials, extensions, profiles, computers and checkpoints endpoints.

- Record JSON: https://awesomecua.com/resources/github-steel-dev-steel-python/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/steel-dev/steel-python/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/steel-dev/steel-python/50592867e89c2b4815632d5b54f5c8266618ce61/README.md (retrieved 2026-11-10T03:00:59Z; SHA-256 6c7dd13c0c62bb10026610534167ef5ac2af7d3f6cf6ba243f647b3d2eb00b9c)
- https://raw.githubusercontent.com/steel-dev/steel-python/HEAD/LICENSE (retrieved 2026-11-10T02:08:10Z; SHA-256 9c157c3b920cdacbb9f90e4e1f57ed88c74b831d5dc5ed82cb32893566824b81)

---

## SteP (Stacked LLM Policies)

SteP implements dynamically composed Markovian LLM policies for multi-step web navigation and task execution on WebArena.

- Catalog URL: https://awesomecua.com/resources/github-asappresearch-webagents-step/
- Original source: https://github.com/asappresearch/webagents-step
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning
- Evidence checked: 2026-11-04T13:12:07Z
- ID: github:asappresearch/webagents-step

- Record JSON: https://awesomecua.com/resources/github-asappresearch-webagents-step/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/asappresearch/webagents-step/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/asappresearch/webagents-step/HEAD/README.md (retrieved 2026-11-04T13:12:07Z; SHA-256 7d50c4fa249fbd137e36999779c9e88d96a0fdc7be37422d9714ecb304b84e31)
- https://raw.githubusercontent.com/asappresearch/webagents-step/HEAD/LICENSE (retrieved 2026-11-04T13:22:45Z; SHA-256 298dc651a692c945007dca6812f261214a997b489d2a7f2a7f50ffce168bcf88)

---

## Surfkit

Python toolkit and CLI for building, publishing and running multimodal agents that operate devices such as Ubuntu desktops, locally or on Kubernetes, with task trackers and an agent hub.

- Catalog URL: https://awesomecua.com/resources/github-agentsea-surfkit/
- Original source: https://github.com/agentsea/surfkit
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: workflow
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:agentsea/surfkit

- Record JSON: https://awesomecua.com/resources/github-agentsea-surfkit/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/agentsea/surfkit/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agentsea/surfkit/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 32420db547a889f0d86090689d0bd0c93d1776a70346dfd4029db7d99ae4bd9f)
- https://raw.githubusercontent.com/agentsea/surfkit/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 40f2354eb662ebb7b99d874b45f639e1265bec931073cda9ff21c6cf2cb0c499)

---

## Synapse

A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.

- Catalog URL: https://awesomecua.com/resources/github-ltzheng-synapse/
- Original source: https://github.com/ltzheng/Synapse
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: memory, planning, web-navigation, imitation-learning
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:ltzheng/synapse

### Limitations

Training, memory-building and evaluation scripts for MiniWoB++ and Mind2Web are present. External benchmark data, model/API credentials and legacy dependencies are still required. License remains unknown: the README shows MIT, while LICENSE is an NTUITIVE non-commercial agreement that both permits some distribution and separately says distribution is prohibited. No interpretation resolves those contradictions, and no commercial or non-commercial permission is asserted. This admission confirms the released GUI implementation.

- Record JSON: https://awesomecua.com/resources/github-ltzheng-synapse/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Unresolved conflict between README MIT badge and NTUITIVE non-commercial LICENSE, including inconsistent redistribution clauses. The README MIT badge and NTUITIVE non-commercial LICENSE conflict, including redistribution clauses; permissions remain unresolved.
  Sources: https://raw.githubusercontent.com/ltzheng/synapse/HEAD/README.md, https://raw.githubusercontent.com/ltzheng/Synapse/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ltzheng/synapse/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 ed5416d91665017fca4b354016b7c2c748acf32d7723483fecb5387a22a1fdff)
- https://api.github.com/repos/ltzheng/synapse (retrieved 2026-10-17T12:30:54Z; SHA-256 79a238a6f486d2a8970baba199f0968d28f14d42922c86ce71753eb687e0e9c6)
- https://api.github.com/repos/ltzheng/Synapse/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 785a7163dac9f41b1d0ca97f8dd9311b6df6a09f3a5163438dd64db226a4ceaf)
- https://export.arxiv.org/api/query?id_list=1802.08802%2C1808.09132%2C2005.03776%2C2101.09465%2C2103.16057%2C2104.08560%2C2105.13231%2C2107.03374%2C2107.13731%2C2108.03353%2C2202.02312%2C2202.08137%2C2204.01691%2C2205.11029%2C2207.01206%2C2209.08199%2C2209.08655%2C2209.14927%2C2209.15099%2C2210.02663%2C2210.03629%2C2210.03945%2C2211.07615%2C2301.10165%2C2301.13280%2C2302.04761%2C2303.07280%2C2303.08774%2C2303.17491%2C2303.17580%2C2304.04370%2C2304.07061%2C2305.04091%2C2305.05662%2C2305.08144%2C2305.10601%2C2305.11854%2C2305.12487%2C2305.14257%2C2305.14325%2C2305.16504%2C2305.16653%2C2305.19308%2C2306.00245%2C2306.06070%2C2306.07863%2C2307.10088%2C2307.12856%2C2307.13854%2C2308.01990&max_results=50 (retrieved 2026-10-16T06:31:20Z; SHA-256 cbe8bfcbce4170a94a6cf42de01fbe0a448e7b1d29fa75a0de877105a98ec08e)
- https://raw.githubusercontent.com/ltzheng/Synapse/HEAD/LICENSE (retrieved 2026-10-17T12:34:09Z; SHA-256 cc4bce2274289d2b924fcc3c185c68b8e7c539365c5f8c72be865883244088ec)

---

## TeachReplay

TeachReplay is a harness-agnostic teach-by-demonstration engine that records human UI workflows and compiles them into parameterized skills.

- Catalog URL: https://awesomecua.com/resources/github-ottohere-mourn-teachreplay/
- Original source: https://github.com/Ottohere-Mourn/TeachReplay
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: imitation-learning, recording, workflow, automation
- Evidence checked: 2026-11-04T14:20:11Z
- ID: github:ottohere-mourn/teachreplay

- Record JSON: https://awesomecua.com/resources/github-ottohere-mourn-teachreplay/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Ottohere-Mourn/TeachReplay/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Ottohere-Mourn/TeachReplay/HEAD/README.md (retrieved 2026-11-04T14:20:11Z; SHA-256 af854e637ea648c2eed72f8415ba9dfb6c5b0a31ffabbd73c6b232a3863abdeb)
- https://raw.githubusercontent.com/Ottohere-Mourn/TeachReplay/HEAD/LICENSE (retrieved 2026-11-04T14:24:00Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## ToolCUA

ToolCUA trains computer-use agents to orchestrate hybrid MCP tool invocations and GUI actions on OSWorld-MCP.

- Catalog URL: https://awesomecua.com/resources/github-x-plug-toolcua/
- Original source: https://github.com/X-PLUG/ToolCUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: tool-integration, reinforcement-learning, planning, efficiency
- Evidence checked: 2026-11-04T13:12:43Z
- ID: github:x-plug/toolcua

- Record JSON: https://awesomecua.com/resources/github-x-plug-toolcua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/X-PLUG/ToolCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/X-PLUG/ToolCUA/HEAD/README.md (retrieved 2026-11-04T13:12:43Z; SHA-256 ea9905b5e3403b347b7251de553957ca6942a4b0d0c84604c2f46535fec8a923)
- https://raw.githubusercontent.com/X-PLUG/ToolCUA/HEAD/LICENSE (retrieved 2026-11-04T13:41:40Z; SHA-256 a355c8a73966284662c8ae89f44c432cbb3a7dff59cf6d54281d9718918b4712)

---

## Upsonic (GPT Computer Assistant)

Upsonic (formerly GPT Computer Assistant) is a Python agent framework with MCP support and desktop screen/input automation.

- Catalog URL: https://awesomecua.com/resources/github-onuratakan-gpt-computer-assistant/
- Original source: https://github.com/onuratakan/gpt-computer-assistant
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: automation, tool-integration, workflow
- Evidence checked: 2026-11-04T13:12:29Z
- ID: github:onuratakan/gpt-computer-assistant

- Record JSON: https://awesomecua.com/resources/github-onuratakan-gpt-computer-assistant/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/onuratakan/gpt-computer-assistant/HEAD/LICENCE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/onuratakan/gpt-computer-assistant/HEAD/README.md (retrieved 2026-11-04T13:12:29Z; SHA-256 2bfb92e6063c8dd59d7463c284f2dc5b74bec342e2a164d66548bd846763a143)
- https://raw.githubusercontent.com/onuratakan/gpt-computer-assistant/HEAD/LICENCE (retrieved 2026-11-04T13:46:56Z; SHA-256 293a954f7ba6e18707ea4adbadb3900da73854e070aec37c9b54fab9dc7c97ec)

---

## VisionAX

Computer-vision accessibility-tree (AX/A11Y) generator that synthesizes structured UI trees from raw desktop pixels.

- Catalog URL: https://awesomecua.com/resources/github-rao-studios-visionax/
- Original source: https://github.com/rao-studios/VisionAX
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, linux
- Topics: grounding, screen-understanding, efficiency
- Evidence checked: 2026-11-04T18:11:38Z
- ID: github:rao-studios/visionax

- Record JSON: https://awesomecua.com/resources/github-rao-studios-visionax/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/rao-studios/VisionAX/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rao-studios/VisionAX/main/README.md (retrieved 2026-11-04T18:11:38Z; SHA-256 5a6e690ad4ef96383678d0824249e2071e7c6c8b01e003110b8f00cf2d40a42d)
- https://raw.githubusercontent.com/rao-studios/VisionAX/HEAD/LICENSE (retrieved 2026-11-04T18:16:32Z; SHA-256 c3524435ae6e8561cbfe58903055dba68397cacc6da8715f04aa8e23f607b025)

---

## VISTA

VISTA is a harness for visual game agents that combines game actions with frame inspection and retrievable observation history for extended tasks.

- Catalog URL: https://awesomecua.com/resources/github-joshhhhhan-vista/
- Original source: https://github.com/joshhhhhan/VISTA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: memory, screen-understanding, long-horizon, evaluation
- Evidence checked: 2026-11-09T21:08:35Z
- ID: github:joshhhhhan/vista

### Limitations

The repository includes a Python package, scripts and Dockerfiles. Its README specifies Linux x86_64, Python 3.12, Docker Engine and a Codex CLI or Claude Code runtime. Online ARC-AGI-3 runs require an API key.

- Record JSON: https://awesomecua.com/resources/github-joshhhhhan-vista/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/joshhhhhan/VISTA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/joshhhhhan/VISTA/HEAD/README.md (retrieved 2026-11-09T21:08:35Z; SHA-256 d360597a4f8510ebc6adc0b120d17e7ff323ec012df832499f7c9ba3c3ce2109)
- https://raw.githubusercontent.com/joshhhhhan/VISTA/HEAD/LICENSE (retrieved 2026-11-09T21:11:06Z; SHA-256 b6dab3c387b7552220ba40271db8ec2cb28c9a4c6229f35910228b41004b3282)

---

## WebAggregator

WebAggregator is the code for Explore to Evolve: it builds verifiable web QA data by agent exploration of URLs, samples trajectories with a smolagents agent that clicks and types in a browser, and runs evaluation.

- Catalog URL: https://awesomecua.com/resources/github-tencent-webaggregator/
- Original source: https://github.com/Tencent/WebAggregator
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, evaluation
- Evidence checked: 2026-11-10T06:29:30Z
- ID: github:tencent/webaggregator

### Limitations

Builds on a bundled modified smolagents with trajectory collection; queries, trajectories and the WebAggregator 8B and 32B models are on Hugging Face. Configuration needs model endpoints set in config.py.

- Record JSON: https://awesomecua.com/resources/github-tencent-webaggregator/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Tencent/WebAggregator/0e4f4d1583431abb838895267f925c018b0df510/readme.md (retrieved 2026-11-10T06:29:30Z; SHA-256 32af3519b17bd562dc2e1d14d0b5f29a1a6493619caff2dfff73f443bd677c63)

---

## WebLlama

Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.

- Catalog URL: https://awesomecua.com/resources/github-mcgill-nlp-webllama/
- Original source: https://github.com/McGill-NLP/webllama
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, evaluation, tool-integration
- Evidence checked: 2026-10-17T12:30:55Z
- ID: github:mcgill-nlp/webllama

### Limitations

The manifest contains modeling/training code, BrowserGym examples, documentation and a results viewer. The README distinguishes currently available components from planned additional benchmarks and deployment integrations. It requests citation of WebLINX as the foundation for data, training and evaluation. MIT applies to repository code, subject to file-header exceptions; weights and datasets have their own terms.

- Record JSON: https://awesomecua.com/resources/github-mcgill-nlp-webllama/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/McGill-NLP/webllama/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: README explicitly scopes MIT to code unless a file header states otherwise; models/data/images retain original licenses.
  Sources: https://raw.githubusercontent.com/McGill-NLP/webllama/HEAD/LICENSE, https://raw.githubusercontent.com/McGill-NLP/webllama/HEAD/README.md

### Primary evidence

- https://raw.githubusercontent.com/McGill-NLP/webllama/HEAD/README.md (retrieved 2026-10-17T12:30:55Z; SHA-256 121546c7a73f4d7604ae5340bd78856e8170dc8aaa8e57f7e62efcfb85d8d4c9)
- https://api.github.com/repos/McGill-NLP/webllama (retrieved 2026-10-17T12:30:55Z; SHA-256 6605b7b09e8be77cce9d5bfd1a6199c2256cbfc1f067b93b2b952c1d19e74f10)
- https://api.github.com/repos/McGill-NLP/webllama/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:06Z; SHA-256 915620d7a155f5c5fe099cdb0461d9614e1894b38559f0d2f9a6a138afe06212)
- https://raw.githubusercontent.com/McGill-NLP/webllama/HEAD/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 e69268828e67ffd1d3393a2d3530f97df6deaa0b961039fc971abea28cec8715)

---

## WebMCP

An early WebMCP proposal and code: a script widget on a website registers its tools, resources and prompts, which MCP clients reach through a token-secured localhost WebSocket server.

- Catalog URL: https://awesomecua.com/resources/github-jasonjmcghee-webmcp/
- Original source: https://github.com/jasonjmcghee/WebMCP
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, history
- Evidence checked: 2026-11-10T06:29:33Z
- ID: github:jasonjmcghee/webmcp

### Limitations

Distributed as the npm package @jason.today/webmcp with an auto-config command for Claude, Cursor, Cline and Windsurf; websites include webmcp.js. Docker files support running the WebSocket server. License: MIT. The README points to the W3C WebMCP repository as the current specification.

- Record JSON: https://awesomecua.com/resources/github-jasonjmcghee-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/jasonjmcghee/WebMCP/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jasonjmcghee/WebMCP/d3a442733a8e799844df008ad89545d483b2ac1c/README.md (retrieved 2026-11-10T06:29:33Z; SHA-256 aa154eb06206c524eb4432ac3c9303cbe452cccf611ce2b6990dd0fde1c97578)
- https://raw.githubusercontent.com/jasonjmcghee/WebMCP/HEAD/LICENSE (retrieved 2026-11-10T06:22:35Z; SHA-256 47882db9d8845bd4793a846726d298caac0294f9d0eab46052f12535ce4f1a15)

---

## WebThinker

WebThinker empowers large reasoning models to autonomously search, browse webpages, and draft research reports during deep thinking.

- Catalog URL: https://awesomecua.com/resources/github-ruc-nlpir-webthinker/
- Original source: https://github.com/RUC-NLPIR/WebThinker
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, reinforcement-learning, long-horizon
- Evidence checked: 2026-11-04T13:12:34Z
- ID: github:ruc-nlpir/webthinker

- Record JSON: https://awesomecua.com/resources/github-ruc-nlpir-webthinker/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/RUC-NLPIR/WebThinker/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/RUC-NLPIR/WebThinker/HEAD/README.md (retrieved 2026-11-04T13:12:34Z; SHA-256 874b79a750c9321977f7a887dcdfe1d8d3c84d286edf54690d21c1e08501f3da)
- https://raw.githubusercontent.com/RUC-NLPIR/WebThinker/HEAD/LICENSE (retrieved 2026-11-04T13:41:54Z; SHA-256 b101f949ba866c4de767be4b8563ef0bbd54d1b289c4b49c6edda3f2851c848a)

---

## Work2Skill

Collects human GUI demonstrations and inspects multimodal evidence to derive reusable agent workflow skills.

- Catalog URL: https://awesomecua.com/resources/github-china-qijizhifeng-work2skill/
- Original source: https://github.com/china-qijizhifeng/Work2Skill
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux
- Topics: recording, workflow, data-generation
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:china-qijizhifeng/work2skill

### Limitations

The README reports that evaluation integration and live cross-platform acceptance testing remain pending.

- Record JSON: https://awesomecua.com/resources/github-china-qijizhifeng-work2skill/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/china-qijizhifeng/Work2Skill/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/china-qijizhifeng/Work2Skill/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 40a5e9ad3a2169527a9330825bd6e07ac1669293e21c209ed41036987bbf0a8b)
- https://raw.githubusercontent.com/china-qijizhifeng/Work2Skill/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 70387bc43f567b2ed971c1a789719c8c3567b0d073407c38b5dc6af1eb78012a)

---

## ZeroGUI

Online RL framework for GUI agents in which VLMs generate the training tasks and judge success from trajectory screenshots, with OSWorld and AndroidLab checkpoints trained from UI-TARS-7B-DPO.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-zerogui/
- Original source: https://github.com/OpenGVLab/ZeroGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: reinforcement-learning, data-generation
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:opengvlab/zerogui

- Record JSON: https://awesomecua.com/resources/github-opengvlab-zerogui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 033d2de815e11c208862c5c5601b78d58668b79cadd37a750cad9edd4dacabed)
- https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## 19ska Computer-Use Automation

Uses an LLM to discover a UI workflow once and compiles the trajectory into a deterministic replay script.

- Catalog URL: https://awesomecua.com/resources/github-19ska-computer-use-automation/
- Original source: https://github.com/19ska/computer-use-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, workflow, efficiency, automation
- Evidence checked: 2026-11-04T17:55:23Z
- ID: github:19ska/computer-use-automation

- Record JSON: https://awesomecua.com/resources/github-19ska-computer-use-automation/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/19ska/computer-use-automation/main/README.md (retrieved 2026-11-04T17:55:23Z; SHA-256 6f2bdb3bd4f8b391a794a87dc9d65706b7d58e37e84ecd0146c8a3cecf6ac979)

---

## 1Claw Browser Bridge

Governed credential-injection and browser-control bridge where AI agents operate authenticated sessions without seeing raw secrets.

- Catalog URL: https://awesomecua.com/resources/github-1clawai-browser-bridge/
- Original source: https://github.com/1clawAI/browser-bridge
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:55:22Z
- ID: github:1clawai/browser-bridge

- Record JSON: https://awesomecua.com/resources/github-1clawai-browser-bridge/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/1clawAI/browser-bridge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/1clawAI/browser-bridge/main/README.md (retrieved 2026-11-04T17:55:22Z; SHA-256 30a1322ca6cac4afcf6d2ebe6de111ccc632e7e3a55b150dccbf8ccf2b1b7777)
- https://raw.githubusercontent.com/1clawAI/browser-bridge/HEAD/LICENSE (retrieved 2026-11-04T18:00:01Z; SHA-256 c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c)

---

## 404.directory

Pre-execution risk preflight service and SDK that checks third-party tools and domains before AI agents invoke them.

- Catalog URL: https://awesomecua.com/resources/github-mm-sheng-404-directory/
- Original source: https://github.com/MM-sheng/404-directory
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web
- Topics: safety-security, evaluation, tool-integration
- Evidence checked: 2026-11-04T17:20:47Z
- ID: github:mm-sheng/404-directory

- Record JSON: https://awesomecua.com/resources/github-mm-sheng-404-directory/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MM-sheng/404-directory/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MM-sheng/404-directory/main/README.md (retrieved 2026-11-04T17:20:47Z; SHA-256 854b59c83583de47661a87adb4ec77b72d545a78c87d58b39c74c3ad9fc88d91)
- https://raw.githubusercontent.com/MM-sheng/404-directory/HEAD/LICENSE (retrieved 2026-11-04T17:26:50Z; SHA-256 e9fe052cc04b46690d9bb0d9f88aed5814a578f6cbeeeedebbee8ddb9c2cc8ce)

---

## a11y-computer-use

Accessibility-first computer-use runtime that feeds pruned accessibility-tree snapshots to AI agents so they click semantic UI elements.

- Catalog URL: https://awesomecua.com/resources/github-perception-dynamics-inc-a11y-computer-use/
- Original source: https://github.com/Perception-Dynamics-Inc/a11y-computer-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: screen-understanding, efficiency, automation
- Evidence checked: 2026-11-04T16:30:15Z
- ID: github:perception-dynamics-inc/a11y-computer-use

- Record JSON: https://awesomecua.com/resources/github-perception-dynamics-inc-a11y-computer-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Perception-Dynamics-Inc/a11y-computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Perception-Dynamics-Inc/a11y-computer-use/HEAD/README.md (retrieved 2026-11-04T16:30:15Z; SHA-256 be901a86a997c7051321b801876e59171f9bdd4d659bc2662e009da3483babe3)
- https://raw.githubusercontent.com/Perception-Dynamics-Inc/a11y-computer-use/HEAD/LICENSE (retrieved 2026-11-04T16:34:53Z; SHA-256 c7022793b76f18c845472a3f24295a44356a483a67cc9204bede9519ee6b958c)

---

## A2R2 (Android Agent Reliability Runtime)

A2R2 is a black-box safety and reliability runtime for Android GUI agents that intercepts unsafe actions and detects execution loops.

- Catalog URL: https://awesomecua.com/resources/github-rty90-android-agent-reliability-runtime/
- Original source: https://github.com/rty90/Android-Agent-Reliability-Runtime
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, robustness, mobile-navigation, observability
- Evidence checked: 2026-11-04T14:20:07Z
- ID: github:rty90/android-agent-reliability-runtime

- Record JSON: https://awesomecua.com/resources/github-rty90-android-agent-reliability-runtime/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rty90/Android-Agent-Reliability-Runtime/HEAD/README.md (retrieved 2026-11-04T14:20:07Z; SHA-256 bdb525d0157d0089f7ee25f584f06041cec20e286794be4b3f3b7dbb9c8192fb)

---

## AClaw

Packaged local command center for running and monitoring personal OpenClaw computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-magnusdot-aclaw/
- Original source: https://github.com/MagnusDot/AClaw
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:32Z
- ID: github:magnusdot/aclaw

- Record JSON: https://awesomecua.com/resources/github-magnusdot-aclaw/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MagnusDot/AClaw/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MagnusDot/AClaw/main/README.md (retrieved 2026-11-04T18:11:32Z; SHA-256 51c29927a1afbf1f153b419661075ba22871dc9aadb5f0bc1a61052402f8a27b)
- https://raw.githubusercontent.com/MagnusDot/AClaw/HEAD/LICENSE (retrieved 2026-11-04T18:16:25Z; SHA-256 8e8e7318ff897dfb7aa5e3b3a46b7badeebfbba5e116197dccd4db55f468021e)

---

## action-receipt

Generates deterministic per-action DOM and network effect receipts for auditing browser-agent executions.

- Catalog URL: https://awesomecua.com/resources/github-jeremiahm37-action-receipt/
- Original source: https://github.com/JeremiahM37/action-receipt
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: observability, safety-security, state-tracking, web-navigation
- Evidence checked: 2026-11-04T18:11:34Z
- ID: github:jeremiahm37/action-receipt

- Record JSON: https://awesomecua.com/resources/github-jeremiahm37-action-receipt/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/JeremiahM37/action-receipt/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JeremiahM37/action-receipt/main/README.md (retrieved 2026-11-04T18:11:34Z; SHA-256 d9aebe73051c2c29ca523f1520ff31a4eac74736ed62e965ae1050e3d61459f2)
- https://raw.githubusercontent.com/JeremiahM37/action-receipt/HEAD/LICENSE (retrieved 2026-11-04T18:16:21Z; SHA-256 2867d75c0089f14c94428ba9391502f5b9d0bb6a872a7a74ed6045374674e0c1)

---

## Action-Type-Conditioned Grounding for GUI Agents

Research code for GUI grounding that predicts an action type and then conditions coordinate prediction on it. It compares six conditioning methods and includes training and evaluation scripts.

- Catalog URL: https://awesomecua.com/resources/github-aadcha-action-conditioned-gui-agent/
- Original source: https://github.com/aadcha/action-conditioned-gui-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, web
- Topics: grounding, action-prediction, evaluation
- Evidence checked: 2026-11-09T06:16:38Z
- ID: github:aadcha/action-conditioned-gui-agent

### Limitations

The repository includes data loaders, training code, evaluation code, run results and paper source. It uses Qwen2-VL-2B with LoRA and describes Modal training.

- Record JSON: https://awesomecua.com/resources/github-aadcha-action-conditioned-gui-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aadcha/action-conditioned-gui-agent/HEAD/README.md (retrieved 2026-11-09T06:16:38Z; SHA-256 12cbf0da8cbb341c6ca21422ddc85ab866adaeed127da4b84f7968319af9ee7c)

---

## ActionAnything

Model-agnostic runtime for evaluating, approving, recording, and replaying AI agent actions across desktop and web interfaces.

- Catalog URL: https://awesomecua.com/resources/github-xxwtiancai-action-anything/
- Original source: https://github.com/xxwtiancai/action-anything
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: safety-security, human-in-the-loop, recording, automation
- Evidence checked: 2026-11-04T16:51:59Z
- ID: github:xxwtiancai/action-anything

- Record JSON: https://awesomecua.com/resources/github-xxwtiancai-action-anything/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/xxwtiancai/action-anything/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xxwtiancai/action-anything/HEAD/README.md (retrieved 2026-11-04T16:51:59Z; SHA-256 d0ae597697f5cadbee4401a3ac92db68e312e0e5d64c1d15bd4d946d23ff820d)
- https://raw.githubusercontent.com/xxwtiancai/action-anything/HEAD/LICENSE (retrieved 2026-11-04T16:56:47Z; SHA-256 b35dbf95e5dd01f2b6b7b5d863a22ae5e0a6bbc53782a14fc8a2936b3261a83e)

---

## AdaGround

A training-free GUI grounding framework that adjusts screenshot zoom to target size and checks proposed clicks before accepting or revising them.

- Catalog URL: https://awesomecua.com/resources/github-bcwang-sjtu-adaground/
- Original source: https://github.com/bcwang-sjtu/AdaGround
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, training-free, self-reflection, robustness
- Evidence checked: 2026-11-09T06:16:33Z
- ID: github:bcwang-sjtu/adaground

### Limitations

The repository says code is released and gives installation and benchmark preparation steps. Its reported setup uses Qwen3-VL backbones and an NVIDIA GPU; the README shows an MIT license badge.

- Record JSON: https://awesomecua.com/resources/github-bcwang-sjtu-adaground/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/bcwang-sjtu/AdaGround/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bcwang-sjtu/AdaGround/HEAD/README.md (retrieved 2026-11-09T06:16:33Z; SHA-256 9c0a8372726584b7a8e98f2a3a99d5b4cbd78d261643ebafae3d05a3cbd620d1)
- https://raw.githubusercontent.com/bcwang-sjtu/AdaGround/HEAD/LICENSE (retrieved 2026-11-09T06:13:30Z; SHA-256 8f9dd95448008616073f38a842c0e94eadf59d52b2d73df9bd981dcb411c7d54)

---

## AdInject

AdInject implements black-box indirect prompt injection attacks delivered through web advertising banners on OSWorld and VisualWebArena.

- Catalog URL: https://awesomecua.com/resources/github-nicerwang-adinject/
- Original source: https://github.com/NicerWang/AdInject
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, web-navigation, evaluation
- Evidence checked: 2026-11-04T13:12:28Z
- ID: github:nicerwang/adinject

- Record JSON: https://awesomecua.com/resources/github-nicerwang-adinject/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/NicerWang/AdInject/HEAD/README.md (retrieved 2026-11-04T13:12:28Z; SHA-256 d558ffbedf48d19c228022c0ce4cdc85320a02bdf5a2bfce927a88b0326e0ae4)

---

## AdvAgent (AdvWeb)

Black-box adversarial prompt-injection red-teaming framework for training and evaluating controllable attacks against VLM web agents.

- Catalog URL: https://awesomecua.com/resources/github-ai-secure-advweb/
- Original source: https://github.com/AI-secure/AdvWeb
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, robustness, web-navigation
- Evidence checked: 2026-10-16T06:40:54Z
- ID: github:ai-secure/advweb

- Record JSON: https://awesomecua.com/resources/github-ai-secure-advweb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AI-secure/AdvWeb/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 019d45dd4c383f919f3ac2bf84c672500d63751a49de2dd2bac9c018ffc99881)

---

## Aegis-Agent (Privacy Firewall Browser Agent)

Privacy-first browser agent framework that blurs faces and redacts PII in screenshots before sending observations to cloud LLMs.

- Catalog URL: https://awesomecua.com/resources/github-lukan-lawslaf-aegis-agent/
- Original source: https://github.com/lukan-lawslaf/Aegis-Agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, screen-understanding, web-navigation, automation
- Evidence checked: 2026-11-04T18:11:41Z
- ID: github:lukan-lawslaf/aegis-agent

- Record JSON: https://awesomecua.com/resources/github-lukan-lawslaf-aegis-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lukan-lawslaf/Aegis-Agent/main/README.md (retrieved 2026-11-04T18:11:41Z; SHA-256 64c107971a5bdd0e0399457af4976893c55fe1e60b10d6afc41c0ca7e8d71668)

---

## Aeiva

Aeiva is a modular general-purpose AI agent framework adaptable across desktop, web, and scientific task environments.

- Catalog URL: https://awesomecua.com/resources/github-chatsci-aeiva/
- Original source: https://github.com/chatsci/Aeiva
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web
- Topics: planning, memory, tool-integration, workflow
- Evidence checked: 2026-11-04T15:03:36Z
- ID: github:chatsci/aeiva

- Record JSON: https://awesomecua.com/resources/github-chatsci-aeiva/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/chatsci/Aeiva/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chatsci/Aeiva/HEAD/README.md (retrieved 2026-11-04T15:03:36Z; SHA-256 7f47210967df1c85595efe1c0bb1afd8155b8036b54e4e3c3633f5ce9fe85f1a)
- https://raw.githubusercontent.com/chatsci/Aeiva/HEAD/LICENSE (retrieved 2026-11-04T15:22:51Z; SHA-256 e4de0b1f73977e02e18b27df2209421773de75c34c51cd9f3e0991f19f6a5495)

---

## AeonMind agenthands

Human-calibrated mouse trajectory and keyboard timing synthesis library for browser and desktop agents.

- Catalog URL: https://awesomecua.com/resources/github-aeonmindai-agenthands/
- Original source: https://github.com/aeonmindai/agenthands
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: grounding, action-prediction, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:15Z
- ID: github:aeonmindai/agenthands

- Record JSON: https://awesomecua.com/resources/github-aeonmindai-agenthands/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/aeonmindai/agenthands/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aeonmindai/agenthands/main/README.md (retrieved 2026-11-04T17:55:15Z; SHA-256 a0de7ac8203f26321f4b866d2d7155f490283b35d79af3891b5a9b11bb609602)
- https://raw.githubusercontent.com/aeonmindai/agenthands/HEAD/LICENSE (retrieved 2026-11-04T18:00:02Z; SHA-256 87e53963836b1568eabc6b732260a7fbf018faf71212dbbdc840e525e751a1d4)

---

## Agent Access

Universal access layer that routes websites, apps, and repeated workflows into agent-native CLIs with CDP and GUI fallback.

- Catalog URL: https://awesomecua.com/resources/github-r266-tech-agent-access/
- Original source: https://github.com/r266-tech/agent-access
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: tool-integration, workflow, efficiency, automation
- Evidence checked: 2026-11-04T16:30:10Z
- ID: github:r266-tech/agent-access

- Record JSON: https://awesomecua.com/resources/github-r266-tech-agent-access/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/r266-tech/agent-access/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/r266-tech/agent-access/HEAD/README.md (retrieved 2026-11-04T16:30:10Z; SHA-256 7de3c1238dd34abe3c4e45fc444f05154064ed714a1f90aa894569f3e6a8a421)
- https://raw.githubusercontent.com/r266-tech/agent-access/HEAD/LICENSE (retrieved 2026-11-04T16:34:48Z; SHA-256 3a891f9fce81469fbc7c16e6752af812c1a004dce42602ff548a664e3c61e6d8)

---

## Agent Desktop Harness (ADH)

Native Windows desktop computer-use and reusable RPA harness exposing CLI, MCP, Python, and C++ interfaces.

- Catalog URL: https://awesomecua.com/resources/github-xuyw1997-agent-desktop-harness/
- Original source: https://github.com/xuyw1997/agent-desktop-harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: automation, tool-integration, workflow, grounding
- Evidence checked: 2026-11-04T16:30:16Z
- ID: github:xuyw1997/agent-desktop-harness

- Record JSON: https://awesomecua.com/resources/github-xuyw1997-agent-desktop-harness/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xuyw1997/agent-desktop-harness/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xuyw1997/agent-desktop-harness/HEAD/README.md (retrieved 2026-11-04T16:30:16Z; SHA-256 34ba392269e69e81729059f20c63aad04156f041bf7b812bd2b38c99fe51cddf)
- https://raw.githubusercontent.com/xuyw1997/agent-desktop-harness/HEAD/LICENSE (retrieved 2026-11-04T16:34:54Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Agent Hands

Computer-use automation infrastructure for legacy financial software that compiles LLM-discovered UI flows into deterministic replays.

- Catalog URL: https://awesomecua.com/resources/github-ashishkosana-agent-hands/
- Original source: https://github.com/Ashishkosana/agent-hands
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, workflow, efficiency, automation
- Evidence checked: 2026-11-04T17:20:40Z
- ID: github:ashishkosana/agent-hands

- Record JSON: https://awesomecua.com/resources/github-ashishkosana-agent-hands/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Ashishkosana/agent-hands/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Ashishkosana/agent-hands/main/README.md (retrieved 2026-11-04T17:20:40Z; SHA-256 9dae1b19b4ee8e060704d7c8511c6d6aabd7573975029e19efb9a83658eaf410)
- https://raw.githubusercontent.com/Ashishkosana/agent-hands/HEAD/LICENSE (retrieved 2026-11-04T17:26:37Z; SHA-256 048bc1a05ab6542ffc9e2bea330ab3993de60ea4327b9f253465b68bfefb5f75)

---

## Agent Lumos

Agent Lumos provides unified training data and modular planning and grounding architectures for open-source language and web agents.

- Catalog URL: https://awesomecua.com/resources/github-allenai-lumos/
- Original source: https://github.com/allenai/lumos
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, grounding, imitation-learning, web-navigation
- Evidence checked: 2026-11-04T14:02:38Z
- ID: github:allenai/lumos

- Record JSON: https://awesomecua.com/resources/github-allenai-lumos/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/allenai/lumos/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/allenai/lumos/HEAD/README.md (retrieved 2026-11-04T14:02:38Z; SHA-256 cc9152f2cee82c544d4d8418938fae9af40346a055b676c1a92725ca8ca285a2)
- https://raw.githubusercontent.com/allenai/lumos/HEAD/LICENSE (retrieved 2026-11-04T14:07:25Z; SHA-256 cdd01f605006d2d229b7333d9a8ce83b44ae57549b9573023e807044e13d4afd)

---

## Agent Q

Agent Q combines Monte Carlo Tree Search, AI self-critique, and Direct Preference Optimization for autonomous web navigation.

- Catalog URL: https://awesomecua.com/resources/github-sentient-engineering-agent-q/
- Original source: https://github.com/sentient-engineering/agent-q
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, planning, web-navigation, self-reflection
- Evidence checked: 2026-11-04T13:12:35Z
- ID: github:sentient-engineering/agent-q

- Record JSON: https://awesomecua.com/resources/github-sentient-engineering-agent-q/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sentient-engineering/agent-q/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sentient-engineering/agent-q/HEAD/README.md (retrieved 2026-11-04T13:12:35Z; SHA-256 0525d6660dc51198b2e490b5d3ae57f5c2cf6af4c6f74fff44dc597861393f6a)
- https://raw.githubusercontent.com/sentient-engineering/agent-q/HEAD/LICENSE (retrieved 2026-11-04T13:22:49Z; SHA-256 6fbad300fdb56afc27dcca11f1cf54fc67e1ee7a30dc57be10363008c50322f3)

---

## Agent Skill Induction (ASI)

Official code for agent skill induction on WebArena: an LLM judge checks each trajectory, successful episodes become Python skill functions, and skills join the action space only after generated tests pass.

- Catalog URL: https://awesomecua.com/resources/github-zorazrw-agent-skill-induction/
- Original source: https://github.com/zorazrw/agent-skill-induction
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow, memory
- Evidence checked: 2026-10-19T07:15:07Z
- ID: github:zorazrw/agent-skill-induction

### Limitations

Research code by Zora Zhiruo Wang and coauthors. The agent (asi/agent.py) observes BrowserGym pages through the flattened accessibility tree by default, with HTML and screenshot inputs as options, and acts through BrowserGym's action set. run_online.py alternates solving WebArena tasks, judging the trajectory with the autoeval LLM evaluator, inducing website-specific skill functions (asi/induce/induce_actions.py) and testing them before they are added; the README also runs AWM and vanilla baselines from the same script. The repository vendors a copy of BrowserGym packages (browsergym/, Apache-2.0 per their pyproject files) and expects self-hosted WebArena sites. The root LICENSE is CC BY-SA 4.0. No code was run and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/github-zorazrw-agent-skill-induction/record.json

### License declarations

- code: CC-BY-SA-4.0 — https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/README.md (retrieved 2026-10-19T07:15:07Z; SHA-256 0fb99c9a06749bb8c1c85eff57308fc77c0e06193aaa3f19d5e65c093947b3f0)
- https://api.github.com/repos/zorazrw/agent-skill-induction/git/trees/377abe0623a37eaf7f03bdd26cb97bb5331acf47 (retrieved 2026-10-19T07:15:07Z; SHA-256 f8751b33563cab8d178c5cad95b9d151cca907e4474a4eb84a06bd3ed1d2bc99)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/agent.py (retrieved 2026-10-18T16:19:59Z; SHA-256 5433022b6e1d11c51f06c3465de737f46c3f92bc918863ead70e0ffb61322320)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/run_online.py (retrieved 2026-10-18T16:20:00Z; SHA-256 b5d85eed3c3c5d1601b9a7613ba8adf2ecd65bee1612811ecadf6d78e45e32cb)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/induce/induce_actions.py (retrieved 2026-10-18T16:20:00Z; SHA-256 de0d630c27178b651115cba52466b9f7155de03eb7535afc5ec053cfe4c01f64)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/autoeval/evaluate_trajectory.py (retrieved 2026-10-18T16:20:00Z; SHA-256 a68f4b730a140058782e75ff8eeb3001601d94f20ae3fd9d9e4ccb5a797374a7)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/browsergym/core/pyproject.toml (retrieved 2026-10-18T16:20:01Z; SHA-256 e7b0947791ad9e64aeef81111f89a3934b01afeae98dae307f422d418362211b)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/LICENSE (retrieved 2026-10-18T16:20:01Z; SHA-256 da89f9867822be4b8adb1e601d9e9226c195016c6508015eb7593e68ead0c98a)
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/LICENSE (retrieved 2026-10-19T07:15:16Z; SHA-256 da89f9867822be4b8adb1e601d9e9226c195016c6508015eb7593e68ead0c98a)

---

## agent-fleet

Orchestrates parallel Claude Code and computer-use sessions against a shared, dependency-aware task queue.

- Catalog URL: https://awesomecua.com/resources/github-mskazemi-agent-fleet/
- Original source: https://github.com/MSKazemi/agent-fleet
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, planning, automation
- Evidence checked: 2026-11-04T17:20:40Z
- ID: github:mskazemi/agent-fleet

- Record JSON: https://awesomecua.com/resources/github-mskazemi-agent-fleet/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MSKazemi/agent-fleet/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MSKazemi/agent-fleet/main/README.md (retrieved 2026-11-04T17:20:40Z; SHA-256 4cb13e717c66381f63e632ed17c2c9fa291051a9ae4e1cd564a91665d8f70120)
- https://raw.githubusercontent.com/MSKazemi/agent-fleet/HEAD/LICENSE (retrieved 2026-11-04T17:26:50Z; SHA-256 54c129d415bbb451279bee45ee7f3965b3fd2615452851cec56a2d4c9abb5ebe)

---

## Agent-R

Trajectory collection and revision utilities that use tree search and model-guided critique to train agents to recover from mistakes, including WebShop tasks.

- Catalog URL: https://awesomecua.com/resources/github-bytedance-seed-agent-r/
- Original source: https://github.com/ByteDance-Seed/Agent-R
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: self-reflection, data-generation, web-navigation
- Evidence checked: 2026-10-17T02:03:20Z
- ID: github:bytedance-seed/agent-r

### Limitations

The canonical repository is ByteDance-Seed/Agent-R and is archived but readable. MCTS collection, revision and evaluation scripts are released under Apache-2.0. It also supports non-GUI text environments; this entry covers its WebShop interaction component. No separate weight release was verified.

- Record JSON: https://awesomecua.com/resources/github-bytedance-seed-agent-r/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ByteDance-Seed/Agent-R/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ByteDance-Seed/Agent-R/HEAD/README.md (retrieved 2026-10-17T02:03:20Z; SHA-256 8471a0761a94b1af84099a80efb6ac53f17e34491a196e82ca068a5113c0b8be)
- https://api.github.com/repos/ByteDance-Seed/Agent-R (retrieved 2026-10-17T02:03:19Z; SHA-256 3fff7137bc4f39a3a757f3b820892fb330449044ef2721e9f9d7719d23ff2b98)
- https://api.github.com/repos/ByteDance-Seed/Agent-R/git/trees/main?recursive=1 (retrieved 2026-10-17T02:05:40Z; SHA-256 e3c70b04094e8e77e249065b2b500ac197fc6fafee6e3275d78289b3790bf7ed)
- https://raw.githubusercontent.com/ByteDance-Seed/Agent-R/HEAD/LICENSE (retrieved 2026-10-17T02:05:22Z; SHA-256 283ea6cc2997a1a70da0049e09adf9317bb60ca1b51279b65196b83a69e1996b)
- https://raw.githubusercontent.com/ByteDance-Seed/Agent-R/HEAD/LICENSE (retrieved 2026-10-17T02:05:22Z; SHA-256 283ea6cc2997a1a70da0049e09adf9317bb60ca1b51279b65196b83a69e1996b)
- https://api.github.com/repos/bytedance/Agent-R (retrieved 2026-10-17T18:05:46Z; SHA-256 3fff7137bc4f39a3a757f3b820892fb330449044ef2721e9f9d7719d23ff2b98)
- https://api.github.com/repos/ByteDance-Seed/Agent-R (retrieved 2026-10-17T18:05:46Z; SHA-256 3fff7137bc4f39a3a757f3b820892fb330449044ef2721e9f9d7719d23ff2b98)

---

## AgentDesk (Enterprise Digital Workforce Platform)

Enterprise digital workforce operations platform combining computer-use execution, reusable skills, and governance.

- Catalog URL: https://awesomecua.com/resources/github-huzjie-agentdesk/
- Original source: https://github.com/huzjie/agentdesk
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, tool-integration, observability, automation
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:huzjie/agentdesk

- Record JSON: https://awesomecua.com/resources/github-huzjie-agentdesk/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/huzjie/agentdesk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huzjie/agentdesk/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 65f0bc479a94260cb55f2bc854f406ee43b8d613864db38f19c4781ba72e212e)
- https://raw.githubusercontent.com/huzjie/agentdesk/HEAD/LICENSE (retrieved 2026-11-04T17:39:53Z; SHA-256 332b6b10ef6d87057135ce18e27a3a2d64054122052ab37281a365a589cbb69a)

---

## AgentDock

Zero-dependency Chrome DevTools Protocol runtime for AI agents to drive headless or headful Chromium directly.

- Catalog URL: https://awesomecua.com/resources/github-rakeshnirzari1-agentdock/
- Original source: https://github.com/rakeshnirzari1/agentdock
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, automation
- Evidence checked: 2026-11-04T18:11:35Z
- ID: github:rakeshnirzari1/agentdock

- Record JSON: https://awesomecua.com/resources/github-rakeshnirzari1-agentdock/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/rakeshnirzari1/agentdock/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rakeshnirzari1/agentdock/main/README.md (retrieved 2026-11-04T18:11:35Z; SHA-256 4cfa381c28d70f343ac3aa432ddc3f14746105d500f820ccec21c613fdfc3df7)
- https://raw.githubusercontent.com/rakeshnirzari1/agentdock/HEAD/LICENSE (retrieved 2026-11-04T18:16:32Z; SHA-256 6da31bf5b56513214181c374981c5610a9cfa2a5bef8c37c4e89731dc4ad1ae8)

---

## AgentGPT

AgentGPT is a browser-based platform for configuring and deploying autonomous goal-driven LLM agents that decompose tasks and browse the web.

- Catalog URL: https://awesomecua.com/resources/github-reworkd-agentgpt/
- Original source: https://github.com/reworkd/AgentGPT
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, workflow
- Evidence checked: 2026-11-04T13:12:33Z
- ID: github:reworkd/agentgpt

- Record JSON: https://awesomecua.com/resources/github-reworkd-agentgpt/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/reworkd/AgentGPT/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/reworkd/AgentGPT/HEAD/README.md (retrieved 2026-11-04T13:12:33Z; SHA-256 93e162f0fd70c55376ba1f597097f9e61d72a52a8da37d7ae90b1a03c6425ea1)
- https://raw.githubusercontent.com/reworkd/AgentGPT/HEAD/LICENSE (retrieved 2026-11-04T13:41:57Z; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)

---

## Agentic Browser

Agent-first Python browser runtime providing stable element references, compact observations, outcome verification, and an MCP server.

- Catalog URL: https://awesomecua.com/resources/github-applejuice093-agentic-browser/
- Original source: https://github.com/applejuice093/Agentic-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, screen-understanding, tool-integration
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:applejuice093/agentic-browser

- Record JSON: https://awesomecua.com/resources/github-applejuice093-agentic-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/applejuice093/Agentic-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/applejuice093/Agentic-browser/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 673a6faf55babddee0efb6aeaedfefd8bf7d045b2a5fb799473fd4b7fe54045d)
- https://raw.githubusercontent.com/applejuice093/Agentic-browser/HEAD/LICENSE (retrieved 2026-11-04T16:56:36Z; SHA-256 2e1271f7d7ae4c374987ff5be4fd800ad8efdd7fc5bcfed2a57b6ff6cdcfe95d)

---

## Agentic Reward Modeling (RewardAgent)

RewardAgent combines human-preference scores with verifiable factuality and instruction-following checks to judge agent trajectories.

- Catalog URL: https://awesomecua.com/resources/github-thu-keg-agentic-reward-modeling/
- Original source: https://github.com/THU-KEG/Agentic-Reward-Modeling
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: reward-models, evaluation, web-navigation
- Evidence checked: 2026-11-04T13:12:39Z
- ID: github:thu-keg/agentic-reward-modeling

- Record JSON: https://awesomecua.com/resources/github-thu-keg-agentic-reward-modeling/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THU-KEG/Agentic-Reward-Modeling/HEAD/README.md (retrieved 2026-11-04T13:12:39Z; SHA-256 1a106ca25a0ce2099e6dfa889470969d7ec4678bec35eba5c2cf707e4cb92aba)

---

## Agentic Shopping Autopilot

Open-source e-commerce execution layer enabling Claude Code and Codex agents to search, checkout, and pay with user-bounded guardrails.

- Catalog URL: https://awesomecua.com/resources/github-andriishramko-agentic-shopping-autopilot/
- Original source: https://github.com/AndriiShramko/agentic-shopping-autopilot
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow, safety-security, human-in-the-loop
- Evidence checked: 2026-11-04T18:11:35Z
- ID: github:andriishramko/agentic-shopping-autopilot

- Record JSON: https://awesomecua.com/resources/github-andriishramko-agentic-shopping-autopilot/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/AndriiShramko/agentic-shopping-autopilot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AndriiShramko/agentic-shopping-autopilot/main/README.md (retrieved 2026-11-04T18:11:35Z; SHA-256 4638da0618cd770c18a82b2abda341a9a0c3bacd60a3ad1e48f996e42fcdec80)
- https://raw.githubusercontent.com/AndriiShramko/agentic-shopping-autopilot/HEAD/LICENSE (retrieved 2026-11-04T18:16:14Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## AgentiTest

AgentiTest is a natural-language browser test automation framework built on Python pytest, Allure reporting, and LLM web agents.

- Catalog URL: https://awesomecua.com/resources/github-kweinmeister-agentitest/
- Original source: https://github.com/kweinmeister/agentitest
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, automation
- Evidence checked: 2026-11-04T15:03:33Z
- ID: github:kweinmeister/agentitest

- Record JSON: https://awesomecua.com/resources/github-kweinmeister-agentitest/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/kweinmeister/agentitest/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kweinmeister/agentitest/HEAD/README.md (retrieved 2026-11-04T15:03:33Z; SHA-256 b73e74d892c0749358ab33a78a2f9f17e749061670dac062f1cef7954722c1d8)
- https://raw.githubusercontent.com/kweinmeister/agentitest/HEAD/LICENSE (retrieved 2026-11-04T15:22:48Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## agentmemory

agentmemory provides persistent cross-session memory and MCP integration for coding and computer-use agents including Claude Code, Codex, and OpenClaw.

- Catalog URL: https://awesomecua.com/resources/github-rohitg00-agentmemory/
- Original source: https://github.com/rohitg00/agentmemory
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop
- Topics: memory, long-horizon, tool-integration
- Evidence checked: 2026-11-04T13:12:33Z
- ID: github:rohitg00/agentmemory

- Record JSON: https://awesomecua.com/resources/github-rohitg00-agentmemory/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/rohitg00/agentmemory/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rohitg00/agentmemory/HEAD/README.md (retrieved 2026-11-04T13:12:33Z; SHA-256 3497c08ba0a60f81fa6a6504ac8bca27022679f0f5b09a08033dad349d6911fa)
- https://raw.githubusercontent.com/rohitg00/agentmemory/HEAD/LICENSE (retrieved 2026-11-04T13:42:02Z; SHA-256 76c8d49ab42216a2533f603fbafa20a1bf71b56de136a401be52da034dcc012c)

---

## AgentProg

Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.

- Catalog URL: https://awesomecua.com/resources/github-mobilellm-agentprog/
- Original source: https://github.com/MobileLLM/AgentProg
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: long-horizon, memory, planning, state-tracking
- Evidence checked: 2026-10-18T04:27:13Z
- ID: github:mobilellm/agentprog

### Limitations

Public tree contains the agentprog package, CLI, program/context-management code and AndroidWorld evaluation integration. README announces AW-Extend; this record covers the framework. External model services and Android device/emulator setup are required. Apache-2.0 covers code, not external model weights, apps or VM images.

- Record JSON: https://awesomecua.com/resources/github-mobilellm-agentprog/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MobileLLM/AgentProg/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/MobileLLM/AgentProg/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/MobileLLM/AgentProg/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 becc4961d93f0170fab29120afa4b09b2999f2cd0e74b13ccb7f28cb9623761b)
- https://api.github.com/repos/MobileLLM/AgentProg (retrieved 2026-10-17T15:37:01Z; SHA-256 d14eecf7c041933cefecc03b62bbea45c1617a183fd8c4ec1334e22a644a7f67)
- https://api.github.com/repos/MobileLLM/AgentProg/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:22Z; SHA-256 dd1cf9cd0aed31af63d7046ffa98d1be2c36258706951173ad8c28a64fcf9f7a)
- https://raw.githubusercontent.com/MobileLLM/AgentProg/HEAD/LICENSE (retrieved 2026-10-18T04:35:19Z; SHA-256 751123fccb2fd04b5c08b8c712a68a8bc69f56391593711efbfa533eaebbdb10)

---

## AgentSeat

Lightweight Wayland scaffold isolating an AI agent to operate a single GUI application inside its own virtual seat.

- Catalog URL: https://awesomecua.com/resources/github-vimalinx-agentseat/
- Original source: https://github.com/vimalinx/AgentSeat
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: sandbox, screen-understanding, automation
- Evidence checked: 2026-11-04T17:55:20Z
- ID: github:vimalinx/agentseat

- Record JSON: https://awesomecua.com/resources/github-vimalinx-agentseat/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/vimalinx/AgentSeat/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vimalinx/AgentSeat/main/README.md (retrieved 2026-11-04T17:55:20Z; SHA-256 914e9866007a3461fb289b5eacec71f8c4e93d41a8c25ceb96c56141f41fd9d2)
- https://raw.githubusercontent.com/vimalinx/AgentSeat/HEAD/LICENSE (retrieved 2026-11-04T18:00:26Z; SHA-256 81eba024bd3cd94e97ca6638131501279f653f356cd2cf63ef352f635e88e68c)

---

## AgentStudio

Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.

- Catalog URL: https://awesomecua.com/resources/github-skyworkai-agent-studio/
- Original source: https://github.com/skyworkai/agent-studio
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: sandbox, evaluation, grounding, recording
- Evidence checked: 2026-10-18T10:59:56Z
- ID: github:skyworkai/agent-studio

- Record JSON: https://awesomecua.com/resources/github-skyworkai-agent-studio/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/skyworkai/agent-studio/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/skyworkai/agent-studio/HEAD/README.md (retrieved 2026-10-18T10:59:56Z; SHA-256 5653db27f736c0c77afb63f81ca051bf31f1e1f0579ac77cf00dca4ea751c159)
- https://raw.githubusercontent.com/skyworkai/agent-studio/HEAD/LICENSE (retrieved 2026-10-18T11:03:47Z; SHA-256 8486a10c4393cee1c25392769ddd3b2d6c242d6ec7928e1414efff7dfb2f07ef)

---

## AgentSynth task-generation pipeline

Generates synthetic computer-use tasks and records trajectories in OSWorld desktop environments and InSTA browser environments.

- Catalog URL: https://awesomecua.com/resources/github-sunblaze-ucb-agentsynth/
- Original source: https://github.com/sunblaze-ucb/AgentSynth
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: data-generation, long-horizon, automation
- Evidence checked: 2026-10-18T04:27:12Z
- ID: github:sunblaze-ucb/agentsynth

### Limitations

Released code includes task-generation and training-format conversion scripts. OSWorld/InSTA environments and model services require separate setup. Code and the separately published dataset have distinct license declarations.

- Record JSON: https://awesomecua.com/resources/github-sunblaze-ucb-agentsynth/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106)
- https://api.github.com/repos/sunblaze-ucb/AgentSynth (retrieved 2026-10-17T15:37:00Z; SHA-256 e08f08a99b8cb3a4bb857a9fac976b2820f9ad406d66675b0286e880dfeeceaa)
- https://api.github.com/repos/sunblaze-ucb/AgentSynth/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:20Z; SHA-256 b0998652a9b6b465444c2bbeef015bdbef50e83984a3bd15725f0e811645ca62)
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/LICENSE (retrieved 2026-10-18T04:35:19Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## AI-Agentic QA Framework

Zero-dependency CDP browser driver and hydration-reliability testing framework for agentic web QA.

- Catalog URL: https://awesomecua.com/resources/github-daud-khan-qa-ai-agentic-qa-framework/
- Original source: https://github.com/daud-khan-qa/ai-agentic-qa-framework
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, robustness, web-navigation
- Evidence checked: 2026-11-04T17:30:46Z
- ID: github:daud-khan-qa/ai-agentic-qa-framework

- Record JSON: https://awesomecua.com/resources/github-daud-khan-qa-ai-agentic-qa-framework/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/daud-khan-qa/ai-agentic-qa-framework/main/README.md (retrieved 2026-11-04T17:30:46Z; SHA-256 8432e07f16e3386441ed0f9e772a7265b2aa60f40568646eea7f6a1bbeb881fc)

---

## AI-Work

Human-in-the-loop Windows desktop automation runtime with MCP support, bounded file access, and step approval.

- Catalog URL: https://awesomecua.com/resources/github-peiwenzhang-git-ai-work/
- Original source: https://github.com/peiwenZHANG-git/AI-Work
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: human-in-the-loop, safety-security, tool-integration, automation
- Evidence checked: 2026-11-04T17:30:39Z
- ID: github:peiwenzhang-git/ai-work

- Record JSON: https://awesomecua.com/resources/github-peiwenzhang-git-ai-work/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/peiwenZHANG-git/AI-Work/main/README.md (retrieved 2026-11-04T17:30:39Z; SHA-256 6563da1c7e3b4e9cdcd15c556b9559d4ae1f00d8c7535a18c5cd4c31e9759845)

---

## aic-pod

Turns a physical or virtual machine into an LLM-callable execution node with sandboxed shell, file, browser, and desktop control.

- Catalog URL: https://awesomecua.com/resources/github-veypi-aic-pod/
- Original source: https://github.com/veypi/aic-pod
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, linux, windows, macos
- Topics: sandbox, tool-integration, automation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:veypi/aic-pod

- Record JSON: https://awesomecua.com/resources/github-veypi-aic-pod/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/veypi/aic-pod/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/veypi/aic-pod/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 ad481b16016e378ad5df0ce39a300c6f291281a04d615dbaa8e17c9acc032f05)
- https://raw.githubusercontent.com/veypi/aic-pod/HEAD/LICENSE (retrieved 2026-11-04T16:56:37Z; SHA-256 506e21c6f7883597f1d84e4dfb8d212c616c4931c53f81a7e99f817f817c5176)

---

## Ailoy

Ailoy is a multi-language AI agent SDK that provisions isolated microVM sandboxes for computer-use, CAD, and desktop automation agents.

- Catalog URL: https://awesomecua.com/resources/github-brekkylab-ailoy/
- Original source: https://github.com/brekkylab/ailoy
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: sandbox, tool-integration, automation
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:brekkylab/ailoy

- Record JSON: https://awesomecua.com/resources/github-brekkylab-ailoy/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/brekkylab/ailoy/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/brekkylab/ailoy/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 64c93dcca8ccade01a46657241920527d2385af973cea13d3dcd5e9238b34e10)
- https://raw.githubusercontent.com/brekkylab/ailoy/HEAD/LICENSE.md (retrieved 2026-11-04T14:23:50Z; SHA-256 d72496872426165c8ac3115beaf47900f7952802188570c20b7edc7b40fc21ae)

---

## Airi-PC Computer Mode Runtime

Local Computer Mode runtime and reproducible bootstrap for the Airi-PC desktop agent.

- Catalog URL: https://awesomecua.com/resources/github-arancione3000-airi-pc-bootstrap/
- Original source: https://github.com/arancione3000/airi-pc-bootstrap
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-04T17:30:46Z
- ID: github:arancione3000/airi-pc-bootstrap

- Record JSON: https://awesomecua.com/resources/github-arancione3000-airi-pc-bootstrap/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/arancione3000/airi-pc-bootstrap/main/README.md (retrieved 2026-11-04T17:30:46Z; SHA-256 78d044c00944def923afd4e0ace702e48e7fd709f986794995067a08d690d071)

---

## Alumnium

An AI-native end-to-end testing library and MCP that lets agents interact with applications through automation drivers and verify assertions.

- Catalog URL: https://awesomecua.com/resources/github-alumnium-hq-alumnium/
- Original source: https://github.com/alumnium-hq/alumnium
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: automation, tool-integration, workflow
- Evidence checked: 2026-11-06T16:36:33Z
- ID: github:alumnium-hq/alumnium

### Limitations

The README shows Java dependencies at version 0.24.0 and installation commands for Python and TypeScript. It works with Appium, Maestro, Playwright, and Selenium.

- Record JSON: https://awesomecua.com/resources/github-alumnium-hq-alumnium/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alumnium-hq/alumnium/286b211c33c6fec5399aca6b7b0fc6e6ed206090/README.md (retrieved 2026-11-06T16:36:33Z; SHA-256 200e675348aa332b3946a636249049532580146bb8f81afa71f46430fe770d31)

---

## Android-Skill-Agent

Android-Skill-Agent extracts demonstration-guided, parameterized operational skills with accessibility-tree verification for Android apps.

- Catalog URL: https://awesomecua.com/resources/github-xiru0834-eng-android-skill-agent/
- Original source: https://github.com/xiru0834-eng/Android-Skill-Agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning, memory, workflow
- Evidence checked: 2026-11-04T14:41:47Z
- ID: github:xiru0834-eng/android-skill-agent

- Record JSON: https://awesomecua.com/resources/github-xiru0834-eng-android-skill-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xiru0834-eng/Android-Skill-Agent/HEAD/README.md (retrieved 2026-11-04T14:41:47Z; SHA-256 cbcf65bde0f8af7b1713804d15da1205dc3dc460c4f8f004638d2bcd81037d7a)

---

## AndroTMem inference and evaluation code

A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.

- Catalog URL: https://awesomecua.com/resources/github-cvc2233-androtmem/
- Original source: https://github.com/CVC2233/AndroTMem
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: memory, long-horizon, evaluation
- Evidence checked: 2026-10-17T11:18:21Z
- ID: github:cvc2233/androtmem

### Limitations

The source tree releases inference backends and evaluation scripts under evaluation/. The separately hosted benchmark is gated=auto and its raw card returned 401. The README explicitly credits missing screenshots as AUTO_PASS/correct, so incomplete local image inventories can inflate scores. Its TCR is an offline anchor/dependency score.

- Record JSON: https://awesomecua.com/resources/github-cvc2233-androtmem/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/CVC2233/AndroTMem/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code license only; no data-license or gated-access permission is inferred.
  Sources: https://raw.githubusercontent.com/CVC2233/AndroTMem/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/CVC2233/AndroTMem/HEAD/README.md (retrieved 2026-10-17T11:18:21Z; SHA-256 6681ce1bd98c856fed4193e239e234a69eb2a74fa937e9c38db89f48db40f452)
- https://api.github.com/repos/CVC2233/AndroTMem (retrieved 2026-10-17T11:18:20Z; SHA-256 f2b7c762383746a56e62273f756ca7ed3223726535763a41fda3ac5e3467aa82)
- https://api.github.com/repos/CVC2233/AndroTMem/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:59Z; SHA-256 302c804dc65ebb3e8558651e0c7cd0a79c1caf29fc9fb11868d26fba36afdf48)
- https://raw.githubusercontent.com/CVC2233/AndroTMem/HEAD/LICENSE (retrieved 2026-10-17T11:23:00Z; SHA-256 6d572ccef64746baac78441c0b26488f525c70c2b7453f985bd4f19cbec00634)
- https://huggingface.co/api/datasets/CVC2233/AndroTMem-Bench (retrieved 2026-10-17T11:23:07Z; SHA-256 e82623b7dc889eb7bff45c33f15a47c8c5caac3de0a3c56a7a9975ca9b2d6694)

---

## anpl1623 AgentOS

Local-first open-source agent runtime for safely executing AI-driven tasks on a user's personal computer.

- Catalog URL: https://awesomecua.com/resources/github-anpl1623-agentos/
- Original source: https://github.com/anpl1623/AgentOS
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: safety-security, sandbox, automation, workflow
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:anpl1623/agentos

- Record JSON: https://awesomecua.com/resources/github-anpl1623-agentos/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/anpl1623/AgentOS/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/anpl1623/AgentOS/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 a6996e8a3e99651c9cd27b102292081d5b863100563f2b65f6700a73693336e4)
- https://raw.githubusercontent.com/anpl1623/AgentOS/HEAD/LICENSE (retrieved 2026-11-04T17:39:47Z; SHA-256 5e27693b17df8473c0390a293280284c7340778bcfb2d4de0384da945f85b710)

---

## AntyBrowser SDK

Official multi-language SDKs (TypeScript, Python, C#, Go, PHP, Ruby) for driving AntyBrowser anti-detect browser profiles.

- Catalog URL: https://awesomecua.com/resources/github-antybrowser-sdk/
- Original source: https://github.com/antybrowser/SDK
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T18:11:51Z
- ID: github:antybrowser/sdk

- Record JSON: https://awesomecua.com/resources/github-antybrowser-sdk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/antybrowser/SDK/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/antybrowser/SDK/main/README.md (retrieved 2026-11-04T18:11:51Z; SHA-256 248c6a9153747a7cb0bf1858aa4c937988baeb0183ad33ffdfa6130ca3fd3a0d)
- https://raw.githubusercontent.com/antybrowser/SDK/HEAD/LICENSE (retrieved 2026-11-04T18:16:15Z; SHA-256 b7709599564e1b574bd7705113c844e838afe5410b429b0ccb8aa866ea29ed84)

---

## anybridge

Captures a website's authenticated network calls from a live browser session and exposes them as callable tools for any AI agent.

- Catalog URL: https://awesomecua.com/resources/github-justvugg-anybridge/
- Original source: https://github.com/JustVugg/anybridge
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, efficiency, web-navigation, data-generation
- Evidence checked: 2026-11-04T18:11:33Z
- ID: github:justvugg/anybridge

- Record JSON: https://awesomecua.com/resources/github-justvugg-anybridge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/JustVugg/anybridge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JustVugg/anybridge/main/README.md (retrieved 2026-11-04T18:11:33Z; SHA-256 251cb8963229f86745b4cae6b873e4c28042b06d3ce7ea4ae41358e534eeffe6)
- https://raw.githubusercontent.com/JustVugg/anybridge/HEAD/LICENSE (retrieved 2026-11-04T18:16:22Z; SHA-256 7bd271607bd8cbd2f426f34bbe09618eefabd58f269dde235c40b66cac1129b7)

---

## AnyBrowser

Pluggable browser-automation and web-agent runtime supporting interchangeable LLM providers and browser engines.

- Catalog URL: https://awesomecua.com/resources/github-christopher-inegbedion-anybrowser/
- Original source: https://github.com/christopher-inegbedion/anybrowser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T17:55:26Z
- ID: github:christopher-inegbedion/anybrowser

- Record JSON: https://awesomecua.com/resources/github-christopher-inegbedion-anybrowser/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/christopher-inegbedion/anybrowser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/christopher-inegbedion/anybrowser/main/README.md (retrieved 2026-11-04T17:55:26Z; SHA-256 ba4beadee6495a1403ebeb56ba2f2584624ac69739b045a65d610d96a543725d)
- https://raw.githubusercontent.com/christopher-inegbedion/anybrowser/HEAD/LICENSE (retrieved 2026-11-04T18:00:04Z; SHA-256 9bf71536b7d4f2a95ded917e7e105dfeb09ec594d9bc3eeb7d840946b82236a9)

---

## AnyTool

AnyTool is a universal tool-use layer for AI agents supporting MCP, GUI, web, and shell tools with hierarchical retrieval and self-reflection.

- Catalog URL: https://awesomecua.com/resources/github-hkuds-anytool/
- Original source: https://github.com/HKUDS/AnyTool
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, web
- Topics: tool-integration, planning, efficiency
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:hkuds/anytool

- Record JSON: https://awesomecua.com/resources/github-hkuds-anytool/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HKUDS/AnyTool/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HKUDS/AnyTool/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 8afd5b27651664d5c88bd1c14f11c18991678d1559e9d8d87942fb0be8106316)
- https://raw.githubusercontent.com/HKUDS/AnyTool/HEAD/LICENSE (retrieved 2026-11-04T13:42:00Z; SHA-256 804ee173a7f604efd7d4932d94f1c7fdbac7f2f2770aa3007ecc7670ea76fd35)

---

## AOI (Agent-Computer Observation Interface) & DynaCU-Bench

AOI provides an adaptive video and audio perception layer for computer-use agents alongside the DynaCU-Bench dynamic GUI benchmark.

- Catalog URL: https://awesomecua.com/resources/github-19pine-ai-aoi/
- Original source: https://github.com/19PINE-AI/aoi
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: video, screen-understanding, evaluation, efficiency
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:19pine-ai/aoi

- Record JSON: https://awesomecua.com/resources/github-19pine-ai-aoi/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/19PINE-AI/aoi/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/19PINE-AI/aoi/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 45c542aec1500cdc3d8669e818b509e7750a7595e177b2e40e34d6171d421634)
- https://raw.githubusercontent.com/19PINE-AI/aoi/HEAD/LICENSE (retrieved 2026-11-04T14:07:31Z; SHA-256 2ae65f6fc4bc79ee6c2f7d2dd203932bee5b5ec6e13034feeb369a6271a5563f)

---

## aos (Agent Operating System CLI)

Unified CLI layer over host machines allowing AI agents to drive desktop apps and terminals without taking over user focus.

- Catalog URL: https://awesomecua.com/resources/github-muthuishere-aos/
- Original source: https://github.com/muthuishere/aos
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: automation, tool-integration, sandbox
- Evidence checked: 2026-11-04T17:55:20Z
- ID: github:muthuishere/aos

- Record JSON: https://awesomecua.com/resources/github-muthuishere-aos/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/muthuishere/aos/main/README.md (retrieved 2026-11-04T17:55:20Z; SHA-256 424c2a2e7388c44004ed41fadeb60d342dcf130ebcfd804c380e44a327534f9f)

---

## App Use

App Use is a Python framework that connects LLM agents to Android and iOS mobile applications via Appium and accessibility-tree inspection.

- Catalog URL: https://awesomecua.com/resources/github-erickjtorres-app-use/
- Original source: https://github.com/erickjtorres/app-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation, automation, grounding
- Evidence checked: 2026-11-04T13:12:13Z
- ID: github:erickjtorres/app-use

- Record JSON: https://awesomecua.com/resources/github-erickjtorres-app-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/erickjtorres/app-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/erickjtorres/app-use/HEAD/README.md (retrieved 2026-11-04T13:12:13Z; SHA-256 ed507b0d7011efab4230f05596842d2a5ac0beb53a9242933beb7f84ea0692ad)
- https://raw.githubusercontent.com/erickjtorres/app-use/HEAD/LICENSE (retrieved 2026-11-04T13:41:45Z; SHA-256 aa593f209b4fc9895869cb3ded0fbf69f332a702a30fe5ad9e9271367700fc37)

---

## Appwalk

AI-powered CLI that explores a web application in a browser and compiles the run into verified Playwright test suites.

- Catalog URL: https://awesomecua.com/resources/github-kubstack-appwalk/
- Original source: https://github.com/kubstack/appwalk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, evaluation, web-navigation, efficiency
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:kubstack/appwalk

- Record JSON: https://awesomecua.com/resources/github-kubstack-appwalk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/kubstack/appwalk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kubstack/appwalk/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 a250c3750f53bd4ab924bb5c7a9e731d0d03b6bd7e8283c8e7594987e8ed7dd0)
- https://raw.githubusercontent.com/kubstack/appwalk/HEAD/LICENSE (retrieved 2026-11-04T18:00:14Z; SHA-256 cf175ff74cf3099220a0c8710a4f62655002c0eb11b60260cae0151d472cfaa3)

---

## ARPO training framework

Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.

- Catalog URL: https://awesomecua.com/resources/github-jia-lab-research-arpo/
- Original source: https://github.com/JIA-Lab-research/ARPO
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: reinforcement-learning, long-horizon, automation
- Evidence checked: 2026-10-18T04:27:12Z
- ID: github:jia-lab-research/arpo

### Limitations

Official GitHub API resolves the former dvlab-research/ARPO URL to JIA-Lab-research/ARPO with the same numeric repository ID. Training/evaluation scripts are released; OSWorld environments and the separate model checkpoint require separate setup.

- Record JSON: https://awesomecua.com/resources/github-jia-lab-research-arpo/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 839b2de0e0c614fe8d2df4782d0f6a6e7d33f5c60d8020c9d4a01c61d533f39e)
- https://api.github.com/repos/JIA-Lab-research/ARPO (retrieved 2026-10-18T04:40:39Z; SHA-256 bb64c7fc1b5d88fc070e919516a51eefac4acb89e86773464cfa0b3de18f1898)
- https://api.github.com/repos/JIA-Lab-research/ARPO/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:23Z; SHA-256 b3ff7f4e350223827cae0fffd986ee672e0b4466349c262ed2dc9e63a8480aeb)
- https://api.github.com/repos/dvlab-research/ARPO (retrieved 2026-10-17T15:37:00Z; SHA-256 bb64c7fc1b5d88fc070e919516a51eefac4acb89e86773464cfa0b3de18f1898)
- https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/LICENSE (retrieved 2026-10-18T04:35:19Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://api.github.com/repos/dvlab-research/ARPO (retrieved 2026-10-17T15:37:00Z; SHA-256 bb64c7fc1b5d88fc070e919516a51eefac4acb89e86773464cfa0b3de18f1898)
- https://api.github.com/repos/JIA-Lab-research/ARPO (retrieved 2026-10-18T04:40:39Z; SHA-256 bb64c7fc1b5d88fc070e919516a51eefac4acb89e86773464cfa0b3de18f1898)

---

## Ask-before-Plan

Ask-before-Plan trains proactive language agents to clarify underspecified user instructions before executing multi-step tool plans.

- Catalog URL: https://awesomecua.com/resources/github-magicgh-ask-before-plan/
- Original source: https://github.com/magicgh/Ask-before-Plan
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: planning, human-in-the-loop, tool-integration
- Evidence checked: 2026-11-04T13:12:23Z
- ID: github:magicgh/ask-before-plan

- Record JSON: https://awesomecua.com/resources/github-magicgh-ask-before-plan/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/magicgh/Ask-before-Plan/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/magicgh/Ask-before-Plan/HEAD/README.md (retrieved 2026-11-04T13:12:23Z; SHA-256 c82c357b7a4cb1a3f05c4b61351ef636a592a4fc7ae508040267f38140cdc2eb)
- https://raw.githubusercontent.com/magicgh/Ask-before-Plan/HEAD/LICENSE (retrieved 2026-11-04T13:41:58Z; SHA-256 f271c479b19a620600d18fc2265224205bf71483b969672d3f6acd9bc552b3f5)

---

## AstronRPA

AstronRPA is an open-source enterprise desktop and browser RPA platform with visual workflow orchestration and MCP server integration.

- Catalog URL: https://awesomecua.com/resources/github-iflytek-astron-rpa/
- Original source: https://github.com/iflytek/astron-rpa
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, web
- Topics: automation, workflow, tool-integration
- Evidence checked: 2026-11-04T13:12:18Z
- ID: github:iflytek/astron-rpa

- Record JSON: https://awesomecua.com/resources/github-iflytek-astron-rpa/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/iflytek/astron-rpa/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/iflytek/astron-rpa/HEAD/README.md (retrieved 2026-11-04T13:12:18Z; SHA-256 8c06c2a3f751c19b69d1c3dab0f193d719767a076c5819357844bb9a2727a8c9)
- https://raw.githubusercontent.com/iflytek/astron-rpa/HEAD/LICENSE (retrieved 2026-11-04T13:41:41Z; SHA-256 a6cba85bc92e0cff7a450b1d873c0eaa2e9fc96bf472df0247a26bec77bf3ff9)

---

## Attest

Self-verifying web agent core where the model proposes candidate actions and the harness validates real DOM state transitions.

- Catalog URL: https://awesomecua.com/resources/github-cyrus580529-attest/
- Original source: https://github.com/Cyrus580529/Attest
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, self-reflection, web-navigation, robustness
- Evidence checked: 2026-11-04T16:30:15Z
- ID: github:cyrus580529/attest

- Record JSON: https://awesomecua.com/resources/github-cyrus580529-attest/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Cyrus580529/Attest/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Cyrus580529/Attest/HEAD/README.md (retrieved 2026-11-04T16:30:15Z; SHA-256 32fe4c69eb0efed7e34b75b088925f9f818d842eef2f943ab65b086a7436cc68)
- https://raw.githubusercontent.com/Cyrus580529/Attest/HEAD/LICENSE (retrieved 2026-11-04T16:34:53Z; SHA-256 f2d3fb98fe28e898d579a4391c045e1ea7f09c442cd107c63361c5b34eddf5b8)

---

## AURA (Agent-User Remote Automation)

Closed-loop screenshot-click-verify remote automation framework over MCP for desktop and mobile devices.

- Catalog URL: https://awesomecua.com/resources/github-lvusyy-aura/
- Original source: https://github.com/lvusyy/aura
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android, windows, macos, linux
- Topics: grounding, self-reflection, tool-integration, automation
- Evidence checked: 2026-11-04T16:51:45Z
- ID: github:lvusyy/aura

- Record JSON: https://awesomecua.com/resources/github-lvusyy-aura/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/lvusyy/aura/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lvusyy/aura/HEAD/README.md (retrieved 2026-11-04T16:51:45Z; SHA-256 23ddc933648bc681adb033a314f085fb8d59d652b96d17f3638c036a2be050ed)
- https://raw.githubusercontent.com/lvusyy/aura/HEAD/LICENSE (retrieved 2026-11-04T16:56:37Z; SHA-256 c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c)

---

## Auto WebMCP Chrome

Chrome extension that automatically converts standard HTML web forms into structured WebMCP tools for browser agents.

- Catalog URL: https://awesomecua.com/resources/github-pauloportella-auto-webmcp-chrome/
- Original source: https://github.com/pauloportella/auto-webmcp-chrome
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:05Z
- ID: github:pauloportella/auto-webmcp-chrome

- Record JSON: https://awesomecua.com/resources/github-pauloportella-auto-webmcp-chrome/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/pauloportella/auto-webmcp-chrome/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pauloportella/auto-webmcp-chrome/main/README.md (retrieved 2026-11-04T17:55:05Z; SHA-256 167ead2dc6ab920bdc38a08aaae8e1279d6db7e205288736853c81ceea20ab7b)
- https://raw.githubusercontent.com/pauloportella/auto-webmcp-chrome/HEAD/LICENSE (retrieved 2026-11-04T18:00:19Z; SHA-256 2b5aca0d22de74c2d0a37f5d3712821380240733e8ac5c8d44f100f4f6c039b6)

---

## AutoBot

AutoBot is a self-improving agent harness for ChatGPT and Codex on macOS featuring persistent on-disk memory and browser evaluation.

- Catalog URL: https://awesomecua.com/resources/github-demeyer1-autobot/
- Original source: https://github.com/demeyer1/Autobot
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: memory, self-reflection, web-navigation, automation
- Evidence checked: 2026-11-04T14:41:53Z
- ID: github:demeyer1/autobot

- Record JSON: https://awesomecua.com/resources/github-demeyer1-autobot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/demeyer1/Autobot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/demeyer1/Autobot/HEAD/README.md (retrieved 2026-11-04T14:41:53Z; SHA-256 b8ef64a5818135cc6b8812c6b644c01b6a1952913e6ffd0b321b565069020328)
- https://raw.githubusercontent.com/demeyer1/Autobot/HEAD/LICENSE (retrieved 2026-11-04T14:45:26Z; SHA-256 79333846b0c5970c3d128fb99bb1bd9b577b1ac4e2bad53a612b64e0aa055635)

---

## AutoCoA

AutoCoA internalizes Chain-of-Action generation into reasoning models via step-level SFT, reinforcement learning, and simulated tool world models.

- Catalog URL: https://awesomecua.com/resources/github-adam-bjtu-autocoa/
- Original source: https://github.com/ADaM-BJTU/AutoCoA
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: reinforcement-learning, tool-integration, world-models, planning
- Evidence checked: 2026-11-04T13:12:04Z
- ID: github:adam-bjtu/autocoa

- Record JSON: https://awesomecua.com/resources/github-adam-bjtu-autocoa/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ADaM-BJTU/AutoCoA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ADaM-BJTU/AutoCoA/HEAD/README.md (retrieved 2026-11-04T13:12:04Z; SHA-256 4eece09725b477ea7bdebf597043f90c9d88814a66792a771e62e95d9fd1694a)
- https://raw.githubusercontent.com/ADaM-BJTU/AutoCoA/HEAD/LICENSE (retrieved 2026-11-04T13:41:58Z; SHA-256 e0f09f84b749402f7aba9ce20b5546760d8efb698839957379049fb1f48443a7)

---

## autocomputer

Desktop GUI automation platform combining a Rust execution core, Python SDK, MCP server, and HTML5 monitoring dashboard.

- Catalog URL: https://awesomecua.com/resources/github-yygg693-autocomputer/
- Original source: https://github.com/yygg693/autocomputer
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: automation, tool-integration, observability
- Evidence checked: 2026-11-04T16:30:12Z
- ID: github:yygg693/autocomputer

- Record JSON: https://awesomecua.com/resources/github-yygg693-autocomputer/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/yygg693/autocomputer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yygg693/autocomputer/HEAD/README.md (retrieved 2026-11-04T16:30:12Z; SHA-256 4bf5df43a17db8a9077d10dcc18bce21c92c2d7876c853aa8cd2113404dc841e)
- https://raw.githubusercontent.com/yygg693/autocomputer/HEAD/LICENSE (retrieved 2026-11-04T16:34:49Z; SHA-256 738d60bfc1eb3c2686a23c687fddc50b552b81637fee53541fa1eed0fcc33d41)

---

## AutoCua

AutoCua is a multi-agent computer-use orchestration platform for automating end-to-end workflows across macOS, Windows, Linux, Android, and web.

- Catalog URL: https://awesomecua.com/resources/github-computeruseagent-autocua/
- Original source: https://github.com/ComputerUseAgent/AutoCua
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android, macos, windows, linux
- Topics: workflow, automation, grounding, tool-integration
- Evidence checked: 2026-11-04T15:03:42Z
- ID: github:computeruseagent/autocua

- Record JSON: https://awesomecua.com/resources/github-computeruseagent-autocua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ComputerUseAgent/AutoCua/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ComputerUseAgent/AutoCua/HEAD/README.md (retrieved 2026-11-04T15:03:42Z; SHA-256 c1f0239e288fae0c9c5ff9a2ff33d431ce780f687cf53592e238372d5b81d83a)
- https://raw.githubusercontent.com/ComputerUseAgent/AutoCua/HEAD/LICENSE (retrieved 2026-11-04T15:22:54Z; SHA-256 2c242c26a929f2c047dc163ff4cdeeb9f0a44d881e6c2462ecbff248486cc84a)

---

## AutoFiller Universal

Batch web-form automation framework with self-healing selectors that runs LLM-free at runtime.

- Catalog URL: https://awesomecua.com/resources/github-fedetrain-autofiller-universal/
- Original source: https://github.com/Fedetrain/autofiller-universal
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, efficiency, web-navigation, automation
- Evidence checked: 2026-11-04T17:30:38Z
- ID: github:fedetrain/autofiller-universal

- Record JSON: https://awesomecua.com/resources/github-fedetrain-autofiller-universal/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Fedetrain/autofiller-universal/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Fedetrain/autofiller-universal/main/README.md (retrieved 2026-11-04T17:30:38Z; SHA-256 517f436dd39a701babee2085a397b85b75a95d6c313d215d8fd13b7ee6e3b51e)
- https://raw.githubusercontent.com/Fedetrain/autofiller-universal/HEAD/LICENSE (retrieved 2026-11-04T17:39:51Z; SHA-256 c12e9c9cf266652b0cb596774843333bd6011fac1c06aeb9aa83feabaee37f4a)

---

## AutoGUI code

AutoGUI's functionality-annotation pipeline (collect, reject, annotate from accessibility-tree changes, verify, generate tasks), with Qwen-VL LoRA fine-tuning and lmms-eval-based grounding evaluation.

- Catalog URL: https://awesomecua.com/resources/github-zjulihongxin-autogui/
- Original source: https://github.com/ZJULiHongxin/AutoGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-10-19T07:02:32Z
- ID: github:zjulihongxin/autogui

### Limitations

Official AutoGUI code. autogui_anno/ is a self-contained reimplementation of the paper's web and mobile annotation pipeline: it gathers screenshots and accessibility trees, rejects unpredictable elements, has an OpenAI-compatible LLM describe each element's function from before/after accessibility-tree changes, verifies descriptions by re-grounding them, and composes grounding tasks at several image scales; web collection uses Playwright. finetune/ trains Qwen-VL-Chat with LoRA on the released AutoGUI training data, and the adapted lmms_eval package runs FuncPred, ScreenSpot, ScreenSpot-v2, RefExp, MOTIF and VisualWebBench grounding tasks for models the README lists, including Qwen-VL-Chat, Qwen2-VL, LLaVA, CogAgent, Ferret-UI, UGround and OS-Atlas. The README links the 702K training set on the Hub, a 2K FuncPred test split on Google Drive and an AutoGUI-Qwen checkpoint. The arXiv abstract points to autogui-project.github.io, the repository's homepage, which links this code; that page's own Paper link points to an unrelated arXiv ID. The README's clone command uses the former BraveGroup/AutoGUI address.

- Record JSON: https://awesomecua.com/resources/github-zjulihongxin-autogui/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/README.md (retrieved 2026-10-19T07:02:32Z; SHA-256 101401f2b5a9e5f1f00c6f231b66fddd4b3f3b259bd1af4c8190ae0c3d748bab)
- https://api.github.com/repos/ZJULiHongxin/AutoGUI/git/trees/0c28fd248ec66623cd7f7b00275e229f4bec9bf3?recursive=1 (retrieved 2026-10-19T07:02:34Z; SHA-256 a35f0735dbd065f2722f991589fa4e03da2bfb3a372a4ae1c3e148bf91bda8e9)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/autogui_anno/README.md (retrieved 2026-10-19T07:02:34Z; SHA-256 e3c2c92ee9714e19d30d193d4ea1640b410bbc9368985d63daace90e0e545b0d)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/LICENSE (retrieved 2026-10-19T07:02:35Z; SHA-256 b97829e906566e1b931ec4a5ea7c07a25f0c16bebdae1367c3a4a14cc0154208)
- https://arxiv.org/abs/2502.01977v2 (retrieved 2026-10-19T07:02:35Z; SHA-256 768ec5314cb79ad995c9c0a6ffbf3da4946ed49a1d13e17c99f358e4b4459de8)
- https://autogui-project.github.io/ (retrieved 2026-10-19T07:02:35Z; SHA-256 3cab9b946d36e8362dbb8e386c333ddce597fcb03fbd0c7389c1398d8d849d21)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/HEAD/LICENSE (retrieved 2026-10-19T07:03:30Z; SHA-256 b97829e906566e1b931ec4a5ea7c07a25f0c16bebdae1367c3a4a14cc0154208)
- https://api.github.com/repos/BraveGroup/AutoGUI (retrieved 2026-10-19T07:01:33Z; SHA-256 0cb04554d69ce35de9aa795902b5edcce383c86e015df497c47aba673b793a09)
- https://api.github.com/repos/ZJULiHongxin/AutoGUI (retrieved 2026-10-19T07:01:34Z; SHA-256 0cb04554d69ce35de9aa795902b5edcce383c86e015df497c47aba673b793a09)

---

## AutoManual

AutoManual enables LLM agents to construct and iteratively refine structured instruction manuals through online environmental interaction.

- Catalog URL: https://awesomecua.com/resources/github-minghchen-automanual/
- Original source: https://github.com/minghchen/automanual
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: memory, planning, self-reflection
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:minghchen/automanual

- Record JSON: https://awesomecua.com/resources/github-minghchen-automanual/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/minghchen/automanual/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 f894e8f069ab02250a20ded4d9df8dacd6cd66c7a31dd750f69d317f9b7600a0)

---

## Automify

Automify is a Node.js computer-use framework unifying browser, CLI, and native desktop workflow automation for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-aldovincenti-automify/
- Original source: https://github.com/aldovincenti/automify
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, macos, windows, linux
- Topics: automation, web-navigation, workflow, tool-integration
- Evidence checked: 2026-11-04T16:30:03Z
- ID: github:aldovincenti/automify

- Record JSON: https://awesomecua.com/resources/github-aldovincenti-automify/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/aldovincenti/automify/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aldovincenti/automify/HEAD/README.md (retrieved 2026-11-04T16:30:03Z; SHA-256 fb3c87faa6248ff9733df8fc4d28d5a98736dc7f62a657b11a15b52ae8c0a1a1)
- https://raw.githubusercontent.com/aldovincenti/automify/HEAD/LICENSE (retrieved 2026-11-04T16:34:30Z; SHA-256 ba091f4f792f7b835a1b7633fe4f57835eb99c00f4bb17d2d2fa4da63170b9a8)

---

## AUV

Rust toolkit, CLI and MCP server for scripting reusable GUI operations on macOS, Linux and Windows, with native input drivers, accessibility trees, OCR and traced, verifiable action results.

- Catalog URL: https://awesomecua.com/resources/github-moeru-ai-auv/
- Original source: https://github.com/moeru-ai/auv
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, windows
- Topics: automation, efficiency, screen-understanding, observability
- Evidence checked: 2026-10-20T08:06:29Z
- ID: github:moeru-ai/auv

### Limitations

The README describes AUV as tooling that agents call, with no agent or harness of its own: an agent calls the auv CLI or the MCP server, or writes reusable Rust or JavaScript/TypeScript operations against the versioned Protobuf/gRPC daemon API; a first-party Python SDK is listed as planned. The capability matrix lists native desktop drivers for macOS, Linux and Windows, with Android and iOS planned, and background pointer input on macOS only. Integrations under supported/ cover desktop apps such as Apple Music and games such as Balatro. evals/osworld only provisions an OSWorld Ubuntu desktop on Kubernetes; its README leaves task setup, evaluation and AUV pairing as separate work. The workspace version in Cargo.toml at the inspected commit is 0.0.35.

- Record JSON: https://awesomecua.com/resources/github-moeru-ai-auv/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/moeru-ai/auv/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/moeru-ai/auv/HEAD/README.md (retrieved 2026-10-20T08:06:29Z; SHA-256 6c7b3dd73e2ff75912be373e933151a9e9643c5b3ab057f36d6c2e5d9284a308)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/README.md (retrieved 2026-10-20T08:05:44Z; SHA-256 6c7b3dd73e2ff75912be373e933151a9e9643c5b3ab057f36d6c2e5d9284a308)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/Cargo.toml (retrieved 2026-10-20T08:05:45Z; SHA-256 ef446d78239d4bfd0500dfcfcb58313bb2e4810e451347c4acd519674bcc05df)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/crates/auv-cli/src/commands/mcp.rs (retrieved 2026-10-20T08:05:45Z; SHA-256 ef9377f010deebada3a77f64608ff316e10aed4b0065aa276e90b5ab3c52ff82)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/evals/osworld/README.md (retrieved 2026-10-20T08:05:45Z; SHA-256 4dab629cf654eff7abc8425829415eb1f2aa429ac29d6c95f89dd3785df0813c)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/LICENSE (retrieved 2026-10-20T08:05:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/moeru-ai/auv/HEAD/LICENSE (retrieved 2026-10-20T08:06:33Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## AWorld-RL

AWorld-RL collects training projects for agents, including V2P for visual GUI grounding, with codebases, datasets, and checkpoints.

- Catalog URL: https://awesomecua.com/resources/github-inclusionai-agenticlearning/
- Original source: https://github.com/inclusionAI/AgenticLearning
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, grounding, data-generation
- Evidence checked: 2026-11-09T05:05:04Z
- ID: github:inclusionai/agenticlearning

### Limitations

The repository groups V2P with projects for search and tool use. Its introduction says the collection provides codebases, datasets, and checkpoints.

- Record JSON: https://awesomecua.com/resources/github-inclusionai-agenticlearning/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/inclusionAI/AgenticLearning/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/inclusionAI/AgenticLearning/HEAD/README.md (retrieved 2026-11-09T05:05:04Z; SHA-256 25c67c393c60c1aedc81861c9a9b34863f3ff12359f789f13dde80ef7ac40df1)
- https://raw.githubusercontent.com/inclusionAI/AgenticLearning/HEAD/LICENSE (retrieved 2026-11-09T05:07:27Z; SHA-256 8078b04ccec247c0b0a4c8fc93ac7fe27c40b5081b57fc6f0c64fbf95761c7e8)

---

## AXON OS

Local-first, policy-governed action layer for Linux desktop automation with preview, approval, and rollback receipts.

- Catalog URL: https://awesomecua.com/resources/github-frezzaroukos-axon-os/
- Original source: https://github.com/Frezzaroukos/axon-os
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: safety-security, human-in-the-loop, recording, automation
- Evidence checked: 2026-11-04T17:20:40Z
- ID: github:frezzaroukos/axon-os

- Record JSON: https://awesomecua.com/resources/github-frezzaroukos-axon-os/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Frezzaroukos/axon-os/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Frezzaroukos/axon-os/main/README.md (retrieved 2026-11-04T17:20:40Z; SHA-256 875e8d03d7dbc6d6bdf819d45c227c2ce52b69622bc065b0a3163a9187b62aa5)
- https://raw.githubusercontent.com/Frezzaroukos/axon-os/HEAD/LICENSE (retrieved 2026-11-04T17:26:42Z; SHA-256 3b4919ce088136a315e0c2c5f9a4d7febb5665423f3753ca02b9dce3a77b6135)

---

## axstream

Streaming JSON-lines action language and compiler for macOS computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-milind-soni-axstream/
- Original source: https://github.com/milind-soni/axstream
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: efficiency, action-prediction, recording, automation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:milind-soni/axstream

- Record JSON: https://awesomecua.com/resources/github-milind-soni-axstream/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/milind-soni/axstream/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/milind-soni/axstream/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 22b094c9e6307c5830b57d92e110ea9827c598fafdeb30b6f564c9918aabbca8)
- https://raw.githubusercontent.com/milind-soni/axstream/HEAD/LICENSE (retrieved 2026-11-04T16:56:37Z; SHA-256 1c28bb4bff200ffcab39ff02ca5842fcb0be8fe2652a667441f2a379640eae25)

---

## BadAgents

BadAgents provides poisoned training datasets and evaluation scripts for query-, observation-, and thought-triggered backdoor attacks on agents.

- Catalog URL: https://awesomecua.com/resources/github-lancopku-agent-backdoor-attacks/
- Original source: https://github.com/lancopku/agent-backdoor-attacks
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: safety-security, web-navigation, tool-integration
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:lancopku/agent-backdoor-attacks

- Record JSON: https://awesomecua.com/resources/github-lancopku-agent-backdoor-attacks/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lancopku/agent-backdoor-attacks/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 903aa594e155de0a6e14a54769770575f41e96fa07cff698bfcf051790487a7d)

---

## bg-driver-rs

Rust background computer-use driver for macOS, Windows, and Linux.

- Catalog URL: https://awesomecua.com/resources/github-lvyuan1688-bg-driver-rs/
- Original source: https://github.com/lvyuan1688/bg-driver-rs
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: automation, sandbox, efficiency
- Evidence checked: 2026-11-04T16:52:00Z
- ID: github:lvyuan1688/bg-driver-rs

- Record JSON: https://awesomecua.com/resources/github-lvyuan1688-bg-driver-rs/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/lvyuan1688/bg-driver-rs/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lvyuan1688/bg-driver-rs/HEAD/README.md (retrieved 2026-11-04T16:52:00Z; SHA-256 b37678ea8d56ef07d500a8092d94a332885f967f47caace1692f9574f43b2b7b)
- https://raw.githubusercontent.com/lvyuan1688/bg-driver-rs/HEAD/LICENSE (retrieved 2026-11-04T16:56:47Z; SHA-256 da363d8c54e6940d2e08ff382c08024b8cc6467fe2611e69d92f16b8bc18a26f)

---

## bgivenb Typed UI Capabilities

Model-guided UI workflow discovery framework with signed human review and deterministic replay.

- Catalog URL: https://awesomecua.com/resources/github-bgivenb-computer-use-automation/
- Original source: https://github.com/bgivenb/computer-use-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, safety-security, workflow, automation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:bgivenb/computer-use-automation

- Record JSON: https://awesomecua.com/resources/github-bgivenb-computer-use-automation/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/bgivenb/computer-use-automation/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bgivenb/computer-use-automation/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 0ec687e1f9348eccdfb04a6586ffd6f11cc6723a061772bb433c9ac84ed6fe3f)
- https://raw.githubusercontent.com/bgivenb/computer-use-automation/HEAD/LICENSE (retrieved 2026-11-04T18:00:03Z; SHA-256 d9552c3b8b0a22f2a718d56874354158be323d5611b5f4bcb123cb4bb8f352a1)

---

## Bridge Studio (WebMCP Browser Studio)

Visible, human-governed browser workspace that converts live web workflows into reusable WebMCP tools.

- Catalog URL: https://awesomecua.com/resources/github-salilbhasinofficial-webmcp-browser-studio/
- Original source: https://github.com/SalilBhasinOfficial/webmcp-browser-studio
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, recording, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:37Z
- ID: github:salilbhasinofficial/webmcp-browser-studio

- Record JSON: https://awesomecua.com/resources/github-salilbhasinofficial-webmcp-browser-studio/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SalilBhasinOfficial/webmcp-browser-studio/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SalilBhasinOfficial/webmcp-browser-studio/main/README.md (retrieved 2026-11-04T18:11:37Z; SHA-256 948d6d197826f2e1d2c6eb492745953ea6037829ab878877ab2e38fb4a3b77f0)
- https://raw.githubusercontent.com/SalilBhasinOfficial/webmcp-browser-studio/HEAD/LICENSE (retrieved 2026-11-04T18:16:33Z; SHA-256 9df3fdea386f1b4ebef1d24156a0c6f422400e63ce6350223c6efab67f595e71)

---

## Brizo Use

Open browser-use runtime, local bridge, CLI, and AI harness adapter for driving live web sessions.

- Catalog URL: https://awesomecua.com/resources/github-frankfromfuture-brizo/
- Original source: https://github.com/Frankfromfuture/Brizo
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:48Z
- ID: github:frankfromfuture/brizo

- Record JSON: https://awesomecua.com/resources/github-frankfromfuture-brizo/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Frankfromfuture/Brizo/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Frankfromfuture/Brizo/main/README.md (retrieved 2026-11-04T18:11:48Z; SHA-256 cca302ff760e9689274448b6df73fbfcad188328c0f579f66b459182a2789fae)
- https://raw.githubusercontent.com/Frankfromfuture/Brizo/HEAD/LICENSE (retrieved 2026-11-04T18:16:19Z; SHA-256 57a38024a9dad084f6f5683e02b140b60e27890fc9f0158209f6620077da9a84)

---

## Browsentic

Agentic browser harness providing an AI side panel and interactive control orb inside Chrome, Edge, and Arc.

- Catalog URL: https://awesomecua.com/resources/github-imshaikot-browsentic/
- Original source: https://github.com/imshaikot/browsentic
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, automation
- Evidence checked: 2026-11-04T16:51:50Z
- ID: github:imshaikot/browsentic

- Record JSON: https://awesomecua.com/resources/github-imshaikot-browsentic/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/imshaikot/browsentic/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/imshaikot/browsentic/HEAD/README.md (retrieved 2026-11-04T16:51:50Z; SHA-256 7d73b04c1585293c8e186e4ef802b5a78ab0639927b56b180a4439c46c0c168a)
- https://raw.githubusercontent.com/imshaikot/browsentic/HEAD/LICENSE (retrieved 2026-11-04T16:56:43Z; SHA-256 1f9950d1327953e657a39d8119db934f867e82b915530415b6f464e673329cc4)

---

## Browser Agent Runtime Lite

Lightweight runtime for executing autonomous browser-agent perception and action loops.

- Catalog URL: https://awesomecua.com/resources/github-coolwkx-browser-agent-runtime-lite/
- Original source: https://github.com/coolwkx/browser-agent-runtime-lite
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, automation
- Evidence checked: 2026-11-04T17:20:51Z
- ID: github:coolwkx/browser-agent-runtime-lite

- Record JSON: https://awesomecua.com/resources/github-coolwkx-browser-agent-runtime-lite/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/coolwkx/browser-agent-runtime-lite/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/coolwkx/browser-agent-runtime-lite/main/README.md (retrieved 2026-11-04T17:20:51Z; SHA-256 b97a5f6178aa01ac7df6b440106deb8489f369e9405d0ab725abd5a7a87d2cdf)
- https://raw.githubusercontent.com/coolwkx/browser-agent-runtime-lite/HEAD/LICENSE (retrieved 2026-11-04T17:26:37Z; SHA-256 6b54d3290e2c5b79db3dea245e9f67fbcadf3d34ff26a1fffe3c47f72251f11e)

---

## Browser AI Agent Examples (Tiered Web Agent)

Goal-driven web agent architecture using a cheapest-tier-first cascade across XHR discovery, DOM actions, and vision.

- Catalog URL: https://awesomecua.com/resources/github-quantumproxies-browser-ai-agent-examples/
- Original source: https://github.com/quantumproxies/browser-ai-agent-examples
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: efficiency, web-navigation, data-generation
- Evidence checked: 2026-11-04T17:30:27Z
- ID: github:quantumproxies/browser-ai-agent-examples

- Record JSON: https://awesomecua.com/resources/github-quantumproxies-browser-ai-agent-examples/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/quantumproxies/browser-ai-agent-examples/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/quantumproxies/browser-ai-agent-examples/main/README.md (retrieved 2026-11-04T17:30:27Z; SHA-256 81e8fc6dacad9bdc315f7fbb4031880b2f801c0cce73faea06a9abd6d6e65850)
- https://raw.githubusercontent.com/quantumproxies/browser-ai-agent-examples/HEAD/LICENSE (retrieved 2026-11-04T17:40:00Z; SHA-256 7a1e4a30e4ac94857bbdf7c950a1cac876093b4428795ee2ac3b91ce08eb72c6)

---

## Browser Perception

Privacy-preserving browser perception framework that redacts sensitive PII from DOM trees and screenshots before LLM ingestion.

- Catalog URL: https://awesomecua.com/resources/github-rounakkm-browser-perception/
- Original source: https://github.com/rounakkm/browser-perception
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, screen-understanding, web-navigation
- Evidence checked: 2026-11-04T17:30:46Z
- ID: github:rounakkm/browser-perception

- Record JSON: https://awesomecua.com/resources/github-rounakkm-browser-perception/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rounakkm/browser-perception/main/README.md (retrieved 2026-11-04T17:30:46Z; SHA-256 6a9e87f8c461ee185371b842a77ae4399b6607d3377cfb6945735d698b5fa3d1)

---

## Browser Reliability Runtime

Multimodal browser reliability runtime for failure diagnosis, policy-aware recovery, and action verification.

- Catalog URL: https://awesomecua.com/resources/github-oosuhada-browser-reliability-runtime/
- Original source: https://github.com/oosuhada/browser-reliability-runtime
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, self-reflection, safety-security, web-navigation
- Evidence checked: 2026-11-04T17:30:41Z
- ID: github:oosuhada/browser-reliability-runtime

- Record JSON: https://awesomecua.com/resources/github-oosuhada-browser-reliability-runtime/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/oosuhada/browser-reliability-runtime/main/README.md (retrieved 2026-11-04T17:30:41Z; SHA-256 61e772d7b48781ff6ebaccc158c2c8c041214aa2919b11ec48c033cb19d7cdef)

---

## browser-action-receipt

Verification protocol that binds human approval to target DOM state, aborting clicks and emitting a receipt if the page mutates.

- Catalog URL: https://awesomecua.com/resources/github-scalar-atelier-browser-action-receipt/
- Original source: https://github.com/scalar-atelier/browser-action-receipt
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, state-tracking, web-navigation
- Evidence checked: 2026-11-04T17:20:45Z
- ID: github:scalar-atelier/browser-action-receipt

- Record JSON: https://awesomecua.com/resources/github-scalar-atelier-browser-action-receipt/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/scalar-atelier/browser-action-receipt/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scalar-atelier/browser-action-receipt/main/README.md (retrieved 2026-11-04T17:20:45Z; SHA-256 c39e726f8fcfbb0173ccebd851756b902d2f7b017eb8b5882b63a5c2f51c1658)
- https://raw.githubusercontent.com/scalar-atelier/browser-action-receipt/HEAD/LICENSE (retrieved 2026-11-04T17:26:53Z; SHA-256 614bf80566a8a0fa8f1a3c8423685377d262f220463a0cfc2a0b3822e1e43c40)

---

## browser-agent-kit

browser-agent-kit is a framework for building in-page AI agents that execute directly inside the live browser DOM context.

- Catalog URL: https://awesomecua.com/resources/github-nicolascine-browser-agent-kit/
- Original source: https://github.com/nicolascine/browser-agent-kit
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T15:45:46Z
- ID: github:nicolascine/browser-agent-kit

- Record JSON: https://awesomecua.com/resources/github-nicolascine-browser-agent-kit/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/nicolascine/browser-agent-kit/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nicolascine/browser-agent-kit/HEAD/README.md (retrieved 2026-11-04T15:45:46Z; SHA-256 b23e4645cde216c67f528e474d0f293c8075d6db66af0f7480b2d8dc8f57e8fc)
- https://raw.githubusercontent.com/nicolascine/browser-agent-kit/HEAD/LICENSE (retrieved 2026-11-04T15:57:34Z; SHA-256 d757403e0ffb910e64d40db8ca62a5a659df71ac374ce50964906d158f16d347)

---

## browser-for-ai (bfa)

AI-oriented browser automation runtime and CLI exposing compact DOM observations and deterministic web actions.

- Catalog URL: https://awesomecua.com/resources/github-icueth-browser-for-ai/
- Original source: https://github.com/icueth/browser-for-ai
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, tool-integration, automation
- Evidence checked: 2026-11-04T17:20:48Z
- ID: github:icueth/browser-for-ai

- Record JSON: https://awesomecua.com/resources/github-icueth-browser-for-ai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/icueth/browser-for-ai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/icueth/browser-for-ai/master/README.md (retrieved 2026-11-04T17:20:48Z; SHA-256 f7a3cdaa6e8335007006cf952047933e26b9b32164245a1ba324e691a69c0eab)
- https://raw.githubusercontent.com/icueth/browser-for-ai/HEAD/LICENSE (retrieved 2026-11-04T17:26:44Z; SHA-256 5dbfe2787a2e004d605bccc0708649a3f0b235019db7ce273cf37d5d0a3a5bb2)

---

## browser-harness-bidi

WebDriver BiDi-first browser automation harness connecting LLMs directly to live browsers with minimal dependencies.

- Catalog URL: https://awesomecua.com/resources/github-andrewdzzz-browser-harness-bidi/
- Original source: https://github.com/AndrewDzzz/browser-harness-bidi
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-11-04T16:10:38Z
- ID: github:andrewdzzz/browser-harness-bidi

- Record JSON: https://awesomecua.com/resources/github-andrewdzzz-browser-harness-bidi/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/AndrewDzzz/browser-harness-bidi/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AndrewDzzz/browser-harness-bidi/HEAD/README.md (retrieved 2026-11-04T16:10:38Z; SHA-256 61de85a55a550e94253108f73711ca063c2206951f7ff8cef860b53a9c9a13a9)
- https://raw.githubusercontent.com/AndrewDzzz/browser-harness-bidi/HEAD/LICENSE (retrieved 2026-11-04T16:13:50Z; SHA-256 1bc64a582e07c2d6556fb0ab5751c0c886f99bd550520a0b17f79df403165b06)

---

## Browser-Use Vision

Vision-grounding plugin for browser-use combining Set-of-Mark overlays, Florence-2 detection, and Vision-DOM alignment.

- Catalog URL: https://awesomecua.com/resources/github-raidriar7170-browser-use-vision/
- Original source: https://github.com/Raidriar7170/browser-use-vision
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, screen-understanding, web-navigation
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:raidriar7170/browser-use-vision

- Record JSON: https://awesomecua.com/resources/github-raidriar7170-browser-use-vision/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Raidriar7170/browser-use-vision/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Raidriar7170/browser-use-vision/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 2c5a27bfd8049a1f0d1692e3bda90e7cc9a4b6bcd99dfac916e533422af3ef82)
- https://raw.githubusercontent.com/Raidriar7170/browser-use-vision/HEAD/LICENSE (retrieved 2026-11-04T16:13:47Z; SHA-256 67b8d84ca137bde725782619a1a5ecf5c96964c4076a4658d61600764cf016f8)

---

## browser-use-rs

browser-use-rs is a lightweight pure-Rust library for driving Chromium browsers over the Chrome DevTools Protocol with LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-bb-fat-browser-use-rs/
- Original source: https://github.com/BB-fat/browser-use-rs
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-11-04T15:45:43Z
- ID: github:bb-fat/browser-use-rs

- Record JSON: https://awesomecua.com/resources/github-bb-fat-browser-use-rs/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/BB-fat/browser-use-rs/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/BB-fat/browser-use-rs/HEAD/README.md (retrieved 2026-11-04T15:45:43Z; SHA-256 08fa3f334bf68025cdb7234d1b6372f1cc5063935f97fa8c3d0b651f2cafa744)
- https://raw.githubusercontent.com/BB-fat/browser-use-rs/HEAD/LICENSE (retrieved 2026-11-04T15:57:31Z; SHA-256 c538182e01ffadefa9db4a69c2a30a466e39f04fa78a00952319504650b3095a)

---

## Browser4

Browser4 is an AI-native browser engine and coroutines runtime for high-concurrency web agents, workflow automation, and page extraction.

- Catalog URL: https://awesomecua.com/resources/github-platonai-browser4/
- Original source: https://github.com/platonai/Browser4
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, data-generation, efficiency
- Evidence checked: 2026-11-04T14:02:37Z
- ID: github:platonai/browser4

- Record JSON: https://awesomecua.com/resources/github-platonai-browser4/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/platonai/Browser4/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/platonai/Browser4/HEAD/README.md (retrieved 2026-11-04T14:02:37Z; SHA-256 0df5cc055942b49ee67ec29bbce58b0b450a2d2e3b557e943119d6b29fbf92cc)
- https://raw.githubusercontent.com/platonai/Browser4/HEAD/LICENSE (retrieved 2026-11-04T14:07:43Z; SHA-256 bb06f5791c0314bf5527083cc3b1a6e5ed1054eaf406f7006b9e6d6c24023e6f)

---

## Browserable

Self-hosted browser-agent platform with a JS SDK and REST API: a planner sets high-level steps, and a runner reads a screenshot and a numbered DOM chunk to pick Playwright actions in a local or hosted browser.

- Catalog URL: https://awesomecua.com/resources/github-browserable-browserable/
- Original source: https://github.com/browserable/browserable
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, planning
- Evidence checked: 2026-10-19T06:18:19Z
- ID: github:browserable/browserable

### Limitations

Inspected at commit a3af19a6 (27 August 2025). The README sets up a Docker Compose stack (UI server, tasks server, MongoDB, Redis and MinIO) in which the user supplies one LLM key (Gemini, OpenAI or Claude) and a Steel or Hyperbrowser key; tasks/services/browser.js also accepts Browserbase or the repository's own browser service, which launches Playwright Chromium. In tasks/agents/browserable.js the act-on-tab action calls simpleActionHelper, whose loop takes a plain page screenshot and the current chunk of DOM elements with XPaths, asks a planner for high-level steps (replanning after five steps), and asks a runner for a Playwright method, arguments and element number; the older DOM-only and vision act helpers are commented out at that call site. The repository also contains deep-research and generative agents. The README's 90.4% WebVoyager figure is publisher-reported. The README names Stagehand among the open-source projects it builds on. No code was run.

- Record JSON: https://awesomecua.com/resources/github-browserable-browserable/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browserable/browserable/HEAD/README.md (retrieved 2026-10-19T06:18:19Z; SHA-256 914573cc5d63cfea31b57c763cb0d299c056c731b26a2b2199f2fce2fbde8df4)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/agents/browserable.js (retrieved 2026-10-19T06:18:20Z; SHA-256 5288ad8b3bfdf2d3c259fa49bce339000ed353df7ae64fb5e4c41972c58b2764)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/services/browser.js (retrieved 2026-10-19T06:18:20Z; SHA-256 e715e291c4c411812edb857da0d5ce43cf9359cdce9defeff9c8bf2fe9ba2ff3)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/browser/browser-manager.js (retrieved 2026-10-19T06:18:21Z; SHA-256 cf46dd448cc0bb8ae779bf97944a2646711715dff201698196ee0466ca649437)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/ui/LICENSE (retrieved 2026-10-19T06:18:21Z; SHA-256 4ec10a44cdbffaa7f300c15fcfd8bc1577596f109e595318f6fc5ffad1f98219)
- https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE (retrieved 2026-10-19T06:19:15Z; SHA-256 3fe6213874fe127c2b42e45d1bfc1d4c2611482077cf48c1f5b180293472109f)

---

## browserkit

browserkit is a TypeScript framework for building site-specific MCP servers that operate over local, authenticated browser sessions.

- Catalog URL: https://awesomecua.com/resources/github-browserkit-dev-browserkit/
- Original source: https://github.com/browserkit-dev/browserkit
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T15:45:53Z
- ID: github:browserkit-dev/browserkit

- Record JSON: https://awesomecua.com/resources/github-browserkit-dev-browserkit/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browserkit-dev/browserkit/HEAD/README.md (retrieved 2026-11-04T15:45:53Z; SHA-256 de97376de55343fad14098936a52084c60f39683d97ea8dea49c393635afb6c9)

---

## BrowserMesh

Multi-agent browser MCP runtime in Rust managing isolated, persistent, parallel Playwright sessions.

- Catalog URL: https://awesomecua.com/resources/github-scrolldynasty-browsermesh/
- Original source: https://github.com/scrollDynasty/BrowserMesh
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, sandbox, workflow
- Evidence checked: 2026-11-04T16:51:59Z
- ID: github:scrolldynasty/browsermesh

- Record JSON: https://awesomecua.com/resources/github-scrolldynasty-browsermesh/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/scrollDynasty/BrowserMesh/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scrollDynasty/BrowserMesh/HEAD/README.md (retrieved 2026-11-04T16:51:59Z; SHA-256 7835f89334f40e16a5f12bd84e41afb69f22667cb1d5409cc1a801c4030aa4de)
- https://raw.githubusercontent.com/scrollDynasty/BrowserMesh/HEAD/LICENSE (retrieved 2026-11-04T16:56:47Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## BrowserRig

Open-source local driver enabling trusted AI agents to control an existing signed-in Chromium browser.

- Catalog URL: https://awesomecua.com/resources/github-castor6-browserrig/
- Original source: https://github.com/Castor6/BrowserRig
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, safety-security, automation
- Evidence checked: 2026-11-04T17:30:27Z
- ID: github:castor6/browserrig

- Record JSON: https://awesomecua.com/resources/github-castor6-browserrig/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Castor6/BrowserRig/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Castor6/BrowserRig/main/README.md (retrieved 2026-11-04T17:30:27Z; SHA-256 7e70cd4b7ad654ecea8aa537e1b742ffd388af05c0373ed409739e786b2df18c)
- https://raw.githubusercontent.com/Castor6/BrowserRig/HEAD/LICENSE (retrieved 2026-11-04T17:39:49Z; SHA-256 b1fe69afe2f6fe0884efc8936dab69bbdf3a319b3828a965ee1304fbd6a60021)

---

## BrowserTunnel

Streams and mirrors a live Chromium tab into a web page over a single WebSocket for remote agent observation and takeover.

- Catalog URL: https://awesomecua.com/resources/github-mathisarends-browsertunnel/
- Original source: https://github.com/mathisarends/browsertunnel
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: sandbox, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:30:35Z
- ID: github:mathisarends/browsertunnel

- Record JSON: https://awesomecua.com/resources/github-mathisarends-browsertunnel/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mathisarends/browsertunnel/main/README.md (retrieved 2026-11-04T17:30:35Z; SHA-256 210494c6804ddd94e5541d8640241920de791ab0897d1c828d4d62a48d993892)

---

## browxai

browxai provides unified MCP-native control over Chromium, Firefox, and native desktop applications for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-kalebteccom-browxai/
- Original source: https://github.com/kalebteccom/browxai
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T16:10:35Z
- ID: github:kalebteccom/browxai

- Record JSON: https://awesomecua.com/resources/github-kalebteccom-browxai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/kalebteccom/browxai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kalebteccom/browxai/HEAD/README.md (retrieved 2026-11-04T16:10:35Z; SHA-256 248d75dd4d79ee0d4bbc111b659fedb106758eec61f1d2fb72ae910762609223)
- https://raw.githubusercontent.com/kalebteccom/browxai/HEAD/LICENSE (retrieved 2026-11-04T16:13:44Z; SHA-256 a27c651a83f48302867105a3dd9502e3ce4aef49afdc029c7f1dfb931a5ce310)

---

## BRYES (Brain-Eyes)

BRYES decouples a high-level reasoning planner ('Brain') from swappable visual perception and grounding backends ('Eyes') for computer use.

- Catalog URL: https://awesomecua.com/resources/github-alvseek-bryes/
- Original source: https://github.com/alvseek/BRYES
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: planning, grounding, efficiency, screen-understanding
- Evidence checked: 2026-11-04T15:03:39Z
- ID: github:alvseek/bryes

- Record JSON: https://awesomecua.com/resources/github-alvseek-bryes/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/alvseek/BRYES/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alvseek/BRYES/HEAD/README.md (retrieved 2026-11-04T15:03:39Z; SHA-256 d181df6daf6467607aee3cb196dc2805d5164e5fa26150406c09afb8b97df909)
- https://raw.githubusercontent.com/alvseek/BRYES/HEAD/LICENSE (retrieved 2026-11-04T15:22:53Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## bytehunt br (Agent Browser CLI)

Agent-oriented browser CLI powered by Bun WebView with terminal Kitty graphics rendering.

- Catalog URL: https://awesomecua.com/resources/github-bytehunt-br/
- Original source: https://github.com/bytehunt/br
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, web
- Topics: web-navigation, efficiency, screen-understanding
- Evidence checked: 2026-11-04T17:30:45Z
- ID: github:bytehunt/br

- Record JSON: https://awesomecua.com/resources/github-bytehunt-br/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/bytehunt/br/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bytehunt/br/main/README.md (retrieved 2026-11-04T17:30:45Z; SHA-256 000cfd6074e62d4a38fd7ce93ecf58245df04c653d90c70fd791e206dea572af)
- https://raw.githubusercontent.com/bytehunt/br/HEAD/LICENSE (retrieved 2026-11-04T17:39:48Z; SHA-256 273d6887a200cd9dd307d987f69a0d63899e96d5bde0f8589067b7cf7c123fee)

---

## Cactus

Cactus is a cross-platform on-device LLM and VLM inference framework for mobile and edge AI agents.

- Catalog URL: https://awesomecua.com/resources/github-cactus-compute-cactus/
- Original source: https://github.com/cactus-compute/cactus
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, android, ios, desktop, macos, linux
- Topics: efficiency, tool-integration
- Evidence checked: 2026-11-04T13:12:09Z
- ID: github:cactus-compute/cactus

- Record JSON: https://awesomecua.com/resources/github-cactus-compute-cactus/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cactus-compute/cactus/HEAD/README.md (retrieved 2026-11-04T13:12:09Z; SHA-256 c67f736474fd2924426d6b49b3841aeeebf10b18c533beb395eadd3e8bf1ec96)

---

## Camel AI (Visual QA Agent)

Screen-driven QA agent that tests web and desktop applications through their rendered UI and hands off edge cases to humans.

- Catalog URL: https://awesomecua.com/resources/github-dilawarshafiq-camel-ai/
- Original source: https://github.com/DilawarShafiq/camel-ai
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, screen-understanding, automation, human-in-the-loop
- Evidence checked: 2026-11-04T16:51:49Z
- ID: github:dilawarshafiq/camel-ai

- Record JSON: https://awesomecua.com/resources/github-dilawarshafiq-camel-ai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/DilawarShafiq/camel-ai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DilawarShafiq/camel-ai/HEAD/README.md (retrieved 2026-11-04T16:51:49Z; SHA-256 214a5669d5d32a400d848c336e63726747187ee437e30696a51b163c002c5c53)
- https://raw.githubusercontent.com/DilawarShafiq/camel-ai/HEAD/LICENSE (retrieved 2026-11-04T16:56:41Z; SHA-256 c760751cc10689921566399c5ad464f751681c15d9ce34cfe5ea2c5740fdfc6b)

---

## CanpGrid

CanpGrid provides an adaptive recursive image grid overlay for progressive coarse-to-fine visual localization by multimodal agents.

- Catalog URL: https://awesomecua.com/resources/github-yeqi99-canpgrid/
- Original source: https://github.com/Yeqi99/CanpGrid
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, training-free
- Evidence checked: 2026-11-04T14:20:08Z
- ID: github:yeqi99/canpgrid

- Record JSON: https://awesomecua.com/resources/github-yeqi99-canpgrid/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Yeqi99/CanpGrid/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Yeqi99/CanpGrid/HEAD/README.md (retrieved 2026-11-04T14:20:08Z; SHA-256 ce94d92fae2436de15bedc5e98f25f0e5147b8b8be7845d769f9a9c1a5d6afe3)
- https://raw.githubusercontent.com/Yeqi99/CanpGrid/HEAD/LICENSE (retrieved 2026-11-04T14:23:54Z; SHA-256 1f4c7950472a498c09bfce3070b86d2bbb01ca0a323d727693b18ac6f32cd7b2)

---

## case-sdk

Dual-mode macOS GUI automation SDK supporting structured JSON procedures, local/remote WebSocket runtimes, and MCP integration.

- Catalog URL: https://awesomecua.com/resources/github-case-computers-case-sdk/
- Original source: https://github.com/case-computers/case-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, workflow, tool-integration
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:case-computers/case-sdk

- Record JSON: https://awesomecua.com/resources/github-case-computers-case-sdk/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/case-computers/case-sdk/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 aea597a95e0c8fa192bddcd713fc241ad034d5ff7a0d4a68402486d9022ce5cb)

---

## CEL OSS (Computer Experience Layer)

Computer Experience Layer (CEL) provides structured macOS perception contracts and an MCP server for native computer use.

- Catalog URL: https://awesomecua.com/resources/github-dimpagk92-cellar/
- Original source: https://github.com/dimpagk92/cellar
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, tool-integration, safety-security
- Evidence checked: 2026-11-04T16:10:30Z
- ID: github:dimpagk92/cellar

- Record JSON: https://awesomecua.com/resources/github-dimpagk92-cellar/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/dimpagk92/cellar/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dimpagk92/cellar/HEAD/README.md (retrieved 2026-11-04T16:10:30Z; SHA-256 e0fe7d6ef934ff695cf7f930112ff6ec5416aa2528327e67010dd78c4265da56)
- https://raw.githubusercontent.com/dimpagk92/cellar/HEAD/LICENSE (retrieved 2026-11-04T16:13:39Z; SHA-256 910afe08243f7097beb09ef85bc869915e6241af6bf58d36fa9f351ad7435f25)

---

## Celestea Harness Studio

Self-hosted AI agent workbench combining a web UI, TypeScript backend, sandboxed tool execution, and browser control.

- Catalog URL: https://awesomecua.com/resources/github-mcd0luo-celestea-harness-studio/
- Original source: https://github.com/Mcd0LUO/Celestea-Harness-Studio
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: sandbox, tool-integration, workflow, ui-design
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:mcd0luo/celestea-harness-studio

- Record JSON: https://awesomecua.com/resources/github-mcd0luo-celestea-harness-studio/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Mcd0LUO/Celestea-Harness-Studio/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Mcd0LUO/Celestea-Harness-Studio/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 368aa8f3f76e8e5af9953474aa90e5fb70539d513c20ef35741829ca7f172dcb)
- https://raw.githubusercontent.com/Mcd0LUO/Celestea-Harness-Studio/HEAD/LICENSE (retrieved 2026-11-04T18:16:25Z; SHA-256 60396000739c648aa35513aaec9a1e6602bfcd96aedd0f7265de1229136be1e2)

---

## cellar (Context Execution Layer)

cellar implements the Context Execution Layer (CEL), a structured context and action execution protocol for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-dilipod-cellar/
- Original source: https://github.com/Dilipod/cellar
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, screen-understanding, automation
- Evidence checked: 2026-11-04T15:45:53Z
- ID: github:dilipod/cellar

- Record JSON: https://awesomecua.com/resources/github-dilipod-cellar/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Dilipod/cellar/HEAD/README.md (retrieved 2026-11-04T15:45:53Z; SHA-256 dd8e5eefaa7ca102fee0a2b479296baa79aa20ca642914c732e0aff1062cb2f7)

---

## CGL (Continual GUI Learning)

CGL advances continual GUI agent learning across evolving domains via reinforcement fine-tuning without catastrophic forgetting.

- Catalog URL: https://awesomecua.com/resources/github-skounputer-cgl/
- Original source: https://github.com/skounputer/CGL
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, desktop, web
- Topics: reinforcement-learning, grounding, robustness
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:skounputer/cgl

- Record JSON: https://awesomecua.com/resources/github-skounputer-cgl/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/skounputer/CGL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/skounputer/CGL/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 ae336a6b00bc0045113fc3c98faa8021d3e2605c0639be076a9cd4aab182750d)
- https://raw.githubusercontent.com/skounputer/CGL/HEAD/LICENSE (retrieved 2026-11-04T14:07:39Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## ChangeShield

Self-repairing browser automation prototype that detects and adapts to third-party UI selector drift.

- Catalog URL: https://awesomecua.com/resources/github-kxvya18-chnage-shield/
- Original source: https://github.com/Kxvya18/chnage-shield
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, self-reflection, web-navigation, automation
- Evidence checked: 2026-11-04T17:20:52Z
- ID: github:kxvya18/chnage-shield

- Record JSON: https://awesomecua.com/resources/github-kxvya18-chnage-shield/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Kxvya18/chnage-shield/main/README.md (retrieved 2026-11-04T17:20:52Z; SHA-256 c038203540224cdf040dc7eca03a006dbd0ef07bcf8ba49e52029451ae245e07)

---

## Charterion

Multi-agent engineering control plane orchestrating ChatGPT Web sessions through browser automation.

- Catalog URL: https://awesomecua.com/resources/github-xalzeroph-charterion/
- Original source: https://github.com/Xalzeroph/Charterion
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, planning, web-navigation, tool-integration
- Evidence checked: 2026-11-04T17:55:13Z
- ID: github:xalzeroph/charterion

- Record JSON: https://awesomecua.com/resources/github-xalzeroph-charterion/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Xalzeroph/Charterion/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Xalzeroph/Charterion/main/README.md (retrieved 2026-11-04T17:55:13Z; SHA-256 1adffbd0d1d895d68e304f0b9f3431eb2174713fa3ee57f99b9a4264b9a0422a)
- https://raw.githubusercontent.com/Xalzeroph/Charterion/HEAD/LICENSE (retrieved 2026-11-04T18:00:27Z; SHA-256 0d542e0c8804e39aa7f37eb00da5a762149dc682d7829451287e11b938e94594)

---

## CHOP

Mobile automation framework that uses reusable basis subtasks to constrain and refine planning between user goals and executable actions.

- Catalog URL: https://awesomecua.com/resources/github-yuqi-zhou-chop/
- Original source: https://github.com/Yuqi-Zhou/CHOP
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, harmonyos
- Topics: mobile-navigation, planning, workflow
- Evidence checked: 2026-10-16T13:14:29Z
- ID: github:yuqi-zhou/chop

### Limitations

The README says the complete CHOP-ZH dataset remains unreleased. Android and HarmonyOS compatibility is publisher-documented.

- Record JSON: https://awesomecua.com/resources/github-yuqi-zhou-chop/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Yuqi-Zhou/CHOP/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Yuqi-Zhou/CHOP/HEAD/README.md (retrieved 2026-10-16T13:14:29Z; SHA-256 02e231c68ffc37c829789eabc508a220f3d99a33ee8bf676e53c999a0ff54021)
- https://raw.githubusercontent.com/Yuqi-Zhou/CHOP/HEAD/LICENSE (retrieved 2026-10-16T13:29:25Z; SHA-256 1a9f9af82764fdfc07dd8c2ec02e66cbb5c7c2cfc899b0e7b53b26e2a774ddf9)

---

## city-webmcp (OpenClawCity)

Exposes 33 browser-native WebMCP tools for autonomous agents operating inside the OpenClawCity web environment.

- Catalog URL: https://awesomecua.com/resources/github-openclawcity-city-webmcp/
- Original source: https://github.com/openclawcity/city-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, workflow
- Evidence checked: 2026-11-04T18:11:31Z
- ID: github:openclawcity/city-webmcp

- Record JSON: https://awesomecua.com/resources/github-openclawcity-city-webmcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/openclawcity/city-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/openclawcity/city-webmcp/main/README.md (retrieved 2026-11-04T18:11:31Z; SHA-256 9b9a825d61e80afb99f41f541212ea87b0e7cf52217416fc5e0fb2e59640754d)
- https://raw.githubusercontent.com/openclawcity/city-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:27Z; SHA-256 e60336ee59ecc76c438a78c97758a8c48caba04160314f2a09a4c578a952cc8b)

---

## Clawbrowser

Clawbrowser is an agent-native managed Chromium runtime with fingerprint rotation, proxy routing, and persistent session state.

- Catalog URL: https://awesomecua.com/resources/github-clawbrowser-clawbrowser/
- Original source: https://github.com/clawbrowser/clawbrowser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T16:10:30Z
- ID: github:clawbrowser/clawbrowser

- Record JSON: https://awesomecua.com/resources/github-clawbrowser-clawbrowser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/clawbrowser/clawbrowser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/clawbrowser/clawbrowser/HEAD/README.md (retrieved 2026-11-04T16:10:30Z; SHA-256 a3f6374605978ce5274a5798ffc8580f0c040ecca2bf2d054e05d38b535d5eec)
- https://raw.githubusercontent.com/clawbrowser/clawbrowser/HEAD/LICENSE (retrieved 2026-11-04T16:13:37Z; SHA-256 34ee7a99c7746672a78552cfdd7b3c0fcd40f84ed3dfbfeb9971db593dd60474)

---

## ClawMobile

ClawMobile is an Android agent runtime built on OpenClaw for controlling mobile apps, learning reusable skills, and executing device workflows.

- Catalog URL: https://awesomecua.com/resources/github-clawmobile-clawmobile/
- Original source: https://github.com/ClawMobile/ClawMobile
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, memory, workflow, automation
- Evidence checked: 2026-11-04T15:45:45Z
- ID: github:clawmobile/clawmobile

- Record JSON: https://awesomecua.com/resources/github-clawmobile-clawmobile/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ClawMobile/ClawMobile/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ClawMobile/ClawMobile/HEAD/README.md (retrieved 2026-11-04T15:45:45Z; SHA-256 a5925aadabf53719e05958d52add3cd39a3d40decda10ab6d31cefb44a1200d3)
- https://raw.githubusercontent.com/ClawMobile/ClawMobile/HEAD/LICENSE (retrieved 2026-11-04T15:57:32Z; SHA-256 b955c57ea56055f9201912add89dcb900ec60d0acdc4785c47edb9d8039ff20f)

---

## clef-use

clef-use is a local computer-use runtime combining structured accessibility, SigLIP2 visual tile grounding, OmniParser, and MCP tools.

- Catalog URL: https://awesomecua.com/resources/github-kotori0919-clef-use/
- Original source: https://github.com/kotori0919/clef-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, screen-understanding, tool-integration, efficiency
- Evidence checked: 2026-11-04T14:41:50Z
- ID: github:kotori0919/clef-use

- Record JSON: https://awesomecua.com/resources/github-kotori0919-clef-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/kotori0919/clef-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kotori0919/clef-use/HEAD/README.md (retrieved 2026-11-04T14:41:50Z; SHA-256 15bb6a153e66783e85e48f421232f6f76dc1c88532c5b156189ad3112e406f1a)
- https://raw.githubusercontent.com/kotori0919/clef-use/HEAD/LICENSE (retrieved 2026-11-04T14:45:19Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## ClickClickClick

ClickClickClick is a framework for autonomous Android and desktop computer use supporting local and cloud vision-language models.

- Catalog URL: https://awesomecua.com/resources/github-instavm-clickclickclick/
- Original source: https://github.com/instavm/clickclickclick
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, android, desktop, macos, windows, linux
- Topics: automation, mobile-navigation, grounding
- Evidence checked: 2026-11-04T14:02:37Z
- ID: github:instavm/clickclickclick

- Record JSON: https://awesomecua.com/resources/github-instavm-clickclickclick/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/instavm/clickclickclick/HEAD/README.md (retrieved 2026-11-04T14:02:37Z; SHA-256 497894b16146fcb46160c911b8797e77a173f826544f1ada2639358b376a981b)

---

## CloudCrew Understudy

Records human UI workflows once and compiles them into parameterized, editable replay scripts for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-cloudcrewatwork-understudy/
- Original source: https://github.com/CloudCrewAtWork/understudy
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, imitation-learning, workflow, automation
- Evidence checked: 2026-11-04T16:10:28Z
- ID: github:cloudcrewatwork/understudy

- Record JSON: https://awesomecua.com/resources/github-cloudcrewatwork-understudy/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/CloudCrewAtWork/understudy/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CloudCrewAtWork/understudy/HEAD/README.md (retrieved 2026-11-04T16:10:28Z; SHA-256 441df5bec23eee0704fd8b183df185f33097f4633d34727f7c67dc94c0ddd856)
- https://raw.githubusercontent.com/CloudCrewAtWork/understudy/HEAD/LICENSE (retrieved 2026-11-04T16:13:35Z; SHA-256 0e77cb33b67d9afc4ac63bac885b993cdc181d8c4b71607e2abcf317ff260923)

---

## CoAct-1 Implementation

Open-source replication of the CoAct-1 hybrid coding-and-GUI multi-agent architecture evaluated on OSWorld-Verified.

- Catalog URL: https://awesomecua.com/resources/github-buiilding-coact-1-implementation/
- Original source: https://github.com/buiilding/Coact-1_Implementation
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: planning, tool-integration, automation, grounding
- Evidence checked: 2026-11-04T15:03:37Z
- ID: github:buiilding/coact-1_implementation

- Record JSON: https://awesomecua.com/resources/github-buiilding-coact-1-implementation/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/buiilding/Coact-1_Implementation/HEAD/README.md (retrieved 2026-11-04T15:03:37Z; SHA-256 fb09d5b910dc8b9ec5a78945594add311ccb192b2e52947b5dd6b73108c51a99)

---

## Cockroach Browser

Local-first browser automation platform for AI agents supporting isolated Chromium, Firefox, and WebKit profiles.

- Catalog URL: https://awesomecua.com/resources/github-ajnasnb-cockroach-browser/
- Original source: https://github.com/AjnasNB/cockroach-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T16:51:52Z
- ID: github:ajnasnb/cockroach-browser

- Record JSON: https://awesomecua.com/resources/github-ajnasnb-cockroach-browser/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/AjnasNB/cockroach-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AjnasNB/cockroach-browser/HEAD/README.md (retrieved 2026-11-04T16:51:52Z; SHA-256 239448230145fbe7b9cc4cb5a3bdc50aa047248387f821c758bf2436fd092a4a)
- https://raw.githubusercontent.com/AjnasNB/cockroach-browser/HEAD/LICENSE (retrieved 2026-11-04T16:56:45Z; SHA-256 7c79a84df23286df2e5b8e7f782f818ccea932d5c04d11f3acb321cd88e9b9e0)

---

## CODA

CODA coordinates a trainable planner ('Cerebrum') with a grounded GUI executor ('Cerebellum') via decoupled reinforcement learning on ScienceBoard.

- Catalog URL: https://awesomecua.com/resources/github-openixclab-coda/
- Original source: https://github.com/OpenIXCLab/CODA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: planning, reinforcement-learning, grounding, science
- Evidence checked: 2026-11-04T13:12:30Z
- ID: github:openixclab/coda

- Record JSON: https://awesomecua.com/resources/github-openixclab-coda/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenIXCLab/CODA/HEAD/README.md (retrieved 2026-11-04T13:12:30Z; SHA-256 d6a1aa1fc4f96439f0b75e0509e01d20da29658de2041b774375db49275135dd)

---

## CodeceptJS

CodeceptJS is an end-to-end testing framework that expresses browser and mobile interactions as user-facing steps through helpers such as Playwright, WebDriver, and Appium.

- Catalog URL: https://awesomecua.com/resources/github-codeceptjs-codeceptjs/
- Original source: https://github.com/codeceptjs/CodeceptJS
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web, android
- Topics: automation, tool-integration, workflow
- Evidence checked: 2026-11-06T16:36:33Z
- ID: github:codeceptjs/codeceptjs

### Limitations

The source declares an MIT license. CodeceptJS 4.2 requires Node.js 22.12.0 or later.

- Record JSON: https://awesomecua.com/resources/github-codeceptjs-codeceptjs/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/codeceptjs/CodeceptJS/744dba8487487e78a6d561e6045039f88d91d050/README.md (retrieved 2026-11-06T16:36:33Z; SHA-256 8a0c16fdaca23041e69dc0ba2be73c25a905f045e63808629ae0821b6c5f63af)

---

## Codex Boss Desktop

Local-first Electron controller for multi-model deliberation and evidence-preserving computer-use orchestration.

- Catalog URL: https://awesomecua.com/resources/github-zhiheng-zhang-mera-codex-boss/
- Original source: https://github.com/zhiheng-zhang-Mera/Codex-Boss
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, linux, web
- Topics: workflow, observability, tool-integration
- Evidence checked: 2026-11-04T17:55:25Z
- ID: github:zhiheng-zhang-mera/codex-boss

- Record JSON: https://awesomecua.com/resources/github-zhiheng-zhang-mera-codex-boss/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/zhiheng-zhang-Mera/Codex-Boss/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zhiheng-zhang-Mera/Codex-Boss/main/README.md (retrieved 2026-11-04T17:55:25Z; SHA-256 df56e96e87f1bd7eb5289413e772a1e8725229341dd39628fe0a781021f7b377)
- https://raw.githubusercontent.com/zhiheng-zhang-Mera/Codex-Boss/HEAD/LICENSE (retrieved 2026-11-04T18:00:28Z; SHA-256 b682b3c024e6e6dcc1f63e8483052c2259d8cf5c22340f32de064124c8fabf43)

---

## CollabUIAgents

CollabUIAgents trains UI agents with synthesized interaction data and process rewards assigned by collaborating agents. The repository releases data collection and inference code.

- Catalog URL: https://awesomecua.com/resources/github-thunlp-mt-collabuiagents/
- Original source: https://github.com/THUNLP-MT/CollabUIAgents
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, reward-models, data-generation, robustness
- Evidence checked: 2026-11-09T06:16:36Z
- ID: github:thunlp-mt/collabuiagents

### Limitations

The README lists a data-collection pipeline and model inference code as available. It says model weights and evaluation scripts remain unreleased, links to a public dataset, and declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/github-thunlp-mt-collabuiagents/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUNLP-MT/CollabUIAgents/HEAD/README.md (retrieved 2026-11-09T06:16:36Z; SHA-256 97a11f8872be38dd9395a69f9ac36f8d054836be4225a303bbe431d09827a52e)

---

## Commonplace WebMCP

WebMCP-enabled reading and publishing workspace designed for shared control between human users and browser agents.

- Catalog URL: https://awesomecua.com/resources/github-arterialist-webmcp-openai-hackathon/
- Original source: https://github.com/arterialist/webmcp-openai-hackathon
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:30:46Z
- ID: github:arterialist/webmcp-openai-hackathon

- Record JSON: https://awesomecua.com/resources/github-arterialist-webmcp-openai-hackathon/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/arterialist/webmcp-openai-hackathon/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/arterialist/webmcp-openai-hackathon/main/README.md (retrieved 2026-11-04T17:30:46Z; SHA-256 4811c6c8add0915dbf95c8e3e6ca153e5ae9528f28ba6229ee087b431734fe36)
- https://raw.githubusercontent.com/arterialist/webmcp-openai-hackathon/HEAD/LICENSE (retrieved 2026-11-04T17:39:47Z; SHA-256 a5703a10dd5ab6fc3e4536c0914b64af5897406d60572ecc93fb03b9a83a1642)

---

## Compress2Focus (CCPO)

Compress2Focus (CCPO) implements coordinate compression for multi-turn policy optimization in vision-language GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-hithink-research-ccpo/
- Original source: https://github.com/HiThink-Research/CCPO
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: reinforcement-learning, grounding, efficiency
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:hithink-research/ccpo

- Record JSON: https://awesomecua.com/resources/github-hithink-research-ccpo/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HiThink-Research/CCPO/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 83f23da2e4f98c5221d932ff2915ad59f956ef8b8e34900602864deef3056b19)

---

## Computer Use with SLM (GRPO + OpenEnv)

Fine-tunes small language models for computer-use navigation and GUI interaction using Group Relative Policy Optimization (GRPO) and OpenEnv.

- Catalog URL: https://awesomecua.com/resources/github-shayanamir0-computer-use-with-slm/
- Original source: https://github.com/shayanamir0/computer-use-with-slm
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: reinforcement-learning, efficiency, sandbox
- Evidence checked: 2026-11-04T14:41:51Z
- ID: github:shayanamir0/computer-use-with-slm

- Record JSON: https://awesomecua.com/resources/github-shayanamir0-computer-use-with-slm/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shayanamir0/computer-use-with-slm/HEAD/README.md (retrieved 2026-11-04T14:41:51Z; SHA-256 ff5af1fe1da04c4a1751e619c87253141e559ccac328fe928456ce8dbd0c2f7a)

---

## Computer-Use Capability Engine

Discovers legacy UI workflows with an LLM once and compiles them into typed, versioned, deterministically replayable capabilities.

- Catalog URL: https://awesomecua.com/resources/github-pavanvakula-computer-use-capability-engine/
- Original source: https://github.com/PavanVAkula/computer-use-capability-engine
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: memory, workflow, automation, efficiency
- Evidence checked: 2026-11-04T14:20:13Z
- ID: github:pavanvakula/computer-use-capability-engine

- Record JSON: https://awesomecua.com/resources/github-pavanvakula-computer-use-capability-engine/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PavanVAkula/computer-use-capability-engine/HEAD/README.md (retrieved 2026-11-04T14:20:13Z; SHA-256 9fd6b713a15a94f4fe6992316b35e50926883569b4895255a32877d65ce101ad)

---

## computer.cpp

computer.cpp turns native desktop GUI applications into structured, API-callable interfaces for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-gobii-ai-computer-cpp/
- Original source: https://github.com/gobii-ai/computer.cpp
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: automation, tool-integration, efficiency
- Evidence checked: 2026-11-04T16:30:06Z
- ID: github:gobii-ai/computer.cpp

- Record JSON: https://awesomecua.com/resources/github-gobii-ai-computer-cpp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/gobii-ai/computer.cpp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/gobii-ai/computer.cpp/HEAD/README.md (retrieved 2026-11-04T16:30:06Z; SHA-256 58e837b5207f5bfd1b8953129dc99d7f5e13a537a9ea84debee6e91f9f27d73b)
- https://raw.githubusercontent.com/gobii-ai/computer.cpp/HEAD/LICENSE (retrieved 2026-11-04T16:34:35Z; SHA-256 f5aebc3df95161915f44daf0a35a8d45144c1be41f5f15007d064279e836d1ac)

---

## computer.md

Defines an open `COMPUTER.md` machine specification and runtime for LLM agents to operate terminals, filesystems, and desktop GUIs.

- Catalog URL: https://awesomecua.com/resources/github-carloslfu-computer-md/
- Original source: https://github.com/carloslfu/computer.md
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, linux, macos, windows
- Topics: tool-integration, automation, workflow
- Evidence checked: 2026-11-04T16:30:02Z
- ID: github:carloslfu/computer.md

- Record JSON: https://awesomecua.com/resources/github-carloslfu-computer-md/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/carloslfu/computer.md/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/carloslfu/computer.md/HEAD/README.md (retrieved 2026-11-04T16:30:02Z; SHA-256 09ed49eefcd225ce600d2309907257ec939ee4a0598a42b4a2b21e1856132009)
- https://raw.githubusercontent.com/carloslfu/computer.md/HEAD/LICENSE (retrieved 2026-11-04T16:34:28Z; SHA-256 73d94ee579886c2548828e184127fe27d753c76008c7e8c13f6f31026e73fb8c)

---

## ComputerRL

Reinforcement-learning infrastructure for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-thudm-computerrl/
- Original source: https://github.com/THUDM/ComputerRL
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:thudm/computerrl

- Record JSON: https://awesomecua.com/resources/github-thudm-computerrl/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/ComputerRL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/ComputerRL/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 8b327dcd58c18e48e1e7f5b19ebf5673da4b5ff9320aa960e391844adf3a8a55)
- https://raw.githubusercontent.com/THUDM/ComputerRL/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## ConnectOnion

ConnectOnion is a CLI and Python framework that gives agents commands for connected accounts, a logged-in browser, files, and chat apps.

- Catalog URL: https://awesomecua.com/resources/github-openonion-connectonion/
- Original source: https://github.com/openonion/connectonion
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: tool-integration, automation, memory, human-in-the-loop
- Evidence checked: 2026-11-06T16:36:39Z
- ID: github:openonion/connectonion

### Limitations

The README describes co rem version 1.9.2 and says its daily scheduling currently requires macOS. It says consequential writes preview until --yes, while risky co ai tool calls wait for approval.

- Record JSON: https://awesomecua.com/resources/github-openonion-connectonion/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/openonion/connectonion/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/openonion/connectonion/9f80e63689da990cd423f8996960177a871f534a/README.md (retrieved 2026-11-06T16:36:39Z; SHA-256 32c34db17cfbce0a602412f1ee854521cbf313e05fe0ccc5f222f7411a0d7d16)
- https://raw.githubusercontent.com/openonion/connectonion/HEAD/LICENSE (retrieved 2026-11-06T10:58:04Z; SHA-256 3a8d4240e986896bdfb44219bdc607e21edbb2ad78672f9378e601aea35d9f9e)

---

## Control-Agent

Unified multimodal control framework combining pure-vision desktop operation, structured DOM browser control, and ADB mobile automation.

- Catalog URL: https://awesomecua.com/resources/github-gekaixing-control-agent/
- Original source: https://github.com/GeKaixing/Control-Agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android, windows, macos, linux
- Topics: screen-understanding, web-navigation, mobile-navigation, automation
- Evidence checked: 2026-11-04T18:11:43Z
- ID: github:gekaixing/control-agent

- Record JSON: https://awesomecua.com/resources/github-gekaixing-control-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/GeKaixing/Control-Agent/main/README.md (retrieved 2026-11-04T18:11:43Z; SHA-256 c608bebeaf0515e613834e3daad7de0c147f31dc56a000b62f6c049c8191b9ef)

---

## Cordis Social

Lifecycle-safe Cordis plugin suite for orchestrating ProfileFleet, OpenAI Codex, and multi-profile browser workflows.

- Catalog URL: https://awesomecua.com/resources/github-enginefuture-cordis-social/
- Original source: https://github.com/enginefuture/cordis-social
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:41Z
- ID: github:enginefuture/cordis-social

- Record JSON: https://awesomecua.com/resources/github-enginefuture-cordis-social/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/enginefuture/cordis-social/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/enginefuture/cordis-social/main/README.md (retrieved 2026-11-04T18:11:41Z; SHA-256 369dba3484caa529f8e333844317f8f0da82d3b65cbff52bd745efdb811fe109)
- https://raw.githubusercontent.com/enginefuture/cordis-social/HEAD/LICENSE (retrieved 2026-11-04T18:16:18Z; SHA-256 e0d52f91c3c86f2a7b26e120a4e1932356b6606a62aac1b88a85842ae63bbf52)

---

## CrewAI

CrewAI is a Python framework for orchestrating role-playing autonomous AI agent teams and event-driven multi-step workflows.

- Catalog URL: https://awesomecua.com/resources/github-joaomdmoura-crewai/
- Original source: https://github.com/joaomdmoura/crewAI
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: workflow, planning, tool-integration
- Evidence checked: 2026-11-04T13:12:20Z
- ID: github:joaomdmoura/crewai

- Record JSON: https://awesomecua.com/resources/github-joaomdmoura-crewai/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/joaomdmoura/crewAI/HEAD/README.md (retrieved 2026-11-04T13:12:20Z; SHA-256 b0f39843f93676b12883d5821a34555e2146e62bd2c42dc12733fc41222de013)

---

## CrossHands

Local computer-use runtime for coding agents exposing desktop inspection and input actions via a JSON CLI and stdio MCP.

- Catalog URL: https://awesomecua.com/resources/github-caelaxie-crosshands/
- Original source: https://github.com/caelaxie/crosshands
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: automation, tool-integration, screen-understanding
- Evidence checked: 2026-11-04T16:51:41Z
- ID: github:caelaxie/crosshands

- Record JSON: https://awesomecua.com/resources/github-caelaxie-crosshands/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/caelaxie/crosshands/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/caelaxie/crosshands/HEAD/README.md (retrieved 2026-11-04T16:51:41Z; SHA-256 0c845fe3ee3789def375031b5a20704dddd3f99b6585c40e289e1b64026eaa1f)
- https://raw.githubusercontent.com/caelaxie/crosshands/HEAD/LICENSE (retrieved 2026-11-04T16:56:33Z; SHA-256 79492c3444052c7def8a1ae1c9db28886765bdc30b57fe7c184ad1e2a2dc863d)

---

## CUA Evaluation & RL with Autonomous Feedback

Implements reinforcement learning with autonomous evaluator feedback for fine-tuning and benchmarking computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-martasumyk-cua-eval-and-finetuning/
- Original source: https://github.com/martasumyk/cua-eval-and-finetuning
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, linux
- Topics: reinforcement-learning, reward-models, evaluation
- Evidence checked: 2026-11-04T15:03:37Z
- ID: github:martasumyk/cua-eval-and-finetuning

- Record JSON: https://awesomecua.com/resources/github-martasumyk-cua-eval-and-finetuning/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/martasumyk/cua-eval-and-finetuning/HEAD/README.md (retrieved 2026-11-04T15:03:37Z; SHA-256 290a2d70b66417643048e78d073175d01fb333554f26f49d8a7aa1d217753922)

---

## cua_agent

cua_agent is a modular Python computer-use framework with OS-agnostic planning, semantic UI grounding, and policy-checked desktop/browser drivers.

- Catalog URL: https://awesomecua.com/resources/github-lacassef-computeruse/
- Original source: https://github.com/lacassef/computeruse
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, macos, windows, linux
- Topics: automation, grounding, safety-security, planning
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:lacassef/computeruse

- Record JSON: https://awesomecua.com/resources/github-lacassef-computeruse/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lacassef/computeruse/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 0abbd45eabc1a9d8580c43275d1dc7c9b987b71ccdfeed2512646663c8a8c518)

---

## CUArena

CUArena wraps desktop and web applications into resettable, observable, and programmatically gradable reinforcement-learning environments.

- Catalog URL: https://awesomecua.com/resources/github-ogutdgn-cuarena/
- Original source: https://github.com/ogutdgn/CUArena
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, linux
- Topics: sandbox, reinforcement-learning, evaluation
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:ogutdgn/cuarena

- Record JSON: https://awesomecua.com/resources/github-ogutdgn-cuarena/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ogutdgn/CUArena/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 343e84aa6a84bd4ce2555cc8cafee20b13129e8273839d0dc5b624199f5b5d3d)

---

## cuforge

cuforge is an online reinforcement-learning and verifiable task-synthesis platform for training computer-use GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-huzjie-cuforge/
- Original source: https://github.com/huzjie/cuforge
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: reinforcement-learning, data-generation, sandbox
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:huzjie/cuforge

- Record JSON: https://awesomecua.com/resources/github-huzjie-cuforge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/huzjie/cuforge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huzjie/cuforge/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 dd1f316e487e6ce0183106a4368bf78d33046a6adb6eea560dfa94d66af5b3d7)
- https://raw.githubusercontent.com/huzjie/cuforge/HEAD/LICENSE (retrieved 2026-11-04T14:07:37Z; SHA-256 bd1894c1f72d966b0b496b4084b8cbe2c0388f3b65810c1a7b98ff850a06b995)

---

## cuse

cuse is an open-source framework for building AI agents that control virtualized Linux desktops and browsers via display, mouse, and keyboard APIs.

- Catalog URL: https://awesomecua.com/resources/github-cuse-dev-cuse/
- Original source: https://github.com/cuse-dev/cuse
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: automation, sandbox, tool-integration
- Evidence checked: 2026-11-04T13:12:12Z
- ID: github:cuse-dev/cuse

- Record JSON: https://awesomecua.com/resources/github-cuse-dev-cuse/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/cuse-dev/cuse/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cuse-dev/cuse/HEAD/README.md (retrieved 2026-11-04T13:12:12Z; SHA-256 2feb343efc68280cb6d1e1eabbf614ebb1903e0262ff3c082f9e19881b18ad3c)
- https://raw.githubusercontent.com/cuse-dev/cuse/HEAD/LICENSE (retrieved 2026-11-04T13:41:44Z; SHA-256 831ab79253ec5ace541bc62e58c5f78333cdb490e8215476a677395ddda73dbd)

---

## Cyber Seeds WebMCP

Human-authorized safety and consent pattern for WebMCP browser agents operating consumer web dashboards.

- Catalog URL: https://awesomecua.com/resources/github-cyberseeds-uk-cyber-seeds-webmcp-challenge/
- Original source: https://github.com/CyberSeeds-uk/cyber-seeds-webmcp-challenge
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:12Z
- ID: github:cyberseeds-uk/cyber-seeds-webmcp-challenge

- Record JSON: https://awesomecua.com/resources/github-cyberseeds-uk-cyber-seeds-webmcp-challenge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/CyberSeeds-uk/cyber-seeds-webmcp-challenge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CyberSeeds-uk/cyber-seeds-webmcp-challenge/main/README.md (retrieved 2026-11-04T17:55:12Z; SHA-256 a69280db3a3a54cbbdd315db768b3012e8c217a0c2af0b4d19a7747f4f63a64a)
- https://raw.githubusercontent.com/CyberSeeds-uk/cyber-seeds-webmcp-challenge/HEAD/LICENSE (retrieved 2026-11-04T18:00:06Z; SHA-256 c65ce2eb68ada26a3b1bf4c906fe14ed993b3db21c5c49004a6c2e300e650467)

---

## Cybergod

Experimental monorepo for computer-control agents with a tmux terminal environment, a web recorder for GUI and terminal sessions in noVNC/ttyd Docker workers, and random-input data collection.

- Catalog URL: https://awesomecua.com/resources/github-james4ever0-agi-computer-control/
- Original source: https://github.com/James4Ever0/agi_computer_control
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: recording, data-generation, sandbox
- Evidence checked: 2026-10-18T11:28:58Z
- ID: github:james4ever0/agi_computer_control

### Limitations

Adjacent: a heterogeneous research repository. Besides the tmux environment (tmux_trials/lib.py) and the GUI/terminal recorder, it holds many exploratory experiments (action encoders, HID and physical input control, VM recording) and AGI manifesto text. Linked datasets on Hugging Face, ModelScope and Kaggle and the separate Vimgolf-Gym, CTF-Gym and Cybergod-Gym repositories are separate resources. The Cybergod paper is a self-published PDF release asset. No license file was found, so code rights stay unknown.

- Record JSON: https://awesomecua.com/resources/github-james4ever0-agi-computer-control/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/James4Ever0/agi_computer_control/HEAD/README.md (retrieved 2026-10-18T11:28:58Z; SHA-256 08ef7edf2639222fb61699aed6b9a97a141eef3facf00e1910c739e272298fe9)
- https://raw.githubusercontent.com/James4Ever0/agi_computer_control/HEAD/web_gui_terminal_recorder/README.md (retrieved 2026-10-18T11:28:44Z; SHA-256 e625a92e0beb11b75241c498ce7eeaa581280dcc743c96944e514e1bbe34876d)
- https://raw.githubusercontent.com/James4Ever0/agi_computer_control/HEAD/tmux_trials/lib.py (retrieved 2026-10-18T11:28:44Z; SHA-256 948a5e74178a4c0856b8947756eb79c7d014c8a8d60c9606d1e615dcc1ac6c6a)

---

## D-PoT evaluation code

Offline prompting and evaluation code for Dynamic Planning of Thoughts on Android-in-the-Wild, including action extraction and comparison with reference actions.

- Catalog URL: https://awesomecua.com/resources/github-sqzhang-lazy-d-pot/
- Original source: https://github.com/sqzhang-lazy/D-PoT
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: planning, action-prediction, evaluation
- Evidence checked: 2026-10-18T04:27:14Z
- ID: github:sqzhang-lazy/d-pot

### Limitations

README describes AITW test sampling and preprocessing reused from Auto-GUI, followed by prediction/action-extraction/evaluation scripts. README describes AITW test sampling and preprocessing reused from Auto-GUI, followed by prediction, action-extraction and evaluation scripts. No project-level license declaration appears in the inspected README/API/non-truncated tree; code, dataset and model rights remain unestablished here.

- Record JSON: https://awesomecua.com/resources/github-sqzhang-lazy-d-pot/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: A project-wide code license is unrecorded in the inspected README/API/tree.
  Sources: https://raw.githubusercontent.com/sqzhang-lazy/D-PoT/HEAD/README.md

### Primary evidence

- https://raw.githubusercontent.com/sqzhang-lazy/D-PoT/HEAD/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 c9c21102db512270079666531dbab71c1ab2ec2073add16be56f8ab3c6fe8abf)
- https://api.github.com/repos/sqzhang-lazy/D-PoT (retrieved 2026-10-17T15:37:02Z; SHA-256 d62cfecbfccd120e53a7fc60e8d4b90b157e998cc5ddac467514c30c0cae1363)
- https://api.github.com/repos/sqzhang-lazy/D-PoT/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:24Z; SHA-256 f75444a0252df5d6ec1ab70d805584cb490cdc38efa995aae55ffbde43ab5fb1)
- https://export.arxiv.org/api/query?id_list=2410.00467%2C2410.00689%2C2410.02810%2C2410.02907%2C2410.05243%2C2410.06703%2C2410.08164%2C2410.09006%2C2410.09024%2C2410.11843%2C2410.11871%2C2410.11872%2C2410.13232%2C2410.13757%2C2410.13824%2C2410.13825%2C2410.13886%2C2410.14803%2C2410.15164%2C2410.16464%2C2410.17236%2C2410.17401%2C2410.17520%2C2410.17883%2C2410.18603%2C2410.18963%2C2410.18967%2C2410.19054%2C2410.19100%2C2410.19461%2C2410.19609%2C2410.20745%2C2410.22552%2C2410.23218%2C2410.24024%2C2411.00820%2C2411.02337%2C2411.02391%2C2411.04468%2C2411.04890%2C2411.06559%2C2411.07618%2C2411.10323%2C2411.13451%2C2411.13591%2C2411.15004%2C2411.17465%2C2411.18279%2C2412.00402%2C2412.01268&max_results=50 (retrieved 2026-10-16T06:31:35Z; SHA-256 b3e67984f59a1b05ccd946eb54e2d37b0bb78ab0ca796fbb6d544793dafea3e0)

---

## DART-GUI

DART-GUI implements decoupled multi-turn reinforcement learning and adaptive trajectory curation for training computer-use GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-computer-use-agents-dart-gui/
- Original source: https://github.com/Computer-use-agents/dart-gui
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: reinforcement-learning, data-generation, efficiency
- Evidence checked: 2026-11-04T14:02:35Z
- ID: github:computer-use-agents/dart-gui

- Record JSON: https://awesomecua.com/resources/github-computer-use-agents-dart-gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Computer-use-agents/dart-gui/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Computer-use-agents/dart-gui/HEAD/README.md (retrieved 2026-11-04T14:02:35Z; SHA-256 f16a6520155f819e507368109e013cdaa459935fa7b1faf8b8f95658cede21e9)
- https://raw.githubusercontent.com/Computer-use-agents/dart-gui/HEAD/LICENSE (retrieved 2026-11-04T14:07:26Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## dcc-cua

Cross-platform Rust runtime and CLI for AI agents to observe and control scoped desktop application windows.

- Catalog URL: https://awesomecua.com/resources/github-dcc-mcp-dcc-cua/
- Original source: https://github.com/dcc-mcp/dcc-cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: automation, screen-understanding, tool-integration
- Evidence checked: 2026-11-04T16:51:53Z
- ID: github:dcc-mcp/dcc-cua

- Record JSON: https://awesomecua.com/resources/github-dcc-mcp-dcc-cua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dcc-mcp/dcc-cua/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dcc-mcp/dcc-cua/HEAD/README.md (retrieved 2026-11-04T16:51:53Z; SHA-256 fed4e489abebc5da02cd5304f2535231d68ebc774a3cfc49b19a8e30bdf7a05d)
- https://raw.githubusercontent.com/dcc-mcp/dcc-cua/HEAD/LICENSE (retrieved 2026-11-04T16:56:46Z; SHA-256 b497f43f3f2affae408c4926dfcef62b5725e231a2976f2f24ee4aa3f2e152a7)

---

## DeepSeekEyes

Auditable vision and cross-platform computer-use runtime for DeepSeek Harness with cryptographic evidence receipts.

- Catalog URL: https://awesomecua.com/resources/github-dttxorg-deepseekeyes/
- Original source: https://github.com/dttxorg/deepseekeyes
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, observability, safety-security, automation
- Evidence checked: 2026-11-04T17:20:37Z
- ID: github:dttxorg/deepseekeyes

- Record JSON: https://awesomecua.com/resources/github-dttxorg-deepseekeyes/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dttxorg/deepseekeyes/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dttxorg/deepseekeyes/main/README.md (retrieved 2026-11-04T17:20:37Z; SHA-256 d93f017154d168b26fc38c0c6965baef8e20bdfbe7c1e0f30f3fb7d6139bad06)
- https://raw.githubusercontent.com/dttxorg/deepseekeyes/HEAD/LICENSE (retrieved 2026-11-04T17:26:39Z; SHA-256 13d7a7e96cc2445cf53f35215d33b6a823616db49a7679b77e3dd27efca4188a)

---

## DeskCanvas

DeskCanvas converts live Windows application windows into structured semantic state with guarded action execution for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-sorry123luck-desk-canvas/
- Original source: https://github.com/sorry123luck/desk-canvas
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, safety-security, automation
- Evidence checked: 2026-11-04T16:10:35Z
- ID: github:sorry123luck/desk-canvas

- Record JSON: https://awesomecua.com/resources/github-sorry123luck-desk-canvas/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sorry123luck/desk-canvas/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sorry123luck/desk-canvas/HEAD/README.md (retrieved 2026-11-04T16:10:35Z; SHA-256 ff3df76e011735fe28986dc1ebb31cbe552c70708f1a0e0cd2b780607c0f2ea6)
- https://raw.githubusercontent.com/sorry123luck/desk-canvas/HEAD/LICENSE (retrieved 2026-11-04T16:13:45Z; SHA-256 7d1dcc672315985d7eeb1a37e16748997fcae7ff8ee56d167b648e59076657fa)

---

## DeskCtl (Desktop Control Engine)

Desktop control engine for GUI agents using UIA and AT-SPI accessibility trees as the primary path with visual fallback.

- Catalog URL: https://awesomecua.com/resources/github-mini-mind-deskctl/
- Original source: https://github.com/mini-mind/DeskCtl
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: screen-understanding, grounding, efficiency, automation
- Evidence checked: 2026-11-04T17:20:40Z
- ID: github:mini-mind/deskctl

- Record JSON: https://awesomecua.com/resources/github-mini-mind-deskctl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/mini-mind/DeskCtl/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mini-mind/DeskCtl/main/README.md (retrieved 2026-11-04T17:20:40Z; SHA-256 3b704d6160f348250fe81bd94370d40cc1a4c968d9ae58d9731fcb6afa15e38d)
- https://raw.githubusercontent.com/mini-mind/DeskCtl/HEAD/LICENSE (retrieved 2026-11-04T17:26:49Z; SHA-256 6d737cabf4471b8ae9d348b41d05a4757ac3e140487cdacf9a4fa702240443c9)

---

## DeskForge

DeskForge extracts dense step-level supervision signals from desktop execution environments to train and verify computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-saidgurbuz-deskforge/
- Original source: https://github.com/Saidgurbuz/deskforge
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: data-generation, reinforcement-learning, reward-models
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:saidgurbuz/deskforge

- Record JSON: https://awesomecua.com/resources/github-saidgurbuz-deskforge/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Saidgurbuz/deskforge/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 0d2253856f6b7af928c1bb4030422b2e0f5eb535b99e93732cfb2c7b148faada)

---

## Desktop Action Agent

Sandboxed local computer-automation agent reference architecture with window detection and action verification.

- Catalog URL: https://awesomecua.com/resources/github-dax0056-desktop-action-agent/
- Original source: https://github.com/dax0056/desktop-action-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: safety-security, sandbox, screen-understanding, automation
- Evidence checked: 2026-11-04T17:30:29Z
- ID: github:dax0056/desktop-action-agent

- Record JSON: https://awesomecua.com/resources/github-dax0056-desktop-action-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dax0056/desktop-action-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dax0056/desktop-action-agent/main/README.md (retrieved 2026-11-04T17:30:29Z; SHA-256 d29a9cbee48fdf8ae4a74dc4e82827e5e148c7c9d10e1f00499ff24c435a938d)
- https://raw.githubusercontent.com/dax0056/desktop-action-agent/HEAD/LICENSE (retrieved 2026-11-04T17:39:50Z; SHA-256 9d524b79d2e75f3ad1ff7a9542fa1f716fe612c85e49f6bb844e424ea6a2bc9e)

---

## deskwork

deskwork augments Claude Computer Use with domain document retrieval to execute compliance-grounded desktop and browser workflows.

- Catalog URL: https://awesomecua.com/resources/github-ashnkumar-deskwork/
- Original source: https://github.com/ashnkumar/deskwork
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: tool-integration, automation, workflow
- Evidence checked: 2026-11-04T14:41:52Z
- ID: github:ashnkumar/deskwork

- Record JSON: https://awesomecua.com/resources/github-ashnkumar-deskwork/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ashnkumar/deskwork/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ashnkumar/deskwork/HEAD/README.md (retrieved 2026-11-04T14:41:52Z; SHA-256 a6023553987b483a36538b990837d10a949d12b0a8a73bc26f185315a6a340f7)
- https://raw.githubusercontent.com/ashnkumar/deskwork/HEAD/LICENSE (retrieved 2026-11-04T14:45:26Z; SHA-256 476070b37665b471c2b00b1b4f8da0e793953f7069640a34033ceaf569962a1a)

---

## Deterministic Computer-Use Automation

Two-phase computer-use automation framework that compiles LLM-driven UI discovery into deterministic replay scripts.

- Catalog URL: https://awesomecua.com/resources/github-joncody-computer-use-automation/
- Original source: https://github.com/joncody/computer-use-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, recording, efficiency, automation
- Evidence checked: 2026-11-04T16:52:01Z
- ID: github:joncody/computer-use-automation

- Record JSON: https://awesomecua.com/resources/github-joncody-computer-use-automation/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/joncody/computer-use-automation/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/joncody/computer-use-automation/HEAD/README.md (retrieved 2026-11-04T16:52:01Z; SHA-256 6d07ac7e2ec840ecbc33b1b6e1efc792a47e8a89a52e0aec0f98fb06c31c7cea)
- https://raw.githubusercontent.com/joncody/computer-use-automation/HEAD/LICENSE (retrieved 2026-11-04T16:56:50Z; SHA-256 31886000509323ba7139bacece7d045b384ed77bd966a3f23f257f1994661db5)

---

## device-use

device-use enables AI agents to operate scientific laboratory instruments through their native desktop GUI software without hardware APIs.

- Catalog URL: https://awesomecua.com/resources/github-labclaw-device-use/
- Original source: https://github.com/labclaw/device-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos
- Topics: science, automation, grounding, tool-integration
- Evidence checked: 2026-11-04T15:45:46Z
- ID: github:labclaw/device-use

- Record JSON: https://awesomecua.com/resources/github-labclaw-device-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/labclaw/device-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/labclaw/device-use/HEAD/README.md (retrieved 2026-11-04T15:45:46Z; SHA-256 5220b9e042eefd506736242a068e7489b47d0c5a9f0fe6e0f35f78eea2bf6684)
- https://raw.githubusercontent.com/labclaw/device-use/HEAD/LICENSE (retrieved 2026-11-04T15:57:34Z; SHA-256 5a0b8d6eb25b80203ed286f282739fcc359df34ccdc38814d0b11450de9c3298)

---

## dibs

Local coordination hub and lock manager that lets multiple AI agents reserve and use computer-use resources without colliding.

- Catalog URL: https://awesomecua.com/resources/github-joshteravest-dibs/
- Original source: https://github.com/JoshTerAvest/dibs
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: safety-security, sandbox, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:47Z
- ID: github:joshteravest/dibs

- Record JSON: https://awesomecua.com/resources/github-joshteravest-dibs/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/JoshTerAvest/dibs/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JoshTerAvest/dibs/main/README.md (retrieved 2026-11-04T18:11:47Z; SHA-256 59e05daa8d1b5b149e648c8ecdd3f3deaa5502947d9a614851efaeb5c07ba158)
- https://raw.githubusercontent.com/JoshTerAvest/dibs/HEAD/LICENSE (retrieved 2026-11-04T18:16:22Z; SHA-256 fc00db7518817c0743ff913724d397d92aac532928c67a890acf5c446cb06758)

---

## Digi-Q

Offline device-control training code that learns action values and uses them to select promising actions, with linked trajectories and checkpoints.

- Catalog URL: https://awesomecua.com/resources/github-digirl-agent-digiq/
- Original source: https://github.com/DigiRL-agent/digiq
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, efficiency
- Evidence checked: 2026-10-16T11:09:28Z
- ID: github:digirl-agent/digiq

- Record JSON: https://awesomecua.com/resources/github-digirl-agent-digiq/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DigiRL-agent/digiq/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 33c55f7d1df7f812c9c9b9c4d97a4de7408b1b1916e58eed266b1f88389b50cd)

---

## Dinoer

Local-first web research and browser automation framework for LLM agents combining SearXNG discovery with headless browser control.

- Catalog URL: https://awesomecua.com/resources/github-ronandavalan-dinoer/
- Original source: https://github.com/RonanDavalan/dinoer
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, automation
- Evidence checked: 2026-11-04T17:20:43Z
- ID: github:ronandavalan/dinoer

- Record JSON: https://awesomecua.com/resources/github-ronandavalan-dinoer/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/RonanDavalan/dinoer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/RonanDavalan/dinoer/main/README.md (retrieved 2026-11-04T17:20:43Z; SHA-256 ddf5c6be9eb34c975f31730ae815a317ef5f30518cfa2ff840cf0bafb4feb92d)
- https://raw.githubusercontent.com/RonanDavalan/dinoer/HEAD/LICENSE (retrieved 2026-11-04T17:26:52Z; SHA-256 f5e84521f37a096d90a28a3289d146bab41254f78bcabb9c0561e13aa6962c86)

---

## Domstamp

Framework-neutral browser-state snapshotter capturing compact, diffable DOM and accessibility states for AI web agents.

- Catalog URL: https://awesomecua.com/resources/github-zuub-don-domstamp/
- Original source: https://github.com/zuub-don/domstamp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: state-tracking, screen-understanding, web-navigation, observability
- Evidence checked: 2026-11-04T17:55:23Z
- ID: github:zuub-don/domstamp

- Record JSON: https://awesomecua.com/resources/github-zuub-don-domstamp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/zuub-don/domstamp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zuub-don/domstamp/main/README.md (retrieved 2026-11-04T17:55:23Z; SHA-256 0f50c15e0a5bae07c349ef3216450bc121c6ce4f6595c56ef6a652ad54c2732e)
- https://raw.githubusercontent.com/zuub-don/domstamp/HEAD/LICENSE (retrieved 2026-11-04T18:00:28Z; SHA-256 1379a38d601273a7a66d32cfa4dd41bf7b18877993c2dfe054d9edd0eaec354f)

---

## draiqw browser-agent (bu_mcp)

Enhanced Browser-Use distribution adding the `bu_mcp` Model Context Protocol layer over autonomous web navigation.

- Catalog URL: https://awesomecua.com/resources/github-draiqw-browser-agent/
- Original source: https://github.com/draiqw/browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:31Z
- ID: github:draiqw/browser-agent

- Record JSON: https://awesomecua.com/resources/github-draiqw-browser-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/draiqw/browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/draiqw/browser-agent/main/README.md (retrieved 2026-11-04T18:11:31Z; SHA-256 dbd0160d8f6cf9af7f6a00828b59fff2bd49452ee2bde38fea66f155b803649f)
- https://raw.githubusercontent.com/draiqw/browser-agent/HEAD/LICENSE (retrieved 2026-11-04T18:16:18Z; SHA-256 8483fd6fde2fe65a053aecf5a4a8796deee5157eb08177bcf22038750149dfc9)

---

## DrishtiGuard

On-device visual privacy firewall that detects and masks sensitive screen regions before lightweight browser agents process frames.

- Catalog URL: https://awesomecua.com/resources/github-atharvasamant4-drishtiguard/
- Original source: https://github.com/AtharvaSamant4/DrishtiGuard
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, screen-understanding, efficiency, web-navigation
- Evidence checked: 2026-11-04T18:11:44Z
- ID: github:atharvasamant4/drishtiguard

- Record JSON: https://awesomecua.com/resources/github-atharvasamant4-drishtiguard/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AtharvaSamant4/DrishtiGuard/main/README.md (retrieved 2026-11-04T18:11:44Z; SHA-256 7a57bdbd4cfc49ea40bccfd5e3f7780a114958911590adce07ee3d4ae2c3d7c7)

---

## dsh-OpenLiulan (开放浏览)

Self-healing browser control framework for DeepSeek Harness featuring semantic page perception and automated fault recovery.

- Catalog URL: https://awesomecua.com/resources/github-haodongzhang022-hue-openliulan/
- Original source: https://github.com/haodongzhang022-hue/OpenLiulan
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, self-reflection, robustness, automation
- Evidence checked: 2026-11-04T17:20:48Z
- ID: github:haodongzhang022-hue/openliulan

- Record JSON: https://awesomecua.com/resources/github-haodongzhang022-hue-openliulan/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/haodongzhang022-hue/OpenLiulan/main/README.md (retrieved 2026-11-04T17:20:48Z; SHA-256 0c3c4de9b5e8ca3becb3f77ea53dd30beda0ee6ba78f0f617075fede7daed917)

---

## DualTAP

DualTAP is a dual-task adversarial protection framework for mobile MLLM GUI agents against environmental and visual prompt attacks.

- Catalog URL: https://awesomecua.com/resources/github-fyzhang1-dualtap/
- Original source: https://github.com/fyzhang1/DualTAP
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, mobile-navigation, robustness
- Evidence checked: 2026-11-04T14:02:35Z
- ID: github:fyzhang1/dualtap

- Record JSON: https://awesomecua.com/resources/github-fyzhang1-dualtap/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/fyzhang1/DualTAP/HEAD/README.md (retrieved 2026-11-04T14:02:35Z; SHA-256 dba1079770535df01783f8ba9f6f3d532149709e1e726c6a97d917af9b037c83)

---

## E2-Mem

E2-Mem is an episodic-event hierarchical memory framework for long-horizon web agents evaluated on WebArena.

- Catalog URL: https://awesomecua.com/resources/github-jianminya-e2mem/
- Original source: https://github.com/jianminYa/e2mem
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: memory, long-horizon, web-navigation
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:jianminya/e2mem

- Record JSON: https://awesomecua.com/resources/github-jianminya-e2mem/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/jianminYa/e2mem/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jianminYa/e2mem/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 f3dbc324f1d8fefa9bf71a8a30eb996d19e5d57e922bb2d824bdf942dbcbcd12)
- https://raw.githubusercontent.com/jianminYa/e2mem/HEAD/LICENSE (retrieved 2026-11-04T14:07:42Z; SHA-256 728064319d126f9e62957f2c2edc508f019daedadd14336d9e2e7169dca24bec)

---

## ecobrowser (ai-browser)

AI-native browser framework with structured page perception, token-efficient state representation, and deterministic action tools.

- Catalog URL: https://awesomecua.com/resources/github-haidaresber-ai-browser/
- Original source: https://github.com/HaidarESBER/ai-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, efficiency, tool-integration
- Evidence checked: 2026-11-04T16:30:17Z
- ID: github:haidaresber/ai-browser

- Record JSON: https://awesomecua.com/resources/github-haidaresber-ai-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HaidarESBER/ai-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HaidarESBER/ai-browser/HEAD/README.md (retrieved 2026-11-04T16:30:17Z; SHA-256 59f181fad00385b8c149bc00b1cb669645595723aa5ac92010b06dcf433ac776)
- https://raw.githubusercontent.com/HaidarESBER/ai-browser/HEAD/LICENSE (retrieved 2026-11-04T16:34:54Z; SHA-256 7c192ee7ff2ddf29043f7a9847c208bee25d173959cc4b5da9e3817292caabd5)

---

## Enterprise Web Workflow Agent

Enterprise web workflow agent framework combining browser-use automation, human-in-the-loop safety gates, trace logging, and evaluation.

- Catalog URL: https://awesomecua.com/resources/github-ztr321-enterprise-web-workflow-agent/
- Original source: https://github.com/ZTR321/enterprise-web-workflow-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, safety-security, human-in-the-loop, evaluation
- Evidence checked: 2026-11-04T16:30:10Z
- ID: github:ztr321/enterprise-web-workflow-agent

- Record JSON: https://awesomecua.com/resources/github-ztr321-enterprise-web-workflow-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZTR321/enterprise-web-workflow-agent/HEAD/README.md (retrieved 2026-11-04T16:30:10Z; SHA-256 b4b634d97f94b9a28f43e50e32a2f35e016033f2b21539775ebed65c9c437c40)

---

## ENVISIONS

ENVISIONS is an environment-guided neural-symbolic self-training framework for language agents across symbolic reasoning and WebShop tasks.

- Catalog URL: https://awesomecua.com/resources/github-xufangzhi-envisions/
- Original source: https://github.com/xufangzhi/ENVISIONS
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: self-reflection, reinforcement-learning, planning
- Evidence checked: 2026-11-04T13:12:45Z
- ID: github:xufangzhi/envisions

- Record JSON: https://awesomecua.com/resources/github-xufangzhi-envisions/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xufangzhi/ENVISIONS/HEAD/README.md (retrieved 2026-11-04T13:12:45Z; SHA-256 488667f0df6d834de658288b0887d04574cd5a8f97dfbdd81f7e634bdc1cea01)

---

## ENVS (Environment-Native Verified Search)

ENVS is a post-training and verified tree-search pipeline for long-horizon GUI agents operating in live desktop and web environments.

- Catalog URL: https://awesomecua.com/resources/github-artysicistz-envs/
- Original source: https://github.com/ArtysicistZ/ENVS
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, linux
- Topics: reinforcement-learning, planning, self-reflection, long-horizon
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:artysicistz/envs

- Record JSON: https://awesomecua.com/resources/github-artysicistz-envs/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ArtysicistZ/ENVS/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ArtysicistZ/ENVS/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 2eff497da06cb9ac79ffd1ee1630f01d0332bd5e55da32d1c99714cf49e50c1c)
- https://raw.githubusercontent.com/ArtysicistZ/ENVS/HEAD/LICENSE (retrieved 2026-11-04T14:45:15Z; SHA-256 23b167a263919d7355ca44b59f5085ef17567892d7aff79917af6ae0c1a0ad9f)

---

## ESP (Echo-Skeleton Perception)

Stateful, event-driven screen-perception runtime that converts UI changes into compact text events for text-only computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-badtheorylabs-esp/
- Original source: https://github.com/Badtheorylabs/esp
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, state-tracking, efficiency
- Evidence checked: 2026-11-04T16:51:47Z
- ID: github:badtheorylabs/esp

- Record JSON: https://awesomecua.com/resources/github-badtheorylabs-esp/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Badtheorylabs/esp/HEAD/README.md (retrieved 2026-11-04T16:51:47Z; SHA-256 0364a243849af3a48cb071c8bd73f20129f826a29e7bf5a6ad30f867aeab9cab)

---

## ETO (Exploration-Based Trajectory Optimization)

ETO trains LLM agents on WebShop, ScienceWorld, and ALFWorld by contrasting failed exploration trajectories against expert demonstrations.

- Catalog URL: https://awesomecua.com/resources/github-yifan-song793-eto/
- Original source: https://github.com/Yifan-Song793/ETO
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: reinforcement-learning, imitation-learning, web-navigation
- Evidence checked: 2026-11-04T13:12:45Z
- ID: github:yifan-song793/eto

- Record JSON: https://awesomecua.com/resources/github-yifan-song793-eto/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Yifan-Song793/ETO/HEAD/README.md (retrieved 2026-11-04T13:12:45Z; SHA-256 4c182acf18345e57ba39c7ac9a1ca004b97642267f8a7300684e567f9ab632ac)

---

## EvalOps browser-use-rs

Rust behavioral conformance port of the browser-use web agent library for low-overhead autonomous browser control.

- Catalog URL: https://awesomecua.com/resources/github-dx-corp-browser-use-rs/
- Original source: https://github.com/dx-corp/browser-use-rs
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-11-04T16:10:35Z
- ID: github:dx-corp/browser-use-rs

- Record JSON: https://awesomecua.com/resources/github-dx-corp-browser-use-rs/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dx-corp/browser-use-rs/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dx-corp/browser-use-rs/HEAD/README.md (retrieved 2026-11-04T16:10:35Z; SHA-256 59fd11c64800a2da4b82e9c80c070b07b1cccbed4430b21e8aa64fa64f71f211)
- https://raw.githubusercontent.com/dx-corp/browser-use-rs/HEAD/LICENSE (retrieved 2026-11-04T16:13:46Z; SHA-256 3cba45bbf5dda0bbc881bffdf63c74926c763eac372ba9b0acd65c532a5717ae)

---

## Evidence Workspace

Human-controlled WebMCP research workspace for reviewing source-backed claims gathered by browser agents.

- Catalog URL: https://awesomecua.com/resources/github-anand-0038-evidence-workspace/
- Original source: https://github.com/Anand-0038/evidence-workspace
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, observability, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:17Z
- ID: github:anand-0038/evidence-workspace

- Record JSON: https://awesomecua.com/resources/github-anand-0038-evidence-workspace/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Anand-0038/evidence-workspace/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Anand-0038/evidence-workspace/main/README.md (retrieved 2026-11-04T17:55:17Z; SHA-256 5cdfadd9c0f75d76741291c9f7b76ffe3fbcfa9d1b118b0de3a296bb4142522a)
- https://raw.githubusercontent.com/Anand-0038/evidence-workspace/HEAD/LICENSE (retrieved 2026-11-04T18:00:03Z; SHA-256 48a7e940bf9e1d7f9c60c6bb91b643dc4b7bb379870d20571650ac5b82cc855f)

---

## Evidence-Bounded GEO Workbench (WebMCP)

Browser-native human-in-the-loop WebMCP workbench with evidence-bounded action verification.

- Catalog URL: https://awesomecua.com/resources/github-subbu-ctd-chinamarketingai-webmcp/
- Original source: https://github.com/subbu-ctd/chinamarketingai-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, observability, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:15Z
- ID: github:subbu-ctd/chinamarketingai-webmcp

- Record JSON: https://awesomecua.com/resources/github-subbu-ctd-chinamarketingai-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/subbu-ctd/chinamarketingai-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/subbu-ctd/chinamarketingai-webmcp/main/README.md (retrieved 2026-11-04T17:55:15Z; SHA-256 e303403507519aec7da9d70e476dd089a7792a9c36bab93c19200a6afdae6a14)
- https://raw.githubusercontent.com/subbu-ctd/chinamarketingai-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:00:25Z; SHA-256 18d84d6dd85769878100095651eed5cd7ab7d7e6df4a51728c98426955b0794d)

---

## ExpActivator

ExpActivator selectively retrieves and verifies applicable historical interaction experiences for personalized GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-fyzhang1-expactivator/
- Original source: https://github.com/fyzhang1/ExpActivator
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, web
- Topics: memory, mobile-navigation, planning
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:fyzhang1/expactivator

- Record JSON: https://awesomecua.com/resources/github-fyzhang1-expactivator/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/fyzhang1/ExpActivator/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 275cf0a945438fd3142280ba8c4652ce213560d8a468d26f72714b5938b00254)

---

## Explorer

Explorer synthesizes large-scale multimodal web trajectories through autonomous bottom-up web exploration for training GUI web agents.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-explorer/
- Original source: https://github.com/OSU-NLP-Group/Explorer
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, imitation-learning
- Evidence checked: 2026-11-04T14:02:35Z
- ID: github:osu-nlp-group/explorer

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-explorer/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Explorer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/Explorer/HEAD/README.md (retrieved 2026-11-04T14:02:35Z; SHA-256 cbf9c6ea2df0c45ef269df9236638b031ffc7b6c9178d16db550c5d2466e0eec)
- https://raw.githubusercontent.com/OSU-NLP-Group/Explorer/HEAD/LICENSE (retrieved 2026-11-04T14:07:25Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)

---

## EyeBrowse

EyeBrowse is a stealthy, LLM-drivable browser engine providing both a Python library and an 85-tool Model Context Protocol server.

- Catalog URL: https://awesomecua.com/resources/github-evil-bane-eyebrowse/
- Original source: https://github.com/Evil-Bane/eyebrowse
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T16:30:06Z
- ID: github:evil-bane/eyebrowse

- Record JSON: https://awesomecua.com/resources/github-evil-bane-eyebrowse/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Evil-Bane/eyebrowse/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Evil-Bane/eyebrowse/HEAD/README.md (retrieved 2026-11-04T16:30:06Z; SHA-256 978ff36d00dad9aa1b37b8fd44ce6040ba95e4852644bb635ca2ead759d45343)
- https://raw.githubusercontent.com/Evil-Bane/eyebrowse/HEAD/LICENSE (retrieved 2026-11-04T16:34:35Z; SHA-256 793bb0189bbf77550b422a3094e260358821cc84f07f0e766b07f07ebcdb951d)

---

## Factifai

Factifai is an AI-driven browser and UI test automation framework that executes natural-language test cases with Playwright and vision models.

- Catalog URL: https://awesomecua.com/resources/github-presidio-oss-factif-ai/
- Original source: https://github.com/presidio-oss/factif-ai
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, automation, web-navigation
- Evidence checked: 2026-11-04T14:02:37Z
- ID: github:presidio-oss/factif-ai

- Record JSON: https://awesomecua.com/resources/github-presidio-oss-factif-ai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/presidio-oss/factif-ai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/presidio-oss/factif-ai/HEAD/README.md (retrieved 2026-11-04T14:02:37Z; SHA-256 d6751c7ea133779955ced5f23fda45443ef0c4b4d6043efb631a3e1849f74ed6)
- https://raw.githubusercontent.com/presidio-oss/factif-ai/HEAD/LICENSE (retrieved 2026-11-04T14:07:44Z; SHA-256 d8e9aea5870585d9258417650235622aeb163ac8c6ad16f7d284dc849571fa64)

---

## FaizannRaza Computer-Use Automation

Discovers legacy banking UI workflows with an LLM once and compiles the run into a deterministic capability artifact.

- Catalog URL: https://awesomecua.com/resources/github-faizannraza-computer-use-automation/
- Original source: https://github.com/faizannraza/computer-use-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, workflow, efficiency, automation
- Evidence checked: 2026-11-04T17:20:43Z
- ID: github:faizannraza/computer-use-automation

- Record JSON: https://awesomecua.com/resources/github-faizannraza-computer-use-automation/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/faizannraza/computer-use-automation/main/README.md (retrieved 2026-11-04T17:20:43Z; SHA-256 a6955eddc560bd7acc3c7e5b38c8e5e42e6a93beb782d6f6cbe3a1702110e510)

---

## fara-7b-agent

Minimal, fully local agent harness for running Microsoft's Fara-7B computer-use model on desktop and browser tasks.

- Catalog URL: https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/
- Original source: https://github.com/cobusgreyling/fara-7b-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, action-prediction, efficiency, automation
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:cobusgreyling/fara-7b-agent

- Record JSON: https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/cobusgreyling/fara-7b-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cobusgreyling/fara-7b-agent/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 3d8589fc8629e8dbf478fc196b2509711374d015cc63deed9b0fa6ab305eb584)
- https://raw.githubusercontent.com/cobusgreyling/fara-7b-agent/HEAD/LICENSE (retrieved 2026-11-04T16:13:47Z; SHA-256 5b66aa3c7375535b01276d33b7ecbbdd3f140e78af151517488f01490f6609c6)

---

## Farsyn

Geographic experience and web-evidence engine that drives real browsers across locales and records verifiable captures.

- Catalog URL: https://awesomecua.com/resources/github-xala-technologies-farsyn/
- Original source: https://github.com/Xala-Technologies/farsyn
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: observability, evaluation, web-navigation
- Evidence checked: 2026-11-04T17:55:14Z
- ID: github:xala-technologies/farsyn

- Record JSON: https://awesomecua.com/resources/github-xala-technologies-farsyn/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Xala-Technologies/farsyn/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Xala-Technologies/farsyn/main/README.md (retrieved 2026-11-04T17:55:14Z; SHA-256 91e5d3b670e2f27f79a6044a2f70044e6090017916a695a0383835089b454755)
- https://raw.githubusercontent.com/Xala-Technologies/farsyn/HEAD/LICENSE (retrieved 2026-11-04T18:00:27Z; SHA-256 f1b94123be330b1918c280784322c36acb6222be42e1d40f83087ee1b3008235)

---

## fast-browser-use

Rust-based browser automation engine driving Chrome over CDP with built-in anti-bot evasions and low-latency DOM extraction.

- Catalog URL: https://awesomecua.com/resources/github-nachafrommars-fast-browser-use/
- Original source: https://github.com/NachaFromMars/fast-browser-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, automation
- Evidence checked: 2026-11-04T16:30:12Z
- ID: github:nachafrommars/fast-browser-use

- Record JSON: https://awesomecua.com/resources/github-nachafrommars-fast-browser-use/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/NachaFromMars/fast-browser-use/HEAD/README.md (retrieved 2026-11-04T16:30:12Z; SHA-256 d313f67519806dc83253c202086533ee98dc374f5e4bab6c01f5a0aa56a03e83)

---

## FastAgent

FastAgent is a lightweight multi-agent orchestration framework by HKUDS for low-latency tool, browser, and desktop workflow execution.

- Catalog URL: https://awesomecua.com/resources/github-hkuds-fastagent/
- Original source: https://github.com/HKUDS/FastAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, macos, linux, windows
- Topics: efficiency, planning, tool-integration, workflow
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:hkuds/fastagent

- Record JSON: https://awesomecua.com/resources/github-hkuds-fastagent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HKUDS/FastAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HKUDS/FastAgent/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 96163a38633fee55ae8be06184aa609019f02ece941485a96785be90e844efab)
- https://raw.githubusercontent.com/HKUDS/FastAgent/HEAD/LICENSE (retrieved 2026-11-04T14:23:50Z; SHA-256 68c9fc511bb10d1488522aa139d1e91289b76ab998fc8ca815e93a85c4ea4850)

---

## FastCUA

Local, accessibility-first Windows control plane for AI agents exposing structured UI trees and multi-action execution.

- Catalog URL: https://awesomecua.com/resources/github-guojiz-fastcua/
- Original source: https://github.com/Guojiz/FastCUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, efficiency, action-prediction, automation
- Evidence checked: 2026-11-04T16:51:41Z
- ID: github:guojiz/fastcua

- Record JSON: https://awesomecua.com/resources/github-guojiz-fastcua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Guojiz/FastCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Guojiz/FastCUA/HEAD/README.md (retrieved 2026-11-04T16:51:41Z; SHA-256 9d737926d89ed1b57a8429586c91d604bd4ebd8e119ed4971b1bd70f9556f9f5)
- https://raw.githubusercontent.com/Guojiz/FastCUA/HEAD/LICENSE (retrieved 2026-11-04T16:56:33Z; SHA-256 6ae64b4b71d2c0dcd677c06a5d29969f8aad0eaf24a069d097614149710329c4)

---

## FastHands

Local-first cross-platform execution and web-research runtime for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-tomaszteee-fasthands/
- Original source: https://github.com/tomaszteee/FastHands
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: efficiency, web-navigation, automation, tool-integration
- Evidence checked: 2026-11-04T17:55:10Z
- ID: github:tomaszteee/fasthands

- Record JSON: https://awesomecua.com/resources/github-tomaszteee-fasthands/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tomaszteee/FastHands/main/README.md (retrieved 2026-11-04T17:55:10Z; SHA-256 7b94448e7c77fea7ceadefac03b4ade244478538c207a4e31b00a722a073715b)

---

## Fathom

Fathom is an execution harness for mobile computer-use agents that translates plain-English goals into grounded actions on iOS and Android.

- Catalog URL: https://awesomecua.com/resources/github-drizzdev-fathom/
- Original source: https://github.com/DrizzDev/fathom
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation, grounding, automation, evaluation
- Evidence checked: 2026-11-04T15:45:43Z
- ID: github:drizzdev/fathom

- Record JSON: https://awesomecua.com/resources/github-drizzdev-fathom/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DrizzDev/fathom/HEAD/README.md (retrieved 2026-11-04T15:45:43Z; SHA-256 22a4b196b646a31aadcc86f0622485a6c6cabaff8c0e41199c78ad065b26dd93)

---

## Figranium JS/TS SDK

Official JavaScript and TypeScript SDK for the Figranium browser automation and web extraction platform.

- Catalog URL: https://awesomecua.com/resources/github-figranium-figranium-js/
- Original source: https://github.com/figranium/figranium-js
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, automation
- Evidence checked: 2026-11-04T17:30:38Z
- ID: github:figranium/figranium-js

- Record JSON: https://awesomecua.com/resources/github-figranium-figranium-js/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/figranium/figranium-js/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/figranium/figranium-js/main/README.md (retrieved 2026-11-04T17:30:38Z; SHA-256 5980021bcc2a4d46857944d060fc41d986877f5976364f95e6313d9e9401084a)
- https://raw.githubusercontent.com/figranium/figranium-js/HEAD/LICENSE (retrieved 2026-11-04T17:39:52Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## FIVE-UI-Evol

Microsoft monorepo for InfiniteWeb website and task-evaluator synthesis, the UI-E2I-Synth grounding evaluation script and UI-I2E-Bench leaderboard, and UI-Evol trajectory-based knowledge refinement.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-five-ui-evol/
- Original source: https://github.com/microsoft/FIVE-UI-Evol
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: data-generation, grounding, sandbox, memory
- Evidence checked: 2026-10-19T07:08:30Z
- ID: github:microsoft/five-ui-evol

### Limitations

The repository was renamed from microsoft/E2I-Synth; both API names return repository 919941789, and the UI-Evol README still clones the old address. InfiniteWeb/ synthesizes multi-page websites with data, APIs, user tasks and dense reward evaluators from a website seed, validates them with generated tests, and includes an OSWorld integration; its README links arXiv 2601.04126 and a Hub dataset. UI-E2I-Synth/ holds only i2e-bench-eval.py, which scores point predictions from an OpenAI-compatible model against UI-I2E-Bench boxes, and the leaderboard site; the instruction-synthesis pipeline itself is not in this tree. UI-Evol/ re-traces actions from screenshot sequences and has an LLM critic refine task knowledge, configured for Azure OpenAI. The root LICENSE is MIT; InfiniteWeb/ and the leaderboard folder carry their own license files. Code was read.

- Record JSON: https://awesomecua.com/resources/github-microsoft-five-ui-evol/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The root LICENSE is the MIT permission text under a 'The MIT License (MIT)' title; recorded for the repository's code. InfiniteWeb/ and the leaderboard folder carry their own license files, and no data or weights license is inferred.
  Sources: https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/README.md (retrieved 2026-10-19T07:08:30Z; SHA-256 39e3df2f62f2c49750a52696e02228bafcc1c3cf02709e0a91cdc3f916c5ed97)
- https://api.github.com/repos/microsoft/FIVE-UI-Evol/git/trees/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1?recursive=1 (retrieved 2026-10-19T07:08:31Z; SHA-256 007edd511d3c42740788911931a51bcd3b2b07bd14e7c50032229454bd84eae5)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/InfiniteWeb/README.md (retrieved 2026-10-19T07:08:31Z; SHA-256 3395ff8d8158cd4e8956ab22af4b7d39e51a18f7959e80cd556d8f6a327fdc23)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-Evol/README.md (retrieved 2026-10-19T07:08:31Z; SHA-256 78e818f9bc5f109d478f66a9d530d2dc6ce8f031e753f1bf438a76b587c32948)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html (retrieved 2026-10-19T07:08:31Z; SHA-256 9ddfcc1e1898d61fa01197cdb0fafee7990cc92e3671c229ae83634330c66814)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/i2e-bench-eval.py (retrieved 2026-10-19T07:08:31Z; SHA-256 504f491e65b1d242644857d5c1ed2cdf86a6c214f252332d4b84a4f31adc6dbc)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE (retrieved 2026-10-19T07:08:31Z; SHA-256 b5cb7ff7859e7d282d98fc43ab081b0dda5dc659dc3385cf65740c759a7e6a6c)
- https://api.github.com/repos/microsoft/E2I-Synth (retrieved 2026-10-19T07:01:35Z; SHA-256 9432335b90bc431d85803ab4a6789b4a0bf350ac94ccc306bbcf49748e48af9f)
- https://api.github.com/repos/microsoft/FIVE-UI-Evol (retrieved 2026-10-19T07:01:36Z; SHA-256 9432335b90bc431d85803ab4a6789b4a0bf350ac94ccc306bbcf49748e48af9f)

---

## Floom OpenBrowser

OpenBrowser is an open-source browser automation broker managing persistent Chrome profiles and proxy-aware sessions for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-floomhq-openbrowser/
- Original source: https://github.com/floomhq/openbrowser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T16:10:38Z
- ID: github:floomhq/openbrowser

- Record JSON: https://awesomecua.com/resources/github-floomhq-openbrowser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/floomhq/openbrowser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/floomhq/openbrowser/HEAD/README.md (retrieved 2026-11-04T16:10:38Z; SHA-256 039db6a7c687bf37409308c16f05fe8b8f3d351e55e4e232702df7c6d6846b94)
- https://raw.githubusercontent.com/floomhq/openbrowser/HEAD/LICENSE (retrieved 2026-11-04T16:13:50Z; SHA-256 f8586307852e315464fc0f9bd2208d3acde9ade4d6ab340e4356eb8cb3d71ea4)

---

## flowcast

Records browser walkthroughs once, stores structured locator cues, and replays parameterized web workflows with self-healing recovery.

- Catalog URL: https://awesomecua.com/resources/github-supermarioyl-flowcast/
- Original source: https://github.com/SuperMarioYL/flowcast
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, workflow, robustness, web-navigation
- Evidence checked: 2026-11-04T16:30:13Z
- ID: github:supermarioyl/flowcast

- Record JSON: https://awesomecua.com/resources/github-supermarioyl-flowcast/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/SuperMarioYL/flowcast/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SuperMarioYL/flowcast/HEAD/README.md (retrieved 2026-11-04T16:30:13Z; SHA-256 23dc01afc8013ae2d46931a5c0c077d215999a3843368735f15d70fd80a64c06)
- https://raw.githubusercontent.com/SuperMarioYL/flowcast/HEAD/LICENSE (retrieved 2026-11-04T16:34:50Z; SHA-256 406fae957ab57f4bbd7d5e62b9bcc73bf59055f7c8244d44d63d5b5d78ba858d)

---

## FlowPilot Engine

Hybrid AI browser automation engine combining Claude's visual Computer Use API with deterministic Playwright execution.

- Catalog URL: https://awesomecua.com/resources/github-pensefact-flowpilot-engine/
- Original source: https://github.com/pensefact/flowpilot-engine
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, automation
- Evidence checked: 2026-11-04T18:11:42Z
- ID: github:pensefact/flowpilot-engine

- Record JSON: https://awesomecua.com/resources/github-pensefact-flowpilot-engine/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pensefact/flowpilot-engine/main/README.md (retrieved 2026-11-04T18:11:42Z; SHA-256 9b1416d51dfe0a287618cc803602ba1e04b96868c3d3d03972322d0481237f1b)

---

## FluidUse

Swift package for local computer use on Apple silicon that reads forms in running Mac apps or browsers through the Accessibility API and fills them with on-device Core ML decision models.

- Catalog URL: https://awesomecua.com/resources/github-fluidinference-fluiduse/
- Original source: https://github.com/FluidInference/FluidUse
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: action-prediction, automation, efficiency
- Evidence checked: 2026-10-20T08:08:40Z
- ID: github:fluidinference/fluiduse

### Limitations

Published by FluidInference; the package targets macOS 14 or later. AccessibilityFormDriver snapshots the focused window of another running app through the macOS Accessibility API into form elements addressed by tokens, writes values through AXValue and presses buttons and checkboxes with AXPress; for Safari, Chrome, Edge, Brave, Arc, Firefox and similar browsers it sends real key events instead, because those apply AXValue writes to the focused field. WebFormDriver does the same for an embedded WKWebView through an injected script. FormSchema renders each field's context and a fixed option list (fill Label: value for each document entity, check, click, skip) for a model to score, and decodes the chosen option into an action. The README's form model is CUA-S1-FORMS, a 706K-parameter form specialist from Cua converted to Core ML; its manager (CuaS1FormsManager) comes from the FluidAudio package dependency. Most of the package consists of on-device Core ML runtimes for general typed-decision, classification, embedding and OCR models (laya, GLiNER 2.5, Kev, Clef, Intern-Decision, SigLIP2 and others) and demos such as Tetris and 2048 players; their scope lies outside GUI operation. Latency and accuracy figures in the README are publisher measurements. Root LICENSE is Apache-2.0; the latest release, v0.3.0, predates the inspected commit.

- Record JSON: https://awesomecua.com/resources/github-fluidinference-fluiduse/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/README.md (retrieved 2026-10-20T08:08:40Z; SHA-256 0c3b0771185fe6e1d5678216114c0f486569fec847bd2139532a5b08576d00ad)
- https://api.github.com/repos/FluidInference/FluidUse/git/trees/cfba4d3fa4b996d0b680549416caf7aba6be770c?recursive=1 (retrieved 2026-10-20T08:08:00Z; SHA-256 6fb00b46f7bf8d56fd2c705149c9bb28ed28fcc8813c35fe66dbc0a1ae808624)
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/LICENSE (retrieved 2026-10-20T08:08:03Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Package.swift (retrieved 2026-10-20T08:08:04Z; SHA-256 91ce043b9db73c08b74fb52c08b1d04609e6878314133e7b9e187d5572761d8e)
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/AccessibilityFormDriver.swift (retrieved 2026-10-20T08:08:04Z; SHA-256 d6d1c1dc060787a10c4c0a3b94dfc5db4c2a4abebac01cbf2d2702056072c3e6)
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/WebFormDriver.swift (retrieved 2026-10-20T08:08:05Z; SHA-256 4b8ca4c8b1d8dd44ba58ce7643baf01889ff4c1169dcab5093785cceaad5031d)
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/FormSchema.swift (retrieved 2026-10-20T08:08:05Z; SHA-256 198047cfd5ce0e5f409c0ba4018f075cdff091eb13502cd1fafdcade9a53485b)
- https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/LICENSE (retrieved 2026-10-20T08:08:49Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## flutter_copilot

In-app SDK that exposes Flutter widget trees and semantic actions directly to AI agents without screenshots or OCR.

- Catalog URL: https://awesomecua.com/resources/github-anasfik-flutter-copilot/
- Original source: https://github.com/anasfik/flutter_copilot
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios, web, desktop
- Topics: mobile-navigation, tool-integration, ui-design
- Evidence checked: 2026-11-04T16:30:12Z
- ID: github:anasfik/flutter_copilot

- Record JSON: https://awesomecua.com/resources/github-anasfik-flutter-copilot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/anasfik/flutter_copilot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/anasfik/flutter_copilot/HEAD/README.md (retrieved 2026-11-04T16:30:12Z; SHA-256 66e465ec90cabf1bf032319531a3e7e9b82737b3635ac236e108e0fb9dae5700)
- https://raw.githubusercontent.com/anasfik/flutter_copilot/HEAD/LICENSE (retrieved 2026-11-04T16:34:50Z; SHA-256 1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685)

---

## forge (Readable ReAct Agent)

Modular Python ReAct agent framework with a 235-line core loop and 31 opt-in sandbox, browser, and computer-use modules.

- Catalog URL: https://awesomecua.com/resources/github-musokean-forge/
- Original source: https://github.com/musokean/forge
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: planning, sandbox, tool-integration, workflow
- Evidence checked: 2026-11-04T17:20:55Z
- ID: github:musokean/forge

- Record JSON: https://awesomecua.com/resources/github-musokean-forge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/musokean/forge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/musokean/forge/main/README.md (retrieved 2026-11-04T17:20:55Z; SHA-256 3a76d8b4484722010dd48408b73bd4b721167b5ef88cebfd37fa1fa85a25a430)
- https://raw.githubusercontent.com/musokean/forge/HEAD/LICENSE (retrieved 2026-11-04T17:26:51Z; SHA-256 3d390ccd68574b97d8c6eb24e805d048bfe065dfeea63ca0a0c6d599fa677472)

---

## Front-End Operation Master (FEOM)

Windows native UI automation framework and MCP server operating over UIA trees with zero vision tokens and ~3.9ms action latency.

- Catalog URL: https://awesomecua.com/resources/github-a92070888-dev-mcp-os-native-automation/
- Original source: https://github.com/a92070888-dev/mcp-os-native-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: efficiency, screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-04T16:30:15Z
- ID: github:a92070888-dev/mcp-os-native-automation

- Record JSON: https://awesomecua.com/resources/github-a92070888-dev-mcp-os-native-automation/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/a92070888-dev/mcp-os-native-automation/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/a92070888-dev/mcp-os-native-automation/HEAD/README.md (retrieved 2026-11-04T16:30:15Z; SHA-256 d7ebf5a5eb863eb6254f61a73a742eb8f208fdcb4e9620a61cd7ed5f3aa26b8c)
- https://raw.githubusercontent.com/a92070888-dev/mcp-os-native-automation/HEAD/LICENSE (retrieved 2026-11-04T16:34:53Z; SHA-256 afca6fb7b88d29087bab05c5ea27636372c93a0dcedee7dce5464486c1bf2f53)

---

## FSB (Full Self Browsing)

Full Self Browsing (FSB) is a DOM-first browser automation runtime for Chrome and MCP clients with structured page snapshots and action replay.

- Catalog URL: https://awesomecua.com/resources/github-fullselfbrowsing-fsb/
- Original source: https://github.com/fullselfbrowsing/FSB
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation, efficiency
- Evidence checked: 2026-11-04T15:03:31Z
- ID: github:fullselfbrowsing/fsb

- Record JSON: https://awesomecua.com/resources/github-fullselfbrowsing-fsb/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/fullselfbrowsing/FSB/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/fullselfbrowsing/FSB/HEAD/README.md (retrieved 2026-11-04T15:03:31Z; SHA-256 8238bdcf050ec0a2a1aea7fbd8c8b5c98974446f6e2fcff68731e9e6c3f47f2c)
- https://raw.githubusercontent.com/fullselfbrowsing/FSB/HEAD/LICENSE (retrieved 2026-11-04T15:22:46Z; SHA-256 1f197c458d402a510be823a43bfdab1e715d3300a7bf61ab2c1c31ee4163d032)

---

## FSoft HyperAgent

FSoft HyperAgent coordinates Planner, Navigator, Code Editor, and Executor agents for repository-level software engineering tasks.

- Catalog URL: https://awesomecua.com/resources/github-fsoft-ai4code-hyperagent/
- Original source: https://github.com/FSoft-AI4Code/HyperAgent
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: planning, workflow, tool-integration
- Evidence checked: 2026-11-04T13:12:14Z
- ID: github:fsoft-ai4code/hyperagent

- Record JSON: https://awesomecua.com/resources/github-fsoft-ai4code-hyperagent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/FSoft-AI4Code/HyperAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FSoft-AI4Code/HyperAgent/HEAD/README.md (retrieved 2026-11-04T13:12:14Z; SHA-256 5a699e973c889d4bfbc7f7aeaf61c4e208f08baf7106f8142218853ce40318c4)
- https://raw.githubusercontent.com/FSoft-AI4Code/HyperAgent/HEAD/LICENSE (retrieved 2026-11-04T13:42:05Z; SHA-256 df825c8e037af50d35015f3dc941f6565a7c28c3bbd8d4b85e5da4b494612024)

---

## G0DM0D3 AG3NT

Permission-first local AI control center for Windows orchestrating local models, desktop actions, and browser tools.

- Catalog URL: https://awesomecua.com/resources/github-cooding3d-g0dm0d3-ag3nt/
- Original source: https://github.com/cooding3d/G0DM0D3-AG3NT
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: safety-security, human-in-the-loop, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:31Z
- ID: github:cooding3d/g0dm0d3-ag3nt

- Record JSON: https://awesomecua.com/resources/github-cooding3d-g0dm0d3-ag3nt/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/cooding3d/G0DM0D3-AG3NT/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cooding3d/G0DM0D3-AG3NT/main/README.md (retrieved 2026-11-04T18:11:31Z; SHA-256 d21b135ccf6c061664b0fbd7d9acfffe78ddbdb801427472413ac118ba7bca9e)
- https://raw.githubusercontent.com/cooding3d/G0DM0D3-AG3NT/HEAD/LICENSE (retrieved 2026-11-04T18:16:17Z; SHA-256 0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0)

---

## Ghost in the Minecraft (GITM)

Ghost in the Minecraft (GITM) integrates LLMs with text-based knowledge and memory to complete the full Minecraft technology tree.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-gitm/
- Original source: https://github.com/OpenGVLab/GITM
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: planning, memory, long-horizon
- Evidence checked: 2026-11-04T13:12:30Z
- ID: github:opengvlab/gitm

- Record JSON: https://awesomecua.com/resources/github-opengvlab-gitm/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/GITM/HEAD/README.md (retrieved 2026-11-04T13:12:30Z; SHA-256 77e2228c1a3566ec3a38aafe8a3aad43229a5edb637cdf4abed0f0a4401ac3bf)

---

## Ghost Semantic OS

Ghost Semantic OS provides a text-only semantic accessibility runtime for operating Linux desktop applications in OSWorld without screenshots.

- Catalog URL: https://awesomecua.com/resources/github-zainmfjavaid-ghost-semantic-os/
- Original source: https://github.com/zainmfjavaid/ghost-semantic-os
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: screen-understanding, efficiency, sandbox
- Evidence checked: 2026-11-04T14:20:10Z
- ID: github:zainmfjavaid/ghost-semantic-os

- Record JSON: https://awesomecua.com/resources/github-zainmfjavaid-ghost-semantic-os/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zainmfjavaid/ghost-semantic-os/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zainmfjavaid/ghost-semantic-os/HEAD/README.md (retrieved 2026-11-04T14:20:10Z; SHA-256 292cc658ea62bce916daa2d1cb4510c6a1107b7e8db1b0c300c18c228bcf809a)
- https://raw.githubusercontent.com/zainmfjavaid/ghost-semantic-os/HEAD/LICENSE (retrieved 2026-11-04T14:23:59Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## Glass Hands

Glass Hands is a Rust framework that connects OpenAI computer-use models directly to Chromium via the Chrome DevTools Protocol.

- Catalog URL: https://awesomecua.com/resources/github-sachaarbonel-glass-hands/
- Original source: https://github.com/sachaarbonel/glass-hands
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:sachaarbonel/glass-hands

- Record JSON: https://awesomecua.com/resources/github-sachaarbonel-glass-hands/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sachaarbonel/glass-hands/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 26db4a9075043ca087d212d36f8c7025abed17765eac7666f752cbb1a2241540)

---

## Glyph Motion Studio for WebMCP

WebMCP-native GSAP animation studio where browser agents safely co-direct and verify web motion timelines.

- Catalog URL: https://awesomecua.com/resources/github-varun-a-1010-glyph-motion-studio-webmcp/
- Original source: https://github.com/varun-a-1010/glyph-motion-studio-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: ui-design, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:39Z
- ID: github:varun-a-1010/glyph-motion-studio-webmcp

- Record JSON: https://awesomecua.com/resources/github-varun-a-1010-glyph-motion-studio-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/varun-a-1010/glyph-motion-studio-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/varun-a-1010/glyph-motion-studio-webmcp/main/README.md (retrieved 2026-11-04T18:11:39Z; SHA-256 e9659fb6a000340b95393d6f6fafdb8b8b4584496970f3c0ee3ba91b69efdfdb)
- https://raw.githubusercontent.com/varun-a-1010/glyph-motion-studio-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:34Z; SHA-256 e1335393fe94042b14bb0b25b69487877ffb797f51445ab4d3c9a2ec28fe20a8)

---

## GoSosmed Mobile Agent

Android AccessibilityService automation engine and control dashboard for managing multi-device mobile workflows.

- Catalog URL: https://awesomecua.com/resources/github-dedy45-gososmed-mobile-agent/
- Original source: https://github.com/dedy45/gososmed-mobile-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, automation, workflow
- Evidence checked: 2026-11-04T17:55:19Z
- ID: github:dedy45/gososmed-mobile-agent

- Record JSON: https://awesomecua.com/resources/github-dedy45-gososmed-mobile-agent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/dedy45/gososmed-mobile-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dedy45/gososmed-mobile-agent/main/README.md (retrieved 2026-11-04T17:55:19Z; SHA-256 e7c73bbdef1375df1b2d78798a92e432832b2b526aeec5565f570a9387826969)
- https://raw.githubusercontent.com/dedy45/gososmed-mobile-agent/HEAD/LICENSE (retrieved 2026-11-04T18:00:07Z; SHA-256 59267fa4a401db15256c46af9c10cf851eb2bc8fa75c5f5441b7e9f9a3b29cd8)

---

## governed-computer-use

Discovers legacy banking UI flows with an LLM once, compiles deterministic replay artifacts, and enforces human approval on exceptions.

- Catalog URL: https://awesomecua.com/resources/github-mkhan49-governed-computer-use/
- Original source: https://github.com/mkhan49/governed-computer-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: workflow, safety-security, human-in-the-loop, automation
- Evidence checked: 2026-11-04T14:41:50Z
- ID: github:mkhan49/governed-computer-use

- Record JSON: https://awesomecua.com/resources/github-mkhan49-governed-computer-use/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mkhan49/governed-computer-use/HEAD/README.md (retrieved 2026-11-04T14:41:50Z; SHA-256 303b3559cc176203fa654221123475d460ca4a6d48fb03a6db98e67f2de5cfcb)

---

## Grounded Language Agent for Product Search

Provides training and evaluation code for unsupervised web product-search agents on WebShop using symbolic actions and value-guided search.

- Catalog URL: https://awesomecua.com/resources/github-multifacetednlp-web-agents-unsupervised/
- Original source: https://github.com/MultifacetedNLP/Web-Agents-Unsupervised
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reinforcement-learning
- Evidence checked: 2026-11-04T13:12:26Z
- ID: github:multifacetednlp/web-agents-unsupervised

- Record JSON: https://awesomecua.com/resources/github-multifacetednlp-web-agents-unsupervised/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MultifacetedNLP/Web-Agents-Unsupervised/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MultifacetedNLP/Web-Agents-Unsupervised/HEAD/README.md (retrieved 2026-11-04T13:12:26Z; SHA-256 44e3a559c2fe3ee45ead21c76f9052b6110a69a29f6f282fd86e2374d1a2ec8d)
- https://raw.githubusercontent.com/MultifacetedNLP/Web-Agents-Unsupervised/HEAD/LICENSE.md (retrieved 2026-11-04T13:41:48Z; SHA-256 1051c8cc56973ac52ca89b6b38d755db36f470799b986ecca51b7f4456747cc7)

---

## GUI Agent Framework

Modular block-based GUI automation framework combining VLM screen perception, LLM planning, Playwright browser control, and desktop actuation.

- Catalog URL: https://awesomecua.com/resources/github-sjkncs-gui-agent-framework/
- Original source: https://github.com/sjkncs/gui-agent-framework
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: planning, grounding, web-navigation, automation
- Evidence checked: 2026-11-04T14:41:51Z
- ID: github:sjkncs/gui-agent-framework

- Record JSON: https://awesomecua.com/resources/github-sjkncs-gui-agent-framework/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sjkncs/gui-agent-framework/HEAD/README.md (retrieved 2026-11-04T14:41:51Z; SHA-256 92de9a20b25d487caebc13d6d2f919c4aff14b783a77085ef695241e1471e3dd)

---

## GUI-CIDER research code

Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.

- Catalog URL: https://awesomecua.com/resources/github-wuzheng02-gui-cider/
- Original source: https://github.com/Wuzheng02/GUI-CIDER
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, imitation-learning, planning
- Evidence checked: 2026-10-17T11:18:20Z
- ID: github:wuzheng02/gui-cider

### Limitations

The source tree contains static/causal knowledge synthesis and action/knowledge evaluation scripts. Training procedures are delegated to LLaMA-Factory; no trained checkpoint is verified here. The README displays an MIT badge, but the inspected tree has no license file and no explicit component scope, so the code license remains unrecorded rather than assuming a blanket grant. Evaluation requires separately acquired original datasets and model paths.

- Record JSON: https://awesomecua.com/resources/github-wuzheng02-gui-cider/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/README.md (retrieved 2026-10-17T11:18:20Z; SHA-256 9a46741bbde1373ed4b87887cdadde98e05ea8795d34efe39fc25d69b4d50213)
- https://api.github.com/repos/Wuzheng02/GUI-CIDER (retrieved 2026-10-17T11:18:20Z; SHA-256 ae1d5687a72a39eacbf4fe281b5048914e98adf7cc1517481a5acc8a56a81446)
- https://api.github.com/repos/Wuzheng02/GUI-CIDER/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:59Z; SHA-256 355128b62a281074eebc14a1e3b85a260f06c2bf3c1a6ed140cba3b9aefaa76c)
- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/data/dataset.md (retrieved 2026-10-17T11:24:47Z; SHA-256 bffca456e649a08239f6a1a3be10a7d7c21bcb427e783ba2c304e4b8410d385a)

---

## GUI-HARVEST

Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.

- Catalog URL: https://awesomecua.com/resources/github-garyyang12345-gui-harvest/
- Original source: https://github.com/GaryYang12345/GUI-HARVEST
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: automation, observability, robustness
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:garyyang12345/gui-harvest

### Limitations

Requires a separately installed benchmark and seed agent harness; benchmark tasks and model weights remain fixed during its optimization procedure.

- Record JSON: https://awesomecua.com/resources/github-garyyang12345-gui-harvest/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/GaryYang12345/GUI-HARVEST/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/GaryYang12345/GUI-HARVEST/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 2e42f01578710d91145412f7d1ecb93979db96c698f677915284da1a1d592588)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=0&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:29Z; SHA-256 74e521e46c46489e48f9bad5d774625a85b5ccd32828969fd98e1a4c453b899f)
- https://raw.githubusercontent.com/GaryYang12345/GUI-HARVEST/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## GUI-RC / GUI-RCPO

GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.

- Catalog URL: https://awesomecua.com/resources/github-zju-real-gui-rcpo/
- Original source: https://github.com/ZJU-REAL/GUI-RCPO
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, reinforcement-learning, efficiency
- Evidence checked: 2026-10-17T12:30:55Z
- ID: github:zju-real/gui-rcpo

### Limitations

The tree contains GUI-RC evaluation code and VLM-R1-based training scripts, with example JSONL-format paths. It requires separately supplied models and benchmark images; no released trained checkpoint is established here. Apache-2.0 files exist inside VLM-R1 subdirectories, but no repository-wide license is present for all newly added code, so the code slot remains unknown and the component notices are retained.

- Record JSON: https://awesomecua.com/resources/github-zju-real-gui-rcpo/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Only subdirectory Apache-2.0 notices were established; no blanket project-source declaration is inferred.
  Sources: https://api.github.com/repos/ZJU-REAL/GUI-RCPO/git/trees/main?recursive=1, https://raw.githubusercontent.com/ZJU-REAL/GUI-RCPO/HEAD/VLM-R1/LICENSE, https://raw.githubusercontent.com/ZJU-REAL/GUI-RCPO/HEAD/VLM-R1/src/open-r1-multimodal/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/zju-real/gui-rcpo/HEAD/README.md (retrieved 2026-10-17T12:30:55Z; SHA-256 41c235305d28f6ba77ba1c5d1d9298fd6b1bd68ae3c9ea97eb34a8d22d0ba1dc)
- https://api.github.com/repos/zju-real/gui-rcpo (retrieved 2026-10-17T12:30:55Z; SHA-256 f5823de05f4828a8ab367ef13ec3a8338e020f0876e153ac2e944e4eb0e242c0)
- https://api.github.com/repos/ZJU-REAL/GUI-RCPO/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:06Z; SHA-256 98ed8f0fa50699b8a3d0e8a71cd008113009a3072b971b8fadf2b92f68877e1e)
- https://raw.githubusercontent.com/ZJU-REAL/GUI-RCPO/HEAD/VLM-R1/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/ZJU-REAL/GUI-RCPO/HEAD/VLM-R1/src/open-r1-multimodal/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## GUI-ReWalk

A desktop trajectory-generation framework that moves from stochastic GUI exploration to inferred goals and multi-stage task completion, with retrospective reasoning annotations.

- Catalog URL: https://awesomecua.com/resources/github-bytedance-gui-rewalk/
- Original source: https://github.com/bytedance/GUI-ReWalk
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: data-generation, planning, cross-app
- Evidence checked: 2026-10-17T09:12:15Z
- ID: github:bytedance/gui-rewalk

### Limitations

The inspected source tree contains the random walker, desktop environment integration and run_rewalk.sh. The documented runnable setup uses OSWorld and OmniParser. The README also discusses mobile data and a GUI-ReWalk-7B model. Apache-2.0 is scoped to the implementation.

- Record JSON: https://awesomecua.com/resources/github-bytedance-gui-rewalk/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/bytedance/GUI-ReWalk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code license; no scope transfer to generated trajectories, pretrained detector weights, or GUI application content.
  Sources: https://raw.githubusercontent.com/bytedance/GUI-ReWalk/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/bytedance/GUI-ReWalk/HEAD/README.md (retrieved 2026-10-17T09:12:15Z; SHA-256 63708cb2500aefa36916f3fb171b595efaabf614f17b925cfe8b5c8cbf72be10)
- https://api.github.com/repos/bytedance/GUI-ReWalk (retrieved 2026-10-17T09:12:15Z; SHA-256 34addf6eed41e1e29e51aab8819c5ac316b5699a8c11c4ce29a32c8e38557de8)
- https://api.github.com/repos/bytedance/GUI-ReWalk/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:07Z; SHA-256 a218cb6f8a2c2a243e8207785c98255bf717c00f177521368705d8652e229d7d)
- https://raw.githubusercontent.com/bytedance/GUI-ReWalk/HEAD/LICENSE (retrieved 2026-10-17T09:14:08Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## GUI-Shift

GUI-Shift is a training framework that uses pairs of GUI screenshots to teach vision-language models to predict the action behind an interface transition.

- Catalog URL: https://awesomecua.com/resources/github-ubiquitouslearning-gui-shift/
- Original source: https://github.com/UbiquitousLearning/GUI-Shift
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reinforcement-learning, action-prediction, grounding
- Evidence checked: 2026-11-09T06:16:36Z
- ID: github:ubiquitouslearning/gui-shift

### Limitations

The repository documents the initial UIShift training pipeline and scripts in legacy_readme.md. Its README says updated GUI-Shift training code and models are planned for release.

- Record JSON: https://awesomecua.com/resources/github-ubiquitouslearning-gui-shift/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UbiquitousLearning/GUI-Shift/HEAD/README.md (retrieved 2026-11-09T06:16:36Z; SHA-256 0b64d4e86fd79bf5493246e9399871ccb8406ead78439b679f3a42bffe726227)

---

## GUI-Trajectory-Virtual

Synthesizes Android agent trajectories without a device: an image model behind a chat-completions API draws each next screen from the previous screenshot and the action chosen by a Mobile-Agent-v3-style agent.

- Catalog URL: https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/
- Original source: https://github.com/Futuresis/GUI-Trajectory-Virtual
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, world-models, mobile-navigation
- Evidence checked: 2026-10-18T15:56:30Z
- ID: github:futuresis/gui-trajectory-virtual

### Limitations

The README says its arXiv paper is still to come; the GUIGuard project page presents this repository as that paper's trajectory-synthesis workflow, which is the basis for the paper link. In virtual_env_gemini3.py each step sends the previous screenshot and an action description to a chat-completions endpoint and decodes the returned image as the next screen; the code's default model is google/gemini-2.0-flash-exp:free, while the README examples use google/gemini-3-pro-image-preview. The adapter mocks the accessibility tree and ADB calls. The runner defines 57 social-app task goals whose simplified task class reports success as 1.0 without a check; generated trajectories therefore have unverified outcomes. Nothing was run.

- Record JSON: https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/README.md (retrieved 2026-10-18T15:56:30Z; SHA-256 2262044b993d01ef4833e28511f2646983e2ae3df2e1ae097eef6896062aa87a)
- https://futuresis.github.io/GUIGuard-page/ (retrieved 2026-10-18T15:54:36Z; SHA-256 14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_gemini3.py (retrieved 2026-10-18T15:54:39Z; SHA-256 5c53724751a6bbd86773179aa3aaad8fc8ae7564d1aaa00167e7fcd4caddc870)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/run_virtual.py (retrieved 2026-10-18T15:54:39Z; SHA-256 fb3ce0feb35566cd2ad2913794cb6983d7a949540e8f1a03fef58e81cce2f931)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_adapter.py (retrieved 2026-10-18T15:56:05Z; SHA-256 e5d4dd12b9562aa48cc6ca641d717633796ea18fa50715570d69e0b5b06def70)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/agent_env/task_evals/single/contacts.py (retrieved 2026-10-18T15:54:40Z; SHA-256 b668a60fd31dc89b7e493585ff1bf4966a3fbd6c8a77da10adaa2f4727133be6)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE (retrieved 2026-10-18T15:56:48Z; SHA-256 0b7f2e6ad1dbbf5989c34b34a71da4a9b7271b2356715fb007a009ec73d1b705)

---

## GUIPivot

Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.

- Catalog URL: https://awesomecua.com/resources/github-zrw00-guipivot/
- Original source: https://github.com/ZrW00/GUIPivot
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, planning, imitation-learning
- Evidence checked: 2026-10-18T12:02:55.267942+00:00
- ID: github:zrw00/guipivot

### Limitations

The repository releases preprocessing/refinement/evaluation code and multipart ShareGPT-format JSON annotations. Evaluation matches recorded single-step action predictions on AndroidControl and AITZ. The README links a UIBERT training-JSON path, while annotations in this revision are packaged in data/GUI.z01, data/GUI.z02 and data/GUI.zip. Original UIBERT/OS-Atlas, AITZ and AndroidControl images must be obtained separately. The repository releases preprocessing/refinement/evaluation code and annotations; trained checkpoint status and third-party image rights remain separate.

- Record JSON: https://awesomecua.com/resources/github-zrw00-guipivot/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository GNU GPL version 3 license for code; no data or pretrained-weight license inferred.
  Sources: https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/README.md (retrieved 2026-10-18T12:02:55.267942+00:00; SHA-256 77384ff1dfceac74f2e60af56b016a815963481f9e41a29915698777f55e828e)
- https://api.github.com/repos/ZrW00/GUIPivot (retrieved 2026-10-18T11:25:27+00:00; SHA-256 3d57dc43db78620832e41416e4bfb7ae445afe782e5538d85a9784a8f1e5e4eb)
- https://api.github.com/repos/ZrW00/GUIPivot/git/trees/b02e8efdbe02ab82169a2c54d724e33b4037330e?recursive=1 (retrieved 2026-10-18T12:02:54.310430+00:00; SHA-256 a4d3ddbb2b2f4a936c9bc1a1c388b9870dbc5d2c61ff6841a1082b884f5c54e9)
- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE (retrieved 2026-10-18T12:03:28.611747+00:00; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)
- https://arxiv.org/html/2503.00401v2 (retrieved 2026-10-18T12:02:36.501726+00:00; SHA-256 25e5282e7d85bca133fc77e294cd95d90e4ae65b0d8796cd7c49f53a633b4893)
- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/data/dataset_info.json (retrieved 2026-10-18T12:03:30.911159+00:00; SHA-256 9b5b196e065be2ebc05169a68710b8a6e1bd3b6eb663c68bb449234dbb7a45af)

---

## HAICOSYSTEM

HAICOSYSTEM simulates multi-turn interactions between human users, tool-using LLM agents, and environment sandboxes to evaluate safety risks.

- Catalog URL: https://awesomecua.com/resources/github-xuhuizhou-haicosystem/
- Original source: https://github.com/XuhuiZhou/HAICosystem
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: safety-security, sandbox, evaluation
- Evidence checked: 2026-11-04T13:12:45Z
- ID: github:xuhuizhou/haicosystem

- Record JSON: https://awesomecua.com/resources/github-xuhuizhou-haicosystem/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/XuhuiZhou/HAICosystem/HEAD/README.md (retrieved 2026-11-04T13:12:45Z; SHA-256 77a2500dd9bf645fc05f79bc57321fb9df7e6e3a904e57be12451024d187df34)

---

## Handrail CUA

Discover-once, replay-many computer-use automation framework with deterministic execution guardrails.

- Catalog URL: https://awesomecua.com/resources/github-codelit-io-handrail-cua/
- Original source: https://github.com/codelit-io/handrail-cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, safety-security, efficiency, automation
- Evidence checked: 2026-11-04T17:55:08Z
- ID: github:codelit-io/handrail-cua

- Record JSON: https://awesomecua.com/resources/github-codelit-io-handrail-cua/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/codelit-io/handrail-cua/main/README.md (retrieved 2026-11-04T17:55:08Z; SHA-256 5a55bb7f0a244875c2c5cb29f06db27d757c1511ea8e3a94323e8ace74653fdc)

---

## hands-off

hands-off discovers UI workflows in legacy back-office software without APIs and compiles them into deterministic replay scripts.

- Catalog URL: https://awesomecua.com/resources/github-niramay-kelkar-hands-off/
- Original source: https://github.com/Niramay-Kelkar/hands-off
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: workflow, imitation-learning, automation, robustness
- Evidence checked: 2026-11-04T14:41:52Z
- ID: github:niramay-kelkar/hands-off

- Record JSON: https://awesomecua.com/resources/github-niramay-kelkar-hands-off/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Niramay-Kelkar/hands-off/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Niramay-Kelkar/hands-off/HEAD/README.md (retrieved 2026-11-04T14:41:52Z; SHA-256 fd50ad1ce28a70a518899b11fdfed850bde1f348d7ed3b161e501a6649ac41e4)
- https://raw.githubusercontent.com/Niramay-Kelkar/hands-off/HEAD/LICENSE (retrieved 2026-11-04T14:45:25Z; SHA-256 99f0a5c64f7d7998f8a6f4dc4c8acd634f9d518ec37de76a8d18e54e002b679f)

---

## HarmonyGuard

HarmonyGuard enforces adaptive safety policies and dual-objective utility-security optimization for autonomous web and computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-yurunchen-harmonyguard/
- Original source: https://github.com/YurunChen/HarmonyGuard
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, web-navigation
- Evidence checked: 2026-11-04T13:12:48Z
- ID: github:yurunchen/harmonyguard

- Record JSON: https://awesomecua.com/resources/github-yurunchen-harmonyguard/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/YurunChen/HarmonyGuard/HEAD/readme.md (retrieved 2026-11-04T13:12:48Z; SHA-256 728f7cc0c49e5cb92608accdd1759247ac42cd527661c003c07ddf9df4883b0b)

---

## HarvestNet

Self-healing web extraction and browser automation framework for .NET.

- Catalog URL: https://awesomecua.com/resources/github-lethe044-harvestnet/
- Original source: https://github.com/Lethe044/HarvestNet
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, self-reflection, web-navigation, data-generation
- Evidence checked: 2026-11-04T17:55:23Z
- ID: github:lethe044/harvestnet

- Record JSON: https://awesomecua.com/resources/github-lethe044-harvestnet/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Lethe044/HarvestNet/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Lethe044/HarvestNet/main/README.md (retrieved 2026-11-04T17:55:23Z; SHA-256 f679a448949351ab91704e9294900319edc19d41ef3a101a29e731f69ee68575)
- https://raw.githubusercontent.com/Lethe044/HarvestNet/HEAD/LICENSE (retrieved 2026-11-04T18:00:15Z; SHA-256 2ecc0bfcfe89c589c4b3a7898d621a10cd0f2662c74c0fb370fb86cef7755efb)

---

## headless-use

Headless Linux browser runtime and CLI giving coding agents a real Chromium browser with persistent sessions.

- Catalog URL: https://awesomecua.com/resources/github-flyingsquirrel0419-headless-use/
- Original source: https://github.com/flyingsquirrel0419/headless-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, linux
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T16:51:49Z
- ID: github:flyingsquirrel0419/headless-use

- Record JSON: https://awesomecua.com/resources/github-flyingsquirrel0419-headless-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/flyingsquirrel0419/headless-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/flyingsquirrel0419/headless-use/HEAD/README.md (retrieved 2026-11-04T16:51:49Z; SHA-256 c29a4095dd648fddf497726bdc782b18a76ae538ccb5e141b06352b033a0b28a)
- https://raw.githubusercontent.com/flyingsquirrel0419/headless-use/HEAD/LICENSE (retrieved 2026-11-04T16:56:42Z; SHA-256 49d469b4b71aed3b63fb25545187d0a86e8439741c87b0683ca28c12f485b400)

---

## HelpRelay WebMCP

Dependency-free WebMCP collaboration runtime enabling human operators and browser agents to co-navigate web tasks safely.

- Catalog URL: https://awesomecua.com/resources/github-akigarage-helprelay-webmcp/
- Original source: https://github.com/AkiGarage/helprelay-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, safety-security, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:30:45Z
- ID: github:akigarage/helprelay-webmcp

- Record JSON: https://awesomecua.com/resources/github-akigarage-helprelay-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/AkiGarage/helprelay-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AkiGarage/helprelay-webmcp/main/README.md (retrieved 2026-11-04T17:30:45Z; SHA-256 3a3c333f5e79fbb9e09b7888ff73b17227b48515f730438a46c0ce721139d53a)
- https://raw.githubusercontent.com/AkiGarage/helprelay-webmcp/HEAD/LICENSE (retrieved 2026-11-04T17:39:46Z; SHA-256 9d4d8393ea01d8d852bcdab5d3a6c4eafc03459868a97ad65590bf8a6c9fa436)

---

## HeySnap

AI-first workspace for capturing files, documents, and live browser context into structured agent memory.

- Catalog URL: https://awesomecua.com/resources/github-dhamani-aryan-heysnap/
- Original source: https://github.com/Dhamani-aryan/heysnap
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: memory, screen-understanding, tool-integration, workflow
- Evidence checked: 2026-11-04T17:55:25Z
- ID: github:dhamani-aryan/heysnap

- Record JSON: https://awesomecua.com/resources/github-dhamani-aryan-heysnap/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Dhamani-aryan/heysnap/main/README.md (retrieved 2026-11-04T17:55:25Z; SHA-256 12957bcbc0cee686ed4b2d787cdc7741bf8a15eb6743792ef971aefb91a9e8e3)

---

## HiconAgent

HiconAgent provides GUI-policy training code that samples histories of varied lengths and compresses past interactions during policy optimization.

- Catalog URL: https://awesomecua.com/resources/github-ilearn-lab-cvpr26-hiconagent/
- Original source: https://github.com/iLearn-Lab/CVPR26-HiconAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: interaction-history, reinforcement-learning, efficiency
- Evidence checked: 2026-11-09T06:16:39Z
- ID: github:ilearn-lab/cvpr26-hiconagent

### Limitations

The README provides dependency setup and a training command, and directs users to prepare Qwen2.5-VL-3B model directories. It links a separate dataset.

- Record JSON: https://awesomecua.com/resources/github-ilearn-lab-cvpr26-hiconagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/iLearn-Lab/CVPR26-HiconAgent/HEAD/README.md (retrieved 2026-11-09T06:16:39Z; SHA-256 af4c1af50ebf4ddab536b1a00664759698c61bf20f35400b95c043a81315715d)

---

## Hoverclick

Hoverclick introduces test-time cursor hover verification and visual attention guidance before committing GUI click actions.

- Catalog URL: https://awesomecua.com/resources/github-neilyysun-ui-hoverclick/
- Original source: https://github.com/neilyysun-ui/Hoverclick
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, training-free, self-reflection
- Evidence checked: 2026-11-04T14:20:10Z
- ID: github:neilyysun-ui/hoverclick

- Record JSON: https://awesomecua.com/resources/github-neilyysun-ui-hoverclick/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/neilyysun-ui/Hoverclick/HEAD/README.md (retrieved 2026-11-04T14:20:10Z; SHA-256 02e51a3001b22d9661841a7ba88b92f4d57c4bc62b47d9ed58e092055fddd6a2)

---

## HUD

SDK for RL environments and evals spanning coding, browser, computer-use and robotics agents, whose environments expose SSH, MCP, CDP or VNC capabilities behind a minimal start-and-grade protocol.

- Catalog URL: https://awesomecua.com/resources/github-hud-evals-hud-python/
- Original source: https://github.com/hud-evals/hud-python
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, reinforcement-learning
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:hud-evals/hud-python

- Record JSON: https://awesomecua.com/resources/github-hud-evals-hud-python/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hud-evals/hud-python/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hud-evals/hud-python/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 3ef331612819a006d4279ac59203971a22a56fb6d9a0047f85a82668d09c327b)
- https://raw.githubusercontent.com/hud-evals/hud-python/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c88cc185e5547fce850b56f3b4072bed161658dc7277707e509437b9d760d470)

---

## Human-Browser

Vision-driven browser automation service where an external LLM sets high-level goals and a visual browser assistant executes them.

- Catalog URL: https://awesomecua.com/resources/github-hterzia-human-browser/
- Original source: https://github.com/hterzia/human-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, automation
- Evidence checked: 2026-11-04T16:30:17Z
- ID: github:hterzia/human-browser

- Record JSON: https://awesomecua.com/resources/github-hterzia-human-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hterzia/human-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hterzia/human-browser/HEAD/README.md (retrieved 2026-11-04T16:30:17Z; SHA-256 e1de0cd1517ef7464113b0109ce7f3d8bdb728f27fa34b09e43b1c09ad6070b9)
- https://raw.githubusercontent.com/hterzia/human-browser/HEAD/LICENSE (retrieved 2026-11-04T16:34:54Z; SHA-256 f6ea8a6cfba6c49dc62aae95d1e93b79b5d1ccc9646d9a1df382f03e9258ee8a)

---

## HumanAIE (Human AI Eyes)

HumanAIE is a shared browser workspace for human-AI collaboration where users highlight visual regions and co-steer web agents.

- Catalog URL: https://awesomecua.com/resources/github-datboip-humanaie/
- Original source: https://github.com/datboip/HumanAIE
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, web-navigation, screen-understanding
- Evidence checked: 2026-11-04T15:45:54Z
- ID: github:datboip/humanaie

- Record JSON: https://awesomecua.com/resources/github-datboip-humanaie/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/datboip/HumanAIE/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/datboip/HumanAIE/HEAD/README.md (retrieved 2026-11-04T15:45:54Z; SHA-256 598505f0158af9548115d32fdb4b542489f16cd2d8fb52dba4569417b2ecfcfd)
- https://raw.githubusercontent.com/datboip/HumanAIE/HEAD/LICENSE (retrieved 2026-11-04T15:57:40Z; SHA-256 1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685)

---

## hwatu

Headless verification browser for AI coding agents featuring 35ms one-call UI checks and pixel diffing.

- Catalog URL: https://awesomecua.com/resources/github-hongnoul-hwatu/
- Original source: https://github.com/hongnoul/hwatu
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, screen-understanding, efficiency, web-navigation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:hongnoul/hwatu

- Record JSON: https://awesomecua.com/resources/github-hongnoul-hwatu/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hongnoul/hwatu/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hongnoul/hwatu/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 3092df2e13d30ac16336e72694184e7af1cf4dcea672444108b6788978e1d024)
- https://raw.githubusercontent.com/hongnoul/hwatu/HEAD/LICENSE (retrieved 2026-11-04T16:56:37Z; SHA-256 d0c82f353122657829849a9d770e0805efb692454ea2f32ac1ee238904ba010f)

---

## InnerOS WebMCP

Capability-bounded WebMCP browser control surface for the InnerOS local AI runtime.

- Catalog URL: https://awesomecua.com/resources/github-rafa-innerchispa-inneros-webmcp/
- Original source: https://github.com/Rafa-Innerchispa/inneros-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:rafa-innerchispa/inneros-webmcp

- Record JSON: https://awesomecua.com/resources/github-rafa-innerchispa-inneros-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Rafa-Innerchispa/inneros-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Rafa-Innerchispa/inneros-webmcp/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 708a125f4833a3a229c6e75d9af36a2a6203c75e47a1ec9d9d944ab7128ddf3b)
- https://raw.githubusercontent.com/Rafa-Innerchispa/inneros-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:31Z; SHA-256 c6c49d6f42f1d537cf7a98f35ad546d3233723934db206df34880d7101e65b78)

---

## Inside the Agent (SAE Browser Harness)

Reproducible harness for Sparse Autoencoder (SAE) feature steering and live interpretability monitoring of browser agents.

- Catalog URL: https://awesomecua.com/resources/github-kalyvask-inside-the-agent/
- Original source: https://github.com/kalyvask/inside-the-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: observability, evaluation, web-navigation, safety-security
- Evidence checked: 2026-11-04T16:10:37Z
- ID: github:kalyvask/inside-the-agent

- Record JSON: https://awesomecua.com/resources/github-kalyvask-inside-the-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/kalyvask/inside-the-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kalyvask/inside-the-agent/HEAD/README.md (retrieved 2026-11-04T16:10:37Z; SHA-256 af455ed749a554fff1fd987bc25830cc3e683f5efe1b9899dabdb0379b1d136d)
- https://raw.githubusercontent.com/kalyvask/inside-the-agent/HEAD/LICENSE (retrieved 2026-11-04T16:13:49Z; SHA-256 62b16b81989989ca3655ccff8705e592e0972be5597f6882da97d3d84e589ef0)

---

## Intent Browser Runtime (ibr)

Intent Browser Runtime (ibr) translates natural-language instructions into resilient XPath/DOM actions using Playwright and Vercel AI SDK.

- Catalog URL: https://awesomecua.com/resources/github-hop-top-ibr/
- Original source: https://github.com/hop-top/ibr
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, automation, efficiency
- Evidence checked: 2026-11-04T15:03:39Z
- ID: github:hop-top/ibr

- Record JSON: https://awesomecua.com/resources/github-hop-top-ibr/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hop-top/ibr/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hop-top/ibr/HEAD/README.md (retrieved 2026-11-04T15:03:39Z; SHA-256 f17ec7f0bec730e44cf09d77b87e13d2ba060f24146466a42c44ff3145eb1566)
- https://raw.githubusercontent.com/hop-top/ibr/HEAD/LICENSE (retrieved 2026-11-04T15:22:52Z; SHA-256 577023e1613bbc1c5c8f02fb19885be05462ab707ada8efd938958e70a963283)

---

## Intent Relay WebMCP

Demonstration-driven intent translator that carries user workflow preferences across WebMCP-enabled websites.

- Catalog URL: https://awesomecua.com/resources/github-midorikuramochi-intent-relay/
- Original source: https://github.com/midorikuramochi/intent-relay
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: imitation-learning, tool-integration, web-navigation, workflow
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:midorikuramochi/intent-relay

- Record JSON: https://awesomecua.com/resources/github-midorikuramochi-intent-relay/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/midorikuramochi/intent-relay/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/midorikuramochi/intent-relay/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 57e1eba79bf72dcf6c48b66ce7f2687c979d448cf5749c81c2a229f590019d57)
- https://raw.githubusercontent.com/midorikuramochi/intent-relay/HEAD/LICENSE (retrieved 2026-11-04T18:16:26Z; SHA-256 4ce962e636c1e0debf8ff5a318b3f1aa68c47bc821629173979cef63a19b105e)

---

## Internet of Agents (IoA)

Internet of Agents (IoA) is a distributed framework for orchestrating heterogeneous multi-agent collaboration across devices and tools.

- Catalog URL: https://awesomecua.com/resources/github-openbmb-ioa/
- Original source: https://github.com/OpenBMB/IoA
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: desktop, web
- Topics: workflow, tool-integration, planning
- Evidence checked: 2026-11-04T13:12:29Z
- ID: github:openbmb/ioa

- Record JSON: https://awesomecua.com/resources/github-openbmb-ioa/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenBMB/IoA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenBMB/IoA/HEAD/README.md (retrieved 2026-11-04T13:12:29Z; SHA-256 28f5e1812ebe693b4637d6d4e8a9ea81106366e1e18b3ab6d90b683acb18e76f)
- https://raw.githubusercontent.com/OpenBMB/IoA/HEAD/LICENSE (retrieved 2026-11-04T13:23:13Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## invisible_dots

invisible_dots is a self-hosted cloud browser-agent workspace pairing isolated KVM virtual machines with anti-detect Firefox automation.

- Catalog URL: https://awesomecua.com/resources/github-feder-cr-invisible-dots/
- Original source: https://github.com/feder-cr/invisible_dots
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, linux
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-11-04T15:03:35Z
- ID: github:feder-cr/invisible_dots

- Record JSON: https://awesomecua.com/resources/github-feder-cr-invisible-dots/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/feder-cr/invisible_dots/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/feder-cr/invisible_dots/HEAD/README.md (retrieved 2026-11-04T15:03:35Z; SHA-256 19737ad214a108c788051ceb201ecb80246096c29315e926299e844fefae9180)
- https://raw.githubusercontent.com/feder-cr/invisible_dots/HEAD/LICENSE (retrieved 2026-11-04T15:22:51Z; SHA-256 f8e26bc469ae827b30a93daa0a6ce8f12a65036334e700600280bf70f0fbbd9e)

---

## iOS Agent Harness

iOS Agent Harness runs a Manager-Executor-Reflector GUI agent loop on iPhones to automate cross-app tasks from natural language.

- Catalog URL: https://awesomecua.com/resources/github-a178960320-ios-agent-harness/
- Original source: https://github.com/a178960320/ios-agent-harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios
- Topics: mobile-navigation, planning, self-reflection, automation
- Evidence checked: 2026-11-04T14:41:52Z
- ID: github:a178960320/ios-agent-harness

- Record JSON: https://awesomecua.com/resources/github-a178960320-ios-agent-harness/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/a178960320/ios-agent-harness/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/a178960320/ios-agent-harness/HEAD/README.md (retrieved 2026-11-04T14:41:52Z; SHA-256 81fdd79b607036e713a66ce8c2db96498f64ce94c4c0e6727f53289efd78d662)
- https://raw.githubusercontent.com/a178960320/ios-agent-harness/HEAD/LICENSE (retrieved 2026-11-04T14:45:26Z; SHA-256 d66f13ab18984fc4300b1d1fb37eb0bf164792f67e311a0ad83bb5a1f531ab08)

---

## Jig WebMCP Workbench

Two-origin, agent-native design workbench built on WebMCP for collaborative human-agent UI editing.

- Catalog URL: https://awesomecua.com/resources/github-emadqureshikhi-jig/
- Original source: https://github.com/EmadQureshiKhi/Jig
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: ui-design, tool-integration, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:55:05Z
- ID: github:emadqureshikhi/jig

- Record JSON: https://awesomecua.com/resources/github-emadqureshikhi-jig/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/EmadQureshiKhi/Jig/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/EmadQureshiKhi/Jig/main/README.md (retrieved 2026-11-04T17:55:05Z; SHA-256 185ee60c3df69bbdccecb9f5568eb20dc924b0871ef4439b9495224ffe611631)
- https://raw.githubusercontent.com/EmadQureshiKhi/Jig/HEAD/LICENSE (retrieved 2026-11-04T18:00:10Z; SHA-256 5444942ac6ac4e3cbc6e71519c754f18b622efd9ad61855afc93781d869de02b)

---

## kamalesh404 AgentOS

Autonomous AI agent framework for orchestrating web browsing, coding, and desktop tasks.

- Catalog URL: https://awesomecua.com/resources/github-kamalesh404-agentos/
- Original source: https://github.com/kamalesh404/AgentOS
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: web-navigation, planning, automation, workflow
- Evidence checked: 2026-11-04T17:30:37Z
- ID: github:kamalesh404/agentos

- Record JSON: https://awesomecua.com/resources/github-kamalesh404-agentos/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kamalesh404/AgentOS/main/README.md (retrieved 2026-11-04T17:30:37Z; SHA-256 450543d27400832d974afe6f8c7fe31251102fbdc22d17f3ed90e18fdeb6266d)

---

## Knot Agent

Journal-first decentralized agent harness where independent browser and desktop plugins coordinate through an append-only fact log.

- Catalog URL: https://awesomecua.com/resources/github-liz-public-knot-agent/
- Original source: https://github.com/liz-public/knot-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: memory, workflow, tool-integration
- Evidence checked: 2026-11-04T18:11:39Z
- ID: github:liz-public/knot-agent

- Record JSON: https://awesomecua.com/resources/github-liz-public-knot-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/liz-public/knot-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/liz-public/knot-agent/main/README.md (retrieved 2026-11-04T18:11:39Z; SHA-256 800f5b96bef78bf3287cb9133fd737fbd38c7b1735142f4b3b86dca8d1fde8f7)
- https://raw.githubusercontent.com/liz-public/knot-agent/HEAD/LICENSE (retrieved 2026-11-04T18:16:24Z; SHA-256 153bc6b46d971d002224f93ad245194627bc1f43ee9d4dc4e0d52844f2017ec7)

---

## Kopilotti WebMCP

WebMCP reference application where a browser agent prepares non-binding proposals that require explicit human approval.

- Catalog URL: https://awesomecua.com/resources/github-mikko-lab-kopilotti-webmcp/
- Original source: https://github.com/mikko-lab/kopilotti-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, safety-security, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:31Z
- ID: github:mikko-lab/kopilotti-webmcp

- Record JSON: https://awesomecua.com/resources/github-mikko-lab-kopilotti-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/mikko-lab/kopilotti-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mikko-lab/kopilotti-webmcp/main/README.md (retrieved 2026-11-04T18:11:31Z; SHA-256 9d145a14e9935913130ede1d1da1b461b0adffeac1c36ae0a9bfa8c013abb713)
- https://raw.githubusercontent.com/mikko-lab/kopilotti-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:26Z; SHA-256 8f17afa02da6ab6e7465caf4200c21ff4d5348a002dfe5b94d349e33525d821a)

---

## Kortix Suna

Kortix Suna is an open-source generalist agent platform combining a containerized browser, code interpreter, file manager, and tool runtime.

- Catalog URL: https://awesomecua.com/resources/github-kortix-ai-suna/
- Original source: https://github.com/kortix-ai/suna
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, linux
- Topics: sandbox, web-navigation, automation, workflow
- Evidence checked: 2026-11-04T13:12:20Z
- ID: github:kortix-ai/suna

- Record JSON: https://awesomecua.com/resources/github-kortix-ai-suna/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kortix-ai/suna/HEAD/README.md (retrieved 2026-11-04T13:12:20Z; SHA-256 14f35ce10b822a99d5333354e0fc83d247bb10e5e35c52e3c74c0ecaa149dfd7)

---

## Kryptic

Local-first AI engineering and browser-control agent runtime with bounded execution, verification, and self-repair.

- Catalog URL: https://awesomecua.com/resources/github-adnqcr7-code-kryptic/
- Original source: https://github.com/adnqcr7-code/kryptic
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: web-navigation, self-reflection, safety-security, automation
- Evidence checked: 2026-11-04T17:20:39Z
- ID: github:adnqcr7-code/kryptic

- Record JSON: https://awesomecua.com/resources/github-adnqcr7-code-kryptic/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/adnqcr7-code/kryptic/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/adnqcr7-code/kryptic/master/README.md (retrieved 2026-11-04T17:20:39Z; SHA-256 bbb5e04c57a18aaa5d77d7059ec37c75b9a6d7a27960ae846859ac3a29ef0b95)
- https://raw.githubusercontent.com/adnqcr7-code/kryptic/HEAD/LICENSE (retrieved 2026-11-04T17:26:36Z; SHA-256 8de6ced23f4a0da8001b818073a5f7a4a298c9587be0a75c1bfa719134669c4a)

---

## LAI (Linux Native OS Agent)

Native OS agent runtime for Linux desktops providing system-wide screen observation, accessibility inspection, and input control.

- Catalog URL: https://awesomecua.com/resources/github-cufelix-lai/
- Original source: https://github.com/cufelix/lai
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-04T17:20:51Z
- ID: github:cufelix/lai

- Record JSON: https://awesomecua.com/resources/github-cufelix-lai/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cufelix/lai/main/README.md (retrieved 2026-11-04T17:20:51Z; SHA-256 5dbf1070579ac21b72fadadc406a30f065fff2da16224b3b62fc97eca39a11b0)

---

## Language Agent Tree Search (LATS)

Language Agent Tree Search (LATS) unifies LLM reasoning, acting, and Monte Carlo Tree Search with self-reflection on WebShop and programming tasks.

- Catalog URL: https://awesomecua.com/resources/github-lapisrocks-languageagenttreesearch/
- Original source: https://github.com/lapisrocks/LanguageAgentTreeSearch
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: planning, self-reflection, web-navigation
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:lapisrocks/languageagenttreesearch

- Record JSON: https://awesomecua.com/resources/github-lapisrocks-languageagenttreesearch/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/lapisrocks/LanguageAgentTreeSearch/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lapisrocks/LanguageAgentTreeSearch/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 bc8d46c7a94022a5235eeb3918810b50339e4828943f894ce795c93e4b9a9ab8)
- https://raw.githubusercontent.com/lapisrocks/LanguageAgentTreeSearch/HEAD/LICENSE (retrieved 2026-11-04T13:41:58Z; SHA-256 cbe4f6d59f5cf6268eb318d1783496706504bb9577c771bd6ccccf93e4509f10)

---

## LASSO WebMCP

AI-assisted dispatch console that turns human visual lasso selections on a webpage into live typed WebMCP capabilities.

- Catalog URL: https://awesomecua.com/resources/github-smkzz-lasso/
- Original source: https://github.com/Smkzz/Lasso
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:38Z
- ID: github:smkzz/lasso

- Record JSON: https://awesomecua.com/resources/github-smkzz-lasso/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Smkzz/Lasso/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Smkzz/Lasso/main/README.md (retrieved 2026-11-04T18:11:38Z; SHA-256 cd344f447f87c27760db7efc9c6e82fff47057dc38d1dab9347e79bbb4c3c8c1)
- https://raw.githubusercontent.com/Smkzz/Lasso/HEAD/LICENSE (retrieved 2026-11-04T18:16:33Z; SHA-256 6fd5068d327eef6a4dbc7df7362985d2972d765b1adde4c95e64faa5bc44374b)

---

## Latitude Browser

Desktop workspace for managing isolated browser profiles, proxy routing, and multi-session web automation.

- Catalog URL: https://awesomecua.com/resources/github-djblack1209-coder-latitude-browser/
- Original source: https://github.com/djblack1209-coder/Latitude-Browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux, web
- Topics: sandbox, web-navigation, automation
- Evidence checked: 2026-11-04T18:11:47Z
- ID: github:djblack1209-coder/latitude-browser

- Record JSON: https://awesomecua.com/resources/github-djblack1209-coder-latitude-browser/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/djblack1209-coder/Latitude-Browser/main/README.md (retrieved 2026-11-04T18:11:47Z; SHA-256 ac950b11f2e4a478417737dad01e945d06c5bdffca0a3c45db2ed0acaf6dec1b)

---

## Legacy UI Capability Engine

Learns a legacy browser workflow once with an LLM and compiles it into a verified, reusable capability module.

- Catalog URL: https://awesomecua.com/resources/github-saitejareddi3636-legacy-ui-capability-engine/
- Original source: https://github.com/saitejareddi3636/legacy-ui-capability-engine
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, workflow, efficiency, web-navigation
- Evidence checked: 2026-11-04T17:20:49Z
- ID: github:saitejareddi3636/legacy-ui-capability-engine

- Record JSON: https://awesomecua.com/resources/github-saitejareddi3636-legacy-ui-capability-engine/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/saitejareddi3636/legacy-ui-capability-engine/main/README.md (retrieved 2026-11-04T17:20:49Z; SHA-256 185bcb7a2f93602379686cbda7b826f5ba700c911e7c4f7c90dc033483411541)

---

## LegacyBridge

Local open-weight LLM agent framework for automating legacy enterprise ERP and business desktop software without APIs.

- Catalog URL: https://awesomecua.com/resources/github-peterhaupt-legacybridge/
- Original source: https://github.com/peterhaupt/legacybridge
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: workflow, automation, grounding, efficiency
- Evidence checked: 2026-11-04T16:30:09Z
- ID: github:peterhaupt/legacybridge

- Record JSON: https://awesomecua.com/resources/github-peterhaupt-legacybridge/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/peterhaupt/legacybridge/HEAD/README.md (retrieved 2026-11-04T16:30:09Z; SHA-256 5c8ff6dbc4f802270a82e5f358da98a2e507617c9fa546b5ec4f5f41c5cb2cc9)

---

## LGWM (Latent GUI World Model)

LGWM is an action-conditioned latent GUI world model that predicts next-state representations to verify GUI agent transitions.

- Catalog URL: https://awesomecua.com/resources/github-jiamingzhang94-lgwm/
- Original source: https://github.com/jiamingzhang94/lgwm
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, desktop, web
- Topics: world-models, reward-models, self-reflection
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:jiamingzhang94/lgwm

- Record JSON: https://awesomecua.com/resources/github-jiamingzhang94-lgwm/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/jiamingzhang94/lgwm/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jiamingzhang94/lgwm/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 2a32d1d684872dab94a6888fc64e743c6d149ce5b79a5da2e55519059b29bedd)
- https://raw.githubusercontent.com/jiamingzhang94/lgwm/HEAD/LICENSE (retrieved 2026-11-04T14:07:38Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Lightcone SDK

Lightcone is Tzafon's Python and TypeScript SDK for building computer-use agents powered by Northstar GUI vision-language models.

- Catalog URL: https://awesomecua.com/resources/github-tzafon-lightcone/
- Original source: https://github.com/tzafon/lightcone
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: reinforcement-learning, grounding, action-prediction, automation
- Evidence checked: 2026-11-04T15:45:42Z
- ID: github:tzafon/lightcone

- Record JSON: https://awesomecua.com/resources/github-tzafon-lightcone/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/tzafon/lightcone/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tzafon/lightcone/HEAD/README.md (retrieved 2026-11-04T15:45:42Z; SHA-256 e036318375dcda554d8ee3641b10edfb543a8f4424da49dd6f5ffa4c310dd042)
- https://raw.githubusercontent.com/tzafon/lightcone/HEAD/LICENSE (retrieved 2026-11-04T15:57:30Z; SHA-256 db8961eb6ea6ceeacceab55a0ac2a1afae75d5a60bf81f2c6da0fb8bf1422ca5)

---

## Lightfeed Replayable Browser Agent

TypeScript browser agent library that uses an LLM to complete a web navigation workflow once and replays cached selectors with zero LLM tokens.

- Catalog URL: https://awesomecua.com/resources/github-lightfeed-browser-agent/
- Original source: https://github.com/lightfeed/browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, recording, efficiency, automation
- Evidence checked: 2026-11-04T15:03:38Z
- ID: github:lightfeed/browser-agent

- Record JSON: https://awesomecua.com/resources/github-lightfeed-browser-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/lightfeed/browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lightfeed/browser-agent/HEAD/README.md (retrieved 2026-11-04T15:03:38Z; SHA-256 df7cd96e7849b134fd41b03dae2ee04052761c3ec2541c97e48d8ea26789c39b)
- https://raw.githubusercontent.com/lightfeed/browser-agent/HEAD/LICENSE (retrieved 2026-11-04T15:22:52Z; SHA-256 35b49778e67624a9cfa64c8b05891f3eab7d796372f8bc77c5be2c8ec491f662)

---

## Liha WebMCP Adapter

Retrofits existing websites with structured WebMCP tool definitions without requiring backend code changes.

- Catalog URL: https://awesomecua.com/resources/github-liha-app-webmcp-adapter/
- Original source: https://github.com/liha-app/webmcp-adapter
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:25Z
- ID: github:liha-app/webmcp-adapter

- Record JSON: https://awesomecua.com/resources/github-liha-app-webmcp-adapter/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/liha-app/webmcp-adapter/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/liha-app/webmcp-adapter/main/README.md (retrieved 2026-11-04T17:55:25Z; SHA-256 cfc82f00cd16c48852e3ea21a05275105087fbd7e028a0fc09eee792477006f1)
- https://raw.githubusercontent.com/liha-app/webmcp-adapter/HEAD/LICENSE (retrieved 2026-11-04T18:00:15Z; SHA-256 3718d5a0edb7e61f3565927ee1b9ea37c8fbe5078410b15bf80dbdb4b5752954)

---

## Linux CUA (5omeotherguy)

Linux desktop toolkit for computer-use agents providing isolated X11 workspaces, window capture, and input synthesis.

- Catalog URL: https://awesomecua.com/resources/github-5omeotherguy-linux-computer-use/
- Original source: https://github.com/5omeOtherGuy/linux-computer-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: sandbox, screen-understanding, automation, tool-integration
- Evidence checked: 2026-11-04T18:11:47Z
- ID: github:5omeotherguy/linux-computer-use

- Record JSON: https://awesomecua.com/resources/github-5omeotherguy-linux-computer-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/5omeOtherGuy/linux-computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/5omeOtherGuy/linux-computer-use/main/README.md (retrieved 2026-11-04T18:11:47Z; SHA-256 25a94a8b61767d22e90816a76adb6f21a1efa7f2df72c68cf4175d988ea2614f)
- https://raw.githubusercontent.com/5omeOtherGuy/linux-computer-use/HEAD/LICENSE (retrieved 2026-11-04T18:16:14Z; SHA-256 ff67afdaab359942a30053c4fccf4121e3744f1ca992f6fae51a7f26c440cdfd)

---

## LiteWebAgent

Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.

- Catalog URL: https://awesomecua.com/resources/github-pathonaiorg-litewebagent/
- Original source: https://github.com/PathOnAIOrg/LiteWebAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, memory, tool-integration
- Evidence checked: 2026-10-16T13:14:29Z
- ID: github:pathonaiorg/litewebagent

### Limitations

The repository is maintained by the PathOnAI.org research community; its README explicitly disclaims affiliation with a for-profit company.

- Record JSON: https://awesomecua.com/resources/github-pathonaiorg-litewebagent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/PathOnAIOrg/LiteWebAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/README.md (retrieved 2026-10-16T13:14:29Z; SHA-256 75f99d9388aee3e0b124ebdb5f33e08fbe8ec999ce1e9eba5cd71c21e60522e0)
- https://raw.githubusercontent.com/PathOnAIOrg/LiteWebAgent/HEAD/LICENSE (retrieved 2026-10-16T13:29:25Z; SHA-256 ec6ef142e3900e9f5555009b825387e41da67a77a24ee72ef6963c99b065e6eb)

---

## llm-browser-agent

Self-healing browser automation framework that replaces brittle CSS selectors with LLM-guided semantic element resolution.

- Catalog URL: https://awesomecua.com/resources/github-justifysiddh-llm-browser-agent/
- Original source: https://github.com/justifysiddh/llm-browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, web-navigation, self-reflection, automation
- Evidence checked: 2026-11-04T17:20:47Z
- ID: github:justifysiddh/llm-browser-agent

- Record JSON: https://awesomecua.com/resources/github-justifysiddh-llm-browser-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/justifysiddh/llm-browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/justifysiddh/llm-browser-agent/main/README.md (retrieved 2026-11-04T17:20:47Z; SHA-256 df71bb80fb581e0d0b2fa5987b7cecf353b288613f05babb4816c0969aaa77db)
- https://raw.githubusercontent.com/justifysiddh/llm-browser-agent/HEAD/LICENSE (retrieved 2026-11-04T17:26:45Z; SHA-256 7b807f447f684d790070a459358720e9a84cc260497fe80563648949c5017ec2)

---

## LockInTime headless

Persistent, safety-enforced browser control runtime for AI agents with a semantic CLI.

- Catalog URL: https://awesomecua.com/resources/github-lockintime-headless/
- Original source: https://github.com/LockInTime/headless
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, safety-security, efficiency, automation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:lockintime/headless

- Record JSON: https://awesomecua.com/resources/github-lockintime-headless/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/LockInTime/headless/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/LockInTime/headless/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 d2b18454d5274e4910c4e579da0a1aa1082e623d012feff1d9044877ad0c14ef)
- https://raw.githubusercontent.com/LockInTime/headless/HEAD/LICENSE (retrieved 2026-11-04T16:56:36Z; SHA-256 46c09bb04d812653e2d69bb14b84708967ce3db571592ba376eb3d5bf61aa990)

---

## Locus Platform

Shared agent runtime, protocol contracts, and browser bridge for the Locus automation ecosystem.

- Catalog URL: https://awesomecua.com/resources/github-nahid-sparktales-locus-platform/
- Original source: https://github.com/nahid-sparktales/locus-platform
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, web-navigation, workflow
- Evidence checked: 2026-11-04T17:30:35Z
- ID: github:nahid-sparktales/locus-platform

- Record JSON: https://awesomecua.com/resources/github-nahid-sparktales-locus-platform/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/nahid-sparktales/locus-platform/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nahid-sparktales/locus-platform/main/README.md (retrieved 2026-11-04T17:30:35Z; SHA-256 9fc849cac8d7067e8208e27c1d1831039a38e807141892512d11aae4e5107405)
- https://raw.githubusercontent.com/nahid-sparktales/locus-platform/HEAD/LICENSE (retrieved 2026-11-04T17:39:56Z; SHA-256 56a907a25890fefb1d386af42d9de00e085a1094abb47b221f3c0abbc3afff70)

---

## loki-auto

Zero-dependency in-browser web automation runtime with an embedded sandbox and Model Context Protocol server for LLMs.

- Catalog URL: https://awesomecua.com/resources/github-loki4agent-loki-auto/
- Original source: https://github.com/loki4agent/loki-auto
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, sandbox, tool-integration, efficiency
- Evidence checked: 2026-11-04T16:51:41Z
- ID: github:loki4agent/loki-auto

- Record JSON: https://awesomecua.com/resources/github-loki4agent-loki-auto/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/loki4agent/loki-auto/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/loki4agent/loki-auto/HEAD/README.md (retrieved 2026-11-04T16:51:41Z; SHA-256 bd12d1e2e7107ab386da53aaed5f95546ae186718917c33e76dc67fab158cd57)
- https://raw.githubusercontent.com/loki4agent/loki-auto/HEAD/LICENSE (retrieved 2026-11-04T16:56:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## look-decide-act

Drives live web applications over CDP through a closed-loop visual look-decide-act cycle in place of script replay.

- Catalog URL: https://awesomecua.com/resources/github-ivanposel-look-decide-act/
- Original source: https://github.com/ivanposel/look-decide-act
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, grounding, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:24Z
- ID: github:ivanposel/look-decide-act

- Record JSON: https://awesomecua.com/resources/github-ivanposel-look-decide-act/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ivanposel/look-decide-act/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ivanposel/look-decide-act/main/README.md (retrieved 2026-11-04T17:55:24Z; SHA-256 a9de463dbb169f354c95915e0a20c612624eaca666eaddf5a243fdbb0a68b673)
- https://raw.githubusercontent.com/ivanposel/look-decide-act/HEAD/LICENSE (retrieved 2026-11-04T18:00:13Z; SHA-256 fa05cd8caa91097519f4a5a644a73e6e5d1b4fcd1c7b2a48bf4dd9b6b99b25b5)

---

## lvyuan1688 browser-use-rs

Rust port of the Browser Use architecture enabling LLMs to control web browsers with native speed.

- Catalog URL: https://awesomecua.com/resources/github-lvyuan1688-browser-use-rs/
- Original source: https://github.com/lvyuan1688/browser-use-rs
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-11-04T16:51:59Z
- ID: github:lvyuan1688/browser-use-rs

- Record JSON: https://awesomecua.com/resources/github-lvyuan1688-browser-use-rs/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/lvyuan1688/browser-use-rs/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lvyuan1688/browser-use-rs/HEAD/README.md (retrieved 2026-11-04T16:51:59Z; SHA-256 69692bd5a7a7fb24c0aae0368581004fd196550e135d5c4c97b0669292e0ca11)
- https://raw.githubusercontent.com/lvyuan1688/browser-use-rs/HEAD/LICENSE (retrieved 2026-11-04T16:56:47Z; SHA-256 da363d8c54e6940d2e08ff382c08024b8cc6467fe2611e69d92f16b8bc18a26f)

---

## Maestro (AI-Drivable RPA)

Records a desktop or browser task once and lets AI optimize, parameterize, and replay it as a deterministic RPA workflow.

- Catalog URL: https://awesomecua.com/resources/github-rexchengm-maestro/
- Original source: https://github.com/rexchengm/maestro
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: recording, workflow, automation, imitation-learning
- Evidence checked: 2026-11-04T16:30:13Z
- ID: github:rexchengm/maestro

- Record JSON: https://awesomecua.com/resources/github-rexchengm-maestro/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/rexchengm/maestro/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rexchengm/maestro/HEAD/README.md (retrieved 2026-11-04T16:30:13Z; SHA-256 dae05e06266dec7dd9bcc87fb4382f8985acb4832e863b43c5bfd4059faa747b)
- https://raw.githubusercontent.com/rexchengm/maestro/HEAD/LICENSE (retrieved 2026-11-04T16:34:51Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## maestro-oss

Open-source multi-agent spatial orchestration canvas integrating CLI agents, browser automation, and desktop tools.

- Catalog URL: https://awesomecua.com/resources/github-victorkaor-maestro-oss/
- Original source: https://github.com/victorkaor/maestro-oss
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, tool-integration, automation, ui-design
- Evidence checked: 2026-11-04T17:20:54Z
- ID: github:victorkaor/maestro-oss

- Record JSON: https://awesomecua.com/resources/github-victorkaor-maestro-oss/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/victorkaor/maestro-oss/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/victorkaor/maestro-oss/main/README.md (retrieved 2026-11-04T17:20:54Z; SHA-256 a0342d51af0caaecb43cdd2d97e9ec83e4093be621bc8e5113100d75e81bafaf)
- https://raw.githubusercontent.com/victorkaor/maestro-oss/HEAD/LICENSE (retrieved 2026-11-04T17:26:54Z; SHA-256 3cf57cef6d678860139cf01cc5ab0ab76c1b6f76ff1a6d72ea697e864c3d0fcb)

---

## Magnitude

A TypeScript browser-agent framework in which a visually grounded model returns pixel coordinates for mouse and keyboard actions, with act and extract calls, a visual test runner and an MCP server.

- Catalog URL: https://awesomecua.com/resources/github-magnitudedev-browser-agent/
- Original source: https://github.com/magnitudedev/browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, automation
- Evidence checked: 2026-10-18T11:09:44Z
- ID: github:magnitudedev/browser-agent

### Limitations

This is GitHub repository 952018616 (magnitudedev/browser-agent, created 2025-03-20). The name magnitudedev/magnitude now belongs to a separate inference-engine repository (1267145484). The inspected tree contains magnitude-core, magnitude-test, magnitude-extract, magnitude-mcp and create-magnitude-app packages plus basic and WebVoyager evaluation folders. The README requires a separately configured visually grounded model; its WebVoyager score is a publisher claim. Apache-2.0 applies to repository code only.

- Record JSON: https://awesomecua.com/resources/github-magnitudedev-browser-agent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/magnitudedev/browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/magnitudedev/browser-agent/HEAD/README.md (retrieved 2026-10-18T11:09:44Z; SHA-256 86af0f6a35bce3482163827386f9cbd75650f3ba5ed95e39181e164fc1e205c7)
- https://api.github.com/repos/magnitudedev/browser-agent (retrieved 2026-10-18T11:09:53Z; SHA-256 b3cb4c14eb423ac7aa5ec8d22629dd91e7ec143a4fc2a79dc97188913a99ff0e)
- https://api.github.com/repos/magnitudedev/browser-agent/git/trees/main?recursive=1 (retrieved 2026-10-18T11:09:54Z; SHA-256 d454a5c1b71b7e42b99cdc24ca0391c36daa1190de20b13a1b142a916d1f406c)
- https://raw.githubusercontent.com/magnitudedev/browser-agent/HEAD/LICENSE (retrieved 2026-10-18T11:09:55Z; SHA-256 896c9297b2721f6475a8d86595f889f4ef01fc919a1ac307bdd0eb17f6f1878f)
- https://raw.githubusercontent.com/magnitudedev/browser-agent/HEAD/LICENSE (retrieved 2026-10-18T11:09:55Z; SHA-256 896c9297b2721f6475a8d86595f889f4ef01fc919a1ac307bdd0eb17f6f1878f)

---

## MAI

MAI combines MaaFramework with multimodal LLMs in a Planner-Executor-Verifier loop for game and application GUI automation.

- Catalog URL: https://awesomecua.com/resources/github-fluxaster-mai/
- Original source: https://github.com/fluxaster/MAI
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, android, windows
- Topics: planning, grounding, self-reflection, automation
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:fluxaster/mai

- Record JSON: https://awesomecua.com/resources/github-fluxaster-mai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/fluxaster/MAI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/fluxaster/MAI/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 68860b946f802cb8a3d6c9a1983d9d34cae935ccb8a2f81188793110af944da1)
- https://raw.githubusercontent.com/fluxaster/MAI/HEAD/LICENSE (retrieved 2026-11-04T14:23:51Z; SHA-256 2a4e534a0b69c7a338356293f8cd3dabed30a8fb4d397e67ecf1d1f2a53c76b9)

---

## Manipulating Web Agents (Toast Attack)

Implements DOM-injected pop-up and toast indirect prompt injection attacks against multimodal web agents in VisualWebArena and OSWorld.

- Catalog URL: https://awesomecua.com/resources/github-sej2020-manipulating-web-agents/
- Original source: https://github.com/sej2020/manipulating-web-agents
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, web-navigation
- Evidence checked: 2026-11-04T13:12:34Z
- ID: github:sej2020/manipulating-web-agents

- Record JSON: https://awesomecua.com/resources/github-sej2020-manipulating-web-agents/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sej2020/manipulating-web-agents/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sej2020/manipulating-web-agents/HEAD/README.md (retrieved 2026-11-04T13:12:34Z; SHA-256 cc68d5746156c7a9ace384a91a1ab3fecf77ce778bfa06a60ee939bc2d1da221)
- https://raw.githubusercontent.com/sej2020/manipulating-web-agents/HEAD/LICENSE (retrieved 2026-11-04T13:22:59Z; SHA-256 20ab0fd19403d233a1760310c59a27ffbae1033b63835a94ec0e4cffcefb5f08)

---

## maponce

Uses an LLM to map or record browser automations once and replays them deterministically via Playwright without LLM calls.

- Catalog URL: https://awesomecua.com/resources/github-shivampatel0714-maponce/
- Original source: https://github.com/shivampatel0714/maponce
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, workflow, efficiency, web-navigation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:shivampatel0714/maponce

- Record JSON: https://awesomecua.com/resources/github-shivampatel0714-maponce/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/shivampatel0714/maponce/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shivampatel0714/maponce/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 4f98591c50984a2fea5ad5b9905ebf5cfc264c82d391abb457d523715510ea21)
- https://raw.githubusercontent.com/shivampatel0714/maponce/HEAD/LICENSE (retrieved 2026-11-04T16:56:36Z; SHA-256 4186c2c368d6d32f3fb1a156a4fa3b49d8bf82539e5705304e8f76f2ae49a96c)

---

## Marey

Marey is a modular perception engine for computer-use agents that tracks screen changes and extracts UI elements with minimal model calls.

- Catalog URL: https://awesomecua.com/resources/github-badalraj9-marey/
- Original source: https://github.com/badalraj9/Marey
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, efficiency, grounding
- Evidence checked: 2026-11-04T16:10:30Z
- ID: github:badalraj9/marey

- Record JSON: https://awesomecua.com/resources/github-badalraj9-marey/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/badalraj9/Marey/HEAD/README.md (retrieved 2026-11-04T16:10:30Z; SHA-256 9f548438587fdfa9eb91886c13d61e2034b31a69803a1f941b9578d1e020ae09)

---

## MarkForge

MarkForge provides deterministic, auditable Set-of-Mark badge rendering and coordinate resolution for multimodal GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-lannistersyh-markforge/
- Original source: https://github.com/Lannistersyh/MarkForge
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, training-free
- Evidence checked: 2026-11-04T14:20:16Z
- ID: github:lannistersyh/markforge

- Record JSON: https://awesomecua.com/resources/github-lannistersyh-markforge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Lannistersyh/MarkForge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Lannistersyh/MarkForge/HEAD/README.md (retrieved 2026-11-04T14:20:16Z; SHA-256 d3b3f006766363e761fbb706869fdb8ba994b2946dd47a88487db2fa1635660f)
- https://raw.githubusercontent.com/Lannistersyh/MarkForge/HEAD/LICENSE (retrieved 2026-11-04T14:24:02Z; SHA-256 91917490900ba9983d4085857f2e9bedcc6467df5f090a5606ea9a9d4b49265c)

---

## MAWR (Machine-Aware Web Runtime)

Open-source, Chromium-free lightweight web runtime engineered specifically for machines and AI web agents.

- Catalog URL: https://awesomecua.com/resources/github-iasolutionorg-mawr/
- Original source: https://github.com/IASolutionOrg/MAWR
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, screen-understanding
- Evidence checked: 2026-11-04T17:55:24Z
- ID: github:iasolutionorg/mawr

- Record JSON: https://awesomecua.com/resources/github-iasolutionorg-mawr/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/IASolutionOrg/MAWR/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/IASolutionOrg/MAWR/master/README.md (retrieved 2026-11-04T17:55:24Z; SHA-256 ee74682b91d2b75337ff7d196e35972675b299e9f09345e20971a15dbacd6121)
- https://raw.githubusercontent.com/IASolutionOrg/MAWR/HEAD/LICENSE (retrieved 2026-11-04T18:00:13Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## md-e2e

Zero-glue-code, Markdown-native end-to-end browser test automation framework powered by LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-a-ryan-kr-md-e2e/
- Original source: https://github.com/A-RYAN-KR/md-e2e
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow, automation
- Evidence checked: 2026-11-04T18:11:55Z
- ID: github:a-ryan-kr/md-e2e

- Record JSON: https://awesomecua.com/resources/github-a-ryan-kr-md-e2e/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/A-RYAN-KR/md-e2e/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/A-RYAN-KR/md-e2e/master/README.md (retrieved 2026-11-04T18:11:55Z; SHA-256 dfc82d3c3fe43bd573597d72401eb8c65bc693b9b107f74bfa8f408a1e846c9e)
- https://raw.githubusercontent.com/A-RYAN-KR/md-e2e/HEAD/LICENSE (retrieved 2026-11-04T18:16:14Z; SHA-256 2bdd9dee23a9701f0f7613e83c1fdf06b7fe926d6d0240f25626504a0b48b940)

---

## MEGA-GUI

MEGA-GUI implements a multi-stage GUI grounding pipeline combining candidate region proposal, iterative zoom-in, and element localization.

- Catalog URL: https://awesomecua.com/resources/github-samsungsds-research-papers-mega-gui/
- Original source: https://github.com/samsungsds-research-papers/mega-gui
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-04T13:12:34Z
- ID: github:samsungsds-research-papers/mega-gui

- Record JSON: https://awesomecua.com/resources/github-samsungsds-research-papers-mega-gui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/samsungsds-research-papers/mega-gui/HEAD/README.md (retrieved 2026-11-04T13:12:34Z; SHA-256 9bdeec3c1a3c874f86dae691c52dcdb6455ba1f18e0e0b0c784948323bbe1992)

---

## MELRA

Modular Execution Layer for Reliable Autonomy (MELRA), a local MCP runtime that validates agent tool calls and gates risky actions.

- Catalog URL: https://awesomecua.com/resources/github-xagi-lab-melra/
- Original source: https://github.com/XAGI-Lab/melra
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: safety-security, human-in-the-loop, tool-integration, observability
- Evidence checked: 2026-11-04T16:51:51Z
- ID: github:xagi-lab/melra

- Record JSON: https://awesomecua.com/resources/github-xagi-lab-melra/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/XAGI-Lab/melra/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/XAGI-Lab/melra/HEAD/README.md (retrieved 2026-11-04T16:51:51Z; SHA-256 1fc021de4fdcf874d00f6455abb31fdb8574d8254ac368dc56afdfd0ae207396)
- https://raw.githubusercontent.com/XAGI-Lab/melra/HEAD/LICENSE (retrieved 2026-11-04T16:56:43Z; SHA-256 0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0)

---

## Memlayer

Memlayer is a plug-and-play memory layer that extracts facts, builds knowledge graphs, and retrieves tiered context for LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-divagr18-memlayer/
- Original source: https://github.com/divagr18/memlayer
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon
- Evidence checked: 2026-11-04T13:12:13Z
- ID: github:divagr18/memlayer

- Record JSON: https://awesomecua.com/resources/github-divagr18-memlayer/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/divagr18/memlayer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/divagr18/memlayer/HEAD/README.md (retrieved 2026-11-04T13:12:13Z; SHA-256 a170d8e53e0d97eb7c1ca0e85c5f436c34ff1717ef25ff34710667e7a413d7fa)
- https://raw.githubusercontent.com/divagr18/memlayer/HEAD/LICENSE (retrieved 2026-11-04T13:42:01Z; SHA-256 67c70fb9a24b38e0682d544ad6c10ae5eb9e24065c46656e4081000a73d26e5a)

---

## MemMachine

MemMachine is an open-source memory layer for AI agents providing working, episodic, and user-profile memory via REST, Python SDK, and MCP.

- Catalog URL: https://awesomecua.com/resources/github-memmachine-memmachine/
- Original source: https://github.com/MemMachine/MemMachine
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:memmachine/memmachine

- Record JSON: https://awesomecua.com/resources/github-memmachine-memmachine/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MemMachine/MemMachine/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MemMachine/MemMachine/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 ee9e89f147008e7ece5f9d8fb42587e60444fe46ff0f33543decd0acfb3e3edd)
- https://raw.githubusercontent.com/MemMachine/MemMachine/HEAD/LICENSE (retrieved 2026-11-04T13:42:01Z; SHA-256 05f33b1a4f2797532e331898b95db7b1cf51ee06b7cb0d24b87dfe05101e21e3)

---

## Memori

Memori captures structured execution facts from agent tool calls and conversations into a relational memory store.

- Catalog URL: https://awesomecua.com/resources/github-memorilabs-memori/
- Original source: https://github.com/MemoriLabs/Memori
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon, observability
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:memorilabs/memori

- Record JSON: https://awesomecua.com/resources/github-memorilabs-memori/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MemoriLabs/Memori/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MemoriLabs/Memori/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 2461bae179e10e0178ca0dca8e20404f8d68e39a6c97ea7c79abfa3297bff18e)
- https://raw.githubusercontent.com/MemoriLabs/Memori/HEAD/LICENSE (retrieved 2026-11-04T13:42:02Z; SHA-256 68f534038937a461ff428a7463558274ea5eb175cd64bd145afb3bbb1d6d41be)

---

## MetaWebMCP

In-browser workbench to author, test, and export structured WebMCP tool definitions from live website workflows.

- Catalog URL: https://awesomecua.com/resources/github-scanchila-metawebmcp/
- Original source: https://github.com/scanchila/MetaWebMCP
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, recording, evaluation, web-navigation
- Evidence checked: 2026-11-04T18:11:33Z
- ID: github:scanchila/metawebmcp

- Record JSON: https://awesomecua.com/resources/github-scanchila-metawebmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/scanchila/MetaWebMCP/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/scanchila/MetaWebMCP/main/README.md (retrieved 2026-11-04T18:11:33Z; SHA-256 fc5d7a777428d50d6c944d750f2b441b0045c955c03b8ab84a112a39274453f2)
- https://raw.githubusercontent.com/scanchila/MetaWebMCP/HEAD/LICENSE (retrieved 2026-11-04T18:16:33Z; SHA-256 c116b41b40ed975372e56adfde088341c1cc729fc52b0d21e5e1e9519d7b0e5b)

---

## MindSearch

MindSearch coordinates a multi-agent WebPlanner and parallel WebSearcher graph to execute multi-step web information seeking.

- Catalog URL: https://awesomecua.com/resources/github-internlm-mindsearch/
- Original source: https://github.com/InternLM/MindSearch
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, workflow
- Evidence checked: 2026-11-04T13:12:19Z
- ID: github:internlm/mindsearch

- Record JSON: https://awesomecua.com/resources/github-internlm-mindsearch/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/InternLM/MindSearch/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/InternLM/MindSearch/HEAD/README.md (retrieved 2026-11-04T13:12:19Z; SHA-256 e5fc5a4e441b1e870e3b754d9430aa090395b97417a2e308400705f3c06f05f1)
- https://raw.githubusercontent.com/InternLM/MindSearch/HEAD/LICENSE (retrieved 2026-11-04T13:41:57Z; SHA-256 9424a68484e9164bb9d81d71283c60dd79adb54af73e5222b008bbfe220e4a50)

---

## MirrorGuard code

MirrorGuard pipeline that synthesizes risky and benign computer-use trajectories in a text-based GUI simulator, builds unsafe-to-safe thought corrections for training, and plugs the corrector into OSWorld-style agents.

- Catalog URL: https://awesomecua.com/resources/github-whitzardagent-mirrorguard/
- Original source: https://github.com/WhitzardAgent/MirrorGuard
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: safety-security, data-generation
- Evidence checked: 2026-10-19T06:50:26Z
- ID: github:whitzardagent/mirrorguard

### Limitations

Official WhitzardAgent code for the MirrorGuard paper. MirrorWorld task generation (task_generation/) and an LLM-driven GUI simulator (simulator.py) produce text-only trajectories; dataset_generation/safe_thought.py rewrites unsafe thoughts and prepare_dataset.py packages ShareGPT-style training files. The repository includes dataset_generation/train.jsonl (about 86 MB) and test.jsonl (2,439 lines, of which 16 are invalid standalone JSON), each holding a system prompt and a conversation. Integration examples cover replacement steering for a ReAct agent, prefilling steering for UI-TARS, and an Owl agent reference, written as OSWorld-style agent files; examples/shared/correction_runtime.py calls the deployed corrector through an OpenAI-compatible endpoint with the screenshot, history and original thought. The released MirrorGuard VLM is on Hugging Face. Unsafe-rate and OSWorld figures in the README are paper results; code was read.

- Record JSON: https://awesomecua.com/resources/github-whitzardagent-mirrorguard/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/README.md (retrieved 2026-10-19T06:50:26Z; SHA-256 90ab7463e9d9c4d6c5e3b60acf385486ca1d9f09455aea0450b167406cfdf728)
- https://api.github.com/repos/WhitzardAgent/MirrorGuard/git/trees/9c5fb812a126493c75b6adda757af3b680a24708?recursive=1 (retrieved 2026-10-19T06:50:27Z; SHA-256 211b758a19e3b00b79b57bdc8f3f649687aa955195f5714be25693ed693ceb0f)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/dataset_generation/test.jsonl (retrieved 2026-10-19T06:50:27Z; SHA-256 4c9079f876657bd3c2ff7d43629ab5e8d92eb14fa5132e422c28ff73e646c087)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/examples/shared/correction_runtime.py (retrieved 2026-10-19T06:50:28Z; SHA-256 29a8e430e061f53a4ed958f1f48a7ebc5e6a5d7792cb65e423716da1946a4e23)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/simulator.py (retrieved 2026-10-19T06:50:28Z; SHA-256 9554149045ab49a83727510e159d7cea448ab97ba1d4853aa632b6796e4b5dbf)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/LICENSE (retrieved 2026-10-19T06:50:27Z; SHA-256 8bb263819f9a6ee87b8c7bc6d058c3c4b1d338835006d5b5089f53560c2bc770)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/HEAD/LICENSE (retrieved 2026-10-19T06:51:27Z; SHA-256 8bb263819f9a6ee87b8c7bc6d058c3c4b1d338835006d5b5089f53560c2bc770)

---

## mllm

mllm is a C++ multimodal LLM inference engine optimized for on-device execution on mobile NPU/CPU hardware.

- Catalog URL: https://awesomecua.com/resources/github-ubiquitouslearning-mllm/
- Original source: https://github.com/UbiquitousLearning/mLLM
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: android, desktop, linux, macos
- Topics: efficiency, screen-understanding
- Evidence checked: 2026-11-04T13:12:41Z
- ID: github:ubiquitouslearning/mllm

- Record JSON: https://awesomecua.com/resources/github-ubiquitouslearning-mllm/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UbiquitousLearning/mLLM/HEAD/README.md (retrieved 2026-11-04T13:12:41Z; SHA-256 255a19ff6c361b5895ecc51a2c0b96f8b8702b55caf81f02d6805bb7e9ba2365)

---

## Mobile Agent Guardian

Five-level safety and action-verification layer for mobile GUI agents that classifies and gates risky phone operations.

- Catalog URL: https://awesomecua.com/resources/github-salus-ryan-mobile-agent-guardian/
- Original source: https://github.com/salus-ryan/mobile-agent-guardian
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: safety-security, mobile-navigation, human-in-the-loop
- Evidence checked: 2026-11-04T16:51:47Z
- ID: github:salus-ryan/mobile-agent-guardian

- Record JSON: https://awesomecua.com/resources/github-salus-ryan-mobile-agent-guardian/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/salus-ryan/mobile-agent-guardian/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/salus-ryan/mobile-agent-guardian/HEAD/README.md (retrieved 2026-11-04T16:51:47Z; SHA-256 93eab6bedfc2bb70629b2f86a283b2846294d24fda270e2fbf6a8616fe895fa4)
- https://raw.githubusercontent.com/salus-ryan/mobile-agent-guardian/HEAD/LICENSE (retrieved 2026-11-04T16:56:39Z; SHA-256 ef1b8eea786afa7d45063aa0189852979ace3d4554dda6dff01d17ae19f60709)

---

## Mobile GUI-VLA Device Platform

Provides a zero-dependency Python device I/O and trajectory instrumentation layer for Android GUI-VLA experiments.

- Catalog URL: https://awesomecua.com/resources/github-chbq-mobile-gui-vla-device-platform/
- Original source: https://github.com/chbq/mobile-gui-vla-device-platform
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, recording, data-generation
- Evidence checked: 2026-11-04T14:20:12Z
- ID: github:chbq/mobile-gui-vla-device-platform

- Record JSON: https://awesomecua.com/resources/github-chbq-mobile-gui-vla-device-platform/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/chbq/mobile-gui-vla-device-platform/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chbq/mobile-gui-vla-device-platform/HEAD/README.md (retrieved 2026-11-04T14:20:12Z; SHA-256 1c8f3a3aaae45d1f6634b3078db62272fd0363dadd7f0537a790435558197991)
- https://raw.githubusercontent.com/chbq/mobile-gui-vla-device-platform/HEAD/LICENSE (retrieved 2026-11-04T14:24:00Z; SHA-256 de17253fb148befd070f5ac4c262d9d7572fe4d9f5a92216cb9c00349068915f)

---

## MobileClaw

MobileClaw is an open Android AI agent runtime for phone control, VLM screen reading, and reusable mobile skill execution.

- Catalog URL: https://awesomecua.com/resources/github-eggbrid2-mobileclaw/
- Original source: https://github.com/eggbrid2/mobileClaw
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, screen-understanding, automation, workflow
- Evidence checked: 2026-11-04T16:10:32Z
- ID: github:eggbrid2/mobileclaw

- Record JSON: https://awesomecua.com/resources/github-eggbrid2-mobileclaw/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/eggbrid2/mobileClaw/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/eggbrid2/mobileClaw/HEAD/README.md (retrieved 2026-11-04T16:10:32Z; SHA-256 c2d18d3f645b7a8060539c6c43022ce2059acd0c332cf670bc77e4f62bdc505f)
- https://raw.githubusercontent.com/eggbrid2/mobileClaw/HEAD/LICENSE (retrieved 2026-11-04T16:13:43Z; SHA-256 26faf17be6b85a23ca62a65ade3473e83e891168aefd64e8017d5b9d63d2d2b9)

---

## MobilePilot Runtime

MobilePilot is an auditable Android GUI agent runtime with structured action verification, on-demand UI trees, and bounded error recovery.

- Catalog URL: https://awesomecua.com/resources/github-qizhanggu-mobilepilot-runtime/
- Original source: https://github.com/qizhanggu/mobilepilot-runtime
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, self-reflection, observability, robustness
- Evidence checked: 2026-11-04T14:20:09Z
- ID: github:qizhanggu/mobilepilot-runtime

- Record JSON: https://awesomecua.com/resources/github-qizhanggu-mobilepilot-runtime/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/qizhanggu/mobilepilot-runtime/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/qizhanggu/mobilepilot-runtime/HEAD/README.md (retrieved 2026-11-04T14:20:09Z; SHA-256 e03848aaa554ea674613e7ea5381097817787169798b0df8608960cda296d0fd)
- https://raw.githubusercontent.com/qizhanggu/mobilepilot-runtime/HEAD/LICENSE (retrieved 2026-11-04T14:23:57Z; SHA-256 c6f0fd06fcf51149e760b271b2e6bb69dc6a1df67d8cb8c126cf1f931101e07c)

---

## MobileRAG

MobileRAG operates Android devices via ADB by combining local app retrieval, historical trajectory memory, and external web search.

- Catalog URL: https://awesomecua.com/resources/github-liuxiaojieoutofworld-mobilerag-arxiv/
- Original source: https://github.com/liuxiaojieOutOfWorld/MobileRAG_arxiv
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, memory, efficiency
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:liuxiaojieoutofworld/mobilerag_arxiv

- Record JSON: https://awesomecua.com/resources/github-liuxiaojieoutofworld-mobilerag-arxiv/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/liuxiaojieOutOfWorld/MobileRAG_arxiv/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 cbdf9e9069fa7549e97d2aa66c489378749fc00c4de4c08e76fc05d3fd7723a8)

---

## MobileRL

Online agentic RL framework for mobile GUI agents built around the difficulty-adaptive ADAGRPO algorithm, with Dockerized AndroidWorld and AndroidLab evaluation and a MobileRL-9B checkpoint.

- Catalog URL: https://awesomecua.com/resources/github-thudm-mobilerl/
- Original source: https://github.com/THUDM/MobileRL
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:thudm/mobilerl

- Record JSON: https://awesomecua.com/resources/github-thudm-mobilerl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 752fad8ebd8b8eda03648329a6fc2585e5bcb2b96875b8aa2ce7d9f3fff78153)
- https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 1bbbee919161337e2456c587c6be809214406482cd9f1292a9eb62428f6961f3)

---

## Mobilerun (formerly Droidrun)

A framework that combines screenshots and accessibility state with agent tools for mobile-device tasks through command-line and Python interfaces.

- Catalog URL: https://awesomecua.com/resources/github-droidrun-mobilerun/
- Original source: https://github.com/droidrun/mobilerun
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation, tool-integration, planning
- Evidence checked: 2026-10-17T03:59:53Z
- ID: github:droidrun/mobilerun

### Limitations

The former droidrun/droidrun repository resolves to droidrun/mobilerun through the official API. Source and release v0.7.0 are public. Android and iOS setup paths differ, and the companion Portal app is a separate device bridge. MIT applies to framework code; model-provider and cloud-service terms are separate.

- Record JSON: https://awesomecua.com/resources/github-droidrun-mobilerun/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/droidrun/mobilerun/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/droidrun/mobilerun/HEAD/README.md (retrieved 2026-10-17T03:59:53Z; SHA-256 80052560e06db353277a55f3f8f6a4b5231aa6dc1376d5182559b72adcb5c3a1)
- https://api.github.com/repos/droidrun/mobilerun (retrieved 2026-10-17T04:01:56Z; SHA-256 e48b9154a58b4b7021a4707ca185af32b9dd81c828d53ba36a86f195c1720344)
- https://api.github.com/repos/droidrun/mobilerun/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:53Z; SHA-256 7f40d42acd62b4405b5077a0f594a35aae73fb057589346afa5f6fb22d710a0c)
- https://api.github.com/repos/droidrun/mobilerun/releases/latest (retrieved 2026-10-17T04:00:56Z; SHA-256 f85c8b766edc107c455a86e363c56af3d1f7fce669b55377f4010982aa3a7e44)
- https://raw.githubusercontent.com/droidrun/mobilerun/HEAD/LICENSE (retrieved 2026-10-17T04:00:57Z; SHA-256 b3ebb19fda8286efa415d457529eafff41e1b1a27fe4e00d99f34e1559b6cdd9)
- https://api.github.com/repos/droidrun/droidrun (retrieved 2026-10-17T03:59:53Z; SHA-256 e48b9154a58b4b7021a4707ca185af32b9dd81c828d53ba36a86f195c1720344)
- https://raw.githubusercontent.com/droidrun/mobilerun/HEAD/LICENSE (retrieved 2026-10-17T04:00:57Z; SHA-256 b3ebb19fda8286efa415d457529eafff41e1b1a27fe4e00d99f34e1559b6cdd9)

---

## ModCDP

ModCDP is Browserbase's framework for extending the Chrome DevTools Protocol with custom commands, events, and agent middlewares.

- Catalog URL: https://awesomecua.com/resources/github-browserbase-modcdp/
- Original source: https://github.com/browserbase/ModCDP
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, observability
- Evidence checked: 2026-11-04T16:10:26Z
- ID: github:browserbase/modcdp

- Record JSON: https://awesomecua.com/resources/github-browserbase-modcdp/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browserbase/ModCDP/HEAD/README.md (retrieved 2026-11-04T16:10:26Z; SHA-256 8589426f19aba319bfe49e7e63d15777074ca28c2ae3068056308c5c4176aa97)

---

## Mosaic Desktop Automation

Local-first Windows dashboard for scheduling, watching, and auditing desktop automation agents.

- Catalog URL: https://awesomecua.com/resources/github-quill-00-mosaic-desktop-automation/
- Original source: https://github.com/Quill-00/mosaic-desktop-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: workflow, observability, automation
- Evidence checked: 2026-11-04T17:55:23Z
- ID: github:quill-00/mosaic-desktop-automation

- Record JSON: https://awesomecua.com/resources/github-quill-00-mosaic-desktop-automation/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Quill-00/mosaic-desktop-automation/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Quill-00/mosaic-desktop-automation/main/README.md (retrieved 2026-11-04T17:55:23Z; SHA-256 44772f08d10fe7eb6bd744af7c7374d76177b2ca984e479eb3c6243b1a411e77)
- https://raw.githubusercontent.com/Quill-00/mosaic-desktop-automation/HEAD/LICENSE (retrieved 2026-11-04T18:00:20Z; SHA-256 6baef30bc8f69b95067ad31b65e47a33fbd696ecaeba1fea8f9eefbd930ba38d)

---

## Mosaik

Composable agentic browser automation framework built from small, reusable perception and action primitives.

- Catalog URL: https://awesomecua.com/resources/github-luantak-mosaik/
- Original source: https://github.com/luantak/mosaik
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow, automation
- Evidence checked: 2026-11-04T18:11:48Z
- ID: github:luantak/mosaik

- Record JSON: https://awesomecua.com/resources/github-luantak-mosaik/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/luantak/mosaik/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/luantak/mosaik/master/README.md (retrieved 2026-11-04T18:11:48Z; SHA-256 08b2f12b55e18fa36334ba2f608316d03111403bc92a022f31e4192fbb3f5790)
- https://raw.githubusercontent.com/luantak/mosaik/HEAD/LICENSE (retrieved 2026-11-04T18:16:25Z; SHA-256 98a588e90442e2c993d77ecedbc979d886c6dcfee230f62197470fe44a5effdd)

---

## Motus

Motus is an extensible .NET browser automation and agentic testing framework communicating directly with Chromium via CDP.

- Catalog URL: https://awesomecua.com/resources/github-dataficationsdk-motus/
- Original source: https://github.com/DataficationSDK/Motus
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, windows
- Topics: web-navigation, automation, evaluation
- Evidence checked: 2026-11-04T15:45:50Z
- ID: github:dataficationsdk/motus

- Record JSON: https://awesomecua.com/resources/github-dataficationsdk-motus/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/DataficationSDK/Motus/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DataficationSDK/Motus/HEAD/README.md (retrieved 2026-11-04T15:45:50Z; SHA-256 d82a80049eccec30f6523a01b1edcd4ffa7c9b9911f1319f0be3f64b0115e2fd)
- https://raw.githubusercontent.com/DataficationSDK/Motus/HEAD/LICENSE.md (retrieved 2026-11-04T15:57:36Z; SHA-256 b0d2dded0f4fb3e5d2d986c765805880dd06b55f6000ab7a2302dea2ea1685f5)

---

## MPO (Meta Plan Optimization)

MPO optimizes reusable high-level meta-plans via preference learning to guide LLM agents on interactive web and decision-making tasks.

- Catalog URL: https://awesomecua.com/resources/github-weiminxiong-mpo/
- Original source: https://github.com/WeiminXiong/MPO
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: planning, reinforcement-learning
- Evidence checked: 2026-11-04T13:12:43Z
- ID: github:weiminxiong/mpo

- Record JSON: https://awesomecua.com/resources/github-weiminxiong-mpo/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/WeiminXiong/MPO/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WeiminXiong/MPO/HEAD/README.md (retrieved 2026-11-04T13:12:43Z; SHA-256 409aea1c1c7d428fd75cecab42a36f07538b6af9f7a541a9f2c2bfb0ca490abb)
- https://raw.githubusercontent.com/WeiminXiong/MPO/HEAD/LICENSE (retrieved 2026-11-04T13:23:07Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## muhtalhakhan OpenAgent

Self-hosted, provider-agnostic AI agent runtime with browser automation, shell execution, and extensible skill plugins.

- Catalog URL: https://awesomecua.com/resources/github-muhtalhakhan-open-agent/
- Original source: https://github.com/muhtalhakhan/open-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, workflow, web-navigation, automation
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:muhtalhakhan/open-agent

- Record JSON: https://awesomecua.com/resources/github-muhtalhakhan-open-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/muhtalhakhan/open-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/muhtalhakhan/open-agent/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 5942d59e27f861100ca800849a4a3ce6310bff3a9122fae6197aa287c326267d)
- https://raw.githubusercontent.com/muhtalhakhan/open-agent/HEAD/LICENSE (retrieved 2026-11-04T18:16:27Z; SHA-256 8526d3ba0cea820b824fef477f1b2e14a771752c06058307f5c79c9fa69ecdd3)

---

## MVP (Multiple View Prediction)

MVP improves GUI visual grounding by aggregating multi-view coordinate predictions across aspect-ratio and resolution transformations.

- Catalog URL: https://awesomecua.com/resources/github-zjuscl-mvp/
- Original source: https://github.com/ZJUSCL/MVP
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, screen-understanding
- Evidence checked: 2026-11-04T13:12:46Z
- ID: github:zjuscl/mvp

- Record JSON: https://awesomecua.com/resources/github-zjuscl-mvp/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZJUSCL/MVP/HEAD/README.md (retrieved 2026-11-04T13:12:46Z; SHA-256 b356b363ad1ee4e61e5fda9e80f7ffcfe114b4203be3dc786ce430032a559fa2)

---

## nanoAWM (Agent World Model Lab)

nanoAWM is an inspectable Agent World Model laboratory for simulating action consequences in long-horizon tool and computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-jlov7-nanoawm/
- Original source: https://github.com/jlov7/nanoAWM
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: world-models, planning, reward-models
- Evidence checked: 2026-11-04T16:30:02Z
- ID: github:jlov7/nanoawm

- Record JSON: https://awesomecua.com/resources/github-jlov7-nanoawm/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/jlov7/nanoAWM/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jlov7/nanoAWM/HEAD/README.md (retrieved 2026-11-04T16:30:02Z; SHA-256 d4fe0096111c76ca906c3e96be7c2fd46fca5bce227e8a6af5e36fe93f5e8cb6)
- https://raw.githubusercontent.com/jlov7/nanoAWM/HEAD/LICENSE (retrieved 2026-11-04T16:34:30Z; SHA-256 bba3001293375ea874b17b15bd82402110228db2f97011d5139fa565a463cbe2)

---

## Napaxi

Mobile-native agent SDK by Ant Group for building on-device AI agents with sandboxed skill execution.

- Catalog URL: https://awesomecua.com/resources/github-antgroup-napaxi/
- Original source: https://github.com/antgroup/Napaxi
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation, sandbox, tool-integration, workflow
- Evidence checked: 2026-11-04T16:30:14Z
- ID: github:antgroup/napaxi

- Record JSON: https://awesomecua.com/resources/github-antgroup-napaxi/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/antgroup/Napaxi/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/antgroup/Napaxi/HEAD/README.md (retrieved 2026-11-04T16:30:14Z; SHA-256 9355a9b74e93a453268c19c0f252971aacef9da88b0e57dd14477bcfd4b95eb1)
- https://raw.githubusercontent.com/antgroup/Napaxi/HEAD/LICENSE (retrieved 2026-11-04T16:34:51Z; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)

---

## NaturalGAIA & LightManus

NaturalGAIA and LightManus provide a hierarchical multi-agent framework with browser automation, code execution, and episodic memory.

- Catalog URL: https://awesomecua.com/resources/github-keles-coding-naturegaia/
- Original source: https://github.com/KeLes-Coding/NatureGAIA
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: web-navigation, planning, memory, tool-integration
- Evidence checked: 2026-11-04T13:12:20Z
- ID: github:keles-coding/naturegaia

- Record JSON: https://awesomecua.com/resources/github-keles-coding-naturegaia/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/KeLes-Coding/NatureGAIA/HEAD/README.md (retrieved 2026-11-04T13:12:20Z; SHA-256 f254c11e45a4542274ed6425988c220b256896b137b90cfd65ddd689038132cb)

---

## navforge

navforge is a self-hosted orchestration framework for coordinating multi-step computer-use and browser navigation agents.

- Catalog URL: https://awesomecua.com/resources/github-huzjie-navforge/
- Original source: https://github.com/huzjie/navforge
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: planning, workflow, automation, tool-integration
- Evidence checked: 2026-11-04T14:41:45Z
- ID: github:huzjie/navforge

- Record JSON: https://awesomecua.com/resources/github-huzjie-navforge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/huzjie/navforge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huzjie/navforge/HEAD/README.md (retrieved 2026-11-04T14:41:45Z; SHA-256 dd2dd132bdbf6a15cd8ebb6714a5a405e488b1babd1a1e64fd8c88e3c512c09a)
- https://raw.githubusercontent.com/huzjie/navforge/HEAD/LICENSE (retrieved 2026-11-04T14:45:17Z; SHA-256 ef04ae77a5da414deb50d4d0054357d14d2a11c73e451edc02c88a8b13641113)

---

## NeuroSight (QiraBot Vision Runtime)

Selector-free AI vision automation runtime for desktop applications, mobile screens, and games.

- Catalog URL: https://awesomecua.com/resources/github-vthanhhdev-qirabot-vision-runtime/
- Original source: https://github.com/vthanhhdev/qirabot-vision-runtime
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, android
- Topics: grounding, screen-understanding, automation
- Evidence checked: 2026-11-04T17:20:54Z
- ID: github:vthanhhdev/qirabot-vision-runtime

- Record JSON: https://awesomecua.com/resources/github-vthanhhdev-qirabot-vision-runtime/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vthanhhdev/qirabot-vision-runtime/main/README.md (retrieved 2026-11-04T17:20:54Z; SHA-256 af4ff0ff96230195190ca96085dfafcd6b3cfabfa8abfa04b63b4fbe62f61050)

---

## Nexus Computer Use Harness (NexusCUH)

NexusCUH is a computer-use agent harness with sandboxed execution, MCP integration, policy guardrails, and trace observability.

- Catalog URL: https://awesomecua.com/resources/github-subasah-computer-use-harness/
- Original source: https://github.com/subasah/computer-use-harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, linux
- Topics: sandbox, tool-integration, safety-security, observability
- Evidence checked: 2026-11-04T14:41:45Z
- ID: github:subasah/computer-use-harness

- Record JSON: https://awesomecua.com/resources/github-subasah-computer-use-harness/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/subasah/computer-use-harness/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/subasah/computer-use-harness/HEAD/README.md (retrieved 2026-11-04T14:41:45Z; SHA-256 cbd44b41f4e40311f4a833eff36e45b032890bded2ba49812ae16ba75dfbed91)
- https://raw.githubusercontent.com/subasah/computer-use-harness/HEAD/LICENSE (retrieved 2026-11-04T14:45:19Z; SHA-256 a6cba85bc92e0cff7a450b1d873c0eaa2e9fc96bf472df0247a26bec77bf3ff9)

---

## NNetNav

Collects and labels browser-exploration trajectories for agent training, with code for data processing, fine-tuning, and web evaluation.

- Catalog URL: https://awesomecua.com/resources/github-murtyshikhar-nnetnav/
- Original source: https://github.com/MurtyShikhar/NNetnav
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-10-16T10:42:34Z
- ID: github:murtyshikhar/nnetnav

- Record JSON: https://awesomecua.com/resources/github-murtyshikhar-nnetnav/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3)
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## NOMOS Browser

Governed AI agent web browser featuring a side-panel assistant, policy guardrails, and human handoff.

- Catalog URL: https://awesomecua.com/resources/github-voltolini-space-nomos-browser/
- Original source: https://github.com/Voltolini-SPACE/nomos-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:30:43Z
- ID: github:voltolini-space/nomos-browser

- Record JSON: https://awesomecua.com/resources/github-voltolini-space-nomos-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Voltolini-SPACE/nomos-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Voltolini-SPACE/nomos-browser/main/README.md (retrieved 2026-11-04T17:30:43Z; SHA-256 c6e015af61cd91834d6e5ab0d3cfff6ffa8eb48bffa8c795de6c3b5ce695db1f)
- https://raw.githubusercontent.com/Voltolini-SPACE/nomos-browser/HEAD/LICENSE (retrieved 2026-11-04T17:40:04Z; SHA-256 483d693ada13798af120ed43b2e1cb55e178c3f752066b632fadfa00dace6efb)

---

## Northstar (Legacy Portal CUA)

Discovers workflows on legacy credit-union web portals with an AI agent once and compiles them into deterministic scripts.

- Catalog URL: https://awesomecua.com/resources/github-zoyaarief-legacy-credit-union-automation/
- Original source: https://github.com/zoyaarief/legacy-credit-union-automation
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, workflow, efficiency, web-navigation
- Evidence checked: 2026-11-04T17:55:18Z
- ID: github:zoyaarief/legacy-credit-union-automation

- Record JSON: https://awesomecua.com/resources/github-zoyaarief-legacy-credit-union-automation/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zoyaarief/legacy-credit-union-automation/main/README.md (retrieved 2026-11-04T17:55:18Z; SHA-256 1ebac074f817be96056f981e1d4939f68e21d5432b11bbb5e592b9ccc140a60a)

---

## NORTHTEK Ghost

Provides verified desktop control for AI agents on Windows and Linux across native GUI applications lacking APIs.

- Catalog URL: https://awesomecua.com/resources/github-northtekdevs-ghost/
- Original source: https://github.com/NORTHTEKDevs/ghost
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: automation, screen-understanding, self-reflection, safety-security
- Evidence checked: 2026-11-04T16:10:29Z
- ID: github:northtekdevs/ghost

- Record JSON: https://awesomecua.com/resources/github-northtekdevs-ghost/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/NORTHTEKDevs/ghost/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/NORTHTEKDevs/ghost/HEAD/README.md (retrieved 2026-11-04T16:10:29Z; SHA-256 423bc3f48c3f99da059e26c9ce93210e97ee1150b4a59d056f67cd33ed979353)
- https://raw.githubusercontent.com/NORTHTEKDevs/ghost/HEAD/LICENSE (retrieved 2026-11-04T16:13:37Z; SHA-256 67e10c651f69d52caf8c1dc930fc7eb8ff2839457f2abbd9f382229ff6b95644)

---

## NOVA-exe

Local-first desktop AI agent platform built with TypeScript, Electron, React, and SQLite for permissioned computer control.

- Catalog URL: https://awesomecua.com/resources/github-vincenzo-afk-nova-exe/
- Original source: https://github.com/vincenzo-afk/NOVA-exe
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: safety-security, tool-integration, workflow, automation
- Evidence checked: 2026-11-04T17:30:27Z
- ID: github:vincenzo-afk/nova-exe

- Record JSON: https://awesomecua.com/resources/github-vincenzo-afk-nova-exe/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/vincenzo-afk/NOVA-exe/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vincenzo-afk/NOVA-exe/main/README.md (retrieved 2026-11-04T17:30:27Z; SHA-256 23a0beb1769a67373a157d5f5fa98c8ad46f50f884977ec58be9c7040982f719)
- https://raw.githubusercontent.com/vincenzo-afk/NOVA-exe/HEAD/LICENSE (retrieved 2026-11-04T17:40:04Z; SHA-256 ddf9725976f321a5011723ccbfba107f4fc5864154bbf85fb1b65e78d0a26837)

---

## ocaml-cdp

Typed OCaml client library for the Chrome DevTools Protocol with an asynchronous Lwt driver by Ahrefs.

- Catalog URL: https://awesomecua.com/resources/github-ahrefs-ocaml-cdp/
- Original source: https://github.com/ahrefs/ocaml-cdp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-11-04T17:55:14Z
- ID: github:ahrefs/ocaml-cdp

- Record JSON: https://awesomecua.com/resources/github-ahrefs-ocaml-cdp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ahrefs/ocaml-cdp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ahrefs/ocaml-cdp/main/README.md (retrieved 2026-11-04T17:55:14Z; SHA-256 6c826b9662241e854819eadfcc6de85a08063463f1076e6e288fd3b567f1c173)
- https://raw.githubusercontent.com/ahrefs/ocaml-cdp/HEAD/LICENSE (retrieved 2026-11-04T18:00:02Z; SHA-256 e8253eb46900999614cf2518b03698f050240e165b18fced1f2f599cd2e6660b)

---

## Ocular

Hardened web capture and hostile-HTML analysis engine with anti-bot reconnaissance for browser agents.

- Catalog URL: https://awesomecua.com/resources/github-guatxlabs-ocular/
- Original source: https://github.com/guatxlabs/ocular
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, web-navigation, screen-understanding
- Evidence checked: 2026-11-04T17:20:53Z
- ID: github:guatxlabs/ocular

- Record JSON: https://awesomecua.com/resources/github-guatxlabs-ocular/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/guatxlabs/ocular/HEAD/COPYING
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/guatxlabs/ocular/main/README.md (retrieved 2026-11-04T17:20:53Z; SHA-256 04d0360c380d8cf3aee9202b8bfa742e91e7e0d4fb378baf80df482f24ff57dd)
- https://raw.githubusercontent.com/guatxlabs/ocular/HEAD/COPYING (retrieved 2026-11-04T17:26:47Z; SHA-256 0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0)

---

## Ommatix

Ommatix is an incremental spatial-indexing perception engine that tracks stable UI element IDs and state diffs across desktop frames.

- Catalog URL: https://awesomecua.com/resources/github-yosoyepa-ommatix/
- Original source: https://github.com/Yosoyepa/Ommatix
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, state-tracking, efficiency
- Evidence checked: 2026-11-04T14:20:16Z
- ID: github:yosoyepa/ommatix

- Record JSON: https://awesomecua.com/resources/github-yosoyepa-ommatix/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Yosoyepa/Ommatix/HEAD/README.md (retrieved 2026-11-04T14:20:16Z; SHA-256 6920b23d97a0d1983e1a67c04896eb23d6457448f7934d54812c696f54a9f510)

---

## OmniInfer

OmniInfer is a local LLM and VLM inference engine with OpenAI-compatible APIs for desktop and edge agents.

- Catalog URL: https://awesomecua.com/resources/github-omnimind-ai-omniinfer/
- Original source: https://github.com/omnimind-ai/OmniInfer
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: cross-platform, desktop, macos, linux, windows
- Topics: efficiency, screen-understanding
- Evidence checked: 2026-11-04T13:12:29Z
- ID: github:omnimind-ai/omniinfer

- Record JSON: https://awesomecua.com/resources/github-omnimind-ai-omniinfer/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/omnimind-ai/OmniInfer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/omnimind-ai/OmniInfer/HEAD/README.md (retrieved 2026-11-04T13:12:29Z; SHA-256 a9b932260bc9680dec3d85bad7e8b031772aa29be62ddb284ec127b94cb5a424)
- https://raw.githubusercontent.com/omnimind-ai/OmniInfer/HEAD/LICENSE (retrieved 2026-11-04T13:46:52Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## OmOWright

AI-agent-oriented wrapper around Playwright that exposes the Playwright API shape models already know from pretraining.

- Catalog URL: https://awesomecua.com/resources/github-code-yeongyu-omowright/
- Original source: https://github.com/code-yeongyu/omowright
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, automation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:code-yeongyu/omowright

- Record JSON: https://awesomecua.com/resources/github-code-yeongyu-omowright/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/code-yeongyu/omowright/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/code-yeongyu/omowright/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 b11aa403ef62fe69705a46f9fc0f939123c90f10945233689d362828ee947ff6)
- https://raw.githubusercontent.com/code-yeongyu/omowright/HEAD/LICENSE (retrieved 2026-11-04T18:00:05Z; SHA-256 b083425948376611de9b92b0aeb7377e604505756ea427e541a34d9b030d4dc1)

---

## one-for-all

Unified macOS control plane for AI agents spanning browser automation, native desktop apps, terminals, and system hardware.

- Catalog URL: https://awesomecua.com/resources/github-elijahumana-one-for-all/
- Original source: https://github.com/ElijahUmana/one-for-all
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: tool-integration, automation, web-navigation, workflow
- Evidence checked: 2026-11-04T16:51:42Z
- ID: github:elijahumana/one-for-all

- Record JSON: https://awesomecua.com/resources/github-elijahumana-one-for-all/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ElijahUmana/one-for-all/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ElijahUmana/one-for-all/HEAD/README.md (retrieved 2026-11-04T16:51:42Z; SHA-256 a5dcad64a2d6c6318fece29366c4ce76f95c6cf2d5b2dc90650deff1a5e755eb)
- https://raw.githubusercontent.com/ElijahUmana/one-for-all/HEAD/LICENSE (retrieved 2026-11-04T16:56:35Z; SHA-256 8083baeb980a8f7dd9838c560d26af9d9b16986d278305046cdfde6d577a9276)

---

## Open Duet (open-dots)

Open Duet is a self-hosted multi-agent workspace where named AI coworkers operate isolated sandboxes, browsers, and terminals.

- Catalog URL: https://awesomecua.com/resources/github-anil-matcha-open-dots/
- Original source: https://github.com/Anil-matcha/open-dots
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, linux
- Topics: sandbox, workflow, automation, tool-integration
- Evidence checked: 2026-11-04T15:03:35Z
- ID: github:anil-matcha/open-dots

- Record JSON: https://awesomecua.com/resources/github-anil-matcha-open-dots/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Anil-matcha/open-dots/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Anil-matcha/open-dots/HEAD/README.md (retrieved 2026-11-04T15:03:35Z; SHA-256 c42d3e9b54157667fda380e49775de77df3ad99f65e26626e63ab1aca0c879ea)
- https://raw.githubusercontent.com/Anil-matcha/open-dots/HEAD/LICENSE (retrieved 2026-11-04T15:22:51Z; SHA-256 c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c)

---

## Open Frame

Deterministic desktop automation engine for AI agents implementing a capture-recognize-act-verify loop.

- Catalog URL: https://awesomecua.com/resources/github-off-camber-open-frame/
- Original source: https://github.com/Off-Camber/open-frame
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: grounding, screen-understanding, automation, self-reflection
- Evidence checked: 2026-11-04T16:30:11Z
- ID: github:off-camber/open-frame

- Record JSON: https://awesomecua.com/resources/github-off-camber-open-frame/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Off-Camber/open-frame/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Off-Camber/open-frame/HEAD/README.md (retrieved 2026-11-04T16:30:11Z; SHA-256 3cf11c71954cecbca0a6f15ba036f524113b009a0d309627a38d3caea49de365)
- https://raw.githubusercontent.com/Off-Camber/open-frame/HEAD/LICENSE (retrieved 2026-11-04T16:34:49Z; SHA-256 aef3d7883963999082757a215102abdf7037b40d2b417560b1fe0641c423a40d)

---

## Open Grok Bot

Local-first AI agent workspace featuring governed computer use, approval gates, and multi-persona orchestration.

- Catalog URL: https://awesomecua.com/resources/github-anil-matcha-open-grok-bot/
- Original source: https://github.com/Anil-matcha/open-grok-bot
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: safety-security, human-in-the-loop, automation, workflow
- Evidence checked: 2026-11-04T17:20:55Z
- ID: github:anil-matcha/open-grok-bot

- Record JSON: https://awesomecua.com/resources/github-anil-matcha-open-grok-bot/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Anil-matcha/open-grok-bot/main/README.md (retrieved 2026-11-04T17:20:55Z; SHA-256 3ef69b660c0996515d544a12162f0577eddecbbb30f1a883541854c0a1d5af25)

---

## OpenAgentFleet

Local-first multi-agent desktop platform with named AI coworkers and a watchable Linux virtual desktop.

- Catalog URL: https://awesomecua.com/resources/github-robbyczgw-cla-openagentfleet/
- Original source: https://github.com/robbyczgw-cla/openagentfleet
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, windows, macos
- Topics: sandbox, workflow, automation, human-in-the-loop
- Evidence checked: 2026-11-04T17:20:37Z
- ID: github:robbyczgw-cla/openagentfleet

- Record JSON: https://awesomecua.com/resources/github-robbyczgw-cla-openagentfleet/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/robbyczgw-cla/openagentfleet/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/robbyczgw-cla/openagentfleet/main/README.md (retrieved 2026-11-04T17:20:37Z; SHA-256 b05aa0b28bce694e1f75351ec4a7ec0ffbcff9f40b96f031f16457a2ee1064ac)
- https://raw.githubusercontent.com/robbyczgw-cla/openagentfleet/HEAD/LICENSE (retrieved 2026-11-04T17:26:52Z; SHA-256 b056b29f644ffdda182e8c2b35d628b281c8bd6bce52f2958968c65a3b594d81)

---

## OpenBrowser

Python browser-automation framework whose CodeAgent shows a model indexed DOM state and an optional screenshot, then runs the Python it writes against Chrome DevTools Protocol helpers in a persistent namespace.

- Catalog URL: https://awesomecua.com/resources/github-billy-enrizky-openbrowser-ai/
- Original source: https://github.com/billy-enrizky/openbrowser-ai
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-10-18T15:33:16Z
- ID: github:billy-enrizky/openbrowser-ai

### Limitations

Published on PyPI as openbrowser-ai. The CodeAgent (src/openbrowser/code_use/service.py) sends a compact serialized DOM state with element indices and, unless vision is turned off, a JPEG screenshot; the model replies with Python that the executor runs in a persistent namespace. The MCP server exposes a single execute_code tool over the same namespace, and a CLI daemon keeps a browser session alive between commands. The repository also holds a hosted-platform backend and frontend, and infra/training with SFT, online GRPO and diffusion-language-model RL code for FormFactory form filling; the README links the two related papers on ResearchGate. Token and latency comparisons with other browser tools are publisher-reported.

- Record JSON: https://awesomecua.com/resources/github-billy-enrizky-openbrowser-ai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/README.md (retrieved 2026-10-18T15:33:16Z; SHA-256 5932f9377209714b55d969410f301422a8083cd702af79974e70e000f0e5d73b)
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/src/openbrowser/code_use/service.py (retrieved 2026-10-18T15:32:55Z; SHA-256 0a3890c37aac37f7bc7fcc3430a3de830978436d5f67911a95f7ac2c923f6a5e)
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/src/openbrowser/mcp/server.py (retrieved 2026-10-18T15:32:55Z; SHA-256 04724480ffd6c9d1b29c1f7b193ce35e80c0b82934d72d5f2924e73b61033f91)
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/infra/training/finetuning/online_grpo_trainer.py (retrieved 2026-10-18T15:32:56Z; SHA-256 6cb5223bd2403f9dd343206fef7b77edc74c803ec0b265f03570ee11bef84510)
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/LICENSE (retrieved 2026-10-18T15:32:56Z; SHA-256 4341c316d2ba2ec1e37f184e8ac1251def4368da78262633f1197174cd671aab)
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/LICENSE (retrieved 2026-10-18T15:33:22Z; SHA-256 4341c316d2ba2ec1e37f184e8ac1251def4368da78262633f1197174cd671aab)

---

## Openbrowser (Semantic Headless Runtime)

Headless browser runtime that converts webpages into compact structured semantic state for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-datuomart5423-openbrowser/
- Original source: https://github.com/Datuomart5423/Openbrowser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, efficiency
- Evidence checked: 2026-11-04T16:10:31Z
- ID: github:datuomart5423/openbrowser

- Record JSON: https://awesomecua.com/resources/github-datuomart5423-openbrowser/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Datuomart5423/Openbrowser/HEAD/README.md (retrieved 2026-11-04T16:10:31Z; SHA-256 9d050e7e888dddb5d70dc76a28ad97ed4fca9c6bd949a76072489c7be36e10be)

---

## OpenDesk

OpenDesk is an API-driven desktop automation runtime that lets AI agents control windows, mouse/keyboard, OCR, and files via JavaScript or MCP.

- Catalog URL: https://awesomecua.com/resources/github-shopable-ai-opendesk/
- Original source: https://github.com/shopable-ai/opendesk
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: automation, tool-integration, screen-understanding
- Evidence checked: 2026-11-04T16:30:04Z
- ID: github:shopable-ai/opendesk

- Record JSON: https://awesomecua.com/resources/github-shopable-ai-opendesk/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shopable-ai/opendesk/HEAD/README.md (retrieved 2026-11-04T16:30:04Z; SHA-256 f0d1bb045c795d3f4bb956ef6894c1bfbbf3738d0fdd071a3d50e450af014ea2)

---

## OpenDesktop & OpenWorker

Cloud desktop infrastructure and container sandbox engine paired with the OpenWorker conversational desktop agent.

- Catalog URL: https://awesomecua.com/resources/github-chrisschouk-open-desktop/
- Original source: https://github.com/chrisschouk/open-desktop
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: sandbox, automation, workflow
- Evidence checked: 2026-11-04T16:51:52Z
- ID: github:chrisschouk/open-desktop

- Record JSON: https://awesomecua.com/resources/github-chrisschouk-open-desktop/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/chrisschouk/open-desktop/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chrisschouk/open-desktop/HEAD/README.md (retrieved 2026-11-04T16:51:52Z; SHA-256 99d067c7a46e729671915b565c6d1e7e5716acf35d1ac22871e41a98ac7f0867)
- https://raw.githubusercontent.com/chrisschouk/open-desktop/HEAD/LICENSE (retrieved 2026-11-04T16:56:45Z; SHA-256 0345bde5d16a07788430a1908afd475a33465d03a163dd899b05d819171f47fb)

---

## OpenGUI

OpenGUI is an Android GUI agent framework that combines screen perception, accessibility trees, and ADB actuation for real-device automation.

- Catalog URL: https://awesomecua.com/resources/github-core-mate-opengui/
- Original source: https://github.com/Core-Mate/OpenGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, grounding, planning, automation
- Evidence checked: 2026-11-04T14:20:07Z
- ID: github:core-mate/opengui

- Record JSON: https://awesomecua.com/resources/github-core-mate-opengui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Core-Mate/OpenGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Core-Mate/OpenGUI/HEAD/README.md (retrieved 2026-11-04T14:20:07Z; SHA-256 40407d8a2f16b1e665f539ab39a30cf57866e014751a43aeb95a8252fddb768d)
- https://raw.githubusercontent.com/Core-Mate/OpenGUI/HEAD/LICENSE (retrieved 2026-11-04T14:23:53Z; SHA-256 3add24e9703c18f329e115c453dae6b2f9526d58917df59c714d0ab6cbb50cb1)

---

## OpenGUI (Windows Native Service)

Windows-native .NET 9 desktop automation service exposing sub-millisecond named-pipe IPC and UI Automation perception to LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-lessenings-prog-opengui/
- Original source: https://github.com/lessenings-prog/OpenGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, automation, efficiency
- Evidence checked: 2026-11-04T16:10:35Z
- ID: github:lessenings-prog/opengui

- Record JSON: https://awesomecua.com/resources/github-lessenings-prog-opengui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lessenings-prog/OpenGUI/HEAD/README.md (retrieved 2026-11-04T16:10:35Z; SHA-256 b2c4df4b70fc7848a5900e76b876d46a812548db07fb60d5569d268e7f34ac90)

---

## OpenHands

OpenHands is an open-source platform for software development and computer-use agents equipped with a sandboxed shell, code editor, and browser.

- Catalog URL: https://awesomecua.com/resources/github-openhands-openhands/
- Original source: https://github.com/OpenHands/OpenHands
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, linux
- Topics: sandbox, web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T13:12:30Z
- ID: github:openhands/openhands

- Record JSON: https://awesomecua.com/resources/github-openhands-openhands/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenHands/OpenHands/HEAD/README.md (retrieved 2026-11-04T13:12:30Z; SHA-256 262c2c72e92dd093a113103319921dc7c7da0f28519b470853bcb3209ad85dac)

---

## OpenMemory (LongMemory)

OpenMemory provides local-first temporal graph memory, decay scoring, and MCP integration for long-horizon AI agents.

- Catalog URL: https://awesomecua.com/resources/github-caviraoss-openmemory/
- Original source: https://github.com/CaviraOSS/OpenMemory
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon
- Evidence checked: 2026-11-04T13:12:09Z
- ID: github:caviraoss/openmemory

- Record JSON: https://awesomecua.com/resources/github-caviraoss-openmemory/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/CaviraOSS/OpenMemory/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CaviraOSS/OpenMemory/HEAD/README.md (retrieved 2026-11-04T13:12:09Z; SHA-256 ef8f5d07e1fd0c337427b56a16038f72c69d0f4040aea22f953d054289d1333a)
- https://raw.githubusercontent.com/CaviraOSS/OpenMemory/HEAD/LICENSE (retrieved 2026-11-04T13:42:00Z; SHA-256 f34bece2de63bf21dfea3bf034231beda315c10631f2174b539225746719420c)

---

## OpenMobile code

OpenMobile pipeline for AndroidWorld: random-walk exploration, memory-based task-instruction synthesis, learner/expert policy-switching rollouts, conversion to LLaMA-Factory SFT data, and AndroidWorld evaluation.

- Catalog URL: https://awesomecua.com/resources/github-njucckevin-openmobile-code/
- Original source: https://github.com/njucckevin/OpenMobile-Code
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:53:33Z
- ID: github:njucckevin/openmobile-code

### Limitations

Official code of the OpenMobile paper (COLM 2026 per the README). AndroidWorld/ holds a modified AndroidWorld copy with exploration (random_walk_aw.py), rollout (run_diy.py), post-processing and evaluation scripts; task_synthesis/ builds screen context and environment memory and generates and judges instructions with a strong multimodal model; LlamaFactory/ registers the four released data splits and gives Qwen3-VL and Qwen3.5 SFT configs. The tree also contains an Android-Lab folder. The Qwen3VL agent in AndroidWorld/android_world/agents/seeact_v.py sends recent plain screenshots to an OpenAI-compatible endpoint and executes the returned mobile_use tool calls; UI-element metadata is saved for post-processing only. The policy-switching mode lets a strong model monitor a weaker actor and take over. The README's AndroidWorld success rates include Qwen3.5-9B results it identifies as unreproducible under vLLM.

- Record JSON: https://awesomecua.com/resources/github-njucckevin-openmobile-code/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md (retrieved 2026-10-19T06:53:33Z; SHA-256 8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080)
- https://api.github.com/repos/njucckevin/OpenMobile-Code/git/trees/faca68f386aff7277cdf494c84693c51090229c6?recursive=1 (retrieved 2026-10-19T06:53:35Z; SHA-256 eb6fdd1db8dc4497999545d3f2cccdc8fe76a4adb2fd645801d0c15a7600b7fb)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/AndroidWorld/android_world/agents/seeact_v.py (retrieved 2026-10-19T06:53:36Z; SHA-256 93d1727d85392961feeb885c55d3d6834d8ff9f7085c7a54754cff126feee0fd)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LlamaFactory/dataset_info.json (retrieved 2026-10-19T06:53:36Z; SHA-256 1c915333e2d61d34742eb6f669ca0a3721f7566ce79a2eecdb9706845bd53138)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LICENSE (retrieved 2026-10-19T06:53:35Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE (retrieved 2026-10-19T06:54:58Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)

---

## OpenQA

OpenQA is an open-source agentic browser testing harness that executes natural-language test assertions with dynamic selector resolution.

- Catalog URL: https://awesomecua.com/resources/github-openqa-labs-openqa/
- Original source: https://github.com/openqa-labs/openqa
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, automation, grounding
- Evidence checked: 2026-11-04T15:45:43Z
- ID: github:openqa-labs/openqa

- Record JSON: https://awesomecua.com/resources/github-openqa-labs-openqa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/openqa-labs/openqa/HEAD/README.md (retrieved 2026-11-04T15:45:43Z; SHA-256 f300fa0e2695b98695e0498573a1e7f881ffac0a2c1944ebcd901c7f8585e8dd)

---

## OpenTeam

Self-hosted multi-agent platform with persistent memory, browser automation, and computer-use execution.

- Catalog URL: https://awesomecua.com/resources/github-raghavpillai-openteam/
- Original source: https://github.com/raghavpillai/openteam
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: memory, workflow, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:raghavpillai/openteam

- Record JSON: https://awesomecua.com/resources/github-raghavpillai-openteam/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/raghavpillai/openteam/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/raghavpillai/openteam/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 9dd996f5972a3862f39835b416a24af2fecd9b164ac457b225c9f3869f102ace)
- https://raw.githubusercontent.com/raghavpillai/openteam/HEAD/LICENSE (retrieved 2026-11-04T18:00:20Z; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)

---

## OpenTiny NEXT-SDKs (WebMCP)

OpenTiny NEXT-SDKs implements in-page WebMCP servers, polyfills, and WebSkills so AI agents can invoke web application capabilities directly.

- Catalog URL: https://awesomecua.com/resources/github-opentiny-webmcp-sdk/
- Original source: https://github.com/opentiny/webmcp-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation, automation
- Evidence checked: 2026-11-04T15:03:31Z
- ID: github:opentiny/webmcp-sdk

- Record JSON: https://awesomecua.com/resources/github-opentiny-webmcp-sdk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/opentiny/webmcp-sdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/opentiny/webmcp-sdk/HEAD/README.md (retrieved 2026-11-04T15:03:31Z; SHA-256 b7eae3acfece7cd68366a293e35cbf286c8696e5d644cc38207062f7967e1486)
- https://raw.githubusercontent.com/opentiny/webmcp-sdk/HEAD/LICENSE (retrieved 2026-11-04T15:22:44Z; SHA-256 50621afdf77f504b7d652c0aa05fdc30b79becbe9780ce26b2abab7039de4023)
- https://api.github.com/repos/opentiny/next-sdk (retrieved 2026-10-18T15:52:24Z; SHA-256 f0664b4094e42b1701baba1ef800b22547a8204a7d24c73a85605c236364158a)
- https://api.github.com/repos/opentiny/webmcp-sdk (retrieved 2026-10-18T15:52:25Z; SHA-256 f0664b4094e42b1701baba1ef800b22547a8204a7d24c73a85605c236364158a)

---

## Operant

Local-first desktop agent runtime that compiles exploratory AI trajectories into deterministic, invariant-gated skills.

- Catalog URL: https://awesomecua.com/resources/github-alpharomerojl-operant/
- Original source: https://github.com/AlpharomeroJL/operant
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: imitation-learning, recording, safety-security, workflow
- Evidence checked: 2026-11-04T16:51:41Z
- ID: github:alpharomerojl/operant

- Record JSON: https://awesomecua.com/resources/github-alpharomerojl-operant/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/AlpharomeroJL/operant/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AlpharomeroJL/operant/HEAD/README.md (retrieved 2026-11-04T16:51:41Z; SHA-256 a378d035106042913c3e02c11d592370e5709f62d4647b2245da05dae4634d19)
- https://raw.githubusercontent.com/AlpharomeroJL/operant/HEAD/LICENSE (retrieved 2026-11-04T16:56:34Z; SHA-256 52f4c84c9c8f383f7f0c15742fbaddd47cd4cb5ae15208cde5366336c4afaf4b)

---

## ora webmcp

Coding-agent plugin and toolkit for auditing, implementing, and verifying WebMCP support on websites.

- Catalog URL: https://awesomecua.com/resources/github-ora-webmcp/
- Original source: https://github.com/ora/webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, evaluation, web-navigation
- Evidence checked: 2026-11-04T17:55:18Z
- ID: github:ora/webmcp

- Record JSON: https://awesomecua.com/resources/github-ora-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ora/webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ora/webmcp/main/README.md (retrieved 2026-11-04T17:55:18Z; SHA-256 1de44f2c5a3ec8af46911af7e75d35ef2aefe5e84606c4b8f2e732b40bba30a7)
- https://raw.githubusercontent.com/ora/webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:00:18Z; SHA-256 6b4957b9b1d24e5f614e5b94fe53193f8a5011973376236306c19e6b70407789)

---

## Orbit (orbit-cua)

Orbit is a Python computer-use framework that combines natural-language screen grounding with composable, typed workflow steps.

- Catalog URL: https://awesomecua.com/resources/github-aadya940-orbit/
- Original source: https://github.com/aadya940/orbit
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, macos, windows, linux
- Topics: automation, workflow, grounding
- Evidence checked: 2026-11-04T15:45:50Z
- ID: github:aadya940/orbit

- Record JSON: https://awesomecua.com/resources/github-aadya940-orbit/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/aadya940/orbit/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aadya940/orbit/HEAD/README.md (retrieved 2026-11-04T15:45:50Z; SHA-256 c98a912445159a718790e5aa6bbfc60f9948e7cb69440493616df8bcb67e7420)
- https://raw.githubusercontent.com/aadya940/orbit/HEAD/LICENSE (retrieved 2026-11-04T15:57:36Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## ORBIT framework

Inspect-based multi-agent evaluation framework with role, scheduling and communication controls, BrowserART accessibility-tree actions, and desktop mouse, keyboard and screenshot tools.

- Catalog URL: https://awesomecua.com/resources/github-wlanderson0-orbit/
- Original source: https://github.com/wlanderson0/orbit
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, safety-security, web-navigation, observability
- Evidence checked: 2026-10-20T13:41:22.467183+00:00
- ID: github:wlanderson0/orbit

### Limitations

BrowserART tools return accessibility trees, including the screenshot-named refresh. Qualification is scenario-specific: the project documents browser-judge and desktop-scoring limits; its opt-in exact-send oracle covers one derived local task and tests the local send condition. Runtime profiles and scoring policies are separate. Apache-2.0 is the top-level Orbit code declaration. No installation, release archive or live evaluation was tested.

- Record JSON: https://awesomecua.com/resources/github-wlanderson0-orbit/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Record only the publisher's top-level Apache-2.0 declaration for Orbit-original code. NOTICE explicitly preserves per-component terms; neither bundled or external data nor model weights inherit this declaration. Upstream BrowserART licensing declarations remain in conflict; Orbit’s account leaves their resolution open.
  Sources: https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE, https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/NOTICE

### Primary evidence

- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/README.md (retrieved 2026-10-20T13:41:22.467183+00:00; SHA-256 b6743e3e9e5256d7afa8bb411baf246b60ba71bcfb84eda5a816fba3ddd7d78b)
- https://api.github.com/repos/wlanderson0/orbit (retrieved 2026-10-20T13:39:57.052202+00:00; SHA-256 0436414b9bcc4307f3bcde476a544da6fe1dd5baa90939eed392942490fbfbf7)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/browser/browserart/tools.py (retrieved 2026-10-20T13:42:37.098639+00:00; SHA-256 c47d046b129999da5e63b7723a3f3e2e0cc31c27ce74b45f71f8c6d0df1fc0d8)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/desktop/osworld/tools.py (retrieved 2026-10-20T14:10:32.910533Z; SHA-256 2cce76b22252a415d64c356b2062771e528b554dd83b6f88fca769f48fa8a826)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/docs/benchmark-qualification.md (retrieved 2026-10-20T14:09:35.060985Z; SHA-256 66515d7ee87eab5a2f42c26132d0bf3e2a3b9c006156d2378181cf91966a2903)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/browser/browserart/scorer.py (retrieved 2026-10-20T14:10:29.541892Z; SHA-256 94c781028dc80b2a748d759fae2456f6a986da7487651a6bcbb179e8ad4fe023)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE (retrieved 2026-10-20T13:41:29.036076+00:00; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/NOTICE (retrieved 2026-10-20T14:09:31.550310Z; SHA-256 f68a64f775b1f329416f2fe294bb07b5e475893f77d1cdb5300bdb08acf95410)
- https://arxiv.org/html/2609.33102v1 (retrieved 2026-10-20T13:12:28.833839+00:00; SHA-256 3ea667f4187ba601011e5ff00c4d63676b6d9903d12b80a0d7d5dd9920f00c65)

---

## Orbit UI

Self-hosted visual workflow builder for authoring and running desktop computer-use automation inside Docker containers.

- Catalog URL: https://awesomecua.com/resources/github-aadya940-orbit-ui/
- Original source: https://github.com/aadya940/orbit-ui
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: workflow, sandbox, automation
- Evidence checked: 2026-11-04T16:10:28Z
- ID: github:aadya940/orbit-ui

- Record JSON: https://awesomecua.com/resources/github-aadya940-orbit-ui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aadya940/orbit-ui/HEAD/README.md (retrieved 2026-11-04T16:10:28Z; SHA-256 4aa9195e3f6ff582fd7ef0d8da475248efd18f589d3a956d2d4a9d36c91cfc8c)

---

## Orquestrador de Features

Multi-agent loop that plans React Native mobile features, writes code, drives the simulator UI, and verifies visual results.

- Catalog URL: https://awesomecua.com/resources/github-gustavo-em-orchestrator-features/
- Original source: https://github.com/gustavo-em/orchestrator-features
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, ios, desktop
- Topics: mobile-navigation, evaluation, workflow, self-reflection
- Evidence checked: 2026-11-04T17:55:22Z
- ID: github:gustavo-em/orchestrator-features

- Record JSON: https://awesomecua.com/resources/github-gustavo-em-orchestrator-features/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/gustavo-em/orchestrator-features/main/README.md (retrieved 2026-11-04T17:55:22Z; SHA-256 bd9e07581e0ba432c20dabde13341a10a223d7eaf580d5170c54d895479ca213)

---

## OS-Sentinel

Safety-checking environment and benchmark for mobile agents on AndroidWorld that judges proposed actions with rule-based and VLM-based checks, evaluated on the MobileRisk trajectory dataset.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-sentinel/
- Original source: https://github.com/OS-Copilot/OS-Sentinel
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: safety-security
- Evidence checked: 2026-10-16T06:40:54Z
- ID: github:os-copilot/os-sentinel

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-sentinel/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OS-Copilot/OS-Sentinel/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Sentinel/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 42bf4aea8369ac2909bf27bcb1078756c2c26567e2b46284c8f3a9e4c4f636c1)
- https://raw.githubusercontent.com/OS-Copilot/OS-Sentinel/HEAD/LICENSE (retrieved 2026-10-16T06:42:07Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Ossabellator Bounded Computer-Use Runtime

Bounded computer-use runtime and semantic browser engine with explicit capability and policy enforcement.

- Catalog URL: https://awesomecua.com/resources/github-ossabellator-computer-use/
- Original source: https://github.com/OssaBellator/computer-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: safety-security, web-navigation, screen-understanding, automation
- Evidence checked: 2026-11-04T17:20:53Z
- ID: github:ossabellator/computer-use

- Record JSON: https://awesomecua.com/resources/github-ossabellator-computer-use/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OssaBellator/computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OssaBellator/computer-use/main/README.md (retrieved 2026-11-04T17:20:53Z; SHA-256 fd3a7aeebdd0a52bb03eafe09099b57f2fd42913b68a6f734e491bdcdcfdf3db)
- https://raw.githubusercontent.com/OssaBellator/computer-use/HEAD/LICENSE (retrieved 2026-11-04T17:26:51Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## OSWorld Qwen2.5-VL Enhanced

Provides an OpenAI-compatible Qwen2.5-VL computer-use agent and multi-environment evaluation runner for OSWorld.

- Catalog URL: https://awesomecua.com/resources/github-issumer-ku-osworld-qwen2-5vl-enhanced/
- Original source: https://github.com/issumer-ku/OSWorld-Qwen2.5VL-Enhanced
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, grounding, action-prediction
- Evidence checked: 2026-11-04T14:41:45Z
- ID: github:issumer-ku/osworld-qwen2.5vl-enhanced

- Record JSON: https://awesomecua.com/resources/github-issumer-ku-osworld-qwen2-5vl-enhanced/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/issumer-ku/OSWorld-Qwen2.5VL-Enhanced/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/issumer-ku/OSWorld-Qwen2.5VL-Enhanced/HEAD/README.md (retrieved 2026-11-04T14:41:45Z; SHA-256 65b246d91994da3409c1b7125acda133494b1f1bb9c19ae92f7ff511b60d7f74)
- https://raw.githubusercontent.com/issumer-ku/OSWorld-Qwen2.5VL-Enhanced/HEAD/LICENSE (retrieved 2026-11-04T14:45:17Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## OSWorld-CogAgent

Provides a provider-neutral CogAgent-9B model server, adapter, and multi-environment evaluation runner for OSWorld.

- Catalog URL: https://awesomecua.com/resources/github-issumer-ku-osworld-cogagent/
- Original source: https://github.com/issumer-ku/OSWorld-CogAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, grounding, action-prediction
- Evidence checked: 2026-11-04T14:41:45Z
- ID: github:issumer-ku/osworld-cogagent

- Record JSON: https://awesomecua.com/resources/github-issumer-ku-osworld-cogagent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/issumer-ku/OSWorld-CogAgent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/issumer-ku/OSWorld-CogAgent/HEAD/README.md (retrieved 2026-11-04T14:41:45Z; SHA-256 3b513fc306f0117538f7e667349b31b4526dc2d32fe358edb3e1e4f814446f6a)
- https://raw.githubusercontent.com/issumer-ku/OSWorld-CogAgent/HEAD/LICENSE (retrieved 2026-11-04T14:45:15Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## OWL (Optimized Workforce Learning)

OWL is a multi-agent automation framework built on CAMEL-AI for browser interaction, document processing, and real-world task execution.

- Catalog URL: https://awesomecua.com/resources/github-camel-ai-owl/
- Original source: https://github.com/camel-ai/owl
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: workflow, planning, web-navigation, tool-integration
- Evidence checked: 2026-11-04T13:12:09Z
- ID: github:camel-ai/owl

- Record JSON: https://awesomecua.com/resources/github-camel-ai-owl/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/camel-ai/owl/HEAD/README.md (retrieved 2026-11-04T13:12:09Z; SHA-256 8b63fdda8103147b5ce20e29a04dbc8c36d1f9c7d24599209b2b584c5f0d4df1)

---

## Oya Browser

Oya Browser is a governance-aware browser control plane for human-AI collaboration across local and cloud browser providers.

- Catalog URL: https://awesomecua.com/resources/github-oyadotai-oya-browser/
- Original source: https://github.com/OyadotAI/oya-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, safety-security, sandbox
- Evidence checked: 2026-11-04T15:45:51Z
- ID: github:oyadotai/oya-browser

- Record JSON: https://awesomecua.com/resources/github-oyadotai-oya-browser/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OyadotAI/oya-browser/HEAD/README.md (retrieved 2026-11-04T15:45:51Z; SHA-256 4602c4164157a38d9f62ebc67a99ffea77c5ce8880e4510d71f021cfdffaad8b)

---

## OysterWorkflow

OysterWorkflow captures real human computer work and extracts structured, reusable workflow graphs for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-shuxinyang111-oysterworkflow/
- Original source: https://github.com/ShuxinYang111/oysterworkflow
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: recording, workflow, imitation-learning, memory
- Evidence checked: 2026-11-04T16:10:30Z
- ID: github:shuxinyang111/oysterworkflow

- Record JSON: https://awesomecua.com/resources/github-shuxinyang111-oysterworkflow/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ShuxinYang111/oysterworkflow/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ShuxinYang111/oysterworkflow/HEAD/README.md (retrieved 2026-11-04T16:10:30Z; SHA-256 828a374c4ef9d9e13437a525641eff9a57c5bc4cce632e7c2f03eefbd8584314)
- https://raw.githubusercontent.com/ShuxinYang111/oysterworkflow/HEAD/LICENSE (retrieved 2026-11-04T16:13:39Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Pactora

WebMCP marketplace and verification harness featuring a closed-loop self-healing browser verifier.

- Catalog URL: https://awesomecua.com/resources/github-mrnetwork0001-pactora/
- Original source: https://github.com/mrnetwork0001/Pactora
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: self-reflection, evaluation, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:22Z
- ID: github:mrnetwork0001/pactora

- Record JSON: https://awesomecua.com/resources/github-mrnetwork0001-pactora/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mrnetwork0001/Pactora/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mrnetwork0001/Pactora/main/README.md (retrieved 2026-11-04T17:55:22Z; SHA-256 b0cdab51b7fc58372232e315a96f579eb8a1bce4bedc28ef6e993a563763e34a)
- https://raw.githubusercontent.com/mrnetwork0001/Pactora/HEAD/LICENSE (retrieved 2026-11-04T18:00:17Z; SHA-256 44534fecd67847932405674a0e145bed4d3d047b9ed8bf98b516a96850994c41)

---

## page-agent-sdk

In-page AI assistant SDK that mounts a chat widget and lets LLMs safely read and mutate webpage state via schema-validated tools.

- Catalog URL: https://awesomecua.com/resources/github-whyymj-page-agent-sdk/
- Original source: https://github.com/whyymj/page-agent-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, ui-design, human-in-the-loop
- Evidence checked: 2026-11-04T16:51:50Z
- ID: github:whyymj/page-agent-sdk

- Record JSON: https://awesomecua.com/resources/github-whyymj-page-agent-sdk/record.json

### License declarations

- code: ISC — https://raw.githubusercontent.com/whyymj/page-agent-sdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/whyymj/page-agent-sdk/HEAD/README.md (retrieved 2026-11-04T16:51:50Z; SHA-256 38f06fe1bfda766f1bab26ff631ad24e28eccac6f04ad5afea57ad1c7f6f81dc)
- https://raw.githubusercontent.com/whyymj/page-agent-sdk/HEAD/LICENSE (retrieved 2026-11-04T16:56:42Z; SHA-256 c0009ac9da345a5ab2f10e821d723cd72b3bf6fe631635c37108ff98a5e5894f)

---

## PageRunner

PageRunner is a browser-agent orchestration platform with bounded execution loops, deterministic replay, and golden-trace verification.

- Catalog URL: https://awesomecua.com/resources/github-say-5-pagerunner/
- Original source: https://github.com/SAY-5/pagerunner
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow, recording, robustness
- Evidence checked: 2026-11-04T16:10:32Z
- ID: github:say-5/pagerunner

- Record JSON: https://awesomecua.com/resources/github-say-5-pagerunner/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SAY-5/pagerunner/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SAY-5/pagerunner/HEAD/README.md (retrieved 2026-11-04T16:10:32Z; SHA-256 d58a7356f8305ec0e9d2d1e8efabdb399fdd1f748a9f847685aa7e348f59edfa)
- https://raw.githubusercontent.com/SAY-5/pagerunner/HEAD/LICENSE (retrieved 2026-11-04T16:13:43Z; SHA-256 e51b9efe501c078b23415e10e0981b9928c5cb9da53ef76f443bfdd986aa6b21)

---

## Paragent

Stateful browser execution layer that records an agent task once, replays it without LLM calls, and self-repairs when selectors change.

- Catalog URL: https://awesomecua.com/resources/github-myselfsiddharth-paragent/
- Original source: https://github.com/myselfsiddharth/Paragent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: recording, efficiency, robustness, web-navigation
- Evidence checked: 2026-11-04T16:51:50Z
- ID: github:myselfsiddharth/paragent

- Record JSON: https://awesomecua.com/resources/github-myselfsiddharth-paragent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/myselfsiddharth/Paragent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/myselfsiddharth/Paragent/HEAD/README.md (retrieved 2026-11-04T16:51:50Z; SHA-256 31aafdc33acaebf9a2ba715625bac2d227b1ce67575d7472274cafd85ec121e8)
- https://raw.githubusercontent.com/myselfsiddharth/Paragent/HEAD/LICENSE (retrieved 2026-11-04T16:56:43Z; SHA-256 0b0e3321308730de97acb534cfb50e2c2c40f030289a3b6c19b46f80f11573fe)

---

## PatchBridge Agent

Lightweight in-browser AI agent framework that retrofits natural-language automation onto legacy enterprise web portals.

- Catalog URL: https://awesomecua.com/resources/github-hanhan666666-patchbridge-agent/
- Original source: https://github.com/HanHan666666/patchbridge-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T17:30:43Z
- ID: github:hanhan666666/patchbridge-agent

- Record JSON: https://awesomecua.com/resources/github-hanhan666666-patchbridge-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HanHan666666/patchbridge-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HanHan666666/patchbridge-agent/main/README.md (retrieved 2026-11-04T17:30:43Z; SHA-256 3ffde3be3932afb4d587a0ee79ceaade5232e055cb0626fa306fe55c8cf037b8)
- https://raw.githubusercontent.com/HanHan666666/patchbridge-agent/HEAD/LICENSE (retrieved 2026-11-04T17:39:52Z; SHA-256 3e01277c4cc362fb52b2328c5d679dd8f38ee4cc666df637b289f9295c945188)

---

## Peerframe OpenBot

Self-hosted cross-platform control plane for managing persistent digital employees with browser and desktop capabilities.

- Catalog URL: https://awesomecua.com/resources/github-peerframe-openbot/
- Original source: https://github.com/Peerframe/openbot
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: workflow, sandbox, automation, tool-integration
- Evidence checked: 2026-11-04T17:55:18Z
- ID: github:peerframe/openbot

- Record JSON: https://awesomecua.com/resources/github-peerframe-openbot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Peerframe/openbot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Peerframe/openbot/main/README.md (retrieved 2026-11-04T17:55:18Z; SHA-256 de61030d8c3d8d3b3cd669a9ba03060139f155408deda72c6a42df4862f54af0)
- https://raw.githubusercontent.com/Peerframe/openbot/HEAD/LICENSE (retrieved 2026-11-04T18:00:19Z; SHA-256 0ca5e15545b57ba16a95c2f5948628aff9d9b4238ed01bf8ea873f02ae3151bb)

---

## perceive

perceive is a reachability-filtered perception layer for browser agents that prunes non-interactive or occluded DOM elements.

- Catalog URL: https://awesomecua.com/resources/github-gauthierpiarrette-perceive/
- Original source: https://github.com/gauthierpiarrette/perceive
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, grounding, web-navigation, efficiency
- Evidence checked: 2026-11-04T16:10:35Z
- ID: github:gauthierpiarrette/perceive

- Record JSON: https://awesomecua.com/resources/github-gauthierpiarrette-perceive/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/gauthierpiarrette/perceive/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/gauthierpiarrette/perceive/HEAD/README.md (retrieved 2026-11-04T16:10:35Z; SHA-256 558c0b62f395171caecc3a5c1895e290fa287f712b7c7d8b4e9f6f61f915ff28)
- https://raw.githubusercontent.com/gauthierpiarrette/perceive/HEAD/LICENSE (retrieved 2026-11-04T16:13:44Z; SHA-256 3cced6d64cbfcbb6b2c5daa7557ec577be88716394e7541ef873a79bd0fb1a95)

---

## Personae Browser

Desktop browser where every identity runs in an isolated Chromium partition for multi-account human and agent workflows.

- Catalog URL: https://awesomecua.com/resources/github-leek-emperor-personae/
- Original source: https://github.com/leek-emperor/Personae
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, linux, web
- Topics: sandbox, web-navigation, safety-security
- Evidence checked: 2026-11-04T18:11:45Z
- ID: github:leek-emperor/personae

- Record JSON: https://awesomecua.com/resources/github-leek-emperor-personae/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/leek-emperor/Personae/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/leek-emperor/Personae/main/README.md (retrieved 2026-11-04T18:11:45Z; SHA-256 5fb43abead02325b808e0f4c878d7fa56fa7542bf3a6610cef4876d8a8497de8)
- https://raw.githubusercontent.com/leek-emperor/Personae/HEAD/LICENSE (retrieved 2026-11-04T18:16:24Z; SHA-256 85769a6a76994b10c9b4e5967cbdcc6db4239b37f4d374d5dab918a726992a1b)

---

## philosophy79 web-agent

Local-first web and desktop automation toolkit integrating browser control, screen capture, and LLM tool calling.

- Catalog URL: https://awesomecua.com/resources/github-philosophy79-web-agent/
- Original source: https://github.com/Philosophy79/web-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-11-04T18:11:45Z
- ID: github:philosophy79/web-agent

- Record JSON: https://awesomecua.com/resources/github-philosophy79-web-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Philosophy79/web-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Philosophy79/web-agent/main/README.md (retrieved 2026-11-04T18:11:45Z; SHA-256 8c49ae3e11cbe97759d1746b94d1d17681942e26d7159230dc90684202e9f700)
- https://raw.githubusercontent.com/Philosophy79/web-agent/HEAD/LICENSE (retrieved 2026-11-04T18:16:28Z; SHA-256 924e0824f31cfbdc6f4e2cbfb3c6f8dc9a081d45c24d4a180275e288d0bd752d)

---

## PhoneClaw

PhoneClaw turns iOS and Android smartphones into local AI agent runtimes with on-device model inference and native system skills.

- Catalog URL: https://awesomecua.com/resources/github-kellyvv-phoneclaw/
- Original source: https://github.com/kellyvv/PhoneClaw
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios, android
- Topics: mobile-navigation, efficiency, tool-integration, automation
- Evidence checked: 2026-11-04T15:45:55Z
- ID: github:kellyvv/phoneclaw

- Record JSON: https://awesomecua.com/resources/github-kellyvv-phoneclaw/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/kellyvv/PhoneClaw/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kellyvv/PhoneClaw/HEAD/README.md (retrieved 2026-11-04T15:45:55Z; SHA-256 0a2062b193dfe07c3938e6e14bf7c8e94e6ad4654ed3bd734b76141489e5d3f0)
- https://raw.githubusercontent.com/kellyvv/PhoneClaw/HEAD/LICENSE (retrieved 2026-11-04T15:57:41Z; SHA-256 466dd22c17c6329965bf9221252ef2d6b62d474832e7bb59d5d9e4ca7a76a289)

---

## PhoneCLI

Mobile-agent harness that crawls an app into a YAML map of screens, replays compiled navigation commands through WebDriverAgent on iOS or ADB on Android, and falls back to a VLM for unseen screens.

- Catalog URL: https://awesomecua.com/resources/github-hkuds-phonecli/
- Original source: https://github.com/HKUDS/PhoneCLI
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios, android
- Topics: mobile-navigation, efficiency, workflow
- Evidence checked: 2026-10-18T11:56:14Z
- ID: github:hkuds/phonecli

### Limitations

Formerly published as HKUDS/OpenPhone; that address now resolves to this repository. phonecli/ is the iOS harness (WebDriverAgent) with prebuilt app maps, and phonecli_android/ runs the AndroidLab suite with compiled maps and a pure-VLM baseline. The repository also holds OpenPhone-3B training and synthetic-data pipelines and vLLM serving scripts; the weights and dataset are separate Hugging Face releases outside this repository record. Its evaluation replaces AndroidLab's rule-based checks with an LLM judge. The LICENSE names AndroidLab's author as a copyright holder.

- Record JSON: https://awesomecua.com/resources/github-hkuds-phonecli/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/README.md (retrieved 2026-10-18T11:56:14Z; SHA-256 58366c59652c9f03af0b31b094672b10992a82cd0cc63cd2e5884a41f3d8be3c)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli/README.md (retrieved 2026-10-18T11:55:50Z; SHA-256 921f8d53f52ce87cfc18f26391f4265cfe6ffc57cba8ecbd57702d7eb5a50737)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli_android/README.md (retrieved 2026-10-18T11:55:50Z; SHA-256 e6e30de3c3011fff356386bcfda3dd17c4de65d959a5ed5c3d30223e11e2fdcc)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/LICENSE (retrieved 2026-10-18T11:55:51Z; SHA-256 b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE (retrieved 2026-10-18T11:56:35Z; SHA-256 b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278)
- https://api.github.com/repos/HKUDS/OpenPhone (retrieved 2026-10-18T11:55:36Z; SHA-256 7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7)
- https://api.github.com/repos/HKUDS/PhoneCLI (retrieved 2026-10-18T11:55:37Z; SHA-256 7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7)

---

## Pix2Act

Pix2Act provides JAX/T5X training and evaluation code for pixel-only GUI agents on MiniWoB++ using behavioral cloning and tree search.

- Catalog URL: https://awesomecua.com/resources/github-google-deepmind-pix2act/
- Original source: https://github.com/google-deepmind/pix2act
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, reinforcement-learning, imitation-learning
- Evidence checked: 2026-11-04T13:12:15Z
- ID: github:google-deepmind/pix2act

- Record JSON: https://awesomecua.com/resources/github-google-deepmind-pix2act/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-deepmind/pix2act/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-deepmind/pix2act/HEAD/README.md (retrieved 2026-11-04T13:12:15Z; SHA-256 185efdd91156af0b895735000c8636b8ad74c0d86ce86f624476e81ce0c27d12)
- https://raw.githubusercontent.com/google-deepmind/pix2act/HEAD/LICENSE (retrieved 2026-11-04T13:22:44Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)

---

## pixelpi

Minimal 6-tool browser-agent harness whose entire tool definition fits in 1,196 tokens for context-efficient web automation.

- Catalog URL: https://awesomecua.com/resources/github-josharsh-pixelpi/
- Original source: https://github.com/josharsh/pixelpi
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, tool-integration
- Evidence checked: 2026-11-04T16:30:11Z
- ID: github:josharsh/pixelpi

- Record JSON: https://awesomecua.com/resources/github-josharsh-pixelpi/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/josharsh/pixelpi/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/josharsh/pixelpi/HEAD/README.md (retrieved 2026-11-04T16:30:11Z; SHA-256 27baa9049f9431f754850a5a08d1c11f954b4c966b6894987bfd3286786972e9)
- https://raw.githubusercontent.com/josharsh/pixelpi/HEAD/LICENSE (retrieved 2026-11-04T16:34:48Z; SHA-256 8f1796aa2da6423e1e22ea6ecb453db8bd53381b06e7be9274ef198c4ce30043)

---

## Plip OSS

Open-source macOS notch assistant and runtime for grounded, model-agnostic computer-use agents with verifiable action previews.

- Catalog URL: https://awesomecua.com/resources/github-hussainn7-plip-oss/
- Original source: https://github.com/hussainn7/plip-oss
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, human-in-the-loop, automation, safety-security
- Evidence checked: 2026-11-04T16:30:09Z
- ID: github:hussainn7/plip-oss

- Record JSON: https://awesomecua.com/resources/github-hussainn7-plip-oss/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/hussainn7/plip-oss/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hussainn7/plip-oss/HEAD/README.md (retrieved 2026-11-04T16:30:09Z; SHA-256 8f2a82f7c93699a3018d2d0f6a218f97a20133adc8b1d84c9cb96db5c71340f9)
- https://raw.githubusercontent.com/hussainn7/plip-oss/HEAD/LICENSE (retrieved 2026-11-04T16:34:38Z; SHA-256 987261e3f86324df894a1668cf7b9ba0cd797cb381d33e883f75240a2321a4ee)

---

## Polyform a11y-guide

Semantic accessibility page-guidance layer designed simultaneously for assistive technologies and AI browser agents.

- Catalog URL: https://awesomecua.com/resources/github-polyform-ai-a11y-guide/
- Original source: https://github.com/polyform-ai/a11y-guide
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, ui-design, web-navigation, tool-integration
- Evidence checked: 2026-11-04T18:11:33Z
- ID: github:polyform-ai/a11y-guide

- Record JSON: https://awesomecua.com/resources/github-polyform-ai-a11y-guide/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/polyform-ai/a11y-guide/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/polyform-ai/a11y-guide/main/README.md (retrieved 2026-11-04T18:11:33Z; SHA-256 29fc680641d5c80977fcf4ec0555b6c5cc7d3f4441b1df89bc37044dba666fd5)
- https://raw.githubusercontent.com/polyform-ai/a11y-guide/HEAD/LICENSE (retrieved 2026-11-04T18:16:29Z; SHA-256 a6e3ffacba2e932c439979d337f7cf604517353604b44f9e97393535c5b09a79)

---

## Praefectus

Policy-neutral Rust library and JSON CLI for host-authorized background computer-use execution.

- Catalog URL: https://awesomecua.com/resources/github-tschk-praefectus/
- Original source: https://github.com/tschk/praefectus
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: automation, tool-integration, safety-security
- Evidence checked: 2026-11-04T16:51:47Z
- ID: github:tschk/praefectus

- Record JSON: https://awesomecua.com/resources/github-tschk-praefectus/record.json

### License declarations

- code: ISC — https://raw.githubusercontent.com/tschk/praefectus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tschk/praefectus/HEAD/README.md (retrieved 2026-11-04T16:51:47Z; SHA-256 81b74af8c371109b5e91f38184e4423e20e5e528bc8e0081b58c74c82dbc5a6c)
- https://raw.githubusercontent.com/tschk/praefectus/HEAD/LICENSE (retrieved 2026-11-04T16:56:41Z; SHA-256 ea51803cdad44e27bd6f3f524acd2f7735f1c99e40d5037e7470edb3a4bdbd6f)

---

## PRAXOVELA

Governable, local-first desktop agent runtime with policy enforcement and auditable execution traces.

- Catalog URL: https://awesomecua.com/resources/github-axisvela-praxovela-open/
- Original source: https://github.com/axisvela/praxovela-open
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: safety-security, workflow, automation, observability
- Evidence checked: 2026-11-04T16:51:47Z
- ID: github:axisvela/praxovela-open

- Record JSON: https://awesomecua.com/resources/github-axisvela-praxovela-open/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/axisvela/praxovela-open/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/axisvela/praxovela-open/HEAD/README.md (retrieved 2026-11-04T16:51:47Z; SHA-256 7e971a2989cb5f708f725be95cd8327af30d8e9b8c0e5d18ae0f425f95133e78)
- https://raw.githubusercontent.com/axisvela/praxovela-open/HEAD/LICENSE (retrieved 2026-11-04T16:56:39Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## PreAct

PreAct compiles repeated computer-use agent trajectories into cached action graphs with lightweight visual verification to accelerate execution.

- Catalog URL: https://awesomecua.com/resources/github-19pine-ai-preact/
- Original source: https://github.com/19PINE-AI/PreAct
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web, macos, linux
- Topics: efficiency, memory, action-prediction
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:19pine-ai/preact

- Record JSON: https://awesomecua.com/resources/github-19pine-ai-preact/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/19PINE-AI/PreAct/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 fb443075f70910c38d54b4ec2bfaea0e4ee7b2b42e54beec7bc132335fbd83bd)

---

## ProfileFleet

Local-first TypeScript orchestration plane for managing persistent fingerprint-browser profiles across AI agents.

- Catalog URL: https://awesomecua.com/resources/github-enginefuture-profilefleet/
- Original source: https://github.com/enginefuture/profilefleet
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: sandbox, web-navigation, workflow, automation
- Evidence checked: 2026-11-04T18:11:40Z
- ID: github:enginefuture/profilefleet

- Record JSON: https://awesomecua.com/resources/github-enginefuture-profilefleet/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/enginefuture/profilefleet/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/enginefuture/profilefleet/main/README.md (retrieved 2026-11-04T18:11:40Z; SHA-256 783487b4732c410e15e2e84e1f9839258fd24b155bb52868939716975fac5d08)
- https://raw.githubusercontent.com/enginefuture/profilefleet/HEAD/LICENSE (retrieved 2026-11-04T18:16:19Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Project Interface (Legacy Web UI Compiler)

Uses an LLM to discover how to complete a task in a legacy web UI once and distills the run into a reusable programmatic interface.

- Catalog URL: https://awesomecua.com/resources/github-shahadeven-project-interface/
- Original source: https://github.com/ShahaDeven/Project_interface
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, recording, efficiency, web-navigation
- Evidence checked: 2026-11-04T16:52:00Z
- ID: github:shahadeven/project_interface

- Record JSON: https://awesomecua.com/resources/github-shahadeven-project-interface/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ShahaDeven/Project_interface/HEAD/README.md (retrieved 2026-11-04T16:52:00Z; SHA-256 ea489aaca5221d503d03b4bff55f3967e3127a4469cadec83bcd92a2105299ed)

---

## Project Tendril

Local-first Chromium browser and web-research runtime for autonomous AI agents.

- Catalog URL: https://awesomecua.com/resources/github-gadgethd-project-tendril/
- Original source: https://github.com/gadgethd/Project-Tendril
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, automation
- Evidence checked: 2026-11-04T17:30:33Z
- ID: github:gadgethd/project-tendril

- Record JSON: https://awesomecua.com/resources/github-gadgethd-project-tendril/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/gadgethd/Project-Tendril/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/gadgethd/Project-Tendril/main/README.md (retrieved 2026-11-04T17:30:33Z; SHA-256 8533b15186eedf82cba301f2cb6f0c26f01bd3ebcf786bc719d26a33900c2533)
- https://raw.githubusercontent.com/gadgethd/Project-Tendril/HEAD/LICENSE (retrieved 2026-11-04T17:39:52Z; SHA-256 31fcdbdf73030ad700255814ab1cc0667f01f67a6aef391f560abcca03f8f73d)

---

## Promptwright

Promptwright is an AI QA desktop agent that drives browsers from plain English or records user clicks into deterministic Playwright tests.

- Catalog URL: https://awesomecua.com/resources/github-sahajamit-promptwright/
- Original source: https://github.com/sahajamit/promptwright
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, evaluation, web-navigation, automation
- Evidence checked: 2026-11-04T15:03:35Z
- ID: github:sahajamit/promptwright

- Record JSON: https://awesomecua.com/resources/github-sahajamit-promptwright/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sahajamit/promptwright/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sahajamit/promptwright/HEAD/README.md (retrieved 2026-11-04T15:03:35Z; SHA-256 e9f0550361aa012e3f1fc258c1167458af87df284a24f5c8ff0773d22547218d)
- https://raw.githubusercontent.com/sahajamit/promptwright/HEAD/LICENSE (retrieved 2026-11-04T15:22:50Z; SHA-256 8cbc3f617d1df0c131e67257c25968f73316431b0391fed3a6d0163c889769a8)

---

## ProofPack

Pre-approval review and verification runtime where every agent finding and UI state is backed by a SHA-hashed capture.

- Catalog URL: https://awesomecua.com/resources/github-ebt55-proofpack/
- Original source: https://github.com/ebt55/proofpack
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: observability, safety-security, human-in-the-loop, evaluation
- Evidence checked: 2026-11-04T17:20:47Z
- ID: github:ebt55/proofpack

- Record JSON: https://awesomecua.com/resources/github-ebt55-proofpack/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ebt55/proofpack/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ebt55/proofpack/main/README.md (retrieved 2026-11-04T17:20:47Z; SHA-256 4702e73c6142b458e00e753264401bf4883e91595acbf9efd6b89b381d6c2f6a)
- https://raw.githubusercontent.com/ebt55/proofpack/HEAD/LICENSE (retrieved 2026-11-04T17:26:40Z; SHA-256 aed4860764139c1e9e52f7186ef64a188ae9522e0964c33b63cddcc0759252ac)

---

## Protean

Protean turns everyday human desktop and browser demonstrations into reusable, adaptive agent skills.

- Catalog URL: https://awesomecua.com/resources/github-aibrain-mnemis-protean/
- Original source: https://github.com/AIBrain-Mnemis/Protean
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: imitation-learning, recording, memory, workflow
- Evidence checked: 2026-11-04T16:30:02Z
- ID: github:aibrain-mnemis/protean

- Record JSON: https://awesomecua.com/resources/github-aibrain-mnemis-protean/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/AIBrain-Mnemis/Protean/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AIBrain-Mnemis/Protean/HEAD/README.md (retrieved 2026-11-04T16:30:02Z; SHA-256 7036ac0cb9a896ab0be026fc614620c53aac654eada31f34264615d8629f6046)
- https://raw.githubusercontent.com/AIBrain-Mnemis/Protean/HEAD/LICENSE (retrieved 2026-11-04T16:34:30Z; SHA-256 11d3f257fe15046b2fc573c22a670bf87fc7013108d4d57afdcbd150d6147061)

---

## PrzedWysylka WebMCP Lab

Browser-local WebMCP validation lab where agent proposals are verified against JSON schemas before human approval.

- Catalog URL: https://awesomecua.com/resources/github-greqone-przedwysylkawebmcplab/
- Original source: https://github.com/greqone/PrzedWysylkaWebMCPLab
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:15Z
- ID: github:greqone/przedwysylkawebmcplab

- Record JSON: https://awesomecua.com/resources/github-greqone-przedwysylkawebmcplab/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/greqone/PrzedWysylkaWebMCPLab/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/greqone/PrzedWysylkaWebMCPLab/main/README.md (retrieved 2026-11-04T17:55:15Z; SHA-256 790fb81bfc93ff82a86b877c7074b36d293b3d2d7ad0789b0ad569cebf6e2dad)
- https://raw.githubusercontent.com/greqone/PrzedWysylkaWebMCPLab/HEAD/LICENSE (retrieved 2026-11-04T18:00:11Z; SHA-256 694102b56022f2d3cbbecf7f204c3743a94d5db48395e742cb8d70f176534324)

---

## PUDA guidriver

Windows-first edge service for recording, verifying, and deterministically replaying reviewed GUI workflows.

- Catalog URL: https://awesomecua.com/resources/github-pudap-guidriver/
- Original source: https://github.com/PUDAP/guidriver
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: recording, evaluation, automation, screen-understanding
- Evidence checked: 2026-11-04T17:55:08Z
- ID: github:pudap/guidriver

- Record JSON: https://awesomecua.com/resources/github-pudap-guidriver/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PUDAP/guidriver/main/README.md (retrieved 2026-11-04T17:55:08Z; SHA-256 2bf40cda3187bf26cb1e5e21751552f68dfb2a9b34e6a0f6dc52a3d7b77751f3)

---

## PulsarRPA

PulsarRPA is a browser RPA and web-agent framework combining natural-language commands, XPath/SQL page querying, and stealth browser control.

- Catalog URL: https://awesomecua.com/resources/github-platonai-pulsarrpa/
- Original source: https://github.com/platonai/pulsarRPA
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-11-04T13:12:31Z
- ID: github:platonai/pulsarrpa

- Record JSON: https://awesomecua.com/resources/github-platonai-pulsarrpa/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/platonai/pulsarRPA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/platonai/pulsarRPA/HEAD/README.md (retrieved 2026-11-04T13:12:31Z; SHA-256 549cc5dc1ae08391be80c8ee81dfc34c70b2da5e967459468ba3a8d24b596e45)
- https://raw.githubusercontent.com/platonai/pulsarRPA/HEAD/LICENSE (retrieved 2026-11-04T13:23:01Z; SHA-256 bb06f5791c0314bf5527083cc3b1a6e5ed1054eaf406f7006b9e6d6c24023e6f)

---

## Pursuit Permit WebMCP

Revision-bound capacity permit protocol for WebMCP browser agents that invalidates stale approvals when page state changes.

- Catalog URL: https://awesomecua.com/resources/github-moaqil-pursuit-permit-webmcp/
- Original source: https://github.com/MoAqil/pursuit-permit-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, state-tracking, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:37Z
- ID: github:moaqil/pursuit-permit-webmcp

- Record JSON: https://awesomecua.com/resources/github-moaqil-pursuit-permit-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MoAqil/pursuit-permit-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MoAqil/pursuit-permit-webmcp/main/README.md (retrieved 2026-11-04T18:11:37Z; SHA-256 77d74568bac5ca24929580f2daf1431932de34ab653f2df6163f82054b4ccaa6)
- https://raw.githubusercontent.com/MoAqil/pursuit-permit-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:26Z; SHA-256 ac4b2afe4383f7e416bca91c7a8efad28a1f0e9538a7428fdafd8f7c9e0bcdd4)

---

## PuterVision Behavior-MCP

High-frequency (~60Hz) in-browser behavior-tree execution engine exposed over the Model Context Protocol.

- Catalog URL: https://awesomecua.com/resources/github-putervision-behavior-mcp/
- Original source: https://github.com/putervision/behavior-mcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: efficiency, planning, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:30:34Z
- ID: github:putervision/behavior-mcp

- Record JSON: https://awesomecua.com/resources/github-putervision-behavior-mcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/putervision/behavior-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/putervision/behavior-mcp/main/README.md (retrieved 2026-11-04T17:30:34Z; SHA-256 fc91fe1a8af6ec3f9d01cfb8431178744cf78a27de8f6dc28ea5f6bbce61a238)
- https://raw.githubusercontent.com/putervision/behavior-mcp/HEAD/LICENSE (retrieved 2026-11-04T17:39:59Z; SHA-256 29721015875cabcfb27baad656a21bf326f0db9b41ac8121004016362a424d0b)

---

## Q-Reflector

Q-Reflector trains an 8B vision-language verifier with generated pre/post-action conditions to detect and correct GUI action errors.

- Catalog URL: https://awesomecua.com/resources/github-pockyitachi-q-reflector/
- Original source: https://github.com/pockyitachi/Q-Reflector
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, desktop, web
- Topics: self-reflection, reward-models, grounding
- Evidence checked: 2026-11-04T14:02:44Z
- ID: github:pockyitachi/q-reflector

- Record JSON: https://awesomecua.com/resources/github-pockyitachi-q-reflector/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pockyitachi/Q-Reflector/HEAD/README.md (retrieved 2026-11-04T14:02:44Z; SHA-256 61cdf6e4fb13db943002107322d765886d8e4cfe3c507aa55a5b5f32f97a3db9)

---

## Q1X Community Orchestrator

Provider-neutral, OS-neutral orchestration runtime for long-horizon desktop and browser agent workflows.

- Catalog URL: https://awesomecua.com/resources/github-quoralinex-q1x-community-orchestrator/
- Original source: https://github.com/Quoralinex/q1x-community-orchestrator
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, windows, macos, linux
- Topics: long-horizon, workflow, tool-integration, automation
- Evidence checked: 2026-11-04T18:11:47Z
- ID: github:quoralinex/q1x-community-orchestrator

- Record JSON: https://awesomecua.com/resources/github-quoralinex-q1x-community-orchestrator/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Quoralinex/q1x-community-orchestrator/main/README.md (retrieved 2026-11-04T18:11:47Z; SHA-256 3cb71dc06063453245d6dc6298df98269335c9b036d4133d339898402a44352d)

---

## Qirabot

Qirabot is a pure-vision multimodal GUI automation framework for operating browsers, mobile apps, desktops, and games without DOM selectors.

- Catalog URL: https://awesomecua.com/resources/github-qirabot-qirabot/
- Original source: https://github.com/qirabot/qirabot
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android, ios
- Topics: grounding, screen-understanding, automation
- Evidence checked: 2026-11-04T16:30:05Z
- ID: github:qirabot/qirabot

- Record JSON: https://awesomecua.com/resources/github-qirabot-qirabot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/qirabot/qirabot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/qirabot/qirabot/HEAD/README.md (retrieved 2026-11-04T16:30:05Z; SHA-256 627030ca1778201d545809155cb0ad2d35aa6788d59cc2cc2b770522a96856d0)
- https://raw.githubusercontent.com/qirabot/qirabot/HEAD/LICENSE (retrieved 2026-11-04T16:34:32Z; SHA-256 ab7f1733abfe38ed1754def4f89f9791a6947d916cc7395875fb5bcfc44d955e)

---

## QUE CORE

QUE CORE is a hybrid Rust and Python runtime exposing 121 consolidated system, window, and GUI control tools for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-qubasehq-que-tools/
- Original source: https://github.com/qubasehq/que-tools
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows, linux
- Topics: tool-integration, automation, grounding
- Evidence checked: 2026-11-04T14:20:05Z
- ID: github:qubasehq/que-tools

- Record JSON: https://awesomecua.com/resources/github-qubasehq-que-tools/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/qubasehq/que-tools/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/qubasehq/que-tools/HEAD/README.md (retrieved 2026-11-04T14:20:05Z; SHA-256 74792671b44c01890158f843ed62a50071c6591fd0226320431c74b29b48a012)
- https://raw.githubusercontent.com/qubasehq/que-tools/HEAD/LICENSE (retrieved 2026-11-04T14:23:50Z; SHA-256 6ad2b5748d4653ede15033223411c47c9f31b7f6a125850502d25be68c322065)

---

## QUESTZ

Fail-closed browser automation reliability framework that halts execution on structural DOM drift before corrupting downstream data.

- Catalog URL: https://awesomecua.com/resources/github-pnx89-questz/
- Original source: https://github.com/PNX89/QUESTZ
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: robustness, safety-security, web-navigation, evaluation
- Evidence checked: 2026-11-04T17:20:51Z
- ID: github:pnx89/questz

- Record JSON: https://awesomecua.com/resources/github-pnx89-questz/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/PNX89/QUESTZ/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PNX89/QUESTZ/main/README.md (retrieved 2026-11-04T17:20:51Z; SHA-256 a14740f7e016b5040afbd2bbfb119c5a42247d6adb62e32b8208791aaa4b8fdb)
- https://raw.githubusercontent.com/PNX89/QUESTZ/HEAD/LICENSE (retrieved 2026-11-04T17:26:51Z; SHA-256 128ef5c20600745091360baa3679591d23d5afa32e88a355a3d3f1dbf1174eba)

---

## Rally v2 for WebMCP

WebMCP orchestration runtime where ChatGPT initiates jobs and specialized browser agents execute and verify web tasks.

- Catalog URL: https://awesomecua.com/resources/github-agent9ai-rally-webmcp/
- Original source: https://github.com/Agent9AI/rally-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow, tool-integration, web-navigation, evaluation
- Evidence checked: 2026-11-04T17:55:24Z
- ID: github:agent9ai/rally-webmcp

- Record JSON: https://awesomecua.com/resources/github-agent9ai-rally-webmcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Agent9AI/rally-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Agent9AI/rally-webmcp/main/README.md (retrieved 2026-11-04T17:55:24Z; SHA-256 7fdb097364b00814b87b01a038c85ab05c618869e541c456921481bc476373cf)
- https://raw.githubusercontent.com/Agent9AI/rally-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:00:02Z; SHA-256 829011a43e0770020a7ef68dcc6c8dd4c4017a385d9e1c832d1f05bea800d192)

---

## Re-Prefill

Re-Prefill calibrates prefill visual attention representations in vision-language models to improve zero-shot GUI grounding accuracy.

- Catalog URL: https://awesomecua.com/resources/github-linjiaping1-re-prefill/
- Original source: https://github.com/linjiaping1/Re-Prefill
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: grounding, training-free, efficiency
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:linjiaping1/re-prefill

- Record JSON: https://awesomecua.com/resources/github-linjiaping1-re-prefill/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/linjiaping1/Re-Prefill/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 dd30acfd9d7ec3f8f4ea92e508286c85438644b14696303815fe92e2da1fb92b)

---

## Reasonix Computer Use

Cross-platform desktop automation plugin combining native accessibility trees (UIA/AXAPI/AT-SPI2) with EasyOCR visual fallback.

- Catalog URL: https://awesomecua.com/resources/github-plocr-reasonix-computer-use/
- Original source: https://github.com/Plocr/Reasonix-computer-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, linux, macos
- Topics: grounding, screen-understanding, automation
- Evidence checked: 2026-11-04T16:51:41Z
- ID: github:plocr/reasonix-computer-use

- Record JSON: https://awesomecua.com/resources/github-plocr-reasonix-computer-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Plocr/Reasonix-computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Plocr/Reasonix-computer-use/HEAD/README.md (retrieved 2026-11-04T16:51:41Z; SHA-256 d8ba3536fb7555da6040d170bb8773680a90b5065d160b9eb967fffdd021c5b0)
- https://raw.githubusercontent.com/Plocr/Reasonix-computer-use/HEAD/LICENSE (retrieved 2026-11-04T16:56:33Z; SHA-256 229173537f22b17cca5983c32b9ac62c00cb831c27c4534e3a6d04a65b09365d)

---

## RecordAgent (ButvanAgent)

Local-first Tauri and AgentScope desktop agent workbench with permission approvals, tool orchestration, and workflow recording.

- Catalog URL: https://awesomecua.com/resources/github-kavanio-recordagent/
- Original source: https://github.com/Kavanio/RecordAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: recording, human-in-the-loop, tool-integration, workflow
- Evidence checked: 2026-11-04T17:20:55Z
- ID: github:kavanio/recordagent

- Record JSON: https://awesomecua.com/resources/github-kavanio-recordagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Kavanio/RecordAgent/main/README.md (retrieved 2026-11-04T17:20:55Z; SHA-256 6fbb5a06986ac38605865f0d6b0bfe507ee063ff49d344d721357bb7f19f8eec)

---

## REDLINE WebMCP

Browser-native WebMCP authority boundary where visiting agents stage reviewable state changes for human approval.

- Catalog URL: https://awesomecua.com/resources/github-eloiramos-redline/
- Original source: https://github.com/EloiRamos/redline
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:eloiramos/redline

- Record JSON: https://awesomecua.com/resources/github-eloiramos-redline/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/EloiRamos/redline/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/EloiRamos/redline/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 f50075a1a3a751c2950f873e01c521ec24c6cb7e9ea7ba8a5c6db7caacaf367a)
- https://raw.githubusercontent.com/EloiRamos/redline/HEAD/LICENSE (retrieved 2026-11-04T18:00:10Z; SHA-256 1e576f61e769ac7ffab808936a3ad96be2e03b7c364f70070b1e3554098b7893)

---

## RedTeamCUA

A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-redteamcua/
- Original source: https://github.com/OSU-NLP-Group/RedTeamCUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, evaluation, sandbox
- Evidence checked: 2026-10-17T02:44:04Z
- ID: github:osu-nlp-group/redteamcua

### Limitations

The release includes environment code, adversarial scenario configuration and RTC-Bench task-generation assets. The project declares Apache-2.0, while incorporated environments retain their licenses. It distinguishes full task runs from tests initialized at injection locations.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-redteamcua/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OSU-NLP-Group/RedTeamCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/RedTeamCUA/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 782dea8635b417bc89d21489cacea215ee6878ba5a1d4b9e18ca7b2913545ab6)
- https://api.github.com/repos/OSU-NLP-Group/RedTeamCUA (retrieved 2026-10-17T02:44:04Z; SHA-256 10a9bb268e611da40ae6edba6777917abb6e97d43dcb480e772ae8169b687e10)
- https://api.github.com/repos/OSU-NLP-Group/RedTeamCUA/git/trees/main?recursive=1 (retrieved 2026-10-17T02:44:04Z; SHA-256 712f1b7bc13b593cf23ecfab72cec33d1c256afe23a383e49d7d5b2996a0f55c)
- https://raw.githubusercontent.com/OSU-NLP-Group/RedTeamCUA/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/OSU-NLP-Group/RedTeamCUA/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## ReMe

ReMe is a local-first personal knowledge and procedural memory management framework for autonomous LLM agents.

- Catalog URL: https://awesomecua.com/resources/github-agentscope-ai-reme/
- Original source: https://github.com/agentscope-ai/ReMe
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, long-horizon
- Evidence checked: 2026-11-04T13:12:04Z
- ID: github:agentscope-ai/reme

- Record JSON: https://awesomecua.com/resources/github-agentscope-ai-reme/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/agentscope-ai/ReMe/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agentscope-ai/ReMe/HEAD/README.md (retrieved 2026-11-04T13:12:04Z; SHA-256 b44750ef6f3c05a6f3ce7e91eec8ab7ffdbd67cb42fcedda3628d489884bc73c)
- https://raw.githubusercontent.com/agentscope-ai/ReMe/HEAD/LICENSE (retrieved 2026-11-04T13:23:06Z; SHA-256 cc54d679aaced751c096f120b666355c106d9394d28f93f6df353973f6cd7dbe)

---

## Replay (Teach-by-Demonstration)

Converts human screen demonstrations of real desktop and web work into verifiable, repeatable AI agent workflows.

- Catalog URL: https://awesomecua.com/resources/github-misb74-replay/
- Original source: https://github.com/misb74/Replay
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: imitation-learning, recording, workflow, automation
- Evidence checked: 2026-11-04T17:20:51Z
- ID: github:misb74/replay

- Record JSON: https://awesomecua.com/resources/github-misb74-replay/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/misb74/Replay/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/misb74/Replay/main/README.md (retrieved 2026-11-04T17:20:51Z; SHA-256 efe6c1691d82f1eda317b58ecfbb8f1ce9d8b8955fde0ba308d6dd9b01d77184)
- https://raw.githubusercontent.com/misb74/Replay/HEAD/LICENSE (retrieved 2026-11-04T17:26:49Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Replay AI

Discovers UI workflows once using a local LLM and compiles the successful trajectory into a deterministic replay script.

- Catalog URL: https://awesomecua.com/resources/github-bryansbtian-replay-ai/
- Original source: https://github.com/bryansbtian/replay-ai
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: recording, efficiency, workflow, automation
- Evidence checked: 2026-11-04T17:20:49Z
- ID: github:bryansbtian/replay-ai

- Record JSON: https://awesomecua.com/resources/github-bryansbtian-replay-ai/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bryansbtian/replay-ai/main/README.md (retrieved 2026-11-04T17:20:49Z; SHA-256 4a08f1ba94c662e644a9a0f634270193c1051a6d454840df8508ec6d4289e8c7)

---

## reverseloom

AI browser agent framework that inspects live web traffic to reverse-engineer site protocols into browser-free Python crawlers.

- Catalog URL: https://awesomecua.com/resources/github-kuichi-x-reverseloom/
- Original source: https://github.com/KuiChi-x/reverseloom
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, efficiency, data-generation
- Evidence checked: 2026-11-04T16:51:44Z
- ID: github:kuichi-x/reverseloom

- Record JSON: https://awesomecua.com/resources/github-kuichi-x-reverseloom/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/KuiChi-x/reverseloom/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/KuiChi-x/reverseloom/HEAD/README.md (retrieved 2026-11-04T16:51:44Z; SHA-256 49f5867879b9e7a9074c141042563e54a74d27454fd0c93b7e35bcbfc89a18ac)
- https://raw.githubusercontent.com/KuiChi-x/reverseloom/HEAD/LICENSE (retrieved 2026-11-04T16:56:36Z; SHA-256 8e5b14574bc8ffe3b071e27546f3331bcb6173bf4a986c8a0e5048a6573f1659)

---

## Ringlight WebMCP

WebMCP investigation console where browser agents trace entity graphs across live web views with human review.

- Catalog URL: https://awesomecua.com/resources/github-doom2quake-ringlight/
- Original source: https://github.com/doom2quake/ringlight
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: observability, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:05Z
- ID: github:doom2quake/ringlight

- Record JSON: https://awesomecua.com/resources/github-doom2quake-ringlight/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/doom2quake/ringlight/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/doom2quake/ringlight/main/README.md (retrieved 2026-11-04T17:55:05Z; SHA-256 352817f0dd97700c0634b99bb116ceb315bdf7013d71722deef432dc139d4caa)
- https://raw.githubusercontent.com/doom2quake/ringlight/HEAD/LICENSE (retrieved 2026-11-04T18:00:08Z; SHA-256 f41c7a1d8c671b2366bf67dc55515853eb7b173d5d22a57a6233b05aa487f603)

---

## RishabhP1508 Understudy

Records a single LLM-driven exploration of a legacy UI into a typed capability artifact for deterministic zero-LLM replay.

- Catalog URL: https://awesomecua.com/resources/github-rishabhp1508-understudy/
- Original source: https://github.com/RishabhP1508/understudy
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: imitation-learning, recording, efficiency, workflow
- Evidence checked: 2026-11-04T17:20:37Z
- ID: github:rishabhp1508/understudy

- Record JSON: https://awesomecua.com/resources/github-rishabhp1508-understudy/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/RishabhP1508/understudy/main/README.md (retrieved 2026-11-04T17:20:37Z; SHA-256 bc5633f620e137c9248e9cbd9947c014a2eabfe22d25e42b5e71e181d64a6790)

---

## robotsix-browser

Interactive Playwright headless-browser and form-filling HTTP service for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-damien-robotsix-robotsix-browser/
- Original source: https://github.com/damien-robotsix/robotsix-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-11-04T17:55:12Z
- ID: github:damien-robotsix/robotsix-browser

- Record JSON: https://awesomecua.com/resources/github-damien-robotsix-robotsix-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/damien-robotsix/robotsix-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/damien-robotsix/robotsix-browser/main/README.md (retrieved 2026-11-04T17:55:12Z; SHA-256 f0e6923797628185fc449f28bcbcb875655f49e6eae405c46d6bfa25456fe9b7)
- https://raw.githubusercontent.com/damien-robotsix/robotsix-browser/HEAD/LICENSE (retrieved 2026-11-04T18:00:07Z; SHA-256 27854a9ecbe7b9b70058634fd0bdbb9f9aa2468e1cd38dab9b560c1085301608)

---

## rotary (rx4)

Rust agent harness engine providing tool loops, session persistence, permission gates, computer-use primitives, and MCP support.

- Catalog URL: https://awesomecua.com/resources/github-tschk-rotary/
- Original source: https://github.com/tschk/rotary
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, linux, macos, windows
- Topics: tool-integration, safety-security, automation, workflow
- Evidence checked: 2026-11-04T16:51:43Z
- ID: github:tschk/rotary

- Record JSON: https://awesomecua.com/resources/github-tschk-rotary/record.json

### License declarations

- code: MPL-2.0 — https://raw.githubusercontent.com/tschk/rotary/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tschk/rotary/HEAD/README.md (retrieved 2026-11-04T16:51:43Z; SHA-256 c3ffbb5cf610cae610bc1c0234c340a32c316089fbb5749a77f43f84134770cb)
- https://raw.githubusercontent.com/tschk/rotary/HEAD/LICENSE (retrieved 2026-11-04T16:56:35Z; SHA-256 d8d2562a7cb68ffdfe91fc66af1ed4a8a4e272aa4ab59bea7451ba34b9aba3d4)

---

## rote

Record-once, replay-many computer-use automation framework for legacy banking and back-office web applications lacking APIs.

- Catalog URL: https://awesomecua.com/resources/github-bhuvanb3110-rote/
- Original source: https://github.com/bhuvanb3110/rote
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, workflow, efficiency, automation
- Evidence checked: 2026-11-04T16:52:00Z
- ID: github:bhuvanb3110/rote

- Record JSON: https://awesomecua.com/resources/github-bhuvanb3110-rote/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bhuvanb3110/rote/HEAD/README.md (retrieved 2026-11-04T16:52:00Z; SHA-256 585c5df7ad727e660eb7ad2ab60cbb6f3360a77535a7cc93ea4c6b94e551bbaf)

---

## Rove (Thread WebMCP Workspace)

Shared WebMCP research workspace where human users and browser agents co-curate and compare web items.

- Catalog URL: https://awesomecua.com/resources/github-chris-miracle-thread/
- Original source: https://github.com/Chris-Miracle/thread
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:07Z
- ID: github:chris-miracle/thread

- Record JSON: https://awesomecua.com/resources/github-chris-miracle-thread/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Chris-Miracle/thread/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Chris-Miracle/thread/main/README.md (retrieved 2026-11-04T17:55:07Z; SHA-256 bd57d7623b5bf5f13184f94c26a7ba273ef12133a2662d3940a8c01bb759d62a)
- https://raw.githubusercontent.com/Chris-Miracle/thread/HEAD/LICENSE (retrieved 2026-11-04T18:00:04Z; SHA-256 cff3f531bb1e2760402c59ace98600f41079e5725d3e50aae25ba133e396c03f)

---

## RPA Desktop Canal Visual

Closed-loop visual desktop RPA runtime that drives isolated terminal and GUI applications purely from screen captures.

- Catalog URL: https://awesomecua.com/resources/github-hab99-rpa-desktop-canal-visual/
- Original source: https://github.com/Hab99/rpa-desktop-canal-visual
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: screen-understanding, grounding, automation
- Evidence checked: 2026-11-04T18:11:51Z
- ID: github:hab99/rpa-desktop-canal-visual

- Record JSON: https://awesomecua.com/resources/github-hab99-rpa-desktop-canal-visual/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Hab99/rpa-desktop-canal-visual/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Hab99/rpa-desktop-canal-visual/main/README.md (retrieved 2026-11-04T18:11:51Z; SHA-256 c8af104f8e74e63c00b1b58599c7460220712d6df8c1bec0db3fe21370d4eac0)
- https://raw.githubusercontent.com/Hab99/rpa-desktop-canal-visual/HEAD/LICENSE (retrieved 2026-11-04T18:16:20Z; SHA-256 4917168114f9ea5c12cd2e8a527db5dab40ab56c79d3ee8c798a2b51ed88d3d7)

---

## RPA-Everything

Compiles repeated browser, desktop, Android, and office workflows into reviewed, deterministic RPA skills for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-mingqian94-rpa-everything/
- Original source: https://github.com/mingqian94/RPA-Everything
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android, windows
- Topics: workflow, recording, automation, human-in-the-loop
- Evidence checked: 2026-11-04T16:30:14Z
- ID: github:mingqian94/rpa-everything

- Record JSON: https://awesomecua.com/resources/github-mingqian94-rpa-everything/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mingqian94/RPA-Everything/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mingqian94/RPA-Everything/HEAD/README.md (retrieved 2026-11-04T16:30:14Z; SHA-256 35625c7c8cc74bfb0d2f2a89d4161035a103e85a8019e1c88189edc7c7d38d88)
- https://raw.githubusercontent.com/mingqian94/RPA-Everything/HEAD/LICENSE (retrieved 2026-11-04T16:34:52Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## SameState WebMCP

WebMCP reference architecture exposing Redux frontend state directly to browser agents for synchronized human-agent interaction.

- Catalog URL: https://awesomecua.com/resources/github-breeznik-samestate-webmcp/
- Original source: https://github.com/breeznik/samestate-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: state-tracking, tool-integration, web-navigation, ui-design
- Evidence checked: 2026-11-04T17:55:16Z
- ID: github:breeznik/samestate-webmcp

- Record JSON: https://awesomecua.com/resources/github-breeznik-samestate-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/breeznik/samestate-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/breeznik/samestate-webmcp/main/README.md (retrieved 2026-11-04T17:55:16Z; SHA-256 3c6387e8ef366ba8b438f69f8d5cf83f8a46fc378ea0d3ce1ebbe37a1eb54fa5)
- https://raw.githubusercontent.com/breeznik/samestate-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:00:04Z; SHA-256 6687f84b3f13281c5a9f9ed8113a05ada2d72e8a5ffd1933239d00b30ae3d982)

---

## SCoR (Sparse Context Reset)

Sparse Context Reset (SCoR) framework for preventing context overflow and drift in long-horizon GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-huia711-scor/
- Original source: https://github.com/huia711/SCoR
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: long-horizon, memory, efficiency, planning
- Evidence checked: 2026-11-04T18:11:42Z
- ID: github:huia711/scor

- Record JSON: https://awesomecua.com/resources/github-huia711-scor/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/huia711/SCoR/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huia711/SCoR/main/README.md (retrieved 2026-11-04T18:11:42Z; SHA-256 8503f27fc1165e72e45e898e9b9dc8356f02cfb08c0c581136518bff69f07b9e)
- https://raw.githubusercontent.com/huia711/SCoR/HEAD/LICENSE (retrieved 2026-11-04T18:16:20Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## screen-use

Browser-Use-style framework for the entire desktop that gives AI agents visual screen perception and mouse/keyboard control.

- Catalog URL: https://awesomecua.com/resources/github-tongriyaotxt-screen-use/
- Original source: https://github.com/tongriyaotxt/screen-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux
- Topics: screen-understanding, grounding, automation
- Evidence checked: 2026-11-04T17:30:39Z
- ID: github:tongriyaotxt/screen-use

- Record JSON: https://awesomecua.com/resources/github-tongriyaotxt-screen-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/tongriyaotxt/screen-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tongriyaotxt/screen-use/main/README.md (retrieved 2026-11-04T17:30:39Z; SHA-256 4bc27308add7570571643c5b3c479f86c0c84e6e5089663310a30a570f4ba4a5)
- https://raw.githubusercontent.com/tongriyaotxt/screen-use/HEAD/LICENSE (retrieved 2026-11-04T17:40:03Z; SHA-256 9b71cb55830dc547927ec99bf4bfd5f8a222b0892c10ecc47cf416e5c4584962)

---

## Screen2AX

Screen2AX reconstructs macOS application accessibility trees from screenshots using vision detectors and releases the Maceka GUI dataset.

- Catalog URL: https://awesomecua.com/resources/github-macpaw-screen2ax/
- Original source: https://github.com/MacPaw/Screen2AX
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, grounding, data-generation
- Evidence checked: 2026-11-04T13:12:23Z
- ID: github:macpaw/screen2ax

- Record JSON: https://awesomecua.com/resources/github-macpaw-screen2ax/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MacPaw/Screen2AX/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MacPaw/Screen2AX/HEAD/README.md (retrieved 2026-11-04T13:12:23Z; SHA-256 0141f5520a2c2229ac24b3ea1b88fe461440b7564f3ef51c1fd5e27c294c4b03)
- https://raw.githubusercontent.com/MacPaw/Screen2AX/HEAD/LICENSE (retrieved 2026-11-04T13:41:48Z; SHA-256 7b960d25a179cba6a2f0e680e0cfb862a7a1076a72fe9dbefef8280053481c0d)

---

## screen2gym

screen2gym compiles raw action-labeled screen recordings into resettable, programmatically gradable RL environments for computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-marc-saouda-screen2gym/
- Original source: https://github.com/marc-saouda/screen2gym
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: reinforcement-learning, data-generation, sandbox, recording
- Evidence checked: 2026-11-04T16:30:03Z
- ID: github:marc-saouda/screen2gym

- Record JSON: https://awesomecua.com/resources/github-marc-saouda-screen2gym/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/marc-saouda/screen2gym/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/marc-saouda/screen2gym/HEAD/README.md (retrieved 2026-11-04T16:30:03Z; SHA-256 913c118611f741886405f701bf8c44d246b16e8372cffaa3e0b4c6b86fbe77a1)
- https://raw.githubusercontent.com/marc-saouda/screen2gym/HEAD/LICENSE (retrieved 2026-11-04T16:34:31Z; SHA-256 6326cc66e08b8d1c855d0d6ee5d8fc499a216a4db0f423988c77c0a72267d1f8)

---

## ScreenSuite

A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.

- Catalog URL: https://awesomecua.com/resources/github-huggingface-screensuite/
- Original source: https://github.com/huggingface/screensuite
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, android, desktop
- Topics: evaluation, grounding, action-prediction
- Evidence checked: 2026-10-17T09:12:13Z
- ID: github:huggingface/screensuite

### Limitations

The publisher states that the suite compares the underlying multimodal models. Public source includes benchmark adapters and registry code. Multi-step environments require Docker and KVM; constituent datasets, remote model services and OSWorld account-dependent tasks have separate setup and terms. Apache-2.0 is scoped to this repository code.

- Record JSON: https://awesomecua.com/resources/github-huggingface-screensuite/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/huggingface/screensuite/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Inspected repository LICENSE; not a license for linked benchmark datasets, pretrained weights or services.
  Sources: https://raw.githubusercontent.com/huggingface/screensuite/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/huggingface/screensuite/HEAD/README.md (retrieved 2026-10-17T09:12:13Z; SHA-256 edcaa6f8355be6a8774ebeeb9bdb67648e8eeddb813d6be0fa2433116d9def36)
- https://api.github.com/repos/huggingface/screensuite (retrieved 2026-10-17T09:12:12Z; SHA-256 e372458e48d0ebbbe0f7887b66e2d5bb4db612fd96db4dc53404c0319891f7e8)
- https://api.github.com/repos/huggingface/screensuite/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:05Z; SHA-256 93b685a13bfba4d9569dbfc0418de93c7b9f8a3f7c101af053aadeebbdf8b2c0)
- https://raw.githubusercontent.com/huggingface/screensuite/HEAD/LICENSE (retrieved 2026-10-17T09:14:06Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## SEAgent

SEAgent enables computer-use agents to self-evolve in unfamiliar software environments using a World State Model and curriculum task generator.

- Catalog URL: https://awesomecua.com/resources/github-sunzey-seagent/
- Original source: https://github.com/SunzeY/SEAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: reinforcement-learning, world-models, self-reflection, data-generation
- Evidence checked: 2026-11-04T13:12:38Z
- ID: github:sunzey/seagent

- Record JSON: https://awesomecua.com/resources/github-sunzey-seagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SunzeY/SEAgent/HEAD/README.md (retrieved 2026-11-04T13:12:38Z; SHA-256 c053804f8aefbdf1754a55e664ecb61d2ef33a6993b9c942da8192f2fe3c6657)

---

## Search-o1

Search-o1 integrates agentic web search and document-in-reasoning refinement into large reasoning models for multi-hop question answering.

- Catalog URL: https://awesomecua.com/resources/github-sunnynexus-search-o1/
- Original source: https://github.com/sunnynexus/Search-o1
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, tool-integration
- Evidence checked: 2026-11-04T13:12:38Z
- ID: github:sunnynexus/search-o1

- Record JSON: https://awesomecua.com/resources/github-sunnynexus-search-o1/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sunnynexus/Search-o1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sunnynexus/Search-o1/HEAD/README.md (retrieved 2026-11-04T13:12:38Z; SHA-256 b0f8e61cf444b2437b366fedd4fbfafbed6d40b8b3138cc49cb7950b2b1d9741)
- https://raw.githubusercontent.com/sunnynexus/Search-o1/HEAD/LICENSE (retrieved 2026-11-04T13:41:55Z; SHA-256 b101f949ba866c4de767be4b8563ef0bbd54d1b289c4b49c6edda3f2851c848a)

---

## Self-Healing Browser Agent

Combines Claude planning with Playwright execution and ranked selector fallback to self-heal broken web automation steps.

- Catalog URL: https://awesomecua.com/resources/github-25andresbernal-self-healing-browser-agent/
- Original source: https://github.com/25andresbernal/self-healing-browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, robustness, automation, self-reflection
- Evidence checked: 2026-11-04T16:10:27Z
- ID: github:25andresbernal/self-healing-browser-agent

- Record JSON: https://awesomecua.com/resources/github-25andresbernal-self-healing-browser-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/25andresbernal/self-healing-browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/25andresbernal/self-healing-browser-agent/HEAD/README.md (retrieved 2026-11-04T16:10:27Z; SHA-256 74e22c75010e08f622338fb13247c8531438b4b464f0a434272bf45ff4df7d68)
- https://raw.githubusercontent.com/25andresbernal/self-healing-browser-agent/HEAD/LICENSE (retrieved 2026-11-04T16:13:35Z; SHA-256 52cb23072fcd7f4783fe3b67edc4ca128c7954401cfbcd425f407e4b6d519ca8)

---

## Self-MAP

A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.

- Catalog URL: https://awesomecua.com/resources/github-magicgh-self-map/
- Original source: https://github.com/magicgh/Self-MAP
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, memory, self-reflection, planning
- Evidence checked: 2026-10-17T12:30:55Z
- ID: github:magicgh/self-map

### Limitations

The source tree provides candidate-generation and action-prediction training/evaluation scripts. Its documented workflow requires separately downloaded MT-Mind2Web data and configured model/API paths. The README cites the ACL publication by DOI; a retained original arXiv abstract explicitly names Self-MAP and MT-Mind2Web and supplies the catalog paper relation without a new bibliography entity. MIT is the code license; the separate data artifact declares CC-BY-4.0.

- Record JSON: https://awesomecua.com/resources/github-magicgh-self-map/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/magicgh/Self-MAP/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Project source LICENSE; separate dataset license is not folded into the code slot.
  Sources: https://raw.githubusercontent.com/magicgh/Self-MAP/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/magicgh/self-map/HEAD/README.md (retrieved 2026-10-17T12:30:55Z; SHA-256 693197cb807e3ab4d5afda9de35dd51342b4feb18e68b8ccfcdaa370399dbeb3)
- https://api.github.com/repos/magicgh/self-map (retrieved 2026-10-17T12:30:54Z; SHA-256 82c425841c94bf129c4fbd1e70029c581aa1488d5f85cdd23aa0f292092146f0)
- https://api.github.com/repos/magicgh/Self-MAP/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 8d844f227c457321640231ab3a4953457e3c6cfeab8d8f4803f8aa01dc15a8f8)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://raw.githubusercontent.com/magicgh/Self-MAP/HEAD/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 f271c479b19a620600d18fc2265224205bf71483b969672d3f6acd9bc552b3f5)

---

## Semantic Browser (agent-browser)

Agent-readable semantic browser layer providing token-efficient webpage understanding and structured action execution.

- Catalog URL: https://awesomecua.com/resources/github-atreasureboy-agent-browser/
- Original source: https://github.com/atreasureboy/agent-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, efficiency
- Evidence checked: 2026-11-04T16:30:14Z
- ID: github:atreasureboy/agent-browser

- Record JSON: https://awesomecua.com/resources/github-atreasureboy-agent-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/atreasureboy/agent-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/atreasureboy/agent-browser/HEAD/README.md (retrieved 2026-11-04T16:30:14Z; SHA-256 bf54923185eb3a0764ae55f508ef1c020b022bcfa1dcc3d7a72fb47115de77f5)
- https://raw.githubusercontent.com/atreasureboy/agent-browser/HEAD/LICENSE (retrieved 2026-11-04T16:34:52Z; SHA-256 12640821af7779cc21e23182e79a1d008a298b844fe3552c7cf86e2bcffae551)

---

## Semantic GUI Control Layer (SGCL)

SGCL is a cross-platform, text-first control layer that exposes graphical user interfaces to agents as structured semantic affordances.

- Catalog URL: https://awesomecua.com/resources/github-frankbria-semantic-gui-control/
- Original source: https://github.com/frankbria/semantic-gui-control
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, tool-integration, efficiency
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:frankbria/semantic-gui-control

- Record JSON: https://awesomecua.com/resources/github-frankbria-semantic-gui-control/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/frankbria/semantic-gui-control/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 e8125048b7a0d6f8d21528071db92a539caacd0ffde69dab3ad127ededb5cc88)

---

## Semantic Kernel

Semantic Kernel is an enterprise SDK for orchestrating multi-agent workflows, plugins, and memory across Python, .NET, and Java.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-semantic-kernel/
- Original source: https://github.com/microsoft/semantic-kernel
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: workflow, planning, memory, tool-integration
- Evidence checked: 2026-11-04T13:12:24Z
- ID: github:microsoft/semantic-kernel

- Record JSON: https://awesomecua.com/resources/github-microsoft-semantic-kernel/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/semantic-kernel/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/semantic-kernel/HEAD/README.md (retrieved 2026-11-04T13:12:24Z; SHA-256 166fb81995eeeaf31b56883db3fae0617cc7dea0d7b4baf48a9ba6293c3bcd64)
- https://raw.githubusercontent.com/microsoft/semantic-kernel/HEAD/LICENSE (retrieved 2026-11-04T13:46:52Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## Sentinel Browser QA Harness

Sentinel is a browser-native QA harness where an AI agent drives a real browser like an end user and returns structured test verdicts.

- Catalog URL: https://awesomecua.com/resources/github-we-building-autonomously-sentinel/
- Original source: https://github.com/we-building-autonomously/sentinel
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, automation
- Evidence checked: 2026-11-04T16:30:06Z
- ID: github:we-building-autonomously/sentinel

- Record JSON: https://awesomecua.com/resources/github-we-building-autonomously-sentinel/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/we-building-autonomously/sentinel/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/we-building-autonomously/sentinel/HEAD/README.md (retrieved 2026-11-04T16:30:06Z; SHA-256 7894934771518f73fe3c7813df6370ed28e38127edd757b4073ce56fe887c815)
- https://raw.githubusercontent.com/we-building-autonomously/sentinel/HEAD/LICENSE (retrieved 2026-11-04T16:34:33Z; SHA-256 015cb7488f26e375113ef5d0f93f23820f24fd30f738331fda81845b6adce412)

---

## Seq2act code (google-research)

TensorFlow code for mapping natural-language instructions to Android UI action sequences, with phrase-tuple extraction and grounding models and pipelines for AndroidHowTo, RicoSCA and PixelHelp.

- Catalog URL: https://awesomecua.com/resources/component-google-research-seq2act/
- Original source: https://github.com/google-research/google-research/tree/master/seq2act
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: action-prediction, grounding, data-generation, mobile-navigation
- Evidence checked: 2026-10-18T10:58:37Z
- ID: component:google-research/seq2act

### Limitations

Scoped to the seq2act directory of the google-research monorepo. The README says AndroidHowTo and PixelHelp were re-created from public sources and give slightly different results than the paper; the data are generated or downloaded separately, and a pre-trained end-to-end grounding checkpoint is linked from Cloud Storage. The monorepo's Apache-2.0 LICENSE covers code. github.com/deepneuralmachine/seq2act-tensorflow is an unofficial 2020 copy of this directory.

- Record JSON: https://awesomecua.com/resources/component-google-research-seq2act/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/seq2act/README.md (retrieved 2026-10-18T10:58:37Z; SHA-256 9972cfb5234025fa8a62d402dcd3479deec21fbb87cce428d5c235bda4bb6dd8)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-18T10:58:46Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## servo-agent

Agent-controllable web browser built on the Rust Servo engine that distills live rendered DOM layouts into compact agent observations.

- Catalog URL: https://awesomecua.com/resources/github-parker-brown-family-servo-agent/
- Original source: https://github.com/parker-brown-family/servo-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, efficiency
- Evidence checked: 2026-11-04T16:30:11Z
- ID: github:parker-brown-family/servo-agent

- Record JSON: https://awesomecua.com/resources/github-parker-brown-family-servo-agent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/parker-brown-family/servo-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/parker-brown-family/servo-agent/HEAD/README.md (retrieved 2026-11-04T16:30:11Z; SHA-256 b3dfb936bdbcde9644e081d9fd55b46275d3231cb151e6beb5470b2cd5b0db13)
- https://raw.githubusercontent.com/parker-brown-family/servo-agent/HEAD/LICENSE (retrieved 2026-11-04T16:34:49Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Sessionat

Sessionat is an open-source Chromium-based macOS browser with persistent workspaces and native AI agent control hooks.

- Catalog URL: https://awesomecua.com/resources/github-dublyo-sessionat/
- Original source: https://github.com/dublyo/sessionat
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-11-04T16:30:03Z
- ID: github:dublyo/sessionat

- Record JSON: https://awesomecua.com/resources/github-dublyo-sessionat/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/dublyo/sessionat/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dublyo/sessionat/HEAD/README.md (retrieved 2026-11-04T16:30:03Z; SHA-256 843e4e87404db0ea9d9411bff5e0b09fe69256c388672b9b7aff99b58760907d)
- https://raw.githubusercontent.com/dublyo/sessionat/HEAD/LICENSE (retrieved 2026-11-04T16:34:31Z; SHA-256 70a16db8b687cfefe03e867da6d47898f5a9ffb8c19822a7e4663c990e448f90)

---

## Seven-Layer Web Agent & Benchmark

Seven-layer LLM browser agent architecture paired with a 45-task hierarchical benchmark and reproducible execution artifacts.

- Catalog URL: https://awesomecua.com/resources/github-xyyojl-web-agent/
- Original source: https://github.com/xyyojl/web-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, evaluation, self-reflection
- Evidence checked: 2026-11-04T15:03:39Z
- ID: github:xyyojl/web-agent

- Record JSON: https://awesomecua.com/resources/github-xyyojl-web-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/xyyojl/web-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xyyojl/web-agent/HEAD/README.md (retrieved 2026-11-04T15:03:39Z; SHA-256 88a81228467aaa5c52e8ec37e34bb263162c2df9211dff34a7e99996b07b7320)
- https://raw.githubusercontent.com/xyyojl/web-agent/HEAD/LICENSE (retrieved 2026-11-04T15:22:52Z; SHA-256 df5b320316b7fddde6486b7bd893669217462ad932b86306aea69b0e5f43192d)

---

## shadow-web

Local-first Python SDK for web agents providing Shadow DOM flattening, Action Maps, SchemaSnap extraction, and form filling.

- Catalog URL: https://awesomecua.com/resources/github-ulinycoin-shadow-web/
- Original source: https://github.com/ulinycoin/shadow-web
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, automation
- Evidence checked: 2026-11-04T16:30:12Z
- ID: github:ulinycoin/shadow-web

- Record JSON: https://awesomecua.com/resources/github-ulinycoin-shadow-web/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ulinycoin/shadow-web/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ulinycoin/shadow-web/HEAD/README.md (retrieved 2026-11-04T16:30:12Z; SHA-256 ea257855bfe20a2f9dcb713a4808fd847dfed8ea5ff2567aba4d1d11000e39a8)
- https://raw.githubusercontent.com/ulinycoin/shadow-web/HEAD/LICENSE (retrieved 2026-11-04T16:34:50Z; SHA-256 6d9051541ac86c5d9ebd74513e8320a4ec1bb0c03d818fd5318cd44a215b5a2b)

---

## Shinken

Shinken is a high-throughput runtime for training computer-use agents end-to-end with reinforcement learning across parallel real desktops.

- Catalog URL: https://awesomecua.com/resources/github-meirtz-shinken/
- Original source: https://github.com/Meirtz/Shinken
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: reinforcement-learning, sandbox, efficiency, data-generation
- Evidence checked: 2026-11-04T16:30:09Z
- ID: github:meirtz/shinken

- Record JSON: https://awesomecua.com/resources/github-meirtz-shinken/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Meirtz/Shinken/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Meirtz/Shinken/HEAD/README.md (retrieved 2026-11-04T16:30:09Z; SHA-256 c4bdff355c887b17e1b5e28aad433ae6d15b168770c306e373ac37aa345104ab)
- https://raw.githubusercontent.com/Meirtz/Shinken/HEAD/LICENSE (retrieved 2026-11-04T16:34:38Z; SHA-256 1113dabe9637658eb33a781fbf6f633fa79058b5d417e53c67976c2e10593e78)

---

## Shiny Fishstick

Semantic web compiler that crawls websites and compiles them into typed, reusable action and data interfaces for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-hootsworth-shiny-fishstick/
- Original source: https://github.com/Hootsworth/shiny-fishstick
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, tool-integration, efficiency
- Evidence checked: 2026-11-04T16:30:08Z
- ID: github:hootsworth/shiny-fishstick

- Record JSON: https://awesomecua.com/resources/github-hootsworth-shiny-fishstick/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Hootsworth/shiny-fishstick/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Hootsworth/shiny-fishstick/HEAD/README.md (retrieved 2026-11-04T16:30:08Z; SHA-256 c53d535883112d7dc4df50c01b26695e32bc80ae91c0f6d66bdf451ca1c85191)
- https://raw.githubusercontent.com/Hootsworth/shiny-fishstick/HEAD/LICENSE (retrieved 2026-11-04T16:34:37Z; SHA-256 96593b935f45ede09b9d4302a5e97fd8ca2bfef8b8cc6e03155947c2d48ddca7)

---

## Signett

Turns existing websites into discoverable, measurable WebMCP capability surfaces for browser agents.

- Catalog URL: https://awesomecua.com/resources/github-signettai-signett/
- Original source: https://github.com/signettai/signett
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, evaluation, web-navigation
- Evidence checked: 2026-11-04T17:55:18Z
- ID: github:signettai/signett

- Record JSON: https://awesomecua.com/resources/github-signettai-signett/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/signettai/signett/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/signettai/signett/main/README.md (retrieved 2026-11-04T17:55:18Z; SHA-256 5933f21f0c369b99d0130eac7d661a977c2d2f90cf851449902e6863f99b19b5)
- https://raw.githubusercontent.com/signettai/signett/HEAD/LICENSE (retrieved 2026-11-04T18:00:21Z; SHA-256 9807f92198fa713c5981ce6aef4da5d67bc1fc8a70eb9cb16b2a14858447c025)

---

## Signpost WebMCP

Stateless capability resolver for WebMCP enabling websites to declare and route agent-callable actions.

- Catalog URL: https://awesomecua.com/resources/github-zioladev-signpost/
- Original source: https://github.com/zioladev/signpost
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:22Z
- ID: github:zioladev/signpost

- Record JSON: https://awesomecua.com/resources/github-zioladev-signpost/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/zioladev/signpost/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/zioladev/signpost/main/README.md (retrieved 2026-11-04T17:55:22Z; SHA-256 e69a2034db023e95df858d059e5dad2a1d85c0e451deae7b4c50964b4aa7ec9d)
- https://raw.githubusercontent.com/zioladev/signpost/HEAD/LICENSE (retrieved 2026-11-04T18:00:28Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## SIH26 Privacy-Preserving Browser Agent

Privacy-preserving AI browser agent framework that sanitizes sensitive DOM and screen fields before LLM planning.

- Catalog URL: https://awesomecua.com/resources/github-dalwadi-aryan-pranavkumar-sih-26/
- Original source: https://github.com/DALWADI-ARYAN-PRANAVKUMAR/SIH_26
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, screen-understanding, web-navigation, automation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:dalwadi-aryan-pranavkumar/sih_26

- Record JSON: https://awesomecua.com/resources/github-dalwadi-aryan-pranavkumar-sih-26/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/DALWADI-ARYAN-PRANAVKUMAR/SIH_26/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DALWADI-ARYAN-PRANAVKUMAR/SIH_26/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 91dd837e92443bcb1170292ece749028f5f8bc6d31d0ff946f0ea85540918a80)
- https://raw.githubusercontent.com/DALWADI-ARYAN-PRANAVKUMAR/SIH_26/HEAD/LICENSE (retrieved 2026-11-04T18:00:06Z; SHA-256 20c5faec493fd891bc524118c86463651b9d89e01b4722a3e23f727064355478)

---

## SimpleMem

SimpleMem provides semantic lossless memory compression and multimodal retrieval for long-horizon LLM and desktop/CLI agents.

- Catalog URL: https://awesomecua.com/resources/github-aiming-lab-simplemem/
- Original source: https://github.com/aiming-lab/SimpleMem
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: memory, efficiency, long-horizon
- Evidence checked: 2026-11-04T13:12:05Z
- ID: github:aiming-lab/simplemem

- Record JSON: https://awesomecua.com/resources/github-aiming-lab-simplemem/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/aiming-lab/SimpleMem/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aiming-lab/SimpleMem/HEAD/README.md (retrieved 2026-11-04T13:12:05Z; SHA-256 420cdf2a5c22d74354d11e7617fdd24a1ce60eeba8e0d21b51ed4442b7149001)
- https://raw.githubusercontent.com/aiming-lab/SimpleMem/HEAD/LICENSE (retrieved 2026-11-04T13:23:06Z; SHA-256 276dc8cc9eb5a8c59d1edca3283163815d2caa512b17bd0bf053050304b4cd3e)

---

## Siteverb

Toolkit for authoring, testing, and shipping verified WebMCP user journeys on web applications.

- Catalog URL: https://awesomecua.com/resources/github-siteverb-siteverb/
- Original source: https://github.com/siteverb/siteverb
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, evaluation, web-navigation, workflow
- Evidence checked: 2026-11-04T17:55:25Z
- ID: github:siteverb/siteverb

- Record JSON: https://awesomecua.com/resources/github-siteverb-siteverb/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/siteverb/siteverb/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/siteverb/siteverb/main/README.md (retrieved 2026-11-04T17:55:25Z; SHA-256 f8a2bcfe3ef5c19c9c36b613d56c44eeaf3db9860a8b50d893128d4faa1bc81c)
- https://raw.githubusercontent.com/siteverb/siteverb/HEAD/LICENSE (retrieved 2026-11-04T18:00:22Z; SHA-256 cef869fd3865ea7c8b2fa84f378551c98746ef5a63c7ef42a3fce7ed4cb8c221)

---

## SiteWarden

Autonomous, lightweight browser smoke-testing daemon written in Rust for continuous website verification.

- Catalog URL: https://awesomecua.com/resources/github-shantodotdev-sitewarden/
- Original source: https://github.com/Shantodotdev/sitewarden
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, observability, web-navigation, efficiency
- Evidence checked: 2026-11-04T17:55:19Z
- ID: github:shantodotdev/sitewarden

- Record JSON: https://awesomecua.com/resources/github-shantodotdev-sitewarden/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Shantodotdev/sitewarden/master/README.md (retrieved 2026-11-04T17:55:19Z; SHA-256 f47afa746269369d3635fbda076014f5a72dfa925778e9e38ee2407fa074f4b6)

---

## SkillWeaver

A web-agent framework that explores sites, synthesizes reusable interaction APIs and builds a skill library for later tasks.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-skillweaver/
- Original source: https://github.com/OSU-NLP-Group/SkillWeaver
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, data-generation
- Evidence checked: 2026-10-17T02:44:04Z
- ID: github:osu-nlp-group/skillweaver

### Limitations

Exploration, task execution, browser integration and evaluation code are published under MIT. Synthesized skill files are included, but no trained model weights are implied. The source depends on external web environments and model services; no runtime or browser tasks were executed.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-skillweaver/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/SkillWeaver/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/SkillWeaver/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 e06dbc9d58e713a0019d5040aa21220de85266e80aacc7f2d320a0518c781496)
- https://api.github.com/repos/OSU-NLP-Group/SkillWeaver (retrieved 2026-10-17T02:44:04Z; SHA-256 4dfa648e22431d1a4903eb1e11f432fbe8a0f39d24e2e3324c300285ffe458fd)
- https://api.github.com/repos/OSU-NLP-Group/SkillWeaver/git/trees/main?recursive=1 (retrieved 2026-10-17T02:44:04Z; SHA-256 7a1c94c67131a97516d92632c00a2a20d09226fec57bb09e77ff6d84a4e6e79a)
- https://raw.githubusercontent.com/OSU-NLP-Group/SkillWeaver/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)
- https://osu-nlp-group.github.io/SkillWeaver/ (retrieved 2026-10-17T02:45:21Z; SHA-256 822a60969166874dd8a26273b8d749ef8c69c46137a0915ed7178b3265bd037f)
- https://raw.githubusercontent.com/OSU-NLP-Group/SkillWeaver/HEAD/LICENSE (retrieved 2026-10-17T02:45:20Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)

---

## Smol2Operator

Hugging Face recipe that converts Aguvis GUI data into one normalized action space and fine-tunes SmolVLM2-2.2B in two phases, first for screenshot grounding and then for agentic GUI action code.

- Catalog URL: https://awesomecua.com/resources/github-huggingface-smol2operator/
- Original source: https://github.com/huggingface/smol2operator
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, android
- Topics: grounding, imitation-learning, data-generation, action-prediction
- Evidence checked: 2026-10-18T11:11:16Z
- ID: github:huggingface/smol2operator

### Limitations

The README is the project write-up. The inspected tree contains recipe.ipynb, action-conversion and Aguvis preprocessing code, a function parser, an action-space converter, a collator and evaluation prompts. The README names derived datasets (smolagents/aguvis-stage-1 and smolagents/aguvis-stage-2), the SmolVLM2-2.2B-Instruct-Agentic-GUI checkpoint and a demo Space as separate Hub assets outside this record. The uses relations record that the recipe transforms the xlangai Aguvis stage 1 and stage 2 releases. ScreenSpot-v2 results are publisher-reported. The repository has no license file, so code permissions are unknown.

- Record JSON: https://awesomecua.com/resources/github-huggingface-smol2operator/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huggingface/smol2operator/HEAD/README.md (retrieved 2026-10-18T11:11:16Z; SHA-256 d0190080edc5e44afad1a655c2e575c6071afdbab181a75c546e7210d17c4f44)
- https://api.github.com/repos/huggingface/smol2operator (retrieved 2026-10-18T11:11:35Z; SHA-256 f9e05da9ff37a969dcf83993af2141e8ef0738ad0c89340660f20f806907a149)
- https://api.github.com/repos/huggingface/smol2operator/git/trees/main?recursive=1 (retrieved 2026-10-18T11:11:36Z; SHA-256 537f734934d9dbc7eea363326a81558c0fda99d8b292d70219b124b2e5fb8ac9)

---

## Smouj AgentBrowser

AI-powered browser automation platform combining a REST API, live web dashboard, and vision-assisted DOM interaction.

- Catalog URL: https://awesomecua.com/resources/github-smouj-agent-browser/
- Original source: https://github.com/smouj/agent-browser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, automation, observability
- Evidence checked: 2026-11-04T16:10:31Z
- ID: github:smouj/agent-browser

- Record JSON: https://awesomecua.com/resources/github-smouj-agent-browser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/smouj/agent-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/smouj/agent-browser/HEAD/README.md (retrieved 2026-11-04T16:10:31Z; SHA-256 a4839f60c67a7a035ac38a1d8fadaf7c24d0483128299850e0dd7bc1e27c5f06)
- https://raw.githubusercontent.com/smouj/agent-browser/HEAD/LICENSE (retrieved 2026-11-04T16:13:42Z; SHA-256 19608699749229f5b7c7ea964f7b58b1230be6222c9041e9d12a7d487274d5d1)

---

## solari-identity-guard

Fail-closed identity and session verification middleware for Solari browser agent profiles.

- Catalog URL: https://awesomecua.com/resources/github-nahuelsoria-solari-identity-guard/
- Original source: https://github.com/nahuelsoria/solari-identity-guard
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, web-navigation, evaluation
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:nahuelsoria/solari-identity-guard

- Record JSON: https://awesomecua.com/resources/github-nahuelsoria-solari-identity-guard/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nahuelsoria/solari-identity-guard/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 6db8214b5e732fbf70e65880eba95ba7f1159091350b779d046a30de704d860a)

---

## SOLO

SOLO performs single-rollout test-time adaptation for GUI agents using online self-supervised feedback during deployment.

- Catalog URL: https://awesomecua.com/resources/github-wzq975-solo/
- Original source: https://github.com/WZq975/SOLO
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, android, web
- Topics: self-reflection, reinforcement-learning, robustness
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:wzq975/solo

- Record JSON: https://awesomecua.com/resources/github-wzq975-solo/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WZq975/SOLO/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 c6645af5c104647322796121772a6387b71bc927f253243aafb5241c73b2515f)

---

## SoobujMiah LAI (Android Local AI Runtime)

On-device local AI and consent-driven Android UI automation runtime with Bangla-first accessibility support.

- Catalog URL: https://awesomecua.com/resources/github-soobujmiah-lai/
- Original source: https://github.com/soobujmiah/lai
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, safety-security, human-in-the-loop, automation
- Evidence checked: 2026-11-04T17:20:43Z
- ID: github:soobujmiah/lai

- Record JSON: https://awesomecua.com/resources/github-soobujmiah-lai/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/soobujmiah/lai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/soobujmiah/lai/main/README.md (retrieved 2026-11-04T17:20:43Z; SHA-256 8a49142ec2b7d440ae03c62bd11ce7b2ff46d669e473e25c468d7bf694022191)
- https://raw.githubusercontent.com/soobujmiah/lai/HEAD/LICENSE (retrieved 2026-11-04T17:26:53Z; SHA-256 c136452851ff631b190f483946165cd480892ce9195e70a0a7d043ac785df92f)

---

## Sorify

Rakuten's AI-first browser testing and Playwright automation platform for end-to-end agentic QA.

- Catalog URL: https://awesomecua.com/resources/github-rakutentech-sorify/
- Original source: https://github.com/rakutentech/sorify
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, automation, workflow
- Evidence checked: 2026-11-04T16:52:00Z
- ID: github:rakutentech/sorify

- Record JSON: https://awesomecua.com/resources/github-rakutentech-sorify/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/rakutentech/sorify/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/rakutentech/sorify/HEAD/README.md (retrieved 2026-11-04T16:52:00Z; SHA-256 bc94c410d9cfb4707ea12aa98498b3d5f7b3c7ac661ead7f188d4c3853c8e39a)
- https://raw.githubusercontent.com/rakutentech/sorify/HEAD/LICENSE (retrieved 2026-11-04T16:56:49Z; SHA-256 8719c93aa55ee0996e092d577c8056e196209296aac5733419d7c1130bc167ea)

---

## SoulSniper Browser SDK

Provider-neutral TypeScript browser automation SDK with automatic session failover and stealth profile support.

- Catalog URL: https://awesomecua.com/resources/github-soulsniper-v2-browser-sdk/
- Original source: https://github.com/SoulSniper-V2/browser-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, robustness, automation
- Evidence checked: 2026-11-04T17:55:18Z
- ID: github:soulsniper-v2/browser-sdk

- Record JSON: https://awesomecua.com/resources/github-soulsniper-v2-browser-sdk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SoulSniper-V2/browser-sdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SoulSniper-V2/browser-sdk/main/README.md (retrieved 2026-11-04T17:55:18Z; SHA-256 2e26a42a0f71b38d8333d29588eccbd1e887158f1fac7f0032a332562020bf71)
- https://raw.githubusercontent.com/SoulSniper-V2/browser-sdk/HEAD/LICENSE (retrieved 2026-11-04T18:00:24Z; SHA-256 632ef14fcda1aeb50a31be0fa19ae9f380bd6b9e85efd8f15e5adaf42a581c7e)

---

## Stagehand

An SDK for browser agents that combines Playwright-style page control with natural-language actions, observation, and extraction. It runs beside the browser as an extension.

- Catalog URL: https://awesomecua.com/resources/url-0210d8713fd41ca1448f/
- Original source: https://stagehand.dev
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, screen-understanding, efficiency
- Evidence checked: 2026-11-09T05:04:59Z
- ID: url:0210d8713fd41ca1448f

### Limitations

The page names TypeScript, Python, and Go interfaces and shows a TypeScript quickstart. It also describes accessibility-tree trimming and support for nested iframes.

- Record JSON: https://awesomecua.com/resources/url-0210d8713fd41ca1448f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://stagehand.dev (retrieved 2026-11-09T05:04:59Z; SHA-256 ffb4be772f075a606707544df7b69744967b3f6c6778d23f518044f36ed875ce)

---

## StateAct

State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.

- Catalog URL: https://awesomecua.com/resources/github-ai-nikolai-stateact/
- Original source: https://github.com/ai-nikolai/StateAct
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: planning, state-tracking, web-navigation
- Evidence checked: 2026-10-17T02:02:07Z
- ID: github:ai-nikolai/stateact

### Limitations

The repository contains a WebShop runner as well as ALFWorld and TextCraft experiments. Inclusion concerns its web-shopping interaction component. No code license or downloadable trained checkpoint is declared in the inspected root metadata.

- Record JSON: https://awesomecua.com/resources/github-ai-nikolai-stateact/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ai-nikolai/StateAct/HEAD/README.md (retrieved 2026-10-17T02:02:07Z; SHA-256 b68b2cc26bfc6a654fec35f3c53c1b1334f3d617671673407d3ed3b59f3db973)
- https://api.github.com/repos/ai-nikolai/StateAct (retrieved 2026-10-17T02:02:06Z; SHA-256 38f8c08395c6e67ff9bf52b27e772667f193a172bd6f726507c57776ad3e5e5f)
- https://api.github.com/repos/ai-nikolai/StateAct/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:07Z; SHA-256 97841e6eab1002bcea949e031f5abd3567482ebbcf03b991bd64643027c468bf)

---

## StatePilot

StatePilot is a predictable browser runtime for AI agents with state validation, episodic memory, error recovery, and MCP tools.

- Catalog URL: https://awesomecua.com/resources/github-newsbruno-statepilot/
- Original source: https://github.com/newsbruno/statepilot
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, state-tracking, memory, self-reflection
- Evidence checked: 2026-11-04T16:10:36Z
- ID: github:newsbruno/statepilot

- Record JSON: https://awesomecua.com/resources/github-newsbruno-statepilot/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/newsbruno/statepilot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/newsbruno/statepilot/HEAD/README.md (retrieved 2026-11-04T16:10:36Z; SHA-256 5050a286b70e8fb6f6f9f91315a1f05e17dfc6e1fd8c66243fe569b503a84ae5)
- https://raw.githubusercontent.com/newsbruno/statepilot/HEAD/LICENSE (retrieved 2026-11-04T16:13:48Z; SHA-256 20882244c358602e21a9464b2e0e2739480bf6177ee1f400c11cd1ffe6f7e613)

---

## STEVE / STEVE-R1 research code

Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.

- Catalog URL: https://awesomecua.com/resources/github-fanbinlu-steve-r1/
- Original source: https://github.com/FanbinLu/STEVE-R1
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: data-generation, automation, evaluation
- Evidence checked: 2026-10-16T13:14:29Z
- ID: github:fanbinlu/steve-r1

### Limitations

The repository has moved to STEVE-R1. Its README reports an SFT release, with RL tuning in progress, and describes evaluations using multiple attempts per task.

- Record JSON: https://awesomecua.com/resources/github-fanbinlu-steve-r1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FanbinLu/STEVE/HEAD/README.md (retrieved 2026-10-16T13:14:29Z; SHA-256 52aa383fdf5d91951f5d9a73f4ebed4454a82b35edae296918116e9f0895dd83)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)

---

## sumo1 computer-use-harness

CLI-first computer-use harness for macOS providing policy-guarded application observation and actuation across Claude Code, Codex, and MCP.

- Catalog URL: https://awesomecua.com/resources/github-sumo1-computer-use-harness/
- Original source: https://github.com/sumo1/computer-use-harness
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: safety-security, automation, tool-integration
- Evidence checked: 2026-11-04T16:30:04Z
- ID: github:sumo1/computer-use-harness

- Record JSON: https://awesomecua.com/resources/github-sumo1-computer-use-harness/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/sumo1/computer-use-harness/HEAD/README.md (retrieved 2026-11-04T16:30:04Z; SHA-256 ef38e7c382dda0fbf2c8cefff0031ab3ac4f45d32ce7ba49db12b6811b8bfaf6)

---

## SuperSelector Studio

Resilient, cacheable fuzzy UI element identifiers and studio for Codex Computer Use recording and replay.

- Catalog URL: https://awesomecua.com/resources/github-pirate-cua-superselector/
- Original source: https://github.com/pirate/cua-superselector
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, recording, robustness, automation
- Evidence checked: 2026-11-04T16:52:01Z
- ID: github:pirate/cua-superselector

- Record JSON: https://awesomecua.com/resources/github-pirate-cua-superselector/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pirate/cua-superselector/HEAD/README.md (retrieved 2026-11-04T16:52:01Z; SHA-256 fb6072c5f393753ddd28171645276320e669ad32ad0efd4da33e4e1d0abbeae4)

---

## Supply Recovery Console (WebMCP)

WebMCP reference console for auditable, human-approved supply-chain actions executed by browser agents.

- Catalog URL: https://awesomecua.com/resources/github-navi-ai-project-supply-recovery-console/
- Original source: https://github.com/Navi-AI-Project/supply-recovery-console
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, observability, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:38Z
- ID: github:navi-ai-project/supply-recovery-console

- Record JSON: https://awesomecua.com/resources/github-navi-ai-project-supply-recovery-console/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Navi-AI-Project/supply-recovery-console/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Navi-AI-Project/supply-recovery-console/main/README.md (retrieved 2026-11-04T18:11:38Z; SHA-256 ff8d094261c21f39390af6235b7710c4f925808864dabb3f94c9e321b86b2cbf)
- https://raw.githubusercontent.com/Navi-AI-Project/supply-recovery-console/HEAD/LICENSE (retrieved 2026-11-04T18:16:27Z; SHA-256 04e2c1eb8879ec6a79754b42a177855172a958852585ba6bd64da7fb36686083)

---

## SwitchMem

Memory-routing implementation that chooses text or image demonstrations for a frozen GUI actor, with offline evaluation and Android transfer experiments.

- Catalog URL: https://awesomecua.com/resources/github-dmis-lab-switchmem/
- Original source: https://github.com/dmis-lab/SwitchMem
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: memory, mobile-navigation
- Evidence checked: 2026-10-17T01:46:05Z
- ID: github:dmis-lab/switchmem

### Limitations

The implementation distinguishes step-level AITW/LearnGUI scores from terminal task success on MobileMiniWoB++. Benchmark outcomes and local smoke-test outputs are different claims.

- Record JSON: https://awesomecua.com/resources/github-dmis-lab-switchmem/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dmis-lab/SwitchMem/HEAD/README.md (retrieved 2026-10-17T01:46:05Z; SHA-256 3fb5aabfb07df620955f0b74347f9d5926a1cd3d506b1098eccba9477627269f)
- https://txxnrd.github.io/switchmem/ (retrieved 2026-10-17T01:48:10Z; SHA-256 cec8e4679c883f13983915e9f77d175a84a234d69386e78f9ea75157cefbdcb4)

---

## System1-Agents

Framework that puts System 1 decision models such as Jev, Laya or Cua-S1 in openJiuwen agents to pick one typed option per step; ships browser, desktop-app, game, ALFWorld and ticket-routing agents.

- Catalog URL: https://awesomecua.com/resources/github-thinkflowlab-system1-agents/
- Original source: https://github.com/ThinkFlowLab/system1-agents
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web, desktop, windows, macos
- Topics: efficiency, action-prediction, web-navigation
- Evidence checked: 2026-10-18T15:37:54Z
- ID: github:thinkflowlab/system1-agents

### Limitations

Adjacent because browser and desktop control are two of several shipped domains; the package (s1a) is equally aimed at games, ALFWorld, ticket routing and an injection-guard rail. On a decision turn the System 1 model answers typed choice questions while a chat model keeps planning, typed values and the final answer. The browser front runs a stock openJiuwen browser subagent (pinned ThinkFlowLab fork of agent-core) over @playwright/mcp; its in-page probe numbers the visible controls of the top document's light DOM, and the decision model chooses an element plus an operation head (CLICK, TYPE_TEXT, PRESS_ENTER, SELECT, scrolling). OmniJev instead receives a page screenshot. The desktop agent drives a Windows or macOS app window through the external Cua Driver over MCP, clicking accessibility elements bound to a window snapshot. Decision models are reached through TypeSafe, OpenRouter or served endpoints; Cua-S1 Nano runs in process from a pinned trycua/cua subdirectory. Speed and cost tables in the README are the publisher's single-episode comparisons. The browser files carry Huawei copyright notices with ThinkFlowLab modifications under Apache-2.0.

- Record JSON: https://awesomecua.com/resources/github-thinkflowlab-system1-agents/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/README.md (retrieved 2026-10-18T15:37:54Z; SHA-256 a5836edea1115fdb9d280e0958f528f99db9f454e0270c408a15579922d3bbb7)
- https://api.github.com/repos/ThinkFlowLab/system1-agents/git/commits/0fe20f5044d455126c81f668ac9d28d706e6d3c0 (retrieved 2026-10-18T15:37:20Z; SHA-256 5e0ee2406487549dc9bccfac9d667afd9f366b124aa4ffffd6233f5b20b6b1a1)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/browser/action_space.py (retrieved 2026-10-18T15:37:21Z; SHA-256 694eaff77c20180021cc6bb3d621792c57ebfb7515acf6373916b62a5e0b06d1)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/browser/probe_js.py (retrieved 2026-10-18T15:37:22Z; SHA-256 dc1dc042d2b38dadfb982ddd5d0737ed300d8d6ab6fbd4653f0134bb5b59585b)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/agents/desktop.py (retrieved 2026-10-18T15:37:23Z; SHA-256 a9a53f1fdaf89ed105531bea0775051c7b5dc3ce1acb6075379742c7b9eaac92)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/desktop/driver.py (retrieved 2026-10-18T15:37:23Z; SHA-256 74168a625f08243655f17632046a6aedfee7b2f1efb13694a390307cc6e04c62)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/pyproject.toml (retrieved 2026-10-18T15:37:23Z; SHA-256 00d4864efa51b7e312ac279d246abafc45f93a5b9e887affff23f48ad72c569b)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/LICENSE (retrieved 2026-10-18T15:37:56Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)

---

## TabGrant

User-granted, local-first capability broker that delegates scoped browser tab permissions to AI agents.

- Catalog URL: https://awesomecua.com/resources/github-snakelil-tabgrant/
- Original source: https://github.com/SnakeLil/tabgrant
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, web-navigation, tool-integration
- Evidence checked: 2026-11-04T17:55:13Z
- ID: github:snakelil/tabgrant

- Record JSON: https://awesomecua.com/resources/github-snakelil-tabgrant/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/SnakeLil/tabgrant/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SnakeLil/tabgrant/main/README.md (retrieved 2026-11-04T17:55:13Z; SHA-256 93487830f01d0e98f1ad0b8529bbb8490c97f3944926e39a7a8bbbfa0cceb692)
- https://raw.githubusercontent.com/SnakeLil/tabgrant/HEAD/LICENSE (retrieved 2026-11-04T18:00:24Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Tabro

Open-source Chromium browser automation runtime for AI agents supporting shared authenticated profiles and parallel tab control.

- Catalog URL: https://awesomecua.com/resources/github-ohmyskyhigh-tabro/
- Original source: https://github.com/ohmyskyhigh/tabro
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T17:55:08Z
- ID: github:ohmyskyhigh/tabro

- Record JSON: https://awesomecua.com/resources/github-ohmyskyhigh-tabro/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ohmyskyhigh/tabro/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ohmyskyhigh/tabro/main/README.md (retrieved 2026-11-04T17:55:08Z; SHA-256 fec5c0ba8aa75d68c3405ba1d176c99975a976fb50509a2ab88054a148bb38d7)
- https://raw.githubusercontent.com/ohmyskyhigh/tabro/HEAD/LICENSE (retrieved 2026-11-04T18:00:18Z; SHA-256 c63b75f05f88ed55ab4b16700e40d88acabf715ad14752ed425f4b019ce4baaf)

---

## Talox

Talox is a stateful Playwright browser runtime for AI agents with stealth interaction, structured page state, and trace observability.

- Catalog URL: https://awesomecua.com/resources/github-avant-iconic-talox/
- Original source: https://github.com/AVANT-ICONIC/Talox
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, state-tracking, observability, automation
- Evidence checked: 2026-11-04T15:45:51Z
- ID: github:avant-iconic/talox

- Record JSON: https://awesomecua.com/resources/github-avant-iconic-talox/record.json

### License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/AVANT-ICONIC/Talox/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AVANT-ICONIC/Talox/HEAD/README.md (retrieved 2026-11-04T15:45:51Z; SHA-256 0d288a86e08cd940baacfea48bb42665b15b05dca6cf2de7bab3c32b4f382987)
- https://raw.githubusercontent.com/AVANT-ICONIC/Talox/HEAD/LICENSE (retrieved 2026-11-04T15:57:38Z; SHA-256 9f34adbbf0ea4e68af09456772b60e179e048c77bc16d021507436f15e5460e6)

---

## TankWork

TankWork is a desktop agent framework combining OmniParser visual grounding, OCR, and PyAutoGUI actuation.

- Catalog URL: https://awesomecua.com/resources/github-agenttankos-tankwork/
- Original source: https://github.com/agenttankos/tankwork
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows
- Topics: automation, grounding, screen-understanding
- Evidence checked: 2026-11-04T13:12:04Z
- ID: github:agenttankos/tankwork

- Record JSON: https://awesomecua.com/resources/github-agenttankos-tankwork/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/agenttankos/tankwork/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/agenttankos/tankwork/HEAD/README.md (retrieved 2026-11-04T13:12:04Z; SHA-256 4858d11a056b40a85f03ef0a4a608773179509ebb931fde2ec73abf60af2c2a7)
- https://raw.githubusercontent.com/agenttankos/tankwork/HEAD/LICENSE.txt (retrieved 2026-11-04T13:46:50Z; SHA-256 ae61e16e97acc02d5c8129b3c3f1398b82a6f29a08ce3ea3360a643b397c98bf)

---

## taproot

taproot is an open-source mobile GUI agent harness combining vision-language models with accessibility-tree grounding on AndroidWorld.

- Catalog URL: https://awesomecua.com/resources/github-shivampkumar-taproot/
- Original source: https://github.com/shivampkumar/taproot
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, grounding, evaluation
- Evidence checked: 2026-11-04T14:20:09Z
- ID: github:shivampkumar/taproot

- Record JSON: https://awesomecua.com/resources/github-shivampkumar-taproot/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/shivampkumar/taproot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shivampkumar/taproot/HEAD/README.md (retrieved 2026-11-04T14:20:09Z; SHA-256 0d596903b896a9fc76c71ac7bb33ed78e09fde08a1f6a9428e2582992b368c26)
- https://raw.githubusercontent.com/shivampkumar/taproot/HEAD/LICENSE (retrieved 2026-11-04T14:23:57Z; SHA-256 e3362ec23a9107395718d700be8b00c820544fb5a784bbf9ba7a4c0d996f4694)

---

## taskforge

taskforge is a long-horizon workflow orchestration engine combining multi-step planning, tool invocation, and GUI state verification.

- Catalog URL: https://awesomecua.com/resources/github-huzjie-taskforge/
- Original source: https://github.com/huzjie/taskforge
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: long-horizon, workflow, planning, tool-integration
- Evidence checked: 2026-11-04T14:41:45Z
- ID: github:huzjie/taskforge

- Record JSON: https://awesomecua.com/resources/github-huzjie-taskforge/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/huzjie/taskforge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/huzjie/taskforge/HEAD/README.md (retrieved 2026-11-04T14:41:45Z; SHA-256 df07fd7fc0c1e2dc52af27b727072d998a612238769eb9ac1249e4ce98367cdb)
- https://raw.githubusercontent.com/huzjie/taskforge/HEAD/LICENSE (retrieved 2026-11-04T14:45:19Z; SHA-256 ca65034826eb59ea7dd52150b5cc40bf49a1d895615ebeb365958d69c0abf6e0)

---

## TestDriver SDK

Vitest plugin that spawns ephemeral devices and uses vision-based LLMs to build end-to-end tests of web apps, desktop apps and browser extensions.

- Catalog URL: https://awesomecua.com/resources/github-testdriverai-testdriverai/
- Original source: https://github.com/testdriverai/testdriverai
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: automation, evaluation, sandbox
- Evidence checked: 2026-11-06T16:36:27Z
- ID: github:testdriverai/testdriverai

### Limitations

Release v7.4.5 dated 2026-02-27. GitHub reports no license for the repository.

- Record JSON: https://awesomecua.com/resources/github-testdriverai-testdriverai/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/testdriverai/testdriverai/97d4d35d7727b2f83b1a73282aabf2e6e74824a2/README.md (retrieved 2026-11-06T16:36:27Z; SHA-256 ad59eb7c4a51282e1f3a06e906033df38d3056ced11fd0666d8f7e77f5c96db2)

---

## TEX (tex-browse-use)

Self-hosted browser-use engine for Claude Code that drives a real browser to operate web apps lacking APIs.

- Catalog URL: https://awesomecua.com/resources/github-hanzmaulwurf-tex-browse-use/
- Original source: https://github.com/HanzMaulwurf/tex-browse-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-11-04T16:30:10Z
- ID: github:hanzmaulwurf/tex-browse-use

- Record JSON: https://awesomecua.com/resources/github-hanzmaulwurf-tex-browse-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/HanzMaulwurf/tex-browse-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HanzMaulwurf/tex-browse-use/HEAD/README.md (retrieved 2026-11-04T16:30:10Z; SHA-256 48c6828190076e809cdae68f7c2a2d0591ac82c5fd121b711a3db8d36fd628a1)
- https://raw.githubusercontent.com/HanzMaulwurf/tex-browse-use/HEAD/LICENSE (retrieved 2026-11-04T16:34:40Z; SHA-256 458aa14ae23c9e6b161f11b3f8b153e1585ea178d837ed9b69d626cd4c2d9eff)

---

## THEIA Computer Use

THEIA (The Human Environment Intelligence Aperture) is a visual perception and UI computer-use plugin and framework for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-tree-ind-theia-ui-computer-use/
- Original source: https://github.com/TREE-Ind/THEIA-UI-Computer-Use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, grounding, automation, tool-integration
- Evidence checked: 2026-11-04T16:30:06Z
- ID: github:tree-ind/theia-ui-computer-use

- Record JSON: https://awesomecua.com/resources/github-tree-ind-theia-ui-computer-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/TREE-Ind/THEIA-UI-Computer-Use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TREE-Ind/THEIA-UI-Computer-Use/HEAD/README.md (retrieved 2026-11-04T16:30:06Z; SHA-256 aa4facac56f5196eb972eaf8b4419981252031c0f5e41989c8d4b63cefa57e9c)
- https://raw.githubusercontent.com/TREE-Ind/THEIA-UI-Computer-Use/HEAD/LICENSE (retrieved 2026-11-04T16:34:36Z; SHA-256 052ed120b86791875b0f072f42e08af181e46b962a2814e6a61accaf3adac31f)

---

## Threadline WebMCP

WebMCP argument debugger and research workspace with human-gated provenance tracking for browser agents.

- Catalog URL: https://awesomecua.com/resources/github-jameswirths-threadline/
- Original source: https://github.com/JamesWirths/threadline
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: human-in-the-loop, observability, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:37Z
- ID: github:jameswirths/threadline

- Record JSON: https://awesomecua.com/resources/github-jameswirths-threadline/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/JamesWirths/threadline/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JamesWirths/threadline/main/README.md (retrieved 2026-11-04T18:11:37Z; SHA-256 f8ccac0f8eeb319f62ce85ced96c535b54dd5d03c348ca022e5913ec052b9e52)
- https://raw.githubusercontent.com/JamesWirths/threadline/HEAD/LICENSE (retrieved 2026-11-04T18:16:21Z; SHA-256 e607b4c3c19ef3aaa7de7b53d1beceecfebf173fbe3e488f6722c2669088398f)

---

## TideSurf

TideSurf connects Chromium to LLM agents via compact structured DOM compression requiring 50 to 200 tokens per webpage.

- Catalog URL: https://awesomecua.com/resources/github-tidesurf-core/
- Original source: https://github.com/TideSurf/core
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, screen-understanding
- Evidence checked: 2026-11-04T15:45:50Z
- ID: github:tidesurf/core

- Record JSON: https://awesomecua.com/resources/github-tidesurf-core/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/TideSurf/core/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TideSurf/core/HEAD/README.md (retrieved 2026-11-04T15:45:50Z; SHA-256 473e6ee13f2106f694297776c441fb71963bbbbb5ad9940ca52fd46ce9fbf426)
- https://raw.githubusercontent.com/TideSurf/core/HEAD/LICENSE (retrieved 2026-11-04T15:57:36Z; SHA-256 f8f3f7b55c15ded994db907c83288022c4064816838861eb419288ad7495f872)

---

## tinybrowser

Rust-friendly agent browser API and TinyBus module for managing headless and headful web sessions.

- Catalog URL: https://awesomecua.com/resources/github-tinyhumansai-tinybrowser/
- Original source: https://github.com/tinyhumansai/tinybrowser
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, tool-integration
- Evidence checked: 2026-11-04T17:30:29Z
- ID: github:tinyhumansai/tinybrowser

- Record JSON: https://awesomecua.com/resources/github-tinyhumansai-tinybrowser/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/tinyhumansai/tinybrowser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tinyhumansai/tinybrowser/main/README.md (retrieved 2026-11-04T17:30:29Z; SHA-256 9909da51d0093c310a1ff7bb08bfb08f3cba4069be70db3839bf7448edff7ef0)
- https://raw.githubusercontent.com/tinyhumansai/tinybrowser/HEAD/LICENSE (retrieved 2026-11-04T17:40:01Z; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)

---

## tinycomputer

Jev decision-model harness for fast desktop and browser action execution.

- Catalog URL: https://awesomecua.com/resources/github-tinyhumansai-tinycomputer/
- Original source: https://github.com/tinyhumansai/tinycomputer
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: action-prediction, grounding, automation, web-navigation
- Evidence checked: 2026-11-04T17:30:37Z
- ID: github:tinyhumansai/tinycomputer

- Record JSON: https://awesomecua.com/resources/github-tinyhumansai-tinycomputer/record.json

### License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/tinyhumansai/tinycomputer/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tinyhumansai/tinycomputer/main/README.md (retrieved 2026-11-04T17:30:37Z; SHA-256 2062dec3ee69039c7f23537b30c7cc45ba592ec9ce0d5b3bab04681fb6232ffa)
- https://raw.githubusercontent.com/tinyhumansai/tinycomputer/HEAD/LICENSE (retrieved 2026-11-04T17:40:02Z; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)

---

## TongUI training and inference framework

Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.

- Catalog URL: https://awesomecua.com/resources/github-tongui-agent-tongui-agent/
- Original source: https://github.com/TongUI-agent/TongUI-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, imitation-learning, data-generation
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:tongui-agent/tongui-agent

### Limitations

The public tree includes training configs, preprocessing, inference and serving examples. The project still marks release of all experiment/evaluation scripts as work in progress. This entry covers the implementation and its 3B/7B/32B model-size variants. A root source license is unrecorded in the inspected project tree.

- Record JSON: https://awesomecua.com/resources/github-tongui-agent-tongui-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No project-level source-license declaration in the inspected tree; upstream dependency licenses do not establish this project’s grant.
  Sources: https://api.github.com/repos/TongUI-agent/TongUI-agent/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 f30a18d1a533b8f71f436dae2ee7369f8971422bd76527e069499c5bba911912)
- https://api.github.com/repos/TongUI-agent/TongUI-agent (retrieved 2026-10-17T12:30:53Z; SHA-256 90c209a9758f7b527def072cfa78ebc87f1b49b436fad57c4c7bb5a6b66ae790)
- https://api.github.com/repos/TongUI-agent/TongUI-agent/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 0c955a89dcda18652b09ce836c51c6ccaa007be6f6afeb48d21d01813cef1ec2)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md (retrieved 2026-10-17T12:36:55Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)

---

## ToolGen

ToolGen represents external tools as virtual vocabulary tokens to unify massive-scale tool retrieval and execution via autoregressive generation.

- Catalog URL: https://awesomecua.com/resources/github-reason-wang-toolgen/
- Original source: https://github.com/Reason-Wang/ToolGen
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: tool-integration, action-prediction
- Evidence checked: 2026-11-04T13:12:32Z
- ID: github:reason-wang/toolgen

- Record JSON: https://awesomecua.com/resources/github-reason-wang-toolgen/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Reason-Wang/ToolGen/HEAD/README.md (retrieved 2026-11-04T13:12:32Z; SHA-256 c2f14db6c62a1ec26e14aa2b6c9f1d821d46ec43b6f10f2a14d0182a160fc698)

---

## ToolTok

ToolTok introduces atomic directional cursor-movement tokens for multi-step iterative GUI visual grounding on ScreenSpot and ScreenSpot-Pro.

- Catalog URL: https://awesomecua.com/resources/github-zephinuecode-tooltok/
- Original source: https://github.com/ZephinueCode/ToolTok
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, android
- Topics: grounding, action-prediction, efficiency
- Evidence checked: 2026-11-04T13:12:46Z
- ID: github:zephinuecode/tooltok

- Record JSON: https://awesomecua.com/resources/github-zephinuecode-tooltok/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZephinueCode/ToolTok/HEAD/README.md (retrieved 2026-11-04T13:12:46Z; SHA-256 63702b4727d67d6c57b3c7cfa52298ecff5eb71958ca065e7406fb61355b7543)

---

## TopoClaw

TopoClaw is a topology-aware multi-agent digital assistant with skill verification and sandboxed execution across desktop, web, and mobile.

- Catalog URL: https://awesomecua.com/resources/github-madeagents-topoclaw/
- Original source: https://github.com/MadeAgents/TopoClaw
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: workflow, safety-security, automation, tool-integration
- Evidence checked: 2026-11-04T13:12:23Z
- ID: github:madeagents/topoclaw

- Record JSON: https://awesomecua.com/resources/github-madeagents-topoclaw/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MadeAgents/TopoClaw/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MadeAgents/TopoClaw/HEAD/README.md (retrieved 2026-11-04T13:12:23Z; SHA-256 536c9c614e40950bcef6881854eaf91125439f1dedf1314f02928bca7e237192)
- https://raw.githubusercontent.com/MadeAgents/TopoClaw/HEAD/LICENSE (retrieved 2026-11-04T13:41:44Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)

---

## Touchline

Multi-agent browser squad for evidence-led website inspection and frontend reconstruction.

- Catalog URL: https://awesomecua.com/resources/github-edenbuilds-touchline/
- Original source: https://github.com/edenbuilds/touchline
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: ui-design, screen-understanding, web-navigation, workflow
- Evidence checked: 2026-11-04T17:55:16Z
- ID: github:edenbuilds/touchline

- Record JSON: https://awesomecua.com/resources/github-edenbuilds-touchline/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/edenbuilds/touchline/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/edenbuilds/touchline/main/README.md (retrieved 2026-11-04T17:55:16Z; SHA-256 8b3d0e200926a32ffd0e7a83a8144ec542adb449343e062bee742b50ac112dac)
- https://raw.githubusercontent.com/edenbuilds/touchline/HEAD/LICENSE (retrieved 2026-11-04T18:00:09Z; SHA-256 42ec9d82a5d1ad481ac5c1cab891234eebea5df7161c1598c7707c0c00fd79a0)

---

## Touchpoint

Touchpoint is a cross-platform desktop accessibility API and MCP server giving AI agents unified UI inspection and control.

- Catalog URL: https://awesomecua.com/resources/github-touchpoint-labs-touchpoint/
- Original source: https://github.com/Touchpoint-Labs/Touchpoint
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux, web
- Topics: screen-understanding, tool-integration, automation, cross-app
- Evidence checked: 2026-11-04T15:45:51Z
- ID: github:touchpoint-labs/touchpoint

- Record JSON: https://awesomecua.com/resources/github-touchpoint-labs-touchpoint/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Touchpoint-Labs/Touchpoint/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Touchpoint-Labs/Touchpoint/HEAD/README.md (retrieved 2026-11-04T15:45:51Z; SHA-256 02232f30ba1d164fa3ad514639f278daf2aec3224893bcd150ee03207bc8f92f)
- https://raw.githubusercontent.com/Touchpoint-Labs/Touchpoint/HEAD/LICENSE (retrieved 2026-11-04T15:57:37Z; SHA-256 4354cccc246522946fb003947e2dd270b48c0a962f6a20edc0ae80a8638aedad)

---

## TraceFact

Evidence-first reliability reporting and deterministic replay framework for coding and browser agents.

- Catalog URL: https://awesomecua.com/resources/github-alex0ai-tracefact/
- Original source: https://github.com/Alex0AI/tracefact
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: observability, recording, evaluation
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:alex0ai/tracefact

- Record JSON: https://awesomecua.com/resources/github-alex0ai-tracefact/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Alex0AI/tracefact/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Alex0AI/tracefact/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 2b8cddb73c55acbce55dd97fc0b7c424337315abd9abf72168c1f56acda41012)
- https://raw.githubusercontent.com/Alex0AI/tracefact/HEAD/LICENSE (retrieved 2026-11-04T17:39:46Z; SHA-256 9f17ee06575b4488ac47aab900c931a7db4a92c2853ffae60e637fa01c33f17d)

---

## TreeCUA

Framework for generating GUI trajectories through tree-structured exploration and verification.

- Catalog URL: https://awesomecua.com/resources/github-uitron-hub-treecua/
- Original source: https://github.com/UITron-hub/TreeCUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:uitron-hub/treecua

- Record JSON: https://awesomecua.com/resources/github-uitron-hub-treecua/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/UITron-hub/TreeCUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UITron-hub/TreeCUA/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 91cffd585c667d169486506a785c6cbc3068fe28409efc97abf8911f9d0bd5a5)
- https://raw.githubusercontent.com/UITron-hub/TreeCUA/HEAD/LICENSE (retrieved 2026-10-16T06:42:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Trope CUA

Trope CUA enables background desktop inspection and GUI operation on Windows and macOS without interrupting foreground user work.

- Catalog URL: https://awesomecua.com/resources/github-tropeai-trope-cua/
- Original source: https://github.com/tropeai/trope-cua
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, macos
- Topics: automation, screen-understanding, sandbox
- Evidence checked: 2026-11-04T16:10:31Z
- ID: github:tropeai/trope-cua

- Record JSON: https://awesomecua.com/resources/github-tropeai-trope-cua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/tropeai/trope-cua/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tropeai/trope-cua/HEAD/README.md (retrieved 2026-11-04T16:10:31Z; SHA-256 71358625c7136b9cffd48c42c4ac836b82cd73befbe2b200a5ac96f369bea8a6)
- https://raw.githubusercontent.com/tropeai/trope-cua/HEAD/LICENSE (retrieved 2026-11-04T16:13:42Z; SHA-256 c4e00519c04d5c4cefd5f25ab2491fcfc479c7377912365325334692d6240956)

---

## Trusted WebMCP Actions

Reference architecture for cryptographically verifiable user authority on consequential WebMCP browser-agent actions.

- Catalog URL: https://awesomecua.com/resources/github-markneville-trusted-webmcp-actions/
- Original source: https://github.com/markneville/trusted-webmcp-actions
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:30:44Z
- ID: github:markneville/trusted-webmcp-actions

- Record JSON: https://awesomecua.com/resources/github-markneville-trusted-webmcp-actions/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/markneville/trusted-webmcp-actions/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/markneville/trusted-webmcp-actions/main/README.md (retrieved 2026-11-04T17:30:44Z; SHA-256 b5bdca7a0591fe2a1066d0d6908a9fae6228da509a0d8d9edcbf4ae8aaf7833d)
- https://raw.githubusercontent.com/markneville/trusted-webmcp-actions/HEAD/LICENSE (retrieved 2026-11-04T17:39:54Z; SHA-256 4a59ba6df26470d78efbb8481412d2938868263b8940aef0e304f6e3cf1360ac)

---

## Tsaagan

Tsaagan is a verify-first browser control framework for AI agents that proves every click and form action succeeded before advancing.

- Catalog URL: https://awesomecua.com/resources/github-michaelolmos-tsaagan/
- Original source: https://github.com/michaelolmos/tsaagan
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, self-reflection, automation, robustness
- Evidence checked: 2026-11-04T16:30:06Z
- ID: github:michaelolmos/tsaagan

- Record JSON: https://awesomecua.com/resources/github-michaelolmos-tsaagan/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/michaelolmos/tsaagan/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/michaelolmos/tsaagan/HEAD/README.md (retrieved 2026-11-04T16:30:06Z; SHA-256 61b672e6e946c1e64534e0a21bad3bd37bf0185dda29965cc8c09fa9ba93dd9d)
- https://raw.githubusercontent.com/michaelolmos/tsaagan/HEAD/LICENSE (retrieved 2026-11-04T16:34:37Z; SHA-256 4b160e4a3516cdc3b6542ff9cdb1178aa25108b3707bfc673fb303e3d321523e)

---

## TuriX-CUA

TuriX-CUA is a multi-agent desktop automation framework for macOS and Windows combining planner, actor, reflector, and memory skills.

- Catalog URL: https://awesomecua.com/resources/github-turixai-turix-cua/
- Original source: https://github.com/TurixAI/TuriX-CUA
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, macos, windows
- Topics: automation, planning, memory, grounding
- Evidence checked: 2026-11-04T13:12:41Z
- ID: github:turixai/turix-cua

- Record JSON: https://awesomecua.com/resources/github-turixai-turix-cua/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/TurixAI/TuriX-CUA/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TurixAI/TuriX-CUA/HEAD/README.md (retrieved 2026-11-04T13:12:41Z; SHA-256 9ac2fc65ce0bab91f200332b50007961dfd461f17ed1a61c0ff27c9123fe02fe)
- https://raw.githubusercontent.com/TurixAI/TuriX-CUA/HEAD/LICENSE (retrieved 2026-11-04T13:41:43Z; SHA-256 38056696d0db54dc515e510d6e4ca656db9ec97f5a3c4eba0fd24453352248a2)

---

## UI-Voyager

UI-Voyager is a self-evolving mobile GUI agent framework that learns from failed execution trajectories via group-relative reflection.

- Catalog URL: https://awesomecua.com/resources/github-ui-voyager-ui-voyager/
- Original source: https://github.com/ui-voyager/UI-Voyager
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, self-reflection, reinforcement-learning
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:ui-voyager/ui-voyager

- Record JSON: https://awesomecua.com/resources/github-ui-voyager-ui-voyager/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ui-voyager/UI-Voyager/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ui-voyager/UI-Voyager/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 4f4360dbe9787f0884d968a7cee28e44bc334f5a20f59997bcdb16ea214f56af)
- https://raw.githubusercontent.com/ui-voyager/UI-Voyager/HEAD/LICENSE (retrieved 2026-11-04T14:07:29Z; SHA-256 f7b20aa3079a1779f35284655a65e2f8e95833f6e2412601a6edcda05153b059)

---

## Ui.Vision RPA

Ui.Vision combines Selenium-compatible browser commands, visual desktop OCR/template automation, and an MCP server for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-a9t9-rpa/
- Original source: https://github.com/A9T9/RPA
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, windows, macos, linux
- Topics: automation, grounding, tool-integration
- Evidence checked: 2026-11-04T15:03:33Z
- ID: github:a9t9/rpa

- Record JSON: https://awesomecua.com/resources/github-a9t9-rpa/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/A9T9/RPA/HEAD/README.md (retrieved 2026-11-04T15:03:33Z; SHA-256 e24a793c861b6f141b1f12d3ac888073821f484563f9456d6e6fa274a786e57c)

---

## UI2API

Analyzes a website's UI and network traffic once to synthesize reusable, browser-free API tools for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-merezarezaei-ui2api/
- Original source: https://github.com/MeRezaRezaei/ui2api
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, efficiency, web-navigation, data-generation
- Evidence checked: 2026-11-04T17:55:12Z
- ID: github:merezarezaei/ui2api

- Record JSON: https://awesomecua.com/resources/github-merezarezaei-ui2api/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MeRezaRezaei/ui2api/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MeRezaRezaei/ui2api/main/README.md (retrieved 2026-11-04T17:55:12Z; SHA-256 08d43f12fb9c882f0913e2a7ab89fd225ef3f5ed8e0ea2349c8c20b3f928e513)
- https://raw.githubusercontent.com/MeRezaRezaei/ui2api/HEAD/LICENSE (retrieved 2026-11-04T18:00:17Z; SHA-256 a83d9e62e571c56fd39075c3ebd50aee8ab62b74cc7b489f598650057c8681fc)

---

## uia-agent

uia-agent defines an open-source LLM agent action space that drives legacy Windows desktop applications through the UI Automation tree.

- Catalog URL: https://awesomecua.com/resources/github-supermarioyl-uia-agent/
- Original source: https://github.com/SuperMarioYL/uia-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: screen-understanding, automation, grounding, action-prediction
- Evidence checked: 2026-11-04T16:30:02Z
- ID: github:supermarioyl/uia-agent

- Record JSON: https://awesomecua.com/resources/github-supermarioyl-uia-agent/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/SuperMarioYL/uia-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SuperMarioYL/uia-agent/HEAD/README.md (retrieved 2026-11-04T16:30:02Z; SHA-256 ea3f4001875ebd235813a72a112f0cc7641e10fab6675bacf2fa7fee374ec187)
- https://raw.githubusercontent.com/SuperMarioYL/uia-agent/HEAD/LICENSE (retrieved 2026-11-04T16:34:28Z; SHA-256 d76e75a101c44b598edab3841a00288201150ea537ed975f6913e50eb8e53842)

---

## Unattended Android Automation Toolkit

Reliability-first building blocks for unattended Android app automation, crash recovery, and UI state collection.

- Catalog URL: https://awesomecua.com/resources/github-chuanchihsu1219-unattended-android-automation-toolkit/
- Original source: https://github.com/chuanchihsu1219/unattended-android-automation-toolkit
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, robustness, automation
- Evidence checked: 2026-11-04T18:11:39Z
- ID: github:chuanchihsu1219/unattended-android-automation-toolkit

- Record JSON: https://awesomecua.com/resources/github-chuanchihsu1219-unattended-android-automation-toolkit/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/chuanchihsu1219/unattended-android-automation-toolkit/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chuanchihsu1219/unattended-android-automation-toolkit/main/README.md (retrieved 2026-11-04T18:11:39Z; SHA-256 8334d06318aae0bc86ff6096e3347d30f3a866ce4590b9ebbf6422b7831a2081)
- https://raw.githubusercontent.com/chuanchihsu1219/unattended-android-automation-toolkit/HEAD/LICENSE (retrieved 2026-11-04T18:16:16Z; SHA-256 0f81e3bf03a60a5596bb911e37ba8b95e799d8ca034ff7f414e24c5952cc4bd3)

---

## Understudy

Understudy observes human desktop and browser demonstrations and compiles them into parameterized, replayable computer-use skills.

- Catalog URL: https://awesomecua.com/resources/github-understudy-ai-understudy/
- Original source: https://github.com/understudy-ai/understudy
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: imitation-learning, recording, workflow, automation
- Evidence checked: 2026-11-04T14:41:51Z
- ID: github:understudy-ai/understudy

- Record JSON: https://awesomecua.com/resources/github-understudy-ai-understudy/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/understudy-ai/understudy/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/understudy-ai/understudy/HEAD/README.md (retrieved 2026-11-04T14:41:51Z; SHA-256 ab8a166c98b01bacd1b9b3c349f1e3dc178506390f9cfbe097fadcf0dc965280)
- https://raw.githubusercontent.com/understudy-ai/understudy/HEAD/LICENSE (retrieved 2026-11-04T14:45:20Z; SHA-256 42d1a77edcbd9a92a552e3d8414a9a69bc85e68f25dc2c428cde104dbb318cdd)

---

## Universal AI Studio (OmniAI Desktop)

All-in-one desktop AI studio integrating multi-model LLM chat, computer use, and browser automation.

- Catalog URL: https://awesomecua.com/resources/github-osamalvzx-universal-ai-studio/
- Original source: https://github.com/osamalvzx/Universal-AI-Studio
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, workflow, automation
- Evidence checked: 2026-11-04T17:30:42Z
- ID: github:osamalvzx/universal-ai-studio

- Record JSON: https://awesomecua.com/resources/github-osamalvzx-universal-ai-studio/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/osamalvzx/Universal-AI-Studio/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/osamalvzx/Universal-AI-Studio/main/README.md (retrieved 2026-11-04T17:30:42Z; SHA-256 b919573be9c6e8f30bb385e5c310d5735dbe9077424829f59108301f07a17c9b)
- https://raw.githubusercontent.com/osamalvzx/Universal-AI-Studio/HEAD/LICENSE (retrieved 2026-11-04T17:39:58Z; SHA-256 a8ad43e97c4bda4788613037e42a8d921345203b9c9fbe72b0db7f491ff59bbc)

---

## UXAgent

Usability-testing system that generates simulated user personas, has LLM agents work through a target website via a browser connector, and shows their survey answers and action logs in a result viewer.

- Catalog URL: https://awesomecua.com/resources/url-2f73fe78c423e263d451/
- Original source: https://uxagent.hailab.io
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: ui-design, web-navigation
- Evidence checked: 2026-11-10T03:01:16Z
- ID: url:2f73fe78c423e263d451

### Limitations

The linked repository neuhai/uxagent holds MIT-licensed Python code run with uv and Playwright Chromium and needs an LLM API key; it links a Hugging Face dataset. The paper is arXiv 2504.09407.

- Record JSON: https://awesomecua.com/resources/url-2f73fe78c423e263d451/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://uxagent.hailab.io (retrieved 2026-11-10T03:01:16Z; SHA-256 2d09df84248a541db7f714478e96c2b612f5a35d157aac17baa9ee691e46a3a7)

---

## V-Droid

V-Droid pairs a mobile GUI actor with a generative verifier that scores candidate actions before execution on Android devices.

- Catalog URL: https://awesomecua.com/resources/github-v-droid-agent-v-droid/
- Original source: https://github.com/V-Droid-Agent/V-Droid
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, reward-models, self-reflection
- Evidence checked: 2026-11-04T13:12:42Z
- ID: github:v-droid-agent/v-droid

- Record JSON: https://awesomecua.com/resources/github-v-droid-agent-v-droid/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/V-Droid-Agent/V-Droid/HEAD/README.md (retrieved 2026-11-04T13:12:42Z; SHA-256 e405fdbb0018c557b5e9d974bff53acba26b3695dccbab8839a8dde2dc306ff4)

---

## VACT (Vector Agent Context Transport)

High-frequency GPU screen perception and low-latency input transport protocol for desktop computer-use agents.

- Catalog URL: https://awesomecua.com/resources/github-fy2ne-vact/
- Original source: https://github.com/fy2ne/VACT
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos
- Topics: screen-understanding, efficiency, grounding, action-prediction
- Evidence checked: 2026-11-04T18:11:45Z
- ID: github:fy2ne/vact

- Record JSON: https://awesomecua.com/resources/github-fy2ne-vact/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/fy2ne/VACT/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/fy2ne/VACT/main/README.md (retrieved 2026-11-04T18:11:45Z; SHA-256 3b15ac16964341cde4c3a85818f5a0a08e104a9593042f695c422a37ac4a170c)
- https://raw.githubusercontent.com/fy2ne/VACT/HEAD/LICENSE (retrieved 2026-11-04T18:16:19Z; SHA-256 11c5346ba7be23ba8710b326e18fa28c51fa717f0b7196c6e929a4f7564a229c)

---

## vco (Visual Computer Operate)

Shell-driven visual computer-use toolkit enabling LLMs to inspect and click web pages and desktop screens.

- Catalog URL: https://awesomecua.com/resources/github-lo2589-vco/
- Original source: https://github.com/lo2589/vco
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, screen-understanding, automation
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:lo2589/vco

- Record JSON: https://awesomecua.com/resources/github-lo2589-vco/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/lo2589/vco/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 4409d8e81f18577a34bca06de2bd1d6b5117d2c68ea691b252391283ff6b1a34)

---

## Vedanshu7 Operant

Discovers how to complete a task in a no-API application once with an LLM and compiles the trace for repeatable execution.

- Catalog URL: https://awesomecua.com/resources/github-vedanshu7-operant/
- Original source: https://github.com/Vedanshu7/operant
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: recording, workflow, efficiency, automation
- Evidence checked: 2026-11-04T17:30:41Z
- ID: github:vedanshu7/operant

- Record JSON: https://awesomecua.com/resources/github-vedanshu7-operant/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Vedanshu7/operant/main/README.md (retrieved 2026-11-04T17:30:41Z; SHA-256 eb22cfd47b473d062732f0768e80a088339ca0f1df94d74cde474c110136d892)

---

## VEM GUI-Agent-RL

Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-gui-agent-rl/
- Original source: https://github.com/microsoft/GUI-Agent-RL
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, reward-models, mobile-navigation
- Evidence checked: 2026-10-17T09:12:14Z
- ID: github:microsoft/gui-agent-rl

### Limitations

The public tree includes critic-training configurations, policy training and offline/online evaluation scripts. The README obtains base models and AITW imagery separately, then instructs users to train critic and policy checkpoints locally. MIT applies to repository code only.

- Record JSON: https://awesomecua.com/resources/github-microsoft-gui-agent-rl/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/GUI-Agent-RL/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository LICENSE grants MIT for code; linked training imagery and pretrained model licenses remain separate.
  Sources: https://raw.githubusercontent.com/microsoft/GUI-Agent-RL/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/microsoft/GUI-Agent-RL/HEAD/README.md (retrieved 2026-10-17T09:12:14Z; SHA-256 d21a1ae4359296c0f3034ac655888dce43448d10afe0b1909d6b6520678c2526)
- https://api.github.com/repos/microsoft/GUI-Agent-RL (retrieved 2026-10-17T09:12:13Z; SHA-256 791c6e56e62ce5e803a4ba313557bac0a39dfeba27499a3865ad444a860b426a)
- https://api.github.com/repos/microsoft/GUI-Agent-RL/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:06Z; SHA-256 5b799a5bdae78ff50652c0b464b6cad12d9dda265d4752e5d5f9eab65e9d5c6f)
- https://raw.githubusercontent.com/microsoft/GUI-Agent-RL/HEAD/LICENSE (retrieved 2026-10-17T09:14:06Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## Venxuix Dccide

2D/3D agentic operating environment layered above Windows where humans and AI agents co-orchestrate desktop tasks.

- Catalog URL: https://awesomecua.com/resources/github-venxuix-dccide-venxuix/
- Original source: https://github.com/venxuix-dccide/Venxuix
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: ui-design, workflow, automation, human-in-the-loop
- Evidence checked: 2026-11-04T17:20:40Z
- ID: github:venxuix-dccide/venxuix

- Record JSON: https://awesomecua.com/resources/github-venxuix-dccide-venxuix/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/venxuix-dccide/Venxuix/main/README.md (retrieved 2026-11-04T17:20:40Z; SHA-256 e0ebe704d239fcf94850eec076f99340c7ce61b6e44770a6cd153aaf7ef2f3e0)

---

## VeriOS

Research code for proactive human–GUI-agent verification, including offline interaction-loop and dual-agent evaluation scripts plus LLaMA-Factory fine-tuning configurations.

- Catalog URL: https://awesomecua.com/resources/github-wuzheng02-verios/
- Original source: https://github.com/Wuzheng02/VeriOS
- Kind: framework
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: safety-security, human-in-the-loop, mobile-navigation
- Evidence checked: 2026-10-18T10:59:55Z
- ID: github:wuzheng02/verios

### Limitations

The released scripts evaluate recorded task inputs; a live Android execution environment remains unestablished by the retained README.

- Record JSON: https://awesomecua.com/resources/github-wuzheng02-verios/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Wuzheng02/VeriOS/HEAD/README.md (retrieved 2026-10-18T10:59:55Z; SHA-256 282883d02391a86c5a4d0cdafdc1d33f10a5073f31eba8c852095601d0aeb939)

---

## VeriSafe Agent

Runtime verification framework for Android GUI agents that checks proposed actions against logical rules derived from user instructions and developer-defined app states.

- Catalog URL: https://awesomecua.com/resources/github-verisafeagent-verisafeagent/
- Original source: https://github.com/VeriSafeAgent/VeriSafeAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, mobile-navigation, state-tracking
- Evidence checked: 2026-10-18T10:59:55Z
- ID: github:verisafeagent/verisafeagent

### Limitations

The verification method requires developers to supply app-state predicates and transition hooks. The exact-version paper supports the paper-to-repository relation.

- Record JSON: https://awesomecua.com/resources/github-verisafeagent-verisafeagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/VeriSafeAgent/VeriSafeAgent/HEAD/README.md (retrieved 2026-10-18T10:59:55Z; SHA-256 2403ef3ec300e257dc631e3c569fc9aabaab1d3f385ac37abe1e4021aaae6e21)
- https://arxiv.org/html/2503.18492v2 (retrieved 2026-10-18T13:06:20.028238+00:00; SHA-256 9b04efe4136a39e3e5f21a1d3bb8a44075f1370bdbeec6a4307783f3836f8311)

---

## VG-GUI-TASKER

VG-GUI-TASKER extracts informative keyframes from instructional demonstration videos to guide multimodal GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-vg-gui-tasker-vg-gui-tasker/
- Original source: https://github.com/VG-GUI-TASKER/VG-GUI-TASKER
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: video, mobile-navigation, efficiency
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:vg-gui-tasker/vg-gui-tasker

- Record JSON: https://awesomecua.com/resources/github-vg-gui-tasker-vg-gui-tasker/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/VG-GUI-TASKER/VG-GUI-TASKER/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 cfef3b054b195b1b128c5bbc3b6955f17d328a9dafaffb40c28e9a89eb7fbc82)

---

## Video2GUI

Video2GUI synthesizes large-scale GUI interaction trajectories from unlabeled screen-recording videos via inverse dynamics and VLM annotation.

- Catalog URL: https://awesomecua.com/resources/github-weiminxiong-video2gui/
- Original source: https://github.com/WeiminXiong/Video2GUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: data-generation, video, grounding
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:weiminxiong/video2gui

- Record JSON: https://awesomecua.com/resources/github-weiminxiong-video2gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/WeiminXiong/Video2GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92)
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/HEAD/LICENSE (retrieved 2026-11-04T14:07:32Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## VideoCAD training and evaluation code

VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.

- Catalog URL: https://awesomecua.com/resources/github-ghadinehme-videocad/
- Original source: https://github.com/ghadinehme/VideoCAD
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, imitation-learning, evaluation
- Evidence checked: 2026-10-18T12:02:53.536297+00:00
- ID: github:ghadinehme/videocad

### Limitations

The paper links this author repository. Onshape is a browser-based CAD environment. The full dataset and a checkpoint are linked separately. MIT is recorded only for this repository code; external data and weight licenses remain unknown.

- Record JSON: https://awesomecua.com/resources/github-ghadinehme-videocad/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The author repository LICENSE declares MIT for repository code; data, weights and document rights have separate scopes.
  Sources: https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md (retrieved 2026-10-18T12:02:53.536297+00:00; SHA-256 cbb08803922b4b7736979ca0a5fe552b111fcd428fa9317401bc090b14bb4e54)
- https://api.github.com/repos/ghadinehme/VideoCAD (retrieved 2026-10-18T12:02:30.768857+00:00; SHA-256 ff80afd35c79d8dd27dd7b9284ce082fe238c13a113aa19400ca0dc2d18ff194)
- https://api.github.com/repos/ghadinehme/VideoCAD/git/trees/2d69eeaf0ac44210c76dcab2d08b4d4610be236c?recursive=1 (retrieved 2026-10-18T12:02:52.564274+00:00; SHA-256 9ded7c6ef25b88879e9d46939ca7ff3bef97362e76dbdb808e57c67008541557)
- https://arxiv.org/html/2505.24838v2 (retrieved 2026-10-18T12:02:34.311949+00:00; SHA-256 a303d95a811331cd6ee23b0340f1b9ef2dd996835bfbc66656a871ff94eead50)
- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE (retrieved 2026-10-18T12:03:24.765415+00:00; SHA-256 8e02753a1016dc67c97b395934313027b5f91b74209c7a24438de70fdc19cad1)

---

## VillagerAgent & VillagerBench

VillagerAgent provides a directed-acyclic-graph multi-agent coordinator and the VillagerBench evaluation suite in Minecraft.

- Catalog URL: https://awesomecua.com/resources/github-cnsdqd-dyb-villageragent/
- Original source: https://github.com/cnsdqd-dyb/VillagerAgent
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop
- Topics: planning, workflow, evaluation
- Evidence checked: 2026-11-04T13:12:10Z
- ID: github:cnsdqd-dyb/villageragent

- Record JSON: https://awesomecua.com/resources/github-cnsdqd-dyb-villageragent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cnsdqd-dyb/VillagerAgent/HEAD/README.md (retrieved 2026-11-04T13:12:10Z; SHA-256 83327928927e3c3fbe7cef4095c38611e0e88cf790f02f63553282c393d7f7d3)

---

## ViMo code

Code for the ViMo GUI world model: Gemini-based next-screen text prediction, AITW and AndroidControl data processing, InstructPix2Pix-style graphic inference, and an AndroidWorld agent that consults it.

- Catalog URL: https://awesomecua.com/resources/github-ai-agents-2030-vimo/
- Original source: https://github.com/ai-agents-2030/ViMo
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, mobile-navigation
- Evidence checked: 2026-10-19T06:59:55Z
- ID: github:ai-agents-2030/vimo

### Limitations

The README describes ViMo as a GUI world model that predicts the next GUI state as image and text. UI_text_prediction.py runs the text-prediction step with Gemini (gemini-2.0-flash), with a GPT-4o variant in the same file. data/ holds the selected Android in the Wild and AndroidControl episode IDs with annotations; images must be downloaded from the original releases, then generate_ocr.py and check_fix.py prepare the symbolic text representation. Graphic prediction is trained by following the InstructPix2Pix project, with edit_cli.py and generate.yaml for inference; no trained weights are in the repository. 'ViMo-Empowered Agent' is a copy of AndroidWorld (with its own Apache-2.0 LICENSE) whose vimo modules post the current screenshot and a candidate action to a world-model server and score the predicted screen when choosing actions. The project page links this repository and arXiv 2504.13936. No license file is at the repository root.

- Record JSON: https://awesomecua.com/resources/github-ai-agents-2030-vimo/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No license file is at the repository root and the README states no license; the Apache-2.0 LICENSE inside the vendored AndroidWorld copy covers that copy only.
  Sources: https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/README.md (retrieved 2026-10-19T06:59:55Z; SHA-256 3bd1ee4aef9f07f0732989b83fb9ee1631814d72b567eb3300e32dc2d9b674a4)
- https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1 (retrieved 2026-10-19T06:59:59Z; SHA-256 bff182c03efb5b0acd9610f4ed4ff204cb3a2fe731bc416e59924f041b308ebc)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/UI_text_prediction.py (retrieved 2026-10-19T06:59:59Z; SHA-256 0723d06257b3d2fb795bc28238baaafaaf2737a684623d07ce99e25ba28c0110)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/ViMo-Empowered%20Agent/android_world/agents/vimo/vimo_reward.py (retrieved 2026-10-19T06:59:59Z; SHA-256 a1dbd214d87549cd65262cdaff34d09463bfba3a74c742cb72d0912b20d9ec24)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/edit_cli.py (retrieved 2026-10-19T07:00:00Z; SHA-256 bbe69cee05e986cf67f090dce46f3a748ce94539f5c3ce44ee14af45088dc14a)
- https://ai-agents-2030.github.io/ViMo/ (retrieved 2026-10-19T07:00:00Z; SHA-256 96f6b0485c524b937fbca9985f2630d3c5667239d9e9940b67c86e3a8e76425b)

---

## Vision Browser Agent

Pure-vision browser automation framework with built-in local Moondream3 inference, zero DOM dependency, and human-like mouse trajectories.

- Catalog URL: https://awesomecua.com/resources/github-zbcs-studiocr-cn-vision-browser-agent/
- Original source: https://github.com/ZBCs-StudioCr-CN/vision-browser-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, screen-understanding, web-navigation, automation
- Evidence checked: 2026-11-04T16:51:58Z
- ID: github:zbcs-studiocr-cn/vision-browser-agent

- Record JSON: https://awesomecua.com/resources/github-zbcs-studiocr-cn-vision-browser-agent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ZBCs-StudioCr-CN/vision-browser-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZBCs-StudioCr-CN/vision-browser-agent/HEAD/README.md (retrieved 2026-11-04T16:51:58Z; SHA-256 12559596ce3d955cef08f703a436d7b219a86d8f3260b9e6a91cfd66b5fd8a68)
- https://raw.githubusercontent.com/ZBCs-StudioCr-CN/vision-browser-agent/HEAD/LICENSE (retrieved 2026-11-04T16:56:46Z; SHA-256 386cf63b9dd5598346c02a43a474d8b156011e6bd395fb3d0ad3cf47868328ad)

---

## VisionGrid AI

Computer-vision Android UI automation and heuristic gameplay engine built with OpenCV and ADB.

- Catalog URL: https://awesomecua.com/resources/github-mohsinjutt62-autoplay-cv-engine-bot/
- Original source: https://github.com/MohsinJutt62/AutoPlay-CV_Engine_Bot
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, mobile-navigation, automation
- Evidence checked: 2026-11-04T17:30:45Z
- ID: github:mohsinjutt62/autoplay-cv_engine_bot

- Record JSON: https://awesomecua.com/resources/github-mohsinjutt62-autoplay-cv-engine-bot/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MohsinJutt62/AutoPlay-CV_Engine_Bot/main/README.md (retrieved 2026-11-04T17:30:45Z; SHA-256 51e99fc520a02d310643064931330df1cef37ccbdbcdd81107394ea97bbb09b6)

---

## visual-agent

Protocol-first framework enabling visual-model hosts to safely inspect and operate software GUI interfaces.

- Catalog URL: https://awesomecua.com/resources/github-cloudsbeyond-visual-agent/
- Original source: https://github.com/cloudsbeyond/visual-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: safety-security, grounding, screen-understanding, automation
- Evidence checked: 2026-11-04T16:30:09Z
- ID: github:cloudsbeyond/visual-agent

- Record JSON: https://awesomecua.com/resources/github-cloudsbeyond-visual-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cloudsbeyond/visual-agent/HEAD/README.md (retrieved 2026-11-04T16:30:09Z; SHA-256 3a1e2ec4a61c1c9e9f01c288926c5d210fe26232dd011e804bf8dc1c55cc1de8)

---

## VLAA-GUI

VLAA-GUI provides a modular GUI automation framework that teaches agents when to stop, recover from errors, and search alternatives.

- Catalog URL: https://awesomecua.com/resources/github-ucsc-vlaa-vlaa-gui/
- Original source: https://github.com/UCSC-VLAA/VLAA-GUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: self-reflection, planning, robustness
- Evidence checked: 2026-11-04T14:02:40Z
- ID: github:ucsc-vlaa/vlaa-gui

- Record JSON: https://awesomecua.com/resources/github-ucsc-vlaa-vlaa-gui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/UCSC-VLAA/VLAA-GUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UCSC-VLAA/VLAA-GUI/HEAD/README.md (retrieved 2026-11-04T14:02:40Z; SHA-256 040d2c23556d27e62e81e4cb89134549f611579ac717808ceaa07cbd8285fca0)
- https://raw.githubusercontent.com/UCSC-VLAA/VLAA-GUI/HEAD/LICENSE (retrieved 2026-11-04T14:07:28Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## vnc-use

vnc-use is a LangGraph-based computer-use framework that drives remote desktop environments over VNC with multi-model LLM planners and hitl gates.

- Catalog URL: https://awesomecua.com/resources/github-mayflower-vnc-use/
- Original source: https://github.com/mayflower/vnc-use
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: automation, sandbox, planning
- Evidence checked: 2026-11-04T13:12:23Z
- ID: github:mayflower/vnc-use

- Record JSON: https://awesomecua.com/resources/github-mayflower-vnc-use/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/mayflower/vnc-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mayflower/vnc-use/HEAD/README.md (retrieved 2026-11-04T13:12:23Z; SHA-256 ef2c8f8c88dd582caed674d4e2c537f76f1326529791b6e341d558118713e377)
- https://raw.githubusercontent.com/mayflower/vnc-use/HEAD/LICENSE (retrieved 2026-11-04T13:41:46Z; SHA-256 6fc6df86d89898623608f16f1d4581d07a69aa4a71bc5b762e804d9164f26a1b)

---

## Voice2Task Post-Training

Post-training and evaluation pipeline for mapping spoken Chinese ASR commands into schema-valid browser agent action plans.

- Catalog URL: https://awesomecua.com/resources/github-raidriar7170-voice2task-posttraining/
- Original source: https://github.com/Raidriar7170/voice2task-posttraining
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, evaluation
- Evidence checked: 2026-11-04T16:30:10Z
- ID: github:raidriar7170/voice2task-posttraining

- Record JSON: https://awesomecua.com/resources/github-raidriar7170-voice2task-posttraining/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Raidriar7170/voice2task-posttraining/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Raidriar7170/voice2task-posttraining/HEAD/README.md (retrieved 2026-11-04T16:30:10Z; SHA-256 485141e1fed9ded8b8d96cc3fb1670068152b23886910f5ec0d75b5c5e1d4f54)
- https://raw.githubusercontent.com/Raidriar7170/voice2task-posttraining/HEAD/LICENSE (retrieved 2026-11-04T16:34:46Z; SHA-256 67b8d84ca137bde725782619a1a5ecf5c96964c4076a4658d61600764cf016f8)

---

## VoltageInputMcp

Two-layer local input engine for MCP where a frontier planning model dispatches high-rate action programs to a local executor.

- Catalog URL: https://awesomecua.com/resources/github-casualkre-voltage-input-mcp/
- Original source: https://github.com/casualkre/voltage-input-mcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos
- Topics: action-prediction, efficiency, tool-integration, automation
- Evidence checked: 2026-11-04T17:30:37Z
- ID: github:casualkre/voltage-input-mcp

- Record JSON: https://awesomecua.com/resources/github-casualkre-voltage-input-mcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/casualkre/voltage-input-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/casualkre/voltage-input-mcp/main/README.md (retrieved 2026-11-04T17:30:37Z; SHA-256 38d24b479b0324047db04c88ea6d37d88017e7669001fdb917bde90c064f8b72)
- https://raw.githubusercontent.com/casualkre/voltage-input-mcp/HEAD/LICENSE (retrieved 2026-11-04T17:39:49Z; SHA-256 fcfd5061e48490af94b70665bb5b76bd5e216148f2fb61944386f9bd3ebacea4)

---

## VSC-RL code

VSC-RL training code for Android in the Wild tasks: Gemini-generated subgoals condition an Auto-UI policy trained online in emulators with learned critics and a Gemini end-state evaluator, built on DigiRL.

- Catalog URL: https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/
- Original source: https://github.com/ai-agents-2030/VSC_RL
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, planning, mobile-navigation
- Evidence checked: 2026-10-19T06:58:12Z
- ID: github:ai-agents-2030/vsc_rl

### Limitations

The README presents the repository as the implementation for reproducing VSC-RL on the AitW benchmarks, built on DigiRL, and names vscrl/algorithms/vscrl/trainer.py and subgoal_generator.py as the core files, with example generated subgoals for the general task set. The project page links this repository and arXiv 2502.07949. subgoal_generator.py prompts Gemini with a downscaled screenshot and a one-shot example to split a task into subtasks. The Android environment (vscrl/environment/android/env.py) drives emulators through Appium and returns screenshots; evaluate.py judges task completion with Gemini 1.5 Pro from the final screenshots. The default config selects the AitW general or web-shopping task set, Auto-UI-Base as the policy and roberta-base as the critic; emulator setup follows DigiRL's instructions. No license file is present.

- Record JSON: https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The repository tree has no license file and the README states no license.
  Sources: https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/README.md (retrieved 2026-10-19T06:58:12Z; SHA-256 36f2f34b8a09839a4b221107d2946cc49c1c4a3a5fc9339182d5ad1779ecc373)
- https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1 (retrieved 2026-10-19T06:58:14Z; SHA-256 4642117bc56e5ede1f0c0a3cf98ec4c61d90332534278f364af0eda4583f934b)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/subgoal_generator.py (retrieved 2026-10-19T06:58:16Z; SHA-256 1024260b7eeb3c8d6b83c3ba171f84f9eb04743640e09ef40cec2ac045839b88)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/evaluate.py (retrieved 2026-10-19T06:58:16Z; SHA-256 3b6c145f5bbc054ba66fb813c6ffd02c027d81f1ffaaa6766742b803fdddeb7d)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/env.py (retrieved 2026-10-19T06:58:18Z; SHA-256 d17c4727f0a0afa95cdae09d490aaf573917345e3c3b39f2b7c136b8dd4d4646)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/scripts/config/main/default.yaml (retrieved 2026-10-19T06:58:18Z; SHA-256 0613f266683adc2c59d7511ee2923d94b68359aabce41945e8469b06cb54c883)
- https://ai-agents-2030.github.io/VSC-RL/ (retrieved 2026-10-19T06:58:18Z; SHA-256 051df85a1ed6c481d84022855ea4bfc28db35e5668d8812e032ee83fc81f8792)

---

## Vuser Protocol

Vuser is an open frontend interaction protocol standardizing browser-use, desktop computer-use, and mobile-use virtual user actions.

- Catalog URL: https://awesomecua.com/resources/github-openvuser-vuser/
- Original source: https://github.com/openvuser/vuser
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: automation, tool-integration, workflow
- Evidence checked: 2026-11-04T15:45:43Z
- ID: github:openvuser/vuser

- Record JSON: https://awesomecua.com/resources/github-openvuser-vuser/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/openvuser/vuser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/openvuser/vuser/HEAD/README.md (retrieved 2026-11-04T15:45:43Z; SHA-256 d58ad61c3a468ea16e237a63b41aaef3019eba19226b0e8761e2f659fddfb1c3)
- https://raw.githubusercontent.com/openvuser/vuser/HEAD/LICENSE (retrieved 2026-11-04T15:57:31Z; SHA-256 5e501e0eaa0b52c20adb75b66fb35e29c86f388674024b9b35fc06cc377bb680)

---

## Weave WebMCP

Browser-native WebMCP idea-to-plan canvas where human users and web agents co-edit structured task plans.

- Catalog URL: https://awesomecua.com/resources/github-doom2quake-weave/
- Original source: https://github.com/doom2quake/weave
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T17:55:08Z
- ID: github:doom2quake/weave

- Record JSON: https://awesomecua.com/resources/github-doom2quake-weave/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/doom2quake/weave/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/doom2quake/weave/main/README.md (retrieved 2026-11-04T17:55:08Z; SHA-256 d7b96fb5441464a4b0aa0a64fa503ae9205ed01fd2d6e40e610827e41180b347)
- https://raw.githubusercontent.com/doom2quake/weave/HEAD/LICENSE (retrieved 2026-11-04T18:00:08Z; SHA-256 f41c7a1d8c671b2366bf67dc55515853eb7b173d5d22a57a6233b05aa487f603)

---

## Web Agent Proxy (WAP) SDK

Browser infrastructure SDK for AI agents with user-consent routing and end-to-end encrypted session relaying.

- Catalog URL: https://awesomecua.com/resources/github-52191314-web-agent-proxy-sdk/
- Original source: https://github.com/52191314/Web-Agent-Proxy-SDK
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T16:51:45Z
- ID: github:52191314/web-agent-proxy-sdk

- Record JSON: https://awesomecua.com/resources/github-52191314-web-agent-proxy-sdk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/52191314/Web-Agent-Proxy-SDK/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/52191314/Web-Agent-Proxy-SDK/HEAD/README.md (retrieved 2026-11-04T16:51:45Z; SHA-256 7d4574e7db6666f43ec3bd96a29f169a845790553c8aaa4f351046ce18e85b58)
- https://raw.githubusercontent.com/52191314/Web-Agent-Proxy-SDK/HEAD/LICENSE (retrieved 2026-11-04T16:56:39Z; SHA-256 ba31ade994dd5adcb2ba1816bc6347e03a6c1ad476c5792f4d66219af0ffe210)

---

## Web Context Interface (WCI)

Web Context Interface (WCI) is a three-layer specification and toolkit augmenting HTML with structured semantic metadata for AI web agents.

- Catalog URL: https://awesomecua.com/resources/github-amirrezaalasti-webcontextinterface/
- Original source: https://github.com/amirrezaalasti/webcontextinterface
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, screen-understanding, tool-integration
- Evidence checked: 2026-11-04T16:10:38Z
- ID: github:amirrezaalasti/webcontextinterface

- Record JSON: https://awesomecua.com/resources/github-amirrezaalasti-webcontextinterface/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/amirrezaalasti/webcontextinterface/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/amirrezaalasti/webcontextinterface/HEAD/README.md (retrieved 2026-11-04T16:10:38Z; SHA-256 c06f2d86c580d0597d505199a7253b7302f3359fdcdde723da73ec1dad194579)
- https://raw.githubusercontent.com/amirrezaalasti/webcontextinterface/HEAD/LICENSE (retrieved 2026-11-04T16:13:50Z; SHA-256 60d670fc61f0bf8055e4e4ee5097f9f86824d7ecc8a56cca5d40238cc95518a0)

---

## web-pilot

Browser-use framework where the model proposes a single action from a closed vocabulary and deterministic code validates and executes it.

- Catalog URL: https://awesomecua.com/resources/github-vinimabreu-web-pilot/
- Original source: https://github.com/vinimabreu/web-pilot
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, safety-security, action-prediction
- Evidence checked: 2026-11-04T16:30:09Z
- ID: github:vinimabreu/web-pilot

- Record JSON: https://awesomecua.com/resources/github-vinimabreu-web-pilot/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vinimabreu/web-pilot/HEAD/README.md (retrieved 2026-11-04T16:30:09Z; SHA-256 02f565df62fd8e20b001fcd98b485eb0e4db690f43659ed945f9968427a11a99)

---

## WebAgent-R1

Environment setup, multi-turn reinforcement-learning and evaluation tooling for browser agents interacting with WebArena.

- Catalog URL: https://awesomecua.com/resources/github-weizhepei-webagent-r1/
- Original source: https://github.com/weizhepei/WebAgent-R1
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, evaluation
- Evidence checked: 2026-10-17T02:05:22Z
- ID: github:weizhepei/webagent-r1

### Limitations

The implementation is inside the WebAgent-R1 subdirectory and includes training, evaluation and WebArena setup components. Root source licensing is Apache-2.0. No downloadable author checkpoint was established by the reviewed README, so this entry represents code.

- Record JSON: https://awesomecua.com/resources/github-weizhepei-webagent-r1/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/weizhepei/WebAgent-R1/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/weizhepei/WebAgent-R1/HEAD/WebAgent-R1/README.md (retrieved 2026-10-17T02:05:22Z; SHA-256 813b7580cdae140917db573522b83a7986448025b31064442d34757292a6935c)
- https://api.github.com/repos/weizhepei/WebAgent-R1 (retrieved 2026-10-17T02:03:19Z; SHA-256 db1f71491c1d9482f403db30ea5599bd76e93d1db02c4ba8134d1a5cae5f0487)
- https://api.github.com/repos/weizhepei/WebAgent-R1/git/trees/main?recursive=1 (retrieved 2026-10-17T02:05:39Z; SHA-256 cc1a74037c4a2c4c094b11f6874ef67f88b24d14293ec09568ac6f378035c0b0)
- https://raw.githubusercontent.com/weizhepei/WebAgent-R1/HEAD/LICENSE (retrieved 2026-10-17T02:05:22Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/weizhepei/WebAgent-R1/HEAD/LICENSE (retrieved 2026-10-17T02:05:22Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## WebAgents Protocol

Open protocol specification and toolkit exposing batch-native website actions to browser agents.

- Catalog URL: https://awesomecua.com/resources/github-betterwright-webagents/
- Original source: https://github.com/BetterWright/WebAgents
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, efficiency, tool-integration
- Evidence checked: 2026-11-04T17:30:24Z
- ID: github:betterwright/webagents

- Record JSON: https://awesomecua.com/resources/github-betterwright-webagents/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/BetterWright/WebAgents/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/BetterWright/WebAgents/main/README.md (retrieved 2026-11-04T17:30:24Z; SHA-256 b84ef4552e951bb08e2b192130801ad1ee006d77efb0fdd95db4adcdbf9a1bdc)
- https://raw.githubusercontent.com/BetterWright/WebAgents/HEAD/LICENSE (retrieved 2026-11-04T17:39:48Z; SHA-256 701ebbed0f2b9e6be79f732e7bfdccf50a7906255f68de297e36e11af1408582)

---

## WebDroid

Playwright-shaped browser automation library for driving live Chromium pages inside Android applications.

- Catalog URL: https://awesomecua.com/resources/github-loyality7-webdroid/
- Original source: https://github.com/loyality7/webdroid
- Kind: framework
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, web-navigation, automation
- Evidence checked: 2026-11-04T17:20:37Z
- ID: github:loyality7/webdroid

- Record JSON: https://awesomecua.com/resources/github-loyality7-webdroid/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/loyality7/webdroid/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/loyality7/webdroid/main/README.md (retrieved 2026-11-04T17:20:37Z; SHA-256 d614e8ddc252bf21b9f27e3a0988d5f663c1b3a158b93401a871094f6ab63f2c)
- https://raw.githubusercontent.com/loyality7/webdroid/HEAD/LICENSE (retrieved 2026-11-04T17:26:48Z; SHA-256 a6cba85bc92e0cff7a450b1d873c0eaa2e9fc96bf472df0247a26bec77bf3ff9)

---

## WebEvolver code component

Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.

- Catalog URL: https://awesomecua.com/resources/component-tencent-selfevolvingagent-webevolver/
- Original source: https://github.com/Tencent/SelfEvolvingAgent/tree/main/WebEvolver
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, world-models, data-generation, self-reflection
- Evidence checked: 2026-10-18T04:27:14Z
- ID: component:tencent/selfevolvingagent/webevolver

### Limitations

This resource covers the WebEvolver directory; the repository also hosts WebCoT and VScan as separate resources. Training and model services require separate setup. Root License.txt explicitly declares MIT for SelfEvolvingAgent and separately identifies CogKernel’s Apache-2.0 dependency terms.

- Record JSON: https://awesomecua.com/resources/component-tencent-selfevolvingagent-webevolver/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/License.txt
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/License.txt

### Primary evidence

- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 447dfa1e52789f7f3f111e9e0d453fb1f9fd8bf2d7b858f28fbe21a2239b4b2e)
- https://api.github.com/repos/Tencent/SelfEvolvingAgent (retrieved 2026-10-17T15:37:01Z; SHA-256 4214af42bcadf1ea52a46c2008f8e741f0aa955a58f346d9880858589be7de1d)
- https://api.github.com/repos/Tencent/SelfEvolvingAgent/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:25Z; SHA-256 ad0f4ae4b58b5a0e84feeb5df717929b97ea37cb945c17c98510ba54509c99e7)
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 873a78a46309fa3892d94b72cf73fd55542bae0e0ba8235afb26a848a64a8255)
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/License.txt (retrieved 2026-10-18T04:35:19Z; SHA-256 1d7a5369af7ec336bc173dba6cfee9ad0898e527f96c5b7a10cee930806c67a3)

---

## WebMCP Deadbolt

Fail-closed capability gating, structured refusal, and adversarial defense middleware for WebMCP browser commerce agents.

- Catalog URL: https://awesomecua.com/resources/github-faxanfm-webmcp-deadbolt/
- Original source: https://github.com/FaxanFM/webmcp-deadbolt
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, tool-integration, web-navigation, evaluation
- Evidence checked: 2026-11-04T17:55:23Z
- ID: github:faxanfm/webmcp-deadbolt

- Record JSON: https://awesomecua.com/resources/github-faxanfm-webmcp-deadbolt/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/FaxanFM/webmcp-deadbolt/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/FaxanFM/webmcp-deadbolt/main/README.md (retrieved 2026-11-04T17:55:23Z; SHA-256 ba420f4621527d99903fd2366b8ef61bb9221d32d0aadfeb87b2f667ae0d3a94)
- https://raw.githubusercontent.com/FaxanFM/webmcp-deadbolt/HEAD/LICENSE (retrieved 2026-11-04T18:00:11Z; SHA-256 30cb7df018a01218a9ca72149cba55055fc3f1dc61f90de46bfd744648ccb04c)

---

## WebMCP Stack

Generates typed, human-reviewed WebMCP browser tools directly from existing OpenAPI and backend contracts.

- Catalog URL: https://awesomecua.com/resources/github-souravinsights-webmcp-stack/
- Original source: https://github.com/SouravInsights/webmcp-stack
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, safety-security, human-in-the-loop, web-navigation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:souravinsights/webmcp-stack

- Record JSON: https://awesomecua.com/resources/github-souravinsights-webmcp-stack/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SouravInsights/webmcp-stack/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SouravInsights/webmcp-stack/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 2fd418a004637fd50c55433af71dcd7b101359b22a6a88ab2adbe0165643797f)
- https://raw.githubusercontent.com/SouravInsights/webmcp-stack/HEAD/LICENSE (retrieved 2026-11-04T18:00:25Z; SHA-256 6c04e6824f30817f31428260168c5175d7e79d34c81982922a4a2adb0311cfce)

---

## WebMCPcss

Extends the WebMCP standard by declaring agent-callable website actions and semantic affordances directly through CSS rules.

- Catalog URL: https://awesomecua.com/resources/github-cochinoraptor-webmcpcss/
- Original source: https://github.com/cochinoraptor/WebMCPcss
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: tool-integration, ui-design, web-navigation
- Evidence checked: 2026-11-04T18:11:27Z
- ID: github:cochinoraptor/webmcpcss

- Record JSON: https://awesomecua.com/resources/github-cochinoraptor-webmcpcss/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/cochinoraptor/WebMCPcss/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/cochinoraptor/WebMCPcss/main/README.md (retrieved 2026-11-04T18:11:27Z; SHA-256 9ce487f698edb52340529de13c61e98ce5c370a5ccba061d5fe8cb29212d7d78)
- https://raw.githubusercontent.com/cochinoraptor/WebMCPcss/HEAD/LICENSE (retrieved 2026-11-04T18:16:16Z; SHA-256 1f843368875052b604817cca1cd6cd2756617f915b52f2fa11f2eddc7979b240)

---

## WebMirage

WebMirage is an adversarial red-teaming framework that crafts visual perturbations to hijack web agents from grounding to browser execution.

- Catalog URL: https://awesomecua.com/resources/github-moontea0416-webmirage/
- Original source: https://github.com/MoonTea0416/WebMirage
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, grounding, web-navigation, evaluation
- Evidence checked: 2026-11-04T14:41:44Z
- ID: github:moontea0416/webmirage

- Record JSON: https://awesomecua.com/resources/github-moontea0416-webmirage/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/MoonTea0416/WebMirage/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MoonTea0416/WebMirage/HEAD/README.md (retrieved 2026-11-04T14:41:44Z; SHA-256 3797b6c10fc7feb6ee06bd82abbbcbd15bd1cf0be4a44dac7d572b8993aad1d1)
- https://raw.githubusercontent.com/MoonTea0416/WebMirage/HEAD/LICENSE (retrieved 2026-11-04T14:45:14Z; SHA-256 6ea8e99e7d1474006af335efab3637ffbb122e58f658919d3f6e6bfff7661920)

---

## WebRL

Training pipeline that evolves web tasks from prior attempts and uses an outcome reward model to refine browser policies.

- Catalog URL: https://awesomecua.com/resources/github-thudm-webrl/
- Original source: https://github.com/THUDM/WebRL
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:06Z
- ID: github:thudm/webrl

### Limitations

Training code and checkpoint links are released. No root code-license declaration was found in the inspected repository metadata; bundled dependency licenses do not establish a license for the whole project. Weights have separate Hub terms.

- Record JSON: https://awesomecua.com/resources/github-thudm-webrl/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/WebRL/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 eb217b96c54c3c2ccfd3a27255c6fd740df40c2d6743ae811858339bf7f740b0)
- https://api.github.com/repos/THUDM/WebRL (retrieved 2026-10-17T02:02:05Z; SHA-256 42496cf0cff06a7f9e794f4313a10a670bc48df9909ec6d57763cb902bb229ea)
- https://api.github.com/repos/THUDM/WebRL/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:05Z; SHA-256 bb1683c6fb5ff658c89f0ebf0f8baf8026bb703840e174c9e46b223c85a16856)

---

## WebVLN research implementation

Training and evaluation code for question-guided website navigation that combines visual observations with web-specific HTML information.

- Catalog URL: https://awesomecua.com/resources/github-webvln-webvln/
- Original source: https://github.com/WebVLN/WebVLN
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, evaluation
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:webvln/webvln

### Limitations

The released tree contains navigation models, an environment wrapper, scoring utilities and train/eval scripts. Full WebVLN-v1 data and pretrained files are linked through an external Drive folder. The README MIT badge has no matching repository license file or explicit component scope; code permissions remain unestablished.

- Record JSON: https://awesomecua.com/resources/github-webvln-webvln/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: README MIT badge is not backed by a project license file or component-scoped statement in the inspected release.
  Sources: https://raw.githubusercontent.com/WebVLN/WebVLN/HEAD/README.md, https://api.github.com/repos/WebVLN/WebVLN/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/WebVLN/WebVLN/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 cb98feab09648856ab30d8eb739a29e837673cc5b4a6642b7ba3a8943ad71053)
- https://api.github.com/repos/WebVLN/WebVLN (retrieved 2026-10-17T12:30:54Z; SHA-256 112e67cc9f865b9640da3827e32eaba5a50f2feb8d85c20018dccbcafa6fd3e5)
- https://api.github.com/repos/WebVLN/WebVLN/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 966adf983bae6052c271f7153c30776a29f7272cf55d05e0175713f02d1900fb)

---

## WellSet WebMCP

Shared 96-well laboratory experiment canvas built on WebMCP where scientists and browser agents co-design protocols.

- Catalog URL: https://awesomecua.com/resources/github-kinhikars-wellset-webmcp/
- Original source: https://github.com/kinhikars/wellset-webmcp
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: science, human-in-the-loop, tool-integration, web-navigation
- Evidence checked: 2026-11-04T18:11:31Z
- ID: github:kinhikars/wellset-webmcp

- Record JSON: https://awesomecua.com/resources/github-kinhikars-wellset-webmcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/kinhikars/wellset-webmcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kinhikars/wellset-webmcp/main/README.md (retrieved 2026-11-04T18:11:31Z; SHA-256 47923510e29fe5c15cba46f28aeed9f56911c225b4ccf5e99b209ff13dcccf7c)
- https://raw.githubusercontent.com/kinhikars/wellset-webmcp/HEAD/LICENSE (retrieved 2026-11-04T18:16:23Z; SHA-256 17d4da169c6d899e9fc6f18e400b98443a3d6069298d513ef6aff6d87a7d5b4d)

---

## WinDOM code

GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.

- Catalog URL: https://awesomecua.com/resources/github-chenghengli-windom/
- Original source: https://github.com/ChenghengLi/WinDOM
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, imitation-learning, reinforcement-learning, evaluation
- Evidence checked: 2026-10-20T11:51:34.292633Z
- ID: github:chenghengli/windom

### Limitations

The Windows-style environment is win11React in Playwright. The repository documents its predecessor trajectory pipeline but explicitly omits the final corpus harvester. The inspected ScreenSpot evaluator defaults to a privileged ground-truth-center demonstration; --no-demo and --official-prompt select other modes, so evaluation results require their prompt and coordinate settings. MIT applies to inspected repository code.

- Record JSON: https://awesomecua.com/resources/github-chenghengli-windom/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected root LICENSE is complete MIT text for repository code. The local data README says same as parent repository, but the linked Hub dataset/model cards and artifacts were not inspected; their licenses are not inferred.
  Sources: https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/README.md (retrieved 2026-10-20T11:51:34.292633Z; SHA-256 7cda5207d8882bc8dedaefb93d2ccf54b310354917283b8f4890fffdc5764958)
- https://api.github.com/search/repositories?q=topic%3Agui-grounding+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:53.470789+00:00; SHA-256 3d76d934e98641746085772b98ee17059749f980a616435498a7ad483bd4cec1)
- https://github.com/ChenghengLi/WinDOM (retrieved 2026-10-20T11:50:58.795155Z; SHA-256 08b89c5e6143afa4c0cdde95f8ec016d9033ee004f7631fadd4457144c2b87c9)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/data/README.md (retrieved 2026-10-20T11:52:41.278660Z; SHA-256 09488140d35408cc11bb9c12b1bb435b21814cf6525937a8309475c9326c4004)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/src/windom/training/sfd_4b.py (retrieved 2026-10-20T11:52:45.091369Z; SHA-256 0ee33b1e416ea4c5d8834688e6f42fbd15ef493f1b82398d3bb985838cbdffb9)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/src/windom/evaluation/screenspot.py (retrieved 2026-10-20T11:52:48.511963Z; SHA-256 c481b2f91f2d82bf801632da6ab6cce01bc42c780104d743156c272942d2cef3)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE (retrieved 2026-10-20T11:51:44.940106Z; SHA-256 d5a37ff86df9b231440ab1bcf3ecf77304a0a53e772182cdb622a3ab5d043447)

---

## WinWright

Playwright-inspired Windows desktop automation and testing framework that drives native apps and reports verified UI state.

- Catalog URL: https://awesomecua.com/resources/github-alegauss-winwright/
- Original source: https://github.com/alegauss/winwright
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: evaluation, screen-understanding, automation, observability
- Evidence checked: 2026-11-04T17:30:29Z
- ID: github:alegauss/winwright

- Record JSON: https://awesomecua.com/resources/github-alegauss-winwright/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/alegauss/winwright/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alegauss/winwright/main/README.md (retrieved 2026-11-04T17:30:29Z; SHA-256 7b916e56e2f27bde27333cbcc84f61ce0a93b1d94a2af954a5d71af879917c36)
- https://raw.githubusercontent.com/alegauss/winwright/HEAD/LICENSE (retrieved 2026-11-04T17:39:46Z; SHA-256 3ee15f5d887ac6ffb5175e4d1262fe6aecd75104f3889617cf294985f9f320e5)

---

## WKAppBot SDK

WKAppBot is an open-source Windows Computer Use and AppBot SDK giving AI agents structured UI perception and action execution.

- Catalog URL: https://awesomecua.com/resources/github-kiexpert-wkappbot-sdk/
- Original source: https://github.com/kiexpert/wkappbot-sdk
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows, web
- Topics: automation, tool-integration, grounding, workflow
- Evidence checked: 2026-11-04T16:10:30Z
- ID: github:kiexpert/wkappbot-sdk

- Record JSON: https://awesomecua.com/resources/github-kiexpert-wkappbot-sdk/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/kiexpert/wkappbot-sdk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kiexpert/wkappbot-sdk/HEAD/README.md (retrieved 2026-11-04T16:10:30Z; SHA-256 1c57f6d7947f04237caa4f6736a04d3e9fbc96aa9626363f849573542f0170fe)
- https://raw.githubusercontent.com/kiexpert/wkappbot-sdk/HEAD/LICENSE (retrieved 2026-11-04T16:13:39Z; SHA-256 bab2c20c42c32fcc3defb266096c07a83c5f85295e8882f02168db0bbb95d4a9)

---

## Workflow Use

Turns a recorded browser session or a Browser Use agent run into a parameterized workflow file that replays deterministically with Playwright, falling back to an LLM agent when a step fails.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-workflow-use/
- Original source: https://github.com/browser-use/workflow-use
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: workflow, recording, automation, web-navigation
- Evidence checked: 2026-10-18T11:13:42Z
- ID: github:browser-use/workflow-use

### Limitations

Scope is adjacent because the main path records and replays deterministic browser workflows (described as RPA 2.0); agent involvement is limited to generating a workflow from one Browser Use run and to fallback or self-healing steps, which the README marks as early and still being improved. The tree contains a Chrome recording extension, a Python workflow package (recorder, builder, healing, MCP, storage), a FastAPI backend and a web UI. The README advises against production use. The LICENSE file is the GNU AGPL v3 text with the Free Software Foundation copyright line replaced by a Browser Use Inc. notice. GitHub reports AGPL-3.0, but the catalog's verbatim-header rule leaves the code license unrecorded.

- Record JSON: https://awesomecua.com/resources/github-browser-use-workflow-use/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/README.md (retrieved 2026-10-18T11:13:42Z; SHA-256 d87cca0c2041e2d10c4643dc04d21fc142dddd6c3bea7b208e57fed4474363d2)
- https://api.github.com/repos/browser-use/workflow-use (retrieved 2026-10-18T11:13:56Z; SHA-256 dbc5758062bbadb6b2583e63c95d43bd4c544c8898bf1019d960b1435a5e0057)
- https://api.github.com/repos/browser-use/workflow-use/git/trees/main?recursive=1 (retrieved 2026-10-18T11:13:56Z; SHA-256 11a372bee17b5888e7a8378c373fc2bc42aa50dd968317b2643c8a0cbc550641)
- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/LICENSE (retrieved 2026-10-18T11:13:58Z; SHA-256 d0244248ae3e9cc081ff0d0010aaae97fc89d2a4bce58fd93a137ab26c268989)

---

## Workflow-Guided Exploration research code

Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.

- Catalog URL: https://awesomecua.com/resources/github-stanfordnlp-wge/
- Original source: https://github.com/stanfordnlp/wge
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, workflow, history
- Evidence checked: 2026-10-17T11:18:16Z
- ID: github:stanfordnlp/wge

### Limitations

The released repository includes training policies, experiment configuration and a MiniWoB sandbox extended for the 2018 paper. This is the WGE implementation, a separate project from the Farama MiniWoB++ benchmark and original OpenAI MiniWoB release. Its documented dependency is PyTorch 0.1.12. Stanford code declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/github-stanfordnlp-wge/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Stanford WGE source license; not a blanket license for all third-party tasks, embeddings or demonstration resources.
  Sources: https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/README.md (retrieved 2026-10-17T11:18:16Z; SHA-256 50ee5234bf62320d096fbe4c11c7be21f50c9e09dae97754a16a5bbde2f1ab19)
- https://api.github.com/repos/stanfordnlp/wge (retrieved 2026-10-17T11:18:15Z; SHA-256 66fcd6577d1867abf84e62fe9edf2e3f223292724cbe6b9d0ef02b582db5c8b2)
- https://api.github.com/repos/stanfordnlp/wge/git/trees/master?recursive=1 (retrieved 2026-10-17T11:19:50Z; SHA-256 926aff11e14c529d05d9bc51fe12aadb007818119da55f99c2fa47d0387f466d)
- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/third-party/miniwob-sandbox/README.md (retrieved 2026-10-17T11:20:17Z; SHA-256 249b23ff62e21bd446b3e411b1d7ea7f173c7e19e42ed75e97800ed32201bb3a)
- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE (retrieved 2026-10-17T11:23:05Z; SHA-256 3df3dd1e3149cd6cc1a7b052a237a6653449a7c5f18edf19a3a79294c7d541c1)

---

## WorkForceAgent-R1

Web-task reward functions, WorkArena data processing and GRPO training configurations for reasoning-oriented language agents.

- Catalog URL: https://awesomecua.com/resources/github-night-chen-workforceagent-r1/
- Original source: https://github.com/night-chen/WorkForceAgent-R1
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, planning
- Evidence checked: 2026-10-17T02:03:20Z
- ID: github:night-chen/workforceagent-r1

### Limitations

The release contains WorkArena preprocessing and training source. An explicit project license is unrecorded in the inspected root. The README discusses trained 7B/14B models; this entry is cataloged as a framework.

- Record JSON: https://awesomecua.com/resources/github-night-chen-workforceagent-r1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/night-chen/WorkForceAgent-R1/HEAD/README.md (retrieved 2026-10-17T02:03:20Z; SHA-256 2fb7c0d70ccfa93605d5250a8f6d5182324f0c53d70e1c35ba18cb00f4ada548)
- https://api.github.com/repos/night-chen/WorkForceAgent-R1 (retrieved 2026-10-17T02:03:19Z; SHA-256 0ad3ef1d900200e3ecab86cd44f79038000e8748fb285cdd5f32882455d2e36e)
- https://api.github.com/repos/night-chen/WorkForceAgent-R1/git/trees/main?recursive=1 (retrieved 2026-10-17T02:05:39Z; SHA-256 521d065188a6354416c1aafe88a0eb34486f2c2ec011c1cdf8ed008760dd9c55)

---

## Worldline

Modular, user-controlled AI browser kernel for structured web parsing, navigation, and workflow automation.

- Catalog URL: https://awesomecua.com/resources/github-artemyx-datascientist-worldline/
- Original source: https://github.com/Artemyx-DataScientist/Worldline
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, automation
- Evidence checked: 2026-11-04T17:55:11Z
- ID: github:artemyx-datascientist/worldline

- Record JSON: https://awesomecua.com/resources/github-artemyx-datascientist-worldline/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Artemyx-DataScientist/Worldline/master/README.md (retrieved 2026-11-04T17:55:11Z; SHA-256 8f20b05faebb70faabd90f42537b6a10b6ff36d6c5e877fd8c27dfdae0be1672)

---

## Xihe Agent (羲和)

Single-process tool-calling agent runtime operating across CLI, enterprise chat gateways, desktop GUI, and real browsers.

- Catalog URL: https://awesomecua.com/resources/github-jiugao-yi-xihe-agent/
- Original source: https://github.com/jiugao-yi/xihe-agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: tool-integration, web-navigation, workflow, automation
- Evidence checked: 2026-11-04T17:55:02Z
- ID: github:jiugao-yi/xihe-agent

- Record JSON: https://awesomecua.com/resources/github-jiugao-yi-xihe-agent/record.json

### License declarations

- code: MPL-2.0 — https://raw.githubusercontent.com/jiugao-yi/xihe-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jiugao-yi/xihe-agent/main/README.md (retrieved 2026-11-04T17:55:02Z; SHA-256 335e54ec8da818bc7f46b479f415693a61be997dca5726bd6e03e171f8077e81)
- https://raw.githubusercontent.com/jiugao-yi/xihe-agent/HEAD/LICENSE (retrieved 2026-11-04T18:00:14Z; SHA-256 fab3dd6bdab226f1c08630b1dd917e11fcb4ec5e1e020e2c16f83a0a13863e85)

---

## Zhaozuo (照做)

Demonstration-driven Windows desktop automation framework compatible with the ActionParity protocol for third-party GUI software.

- Catalog URL: https://awesomecua.com/resources/github-dongsheng123132-zhaozuo/
- Original source: https://github.com/dongsheng123132/zhaozuo
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: imitation-learning, recording, automation, self-reflection
- Evidence checked: 2026-11-04T16:51:53Z
- ID: github:dongsheng123132/zhaozuo

- Record JSON: https://awesomecua.com/resources/github-dongsheng123132-zhaozuo/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/dongsheng123132/zhaozuo/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/dongsheng123132/zhaozuo/HEAD/README.md (retrieved 2026-11-04T16:51:53Z; SHA-256 3cfbf1a2fcdd0f6c5d8595075d033173aa8ee6e8ef99349dd51927fc98a8551a)
- https://raw.githubusercontent.com/dongsheng123132/zhaozuo/HEAD/LICENSE (retrieved 2026-11-04T16:56:45Z; SHA-256 cfa5a1881eeeedf67d64dcc3e9ac119d62d874d56dc66275f7b8f393d9af4cae)

---

## ZoomClick

ZoomClick implements iterative zoom-in GUI grounding and behavior-based grounding evaluation across high-resolution interfaces.

- Catalog URL: https://awesomecua.com/resources/github-princeton-ai2-lab-zoomclick/
- Original source: https://github.com/Princeton-AI2-Lab/ZoomClick
- Kind: framework
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web, android
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-04T14:02:36Z
- ID: github:princeton-ai2-lab/zoomclick

- Record JSON: https://awesomecua.com/resources/github-princeton-ai2-lab-zoomclick/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Princeton-AI2-Lab/ZoomClick/HEAD/README.md (retrieved 2026-11-04T14:02:36Z; SHA-256 58d523fbffc0188bbd5b4d0c7a42b0c0cad66d29cebfcbe12631eed0e091d0c1)
