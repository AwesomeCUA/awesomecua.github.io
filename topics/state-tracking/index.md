---
title: "State tracking — computer-use research | AwesomeCUA"
url: https://awesomecua.com/topics/state-tracking/
updated: 2026-11-10
type: topic
lang: en
---

# State tracking

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/state-tracking/records.jsonl

## Papers & surveys

- [Coati: Host-Grounded Execution for Installable Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2611-02644/) — 2026-11-02
  Introduces Coati, an installable Android GUI agent that checks action outcomes with phone-side evidence, stores per-app procedures, and routes simpler steps to a fast executor.
- [Hybrid Computer Use: A Unified Programmatic, Semantic, and Visual Interface for General Agents](https://awesomecua.com/resources/arxiv-2610-41432/) — 2026-10-30
  Introduces Hybrid Computer Use (HCU), a desktop agent interface combining code, accessibility data, and GUI actions, with AX diffs reporting action effects.
- [DynaRev: Benchmarking Web Agents under Dynamic Goal Revision](https://awesomecua.com/resources/arxiv-2610-40133/) — 2026-10-29
  Introduces DynaRev, a benchmark of 181 web-agent tasks whose goals change during execution, with trajectory-based measures of correctness, responsiveness, and efficiency.
- [What Does "Now" Mean to Your Computer-Use Agent? Stale Screenshots, Page Loads, and Which Check to Run Before a Click](https://awesomecua.com/resources/arxiv-2610-39282/) — 2026-10-29
  Studies clicks made from stale screenshots on web pages and provides a benchmark generator and pre-click checks for pages that change during loading.
- [From Interaction to Capability: Task Advancement as State and Supervision for GUI Agents](https://awesomecua.com/resources/arxiv-2610-37482/) — 2026-10-27
  Introduces Task Advancement Memory (TAM) for long GUI workflows, tracking task progress across applications and learning reusable operations from interactions with local results.
- [Correct Answers, Closed Gates: SolveBind for GUI Agents at the Verification Barrier](https://awesomecua.com/resources/arxiv-2610-32223/) — 2026-10-23
  Introduces SolveBind, a GUI-agent framework that decomposes verification tasks and uses runtime evidence to guide interactions with protected websites and applications.
- [HiSTEVE 1.0: Harnessing Human-Interface VLA Agents for Open-World Games](https://awesomecua.com/resources/arxiv-2610-31162/) — 2026-10-22
  HiSTEVE uses a hierarchical planner and a vision-only keyboard-and-mouse controller for Minecraft tasks that include GUI and non-GUI interactions.
- [Diagnosing Personalization Failures in Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2610-30573/) — 2026-10-22
  PrefDiag-Bench diagnoses when and how user preferences should affect sequential mobile GUI agent actions, using staged probes and user context.
- [Understanding Tool-Mediated Interaction Failures in Agentic GUI Software: An Empirical Study](https://awesomecua.com/resources/arxiv-2610-31698/) — 2026-10-21
  Malva catalogs failures that make GUI agents' tool-mediated view diverge from the live interface; MalvaGuard checks related tool contracts before deployment.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [LongPuzzleBench: Evaluating GUI Agents on Long-Horizon Visual Puzzles](https://awesomecua.com/resources/arxiv-2609-34769/) — 2026-09-28
  LongPuzzleBench evaluates coherent long-horizon planning on persistent visual puzzle boards through native GUI actions. It compares GUI-only and code-assisted agents and uses controlled hints and memory diagnostics to examine decisions that preserve or eliminate future solutions.
- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.com/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.com/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://awesomecua.com/resources/arxiv-2609-35814/) — 2026-09-20
  BreakingWeb pairs solvable browser tasks with controlled environment interventions that preserve the goal, target and backend success criterion. The paired evaluations isolate robustness failures, including agents declaring completion without the required state change.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.com/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](https://awesomecua.com/resources/arxiv-2609-10451/) — 2026-09-09
  JarvisGUI composes typed input-output task transformations into dynamic workflows spanning Android, Windows and Ubuntu devices. Its virtual-environment benchmark tests transfer of intermediate results, shared state and cross-device dependencies.
- [LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents](https://awesomecua.com/resources/arxiv-2608-25777/) — 2026-08-26
  Introduces LocalLSTC, a training-free control architecture that maintains persistent task state and uses it to form short execution commitments. Outcomes feed back into that state for progress checks, recovery, and termination in locally deployed desktop agents.
- [Benchmarking General Mobile Assistants in Challenging Real-World Scenarios](https://awesomecua.com/resources/arxiv-2608-27477/) — 2026-08-21
  Introduces GMA, a benchmark of 300 mobile-assistant tasks across seven applications, and studies how agent context retention and state tracking affect complex workflows.
- [Automated Trajectory Evaluation for Mobile Agents via Step-Level Consequence Reasoning and Aggregation](https://awesomecua.com/resources/arxiv-2608-20797/) — 2026-08-21
  Introduces CRATE, a step-level visual judge for mobile-agent trajectories, and CRATE-S for assessing operational safety from action-conditioned state changes.
- [StateM: Reaching 95.3% Raw Accuracy, or a \$15 Frontier Run, on Terminal-Bench 2.1 via Harness Scaling](https://awesomecua.com/resources/arxiv-2608-15089/) — 2026-08-15
  Introduces StateM, a stateful runtime with checked transitions and reusable runbooks for long-horizon agents; its reported evaluations use terminal and business tasks.
- [SynWeaver: Website-Prior Task and Trajectory Co-Synthesis for Web Agents](https://awesomecua.com/resources/arxiv-2608-12429/) — 2026-08-12
  SynWeaver explores a website to build a map of page states and executable interactions, then learns website priors for task proposals. Joint task/trajectory synthesis revises inconsistent pairs and verifies or repairs the resulting supervision.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [FocusMem: Factorizing Content, Readout, and Trust in Latent GUI Memory](https://awesomecua.com/resources/arxiv-2608-04530/) — 2026-08-05
  Introduces FocusMem, a latent memory interface for GUI agents that separates stored content, state-conditioned readout, and a gate for irrelevant retrieved experience.
- [LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks](https://awesomecua.com/resources/arxiv-2608-01964/) — 2026-08-03
  Introduces LongHorizon-Harness, which maintains verified task state outside an agent's execution context and audits subtasks; its evaluations include OSWorld~2.0.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.com/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.com/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.com/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [DocOps: A Verifiable Benchmark for Autonomous Agents in Complex Document Operations](https://awesomecua.com/resources/arxiv-2607-19865/) — 2026-07-22
  Introduces DocOps, a verifiable benchmark for agents handling complex digital-document workflows, with analysis of state tracking, semantic checks, and structural edits.
- [StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure](https://awesomecua.com/resources/arxiv-2607-11388/) — 2026-07-13
  StructAgent maintains compact task state and regulates long-horizon execution through verified transitions and progress checkpoints. Its workflow supports evidence-based completion and targeted recovery, with desktop computer-use evaluation and a separate Minecraft extension.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.com/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [A Task-State Representation for Long-Horizon Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2607-00502/) — 2026-07-01
  Introduces TSR, a training-free wrapper for long-horizon mobile GUI agents that tracks instructions, subgoal progress, and action outcomes separately from screen observations.
- [What Memory Do GUI Agents Really Need? From Passive Records to Active Task-Driving States](https://awesomecua.com/resources/arxiv-2606-31612/) — 2026-06-30
  Proposes ATMem, an updated execution-state memory for long mobile GUI tasks, and STR-GRPO to train selective memory use; also introduces a mobile task benchmark.
- [VisCritic: Visual State Comparison as Process Reward for GUI Agents](https://awesomecua.com/resources/arxiv-2606-24525/) — 2026-06-23
  VisCritic compares before/after screenshots through change-aware visual features and an action-conditioned critic. Weakly supervised samples from existing traces train judgments of action success, progress and error type for GUI-agent verification.
- [ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks](https://awesomecua.com/resources/arxiv-2606-21654/) — 2026-06-19
  ChainWorld composes compatible atomic OSWorld tasks into multi-objective desktop chains while preserving their evaluators. It compares giving the full sequence at once with revealing goals turn by turn, exposing different state and session-management failures.
- [OctoNest: Adaptive Cross-Device Execution through Stateful Control](https://awesomecua.com/resources/arxiv-2606-20487/) — 2026-06-18
  Introduces OctoNest, which coordinates device agents, revises task assignments from execution feedback, and switches local interaction modalities; CAPEBench evaluates cross-device tasks.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.com/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [Multi-Agent Computer Use](https://awesomecua.com/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.com/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [ChartAct: A Benchmark for Dynamic Chart Understanding](https://awesomecua.com/resources/arxiv-2605-26994/) — 2026-05-26
  ChartAct benchmarks multimodal models and GUI agents on interactive charts from websites, requiring actions such as hovering or zooming to answer questions.
- [ScreenSearch: Uncertainty-Aware OS Exploration](https://awesomecua.com/resources/arxiv-2605-16024/) — 2026-05-15
  ScreenSearch explores desktop GUI states by indexing and deduplicating UIA-tree screens, then using outcome ambiguity and frontier rewards to guide graph search.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.com/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.com/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [FineState-Bench: Benchmarking State-Conditioned Grounding for Fine-grained GUI State Setting](https://awesomecua.com/resources/arxiv-2604-27974/) — 2026-04-30
  FineState-Bench tests whether GUI agents locate the intended control and set its exact state across desktop, web, and mobile interfaces, with stage-wise diagnostic metrics.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.com/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [Benchmarking and Improving GUI Agents in High-Dynamic Environments](https://awesomecua.com/resources/arxiv-2604-25380/) — 2026-04-28
  Introduces DynamicGUIBench for applications whose interfaces change between actions, together with DynamicUI, an agent that processes screen recordings. The agent selects informative frames, filters inconsistent action reasoning and uses trajectory reflection for subsequent decisions.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.com/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks on Computer-Use Agents](https://awesomecua.com/resources/arxiv-2604-18860/) — 2026-04-20
  This study examines UI changes between a desktop agent’s screenshot observation and action dispatch. Its pre-execution state checks address overlay and focus manipulation, while the reported DOM-injection blind spot limits the defense’s coverage.
- [AJ-Bench: Benchmarking Agent-as-a-Judge for Environment-Aware Evaluation](https://awesomecua.com/resources/arxiv-2604-18240/) — 2026-04-20
  AJ-Bench evaluates judge agents that actively gather evidence from search, data systems and graphical interfaces. Its annotated tasks and trajectories test information acquisition, state verification and process verification.
- [Where Did It Go Wrong? Process-Level Evaluation of Web Agents with Semantic State Tracking](https://awesomecua.com/resources/arxiv-2606-15673/) — 2026-04-08
  Introduces WebStep, a web-agent benchmark that records semantic states behind GUI interactions to analyze exploration, execution accuracy, and decisive errors across task steps.
- [WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks](https://awesomecua.com/resources/arxiv-2604-06367/) — 2026-04-07
  WebSP-Eval evaluates agents carrying out website security and privacy tasks such as preference changes and session management. A browser extension controls account and initial state across runs, enabling analysis of failures on stateful UI controls.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.com/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [GUIDE: Interpretable GUI Agent Evaluation via Hierarchical Diagnosis](https://awesomecua.com/resources/arxiv-2604-04399/) — 2026-04-06
  GUIDE evaluates GUI trajectories by segmenting them into subtasks, diagnosing each segment, and aggregating structured findings into a task verdict. It tests diagnostic judgments on e-commerce, web-agent and Android-control traces.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.com/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [Atomicity for Agents: Exposing, Exploiting, and Mitigating TOCTOU Vulnerabilities in Browser-Use Agents](https://awesomecua.com/resources/arxiv-2603-00476/) — 2026-02-28
  Identifies time-of-check to time-of-use (TOCTOU) race vulnerabilities when web pages mutate between agent planning and action execution.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.com/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [Do Multi-Agents Dream of Electric Screens? Achieving Perfect Accuracy on AndroidWorld Through Task Decomposition](https://awesomecua.com/resources/arxiv-2602-07787/) — 2026-02-08
  Minitap coordinates six specialized agents for AndroidWorld tasks, checking text input against device state and detecting action loops to revise its strategy.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.com/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.com/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.com/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [GUI Knowledge Bench: Revealing the Knowledge Gap of VLMs in GUI Tasks](https://awesomecua.com/resources/arxiv-2510-26098/) — 2025-10-30
  GUI Knowledge Bench tests knowledge of widgets, interactions, and procedures across six named platforms and 292 applications to assess VLMs used for GUI tasks.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.com/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.com/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [State Your Intention to Steer Your Attention: An AI Assistant for Intentional Digital Living](https://awesomecua.com/resources/arxiv-2510-14513/) — 2025-10-16
  Introduces an assistant that reads screenshots, application titles, and URLs to compare computer activity with a user's stated intention and send notifications when it diverges.
- [ReUseIt: Synthesizing Reusable AI Agent Workflows for Web Automation](https://awesomecua.com/resources/arxiv-2510-14308/) — 2025-10-16
  Introduces ReUseIt, which synthesizes reusable web-agent workflows from successful and failed attempts and adds guards to detect and fix execution errors.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.com/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [Instruction Agent: Enhancing Agent with Expert Demonstration](https://awesomecua.com/resources/arxiv-2509-07098/) — 2025-09-08
  Introduces Instruction Agent, a GUI agent that follows instructions extracted from one expert demonstration and uses verification and backtracking to handle interruptions.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.com/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [ResTest: Targeted Coverage of Residual Not-Covered Code Using Large Language Models for Web GUI Testing](https://awesomecua.com/resources/arxiv-2506-00520/) — 2025-05-31
  Introduces ResTest, which uses coverage reports and a state transition graph to infer untested web functions, then directs a GUI agent to execute them.
- [CAD-Assistant: Tool-Augmented VLLMs as Generic CAD Task Solvers](https://awesomecua.com/resources/arxiv-2412-13810/) — 2024-12-18
  CAD-Assistant plans CAD tasks and executes actions through FreeCAD's Python API, using the changing design state to guide later commands.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.com/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.com/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [Guardian: A Runtime Framework for LLM-Based UI Exploration](https://awesomecua.com/resources/url-7424d66754ec26d68d83/) — 2024-09-11
  Guardian guides LLM-driven mobile app testing by narrowing available UI actions and replanning after invalidated actions; it is evaluated on 58 tasks from 23 apps.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.com/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.com/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs in a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [Latent State Estimation Helps UI Agents to Reason](https://awesomecua.com/resources/arxiv-2405-11120/) — 2024-05-17
  Studies explicit textual estimates of latent UI state, including whether commanded actions occurred and how far a task has progressed. The experiments compare agents that reason with these estimates against agents that omit them across public and internal task benchmarks.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.com/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.
- [Automating GUI-based Software Testing with GPT-3](https://awesomecua.com/resources/url-412c168dd5d0aeded46a/) — 2023-04
  A GPT-3-based GUI testing method interprets natural-language test cases, tracks current interface elements in prompts, and navigates desktop and mobile applications.

## Benchmarks

- [Action Check WebMCP](https://awesomecua.com/resources/github-ajaknumber4-action-check-webmcp/) — Date not recorded
  External state-verification benchmark testing whether WebMCP browser tools actually produced their claimed DOM and backend effects.
- [DynamicGUIBench](https://awesomecua.com/resources/url-20fa95f00391bf965af2/) — Date not recorded
  Desktop benchmark of 500 OSWorld-style tasks whose interfaces change between observations through scripted pop-ups, timed edits and shifting lists, with bilingual instructions and end-state evaluators.
- [ExactDelta (ActionProof)](https://awesomecua.com/resources/github-tsuchiyatakahirolab-actionproof/) — Date not recorded
  Post-action state-delta verification harness for WebMCP browser agents that detects silent UI and state failures.
- [FineState-Bench](https://awesomecua.com/resources/github-fengxianji-finestate-bench/) — Date not recorded
  A GUI benchmark for precise state changes across desktop, web, and mobile interfaces, with 2,257 tasks and metrics separating element location from interaction success.
- [GameWorld Games](https://awesomecua.com/resources/github-gameworld-project-gameworld-games/) — Date not recorded
  GameWorld Games supplies browser-game snapshots for agent evaluation, each with an API for initialization, reset and game-state inspection.
- [Graph-Guided Agentic Testing](https://awesomecua.com/resources/github-avikundal-graph-guided-agentic-testing/) — Date not recorded
  Uses a browser agent to explore web checkout flows into a Neo4j state graph and synthesizes graph-guided end-to-end tests.
- [Preflight-Bench](https://awesomecua.com/resources/github-multimodal-ai-engineering-preflight-bench/) — Date not recorded
  Preflight-Bench evaluates pre-click staleness checks and page-load synchronization for computer-use agents operating under asynchronous UI updates.
- [WebReplayBench](https://awesomecua.com/resources/github-mahirlabibdihan-webreplaybench/) — Date not recorded
  A web agent benchmark with a local shop site, BrowserGym tasks, and database audit records for measuring task completion and repeated writes during backtracking.

## Datasets

- [Preflight Bench](https://awesomecua.com/resources/url-a40fc87ac700add33232/) — Date not recorded
  A dataset of paired screenshots, click outcomes and checker answers for evaluating pre-click checks on changing web pages. It includes Lance tables and development and test splits.
- [Static-FineBench](https://awesomecua.com/resources/url-94adc54bf1cd168da768/) — Date not recorded
  Data for FineState-Bench, a fine-grained GUI state-control benchmark: desktop, web and mobile screenshots with XML and JSON annotations of locate and interact instructions and separate localization and interaction boxes.

## Models

- [DeskMind Brain](https://awesomecua.com/resources/github-deskmind-ai-brain/) — Date not recorded
  DeskMind Brain provides local models that choose the next macOS desktop action and return probabilities for typed decisions about targets and task completion.
- [gWorld-32B](https://awesomecua.com/resources/url-e44096836ef47bc66d9c/) — Date not recorded
  A released mobile GUI world model that takes a screenshot and an action, then predicts the next interface as renderable HTML. The card identifies Qwen3-VL-32B as its base.
- [HobbyLM-1B Computer Use](https://awesomecua.com/resources/url-12470a40c8f82ef0294a/) — Date not recorded
  An on-device LoRA adapter that turns English requests and Mac state into single actions executed by a companion app, with training code and evaluation records.
- [jiamingzz/lgwm](https://awesomecua.com/resources/url-512cd7335068b2c17859/) — Date not recorded
  Released weights for a GUI world model that predicts a screen representation after an action and checks the observed transition, with a separate harm scoring head.
- [OTA-v1](https://awesomecua.com/resources/url-404c719910f8f4a37149/) — Date not recorded
  OTA-v1 is a fine-tuned browser-agent checkpoint designed to plan browser actions, use tools and maintain context across multi-step web tasks.
- [S1-Accurate-LoRA](https://awesomecua.com/resources/url-d34be9d27efef6c1b37a/) — Date not recorded
  A LoRA adapter for a desktop agent's decision model uses window screenshots to select an operation and target element from candidate actions when a faster model is uncertain.
- [S1-Fast](https://awesomecua.com/resources/url-51fd7f79dff766278d83/) — Date not recorded
  S1-Fast predicts desktop actions, target elements and step status from a Windows UI Automation snapshot and visual tokens in one encoder pass.

## Engineering & industry

- [Actell](https://awesomecua.com/resources/github-ja1chen-actell/) — Date not recorded
  An iPhone agent prototype observes screenshots or accessibility content and issues taps and drags through CoreDevice, using a VPN loopback or optional hardware relay.
- [action-receipt](https://awesomecua.com/resources/github-jeremiahm37-action-receipt/) — Date not recorded
  Generates deterministic per-action DOM and network effect receipts for auditing browser-agent executions.
- [Active Desktop Context Engine](https://awesomecua.com/resources/github-amirf147-active-desktop-context-engine/) — Date not recorded
  Zero-cloud Windows OS perception layer and Model Context Protocol server streaming real-time desktop UI context to AI agents.
- [AgentProg](https://awesomecua.com/resources/github-mobilellm-agentprog/) — Date not recorded
  Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.
- [AGI-0 Agent](https://awesomecua.com/resources/url-06f6618d8f95f3d041cf/) — Date not recorded
  AGI-0 uses screenshots to navigate Android apps, planning subtasks and checking screen changes after each action. Its publisher reports AndroidWorld results.
- [AH64-dll Browser Automation Toolkit](https://awesomecua.com/resources/github-ah64-dll-browser-automation-toolkit/) — Date not recorded
  Suite of five Python CDP utilities including a page watcher, form filler, table scraper, DOM change differ, and health checker.
- [Anionex DSH Computer Use](https://awesomecua.com/resources/github-anionex-dsh-computer-use/) — Date not recorded
  macOS computer-use plugin for DeepSeek Harness featuring fresh Accessibility observations, stale-state rejection, and scoped permissions.
- [ARC CUA](https://awesomecua.com/resources/github-itw-code-arc-cua/) — Date not recorded
  Browser harness that gives an agent a token-budgeted accessibility tree with indexed actions and checks each action for state change, plus a document-to-form pipeline and an MCP server.
- [Astra plays GTA Vice City](https://awesomecua.com/resources/github-da03-astra-plays-gta/) — Date not recorded
  A macOS helper and prompt let a desktop agent control GTA Vice City through screenshots and short input steps, pausing the game while it decides what to do next.
- [AXTree API](https://awesomecua.com/resources/github-amaar-mc-axtree-api/) — Date not recorded
  Event-driven macOS Accessibility tree streaming server and action bridge for computer-use agents.
- [Brobot](https://awesomecua.com/resources/github-jspinak-brobot/) — Date not recorded
  Brobot is a Java visual automation framework that recognizes interface elements and models application states to navigate, perform actions and recover from errors.
- [Browser Agent (uiuing)](https://awesomecua.com/resources/github-uiuing-browser-agent/) — Date not recorded
  Chrome side-panel agent whose page engine reads a whole-page semantic DOM snapshot, re-grounds targets by element fingerprints, dispatches DOM events and checks post-conditions before reporting success.
- [browser-action-receipt](https://awesomecua.com/resources/github-scalar-atelier-browser-action-receipt/) — Date not recorded
  Verification protocol that binds human approval to target DOM state, aborting clicks and emitting a receipt if the page mutates.
- [Caster User Directory](https://awesomecua.com/resources/github-amirf147-caster-user-directory-and-notes/) — Date not recorded
  Caster User Directory combines Windows voice automation with window switching and accessibility-based tracking of focused desktop context.
- [catia-v5-mcp](https://awesomecua.com/resources/github-astroqueststudio-catia-v5-mcp/) — Date not recorded
  An MCP server lets agents model and inspect parts and assemblies in CATIA V5 through COM. It provides validated batch actions and checks of resulting geometry and component poses.
- [ChatGPT WebUI Bridge](https://awesomecua.com/resources/github-olmatter-chatgpt-bridge/) — Date not recorded
  A local HTTP bridge lets agents send messages to logged-in ChatGPT browser tabs, read replies and page state, and supervise idle tabs through a userscript.
- [ChimeraX-SessionStates](https://awesomecua.com/resources/github-shiinahiiragi-chimerax-states/) — Date not recorded
  ChimeraX plugin used by ScienceBoard to expose internal molecular-visualization session state for deterministic benchmark evaluation.
- [chrome-agent](https://awesomecua.com/resources/github-sderosiaux-chrome-agent/) — Date not recorded
  chrome-agent is a Rust CLI for browser agents to inspect pages, act through Chrome and check resulting state. It also records and replays local command sequences.
- [Code2World](https://awesomecua.com/resources/github-amap-ml-code2world/) — Date not recorded
  Code2World provides code for predicting the next Android GUI screen from a screenshot and proposed action through renderable code, with an AndroidWorld agent integration.
- [computer-use-mcp](https://awesomecua.com/resources/github-minghinmatthewlam-computer-use-mcp/) — Date not recorded
  A Swift MCP server that lets agents inspect and operate macOS applications. Its shared engine manages accessibility, screen capture, and input delivery.
- [Crimson-Heart](https://awesomecua.com/resources/github-yeyvhaiou-crimson-heart/) — Date not recorded
  Persistent multimodal desktop agent with explicit runtime state management, priority-aware scheduling, and interruptible execution.
- [Domstamp](https://awesomecua.com/resources/github-zuub-don-domstamp/) — Date not recorded
  Framework-neutral browser-state snapshotter capturing compact, diffable DOM and accessibility states for AI web agents.
- [DSH iOS Simulator](https://awesomecua.com/resources/github-zseven-w-dsh-ios/) — Date not recorded
  A DeepSeek Harness plugin that gives agents access to an iOS Simulator or USB-connected iPhone, with live video, UI inspection, and tap tools.
- [ESP (Echo-Skeleton Perception)](https://awesomecua.com/resources/github-badtheorylabs-esp/) — Date not recorded
  Stateful, event-driven screen-perception runtime that converts UI changes into compact text events for text-only computer-use agents.
- [FinalRun](https://awesomecua.com/resources/url-3b99bbbd3480dbc1ec6b/) — Date not recorded
  Android UI agent that prunes interface trees, waits for stable screens, feeds action failures back into its decisions, and takes fresh screenshots before grounding actions.
- [GenPark SPA Settlement Waiter Skill](https://awesomecua.com/resources/github-alpha-park-genpark-spa-network-idle-settlement-waiter-skill/) — Date not recorded
  Agent skill for awaiting single-page-application network idle and DOM mutation settlement before acting.
- [Godot Editor MCP](https://awesomecua.com/resources/github-hybridindie-godot-mcp/) — Date not recorded
  An MCP server and Godot addon that let agents inspect and edit a live game editor, control play sessions, simulate input, and capture screenshots.
- [grass-gui](https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/) — Date not recorded
  ScienceBoard's replacement GRASS GIS 8.4 wxPython GUI with an embedded Flask server that loads mapsets and layers, runs GRASS commands and returns layer, region and console state as JSON for task checks.
- [HIPPO Agent](https://awesomecua.com/resources/github-wadang-muscle-mem-agent/) — Date not recorded
  A computer-use agent for multistep GUI tasks that stores task facts and progress in working memory and combines planning, grounding, and completion checks.
- [IdemStep](https://awesomecua.com/resources/github-supermarioyl-idemstep/) — Date not recorded
  Deduplicates repeated agent actions and HTTP retries using keyed idempotency caches and a local verification proxy.
- [Jev GUI Delegate](https://awesomecua.com/resources/github-yuta-fywoo-jev-gui-delegate/) — Date not recorded
  Jev GUI Delegate is a local controller that carries out delegated Windows and Chrome tasks, calls Jev for uncertain choices, and checks outcomes after actions.
- [jev-browser](https://awesomecua.com/resources/github-mahmoudadelbghany-jev-browser/) — Date not recorded
  jev-browser is an MCP server that lets an agent navigate Chromium pages through Jev-selected actions. It checks page changes and returns uncertain steps to the driving agent.
- [Jevry](https://awesomecua.com/resources/github-michaelswissa-jevry/) — Date not recorded
  Jevry is a desktop browser agent that turns observed page controls into candidate actions, uses models to choose and plan, and shows its actions as it works through website tasks.
- [kalgebra-kai](https://awesomecua.com/resources/github-shiinahiiragi-kalgebra/) — Date not recorded
  Modified KAlgebra build from ScienceBoard with a local HTTP server that reports variables and plotted 2D and 3D functions and can switch tabs or add calculations and plots, so the benchmark can check math tasks.
- [LangGraph](https://awesomecua.com/resources/github-langchain-ai-langgraph/) — Date not recorded
  LangGraph is a stateful graph orchestration framework for building long-running, cyclical, and human-in-the-loop LLM and CUA agents.
- [LlamaTouch Evaluator](https://awesomecua.com/resources/github-llamatouch-evaluator/) — Date not recorded
  LlamaTouch Evaluator checks mobile-agent execution traces against annotated interface states and provides exact-match and subsequence action baselines.
- [MyInstagram](https://awesomecua.com/resources/github-acrab-agentic-labs-appsim-instagram/) — Date not recorded
  MyInstagram is an Android clone app with interactive social screens, mock data, and state fields for checking the outcomes of GUI agent tasks.
- [nexus-browser-mcp](https://awesomecua.com/resources/github-paipaipai666-nexus-browser-mcp/) — Date not recorded
  Browser automation MCP server with event-driven deterministic Playwright and accessibility-tree snapshots.
- [Ommatix](https://awesomecua.com/resources/github-yosoyepa-ommatix/) — Date not recorded
  Ommatix is an incremental spatial-indexing perception engine that tracks stable UI element IDs and state diffs across desktop frames.
- [OpenAdapt Agent](https://awesomecua.com/resources/github-openadaptai-openadapt-agent/) — Date not recorded
  OpenAdapt Agent exposes demonstrated application workflows as callable tools for AI agents. It enters values in an app and checks the record before and after saving.
- [openadapt-types](https://awesomecua.com/resources/github-openadaptai-openadapt-types/) — Date not recorded
  openadapt-types supplies validated Python models and JSON schemas for computer-use screens, actions, results, and interaction trajectories.
- [opencli-plugin-albato](https://awesomecua.com/resources/github-vecyang1-opencli-plugin-albato/) — Date not recorded
  An OpenCLI adapter lets agents inspect and change Albato automations through its web console, then reads the live DOM to verify state changes.
- [OSWright](https://awesomecua.com/resources/github-ask-812-oswright/) — Date not recorded
  Windows desktop automation MCP server using incremental UI Automation state diffs in place of full-screen vision loops.
- [outlive](https://awesomecua.com/resources/github-sy-d-outlive/) — Date not recorded
  Checkpoints and resumes long-running Solari cloud browser sessions across 10-minute container timeouts.
- [Predicate Systems (formerly SentienceAPI)](https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/) — Date not recorded
  Runtime trust layer for browser agents: a sidecar checks each action against local policy before it runs, and SDKs turn pages into compact ranked element snapshots and verify outcomes with DOM assertions.
- [Predicate TypeScript SDK](https://awesomecua.com/resources/github-predicatesystems-sdk-typescript/) — Date not recorded
  Predicate TypeScript SDK supplies browser-agent snapshots, element actions, assertions and traces for building runs that check UI outcomes.
- [Pursuit Permit WebMCP](https://awesomecua.com/resources/github-moaqil-pursuit-permit-webmcp/) — Date not recorded
  Revision-bound capacity permit protocol for WebMCP browser agents that invalidates stale approvals when page state changes.
- [Q-Verifier / Q-Reflector](https://awesomecua.com/resources/github-pockyitachi-q-verifier/) — Date not recorded
  Q-Reflector checks a GUI agent's action against before-and-after screenshots and task context, with training and online evaluation code.
- [Qontinui](https://awesomecua.com/resources/github-qontinui-qontinui/) — Date not recorded
  Qontinui is a model-based GUI automation framework that represents application screens as state graphs with visual template and OCR matching.
- [redux-webmcp](https://awesomecua.com/resources/github-breeznik-redux-webmcp/) — Date not recorded
  A WebMCP bridge for Redux Toolkit apps that lets browser agents dispatch allowed actions and inspect state changes. Developers can require approval for selected actions.
- [SameState WebMCP](https://awesomecua.com/resources/github-breeznik-samestate-webmcp/) — Date not recorded
  WebMCP reference architecture exposing Redux frontend state directly to browser agents for synchronized human-agent interaction.
- [ScreenWatch](https://awesomecua.com/resources/github-abnsapkota001-screenwatch/) — Date not recorded
  Python library for detecting persistent visual state changes and UI settlement in desktop applications.
- [settled-computer](https://awesomecua.com/resources/github-remote-skills-settled-computer/) — Date not recorded
  settled-computer is an event-driven MCP server that detects UI rendering quiescence so computer-use agents avoid fixed sleep delays and stale frames.
- [Snapsurf](https://awesomecua.com/resources/github-zumerlab-snapsurf/) — Date not recorded
  Web navigation and verification layer for AI agents providing compact semantic page digests and typed post-action DOM diffs.
- [StateAct](https://awesomecua.com/resources/github-ai-nikolai-stateact/) — Date not recorded
  State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.
- [StatePilot](https://awesomecua.com/resources/github-newsbruno-statepilot/) — Date not recorded
  StatePilot is a predictable browser runtime for AI agents with state validation, episodic memory, error recovery, and MCP tools.
- [Talox](https://awesomecua.com/resources/github-avant-iconic-talox/) — Date not recorded
  Talox is a stateful Playwright browser runtime for AI agents with stealth interaction, structured page state, and trace observability.
- [tui-use](https://awesomecua.com/resources/github-onesuper-tui-use/) — Date not recorded
  tui-use is a CLI utility that lets agents read terminal application screens and send keystrokes through persistent PTY sessions. It renders text snapshots and can wait for screen changes.
- [VeriSafe Agent](https://awesomecua.com/resources/github-verisafeagent-verisafeagent/) — Date not recorded
  Runtime verification framework for Android GUI agents that checks proposed actions against logical rules derived from user instructions and developer-defined app states.
- [WebOperator](https://awesomecua.com/resources/github-kagnlp-weboperator/) — Date not recorded
  A web agent using action-aware tree search to explore tasks and backtrack, checking page reconstruction and accounting for actions that may change website state.
- [Window Calls](https://awesomecua.com/resources/github-ickyicky-window-calls/) — Date not recorded
  Window Calls is a GNOME extension that exposes desktop window information and controls through D-Bus, including commands to move, resize and activate windows.
- [youtube_sim](https://awesomecua.com/resources/github-acrab-agentic-labs-appsim-youtube/) — Date not recorded
  youtube_sim is a YouTube-style Android test app with local media, interaction logs and task validators for checking mobile interface actions and resulting state.
- [Zoom Android Template](https://awesomecua.com/resources/github-acrab-agentic-labs-appsim-zoom/) — Date not recorded
  Zoom Android Template is a simulated meeting app for mobile interaction tests, with seeded schedules and runtime records of meeting and profile actions.

## Learning resources

- [Achieving 91.4% on Android World: A New Approach to Mobile UI Automation](https://awesomecua.com/resources/url-f8b67bde8c79e7934a2a/) — Date not recorded
  Technical article describing an Android UI agent that alternates planning with single actions, checks screen changes and uses a dedicated text editing path. It reports AndroidWorld results.
- [Finalrun Agentic Approach](https://awesomecua.com/resources/github-final-run-finalrun-android-world-benchmark/) — Date not recorded
  Illustrated account of FinalRun's Android agent approach, with task walkthroughs and recordings showing screen observation, action planning, and state checks.
- [linux-use-recipes](https://awesomecua.com/resources/github-javimosch-linux-use-recipes/) — Date not recorded
  A collection of recipes for automating Linux desktop applications and websites with linux-use. It covers browser setup, accessibility pitfalls, posting workflows and verification.
