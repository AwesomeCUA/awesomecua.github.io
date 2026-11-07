# Computer-use agent frameworks

> 87 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-07T00:38:22Z.

HTML page: https://awesomecua.com/categories/framework/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Reviews are AI-assisted inspections of primary sources. Code, data, weights and document licenses are recorded separately.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

Public tree contains the agentprog package, CLI, program/context-management code and AndroidWorld evaluation integration. README announces AW-Extend, but this record is the framework rather than a separately audited benchmark release. External model services and Android device/emulator setup are required. Apache-2.0 covers code, not external model weights, apps or VM images.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

Released code includes task-generation and training-format conversion scripts. OSWorld/InSTA environments and model services require separate setup; the repository is not a bundled VM or model checkpoint. Code and the separately published dataset have distinct license declarations.

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

The source tree releases inference backends and evaluation scripts under evaluation/. The separately hosted benchmark is gated=auto and its raw card returned 401; no access request was made and it is not approved here as a directly accessible dataset. The README explicitly credits missing screenshots as AUTO_PASS/correct, so incomplete local image inventories can inflate scores. Its TCR is an offline anchor/dependency score and is not presented here as independently verified live task success.

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

Official GitHub API resolves the former dvlab-research/ARPO URL to JIA-Lab-research/ARPO with the same numeric repository ID. Training/evaluation scripts are released; OSWorld environments and the separate model checkpoint are not bundled into this code record.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The README says the complete CHOP-ZH dataset remains unreleased. Android and HarmonyOS compatibility is publisher-documented and has not been runtime-tested here.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The tree contains run_coat.py and coat/agent.py, model.py and evaluate.py, with API-backed model configuration. This verifies a released annotation/prediction implementation, not a live phone controller or a released checkpoint. AiTZ screens/annotations are linked through external Drive/Baidu bundles whose complete download inventory was not verified here. The README has an Apache-2.0 badge, but no license file or explicit component grant is present; code/data/weight rights remain unestablished.

- Record JSON: https://awesomecua.com/resources/github-imnearth-coat/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Apache-2.0 badge alone does not establish component-scoped source terms; the inspected non-truncated tree has no license file.
  Sources: https://raw.githubusercontent.com/IMNearth/CoAT/HEAD/README.md, https://api.github.com/repos/IMNearth/CoAT/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/IMNearth/CoAT/HEAD/README.md (retrieved 2026-10-17T12:30:53Z; SHA-256 7a9fb905b64f2760a137cd267a5e38dd343df1821eda8172b606ab7500d27731)
- https://api.github.com/repos/IMNearth/CoAT (retrieved 2026-10-17T12:30:53Z; SHA-256 d0c5056c9a74913f84a4f809bf01d9fd9ea325ac0a91b4c4a0a51220b2da9d68)
- https://api.github.com/repos/IMNearth/CoAT/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:04Z; SHA-256 29d84ed12dc25035fd539604b06f6cc113080b389edeb9aa605cfa55c5f28151)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

README describes AITW test sampling and preprocessing reused from Auto-GUI, followed by prediction/action-extraction/evaluation scripts. This is not claimed as a ready-to-run interactive phone controller. No project-level license declaration appears in the inspected README/API/non-truncated tree; code, dataset and model rights remain unestablished here.

- Record JSON: https://awesomecua.com/resources/github-sqzhang-lazy-d-pot/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No project-wide code license is established by the inspected README/API/tree; third-party code presence does not establish a license for this package.
  Sources: https://raw.githubusercontent.com/sqzhang-lazy/D-PoT/HEAD/README.md

### Primary evidence

