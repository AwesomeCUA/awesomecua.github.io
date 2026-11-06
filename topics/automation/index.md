# Automation

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.com/downloads/topics/automation/records.jsonl

## Papers & surveys

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
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.com/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [Training Computer Use Agents to Assess the Usability of Graphical User Interfaces](https://awesomecua.com/resources/arxiv-2604-26020/) — 2026-04-28
  uxCUA learns to assess interface usability by choosing interaction flows, executing them and predicting a numerical usability score. Training uses interactive UIs with usability labels and human preferences, with evaluations on synthetic and real interfaces.
- [PlayCoder: Making LLM-Generated GUI Code Playable](https://awesomecua.com/resources/arxiv-2604-19742/) — 2026-04-21
  PlayEval measures whether generated GUI applications remain logically playable, using PlayTester to execute task-oriented GUI playthroughs. PlayCoder closes the loop between repository-aware generation, interactive testing and targeted code repair.
- [WebXSkill: Skill Learning for Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2604-13318/) — 2026-04-14
  WebXSkill pairs parameterized action programs with step-level language guidance, mining reusable skills from synthetic browser-agent traces. A URL-based graph supports retrieval, and deployment alternates between direct program execution and guided native planning.
- [GPA: Learning GUI Process Automation from Demonstrations](https://awesomecua.com/resources/arxiv-2604-01676/) — 2026-04-02
  Presents demonstration-based GUI process replay with Sequential Monte Carlo localization and readiness checks. GPA executes the learned workflow locally and can serve as the GUI execution component of an agent using MCP or CLI tools.
- [WebTestBench: Evaluating Computer-Use Agents towards End-to-End Automated Web Testing](https://awesomecua.com/resources/arxiv-2603-25226/) — 2026-03-26
  Introduces WebTestBench for end-to-end website testing, separating checklist generation from defect detection. Its WebTester baseline evaluates test coverage, detection and sustained interaction across web application categories.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.com/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
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
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.com/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.com/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.com/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [GAIR: GUI Automation via Information-Joint Reasoning and Group Reflection](https://awesomecua.com/resources/arxiv-2512-09396/) — 2025-12-10
  Introduces GAIR, which combines information from specialized GUI models through a general-purpose coordinating model. When the available information is insufficient, group reflection sends targeted requests back to the specialists before selecting an operation.
- [In-Browser LLM-Guided Fuzzing for Real-Time Prompt Injection Testing in Agentic AI Browsers](https://awesomecua.com/resources/arxiv-2510-13543/) — 2025-10-15
  Proposes an in-browser fuzzing framework that uses language-model guidance to test indirect prompt-injection vulnerabilities in agentic browsers. The work focuses on unwanted actions triggered by webpage instructions under the browser agent's user privileges.
- [From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents](https://awesomecua.com/resources/arxiv-2510-04607/) — 2025-10-06
  Introduces a Declarative Model Interface that maps existing GUIs to access, state and observation primitives while handling low-level interactions. Evaluation uses Word, PowerPoint and Excel on Windows with a GUI-agent baseline.
- [WALT: Web Agents that Learn Tools](https://awesomecua.com/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data](https://awesomecua.com/resources/arxiv-2509-15221/) — 2025-09-18
  Introduces a cross-platform computer-use dataset and agents trained with a collection pipeline combining automated interaction and human input.
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

## Models

- [ShowUI-π](https://awesomecua.com/resources/github-showlab-showui-pi/) — Date not recorded
  Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.

## Engineering & industry

- [agent-browser](https://awesomecua.com/resources/github-vercel-labs-agent-browser/) — Date not recorded
  A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.
- [AgentSynth task-generation pipeline](https://awesomecua.com/resources/github-sunblaze-ucb-agentsynth/) — Date not recorded
  Generates synthetic computer-use tasks and records trajectories in OSWorld desktop environments and InSTA browser environments.
- [Amazon Nova Act](https://awesomecua.com/resources/url-dec156cbf0cb1181f7b6/) — Date not recorded
  AWS service for building and deploying agents that automate browser-based UI workflows from natural language and Python, powered by a custom Nova 2 Lite model.
- [AndroidEnv](https://awesomecua.com/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [Appium](https://awesomecua.com/resources/github-appium-appium/) — Date not recorded
  Open-source WebDriver-based automation server for mobile, desktop and IoT apps, extended by per-platform drivers for iOS, Android, macOS and Windows, plugins, and clients in Java, Python, Ruby and C#.
- [ARPO training framework](https://awesomecua.com/resources/github-jia-lab-research-arpo/) — Date not recorded
  Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.
- [AUITestAgent](https://awesomecua.com/resources/github-bz-lab-auitestagent/) — Date not recorded
  Generates mobile GUI interactions from natural-language test requirements and checks application behavior against those requirements.
- [Chrome DevTools MCP](https://awesomecua.com/resources/github-chromedevtools-chrome-devtools-mcp/) — Date not recorded
  MCP tools for browser control and inspection through Chrome DevTools.
- [COLA demo](https://awesomecua.com/resources/github-alokia-cola-demo/) — Date not recorded
  Research demonstration of collaborative Windows GUI automation with dynamic task scheduling and recovery mechanisms.
- [GUI-HARVEST](https://awesomecua.com/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [Lumen browser agent](https://awesomecua.com/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [Midscene.js](https://awesomecua.com/resources/github-web-infra-dev-midscene/) — Date not recorded
  Visual automation toolkit for web, mobile, and desktop interfaces.
- [Mobile Harness](https://awesomecua.com/resources/github-droidrun-mobile-harness/) — Date not recorded
  Portable agent instructions and integration tooling for local or cloud phone control through mobilerun-core.
- [Mobile Next MCP](https://awesomecua.com/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Nanobrowser](https://awesomecua.com/resources/github-nanobrowser-nanobrowser/) — Date not recorded
  A browser-extension agent that reads pages, interacts with elements and moves between tabs from a side-panel task interface.
- [Nut.js](https://awesomecua.com/resources/github-nut-tree-nut-js/) — Date not recorded
  Desktop automation library for keyboard, mouse, and screen interaction.
- [OculiX (SikuliX continuation)](https://awesomecua.com/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [OpenAgents Web Agent](https://awesomecua.com/resources/component-xlang-ai-openagents-web-agent/) — Date not recorded
  The OpenAgents browser-control component, connecting a Chrome extension to a web agent and local chat platform for navigating sites and completing interface tasks.
- [PC-Agent-E training and deployment](https://awesomecua.com/resources/github-gair-nlp-pc-agent-e/) — Date not recorded
  Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.
- [Playwright](https://awesomecua.com/resources/github-microsoft-playwright/) — Date not recorded
  Browser automation library used as an execution layer by agents.
- [Playwright MCP](https://awesomecua.com/resources/github-microsoft-playwright-mcp/) — Date not recorded
  MCP server that lets LLM clients drive Playwright browsers through structured accessibility snapshots instead of screenshots, with opt-in vision, PDF and devtools capabilities.
- [PyAutoGUI](https://awesomecua.com/resources/github-asweigart-pyautogui/) — Date not recorded
  Cross-platform Python module for scripted mouse and keyboard control, message boxes and screenshots with on-screen image search, working on the primary monitor under Windows, macOS and Linux.
- [ShowUI-Aloha](https://awesomecua.com/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [Sikuli legacy research implementation](https://awesomecua.com/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [STEVE / STEVE-R1 research code](https://awesomecua.com/resources/github-fanbinlu-steve-r1/) — Date not recorded
  Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.
- [Universe legacy GUI interaction client](https://awesomecua.com/resources/github-openai-universe/) — Date not recorded
  An archived Gym-compatible client that exposes screen observations and keyboard/mouse actions over VNC for remote application and browser environments, including the historical World of Bits integration.
- [Windows-MCP](https://awesomecua.com/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
