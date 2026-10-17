# Automation

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/automation/records.jsonl

## Papers & surveys

- [Interaction-as-a-Judge](https://awesomecua.github.io/resources/arxiv-2610-17895/) — 2026-10-13
  Uses computer-use agents to interact with generated applications, studying whether interaction improves preference judging, requirement checks, and feedback for application generation.
- [When to Compile a Computer-Use Agent? Measuring Payback and Making Compilation Decisions for Token Efficiency](https://awesomecua.github.io/resources/arxiv-2610-02932/) — 2026-10-02
  Introduces PACE, a protocol and online decision rule for deciding when repeated GUI procedures are worth compiling into programs. It accounts for failed compilation attempts, measured per-use savings, uncertain reuse, and execution costs under an explicit cumulative budget.
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.github.io/resources/arxiv-2610-00948/) — 2026-10-01
  Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights.
- [Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](https://awesomecua.github.io/resources/arxiv-2609-36927/) — 2026-09-29
  Learns reusable computer-use policies that encode stable workflow logic in programs while delegating grounding and state checks to neural models. Policy iteration executes variants, diagnoses failures, revises the program, and adds verification before state-changing actions.
- [PhoneCLI: From App Interfaces to Callable Commands for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2609-35671/) — 2026-09-28
  Introduces PhoneCLI, which explores mobile app interfaces and compiles navigation paths into reusable commands without internal app APIs or instrumentation. At execution time it verifies compiled paths and falls back to a visual agent for open-ended interaction or failed navigation.
- [SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction](https://awesomecua.github.io/resources/arxiv-2609-05511/) — 2026-08-31
  Introduces SCAFFOLD, which extracts executable skills from web trajectories, composes them into a hierarchy, and compresses redundant skills through behavioral checks. It periodically distills skill-guided trajectories into the policy and studies repeated improvement across web benchmarks.
- [UI-Venus-2 Technical Report](https://awesomecua.github.io/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-28480/) — 2026-06-26
  TUA-Bench evaluates terminal-use agents on general digital tasks, including document editing, email, web information seeking and specialist software workflows. Tasks run in real terminals with deterministic setup and execution-based scoring.
- [Beyond the GUI Paradigm: Do Mobile Agents Need the Phone Screen?](https://awesomecua.github.io/resources/arxiv-2606-19388/) — 2026-06-16
  This study compares general coding agents using mobile command-line access with reproducible GUI agents on AndroidWorld and MobileWorld. It also supplies oracle CLI analyses and a separate task suite for operations such as bulk changes, filtering and hidden device state.
- [ComAct: Reframing Professional Software Manipulation via COM-as-Action Paradigm](https://awesomecua.github.io/resources/arxiv-2606-13239/) — 2026-06-11
  ComAct proposes COM program synthesis as an alternative interface for manipulating professional software and introduces ComCADBench with GUI-based comparison agents. ComActor adds a staged training and correction approach, supported by a Windows-container training platform.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.github.io/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents](https://awesomecua.github.io/resources/arxiv-2605-26144/) — 2026-05-22
  VISTA evaluates coding agents that turn design handoffs into working web and Android applications. Its evaluator locates annotated interactive components and probes their behavior, keeping visual localization distinct from functional correctness.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.github.io/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [PlayCoder: Making LLM-Generated GUI Code Playable](https://awesomecua.github.io/resources/arxiv-2604-19742/) — 2026-04-21
  PlayEval measures whether generated GUI applications remain logically playable, using PlayTester to execute task-oriented GUI playthroughs. PlayCoder closes the loop between repository-aware generation, interactive testing and targeted code repair.
- [GPA: Learning GUI Process Automation from Demonstrations](https://awesomecua.github.io/resources/arxiv-2604-01676/) — 2026-04-02
  Presents demonstration-based GUI process replay with Sequential Monte Carlo localization and readiness checks. GPA executes the learned workflow locally and can serve as the GUI execution component of an agent using MCP or CLI tools.
- [WebTestBench: Evaluating Computer-Use Agents towards End-to-End Automated Web Testing](https://awesomecua.github.io/resources/arxiv-2603-25226/) — 2026-03-26
  Introduces WebTestBench for end-to-end website testing, separating checklist generation from defect detection. Its WebTester baseline evaluates test coverage, detection and sustained interaction across web application categories.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.github.io/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [SpecOps: A Fully Automated AI Agent Testing Framework in Real-World GUI Environments](https://awesomecua.github.io/resources/arxiv-2603-10268/) — 2026-03-10
  SpecOps divides testing of GUI-based agents into test generation, environment setup, execution and validation handled by specialist agents. Its evaluation spans five real-world agents, including web applications and browser extensions, and measures execution reliability and bug discovery.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [WebTestPilot: Agentic End-to-End Web Testing against Natural Language Specification by Inferring Oracles with Symbolized GUI Elements](https://awesomecua.github.io/resources/arxiv-2602-11724/) — 2026-02-12
  WebTestPilot turns natural-language requirements into web test steps with inferred preconditions and postconditions over symbolized GUI elements. A benchmark of bug-injected web applications tests whether these context-aware oracles distinguish application defects from agent mistakes.
- [See, Plan, Snap: Evaluating Multimodal GUI Agents in Scratch](https://awesomecua.github.io/resources/arxiv-2602-10814/) — 2026-02-11
  ScratchWorld evaluates program construction through the Scratch interface using fine-grained drag-and-drop actions and a complementary semantic-API mode. Runtime tests assess the resulting programs, allowing analysis of the gap between program reasoning and GUI manipulation.
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.github.io/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.github.io/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.github.io/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [WALT: Web Agents that Learn Tools](https://awesomecua.github.io/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data](https://awesomecua.github.io/resources/arxiv-2509-15221/) — 2025-09-18
  Introduces a cross-platform computer-use dataset and agents trained with a collection pipeline combining automated interaction and human input.
- [You Don't Know Until You Click:Automated GUI Testing for Production-Ready Software Evaluation](https://awesomecua.github.io/resources/arxiv-2508-14104/) — 2025-08-17
  RealDevWorld evaluates generated software repositories with 194 development tasks and AppEvalPilot, an agent judge that operates the resulting GUIs. The evaluation examines functional behavior, visual fidelity, and runtime responses to produce task-specific diagnostic feedback.
- [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.github.io/resources/arxiv-2508-03923/) — 2025-08-05
  CoAct-1 delegates subtasks between a GUI operator and a programmer that executes Python or Bash. Its OSWorld evaluation studies a hybrid action space in which scripts handle suitable file and data operations while visual interaction handles other steps.
- [OS-MAP: How Far Can Computer-Using Agents Go in Breadth and Depth?](https://awesomecua.github.io/resources/arxiv-2507-19132/) — 2025-07-25
  OS-MAP organizes 416 computer-use tasks across 15 applications by a five-level automation taxonomy and a hierarchy of user demands. The benchmark separates required autonomy from generalization scope to diagnose where agents struggle as task demands increase.
- [LiteCUA: Computer as MCP Server for Computer-Use Agent on AIOS](https://awesomecua.github.io/resources/arxiv-2505-18829/) — 2025-05-24
  AIOS 1.0 exposes computer states and actions through an MCP server to provide structured environmental context for agents. LiteCUA is a lightweight agent built on this interface, evaluated on OSWorld to study the effect of computer-environment contextualization.
- [UFO2: The Desktop AgentOS](https://awesomecua.github.io/resources/arxiv-2504-14603/) — 2025-04-20
  Introduces UFO2, a Windows desktop agent architecture combining a coordinating HostAgent, application-specialized agents, and a shared GUI/API action layer. It integrates UI Automation, visual parsing, speculative planning, and an isolated picture-in-picture desktop.
- [VLM-Fuzz: Vision Language Model Assisted Recursive Depth-first Search Exploration for Effective UI Testing of Android Apps](https://awesomecua.github.io/resources/arxiv-2504-11675/) — 2025-04-16
  VLM-Fuzz combines depth-first UI exploration with Android manifest analysis, runtime widget hierarchies, and on-demand visual reasoning to generate app test inputs. It evaluates coverage on 59 benchmark apps and uses additional Google Play apps to study crash discovery.
- [ReuseDroid: A VLM-empowered Android UI Test Migrator Boosted by Active Feedback](https://awesomecua.github.io/resources/arxiv-2504-02357/) — 2025-04-03
  ReuseDroid migrates Android GUI tests between functionally similar apps using VLM agents that separate shared test intent from app-specific interaction flows. It introduces LinPro, a dataset of 578 migration tasks across 39 apps, to evaluate test transfer.
- [Are Autonomous Web Agents Good Testers?](https://awesomecua.github.io/resources/arxiv-2504-01495/) — 2025-04-02
  Adapts web agents to execute natural-language test steps, verify assertions, and issue test verdicts. The study introduces 113 passing and failing test cases across three offline web applications and compares two agent implementations with qualitative failure analysis.
- [API Agents vs. GUI Agents: Divergence and Convergence](https://awesomecua.github.io/resources/arxiv-2503-11069/) — 2025-03-14
  Compares API-driven and GUI-driven agents across architecture, development, and interaction considerations, discussing when hybrid approaches are useful.
- [Towards Enterprise-Ready Computer Using Generalist Agent](https://awesomecua.github.io/resources/arxiv-2503-01861/) — 2025-02-24
  Describes the CUGA enterprise-agent development process, emphasizing iterative evaluation, failure analysis, and refinement on software-task benchmarks.
- [Programming with Pixels: Can Computer-Use Agents do Software Engineering?](https://awesomecua.github.io/resources/arxiv-2502-18525/) — 2025-02-24
  Introduces a visual IDE environment and benchmark for software-engineering tasks, comparing screenshot-based control with access to editing and shell tools.
- [GUI Testing Arena: A Unified Benchmark for Advancing Autonomous GUI Testing Agent](https://awesomecua.github.io/resources/arxiv-2412-18426/) — 2024-12-24
  Evaluates GUI testing through test-intent generation, execution, and defect detection using real, modified, and synthetic mobile application data.
- [Large Action Models: From Inception to Implementation](https://awesomecua.github.io/resources/arxiv-2412-10047/) — 2024-12-13
  Uses a Windows-agent case study to describe a development workflow for large action models, covering data collection, training, grounding, environment integration, and evaluation.
- [The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use](https://awesomecua.github.io/resources/arxiv-2411-10323/) — 2024-11-15
  Presents a preliminary study of Claude 3.5 Computer Use across desktop tasks and software, analyzing planning, action, and critique behavior and providing a framework for deploying GUI-automation models.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.github.io/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [AgentStore: Scalable Integration of Heterogeneous Agents As Specialized Generalist Computer Assistant](https://awesomecua.github.io/resources/arxiv-2410-18603/) — 2024-10-24
  Introduces a platform that integrates specialized agents under a coordinating MetaAgent for varied computer tasks.
- [AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://awesomecua.github.io/resources/arxiv-2409-17140/) — 2024-09-25
  Introduces AXIS, an API-first application agent that can use UI actions and expand its available APIs through automated application exploration. The work evaluates the approach on Microsoft Word tasks.
- [Steward: Natural Language Web Automation](https://awesomecua.github.io/resources/arxiv-2409-15441/) — 2024-09-23
  Introduces Steward, a natural-language browser automation system that repeatedly plans and executes website actions. The paper examines completion detection, state representation, responsiveness, and caching in real-site tasks.
- [NaviQAte: Functionality-Guided Web Application Navigation](https://awesomecua.github.io/resources/arxiv-2409-10741/) — 2024-09-16
  Frames web-application exploration as functionality-oriented question answering, generating navigation actions from multimodal context.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.github.io/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [IDA: Breaking Barriers in No-code UI Automation Through Large Language Models and Human-Centric Design](https://awesomecua.github.io/resources/arxiv-2407-15673/) — 2024-07-22
  IDA helps business users create web UI automation through guided demonstrations, a semantic programming model, and a teaching-oriented interface. A prototype user study examines automation creation with enterprise applications by users without programming backgrounds.
- [AUITestAgent: Automatic Requirements Oriented GUI Function Testing](https://awesomecua.github.io/resources/arxiv-2407-09018/) — 2024-07-12
  Automates mobile GUI tests from natural-language requirements, combining action generation with verification based on interaction traces.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.github.io/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [Large Language Models for Mobile GUI Text Input Generation: An Empirical Study](https://awesomecua.github.io/resources/arxiv-2404-08948/) — 2024-04-13
  Studies language-model generation of mobile text inputs, comparing UI representations, execution feedback, and human assistance for app testing.
- [Enhancing Mobile "How-to" Queries with Automated Search Results Verification and Reranking](https://awesomecua.github.io/resources/arxiv-2404-08860/) — 2024-04-13
  Executes instructions from mobile how-to search results inside a controlled Android environment, then uses the observed success of those instructions to verify and rerank technical-support results.
- [ScreenAgent: A Vision Language Model-driven Computer Control Agent](https://awesomecua.github.io/resources/arxiv-2402-07945/) — 2024-02-09
  Combines a screenshot-and-action dataset with a planning, acting, and reflecting loop for computer control through mouse and keyboard actions.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.github.io/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [InstructExcel: A Benchmark for Natural Language Instruction in Excel](https://awesomecua.github.io/resources/arxiv-2310-14495/) — 2023-10-23
  Introduces InstructExcel, a benchmark for generating Excel OfficeScripts from natural-language requests, built using scripts recorded from user actions and a collection of existing spreadsheets.
- [DroidBot-GPT: GPT-powered UI Automation for Android](https://awesomecua.github.io/resources/arxiv-2304-07061/) — 2023-04-14
  Transforms Android UI states and available actions into language prompts for an LLM to choose and execute task steps.
- [A data-driven approach for learning to control computers](https://awesomecua.github.io/resources/arxiv-2202-08137/) — 2022-02-16
  Combines reinforcement learning with behavioral priors from human interactions to learn computer control through keyboard and mouse actions.
- [Rousillon: Scraping Distributed Hierarchical Web Data](https://awesomecua.github.io/resources/url-97c0b1896525632434e2/) — 2018
  Introduces Rousillon, which generalizes a demonstration of collecting one hierarchical data row into a browser-automation program that traverses related pages. The paper develops relation-selection and generalization methods and evaluates users building such scripts.
- [GUI Testing Using Computer Vision](https://awesomecua.github.io/resources/url-6262c757080f8838e62c/) — 2010-04
  Presents visual GUI test scripts that use images to specify actions and expected screen feedback. Recording both input events and screenshots can generate tests from demonstrations, supporting unit, regression, and test-driven workflows.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.github.io/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.
- [Eager: Programming Repetitive Tasks by Example](https://awesomecua.github.io/resources/url-bf0c11018e49dff6aeec/) — 1991
  Describes Eager, which detects repeated HyperCard interactions, generalizes them into loops, and previews predicted actions by highlighting interface objects. Users can then ask it to execute the inferred repetitive task.

## Models

- [ShowUI-π](https://awesomecua.github.io/resources/github-showlab-showui-pi/) — Date not recorded
  Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.

## Engineering & industry

- [agent-browser](https://awesomecua.github.io/resources/github-vercel-labs-agent-browser/) — Date not recorded
  A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.
- [AndroidEnv](https://awesomecua.github.io/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [Appium](https://awesomecua.github.io/resources/github-appium-appium/) — Date not recorded
  Cross-platform UI automation infrastructure.
- [AUITestAgent](https://awesomecua.github.io/resources/github-bz-lab-auitestagent/) — Date not recorded
  Generates mobile GUI interactions from natural-language test requirements and checks application behavior against those requirements.
- [Chrome DevTools MCP](https://awesomecua.github.io/resources/github-chromedevtools-chrome-devtools-mcp/) — Date not recorded
  MCP tools for browser control and inspection through Chrome DevTools.
- [COLA demo](https://awesomecua.github.io/resources/github-alokia-cola-demo/) — Date not recorded
  Research demonstration of collaborative Windows GUI automation with dynamic task scheduling and recovery mechanisms.
- [GUI-HARVEST](https://awesomecua.github.io/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [Lumen browser agent](https://awesomecua.github.io/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [Midscene.js](https://awesomecua.github.io/resources/github-web-infra-dev-midscene/) — Date not recorded
  Visual automation toolkit for web, mobile, and desktop interfaces.
- [Mobile Harness](https://awesomecua.github.io/resources/github-droidrun-mobile-harness/) — Date not recorded
  Portable agent instructions and integration tooling for local or cloud phone control through mobilerun-core.
- [Mobile Next MCP](https://awesomecua.github.io/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Nanobrowser](https://awesomecua.github.io/resources/github-nanobrowser-nanobrowser/) — Date not recorded
  A browser-extension agent that reads pages, interacts with elements and moves between tabs from a side-panel task interface.
- [Nut.js](https://awesomecua.github.io/resources/github-nut-tree-nut-js/) — Date not recorded
  Desktop automation library for keyboard, mouse, and screen interaction.
- [OculiX (SikuliX continuation)](https://awesomecua.github.io/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [OpenAgents Web Agent](https://awesomecua.github.io/resources/component-xlang-ai-openagents-web-agent/) — Date not recorded
  The OpenAgents browser-control component, connecting a Chrome extension to a web agent and local chat platform for navigating sites and completing interface tasks.
- [Playwright](https://awesomecua.github.io/resources/github-microsoft-playwright/) — Date not recorded
  Browser automation library used as an execution layer by agents.
- [Playwright MCP](https://awesomecua.github.io/resources/github-microsoft-playwright-mcp/) — Date not recorded
  MCP server exposing browser interaction tools for agents.
- [PyAutoGUI](https://awesomecua.github.io/resources/github-asweigart-pyautogui/) — Date not recorded
  Mouse, keyboard, and screenshot automation library.
- [ShowUI-Aloha](https://awesomecua.github.io/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [Sikuli legacy research implementation](https://awesomecua.github.io/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [STEVE / STEVE-R1 research code](https://awesomecua.github.io/resources/github-fanbinlu-steve-r1/) — Date not recorded
  Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.
- [Universe legacy GUI interaction client](https://awesomecua.github.io/resources/github-openai-universe/) — Date not recorded
  An archived Gym-compatible client that exposes screen observations and keyboard/mouse actions over VNC for remote application and browser environments, including the historical World of Bits integration.
- [Windows-MCP](https://awesomecua.github.io/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