- https://raw.githubusercontent.com/sqzhang-lazy/D-PoT/HEAD/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 c9c21102db512270079666531dbab71c1ab2ec2073add16be56f8ab3c6fe8abf)
- https://api.github.com/repos/sqzhang-lazy/D-PoT (retrieved 2026-10-17T15:37:02Z; SHA-256 d62cfecbfccd120e53a7fc60e8d4b90b157e998cc5ddac467514c30c0cae1363)
- https://api.github.com/repos/sqzhang-lazy/D-PoT/git/trees/main?recursive=1 (retrieved 2026-10-18T04:25:24Z; SHA-256 f75444a0252df5d6ec1ab70d805584cb490cdc38efa995aae55ffbde43ab5fb1)
- https://export.arxiv.org/api/query?id_list=2410.00467%2C2410.00689%2C2410.02810%2C2410.02907%2C2410.05243%2C2410.06703%2C2410.08164%2C2410.09006%2C2410.09024%2C2410.11843%2C2410.11871%2C2410.11872%2C2410.13232%2C2410.13757%2C2410.13824%2C2410.13825%2C2410.13886%2C2410.14803%2C2410.15164%2C2410.16464%2C2410.17236%2C2410.17401%2C2410.17520%2C2410.17883%2C2410.18603%2C2410.18963%2C2410.18967%2C2410.19054%2C2410.19100%2C2410.19461%2C2410.19609%2C2410.20745%2C2410.22552%2C2410.23218%2C2410.24024%2C2411.00820%2C2411.02337%2C2411.02391%2C2411.04468%2C2411.04890%2C2411.06559%2C2411.07618%2C2411.10323%2C2411.13451%2C2411.13591%2C2411.15004%2C2411.17465%2C2411.18279%2C2412.00402%2C2412.01268&max_results=50 (retrieved 2026-10-16T06:31:35Z; SHA-256 b3e67984f59a1b05ccd946eb54e2d37b0bb78ab0ca796fbb6d544793dafea3e0)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-digirl-agent-digiq/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/DigiRL-agent/digiq/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 33c55f7d1df7f812c9c9b9c4d97a4de7408b1b1916e58eed266b1f88389b50cd)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The inspected source tree contains the random walker, desktop environment integration and run_rewalk.sh. The documented runnable setup uses OSWorld and OmniParser. The README also discusses mobile data and a GUI-ReWalk-7B model, but no separately published corpus or model checkpoint was verified; those are not counted as released assets. Apache-2.0 is scoped to the implementation.

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

The repository releases preprocessing/refinement/evaluation code and multipart ShareGPT-format JSON annotations. Evaluation matches recorded single-step action predictions on AndroidControl and AITZ; it does not run live device tasks. The README links a UIBERT training-JSON path that is not a standalone file in this revision; annotations are packaged in data/GUI.z01, data/GUI.z02 and data/GUI.zip. Original UIBERT/OS-Atlas, AITZ and AndroidControl images must be obtained separately. This entry does not claim a released trained checkpoint or transfer the GPL-3.0 code license to third-party datasets and images.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-hyperbrowserai-hyperagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/hyperbrowserai/HyperAgent/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 9fe74ee087156efde4531a058ccd3abad504032e0bd994979992ed4164c8704b)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The original implementation is in the MAI-UI/ subdirectory, with an Apache-2.0 LICENSE there. The current root README also promotes Qwen-UI-Agent, but that follow-up directory contains only documentation/display assets in the inspected tree. This entry does not claim the follow-up runtime, training system or weights are released.

- Record JSON: https://awesomecua.com/resources/github-tongyi-mai-mai-ui/record.json

### License declarations

- code: Apache-2.0 (MAI-UI subdirectory) — https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The implementation and LICENSE live under MAI-UI/. A root-level missing license or the follow-up Qwen-UI-Agent documentation should not change the scoped declaration.
  Sources: https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE, https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/README.md

### Primary evidence

- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/README.md (retrieved 2026-10-17T05:29:14Z; SHA-256 f644a5c0d0eb29b0ff8d8552dd505c5ecedf7c9cd9ab8cf2c617a1a14ecd0c14)
- https://api.github.com/repos/Tongyi-MAI/MAI-UI (retrieved 2026-10-17T04:11:45Z; SHA-256 fd90bc766d7e73889d14e8d3c5c92d384fa86e163222808f6e492509f00a3656)
- https://api.github.com/repos/Tongyi-MAI/MAI-UI/git/trees/main?recursive=1 (retrieved 2026-10-17T04:11:46Z; SHA-256 4340b3d36bc56963fb8173079da8a0f7e91f195994d29fc47a9f7087cb56ffba)
- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/HEAD/MAI-UI/LICENSE (retrieved 2026-10-17T05:29:15Z; SHA-256 bf989559906a7926b77390082e4267ff7b2b494e8f599a9dc5640319eb45c2ce)

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

