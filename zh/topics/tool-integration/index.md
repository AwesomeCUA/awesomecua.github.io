# 工具集成

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/tool-integration/records.jsonl

## 论文与综述

- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2610-22234/) — 2026-10-15
  Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning.
- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://awesomecua.github.io/resources/arxiv-2610-22200/) — 2026-10-15
  Introduces an open generalist computer-use stack combining visual and programmatic interaction, with model-controlled observation and task-state decisions.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.github.io/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [Web$hell: A Unified Interface for Agentic Web Access](https://awesomecua.github.io/resources/arxiv-2610-13416/) — 2026-10-09
  Introduces Web$hell, an interface that compiles live pages into persistent information and action objects so agents can gather evidence, navigate websites, and reuse acquired content through shared operations.
- [CUAWright: A Minimal Unified Interface for Digital Agents](https://awesomecua.github.io/resources/arxiv-2610-04116/) — 2026-10-02
  Studies a minimal terminal-based execution framework that lets digital agents construct tools and manage context across browser, desktop, and CAD tasks.
- [HybridCUA: Learning to Orchestrate GUI and CLI for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-38008/) — 2026-09-29
  Trains computer agents on verified GUI, command-line, and interleaved trajectories to learn when and how to combine interaction modes.
- [SCOUT: Synergizing Reasoning and Tool-Use for Computer-Use Safety](https://awesomecua.github.io/resources/arxiv-2609-36201/) — 2026-09-28
  Introduces SCOUT, a safety verifier that first derives task-specific completion and safety rubrics from a computer-use trajectory, then actively probes the resulting environment for evidence. It evaluates whether these two stages detect harmful consequences that screenshots alone can miss.
- [CUA-SWE: When Computer-Use Agents Meet Visual Software Engineering](https://awesomecua.github.io/resources/arxiv-2609-32600/) — 2026-09-26
  Introduces CUA-SWE, a benchmark and execution environment that combines code changes with graphical interaction and visual inspection of running software. Task-specific tests verify repairs and changes whose required information may be available only through the application interface.
- [RecreationWorld: Scalable and Verifiable Environments for Hybrid Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22000/) — 2026-09-18
  RecreationWorld gives hybrid agents running reference applications to explore and recreate using native GUI controls and coding tools. Its multi-platform benchmark checks interaction-dependent behavior with programmatic and visual assertions, while trajectory-training transfer is evaluated separately.
- [AutoTailor: Automatic, User-Aligned Capability Selection and Adaptation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-13548/) — 2026-09-11
  AutoTailor compiles web trajectories into reusable browser-automation APIs, then filters and dynamically revises the capability inventory. WebArena experiments distinguish API-only operation from an agent that can fall back to ordinary reasoning and browser actions.
- [Improving Proficiency and Efficiency of Android GUI Agents via Self-Generating Tool Actions](https://awesomecua.github.io/resources/arxiv-2609-06792/) — 2026-09-06
  DroidTool generates application-state tools through proposal, implementation, testing and repair. Relational tests connect the tools’ preconditions and effects, and the resulting tools are evaluated as additions to Android GUI agents.
- [CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents](https://awesomecua.github.io/resources/arxiv-2609-05374/) — 2026-09-04
  Turns desktop applications into reproducible GUI-and-CLI environments and generates verified hybrid trajectories for agent post-training.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [WebMCP-Phalanx: Enforcing and Characterizing Trust Boundaries for Browser-Integrated LLM Agents](https://awesomecua.github.io/resources/arxiv-2608-24017/) — 2026-08-25
  Proposes WebMCP-Phalanx, a browser-integrated runtime that binds page-exposed tools to their registering principals and separates content inspection from privileged invocation. It studies lifecycle and prompt-injection attacks, including a timing bypass that motivates validating all visible metadata before tool use.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-28227/) — 2026-07-30
  Describes a foundation GUI agent with combined GUI and command-line actions, large-scale interaction infrastructure, and iterative environment and task generation.
- [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](https://awesomecua.github.io/resources/arxiv-2607-25904/) — 2026-07-28
  Introduces an Interactive Reward Agent that proposes completion conditions and verifies them using system, application, and GUI tools after execution. GUI-RewardBench provides annotated desktop trajectories for evaluating these evidence-based judgments and their use in reinforcement learning.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.github.io/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-24551/) — 2026-06-22
  This benchmark matches desktop goals, initial states and final-state verifiers across screen-only GUI and skill-mediated CLI agents. Its experiments separate graphical execution failures from missing CLI skill coverage, including a verifier-guided skill-augmentation condition.
- [MacAgentBench: Benchmarking AI Agents on Real-World macOS Desktop](https://awesomecua.github.io/resources/arxiv-2606-22557/) — 2026-06-21
  Introduces macOS tasks spanning GUI and command-line interaction, with deterministic checks and intermediate-progress scoring for application workflows.
- [Beyond the GUI Paradigm: Do Mobile Agents Need the Phone Screen?](https://awesomecua.github.io/resources/arxiv-2606-19388/) — 2026-06-16
  This study compares general coding agents using mobile command-line access with reproducible GUI agents on AndroidWorld and MobileWorld. It also supplies oracle CLI analyses and a separate task suite for operations such as bulk changes, filtering and hidden device state.
- [ComAct: Reframing Professional Software Manipulation via COM-as-Action Paradigm](https://awesomecua.github.io/resources/arxiv-2606-13239/) — 2026-06-11
  ComAct proposes COM program synthesis as an alternative interface for manipulating professional software and introduces ComCADBench with GUI-based comparison agents. ComActor adds a staged training and correction approach, supported by a Windows-container training platform.
- [WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces](https://awesomecua.github.io/resources/arxiv-2606-09426/) — 2026-06-08
  WeaveBench requires agents to combine GUI, command-line and code operations within long tasks on an Ubuntu desktop. A trajectory-aware judge checks deliverables and interaction evidence, including shortcut behavior that outcome-only grading can miss.
- [CLI-Anything: Towards Agent-Native Computer Use](https://awesomecua.github.io/resources/arxiv-2606-03854/) — 2026-06-02
  CLI-Anything argues for application interfaces built around structured commands, explicit state and execution feedback. It describes transforming existing software into command-line harnesses and organizing that approach through CLI-Hub.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.github.io/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [Exploring LLM Agent Designs and Interaction Modalities for Scientific Visualization](https://awesomecua.github.io/resources/arxiv-2604-27996/) — 2026-04-30
  This study compares specialized, computer-use and coding agents on scientific visualization workflows. It examines GUI, CLI, code and tool-call interaction modes, including how persistent memory changes performance across repeated trials.
- [AgentClick: A Skill-Based Human-in-the-Loop Review Layer for Terminal AI Agents](https://awesomecua.github.io/resources/arxiv-2604-16520/) — 2026-04-15
  AgentClick gives terminal-based agents a browser review interface for plans, drafts, execution traces and editable memory. A local server and skill plugin let users inspect proposed actions and provide structured feedback.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.github.io/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [Terminal Is All You Need: Design Properties for Human-AI Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2603-10664/) — 2026-03-11
  This position paper derives interface design principles from terminal-based human-agent collaboration: representational compatibility, transparent actions and low participation barriers. It argues that graphical and other agent-facing modalities should provide these properties explicitly.
- [EmbeWebAgent: Embedding Web Agents into Any Customized UI](https://awesomecua.github.io/resources/arxiv-2602-14865/) — 2026-02-16
  EmbeWebAgent embeds agent access into existing web applications through frontend observations and a page-specific function registry. Its workflow combines GUI primitives, composite actions and MCP tools, demonstrated in a live interface.
- [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-16855/) — 2026-02-15
  Presents GUI-Owl-1.5 variants and a hybrid data pipeline for multimodal GUI interaction, tool use, memory, and multi-platform tasks.
- [Agent Skills for Large Language Models: Architecture, Acquisition, Security, and the Path Forward](https://awesomecua.github.io/resources/arxiv-2602-12430/) — 2026-02-12
  This survey organizes agent skills by architecture, acquisition, deployment and security, including their role in computer-use systems and GUI grounding. It also proposes a permission and lifecycle governance framework for skill deployment.
- [Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction](https://awesomecua.github.io/resources/arxiv-2602-00575/) — 2026-01-31
  VAGEN verifies GUI trajectories by first extracting readily available evidence and escalating to tool-based environment probes when needed. Evaluation on OSWorld-Verified and AndroidWorld studies verification accuracy and its cost.
- [ToolTok: Tool Tokenization for Efficient and Generalizable GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-02548/) — 2026-01-30
  ToolTok represents GUI operations with learned tool tokens and frames interaction as progressive tool selection. Semantic anchoring and an easy-to-hard curriculum teach tool meanings before visual pathfinding, with evaluation across grounding scenarios.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.github.io/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.github.io/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [Nested Browser-Use Learning for Agentic Information Seeking](https://awesomecua.github.io/resources/arxiv-2512-23647/) — 2025-12-29
  NestBrowse organizes browser actions in a nested framework that separates interaction control from page exploration. It evaluates this design for deep information seeking beyond snippet retrieval and direct URL fetching.
- [MAI-UI Technical Report: Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-22047/) — 2025-12-26
  MAI-UI combines GUI navigation, native user interaction, and MCP tool calls in a family of policies trained through generated data and online reinforcement learning. The report also studies device-cloud routing and scaling of parallel environments and interaction budgets, with grounding and Android navigation evaluation.
- [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](https://awesomecua.github.io/resources/arxiv-2512-19432/) — 2025-12-22
  Introduces long mobile workflows that combine agent-user interaction, cross-application tasks, and MCP-based tool access.
- [Step-GUI Technical Report](https://awesomecua.github.io/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [Building Browser Agents: Architecture, Security, and Practical Solutions](https://awesomecua.github.io/resources/arxiv-2511-19477/) — 2025-11-22
  Reports architectural and security lessons from building a browser agent, including hybrid accessibility-tree and visual context, browser tooling and programmatic constraints. A WebGames evaluation accompanies the discussion of reliability and specialization.
- [OSWorld-MCP: Benchmarking MCP Tool Invocation In Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-24563/) — 2025-10-28
  OSWorld-MCP evaluates how agents choose between GUI operations and MCP tool calls in computer tasks. It combines generated and curated tools, with 158 manually validated tools across seven applications, to examine tool use alongside task completion.
- [UltraCUA: A Foundation Model for Computer Use Agents with Hybrid Action](https://awesomecua.github.io/resources/arxiv-2510-17790/) — 2025-10-20
  UltraCUA trains a shared policy for primitive GUI actions and high-level tool calls using synthesized tasks and hybrid trajectories. Supervised fine-tuning followed by online reinforcement learning is evaluated on OSWorld and WindowsAgentArena.
- [From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-04607/) — 2025-10-06
  Introduces a Declarative Model Interface that maps existing GUIs to access, state and observation primitives while handling low-level interactions. Evaluation uses Word, PowerPoint and Excel on Windows with a GUI-agent baseline.
- [\textsc{GUI-Spotlight}: Adaptive Iterative Focus Refinement for Enhanced GUI Visual Grounding](https://awesomecua.github.io/resources/arxiv-2510-04039/) — 2025-10-05
  GUI-Spotlight trains a grounding model to reason over images and call tools that iteratively narrow its visual focus. The paper evaluates this refinement method on ScreenSpot-Pro after training on 18,500 samples.
- [WALT: Web Agents that Learn Tools](https://awesomecua.github.io/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Secure and Efficient Access Control for Computer-Use Agents via Context Space](https://awesomecua.github.io/resources/arxiv-2509-22256/) — 2025-09-26
  Introduces CSAgent, which combines static access policies with user intent and context and enforces them through an operating-system service. A supporting toolchain constructs and refines policies for agents using API, CLI and GUI interfaces.
- [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-06477/) — 2025-09-08
  MAS-Bench evaluates mobile agents that combine GUI actions with APIs, deep links, and reusable scripts. Its 139 tasks across 11 apps test use of 88 predefined shortcuts as well as the ability to generate new reusable workflows.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [Throttling Web Agents Using Reasoning Gates](https://awesomecua.github.io/resources/arxiv-2509-01619/) — 2025-09-01
  Introduces reasoning gates that require agents to solve generated, verifiable puzzles before receiving access to resources. The throttling approach is deployed on a custom website and MCP servers and evaluated with web agents.
- [ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2508-14040/) — 2025-08-19
  Combines API and GUI actions with distributed desktop reinforcement learning and alternating supervised training to address training instability.
- [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.github.io/resources/arxiv-2508-03923/) — 2025-08-05
  CoAct-1 delegates subtasks between a GUI operator and a programmer that executes Python or Bash. Its OSWorld evaluation studies a hybrid action space in which scripts handle suitable file and data operations while visual interaction handles other steps.
- [Magentic-UI: Towards Human-in-the-loop Agentic Systems](https://awesomecua.github.io/resources/arxiv-2507-22358/) — 2025-07-30
  Magentic-UI combines browser interaction, code execution, file operations, and MCP tools in an interface for human-agent collaboration. It studies collaborative planning and task execution, action guards, and persistent memory through benchmark tasks, simulated users, user studies, and safety assessments.
- [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-07672/) — 2025-06-09
  MCPWorld evaluates API, GUI, and hybrid computer-use agents with 201 tasks in applications whose source can be instrumented and extended with MCP support. It verifies completion from application behavior and packages the testbed in containers with GPU support.
- [LiteCUA: Computer as MCP Server for Computer-Use Agent on AIOS](https://awesomecua.github.io/resources/arxiv-2505-18829/) — 2025-05-24
  AIOS 1.0 exposes computer states and actions through an MCP server to provide structured environmental context for agents. LiteCUA is a lightweight agent built on this interface, evaluated on OSWorld to study the effect of computer-environment contextualization.
- [UFO2: The Desktop AgentOS](https://awesomecua.github.io/resources/arxiv-2504-14603/) — 2025-04-20
  Introduces UFO2, a Windows desktop agent architecture combining a coordinating HostAgent, application-specialized agents, and a shared GUI/API action layer. It integrates UI Automation, visual parsing, speculative planning, and an isolated picture-in-picture desktop.
- [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://awesomecua.github.io/resources/arxiv-2504-07079/) — 2025-04-09
  SkillWeaver explores websites, practices interactions, and converts the resulting experience into a reusable library of callable skill APIs. Its WebArena and live-website experiments examine skill refinement, composition, and transfer from stronger agents to weaker ones.
- [API Agents vs. GUI Agents: Divergence and Convergence](https://awesomecua.github.io/resources/arxiv-2503-11069/) — 2025-03-14
  Compares API-driven and GUI-driven agents across architecture, development, and interaction considerations, discussing when hybrid approaches are useful.
- [LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications](https://awesomecua.github.io/resources/arxiv-2503-02950/) — 2025-03-04
  Introduces a modular visual web-agent stack with planning and memory components, exposed through a remote-browser application and Chrome extension.
- [Programming with Pixels: Can Computer-Use Agents do Software Engineering?](https://awesomecua.github.io/resources/arxiv-2502-18525/) — 2025-02-24
  Introduces a visual IDE environment and benchmark for software-engineering tasks, comparing screenshot-based control with access to editing and shell tools.
- [AutoDroid-V2: Boosting SLM-based GUI Agents via Code Generation](https://awesomecua.github.io/resources/arxiv-2412-18116/) — 2024-12-24
  Recasts mobile UI automation as on-device code generation, using app-specific documentation and synthetic tasks to guide smaller models.
- [DroidCall: A Dataset for LLM-powered Android Intent Invocation](https://awesomecua.github.io/resources/arxiv-2412-00402/) — 2024-11-30
  Introduces data and a generation pipeline for translating natural-language requests into Android intent invocations using compact language models.
- [Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks](https://awesomecua.github.io/resources/arxiv-2411-04468/) — 2024-11-07
  Introduces an orchestrated team of browsing, file, and coding agents with progress tracking and error recovery for general digital tasks.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.github.io/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [AgentStore: Scalable Integration of Heterogeneous Agents As Specialized Generalist Computer Assistant](https://awesomecua.github.io/resources/arxiv-2410-18603/) — 2024-10-24
  Introduces a platform that integrates specialized agents under a coordinating MetaAgent for varied computer tasks.
- [Beyond Browsing: API-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2410-16464/) — 2024-10-21
  Compares browsing-only, API-only, and hybrid web agents on WebArena, examining how access to application APIs changes task execution alongside browser interaction.
- [AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://awesomecua.github.io/resources/arxiv-2409-17140/) — 2024-09-25
  Introduces AXIS, an API-first application agent that can use UI actions and expand its available APIs through automated application exploration. The work evaluates the approach on Microsoft Word tasks.
- [AppWorld: A Controllable World of Apps and People for Benchmarking Interactive Coding Agents](https://awesomecua.github.io/resources/arxiv-2407-18901/) — 2024-07-26
  Introduces simulated application APIs and state-based task evaluation for interactive coding agents performing everyday digital workflows.
- [MobileExperts: A Dynamic Tool-Enabled Agent Team in Mobile Devices](https://awesomecua.github.io/resources/arxiv-2407-03913/) — 2024-07-04
  Introduces MobileExperts, which assembles mobile-agent teams, lets agents explore and formulate tools, and coordinates them through two levels of planning. A benchmark organizes tasks by hierarchical intelligence levels.
- [Mobile-Bench: An Evaluation Benchmark for LLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2407-00993/) — 2024-07-01
  Evaluates mobile agents using combined UI and API actions, tasks with varying app scope, and checkpoints for intermediate progress.
- [GuardAgent: Safeguard LLM Agents by a Guard Agent via Knowledge-Enabled Reasoning](https://awesomecua.github.io/resources/arxiv-2406-09187/) — 2024-06-13
  Introduces GuardAgent, which translates safety requests into executable guardrail code using plans and retrieved demonstrations. Mind2Web-SC supplies a web-agent safety-policy evaluation alongside a separate healthcare access-control benchmark.
- [OS-Copilot: Towards Generalist Computer Agents with Self-Improvement](https://awesomecua.github.io/resources/arxiv-2402-07456/) — 2024-02-12
  Provides an operating-system agent framework connecting applications, files, terminals, and web tools, with accumulated skills for subsequent tasks.
- [GAIA: a benchmark for General AI Assistants](https://awesomecua.github.io/resources/arxiv-2311-12983/) — 2023-11-21
  Introduces questions that test assistant reasoning, multimodal understanding, browsing, and tool use beyond screen-action execution alone.
- [PPTC Benchmark: Evaluating Large Language Models for PowerPoint Task Completion](https://awesomecua.github.io/resources/arxiv-2311-01767/) — 2023-11-03
  Evaluates multi-turn PowerPoint creation and editing, scoring the resulting presentation files rather than requiring a fixed API sequence.
- [WebWISE: Web Interface Control and Sequential Exploration with Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-16042/) — 2023-10-24
  WebWISE filters DOM elements into observations and generates short programs for click, scroll, and text-entry steps. It evaluates in-context learning from either one supplied example or an example collected during a successful zero-shot MiniWoB++ trial.
- [OpenAgents: An Open Platform for Language Agents in the Wild](https://awesomecua.github.io/resources/arxiv-2310-10634/) — 2023-10-16
  OpenAgents hosts three language agents, for data analysis, API plugins and autonomous web browsing, behind a web interface for non-expert users, with local deployment for developers.

## 评测基准

- [AgentBench](https://awesomecua.github.io/resources/github-thudm-agentbench/) — Date not recorded
  Agent evaluation suite with containerized tasks and a function-calling interface, including operating-system and shopping environments.
- [AppWorld](https://awesomecua.github.io/resources/github-stonybrooknlp-appworld/) — Date not recorded
  Simulated applications, user data, and state-based task checks for evaluating agents that interact through APIs and code.
- [MCPWorld](https://awesomecua.github.io/resources/github-saagent-mcpworld/) — Date not recorded
  Evaluation environment combining computer interaction with tool access.
- [MobileGym++ / MobileGym++ Bench](https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/) — Date not recorded
  Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.
- [MobileWorld (Tongyi-MAI)](https://awesomecua.github.io/resources/github-tongyi-mai-mobileworld/) — Date not recorded
  A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.
- [PPTC](https://awesomecua.github.io/resources/github-gydpku-pptc/) — Date not recorded
  PowerPoint creation and editing benchmark with API-based execution and checks of the resulting presentation files.
- [RecreationBench](https://awesomecua.github.io/resources/url-d9d8e68f19ef0956d189/) — Date not recorded
  Tasks for recreating reference applications with hybrid computer interaction.
- [WeaveBench](https://awesomecua.github.io/resources/url-6a212bc12f82c824f6b9/) — Date not recorded
  Computer-use benchmark mixing graphical interaction and code execution.
- [WebTestBench](https://awesomecua.github.io/resources/github-friedrichor-webtestbench/) — Date not recorded
  An end-to-end web-testing benchmark where agents derive test checklists from development instructions, interact with deployed applications and report functional or constraint-related defects.

## 数据集

- [DroidCall data](https://awesomecua.github.io/resources/url-ae8f5208eea9e7f1f606/) — Date not recorded
  Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.
- [OpenMobile-Data-v2](https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.

## 模型

- [Holo4 35B-A3B BF16](https://awesomecua.github.io/resources/url-16083a0225a60882c704/) — Date not recorded
  A Qwen3.6-based computer-use checkpoint designed to request GUI actions, code execution and tool calls through an external agent harness.
- [MAI-UI 8B](https://awesomecua.github.io/resources/url-00b1a3abf9bcb424b264/) — Date not recorded
  A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.
- [OpenMobile-2 27B](https://awesomecua.github.io/resources/url-1611de0e6d606165d12d/) — Date not recorded
  Mobile-agent checkpoint based on Qwen3.6-27B for GUI and app-native tool interaction.
- [OpenMobile-2 9B](https://awesomecua.github.io/resources/url-d35224f787e7ec21ce36/) — Date not recorded
  Mobile-agent checkpoint trained on OpenMobile-Data-v2 for screenshot actions and app-native tool calls.

## 工程与产业

- [agent-browser](https://awesomecua.github.io/resources/github-vercel-labs-agent-browser/) — Date not recorded
  A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.
- [AutoDroid V2](https://awesomecua.github.io/resources/github-mobilellm-autodroid-v2/) — Date not recorded
  An Android automation implementation that builds app documentation from exploration traces and evaluates language-model-generated execution code in emulator workflows.
- [Browser Use WebUI](https://awesomecua.github.io/resources/github-browser-use-web-ui/) — Date not recorded
  A Gradio interface for configuring and running Browser Use agents, including persistent browser sessions and interaction recordings.
- [BrowserOS / BrowserOS neo](https://awesomecua.github.io/resources/github-browseros-ai-browseros/) — Date not recorded
  Chromium-based browser implementations for external agent control and built-in assistant workflows, with session visibility and replay facilities.
- [Chrome DevTools MCP](https://awesomecua.github.io/resources/github-chromedevtools-chrome-devtools-mcp/) — Date not recorded
  MCP tools for browser control and inspection through Chrome DevTools.
- [CUAWright (formerly Webwright)](https://awesomecua.github.io/resources/github-microsoft-webwright/) — Date not recorded
  Agent framework for browser and desktop tasks using automation code.
- [DroidCall generation and evaluation code](https://awesomecua.github.io/resources/github-ubiquitouslearning-droidcall/) — Date not recorded
  Data-generation, fine-tuning and evaluation utilities for teaching small language models to invoke Android intents through predefined functions.
- [LiteWebAgent](https://awesomecua.github.io/resources/github-pathonaiorg-litewebagent/) — Date not recorded
  Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.
- [MAI-UI inference and evaluation code](https://awesomecua.github.io/resources/github-tongyi-mai-mai-ui/) — Date not recorded
  Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.
- [Mobile Harness](https://awesomecua.github.io/resources/github-droidrun-mobile-harness/) — Date not recorded
  Portable agent instructions and integration tooling for local or cloud phone control through mobilerun-core.
- [Mobile Next MCP](https://awesomecua.github.io/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Mobilerun (formerly Droidrun)](https://awesomecua.github.io/resources/github-droidrun-mobilerun/) — Date not recorded
  A framework that combines screenshots and accessibility state with agent tools for mobile-device tasks through command-line and Python interfaces.
- [Mobilerun Portal (formerly Droidrun Portal)](https://awesomecua.github.io/resources/github-droidrun-mobilerun-portal/) — Date not recorded
  An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.
- [OculiX (SikuliX continuation)](https://awesomecua.github.io/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [Open Interpreter](https://awesomecua.github.io/resources/github-openinterpreter-open-interpreter/) — Date not recorded
  Assistant framework combining code execution and computer interaction.
- [OpenAgents Web Agent](https://awesomecua.github.io/resources/component-xlang-ai-openagents-web-agent/) — Date not recorded
  The OpenAgents browser-control component, connecting a Chrome extension to a web agent and local chat platform for navigating sites and completing interface tasks.
- [OpenMobile-2 code](https://awesomecua.github.io/resources/github-openmobile2-openmobile2-code/) — Date not recorded
  Evaluation adapters and training guidance for OpenMobile-2 across Android emulators and browser-rendered mobile simulation.
- [OS-Copilot](https://awesomecua.github.io/resources/github-os-copilot-os-copilot/) — Date not recorded
  Open-source library for generalist agents acting on an operating system's web, terminals, files and third-party apps, with the FRIDAY assistant, which takes custom tools and self-learns Excel tasks.
- [Playwright MCP](https://awesomecua.github.io/resources/github-microsoft-playwright-mcp/) — Date not recorded
  MCP server that lets LLM clients drive Playwright browsers through structured accessibility snapshots instead of screenshots, with opt-in vision, PDF and devtools capabilities.
- [SkillWeaver](https://awesomecua.github.io/resources/github-osu-nlp-group-skillweaver/) — Date not recorded
  A web-agent framework that explores sites, synthesizes reusable interaction APIs and builds a skill library for later tasks.
- [WebLlama](https://awesomecua.github.io/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
- [WebMarker](https://awesomecua.github.io/resources/github-reidbarber-webmarker/) — Date not recorded
  A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.
- [Windows-MCP](https://awesomecua.github.io/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
