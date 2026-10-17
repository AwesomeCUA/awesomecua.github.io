# 工作流

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/workflow/records.jsonl

## 论文与综述

- [Task-State Governance: A Virtual Machine for Verifiable and Recoverable GUI Agent Execution](https://awesomecua.github.io/resources/arxiv-2610-20100/) — 2026-10-14
  Presents TaskVM, an interface for specifying desired and preserved application state, checking agent actions, and exposing whether changes can be reversed or compensated.
- [CLASHarness: Benchmarking Multi-Agent Conflict in Computer Use via a Controllable and Verifiable Generation Pipeline](https://awesomecua.github.io/resources/arxiv-2610-19128/) — 2026-10-13
  Introduces CLASHarness, generating verifiable computer-use tasks with conflicting agent reports, shared-state constraints, and coordination requirements to evaluate conflict detection and resolution.
- [Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction](https://awesomecua.github.io/resources/arxiv-2610-12984/) — 2026-10-09
  Aligns human screen recordings, input events, and accessibility information to derive reusable workflow skills from desktop demonstrations.
- [TeleTune: Evolving Agent Skills From Offline Telemetry](https://awesomecua.github.io/resources/arxiv-2610-05437/) — 2026-10-04
  Introduces TeleTune, which edits a textual skill library using held-out action prediction on offline software-use logs with missing goals or interleaved tasks. The learned workflows also guide retrieval of demonstrations for subsequent web-agent execution.
- [When to Compile a Computer-Use Agent? Measuring Payback and Making Compilation Decisions for Token Efficiency](https://awesomecua.github.io/resources/arxiv-2610-02932/) — 2026-10-02
  Introduces PACE, a protocol and online decision rule for deciding when repeated GUI procedures are worth compiling into programs. It accounts for failed compilation attempts, measured per-use savings, uncertain reuse, and execution costs under an explicit cumulative budget.
- [Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](https://awesomecua.github.io/resources/arxiv-2609-36927/) — 2026-09-29
  Learns reusable computer-use policies that encode stable workflow logic in programs while delegating grounding and state checks to neural models. Policy iteration executes variants, diagnoses failures, revises the program, and adds verification before state-changing actions.
- [CUA-SWE: When Computer-Use Agents Meet Visual Software Engineering](https://awesomecua.github.io/resources/arxiv-2609-32600/) — 2026-09-26
  Introduces CUA-SWE, a benchmark and execution environment that combines code changes with graphical interaction and visual inspection of running software. Task-specific tests verify repairs and changes whose required information may be available only through the application interface.
- [ERPBench: A State-Grounded Evaluation Paradigm for Computer-Use Agents in Enterprise Software](https://awesomecua.github.io/resources/arxiv-2609-17885/) — 2026-09-15
  ERPBench evaluates screenshot-only agents in enterprise software using database values to check the business records produced by their actions. It pairs these state-based checks with a harness for human approval and analyzes cases where visible completion masks incorrect persisted data.
- [CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design](https://awesomecua.github.io/resources/arxiv-2609-16251/) — 2026-09-14
  CADWorld evaluates screenshot-and-GUI agents on long FreeCAD workflows, from modeling and assembly to manufacturing and simulation. Executable checks inspect saved engineering artifacts for geometry, constraints, construction structure and downstream state.
- [From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-04869/) — 2026-09-04
  An online skill-evolution framework turns GUI interaction traces and evaluator feedback into a versioned library of reusable procedures without updating model parameters. Controlled OSWorld comparisons examine both the benefits of shared procedural memory and its domain-dependent instability under repeated revision.
- [UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations](https://awesomecua.github.io/resources/arxiv-2608-15930/) — 2026-08-16
  Combines environment-grounded training with demonstration-conditioned workflows, and introduces OSWorkerBench for extended office-task evaluation.
- [DSAgentBench: Can Agents Automate End-to-End Data-Science Workflows in Real Computer Environments?](https://awesomecua.github.io/resources/arxiv-2608-10366/) — 2026-08-11
  DSAgentBench evaluates end-to-end data-science workflows spanning analysis, modeling and visualization inside a real desktop environment. Task evaluators check produced analytical and visual artifacts, while the released interface supports screenshot or accessibility observations and GUI actions.
- [Plover: Steering GUI Agents through Plan-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2607-15193/) — 2026-07-16
  Plover exposes GUI-agent plans and replanning as persistent artifacts that users can inspect and edit during execution. Its planner–executor design supports localized correction through plan edits, language guidance and screenshot-grounded interventions, studied through failure repair and workflow scenarios.
- [OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks](https://awesomecua.github.io/resources/arxiv-2606-29537/) — 2026-06-28
  Introduces extended computer-use workflows with realistic artifacts, changing information, hidden state, and partial-progress and safety assessments.
- [MyPCBench: A Benchmark for Personally Intelligent Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-16748/) — 2026-06-15
  MyPCBench tests personal-assistant tasks on a Linux desktop with simulated web applications and data for a single fictional persona. A shared computer-and-shell interface enables evaluation of cross-application workflows that depend on personal context and account-like state.
- [Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields](https://awesomecua.github.io/resources/arxiv-2606-11042/) — 2026-06-09
  Workflow-GYM evaluates long GUI workflows in professional software rather than isolated interface actions. Its analysis examines failures such as omitted stages, accumulated errors and goal drift during specialized end-to-end work.
- [WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces](https://awesomecua.github.io/resources/arxiv-2606-09426/) — 2026-06-08
  WeaveBench requires agents to combine GUI, command-line and code operations within long tasks on an Ubuntu desktop. A trajectory-aware judge checks deliverables and interaction evidence, including shortcut behavior that outcome-only grading can miss.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [From Struggle to Success: Context-Aware Guidance for Screen Reader Users in Computer Use](https://awesomecua.github.io/resources/arxiv-2601-18092/) — 2026-01-26
  Introduces AskEase, an on-demand assistant that combines contextual information to provide screen-reader-friendly computer-use guidance. A study with screen-reader users evaluates task completion and perceived workload while preserving human control of the interaction.
- [EntWorld: A Holistic Environment and Benchmark for Verifiable Enterprise GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-17722/) — 2026-01-25
  Introduces EntWorld, an enterprise GUI benchmark built by deriving task logic from database schemas. Long workflows across enterprise domains are assessed with deterministic SQL-based state checks rather than screenshot similarity alone.
- [ShowUI-Aloha: Human-Taught GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-07181/) — 2026-01-12
  Transforms human screen recordings and input events into annotated demonstrations used by planning and execution components for GUI tasks.
- [Using GUI Agent for Electronic Design Automation](https://awesomecua.github.io/resources/arxiv-2512-11611/) — 2025-12-12
  GUI-EDA collects more than 2,000 screenshot-answer-action pairs from engineers working across five CAD tools and five physical domains. The accompanying benchmark evaluates more than 30 GUI agents on specialized electronic-design workflows.
- [UI-CUBE: Enterprise-Grade Computer Use Agent Benchmarking Beyond Task Accuracy to Operational Reliability](https://awesomecua.github.io/resources/arxiv-2511-17131/) — 2025-11-21
  UI-CUBE evaluates 226 tasks ranging from individual controls to copy-paste and enterprise workflows. Interface variations, multiple resolutions, and application-state validation support diagnosis of operational reliability beyond task accuracy alone.
- [SCUBA: Salesforce Computer Use Benchmark](https://awesomecua.github.io/resources/arxiv-2509-26506/) — 2025-09-30
  SCUBA evaluates enterprise UI navigation and CRM workflows with 300 task instances derived from Salesforce user interviews. Salesforce sandbox execution and milestone-based assessment support comparisons between zero-shot agents and agents given demonstrations.
- [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-06477/) — 2025-09-08
  MAS-Bench evaluates mobile agents that combine GUI actions with APIs, deep links, and reusable scripts. Its 139 tasks across 11 apps test use of 88 predefined shortcuts as well as the ability to generate new reusable workflows.
- [AppAgent-Pro: A Proactive GUI Agent System for Multidomain Information Integration and User Assistance](https://awesomecua.github.io/resources/arxiv-2508-18689/) — 2025-08-26
  Proposes a proactive GUI assistant that gathers information across domains in response to user requests and anticipated information needs.
- [BIMgent: Towards Autonomous Building Modeling via Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2506-07217/) — 2025-06-08
  BIMgent plans software-specific workflows and executes GUI actions for building-information modeling. It evaluates multimodal building design and reconstruction tasks in professional authoring software.
- [macOSWorld: A Multilingual Interactive Benchmark for GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-04135/) — 2025-06-04
  macOSWorld provides 202 interactive tasks across 30 applications, with instructions and operating-system interfaces in five languages. It evaluates GUI agents on macOS workflows and includes a separate subset for deception-attack testing.
- [WorkForceAgent-R1: Incentivizing Reasoning Capability in LLM-based Web Agents via Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-22942/) — 2025-05-28
  Uses rule-based rewards for output structure and action correctness to train reasoning for enterprise web navigation.
- [ScienceBoard: Evaluating Multimodal Autonomous Agents in Realistic Scientific Workflows](https://awesomecua.github.io/resources/arxiv-2505-19897/) — 2025-05-26
  ScienceBoard combines an interactive environment with professional scientific software and 169 human-curated tasks in areas including biochemistry, astronomy, and geoinformatics. It evaluates computer-use agents on visually rich research workflows and analyzes their execution limitations.
- [Towards Enterprise-Ready Computer Using Generalist Agent](https://awesomecua.github.io/resources/arxiv-2503-01861/) — 2025-02-24
  Describes the CUGA enterprise-agent development process, emphasizing iterative evaluation, failure analysis, and refinement on software-task benchmarks.
- [TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://awesomecua.github.io/resources/arxiv-2412-14161/) — 2024-12-18
  Simulates a software-company workplace to evaluate agents on professional tasks involving websites, programs, files, and coworker communication.
- [ScribeAgent: Towards Specialized Web Agents Using Production-Scale Workflow Data](https://awesomecua.github.io/resources/arxiv-2411-15004/) — 2024-11-22
  Studies fine-tuning open language models on production web-workflow traces, including training choices for specialized web agents.
- [Agent Workflow Memory](https://awesomecua.github.io/resources/arxiv-2409-07429/) — 2024-09-11
  Agent Workflow Memory extracts reusable task routines and selectively supplies them to guide later web actions. It studies both offline workflow induction from training examples and online induction from test experience on Mind2Web and WebArena.
- [IDA: Breaking Barriers in No-code UI Automation Through Large Language Models and Human-Centric Design](https://awesomecua.github.io/resources/arxiv-2407-15673/) — 2024-07-22
  IDA helps business users create web UI automation through guided demonstrations, a semantic programming model, and a teaching-oriented interface. A prototype user study examines automation creation with enterprise applications by users without programming backgrounds.
- [Spider2-V: How Far Are Multimodal Agents From Automating Data Science and Engineering Workflows?](https://awesomecua.github.io/resources/arxiv-2407-10956/) — 2024-07-15
  Benchmarks multimodal agents on data-science and engineering workflows involving enterprise applications, code, and GUI operations in real computer environments.
- [WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks](https://awesomecua.github.io/resources/arxiv-2407-05291/) — 2024-07-07
  Defines compositional enterprise workflows to evaluate planning and reasoning, with generation of ground-truth interaction traces.
- [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://awesomecua.github.io/resources/arxiv-2406-13264/) — 2024-06-19
  Introduces WONDERBREAD, a benchmark pairing human WebArena workflow demonstrations with screen recordings, action logs, and written procedures. Six evaluation tasks cover documentation, knowledge transfer, and process improvement beyond end-to-end execution.
- [Prompt2Task: Automating UI Tasks on Smartphones from Textual Prompts](https://awesomecua.github.io/resources/arxiv-2404-02475/) — 2024-04-03
  Prompt2Task converts textual goals or procedures into smartphone UI automation using agents for intent interpretation, external-information handling, and execution. User feedback and accumulated task knowledge support subsequent task generation and operation.
- [WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?](https://awesomecua.github.io/resources/arxiv-2403-07718/) — 2024-03-12
  Introduces enterprise web tasks on ServiceNow and BrowserGym interfaces for evaluating browser-based agents.
- [PPTC-R benchmark: Towards Evaluating the Robustness of Large Language Models for PowerPoint Task Completion](https://awesomecua.github.io/resources/arxiv-2403-03788/) — 2024-03-06
  Benchmarks robustness of API-based PowerPoint completion under sentence-level, semantic, and multilingual instruction perturbations and changes to the available API set.
- [MobileAgent: enhancing mobile control via human-machine interaction and SOP integration](https://awesomecua.github.io/resources/arxiv-2401-04124/) — 2024-01-04
  Combines operating-procedure context with user interaction to guide mobile task automation and handle personalized or sensitive requests.
- [InstructExcel: A Benchmark for Natural Language Instruction in Excel](https://awesomecua.github.io/resources/arxiv-2310-14495/) — 2023-10-23
  Introduces InstructExcel, a benchmark for generating Excel OfficeScripts from natural-language requests, built using scripts recorded from user actions and a collection of existing spreadsheets.
- [SteP: Stacked LLM Policies for Web Actions](https://awesomecua.github.io/resources/arxiv-2310-03720/) — 2023-10-05
  SteP dynamically composes specialized web-action policies through a stack that records the active chain of policy calls. It studies this control structure across WebArena, MiniWoB++, and CRM workflows.
- [Kite: Building Conversational Bots from Mobile Apps](https://awesomecua.github.io/resources/url-901ca855640457dfe2f1/) — 2018-06
  Derives task graphs from demonstrated Android app interactions and layers a conversational question-answer interface over those graphs. The evaluation examines task-model extraction and developer use of the resulting bot templates.
- [Reinforcement Learning on Web Interfaces Using Workflow-Guided Exploration](https://awesomecua.github.io/resources/arxiv-1802-08802/) — 2018-02-24
  Uses workflows extracted from demonstrations to constrain reinforcement-learning exploration for interactive web tasks.
- [Koala: Capture, Share, Automate, Personalize Business Processes on the Web](https://awesomecua.github.io/resources/url-cccd967aa993404d74d0/) — 2007
  Introduces Koala, a collaborative web automation system that records browser interactions as editable pseudo-natural-language scripts. Scripts are shared through a wiki and instantiated with personal or corporate data for reuse by other users.

## 评测基准

- [OSWorld-Human](https://awesomecua.github.io/resources/github-wuklab-osworld-human/) — Date not recorded
  Human reference trajectories and scoring code for measuring the action efficiency of computer-use agents on OSWorld tasks.
- [SaaS-Bench](https://awesomecua.github.io/resources/github-unipat-ai-saas-bench/) — Date not recorded
  Benchmark for agents interacting with SaaS applications.
- [Spider2-V](https://awesomecua.github.io/resources/github-xlang-ai-spider2-v/) — Date not recorded
  Visual agent evaluation on data-science and engineering workflows.
- [TheAgentCompany](https://awesomecua.github.io/resources/github-theagentcompany-theagentcompany/) — Date not recorded
  Self-contained workplace environment for evaluating agents on professional tasks involving websites, files, code, and simulated coworkers.
- [WONDERBREAD](https://awesomecua.github.io/resources/github-hazyresearch-wonderbread/) — Date not recorded
  An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.
- [WorkArena](https://awesomecua.github.io/resources/github-servicenow-workarena/) — Date not recorded
  Browser-based enterprise workflow tasks built around ServiceNow.

## 数据集

- [ScienceBoard evaluation trajectories](https://awesomecua.github.io/resources/url-4784f63cd7117f64a2a3/) — Date not recorded
  Archives of ScienceBoard agent evaluation runs, separated by agent configuration and screenshot, accessibility-tree or set-of-marks observation mode.
- [WorkDemo-350](https://awesomecua.github.io/resources/url-243ab00712ba19cc2089/) — Date not recorded
  Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

## 工程与产业

- [AskUI](https://awesomecua.github.io/resources/url-69d6afe38a9a128ba9f7/) — Date not recorded
  Visual computer interaction and automation platform.
- [BrowserAct](https://awesomecua.github.io/resources/url-7ae2670859e3796e8607/) — Date not recorded
  Managed web scraping platform with reusable browser interaction workflows.
- [Bytebot](https://awesomecua.github.io/resources/github-bytebot-ai-bytebot/) — Date not recorded
  Containerized desktop agent environment and application.
- [ChatGPT Agent](https://awesomecua.github.io/resources/url-b074ccdb2d9ec0277b65/) — Date not recorded
  Hosted agent combining browser interaction, tools, and computer-based tasks.
- [CHOP](https://awesomecua.github.io/resources/github-yuqi-zhou-chop/) — Date not recorded
  Mobile automation framework that uses reusable basis subtasks to constrain and refine planning between user goals and executable actions.
- [Computer Use OOTB](https://awesomecua.github.io/resources/github-showlab-computer-use-ootb/) — Date not recorded
  Computer-use agent execution toolkit.
- [Cua](https://awesomecua.github.io/resources/github-trycua-cua/) — Date not recorded
  Infrastructure and libraries for computer-use agents.
- [Manus](https://awesomecua.github.io/resources/url-d3414794302313051ff0/) — Date not recorded
  General agent platform with browser-based task execution.
- [MobileAgent (Alipay)](https://awesomecua.github.io/resources/github-alipay-mobile-agent/) — Date not recorded
  Mobile-control research implementation combining operating-procedure context with human interaction for personalized task execution.
- [OpenAdapt](https://awesomecua.github.io/resources/github-openadaptai-openadapt/) — Date not recorded
  Tools for learning and automating workflows from desktop demonstrations.
- [Scribe](https://awesomecua.github.io/resources/url-63ef8c7e455951a20281/) — Date not recorded
  Workflow recording and documentation product adjacent to agent data collection.
- [ShowUI-Aloha](https://awesomecua.github.io/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [Simular](https://awesomecua.github.io/resources/url-0bdd6b5ebf2e1f248828/) — Date not recorded
  Computer-use products and research from Simular.
- [Skyvern](https://awesomecua.github.io/resources/github-skyvern-ai-skyvern/) — Date not recorded
  Visual browser workflow automation framework.
- [Skyvern Cloud](https://awesomecua.github.io/resources/url-15ed5fd3cd950d837f98/) — Date not recorded
  Hosted visual browser workflow automation service.
- [Surfkit](https://awesomecua.github.io/resources/github-agentsea-surfkit/) — Date not recorded
  Toolkit for building and deploying computer-use agents.
- [UI-TARS Desktop](https://awesomecua.github.io/resources/github-bytedance-ui-tars-desktop/) — Date not recorded
  Desktop application for running GUI agents.
- [Work2Skill](https://awesomecua.github.io/resources/github-china-qijizhifeng-work2skill/) — Date not recorded
  Collects human GUI demonstrations and inspects multimodal evidence to derive reusable agent workflow skills.
- [Workflow-Guided Exploration research code](https://awesomecua.github.io/resources/github-stanfordnlp-wge/) — Date not recorded
  Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.