The inspected release documentation describes dataset utilities, a LoRA SFT template and gold-step offline evaluation; live Android rollouts are explicitly outside that evaluator and linked to separate benchmark repositories. Executable source files, external datasets/checkpoints and reported results were not independently verified in this bounded review.

- Record JSON: https://awesomecua.com/resources/github-kwai-memgui-agent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README declares Apache-2.0, but the inspected LICENSE is a short notice and link rather than the complete terms; the code license remains unconfirmed.
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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The root README describes MobileGym exploration/feedback and HiFPO optimization. The training README limits its public training path to the Qwen3-VL-8B experiment. Linked model and dataset collections, executable source completeness and benchmark results were not independently verified; the repository code license is not a model or dataset license.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-nottelabs-notte/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/nottelabs/notte/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 5ecb73264cce10b75ec04dea59aaff77ffde552259fba6932507779a35681c5b)

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

BrowserART tools return accessibility trees, including the screenshot-named refresh. Qualification is scenario-specific: the project documents browser-judge and desktop-scoring limits; its opt-in exact-send oracle covers one derived local task, not SMTP delivery. Runtime profiles and scoring policies are separate. Apache-2.0 is the top-level Orbit code declaration; third-party components and external data/environments retain separate terms. No installation, release archive or live evaluation was tested.

- Record JSON: https://awesomecua.com/resources/github-wlanderson0-orbit/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Record only the publisher's top-level Apache-2.0 declaration for Orbit-original code. NOTICE explicitly preserves per-component terms; neither bundled or external data nor model weights inherit this declaration. Its account of BrowserART licensing is not an independent resolution of upstream conflicting declarations.
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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

Source code and browser-environment modules are present. The repository LICENSE is CC-BY-NC-4.0, while its README describes that license as applying to a dataset, leaving code scope ambiguous. The separately linked dataset is gated and was not accessed; model and dataset terms must be checked separately.

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

The release includes environment code, adversarial scenario configuration and RTC-Bench task-generation assets. The project declares Apache-2.0, while incorporated environments retain their licenses. It distinguishes full task runs from tests initialized at injection locations; those settings must not be treated as interchangeable results.

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

A distinct project from OpenGVLab/ScaleCUA, which documents arXiv:2509.15221. Similar names do not establish a shared project identity.

- Record JSON: https://awesomecua.com/resources/github-thudm-scale-cua/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/SCALE-CUA/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)

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

The publisher states that the suite compares the underlying multimodal models rather than full agent implementations. Public source includes benchmark adapters and registry code. Multi-step environments require Docker and KVM; constituent datasets, remote model services and OSWorld account-dependent tasks retain their own setup and terms. Apache-2.0 is scoped to this repository code.

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

## Skyvern

Browser workflow automation that relies on vision LLMs and a swarm of agents instead of fixed XPath selectors, offered as a Playwright-compatible SDK and a no-code workflow builder.

- Catalog URL: https://awesomecua.com/resources/github-skyvern-ai-skyvern/
- Original source: https://github.com/Skyvern-AI/skyvern
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: workflow
- Evidence checked: 2026-10-16T06:36:03Z
- ID: github:skyvern-ai/skyvern

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-skyvern-ai-skyvern/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Skyvern-AI/skyvern/HEAD/README.md (retrieved 2026-10-16T06:36:03Z; SHA-256 68fda945255825907aeada13d19de19209708c14504ac975e63a235f0cd9343b)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

Training, memory-building and evaluation scripts for MiniWoB++ and Mind2Web are present. External benchmark data, model/API credentials and legacy dependencies are still required. License remains unknown: the README shows MIT, while LICENSE is an NTUITIVE non-commercial agreement that both permits some distribution and separately says distribution is prohibited. No interpretation resolves those contradictions, and no commercial or non-commercial permission is asserted. This admission confirms the released GUI implementation, not a licensing grant.

