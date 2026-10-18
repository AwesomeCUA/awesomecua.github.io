# 手机操作

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/mobile-navigation/records.jsonl

## 论文与综述

- [How GUI Agents Fail: GraceBench for Execution Stability Diagnosis](https://awesomecua.github.io/resources/arxiv-2610-19900/) — 2026-10-14
  Introduces GraceBench, using application transition graphs and recorded interaction evidence to diagnose deviations, loops, and recovery that final task-success scores can hide.
- [Learning How to Remember: Memory Modality Selection for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-17928/) — 2026-10-13
  Introduces SwitchMem, which chooses a textual or visual representation of retrieved experience at each GUI interaction step instead of fixing one memory modality for a task.
- [PrivacyGuard: Source-Linked Sanitization and Locally Resolvable PII References for Cloud GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16778/) — 2026-10-12
  Introduces PrivacyGuard, which sanitizes source-linked personal information and maintains locally resolvable references across mobile-agent turns to reduce exposure to remote planners.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.github.io/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11707/) — 2026-10-08
  Introduces DeltaReplay, which stores mobile GUI trajectories as transition graphs and decides at each step whether to reuse an action, substitute task-specific parameters, or defer to the base agent. This supports reuse of partially matching experiences without rewriting stored memory.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.github.io/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [Imagine to Act: High-Fidelity Data Synthesis via Image Editing World Model for Scalable GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2610-05861/) — 2026-10-05
  Introduces Infinite-Dreamer, which learns action-conditioned screenshot editing from structured descriptions of GUI changes and uses it to synthesize robustness examples and multi-step trajectories. The synthetic data trains a mobile GUI agent evaluated on AndroidWorld, MobileWorld, and AndroidControl-Curated.
- [PhoneCLI: From App Interfaces to Callable Commands for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2609-35671/) — 2026-09-28
  Introduces PhoneCLI, which explores mobile app interfaces and compiles navigation paths into reusable commands without internal app APIs or instrumentation. At execution time it verifies compiled paths and falls back to a visual agent for open-ended interaction or failed navigation.
- [Same Tasks, Different Apps: Why Mobile GUI Agents Fail to Generalize?](https://awesomecua.github.io/resources/arxiv-2609-34139/) — 2026-09-28
  Introduces AnyAppBench, a live Android benchmark that holds user goals fixed while changing the application used to achieve them. It combines category-controlled task pairs with failure annotations to distinguish task understanding from application-specific execution skill.
- [PastForward: Faster On-Device GUI Agents via Computational Experience Reuse](https://awesomecua.github.io/resources/arxiv-2609-32166/) — 2026-09-26
  Introduces PastForward, which reuses earlier output sequences as verified decoding proposals and starts future action computation from predicted GUI transitions. Screen checks determine whether speculative computation and cached model states can be retained.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.github.io/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-30186/) — 2026-09-24
  Separates occasional visual-language planning from frequent lightweight action selection over an accessibility-tree-based action space.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-12394/) — 2026-09-11
  Describes a mobile-agent training pipeline centered on real-device rollouts, recovery of useful supervision from failures, and evolving evaluation tasks.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.github.io/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-07712/) — 2026-09-07
  Introduces controlled simulated mobile apps with deterministic backend data and outcome checks for reproducible evaluation of realistic interactions.
