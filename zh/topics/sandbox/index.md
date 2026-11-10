# 沙箱

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/sandbox/records.jsonl

## 论文与综述

- [WebHarbor: Docking Real Websites for Evolving GUI Agent Environments](https://awesomecua.com/zh/resources/arxiv-2611-03634/) — 2026-11-02
  Introduces WebHarbor, a suite of 153 executable website environments and 3,518 tasks for evaluating and training GUI web agents on interactive workflows.
- [WebAnything: From the Wild Web to Scalable Agent Environments](https://awesomecua.com/zh/resources/arxiv-2610-37786/) — 2026-10-27
  Introduces WebAnything, a framework that reconstructs reusable, resettable website environments from real URLs for web-agent training and evaluation.
- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.com/zh/resources/arxiv-2610-26828/) — 2026-10-19
  WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning.
- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2610-26071/) — 2026-10-19
  CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks.
- [BlenderWorld: Benchmarking Visual Agents for 3D Creation from Real-World References](https://awesomecua.com/zh/resources/arxiv-2610-23986/) — 2026-10-14
  Benchmarks agents creating editable Blender projects through shell, Python and MCP tools, judging delivered scenes with multi-view renders, task-specific rubrics and visual-quality ratings.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.com/zh/resources/arxiv-2610-20939/) — 2026-10-14
  Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks.
