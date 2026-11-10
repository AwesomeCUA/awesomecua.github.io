# 长任务

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/long-horizon/records.jsonl

## 论文与综述

- [JHiMA-WebRL: A Joint Hierarchical Multi-Agent Reinforcement Learning Framework for Long-Horizon Web Tasks](https://awesomecua.com/zh/resources/arxiv-2611-05263/) — 2026-11-03
  Introduces JHiMA-WebRL, which jointly trains a task decomposer and GUI actor with hierarchical RL for long-horizon web tasks in WebArena.
- [From Local Skills to Long-Horizon Web Tasks: Progressive Skill Exploration for LLM Web Agents](https://awesomecua.com/zh/resources/arxiv-2611-03116/) — 2026-11-02
  Introduces SCOPE, a training method for long web-agent tasks that discovers local skills from rollouts, composes them into chains, and expands them using failure experience.
- [PatchScout: Thematic Web Data Collection via Information Foraging](https://awesomecua.com/zh/resources/arxiv-2611-00169/) — 2026-10-30
  Introduces PatchScout, a multi-agent method for collecting thematic documents from the live web by deciding when to explore a new information region.
- [From Interaction to Capability: Task Advancement as State and Supervision for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-37482/) — 2026-10-27
  Introduces Task Advancement Memory (TAM) for long GUI workflows, tracking task progress across applications and learning reusable operations from interactions with local results.
- [Harness-Model Collaboration for Long-Horizon Continual Learning](https://awesomecua.com/zh/resources/arxiv-2610-34724/) — 2026-10-26
  Introduces HaMo, a continual-learning framework for web agents that retrieves strategy cards from past workflows and updates model parameters to reuse them.
- [Subgoal-aware Memory Graph for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2610-31307/) — 2026-10-22
  Proposes a subgoal-aware memory graph that turns past mobile GUI agent trajectories into reusable evidence for decisions across tasks.
- [HiSTEVE 1.0: Harnessing Human-Interface VLA Agents for Open-World Games](https://awesomecua.com/zh/resources/arxiv-2610-31162/) — 2026-10-22
  HiSTEVE uses a hierarchical planner and a vision-only keyboard-and-mouse controller for Minecraft tasks that include GUI and non-GUI interactions.
- [Lost in Recovery: Demystifying Recovery Behavior of Computer-Use Agents via Goal-Oriented Action Replay](https://awesomecua.com/zh/resources/arxiv-2610-27954/) — 2026-10-20
  ReTrace evaluates how keyboard-and-mouse computer-use agents recover from injected errors by replaying actions and comparing downstream outcomes.
- [CUA-Recovery: Benchmarking Error Recovery in Long-Horizon Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2610-27645/) — 2026-10-20
  CUA-Recovery benchmarks error detection and recovery across desktop applications, using agent failures to create test states and training trajectories.
- [Deep Search in Real-World Web Environments](https://awesomecua.com/zh/resources/arxiv-2610-30181/) — 2026-10-19
  OpenDS-World benchmarks multi-step research on the live open Web, requiring agents to search, interact with browsers and combine evidence across sources.
- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.com/zh/resources/arxiv-2610-26828/) — 2026-10-19
  WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/zh/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [Co-Evolving Acting and Forecasting for Language Agents](https://awesomecua.com/zh/resources/arxiv-2610-20597/) — 2026-10-14
  Introduces CoPE, which trains language agents to forecast later actions from earlier histories during RL; WebShop is one of five evaluation benchmarks.
- [Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://awesomecua.com/zh/resources/arxiv-2610-18784/) — 2026-10-13
  Introduces CarryOn, which maintains evidence-linked task objects and remaining-work context across history compression, with evaluations on desktop tasks and web research.
- [WorkRover: Scaling Long-Horizon Cowork Agent Training Via Recursive Environment Evolution](https://awesomecua.com/zh/resources/arxiv-2610-18067/) — 2026-10-13
  Synthesizes resettable workspaces with files, application observations and skills; repairs environment incompatibilities and trains long-task agents using verifier-linked turn credit.
- [Adaptive-Group Process Rewards for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-17710/) — 2026-10-13
  Groups GUI trajectories by subgoal and combines action-level and group-level assessments into intermediate rewards for training agents with sparse task outcomes.
- [EvoWeb: A Benchmark for Coding Agents on Evolving Web Applications](https://awesomecua.com/zh/resources/arxiv-2610-16402/) — 2026-10-12
  Introduces EvoWeb, a benchmark for coding agents that extend web applications through dependent requests; a multimodal web agent checks each version in a live browser.
- [AgentHorizon: Evaluating Agentic Judges for Long-Horizon Computer-Use Tasks](https://awesomecua.com/zh/resources/arxiv-2610-11050/) — 2026-10-08
  Introduces AgentHorizon, a benchmark for judging long computer-use trajectories using closely related instructions paired with recorded actions and screenshots. It tests whether judges can detect constraint violations and distinguish successful tasks from similar but incompatible requests.
- [PlaySuite: A Large-Scale Benchmark for Interactive Visual Intelligence](https://awesomecua.com/zh/resources/arxiv-2610-07127/) — 2026-10-05
  Introduces PlaySuite, a closed-loop video-game benchmark that evaluates interactive visual agents, including computer-use agents, over extended play.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.com/zh/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [HyperBrowseComp: A Multilingual and Multimodal Stress Test for Web-Browsing Agents](https://awesomecua.com/zh/resources/arxiv-2610-03574/) — 2026-10-02
  Introduces HyperBrowseComp, a multilingual benchmark for browsing agents that must connect evidence across open-web sources, including videos, scans, images, and maps.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.com/zh/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [LongPuzzleBench: Evaluating GUI Agents on Long-Horizon Visual Puzzles](https://awesomecua.com/zh/resources/arxiv-2609-34769/) — 2026-09-28
  LongPuzzleBench evaluates coherent long-horizon planning on persistent visual puzzle boards through native GUI actions. It compares GUI-only and code-assisted agents and uses controlled hints and memory diagnostics to examine decisions that preserve or eliminate future solutions.
- [The Hard Part Comes After Search: Benchmarking Web Agents on Synthesizing, Organizing, and Displaying Knowledge](https://awesomecua.com/zh/resources/arxiv-2609-30604/) — 2026-09-24
  KNOWS benchmarks browser workflows that retrieve and synthesize information into documents, presentations and spreadsheets. Task-specific evaluators combine deterministic checks with model judgments, distinguishing partial progress from usable end-to-end artifact completion.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design](https://awesomecua.com/zh/resources/arxiv-2609-16251/) — 2026-09-14
  CADWorld evaluates screenshot-and-GUI agents on long FreeCAD workflows, from modeling and assembly to manufacturing and simulation. Executable checks inspect saved engineering artifacts for geometry, constraints, construction structure and downstream state.
- [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](https://awesomecua.com/zh/resources/arxiv-2609-10451/) — 2026-09-09
  JarvisGUI composes typed input-output task transformations into dynamic workflows spanning Android, Windows and Ubuntu devices. Its virtual-environment benchmark tests transfer of intermediate results, shared state and cross-device dependencies.
- [GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments](https://awesomecua.com/zh/resources/arxiv-2609-00048/) — 2026-08-30
  Introduces GUI-CC, a benchmark for assessing GUI world models as multi-step agent environments. Separate reference-action and agent-loop tracks test whether generated screens preserve context, plausible transitions, and task progress throughout interaction.
- [GameWAM: A World Action Model for Video Games](https://awesomecua.com/zh/resources/arxiv-2608-26200/) — 2026-08-25
  Introduces GameWAM, a model for native game play and GUI control that predicts future visuals and keyboard-mouse actions from synchronized gameplay and GUI trajectories.
- [CausalCache: Conditional High-Fidelity Restoration for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-22577/) — 2026-08-23
  Introduces CausalCache, which selects archived screenshots to restore alongside text summaries under a fixed visual-memory budget. A history-gated adapter processes restored images, with evaluation distinguishing standard step limits from longer-horizon and mobile-transfer settings.
- [Spine-Branch Coordination for Multi-agent Computer Use](https://awesomecua.com/zh/resources/arxiv-2608-22077/) — 2026-08-22
  Introduces Spine-Branch Coordination, which assigns a main task flow to one virtual-machine state and uses parallel branch machines to gather information for computer-use agents.
- [Towards Faithful Simulation of Human Shopping Behavior](https://awesomecua.com/zh/resources/arxiv-2608-20707/) — 2026-08-21
  Presents RecVerse, a screenshot-based shopping simulation agent with hierarchical memory and trajectory-level RL, alongside USB, an interactive e-commerce GUI trajectory dataset.
- [Wuying-Browser-Agent: Real-World Centric Fundamental Long-Horizon Browser Agents](https://awesomecua.com/zh/resources/arxiv-2608-17319/) — 2026-08-18
  Combines a browser execution framework, recovery-oriented supervision, and online reinforcement learning, with a bilingual live-web task benchmark.
- [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](https://awesomecua.com/zh/resources/arxiv-2608-17310/) — 2026-08-18
  Introduces Agentic ESOpt, an evolution-strategies fine-tuning framework for long-horizon agents, evaluated on WebArena-Lite web tasks and automatic heuristic design.
- [UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations](https://awesomecua.com/zh/resources/arxiv-2608-15930/) — 2026-08-16
  Combines environment-grounded training with demonstration-conditioned workflows, and introduces OSWorkerBench for extended office-task evaluation.
- [StateM: Reaching 95.3% Raw Accuracy, or a \$15 Frontier Run, on Terminal-Bench 2.1 via Harness Scaling](https://awesomecua.com/zh/resources/arxiv-2608-15089/) — 2026-08-15
  Introduces StateM, a stateful runtime with checked transitions and reusable runbooks for long-horizon agents; its reported evaluations use terminal and business tasks.
- [DSAgentBench: Can Agents Automate End-to-End Data-Science Workflows in Real Computer Environments?](https://awesomecua.com/zh/resources/arxiv-2608-10366/) — 2026-08-11
  DSAgentBench evaluates end-to-end data-science workflows spanning analysis, modeling and visualization inside a real desktop environment. Task evaluators check produced analytical and visual artifacts, while the released interface supports screenshot or accessibility observations and GUI actions.
- [SkillTracer: Structural Failure Attribution and Refinement of Agentic Skills in Long-Horizon Web Tasks](https://awesomecua.com/zh/resources/url-a2c0216a0d8875e86dee/) — 2026-08-08
  SkillTracer maps web agent skills to inspectable plan graphs, uses interaction traces to locate failures, and refines reusable skills across long tasks and episodes.
- [MemPrism: Task-Conditioned Relational Memory Views for Long-Horizon Agents](https://awesomecua.com/zh/resources/arxiv-2608-06745/) — 2026-08-07
  Introduces MemPrism, which records prior interactions and builds task-conditioned relational memory views for decisions in long-horizon web-agent tasks.
- [StepJack: Benchmarking Computer-Use Agent Safety Against Multi-Step Indirect Prompt Injection](https://awesomecua.com/zh/resources/arxiv-2608-06477/) — 2026-08-06
  Introduces StepJack, a benchmark of indirect prompt injections that split an adversarial goal across pages on a computer-use agent's web navigation path.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.com/zh/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks](https://awesomecua.com/zh/resources/arxiv-2608-01964/) — 2026-08-03
  Introduces LongHorizon-Harness, which maintains verified task state outside an agent's execution context and audits subtasks; its evaluations include OSWorld~2.0.
- [Alignment Is Local: A Paired Diagnostic for GUI Agents under User-Side Persuasion](https://awesomecua.com/zh/resources/arxiv-2607-29199/) — 2026-07-31
  Presents a paired diagnostic of prompt guardrails in GUI agents under screen-grounded user persuasion, comparing single-turn probes with four-turn escalation.
- [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-28227/) — 2026-07-30
  Describes a foundation GUI agent with combined GUI and command-line actions, large-scale interaction infrastructure, and iterative environment and task generation.
- [OmegaUse-OfficeVal: Benchmarking LLM Agents on Long-Horizon Office-Suite Tasks with Economic Grounding](https://awesomecua.com/zh/resources/arxiv-2607-27155/) — 2026-07-29
  Introduces OmegaUse-OfficeVal, a benchmark for long-horizon office-suite agent tasks with labor-time and price signals, plus rubric-based code verifiers.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [SEE: Structure-aware Exploring & Exploiting for Long-horizon GUI Agent Trajectory Synthesis](https://awesomecua.com/zh/resources/arxiv-2607-18046/) — 2026-07-20
  Introduces SEE, which first explores mobile interfaces to build a screen-and-element transition graph, then composes task trajectories through graph planning and controlled sampling. It studies coverage, loop avoidance, and transfer after training agents on the generated sequences.
- [Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2607-17527/) — 2026-07-20
  Introduces Sidekick, a communication interface that uses ambient status cues, multimodal action summaries, and visual and verbal explanations of reasoning to help people monitor computer-use agents. A user study examines progress awareness, error traceability, and multitasking across background and foreground interaction.
- [Just A Rather Very Intelligent Spoken Agent](https://awesomecua.com/zh/resources/arxiv-2607-16610/) — 2026-07-18
  Introduces JarvisBench, a benchmark for spoken mediation during long-horizon agent workflows, measuring task collaboration and how users follow ongoing execution.
- [Beyond Sequential Interaction: Benchmarking Parallel Execution and Coordination for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-22689/) — 2026-07-17
  Introduces ParaGUIBench, with tasks and efficiency measurements for coordinated GUI agents operating separate desktop instances over a shared file system. Its ParaGUI planner-worker system decomposes tasks and dispatches concurrent subtasks for comparison with serial execution.
- [StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure](https://awesomecua.com/zh/resources/arxiv-2607-11388/) — 2026-07-13
  StructAgent maintains compact task state and regulates long-horizon execution through verified transitions and progress checkpoints. Its workflow supports evidence-based completion and targeted recovery, with desktop computer-use evaluation and a separate Minecraft extension.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.com/zh/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [TurnOPD: Making On-Policy Distillation Turn-Aware for Efficient Long-Horizon Agent Training](https://awesomecua.com/zh/resources/arxiv-2607-05804/) — 2026-07-07
  Proposes TurnOPD, a rollout-depth and loss-budgeting method for training long-horizon language agents; WebShop is one of its evaluation settings.
- [A Task-State Representation for Long-Horizon Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-00502/) — 2026-07-01
  Introduces TSR, a training-free wrapper for long-horizon mobile GUI agents that tracks instructions, subgoal progress, and action outcomes separately from screen observations.
- [OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks](https://awesomecua.com/zh/resources/arxiv-2606-29537/) — 2026-06-28
  Introduces extended computer-use workflows with realistic artifacts, changing information, hidden state, and partial-progress and safety assessments.
- [Bridging VideoQA and Video-Guided Agentic Tasks via Generalized Keyframe Extraction](https://awesomecua.com/zh/resources/arxiv-2606-29445/) — 2026-06-28
  Introduces VG-GUIBench to evaluate GUI agents following video tutorials, and TASKER to select task-relevant keyframes for video-guided tasks and VideoQA.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks](https://awesomecua.com/zh/resources/arxiv-2606-21654/) — 2026-06-19
  ChainWorld composes compatible atomic OSWorld tasks into multi-objective desktop chains while preserving their evaluators. It compares giving the full sequence at once with revealing goals turn by turn, exposing different state and session-management failures.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.com/zh/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [When Web Agents Finish but Still Fail: Reproducible Triggers and Trace Diagnostics for Parallel Web Exploration](https://awesomecua.com/zh/resources/arxiv-2606-20724/) — 2026-06-16
  Introduces Parallel WebBench for parallel web exploration and uses verified URL trajectories to diagnose search loops, incomplete answers, and failures after evidence retrieval.
- [VISUALSKILL: Multimodal Skills for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-18448/) — 2026-06-16
  VISUALSKILL organizes application-specific text and figures into hierarchical skills retrieved on demand through an MCP tool. Skills combine authored documentation with live UI exploration, and matched multimodal/text-only comparisons test their utility for interface identification and workflow-state verification.
- [LabOSBench: Benchmarking Computer Use Agents for Scientific Instrument Control](https://awesomecua.com/zh/resources/arxiv-2606-16802/) — 2026-06-15
  LabOSBench evaluates GUI agents on browser-based scientific instrument simulators with configurable tasks and execution-based checks. Its subtask and end-to-end tests examine feedback-driven adjustment and long workflows without controlling physical instruments.
- [LLM-as-Code: Agentic Programming for Agent Harness](https://awesomecua.com/zh/resources/arxiv-2606-15874/) — 2026-06-14
  Proposes Agentic Programming, where code controls agent loops and invokes LLM-as-Code for reasoning; a computer-use case study examines long visual action sequences.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields](https://awesomecua.com/zh/resources/arxiv-2606-11042/) — 2026-06-09
  Workflow-GYM evaluates long GUI workflows in professional software. Its analysis examines failures such as omitted stages, accumulated errors and goal drift during specialized end-to-end work.
- [WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces](https://awesomecua.com/zh/resources/arxiv-2606-09426/) — 2026-06-08
  WeaveBench requires agents to combine GUI, command-line and code operations within long tasks on an Ubuntu desktop. A trajectory-aware judge checks deliverables and interaction evidence, including shortcut behavior that outcome-only grading can miss.
- [Self-evolving LLM agents with in-distribution Optimization](https://awesomecua.com/zh/resources/arxiv-2606-07367/) — 2026-06-05
  Introduces Q-Evolve, which derives step-wise rewards from an in-distribution critic for LLM agent learning; WebShop is one of its interactive evaluation settings.
- [Signal-Driven Observation for Long-Horizon Web Agents](https://awesomecua.com/zh/resources/arxiv-2606-06708/) — 2026-06-04
  Proposes Signal-Driven Observation: a separate call selects relevant DOM elements and selectors, and a detector requests new observations only after meaningful browser events or failures. The paper frames observation timing and compression as an architectural research problem for long-horizon web agents.
- [DeskCraft: Benchmarking Desktop Agents on Professional Workflows and Human-in-the-Loop Collaboration](https://awesomecua.com/zh/resources/arxiv-2606-03103/) — 2026-06-02
  DeskCraft evaluates professional desktop workflows and human-agent collaboration through mid-execution clarification, interruption and post-completion feedback. Its tasks cover creative applications and expose difficulties in long-horizon execution and proactive clarification.
- [Multi-Agent Computer Use](https://awesomecua.com/zh/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [GTA: Generating Long-Horizon Tasks for Web Agents at Scale](https://awesomecua.com/zh/resources/arxiv-2605-29218/) — 2026-05-28
  GTA generates multi-hop web-agent tasks and executable trajectories through crawling, retrieval, and validation, releasing a benchmark built from over 50 websites.
- [AndroidDaily: A Verifiable Benchmark for Mobile GUI Agents on Real-World Closed-Source Applications](https://awesomecua.com/zh/resources/arxiv-2605-27761/) — 2026-05-26
  AndroidDaily evaluates mobile GUI agents on daily workflows in closed-source Android apps. Its GRADE evaluator follows visual trajectories against operational obligations, output-quality requirements and negative constraints, producing process-level diagnostics without hidden app state.
- [Anchor: Preventing Artifact Drift for Reliable Agent Verification](https://awesomecua.com/zh/resources/arxiv-2605-26321/) — 2026-05-25
  Anchor builds ERP-Bench by generating procurement and manufacturing tasks with shared state verifiers for evaluating browser and computer-use agents.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.com/zh/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [MemGym: a Long-Horizon Memory Environment for LLM Agents](https://awesomecua.com/zh/resources/arxiv-2605-20833/) — 2026-05-20
  MemGym benchmarks agent memory across several task regimes, including computer use on WebArena-Infinity, with scores designed to isolate memory performance.
- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://awesomecua.com/zh/resources/arxiv-2605-19484/) — 2026-05-19
  Cutverse benchmarks GUI agents on long editing workflows across professional media applications and parses recordings and input logs into grounded action trajectories.
- [What and When to Distill: Selective Hindsight Distillation for Multi-Turn Agents](https://awesomecua.com/zh/resources/arxiv-2605-19447/) — 2026-05-19
  SERL trains multi-turn agents by using task rewards and selective step feedback to weight updates, with WebShop among its evaluation settings.
- [MementoGUI: Learning Agentic Multimodal Memory Control for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-18652/) — 2026-05-18
  MementoGUI learns a controller for selecting, compressing and retrieving textual and region-level visual memories while leaving the GUI-agent backbone fixed. It also converts computer-use traces into controller training data and evaluates semantic actions, progress and memory consistency on long-horizon tasks.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.com/zh/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [Executable Agentic Memory for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2605-12294/) — 2026-05-12
  Executable Agentic Memory stores GUI routines in a knowledge graph built through state-aware exploration and action-group mining. A learned value model guides tree search over this executable memory for retrieval-based planning, with AndroidWorld and efficiency evaluation.
- [WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation](https://awesomecua.com/zh/resources/arxiv-2605-10912/) — 2026-05-11
  WildClawBench evaluates CLI agents on long, multimodal tasks in Docker containers with real tools, using task checks, side-effect audits, and a semantic judge.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [WebTrap: Stealthy Mid-Task Hijacking of Browser Agents During Navigation](https://awesomecua.com/zh/resources/arxiv-2605-08310/) — 2026-05-08
  WebTrap injects mid-task instructions into browser-agent navigation to steer an agent toward an attacker goal before it resumes the user's task.
- [cotomi Act: Learning to Automate Work by Watching You](https://awesomecua.com/zh/resources/arxiv-2605-03231/) — 2026-05-04
  cotomi Act is a browser agent that executes multi-step tasks and turns observed user browsing into persistent knowledge shared with users.
- [AcademiClaw: When Students Set Challenges for AI Agents](https://awesomecua.com/zh/resources/arxiv-2605-02661/) — 2026-05-04
  AcademiClaw benchmarks OpenClaw agents on long academic workflows, scoring task completion in isolated Docker sandboxes with rubrics and a safety audit.
- [Planner Matters! An Efficient and Unbalanced Multi-agent Collaboration Framework for Long-horizon Planning](https://awesomecua.com/zh/resources/arxiv-2605-02168/) — 2026-05-04
  A planner-centric RL framework divides agent automation among a planner, actor, and memory manager, with evaluations that include web navigation and OS control.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.com/zh/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [Odysseys: Benchmarking Web Agents on Realistic Long Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2604-24964/) — 2026-04-27
  Introduces Odysseys, a live-web benchmark of long, multi-site tasks derived from browsing sessions. Graded task rubrics and a rubric-score-per-step measure evaluate both partial progress and trajectory efficiency.
- [SOLAR-RL: Semi-Online Long-horizon Assignment Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2604-22558/) — 2026-04-24
  SOLAR-RL trains GUI navigation agents by reconstructing rollout candidates from static data and assigning step rewards that reflect trajectory quality.
- [LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent](https://awesomecua.com/zh/resources/url-4395ff8522cd77109b83/) — 2026-04-20
  Training-free GUI agent that indexes screen elements via icon detection and OCR, checks each step with multi-level reflection and recovers by fallback clicks or rollback; introduces LongGUIBench, tasks over 15 steps.
- [WebUncertainty: Dual-Level Uncertainty Driven Planning and Reasoning For Autonomous Web Agent](https://awesomecua.com/zh/resources/arxiv-2604-17821/) — 2026-04-20
  WebUncertainty adapts planning mode to task uncertainty and guides action-level tree search with confidence-derived uncertainty estimates. Its evaluations examine autonomous execution of dynamic, long-horizon web tasks on WebArena and WebVoyager.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [CocoaBench: Evaluating Unified Digital Agents in the Wild](https://awesomecua.com/zh/resources/arxiv-2604-11201/) — 2026-04-13
  Introduces CocoaBench, a benchmark for unified digital agents on long-horizon tasks combining vision, search, and coding, including capabilities related to GUI automation.
- [GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents](https://awesomecua.com/zh/resources/arxiv-2604-07429/) — 2026-04-08
  Introduces GameWorld, a browser-game benchmark that evaluates multimodal agents through keyboard and mouse controls or semantic actions using outcome checks.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.com/zh/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [GUIDE: Interpretable GUI Agent Evaluation via Hierarchical Diagnosis](https://awesomecua.com/zh/resources/arxiv-2604-04399/) — 2026-04-06
  GUIDE evaluates GUI trajectories by segmenting them into subtasks, diagnosing each segment, and aggregating structured findings into a task verdict. It tests diagnostic judgments on e-commerce, web-agent and Android-control traces.
- [The Art of Building Verifiers for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2604-06240/) — 2026-04-05
  Describes a web-trajectory verifier built around structured rubrics, separate process and outcome judgments, and explicit treatment of uncontrollable failures. CUAVerifierBench supplies human labels for evaluating these choices and screenshot-based context management.
- [AgentHazard: A Benchmark for Evaluating Harmful Behavior in Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2604-02947/) — 2026-04-03
  Introduces AgentHazard, a benchmark of harmful multi-step behavior by computer-use agents acting through tools, files, and execution environments.
- [When Users Change Their Mind: Evaluating Interruptible Agents in Long-Horizon Web Navigation](https://awesomecua.com/zh/resources/arxiv-2604-00892/) — 2026-04-01
  Introduces InterruptBench, a WebArena-Lite-derived benchmark that tests how long-horizon web-navigation agents handle mid-task user additions, revisions, and retractions.
- [Vision2Web: A Hierarchical Benchmark for Visual Website Development with Agent Verification](https://awesomecua.com/zh/resources/arxiv-2603-26648/) — 2026-03-27
  Introduces Vision2Web, a benchmark for website development from images, spanning UI-to-code, multi-page frontend and full-stack tasks, with a GUI agent verifier and VLM-based judge.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.com/zh/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.com/zh/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [AndroTMem: From Interaction Trajectories to Anchored Memory in Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-18429/) — 2026-03-19
  Introduces AndroTMem-Bench for Android tasks whose later actions depend on earlier UI states. Anchored State Memory retains causally linked intermediate states for subgoal-specific retrieval and evaluates them against full-history and summary-based memory.
- [Hybrid Self-evolving Structured Memory for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-10291/) — 2026-03-11
  Introduces HyMEM, a graph-based memory for GUI agents that links symbolic task knowledge with trajectory embeddings and refreshes working memory during computer-use tasks.
- [STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks](https://awesomecua.com/zh/resources/arxiv-2603-05294/) — 2026-03-05
  Introduces STRUCTUREDAGENT, a web-agent planning framework that interleaves execution with dynamic AND/OR trees, supporting node repair and exploration of alternative plans.
- [M$^2$: Dual-Memory Augmentation for Long-Horizon Web Agents via Trajectory Summarization and Insight Retrieval](https://awesomecua.com/zh/resources/arxiv-2603-00503/) — 2026-02-28
  Introduces M², a training-free memory framework for long-horizon web agents that summarizes interaction history and retrieves task guidance from an offline insight bank.
- [IntentCUA: Learning Intent-level Representations for Skill Abstraction and Multi-Agent Planning in Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2602-17049/) — 2026-02-19
  IntentCUA coordinates planner and critic agents through shared intent-aligned memory, retrieving reusable skills for long-horizon automation across desktop applications.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.com/zh/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions.
- [HiPER: Hierarchical Reinforcement Learning with Explicit Credit Assignment for Large Language Model Agents](https://awesomecua.com/zh/resources/arxiv-2602-16165/) — 2026-02-18
  HiPER trains interactive LLM agents with separate subgoal planning and multi-step execution, assigning reinforcement-learning credit at both levels.
- [ICA: Information-Aware Credit Assignment for Visually Grounded Long-Horizon Information-Seeking Agents](https://awesomecua.com/zh/resources/arxiv-2602-10863/) — 2026-02-11
  Information-Aware Credit Assignment scores intermediate information gathered by web agents, using rendered webpage snapshots to compare evidence across trajectories.
- [LHAW: Controllable Underspecification for Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2602-10525/) — 2026-02-11
  LHAW generates underspecified variants of long-horizon workflow tasks and uses agent trials to evaluate when missing information requires clarification.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.com/zh/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [OS-Marathon: Benchmarking Computer-Use Agents on Vast-Horizon, Repetitive Tasks](https://awesomecua.com/zh/resources/arxiv-2601-20650/) — 2026-01-28
  Introduces OS-Marathon to evaluate long repetitive computer-use workflows whose execution grows with the amount of input data. It studies failure accumulation under task decomposition and GraphDemo, which adapts agents using a demonstration of the recurring workflow.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.com/zh/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://awesomecua.com/zh/resources/arxiv-2601-11868/) — 2026-01-17
  Terminal-Bench 2.0 benchmarks agents on 89 workflow-inspired tasks in computer terminal environments, with a distinct environment, human solution and verification tests for each task.
- [ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution](https://awesomecua.com/zh/resources/arxiv-2601-07262/) — 2026-01-12
  ColorBrowserAgent converts human feedback into reusable website knowledge and uses that knowledge to guide progressive context summaries. It evaluates the resulting memory and adaptation mechanisms on long browser workflows.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.com/zh/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](https://awesomecua.com/zh/resources/arxiv-2512-19432/) — 2025-12-22
  Introduces long mobile workflows that combine agent-user interaction, cross-application tasks, and MCP-based tool access.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.com/zh/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.com/zh/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [STEP: Success-Rate-Aware Trajectory-Efficient Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2511-13091/) — 2025-11-17
  STEP allocates RL sampling by task success rate and trains on individual steps from interaction trajectories, with evaluations on OSWorld and AndroidWorld.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.com/zh/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [ColorAgent: Building A Robust, Personalized, and Interactive OS Agent](https://awesomecua.com/zh/resources/arxiv-2510-19386/) — 2025-10-22
  Presents ColorAgent, an operating system agent for long-horizon user instructions, trained with step-wise RL and self-evolving training and evaluated on AndroidWorld and AndroidLab.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [Agent+P: Guiding UI Agents via Symbolic Planning](https://awesomecua.com/zh/resources/arxiv-2510-06042/) — 2025-10-07
  Guides UI agents with symbolic planning over a UI transition graph initialized from app-code analysis and updated through online exploration, with evaluation on AndroidWorld.
- [Scaling Agents for Computer Use](https://awesomecua.com/zh/resources/arxiv-2510-02250/) — 2025-10-02
  Introduces Behavior Judge, which converts execution trajectories into behavior narratives and compares multiple candidate rollouts. Experiments examine this selection approach on OSWorld, WindowsAgentArena and AndroidWorld.
- [Recon-Act: A Self-Evolving Multi-Agent Browser-Use System via Web Reconnaissance, Tool Generation, and Task Execution](https://awesomecua.com/zh/resources/arxiv-2509-21072/) — 2025-09-25
  Introduces Recon-Act, a browser-use framework that compares failed and successful web trajectories to create reusable tools for planning and executing long-horizon website tasks.
- [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.com/zh/resources/arxiv-2509-15738/) — 2025-09-19
  GUI-ReWalk begins with stochastic interface exploration and then infers goals to generate coherent action trajectories. It supports long-horizon workflows across applications and studies training on the resulting data using grounding and navigation benchmarks.
- [Instruction Agent: Enhancing Agent with Expert Demonstration](https://awesomecua.com/zh/resources/arxiv-2509-07098/) — 2025-09-08
  Introduces Instruction Agent, a GUI agent that follows instructions extracted from one expert demonstration and uses verification and backtracking to handle interruptions.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.com/zh/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.com/zh/resources/arxiv-2509-02444/) — 2025-09-02
  Describes a mobile-agent stack combining region-based coordinate correction, hierarchical task planning, multi-agent voting, and reuse of successful interaction traces.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.com/zh/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents](https://awesomecua.com/zh/resources/arxiv-2508-21475/) — 2025-08-29
  Introduces MMSearch-Plus, a multimodal browsing benchmark with iterative image-text search, and an agent framework that marks and crops images for targeted retrieval.
- [OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows](https://awesomecua.com/zh/resources/arxiv-2508-09124/) — 2025-08-12
  Introduces OdysseyBench for evaluating long-horizon workflows across office applications, plus HomerAgents to generate tasks from environment exploration and dialogue synthesis.
- [VeriWeb: Verifiable Long-Chain Web Benchmark for Agentic Information-Seeking](https://awesomecua.com/zh/resources/arxiv-2508-04026/) — 2025-08-06
  Introduces VeriWeb, a benchmark of long-chain web information-seeking tasks with verifiable subtasks and a complete human-annotated trajectory for each task.
- [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](https://awesomecua.com/zh/resources/arxiv-2508-01330/) — 2025-08-02
  NaturalGAIA builds verifiable long-horizon GUI tasks from human interaction intents while separating causal task structure from its verbal description. Its LightManus-Jarvis framework divides dynamic planning and context management from execution based on visual and structural interface information.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.com/zh/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [Mind2Web 2: Evaluating Agentic Search with Agent-as-a-Judge](https://awesomecua.com/zh/resources/arxiv-2506-21506/) — 2025-06-26
  Introduces Mind2Web 2, 130 long-horizon tasks requiring live web browsing and information synthesis, plus an Agent-as-a-Judge framework for grading answers and sources.
- [AgentSynth: Scalable Task Generation for Generalist Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-14205/) — 2025-06-17
  AgentSynth composes easily generated subtasks into longer computer-use tasks and trajectories with adjustable difficulty. Its evaluation uses the number of subtasks to probe how agent success changes as task complexity grows.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.com/zh/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.com/zh/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [Thinking vs. Doing: Agents that Reason by Scaling Test-Time Interaction](https://awesomecua.com/zh/resources/arxiv-2506-07976/) — 2025-06-09
  Test-Time Interaction scales the interaction horizon so web agents can explore, backtrack and revise plans within a rollout. Its online reinforcement-learning curriculum adjusts rollout lengths and is evaluated on WebVoyager and WebArena.
- [WebChoreArena: Evaluating Web Browsing Agents on Realistic Tedious Web Tasks](https://awesomecua.com/zh/resources/arxiv-2506-01952/) — 2025-06-02
  Introduces WebChoreArena, 532 web chores built on WebArena environments to evaluate agents’ retention of page information, calculation, and tracking across pages.
- [VideoCAD: A Dataset and Model for Learning Long-Horizon 3D CAD UI Interactions from Video](https://awesomecua.com/zh/resources/arxiv-2505-24838/) — 2025-05-30
  Introduces synthetic CAD interaction videos, a model for learning interface actions from video, and evaluation tasks for spatial and long-horizon reasoning.
- [SPA-RL: Reinforcing LLM Agents via Stepwise Progress Attribution](https://awesomecua.com/zh/resources/arxiv-2505-20732/) — 2025-05-27
  Introduces SPA, a reward redistribution method for multi-step LLM agents that estimates each action’s contribution to task completion; Webshop is among its evaluations.
- [ARPO:End-to-End Policy Optimization for GUI Agents with Experience Replay](https://awesomecua.com/zh/resources/arxiv-2505-16282/) — 2025-05-22
  ARPO extends group-relative policy optimization with a replay buffer that reuses successful GUI trajectories across training iterations. It filters tasks using baseline performance and compares end-to-end reinforcement learning with offline preference optimization on OSWorld.
- [MedBrowseComp: Benchmarking Medical Deep Research and Computer Use](https://awesomecua.com/zh/resources/arxiv-2505-14963/) — 2025-05-20
  Introduces MedBrowseComp, a benchmark of human-curated, multi-hop medical questions for agents retrieving and synthesizing facts from live knowledge bases in a computer-use setting.
- [Deep Research Bench: Evaluating AI Web Research Agents](https://awesomecua.com/zh/resources/arxiv-2506-06287/) — 2025-05-06
  Introduces Deep Research Bench, 89 multi-step web research tasks and a frozen collection of scraped pages for evaluating search agents and their traces over time.
- [OSUniverse: Benchmark for Multimodal GUI-navigation AI Agents](https://awesomecua.com/zh/resources/arxiv-2505-03570/) — 2025-05-06
  Introduces OSUniverse, a desktop GUI benchmark spanning precise clicks through multistep and multiapplication tasks. It provides both manual scoring and an automated validation mechanism.
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://awesomecua.com/zh/resources/arxiv-2504-10445/) — 2025-04-14
  RealWebAssist evaluates web assistance through sequences of instructions collected from real users across multiple websites. It tests intent interpretation, user-specific routines, long-term context, and visual grounding when instructions are ambiguous or evolve during interaction.
- [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2503-09572/) — 2025-03-12
  Separates planning from execution and creates synthetic plan annotations for training agents on extended web-navigation tasks.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.com/zh/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://awesomecua.com/zh/resources/arxiv-2412-14161/) — 2024-12-18
  Simulates a software-company workplace to evaluate agents on professional tasks involving websites, programs, files, and coworker communication.
- [WebPilot: A Versatile and Autonomous Multi-Agent System for Web Task Execution with Strategic Exploration](https://awesomecua.com/zh/resources/arxiv-2408-15978/) — 2024-08-28
  WebPilot separates global subtask planning from local Monte Carlo tree search during web execution. It continually refines the high-level plan and adapts local search to uncertain transitions and incomplete observations, evaluated on WebArena and MiniWoB++.
- [OfficeBench: Benchmarking Language Agents across Multiple Applications for Office Automation](https://awesomecua.com/zh/resources/arxiv-2407-19056/) — 2024-07-26
  Evaluates language agents on office workflows requiring information integration, long-term planning, and switching between applications.
- [MMInA: Benchmarking Multihop Multimodal Internet Agents](https://awesomecua.com/zh/resources/arxiv-2404-09992/) — 2024-04-15
  Evaluates multimodal agents on compositional tasks across changing websites and studies replaying prior trajectories as memory support.
- [SheetAgent: Towards A Generalist Agent for Spreadsheet Reasoning and Manipulation via Large Language Models](https://awesomecua.com/zh/resources/arxiv-2403-03636/) — 2024-03-06
  Introduces SheetRM, a benchmark of long-horizon spreadsheet tasks, and SheetAgent, an LLM agent that plans, retrieves information and reflects while manipulating spreadsheets.
- [Exposing Limitations of Language Model Agents in Sequential-Task Compositions on the Web](https://awesomecua.com/zh/resources/arxiv-2311-18751/) — 2023-11-30
  CompWoB adds 50 composed web-automation tasks to study generalization from simpler interactions. The paper compares prompted and fine-tuned agents, balances task training data, and probes sensitivity to changes in instruction order.
- [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://awesomecua.com/zh/resources/arxiv-2307-13854/) — 2023-07-25
  Introduces reproducible web environments with task-completion checks for evaluating autonomous web agents.
- [AppBuddy: Learning to Accomplish Tasks in Mobile Apps via Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2106-00133/) — 2021-05-31
  Introduces AppBuddy, an RL training platform and task suite for mobile apps where agents use on-screen element states and tap or type to complete multi-step tasks.

## 评测基准

- [AssistantBench](https://awesomecua.com/zh/resources/github-oriyor-assistantbench/) — Date not recorded
  AssistantBench evaluates web agents on realistic, time-consuming tasks. Its project repository links to the task dataset and submission leaderboard.
- [Bond Underwriting Agent Benchmark](https://awesomecua.com/zh/resources/github-vitoworleone-bond-underwriting-agent-benchmark/) — Date not recorded
  Chinese vertical long-horizon evaluation benchmark testing agents on multi-step financial bond-underwriting document and web workflows.
- [BrowseComp](https://awesomecua.com/zh/resources/component-openai-simple-evals-browsecomp/) — Date not recorded
  OpenAI's 1,266-question benchmark for browsing agents, whose short, verifiable answers require persistent search and navigation across many websites and are graded by a model judge.
- [ColorBench](https://awesomecua.com/zh/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [FlashAdventure](https://awesomecua.com/zh/resources/github-ahnjaewoo-flashadventure/) — Date not recorded
  FlashAdventure benchmarks GUI agents on solving complete story arcs across 34 Flash point-and-click adventure games requiring long-term memory.
- [GUITestBench](https://awesomecua.com/zh/resources/github-adam-bjtu-guitestbench/) — Date not recorded
  GUITestBench evaluates Android agents on multistep app defect discovery, using navigation and triggering checks alongside a judge model.
- [Gym-Anything](https://awesomecua.com/zh/resources/github-cmu-l3-gym-anything/) — Date not recorded
  Runtime and CUA-World task suite that turn real applications on Ubuntu, Windows 11, Android and macOS into screen-observing, mouse-and-keyboard agent environments with setup scripts and program verifiers.
- [LongPuzzleBench](https://awesomecua.com/zh/resources/github-bingozhang-verapraxis-longpuzzlebench/) — Date not recorded
  LongPuzzleBench evaluates GUI and computer-use agents on long-horizon visual puzzle games requiring multi-step spatial reasoning.
- [LPS-Bench](https://awesomecua.com/zh/resources/github-tychenn-lps-bench/) — Date not recorded
  LPS-Bench benchmarks the safety awareness of computer-use agents during long-horizon planning across benign and adversarial execution scenarios.
- [MacArena](https://awesomecua.com/zh/resources/github-macpaw-macarena/) — Date not recorded
  MacArena benchmarks computer-use agents in an online, reproducible macOS virtual-machine environment across multi-app desktop tasks.
- [MemGUI-Bench](https://awesomecua.com/zh/resources/github-lgy0404-memgui-bench/) — Date not recorded
  Memory-centric Android benchmark of 128 tasks across 26 apps, run in Dockerized emulators on a MobileWorld-style runtime and judged by MemGUI-Eval, an LLM evaluator reporting pass@k and memory metrics.
- [Mind2Web 2](https://awesomecua.com/zh/resources/github-osu-nlp-group-mind2web-2/) — Date not recorded
  Long-horizon agentic web search benchmark whose Agent-as-a-Judge framework scores time-varying, citation-backed answers, with evaluation scripts for its dev and test sets.
- [MMInA](https://awesomecua.com/zh/resources/github-shulin16-mmina/) — Date not recorded
  Multimodal web tasks in a WebArena-based environment that chain from 1 to 10 hops across sites such as a shopping store and Wikipedia, testing long-chain reasoning.
- [Mobile-Eval-E task definitions](https://awesomecua.com/zh/resources/url-342b081c3668a8bbe155/) — Date not recorded
  Task definitions for Mobile-Agent-E’s long-horizon, multi-app Android evaluation, packaged as a 25-record test split with rubrics and human-reference operation strings.
- [MyPCBench](https://awesomecua.com/zh/resources/github-ljang0-mypcbench/) — Date not recorded
  A Linux desktop benchmark with 184 tasks spanning seeded web apps and office software, using a VM runner and rubric-based grading.
- [Odysseys](https://awesomecua.com/zh/resources/github-ljang0-odysseys/) — Date not recorded
  200 long-horizon web tasks drawn from real browsing sessions, run on the live Internet in Chrome through the OSWorld runner and scored per rubric item by an LLM judge over the trajectory's screenshots and actions.
- [OpenAgentSafety](https://awesomecua.com/zh/resources/github-open-agent-safety-openagentsafety/) — Date not recorded
  A benchmark for agent safety in multi-step simulations involving browser, filesystem, terminal and messaging tools. It tests responses to ambiguous, conflicting and adversarial instructions.
- [OS-Map](https://awesomecua.com/zh/resources/github-os-copilot-os-map/) — Date not recorded
  An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.
- [OSWorkerBench](https://awesomecua.com/zh/resources/url-c8c3d4ef20e68086a812/) — Date not recorded
  A desktop GUI-agent benchmark with 100 office tasks spanning 17 business tracks and 41 applications. It releases task and demonstration tables for evaluation with the UI-Mate harness.
- [OSWorld 2.0](https://awesomecua.com/zh/resources/github-xlang-ai-osworld-v2/) — Date not recorded
  OSWorld 2.0 benchmarks computer-use agents on long-horizon desktop workflows with updated task suites, trajectory viewers, and container sandboxes.
- [RLG-ALE](https://awesomecua.com/zh/resources/url-0596dd7e97fd30abaadc/) — Date not recorded
  RLG-ALE evaluates mobile GUI agents on inspectable Android tasks. Its page shows sample episodes with prompts, screenshots, evaluation records, and resettable environments.
- [UI-NEXUS](https://awesomecua.com/zh/resources/github-starwalkin-ui-nexus/) — Date not recorded
  Compositional mobile-agent benchmark: 100 task templates chaining actions across local utility apps on an AndroidWorld-based emulator and online Chinese and English service apps, with emulator state-setup tooling.
- [WeaveBench](https://awesomecua.com/zh/resources/github-weavebench-weavebench/) — Date not recorded
  WeaveBench evaluates computer-use agents on long-horizon real-world workflows across hybrid GUI, web, and programmatic tool interfaces.
- [WebsiteBench](https://awesomecua.com/zh/resources/github-tiger-ai-lab-websitebench/) — Date not recorded
  Website reconstruction benchmark: agents explore a production-level site through a browser, rebuild a full-stack version, and are scored by hidden functional and visual test cases across 70 tasks.
- [WebWalker](https://awesomecua.com/zh/resources/github-alibaba-nlp-webwalker/) — Date not recorded
  Benchmark and multi-agent framework for evaluating large language models on multi-step web traversal and deep information-seeking tasks.
- [WildClawBench](https://awesomecua.com/zh/resources/github-internlm-wildclawbench/) — Date not recorded
  WildClawBench evaluates agents on 60 tasks in a live tool environment that includes browser use, email, files and coding. It releases evaluation code and links to task data and trajectories.

## 数据集

- [AgentSynth tasks and trajectories](https://awesomecua.com/zh/resources/url-58a209f2b3b970916396/) — Date not recorded
  Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.
- [LPS-Bench](https://awesomecua.com/zh/resources/url-625bd97c7aa32cf05833/) — Date not recorded
  A dataset for evaluating safety across computer-use agent trajectories, with 570 base cases and 40 skill variants covering benign and adversarial tasks.
- [Mind2Web 2 task data and judge scripts](https://awesomecua.com/zh/resources/url-4f4c4f0bf0cec93c59d1/) — Date not recorded
  Auto-gated Hub release of Mind2Web 2: dev and test task CSVs for long-horizon agentic web search, plus 130 per-task Python evaluation scripts that act as its judge agents.
- [OSWorld 2.0 task classes](https://awesomecua.com/zh/resources/url-1c4a0389ace7c5cb8a4b/) — Date not recorded
  Gated Hub release of the OSWorld 2.0 benchmark's Python task classes, which hold task setup and evaluator logic kept out of the public code to limit leakage and are pinned per benchmark release.
- [OSWorld 2.0 trajectories](https://awesomecua.com/zh/resources/url-3b4e6c30e1d095c22771/) — Date not recorded
  XLang's gated release of OSWorld 2.0 agent runs: 21 ZIP result archives named by model and run settings, plus per-task trajectory JSONL, step screenshots, results and logs for seven model runs.
- [VeriGUI](https://awesomecua.com/zh/resources/url-8477ada5b7de1d399c9d/) — Date not recorded
  VeriWeb dataset of 302 web information-seeking tasks, with annotated subtasks, human action logs, and execution videos for evaluating long-chain agents.

## 模型

- [CODA-PLANNER-TARS-32B](https://awesomecua.com/zh/resources/url-cf16d0a4a05ea7270ffa/) — Date not recorded
  CODA-PLANNER-TARS-32B is a GUI agent planner checkpoint trained for scientific applications and deployed alongside a specialist executor in ScienceBoard.
- [Mano-CUA-2.0-4B-MLX-8bit](https://awesomecua.com/zh/resources/url-430e47e1ca9f3b2a302f/) — Date not recorded
  An MLX-quantized Mano-CUA model for Apple Silicon that reads screenshots and task instructions to produce structured GUI actions.
- [Plan-and-Act Planner 70B](https://awesomecua.com/zh/resources/url-3932d69c6b6f9b2a7ba8/) — Date not recorded
  The planner component of Plan-and-Act, generating structured high-level plans that an executor turns into web actions.

## 工程与产业

- [A-MEM](https://awesomecua.com/zh/resources/github-agiresearch-a-mem/) — Date not recorded
  A-MEM implements a Zettelkasten-inspired dynamic memory architecture that links and evolves structured episodic notes for LLM agents.
- [AgentGym-RL](https://awesomecua.com/zh/resources/github-woooodyy-agentgym-rl/) — Date not recorded
  A reinforcement-learning framework for multi-turn agents that includes WebArena navigation tasks and a method for increasing interaction length during training.
- [agentmemory](https://awesomecua.com/zh/resources/github-rohitg00-agentmemory/) — Date not recorded
  agentmemory provides persistent cross-session memory and MCP integration for coding and computer-use agents including Claude Code, Codex, and OpenClaw.
- [AgentProg](https://awesomecua.com/zh/resources/github-mobilellm-agentprog/) — Date not recorded
  Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.
- [AgentSynth task-generation pipeline](https://awesomecua.com/zh/resources/github-sunblaze-ucb-agentsynth/) — Date not recorded
  Generates synthetic computer-use tasks and records trajectories in OSWorld desktop environments and InSTA browser environments.
- [AndroTMem inference and evaluation code](https://awesomecua.com/zh/resources/github-cvc2233-androtmem/) — Date not recorded
  A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.
- [ARPO training framework](https://awesomecua.com/zh/resources/github-jia-lab-research-arpo/) — Date not recorded
  Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.
- [Codex Idle Resume](https://awesomecua.com/zh/resources/github-yaro-elipox-codex-idle-resume/) — Date not recorded
  Automatically resumes interrupted macOS Codex Computer Use tasks after system idle or rate-limit cooldowns.
- [ColorBrowserAgent](https://awesomecua.com/zh/resources/github-madeagents-browser-agent/) — Date not recorded
  A browser agent for long web tasks that compresses progress into summaries and incorporates human supplied site knowledge to guide later actions.
- [E2-Mem](https://awesomecua.com/zh/resources/github-jianminya-e2mem/) — Date not recorded
  E2-Mem is an episodic-event hierarchical memory framework for long-horizon web agents evaluated on WebArena.
- [ENVS (Environment-Native Verified Search)](https://awesomecua.com/zh/resources/github-artysicistz-envs/) — Date not recorded
  ENVS is a post-training and verified tree-search pipeline for long-horizon GUI agents operating in live desktop and web environments.
- [Eric Task Master](https://awesomecua.com/zh/resources/github-npcworkspace-cmyk-eric-task-master/) — Date not recorded
  Durable Playwright and Chrome task runner that keeps long-horizon browser jobs running after the initiating agent session exits.
- [Ghost in the Minecraft (GITM)](https://awesomecua.com/zh/resources/github-opengvlab-gitm/) — Date not recorded
  Ghost in the Minecraft (GITM) integrates LLMs with text-based knowledge and memory to complete the full Minecraft technology tree.
- [Gobii Platform](https://awesomecua.com/zh/resources/github-gobii-ai-gobii-platform/) — Date not recorded
  Self-hostable platform for always-on agents based on browser-use, adding headed browsers, persistent profiles, proxy-aware routing, schedules and event triggers.
- [GUI Exploration Lab](https://awesomecua.com/zh/resources/github-summoneryhl-gelab-engine/) — Date not recorded
  A synthetic GUI environment with configurable screens, icons and navigation graphs for training and evaluating agents on screen navigation.
- [GUI-Rise](https://awesomecua.com/zh/resources/github-leon022-gui-rise-code/) — Date not recorded
  A GUI navigation agent that combines stepwise reasoning with history summarization; its repository provides supervised training, reinforcement learning, and evaluation instructions.
- [HIPPO Agent](https://awesomecua.com/zh/resources/github-wadang-muscle-mem-agent/) — Date not recorded
  A computer-use agent for multistep GUI tasks that stores task facts and progress in working memory and combines planning, grounding, and completion checks.
- [Hosp2MES-Agent](https://awesomecua.com/zh/resources/github-ctrl-cv-master-hosp2mes-agent-public/) — Date not recorded
  Hosp2MES-Agent is a long-horizon browser GUI agent for executing multi-page Manufacturing Execution System (MES) workflows with state verification.
- [JARVIS-1](https://awesomecua.com/zh/resources/github-craftjarvis-jarvis-1/) — Date not recorded
  JARVIS-1 is an open-world multimodal Minecraft agent with episodic multimodal memory and goal-conditioned keyboard/mouse control.
- [LongHorizon-Harness](https://awesomecua.com/zh/resources/github-amap-ml-longhorizon-harness/) — Date not recorded
  LongHorizon-Harness wraps desktop and CLI agents in a persistent plan-act-verify-recover loop for multi-hour autonomous computer-use workflows.
- [LongHorizonUI](https://awesomecua.com/zh/resources/github-kane2kang-longhorizonui/) — Date not recorded
  Code for the LongHorizonUI Android agent: OCR plus OmniParser icon detection yields numbered element boxes for an LLM, and failed taps fall back from element index to relative and absolute points with rollback.
- [Mem0](https://awesomecua.com/zh/resources/github-mem0ai-mem0/) — Date not recorded
  Mem0 provides a scalable long-term memory layer for AI agents that extracts, consolidates, and retrieves user and session facts.
- [MemGUI-Agent](https://awesomecua.com/zh/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [Memlayer](https://awesomecua.com/zh/resources/github-divagr18-memlayer/) — Date not recorded
  Memlayer is a plug-and-play memory layer that extracts facts, builds knowledge graphs, and retrieves tiered context for LLM agents.
- [MemMachine](https://awesomecua.com/zh/resources/github-memmachine-memmachine/) — Date not recorded
  MemMachine is an open-source memory layer for AI agents providing working, episodic, and user-profile memory via REST, Python SDK, and MCP.
- [Memori](https://awesomecua.com/zh/resources/github-memorilabs-memori/) — Date not recorded
  Memori captures structured execution facts from agent tool calls and conversations into a relational memory store.
- [OpenAPA](https://awesomecua.com/zh/resources/github-laiye-ai-open-apa/) — Date not recorded
  A computer-use agent for desktop GUI tasks that combines screenshot-based reasoning, visual grounding, planning, and action execution across applications.
- [OpenMemory (LongMemory)](https://awesomecua.com/zh/resources/github-caviraoss-openmemory/) — Date not recorded
  OpenMemory provides local-first temporal graph memory, decay scoring, and MCP integration for long-horizon AI agents.
- [outlive](https://awesomecua.com/zh/resources/github-sy-d-outlive/) — Date not recorded
  Checkpoints and resumes long-running Solari cloud browser sessions across 10-minute container timeouts.
- [Q1X Community Orchestrator](https://awesomecua.com/zh/resources/github-quoralinex-q1x-community-orchestrator/) — Date not recorded
  Provider-neutral, OS-neutral orchestration runtime for long-horizon desktop and browser agent workflows.
- [Recallo](https://awesomecua.com/zh/resources/github-tianqi-bu-recallo/) — Date not recorded
  Recallo is a local-first browser agent with persistent SQLite episodic memory across browsing sessions.
- [ReMe](https://awesomecua.com/zh/resources/github-agentscope-ai-reme/) — Date not recorded
  ReMe is a local-first personal knowledge and procedural memory management framework for autonomous LLM agents.
- [RSIGame](https://awesomecua.com/zh/resources/github-wenyiwu0111-rsigame/) — Date not recorded
  An agentic game-development system that plays generated games, uses screenshots and run evidence to guide revisions, and replays builds to check the changes.
- [SCoR (Sparse Context Reset)](https://awesomecua.com/zh/resources/github-huia711-scor/) — Date not recorded
  Sparse Context Reset (SCoR) framework for preventing context overflow and drift in long-horizon GUI agents.
- [SimpleMem](https://awesomecua.com/zh/resources/github-aiming-lab-simplemem/) — Date not recorded
  SimpleMem provides semantic lossless memory compression and multimodal retrieval for long-horizon LLM and desktop/CLI agents.
- [taskforge](https://awesomecua.com/zh/resources/github-huzjie-taskforge/) — Date not recorded
  taskforge is a long-horizon workflow orchestration engine combining multi-step planning, tool invocation, and GUI state verification.
- [UI-Mate](https://awesomecua.com/zh/resources/github-tencent-ui-mate/) — Date not recorded
  UI-Mate is a desktop GUI agent that uses screenshots and keyboard and mouse actions for tasks across applications. It also supports workflows learned from recorded demonstrations.
- [VISTA](https://awesomecua.com/zh/resources/github-joshhhhhan-vista/) — Date not recorded
  VISTA is a harness for visual game agents that combines game actions with frame inspection and retrievable observation history for extended tasks.
- [WebTactix](https://awesomecua.com/zh/resources/url-40795d2c86388ae89f43/) — Date not recorded
  A web agent that simplifies accessibility trees, explores candidate actions in parallel and stores visited pages in a semantic tree to guide later decisions and recovery.
- [WebThinker](https://awesomecua.com/zh/resources/github-ruc-nlpir-webthinker/) — Date not recorded
  WebThinker empowers large reasoning models to autonomously search, browse webpages, and draft research reports during deep thinking.
- [WMA Web Agent](https://awesomecua.com/zh/resources/github-kyle8581-wma-agents/) — Date not recorded
  A web agent uses a learned world model to predict consequential page changes before choosing an action. The repository includes trajectory processing and inference code.