- [Improving Proficiency and Efficiency of Android GUI Agents via Self-Generating Tool Actions](https://awesomecua.github.io/resources/arxiv-2609-06792/) — 2026-09-06
  DroidTool generates application-state tools through proposal, implementation, testing and repair. Relational tests connect the tools’ preconditions and effects, and the resulting tools are evaluated as additions to Android GUI agents.
- [ElderBench: Benchmarking Autonomous Mobile Agents for Older Adults](https://awesomecua.github.io/resources/arxiv-2609-04850/) — 2026-09-04
  ElderBench evaluates mobile GUI agents on smartphone requests elicited from older adults, including indirect and underspecified language. Online and offline tests, instruction normalization and linguistic analyses examine how these request patterns contribute to failures.
- [ActReal: System-Level Mobile Agents Challenge Mobile Automation Detection](https://awesomecua.github.io/resources/arxiv-2608-30038/) — 2026-08-30
  Introduces ActReal, which translates semantic mobile-agent actions into coordinated touch and sensor signals to study automation-detection weaknesses. It evaluates detectors that observe touch events alone or together with inertial measurements under a privileged executor threat model.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [SEE: Structure-aware Exploring & Exploiting for Long-horizon GUI Agent Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2607-18046/) — 2026-07-20
  Introduces SEE, which first explores mobile interfaces to build a screen-and-element transition graph, then composes task trajectories through graph planning and controlled sampling. It studies coverage, loop avoidance, and transfer after training agents on the generated sequences.
- [HyMobileAgent: Data-Environment Co-Scaling for Efficient GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-14548/) — 2026-07-16
  Combines GUI perception data, instructional videos, real and simulated devices, and planning with reflection to develop a mobile agent.
- [KnowAct-GUIClaw: Know Deeply, Act Perfectly, Personal GUI Assistant with Self-Evolving Memory and Skill](https://awesomecua.github.io/resources/arxiv-2607-12625/) — 2026-07-14
  KnowAct-GUIClaw combines a host planner with pluggable GUI subagents, attributable experience memory and an evolving skill library. It uses user profiles and feedback for task decomposition and evaluates transfer across Android, iOS, HarmonyOS and Windows.
- [Xiaomi-GUI-0 Technical Report](https://awesomecua.github.io/resources/arxiv-2606-31410/) — 2026-06-30
  Describes a mobile GUI agent trained through real-device interaction, corrected failure trajectories, supervised learning, and reinforcement learning.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.github.io/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions](https://awesomecua.github.io/resources/arxiv-2606-14832/) — 2026-06-12
  PhoneHarness routes phone workflows across GUI actions, device-side commands and host tools while retaining auditable execution traces. Its accompanying benchmark checks observable task side effects, separating mixed-action execution from plausible final-answer generation.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [AndroidDaily: A Verifiable Benchmark for Mobile GUI Agents on Real-World Closed-Source Applications](https://awesomecua.github.io/resources/arxiv-2605-27761/) — 2026-05-26
  AndroidDaily evaluates mobile GUI agents on daily workflows in closed-source Android apps. Its GRADE evaluator follows visual trajectories against operational obligations, output-quality requirements and negative constraints, producing process-level diagnostics without hidden app state.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.github.io/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [Faithful Mobile GUI Agents with Guided Advantage Estimator](https://awesomecua.github.io/resources/arxiv-2605-01208/) — 2026-05-02
  Introduces Faithful-Agent, which first teaches abstention under perturbed evidence and then refines GUI policies with an anchor-based, variance-adaptive advantage estimator. A thought-action consistency reward encourages decisions grounded in displayed evidence and instructions.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.github.io/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.github.io/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [CORA: Conformal Risk-Controlled Agents for Safeguarded Mobile GUI Automation](https://awesomecua.github.io/resources/arxiv-2604-09155/) — 2026-04-10
  Introduces CORA, which calibrates a risk model to choose between executing and abstaining from mobile GUI actions, then diagnoses rejected actions to suggest interventions. Phone-Harm provides step-level safety labels for evaluating this safeguarding process.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.github.io/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [PSPA-Bench: A Personalized Benchmark for Smartphone GUI Agent](https://awesomecua.github.io/resources/arxiv-2603-29318/) — 2026-03-31
  PSPA-Bench evaluates personalized smartphone GUI behavior using user-specific instructions and a process-aware assessment of interaction traces. Its comparison of GUI agents diagnoses weaknesses in adapting workflows and preferences rather than measuring generic task completion alone.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.github.io/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [MANA: Towards Efficient Mobile Ad Detection via Multimodal Agentic UI Navigation](https://awesomecua.github.io/resources/arxiv-2603-20351/) — 2026-03-20
  MANA combines visual, temporal and exploration signals to guide navigation toward mobile advertisements. It evaluates ad detection and interaction cost on commercial smartphones, including obfuscated-ad cases.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.github.io/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [AmbiBench: Benchmarking Mobile GUI Agents Beyond One-Shot Instructions in the Wild](https://awesomecua.github.io/resources/arxiv-2602-11750/) — 2026-02-12
  AmbiBench evaluates mobile GUI agents under four levels of instruction clarity, including tasks requiring active clarification. Its MUSE evaluator separately audits outcomes, execution quality and interaction quality to study alignment with user intent.
- [Adaptive Milestone Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-11524/) — 2026-02-12
  ADMIRE extracts milestones from successful GUI explorations to provide adaptive intermediate rewards. It assigns credit differently to successful and failed trajectories and evaluates training on AndroidWorld, with additional transfer studies in web and embodied settings.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.github.io/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [UI-Venus-1.5 Technical Report](https://awesomecua.github.io/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.github.io/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [M$^2$-Miner: Multi-Agent Enhanced MCTS for Mobile GUI Agent Data Mining](https://awesomecua.github.io/resources/arxiv-2602-05429/) — 2026-02-05
  M2-Miner uses multi-agent-guided Monte Carlo tree search to collect mobile GUI intent–trajectory pairs. Intent recycling and progressive collector training aim to increase the diversity and usefulness of the mined interaction data.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [Generative Visual Code Mobile World Models](https://awesomecua.github.io/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-22781/) — 2026-01-30
  MobileGen estimates a mobile agent’s strengths across structural and semantic task difficulty, then samples new training targets around that profile. A controllable multi-agent generator creates the corresponding instructions and GUI trajectories.
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.github.io/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [MobileBench-OL: A Comprehensive Chinese Benchmark for Evaluating Mobile GUI Agents in Real-World Environment](https://awesomecua.github.io/resources/arxiv-2601-20335/) — 2026-01-28
  Introduces MobileBench-OL, an online benchmark of Chinese-app tasks spanning execution, reasoning, exploration, and noisy conditions. Its automatic evaluation and reset framework supports repeated testing of mobile GUI agents in real environments.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.github.io/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://awesomecua.github.io/resources/arxiv-2601-09636/) — 2026-01-14
  Introduces AndroidIntent to evaluate how GUI agents infer omitted preferences and recurring routines from long-term user records. Its HIM-Agent maintains hierarchical memory of preferences and routines for personalized execution and proactive suggestions.
- [MobileDreamer: Generative Sketch World Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-04035/) — 2026-01-07
  MobileDreamer predicts post-action GUI states as task-relevant textual sketches with an order-invariant learning objective. Agents use these predictions for lookahead action selection, evaluated on AndroidWorld.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.github.io/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [Step-GUI Technical Report](https://awesomecua.github.io/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [MobiBench: Multi-Branch, Modular Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-12634/) — 2025-12-14
  MobiBench evaluates mobile GUI agents offline while allowing multiple valid action paths. It decomposes agent pipelines into modules to study component contributions, configurations, and performance bottlenecks.
- [AFRAgent : An Adaptive Feature Renormalization Based High Resolution Aware GUI agent](https://awesomecua.github.io/resources/arxiv-2512-00846/) — 2025-11-30
  Introduces AFRAgent, which uses adaptive feature renormalization to combine low-resolution visual embeddings with high-resolution details. The architecture is evaluated for smartphone GUI automation on Meta-GUI and AITW.
- [D-GARA: A Dynamic Benchmarking Framework for GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2511-16590/) — 2025-11-20
  D-GARA evaluates Android GUI agents under runtime anomalies such as permission dialogs, battery warnings, and update prompts. Its modular environment embeds these interruptions in Android applications to study recovery and robustness.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.github.io/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [ProBench: Benchmarking GUI Agents with Accurate Process Information](https://awesomecua.github.io/resources/arxiv-2511-09157/) — 2025-11-12
  ProBench extends mobile GUI evaluation with tasks whose correctness depends on the interaction process as well as the final state. Its ProcessProvider supplies process information for assessing agent behavior and analyzing failure modes.
- [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://awesomecua.github.io/resources/arxiv-2510-24411/) — 2025-10-28
  Introduces MobileRisk-Live and OS-Sentinel, combining a formal verifier for system-level violations with a multimodal judge for contextual risks in mobile GUI workflows.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.github.io/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [CORE: Reducing UI Exposure in Mobile Agents via Collaboration Between Cloud and Local LLMs](https://awesomecua.github.io/resources/arxiv-2510-15455/) — 2025-10-17
  Introduces CORE, which divides mobile UI hierarchies into semantic blocks and shares planning between local and cloud language models. Local ranking limits the screen information sent for cloud-side element selection, with a multi-round mechanism for correcting inadequate context.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [Hi-Agent: Hierarchical Vision-Language Agents for Mobile Device Control](https://awesomecua.github.io/resources/arxiv-2510-14388/) — 2025-10-16
  Introduces Hi-Agent, jointly training a high-level reasoning model and a low-level mobile action model. Execution feedback supplies a foresight advantage for optimizing subgoal decisions, with evaluations on Android control benchmarks.
- [ReInAgent: A Context-Aware GUI Agent Enabling Human-in-the-Loop Mobile Task Navigation](https://awesomecua.github.io/resources/arxiv-2510-07988/) — 2025-10-09
  Introduces ReInAgent, coordinating information management, planning, and reflection around a shared memory for mobile tasks. It proactively asks users for information and checks consistency when instructions are ambiguous or change during execution.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-11543/) — 2025-09-15
  UI-S1 simulates multi-turn online learning over offline trajectories, using a patch module to recover divergences while retaining the model’s own outputs in context. It combines discounted future returns with step- and episode-level advantages and introduces a semi-online performance proxy.
- [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-18119/) — 2025-09-10
  MobileRL adapts GRPO to mobile GUI training with difficulty-dependent replay of successes and filtering of failure curricula. A shortest-path reward adjustment accounts for task length, with evaluations on AndroidWorld and AndroidLab.
- [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-06477/) — 2025-09-08
  MAS-Bench evaluates mobile agents that combine GUI actions with APIs, deep links, and reusable scripts. Its 139 tasks across 11 apps test use of 88 predefined shortcuts as well as the ability to generate new reusable workflows.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [Succeed or Learn Slowly: Sample Efficient Off-Policy Reinforcement Learning for Mobile App Control](https://awesomecua.github.io/resources/arxiv-2509-01720/) — 2025-09-01
  Succeed or Learn Slowly applies direct off-policy updates to successful interactions and more conservative regularized updates to negative examples. Successful Transition Replay prioritizes successful experience during policy learning, with evaluation on AndroidWorld.
- [MobiAgent: A Systematic Framework for Customizable Mobile Agents](https://awesomecua.github.io/resources/arxiv-2509-00531/) — 2025-08-30
  Presents MobiAgent, combining MobiMind agent models, the AgentRR acceleration framework, and MobiFlow evaluation. It also introduces an AI-assisted data-collection pipeline for mobile GUI tasks.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2508-19679/) — 2025-08-27
  InquireMobile trains mobile agents to seek human confirmation at critical decisions using staged reinforcement fine-tuning and pre-action reasoning. InquireBench evaluates safe interaction and proactive inquiry, distinguishing asking for help from completing the underlying task.
- [Mobile-Agent-v3: Fundamental Agents for GUI Automation](https://awesomecua.github.io/resources/arxiv-2508-15144/) — 2025-08-21
  Introduces GUI-Owl models and Mobile-Agent-v3 orchestration, using environment-generated trajectories to support GUI capabilities.
- [CRAFT-GUI: Curriculum-Reinforced Agent For GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-11360/) — 2025-08-15
  CRAFT-GUI organizes GUI trajectories by difficulty for curriculum-based GRPO training. Its reward combines rule-based signals with model judgments, with evaluation on Android Control and an internal online benchmark.
- [MVISU-Bench: Benchmarking Mobile Agents for Real-World Tasks by Multi-App, Vague, Interactive, Single-App and Unethical Instructions](https://awesomecua.github.io/resources/arxiv-2508-09057/) — 2025-08-12
  MVISU-Bench evaluates bilingual mobile tasks involving cross-app work, vague requests, user interaction and unethical instructions alongside ordinary single-app tasks. Its Aider prompting module is designed to clarify intent and mitigate risky execution within agent workflows.
- [Uncertainty-Aware GUI Agent: Adaptive Perception through Component Recommendation and Human-in-the-Loop Refinement](https://awesomecua.github.io/resources/arxiv-2508-04025/) — 2025-08-06
  RecAgent narrows attention to recommended UI components and requests user feedback when task intent or decisions remain uncertain. It introduces ComplexAction to evaluate specified single-step GUI actions in difficult interface scenarios.
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2507-21953/) — 2025-07-29
  Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.github.io/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [MagicGUI: A Foundational Mobile GUI Agent with Scalable Data Pipeline and Reinforcement Fine-tuning](https://awesomecua.github.io/resources/arxiv-2508-03700/) — 2025-07-19
  Combines a mobile GUI data pipeline, perception and planning capabilities, and reinforcement fine-tuning for interactive task execution.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.github.io/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [Mobile GUI Agents under Real-world Threats: Are We There Yet?](https://awesomecua.github.io/resources/arxiv-2507-04227/) — 2025-07-06
  Introduces an app-content instrumentation framework and complementary interactive and static test suites for mobile GUI agents. It studies how untrusted third-party content changes task execution and state understanding.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.github.io/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://awesomecua.github.io/resources/arxiv-2506-20332/) — 2025-06-25
  Uses a staged curriculum from response-format alignment through action feedback to interactive task-level training for mobile agents.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.github.io/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.github.io/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.github.io/resources/arxiv-2506-08012/) — 2025-06-09
  GUI-Reflection synthesizes reflection and error-correction examples from successful trajectories and adds dedicated learning stages for these behaviors. It introduces a reflection task suite, a mobile environment for online data collection, and iterative reflection tuning.
- [GUIPilot: A Consistency-based Mobile GUI Testing Approach for Detecting Application-specific Bugs](https://awesomecua.github.io/resources/arxiv-2506-07385/) — 2025-06-09
  Introduces GUIPilot, which compares mobile design mock-ups with implemented screens through widget alignment and tests expected transitions by executing inferred UI actions. It evaluates both visual inconsistencies and workflow-specific bugs.
- [Scenario-Guided LLM-based Mobile App GUI Testing](https://awesomecua.github.io/resources/arxiv-2506-05079/) — 2025-06-05
  ScenGen organizes mobile GUI testing around business scenarios rather than unrestricted exploration. Five collaborating agents observe the interface, choose and execute actions, check scenario completion, and record operations and runtime bugs.
- [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2506-01391/) — 2025-06-02
  Combines grounding pretraining, bilingual interaction trajectories, and reinforcement fine-tuning for mobile GUI actions.
- [Agent-SAMA: State-Aware Mobile Assistant](https://awesomecua.github.io/resources/arxiv-2505-23596/) — 2025-05-29
  Models mobile application execution as a finite-state machine to support planning, verification, and recovery across interface transitions.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://awesomecua.github.io/resources/arxiv-2505-20660/) — 2025-05-27
  BacktrackAgent adds verification, judgment, and reflection modules to detect erroneous GUI actions and guide recovery. It develops backtracking-oriented training data that includes post-action pages and evaluates task completion and step accuracy on Mobile3M and Auto-UI.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Unlocking Smarter Device Control: Foresighted Planning with a World Model-Driven Code Execution Approach](https://awesomecua.github.io/resources/arxiv-2505-16422/) — 2025-05-22
  FPWC builds and refines a task-oriented world model before planning mobile-device actions. It executes plans as code and evaluates the approach in simulated environments and on real mobile devices.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [Building a Stable Planner: An Extended Finite State Machine Based Planning Module for Mobile GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-14141/) — 2025-05-20
  SPlanner models mobile-app functions and configurations with extended finite-state machines, traverses them to construct execution paths, and converts those paths into natural-language plans. A VLM follows these plans to perform GUI actions, with evaluation on AndroidWorld.
- [Scalable Video-to-Dataset Generation for Cross-Platform Mobile Agents](https://awesomecua.github.io/resources/arxiv-2505-12632/) — 2025-05-19
  Introduces MONDAY and an automated pipeline that extracts mobile-navigation training data from instructional videos across operating-system platforms.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.github.io/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [Mobile-Bench-v2: A More Realistic and Comprehensive Benchmark for VLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2505-11891/) — 2025-05-17
  Mobile-Bench-v2 evaluates mobile GUI agents using multiple acceptable offline action paths, noisy interfaces with ads or pop-ups, and ambiguous instructions with scripted clarification exchanges. These splits separate step-level execution, robustness, and proactive interaction.
- [LLM-Explorer: Towards Efficient and Affordable LLM-based Exploration for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2505-10593/) — 2025-05-15
  LLM-Explorer uses language models to maintain compact knowledge for mobile app exploration, then generates actions without invoking the model at every step. The study compares exploration coverage and cost across twenty apps.
- [EcoAgent: An Efficient Device-Cloud Collaborative Multi-Agent Framework for Mobile Automation](https://awesomecua.github.io/resources/arxiv-2505-05440/) — 2025-05-08
  EcoAgent splits mobile automation between cloud planning and on-device observation and verification. Compact screen descriptions and feedback reduce communication costs, with evaluation on AndroidWorld.
- [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.github.io/resources/arxiv-2504-13805/) — 2025-04-18
  LearnAct parses human demonstrations into reusable knowledge, retrieves relevant examples, and uses them during mobile GUI task execution. The accompanying LearnGUI benchmark includes 2,252 offline tasks and 101 online tasks for studying adaptation from demonstrations.
- [VLM-Fuzz: Vision Language Model Assisted Recursive Depth-first Search Exploration for Effective UI Testing of Android Apps](https://awesomecua.github.io/resources/arxiv-2504-11675/) — 2025-04-16
  VLM-Fuzz combines depth-first UI exploration with Android manifest analysis, runtime widget hierarchies, and on-demand visual reasoning to generate app test inputs. It evaluates coverage on 59 benchmark apps and uses additional Google Play apps to study crash discovery.
- [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.github.io/resources/arxiv-2504-13936/) — 2025-04-15
  ViMo predicts the next mobile-app screenshot after a candidate action by separately modeling graphics and text. A symbolic placeholder representation preserves layout while a second predictor supplies readable text, enabling visual lookahead for GUI-agent planning.
- [Agent-Initiated Interaction in Phone UI Automation](https://awesomecua.github.io/resources/arxiv-2503-19537/) — 2025-03-25
  Defines when phone agents should request user interaction and introduces AndroidInteraction annotations for deciding whether and how to engage the user.
- [VeriSafe Agent: Safeguarding Mobile GUI Agent via Logic-based Action Verification](https://awesomecua.github.io/resources/arxiv-2503-18492/) — 2025-03-24
  Translates user instructions into formal specifications and applies runtime logic-based checks to proposed mobile GUI actions.
- [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://awesomecua.github.io/resources/arxiv-2503-16788/) — 2025-03-21
  This study compares matched reasoning and non-reasoning vision-language models on static mobile GUI tasks and interactive AndroidWorld navigation. It finds that chain-of-thought effects vary across tasks and model families.
- [Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment](https://awesomecua.github.io/resources/arxiv-2503-15937/) — 2025-03-20
  Introduces V-Droid, which verifies candidate actions in a discrete action space rather than directly generating each mobile operation.
- [FedMABench: Benchmarking Mobile Agents on Decentralized Heterogeneous User Data](https://awesomecua.github.io/resources/arxiv-2503-05143/) — 2025-03-07
  Introduces a benchmark for federated mobile-agent training under heterogeneous user and application distributions, combining datasets, algorithms, and base models.
- [CHOP: Mobile Operating Assistant with Constrained High-frequency Optimized Subtask Planning](https://awesomecua.github.io/resources/arxiv-2503-03743/) — 2025-03-05
  Uses human-planned subtasks to constrain and refine the intermediate plans connecting user goals with executable mobile operations.
- [AutoEval: A Practical Framework for Autonomous Evaluation of Mobile Agents](https://awesomecua.github.io/resources/arxiv-2503-02403/) — 2025-03-04
  Generates reward signals from UI-state changes and uses a judging system to evaluate mobile agents with reduced manual evaluator construction.
- [OS-Kairos: Adaptive Interaction for MLLM-Powered GUI Agents](https://awesomecua.github.io/resources/arxiv-2503-16465/) — 2025-02-26
  Uses step-level confidence estimates to decide when a GUI agent should act autonomously or request human intervention in complex situations.
- [Mobile-Agent-V: A Video-Guided Approach for Effortless and Efficient Operational Knowledge Injection in Mobile Automation](https://awesomecua.github.io/resources/arxiv-2502-17110/) — 2025-02-24
  Extracts operational guidance from video for mobile task execution and introduces Mobile-Knowledge to evaluate the contribution of external knowledge.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.github.io/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [MobileA3gent: Training Mobile GUI Agents Using Decentralized Self-Sourced Data from Diverse Users](https://awesomecua.github.io/resources/arxiv-2502-02982/) — 2025-02-05
  Studies automatic annotation and federated training of mobile GUI agents from decentralized user interaction data with heterogeneous distributions.
- [ReachAgent: Enhancing Mobile Agent via Page Reaching and Operation](https://awesomecua.github.io/resources/arxiv-2502-02955/) — 2025-02-05
  Splits mobile tasks into reaching the required page and operating on it, using subtask data and preferred GUI trajectories for training.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.github.io/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [A3: Android Agent Arena for Mobile GUI Agents with Essential-State Procedural Evaluation](https://awesomecua.github.io/resources/arxiv-2501-01149/) — 2025-01-02
  Introduces Android Agent Arena with online application tasks and procedural evaluation based on reaching essential intermediate states.
- [GUI Testing Arena: A Unified Benchmark for Advancing Autonomous GUI Testing Agent](https://awesomecua.github.io/resources/arxiv-2412-18426/) — 2024-12-24
  Evaluates GUI testing through test-intent generation, execution, and defect detection using real, modified, and synthetic mobile application data.
- [AutoDroid-V2: Boosting SLM-based GUI Agents via Code Generation](https://awesomecua.github.io/resources/arxiv-2412-18116/) — 2024-12-24
  Recasts mobile UI automation as on-device code generation, using app-specific documentation and synthetic tasks to guide smaller models.
- [Generalist Virtual Agents: A Survey on Autonomous Agents Across Digital Platforms](https://awesomecua.github.io/resources/arxiv-2411-10943/) — 2024-11-17
  Surveys virtual agents for browsers, applications and operating systems, organizing prior work by task type, observation and action spaces, model strategies and evaluation methods. It examines screen-based interaction and keyboard, mouse and touch control, alongside transferability and long-sequence decision-making challenges.
- [Foundations and Recent Trends in Multimodal Mobile Agents: A Survey](https://awesomecua.github.io/resources/arxiv-2411-02006/) — 2024-11-04
  Surveys multimodal mobile agents, organizing prompt-based and training-based approaches alongside evaluation benchmarks, supporting technologies, and open challenges in mobile task execution.
- [AndroidLab: Training and Systematic Benchmarking of Android Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2410-24024/) — 2024-10-31
  Provides a shared Android action environment, reproducible tasks, and instruction data for training and comparing language and multimodal agents.
- [Lightweight Neural App Control](https://awesomecua.github.io/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [SPA-Bench: A Comprehensive Benchmark for SmartPhone Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2410-15164/) — 2024-10-19
  Introduces a smartphone-agent benchmark with English and Chinese tasks, real-time Android interaction, and completion and resource-use metrics.
- [MobA: Multifaceted Memory-Enhanced Adaptive Planning for Efficient Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2410-13757/) — 2024-10-17
  Combines adaptive mobile-task planning, reflection-based recovery, and multiple memory components, evaluated with MobBench and AndroidArena.
- [From Interaction to Impact: Towards Safer AI Agents Through Understanding and Evaluating Mobile UI Operation Impacts](https://awesomecua.github.io/resources/arxiv-2410-09006/) — 2024-10-11
  Develops a taxonomy of mobile-action consequences and annotated interaction data to evaluate whether models recognize impactful or risky UI operations.
- [ClickAgent: Enhancing UI Location Capabilities of Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2410-11872/) — 2024-10-09
  Separates multimodal reasoning and action planning from a dedicated UI localization model, with evaluation on Android devices.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.github.io/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [AppAgent v2: Advanced Agent for Flexible Mobile Interactions](https://awesomecua.github.io/resources/arxiv-2408-11824/) — 2024-08-05
  Separates exploration and deployment while using a structured application knowledge base and retrieval to guide mobile workflows.
- [MobileFlow: A Multimodal LLM For Mobile GUI Agent](https://awesomecua.github.io/resources/arxiv-2407-04346/) — 2024-07-05
  Introduces a mobile GUI model using hybrid visual encoders, mixture-of-experts expansion, and alignment training for multilingual interfaces.
- [MobileExperts: A Dynamic Tool-Enabled Agent Team in Mobile Devices](https://awesomecua.github.io/resources/arxiv-2407-03913/) — 2024-07-04
  Introduces MobileExperts, which assembles mobile-agent teams, lets agents explore and formulate tools, and coordinates them through two levels of planning. A benchmark organizes tasks by hierarchical intelligence levels.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [E-ANT: A Large-Scale Dataset for Efficient Automatic GUI NavigaTion](https://awesomecua.github.io/resources/arxiv-2406-14250/) — 2024-06-20
  Introduces Chinese-language GUI navigation traces and annotated screenshots collected from human interactions with mini-applications.
- [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2406-11896/) — 2024-06-14
  Combines offline initialization and online reinforcement learning in Android environments, with automated evaluation and curriculum-based sampling.
- [MobileAgentBench: An Efficient and User-Friendly Benchmark for Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2406-08184/) — 2024-06-12
  Introduces a mobile-agent benchmark with tasks across open-source applications, organized by difficulty to reduce manual evaluation effort.
- [On the Effects of Data Scale on UI Control Agents](https://awesomecua.github.io/resources/arxiv-2406-03679/) — 2024-06-06
  Studies how Android task performance changes with demonstration scale and releases AndroidControl with high- and low-level instructions.
- [Mobile-Agent-v2: Mobile Device Operation Assistant with Effective Navigation via Multi-Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2406-01014/) — 2024-06-03
  Separates mobile planning, decision-making, and reflection, with a memory unit for task progress and relevant content.
- [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2405-14573/) — 2024-05-23
  Introduces parameterized Android tasks with initialization, success checks, and cleanup for reproducible interactive evaluation.
- [Enhancing Mobile "How-to" Queries with Automated Search Results Verification and Reranking](https://awesomecua.github.io/resources/arxiv-2404-08860/) — 2024-04-13
  Executes instructions from mobile how-to search results inside a controlled Android environment, then uses the observed success of those instructions to verify and rerank technical-support results.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.github.io/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.github.io/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [Prompt2Task: Automating UI Tasks on Smartphones from Textual Prompts](https://awesomecua.github.io/resources/arxiv-2404-02475/) — 2024-04-03
  Prompt2Task converts textual goals or procedures into smartphone UI automation using agents for intent interpretation, external-information handling, and execution. User feedback and accumulated task knowledge support subsequent task generation and operation.
- [Android in the Zoo: Chain-of-Action-Thought for GUI Agents](https://awesomecua.github.io/resources/arxiv-2403-02713/) — 2024-03-05
  Introduces Chain-of-Action-Thought and Android-In-The-Zoo annotations that connect prior actions, screen observations, intended actions, and expected outcomes.
- [CoCo-Agent: A Comprehensive Cognitive MLLM Agent for Smartphone GUI Automation](https://awesomecua.github.io/resources/arxiv-2402-11941/) — 2024-02-19
  Combines screenshots, layout information, and action history with a factored action predictor for smartphone automation.
- [Mobile-Agent: Autonomous Multi-Modal Mobile Device Agent with Visual Perception](https://awesomecua.github.io/resources/arxiv-2401-16158/) — 2024-01-29
  Uses visual perception tools and task decomposition to operate mobile applications without relying on app interface metadata.
- [GPTVoiceTasker: Advancing Multi-step Mobile Task Efficiency Through Dynamic Interface Exploration and Learning](https://awesomecua.github.io/resources/arxiv-2401-14268/) — 2024-01-25
  Introduces GPTVoiceTasker, a mobile assistant that interprets user commands, executes device interactions, and learns from prior commands to streamline later task execution. The work includes a user study of task efficiency.
- [MobileAgent: enhancing mobile control via human-machine interaction and SOP integration](https://awesomecua.github.io/resources/arxiv-2401-04124/) — 2024-01-04
  Combines operating-procedure context with user interaction to guide mobile task automation and handle personalized or sensitive requests.
- [AutoTask: Executing Arbitrary Voice Commands by Exploring and Learning from Mobile GUI](https://awesomecua.github.io/resources/arxiv-2312-16062/) — 2023-12-26
  Executes voice-requested mobile tasks through GUI exploration, backtracking, and accumulated interaction experience.
- [AppAgent: Multimodal Agents as Smartphone Users](https://awesomecua.github.io/resources/arxiv-2312-13771/) — 2023-12-21
  Builds app knowledge through exploration or human demonstrations and uses it to guide multimodal smartphone interactions.
- [VisionTasker: Mobile Task Automation Using Vision Based UI Understanding and LLM Task Planning](https://awesomecua.github.io/resources/arxiv-2312-11190/) — 2023-12-18
  VisionTasker converts screenshots into textual UI interpretations and presents one interface at a time to an LLM planner for action selection. It evaluates visual representations and execution of 147 tasks on an Android smartphone, including integration with programming by demonstration.
- [Intelligent Virtual Assistants with LLM-based Process Automation](https://awesomecua.github.io/resources/arxiv-2312-06677/) — 2023-12-04
  Presents LLMPA, a mobile process-automation architecture that decomposes requests, identifies interface elements, predicts actions and checks errors. Demonstrations evaluate multistep operations in Alipay.
- [Explore, Select, Derive, and Recall: Augmenting LLM with Human-like Memory for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2312-03003/) — 2023-12-04
  Introduces MobileGPT, which organizes mobile-app experience into reusable subtasks using an explore, select, derive, and recall cycle. Its memory supports learning task procedures and adapting them to new contexts.
- [GPT-4V in Wonderland: Large Multimodal Models for Zero-Shot Smartphone GUI Navigation](https://awesomecua.github.io/resources/arxiv-2311-07562/) — 2023-11-13
  Studies MM-Navigator, a multimodal agent that interprets smartphone screenshots and predicts localized actions without task-specific training.
- [You Only Look at Screens: Multimodal Chain-of-Action Agents](https://awesomecua.github.io/resources/arxiv-2309-11436/) — 2023-09-20
  Introduces Auto-GUI, a screenshot-based agent using previous actions and future action plans to guide device interaction.
- [AutoDroid: LLM-powered Task Automation in Android](https://awesomecua.github.io/resources/arxiv-2308-15272/) — 2023-08-29
  Combines language-model reasoning with app analysis, UI representations, and exploration-derived memory for Android task automation.
- [Android in the Wild: A Large-Scale Dataset for Android Device Control](https://awesomecua.github.io/resources/arxiv-2307-10088/) — 2023-07-19
  Collects Android interaction demonstrations with screens, actions, and instructions across device and platform variations for robustness evaluation.
- [DroidBot-GPT: GPT-powered UI Automation for Android](https://awesomecua.github.io/resources/arxiv-2304-07061/) — 2023-04-14
  Transforms Android UI states and available actions into language prompts for an LLM to choose and execute task steps.
- [UGIF: UI Grounded Instruction Following](https://awesomecua.github.io/resources/arxiv-2211-07615/) — 2022-11-14
  Introduces multilingual smartphone instruction-following data and a pipeline that retrieves help instructions and maps them to UI actions.
- [Enabling Conversational Interaction with Mobile UI using Large Language Models](https://awesomecua.github.io/resources/arxiv-2209-08655/) — 2022-09-18
  Studies few-shot prompting of a single language model for four mobile-UI interaction tasks, aiming to support conversational interface use without a separate trained model for each task.
- [META-GUI: Towards Multi-modal Conversational Agents on Mobile GUI](https://awesomecua.github.io/resources/arxiv-2205-11029/) — 2022-05-23
  Introduces GUI-based task-oriented dialogue and a dataset pairing mobile-interface operations with conversational responses.
- [A Dataset for Interactive Vision-Language Navigation with Unknown Command Feasibility](https://awesomecua.github.io/resources/arxiv-2202-02312/) — 2022-02-04
  Introduces MoTIF mobile-app interactions with feasible and infeasible commands, feasibility explanations, and follow-up questions for ambiguous requests.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.github.io/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.
- [Interactive Task and Concept Learning from Natural Language Instructions and GUI Demonstrations](https://awesomecua.github.io/resources/arxiv-1909-00031/) — 2019-08-30
  Introduces PUMICE, an agent that learns mobile-app procedures and conditional concepts through natural-language conversation and GUI demonstrations, recursively resolving ambiguous instructions with users.
- [Kite: Building Conversational Bots from Mobile Apps](https://awesomecua.github.io/resources/url-901ca855640457dfe2f1/) — 2018-06
  Derives task graphs from demonstrated Android app interactions and layers a conversational question-answer interface over those graphs. The evaluation examines task-model extraction and developer use of the resulting bot templates.
- [APPINITE: A Multi-Modal Interface for Specifying Data Descriptions in Programming by Demonstration Using Natural Language Instructions](https://awesomecua.github.io/resources/url-ba2c664c1b3c6f1b172f/) — 2018
  Introduces APPINITE, a conversational interface for specifying the intended targets of demonstrated Android actions. It constructs semantic UI representations and uses an on-screen overlay to preview and refine executable data descriptions.
- [SUGILITE: Creating Multimodal Smartphone Automation by Demonstration](https://awesomecua.github.io/resources/url-392a602c660ffa91be46/) — 2017
  Introduces SUGILITE, which combines spoken instructions, demonstrated Android actions, and UI hierarchies to generate reusable automation scripts. Its interface includes context checking and repairs for unfamiliar situations and changing app interfaces.

## 评测基准

- [AndroidArena](https://awesomecua.github.io/resources/github-androidarenaagent-androidarena/) — Date not recorded
  Android environment for evaluating language-model-driven agents.
- [AndroidLab](https://awesomecua.github.io/resources/github-thudm-android-lab/) — Date not recorded
  Reproducible Android benchmark of 138 tasks across nine apps on predefined virtual devices, run via AVD on Mac or Docker on Linux, released with the Android Instruct training set.
- [AndroidWorld](https://awesomecua.github.io/resources/github-google-research-android-world/) — Date not recorded
  Android environment with programmatic task evaluation for mobile agents.
- [ColorBench](https://awesomecua.github.io/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [FedMABench](https://awesomecua.github.io/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.
- [MobBench task definitions](https://awesomecua.github.io/resources/url-b53e03a6e4ca4226d126/) — Date not recorded
  A public set of real-device mobile task definitions used to evaluate MobA, with Chinese and English task material packaged in a versioned JSON release.
- [Mobile-Bench-v2 released data](https://awesomecua.github.io/resources/url-1d5b85321b98765141fc/) — Date not recorded
  Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.
- [MobileAgentBench](https://awesomecua.github.io/resources/github-mobileagentbench-mobile-agent-bench/) — Date not recorded
  Automated benchmark for mobile LLM agents whose default tasks use ten Simple Mobile Tools Android apps, installed as a Python library that detects task completion.
- [MobileGUI-VBench](https://awesomecua.github.io/resources/url-d7a4f34a6a5202af5f64/) — Date not recorded
  Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.
- [MobileGym](https://awesomecua.github.io/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [MobileGym++ / MobileGym++ Bench](https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/) — Date not recorded
  Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.
- [MobileWorld (Tongyi-MAI)](https://awesomecua.github.io/resources/github-tongyi-mai-mobileworld/) — Date not recorded
  A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.
- [MobileWorldBench](https://awesomecua.github.io/resources/github-jacklishufan-mobileworld/) — Date not recorded
  Benchmark of semantic world modeling for mobile agents, with question-answering tasks and GPT-judged generation tasks, plus training data built on AitW and AndroidControl screens.
- [SPA-Bench](https://awesomecua.github.io/resources/github-ai-agents-2030-spa-bench/) — Date not recorded
  340 single-app and cross-app tasks over 66 Chinese and English Android apps, with plug-in support for 11 smartphone agents and automatic coarse-to-fine success detection.

## 数据集

- [Android in the Wild](https://awesomecua.github.io/resources/component-google-research-android-in-the-wild/) — Date not recorded
  Human demonstrations of Android tasks with screenshots and touch actions.
- [AndroidControl](https://awesomecua.github.io/resources/component-google-research-android-control/) — Date not recorded
  Android demonstrations with high-level goals, step instructions, screenshots, and accessibility trees.
- [AutoDroid V2 training data](https://awesomecua.github.io/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [DroidCall data](https://awesomecua.github.io/resources/url-ae8f5208eea9e7f1f606/) — Date not recorded
  Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.
- [GUIOdyssey — current data release](https://awesomecua.github.io/resources/url-511903ebfac45e6751b2/) — Date not recorded
  Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.
- [MONDAY annotations](https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MoTIF](https://awesomecua.github.io/resources/github-aburns4-motif/) — Date not recorded
  Mobile task demonstrations and natural-language instructions.
- [OpenMobile-Data-v2](https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.
- [OS-Genesis mobile training data](https://awesomecua.github.io/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [UI-Genie reward data](https://awesomecua.github.io/resources/url-84e5aeeffaf561baa966/) — Date not recorded
  Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.
- [UI-Genie trajectory data](https://awesomecua.github.io/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [UI-S1 released training examples](https://awesomecua.github.io/resources/url-16184830c0f4bdb146fa/) — Date not recorded
  A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

## 模型

- [AgentCPM-GUI](https://awesomecua.github.io/resources/github-openbmb-agentcpm-gui/) — Date not recorded
  8B on-device smartphone agent built on MiniCPM-V that operates Chinese and English apps from screenshots, trained with reinforcement fine-tuning and a compact JSON action space.
- [AgentCPM-GUI 8B checkpoint](https://awesomecua.github.io/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [AutoGLM Phone 9B](https://awesomecua.github.io/resources/url-c918d5c828a3c6cfbc5d/) — Date not recorded
  AutoGLM phone-agent checkpoint for Open-AutoGLM, fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters and tagged for Chinese.
- [AutoGLM Phone 9B Multilingual](https://awesomecua.github.io/resources/url-d236e7ec7a2b0028950a/) — Date not recorded
  Multilingual variant of the AutoGLM phone-agent checkpoint for Open-AutoGLM, likewise fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters.
- [BlueLM-GUI](https://awesomecua.github.io/resources/github-vivo-ai-lab-bluelm-gui/) — Date not recorded
  Mobile GUI agent research release with technical report, benchmark data, and evaluation tooling from vivo AI Lab.
- [GELab Zero](https://awesomecua.github.io/resources/github-stepfun-ai-gelab-zero/) — Date not recorded
  Open mobile GUI agent stack pairing a 4B model that runs on consumer hardware with local multi-device infrastructure, an MCP server, and AndroidDaily benchmark tasks.
- [GELab Zero 4B Preview](https://awesomecua.github.io/resources/url-d7ad447ecd712c6d51b8/) — Date not recorded
  Preview GELab-Zero phone-use agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct, with about 4.4B BF16 parameters, tagged for Android in English and Chinese, under Apache-2.0.
- [Magma](https://awesomecua.github.io/resources/github-microsoft-magma/) — Date not recorded
  Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.
- [MAI-UI 8B](https://awesomecua.github.io/resources/url-00b1a3abf9bcb424b264/) — Date not recorded
  A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.
- [MobileRL 9B checkpoint](https://awesomecua.github.io/resources/url-d5667c854845c77b9f5b/) — Date not recorded
  A GLM-4.1V-based mobile action checkpoint released by the MobileRL project for Android interaction.
- [OpenMobile-2 27B](https://awesomecua.github.io/resources/url-1611de0e6d606165d12d/) — Date not recorded
  Mobile-agent checkpoint based on Qwen3.6-27B for GUI and app-native tool interaction.
- [OpenMobile-2 9B](https://awesomecua.github.io/resources/url-d35224f787e7ec21ce36/) — Date not recorded
  Mobile-agent checkpoint trained on OpenMobile-Data-v2 for screenshot actions and app-native tool calls.
- [OS-Genesis 7B AC](https://awesomecua.github.io/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [UI-Genie Agent 7B](https://awesomecua.github.io/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.
- [UI-S1 7B](https://awesomecua.github.io/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.

## 工程与产业

- [AppAgent](https://awesomecua.github.io/resources/github-tencentqqgylab-appagent/) — Date not recorded
  Multimodal agent that operates Android apps through taps and swipes without back-end access, building a reusable knowledge base from autonomous exploration or from watching human demonstrations.
- [AppAgent Pro](https://awesomecua.github.io/resources/github-laokuize-appagent-pro/) — Date not recorded
  Proactive Android agent built on AppAgent that uses GPT-4o to decide whether YouTube or Amazon content would help, operates those apps over ADB, and merges what it finds into its answer.
- [AppAgentX](https://awesomecua.github.io/resources/github-westlake-agi-lab-appagentx/) — Date not recorded
  Mobile agent research using accumulated interaction experience.
- [Auto-GUI / Auto-UI](https://awesomecua.github.io/resources/github-cooelf-auto-gui/) — Date not recorded
  Screenshot-based mobile agent implementation with training and inference code for chain-of-action prediction.
- [AutoDroid](https://awesomecua.github.io/resources/github-mobilellm-autodroid/) — Date not recorded
  LLM-powered Android task automation built on DroidBot, released with DroidTask, a dataset of per-app screenshots, view hierarchies, exploration records and ground-truth task files.
- [AutoDroid V2](https://awesomecua.github.io/resources/github-mobilellm-autodroid-v2/) — Date not recorded
  An Android automation implementation that builds app documentation from exploration traces and evaluates language-model-generated execution code in emulator workflows.
- [CHOP](https://awesomecua.github.io/resources/github-yuqi-zhou-chop/) — Date not recorded
  Mobile automation framework that uses reusable basis subtasks to constrain and refine planning between user goals and executable actions.
- [CoAT research implementation](https://awesomecua.github.io/resources/github-imnearth-coat/) — Date not recorded
  Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.
- [CoCo-Agent](https://awesomecua.github.io/resources/github-xbmxb-coco-agent/) — Date not recorded
  Research implementation combining screen and layout perception with conditional action prediction for smartphone automation.
- [MAI-UI inference and evaluation code](https://awesomecua.github.io/resources/github-tongyi-mai-mai-ui/) — Date not recorded
  Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.
- [META-GUI baseline](https://awesomecua.github.io/resources/github-x-lance-meta-gui-baseline/) — Date not recorded
  Training and evaluation pipeline for conversational mobile GUI agents, with action prediction, response generation, and dataset processing.
- [MobA](https://awesomecua.github.io/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile Next MCP](https://awesomecua.github.io/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Mobile Use](https://awesomecua.github.io/resources/github-madeagents-mobile-use/) — Date not recorded
  Android GUI agent that operates real phones through ADB with hierarchical reflection and a multi-agent framework, run from a web interface or Python and evaluated on AndroidWorld and AndroidLab.
- [Mobile-Agent](https://awesomecua.github.io/resources/github-x-plug-mobileagent/) — Date not recorded
  Mobile device agent family using visual interface interaction.
- [Mobile-Agent-E code component](https://awesomecua.github.io/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [MobileAgent (Alipay)](https://awesomecua.github.io/resources/github-alipay-mobile-agent/) — Date not recorded
  Mobile-control research implementation combining operating-procedure context with human interaction for personalized task execution.
- [MobileGPT](https://awesomecua.github.io/resources/github-fclab-skku-mobilegpt/) — Date not recorded
  An Android client and Python-server agent that learns reusable app subtasks through exploration, selection, derivation and memory recall.
- [Mobilerun (formerly Droidrun)](https://awesomecua.github.io/resources/github-droidrun-mobilerun/) — Date not recorded
  A framework that combines screenshots and accessibility state with agent tools for mobile-device tasks through command-line and Python interfaces.
- [Mobilerun Portal (formerly Droidrun Portal)](https://awesomecua.github.io/resources/github-droidrun-mobilerun-portal/) — Date not recorded
  An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.
- [Open-AutoGLM](https://awesomecua.github.io/resources/github-zai-org-open-autoglm/) — Date not recorded
  Phone agent model and framework with device interaction tooling.
- [OpenMobile-2 code](https://awesomecua.github.io/resources/github-openmobile2-openmobile2-code/) — Date not recorded
  Evaluation adapters and training guidance for OpenMobile-2 across Android emulators and browser-rendered mobile simulation.
- [OS-Kairos](https://awesomecua.github.io/resources/github-wuzheng02-os-kairos/) — Date not recorded
  Android GUI-agent research implementation that uses confidence-guided interaction to choose between autonomous actions and human assistance.
- [SwitchMem](https://awesomecua.github.io/resources/github-dmis-lab-switchmem/) — Date not recorded
  Memory-routing implementation that chooses text or image demonstrations for a frozen GUI actor, with offline evaluation and Android transfer experiments.
- [VEM GUI-Agent-RL](https://awesomecua.github.io/resources/github-microsoft-gui-agent-rl/) — Date not recorded
  Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.
- [VisionTasker](https://awesomecua.github.io/resources/github-akimotoayako-visiontasker/) — Date not recorded
  An Android automation implementation that translates screenshot-based UI understanding into language descriptions for step-by-step LLM planning and action execution.
