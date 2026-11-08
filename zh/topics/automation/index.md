# 自动化

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/automation/records.jsonl

## 论文与综述

- [Interface Quilt: Modifying Applications with Computer Use Agents and Generative UI](https://awesomecua.com/resources/arxiv-2611-01891/) — 2026-11-01
  Introduces Interface Quilt, which uses computer-use agents and generated UI overlays to modify how existing applications look and behave without source access.
- [Step-Aligned Script Generation with Verification and Recovery for Web Automation Testing](https://awesomecua.com/resources/arxiv-2610-25601/) — 2026-10-19
  Presents TESSARA, which turns natural-language web test intent into Playwright scripts, linking each browser interaction to selector evidence, outcomes, and repair history.
- [Interaction-as-a-Judge](https://awesomecua.com/resources/arxiv-2610-17895/) — 2026-10-13
  Uses computer-use agents to interact with generated applications, studying whether interaction improves preference judging, requirement checks, and feedback for application generation.
- [When to Compile a Computer-Use Agent? Measuring Payback and Making Compilation Decisions for Token Efficiency](https://awesomecua.com/resources/arxiv-2610-02932/) — 2026-10-02
  Introduces PACE, a protocol and online decision rule for deciding when repeated GUI procedures are worth compiling into programs. It accounts for failed compilation attempts, measured per-use savings, uncertain reuse, and execution costs under an explicit cumulative budget.
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.com/resources/arxiv-2610-00948/) — 2026-10-01
  Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights.
- [Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](https://awesomecua.com/resources/arxiv-2609-36927/) — 2026-09-29
  Learns reusable computer-use policies that encode stable workflow logic in programs while delegating grounding and state checks to neural models. Policy iteration executes variants, diagnoses failures, revises the program, and adds verification before state-changing actions.
- [PhoneCLI: From App Interfaces to Callable Commands for Mobile Agents](https://awesomecua.com/resources/arxiv-2609-35671/) — 2026-09-28
  Introduces PhoneCLI, which explores mobile app interfaces and compiles navigation paths into reusable commands without internal app APIs or instrumentation. At execution time it verifies compiled paths and falls back to a visual agent for open-ended interaction or failed navigation.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.com/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [Improving Proficiency and Efficiency of Android GUI Agents via Self-Generating Tool Actions](https://awesomecua.com/resources/arxiv-2609-06792/) — 2026-09-06
  DroidTool generates application-state tools through proposal, implementation, testing and repair. Relational tests connect the tools’ preconditions and effects, and the resulting tools are evaluated as additions to Android GUI agents.
- [OmegaUse-SOP: SOP Engineering for Professional Computer Use from Human Demonstrations](https://awesomecua.com/resources/arxiv-2609-02149/) — 2026-09-02
  OmegaUse-SOP converts expert GUI demonstrations into configurable procedures and refines them with domain rules and human input. It records, abstracts, grounds and verifies live execution, with a case study of photovoltaic simulation workflows in PVsyst 7.2.
- [SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction](https://awesomecua.com/resources/arxiv-2609-05511/) — 2026-08-31
  Introduces SCAFFOLD, which extracts executable skills from web trajectories, composes them into a hierarchy, and compresses redundant skills through behavioral checks. It periodically distills skill-guided trajectories into the policy and studies repeated improvement across web benchmarks.
- [UI-Venus-2 Technical Report](https://awesomecua.com/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.com/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [Back to the Future: A workbook time machine for spread sheet creation benchmarks](https://awesomecua.com/resources/arxiv-2608-07873/) — 2026-08-08
  Introduces the workbook time machine to create spreadsheet-object tasks and wtmbench to evaluate spreadsheet manipulation agents using different control interfaces.
- [Activity Frames: Deterministic Screen-Activity Compilation for Agent Memory and Replay](https://awesomecua.com/resources/arxiv-2608-05784/) — 2026-08-06
  Introduces Activity Frames, a deterministic pipeline that turns captured screen activity into typed episodes for computer-use agent memory and routine replay.
- [MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation](https://awesomecua.com/resources/arxiv-2607-29320/) — 2026-07-31
  MAGA distills specialized GUI agents into one policy by allocating supervision according to structured-action correctness rather than treating all response tokens equally. A training-only teacher hint supports fusion across mobile, web and desktop settings without changing student inputs.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.com/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents](https://awesomecua.com/resources/arxiv-2606-30697/) — 2026-06-29
  LUMOS converts native accessibility metadata and browser UI structure into semantic interface blueprints with stable element identifiers and available actions. It combines live pointer-to-element grounding with an observe-act loop constrained to visible-UI primitives.
- [TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents](https://awesomecua.com/resources/arxiv-2606-28480/) — 2026-06-26
  TUA-Bench evaluates terminal-use agents on general digital tasks, including document editing, email, web information seeking and specialist software workflows. Tasks run in real terminals with deterministic setup and execution-based scoring.
- [Beyond the GUI Paradigm: Do Mobile Agents Need the Phone Screen?](https://awesomecua.com/resources/arxiv-2606-19388/) — 2026-06-16
  This study compares general coding agents using mobile command-line access with reproducible GUI agents on AndroidWorld and MobileWorld. It also supplies oracle CLI analyses and a separate task suite for operations such as bulk changes, filtering and hidden device state.
- [PreAct: Computer-Using Agents that Get Faster on Repeated Tasks](https://awesomecua.com/resources/arxiv-2606-17929/) — 2026-06-16
  PreAct compiles successful screen-interaction runs into guarded state-machine programs for repeated tasks. It validates programs from clean states before storage and returns control to the agent when replayed screen expectations fail, with tests across mobile, desktop and web.
- [ComAct: Reframing Professional Software Manipulation via COM-as-Action Paradigm](https://awesomecua.com/resources/arxiv-2606-13239/) — 2026-06-11
  ComAct proposes COM program synthesis as an alternative interface for manipulating professional software and introduces ComCADBench with GUI-based comparison agents. ComActor adds a staged training and correction approach, supported by a Windows-container training platform.
- [CLI-Anything: Towards Agent-Native Computer Use](https://awesomecua.com/resources/arxiv-2606-03854/) — 2026-06-02
  CLI-Anything argues for application interfaces built around structured commands, explicit state and execution feedback. It describes transforming existing software into command-line harnesses and organizing that approach through CLI-Hub.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.com/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [GUI Agents for Continual Game Generation](https://awesomecua.com/resources/arxiv-2605-28258/) — 2026-05-27
  PlaytestArena evaluates generated browser games using expected in-play behaviors adjudicated by GUI agents. Play2Code pairs a coding agent with a rubric-blind GUI playtester whose interaction traces and feedback guide iterative refinement, with a separate final judge.
- [VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents](https://awesomecua.com/resources/arxiv-2605-26144/) — 2026-05-22
  VISTA evaluates coding agents that turn design handoffs into working web and Android applications. Its evaluator locates annotated interactive components and probes their behavior, keeping visual localization distinct from functional correctness.
- [Spreadsheet-RL: Advancing Large Language Model Agents on Realistic Spreadsheet Tasks via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-22642/) — 2026-05-21
  Spreadsheet-RL trains spreadsheet agents with RL in a Microsoft Excel environment exposed through a Python sandbox and supplies the Domain-Spreadsheet benchmark.
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [Skim: Speculative Execution for Fast and Efficient Web Agents](https://awesomecua.com/resources/arxiv-2605-16565/) — 2026-05-15
  Introduces Skim, a speculative execution framework for web agents that learns site URL and answer patterns offline, then uses them to answer matching queries with a small model.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.com/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [Training Computer Use Agents to Assess the Usability of Graphical User Interfaces](https://awesomecua.com/resources/arxiv-2604-26020/) — 2026-04-28
  uxCUA learns to assess interface usability by choosing interaction flows, executing them and predicting a numerical usability score. Training uses interactive UIs with usability labels and human preferences, with evaluations on synthetic and real interfaces.
- [PlayCoder: Making LLM-Generated GUI Code Playable](https://awesomecua.com/resources/arxiv-2604-19742/) — 2026-04-21
  PlayEval measures whether generated GUI applications remain logically playable, using PlayTester to execute task-oriented GUI playthroughs. PlayCoder closes the loop between repository-aware generation, interactive testing and targeted code repair.
- [SkillDroid: Compile Once, Reuse Forever](https://awesomecua.com/resources/arxiv-2604-14872/) — 2026-04-16
  Introduces SkillDroid, which compiles successful mobile GUI trajectories into reusable action templates and replays them without model calls, recompiling when they degrade.
- [AppAgent-Claw: CLI Is All You Need for GUI Automation](https://awesomecua.com/resources/arxiv-2606-05171/) — 2026-04-15
  Introduces AppAgent-Claw, which records demonstrated GUI workflows as reusable OpenClaw skills, locates visual targets during replay and checks intended on-screen effects.
- [WebXSkill: Skill Learning for Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2604-13318/) — 2026-04-14
  WebXSkill pairs parameterized action programs with step-level language guidance, mining reusable skills from synthetic browser-agent traces. A URL-based graph supports retrieval, and deployment alternates between direct program execution and guided native planning.
- [Agentic Compilation: Mitigating the LLM Rerun Crisis for Minimized-Inference-Cost Web Automation](https://awesomecua.com/resources/arxiv-2604-09718/) — 2026-04-08
  Proposes Compile-and-Execute, which turns a sanitized DOM into a reusable JSON workflow so repetitive browser tasks can run without further model queries.
- [GPA: Learning GUI Process Automation from Demonstrations](https://awesomecua.com/resources/arxiv-2604-01676/) — 2026-04-02
  Presents demonstration-based GUI process replay with Sequential Monte Carlo localization and readiness checks. GPA executes the learned workflow locally and can serve as the GUI execution component of an agent using MCP or CLI tools.
- [Terminal Agents Suffice for Enterprise Automation](https://awesomecua.com/resources/arxiv-2604-00073/) — 2026-03-31
  Studies enterprise automation by terminal agents that call platform APIs, comparing their task results and cost with other agent approaches, including web agents using graphical interfaces.
- [WebTestBench: Evaluating Computer-Use Agents towards End-to-End Automated Web Testing](https://awesomecua.com/resources/arxiv-2603-25226/) — 2026-03-26
  Introduces WebTestBench for end-to-end website testing, separating checklist generation from defect detection. Its WebTester baseline evaluates test coverage, detection and sustained interaction across web application categories.
- [Towards Automated Crowdsourced Testing via Personified-LLM](https://awesomecua.com/resources/arxiv-2603-24160/) — 2026-03-25
  Introduces PersonaTester, a framework that gives LLM agents tester personas to vary their exploration and interaction habits during automated crowdsourced GUI testing.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.com/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [CAPTCHA Solving for Native GUI Agents: Automated Reasoning-Action Data Generation and Self-Corrective Training](https://awesomecua.com/resources/arxiv-2603-23559/) — 2026-03-23
  Introduces ReCAP, a native GUI agent for interactive CAPTCHA challenges, trained with generated interaction trajectories, reasoning traces and self-correction data.
- [SpecOps: A Fully Automated AI Agent Testing Framework in Real-World GUI Environments](https://awesomecua.com/resources/arxiv-2603-10268/) — 2026-03-10
  SpecOps divides testing of GUI-based agents into test generation, environment setup, execution and validation handled by specialist agents. Its evaluation spans five real-world agents, including web applications and browser extensions, and measures execution reliability and bug discovery.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.com/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [EmbeWebAgent: Embedding Web Agents into Any Customized UI](https://awesomecua.com/resources/arxiv-2602-14865/) — 2026-02-16
  EmbeWebAgent embeds agent access into existing web applications through frontend observations and a page-specific function registry. Its workflow combines GUI primitives, composite actions and MCP tools, demonstrated in a live interface.
- [WebTestPilot: Agentic End-to-End Web Testing against Natural Language Specification by Inferring Oracles with Symbolized GUI Elements](https://awesomecua.com/resources/arxiv-2602-11724/) — 2026-02-12
  WebTestPilot turns natural-language requirements into web test steps with inferred preconditions and postconditions over symbolized GUI elements. A benchmark of bug-injected web applications tests whether these context-aware oracles distinguish application defects from agent mistakes.
- [See, Plan, Snap: Evaluating Multimodal GUI Agents in Scratch](https://awesomecua.com/resources/arxiv-2602-10814/) — 2026-02-11
  ScratchWorld evaluates program construction through the Scratch interface using fine-grained drag-and-drop actions and a complementary semantic-API mode. Runtime tests assess the resulting programs, allowing analysis of the gap between program reasoning and GUI manipulation.
- [Okara: Detection and Attribution of TLS Man-in-the-Middle Vulnerabilities in Android Apps with Foundation Models](https://awesomecua.com/resources/arxiv-2601-22770/) — 2026-01-30
  Okara uses foundation-model-driven GUI agents to explore Android apps for TLS vulnerability detection, then applies instrumentation and classification to attribute vulnerable code.
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.com/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.com/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.com/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [GAIR: GUI Automation via Information-Joint Reasoning and Group Reflection](https://awesomecua.com/resources/arxiv-2512-09396/) — 2025-12-10
  Introduces GAIR, which combines information from specialized GUI models through a general-purpose coordinating model. When the available information is insufficient, group reflection sends targeted requests back to the specialists before selecting an operation.
- [ReUseIt: Synthesizing Reusable AI Agent Workflows for Web Automation](https://awesomecua.com/resources/arxiv-2510-14308/) — 2025-10-16
  Introduces ReUseIt, which synthesizes reusable web-agent workflows from successful and failed attempts and adds guards to detect and fix execution errors.
- [In-Browser LLM-Guided Fuzzing for Real-Time Prompt Injection Testing in Agentic AI Browsers](https://awesomecua.com/resources/arxiv-2510-13543/) — 2025-10-15
  Proposes an in-browser fuzzing framework that uses language-model guidance to test indirect prompt-injection vulnerabilities in agentic browsers. The work focuses on unwanted actions triggered by webpage instructions under the browser agent's user privileges.
- [GUISpector: An MLLM Agent Framework for Automated Verification of Natural Language Requirements in GUI Prototypes](https://awesomecua.com/resources/arxiv-2510-04791/) — 2025-10-06
  Introduces GUISpector, an MLLM agent framework that operates GUI prototypes to check natural-language requirements and produces feedback for developers.
- [From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents](https://awesomecua.com/resources/arxiv-2510-04607/) — 2025-10-06
  Introduces a Declarative Model Interface that maps existing GUIs to access, state and observation primitives while handling low-level interactions. Evaluation uses Word, PowerPoint and Excel on Windows with a GUI-agent baseline.
- [3Dify: a Framework for Procedural 3D-CG Generation Assisted by LLMs Using MCP and RAG](https://awesomecua.com/resources/arxiv-2510-04536/) — 2025-10-06
  Introduces 3Dify, a natural-language 3D graphics framework that operates creation tools through MCP and uses a computer-using agent for GUI operations when MCP is unavailable.
- [WALT: Web Agents that Learn Tools](https://awesomecua.com/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data](https://awesomecua.com/resources/arxiv-2509-15221/) — 2025-09-18
  Introduces a cross-platform computer-use dataset and agents trained with a collection pipeline combining automated interaction and human input.
- [Agentic Lybic: Multi-Agent Execution System with Tiered Reasoning and Orchestration](https://awesomecua.com/resources/arxiv-2509-11067/) — 2025-09-14
  Introduces Agentic Lybic, a desktop automation system that routes tasks among GUI, code, and decision-support workers using a finite-state machine and evaluator.
- [Are LLM Agents the New RPA? A Comparative Study with RPA Across Enterprise Workflows](https://awesomecua.com/resources/arxiv-2509-04198/) — 2025-09-04
  Compares an agent using computer interfaces with UiPath RPA on enterprise data entry, monitoring, and document extraction, measuring speed, reliability, and development effort.
- [You Don't Know Until You Click:Automated GUI Testing for Production-Ready Software Evaluation](https://awesomecua.com/resources/arxiv-2508-14104/) — 2025-08-17
  RealDevWorld evaluates generated software repositories with 194 development tasks and AppEvalPilot, an agent judge that operates the resulting GUIs. The evaluation examines functional behavior, visual fidelity, and runtime responses to produce task-specific diagnostic feedback.
- [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.com/resources/arxiv-2508-03923/) — 2025-08-05
  CoAct-1 delegates subtasks between a GUI operator and a programmer that executes Python or Bash. Its OSWorld evaluation studies a hybrid action space in which scripts handle suitable file and data operations while visual interaction handles other steps.
- [OS-MAP: How Far Can Computer-Using Agents Go in Breadth and Depth?](https://awesomecua.com/resources/arxiv-2507-19132/) — 2025-07-25
  OS-MAP organizes 416 computer-use tasks across 15 applications by a five-level automation taxonomy and a hierarchy of user demands. The benchmark separates required autonomy from generalization scope to diagnose where agents struggle as task demands increase.
- [Doc2Agent: Scalable Generation of Tool-Using Agents from API Documentation](https://awesomecua.com/resources/arxiv-2506-19998/) — 2025-06-24
  Introduces Doc2Agent, a pipeline that generates and refines Python tools from API documentation for tool-using agents, with WebArena APIs among its evaluations.
- [Scenario-Guided LLM-based Mobile App GUI Testing](https://awesomecua.com/resources/arxiv-2506-05079/) — 2025-06-05
  ScenGen organizes mobile GUI testing around business scenarios rather than unrestricted exploration. Five collaborating agents observe the interface, choose and execute actions, check scenario completion, and record operations and runtime bugs.
- [ResTest: Targeted Coverage of Residual Not-Covered Code Using Large Language Models for Web GUI Testing](https://awesomecua.com/resources/arxiv-2506-00520/) — 2025-05-31
  Introduces ResTest, which uses coverage reports and a state transition graph to infer untested web functions, then directs a GUI agent to execute them.
- [LiteCUA: Computer as MCP Server for Computer-Use Agent on AIOS](https://awesomecua.com/resources/arxiv-2505-18829/) — 2025-05-24
  AIOS 1.0 exposes computer states and actions through an MCP server to provide structured environmental context for agents. LiteCUA is a lightweight agent built on this interface, evaluated on OSWorld to study the effect of computer-environment contextualization.
- [AutoData: A Multi-Agent System for Open Web Data Collection](https://awesomecua.com/resources/arxiv-2505-15859/) — 2025-05-21
  Introduces AutoData, a multi-agent system that collects web datasets from a natural-language request, and Instruct2DS, a benchmark for live collection across three domains.
- [UFO2: The Desktop AgentOS](https://awesomecua.com/resources/arxiv-2504-14603/) — 2025-04-20
  Introduces UFO2, a Windows desktop agent architecture combining a coordinating HostAgent, application-specialized agents, and a shared GUI/API action layer. It integrates UI Automation, visual parsing, speculative planning, and an isolated picture-in-picture desktop.
- [WebLists: Extracting Structured Information From Complex Interactive Websites Using Executable LLM Agents](https://awesomecua.com/resources/arxiv-2504-12682/) — 2025-04-17
  Introduces WebLists, a benchmark for structured extraction from interactive websites, and BardeenAgent, which turns web-agent runs into replayable CSS-selector programs.
- [VLM-Fuzz: Vision Language Model Assisted Recursive Depth-first Search Exploration for Effective UI Testing of Android Apps](https://awesomecua.com/resources/arxiv-2504-11675/) — 2025-04-16
  VLM-Fuzz combines depth-first UI exploration with Android manifest analysis, runtime widget hierarchies, and on-demand visual reasoning to generate app test inputs. It evaluates coverage on 59 benchmark apps and uses additional Google Play apps to study crash discovery.
- [Inducing Programmatic Skills for Agentic Tasks](https://awesomecua.com/resources/arxiv-2504-06821/) — 2025-04-09
  Introduces agent skill induction (ASI), which creates, checks, and reuses program-based skills for web tasks by combining primitive actions into higher-level routines.
- [ReuseDroid: A VLM-empowered Android UI Test Migrator Boosted by Active Feedback](https://awesomecua.com/resources/arxiv-2504-02357/) — 2025-04-03
  ReuseDroid migrates Android GUI tests between functionally similar apps using VLM agents that separate shared test intent from app-specific interaction flows. It introduces LinPro, a dataset of 578 migration tasks across 39 apps, to evaluate test transfer.
- [Are Autonomous Web Agents Good Testers?](https://awesomecua.com/resources/arxiv-2504-01495/) — 2025-04-02
  Adapts web agents to execute natural-language test steps, verify assertions, and issue test verdicts. The study introduces 113 passing and failing test cases across three offline web applications and compares two agent implementations with qualitative failure analysis.
- [Agents in the Sandbox: End-to-End Crash Bug Reproduction for Minecraft](https://awesomecua.com/resources/arxiv-2503-20036/) — 2025-03-25
  Introduces BugCraft, which turns Minecraft crash reports into steps and has a vision-based agent execute them through a macro API; BugCraft-Bench supports evaluation.
- [API Agents vs. GUI Agents: Divergence and Convergence](https://awesomecua.com/resources/arxiv-2503-11069/) — 2025-03-14
  Compares API-driven and GUI-driven agents across architecture, development, and interaction considerations, discussing when hybrid approaches are useful.
- [Towards Enterprise-Ready Computer Using Generalist Agent](https://awesomecua.com/resources/arxiv-2503-01861/) — 2025-02-24
  Describes the CUGA enterprise-agent development process, emphasizing iterative evaluation, failure analysis, and refinement on software-task benchmarks.
- [Programming with Pixels: Can Computer-Use Agents do Software Engineering?](https://awesomecua.com/resources/arxiv-2502-18525/) — 2025-02-24
  Introduces a visual IDE environment and benchmark for software-engineering tasks, comparing screenshot-based control with access to editing and shell tools.
- [GUI Testing Arena: A Unified Benchmark for Advancing Autonomous GUI Testing Agent](https://awesomecua.com/resources/arxiv-2412-18426/) — 2024-12-24
  Evaluates GUI testing through test-intent generation, execution, and defect detection using real, modified, and synthetic mobile application data.
- [Large Action Models: From Inception to Implementation](https://awesomecua.com/resources/arxiv-2412-10047/) — 2024-12-13
  Uses a Windows-agent case study to describe a development workflow for large action models, covering data collection, training, grounding, environment integration, and evaluation.
- [Automated Test Transfer Across Android Apps Using Large Language Models](https://awesomecua.com/resources/arxiv-2411-17933/) — 2024-11-26
  LLMigrate uses LLMs to transfer usage-based UI tests between mobile apps with similar functions, reducing the need to write tests for each app.
- [The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use](https://awesomecua.com/resources/arxiv-2411-10323/) — 2024-11-15
  Presents a preliminary study of Claude 3.5 Computer Use across desktop tasks and software, analyzing planning, action, and critique behavior and providing a framework for deploying GUI-automation models.
- [WorkflowLLM: Enhancing Workflow Orchestration Capability of Large Language Models](https://awesomecua.com/resources/arxiv-2411-05451/) — 2024-11-08
  WorkflowLLM builds WorkflowBench from application API workflows and synthetic queries, then trains WorkflowLlama to generate multi-application workflows.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.com/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [AgentStore: Scalable Integration of Heterogeneous Agents As Specialized Generalist Computer Assistant](https://awesomecua.com/resources/arxiv-2410-18603/) — 2024-10-24
  Introduces a platform that integrates specialized agents under a coordinating MetaAgent for varied computer tasks.
- [AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://awesomecua.com/resources/arxiv-2409-17140/) — 2024-09-25
  Introduces AXIS, an API-first application agent that can use UI actions and expand its available APIs through automated application exploration. The work evaluates the approach on Microsoft Word tasks.
- [Steward: Natural Language Web Automation](https://awesomecua.com/resources/arxiv-2409-15441/) — 2024-09-23
  Introduces Steward, a natural-language browser automation system that repeatedly plans and executes website actions. The paper examines completion detection, state representation, responsiveness, and caching in real-site tasks.
- [NaviQAte: Functionality-Guided Web Application Navigation](https://awesomecua.com/resources/arxiv-2409-10741/) — 2024-09-16
  Frames web-application exploration as functionality-oriented question answering, generating navigation actions from multimodal context.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.com/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [IDA: Breaking Barriers in No-code UI Automation Through Large Language Models and Human-Centric Design](https://awesomecua.com/resources/arxiv-2407-15673/) — 2024-07-22
  IDA helps business users create web UI automation through guided demonstrations, a semantic programming model, and a teaching-oriented interface. A prototype user study examines automation creation with enterprise applications by users without programming backgrounds.
- [AUITestAgent: Automatic Requirements Oriented GUI Function Testing](https://awesomecua.com/resources/arxiv-2407-09018/) — 2024-07-12
  Automates mobile GUI tests from natural-language requirements, combining action generation with verification based on interaction traces.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.com/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [SpreadsheetBench: Towards Challenging Real World Spreadsheet Manipulation](https://awesomecua.com/resources/arxiv-2406-14991/) — 2024-06-21
  SpreadsheetBench evaluates LLM spreadsheet manipulation with 912 questions from Excel forums and multiple spreadsheet files as test cases for each instruction.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.com/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [SmartFlow: Robotic Process Automation using LLMs](https://awesomecua.com/resources/arxiv-2405-12842/) — 2024-05-21
  Presents SmartFlow, which converts visible GUI elements into text for language-model action planning and executes the plan through a scripting engine. A collection of enterprise applications evaluates adaptation to different layouts and tasks.
- [Automating the Enterprise with Foundation Models](https://awesomecua.com/resources/arxiv-2405-03710/) — 2024-05-03
  ECLAIR uses multimodal foundation models to automate enterprise workflows from natural-language descriptions, with initial studies of workflow understanding and completion.
- [MMAC-Copilot: Multi-modal Agent Collaboration Operating Copilot](https://awesomecua.com/resources/arxiv-2404-18074/) — 2024-04-28
  Introduces MMAC-Copilot, which coordinates agents with different expertise to operate PC applications. VIBench evaluates visual interaction with applications that lack usable APIs, spanning office, recreation and game tasks.
- [AutoScraper: A Progressive Understanding Web Agent for Web Scraper Generation](https://awesomecua.com/resources/arxiv-2404-12753/) — 2024-04-19
  Introduces AutoScraper, a two-stage framework that uses HTML structure and similarities across pages to generate scrapers for data collection from websites.
- [Auto-Formula: Recommend Formulas in Spreadsheets using Contrastive Learning for Table Representations](https://awesomecua.com/resources/arxiv-2404-12608/) — 2024-04-19
  Auto-Formula recommends formulas for target spreadsheet cells by adapting formulas from similar spreadsheets within an organization.
- [Large Language Models for Mobile GUI Text Input Generation: An Empirical Study](https://awesomecua.com/resources/arxiv-2404-08948/) — 2024-04-13
  Studies language-model generation of mobile text inputs, comparing UI representations, execution feedback, and human assistance for app testing.
- [Enhancing Mobile "How-to" Queries with Automated Search Results Verification and Reranking](https://awesomecua.com/resources/arxiv-2404-08860/) — 2024-04-13
  Executes instructions from mobile how-to search results inside a controlled Android environment, then uses the observed success of those instructions to verify and rerank technical-support results.
- [FlowMind: Automatic Workflow Generation with LLMs](https://awesomecua.com/resources/arxiv-2404-13050/) — 2024-03-17
  FlowMind generates API-based workflows from user requests for process automation and presents workflow descriptions that users can inspect and comment on.
- [ScreenAgent: A Vision Language Model-driven Computer Control Agent](https://awesomecua.com/resources/arxiv-2402-07945/) — 2024-02-09
  Combines a screenshot-and-action dataset with a planning, acting, and reflecting loop for computer control through mouse and keyboard actions.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.com/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [UINav: A Practical Approach to Train On-Device Automation Agents](https://awesomecua.com/resources/arxiv-2312-10170/) — 2023-12-15
  Introduces UINav, a demonstration-based method for training mobile UI automation agents, with a referee model for failure feedback and automatic augmentation of examples.
- [Intelligent Virtual Assistants with LLM-based Process Automation](https://awesomecua.com/resources/arxiv-2312-06677/) — 2023-12-04
  Presents LLMPA, a mobile process-automation architecture that decomposes requests, identifies interface elements, predicts actions and checks errors. Demonstrations evaluate multistep operations in Alipay.
- [ProAgent: From Robotic Process Automation to Agentic Process Automation](https://awesomecua.com/resources/arxiv-2311-10751/) — 2023-11-02
  Introduces ProAgent, an LLM-based agent that builds automation workflows from human instructions and coordinates specialized agents during workflow execution.
- [Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions](https://awesomecua.com/resources/arxiv-2310-15780/) — 2023-10-24
  Introduces GPTDroid for mobile GUI testing: it feeds app page information to an LLM, runs generated test scripts and uses feedback and memory to guide further exploration.
- [InstructExcel: A Benchmark for Natural Language Instruction in Excel](https://awesomecua.com/resources/arxiv-2310-14495/) — 2023-10-23
  Introduces InstructExcel, a benchmark for generating Excel OfficeScripts from natural-language requests, built using scripts recorded from user actions and a collection of existing spreadsheets.
- [Vision-Based Mobile App GUI Testing: A Survey](https://awesomecua.com/resources/arxiv-2310-13518/) — 2023-10-20
  Surveys vision-based mobile app GUI testing across test generation, record-and-replay and testing frameworks, drawing on 271 papers including 92 vision-based studies.
- [CrashTranslator: Automatically Reproducing Mobile Application Crashes Directly from Stack Trace](https://awesomecua.com/resources/arxiv-2310-07128/) — 2023-10-11
  Introduces CrashTranslator, which predicts GUI exploration steps from stack traces with an LLM and uses RL-guided search to reproduce crashes in Android apps.
- [AXNav: Replaying Accessibility Tests from Natural Language](https://awesomecua.com/resources/arxiv-2310-02424/) — 2023-10-03
  Introduces an LLM and pixel-based UI system that executes natural-language accessibility tests, records navigable videos and flags potential interface issues.
- [Prompting Is All You Need: Automated Android Bug Replay with Large Language Models](https://awesomecua.com/resources/arxiv-2306-01987/) — 2023-06-03
  Introduces AdbGPT, a prompting-based approach that uses LLMs to replay app bugs from written reports, applying few-shot examples and reasoning without model training.
- [Responsible Task Automation: Empowering Large Language Models as Responsible Task Automators](https://awesomecua.com/resources/arxiv-2306-01242/) — 2023-06-02
  Presents ResponsibleTA, a coordinator-executor framework that checks command feasibility and task completion while using local memory for privacy-related controls. The paper compares prompted and learned implementations and evaluates them on UI task automation.
- [DroidBot-GPT: GPT-powered UI Automation for Android](https://awesomecua.com/resources/arxiv-2304-07061/) — 2023-04-14
  Transforms Android UI states and available actions into language prompts for an LLM to choose and execute task steps.
- [FLAME: A small language model for spreadsheet formulas](https://awesomecua.com/resources/arxiv-2301-13779/) — 2023-01-31
  Introduces FLAME, a model trained on Excel formulas for spreadsheet formula repair, completion and retrieval, supporting formula authoring in spreadsheet software.
- [Fill in the Blank: Context-aware Automated Text Input Generation for Mobile GUI Testing](https://awesomecua.com/resources/arxiv-2212-04732/) — 2022-12-09
  Introduces QTypist, an LLM-based method that generates text inputs from mobile GUI context and integrates with automated testing tools to help them reach further app pages.
- [CORNET: Learning Table Formatting Rules By Example](https://awesomecua.com/resources/arxiv-2208-06032/) — 2022-08-11
  Introduces CORNET, a system that learns spreadsheet conditional-formatting rules from cells formatted by users, using symbolic rule enumeration and a neural ranker.
- [A data-driven approach for learning to control computers](https://awesomecua.com/resources/arxiv-2202-08137/) — 2022-02-16
  Combines reinforcement learning with behavioral priors from human interactions to learn computer control through keyboard and mouse actions.
- [A Systematic Literature Review of Automated Techniques for Functional GUI Testing of Mobile Applications](https://awesomecua.com/resources/arxiv-1812-11470/) — 2018-12-30
  Surveys automated functional GUI testing techniques for mobile apps, comparing the effectiveness, efficiency and practicality of approaches reported in 25 studies.
- [Rousillon: Scraping Distributed Hierarchical Web Data](https://awesomecua.com/resources/url-97c0b1896525632434e2/) — 2018
  Introduces Rousillon, which generalizes a demonstration of collecting one hierarchical data row into a browser-automation program that traverses related pages. The paper develops relation-selection and generalization methods and evaluates users building such scripts.
- [GUI Testing Using Computer Vision](https://awesomecua.com/resources/url-6262c757080f8838e62c/) — 2010-04
  Presents visual GUI test scripts that use images to specify actions and expected screen feedback. Recording both input events and screenshots can generate tests from demonstrations, supporting unit, regression, and test-driven workflows.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.com/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.
- [Eager: Programming Repetitive Tasks by Example](https://awesomecua.com/resources/url-bf0c11018e49dff6aeec/) — 1991
  Describes Eager, which detects repeated HyperCard interactions, generalizes them into loops, and previews predicted actions by highlighting interface objects. Users can then ask it to execute the inferred repetitive task.

## 评测基准

- [cskwork vigil](https://awesomecua.com/resources/github-cskwork-vigil/) — Date not recorded
  Continuous browser QA harness that reproduces reported bugs and autonomously expands end-to-end test coverage on live web URLs.
- [DSH QA](https://awesomecua.com/resources/github-zseven-w-dsh-qa/) — Date not recorded
  DeepSeek Harness QA plugin where an autonomous browser agent explores live web applications to discover functional and UX bugs.
- [hyprbench](https://awesomecua.com/resources/github-crispwisp-hyprbench/) — Date not recorded
  hyprbench is an OSWorld-style computer-use benchmark for the Linux Hyprland Wayland compositor with scripted window-management verifiers.
- [mimiq](https://awesomecua.com/resources/github-gojiplus-mimiq/) — Date not recorded
  mimiq is a dynamic end-to-end agentic simulation and web UI evaluation runner integrating Cypress, Playwright, and Stagehand.
- [Nightshift](https://awesomecua.com/resources/github-yayaq1-nightshift/) — Date not recorded
  Black-box computer-use QA harness on Solari that evaluates live user interfaces without access to application test hooks.
- [Simulation Labs](https://awesomecua.com/resources/github-satyamdave-simulation-labs/) — Date not recorded
  Behavioral CI gate where computer-use agents test signup, checkout, and onboarding flows on every deployment.
- [solari-playtest](https://awesomecua.com/resources/github-moazessam376-dev-solari-playtest/) — Date not recorded
  Autonomous playtesting agent and evaluation harness on Solari that builds web games from Git and tests gameplay in a real browser.
- [SWEeper-Bench](https://awesomecua.com/resources/github-zlab-princeton-sweeper-bench/) — Date not recorded
  SWEeper-Bench evaluates whether interactive GUI and browser agents can autonomously discover and reproduce 200 real bugs in open-source software.
- [taskproof](https://awesomecua.com/resources/github-taskproof-taskproof/) — Date not recorded
  taskproof is an open-source CI harness that tests whether real AI computer-use and browser agents can complete tasks on live websites.
- [TestPilot](https://awesomecua.com/resources/github-h0ngza1-testpilot/) — Date not recorded
  Agentic end-to-end web testing platform that executes natural-language test cases in live browsers.

## 模型

- [ShowUI-π](https://awesomecua.com/resources/github-showlab-showui-pi/) — Date not recorded
  Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.

## 工程与产业

- [19ska Computer-Use Automation](https://awesomecua.com/resources/github-19ska-computer-use-automation/) — Date not recorded
  Uses an LLM to discover a UI workflow once and compiles the trajectory into a deterministic replay script.
- [988hj7tczd-oss dsh-computer-use](https://awesomecua.com/resources/github-988hj7tczd-oss-dsh-computer-use/) — Date not recorded
  Cross-platform DeepSeek Harness computer-use plugin featuring an independent virtual cursor, UI grounding, and desktop input.
- [a11y-computer-use](https://awesomecua.com/resources/github-perception-dynamics-inc-a11y-computer-use/) — Date not recorded
  Accessibility-first computer-use runtime that feeds pruned accessibility-tree snapshots to AI agents so they click semantic UI elements.
- [aashutoshkumarr JARVIS Desktop Assistant](https://awesomecua.com/resources/github-aashutoshkumarr-ai-desktop-assistant/) — Date not recorded
  Python-based voice and GUI desktop automation assistant for Windows.
- [AbaoPal (阿宝Pal)](https://awesomecua.com/resources/github-banye-technology-abaopal/) — Date not recorded
  Open-source multi-agent Android phone automation assistant that understands screens, plans cross-app tasks, and executes reusable skills.
- [Accio Computer Use](https://awesomecua.com/resources/github-accio-org-accio-cu/) — Date not recorded
  Hybrid computer-use Python framework combining GUI actions, CLIs, APIs, and file operations in unified workflows.
- [AClaw](https://awesomecua.com/resources/github-magnusdot-aclaw/) — Date not recorded
  Packaged local command center for running and monitoring personal OpenClaw computer-use agents.
- [ActionAnything](https://awesomecua.com/resources/github-xxwtiancai-action-anything/) — Date not recorded
  Model-agnostic runtime for evaluating, approving, recording, and replaying AI agent actions across desktop and web interfaces.
- [ACUTE-CODE](https://awesomecua.com/resources/github-testplay-byte-acute-code/) — Date not recorded
  Local-first, extension-first multi-agent coding and computer-use workbench.
- [ADB MCP Server Pro](https://awesomecua.com/resources/github-tiendung2k03-adb-mcp-server-pro/) — Date not recorded
  Model Context Protocol server for Android device control via ADB featuring self-learning UI element maps.
- [adb-automation-mcp](https://awesomecua.com/resources/github-allaudin-adb-automation-mcp/) — Date not recorded
  Model Context Protocol server exposing Android Debug Bridge (ADB) device inspection and input actions as typed tools.
- [Aegis-Agent (Privacy Firewall Browser Agent)](https://awesomecua.com/resources/github-lukan-lawslaf-aegis-agent/) — Date not recorded
  Privacy-first browser agent framework that blurs faces and redacts PII in screenshots before sending observations to cloud LLMs.
- [aegis-desktop](https://awesomecua.com/resources/github-mihneateodorstoica-aegis-desktop/) — Date not recorded
  Extensible Linux-first desktop-control MCP server with pluggable window, input, screenshot, OCR, and policy backends.
- [AeonMind agenthands](https://awesomecua.com/resources/github-aeonmindai-agenthands/) — Date not recorded
  Human-calibrated mouse trajectory and keyboard timing synthesis library for browser and desktop agents.
- [Aether Browser MCP](https://awesomecua.com/resources/github-longebane-aether-browser-mcp/) — Date not recorded
  Model Context Protocol server for driving headless and headful browser automation workflows.
- [Aevora](https://awesomecua.com/resources/github-atluri0001-aevora/) — Date not recorded
  Autonomous web agent that translates natural-language intent into multi-step browser actions.
- [aevra](https://awesomecua.com/resources/github-the-long-ride-aevra/) — Date not recorded
  Secure Model Context Protocol gateway enabling ChatGPT, Claude, and Grok to remotely execute commands and control a host machine.
- [afa-cloud desktop-gui-automation-cua](https://awesomecua.com/resources/github-afa-cloud-desktop-gui-automation-cua/) — Date not recorded
  macOS desktop GUI automation skill built on `cua-driver` combining Accessibility trees with pixel-level fallback.
- [Agent Access](https://awesomecua.com/resources/github-r266-tech-agent-access/) — Date not recorded
  Universal access layer that routes websites, apps, and repeated workflows into agent-native CLIs with CDP and GUI fallback.
- [Agent Chrome](https://awesomecua.com/resources/github-leozhengliu-pixel-agent-chrome/) — Date not recorded
  Chrome Manifest V3 extension and local MCP bridge enabling coding agents to drive live browser tabs.
- [Agent Cursor & GroundSight](https://awesomecua.com/resources/github-dwstar79-agent-cursor/) — Date not recorded
  Accuracy engine for computer-use agents pairing a machine-readable cursor overlay (Agent Cursor) with local visual verification (GroundSight).
- [Agent Desktop Harness (ADH)](https://awesomecua.com/resources/github-xuyw1997-agent-desktop-harness/) — Date not recorded
  Native Windows desktop computer-use and reusable RPA harness exposing CLI, MCP, Python, and C++ interfaces.
- [Agent Friday](https://awesomecua.com/resources/github-mahsaanullah-agent-friday/) — Date not recorded
  Autonomous OS-level desktop assistant powered by LangGraph for multi-step system and GUI workflows.
- [Agent Hands](https://awesomecua.com/resources/github-ashishkosana-agent-hands/) — Date not recorded
  Computer-use automation infrastructure for legacy financial software that compiles LLM-discovered UI flows into deterministic replays.
- [Agent Phone Use](https://awesomecua.com/resources/github-lucioliu-agent-phone-use/) — Date not recorded
  Enables AI agents on Windows to control Android phones over local Wi-Fi using official `scrcpy` streaming and ADB.
- [Agent Verify](https://awesomecua.com/resources/github-anotb-agent-verify/) — Date not recorded
  CAPTCHA and human-verification solver skill keeping ChatGPT and Codex browser automation tasks unblocked.
- [Agent WebBridge](https://awesomecua.com/resources/github-jeet-dhandha-agent-webbridge/) — Date not recorded
  Open-source browser automation bridge and MCP server connecting Claude Code, Cursor, and coding agents to live Chrome tabs.
- [Agent WebBridge CLI](https://awesomecua.com/resources/github-0xibra-agent-webbridge-cli/) — Date not recorded
  Clean-room local CDP relay (MV3 Chrome extension + daemon + CLI) for driving a user's real Chrome browser.
- [Agent Zero](https://awesomecua.com/resources/github-agent0ai-agent-zero/) — Date not recorded
  Open-source agent with its own sandboxed Linux workspace that researches, writes code and works with documents using a terminal, a browser and desktop apps.
- [agent-browser](https://awesomecua.com/resources/github-vercel-labs-agent-browser/) — Date not recorded
  A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.
- [agent-chrome-mcp](https://awesomecua.com/resources/github-luorui-123-agent-chrome-mcp/) — Date not recorded
  Open-source Model Context Protocol server connecting Codex, Claude, and Cursor to a user's logged-in Chrome browser via CDP.
- [agent-desktop](https://awesomecua.com/resources/github-lahfir-agent-desktop/) — Date not recorded
  agent-desktop is a Rust CLI that exposes cross-platform OS accessibility trees and native UI actions as compact JSON for AI agents.
- [agent-desktop (macOS Multi-Account Sandbox)](https://awesomecua.com/resources/github-dianavocado181-agent-desktop/) — Date not recorded
  Gives AI computer-use agents a dedicated macOS user account and isolated desktop session viewable live from the main screen.
- [agent-fleet](https://awesomecua.com/resources/github-mskazemi-agent-fleet/) — Date not recorded
  Orchestrates parallel Claude Code and computer-use sessions against a shared, dependency-aware task queue.
- [Agent-OS (J.A.R.V.I.S. macOS Harness)](https://awesomecua.com/resources/github-my-cmdhub-agent-os/) — Date not recorded
  Voice-first macOS accessibility agent that reads screen state as structured text and verifies every GUI action.
- [agent-qa](https://awesomecua.com/resources/github-vostride-agent-qa/) — Date not recorded
  agent-qa is an AI quality-assurance runner that executes natural-language user-journey tests across web, Android, and iOS interfaces.
- [agent-seat-linux](https://awesomecua.com/resources/github-muhibnayem-agent-seat-linux/) — Date not recorded
  Provides application-scoped Wayland screen capture and isolated input seats for Linux automation agents.
- [AgentCursor](https://awesomecua.com/resources/github-kumard3-agentcursor/) — Date not recorded
  Reads macOS application windows as compact text affordances (~9 tokens per click) and drives a human-like virtual cursor over MCP.
- [AgentCurtain](https://awesomecua.com/resources/github-felixlark-agent-curtain/) — Date not recorded
  AgentCurtain is a macOS menu-bar utility that dims physical displays and blocks physical input while keeping unattended GUI agent sessions running.
- [AgentDesk (Enterprise Digital Workforce Platform)](https://awesomecua.com/resources/github-huzjie-agentdesk/) — Date not recorded
  Enterprise digital workforce operations platform combining computer-use execution, reusable skills, and governance.
- [AgentDesktopLinux](https://awesomecua.com/resources/github-edwaks-agentdesktoplinux/) — Date not recorded
  Linux desktop and VPS computer-use agent for TaskCapitan capable of driving GUI applications and browsers.
- [AgentDock](https://awesomecua.com/resources/github-rakeshnirzari1-agentdock/) — Date not recorded
  Zero-dependency Chrome DevTools Protocol runtime for AI agents to drive headless or headful Chromium directly.
- [Agente Pessoal](https://awesomecua.com/resources/github-thomas-adrian-soler-nilsson-agente-pessoal/) — Date not recorded
  Multimodal personal AI desktop assistant with voice interaction, persistent memory, and OS automation.
- [Agentic Android](https://awesomecua.com/resources/github-xdope7137-agentic-android/) — Date not recorded
  LLM-powered Android agent over ADB that reads the screen, executes tap/swipe/type actions, and verifies outcomes at each step.
- [agentic-cb (CLI Browser Control Plane)](https://awesomecua.com/resources/github-santusht06-agentic-cb/) — Date not recorded
  CLI browser control plane unifying web session automation across messaging and productivity web apps.
- [AgentiTest](https://awesomecua.com/resources/github-kweinmeister-agentitest/) — Date not recorded
  AgentiTest is a natural-language browser test automation framework built on Python pytest, Allure reporting, and LLM web agents.
- [AgentLimb](https://awesomecua.com/resources/github-hooosberg-agentlimb/) — Date not recorded
  Chrome extension and local bridge that lets Claude Code, Cursor, and Codex drive the user's live Chrome browser.
- [AgentP](https://awesomecua.com/resources/github-omerfeyzioglu-agentp-macos/) — Date not recorded
  AgentP is a fast macOS computer-use agent where Gemini plans once and a local Jev System-One model executes steps via the Accessibility API.
- [AgentSeat](https://awesomecua.com/resources/github-vimalinx-agentseat/) — Date not recorded
  Lightweight Wayland scaffold isolating an AI agent to operate a single GUI application inside its own virtual seat.
- [AgentSynth task-generation pipeline](https://awesomecua.com/resources/github-sunblaze-ucb-agentsynth/) — Date not recorded
  Generates synthetic computer-use tasks and records trajectories in OSWorld desktop environments and InSTA browser environments.
- [AGY Computer Use](https://awesomecua.com/resources/github-orakulzero-agy-computer-use/) — Date not recorded
  AGY Computer Use provides native Windows desktop automation combining UI Automation trees, Set-of-Marks grounding, and background PrintWindow capture.
- [AH64-dll Browser Automation Toolkit](https://awesomecua.com/resources/github-ah64-dll-browser-automation-toolkit/) — Date not recorded
  Suite of five Python CDP utilities including a page watcher, form filler, table scraper, DOM change differ, and health checker.
- [ahsaanfarooq browser-agent MCP](https://awesomecua.com/resources/github-ahsaanfarooq-browser-agent/) — Date not recorded
  Model Context Protocol server giving Claude a persistent, multi-profile logged-in Chrome browser.
- [AI Browser Bridge](https://awesomecua.com/resources/github-xinqi5921-ai-browser-bridge/) — Date not recorded
  Model Context Protocol server and Chrome extension bridging AI assistants to live browser tabs.
- [AI Deep Search Agent (AI 深度搜索助手)](https://awesomecua.com/resources/github-gupi-bill-ai-deep-search-agent/) — Date not recorded
  Visual browser agent that drives a real Microsoft Edge window from natural-language goals to conduct deep web research.
- [AI Medical Claim Form-Filling Agent](https://awesomecua.com/resources/github-caicai-jin-ai-medicalclaimform-filling-agent/) — Date not recorded
  LLM-driven browser agent that extracts patient intake data and autonomously fills and submits web medical claim forms.
- [AI-Work](https://awesomecua.com/resources/github-peiwenzhang-git-ai-work/) — Date not recorded
  Human-in-the-loop Windows desktop automation runtime with MCP support, bounded file access, and step approval.
- [AI-XiaoDao Browser MCP Server](https://awesomecua.com/resources/github-ai-xiaodao-ai-browser-mcp/) — Date not recorded
  Windows local browser automation MCP server built on an embedded CEF Chromium engine exposing 334 browser control tools.
- [AiBrowser for Android](https://awesomecua.com/resources/github-doable-team-aibrowser-android/) — Date not recorded
  Turns a spare Android phone into a headed Chromium instance that AI agents can drive remotely.
- [aic-pod](https://awesomecua.com/resources/github-veypi-aic-pod/) — Date not recorded
  Turns a physical or virtual machine into an LLM-callable execution node with sandboxed shell, file, browser, and desktop control.
- [AILEEN Desktop](https://awesomecua.com/resources/github-haixu8396-png-aileen-desktop/) — Date not recorded
  Windows desktop AI assistant combining a Live2D interactive character with screen perception and desktop tool execution.
- [Ailoy](https://awesomecua.com/resources/github-brekkylab-ailoy/) — Date not recorded
  Ailoy is a multi-language AI agent SDK that provisions isolated microVM sandboxes for computer-use, CAD, and desktop automation agents.
- [AINative Browser MCP](https://awesomecua.com/resources/github-ainative-studio-ainative-browser-mcp/) — Date not recorded
  Model Context Protocol server exposing 6 high-level tools for AI-powered web interaction and structured data extraction.
- [AIPex](https://awesomecua.com/resources/github-aipexstudio-aipex/) — Date not recorded
  AIPex is a privacy-first Chrome browser automation agent that operates tabs, DOM elements, and user sessions via CDP and MCP.
- [Airi-PC Computer Mode Runtime](https://awesomecua.com/resources/github-arancione3000-airi-pc-bootstrap/) — Date not recorded
  Local Computer Mode runtime and reproducible bootstrap for the Airi-PC desktop agent.
- [Airplane Check-In Skill](https://awesomecua.com/resources/github-bee-san-airplane-checkin-skill/) — Date not recorded
  Privacy-conscious Hermes browser skill for scheduled, verified multi-airline web check-in.
- [AIVANE](https://awesomecua.com/resources/github-taiyouqu-aivane/) — Date not recorded
  AIVANE is a cross-platform GUI automation assistant that combines YOLO icon detection, OCR, and multimodal LLMs for desktop control.
- [alohajet CLI](https://awesomecua.com/resources/github-alohabrowser-alohajet-cli/) — Date not recorded
  Official Aloha Browser CLI and MCP server for driving a real browser with stable element refs.
- [Altairpaca DSH Computer Use for Windows](https://awesomecua.com/resources/github-altairpaca-dsh-computer-use-windows/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness providing window-bound screenshots, OCR grounding, and verified clicks.
- [Alumnium](https://awesomecua.com/resources/github-alumnium-hq-alumnium/) — Date not recorded
  An AI-native end-to-end testing library and MCP that lets agents interact with applications through automation drivers and verify assertions.
- [amajorai Ghost Desktop MCP](https://awesomecua.com/resources/github-amajorai-ghost/) — Date not recorded
  Desktop-automation Model Context Protocol server providing screen perception and mouse/keyboard input control for AI agents.
- [Amazon Music MCP Server](https://awesomecua.com/resources/github-shadowsdistant-amazon-music-mcp/) — Date not recorded
  Model Context Protocol server for searching and controlling Amazon Music playback from Claude Desktop.
- [Amazon Nova Act](https://awesomecua.com/resources/url-dec156cbf0cb1181f7b6/) — Date not recorded
  AWS service for building and deploying agents that automate browser-based UI workflows from natural language and Python, powered by a custom Nova 2 Lite model.
- [Amazon Return Skill](https://awesomecua.com/resources/github-peterquads-amazon-return/) — Date not recorded
  Claude browser skill that completes end-to-end Amazon return workflows inside the user's signed-in browser.
- [amcu (Another macOS Computer Use)](https://awesomecua.com/resources/github-uoox-amcu/) — Date not recorded
  Single-binary, dependency-free macOS computer-use tool that reads and drives Mac apps without stealing cursor or window focus.
- [Anchor-Inference Daedalus](https://awesomecua.com/resources/github-anchor-inference-daedalus/) — Date not recorded
  Self-developing personal AI agent with its own desktop app, persistent memory, and computer-use tools.
- [Android-MCP-go](https://awesomecua.com/resources/github-tintupratap-android-mcp-go/) — Date not recorded
  Self-contained Go Model Context Protocol server for Android automation with managed ADB, automatic USB-to-Wi-Fi handoff, and `scrcpy`.
- [android-use](https://awesomecua.com/resources/github-austinintelligence-android-use/) — Date not recorded
  MCP server and CLI giving AI agents fast, bounded access to physical Android devices and emulators.
- [android_mcp](https://awesomecua.com/resources/github-void032-android-mcp/) — Date not recorded
  Model Context Protocol server giving coding agents screenshot, tap, swipe, and UI inspection control over Android devices.
- [AndroidClaw](https://awesomecua.com/resources/github-xiuqianli1996-androidclaw/) — Date not recorded
  Android-native LLM phone agent operating directly on-device via Android AccessibilityService and screen hierarchy parsing.
- [AndroidEnv](https://awesomecua.com/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [AndroidMCP](https://awesomecua.com/resources/github-qazmko72-android-mcp-server/) — Date not recorded
  Native on-device Android Model Context Protocol server exposing phone UI and system capabilities directly without a host PC.
- [Anionex DSH Computer Use](https://awesomecua.com/resources/github-anionex-dsh-computer-use/) — Date not recorded
  macOS computer-use plugin for DeepSeek Harness featuring fresh Accessibility observations, stale-state rejection, and scoped permissions.
- [anpl1623 AgentOS](https://awesomecua.com/resources/github-anpl1623-agentos/) — Date not recorded
  Local-first open-source agent runtime for safely executing AI-driven tasks on a user's personal computer.
- [Anthropic Computer Use for Mac](https://awesomecua.com/resources/github-deedy-mac-computer-use/) — Date not recorded
  Adapts the Anthropic Claude Computer Use reference agent to control a native macOS desktop using PyAutoGUI and cliclick.
- [AntiGravity Submit Helper](https://awesomecua.com/resources/github-sahajasakhunala-antigravity-submit-helper/) — Date not recorded
  Windows AutoHotkey v2 desktop automation utility that detects and interacts with Antigravity agent prompts.
- [AntyBrowser SDK](https://awesomecua.com/resources/github-antybrowser-sdk/) — Date not recorded
  Official multi-language SDKs (TypeScript, Python, C#, Go, PHP, Ruby) for driving AntyBrowser anti-detect browser profiles.
- [AnyBrowser](https://awesomecua.com/resources/github-christopher-inegbedion-anybrowser/) — Date not recorded
  Pluggable browser-automation and web-agent runtime supporting interchangeable LLM providers and browser engines.
- [ANZU Superassistant (Jarvis)](https://awesomecua.com/resources/github-daan298261-jarvis/) — Date not recorded
  Local-first Windows desktop agent with HUD, Kokoro voice, browser automation, Office integration, and Android control.
- [aos (Agent Operating System CLI)](https://awesomecua.com/resources/github-muthuishere-aos/) — Date not recorded
  Unified CLI layer over host machines allowing AI agents to drive desktop apps and terminals without taking over user focus.
- [Apache Maka](https://awesomecua.com/resources/github-apache-maka/) — Date not recorded
  Apache Maka is an agent workspace for macOS that records verifiable execution traces across browser, terminal, and GUI actions.
- [ApexCommander-RS](https://awesomecua.com/resources/github-buckster123-apexcommander-rs/) — Date not recorded
  AT-SPI-first Linux computer-use CLI and Model Context Protocol server written in Rust.
- [App Use](https://awesomecua.com/resources/github-erickjtorres-app-use/) — Date not recorded
  App Use is a Python framework that connects LLM agents to Android and iOS mobile applications via Appium and accessibility-tree inspection.
- [AppClaw](https://awesomecua.com/resources/github-appclawhq-appclaw/) — Date not recorded
  AppClaw is a mobile automation agent for Android and iOS that executes natural-language tasks by inspecting accessibility trees and tapping screens.
- [Appium](https://awesomecua.com/resources/github-appium-appium/) — Date not recorded
  Open-source WebDriver-based automation server for mobile, desktop and IoT apps, extended by per-platform drivers for iOS, Android, macOS and Windows, plugins, and clients in Java, Python, Ruby and C#.
- [Apprentice](https://awesomecua.com/resources/github-bluzername-apprentice/) — Date not recorded
  Apprentice is a local-first macOS agent that observes repeated user routines across allowlisted apps and replays them with click-by-click approval.
- [arc-control-mcp](https://awesomecua.com/resources/github-db-25-arc-control-mcp/) — Date not recorded
  Model Context Protocol server that drives the Arc browser on macOS, including spaces, tabs, navigation, and page interaction.
- [Arelis](https://awesomecua.com/resources/github-sanct1x-arelis/) — Date not recorded
  Locally hosted Windows personal AI research and desktop assistant powered by Ollama with zero cloud dependencies.
- [Argus (macOS Vision-AX MCP Plugin)](https://awesomecua.com/resources/github-korisame-argus/) — Date not recorded
  Claude Code MCP plugin providing 40 macOS automation tools with a unified Accessibility, AppleScript, and Vision OCR resolver.
- [AriaOS](https://awesomecua.com/resources/github-jeremie225ci-ariaos/) — Date not recorded
  AriaOS provisions a dedicated virtual machine desktop where computer-use agents operate GUI apps, terminals, and voice interactions.
- [Ark Web](https://awesomecua.com/resources/github-aebt01-ark-web/) — Date not recorded
  Manifest V3 Chrome extension and Node.js bridge server enabling AI agents to control the user's real browser.
- [ARPO training framework](https://awesomecua.com/resources/github-jia-lab-research-arpo/) — Date not recorded
  Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.
- [ascript-mcp](https://awesomecua.com/resources/github-ascript-cn-ascript-mcp/) — Date not recorded
  Model Context Protocol server for automating real Android, iOS, and Windows devices from Claude, Cursor, and MCP clients.
- [asdasdsdsdasdasdasd DSH Linux X11 Computer Use](https://awesomecua.com/resources/github-asdasdsdsdasdasdasd-dsh-computer-use/) — Date not recorded
  Linux X11 computer-use plugin for DeepSeek Harness supporting screenshots, mouse/keyboard control, and window management.
- [AskUI Vision Agent Python SDK](https://awesomecua.com/resources/github-askui-python-sdk/) — Date not recorded
  AskUI Vision Agent Python SDK provides cross-platform visual UI element localization and desktop/mobile automation APIs for AI agents.
- [Astra AI (Windows Gemini Live Assistant)](https://awesomecua.com/resources/github-chinmaybitne-astra-ai/) — Date not recorded
  Voice-first Windows AI desktop assistant powered by Gemini Live with screen vision and system control.
- [Astra AI Browser](https://awesomecua.com/resources/github-bennix-astraaibrowser/) — Date not recorded
  Native Apple Silicon macOS AI browser combining WebKit browsing with an integrated autonomous web agent.
- [AstraClaw Agent Computer Use MCP](https://awesomecua.com/resources/github-astraclawteam-agent-computer-use-mcp/) — Date not recorded
  Evidence-driven Windows Computer Use MCP server providing semantic UI observation, secure screenshots, and verified actions.
- [AstronRPA](https://awesomecua.com/resources/github-iflytek-astron-rpa/) — Date not recorded
  AstronRPA is an open-source enterprise desktop and browser RPA platform with visual workflow orchestration and MCP server integration.
- [Atlas Desktop Agent](https://awesomecua.com/resources/github-dortanes-atlas/) — Date not recorded
  Atlas is a voice-and-screen desktop agent that observes active windows and executes mouse and keyboard actions.
- [atlas-desktop](https://awesomecua.com/resources/github-abydin-atlas-desktop/) — Date not recorded
  macOS desktop-control CLI that reads any application's UI hierarchy as structured JSON and dispatches native actions.
- [AUITestAgent](https://awesomecua.com/resources/github-bz-lab-auitestagent/) — Date not recorded
  Generates mobile GUI interactions from natural-language test requirements and checks application behavior against those requirements.
- [AURA (Agent-User Remote Automation)](https://awesomecua.com/resources/github-lvusyy-aura/) — Date not recorded
  Closed-loop screenshot-click-verify remote automation framework over MCP for desktop and mobile devices.
- [AURA Voice AI Desktop Assistant](https://awesomecua.com/resources/github-sajeebtheanalyst-aura-ai-desktop-assistant/) — Date not recorded
  Multilingual frameless desktop AI assistant for Windows supporting voice commands and GUI task automation.
- [Auten MCP Server](https://awesomecua.com/resources/github-auten-ai-auten-mcp/) — Date not recorded
  Auten MCP Server gives MCP clients native screen capture, UI element inspection, and mouse/keyboard control across macOS, Windows, and Linux.
- [Auto WebMCP Chrome](https://awesomecua.com/resources/github-pauloportella-auto-webmcp-chrome/) — Date not recorded
  Chrome extension that automatically converts standard HTML web forms into structured WebMCP tools for browser agents.
- [Auto_OS](https://awesomecua.com/resources/github-jaswanth1902-auto-os/) — Date not recorded
  Sub-30ms Windows desktop automation primitive using direct Win32 UI Automation tree traversal and native input injection.
- [AutoBot](https://awesomecua.com/resources/github-demeyer1-autobot/) — Date not recorded
  AutoBot is a self-improving agent harness for ChatGPT and Codex on macOS featuring persistent on-disk memory and browser evaluation.
- [AutoBot-AI](https://awesomecua.com/resources/github-mrveiss-autobot-ai/) — Date not recorded
  AutoBot-AI is a self-hosted autonomous agent platform combining vision-driven browser and desktop control, voice interaction, and workflow memory.
- [autocomputer](https://awesomecua.com/resources/github-yygg693-autocomputer/) — Date not recorded
  Desktop GUI automation platform combining a Rust execution core, Python SDK, MCP server, and HTML5 monitoring dashboard.
- [AutoCua](https://awesomecua.com/resources/github-computeruseagent-autocua/) — Date not recorded
  AutoCua is a multi-agent computer-use orchestration platform for automating end-to-end workflows across macOS, Windows, Linux, Android, and web.
- [Autodesk Claude Browser Test Skills](https://awesomecua.com/resources/github-autodesk-claude-browser-test-skills/) — Date not recorded
  Autodesk's Claude Code plugin providing an end-to-end browser test authoring, refinement, compilation, and execution pipeline over Playwright MCP.
- [AutoDoubao](https://awesomecua.com/resources/github-linxxcat000-autodoubao/) — Date not recorded
  Local Windows MCP bridge that automates logged-in Doubao web image generation and asset downloading for Codex and Hermes Agent.
- [AutoFiller Universal](https://awesomecua.com/resources/github-fedetrain-autofiller-universal/) — Date not recorded
  Batch web-form automation framework with self-healing selectors that runs LLM-free at runtime.
- [AutoGPT](https://awesomecua.com/resources/github-significant-gravitas-autogpt/) — Date not recorded
  AutoGPT is an open-source autonomous agent platform for building, orchestrating, and running multi-step web and workspace automation agents.
- [autoit-mcp](https://awesomecua.com/resources/github-benina-autoit-mcp/) — Date not recorded
  Portable Windows GUI-automation Model Context Protocol server for Claude Code built on AutoIt.
- [AutoKey](https://awesomecua.com/resources/github-autokey-autokey/) — Date not recorded
  AutoKey is a Python-scriptable desktop automation and keyboard/mouse macro utility for Linux and X11 environments.
- [Automation MCP](https://awesomecua.com/resources/github-ashwwwin-automation-mcp/) — Date not recorded
  Automation MCP is a macOS Model Context Protocol server that provides AI agents with mouse, keyboard, window, and screen capture tools.
- [Automify](https://awesomecua.com/resources/github-aldovincenti-automify/) — Date not recorded
  Automify is a Node.js computer-use framework unifying browser, CLI, and native desktop workflow automation for AI agents.
- [avids2 Jarvis](https://awesomecua.com/resources/github-avids2-jarvis/) — Date not recorded
  Real-time Chinese voice and desktop agent with persistent memory and Pi tool execution.
- [Awictor Relay](https://awesomecua.com/resources/github-awictor-relay/) — Date not recorded
  Autonomous web agent paired with a self-hosted browser that executes tasks dispatched via messaging apps.
- [axcli](https://awesomecua.com/resources/github-andelf-axcli/) — Date not recorded
  axcli is a Rust command-line tool for querying, inspecting, and automating macOS application UIs through the native Accessibility API.
- [Axon](https://awesomecua.com/resources/github-gxcsoccer-axon/) — Date not recorded
  macOS computer-use automation server and CLI exposing Accessibility API element control, AppleScript/JXA execution, and screenshots.
- [AXON OS](https://awesomecua.com/resources/github-frezzaroukos-axon-os/) — Date not recorded
  Local-first, policy-governed action layer for Linux desktop automation with preview, approval, and rollback receipts.
- [axstream](https://awesomecua.com/resources/github-milind-soni-axstream/) — Date not recorded
  Streaming JSON-lines action language and compiler for macOS computer-use agents.
- [AXTree API](https://awesomecua.com/resources/github-amaar-mc-axtree-api/) — Date not recorded
  Event-driven macOS Accessibility tree streaming server and action bridge for computer-use agents.
- [AzaiSakura dsh-computer-use (macOS)](https://awesomecua.com/resources/github-azaisakura-dsh-computer-use/) — Date not recorded
  Re-implementation of the OpenAI macOS Computer Use plugin tailored for DeepSeek Harness.
- [background-computer-use](https://awesomecua.com/resources/github-panchangam18-background-computer-use/) — Date not recorded
  MCP server and skill library for driving macOS applications in the background without stealing window focus or cursor control.
- [Bees Desktop](https://awesomecua.com/resources/github-bees-bot-bees-desktop/) — Date not recorded
  Thread-based multi-agent desktop runtime allowing a team of AI agents to collaborate over local files and browsers.
- [BeijingWahw DSH Computer Use Plugin](https://awesomecua.com/resources/github-beijingwahw-dsh-computer-use-plugin/) — Date not recorded
  Full-featured desktop computer-use plugin for DeepSeek Harness supporting multi-display capture, OCR, and GUI actions.
- [Better Computer Use](https://awesomecua.com/resources/github-suge8-better-computer-use/) — Date not recorded
  macOS background desktop control CLI for AI agents supporting window discovery, Accessibility-tree reads, and focus-free input.
- [Better Computer Use (Accessibility MCP)](https://awesomecua.com/resources/github-ridelink0-claude-computer-use/) — Date not recorded
  Provides an accessibility-tree MCP server for Claude Code to inspect and operate Windows and macOS desktop applications without screenshots.
- [Bflow (browser-automation-cli)](https://awesomecua.com/resources/github-khbayazidahmed-browser-automation-cli/) — Date not recorded
  Zero-dependency browser automation CLI and visual workflow recorder.
- [bg-driver-rs](https://awesomecua.com/resources/github-lvyuan1688-bg-driver-rs/) — Date not recorded
  Rust background computer-use driver for macOS, Windows, and Linux.
- [bgivenb Typed UI Capabilities](https://awesomecua.com/resources/github-bgivenb-computer-use-automation/) — Date not recorded
  Model-guided UI workflow discovery framework with signed human review and deterministic replay.
- [BLAXCY](https://awesomecua.com/resources/github-alex3430143-blaxcyds/) — Date not recorded
  BLAXCY is a policy-gated, self-verifying Linux desktop computer-use agent with action confirmation and state verification.
- [BLAXIN](https://awesomecua.com/resources/github-tasinxxx-blaxin/) — Date not recorded
  Open-source AI desktop agent for Linux that plans, executes, and verifies GUI and shell workflows.
- [Blender Computer Use Artist](https://awesomecua.com/resources/github-xiaof631-blender-computer-use-artist/) — Date not recorded
  Codex computer-use skill for automating Blender 3D modeling, rendering, animation, and visual QA.
- [Blue Steel](https://awesomecua.com/resources/github-apothic-ai-blue-steel/) — Date not recorded
  Vision-driven browser agent powered by the Camoufox stealth Firefox browser.
- [bm (Conversational Grocery Browser Agent)](https://awesomecua.com/resources/github-gonzalo123-bm/) — Date not recorded
  Conversational grocery shopping TUI agent built with Strands and Amazon Bedrock that drives a live web browser.
- [Boss Agent](https://awesomecua.com/resources/github-padolphylis-boss-agent/) — Date not recorded
  Local job-search browser agent that parses natural-language criteria, drives Chrome on Boss Zhipin, and manages application state.
- [Botright](https://awesomecua.com/resources/github-vinyzu-botright/) — Date not recorded
  Botright is a Playwright-based stealth browser automation framework with fingerprint spoofing and CAPTCHA-solving utilities.
- [Boxcar](https://awesomecua.com/resources/github-status-labs-boxcar/) — Date not recorded
  Boxcar provisions disposable Windows 11 and Ubuntu desktop virtual-machine sandboxes for LLM computer-use agents.
- [BraveCowNoFear Windows Computer Use](https://awesomecua.com/resources/github-bravecownofear-windows-computer-use/) — Date not recorded
  Local Windows computer-use plugin for Codex combining UIA3 semantic trees, MCP tools, SendInput, and window capture.
- [Brizo Use](https://awesomecua.com/resources/github-frankfromfuture-brizo/) — Date not recorded
  Open browser-use runtime, local bridge, CLI, and AI harness adapter for driving live web sessions.
- [browse-mcp](https://awesomecua.com/resources/github-that1drifter-browse-mcp/) — Date not recorded
  Headless-browser Model Context Protocol server for Claude, Codex, Gemini CLI, and Cursor.
- [Browsentic](https://awesomecua.com/resources/github-imshaikot-browsentic/) — Date not recorded
  Agentic browser harness providing an AI side panel and interactive control orb inside Chrome, Edge, and Arc.
- [Browser Agent Runtime Lite](https://awesomecua.com/resources/github-coolwkx-browser-agent-runtime-lite/) — Date not recorded
  Lightweight runtime for executing autonomous browser-agent perception and action loops.
- [Browser Auth-State Synchronizer](https://awesomecua.com/resources/github-sohan-a11y-auth-synchronizer/) — Date not recorded
  Synchronizes authenticated browser cookies and storage states across Playwright and agent browser sessions.
- [Browser Control Agent](https://awesomecua.com/resources/github-dhamaniasad-browser-control/) — Date not recorded
  Browser Control Agent is a Chrome extension that executes natural-language browser automation commands over live webpage DOM elements.
- [Browser Controller](https://awesomecua.com/resources/github-compnew2006-browser-controller/) — Date not recorded
  MCP server and Chrome extension giving coding agents live DOM, console, and interaction control over an existing browser.
- [Browser Harness](https://awesomecua.com/resources/github-browser-use-browser-harness/) — Date not recorded
  Browser Harness by Browser Use lets Claude Code, Codex, and Cursor drive the user's real logged-in Chrome browser via CDP.
- [Browser Terminal Use](https://awesomecua.com/resources/github-chaokunyang-browser-terminal-use/) — Date not recorded
  Pairs a Chrome extension, local daemon, and CLI to let agents execute commands inside browser-hosted cloud terminals with exit-code capture.
- [Browser Use Box (bux)](https://awesomecua.com/resources/github-browser-use-bux/) — Date not recorded
  Browser Use Box (bux) packages a 24/7 autonomous Claude Code and Browser Use web agent for self-hosted Linux servers.
- [Browser Use macOS Harness](https://awesomecua.com/resources/github-browser-use-macos-harness/) — Date not recorded
  Official Browser Use harness for provisioning and driving isolated macOS virtual machines and desktop sessions.
- [Browser Use Terminal](https://awesomecua.com/resources/github-browser-use-terminal/) — Date not recorded
  Browser Use Terminal is a Rust terminal user interface (TUI) for interactively controlling and monitoring browser-use agents.
- [browser-agent-kit](https://awesomecua.com/resources/github-nicolascine-browser-agent-kit/) — Date not recorded
  browser-agent-kit is a framework for building in-page AI agents that execute directly inside the live browser DOM context.
- [browser-copilot](https://awesomecua.com/resources/github-alexmercier25-browser-copilot/) — Date not recorded
  Lets AI agents drive the user's actual macOS browser window and logged-in tabs with interactive confirmation.
- [browser-for-ai (bfa)](https://awesomecua.com/resources/github-icueth-browser-for-ai/) — Date not recorded
  AI-oriented browser automation runtime and CLI exposing compact DOM observations and deterministic web actions.
- [browser-harness-bidi](https://awesomecua.com/resources/github-andrewdzzz-browser-harness-bidi/) — Date not recorded
  WebDriver BiDi-first browser automation harness connecting LLMs directly to live browsers with minimal dependencies.
- [browser-use-capsolver](https://awesomecua.com/resources/github-capsolver-browser-use-capsolver/) — Date not recorded
  Official CapSolver integration tools for Browser Use agents to detect and resolve CAPTCHA challenges during web workflows.
- [browser-use-rs](https://awesomecua.com/resources/github-bb-fat-browser-use-rs/) — Date not recorded
  browser-use-rs is a lightweight pure-Rust library for driving Chromium browsers over the Chrome DevTools Protocol with LLM agents.
- [Browser4](https://awesomecua.com/resources/github-platonai-browser4/) — Date not recorded
  Browser4 is an AI-native browser engine and coroutines runtime for high-concurrency web agents, workflow automation, and page extraction.
- [BrowserAct Skills](https://awesomecua.com/resources/github-browser-act-skills/) — Date not recorded
  BrowserAct Skills provides reusable browser-automation and web-extraction skill definitions for AI agents.
- [browserctl](https://awesomecua.com/resources/github-nguyenvanhuy0612-browserctl/) — Date not recorded
  Chrome extension, local bridge, and MCP server allowing AI agents to drive a real Chrome profile in the background.
- [BrowserGPT](https://awesomecua.com/resources/github-mayt-browsergpt/) — Date not recorded
  BrowserGPT is a browser automation script that uses GPT-4 to generate Playwright code for navigating and interacting with web pages from natural-language tasks.
- [Browserjack](https://awesomecua.com/resources/github-stickerdaniel-browserjack/) — Date not recorded
  Bridge that exposes OpenAI's installed Codex browser runtime to Claude Code and any MCP client on macOS.
- [browserkit](https://awesomecua.com/resources/github-browserkit-dev-browserkit/) — Date not recorded
  browserkit is a TypeScript framework for building site-specific MCP servers that operate over local, authenticated browser sessions.
- [BrowserPilot](https://awesomecua.com/resources/github-ai-naymul-browserpilot/) — Date not recorded
  BrowserPilot is an open-source stealth browser agent that executes natural-language web navigation and structured scraping workflows.
- [BrowserRig](https://awesomecua.com/resources/github-castor6-browserrig/) — Date not recorded
  Open-source local driver enabling trusted AI agents to control an existing signed-in Chromium browser.
- [browxai](https://awesomecua.com/resources/github-kalebteccom-browxai/) — Date not recorded
  browxai provides unified MCP-native control over Chromium, Firefox, and native desktop applications for AI agents.
- [Browy](https://awesomecua.com/resources/github-browyhq-browy/) — Date not recorded
  Browy is a browser automation agent that drives live Chrome tabs using existing AI coding CLI subscriptions.
- [BryantVanOrden OpenAgentFleet](https://awesomecua.com/resources/github-bryantvanorden-openagentfleet/) — Date not recorded
  Self-hosted fleet orchestrator provisioning sandboxed Linux desktop containers for autonomous computer-use agents.
- [Butler](https://awesomecua.com/resources/github-coasty-ai-butler/) — Date not recorded
  Butler is a voice-first macOS desktop assistant combining MCP tool execution with native Swift desktop control fallback.
- [BX Browser](https://awesomecua.com/resources/github-painbaba-bx-browser/) — Date not recorded
  DOM-first, vision-capable autonomous browser agent that plans and executes multi-step web tasks.
- [c-vision (DSH Vision & Computer Use Plugin)](https://awesomecua.com/resources/github-cczzyy-cn-c-vision/) — Date not recorded
  Autonomous vision and computer-use plugin for DeepSeek Harness providing screen capture, OCR, window listing, and GUI input.
- [CalebNewtonUSC Nova (Mac Operator)](https://awesomecua.com/resources/github-calebnewtonusc-nova/) — Date not recorded
  Autonomous macOS desktop operator that inspects screen state and drives native Mac applications.
- [Camel AI (Visual QA Agent)](https://awesomecua.com/resources/github-dilawarshafiq-camel-ai/) — Date not recorded
  Screen-driven QA agent that tests web and desktop applications through their rendered UI and hands off edge cases to humans.
- [CamoFox MCP](https://awesomecua.com/resources/github-redf0x1-camofox-mcp/) — Date not recorded
  Model Context Protocol server connecting Claude Desktop, Cursor, and OpenClaw to CamoFox anti-detection browser instances.
- [Camoufox](https://awesomecua.com/resources/github-daijro-camoufox/) — Date not recorded
  Camoufox is an open-source anti-detect Firefox browser with C++-level fingerprint rotation designed for web automation and AI browser agents.
- [Camoufox Playwright MCP](https://awesomecua.com/resources/github-chandu-cpz-camoufox-playwright-mcp/) — Date not recorded
  Drop-in Playwright Model Context Protocol server running on the Camoufox stealth Firefox engine.
- [caob23 DSH Browser Control](https://awesomecua.com/resources/github-caob23-dsh-browser-control/) — Date not recorded
  Chrome extension and DeepSeek Harness plugin allowing AI agents to directly operate the user's real browser.
- [CapMonster Cloud MCP Server](https://awesomecua.com/resources/github-capmonstercloud-capmonster-mcp-captcha-solver/) — Date not recorded
  Official CapMonster Cloud Model Context Protocol server for solving reCAPTCHA, Turnstile, and visual CAPTCHAs in browser agents.
- [Cappuccino](https://awesomecua.com/resources/github-gml-fmgroup-cappuccino/) — Date not recorded
  Cappuccino is a pure-vision desktop GUI agent that plans and executes multi-step computer tasks from natural-language instructions.
- [Capybara](https://awesomecua.com/resources/github-teamcapybara-capybara/) — Date not recorded
  Capybara is a web application acceptance testing framework that simulates user interactions through browser and headless drivers.
- [caravela](https://awesomecua.com/resources/github-kov-caravela/) — Date not recorded
  Programmatic browser-use CLI and library driving Chromium over CDP inside an optional managed Weston Wayland compositor.
- [case-sdk](https://awesomecua.com/resources/github-case-computers-case-sdk/) — Date not recorded
  Dual-mode macOS GUI automation SDK supporting structured JSON procedures, local/remote WebSocket runtimes, and MCP integration.
- [CDP Browser Harness](https://awesomecua.com/resources/github-abhishekchhetri020-browser-harness/) — Date not recorded
  Thin, editable Chrome DevTools Protocol harness connecting LLM agents to a user's real logged-in Chrome browser.
- [cdp-drive](https://awesomecua.com/resources/github-immineal-cdp-drive/) — Date not recorded
  Single-file zero-dependency Chrome DevTools Protocol driver for headless and headful Chrome automation without Playwright.
- [cdpilot](https://awesomecua.com/resources/github-mehmetnadir-cdpilot/) — Date not recorded
  Zero-dependency browser automation CLI built directly on raw Chrome DevTools Protocol WebSockets without Playwright or Puppeteer.
- [Celesto](https://awesomecua.com/resources/github-celestoai-celesto/) — Date not recorded
  Celesto provisions secure, persistent virtual desktop computers and browser sandboxes for AI agents.
- [cellar (Context Execution Layer)](https://awesomecua.com/resources/github-dilipod-cellar/) — Date not recorded
  cellar implements the Context Execution Layer (CEL), a structured context and action execution protocol for computer-use agents.
- [cfbrowse](https://awesomecua.com/resources/github-sp42k-cfbrowse/) — Date not recorded
  Go Chrome DevTools Protocol driver that resolves interactive anti-bot challenges headlessly for web agents.
- [ChangeShield](https://awesomecua.com/resources/github-kxvya18-chnage-shield/) — Date not recorded
  Self-repairing browser automation prototype that detects and adapts to third-party UI selector drift.
- [ChatGPT Web for Codex](https://awesomecua.com/resources/github-naakto14-codex-chatgpt-web-naakto-fork/) — Date not recorded
  Browser bridge exposing a logged-in ChatGPT Web session as a native model and tool provider for OpenAI Codex.
- [chatgpt-desktop-mcp](https://awesomecua.com/resources/github-cantbeblank96-chatgpt-mcp/) — Date not recorded
  Model Context Protocol server exposing the official Ubuntu/Linux ChatGPT Desktop app via 6 AT-SPI2 accessibility tools.
- [Chrest](https://awesomecua.com/resources/github-amarbel-llc-chrest/) — Date not recorded
  Chrest combines a browser extension, REST daemon, CLI, and MCP server for programmatically managing live Chrome and Firefox tabs and content.
- [Chromanche](https://awesomecua.com/resources/github-marcobazzani-chromanche/) — Date not recorded
  Self-hosted Chrome Manifest V3 extension and local MCP server allowing AI agents to control live browser tabs.
- [Chrome Actuator](https://awesomecua.com/resources/github-xlreon-chrome-actuator/) — Date not recorded
  Browser companion that lets Grok and other AI agents drive an already-open Chrome window.
- [Chrome DevTools MCP](https://awesomecua.com/resources/github-chromedevtools-chrome-devtools-mcp/) — Date not recorded
  MCP tools for browser control and inspection through Chrome DevTools.
- [Chrome Faithful](https://awesomecua.com/resources/github-bpc-oss-chrome-faithful/) — Date not recorded
  MCP server and Manifest V3 extension for faithful control of a user's real, logged-in Chrome profiles.
- [Chrome for AI](https://awesomecua.com/resources/github-pelag-michael-chrome-for-ai/) — Date not recorded
  Patchright-powered Model Context Protocol server enabling AI agents to drive real Google Chrome tabs and cookies.
- [Chrome Live MCP](https://awesomecua.com/resources/github-wankaiyi-chrome-live-mcp/) — Date not recorded
  Connects local stdio Model Context Protocol agents directly to an existing Chrome 144+ browser session.
- [Chrome MCP Server (18 Tools)](https://awesomecua.com/resources/github-syedazharmbnr1-chrome-mcp-server/) — Date not recorded
  Node.js Model Context Protocol server providing 18 tools for Chrome browser navigation, DOM interaction, and screenshot capture.
- [ChromeBoost](https://awesomecua.com/resources/github-lordamdal-chromeboost/) — Date not recorded
  Chrome extension and MCP server giving Claude Code direct control over the user's logged-in Chrome browser.
- [ChromeClaw](https://awesomecua.com/resources/github-algopian-chromeclaw/) — Date not recorded
  ChromeClaw runs an autonomous browser and workspace agent inside the Chrome extension sandbox with multi-provider LLM and tab automation tools.
- [chromedp](https://awesomecua.com/resources/github-chromedp-chromedp/) — Date not recorded
  A Go package for driving browsers through the Chrome DevTools Protocol, with actions for navigating pages, interacting with elements, and reading page content.
- [Chromeflow](https://awesomecua.com/resources/github-neodrew-chromeflow/) — Date not recorded
  Lets coding agents (Claude Code, Codex CLI) drive the user's real logged-in Chrome browser to click, fill forms, and inspect pages.
- [ChromeMCP (WSL2-to-Windows Bridge)](https://awesomecua.com/resources/github-rizonetech-chromemcp/) — Date not recorded
  Allows coding agents running inside WSL2 Linux to drive the host's signed-in Windows Chrome browser over Playwright MCP.
- [Claude Browser Bridge](https://awesomecua.com/resources/github-daazer-claude-browser-bridge/) — Date not recorded
  Local bridge allowing coding agents to read and drive the user's everyday logged-in Chrome profile.
- [Claude Codex Computer Use](https://awesomecua.com/resources/github-songkeys-claude-codex-computer-use/) — Date not recorded
  Bridge allowing Claude Code to invoke OpenAI Codex's native macOS Computer Use engine.
- [Claude Computer Use Demo for macOS](https://awesomecua.com/resources/github-pallavag-claude-computer-use-macos/) — Date not recorded
  Runs Anthropic Claude Computer Use directly on macOS without Docker by translating tool calls into native macOS screen capture and input actions.
- [Claude Computer-Use Tools MCP Server](https://awesomecua.com/resources/github-yossifibrahem-computer-use-mcp-server/) — Date not recorded
  Model Context Protocol server replicating Anthropic Claude's built-in computer-use tools (`view`, `click`, `type`, `key`) for any MCP client.
- [Claude in Safari](https://awesomecua.com/resources/github-dolomite1337-claude-in-safari/) — Date not recorded
  Open-source macOS Safari web extension that lets Claude read pages and execute interactive browser tasks locally.
- [Claude KVM](https://awesomecua.com/resources/github-aras-workspace-claude-kvm/) — Date not recorded
  Claude KVM is a macOS MCP server and VNC client that enables AI agents to observe and control remote desktop environments over VNC.
- [Claude Linux Desktop MCP](https://awesomecua.com/resources/github-lukelamb-claude-linux-mcp/) — Date not recorded
  Model Context Protocol extension giving Claude full Linux X11 desktop control across screenshots, windows, clipboard, and input.
- [Claude Quickstarts (Computer Use Demo)](https://awesomecua.com/resources/github-anthropics-claude-quickstarts/) — Date not recorded
  Anthropic reference implementations including the containerized Claude Computer Use desktop agent demo with Xvfb, VNC, and bash/browser tools.
- [claude-drives-gemini](https://awesomecua.com/resources/github-magicyangg-claude-drives-gemini/) — Date not recorded
  Claude Code skill that drives a logged-in Google Gemini web session in Chrome for cross-model consultation and research.
- [claude-firefox (Claude Code Browser Bridge)](https://awesomecua.com/resources/github-faran52-claude-code-browser-bridge/) — Date not recorded
  Firefox WebExtension, native-messaging host, and MCP server allowing Claude Code to read and drive Firefox tabs.
- [claude-minecraft-use](https://awesomecua.com/resources/github-observedobserver-claude-minecraft-use/) — Date not recorded
  Adapts Anthropic Claude Computer Use on macOS with continuous movement and camera controls to play Minecraft from screen observations.
- [ClaudeDesk](https://awesomecua.com/resources/github-phantivia-claudedesk/) — Date not recorded
  Streams the Windows desktop to a browser interface so coding agents can visually inspect and debug GUI applications.
- [Clawbrowser](https://awesomecua.com/resources/github-clawbrowser-clawbrowser/) — Date not recorded
  Clawbrowser is an agent-native managed Chromium runtime with fingerprint rotation, proxy routing, and persistent session state.
- [Clawd Cursor](https://awesomecua.com/resources/github-amrdab-clawdcursor/) — Date not recorded
  Local MCP server that compiles desktop screens into stable UI element maps with action verification and safety guardrails.
- [ClawMobile](https://awesomecua.com/resources/github-clawmobile-clawmobile/) — Date not recorded
  ClawMobile is an Android agent runtime built on OpenClaw for controlling mobile apps, learning reusable skills, and executing device workflows.
- [ClawTouch MCP](https://awesomecua.com/resources/github-tinqiao-oss-clawtouch-mcp/) — Date not recorded
  Model Context Protocol server that turns a Raspberry Pi Pico 2 into a hardware USB-HID keyboard and mouse for AI computer-use agents.
- [Clearcote Browser](https://awesomecua.com/resources/github-clearcotelabs-clearcote-browser/) — Date not recorded
  Open-source stealth Chromium browser with engine-level fingerprint spoofing designed as a drop-in runtime for AI web agents.
- [Clevrr Computer](https://awesomecua.com/resources/github-clevrr-ai-clevrr-computer/) — Date not recorded
  Clevrr Computer is a PyAutoGUI-based desktop automation agent that captures screenshots and executes mouse and keyboard actions from LLM plans.
- [CLI-Anything](https://awesomecua.com/resources/github-hkuds-cli-anything/) — Date not recorded
  CLI-Anything automatically wraps professional desktop GUI applications such as GIMP, Blender, and LibreOffice into structured agent-native CLIs.
- [ClickClickClick](https://awesomecua.com/resources/github-instavm-clickclickclick/) — Date not recorded
  ClickClickClick is a framework for autonomous Android and desktop computer use supporting local and cloud vision-language models.
- [Clickyy](https://awesomecua.com/resources/github-jayamitkatariya-clickyyy/) — Date not recorded
  Clickyy is a macOS desktop automation CLI and MCP server combining native Accessibility element targeting with Quartz input simulation.
- [CLIF](https://awesomecua.com/resources/github-cmalpass-clif/) — Date not recorded
  CLIF is a Windows desktop UI automation CLI and local MCP server for inspecting and driving WPF, WinForms, and WinUI applications.
- [Clique Já](https://awesomecua.com/resources/github-paivaxqz-cliqueja/) — Date not recorded
  Fast Chrome automation toolkit combining a Manifest V3 extension with a local coordination hub.
- [cloak-cdp-cli](https://awesomecua.com/resources/github-ezumyn-aliegm-cloak-cdp-cli/) — Date not recorded
  Command-line interface for AI agents to drive CloakBrowser stealth Chromium instances over CDP.
- [cloakbrowser-mcp](https://awesomecua.com/resources/github-swimmwatch-cloakbrowser-mcp/) — Date not recorded
  Playwright-powered Model Context Protocol server for driving CloakBrowser anti-detect Chromium sessions.
- [CloakGPT](https://awesomecua.com/resources/github-koukeneko-cloakgpt/) — Date not recorded
  Local CLI that drives an authenticated ChatGPT web session through the anti-detect CloakBrowser.
- [Cloud Browser Automation Proof](https://awesomecua.com/resources/github-lucprooffirst-cloud-browser-automation-proof/) — Date not recorded
  Verified Playwright and Puppeteer recipes for connecting AI agents to remote CDP cloud browser sessions.
- [CloudCrew Understudy](https://awesomecua.com/resources/github-cloudcrewatwork-understudy/) — Date not recorded
  Records human UI workflows once and compiles them into parameterized, editable replay scripts for computer-use agents.
- [CoAct-1 Implementation](https://awesomecua.com/resources/github-buiilding-coact-1-implementation/) — Date not recorded
  Open-source replication of the CoAct-1 hybrid coding-and-GUI multi-agent architecture evaluated on OSWorld-Verified.
- [Cockroach Browser](https://awesomecua.com/resources/github-ajnasnb-cockroach-browser/) — Date not recorded
  Local-first browser automation platform for AI agents supporting isolated Chromium, Firefox, and WebKit profiles.
- [CodeceptJS](https://awesomecua.com/resources/github-codeceptjs-codeceptjs/) — Date not recorded
  CodeceptJS is an end-to-end testing framework that expresses browser and mobile interactions as user-facing steps through helpers such as Playwright, WebDriver, and Appium.
- [Codex Chrome Browser Control Skill](https://awesomecua.com/resources/github-qlk-x-codex-chrome-browser-control/) — Date not recorded
  Local-first OpenAI Codex skill and Chrome extension for safe, user-bounded browser tab control.
- [Codex Computer Use MCP (Signed Broker Bridge)](https://awesomecua.com/resources/github-tmustier-codex-computer-use-mcp/) — Date not recorded
  Background-safe MCP server that exposes OpenAI's signed macOS Codex Computer Use broker to Pi and MCP clients.
- [Codex File Bridge](https://awesomecua.com/resources/github-dev-newb-codex-file-bridge/) — Date not recorded
  Codex skill for reliable, filename-aware local file uploads into browser file-input dialogs.
- [Codex Idle Resume](https://awesomecua.com/resources/github-yaro-elipox-codex-idle-resume/) — Date not recorded
  Automatically resumes interrupted macOS Codex Computer Use tasks after system idle or rate-limit cooldowns.
- [Codex Managed Channel](https://awesomecua.com/resources/github-fantasyce-codex-managed-channel/) — Date not recorded
  Lifecycle-controlled SSH channel manager for driving Codex Desktop sessions on a remote Mac.
- [codex-computer-use-x11](https://awesomecua.com/resources/github-alekseiseleznev-codex-computer-use-x11/) — Date not recorded
  Standalone Rust CLI and Model Context Protocol plugin enabling Codex Computer Use on Linux Cinnamon/X11 desktops.
- [codex-cua](https://awesomecua.com/resources/github-manaflow-ai-codex-cua/) — Date not recorded
  CLI wrapper for driving macOS desktop applications from the shell using the Computer Use engine bundled inside Codex.
- [COLA demo](https://awesomecua.com/resources/github-alokia-cola-demo/) — Date not recorded
  Research demonstration of collaborative Windows GUI automation with dynamic task scheduling and recovery mechanisms.
- [CompBuddy](https://awesomecua.com/resources/github-lewiswlker-compbuddy/) — Date not recorded
  CompBuddy is a background macOS computer-use agent that observes target windows and dispatches Accessibility and CGEvent actions without stealing focus.
- [Computer Control MCP](https://awesomecua.com/resources/github-ab498-computer-control-mcp/) — Date not recorded
  Computer Control MCP is a zero-dependency Model Context Protocol server providing mouse, keyboard, window, and RapidOCR screen control via PyAutoGUI.
- [Computer Use (gVisor Cloud REPL)](https://awesomecua.com/resources/github-r33drichards-computer-use/) — Date not recorded
  Provides a gVisor-isolated Linux desktop and Chromium container with persistent storage driven through a single JavaScript REPL MCP tool.
- [Computer Use AI SDK](https://awesomecua.com/resources/github-mediar-ai-mcp-server-client-computer-use-ai-sdk/) — Date not recorded
  Computer Use AI SDK provides an MCP server and client that drives desktop applications through native OS accessibility trees.
- [Computer Use for macOS](https://awesomecua.com/resources/github-philfung-computer-use/) — Date not recorded
  Native macOS desktop application for running Claude Computer Use with local screen capture and mouse/keyboard actuation.
- [Computer Use Studio Pro](https://awesomecua.com/resources/github-666xiaoniuzi-computer-use-skill/) — Date not recorded
  Cross-agent skill for low-latency, verified desktop, browser, and window control.
- [Computer Use Vision (DSH Windows Plugin)](https://awesomecua.com/resources/github-xuanyuanluoxue-computer-use-vision/) — Date not recorded
  Windows desktop visual recognition and simulated input plugin for DeepSeek Harness.
- [Computer Use VM](https://awesomecua.com/resources/github-zimengxiong-computer-use-vm/) — Date not recorded
  Provisions disposable, headless macOS virtual machines so computer-use agents can operate isolated desktops without window switching.
- [Computer-Use Capability Engine](https://awesomecua.com/resources/github-pavanvakula-computer-use-capability-engine/) — Date not recorded
  Discovers legacy UI workflows with an LLM once and compiles them into typed, versioned, deterministically replayable capabilities.
- [Computer-Use-Agent (Windows)](https://awesomecua.com/resources/github-nabhpatodi10-computer-use-agent/) — Date not recorded
  LangGraph-based Windows computer-use agent combining UI Automation tree inspection, OmniParser visual grounding, and human confirmation gates.
- [computer-use-fallback-mac](https://awesomecua.com/resources/github-zss03040464-computer-use-fallback-mac/) — Date not recorded
  Window-scoped macOS Computer Use MCP server providing background window capture and Accessibility control without foreground focus.
- [computer-use-grid](https://awesomecua.com/resources/github-yxdgyxlf-computer-use-grid/) — Date not recorded
  Enhances desktop clicking precision for AI computer-use agents via screenshot grid overlays and iterative zoom refinement.
- [computer-use-linux](https://awesomecua.com/resources/github-agent-sh-computer-use-linux/) — Date not recorded
  Native Linux desktop control server for AI agents over MCP, Pi tools, and CLI with semantic AT-SPI trees and screenshots.
- [computer-use-mcp-gateway](https://awesomecua.com/resources/github-git-ksk-computer-use-mcp-gateway/) — Date not recorded
  Remote Model Context Protocol gateway for routing agent tool calls to computer-use backends such as Cua Driver.
- [computer.cpp](https://awesomecua.com/resources/github-gobii-ai-computer-cpp/) — Date not recorded
  computer.cpp turns native desktop GUI applications into structured, API-callable interfaces for AI agents.
- [computer.md](https://awesomecua.com/resources/github-carloslfu-computer-md/) — Date not recorded
  Defines an open `COMPUTER.md` machine specification and runtime for LLM agents to operate terminals, filesystems, and desktop GUIs.
- [ComputerMate](https://awesomecua.com/resources/github-one710-computermate/) — Date not recorded
  ComputerMate is a cross-platform Model Context Protocol server granting AI models screen capture, OCR, mouse/keyboard, and shell control.
- [ConnectOnion](https://awesomecua.com/resources/github-openonion-connectonion/) — Date not recorded
  ConnectOnion is a CLI and Python framework that gives agents commands for connected accounts, a logged-in browser, files, and chat apps.
- [Control-Agent](https://awesomecua.com/resources/github-gekaixing-control-agent/) — Date not recorded
  Unified multimodal control framework combining pure-vision desktop operation, structured DOM browser control, and ADB mobile automation.
- [CopilotKit OpenBot](https://awesomecua.com/resources/github-copilotkit-openbot/) — Date not recorded
  Self-hosted enterprise AI assistant and computer-use workspace by CopilotKit with containerized sandboxing and skill orchestration.
- [Cordis Social](https://awesomecua.com/resources/github-enginefuture-cordis-social/) — Date not recorded
  Lifecycle-safe Cordis plugin suite for orchestrating ProfileFleet, OpenAI Codex, and multi-profile browser workflows.
- [Crafter Agents cuse CLI](https://awesomecua.com/resources/github-crafter-agents-cuse/) — Date not recorded
  Cross-platform computer-use CLI that maps unified commands to native OS accessibility and input primitives.
- [Crimson-Heart](https://awesomecua.com/resources/github-yeyvhaiou-crimson-heart/) — Date not recorded
  Persistent multimodal desktop agent with explicit runtime state management, priority-aware scheduling, and interruptible execution.
- [CrossHands](https://awesomecua.com/resources/github-caelaxie-crosshands/) — Date not recorded
  Local computer-use runtime for coding agents exposing desktop inspection and input actions via a JSON CLI and stdio MCP.
- [cu (Native GUI Automation CLI)](https://awesomecua.com/resources/github-killsng-cu/) — Date not recorded
  Native GUI automation CLI written in Swift (macOS) and Rust (Windows) for ~50ms state reads and ~100ms clicks.
- [cua-desktop-automation-skills](https://awesomecua.com/resources/github-chrislamdev-cua-desktop-automation-skills/) — Date not recorded
  Router learning system and macOS desktop automation skill pack for AI agents using Cua Driver.
- [cua-lite](https://awesomecua.com/resources/github-justanotheruser82174-cua-lite/) — Date not recorded
  cua-lite is a cross-platform desktop application and harness for running, evaluating, and fine-tuning computer-use agents.
- [cua-rs-mcp](https://awesomecua.com/resources/github-maestrojeong-cua-rs-mcp/) — Date not recorded
  Rust Model Context Protocol server that drives native macOS apps through the Accessibility API without moving the user's cursor.
- [cua_agent](https://awesomecua.com/resources/github-lacassef-computeruse/) — Date not recorded
  cua_agent is a modular Python computer-use framework with OS-agnostic planning, semantic UI grounding, and policy-checked desktop/browser drivers.
- [cuAgent](https://awesomecua.com/resources/github-xhqing-cuagent/) — Date not recorded
  cuAgent is a desktop computer-use agent that operates GUI applications through the open-computer-use Model Context Protocol server.
- [CuaOS](https://awesomecua.com/resources/github-cuaos-cuaos/) — Date not recorded
  CuaOS runs a Qwen3-VL computer-use agent that autonomously controls an Ubuntu virtual desktop inside a local Docker sandbox.
- [cuse](https://awesomecua.com/resources/github-cuse-dev-cuse/) — Date not recorded
  cuse is an open-source framework for building AI agents that control virtualized Linux desktops and browsers via display, mouse, and keyboard APIs.
- [Cuse (macOS AI Cursor Agent)](https://awesomecua.com/resources/github-muneebkhan08-cuse/) — Date not recorded
  Cuse is an open-source voice-and-text AI cursor agent for macOS that visually localizes UI controls and executes mouse and keyboard tasks.
- [cxrobx zen-mcp (WebExtension)](https://awesomecua.com/resources/github-cxrobx-zen-mcp/) — Date not recorded
  WebExtension-backed Model Context Protocol server for driving Zen Browser and Firefox from Claude Code.
- [Cyberdesk](https://awesomecua.com/resources/github-cyberdesk-hq-cyberdesk/) — Date not recorded
  Cyberdesk is an open-source virtual desktop orchestration platform and SDK for provisioning and controlling cloud desktop sandboxes for CUA.
- [CyberRaccoon](https://awesomecua.com/resources/github-chaoticpixelio-cyberraccoon/) — Date not recorded
  Non-invasive physical computer-use agent that captures HDMI video and dispatches USB HID mouse and keyboard actions from a Raspberry Pi.
- [Daedalus Browser Bridge](https://awesomecua.com/resources/github-nitjsefnie-harness-commons-daedalus/) — Date not recorded
  Chrome-extension remote control bridge allowing AI agents to drive a live Chrome instance over HTTP.
- [DarwinRelay](https://awesomecua.com/resources/github-dcierra-darwinrelay/) — Date not recorded
  Turns ChatGPT and MCP clients into local macOS agents with shell, file, PTY, and browser automation access.
- [dcc-cua](https://awesomecua.com/resources/github-dcc-mcp-dcc-cua/) — Date not recorded
  Cross-platform Rust runtime and CLI for AI agents to observe and control scoped desktop application windows.
- [dcc123456 Browser Copilot](https://awesomecua.com/resources/github-dcc123456-browser-copilot/) — Date not recorded
  AI side-panel assistant for Chrome that reads the active webpage and executes user-approved browser actions.
- [debug-kit](https://awesomecua.com/resources/github-dxiongya-debug-kit/) — Date not recorded
  Cross-platform Agent Skill for driving, inspecting, and testing applications across macOS, iOS, Android, Web, Electron, Windows, and Linux.
- [DeepSeek Harness Mac Control](https://awesomecua.com/resources/github-18126295767-cell-dsh-mac-control/) — Date not recorded
  macOS control plugin for DeepSeek Harness enabling browser tab inspection, app switching, and desktop GUI actions.
- [DeepSeek Harness Volcengine OS Agent Plugin](https://awesomecua.com/resources/github-chenjie1129-deepseek-harness-os-agent-plugin/) — Date not recorded
  Integrates Volcengine's Mobile Use and OS Agent capabilities as a plugin for DeepSeek Harness.
- [DeepSeekEyes](https://awesomecua.com/resources/github-dttxorg-deepseekeyes/) — Date not recorded
  Auditable vision and cross-platform computer-use runtime for DeepSeek Harness with cryptographic evidence receipts.
- [DEIMOS (Environment-Aware Computer Agent)](https://awesomecua.com/resources/github-sakshamjuneja007-freaky-monkey/) — Date not recorded
  Environment-aware autonomous computer-use agent that perceives OS state and executes multi-step desktop workflows.
- [Delphi IDE Remote MCP Server](https://awesomecua.com/resources/github-soporte-defontsoft-delphi-ide-remote-mcp/) — Date not recorded
  Model Context Protocol server enabling AI agents to remotely inspect, compile, and automate the Embarcadero Delphi Windows IDE.
- [DeskCanvas](https://awesomecua.com/resources/github-sorry123luck-desk-canvas/) — Date not recorded
  DeskCanvas converts live Windows application windows into structured semantic state with guarded action execution for AI agents.
- [DeskCtl (Desktop Control Engine)](https://awesomecua.com/resources/github-mini-mind-deskctl/) — Date not recorded
  Desktop control engine for GUI agents using UIA and AT-SPI accessibility trees as the primary path with visual fallback.
- [Deskfish](https://awesomecua.com/resources/github-0x11c11e-deskfish/) — Date not recorded
  Deskfish is a VS Code extension that gives AI agents an isolated virtual desktop container viewable and steerable inside the editor.
- [DeskMind](https://awesomecua.com/resources/github-deskmind-ai-deskmind/) — Date not recorded
  DeskMind is a local-first macOS computer-use agent that combines accessibility inspection, DeskMind Eyes grounding, and user clarification.
- [deskpal](https://awesomecua.com/resources/github-b1tank-deskpal/) — Date not recorded
  C-native Linux desktop-control MCP server supporting X11/Xwayland, AT-SPI accessibility trees, OCR, and isolated displays.
- [DeskSwarm](https://awesomecua.com/resources/github-ahmedvnabil-deskswarm/) — Date not recorded
  Self-hosted fleet manager for provisioning and dispatching natural-language tasks across parallel XFCE Linux desktop sandboxes.
- [Desktop Action Agent](https://awesomecua.com/resources/github-dax0056-desktop-action-agent/) — Date not recorded
  Sandboxed local computer-automation agent reference architecture with window detection and action verification.
- [Desktop Agent](https://awesomecua.com/resources/github-ruslankoroy-desktop-agent/) — Date not recorded
  Desktop Agent controls a local computer via screenshot grid overlays, OCR text detection, voice commands, and mouse/keyboard execution.
- [Desktop Commander MCP](https://awesomecua.com/resources/github-wonderwhy-er-desktopcommandermcp/) — Date not recorded
  Desktop Commander MCP is a Model Context Protocol server for terminal process control, interactive REPLs, and surgical file editing.
- [Desktop Computer Use (DCU)](https://awesomecua.com/resources/github-dev-willbird1936-desktop-computer-use/) — Date not recorded
  Background Windows computer-use MCP server that dispatches input to target applications without interrupting foreground user work.
- [Desktop Pilot MCP](https://awesomecua.com/resources/github-versoxbt-desktop-pilot-mcp/) — Date not recorded
  Native macOS Accessibility MCP server giving Claude and MCP clients low-latency structured control over desktop applications.
- [desktop-cli](https://awesomecua.com/resources/github-adamsautomations-desktop-cli/) — Date not recorded
  Lightweight computer-use CLI that coding agents invoke directly via shell commands without MCP schema overhead.
- [desktop-hub](https://awesomecua.com/resources/github-zty552252kevin-code-desktop-hub/) — Date not recorded
  Compact 10-tool (~2.3k token) facade MCP server for macOS desktop automation.
- [desktop-touch-mcp](https://awesomecua.com/resources/github-harusame64-desktop-touch-mcp/) — Date not recorded
  Windows computer-use MCP server that drives desktop applications via semantic discover-then-act UI Automation targeting.
- [DesktopAgent (.NET 9)](https://awesomecua.com/resources/github-alessiobianchini-desktopagent/) — Date not recorded
  Safety-first local desktop automation agent built on .NET 9 with cross-platform OS adapters, policy checks, and an MCP server.
- [DesktopAgent (S1-Fast)](https://awesomecua.com/resources/github-elidot007-desktop-agent/) — Date not recorded
  DesktopAgent operates Windows desktop applications in the background using a local 0.33B System-One decision model (S1-Fast) and UI Automation.
- [DesktopCtl](https://awesomecua.com/resources/github-yaroshevych-desktopctl/) — Date not recorded
  GPU-accelerated local macOS CLI for AI agents to inspect screen text/controls and dispatch mouse and keyboard actions.
- [DeskVNC](https://awesomecua.com/resources/github-psmux-deskvnc/) — Date not recorded
  Pure-Rust VNC, RDP, and SSH remote desktop client with Tauri UI for managing agent and remote machines.
- [deskwork](https://awesomecua.com/resources/github-ashnkumar-deskwork/) — Date not recorded
  deskwork augments Claude Computer Use with domain document retrieval to execute compliance-grounded desktop and browser workflows.
- [Deskwright](https://awesomecua.com/resources/github-tristanmuzzu-deskwright/) — Date not recorded
  Deskwright is a cross-platform desktop automation toolkit for AI agents combining OS accessibility trees with OCR fallback and input control.
- [Deterministic Computer-Use Automation](https://awesomecua.com/resources/github-joncody-computer-use-automation/) — Date not recorded
  Two-phase computer-use automation framework that compiles LLM-driven UI discovery into deterministic replay scripts.
- [dev-browser](https://awesomecua.com/resources/github-sawyerhood-dev-browser/) — Date not recorded
  dev-browser provides a persistent Playwright browser sandbox and compact ARIA snapshot CLI for stateful multi-step web automation.
- [DevDesignAmitesh Browser Agent](https://awesomecua.com/resources/github-devdesignamitesh-browser-agent/) — Date not recorded
  Autonomous AI web agent that plans and executes multi-step browser interactions from natural-language prompts.
- [device-use](https://awesomecua.com/resources/github-labclaw-device-use/) — Date not recorded
  device-use enables AI agents to operate scientific laboratory instruments through their native desktop GUI software without hardware APIs.
- [DH.Window.UITool](https://awesomecua.com/resources/github-cyberkdh-dh-window-uitool/) — Date not recorded
  Windows UI Automation inspection and scripting tool for analyzing UI element trees and building repeatable desktop workflows.
- [dibs](https://awesomecua.com/resources/github-joshteravest-dibs/) — Date not recorded
  Local coordination hub and lock manager that lets multiple AI agents reserve and use computer-use resources without colliding.
- [Dinoer](https://awesomecua.com/resources/github-ronandavalan-dinoer/) — Date not recorded
  Local-first web research and browser automation framework for LLM agents combining SearXNG discovery with headless browser control.
- [DispatchShield](https://awesomecua.com/resources/github-venusone-lee-dispatchshield/) — Date not recorded
  macOS utility that keeps a Mac awake for unattended computer-use agents while shielding the active session from local input.
- [DjangoAILab DSH Plugins](https://awesomecua.com/resources/github-djangoailab-dsh-plugins/) — Date not recorded
  Guardrailed plugin suite for DeepSeek Harness covering browser automation, desktop control, subagents, and remote servers.
- [Doppel](https://awesomecua.com/resources/github-orvii-doppel/) — Date not recorded
  Doppel is a computer-use agent that operates inside a dedicated virtual desktop with its own cursor on Windows 11 and Linux.
- [DouGao (豆糕)](https://awesomecua.com/resources/github-hulubo2014-dougao/) — Date not recorded
  DouGao is an on-device Android AI assistant combining VLM screen control across Accessibility, Shizuku, and Root channels with direct file editing.
- [draiqw browser-agent (bu_mcp)](https://awesomecua.com/resources/github-draiqw-browser-agent/) — Date not recorded
  Enhanced Browser-Use distribution adding the `bu_mcp` Model Context Protocol layer over autonomous web navigation.
- [DroidBot-GPT](https://awesomecua.com/resources/github-mobilellm-droidbot-gpt/) — Date not recorded
  DroidBot-GPT connects DroidBot UI state extraction with large language models to automate multi-step tasks across Android applications.
- [DroidFleet](https://awesomecua.com/resources/github-c00l-k1d-droidfleet/) — Date not recorded
  Open-source Android device fleet management and orchestration platform for mobile automation and testing.
- [DroidLume Agent Control](https://awesomecua.com/resources/github-tageecc-droidlume-agent-control/) — Date not recorded
  npm-distributed CLI, Model Context Protocol server, and standalone Android companion app for AI phone control.
- [Drover](https://awesomecua.com/resources/github-om-khode-drover/) — Date not recorded
  Chrome extension and local CLI that lets AI agents drive the browser window the user already has open and signed into.
- [DSB (逗沙包)](https://awesomecua.com/resources/github-tianye1999-dsb/) — Date not recorded
  DSB is a trust-first Android AI agent that executes delegated app tasks on a background virtual display without interrupting the user's screen.
- [DSH Browser Control](https://awesomecua.com/resources/github-ahaway1st-dsh-browser-control/) — Date not recorded
  DeepSeek Harness plugin that lets agents directly control the user's real, logged-in web browser.
- [DSH Desktop Operator](https://awesomecua.com/resources/github-zjh02249-dsh-desktop-operator/) — Date not recorded
  Safe Windows computer-use plugin for DeepSeek Harness providing window-scoped desktop automation and verification.
- [DSH Deskwork](https://awesomecua.com/resources/github-guomonth-dsh-deskwork/) — Date not recorded
  AI desktop workspace powered by DeepSeek Harness for automating ERP and enterprise back-office operations.
- [DSH Mobile (DeepSeek Harness for Android)](https://awesomecua.com/resources/github-soodok-deepseek-harness-local-android/) — Date not recorded
  Runs the DeepSeek Harness AI agent natively on Android phones without root.
- [DSH Mobile GUI Agent](https://awesomecua.com/resources/github-kunjinkao-os-dsh-mobile-gui-agent/) — Date not recorded
  Android Mobile GUI Agent plugin for DeepSeek Harness featuring ADB actuation, iterative screen verification, and error recovery.
- [DSH Phone Agent](https://awesomecua.com/resources/github-sktyou-dsh-phone-agent/) — Date not recorded
  Controls Android phones over LAN via an on-device AccessibilityService app with local OCR, template matching, and GKD ad-skipping rules.
- [DSH Qwen Web Bridge Plugin](https://awesomecua.com/resources/github-andy294753951-dsh-plugin-qwen-web-bridge/) — Date not recorded
  DeepSeek Harness plugin for driving an authenticated Qwen web session via local browser automation.
- [dsh-browser-firefox](https://awesomecua.com/resources/github-tuojc-dsh-browser-firefox/) — Date not recorded
  Firefox browser-control plugin and extension for DeepSeek Harness enabling agents to read and drive live Firefox tabs.
- [dsh-browser-full-access](https://awesomecua.com/resources/github-lianping-cyber-dsh-browser-full-access/) — Date not recorded
  Background-tab full-access fork of `dsh-browser` for DeepSeek Harness web automation.
- [dsh-browser-ops](https://awesomecua.com/resources/github-lirui1024k-dsh-browser-ops/) — Date not recorded
  DeepSeek Harness plugin combining agent-driven real-browser control with workflow recording.
- [dsh-browseruse](https://awesomecua.com/resources/github-yzd6552-commits-dsh-browseruse/) — Date not recorded
  Browser-Use-style plugin for DeepSeek Harness that drives a dedicated Chrome profile over Playwright and CDP.
- [dsh-click](https://awesomecua.com/resources/github-perrylink-dsh-click/) — Date not recorded
  Cross-platform native desktop control plugin for DeepSeek Harness supporting screenshots, UI element search, and mouse/keyboard actions.
- [dsh-computer-use](https://awesomecua.com/resources/github-xiaoheizi1212-dsh-computer-use/) — Date not recorded
  Model-agnostic Computer Use plugin for DeepSeek Harness combining an isolated browser, a native Windows UI helper, and action observation.
- [dsh-cua](https://awesomecua.com/resources/github-hutusion-dsh-cua/) — Date not recorded
  Client-neutral Windows computer-use MCP server for DeepSeek Harness exposing UI Automation, screenshots, and desktop input tools.
- [dsh-desktop-automation](https://awesomecua.com/resources/github-junkrat9527-dsh-desktop-automation/) — Date not recorded
  macOS desktop automation plugin for DeepSeek Harness with a closed-loop screenshot-locate-click-verify pipeline.
- [dsh-jiey-browser](https://awesomecua.com/resources/github-jiewaigongxing-dsh-jiey-browser/) — Date not recorded
  DeepSeek Harness plugin exposing Jiey Browser automation tools over the Model Context Protocol.
- [dsh-llm-web-bridge](https://awesomecua.com/resources/github-huangyukaili1031-dsh-llm-web-bridge/) — Date not recorded
  DeepSeek Harness bridge for automating and orchestrating logged-in web LLM chat sessions in Chrome.
- [dsh-nuphus-mcp](https://awesomecua.com/resources/github-mrpulor-gh-dsh-nuphus-mcp/) — Date not recorded
  DeepSeek Harness plugin that mounts `nuphus-mcp` desktop control tools natively inside DSH sessions.
- [dsh-OpenLiulan (开放浏览)](https://awesomecua.com/resources/github-haodongzhang022-hue-openliulan/) — Date not recorded
  Self-healing browser control framework for DeepSeek Harness featuring semantic page perception and automated fault recovery.
- [dsh-plugin-browser](https://awesomecua.com/resources/github-menotbobbybrown-dsh-plugin-browser/) — Date not recorded
  Native headless and visible web browser automation plugin for DeepSeek Harness.
- [dsh-plugin-browser-use](https://awesomecua.com/resources/github-fatmind-dsh-plugin-browser-use/) — Date not recorded
  Browser-Use automation plugin for DeepSeek Harness enabling natural-language web tasks.
- [dsh-plugin-openbot](https://awesomecua.com/resources/github-jimmyjdejesus-cmyk-dsh-plugin-openbot/) — Date not recorded
  Native Cordis plugin for DeepSeek Harness integrating CopilotKit OpenBot container sandboxing and computer use.
- [dsh-tabbit](https://awesomecua.com/resources/github-tabbit-browser-dsh-tabbit/) — Date not recorded
  Official Tabbit Browser plugin for DeepSeek Harness enabling AI agents to control Tabbit browser tabs and workspaces.
- [dsh-vdesktop](https://awesomecua.com/resources/github-jafewff-dsh-vdesktop/) — Date not recorded
  dsh-vdesktop runs Windows GUI applications inside an invisible Win32 virtual desktop (`CreateDesktopW`) and exposes 12 `vdesk_*` agent control tools.
- [dsh-vision-click](https://awesomecua.com/resources/github-zdd3143-dsh-vision-click/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness using offline `Windows.Media.Ocr` text localization and pre/post-click pixel verification.
- [dsh-vision-kit](https://awesomecua.com/resources/github-maopk-dsh-vision-kit/) — Date not recorded
  dsh-vision-kit provides a resident Windows PC Actor combining UI Automation structure, SendInput actuation, and visual grounding for DeepSeek Harness.
- [dsh_omnivision (OmniVision)](https://awesomecua.com/resources/github-xiaozhengdeng-dsh-omnivision/) — Date not recorded
  OmniParser-powered GUI agent plugin for DeepSeek Harness providing screen element detection and desktop mouse/keyboard automation.
- [Dugle Browser](https://awesomecua.com/resources/github-duckmartians-dugle-browser/) — Date not recorded
  Custom Chromium build with engine-level compiled device fingerprints for stealth browser automation.
- [Dunst (macOS Affordance-Graph MCP)](https://awesomecua.com/resources/github-azerozero-dunst/) — Date not recorded
  Accessibility-first affordance-graph MCP server for macOS combining AX trees, Apple Vision OCR, and computer vision.
- [DylanSantwani OpenBrowser](https://awesomecua.com/resources/github-dylansantwani-openbrowser/) — Date not recorded
  Chrome extension and zero-dependency MCP server for automating a user's real logged-in Chrome browser.
- [E2B Surf](https://awesomecua.com/resources/github-e2b-dev-surf/) — Date not recorded
  E2B Surf is a web-based computer-use agent combining OpenAI Computer-Using Agent models with an isolated E2B Desktop virtual machine.
- [Easy Claw](https://awesomecua.com/resources/github-easyclaw-ai-easy-claw/) — Date not recorded
  Open-source AI browser automation agent for multi-step web workflow execution and page interaction.
- [easy-webbridge](https://awesomecua.com/resources/github-xxjrq-easy-webbridge/) — Date not recorded
  Browser bridge allowing Claude Code, Codex, OpenCode, and WorkBuddy agents to operate an authenticated Chrome session.
- [ECLAIR](https://awesomecua.com/resources/github-hazyresearch-eclair-agents/) — Date not recorded
  ECLAIR automates enterprise web and desktop workflows from human demonstrations with ground-truth SOP validation and step-level error recovery.
- [Edge Agent Bridge](https://awesomecua.com/resources/github-shanewas-edge-agent-bridge/) — Date not recorded
  Real-time AI agent bridge for Microsoft Edge operating over active authenticated browser sessions.
- [Eigent](https://awesomecua.com/resources/github-eigent-ai-eigent/) — Date not recorded
  Eigent is an open-source multi-agent desktop coworker built on CAMEL-AI for parallel browser, terminal, document, and MCP task execution.
- [ElectroMCP](https://awesomecua.com/resources/github-therealseandonahoe-electromcp/) — Date not recorded
  Connects Claude and MCP-compatible agents to Electron desktop apps for UI clicking, screenshot capture, IPC inspection, and HAR recording.
- [Electron Stagewright](https://awesomecua.com/resources/github-electron-stagewright-electron-stagewright/) — Date not recorded
  Model Context Protocol server and SDK for driving Electron desktop applications with Playwright-style locators and actions.
- [electron-driver](https://awesomecua.com/resources/github-mesomya-electron-driver/) — Date not recorded
  Model Context Protocol server that lets AI agents inspect, click, type, drag, and screenshot Electron desktop applications.
- [Endoplexity](https://awesomecua.com/resources/github-endokelp-endoplexity/) — Date not recorded
  Chrome extension and agentic browser controller powered by local Claude and Cursor subscriptions.
- [Enhanced Claude Computer Use for Mac](https://awesomecua.com/resources/github-swilliams9772-mac-computer-use/) — Date not recorded
  Adapts Anthropic Claude Computer Use for native macOS with extended thinking, AppleScript integration, and Retina coordinate scaling.
- [Enikk](https://awesomecua.com/resources/github-gtt116-enikk/) — Date not recorded
  Enikk is an open-source computer-use agent that combines GUI visual control and CLI execution across vision and text-only models.
- [Equinox Local](https://awesomecua.com/resources/github-sametbasbug-equinox-local/) — Date not recorded
  Local-first AI workspace bridging ChatGPT to native macOS and Windows desktop tools over an MCP tunnel.
- [Eric Task Master](https://awesomecua.com/resources/github-npcworkspace-cmyk-eric-task-master/) — Date not recorded
  Durable Playwright and Chrome task runner that keeps long-horizon browser jobs running after the initiating agent session exits.
- [Errand](https://awesomecua.com/resources/github-runta-dev-errand/) — Date not recorded
  Open-source persistent desktop AI teammate with scheduled tasks, browser control, and workspace memory.
- [ErwinZhang Safari MCP](https://awesomecua.com/resources/github-erwinzhang7-safari-mcp/) — Date not recorded
  Native macOS Model Context Protocol server for driving Safari navigation, clicking, typing, JavaScript evaluation, and screenshots.
- [ESP-AI-HID Controller](https://awesomecua.com/resources/github-burakboz-esp-ai-hid/) — Date not recorded
  ESP32-S2 hardware USB HID keyboard and mouse emulator with bidirectional serial protocol for OS-independent AI computer control.
- [ESP32 iPhone Agent](https://awesomecua.com/resources/github-onehumanbeing-esp32-iphone-agent/) — Date not recorded
  ESP32 iPhone Agent controls unmodified iPhones via Bluetooth HID mouse/keyboard emulation from an ESP32 paired with vision-language screen parsing.
- [EvalOps browser-use-rs](https://awesomecua.com/resources/github-dx-corp-browser-use-rs/) — Date not recorded
  Rust behavioral conformance port of the browser-use web agent library for low-overhead autonomous browser control.
- [EverySolve Plugin](https://awesomecua.com/resources/github-everyinfra-everysolve-plugin/) — Date not recorded
  Authorized CAPTCHA challenge detection and resolution skill for OpenAI Codex and Claude Code browser workflows.
- [ExactMac](https://awesomecua.com/resources/github-joeycumines-exactmac/) — Date not recorded
  ExactMac provides local, Accessibility-first macOS desktop automation over MCP using a Swift gRPC host and Go MCP server.
- [EyeBrowse](https://awesomecua.com/resources/github-evil-bane-eyebrowse/) — Date not recorded
  EyeBrowse is a stealthy, LLM-drivable browser engine providing both a Python library and an 85-tool Model Context Protocol server.
- [eyehands](https://awesomecua.com/resources/github-shameindemgg-eyehands/) — Date not recorded
  Local HTTP server for Windows that provides low-latency UI Automation inspection and input execution for computer-use agents.
- [Factifai](https://awesomecua.com/resources/github-presidio-oss-factif-ai/) — Date not recorded
  Factifai is an AI-driven browser and UI test automation framework that executes natural-language test cases with Playwright and vision models.
- [FaizannRaza Computer-Use Automation](https://awesomecua.com/resources/github-faizannraza-computer-use-automation/) — Date not recorded
  Discovers legacy banking UI workflows with an LLM once and compiles the run into a deterministic capability artifact.
- [Fara Browser Automation Agent](https://awesomecua.com/resources/github-pmbstyle-fara-agent/) — Date not recorded
  Local browser automation agent powered by Microsoft's Fara-7B computer-use model via LM Studio or Ollama and Playwright.
- [fara-7b-agent](https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/) — Date not recorded
  Minimal, fully local agent harness for running Microsoft's Fara-7B computer-use model on desktop and browser tasks.
- [fast-browser-use](https://awesomecua.com/resources/github-nachafrommars-fast-browser-use/) — Date not recorded
  Rust-based browser automation engine driving Chrome over CDP with built-in anti-bot evasions and low-latency DOM extraction.
- [FastCUA](https://awesomecua.com/resources/github-guojiz-fastcua/) — Date not recorded
  Local, accessibility-first Windows control plane for AI agents exposing structured UI trees and multi-action execution.
- [FastHands](https://awesomecua.com/resources/github-tomaszteee-fasthands/) — Date not recorded
  Local-first cross-platform execution and web-research runtime for AI agents.
- [FastMCP Playwright Server](https://awesomecua.com/resources/github-ma-pony-mcp-playwright/) — Date not recorded
  Python FastMCP server exposing Playwright browser navigation, element interaction, screenshot capture, and data extraction to LLM agents.
- [Fathom](https://awesomecua.com/resources/github-drizzdev-fathom/) — Date not recorded
  Fathom is an execution harness for mobile computer-use agents that translates plain-English goals into grounded actions on iOS and Android.
- [Fazm](https://awesomecua.com/resources/github-mediar-ai-fazm/) — Date not recorded
  Fazm is a native macOS desktop and browser agent that observes screen state via Accessibility/OCR and automates cross-application workflows.
- [FerrisGrid-CLI](https://awesomecua.com/resources/github-brunov21-ferrisgrid-cli/) — Date not recorded
  FerrisGrid-CLI captures screenshots, maps UI regions to deterministic grid coordinates, and executes constrained desktop actions in Rust.
- [Figranium JS/TS SDK](https://awesomecua.com/resources/github-figranium-figranium-js/) — Date not recorded
  Official JavaScript and TypeScript SDK for the Figranium browser automation and web extraction platform.
- [Firecrawl](https://awesomecua.com/resources/github-firecrawl-firecrawl/) — Date not recorded
  Firecrawl is an API that lets agents search and scrape web pages, then interact with pages through prompts or code.
- [firefox-bidi-mcp](https://awesomecua.com/resources/github-enne2-firefox-bidi-mcp/) — Date not recorded
  Standalone Model Context Protocol server for controlling an already-open Firefox browser instance via the WebDriver BiDi protocol.
- [Flash Computer Use](https://awesomecua.com/resources/github-shortsspectrumai-del-flash-computer-use/) — Date not recorded
  Flash Computer Use is a hybrid browser DOM and native OS accessibility MCP server for low-latency desktop and web automation.
- [Floom OpenBrowser](https://awesomecua.com/resources/github-floomhq-openbrowser/) — Date not recorded
  OpenBrowser is an open-source browser automation broker managing persistent Chrome profiles and proxy-aware sessions for AI agents.
- [FlowPilot Engine](https://awesomecua.com/resources/github-pensefact-flowpilot-engine/) — Date not recorded
  Hybrid AI browser automation engine combining Claude's visual Computer Use API with deterministic Playwright execution.
- [FoxBridge MCP](https://awesomecua.com/resources/github-sinamohsenifar-foxbridge-mcp/) — Date not recorded
  Model Context Protocol server and Firefox WebExtension allowing AI assistants to read and drive a user's logged-in Firefox browser.
- [Front-End Operation Master (FEOM)](https://awesomecua.com/resources/github-a92070888-dev-mcp-os-native-automation/) — Date not recorded
  Windows native UI automation framework and MCP server operating over UIA trees with zero vision tokens and ~3.9ms action latency.
- [FSB (Full Self Browsing)](https://awesomecua.com/resources/github-fullselfbrowsing-fsb/) — Date not recorded
  Full Self Browsing (FSB) is a DOM-first browser automation runtime for Chrome and MCP clients with structured page snapshots and action replay.
- [Fuji-Web](https://awesomecua.com/resources/github-normal-computing-fuji-web/) — Date not recorded
  Fuji-Web is a Chrome extension web agent that combines accessibility trees and screenshot grounding for autonomous browser workflow execution.
- [FurlPay Bot](https://awesomecua.com/resources/github-furlpay-furlpay-bot/) — Date not recorded
  Persistent AI teammate equipped with its own virtual computer, browser, long-term memory, and voice interface.
- [G0DM0D3 AG3NT](https://awesomecua.com/resources/github-cooding3d-g0dm0d3-ag3nt/) — Date not recorded
  Permission-first local AI control center for Windows orchestrating local models, desktop actions, and browser tools.
- [ga-tmwd-browser](https://awesomecua.com/resources/github-zhou-weixin-ga-tmwd-browser/) — Date not recorded
  Agent-agnostic real-browser control bridge built on GenericAgent's TMWebDriver and CDP relay.
- [GACUA](https://awesomecua.com/resources/github-openmule-gacua/) — Date not recorded
  GACUA is an out-of-the-box computer-use agent built on Gemini CLI that combines desktop screen control, browser automation, and shell tools.
- [GAZE](https://awesomecua.com/resources/github-kevintrinhdev-gaze/) — Date not recorded
  Vision-first browser controller that observes and drives an already logged-in Chrome window.
- [gecko-mcp](https://awesomecua.com/resources/github-frumane-gecko-mcp/) — Date not recorded
  Model Context Protocol server for driving Firefox-family browsers (Firefox, Floorp, LibreWolf, Waterfox, Zen, Mullvad).
- [Gemini CLI](https://awesomecua.com/resources/github-google-gemini-gemini-cli/) — Date not recorded
  Gemini CLI is Google's open-source terminal agent providing shell execution, file manipulation, web search, and MCP tool integration.
- [Gemini Web MCP](https://awesomecua.com/resources/github-akashnaickar-gemini-web-mcp/) — Date not recorded
  Model Context Protocol server and CLI bridging coding agents to an authenticated Google Gemini web session.
- [GenericAgent](https://awesomecua.com/resources/github-lsdefine-genericagent/) — Date not recorded
  GenericAgent is a minimal self-evolving agent framework that synthesizes reusable skills for browser, OS, and ADB mobile control.
- [Genie](https://awesomecua.com/resources/github-vimalmathew26-genie/) — Date not recorded
  Genie is an autonomous Linux desktop agent with 3-tier UI resolution across AT-SPI accessibility trees, Chrome CDP, and VLM vision.
- [GenPark Multi-Step Web Form Orchestrator Skill](https://awesomecua.com/resources/github-alpha-park-genpark-multi-step-web-form-fill-orchestrator-skill/) — Date not recorded
  Agent skill for orchestrating and validating multi-step web form filling in Playwright.
- [Geohotstan DSH Codex Computer Use](https://awesomecua.com/resources/github-geohotstan-dsh-computer-use/) — Date not recorded
  macOS computer-use plugin for DeepSeek Harness providing app listing, Accessibility-tree window capture, and GUI input.
- [Ghost (macOS Accessibility CLI)](https://awesomecua.com/resources/github-tylergibbs1-ghost/) — Date not recorded
  Swift CLI and MCP tool that reads the native macOS Accessibility tree to expose GUI-only applications to AI agents.
- [Ghost (Non-Interfering macOS CUA)](https://awesomecua.com/resources/github-fletcherholt-ghost/) — Date not recorded
  Invisible, non-interfering macOS computer-use tool for Claude Code that drives native Mac apps in the background.
- [Ghost Browser by Gemma](https://awesomecua.com/resources/github-ddangkong-ghost-browser/) — Date not recorded
  Ghost Browser is a local browser automation agent powered by Gemma 27B via Ollama and evaluated on Stealth Bench.
- [Ghost in the Droid](https://awesomecua.com/resources/github-ghost-in-the-droid-android-agent/) — Date not recorded
  Ghost in the Droid is an Android GUI agent that combines accessibility trees, screenshot perception, and ADB/on-device execution.
- [Ghost OS](https://awesomecua.com/resources/github-ghostwright-ghost-os/) — Date not recorded
  Ghost OS is a native macOS MCP server combining accessibility-tree action execution, Vision OCR fallback, and reusable workflow recipes.
- [GhostDesk](https://awesomecua.com/resources/github-yv17labs-ghostdesk/) — Date not recorded
  GhostDesk is an MCP server and sandboxed virtual desktop runtime that gives LLM agents screen vision, mouse/keyboard control, and shell access.
- [Ghosthand](https://awesomecua.com/resources/github-ameerhmz-ghosthand/) — Date not recorded
  Ghosthand is a low-latency local voice and computer-use agent for Apple Silicon macOS powered by Laya models and native Accessibility APIs.
- [GhostHands](https://awesomecua.com/resources/github-georgenijo-ghosthands/) — Date not recorded
  Local Apple Silicon MLX computer-use bridge that drives native macOS apps via the Accessibility API without stealing the physical cursor.
- [Glass Hands](https://awesomecua.com/resources/github-sachaarbonel-glass-hands/) — Date not recorded
  Glass Hands is a Rust framework that connects OpenAI computer-use models directly to Chromium via the Chrome DevTools Protocol.
- [glassbox](https://awesomecua.com/resources/github-yoyicue-glassbox/) — Date not recorded
  glassbox is an iOS and iPadOS computer-use runtime that drives physical iPhones and iPads from screen observations and hardware/bridge control.
- [Glasswarp MCP Server](https://awesomecua.com/resources/github-glasswarp-mcp-server/) — Date not recorded
  Remote Model Context Protocol server for observing and controlling physical or virtual Windows PCs via Glasswarp.
- [Glasswarp Python SDK](https://awesomecua.com/resources/github-glasswarp-python-sdk/) — Date not recorded
  Python SDK for the Glasswarp platform enabling AI agents to observe and control remote or local Windows PCs.
- [glovebox-mcp](https://awesomecua.com/resources/github-segentic-lab-glovebox-mcp/) — Date not recorded
  Sandboxed computer-use MCP server that lets AI agents drive browsers and desktop apps inside an isolated nested X11 window.
- [gnome-wayland-computer-use](https://awesomecua.com/resources/github-ryanraposo-gnome-wayland-computer-use/) — Date not recorded
  Computer-use bridge for driving Linux GNOME Wayland desktop sessions.
- [Gobii Platform](https://awesomecua.com/resources/github-gobii-ai-gobii-platform/) — Date not recorded
  Self-hostable platform for always-on agents based on browser-use, adding headed browsers, persistent profiles, proxy-aware routing, schedules and event triggers.
- [Goby](https://awesomecua.com/resources/github-juguang-goby/) — Date not recorded
  Open-source Chrome extension in-page web agent that executes natural-language browsing and form-filling tasks.
- [godzilaa browser-agent Extension](https://awesomecua.com/resources/github-godzilaa-browser-agent/) — Date not recorded
  Chrome Manifest V3 extension that converts any live webpage into structured JSON and executes agent actions.
- [Gofer](https://awesomecua.com/resources/github-jleuth-gofer/) — Date not recorded
  Gofer is a persistent desktop agent that monitors screen changes, executes shell and GUI actions, and communicates via Telegram or a local REPL.
- [gomoufox](https://awesomecua.com/resources/github-ehmo-gomoufox/) — Date not recorded
  Go library, CLI, and Model Context Protocol server for driving Camoufox anti-detect Firefox browsers.
- [GoSosmed Mobile Agent](https://awesomecua.com/resources/github-dedy45-gososmed-mobile-agent/) — Date not recorded
  Android AccessibilityService automation engine and control dashboard for managing multi-device mobile workflows.
- [governed-computer-use](https://awesomecua.com/resources/github-mkhan49-governed-computer-use/) — Date not recorded
  Discovers legacy banking UI flows with an LLM once, compiles deterministic replay artifacts, and enforces human approval on exceptions.
- [Grasp MCP](https://awesomecua.com/resources/github-jamshed7470-grasp-mcp/) — Date not recorded
  Model Context Protocol server giving Claude and MCP clients full desktop screen vision and mouse/keyboard control.
- [gridhand](https://awesomecua.com/resources/github-zachrouan-gridhand/) — Date not recorded
  Zero-dependency Rust CLI for cross-platform GUI automation that overlays labeled coordinate grids onto screenshots for deterministic clicking.
- [grokbot-cdp](https://awesomecua.com/resources/github-daizedong-grokbot-cdp/) — Date not recorded
  Python client that drives the cloud browser and virtual machine behind xAI's Grok computer-use agent over the Chrome DevTools Protocol.
- [GUI Agent Framework](https://awesomecua.com/resources/github-sjkncs-gui-agent-framework/) — Date not recorded
  Modular block-based GUI automation framework combining VLM screen perception, LLM planning, Playwright browser control, and desktop actuation.
- [GUI-HARVEST](https://awesomecua.com/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [gui-report-automation](https://awesomecua.com/resources/github-loncoeng-gui-report-automation/) — Date not recorded
  Scheduled automation tool that borrows an authenticated Chrome session to export and verify enterprise GUI reports.
- [gui_agent (FastMCP Desktop Server)](https://awesomecua.com/resources/github-leandre755-gui-agent/) — Date not recorded
  FastMCP server for Linux and Windows desktop computer use providing low-latency screen capture, OCR, and input automation.
- [Guibot](https://awesomecua.com/resources/github-intra2net-guibot/) — Date not recorded
  Guibot is a Python GUI automation library unifying template matching, feature detection, cascade classifiers, OCR, and VNC/PyAutoGUI control.
- [guo6x dsh-pilot](https://awesomecua.com/resources/github-guo6x-dsh-pilot/) — Date not recorded
  DeepSeek Harness plugin that drives a real Edge or Chrome browser over CDP using compact element refs.
- [Hachifish](https://awesomecua.com/resources/github-momo-null-hachifish/) — Date not recorded
  Hachifish is an on-device Android GUI agent that executes natural-language tasks via the native AccessibilityService with pre-completion checks.
- [Halo Bot](https://awesomecua.com/resources/github-galactic717-halo-bot/) — Date not recorded
  Self-hosted named AI teammates running in sandboxed desktop and browser environments on user-owned hardware.
- [Handrail CUA](https://awesomecua.com/resources/github-codelit-io-handrail-cua/) — Date not recorded
  Discover-once, replay-many computer-use automation framework with deterministic execution guardrails.
- [hands-off](https://awesomecua.com/resources/github-niramay-kelkar-hands-off/) — Date not recorded
  hands-off discovers UI workflows in legacy back-office software without APIs and compiles them into deterministic replay scripts.
- [hanzhangzzz dsh-computer-use](https://awesomecua.com/resources/github-hanzhangzzz-dsh-computer-use/) — Date not recorded
  Structure-first browser and desktop computer-use plugin for DeepSeek Harness.
- [headless-use](https://awesomecua.com/resources/github-flyingsquirrel0419-headless-use/) — Date not recorded
  Headless Linux browser runtime and CLI giving coding agents a real Chromium browser with persistent sessions.
- [Helix Control](https://awesomecua.com/resources/github-miyahluvgames-source-helix-computer-use/) — Date not recorded
  Windows computer-use MCP stack combining browser control, native desktop UI Automation, and dynamic screen grounding.
- [Hemi](https://awesomecua.com/resources/github-piuqiupiaqia-hemi/) — Date not recorded
  Desktop AI assistant for macOS and Windows featuring voice interaction, screen awareness, and local tool execution.
- [Hermes Agent](https://awesomecua.com/resources/github-nousresearch-hermes-agent/) — Date not recorded
  Hermes Agent is a self-improving autonomous agent by Nous Research with procedural skill synthesis, browser control, and multi-platform sandboxes.
- [Hermes Desktop Control](https://awesomecua.com/resources/github-jiangxiao642-spec-hermes-desktop-control/) — Date not recorded
  Hermes Desktop Control is a runtime-neutral Windows GUI automation engine combining UI Automation trees, Set-of-Mark overlays, and input dispatch.
- [hermes-hyprland-plugin](https://awesomecua.com/resources/github-xcaptain09-hermes-hyprland-plugin/) — Date not recorded
  C++ Hyprland Wayland compositor plugin and Python D-Bus AT-SPI coordinate-fusion bridge for zero-mouse-stealing Linux GUI agents.
- [Hermod](https://awesomecua.com/resources/github-klaiderman-hermod/) — Date not recorded
  NestJS browser-automation service that answers prompts by driving web LLM interfaces in headless Chromium.
- [HeroDesktop](https://awesomecua.com/resources/github-deathlegionteamlk-herodesktop/) — Date not recorded
  HeroDesktop is an open-source virtual desktop sandbox for running and observing AI computer-use agents.
- [hfyydd dsh-cua](https://awesomecua.com/resources/github-hfyydd-dsh-cua/) — Date not recorded
  DeepSeek Harness computer-use plugin backed by the `cua-driver` daemon for accessibility-first desktop automation.
- [hightemp MCP Browser Control](https://awesomecua.com/resources/github-hightemp-mcp-browser-control/) — Date not recorded
  Local Go Model Context Protocol server and Manifest V3 extension for controlling open Chrome or Firefox tabs.
- [Hikari (光)](https://awesomecua.com/resources/github-codewithevilxd-hikari/) — Date not recorded
  Autonomous AI desktop agent for Windows capable of GUI control, system management, and multi-step task execution.
- [Hronaut](https://awesomecua.com/resources/github-hronaut-hronaut/) — Date not recorded
  Visible, persistent, dedicated browser runtime that coding agents can control without interrupting the user's personal browser.
- [Human Browser Copilot](https://awesomecua.com/resources/github-officiallemmy254-droid-human-browser-copilot/) — Date not recorded
  Agentic Chrome copilot featuring organic mouse kinematics, visual perception, and natural-language web task execution.
- [Human-Browser](https://awesomecua.com/resources/github-hterzia-human-browser/) — Date not recorded
  Vision-driven browser automation service where an external LLM sets high-level goals and a visual browser assistant executes them.
- [HumanHands](https://awesomecua.com/resources/github-thispc-humanhands/) — Date not recorded
  macOS computer-use agent that combines Accessibility-tree semantics with visual fallback to operate Mac apps like a human.
- [Hunch MCP](https://awesomecua.com/resources/github-prithviseran-hunch-mcp/) — Date not recorded
  Focus-free background macOS automation MCP server combining OS APIs, AppleScript, Chrome CDP, and Accessibility trees.
- [Hunter (Autonomous Job-Search Agent)](https://awesomecua.com/resources/github-lodelux-hunter-public/) — Date not recorded
  Autonomous job-search and application browser agent with evidence-linked fit scoring and submission tracking.
- [hypr-computer-use-mcp](https://awesomecua.com/resources/github-smirnov-labs-hypr-computer-use-mcp/) — Date not recorded
  Hyprland/Wayland computer-use MCP server combining screenshot/click/type tools with tmux and CDP integration.
- [hyprhands](https://awesomecua.com/resources/github-berker-z-hyprhands/) — Date not recorded
  Hyprland Wayland computer-use MCP server giving AI agents semantic and pixel-level desktop control.
- [Hyprland Codex Background Computer Use](https://awesomecua.com/resources/github-gabriel-kahen-hyprland-codex-background-computer-use/) — Date not recorded
  Enables background Codex computer control of Hyprland Wayland and XWayland applications without stealing focus.
- [hypruse](https://awesomecua.com/resources/github-ilyaskhallouki-hypruse/) — Date not recorded
  Model Context Protocol server giving AI agents native window, input, and screenshot control on Linux Hyprland Wayland desktops.
- [InFu (Windows Agent Harness)](https://awesomecua.com/resources/github-wins0l-harness/) — Date not recorded
  Local coding and computer-use agent for Windows that inspects repositories, runs commands, and automates desktop tasks.
- [Inner Coordinates](https://awesomecua.com/resources/github-xiaochu-1208-inner-coordinates/) — Date not recorded
  Reverse-engineers a clickable coordinate and state map of macOS and iPhone applications once for deterministic workflow replay.
- [Intent Browser Runtime (ibr)](https://awesomecua.com/resources/github-hop-top-ibr/) — Date not recorded
  Intent Browser Runtime (ibr) translates natural-language instructions into resilient XPath/DOM actions using Playwright and Vercel AI SDK.
- [InTheRainOf Mobile Agent (随身Agent)](https://awesomecua.com/resources/github-intherainof-mobile-agent/) — Date not recorded
  On-device Android AI agent for automating phone apps and daily mobile tasks.
- [invisible_dots](https://awesomecua.com/resources/github-feder-cr-invisible-dots/) — Date not recorded
  invisible_dots is a self-hosted cloud browser-agent workspace pairing isolated KVM virtual machines with anti-detect Firefox automation.
- [invisible_playwright](https://awesomecua.com/resources/github-feder-cr-invisible-playwright/) — Date not recorded
  invisible_playwright provides a drop-in Python Playwright client backed by an anti-detect Firefox build for stealth browser agent automation.
- [iOS Agent Harness](https://awesomecua.com/resources/github-a178960320-ios-agent-harness/) — Date not recorded
  iOS Agent Harness runs a Manager-Executor-Reflector GUI agent loop on iPhones to automate cross-app tasks from natural language.
- [iPhone CUA](https://awesomecua.com/resources/github-masone-iphone-cua/) — Date not recorded
  iPhone CUA steers physical iPhones from macOS by pairing an iPhone screen/control bridge with OpenAI Computer-Using Agent models.
- [iphone-control (iPhone Mirroring Skill)](https://awesomecua.com/resources/github-charlesmorgansoftware-iphone-control/) — Date not recorded
  macOS skill and CoreGraphics controller for driving a paired iPhone through Apple's macOS iPhone Mirroring app.
- [IrisGUI](https://awesomecua.com/resources/github-black-yt-irisgui/) — Date not recorded
  IrisGUI is a cross-platform desktop GUI agent that perceives screens and automates mouse and keyboard workflows.
- [IXR Agent](https://awesomecua.com/resources/github-vishnu-madhavan-git-ixr-agent/) — Date not recorded
  IXR Agent is a TypeScript in-page web GUI agent that executes natural-language instructions over live web applications.
- [izan.io](https://awesomecua.com/resources/github-ekingunoncu-izan-io/) — Date not recorded
  izan.io is a Chrome extension MCP server that exposes browser tab management, DOM inspection, clicking, typing, and screenshot tools to AI agents.
- [jaibhasin dsh-browser-agent](https://awesomecua.com/resources/github-jaibhasin-dsh-browser-agent/) — Date not recorded
  Chrome side-panel autonomous browser agent powered by DeepSeek Harness.
- [JasonWei04 dsh-computer-use](https://awesomecua.com/resources/github-jasonwei04-dsh-computer-use/) — Date not recorded
  Equips text-only LLMs in DeepSeek Harness with desktop screen perception and mouse/keyboard control.
- [Jcua (Jev Computer Use Agent)](https://awesomecua.com/resources/github-1deat0r-jcua/) — Date not recorded
  Jcua is a cross-platform computer-use agent powered by Jev decision models across Linux, Windows, and macOS desktops.
- [Jev macOS Loop](https://awesomecua.com/resources/github-jcpsimmons-jev-macos-loop/) — Date not recorded
  Jev macOS Loop combines Apple Silicon local Jev decision models, OmniParser grounding, and native macOS Accessibility actuation.
- [jev-windows-agent](https://awesomecua.com/resources/github-vbs2004-jev-windows-agent/) — Date not recorded
  jev-windows-agent pairs Windows UI Automation inspection with a fast Jev System-One decision loop for low-latency desktop control.
- [jing-hy computer-user (DSH Windows Plugin)](https://awesomecua.com/resources/github-jing-hy-computer-user/) — Date not recorded
  Codex-style Windows computer-use plugin for DeepSeek Harness supporting screen reading and mouse/keyboard input.
- [jmeguilos Computer Use MCP](https://awesomecua.com/resources/github-jmeguilos-computer-use-mcp/) — Date not recorded
  Window-scoped macOS computer-use server over local stdio MCP using native ScreenCaptureKit and Accessibility APIs.
- [Job Hunter](https://awesomecua.com/resources/github-liooo0-job-hunter/) — Date not recorded
  AI-assisted job application browser agent that matches resumes to listings, automates form filling, and logs submission traces.
- [Job Hunter AI](https://awesomecua.com/resources/github-fred-brown-3-job-hunter-ai/) — Date not recorded
  Agentic AI career copilot with automated candidate intake and verified browser form filling.
- [Job Pilot 2027 (秋招雷达 2027)](https://awesomecua.com/resources/github-qiulingzhu809-sudo-job-pilot-2027/) — Date not recorded
  Local browser-assisted campus recruiting workbench that manages candidate profiles and autofills enterprise job portals.
- [Kagami Desktop (鏡)](https://awesomecua.com/resources/github-gytxtx-kagami-desktop/) — Date not recorded
  Windows native CLI and MCP tool for desktop window observation, UI Automation control-tree parsing, and input interaction.
- [kamalesh404 AgentOS](https://awesomecua.com/resources/github-kamalesh404-agentos/) — Date not recorded
  Autonomous AI agent framework for orchestrating web browsing, coding, and desktop tasks.
- [kb-browser](https://awesomecua.com/resources/github-hiyokosauna37-kb-browser/) — Date not recorded
  CLI-driven Playwright and Chromium browser with terminal DevTools for humans and AI coding agents.
- [kde-mcp](https://awesomecua.com/resources/github-atassis-kde-mcp/) — Date not recorded
  Model Context Protocol server for observing and controlling Linux KDE Plasma 6 Wayland desktops.
- [Kernel Claude Computer Use Loop](https://awesomecua.com/resources/github-kernel-claude-cu-loop-sample/) — Date not recorded
  Reference SDK implementation of Anthropic's Claude Computer Use agent loop driving remote cloud browsers via Kernel's Computer Controls API.
- [Kiko Windows Voice Assistant](https://awesomecua.com/resources/github-blazecodeprakhar-kiko-windows-voice-assistant/) — Date not recorded
  Native, 100% offline Windows desktop voice and GUI automation assistant.
- [Kimi Computer Use Bridge](https://awesomecua.com/resources/github-songkeys-kimi-computer-use/) — Date not recorded
  Bridges Kimi Code CLI to local macOS desktop applications through the OpenAI Computer Use MCP server and Apple Accessibility APIs.
- [Kimi Computer Use Lab](https://awesomecua.com/resources/github-hqhq1025-kimi-computer-use-lab/) — Date not recorded
  Analyzes and reproduces the Kimi Desktop computer-use architecture combining OpenClaw browser/canvas control with macOS helper binaries.
- [kimi-cu-pi](https://awesomecua.com/resources/github-johndfowler-kimi-cu-pi/) — Date not recorded
  Extension connecting Kimi Computer Use (KimiCU) visual grounding and action capabilities to the Pi coding agent.
- [kimi-webbridge-mcp](https://awesomecua.com/resources/github-losecher-kimi-webbridge-mcp/) — Date not recorded
  Stdio Model Context Protocol server wrapping the local Kimi WebBridge daemon as browser-control tools.
- [Kortix Suna](https://awesomecua.com/resources/github-kortix-ai-suna/) — Date not recorded
  Kortix Suna is an open-source generalist agent platform combining a containerized browser, code interpreter, file manager, and tool runtime.
- [Kota-Kawa Browser-Agent](https://awesomecua.com/resources/github-kota-kawa-browser-agent/) — Date not recorded
  FastAPI and browser-use web agent featuring live CDP session streaming, Server-Sent Events (SSE) progress logs, and interactive UI control.
- [Kryptic](https://awesomecua.com/resources/github-adnqcr7-code-kryptic/) — Date not recorded
  Local-first AI engineering and browser-control agent runtime with bounded execution, verification, and self-repair.
- [Kushatish AI Browser Copilot](https://awesomecua.com/resources/github-kushatish-ai-browser-copilot/) — Date not recorded
  Chrome extension providing page-aware Q&A and user-approved browser actions powered by Groq LLMs.
- [kwin-mcp](https://awesomecua.com/resources/github-isac322-kwin-mcp/) — Date not recorded
  Model Context Protocol server for Linux KDE Plasma 6 Wayland desktop GUI automation providing 29 tools for virtual KWin sessions, AT-SPI, and input.
- [Kyros Local Desktop Assistant](https://awesomecua.com/resources/github-rhymezip-kyros-local-desktop-assistant/) — Date not recorded
  Private, voice-first local Linux desktop assistant for hands-free application and system control.
- [LAI (Linux Native OS Agent)](https://awesomecua.com/resources/github-cufelix-lai/) — Date not recorded
  Native OS agent runtime for Linux desktops providing system-wide screen observation, accessibility inspection, and input control.
- [Larker](https://awesomecua.com/resources/github-qiadastrachen-bit-larker/) — Date not recorded
  Larker is a vision-driven Windows desktop agent that automates GUI clients lacking DOM or Accessibility APIs via VLM grounding.
- [Latch](https://awesomecua.com/resources/github-freezetheworld-latch/) — Date not recorded
  Attaches local coding agents directly to the user's real signed-in Chrome browser.
- [Latere Sandbox Images](https://awesomecua.com/resources/github-latere-ai-sandbox-images/) — Date not recorded
  Container images for coding and computer-use desktop agents compatible with Docker, Podman, and Cella sandboxes.
- [Latitude Browser](https://awesomecua.com/resources/github-djblack1209-coder-latitude-browser/) — Date not recorded
  Desktop workspace for managing isolated browser profiles, proxy routing, and multi-session web automation.
- [lauyuen stealth-browser-mcp](https://awesomecua.com/resources/github-lauyuen-stealth-browser-mcp/) — Date not recorded
  Model Context Protocol server providing AI assistants with a stealth-configured Chrome browser.
- [lazy-desktop-mcp](https://awesomecua.com/resources/github-leaf76-lazy-desktop-mcp/) — Date not recorded
  Local-first desktop control MCP server combining a Rust native host and Node.js launcher with policy-gated computer-use tools.
- [LegacyBridge](https://awesomecua.com/resources/github-peterhaupt-legacybridge/) — Date not recorded
  Local open-weight LLM agent framework for automating legacy enterprise ERP and business desktop software without APIs.
- [libnut-core](https://awesomecua.com/resources/github-nut-tree-libnut-core/) — Date not recorded
  libnut-core provides native C/C++ cross-platform mouse, keyboard, and screen hooks underlying the nut.js desktop automation framework.
- [LibreAutomate](https://awesomecua.com/resources/github-qgindi-libreautomate/) — Date not recorded
  LibreAutomate is a C# script editor and Windows automation library supporting UI Automation, accessibility trees, image matching, and OCR.
- [Libretto](https://awesomecua.com/resources/github-cashew-labs-libretto/) — Date not recorded
  Libretto is a toolkit that gives coding agents a live browser and CLI to inspect pages, record user actions, build scripts, and debug web integrations.
- [Lightcone SDK](https://awesomecua.com/resources/github-tzafon-lightcone/) — Date not recorded
  Lightcone is Tzafon's Python and TypeScript SDK for building computer-use agents powered by Northstar GUI vision-language models.
- [Lightfeed Replayable Browser Agent](https://awesomecua.com/resources/github-lightfeed-browser-agent/) — Date not recorded
  TypeScript browser agent library that uses an LLM to complete a web navigation workflow once and replays cached selectors with zero LLM tokens.
- [Liha WebMCP Adapter](https://awesomecua.com/resources/github-liha-app-webmcp-adapter/) — Date not recorded
  Retrofits existing websites with structured WebMCP tool definitions without requiring backend code changes.
- [Linux CUA (5omeotherguy)](https://awesomecua.com/resources/github-5omeotherguy-linux-computer-use/) — Date not recorded
  Linux desktop toolkit for computer-use agents providing isolated X11 workspaces, window capture, and input synthesis.
- [linux-computer-use](https://awesomecua.com/resources/github-tak-uukti-linux-computer-use/) — Date not recorded
  Linux/X11 computer-use toolkit and MCP server combining AT-SPI semantic trees, screenshots, and input control for coding agents.
- [linux-use](https://awesomecua.com/resources/github-javimosch-linux-use/) — Date not recorded
  Agent-first, CLI-first GUI control toolkit for Linux desktops operating over the AT-SPI2 accessibility tree.
- [LiveMCP](https://awesomecua.com/resources/github-magi-labs-livemcp/) — Date not recorded
  Manifest V3 Chrome extension and MCP hub that lets AI agents operate the user's logged-in Chrome profile and inspect network calls.
- [Living Dream DSH](https://awesomecua.com/resources/github-alllllllllli-living-dream-dsh/) — Date not recorded
  DeepSeek Harness desktop configuration bundle integrating 8+ MCP servers for browser, filesystem, and desktop automation.
- [LKO Mark 3.4](https://awesomecua.com/resources/github-shubhransh-gupta-lko-mark-3-4/) — Date not recorded
  Autonomous macOS desktop assistant with voice interaction, screen vision, and native AppleScript/system control.
- [llm-browser-agent](https://awesomecua.com/resources/github-justifysiddh-llm-browser-agent/) — Date not recorded
  Self-healing browser automation framework that replaces brittle CSS selectors with LLM-guided semantic element resolution.
- [lnwjud (Windows MCP Access)](https://awesomecua.com/resources/github-phuongt2576-lnwjud-readme/) — Date not recorded
  Provides AI agents with native Windows desktop access via MCP, secure tunnels, and live monitoring.
- [Local Computer-Use Agent](https://awesomecua.com/resources/github-storage1n1-local-computer-use-agent/) — Date not recorded
  Offline computer-use agent combining Ollama vision-language models (`qwen3-vl`, `minicpm-v`) with Set-of-Marks grounding and crop-zoom refinement.
- [Local Life Publisher Skill](https://awesomecua.com/resources/github-3105059695-rgb-local-life-publisher/) — Date not recorded
  Verified browser-automation skill for WorkBuddy and Codex to publish content across Xiaohongshu, Douyin, and Ctrip.
- [local-browser-agent](https://awesomecua.com/resources/github-yourself-q-local-browser-agent/) — Date not recorded
  Local-first browser agent that attaches to an existing Chrome instance via CDP and runs entirely on local Ollama LLMs.
- [local-windows-use](https://awesomecua.com/resources/github-yuhuison-local-windows-use/) — Date not recorded
  MCP server and CLI that lets frontier LLMs delegate token-heavy Windows desktop and browser clicking loops to compact local models.
- [LocalFleet](https://awesomecua.com/resources/github-varun-patkar-localfleet/) — Date not recorded
  Local-first team of AI desktop and browser bots coordinated through a unified chat interface with LM Studio/Ollama.
- [LockInTime headless](https://awesomecua.com/resources/github-lockintime-headless/) — Date not recorded
  Persistent, safety-enforced browser control runtime for AI agents with a semantic CLI.
- [Locopilot](https://awesomecua.com/resources/github-pradhankukiran-locopilot/) — Date not recorded
  Supervised Linux desktop automation copilot featuring sandboxed execution, policy guardrails, and rollback checkpoints.
- [Lom Desktop (麓鸣)](https://awesomecua.com/resources/github-rfdiosuao-lom-desktop/) — Date not recorded
  Lom is an open-source multi-agent workspace coordinating desktop coding agents with cross-device Android phone execution.
- [look-decide-act](https://awesomecua.com/resources/github-ivanposel-look-decide-act/) — Date not recorded
  Drives live web applications over CDP through a closed-loop visual look-decide-act cycle rather than brittle script replay.
- [LOVI AI Browser](https://awesomecua.com/resources/github-shubh2moon-hub-lovi-ai-browser/) — Date not recorded
  Privacy-first autonomous AI companion browser powered by local Qwen 2.5 models.
- [Lucy Screen Agent](https://awesomecua.com/resources/github-alzin-lucy-screen-agent/) — Date not recorded
  Lucy is a voice-and-screen Android agent that perceives live app screens with Gemini vision and executes taps, swipes, and text input.
- [Lumen browser agent](https://awesomecua.com/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [lvyuan1688 browser-use-rs](https://awesomecua.com/resources/github-lvyuan1688-browser-use-rs/) — Date not recorded
  Rust port of the Browser Use architecture enabling LLMs to control web browsers with native speed.
- [Mac MCP (Menu Bar & Local Server)](https://awesomecua.com/resources/github-bulutarkan-mac-mcp/) — Date not recorded
  macOS menu-bar application and local MCP server enabling Claude, ChatGPT, and Codex to inspect and control Mac apps.
- [mac-pilot](https://awesomecua.com/resources/github-shxmi03-mac-pilot/) — Date not recorded
  Zero-dependency macOS automation CLI and MCP server built on Python `ctypes` and CoreGraphics.
- [mac-use-mcp](https://awesomecua.com/resources/github-antbotlab-mac-use-mcp/) — Date not recorded
  Zero-dependency macOS desktop automation MCP server exposing 18 tools for Accessibility inspection, screenshots, and input control.
- [MacControlKit](https://awesomecua.com/resources/github-tzafon-maccontrolkit/) — Date not recorded
  MacControlKit is a Swift package by Tzafon for capturing macOS screens and dispatching native mouse and keyboard events.
- [macMCP](https://awesomecua.com/resources/github-erwinzhang7-macmcp/) — Date not recorded
  macOS Model Context Protocol server with per-application permission gating, Accessibility tree inspection, screenshots, and UI control.
- [macOS Computer Use MCP Server (33 Tools)](https://awesomecua.com/resources/github-syedazharmbnr1-computer-use-mcp/) — Date not recorded
  Python Model Context Protocol server exposing 33 tools for macOS screen capture, Accessibility inspection, and input control.
- [macOS Control CLI](https://awesomecua.com/resources/github-ferdinandl007-macos-control-cli/) — Date not recorded
  macOS Control CLI combines local OmniParser v2 UI element detection with human-like mouse, keyboard, and scroll actuation on macOS.
- [macOS Visual Agent](https://awesomecua.com/resources/github-peakmojo-macos-visual-agent/) — Date not recorded
  macOS Visual Agent inspects native Apple Accessibility trees, detects UI elements, and executes coordinate-accurate clicks on macOS.
- [macos-computer-use](https://awesomecua.com/resources/github-iamme19862002-macos-computer-use/) — Date not recorded
  macos-computer-use is a native Swift CLI toolkit providing 68+ commands for macOS window management, UI element localization, OCR, and input.
- [macos-desktop-control](https://awesomecua.com/resources/github-d-wwei-macos-desktop-control/) — Date not recorded
  Native macOS desktop automation MCP server providing screen capture, mouse/keyboard input, window management, and iOS Simulator control.
- [macOS-MCP](https://awesomecua.com/resources/github-cursortouch-macos-mcp/) — Date not recorded
  Lightweight Model Context Protocol server for macOS computer use providing Accessibility tree traversal, screenshots, and input simulation.
- [macOS-Use](https://awesomecua.com/resources/github-jeomon-macos-use/) — Date not recorded
  macOS-Use is a GUI desktop agent that reads the macOS Accessibility tree and executes multi-step application workflows.
- [MacosUseSDK](https://awesomecua.com/resources/github-mediar-ai-macosusesdk/) — Date not recorded
  MacosUseSDK is a Swift library and CLI for traversing the macOS accessibility tree and simulating native mouse and keyboard input.
- [macpilot-mcp](https://awesomecua.com/resources/github-passerby2049-macpilot-mcp/) — Date not recorded
  macOS Model Context Protocol server for capturing displays, reading Accessibility trees, and invoking native UI actions.
- [Macuse MCP](https://awesomecua.com/resources/github-macuse-app-macuse-mcp/) — Date not recorded
  Macuse MCP is a native macOS Model Context Protocol server granting AI agents direct control over Calendar, Mail, Notes, Messages, and GUI apps.
- [MacWork](https://awesomecua.com/resources/github-gklab-macwork/) — Date not recorded
  MacWork is an open-source macOS computer-use agent and MCP server that drives desktop applications through the native Accessibility API.
- [Maestro (AI-Drivable RPA)](https://awesomecua.com/resources/github-rexchengm-maestro/) — Date not recorded
  Records a desktop or browser task once and lets AI optimize, parameterize, and replay it as a deterministic RPA workflow.
- [maestro-oss](https://awesomecua.com/resources/github-victorkaor-maestro-oss/) — Date not recorded
  Open-source multi-agent spatial orchestration canvas integrating CLI agents, browser automation, and desktop tools.
- [Magpie Computer Use](https://awesomecua.com/resources/github-sammysnake-d-magpie-computer-use-agent/) — Date not recorded
  Magpie distributes ten macOS Computer Use MCP tools with explicit human-in-the-loop approval gates to local coding and desktop agents.
- [MAI](https://awesomecua.com/resources/github-fluxaster-mai/) — Date not recorded
  MAI combines MaaFramework with multimodal LLMs in a Planner-Executor-Verifier loop for game and application GUI automation.
- [mangouse](https://awesomecua.com/resources/github-gianlucamazza-mangouse/) — Date not recorded
  Compositor-agnostic Linux Wayland virtual seat and input adapter for coding and computer-use agents.
- [Mantis](https://awesomecua.com/resources/github-mercurialsolo-mantis/) — Date not recorded
  Mantis is a unified perception-reasoning-action computer-use agent that drives browsers and Xvfb desktop applications from structured plans.
- [mapleluvr cu (Evidence-Bound Windows CLI)](https://awesomecua.com/resources/github-mapleluvr-cu/) — Date not recorded
  Evidence-bound computer-use CLI for Windows that pairs every UI action with pre/post window observations.
- [Market Basket Agent](https://awesomecua.com/resources/github-0xyene-market-basket-agent/) — Date not recorded
  Autonomous web shopping agent that compares grocery basket prices across live delivery portals.
- [Marvi OS](https://awesomecua.com/resources/github-xretr00-marvi-os/) — Date not recorded
  Conversational desktop agent shell that observes screen context and executes local OS and GUI actions.
- [Mary (Personal AI OS)](https://awesomecua.com/resources/github-rao-studios-mary/) — Date not recorded
  Ambient-intelligent macOS computer-use desktop client and personal AI operating environment.
- [Master Internet Unit](https://awesomecua.com/resources/github-0bifthenelse-master-internet-unit/) — Date not recorded
  High-performance Rust Model Context Protocol browser server for AI agents.
- [MatthewAlexOng Agent Bridge](https://awesomecua.com/resources/github-matthewalexong-agent-bridge/) — Date not recorded
  Chrome extension and local relay bridging AI coding agents directly to active browser tabs.
- [MCP Browser (macOS WKWebView)](https://awesomecua.com/resources/github-brainfuel-mcp-browser/) — Date not recorded
  Native macOS WKWebView web browser exposed directly as a Model Context Protocol server for AI agents.
- [MCP Browser Use Server](https://awesomecua.com/resources/github-jovanipink-mcp-browser-use/) — Date not recorded
  FastAPI Model Context Protocol server that exposes browser-use autonomous web navigation workflows as callable MCP tools.
- [MCP Desktop Automation](https://awesomecua.com/resources/github-tanob-mcp-desktop-automation/) — Date not recorded
  MCP Desktop Automation is a Model Context Protocol server using RobotJS to provide screen capture, mouse movement, and keyboard input to LLMs.
- [MCP Session Bridge](https://awesomecua.com/resources/github-t3ratech-mcp-session-bridge/) — Date not recorded
  Model Context Protocol server that drives the browser session the user is already signed into.
- [MCP Virtual Cursor](https://awesomecua.com/resources/github-sos2778-mcp-virtual-cursor/) — Date not recorded
  macOS computer-use MCP server that operates applications via Accessibility actions and a virtual cursor without hijacking the physical mouse.
- [MCP Windows Desktop Automation](https://awesomecua.com/resources/github-mario-andreschak-mcp-windows-desktop-automation/) — Date not recorded
  MCP Windows Desktop Automation is a TypeScript Model Context Protocol server exposing 50 AutoIt desktop control, window, and screenshot tools.
- [mcp-anything](https://awesomecua.com/resources/github-zaymadkid-mcp-anything/) — Date not recorded
  Suite of 7 Model Context Protocol servers exposing 228 tools to bridge desktop applications and system services to AI agents.
- [mcp-camoufox](https://awesomecua.com/resources/github-agelyhq-mcp-camoufox/) — Date not recorded
  Browser automation MCP server built on the Camoufox anti-detect Firefox browser for bypassing bot walls during agent navigation.
- [mcp-dia](https://awesomecua.com/resources/github-aissablk1-mcp-dia/) — Date not recorded
  Model Context Protocol server for controlling Dia Browser tabs, pages, and built-in AI features over the Chrome DevTools Protocol.
- [mcp-linux-desktop](https://awesomecua.com/resources/github-wizardofweb125-lab-mcp-linux-desktop/) — Date not recorded
  Model Context Protocol server for full Linux desktop control spanning windows, mouse, keyboard, clipboard, audio, OCR, and accessibility.
- [MCP-RealBrowser](https://awesomecua.com/resources/github-obbbba-mcp-realbrowser/) — Date not recorded
  Model Context Protocol server providing 20 browser tools over a persistent, logged-in browser profile.
- [mcp-server-browser-use](https://awesomecua.com/resources/github-saik0s-mcp-browser-use/) — Date not recorded
  MCP server that wraps browser-use so that an MCP client can automate a real browser, with a CLI, a web dashboard and a deep research mode.
- [mcp-vroid](https://awesomecua.com/resources/github-nhodges-mcp-vroid/) — Date not recorded
  Model Context Protocol server that drives VRoid Studio 3D character creation via Linux Wayland GUI automation.
- [MCPSafari](https://awesomecua.com/resources/github-epistates-mcpsafari/) — Date not recorded
  Native macOS Safari Model Context Protocol server allowing AI agents to inspect and control the user's logged-in Safari browser.
- [md-e2e](https://awesomecua.com/resources/github-a-ryan-kr-md-e2e/) — Date not recorded
  Zero-glue-code, Markdown-native end-to-end browser test automation framework powered by LLM agents.
- [MealPilot](https://awesomecua.com/resources/github-raunak-choudhary-hack-princeton-mealpilot/) — Date not recorded
  Agentic grocery shopping platform that compares real-time cart prices across Instacart and retail web portals.
- [MediSetu Lens](https://awesomecua.com/resources/github-furyydev-medisetu-lens/) — Date not recorded
  Browser agent that searches and compares generic medicine availability and pricing across API-less pharmacy portals.
- [Melaya MCP](https://awesomecua.com/resources/github-melaya-labs-melaya-mcp/) — Date not recorded
  Agent orchestration and Model Context Protocol runtime connecting AI agents to 6,000+ browser, desktop, and API tools.
- [MERRICK](https://awesomecua.com/resources/github-simoncheungai-merrick/) — Date not recorded
  Personal macOS assistant agent for planning, browser automation, and native desktop task execution.
- [Microsoft Paint MCP Server](https://awesomecua.com/resources/github-miguelcespedes-microsoft-paint-mcp-server/) — Date not recorded
  Semantic Model Context Protocol interface for Microsoft Paint allowing AI agents to draw geometry, diagrams, and canvas edits.
- [midscene-pc](https://awesomecua.com/resources/github-mofangbao-midscene-pc/) — Date not recorded
  midscene-pc extends Midscene.js to local and remote PC desktops, enabling natural-language GUI automation across Windows, Linux, and macOS.
- [Midscene.js](https://awesomecua.com/resources/github-web-infra-dev-midscene/) — Date not recorded
  Visual automation toolkit for web, mobile, and desktop interfaces.
- [migi](https://awesomecua.com/resources/github-mikuh-migi/) — Date not recorded
  migi is a skill-oriented desktop GUI vision automation CLI for LLM agents with machine-readable JSON outputs and coordinate grounding.
- [Miiiuser dsh-browser-agent](https://awesomecua.com/resources/github-miiiuser-dsh-browser-agent/) — Date not recorded
  Playwright browser automation and vision grounding toolkit for text-only LLMs on DeepSeek Harness.
- [Milli-Agent](https://awesomecua.com/resources/github-abdullah-al-raju-milli-agent/) — Date not recorded
  Milli-Agent is a real-time computer-use agent architecture designed for high-frequency in-memory screen capture and low-latency actuation.
- [mimic (Kernel-Level uinput Driver)](https://awesomecua.com/resources/github-juicerq-mimic/) — Date not recorded
  Drives mouse, keyboard, and screen control on Linux through kernel-level `/dev/uinput` human-like input trajectories.
- [Minitap mobile-use](https://awesomecua.com/resources/github-minitap-ai-mobile-use/) — Date not recorded
  Minitap mobile-use is a multi-agent mobile automation system that controls physical and emulated Android and iOS devices from natural language.
- [Mobile Harness](https://awesomecua.com/resources/github-droidrun-mobile-harness/) — Date not recorded
  Portable agent instructions and integration tooling for local or cloud phone control through mobilerun-core.
- [Mobile Next MCP](https://awesomecua.com/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Mobile Use Agent (Cloud Phone Skill)](https://awesomecua.com/resources/github-chenjie1129-mobile-use-agent/) — Date not recorded
  Python SDK, CLI, and agent skill for driving cloud Android phones via Volcengine Mobile Use Agent OpenAPI with GPS and app state injection.
- [MobileClaw](https://awesomecua.com/resources/github-eggbrid2-mobileclaw/) — Date not recorded
  MobileClaw is an open Android AI agent runtime for phone control, VLM screen reading, and reusable mobile skill execution.
- [MobileMCP](https://awesomecua.com/resources/github-magi-labs-mobilemcp/) — Date not recorded
  MobileMCP lets AI agents control physical Android phones over WebSocket via an on-device AccessibilityService app without ADB or root.
- [modal-computer-use](https://awesomecua.com/resources/github-ashtonchew-modal-computer-use/) — Date not recorded
  Provides daemon-first computer-use primitives for provisioning and controlling GUI desktops inside Modal cloud sandboxes.
- [Momos](https://awesomecua.com/resources/github-iyulab-momos/) — Date not recorded
  Autonomous UI inspection agent that interacts with live applications to uncover runtime and UX flow defects missed by static analysis.
- [Mosaic Desktop Automation](https://awesomecua.com/resources/github-quill-00-mosaic-desktop-automation/) — Date not recorded
  Local-first Windows dashboard for scheduling, watching, and auditing desktop automation agents.
- [Mosaik](https://awesomecua.com/resources/github-luantak-mosaik/) — Date not recorded
  Composable agentic browser automation framework built from small, reusable perception and action primitives.
- [Motus](https://awesomecua.com/resources/github-dataficationsdk-motus/) — Date not recorded
  Motus is an extensible .NET browser automation and agentic testing framework communicating directly with Chromium via CDP.
- [muhtalhakhan OpenAgent](https://awesomecua.com/resources/github-muhtalhakhan-open-agent/) — Date not recorded
  Self-hosted, provider-agnostic AI agent runtime with browser automation, shell execution, and extensible skill plugins.
- [munim-computer-use](https://awesomecua.com/resources/github-munimtechnologies-munim-computer-use/) — Date not recorded
  munim-computer-use is a cross-platform Computer Use MCP server combining native OS accessibility trees, OCR, and policy guardrails.
- [my_tiny_agent](https://awesomecua.com/resources/github-yanjin101-my-tiny-agent/) — Date not recorded
  Spec-driven small-LLM desktop agent that operates Windows end-to-end using OCR, YOLO icon detection, and Win32 APIs without a VLM.
- [nanbbb dsh-computer-use-windows](https://awesomecua.com/resources/github-nanbbb-dsh-computer-use-windows/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness combining window discovery, UI Automation inspection, and input synthesis.
- [Nanobrowser](https://awesomecua.com/resources/github-nanobrowser-nanobrowser/) — Date not recorded
  A browser-extension agent that reads pages, interacts with elements and moves between tabs from a side-panel task interface.
- [Nanobrowser Free AI](https://awesomecua.com/resources/github-aminemabrouk17-nanobrowser-free-ai/) — Date not recorded
  Privacy-focused Chrome extension multi-agent web automation assistant powered by free-tier Gemini models.
- [nanoMuse](https://awesomecua.com/resources/github-nano-muse-nanomuse/) — Date not recorded
  nanoMuse is an open-source personal agent that maintains persistent cross-device memory and executes browser, desktop, and mobile tasks.
- [natbot](https://awesomecua.com/resources/github-nat-natbot/) — Date not recorded
  Early Playwright-based browser agent prototype that drives web navigation by feeding simplified DOM link/input lists to an LLM.
- [Native by K](https://awesomecua.com/resources/github-karunya-muddana-native/) — Date not recorded
  Local-first open-source AI agent harness for developers integrating terminal, filesystem, and browser control.
- [NaveedAshraf Browser Bridge](https://awesomecua.com/resources/github-naveedashraf1-browser-automation-extension/) — Date not recorded
  Chrome extension, HTTP API, and MCP server exposing 185 commands and smart selectors for controlling a live Chrome browser.
- [navforge](https://awesomecua.com/resources/github-huzjie-navforge/) — Date not recorded
  navforge is a self-hosted orchestration framework for coordinating multi-step computer-use and browser navigation agents.
- [NaviFlow](https://awesomecua.com/resources/github-marc-ing-navi-flow/) — Date not recorded
  Supervised open-source AI browser agent for Chrome that plans, navigates, clicks, types, and verifies web workflows.
- [Nehemiah](https://awesomecua.com/resources/github-boringcomputers-nehemiah/) — Date not recorded
  Nehemiah provisions on-demand Linux Firecracker microVMs equipped with a browser and desktop environment for AI agents.
- [NekoPilot](https://awesomecua.com/resources/github-skyaerope-nekopilot/) — Date not recorded
  NekoPilot is a Manifest V3 Chrome and Edge sidebar browser agent with Chrome DevTools Protocol control and multi-LLM support.
- [nekoro-browser](https://awesomecua.com/resources/github-zeshuochen-nekoro-browser/) — Date not recorded
  Lightweight browser automation CLI and MCP server driving the user's everyday Chrome via a companion extension.
- [Nell (Open Source Instinct)](https://awesomecua.com/resources/github-iabdulwasey-nell/) — Date not recorded
  Personal computer-use and browser agent controlled via text messages to execute local desktop and web workflows.
- [NeuroSight (QiraBot Vision Runtime)](https://awesomecua.com/resources/github-vthanhhdev-qirabot-vision-runtime/) — Date not recorded
  Selector-free AI vision automation runtime for desktop applications, mobile screens, and games.
- [NextGen macOS Computer-Use Agent](https://awesomecua.com/resources/github-nextgen-agentics-computer-use-agent/) — Date not recorded
  macOS desktop automation agent using a 5-layer perception cascade from native Accessibility trees to OCR and VLM grounding.
- [NirvanaX AutoAgent](https://awesomecua.com/resources/github-sayantanthecmd-nirvanax-autoagent/) — Date not recorded
  Multimodal personal AI assistant for Windows that combines voice input, screen vision, and desktop control.
- [nodriver-mcp-server](https://awesomecua.com/resources/github-andresolbach-nodriver-mcp-server/) — Date not recorded
  Model Context Protocol server exposing 70 stealth Chrome workspace, DOM extraction, and interaction tools powered by `nodriver`.
- [NORTHTEK Ghost](https://awesomecua.com/resources/github-northtekdevs-ghost/) — Date not recorded
  Provides verified desktop control for AI agents on Windows and Linux across native GUI applications lacking APIs.
- [Nova (Rust Cross-Platform CUA MCP)](https://awesomecua.com/resources/github-bigduu-nova/) — Date not recorded
  Cross-platform Rust computer-use MCP server for macOS and Windows combining AX/UIA accessibility trees, screenshots, OCR, and input.
- [NOVA Bilingual Desktop Voice Agent](https://awesomecua.com/resources/github-matinhosseini1-nova-bilingual-voice-agent/) — Date not recorded
  Bilingual Persian-English desktop voice and GUI automation assistant for Windows.
- [NOVA Computer Use](https://awesomecua.com/resources/github-theodorebeaupre-prog-nova-computer-use/) — Date not recorded
  Native, local-first macOS Computer Use runtime for Codex on both Intel and Apple Silicon Macs.
- [NOVA-exe](https://awesomecua.com/resources/github-vincenzo-afk-nova-exe/) — Date not recorded
  Local-first desktop AI agent platform built with TypeScript, Electron, React, and SQLite for permissioned computer control.
- [Numera Browser](https://awesomecua.com/resources/github-kiarosama-numera-browser/) — Date not recorded
  Local-first multi-profile browser manager for isolated testing and agentic web automation.
- [Nuphus](https://awesomecua.com/resources/github-mrpulor-gh-nuphus/) — Date not recorded
  Local-first desktop AI agent platform with real desktop GUI execution and a companion mobile second-screen controller.
- [nuphus-mcp](https://awesomecua.com/resources/github-mrpulor-gh-nuphus-mcp/) — Date not recorded
  Cross-platform desktop automation MCP server for controlling screens, windows, mouse, and keyboard.
- [Nut.js](https://awesomecua.com/resources/github-nut-tree-nut-js/) — Date not recorded
  Desktop automation library for keyboard, mouse, and screen interaction.
- [O-yuan (启原) v3.0](https://awesomecua.com/resources/github-znfr60-o-yuan-agent/) — Date not recorded
  Cross-platform general-purpose agent equipped with 28+ built-in tools, multi-model deliberation, GUI automation, and persistent shell.
- [Oboto](https://awesomecua.com/resources/github-sschepis-oboto/) — Date not recorded
  Oboto is a desktop AI assistant with browser automation, workspace management, and extensible plugin/MCP tool execution.
- [ocaml-cdp](https://awesomecua.com/resources/github-ahrefs-ocaml-cdp/) — Date not recorded
  Typed OCaml client library for the Chrome DevTools Protocol with an asynchronous Lwt driver by Ahrefs.
- [OculiX (SikuliX continuation)](https://awesomecua.com/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [Odin](https://awesomecua.com/resources/github-madanlalit-odin/) — Date not recorded
  Odin is a macOS computer automation agent combining vision LLMs, Accessibility context extraction, and native input control.
- [ODK Shell](https://awesomecua.com/resources/github-osmandkitay-odk-shell/) — Date not recorded
  ODK Shell is an open-source natural-language computer control shell that translates user requests into OS and GUI commands.
- [Offhand](https://awesomecua.com/resources/github-humzakhan-offhand/) — Date not recorded
  Offhand is an offline, accessibility-first desktop agent for macOS and Windows powered by compact local vision-language models.
- [Oh My DSH](https://awesomecua.com/resources/github-secretxuan-oh-my-dsh/) — Date not recorded
  Oh My DSH coordinates multi-agent teams with a shared compare-and-set task graph and native-vision Windows computer-use for DeepSeek Harness.
- [Oh-Matilda](https://awesomecua.com/resources/github-tahsine-oh-matilda/) — Date not recorded
  Oh-Matilda is a Tauri v2 on-device Android AI agent that autonomously opens apps and executes taps, text entry, and scrolling without ADB.
- [Okno Windows Computer Use MCP](https://awesomecua.com/resources/github-vitalcc55-okno/) — Date not recorded
  Windows-native Model Context Protocol runtime for AI agents providing desktop window inspection, OCR, and input control.
- [Omarchy OMCP](https://awesomecua.com/resources/github-btsouth-omarchy-omcp/) — Date not recorded
  Exposes an Omarchy Linux desktop session as a live, watchable Model Context Protocol server for AI agents.
- [omni-computer-use](https://awesomecua.com/resources/github-jason26214-omni-computer-use/) — Date not recorded
  Windows computer-use Model Context Protocol server replicating Claude Desktop's computer-use tool surface.
- [OmOWright](https://awesomecua.com/resources/github-code-yeongyu-omowright/) — Date not recorded
  AI-agent-oriented wrapper around Playwright that exposes the Playwright API shape models already know from pretraining.
- [omp-cua](https://awesomecua.com/resources/github-wolfiesch-omp-cua/) — Date not recorded
  Low-overhead Cua Driver computer-use integration for the Oh My Pi coding agent.
- [one-for-all](https://awesomecua.com/resources/github-elijahumana-one-for-all/) — Date not recorded
  Unified macOS control plane for AI agents spanning browser automation, native desktop apps, terminals, and system hardware.
- [Open Browser Operator (obo)](https://awesomecua.com/resources/github-agenthand-obo/) — Date not recorded
  CLI and Chrome extension for controlling a user's logged-in Chrome browser from terminal and coding agents.
- [Open Browser Use](https://awesomecua.com/resources/github-ifuryst-open-browser-use/) — Date not recorded
  Open Browser Use provides a CLI, daemon, and Chrome extension for controlling a user's live browser session with persistent login state.
- [Open Claudex Computer Use](https://awesomecua.com/resources/github-opencodexlabs-open-codex-computer-use/) — Date not recorded
  Open-source background macOS computer-use MCP server for Claude Code and Codex.
- [Open Codex Record & Replay](https://awesomecua.com/resources/github-hqhq1025-open-codex-record-and-replay/) — Date not recorded
  Clean-room macOS implementation of semantic UI workflow recording and deterministic Accessibility-tree replay with visual template fallback.
- [Open Computer Use](https://awesomecua.com/resources/github-e2b-dev-open-computer-use/) — Date not recorded
  Open Computer Use runs open-source vision-language models inside an E2B Desktop cloud Linux sandbox for autonomous GUI task execution.
- [Open Duet (open-dots)](https://awesomecua.com/resources/github-anil-matcha-open-dots/) — Date not recorded
  Open Duet is a self-hosted multi-agent workspace where named AI coworkers operate isolated sandboxes, browsers, and terminals.
- [Open Frame](https://awesomecua.com/resources/github-off-camber-open-frame/) — Date not recorded
  Deterministic desktop automation engine for AI agents implementing a capture-recognize-act-verify loop.
- [Open Grok Bot](https://awesomecua.com/resources/github-anil-matcha-open-grok-bot/) — Date not recorded
  Local-first AI agent workspace featuring governed computer use, approval gates, and multi-persona orchestration.
- [Open Interface](https://awesomecua.com/resources/github-ambersahdev-open-interface/) — Date not recorded
  Open Interface is a cross-platform desktop application that translates natural-language requests into GUI mouse and keyboard actions via LLMs.
- [Open ZCode Computer Use](https://awesomecua.com/resources/github-hqhq1025-open-zcode-computer-use/) — Date not recorded
  Clean-room implementation of Z.ai ZCode's dual-mode computer-use MCP server combining pixel-coordinate desktop control and native macOS AX tools.
- [open-codex-computer-use](https://awesomecua.com/resources/github-ifuryst-open-codex-computer-use/) — Date not recorded
  open-codex-computer-use is a native Swift MCP server that exposes macOS per-application window capture, accessibility inspection, and input control.
- [open-compute](https://awesomecua.com/resources/github-ellmos-ai-open-compute/) — Date not recorded
  Model-agnostic computer-use core providing a unified agent loop and MCP server across Claude, OpenAI CUA, and local backends.
- [open-cowork](https://awesomecua.com/resources/github-coasty-ai-open-cowork/) — Date not recorded
  open-cowork is an open-source computer-use coworker that operates local desktops, cloud VMs, and browsers with human-in-the-loop approval.
- [OpenAgentFleet](https://awesomecua.com/resources/github-robbyczgw-cla-openagentfleet/) — Date not recorded
  Local-first multi-agent desktop platform with named AI coworkers and a watchable Linux virtual desktop.
- [OpenAgents Web Agent](https://awesomecua.com/resources/component-xlang-ai-openagents-web-agent/) — Date not recorded
  The OpenAgents browser-control component, connecting a Chrome extension to a web agent and local chat platform for navigating sites and completing interface tasks.
- [OpenAI Codex CLI](https://awesomecua.com/resources/github-openai-codex/) — Date not recorded
  OpenAI Codex CLI is a local terminal and desktop coding agent that executes commands and edits files inside OS-enforced sandboxes.
- [OpenAmer Agent](https://awesomecua.com/resources/github-openamer-openamer/) — Date not recorded
  Self-hosted, self-improving AI desktop agent for Windows with native in-process system and UI tools.
- [OpenBerry](https://awesomecua.com/resources/github-painbaba-openberry/) — Date not recorded
  Local agentic web browser for Windows inspired by Strawberry Browser for autonomous goal-driven browsing.
- [OpenBitFun](https://awesomecua.com/resources/github-gcwing-openbitfun/) — Date not recorded
  OpenBitFun is a Rust-powered desktop agent workspace supporting computer-use, browser automation, and multi-mode agent harnesses.
- [OpenClaw](https://awesomecua.com/resources/github-openclaw-openclaw/) — Date not recorded
  OpenClaw is an open-source personal computer-use assistant that executes browser, desktop, terminal, and messaging workflows across local devices.
- [OpenCLI](https://awesomecua.com/resources/github-jackwener-opencli/) — Date not recorded
  OpenCLI converts authenticated websites and Electron apps into deterministic CLI commands and browser-automation skills via a Chrome bridge.
- [OpenCode Browser MCP](https://awesomecua.com/resources/github-hogandong486-opencode-browser-mcp/) — Date not recorded
  Browser Model Context Protocol server for OpenCode supporting Chromium, Firefox, and WebKit automation.
- [opencode-chrome](https://awesomecua.com/resources/github-g10hdz-opencode-chrome/) — Date not recorded
  Chrome extension and MCP bridge giving OpenCode direct browser tab inspection and interaction capabilities.
- [opencode-gui-bridge](https://awesomecua.com/resources/github-yueqi-wang-795-opencode-gui-bridge/) — Date not recorded
  Model Context Protocol bridge giving OpenCode and MCP clients real Windows GUI control via UI Automation and vision.
- [opencode-mobile-use](https://awesomecua.com/resources/github-system1970-opencode-mobile-use/) — Date not recorded
  OpenCode plugin for controlling Android devices with a live phone screen in the TUI sidebar and resilient UI hierarchy dumps.
- [OpenComputer](https://awesomecua.com/resources/github-andykr1k-opencomputer/) — Date not recorded
  OpenComputer is a local-first cross-platform computer-use agent for Linux, Windows, and macOS powered by local vision-language models.
- [OpenControl](https://awesomecua.com/resources/github-joshuaalawrence-opencontrol/) — Date not recorded
  Single-binary ~2MB Rust Model Context Protocol server exposing 54 native Windows desktop control, UI Automation, and screenshot tools.
- [OpenDesk](https://awesomecua.com/resources/github-shopable-ai-opendesk/) — Date not recorded
  OpenDesk is an API-driven desktop automation runtime that lets AI agents control windows, mouse/keyboard, OCR, and files via JavaScript or MCP.
- [OpenDesktop & OpenWorker](https://awesomecua.com/resources/github-chrisschouk-open-desktop/) — Date not recorded
  Cloud desktop infrastructure and container sandbox engine paired with the OpenWorker conversational desktop agent.
- [OpenGUI](https://awesomecua.com/resources/github-core-mate-opengui/) — Date not recorded
  OpenGUI is an Android GUI agent framework that combines screen perception, accessibility trees, and ADB actuation for real-device automation.
- [OpenGUI (Windows Native Service)](https://awesomecua.com/resources/github-lessenings-prog-opengui/) — Date not recorded
  Windows-native .NET 9 desktop automation service exposing sub-millisecond named-pipe IPC and UI Automation perception to LLM agents.
- [OpenHands](https://awesomecua.com/resources/github-openhands-openhands/) — Date not recorded
  OpenHands is an open-source platform for software development and computer-use agents equipped with a sandboxed shell, code editor, and browser.
- [OpenManus](https://awesomecua.com/resources/github-foundationagents-openmanus/) — Date not recorded
  OpenManus is an open-source agent framework that runs tasks from a terminal and integrates browser execution and screenshots through Browser Use.
- [OpenQA](https://awesomecua.com/resources/github-openqa-labs-openqa/) — Date not recorded
  OpenQA is an open-source agentic browser testing harness that executes natural-language test assertions with dynamic selector resolution.
- [OpenTeam](https://awesomecua.com/resources/github-raghavpillai-openteam/) — Date not recorded
  Self-hosted multi-agent platform with persistent memory, browser automation, and computer-use execution.
- [OpenTiny NEXT-SDKs (WebMCP)](https://awesomecua.com/resources/github-opentiny-webmcp-sdk/) — Date not recorded
  OpenTiny NEXT-SDKs implements in-page WebMCP servers, polyfills, and WebSkills so AI agents can invoke web application capabilities directly.
- [OpenWebAgent](https://awesomecua.com/resources/github-thudm-openwebagent/) — Date not recorded
  OpenWebAgent provides a Chrome extension, HTML simplification parser, and backend server for building LLM-driven web browsing agents.
- [Optics Framework](https://awesomecua.com/resources/github-mozarkai-optics-framework/) — Date not recorded
  Optics Framework is a self-healing test automation engine for mobile, web, and TV interfaces with Vision/OCR fallback and an MCP server.
- [orangeofcarl0-sys dsh-computer-use](https://awesomecua.com/resources/github-orangeofcarl0-sys-dsh-computer-use/) — Date not recorded
  Windows desktop computer-use plugin for DeepSeek Harness featuring numbered UI element grounding and background-first input delivery.
- [Orbination AI Desktop Vision & Control](https://awesomecua.com/resources/github-amichail-1-orbination-ai-desktop-vision-control/) — Date not recorded
  Native Windows MCP server combining UI Automation, dark-theme-aware OCR, visual grounding, and mouse/keyboard control.
- [Orbit (orbit-cua)](https://awesomecua.com/resources/github-aadya940-orbit/) — Date not recorded
  Orbit is a Python computer-use framework that combines natural-language screen grounding with composable, typed workflow steps.
- [ORBIT Local AI Agent](https://awesomecua.com/resources/github-mostafa-kermaninia-orbit-local-ai-agent/) — Date not recorded
  Local-first Python voice and desktop automation agent powered by Whisper STT and Ollama/Qwen models.
- [Orbit UI](https://awesomecua.com/resources/github-aadya940-orbit-ui/) — Date not recorded
  Self-hosted visual workflow builder for authoring and running desktop computer-use automation inside Docker containers.
- [Orynn](https://awesomecua.com/resources/github-robomohit-orynn/) — Date not recorded
  Orynn is a Windows desktop agent that controls native applications by UI Automation control names without screenshot loops.
- [OSRS-CV](https://awesomecua.com/resources/github-kaustubhlall-osrs-cv/) — Date not recorded
  Uses YOLOv8 object detection, Tesseract OCR, and human-like Bézier mouse trajectories to automate Old School RuneScape GUI gameplay.
- [Ossabellator Bounded Computer-Use Runtime](https://awesomecua.com/resources/github-ossabellator-computer-use/) — Date not recorded
  Bounded computer-use runtime and semantic browser engine with explicit capability and policy enforcement.
- [OvoBrowser](https://awesomecua.com/resources/github-ovobrowsersupport-ovobrowser/) — Date not recorded
  Source-level Chromium fingerprint browser engineered for anti-detect web automation.
- [Page Agent](https://awesomecua.com/resources/github-alibaba-page-agent/) — Date not recorded
  Page Agent is an in-page JavaScript GUI agent by Alibaba that controls web interfaces from natural language via DOM dehydration.
- [paldom playwright-stealth Skills](https://awesomecua.com/resources/github-paldom-playwright-stealth/) — Date not recorded
  Agent Skills package for stealth browser automation using CloakBrowser and Playwright.
- [PAM Browser](https://awesomecua.com/resources/github-push-in-pam-browser/) — Date not recorded
  Typed Chrome DevTools Protocol client for PHP running on the PAM runtime.
- [Panerelay](https://awesomecua.com/resources/github-f-loat-panerelay/) — Date not recorded
  Browser-authenticated fetch and existing-browser CDP connection bridge for AI agents on Chrome and Edge.
- [PANOPTES Screen MCP Server](https://awesomecua.com/resources/github-yxpil-panoptes/) — Date not recorded
  Streamable HTTP Model Context Protocol server exposing 9 screen capture and mouse/keyboard control tools to AI agents.
- [Parallels CLI Skill for Codex](https://awesomecua.com/resources/github-wieslawsoltes-parallelsskill/) — Date not recorded
  Portable Codex skill for provisioning, snapshotting, and controlling Parallels Desktop virtual machines on macOS.
- [Paseo Chrome Bridge](https://awesomecua.com/resources/github-papag00se-paseo-chrome-bridge/) — Date not recorded
  Local bridge connecting Paseo AI agents to the user's logged-in Chrome browser.
- [PatchBridge Agent](https://awesomecua.com/resources/github-hanhan666666-patchbridge-agent/) — Date not recorded
  Lightweight in-browser AI agent framework that retrofits natural-language automation onto legacy enterprise web portals.
- [PawWork (爪爪 / BrowserKitten)](https://awesomecua.com/resources/github-player-yn-browserkitten/) — Date not recorded
  Selection-first Chrome web agent where users highlight elements on the live page to scope and guide agent actions.
- [PC-Agent-E training and deployment](https://awesomecua.com/resources/github-gair-nlp-pc-agent-e/) — Date not recorded
  Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.
- [pc-screen-control](https://awesomecua.com/resources/github-desteny-dev-pc-screen-control/) — Date not recorded
  Windows Model Context Protocol server that exposes the desktop accessibility tree as structured data rather than screenshots.
- [pcbridge](https://awesomecua.com/resources/github-eymistaken-pcbridge/) — Date not recorded
  Turns a Linux desktop into a Model Context Protocol server for shell execution, window management, and GUI automation.
- [Peekaboo](https://awesomecua.com/resources/github-openclaw-peekaboo/) — Date not recorded
  Peekaboo is a macOS screen-capture, accessibility-element targeting, and GUI automation CLI and MCP server for computer-use agents.
- [Peerframe OpenBot](https://awesomecua.com/resources/github-peerframe-openbot/) — Date not recorded
  Self-hosted cross-platform control plane for managing persistent digital employees with browser and desktop capabilities.
- [Pegoles Agent](https://awesomecua.com/resources/github-zezortdx-pegoles-agent/) — Date not recorded
  Pegoles Agent runs a macOS computer-use controller against an isolated Linux virtual machine with deterministic pre-execution policy checks.
- [Perplexity Toolkit](https://awesomecua.com/resources/github-mfang0126-perplexity-toolkit/) — Date not recorded
  Browser-control toolkit and CLI for automating Perplexity AI deep searches and structured citation extraction.
- [PhantomJS](https://awesomecua.com/resources/github-ariya-phantomjs/) — Date not recorded
  PhantomJS is a scriptable headless WebKit tool for automating web pages, capturing page contents, testing, and monitoring network activity.
- [philosophy79 web-agent](https://awesomecua.com/resources/github-philosophy79-web-agent/) — Date not recorded
  Local-first web and desktop automation toolkit integrating browser control, screen capture, and LLM tool calling.
- [PhoneClaw](https://awesomecua.com/resources/github-kellyvv-phoneclaw/) — Date not recorded
  PhoneClaw turns iOS and Android smartphones into local AI agent runtimes with on-device model inference and native system skills.
- [PhysiClaw](https://awesomecua.com/resources/github-physiclaw-physiclaw/) — Date not recorded
  PhysiClaw uses an overhead camera and a 3-axis capacitive stylus gantry to physically tap and swipe unmodified smartphones.
- [Pi Nodriver Browser](https://awesomecua.com/resources/github-ayasakura-comp-pi-nodriver-browser/) — Date not recorded
  Pi coding-agent browser extension powered by Nodriver, headful Chrome, and Xvfb virtual displays.
- [pi-browser-use](https://awesomecua.com/resources/github-longweekendprojects-pi-browser-use/) — Date not recorded
  Native `pi` coding-agent tool that drives the user's logged-in Arc or Chrome browser over CDP with reusable site primitives.
- [pi-computer-use](https://awesomecua.com/resources/github-injaneity-pi-computer-use/) — Date not recorded
  Pi extension that gives agents tools to find app windows, observe and search visible controls, click, type, scroll and wait for UI changes in desktop software.
- [pi-control-chrome](https://awesomecua.com/resources/github-lyd123qw2008-pi-control-chrome/) — Date not recorded
  Codex-aligned Chrome and Edge browser control extension and bridge for the Pi coding agent.
- [pi-iphone-mirroring](https://awesomecua.com/resources/github-aniruddha-adhikary-pi-iphone-mirroring/) — Date not recorded
  Vision-first iPhone Mirroring control package for the Pi coding agent on macOS.
- [Pi-WM (Wuming Agent Desktop)](https://awesomecua.com/resources/github-333-wg-pi-wm/) — Date not recorded
  Desktop AI agent workspace built on `pi-agent` for local task execution and browser automation.
- [Pilot MCP Chrome Extension](https://awesomecua.com/resources/github-xiachaoxia-glitch-pilot-mcp-extension/) — Date not recorded
  Manifest V3 Chrome extension bridging Claude Code and MCP agents to live browser tabs.
- [Piskie](https://awesomecua.com/resources/github-piskie-dev-piskie/) — Date not recorded
  Desktop AI agent for the real web equipped with a built-in anti-detect fingerprint browser.
- [pixel-forge](https://awesomecua.com/resources/github-sjxbbdb-pixel-forge/) — Date not recorded
  Desktop automation toolkit providing screenshot capture, OCR, pixel-diff change detection, and mouse/keyboard actions for AI agents.
- [planchette](https://awesomecua.com/resources/github-shahriarshm-planchette/) — Date not recorded
  Lets a user point at any desktop application window to grant a coding agent scoped screenshot, click, and keyboard control over it.
- [Playwright](https://awesomecua.com/resources/github-microsoft-playwright/) — Date not recorded
  Browser automation library used as an execution layer by agents.
- [Playwright MCP](https://awesomecua.com/resources/github-microsoft-playwright-mcp/) — Date not recorded
  MCP server that lets LLM clients drive Playwright browsers through structured accessibility snapshots instead of screenshots, with opt-in vision, PDF and devtools capabilities.
- [Playwright MCP Server (ExecuteAutomation)](https://awesomecua.com/resources/github-executeautomation-mcp-playwright/) — Date not recorded
  Community MCP server that gives LLMs Playwright browser automation for interacting with web pages, taking screenshots, generating test code and running JavaScript.
- [playwright-turnstile](https://awesomecua.com/resources/github-circuitsavage-playwright-turnstile/) — Date not recorded
  Playwright integration for resolving Cloudflare Turnstile challenges via token injection during browser automation.
- [Plip OSS](https://awesomecua.com/resources/github-hussainn7-plip-oss/) — Date not recorded
  Open-source macOS notch assistant and runtime for grounded, model-agnostic computer-use agents with verifiable action previews.
- [PocketCode](https://awesomecua.com/resources/github-m1ssbe4r-pocketcode/) — Date not recorded
  On-device Android AI coding and automation agent capable of building and running apps directly on a phone.
- [Pocketwatch](https://awesomecua.com/resources/github-psamme-pocketwatch/) — Date not recorded
  AI beta-testing agent for physical iPhone applications that drives user journeys over macOS iPhone Mirroring.
- [Pointframe](https://awesomecua.com/resources/github-dimitar-radenkov-pointframe/) — Date not recorded
  MCP server and CLI that lets coding agents inspect, drive, and verify native Windows UI applications with signed screenshot evidence.
- [POK-Agent](https://awesomecua.com/resources/github-acekorneya-pok-agent/) — Date not recorded
  POK-Agent is a Windows computer-use agent that pairs a cloud planner with a fast local actor and caches repeated UI workflows as skills.
- [Portal Operator](https://awesomecua.com/resources/github-pwmcgovern-afk-portal-operator/) — Date not recorded
  Autonomous browser agent designed to operate legacy insurance carrier web portals end-to-end in a real browser.
- [PortaMCP](https://awesomecua.com/resources/github-tnlegend-portamcp/) — Date not recorded
  Client-neutral Model Context Protocol server and secure desktop Control Center for Windows automation.
- [Praefectus](https://awesomecua.com/resources/github-tschk-praefectus/) — Date not recorded
  Policy-neutral Rust library and JSON CLI for host-authorized background computer-use execution.
- [PRAXOVELA](https://awesomecua.com/resources/github-axisvela-praxovela-open/) — Date not recorded
  Governable, local-first desktop agent runtime with policy enforcement and auditable execution traces.
- [Prism Browser Community](https://awesomecua.com/resources/github-dfarm6-prism-browser-community/) — Date not recorded
  Local-first open-source multi-profile fingerprint browser built on Chromium and Electron for isolated web automation.
- [Prism-Shadow Travel Agent](https://awesomecua.com/resources/github-prism-shadow-travel-agent/) — Date not recorded
  Open-source travel planning browser agent that searches and compares flights and hotels across live booking websites.
- [PrivateAI for Mac](https://awesomecua.com/resources/github-jacobjiangwei-privateai-for-mac/) — Date not recorded
  Native macOS local AI agent powered by Ollama with system control, file tools, and browser automation.
- [ProBrowser MCP Server](https://awesomecua.com/resources/github-momadhuynh04-probrowser/) — Date not recorded
  Anti-detection real-browser automation Model Context Protocol server for AI agents.
- [ProfileFleet](https://awesomecua.com/resources/github-enginefuture-profilefleet/) — Date not recorded
  Local-first TypeScript orchestration plane for managing persistent fingerprint-browser profiles across AI agents.
- [Project Tendril](https://awesomecua.com/resources/github-gadgethd-project-tendril/) — Date not recorded
  Local-first Chromium browser and web-research runtime for autonomous AI agents.
- [Promptwright](https://awesomecua.com/resources/github-sahajamit-promptwright/) — Date not recorded
  Promptwright is an AI QA desktop agent that drives browsers from plain English or records user clicks into deterministic Playwright tests.
- [PUDA guidriver](https://awesomecua.com/resources/github-pudap-guidriver/) — Date not recorded
  Windows-first edge service for recording, verifying, and deterministically replaying reviewed GUI workflows.
- [PulsarRPA](https://awesomecua.com/resources/github-platonai-pulsarrpa/) — Date not recorded
  PulsarRPA is a browser RPA and web-agent framework combining natural-language commands, XPath/SQL page querying, and stealth browser control.
- [puppeteer-extra](https://awesomecua.com/resources/github-berstend-puppeteer-extra/) — Date not recorded
  A modular plugin framework for Puppeteer, maintained in a monorepo with plugins and related packages.
- [pyagentbrowser](https://awesomecua.com/resources/github-peter-gy-pyagentbrowser/) — Date not recorded
  Typed Python SDK for Vercel's agent-browser engine with before-and-after action evidence capture.
- [PyAutoGUI](https://awesomecua.com/resources/github-asweigart-pyautogui/) — Date not recorded
  Cross-platform Python module for scripted mouse and keyboard control, message boxes and screenshots with on-screen image search, working on the primary monitor under Windows, macOS and Linux.
- [pyautogui_mcp_server](https://awesomecua.com/resources/github-on-panda-pyautogui-mcp-server/) — Date not recorded
  pyautogui_mcp_server is a Streamable HTTP Model Context Protocol server for executing PyAutoGUI desktop automation workflows.
- [PyMCPAutoGUI](https://awesomecua.com/resources/github-ahaufox-pymcpautogui/) — Date not recorded
  PyMCPAutoGUI is a cross-platform MCP server combining PyAutoGUI mouse/keyboard control, window management, and EasyOCR screen text localization.
- [pyside6-mcp](https://awesomecua.com/resources/github-com55-pyside6-mcp/) — Date not recorded
  Playwright-style Model Context Protocol server that lets AI agents inspect, control, and debug Qt/PySide6 desktop GUI applications.
- [Q1X Community Orchestrator](https://awesomecua.com/resources/github-quoralinex-q1x-community-orchestrator/) — Date not recorded
  Provider-neutral, OS-neutral orchestration runtime for long-horizon desktop and browser agent workflows.
- [qdesk](https://awesomecua.com/resources/github-jackwangfeng-qdesk/) — Date not recorded
  qdesk is an open-source AI agent desktop sandbox providing an isolated Linux and Chromium environment controllable over HTTP.
- [Qirabot](https://awesomecua.com/resources/github-qirabot-qirabot/) — Date not recorded
  Qirabot is a pure-vision multimodal GUI automation framework for operating browsers, mobile apps, desktops, and games without DOM selectors.
- [Qoder Browser Connector Enabler](https://awesomecua.com/resources/github-wqzhellohhwy-qoder-browser-connector-enabler/) — Date not recorded
  Enables Qoder's Browser-Use connector mode to attach to and control the user's real Chrome browser.
- [Qontinui](https://awesomecua.com/resources/github-qontinui-qontinui/) — Date not recorded
  Qontinui is a model-based GUI automation framework that represents application screens as state graphs with visual template and OCR matching.
- [Qubicl](https://awesomecua.com/resources/github-eldanring-qubicl/) — Date not recorded
  Provisions isolated local virtual computers so AI agents can operate a private desktop without touching the host session.
- [QUE CORE](https://awesomecua.com/resources/github-qubasehq-que-tools/) — Date not recorded
  QUE CORE is a hybrid Rust and Python runtime exposing 121 consolidated system, window, and GUI control tools for computer-use agents.
- [QuickDesk](https://awesomecua.com/resources/github-barry-ran-quickdesk/) — Date not recorded
  QuickDesk is an AI-native remote desktop client and host with a built-in MCP server for streaming screens and controlling remote computers.
- [Qwen Code](https://awesomecua.com/resources/github-qwenlm-qwen-code/) — Date not recorded
  Qwen Code is an open-source coding agent that supports desktop automation through computer-use tools alongside terminal, editor, web, and chat interfaces.
- [Rapid PC Use](https://awesomecua.com/resources/github-tntcannon5000-rapid-pc-use/) — Date not recorded
  High-speed native Windows desktop control bridge for Codex and ChatGPT desktop.
- [Raystyle Browser Harness](https://awesomecua.com/resources/github-raystyle-browser-harness/) — Date not recorded
  Persistent daemon and CLI exposing 652 Chrome DevTools Protocol methods directly to LLMs for human-agent shared browsing.
- [rdc (Remote Desktop Control for AI Agents)](https://awesomecua.com/resources/github-bscott-rdc/) — Date not recorded
  Remote desktop control CLI and bridge allowing a coding agent to capture screenshots and send mouse/keyboard input to another machine.
- [real-browser-mcp](https://awesomecua.com/resources/github-ofershap-real-browser-mcp/) — Date not recorded
  MCP server and Chrome extension giving coding agents control over an already-open Chrome browser with existing cookies and SSO sessions.
- [Reasonix Computer Use](https://awesomecua.com/resources/github-plocr-reasonix-computer-use/) — Date not recorded
  Cross-platform desktop automation plugin combining native accessibility trees (UIA/AXAPI/AT-SPI2) with EasyOCR visual fallback.
- [recast](https://awesomecua.com/resources/github-yagna-1-recast/) — Date not recorded
  Compiler that converts recorded AI browser-agent execution traces into deterministic, zero-token Playwright test scripts.
- [record-and-replay-skill](https://awesomecua.com/resources/github-ugarchance-record-and-replay-skill/) — Date not recorded
  Agent-agnostic skill that watches a user demonstrate a browser or desktop workflow once and compiles it into a replayable script.
- [Recruit Auto-Reply](https://awesomecua.com/resources/github-kxc7558-recruit-auto-reply/) — Date not recorded
  Local browser-extension agent for recruiting platforms that answers candidate messages from a retrieval knowledge base and escalates unknowns.
- [reflex-computer-use](https://awesomecua.com/resources/github-8itlab-reflex-cu/) — Date not recorded
  reflex-computer-use is an MCP server for macOS and Windows that reads native UI accessibility trees and dispatches low-latency actions.
- [RegionCUA](https://awesomecua.com/resources/github-region-ai-region-cua/) — Date not recorded
  RegionCUA is a local Ollama-powered desktop agent that explores GUI applications and generates documented screenshots, videos, and replay scripts.
- [Renoned dsh-computer-use](https://awesomecua.com/resources/github-renoned-dsh-computer-use/) — Date not recorded
  Capability-aware macOS computer-use plugin for DeepSeek Harness combining Accessibility-first queries with Vision Router fallback.
- [Replay (Teach-by-Demonstration)](https://awesomecua.com/resources/github-misb74-replay/) — Date not recorded
  Converts human screen demonstrations of real desktop and web work into verifiable, repeatable AI agent workflows.
- [Replay AI](https://awesomecua.com/resources/github-bryansbtian-replay-ai/) — Date not recorded
  Discovers UI workflows once using a local LLM and compiles the successful trajectory into a deterministic replay script.
- [Resolvr TypeScript SDK](https://awesomecua.com/resources/github-resolvrlabs-resolvr-typescript/) — Date not recorded
  Official TypeScript SDK for the Resolvr anti-bot challenge-solving API in browser automation pipelines.
- [Resume Autofill Agent](https://awesomecua.com/resources/github-ccc-zach-resume-autofill-agent/) — Date not recorded
  AI browser agent and Chrome extension that parses resumes and autonomously fills complex job-application web forms.
- [Richmack Browser OS](https://awesomecua.com/resources/github-iamrichmack111-richmack-browser/) — Date not recorded
  Keyboard-driven Chromium browser environment with modular workspace panels for developer and agent workflows.
- [Roadmvn linux-computer-use](https://awesomecua.com/resources/github-roadmvn-linux-computer-use/) — Date not recorded
  Linux computer-use Model Context Protocol server for Claude Code, OpenAI Codex, and MCP clients.
- [RobotGo](https://awesomecua.com/resources/github-go-vgo-robotgo/) — Date not recorded
  RobotGo is a native Go cross-platform desktop automation library for controlling the mouse, keyboard, bitmap screen capture, and window handles.
- [RobotJS](https://awesomecua.com/resources/github-octalmage-robotjs/) — Date not recorded
  RobotJS is a native Node.js desktop automation library for controlling the mouse, keyboard, and screen bitmap capture across OS platforms.
- [robotsix-browser](https://awesomecua.com/resources/github-damien-robotsix-robotsix-browser/) — Date not recorded
  Interactive Playwright headless-browser and form-filling HTTP service for AI agents.
- [Rocuronium](https://awesomecua.com/resources/github-kageroumado-rocuronium/) — Date not recorded
  Isolates macOS computer-use agents inside a separate login session while rendering a live visible-agent overlay on the host screen.
- [rotary (rx4)](https://awesomecua.com/resources/github-tschk-rotary/) — Date not recorded
  Rust agent harness engine providing tool loops, session persistence, permission gates, computer-use primitives, and MCP support.
- [rote](https://awesomecua.com/resources/github-bhuvanb3110-rote/) — Date not recorded
  Record-once, replay-many computer-use automation framework for legacy banking and back-office web applications lacking APIs.
- [RPA Desktop Canal Visual](https://awesomecua.com/resources/github-hab99-rpa-desktop-canal-visual/) — Date not recorded
  Closed-loop visual desktop RPA runtime that drives isolated terminal and GUI applications purely from screen captures.
- [RPA for Python](https://awesomecua.com/resources/github-tebelorg-rpa-python/) — Date not recorded
  RPA for Python provides a Python API over TagUI for automating websites, desktop GUI applications via visual OCR, and command-line workflows.
- [RPA-Everything](https://awesomecua.com/resources/github-mingqian94-rpa-everything/) — Date not recorded
  Compiles repeated browser, desktop, Android, and office workflows into reviewed, deterministic RPA skills for AI agents.
- [rs_peekaboo](https://awesomecua.com/resources/github-undivisible-rs-peekaboo/) — Date not recorded
  Rust-native cross-platform computer-use CLI and library for desktop window inspection, screenshots, and input automation.
- [rtrvr CLI & SDK](https://awesomecua.com/resources/github-rtrvr-ai-rtrvr-cli/) — Date not recorded
  CLI and SDK for automating web workflows, scraping pages, and driving cloud or local browsers for AI agents.
- [Ruyi (如意)](https://awesomecua.com/resources/github-icesword0760-ruyi/) — Date not recorded
  Ruyi streams remote Chrome sessions to the user's browser for collaborative human-AI control and compiles actions into self-healing scripts.
- [s1](https://awesomecua.com/resources/github-matthew-eucaristo-s1/) — Date not recorded
  s1 is a voice-first macOS computer-use agent that inspects the Accessibility tree, executes UI actions, and displays an auditable step trail.
- [safari-browser-use](https://awesomecua.com/resources/github-citrolabs-safari-browser-use/) — Date not recorded
  Apple Events-powered Safari 26 browser automation skill for Codex, Claude Code, Copilot, and Cursor without browser extensions.
- [safari-mcp](https://awesomecua.com/resources/github-haneiva1-safari-mcp/) — Date not recorded
  Zero-extension macOS Safari automation MCP server built on Node.js and native AppleScript/JXA.
- [Sandbar](https://awesomecua.com/resources/github-jdrolls-sandbar-public/) — Date not recorded
  Sandbar provisions isolated cloud Ubuntu desktop virtual machines equipped with OpenClaw and VNC streaming for computer-use agents.
- [Scrapeless Playwright Cloud Browser](https://awesomecua.com/resources/github-pedro-scrapeless-scrapeless-playwright/) — Date not recorded
  Connects Playwright scripts and browser agents to the Scrapeless anti-detection cloud Chromium browser over CDP.
- [Screen Intelligence](https://awesomecua.com/resources/github-zacfink-screen-intelligence/) — Date not recorded
  Screen Intelligence is a macOS desktop agent that reads screens with multimodal LLMs and drives mouse and keyboard actions.
- [screen-mcp (Linux Wayland)](https://awesomecua.com/resources/github-88plug-screen-mcp/) — Date not recorded
  Linux Wayland computer-use MCP server for Claude Code and Grok providing screenshot capture, clicking, typing, and scrolling.
- [screen-use](https://awesomecua.com/resources/github-tongriyaotxt-screen-use/) — Date not recorded
  Browser-Use-style framework for the entire desktop that gives AI agents visual screen perception and mouse/keyboard control.
- [ScreenBuddy](https://awesomecua.com/resources/github-nideesh1-screen-buddy/) — Date not recorded
  ScreenBuddy is a native Rust and Tauri macOS desktop client for running bring-your-own-key Claude Computer Use workflows.
- [screencast-desktop](https://awesomecua.com/resources/github-jhamidun-screencast-desktop/) — Date not recorded
  Claude Code plugin where an agent drives a Windows desktop application and records the session as a narrated screencast.
- [ScreenClaw (睇虾)](https://awesomecua.com/resources/github-ginsing1226-screenclaw/) — Date not recorded
  Windows visual GUI automation companion combining percentage-coordinate grid overlays with non-blocking workflow recording and replay.
- [ScreenHand](https://awesomecua.com/resources/github-manushi4-screenhand/) — Date not recorded
  Open-source desktop automation MCP server that drives native macOS and Windows UI elements in ~50ms via OS accessibility APIs.
- [ScreenPilot](https://awesomecua.com/resources/github-droppinganvil-screenpilot/) — Date not recorded
  ScreenPilot is a local computer-use agent designed to run within 8GB of VRAM, combining screenshot planning with mouse and keyboard control.
- [secretxuan dsh-computer-use-win](https://awesomecua.com/resources/github-secretxuan-dsh-computer-use-win/) — Date not recorded
  Windows computer-use bundle for DeepSeek Harness providing desktop screenshots, window management, and input automation.
- [see_the_screen (DSH Windows Desktop Plugin)](https://awesomecua.com/resources/github-jaychouu-see-the-screen/) — Date not recorded
  Windows desktop automation plugin for DeepSeek Harness agents providing screen observation and GUI control.
- [Selenium MCP Server](https://awesomecua.com/resources/github-nayakprashant-selenium-mcp-server/) — Date not recorded
  Python Model Context Protocol server exposing Selenium WebDriver browser navigation, element interaction, and screenshot tools.
- [SeleniumBase](https://awesomecua.com/resources/github-seleniumbase-seleniumbase/) — Date not recorded
  Python browser automation framework for web crawling, end-to-end testing and scraping, with a recorder that generates tests and stealth options.
- [Self-Healing Browser Agent](https://awesomecua.com/resources/github-25andresbernal-self-healing-browser-agent/) — Date not recorded
  Combines Claude planning with Playwright execution and ranked selector fallback to self-heal broken web automation steps.
- [Sentinel Browser QA Harness](https://awesomecua.com/resources/github-we-building-autonomously-sentinel/) — Date not recorded
  Sentinel is a browser-native QA harness where an AI agent drives a real browser like an end user and returns structured test verdicts.
- [SentinelDesk](https://awesomecua.com/resources/github-sentineldesk-desktop/) — Date not recorded
  Collaborative Linux desktop streamed to the browser where humans and AI agents share a workspace.
- [Sessionat](https://awesomecua.com/resources/github-dublyo-sessionat/) — Date not recorded
  Sessionat is an open-source Chromium-based macOS browser with persistent workspaces and native AI agent control hooks.
- [sh7vansh Chrome Bridge](https://awesomecua.com/resources/github-sh7vansh-chrome-bridge/) — Date not recorded
  Persistent Python runtime and Chrome Native Messaging bridge for driving live browser tabs from AI agents.
- [shadow-web](https://awesomecua.com/resources/github-ulinycoin-shadow-web/) — Date not recorded
  Local-first Python SDK for web agents providing Shadow DOM flattening, Action Maps, SchemaSnap extraction, and form filling.
- [Shellby MCP](https://awesomecua.com/resources/github-serbyte-development-shellby-mcp/) — Date not recorded
  Local Model Context Protocol server that turns ChatGPT Web into a local coding and computer-control agent.
- [shortcut-pad-mcp](https://awesomecua.com/resources/github-darkspaz-v1-shortcut-pad-mcp/) — Date not recorded
  Local Model Context Protocol server for listing and launching Windows applications and macros through Shortcut Pad.
- [ShowUI-Aloha](https://awesomecua.com/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [Sidelook](https://awesomecua.com/resources/github-ucsandman-sidelook/) — Date not recorded
  Windows desktop companion agent that observes active application context and executes user-approved UI actions.
- [Sidemates](https://awesomecua.com/resources/github-prisacariurobert-sidemates/) — Date not recorded
  Open-source desktop AI companion that observes active windows and assists with everyday computer tasks.
- [SIH26 Privacy-Preserving Browser Agent](https://awesomecua.com/resources/github-dalwadi-aryan-pranavkumar-sih-26/) — Date not recorded
  Privacy-preserving AI browser agent framework that sanitizes sensitive DOM and screen fields before LLM planning.
- [Sikuli legacy research implementation](https://awesomecua.com/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [siropkin chrome-bridge](https://awesomecua.com/resources/github-siropkin-chrome-bridge/) — Date not recorded
  Browser automation bridge allowing AI agents to operate the user's real, logged-in Chrome browser.
- [slidevim](https://awesomecua.com/resources/github-jaisharmz-slidevim/) — Date not recorded
  Vim-grammar command language and text protocol for driving Google Slides in the browser.
- [SlyBrowser](https://awesomecua.com/resources/github-virtualfanc-slybrowser/) — Date not recorded
  Anti-detect Chromium browser built for agentic web automation and authorized scraping with native humanized input.
- [Smart Pet Agent](https://awesomecua.com/resources/github-realstreetsmartnyc-smart-pet-agent/) — Date not recorded
  Local-first ambient desktop pet agent that observes workspace context and automates routine desktop actions.
- [smart-computer-use](https://awesomecua.com/resources/github-lindoelio-smart-computer-use/) — Date not recorded
  Agent skill for Claude Code, Codex, Cursor, and OpenCode that drives desktop GUIs via a Rust CLI and local vision grounding.
- [Smouj AgentBrowser](https://awesomecua.com/resources/github-smouj-agent-browser/) — Date not recorded
  AI-powered browser automation platform combining a REST API, live web dashboard, and vision-assisted DOM interaction.
- [SoftAuto MCP](https://awesomecua.com/resources/github-guangfubill-crypto-softauto-mcp/) — Date not recorded
  Open-source Windows RPA and Model Context Protocol server providing UI Automation desktop control to AI agents.
- [Solari Voice Agent](https://awesomecua.com/resources/github-muhammad-abdullahghani-solari-voice-agent/) — Date not recorded
  Voice-directed autonomous computer-use agent built on Solari Desktop and LangGraph.
- [solveReCaptcha-Typescript](https://awesomecua.com/resources/github-conghuy113-solverecaptcha-typescript/) — Date not recorded
  TypeScript library and browser automation helper for solving reCAPTCHA challenges in Playwright and Puppeteer pipelines.
- [SoobujMiah LAI (Android Local AI Runtime)](https://awesomecua.com/resources/github-soobujmiah-lai/) — Date not recorded
  On-device local AI and consent-driven Android UI automation runtime with Bangla-first accessibility support.
- [Sorify](https://awesomecua.com/resources/github-rakutentech-sorify/) — Date not recorded
  Rakuten's AI-first browser testing and Playwright automation platform for end-to-end agentic QA.
- [SoulSniper Browser SDK](https://awesomecua.com/resources/github-soulsniper-v2-browser-sdk/) — Date not recorded
  Provider-neutral TypeScript browser automation SDK with automatic session failover and stealth profile support.
- [SpaceO](https://awesomecua.com/resources/github-parthjadhav-spaceo/) — Date not recorded
  Gives AI computer-use agents dedicated virtual macOS displays so they operate real apps without taking over the user's screen or cursor.
- [SpectraBrowser MCP](https://awesomecua.com/resources/github-virajverse-spectra-browser-mcp/) — Date not recorded
  Autonomous real-browser interaction engine and Chrome extension bridge exposing 99 MCP tools to AI agents.
- [SpiderCreator](https://awesomecua.com/resources/github-carlosplanchon-spidercreator/) — Date not recorded
  SpiderCreator records browser interactions and DOM snapshots to automatically synthesize executable Playwright web-scraping spiders with LLMs.
- [Spooky Action](https://awesomecua.com/resources/github-jumpsy-spooky-action/) — Date not recorded
  Focus-free macOS computer-use tool that presses native Accessibility buttons in the background without moving the user's cursor.
- [SREY Voice Assistant](https://awesomecua.com/resources/github-mishrasreyansh86-cloud-srey-voice-assistant/) — Date not recorded
  Python desktop voice assistant for automating local applications, web searches, and system controls.
- [Stealth Browser MCP](https://awesomecua.com/resources/github-vibheksoni-stealth-browser-mcp/) — Date not recorded
  Stealth Browser MCP provides anti-detect Chrome DevTools Protocol automation over MCP for navigating Cloudflare and login-protected websites.
- [Steel Atlas](https://awesomecua.com/resources/github-steel-dev-atlas/) — Date not recorded
  Steel Atlas is an open-web research and browser automation agent built on the Steel cloud browser runtime.
- [STEVE / STEVE-R1 research code](https://awesomecua.com/resources/github-fanbinlu-steve-r1/) — Date not recorded
  Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.
- [StrawManus](https://awesomecua.com/resources/github-painbaba-strawmanus/) — Date not recorded
  Browser-control agent combining Manus's flat 12-tool action architecture with local Chromium automation.
- [sumo1 computer-use-harness](https://awesomecua.com/resources/github-sumo1-computer-use-harness/) — Date not recorded
  CLI-first computer-use harness for macOS providing policy-guarded application observation and actuation across Claude Code, Codex, and MCP.
- [super-computer-use](https://awesomecua.com/resources/github-paperfoot-super-computer-use/) — Date not recorded
  Low-latency macOS computer-use driver (~35ms per action) supporting batched multi-step UI workflows.
- [SuperSelector Studio](https://awesomecua.com/resources/github-pirate-cua-superselector/) — Date not recorded
  Resilient, cacheable fuzzy UI element identifiers and studio for Codex Computer Use recording and replay.
- [Susu Phone Agent](https://awesomecua.com/resources/github-2005selene2005-a11y-susu-phone-agent/) — Date not recorded
  Android device bridge for Claude Code over MCP and Shizuku enabling rootless phone UI automation.
- [Svate](https://awesomecua.com/resources/github-jieao-re-svate/) — Date not recorded
  Svate is an on-device Android UI automation agent combining Accessibility trees, screenshots, pre-action safety checks, and recovery.
- [SwiftAutoGUI](https://awesomecua.com/resources/github-nakaokarei-swiftautogui/) — Date not recorded
  SwiftAutoGUI is a native Swift library for macOS GUI automation providing mouse, keyboard, screenshot, template matching, and AppleScript control.
- [System Automation MCP](https://awesomecua.com/resources/github-aurafriday-system-mcp/) — Date not recorded
  System Automation MCP exposes cross-platform desktop UI inspection, OCR, window management, and mouse/keyboard actions to MCP-compatible agents.
- [TabCtrl](https://awesomecua.com/resources/github-g1at-tabctrl/) — Date not recorded
  Bring-your-own-key multi-model browser agent for Chrome and Edge with per-task tab isolation.
- [Tabro](https://awesomecua.com/resources/github-ohmyskyhigh-tabro/) — Date not recorded
  Open-source Chromium browser automation runtime for AI agents supporting shared authenticated profiles and parallel tab control.
- [Tabtii BrowserMCP](https://awesomecua.com/resources/github-tabtii-browser-mcp/) — Date not recorded
  Zero-dependency Chrome MCP server exposing 35 browser control tools to Claude and MCP clients.
- [TalkAct](https://awesomecua.com/resources/github-19pine-ai-talkact/) — Date not recorded
  TalkAct is a dual-model voice and computer-use agent that conducts real-time spoken dialogue while executing background GUI actions.
- [Talox](https://awesomecua.com/resources/github-avant-iconic-talox/) — Date not recorded
  Talox is a stateful Playwright browser runtime for AI agents with stealth interaction, structured page state, and trace observability.
- [TankWork](https://awesomecua.com/resources/github-agenttankos-tankwork/) — Date not recorded
  TankWork is a desktop agent framework combining OmniParser visual grounding, OCR, and PyAutoGUI actuation.
- [Tarsier-AI](https://awesomecua.com/resources/github-siddzzzz-tarsier/) — Date not recorded
  Tarsier-AI transforms desktop and web accessibility trees into portable semantic snapshots and deterministic action primitives for LLM agents.
- [Taskhomie](https://awesomecua.com/resources/github-suitedaces-computer-agent/) — Date not recorded
  Taskhomie is a local computer-use agent that executes natural-language desktop tasks via screenshots, mouse/keyboard actions, and shell commands.
- [Tauri Dev Screen CLI](https://awesomecua.com/resources/github-johunsang-tauri-dev-screen-cli/) — Date not recorded
  Node.js CLI for AI agents to inspect, screenshot, and control live Tauri desktop application windows during development.
- [Taylor-Bayouth Browser Agent](https://awesomecua.com/resources/github-taylor-bayouth-browser-agent/) — Date not recorded
  Stealth browser agent that controls real Chrome via CDP and OS-level input without injecting page JavaScript.
- [TeachReplay](https://awesomecua.com/resources/github-ottohere-mourn-teachreplay/) — Date not recorded
  TeachReplay is a harness-agnostic teach-by-demonstration engine that records human UI workflows and compiles them into parameterized skills.
- [Tencent BrowserSkill](https://awesomecua.com/resources/github-tencent-browserskill/) — Date not recorded
  CLI and browser extension by Tencent that lets AI agents operate a user's logged-in browser in a non-intrusive workspace.
- [Terminal Computer Use](https://awesomecua.com/resources/github-vivekkartha-terminal-computer-use/) — Date not recorded
  Terminal Computer Use provides shell-based desktop automation skills for managing files, windows, and clipboards without screenshot loops.
- [terminal-use-mcp](https://awesomecua.com/resources/github-hlh2023-terminal-use-mcp/) — Date not recorded
  Model Context Protocol server for interactive terminal computer use, allowing AI agents to operate full-screen TUI applications (`vim`, `htop`, `lazygit`).
- [Terminator](https://awesomecua.com/resources/github-mediar-ai-terminator/) — Date not recorded
  Terminator is an accessibility-first desktop automation SDK and MCP server for controlling Windows, macOS, and Linux GUI applications.
- [TestDriver SDK](https://awesomecua.com/resources/github-testdriverai-testdriverai/) — Date not recorded
  Vitest plugin that spawns ephemeral devices and uses vision-based LLMs to build end-to-end tests of web apps, desktop apps and browser extensions.
- [TestZeus Hercules](https://awesomecua.com/resources/github-test-zeus-ai-testzeus-hercules/) — Date not recorded
  Open-source testing agent that takes Gherkin features and executes them end to end on web applications through Playwright.
- [TEX (tex-browse-use)](https://awesomecua.com/resources/github-hanzmaulwurf-tex-browse-use/) — Date not recorded
  Self-hosted browser-use engine for Claude Code that drives a real browser to operate web apps lacking APIs.
- [THEIA Computer Use](https://awesomecua.com/resources/github-tree-ind-theia-ui-computer-use/) — Date not recorded
  THEIA (The Human Environment Intelligence Aperture) is a visual perception and UI computer-use plugin and framework for AI agents.
- [Third Eye](https://awesomecua.com/resources/github-slastrina-third-eye/) — Date not recorded
  Local macOS computer-use agent with screen perception and verified action execution.
- [ThreeBody6666 DSH Computer Use](https://awesomecua.com/resources/github-threebody6666-dsh-computer-use/) — Date not recorded
  Native Windows computer-use and configurable vision plugin for DeepSeek Harness.
- [Thursday](https://awesomecua.com/resources/github-cgoinglove-thursday/) — Date not recorded
  Thursday is a voice-driven computer assistant that delegates background web-browsing and desktop automation tasks to Playwright sub-agents.
- [tine](https://awesomecua.com/resources/github-smythp-tine/) — Date not recorded
  Command-line interface for AI agents to inspect and drive Linux GNOME Wayland desktops without portal consent dialogs.
- [tinycomputer](https://awesomecua.com/resources/github-tinyhumansai-tinycomputer/) — Date not recorded
  Jev decision-model harness for fast desktop and browser action execution.
- [TinyFish MCP Server](https://awesomecua.com/resources/github-tinyfish-io-tinyfish-mcp-server/) — Date not recorded
  Official TinyFish Model Context Protocol server providing web search, page extraction, and cloud browser automation.
- [TODO for AI Edge](https://awesomecua.com/resources/github-todoforai-edge/) — Date not recorded
  TODO for AI Edge connects a local machine's shell, filesystem, and browser to the TODO for AI agent orchestration platform.
- [TopoClaw](https://awesomecua.com/resources/github-madeagents-topoclaw/) — Date not recorded
  TopoClaw is a topology-aware multi-agent digital assistant with skill verification and sandboxed execution across desktop, web, and mobile.
- [Touchpoint](https://awesomecua.com/resources/github-touchpoint-labs-touchpoint/) — Date not recorded
  Touchpoint is a cross-platform desktop accessibility API and MCP server giving AI agents unified UI inspection and control.
- [Trishula-BrowserAgent](https://awesomecua.com/resources/github-trishulasoftware-trishula-browseragent/) — Date not recorded
  Sovereign, doctrine-gated autonomous web browser agent built on CDP and Browser Use with SOCKS5 proxy isolation.
- [Trope CUA](https://awesomecua.com/resources/github-tropeai-trope-cua/) — Date not recorded
  Trope CUA enables background desktop inspection and GUI operation on Windows and macOS without interrupting foreground user work.
- [Tsaagan](https://awesomecua.com/resources/github-michaelolmos-tsaagan/) — Date not recorded
  Tsaagan is a verify-first browser control framework for AI agents that proves every click and form action succeeded before advancing.
- [Turan AI](https://awesomecua.com/resources/github-aykutkrm67-turan-ai/) — Date not recorded
  Local multi-brain Windows AI desktop agent with visible computer control and verified action execution.
- [TuriX-CUA](https://awesomecua.com/resources/github-turixai-turix-cua/) — Date not recorded
  TuriX-CUA is a multi-agent desktop automation framework for macOS and Windows combining planner, actor, reflector, and memory skills.
- [Twiko](https://awesomecua.com/resources/github-ezocomp118-source-twiko/) — Date not recorded
  Self-hosted platform provisioning dedicated virtual computers with browsers and terminals for autonomous AI teammates.
- [Two-Layer macOS GUI Agent](https://awesomecua.com/resources/github-eauchs-gui-agent/) — Date not recorded
  Two-layer macOS GUI navigation agent that separates VLM screen perception from strategic LLM action planning.
- [UI Act](https://awesomecua.com/resources/github-tobiasnorlund-ui-act/) — Date not recorded
  UI Act is a Linux desktop computer-use agent that operates alongside the user via a dedicated virtual mouse and keyboard cursor.
- [UI Debugger MCP](https://awesomecua.com/resources/github-developerz-ai-ui-debugger-mcp/) — Date not recorded
  Autonomous UI debugging MCP server that drives browsers and desktop apps to detect visual and functional bugs.
- [Ui.Vision RPA](https://awesomecua.com/resources/github-a9t9-rpa/) — Date not recorded
  Ui.Vision combines Selenium-compatible browser commands, visual desktop OCR/template automation, and an MCP server for AI agents.
- [uia-agent](https://awesomecua.com/resources/github-supermarioyl-uia-agent/) — Date not recorded
  uia-agent defines an open-source LLM agent action space that drives legacy Windows desktop applications through the UI Automation tree.
- [uiacli (Windows UI Automation CLI)](https://awesomecua.com/resources/github-amitse-uiacli/) — Date not recorded
  Exposes Windows desktop applications to AI agents via structured UI Automation trees and CLI commands.
- [UIAutomationMcp](https://awesomecua.com/resources/github-trsdn-mcp-server-uiautomation/) — Date not recorded
  Windows UI Automation toolkit providing a CLI, MCP server, and VS Code extension for inspecting and driving native desktop controls.
- [uictl-mac-mcp](https://awesomecua.com/resources/github-byronjones-elsevier-uictl-mac-mcp/) — Date not recorded
  macOS GUI-automation CLI and Model Context Protocol server for coding agents.
- [uictl-win-mcp](https://awesomecua.com/resources/github-byronjones-elsevier-uictl-win-mcp/) — Date not recorded
  Windows .NET/C# GUI-automation CLI and Model Context Protocol server for coding agents.
- [uitars-mcp](https://awesomecua.com/resources/github-sandraschi-uitars-mcp/) — Date not recorded
  uitars-mcp is a Model Context Protocol server that connects vision-language GUI models (such as UI-TARS) to desktop and browser actuation.
- [UltraTerm Computer Use](https://awesomecua.com/resources/github-michael-berardi-ultraterm-computer-use/) — Date not recorded
  Local desktop automation plugin for MCP-capable agents on macOS, Linux, and Windows.
- [UltraWin MCP](https://awesomecua.com/resources/github-jxoesneon-ultrawin-mcp/) — Date not recorded
  Rust Model Context Protocol server for Windows desktop automation providing native UI Automation tree inspection and input control.
- [Unattended Android Automation Toolkit](https://awesomecua.com/resources/github-chuanchihsu1219-unattended-android-automation-toolkit/) — Date not recorded
  Reliability-first building blocks for unattended Android app automation, crash recovery, and UI state collection.
- [Understudy](https://awesomecua.com/resources/github-understudy-ai-understudy/) — Date not recorded
  Understudy observes human desktop and browser demonstrations and compiles them into parameterized, replayable computer-use skills.
- [Undetectable Chromium CDP MCP](https://awesomecua.com/resources/github-undetectable-io-chromium-cdp-mcp/) — Date not recorded
  Model Context Protocol server by Undetectable.io that drives Chrome, Edge, Brave, Opera, and Vivaldi browsers over CDP.
- [undetected-chromedriver](https://awesomecua.com/resources/github-ultrafunkamsterdam-undetected-chromedriver/) — Date not recorded
  undetected-chromedriver is an anti-bot Selenium ChromeDriver patch widely used by web agents to bypass anti-automation fingerprinting.
- [Universal AI Studio (OmniAI Desktop)](https://awesomecua.com/resources/github-osamalvzx-universal-ai-studio/) — Date not recorded
  All-in-one desktop AI studio integrating multi-model LLM chat, computer use, and browser automation.
- [Universal Computer Control MCP](https://awesomecua.com/resources/github-adkdev200-universal-computer-control/) — Date not recorded
  Model Context Protocol server giving AI agents cross-platform screen capture, mouse, keyboard, and window control.
- [Universal Computer Use](https://awesomecua.com/resources/github-nico0713520-universal-computer-use/) — Date not recorded
  Lightweight, model-free Model Context Protocol plugin giving multimodal agents native macOS screen and input control.
- [Universe legacy GUI interaction client](https://awesomecua.com/resources/github-openai-universe/) — Date not recorded
  An archived Gym-compatible client that exposes screen observations and keyboard/mouse actions over VNC for remote application and browser environments, including the historical World of Bits integration.
- [Upsonic (GPT Computer Assistant)](https://awesomecua.com/resources/github-onuratakan-gpt-computer-assistant/) — Date not recorded
  Upsonic (formerly GPT Computer Assistant) is a Python agent framework with MCP support and desktop screen/input automation.
- [UseAgent](https://awesomecua.com/resources/github-useagenthq-useagent/) — Date not recorded
  Open-source cloud and local sandbox platform for running Claude Code, Codex, or OpenCode with a full desktop and browser.
- [vadgr-computer-use](https://awesomecua.com/resources/github-montbrain-vadgr-computer-use/) — Date not recorded
  Three-tier computer-use MCP server combining system shell tools, OS accessibility trees (UIA/AT-SPI/AX), and vision fallback.
- [Valk](https://awesomecua.com/resources/github-ercbot-valk/) — Date not recorded
  Valk is a Python library and observable remote-desktop interface for programmatic mouse, keyboard, and screen control by AI agents.
- [vco (Visual Computer Operate)](https://awesomecua.com/resources/github-lo2589-vco/) — Date not recorded
  Shell-driven visual computer-use toolkit enabling LLMs to inspect and click web pages and desktop screens.
- [Vedanshu7 Operant](https://awesomecua.com/resources/github-vedanshu7-operant/) — Date not recorded
  Discovers how to complete a task in a no-API application once with an LLM and compiles the trace for repeatable execution.
- [Venxuix Dccide](https://awesomecua.com/resources/github-venxuix-dccide-venxuix/) — Date not recorded
  2D/3D agentic operating environment layered above Windows where humans and AI agents co-orchestrate desktop tasks.
- [Vera AI Assistant](https://awesomecua.com/resources/github-alpert-code-veraai-assistant-1-1/) — Date not recorded
  Turkish-speaking Windows desktop voice and GUI automation assistant powered by PySide6 and LLM tool calling.
- [viger1 dsh-pilot](https://awesomecua.com/resources/github-viger1-dsh-pilot/) — Date not recorded
  Permission-governed browser automation plugin for DeepSeek Harness enforced at the CDP boundary.
- [Vigil](https://awesomecua.com/resources/github-bofstudios-vigil/) — Date not recorded
  Native C# Windows desktop AI assistant invoked by voice wake-word or hotkey to execute system and GUI tasks.
- [Vision Browser Agent](https://awesomecua.com/resources/github-zbcs-studiocr-cn-vision-browser-agent/) — Date not recorded
  Pure-vision browser automation framework with built-in local Moondream3 inference, zero DOM dependency, and human-like mouse trajectories.
- [vision-bridge](https://awesomecua.com/resources/github-rusnetru-vision-bridge/) — Date not recorded
  Unified Windows vision and action MCP server for AI agents to inspect desktop windows and dispatch mouse/keyboard events.
- [Vision-MCP](https://awesomecua.com/resources/github-haruhiyuki-vision-mcp/) — Date not recorded
  Desktop application interaction MCP server combining visual UI element detection with mouse and keyboard automation.
- [VisionGrid AI](https://awesomecua.com/resources/github-mohsinjutt62-autoplay-cv-engine-bot/) — Date not recorded
  Computer-vision Android UI automation and heuristic gameplay engine built with OpenCV and ADB.
- [visual-agent](https://awesomecua.com/resources/github-cloudsbeyond-visual-agent/) — Date not recorded
  Protocol-first framework enabling visual-model hosts to safely inspect and operate software GUI interfaces.
- [VNC MCP Server](https://awesomecua.com/resources/github-volkan-m-vnc-mcp-server/) — Date not recorded
  VNC MCP Server exposes remote desktop screenshots, OCR text localization, and mouse/keyboard control over the RFB/VNC protocol to MCP agents.
- [vnc-computer-use CLI](https://awesomecua.com/resources/github-eyhn-vnc/) — Date not recorded
  Command-line interface for computer-use agents to capture screenshots and dispatch mouse and keyboard actions over VNC.
- [vnc-remote-control](https://awesomecua.com/resources/github-bitranox-vnc-remote-control/) — Date not recorded
  Layout-aware VNC/RFB remote-control CLI providing typing, clicking, screenshot capture, and OCR against any VNC server.
- [vnc-use](https://awesomecua.com/resources/github-mayflower-vnc-use/) — Date not recorded
  vnc-use is a LangGraph-based computer-use framework that drives remote desktop environments over VNC with multi-model LLM planners and hitl gates.
- [Voice and Vision System Controller](https://awesomecua.com/resources/github-muhammad-touseef-akhtar-voice-vision-system-controller/) — Date not recorded
  Offline Python desktop automation system combining voice commands with computer-vision screen interaction.
- [Voice Mirror](https://awesomecua.com/resources/github-contextmirror-voice-mirror/) — Date not recorded
  Voice Mirror is a Tauri desktop IDE where voice and multimodal agents inspect, click, and live-edit rendered web applications.
- [VoltageInputMcp](https://awesomecua.com/resources/github-casualkre-voltage-input-mcp/) — Date not recorded
  Two-layer local input engine for MCP where a frontier planning model dispatches high-rate action programs to a local executor.
- [Voqal](https://awesomecua.com/resources/github-voqal-voqal/) — Date not recorded
  Voqal is a voice-first coding assistant plugin for JetBrains IDEs that translates spoken commands into editor actions.
- [voxie](https://awesomecua.com/resources/github-afraidsoul76-voxie/) — Date not recorded
  Voice-driven desktop assistant and automation agent packaged on PyPI for hands-free computer control.
- [Vuser Protocol](https://awesomecua.com/resources/github-openvuser-vuser/) — Date not recorded
  Vuser is an open frontend interaction protocol standardizing browser-use, desktop computer-use, and mobile-use virtual user actions.
- [VZT-Browser](https://awesomecua.com/resources/github-vonzelle-vzt-vzt-browser/) — Date not recorded
  Browser agent exposing MCP, CLI, and REPL interfaces over a real logged-in browser with macOS Keychain credential integration.
- [wangye520 codex-computer-use (Cursor Port)](https://awesomecua.com/resources/github-wangye520-codex-computer-use/) — Date not recorded
  Port of OpenAI Codex's `@oai/sky` Computer Use engine to Cursor for screenshot-driven mouse and keyboard control.
- [wangyong1972 dsh-computer-use-macos](https://awesomecua.com/resources/github-wangyong1972-dsh-computer-use-macos/) — Date not recorded
  Native macOS computer-use plugin for DeepSeek Harness with trusted window targeting and Accessibility integration.
- [wavexis-mcp](https://awesomecua.com/resources/github-mathiaspaulenko-wavexis-mcp/) — Date not recorded
  Pure-Python Model Context Protocol server exposing 220 browser automation tools for Chrome, Edge, and Firefox over CDP and WebDriver BiDi.
- [wayhand-mcp](https://awesomecua.com/resources/github-timlai666-wayhand-mcp/) — Date not recorded
  Local Model Context Protocol server enabling Claude Code and Codex to observe and operate GNOME Wayland desktops.
- [Wayland MCP Server](https://awesomecua.com/resources/github-kurojs-wayland-mcp/) — Date not recorded
  Wayland MCP Server provides screenshot capture, VLM coordinate analysis, and virtual pointer/keyboard input for Linux Wayland desktops.
- [wayland-computer-use](https://awesomecua.com/resources/github-wh0ami3-wayland-computer-use/) — Date not recorded
  Native Wayland desktop control server using XDG RemoteDesktop portal input and PipeWire capture where X11 tools fail.
- [Weavetab MCP](https://awesomecua.com/resources/github-weavetab-mcp/) — Date not recorded
  Open automation engine and MCP server for controlling live web browsers and desktop applications locally.
- [WebBrain](https://awesomecua.com/resources/github-webbrain-one-webbrain/) — Date not recorded
  WebBrain is an open-source AI browser agent extension for Chrome and Firefox that automates multi-step web workflows.
- [WebBridge](https://awesomecua.com/resources/github-kxdds-webbridge/) — Date not recorded
  WebBridge pairs a Chrome extension and local daemon to let coding agents control a user's authenticated Chrome session.
- [WebClaw](https://awesomecua.com/resources/github-kuroko1t-webclaw/) — Date not recorded
  WebClaw is a WebMCP-native browser agent that runs inside the user's live Chrome browser and connects to Claude, Cursor, and OpenClaw.
- [webcli](https://awesomecua.com/resources/github-wz289494-webcli/) — Date not recorded
  Python CLI and Chrome extension bridge allowing humans and AI agents to control live Chrome tabs from the terminal.
- [WebDroid](https://awesomecua.com/resources/github-loyality7-webdroid/) — Date not recorded
  Playwright-shaped browser automation library for driving live Chromium pages inside Android applications.
- [Webhands](https://awesomecua.com/resources/github-agentpostmortem-webhands/) — Date not recorded
  Webhands is a browser computer-use agent that automates seller and logistics web dashboards lacking APIs via Cloudflare Browser Rendering.
- [webmcp-gen](https://awesomecua.com/resources/github-nidhicodes-webmcp-gen/) — Date not recorded
  Automatically generates callable WebMCP tool schemas from live webpages without requiring site-owner instrumentation.
- [WebOperator](https://awesomecua.com/resources/github-kazkozdev-weboperator/) — Date not recorded
  WebOperator is an AI browser agent and MCP server that automates a user's existing Chrome profile through the Chrome DevTools Protocol.
- [Webpage MCP](https://awesomecua.com/resources/github-mcpland-webpage-mcp/) — Date not recorded
  Turns any existing web application into an in-page Model Context Protocol server so AI agents can navigate and invoke DOM actions.
- [WebQA Agent](https://awesomecua.com/resources/github-migoxlab-webqa-agent/) — Date not recorded
  WebQA Agent is an autonomous multimodal web testing agent that audits webpage functionality, performance, and visual UX without test scripts.
- [WieslawSoltes Linux Computer Use for Codex](https://awesomecua.com/resources/github-wieslawsoltes-linuxcomputeruse/) — Date not recorded
  Linux desktop and X11/Wayland GUI control skill for OpenAI Codex.
- [Win32 MCP Server](https://awesomecua.com/resources/github-randynorthrup-win32-mcp-server/) — Date not recorded
  Win32 MCP Server exposes 53 native Windows Win32 and UI Automation tools over the Model Context Protocol for desktop agents.
- [Win:Computer Use MCP](https://awesomecua.com/resources/github-jnx03-windowncomputeruse/) — Date not recorded
  Windows Model Context Protocol server giving MCP clients a dedicated virtual cursor, UI Automation inspection, and desktop control.
- [WinAgent-Lite](https://awesomecua.com/resources/github-zyydi1959-winagent-lite/) — Date not recorded
  WinAgent-Lite is a local vision-driven Windows GUI agent and MCP server with a reproducible desktop evaluation suite.
- [winctl-mcp](https://awesomecua.com/resources/github-shult-winctl-mcp/) — Date not recorded
  Local Model Context Protocol server giving AI agents full control over Windows desktop screens, windows, mouse, and keyboard.
- [Windows Agent Browser (winbrowse)](https://awesomecua.com/resources/github-civitasmass-windows-agent-browser/) — Date not recorded
  Allows Claude Code and Codex running in Windows or WSL2 to drive the user's signed-in Chrome or Edge browser.
- [Windows Computer Use MCP (DXGI + UIA)](https://awesomecua.com/resources/github-betrayzl-windows-computer-use-mcp/) — Date not recorded
  Windows Model Context Protocol server combining DXGI desktop duplication screen capture, UI Automation trees, and human-like input.
- [Windows Local Action Recorder](https://awesomecua.com/resources/github-week833-windows-local-action-recorder/) — Date not recorded
  Windows desktop action recorder and controlled replay tool that packages human UI demonstrations for Codex agents.
- [Windows Sandbox Computer Use Skill](https://awesomecua.com/resources/github-2018wzh-windows-sandbox-computer-use/) — Date not recorded
  Windows-only agent skill for provisioning an isolated Windows Sandbox VM and driving it via visual computer use.
- [windows-computer-use-mcp](https://awesomecua.com/resources/github-sandraschi-windows-computer-use-mcp/) — Date not recorded
  windows-computer-use-mcp provides 22 MCP tools for Windows UI Automation, OCR, mouse/keyboard control, and UAC safety guardrails.
- [windows-computer-use-mcp (Scan-Code & Multi-Monitor)](https://awesomecua.com/resources/github-sshh12-windows-computer-use-mcp/) — Date not recorded
  Windows computer-use MCP server supporting multi-monitor screen capture and hardware scan-code keyboard/mouse injection for desktop and 3D apps.
- [windows-gui-mcp](https://awesomecua.com/resources/github-dcl632-windows-gui-mcp/) — Date not recorded
  Windows GUI automation Model Context Protocol server for AI coding and computer-use agents.
- [Windows-MCP](https://awesomecua.com/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
- [WinMind](https://awesomecua.com/resources/github-jhonpork1233-beep-win-mind/) — Date not recorded
  WinMind is a Windows MCP server that lets AI agents inspect and drive desktop applications through the UI Automation accessibility tree.
- [WinReach MCP](https://awesomecua.com/resources/github-ghoui-winreach-mcp/) — Date not recorded
  Model Context Protocol server giving AI agents remote control over a dedicated Windows machine with PowerShell, screenshots, and UI input.
- [winter40611 Browser Agent](https://awesomecua.com/resources/github-winter40611-browser-agent/) — Date not recorded
  Spring Boot, LangChain4j, and MCP agent backend enabling remote PC and browser automation via WeChat iLink.
- [winuse-mcp](https://awesomecua.com/resources/github-ryanportfolio-winuse-mcp/) — Date not recorded
  Model Context Protocol server enabling Claude and MCP agents to inspect and control Windows desktop applications.
- [WinWright](https://awesomecua.com/resources/github-alegauss-winwright/) — Date not recorded
  Playwright-inspired Windows desktop automation and testing framework that drives native apps and reports verified UI state.
- [wix-editor-mcp](https://awesomecua.com/resources/github-naieum-wix-editor-mcp/) — Date not recorded
  Model Context Protocol server for automating page layout, text, images, and SEO inside the classic Wix Editor.
- [WKAppBot SDK](https://awesomecua.com/resources/github-kiexpert-wkappbot-sdk/) — Date not recorded
  WKAppBot is an open-source Windows Computer Use and AppBot SDK giving AI agents structured UI perception and action execution.
- [Workday Expense & Invoice Assistant (tnehelper)](https://awesomecua.com/resources/github-guoyuqi2002-tnehelper/) — Date not recorded
  Desktop and browser automation agent that reconciles invoice documents against Workday travel-and-expense web portals.
- [Workroom (MLX Computer-Use Agent)](https://awesomecua.com/resources/github-iamibrahimmemon-mlx-llm-workroom/) — Date not recorded
  Workroom is a fully local macOS computer-use agent running an Apple Silicon MLX vision-language model to read screens and execute commands.
- [Worldline](https://awesomecua.com/resources/github-artemyx-datascientist-worldline/) — Date not recorded
  Modular, user-controlled AI browser kernel for structured web parsing, navigation, and workflow automation.
- [Wraith](https://awesomecua.com/resources/github-nightraven-x-wraith/) — Date not recorded
  Windows system-tray utility that blocks physical keyboard and mouse interference while allowing synthetic AI agent input events through.
- [x11-computer-use](https://awesomecua.com/resources/github-ja-plus-x11-computer-use/) — Date not recorded
  x11-computer-use is an Agent Skills package for Linux X11 desktop control using xdotool input injection, ImageMagick screenshots, and AT-SPI trees.
- [xa11y](https://awesomecua.com/resources/github-xa11y-xa11y/) — Date not recorded
  xa11y is a cross-platform desktop accessibility library in Rust, Python, and Node.js for inspecting and driving native apps on macOS, Windows, and Linux.
- [Xiaoshe Agent (小蛇 Agent)](https://awesomecua.com/resources/github-jackygilbert498-debug-xiaoshe-agent/) — Date not recorded
  Local-first desktop agent built on DeepSeek Harness featuring plugin governance, permission approvals, and completion receipts.
- [XiaoShuang (小双桌面女神)](https://awesomecua.com/resources/github-daixin315-xiaoshuang/) — Date not recorded
  Cross-platform desktop AI companion with screen reading, real-time translation, and Hermes-linked app automation.
- [Xiaozhuang DSH](https://awesomecua.com/resources/github-niushuanan-xiaozhuang-dsh/) — Date not recorded
  Plugin-enhanced DeepSeek Harness distribution pre-packaged with desktop computer use and browser automation.
- [Xihe Agent (羲和)](https://awesomecua.com/resources/github-jiugao-yi-xihe-agent/) — Date not recorded
  Single-process tool-calling agent runtime operating across CLI, enterprise chat gateways, desktop GUI, and real browsers.
- [xiyiyiru chrome-mcp (DrissionPage MCP)](https://awesomecua.com/resources/github-xiyiyiru-chrome-mcp/) — Date not recorded
  Model Context Protocol server for browser automation built on DrissionPage.
- [Yad (يد)](https://awesomecua.com/resources/github-holistis-al-yad/) — Date not recorded
  Self-hostable, privacy-first local AI browser automation agent and Chrome extension.
- [Your Browser Agent](https://awesomecua.com/resources/github-rakeshnirzari1-your-browser-agent/) — Date not recorded
  Connects Claude Code, Cursor, and MCP clients to the user's real logged-in Chrome browser.
- [yu-tao-li dsh-computer-use-win](https://awesomecua.com/resources/github-yu-tao-li-dsh-computer-use-win/) — Date not recorded
  Windows computer-use npm package for DeepSeek Harness supporting UI Automation trees, OCR grounding, and background window control.
- [Yurei](https://awesomecua.com/resources/github-memel06-yurei/) — Date not recorded
  Chrome extension and lightweight CLI allowing local AI agents to read and control active browser tabs.
- [Zavora Computer Use MCP](https://awesomecua.com/resources/github-zavora-ai-computer-use-mcp/) — Date not recorded
  Zavora Computer Use MCP is a Rust MCP server and client for discovering desktop applications, inspecting UI controls, and executing actions.
- [zcode-computer-use](https://awesomecua.com/resources/github-sainzs-zcode-computer-use/) — Date not recorded
  macOS computer-control MCP server for ZCode and coding agents combining screenshots, Accessibility trees, and input actions.
- [zen-mcp](https://awesomecua.com/resources/github-sh6drack-zen-mcp/) — Date not recorded
  WebSocket-based Model Context Protocol server exposing 20 browser automation tools for the Zen Browser without Selenium or Playwright.
- [ZennoPoster MCP](https://awesomecua.com/resources/github-zennolab-zennoposter-mcp/) — Date not recorded
  Official Model Context Protocol server connecting Claude and MCP agents to ZennoPoster 7 browser automation workflows.
- [zetakai desktop-mcp](https://awesomecua.com/resources/github-zetakai-desktop-mcp/) — Date not recorded
  Desktop vision and input control Model Context Protocol server for Linux X11 and Wayland sessions.
- [ZetaTron](https://awesomecua.com/resources/github-itsmarcels-zetatron/) — Date not recorded
  Self-directed local-first autonomous agent harness for Windows with desktop and browser execution capabilities.
- [Zhaozuo (照做)](https://awesomecua.com/resources/github-dongsheng123132-zhaozuo/) — Date not recorded
  Demonstration-driven Windows desktop automation framework compatible with the ActionParity protocol for third-party GUI software.
- [Ziweixing (紫微星)](https://awesomecua.com/resources/github-xiaozhe7772222-ziweixing/) — Date not recorded
  Intent-first Android phone automation agent with human-like touch trajectories and screen perception.
- [ZRui-C DSH Computer Use](https://awesomecua.com/resources/github-zrui-c-dsh-computer-use/) — Date not recorded
  Text-first browser and background macOS window control plugin for DeepSeek Harness.
- [zseven-w DSH Browser](https://awesomecua.com/resources/github-zseven-w-dsh-browser/) — Date not recorded
  Headless-first browser automation plugin for DeepSeek Harness.
- [zseven-w DSH Computer](https://awesomecua.com/resources/github-zseven-w-dsh-computer/) — Date not recorded
  Background macOS desktop automation plugin for DeepSeek Harness that observes and controls apps without stealing focus.
- [zuhair-01 chrome-agent-bridge](https://awesomecua.com/resources/github-zuhair-01-chrome-agent-bridge/) — Date not recorded
  Universal Chrome control bridge for OpenCode, Codex, and Claude Code coding agents.

## 学习资源

- [Awesome GPT-6 Astra](https://awesomecua.com/resources/github-archorfight-awesome-gpt-6-astra/) — Date not recorded
  Evidence-linked catalog of computer-use demos, evaluations, and agent workflows with primary source receipts.
- [ComputerUse.Best Expert Skills](https://awesomecua.com/resources/github-sagozen-computeruse-expert-skills/) — Date not recorded
  Open-source collection of computer-use skills, prompt patterns, and professional desktop/web workflows.
