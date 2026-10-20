# Evaluation

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/evaluation/records.jsonl

## Papers & surveys

- [ScopeMem: Latent Memory That Learns Where to Revise Frozen GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-26503/) — 2026-10-19
  ScopeMem conditions latent-memory prefixes on a frozen GUI agent's initial action and trains them to correct errors while preserving correct decisions. Its evaluation separates action repairs from harmful revisions.
- [VeriCUA: Learning Proactive Verification for Reliable GUI Agent Rewards](https://awesomecua.github.io/resources/arxiv-2610-26469/) — 2026-10-19
  VeriCUA trains a Judge to select verification checks and stopping decisions while a frozen Probe inspects the post-task GUI. Single-attempt reinforcement learning balances verdict correctness and Probe use.
- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2610-26071/) — 2026-10-19
  CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.github.io/resources/arxiv-2610-20939/) — 2026-10-14
  Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks.
- [Player-1: Learning to Play from Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2610-20584/) — 2026-10-14
  Extends computer-use policies to game control through synthetic training environments and richer keyboard and pointer actions. Its evaluation concerns games rather than ordinary productivity workflows.
- [How GUI Agents Fail: GraceBench for Execution Stability Diagnosis](https://awesomecua.github.io/resources/arxiv-2610-19900/) — 2026-10-14
  Introduces GraceBench, using application transition graphs and recorded interaction evidence to diagnose deviations, loops, and recovery that final task-success scores can hide.
- [CLASHarness: Benchmarking Multi-Agent Conflict in Computer Use via a Controllable and Verifiable Generation Pipeline](https://awesomecua.github.io/resources/arxiv-2610-19128/) — 2026-10-13
  Introduces CLASHarness, generating verifiable computer-use tasks with conflicting agent reports, shared-state constraints, and coordination requirements to evaluate conflict detection and resolution.
- [Interaction-as-a-Judge](https://awesomecua.github.io/resources/arxiv-2610-17895/) — 2026-10-13
  Uses computer-use agents to interact with generated applications, studying whether interaction improves preference judging, requirement checks, and feedback for application generation.
- [BrowseSafe++: Benchmarking Prompt Injection Detection Across Web Contexts, Languages, and Browser Views](https://awesomecua.github.io/resources/arxiv-2610-17457/) — 2026-10-12
  Extends BrowseSafe with paired attacked and clean webpages in several representations, and studies text and screenshot detectors plus feedback-adapted prompt injections.
- [PrivacyGuard: Source-Linked Sanitization and Locally Resolvable PII References for Cloud GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16778/) — 2026-10-12
  Introduces PrivacyGuard, which sanitizes source-linked personal information and maintains locally resolvable references across mobile-agent turns to reduce exposure to remote planners.
- [Learn from Move: the Next Step for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16720/) — 2026-10-12
  Introduces LatentGUIWorld to test learning interface semantics and dynamics through interaction, and studies finer movement actions with intermediate visual feedback and exploration demonstrations.
- [The Agent Clicks Approve: Injected Page Text Makes Browser Agents Authorize Access the Task Never Named](https://awesomecua.github.io/resources/arxiv-2610-15138/) — 2026-10-10
  Studies prompt-injected account-access approvals in browser agents and proposes a service-side authority envelope that checks authorization requests against the user task before allowing them to complete.
- [A Baseline Assessment for the Agentic Web Technology Stack](https://awesomecua.github.io/resources/arxiv-2610-13703/) — 2026-10-09
  Presents MASTIF, a framework for comparing combinations of agent models, protocols, and implementation frameworks on web tasks, with an initial assessment using 300 Mind2Web tasks.
- [CaptchaAgent: Verifiable Visual Reasoning for CAPTCHA Solving](https://awesomecua.github.io/resources/arxiv-2610-12866/) — 2026-10-09
  Presents CaptchaAgent, which builds an explicit visual representation of objects and relations, refines ambiguous regions, and checks counterfactual consistency before acting on interactive CAPTCHAs.
- [When Charts Deceive Web Agents: A Paired Benchmark for Misleading Visualization-Grounded Tasks](https://awesomecua.github.io/resources/arxiv-2610-12823/) — 2026-10-09
  Introduces MisVisAgentBench, a paired executable benchmark that changes chart evidence while holding web tasks fixed, to trace how misleading visualizations affect agent decisions and downstream actions.
- [SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments](https://awesomecua.github.io/resources/arxiv-2610-12611/) — 2026-10-08
  Introduces SoftwareGym, a pipeline that synthesizes runnable GUI applications and iteratively repairs them using execution checks. It also provides a task benchmark and studies whether training on synthesized application trajectories transfers to other computer-use environments.
- [Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11942/) — 2026-10-08
  Presents LGWM, a decoder-free GUI world model that predicts the next screen representation from an action and compares it with the observed state to verify transitions. Its paired diagnostic separates legitimate and hijacked transitions that lead to the same credential screen.
- [AgentHorizon: Evaluating Agentic Judges for Long-Horizon Computer-Use Tasks](https://awesomecua.github.io/resources/arxiv-2610-11050/) — 2026-10-08
  Introduces AgentHorizon, a benchmark for judging long computer-use trajectories using closely related instructions paired with recorded actions and screenshots. It tests whether judges can detect constraint violations and distinguish successful tasks from similar but incompatible requests.
- [Adversarial Images Hijack Web Agents from Visual Grounding to Browser Execution](https://awesomecua.github.io/resources/arxiv-2610-09240/) — 2026-10-07
  Introduces WebMirage, a visual red-teaming framework that models webpage element competition and action post-processing to test whether manipulated grounding decisions lead to executed browser actions.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.github.io/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [Decoupling What from Where: How Should a Small GUI Grounding Model Receive the Action Type?](https://awesomecua.github.io/resources/arxiv-2610-07444/) — 2026-10-05
  Compares ways to condition a small GUI grounding model on action type under matched training conditions on Android in the Wild. The study traces apparent gains to a coordinate-serialization choice and reports limited evidence that the gains persist with predicted action types.
- [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](https://awesomecua.github.io/resources/arxiv-2610-06829/) — 2026-10-05
  Introduces CLIFT, which certifies agent-generated verification signals against training-time judges and reuses them for per-step rewards and trajectory selection. At inference, a frozen question bank helps compare candidate web rollouts without querying an external judge.
- [MedImageOSWorld: Benchmarking GUI Agents for Medical Image Consoles](https://awesomecua.github.io/resources/arxiv-2610-04800/) — 2026-10-03
  Evaluates GUI agents in simulated medical-imaging consoles, separately checking workflow completion and acquisition outcomes against hidden anatomical targets.
- [Control OSWorld: An AI Control Environment for GUI Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2610-03818/) — 2026-10-02
  Pairs OSWorld tasks with harmful side objectives to evaluate monitors that detect malicious behavior in computer-use agent trajectories.
- [Securing Computer-Use Agents Against Branch Steering Attacks](https://awesomecua.github.io/resources/arxiv-2610-03089/) — 2026-10-02
  Introduces STEER-Bench to study branch-steering attacks that manipulate untrusted web data toward hazardous paths already permitted by an agent’s plan. Its COBRA architecture combines trusted branching plans with advance constraints on the parameters and destinations each branch can use.
- [WebUIProof: Benchmarking WebUI Code Generators with UI-Agent Execution Harness](https://awesomecua.github.io/resources/arxiv-2610-02617/) — 2026-10-02
  Introduces an execution-based benchmark for generated web interfaces, with a headless-browser UI-agent harness that checks DOM interactions and functional assertions.
- [Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-01787/) — 2026-10-01
  Studies how to route different parts of GUI experience into model weights or runtime context rather than treating whole trajectories as a single unit. It separates locators, procedures, state facts, and lessons, then predicts their destination from recurrence and dependence on the current state.
- [Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories](https://awesomecua.github.io/resources/arxiv-2610-01491/) — 2026-10-01
  Audits WebArena-Lite outcomes and trajectories with human review to identify automatic-evaluator false negatives and the first consequential execution errors. It also studies explicit execution-state memory and procedural guidance, showing why final task scores can miss substantial differences in agent behavior.
- [cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-40284/) — 2026-09-30
  Standardizes virtual machines, interaction pipelines, and agent interfaces to compare computer-use speed, cost, and task performance.
- [ComputerSD: Online Self-Distillation from Real-Time Feedback for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-40253/) — 2026-09-30
  Introduces ComputerSD, which turns feedback from executed GUI transitions into online self-distillation guidance and step-level scores. A GUI analyzer supplies these signals, which are combined with trajectory-level reinforcement learning in asynchronous training.
- [OSWorld-Science: A Benchmark of Computer Use Agents for Learning and Using Scientific Software](https://awesomecua.github.io/resources/arxiv-2609-39903/) — 2026-09-30
  Benchmarks computer agents on scientific-software workflows with task-specific checks of application states and generated research artifacts.
- [Talk2Agent: Benchmarking Voice Interfaces for Text Agents](https://awesomecua.github.io/resources/arxiv-2609-38867/) — 2026-09-30
  Introduces Talk2Agent, a benchmark of spoken instructions for computer-use tasks that measures whether voice interfaces preserve task-critical information. It pairs human speech with an execution-free intention-based metric and checks how that metric relates to downstream task completion.
- [DIBench: Benchmarking Decision Integrity of GUI-based Mobile Agents Under Deceptive Injections](https://awesomecua.github.io/resources/arxiv-2610-06898/) — 2026-09-29
  Evaluates whether deceptive UI content steers mobile agents away from instruction-consistent choices, using paired benign and injected decision states and decision-integrity metrics.
- [EngiWorld: What Can Frontier Agents Deliver in Professional Engineering Environments?](https://awesomecua.github.io/resources/arxiv-2609-37686/) — 2026-09-29
  Introduces professional engineering tasks across software domains, with GUI and CLI access and artifact checks for geometric, physical, and design validity.
- [MatToolBench: Benchmarking Multimodal Agents in Real-World Materials Science Workflows](https://awesomecua.github.io/resources/arxiv-2609-37053/) — 2026-09-29
  Introduces MatToolBench, a Windows-based materials-science benchmark combining GUI operation, scientific-software scripting, and database queries. Expert-defined subcriteria support partial-credit scoring, while the evaluation examines domain knowledge gaps and cross-tool handoff failures.
- [SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-36939/) — 2026-09-29
  Introduces Spatial Credit Assignment, which uses click coordinates to refine group-relative reinforcement-learning updates for GUI grounding. It distinguishes failed clicks by spatial evidence while leaving the deployed action policy unchanged.
- [AdaptArena: Evaluating Test-Time Personalization of Web Agents](https://awesomecua.github.io/resources/arxiv-2609-36488/) — 2026-09-29
  Introduces AdaptArena to test whether web agents can infer unstated user preferences from relevant past trajectories and carry those preferences into new tasks. Its AdaptiveAgent baseline separates preference-retrieval challenges from failures in downstream web execution.
- [SCOUT: Synergizing Reasoning and Tool-Use for Computer-Use Safety](https://awesomecua.github.io/resources/arxiv-2609-36201/) — 2026-09-28
  Introduces SCOUT, a safety verifier that first derives task-specific completion and safety rubrics from a computer-use trajectory, then actively probes the resulting environment for evidence. It evaluates whether these two stages detect harmful consequences that screenshots alone can miss.
- [WebPageBench: Event-Level Verification and Controlled UI-Variant Generation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-35026/) — 2026-09-28
  Verifies web tasks through typed interface events and generates controlled UI variations while preserving instructions and success conditions.
- [LongPuzzleBench: Evaluating GUI Agents on Long-Horizon Visual Puzzles](https://awesomecua.github.io/resources/arxiv-2609-34769/) — 2026-09-28
  LongPuzzleBench evaluates coherent long-horizon planning on persistent visual puzzle boards through native GUI actions. It compares GUI-only and code-assisted agents and uses controlled hints and memory diagnostics to examine decisions that preserve or eliminate future solutions.
- [One Rollout Is All You Get: Fully Test-Time Adaptation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-34321/) — 2026-09-28
  Defines a test-time adaptation setting with one counted attempt per arriving GUI task and no ground-truth feedback. Its SOLO method filters or relabels completed episodes, then updates a small adapter from a short window of the agent’s own experience.
- [Same Tasks, Different Apps: Why Mobile GUI Agents Fail to Generalize?](https://awesomecua.github.io/resources/arxiv-2609-34139/) — 2026-09-28
  Introduces AnyAppBench, a live Android benchmark that holds user goals fixed while changing the application used to achieve them. It combines category-controlled task pairs with failure annotations to distinguish task understanding from application-specific execution skill.
- [GUITAR: Structured Failure Diagnosis of GUI Agents via State Transitions](https://awesomecua.github.io/resources/arxiv-2609-34113/) — 2026-09-28
  Introduces GUITAR, which groups visually different screens into functional states and analyzes agent failures over a state-transition graph. It uses the resulting bottlenecks to diagnose recurring mobile and web errors and evaluate targeted guidance.
- [AgentTell: Behavioural Side-Channel Leakage in Browser-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-32915/) — 2026-09-26
  Introduces AgentTell, a benchmark for privacy leakage through browser actions after an agent learns a private fact on another website. It examines whether agents choose revealing options despite nondisclosure instructions and whether their final reports accurately describe that behavior.
- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.github.io/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [CUA-SWE: When Computer-Use Agents Meet Visual Software Engineering](https://awesomecua.github.io/resources/arxiv-2609-32600/) — 2026-09-26
  Introduces CUA-SWE, a benchmark and execution environment that combines code changes with graphical interaction and visual inspection of running software. Task-specific tests verify repairs and changes whose required information may be available only through the application interface.
- [DashAct: A Progressive Diagnostic Benchmark for GUI Agents in Interactive Dashboard Analysis](https://awesomecua.github.io/resources/arxiv-2609-32385/) — 2026-09-26
  Diagnoses dashboard-agent failures by progressively restoring interaction context, next-action support, and visual target information within the same task.
- [ScreenHaystack: Finding Blind Zones in GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-32036/) — 2026-09-25
  Moves controlled target icons across high-resolution interfaces to diagnose spatial blind zones in grounding models and study targeted augmentation.
- [The Hard Part Comes After Search: Benchmarking Web Agents on Synthesizing, Organizing, and Displaying Knowledge](https://awesomecua.github.io/resources/arxiv-2609-30604/) — 2026-09-24
  KNOWS benchmarks browser workflows that retrieve and synthesize information into documents, presentations and spreadsheets. Task-specific evaluators combine deterministic checks with model judgments, distinguishing partial progress from usable end-to-end artifact completion.
- [Invisible in Space, Visible in Time: Motion Vision CAPTCHA against GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27461/) — 2026-09-23
  MVCAP-Bench tests live browser CAPTCHAs whose foreground meaning emerges through motion against dynamic backgrounds. A foreground-only control separates temporal camouflage difficulty from answer format and browser interaction.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [CAVEAT: Towards Robust Computer-Use Agents in Incentive-Misaligned Environments](https://awesomecua.github.io/resources/arxiv-2609-27273/) — 2026-09-23
  Introduces CAVEAT, a controlled marketplace benchmark for testing whether delegated agents preserve user objectives when interfaces favor other outcomes. It diagnoses decision failures and studies harness interventions and targeted training to improve resistance to marketplace steering.
- [OSWorld-Pro: Process-based Evaluation for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2609-24890/) — 2026-09-21
  Adds annotated intermediate subgoals to computer-use tasks and uses process-oriented evaluation to identify action and progress failures.
- [How Many Pixels Is a Digit Worth? Place-Aware Coordinate Entropy for GUI Agent Confidence Estimation](https://awesomecua.github.io/resources/arxiv-2609-24277/) — 2026-09-21
  PACE weights coordinate-digit entropy by place value to estimate confidence in GUI clicks from one forward pass. It evaluates correctness ranking and selective accuracy against repeated-sampling alternatives on ScreenSpot-Pro and ScreenSpot-v2.
- [Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://awesomecua.github.io/resources/arxiv-2609-35814/) — 2026-09-20
  BreakingWeb pairs solvable browser tasks with controlled environment interventions that preserve the goal, target and backend success criterion. The paired evaluations isolate robustness failures, including agents declaring completion without the required state change.
- [RecreationWorld: Scalable and Verifiable Environments for Hybrid Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22000/) — 2026-09-18
  RecreationWorld gives hybrid agents running reference applications to explore and recreate using native GUI controls and coding tools. Its multi-platform benchmark checks interaction-dependent behavior with programmatic and visual assertions, while trajectory-training transfer is evaluated separately.
- [A Dual-Process Perspective on Nudge Susceptibility in LLM-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-19843/) — 2026-09-17
  Studies how automatic defaults and reflective social-influence cues affect GUI-agent shopping decisions under different reasoning configurations. A randomized simulated-shopping experiment finds that reasoning changes the type of susceptibility rather than uniformly removing interface influence.
- [EconSkills: Studying Skill Transfer and Retrieval for Web Agents on Live Economic Data](https://awesomecua.github.io/resources/arxiv-2609-19523/) — 2026-09-17
  EconSkills converts verified economic-data browsing traces into parameterized procedures with navigation, verification and recovery guidance. Its evaluation separates known-skill transfer from library retrieval, exposing the limits of approximate matches to new tasks.
- [ERPBench: A State-Grounded Evaluation Paradigm for Computer-Use Agents in Enterprise Software](https://awesomecua.github.io/resources/arxiv-2609-17885/) — 2026-09-15
  ERPBench evaluates screenshot-only agents in enterprise software using database values to check the business records produced by their actions. It pairs these state-based checks with a harness for human approval and analyzes cases where visible completion masks incorrect persisted data.
- [When Agents See Differently: Exposing UI Desynchronization Threats in Mobile Agents](https://awesomecua.github.io/resources/arxiv-2609-16732/) — 2026-09-15
  Investigates mismatches between what humans see on a mobile display and what agents receive through screenshots or accessibility metadata. An automated evaluation framework embeds instruction-agnostic perturbations into functional APK clones and compares static and dynamic agent deviations with human noticeability.
- [CADWorld: Computer-Use Benchmark for Long-Horizon Computer-Aided Design](https://awesomecua.github.io/resources/arxiv-2609-16251/) — 2026-09-14
  CADWorld evaluates screenshot-and-GUI agents on long FreeCAD workflows, from modeling and assembly to manufacturing and simulation. Executable checks inspect saved engineering artifacts for geometry, constraints, construction structure and downstream state.
- [Learning from Reliable Negatives: Confidence-Anchored Test-Time Adaptation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-15307/) — 2026-09-14
  Confidence-Anchored Learning uses coordinate-token confidence to filter pseudo-supervision for GUI grounding. Its negative-only variant performs label-free test-time updates to reduce reliance on potentially incorrect positive examples.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](https://awesomecua.github.io/resources/arxiv-2609-10451/) — 2026-09-09
  JarvisGUI composes typed input-output task transformations into dynamic workflows spanning Android, Windows and Ubuntu devices. Its virtual-environment benchmark tests transfer of intermediate results, shared state and cross-device dependencies.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.github.io/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-07712/) — 2026-09-07
  Introduces controlled simulated mobile apps with deterministic backend data and outcome checks for reproducible evaluation of realistic interactions.
- [AgentHijack: Visual Patch Attacks on Multimodal Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-09212/) — 2026-09-06
  AgentHijack evaluates whether visual patch effects propagate from screenshots through model outputs and action parsing into real environment changes. Its controlled web-page experiments distinguish intermediate attack signals from verified end-to-end consequences.
- [From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-04869/) — 2026-09-04
  An online skill-evolution framework turns GUI interaction traces and evaluator feedback into a versioned library of reusable procedures without updating model parameters. Controlled OSWorld comparisons examine both the benefits of shared procedural memory and its domain-dependent instability under repeated revision.
- [ElderBench: Benchmarking Autonomous Mobile Agents for Older Adults](https://awesomecua.github.io/resources/arxiv-2609-04850/) — 2026-09-04
  ElderBench evaluates mobile GUI agents on smartphone requests elicited from older adults, including indirect and underspecified language. Online and offline tests, instruction normalization and linguistic analyses examine how these request patterns contribute to failures.
- [Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-03438/) — 2026-09-03
  CONFLICTGUI evaluates termination under instruction conflicts and mismatches between instructions and interface context. CONFLICTGUARD couples feasibility checks with conditional action modulation to reduce unnecessary execution while tracking normal-task behavior.
- [Discriminative World Models for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [WiP: Characterizing and Defending Against Mobile-Agent-Driven MFA Automation](https://awesomecua.github.io/resources/arxiv-2609-02154/) — 2026-09-02
  Studies how mobile automation can combine authentication factors within one agent environment and evaluates motion sensing as a user-presence signal.
- [Monitoring Web Agents Without Internal Signals: Observable Trajectories and Key-Step Supervision](https://awesomecua.github.io/resources/arxiv-2609-02057/) — 2026-09-02
  Predicts web-agent failure risk from observable trajectory prefixes using cross-step behavior and black-box consistency queries. Key-step labels preserve valid early prefixes of failed runs, and evaluation tests early intervention and transfer across website categories.
- [Are We There Yet? Assessing Computer-Use Agents for Blind Users' Accessible Interaction with Desktop Applications](https://awesomecua.github.io/resources/arxiv-2609-00524/) — 2026-09-01
  A diary study deploys the screen-reader-accessible OLLA computer-use prototype with blind users across desktop applications. Recorded commands and interaction traces support model comparisons and analysis of grounding, planning, constraint tracking and termination failures.
- [SIR: Self-improving Red-teaming for Compute Use Agents](https://awesomecua.github.io/resources/arxiv-2608-30207/) — 2026-08-31
  Introduces SIR, which iteratively refines a reusable library of prompt-injection strategies from failed computer-use attack trajectories. Its evaluation uses deterministic system-state checks and counts attacks only when the adversarial objective and legitimate task both complete.
- [GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments](https://awesomecua.github.io/resources/arxiv-2609-00048/) — 2026-08-30
  Introduces GUI-CC, a benchmark for assessing GUI world models as multi-step agent environments. Separate reference-action and agent-loop tracks test whether generated screens preserve context, plausible transitions, and task progress throughout interaction.
- [ActReal: System-Level Mobile Agents Challenge Mobile Automation Detection](https://awesomecua.github.io/resources/arxiv-2608-30038/) — 2026-08-30
  Introduces ActReal, which translates semantic mobile-agent actions into coordinated touch and sensor signals to study automation-detection weaknesses. It evaluates detectors that observe touch events alone or together with inertial measurements under a privileged executor threat model.
- [CURA: Certified Runtime Alarms for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-27808/) — 2026-08-28
  Introduces CURA, a telemetry-based runtime monitor that turns computer-use trajectories into sequential failure alarms and can trigger mid-task oversight. Its certificate controls false alarms, while the study separately reports detection performance and limits of retrospective monitoring.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [ADeptS-Bench: Measuring the Trustworthiness of Computer Use Agents Across Devices](https://awesomecua.github.io/resources/arxiv-2608-26204/) — 2026-08-25
  Evaluates interface-embedded threats and whether computer-use agents seek clarification when mobile or desktop instructions are ambiguous.
- [Task-Adaptive Rubrics for GUI Reward Modeling](https://awesomecua.github.io/resources/arxiv-2608-24174/) — 2026-08-25
  Introduces AdaptRubric, which retrieves reusable criteria for a GUI task family and then generates instruction-specific checks for concrete values and constraints. It evaluates these adaptive rubrics in offline reward assessment and online agent optimization.
- [Are Android GUI Agents Robust Against Runtime Anomalies? AnTrap: Evaluating Agents in Dynamic Adversarial Environments](https://awesomecua.github.io/resources/arxiv-2608-24099/) — 2026-08-25
  Introduces AnTrap, which injects task-solvable runtime anomalies into Android GUI-agent trajectories using a layered failure taxonomy. It compares model robustness and adversarial reinforcement learning to distinguish recoverable interface traps from persistent contextual failures.
- [GUI-Primitives: Diagnosing Spatial Reasoning Failures in Vision-Language GUI Grounding](https://awesomecua.github.io/resources/arxiv-2608-21832/) — 2026-08-22
  Introduces GUI-Primitives, a paired-instruction benchmark that changes a spatial relation while holding the screenshot and anchor fixed. Its diagnostics separate failure to localize either candidate from failure to choose the candidate satisfying the relation.
- [Lexical Coupling in GUI Element Grounding: Sentence Embeddings Track Labels across Mobile and Web](https://awesomecua.github.io/resources/arxiv-2608-21794/) — 2026-08-22
  Studies whether text-embedding GUI grounding scores reflect semantic matching or recovery of visible labels. Same-screen ranking comparisons with lexical baselines expose differences between deployable fusion, oracle selection, and performance on label-poor targets.
- [ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-18307/) — 2026-08-18
  ComponentBench evaluates short interactions with canonical web UI components using verified tasks and matched human reference trajectories. Its diagnostic pipeline compares observation/action representations and analyzes structural difficulty, failure patterns and interaction efficiency.
- [MobileWorldSafety: Benchmarking GUI Agent Safety Against Environmental Injection Attacks in Android Apps](https://awesomecua.github.io/resources/arxiv-2608-17659/) — 2026-08-18
  Evaluates environmental injection risks in Android tasks using programmatic risk checks and model-based adjudication of ambiguous cases.
- [Improving LLM-based Autonomous Web Agents with Filtering](https://awesomecua.github.io/resources/arxiv-2609-27770/) — 2026-08-16
  Trains HTML-element relevance filters on Mind2Web trajectories and transfers them to WebArena to reduce irrelevant browser context. It also evaluates a zero-shot ColBERT retriever and documents baseline web-agent failure modes.
- [Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions](https://awesomecua.github.io/resources/arxiv-2608-14132/) — 2026-08-14
  Introduces intention understanding, prediction, and confirmed execution tasks over mobile GUI trajectories, with a proactive agent combining personalized intention models and experience-guided actions.
- [LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows](https://awesomecua.github.io/resources/arxiv-2608-14131/) — 2026-08-14
  LegacyWorld evaluates Windows GUI workflows under an atomicity criterion: finish correctly or fail without persistent unintended changes. It compares expert prompts with prompts derived from recorded golden paths and separates useful completion, safe failure and non-atomic side effects.
- [Benchmarking LLM Judges for Mobile Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2608-11434/) — 2026-08-11
  MobileJudgeBench compares completion judges against human labels on mobile-agent trajectories. It studies screenshot-sampling baselines, model-dependent error profiles and how judge quality relates to agent rankings and reinforcement-learning rewards.
- [DSAgentBench: Can Agents Automate End-to-End Data-Science Workflows in Real Computer Environments?](https://awesomecua.github.io/resources/arxiv-2608-10366/) — 2026-08-11
  DSAgentBench evaluates end-to-end data-science workflows spanning analysis, modeling and visualization inside a real desktop environment. Task evaluators check produced analytical and visual artifacts, while the released interface supports screenshot or accessibility observations and GUI actions.
- [Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching](https://awesomecua.github.io/resources/arxiv-2608-09654/) — 2026-08-10
  This framework separates frozen-model instruction expansion from a trained layout-aware matcher that localizes GUI elements without coordinate regression. Binary text/icon supervision supports the matcher, with evaluations on GUI grounding and Mind2Web element-selection tasks.
- [CAP: A Scalable Benchmark for Evaluating Cross-Site Browser Agents with Complex Actions and Perception](https://awesomecua.github.io/resources/arxiv-2608-08392/) — 2026-08-09
  CAP builds cross-site browser workflows by decomposing websites into operation and perception requirements and recomposing them into tasks. Its judge-based evaluation diagnoses complex interactions and visual-perception failures across real websites.
- [RealGUINoise: An Interactive Cross-Platform Benchmark for GUI Agent Robustness under Real-World Interface Noise](https://awesomecua.github.io/resources/arxiv-2609-38184/) — 2026-08-07
  Evaluates interactive GUI agents under varied realistic interface noise, comparing task completion, safety, and behavior with clean-environment runs.
- [AndroidReality: How Far Are Mobile Agents from the Real World?](https://awesomecua.github.io/resources/arxiv-2608-07775/) — 2026-08-07
  Extends AndroidWorld with controlled state, transition, and action perturbations to test mobile-agent robustness, and studies a training-free introspective recovery mechanism.
- [Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-06171/) — 2026-08-06
  Measures the complementarity, cost and rerun variability of six browser observation modes on WebArena and VisualWebArena. Its routing experiments distinguish an oracle cost opportunity from policies that fail to robustly outperform a fixed observation mode.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- ["Allow" to Achieve, Over-Privileged Inadvertently: The Unintended Cost of Task-Completion-Driven Pop-up Decisions in Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-04755/) — 2026-08-05
  This permission-literacy study tests whether mobile GUI agents grant only task-necessary permissions. Controlled changes to task context and requester identity expose authorization biases and the trade-off between suppressing unnecessary and legitimate grants.
- [LoginTrap: Uncovering Task-Agnostic Phishing-Style Indirect Prompt Injection Attacks against LLM-based Web Agents](https://awesomecua.github.io/resources/arxiv-2608-04741/) — 2026-08-05
  Introduces LoginTrap, a black-box indirect-injection evaluation in which attacker-controlled page context and login flows induce unauthorized authentication. It measures end-to-end private-data leakage across web-agent backbones, architectures and defenses.
- [MissClick: Execution-Aware Adversarial Attacks on Coordinate Generation in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2608-03740/) — 2026-08-04
  MissClick designs white-box attacks around the numerical effect of coordinate digits on executable GUI clicks. Separate untargeted displacement and targeted place-weighted objectives are evaluated across desktop, web and mobile grounding settings.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [GUI-Lens: Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs](https://awesomecua.github.io/resources/arxiv-2608-03270/) — 2026-08-04
  GUI-Lens uses OCR and detected interface components as coordinate references while a general-purpose VLM selects progressively enlarged screenshot crops. Instruction-conditioned checks constrain the crop and click proposals before mapping the final location back to the original screen.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.github.io/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](https://awesomecua.github.io/resources/arxiv-2607-28609/) — 2026-07-30
  Introduces OSReward and its harder and multidimensional variants for assessing judgments of computer-use trajectories. It also releases a reasoning-annotated judgment corpus and trains reward models, examining reliability, leniency bias, and evaluation cost.
- [Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](https://awesomecua.github.io/resources/arxiv-2607-28573/) — 2026-07-30
  Examines inference-time scaling for local computer-use models by varying context, step budgets, decomposition, and parallel execution. OSWorld experiments track both task performance and changing failure modes, exposing cases where extra computation extends errors or adds coordination overhead.
- [How Benchmarks Mis-Score Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-28367/) — 2026-07-30
  Audits failure-scored computer-use trajectories to distinguish agent errors from broken tasks and evaluator false negatives. It organizes reliability issues across task construction, trajectory evidence, scoring, and reporting, then derives corresponding evaluation design practices.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.github.io/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](https://awesomecua.github.io/resources/arxiv-2607-25904/) — 2026-07-28
  Introduces an Interactive Reward Agent that proposes completion conditions and verifies them using system, application, and GUI tools after execution. GUI-RewardBench provides annotated desktop trajectories for evaluating these evidence-based judgments and their use in reinforcement learning.
- [SeekJudge: A Practical Reward Framework for Reinforcement Learning in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-23263/) — 2026-07-25
  Introduces SeekJudge, which iteratively searches and analyzes GUI trajectories to assess instruction fulfillment. The work combines dense judgment-data synthesis, a step-label benchmark, and reward-server scheduling to study accurate and practical reward feedback for agent training.
- [Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents](https://awesomecua.github.io/resources/arxiv-2607-18659/) — 2026-07-21
  Measures how autonomous LLM browser agents interact with commercial bot-management and anti-automation defenses on the web.
- [EvoGUI: An Evolution-Aware Benchmark for GUI State-Transition Understanding](https://awesomecua.github.io/resources/arxiv-2607-17050/) — 2026-07-19
  Introduces EvoGUI, which derives temporal ordering, inverse action/value prediction, and successor-discrimination probes from recorded GUI trajectories. Its web-derived benchmark isolates transition understanding from the other abilities involved in end-to-end task success.
- [Beyond Sequential Interaction: Benchmarking Parallel Execution and Coordination for GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-22689/) — 2026-07-17
  Introduces ParaGUIBench, with tasks and efficiency measurements for coordinated GUI agents operating separate desktop instances over a shared file system. Its ParaGUI planner-worker system decomposes tasks and dispatches concurrent subtasks for comparison with serial execution.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.github.io/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [A Learning-Rate-Gated Failure of GRPO in a Small Language and Vision-Language Model Web Agent: A Controlled Null and Its Mechanism](https://awesomecua.github.io/resources/arxiv-2607-12640/) — 2026-07-14
  Studies a controlled setting where GRPO fails to improve a strong small web agent and can reduce text-track performance. Matched reachable-reward tasks and component grafting distinguish limited optimization headroom from learning-rate-dependent failure mechanisms.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.github.io/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.github.io/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [WebRetriever: A Large-Scale Comprehensive Benchmark for Efficient Web Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2607-06118/) — 2026-07-07
  WebRetriever evaluates navigation, knowledge-assisted interaction and end-to-end information-extraction workflows under separate protocols. Its NavEval judge uses richer interaction context to diagnose cases where navigation success does not translate into useful task completion.
- [Agent Data Injection Attacks are Realistic Threats to AI Agents](https://awesomecua.github.io/resources/arxiv-2607-05120/) — 2026-07-06
  This study examines agent data injection, where untrusted content impersonates trusted metadata or tool-context data. It reports arbitrary-click vulnerabilities in web agents alongside separate coding-agent attacks, highlighting trust-boundary failures beyond instruction injection.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.github.io/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [Navigation Alone Is Not Enough: Evaluating Explanatory Assistive UI Agents](https://awesomecua.github.io/resources/arxiv-2608-09944/) — 2026-07-01
  Introduces NeXUI, an assistive UI-agent benchmark that evaluates navigation together with interface-grounded explanations and user oversight in recorded interface states.
- [DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching](https://awesomecua.github.io/resources/arxiv-2606-31980/) — 2026-06-30
  DigitalCoach records expert–novice software coaching conversations aligned with screen and input events. Automated and interactive evaluations examine how model coaches differ from humans in explanation, error diagnosis and visual grounding when helping a learner operate software.
- [Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-31270/) — 2026-06-30
  Uses failed computer-use trajectories to diagnose failure modes and generate inference-time agent code patches, with light human verification. An OSWorld study evaluates this failure-driven improvement loop without additional model training.
- [On the Internet, Nobody Knows You're an LLM Bot: Unmasking Web Agents with Multi-Layer Fingerprinting](https://awesomecua.github.io/resources/arxiv-2606-30119/) — 2026-06-29
  Evaluates web agents against anti-bot mechanisms on instrumented honeysites and analyzes network, HTTP and browser fingerprints. The study compares resistance to blocking with the ability to distinguish agents, humans and agent implementations.
- [One Forward Beats Two: InnerZoom for Accurate and Efficient GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-30084/) — 2026-06-29
  InnerZoom preserves target-region cues from intermediate decoder layers and reinjects a compact evidence state during coordinate decoding. Its single-forward GUI grounder is compared with crop-and-rerun zooming and matched supervised/RL baselines for accuracy and inference cost.
- [OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks](https://awesomecua.github.io/resources/arxiv-2606-29537/) — 2026-06-28
  Introduces extended computer-use workflows with realistic artifacts, changing information, hidden state, and partial-progress and safety assessments.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.github.io/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-28480/) — 2026-06-26
  TUA-Bench evaluates terminal-use agents on general digital tasks, including document editing, email, web information seeking and specialist software workflows. Tasks run in real terminals with deterministic setup and execution-based scoring.
- [Uncertainty Quantification for Computer-Use Agents: A Benchmark across Vision-Language Models and GUI Grounding Datasets](https://awesomecua.github.io/resources/arxiv-2606-25760/) — 2026-06-24
  Argus benchmarks post-hoc uncertainty methods for single-step GUI grounding across open-weight and closed-source observation regimes. It tests calibration, rejection, error severity and conformal click regions, finding that uncertainty rankings transfer less reliably across model/interface regimes than across datasets for one model.
- [VisCritic: Visual State Comparison as Process Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-24525/) — 2026-06-23
  VisCritic compares before/after screenshots through change-aware visual features and an action-conditioned critic. Weakly supervised samples from existing traces train judgments of action success, progress and error type for GUI-agent verification.
- [Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation](https://awesomecua.github.io/resources/arxiv-2606-24515/) — 2026-06-23
  The framework uses a vision-language judge’s final-screen assessment as a terminal reward for GUI reinforcement learning. It models evaluator noise and corrects the reward estimator used by PPO across desktop benchmarks.
- [GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-24551/) — 2026-06-22
  This benchmark matches desktop goals, initial states and final-state verifiers across screen-only GUI and skill-mediated CLI agents. Its experiments separate graphical execution failures from missing CLI skill coverage, including a verifier-guided skill-augmentation condition.
- [Capable but Careless: Do Computer-Use Agents Follow Contextual Integrity?](https://awesomecua.github.io/resources/arxiv-2606-23189/) — 2026-06-22
  AgentCIBench evaluates whether computer-use agents disclose information in ways that violate its original context. Deterministically scored scenarios test nearby sensitive UI content, ambiguous requests and recipient mismatches, including end-to-end agent execution.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [MacAgentBench: Benchmarking AI Agents on Real-World macOS Desktop](https://awesomecua.github.io/resources/arxiv-2606-22557/) — 2026-06-21
  Introduces macOS tasks spanning GUI and command-line interaction, with deterministic checks and intermediate-progress scoring for application workflows.
- [ChainWorld: Composing Long-Horizon Desktop Workloads from Atomic OSWorld Tasks](https://awesomecua.github.io/resources/arxiv-2606-21654/) — 2026-06-19
  ChainWorld composes compatible atomic OSWorld tasks into multi-objective desktop chains while preserving their evaluators. It compares giving the full sequence at once with revealing goals turn by turn, exposing different state and session-management failures.
- [Whose Agent Are You? Multi-Layer Fingerprinting and Attribution of Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2606-20910/) — 2026-06-18
  Builds a logging framework that combines network/protocol fingerprints with browser interaction behavior to attribute web-agent traffic. A decision-tree classifier is evaluated across six agent implementations, human browsing and conventional crawlers.
- [Fara-1.5: Scalable Learning Environments for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-20785/) — 2026-06-18
  Builds browser-agent training trajectories with live and synthetic environments, solvers, user simulation, and complementary correctness and efficiency verifiers.
- [Automating SKILL.md Generation for Computer-Using Agents via Interaction Trajectory Mining](https://awesomecua.github.io/resources/arxiv-2606-20363/) — 2026-06-18
  Segments and clusters GUI trajectories into inspectable skills, then trains a skill-aware policy from those annotations. Its diagnostic results distinguish readable source-domain clusters from reliable transfer and report limited or absent downstream gains.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.github.io/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [HANSEL: Extracting Breadcrumbs from Web Agent Trajectories for Interactive Verification](https://awesomecua.github.io/resources/arxiv-2606-18671/) — 2026-06-17
  HANSEL extracts evidence pages and snippets from browser-agent traces and preserves relevant page state in interactive verification views. It flags untraceable answers and evaluates evidence selection and human verification effort separately.
- [MIRAGE: Stealthy Visual Prompt Injection for Vulnerability Detection in Web Agents](https://awesomecua.github.io/resources/arxiv-2606-20717/) — 2026-06-16
  MIRAGE evaluates targeted next-action hijacking from adversarial images restricted to legitimate third-party webpage regions. It combines diffusion-based image generation with execution-aware optimization and tests the constrained visual-injection setting on web-agent frameworks.
- [Beyond the GUI Paradigm: Do Mobile Agents Need the Phone Screen?](https://awesomecua.github.io/resources/arxiv-2606-19388/) — 2026-06-16
  This study compares general coding agents using mobile command-line access with reproducible GUI agents on AndroidWorld and MobileWorld. It also supplies oracle CLI analyses and a separate task suite for operations such as bulk changes, filtering and hidden device state.
- [Trust the Right Teacher: Quality-Aware Self-Distillation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-18101/) — 2026-06-16
  Proposes quality-aware self-distillation for GUI coordinate generation under student-produced prefixes. A correctness-aware gate suppresses coordinate-token supervision that cannot reach the target box, while teacher-probability scaling adjusts the remaining signal strength.
- [ProCUA-SFT Technical Report](https://awesomecua.github.io/resources/arxiv-2606-17321/) — 2026-06-15
  ProCUA-SFT generates tasks and synthetic trajectories on live desktops seeded with document content, checking task preconditions before rollout. The resulting step-prefix examples are formatted to match inference context and used for supervised GUI-agent fine-tuning.
- [LabOSBench: Benchmarking Computer Use Agents for Scientific Instrument Control](https://awesomecua.github.io/resources/arxiv-2606-16802/) — 2026-06-15
  LabOSBench evaluates GUI agents on browser-based scientific instrument simulators with configurable tasks and execution-based checks. Its subtask and end-to-end tests examine feedback-driven adjustment and long workflows without controlling physical instruments.
- [MyPCBench: A Benchmark for Personally Intelligent Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-16748/) — 2026-06-15
  MyPCBench tests personal-assistant tasks on a Linux desktop with simulated web applications and data for a single fictional persona. A shared computer-and-shell interface enables evaluation of cross-application workflows that depend on personal context and account-like state.
- [FraudSMSWalker: Benchmarking Agentic Large Language Models for SMS-to-Webpage Fraud Detection](https://awesomecua.github.io/resources/arxiv-2606-16659/) — 2026-06-15
  FraudSMSWalker tests browser agents on bilingual SMS-to-webpage fraud judgments while hiding URL and reputation shortcuts. Its controlled chains include difficult benign login/payment cases and evaluate whether classifications remain supported by the visible message and page evidence.
- [OSGuard: A Benchmark for Safety in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-15034/) — 2026-06-13
  Evaluates action-level guardrails and full computer tasks with environment-dependent safety constraints, separating safe completion from nominal success.
- [Are Online Skill and Memory Modules Always Worth Their Tokens? A Budget-Constrained Study of Web Agents](https://awesomecua.github.io/resources/arxiv-2606-15017/) — 2026-06-12
  Compares online skill and memory augmentations with a vanilla web agent given the same total inference-token budget. Across WebArena and WorkArena settings, it studies when module overhead removes aggregate gains and how rerun variability changes conclusions.
- [PhoneHarness: Harnessing Phone-Use Agents through Mixed GUI, CLI, and Tool Actions](https://awesomecua.github.io/resources/arxiv-2606-14832/) — 2026-06-12
  PhoneHarness routes phone workflows across GUI actions, device-side commands and host tools while retaining auditable execution traces. Its accompanying benchmark checks observable task side effects, separating mixed-action execution from plausible final-answer generation.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents](https://awesomecua.github.io/resources/arxiv-2606-13385/) — 2026-06-11
  StakeBench evaluates prompt-injection harm to different stakeholders in shopping web-agent workflows. Its executable cases separate attack objectives and assess both outcomes and execution processes to reveal how the same attack pattern can affect different parties.
- [ComAct: Reframing Professional Software Manipulation via COM-as-Action Paradigm](https://awesomecua.github.io/resources/arxiv-2606-13239/) — 2026-06-11
  ComAct proposes COM program synthesis as an alternative interface for manipulating professional software and introduces ComCADBench with GUI-based comparison agents. ComActor adds a staged training and correction approach, supported by a Windows-container training platform.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields](https://awesomecua.github.io/resources/arxiv-2606-11042/) — 2026-06-09
  Workflow-GYM evaluates long GUI workflows in professional software rather than isolated interface actions. Its analysis examines failures such as omitted stages, accumulated errors and goal drift during specialized end-to-end work.
- [iOSWorld: A Benchmark for Personally Intelligent Phone Agents](https://awesomecua.github.io/resources/arxiv-2606-09764/) — 2026-06-08
  Introduces a native iOS simulator benchmark with persistent user data, multi-app tasks, and personalization-dependent phone workflows.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces](https://awesomecua.github.io/resources/arxiv-2606-09426/) — 2026-06-08
  WeaveBench requires agents to combine GUI, command-line and code operations within long tasks on an Ubuntu desktop. A trajectory-aware judge checks deliverables and interaction evidence, including shortcut behavior that outcome-only grading can miss.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [MacArena: Benchmarking Computer Use Agents on an Online macOS Environment](https://awesomecua.github.io/resources/arxiv-2606-06560/) — 2026-06-04
  MacArena runs computer-use tasks through Apple’s virtualization framework on Apple Silicon, combining task ports with macOS-native workloads. It distinguishes the ported and native subsets when examining agent performance and cross-platform transfer.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.github.io/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [Domain-Conditioned Safety in Frontier Computer-Using Agents: A 793-Episode Browser Benchmark, a Coding-Domain Cross-Reference, and a Reproducibility Audit of Recent Red-Teaming](https://awesomecua.github.io/resources/arxiv-2606-05233/) — 2026-06-03
  Introduces CUA-HandCrafted, a browser-agent red-teaming benchmark that varies attack templates, tasks and system prompts. Its domain comparison and reproducibility audit caution against transferring browser-surface safety conclusions to coding agents or unreleased optimized injections.
- [Benchmarking Living-Screen-Native GUI Agents on Short-Video Platforms](https://awesomecua.github.io/resources/arxiv-2606-04701/) — 2026-06-03
  LivingScreen evaluates agents in a browser-based short-video environment where observing content consumes time and affects subsequent actions. Its task suite scores accuracy together with information efficiency to diagnose over- and under-observation on continuously changing screens.
- [MedCUA-Bench: A Screenshot-Only Benchmark for Clinical Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-03203/) — 2026-06-02
  MedCUA-Bench evaluates screenshot-only clinical interface workflows using paired intent- and step-level goals. It combines reconstructed medical interfaces with completion and clinical-safety checks, and separately reports results on a real OpenEMR system.
- [DeskCraft: Benchmarking Desktop Agents on Professional Workflows and Human-in-the-Loop Collaboration](https://awesomecua.github.io/resources/arxiv-2606-03103/) — 2026-06-02
  DeskCraft evaluates professional desktop workflows and human-agent collaboration through mid-execution clarification, interruption and post-completion feedback. Its tasks cover creative applications and expose difficulties in long-horizon execution and proactive clarification.
- [GUI-SAGE: Enhancing GUI Automation with Self-Explanatory Learning](https://awesomecua.github.io/resources/url-beb8f1fd6b945ffc9d93/) — 2026-06
  GUI-SAGE generates reasoning conditioned on known actions and weights policy updates using confidence and reward signals. Its experiments use AndroidControl and GUIOdyssey data and separately evaluate interactive AndroidWorld tasks.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [MaskClaw: Edge-Side Personalized Privacy Arbitration for GUI Agents with Behavior-Driven Skill Evolution](https://awesomecua.github.io/resources/arxiv-2605-28646/) — 2026-05-27
  MaskClaw makes local Allow, Mask or Ask decisions before GUI screenshots leave a trusted environment, using visual evidence and personalized policy memory. Its benchmark and designed evolution scenarios test how corrections and edits can become privacy skills checked by a sandbox gate.
- [GUI Agents for Continual Game Generation](https://awesomecua.github.io/resources/arxiv-2605-28258/) — 2026-05-27
  PlaytestArena evaluates generated browser games using expected in-play behaviors adjudicated by GUI agents. Play2Code pairs a coding agent with a rubric-blind GUI playtester whose interaction traces and feedback guide iterative refinement, with a separate final judge.
- [MIRAGE: Context-Aware Prompt Injection against Mobile GUI Agents via User-Generated Content](https://awesomecua.github.io/resources/arxiv-2605-28116/) — 2026-05-27
  MIRAGE constructs mobile screenshot injections in ordinary user-content regions through localization, contextual payload generation and realism curation. Its evaluation separates visual realism from attack effectiveness against pixel-observing GUI agents.
- [Darwin Mobile Agent: A Roadmap for Self-Evolution](https://awesomecua.github.io/resources/arxiv-2606-20622/) — 2026-05-26
  Describes asynchronous reinforcement-learning infrastructure using parallel cloud-hosted Android instances, explicit task lifecycles, and persistent-state management for mobile GUI interaction.
- [AndroidDaily: A Verifiable Benchmark for Mobile GUI Agents on Real-World Closed-Source Applications](https://awesomecua.github.io/resources/arxiv-2605-27761/) — 2026-05-26
  AndroidDaily evaluates mobile GUI agents on daily workflows in closed-source Android apps. Its GRADE evaluator follows visual trajectories against operational obligations, output-quality requirements and negative constraints, producing process-level diagnostics without hidden app state.
- [MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research](https://awesomecua.github.io/resources/arxiv-2605-26114/) — 2026-05-25
  Introduces MobileGym, a browser-hosted simulation of mobile app interactions whose configurable JSON state supports deterministic judging and parallel rollouts. MobileGym-Bench adds parameterized tasks, with experiments examining online training and transfer to real devices.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.github.io/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [ScaleWoB: Guiding GUI Agents with Coding Agents via Large-Scale Environmental Synthesis](https://awesomecua.github.io/resources/arxiv-2605-25160/) — 2026-05-24
  Introduces ScaleWoB, which synthesizes interactive GUI environments as backend-free webpages with verifiable rewards. Its mobile-oriented benchmark evaluates agent execution and compares selected synthetic tasks with real-app behavior.
- [VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents](https://awesomecua.github.io/resources/arxiv-2605-26144/) — 2026-05-22
  VISTA evaluates coding agents that turn design handoffs into working web and Android applications. Its evaluator locates annotated interactive components and probes their behavior, keeping visual localization distinct from functional correctness.
- [OpenComputer: Verifiable Software Worlds for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-19769/) — 2026-05-19
  Introduces OpenComputer, which builds desktop tasks around application-state verifiers and refines those verifiers using execution feedback. An evaluation harness records trajectories and assigns auditable partial credit across professional software workflows.
- [MementoGUI: Learning Agentic Multimodal Memory Control for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18652/) — 2026-05-18
  MementoGUI learns a controller for selecting, compressing and retrieving textual and region-level visual memories while leaving the GUI-agent backbone fixed. It also converts computer-use traces into controller training data and evaluates semantic actions, progress and memory consistency on long-horizon tasks.
- [DocOS: Towards Proactive Document-Guided Actions in GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18048/) — 2026-05-18
  DocOS benchmarks agents that search online documentation and translate procedural instructions into GUI actions in interactive web environments. It separates failures to retrieve useful procedures from failures to ground retrieved instructions into executable actions.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.github.io/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.github.io/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [WinDeskGround: A Benchmark for Robust GUI Grounding in Complex Multi-Window Desktop Environments](https://awesomecua.github.io/resources/arxiv-2605-16402/) — 2026-05-13
  WinDeskGround synthesizes multi-window desktop layouts with controlled occlusion, density and semantic similarity to test GUI grounding robustness. Its instruction-target benchmark measures how localization changes when interfaces depart from simple single-layer scenes.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.github.io/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.github.io/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [How Mobile World Model Guides GUI Agents?](https://awesomecua.github.io/resources/arxiv-2605-10347/) — 2026-05-11
  Compares mobile world models that predict state changes as delta text, full text, images or renderable code. Downstream Android benchmarks examine synthetic training trajectories and test-time guidance, including limits of post-action reflection.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.github.io/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [Don't Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2605-09497/) — 2026-05-10
  DUDE combines asymmetric hybrid-reward learning with summaries of deceptive-interface failures to guide safer web actions. Its RUC benchmark evaluates deception susceptibility alongside ordinary task performance across interface scenarios.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.github.io/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [WAAA! Web Adversaries Against Agentic Browsers](https://awesomecua.github.io/resources/arxiv-2605-05509/) — 2026-05-06
  Evaluates agentic browsers against classical web attacks and visual social-engineering lures beyond indirect prompt injection.
- [A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction](https://awesomecua.github.io/resources/arxiv-2605-00551/) — 2026-05-01
  A11y-Compressor transforms linearized accessibility trees through modal detection, redundancy reduction and semantic structuring. Its OSWorld evaluation measures both observation-token reduction and task success.
- [Exploring LLM Agent Designs and Interaction Modalities for Scientific Visualization](https://awesomecua.github.io/resources/arxiv-2604-27996/) — 2026-04-30
  This study compares specialized, computer-use and coding agents on scientific visualization workflows. It examines GUI, CLI, code and tool-call interaction modes, including how persistent memory changes performance across repeated trials.
- [WindowsWorld: A Process-Centric Benchmark of Autonomous GUI Agents in Professional Cross-Application Environments](https://awesomecua.github.io/resources/arxiv-2604-27776/) — 2026-04-30
  Introduces WindowsWorld for professional workflows spanning multiple desktop applications, with generated tasks refined through human review. Intermediate subgoals support process-oriented evaluation of cross-application reasoning and execution efficiency.
- [AutoSurfer -- Teaching Web Agents through Comprehensive Surfing, Learning, and Modeling](https://awesomecua.github.io/resources/arxiv-2604-27253/) — 2026-04-29
  AutoSurfer explores website actions breadth-first, retaining page and trajectory knowledge to guide task synthesis and trajectory refinement. It evaluates the resulting training data by fine-tuning a web agent on WebArena and examining synthesized-task diversity.
- [Beyond Screenshots: Evaluating VLMs' Understanding of UI Animations](https://awesomecua.github.io/resources/arxiv-2604-26148/) — 2026-04-28
  AniMINT evaluates how VLMs perceive, explain and interpret UI animations using densely annotated videos. The study distinguishes basic motion recognition from higher-level animation meaning and probes motion, context and perceptual cues.
- [Training Computer Use Agents to Assess the Usability of Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2604-26020/) — 2026-04-28
  uxCUA learns to assess interface usability by choosing interaction flows, executing them and predicting a numerical usability score. Training uses interactive UIs with usability labels and human preferences, with evaluations on synthetic and real interfaces.
- [SnapGuard: Lightweight Prompt Injection Detection for Screenshot-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2604-25562/) — 2026-04-28
  SnapGuard detects screenshot-based prompt injection through complementary visual-stability and recovered textual cues. Its evaluation compares detection quality and inference cost across attack and benign-page settings, rather than establishing universal runtime prevention.
- [Benchmarking and Improving GUI Agents in High-Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2604-25380/) — 2026-04-28
  Introduces DynamicGUIBench for applications whose interfaces change between actions, together with DynamicUI, an agent that processes screen recordings. The agent selects informative frames, filters inconsistent action reasoning and uses trajectory reflection for subsequent decisions.
- [Odysseys: Benchmarking Web Agents on Realistic Long Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2604-24964/) — 2026-04-27
  Introduces Odysseys, a live-web benchmark of long, multi-site tasks derived from browsing sessions. Graded task rubrics and a rubric-score-per-step measure evaluate both partial progress and trajectory efficiency.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.github.io/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [OS-SPEAR: A Toolkit for the Safety, Performance,Efficiency, and Robustness Analysis of OS Agents](https://awesomecua.github.io/resources/arxiv-2604-24348/) — 2026-04-27
  Provides an evaluation toolkit for joint safety, efficiency, and multimodal robustness analysis of operating-system GUI agents.
- [VLAA-GUI: Knowing When to Stop, Recover, and Search, A Modular Framework for GUI Automation](https://awesomecua.github.io/resources/arxiv-2604-21375/) — 2026-04-23
  VLAA-GUI combines mandatory checks for visually supported completion, multi-tier loop recovery and on-demand workflow search. Optional coding and grounding agents support execution, with component ablations on Linux and Windows GUI tasks.
- [PlayCoder: Making LLM-Generated GUI Code Playable](https://awesomecua.github.io/resources/arxiv-2604-19742/) — 2026-04-21
  PlayEval measures whether generated GUI applications remain logically playable, using PlayTester to execute task-oriented GUI playthroughs. PlayCoder closes the loop between repository-aware generation, interactive testing and targeted code repair.
- [Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks on Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-18860/) — 2026-04-20
  This study examines UI changes between a desktop agent’s screenshot observation and action dispatch. Its pre-execution state checks address overlay and focus manipulation, while the reported DOM-injection blind spot limits the defense’s coverage.
- [AJ-Bench: Benchmarking Agent-as-a-Judge for Environment-Aware Evaluation](https://awesomecua.github.io/resources/arxiv-2604-18240/) — 2026-04-20
  AJ-Bench evaluates judge agents that actively gather evidence from search, data systems and graphical interfaces. Its annotated tasks and trajectories test information acquisition, state verification and process verification.
- [On the Reliability of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2604-17849/) — 2026-04-20
  This study examines repeated OSWorld executions to separate execution stochasticity, task-specification ambiguity and behavioral variation. Paired task-level tests show why one successful run is insufficient evidence of reliable computer use.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.github.io/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [HalluClear: Diagnosing, Evaluating and Mitigating Hallucinations in GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-17284/) — 2026-04-19
  Introduces HalluClear with a GUI hallucination taxonomy, expert-calibrated evaluation workflow and structured-reasoning post-training scheme. It evaluates how these components affect hallucinations, grounding and action fidelity across GUI agents.
- [FedGUI: Benchmarking Federated GUI Agents across Heterogeneous Platforms, Devices, and Operating Systems](https://awesomecua.github.io/resources/arxiv-2604-14956/) — 2026-04-16
  Introduces FedGUI, a federated GUI-learning benchmark built from six datasets spanning mobile, web and desktop interfaces. Its experiments separate platform, device, operating-system and data-source heterogeneity when evaluating collaborative training.
- [Beyond Chat and Clicks: GUI Agents for In-Situ Assistance via Live Interface Transformation](https://awesomecua.github.io/resources/arxiv-2604-14668/) — 2026-04-16
  DOMSteer translates help requests and live page context into reversible DOM changes such as control highlighting, contextual tooltips and layout reorganization. The work evaluates in-place GUI assistance with interface tests, use cases and a comparative user study.
- [GUI-Perturbed: Domain Randomization Reveals Systematic Brittleness in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2604-14262/) — 2026-04-15
  Introduces GUI-Perturbed, which varies screenshot appearance and instruction wording independently to diagnose grounding failures. Experiments on three related model architectures examine relational instructions, browser zoom and augmentation-based fine-tuning.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.github.io/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [WebForge: Breaking the Realism-Reproducibility-Scalability Trilemma in Browser Agent Benchmark](https://awesomecua.github.io/resources/arxiv-2604-10988/) — 2026-04-13
  Presents WebForge, a pipeline that plans, generates, refines and validates self-contained interactive websites. WebForge-Bench uses these environments to evaluate browser agents across domains and controlled difficulty levels.
- [HealthAdminBench: Evaluating Computer-Use Agents on Healthcare Administration Tasks](https://awesomecua.github.io/resources/arxiv-2604-09937/) — 2026-04-10
  Introduces HealthAdminBench with GUI environments for an electronic health record, payer portals and fax handling. Expert-defined administrative tasks are decomposed into verifiable subtasks to compare local progress with end-to-end workflow completion.
- [CORA: Conformal Risk-Controlled Agents for Safeguarded Mobile GUI Automation](https://awesomecua.github.io/resources/arxiv-2604-09155/) — 2026-04-10
  Introduces CORA, which calibrates a risk model to choose between executing and abstaining from mobile GUI actions, then diagnoses rejected actions to suggest interventions. Phone-Harm provides step-level safety labels for evaluating this safeguarding process.
- [Are GUI Agents Focused Enough? Automated Distraction via Semantic-level UI Element Injection](https://awesomecua.github.io/resources/arxiv-2604-07831/) — 2026-04-09
  This study tests black-box GUI-grounding failures caused by strategically added, innocuous-looking UI elements. Its iterative overlay search is compared with random injection and repeated independent grounding trials to distinguish persistent misdirection from incidental clutter.
- [What's Missing in Screen-to-Action? Towards a UI-in-the-Loop Paradigm for Multimodal GUI Reasoning](https://awesomecua.github.io/resources/arxiv-2604-06995/) — 2026-04-08
  Introduces UILoop, which inserts explicit UI-element localization, function and usage reasoning between screen observation and action. UI Comprehension-Bench evaluates these element-level capabilities with three metrics.
- [WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks](https://awesomecua.github.io/resources/arxiv-2604-06367/) — 2026-04-07
  WebSP-Eval evaluates agents carrying out website security and privacy tasks such as preference changes and session management. A browser extension controls account and initial state across runs, enabling analysis of failures on stateful UI controls.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.github.io/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [IntentScore: Intent-Conditioned Action Evaluation for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-05157/) — 2026-04-06
  Trains IntentScore on offline desktop GUI interactions to assess candidate actions using both their state relevance and planning intent. The reward model is evaluated as an action reranker for Agent S3 on OSWorld.
- [Comparing Human Oversight Strategies for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-04918/) — 2026-04-06
  Compares four human oversight strategies during live web-agent sessions, examining exposure to problematic actions and opportunities to intervene. The analysis identifies timing and attention problems in control handoffs and upfront plan approval.
- [GUIDE: Interpretable GUI Agent Evaluation via Hierarchical Diagnosis](https://awesomecua.github.io/resources/arxiv-2604-04399/) — 2026-04-06
  GUIDE evaluates GUI trajectories by segmenting them into subtasks, diagnosing each segment, and aggregating structured findings into a task verdict. It tests diagnostic judgments on e-commerce, web-agent and Android-control traces rather than relying on one holistic trajectory score.
- [The Art of Building Verifiers for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2604-06240/) — 2026-04-05
  Describes a web-trajectory verifier built around structured rubrics, separate process and outcome judgments, and explicit treatment of uncontrollable failures. CUAVerifierBench supplies human labels for evaluating these choices and screenshot-based context management.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.github.io/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [Do Phone-Use Agents Respect Your Privacy?](https://awesomecua.github.io/resources/arxiv-2604-00986/) — 2026-04-01
  Introduces MyPhoneBench to verify whether phone-use agents minimize personal data disclosure when filling forms during benign mobile tasks.
- [PixelPrune: Pixel-Level Adaptive Visual Token Reduction via Predictive Coding](https://awesomecua.github.io/resources/arxiv-2604-00886/) — 2026-04-01
  PixelPrune removes pixel-redundant patches before the vision encoder, reducing both encoding and downstream language-model work. The training-free method evaluates lossless and controlled-lossy compression on document and GUI tasks.
- [PSPA-Bench: A Personalized Benchmark for Smartphone GUI Agent](https://awesomecua.github.io/resources/arxiv-2603-29318/) — 2026-03-31
  PSPA-Bench evaluates personalized smartphone GUI behavior using user-specific instructions and a process-aware assessment of interaction traces. Its comparison of GUI agents diagnoses weaknesses in adapting workflows and preferences rather than measuring generic task completion alone.
- [Emergence WebVoyager: Toward Consistent and Transparent Evaluation of (Web) Agents in The Wild](https://awesomecua.github.io/resources/arxiv-2603-29020/) — 2026-03-30
  Audits sources of ambiguity and operational variation in WebVoyager evaluation and introduces standardized guidance for task setup, failure handling, annotation and reporting. Emergence WebVoyager applies this protocol to a web-agent evaluation.
- [GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks](https://awesomecua.github.io/resources/arxiv-2603-25864/) — 2026-03-26
  GUIDE evaluates whether models can recognize a user’s behavior, infer intent and decide when to offer help during open-ended software tasks. It uses narrated screen recordings of novice users and studies the effect of additional user context on these assistance decisions.
- [WebTestBench: Evaluating Computer-Use Agents towards End-to-End Automated Web Testing](https://awesomecua.github.io/resources/arxiv-2603-25226/) — 2026-03-26
  Introduces WebTestBench for end-to-end website testing, separating checklist generation from defect detection. Its WebTester baseline evaluates test coverage, detection and sustained interaction across web application categories.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.github.io/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [AgentRAE: Remote Action Execution through Notification-based Visual Backdoors against Screenshots-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-23007/) — 2026-03-24
  AgentRAE studies notification-based visual backdoors that redirect mobile GUI-agent actions. Its training separates sensitivity to icon differences from trigger/action association, with evaluations of clean behavior and targeted redirection.
- [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://awesomecua.github.io/resources/arxiv-2603-22529/) — 2026-03-23
  Ego2Web pairs first-person videos with online tasks that require agents to connect the user’s physical context to web actions. It also evaluates an automatic task judge against human judgments and analyzes failures in video understanding and web execution.
- [MedSPOT: A Workflow-Aware Sequential Grounding Benchmark for Clinical GUI](https://awesomecua.github.io/resources/arxiv-2603-19993/) — 2026-03-20
  Benchmarks sequential target localization in clinical software workflows, emphasizing how early mistakes affect subsequent interaction steps.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.github.io/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [OS-Themis: A Scalable Critic Framework for Generalist GUI Rewards](https://awesomecua.github.io/resources/arxiv-2603-19191/) — 2026-03-19
  Presents OS-Themis, a multi-agent critic that divides GUI trajectories into verifiable milestones and reviews their evidence before assigning an outcome. OGRBench evaluates GUI rewards across platforms, with AndroidWorld experiments examining training and trajectory filtering.
- [ClawTrap: A MITM-Based Red-Teaming Framework for Real-World OpenClaw Security Evaluation](https://awesomecua.github.io/resources/arxiv-2603-18762/) — 2026-03-19
  Presents a man-in-the-middle network red-teaming framework for evaluating autonomous OpenClaw agents under live traffic manipulation.
- [AndroTMem: From Interaction Trajectories to Anchored Memory in Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-18429/) — 2026-03-19
  Introduces AndroTMem-Bench for Android tasks whose later actions depend on earlier UI states. Anchored State Memory retains causally linked intermediate states for subgoal-specific retrieval and evaluates them against full-history and summary-based memory.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [How Vulnerable Are AI Agents to Indirect Prompt Injections? Insights from a Large-Scale Public Competition](https://awesomecua.github.io/resources/arxiv-2603-15714/) — 2026-03-16
  This public red-teaming study evaluates indirect prompt injection that both changes agent behavior and hides the compromise from the final response. Its scenarios include computer use alongside tool calling and coding, with analyses of transfer and model-dependent vulnerability.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [CUAAudit: Meta-Evaluation of Vision-Language Models as Auditors of Autonomous Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-10577/) — 2026-03-11
  CUAAudit examines vision-language models that judge computer-use task completion from an instruction and final environment state. Across macOS, Windows and Linux benchmarks, it measures accuracy, confidence calibration and disagreement between auditors.
- [SpecOps: A Fully Automated AI Agent Testing Framework in Real-World GUI Environments](https://awesomecua.github.io/resources/arxiv-2603-10268/) — 2026-03-10
  SpecOps divides testing of GUI-based agents into test generation, environment setup, execution and validation handled by specialist agents. Its evaluation spans five real-world agents, including web applications and browser extensions, and measures execution reliability and bug discovery.
- [Video-Based Reward Modeling for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-10178/) — 2026-03-10
  Builds ExeVR-53k from execution-video, instruction and reward triplets, including negative instructions with step annotations. A reward model uses spatiotemporal token pruning to judge task completion from the instruction and execution keyframes.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.github.io/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [OSExpert: Computer-Use Agents Learning Professional Skills via Exploration](https://awesomecua.github.io/resources/arxiv-2603-07978/) — 2026-03-09
  Uses GUI-based depth-first exploration to verify elementary software functions, assemble action primitives, and construct curricula of composed skills. OSExpert-Eval examines how the resulting procedural knowledge supports complex computer-use tasks.
- [Generalization in Online Reinforcement Learning for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2603-07432/) — 2026-03-08
  Introduces AndroidWorld-Generalization with separate tests for unseen task instances, templates, and applications. A GRPO training system combines containerized environments with asynchronous trajectory collection to study these generalization regimes.
- [WebChain: A Large-Scale Human-Annotated Dataset of Real-World Web Interaction Traces](https://awesomecua.github.io/resources/arxiv-2603-05295/) — 2026-03-05
  WebChain aligns human web-interaction trajectories with visual, structural and action data for agent training. It also introduces WebChainBench and a mid-training approach that separates spatial grounding from planning.
- [TimeWarp: Evaluating Web Agents by Revisiting the Past](https://awesomecua.github.io/resources/arxiv-2603-04949/) — 2026-03-05
  TimeWarp tests web agents across multiple versions of the same sites, varying visual design, frontend code and workflows. TimeTraj transfers plans across versions to collect training trajectories and study robustness to interface change.
- [Dual-Modality Multi-Stage Adversarial Safety Training: Robustifying Multimodal Web Agents Against Cross-Modal Attacks](https://awesomecua.github.io/resources/arxiv-2603-04364/) — 2026-03-04
  Studies webpage injections that affect both screenshots and accessibility trees, then trains web agents through teacher imitation, supervised adversarial examples, and adversarial reinforcement learning. The evaluation tests defenses on MiniWoB++ and held-out tasks.
- [CGL: Advancing Continual GUI Learning via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2603-02951/) — 2026-03-03
  Combines supervised and reinforcement fine-tuning for continual GUI learning, using policy entropy to adjust their proportions and gradient projection to limit conflicting updates. AndroidControl-CL groups applications into sequential tasks to evaluate adaptation and retention.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [Persona2Web: Benchmarking Personalized Web Agents for Contextual Reasoning with User History](https://awesomecua.github.io/resources/arxiv-2602-17003/) — 2026-02-19
  Persona2Web tests whether web agents can resolve ambiguous requests using preferences implicit in a user’s history. Its reasoning-aware evaluation compares agent architectures and history-access strategies on personalized tasks on the open web.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.github.io/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions rather than recall alone.
- [WebWorld: A Large-Scale World Model for Web Agent Training](https://awesomecua.github.io/resources/arxiv-2602-14721/) — 2026-02-16
  Introduces WebWorld, an open-web simulator trained on interaction trajectories for generating agent training data and testing candidate actions. WebWorld-Bench evaluates simulated transitions, alongside downstream web-agent training experiments.
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.github.io/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.github.io/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.github.io/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [SPILLage: Agentic Oversharing on the Web](https://awesomecua.github.io/resources/arxiv-2602-13516/) — 2026-02-13
  Formalizes and measures natural agentic oversharing when browser agents handle private user emails and calendars across live websites.
- [Scaling Web Agent Training through Automatic Data Generation and Fine-grained Evaluation](https://awesomecua.github.io/resources/arxiv-2602-12544/) — 2026-02-13
  This work uses constraint-based progress evaluation to retain partially successful web trajectories for training. It introduces BookingArena for structured booking tasks and studies a distilled agent trained with the resulting data.
- [Agentic Test-Time Scaling for WebAgents](https://awesomecua.github.io/resources/arxiv-2602-12276/) — 2026-02-12
  CATTS allocates additional inference computation when an agent’s action votes show uncertainty. The paper compares voting and arbiter strategies and evaluates this selective scaling on WebArena-Lite, Online-Mind2Web and GoBrowse.
- [AmbiBench: Benchmarking Mobile GUI Agents Beyond One-Shot Instructions in the Wild](https://awesomecua.github.io/resources/arxiv-2602-11750/) — 2026-02-12
  AmbiBench evaluates mobile GUI agents under four levels of instruction clarity, including tasks requiring active clarification. Its MUSE evaluator separately audits outcomes, execution quality and interaction quality to study alignment with user intent.
- [WebTestPilot: Agentic End-to-End Web Testing against Natural Language Specification by Inferring Oracles with Symbolized GUI Elements](https://awesomecua.github.io/resources/arxiv-2602-11724/) — 2026-02-12
  WebTestPilot turns natural-language requirements into web test steps with inferred preconditions and postconditions over symbolized GUI elements. A benchmark of bug-injected web applications tests whether these context-aware oracles distinguish application defects from agent mistakes.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.github.io/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [See, Plan, Snap: Evaluating Multimodal GUI Agents in Scratch](https://awesomecua.github.io/resources/arxiv-2602-10814/) — 2026-02-11
  ScratchWorld evaluates program construction through the Scratch interface using fine-grained drag-and-drop actions and a complementary semantic-API mode. Runtime tests assess the resulting programs, allowing analysis of the gap between program reasoning and GUI manipulation.
- [A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2602-09310/) — 2026-02-10
  Introduces A11y-CUA, a dataset comparing how blind or low-vision users and sighted users perform everyday computer tasks. It contrasts those traces with agent behavior under default, keyboard-only, and magnifier conditions to identify barriers to shared control.
- [Next-Gen CAPTCHAs: Leveraging the Cognitive Gap for Scalable and Diverse GUI-Agent Defense](https://awesomecua.github.io/resources/arxiv-2602-09012/) — 2026-02-09
  Next-Gen CAPTCHAs introduces generated interactive challenges intended to distinguish human users from GUI agents. The benchmark targets perception, memory, decisions and actions, with backend-supported challenge types designed for scalable instance generation.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.github.io/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [When Actions Go Off-Task: Detecting and Correcting Misaligned Actions in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-08995/) — 2026-02-09
  MisActBench provides action-level labels for task alignment, while DeAction checks proposed computer-use actions and requests revisions through structured feedback. The paper separately evaluates offline detection and interactive operation in OSWorld and RedTeamCUA.
- [Mapping the Design Space of User Experience for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2602-07283/) — 2026-02-07
  Develops a taxonomy of computer-use-agent interaction design through system review and practitioner interviews. A Wizard-of-Oz study then examines how users respond to normal, erroneous, and risky web-based execution, focusing on control, explanation, prompts, and mental models.
- [ANCHOR: Branch-Point Data Generation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-07153/) — 2026-02-06
  ANCHOR expands verified desktop demonstrations by generating new tasks at meaningful branch points and executing their instructions. State-aware verification and action filtering refine the resulting trajectories, which are evaluated through fine-tuned agents on OSWorld and WindowsAgentArena.
- [Do Web Agents Investigate Before They Decide?](https://awesomecua.github.io/resources/arxiv-2602-05354/) — 2026-02-05
  Introduces MIRAGE, a web decision benchmark where agents must actively uncover evidence that can contradict the visible context. Separate investigation, reasoning, decision, and hallucination measures diagnose failures beyond reaching the right page.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [WebSentinel: Detecting and Localizing Prompt Injection Attacks for Web Agents](https://awesomecua.github.io/resources/arxiv-2602-03792/) — 2026-02-03
  WebSentinel identifies suspicious webpage segments and checks each against its surrounding page context to detect and locate prompt injections. Its evaluation uses both contaminated and clean webpage datasets.
- [Agent Alpha: Tree Search Unifying Generation, Exploration and Evaluation for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-02995/) — 2026-02-03
  Agent Alpha uses step-level Monte Carlo tree search to reuse successful prefixes and recover from early GUI mistakes. Comparison-based evaluation and diversity-constrained expansion guide the search, with experiments on OSWorld.
- [SafeGround: Know When to Trust GUI Grounding Models via Uncertainty Calibration](https://awesomecua.github.io/resources/arxiv-2602-02419/) — 2026-02-02
  Introduces SafeGround, which estimates GUI-grounding uncertainty from the spatial dispersion of sampled predictions and calibrates a decision threshold before testing. It studies risk-aware selection on ScreenSpot-Pro, with statistical control scoped to the threshold’s false-discovery rate.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.github.io/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction](https://awesomecua.github.io/resources/arxiv-2602-00575/) — 2026-01-31
  VAGEN verifies GUI trajectories by first extracting readily available evidence and escalating to tool-based environment probes when needed. Evaluation on OSWorld-Verified and AndroidWorld studies verification accuracy and its cost.
- [Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-22781/) — 2026-01-30
  MobileGen estimates a mobile agent’s strengths across structural and semantic task difficulty, then samples new training targets around that profile. A controllable multi-agent generator creates the corresponding instructions and GUI trajectories.
- [How do Visual Attributes Influence Web Agents? A Comprehensive Evaluation of User Interface Design Factors](https://awesomecua.github.io/resources/arxiv-2601-21961/) — 2026-01-29
  Introduces VAF, a controlled pipeline that varies webpage appearance while retaining item semantics. It measures both agent clicks and reasoning references to study which visual design factors change browsing decisions.
- [WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-21872/) — 2026-01-29
  WebArbiter generates reasoned action-preference verdicts for web navigation, using reasoning distillation followed by reinforcement learning. It introduces WebPRMBench and evaluates both preference judgments and reward-guided trajectory search.
- [CovAgent: Overcoming the 30% Curse of Mobile Application Coverage with Agentic AI and Dynamic Instrumentation](https://awesomecua.github.io/resources/arxiv-2601-21253/) — 2026-01-29
  CovAgent augments Android GUI fuzzers by analyzing decompiled app code and component transitions to identify unsatisfied activation conditions. A second agent generates instrumentation that enables otherwise difficult-to-reach activities, with coverage-based evaluation.
- [Continual GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [OS-Marathon: Benchmarking Computer-Use Agents on Vast-Horizon, Repetitive Tasks](https://awesomecua.github.io/resources/arxiv-2601-20650/) — 2026-01-28
  Introduces OS-Marathon to evaluate long repetitive computer-use workflows whose execution grows with the amount of input data. It studies failure accumulation under task decomposition and GraphDemo, which adapts agents using a demonstration of the recurring workflow.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.github.io/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [MobileBench-OL: A Comprehensive Chinese Benchmark for Evaluating Mobile GUI Agents in Real-World Environment](https://awesomecua.github.io/resources/arxiv-2601-20335/) — 2026-01-28
  Introduces MobileBench-OL, an online benchmark of Chinese-app tasks spanning execution, reasoning, exploration, and noisy conditions. Its automatic evaluation and reset framework supports repeated testing of mobile GUI agents in real environments.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [GUIGuard-Bench: Toward a General Evaluation for Privacy-Preserving GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-18842/) — 2026-01-26
  Introduces GUIGuard-Bench, which annotates private regions in GUI trajectories with categories, risk levels, and relevance to the user’s task. It evaluates privacy recognition and the effect of screenshot protection on offline planning and task utility.
- [SwipeGen: Bridging the Execution Gap in GUI Agents via Human-like Swipe Synthesis](https://awesomecua.github.io/resources/arxiv-2601-18305/) — 2026-01-26
  Introduces SwipeGen for synthesizing varied swipe trajectories and SwipeBench for assessing their execution quality. The study examines how richer control of trajectory, speed, and timing changes GUI agents’ interaction performance.
- [GAIA: A Data Flywheel System for Training GUI Test-Time Scaling Critic Models](https://awesomecua.github.io/resources/arxiv-2601-18197/) — 2026-01-26
  GAIA trains a GUI action critic on positive and negative examples, then uses that critic to collect improved examples for another training round. It studies how recycling these data affects the test-time action choices of different GUI agents.
- [From Struggle to Success: Context-Aware Guidance for Screen Reader Users in Computer Use](https://awesomecua.github.io/resources/arxiv-2601-18092/) — 2026-01-26
  Introduces AskEase, an on-demand assistant that combines contextual information to provide screen-reader-friendly computer-use guidance. A study with screen-reader users evaluates task completion and perceived workload while preserving human control of the interaction.
- [EntWorld: A Holistic Environment and Benchmark for Verifiable Enterprise GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-17722/) — 2026-01-25
  Introduces EntWorld, an enterprise GUI benchmark built by deriving task logic from database schemas. Long workflows across enterprise domains are assessed with deterministic SQL-based state checks rather than screenshot similarity alone.
- [The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes](https://awesomecua.github.io/resources/arxiv-2601-16356/) — 2026-01-22
  Introduces a controlled web-task testbed for studying how stated preferences and human values influence GUI-agent decisions. It analyzes how personas alter navigation and how prominent interface cues can override the intended preference guidance.
- [MagicGUI-RMS: A Multi-Agent Reward Model System for Self-Evolving GUI Agents via Automated Feedback Reflux](https://awesomecua.github.io/resources/arxiv-2601-13060/) — 2026-01-19
  MagicGUI-RMS combines domain-specific and general reward models to assess GUI actions and propose corrections. A structured data pipeline and feedback-recycling process support repeated reward-model and agent improvement.
- [Mind the Gap: Action Rebinding Attacks against Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-12349/) — 2026-01-18
  Studies action-rebinding attacks in which an Android GUI agent’s planned input is redirected to a different application during the observation–action delay. The evaluation examines cross-application execution and the consequences of treating an earlier screen as the current action target.
- [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://awesomecua.github.io/resources/arxiv-2601-09636/) — 2026-01-14
  Introduces AndroidIntent to evaluate how GUI agents infer omitted preferences and recurring routines from long-term user records. Its HIM-Agent maintains hierarchical memory of preferences and routines for personalized execution and proactive suggestions.
- [ExpSeek: Self-Triggered Experience Seeking for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08605/) — 2026-01-13
  ExpSeek uses step-level entropy signals to decide when a web agent should request experience-based guidance. It supplies guidance tailored to the current step and evaluates the intervention across web-agent benchmarks.
- [WebTrap Park: An Automated Platform for Systematic Security Evaluation of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08406/) — 2026-01-13
  Introduces WebTrap Park, a platform that turns web-agent security risks into executable tasks and assesses concrete interactions with live pages. It compares agent frameworks without requiring modifications to their implementations.
- [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](https://awesomecua.github.io/resources/arxiv-2601-05787/) — 2026-01-09
  BEPA adapts a small set of expert GUI traces into policy-aligned guidance through trajectories reachable by the learner and a dynamically updated task cache. It evaluates this two-level approach to reinforcement learning on desktop and web benchmarks.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.github.io/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.github.io/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [ShowUI-$π$: Flow-based Generative Models as GUI Dexterous Hands](https://awesomecua.github.io/resources/arxiv-2512-24965/) — 2025-12-31
  Models discrete clicks and continuous drags with flow-based action generation, and introduces drag trajectories and the ScreenDrag benchmark.
- [ProSoftArena: Benchmarking Hierarchical Capabilities of Multimodal Agents in Professional Software Environments](https://awesomecua.github.io/resources/arxiv-2601-02399/) — 2025-12-30
  ProSoftArena evaluates 436 professional-software tasks across six disciplines and 13 applications in a Windows 11 virtual-machine environment. Its capability hierarchy, execution-based checks, and human-in-the-loop evaluation cover precise GUI operations and multi-software workflows.
- [It's a TRAP! Task-Redirecting Agent Persuasion Benchmark for Web Agents](https://awesomecua.github.io/resources/arxiv-2512-23128/) — 2025-12-29
  Introduces TRAP, which evaluates task-redirection attacks embedded in realistic web interfaces. Controlled website clones and a modular injection framework support comparisons of persuasion techniques and contextual changes across agents.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](https://awesomecua.github.io/resources/arxiv-2512-19432/) — 2025-12-22
  Introduces long mobile workflows that combine agent-user interaction, cross-application tasks, and MCP-based tool access.
- [DAVE: A VLM Vision Encoder for Document Understanding and Web Agents](https://awesomecua.github.io/resources/arxiv-2512-17221/) — 2025-12-19
  DAVE trains a vision encoder for document images and web agents using self-supervised pretraining followed by supervised parsing and localization. It combines decoder-specific encoder merging with feature fusion and evaluates web localization and agent benchmarks alongside document tasks.
- [VenusBench-GD: A Comprehensive Multi-Platform GUI Benchmark for Diverse Grounding Tasks](https://awesomecua.github.io/resources/arxiv-2512-16501/) — 2025-12-18
  VenusBench-GD is a bilingual, cross-platform GUI grounding benchmark organized into basic and advanced tasks. Its annotation pipeline and six-subtask taxonomy support comparisons of general multimodal models and GUI-specialized models across different grounding demands.
- [OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models](https://awesomecua.github.io/resources/arxiv-2512-16295/) — 2025-12-18
  OS-Oracle synthesizes GUI critic examples and trains a pre-action critic with supervised learning followed by consistency-preserving GRPO. It introduces OS-Critic Bench across mobile, web, and desktop settings and tests critic-assisted agents in OSWorld and AndroidWorld.
- [Step-GUI Technical Report](https://awesomecua.github.io/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [MobileWorldBench: Towards Semantic World Modeling For Mobile Agents](https://awesomecua.github.io/resources/arxiv-2512-14014/) — 2025-12-16
  Evaluates semantic world models for mobile interfaces and studies natural-language state transitions as a tool for agent planning.
- [MobiBench: Multi-Branch, Modular Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-12634/) — 2025-12-14
  MobiBench evaluates mobile GUI agents offline while allowing multiple valid action paths. It decomposes agent pipelines into modules to study component contributions, configurations, and performance bottlenecks.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.github.io/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [Using GUI Agent for Electronic Design Automation](https://awesomecua.github.io/resources/arxiv-2512-11611/) — 2025-12-12
  GUI-EDA collects more than 2,000 screenshot-answer-action pairs from engineers working across five CAD tools and five physical domains. The accompanying benchmark evaluates more than 30 GUI agents on specialized electronic-design workflows.
- [Privacy Practices of Browser Agents](https://awesomecua.github.io/resources/arxiv-2512-07725/) — 2025-12-08
  Presents a privacy evaluation framework for browser agents covering component weaknesses, website defenses, tracking, privacy-related prompts and personal-data leakage. The framework is applied to deployed browser-agent tools.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [GUI Exploration Lab: Enhancing Screen Navigation in Agents via Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2512-02423/) — 2025-12-02
  Introduces GUI Exploration Lab, a simulation engine for composing screens, interface elements, and navigation graphs. It studies how supervised learning, single-turn RL, and multiturn RL affect GUI navigation and exploration.
- [Chain-of-Ground: Improving GUI Grounding via Iterative Reasoning and Reference Feedback](https://awesomecua.github.io/resources/arxiv-2512-01979/) — 2025-12-01
  Chain-of-Ground uses iterative visual reasoning and reference feedback to refine GUI localization without additional training. It evaluates on ScreenSpot-Pro and introduces TPanel-UI to probe grounding on industrial control panels with visual distortions.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.github.io/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-00756/) — 2025-11-30
  MPR-GUI evaluates GUI perception and reasoning through strictly aligned tasks in six languages. GUI-XLI adjusts non-English hidden representations toward English representations at language-sensitive layers during inference to address the measured cross-language gaps.
- [LegalWebAgent: Empowering Access to Justice via LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2512-04105/) — 2025-11-28
  LegalWebAgent separates user-needs clarification, webpage browsing, and actions such as form completion or scheduling. A 15-task evaluation studies legal-service workflows relevant to Québec civil-law users, using HTML and screenshot observations.
- [OpenApps: Simulating Environment Variations to Measure UI-Agent Reliability](https://awesomecua.github.io/resources/arxiv-2511-20766/) — 2025-11-25
  Introduces OpenApps, a configurable app ecosystem for measuring UI-agent reliability under changes in appearance and content. Its evaluation compares task success and failure behavior across many versions of the same apps.
- ["Are We Done Yet?": A Vision-Based Judge for Autonomous Task Completion of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2511-20067/) — 2025-11-25
  This study tests vision-language models as task-completion judges using screenshots and instructions from 42 built-in macOS applications. It evaluates judgment accuracy on human-labeled tasks and separately studies how judge feedback affects agent task success.
- [UI-CUBE: Enterprise-Grade Computer Use Agent Benchmarking Beyond Task Accuracy to Operational Reliability](https://awesomecua.github.io/resources/arxiv-2511-17131/) — 2025-11-21
  UI-CUBE evaluates 226 tasks ranging from individual controls to copy-paste and enterprise workflows. Interface variations, multiple resolutions, and application-state validation support diagnosis of operational reliability beyond task accuracy alone.
- [D-GARA: A Dynamic Benchmarking Framework for GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2511-16590/) — 2025-11-20
  D-GARA evaluates Android GUI agents under runtime anomalies such as permission dialogs, battery warnings, and update prompts. Its modular environment embeds these interruptions in Android applications to study recovery and robustness.
- [Computer-Use Agents as Judges for Generative User Interface](https://awesomecua.github.io/resources/arxiv-2511-15567/) — 2025-11-19
  AUI-Gym evaluates generated websites by having computer-use agents attempt tasks whose executability is checked programmatically. A feedback dashboard condenses navigation histories into visual summaries that a coding agent can use to revise an interface.
- [ProBench: Benchmarking GUI Agents with Accurate Process Information](https://awesomecua.github.io/resources/arxiv-2511-09157/) — 2025-11-12
  ProBench extends mobile GUI evaluation with tasks whose correctness depends on the interaction process as well as the final state. Its ProcessProvider supplies process information for assessing agent behavior and analyzing failure modes.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [AUTO-Explorer: Automated Data Collection for GUI Agent](https://awesomecua.github.io/resources/arxiv-2511-06417/) — 2025-11-09
  Introduces Auto-Explorer, an automated GUI exploration method that records software states for training-data collection. UIXplore evaluates exploration coverage, and collected data is used to fine-tune and test GUI element grounding.
- [GUI-360$^\circ$: A Comprehensive Dataset and Benchmark for Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2511-04307/) — 2025-11-06
  Collects Windows application trajectories with screenshots and action traces for grounding, screen parsing, and action prediction.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [Measuring the Security of Mobile LLM Agents under Adversarial Prompts from Untrusted Third-Party Channels](https://awesomecua.github.io/resources/arxiv-2510-27140/) — 2025-10-31
  Measures how untrusted third-party notifications, messages, and app content can hijack mobile LLM agents into executing unauthorized cross-app actions.
- [OSWorld-MCP: Benchmarking MCP Tool Invocation In Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-24563/) — 2025-10-28
  OSWorld-MCP evaluates how agents choose between GUI operations and MCP tool calls in computer tasks. It combines generated and curated tools, with 158 manually validated tools across seven applications, to examine tool use alongside task completion.
- [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://awesomecua.github.io/resources/arxiv-2510-24411/) — 2025-10-28
  Introduces MobileRisk-Live and OS-Sentinel, combining a formal verifier for system-level violations with a multimodal judge for contextual risks in mobile GUI workflows.
- [WebGraphEval: Multi-Turn Trajectory Evaluation for Web Agents using Graph Representation](https://awesomecua.github.io/resources/arxiv-2510-19205/) — 2025-10-22
  Introduces WebGraphEval, which merges multiple agents' trajectories into a weighted graph of canonical actions. Structural analyses examine recurring behavior, inefficient paths and important decision points beyond a final success score.
- [AndroidControl-Curated: Revealing the True Potential of GUI Agents through Benchmark Purification](https://awesomecua.github.io/resources/arxiv-2510-18488/) — 2025-10-21
  AndroidControl-Curated audits ambiguities and factual errors in AndroidControl and produces a refined evaluation dataset. The paper also studies post-training a small Magma-R1 model on a curated subset to examine the effect of data quality on GUI action assessment.
- [Investigating the Impact of Dark Patterns on LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2510-18113/) — 2025-10-20
  Presents LiteAgent for recording web-agent interactions and TrickyArena for enabling or disabling dark patterns in controlled websites. Experiments compare how individual patterns, combined patterns and visual or HTML changes affect agent decisions.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [HackWorld: Evaluating Computer-Use Agents on Exploiting Web Application Vulnerabilities](https://awesomecua.github.io/resources/arxiv-2510-12200/) — 2025-10-14
  Introduces HackWorld for evaluating visual computer-use agents in a capture-the-flag collection of web applications. The benchmark examines interface navigation and multistep planning during vulnerability discovery and exploitation tasks.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [SusBench: An Online Benchmark for Evaluating Dark Pattern Susceptibility of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-11035/) — 2025-10-13
  Introduces SusBench, an online benchmark that inserts dark-pattern designs into consumer websites for agent evaluation. A human study checks the realism of the interventions, and agent trials compare susceptibility across pattern types.
- [SecureWebArena: A Holistic Security Evaluation Benchmark for LVLM-based Web Agents](https://awesomecua.github.io/resources/arxiv-2510-10073/) — 2025-10-11
  Introduces SecureWebArena with simulated interactive websites, an attack-vector taxonomy and labeled agent trajectories. Its evaluation separates failures in reasoning, behavioral traces and task outcomes across vision-language agent families.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.github.io/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [BrowserArena: Evaluating LLM Agents on Real-World Web Navigation Tasks](https://awesomecua.github.io/resources/arxiv-2510-02418/) — 2025-10-02
  Introduces BrowserArena, a live-web platform for head-to-head agent comparisons on user-submitted tasks. Step-level human annotations support targeted analysis of navigation, pop-up handling and CAPTCHA-related failures.
- [Scaling Agents for Computer Use](https://awesomecua.github.io/resources/arxiv-2510-02250/) — 2025-10-02
  Introduces Behavior Judge, which converts execution trajectories into behavior narratives and compares multiple candidate rollouts. Experiments examine this selection approach on OSWorld, WindowsAgentArena and AndroidWorld.
- [Just Do It!? Computer-Use Agents Exhibit Blind Goal-Directedness](https://awesomecua.github.io/resources/arxiv-2510-01670/) — 2025-10-02
  BLIND-ACT tests whether computer-use agents persist with ambiguous, contradictory, or infeasible goals without adequate contextual reasoning. Its OSWorld-based tasks and judged trajectories examine these behaviors and the effect of mitigation prompts.
- [WAInjectBench: Benchmarking Prompt Injection Detections for Web Agents](https://awesomecua.github.io/resources/arxiv-2510-01354/) — 2025-10-01
  Introduces WAInjectBench with a threat-model taxonomy and malicious and benign text-image datasets for web-agent prompt-injection detection. It compares detector families across explicit and less visible forms of injected content.
- [SCUBA: Salesforce Computer Use Benchmark](https://awesomecua.github.io/resources/arxiv-2509-26506/) — 2025-09-30
  SCUBA evaluates enterprise UI navigation and CRM workflows with 300 task instances derived from Salesforce user interviews. Salesforce sandbox execution and milestone-based assessment support comparisons between zero-shot agents and agents given demonstrations.
- [Generalist Scanner Meets Specialist Locator: A Synergistic Coarse-to-Fine Framework for Robust GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-24133/) — 2025-09-29
  GMS pairs a general vision-language scanner that proposes interface regions with a specialist locator that predicts coordinates within them. Hierarchical coarse-to-fine search coordinates the two components for GUI grounding on ScreenSpot-Pro.
- [WAREX: Web Agent Reliability Evaluation on Existing Benchmarks](https://awesomecua.github.io/resources/arxiv-2510-03285/) — 2025-09-28
  WAREX augments existing web-agent benchmarks with reliability challenges arising from unstable systems and changing or disruptive website behavior. Evaluation on WebArena, WebVoyager and REAL examines how these disturbances affect task completion.
- [GUI-PRA: Process Reward Agent for GUI Tasks](https://awesomecua.github.io/resources/arxiv-2509-23263/) — 2025-09-27
  GUI-PRA evaluates GUI progress by generating task-specific criteria and actively inspecting visual evidence with tools. It tests offline judgment on OS-Critic Bench and the effects of this feedback on online mobile policies in AndroidWorld.
- [RISK: A Framework for GUI Agents in E-commerce Risk Management](https://awesomecua.github.io/resources/arxiv-2509-21982/) — 2025-09-26
  RISK combines browser-interaction training data, a benchmark, and reinforcement fine-tuning for e-commerce risk-management workflows. Its trajectories and rewards distinguish individual actions from multi-step stateful tasks involving deeply embedded web content.
- [ProRe: A Proactive Reward System for GUI Agents via Reasoner-Actor Collaboration](https://awesomecua.github.io/resources/arxiv-2509-21823/) — 2025-09-26
  ProRe evaluates GUI task outcomes by having a reasoner assign targeted environment-probing tasks to specialist actors. The additional observations support reward judgments, with separate evaluation of judge accuracy and downstream agent task success.
- [Benchmarking MLLM-based Web Understanding: Reasoning, Robustness and Safety](https://awesomecua.github.io/resources/arxiv-2509-21782/) — 2025-09-26
  Evaluates multimodal LLMs on web interface reasoning, visual perturbation robustness, and safety-critical web understanding tasks.
- [Detecting Pipeline Failures through Fine-Grained Analysis of Web Agents](https://awesomecua.github.io/resources/arxiv-2509-14382/) — 2025-09-17
  Introduces a modular framework for identifying errors at intermediate stages of a web-agent pipeline. A SeeAct and Mind2Web case study examines weaknesses that are obscured by final task-success metrics.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.github.io/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-11543/) — 2025-09-15
  UI-S1 simulates multi-turn online learning over offline trajectories, using a patch module to recover divergences while retaining the model’s own outputs in context. It combines discounted future returns with step- and episode-level advantages and introduces a semi-online performance proxy.
- [Environmental Injection Attacks against GUI Agents in Realistic Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2509-11250/) — 2025-09-14
  Introduces Chameleon, an environmental-injection evaluation framework that varies webpage content and trigger context. It combines simulated page variation with attention-based optimization and tests GUI agents across realistic websites.
- [Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight](https://awesomecua.github.io/resources/arxiv-2509-10723/) — 2025-09-12
  Studies how GUI agents, people, and human-agent teams respond to manipulative interface designs. The two-phase evaluation examines failure modes and the benefits and costs of human oversight.
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2509-07764/) — 2025-09-09
  Introduces AgentSentinel, which intercepts sensitive computer-agent operations and audits them using task context together with system traces. BadComputerUse evaluates this enforcement approach across attack scenarios involving tool and computer control.
- [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-06477/) — 2025-09-08
  MAS-Bench evaluates mobile agents that combine GUI actions with APIs, deep links, and reusable scripts. Its 139 tasks across 11 apps test use of 88 predefined shortcuts as well as the ability to generate new reusable workflows.
- [SparkUI-Parser: Enhancing GUI Perception with Robust Grounding and Parsing](https://awesomecua.github.io/resources/arxiv-2509-04908/) — 2025-09-05
  Introduces SparkUI-Parser, which adds continuous coordinate decoding and a rejection mechanism for nonexistent targets to a multimodal model. It also presents ScreenParse for evaluating structural interface perception.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [Throttling Web Agents Using Reasoning Gates](https://awesomecua.github.io/resources/arxiv-2509-01619/) — 2025-09-01
  Introduces reasoning gates that require agents to solve generated, verifiable puzzles before receiving access to resources. The throttling approach is deployed on a custom website and MCP servers and evaluated with web agents.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.github.io/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [Morae: Proactively Pausing UI Agents for User Choices](https://awesomecua.github.io/resources/arxiv-2508-21456/) — 2025-08-29
  Introduces Morae, a UI agent that detects decision points and pauses for user choices using interface code and screenshots. A study with blind and low-vision participants evaluates this mixed-initiative approach on real web tasks.
- [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2508-19679/) — 2025-08-27
  InquireMobile trains mobile agents to seek human confirmation at critical decisions using staged reinforcement fine-tuning and pre-action reasoning. InquireBench evaluates safe interaction and proactive inquiry, distinguishing asking for help from completing the underlying task.
- [Mind the Third Eye! Benchmarking Privacy Awareness in MLLM-powered Smartphone Agents](https://awesomecua.github.io/resources/arxiv-2508-19493/) — 2025-08-27
  Introduces SAPA-Bench with 7,138 smartphone scenarios to evaluate whether MLLM-powered mobile agents detect and protect sensitive personal information on screen.
- [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://awesomecua.github.io/resources/arxiv-2508-15832/) — 2025-08-18
  Amazon-Bench generates functionality-specific web tasks from page content and interactive controls, covering operations beyond product search. Its evaluator checks task completion and unintended changes to account state, such as address or purchase settings.
- [WebMall -- A Multi-Shop Benchmark for Evaluating Web Agents](https://awesomecua.github.io/resources/arxiv-2508-13024/) — 2025-08-18
  WebMall provides four simulated online shops with heterogeneous product data for comparison shopping, related-product searches, and checkout tasks. It evaluates web agents with different observation formats and memory configurations in a fixed offline environment.
- [You Don't Know Until You Click:Automated GUI Testing for Production-Ready Software Evaluation](https://awesomecua.github.io/resources/arxiv-2508-14104/) — 2025-08-17
  RealDevWorld evaluates generated software repositories with 194 development tasks and AppEvalPilot, an agent judge that operates the resulting GUIs. The evaluation examines functional behavior, visual fidelity, and runtime responses to produce task-specific diagnostic feedback.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.github.io/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [MVISU-Bench: Benchmarking Mobile Agents for Real-World Tasks by Multi-App, Vague, Interactive, Single-App and Unethical Instructions](https://awesomecua.github.io/resources/arxiv-2508-09057/) — 2025-08-12
  MVISU-Bench evaluates bilingual mobile tasks involving cross-app work, vague requests, user interaction and unethical instructions alongside ordinary single-app tasks. Its Aider prompting module is designed to clarify intent and mitigate risky execution within agent workflows.
- [Uncertainty-Aware GUI Agent: Adaptive Perception through Component Recommendation and Human-in-the-Loop Refinement](https://awesomecua.github.io/resources/arxiv-2508-04025/) — 2025-08-06
  RecAgent narrows attention to recommended UI components and requests user feedback when task intent or decisions remain uncertain. It introduces ComplexAction to evaluate specified single-step GUI actions in difficult interface scenarios.
- [Web-CogReasoner: Towards Multimodal Knowledge-Induced Cognitive Reasoning for Web Agents](https://awesomecua.github.io/resources/arxiv-2508-01858/) — 2025-08-03
  Web-CogReasoner separates factual and conceptual web knowledge from procedural reasoning, using a structured curriculum to train a multimodal agent. Web-CogDataset and Web-CogBench support study of these capabilities alongside web-navigation evaluation.
- [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-01330/) — 2025-08-02
  NaturalGAIA builds verifiable long-horizon GUI tasks from human interaction intents while separating causal task structure from its verbal description. Its LightManus-Jarvis framework divides dynamic planning and context management from execution based on visual and structural interface information.
- [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.github.io/resources/arxiv-2507-19478/) — 2025-07-25
  MMBench-GUI evaluates interface understanding, element grounding, task automation, and collaboration across six named desktop, mobile, and web platforms. It introduces the Efficiency-Quality Area metric for examining execution efficiency alongside task quality in online GUI automation.
- [OS-MAP: How Far Can Computer-Using Agents Go in Breadth and Depth?](https://awesomecua.github.io/resources/arxiv-2507-19132/) — 2025-07-25
  OS-MAP organizes 416 computer-use tasks across 15 applications by a five-level automation taxonomy and a hierarchy of user demands. The benchmark separates required autonomy from generalization scope to diagnose where agents struggle as task demands increase.
- [Manipulating LLM Web Agents with Indirect Prompt Injection Attack via HTML Accessibility Tree](https://awesomecua.github.io/resources/arxiv-2507-14799/) — 2025-07-20
  Studies indirect prompt injection through HTML content consumed as accessibility trees. The evaluation tests how manipulated page observations redirect browser-agent actions on real websites.
- [WebGuard: Building a Generalizable Guardrail for Web Agents](https://awesomecua.github.io/resources/arxiv-2507-14293/) — 2025-07-18
  Introduces WebGuard, a human-annotated dataset for predicting outcomes and risk levels of state-changing website actions. It provides generalization splits and evaluates specialized guardrail models.
- [Machine-Readable Ads: Accessibility and Trust Patterns for AI Web Agents interacting with Online Advertisements](https://awesomecua.github.io/resources/arxiv-2507-12844/) — 2025-07-17
  Compares DOM-based and pixel-based web agents on a cloned news site containing advertisements, consent dialogs and paywalls. The study examines how interface presentation affects ad interaction and consequential subscription choices.
- [VisualTrap: A Stealthy Backdoor Attack on GUI Agents via Visual Grounding Manipulation](https://awesomecua.github.io/resources/arxiv-2507-06899/) — 2025-07-09
  Studies backdoors that redirect GUI visual grounding even when the task plan is correct. VisualTrap evaluates whether poisoned grounding training transfers to downstream tasks and across web, mobile, and desktop interface settings.
- [OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety](https://awesomecua.github.io/resources/arxiv-2507-06134/) — 2025-07-08
  Evaluates agent safety across real browser, code, filesystem, shell, and messaging tools using rule-based and model-based assessments.
- [A Systematization of Security Vulnerabilities in Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2507-05445/) — 2025-07-07
  Analyzes security boundaries in computer-use agents through a risk taxonomy and concrete adversarial case studies. It links observed failures to input provenance, interface-action binding, memory, and delegation, and proposes CUA-specific evaluation principles.
- [Mobile GUI Agents under Real-world Threats: Are We There Yet?](https://awesomecua.github.io/resources/arxiv-2507-04227/) — 2025-07-06
  Introduces an app-content instrumentation framework and complementary interactive and static test suites for mobile GUI agents. It studies how untrusted third-party content changes task execution and state understanding.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.github.io/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [WebArxiv: A Reproducible Benchmark for Evaluating Multimodal Web Agents on arXiv Tasks](https://awesomecua.github.io/resources/arxiv-2507-00938/) — 2025-07-01
  WebArxiv provides 510 static-snapshot tasks with deterministic answers for scholarly browsing, including constrained paper retrieval, content extraction, and cross-paper comparison. The study also tests dynamic retrieval of interaction history to address repetitive or incomplete agent reasoning.
- [SafeMobile: Chain-level Jailbreak Detection and Automated Evaluation for Multimodal Mobile Agents](https://awesomecua.github.io/resources/arxiv-2507-00841/) — 2025-07-01
  Studies chain-level risk detection for mobile multimodal agents and a language-model-assisted evaluator, assessing safety interventions together with functional preservation.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-16042/) — 2025-06-19
  OSWorld-Human adds human-determined trajectories to OSWorld to evaluate the efficiency of desktop computer-use agents. The study compares 16 agents and analyzes model-call latency, changes in step duration during task execution, and excess action steps.
- [Context manipulation attacks : Web agents are susceptible to corrupted memory](https://awesomecua.github.io/resources/arxiv-2506-17318/) — 2025-06-18
  Studies context manipulation in web agents by altering stored task representations rather than webpage prompts alone. Evaluation on Browser-use and Agent-E examines memory-directed attacks and the implications for secure context handling.
- [Embodied Web Agents: Bridging Physical-Digital Realms for Integrated Agent Intelligence](https://awesomecua.github.io/resources/arxiv-2506-15677/) — 2025-06-18
  Introduces environments that couple 3D physical-world simulations with functional web interfaces. The accompanying benchmark evaluates tasks requiring agents to coordinate online information and physical actions across cooking, navigation and shopping scenarios.
- [Understanding GUI Agent Localization Biases through Logit Sharpness](https://awesomecua.github.io/resources/arxiv-2506-15425/) — 2025-06-18
  Introduces a finer-grained taxonomy of GUI localization errors and a logit-based Peak Sharpness Score for analyzing coordinate-prediction uncertainty. A context-aware cropping method refines the visual input without retraining the grounding model.
- [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-14866/) — 2025-06-17
  Extends OSWorld with tasks covering user misuse, prompt injection, and model misbehavior, with assessment of both task success and safety.
- [GUI-Robust: A Comprehensive Dataset for Testing GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2506-14477/) — 2025-06-17
  Builds GUI task data with real-world interaction anomalies and evaluates how agent behavior changes under those conditions.
- [AgentSynth: Scalable Task Generation for Generalist Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-14205/) — 2025-06-17
  AgentSynth composes easily generated subtasks into longer computer-use tasks and trajectories with adjustable difficulty. Its evaluation uses the number of subtasks to probe how agent success changes as task complexity grows.
- [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.github.io/resources/arxiv-2506-08972/) — 2025-06-10
  UI-NEXUS evaluates compositional mobile tasks in local utility apps and online Chinese and English service apps. AGENT-NEXUS decomposes those long tasks into self-contained atomic subtasks to study generalization beyond isolated screens or short action chains.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [EconWebArena: Benchmarking Autonomous Agents on Economic Tasks in Realistic Web Environments](https://awesomecua.github.io/resources/arxiv-2506-08136/) — 2025-06-09
  Introduces EconWebArena, a curated benchmark of economic-data tasks requiring live website navigation, multimodal interpretation, and precise extraction. It evaluates visual grounding, planning, and interaction design within multistep workflows.
- [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.github.io/resources/arxiv-2506-08012/) — 2025-06-09
  GUI-Reflection synthesizes reflection and error-correction examples from successful trajectories and adds dedicated learning stages for these behaviors. It introduces a reflection task suite, a mobile environment for online data collection, and iterative reflection tuning.
- [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-07672/) — 2025-06-09
  MCPWorld evaluates API, GUI, and hybrid computer-use agents with 201 tasks in applications whose source can be instrumented and extended with MCP support. It verifies completion from application behavior and packages the testbed in containers with GPU support.
- [GUIPilot: A Consistency-based Mobile GUI Testing Approach for Detecting Application-specific Bugs](https://awesomecua.github.io/resources/arxiv-2506-07385/) — 2025-06-09
  Introduces GUIPilot, which compares mobile design mock-ups with implemented screens through widget alignment and tests expected transitions by executing inferred UI actions. It evaluates both visual inconsistencies and workflow-specific bugs.
- [BIMgent: Towards Autonomous Building Modeling via Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2506-07217/) — 2025-06-08
  BIMgent plans software-specific workflows and executes GUI actions for building-information modeling. It evaluates multimodal building design and reconstruction tasks in professional authoring software.
- [macOSWorld: A Multilingual Interactive Benchmark for GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-04135/) — 2025-06-04
  macOSWorld provides 202 interactive tasks across 30 applications, with instructions and operating-system interfaces in five languages. It evaluates GUI agents on macOS workflows and includes a separate subset for deception-attack testing.
- [DPO Learning with LLMs-Judge Signal for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-03095/) — 2025-06-03
  Uses an LLM judge to evaluate and filter synthetic GUI interaction trajectories for training a compact vision-language agent. OSWorld experiments assess the policy designed for local execution.
- [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.github.io/resources/arxiv-2506-02865/) — 2025-06-03
  Describes Surfer-H, a web agent paired with the Holo1 vision-language model family trained on web content, synthetic examples, and agent-generated data. The work introduces WebClick for web-interface localization and evaluates browser task execution on WebVoyager.
- [DeepShop: A Benchmark for Deep Research Shopping Agents](https://awesomecua.github.io/resources/arxiv-2506-02839/) — 2025-06-03
  DeepShop evaluates shopping agents with evolving query complexity across product attributes, filters and sorting preferences. Its evaluation combines checks of these individual requirements with overall task success.
- [VPI-Bench: Visual Prompt Injection Attacks for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-02456/) — 2025-06-03
  Introduces VPI-Bench, interactive web-platform variants containing visually embedded malicious instructions. It evaluates computer-use and browser-use agents under these threats and examines system-prompt defenses.
- [MLA-Trust: Benchmarking Trustworthiness of Multimodal LLM Agents in GUI Environments](https://awesomecua.github.io/resources/arxiv-2506-01616/) — 2025-06-02
  Benchmarks truthfulness, controllability, safety, and privacy of multimodal LLM agents across interactive web and mobile GUI tasks.
- [RiOSWorld: Benchmarking the Risk of Multimodal Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-00618/) — 2025-05-31
  Introduces RiOSWorld, a computer-use risk benchmark separating user-originated and environmental threats. It evaluates both risky-goal intent and goal completion across web and other computer applications.
- [Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents](https://awesomecua.github.io/resources/arxiv-2505-24878/) — 2025-05-30
  Open CaptchaWorld evaluates multimodal agents on interactive browser-based CAPTCHA puzzles. Its benchmark distinguishes task success from the depth of visual reasoning and interaction needed to complete a puzzle.
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.github.io/resources/arxiv-2505-21936/) — 2025-05-28
  RedTeamCUA combines a virtual-machine OS environment with containerized websites for controlled prompt-injection tests spanning both interfaces. Its RTC-Bench contains 864 examples and can initialize agents at injection points to separate attack susceptibility from navigation failures.
- [AdInject: Real-World Black-Box Attacks on Web Agents via Advertising Delivery](https://awesomecua.github.io/resources/arxiv-2505-21499/) — 2025-05-27
  Studies advertising delivery as an indirect-injection channel for web agents under a black-box threat model. AdInject evaluates how static ad content shaped by website context can redirect browser actions.
- [XBOUND: Exploring Capability Boundaries of Device-Control Agents at the State Level](https://awesomecua.github.io/resources/arxiv-2505-21279/) — 2025-05-27
  XBOUND evaluates GUI agents at the level of a screen state, considering multiple instructions and possible target actions within it. The study separates action matching from instruction unification and compares effects of grounding and trajectory data.
- [ScienceBoard: Evaluating Multimodal Autonomous Agents in Realistic Scientific Workflows](https://awesomecua.github.io/resources/arxiv-2505-19897/) — 2025-05-26
  ScienceBoard combines an interactive environment with professional scientific software and 169 human-curated tasks in areas including biochemistry, astronomy, and geoinformatics. It evaluates computer-use agents on visually rich research workflows and analyzes their execution limitations.
- [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.github.io/resources/arxiv-2505-15277/) — 2025-05-21
  Web-Shepherd is a process reward model for assessing individual steps of web-navigation trajectories. It introduces a collection of 40,000 step-level preference pairs with checklists and a separate benchmark for comparing reward models, then evaluates verification during WebArena-lite navigation.
- [EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks](https://awesomecua.github.io/resources/arxiv-2505-14289/) — 2025-05-20
  Introduces EVA, a red-teaming framework that evolves semantic payloads for GUI environmental-injection tests. It studies the contribution of semantic versus visual deception and distills discovered patterns into reusable evaluation rules.
- [Efficient Agent Training for Computer Use](https://awesomecua.github.io/resources/arxiv-2505-13909/) — 2025-05-20
  PC Agent-E augments 312 human computer-use trajectories with alternative action decisions synthesized by Claude 3.7 Sonnet. It studies training with this combination and introduces WindowsAgentArena-V2 as an updated evaluation benchmark.
- [Scaling Computer-Use Grounding via User Interface Decomposition and Synthesis](https://awesomecua.github.io/resources/arxiv-2505-13227/) — 2025-05-19
  Introduces OSWorld-G grounding evaluation and the Jedi synthesis pipeline for examples spanning layout reasoning and fine-grained interaction.
- [The Hidden Dangers of Browsing AI Agents](https://awesomecua.github.io/resources/arxiv-2505-13076/) — 2025-05-19
  Outlines an end-to-end threat model and empirical security evaluation across architectural layers of autonomous browser agents.
- [From Assistants to Adversaries: Exploring the Security Risks of Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2505-12981/) — 2025-05-19
  Analyzes security vulnerabilities across OEM system-level, third-party, and research mobile LLM agents, covering GUI and cross-application attack surfaces.
- [GEM: Gaussian Embedding Modeling for Out-of-Distribution Detection in GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-12842/) — 2025-05-19
  GEM detects instructions outside a GUI agent’s capabilities by modeling distances in its input-embedding space with a Gaussian mixture. Experiments across mobile, computer and browser data also examine selective escalation to a cloud model when an input is detected as unfamiliar.
- [Mobile-Bench-v2: A More Realistic and Comprehensive Benchmark for VLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2505-11891/) — 2025-05-17
  Mobile-Bench-v2 evaluates mobile GUI agents using multiple acceptable offline action paths, noisy interfaces with ads or pop-ups, and ambiguous instructions with scripted clarification exchanges. These splits separate step-level execution, robustness, and proactive interaction.
- [Characterizing Unintended Consequences in Human-GUI Agent Collaboration for Web Browsing](https://awesomecua.github.io/resources/arxiv-2505-09875/) — 2025-05-15
  Studies unintended consequences of collaborative web browsing with GUI agents through social-media analysis and interviews. It organizes observed failures, user impacts, and mitigation practices around planning, interface interaction, feedback, privacy, and trust.
- [Do MLLMs Capture How Interfaces Guide User Behavior? A Benchmark for Multimodal UI/UX Design Understanding](https://awesomecua.github.io/resources/arxiv-2505-05026/) — 2025-05-08
  Introduces WiserUI-Bench, pairing real UI variants from industry A/B tests with observed behavioral winners and expert explanations. It evaluates models’ ability to predict the more effective interface and explain its effect on user behavior.
- [OSUniverse: Benchmark for Multimodal GUI-navigation AI Agents](https://awesomecua.github.io/resources/arxiv-2505-03570/) — 2025-05-06
  Introduces OSUniverse, a desktop GUI benchmark spanning precise clicks through multistep and multiapplication tasks. It provides both manual scoring and an automated validation mechanism.
- [Toward a Human-Centered Evaluation Framework for Trustworthy LLM-Powered GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-17934/) — 2025-04-24
  Presents a position paper on privacy and security evaluation for GUI agents, identifying risk categories and challenges in involving human evaluators. It proposes risk-aware assessment and in-context consent as design directions.
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://awesomecua.github.io/resources/arxiv-2504-18575/) — 2025-04-22
  Introduces WASP, an end-to-end benchmark for prompt-injection security in web agents. Its evaluation separates partial attack progress from completion of the attacker’s full objective.
- [DoomArena: A framework for Testing AI Agents Against Evolving Security Threats](https://awesomecua.github.io/resources/arxiv-2504-14064/) — 2025-04-18
  Presents a modular security testing framework that plugs into BrowserGym and tool-use benchmarks to evaluate agents under configurable threat models.
- [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.github.io/resources/arxiv-2504-13805/) — 2025-04-18
  LearnAct parses human demonstrations into reusable knowledge, retrieves relevant examples, and uses them during mobile GUI task execution. The accompanying LearnGUI benchmark includes 2,252 offline tasks and 101 online tasks for studying adaptation from demonstrations.
- [VLM-Fuzz: Vision Language Model Assisted Recursive Depth-first Search Exploration for Effective UI Testing of Android Apps](https://awesomecua.github.io/resources/arxiv-2504-11675/) — 2025-04-16
  VLM-Fuzz combines depth-first UI exploration with Android manifest analysis, runtime widget hierarchies, and on-demand visual reasoning to generate app test inputs. It evaluates coverage on 59 benchmark apps and uses additional Google Play apps to study crash discovery.
- [The Obvious Invisible Threat: LLM-Powered GUI Agents' Vulnerability to Fine-Print Injections](https://awesomecua.github.io/resources/arxiv-2504-11281/) — 2025-04-15
  Characterizes six forms of GUI-content injection and studies their effects on GUI agents and human users using adversarial webpages. The analysis examines privacy failures and the limits of human oversight.
- [UI-E2I-Synth: Advancing GUI Grounding with Large-Scale Instruction Synthesis](https://awesomecua.github.io/resources/arxiv-2504-11257/) — 2025-04-15
  UI-E2I-Synth uses GPT-4o to synthesize GUI grounding instructions with varied complexity, addressing small elements, imbalanced element types, and implicit requests. The accompanying UI-I2E-Bench evaluates instruction-to-element localization across these annotation challenges.
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://awesomecua.github.io/resources/arxiv-2504-10445/) — 2025-04-14
  RealWebAssist evaluates web assistance through sequences of instructions collected from real users across multiple websites. It tests intent interpretation, user-specific routines, long-term context, and visual grounding when instructions are ambiguous or evolve during interaction.
- [Breaking the Data Barrier -- Building GUI Agents Through Task Generalization](https://awesomecua.github.io/resources/arxiv-2504-10127/) — 2025-04-14
  Studies whether mid-training on GUI perception, multimodal reasoning, and text reasoning transfers to GUI-agent planning. Experiments compare 11 task sources and curated mixtures using WebArena and AndroidWorld to investigate training-data choices when GUI trajectories are scarce.
- [AgentRewardBench: Evaluating Automatic Evaluations of Web Agent Trajectories](https://awesomecua.github.io/resources/arxiv-2504-08942/) — 2025-04-11
  AgentRewardBench evaluates automated web-agent judges against expert reviews of 1,302 trajectories from five benchmarks. The annotations cover completion, side effects, and repetition, enabling comparison of LLM judges and rule-based task evaluators.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.github.io/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [ScreenSpot-Pro: GUI Grounding for Professional High-Resolution Computer Use](https://awesomecua.github.io/resources/arxiv-2504-07981/) — 2025-04-04
  Evaluates GUI target localization in high-resolution professional software and studies cascaded visual search to narrow the target region.
- [ReuseDroid: A VLM-empowered Android UI Test Migrator Boosted by Active Feedback](https://awesomecua.github.io/resources/arxiv-2504-02357/) — 2025-04-03
  ReuseDroid migrates Android GUI tests between functionally similar apps using VLM agents that separate shared test intent from app-specific interaction flows. It introduces LinPro, a dataset of 578 migration tasks across 39 apps, to evaluate test transfer.
- [Are Autonomous Web Agents Good Testers?](https://awesomecua.github.io/resources/arxiv-2504-01495/) — 2025-04-02
  Adapts web agents to execute natural-language test steps, verify assertions, and issue test verdicts. The study introduces 113 passing and failing test cases across three offline web applications and compares two agent implementations with qualitative failure analysis.
- [An Illusion of Progress? Assessing the Current State of Web Agents](https://awesomecua.github.io/resources/arxiv-2504-01382/) — 2025-04-02
  Introduces Online-Mind2Web, with 300 tasks across 136 live websites, and examines how benchmark design affects assessments of web agents. It also develops an LLM judge for task completion and compares its judgments with human evaluation.
- [Navi-plus: Managing Ambiguous GUI Navigation Tasks with Follow-up Questions](https://awesomecua.github.io/resources/arxiv-2503-24180/) — 2025-03-31
  Navi-plus evaluates GUI agents that ask follow-up questions to complete ambiguous user instructions. It provides GUI clarification question-answer pairs and Dual-Stream Trajectory Evaluation for this interactive setting.
- [sudo rm -rf agentic_security](https://awesomecua.github.io/resources/arxiv-2503-20279/) — 2025-03-26
  Evaluates security failures of computer-use agents under adversarial requests and screen-context manipulation. The study examines refusal behavior while agents perform tasks in desktop and web environments.
- [Agent-Initiated Interaction in Phone UI Automation](https://awesomecua.github.io/resources/arxiv-2503-19537/) — 2025-03-25
  Defines when phone agents should request user interaction and introduces AndroidInteraction annotations for deciding whether and how to engage the user.
- [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://awesomecua.github.io/resources/arxiv-2503-16788/) — 2025-03-21
  This study compares matched reasoning and non-reasoning vision-language models on static mobile GUI tasks and interactive AndroidWorld navigation. It finds that chain-of-thought effects vary across tasks and model families.
- [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.github.io/resources/arxiv-2503-15661/) — 2025-03-19
  Provides annotated desktop demonstrations for evaluating element grounding, layout grounding, and action prediction.
- [STEVE: A Step Verification Pipeline for Computer-use Agent Training](https://awesomecua.github.io/resources/arxiv-2503-12532/) — 2025-03-16
  Labels individual computer-use actions by comparing surrounding screenshots, then trains agents from both successful and unsuccessful steps.
- [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2503-09780/) — 2025-03-12
  Evaluates whether autonomous web agents minimize use of sensitive personal information when completing tasks that expose unnecessary private data.
- [In-Context Defense in Computer Agents: An Empirical Study](https://awesomecua.github.io/resources/arxiv-2503-09241/) — 2025-03-12
  Studies in-context defenses for computer agents exposed to misleading pop-ups and other environmental instructions. It examines defensive reasoning before action planning and how a small set of examples changes resistance to these attacks.
- [BEARCUBS: A benchmark for computer-using web agents](https://awesomecua.github.io/resources/arxiv-2503-07919/) — 2025-03-10
  BEARCUBS provides 111 live-web information-seeking questions with short answers and human-validated browsing trajectories. Its tasks require multimodal computer interaction, including video understanding and navigation of interactive 3D content.
- [FedMABench: Benchmarking Mobile Agents on Decentralized Heterogeneous User Data](https://awesomecua.github.io/resources/arxiv-2503-05143/) — 2025-03-07
  Introduces a benchmark for federated mobile-agent training under heterogeneous user and application distributions, combining datasets, algorithms, and base models.
- [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2503-04957/) — 2025-03-06
  Pairs benign and harmful web tasks to assess deliberate misuse risks and categorize agent behavior by risk level.
- [AutoEval: A Practical Framework for Autonomous Evaluation of Mobile Agents](https://awesomecua.github.io/resources/arxiv-2503-02403/) — 2025-03-04
  Generates reward signals from UI-state changes and uses a judging system to evaluate mobile agents with reduced manual evaluator construction.
- [Why Are Web AI Agents More Vulnerable Than Standalone LLMs? A Security Analysis](https://awesomecua.github.io/resources/arxiv-2502-20383/) — 2025-02-27
  Analyzes web-agent vulnerabilities at the component level, examining goal placement in prompts, multistep action generation, and observations as sources of increased susceptibility.
- [Towards Sustainable Web Agents: A Plea for Transparency and Dedicated Metrics for Energy Consumption](https://awesomecua.github.io/resources/arxiv-2502-17903/) — 2025-02-25
  Examines energy and carbon-accounting limitations in web-agent evaluation and argues for transparent, dedicated sustainability measurements.
- [Towards Enterprise-Ready Computer Using Generalist Agent](https://awesomecua.github.io/resources/arxiv-2503-01861/) — 2025-02-24
  Describes the CUGA enterprise-agent development process, emphasizing iterative evaluation, failure analysis, and refinement on software-task benchmarks.
- [Programming with Pixels: Can Computer-Use Agents do Software Engineering?](https://awesomecua.github.io/resources/arxiv-2502-18525/) — 2025-02-24
  Introduces a visual IDE environment and benchmark for software-engineering tasks, comparing screenshot-based control with access to editing and shell tools.
- [Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks](https://awesomecua.github.io/resources/arxiv-2502-13053/) — 2025-02-18
  Examines active environmental injection against mobile agents, testing whether adversarial interface content redirects decisions during task execution.
- [WorldGUI: An Interactive Benchmark for Desktop GUI Automation from Any Starting Point](https://awesomecua.github.io/resources/arxiv-2502-08047/) — 2025-02-12
  Introduces desktop and web tasks with varied initial states to test planning recovery and adaptability beyond canonical starting configurations.
- [CowPilot: A Framework for Autonomous and Human-Agent Collaborative Web Navigation](https://awesomecua.github.io/resources/arxiv-2501-16609/) — 2025-01-28
  Introduces CowPilot, a web-navigation framework where agents suggest actions and users can pause, reject, override, or resume them. It evaluates autonomous and collaborative use through task success and human effort.
- [WinClick: GUI Grounding with Multimodal Large Language Models](https://awesomecua.github.io/resources/arxiv-2503-04730/) — 2025-01-27
  Introduces a screenshot-based Windows GUI agent and the WinSpot benchmark for evaluating localization of actionable interface regions.
- [WebWalker: Benchmarking LLMs in Web Traversal](https://awesomecua.github.io/resources/arxiv-2501-07572/) — 2025-01-13
  Introduces WebWalkerQA and an exploration-and-critique framework for gathering information by traversing multiple levels of a website.
- [A3: Android Agent Arena for Mobile GUI Agents with Essential-State Procedural Evaluation](https://awesomecua.github.io/resources/arxiv-2501-01149/) — 2025-01-02
  Introduces Android Agent Arena with online application tasks and procedural evaluation based on reaching essential intermediate states.
- [GUI Testing Arena: A Unified Benchmark for Advancing Autonomous GUI Testing Agent](https://awesomecua.github.io/resources/arxiv-2412-18426/) — 2024-12-24
  Evaluates GUI testing through test-intent generation, execution, and defect detection using real, modified, and synthetic mobile application data.
- [TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks](https://awesomecua.github.io/resources/arxiv-2412-14161/) — 2024-12-18
  Simulates a software-company workplace to evaluate agents on professional tasks involving websites, programs, files, and coworker communication.
- [Large Action Models: From Inception to Implementation](https://awesomecua.github.io/resources/arxiv-2412-10047/) — 2024-12-13
  Uses a Windows-agent case study to describe a development workflow for large action models, covering data collection, training, grounding, environment integration, and evaluation.
- [The BrowserGym Ecosystem for Web Agent Research](https://awesomecua.github.io/resources/arxiv-2412-05467/) — 2024-12-06
  Describes BrowserGym's shared web interaction environment and AgentLab tooling for consistent experiments across multiple agent benchmarks.
- [Generalist Virtual Agents: A Survey on Autonomous Agents Across Digital Platforms](https://awesomecua.github.io/resources/arxiv-2411-10943/) — 2024-11-17
  Surveys virtual agents for browsers, applications and operating systems, organizing prior work by task type, observation and action spaces, model strategies and evaluation methods. It examines screen-based interaction and keyboard, mouse and touch control, alongside transferability and long-sequence decision-making challenges.
- [The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use](https://awesomecua.github.io/resources/arxiv-2411-10323/) — 2024-11-15
  Presents a preliminary study of Claude 3.5 Computer Use across desktop tasks and software, analyzing planning, action, and critique behavior and providing a framework for deploying GUI-automation models.
- [Attacking Vision-Language Computer Agents via Pop-ups](https://awesomecua.github.io/resources/arxiv-2411-02391/) — 2024-11-04
  Tests whether adversarial visual pop-ups divert computer agents from intended tasks in desktop and web benchmark environments.
- [Foundations and Recent Trends in Multimodal Mobile Agents: A Survey](https://awesomecua.github.io/resources/arxiv-2411-02006/) — 2024-11-04
  Surveys multimodal mobile agents, organizing prompt-based and training-based approaches alongside evaluation benchmarks, supporting technologies, and open challenges in mobile task execution.
- [AndroidLab: Training and Systematic Benchmarking of Android Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2410-24024/) — 2024-10-31
  Provides a shared Android action environment, reproducible tasks, and instruction data for training and comparing language and multimodal agents.
- [Evaluating Cultural and Social Awareness of LLM Web Agents](https://awesomecua.github.io/resources/arxiv-2410-23252/) — 2024-10-30
  Introduces CASA to assess web agents' responses to cultural and social norms in shopping and forum tasks, including misleading observations.
- [VideoWebArena: Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://awesomecua.github.io/resources/arxiv-2410-19100/) — 2024-10-24
  Evaluates whether web agents can retain procedural skills and factual information from long video tutorials and use them during tasks.
- [MobileSafetyBench: Evaluating Safety of Autonomous Agents in Mobile Device Control](https://awesomecua.github.io/resources/arxiv-2410-17520/) — 2024-10-23
  Evaluates mobile agents on misuse, side effects, and indirect prompt-injection risks in an Android emulator environment.
- [AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://awesomecua.github.io/resources/arxiv-2410-17401/) — 2024-10-22
  Introduces a black-box web-agent red-teaming framework that learns adversarial prompts from agent feedback to study security weaknesses.
- [Beyond Browsing: API-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2410-16464/) — 2024-10-21
  Compares browsing-only, API-only, and hybrid web agents on WebArena, examining how access to application APIs changes task execution alongside browser interaction.
- [SPA-Bench: A Comprehensive Benchmark for SmartPhone Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2410-15164/) — 2024-10-19
  Introduces a smartphone-agent benchmark with English and Chinese tasks, real-time Android interaction, and completion and resource-use metrics.
- [Refusal-Trained LLMs Are Easily Jailbroken As Browser Agents](https://awesomecua.github.io/resources/arxiv-2410-13886/) — 2024-10-11
  Introduces BrowserART and studies whether chat-model refusal behavior transfers to browser agents carrying out potentially harmful instructions.
- [From Interaction to Impact: Towards Safer AI Agents Through Understanding and Evaluating Mobile UI Operation Impacts](https://awesomecua.github.io/resources/arxiv-2410-09006/) — 2024-10-11
  Develops a taxonomy of mobile-action consequences and annotated interaction data to evaluate whether models recognize impactful or risky UI operations.
- [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://awesomecua.github.io/resources/arxiv-2410-06703/) — 2024-10-09
  Evaluates web-task completion under explicit enterprise policies, measuring policy-compliant completion and safety violations separately.
- [Multimodal Auto Validation For Self-Refinement in Web Agents](https://awesomecua.github.io/resources/arxiv-2410-00689/) — 2024-10-01
  Studies text and visual validation for web agents and uses the resulting validator to detect failures and guide workflow self-refinement.
- [Inferring Alt-text For UI Icons With Large Language Models During App Development](https://awesomecua.github.io/resources/arxiv-2409-18060/) — 2024-09-26
  Introduces IconDesc, which generates mobile icon alt-text from partial UI context such as element identifiers, bounds, nearby text and hierarchy. Model evaluation and a user study examine the resulting accessibility descriptions.
- [The Impact of Element Ordering on LM Agent Performance](https://awesomecua.github.io/resources/arxiv-2409-12089/) — 2024-09-18
  Studies how the ordering of UI elements in an agent observation affects web and desktop performance. A pixel-based element detector and dimensionality-reduction ordering are evaluated on OmniACT when document hierarchy is unavailable.
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://awesomecua.github.io/resources/arxiv-2409-11295/) — 2024-09-17
  Evaluates privacy-directed webpage instruction injection against generalist web agents using PII-related interaction steps from Mind2Web, including attempts to expose specific user information or entire requests.
- [Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-08264/) — 2024-09-12
  Adapts real-desktop evaluation to Windows applications and supports parallel execution of benchmark tasks.
- [WebQuest: A Benchmark for Multimodal QA on Web Page Sequences](https://awesomecua.github.io/resources/arxiv-2409-13711/) — 2024-09-06
  Introduces question answering over individual screens, multiple web pages, and navigation traces to test information synthesis across views.
- [From Grounding to Planning: Benchmarking Bottlenecks in Web Agents](https://awesomecua.github.io/resources/arxiv-2409-01927/) — 2024-09-03
  Separates web-agent planning and grounding evaluations on Mind2Web to analyze which components limit task performance.
- [VisualAgentBench: Towards Large Multimodal Models as Visual Foundation Agents](https://awesomecua.github.io/resources/arxiv-2408-06327/) — 2024-08-12
  Benchmarks visual agents across GUI, embodied, and design tasks, with training trajectories collected through solvers, agents, and human demonstrations.
- [Caution for the Environment: Multimodal LLM Agents are Susceptible to Environmental Distractions](https://awesomecua.github.io/resources/arxiv-2408-02544/) — 2024-08-05
  Measures how irrelevant GUI content affects multimodal agents using a simulated dataset and three perception patterns. The study also examines adversarial environment injection and possible ways to improve instruction faithfulness.
- [OfficeBench: Benchmarking Language Agents across Multiple Applications for Office Automation](https://awesomecua.github.io/resources/arxiv-2407-19056/) — 2024-07-26
  Evaluates language agents on office workflows requiring information integration, long-term planning, and switching between applications.
- [AppWorld: A Controllable World of Apps and People for Benchmarking Interactive Coding Agents](https://awesomecua.github.io/resources/arxiv-2407-18901/) — 2024-07-26
  Introduces simulated application APIs and state-based task evaluation for interactive coding agents performing everyday digital workflows.
- [AssistantBench: Can Web Agents Solve Realistic and Time-Consuming Tasks?](https://awesomecua.github.io/resources/arxiv-2407-15711/) — 2024-07-22
  Introduces realistic open-web tasks and the SeePlanAct agent, analyzing the limitations of browsing and retrieval in time-consuming assistant work.
- [Spider2-V: How Far Are Multimodal Agents From Automating Data Science and Engineering Workflows?](https://awesomecua.github.io/resources/arxiv-2407-10956/) — 2024-07-15
  Benchmarks multimodal agents on data-science and engineering workflows involving enterprise applications, code, and GUI operations in real computer environments.
- [Systematic Categorization, Construction and Evaluation of New Attacks against Multi-modal Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2407-09295/) — 2024-07-12
  Develops a threat taxonomy and evaluation framework for attacks against multimodal mobile GUI agents, with case studies and dataset experiments.
- [AUITestAgent: Automatic Requirements Oriented GUI Function Testing](https://awesomecua.github.io/resources/arxiv-2407-09018/) — 2024-07-12
  Automates mobile GUI tests from natural-language requirements, combining action generation with verification based on interaction traces.
- [UICrit: Enhancing Automated Design Evaluation with a UICritique Dataset](https://awesomecua.github.io/resources/arxiv-2407-08850/) — 2024-07-11
  Introduces designer-authored mobile UI critiques and quality ratings, studying how targeted examples improve automated design feedback.
- [WorkArena++: Towards Compositional Planning and Reasoning-based Common Knowledge Work Tasks](https://awesomecua.github.io/resources/arxiv-2407-05291/) — 2024-07-07
  Defines compositional enterprise workflows to evaluate planning and reasoning, with generation of ground-truth interaction traces.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [CRAB: Cross-environment Agent Benchmark for Multimodal Language Model Agents](https://awesomecua.github.io/resources/arxiv-2407-01511/) — 2024-07-01
  Introduces CRAB, a framework for cross-environment agent tasks with graph-based evaluation and a benchmark spanning desktop and phone interactions.
- [Tree Search for Language Model Agents](https://awesomecua.github.io/resources/arxiv-2407-01476/) — 2024-07-01
  Applies best-first search to agent actions within interactive web environments, allowing exploration and multistep planning at inference time. WebArena and VisualWebArena experiments examine search behavior and test-time computation.
- [Mobile-Bench: An Evaluation Benchmark for LLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2407-00993/) — 2024-07-01
  Evaluates mobile agents using combined UI and API actions, tasks with varying app scope, and checkpoints for intermediate progress.
- [Identifying User Goals from UI Trajectories](https://awesomecua.github.io/resources/arxiv-2406-14314/) — 2024-06-20
  Defines goal identification from observed UI trajectories and an evaluation method for comparing intent descriptions within the same interface context. Experiments reuse Android and web automation data to compare human and model inference of users’ detailed goals.
- [E-ANT: A Large-Scale Dataset for Efficient Automatic GUI NavigaTion](https://awesomecua.github.io/resources/arxiv-2406-14250/) — 2024-06-20
  Introduces Chinese-language GUI navigation traces and annotated screenshots collected from human interactions with mini-applications.
- [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://awesomecua.github.io/resources/arxiv-2406-13264/) — 2024-06-19
  Introduces WONDERBREAD, a benchmark pairing human WebArena workflow demonstrations with screen recordings, action logs, and written procedures. Six evaluation tasks cover documentation, knowledge transfer, and process improvement beyond end-to-end execution.
- [Dissecting Adversarial Robustness of Multimodal LM Agents](https://awesomecua.github.io/resources/arxiv-2406-12814/) — 2024-06-18
  Introduces adversarial tasks on VisualWebArena and an evaluation framework that tracks how manipulated information passes between agent components. The analysis examines vulnerabilities introduced by reflection and tree-search evaluators as well as direct action generation.
- [WebCanvas: Benchmarking Web Agents in Online Environments](https://awesomecua.github.io/resources/arxiv-2406-12373/) — 2024-06-18
  Introduces WebCanvas and Mind2Web-Live, evaluating online task progress through meaningful intermediate states on changing websites.
- [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://awesomecua.github.io/resources/arxiv-2406-10819/) — 2024-06-16
  Introduces video-based GUI questions and annotations for studying temporal interface understanding across varied interaction settings.
- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://awesomecua.github.io/resources/arxiv-2406-10227/) — 2024-06-14
  Evaluates GUI automation from instructional videos at separate levels of high-level planning, action narration, and primitive execution.
- [GuardAgent: Safeguard LLM Agents by a Guard Agent via Knowledge-Enabled Reasoning](https://awesomecua.github.io/resources/arxiv-2406-09187/) — 2024-06-13
  Introduces GuardAgent, which translates safety requests into executable guardrail code using plans and retrieved demonstrations. Mind2Web-SC supplies a web-agent safety-policy evaluation alongside a separate healthcare access-control benchmark.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.github.io/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [MobileAgentBench: An Efficient and User-Friendly Benchmark for Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2406-08184/) — 2024-06-12
  Introduces a mobile-agent benchmark with tasks across open-source applications, organized by difficulty to reduce manual evaluation effort.
- [On the Effects of Data Scale on UI Control Agents](https://awesomecua.github.io/resources/arxiv-2406-03679/) — 2024-06-06
  Studies how Android task performance changes with demonstration scale and releases AndroidControl with high- and low-level instructions.
- [WebSuite: Systematically Evaluating Why Web Agents Fail](https://awesomecua.github.io/resources/arxiv-2406-01623/) — 2024-06-01
  WebSuite organizes browser operations into an action taxonomy and tests both isolated controls and complete workflows. Its diagnostic tasks attribute failures to specific actions, enabling comparison of text-based and multimodal web agents.
- [Large Language Models Can Self-Improve At Web Agent Tasks](https://awesomecua.github.io/resources/arxiv-2405-20309/) — 2024-05-30
  Examines self-improvement by fine-tuning web agents on three mixtures of model-generated training data. WebArena experiments and trajectory-level evaluation measures study task performance, robustness, and behavior beyond aggregate success rates.
- [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2405-14573/) — 2024-05-23
  Introduces parameterized Android tasks with initialization, success checks, and cleanup for reproducible interactive evaluation.
- [Latent State Estimation Helps UI Agents to Reason](https://awesomecua.github.io/resources/arxiv-2405-11120/) — 2024-05-17
  Studies explicit textual estimates of latent UI state, including whether commanded actions occurred and how far a task has progressed. The experiments compare agents that reason with these estimates against agents that omit them across public and internal task benchmarks.
- [Unveiling Disparities in Web Task Handling Between Human and Web Agent](https://awesomecua.github.io/resources/arxiv-2405-04497/) — 2024-05-07
  Compares human think-aloud web-task behavior with web-agent planning, action, and reflection. The analysis highlights differences in updating plans, handling ambiguity, and investigating failures.
- [Visual Grounding Methods for Efficient Interaction with Desktop Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2407-01558/) — 2024-05-05
  Compares modular OCR-based and end-to-end methods for locating desktop GUI targets from natural-language instructions.
- [Navigating WebAI: Training Agents to Complete Web Tasks with Large Language Models and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2405-00516/) — 2024-05-01
  Combines supervised and reinforcement learning for MiniWoB web tasks and investigates whether agents understand HTML structure or memorize target elements.
- [MMAC-Copilot: Multi-modal Agent Collaboration Operating Copilot](https://awesomecua.github.io/resources/arxiv-2404-18074/) — 2024-04-28
  Introduces MMAC-Copilot, which coordinates agents with different expertise to operate PC applications. VIBench evaluates visual interaction with applications that lack usable APIs, spanning office, recreation and game tasks.
- [Benchmarking Mobile Device Control Agents across Diverse Configurations](https://awesomecua.github.io/resources/arxiv-2404-16660/) — 2024-04-25
  Introduces B-MoCA, an interactive mobile-control benchmark that varies device settings, layouts, and languages to test generalization.
- [MMInA: Benchmarking Multihop Multimodal Internet Agents](https://awesomecua.github.io/resources/arxiv-2404-09992/) — 2024-04-15
  Evaluates multimodal agents on compositional tasks across changing websites and studies replaying prior trajectories as memory support.
- [Large Language Models for Mobile GUI Text Input Generation: An Empirical Study](https://awesomecua.github.io/resources/arxiv-2404-08948/) — 2024-04-13
  Studies language-model generation of mobile text inputs, comparing UI representations, execution feedback, and human assistance for app testing.
- [Enhancing Mobile "How-to" Queries with Automated Search Results Verification and Reranking](https://awesomecua.github.io/resources/arxiv-2404-08860/) — 2024-04-13
  Executes instructions from mobile how-to search results inside a controlled Android environment, then uses the observed success of those instructions to verify and rerank technical-support results.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.github.io/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.
- [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://awesomecua.github.io/resources/arxiv-2404-07972/) — 2024-04-11
  Introduces a real-computer evaluation environment with execution-based checks for tasks spanning desktop applications and operating-system state.
- [Autonomous Evaluation and Refinement of Digital Agents](https://awesomecua.github.io/resources/arxiv-2404-06474/) — 2024-04-09
  Compares automatic trajectory evaluators for web navigation and device control against oracle judgments. The resulting feedback is used for agent fine-tuning and inference-time guidance, including experiments on WebArena.
- [VisualWebBench: How Far Have Multimodal LLMs Evolved in Web Page Understanding and Grounding?](https://awesomecua.github.io/resources/arxiv-2404-05955/) — 2024-04-09
  Separately evaluates web-page reading, understanding, and element grounding across tasks drawn from real websites.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.github.io/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [Tur\[k\]ingBench: A Challenge Benchmark for Web Agents](https://awesomecua.github.io/resources/arxiv-2403-11905/) — 2024-03-18
  Evaluates web agents on multimodal annotation tasks adapted from HTML interfaces originally built for crowdsourcing workers.
- [WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?](https://awesomecua.github.io/resources/arxiv-2403-07718/) — 2024-03-12
  Introduces enterprise web tasks on ServiceNow and BrowserGym interfaces for evaluating browser-based agents.
- [PPTC-R benchmark: Towards Evaluating the Robustness of Large Language Models for PowerPoint Task Completion](https://awesomecua.github.io/resources/arxiv-2403-03788/) — 2024-03-06
  Benchmarks robustness of API-based PowerPoint completion under sentence-level, semantic, and multilingual instruction perturbations and changes to the available API set.
- [OmniACT: A Dataset and Benchmark for Enabling Multimodal Generalist Autonomous Agents for Desktop and Web](https://awesomecua.github.io/resources/arxiv-2402-17553/) — 2024-02-27
  Introduces a dataset and benchmark for generating executable task scripts from screenshots and visually grounded desktop or web instructions.
- [WIPI: A New Web Threat for LLM-Driven Web Agents](https://awesomecua.github.io/resources/arxiv-2402-16965/) — 2024-02-26
  Studies WIPI, a black-box indirect-instruction threat in which webpage content redirects LLM-driven web agents. Evaluation spans plugin-based agents, Web GPTs, and open-source web-agent implementations.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.github.io/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [Understanding the Weakness of Large Language Model Agents within a Complex Android Environment](https://awesomecua.github.io/resources/arxiv-2402-06596/) — 2024-02-09
  Introduces AndroidArena and analyzes agent limitations in cross-application tasks, user constraints, exploration, and reflection.
- [WebLINX: Real-World Website Navigation with Multi-Turn Dialogue](https://awesomecua.github.io/resources/arxiv-2402-05930/) — 2024-02-08
  Collects expert demonstrations of conversational web navigation and studies retrieval-based element selection for processing large pages.
- [WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models](https://awesomecua.github.io/resources/arxiv-2401-13919/) — 2024-01-25
  Combines multimodal web interaction with a real-website task collection and an automated evaluation protocol.
- [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://awesomecua.github.io/resources/arxiv-2401-13649/) — 2024-01-24
  Introduces visually grounded website tasks for evaluating multimodal agents that must interpret both images and text.
- [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://awesomecua.github.io/resources/arxiv-2401-13178/) — 2024-01-24
  Introduces AgentBoard, a multiturn agent evaluation framework with intermediate progress metrics and analysis tools. Its broader task suite includes WebShop and WebArena interactions with stepwise progress measurements.
- [WebVLN: Vision-and-Language Navigation on Websites](https://awesomecua.github.io/resources/arxiv-2312-15820/) — 2023-12-25
  WebVLN trains website navigation from question-based instructions using both rendered visual information and underlying HTML. It introduces WebVLN-v1 and a website-aware navigation network to study this digital variant of vision-and-language navigation.
- [ASSISTGUI: Task-Oriented Desktop Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2312-13108/) — 2023-12-20
  Introduces Windows application tasks and an actor-critic agent framework for mouse-and-keyboard automation of desktop workflows.
- [Exposing Limitations of Language Model Agents in Sequential-Task Compositions on the Web](https://awesomecua.github.io/resources/arxiv-2311-18751/) — 2023-11-30
  CompWoB adds 50 composed web-automation tasks to study generalization from simpler interactions. The paper compares prompted and fine-tuned agents, balances task training data, and probes sensitivity to changes in instruction order.
- [GAIA: a benchmark for General AI Assistants](https://awesomecua.github.io/resources/arxiv-2311-12983/) — 2023-11-21
  Introduces questions that test assistant reasoning, multimodal understanding, browsing, and tool use beyond screen-action execution alone.
- [PPTC Benchmark: Evaluating Large Language Models for PowerPoint Task Completion](https://awesomecua.github.io/resources/arxiv-2311-01767/) — 2023-11-03
  Evaluates multi-turn PowerPoint creation and editing, scoring the resulting presentation files rather than requiring a fixed API sequence.
- [InstructExcel: A Benchmark for Natural Language Instruction in Excel](https://awesomecua.github.io/resources/arxiv-2310-14495/) — 2023-10-23
  Introduces InstructExcel, a benchmark for generating Excel OfficeScripts from natural-language requests, built using scripts recorded from user actions and a collection of existing spreadsheets.
- [AllTogether: Investigating the Efficacy of Spliced Prompt for Web Navigation using Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-18331/) — 2023-10-20
  AllTogether standardizes prompts for HTML-based web navigation and compares prompting with instruction fine-tuning. Its analysis examines how HTML context, interaction history, and current environmental feedback affect task execution.
- [AgentBench: Evaluating LLMs as Agents](https://awesomecua.github.io/resources/arxiv-2308-03688/) — 2023-08-07
  Evaluates language agents across eight interactive environments and analyzes failures in reasoning, decisions, and instruction following.
- [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2307-13854/) — 2023-07-25
  Introduces reproducible web environments with task-completion checks for evaluating autonomous web agents.
- [Android in the Wild: A Large-Scale Dataset for Android Device Control](https://awesomecua.github.io/resources/arxiv-2307-10088/) — 2023-07-19
  Collects Android interaction demonstrations with screens, actions, and instructions across device and platform variations for robustness evaluation.
- [Mind2Web: Towards a Generalist Agent for the Web](https://awesomecua.github.io/resources/arxiv-2306-06070/) — 2023-06-09
  Introduces a web-task dataset spanning diverse websites and evaluates generalization to unseen sites and domains.
- [Responsible Task Automation: Empowering Large Language Models as Responsible Task Automators](https://awesomecua.github.io/resources/arxiv-2306-01242/) — 2023-06-02
  Presents ResponsibleTA, a coordinator-executor framework that checks command feasibility and task completion while using local memory for privacy-related controls. The paper compares prompted and learned implementations and evaluates them on UI task automation.
- [SheetCopilot: Bringing Software Productivity to the Next Level through Large Language Models](https://awesomecua.github.io/resources/arxiv-2305-19308/) — 2023-05-30
  Introduces SheetCopilot, an agent that steers spreadsheet software via atomic virtual APIs, along with a 221-task spreadsheet manipulation benchmark.
- [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://awesomecua.github.io/resources/arxiv-2305-16653/) — 2023-05-26
  Introduces AdaPlanner, which revises code-structured plans in response to environmental feedback and reuses successful plans as exemplars. Experiments include MiniWoB++ web tasks alongside ALFWorld.
- [Mobile-Env: Building Qualified Evaluation Benchmarks for LLM-GUI Interaction](https://awesomecua.github.io/resources/arxiv-2305-08144/) — 2023-05-14
  Provides an Android benchmark toolkit with controlled environments, intermediate feedback, and task sets for reproducible GUI-agent evaluation.
- [ScreenQA: Large-Scale Question-Answer Pairs over Mobile App Screenshots](https://awesomecua.github.io/resources/arxiv-2209-08199/) — 2022-09-16
  Introduces screenshot question answering over mobile interfaces, linking answers to screen content and bounding boxes.
- [WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents](https://awesomecua.github.io/resources/arxiv-2207-01206/) — 2022-07-04
  Provides a simulated shopping environment where language agents search, configure, and select products from natural-language requirements.
- [A Dataset for Interactive Vision-Language Navigation with Unknown Command Feasibility](https://awesomecua.github.io/resources/arxiv-2202-02312/) — 2022-02-04
  Introduces MoTIF mobile-app interactions with feasible and infeasible commands, feasibility explanations, and follow-up questions for ambiguous requests.
- [WebSRC: A Dataset for Web-Based Structural Reading Comprehension](https://awesomecua.github.io/resources/arxiv-2101-09465/) — 2021-01-23
  Introduces question answering over webpage text and structure, with aligned HTML, screenshots, and metadata for structural reading comprehension.
- [Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://awesomecua.github.io/resources/arxiv-2008-05132/) — 2020-08-12
  Compares seven traditional and learned GUI element detectors on more than 50,000 interface images. The analysis motivates a coarse-to-fine non-text detector combined with a learned text detector to address GUI-specific localization requirements.
- [Mapping Natural Language Commands to Web Elements](https://awesomecua.github.io/resources/arxiv-1808-09132/) — 2018-08-28
  Defines language grounding on webpages as choosing the UI element targeted by a natural-language command. A collection of more than 50,000 commands and three baseline models study functional references, relationships between elements, and visual position cues.
- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://awesomecua.github.io/resources/url-52a3261eb6a19b402e88/) — 2017-07-17
  Introduces World of Bits, a web-task platform combining human demonstrations, keyboard and mouse actions, and cached HTTP traffic for repeatable task environments. It evaluates agents trained through behavioral cloning and reinforcement learning.
- [End-to-End Goal-Driven Web Navigation](https://awesomecua.github.io/resources/arxiv-1602-02261/) — 2016-02-06
  Introduces WebNav for converting websites into goal-directed hyperlink navigation tasks and WikiNav for evaluating language-conditioned navigation and question answering on Wikipedia.
- [GUI Testing Using Computer Vision](https://awesomecua.github.io/resources/url-6262c757080f8838e62c/) — 2010-04
  Presents visual GUI test scripts that use images to specify actions and expected screen feedback. Recording both input events and screenshots can generate tests from demonstrations, supporting unit, regression, and test-driven workflows.

## Benchmarks

- [AgentBench](https://awesomecua.github.io/resources/github-thudm-agentbench/) — Date not recorded
  Agent evaluation suite with containerized tasks and a function-calling interface, including operating-system and shopping environments.
- [AgentDAM](https://awesomecua.github.io/resources/github-facebookresearch-ai-agent-privacy/) — Date not recorded
  Web-agent benchmark for measuring unnecessary use of sensitive personal information during end-to-end task execution.
- [AgentRewardBench](https://awesomecua.github.io/resources/github-mcgill-nlp-agent-reward-bench/) — Date not recorded
  A benchmark and evaluation toolkit for comparing automatic web-agent judges against expert judgments of task success, side effects and repetition.
- [AndroidArena](https://awesomecua.github.io/resources/github-androidarenaagent-androidarena/) — Date not recorded
  Android environment for evaluating language-model-driven agents.
- [AndroidLab](https://awesomecua.github.io/resources/github-thudm-android-lab/) — Date not recorded
  Reproducible Android benchmark of 138 tasks across nine apps on predefined virtual devices, run via AVD on Mac or Docker on Linux, released with the Android Instruct training set.
- [AndroidWorld](https://awesomecua.github.io/resources/github-google-research-android-world/) — Date not recorded
  Android environment with programmatic task evaluation for mobile agents.
- [AppSim-Bench](https://awesomecua.github.io/resources/github-acrab-agentic-labs-appsim/) — Date not recorded
  Simulated mobile applications and evaluation tooling for reproducible GUI-agent tasks with controlled application state.
- [AppWorld](https://awesomecua.github.io/resources/github-stonybrooknlp-appworld/) — Date not recorded
  Simulated applications, user data, and state-based task checks for evaluating agents that interact through APIs and code.
- [B-MoCA](https://awesomecua.github.io/resources/github-jylee425-b-moca/) — Date not recorded
  Mobile control benchmark with varied interface configurations.
- [BrowserART](https://awesomecua.github.io/resources/github-scaleapi-browser-art/) — Date not recorded
  Red-teaming benchmark and test suite from Scale AI evaluating whether refusal-trained language models can be jailbroken when deployed as browser agents.
- [BrowserGym](https://awesomecua.github.io/resources/github-servicenow-browsergym/) — Date not recorded
  Unified interfaces for browser-agent tasks and benchmark environments.
- [ColorBench](https://awesomecua.github.io/resources/github-madeagents-colorbench/) — Date not recorded
  A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.
- [CRAB](https://awesomecua.github.io/resources/github-camel-ai-crab/) — Date not recorded
  Cross-environment benchmark framework for multimodal agents.
- [CUAVerifierBench](https://awesomecua.github.io/resources/url-d5140d438466c1e1348a/) — Date not recorded
  Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.
- [EIA](https://awesomecua.github.io/resources/github-osu-nlp-group-eia-against-webagent/) — Date not recorded
  Evaluation suite for Environmental Injection Attacks that embed invisible malicious HTML elements into benign websites to test privacy leakage in generalist web agents.
- [FedMABench](https://awesomecua.github.io/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.
- [GUI-Robust](https://awesomecua.github.io/resources/github-chessbean1-gui-robust/) — Date not recorded
  Evaluation scripts and linked data for comparing GUI action predictions and task execution under ordinary and anomalous interface conditions.
- [GUIHalluBench](https://awesomecua.github.io/resources/github-ant-research-guihallubench/) — Date not recorded
  Measures hallucination in UI-element parsing by matching the boxes and descriptions a model lists for 1,000 English and 1,000 Chinese screenshots against human annotations.
- [iOSWorld](https://awesomecua.github.io/resources/github-ljang0-iosworld/) — Date not recorded
  Native iPhone-simulator benchmark with shared user data, application workflows, agent runners, and rubric-based scoring.
- [LlamaTouch](https://awesomecua.github.io/resources/github-llamatouch-llamatouch/) — Date not recorded
  Mobile UI task evaluation using application state information.
- [MacAgentBench](https://awesomecua.github.io/resources/github-jetastra-macagentbench/) — Date not recorded
  676 macOS tasks across 25 applications, each run in its own Docker container and scored by deterministic rule-based checks with multiple checkpoints.
- [MCPWorld](https://awesomecua.github.io/resources/github-saagent-mcpworld/) — Date not recorded
  Evaluation environment combining computer interaction with tool access.
- [Mind2Web](https://awesomecua.github.io/resources/github-osu-nlp-group-mind2web/) — Date not recorded
  Human demonstrations and tasks for generalist web navigation research.
- [Mind2Web 2](https://awesomecua.github.io/resources/github-osu-nlp-group-mind2web-2/) — Date not recorded
  Long-horizon agentic web search benchmark whose Agent-as-a-Judge framework scores time-varying, citation-backed answers, with evaluation scripts for its dev and test sets.
- [MiniWoB++](https://awesomecua.github.io/resources/github-farama-foundation-miniwob-plusplus/) — Date not recorded
  Over 100 web-interaction environments extending OpenAI's MiniWoB, controlled from Python through a Gymnasium API that drives the browser with Selenium.
- [MLA-Trust](https://awesomecua.github.io/resources/github-thu-ml-mla-trust/) — Date not recorded
  Unified evaluation framework measuring truthfulness, controllability, safety, and privacy of multimodal LLM agents across interactive web and mobile GUI tasks.
- [MMBench-GUI](https://awesomecua.github.io/resources/github-open-compass-mmbench-gui/) — Date not recorded
  Four-level GUI-agent benchmark across six platforms, from content understanding and element grounding to task automation and collaboration, scored with an efficiency-quality area metric.
- [MMInA](https://awesomecua.github.io/resources/github-shulin16-mmina/) — Date not recorded
  Multimodal web tasks in a WebArena-based environment that chain from 1 to 10 hops across sites such as a shopping store and Wikipedia, testing long-chain reasoning.
- [MobBench task definitions](https://awesomecua.github.io/resources/url-b53e03a6e4ca4226d126/) — Date not recorded
  A public set of real-device mobile task definitions used to evaluate MobA, with Chinese and English task material packaged in a versioned JSON release.
- [Mobile-Bench-v2 released data](https://awesomecua.github.io/resources/url-1d5b85321b98765141fc/) — Date not recorded
  Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.
- [Mobile-Eval-E task definitions](https://awesomecua.github.io/resources/url-342b081c3668a8bbe155/) — Date not recorded
  Task definitions for Mobile-Agent-E’s long-horizon, multi-app Android evaluation, packaged as a 25-record test split with rubrics and human-reference operation strings.
- [MobileAgentBench](https://awesomecua.github.io/resources/github-mobileagentbench-mobile-agent-bench/) — Date not recorded
  Automated benchmark for mobile LLM agents whose default tasks use ten Simple Mobile Tools Android apps, installed as a Python library that detects task completion.
- [MobileGUI-VBench](https://awesomecua.github.io/resources/url-d7a4f34a6a5202af5f64/) — Date not recorded
  Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.
- [MobileGym](https://awesomecua.github.io/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [MobileGym++ / MobileGym++ Bench](https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/) — Date not recorded
  Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.
- [MobileSafetyBench](https://awesomecua.github.io/resources/github-jylee425-mobilesafetybench/) — Date not recorded
  Android emulator testbed that scores mobile device-control agents on both safety and helpfulness, using ADB and Appium for observations, actions and success checks.
- [MobileWorld (Tongyi-MAI)](https://awesomecua.github.io/resources/github-tongyi-mai-mobileworld/) — Date not recorded
  A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.
- [MobileWorldBench](https://awesomecua.github.io/resources/github-jacklishufan-mobileworld/) — Date not recorded
  Benchmark of semantic world modeling for mobile agents, with question-answering tasks and GPT-judged generation tasks, plus training data built on AitW and AndroidControl screens.
- [OmniAct](https://awesomecua.github.io/resources/url-849a86beaee006c6b147/) — Date not recorded
  Dataset and benchmark for generating computer interaction programs.
- [Online Mind2Web](https://awesomecua.github.io/resources/github-osu-nlp-group-online-mind2web/) — Date not recorded
  300 tasks on 136 live websites for evaluating web agents online, with outdated tasks replaced over time, human-reviewed submissions and the WebJudge automatic evaluator.
- [OpenApps](https://awesomecua.github.io/resources/github-facebookresearch-openapps/) — Date not recorded
  Configurable browser apps and task rewards for testing computer-use agents under changes in content, layout and appearance.
- [OS-Critic Bench](https://awesomecua.github.io/resources/url-c73ba0618d1b3c505887/) — Date not recorded
  A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.
- [OS-Harm](https://awesomecua.github.io/resources/github-tml-epfl-os-harm/) — Date not recorded
  Benchmark for safety of computer-use agents across misuse, prompt injection, and unintended model behavior.
- [OS-Map](https://awesomecua.github.io/resources/github-os-copilot-os-map/) — Date not recorded
  An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.
- [OSWorld](https://awesomecua.github.io/resources/github-xlang-ai-osworld/) — Date not recorded
  Execution-based evaluation of agents performing tasks in real desktop environments.
- [OSWorld-G](https://awesomecua.github.io/resources/github-xlang-ai-osworld-g/) — Date not recorded
  Computer-use grounding benchmark with original and refined instructions, released with the Jedi synthetic data pipeline, a 4-million-example Jedi dataset and Jedi-3B and Jedi-7B models.
- [OSWorld-Human](https://awesomecua.github.io/resources/github-wuklab-osworld-human/) — Date not recorded
  Human reference trajectories and scoring code for measuring the action efficiency of computer-use agents on OSWorld tasks.
- [PPTC](https://awesomecua.github.io/resources/github-gydpku-pptc/) — Date not recorded
  PowerPoint creation and editing benchmark with API-based execution and checks of the resulting presentation files.
- [Precision CUA Bench](https://awesomecua.github.io/resources/github-microsoft-precision-cua-bench/) — Date not recorded
  Evaluation resources for pixel-precise cursor grounding in code editors.
- [RecreationBench](https://awesomecua.github.io/resources/url-d9d8e68f19ef0956d189/) — Date not recorded
  Tasks for recreating reference applications with hybrid computer interaction.
- [RiOSWorld](https://awesomecua.github.io/resources/github-yjyddq-riosworld/) — Date not recorded
  Measures risky behavior of multimodal computer-use agents in an Ubuntu virtual machine, with risk scenarios such as phishing emails and released evaluation trajectories.
- [SaaS-Bench](https://awesomecua.github.io/resources/github-unipat-ai-saas-bench/) — Date not recorded
  106 browser-driven business workflows across 23 self-hosted SaaS apps in six domains, scored by per-task verifiers that read each app's database and give partial credit.
- [SafeArena](https://awesomecua.github.io/resources/github-mcgill-nlp-safearena/) — Date not recorded
  Web-agent benchmark pairing benign and harmful tasks to study deliberate misuse risks.
- [ScienceBoard](https://awesomecua.github.io/resources/github-os-copilot-scienceboard/) — Date not recorded
  Scientific-workflow tasks for multimodal agents in desktop software such as ChimeraX, KAlgebra, Celestia, Grass GIS and Lean 4, with apps modified to expose state for evaluation.
- [Screen Point-and-Read / Tree-of-Lens](https://awesomecua.github.io/resources/github-ucsb-ai-screen-point-and-read/) — Date not recorded
  Screen-reading benchmark and Tree-of-Lens implementation for interpreting user-indicated regions and their layout context.
- [ScreenSpot](https://awesomecua.github.io/resources/url-7abb418096432f56c685/) — Date not recorded
  GUI grounding test set of 1,272 screenshot instructions from iOS, Android, macOS, Windows and web interfaces, each labeled with the target element's bounding box.
- [ScreenSpot Pro](https://awesomecua.github.io/resources/github-likaixin2000-screenspot-pro-gui-grounding/) — Date not recorded
  GUI grounding benchmark focused on professional high-resolution interfaces.
- [ScreenSpot v2](https://awesomecua.github.io/resources/url-bd7214de6d98917c2350/) — Date not recorded
  Second version of the ScreenSpot grounding test set, published by OS-Copilot as separate desktop, mobile and web annotation files with a shared screenshot archive.
- [ScreenSpot-v2 instruction variants](https://awesomecua.github.io/resources/url-17729e1c532ba7043404/) — Date not recorded
  Instruction variants over ScreenSpot-v2 screenshots that distinguish original commands, explicit actions, target descriptions and impossible operations.
- [SPA-Bench](https://awesomecua.github.io/resources/github-ai-agents-2030-spa-bench/) — Date not recorded
  340 single-app and cross-app tasks over 66 Chinese and English Android apps, with plug-in support for 11 smartphone agents and automatic coarse-to-fine success detection.
- [Spider2-V](https://awesomecua.github.io/resources/github-xlang-ai-spider2-v/) — Date not recorded
  Visual agent evaluation on data-science and engineering workflows.
- [ST-WebAgentBench](https://awesomecua.github.io/resources/github-segev-shlomov-st-webagentbench/) — Date not recorded
  BrowserGym-based benchmark for evaluating the safety and policy compliance of enterprise web agents across six trustworthiness risk dimensions.
- [TheAgentCompany](https://awesomecua.github.io/resources/github-theagentcompany-theagentcompany/) — Date not recorded
  Self-contained workplace environment for evaluating agents on professional tasks involving websites, files, code, and simulated coworkers.
- [VeriWeb (formerly VeriGUI)](https://awesomecua.github.io/resources/github-verigui-team-verigui/) — Date not recorded
  Verifiable web information-seeking benchmark renamed from VeriGUI; desktop evaluation is described as future work.
- [VideoGUI](https://awesomecua.github.io/resources/github-showlab-videogui/) — Date not recorded
  Benchmark for desktop GUI tasks derived from instructional videos.
- [VisualAgentBench](https://awesomecua.github.io/resources/github-thudm-visualagentbench/) — Date not recorded
  Evaluation framework spanning visual GUI, embodied, and design tasks, including mobile and WebArena-based environments.
- [VisualWebArena](https://awesomecua.github.io/resources/github-web-arena-x-visualwebarena/) — Date not recorded
  Visually grounded web tasks extending the WebArena evaluation setting.
- [VisualWebBench](https://awesomecua.github.io/resources/github-visualwebbench-visualwebbench/) — Date not recorded
  Evaluation of multimodal models on visual web understanding tasks.
- [WeaveBench](https://awesomecua.github.io/resources/url-6a212bc12f82c824f6b9/) — Date not recorded
  Computer-use benchmark mixing graphical interaction and code execution.
- [WebArena](https://awesomecua.github.io/resources/github-web-arena-x-webarena/) — Date not recorded
  Self-hosted web environments and tasks for evaluating autonomous web agents.
- [WebCanvas](https://awesomecua.github.io/resources/github-imeanai-webcanvas/) — Date not recorded
  Framework and evaluation resources for real-world web agents.
- [WebClick](https://awesomecua.github.io/resources/url-5e2bd1b3398974b79c9c/) — Date not recorded
  A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.
- [WebGames](https://awesomecua.github.io/resources/github-convergence-ai-webgames/) — Date not recorded
  150 client-side web challenges in five capability domains, built to be easy for humans but hard for browsing agents, each revealing a password when solved.
- [WebGuard](https://awesomecua.github.io/resources/github-osu-nlp-group-webguard/) — Date not recorded
  Codebase, annotation toolkit, and action-level risk dataset for training and evaluating guardrail models that flag unsafe browser-agent actions before execution.
- [WebLINX](https://awesomecua.github.io/resources/github-mcgill-nlp-weblinx/) — Date not recorded
  Demonstrations and evaluation for conversational web navigation.
- [WebRewardBench](https://awesomecua.github.io/resources/url-ac6d0f80765f5a32255a/) — Date not recorded
  An offline preference-evaluation set for web process reward models, pairing page and trajectory context with preferred and rejected candidate decisions.
- [WebShop](https://awesomecua.github.io/resources/github-princeton-nlp-webshop/) — Date not recorded
  Simulated shopping environment for instruction-following web agents.
- [WebTailBench](https://awesomecua.github.io/resources/url-3b6dfd52f98bfe76bc7f/) — Date not recorded
  Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.
- [WebTestBench](https://awesomecua.github.io/resources/github-friedrichor-webtestbench/) — Date not recorded
  An end-to-end web-testing benchmark where agents derive test checklists from development instructions, interact with deployed applications and report functional or constraint-related defects.
- [WebVoyager](https://awesomecua.github.io/resources/github-minorjerry-webvoyager/) — Date not recorded
  Multimodal web navigation agent and evaluation tasks on real websites.
- [Windows Agent Arena](https://awesomecua.github.io/resources/github-microsoft-windowsagentarena/) — Date not recorded
  Windows 11 benchmark for multimodal desktop agents in a reproducible VM that runs locally or in parallel on Azure ML, with a harder mode where agents must set tasks up themselves.
- [WindowsAgentArena-V2](https://awesomecua.github.io/resources/github-gair-nlp-windowsagentarena-v2/) — Date not recorded
  Windows benchmark revision with task/evaluator fixes and VM-initialization support, documented alongside PC-Agent-E.
- [WindowsWorld](https://awesomecua.github.io/resources/github-hitsz-tmg-windowsworld/) — Date not recorded
  Cross-application Windows benchmark with intermediate task evaluation.
- [WONDERBREAD](https://awesomecua.github.io/resources/github-hazyresearch-wonderbread/) — Date not recorded
  An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.
- [WorkArena](https://awesomecua.github.io/resources/github-servicenow-workarena/) — Date not recorded
  Browser-based enterprise workflow tasks built around ServiceNow.
- [WorldGUI](https://awesomecua.github.io/resources/github-showlab-worldgui/) — Date not recorded
  611 desktop GUI tasks that agents must complete from varied starting points, shipped with instructional videos and project files, plus the self-reflective WorldGUI-Agent baseline.

## Datasets

- [CUA-Gym](https://awesomecua.github.io/resources/url-6aa1aa58a7a888395189/) — Date not recorded
  Computer-use environment and task resources for agent research.
- [GUI-R1 data bundle](https://awesomecua.github.io/resources/url-df680385f18b01a825be/) — Date not recorded
  Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.
- [ScienceBoard evaluation trajectories](https://awesomecua.github.io/resources/url-4784f63cd7117f64a2a3/) — Date not recorded
  Archives of ScienceBoard agent evaluation runs, separated by agent configuration and screenshot, accessibility-tree or set-of-marks observation mode.
- [ScreenDrag](https://awesomecua.github.io/resources/url-fe43af1801032be708cc/) — Date not recorded
  GUI dragging data with screen observations, prior state, and continuous pointer actions, provided as trajectory files and Parquet representations.
- [ScreenSpot-Pro data](https://awesomecua.github.io/resources/url-c79e152e6f7af1a9efed/) — Date not recorded
  High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.
- [UI-AGILE-Data](https://awesomecua.github.io/resources/url-41abb1b7206689cf5057/) — Date not recorded
  UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.
- [UIBert AppSim and RefExp annotations](https://awesomecua.github.io/resources/github-google-research-datasets-uibert/) — Date not recorded
  Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.
- [UICrit](https://awesomecua.github.io/resources/github-google-research-datasets-uicrit/) — Date not recorded
  Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.
- [WebPRM Collection preference data](https://awesomecua.github.io/resources/url-8dfc84eb4016204fe70a/) — Date not recorded
  Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

## Models

- [WebJudge 7B](https://awesomecua.github.io/resources/url-772161f06c2b3d4978b5/) — Date not recorded
  A visual trajectory judge that retains selected intermediate screenshots to evaluate whether a web agent completed its task.

## Engineering & industry

- [AdvAgent (formerly AdvWeb)](https://awesomecua.github.io/resources/github-ai-secure-advagent/) — Date not recorded
  Research code for constructing and evaluating adversarial inputs to web agents, with a black-box red-team pipeline using Mind2Web data and SeeAct.
- [AgentLab](https://awesomecua.github.io/resources/github-servicenow-agentlab/) — Date not recorded
  Experiment framework for developing and evaluating browser agents.
- [AgentStudio](https://awesomecua.github.io/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [AndroTMem inference and evaluation code](https://awesomecua.github.io/resources/github-cvc2233-androtmem/) — Date not recorded
  A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.
- [AUITestAgent](https://awesomecua.github.io/resources/github-bz-lab-auitestagent/) — Date not recorded
  Generates mobile GUI interactions from natural-language test requirements and checks application behavior against those requirements.
- [ClawGUI](https://awesomecua.github.io/resources/github-zju-real-clawgui/) — Date not recorded
  Framework for GUI agent training, evaluation, and deployment.
- [Cua](https://awesomecua.github.io/resources/github-trycua-cua/) — Date not recorded
  Monorepo behind Cua Spaces, which gives agents full macOS or Linux desktops, plus Cua Driver for operating native apps, Lume for Apple Silicon VMs, Cua Bench and the CUA-S1 decision models.
- [D-PoT evaluation code](https://awesomecua.github.io/resources/github-sqzhang-lazy-d-pot/) — Date not recorded
  Offline prompting and evaluation code for Dynamic Planning of Thoughts on Android-in-the-Wild, including action extraction and comparison with reference actions.
- [DroidCall generation and evaluation code](https://awesomecua.github.io/resources/github-ubiquitouslearning-droidcall/) — Date not recorded
  Data-generation, fine-tuning and evaluation utilities for teaching small language models to invoke Android intents through predefined functions.
- [HUD](https://awesomecua.github.io/resources/github-hud-evals-hud-python/) — Date not recorded
  SDK for RL environments and evals spanning coding, browser, computer-use and robotics agents, whose environments expose SSH, MCP, CDP or VNC capabilities behind a minimal start-and-grade protocol.
- [LearnAct](https://awesomecua.github.io/resources/github-lgy0404-learnact/) — Date not recorded
  Released inference and evaluation code for demonstration-conditioned mobile GUI agents on LearnGUI-Offline. The repository describes a multi-agent adaptation method and links the LearnGUI demonstrations.
- [MemGUI-Agent](https://awesomecua.github.io/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [Mobile Env](https://awesomecua.github.io/resources/github-x-lance-mobile-env/) — Date not recorded
  AndroidEnv-based platform for building GUI agent benchmarks and training agents, where task definition files emit instructions, rewards and episode ends from screen text, view hierarchy or log events.
- [MobileForge](https://awesomecua.github.io/resources/github-kwai-mobileforge/) — Date not recorded
  Android GUI-agent adaptation framework combining app exploration, generated curricula and rollout feedback with hint-conditioned step-level GRPO; the documented public training path targets Qwen3-VL-8B.
- [OpenMobile-2 code](https://awesomecua.github.io/resources/github-openmobile2-openmobile2-code/) — Date not recorded
  Evaluation adapters and training guidance for OpenMobile-2 across Android emulators and browser-rendered mobile simulation.
- [RedTeamCUA](https://awesomecua.github.io/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
- [ScienceBoard VMware environment](https://awesomecua.github.io/resources/url-75917f2c2b2802aafd3e/) — Date not recorded
  A prebuilt Ubuntu virtual-machine archive containing the software environment used for ScienceBoard scientific computer-use tasks.
- [ScreenSuite](https://awesomecua.github.io/resources/github-huggingface-screensuite/) — Date not recorded
  A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.
- [SheetCopilot](https://awesomecua.github.io/resources/github-bravegroup-sheetcopilot/) — Date not recorded
  Spreadsheet automation agent for Windows/Excel, with benchmark assets and a separately released headless Ubuntu evaluation backend.
- [STEVE / STEVE-R1 research code](https://awesomecua.github.io/resources/github-fanbinlu-steve-r1/) — Date not recorded
  Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.
- [TAG attention-driven GUI grounding](https://awesomecua.github.io/resources/github-heimingx-tag/) — Date not recorded
  Grounding and evaluation code that aggregates a pretrained vision-language model’s attention maps to localize requested interface elements without fine-tuning.
- [UI Defect Mocker](https://awesomecua.github.io/resources/github-zju-aces-ise-uidefectmocker/) — Date not recorded
  Synthesizes visual UI defects from mobile screenshots and Android layout metadata to support GUI-testing experiments.
- [VideoCAD training and evaluation code](https://awesomecua.github.io/resources/github-ghadinehme-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.
- [Web-Shepherd inference and evaluation](https://awesomecua.github.io/resources/github-kyle8581-web-shepherd/) — Date not recorded
  Process-reward inference and benchmark-evaluation utilities that use task checklists to assess individual web-agent decisions.
- [WebAgent-R1](https://awesomecua.github.io/resources/github-weizhepei-webagent-r1/) — Date not recorded
  Environment setup, multi-turn reinforcement-learning and evaluation tooling for browser agents interacting with WebArena.
- [WebLlama](https://awesomecua.github.io/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
- [WebVLN research implementation](https://awesomecua.github.io/resources/github-webvln-webvln/) — Date not recorded
  Training and evaluation code for question-guided website navigation that combines visual observations with web-specific HTML information.