- [SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments](https://awesomecua.com/zh/resources/arxiv-2610-12611/) — 2026-10-08
  Introduces SoftwareGym, a pipeline that synthesizes runnable GUI applications and iteratively repairs them using execution checks. It also provides a task benchmark and studies whether training on synthesized application trajectories transfers to other computer-use environments.
- [StateFork: Branchable Infrastructure for Agent Exploration](https://awesomecua.com/zh/resources/arxiv-2609-38648/) — 2026-09-29
  Introduces StateFork and Waypoint for branching and restoring terminal-agent sessions so agents can explore multiple paths while preserving execution state.
- [CUA-Sandbox: Efficient Environments for Computer-Use Agent Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2609-32750/) — 2026-09-26
  Introduces CUA-Sandbox, which separates each rollout’s mutable state from shared initialized software runtimes. State-scoped execution and transactional resets or branches aim to reduce training-environment costs while retaining original interfaces and evaluators.
- [RiskChainBench: A Benchmark for Obfuscated Platform Message Restoration and Evidence-Grounded Web Investigation](https://awesomecua.com/zh/resources/arxiv-2609-16900/) — 2026-09-15
  Introduces RiskChainBench, pairing obfuscated-message restoration with web-agent investigation of linked sites in labeled local web environments.
- [CoArena: Evaluating Computer-Use and Multi-Agent Systems in Real Time](https://awesomecua.com/zh/resources/arxiv-2609-14239/) — 2026-09-13
  Introduces CoArena, an evaluation method where user tasks run concurrently in sandboxed desktops and blind pairwise judgments update a public leaderboard.
- [APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-07712/) — 2026-09-07
  Introduces controlled simulated mobile apps with deterministic backend data and outcome checks for reproducible evaluation of realistic interactions.
- [CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents](https://awesomecua.com/zh/resources/arxiv-2609-05374/) — 2026-09-04
  Turns desktop applications into reproducible GUI-and-CLI environments and generates verified hybrid trajectories for agent post-training.
- [BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes](https://awesomecua.com/zh/resources/arxiv-2608-24848/) — 2026-08-25
  Introduces BrowserForge, which combines broad website sourcing, parallel browser sandboxes, and task-proposer/solver interaction to collect verified web trajectories. The pipeline uses page structure during synthesis but trains a policy that acts from screenshots.
- [Spine-Branch Coordination for Multi-agent Computer Use](https://awesomecua.com/zh/resources/arxiv-2608-22077/) — 2026-08-22
  Introduces Spine-Branch Coordination, which assigns a main task flow to one virtual-machine state and uses parallel branch machines to gather information for computer-use agents.
- [Training Needs Trustworthy Worlds: Verified Synthetic Web Environments for Agent Learning](https://awesomecua.com/zh/resources/arxiv-2608-21898/) — 2026-08-22
  Builds synthetic websites with verified navigation, backend state, and feasible tasks to provide reliable supervision for web-agent training.
- [Invisible Ink Threats: Adversarial Goals Behind Legitimate Tasks in Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2608-02018/) — 2026-08-03
  Introduces II-Bench for low-harm indirect prompt injections against computer-use agents and HITLCUA for testing them in virtual-machine and web environments with simulated user review.
- [Echoverse: Deep, Evolving Environments for Training Computer-Use Agents at Scale](https://awesomecua.com/zh/resources/arxiv-2607-28074/) — 2026-07-30
  Introduces Echoverse, which compiles specifications into stateful applications with database-grounded graders and uses rollouts to improve both the environments and agent policies. It examines behavioral depth, targeted interface practice, and environment repair as sources of training value.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://awesomecua.com/zh/resources/arxiv-2607-21557/) — 2026-07-23
  OpenForgeRL connects stateful agent harnesses to reinforcement-learning infrastructure through a model-call recording proxy and isolated rollout containers. Its validation includes browser and computer-use agents, alongside tool-oriented agents, and examines how harness choice affects learned reliability.
- [UniClawBench: A Universal Benchmark for Proactive Agents on Real-World Tasks](https://awesomecua.com/zh/resources/arxiv-2607-08768/) — 2026-07-09
  Introduces UniClawBench, a benchmark of proactive agents on bilingual real-world tasks, evaluated in live Docker containers with stepwise checkpoints and simulated user feedback.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [Untrusted Content Masking for Web Agents with Security Guarantees](https://awesomecua.com/zh/resources/arxiv-2607-05277/) — 2026-07-06
  Untrusted Content Masking uses DOM structure to redact untrusted webpage regions before agent observation. A sandboxed interaction interface separates privileges so browser actions can proceed under the proposed trust-boundary model without exposing protected content to the planner.
- [AOHP: An Open-Source OS-Level Agent Harness for Personalized, Efficient and Secure Interaction](https://awesomecua.com/zh/resources/arxiv-2606-23449/) — 2026-06-22
  Introduces AOHP, an Android OS-level harness that treats agents as system actors and provides adaptive interfaces, agent interfaces, and information-flow controls.
- [OpenWebRL: Demystifying Online Multi-turn Reinforcement Learning for Visual Web Agents](https://awesomecua.com/zh/resources/arxiv-2606-02031/) — 2026-06-01
  Introduces OpenWebRL, a framework for training visual web agents with online multi-turn reinforcement learning on live websites, including browser infrastructure and success judging.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.com/zh/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research](https://awesomecua.com/zh/resources/arxiv-2605-26114/) — 2026-05-25
  Introduces MobileGym, a browser-hosted simulation of mobile app interactions whose configurable JSON state supports deterministic judging and parallel rollouts. MobileGym-Bench adds parameterized tasks, with experiments examining online training and transfer to real devices.
- [CUA-Gym: Scaling Verifiable Training Environments and Tasks for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2605-25624/) — 2026-05-25
  Presents CUA-Gym, which co-generates instructions, initial and target states, and executable reward checks through generator-discriminator iterations. Mock web applications expand training environments, with learned agents evaluated on OSWorld-Verified and WebArena.
- [ScaleWoB: Guiding GUI Agents with Coding Agents via Large-Scale Environmental Synthesis](https://awesomecua.com/zh/resources/arxiv-2605-25160/) — 2026-05-24
  Introduces ScaleWoB, which synthesizes interactive GUI environments as backend-free webpages with verifiable rewards. Its mobile-oriented benchmark evaluates agent execution and compares selected synthetic tasks with real-app behavior.
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [ShopGym: An Integrated Framework for Realistic Simulation and Scalable Benchmarking of E-Commerce Web Agents](https://awesomecua.com/zh/resources/arxiv-2605-16116/) — 2026-05-15
  ShopGym builds sandbox e-commerce storefronts from live shops and generates catalog-grounded tasks for evaluating web shopping agents in resettable environments.
- [Orchard: An Open-Source Agentic Modeling Framework](https://awesomecua.com/zh/resources/arxiv-2605-15040/) — 2026-05-14
  Orchard provides an environment service and training recipes for several agent domains, including Orchard-GUI, a vision-language computer-use agent.
- [WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation](https://awesomecua.com/zh/resources/arxiv-2605-10912/) — 2026-05-11
  WildClawBench evaluates CLI agents on long, multimodal tasks in Docker containers with real tools, using task checks, side-effect audits, and a semantic judge.
- [Computer Use at the Edge of the Statistical Precipice](https://awesomecua.com/zh/resources/arxiv-2605-08261/) — 2026-05-07
  DigiWorld is a sandboxed mobile-app benchmark for computer-use agents, paired with PRISM environment principles and a confidence-interval aggregation method.
- [Weblica: Scalable and Reproducible Training Environments for Visual Web Agents](https://awesomecua.com/zh/resources/arxiv-2605-06761/) — 2026-05-07
  Introduces Weblica, which combines HTTP-level capture and replay with website-grounded environment synthesis. The resulting interactive web environments support reinforcement learning and tests of navigation transfer and inference-time scaling.
- [Constraining Host-Level Abuse in Self-Hosted Computer-Use Agents via TEE-Backed Isolation](https://awesomecua.com/zh/resources/arxiv-2605-06393/) — 2026-05-07
  A TEE-backed design confines host operations by self-hosted computer-use agents, classifying and authorizing actions before constrained local execution.
- [AcademiClaw: When Students Set Challenges for AI Agents](https://awesomecua.com/zh/resources/arxiv-2605-02661/) — 2026-05-04
  AcademiClaw benchmarks OpenClaw agents on long academic workflows, scoring task completion in isolated Docker sandboxes with rubrics and a safety audit.
- [Computer Agent Arena: Toward Human-Centric Evaluation and Analysis of Computer-Use Agents](https://awesomecua.com/zh/resources/url-5cfd441becdfc6ea622b/) — 2026-04-20
  Crowdsourced arena where users set tasks on cloud Ubuntu or Windows desktops, watch two anonymous computer-use agents attempt them side by side and vote; reports 2,201 votes over 12 agents.
- [KnowU-Bench: Towards Interactive, Proactive, and Personalized Mobile Agent Evaluation](https://awesomecua.com/zh/resources/arxiv-2604-08455/) — 2026-04-09
  Introduces KnowU-Bench, an Android emulator benchmark for mobile agents that evaluates preference elicitation, proactive decisions, consent and GUI task execution.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.com/zh/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [Safe and Scalable Web Agent Learning via Recreated Websites](https://awesomecua.com/zh/resources/arxiv-2603-10505/) — 2026-03-11
  Introduces VeriEnv, which recreates websites as executable training environments and exposes internal state through a Python SDK for task generation and deterministic reward checks. Experiments examine web-agent learning across new and expanded site environments.
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.com/zh/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.com/zh/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [Blind Gods and Broken Screens: Architecting a Secure, Intent-Centric Mobile Agent Operating System](https://awesomecua.com/zh/resources/arxiv-2602-10915/) — 2026-02-11
  Analyzes security risks in screen-based mobile agents and proposes Aura, an agent runtime with structured interactions, app-agent isolation and mediated communication.
- [Computer Environments Elicit General Agentic Intelligence in LLMs](https://awesomecua.com/zh/resources/arxiv-2601-16206/) — 2026-01-22
  LLM-in-Sandbox gives agents a minimal computer environment for resource access, file management and code execution; LLM-in-Sandbox-RL trains models to use it.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.com/zh/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.com/zh/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.com/zh/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [GhostEI-Bench: Do Mobile Agents Resilience to Environmental Injection in Dynamic On-Device Environments?](https://awesomecua.com/zh/resources/arxiv-2510-20333/) — 2025-10-23
  Introduces GhostEI-Bench, a benchmark that injects deceptive UI events into Android emulator workflows to assess mobile agents and analyze failures from actions and screenshots.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.com/zh/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.com/zh/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [Your Harness is Not Secure: Benchmarking Real-world Threat of Command Line Interface Agent](https://awesomecua.com/zh/resources/arxiv-2510-06607/) — 2025-10-08
  Introduces AdvCLI, a sandbox benchmark for evaluating whether command-line agents carry out security-relevant operating-system tasks across multiple hosts.
- [SCUBA: Salesforce Computer Use Benchmark](https://awesomecua.com/zh/resources/arxiv-2509-26506/) — 2025-09-30
  SCUBA evaluates enterprise UI navigation and CRM workflows with 300 task instances derived from Salesforce user interviews. Salesforce sandbox execution and milestone-based assessment support comparisons between zero-shot agents and agents given demonstrations.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.com/zh/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [UISim: An Interactive Image-Based UI Simulator for Dynamic Mobile Environments](https://awesomecua.com/zh/resources/arxiv-2509-21733/) — 2025-09-26
  Introduces UISim, an image-based mobile UI simulator that predicts the next screen layout after an action and renders the resulting screen for testing and data generation.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [WebMall -- A Multi-Shop Benchmark for Evaluating Web Agents](https://awesomecua.com/zh/resources/arxiv-2508-13024/) — 2025-08-18
  WebMall provides four simulated online shops with heterogeneous product data for comparison shopping, related-product searches, and checkout tasks. It evaluates web agents with different observation formats and memory configurations in a fixed offline environment.
- [Measuring Harmfulness of Computer-Using Agents](https://awesomecua.com/zh/resources/arxiv-2508-00935/) — 2025-07-31
  Introduces CUAHarm, 104 computer-use misuse tasks in a sandbox with verifiable rewards, and studies whether language models can monitor unsafe agent actions.
- [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-07672/) — 2025-06-09
  MCPWorld evaluates API, GUI, and hybrid computer-use agents with 201 tasks in applications whose source can be instrumented and extended with MCP support. It verifies completion from application behavior and packages the testbed in containers with GPU support.
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.com/zh/resources/arxiv-2505-21936/) — 2025-05-28
  RedTeamCUA combines a virtual-machine OS environment with containerized websites for controlled prompt-injection tests spanning both interfaces. Its RTC-Bench contains 864 examples and can initialize agents at injection points to separate attack susceptibility from navigation failures.
- [REAL: Benchmarking Autonomous Agents on Deterministic Simulations of Real Websites](https://awesomecua.com/zh/resources/arxiv-2504-11543/) — 2025-04-15
  Introduces REAL, a benchmark of deterministic website replicas with 112 tasks covering information retrieval and state-changing browser actions.
- [WebGames: Challenging General-Purpose Web-Browsing AI Agents](https://awesomecua.com/zh/resources/arxiv-2502-18356/) — 2025-02-25
  Introduces WebGames, a browser-agent benchmark with 50+ interactive challenges in a self-contained test environment and verifiable solutions.
- [The BrowserGym Ecosystem for Web Agent Research](https://awesomecua.com/zh/resources/arxiv-2412-05467/) — 2024-12-06
  Describes BrowserGym's shared web interaction environment and AgentLab tooling for consistent experiments across multiple agent benchmarks.
- [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://awesomecua.com/zh/resources/arxiv-2407-16741/) — 2024-07-23
  OpenHands is a platform for agents that write code, use a command line and browse the web, with sandboxed execution and support for agent evaluation.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.com/zh/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [Mobile-Env: Building Qualified Evaluation Benchmarks for LLM-GUI Interaction](https://awesomecua.com/zh/resources/arxiv-2305-08144/) — 2023-05-14
  Provides an Android benchmark toolkit with controlled environments, intermediate feedback, and task sets for reproducible GUI-agent evaluation.
- [AppBuddy: Learning to Accomplish Tasks in Mobile Apps via Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2106-00133/) — 2021-05-31
  Introduces AppBuddy, an RL training platform and task suite for mobile apps where agents use on-screen element states and tap or type to complete multi-step tasks.
- [AndroidEnv: A Reinforcement Learning Platform for Android](https://awesomecua.com/zh/resources/arxiv-2105-13231/) — 2021-05-27
  Presents an Android environment for training and evaluating reinforcement-learning agents through touchscreen interaction.

## 评测基准

- [Agent-CE](https://awesomecua.com/zh/resources/github-anaishowland-agent-ce/) — Date not recorded
  Agent-CE is a containerized continuous evaluation platform for benchmarking web browsing agents across reproducible task suites.
- [AppSim-Bench](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim/) — Date not recorded
  Simulated mobile applications and evaluation tooling for reproducible GUI-agent tasks with controlled application state.
- [cua-bench (ERPNext)](https://awesomecua.com/zh/resources/github-vaiyr-cua-bench/) — Date not recorded
  cua-bench packages containerized ERPNext v15 accounting and enterprise workflows as Harbor RL and evaluation environments for GUI agents.
- [CUA-Gym-Hub](https://awesomecua.com/zh/resources/github-xlang-ai-cua-gym-hub/) — Date not recorded
  CUA-Gym-Hub provides 98 self-contained mock web applications with deterministic state verifiers as RL training and evaluation environments.
- [DeskMind Bench](https://awesomecua.com/zh/resources/github-deskmind-ai-bench/) — Date not recorded
  DeskMind Bench provides sandboxed macOS desktop tasks, state graders, and reference trajectories for evaluating computer-use agents.
- [GameWorld Games](https://awesomecua.com/zh/resources/github-gameworld-project-gameworld-games/) — Date not recorded
  GameWorld Games supplies browser-game snapshots for agent evaluation, each with an API for initialization, reset and game-state inspection.
- [GBOX MCP + Claude Code](https://awesomecua.com/zh/resources/github-babelcloud-android-world-benchmark/) — Date not recorded
  An AndroidWorld benchmark setup that connects a Claude agent to an Android emulator through GBOX MCP and includes a task-completion tool for evaluation.
- [Gym-Anything](https://awesomecua.com/zh/resources/github-cmu-l3-gym-anything/) — Date not recorded
  Runtime and CUA-World task suite that turn real applications on Ubuntu, Windows 11, Android and macOS into screen-observing, mouse-and-keyboard agent environments with setup scripts and program verifiers.
- [Gym-Anything-RT](https://awesomecua.com/zh/resources/github-gym-anything-gym-anything-rt/) — Date not recorded
  Gym-Anything-RT evaluates screenshot-driven agents on paired live and untimed browser minigames. Its runner can pause or slow the game clock to isolate timing effects.
- [Halluminate Westworld](https://awesomecua.com/zh/resources/github-halluminate-westworld/) — Date not recorded
  Halluminate Westworld evaluates web agents on tasks set in realistic websites and provides task loading, a manual demo and evaluator interfaces.
- [HealthEnv](https://awesomecua.com/zh/resources/github-possibleme2026-lang-healthenv/) — Date not recorded
  HealthEnv compiles longitudinal clinical question-answering tasks into stateful, verifiable computer-use evaluation environments.
- [hyprbench](https://awesomecua.com/zh/resources/github-crispwisp-hyprbench/) — Date not recorded
  hyprbench is an OSWorld-style computer-use benchmark for the Linux Hyprland Wayland compositor with scripted window-management verifiers.
- [Inspect Evals](https://awesomecua.com/zh/resources/github-ukgovernmentbeis-inspect-evals/) — Date not recorded
  Inspect Evals is a community benchmark suite for the UK AISI Inspect framework including OSWorld, GAIA, SWE-bench, and cyber/agent evaluations.
- [Kernel Eval Protocol](https://awesomecua.com/zh/resources/github-kernel-kernel-eval-protocol-quickstart/) — Date not recorded
  Evaluates and fine-tunes vision-language browser agents using Eval Protocol, Kernel cloud browsers, and verifiable task graders.
- [MacArena](https://awesomecua.com/zh/resources/github-macpaw-macarena/) — Date not recorded
  MacArena benchmarks computer-use agents in an online, reproducible macOS virtual-machine environment across multi-app desktop tasks.
- [MobileGym](https://awesomecua.com/zh/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [MyPCBench](https://awesomecua.com/zh/resources/github-ljang0-mypcbench/) — Date not recorded
  A Linux desktop benchmark with 184 tasks spanning seeded web apps and office software, using a VM runner and rubric-based grading.
- [openadapt-evals](https://awesomecua.com/zh/resources/github-openadaptai-openadapt-evals/) — Date not recorded
  openadapt-evals scores GUI agents and compiled workflows on benchmarks such as Windows Agent Arena using reproducible evaluators.
- [OpenApps](https://awesomecua.com/zh/resources/github-facebookresearch-openapps/) — Date not recorded
  Configurable browser apps and task rewards for testing computer-use agents under changes in content, layout and appearance.
- [OSUniverse](https://awesomecua.com/zh/resources/github-agentsea-osuniverse/) — Date not recorded
  OSUniverse is a task-oriented desktop benchmark for evaluating vision-based multimodal GUI navigation agents across operating-system applications.
- [OSWorld 2.0](https://awesomecua.com/zh/resources/github-xlang-ai-osworld-v2/) — Date not recorded
  OSWorld 2.0 benchmarks computer-use agents on long-horizon desktop workflows with updated task suites, trajectory viewers, and container sandboxes.
- [OSWorld-MCP](https://awesomecua.com/zh/resources/github-x-plug-osworld-mcp/) — Date not recorded
  OSWorld-MCP benchmarks computer-use agents on hybrid GUI interaction and Model Context Protocol (MCP) tool invocation within OSWorld.
- [pantheon-webarena](https://awesomecua.com/zh/resources/github-pantheon-auto-pantheon-webarena/) — Date not recorded
  pantheon-webarena packages containerized WebArena environments with reset, health-check, and parallel evaluation utilities for web agents.
- [REAL](https://awesomecua.com/zh/resources/github-agi-inc-real/) — Date not recorded
  A browser-agent evaluation toolkit with reproducible website replicas, task goals, an agent API, and a benchmarking harness.
- [Resurf](https://awesomecua.com/zh/resources/github-lightfeed-resurf/) — Date not recorded
  Resurf is a deterministic, reproducible test environment for evaluating AI browser agents across realistic web failure modes.
- [RLG-ALE](https://awesomecua.com/zh/resources/url-0596dd7e97fd30abaadc/) — Date not recorded
  RLG-ALE evaluates mobile GUI agents on inspectable Android tasks. Its page shows sample episodes with prompts, screenshots, evaluation records, and resettable environments.
- [SCUBA (Salesforce Computer Use Benchmark)](https://awesomecua.com/zh/resources/github-salesforceairesearch-scuba/) — Date not recorded
  SCUBA benchmarks computer-use agents on enterprise Salesforce CRM workflows spanning admin configuration, sales operations, and service tasks.
- [vimgolf-gym](https://awesomecua.com/zh/resources/github-james4ever0-vimgolf-gym/) — Date not recorded
  A Gym-like benchmark for VimGolf tasks that lets agents send keystrokes to Vim, capture screenshots, and score solutions by correctness and key count.
- [WeaveBench](https://awesomecua.com/zh/resources/github-weavebench-weavebench/) — Date not recorded
  WeaveBench evaluates computer-use agents on long-horizon real-world workflows across hybrid GUI, web, and programmatic tool interfaces.
- [WebArena-Infinity](https://awesomecua.com/zh/resources/github-web-arena-x-webarena-infinity/) — Date not recorded
  Generated web apps modeled on GitLab, PayPal, Xero, Elation EHR and other products, each with resettable state and Python-verified tasks for browser agents, plus the coding-agent pipeline that builds them.
- [WorkArena-Instances](https://awesomecua.com/zh/resources/url-01b9e39cd2526d41c527/) — Date not recorded
  A restricted-access set of ServiceNow instances for running WorkArena benchmark evaluations. The repository provides instance information and states research-use conditions.

## 数据集

- [ChilleD/WildAWM](https://awesomecua.com/zh/resources/url-eb8af3be965f5c0fde6a/) — Date not recorded
  WildAWM provides 341 computer-use tasks across CLI, MCP, and web interfaces, with frozen task worlds and training and test splits for Harbor runs.

## 工程与产业

- [@sparticuz/chromium](https://awesomecua.com/zh/resources/github-sparticuz-chromium/) — Date not recorded
  @sparticuz/chromium supplies a headless Linux Chromium build and launch settings for serverless browser automation with Puppeteer or Playwright.
- [Aegis (Hardened Computer-Use Sandbox)](https://awesomecua.com/zh/resources/github-arihantdeva-aegis/) — Date not recorded
  Aegis is an off-screen, capability-dropped Docker browser and desktop sandbox for isolating computer-use agents.
- [Aether Agent Browser](https://awesomecua.com/zh/resources/github-aetherai3-agent-browser/) — Date not recorded
  Self-hosted Chrome agent runtime with bounded API control, live VNC observation, and human takeover.
- [Agent Infra Sandbox](https://awesomecua.com/zh/resources/github-agent-infra-sandbox/) — Date not recorded
  Sandbox environments supporting computer and browser interaction.
- [Agent Zero](https://awesomecua.com/zh/resources/github-agent0ai-agent-zero/) — Date not recorded
  Open-source agent with its own sandboxed Linux workspace that researches, writes code and works with documents using a terminal, a browser and desktop apps.
- [agent-desktop (macOS Multi-Account Sandbox)](https://awesomecua.com/zh/resources/github-dianavocado181-agent-desktop/) — Date not recorded
  Gives AI computer-use agents a dedicated macOS user account and isolated desktop session viewable live from the main screen.
- [agent-seat-linux](https://awesomecua.com/zh/resources/github-muhibnayem-agent-seat-linux/) — Date not recorded
  Provides application-scoped Wayland screen capture and isolated input seats for Linux automation agents.
- [agent-workspace-linux](https://awesomecua.com/zh/resources/github-agent-sh-agent-workspace-linux/) — Date not recorded
  A Linux workspace gives an agent a private desktop and browser controlled through MCP. It supports screen capture and input actions, with a viewer for watching and stopping the agent.
- [AgentCurtain](https://awesomecua.com/zh/resources/github-felixlark-agent-curtain/) — Date not recorded
  AgentCurtain is a macOS menu-bar utility that dims physical displays and blocks physical input while keeping unattended GUI agent sessions running.
- [agentd](https://awesomecua.com/zh/resources/github-agentsea-agentd/) — Date not recorded
  AgentD exposes a desktop session through an HTTP API for screenshots, mouse and keyboard actions, browser opening, and session recording.
- [AgentDesk](https://awesomecua.com/zh/resources/github-agentsea-agentdesk/) — Date not recorded
  Desktop environments that AI agents control programmatically, run locally with Docker or remotely on Kubernetes, built on the agentd REST daemon and offering a coordinate-grid overlay for LMM input.
- [AgentDesktopLinux](https://awesomecua.com/zh/resources/github-edwaks-agentdesktoplinux/) — Date not recorded
  Linux desktop and VPS computer-use agent for TaskCapitan capable of driving GUI applications and browsers.
- [AgentEnv](https://awesomecua.com/zh/resources/github-llamatouch-agentenv/) — Date not recorded
  AgentEnv connects agent models to Android devices or emulators, translating actions and returning screenshots and view hierarchies while recording interactions.
- [AgentSeat](https://awesomecua.com/zh/resources/github-vimalinx-agentseat/) — Date not recorded
  Lightweight Wayland scaffold isolating an AI agent to operate a single GUI application inside its own virtual seat.
- [AgentStudio](https://awesomecua.com/zh/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [AgentTab](https://awesomecua.com/zh/resources/github-wolfiesch-chrome-bridge/) — Date not recorded
  AgentTab provides task-owned Chrome tabs for AI agents, with page snapshots, browser actions, human handoff, and optional review of consequential actions.
- [AGI SDK](https://awesomecua.com/zh/resources/github-agi-inc-agisdk/) — Date not recorded
  AGI SDK provides a browser-agent API and evaluation harness for tasks on deterministic replicas of interactive websites, with support for custom agents.
- [AI SDK Computer Use](https://awesomecua.com/zh/resources/github-vercel-labs-ai-sdk-computer-use/) — Date not recorded
  Next.js chat app from Vercel Labs in which Claude's computer and bash tools operate a Linux desktop in a Vercel Sandbox, clicking and typing through xdotool and streaming the screen to the page over noVNC.
- [aic-pod](https://awesomecua.com/zh/resources/github-veypi-aic-pod/) — Date not recorded
  Turns a physical or virtual machine into an LLM-callable execution node with sandboxed shell, file, browser, and desktop control.
- [Ailoy](https://awesomecua.com/zh/resources/github-brekkylab-ailoy/) — Date not recorded
  Ailoy is a multi-language AI agent SDK that provisions isolated microVM sandboxes for computer-use, CAD, and desktop automation agents.
- [AIOS](https://awesomecua.com/zh/resources/github-agiresearch-aios/) — Date not recorded
  AIOS is an agent operating system whose computer-use architecture provides a virtual machine controller and MCP server for agents interacting with graphical computer environments.
- [Airbrowser MCP](https://awesomecua.com/zh/resources/github-ifokeev-airbrowser-mcp/) — Date not recorded
  Airbrowser packages an undetectable Chrome browser, REST API, MCP server, and live VNC view inside a Docker container for AI web agents.
- [Amap-Sim](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-amap/) — Date not recorded
  An offline Android map-app simulation for AI automation tests, with map browsing, place search, routing, and navigation backed by locally prepared data.
- [Amazon Bedrock AgentCore](https://awesomecua.com/zh/resources/url-ecf89236d4e75b05c7b4/) — Date not recorded
  AWS managed agent platform whose Browser tool runs isolated cloud browser sessions with automation and live-view streams and optional recording, alongside runtime, memory, gateway and code-execution services.
- [Anchor](https://awesomecua.com/zh/resources/url-74a98d385b656cf5e980/) — Date not recorded
  Anchor provides cloud browser environments for AI agents to navigate authenticated websites and run browser workloads, with SDK and MCP integration.
- [Anchor Browser](https://awesomecua.com/zh/resources/url-697a83b26e55f206b651/) — Date not recorded
  Anchor Browser provides cloud browser sessions for agents through SDK, CDP and REST interfaces. Its documentation describes natural-language tasks, authentication and reusable workflows.
- [AndroidEnv](https://awesomecua.com/zh/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [anpl1623 AgentOS](https://awesomecua.com/zh/resources/github-anpl1623-agentos/) — Date not recorded
  Local-first open-source agent runtime for safely executing AI-driven tasks on a user's personal computer.
- [AntyBrowser SDK](https://awesomecua.com/zh/resources/github-antybrowser-sdk/) — Date not recorded
  Official multi-language SDKs (TypeScript, Python, C#, Go, PHP, Ruby) for driving AntyBrowser anti-detect browser profiles.
- [Anvil Engine](https://awesomecua.com/zh/resources/github-awictor-anvil-engine/) — Date not recorded
  A self-hosted Chrome service that exposes browser sessions, page actions, screenshots and recordings through REST, CDP, a TypeScript SDK and an MCP server.
- [aos (Agent Operating System CLI)](https://awesomecua.com/zh/resources/github-muthuishere-aos/) — Date not recorded
  Unified CLI layer over host machines allowing AI agents to drive desktop apps and terminals without taking over user focus.
- [AppSim-BiliBili](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-bilibili/) — Date not recorded
  A simulated Bilibili Android app for testing AI interaction. It provides navigable screens and preset static content without requiring a network connection.
- [AppSim-Eleme](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-eleme/) — Date not recorded
  An Android food-delivery app built as a local test environment for AI interaction. It supplies shopping workflows, predefined tasks, action logging and evaluation scripts.
- [AppSim-UberEats](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-ubereats/) — Date not recorded
  AppSim-UberEats is an Android app replica with interactive shopping screens, seeded data and scripts for checking task events and answers during mobile-agent evaluation.
- [AriaOS](https://awesomecua.com/zh/resources/github-jeremie225ci-ariaos/) — Date not recorded
  AriaOS provisions a dedicated virtual machine desktop where computer-use agents operate GUI apps, terminals, and voice interactions.
- [ASIL Benchmark Images](https://awesomecua.com/zh/resources/url-6545629632b5e3e3a3d6/) — Date not recorded
  Prebuilt Singularity/Apptainer runtime images for reproducing the ASIL agent benchmark, supplied with versioned manifests and checksums.
- [AutoWechat](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-wechat-v2/) — Date not recorded
  A simulated WeChat Android app from the AppSim-Bench suite, with chat lists, group chats, contacts and Moments posts backed by local JSON data for AI automation tests.
- [background-computer-use](https://awesomecua.com/zh/resources/github-panchangam18-background-computer-use/) — Date not recorded
  MCP server and skill library for driving macOS applications in the background without stealing window focus or cursor control.
- [Beam](https://awesomecua.com/zh/resources/url-51289d2105ef35fd0265/) — Date not recorded
  Serverless cloud for AI workloads whose persistent microVMs for agents can include a Linux desktop with a browser that the SDKs, CLI and an MCP server operate through screenshots, clicks, key presses and typing.
- [bg-driver-rs](https://awesomecua.com/zh/resources/github-lvyuan1688-bg-driver-rs/) — Date not recorded
  Rust background computer-use driver for macOS, Windows, and Linux.
- [Boxcar](https://awesomecua.com/zh/resources/github-status-labs-boxcar/) — Date not recorded
  Boxcar provisions disposable Windows 11 and Ubuntu desktop virtual-machine sandboxes for LLM computer-use agents.
- [Browser Forest MCP Server](https://awesomecua.com/zh/resources/github-jinmojing-browser-forest-mcp-server/) — Date not recorded
  Model Context Protocol server for driving anti-detect kernel-patched Chromium cloud browser profiles.
- [Browser Run](https://awesomecua.com/zh/resources/url-a57a63693c89915903f1/) — Date not recorded
  Browser Run hosts headless Chrome sessions for browser automation and agent browsing, with Playwright, Puppeteer, CDP and MCP integration options.
- [Browser Use Box (bux)](https://awesomecua.com/zh/resources/github-browser-use-bux/) — Date not recorded
  Browser Use Box (bux) packages a 24/7 autonomous Claude Code and Browser Use web agent for self-hosted Linux servers.
- [Browser Use macOS Harness](https://awesomecua.com/zh/resources/github-browser-use-macos-harness/) — Date not recorded
  Official Browser Use harness for provisioning and driving isolated macOS virtual machines and desktop sessions.
- [browser-gateway](https://awesomecua.com/zh/resources/github-browser-gateway-browser-gateway/) — Date not recorded
  browser-gateway is an open control plane and router across cloud browser providers with failover, persistent profiles, session replay, and MCP.
- [Browserbase Cloud](https://awesomecua.com/zh/resources/url-978d1dcd70fde8661b9e/) — Date not recorded
  Managed browser infrastructure for agent applications.
- [Browserless](https://awesomecua.com/zh/resources/github-browserless-browserless/) — Date not recorded
  Browserless runs headless browsers as a Docker service for Puppeteer and Playwright scripts, with session concurrency controls and a live debugging view.
- [Browserless](https://awesomecua.com/zh/resources/url-1e6b8682e0f1ddc3d36f/) — Date not recorded
  Hosted browser infrastructure for automation applications.
- [BrowserMesh](https://awesomecua.com/zh/resources/github-scrolldynasty-browsermesh/) — Date not recorded
  Multi-agent browser MCP runtime in Rust managing isolated, persistent, parallel Playwright sessions.
- [Browserplane](https://awesomecua.com/zh/resources/github-mathisarends-browserplane/) — Date not recorded
  Reference control plane for scaling remote Chromium browsers with a Postgres-backed session broker and live WebSocket tab mirroring.
- [browserserve](https://awesomecua.com/zh/resources/github-browser-gateway-browserserve/) — Date not recorded
  A self-hosted Chrome server provides isolated browser sessions over CDP for Playwright, Puppeteer, and other clients, with pooling and resource controls.
- [BrowserTunnel](https://awesomecua.com/zh/resources/github-mathisarends-browsertunnel/) — Date not recorded
  Streams and mirrors a live Chromium tab into a web page over a single WebSocket for remote agent observation and takeover.
- [BryantVanOrden OpenAgentFleet](https://awesomecua.com/zh/resources/github-bryantvanorden-openagentfleet/) — Date not recorded
  Self-hosted fleet orchestrator provisioning sandboxed Linux desktop containers for autonomous computer-use agents.
- [Camofox OpenCLI](https://awesomecua.com/zh/resources/github-fectivnfy112357-camofox-opencli/) — Date not recorded
  Dockerized cloud browser runtime combining Camofox anti-detect Firefox with 163+ OpenCLI website adapters.
- [camofox-browser](https://awesomecua.com/zh/resources/github-jo-inc-camofox-browser/) — Date not recorded
  A browser server for AI agents that exposes accessibility snapshots and referenced page actions through a REST API, with isolated sessions and authenticated browsing support.
- [CamouForge](https://awesomecua.com/zh/resources/github-rycen7822-camouforge/) — Date not recorded
  Native Windows GUI manager for configuring and launching isolated Camoufox stealth browser profiles.
- [Camoufox](https://awesomecua.com/zh/resources/github-daijro-camoufox/) — Date not recorded
  Camoufox is an open-source anti-detect Firefox browser with C++-level fingerprint rotation designed for web automation and AI browser agents.
- [caravela](https://awesomecua.com/zh/resources/github-kov-caravela/) — Date not recorded
  Programmatic browser-use CLI and library driving Chromium over CDP inside an optional managed Weston Wayland compositor.
- [Celestea Harness Studio](https://awesomecua.com/zh/resources/github-mcd0luo-celestea-harness-studio/) — Date not recorded
  Self-hosted AI agent workbench combining a web UI, TypeScript backend, sandboxed tool execution, and browser control.
- [Celesto](https://awesomecua.com/zh/resources/github-celestoai-celesto/) — Date not recorded
  Celesto provisions secure, persistent virtual desktop computers and browser sandboxes for AI agents.
- [Cella](https://awesomecua.com/zh/resources/github-latere-ai-cella/) — Date not recorded
  A control plane for agent sandboxes defined by manifests. It runs workloads on several runtimes and exposes a virtual desktop with screen viewing and input controls.
- [Chrome MCP Docker](https://awesomecua.com/zh/resources/github-null-runner-chrome-mcp-docker/) — Date not recorded
  Dockerized Chrome DevTools MCP server with persistent browser profiles and container host-header routing for AI web agents.
- [Chrome Orchestrator](https://awesomecua.com/zh/resources/github-sh7vansh-chrome-orchestrator/) — Date not recorded
  Unified Model Context Protocol gateway and dynamic container orchestrator for headless AI browser sessions.
- [ChromeClaw](https://awesomecua.com/zh/resources/github-algopian-chromeclaw/) — Date not recorded
  ChromeClaw runs an autonomous browser and workspace agent inside the Chrome extension sandbox with multi-provider LLM and tab automation tools.
- [Claude KVM](https://awesomecua.com/zh/resources/github-aras-workspace-claude-kvm/) — Date not recorded
  Claude KVM is a macOS MCP server and VNC client that enables AI agents to observe and control remote desktop environments over VNC.
- [Claude Quickstarts (Computer Use Demo)](https://awesomecua.com/zh/resources/github-anthropics-claude-quickstarts/) — Date not recorded
  Anthropic reference implementations including the containerized Claude Computer Use desktop agent demo with Xvfb, VNC, and bash/browser tools.
- [ClawBox](https://awesomecua.com/zh/resources/github-coderkk1992-clawbox/) — Date not recorded
  ClawBox runs OpenClaw and computer-use agents inside an isolated Apple Virtualization.framework macOS virtual machine sandbox.
- [Clawbrowser](https://awesomecua.com/zh/resources/github-clawbrowser-clawbrowser/) — Date not recorded
  Clawbrowser is an agent-native managed Chromium runtime with fingerprint rotation, proxy routing, and persistent session state.
- [Clearcote Browser](https://awesomecua.com/zh/resources/github-clearcotelabs-clearcote-browser/) — Date not recorded
  Open-source stealth Chromium browser with engine-level fingerprint spoofing designed as a drop-in runtime for AI web agents.
- [CloakBrowserMCP](https://awesomecua.com/zh/resources/github-sjf-ecnu-cloakbrowsermcp/) — Date not recorded
  Python Model Context Protocol server for controlling CloakBrowser stealth Chromium in headless and Xvfb virtual-display environments.
- [CLYRedNote](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-rednote/) — Date not recorded
  An Android Compose clone app for GUI-agent testing, with shopping, messaging, search, and content screens backed by seeded fictional data.
- [Coasty](https://awesomecua.com/zh/resources/url-05dde0b8766744e94e07/) — Date not recorded
  Coasty develops computer-use environments for agent training and evaluation, using computer and phone interfaces alongside trajectories and outcome checks.
- [Cockroach Browser](https://awesomecua.com/zh/resources/github-ajnasnb-cockroach-browser/) — Date not recorded
  Local-first browser automation platform for AI agents supporting isolated Chromium, Firefox, and WebKit profiles.
- [Code Sandbox MCP](https://awesomecua.com/zh/resources/github-automata-labs-team-code-sandbox-mcp/) — Date not recorded
  Code Sandbox MCP is a Model Context Protocol server that provisions isolated Docker container sandboxes for AI agents to execute code and shell commands.
- [Codex Computer Use MCP (Signed Broker Bridge)](https://awesomecua.com/zh/resources/github-tmustier-codex-computer-use-mcp/) — Date not recorded
  Background-safe MCP server that exposes OpenAI's signed macOS Codex Computer Use broker to Pi and MCP clients.
- [Computer Agents](https://awesomecua.com/zh/resources/url-e73eb2f901a50145c37e/) — Date not recorded
  A cloud agent platform that gives agents persistent computers with browser, GUI, terminal, and file access, alongside project workspaces and workflow triggers.
- [Computer Use (gVisor Cloud REPL)](https://awesomecua.com/zh/resources/github-r33drichards-computer-use/) — Date not recorded
  Provides a gVisor-isolated Linux desktop and Chromium container with persistent storage driven through a single JavaScript REPL MCP tool.
- [Computer Use VM](https://awesomecua.com/zh/resources/github-zimengxiong-computer-use-vm/) — Date not recorded
  Provisions disposable, headless macOS virtual machines so computer-use agents can operate isolated desktops without window switching.
- [Computer Use with SLM (GRPO + OpenEnv)](https://awesomecua.com/zh/resources/github-shayanamir0-computer-use-with-slm/) — Date not recorded
  Fine-tunes small language models for computer-use navigation and GUI interaction using Group Relative Policy Optimization (GRPO) and OpenEnv.
- [computer-use-mcp-gateway](https://awesomecua.com/zh/resources/github-git-ksk-computer-use-mcp-gateway/) — Date not recorded
  Remote Model Context Protocol gateway for routing agent tool calls to computer-use backends such as Cua Driver.
- [CopilotKit OpenBot](https://awesomecua.com/zh/resources/github-copilotkit-openbot/) — Date not recorded
  Self-hosted enterprise AI assistant and computer-use workspace by CopilotKit with containerized sandboxing and skill orchestration.
- [Ctrip Android App](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-ctrip/) — Date not recorded
  An Android travel-app replica for testing AI interactions, with representative booking screens, fixed local data, and signals for checking task outcomes.
- [CUA-Gym](https://awesomecua.com/zh/resources/github-xlang-ai-cua-gym/) — Date not recorded
  CUA-Gym is a scalable pipeline for synthesizing interactive mock web environments and verifiable RLVR training tasks for computer-use agents.
- [cua-lite](https://awesomecua.com/zh/resources/github-justanotheruser82174-cua-lite/) — Date not recorded
  cua-lite is a cross-platform desktop application and harness for running, evaluating, and fine-tuning computer-use agents.
- [CuaOS](https://awesomecua.com/zh/resources/github-cuaos-cuaos/) — Date not recorded
  CuaOS runs a Qwen3-VL computer-use agent that autonomously controls an Ubuntu virtual desktop inside a local Docker sandbox.
- [CUArena](https://awesomecua.com/zh/resources/github-ogutdgn-cuarena/) — Date not recorded
  CUArena wraps desktop and web applications into resettable, observable, and programmatically gradable reinforcement-learning environments.
- [cuforge](https://awesomecua.com/zh/resources/github-huzjie-cuforge/) — Date not recorded
  cuforge is an online reinforcement-learning and verifiable task-synthesis platform for training computer-use GUI agents.
- [cuse](https://awesomecua.com/zh/resources/github-cuse-dev-cuse/) — Date not recorded
  cuse is an open-source framework for building AI agents that control virtualized Linux desktops and browsers via display, mouse, and keyboard APIs.
- [Cyberdesk](https://awesomecua.com/zh/resources/github-cyberdesk-hq-cyberdesk/) — Date not recorded
  Cyberdesk is an open-source virtual desktop orchestration platform and SDK for provisioning and controlling cloud desktop sandboxes for CUA.
- [Cybergod](https://awesomecua.com/zh/resources/github-james4ever0-agi-computer-control/) — Date not recorded
  Experimental monorepo for computer-control agents with a tmux terminal environment, a web recorder for GUI and terminal sessions in noVNC/ttyd Docker workers, and random-input data collection.
- [Deck](https://awesomecua.com/zh/resources/github-cofy-x-deck/) — Date not recorded
  Deck is an open-source desktop cockpit for managing isolated local AI agent sandboxes, desktop sessions, and developer handoffs.
- [Deskfish](https://awesomecua.com/zh/resources/github-0x11c11e-deskfish/) — Date not recorded
  Deskfish is a VS Code extension that gives AI agents an isolated virtual desktop container viewable and steerable inside the editor.
- [deskpal](https://awesomecua.com/zh/resources/github-b1tank-deskpal/) — Date not recorded
  C-native Linux desktop-control MCP server supporting X11/Xwayland, AT-SPI accessibility trees, OCR, and isolated displays.
- [DeskSwarm](https://awesomecua.com/zh/resources/github-ahmedvnabil-deskswarm/) — Date not recorded
  Self-hosted fleet manager for provisioning and dispatching natural-language tasks across parallel XFCE Linux desktop sandboxes.
- [Desktop Action Agent](https://awesomecua.com/zh/resources/github-dax0056-desktop-action-agent/) — Date not recorded
  Sandboxed local computer-automation agent reference architecture with window detection and action verification.
- [Desktop Commander MCP](https://awesomecua.com/zh/resources/github-wonderwhy-er-desktopcommandermcp/) — Date not recorded
  Desktop Commander MCP is a Model Context Protocol server for terminal process control, interactive REPLs, and surgical file editing.
- [Desktop Computer Use (DCU)](https://awesomecua.com/zh/resources/github-dev-willbird1936-desktop-computer-use/) — Date not recorded
  Background Windows computer-use MCP server that dispatches input to target applications without interrupting foreground user work.
- [DeskVNC](https://awesomecua.com/zh/resources/github-psmux-deskvnc/) — Date not recorded
  Pure-Rust VNC, RDP, and SSH remote desktop client with Tauri UI for managing agent and remote machines.
- [dibs](https://awesomecua.com/zh/resources/github-joshteravest-dibs/) — Date not recorded
  Local coordination hub and lock manager that lets multiple AI agents reserve and use computer-use resources without colliding.
- [DispatchShield](https://awesomecua.com/zh/resources/github-venusone-lee-dispatchshield/) — Date not recorded
  macOS utility that keeps a Mac awake for unattended computer-use agents while shielding the active session from local input.
- [Dockur Windows](https://awesomecua.com/zh/resources/github-dockur-windows/) — Date not recorded
  Dockur Windows runs full Windows desktop environments inside Docker/KVM containers with web VNC viewer support for agent sandboxes.
- [Doppel](https://awesomecua.com/zh/resources/github-orvii-doppel/) — Date not recorded
  Doppel is a computer-use agent that operates inside a dedicated virtual desktop with its own cursor on Windows 11 and Linux.
- [DroidFleet](https://awesomecua.com/zh/resources/github-c00l-k1d-droidfleet/) — Date not recorded
  Open-source Android device fleet management and orchestration platform for mobile automation and testing.
- [DSB (逗沙包)](https://awesomecua.com/zh/resources/github-tianye1999-dsb/) — Date not recorded
  DSB is a trust-first Android AI agent that executes delegated app tasks on a background virtual display without interrupting the user's screen.
- [dsh-antibrow](https://awesomecua.com/zh/resources/github-antibrow-dsh-antibrow/) — Date not recorded
  DeepSeek Harness plugin integrating the AntiBrow anti-detect browser for stealth web automation.
- [dsh-cloak-browser](https://awesomecua.com/zh/resources/github-maxiaovivi-dsh-cloak-browser/) — Date not recorded
  Native CloakBrowser plugin for DeepSeek Harness providing isolated anti-detect browser sessions and DOM snapshots.
- [dsh-computer-use](https://awesomecua.com/zh/resources/github-xiaoheizi1212-dsh-computer-use/) — Date not recorded
  Model-agnostic Computer Use plugin for DeepSeek Harness combining an isolated browser, a native Windows UI helper, and action observation.
- [dsh-plugin-openbot](https://awesomecua.com/zh/resources/github-jimmyjdejesus-cmyk-dsh-plugin-openbot/) — Date not recorded
  Native Cordis plugin for DeepSeek Harness integrating CopilotKit OpenBot container sandboxing and computer use.
- [dsh-vdesktop](https://awesomecua.com/zh/resources/github-jafewff-dsh-vdesktop/) — Date not recorded
  dsh-vdesktop runs Windows GUI applications inside an invisible Win32 virtual desktop (`CreateDesktopW`) and exposes 12 `vdesk_*` agent control tools.
- [Dugle Browser](https://awesomecua.com/zh/resources/github-duckmartians-dugle-browser/) — Date not recorded
  Custom Chromium build with engine-level compiled device fingerprints for stealth browser automation.
- [E2B](https://awesomecua.com/zh/resources/github-e2b-dev-e2b/) — Date not recorded
  Cloud sandbox infrastructure for agents, with a Desktop SDK that exposes screenshots, mouse and keyboard control, application launch, and streaming.
- [E2B](https://awesomecua.com/zh/resources/url-fda52d641c6b482bda7b/) — Date not recorded
  Sandbox infrastructure for executing agent workloads.
- [E2B Desktop](https://awesomecua.com/zh/resources/github-e2b-dev-desktop/) — Date not recorded
  Open-source, isolated Linux Xfce desktop sandboxes for computer-use agents, driven from Python or JavaScript SDKs with screen streaming, mouse, keyboard and window control, screenshots and shell.
- [E2B Surf](https://awesomecua.com/zh/resources/github-e2b-dev-surf/) — Date not recorded
  E2B Surf is a web-based computer-use agent combining OpenAI Computer-Using Agent models with an isolated E2B Desktop virtual machine.
- [EdgeBox](https://awesomecua.com/zh/resources/github-bigppwong-edgebox/) — Date not recorded
  EdgeBox provisions isolated local Linux desktop virtual machines with WebRTC streaming and snapshot rollback for running computer-use agents.
- [ego lite](https://awesomecua.com/zh/resources/github-citrolabs-ego-lite/) — Date not recorded
  ego lite is a desktop browser that gives agents separate browsing Spaces and exposes page snapshots and actions through the ego-browser integration.
- [ego(lite)](https://awesomecua.com/zh/resources/url-45dabd68921824b298ca/) — Date not recorded
  A Chromium browser that lets AI agents automate signed-in websites through an agent skill, with separate workspaces for agent tasks and page snapshots for navigation.
- [ELVES](https://awesomecua.com/zh/resources/github-mvmcode-elves/) — Date not recorded
  ELVES is a cross-platform desktop application for orchestrating multi-agent coding teams inside isolated Git worktrees with MCP integration.
- [Firecrawl](https://awesomecua.com/zh/resources/url-a06f5cb81d3c41338bb6/) — Date not recorded
  Hosted web data API for AI agents that searches and scrapes pages into Markdown or JSON, with an Interact endpoint and browser sandbox in which prompts or Playwright code click, type and fill forms.
- [FIVE-UI-Evol](https://awesomecua.com/zh/resources/github-microsoft-five-ui-evol/) — Date not recorded
  Microsoft monorepo for InfiniteWeb website and task-evaluator synthesis, the UI-E2I-Synth grounding evaluation script and UI-I2E-Bench leaderboard, and UI-Evol trajectory-based knowledge refinement.
- [Floom OpenBrowser](https://awesomecua.com/zh/resources/github-floomhq-openbrowser/) — Date not recorded
  OpenBrowser is an open-source browser automation broker managing persistent Chrome profiles and proxy-aware sessions for AI agents.
- [forge (Readable ReAct Agent)](https://awesomecua.com/zh/resources/github-musokean-forge/) — Date not recorded
  Modular Python ReAct agent framework with a 235-line core loop and 31 opt-in sandbox, browser, and computer-use modules.
- [FurlPay Bot](https://awesomecua.com/zh/resources/github-furlpay-furlpay-bot/) — Date not recorded
  Persistent AI teammate equipped with its own virtual computer, browser, long-term memory, and voice interface.
- [GBOX](https://awesomecua.com/zh/resources/github-babelcloud-gbox/) — Date not recorded
  An environment service with CLI and MCP access that lets agents operate Android apps and desktop applications, including browsers and terminals.
- [Ghost Semantic OS](https://awesomecua.com/zh/resources/github-zainmfjavaid-ghost-semantic-os/) — Date not recorded
  Ghost Semantic OS provides a text-only semantic accessibility runtime for operating Linux desktop applications in OSWorld without screenshots.
- [GhostDesk](https://awesomecua.com/zh/resources/github-yv17labs-ghostdesk/) — Date not recorded
  GhostDesk is an MCP server and sandboxed virtual desktop runtime that gives LLM agents screen vision, mouse/keyboard control, and shell access.
- [Gloria](https://awesomecua.com/zh/resources/github-sh7vansh-gloria/) — Date not recorded
  Remote Chromium workstation for AI agents and human operators exposed over Model Context Protocol and noVNC.
- [Gloria Headless](https://awesomecua.com/zh/resources/github-sh7vansh-gloria-headless/) — Date not recorded
  Containerized headless Chromium environment with native Model Context Protocol integration for autonomous web agents.
- [glovebox-mcp](https://awesomecua.com/zh/resources/github-segentic-lab-glovebox-mcp/) — Date not recorded
  Sandboxed computer-use MCP server that lets AI agents drive browsers and desktop apps inside an isolated nested X11 window.
- [GoLogin MCP Server](https://awesomecua.com/zh/resources/github-gologinapp-gologin-mcp/) — Date not recorded
  GoLogin MCP Server allows AI agents to manage anti-detect browser profiles, proxies, fingerprints, and cloud browser sessions.
- [GUI Exploration Lab](https://awesomecua.com/zh/resources/github-summoneryhl-gelab-engine/) — Date not recorded
  A synthetic GUI environment with configurable screens, icons and navigation graphs for training and evaluating agents on screen navigation.
- [GUI Label Tool](https://awesomecua.com/zh/resources/github-ethanyxx-gui-label-tool/) — Date not recorded
  GUI Label Tool records and annotates human desktop trajectories inside a Dockerized QEMU virtual machine with paired input events and screenshots.
- [GUI-Docker-Env](https://awesomecua.com/zh/resources/github-computer-use-agents-gui-docker-env/) — Date not recorded
  GUI-Docker-Env hosts OSWorld Ubuntu desktop simulators in Docker, with configurable VM images, authentication, concurrency limits and status endpoints.
- [HAICOSYSTEM](https://awesomecua.com/zh/resources/github-xuhuizhou-haicosystem/) — Date not recorded
  HAICOSYSTEM simulates multi-turn interactions between human users, tool-using LLM agents, and environment sandboxes to evaluate safety risks.
- [Halo Bot](https://awesomecua.com/zh/resources/github-galactic717-halo-bot/) — Date not recorded
  Self-hosted named AI teammates running in sandboxed desktop and browser environments on user-owned hardware.
- [Harborage](https://awesomecua.com/zh/resources/github-vadym-iefremov-harborage/) — Date not recorded
  On-demand pool manager providing isolated headless browser sessions for concurrent AI web agents.
- [headless-use](https://awesomecua.com/zh/resources/github-flyingsquirrel0419-headless-use/) — Date not recorded
  Headless Linux browser runtime and CLI giving coding agents a real Chromium browser with persistent sessions.
- [HeroDesktop](https://awesomecua.com/zh/resources/github-deathlegionteamlk-herodesktop/) — Date not recorded
  HeroDesktop is an open-source virtual desktop sandbox for running and observing AI computer-use agents.
- [Hronaut](https://awesomecua.com/zh/resources/github-hronaut-hronaut/) — Date not recorded
  Visible, persistent, dedicated browser runtime that coding agents can control without interrupting the user's personal browser.
- [Hronaut](https://awesomecua.com/zh/resources/github-hronaut-hronaut-vscode/) — Date not recorded
  A VS Code extension that connects editor agents to Hronaut's local browser MCP server, providing a separate visible browser workspace for each project.
- [Hronaut](https://awesomecua.com/zh/resources/url-848e19da3bdf0aeb500c/) — Date not recorded
  A local browser workspace for agents, exposed through MCP. It supports isolated task sessions, visible browser use and reconnection to existing tabs.
- [Hronaut for Claude Code](https://awesomecua.com/zh/resources/github-hronaut-hronaut-claude-plugin/) — Date not recorded
  Hronaut for Claude Code is a plugin that supplies a coding agent with an MCP server and skill for using a visible browser in a separate project workspace.
- [Hyperbrowser](https://awesomecua.com/zh/resources/url-053ebfe0afac66c86222/) — Date not recorded
  Browser infrastructure and automation services for AI agents.
- [Hyprland Codex Background Computer Use](https://awesomecua.com/zh/resources/github-gabriel-kahen-hyprland-codex-background-computer-use/) — Date not recorded
  Enables background Codex computer control of Hyprland Wayland and XWayland applications without stealing focus.
- [i3-cua-mcp](https://awesomecua.com/zh/resources/github-smirnov-labs-i3-computer-use-mcp/) — Date not recorded
  An MCP server for i3 desktops on X11 that exposes window data, screenshots and input controls. It maps coordinates from captured frames to desktop positions and includes a Xephyr sandbox.
- [ibara](https://awesomecua.com/zh/resources/github-mayberrydt-ibara/) — Date not recorded
  ibara connects MCP-enabled agents to spare Omarchy computers for desktop and browser tasks. A console displays screens and tasks and lets a person take control.
- [Interlock Relay](https://awesomecua.com/zh/resources/github-wsk-build-interlock-relay/) — Date not recorded
  Interlock Relay is an Android library that connects sandboxed agents to host-app capabilities through an approval gate. It provides execution backends, quotas, artifacts, and audit logs.
- [invisible_dots](https://awesomecua.com/zh/resources/github-feder-cr-invisible-dots/) — Date not recorded
  invisible_dots is a self-hosted cloud browser-agent workspace pairing isolated KVM virtual machines with anti-detect Firefox automation.
- [Ivy Tendril](https://awesomecua.com/zh/resources/github-ivy-interactive-ivy-tendril/) — Date not recorded
  Ivy Tendril is a desktop orchestrator for running parallel coding agents across isolated Git worktrees.
- [Jet Browser](https://awesomecua.com/zh/resources/github-masakaai-jet-browser/) — Date not recorded
  Jet Browser packages WPE WebKit and a Rust WebDriver bridge into an isolated, low-footprint container runtime for AI web agents.
- [jmeguilos Computer Use MCP](https://awesomecua.com/zh/resources/github-jmeguilos-computer-use-mcp/) — Date not recorded
  Window-scoped macOS computer-use server over local stdio MCP using native ScreenCaptureKit and Accessibility APIs.
- [Kernel](https://awesomecua.com/zh/resources/github-kernel-kernel-images/) — Date not recorded
  Kernel supplies isolated Chrome browser instances for web agents and automation. Its images support remote control, live viewing, and session recording.
- [Kernel Claude Computer Use Loop](https://awesomecua.com/zh/resources/github-kernel-claude-cu-loop-sample/) — Date not recorded
  Reference SDK implementation of Anthropic's Claude Computer Use agent loop driving remote cloud browsers via Kernel's Computer Controls API.
- [Kernel CLI](https://awesomecua.com/zh/resources/github-onkernel-cli/) — Date not recorded
  Kernel CLI manages sandboxed Chrome sessions for browser automation and web agents. It can deploy applications, invoke actions, and provide live views of managed browsers.
- [Kernel MCP Server](https://awesomecua.com/zh/resources/github-kernel-kernel-mcp-server/) — Date not recorded
  Kernel MCP Server connects AI agents to low-latency cloud browser sandboxes and serverless execution environments on Kernel.
- [Korgo Bot](https://awesomecua.com/zh/resources/github-nickvasilescu-korgo-bot/) — Date not recorded
  Korgo Bot is a macOS app for persistent bots that share a cloud desktop. Bots can use screen and file tools or send GUI and browser tasks to a hosted agent.
- [Kortix Suna](https://awesomecua.com/zh/resources/github-kortix-ai-suna/) — Date not recorded
  Kortix Suna is an open-source generalist agent platform combining a containerized browser, code interpreter, file manager, and tool runtime.
- [kwin-mcp](https://awesomecua.com/zh/resources/github-isac322-kwin-mcp/) — Date not recorded
  Model Context Protocol server for Linux KDE Plasma 6 Wayland desktop GUI automation providing 29 tools for virtual KWin sessions, AT-SPI, and input.
- [Latere Sandbox Images](https://awesomecua.com/zh/resources/github-latere-ai-sandbox-images/) — Date not recorded
  Container images for coding and computer-use desktop agents compatible with Docker, Podman, and Cella sandboxes.
- [Latitude Browser](https://awesomecua.com/zh/resources/github-djblack1209-coder-latitude-browser/) — Date not recorded
  Desktop workspace for managing isolated browser profiles, proxy routing, and multi-session web automation.
- [Lightpanda Browser](https://awesomecua.com/zh/resources/github-lightpanda-io-browser/) — Date not recorded
  A headless browser for AI agents and automation, with released Linux and macOS binaries and interfaces for browser control and scripted tasks.
- [Linux CUA (5omeotherguy)](https://awesomecua.com/zh/resources/github-5omeotherguy-linux-computer-use/) — Date not recorded
  Linux desktop toolkit for computer-use agents providing isolated X11 workspaces, window capture, and input synthesis.
- [LLM-in-Sandbox](https://awesomecua.com/zh/resources/github-llm-in-sandbox-llm-in-sandbox/) — Date not recorded
  LLM-in-Sandbox equips language models with virtualized Linux computer sandboxes and RL training pipelines for multi-turn task execution.
- [Locopilot](https://awesomecua.com/zh/resources/github-pradhankukiran-locopilot/) — Date not recorded
  Supervised Linux desktop automation copilot featuring sandboxed execution, policy guardrails, and rollback checkpoints.
- [loki-auto](https://awesomecua.com/zh/resources/github-loki4agent-loki-auto/) — Date not recorded
  Zero-dependency in-browser web automation runtime with an embedded sandbox and Model Context Protocol server for LLMs.
- [Lume](https://awesomecua.com/zh/resources/github-trycua-lume/) — Date not recorded
  Virtual machine management for local computer-use environments.
- [Mantis](https://awesomecua.com/zh/resources/github-mercurialsolo-mantis/) — Date not recorded
  Mantis is a unified perception-reasoning-action computer-use agent that drives browsers and Xvfb desktop applications from structured plans.
- [Midscene PC Docker](https://awesomecua.com/zh/resources/github-mofangbao-midscene-pc-docker/) — Date not recorded
  Midscene PC Docker packages an Ubuntu GNOME desktop with Chrome and a Midscene PC automation service, exposing the graphical environment through VNC.
- [mistudio0902-lab Chrome Bridge](https://awesomecua.com/zh/resources/github-mistudio0902-lab-chrome-bridge/) — Date not recorded
  Model Context Protocol bridge enabling Claude Code and Codex to operate multiple logged-in Chrome profiles concurrently.
- [modal-computer-use](https://awesomecua.com/zh/resources/github-ashtonchew-modal-computer-use/) — Date not recorded
  Provides daemon-first computer-use primitives for provisioning and controlling GUI desktops inside Modal cloud sandboxes.
- [MuseLite](https://awesomecua.com/zh/resources/github-yxq953-muselite/) — Date not recorded
  MuseLite is a Python-first AI agent workspace for Android combining chat, execution sandboxes, browser automation, and scheduled tasks.
- [MyMusic](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-neteasecloudmusic/) — Date not recorded
  A simplified Android music app with fixed local data and action records for checking whether mobile GUI agents complete tasks.
- [MyPCBench VM images](https://awesomecua.com/zh/resources/url-01b4f010bda4dc4a5731/) — Date not recorded
  MyPCBench VM images provides disk images for evaluating computer-use agents on seeded web apps, alongside a task suite with grading rubrics.
- [Napaxi](https://awesomecua.com/zh/resources/github-antgroup-napaxi/) — Date not recorded
  Mobile-native agent SDK by Ant Group for building on-device AI agents with sandboxed skill execution.
- [Nehemiah](https://awesomecua.com/zh/resources/github-boringcomputers-nehemiah/) — Date not recorded
  Nehemiah provisions on-demand Linux Firecracker microVMs equipped with a browser and desktop environment for AI agents.
- [Neo Lab](https://awesomecua.com/zh/resources/github-belarusian-neo-lab/) — Date not recorded
  Neo Lab is a macOS computer-use sandbox for recording demonstrations, replaying skills, and testing GUI automation plans.
- [Nexus Computer Use Harness (NexusCUH)](https://awesomecua.com/zh/resources/github-subasah-computer-use-harness/) — Date not recorded
  NexusCUH is a computer-use agent harness with sandboxed execution, MCP integration, policy guardrails, and trace observability.
- [Nik-Browser MCP](https://awesomecua.com/zh/resources/github-nikolay-3d-nik-browser-mcp/) — Date not recorded
  Local Model Context Protocol server providing LLMs with an independent, persistent-login Chromium browser and DOM snapshots.
- [Numera Browser](https://awesomecua.com/zh/resources/github-kiarosama-numera-browser/) — Date not recorded
  Local-first multi-profile browser manager for isolated testing and agentic web automation.
- [Obscura](https://awesomecua.com/zh/resources/github-h4ckf0r0day-obscura/) — Date not recorded
  Obscura is a Rust headless browser for agent automation. It runs JavaScript, exposes the Chrome DevTools Protocol and supports screenshots and browser automation tools.
- [Obscura browser plugin for Hermes](https://awesomecua.com/zh/resources/github-sgavrl-hermes-plugin-obscura/) — Date not recorded
  A Hermes browser-provider plugin that routes browser-agent tools through an Obscura CDP server. It can start a local server per session or connect to an existing one.
- [Oculr MCP](https://awesomecua.com/zh/resources/github-oculr-ai-oculr-mcp/) — Date not recorded
  Model Context Protocol server for driving isolated, anti-detect Oculr Chromium profiles over MCP and raw CDP.
- [Open Claudex Computer Use](https://awesomecua.com/zh/resources/github-opencodexlabs-open-codex-computer-use/) — Date not recorded
  Open-source background macOS computer-use MCP server for Claude Code and Codex.
- [Open Computer](https://awesomecua.com/zh/resources/github-mintplex-labs-open-computer/) — Date not recorded
  Open Computer gives agents an isolated Debian desktop with a browser and native app controls. People can watch and assist through a live interface.
- [Open Computer Use](https://awesomecua.com/zh/resources/github-e2b-dev-open-computer-use/) — Date not recorded
  Open Computer Use runs open-source vision-language models inside an E2B Desktop cloud Linux sandbox for autonomous GUI task execution.
- [Open Duet (open-dots)](https://awesomecua.com/zh/resources/github-anil-matcha-open-dots/) — Date not recorded
  Open Duet is a self-hosted multi-agent workspace where named AI coworkers operate isolated sandboxes, browsers, and terminals.
- [open-cowork](https://awesomecua.com/zh/resources/github-coasty-ai-open-cowork/) — Date not recorded
  open-cowork is an open-source computer-use coworker that operates local desktops, cloud VMs, and browsers with human-in-the-loop approval.
- [OpenAgentFleet](https://awesomecua.com/zh/resources/github-robbyczgw-cla-openagentfleet/) — Date not recorded
  Local-first multi-agent desktop platform with named AI coworkers and a watchable Linux virtual desktop.
- [OpenAI Codex CLI](https://awesomecua.com/zh/resources/github-openai-codex/) — Date not recorded
  OpenAI Codex CLI is a local terminal and desktop coding agent that executes commands and edits files inside OS-enforced sandboxes.
- [OpenBridge](https://awesomecua.com/zh/resources/github-afk-surf-openbridge/) — Date not recorded
  A local macOS agent app that can inspect and operate desktop applications after approval and offers a sandbox for reviewing proposed file changes.
- [OpenDesktop & OpenWorker](https://awesomecua.com/zh/resources/github-chrisschouk-open-desktop/) — Date not recorded
  Cloud desktop infrastructure and container sandbox engine paired with the OpenWorker conversational desktop agent.
- [OpenHands](https://awesomecua.com/zh/resources/github-openhands-openhands/) — Date not recorded
  OpenHands is an open-source platform for software development and computer-use agents equipped with a sandboxed shell, code editor, and browser.
- [OpenMausBot](https://awesomecua.com/zh/resources/github-milind-soni-openmausbot/) — Date not recorded
  Desktop chat app whose bots run local Claude, Codex or Grok CLIs and each get a computer: a cloud Linux desktop, local VM, VPS or the host through Cua Driver, plus a built-in browser and approval cards.
- [OpenMinis](https://awesomecua.com/zh/resources/github-openminis-openminis/) — Date not recorded
  An open-source mobile agent for iOS and Android that interacts with websites and device tools while running scripts in an on-device Linux sandbox.
- [OpenMobile-2 extended Android AVDs](https://awesomecua.com/zh/resources/url-f039da43799772645c92/) — Date not recorded
  Seven preconfigured Pixel 6 emulator images for Android API 33 (arm64) with an Apple Silicon install script, listed in the OpenMobile-2 release as its extended Android AVDs.
- [Orbit UI](https://awesomecua.com/zh/resources/github-aadya940-orbit-ui/) — Date not recorded
  Self-hosted visual workflow builder for authoring and running desktop computer-use automation inside Docker containers.
- [OSWorld Ubuntu VM images](https://awesomecua.com/zh/resources/url-346ca54794cbdffc8797/) — Date not recorded
  Hub host of OSWorld's prebuilt Ubuntu virtual machines: VMware archives for x86 and arm64 and a QEMU qcow2 archive, which OSWorld's VMware and Docker providers download on first run.
- [OSWorld VirtualBox Ubuntu image](https://awesomecua.com/zh/resources/url-ce775111626bae220596/) — Date not recorded
  Hub host of the Ubuntu virtual machine archive that OSWorld's VirtualBox provider downloads on x86 hosts and imports with VBoxManage; the repository has no card or license declaration.
- [OSWorld Web](https://awesomecua.com/zh/resources/github-task-web-osworld-web/) — Date not recorded
  Docker Compose stack of self-hosted web applications, such as banking, email, CRM, calendar, Overleaf and an AWS console, served behind a Caddy reverse proxy as the websites for OSWorld-V2 tasks.
- [OSWorld Windows VM images](https://awesomecua.com/zh/resources/url-232a1698849e2fea425c/) — Date not recorded
  Hub host of OSWorld's prebuilt Windows 10 virtual machines: a VMware archive and a QEMU qcow2 archive, which OSWorld's VMware and Docker providers download on first run of a Windows task.
- [OvoBrowser](https://awesomecua.com/zh/resources/github-ovobrowsersupport-ovobrowser/) — Date not recorded
  Source-level Chromium fingerprint browser engineered for anti-detect web automation.
- [ovoBrowser](https://awesomecua.com/zh/resources/github-ovobrowsersupport-ovobrowser-manger/) — Date not recorded
  ovoBrowser is a desktop client for managing isolated browser profiles and proxies. Its local API exposes opened profiles to browser automation tools.
- [Oya Browser](https://awesomecua.com/zh/resources/github-oyadotai-oya-browser/) — Date not recorded
  Oya Browser is a governance-aware browser control plane for human-AI collaboration across local and cloud browser providers.
- [parallel-browser-mcp](https://awesomecua.com/zh/resources/github-etairl-parallel-browser-mcp/) — Date not recorded
  Model Context Protocol server for parallel multi-session browser automation across local and cloud browser providers.
- [Parallels CLI Skill for Codex](https://awesomecua.com/zh/resources/github-wieslawsoltes-parallelsskill/) — Date not recorded
  Portable Codex skill for provisioning, snapshotting, and controlling Parallels Desktop virtual machines on macOS.
- [Peerframe OpenBot](https://awesomecua.com/zh/resources/github-peerframe-openbot/) — Date not recorded
  Self-hosted cross-platform control plane for managing persistent digital employees with browser and desktop capabilities.
- [Pegoles Agent](https://awesomecua.com/zh/resources/github-zezortdx-pegoles-agent/) — Date not recorded
  Pegoles Agent runs a macOS computer-use controller against an isolated Linux virtual machine with deterministic pre-execution policy checks.
- [Personae Browser](https://awesomecua.com/zh/resources/github-leek-emperor-personae/) — Date not recorded
  Desktop browser where every identity runs in an isolated Chromium partition for multi-account human and agent workflows.
- [Pi Nodriver Browser](https://awesomecua.com/zh/resources/github-ayasakura-comp-pi-nodriver-browser/) — Date not recorded
  Pi coding-agent browser extension powered by Nodriver, headful Chrome, and Xvfb virtual displays.
- [pi-playwright-browser](https://awesomecua.com/zh/resources/github-sunnybharne-pi-playwright-browser/) — Date not recorded
  Isolated Playwright Chromium browser tools for the Pi coding agent.
- [Piskie](https://awesomecua.com/zh/resources/github-piskie-dev-piskie/) — Date not recorded
  Desktop AI agent for the real web equipped with a built-in anti-detect fingerprint browser.
- [Plow Latch](https://awesomecua.com/zh/resources/github-plow-pbc-latch/) — Date not recorded
  A Mac application that lets remote agents operate a browser and local tools through approved intents, with sandboxed execution and an audit log.
- [Prism Browser Community](https://awesomecua.com/zh/resources/github-dfarm6-prism-browser-community/) — Date not recorded
  Local-first open-source multi-profile fingerprint browser built on Chromium and Electron for isolated web automation.
- [ProfileFleet](https://awesomecua.com/zh/resources/github-enginefuture-profilefleet/) — Date not recorded
  Local-first TypeScript orchestration plane for managing persistent fingerprint-browser profiles across AI agents.
- [Puppeteer MCP Server](https://awesomecua.com/zh/resources/github-sultannaufal-puppeteer-mcp-server/) — Date not recorded
  Self-hosted Puppeteer MCP server with remote Server-Sent Events (SSE) transport, API key authentication, and Docker deployment.
- [QAgent](https://awesomecua.com/zh/resources/github-rishabhcli-qagent/) — Date not recorded
  QAgent is a local-first web QA and repair agent with an Electron desktop UI, CLI, MCP server, and isolated Git worktree execution.
- [qdesk](https://awesomecua.com/zh/resources/github-jackwangfeng-qdesk/) — Date not recorded
  qdesk is an open-source AI agent desktop sandbox providing an isolated Linux and Chromium environment controllable over HTTP.
- [Qubicl](https://awesomecua.com/zh/resources/github-eldanring-qubicl/) — Date not recorded
  Provisions isolated local virtual computers so AI agents can operate a private desktop without touching the host session.
- [QuickDesk](https://awesomecua.com/zh/resources/github-barry-ran-quickdesk/) — Date not recorded
  QuickDesk is an AI-native remote desktop client and host with a built-in MCP server for streaming screens and controlling remote computers.
- [RecreationWorld](https://awesomecua.com/zh/resources/github-qwenlm-recreationworld/) — Date not recorded
  Framework for hybrid computer-use agents that inspect running reference apps, implement replicas with coding tools, and verify behavior across five platforms.
- [redroid](https://awesomecua.com/zh/resources/github-remote-android-redroid-doc/) — Date not recorded
  redroid provides containerized Android instances on Linux hosts, with ADB connectivity and configurable displays for mobile automation environments.
- [RedTeamCUA](https://awesomecua.com/zh/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
- [Relay AI Virtual Desktop](https://awesomecua.com/zh/resources/github-jahrulnr-virtual-desktop/) — Date not recorded
  Browser-streamed Docker Linux desktop shared between humans and AI agents with a Go MCP computer-use server.
- [Rocuronium](https://awesomecua.com/zh/resources/github-kageroumado-rocuronium/) — Date not recorded
  Isolates macOS computer-use agents inside a separate login session while rendering a live visible-agent overlay on the host screen.
- [Sandbar](https://awesomecua.com/zh/resources/github-jdrolls-sandbar/) — Date not recorded
  A self-hosted Linux desktop container for computer-use agents, with a browser-streamed workspace, human takeover, and optional API and MCP control.
- [Sandbar](https://awesomecua.com/zh/resources/github-jdrolls-sandbar-public/) — Date not recorded
  Sandbar provisions isolated cloud Ubuntu desktop virtual machines equipped with OpenClaw and VNC streaming for computer-use agents.
- [Sandbox0](https://awesomecua.com/zh/resources/github-sandbox0-ai-sandbox0/) — Date not recorded
  Sandbox0 is an open-source cloud sandbox platform with persistent storage volumes and sub-second microVM/container resume for AI agents.
- [ScienceBoard VMware environment](https://awesomecua.com/zh/resources/url-75917f2c2b2802aafd3e/) — Date not recorded
  A prebuilt Ubuntu virtual-machine archive containing the software environment used for ScienceBoard scientific computer-use tasks.
- [Scrapeless Playwright Cloud Browser](https://awesomecua.com/zh/resources/github-pedro-scrapeless-scrapeless-playwright/) — Date not recorded
  Connects Playwright scripts and browser agents to the Scrapeless anti-detection cloud Chromium browser over CDP.
- [Scrapeless Scraping Browser](https://awesomecua.com/zh/resources/github-scraperapigather-scrapeless-scraping-browser/) — Date not recorded
  A managed Chromium browser reached through WebSocket and controlled with Puppeteer or Playwright, with configurable sessions, fingerprints and network egress.
- [screen2gym](https://awesomecua.com/zh/resources/github-marc-saouda-screen2gym/) — Date not recorded
  screen2gym compiles raw action-labeled screen recordings into resettable, programmatically gradable RL environments for computer-use agents.
- [Self-Hosted Cloud Browser MCP](https://awesomecua.com/zh/resources/github-bk927-cloud-browser-mcp/) — Date not recorded
  Self-hosted Chromium MCP server with isolated browser profiles, OAuth authentication, and human takeover support.
- [SentinelDesk](https://awesomecua.com/zh/resources/github-sentineldesk-desktop/) — Date not recorded
  Collaborative Linux desktop streamed to the browser where humans and AI agents share a workspace.
- [Serpent.AI](https://awesomecua.com/zh/resources/github-serpentai-serpentai/) — Date not recorded
  A Python framework for building agents that interact with native video games, using plugins and support modules to turn games into research environments.
- [serve-sim](https://awesomecua.com/zh/resources/github-evanbacon-serve-sim/) — Date not recorded
  A CLI that streams a booted iOS Simulator to a browser preview over MJPEG and WebSocket, with commands and an Agent Skill that let coding agents send taps, gestures, text and button presses.
- [Shinken](https://awesomecua.com/zh/resources/github-meirtz-shinken/) — Date not recorded
  Shinken is a high-throughput runtime for training computer-use agents end-to-end with reinforcement learning across parallel real desktops.
- [SlyBrowser](https://awesomecua.com/zh/resources/github-virtualfanc-slybrowser/) — Date not recorded
  Anti-detect Chromium browser built for agentic web automation and authorized scraping with native humanized input.
- [SoftwareGym](https://awesomecua.com/zh/resources/github-mrkiing-jin-softwaregym/) — Date not recorded
  SoftwareGym synthesizes runnable GUI applications as environments for computer-use agents. It tests generated apps through screenshot-based actions in Ubuntu virtual machines and uses feedback to repair them.
- [SpaceO](https://awesomecua.com/zh/resources/github-parthjadhav-spaceo/) — Date not recorded
  Gives AI computer-use agents dedicated virtual macOS displays so they operate real apps without taking over the user's screen or cursor.
- [SparkBridge](https://awesomecua.com/zh/resources/github-musicjazz5-nvidia-dgx-spark/) — Date not recorded
  Human-approved isolated browser bridge for local AI agents running on NVIDIA DGX Spark workstations.
- [Steel Browser](https://awesomecua.com/zh/resources/github-steel-dev-steel-browser/) — Date not recorded
  Open-source browser API managing Chrome sessions for agents, reachable through Puppeteer, Playwright or Selenium over CDP, with persisted cookies, proxy rotation, stealth and a session debugging UI.
- [Steel Cloud](https://awesomecua.com/zh/resources/url-b940a884f200a916a61b/) — Date not recorded
  Managed browser infrastructure associated with Steel Browser.
- [Steel Node API Library](https://awesomecua.com/zh/resources/github-steel-dev-steel-node/) — Date not recorded
  TypeScript and JavaScript client for the Steel cloud browser API, with typed calls to create browser sessions, send computer actions, solve CAPTCHAs and manage files, profiles and credentials.
- [Steel Python API library](https://awesomecua.com/zh/resources/github-steel-dev-steel-python/) — Date not recorded
  Python client for the Steel cloud browser API, with synchronous and asynchronous clients and typed calls to create browser sessions, send computer actions, solve CAPTCHAs and manage files and profiles.
- [SWE-agent](https://awesomecua.com/zh/resources/github-swe-agent-swe-agent/) — Date not recorded
  SWE-agent introduces Agent-Computer Interfaces (ACI) enabling language models to autonomously navigate repositories, edit code, and run tests.
- [TabCtrl](https://awesomecua.com/zh/resources/github-g1at-tabctrl/) — Date not recorded
  Bring-your-own-key multi-model browser agent for Chrome and Edge with per-task tab isolation.
- [Tailorec Browser Orchestrator](https://awesomecua.com/zh/resources/github-tailorec-tailorec-browser-orch/) — Date not recorded
  Run-isolated browser orchestration service that converts webpages into semantic snapshots with stable element references.
- [TestDriver SDK](https://awesomecua.com/zh/resources/github-testdriverai-testdriverai/) — Date not recorded
  Vitest plugin that spawns ephemeral devices and uses vision-based LLMs to build end-to-end tests of web apps, desktop apps and browser extensions.
- [Trope CUA](https://awesomecua.com/zh/resources/github-tropeai-trope-cua/) — Date not recorded
  Trope CUA enables background desktop inspection and GUI operation on Windows and macOS without interrupting foreground user work.
- [Twiko](https://awesomecua.com/zh/resources/github-ezocomp118-source-twiko/) — Date not recorded
  Self-hosted platform provisioning dedicated virtual computers with browsers and terminals for autonomous AI teammates.
- [Undetectable Browser MCP Server](https://awesomecua.com/zh/resources/github-undetectable-io-undetectable-browser-mcp/) — Date not recorded
  Official TypeScript Model Context Protocol server wrapping the Undetectable Browser local API for profile management and web automation.
- [Unraid Camofox Stealth Browser](https://awesomecua.com/zh/resources/github-mircoblitz-unraid-camofox-stealth-browser/) — Date not recorded
  Unraid container template and Agent Skill for hosting a private Camofox anti-detect browser node for AI agents.
- [UseAgent](https://awesomecua.com/zh/resources/github-useagenthq-useagent/) — Date not recorded
  Open-source cloud and local sandbox platform for running Claude Code, Codex, or OpenCode with a full desktop and browser.
- [vadgr-agent-os](https://awesomecua.com/zh/resources/github-montbrain-vadgr-agent-os/) — Date not recorded
  An early Linux container runtime for computer-use agents, with a virtual desktop, browsers, development tools, and an MCP interface for desktop control.
- [Valk](https://awesomecua.com/zh/resources/github-ercbot-valk/) — Date not recorded
  Valk is a Python library and observable remote-desktop interface for programmatic mouse, keyboard, and screen control by AI agents.
- [vePhone](https://awesomecua.com/zh/resources/github-volcengine-vephone/) — Date not recorded
  vePhone supplies remotely controlled cloud phones and example integrations for mobile and computer-use agents, including task execution and result retrieval.
- [VK DeviceHub](https://awesomecua.com/zh/resources/github-vkcom-devicehub/) — Date not recorded
  A device-management system for viewing and controlling Android and iOS devices through a browser. It provides remote input, device inventory and a REST API.
- [VNC MCP Server](https://awesomecua.com/zh/resources/github-volkan-m-vnc-mcp-server/) — Date not recorded
  VNC MCP Server exposes remote desktop screenshots, OCR text localization, and mouse/keyboard control over the RFB/VNC protocol to MCP agents.
- [vnc-computer-use CLI](https://awesomecua.com/zh/resources/github-eyhn-vnc/) — Date not recorded
  Command-line interface for computer-use agents to capture screenshots and dispatch mouse and keyboard actions over VNC.
- [vnc-remote-control](https://awesomecua.com/zh/resources/github-bitranox-vnc-remote-control/) — Date not recorded
  Layout-aware VNC/RFB remote-control CLI providing typing, clicking, screenshot capture, and OCR against any VNC server.
- [vnc-use](https://awesomecua.com/zh/resources/github-mayflower-vnc-use/) — Date not recorded
  vnc-use is a LangGraph-based computer-use framework that drives remote desktop environments over VNC with multi-model LLM planners and hitl gates.
- [webarena-docker](https://awesomecua.com/zh/resources/github-mahirlabibdihan-webarena-docker/) — Date not recorded
  A Docker setup for WebArena websites provides scripts to start site containers and restore their state between experiments involving browser tasks.
- [webarena-setup](https://awesomecua.com/zh/resources/github-gasse-webarena-setup/) — Date not recorded
  Shell scripts that load the WebArena and VisualWebArena Docker images, create and patch the site containers, serve a homepage and run an optional reset server between agent evaluations.
- [WildAWM](https://awesomecua.com/zh/resources/github-msr-orchard-wildawm/) — Date not recorded
  WildAWM supplies a pipeline for generating computer environments and cross-interface tasks, with execution checks and tools for evaluating agents.
- [Windows Sandbox Computer Use Skill](https://awesomecua.com/zh/resources/github-2018wzh-windows-sandbox-computer-use/) — Date not recorded
  Windows-only agent skill for provisioning an isolated Windows Sandbox VM and driving it via visual computer use.
- [WinReach MCP](https://awesomecua.com/zh/resources/github-ghoui-winreach-mcp/) — Date not recorded
  Model Context Protocol server giving AI agents remote control over a dedicated Windows machine with PowerShell, screenshots, and UI input.
- [Wuying Agentic Mobile](https://awesomecua.com/zh/resources/url-df3102617f3a66c44fc9/) — Date not recorded
  Alibaba Cloud Wuying service that runs Qwen-driven agents (MobileUseAgent with OpenClaw) in cloud Android containers to carry out natural-language tasks across apps, for process automation and app testing.
- [Wuying Cloud Phone](https://awesomecua.com/zh/resources/url-9480f580f8bf9d3ba65d/) — Date not recorded
  Alibaba Cloud service of virtual Android phones run on ARM servers and streamed to users' devices, sold with a built-in Mobile Use Agent and an Agentic Mobile option that runs Qwen-driven agents in the phones.
- [ZennoBrowser MCP Server](https://awesomecua.com/zh/resources/github-zennolab-zennobrowser-mcp-server/) — Date not recorded
  Official Model Context Protocol server for controlling ZennoBrowser anti-detect browser profiles, proxies, cookies, and web actions.

## 学习资源

- [AI Agent Desktop Engineering Blueprint](https://awesomecua.com/zh/resources/github-men-zer-ai-agent-desktop-engineering-blueprint/) — Date not recorded
  Five-chapter architectural blueprint and comparative engineering guide for building desktop AI and computer-use agent applications.
- [learn-workbuddy](https://awesomecua.com/zh/resources/github-adongwanai-learn-workbuddy/) — Date not recorded
  24-chapter bilingual Python engineering course building a WorkBuddy-style desktop AI agent harness from scratch.
- [Solari Cookbook](https://awesomecua.com/zh/resources/github-solari-sdk-solari-cookbook/) — Date not recorded
  Solari Cookbook collects runnable examples for cloud browsers, sandboxes, and desktops, including browser session recording and screenshot, click, and typing operations on a Linux GUI.
