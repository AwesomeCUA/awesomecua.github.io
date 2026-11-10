# 手机操作

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/mobile-navigation/records.jsonl

## 论文与综述

- [Can LLM Agents Learn to Test? Maintaining Scoped Experience as Testing Evidence for Mobile GUI Testing](https://awesomecua.com/zh/resources/arxiv-2611-05873/) — 2026-11-04
  AdaptiTest specifies scoped, revalidated memory for an LLM-based mobile GUI tester to reuse routes and locators across read-only Android test workflows.
- [Coati: Host-Grounded Execution for Installable Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2611-02644/) — 2026-11-02
  Introduces Coati, an installable Android GUI agent that checks action outcomes with phone-side evidence, stores per-app procedures, and routes simpler steps to a fast executor.
- [MAPLE: A Multimodal Mobile Agent with Playbook-Learned Experience](https://awesomecua.com/zh/resources/arxiv-2611-01351/) — 2026-10-31
  Introduces MAPLE, a training-free multi-agent framework that shares step-level experience while navigating mobile GUIs and updates prompts during execution.
- [MemU-Bench: Benchmarking GUI Agents on Long-Horizon User Interactions](https://awesomecua.com/zh/resources/arxiv-2611-00191/) — 2026-10-30
  Introduces MemU-Bench for mobile GUI tasks that depend on past user interactions, alongside AppMem, a training-free memory framework for retrieving app-specific context.
- [GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-36877/) — 2026-10-27
  Introduces GUI-JEPA, a mobile GUI policy that scores candidate actions from screenshot latents in a batched pass without decoding action text.
- [Chart the Invisible: Interactive Perception for Hidden-Target Exploration in GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-35237/) — 2026-10-26
  Introduces Hagasu, a scrollable-region perception model that helps GUI agents decide where to swipe to reveal hidden targets, especially on mobile screens.
- [iPrefBench: A User-Centric Benchmark for Personalized Mobile Use Agents](https://awesomecua.com/zh/resources/arxiv-2610-34735/) — 2026-10-26
  Introduces iPrefBench, an iOS benchmark for mobile agents that tests when they infer missing user preferences from activity history and when they ask the user.
- [AndroidFlux: Evaluating and Reward Modeling Failure Recovery Capabilities in Mobile Use Multimodal Agents](https://awesomecua.com/zh/resources/arxiv-2610-34384/) — 2026-10-25
  Introduces AndroidFlux, a mobile-agent failure-recovery benchmark that restores trajectories to error checkpoints, plus a reward-modeling benchmark and offline RL dataset.
- [Reuse, Rewrite, or Reject: Evidence-Constrained Trace Reuse for Repeated Mobile GUI Control](https://awesomecua.com/zh/resources/arxiv-2610-31712/) — 2026-10-22
  Proposes graph-text templates that let mobile GUI agents reuse, adapt, or discard steps from earlier executions based on the current instruction and UI state.
- [Subgoal-aware Memory Graph for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2610-31307/) — 2026-10-22
  Proposes a subgoal-aware memory graph that turns past mobile GUI agent trajectories into reusable evidence for decisions across tasks.
- [Diagnosing Personalization Failures in Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-30573/) — 2026-10-22
  PrefDiag-Bench diagnoses when and how user preferences should affect sequential mobile GUI agent actions, using staged probes and user context.
- [Tandem: Serving Hybrid Linear-Attention GUI Agents on Mobile NPUs](https://awesomecua.com/zh/resources/arxiv-2610-26660/) — 2026-10-19
  Tandem serves hybrid GUI-agent models on Android NPUs using divergence-point state checkpoints, rollback-aware speculative decoding and idle power release between request bursts.
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [MobileInject: Evaluating Reasoning-to-Action Security of MLLM-Based Mobile Agents under Cross-Modal Consistency Injection](https://awesomecua.com/zh/resources/arxiv-2610-23307/) — 2026-10-16
  MobileInject evaluates visual/textual observation injection in stateful Android workflows using resettable emulators, benign/adversarial state oracles and trace-based diagnosis of emitted rationales and actions.
- [MobileJailBench: Red Queen Jailbreak Benchmarking for Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2610-23303/) — 2026-10-16
  MobileJailBench evaluates mobile-agent jailbreaks in a browser-based Android-like simulator, combining feedback-driven attack evolution, separately admitted task expansions and evidence-grounded outcome adjudication.
- [Not All Graphs Are Maps: A Task-Agnostic Exploration Framework for Mobile GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2610-22672/) — 2026-10-15
  TAG-Nav supplies Android GUI agents with destination and route memory distilled from offline app exploration. DestBench measures arrival at a reference pre-action screen, separately from downstream task execution.
- [How GUI Agents Fail: GraceBench for Execution Stability Diagnosis](https://awesomecua.com/zh/resources/arxiv-2610-19900/) — 2026-10-14
  Introduces GraceBench, using application transition graphs and recorded interaction evidence to diagnose deviations, loops, and recovery that final task-success scores can hide.
- [Learning How to Remember: Memory Modality Selection for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-17928/) — 2026-10-13
  Introduces SwitchMem, which chooses a textual or visual representation of retrieved experience at each GUI interaction step.
- [PrivacyGuard: Source-Linked Sanitization and Locally Resolvable PII References for Cloud GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-16778/) — 2026-10-12
  Introduces PrivacyGuard, which sanitizes source-linked personal information and maintains locally resolvable references across mobile-agent turns to reduce exposure to remote planners.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.com/zh/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://awesomecua.com/zh/resources/arxiv-2610-13092/) — 2026-10-09
  Evaluates Jev as a bounded action selector inside three AndroidWorld agents and two text-based ALFWorld agents, separating decision savings from task success, recovery and resources per delivered outcome.
- [DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-11707/) — 2026-10-08
  Introduces DeltaReplay, which stores mobile GUI trajectories as transition graphs and decides at each step whether to reuse an action, substitute task-specific parameters, or defer to the base agent. This supports reuse of partially matching experiences without rewriting stored memory.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.com/zh/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [Imagine to Act: High-Fidelity Data Synthesis via Image Editing World Model for Scalable GUI Agent Training](https://awesomecua.com/zh/resources/arxiv-2610-05861/) — 2026-10-05
  Introduces Infinite-Dreamer, which learns action-conditioned screenshot editing from structured descriptions of GUI changes and uses it to synthesize robustness examples and multi-step trajectories. The synthetic data trains a mobile GUI agent evaluated on AndroidWorld, MobileWorld, and AndroidControl-Curated.
- [DIBench: Benchmarking Decision Integrity of GUI-based Mobile Agents Under Deceptive Injections](https://awesomecua.com/zh/resources/arxiv-2610-06898/) — 2026-09-29
  Evaluates whether deceptive UI content steers mobile agents away from instruction-consistent choices, using paired benign and injected decision states and decision-integrity metrics.
- [PhoneCLI: From App Interfaces to Callable Commands for Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2609-35671/) — 2026-09-28
  Introduces PhoneCLI, which explores mobile app interfaces and compiles navigation paths into reusable commands without internal app APIs or instrumentation. At execution time it verifies compiled paths and falls back to a visual agent for open-ended interaction or failed navigation.
- [Same Tasks, Different Apps: Why Mobile GUI Agents Fail to Generalize?](https://awesomecua.com/zh/resources/arxiv-2609-34139/) — 2026-09-28
  Introduces AnyAppBench, a live Android benchmark that holds user goals fixed while changing the application used to achieve them. It combines category-controlled task pairs with failure annotations to distinguish task understanding from application-specific execution skill.
- [PastForward: Faster On-Device GUI Agents via Computational Experience Reuse](https://awesomecua.com/zh/resources/arxiv-2609-32166/) — 2026-09-26
  Introduces PastForward, which reuses earlier output sequences as verified decoding proposals and starts future action computation from predicted GUI transitions. Screen checks determine whether speculative computation and cached model states can be retained.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.com/zh/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [From Tapping to Hopping: Augmenting Mobile GUI Agents with App-Native Deeplinks](https://awesomecua.com/zh/resources/arxiv-2609-30887/) — 2026-09-25
  GUI-Hopper combines verified Android deeplinks with GUI actions, using landing-screen descriptions, hybrid trajectory training and reinforcement learning to select navigation shortcuts and recover through GUI control.
- [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-30186/) — 2026-09-24
  Separates occasional visual-language planning from frequent lightweight action selection over an accessibility-tree-based action space.
- [Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://awesomecua.com/zh/resources/arxiv-2609-29892/) — 2026-09-24
  Trains a mobile planner with supervised trajectories and competence-adaptive RL, then couples typed tool execution with memory, skills and offline model-harness refinement.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [MATE: Policy-Aware Security Auditing for Mobile Agents via Synthesis-Driven Trajectory Learning](https://awesomecua.com/zh/resources/arxiv-2609-22724/) — 2026-09-19
  Introduces MATE, a policy-conditioned auditor for mobile-agent trajectories, and MATEBench for evaluating whether those trajectories violate app security policies.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-12394/) — 2026-09-11
  Describes a mobile-agent training pipeline centered on real-device rollouts, recovery of useful supervision from failures, and evolving evaluation tasks.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.com/zh/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-07712/) — 2026-09-07
  Introduces controlled simulated mobile apps with deterministic backend data and outcome checks for reproducible evaluation of realistic interactions.
- [Improving Proficiency and Efficiency of Android GUI Agents via Self-Generating Tool Actions](https://awesomecua.com/zh/resources/arxiv-2609-06792/) — 2026-09-06
  DroidTool generates application-state tools through proposal, implementation, testing and repair. Relational tests connect the tools’ preconditions and effects, and the resulting tools are evaluated as additions to Android GUI agents.
- [ElderBench: Benchmarking Autonomous Mobile Agents for Older Adults](https://awesomecua.com/zh/resources/arxiv-2609-04850/) — 2026-09-04
  ElderBench evaluates mobile GUI agents on smartphone requests elicited from older adults, including indirect and underspecified language. Online and offline tests, instruction normalization and linguistic analyses examine how these request patterns contribute to failures.
- [ActReal: System-Level Mobile Agents Challenge Mobile Automation Detection](https://awesomecua.com/zh/resources/arxiv-2608-30038/) — 2026-08-30
  Introduces ActReal, which translates semantic mobile-agent actions into coordinated touch and sensor signals to study automation-detection weaknesses. It evaluates detectors that observe touch events alone or together with inertial measurements under a privileged executor threat model.
- [Benchmarking General Mobile Assistants in Challenging Real-World Scenarios](https://awesomecua.com/zh/resources/arxiv-2608-27477/) — 2026-08-21
  Introduces GMA, a benchmark of 300 mobile-assistant tasks across seven applications, and studies how agent context retention and state tracking affect complex workflows.
- [Automated Trajectory Evaluation for Mobile Agents via Step-Level Consequence Reasoning and Aggregation](https://awesomecua.com/zh/resources/arxiv-2608-20797/) — 2026-08-21
  Introduces CRATE, a step-level visual judge for mobile-agent trajectories, and CRATE-S for assessing operational safety from action-conditioned state changes.
- [Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions](https://awesomecua.com/zh/resources/arxiv-2608-14132/) — 2026-08-14
  Introduces intention understanding, prediction, and confirmed execution tasks over mobile GUI trajectories, with a proactive agent combining personalized intention models and experience-guided actions.
- [CoAdapt-GUI: Joint Workflow Context and Policy Adaptation for Unseen GUI Applications](https://awesomecua.com/zh/resources/arxiv-2608-11588/) — 2026-08-12
  Introduces CoAdapt-GUI, which adapts workflow context and policy from a mobile GUI agent's own rollouts and rewards when it encounters unseen applications.
- [Not an A11y: How Android Accessibility Exposes Mobile AI Agents to Indirect Prompt Injection](https://awesomecua.com/zh/resources/arxiv-2608-08939/) — 2026-08-09
  Demonstrates that unsanitized Android accessibility tree metadata exposes mobile GUI agents to stealthy indirect prompt injection attacks.
- [AndroidReality: How Far Are Mobile Agents from the Real World?](https://awesomecua.com/zh/resources/arxiv-2608-07775/) — 2026-08-07
  Extends AndroidWorld with controlled state, transition, and action perturbations to test mobile-agent robustness, and studies a training-free introspective recovery mechanism.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [SEE: Structure-aware Exploring & Exploiting for Long-horizon GUI Agent Trajectory Synthesis](https://awesomecua.com/zh/resources/arxiv-2607-18046/) — 2026-07-20
  Introduces SEE, which first explores mobile interfaces to build a screen-and-element transition graph, then composes task trajectories through graph planning and controlled sampling. It studies coverage, loop avoidance, and transfer after training agents on the generated sequences.
- [HyMobileAgent: Data-Environment Co-Scaling for Efficient GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-14548/) — 2026-07-16
  Combines GUI perception data, instructional videos, real and simulated devices, and planning with reflection to develop a mobile agent.
- [PalmClaw: A Native On-Device Agent Framework for Mobile Phones](https://awesomecua.com/zh/resources/arxiv-2607-13027/) — 2026-07-14
  Introduces PalmClaw, an on-device phone agent framework that manages sessions, memory, and tools, exposing mobile capabilities through structured device-tool calls.
- [KnowAct-GUIClaw: Know Deeply, Act Perfectly, Personal GUI Assistant with Self-Evolving Memory and Skill](https://awesomecua.com/zh/resources/arxiv-2607-12625/) — 2026-07-14
  KnowAct-GUIClaw combines a host planner with pluggable GUI subagents, attributable experience memory and an evolving skill library. It uses user profiles and feedback for task decomposition and evaluates transfer across Android, iOS, HarmonyOS and Windows.
- [A Task-State Representation for Long-Horizon Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-00502/) — 2026-07-01
  Introduces TSR, a training-free wrapper for long-horizon mobile GUI agents that tracks instructions, subgoal progress, and action outcomes separately from screen observations.
- [(A)I Sees What You Don't: Exploiting New Attack Surfaces in Third-Party Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2607-00333/) — 2026-07-01
  Analyzes cross-app privilege escalation and visual attack surfaces introduced by third-party VLM-powered mobile agents.
- [What Memory Do GUI Agents Really Need? From Passive Records to Active Task-Driving States](https://awesomecua.com/zh/resources/arxiv-2606-31612/) — 2026-06-30
  Proposes ATMem, an updated execution-state memory for long mobile GUI tasks, and STR-GRPO to train selective memory use; also introduces a mobile task benchmark.
- [Xiaomi-GUI-0 Technical Report](https://awesomecua.com/zh/resources/arxiv-2606-31410/) — 2026-06-30
  Describes a mobile GUI agent trained through real-device interaction, corrected failure trajectories, supervised learning, and reinforcement learning.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions](https://awesomecua.com/zh/resources/arxiv-2606-14832/) — 2026-06-12
  PhoneHarness routes phone workflows across GUI actions, device-side commands and host tools while retaining auditable execution traces. Its accompanying benchmark checks observable task side effects, separating mixed-action execution from plausible final-answer generation.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models](https://awesomecua.com/zh/resources/arxiv-2606-04627/) — 2026-06-03
  Introduces MIRAGE, which trains mobile app agents to reason in compact latent states and anticipate future screenshots, reducing generated tokens during action selection.
- [Perceive Before Reasoning: A Pre-Reasoning Perception Framework for Efficient and Reliable Proactive Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2606-03236/) — 2026-06-02
  Introduces PRPF, a two-stage framework for proactive mobile agents that gates intervention with MPP and invokes PAR only when assistance is warranted.
- [AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents](https://awesomecua.com/zh/resources/url-e876bff0950b82a0c9b7/) — 2026-06
  Backdoor attack that fine-tunes GUI agents on teacher-written malicious trajectories, so a trigger makes the agent choose a harmful action fitting the current screen and instruction; tested on AitZ and AndroidControl.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [STAMP: Training Explicit Memory for Mobile GUI Agents in Controllable and Scalable Virtual Environments](https://awesomecua.com/zh/resources/arxiv-2605-29324/) — 2026-05-28
  STAMP trains explicit memory for mobile GUI agents in virtual environments by injecting facts into generated tasks and using supervised data and online RL.
- [Mobile-Aptus: Confidence-Driven Proactive and Robust Interaction in MLLM-based Mobile-Using Agents](https://awesomecua.com/zh/resources/arxiv-2605-28629/) — 2026-05-27
  Mobile-Aptus trains mobile agents to output actions and confidence scores, then corrects confidence bias to guide when they request human help.
- [Darwin Mobile Agent: A Roadmap for Self-Evolution](https://awesomecua.com/zh/resources/arxiv-2606-20622/) — 2026-05-26
  Describes asynchronous reinforcement-learning infrastructure using parallel cloud-hosted Android instances, explicit task lifecycles, and persistent-state management for mobile GUI interaction.
- [AndroidDaily: A Verifiable Benchmark for Mobile GUI Agents on Real-World Closed-Source Applications](https://awesomecua.com/zh/resources/arxiv-2605-27761/) — 2026-05-26
  AndroidDaily evaluates mobile GUI agents on daily workflows in closed-source Android apps. Its GRADE evaluator follows visual trajectories against operational obligations, output-quality requirements and negative constraints, producing process-level diagnostics without hidden app state.
- [Scaling, Benchmarking, and Reasoning of Vision-Language Agents for Mobile GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2605-27134/) — 2026-05-26
  HyperTrack provides mobile GUI navigation tasks across Chinese apps, while GUIEvalKit benchmarks VLM agents offline and supports analysis of training scale and history.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.com/zh/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [Computer Use at the Edge of the Statistical Precipice](https://awesomecua.com/zh/resources/arxiv-2605-08261/) — 2026-05-07
  DigiWorld is a sandboxed mobile-app benchmark for computer-use agents, paired with PRISM environment principles and a confidence-interval aggregation method.
- [X-OmniClaw Technical Report: A Unified Mobile Agent for Multimodal Understanding and Interaction](https://awesomecua.com/zh/resources/arxiv-2605-05765/) — 2026-05-07
  Describes an Android agent architecture combining multimodal perception, working and personal memory, hybrid XML/visual grounding, and reusable skills captured from user interactions.
- [Faithful Mobile GUI Agents with Guided Advantage Estimator](https://awesomecua.com/zh/resources/arxiv-2605-01208/) — 2026-05-02
  Introduces Faithful-Agent, which first teaches abstention under perturbed evidence and then refines GUI policies with an anchor-based, variance-adaptive advantage estimator. A thought-action consistency reward encourages decisions grounded in displayed evidence and instructions.
- [AgentLens: Adaptive Visual Modalities for Human-Agent Interaction in Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2604-20279/) — 2026-04-22
  Introduces AgentLens, a mobile GUI agent that shows full, partial, or generated interface views during background task execution to support user interaction.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.com/zh/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.com/zh/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [SkillDroid: Compile Once, Reuse Forever](https://awesomecua.com/zh/resources/arxiv-2604-14872/) — 2026-04-16
  Introduces SkillDroid, which compiles successful mobile GUI trajectories into reusable action templates and replays them without model calls, recompiling when they degrade.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.com/zh/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [Mobile GUI Agent Privacy Personalization with Trajectory Induced Preference Optimization](https://awesomecua.com/zh/resources/arxiv-2604-11259/) — 2026-04-13
  Proposes Trajectory Induced Preference Optimization (TIPO) to train mobile GUI agents for differing user privacy preferences across structurally different task trajectories.
- [CORA: Conformal Risk-Controlled Agents for Safeguarded Mobile GUI Automation](https://awesomecua.com/zh/resources/arxiv-2604-09155/) — 2026-04-10
  Introduces CORA, which calibrates a risk model to choose between executing and abstaining from mobile GUI actions, then diagnoses rejected actions to suggest interventions. Phone-Harm provides step-level safety labels for evaluating this safeguarding process.
- [KnowU-Bench: Towards Interactive, Proactive, and Personalized Mobile Agent Evaluation](https://awesomecua.com/zh/resources/arxiv-2604-08455/) — 2026-04-09
  Introduces KnowU-Bench, an Android emulator benchmark for mobile agents that evaluates preference elicitation, proactive decisions, consent and GUI task execution.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.com/zh/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [Do Phone-Use Agents Respect Your Privacy?](https://awesomecua.com/zh/resources/arxiv-2604-00986/) — 2026-04-01
  Introduces MyPhoneBench to verify whether phone-use agents minimize personal data disclosure when filling forms during benign mobile tasks.
- [PSPA-Bench: A Personalized Benchmark for Smartphone GUI Agent](https://awesomecua.com/zh/resources/arxiv-2603-29318/) — 2026-03-31
  PSPA-Bench evaluates personalized smartphone GUI behavior using user-specific instructions and a process-aware assessment of interaction traces. Its comparison of GUI agents diagnoses weaknesses in adapting workflows and preferences.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.com/zh/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [MANA: Towards Efficient Mobile Ad Detection via Multimodal Agentic UI Navigation](https://awesomecua.com/zh/resources/arxiv-2603-20351/) — 2026-03-20
  MANA combines visual, temporal and exploration signals to guide navigation toward mobile advertisements. It evaluates ad detection and interaction cost on commercial smartphones, including obfuscated-ad cases.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.com/zh/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [MobiFlow: Real-World Mobile Agent Benchmarking through Trajectory Fusion](https://awesomecua.com/zh/resources/arxiv-2604-09587/) — 2026-02-28
  Introduces MobiFlow, a mobile-agent evaluation framework that fuses task trajectories into a state graph for dynamic interaction with third-party apps and measures task outcomes.
- [K^2-Agent: Co-Evolving Know-What and Know-How for Hierarchical Mobile Device Control](https://awesomecua.com/zh/resources/arxiv-2603-00676/) — 2026-02-28
  Introduces K2-Agent, a hierarchical mobile-control framework that refines task knowledge through a reasoning loop and trains an executor with curriculum-guided reinforcement learning.
- [Turing Test on Screen: A Benchmark for Mobile GUI Agent Humanization](https://awesomecua.com/zh/resources/arxiv-2604-09574/) — 2026-02-24
  Introduces the Agent Humanization Benchmark (AHB) and mobile touch-dynamics data to assess whether GUI agents' interactions resemble human touch behavior.
- [AmbiBench: Benchmarking Mobile GUI Agents Beyond One-Shot Instructions in the Wild](https://awesomecua.com/zh/resources/arxiv-2602-11750/) — 2026-02-12
  AmbiBench evaluates mobile GUI agents under four levels of instruction clarity, including tasks requiring active clarification. Its MUSE evaluator separately audits outcomes, execution quality and interaction quality to study alignment with user intent.
- [Adaptive Milestone Reward for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2602-11524/) — 2026-02-12
  ADMIRE extracts milestones from successful GUI explorations to provide adaptive intermediate rewards. It assigns credit differently to successful and failed trajectories and evaluates training on AndroidWorld, with additional transfer studies in web and embodied settings.
- [Blind Gods and Broken Screens: Architecting a Secure, Intent-Centric Mobile Agent Operating System](https://awesomecua.com/zh/resources/arxiv-2602-10915/) — 2026-02-11
  Analyzes security risks in screen-based mobile agents and proposes Aura, an agent runtime with structured interactions, app-agent isolation and mediated communication.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.com/zh/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [UI-Venus-1.5 Technical Report](https://awesomecua.com/zh/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.com/zh/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [Do Multi-Agents Dream of Electric Screens? Achieving Perfect Accuracy on AndroidWorld Through Task Decomposition](https://awesomecua.com/zh/resources/arxiv-2602-07787/) — 2026-02-08
  Minitap coordinates six specialized agents for AndroidWorld tasks, checking text input against device state and detecting action loops to revise its strategy.
- [VenusBench-Mobile: A Challenging and User-Centric Benchmark for Mobile GUI Agents with Capability Diagnostics](https://awesomecua.com/zh/resources/arxiv-2604-06182/) — 2026-02-06
  Introduces VenusBench-Mobile, an online benchmark for mobile GUI agents with user-intent-driven tasks and capability annotations for analyzing agent behavior and failures.
- [M$^2$-Miner: Multi-Agent Enhanced MCTS for Mobile GUI Agent Data Mining](https://awesomecua.com/zh/resources/arxiv-2602-05429/) — 2026-02-05
  M2-Miner uses multi-agent-guided Monte Carlo tree search to collect mobile GUI intent–trajectory pairs. Intent recycling and progressive collector training aim to increase the diversity and usefulness of the mined interaction data.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.com/zh/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [Generative Visual Code Mobile World Models](https://awesomecua.com/zh/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training](https://awesomecua.com/zh/resources/arxiv-2601-22781/) — 2026-01-30
  MobileGen estimates a mobile agent’s strengths across structural and semantic task difficulty, then samples new training targets around that profile. A controllable multi-agent generator creates the corresponding instructions and GUI trajectories.
- [Okara: Detection and Attribution of TLS Man-in-the-Middle Vulnerabilities in Android Apps with Foundation Models](https://awesomecua.com/zh/resources/arxiv-2601-22770/) — 2026-01-30
  Okara uses foundation-model-driven GUI agents to explore Android apps for TLS vulnerability detection, then applies instrumentation and classification to attribute vulnerable code.
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.com/zh/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [MobileBench-OL: A Comprehensive Chinese Benchmark for Evaluating Mobile GUI Agents in Real-World Environment](https://awesomecua.com/zh/resources/arxiv-2601-20335/) — 2026-01-28
  Introduces MobileBench-OL, an online benchmark of Chinese-app tasks spanning execution, reasoning, exploration, and noisy conditions. Its automatic evaluation and reset framework supports repeated testing of mobile GUI agents in real environments.
- [Me-Agent: A Personalized Mobile Agent with Two-Level User Habit Learning for Enhanced Interaction](https://awesomecua.com/zh/resources/arxiv-2601-20162/) — 2026-01-28
  Me-Agent personalizes mobile agent behavior through a preference reward model and hierarchical memory for long-term and app-specific habits, and introduces User FingerTip.
- [Curiosity Driven Knowledge Retrieval for Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2601-19306/) — 2026-01-27
  Uses execution uncertainty to trigger retrieval from application documentation, code, and past trajectories, organizing the results into structured AppCards for Android agent planning.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.com/zh/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://awesomecua.com/zh/resources/arxiv-2601-09636/) — 2026-01-14
  Introduces AndroidIntent to evaluate how GUI agents infer omitted preferences and recurring routines from long-term user records. Its HIM-Agent maintains hierarchical memory of preferences and routines for personalized execution and proactive suggestions.
- [MobileDreamer: Generative Sketch World Model for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2601-04035/) — 2026-01-07
  MobileDreamer predicts post-action GUI states as task-relevant textual sketches with an order-invariant learning objective. Agents use these predictions for lookahead action selection, evaluated on AndroidWorld.
- [SmartSnap: Proactive Evidence Seeking for Self-Verifying Agents](https://awesomecua.com/zh/resources/arxiv-2512-22322/) — 2025-12-26
  SmartSnap trains GUI agents to collect concise screenshot evidence of task completion for an LLM judge, with experiments on mobile tasks.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.com/zh/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.com/zh/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [Step-GUI Technical Report](https://awesomecua.com/zh/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [MobiBench: Multi-Branch, Modular Benchmark for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2512-12634/) — 2025-12-14
  MobiBench evaluates mobile GUI agents offline while allowing multiple valid action paths. It decomposes agent pipelines into modules to study component contributions, configurations, and performance bottlenecks.
- [AFRAgent : An Adaptive Feature Renormalization Based High Resolution Aware GUI agent](https://awesomecua.com/zh/resources/arxiv-2512-00846/) — 2025-11-30
  Introduces AFRAgent, which uses adaptive feature renormalization to combine low-resolution visual embeddings with high-resolution details. The architecture is evaluated for smartphone GUI automation on Meta-GUI and AITW.
- [D-GARA: A Dynamic Benchmarking Framework for GUI Agent Robustness in Real-World Anomalies](https://awesomecua.com/zh/resources/arxiv-2511-16590/) — 2025-11-20
  D-GARA evaluates Android GUI agents under runtime anomalies such as permission dialogs, battery warnings, and update prompts. Its modular environment embeds these interruptions in Android applications to study recovery and robustness.
- [DualTAP: A Dual-Task Adversarial Protector for Mobile MLLM Agents](https://awesomecua.com/zh/resources/arxiv-2511-13248/) — 2025-11-17
  Applies dual-task adversarial perturbations to mobile screenshots to conceal personally identifiable information from untrusted MLLM routers while preserving agent task utility.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [ProBench: Benchmarking GUI Agents with Accurate Process Information](https://awesomecua.com/zh/resources/arxiv-2511-09157/) — 2025-11-12
  ProBench extends mobile GUI evaluation with tasks whose correctness depends on the interaction process as well as the final state. Its ProcessProvider supplies process information for assessing agent behavior and analyzing failure modes.
- [UI-Hawk: Unleashing the Screen Stream Understanding for Mobile GUI Agents](https://awesomecua.com/zh/resources/url-9113270916a36b4b76f1/) — 2025-11
  Mobile GUI agent whose history-aware visual encoder reads earlier screenshots with the current one, trained by a curriculum from grounding, referring, screen QA and summarization to navigation; adds the FunUI benchmark.
- [Measuring the Security of Mobile LLM Agents under Adversarial Prompts from Untrusted Third-Party Channels](https://awesomecua.com/zh/resources/arxiv-2510-27140/) — 2025-10-31
  Measures how untrusted third-party notifications, messages, and app content can hijack mobile LLM agents into executing unauthorized cross-app actions.
- [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://awesomecua.com/zh/resources/arxiv-2510-24411/) — 2025-10-28
  Introduces MobileRisk-Live and OS-Sentinel, combining a formal verifier for system-level violations with a multimodal judge for contextual risks in mobile GUI workflows.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.com/zh/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [CORE: Reducing UI Exposure in Mobile Agents via Collaboration Between Cloud and Local LLMs](https://awesomecua.com/zh/resources/arxiv-2510-15455/) — 2025-10-17
  Introduces CORE, which divides mobile UI hierarchies into semantic blocks and shares planning between local and cloud language models. Local ranking limits the screen information sent for cloud-side element selection, with a multi-round mechanism for correcting inadequate context.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [Hi-Agent: Hierarchical Vision-Language Agents for Mobile Device Control](https://awesomecua.com/zh/resources/arxiv-2510-14388/) — 2025-10-16
  Introduces Hi-Agent, jointly training a high-level reasoning model and a low-level mobile action model. Execution feedback supplies a foresight advantage for optimizing subgoal decisions, with evaluations on Android control benchmarks.
- [ReInAgent: A Context-Aware GUI Agent Enabling Human-in-the-Loop Mobile Task Navigation](https://awesomecua.com/zh/resources/arxiv-2510-07988/) — 2025-10-09
  Introduces ReInAgent, coordinating information management, planning, and reflection around a shared memory for mobile tasks. It proactively asks users for information and checks consistency when instructions are ambiguous or change during execution.
- [Invisible to Humans, Triggered by Agents: Stealthy Jailbreak Attacks on Mobile Vision-Language Agents](https://awesomecua.com/zh/resources/arxiv-2510-07809/) — 2025-10-09
  Uses the near-zero contact-touch signals of automated mobile agents to expose malicious visual content selectively during agent interactions. The paper combines this agent-only perceptual injection with HG-IDA* prompt optimization to study unauthorized cross-app actions.
- [Agent+P: Guiding UI Agents via Symbolic Planning](https://awesomecua.com/zh/resources/arxiv-2510-06042/) — 2025-10-07
  Guides UI agents with symbolic planning over a UI transition graph initialized from app-code analysis and updated through online exploration, with evaluation on AndroidWorld.
- [Say One Thing, Do Another? Diagnosing Reasoning-Execution Gaps in VLM-Powered Mobile-Use Agents](https://awesomecua.com/zh/resources/arxiv-2510-02204/) — 2025-10-02
  Introduces an evaluation framework for mobile GUI agents that compares actions implied by their reasoning with intended and executed actions to diagnose mismatches.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.com/zh/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.com/zh/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [D-Artemis: A Deliberative Cognitive Framework for Mobile GUI Multi-Agents](https://awesomecua.com/zh/resources/arxiv-2509-21799/) — 2025-09-26
  Introduces D-Artemis, a mobile GUI agent framework that retrieves app-specific tips, checks actions before execution, and reflects on their outcomes without trajectory training.
- [UISim: An Interactive Image-Based UI Simulator for Dynamic Mobile Environments](https://awesomecua.com/zh/resources/arxiv-2509-21733/) — 2025-09-26
  Introduces UISim, an image-based mobile UI simulator that predicts the next screen layout after an action and renders the resulting screen for testing and data generation.
- [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2509-11543/) — 2025-09-15
  UI-S1 simulates multi-turn online learning over offline trajectories, using a patch module to recover divergences while retaining the model’s own outputs in context. It combines discounted future returns with step- and episode-level advantages and introduces a semi-online performance proxy.
- [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2509-18119/) — 2025-09-10
  MobileRL adapts GRPO to mobile GUI training with difficulty-dependent replay of successes and filtering of failure curricula. A shortest-path reward adjustment accounts for task length, with evaluations on AndroidWorld and AndroidLab.
- [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2509-06477/) — 2025-09-08
  MAS-Bench evaluates mobile agents that combine GUI actions with APIs, deep links, and reusable scripts. Its 139 tasks across 11 apps test use of 88 predefined shortcuts as well as the ability to generate new reusable workflows.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.com/zh/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.com/zh/resources/arxiv-2509-02444/) — 2025-09-02
  Describes a mobile-agent stack combining region-based coordinate correction, hierarchical task planning, multi-agent voting, and reuse of successful interaction traces.
- [Succeed or Learn Slowly: Sample Efficient Off-Policy Reinforcement Learning for Mobile App Control](https://awesomecua.com/zh/resources/arxiv-2509-01720/) — 2025-09-01
  Succeed or Learn Slowly applies direct off-policy updates to successful interactions and more conservative regularized updates to negative examples. Successful Transition Replay prioritizes successful experience during policy learning, with evaluation on AndroidWorld.
- [MobiAgent: A Systematic Framework for Customizable Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2509-00531/) — 2025-08-30
  Presents MobiAgent, combining MobiMind agent models, the AgentRR acceleration framework, and MobiFlow evaluation. It also introduces an AI-assisted data-collection pipeline for mobile GUI tasks.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.com/zh/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [SWIRL: A Staged Workflow for Interleaved Reinforcement Learning in Mobile GUI Control](https://awesomecua.com/zh/resources/arxiv-2508-20018/) — 2025-08-27
  Introduces SWIRL, staged interleaved RL for mobile GUI control, pairing a Navigator that plans from screens and language with an Interactor that produces actions.
- [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://awesomecua.com/zh/resources/arxiv-2508-19679/) — 2025-08-27
  InquireMobile trains mobile agents to seek human confirmation at critical decisions using staged reinforcement fine-tuning and pre-action reasoning. InquireBench evaluates safe interaction and proactive inquiry, distinguishing asking for help from completing the underlying task.
- [Mind the Third Eye! Benchmarking Privacy Awareness in MLLM-powered Smartphone Agents](https://awesomecua.com/zh/resources/arxiv-2508-19493/) — 2025-08-27
  Introduces SAPA-Bench with 7,138 smartphone scenarios to evaluate whether MLLM-powered mobile agents detect and protect sensitive personal information on screen.
- [PerPilot: Personalizing VLM-based Mobile Agents via Memory and Exploration](https://awesomecua.com/zh/resources/arxiv-2508-18040/) — 2025-08-25
  Introduces PerPilot and the PerInstruct dataset for completing user-specific mobile instructions through memory retrieval, app exploration, and clarification when missing context remains unresolved.
- [Mobile-Agent-v3: Fundamental Agents for GUI Automation](https://awesomecua.com/zh/resources/arxiv-2508-15144/) — 2025-08-21
  Introduces GUI-Owl models and Mobile-Agent-v3 orchestration, using environment-generated trajectories to support GUI capabilities.
- [CRAFT-GUI: Curriculum-Reinforced Agent For GUI Tasks](https://awesomecua.com/zh/resources/arxiv-2508-11360/) — 2025-08-15
  CRAFT-GUI organizes GUI trajectories by difficulty for curriculum-based GRPO training. Its reward combines rule-based signals with model judgments, with evaluation on Android Control and an internal online benchmark.
- [MVISU-Bench: Benchmarking Mobile Agents for Real-World Tasks by Multi-App, Vague, Interactive, Single-App and Unethical Instructions](https://awesomecua.com/zh/resources/arxiv-2508-09057/) — 2025-08-12
  MVISU-Bench evaluates bilingual mobile tasks involving cross-app work, vague requests, user interaction and unethical instructions alongside ordinary single-app tasks. Its Aider prompting module is designed to clarify intent and mitigate risky execution within agent workflows.
- [Uncertainty-Aware GUI Agent: Adaptive Perception through Component Recommendation and Human-in-the-Loop Refinement](https://awesomecua.com/zh/resources/arxiv-2508-04025/) — 2025-08-06
  RecAgent narrows attention to recommended UI components and requests user feedback when task intent or decisions remain uncertain. It introduces ComplexAction to evaluate specified single-step GUI actions in difficult interface scenarios.
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2507-21953/) — 2025-07-29
  Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.com/zh/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [MagicGUI: A Foundational Mobile GUI Agent with Scalable Data Pipeline and Reinforcement Fine-tuning](https://awesomecua.com/zh/resources/arxiv-2508-03700/) — 2025-07-19
  Combines a mobile GUI data pipeline, perception and planning capabilities, and reinforcement fine-tuning for interactive task execution.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.com/zh/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [Mobile GUI Agents under Real-world Threats: Are We There Yet?](https://awesomecua.com/zh/resources/arxiv-2507-04227/) — 2025-07-06
  Introduces an app-content instrumentation framework and complementary interactive and static test suites for mobile GUI agents. It studies how untrusted third-party content changes task execution and state understanding.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.com/zh/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [SafeMobile: Chain-level Jailbreak Detection and Automated Evaluation for Multimodal Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2507-00841/) — 2025-07-01
  Studies chain-level risk detection for mobile multimodal agents and a language-model-assisted evaluator, assessing safety interventions together with functional preservation.
- [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://awesomecua.com/zh/resources/arxiv-2506-20332/) — 2025-06-25
  Uses a staged curriculum from response-format alignment through action feedback to interactive task-level training for mobile agents.
- [Poison Once, Control Anywhere: Clean-Text Visual Backdoors in VLM-based Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2506-13205/) — 2025-06-16
  Demonstrates clean-text visual backdoor attacks (VIBMA) that compromise fine-tuned VLM mobile agents through visual triggers while keeping text instructions intact.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.com/zh/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.com/zh/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.com/zh/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.com/zh/resources/arxiv-2506-08012/) — 2025-06-09
  GUI-Reflection synthesizes reflection and error-correction examples from successful trajectories and adds dedicated learning stages for these behaviors. It introduces a reflection task suite, a mobile environment for online data collection, and iterative reflection tuning.
- [GUIPilot: A Consistency-based Mobile GUI Testing Approach for Detecting Application-specific Bugs](https://awesomecua.com/zh/resources/arxiv-2506-07385/) — 2025-06-09
  Introduces GUIPilot, which compares mobile design mock-ups with implemented screens through widget alignment and tests expected transitions by executing inferred UI actions. It evaluates both visual inconsistencies and workflow-specific bugs.
- [Scenario-Guided LLM-based Mobile App GUI Testing](https://awesomecua.com/zh/resources/arxiv-2506-05079/) — 2025-06-05
  ScenGen organizes mobile GUI testing around business scenarios. Five collaborating agents observe the interface, choose and execute actions, check scenario completion, and record operations and runtime bugs.
- [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://awesomecua.com/zh/resources/arxiv-2506-01391/) — 2025-06-02
  Combines grounding pretraining, bilingual interaction trajectories, and reinforcement fine-tuning for mobile GUI actions.
- [Agent-SAMA: State-Aware Mobile Assistant](https://awesomecua.com/zh/resources/arxiv-2505-23596/) — 2025-05-29
  Models mobile application execution as a finite-state machine to support planning, verification, and recovery across interface transitions.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://awesomecua.com/zh/resources/arxiv-2505-20660/) — 2025-05-27
  BacktrackAgent adds verification, judgment, and reflection modules to detect erroneous GUI actions and guide recovery. It develops backtracking-oriented training data that includes post-action pages and evaluates task completion and step accuracy on Mobile3M and Auto-UI.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Unlocking Smarter Device Control: Foresighted Planning with a World Model-Driven Code Execution Approach](https://awesomecua.com/zh/resources/arxiv-2505-16422/) — 2025-05-22
  FPWC builds and refines a task-oriented world model before planning mobile-device actions. It executes plans as code and evaluates the approach in simulated environments and on real mobile devices.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [Building a Stable Planner: An Extended Finite State Machine Based Planning Module for Mobile GUI Agent](https://awesomecua.com/zh/resources/arxiv-2505-14141/) — 2025-05-20
  SPlanner models mobile-app functions and configurations with extended finite-state machines, traverses them to construct execution paths, and converts those paths into natural-language plans. A VLM follows these plans to perform GUI actions, with evaluation on AndroidWorld.
- [From Assistants to Adversaries: Exploring the Security Risks of Mobile LLM Agents](https://awesomecua.com/zh/resources/arxiv-2505-12981/) — 2025-05-19
  Analyzes security vulnerabilities across OEM system-level, third-party, and research mobile LLM agents, covering GUI and cross-application attack surfaces.
- [Scalable Video-to-Dataset Generation for Cross-Platform Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2505-12632/) — 2025-05-19
  Introduces MONDAY and an automated pipeline that extracts mobile-navigation training data from instructional videos across operating-system platforms.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.com/zh/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [Mobile-Bench-v2: A More Realistic and Comprehensive Benchmark for VLM-based Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2505-11891/) — 2025-05-17
  Mobile-Bench-v2 evaluates mobile GUI agents using multiple acceptable offline action paths, noisy interfaces with ads or pop-ups, and ambiguous instructions with scripted clarification exchanges. These splits separate step-level execution, robustness, and proactive interaction.
- [LLM-Explorer: Towards Efficient and Affordable LLM-based Exploration for Mobile Apps](https://awesomecua.com/zh/resources/arxiv-2505-10593/) — 2025-05-15
  LLM-Explorer uses language models to maintain compact knowledge for mobile app exploration, then generates actions without invoking the model at every step. The study compares exploration coverage and cost across twenty apps.
- [EcoAgent: An Efficient Device-Cloud Collaborative Multi-Agent Framework for Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2505-05440/) — 2025-05-08
  EcoAgent splits mobile automation between cloud planning and on-device observation and verification. Compact screen descriptions and feedback reduce communication costs, with evaluation on AndroidWorld.
- [Grounding Multimodal Large Language Model in GUI World](https://awesomecua.com/zh/resources/url-dca82e9214c5926109f1/) — 2025-05-01
  Trains a 0.4B SAM-initialized GUI grounding model on 0.5M auto-collected web screenshots with 35M element annotations, then links it to a Qwen-VL planner through a position token for MiniWob, AITW and Mind2Web.
- [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.com/zh/resources/arxiv-2504-13805/) — 2025-04-18
  LearnAct parses human demonstrations into reusable knowledge, retrieves relevant examples, and uses them during mobile GUI task execution. The accompanying LearnGUI benchmark includes 2,252 offline tasks and 101 online tasks for studying adaptation from demonstrations.
- [VLM-Fuzz: Vision Language Model Assisted Recursive Depth-first Search Exploration for Effective UI Testing of Android Apps](https://awesomecua.com/zh/resources/arxiv-2504-11675/) — 2025-04-16
  VLM-Fuzz combines depth-first UI exploration with Android manifest analysis, runtime widget hierarchies, and on-demand visual reasoning to generate app test inputs. It evaluates coverage on 59 benchmark apps and uses additional Google Play apps to study crash discovery.
- [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.com/zh/resources/arxiv-2504-13936/) — 2025-04-15
  ViMo predicts the next mobile-app screenshot after a candidate action by separately modeling graphics and text. A symbolic placeholder representation preserves layout while a second predictor supplies readable text, enabling visual lookahead for GUI-agent planning.
- [Agent-Initiated Interaction in Phone UI Automation](https://awesomecua.com/zh/resources/arxiv-2503-19537/) — 2025-03-25
  Defines when phone agents should request user interaction and introduces AndroidInteraction annotations for deciding whether and how to engage the user.
- [VeriSafe Agent: Safeguarding Mobile GUI Agent via Logic-based Action Verification](https://awesomecua.com/zh/resources/arxiv-2503-18492/) — 2025-03-24
  Translates user instructions into formal specifications and applies runtime logic-based checks to proposed mobile GUI actions.
- [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://awesomecua.com/zh/resources/arxiv-2503-16788/) — 2025-03-21
  This study compares matched reasoning and non-reasoning vision-language models on static mobile GUI tasks and interactive AndroidWorld navigation. It finds that chain-of-thought effects vary across tasks and model families.
- [Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment](https://awesomecua.com/zh/resources/arxiv-2503-15937/) — 2025-03-20
  Introduces V-Droid, which verifies candidate actions in a discrete action space.
- [FedMABench: Benchmarking Mobile Agents on Decentralized Heterogeneous User Data](https://awesomecua.com/zh/resources/arxiv-2503-05143/) — 2025-03-07
  Introduces a benchmark for federated mobile-agent training under heterogeneous user and application distributions, combining datasets, algorithms, and base models.
- [CHOP: Mobile Operating Assistant with Constrained High-frequency Optimized Subtask Planning](https://awesomecua.com/zh/resources/arxiv-2503-03743/) — 2025-03-05
  Uses human-planned subtasks to constrain and refine the intermediate plans connecting user goals with executable mobile operations.
- [AutoEval: A Practical Framework for Autonomous Evaluation of Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2503-02403/) — 2025-03-04
  Generates reward signals from UI-state changes and uses a judging system to evaluate mobile agents with reduced manual evaluator construction.
- [OS-Kairos: Adaptive Interaction for MLLM-Powered GUI Agents](https://awesomecua.com/zh/resources/arxiv-2503-16465/) — 2025-02-26
  Uses step-level confidence estimates to decide when a GUI agent should act autonomously or request human intervention in complex situations.
- [Mobile-Agent-V: A Video-Guided Approach for Effortless and Efficient Operational Knowledge Injection in Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2502-17110/) — 2025-02-24
  Extracts operational guidance from video for mobile task execution and introduces Mobile-Knowledge to evaluate the contribution of external knowledge.
- [MobileSteward: Integrating Multiple App-Oriented Agents with Self-Evolution to Automate Cross-App Instructions](https://awesomecua.com/zh/resources/arxiv-2502-16796/) — 2025-02-24
  Introduces MobileSteward, which coordinates app-specific phone agents, schedules cross-app tasks, and reuses successful experience; CAPBench evaluates cross-app instructions.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.com/zh/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [MobileA3gent: Training Mobile GUI Agents Using Decentralized Self-Sourced Data from Diverse Users](https://awesomecua.com/zh/resources/arxiv-2502-02982/) — 2025-02-05
  Studies automatic annotation and federated training of mobile GUI agents from decentralized user interaction data with heterogeneous distributions.
- [ReachAgent: Enhancing Mobile Agent via Page Reaching and Operation](https://awesomecua.com/zh/resources/arxiv-2502-02955/) — 2025-02-05
  Splits mobile tasks into reaching the required page and operating on it, using subtask data and preferred GUI trajectories for training.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.com/zh/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [Beyond Pass or Fail: Multi-Dimensional Benchmarking of Foundation Models for Goal-based Mobile UI Navigation](https://awesomecua.com/zh/resources/arxiv-2501-02863/) — 2025-01-06
  Sphinx benchmarks foundation models on goal-based mobile UI navigation, using app test cases and a toolkit that identifies different failure modes.
- [A3: Android Agent Arena for Mobile GUI Agents with Essential-State Procedural Evaluation](https://awesomecua.com/zh/resources/arxiv-2501-01149/) — 2025-01-02
  Introduces Android Agent Arena with online application tasks and procedural evaluation based on reaching essential intermediate states.
- [GUI Testing Arena: A Unified Benchmark for Advancing Autonomous GUI Testing Agent](https://awesomecua.com/zh/resources/arxiv-2412-18426/) — 2024-12-24
  Evaluates GUI testing through test-intent generation, execution, and defect detection using real, modified, and synthetic mobile application data.
- [AutoDroid-V2: Boosting SLM-based GUI Agents via Code Generation](https://awesomecua.com/zh/resources/arxiv-2412-18116/) — 2024-12-24
  Recasts mobile UI automation as on-device code generation, using app-specific documentation and synthetic tasks to guide smaller models.
- [Automated Test Transfer Across Android Apps Using Large Language Models](https://awesomecua.com/zh/resources/arxiv-2411-17933/) — 2024-11-26
  LLMigrate uses LLMs to transfer usage-based UI tests between mobile apps with similar functions, reducing the need to write tests for each app.
- [Generalist Virtual Agents: A Survey on Autonomous Agents Across Digital Platforms](https://awesomecua.com/zh/resources/arxiv-2411-10943/) — 2024-11-17
  Surveys virtual agents for browsers, applications and operating systems, organizing prior work by task type, observation and action spaces, model strategies and evaluation methods. It examines screen-based interaction and keyboard, mouse and touch control, alongside transferability and long-sequence decision-making challenges.
- [Foundations and Recent Trends in Multimodal Mobile Agents: A Survey](https://awesomecua.com/zh/resources/arxiv-2411-02006/) — 2024-11-04
  Surveys multimodal mobile agents, organizing prompt-based and training-based approaches alongside evaluation benchmarks, supporting technologies, and open challenges in mobile task execution.
- [AndroidLab: Training and Systematic Benchmarking of Android Autonomous Agents](https://awesomecua.com/zh/resources/arxiv-2410-24024/) — 2024-10-31
  Provides a shared Android action environment, reproducible tasks, and instruction data for training and comparing language and multimodal agents.
- [Lightweight Neural App Control](https://awesomecua.com/zh/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [SPA-Bench: A Comprehensive Benchmark for SmartPhone Agent Evaluation](https://awesomecua.com/zh/resources/arxiv-2410-15164/) — 2024-10-19
  Introduces a smartphone-agent benchmark with English and Chinese tasks, real-time Android interaction, and completion and resource-use metrics.
- [Test-Agent: A Multimodal App Automation Testing Framework Based on the Large Language Model](https://awesomecua.com/zh/resources/url-83569d30f341f39f4a78/) — 2024-10-18
  Test-Agent uses an LLM, screenshots, and interface structure to generate and execute mobile app test actions from natural-language instructions across platforms.
- [MobA: Multifaceted Memory-Enhanced Adaptive Planning for Efficient Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2410-13757/) — 2024-10-17
  Combines adaptive mobile-task planning, reflection-based recovery, and multiple memory components, evaluated with MobBench and AndroidArena.
- [From Interaction to Impact: Towards Safer AI Agents Through Understanding and Evaluating Mobile UI Operation Impacts](https://awesomecua.com/zh/resources/arxiv-2410-09006/) — 2024-10-11
  Develops a taxonomy of mobile-action consequences and annotated interaction data to evaluate whether models recognize impactful or risky UI operations.
- [ClickAgent: Enhancing UI Location Capabilities of Autonomous Agents](https://awesomecua.com/zh/resources/arxiv-2410-11872/) — 2024-10-09
  Separates multimodal reasoning and action planning from a dedicated UI localization model, with evaluation on Android devices.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.com/zh/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.com/zh/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [AppAgent v2: Advanced Agent for Flexible Mobile Interactions](https://awesomecua.com/zh/resources/arxiv-2408-11824/) — 2024-08-05
  Separates exploration and deployment while using a structured application knowledge base and retrieval to guide mobile workflows.
- [MobileFlow: A Multimodal LLM For Mobile GUI Agent](https://awesomecua.com/zh/resources/arxiv-2407-04346/) — 2024-07-05
  Introduces a mobile GUI model using hybrid visual encoders, mixture-of-experts expansion, and alignment training for multilingual interfaces.
- [MobileExperts: A Dynamic Tool-Enabled Agent Team in Mobile Devices](https://awesomecua.com/zh/resources/arxiv-2407-03913/) — 2024-07-04
  Introduces MobileExperts, which assembles mobile-agent teams, lets agents explore and formulate tools, and coordinates them through two levels of planning. A benchmark organizes tasks by hierarchical intelligence levels.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [E-ANT: A Large-Scale Dataset for Efficient Automatic GUI NavigaTion](https://awesomecua.com/zh/resources/arxiv-2406-14250/) — 2024-06-20
  Introduces Chinese-language GUI navigation traces and annotated screenshots collected from human interactions with mini-applications.
- [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2406-11896/) — 2024-06-14
  Combines offline initialization and online reinforcement learning in Android environments, with automated evaluation and curriculum-based sampling.
- [MobileAgentBench: An Efficient and User-Friendly Benchmark for Mobile LLM Agents](https://awesomecua.com/zh/resources/arxiv-2406-08184/) — 2024-06-12
  Introduces a mobile-agent benchmark with tasks across open-source applications, organized by difficulty to reduce manual evaluation effort.
- [On the Effects of Data Scale on UI Control Agents](https://awesomecua.com/zh/resources/arxiv-2406-03679/) — 2024-06-06
  Studies how Android task performance changes with demonstration scale and releases AndroidControl with high- and low-level instructions.
- [Mobile-Agent-v2: Mobile Device Operation Assistant with Effective Navigation via Multi-Agent Collaboration](https://awesomecua.com/zh/resources/arxiv-2406-01014/) — 2024-06-03
  Separates mobile planning, decision-making, and reflection, with a memory unit for task progress and relevant content.
- [UINav: A Practical Approach to Train On-Device Automation Agents](https://awesomecua.com/zh/resources/url-ca76de56f3ddbd7c61b4/) — 2024-06
  Trains small Android automation agents from demonstrations, using macro actions with status checks, demonstration augmentation, and a referee model that predicts task completion to guide further demonstrations.
- [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://awesomecua.com/zh/resources/arxiv-2405-14573/) — 2024-05-23
  Introduces parameterized Android tasks with initialization, success checks, and cleanup for reproducible interactive evaluation.
- [Enhancing Mobile "How-to" Queries with Automated Search Results Verification and Reranking](https://awesomecua.com/zh/resources/arxiv-2404-08860/) — 2024-04-13
  Executes instructions from mobile how-to search results inside a controlled Android environment, then uses the observed success of those instructions to verify and rerank technical-support results.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.com/zh/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.com/zh/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [Prompt2Task: Automating UI Tasks on Smartphones from Textual Prompts](https://awesomecua.com/zh/resources/arxiv-2404-02475/) — 2024-04-03
  Prompt2Task converts textual goals or procedures into smartphone UI automation using agents for intent interpretation, external-information handling, and execution. User feedback and accumulated task knowledge support subsequent task generation and operation.
- [Android in the Zoo: Chain-of-Action-Thought for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2403-02713/) — 2024-03-05
  Introduces Chain-of-Action-Thought and Android-In-The-Zoo annotations that connect prior actions, screen observations, intended actions, and expected outcomes.
- [CoCo-Agent: A Comprehensive Cognitive MLLM Agent for Smartphone GUI Automation](https://awesomecua.com/zh/resources/arxiv-2402-11941/) — 2024-02-19
  Combines screenshots, layout information, and action history with a factored action predictor for smartphone automation.
- [Mobile-Agent: Autonomous Multi-Modal Mobile Device Agent with Visual Perception](https://awesomecua.com/zh/resources/arxiv-2401-16158/) — 2024-01-29
  Uses visual perception tools and task decomposition to operate mobile applications without relying on app interface metadata.
- [GPTVoiceTasker: Advancing Multi-step Mobile Task Efficiency Through Dynamic Interface Exploration and Learning](https://awesomecua.com/zh/resources/arxiv-2401-14268/) — 2024-01-25
  Introduces GPTVoiceTasker, a mobile assistant that interprets user commands, executes device interactions, and learns from prior commands to streamline later task execution. The work includes a user study of task efficiency.
- [MobileAgent: enhancing mobile control via human-machine interaction and SOP integration](https://awesomecua.com/zh/resources/arxiv-2401-04124/) — 2024-01-04
  Combines operating-procedure context with user interaction to guide mobile task automation and handle personalized or sensitive requests.
- [AutoTask: Executing Arbitrary Voice Commands by Exploring and Learning from Mobile GUI](https://awesomecua.com/zh/resources/arxiv-2312-16062/) — 2023-12-26
  Executes voice-requested mobile tasks through GUI exploration, backtracking, and accumulated interaction experience.
- [AppAgent: Multimodal Agents as Smartphone Users](https://awesomecua.com/zh/resources/arxiv-2312-13771/) — 2023-12-21
  Builds app knowledge through exploration or human demonstrations and uses it to guide multimodal smartphone interactions.
- [VisionTasker: Mobile Task Automation Using Vision Based UI Understanding and LLM Task Planning](https://awesomecua.com/zh/resources/arxiv-2312-11190/) — 2023-12-18
  VisionTasker converts screenshots into textual UI interpretations and presents one interface at a time to an LLM planner for action selection. It evaluates visual representations and execution of 147 tasks on an Android smartphone, including integration with programming by demonstration.
- [Intelligent Virtual Assistants with LLM-based Process Automation](https://awesomecua.com/zh/resources/arxiv-2312-06677/) — 2023-12-04
  Presents LLMPA, a mobile process-automation architecture that decomposes requests, identifies interface elements, predicts actions and checks errors. Demonstrations evaluate multistep operations in Alipay.
- [Explore, Select, Derive, and Recall: Augmenting LLM with Human-like Memory for Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2312-03003/) — 2023-12-04
  Introduces MobileGPT, which organizes mobile-app experience into reusable subtasks using an explore, select, derive, and recall cycle. Its memory supports learning task procedures and adapting them to new contexts.
- [Autonomous Large Language Model Agents Enabling Intent-Driven Mobile GUI Testing](https://awesomecua.com/zh/resources/arxiv-2311-08649/) — 2023-11-15
  DroidAgent uses language models and memory to set and execute GUI test goals in Android apps; an evaluation covers 15 apps from the Themis benchmark.
- [GPT-4V in Wonderland: Large Multimodal Models for Zero-Shot Smartphone GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2311-07562/) — 2023-11-13
  Studies MM-Navigator, a multimodal agent that interprets smartphone screenshots and predicts localized actions without task-specific training.
- [Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions](https://awesomecua.com/zh/resources/arxiv-2310-15780/) — 2023-10-24
  Introduces GPTDroid for mobile GUI testing: it feeds app page information to an LLM, runs generated test scripts and uses feedback and memory to guide further exploration.
- [CrashTranslator: Automatically Reproducing Mobile Application Crashes Directly from Stack Trace](https://awesomecua.com/zh/resources/arxiv-2310-07128/) — 2023-10-11
  Introduces CrashTranslator, which predicts GUI exploration steps from stack traces with an LLM and uses RL-guided search to reproduce crashes in Android apps.
- [You Only Look at Screens: Multimodal Chain-of-Action Agents](https://awesomecua.com/zh/resources/arxiv-2309-11436/) — 2023-09-20
  Introduces Auto-GUI, a screenshot-based agent using previous actions and future action plans to guide device interaction.
- [AutoDroid: LLM-powered Task Automation in Android](https://awesomecua.com/zh/resources/arxiv-2308-15272/) — 2023-08-29
  Combines language-model reasoning with app analysis, UI representations, and exploration-derived memory for Android task automation.
- [Android in the Wild: A Large-Scale Dataset for Android Device Control](https://awesomecua.com/zh/resources/arxiv-2307-10088/) — 2023-07-19
  Collects Android interaction demonstrations with screens, actions, and instructions across device and platform variations for robustness evaluation.
- [Prompting Is All You Need: Automated Android Bug Replay with Large Language Models](https://awesomecua.com/zh/resources/arxiv-2306-01987/) — 2023-06-03
  Introduces AdbGPT, a prompting-based approach that uses LLMs to replay app bugs from written reports, applying few-shot examples and reasoning without model training.
- [Task Automation Intelligent Agents: A Review](https://awesomecua.com/zh/resources/url-eb791c465f47690ade31/) — 2023-05-29
  A literature review examines mobile phone task automation agents, including programming by demonstration and usability heuristics for recurring user tasks.
- [DroidBot-GPT: GPT-powered UI Automation for Android](https://awesomecua.com/zh/resources/arxiv-2304-07061/) — 2023-04-14
  Transforms Android UI states and available actions into language prompts for an LLM to choose and execute task steps.
- [UGIF: UI Grounded Instruction Following](https://awesomecua.com/zh/resources/arxiv-2211-07615/) — 2022-11-14
  Introduces multilingual smartphone instruction-following data and a pipeline that retrieves help instructions and maps them to UI actions.
- [Enabling Conversational Interaction with Mobile UI using Large Language Models](https://awesomecua.com/zh/resources/arxiv-2209-08655/) — 2022-09-18
  Studies few-shot prompting of a single language model for four mobile-UI interaction tasks, aiming to support conversational interface use without a separate trained model for each task.
- [META-GUI: Towards Multi-modal Conversational Agents on Mobile GUI](https://awesomecua.com/zh/resources/arxiv-2205-11029/) — 2022-05-23
  Introduces GUI-based task-oriented dialogue and a dataset pairing mobile-interface operations with conversational responses.
- [A Dataset for Interactive Vision-Language Navigation with Unknown Command Feasibility](https://awesomecua.com/zh/resources/arxiv-2202-02312/) — 2022-02-04
  Introduces MoTIF mobile-app interactions with feasible and infeasible commands, feasibility explanations, and follow-up questions for ambiguous requests.
- [AppBuddy: Learning to Accomplish Tasks in Mobile Apps via Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2106-00133/) — 2021-05-31
  Introduces AppBuddy, an RL training platform and task suite for mobile apps where agents use on-screen element states and tap or type to complete multi-step tasks.
- [GUI testing for mobile applications: objectives, approaches and challenges](https://awesomecua.com/zh/resources/url-1c0a2ce1faf3017fa0c5/) — 2020-11
  A systematic review of mobile app GUI testing examines objectives, methods, evaluation metrics, and research challenges across 75 studies published from 2010 to 2020.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.com/zh/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.
- [Interactive Task and Concept Learning from Natural Language Instructions and GUI Demonstrations](https://awesomecua.com/zh/resources/arxiv-1909-00031/) — 2019-08-30
  Introduces PUMICE, an agent that learns mobile-app procedures and conditional concepts through natural-language conversation and GUI demonstrations, recursively resolving ambiguous instructions with users.
- [Kite: Building Conversational Bots from Mobile Apps](https://awesomecua.com/zh/resources/url-901ca855640457dfe2f1/) — 2018-06
  Derives task graphs from demonstrated Android app interactions and layers a conversational question-answer interface over those graphs. The evaluation examines task-model extraction and developer use of the resulting bot templates.
- [APPINITE: A Multi-Modal Interface for Specifying Data Descriptions in Programming by Demonstration Using Natural Language Instructions](https://awesomecua.com/zh/resources/url-ba2c664c1b3c6f1b172f/) — 2018
  Introduces APPINITE, a conversational interface for specifying the intended targets of demonstrated Android actions. It constructs semantic UI representations and uses an on-screen overlay to preview and refine executable data descriptions.
- [SUGILITE: Creating Multimodal Smartphone Automation by Demonstration](https://awesomecua.com/zh/resources/url-392a602c660ffa91be46/) — 2017
  Introduces SUGILITE, which combines spoken instructions, demonstrated Android actions, and UI hierarchies to generate reusable automation scripts. Its interface includes context checking and repairs for unfamiliar situations and changing app interfaces.

## 评测基准

- [AndroidArena](https://awesomecua.com/zh/resources/github-androidarenaagent-androidarena/) — Date not recorded
  Android environment for evaluating language-model-driven agents.
- [AndroidControl-Curated](https://awesomecua.com/zh/resources/url-dda8a0f1413a6bc7c26f/) — Date not recorded
  Purified AndroidControl test set that scores predicted clicks against target element boxes and repairs ambiguous or wrong task labels, released as step-level JSON files with screenshot archives.
- [AndroidDaily](https://awesomecua.com/zh/resources/url-8697c910c05d48152916/) — Date not recorded
  Android GUI benchmark dataset from Step-GUI containing 3,146 static action evaluation items and 235 end-to-end daily mobile tasks.
- [AndroidLab](https://awesomecua.com/zh/resources/github-thudm-android-lab/) — Date not recorded
  Reproducible Android benchmark of 138 tasks across nine apps on predefined virtual devices, run via AVD on Mac or Docker on Linux, released with the Android Instruct training set.
- [AndroidWorld](https://awesomecua.com/zh/resources/github-google-research-android-world/) — Date not recorded
  Android environment with programmatic task evaluation for mobile agents.
- [AppControlBench](https://awesomecua.com/zh/resources/github-software-mansion-app-control-bench/) — Date not recorded
  AppControlBench evaluates agents on iOS app tasks in a simulator, grading final screenshots and publishing task definitions and run records.
- [ColorBench](https://awesomecua.com/zh/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [FedMABench](https://awesomecua.com/zh/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.
- [GBOX MCP + Claude Code](https://awesomecua.com/zh/resources/github-babelcloud-android-world-benchmark/) — Date not recorded
  An AndroidWorld benchmark setup that connects a Claude agent to an Android emulator through GBOX MCP and includes a task-completion tool for evaluation.
- [GUITestBench](https://awesomecua.com/zh/resources/github-adam-bjtu-guitestbench/) — Date not recorded
  GUITestBench evaluates Android agents on multistep app defect discovery, using navigation and triggering checks alongside a judge model.
- [LearnGUI](https://awesomecua.com/zh/resources/url-a7beaa489fc4ffeb555f/) — Date not recorded
  Mobile GUI benchmark for learning from demonstrations: 2,252 offline tasks and 101 online tasks with human step-by-step trajectories, each query paired with one to three similar support demonstrations.
- [MobBench task definitions](https://awesomecua.com/zh/resources/url-b53e03a6e4ca4226d126/) — Date not recorded
  A public set of real-device mobile task definitions used to evaluate MobA, with Chinese and English task material packaged in a versioned JSON release.
- [Mobile-Bench](https://awesomecua.com/zh/resources/github-xiaomi-mobilebench/) — Date not recorded
  Mobile-Bench evaluates LLM-based mobile agents on multi-step Android tasks combining UI actions and API extensions with checkpoint metrics.
- [Mobile-Bench-v2 released data](https://awesomecua.com/zh/resources/url-1d5b85321b98765141fc/) — Date not recorded
  Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.
- [MobileAgentBench](https://awesomecua.com/zh/resources/github-mobileagentbench-mobile-agent-bench/) — Date not recorded
  Automated benchmark for mobile LLM agents whose default tasks use ten Simple Mobile Tools Android apps, installed as a Python library that detects task completion.
- [MobileBench-OL](https://awesomecua.com/zh/resources/github-xiaomi-research-mobilebench-ol/) — Date not recorded
  MobileBench-OL provides an online evaluation harness for testing mobile GUI agents on real Android devices with dynamic task verification.
- [MobileGUI-VBench](https://awesomecua.com/zh/resources/url-d7a4f34a6a5202af5f64/) — Date not recorded
  Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.
- [MobileGym](https://awesomecua.com/zh/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [MobileGym++ / MobileGym++ Bench](https://awesomecua.com/zh/resources/github-openmobile2-mobilegym-plusplus/) — Date not recorded
  Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.
- [MobileRisk](https://awesomecua.com/zh/resources/url-ca7bfba3981fc7e5b3bf/) — Date not recorded
  Annotated Android agent trajectories, split into safe and unsafe sets, for the OS-Sentinel benchmark that measures how well detectors flag unsafe mobile GUI agent actions.
- [MobileWorld (Tongyi-MAI)](https://awesomecua.com/zh/resources/github-tongyi-mai-mobileworld/) — Date not recorded
  A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.
- [MobileWorldBench](https://awesomecua.com/zh/resources/github-jacklishufan-mobileworld/) — Date not recorded
  Benchmark of semantic world modeling for mobile agents, with question-answering tasks and GPT-judged generation tasks, plus training data built on AitW and AndroidControl screens.
- [MWMBench](https://awesomecua.com/zh/resources/url-a3ea3a844de7dd8a6792/) — Date not recorded
  MWMBench evaluates mobile GUI world models by asking them to predict the next screen from a screenshot and coordinate action.
- [PersonalAlign](https://awesomecua.com/zh/resources/github-ilearn-lab-acl26-personalalign/) — Date not recorded
  PersonalAlign releases AndroidIntent evaluations of personalized mobile GUI agents and HIM-Agent memory for using long-term interaction records.
- [PhoneHarness](https://awesomecua.com/zh/resources/github-phoneharness-phoneharness/) — Date not recorded
  PhoneHarness evaluates Android phone agents that combine GUI actions with device commands and host tools. It provides a runtime, a benchmark runner subset and trace-based checks of task outcomes.
- [RLG-ALE](https://awesomecua.com/zh/resources/url-0596dd7e97fd30abaadc/) — Date not recorded
  RLG-ALE evaluates mobile GUI agents on inspectable Android tasks. Its page shows sample episodes with prompts, screenshots, evaluation records, and resettable environments.
- [SMAN-Bench](https://awesomecua.com/zh/resources/github-gezelligheid0314-sman-bench/) — Date not recorded
  Evaluation code for SMAN-Bench (Mobile-Bench-v2): AppAgent and Mobile-Agent-v2 runners replay recorded Android pages for single-path, multi-path, noisy and ambiguous tasks, scored by step and task success.
- [SPA-Bench](https://awesomecua.com/zh/resources/github-ai-agents-2030-spa-bench/) — Date not recorded
  340 single-app and cross-app tasks over 66 Chinese and English Android apps, with plug-in support for 11 smartphone agents and automatic coarse-to-fine success detection.
- [UI-NEXUS](https://awesomecua.com/zh/resources/github-starwalkin-ui-nexus/) — Date not recorded
  Compositional mobile-agent benchmark: 100 task templates chaining actions across local utility apps on an AndroidWorld-based emulator and online Chinese and English service apps, with emulator state-setup tooling.
- [VG-GUI-Bench](https://awesomecua.com/zh/resources/url-3e3ca34dbdaf3190465c/) — Date not recorded
  A benchmark for predicting mobile GUI actions from tutorial videos, prior actions, and the current screen. It releases step annotations, videos, and reference frames.

## 数据集

- [Agent Humanization Benchmark (AHB) recordings](https://awesomecua.com/zh/resources/url-3e1a864c46c8ed5735d4/) — Date not recorded
  Touch-gesture and motion-sensor recordings of people and mobile GUI agents doing the same Chinese-language Android app tasks, with task lists and metadata for training detectors that tell agents from humans.
- [AMEX dataset release](https://awesomecua.com/zh/resources/url-1b2091d717c977d4f8b9/) — Date not recorded
  Official Hub release of AMEX: Android app screenshots annotated for interactive-element grounding, screen and element functionality, and instructions with stepwise GUI-action chains.
- [AMEX-8K](https://awesomecua.com/zh/resources/url-2b4b3e54d9c52f868b4e/) — Date not recorded
  An 8K-sample subset of AMEX with mobile app screenshots for GUI grounding pretraining across varied apps, device forms, and screen densities.
- [Android in the Wild](https://awesomecua.com/zh/resources/component-google-research-android-in-the-wild/) — Date not recorded
  Human demonstrations of Android tasks with screenshots and touch actions.
- [android_control_test](https://awesomecua.com/zh/resources/url-1f248862e4b691b85343/) — Date not recorded
  android_control_test packages a processed Android Control test set for evaluating the InfiGUI-R1 mobile GUI agent.
- [AndroidControl](https://awesomecua.com/zh/resources/component-google-research-android-control/) — Date not recorded
  Android demonstrations with high-level goals, step instructions, screenshots, and accessibility trees.
- [AndroidHowTo](https://awesomecua.com/zh/resources/github-debymf-generating-android-howto/) — Date not recorded
  AndroidHowTo provides scripts and annotations for building instructional mobile UI action datasets linking how-to steps to Android screens.
- [AutoDroid V2 training data](https://awesomecua.com/zh/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [DroidCall data](https://awesomecua.com/zh/resources/url-ae8f5208eea9e7f1f606/) — Date not recorded
  Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.
- [FedMABench data partitions](https://awesomecua.com/zh/resources/url-86b3c2ee65911daf84a8/) — Date not recorded
  Six families of JSONL partitions of AndroidControl and AitW mobile-agent episodes for FedMABench federated training under app, category and step/episode heterogeneity; screenshots must be rebuilt from the sources.
- [GUI-Libra-81K-SFT](https://awesomecua.com/zh/resources/url-f6e1a7527f9346ed1c1d/) — Date not recorded
  SFT release of GUI-Libra-81K: per-step reasoning traces and coordinate-grounded actions over web and Android screenshots, in JSON annotation files with full, no-reasoning and 1,000-sample variants.
- [GUI-Odyssey — original OpenGVLab release](https://awesomecua.com/zh/resources/url-5f7e55313246edf727bf/) — Date not recorded
  Original Hub upload of GUI Odyssey: 7,735 cross-app Android navigation episodes from six emulated devices with per-step screenshots, actions and four split files, which the card says is superseded.
- [GUI-Xplore](https://awesomecua.com/zh/resources/url-f56dbd8bfac8b0545e07/) — Date not recorded
  Per-app Android exploration videos with screenshot and action sequences, view hierarchies and question-answer pairs for five tasks, from app overview and page analysis to action recall and sequence verification.
- [GUIOdyssey — current data release](https://awesomecua.com/zh/resources/url-511903ebfac45e6751b2/) — Date not recorded
  Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.
- [HiconAgent-AMEX](https://awesomecua.com/zh/resources/url-3df97229d34c44c2014a/) — Date not recorded
  Training and validation data for HiconAgent built from the AMEX Android dataset: each sample holds a goal, earlier screenshots and actions, and the next action as the answer, for history-aware RL of GUI agents.
- [jacklishufan/MobileWorld](https://awesomecua.com/zh/resources/url-3d12df2fd27076504434/) — Date not recorded
  Annotation archive for the MobileWorldBench training data: one tar with parquet subsets built on AiTW and AndroidControl screens plus a cleaned QA split, for fine-tuning mobile semantic world models.
- [Magma-AITW-SoM](https://awesomecua.com/zh/resources/url-ffe40334f1050b94f8b2/) — Date not recorded
  Magma-AITW-SoM supplies AITW data used to fine-tune the Magma multimodal agent model for downstream tasks.
- [META-GUI dataset](https://awesomecua.com/zh/resources/url-05a9a7c592089d1ddd46/) — Date not recorded
  Hub release of META-GUI, task-oriented dialogues in which an agent operates mobile apps: each turn pairs the conversation with screenshots, view-hierarchy XML, recorded GUI actions and a reply.
- [Mobile-R1 trajectory sample](https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/) — Date not recorded
  Open sample of Mobile-R1's annotated trajectories on Chinese Android apps: 1,007 tasks whose steps pair a screenshot with a thought, a subtask and a mobile_use action such as click, swipe, type or open.
- [mobilevlm_test](https://awesomecua.com/zh/resources/url-5182ab4e9bd7843f240b/) — Date not recorded
  Test data for MobileVLM's Mobile3M benchmark, shared as a two-part 7z archive. Mobile3M is a Chinese mobile UI dataset of 3 million pages linked by real transition actions.
- [MoGUI](https://awesomecua.com/zh/resources/url-be89a250747f507a27ef/) — Date not recorded
  Android app GUI crawl with per-app navigation graphs that link screen IDs through the UI action taken, plus 200 archive shards of the captured screens.
- [MONDAY](https://awesomecua.com/zh/resources/github-runamu-monday/) — Date not recorded
  Cross-platform mobile GUI trajectory dataset derived from instructional videos, with released data-processing helpers and example evaluation code for Android and iOS data.
- [MONDAY annotations](https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MoTIF](https://awesomecua.com/zh/resources/github-aburns4-motif/) — Date not recorded
  Mobile task demonstrations and natural-language instructions.
- [OpenMobile-Data](https://awesomecua.com/zh/resources/url-3849b18aa87edefc6afd/) — Date not recorded
  OpenMobile's synthesized Android agent data: four LLaMA-Factory SFT split files built from AndroidWorld rollouts plus an archive of the original rollout trajectories and screenshots.
- [OpenMobile-Data-v2](https://awesomecua.com/zh/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.
- [OpenPhone_dataset](https://awesomecua.com/zh/resources/url-e7ea65893ab264517d83/) — Date not recorded
  Training data for the OpenPhone mobile agent: the AndroidLab training archive plus a Hugging Face vision-language set with LLM-generated reasoning and reflection chains, formatted for GRPO training.
- [OS-Genesis mobile training data](https://awesomecua.com/zh/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [Regimes/androidcontrol-cl](https://awesomecua.com/zh/resources/url-461e9b8305356347077e/) — Date not recorded
  AndroidControl-CL provides Android GUI screenshot trajectories and structured training and evaluation data for continual GUI learning.
- [RICO-WidgetCaptioning](https://awesomecua.com/zh/resources/url-013bb9256ca6ad5188be/) — Date not recorded
  A mobile UI dataset pairing RICO screenshots and widget regions with human-written captions. It includes view hierarchies and train, validation, and test splits.
- [UI-Genie reward data](https://awesomecua.com/zh/resources/url-84e5aeeffaf561baa966/) — Date not recorded
  Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.
- [UI-Genie trajectory data](https://awesomecua.com/zh/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [UI-S1 released training examples](https://awesomecua.com/zh/resources/url-16184830c0f4bdb146fa/) — Date not recorded
  A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.
- [UI-Simulator_android_data](https://awesomecua.com/zh/resources/url-d32dfe60eff4b87c1d05/) — Date not recorded
  Synthetic Android agent training data from UI-Simulator: prompts pairing a goal and a simulated UI element list with next-action responses, in RAG-free, RAG-based and two UI-Simulator-Grow splits.
- [Uni-GUI-Mobile](https://awesomecua.com/zh/resources/url-93278fa5b9e6bd0cbcef/) — Date not recorded
  Self-collected phone trajectories from the UI-MOPD training data: 871 tasks across 10 app categories, each with step screenshots, reasoning traces, normalized tap, swipe and type actions, and adb commands.
- [Uni-GUI-OpenMobile](https://awesomecua.com/zh/resources/url-66a0adb854eff694965d/) — Date not recorded
  Android trajectories on 19 open-source apps from the UI-MOPD training data, collected via AndroidWorld: 2,640 tasks with step screenshots, reasoning traces and normalized click, swipe, type and answer actions.
- [VLM-Reasoning-Traces](https://awesomecua.com/zh/resources/github-llamatouch-vlm-reasoning-traces/) — Date not recorded
  VLM-Reasoning-Traces releases model outputs comparing base and thinking-enabled vision-language models on AndroidControl, ScreenSpot, and AndroidWorld.
- [WikiHow Task Set](https://awesomecua.com/zh/resources/url-25af759a783f1514fe58/) — Date not recorded
  A Mobile-Env task set for evaluating navigation in the WikiHow app, with supplementary tasks across Android apps. It provides task definitions and rewritten instructions.

## 模型

- [ACT-SOP](https://awesomecua.com/zh/resources/url-ab4587d17c4f541bb94c/) — Date not recorded
  LoRA adapter for Llama-2-7b from MobileAgent, a mobile device control agent that adds Standard Operating Procedure (SOP) context and predicts actions on AitW screens.
- [AgentCPM-GUI](https://awesomecua.com/zh/resources/github-openbmb-agentcpm-gui/) — Date not recorded
  8B on-device smartphone agent built on MiniCPM-V that operates Chinese and English apps from screenshots, trained with reinforcement fine-tuning and a compact JSON action space.
- [AgentCPM-GUI 8B checkpoint](https://awesomecua.com/zh/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [aitw-general-digiq-agent](https://awesomecua.com/zh/resources/url-0e5617031e625a75cfc7/) — Date not recorded
  Digi-Q agent checkpoint for the AitW General task set: an AutoUI device-control policy trained offline with a learned VLM Q-value function that re-ranks proposed actions.
- [aitw-webshop-digiq-agent](https://awesomecua.com/zh/resources/url-5281c8befef1059590f3/) — Date not recorded
  Digi-Q device-control agent checkpoint trained on the AitW Web Shopping task set, an AutoUI-based actor learned offline with a VLM Q-value function; the repository reports a 70.8 test-set score.
- [AndroidGen-GLM-4-9B](https://awesomecua.com/zh/resources/url-66d842fe6552d3ca62a1/) — Date not recorded
  AndroidGen-GLM-4-9B is a released model for agents that carry out tasks across Android apps without manually labeled interaction data.
- [AndroidGen-Llama-3-70B](https://awesomecua.com/zh/resources/url-75e93dff049c046c586e/) — Date not recorded
  AndroidGen-Llama-3-70B is a released model for agents that carry out tasks across Android applications such as messaging, email and settings without manually labeled interaction data.
- [Auto-UI](https://awesomecua.com/zh/resources/url-952cb4c3f308418aa85b/) — Date not recorded
  Trained Auto-UI checkpoints and BLIP-processed AITW features for a chain-of-action agent that predicts device actions from screenshots, previous actions and planned future actions.
- [AutoGLM Phone 9B](https://awesomecua.com/zh/resources/url-c918d5c828a3c6cfbc5d/) — Date not recorded
  AutoGLM phone-agent checkpoint for Open-AutoGLM, fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters and tagged for Chinese.
- [AutoGLM Phone 9B Multilingual](https://awesomecua.com/zh/resources/url-d236e7ec7a2b0028950a/) — Date not recorded
  Multilingual variant of the AutoGLM phone-agent checkpoint for Open-AutoGLM, likewise fine-tuned from GLM-4.1V-9B-Base with about 10.3B BF16 parameters.
- [BlueLM-GUI](https://awesomecua.com/zh/resources/github-vivo-ai-lab-bluelm-gui/) — Date not recorded
  Mobile GUI agent research release with technical report, benchmark data, and evaluation tooling from vivo AI Lab.
- [ClawGUI-2B](https://awesomecua.com/zh/resources/url-1a54e63277eaffdaef57/) — Date not recorded
  ClawGUI-2B, a 2B mobile GUI agent model trained end to end with the ClawGUI-RL pipeline and GiGPO; the authors report a 17.1 MobileWorld success rate against an 11.1 baseline.
- [ColorGUI-32B](https://awesomecua.com/zh/resources/url-38672ac9af2e25fbfb58/) — Date not recorded
  ColorGUI-32B is a mobile GUI action model adapted from Qwen3-VL-32B-Instruct. It reads screenshots and instructions to select actions for a mobile agent runtime.
- [GELab Zero](https://awesomecua.com/zh/resources/github-stepfun-ai-gelab-zero/) — Date not recorded
  Open mobile GUI agent stack pairing a 4B model that runs on consumer hardware with local multi-device infrastructure, an MCP server, and AndroidDaily benchmark tasks.
- [GELab Zero 4B Preview](https://awesomecua.com/zh/resources/url-d7ad447ecd712c6d51b8/) — Date not recorded
  Preview GELab-Zero phone-use agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct, with about 4.4B BF16 parameters, tagged for Android in English and Chinese, under Apache-2.0.
- [GUI-Libra 3B](https://awesomecua.com/zh/resources/url-ae8e3fa5a67a608804f8/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct (about 4.07B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 4B](https://awesomecua.com/zh/resources/url-9082bb5effe5d1a1cada/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen3-VL-4B-Instruct (about 4.83B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 7B](https://awesomecua.com/zh/resources/url-f52794224f9541fd9eb3/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct (about 8.29B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 8B](https://awesomecua.com/zh/resources/url-6694391b0cf50389d2e9/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen3-VL-8B-Instruct (about 8.77B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.
- [gWorld (GuiWorld)](https://awesomecua.com/zh/resources/github-trillion-labs-gworld/) — Date not recorded
  gWorld is an open-weight 8B/32B mobile GUI world model that predicts next-step screen states via renderable web code generation.
- [gWorld-32B](https://awesomecua.com/zh/resources/url-e44096836ef47bc66d9c/) — Date not recorded
  A released mobile GUI world model that takes a screenshot and an action, then predicts the next interface as renderable HTML. The card identifies Qwen3-VL-32B as its base.
- [gWorld-8B](https://awesomecua.com/zh/resources/url-78802d1a2fce25f20f85/) — Date not recorded
  gWorld-8B is a released mobile GUI world model that predicts the screen after an action by generating renderable HTML from the current screenshot and action.
- [Holo-3.1-35B-A3B-FP8](https://awesomecua.com/zh/resources/url-566bd1469811983951f3/) — Date not recorded
  An FP8 checkpoint in the Holo3.1 vision-language model family for computer-use agents. The card describes web, desktop and mobile tasks and links to deployment guidance.
- [Holo-3.1-35B-A3B-GGUF](https://awesomecua.com/zh/resources/url-ee3a18b51eb44d94a94b/) — Date not recorded
  A quantized Holo3.1 vision-language checkpoint for computer-use agents across web, desktop, and mobile interfaces, with UI grounding and function calling.
- [Holo-3.1-35B-A3B-NVFP4](https://awesomecua.com/zh/resources/url-aeffabf23c16f8cf2139/) — Date not recorded
  Holo-3.1-35B-A3B-NVFP4 is a quantized computer-use vision-language checkpoint for web, desktop and mobile tasks, with function-calling support.
- [Holo3.1 0.8B](https://awesomecua.com/zh/resources/url-df84f6a103123387b0dd/) — Date not recorded
  Smallest checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.
- [Holo3.1 35B-A3B](https://awesomecua.com/zh/resources/url-0c9ce9f220b2fdfd70b0/) — Date not recorded
  35B-A3B checkpoint of H Company's Holo3.1 family, a sparse mixture-of-experts vision-language model for web, desktop and mobile computer use with native function calling.
- [Holo3.1 4B](https://awesomecua.com/zh/resources/url-90b24afa7bb8b2181205/) — Date not recorded
  4B checkpoint of H Company's Holo3.1 family, a vision-language model for web, desktop and mobile computer-use agents with native function calling, built on a dense Qwen3.5 architecture.
- [Holo3.1 9B](https://awesomecua.com/zh/resources/url-4e9e46b2c7a0a21e130d/) — Date not recorded
  9B checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.
- [Holo4-27B-NVFP4](https://awesomecua.com/zh/resources/url-b1457a20d437732b60f7/) — Date not recorded
  A quantized Holo4 vision-language checkpoint for computer use across web, desktop, and mobile interfaces, with a harness that executes requested GUI and tool actions.
- [inclusionAI/UI-Venus-Navi-7B](https://awesomecua.com/zh/resources/url-6d36e088ada02184c6bc/) — Date not recorded
  A released UI agent checkpoint based on Qwen2.5-VL that takes screenshots and prior actions to predict GUI navigation actions and element locations.
- [Laya-Android](https://awesomecua.com/zh/resources/github-byun11-laya-android/) — Date not recorded
  Laya-Android is a compact 322M on-device decision model for Android GUI action selection.
- [Magma](https://awesomecua.com/zh/resources/github-microsoft-magma/) — Date not recorded
  Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.
- [MAI-UI 2B](https://awesomecua.com/zh/resources/url-4b6d61ff2c1d6c8e1a23/) — Date not recorded
  A 2B MAI-UI checkpoint in the Qwen3-VL architecture, from a GUI agent family whose training data adds agent-user interaction and MCP tool calls to mobile navigation and grounding.
- [MAI-UI 8B](https://awesomecua.com/zh/resources/url-00b1a3abf9bcb424b264/) — Date not recorded
  A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.
- [Milo-Pointer](https://awesomecua.com/zh/resources/github-chayworks-milo-pointer/) — Date not recorded
  Milo-Pointer uses a 149M on-device text encoder as a fast first-tier router and action selector for mobile phone agents.
- [MobileRL 9B checkpoint](https://awesomecua.com/zh/resources/url-d5667c854845c77b9f5b/) — Date not recorded
  A GLM-4.1V-based mobile action checkpoint released by the MobileRL project for Android interaction.
- [MobileVLM](https://awesomecua.com/zh/resources/github-xiaomi-mobilevlm/) — Date not recorded
  MobileVLM is a vision-language model pre-trained on the Mobile3M UI transition graph for intra-screen and inter-screen mobile UI understanding.
- [OmniJev](https://awesomecua.com/zh/resources/github-tinnel123666888-omnijev/) — Date not recorded
  OmniJev is a multimodal decision model that scores typed choices from screens and other visual input. Released weights and inference code cover web and phone tasks alongside other domains.
- [OpenMobile-2 27B](https://awesomecua.com/zh/resources/url-1611de0e6d606165d12d/) — Date not recorded
  Mobile-agent checkpoint based on Qwen3.6-27B for GUI and app-native tool interaction.
- [OpenMobile-2 9B](https://awesomecua.com/zh/resources/url-d35224f787e7ec21ce36/) — Date not recorded
  Mobile-agent checkpoint trained on OpenMobile-Data-v2 for screenshot actions and app-native tool calls.
- [OpenMobile-8B](https://awesomecua.com/zh/resources/url-6616228d4f267363458e/) — Date not recorded
  Mobile agent checkpoint with a Qwen3-VL architecture, released with OpenMobile and fine-tuned on its synthesized Android trajectories; the code README serves it with vLLM for AndroidWorld evaluation.
- [OpenPhone_model](https://awesomecua.com/zh/resources/url-836de49b2bbd47d3a6a5/) — Date not recorded
  OpenPhone-3B weights, a 3B on-device model for Android GUI tasks trained with supervised fine-tuning on synthetic reasoning data and then GRPO-style reinforcement learning.
- [OS-Genesis 4B AC](https://awesomecua.com/zh/resources/url-b1837823421bd08cb826/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidControl trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 4B AW](https://awesomecua.com/zh/resources/url-a2362e23fdcbc73763e6/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidWorld trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 7B AC](https://awesomecua.com/zh/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [OS-Genesis 7B AW](https://awesomecua.com/zh/resources/url-7afa17db925828d9a035/) — Date not recorded
  The AndroidWorld-oriented Qwen2-VL checkpoint trained on mobile trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and screen.
- [OS-Genesis 8B AC](https://awesomecua.com/zh/resources/url-2be7f81cdca0eb8566c6/) — Date not recorded
  AndroidControl-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [OS-Genesis 8B AW](https://awesomecua.com/zh/resources/url-2eaf614de14193997f33/) — Date not recorded
  AndroidWorld-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [Qwen/Qwen3-VL-8B-Instruct](https://awesomecua.com/zh/resources/url-90ae002dbf099d42fabb/) — Date not recorded
  Qwen3-VL-8B-Instruct is a vision-language checkpoint whose card describes PC and mobile GUI operation, including element recognition and tool calls.
- [Qwen2-VL-2B-Instruct](https://awesomecua.com/zh/resources/url-db97f9727111dc76662c/) — Date not recorded
  An instruction-tuned vision-language model for image and video understanding. Its card describes potential mobile-device operation from visual input and text instructions.
- [Qwen2-VL-72B-Instruct](https://awesomecua.com/zh/resources/url-70a567bbf58ab99d21ee/) — Date not recorded
  Qwen2-VL-72B-Instruct is a general vision-language model whose card describes operation of mobile devices from visual input and instructions and reports Android agent evaluations.
- [Qwen2-VL-72B-Instruct-AWQ](https://awesomecua.com/zh/resources/url-1f488d7ef1c703f97a8a/) — Date not recorded
  Qwen2-VL-72B-Instruct-AWQ releases quantized weights for a visual instruction model. Its card describes integration with mobile devices for operation guided by images and text.
- [Qwen2-VL-72B-Instruct-GPTQ-Int4](https://awesomecua.com/zh/resources/url-272f5b74277ca7a8f1f5/) — Date not recorded
  A quantized Qwen2-VL vision-language checkpoint for image and video understanding. Its card also describes visual, instruction-guided mobile operation.
- [Qwen2-VL-72B-Instruct-GPTQ-Int8](https://awesomecua.com/zh/resources/url-1419f2835e78de2bc9a4/) — Date not recorded
  A quantized 72B Qwen2-VL checkpoint for visual instruction following. Its model card describes using visual input and text instructions to operate mobile devices.
- [Qwen2-VL-7B-Instruct](https://awesomecua.com/zh/resources/url-b9c90048411606b00db0/) — Date not recorded
  An instruction-tuned 7B multimodal model for image and video understanding; its card describes visually guided operation of mobile devices.
- [Qwen2.5-VL](https://awesomecua.com/zh/resources/url-4bece2c969edcdfc2e8d/) — Date not recorded
  A general vision-language model family whose release documents visual-agent behavior for computer and phone use, alongside image and video understanding.
- [Qwen2.5-VL-32B-Instruct](https://awesomecua.com/zh/resources/url-beafd78bf2ea84211e6d/) — Date not recorded
  Qwen2.5-VL-32B-Instruct is a released vision-language checkpoint. Its card describes visual-agent computer and phone use, visual localization, and interface benchmark results.
- [Qwen2.5-VL-3B-Instruct](https://awesomecua.com/zh/resources/url-52ec96785d9c0ae8e039/) — Date not recorded
  An instruction-tuned vision-language checkpoint that reads visual layouts, localizes points or boxes, and supports computer and phone use. Its card reports screen and mobile-agent evaluations.
- [Qwen2.5-VL-3B-Instruct-AWQ](https://awesomecua.com/zh/resources/url-0ab0de943c5396cdf366/) — Date not recorded
  Qwen2.5-VL-3B-Instruct-AWQ is an AWQ checkpoint of a vision-language model whose card describes tool-directed computer and phone use and visual localization.
- [Qwen2.5-VL-72B-Instruct-AWQ](https://awesomecua.com/zh/resources/url-fe24586d646989d5c916/) — Date not recorded
  This instruction-tuned Qwen2.5-VL checkpoint supports visual localization and tool-directed computer and phone use. The repository provides weights and inference examples.
- [Qwen2.5-VL-7B-Instruct](https://awesomecua.com/zh/resources/url-557edb1d63e8fcfdee12/) — Date not recorded
  Qwen2.5-VL-7B-Instruct releases vision-language weights whose card describes computer and phone use and reports results on screen grounding and mobile-agent benchmarks.
- [Qwen2.5-VL-7B-Instruct-AWQ](https://awesomecua.com/zh/resources/url-06c351d14bee24bc3f01/) — Date not recorded
  An AWQ release of the instruction-tuned 7B Qwen2.5-VL model. Its card describes interface-image understanding, visual localization, and computer and phone use.
- [Qwen3-VL-235B-A22B-Instruct](https://awesomecua.com/zh/resources/url-8f5ec99c2aad6c73fed7/) — Date not recorded
  A Qwen3-VL vision-language checkpoint whose card describes visual-agent operation of PC and mobile GUIs, including element recognition and tool use.
- [Qwen3-VL-235B-A22B-Thinking](https://awesomecua.com/zh/resources/url-b8702b4ca9ceac2ca3ee/) — Date not recorded
  A released Qwen3-VL vision-language checkpoint whose card describes PC and mobile GUI interaction, including recognizing interface elements, invoking tools, and completing tasks.
- [Qwen3-VL-2B-Instruct](https://awesomecua.com/zh/resources/url-c4d0846c44df2c0d4099/) — Date not recorded
  A vision-language model whose card describes visual-agent operation of PC and mobile interfaces, including element recognition and tool use. This repository releases its weights.
- [Qwen3-VL-30B-A3B-Instruct](https://awesomecua.com/zh/resources/url-7fafb31cac59ad3a7e03/) — Date not recorded
  A Qwen3-VL vision-language checkpoint whose model card describes PC and mobile GUI operation, including element recognition, tool use and task completion.
- [Qwen3-VL-30B-A3B-Thinking](https://awesomecua.com/zh/resources/url-1b036956436123d87ff1/) — Date not recorded
  Qwen3-VL-30B-A3B-Thinking is a vision-language checkpoint whose card describes recognizing interface elements and using tools to operate PC and mobile GUIs.
- [Qwen3-VL-32B-Thinking](https://awesomecua.com/zh/resources/url-ecf889aadea335aa5e25/) — Date not recorded
  Qwen3-VL-32B-Thinking is a vision-language checkpoint whose card describes recognizing interface elements and using tools to complete PC and mobile GUI tasks.
- [Qwen3-VL-4B-Instruct](https://awesomecua.com/zh/resources/url-2c30792aed2821284db6/) — Date not recorded
  Qwen3-VL-4B-Instruct is a vision-language checkpoint whose card describes recognizing interface elements and using tools to operate PC and mobile GUIs.
- [Qwen3-VL-4B-Thinking](https://awesomecua.com/zh/resources/url-b5690e43822ef84015c5/) — Date not recorded
  A vision-language checkpoint whose card describes visual-agent operation of PC and mobile interfaces, including element recognition and tool use.
- [Qwen3-VL-8B-Instruct-MobileWorld-SFT](https://awesomecua.com/zh/resources/url-e58270c90ea4fa83cfb4/) — Date not recorded
  Qwen3-VL-8B-Instruct fine-tuned on the MobileWorld dataset as a semantic world model that describes in natural language how a mobile GUI screen changes after an action, for planning by mobile agents.
- [Qwen3-VL-8B-Thinking](https://awesomecua.com/zh/resources/url-d1305a893a47ac03d0de/) — Date not recorded
  A general vision-language weight release whose documented visual-agent capability includes recognizing PC and mobile GUI elements and invoking tools to complete tasks.
- [SeeClick-aitw](https://awesomecua.com/zh/resources/url-a4b101913db4b3673a2b/) — Date not recorded
  SeeClick visual GUI agent checkpoint fine-tuned on Android in the Wild (AITW) episodes and scored on the AITW test set by action matching with the SeeClick agent-task scripts.
- [SpiritSight-Agent-26B](https://awesomecua.com/zh/resources/url-55be07e942393d43132f/) — Date not recorded
  A 26B vision-based checkpoint for GUI navigation across interface platforms. The release includes model weights and an inference script built around an InternVL2 base model.
- [UI-Genie Agent 3B](https://awesomecua.com/zh/resources/url-43d811a5957d8effb7ed/) — Date not recorded
  A Qwen2.5-VL-3B mobile GUI action model fine-tuned on AndroidControl, AMEX, AndroidLab and UI-Genie synthetic trajectories to predict app launches, taps, swipes, typing and system-button presses.
- [UI-Genie Agent 7B](https://awesomecua.com/zh/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.
- [UI-Ins-7B](https://awesomecua.com/zh/resources/url-62cf0bee7a14cfbc84a0/) — Date not recorded
  UI-Ins-7B is a GUI-grounding checkpoint trained on varied instruction formulations and reinforcement learning to locate interface elements for agent actions.
- [UI-S1 7B](https://awesomecua.com/zh/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.
- [UI-Venus-Navi-72B](https://awesomecua.com/zh/resources/url-80ec6c9a43360adbbc6b/) — Date not recorded
  A Qwen2.5-VL-based UI checkpoint for predicting navigation actions and locating interface elements from screenshots, trained with reinforcement fine-tuning.
- [UI-Voyager](https://awesomecua.com/zh/resources/url-e2ddf502803f46085aca/) — Date not recorded
  A released mobile GUI agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct to operate device interfaces, with AndroidWorld evaluation instructions.
- [UIShift-7B-2K](https://awesomecua.com/zh/resources/url-0dcc389cc2b1b15fb081/) — Date not recorded
  UIShift-7B, the initial GUI-Shift model: a Qwen2.5-VL model trained with GRPO on 2K AndroidControl samples to infer which action led from one screenshot to the next.
- [V-Droid-8B-0323](https://awesomecua.com/zh/resources/url-82adab61eb515398da48/) — Date not recorded
  A verifier model for the V-Droid Android GUI agent scores candidate actions from a device description and task, helping select the next mobile operation.

## 工程与产业

- [A2R2 (Android Agent Reliability Runtime)](https://awesomecua.com/zh/resources/github-rty90-android-agent-reliability-runtime/) — Date not recorded
  A2R2 is a black-box safety and reliability runtime for Android GUI agents that intercepts unsafe actions and detects execution loops.
- [AbaoPal (阿宝Pal)](https://awesomecua.com/zh/resources/github-banye-technology-abaopal/) — Date not recorded
  Open-source multi-agent Android phone automation assistant that understands screens, plans cross-app tasks, and executes reusable skills.
- [Actell](https://awesomecua.com/zh/resources/github-ja1chen-actell/) — Date not recorded
  An iPhone agent prototype observes screenshots or accessibility content and issues taps and drags through CoreDevice, using a VPN loopback or optional hardware relay.
- [adb](https://awesomecua.com/zh/resources/github-vcaesar-adb/) — Date not recorded
  A Go device-control API provides taps, swipes, typing and screenshots on Android through adb and on iOS through WebDriverAgent.
- [ADB MCP Server Pro](https://awesomecua.com/zh/resources/github-tiendung2k03-adb-mcp-server-pro/) — Date not recorded
  Model Context Protocol server for Android device control via ADB featuring self-learning UI element maps.
- [adb-automation-mcp](https://awesomecua.com/zh/resources/github-allaudin-adb-automation-mcp/) — Date not recorded
  Model Context Protocol server exposing Android Debug Bridge (ADB) device inspection and input actions as typed tools.
- [AdbGPT](https://awesomecua.com/zh/resources/github-sidongfeng-adbgpt/) — Date not recorded
  An Android bug replay agent that extracts action details from written bug reports and uses the current app screen to guide reproduction steps.
- [ADBKeyBoard](https://awesomecua.com/zh/resources/github-senzhk-adbkeyboard/) — Date not recorded
  An Android virtual keyboard that accepts ADB broadcasts to enter text, Unicode characters and key events for device automation.
- [Agent Phone Use](https://awesomecua.com/zh/resources/github-lucioliu-agent-phone-use/) — Date not recorded
  Enables AI agents on Windows to control Android phones over local Wi-Fi using official `scrcpy` streaming and ADB.
- [agent-device](https://awesomecua.com/zh/resources/github-callstack-agent-device/) — Date not recorded
  agent-device gives agents CLI, MCP, and Node.js interfaces for inspecting and controlling mobile, web, and desktop apps through accessibility snapshots and UI actions.
- [agent-qa](https://awesomecua.com/zh/resources/url-73e9e26d40de2a60ae05/) — Date not recorded
  A QA agent that runs plain-language tests against web, Android, and iOS apps. It navigates user flows, verifies outcomes, and stores validated run evidence for reuse.
- [agent-qa](https://awesomecua.com/zh/resources/url-f7e21b1a3ba5c58a73bc/) — Date not recorded
  QA agent for browser and mobile apps that executes actions through Playwright and Appium, verifies steps, and records runs. Its publisher reports completing all AndroidWorld tasks.
- [AgentEnv](https://awesomecua.com/zh/resources/github-llamatouch-agentenv/) — Date not recorded
  AgentEnv connects agent models to Android devices or emulators, translating actions and returning screenshots and view hierarchies while recording interactions.
- [Agentic Android](https://awesomecua.com/zh/resources/github-xdope7137-agentic-android/) — Date not recorded
  LLM-powered Android agent over ADB that reads the screen, executes tap/swipe/type actions, and verifies outcomes at each step.
- [AgenticX-GUIAgent](https://awesomecua.com/zh/resources/github-demondamon-agenticx-guiagent/) — Date not recorded
  AgenticX-GUIAgent is a multi-agent Android GUI automation system with coordinated manager, executor, reflector, and notetaker roles.
- [AGI-0 Agent](https://awesomecua.com/zh/resources/url-06f6618d8f95f3d041cf/) — Date not recorded
  AGI-0 uses screenshots to navigate Android apps, planning subtasks and checking screen changes after each action. Its publisher reports AndroidWorld results.
- [AiBrowser for Android](https://awesomecua.com/zh/resources/github-doable-team-aibrowser-android/) — Date not recorded
  Turns a spare Android phone into a headed Chromium instance that AI agents can drive remotely.
- [Aico Link Firmware](https://awesomecua.com/zh/resources/github-aidenai-io-aiden-firmware/) — Date not recorded
  Aico Link firmware runs an agent that views a phone or computer through HDMI capture and sends input through USB HID. The repository includes hardware services, agent runtime, and update tooling.
- [Amap-Sim](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-amap/) — Date not recorded
  An offline Android map-app simulation for AI automation tests, with map browsing, place search, routing, and navigation backed by locally prepared data.
- [Andee](https://awesomecua.com/zh/resources/github-kuafuai-andee/) — Date not recorded
  On-device Android agent in one APK that operates any app through an accessibility service, reading an element outline or, when needed, a screenshot with a labelled 8x12 grid, on any OpenAI-compatible model.
- [Android Device Perception Skill](https://awesomecua.com/zh/resources/github-worksonmyvm-android-device-perception-skill/) — Date not recorded
  Portable, read-only Android state-snapshot skill via ADB for AI coding and mobile agents.
- [android-mcp-beta](https://awesomecua.com/zh/resources/github-cursortouch-android-mcp/) — Date not recorded
  An MCP server that uses ADB to give agents Android screen snapshots and device controls, including taps, swipes, typing, and button presses.
- [Android-MCP-go](https://awesomecua.com/zh/resources/github-tintupratap-android-mcp-go/) — Date not recorded
  Self-contained Go Model Context Protocol server for Android automation with managed ADB, automatic USB-to-Wi-Fi handoff, and `scrcpy`.
- [Android-Skill-Agent](https://awesomecua.com/zh/resources/github-xiru0834-eng-android-skill-agent/) — Date not recorded
  Android-Skill-Agent extracts demonstration-guided, parameterized operational skills with accessibility-tree verification for Android apps.
- [android-use](https://awesomecua.com/zh/resources/github-austinintelligence-android-use/) — Date not recorded
  MCP server and CLI giving AI agents fast, bounded access to physical Android devices and emulators.
- [android_mcp](https://awesomecua.com/zh/resources/github-void032-android-mcp/) — Date not recorded
  Model Context Protocol server giving coding agents screenshot, tap, swipe, and UI inspection control over Android devices.
- [AndroidClaw](https://awesomecua.com/zh/resources/github-xiuqianli1996-androidclaw/) — Date not recorded
  Android-native LLM phone agent operating directly on-device via Android AccessibilityService and screen hierarchy parsing.
- [AndroidGen](https://awesomecua.com/zh/resources/github-thudm-androidgen/) — Date not recorded
  AndroidGen operates Android tasks using retrieved examples, plan updates, and action checks. Its repository includes agent code and AndroidWorld evaluation scripts.
- [AndroidMCP](https://awesomecua.com/zh/resources/github-qazmko72-android-mcp-server/) — Date not recorded
  Native on-device Android Model Context Protocol server exposing phone UI and system capabilities directly without a host PC.
- [AndroidViewClient](https://awesomecua.com/zh/resources/github-dtmilano-androidviewclient/) — Date not recorded
  A Python Android UI automation tool that creates reusable tests and exposes view-based, gesture and device controls to AI assistants through an MCP server.
- [AndroidWorld-SeeAct-V](https://awesomecua.com/zh/resources/github-boyugou-android-world-seeact-v/) — Date not recorded
  AndroidWorld-SeeAct-V runs a visual Android agent that plans the next action and grounds coordinate actions in screenshots. The repository includes code for AndroidWorld evaluation.
- [ANZU Superassistant (Jarvis)](https://awesomecua.com/zh/resources/github-daan298261-jarvis/) — Date not recorded
  Local-first Windows desktop agent with HUD, Kokoro voice, browser automation, Office integration, and Android control.
- [App Use](https://awesomecua.com/zh/resources/github-erickjtorres-app-use/) — Date not recorded
  App Use is a Python framework that connects LLM agents to Android and iOS mobile applications via Appium and accessibility-tree inspection.
- [AppAgent](https://awesomecua.com/zh/resources/github-tencentqqgylab-appagent/) — Date not recorded
  Multimodal agent that operates Android apps through taps and swipes without back-end access, building a reusable knowledge base from autonomous exploration or from watching human demonstrations.
- [AppAgent Pro](https://awesomecua.com/zh/resources/github-laokuize-appagent-pro/) — Date not recorded
  Proactive Android agent built on AppAgent that uses GPT-4o to decide whether YouTube or Amazon content would help, operates those apps over ADB, and merges what it finds into its answer.
- [AppAgentX](https://awesomecua.com/zh/resources/github-westlake-agi-lab-appagentx/) — Date not recorded
  Mobile agent research using accumulated interaction experience.
- [AppClaw](https://awesomecua.com/zh/resources/github-appclawhq-appclaw/) — Date not recorded
  AppClaw is a mobile automation agent for Android and iOS that executes natural-language tasks by inspecting accessibility trees and tapping screens.
- [AppCopilot](https://awesomecua.com/zh/resources/github-openbmb-appcopilot/) — Date not recorded
  AppCopilot is a multimodal mobile agent for tasks across Android apps. The repository provides code and setup steps for emulator or phone control through ADB.
- [Appium XCUITest Driver](https://awesomecua.com/zh/resources/github-appium-appium-xcuitest-driver/) — Date not recorded
  Appium XCUITest Driver provides Appium control of native and hybrid apps across iOS and other Apple device platforms, with watchOS limited to simulators.
- [appium-adb](https://awesomecua.com/zh/resources/github-appium-appium-adb/) — Date not recorded
  An Android Debug Bridge wrapper that exposes device operations for Appium. The repository points to the appium-android monorepo for continuing development.
- [appium-android](https://awesomecua.com/zh/resources/github-appium-appium-android/) — Date not recorded
  A monorepo of Appium packages for Android device and UI automation, including an Android driver, an ADB wrapper, and a device server for UiAutomator2 commands.
- [AppSim-BiliBili](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-bilibili/) — Date not recorded
  A simulated Bilibili Android app for testing AI interaction. It provides navigable screens and preset static content without requiring a network connection.
- [AppSim-Eleme](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-eleme/) — Date not recorded
  An Android food-delivery app built as a local test environment for AI interaction. It supplies shopping workflows, predefined tasks, action logging and evaluation scripts.
- [AppSim-UberEats](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-ubereats/) — Date not recorded
  AppSim-UberEats is an Android app replica with interactive shopping screens, seeded data and scripts for checking task events and answers during mobile-agent evaluation.
- [Aries AI](https://awesomecua.com/zh/resources/github-zg0704666-aries-ai/) — Date not recorded
  Aries AI is an Android agent that uses a language model to interpret screens, plan natural-language tasks and operate apps through accessibility or virtual-display input.
- [ARTEMIS](https://awesomecua.com/zh/resources/github-google-artemis/) — Date not recorded
  ARTEMIS is an Android agent that carries out natural-language tasks across apps. It targets UI elements visually or by index and exposes device runs through an MCP server.
- [ascript-mcp](https://awesomecua.com/zh/resources/github-ascript-cn-ascript-mcp/) — Date not recorded
  Model Context Protocol server for automating real Android, iOS, and Windows devices from Claude, Cursor, and MCP clients.
- [AskUI](https://awesomecua.com/zh/resources/url-d071f3f5a01a5f9d6d78/) — Date not recorded
  AskUI runs plain-language Android app tests through visual screen interaction on devices and emulators, with screenshot traces and CI integrations.
- [Auto-GUI / Auto-UI](https://awesomecua.com/zh/resources/github-cooelf-auto-gui/) — Date not recorded
  Screenshot-based mobile agent implementation with training and inference code for chain-of-action prediction.
- [Auto-UI](https://awesomecua.com/zh/resources/github-gimme1dollar-auto-ui/) — Date not recorded
  A multimodal interface agent that uses earlier actions and future action plans to predict the next action. The repository provides training and inference instructions.
- [AutoDroid](https://awesomecua.com/zh/resources/github-mobilellm-autodroid/) — Date not recorded
  LLM-powered Android task automation built on DroidBot, released with DroidTask, a dataset of per-app screenshots, view hierarchies, exploration records and ground-truth task files.
- [AutoDroid V2](https://awesomecua.com/zh/resources/github-mobilellm-autodroid-v2/) — Date not recorded
  An Android automation implementation that builds app documentation from exploration traces and evaluates language-model-generated execution code in emulator workflows.
- [AutoGLM Android 助手](https://awesomecua.com/zh/resources/github-sidhu-master-androidautoglm/) — Date not recorded
  An Android agent that follows voice or text commands by reading screenshots and simulating touch through Shizuku.
- [AutoTask](https://awesomecua.com/zh/resources/github-bowenbryanwang-autotask/) — Date not recorded
  An Android agent that explores mobile interfaces to execute voice commands and uses what it learns during interaction to guide later actions.
- [AutoWechat](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-wechat-v2/) — Date not recorded
  A simulated WeChat Android app from the AppSim-Bench suite, with chat lists, group chats, contacts and Moments posts backed by local JSON data for AI automation tests.
- [Buddy](https://awesomecua.com/zh/resources/github-ghorbelhamdi-buddy-android/) — Date not recorded
  Android app whose accessibility service serves a local MCP server of phone tools, letting Claude Code, Codex or OpenCode, run in an on-device proot Linux, read the screen, tap, type and open apps.
- [CHOP](https://awesomecua.com/zh/resources/github-yuqi-zhou-chop/) — Date not recorded
  Mobile automation framework that uses reusable basis subtasks to constrain and refine planning between user goals and executable actions.
- [ClawMobile](https://awesomecua.com/zh/resources/github-clawmobile-clawmobile/) — Date not recorded
  ClawMobile is an Android agent runtime built on OpenClaw for controlling mobile apps, learning reusable skills, and executing device workflows.
- [ClickAgent](https://awesomecua.com/zh/resources/github-samsung-clickagent/) — Date not recorded
  ClickAgent decouples high-level MLLM action reasoning from a specialized UI element localization model for Android task automation.
- [ClickClickClick](https://awesomecua.com/zh/resources/github-instavm-clickclickclick/) — Date not recorded
  ClickClickClick is a framework for autonomous Android and desktop computer use supporting local and cloud vision-language models.
- [ClosePaw](https://awesomecua.com/zh/resources/github-imoonkey-closepaw/) — Date not recorded
  On-device Android agent app that reads the accessibility tree, with optional screenshots, acts through accessibility node actions or gesture taps, and can run on a Shizuku virtual display in the background.
- [CLYRedNote](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-rednote/) — Date not recorded
  An Android Compose clone app for GUI-agent testing, with shopping, messaging, search, and content screens backed by seeded fictional data.
- [CoAT research implementation](https://awesomecua.com/zh/resources/github-imnearth-coat/) — Date not recorded
  Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.
- [CoCo-Agent](https://awesomecua.com/zh/resources/github-xbmxb-coco-agent/) — Date not recorded
  Research implementation combining screen and layout perception with conditional action prediction for smartphone automation.
- [Code2World](https://awesomecua.com/zh/resources/github-amap-ml-code2world/) — Date not recorded
  Code2World provides code for predicting the next Android GUI screen from a screenshot and proposed action through renderable code, with an AndroidWorld agent integration.
- [Control-Agent](https://awesomecua.com/zh/resources/github-gekaixing-control-agent/) — Date not recorded
  Unified multimodal control framework combining pure-vision desktop operation, structured DOM browser control, and ADB mobile automation.
- [CrashTranslator](https://awesomecua.com/zh/resources/github-wuchiuwong-crashtranslator/) — Date not recorded
  CrashTranslator generates Android app interactions to reproduce crashes from stack traces. The repository provides code, data and setup instructions for emulator-based runs.
- [Ctrip Android App](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-ctrip/) — Date not recorded
  An Android travel-app replica for testing AI interactions, with representative booking screens, fixed local data, and signals for checking task outcomes.
- [DeepSeek Harness Volcengine OS Agent Plugin](https://awesomecua.com/zh/resources/github-chenjie1129-deepseek-harness-os-agent-plugin/) — Date not recorded
  Integrates Volcengine's Mobile Use and OS Agent capabilities as a plugin for DeepSeek Harness.
- [DouGao (豆糕)](https://awesomecua.com/zh/resources/github-hulubo2014-dougao/) — Date not recorded
  DouGao is an on-device Android AI assistant combining VLM screen control across Accessibility, Shizuku, and Root channels with direct file editing.
- [DroidAgent](https://awesomecua.com/zh/resources/github-coinse-droidagent/) — Date not recorded
  An Android GUI testing agent that explores an app from user goals, then generates test scenarios, replay scripts, and reports of its actions.
- [DroidBot-GPT](https://awesomecua.com/zh/resources/github-mobilellm-droidbot-gpt/) — Date not recorded
  DroidBot-GPT connects DroidBot UI state extraction with large language models to automate multi-step tasks across Android applications.
- [DroidFleet](https://awesomecua.com/zh/resources/github-c00l-k1d-droidfleet/) — Date not recorded
  Open-source Android device fleet management and orchestration platform for mobile automation and testing.
- [DroidLume Agent Control](https://awesomecua.com/zh/resources/github-tageecc-droidlume-agent-control/) — Date not recorded
  npm-distributed CLI, Model Context Protocol server, and standalone Android companion app for AI phone control.
- [DSB (逗沙包)](https://awesomecua.com/zh/resources/github-tianye1999-dsb/) — Date not recorded
  DSB is a trust-first Android AI agent that executes delegated app tasks on a background virtual display without interrupting the user's screen.
- [DSH Android](https://awesomecua.com/zh/resources/github-zseven-w-dsh-android/) — Date not recorded
  A DeepSeek Harness plugin streams an Android emulator or phone into an agent conversation and provides adb tools for screen capture, UI inspection and interaction.
- [DSH iOS Simulator](https://awesomecua.com/zh/resources/github-zseven-w-dsh-ios/) — Date not recorded
  A DeepSeek Harness plugin that gives agents access to an iOS Simulator or USB-connected iPhone, with live video, UI inspection, and tap tools.
- [DSH Mobile (DeepSeek Harness for Android)](https://awesomecua.com/zh/resources/github-soodok-deepseek-harness-local-android/) — Date not recorded
  Runs the DeepSeek Harness AI agent natively on Android phones without root.
- [DSH Mobile GUI Agent](https://awesomecua.com/zh/resources/github-kunjinkao-os-dsh-mobile-gui-agent/) — Date not recorded
  Android Mobile GUI Agent plugin for DeepSeek Harness featuring ADB actuation, iterative screen verification, and error recovery.
- [DSH Phone Agent](https://awesomecua.com/zh/resources/github-sktyou-dsh-phone-agent/) — Date not recorded
  Controls Android phones over LAN via an on-device AccessibilityService app with local OCR, template matching, and GKD ad-skipping rules.
- [DSH × Termux — mobile operations kit](https://awesomecua.com/zh/resources/github-maopk-dsh-termux-kit/) — Date not recorded
  An Android operations kit for DeepSeek Harness with widgets, a Console app, and an Accessibility bridge that lets an AI read and control the phone screen.
- [dsh-plugin-midscene](https://awesomecua.com/zh/resources/github-ciky20171114-dsh-plugin-midscene/) — Date not recorded
  Midscene.js-powered visual UI automation plugin for DeepSeek Harness supporting both Android (`android_ui`) and Web (`web_ui`).
- [DSHBox](https://awesomecua.com/zh/resources/github-wsk-build-dshbox/) — Date not recorded
  Android app that runs the DeepSeek Harness agent locally in a PRoot Debian sandbox and gives it a WebView browser CLI and a phone assistant that operates native apps via Accessibility and Shizuku backends.
- [DualTAP](https://awesomecua.com/zh/resources/github-fyzhang1-dualtap/) — Date not recorded
  DualTAP is a dual-task adversarial protection framework for mobile MLLM GUI agents against environmental and visual prompt attacks.
- [ESP32 iPhone Agent](https://awesomecua.com/zh/resources/github-onehumanbeing-esp32-iphone-agent/) — Date not recorded
  ESP32 iPhone Agent controls unmodified iPhones via Bluetooth HID mouse/keyboard emulation from an ESP32 paired with vision-language screen parsing.
- [ExpActivator](https://awesomecua.com/zh/resources/github-fyzhang1-expactivator/) — Date not recorded
  ExpActivator selectively retrieves and verifies applicable historical interaction experiences for personalized GUI agents.
- [Expo Device Hub](https://awesomecua.com/zh/resources/github-expo-expo-device-hub/) — Date not recorded
  Expo Device Hub streams iOS simulators and Android emulators into a browser dashboard, where users can view screens, send input, and manage devices.
- [Fathom](https://awesomecua.com/zh/resources/github-drizzdev-fathom/) — Date not recorded
  Fathom is an execution harness for mobile computer-use agents that translates plain-English goals into grounded actions on iOS and Android.
- [FinalRun](https://awesomecua.com/zh/resources/url-3b99bbbd3480dbc1ec6b/) — Date not recorded
  Android UI agent that prunes interface trees, waits for stable screens, feeds action failures back into its decisions, and takes fresh screenshots before grounding actions.
- [finalrun-agent](https://awesomecua.com/zh/resources/github-final-run-finalrun-agent/) — Date not recorded
  An AI-driven CLI for testing Android and iOS apps from YAML instructions. It observes the screen, performs touch and text actions, and reports results with video and logs.
- [FluidGPT](https://awesomecua.com/zh/resources/url-0c69fd920263b8a72a72/) — Date not recorded
  Android agent product presented through recorded AndroidWorld runs. Fluiz reports completion of 116 tasks across 20 apps through screen interaction.
- [FluidGPT](https://awesomecua.com/zh/resources/url-738bfdfe24671ad29a43/) — Date not recorded
  An Android agent that selects reusable app routines from a task goal and executes them through the accessibility tree. Its benchmark report presents episode recordings and action traces.
- [flutter_copilot](https://awesomecua.com/zh/resources/github-anasfik-flutter-copilot/) — Date not recorded
  In-app SDK that exposes Flutter widget trees and semantic actions directly to AI agents without screenshots or OCR.
- [GBOX](https://awesomecua.com/zh/resources/github-babelcloud-gbox/) — Date not recorded
  An environment service with CLI and MCP access that lets agents operate Android apps and desktop applications, including browsers and terminals.
- [Ghost in the Droid](https://awesomecua.com/zh/resources/github-ghost-in-the-droid-android-agent/) — Date not recorded
  Ghost in the Droid is an Android GUI agent that combines accessibility trees, screenshot perception, and ADB/on-device execution.
- [glassbox](https://awesomecua.com/zh/resources/github-yoyicue-glassbox/) — Date not recorded
  glassbox is an iOS and iPadOS computer-use runtime that drives physical iPhones and iPads from screen observations and hardware/bridge control.
- [GoSosmed Mobile Agent](https://awesomecua.com/zh/resources/github-dedy45-gososmed-mobile-agent/) — Date not recorded
  Android AccessibilityService automation engine and control dashboard for managing multi-device mobile workflows.
- [GPTVoiceTasker](https://awesomecua.com/zh/resources/github-vuminhduc796-gptvoicetasker/) — Date not recorded
  Android app for GPTVoiceTasker, a GPT-4 voice assistant that reads screen elements through the Accessibility Service, turns spoken commands into press, enter and scroll actions, and reuses learned app transitions.
- [GUI-explorer](https://awesomecua.com/zh/resources/github-ilearn-lab-acl25-gui-explorer/) — Date not recorded
  Android agent code that explores apps over ADB, mines transition-aware knowledge into a knowledge base behind a retrieval service, and runs an OpenAI-backed agent demo that draws on it.
- [GUI-Trajectory-Virtual](https://awesomecua.com/zh/resources/github-futuresis-gui-trajectory-virtual/) — Date not recorded
  Synthesizes Android agent trajectories without a device: an image model behind a chat-completions API draws each next screen from the previous screenshot and the action chosen by a Mobile-Agent-v3-style agent.
- [Hachifish](https://awesomecua.com/zh/resources/github-momo-null-hachifish/) — Date not recorded
  Hachifish is an on-device Android GUI agent that executes natural-language tasks via the native AccessibilityService with pre-completion checks.
- [Humanoid](https://awesomecua.com/zh/resources/github-yzygitzh-humanoid/) — Date not recorded
  Android app exploration component that uses a model learned from human usage traces to rank the input events proposed by DroidBot.
- [idb](https://awesomecua.com/zh/resources/github-facebook-idb/) — Date not recorded
  idb is a CLI and Python client for automating iOS simulators and devices, with remote companions and commands for app and test workflows.
- [InTheRainOf Mobile Agent (随身Agent)](https://awesomecua.com/zh/resources/github-intherainof-mobile-agent/) — Date not recorded
  On-device Android AI agent for automating phone apps and daily mobile tasks.
- [iOS Agent Harness](https://awesomecua.com/zh/resources/github-a178960320-ios-agent-harness/) — Date not recorded
  iOS Agent Harness runs a Manager-Executor-Reflector GUI agent loop on iPhones to automate cross-app tasks from natural language.
- [iPhone CUA](https://awesomecua.com/zh/resources/github-masone-iphone-cua/) — Date not recorded
  iPhone CUA steers physical iPhones from macOS by pairing an iPhone screen/control bridge with OpenAI Computer-Using Agent models.
- [iphone-control (iPhone Mirroring Skill)](https://awesomecua.com/zh/resources/github-charlesmorgansoftware-iphone-control/) — Date not recorded
  macOS skill and CoreGraphics controller for driving a paired iPhone through Apple's macOS iPhone Mirroring app.
- [iphone-use](https://awesomecua.com/zh/resources/github-leeguooooo-iphone-use/) — Date not recorded
  MCP server and CLI that lets Claude Code, Codex, and MCP agents read real iPhone screens as structured text and execute taps/swipes.
- [iphone-use-flows](https://awesomecua.com/zh/resources/github-leeguooooo-iphone-use-flows/) — Date not recorded
  A registry of reusable iPhone app workflows for iphone-use. Its JSON flows define phone actions, inputs, and checks for completing repeated tasks.
- [Kirk Engine](https://awesomecua.com/zh/resources/url-80c8abf734a29f7affc5/) — Date not recorded
  An Android agent that uses screenshots and accessibility trees to choose taps, typing and swipes. Its page reports an AndroidWorld run and describes per-task verification artifacts.
- [K²-Agent](https://awesomecua.com/zh/resources/github-k2-agent-k2-agent/) — Date not recorded
  A hierarchical mobile-device agent that combines a demonstration-informed planner with a learned action executor; the release includes AndroidWorld evaluation trajectories.
- [lazy-mobile-mcp](https://awesomecua.com/zh/resources/github-leaf76-lazy-mobile-mcp/) — Date not recorded
  Lazy-mobile-mcp gives MCP clients tools to inspect and control Android and iOS devices, with screenshots, touch actions, UI dumps, and performance sampling.
- [LearnAct](https://awesomecua.com/zh/resources/github-lgy0404-learnact/) — Date not recorded
  Released inference and evaluation code for demonstration-conditioned mobile GUI agents on LearnGUI-Offline. The repository describes a multi-agent adaptation method and links the LearnGUI demonstrations.
- [LlamaTouch Evaluator](https://awesomecua.com/zh/resources/github-llamatouch-evaluator/) — Date not recorded
  LlamaTouch Evaluator checks mobile-agent execution traces against annotated interface states and provides exact-match and subsequence action baselines.
- [LongHorizonUI](https://awesomecua.com/zh/resources/github-kane2kang-longhorizonui/) — Date not recorded
  Code for the LongHorizonUI Android agent: OCR plus OmniParser icon detection yields numbered element boxes for an LLM, and failed taps fall back from element index to relative and absolute points with rollback.
- [Lucy Screen Agent](https://awesomecua.com/zh/resources/github-alzin-lucy-screen-agent/) — Date not recorded
  Lucy is a voice-and-screen Android agent that perceives live app screens with Gemini vision and executes taps, swipes, and text input.
- [Lynx Agent](https://awesomecua.com/zh/resources/github-wangjiang314-lynx-agent/) — Date not recorded
  Lynx Agent is a completion-first Android phone-use agent with evidence-based state verification, recovery, and safety checks.
- [macos-desktop-control](https://awesomecua.com/zh/resources/github-d-wwei-macos-desktop-control/) — Date not recorded
  Native macOS desktop automation MCP server providing screen capture, mouse/keyboard input, window management, and iOS Simulator control.
- [MAI-UI inference and evaluation code](https://awesomecua.com/zh/resources/github-tongyi-mai-mai-ui/) — Date not recorded
  Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.
- [Melaya](https://awesomecua.com/zh/resources/github-melaya-labs-melaya/) — Date not recorded
  Melaya provides SDKs and documentation for an agent platform that operates Android apps and browser tabs, with scoped permissions and human approvals.
- [META-GUI baseline](https://awesomecua.com/zh/resources/github-x-lance-meta-gui-baseline/) — Date not recorded
  Training and evaluation pipeline for conversational mobile GUI agents, with action prediction, response generation, and dataset processing.
- [Midscene iOS](https://awesomecua.com/zh/resources/github-lhuanyu-midscene-ios/) — Date not recorded
  Midscene iOS provides an SDK and playground for automating an iOS device through screen actions and queries. It uses macOS device mirroring and exposes a browser-based playground.
- [Midscene Java](https://awesomecua.com/zh/resources/github-master-frank-midscene-java/) — Date not recorded
  Midscene Java is a framework for natural-language UI automation across web pages and Android apps, with modules for element location, actions, extraction and assertions.
- [Midscene Python](https://awesomecua.com/zh/resources/github-python51888-midscene-python/) — Date not recorded
  Midscene Python is a framework for natural-language automation of websites and Android devices, with model-assisted actions, element location, extraction and assertions.
- [Minitap mobile-use](https://awesomecua.com/zh/resources/github-minitap-ai-mobile-use/) — Date not recorded
  Minitap mobile-use is a multi-agent mobile automation system that controls physical and emulated Android and iOS devices from natural language.
- [MM-Navigator](https://awesomecua.com/zh/resources/github-zzxslp-mm-navigator/) — Date not recorded
  Example code for the GPT-4V smartphone navigation study: a prompt builder that sends raw and number-tagged screenshots plus action history to GPT-4V for the next Android action, and an action-matching evaluation script.
- [MobA](https://awesomecua.com/zh/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile Agent](https://awesomecua.com/zh/resources/github-looper42-mobile-agent/) — Date not recorded
  Mobile Agent is an Android assistant that can use local tools and optional accessibility-based device control, with approval for sensitive actions.
- [Mobile Agent Guardian](https://awesomecua.com/zh/resources/github-salus-ryan-mobile-agent-guardian/) — Date not recorded
  Five-level safety and action-verification layer for mobile GUI agents that classifies and gates risky phone operations.
- [Mobile GUI-VLA Device Platform](https://awesomecua.com/zh/resources/github-chbq-mobile-gui-vla-device-platform/) — Date not recorded
  Provides a zero-dependency Python device I/O and trajectory instrumentation layer for Android GUI-VLA experiments.
- [Mobile JSON Wire Protocol Specification](https://awesomecua.com/zh/resources/github-seleniumhq-mobile-spec/) — Date not recorded
  A draft WebDriver extension for automating native and hybrid mobile apps, defining sessions, capabilities, locator strategies, touch gestures, orientation, rotation, network modes and webview contexts.
- [Mobile Next MCP](https://awesomecua.com/zh/resources/github-mobile-next-mobile-mcp/) — Date not recorded
  An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.
- [Mobile QA Agent](https://awesomecua.com/zh/resources/github-sumanmadipeddi-mobile-qa-agent/) — Date not recorded
  Mobile QA Agent is a Supervisor-Planner-Executor multi-agent system built on Agent S3 for automated Android app testing via ADB.
- [Mobile Use](https://awesomecua.com/zh/resources/github-madeagents-mobile-use/) — Date not recorded
  Android GUI agent that operates real phones through ADB with hierarchical reflection and a multi-agent framework, run from a web interface or Python and evaluated on AndroidWorld and AndroidLab.
- [Mobile Use Agent (Cloud Phone Skill)](https://awesomecua.com/zh/resources/github-chenjie1129-mobile-use-agent/) — Date not recorded
  Python SDK, CLI, and agent skill for driving cloud Android phones via Volcengine Mobile Use Agent OpenAPI with GPS and app state injection.
- [Mobile-Agent](https://awesomecua.com/zh/resources/github-x-plug-mobileagent/) — Date not recorded
  Mobile device agent family using visual interface interaction.
- [Mobile-Agent-E code component](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [MobileAgent (Alipay)](https://awesomecua.com/zh/resources/github-alipay-mobile-agent/) — Date not recorded
  Mobile-control research implementation combining operating-procedure context with human interaction for personalized task execution.
- [MobileClaw](https://awesomecua.com/zh/resources/github-eggbrid2-mobileclaw/) — Date not recorded
  MobileClaw is an open Android AI agent runtime for phone control, VLM screen reading, and reusable mobile skill execution.
- [mobilecli](https://awesomecua.com/zh/resources/github-mobile-next-mobilecli/) — Date not recorded
  mobilecli is a command-line utility for controlling iOS and Android devices and simulators. It captures screens, reads UI trees, sends input, and manages apps.
- [MobileForge](https://awesomecua.com/zh/resources/github-kwai-mobileforge/) — Date not recorded
  Android GUI-agent adaptation framework combining app exploration, generated curricula and rollout feedback with hint-conditioned step-level GRPO; the documented public training path targets Qwen3-VL-8B.
- [MobileGPT](https://awesomecua.com/zh/resources/github-fclab-skku-mobilegpt/) — Date not recorded
  An Android client and Python-server agent that learns reusable app subtasks through exploration, selection, derivation and memory recall.
- [MobileMCP](https://awesomecua.com/zh/resources/github-magi-labs-mobilemcp/) — Date not recorded
  MobileMCP lets AI agents control physical Android phones over WebSocket via an on-device AccessibilityService app without ADB or root.
- [MobilePilot Runtime](https://awesomecua.com/zh/resources/github-qizhanggu-mobilepilot-runtime/) — Date not recorded
  MobilePilot is an auditable Android GUI agent runtime with structured action verification, on-demand UI trees, and bounded error recovery.
- [MobileRAG](https://awesomecua.com/zh/resources/github-liuxiaojieoutofworld-mobilerag-arxiv/) — Date not recorded
  MobileRAG operates Android devices via ADB by combining local app retrieval, historical trajectory memory, and external web search.
- [Mobilerun (formerly Droidrun)](https://awesomecua.com/zh/resources/github-droidrun-mobilerun/) — Date not recorded
  A framework that combines screenshots and accessibility state with agent tools for mobile-device tasks through command-line and Python interfaces.
- [Mobilerun Portal (formerly Droidrun Portal)](https://awesomecua.com/zh/resources/github-droidrun-mobilerun-portal/) — Date not recorded
  An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.
- [mobilerun-ios](https://awesomecua.com/zh/resources/github-droidrun-mobilerun-ios-releases/) — Date not recorded
  A CLI bridge connecting a local iPhone to Mobilerun for natural-language control of an iOS device, distributed as macOS and Linux binaries.
- [Mobilewright](https://awesomecua.com/zh/resources/github-mobile-next-mobilewright/) — Date not recorded
  Mobilewright automates iOS and Android devices through semantic locators and actions. It exposes accessibility trees that agents can use to inspect and operate mobile apps.
- [Mobster engine](https://awesomecua.com/zh/resources/github-radishsoftware-mobster/) — Date not recorded
  iOS agent engine organized around an observe, decide, verify and act loop, using WebDriverAgent screen state and phone actions such as taps, typing, swipes and app switches.
- [MuseLite](https://awesomecua.com/zh/resources/github-yxq953-muselite/) — Date not recorded
  MuseLite is a Python-first AI agent workspace for Android combining chat, execution sandboxes, browser automation, and scheduled tasks.
- [MyInstagram](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-instagram/) — Date not recorded
  MyInstagram is an Android clone app with interactive social screens, mock data, and state fields for checking the outcomes of GUI agent tasks.
- [MyMusic](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-neteasecloudmusic/) — Date not recorded
  A simplified Android music app with fixed local data and action records for checking whether mobile GUI agents complete tasks.
- [Napaxi](https://awesomecua.com/zh/resources/github-antgroup-napaxi/) — Date not recorded
  Mobile-native agent SDK by Ant Group for building on-device AI agents with sandboxed skill execution.
- [Oh-Matilda](https://awesomecua.com/zh/resources/github-tahsine-oh-matilda/) — Date not recorded
  Oh-Matilda is a Tauri v2 on-device Android AI agent that autonomously opens apps and executes taps, text entry, and scrolling without ADB.
- [OmniAgent](https://awesomecua.com/zh/resources/github-momo-null-omniagent/) — Date not recorded
  A resident assistant that can inspect screenshots and operate a local desktop through mouse and keyboard tools or an Android device through ADB, alongside chat and memory features.
- [Open-AutoGLM](https://awesomecua.com/zh/resources/github-zai-org-open-autoglm/) — Date not recorded
  Phone agent model and framework with device interaction tooling.
- [opencode-mobile-use](https://awesomecua.com/zh/resources/github-system1970-opencode-mobile-use/) — Date not recorded
  OpenCode plugin for controlling Android devices with a live phone screen in the TUI sidebar and resilient UI hierarchy dumps.
- [OpenGUI](https://awesomecua.com/zh/resources/github-core-mate-opengui/) — Date not recorded
  OpenGUI is an Android GUI agent framework that combines screen perception, accessibility trees, and ADB actuation for real-device automation.
- [OpenMinis](https://awesomecua.com/zh/resources/github-openminis-openminis/) — Date not recorded
  An open-source mobile agent for iOS and Android that interacts with websites and device tools while running scripts in an on-device Linux sandbox.
- [OpenMobile code](https://awesomecua.com/zh/resources/github-njucckevin-openmobile-code/) — Date not recorded
  OpenMobile pipeline for AndroidWorld: random-walk exploration, memory-based task-instruction synthesis, learner/expert policy-switching rollouts, conversion to LLaMA-Factory SFT data, and AndroidWorld evaluation.
- [OpenMobile-2 code](https://awesomecua.com/zh/resources/github-openmobile2-openmobile2-code/) — Date not recorded
  Evaluation adapters and training guidance for OpenMobile-2 across Android emulators and browser-rendered mobile simulation.
- [OpenMobile-2 extended Android AVDs](https://awesomecua.com/zh/resources/url-f039da43799772645c92/) — Date not recorded
  Seven preconfigured Pixel 6 emulator images for Android API 33 (arm64) with an Apple Silicon install script, listed in the OpenMobile-2 release as its extended Android AVDs.
- [OpenPhone (Secondly)](https://awesomecua.com/zh/resources/github-secondly-com-openphone/) — Date not recorded
  AI-native Android OS on LineageOS whose privileged assistant uses new framework services to read the screen and UI tree and tap, swipe and type across apps, with confirmations, watchers and an audit log.
- [Operit AI](https://awesomecua.com/zh/resources/github-aaswordman-operit/) — Date not recorded
  An Android agent platform that operates app interfaces and web pages using visual screen understanding, device controls, and browser actions.
- [Orquestrador de Features](https://awesomecua.com/zh/resources/github-gustavo-em-orchestrator-features/) — Date not recorded
  Multi-agent loop that plans React Native mobile features, writes code, drives the simulator UI, and verifies visual results.
- [OS-Kairos](https://awesomecua.com/zh/resources/github-wuzheng02-os-kairos/) — Date not recorded
  Android GUI-agent research implementation that uses confidence-guided interaction to choose between autonomous actions and human assistance.
- [PageKit](https://awesomecua.com/zh/resources/github-ken-u-pagekit/) — Date not recorded
  Turns spare Android phones into free web search, page fetch, and real-browser automation nodes for AI agents.
- [Phone Agent](https://awesomecua.com/zh/resources/github-boboabw-phone-agent/) — Date not recorded
  An iPhone assistant that observes a shared screen and acts across apps using an ESP32-S3 Bluetooth mouse and keyboard accessory. The release includes app and firmware source.
- [PhoneClaw](https://awesomecua.com/zh/resources/github-kellyvv-phoneclaw/) — Date not recorded
  PhoneClaw turns iOS and Android smartphones into local AI agent runtimes with on-device model inference and native system skills.
- [PhoneCLI](https://awesomecua.com/zh/resources/github-hkuds-phonecli/) — Date not recorded
  Mobile-agent harness that crawls an app into a YAML map of screens, replays compiled navigation commands through WebDriverAgent on iOS or ADB on Android, and falls back to a VLM for unseen screens.
- [PhysiClaw](https://awesomecua.com/zh/resources/github-physiclaw-physiclaw/) — Date not recorded
  PhysiClaw uses an overhead camera and a 3-axis capacitive stylus gantry to physically tap and swipe unmodified smartphones.
- [pi-iphone-mirroring](https://awesomecua.com/zh/resources/github-aniruddha-adhikary-pi-iphone-mirroring/) — Date not recorded
  Vision-first iPhone Mirroring control package for the Pi coding agent on macOS.
- [PocketCode](https://awesomecua.com/zh/resources/github-m1ssbe4r-pocketcode/) — Date not recorded
  On-device Android AI coding and automation agent capable of building and running apps directly on a phone.
- [Pocketwatch](https://awesomecua.com/zh/resources/github-psamme-pocketwatch/) — Date not recorded
  AI beta-testing agent for physical iPhone applications that drives user journeys over macOS iPhone Mirroring.
- [PokeClaw](https://awesomecua.com/zh/resources/github-agents-io-pokeclaw/) — Date not recorded
  Android app that runs a phone-control agent on the device, reading the UI tree through an Accessibility service and tapping, swiping and typing with on-device Gemma 4 or an optional cloud model.
- [redroid](https://awesomecua.com/zh/resources/github-remote-android-redroid-doc/) — Date not recorded
  redroid provides containerized Android instances on Linux hosts, with ADB connectivity and configurable displays for mobile automation environments.
- [Roubao](https://awesomecua.com/zh/resources/github-turbo1123-roubao/) — Date not recorded
  On-device Android phone agent in Kotlin that captures screenshots and taps, swipes and types through Shizuku without a PC, running a planner, executor and reflector loop on any OpenAI-compatible VLM, GUI-Owl or MAI-UI.
- [Safari iOS Web Inspector MCP](https://awesomecua.com/zh/resources/github-rodneyrdx-safari-ios-webinspector-mcp/) — Date not recorded
  TypeScript Model Context Protocol server for inspecting and debugging live iPhone Safari WebKit sessions from macOS.
- [scrcpy](https://awesomecua.com/zh/resources/github-genymobile-scrcpy/) — Date not recorded
  scrcpy mirrors Android devices and lets users control them with a computer keyboard and mouse over USB or TCP/IP on Linux, Windows and macOS.
- [Seq2act code (google-research)](https://awesomecua.com/zh/resources/component-google-research-seq2act/) — Date not recorded
  TensorFlow code for mapping natural-language instructions to Android UI action sequences, with phrase-tuple extraction and grounding models and pipelines for AndroidHowTo, RicoSCA and PixelHelp.
- [serve-sim](https://awesomecua.com/zh/resources/github-evanbacon-serve-sim/) — Date not recorded
  A CLI that streams a booted iOS Simulator to a browser preview over MJPEG and WebSocket, with commands and an Agent Skill that let coding agents send taps, gestures, text and button presses.
- [SilbercueSwift](https://awesomecua.com/zh/resources/github-silbercue-silbercueswift/) — Date not recorded
  An MCP server for iOS development that gives agents simulator screenshots, UI element inspection, navigation actions and structured test results.
- [SimpAgent](https://awesomecua.com/zh/resources/github-jiutian-vl-simpagent/) — Date not recorded
  SimpAgent implements context-aware history simplification and visual token pruning to accelerate multimodal GUI agents.
- [simpilot](https://awesomecua.com/zh/resources/github-passerby2049-simpilot/) — Date not recorded
  An MCP server that lets an agent inspect and operate iOS Simulator apps through UI trees, taps, text entry, swipes, screenshots, and screen recordings.
- [SoobujMiah LAI (Android Local AI Runtime)](https://awesomecua.com/zh/resources/github-soobujmiah-lai/) — Date not recorded
  On-device local AI and consent-driven Android UI automation runtime with Bangla-first accessibility support.
- [Surfer 2](https://awesomecua.com/zh/resources/url-efd78f56fcde1f4f05e5/) — Date not recorded
  Surfer 2 is a computer-use agent for desktop, web and mobile tasks. Its orchestrator assigns subtasks while components handle visual grounding and execution.
- [Susu Phone Agent](https://awesomecua.com/zh/resources/github-2005selene2005-a11y-susu-phone-agent/) — Date not recorded
  Android device bridge for Claude Code over MCP and Shizuku enabling rootless phone UI automation.
- [Svate](https://awesomecua.com/zh/resources/github-jieao-re-svate/) — Date not recorded
  Svate is an on-device Android UI automation agent combining Accessibility trees, screenshots, pre-action safety checks, and recovery.
- [SwitchMem](https://awesomecua.com/zh/resources/github-dmis-lab-switchmem/) — Date not recorded
  Memory-routing implementation that chooses text or image demonstrations for a frozen GUI actor, with offline evaluation and Android transfer experiments.
- [tail-aside](https://awesomecua.com/zh/resources/github-quino0627-tail-aside/) — Date not recorded
  Remote mobile controller for monitoring and steering the Aside browser agent over Tailscale.
- [taproot](https://awesomecua.com/zh/resources/github-shivampkumar-taproot/) — Date not recorded
  taproot is an open-source mobile GUI agent harness combining vision-language models with accessibility-tree grounding on AndroidWorld.
- [Termux Browser Pilot](https://awesomecua.com/zh/resources/github-salviz-termux-browser-pilot/) — Date not recorded
  Runs unrooted headless/Xvfb Firefox and Chromium browser automation with CDP and an MCP server directly inside Android Termux.
- [Tongyi UI Agent API](https://awesomecua.com/zh/resources/url-ce0af37931cd5aa20233/) — Date not recorded
  Alibaba Cloud Model Studio API that returns the next GUI action with its reasoning for a screenshot and task, with a mobile pipeline and a PC pipeline using planner, worker, reflector and memory agents.
- [UI-Hawk](https://awesomecua.com/zh/resources/github-imnearth-uihawk/) — Date not recorded
  UI-Hawk is a GUI agent designed to interpret sequences of screens during navigation. Its research release describes a history-aware visual encoder, screen tasks, and the FunUI benchmark.
- [UI-Voyager](https://awesomecua.com/zh/resources/github-ui-voyager-ui-voyager/) — Date not recorded
  UI-Voyager is a self-evolving mobile GUI agent framework that learns from failed execution trajectories via group-relative reflection.
- [uiautomator2](https://awesomecua.com/zh/resources/github-openatx-uiautomator2/) — Date not recorded
  uiautomator2 is a Python library for controlling Android devices through a device-side UiAutomator service, including app launch and UI element actions.
- [Unattended Android Automation Toolkit](https://awesomecua.com/zh/resources/github-chuanchihsu1219-unattended-android-automation-toolkit/) — Date not recorded
  Reliability-first building blocks for unattended Android app automation, crash recovery, and UI state collection.
- [V-Droid](https://awesomecua.com/zh/resources/github-v-droid-agent-v-droid/) — Date not recorded
  V-Droid pairs a mobile GUI actor with a generative verifier that scores candidate actions before execution on Android devices.
- [VEM GUI-Agent-RL](https://awesomecua.com/zh/resources/github-microsoft-gui-agent-rl/) — Date not recorded
  Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.
- [vePhone](https://awesomecua.com/zh/resources/github-volcengine-vephone/) — Date not recorded
  vePhone supplies remotely controlled cloud phones and example integrations for mobile and computer-use agents, including task execution and result retrieval.
- [VeriOS](https://awesomecua.com/zh/resources/github-wuzheng02-verios/) — Date not recorded
  Research code for proactive human–GUI-agent verification, including offline interaction-loop and dual-agent evaluation scripts plus LLaMA-Factory fine-tuning configurations.
- [VeriSafe Agent](https://awesomecua.com/zh/resources/github-verisafeagent-verisafeagent/) — Date not recorded
  Runtime verification framework for Android GUI agents that checks proposed actions against logical rules derived from user instructions and developer-defined app states.
- [VersaiOS](https://awesomecua.com/zh/resources/github-zhaodashuaibi-versaios/) — Date not recorded
  VersaiOS uses a vision-language model to locate targets on an iPhone screen and an ESP32 Bluetooth mouse to execute clicks from natural-language instructions.
- [VG-GUI-TASKER](https://awesomecua.com/zh/resources/github-vg-gui-tasker-vg-gui-tasker/) — Date not recorded
  VG-GUI-TASKER extracts informative keyframes from instructional demonstration videos to guide multimodal GUI agents.
- [ViMo code](https://awesomecua.com/zh/resources/github-ai-agents-2030-vimo/) — Date not recorded
  Code for the ViMo GUI world model: Gemini-based next-screen text prediction, AITW and AndroidControl data processing, InstructPix2Pix-style graphic inference, and an AndroidWorld agent that consults it.
- [VisionDroid](https://awesomecua.com/zh/resources/github-testtesta6-visiondroid/) — Date not recorded
  VisionDroid uses multimodal LLMs to explore Android app screens and detect non-crash functional GUI logic bugs across page transitions.
- [VisionGrid AI](https://awesomecua.com/zh/resources/github-mohsinjutt62-autoplay-cv-engine-bot/) — Date not recorded
  Computer-vision Android UI automation and heuristic gameplay engine built with OpenCV and ADB.
- [VisionTasker](https://awesomecua.com/zh/resources/github-akimotoayako-visiontasker/) — Date not recorded
  An Android automation implementation that translates screenshot-based UI understanding into language descriptions for step-by-step LLM planning and action execution.
- [VK DeviceHub](https://awesomecua.com/zh/resources/github-vkcom-devicehub/) — Date not recorded
  A device-management system for viewing and controlling Android and iOS devices through a browser. It provides remote input, device inventory and a REST API.
- [VSC-RL code](https://awesomecua.com/zh/resources/github-ai-agents-2030-vsc-rl/) — Date not recorded
  VSC-RL training code for Android in the Wild tasks: Gemini-generated subgoals condition an Auto-UI policy trained online in emulators with learned critics and a Gemini end-state evaluator, built on DigiRL.
- [WebDriverAgent](https://awesomecua.com/zh/resources/github-appium-webdriveragent/) — Date not recorded
  WebDriverAgent is an iOS WebDriver server for remote app control, including launching apps, tapping, scrolling, and checking views. Development has moved to appium-ios.
- [WebDroid](https://awesomecua.com/zh/resources/github-loyality7-webdroid/) — Date not recorded
  Playwright-shaped browser automation library for driving live Chromium pages inside Android applications.
- [WebDroid Agent](https://awesomecua.com/zh/resources/github-yeahhe365-webdroid-agent/) — Date not recorded
  Browser-hosted Android phone agent that connects over WebUSB/WebADB, sends screenshots plus a uiautomator text tree to an OpenAI-compatible or Gemini vision model, and runs its JSON actions through ADB.
- [Wuying Agentic Mobile](https://awesomecua.com/zh/resources/url-df3102617f3a66c44fc9/) — Date not recorded
  Alibaba Cloud Wuying service that runs Qwen-driven agents (MobileUseAgent with OpenClaw) in cloud Android containers to carry out natural-language tasks across apps, for process automation and app testing.
- [Wuying Cloud Phone](https://awesomecua.com/zh/resources/url-9480f580f8bf9d3ba65d/) — Date not recorded
  Alibaba Cloud service of virtual Android phones run on ARM servers and streamed to users' devices, sold with a built-in Mobile Use Agent and an Agentic Mobile option that runs Qwen-driven agents in the phones.
- [YADB](https://awesomecua.com/zh/resources/github-ysbing-yadb/) — Date not recorded
  YADB extends Android Debug Bridge with text input, screenshots, UI layout dumps and simulated gestures for device automation.
- [youtube_sim](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-youtube/) — Date not recorded
  youtube_sim is a YouTube-style Android test app with local media, interaction logs and task validators for checking mobile interface actions and resulting state.
- [Yunkai](https://awesomecua.com/zh/resources/github-solplum-yunkai/) — Date not recorded
  Android phone assistant combining model-driven tool use with accessibility-tree reading, screenshots, and tap, swipe and text-entry primitives. Its documented interaction flow presents operation plans for user confirmation.
- [Ziweixing (紫微星)](https://awesomecua.com/zh/resources/github-xiaozhe7772222-ziweixing/) — Date not recorded
  Intent-first Android phone automation agent with human-like touch trajectories and screen perception.
- [Zoom Android Template](https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim-zoom/) — Date not recorded
  Zoom Android Template is a simulated meeting app for mobile interaction tests, with seeded schedules and runtime records of meeting and profile actions.

## 学习资源

- [Achieving 91.4% on Android World: A New Approach to Mobile UI Automation](https://awesomecua.com/zh/resources/url-f8b67bde8c79e7934a2a/) — Date not recorded
  Technical article describing an Android UI agent that alternates planning with single actions, checks screen changes and uses a dedicated text editing path. It reports AndroidWorld results.
- [AI Agents for Computer Use](https://awesomecua.com/zh/resources/github-sagerpascal-agents-for-computer-use/) — Date not recorded
  A browsable list of agents for desktop and mobile GUI control, with agent and dataset overviews linked from a companion survey repository.
- [Computer-Use Agents: An Overview of Terminal-Based and GUI-Based Approaches](https://awesomecua.com/zh/resources/github-cdxeve-awesome-computer-use-agents/) — Date not recorded
  A curated reading list and accompanying report organize computer-use research, including agents that act through web, desktop, and mobile interfaces.
- [Finalrun Agentic Approach](https://awesomecua.com/zh/resources/github-final-run-finalrun-android-world-benchmark/) — Date not recorded
  Illustrated account of FinalRun's Android agent approach, with task walkthroughs and recordings showing screen observation, action planning, and state checks.
- [Midscene Examples](https://awesomecua.com/zh/resources/github-web-infra-dev-midscene-example/) — Date not recorded
  Midscene Examples provides runnable AI automation and testing cases for web, Android, iOS and desktop interfaces, including YAML workflows and SDK integrations.
