# Reinforcement learning

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/reinforcement-learning/records.jsonl

## Papers & surveys

- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2610-22234/) — 2026-10-15
  Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.github.io/resources/arxiv-2610-20939/) — 2026-10-14
  Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks.
- [Player-1: Learning to Play from Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2610-20584/) — 2026-10-14
  Extends computer-use policies to game control through synthetic training environments and richer keyboard and pointer actions. Its evaluation concerns games rather than ordinary productivity workflows.
- [GroundGUI: GUI Grounding by High-Quality Data and Distillation-to-Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2610-19100/) — 2026-10-13
  Introduces ScreenRef screenshot grounding data and a training sequence from supervised learning through teacher-guided distillation to reinforcement learning for GroundGUI-8B.
- [Adaptive-Group Process Rewards for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-17710/) — 2026-10-13
  Groups GUI trajectories by subgoal and combines action-level and group-level assessments into intermediate rewards for training agents with sparse task outcomes.
- [Learn from Move: the Next Step for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16720/) — 2026-10-12
  Introduces LatentGUIWorld to test learning interface semantics and dynamics through interaction, and studies finer movement actions with intermediate visual feedback and exploration demonstrations.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.github.io/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.github.io/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.github.io/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.github.io/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](https://awesomecua.github.io/resources/arxiv-2610-06829/) — 2026-10-05
  Introduces CLIFT, which certifies agent-generated verification signals against training-time judges and reuses them for per-step rewards and trajectory selection. At inference, a frozen question bank helps compare candidate web rollouts without querying an external judge.
- [ComputerSD: Online Self-Distillation from Real-Time Feedback for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-40253/) — 2026-09-30
  Introduces ComputerSD, which turns feedback from executed GUI transitions into online self-distillation guidance and step-level scores. A GUI analyzer supplies these signals, which are combined with trajectory-level reinforcement learning in asynchronous training.
- [HybridCUA: Learning to Orchestrate GUI and CLI for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-38008/) — 2026-09-29
  Trains computer agents on verified GUI, command-line, and interleaved trajectories to learn when and how to combine interaction modes.
- [SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-36939/) — 2026-09-29
  Introduces Spatial Credit Assignment, which uses click coordinates to refine group-relative reinforcement-learning updates for GUI grounding. It distinguishes failed clicks by spatial evidence while leaving the deployed action policy unchanged.
- [CUA-Sandbox: Efficient Environments for Computer-Use Agent Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2609-32750/) — 2026-09-26
  Introduces CUA-Sandbox, which separates each rollout’s mutable state from shared initialized software runtimes. State-scoped execution and transactional resets or branches aim to reduce training-environment costs while retaining original interfaces and evaluators.
- [CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs](https://awesomecua.github.io/resources/arxiv-2609-31957/) — 2026-09-25
  Introduces CaptchaArena, a dataset of execution-verified interactive CAPTCHA solutions with screenshot–action trajectories, reasoning annotations, and pixel masks for irregular targets. The work trains a single policy across CAPTCHA types using supervised learning followed by verifier-reward reinforcement learning.
- [MintAct: A Unified Visual Agent for Digital Environments](https://awesomecua.github.io/resources/arxiv-2609-22083/) — 2026-09-18
  MintAct trains a visual-agent family for grounding, navigation and tool use across mobile, desktop and web environments. Its shared infrastructure supports trajectory collection and asynchronous online RL while controlling cross-domain sampling and off-policy drift.
- [BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-12394/) — 2026-09-11
  Describes a mobile-agent training pipeline centered on real-device rollouts, recovery of useful supervision from failures, and evolving evaluation tasks.
- [Iron: Intent-Aligned and Retrospective Dual Learning Framework for Enhancing Generalist Virtual Agents](https://awesomecua.github.io/resources/arxiv-2608-27866/) — 2026-08-28
  Introduces Iron, a GUI-agent training framework that aligns low-level actions with high-level intent using cycle-consistency rewards. It also repurposes failed trajectories through hindsight reconstruction and evaluates transfer to other digital tasks.
- [Beyond Task Completion: Training Capable and Safe Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22178/) — 2026-08-27
  Introduces SCOPE, which trains computer-use agents on ordinary task demonstrations, safe continuations around hazards, and explicit refusals. Its SCOPE-Gen pipeline pairs verifiable tasks with environmental-risk variants to support joint capability and safety training.
- [UI-Venus-2 Technical Report](https://awesomecua.github.io/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [WM-R1: Training GUI Agents to Reason and leverage World Models with Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2608-27508/) — 2026-08-27
  Uses learned world models for mobile-agent training rollouts and for reasoning about the consequences of candidate GUI actions.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [Task-Adaptive Rubrics for GUI Reward Modeling](https://awesomecua.github.io/resources/arxiv-2608-24174/) — 2026-08-25
  Introduces AdaptRubric, which retrieves reusable criteria for a GUI task family and then generates instruction-specific checks for concrete values and constraints. It evaluates these adaptive rubrics in offline reward assessment and online agent optimization.
- [Are Android GUI Agents Robust Against Runtime Anomalies? AnTrap: Evaluating Agents in Dynamic Adversarial Environments](https://awesomecua.github.io/resources/arxiv-2608-24099/) — 2026-08-25
  Introduces AnTrap, which injects task-solvable runtime anomalies into Android GUI-agent trajectories using a layered failure taxonomy. It compares model robustness and adversarial reinforcement learning to distinguish recoverable interface traps from persistent contextual failures.
- [GSAR: Goal-State-Anchor Rewards for Mobile GUI Agents with Self-Evolving Data Synthesis](https://awesomecua.github.io/resources/arxiv-2608-22847/) — 2026-08-24
  Introduces GSAR, which synthesizes GUI tasks and successful goal states, then annotates task-relevant interface elements as reward anchors. These anchors support offline trajectory verification and online policy training.
- [Training Needs Trustworthy Worlds: Verified Synthetic Web Environments for Agent Learning](https://awesomecua.github.io/resources/arxiv-2608-21898/) — 2026-08-22
  Builds synthetic websites with verified navigation, backend state, and feasible tasks to provide reliable supervision for web-agent training.
- [Beyond Success and Failure: Length-Aware Contrastive Learning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-21830/) — 2026-08-22
  Introduces LACL-GUI, a contrastive learning objective that distinguishes trajectory quality within both successful and failed GUI executions. It favors concise successes and uses divergence from successful trajectories to differentiate failures during policy optimization.
- [Wuying-Browser-Agent: Real-World Centric Fundamental Long-Horizon Browser Agents](https://awesomecua.github.io/resources/arxiv-2608-17319/) — 2026-08-18
  Combines a browser execution framework, recovery-oriented supervision, and online reinforcement learning, with a bilingual live-web task benchmark.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.github.io/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-28227/) — 2026-07-30
  Describes a foundation GUI agent with combined GUI and command-line actions, large-scale interaction infrastructure, and iterative environment and task generation.
- [Echoverse: Deep, Evolving Environments for Training Computer-Use Agents at Scale](https://awesomecua.github.io/resources/arxiv-2607-28074/) — 2026-07-30
  Introduces Echoverse, which compiles specifications into stateful applications with database-grounded graders and uses rollouts to improve both the environments and agent policies. It examines behavioral depth, targeted interface practice, and environment repair as sources of training value.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://awesomecua.github.io/resources/arxiv-2607-21557/) — 2026-07-23
  OpenForgeRL connects stateful agent harnesses to reinforcement-learning infrastructure through a model-call recording proxy and isolated rollout containers. Its validation includes browser and computer-use agents, alongside tool-oriented agents, and examines how harness choice affects learned reliability.
- [A Learning-Rate-Gated Failure of GRPO in a Small Language and Vision-Language Model Web Agent: A Controlled Null and Its Mechanism](https://awesomecua.github.io/resources/arxiv-2607-12640/) — 2026-07-14
  Studies a controlled setting where GRPO fails to improve a strong small web agent and can reduce text-track performance. Matched reachable-reward tasks and component grafting distinguish limited optimization headroom from learning-rate-dependent failure mechanisms.
- [SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL](https://awesomecua.github.io/resources/arxiv-2607-11185/) — 2026-07-13
  Scales computer-agent reinforcement learning through verifiable task generation, capability-aware rollout allocation, and segmented visual context.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.github.io/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [Xiaomi-GUI-0 Technical Report](https://awesomecua.github.io/resources/arxiv-2606-31410/) — 2026-06-30
  Describes a mobile GUI agent trained through real-device interaction, corrected failure trajectories, supervised learning, and reinforcement learning.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.github.io/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation](https://awesomecua.github.io/resources/arxiv-2606-24515/) — 2026-06-23
  The framework uses a vision-language judge’s final-screen assessment as a terminal reward for GUI reinforcement learning. It models evaluator noise and corrects the reward estimator used by PPO across desktop benchmarks.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [Automating SKILL.md Generation for Computer-Using Agents via Interaction Trajectory Mining](https://awesomecua.github.io/resources/arxiv-2606-20363/) — 2026-06-18
  Segments and clusters GUI trajectories into inspectable skills, then trains a skill-aware policy from those annotations. Its diagnostic results distinguish readable source-domain clusters from reliable transfer and report limited or absent downstream gains.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.github.io/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [GUI-AC: Enhancing Continual Learning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-10522/) — 2026-06-09
  GUI-AC uses grounding certainty to adjust advantage weighting and policy-clipping bounds during continual reinforcement fine-tuning. Its mechanisms aim to suppress noisy confidence updates while retaining exploration under shifting GUI domains and resolutions.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [AsyncWebRL: Efficient Asynchronous Reinforcement Learning for Multi-Step Visual Web Agents](https://awesomecua.github.io/resources/arxiv-2606-05597/) — 2026-06-04
  AsyncWebRL overlaps web-agent rollouts, updates and policy refresh while managing screenshot handling and a persistent rollout pool. It also replaces trajectory-length normalization in multi-step GRPO to reduce verbose failed trajectories, with throughput and out-of-distribution evaluation.
- [GUI-SAGE: Enhancing GUI Automation with Self-Explanatory Learning](https://awesomecua.github.io/resources/url-beb8f1fd6b945ffc9d93/) — 2026-06
  GUI-SAGE generates reasoning conditioned on known actions and weights policy updates using confidence and reward signals. Its experiments use AndroidControl and GUIOdyssey data and separately evaluate interactive AndroidWorld tasks.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research](https://awesomecua.github.io/resources/arxiv-2605-26114/) — 2026-05-25
  Introduces MobileGym, a browser-hosted simulation of mobile app interactions whose configurable JSON state supports deterministic judging and parallel rollouts. MobileGym-Bench adds parameterized tasks, with experiments examining online training and transfer to real devices.
- [CUA-Gym: Scaling Verifiable Training Environments and Tasks for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-25624/) — 2026-05-25
  Presents CUA-Gym, which co-generates instructions, initial and target states, and executable reward checks through generator-discriminator iterations. Mock web applications expand training environments, with learned agents evaluated on OSWorld-Verified and WebArena.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Don't Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2605-09497/) — 2026-05-10
  DUDE combines asymmetric hybrid-reward learning with summaries of deceptive-interface failures to guide safer web actions. Its RUC benchmark evaluates deception susceptibility alongside ordinary task performance across interface scenarios.
- [Weblica: Scalable and Reproducible Training Environments for Visual Web Agents](https://awesomecua.github.io/resources/arxiv-2605-06761/) — 2026-05-07
  Introduces Weblica, which combines HTTP-level capture and replay with website-grounded environment synthesis. The resulting interactive web environments support reinforcement learning and tests of navigation transfer and inference-time scaling.
- [Faithful Mobile GUI Agents with Guided Advantage Estimator](https://awesomecua.github.io/resources/arxiv-2605-01208/) — 2026-05-02
  Introduces Faithful-Agent, which first teaches abstention under perturbed evidence and then refines GUI policies with an anchor-based, variance-adaptive advantage estimator. A thought-action consistency reward encourages decisions grounded in displayed evidence and instructions.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.github.io/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](https://awesomecua.github.io/resources/arxiv-2604-07277/) — 2026-04-08
  Introduces Android Coach, which uses a learned critic to evaluate multiple candidate actions at each observed emulator state. Process rewards and a group-wise advantage estimator support online training, evaluated on AndroidLab and AndroidWorld.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.github.io/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.github.io/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [OS-Themis: A Scalable Critic Framework for Generalist GUI Rewards](https://awesomecua.github.io/resources/arxiv-2603-19191/) — 2026-03-19
  Presents OS-Themis, a multi-agent critic that divides GUI trajectories into verifiable milestones and reviews their evidence before assigning an outcome. OGRBench evaluates GUI rewards across platforms, with AndroidWorld experiments examining training and trajectory filtering.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.github.io/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [Safe and Scalable Web Agent Learning via Recreated Websites](https://awesomecua.github.io/resources/arxiv-2603-10505/) — 2026-03-11
  Introduces VeriEnv, which recreates websites as executable training environments and exposes internal state through a Python SDK for task generation and deterministic reward checks. Experiments examine web-agent learning across new and expanded site environments.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.github.io/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [Generalization in Online Reinforcement Learning for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2603-07432/) — 2026-03-08
  Introduces AndroidWorld-Generalization with separate tests for unseen task instances, templates, and applications. A GRPO training system combines containerized environments with asynchronous trajectory collection to study these generalization regimes.
- [WebFactory: Automated Compression of Foundational Language Intelligence into Grounded Web Agents](https://awesomecua.github.io/resources/arxiv-2603-05044/) — 2026-03-05
  Introduces WebFactory, a GUI-agent training pipeline that synthesizes websites, generates tasks and trajectories, and trains with decomposed rewards. Offline and online transfer evaluations examine agents trained on the generated environments.
- [Dual-Modality Multi-Stage Adversarial Safety Training: Robustifying Multimodal Web Agents Against Cross-Modal Attacks](https://awesomecua.github.io/resources/arxiv-2603-04364/) — 2026-03-04
  Studies webpage injections that affect both screenshots and accessibility trees, then trains web agents through teacher imitation, supervised adversarial examples, and adversarial reinforcement learning. The evaluation tests defenses on MiniWoB++ and held-out tasks.
- [CGL: Advancing Continual GUI Learning via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2603-02951/) — 2026-03-03
  Combines supervised and reinforcement fine-tuning for continual GUI learning, using policy entropy to adjust their proportions and gradient projection to limit conflicting updates. AndroidControl-CL groups applications into sequential tasks to evaluate adaptation and retention.
- [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-16855/) — 2026-02-15
  Presents GUI-Owl-1.5 variants and a hybrid data pipeline for multimodal GUI interaction, tool use, memory, and multi-platform tasks.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.github.io/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization](https://awesomecua.github.io/resources/arxiv-2602-13653/) — 2026-02-14
  This framework learns an agentic-Q model to estimate individual actions’ contributions to GUI task completion. It then optimizes a policy with step-level samples from its own trajectories, decoupling policy updates from environment interaction.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.github.io/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [Adaptive Milestone Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-11524/) — 2026-02-12
  ADMIRE extracts milestones from successful GUI explorations to provide adaptive intermediate rewards. It assigns credit differently to successful and failed trajectories and evaluates training on AndroidWorld, with additional transfer studies in web and embodied settings.
- [Autonomous Continual Learning for Environment Adaptation of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-10356/) — 2026-02-10
  ACuRL uses autonomous interface exploration and an adaptive task curriculum to continually train computer-use policies with reinforcement learning. CUAJudge supplies outcome feedback, and experiments study adaptation across desktop applications and environment changes.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.github.io/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [UI-Venus-1.5 Technical Report](https://awesomecua.github.io/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [POINTS-GUI-G: GUI-Grounding Journey](https://awesomecua.github.io/resources/arxiv-2602-06391/) — 2026-02-06
  Studies GUI-grounding development from a weakly grounded base model through data preparation, visual training, and verifiable rewards.
- [UI-Mem: Self-Evolving Experience Memory for Online Reinforcement Learning in Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-05832/) — 2026-02-05
  UI-Mem stores workflows, skills and failure patterns as reusable templates to guide online GUI reinforcement learning. It varies guidance within rollout groups and continually updates the memory so an unguided policy can learn from guided experiences.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-21872/) — 2026-01-29
  WebArbiter generates reasoned action-preference verdicts for web navigation, using reasoning distillation followed by reinforcement learning. It introduces WebPRMBench and evaluates both preference judgments and reward-guided trajectory search.
- [Continual GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.github.io/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](https://awesomecua.github.io/resources/arxiv-2601-05787/) — 2026-01-09
  BEPA adapts a small set of expert GUI traces into policy-aligned guidance through trajectories reachable by the learner and a dynamically updated task cache. It evaluates this two-level approach to reinforcement learning on desktop and web benchmarks.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.github.io/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [MAI-UI Technical Report: Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-22047/) — 2025-12-26
  MAI-UI combines GUI navigation, native user interaction, and MCP tool calls in a family of policies trained through generated data and online reinforcement learning. The report also studies device-cloud routing and scaling of parallel environments and interaction budgets, with grounding and Android navigation evaluation.
- [OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models](https://awesomecua.github.io/resources/arxiv-2512-16295/) — 2025-12-18
  OS-Oracle synthesizes GUI critic examples and trains a pre-action critic with supervised learning followed by consistency-preserving GRPO. It introduces OS-Critic Bench across mobile, web, and desktop settings and tests critic-assisted agents in OSWorld and AndroidWorld.
- [GUI Exploration Lab: Enhancing Screen Navigation in Agents via Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2512-02423/) — 2025-12-02
  Introduces GUI Exploration Lab, a simulation engine for composing screens, interface elements, and navigation graphs. It studies how supervised learning, single-turn RL, and multiturn RL affect GUI navigation and exploration.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.github.io/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [GUI-Rise: Structured Reasoning and History Summarization for GUI Navigation](https://awesomecua.github.io/resources/arxiv-2510-27210/) — 2025-10-31
  Combines structured progress-and-decision reasoning with history summarization to improve cross-domain generalization in GUI navigation agents.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.github.io/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [UI-Ins: Enhancing GUI Grounding with Multi-Perspective Instruction-as-Reasoning](https://awesomecua.github.io/resources/arxiv-2510-20286/) — 2025-10-23
  Treats alternative instruction formulations as reasoning paths and trains GUI-grounding models to select and combine useful perspectives.
- [UltraCUA: A Foundation Model for Computer Use Agents with Hybrid Action](https://awesomecua.github.io/resources/arxiv-2510-17790/) — 2025-10-20
  UltraCUA trains a shared policy for primitive GUI actions and high-level tool calls using synthesized tasks and hybrid trajectories. Supervised fine-tuning followed by online reinforcement learning is evaluated on OSWorld and WindowsAgentArena.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.github.io/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [Hi-Agent: Hierarchical Vision-Language Agents for Mobile Device Control](https://awesomecua.github.io/resources/arxiv-2510-14388/) — 2025-10-16
  Introduces Hi-Agent, jointly training a high-level reasoning model and a low-level mobile action model. Execution feedback supplies a foresight advantage for optimizing subgoal decisions, with evaluations on Android control benchmarks.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.github.io/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.github.io/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.github.io/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [RISK: A Framework for GUI Agents in E-commerce Risk Management](https://awesomecua.github.io/resources/arxiv-2509-21982/) — 2025-09-26
  RISK combines browser-interaction training data, a benchmark, and reinforcement fine-tuning for e-commerce risk-management workflows. Its trajectories and rewards distinguish individual actions from multi-step stateful tasks involving deeply embedded web content.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.github.io/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [TGPO: Tree-Guided Preference Optimization for Robust Web Agent Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-14172/) — 2025-09-17
  TGPO merges semantically equivalent web states into tree-structured trajectories for offline preference optimization. A process reward model scores subgoal progress, redundant behavior, and action validity, while dynamic weighting emphasizes consequential decisions.
- [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-11543/) — 2025-09-15
  UI-S1 simulates multi-turn online learning over offline trajectories, using a patch module to recover divergences while retaining the model’s own outputs in context. It combines discounted future returns with step- and episode-level advantages and introduces a semi-online performance proxy.
- [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-18119/) — 2025-09-10
  MobileRL adapts GRPO to mobile GUI training with difficulty-dependent replay of successes and filtering of failure curricula. A shortest-path reward adjustment accounts for task length, with evaluations on AndroidWorld and AndroidLab.
- [VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents](https://awesomecua.github.io/resources/arxiv-2509-07553/) — 2025-09-09
  Introduces VeriOS-Agent, which learns when to execute GUI actions autonomously and when to query a user under untrustworthy conditions. Its staged training combines supervised learning and group-relative policy optimization.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [Succeed or Learn Slowly: Sample Efficient Off-Policy Reinforcement Learning for Mobile App Control](https://awesomecua.github.io/resources/arxiv-2509-01720/) — 2025-09-01
  Succeed or Learn Slowly applies direct off-policy updates to successful interactions and more conservative regularized updates to negative examples. Successful Transition Replay prioritizes successful experience during policy learning, with evaluation on AndroidWorld.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.github.io/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2508-19679/) — 2025-08-27
  InquireMobile trains mobile agents to seek human confirmation at critical decisions using staged reinforcement fine-tuning and pre-action reasoning. InquireBench evaluates safe interaction and proactive inquiry, distinguishing asking for help from completing the underlying task.
- [ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2508-14040/) — 2025-08-19
  Combines API and GUI actions with distributed desktop reinforcement learning and alternating supervised training to address training instability.
- [CRAFT-GUI: Curriculum-Reinforced Agent For GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-11360/) — 2025-08-15
  CRAFT-GUI organizes GUI trajectories by difficulty for curriculum-based GRPO training. Its reward combines rule-based signals with model judgments, with evaluation on Android Control and an internal online benchmark.
- [UI-Venus Technical Report: Building High-performance UI Agents with RFT](https://awesomecua.github.io/resources/arxiv-2508-10833/) — 2025-08-14
  Studies screenshot-based GUI grounding and navigation using curated interaction data, reward design, and reinforcement fine-tuning.
- [InfiGUI-G1: Advancing GUI Grounding with Adaptive Exploration Policy Optimization](https://awesomecua.github.io/resources/arxiv-2508-05731/) — 2025-08-07
  Uses multiple candidate answers and adaptive exploration rewards to improve spatial and semantic alignment in GUI grounding.
- [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.github.io/resources/arxiv-2508-05615/) — 2025-08-07
  GUI-RC aggregates multiple grounding predictions into spatial voting grids to choose a consensus region. GUI-RCPO then turns agreement with that region into a reward for test-time policy updates on unlabeled GUI screenshots.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.github.io/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [GuirlVG: Incentivize GUI Visual Grounding via Empirical Exploration on Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-04389/) — 2025-08-06
  Introduces GuirlVG, an empirical study of reinforcement fine-tuning for GUI visual grounding. It analyzes training components and adds an adaptive KL-based mechanism to limit reward over-optimization.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.github.io/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](https://awesomecua.github.io/resources/arxiv-2508-02046/) — 2025-08-04
  NaviMaster trains a shared policy for GUI and embodied navigation using a common visual-trajectory formulation. It combines trajectory collection, reinforcement learning and distance-aware rewards, with evaluation across both task families.
- [UI-AGILE: Advancing GUI Agents with Effective Reinforcement Learning and Precise Inference-Time Grounding](https://awesomecua.github.io/resources/arxiv-2507-22025/) — 2025-07-29
  Combines grounding-oriented reward and sampling improvements with inference-time image decomposition and target selection.
- [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-15846/) — 2025-07-21
  GUI-G2 replaces binary grounding rewards with Gaussian point rewards and spatial-coverage rewards. An adaptive variance tied to element dimensions supplies continuous training feedback for targets of different sizes, evaluated on the ScreenSpot benchmark family.
- [MagicGUI: A Foundational Mobile GUI Agent with Scalable Data Pipeline and Reinforcement Fine-tuning](https://awesomecua.github.io/resources/arxiv-2508-03700/) — 2025-07-19
  Combines a mobile GUI data pipeline, perception and planning capabilities, and reinforcement fine-tuning for interactive task execution.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.github.io/resources/arxiv-2507-05791/) — 2025-07-08
  GTA1 samples multiple action proposals at each GUI step and uses a judge to select among them. A separate grounding model is trained with reinforcement learning to map selected proposals to visual targets, linking planning-time search with click localization.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.github.io/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.github.io/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://awesomecua.github.io/resources/arxiv-2506-20332/) — 2025-06-25
  Uses a staged curriculum from response-format alignment through action feedback to interactive task-level training for mobile agents.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [LPO: Towards Accurate GUI Agent Interaction via Location Preference Optimization](https://awesomecua.github.io/resources/arxiv-2506-09373/) — 2025-06-11
  Location Preference Optimization uses an information-entropy signal to select interaction regions and a distance-based reward to assess click locations. It trains GUI localization through preference optimization and evaluates both offline grounding and online interaction.
- [Thinking vs. Doing: Agents that Reason by Scaling Test-Time Interaction](https://awesomecua.github.io/resources/arxiv-2506-07976/) — 2025-06-09
  Test-Time Interaction scales the interaction horizon so web agents can explore, backtrack and revise plans within a rollout. Its online reinforcement-learning curriculum adjusts rollout lengths and is evaluated on WebVoyager and WebArena.
- [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2506-01391/) — 2025-06-02
  Combines grounding pretraining, bilingual interaction trajectories, and reinforcement fine-tuning for mobile GUI actions.
- [ZeroGUI: Automating Online GUI Learning at Zero Human Cost](https://awesomecua.github.io/resources/arxiv-2505-23762/) — 2025-05-29
  Combines generated tasks, estimated success rewards, and online reinforcement learning to automate GUI-agent interaction training.
- [WorkForceAgent-R1: Incentivizing Reasoning Capability in LLM-based Web Agents via Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-22942/) — 2025-05-28
  Uses rule-based rewards for output structure and action correctness to train reasoning for enterprise web navigation.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [ScreenExplorer: Training a Vision-Language Model for Diverse Exploration in Open GUI World](https://awesomecua.github.io/resources/arxiv-2505-19095/) — 2025-05-25
  Trains ScreenExplorer with reinforcement learning in dynamic GUI environments, using a world-model curiosity reward and experience-stream distillation to support sustained exploration.
- [ProgRM: Build Better GUI Agents with Progress Rewards](https://awesomecua.github.io/resources/arxiv-2505-18121/) — 2025-05-23
  ProgRM predicts per-step task completion progress to provide intermediate rewards during online GUI-agent training. It derives progress labels by using longest common subsequences to identify key trajectory steps, allowing useful partial progress to contribute even when a trajectory ultimately fails.
- [WebAgent-R1: Training Web Agents via End-to-End Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-16421/) — 2025-05-22
  Trains web agents through asynchronous multi-turn environment interaction, using task-success rewards to optimize complete trajectories.
- [ARPO:End-to-End Policy Optimization for GUI Agents with Experience Replay](https://awesomecua.github.io/resources/arxiv-2505-16282/) — 2025-05-22
  ARPO extends group-relative policy optimization with a replay buffer that reuses successful GUI trajectories across training iterations. It filters tasks using baseline performance and compares end-to-end reinforcement learning with offline preference optimization on OSWorld.
- [GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-15810/) — 2025-05-21
  Analyzes reasoning templates, reward design, and policy updates in GUI grounding, then proposes targeted adjustments to the training process.
- [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.github.io/resources/arxiv-2505-15277/) — 2025-05-21
  Web-Shepherd is a process reward model for assessing individual steps of web-navigation trajectories. It introduces a collection of 40,000 step-level preference pairs with checklists and a separate benchmark for comparing reward models, then evaluates verification during WebArena-lite navigation.
- [ReGUIDE: Data Efficient GUI Grounding via Spatial Reasoning and Search](https://awesomecua.github.io/resources/arxiv-2505-15259/) — 2025-05-21
  Combines self-generated localization reasoning, spatial consistency checks, and inference-time search to improve data-efficient web grounding.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [Enhancing Visual Grounding for GUI Agents via Self-Evolutionary Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12370/) — 2025-05-18
  Proposes GUI grounding training that combines curated seed examples, continuous location-dependent policy feedback, and iterative refinement guided by attention maps. The study evaluates the resulting reinforcement-learning procedure on three grounding benchmarks, including ScreenSpot-Pro.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.github.io/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [A Survey on GUI Agents with Foundation Models Enhanced by Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2504-20464/) — 2025-04-29
  Formalizes GUI tasks as Markov decision processes and traces agent training from prompting through supervised fine-tuning to reinforcement learning.
- [InfiGUI-R1: Advancing Multimodal GUI Agents from Reactive Actors to Deliberative Reasoners](https://awesomecua.github.io/resources/arxiv-2504-14239/) — 2025-04-19
  Uses a staged reasoning-focused training framework to move GUI agents from reactive actions toward deliberative planning and recovery.
- [GUI-R1 : A Generalist R1-Style Vision-Language Action Model For GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-10458/) — 2025-04-14
  Applies reinforcement fine-tuning with unified action rules and curated cross-platform examples to vision-language GUI agents.
- [UI-R1: Enhancing Efficient Action Prediction of GUI Agents by Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2503-21620/) — 2025-03-27
  Uses rule-based action rewards and policy optimization to train GUI action prediction from a compact set of mobile tasks.
- [STEVE: A Step Verification Pipeline for Computer-use Agent Training](https://awesomecua.github.io/resources/arxiv-2503-12532/) — 2025-03-16
  Labels individual computer-use actions by comparing surrounding screenshots, then trains agents from both successful and unsuccessful steps.
- [VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model](https://awesomecua.github.io/resources/arxiv-2502-18906/) — 2025-02-26
  Trains GUI agents with a frozen value model learned from offline interactions, guiding action exploration without predicting complete next observations.
- [Digi-Q: Learning Q-Value Functions for Training Device-Control Agents](https://awesomecua.github.io/resources/arxiv-2502-15760/) — 2025-02-13
  Learns action-value functions from offline device-control experience and uses them to rank candidate actions for policy improvement.
- [Advancing Autonomous VLM Agents via Variational Subgoal-Conditioned Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2502-07949/) — 2025-02-11
  Uses variational subgoal-conditioned reinforcement learning to improve learning efficiency on sparse-reward mobile and web-control tasks.
- [Proposer-Agent-Evaluator(PAE): Autonomous Skill Discovery For Foundation Model Internet Agents](https://awesomecua.github.io/resources/arxiv-2412-13194/) — 2024-12-17
  Combines autonomous task proposal, web interaction, and visual success evaluation to discover skills and improve browser-agent policies.
- [From Novice to Expert: LLM Agent Policy Optimization via Step-wise Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2411-03817/) — 2024-11-06
  Introduces StepAgent, which compares agent and expert actions to supply intermediate rewards for policy learning, with implicit-reward and inverse-RL variants. Evaluation includes WebShop and Mind2Web alongside non-web tasks.
- [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2411-02337/) — 2024-11-04
  Trains web agents with an evolving task curriculum, outcome supervision, and reinforcement-learning updates intended to manage policy drift.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.github.io/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [DistRL: An Asynchronous Distributed Reinforcement Learning Framework for On-Device Control Agents](https://awesomecua.github.io/resources/arxiv-2410-14803/) — 2024-10-18
  Introduces asynchronous distributed reinforcement learning with centralized updates and decentralized interaction collection for device-control agents.
- [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2406-11896/) — 2024-06-14
  Combines offline initialization and online reinforcement learning in Android environments, with automated evaluation and curriculum-based sampling.
- [Navigating WebAI: Training Agents to Complete Web Tasks with Large Language Models and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2405-00516/) — 2024-05-01
  Combines supervised and reinforcement learning for MiniWoB web tasks and investigates whether agents understand HTML structure or memorize target elements.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.github.io/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [AutoWebGLM: A Large Language Model-based Web Navigating Agent](https://awesomecua.github.io/resources/arxiv-2404-03648/) — 2024-04-04
  Builds a web agent through simplified HTML observations, human-and-AI browsing data, curriculum training, and reinforcement-learning refinement.
- [Reinforced UI Instruction Grounding: Towards a Generic UI Task Automation API](https://awesomecua.github.io/resources/arxiv-2310-04716/) — 2023-10-07
  Trains a screenshot-based instruction-grounding model to predict target coordinates, using reinforcement learning to improve spatial decoding.
- [A data-driven approach for learning to control computers](https://awesomecua.github.io/resources/arxiv-2202-08137/) — 2022-02-16
  Combines reinforcement learning with behavioral priors from human interactions to learn computer control through keyboard and mouse actions.
- [AndroidEnv: A Reinforcement Learning Platform for Android](https://awesomecua.github.io/resources/arxiv-2105-13231/) — 2021-05-27
  Presents an Android environment for training and evaluating reinforcement-learning agents through touchscreen interaction.
- [Reinforcement Learning on Web Interfaces Using Workflow-Guided Exploration](https://awesomecua.github.io/resources/arxiv-1802-08802/) — 2018-02-24
  Uses workflows extracted from demonstrations to constrain reinforcement-learning exploration for interactive web tasks.
- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://awesomecua.github.io/resources/url-52a3261eb6a19b402e88/) — 2017-07-17
  Introduces World of Bits, a web-task platform combining human demonstrations, keyboard and mouse actions, and cached HTTP traffic for repeatable task environments. It evaluates agents trained through behavioral cloning and reinforcement learning.

## Benchmarks

- [MiniWoB++](https://awesomecua.github.io/resources/github-farama-foundation-miniwob-plusplus/) — Date not recorded
  Over 100 web-interaction environments extending OpenAI's MiniWoB, controlled from Python through a Gymnasium API that drives the browser with Selenium.
- [MobileGym](https://awesomecua.github.io/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.

## Datasets

- [GroundGUI RL Dataset](https://awesomecua.github.io/resources/url-4e71dc456c4112eed727/) — Date not recorded
  Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.
- [GUI-R1 data bundle](https://awesomecua.github.io/resources/url-df680385f18b01a825be/) — Date not recorded
  Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.
- [OpenMobile-Data-v2](https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.
- [UI-AGILE-Data](https://awesomecua.github.io/resources/url-41abb1b7206689cf5057/) — Date not recorded
  UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.
- [UI-S1 released training examples](https://awesomecua.github.io/resources/url-16184830c0f4bdb146fa/) — Date not recorded
  A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

## Models

- [AgentCPM-GUI 8B checkpoint](https://awesomecua.github.io/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [ARPO UI-TARS-1.5-7B checkpoint](https://awesomecua.github.io/resources/url-db6fc5f29f186d13991c/) — Date not recorded
  UI-TARS-1.5-7B-derived checkpoint trained with ARPO on OSWorld desktop tasks.
- [BlueLM-GUI](https://awesomecua.github.io/resources/github-vivo-ai-lab-bluelm-gui/) — Date not recorded
  Mobile GUI agent research release with technical report, benchmark data, and evaluation tooling from vivo AI Lab.
- [EvoCUA](https://awesomecua.github.io/resources/github-meituan-evocua/) — Date not recorded
  Computer-use model and training resources from the EvoCUA project.
- [EvoCUA 32B 20260105](https://awesomecua.github.io/resources/url-60a95f34072aeb2771cc/) — Date not recorded
  Larger EvoCUA computer-use agent checkpoint (20260105 release) with about 33B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [EvoCUA 8B 20260105](https://awesomecua.github.io/resources/url-2a2682f86dcb8ebc9a80/) — Date not recorded
  EvoCUA computer-use agent checkpoint (20260105 release) with about 8.8B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [GUI-G1](https://awesomecua.github.io/resources/github-yuqi-zhou-gui-g1/) — Date not recorded
  GUI-grounding training code that modifies reasoning templates, reward functions, and the GRPO objective, with a linked model release.
- [GUI-G1 3B v1](https://awesomecua.github.io/resources/url-9dc9d8d3b9a4b32d6f4b/) — Date not recorded
  A Qwen2.5-VL-3B checkpoint released for R1-style visual grounding experiments, predicting interface target locations from screenshots and instructions.
- [GUI-G2 7B](https://awesomecua.github.io/resources/url-90eea6f6d099a3297850/) — Date not recorded
  A Qwen2.5-VL grounding checkpoint trained with Gaussian point and coverage rewards whose granularity adapts to interface-element scale.
- [GUI-R1](https://awesomecua.github.io/resources/github-ritzz-ai-gui-r1/) — Date not recorded
  GUI action-model training and evaluation code with verifiable rewards, plus linked reinforcement-learning data and checkpoints.
- [GUI-R1 checkpoint bundle](https://awesomecua.github.io/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [InfiGUI-G1 7B](https://awesomecua.github.io/resources/url-d70a755e3b2102f25f34/) — Date not recorded
  A GUI-grounding checkpoint trained with adaptive exploration rewards and multiple candidate answers to improve instruction-to-element alignment.
- [InfiGUI-R1](https://awesomecua.github.io/resources/github-reallm-labs-infigui-r1/) — Date not recorded
  3B GUI agent trained in two stages: distilling spatial reasoning from teacher models, then reinforcement learning that rewards accurate sub-goals and trains error recovery.
- [InfiGUI-R1 3B](https://awesomecua.github.io/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [MobileRL 9B checkpoint](https://awesomecua.github.io/resources/url-d5667c854845c77b9f5b/) — Date not recorded
  A GLM-4.1V-based mobile action checkpoint released by the MobileRL project for Android interaction.
- [PAE LLaVA 7B](https://awesomecua.github.io/resources/url-5d61c1b5fc8dd650518d/) — Date not recorded
  A released LLaVA checkpoint for visual browser interaction from the PAE autonomous task-proposal and policy-learning system.
- [UI-AGILE](https://awesomecua.github.io/resources/github-kdegroup-ui-agile/) — Date not recorded
  GUI agent trained by RL with a continuous reward, a simple-thinking reward and cropping-based resampling on about 9k samples, plus a plug-in decomposed grounding-and-selection inference method.
- [UI-AGILE checkpoint](https://awesomecua.github.io/resources/url-b94e285c3f757e2d0f3a/) — Date not recorded
  The released UI-AGILE model for GUI grounding with reward shaping, crop-based resampling and decomposed selection during inference.
- [UI-R1](https://awesomecua.github.io/resources/github-lll6gg-ui-r1/) — Date not recorded
  Rule-based reinforcement learning for GUI action prediction, releasing UI-R1-3B, trained from Qwen2.5-VL-3B, the efficiency-oriented UI-R1-E-3B, and training data.
- [UI-R1 3B](https://awesomecua.github.io/resources/url-f13474d7aa734a30624d/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.
- [UI-S1 7B](https://awesomecua.github.io/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.
- [WebRL Llama 3.1 8B](https://awesomecua.github.io/resources/url-a6ee20fea67438d91e06/) — Date not recorded
  A WebRL browser-policy checkpoint for performing actions in the five website environments of WebArena.
- [WebRL outcome reward model 8B](https://awesomecua.github.io/resources/url-d1e85aeb6d96859c109d/) — Date not recorded
  The outcome-supervision checkpoint used by WebRL to score browser trajectories during policy training.

## Engineering & industry

- [AndroidEnv](https://awesomecua.github.io/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [ARPO training framework](https://awesomecua.github.io/resources/github-jia-lab-research-arpo/) — Date not recorded
  Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.
- [ClawGUI](https://awesomecua.github.io/resources/github-zju-real-clawgui/) — Date not recorded
  Framework for GUI agent training, evaluation, and deployment.
- [ComputerRL](https://awesomecua.github.io/resources/github-thudm-computerrl/) — Date not recorded
  Reinforcement-learning infrastructure for computer-use agents.
- [Digi-Q](https://awesomecua.github.io/resources/github-digirl-agent-digiq/) — Date not recorded
  Offline device-control training code that learns action values and uses them to select promising actions, with linked trajectories and checkpoints.
- [DigiRL](https://awesomecua.github.io/resources/github-digirl-agent-digirl/) — Date not recorded
  Reinforcement learning for autonomous mobile device control.
- [DistRL](https://awesomecua.github.io/resources/github-distrl-lab-distrl-open/) — Date not recorded
  Distributed online reinforcement-learning framework for Android agents, with environment setup and trajectory collection tools.
- [GroundGUI training and evaluation code](https://awesomecua.github.io/resources/github-prentisai-groundgui/) — Date not recorded
  Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.
- [GUI-RC / GUI-RCPO](https://awesomecua.github.io/resources/github-zju-real-gui-rcpo/) — Date not recorded
  GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.
- [HUD](https://awesomecua.github.io/resources/github-hud-evals-hud-python/) — Date not recorded
  SDK for RL environments and evals spanning coding, browser, computer-use and robotics agents, whose environments expose SSH, MCP, CDP or VNC capabilities behind a minimal start-and-grade protocol.
- [MobileRL](https://awesomecua.github.io/resources/github-thudm-mobilerl/) — Date not recorded
  Online agentic RL framework for mobile GUI agents built around the difficulty-adaptive ADAGRPO algorithm, with Dockerized AndroidWorld and AndroidLab evaluation and a MobileRL-9B checkpoint.
- [Proposer-Agent-Evaluator (PAE)](https://awesomecua.github.io/resources/github-amazon-science-pae/) — Date not recorded
  A browser-agent training system that proposes tasks, collects visual interaction trajectories, and uses automated evaluation to drive policy improvement.
- [SCALE-CUA (THUDM)](https://awesomecua.github.io/resources/github-thudm-scale-cua/) — Date not recorded
  Computer-use training framework with VeriGen task synthesis, adaptive rollout sampling, and visual-context segmentation.
- [Universe legacy GUI interaction client](https://awesomecua.github.io/resources/github-openai-universe/) — Date not recorded
  An archived Gym-compatible client that exposes screen observations and keyboard/mouse actions over VNC for remote application and browser environments, including the historical World of Bits integration.
- [VEM GUI-Agent-RL](https://awesomecua.github.io/resources/github-microsoft-gui-agent-rl/) — Date not recorded
  Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.
- [WebAgent-R1](https://awesomecua.github.io/resources/github-weizhepei-webagent-r1/) — Date not recorded
  Environment setup, multi-turn reinforcement-learning and evaluation tooling for browser agents interacting with WebArena.
- [WebRL](https://awesomecua.github.io/resources/github-thudm-webrl/) — Date not recorded
  Training pipeline that evolves web tasks from prior attempts and uses an outcome reward model to refine browser policies.
- [Workflow-Guided Exploration research code](https://awesomecua.github.io/resources/github-stanfordnlp-wge/) — Date not recorded
  Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.
- [WorkForceAgent-R1](https://awesomecua.github.io/resources/github-night-chen-workforceagent-r1/) — Date not recorded
  Web-task reward functions, WorkArena data processing and GRPO training configurations for reasoning-oriented language agents.
- [ZeroGUI](https://awesomecua.github.io/resources/github-opengvlab-zerogui/) — Date not recorded
  Online RL framework for GUI agents in which VLMs generate the training tasks and judge success from trajectory screenshots, with OSWorld and AndroidLab checkpoints trained from UI-TARS-7B-DPO.
