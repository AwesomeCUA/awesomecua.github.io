# 状态追踪

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/state-tracking/records.jsonl

## 论文与综述

- [LongPuzzleBench: Evaluating GUI Agents on Long-Horizon Visual Puzzles](https://awesomecua.github.io/resources/arxiv-2609-34769/) — 2026-09-28
  LongPuzzleBench evaluates coherent long-horizon planning on persistent visual puzzle boards through native GUI actions. It compares GUI-only and code-assisted agents and uses controlled hints and memory diagnostics to examine decisions that preserve or eliminate future solutions.
- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.github.io/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.github.io/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://awesomecua.github.io/resources/arxiv-2609-35814/) — 2026-09-20
  BreakingWeb pairs solvable browser tasks with controlled environment interventions that preserve the goal, target and backend success criterion. The paired evaluations isolate robustness failures, including agents declaring completion without the required state change.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.github.io/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](https://awesomecua.github.io/resources/arxiv-2609-10451/) — 2026-09-09
  JarvisGUI composes typed input-output task transformations into dynamic workflows spanning Android, Windows and Ubuntu devices. Its virtual-environment benchmark tests transfer of intermediate results, shared state and cross-device dependencies.
- [LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-25777/) — 2026-08-26
  Introduces LocalLSTC, a training-free control architecture that maintains persistent task state and uses it to form short execution commitments. Outcomes feed back into that state for progress checks, recovery, and termination in locally deployed desktop agents.
- [SynWeaver: Website-Prior Task and Trajectory Co-Synthesis for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-12429/) — 2026-08-12
  SynWeaver explores a website to build a map of page states and executable interactions, then learns website priors for task proposals. Joint task/trajectory synthesis revises inconsistent pairs and verifies or repairs the resulting supervision.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.github.io/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.github.io/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure](https://awesomecua.github.io/resources/arxiv-2607-11388/) — 2026-07-13
  StructAgent maintains compact task state and regulates long-horizon execution through verified transitions and progress checkpoints. Its workflow supports evidence-based completion and targeted recovery, with desktop computer-use evaluation and a separate Minecraft extension.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.github.io/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [VisCritic: Visual State Comparison as Process Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-24525/) — 2026-06-23
  VisCritic compares before/after screenshots through change-aware visual features and an action-conditioned critic. Weakly supervised samples from existing traces train judgments of action success, progress and error type for GUI-agent verification.
- [ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks](https://awesomecua.github.io/resources/arxiv-2606-21654/) — 2026-06-19
  ChainWorld composes compatible atomic OSWorld tasks into multi-objective desktop chains while preserving their evaluators. It compares giving the full sequence at once with revealing goals turn by turn, exposing different state and session-management failures.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [Multi-Agent Computer Use](https://awesomecua.github.io/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.github.io/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.github.io/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [Benchmarking and Improving GUI Agents in High-Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2604-25380/) — 2026-04-28
  Introduces DynamicGUIBench for applications whose interfaces change between actions, together with DynamicUI, an agent that processes screen recordings. The agent selects informative frames, filters inconsistent action reasoning and uses trajectory reflection for subsequent decisions.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.github.io/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks on Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-18860/) — 2026-04-20
  This study examines UI changes between a desktop agent’s screenshot observation and action dispatch. Its pre-execution state checks address overlay and focus manipulation, while the reported DOM-injection blind spot limits the defense’s coverage.
- [AJ-Bench: Benchmarking Agent-as-a-Judge for Environment-Aware Evaluation](https://awesomecua.github.io/resources/arxiv-2604-18240/) — 2026-04-20
  AJ-Bench evaluates judge agents that actively gather evidence from search, data systems and graphical interfaces. Its annotated tasks and trajectories test information acquisition, state verification and process verification.
- [WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks](https://awesomecua.github.io/resources/arxiv-2604-06367/) — 2026-04-07
  WebSP-Eval evaluates agents carrying out website security and privacy tasks such as preference changes and session management. A browser extension controls account and initial state across runs, enabling analysis of failures on stateful UI controls.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.github.io/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [GUIDE: Interpretable GUI Agent Evaluation via Hierarchical Diagnosis](https://awesomecua.github.io/resources/arxiv-2604-04399/) — 2026-04-06
  GUIDE evaluates GUI trajectories by segmenting them into subtasks, diagnosing each segment, and aggregating structured findings into a task verdict. It tests diagnostic judgments on e-commerce, web-agent and Android-control traces rather than relying on one holistic trajectory score.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.github.io/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.github.io/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.github.io/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.github.io/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.github.io/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.github.io/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.github.io/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.github.io/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.github.io/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [Latent State Estimation Helps UI Agents to Reason](https://awesomecua.github.io/resources/arxiv-2405-11120/) — 2024-05-17
  Studies explicit textual estimates of latent UI state, including whether commanded actions occurred and how far a task has progressed. The experiments compare agents that reason with these estimates against agents that omit them across public and internal task benchmarks.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.github.io/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.

## 工程与产业

- [AgentProg](https://awesomecua.github.io/resources/github-mobilellm-agentprog/) — Date not recorded
  Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.
- [StateAct](https://awesomecua.github.io/resources/github-ai-nikolai-stateact/) — Date not recorded
  State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.