- Record JSON: https://awesomecua.com/resources/github-ltzheng-synapse/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Unresolved conflict between README MIT badge and NTUITIVE non-commercial LICENSE, including inconsistent redistribution clauses. Keep permissions unknown rather than choose an interpretation.
  Sources: https://raw.githubusercontent.com/ltzheng/synapse/HEAD/README.md, https://raw.githubusercontent.com/ltzheng/Synapse/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ltzheng/synapse/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 ed5416d91665017fca4b354016b7c2c748acf32d7723483fecb5387a22a1fdff)
- https://api.github.com/repos/ltzheng/synapse (retrieved 2026-10-17T12:30:54Z; SHA-256 79a238a6f486d2a8970baba199f0968d28f14d42922c86ce71753eb687e0e9c6)
- https://api.github.com/repos/ltzheng/Synapse/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 785a7163dac9f41b1d0ca97f8dd9311b6df6a09f3a5163438dd64db226a4ceaf)
- https://export.arxiv.org/api/query?id_list=1802.08802%2C1808.09132%2C2005.03776%2C2101.09465%2C2103.16057%2C2104.08560%2C2105.13231%2C2107.03374%2C2107.13731%2C2108.03353%2C2202.02312%2C2202.08137%2C2204.01691%2C2205.11029%2C2207.01206%2C2209.08199%2C2209.08655%2C2209.14927%2C2209.15099%2C2210.02663%2C2210.03629%2C2210.03945%2C2211.07615%2C2301.10165%2C2301.13280%2C2302.04761%2C2303.07280%2C2303.08774%2C2303.17491%2C2303.17580%2C2304.04370%2C2304.07061%2C2305.04091%2C2305.05662%2C2305.08144%2C2305.10601%2C2305.11854%2C2305.12487%2C2305.14257%2C2305.14325%2C2305.16504%2C2305.16653%2C2305.19308%2C2306.00245%2C2306.06070%2C2306.07863%2C2307.10088%2C2307.12856%2C2307.13854%2C2308.01990&max_results=50 (retrieved 2026-10-16T06:31:20Z; SHA-256 cbe8bfcbce4170a94a6cf42de01fbe0a448e7b1d29fa75a0de877105a98ec08e)
- https://raw.githubusercontent.com/ltzheng/Synapse/HEAD/LICENSE (retrieved 2026-10-17T12:34:09Z; SHA-256 cc4bce2274289d2b924fcc3c185c68b8e7c539365c5f8c72be865883244088ec)

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

The public tree includes training configs, preprocessing, inference and serving examples. The project still marks release of all experiment/evaluation scripts as work in progress. This entry covers the implementation rather than counting its 3B/7B/32B model-size variants as separate new projects. The inspected project tree has no root source license; linked frameworks, data and checkpoints retain their own terms.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

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

The tree contains ms-swift-based training and AndroidControl evaluation scripts. The README says AndroidLab/Android Arena scripts and the 72B checkpoint are still forthcoming; these are not claimed released. It declares MIT but links a root LICENSE absent from the inspected tree, so the exact code-license scope remains unresolved. Separate Hub weights and data have their own declarations.

- Record JSON: https://awesomecua.com/resources/github-euphoria16-ui-genie/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README declares MIT and links a root LICENSE, but the complete retained tree has no root LICENSE; bundled ms-swift has its own license. Preserve this unresolved scope instead of treating a component license as the whole project license.
  Sources: https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md, https://api.github.com/repos/Euphoria16/UI-Genie/git/trees/main?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://api.github.com/repos/Euphoria16/UI-Genie (retrieved 2026-10-17T03:59:54Z; SHA-256 a53e4cd3b4391c03c9334745152f8c1f66aff7590051f9bdb7e78b81c6c99a24)
- https://api.github.com/repos/Euphoria16/UI-Genie/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:55Z; SHA-256 c27c6d88d043c964776c04a74517d48644418dca2f5ae9c8ba778d082c12a6ae)

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

The public tree includes critic-training configurations, policy training and offline/online evaluation scripts. The README obtains base models and AITW imagery separately, then instructs users to train critic and policy checkpoints locally; this entry does not claim that VEM-trained weights are released. MIT applies to repository code only.

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

The released scripts evaluate recorded task inputs; the retained README does not establish a live Android execution environment.

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

The verification method requires developers to supply app-state predicates and transition hooks. The paper-to-repository relation is supported by the exact-version paper, not inferred from the repository name.

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

