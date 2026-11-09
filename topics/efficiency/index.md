# Efficiency

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/efficiency/records.jsonl

## Papers & surveys

- [Visual Token Routing: Learning to keep tokens that matter](https://awesomecua.com/resources/arxiv-2611-06854/) — 2026-11-04
  Introduces Visual Token Routing (VTR), which selects visual tokens from current and earlier screenshots to reduce computer-use agent inference cost while retaining action-relevant information.
- [Interpretable Early Termination of Web Navigation Agents via Closed Sequential Pattern Mining](https://awesomecua.com/resources/arxiv-2611-04142/) — 2026-11-03
  Applies sequential pattern mining to MiniWoB++ web-agent traces, producing reviewable failure signatures and an early-termination policy to reduce token use.
- [What Is This Memory Useful For? Measuring Task-Conditioned Utility in Long-Term Agent Memory](https://awesomecua.com/resources/arxiv-2611-03930/) — 2026-11-02
  Introduces task-conditioned measurements and a dataset for assessing whether stored agent memories help later tasks, using factual-recall tasks built from web-agent memories.
- [Coati: Host-Grounded Execution for Installable Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2611-02644/) — 2026-11-02
  Introduces Coati, an installable Android GUI agent that checks action outcomes with phone-side evidence, stores per-app procedures, and routes simpler steps to a fast executor.
- [LADS: Lease-Aware Delivery Scheduling of Tool Results for Language Model Agents](https://awesomecua.com/resources/arxiv-2611-00881/) — 2026-10-31
  Introduces LADS, a scheduler for returning browser-action results to web agents, using cache leases and estimated resumption delay to reduce workflow latency.
- [Hybrid Computer Use: A Unified Programmatic, Semantic, and Visual Interface for General Agents](https://awesomecua.com/resources/arxiv-2610-41432/) — 2026-10-30
  Introduces Hybrid Computer Use (HCU), a desktop agent interface combining code, accessibility data, and GUI actions, with AX diffs reporting action effects.
- [What Does "Now" Mean to Your Computer-Use Agent? Stale Screenshots, Page Loads, and Which Check to Run Before a Click](https://awesomecua.com/resources/arxiv-2610-39282/) — 2026-10-29
  Studies clicks made from stale screenshots on web pages and provides a benchmark generator and pre-click checks for pages that change during loading.
- [Where to Learn and How Far to Roll Out: Efficient Adaptive Training for GUI Agents](https://awesomecua.com/resources/arxiv-2610-39251/) — 2026-10-29
  Introduces a two-stage GUI-agent RL framework that selects uncertain action checkpoints and expands rollout length as training progresses.
- [GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2610-36877/) — 2026-10-27
  Introduces GUI-JEPA, a mobile GUI policy that scores candidate actions from screenshot latents in a batched pass without decoding action text.
- [GUIFlow: Temporal Redundancy-Aware Incremental Inference for GUI Agents](https://awesomecua.com/resources/arxiv-2610-34959/) — 2026-10-26
  Introduces GUIFlow, an incremental inference framework that reuses visual, language, and action computation across successive GUI-agent steps.
- [WaitLens: Temporal VLM-Based Adaptive Waiting for Industrial GUI Testing Agents](https://awesomecua.com/resources/arxiv-2610-32482/) — 2026-10-23
  Introduces WaitLens, a vision-language model trained on GUI loading trajectories to decide when testing agents can stop waiting for an interface to load.
- [Reuse, Rewrite, or Reject: Evidence-Constrained Trace Reuse for Repeated Mobile GUI Control](https://awesomecua.com/resources/arxiv-2610-31712/) — 2026-10-22
  Proposes graph-text templates that let mobile GUI agents reuse, adapt, or discard steps from earlier executions based on the current instruction and UI state.
- [In-Context Teacher–Student Guidance for Open-Weight Browser Agents](https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/) — 2026-10-19
  Training-free protocol that turns a teacher model's offline reasoning traces into prompt guidance for open-weight browser agents; on MiniWoB++ it lifts solved student-task pairs from 208 to 271 across ten students.
- [Tandem: Serving Hybrid Linear-Attention GUI Agents on Mobile NPUs](https://awesomecua.com/resources/arxiv-2610-26660/) — 2026-10-19
  Tandem serves hybrid GUI-agent models on Android NPUs using divergence-point state checkpoints, rollback-aware speculative decoding and idle power release between request bursts.
- [VeriCUA: Learning Proactive Verification for Reliable GUI Agent Rewards](https://awesomecua.com/resources/arxiv-2610-26469/) — 2026-10-19
  VeriCUA trains a Judge to select verification checks and stopping decisions while a frozen Probe inspects the post-task GUI. Single-attempt reinforcement learning balances verdict correctness and Probe use.
- [fxBench: Evaluating and Understanding Formula Suggestions in Spreadsheets](https://awesomecua.com/resources/arxiv-2610-24729/) — 2026-10-17
  Introduces fxBench, a benchmark of spreadsheet formula suggestions, and examines context selection, intent understanding and formula writing for editing assistance.
- [LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2610-22280/) — 2026-10-15
  Uses weak-agent uncertainty to decide when to escalate to a stronger model and monitor its subsequent task execution.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.com/resources/arxiv-2610-20390/) — 2026-10-14
  Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure.
- [Why Generate a Click? Plug-in Decision Heads for Web Agents](https://awesomecua.com/resources/arxiv-2610-20107/) — 2026-10-14
  Adds decision heads to a frozen vision-language generator for selecting web actions and targets, with a confidence gate that falls back to text generation.
- [Teaching Agents in their Own Style: Blackbox Teacher Distillation for Web Agents](https://awesomecua.com/resources/arxiv-2610-19834/) — 2026-10-14
  Introduces WebKD, which repairs failed student web-agent trajectories with minimal teacher edits and trains on corrections that preserve the student's reasoning style.
- [Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://awesomecua.com/resources/arxiv-2610-18784/) — 2026-10-13
  Introduces CarryOn, which maintains evidence-linked task objects and remaining-work context across history compression, with evaluations on desktop tasks and web research.
- [Latent World Action Model for GUI Agents](https://awesomecua.com/resources/arxiv-2610-14228/) — 2026-10-09
  Replaces future-screenshot generation with a shared latent representation for GUI action selection and action-conditioned transition prediction. An action-aware contrastive objective encourages the transition representation to retain discriminative action-induced changes.
- [Web$hell: A Unified Interface for Agentic Web Access](https://awesomecua.com/resources/arxiv-2610-13416/) — 2026-10-09
  Introduces Web$hell, an interface that compiles live pages into persistent information and action objects so agents can gather evidence, navigate websites, and reuse acquired content through shared operations.
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://awesomecua.com/resources/arxiv-2610-13092/) — 2026-10-09
  Evaluates Jev as a bounded action selector inside three AndroidWorld agents and two text-based ALFWorld agents, separating decision savings from task success, recovery and resources per delivered outcome.
- [TeleTune: Evolving Agent Skills From Offline Telemetry](https://awesomecua.com/resources/arxiv-2610-05437/) — 2026-10-04
  Introduces TeleTune, which edits a textual skill library using held-out action prediction on offline software-use logs with missing goals or interleaved tasks. The learned workflows also guide retrieval of demonstrations for subsequent web-agent execution.
- [Recurrent Latent Visual Search for GUI Grounding](https://awesomecua.com/resources/arxiv-2610-05185/) — 2026-10-04
  Introduces ReLaViS, which performs recurrent visual search inside a grounding model by repeatedly querying screenshot tokens and feeding the resulting spatial evidence back into the model. Coarse-to-fine supervision is constructed from existing interface-element annotations.
- [CUAWright: A Minimal Unified Interface for Digital Agents](https://awesomecua.com/resources/arxiv-2610-04116/) — 2026-10-02
  Studies a minimal terminal-based execution framework that lets digital agents construct tools and manage context across browser, desktop, and CAD tasks.
- [When to Compile a Computer-Use Agent? Measuring Payback and Making Compilation Decisions for Token Efficiency](https://awesomecua.com/resources/arxiv-2610-02932/) — 2026-10-02
  Introduces PACE, a protocol and online decision rule for deciding when repeated GUI procedures are worth compiling into programs. It accounts for failed compilation attempts, measured per-use savings, uncertain reuse, and execution costs under an explicit cumulative budget.
- [Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents](https://awesomecua.com/resources/arxiv-2610-01787/) — 2026-10-01
  Studies how to route different parts of GUI experience into model weights or runtime context rather than treating whole trajectories as a single unit. It separates locators, procedures, state facts, and lessons, then predicts their destination from recurrence and dependence on the current state.
- [cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-40284/) — 2026-09-30
  Standardizes virtual machines, interaction pipelines, and agent interfaces to compare computer-use speed, cost, and task performance.
- [Neuro-Symbolic Computer Use: Learning Reusable Policies for Reliable and Efficient Execution](https://awesomecua.com/resources/arxiv-2609-36927/) — 2026-09-29
  Learns reusable computer-use policies that encode stable workflow logic in programs while delegating grounding and state checks to neural models. Policy iteration executes variants, diagnoses failures, revises the program, and adds verification before state-changing actions.
- [PhoneCLI: From App Interfaces to Callable Commands for Mobile Agents](https://awesomecua.com/resources/arxiv-2609-35671/) — 2026-09-28
  Introduces PhoneCLI, which explores mobile app interfaces and compiles navigation paths into reusable commands without internal app APIs or instrumentation. At execution time it verifies compiled paths and falls back to a visual agent for open-ended interaction or failed navigation.
- [CUA-Sandbox: Efficient Environments for Computer-Use Agent Reinforcement Learning](https://awesomecua.com/resources/arxiv-2609-32750/) — 2026-09-26
  Introduces CUA-Sandbox, which separates each rollout’s mutable state from shared initialized software runtimes. State-scoped execution and transactional resets or branches aim to reduce training-environment costs while retaining original interfaces and evaluators.
- [PastForward: Faster On-Device GUI Agents via Computational Experience Reuse](https://awesomecua.com/resources/arxiv-2609-32166/) — 2026-09-26
  Introduces PastForward, which reuses earlier output sequences as verified decoding proposals and starts future action computation from predicted GUI transitions. Screen checks determine whether speculative computation and cached model states can be retained.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.com/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [From Tapping to Hopping: Augmenting Mobile GUI Agents with App-Native Deeplinks](https://awesomecua.com/resources/arxiv-2609-30887/) — 2026-09-25
  GUI-Hopper combines verified Android deeplinks with GUI actions, using landing-screen descriptions, hybrid trajectory training and reinforcement learning to select navigation shortcuts and recover through GUI control.
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2609-30186/) — 2026-09-24
  Separates occasional visual-language planning from frequent lightweight action selection over an accessibility-tree-based action space.
- [Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://awesomecua.com/resources/arxiv-2609-29892/) — 2026-09-24
  Trains a mobile planner with supervised trajectories and competence-adaptive RL, then couples typed tool execution with memory, skills and offline model-harness refinement.
- [How Many Pixels Is a Digit Worth? Place-Aware Coordinate Entropy for GUI Agent Confidence Estimation](https://awesomecua.com/resources/arxiv-2609-24277/) — 2026-09-21
  PACE weights coordinate-digit entropy by place value to estimate confidence in GUI clicks from one forward pass. It evaluates correctness ranking and selective accuracy against repeated-sampling alternatives on ScreenSpot-Pro and ScreenSpot-v2.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.com/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.com/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.com/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [AutoTailor: Automatic, User-Aligned Capability Selection and Adaptation for Web Agents](https://awesomecua.com/resources/arxiv-2609-13548/) — 2026-09-11
  AutoTailor compiles web trajectories into reusable browser-automation APIs, then filters and dynamically revises the capability inventory. WebArena experiments distinguish API-only operation from an agent that can fall back to ordinary reasoning and browser actions.
- [Token Efficient Task Execution via Application Behavior Modeling for Web Agents](https://awesomecua.com/resources/arxiv-2609-13491/) — 2026-09-11
  OdoBot builds a model of web-application behavior from successful task demonstrations and uses it to guide task execution. Its Canvas LMS evaluation compares token use and completion with existing web agents.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.com/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](https://awesomecua.com/resources/arxiv-2609-10297/) — 2026-09-09
  TRACE orders screenshot evidence for monotonic visual-token reduction using layout priors, instruction relevance and feature novelty. Spatial token reserves and incremental KV contraction aim to preserve useful evidence for future GUI targets without repeatedly encoding retired frames.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.com/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [Improving Proficiency and Efficiency of Android GUI Agents via Self-Generating Tool Actions](https://awesomecua.com/resources/arxiv-2609-06792/) — 2026-09-06
  DroidTool generates application-state tools through proposal, implementation, testing and repair. Relational tests connect the tools’ preconditions and effects, and the resulting tools are evaluated as additions to Android GUI agents.
- [Focus Like a Human: Efficient GUI Grounding via Coarse-to-Fine Visual Attention and Parallel Verification](https://awesomecua.com/resources/url-85cad9e7962668786093/) — 2026-09
  FastFocus grounds GUI targets by proposing regions from low-resolution views and checking candidates with parallel high-resolution zooms; it is evaluated on ScreenSpot-Pro.
- [When and What to Teach: Budget-Aware Online Adaptation for Web Agents](https://awesomecua.com/resources/arxiv-2609-05513/) — 2026-08-31
  Proposes an online teaching framework that decides which web-agent episodes warrant a stronger teacher and which trajectory turns merit training. A solvability gate and score-guided trimming aim to preserve first-attempt performance while reducing teaching and training costs.
- [CausalCache: Conditional High-Fidelity Restoration for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2608-22577/) — 2026-08-23
  Introduces CausalCache, which selects archived screenshots to restore alongside text summaries under a fixed visual-memory budget. A history-gated adapter processes restored images, with evaluation distinguishing standard step limits from longer-horizon and mobile-transfer settings.
- [Spine-Branch Coordination for Multi-agent Computer Use](https://awesomecua.com/resources/arxiv-2608-22077/) — 2026-08-22
  Introduces Spine-Branch Coordination, which assigns a main task flow to one virtual-machine state and uses parallel branch machines to gather information for computer-use agents.
- [Beyond Success and Failure: Length-Aware Contrastive Learning for GUI Agents](https://awesomecua.com/resources/arxiv-2608-21830/) — 2026-08-22
  Introduces LACL-GUI, a contrastive learning objective that distinguishes trajectory quality within both successful and failed GUI executions. It favors concise successes and uses divergence from successful trajectories to differentiate failures during policy optimization.
- [ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-18307/) — 2026-08-18
  ComponentBench evaluates short interactions with canonical web UI components using verified tasks and matched human reference trajectories. Its diagnostic pipeline compares observation/action representations and analyzes structural difficulty, failure patterns and interaction efficiency.
- [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](https://awesomecua.com/resources/arxiv-2608-17310/) — 2026-08-18
  Introduces Agentic ESOpt, an evolution-strategies fine-tuning framework for long-horizon agents, evaluated on WebArena-Lite web tasks and automatic heuristic design.
- [Improving LLM-based Autonomous Web Agents with Filtering](https://awesomecua.com/resources/arxiv-2609-27770/) — 2026-08-16
  Trains HTML-element relevance filters on Mind2Web trajectories and transfers them to WebArena to reduce irrelevant browser context. It also evaluates a zero-shot ColBERT retriever and documents baseline web-agent failure modes.
- [MemPrism: Task-Conditioned Relational Memory Views for Long-Horizon Agents](https://awesomecua.com/resources/arxiv-2608-06745/) — 2026-08-07
  Introduces MemPrism, which records prior interactions and builds task-conditioned relational memory views for decisions in long-horizon web-agent tasks.
- [Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents](https://awesomecua.com/resources/arxiv-2608-06171/) — 2026-08-06
  Measures the complementarity, cost and rerun variability of six browser observation modes on WebArena and VisualWebArena. Its routing experiments distinguish an oracle cost opportunity from policies that fail to robustly outperform a fixed observation mode.
- [Activity Frames: Deterministic Screen-Activity Compilation for Agent Memory and Replay](https://awesomecua.com/resources/arxiv-2608-05784/) — 2026-08-06
  Introduces Activity Frames, a deterministic pipeline that turns captured screen activity into typed episodes for computer-use agent memory and routine replay.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [SPECTRA: On-Device Cognitive Perturbation and Trajectory Analysis for Autonomous Edge-Cloud GUI Grounding](https://awesomecua.com/resources/arxiv-2609-35775/) — 2026-07-31
  Introduces SPECTRA, an edge-cloud GUI grounding framework that uses visual perturbations and trajectory analysis to decide when to request a cloud model.
- [RMSWeb: Reflection, Failure-Mode Mining, and Salvage-DS for Web Agent Reinforcement Learning](https://awesomecua.com/resources/arxiv-2608-00335/) — 2026-07-31
  Introduces RMSWeb, a training recipe for web agents that uses reflection retries, failure-mode mining, and Salvage-DS reward and sampling methods for web actions.
- [Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](https://awesomecua.com/resources/arxiv-2607-28573/) — 2026-07-30
  Examines inference-time scaling for local computer-use models by varying context, step budgets, decomposition, and parallel execution. OSWorld experiments track both task performance and changing failure modes, exposing cases where extra computation extends errors or adds coordination overhead.
- [Why Are GUI Agents Correct but Late? Decode on the Decision-Time Critical Path, Tested with Pre-Compiled Policy Trees](https://awesomecua.com/resources/arxiv-2607-28399/) — 2026-07-30
  Introduces Adaptive Anticipatory Policy Trees, which precompute guarded actions and deadlines during idle periods so transient GUI events can be handled without new text generation. Paired experiments examine when this prepared execution helps and when reactive control remains preferable.
- [StepX-Edge: An On-Device UI Vision-Language Model via Architecture-Training-Deployment Co-Design](https://awesomecua.com/resources/arxiv-2607-22708/) — 2026-07-20
  Introduces StepX-Edge, an on-device UI vision-language model for screen understanding, OCR, question answering, and element grounding on mobile chips.
- [Beyond Sequential Interaction: Benchmarking Parallel Execution and Coordination for GUI Agents](https://awesomecua.com/resources/arxiv-2607-22689/) — 2026-07-17
  Introduces ParaGUIBench, with tasks and efficiency measurements for coordinated GUI agents operating separate desktop instances over a shared file system. Its ParaGUI planner-worker system decomposes tasks and dispatches concurrent subtasks for comparison with serial execution.
- [Multi-Head Latent Control: A Unified Interface for LLM Agent Decision Making](https://awesomecua.com/resources/arxiv-2607-14277/) — 2026-07-15
  Introduces Multi-Head Latent Control, a layer that reads frozen LLM or VLM hidden-state trajectories to signal when an agent should defer, seek clarification, use tools, abstain, or answer.
- [SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL](https://awesomecua.com/resources/arxiv-2607-11185/) — 2026-07-13
  Scales computer-agent reinforcement learning through verifiable task generation, capability-aware rollout allocation, and segmented visual context.
- [TurnOPD: Making On-Policy Distillation Turn-Aware for Efficient Long-Horizon Agent Training](https://awesomecua.com/resources/arxiv-2607-05804/) — 2026-07-07
  Proposes TurnOPD, a rollout-depth and loss-budgeting method for training long-horizon language agents; WebShop is one of its evaluation settings.
- [One Forward Beats Two: InnerZoom for Accurate and Efficient GUI Grounding](https://awesomecua.com/resources/arxiv-2606-30084/) — 2026-06-29
  InnerZoom preserves target-region cues from intermediate decoder layers and reinjects a compact evidence state during coordinate decoding. Its single-forward GUI grounder is compared with crop-and-rerun zooming and matched supervised/RL baselines for accuracy and inference cost.
- [AOHP: An Open-Source OS-Level Agent Harness for Personalized, Efficient and Secure Interaction](https://awesomecua.com/resources/arxiv-2606-23449/) — 2026-06-22
  Introduces AOHP, an Android OS-level harness that treats agents as system actors and provides adaptive interfaces, agent interfaces, and information-flow controls.
- [PreAct: Computer-Using Agents that Get Faster on Repeated Tasks](https://awesomecua.com/resources/arxiv-2606-17929/) — 2026-06-16
  PreAct compiles successful screen-interaction runs into guarded state-machine programs for repeated tasks. It validates programs from clean states before storage and returns control to the agent when replayed screen expectations fail, with tests across mobile, desktop and web.
- [Beyond Domains: Reusing Web Skills via Transferable Interaction Patterns](https://awesomecua.com/resources/arxiv-2606-17645/) — 2026-06-16
  Introduces SkillMigrator, a web agent that turns successful interactions into reusable skills and transfers them between sites by matching page layouts and live element references.
- [LLM-as-Code: Agentic Programming for Agent Harness](https://awesomecua.com/resources/arxiv-2606-15874/) — 2026-06-14
  Proposes Agentic Programming, where code controls agent loops and invokes LLM-as-Code for reasoning; a computer-use case study examines long visual action sequences.
- [Are Online Skill and Memory Modules Always Worth Their Tokens? A Budget-Constrained Study of Web Agents](https://awesomecua.com/resources/arxiv-2606-15017/) — 2026-06-12
  Compares online skill and memory augmentations with a vanilla web agent given the same total inference-token budget. Across WebArena and WorkArena settings, it studies when module overhead removes aggregate gains and how rerun variability changes conclusions.
- [WebChallenger: A Reliable and Efficient Generalist Web Agent](https://awesomecua.com/resources/arxiv-2606-10423/) — 2026-06-09
  WebChallenger builds a hierarchical DOM-derived page representation for selective observation, reusable site maps and compound actions. The framework combines these mechanisms without model fine-tuning and evaluates generalization across multiple web-agent benchmarks.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.com/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [Signal-Driven Observation for Long-Horizon Web Agents](https://awesomecua.com/resources/arxiv-2606-06708/) — 2026-06-04
  Proposes Signal-Driven Observation: a separate call selects relevant DOM elements and selectors, and a detector requests new observations only after meaningful browser events or failures. The paper frames observation timing and compression as an architectural research problem for long-horizon web agents.
- [AsyncWebRL: Efficient Asynchronous Reinforcement Learning for Multi-Step Visual Web Agents](https://awesomecua.com/resources/arxiv-2606-05597/) — 2026-06-04
  AsyncWebRL overlaps web-agent rollouts, updates and policy refresh while managing screenshot handling and a persistent rollout pool. It also replaces trajectory-length normalization in multi-step GRPO to reduce verbose failed trajectories, with throughput and out-of-distribution evaluation.
- [Benchmarking Living-Screen-Native GUI Agents on Short-Video Platforms](https://awesomecua.com/resources/arxiv-2606-04701/) — 2026-06-03
  LivingScreen evaluates agents in a browser-based short-video environment where observing content consumes time and affects subsequent actions. Its task suite scores accuracy together with information efficiency to diagnose over- and under-observation on continuously changing screens.
- [MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models](https://awesomecua.com/resources/arxiv-2606-04627/) — 2026-06-03
  Introduces MIRAGE, which trains mobile app agents to reason in compact latent states and anticipate future screenshots, reducing generated tokens during action selection.
- [Perceive Before Reasoning: A Pre-Reasoning Perception Framework for Efficient and Reliable Proactive Mobile Agents](https://awesomecua.com/resources/arxiv-2606-03236/) — 2026-06-02
  Introduces PRPF, a two-stage framework for proactive mobile agents that gates intervention with MPP and invokes PAR only when assistance is warranted.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.com/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [Multi-Agent Computer Use](https://awesomecua.com/resources/arxiv-2606-01533/) — 2026-06-01
  MACU represents computer-use objectives as a dependency graph whose manager dispatches parallel subagents and revises tasks as new information arrives. Desktop and web experiments examine coordination, information handoff and task-completion time.
- [Masking Stale Observations Helps Search Agents -- Until It Doesn't: A Regime Map and Its Mechanism](https://awesomecua.com/resources/arxiv-2606-00408/) — 2026-05-29
  Studies when masking older retrieved pages helps long-horizon search agents manage context, using offline and live-web search benchmarks and analysis of reopened pages.
- [GUI-C$^2$: Coarse-to-Fine GUI Grounding via Difficulty-Aware Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-30884/) — 2026-05-29
  Introduces GUI-D to score training samples by difficulty and GUI-C² to refine screen-element locations through area-gated cropping and reinforcement learning.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.com/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [Revisiting Observation Reduction for Web Agents: Comprehensive Evaluation with a Lightweight Framework](https://awesomecua.com/resources/arxiv-2605-29397/) — 2026-05-28
  Introduces a lightweight framework for evaluating HTML reduction in web agents, using Minimal Failure Set coverage to assess pruning and optimize latency.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.com/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [PANDO: Efficient Multimodal AI Agents via Online Skill Distillation](https://awesomecua.com/resources/arxiv-2605-24785/) — 2026-05-24
  Analyzes inefficiency in VisualWebArena trajectories and distills reusable online skills to reduce repeated actions and token overhead in multimodal web agents.
- [Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling](https://awesomecua.com/resources/arxiv-2605-21470/) — 2026-05-20
  Agent JIT compilation turns browser task descriptions into validated executable plans containing model calls, tools and parallel work. A cost-based scheduler and pre/postcondition protocol target latency and incorrect tool use in web-agent execution.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.com/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [AQuaUI: Visual Token Reduction for GUI Agents with Adaptive Quadtrees](https://awesomecua.com/resources/arxiv-2605-19260/) — 2026-05-19
  AQuaUI reduces screenshot tokens for GUI agents at inference time with adaptive quadtrees that retain spatial positions and reuse prior tree structure across steps.
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [TriAxialKV: Toward Extreme Low-Precision KV-Cache Quantization for Agentic Inference Tasks](https://awesomecua.com/resources/arxiv-2605-17170/) — 2026-05-16
  TriAxialKV assigns KV-cache precision by token recency, modality, and role for agentic inference, with a computer-use agent on OSWorld among its evaluations.
- [Skim: Speculative Execution for Fast and Efficient Web Agents](https://awesomecua.com/resources/arxiv-2605-16565/) — 2026-05-15
  Introduces Skim, a speculative execution framework for web agents that learns site URL and answer patterns offline, then uses them to answer matching queries with a small model.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.com/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Executable Agentic Memory for GUI Agent](https://awesomecua.com/resources/arxiv-2605-12294/) — 2026-05-12
  Executable Agentic Memory stores GUI routines in a knowledge graph built through state-aware exploration and action-group mining. A learned value model guides tree search over this executable memory for retrieval-based planning, with AndroidWorld and efficiency evaluation.
- [ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-11212/) — 2026-05-11
  Trains GUI agents with a learned selector that removes repeated visual patches across consecutive screenshots while preserving spatial structure. ReVision evaluates this history representation on OSWorld, WebTailBench and AgentNetBench.
- [OTora: A Unified Red Teaming Framework for Reasoning-Level Denial-of-Service in LLM Agents](https://awesomecua.com/resources/arxiv-2605-08876/) — 2026-05-09
  OTora generates attacks that increase reasoning and tool use in multi-step LLM agents while preserving task outcomes; evaluations include WebShop agents.
- [Region4Web: Rethinking Observation Space Granularity for Web Agents](https://awesomecua.com/resources/arxiv-2605-07134/) — 2026-05-08
  Reorganizes webpage accessibility trees into functional regions through hierarchical decomposition and semantic abstraction. PageDigest supplies a persistent region-level observation to web agents, evaluated on WebArena.
- [Learn where to Click from Yourself: On-Policy Self-Distillation for GUI Grounding](https://awesomecua.com/resources/arxiv-2605-00642/) — 2026-05-01
  Introduces GUI-SD, an on-policy self-distillation method for locating GUI elements from instructions, using a visually enriched teacher context and entropy-guided token weighting.
- [A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-00551/) — 2026-05-01
  A11y-Compressor transforms linearized accessibility trees through modal detection, redundancy reduction and semantic structuring. Its OSWorld evaluation measures both observation-token reduction and task success.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.com/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [SnapGuard: Lightweight Prompt Injection Detection for Screenshot-Based Web Agents](https://awesomecua.com/resources/arxiv-2604-25562/) — 2026-04-28
  SnapGuard detects screenshot-based prompt injection through complementary visual-stability and recovered textual cues. Its evaluation compares detection quality and inference cost across attack and benign-page settings, rather than establishing universal runtime prevention.
- [Odysseys: Benchmarking Web Agents on Realistic Long Horizon Tasks](https://awesomecua.com/resources/arxiv-2604-24964/) — 2026-04-27
  Introduces Odysseys, a live-web benchmark of long, multi-site tasks derived from browsing sessions. Graded task rubrics and a rubric-score-per-step measure evaluate both partial progress and trajectory efficiency.
- [OS-SPEAR: A Toolkit for the Safety, Performance,Efficiency, and Robustness Analysis of OS Agents](https://awesomecua.com/resources/arxiv-2604-24348/) — 2026-04-27
  Provides an evaluation toolkit for joint safety, efficiency, and multimodal robustness analysis of operating-system GUI agents.
- [GoClick: Lightweight Element Grounding Model for Autonomous GUI Interaction](https://awesomecua.com/resources/arxiv-2604-23941/) — 2026-04-27
  Studies a compact encoder-decoder grounding model and progressive training-data refinement for resource-constrained GUI interaction.
- [Mango: Multi-Agent Web Navigation via Global-View Optimization](https://awesomecua.com/resources/arxiv-2604-18779/) — 2026-04-20
  Proposes Mango, a multi-agent web-navigation method that selects starting URLs using Thompson Sampling and stores navigation history to inform later attempts.
- [SkillDroid: Compile Once, Reuse Forever](https://awesomecua.com/resources/arxiv-2604-14872/) — 2026-04-16
  Introduces SkillDroid, which compiles successful mobile GUI trajectories into reusable action templates and replays them without model calls, recompiling when they degrade.
- [Zoom Consistency: A Free Confidence Signal in Multi-Step Visual Grounding Pipelines](https://awesomecua.com/resources/arxiv-2604-15376/) — 2026-04-15
  Proposes zoom consistency as a confidence signal for multistep GUI grounding and uses it to route between specialist and generalist visual grounding models.
- [UI-Zoomer: Uncertainty-Driven Adaptive Zoom-In for GUI Grounding](https://awesomecua.com/resources/arxiv-2604-14113/) — 2026-04-15
  Introduces UI-Zoomer, a training-free grounding method that uses candidate agreement and token confidence to decide when to crop and retry. Prediction variance determines a separate crop radius for each uncertain interface target.
- [Agentic Compilation: Mitigating the LLM Rerun Crisis for Minimized-Inference-Cost Web Automation](https://awesomecua.com/resources/arxiv-2604-09718/) — 2026-04-08
  Proposes Compile-and-Execute, which turns a sanitized DOM into a reusable JSON workflow so repetitive browser tasks can run without further model queries.
- [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](https://awesomecua.com/resources/arxiv-2604-07277/) — 2026-04-08
  Introduces Android Coach, which uses a learned critic to evaluate multiple candidate actions at each observed emulator state. Process rewards and a group-wise advantage estimator support online training, evaluated on AndroidLab and AndroidWorld.
- [Read More, Think More: Revisiting Observation Reduction for Web Agents](https://awesomecua.com/resources/arxiv-2604-01535/) — 2026-04-02
  Studies HTML and accessibility-tree observations for web agents, relating their usefulness to model capability and thinking budget, and proposes diff-based observation history to save tokens.
- [PixelPrune: Pixel-Level Adaptive Visual Token Reduction via Predictive Coding](https://awesomecua.com/resources/arxiv-2604-00886/) — 2026-04-01
  PixelPrune removes pixel-redundant patches before the vision encoder, reducing both encoding and downstream language-model work. The training-free method evaluates lossless and controlled-lossy compression on document and GUI tasks.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.com/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://awesomecua.com/resources/arxiv-2603-26211/) — 2026-03-27
  Adapts a discrete vision-language diffusion model to single-turn GUI action and bounding-box prediction, using a hybrid masking schedule for coordinate geometry. Experiments across web, desktop and mobile datasets examine grounding accuracy and inference tradeoffs.
- [Where and How to Prune: An Empirical Study of Visual Token Pruning for GUI Agent Navigation](https://awesomecua.com/resources/arxiv-2603-26041/) — 2026-03-27
  Studies visual token pruning for GUI navigation, separating reusable screenshot encoder embeddings from later language-model computation. The analysis examines foreground-background token allocation and spatial coverage when pruning historical screenshots.
- [MANA: Towards Efficient Mobile Ad Detection via Multimodal Agentic UI Navigation](https://awesomecua.com/resources/arxiv-2603-20351/) — 2026-03-20
  MANA combines visual, temporal and exploration signals to guide navigation toward mobile advertisements. It evaluates ad detection and interaction cost on commercial smartphones, including obfuscated-ad cases.
- [FDC-Ground: Improving GRPO for GUI Grounding via Exponential Rewards and Fact-Aligned Pruning](https://awesomecua.com/resources/url-2eaafb0b5ecde3babbf1/) — 2026-03-14
  FDC-Ground trains GUI element location models with a distance-based reward and completion pruning; a 7B model is evaluated on ScreenSpot and ScreenSpot-v2.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.com/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [SlowBA: An efficiency backdoor attack towards VLM-based GUI agents](https://awesomecua.com/resources/arxiv-2603-08316/) — 2026-03-09
  Introduces SlowBA, a backdoor attack on vision-language GUI agents that uses pop-up triggers to induce longer reasoning chains and increase response latency.
- [Ares: Adaptive Reasoning Effort Selection for Efficient LLM Agents](https://awesomecua.com/resources/arxiv-2603-07915/) — 2026-03-09
  Introduces Ares, a router that selects a reasoning level for each step of a general LLM agent from its interaction history, with web agents among the evaluation settings.
- [ST-Lite: Training-Free KV Cache Compression with Spatio-Trajectory Guidance for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2603-00188/) — 2026-02-27
  Introduces ST-Lite, a training-free KV cache compression scheme for vision-language GUI agents that filters redundant frames and preserves small UI elements in interaction traces.
- [Spatio-Temporal Token Pruning for Efficient High-Resolution GUI Agents](https://awesomecua.com/resources/arxiv-2602-23235/) — 2026-02-26
  GUIPruner compresses high-resolution screenshots and interaction history for GUI navigation through training-free resizing and layout-aware token pruning.
- [ActionEngine: From Reactive to Programmatic Web Agents via State Machine Memory](https://awesomecua.com/resources/arxiv-2602-20502/) — 2026-02-24
  ActionEngine explores web applications to build an updateable state-machine memory of GUI states, operations and transitions. It generates complete task programs from that memory, using reactive repair to handle changed interfaces or missing knowledge.
- [Agentic Test-Time Scaling for WebAgents](https://awesomecua.com/resources/arxiv-2602-12276/) — 2026-02-12
  CATTS allocates additional inference computation when an agent’s action votes show uncertainty. The paper compares voting and arbiter strategies and evaluates this selective scaling on WebArena-Lite, Online-Mind2Web and GoBrowse.
- [TreeCUA: Efficiently Scaling GUI Automation with Tree-Structured Verifiable Evolution](https://awesomecua.com/resources/arxiv-2602-09662/) — 2026-02-10
  TreeCUA organizes GUI exploration trajectories as reusable trees and balances deeper tasks against broader coverage. Its data pipeline combines action verification, memory-backed recovery and a DPO variant that uses information from adjacent branches.
- [Agent Alpha: Tree Search Unifying Generation, Exploration and Evaluation for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2602-02995/) — 2026-02-03
  Agent Alpha uses step-level Monte Carlo tree search to reuse successful prefixes and recover from early GUI mistakes. Comparison-based evaluation and diversity-constrained expansion guide the search, with experiments on OSWorld.
- [Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction](https://awesomecua.com/resources/arxiv-2602-00575/) — 2026-01-31
  VAGEN verifies GUI trajectories by first extracting readily available evidence and escalating to tool-based environment probes when needed. Evaluation on OSWorld-Verified and AndroidWorld studies verification accuracy and its cost.
- [SSL: Sweet Spot Learning for Differentiated Guidance in Agentic Optimization](https://awesomecua.com/resources/arxiv-2601-22491/) — 2026-01-30
  SSL uses progressively tiered rewards for agent training, including distance-based guidance on GUI perception tasks alongside planning and reasoning tasks.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.com/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [Computer Environments Elicit General Agentic Intelligence in LLMs](https://awesomecua.com/resources/arxiv-2601-16206/) — 2026-01-22
  LLM-in-Sandbox gives agents a minimal computer environment for resource access, file management and code execution; LLM-in-Sandbox-RL trains models to use it.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.com/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [Web Agent Agentic Reinforcement Learning Decision Model Under Multi-Cost and Failure Risk](https://awesomecua.com/resources/arxiv-2610-23857/) — 2026-01-12
  Proposes constrained reinforcement learning for web agents that weighs request costs, latency and failure risk across multi-step website tasks.
- [FocusUI: Efficient UI Grounding via Position-Preserving Visual Token Selection](https://awesomecua.com/resources/arxiv-2601-03928/) — 2026-01-07
  FocusUI selects instruction-relevant screenshot patches while preserving their positional structure for GUI grounding. Its PosPad scheme replaces runs of dropped tokens with positional markers and is evaluated under reduced token budgets.
- [Agent-Dice: Disentangling Knowledge Updates via Geometric Consensus for Agent Continual Learning](https://awesomecua.com/resources/arxiv-2601-03641/) — 2026-01-07
  Agent-Dice fuses parameter updates to support continual learning in LLM agents, with GUI agent tasks evaluated alongside tool-use domains.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.com/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [Look Where You’re Told: Instruction-Consistent Attention for GUI Grounding](https://awesomecua.com/resources/url-3a73f9fc424ca9fe170e/) — 2026
  Attention Cycle-Consistency trains GUI element grounding with semantic and spatial alignment constraints, while removing its auxiliary components at inference.
- [Nested Browser-Use Learning for Agentic Information Seeking](https://awesomecua.com/resources/arxiv-2512-23647/) — 2025-12-29
  NestBrowse organizes browser actions in a nested framework that separates interaction control from page exploration. It evaluates this design for deep information seeking beyond snippet retrieval and direct URL fetching.
- [MAI-UI Technical Report: Real-World Centric Foundation GUI Agents](https://awesomecua.com/resources/arxiv-2512-22047/) — 2025-12-26
  MAI-UI combines GUI navigation, native user interaction, and MCP tool calls in a family of policies trained through generated data and online reinforcement learning. The report also studies device-cloud routing and scaling of parallel environments and interaction budgets, with grounding and Android navigation evaluation.
- [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://awesomecua.com/resources/arxiv-2512-22009/) — 2025-12-26
  Introduces iSHIFT, which combines latent reasoning with perception-control tokens to adapt GUI inference. The agent switches between detailed regional grounding and faster use of global visual cues.
- [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://awesomecua.com/resources/arxiv-2512-01763/) — 2025-12-01
  HiconAgent trains GUI policies to use history through variable-length context sampling and paired policy updates with compressed and complete histories. Its compression retains past actions while removing historical observations, and an alignment loss couples the two branches.
- [AFRAgent : An Adaptive Feature Renormalization Based High Resolution Aware GUI agent](https://awesomecua.com/resources/arxiv-2512-00846/) — 2025-11-30
  Introduces AFRAgent, which uses adaptive feature renormalization to combine low-resolution visual embeddings with high-resolution details. The architecture is evaluated for smartphone GUI automation on Meta-GUI and AITW.
- [MCP vs RAG vs NLWeb vs HTML: A Comparison of the Effectiveness and Efficiency of Different Agent Interfaces to the Web (Technical Report)](https://awesomecua.com/resources/arxiv-2511-23281/) — 2025-11-28
  Compares HTML browsing, RAG, MCP, and NLWeb interfaces for web agents performing product search, comparison, and checkout tasks in four simulated e-shops.
- [Prune4Web: DOM Tree Pruning Programming for Web Agent](https://awesomecua.com/resources/arxiv-2511-21398/) — 2025-11-26
  Introduces Prune4Web, where generated scoring programs filter DOM elements according to decomposed subtasks before grounding. An annotation pipeline and two-turn training procedure coordinate the planner, programmatic filter and grounder.
- [Fara-7B: An Efficient Agentic Model for Computer Use](https://awesomecua.com/resources/arxiv-2511-19663/) — 2025-11-24
  Introduces FaraGen synthetic web trajectories, a compact screenshot-based action model, and WebTailBench for underrepresented browser tasks.
- [STEP: Success-Rate-Aware Trajectory-Efficient Policy Optimization](https://awesomecua.com/resources/arxiv-2511-13091/) — 2025-11-17
  STEP allocates RL sampling by task success rate and trains on individual steps from interaction trajectories, with evaluations on OSWorld and AndroidWorld.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.com/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [An Efficient Training Pipeline for Reasoning Graphical User Interface Agents](https://awesomecua.com/resources/arxiv-2511-08172/) — 2025-11-11
  A GUI grounding pipeline filters 4.8M synthetic examples to 12K training instances and adapts a 3B vision-language model, evaluated on ScreenSpot, Multimodal-Mind2Web, and AndroidControl.
- [GUI-AIMA: Aligning Intrinsic Multimodal Attention with a Context Anchor for GUI Grounding](https://awesomecua.com/resources/arxiv-2511-00810/) — 2025-11-02
  Introduces GUI-AIMA, which supervises instruction-relevant attention over visual patches instead of directly training coordinate text generation. Patch-level grounding can be combined with an optional zoom stage and is evaluated across GUI localization benchmarks.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.com/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [Mixing Importance with Diversity: Joint Optimization for KV Cache Compression in Large Vision-Language Models](https://awesomecua.com/resources/arxiv-2510-20707/) — 2025-10-23
  MixKV compresses vision-language model KV caches by balancing importance and diversity; its evaluations include GUI grounding alongside broader multimodal tasks.
- [Branch-and-Browse: Efficient and Controllable Web Exploration with Tree-Structured Reasoning and Action Memory](https://awesomecua.com/resources/arxiv-2510-19838/) — 2025-10-18
  Branch-and-Browse is a web agent framework that uses tree-structured subtasks, web state replay, and page action memory to explore and complete tasks.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.com/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [CORE: Reducing UI Exposure in Mobile Agents via Collaboration Between Cloud and Local LLMs](https://awesomecua.com/resources/arxiv-2510-15455/) — 2025-10-17
  Introduces CORE, which divides mobile UI hierarchies into semantic blocks and shares planning between local and cloud language models. Local ranking limits the screen information sent for cloud-side element selection, with a multi-round mechanism for correcting inadequate context.
- [Agentic Entropy-Balanced Policy Optimization](https://awesomecua.com/resources/arxiv-2510-14545/) — 2025-10-16
  Introduces Agentic Entropy-Balanced Policy Optimization (AEPO), an RL method that adjusts rollout sampling and policy updates for tool-using web agents.
- [WebRouter: Query-specific Router via Variational Information Bottleneck for Cost-sensitive Web Agent](https://awesomecua.com/resources/arxiv-2510-11221/) — 2025-10-13
  Introduces WebRouter, a cost-aware router that compresses web-agent prompts to choose among LLMs, with cost and accuracy measured on WebVoyager websites.
- [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.com/resources/arxiv-2510-09038/) — 2025-10-10
  Encodes GUI trajectories into compact continuous embeddings that can be retrieved directly into an agent’s input. An automated environment-discovery and rollout pipeline expands this memory for long tasks and unfamiliar interfaces.
- [Learning Efficient Guardrails for Compliance](https://awesomecua.com/resources/arxiv-2510-03485/) — 2025-10-03
  Introduces PolicyGuardBench for detecting policy violations in full web-agent trajectories and their prefixes, and trains PolicyGuard as an efficient guardrail model.
- [FocusAgent: Simple Yet Effective Ways of Trimming the Large Context of Web Agents](https://awesomecua.com/resources/arxiv-2510-03204/) — 2025-10-03
  Introduces FocusAgent, which uses a lightweight LLM to select task-relevant lines from web agents' accessibility-tree observations, reducing context size and exposure to prompt injection.
- [WALT: Web Agents that Learn Tools](https://awesomecua.com/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.com/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.com/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Flash-Searcher: Fast and Effective Web Agents via DAG-Based Parallel Execution](https://awesomecua.com/resources/arxiv-2509-25301/) — 2025-09-29
  Introduces Flash-Searcher, a parallel agent framework that organizes dependent subtasks as a graph and runs independent paths concurrently; it is evaluated on deep-search benchmarks.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.com/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [ReSum: Unlocking Long-Horizon Search Intelligence via Context Summarization](https://awesomecua.com/resources/arxiv-2509-13313/) — 2025-09-16
  Introduces ReSum, which compresses interaction histories during long web searches, and ReSum-GRPO, which trains agents to reason across the resulting segments.
- [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2509-18119/) — 2025-09-10
  MobileRL adapts GRPO to mobile GUI training with difficulty-dependent replay of successes and filtering of failure curricula. A shortest-path reward adjustment accounts for task length, with evaluations on AndroidWorld and AndroidLab.
- [Succeed or Learn Slowly: Sample Efficient Off-Policy Reinforcement Learning for Mobile App Control](https://awesomecua.com/resources/arxiv-2509-01720/) — 2025-09-01
  Succeed or Learn Slowly applies direct off-policy updates to successful interactions and more conservative regularized updates to negative examples. Successful Transition Replay prioritizes successful experience during policy learning, with evaluation on AndroidWorld.
- [MobiAgent: A Systematic Framework for Customizable Mobile Agents](https://awesomecua.com/resources/arxiv-2509-00531/) — 2025-08-30
  Presents MobiAgent, combining MobiMind agent models, the AgentRR acceleration framework, and MobiFlow evaluation. It also introduces an AI-assisted data-collection pipeline for mobile GUI tasks.
- [InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency](https://awesomecua.com/resources/arxiv-2508-18265/) — 2025-08-25
  Introduces InternVL3.5, a multimodal model family trained with Cascade RL and designed for more efficient inference; GUI interaction is among its stated capabilities.
- [Cognitive Duality for Adaptive Web Agents](https://awesomecua.com/resources/arxiv-2508-05081/) — 2025-08-07
  Introduces CogniWeb, which switches between fast reactive processing and slower deliberative reasoning according to task complexity. WebArena experiments examine this combination of learned behaviors and online planning.
- [Beyond Pixels: Exploring DOM Downsampling for LLM-Based Web Agents](https://awesomecua.com/resources/arxiv-2508-04412/) — 2025-08-06
  D2Snap reduces serialized DOM observations while preserving actionable elements and features that distinguish their uses. The study compares reduced DOM inputs with screenshot-based observations for a web agent on tasks sampled from Online-Mind2Web.
- [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.com/resources/arxiv-2508-03923/) — 2025-08-05
  CoAct-1 delegates subtasks between a GUI operator and a programmer that executes Python or Bash. Its OSWorld evaluation studies a hybrid action space in which scripts handle suitable file and data operations while visual interaction handles other steps.
- [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.com/resources/arxiv-2507-19478/) — 2025-07-25
  MMBench-GUI evaluates interface understanding, element grounding, task automation, and collaboration across six named desktop, mobile, and web platforms. It introduces the Efficiency-Quality Area metric for examining execution efficiency alongside task quality in online GUI automation.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.com/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.com/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.com/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [LineRetriever: Planning-Aware Observation Reduction for Web Agents](https://awesomecua.com/resources/arxiv-2507-00210/) — 2025-06-30
  LineRetriever uses a language model to select observation lines that matter for upcoming web-navigation actions. It reduces DOM or accessibility-tree context by considering the planning horizon instead of relying solely on semantic similarity.
- [ZonUI-3B: A Lightweight Vision-Language Model for Cross-Resolution GUI Grounding](https://awesomecua.com/resources/arxiv-2506-23491/) — 2025-06-30
  ZonUI-3B trains GUI grounding with a curated 24,000-example collection of mobile, desktop, and web screenshots. Its two-stage procedure first learns across platforms and then specializes on high-resolution images, with ablations on data diversity and redundant examples.
- [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2506-16042/) — 2025-06-19
  OSWorld-Human adds human-determined trajectories to OSWorld to evaluate the efficiency of desktop computer-use agents. The study compares 16 agents and analyzes model-call latency, changes in step duration during task execution, and excess action steps.
- [Build the web for agents, not agents for the web](https://awesomecua.com/resources/arxiv-2506-10953/) — 2025-06-12
  Proposes Agentic Web Interface (AWI), a website interface intended for agent navigation, and sets out six design principles for web-agent use.
- [DPO Learning with LLMs-Judge Signal for Computer Use Agents](https://awesomecua.com/resources/arxiv-2506-03095/) — 2025-06-03
  Uses an LLM judge to evaluate and filter synthetic GUI interaction trajectories for training a compact vision-language agent. OSWorld experiments assess the policy designed for local execution.
- [AutoData: A Multi-Agent System for Open Web Data Collection](https://awesomecua.com/resources/arxiv-2505-15859/) — 2025-05-21
  Introduces AutoData, a multi-agent system that collects web datasets from a natural-language request, and Instruct2DS, a benchmark for live collection across three domains.
- [GEM: Gaussian Embedding Modeling for Out-of-Distribution Detection in GUI Agents](https://awesomecua.com/resources/arxiv-2505-12842/) — 2025-05-19
  GEM detects instructions outside a GUI agent’s capabilities by modeling distances in its input-embedding space with a Gaussian mixture. Experiments across mobile, computer and browser data also examine selective escalation to a cloud model when an input is detected as unfamiliar.
- [LLM-Explorer: Towards Efficient and Affordable LLM-based Exploration for Mobile Apps](https://awesomecua.com/resources/arxiv-2505-10593/) — 2025-05-15
  LLM-Explorer uses language models to maintain compact knowledge for mobile app exploration, then generates actions without invoking the model at every step. The study compares exploration coverage and cost across twenty apps.
- [EcoAgent: An Efficient Device-Cloud Collaborative Multi-Agent Framework for Mobile Automation](https://awesomecua.com/resources/arxiv-2505-05440/) — 2025-05-08
  EcoAgent splits mobile automation between cloud planning and on-device observation and verification. Compact screen descriptions and feedback reduce communication costs, with evaluation on AndroidWorld.
- [Inducing Programmatic Skills for Agentic Tasks](https://awesomecua.com/resources/arxiv-2504-06821/) — 2025-04-09
  Introduces agent skill induction (ASI), which creates, checks, and reuses program-based skills for web tasks by combining primitive actions into higher-level routines.
- [Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment](https://awesomecua.com/resources/arxiv-2503-15937/) — 2025-03-20
  Introduces V-Droid, which verifies candidate actions in a discrete action space rather than directly generating each mobile operation.
- [Think Twice, Click Once: Enhancing GUI Grounding via Fast and Slow Systems](https://awesomecua.com/resources/arxiv-2503-06470/) — 2025-03-09
  Combines rapid target prediction with deliberate interface analysis, adaptively selecting the grounding process according to task complexity.
- [Language Models can Self-Improve at State-Value Estimation for Better Search](https://awesomecua.com/resources/arxiv-2503-02878/) — 2025-03-04
  Introduces Self-Taught Lookahead (STL), which trains a value model to predict actions and resulting states for more efficient search, with evaluation on web-agent tasks.
- [AppAgentX: Evolving GUI Agents as Proficient Smartphone Users](https://awesomecua.com/resources/arxiv-2503-02268/) — 2025-03-04
  Records interaction history and converts repeated action sequences into reusable high-level shortcuts for mobile GUI tasks.
- [ATLaS: Agent Tuning via Learning Critical Steps](https://awesomecua.com/resources/arxiv-2503-02197/) — 2025-03-04
  Selects critical steps from expert interaction trajectories for targeted agent fine-tuning, studying efficiency and generalization across tasks.
- [Towards Sustainable Web Agents: A Plea for Transparency and Dedicated Metrics for Energy Consumption](https://awesomecua.com/resources/arxiv-2502-17903/) — 2025-02-25
  Examines energy and carbon-accounting limitations in web-agent evaluation and argues for transparent, dedicated sustainability measurements.
- [Digi-Q: Learning Q-Value Functions for Training Device-Control Agents](https://awesomecua.com/resources/arxiv-2502-15760/) — 2025-02-13
  Learns action-value functions from offline device-control experience and uses them to rank candidate actions for policy improvement.
- [Symbiotic Cooperation for Web Agents: Harnessing Complementary Strengths of Large and Small LLMs](https://awesomecua.com/resources/arxiv-2502-07942/) — 2025-02-11
  Couples large- and small-model web-agent exploration with trajectory synthesis and distillation to improve both model types iteratively.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.com/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [Reinforcement Learning for Long-Horizon Interactive LLM Agents](https://awesomecua.com/resources/arxiv-2502-01600/) — 2025-02-03
  LOOP trains interactive digital agents with reinforcement learning in stateful, multi-app environments where tasks are performed through API calls.
- [MemAgent: A cache-inspired framework for augmenting conversational Web Agents with task-specific information](https://awesomecua.com/resources/url-3fdea133115518f9205a/) — 2025
  MemAgent adds a cache for task-specific information to conversational web agents, separating information gathering from execution across 150 web tasks.
- [Iris: Breaking GUI Complexity with Adaptive Focus and Self-Refining](https://awesomecua.com/resources/arxiv-2412-10342/) — 2024-12-13
  Combines information-sensitive image cropping with a learning loop between element description and grounding for complex interface understanding.
- [ShowUI: One Vision-Language-Action Model for GUI Visual Agent](https://awesomecua.com/resources/arxiv-2411-17465/) — 2024-11-26
  Combines visual token selection, interleaved visual-action history, and curated instruction data in a compact GUI action model.
- [Lightweight Neural App Control](https://awesomecua.com/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [SPA-Bench: A Comprehensive Benchmark for SmartPhone Agent Evaluation](https://awesomecua.com/resources/arxiv-2410-15164/) — 2024-10-19
  Introduces a smartphone-agent benchmark with English and Chinese tasks, real-time Android interaction, and completion and resource-use metrics.
- [DistRL: An Asynchronous Distributed Reinforcement Learning Framework for On-Device Control Agents](https://awesomecua.com/resources/arxiv-2410-14803/) — 2024-10-18
  Introduces asynchronous distributed reinforcement learning with centralized updates and decentralized interaction collection for device-control agents.
- [TinyClick: Single-Turn Agent for Empowering GUI Automation](https://awesomecua.com/resources/arxiv-2410-11871/) — 2024-10-09
  Adapts a compact Florence-2 model to map user instructions to screen coordinates using multitask training and augmented data.
- [Interactive Speculative Planning: Enhance Agent Efficiency through Co-design of System and User Interface](https://awesomecua.com/resources/arxiv-2410-00079/) — 2024-09-30
  Studies agent-system and interface co-design that incorporates user interruptions and intermediate feedback to reduce planning latency.
- [AXIS: Efficient Human-Agent-Computer Interaction with API-First LLM-Based Agents](https://awesomecua.com/resources/arxiv-2409-17140/) — 2024-09-25
  Introduces AXIS, an API-first application agent that can use UI actions and expand its available APIs through automated application exploration. The work evaluates the approach on Microsoft Word tasks.
- [Steward: Natural Language Web Automation](https://awesomecua.com/resources/arxiv-2409-15441/) — 2024-09-23
  Introduces Steward, a natural-language browser automation system that repeatedly plans and executes website actions. The paper examines completion detection, state representation, responsiveness, and caching in real-site tasks.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.com/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [UINav: A Practical Approach to Train On-Device Automation Agents](https://awesomecua.com/resources/url-ca76de56f3ddbd7c61b4/) — 2024-06
  Trains small Android automation agents from demonstrations, using macro actions with status checks, demonstration augmentation, and a referee model that predicts task completion to guide further demonstrations.
- [UReader: Universal OCR-free Visually-situated Language Understanding with Multimodal Large Language Model](https://awesomecua.com/resources/arxiv-2310-05126/) — 2023-10-08
  Introduces UReader, which combines unified instruction tuning, auxiliary text-reading tasks and shape-adaptive image crops for OCR-free visual language understanding. Its evaluation includes webpage screenshots alongside documents, tables, charts and natural images.
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://awesomecua.com/resources/arxiv-2306-07863/) — 2023-06-13
  Synapse filters task-irrelevant page state and places complete abstracted state-action trajectories into the prompt. An embedding-based exemplar memory retrieves relevant demonstrations for new tasks, evaluated on MiniWoB++ and Mind2Web.
- [Hierarchical Prompting Assists Large Language Model on Web Navigation](https://awesomecua.com/resources/arxiv-2305-14257/) — 2023-05-23
  Separates web navigation prompting into a SUMMARIZER that extracts action-relevant observations and an ACTOR that chooses the next action from the condensed context.
- [VUT: Versatile UI Transformer for Multi-Modal Multi-Task User Interface Modeling](https://awesomecua.com/resources/arxiv-2112-05692/) — 2021-12-10
  The Versatile UI Transformer jointly models interface screenshots, structure, and language for five UI tasks. Its encoder supports element detection when structural metadata is absent, while an autoregressive component handles UI question answering and command grounding.

## Benchmarks

- [Agent Tool Benchmark](https://awesomecua.com/resources/github-alloevil-agent-tool-benchmark/) — Date not recorded
  Provides reproducible same-machine benchmarks comparing AI agent browser and desktop toolkits with full execution transcripts.
- [Browser Agent Comparison (4 Approaches)](https://awesomecua.com/resources/github-ismael-joffroy-chandoutis-browser-agent-comparison/) — Date not recorded
  Compares four AI browser-control paradigms (Chrome extension, Playwright, Browser Use V3, and CLI) on task completion and cost.
- [Browser Automation Benchmark (Python vs Rust)](https://awesomecua.com/resources/github-tashonbraganca-browser-automation-benchmark/) — Date not recorded
  Benchmarks Python Playwright, Rust playwright-rs, and chromiumoxide on headless browser startup, navigation, and screenshot latency.
- [Browser LLM Perf](https://awesomecua.com/resources/github-dtopuzov-browser-llm-perf/) — Date not recorded
  Browser LLM Perf compares browser automation CLIs (CraftDriver vs Playwright CLI) on task completion speed and LLM token cost.
- [decision-luna-browse-control](https://awesomecua.com/resources/github-humanity-forever-decision-luna-browse-control/) — Date not recorded
  Evaluates typed System-One decision models (Luna Decisions and Jev) driving real Chromium browser workflows on synthetic web apps.
- [fast-automation (Plan-Once Ground-Locally)](https://awesomecua.com/resources/github-thedivyanshshukla-plan-once-ground-locally/) — Date not recorded
  Compares plan-once local-grounding web agents against step-by-step ReAct loops across a 200-task benchmark and 2,800 recorded runs.
- [Lexbench-Headless-Browser](https://awesomecua.com/resources/github-lexmount-lexbench-headless-browser/) — Date not recorded
  Lexbench-Headless-Browser benchmarks 13 headless browser automation runtimes across 1,928 web tasks.
- [OSWorld-Human](https://awesomecua.com/resources/github-wuklab-osworld-human/) — Date not recorded
  Human reference trajectories and scoring code for measuring the action efficiency of computer-use agents on OSWorld tasks.
- [Plasmate Benchmarks](https://awesomecua.com/resources/github-plasmate-labs-plasmate-benchmarks/) — Date not recorded
  Plasmate Benchmarks provides reproducible latency, memory, and token-efficiency evaluations for the Plasmate semantic browser engine.
- [Preflight-Bench](https://awesomecua.com/resources/github-multimodal-ai-engineering-preflight-bench/) — Date not recorded
  Preflight-Bench evaluates pre-click staleness checks and page-load synchronization for computer-use agents operating under asynchronous UI updates.
- [Web Agent Comparison](https://awesomecua.com/resources/github-pleasedodisturb-web-agent-comparison/) — Date not recorded
  Reproducible 8-dimension benchmark comparing 7 browser-automation MCP servers on latency, token overhead, and task success.
- [Web Context Bench (Python)](https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/) — Date not recorded
  Local-page benchmark comparing six browser representations on token use, factual reading and target-element selection, with deterministic answer scoring.
- [web-agent-bench](https://awesomecua.com/resources/github-nsosio-web-agent-bench/) — Date not recorded
  web-agent-bench compares browser-automation harnesses (Playwright MCP, agent-browser, Stagehand) on token usage, latency, and task completion.

## Datasets

- [CUA Speedrun results](https://awesomecua.com/resources/url-099451a33699510476df/) — Date not recorded
  Trajectory archives and per-task results from CUA Speedrun evaluations of computer-use models on OSWorld subsets, CUA-World and MyPCBench, with verifier scores, measured task times and recorded or estimated costs.

## Models

- [browserground](https://awesomecua.com/resources/github-renezander030-browserground/) — Date not recorded
  browserground is a compact Qwen3-VL-2B LoRA visual UI-grounding model that maps screenshots and text targets to bounding-box JSON.
- [CombatVLA](https://awesomecua.com/resources/github-chenvoid-combatvla/) — Date not recorded
  CombatVLA is a vision-language-action model and action tracker for real-time combat control in 3D action role-playing PC games.
- [DeskMind Eyes](https://awesomecua.com/resources/github-deskmind-ai-eyes/) — Date not recorded
  DeskMind Eyes is a compact 4B GUI visual grounding model and training recipe for localizing click targets on desktop screenshots.
- [DiMo-GUI](https://awesomecua.com/resources/github-vivo-dimo-gui/) — Date not recorded
  GUI grounding research using modality-aware visual reasoning and test-time scaling.
- [GroundAnything](https://awesomecua.com/resources/github-groundingpi-groundanything/) — Date not recorded
  GroundAnything is a 4B parallel-decoding diffusion grounding model for low-latency visual coordinate localization.
- [Holo4 27B FP8](https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/) — Date not recorded
  FP8 block-quantized release of the Holo4-27B computer-use model; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [Holo4 27B GGUF](https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/) — Date not recorded
  Q4_K_M GGUF release of the Holo4-27B computer-use model with a separate F16 vision projector; an external harness sends it screenshots and tool results and executes the actions and tool calls it requests.
- [Holotron 3 Nano](https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/) — Date not recorded
  Computer-use policy checkpoint that H Company post-trained from NVIDIA Nemotron 3 Nano Omni, a hybrid Mamba-MoE model with 3B of 30B parameters active per token, aimed at lower-latency agent workloads.
- [Holotron-12B](https://awesomecua.com/resources/url-6c16f91d8d79d7836283/) — Date not recorded
  Computer-use policy checkpoint from H Company and NVIDIA, fine-tuned from Nemotron Nano 12B v2 VL on localization and navigation data, with a hybrid SSM-attention backbone for high-throughput multi-image inference.
- [Holotron4 30B-A3B FP8](https://awesomecua.com/resources/url-a72a105e755836154412/) — Date not recorded
  FP8 release of Holotron4-30B-A3B, H Company's computer-use model built on Nemotron 3 Nano Omni; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [HTLM](https://awesomecua.com/resources/github-espetro-htlm/) — Date not recorded
  HTLM is a compact 350M browser-agent model fine-tuned on Mind2Web for fast on-device and in-browser DOM action prediction.
- [KDEGroup/UI-AGILE-3B](https://awesomecua.com/resources/url-642671eabef44827b7de/) — Date not recorded
  A released UI-AGILE checkpoint for GUI grounding, associated with reward design and cropping based resampling during training and image decomposition during inference.
- [kev-browser-use](https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/) — Date not recorded
  kev-browser-use is a compact 0.6B System-One action model fine-tuned on Mind2Web for low-latency browser element selection.
- [Laya-Android](https://awesomecua.com/resources/github-byun11-laya-android/) — Date not recorded
  Laya-Android is a compact 322M on-device decision model for Android GUI action selection.
- [laya-browser](https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/) — Date not recorded
  Non-generative browser-agent policy fine-tuned from the 322M laya encoder: one forward pass over page text and the interactive-element list picks the next operation and its target element.
- [Mano-P](https://awesomecua.com/resources/github-mininglamp-ai-mano-p/) — Date not recorded
  Mano-P is an open-source GUI vision-language-action model optimized for edge devices and evaluated on OSWorld and Mind2Web.
- [Milo-Pointer](https://awesomecua.com/resources/github-chayworks-milo-pointer/) — Date not recorded
  Milo-Pointer uses a 149M on-device text encoder as a fast first-tier router and action selector for mobile phone agents.
- [Muse-Glimmer-30B-GUI-Grounding-Fast](https://awesomecua.com/resources/url-7645072fe9580fa9993a/) — Date not recorded
  A LoRA adapter for Muse-Glimmer-30B that returns a UI element's bounding box from a screenshot and instruction, with examples spanning desktop, mobile, and web screens.
- [OneJev](https://awesomecua.com/resources/github-omnijev-onejev/) — Date not recorded
  OneJev is a multimodal System-One decision model based on Qwen that returns calibrated probabilities over typed action choices.
- [OpenJev](https://awesomecua.com/resources/github-alanhuangyoo-openjev/) — Date not recorded
  Decision models at 1.7B, 4B and 8B that answer typed questions with calibrated probabilities in one pass; trained on browser-agent steps and general decision data, they pick a web agent's next operation and element.
- [PTA-1](https://awesomecua.com/resources/url-303e1926b8ff4f60e006/) — Date not recorded
  AskUI's Florence-2-base grounding model of about 270M parameters that returns a bounding box for a described element in a screenshot, intended for low-latency local computer and phone automation.
- [Qwen2.5-VL-3B-UI-R1-E](https://awesomecua.com/resources/url-72f3737bb5194fd64852/) — Date not recorded
  Qwen2.5-VL-3B-UI-R1-E releases UI-R1-E-3B, a model that predicts click coordinates from interface screenshots and commands, with reported mobile, desktop, and web grounding evaluations.
- [ShowUI](https://awesomecua.com/resources/github-showlab-showui/) — Date not recorded
  Lightweight GUI-agent vision-language-action model from Show Lab and Microsoft, released with UI-guided token selection, training code, the ShowUI-web and ShowUI-desktop datasets and vLLM inference.
- [ShowUI 2B](https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/) — Date not recorded
  ShowUI vision-language-action checkpoint fine-tuned from Qwen2-VL-2B-Instruct, published as a single PyTorch weight file under the MIT license and tagged for GUI agents and computer use.
- [UI-AGILE checkpoint](https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/) — Date not recorded
  The released UI-AGILE model for GUI grounding with reward shaping, crop-based resampling and decomposed selection during inference.
- [ZonUI-3B checkpoint](https://awesomecua.com/resources/url-c8c046847f829fea4821/) — Date not recorded
  Qwen2.5-VL-3B-based GUI grounding checkpoint that predicts click locations from screenshots and text instructions across desktop, mobile and web screens.

## Engineering & industry

- [19ska Computer-Use Automation](https://awesomecua.com/resources/github-19ska-computer-use-automation/) — Date not recorded
  Uses an LLM to discover a UI workflow once and compiles the trajectory into a deterministic replay script.
- [a11y-computer-use](https://awesomecua.com/resources/github-perception-dynamics-inc-a11y-computer-use/) — Date not recorded
  Accessibility-first computer-use runtime that feeds pruned accessibility-tree snapshots to AI agents so they click semantic UI elements.
- [Active Desktop Context Engine](https://awesomecua.com/resources/github-amirf147-active-desktop-context-engine/) — Date not recorded
  Zero-cloud Windows OS perception layer and Model Context Protocol server streaming real-time desktop UI context to AI agents.
- [Agent Access](https://awesomecua.com/resources/github-r266-tech-agent-access/) — Date not recorded
  Universal access layer that routes websites, apps, and repeated workflows into agent-native CLIs with CDP and GUI fallback.
- [Agent Hands](https://awesomecua.com/resources/github-ashishkosana-agent-hands/) — Date not recorded
  Computer-use automation infrastructure for legacy financial software that compiles LLM-discovered UI flows into deterministic replays.
- [Agent WebBridge CLI](https://awesomecua.com/resources/github-0xibra-agent-webbridge-cli/) — Date not recorded
  Clean-room local CDP relay (MV3 Chrome extension + daemon + CLI) for driving a user's real Chrome browser.
- [agent-gauntlet-example-agent](https://awesomecua.com/resources/github-konuktor-agent-gauntlet-example-agent/) — Date not recorded
  Compact single-file reference browser agent designed to run inside a Solari Sandbox under AgentGauntlet evaluation.
- [AgentCursor](https://awesomecua.com/resources/github-kumard3-agentcursor/) — Date not recorded
  Reads macOS application windows as compact text affordances (~9 tokens per click) and drives a human-like virtual cursor over MCP.
- [AgentDock](https://awesomecua.com/resources/github-rakeshnirzari1-agentdock/) — Date not recorded
  Zero-dependency Chrome DevTools Protocol runtime for AI agents to drive headless or headful Chromium directly.
- [Agentic Browser](https://awesomecua.com/resources/github-applejuice093-agentic-browser/) — Date not recorded
  Agent-first Python browser runtime providing stable element references, compact observations, outcome verification, and an MCP server.
- [Agentless](https://awesomecua.com/resources/github-openautocoder-agentless/) — Date not recorded
  Agentless resolves software engineering issues through a three-phase localization, repair, and patch validation pipeline.
- [AgentOCR](https://awesomecua.com/resources/github-agentmaker-agentocr/) — Date not recorded
  AgentOCR provides compact visual-token and OCR screen compression for accelerating GUI and computer-use agents.
- [AgentP](https://awesomecua.com/resources/github-omerfeyzioglu-agentp-macos/) — Date not recorded
  AgentP is a fast macOS computer-use agent where Gemini plans once and a local Jev System-One model executes steps via the Accessibility API.
- [alohajet CLI](https://awesomecua.com/resources/github-alohabrowser-alohajet-cli/) — Date not recorded
  Official Aloha Browser CLI and MCP server for driving a real browser with stable element refs.
- [amcu (Another macOS Computer Use)](https://awesomecua.com/resources/github-uoox-amcu/) — Date not recorded
  Single-binary, dependency-free macOS computer-use tool that reads and drives Mac apps without stealing cursor or window focus.
- [android-use](https://awesomecua.com/resources/github-austinintelligence-android-use/) — Date not recorded
  MCP server and CLI giving AI agents fast, bounded access to physical Android devices and emulators.
- [Antigravity Chrome Bridge](https://awesomecua.com/resources/github-ph4ntom-rev-antigravity-chrome-bridge/) — Date not recorded
  Zero-dependency native C++17 Model Context Protocol server exposing 22 Chrome DevTools automation tools over stdio.
- [anybridge](https://awesomecua.com/resources/github-justvugg-anybridge/) — Date not recorded
  Captures a website's authenticated network calls from a live browser session and exposes them as callable tools for any AI agent.
- [AnyTool](https://awesomecua.com/resources/github-hkuds-anytool/) — Date not recorded
  AnyTool is a universal tool-use layer for AI agents supporting MCP, GUI, web, and shell tools with hierarchical retrieval and self-reflection.
- [AOI (Agent-Computer Observation Interface) & DynaCU-Bench](https://awesomecua.com/resources/github-19pine-ai-aoi/) — Date not recorded
  AOI provides an adaptive video and audio perception layer for computer-use agents alongside the DynaCU-Bench dynamic GUI benchmark.
- [ApexCommander-RS](https://awesomecua.com/resources/github-buckster123-apexcommander-rs/) — Date not recorded
  AT-SPI-first Linux computer-use CLI and Model Context Protocol server written in Rust.
- [ApiTap](https://awesomecua.com/resources/github-n1byn1kt-apitap/) — Date not recorded
  CLI, MCP server, and npm library that observes live browser traffic to turn websites into structured APIs for AI agents.
- [Appwalk](https://awesomecua.com/resources/github-kubstack-appwalk/) — Date not recorded
  AI-powered CLI that explores a web application in a browser and compiles the run into verified Playwright test suites.
- [ASIL (Agent-Software Interaction Layer)](https://awesomecua.com/resources/github-sharryxr-asil/) — Date not recorded
  ASIL replaces screenshot-and-click loops with structured application state observations and semantic action interfaces for CUA.
- [ask-web-ai](https://awesomecua.com/resources/github-pgw10086-ask-web-ai/) — Date not recorded
  Universal Agent Skill and CLI allowing a host coding agent to consult web-based AI chat sessions via browser automation.
- [Astra AI Browser](https://awesomecua.com/resources/github-bennix-astraaibrowser/) — Date not recorded
  Native Apple Silicon macOS AI browser combining WebKit browsing with an integrated autonomous web agent.
- [atlas-desktop](https://awesomecua.com/resources/github-abydin-atlas-desktop/) — Date not recorded
  macOS desktop-control CLI that reads any application's UI hierarchy as structured JSON and dispatches native actions.
- [Auto_OS](https://awesomecua.com/resources/github-jaswanth1902-auto-os/) — Date not recorded
  Sub-30ms Windows desktop automation primitive using direct Win32 UI Automation tree traversal and native input injection.
- [AutoFiller Universal](https://awesomecua.com/resources/github-fedetrain-autofiller-universal/) — Date not recorded
  Batch web-form automation framework with self-healing selectors that runs LLM-free at runtime.
- [Automata](https://awesomecua.com/resources/github-mindattic-automata/) — Date not recorded
  Record-once, replay-many browser automation runtime for Windows that records live user actions into deterministic workflows.
- [AUV](https://awesomecua.com/resources/github-moeru-ai-auv/) — Date not recorded
  Rust toolkit, CLI and MCP server for scripting reusable GUI operations on macOS, Linux and Windows, with native input drivers, accessibility trees, OCR and traced, verifiable action results.
- [axstream](https://awesomecua.com/resources/github-milind-soni-axstream/) — Date not recorded
  Streaming JSON-lines action language and compiler for macOS computer-use agents.
- [azderus browser-agent](https://awesomecua.com/resources/github-azderus-browser-agent/) — Date not recorded
  Claude Code skill that drives a real Chrome window from the terminal and returns compact token-efficient page observations.
- [Better AI Browser Utilities (BABU)](https://awesomecua.com/resources/github-itmediatech-better-ai-browser-utilities/) — Date not recorded
  Token-efficient Model Context Protocol toolkit for controlling an AI agent's real Chrome session.
- [Better AX for Computer Use](https://awesomecua.com/resources/github-hqhq1025-better-ax-for-computer-use/) — Date not recorded
  Better AX for Computer Use prunes and formats macOS Accessibility trees and injects Chromium/Electron AX flags for low-token GUI grounding.
- [Better Computer Use](https://awesomecua.com/resources/github-suge8-better-computer-use/) — Date not recorded
  macOS background desktop control CLI for AI agents supporting window discovery, Accessibility-tree reads, and focus-free input.
- [Bflow (browser-automation-cli)](https://awesomecua.com/resources/github-khbayazidahmed-browser-automation-cli/) — Date not recorded
  Zero-dependency browser automation CLI and visual workflow recorder.
- [bg-driver-rs](https://awesomecua.com/resources/github-lvyuan1688-bg-driver-rs/) — Date not recorded
  Rust background computer-use driver for macOS, Windows, and Linux.
- [browsegrab](https://awesomecua.com/resources/github-arknill-browsegrab/) — Date not recorded
  Token-efficient browser agent and MCP server for local LLMs combining Playwright, accessibility trees, and Markdown extraction.
- [Browser Agent Runtime Lite](https://awesomecua.com/resources/github-coolwkx-browser-agent-runtime-lite/) — Date not recorded
  Lightweight runtime for executing autonomous browser-agent perception and action loops.
- [Browser AI Agent Examples (Tiered Web Agent)](https://awesomecua.com/resources/github-quantumproxies-browser-ai-agent-examples/) — Date not recorded
  Goal-driven web agent architecture using a cheapest-tier-first cascade across XHR discovery, DOM actions, and vision.
- [browser-for-ai (bfa)](https://awesomecua.com/resources/github-icueth-browser-for-ai/) — Date not recorded
  AI-oriented browser automation runtime and CLI exposing compact DOM observations and deterministic web actions.
- [browser-harness-bidi](https://awesomecua.com/resources/github-andrewdzzz-browser-harness-bidi/) — Date not recorded
  WebDriver BiDi-first browser automation harness connecting LLMs directly to live browsers with minimal dependencies.
- [browser-rs-mcp](https://awesomecua.com/resources/github-maestrojeong-browser-rs-mcp/) — Date not recorded
  Lightweight ~5.5MB stealth-oriented Rust browser MCP server allowing multiple AI agents to share one Chrome instance.
- [browser-use-rs](https://awesomecua.com/resources/github-bb-fat-browser-use-rs/) — Date not recorded
  browser-use-rs is a lightweight pure-Rust library for driving Chromium browsers over the Chrome DevTools Protocol with LLM agents.
- [Browser4](https://awesomecua.com/resources/github-platonai-browser4/) — Date not recorded
  Browser4 is an AI-native browser engine and coroutines runtime for high-concurrency web agents, workflow automation, and page extraction.
- [BRYES (Brain-Eyes)](https://awesomecua.com/resources/github-alvseek-bryes/) — Date not recorded
  BRYES decouples a high-level reasoning planner ('Brain') from swappable visual perception and grounding backends ('Eyes') for computer use.
- [bytehunt br (Agent Browser CLI)](https://awesomecua.com/resources/github-bytehunt-br/) — Date not recorded
  Agent-oriented browser CLI powered by Bun WebView with terminal Kitty graphics rendering.
- [Cactus](https://awesomecua.com/resources/github-cactus-compute-cactus/) — Date not recorded
  Cactus is a cross-platform on-device LLM and VLM inference framework for mobile and edge AI agents.
- [cdp-drive](https://awesomecua.com/resources/github-immineal-cdp-drive/) — Date not recorded
  Single-file zero-dependency Chrome DevTools Protocol driver for headless and headful Chrome automation without Playwright.
- [cdp-toolkit](https://awesomecua.com/resources/github-sblattj-cdp-toolkit/) — Date not recorded
  Lightweight alternative to `chrome-devtools-mcp` that lets AI agents target and drive named Chrome tabs over CDP.
- [cdpilot](https://awesomecua.com/resources/github-mehmetnadir-cdpilot/) — Date not recorded
  Zero-dependency browser automation CLI built directly on raw Chrome DevTools Protocol WebSockets without Playwright or Puppeteer.
- [chrome-agent-search](https://awesomecua.com/resources/github-ominiverdi-chrome-agent-search/) — Date not recorded
  Local-first Rust CLI for driving Chrome to perform web searches and extract clean Markdown page content.
- [chrome-eye](https://awesomecua.com/resources/github-trvux-chrome-eye/) — Date not recorded
  Model Context Protocol server exposing 56 structured-JSON Chrome CDP tools to Claude Code as a fast alternative to screenshots.
- [claude-browser-crawl-cdp](https://awesomecua.com/resources/github-gruncode-claude-browser-crawl-cdp/) — Date not recorded
  Persistent Playwright REPL and CDP bridge allowing Claude Code to drive a user's logged-in Chrome browser with low token overhead.
- [claude-chrome-speed](https://awesomecua.com/resources/github-cr1707-claude-chrome-speed/) — Date not recorded
  Claude Code plugin that accelerates Claude in Chrome browser tasks by batching DOM reads and eliminating redundant screenshot waits.
- [clef-use](https://awesomecua.com/resources/github-kotori0919-clef-use/) — Date not recorded
  clef-use is a local computer-use runtime combining structured accessibility, SigLIP2 visual tile grounding, OmniParser, and MCP tools.
- [Clique Já](https://awesomecua.com/resources/github-paivaxqz-cliqueja/) — Date not recorded
  Fast Chrome automation toolkit combining a Manifest V3 extension with a local coordination hub.
- [cloak-cdp-cli](https://awesomecua.com/resources/github-ezumyn-aliegm-cloak-cdp-cli/) — Date not recorded
  Command-line interface for AI agents to drive CloakBrowser stealth Chromium instances over CDP.
- [CoMEM-Agent](https://awesomecua.com/resources/github-wenyiwu0111-comem-agent/) — Date not recorded
  A web GUI agent implementation that retrieves compact embeddings of earlier interaction trajectories as memory. The repository includes inference and training code.
- [Compress2Focus (CCPO)](https://awesomecua.com/resources/github-hithink-research-ccpo/) — Date not recorded
  Compress2Focus (CCPO) implements coordinate compression for multi-turn policy optimization in vision-language GUI agents.
- [Computer Use with SLM (GRPO + OpenEnv)](https://awesomecua.com/resources/github-shayanamir0-computer-use-with-slm/) — Date not recorded
  Fine-tunes small language models for computer-use navigation and GUI interaction using Group Relative Policy Optimization (GRPO) and OpenEnv.
- [Computer-Use Cache](https://awesomecua.com/resources/github-rohanarun-computer-use-cache/) — Date not recorded
  Drop-in OpenAI-compatible caching proxy that records and replays repeated computer-use and browser-agent workflows.
- [Computer-Use Capability Engine](https://awesomecua.com/resources/github-pavanvakula-computer-use-capability-engine/) — Date not recorded
  Discovers legacy UI workflows with an LLM once and compiles them into typed, versioned, deterministically replayable capabilities.
- [computer-use-plus](https://awesomecua.com/resources/github-ethanout-computer-use-plus/) — Date not recorded
  Low-token, low-latency Windows computer-use MCP server with learned action shortcuts and hybrid UIA/CDP/OCR routing.
- [computer.cpp](https://awesomecua.com/resources/github-gobii-ai-computer-cpp/) — Date not recorded
  computer.cpp turns native desktop GUI applications into structured, API-callable interfaces for AI agents.
- [Crafter Agents cuse CLI](https://awesomecua.com/resources/github-crafter-agents-cuse/) — Date not recorded
  Cross-platform computer-use CLI that maps unified commands to native OS accessibility and input primitives.
- [cu (Native GUI Automation CLI)](https://awesomecua.com/resources/github-killsng-cu/) — Date not recorded
  Native GUI automation CLI written in Swift (macOS) and Rust (Windows) for ~50ms state reads and ~100ms clicks.
- [cua-rs-mcp](https://awesomecua.com/resources/github-maestrojeong-cua-rs-mcp/) — Date not recorded
  Rust Model Context Protocol server that drives native macOS apps through the Accessibility API without moving the user's cursor.
- [DART-GUI](https://awesomecua.com/resources/github-computer-use-agents-dart-gui/) — Date not recorded
  DART-GUI implements decoupled multi-turn reinforcement learning and adaptive trajectory curation for training computer-use GUI agents.
- [DeskCtl (Desktop Control Engine)](https://awesomecua.com/resources/github-mini-mind-deskctl/) — Date not recorded
  Desktop control engine for GUI agents using UIA and AT-SPI accessibility trees as the primary path with visual fallback.
- [DeskMind](https://awesomecua.com/resources/github-deskmind-ai-deskmind/) — Date not recorded
  DeskMind is a local-first macOS computer-use agent that combines accessibility inspection, DeskMind Eyes grounding, and user clarification.
- [Desktop Pilot MCP](https://awesomecua.com/resources/github-versoxbt-desktop-pilot-mcp/) — Date not recorded
  Native macOS Accessibility MCP server giving Claude and MCP clients low-latency structured control over desktop applications.
- [desktop-cli](https://awesomecua.com/resources/github-adamsautomations-desktop-cli/) — Date not recorded
  Lightweight computer-use CLI that coding agents invoke directly via shell commands without MCP schema overhead.
- [desktop-hub](https://awesomecua.com/resources/github-zty552252kevin-code-desktop-hub/) — Date not recorded
  Compact 10-tool (~2.3k token) facade MCP server for macOS desktop automation.
- [DesktopAgent (S1-Fast)](https://awesomecua.com/resources/github-elidot007-desktop-agent/) — Date not recorded
  DesktopAgent operates Windows desktop applications in the background using a local 0.33B System-One decision model (S1-Fast) and UI Automation.
- [DesktopCtl](https://awesomecua.com/resources/github-yaroshevych-desktopctl/) — Date not recorded
  GPU-accelerated local macOS CLI for AI agents to inspect screen text/controls and dispatch mouse and keyboard actions.
- [Deterministic Computer-Use Automation](https://awesomecua.com/resources/github-joncody-computer-use-automation/) — Date not recorded
  Two-phase computer-use automation framework that compiles LLM-driven UI discovery into deterministic replay scripts.
- [DietSurf](https://awesomecua.com/resources/github-100x-bot-dietsurf/) — Date not recorded
  Minimalist Chrome side-panel browser agent with a virtual filesystem and shell-like command interface.
- [Digi-Q](https://awesomecua.com/resources/github-digirl-agent-digiq/) — Date not recorded
  Offline device-control training code that learns action values and uses them to select promising actions, with linked trajectories and checkpoints.
- [DistRL](https://awesomecua.com/resources/github-distrl-lab-distrl-open/) — Date not recorded
  Distributed online reinforcement-learning framework for Android agents, with environment setup and trajectory collection tools.
- [DOMShell](https://awesomecua.com/resources/github-apireno-domshell/) — Date not recorded
  DOMShell exposes live Chrome browser DOM trees as a virtual Unix filesystem (`cd`, `ls`, `click`, `text`) for LLM agents via CDP and MCP.
- [DrishtiGuard](https://awesomecua.com/resources/github-atharvasamant4-drishtiguard/) — Date not recorded
  On-device visual privacy firewall that detects and masks sensitive screen regions before lightweight browser agents process frames.
- [Drisp Browser MCP](https://awesomecua.com/resources/github-drisplabs-browser-mcp/) — Date not recorded
  Drisp Browser is a token-efficient browser automation MCP server exposing compact semantic page snapshots and stateful actions.
- [dsh-vision-click](https://awesomecua.com/resources/github-zdd3143-dsh-vision-click/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness using offline `Windows.Media.Ocr` text localization and pre/post-click pixel verification.
- [DXcam](https://awesomecua.com/resources/github-ra1nty-dxcam/) — Date not recorded
  DXcam is a high-frequency Python screen capture library for Windows using the Desktop Duplication API at up to 240Hz for GUI agents.
- [ecobrowser (ai-browser)](https://awesomecua.com/resources/github-haidaresber-ai-browser/) — Date not recorded
  AI-native browser framework with structured page perception, token-efficient state representation, and deterministic action tools.
- [ESP (Echo-Skeleton Perception)](https://awesomecua.com/resources/github-badtheorylabs-esp/) — Date not recorded
  Stateful, event-driven screen-perception runtime that converts UI changes into compact text events for text-only computer-use agents.
- [EvalOps browser-use-rs](https://awesomecua.com/resources/github-dx-corp-browser-use-rs/) — Date not recorded
  Rust behavioral conformance port of the browser-use web agent library for low-overhead autonomous browser control.
- [Evoui Browser](https://awesomecua.com/resources/github-salmonbird-evoui-browser/) — Date not recorded
  Self-evolving browser automation skill for Codex, Claude Code, and Cursor that caches reusable site knowledge.
- [eyehands](https://awesomecua.com/resources/github-shameindemgg-eyehands/) — Date not recorded
  Local HTTP server for Windows that provides low-latency UI Automation inspection and input execution for computer-use agents.
- [FaizannRaza Computer-Use Automation](https://awesomecua.com/resources/github-faizannraza-computer-use-automation/) — Date not recorded
  Discovers legacy banking UI workflows with an LLM once and compiles the run into a deterministic capability artifact.
- [Fara Browser Automation Agent](https://awesomecua.com/resources/github-pmbstyle-fara-agent/) — Date not recorded
  Local browser automation agent powered by Microsoft's Fara-7B computer-use model via LM Studio or Ollama and Playwright.
- [fara-7b-agent](https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/) — Date not recorded
  Minimal, fully local agent harness for running Microsoft's Fara-7B computer-use model on desktop and browser tasks.
- [fast-browser-use](https://awesomecua.com/resources/github-nachafrommars-fast-browser-use/) — Date not recorded
  Rust-based browser automation engine driving Chrome over CDP with built-in anti-bot evasions and low-latency DOM extraction.
- [FastAgent](https://awesomecua.com/resources/github-hkuds-fastagent/) — Date not recorded
  FastAgent is a lightweight multi-agent orchestration framework by HKUDS for low-latency tool, browser, and desktop workflow execution.
- [fastbrowse](https://awesomecua.com/resources/github-agent-labs-dev-fastbrowse/) — Date not recorded
  Browser agent in which TypeSafe's Jev picks each action from controls indexed on the page over CDP, an LLM plans and reads, and code gates inputs, secrets and irreversible steps; answers cite page quotes.
- [FastCUA](https://awesomecua.com/resources/github-guojiz-fastcua/) — Date not recorded
  Local, accessibility-first Windows control plane for AI agents exposing structured UI trees and multi-action execution.
- [faster-browser-agent](https://awesomecua.com/resources/github-mikastiebitz-faster-browser-agent/) — Date not recorded
  Fast MCP browser server for AI agents that navigates complex web apps by reading accessibility trees and application source.
- [FastHands](https://awesomecua.com/resources/github-tomaszteee-fasthands/) — Date not recorded
  Local-first cross-platform execution and web-research runtime for AI agents.
- [FerrisGrid-CLI](https://awesomecua.com/resources/github-brunov21-ferrisgrid-cli/) — Date not recorded
  FerrisGrid-CLI captures screenshots, maps UI regions to deterministic grid coordinates, and executes constrained desktop actions in Rust.
- [FinalRun](https://awesomecua.com/resources/url-3b99bbbd3480dbc1ec6b/) — Date not recorded
  Android UI agent that prunes interface trees, waits for stable screens, feeds action failures back into its decisions, and takes fresh screenshots before grounding actions.
- [Flash Computer Use](https://awesomecua.com/resources/github-shortsspectrumai-del-flash-computer-use/) — Date not recorded
  Flash Computer Use is a hybrid browser DOM and native OS accessibility MCP server for low-latency desktop and web automation.
- [FluidUse](https://awesomecua.com/resources/github-fluidinference-fluiduse/) — Date not recorded
  Swift package for local computer use on Apple silicon that reads forms in running Mac apps or browsers through the Accessibility API and fills them with on-device Core ML decision models.
- [Forged](https://awesomecua.com/resources/github-sam-siavoshian-forged/) — Date not recorded
  Self-learning browser automation MCP server that records successful agent trajectories and replays deterministic Playwright steps.
- [Front-End Operation Master (FEOM)](https://awesomecua.com/resources/github-a92070888-dev-mcp-os-native-automation/) — Date not recorded
  Windows native UI automation framework and MCP server operating over UIA trees with zero vision tokens and ~3.9ms action latency.
- [FSB (Full Self Browsing)](https://awesomecua.com/resources/github-fullselfbrowsing-fsb/) — Date not recorded
  Full Self Browsing (FSB) is a DOM-first browser automation runtime for Chrome and MCP clients with structured page snapshots and action replay.
- [GenPark DOM Accessibility Tree Pruner Skill](https://awesomecua.com/resources/github-alpha-park-genpark-dom-semantic-accessibility-tree-pruner-skill/) — Date not recorded
  Agent skill that compresses raw HTML DOM trees into token-efficient semantic accessibility snapshots.
- [Ghost Browser by Gemma](https://awesomecua.com/resources/github-ddangkong-ghost-browser/) — Date not recorded
  Ghost Browser is a local browser automation agent powered by Gemma 27B via Ollama and evaluated on Stealth Bench.
- [Ghost Semantic OS](https://awesomecua.com/resources/github-zainmfjavaid-ghost-semantic-os/) — Date not recorded
  Ghost Semantic OS provides a text-only semantic accessibility runtime for operating Linux desktop applications in OSWorld without screenshots.
- [Ghosthand](https://awesomecua.com/resources/github-ameerhmz-ghosthand/) — Date not recorded
  Ghosthand is a low-latency local voice and computer-use agent for Apple Silicon macOS powered by Laya models and native Accessibility APIs.
- [GhostHands](https://awesomecua.com/resources/github-georgenijo-ghosthands/) — Date not recorded
  Local Apple Silicon MLX computer-use bridge that drives native macOS apps via the Accessibility API without stealing the physical cursor.
- [Glass Hands](https://awesomecua.com/resources/github-sachaarbonel-glass-hands/) — Date not recorded
  Glass Hands is a Rust framework that connects OpenAI computer-use models directly to Chromium via the Chrome DevTools Protocol.
- [GlassBrowser](https://awesomecua.com/resources/github-lzw12w-glass-browser/) — Date not recorded
  Auditable, low-cost, DOM-only browser agent designed for transparent step-by-step inspection and debugging.
- [gpuview](https://awesomecua.com/resources/github-onlyterp-gpuview/) — Date not recorded
  GPU-native Windows screen perception tool capturing frames directly from the DXGI Desktop Duplication compositor handoff for AI agents.
- [gridhand](https://awesomecua.com/resources/github-zachrouan-gridhand/) — Date not recorded
  Zero-dependency Rust CLI for cross-platform GUI automation that overlays labeled coordinate grids onto screenshots for deterministic clicking.
- [gsearch-rs](https://awesomecua.com/resources/github-be90nia-gsearch-rs/) — Date not recorded
  Single-binary zero-extension Rust CLI driving local Chrome for AI-first web search and page extraction.
- [GUI Grounding Evaluation Harness](https://awesomecua.com/resources/github-patrickstarl-gui-grounding-eval/) — Date not recorded
  ScreenSpot-Pro evaluation harness with explicit coordinate transforms, prompt and crop-based inference comparisons, and per-sample grounding accuracy and cost records.
- [GUI-RC / GUI-RCPO](https://awesomecua.com/resources/github-zju-real-gui-rcpo/) — Date not recorded
  GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.
- [haden-browser](https://awesomecua.com/resources/github-haden-min-haden-browser/) — Date not recorded
  Fast, AI-first web browser exposed as a local Model Context Protocol server for LLM agents.
- [Handrail CUA](https://awesomecua.com/resources/github-codelit-io-handrail-cua/) — Date not recorded
  Discover-once, replay-many computer-use automation framework with deterministic execution guardrails.
- [Harborage](https://awesomecua.com/resources/github-vadym-iefremov-harborage/) — Date not recorded
  On-demand pool manager providing isolated headless browser sessions for concurrent AI web agents.
- [HiconAgent](https://awesomecua.com/resources/github-ilearn-lab-cvpr26-hiconagent/) — Date not recorded
  HiconAgent provides GUI-policy training code that samples histories of varied lengths and compresses past interactions during policy optimization.
- [hwatu](https://awesomecua.com/resources/github-hongnoul-hwatu/) — Date not recorded
  Headless verification browser for AI coding agents featuring 35ms one-call UI checks and pixel diffing.
- [IdemStep](https://awesomecua.com/resources/github-supermarioyl-idemstep/) — Date not recorded
  Deduplicates repeated agent actions and HTTP retries using keyed idempotency caches and a local verification proxy.
- [Intent Browser Runtime (ibr)](https://awesomecua.com/resources/github-hop-top-ibr/) — Date not recorded
  Intent Browser Runtime (ibr) translates natural-language instructions into resilient XPath/DOM actions using Playwright and Vercel AI SDK.
- [iphone-use](https://awesomecua.com/resources/github-leeguooooo-iphone-use/) — Date not recorded
  MCP server and CLI that lets Claude Code, Codex, and MCP agents read real iPhone screens as structured text and execute taps/swipes.
- [jarvis-eyes-mcp](https://awesomecua.com/resources/github-harshil1502-jarvis-eyes-mcp/) — Date not recorded
  macOS-native Model Context Protocol server for low-latency desktop awareness combining Accessibility tree extraction and screenshots.
- [Jcua (Jev Computer Use Agent)](https://awesomecua.com/resources/github-1deat0r-jcua/) — Date not recorded
  Jcua is a cross-platform computer-use agent powered by Jev decision models across Linux, Windows, and macOS desktops.
- [Jet Browser](https://awesomecua.com/resources/github-masakaai-jet-browser/) — Date not recorded
  Jet Browser packages WPE WebKit and a Rust WebDriver bridge into an isolated, low-footprint container runtime for AI web agents.
- [Jev Browser Agent](https://awesomecua.com/resources/github-amyivychoi-jev-browser-agent/) — Date not recorded
  Jev Browser Agent combines Browser Use DOM extraction, Jev System-One action selection, and deterministic browser harness execution.
- [Jev Filter](https://awesomecua.com/resources/github-apixly-ai-jev-filter/) — Date not recorded
  Jev Filter uses compact System-One models to semantically prune large DOM snapshots, logs, and tool outputs before they enter agent context.
- [Jev for Chrome](https://awesomecua.com/resources/github-chy4pro-jev-for-chrome/) — Date not recorded
  Chrome extension agent that sends an indexed table of visible page controls to the TypeSafe Jev decision model, asks a small text model only for typed strings, and acts through Chrome's debugger input.
- [Jev macOS Loop](https://awesomecua.com/resources/github-jcpsimmons-jev-macos-loop/) — Date not recorded
  Jev macOS Loop combines Apple Silicon local Jev decision models, OmniParser grounding, and native macOS Accessibility actuation.
- [jev-browser](https://awesomecua.com/resources/github-doruktarhan-jev-browser/) — Date not recorded
  jev-browser is a Claude Code skill and CLI (`jb`) that delegates multi-step web navigation to the Jev System-One action model.
- [jev-for-chrome](https://awesomecua.com/resources/github-luciferlu755-jev-for-chrome/) — Date not recorded
  Chrome extension that drives web browsing, clicking, and typing using TypeSafe Jev System-One decision models.
- [jev-use](https://awesomecua.com/resources/github-savka777-jev-use/) — Date not recorded
  macOS voice and typed computer-use app that walks the front app's Accessibility tree, has the hosted Jev model pick an operation and a numbered target each step, and acts via Accessibility actions and synthetic input.
- [jev-windows-agent](https://awesomecua.com/resources/github-vbs2004-jev-windows-agent/) — Date not recorded
  jev-windows-agent pairs Windows UI Automation inspection with a fast Jev System-One decision loop for low-latency desktop control.
- [Kiko Windows Voice Assistant](https://awesomecua.com/resources/github-blazecodeprakhar-kiko-windows-voice-assistant/) — Date not recorded
  Native, 100% offline Windows desktop voice and GUI automation assistant.
- [Kitewright](https://awesomecua.com/resources/github-kitewright-kitewright/) — Date not recorded
  Single-binary ~7MB Rust browser-automation Model Context Protocol server supporting Streamable HTTP and stdio.
- [lean-chronoscope-mcp](https://awesomecua.com/resources/github-yyhezkel-lean-chronoscope-mcp/) — Date not recorded
  Token-efficient headless Chrome MCP server in Docker that records console, network, and DOM timelines for coding agents.
- [Legacy UI Capability Engine](https://awesomecua.com/resources/github-saitejareddi3636-legacy-ui-capability-engine/) — Date not recorded
  Learns a legacy browser workflow once with an LLM and compiles it into a verified, reusable capability module.
- [LegacyBridge](https://awesomecua.com/resources/github-peterhaupt-legacybridge/) — Date not recorded
  Local open-weight LLM agent framework for automating legacy enterprise ERP and business desktop software without APIs.
- [Lightfeed Replayable Browser Agent](https://awesomecua.com/resources/github-lightfeed-browser-agent/) — Date not recorded
  TypeScript browser agent library that uses an LLM to complete a web navigation workflow once and replays cached selectors with zero LLM tokens.
- [linux-use](https://awesomecua.com/resources/github-javimosch-linux-use/) — Date not recorded
  Agent-first, CLI-first GUI control toolkit for Linux desktops operating over the AT-SPI2 accessibility tree.
- [Local Computer-Use Agent](https://awesomecua.com/resources/github-storage1n1-local-computer-use-agent/) — Date not recorded
  Offline computer-use agent combining Ollama vision-language models (`qwen3-vl`, `minicpm-v`) with Set-of-Marks grounding and crop-zoom refinement.
- [Local Grounding MCP](https://awesomecua.com/resources/github-archie-ib-dev-local-grounding-mcp/) — Date not recorded
  Local Grounding MCP provides privacy-first local visual grounding fallback and DOM-visual hybrid routing for MCP browser agents on Apple Silicon.
- [local-browser-agent](https://awesomecua.com/resources/github-yourself-q-local-browser-agent/) — Date not recorded
  Local-first browser agent that attaches to an existing Chrome instance via CDP and runs entirely on local Ollama LLMs.
- [local-windows-use](https://awesomecua.com/resources/github-yuhuison-local-windows-use/) — Date not recorded
  MCP server and CLI that lets frontier LLMs delegate token-heavy Windows desktop and browser clicking loops to compact local models.
- [LockInTime headless](https://awesomecua.com/resources/github-lockintime-headless/) — Date not recorded
  Persistent, safety-enforced browser control runtime for AI agents with a semantic CLI.
- [LOCR (Lightweight OCR)](https://awesomecua.com/resources/github-dmzlingyin-locr/) — Date not recorded
  LOCR is a lightweight cross-platform clipboard and screen OCR utility based on RapidOCR.
- [loki-auto](https://awesomecua.com/resources/github-loki4agent-loki-auto/) — Date not recorded
  Zero-dependency in-browser web automation runtime with an embedded sandbox and Model Context Protocol server for LLMs.
- [Lolaplex .agents/browser](https://awesomecua.com/resources/github-lolaplex-agents-browser/) — Date not recorded
  Zero-Node Python Chrome DevTools Protocol browser MCP server for AI coding agents.
- [Lusipad Browser Agent](https://awesomecua.com/resources/github-lusipad-browser-agent/) — Date not recorded
  Chrome sidebar autonomous AI browser agent featuring visual ROI perception, dual-process fast/slow cognition, and local LLM support.
- [lvyuan1688 browser-use-rs](https://awesomecua.com/resources/github-lvyuan1688-browser-use-rs/) — Date not recorded
  Rust port of the Browser Use architecture enabling LLMs to control web browsers with native speed.
- [mac-pilot](https://awesomecua.com/resources/github-shxmi03-mac-pilot/) — Date not recorded
  Zero-dependency macOS automation CLI and MCP server built on Python `ctypes` and CoreGraphics.
- [maponce](https://awesomecua.com/resources/github-shivampatel0714-maponce/) — Date not recorded
  Uses an LLM to map or record browser automations once and replays them deterministically via Playwright without LLM calls.
- [Marey](https://awesomecua.com/resources/github-badalraj9-marey/) — Date not recorded
  Marey is a modular perception engine for computer-use agents that tracks screen changes and extracts UI elements with minimal model calls.
- [Master Internet Unit](https://awesomecua.com/resources/github-0bifthenelse-master-internet-unit/) — Date not recorded
  High-performance Rust Model Context Protocol browser server for AI agents.
- [MAWR (Machine-Aware Web Runtime)](https://awesomecua.com/resources/github-iasolutionorg-mawr/) — Date not recorded
  Open-source, Chromium-free lightweight web runtime engineered specifically for machines and AI web agents.
- [MCP Master Puppeteer](https://awesomecua.com/resources/github-flrngel-mcp-master-puppeteer/) — Date not recorded
  MCP Master Puppeteer is a Puppeteer Model Context Protocol server optimized for minimal token usage via compact DOM/accessibility extraction.
- [Mem0](https://awesomecua.com/resources/github-mem0ai-mem0/) — Date not recorded
  Mem0 provides a scalable long-term memory layer for AI agents that extracts, consolidates, and retrieves user and session facts.
- [mew-agent](https://awesomecua.com/resources/github-kaiizer777-mew-agent/) — Date not recorded
  mew-agent is a Rust-native browser agent that drives visible Chromium via CDP using accessibility-tree perception and vision fallback.
- [Milli-Agent](https://awesomecua.com/resources/github-abdullah-al-raju-milli-agent/) — Date not recorded
  Milli-Agent is a real-time computer-use agent architecture designed for high-frequency in-memory screen capture and low-latency actuation.
- [mllm](https://awesomecua.com/resources/github-ubiquitouslearning-mllm/) — Date not recorded
  mllm is a C++ multimodal LLM inference engine optimized for on-device execution on mobile NPU/CPU hardware.
- [MobileRAG](https://awesomecua.com/resources/github-liuxiaojieoutofworld-mobilerag-arxiv/) — Date not recorded
  MobileRAG operates Android devices via ADB by combining local app retrieval, historical trajectory memory, and external web search.
- [my_tiny_agent](https://awesomecua.com/resources/github-yanjin101-my-tiny-agent/) — Date not recorded
  Spec-driven small-LLM desktop agent that operates Windows end-to-end using OCR, YOLO icon detection, and Win32 APIs without a VLM.
- [nexus-browser-mcp](https://awesomecua.com/resources/github-paipaipai666-nexus-browser-mcp/) — Date not recorded
  Browser automation MCP server with event-driven deterministic Playwright and accessibility-tree snapshots.
- [Northstar (Legacy Portal CUA)](https://awesomecua.com/resources/github-zoyaarief-legacy-credit-union-automation/) — Date not recorded
  Discovers workflows on legacy credit-union web portals with an AI agent once and compiles them into deterministic scripts.
- [Offhand](https://awesomecua.com/resources/github-humzakhan-offhand/) — Date not recorded
  Offhand is an offline, accessibility-first desktop agent for macOS and Windows powered by compact local vision-language models.
- [Ommatix](https://awesomecua.com/resources/github-yosoyepa-ommatix/) — Date not recorded
  Ommatix is an incremental spatial-indexing perception engine that tracks stable UI element IDs and state diffs across desktop frames.
- [OmniInfer](https://awesomecua.com/resources/github-omnimind-ai-omniinfer/) — Date not recorded
  OmniInfer is a local LLM and VLM inference engine with OpenAI-compatible APIs for desktop and edge agents.
- [OmOWright](https://awesomecua.com/resources/github-code-yeongyu-omowright/) — Date not recorded
  AI-agent-oriented wrapper around Playwright that exposes the Playwright API shape models already know from pretraining.
- [omp-cua](https://awesomecua.com/resources/github-wolfiesch-omp-cua/) — Date not recorded
  Low-overhead Cua Driver computer-use integration for the Oh My Pi coding agent.
- [only-cli (oc)](https://awesomecua.com/resources/github-only-cli-oc/) — Date not recorded
  Compiles websites into compact, token-efficient CLI commands tailored for AI agents.
- [op-browse-the-web-skill](https://awesomecua.com/resources/github-vb-tyagi-op-browse-the-web-skill/) — Date not recorded
  Single-file zero-cost autonomous web browsing skill for Claude Code.
- [Openbrowser (Semantic Headless Runtime)](https://awesomecua.com/resources/github-datuomart5423-openbrowser/) — Date not recorded
  Headless browser runtime that converts webpages into compact structured semantic state for AI agents.
- [OpenComputer](https://awesomecua.com/resources/github-andykr1k-opencomputer/) — Date not recorded
  OpenComputer is a local-first cross-platform computer-use agent for Linux, Windows, and macOS powered by local vision-language models.
- [OpenControl](https://awesomecua.com/resources/github-joshuaalawrence-opencontrol/) — Date not recorded
  Single-binary ~2MB Rust Model Context Protocol server exposing 54 native Windows desktop control, UI Automation, and screenshot tools.
- [OpenGUI (Windows Native Service)](https://awesomecua.com/resources/github-lessenings-prog-opengui/) — Date not recorded
  Windows-native .NET 9 desktop automation service exposing sub-millisecond named-pipe IPC and UI Automation perception to LLM agents.
- [OpenOCR](https://awesomecua.com/resources/github-topdu-openocr/) — Date not recorded
  OpenOCR is an open-source scene and document text detection, recognition, and VLM-OCR toolkit used for screen text parsing.
- [OpenVINO Autonomous GUI Agent](https://awesomecua.com/resources/github-shehrozkashif-openvino-autonomous-gui-agent/) — Date not recorded
  Fully local desktop GUI agent running five INT4 OpenVINO models for screen perception, planning, action execution, and step verification.
- [Orynn](https://awesomecua.com/resources/github-robomohit-orynn/) — Date not recorded
  Orynn is a Windows desktop agent that controls native applications by UI Automation control names without screenshot loops.
- [OSWright](https://awesomecua.com/resources/github-ask-812-oswright/) — Date not recorded
  Windows desktop automation MCP server using incremental UI Automation state diffs rather than full-screen vision loops.
- [Owl Browser Claude Code Plugin](https://awesomecua.com/resources/github-olib-ai-owl-browser-claude-plugin/) — Date not recorded
  Claude Code plugin for Owl Browser providing handle-indexed page reading and agent-native browser automation.
- [PageKit](https://awesomecua.com/resources/github-ken-u-pagekit/) — Date not recorded
  Turns spare Android phones into free web search, page fetch, and real-browser automation nodes for AI agents.
- [Paragent](https://awesomecua.com/resources/github-myselfsiddharth-paragent/) — Date not recorded
  Stateful browser execution layer that records an agent task once, replays it without LLM calls, and self-repairs when selectors change.
- [parallel-browser-mcp](https://awesomecua.com/resources/github-etairl-parallel-browser-mcp/) — Date not recorded
  Model Context Protocol server for parallel multi-session browser automation across local and cloud browser providers.
- [pc-screen-control](https://awesomecua.com/resources/github-desteny-dev-pc-screen-control/) — Date not recorded
  Windows Model Context Protocol server that exposes the desktop accessibility tree as structured data rather than screenshots.
- [pebkac](https://awesomecua.com/resources/github-michaelsoftmd-pebkac-chrome/) — Date not recorded
  Self-hosted web co-browser in which a smolagents code agent on a local llama.cpp model writes Python that drives Chrome through Zendriver: navigation, CSS-selector clicks and typing, Trafilatura text extraction and tabs.
- [perceive](https://awesomecua.com/resources/github-gauthierpiarrette-perceive/) — Date not recorded
  perceive is a reachability-filtered perception layer for browser agents that prunes non-interactive or occluded DOM elements.
- [PhoneClaw](https://awesomecua.com/resources/github-kellyvv-phoneclaw/) — Date not recorded
  PhoneClaw turns iOS and Android smartphones into local AI agent runtimes with on-device model inference and native system skills.
- [PhoneCLI](https://awesomecua.com/resources/github-hkuds-phonecli/) — Date not recorded
  Mobile-agent harness that crawls an app into a YAML map of screens, replays compiled navigation commands through WebDriverAgent on iOS or ADB on Android, and falls back to a VLM for unseen screens.
- [Pi Jev Browser](https://awesomecua.com/resources/github-laihenyi-pi-jev-browser/) — Date not recorded
  Pi Jev Browser is a browser and macOS agent for the pi coding harness where Jev selects actions over structured page observations.
- [pixelpi](https://awesomecua.com/resources/github-josharsh-pixelpi/) — Date not recorded
  Minimal 6-tool browser-agent harness whose entire tool definition fits in 1,196 tokens for context-efficient web automation.
- [Plasmate](https://awesomecua.com/resources/github-plasmate-labs-plasmate/) — Date not recorded
  Plasmate is a Rust browser engine for AI agents that transforms HTML and DOM state into a compact, actionable Semantic Object Model.
- [Playwright CLI](https://awesomecua.com/resources/github-microsoft-playwright-cli/) — Date not recorded
  Playwright CLI provides a token-efficient command-line interface and skill set for coding and computer-use agents to automate web browsers.
- [POK-Agent](https://awesomecua.com/resources/github-acekorneya-pok-agent/) — Date not recorded
  POK-Agent is a Windows computer-use agent that pairs a cloud planner with a fast local actor and caches repeated UI workflows as skills.
- [PreAct](https://awesomecua.com/resources/github-19pine-ai-preact/) — Date not recorded
  PreAct compiles repeated computer-use agent trajectories into cached action graphs with lightweight visual verification to accelerate execution.
- [Predicate Systems (formerly SentienceAPI)](https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/) — Date not recorded
  Runtime trust layer for browser agents: a sidecar checks each action against local policy before it runs, and SDKs turn pages into compact ranked element snapshots and verify outcomes with DOM assertions.
- [Project Interface (Legacy Web UI Compiler)](https://awesomecua.com/resources/github-shahadeven-project-interface/) — Date not recorded
  Uses an LLM to discover how to complete a task in a legacy web UI once and distills the run into a reusable programmatic interface.
- [Public Browser](https://awesomecua.com/resources/github-silbercue-public-browser/) — Date not recorded
  Token-efficient Chrome automation bridge and CLI for Claude Code and Cursor.
- [PuterVision Behavior-MCP](https://awesomecua.com/resources/github-putervision-behavior-mcp/) — Date not recorded
  High-frequency (~60Hz) in-browser behavior-tree execution engine exposed over the Model Context Protocol.
- [Rapid PC Use](https://awesomecua.com/resources/github-tntcannon5000-rapid-pc-use/) — Date not recorded
  High-speed native Windows desktop control bridge for Codex and ChatGPT desktop.
- [Raystyle Browser Harness](https://awesomecua.com/resources/github-raystyle-browser-harness/) — Date not recorded
  Persistent daemon and CLI exposing 652 Chrome DevTools Protocol methods directly to LLMs for human-agent shared browsing.
- [Re-Prefill](https://awesomecua.com/resources/github-linjiaping1-re-prefill/) — Date not recorded
  Re-Prefill calibrates prefill visual attention representations in vision-language models to improve zero-shot GUI grounding accuracy.
- [recast](https://awesomecua.com/resources/github-yagna-1-recast/) — Date not recorded
  Compiler that converts recorded AI browser-agent execution traces into deterministic, zero-token Playwright test scripts.
- [Replay AI](https://awesomecua.com/resources/github-bryansbtian-replay-ai/) — Date not recorded
  Discovers UI workflows once using a local LLM and compiles the successful trajectory into a deterministic replay script.
- [reverseloom](https://awesomecua.com/resources/github-kuichi-x-reverseloom/) — Date not recorded
  AI browser agent framework that inspects live web traffic to reverse-engineer site protocols into browser-free Python crawlers.
- [RishabhP1508 Understudy](https://awesomecua.com/resources/github-rishabhp1508-understudy/) — Date not recorded
  Records a single LLM-driven exploration of a legacy UI into a typed capability artifact for deterministic zero-LLM replay.
- [rote](https://awesomecua.com/resources/github-bhuvanb3110-rote/) — Date not recorded
  Record-once, replay-many computer-use automation framework for legacy banking and back-office web applications lacking APIs.
- [rs_peekaboo](https://awesomecua.com/resources/github-undivisible-rs-peekaboo/) — Date not recorded
  Rust-native cross-platform computer-use CLI and library for desktop window inspection, screenshots, and input automation.
- [SCALE-CUA (THUDM)](https://awesomecua.com/resources/github-thudm-scale-cua/) — Date not recorded
  Computer-use training framework with VeriGen task synthesis, adaptive rollout sampling, and visual-context segmentation.
- [SCoR (Sparse Context Reset)](https://awesomecua.com/resources/github-huia711-scor/) — Date not recorded
  Sparse Context Reset (SCoR) framework for preventing context overflow and drift in long-horizon GUI agents.
- [Scout Browser Agent](https://awesomecua.com/resources/github-sanjeev29-scout-browser-agent/) — Date not recorded
  Browser agent using a 4-layer perception cascade from lightweight HTTP text to accessibility trees and vision fallback.
- [Scout Browser Binary](https://awesomecua.com/resources/github-klarlabs-studio-scout/) — Date not recorded
  Single-binary Go browser automation CLI and built-in MCP server that drives Chromium without Node.js or Python dependencies.
- [ScreenHand](https://awesomecua.com/resources/github-manushi4-screenhand/) — Date not recorded
  Open-source desktop automation MCP server that drives native macOS and Windows UI elements in ~50ms via OS accessibility APIs.
- [ScreenPilot](https://awesomecua.com/resources/github-droppinganvil-screenpilot/) — Date not recorded
  ScreenPilot is a local computer-use agent designed to run within 8GB of VRAM, combining screenshot planning with mouse and keyboard control.
- [Semantic Browser (agent-browser)](https://awesomecua.com/resources/github-atreasureboy-agent-browser/) — Date not recorded
  Agent-readable semantic browser layer providing token-efficient webpage understanding and structured action execution.
- [Semantic GUI Control Layer (SGCL)](https://awesomecua.com/resources/github-frankbria-semantic-gui-control/) — Date not recorded
  SGCL is a cross-platform, text-first control layer that exposes graphical user interfaces to agents as structured semantic affordances.
- [servo-agent](https://awesomecua.com/resources/github-parker-brown-family-servo-agent/) — Date not recorded
  Agent-controllable web browser built on the Rust Servo engine that distills live rendered DOM layouts into compact agent observations.
- [settled-computer](https://awesomecua.com/resources/github-remote-skills-settled-computer/) — Date not recorded
  settled-computer is an event-driven MCP server that detects UI rendering quiescence so computer-use agents avoid fixed sleep delays and stale frames.
- [Shinken](https://awesomecua.com/resources/github-meirtz-shinken/) — Date not recorded
  Shinken is a high-throughput runtime for training computer-use agents end-to-end with reinforcement learning across parallel real desktops.
- [Shiny Fishstick](https://awesomecua.com/resources/github-hootsworth-shiny-fishstick/) — Date not recorded
  Semantic web compiler that crawls websites and compiles them into typed, reusable action and data interfaces for AI agents.
- [SimpAgent](https://awesomecua.com/resources/github-jiutian-vl-simpagent/) — Date not recorded
  SimpAgent implements context-aware history simplification and visual token pruning to accelerate multimodal GUI agents.
- [SimpleMem](https://awesomecua.com/resources/github-aiming-lab-simplemem/) — Date not recorded
  SimpleMem provides semantic lossless memory compression and multimodal retrieval for long-horizon LLM and desktop/CLI agents.
- [SiteWarden](https://awesomecua.com/resources/github-shantodotdev-sitewarden/) — Date not recorded
  Autonomous, lightweight browser smoke-testing daemon written in Rust for continuous website verification.
- [slidevim](https://awesomecua.com/resources/github-jaisharmz-slidevim/) — Date not recorded
  Vim-grammar command language and text protocol for driving Google Slides in the browser.
- [Snapsurf](https://awesomecua.com/resources/github-zumerlab-snapsurf/) — Date not recorded
  Web navigation and verification layer for AI agents providing compact semantic page digests and typed post-action DOM diffs.
- [Spectra MCP](https://awesomecua.com/resources/github-astroqueststudio-spectra-mcp/) — Date not recorded
  Native Rust Model Context Protocol server that drives Chrome directly over the Chrome DevTools Protocol.
- [Spooky Action](https://awesomecua.com/resources/github-jumpsy-spooky-action/) — Date not recorded
  Focus-free macOS computer-use tool that presses native Accessibility buttons in the background without moving the user's cursor.
- [Stagehand](https://awesomecua.com/resources/url-0210d8713fd41ca1448f/) — Date not recorded
  An SDK for browser agents that combines Playwright-style page control with natural-language actions, observation, and extraction. It runs beside the browser as an extension.
- [super-computer-use](https://awesomecua.com/resources/github-paperfoot-super-computer-use/) — Date not recorded
  Low-latency macOS computer-use driver (~35ms per action) supporting batched multi-step UI workflows.
- [System1-Agents](https://awesomecua.com/resources/github-thinkflowlab-system1-agents/) — Date not recorded
  Framework that puts System 1 decision models such as Jev, Laya or Cua-S1 in openJiuwen agents to pick one typed option per step; ships browser, desktop-app, game, ALFWorld and ticket-routing agents.
- [TalkAct](https://awesomecua.com/resources/github-19pine-ai-talkact/) — Date not recorded
  TalkAct is a dual-model voice and computer-use agent that conducts real-time spoken dialogue while executing background GUI actions.
- [Taprun (tap)](https://awesomecua.com/resources/github-leonting1010-tap/) — Date not recorded
  Captures a logged-in browser task demonstration once and compiles it into a deterministic zero-token replay skill.
- [Terminal Computer Use](https://awesomecua.com/resources/github-vivekkartha-terminal-computer-use/) — Date not recorded
  Terminal Computer Use provides shell-based desktop automation skills for managing files, windows, and clipboards without screenshot loops.
- [TERX](https://awesomecua.com/resources/github-ixchio-terx/) — Date not recorded
  Browser-agent procedural memory and MCP server that compiles repeated web workflows into deterministic zero-token replays.
- [TideSurf](https://awesomecua.com/resources/github-tidesurf-core/) — Date not recorded
  TideSurf connects Chromium to LLM agents via compact structured DOM compression requiring 50 to 200 tokens per webpage.
- [tinybrowser](https://awesomecua.com/resources/github-tinyhumansai-tinybrowser/) — Date not recorded
  Rust-friendly agent browser API and TinyBus module for managing headless and headful web sessions.
- [ToolCUA](https://awesomecua.com/resources/github-x-plug-toolcua/) — Date not recorded
  ToolCUA trains computer-use agents to orchestrate hybrid MCP tool invocations and GUI actions on OSWorld-MCP.
- [ToolTok](https://awesomecua.com/resources/github-zephinuecode-tooltok/) — Date not recorded
  ToolTok introduces atomic directional cursor-movement tokens for multi-step iterative GUI visual grounding on ScreenSpot and ScreenSpot-Pro.
- [typesafe-computer-use](https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/) — Date not recorded
  Computer-use loop that reads the screen with OCR and accessibility labels, has the hosted TypeSafe classifier choose each next action with a confidence, and calls a writer model only for free text.
- [UI2API](https://awesomecua.com/resources/github-merezarezaei-ui2api/) — Date not recorded
  Analyzes a website's UI and network traffic once to synthesize reusable, browser-free API tools for AI agents.
- [UltraWin MCP](https://awesomecua.com/resources/github-jxoesneon-ultrawin-mcp/) — Date not recorded
  Rust Model Context Protocol server for Windows desktop automation providing native UI Automation tree inspection and input control.
- [Unbrowse](https://awesomecua.com/resources/github-unbrowse-ai-unbrowse/) — Date not recorded
  Unbrowse captures browser network traffic to reverse-engineer internal website APIs into direct callable tools for AI agents.
- [VACT (Vector Agent Context Transport)](https://awesomecua.com/resources/github-fy2ne-vact/) — Date not recorded
  High-frequency GPU screen perception and low-latency input transport protocol for desktop computer-use agents.
- [Vedanshu7 Operant](https://awesomecua.com/resources/github-vedanshu7-operant/) — Date not recorded
  Discovers how to complete a task in a no-API application once with an LLM and compiles the trace for repeatable execution.
- [VG-GUI-TASKER](https://awesomecua.com/resources/github-vg-gui-tasker-vg-gui-tasker/) — Date not recorded
  VG-GUI-TASKER extracts informative keyframes from instructional demonstration videos to guide multimodal GUI agents.
- [VisionAX](https://awesomecua.com/resources/github-rao-studios-visionax/) — Date not recorded
  Computer-vision accessibility-tree (AX/A11Y) generator that synthesizes structured UI trees from raw desktop pixels.
- [Visual Context Router](https://awesomecua.com/resources/github-fangsylar-pixel-visual-context-router/) — Date not recorded
  Token-aware visual context router that crops, downscales, or replaces full screenshots with localized regions before sending to CUA models.
- [VoltageInputMcp](https://awesomecua.com/resources/github-casualkre-voltage-input-mcp/) — Date not recorded
  Two-layer local input engine for MCP where a frontier planning model dispatches high-rate action programs to a local executor.
- [WAREX Supplementary Code](https://awesomecua.com/resources/github-sumanknath-waber/) — Date not recorded
  WAREX supplementary code uses mitmproxy add-ons to inject popups or server and network errors into web-agent tests and record token use and latency.
- [WebAgents Protocol](https://awesomecua.com/resources/github-betterwright-webagents/) — Date not recorded
  Open protocol specification and toolkit exposing batch-native website actions to browser agents.
- [Webcmd](https://awesomecua.com/resources/github-agentrhq-webcmd/) — Date not recorded
  Webcmd captures and indexes website navigational context as agents browse, compiling site structure into reusable local memory skills.
- [WebRain](https://awesomecua.com/resources/github-prokopis3-webrain/) — Date not recorded
  Single-binary Rust Model Context Protocol server for LLM-driven browser automation and web scraping across three browser engines.
- [WebSense MCP 2.0](https://awesomecua.com/resources/github-spliffspliff70-wq-websense-mcp/) — Date not recorded
  Non-vision browser automation Model Context Protocol server exposing 7 compact DOM-sensing and action tools.
- [Workroom (MLX Computer-Use Agent)](https://awesomecua.com/resources/github-iamibrahimmemon-mlx-llm-workroom/) — Date not recorded
  Workroom is a fully local macOS computer-use agent running an Apple Silicon MLX vision-language model to read screens and execute commands.
- [Zoom Search](https://awesomecua.com/resources/github-goofrey-zoom-search/) — Date not recorded
  Zoom Search is a hierarchical web-search agent that previews lightweight page summaries before selectively fetching full webpage content.
- [ZRui-C DSH Computer Use](https://awesomecua.com/resources/github-zrui-c-dsh-computer-use/) — Date not recorded
  Text-first browser and background macOS window control plugin for DeepSeek Harness.
- [zseven-w DSH Browser](https://awesomecua.com/resources/github-zseven-w-dsh-browser/) — Date not recorded
  Headless-first browser automation plugin for DeepSeek Harness.
