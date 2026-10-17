# Long-horizon tasks

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/long-horizon/records.jsonl

## Papers & surveys

- [Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://awesomecua.github.io/resources/arxiv-2610-18784/) — 2026-10-13
  Introduces CarryOn, which maintains evidence-linked task objects and remaining-work context across history compression, with evaluations on desktop tasks and web research.
- [Adaptive-Group Process Rewards for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-17710/) — 2026-10-13
  Groups GUI trajectories by subgoal and combines action-level and group-level assessments into intermediate rewards for training agents with sparse task outcomes.
- [AgentHorizon: Evaluating Agentic Judges for Long-Horizon Computer-Use Tasks](https://awesomecua.github.io/resources/arxiv-2610-11050/) — 2026-10-08
  Introduces AgentHorizon, a benchmark for judging long computer-use trajectories using closely related instructions paired with recorded actions and screenshots. It tests whether judges can detect constraint violations and distinguish successful tasks from similar but incompatible requests.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.github.io/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.github.io/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design](https://awesomecua.github.io/resources/arxiv-2609-16251/) — 2026-09-14
  CADWorld evaluates screenshot-and-GUI agents on long FreeCAD workflows, from modeling and assembly to manufacturing and simulation. Executable checks inspect saved engineering artifacts for geometry, constraints, construction structure and downstream state.
- [GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments](https://awesomecua.github.io/resources/arxiv-2609-00048/) — 2026-08-30
  Introduces GUI-CC, a benchmark for assessing GUI world models as multi-step agent environments. Separate reference-action and agent-loop tracks test whether generated screens preserve context, plausible transitions, and task progress throughout interaction.
- [CausalCache: Conditional High-Fidelity Restoration for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-22577/) — 2026-08-23
  Introduces CausalCache, which selects archived screenshots to restore alongside text summaries under a fixed visual-memory budget. A history-gated adapter processes restored images, with evaluation distinguishing standard step limits from longer-horizon and mobile-transfer settings.
- [Wuying-Browser-Agent: Real-World Centric Fundamental Long-Horizon Browser Agents](https://awesomecua.github.io/resources/arxiv-2608-17319/) — 2026-08-18
  Combines a browser execution framework, recovery-oriented supervision, and online reinforcement learning, with a bilingual live-web task benchmark.
- [UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations](https://awesomecua.github.io/resources/arxiv-2608-15930/) — 2026-08-16
  Combines environment-grounded training with demonstration-conditioned workflows, and introduces OSWorkerBench for extended office-task evaluation.
- [DSAgentBench: Can Agents Automate End-to-End Data-Science Workflows in Real Computer Environments?](https://awesomecua.github.io/resources/arxiv-2608-10366/) — 2026-08-11
  DSAgentBench evaluates end-to-end data-science workflows spanning analysis, modeling and visualization inside a real desktop environment. Task evaluators check produced analytical and visual artifacts, while the released interface supports screenshot or accessibility observations and GUI actions.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-28227/) — 2026-07-30
  Describes a foundation GUI agent with combined GUI and command-line actions, large-scale interaction infrastructure, and iterative environment and task generation.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [SEE: Structure-aware Exploring & Exploiting for Long-horizon GUI Agent Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2607-18046/) — 2026-07-20
  Introduces SEE, which first explores mobile interfaces to build a screen-and-element transition graph, then composes task trajectories through graph planning and controlled sampling. It studies coverage, loop avoidance, and transfer after training agents on the generated sequences.
- [Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2607-17527/) — 2026-07-20
  Introduces Sidekick, a communication interface that uses ambient status cues, multimodal action summaries, and visual and verbal explanations of reasoning to help people monitor computer-use agents. A user study examines progress awareness, error traceability, and multitasking across background and foreground interaction.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.github.io/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks](https://awesomecua.github.io/resources/arxiv-2606-29537/) — 2026-06-28
  Introduces extended computer-use workflows with realistic artifacts, changing information, hidden state, and partial-progress and safety assessments.
- [ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks](https://awesomecua.github.io/resources/arxiv-2606-21654/) — 2026-06-19
  ChainWorld composes compatible atomic OSWorld tasks into multi-objective desktop chains while preserving their evaluators. It compares giving the full sequence at once with revealing goals turn by turn, exposing different state and session-management failures.
- [LabOSBench: Benchmarking Computer Use Agents for Scientific Instrument Control](https://awesomecua.github.io/resources/arxiv-2606-16802/) — 2026-06-15
  LabOSBench evaluates GUI agents on browser-based scientific instrument simulators with configurable tasks and execution-based checks. Its subtask and end-to-end tests examine feedback-driven adjustment and long workflows without controlling physical instruments.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields](https://awesomecua.github.io/resources/arxiv-2606-11042/) — 2026-06-09
  Workflow-GYM evaluates long GUI workflows in professional software rather than isolated interface actions. Its analysis examines failures such as omitted stages, accumulated errors and goal drift during specialized end-to-end work.
- [WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces](https://awesomecua.github.io/resources/arxiv-2606-09426/) — 2026-06-08
  WeaveBench requires agents to combine GUI, command-line and code operations within long tasks on an Ubuntu desktop. A trajectory-aware judge checks deliverables and interaction evidence, including shortcut behavior that outcome-only grading can miss.
- [DeskCraft: Benchmarking Desktop Agents on Professional Workflows and Human-in-the-Loop Collaboration](https://awesomecua.github.io/resources/arxiv-2606-03103/) — 2026-06-02
  DeskCraft evaluates professional desktop workflows and human-agent collaboration through mid-execution clarification, interruption and post-completion feedback. Its tasks cover creative applications and expose difficulties in long-horizon execution and proactive clarification.
- [Multi-Agent Computer Use](https://awesomecua.github.io/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.github.io/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.github.io/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [Odysseys: Benchmarking Web Agents on Realistic Long Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2604-24964/) — 2026-04-27
  Introduces Odysseys, a live-web benchmark of long, multi-site tasks derived from browsing sessions. Graded task rubrics and a rubric-score-per-step measure evaluate both partial progress and trajectory efficiency.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.github.io/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.github.io/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [The Art of Building Verifiers for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2604-06240/) — 2026-04-05
  Describes a web-trajectory verifier built around structured rubrics, separate process and outcome judgments, and explicit treatment of uncontrollable failures. CUAVerifierBench supplies human labels for evaluating these choices and screenshot-based context management.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.github.io/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.github.io/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [AndroTMem: From Interaction Trajectories to Anchored Memory in Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-18429/) — 2026-03-19
  Introduces AndroTMem-Bench for Android tasks whose later actions depend on earlier UI states. Anchored State Memory retains causally linked intermediate states for subgoal-specific retrieval and evaluates them against full-history and summary-based memory.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.github.io/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions rather than recall alone.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.github.io/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [OS-Marathon: Benchmarking Computer-Use Agents on Vast-Horizon, Repetitive Tasks](https://awesomecua.github.io/resources/arxiv-2601-20650/) — 2026-01-28
  Introduces OS-Marathon to evaluate long repetitive computer-use workflows whose execution grows with the amount of input data. It studies failure accumulation under task decomposition and GraphDemo, which adapts agents using a demonstration of the recurring workflow.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-07262/) — 2026-01-12
  ColorBrowserAgent converts human feedback into reusable website knowledge and uses that knowledge to guide progressive context summaries. It evaluates the resulting memory and adaptation mechanisms on long browser workflows.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](https://awesomecua.github.io/resources/arxiv-2512-19432/) — 2025-12-22
  Introduces long mobile workflows that combine agent-user interaction, cross-application tasks, and MCP-based tool access.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.github.io/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.github.io/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.github.io/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [Scaling Agents for Computer Use](https://awesomecua.github.io/resources/arxiv-2510-02250/) — 2025-10-02
  Introduces Behavior Judge, which converts execution trajectories into behavior narratives and compares multiple candidate rollouts. Experiments examine this selection approach on OSWorld, WindowsAgentArena and AndroidWorld.
- [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.github.io/resources/arxiv-2509-15738/) — 2025-09-19
  GUI-ReWalk begins with stochastic interface exploration and then infers goals to generate coherent action trajectories. It supports long-horizon workflows across applications and studies training on the resulting data using grounding and navigation benchmarks.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.github.io/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-01330/) — 2025-08-02
  NaturalGAIA builds verifiable long-horizon GUI tasks from human interaction intents while separating causal task structure from its verbal description. Its LightManus-Jarvis framework divides dynamic planning and context management from execution based on visual and structural interface information.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.github.io/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [AgentSynth: Scalable Task Generation for Generalist Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-14205/) — 2025-06-17
  AgentSynth composes easily generated subtasks into longer computer-use tasks and trajectories with adjustable difficulty. Its evaluation uses the number of subtasks to probe how agent success changes as task complexity grows.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.github.io/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.github.io/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [VideoCAD: A Dataset and Model for Learning Long-Horizon 3D CAD UI Interactions from Video](https://awesomecua.github.io/resources/arxiv-2505-24838/) — 2025-05-30
  Introduces synthetic CAD interaction videos, a model for learning interface actions from video, and evaluation tasks for spatial and long-horizon reasoning.
- [ARPO:End-to-End Policy Optimization for GUI Agents with Experience Replay](https://awesomecua.github.io/resources/arxiv-2505-16282/) — 2025-05-22
  ARPO extends group-relative policy optimization with a replay buffer that reuses successful GUI trajectories across training iterations. It filters tasks using baseline performance and compares end-to-end reinforcement learning with offline preference optimization on OSWorld.
- [OSUniverse: Benchmark for Multimodal GUI-navigation AI Agents](https://awesomecua.github.io/resources/arxiv-2505-03570/) — 2025-05-06
  Introduces OSUniverse, a desktop GUI benchmark spanning precise clicks through multistep and multiapplication tasks. It provides both manual scoring and an automated validation mechanism.
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://awesomecua.github.io/resources/arxiv-2504-10445/) — 2025-04-14
  RealWebAssist evaluates web assistance through sequences of instructions collected from real users across multiple websites. It tests intent interpretation, user-specific routines, long-term context, and visual grounding when instructions are ambiguous or evolve during interaction.
- [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2503-09572/) — 2025-03-12
  Separates planning from execution and creates synthetic plan annotations for training agents on extended web-navigation tasks.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.github.io/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://awesomecua.github.io/resources/arxiv-2412-14161/) — 2024-12-18
  Simulates a software-company workplace to evaluate agents on professional tasks involving websites, programs, files, and coworker communication.
- [WebPilot: A Versatile and Autonomous Multi-Agent System for Web Task Execution with Strategic Exploration](https://awesomecua.github.io/resources/arxiv-2408-15978/) — 2024-08-28
  WebPilot separates global subtask planning from local Monte Carlo tree search during web execution. It continually refines the high-level plan and adapts local search to uncertain transitions and incomplete observations, evaluated on WebArena and MiniWoB++.
- [OfficeBench: Benchmarking Language Agents across Multiple Applications for Office Automation](https://awesomecua.github.io/resources/arxiv-2407-19056/) — 2024-07-26
  Evaluates language agents on office workflows requiring information integration, long-term planning, and switching between applications.
- [MMInA: Benchmarking Multihop Multimodal Internet Agents](https://awesomecua.github.io/resources/arxiv-2404-09992/) — 2024-04-15
  Evaluates multimodal agents on compositional tasks across changing websites and studies replaying prior trajectories as memory support.
- [Exposing Limitations of Language Model Agents in Sequential-Task Compositions on the Web](https://awesomecua.github.io/resources/arxiv-2311-18751/) — 2023-11-30
  CompWoB adds 50 composed web-automation tasks to study generalization from simpler interactions. The paper compares prompted and fine-tuned agents, balances task training data, and probes sensitivity to changes in instruction order.
- [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2307-13854/) — 2023-07-25
  Introduces reproducible web environments with task-completion checks for evaluating autonomous web agents.

## Benchmarks

- [ColorBench](https://awesomecua.github.io/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [Mind2Web 2](https://awesomecua.github.io/resources/github-osu-nlp-group-mind2web-2/) — Date not recorded
  Long-horizon agentic web search benchmark whose Agent-as-a-Judge framework scores time-varying, citation-backed answers, with evaluation scripts for its dev and test sets.
- [MMInA](https://awesomecua.github.io/resources/github-shulin16-mmina/) — Date not recorded
  Multimodal web tasks in a WebArena-based environment that chain from 1 to 10 hops across sites such as a shopping store and Wikipedia, testing long-chain reasoning.
- [OS-Map](https://awesomecua.github.io/resources/github-os-copilot-os-map/) — Date not recorded
  An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.

## Models

- [Plan-and-Act Planner 70B](https://awesomecua.github.io/resources/url-3932d69c6b6f9b2a7ba8/) — Date not recorded
  The planner component of Plan-and-Act, generating structured high-level plans that an executor turns into web actions.

## Engineering & industry

- [AndroTMem inference and evaluation code](https://awesomecua.github.io/resources/github-cvc2233-androtmem/) — Date not recorded
  A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.
