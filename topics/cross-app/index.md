# Cross-app

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/cross-app/records.jsonl

## Papers & surveys

- [AgentHorizon: Evaluating Agentic Judges for Long-Horizon Computer-Use Tasks](https://awesomecua.github.io/resources/arxiv-2610-11050/) — 2026-10-08
  Introduces AgentHorizon, a benchmark for judging long computer-use trajectories using closely related instructions paired with recorded actions and screenshots. It tests whether judges can detect constraint violations and distinguish successful tasks from similar but incompatible requests.
- [EngiWorld: What Can Frontier Agents Deliver in Professional Engineering Environments?](https://awesomecua.github.io/resources/arxiv-2609-37686/) — 2026-09-29
  Introduces professional engineering tasks across software domains, with GUI and CLI access and artifact checks for geometric, physical, and design validity.
- [MatToolBench: Benchmarking Multimodal Agents in Real-World Materials Science Workflows](https://awesomecua.github.io/resources/arxiv-2609-37053/) — 2026-09-29
  Introduces MatToolBench, a Windows-based materials-science benchmark combining GUI operation, scientific-software scripting, and database queries. Expert-defined subcriteria support partial-credit scoring, while the evaluation examines domain knowledge gaps and cross-tool handoff failures.
- [Capable but Careless: Do Computer-Use Agents Follow Contextual Integrity?](https://awesomecua.github.io/resources/arxiv-2606-23189/) — 2026-06-22
  AgentCIBench evaluates whether computer-use agents disclose information in ways that violate its original context. Deterministically scored scenarios test nearby sensitive UI content, ambiguous requests and recipient mismatches, including end-to-end agent execution.
- [MacAgentBench: Benchmarking AI Agents on Real-World macOS Desktop](https://awesomecua.github.io/resources/arxiv-2606-22557/) — 2026-06-21
  Introduces macOS tasks spanning GUI and command-line interaction, with deterministic checks and intermediate-progress scoring for application workflows.
- [Beyond the GUI Paradigm: Do Mobile Agents Need the Phone Screen?](https://awesomecua.github.io/resources/arxiv-2606-19388/) — 2026-06-16
  This study compares general coding agents using mobile command-line access with reproducible GUI agents on AndroidWorld and MobileWorld. It also supplies oracle CLI analyses and a separate task suite for operations such as bulk changes, filtering and hidden device state.
- [MyPCBench: A Benchmark for Personally Intelligent Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-16748/) — 2026-06-15
  MyPCBench tests personal-assistant tasks on a Linux desktop with simulated web applications and data for a single fictional persona. A shared computer-and-shell interface enables evaluation of cross-application workflows that depend on personal context and account-like state.
- [iOSWorld: A Benchmark for Personally Intelligent Phone Agents](https://awesomecua.github.io/resources/arxiv-2606-09764/) — 2026-06-08
  Introduces a native iOS simulator benchmark with persistent user data, multi-app tasks, and personalization-dependent phone workflows.
- [UI-Mem: Self-Evolving Experience Memory for Online Reinforcement Learning in Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-05832/) — 2026-02-05
  UI-Mem stores workflows, skills and failure patterns as reusable templates to guide online GUI reinforcement learning. It varies guidance within rollout groups and continually updates the memory so an unguided policy can learn from guided experiences.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.github.io/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [Mind the Gap: Action Rebinding Attacks against Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-12349/) — 2026-01-18
  Studies action-rebinding attacks in which an Android GUI agent’s planned input is redirected to a different application during the observation–action delay. The evaluation examines cross-application execution and the consequences of treating an earlier screen as the current action target.
- [ProSoftArena: Benchmarking Hierarchical Capabilities of Multimodal Agents in Professional Software Environments](https://awesomecua.github.io/resources/arxiv-2601-02399/) — 2025-12-30
  ProSoftArena evaluates 436 professional-software tasks across six disciplines and 13 applications in a Windows 11 virtual-machine environment. Its capability hierarchy, execution-based checks, and human-in-the-loop evaluation cover precise GUI operations and multi-software workflows.
- [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.github.io/resources/arxiv-2509-15738/) — 2025-09-19
  GUI-ReWalk begins with stochastic interface exploration and then infers goals to generate coherent action trajectories. It supports long-horizon workflows across applications and studies training on the resulting data using grounding and navigation benchmarks.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.github.io/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [Creating General User Models from Computer Use](https://awesomecua.github.io/resources/arxiv-2505-10831/) — 2025-05-16
  Proposes general user models that turn computer-use observations into confidence-weighted propositions and revise them as new context arrives. Demonstrations use this memory to contextualize assistants, manage notifications, and support proactive actions across apps.
- [OSUniverse: Benchmark for Multimodal GUI-navigation AI Agents](https://awesomecua.github.io/resources/arxiv-2505-03570/) — 2025-05-06
  Introduces OSUniverse, a desktop GUI benchmark spanning precise clicks through multistep and multiapplication tasks. It provides both manual scoring and an automated validation mechanism.
- [UFO2: The Desktop AgentOS](https://awesomecua.github.io/resources/arxiv-2504-14603/) — 2025-04-20
  Introduces UFO2, a Windows desktop agent architecture combining a coordinating HostAgent, application-specialized agents, and a shared GUI/API action layer. It integrates UI Automation, visual parsing, speculative planning, and an isolated picture-in-picture desktop.
- [ReuseDroid: A VLM-empowered Android UI Test Migrator Boosted by Active Feedback](https://awesomecua.github.io/resources/arxiv-2504-02357/) — 2025-04-03
  ReuseDroid migrates Android GUI tests between functionally similar apps using VLM agents that separate shared test intent from app-specific interaction flows. It introduces LinPro, a dataset of 578 migration tasks across 39 apps, to evaluate test transfer.
- [PC-Agent: A Hierarchical Multi-Agent Collaboration Framework for Complex Task Automation on PC](https://awesomecua.github.io/resources/arxiv-2502-14282/) — 2025-02-20
  Uses active perception and hierarchical agents for instruction decomposition, progress tracking, action selection, and reflection in PC workflows.
- [Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-08264/) — 2024-09-12
  Adapts real-desktop evaluation to Windows applications and supports parallel execution of benchmark tasks.
- [OfficeBench: Benchmarking Language Agents across Multiple Applications for Office Automation](https://awesomecua.github.io/resources/arxiv-2407-19056/) — 2024-07-26
  Evaluates language agents on office workflows requiring information integration, long-term planning, and switching between applications.
- [AppWorld: A Controllable World of Apps and People for Benchmarking Interactive Coding Agents](https://awesomecua.github.io/resources/arxiv-2407-18901/) — 2024-07-26
  Introduces simulated application APIs and state-based task evaluation for interactive coding agents performing everyday digital workflows.
- [CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents](https://awesomecua.github.io/resources/arxiv-2407-01511/) — 2024-07-01
  Introduces CRAB, a framework for cross-environment agent tasks with graph-based evaluation and a benchmark spanning desktop and phone interactions.
- [Mobile-Bench: An Evaluation Benchmark for LLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2407-00993/) — 2024-07-01
  Evaluates mobile agents using combined UI and API actions, tasks with varying app scope, and checkpoints for intermediate progress.
- [GUIOdyssey: A Comprehensive Dataset for Cross-App GUI Navigation on Mobile Devices](https://awesomecua.github.io/resources/arxiv-2406-08451/) — 2024-06-12
  Introduces annotated cross-application mobile trajectories and studies history-aware navigation over long task sequences.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.github.io/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://awesomecua.github.io/resources/arxiv-2404-07972/) — 2024-04-11
  Introduces a real-computer evaluation environment with execution-based checks for tasks spanning desktop applications and operating-system state.
- [Understanding the Weakness of Large Language Model Agents within a Complex Android Environment](https://awesomecua.github.io/resources/arxiv-2402-06596/) — 2024-02-09
  Introduces AndroidArena and analyzes agent limitations in cross-application tasks, user constraints, exploration, and reflection.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.github.io/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [SUGILITE: Creating Multimodal Smartphone Automation by Demonstration](https://awesomecua.github.io/resources/url-392a602c660ffa91be46/) — 2017
  Introduces SUGILITE, which combines spoken instructions, demonstrated Android actions, and UI hierarchies to generate reusable automation scripts. Its interface includes context checking and repairs for unfamiliar situations and changing app interfaces.

## Benchmarks

- [AppWorld](https://awesomecua.github.io/resources/github-stonybrooknlp-appworld/) — Date not recorded
  Simulated applications, user data, and state-based task checks for evaluating agents that interact through APIs and code.
- [ColorBench](https://awesomecua.github.io/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [CRAB](https://awesomecua.github.io/resources/github-camel-ai-crab/) — Date not recorded
  Cross-environment benchmark framework for multimodal agents.
- [iOSWorld](https://awesomecua.github.io/resources/github-ljang0-iosworld/) — Date not recorded
  Native iPhone-simulator benchmark with shared user data, application workflows, agent runners, and rubric-based scoring.
- [MobileGUI-VBench](https://awesomecua.github.io/resources/url-d7a4f34a6a5202af5f64/) — Date not recorded
  Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.
- [MobileGym++ / MobileGym++ Bench](https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/) — Date not recorded
  Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.
- [OS-Map](https://awesomecua.github.io/resources/github-os-copilot-os-map/) — Date not recorded
  An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.
- [OSWorld](https://awesomecua.github.io/resources/github-xlang-ai-osworld/) — Date not recorded
  Execution-based evaluation of agents performing tasks in real desktop environments.
- [TheAgentCompany](https://awesomecua.github.io/resources/github-theagentcompany-theagentcompany/) — Date not recorded
  Self-contained workplace environment for evaluating agents on professional tasks involving websites, files, code, and simulated coworkers.
- [WindowsWorld](https://awesomecua.github.io/resources/github-hitsz-tmg-windowsworld/) — Date not recorded
  Cross-application Windows benchmark with intermediate task evaluation.

## Datasets

- [GUI-Odyssey](https://awesomecua.github.io/resources/github-opengvlab-gui-odyssey/) — Date not recorded
  Cross-application mobile interaction trajectories.
- [GUIOdyssey — current data release](https://awesomecua.github.io/resources/url-511903ebfac45e6751b2/) — Date not recorded
  Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.

## Engineering & industry

- [GUI-ReWalk](https://awesomecua.github.io/resources/github-bytedance-gui-rewalk/) — Date not recorded
  A desktop trajectory-generation framework that moves from stochastic GUI exploration to inferred goals and multi-stage task completion, with retrospective reasoning annotations.
- [PC-Agent](https://awesomecua.github.io/resources/github-gair-nlp-pc-agent/) — Date not recorded
  Agent framework for desktop workflows.
- [UFO](https://awesomecua.github.io/resources/github-microsoft-ufo/) — Date not recorded
  Windows agent framework for application and desktop automation.
