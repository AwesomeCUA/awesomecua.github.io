# Planning

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/planning/records.jsonl

## Papers & surveys

- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-22280/) — 2026-10-15
  Uses weak-agent uncertainty to decide when to escalate to a stronger model and monitor its subsequent task execution.
- [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://awesomecua.github.io/resources/arxiv-2610-22200/) — 2026-10-15
  Introduces an open generalist computer-use stack combining visual and programmatic interaction, with model-controlled observation and task-state decisions.
- [Adaptive-Group Process Rewards for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-17710/) — 2026-10-13
  Groups GUI trajectories by subgoal and combines action-level and group-level assessments into intermediate rewards for training agents with sparse task outcomes.
- [HyWe: Unifying Search and Operation for Real-World Hybrid Web Tasks](https://awesomecua.github.io/resources/arxiv-2610-16319/) — 2026-10-12
  Introduces HyWe, which switches between information search and browser operation within one trajectory, alongside a demonstration pipeline and a benchmark of hybrid web tasks.
- [Latent World Action Model for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-14228/) — 2026-10-09
  Replaces future-screenshot generation with a shared latent representation for GUI action selection and action-conditioned transition prediction. An action-aware contrastive objective encourages the transition representation to retain discriminative action-induced changes.
- [DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11707/) — 2026-10-08
  Introduces DeltaReplay, which stores mobile GUI trajectories as transition graphs and decides at each step whether to reuse an action, substitute task-specific parameters, or defer to the base agent. This supports reuse of partially matching experiences without rewriting stored memory.
- [MedImageOSWorld: Benchmarking GUI Agents for Medical Image Consoles](https://awesomecua.github.io/resources/arxiv-2610-04800/) — 2026-10-03
  Evaluates GUI agents in simulated medical-imaging consoles, separately checking workflow completion and acquisition outcomes against hidden anatomical targets.
- [Securing Computer-Use Agents Against Branch Steering Attacks](https://awesomecua.github.io/resources/arxiv-2610-03089/) — 2026-10-02
  Introduces STEER-Bench to study branch-steering attacks that manipulate untrusted web data toward hazardous paths already permitted by an agent’s plan. Its COBRA architecture combines trusted branching plans with advance constraints on the parameters and destinations each branch can use.
- [Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2609-34974/) — 2026-09-28
  Introduces Veer, a runtime defense that changes task-relevant web state when an otherwise valid proposed action would produce an unauthorized consequence. It plans a prospective intervention and grounds and verifies its execution before the base agent continues.
- [LongPuzzleBench: Evaluating GUI Agents on Long-Horizon Visual Puzzles](https://awesomecua.github.io/resources/arxiv-2609-34769/) — 2026-09-28
  LongPuzzleBench evaluates coherent long-horizon planning on persistent visual puzzle boards through native GUI actions. It compares GUI-only and code-assisted agents and uses controlled hints and memory diagnostics to examine decisions that preserve or eliminate future solutions.
- [Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-33304/) — 2026-09-27
  Introduces ExpActivator, which matches the current GUI state to relevant historical states before supplying past actions as guidance. A separate activation rule decides whether a recurring user intent is warranted by the current time and situation or should be withheld.
- [DashAct: A Progressive Diagnostic Benchmark for GUI Agents in Interactive Dashboard Analysis](https://awesomecua.github.io/resources/arxiv-2609-32385/) — 2026-09-26
  Diagnoses dashboard-agent failures by progressively restoring interaction context, next-action support, and visual target information within the same task.
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-30186/) — 2026-09-24
  Separates occasional visual-language planning from frequent lightweight action selection over an accessibility-tree-based action space.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.github.io/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](https://awesomecua.github.io/resources/arxiv-2609-10451/) — 2026-09-09
  JarvisGUI composes typed input-output task transformations into dynamic workflows spanning Android, Windows and Ubuntu devices. Its virtual-environment benchmark tests transfer of intermediate results, shared state and cross-device dependencies.
- [Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-03438/) — 2026-09-03
  CONFLICTGUI evaluates termination under instruction conflicts and mismatches between instructions and interface context. CONFLICTGUARD couples feasibility checks with conditional action modulation to reduce unnecessary execution while tracking normal-task behavior.
- [Discriminative World Models for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [Learning Simple Test-Time Environments for LLM Web Agents](https://awesomecua.github.io/resources/arxiv-2608-29305/) — 2026-08-29
  Introduces Test-Time Environment Decomposition, which uses trial interaction to break complex web observations into simpler modules. A label-free adaptation procedure learns from these sub-environments and studies whether their gains compose in full web tasks.
- [LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-25777/) — 2026-08-26
  Introduces LocalLSTC, a training-free control architecture that maintains persistent task state and uses it to form short execution commitments. Outcomes feed back into that state for progress checks, recovery, and termination in locally deployed desktop agents.
- [Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions](https://awesomecua.github.io/resources/arxiv-2608-14132/) — 2026-08-14
  Introduces intention understanding, prediction, and confirmed execution tasks over mobile GUI trajectories, with a proactive agent combining personalized intention models and experience-guided actions.
- [From Monoliths to Swarms: A Study of Attack Surface Evolution in the Transition to Multi-Agent Web Systems](https://awesomecua.github.io/resources/arxiv-2608-00202/) — 2026-07-31
  Categorizes structural attack surfaces that emerge when single-agent browser systems are decomposed into multi-agent web workflows.
- [Why Are GUI Agents Correct but Late? Decode on the Decision-Time Critical Path, Tested with Pre-Compiled Policy Trees](https://awesomecua.github.io/resources/arxiv-2607-28399/) — 2026-07-30
  Introduces Adaptive Anticipatory Policy Trees, which precompute guarded actions and deadlines during idle periods so transient GUI events can be handled without new text generation. Paired experiments examine when this prepared execution helps and when reactive control remains preferable.
- [Falsifiable Commitment Planning for Self-Correcting Web Agents](https://awesomecua.github.io/resources/arxiv-2607-24167/) — 2026-07-27
  Introduces FCPAgent, which attaches confirming and falsifying evidence to each skill-grounded plan step. A plan–test–repair loop checks actions and observations, then localizes contradictions so execution, skills, or plans can be revised at the appropriate level.
- [Beyond Sequential Interaction: Benchmarking Parallel Execution and Coordination for GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-22689/) — 2026-07-17
  Introduces ParaGUIBench, with tasks and efficiency measurements for coordinated GUI agents operating separate desktop instances over a shared file system. Its ParaGUI planner-worker system decomposes tasks and dispatches concurrent subtasks for comparison with serial execution.
- [Plover: Steering GUI Agents through Plan-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2607-15193/) — 2026-07-16
  Plover exposes GUI-agent plans and replanning as persistent artifacts that users can inspect and edit during execution. Its planner–executor design supports localized correction through plan edits, language guidance and screenshot-grounded interventions, studied through failure repair and workflow scenarios.
- [HyMobileAgent: Data-Environment Co-Scaling for Efficient GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-14548/) — 2026-07-16
  Combines GUI perception data, instructional videos, real and simulated devices, and planning with reflection to develop a mobile agent.
- [KnowAct-GUIClaw: Know Deeply, Act Perfectly, Personal GUI Assistant with Self-Evolving Memory and Skill](https://awesomecua.github.io/resources/arxiv-2607-12625/) — 2026-07-14
  KnowAct-GUIClaw combines a host planner with pluggable GUI subagents, attributable experience memory and an evolving skill library. It uses user profiles and feedback for task decomposition and evaluates transfer across Android, iOS, HarmonyOS and Windows.
- [StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure](https://awesomecua.github.io/resources/arxiv-2607-11388/) — 2026-07-13
  StructAgent maintains compact task state and regulates long-horizon execution through verified transitions and progress checkpoints. Its workflow supports evidence-based completion and targeted recovery, with desktop computer-use evaluation and a separate Minecraft extension.
- [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://awesomecua.github.io/resources/arxiv-2606-27330/) — 2026-06-25
  PEEU explores web environments and turns hindsight experience into aligned high-level planning supervision. A hierarchical task-decomposition analysis examines why atomic-skill competence alone does not ensure planning generalization across websites.
- [Skill-Guided Continuation Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-18890/) — 2026-06-17
  Skill-Guided Continuation Distillation first lets a policy reach its own off-trajectory states, then uses skill guidance to collect successful continuations. Mixing those continuations with expert traces supplies supervision for recovery states absent from demonstrations.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.github.io/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.github.io/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [Multi-Agent Computer Use](https://awesomecua.github.io/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [GUI-CIDER: Mid-training GUI Agents via Causal Internalization and Density-aware Exemplar Reselection](https://awesomecua.github.io/resources/arxiv-2605-28534/) — 2026-05-27
  GUI-CIDER turns GUI trajectories into textual planning and causal interface knowledge, reselects exemplars for causal structure and low redundancy, then mid-trains GUI agents on that corpus.
- [Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling](https://awesomecua.github.io/resources/arxiv-2605-21470/) — 2026-05-20
  Agent JIT compilation turns browser task descriptions into validated executable plans containing model calls, tools and parallel work. A cost-based scheduler and pre/postcondition protocol target latency and incorrect tool use in web-agent execution.
- [DocOS: Towards Proactive Document-Guided Actions in GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18048/) — 2026-05-18
  DocOS benchmarks agents that search online documentation and translate procedural instructions into GUI actions in interactive web environments. It separates failures to retrieve useful procedures from failures to ground retrieved instructions into executable actions.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.github.io/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [Web Agents Should Adopt the Plan-Then-Execute Paradigm](https://awesomecua.github.io/resources/arxiv-2605-14290/) — 2026-05-14
  Argues for compiling web tasks into predefined execution graphs before exposing an agent to untrusted runtime content. Its WebArena task analysis identifies typed, semantically complete website tools as a prerequisite and distinguishes this interface proposal from reactive click-level control.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Executable Agentic Memory for GUI Agent](https://awesomecua.github.io/resources/arxiv-2605-12294/) — 2026-05-12
  Executable Agentic Memory stores GUI routines in a knowledge graph built through state-aware exploration and action-group mining. A learned value model guides tree search over this executable memory for retrieval-based planning, with AndroidWorld and efficiency evaluation.
- [WebUncertainty: Dual-Level Uncertainty Driven Planning and Reasoning For Autonomous Web Agent](https://awesomecua.github.io/resources/arxiv-2604-17821/) — 2026-04-20
  WebUncertainty adapts planning mode to task uncertainty and guides action-level tree search with confidence-derived uncertainty estimates. Its evaluations examine autonomous execution of dynamic, long-horizon web tasks on WebArena and WebVoyager.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.github.io/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [WebXSkill: Skill Learning for Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2604-13318/) — 2026-04-14
  WebXSkill pairs parameterized action programs with step-level language guidance, mining reusable skills from synthetic browser-agent traces. A URL-based graph supports retrieval, and deployment alternates between direct program execution and guided native planning.
- [IntentScore: Intent-Conditioned Action Evaluation for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-05157/) — 2026-04-06
  Trains IntentScore on offline desktop GUI interactions to assess candidate actions using both their state relevance and planning intent. The reward model is evaluated as an action reranker for Agent S3 on OSWorld.
- [GUIDE: Resolving Domain Bias in GUI Agents through Real-Time Web Video Retrieval and Plug-and-Play Annotation](https://awesomecua.github.io/resources/arxiv-2603-26266/) — 2026-03-27
  GUIDE retrieves relevant software tutorials through subtitle-based video search, then infers planning and grounding knowledge from consecutive annotated keyframes. It inserts that knowledge into existing GUI-agent modules without parameter updates and evaluates the plug-in on OSWorld.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.github.io/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://awesomecua.github.io/resources/arxiv-2603-22529/) — 2026-03-23
  Ego2Web pairs first-person videos with online tasks that require agents to connect the user’s physical context to web actions. It also evaluates an automatic task judge against human judgments and analyzes failures in video understanding and web execution.
- [ContractSkill: Repairable Contract-Based Skills for Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2603-20340/) — 2026-03-20
  Turns draft web-agent skills into structured executable artifacts that support deterministic checks, fault localization and local repair. VisualWebArena and MiniWoB experiments examine execution and reuse within the same benchmark family.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.github.io/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [SpecOps: A Fully Automated AI Agent Testing Framework in Real-World GUI Environments](https://awesomecua.github.io/resources/arxiv-2603-10268/) — 2026-03-10
  SpecOps divides testing of GUI-based agents into test generation, environment setup, execution and validation handled by specialist agents. Its evaluation spans five real-world agents, including web applications and browser extensions, and measures execution reliability and bug discovery.
- [OSExpert: Computer-Use Agents Learning Professional Skills via Exploration](https://awesomecua.github.io/resources/arxiv-2603-07978/) — 2026-03-09
  Uses GUI-based depth-first exploration to verify elementary software functions, assemble action primitives, and construct curricula of composed skills. OSExpert-Eval examines how the resulting procedural knowledge supports complex computer-use tasks.
- [WebChain: A Large-Scale Human-Annotated Dataset of Real-World Web Interaction Traces](https://awesomecua.github.io/resources/arxiv-2603-05295/) — 2026-03-05
  WebChain aligns human web-interaction trajectories with visual, structural and action data for agent training. It also introduces WebChainBench and a mid-training approach that separates spatial grounding from planning.
- [ActionEngine: From Reactive to Programmatic Web Agents via State Machine Memory](https://awesomecua.github.io/resources/arxiv-2602-20502/) — 2026-02-24
  ActionEngine explores web applications to build an updateable state-machine memory of GUI states, operations and transitions. It generates complete task programs from that memory, using reactive repair to handle changed interfaces or missing knowledge.
- [Computer-Using World Model](https://awesomecua.github.io/resources/arxiv-2602-17365/) — 2026-02-19
  Presents a desktop world model that predicts textual UI changes before synthesizing the next screenshot. It learns from Microsoft Office transitions and is evaluated by letting a frozen agent compare simulated actions before execution.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.github.io/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions rather than recall alone.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.github.io/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [Agent Skills for Large Language Models: Architecture, Acquisition, Security, and the Path Forward](https://awesomecua.github.io/resources/arxiv-2602-12430/) — 2026-02-12
  This survey organizes agent skills by architecture, acquisition, deployment and security, including their role in computer-use systems and GUI grounding. It also proposes a permission and lifecycle governance framework for skill deployment.
- [Agentic Test-Time Scaling for WebAgents](https://awesomecua.github.io/resources/arxiv-2602-12276/) — 2026-02-12
  CATTS allocates additional inference computation when an agent’s action votes show uncertainty. The paper compares voting and arbiter strategies and evaluates this selective scaling on WebArena-Lite, Online-Mind2Web and GoBrowse.
- [WebTestPilot: Agentic End-to-End Web Testing against Natural Language Specification by Inferring Oracles with Symbolized GUI Elements](https://awesomecua.github.io/resources/arxiv-2602-11724/) — 2026-02-12
  WebTestPilot turns natural-language requirements into web test steps with inferred preconditions and postconditions over symbolized GUI elements. A benchmark of bug-injected web applications tests whether these context-aware oracles distinguish application defects from agent mistakes.
- [TreeCUA: Efficiently Scaling GUI Automation with Tree-Structured Verifiable Evolution](https://awesomecua.github.io/resources/arxiv-2602-09662/) — 2026-02-10
  TreeCUA organizes GUI exploration trajectories as reusable trees and balances deeper tasks against broader coverage. Its data pipeline combines action verification, memory-backed recovery and a DPO variant that uses information from adjacent branches.
- [ANCHOR: Branch-Point Data Generation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-07153/) — 2026-02-06
  ANCHOR expands verified desktop demonstrations by generating new tasks at meaningful branch points and executing their instructions. State-aware verification and action filtering refine the resulting trajectories, which are evaluated through fine-tuned agents on OSWorld and WindowsAgentArena.
- [M$^2$-Miner: Multi-Agent Enhanced MCTS for Mobile GUI Agent Data Mining](https://awesomecua.github.io/resources/arxiv-2602-05429/) — 2026-02-05
  M2-Miner uses multi-agent-guided Monte Carlo tree search to collect mobile GUI intent–trajectory pairs. Intent recycling and progressive collector training aim to increase the diversity and usefulness of the mined interaction data.
- [Do Web Agents Investigate Before They Decide?](https://awesomecua.github.io/resources/arxiv-2602-05354/) — 2026-02-05
  Introduces MIRAGE, a web decision benchmark where agents must actively uncover evidence that can contradict the visible context. Separate investigation, reasoning, decision, and hallucination measures diagnose failures beyond reaching the right page.
- [Agent Alpha: Tree Search Unifying Generation, Exploration and Evaluation for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-02995/) — 2026-02-03
  Agent Alpha uses step-level Monte Carlo tree search to reuse successful prefixes and recover from early GUI mistakes. Comparison-based evaluation and diversity-constrained expansion guide the search, with experiments on OSWorld.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.github.io/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.github.io/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.github.io/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [Curiosity Driven Knowledge Retrieval for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2601-19306/) — 2026-01-27
  Uses execution uncertainty to trigger retrieval from application documentation, code, and past trajectories, organizing the results into structured AppCards for Android agent planning.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.github.io/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [CaMeLs Can Use Computers Too: System-level Security for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2601-09923/) — 2026-01-14
  NOVA separates trusted task planning from screen-derived observations by producing a branching plan before execution and resolving runtime values through perception. Its OSWorld study examines security and utility while identifying remaining risks from perception-driven branch steering.
- [ExpSeek: Self-Triggered Experience Seeking for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08605/) — 2026-01-13
  ExpSeek uses step-level entropy signals to decide when a web agent should request experience-based guidance. It supplies guidance tailored to the current step and evaluates the intervention across web-agent benchmarks.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.github.io/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [MobileDreamer: Generative Sketch World Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-04035/) — 2026-01-07
  MobileDreamer predicts post-action GUI states as task-relevant textual sketches with an order-invariant learning objective. Agents use these predictions for lookahead action selection, evaluated on AndroidWorld.
- [Nested Browser-Use Learning for Agentic Information Seeking](https://awesomecua.github.io/resources/arxiv-2512-23647/) — 2025-12-29
  NestBrowse organizes browser actions in a nested framework that separates interaction control from page exploration. It evaluates this design for deep information seeking beyond snippet retrieval and direct URL fetching.
- [MobileWorldBench: Towards Semantic World Modeling For Mobile Agents](https://awesomecua.github.io/resources/arxiv-2512-14014/) — 2025-12-16
  Evaluates semantic world models for mobile interfaces and studies natural-language state transitions as a tool for agent planning.
- [GAIR: GUI Automation via Information-Joint Reasoning and Group Reflection](https://awesomecua.github.io/resources/arxiv-2512-09396/) — 2025-12-10
  Introduces GAIR, which combines information from specialized GUI models through a general-purpose coordinating model. When the available information is insufficient, group reflection sends targeted requests back to the specialists before selecting an operation.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.github.io/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [Learning from Online Videos at Inference Time for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2511-04137/) — 2025-11-06
  This work retrieves online video tutorials and converts them into structured GUI action demonstrations with short objectives. A two-stage selection process supplies a relevant local trajectory as in-context guidance at each execution step.
- [GUI-Rise: Structured Reasoning and History Summarization for GUI Navigation](https://awesomecua.github.io/resources/arxiv-2510-27210/) — 2025-10-31
  Combines structured progress-and-decision reasoning with history summarization to improve cross-domain generalization in GUI navigation agents.
- [OSWorld-MCP: Benchmarking MCP Tool Invocation In Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-24563/) — 2025-10-28
  OSWorld-MCP evaluates how agents choose between GUI operations and MCP tool calls in computer tasks. It combines generated and curated tools, with 158 manually validated tools across seven applications, to examine tool use alongside task completion.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [Hi-Agent: Hierarchical Vision-Language Agents for Mobile Device Control](https://awesomecua.github.io/resources/arxiv-2510-14388/) — 2025-10-16
  Introduces Hi-Agent, jointly training a high-level reasoning model and a low-level mobile action model. Execution feedback supplies a foresight advantage for optimizing subgoal decisions, with evaluations on Android control benchmarks.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [Agent+P: Guiding UI Agents via Symbolic Planning](https://awesomecua.github.io/resources/arxiv-2510-06042/) — 2025-10-07
  Guides UI agents with symbolic planning over a UI transition graph initialized from app-code analysis and updated through online exploration, with evaluation on AndroidWorld.
- [From Imperative to Declarative: Towards LLM-friendly OS Interfaces for Boosted Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-04607/) — 2025-10-06
  Introduces a Declarative Model Interface that maps existing GUIs to access, state and observation primitives while handling low-level interactions. Evaluation uses Word, PowerPoint and Excel on Windows with a GUI-agent baseline.
- [\textsc{GUI-Spotlight}: Adaptive Iterative Focus Refinement for Enhanced GUI Visual Grounding](https://awesomecua.github.io/resources/arxiv-2510-04039/) — 2025-10-05
  GUI-Spotlight trains a grounding model to reason over images and call tools that iteratively narrow its visual focus. The paper evaluates this refinement method on ScreenSpot-Pro after training on 18,500 samples.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [Generalist Scanner Meets Specialist Locator: A Synergistic Coarse-to-Fine Framework for Robust GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-24133/) — 2025-09-29
  GMS pairs a general vision-language scanner that proposes interface regions with a specialist locator that predicts coordinates within them. Hierarchical coarse-to-fine search coordinates the two components for GUI grounding on ScreenSpot-Pro.
- [ProRe: A Proactive Reward System for GUI Agents via Reasoner-Actor Collaboration](https://awesomecua.github.io/resources/arxiv-2509-21823/) — 2025-09-26
  ProRe evaluates GUI task outcomes by having a reasoner assign targeted environment-probing tasks to specialist actors. The additional observations support reward judgments, with separate evaluation of judge accuracy and downstream agent task success.
- [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.github.io/resources/arxiv-2509-15738/) — 2025-09-19
  GUI-ReWalk begins with stochastic interface exploration and then infers goals to generate coherent action trajectories. It supports long-horizon workflows across applications and studies training on the resulting data using grounding and navigation benchmarks.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [InfraMind: A Novel Exploration-based GUI Agentic Framework for Mission-critical Industrial Management](https://awesomecua.github.io/resources/arxiv-2509-13704/) — 2025-09-17
  InfraMind explores industrial management GUIs using virtual-machine snapshots and builds memory for planning and hierarchical state recognition. Its framework also studies knowledge distillation and safety checks on open-source and commercial data-center management platforms.
- [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.github.io/resources/arxiv-2509-02444/) — 2025-09-02
  Describes a mobile-agent stack combining region-based coordinate correction, hierarchical task planning, multi-agent voting, and reuse of successful interaction traces.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.github.io/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.github.io/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [AppAgent-Pro: A Proactive GUI Agent System for Multidomain Information Integration and User Assistance](https://awesomecua.github.io/resources/arxiv-2508-18689/) — 2025-08-26
  Proposes a proactive GUI assistant that gathers information across domains in response to user requests and anticipated information needs.
- [PerPilot: Personalizing VLM-based Mobile Agents via Memory and Exploration](https://awesomecua.github.io/resources/arxiv-2508-18040/) — 2025-08-25
  Introduces PerPilot and the PerInstruct dataset for completing user-specific mobile instructions through memory retrieval, app exploration, and clarification when missing context remains unresolved.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.github.io/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [Mobile-Agent-v3: Fundamental Agents for GUI Automation](https://awesomecua.github.io/resources/arxiv-2508-15144/) — 2025-08-21
  Introduces GUI-Owl models and Mobile-Agent-v3 orchestration, using environment-generated trajectories to support GUI capabilities.
- [OpenCUA: Open Foundations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2508-09123/) — 2025-08-12
  Presents demonstration collection infrastructure, the AgentNet dataset, and a training pipeline for open computer-use models.
- [Cognitive Duality for Adaptive Web Agents](https://awesomecua.github.io/resources/arxiv-2508-05081/) — 2025-08-07
  Introduces CogniWeb, which switches between fast reactive processing and slower deliberative reasoning according to task complexity. WebArena experiments examine this combination of learned behaviors and online planning.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.github.io/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.github.io/resources/arxiv-2508-03923/) — 2025-08-05
  CoAct-1 delegates subtasks between a GUI operator and a programmer that executes Python or Bash. Its OSWorld evaluation studies a hybrid action space in which scripts handle suitable file and data operations while visual interaction handles other steps.
- [Web-CogReasoner: Towards Multimodal Knowledge-Induced Cognitive Reasoning for Web Agents](https://awesomecua.github.io/resources/arxiv-2508-01858/) — 2025-08-03
  Web-CogReasoner separates factual and conceptual web knowledge from procedural reasoning, using a structured curriculum to train a multimodal agent. Web-CogDataset and Web-CogBench support study of these capabilities alongside web-navigation evaluation.
- [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-01330/) — 2025-08-02
  NaturalGAIA builds verifiable long-horizon GUI tasks from human interaction intents while separating causal task structure from its verbal description. Its LightManus-Jarvis framework divides dynamic planning and context management from execution based on visual and structural interface information.
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2507-21953/) — 2025-07-29
  Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution.
- [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.github.io/resources/arxiv-2507-19478/) — 2025-07-25
  MMBench-GUI evaluates interface understanding, element grounding, task automation, and collaboration across six named desktop, mobile, and web platforms. It introduces the Efficiency-Quality Area metric for examining execution efficiency alongside task quality in online GUI automation.
- [OS-MAP: How Far Can Computer-Using Agents Go in Breadth and Depth?](https://awesomecua.github.io/resources/arxiv-2507-19132/) — 2025-07-25
  OS-MAP organizes 416 computer-use tasks across 15 applications by a five-level automation taxonomy and a hierarchy of user demands. The benchmark separates required autonomy from generalization scope to diagnose where agents struggle as task demands increase.
- [ProactiveVA: Proactive Visual Analytics with LLM-Based UI Agent](https://awesomecua.github.io/resources/arxiv-2507-18165/) — 2025-07-24
  Studies proactive assistance in visual-analytics interfaces, using interaction logs to detect support needs and provide context-aware suggestions and guidance.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.github.io/resources/arxiv-2507-05791/) — 2025-07-08
  GTA1 samples multiple action proposals at each GUI step and uses a judge to select among them. A separate grounding model is trained with reinforcement learning to map selected proposals to visual targets, linking planning-time search with click localization.
- [LineRetriever: Planning-Aware Observation Reduction for Web Agents](https://awesomecua.github.io/resources/arxiv-2507-00210/) — 2025-06-30
  LineRetriever uses a language model to select observation lines that matter for upcoming web-navigation actions. It reduces DOM or accessibility-tree context by considering the planning horizon instead of relying solely on semantic similarity.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [Embodied Web Agents: Bridging Physical-Digital Realms for Integrated Agent Intelligence](https://awesomecua.github.io/resources/arxiv-2506-15677/) — 2025-06-18
  Introduces environments that couple 3D physical-world simulations with functional web interfaces. The accompanying benchmark evaluates tasks requiring agents to coordinate online information and physical actions across cooking, navigation and shopping scenarios.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.github.io/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.github.io/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [EconWebArena: Benchmarking Autonomous Agents on Economic Tasks in Realistic Web Environments](https://awesomecua.github.io/resources/arxiv-2506-08136/) — 2025-06-09
  Introduces EconWebArena, a curated benchmark of economic-data tasks requiring live website navigation, multimodal interpretation, and precise extraction. It evaluates visual grounding, planning, and interaction design within multistep workflows.
- [Thinking vs. Doing: Agents that Reason by Scaling Test-Time Interaction](https://awesomecua.github.io/resources/arxiv-2506-07976/) — 2025-06-09
  Test-Time Interaction scales the interaction horizon so web agents can explore, backtrack and revise plans within a rollout. Its online reinforcement-learning curriculum adjusts rollout lengths and is evaluated on WebVoyager and WebArena.
- [BIMgent: Towards Autonomous Building Modeling via Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2506-07217/) — 2025-06-08
  BIMgent plans software-specific workflows and executes GUI actions for building-information modeling. It evaluates multimodal building design and reconstruction tasks in professional authoring software.
- [Scenario-Guided LLM-based Mobile App GUI Testing](https://awesomecua.github.io/resources/arxiv-2506-05079/) — 2025-06-05
  ScenGen organizes mobile GUI testing around business scenarios rather than unrestricted exploration. Five collaborating agents observe the interface, choose and execute actions, check scenario completion, and record operations and runtime bugs.
- [Look Before You Leap: A GUI-Critic-R1 Model for Pre-Operative Error Diagnosis in GUI Automation](https://awesomecua.github.io/resources/arxiv-2506-04614/) — 2025-06-05
  Uses a pre-execution critic and reinforcement training to evaluate proposed GUI actions and provide corrective suggestions before execution.
- [Agent-SAMA: State-Aware Mobile Assistant](https://awesomecua.github.io/resources/arxiv-2505-23596/) — 2025-05-29
  Models mobile application execution as a finite-state machine to support planning, verification, and recovery across interface transitions.
- [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://awesomecua.github.io/resources/arxiv-2505-20660/) — 2025-05-27
  BacktrackAgent adds verification, judgment, and reflection modules to detect erroneous GUI actions and guide recovery. It develops backtracking-oriented training data that includes post-action pages and evaluates task completion and step accuracy on Mobile3M and Auto-UI.
- [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.github.io/resources/arxiv-2505-20013/) — 2025-05-26
  WebCoT turns reflection, look-ahead, branching and rollback procedures into chain-of-thought training rationales. Fine-tuning on these reconstructed trajectories is evaluated for web-agent self-improvement and transfer across navigation tasks.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Unlocking Smarter Device Control: Foresighted Planning with a World Model-Driven Code Execution Approach](https://awesomecua.github.io/resources/arxiv-2505-16422/) — 2025-05-22
  FPWC builds and refines a task-oriented world model before planning mobile-device actions. It executes plans as code and evaluates the approach in simulated environments and on real mobile devices.
- [Building a Stable Planner: An Extended Finite State Machine Based Planning Module for Mobile GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-14141/) — 2025-05-20
  SPlanner models mobile-app functions and configurations with extended finite-state machines, traverses them to construct execution paths, and converts those paths into natural-language plans. A VLM follows these plans to perform GUI actions, with evaluation on AndroidWorld.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.github.io/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [EcoAgent: An Efficient Device-Cloud Collaborative Multi-Agent Framework for Mobile Automation](https://awesomecua.github.io/resources/arxiv-2505-05440/) — 2025-05-08
  EcoAgent splits mobile automation between cloud planning and on-device observation and verification. Compact screen descriptions and feedback reduce communication costs, with evaluation on AndroidWorld.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [WebThinker: Empowering Large Reasoning Models with Deep Research Capability](https://awesomecua.github.io/resources/arxiv-2504-21776/) — 2025-04-30
  Combines iterative web search and link-following with interleaved reasoning and report drafting for deep research. Its reported web explorer retrieves page content through a crawler rather than controlling a visual browser interface.
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.github.io/resources/arxiv-2504-21024/) — 2025-04-23
  WebEvolver trains a co-evolving world model to predict web observations and generate additional agent-training trajectories. The same model supports look-ahead action selection at inference, with evaluation on live web-task benchmarks.
- [InfiGUI-R1: Advancing Multimodal GUI Agents from Reactive Actors to Deliberative Reasoners](https://awesomecua.github.io/resources/arxiv-2504-14239/) — 2025-04-19
  Uses a staged reasoning-focused training framework to move GUI agents from reactive actions toward deliberative planning and recovery.
- [WebRollback: Enhancing Web Agents with Explicit Rollback Mechanisms](https://awesomecua.github.io/resources/arxiv-2504-11788/) — 2025-04-16
  WebRollback gives a web agent an explicit action for returning to an earlier state in its navigation trajectory. It studies this recovery mechanism on two live web-navigation benchmarks under both zero-shot and fine-tuned settings.
- [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.github.io/resources/arxiv-2504-13936/) — 2025-04-15
  ViMo predicts the next mobile-app screenshot after a candidate action by separately modeling graphics and text. A symbolic placeholder representation preserves layout while a second predictor supplies readable text, enabling visual lookahead for GUI-agent planning.
- [Breaking the Data Barrier -- Building GUI Agents Through Task Generalization](https://awesomecua.github.io/resources/arxiv-2504-10127/) — 2025-04-14
  Studies whether mid-training on GUI perception, multimodal reasoning, and text reasoning transfers to GUI-agent planning. Experiments compare 11 task sources and curated mixtures using WebArena and AndroidWorld to investigate training-data choices when GUI trajectories are scarce.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.github.io/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://awesomecua.github.io/resources/arxiv-2504-07079/) — 2025-04-09
  SkillWeaver explores websites, practices interactions, and converts the resulting experience into a reusable library of callable skill APIs. Its WebArena and live-website experiments examine skill refinement, composition, and transfer from stronger agents to weaker ones.
- [Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2504-00906/) — 2025-04-01
  Combines generalist and specialist models with hierarchical planning and multiple grounding methods for computer-use tasks.
- [Navi-plus: Managing Ambiguous GUI Navigation Tasks with Follow-up Questions](https://awesomecua.github.io/resources/arxiv-2503-24180/) — 2025-03-31
  Navi-plus evaluates GUI agents that ask follow-up questions to complete ambiguous user instructions. It provides GUI clarification question-answer pairs and Dual-Stream Trajectory Evaluation for this interactive setting.
- [GUI-Xplore: Empowering Generalizable GUI Agents with One Exploration](https://awesomecua.github.io/resources/arxiv-2503-17709/) — 2025-03-22
  Introduces GUI-Xplore exploration videos and downstream tasks, with an agent that combines action-aware modeling and graph-based environment reasoning.
- [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://awesomecua.github.io/resources/arxiv-2503-16788/) — 2025-03-21
  This study compares matched reasoning and non-reasoning vision-language models on static mobile GUI tasks and interactive AndroidWorld navigation. It finds that chain-of-thought effects vary across tasks and model families.
- [Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment](https://awesomecua.github.io/resources/arxiv-2503-15937/) — 2025-03-20
  Introduces V-Droid, which verifies candidate actions in a discrete action space rather than directly generating each mobile operation.
- [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2503-09572/) — 2025-03-12
  Separates planning from execution and creates synthetic plan annotations for training agents on extended web-navigation tasks.
- [COLA: A Scalable Multi-Agent Framework For Windows UI Task Automation](https://awesomecua.github.io/resources/arxiv-2503-09263/) — 2025-03-12
  Coordinates specialized Windows UI agents with dynamic task scheduling, shared memory, and human-triggered rollback for recovering from errors.
- [Think Twice, Click Once: Enhancing GUI Grounding via Fast and Slow Systems](https://awesomecua.github.io/resources/arxiv-2503-06470/) — 2025-03-09
  Combines rapid target prediction with deliberate interface analysis, adaptively selecting the grounding process according to task complexity.
- [CHOP: Mobile Operating Assistant with Constrained High-frequency Optimized Subtask Planning](https://awesomecua.github.io/resources/arxiv-2503-03743/) — 2025-03-05
  Uses human-planned subtasks to constrain and refine the intermediate plans connecting user goals with executable mobile operations.
- [LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications](https://awesomecua.github.io/resources/arxiv-2503-02950/) — 2025-03-04
  Introduces a modular visual web-agent stack with planning and memory components, exposed through a remote-browser application and Chrome extension.
- [MPO: Boosting LLM Agents with Meta Plan Optimization](https://awesomecua.github.io/resources/arxiv-2503-02682/) — 2025-03-04
  Refines reusable high-level meta plans with execution feedback to guide language-agent planning across interactive environments.
- [ATLaS: Agent Tuning via Learning Critical Steps](https://awesomecua.github.io/resources/arxiv-2503-02197/) — 2025-03-04
  Selects critical steps from expert interaction trajectories for targeted agent fine-tuning, studying efficiency and generalization across tasks.
- [Smoothing Grounding and Reasoning for MLLM-Powered GUI Agents with Query-Oriented Pivot Tasks](https://awesomecua.github.io/resources/arxiv-2503-00401/) — 2025-03-01
  Uses inference of possible user queries from screenshots and target coordinates as a training bridge between GUI grounding and action reasoning.
- [PC-Agent: A Hierarchical Multi-Agent Collaboration Framework for Complex Task Automation on PC](https://awesomecua.github.io/resources/arxiv-2502-14282/) — 2025-02-20
  Uses active perception and hierarchical agents for instruction decomposition, progress tracking, action selection, and reflection in PC workflows.
- [WorldGUI: An Interactive Benchmark for Desktop GUI Automation from Any Starting Point](https://awesomecua.github.io/resources/arxiv-2502-08047/) — 2025-02-12
  Introduces desktop and web tasks with varied initial states to test planning recovery and adaptability beyond canonical starting configurations.
- [Advancing Autonomous VLM Agents via Variational Subgoal-Conditioned Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2502-07949/) — 2025-02-11
  Uses variational subgoal-conditioned reinforcement learning to improve learning efficiency on sparse-reward mobile and web-control tasks.
- [ReachAgent: Enhancing Mobile Agent via Page Reaching and Operation](https://awesomecua.github.io/resources/arxiv-2502-02955/) — 2025-02-05
  Splits mobile tasks into reaching the required page and operating on it, using subtask data and preferred GUI trajectories for training.
- [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://awesomecua.github.io/resources/arxiv-2501-12326/) — 2025-01-21
  Studies a screenshot-driven native GUI model with unified actions, deliberate reasoning, and iterative training on interaction traces.
- [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://awesomecua.github.io/resources/arxiv-2501-11425/) — 2025-01-20
  Builds self-critique training examples from searched recovery paths to improve agents' ability to detect and correct errors during interaction.
- [InfiGUIAgent: A Multimodal Generalist GUI Agent with Native Reasoning and Reflection](https://awesomecua.github.io/resources/arxiv-2501-04575/) — 2025-01-08
  Uses staged supervised training to combine GUI understanding and grounding with hierarchical reasoning and expectation-based reflection.
- [PC Agent: While You Sleep, AI Works -- A Cognitive Journey into Digital World](https://awesomecua.github.io/resources/arxiv-2412-17589/) — 2024-12-23
  Combines PC Tracker interaction capture, completion of action and reasoning annotations, and planning and grounding agents for desktop workflows.
- [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://awesomecua.github.io/resources/arxiv-2412-04454/) — 2024-12-05
  Uses screenshots, a unified action space, and staged grounding and reasoning training for cross-platform GUI interaction.
- [Ponder & Press: Advancing Visual GUI Agent towards General Computer Control](https://awesomecua.github.io/resources/arxiv-2412-01268/) — 2024-12-02
  Separates interpretation of user instructions from precise GUI localization using general-purpose and specialized visual-language components.
- [Generalist Virtual Agents: A Survey on Autonomous Agents Across Digital Platforms](https://awesomecua.github.io/resources/arxiv-2411-10943/) — 2024-11-17
  Surveys virtual agents for browsers, applications and operating systems, organizing prior work by task type, observation and action spaces, model strategies and evaluation methods. It examines screen-based interaction and keyboard, mouse and touch control, alongside transferability and long-sequence decision-making challenges.
- [The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use](https://awesomecua.github.io/resources/arxiv-2411-10323/) — 2024-11-15
  Presents a preliminary study of Claude 3.5 Computer Use across desktop tasks and software, analyzing planning, action, and critique behavior and providing a framework for deploying GUI-automation models.
- [Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents](https://awesomecua.github.io/resources/arxiv-2411-06559/) — 2024-11-10
  Introduces WebDreamer, which simulates candidate web actions with language-model world models and value estimates before acting.
- [Magentic-One: A Generalist Multi-Agent System for Solving Complex Tasks](https://awesomecua.github.io/resources/arxiv-2411-04468/) — 2024-11-07
  Introduces an orchestrated team of browsing, file, and coding agents with progress tracking and error recovery for general digital tasks.
- [Auto-Intent: Automated Intent Discovery and Self-Exploration for Large Language Model Web Agents](https://awesomecua.github.io/resources/arxiv-2410-22552/) — 2024-10-29
  Discovers compact intents from demonstrations and uses intent predictions to guide a language-model web agent's decisions and exploration.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.github.io/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2410-13825/) — 2024-10-17
  Studies how simplifying and aligning a web agent's observations and actions with language-model capabilities affects task completion.
- [MobA: Multifaceted Memory-Enhanced Adaptive Planning for Efficient Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2410-13757/) — 2024-10-17
  Combines adaptive mobile-task planning, reflection-based recovery, and multiple memory components, evaluated with MobBench and AndroidArena.
- [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://awesomecua.github.io/resources/arxiv-2410-13232/) — 2024-10-17
  Uses a learned web world model to predict important state changes and compare candidate actions before executing them.
- [Agent S: An Open Agentic Framework that Uses Computers Like a Human](https://awesomecua.github.io/resources/arxiv-2410-08164/) — 2024-10-10
  Combines hierarchical planning, retrieved experience, and a computer interaction interface to execute multistep GUI tasks.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface](https://awesomecua.github.io/resources/arxiv-2410-00079/) — 2024-09-30
  Studies agent-system and interface co-design that incorporates user interruptions and intermediate feedback to reduce planning latency.
- [StateAct: Enhancing LLM Base Agents via Self-prompting and State-tracking](https://awesomecua.github.io/resources/arxiv-2410-02810/) — 2024-09-21
  Maintains explicit task goals and evolving state descriptions to improve base-agent decisions across interactive tasks, including web shopping.
- [From Grounding to Planning: Benchmarking Bottlenecks in Web Agents](https://awesomecua.github.io/resources/arxiv-2409-01927/) — 2024-09-03
  Separates web-agent planning and grounding evaluations on Mind2Web to analyze which components limit task performance.
- [WebPilot: A Versatile and Autonomous Multi-Agent System for Web Task Execution with Strategic Exploration](https://awesomecua.github.io/resources/arxiv-2408-15978/) — 2024-08-28
  WebPilot separates global subtask planning from local Monte Carlo tree search during web execution. It continually refines the high-level plan and adapts local search to uncertain transitions and incomplete observations, evaluated on WebArena and MiniWoB++.
- [AssistantBench: Can Web Agents Solve Realistic and Time-Consuming Tasks?](https://awesomecua.github.io/resources/arxiv-2407-15711/) — 2024-07-22
  Introduces realistic open-web tasks and the SeePlanAct agent, analyzing the limitations of browsing and retrieval in time-consuming assistant work.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.github.io/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks](https://awesomecua.github.io/resources/arxiv-2407-05291/) — 2024-07-07
  Defines compositional enterprise workflows to evaluate planning and reasoning, with generation of ground-truth interaction traces.
- [MobileExperts: A Dynamic Tool-Enabled Agent Team in Mobile Devices](https://awesomecua.github.io/resources/arxiv-2407-03913/) — 2024-07-04
  Introduces MobileExperts, which assembles mobile-agent teams, lets agents explore and formulate tools, and coordinates them through two levels of planning. A benchmark organizes tasks by hierarchical intelligence levels.
- [Tree Search for Language Model Agents](https://awesomecua.github.io/resources/arxiv-2407-01476/) — 2024-07-01
  Applies best-first search to agent actions within interactive web environments, allowing exploration and multistep planning at inference time. WebArena and VisualWebArena experiments examine search behavior and test-time computation.
- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://awesomecua.github.io/resources/arxiv-2406-10227/) — 2024-06-14
  Evaluates GUI automation from instructional videos at separate levels of high-level planning, action narration, and primitive execution.
- [CAAP: Context-Aware Action Planning Prompting to Solve Computer Tasks with Front-End UI Only](https://awesomecua.github.io/resources/arxiv-2406-06947/) — 2024-06-11
  CAAP converts screenshots into textual observations and plans keyboard-and-mouse actions using a prompt that examines task context from multiple perspectives. The agent is evaluated on MiniWoB++ and WebShop using only front-end visual observations.
- [Mobile-Agent-v2: Mobile Device Operation Assistant with Effective Navigation via Multi-Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2406-01014/) — 2024-06-03
  Separates mobile planning, decision-making, and reflection, with a memory unit for task progress and relevant content.
- [Latent State Estimation Helps UI Agents to Reason](https://awesomecua.github.io/resources/arxiv-2405-11120/) — 2024-05-17
  Studies explicit textual estimates of latent UI state, including whether commanded actions occurred and how far a task has progressed. The experiments compare agents that reason with these estimates against agents that omit them across public and internal task benchmarks.
- [Unveiling Disparities in Web Task Handling Between Human and Web Agent](https://awesomecua.github.io/resources/arxiv-2405-04497/) — 2024-05-07
  Compares human think-aloud web-task behavior with web-agent planning, action, and reflection. The analysis highlights differences in updating plans, handling ambiguity, and investigating failures.
- [MMAC-Copilot: Multi-modal Agent Collaboration Operating Copilot](https://awesomecua.github.io/resources/arxiv-2404-18074/) — 2024-04-28
  Introduces MMAC-Copilot, which coordinates agents with different expertise to operate PC applications. VIBench evaluates visual interaction with applications that lack usable APIs, spanning office, recreation and game tasks.
- [Cradle: Empowering Foundation Agents Towards General Computer Control](https://awesomecua.github.io/resources/arxiv-2403-03186/) — 2024-03-05
  Uses screenshot observations, planning modules, and generated low-level keyboard and mouse control for general computer interaction.
- [Android in the Zoo: Chain-of-Action-Thought for GUI Agents](https://awesomecua.github.io/resources/arxiv-2403-02713/) — 2024-03-05
  Introduces Chain-of-Action-Thought and Android-In-The-Zoo annotations that connect prior actions, screen observations, intended actions, and expected outcomes.
- [OS-Copilot: Towards Generalist Computer Agents with Self-Improvement](https://awesomecua.github.io/resources/arxiv-2402-07456/) — 2024-02-12
  Provides an operating-system agent framework connecting applications, files, terminals, and web tools, with accumulated skills for subsequent tasks.
- [ScreenAgent: A Vision Language Model-driven Computer Control Agent](https://awesomecua.github.io/resources/arxiv-2402-07945/) — 2024-02-09
  Combines a screenshot-and-action dataset with a planning, acting, and reflecting loop for computer control through mouse and keyboard actions.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.github.io/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [Mobile-Agent: Autonomous Multi-Modal Mobile Device Agent with Visual Perception](https://awesomecua.github.io/resources/arxiv-2401-16158/) — 2024-01-29
  Uses visual perception tools and task decomposition to operate mobile applications without relying on app interface metadata.
- [ASSISTGUI: Task-Oriented Desktop Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2312-13108/) — 2023-12-20
  Introduces Windows application tasks and an actor-critic agent framework for mouse-and-keyboard automation of desktop workflows.
- [VisionTasker: Mobile Task Automation Using Vision Based UI Understanding and LLM Task Planning](https://awesomecua.github.io/resources/arxiv-2312-11190/) — 2023-12-18
  VisionTasker converts screenshots into textual UI interpretations and presents one interface at a time to an LLM planner for action selection. It evaluates visual representations and execution of 147 tasks on an Android smartphone, including integration with programming by demonstration.
- [Intelligent Virtual Assistants with LLM-based Process Automation](https://awesomecua.github.io/resources/arxiv-2312-06677/) — 2023-12-04
  Presents LLMPA, a mobile process-automation architecture that decomposes requests, identifies interface elements, predicts actions and checks errors. Demonstrations evaluate multistep operations in Alipay.
- [Explore, Select, Derive, and Recall: Augmenting LLM with Human-like Memory for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2312-03003/) — 2023-12-04
  Introduces MobileGPT, which organizes mobile-app experience into reusable subtasks using an explore, select, derive, and recall cycle. Its memory supports learning task procedures and adapting them to new contexts.
- [WebWISE: Web Interface Control and Sequential Exploration with Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-16042/) — 2023-10-24
  WebWISE filters DOM elements into observations and generates short programs for click, scroll, and text-entry steps. It evaluates in-context learning from either one supplied example or an example collected during a successful zero-shot MiniWoB++ trial.
- [A Zero-Shot Language Agent for Computer Control with Structured Reflection](https://awesomecua.github.io/resources/arxiv-2310-08740/) — 2023-10-12
  Studies a zero-shot computer-control agent that plans executable actions and organizes its own reflections after mistakes. MiniWoB++ experiments examine learning to complete tasks without supplied expert trajectories.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.github.io/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [SteP: Stacked LLM Policies for Web Actions](https://awesomecua.github.io/resources/arxiv-2310-03720/) — 2023-10-05
  SteP dynamically composes specialized web-action policies through a stack that records the active chain of policy calls. It studies this control structure across WebArena, MiniWoB++, and CRM workflows.
- [You Only Look at Screens: Multimodal Chain-of-Action Agents](https://awesomecua.github.io/resources/arxiv-2309-11436/) — 2023-09-20
  Introduces Auto-GUI, a screenshot-based agent using previous actions and future action plans to guide device interaction.
- [LASER: LLM Agent with State-Space Exploration for Web Navigation](https://awesomecua.github.io/resources/arxiv-2309-08172/) — 2023-09-15
  LASER represents web navigation as exploration over a defined set of states, allowing an agent to revisit earlier states after mistakes. The study evaluates this backtracking approach on WebShop and Amazon tasks.
- [AgentBench: Evaluating LLMs as Agents](https://awesomecua.github.io/resources/arxiv-2308-03688/) — 2023-08-07
  Evaluates language agents across eight interactive environments and analyzes failures in reasoning, decisions, and instruction following.
- [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://awesomecua.github.io/resources/arxiv-2307-12856/) — 2023-07-24
  Combines task decomposition, HTML summarization, and generated Python programs to carry out instructions on websites.
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://awesomecua.github.io/resources/arxiv-2306-07863/) — 2023-06-13
  Synapse filters task-irrelevant page state and places complete abstracted state-action trajectories into the prompt. An embedding-based exemplar memory retrieves relevant demonstrations for new tasks, evaluated on MiniWoB++ and Mind2Web.
- [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://awesomecua.github.io/resources/arxiv-2305-16653/) — 2023-05-26
  Introduces AdaPlanner, which revises code-structured plans in response to environmental feedback and reuses successful plans as exemplars. Experiments include MiniWoB++ web tasks alongside ALFWorld.
- [Hierarchical Prompting Assists Large Language Model on Web Navigation](https://awesomecua.github.io/resources/arxiv-2305-14257/) — 2023-05-23
  Separates web navigation prompting into a SUMMARIZER that extracts action-relevant observations and an ACTOR that chooses the next action from the condensed context.
- [End-to-End Goal-Driven Web Navigation](https://awesomecua.github.io/resources/arxiv-1602-02261/) — 2016-02-06
  Introduces WebNav for converting websites into goal-directed hyperlink navigation tasks and WikiNav for evaluating language-conditioned navigation and question answering on Wikipedia.
- [PLOW: A Collaborative Task Learning Agent](https://awesomecua.github.io/resources/url-628b5251757bb3888e89/) — 2007
  Describes PLOW, which learns executable web-task models from a session combining demonstrations, natural-language explanations, and dialogue. Browser instrumentation connects user actions with DOM structure to support task generalization.

## Datasets

- [Aguvis stage 2 trajectory data](https://awesomecua.github.io/resources/url-b5e2127e07f692d516b9/) — Date not recorded
  The second-stage Aguvis collection of interface trajectories for learning action sequences, planning and reasoning after grounding pretraining.
- [GUI-CIDER causal knowledge data](https://awesomecua.github.io/resources/url-d0300db5ba754b1a64fa/) — Date not recorded
  A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.
- [GUIMid training data](https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [Plan-and-Act training data](https://awesomecua.github.io/resources/url-ba6453cfdae0eb049ced/) — Date not recorded
  Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.

## Models

- [Aguvis](https://awesomecua.github.io/resources/github-xlang-ai-aguvis/) — Date not recorded
  Vision-based GUI agent models with unified action representations.
- [Claude Computer Use](https://awesomecua.github.io/resources/url-57f17b7d0c18b2d7c8bf/) — Date not recorded
  Claude tool capability for screenshot-based computer interaction.
- [Dreamer-7B](https://awesomecua.github.io/resources/url-e3c1a2a2d556e4728953/) — Date not recorded
  WebDreamer model checkpoint that predicts the consequences of web actions from screenshots and textual descriptions.
- [EvoCUA](https://awesomecua.github.io/resources/github-meituan-evocua/) — Date not recorded
  Computer-use model and training resources from the EvoCUA project.
- [EvoCUA 32B 20260105](https://awesomecua.github.io/resources/url-60a95f34072aeb2771cc/) — Date not recorded
  Larger EvoCUA computer-use agent checkpoint (20260105 release) with about 33B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [EvoCUA 8B 20260105](https://awesomecua.github.io/resources/url-2a2682f86dcb8ebc9a80/) — Date not recorded
  EvoCUA computer-use agent checkpoint (20260105 release) with about 8.8B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [Fara](https://awesomecua.github.io/resources/github-microsoft-fara/) — Date not recorded
  Microsoft browser-use agent models that act from screenshots by predicting click coordinates without accessibility trees; Fara1.5 comes in 4B, 9B and 27B, succeeding Fara-7B.
- [Fara 7B](https://awesomecua.github.io/resources/url-a4da77ee63f879cc8e63/) — Date not recorded
  Microsoft's Fara checkpoint, a Qwen2.5-VL-architecture image-text-to-text model with about 8.3B BF16 parameters, English, MIT-licensed and linked to arXiv paper 2511.19663.
- [Gemini Computer Use](https://awesomecua.github.io/resources/url-879d4e3e75e83582bde6/) — Date not recorded
  Gemini capability for generating interface actions from screenshots.
- [GUI-Owl 7B](https://awesomecua.github.io/resources/url-aeb32973694f91ad9920/) — Date not recorded
  A Qwen2.5-VL-based GUI checkpoint released with Mobile-Agent-v3 for grounded actions and specialized roles in its agent framework.
- [Holo Model Family](https://awesomecua.github.io/resources/url-c0bd07d82ce25ad1d99d/) — Date not recorded
  H computer-use model family and its release-specific access options.
- [Holo1 7B](https://awesomecua.github.io/resources/url-f35cfcbaeb79663eabeb/) — Date not recorded
  A Qwen2.5-VL-based action model released for the Surfer-H web-agent system, supporting policy, interface-localization and validation roles.
- [Holo2 4B](https://awesomecua.github.io/resources/url-16a51d9e725ad5a5c629/) — Date not recorded
  A Qwen3-VL-based checkpoint for navigation and multi-step GUI actions across web, desktop and mobile interfaces.
- [Holo3 35B-A3B](https://awesomecua.github.io/resources/url-a349aace3cfde25628a8/) — Date not recorded
  A sparse Qwen3.5-based GUI-action checkpoint released for navigation and computer-use workflows.
- [InfiGUI-R1](https://awesomecua.github.io/resources/github-reallm-labs-infigui-r1/) — Date not recorded
  3B GUI agent trained in two stages: distilling spatial reasoning from teacher models, then reinforcement learning that rewards accurate sub-goals and trains error recovery.
- [Magma](https://awesomecua.github.io/resources/github-microsoft-magma/) — Date not recorded
  Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.
- [OpenAI CUA](https://awesomecua.github.io/resources/url-74eeb7c9fb20674fe6e2/) — Date not recorded
  Computer-using model introduced with the Operator research preview.
- [OpenCUA](https://awesomecua.github.io/resources/github-xlang-ai-opencua/) — Date not recorded
  Open computer-use research stack including models and training resources.
- [OpenCUA 32B](https://awesomecua.github.io/resources/url-ad7f176848fd84de64e2/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.
- [OpenCUA 72B](https://awesomecua.github.io/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [Plan-and-Act Planner 70B](https://awesomecua.github.io/resources/url-3932d69c6b6f9b2a7ba8/) — Date not recorded
  The planner component of Plan-and-Act, generating structured high-level plans that an executor turns into web actions.
- [ScaleCUA](https://awesomecua.github.io/resources/github-opengvlab-scalecua/) — Date not recorded
  Computer-use model family trained with cross-platform interaction data.
- [ScaleCUA 7B](https://awesomecua.github.io/resources/url-ff7b1873a3eead89607a/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.
- [UI-TARS](https://awesomecua.github.io/resources/github-bytedance-ui-tars/) — Date not recorded
  Native GUI agent models; UI-TARS-1.5 adds reinforcement-learned reasoning before acting and an open 7B checkpoint, and UI-TARS-2 extends to games, code and tool use.
- [UI-TARS 1.5 7B](https://awesomecua.github.io/resources/url-4d32ad3682ae2d71c178/) — Date not recorded
  UI-TARS 1.5 GUI-agent checkpoint in the Qwen2.5-VL architecture with about 8.3B parameters stored in FP32, released under Apache-2.0 for English image-text-to-text use in Transformers.
- [UI-Venus](https://awesomecua.github.io/resources/github-inclusionai-ui-venus/) — Date not recorded
  GUI agent model family; UI-Venus-2, at 9B and 27B, acts on mobile, web and desktop in one end-to-end agent, trained with keypoint-based multi-judge task verification.
- [UI-Venus 2 9B](https://awesomecua.github.io/resources/url-611df37e5f3caa6befd7/) — Date not recorded
  UI-Venus 2 GUI-agent checkpoint fine-tuned from Qwen3.5-9B, with about 9.4B BF16 parameters in the Qwen3.5 multimodal architecture, loaded through Transformers for image-text-to-text.

## Engineering & industry

- [Agent S](https://awesomecua.github.io/resources/github-simular-ai-agent-s/) — Date not recorded
  Simular's open-source framework for computer-use agents that click, type and scroll through desktop and web apps on macOS, Windows and Linux; its third generation, Agent S3, reports 72.6% on OSWorld.
- [AgentProg](https://awesomecua.github.io/resources/github-mobilellm-agentprog/) — Date not recorded
  Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.
- [AssistGUI](https://awesomecua.github.io/resources/github-showlab-assistgui/) — Date not recorded
  LLM-based assistant for automating work in desktop productivity software by watching the screen and issuing mouse and keyboard commands; its repository says the code will be released later.
- [Auto-GUI / Auto-UI](https://awesomecua.github.io/resources/github-cooelf-auto-gui/) — Date not recorded
  Screenshot-based mobile agent implementation with training and inference code for chain-of-action prediction.
- [CAAP Agent](https://awesomecua.github.io/resources/github-caap-agent-caap-agent/) — Date not recorded
  Screenshot-driven agent implementation for MiniWoB++ and WebShop, using a visual observer and context-aware prompts to issue mouse and keyboard actions.
- [CHOP](https://awesomecua.github.io/resources/github-yuqi-zhou-chop/) — Date not recorded
  Mobile automation framework that uses reusable basis subtasks to constrain and refine planning between user goals and executable actions.
- [CoAT research implementation](https://awesomecua.github.io/resources/github-imnearth-coat/) — Date not recorded
  Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.
- [COLA demo](https://awesomecua.github.io/resources/github-alokia-cola-demo/) — Date not recorded
  Research demonstration of collaborative Windows GUI automation with dynamic task scheduling and recovery mechanisms.
- [Cradle](https://awesomecua.github.io/resources/github-baai-agents-cradle/) — Date not recorded
  Framework in which foundation models control games and software from screenshots alone, acting through keyboard and mouse, shown on RDR2, Stardew Valley, Cities: Skylines and Dealer's Life 2.
- [D-PoT evaluation code](https://awesomecua.github.io/resources/github-sqzhang-lazy-d-pot/) — Date not recorded
  Offline prompting and evaluation code for Dynamic Planning of Thoughts on Android-in-the-Wild, including action extraction and comparison with reference actions.
- [GUI-CIDER research code](https://awesomecua.github.io/resources/github-wuzheng02-gui-cider/) — Date not recorded
  Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.
- [GUI-ReWalk](https://awesomecua.github.io/resources/github-bytedance-gui-rewalk/) — Date not recorded
  A desktop trajectory-generation framework that moves from stochastic GUI exploration to inferred goals and multi-stage task completion, with retrospective reasoning annotations.
- [GUIPivot](https://awesomecua.github.io/resources/github-zrw00-guipivot/) — Date not recorded
  Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.
- [LiteWebAgent](https://awesomecua.github.io/resources/github-pathonaiorg-litewebagent/) — Date not recorded
  Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.
- [MobA](https://awesomecua.github.io/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile-Agent](https://awesomecua.github.io/resources/github-x-plug-mobileagent/) — Date not recorded
  Mobile device agent family using visual interface interaction.
- [Mobile-Agent-E code component](https://awesomecua.github.io/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [MobileGPT](https://awesomecua.github.io/resources/github-fclab-skku-mobilegpt/) — Date not recorded
  An Android client and Python-server agent that learns reusable app subtasks through exploration, selection, derivation and memory recall.
- [Mobilerun (formerly Droidrun)](https://awesomecua.github.io/resources/github-droidrun-mobilerun/) — Date not recorded
  A framework that combines screenshots and accessibility state with agent tools for mobile-device tasks through command-line and Python interfaces.
- [OS-Copilot](https://awesomecua.github.io/resources/github-os-copilot-os-copilot/) — Date not recorded
  Open-source library for generalist agents acting on an operating system's web, terminals, files and third-party apps, with the FRIDAY assistant, which takes custom tools and self-learns Excel tasks.
- [PC-Agent](https://awesomecua.github.io/resources/github-gair-nlp-pc-agent/) — Date not recorded
  Human-cognition-transfer framework for PC agents: PC Tracker logs human computer use, cognition completion turns logs into cognitive trajectories, and a planner works with a grounding agent.
- [PC-Agent (X-PLUG component)](https://awesomecua.github.io/resources/component-x-plug-mobileagent-pc-agent/) — Date not recorded
  Multi-agent desktop automation component for Windows and macOS, combining active perception, task decomposition and reflection for workflows spanning applications.
- [Plan-and-Act](https://awesomecua.github.io/resources/github-squeezeailab-plan-and-act/) — Date not recorded
  A web-agent framework that separates high-level planning from action execution, with replanning and synthetic planner-data generation components.
- [RCI Agent](https://awesomecua.github.io/resources/github-posgnu-rci-agent/) — Date not recorded
  A MiniWoB++ agent that uses explicit and implicit recursive criticism-and-improvement prompts to refine action plans and ground actions to browser state.
- [ScreenAgent](https://awesomecua.github.io/resources/github-niuzaisheng-screenagent/) — Date not recorded
  Environment and agent in which a vision-language model controls real desktops over VNC with mouse and keyboard in plan, act and reflect stages, plus a hand-annotated dataset of daily computer tasks.
- [Self-MAP](https://awesomecua.github.io/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [StateAct](https://awesomecua.github.io/resources/github-ai-nikolai-stateact/) — Date not recorded
  State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.
- [Synapse](https://awesomecua.github.io/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [UFO](https://awesomecua.github.io/resources/github-microsoft-ufo/) — Date not recorded
  Windows agent framework for application and desktop automation.
- [VisionTasker](https://awesomecua.github.io/resources/github-akimotoayako-visiontasker/) — Date not recorded
  An Android automation implementation that translates screenshot-based UI understanding into language descriptions for step-by-step LLM planning and action execution.
- [WebDreamer](https://awesomecua.github.io/resources/github-osu-nlp-group-webdreamer/) — Date not recorded
  World-model and planning components that simulate web-action outcomes, with linked training data and model checkpoints.
- [WorkForceAgent-R1](https://awesomecua.github.io/resources/github-night-chen-workforceagent-r1/) — Date not recorded
  Web-task reward functions, WorkArena data processing and GRPO training configurations for reasoning-oriented language agents.