The paper links this author repository. Onshape is a browser-based CAD environment; supported operating systems are not inferred. The full dataset and a checkpoint are linked separately, and their payloads were not downloaded for this review. MIT is recorded only for this repository code; external data and weight licenses remain unknown.

- Record JSON: https://awesomecua.com/resources/github-ghadinehme-videocad/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: MIT declaration in the author repository LICENSE; separate data, weights and document scopes are not inferred.
  Sources: https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md (retrieved 2026-10-18T12:02:53.536297+00:00; SHA-256 cbb08803922b4b7736979ca0a5fe552b111fcd428fa9317401bc090b14bb4e54)
- https://api.github.com/repos/ghadinehme/VideoCAD (retrieved 2026-10-18T12:02:30.768857+00:00; SHA-256 ff80afd35c79d8dd27dd7b9284ce082fe238c13a113aa19400ca0dc2d18ff194)
- https://api.github.com/repos/ghadinehme/VideoCAD/git/trees/2d69eeaf0ac44210c76dcab2d08b4d4610be236c?recursive=1 (retrieved 2026-10-18T12:02:52.564274+00:00; SHA-256 9ded7c6ef25b88879e9d46939ca7ff3bef97362e76dbdb808e57c67008541557)
- https://arxiv.org/html/2505.24838v2 (retrieved 2026-10-18T12:02:34.311949+00:00; SHA-256 a303d95a811331cd6ee23b0340f1b9ef2dd996835bfbc66656a871ff94eead50)
- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/LICENSE (retrieved 2026-10-18T12:03:24.765415+00:00; SHA-256 8e02753a1016dc67c97b395934313027b5f91b74209c7a24438de70fdc19cad1)

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-webdreamer/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/WebDreamer/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 6602cb260b52ae5b2b93db231a51a38d0463c78d8e71321620e05b4fa31caacb)

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

Scoped to the WebEvolver directory; the repository also hosts WebCoT and VScan, which are not merged into this resource. Training and model services require separate setup. Root License.txt explicitly declares MIT for SelfEvolvingAgent and separately identifies CogKernel’s Apache-2.0 dependency terms.

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

The manifest contains modeling/training code, BrowserGym examples, documentation and a results viewer. The README distinguishes currently available components from planned additional benchmarks and deployment integrations. It requests citation of WebLINX as the foundation for data, training and evaluation; this is not a claim that the WebLINX paper first introduced every later WebLlama component. MIT applies to repository code, subject to file-header exceptions; weights and datasets have their own terms.

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

The released tree contains navigation models, an environment wrapper, scoring utilities and train/eval scripts. Full WebVLN-v1 data and pretrained files are linked through an external Drive folder; their complete contents and data/weight terms were not verified, so no separate benchmark download or checkpoint is approved here. The README MIT badge has no matching repository license file or explicit component scope; code permissions remain unestablished.

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

The Windows-style environment is win11React in Playwright, not native Windows control. The repository documents its predecessor trajectory pipeline but explicitly omits the final corpus harvester. The inspected ScreenSpot evaluator defaults to a privileged ground-truth-center demonstration; --no-demo and --official-prompt select other modes, so evaluation results require their prompt and coordinate settings. Linked datasets, weights and reported scores were not independently verified; MIT applies to inspected repository code.

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

The released repository includes training policies, experiment configuration and a MiniWoB sandbox extended for the 2018 paper. This is the WGE implementation, not another copy of the already cataloged Farama MiniWoB++ benchmark and not the original OpenAI MiniWoB release. Its documented dependency is PyTorch 0.1.12, and current runtime compatibility was not tested. Stanford code declares Apache-2.0; bundled third-party browser tasks and externally downloaded demonstration/embedding data retain their own terms.

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

The release contains WorkArena preprocessing and training source. The inspected root has no explicit project license; dependencies retain their own terms. Although the README discusses trained 7B/14B models, it does not provide a verified checkpoint release, so this is cataloged only as a framework.

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

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-opengvlab-zerogui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 033d2de815e11c208862c5c5601b78d58668b79cadd37a750cad9edd4dacabed)
- https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/LICENSE (retrieved 2026-10-16T06:42:05Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
