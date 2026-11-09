# 强化学习

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/reinforcement-learning/records.jsonl

## 论文与综述

- [JHiMA-WebRL: A Joint Hierarchical Multi-Agent Reinforcement Learning Framework for Long-Horizon Web Tasks](https://awesomecua.com/resources/arxiv-2611-05263/) — 2026-11-03
  Introduces JHiMA-WebRL, which jointly trains a task decomposer and GUI actor with hierarchical RL for long-horizon web tasks in WebArena.
- [WebHarbor: Docking Real Websites for Evolving GUI Agent Environments](https://awesomecua.com/resources/arxiv-2611-03634/) — 2026-11-02
  Introduces WebHarbor, a suite of 153 executable website environments and 3,518 tasks for evaluating and training GUI web agents on interactive workflows.
- [UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2611-00926/) — 2026-10-31
  Introduces UI-UG 2, a mobile UI model trained for component understanding, GUI grounding, and structured interface generation with render-aware RL.
- [Mage-VL-Cowork: A Full Training Recipe to Learn Hybrid Computer Use From Evolved Harnesses](https://awesomecua.com/resources/arxiv-2610-40747/) — 2026-10-29
  Introduces Mage-VL-Cowork, a computer-use agent trained for GUI, code, and terminal actions, with Mage-CUA-Forge generating desktop and web tasks for training.
- [Online Dense Reinforcement Learning with Planning-Grounding Agent for UI Navigation on Live IOS Apps](https://awesomecua.com/resources/arxiv-2610-39264/) — 2026-10-29
  Introduces online RL training for agents navigating live iOS apps, separating planning from UI grounding and using step-level and task-completion rewards.
- [Where to Learn and How Far to Roll Out: Efficient Adaptive Training for GUI Agents](https://awesomecua.com/resources/arxiv-2610-39251/) — 2026-10-29
  Introduces a two-stage GUI-agent RL framework that selects uncertain action checkpoints and expands rollout length as training progresses.
- [Learning to Look Beyond Screens: Transferable Visual Observation from GUI Grounding](https://awesomecua.com/resources/arxiv-2610-37093/) — 2026-10-27
  Introduces LBS, a vision-language model trained with GUI grounding trajectories and crop-and-inspect decisions to study transfer of active visual observation.
- [AndroidFlux: Evaluating and Reward Modeling Failure Recovery Capabilities in Mobile Use Multimodal Agents](https://awesomecua.com/resources/arxiv-2610-34384/) — 2026-10-25
  Introduces AndroidFlux, a mobile-agent failure-recovery benchmark that restores trajectories to error checkpoints, plus a reward-modeling benchmark and offline RL dataset.
- [InterWebCoder: Learning Interactive Webpage Generation from Executable Tests via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2610-28610/) — 2026-10-20
  InterWebCoder trains models to generate interactive webpage code using recorded interactions, executable tests and repair feedback, an adjacent web interface task.
- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.com/resources/arxiv-2610-26828/) — 2026-10-19
  WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning.
- [VeriCUA: Learning Proactive Verification for Reliable GUI Agent Rewards](https://awesomecua.com/resources/arxiv-2610-26469/) — 2026-10-19
  VeriCUA trains a Judge to select verification checks and stopping decisions while a frozen Probe inspects the post-task GUI. Single-attempt reinforcement learning balances verdict correctness and Probe use.
- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.com/resources/arxiv-2610-26071/) — 2026-10-19
  CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks.
- [Adaptation of Computer Use Agents to New Software with User Manuals](https://awesomecua.com/resources/arxiv-2610-23012/) — 2026-10-16
  MAGE retrieves software-manual sections into fixed execution plans and generates setup/main task-plan pairs whose GUI rollouts support application-specific policy adaptation with round-based GRPO.
- [Lean4AgenticRL: Advancing Agentic RL with Verifiable Multi-level Process Rewards](https://awesomecua.com/resources/arxiv-2610-22448/) — 2026-10-15
  Lean4AgenticRL formalizes workflow stages and process rewards for reinforcement learning on software engineering and terminal-use tasks, an adjacent setting for interface agents.
- [OS-Helix: Unifying GUI Interaction and Code Execution in Native Computer-Using Agents](https://awesomecua.com/resources/arxiv-2610-22234/) — 2026-10-15
  Trains native computer-use models to coordinate GUI actions and code execution using hybrid demonstrations and online reinforcement learning.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.com/resources/arxiv-2610-20939/) — 2026-10-14
  Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks.
- [Co-Evolving Acting and Forecasting for Language Agents](https://awesomecua.com/resources/arxiv-2610-20597/) — 2026-10-14
  Introduces CoPE, which trains language agents to forecast later actions from earlier histories during RL; WebShop is one of five evaluation benchmarks.
- [Player-1: Learning to Play from Synthetic Experience](https://awesomecua.com/resources/arxiv-2610-20584/) — 2026-10-14
  Extends computer-use policies to game control through synthetic training environments and richer keyboard and pointer actions. Its evaluation concerns games rather than ordinary productivity workflows.
- [GroundGUI: GUI Grounding by High-Quality Data and Distillation-to-Reinforcement Learning](https://awesomecua.com/resources/arxiv-2610-19100/) — 2026-10-13
  Introduces ScreenRef screenshot grounding data and a training sequence from supervised learning through teacher-guided distillation to reinforcement learning for GroundGUI-8B.
- [WorkRover: Scaling Long-Horizon Cowork Agent Training Via Recursive Environment Evolution](https://awesomecua.com/resources/arxiv-2610-18067/) — 2026-10-13
  Synthesizes resettable workspaces with files, application observations and skills; repairs environment incompatibilities and trains long-task agents using verifier-linked turn credit.
- [Adaptive-Group Process Rewards for GUI Agents](https://awesomecua.com/resources/arxiv-2610-17710/) — 2026-10-13
  Groups GUI trajectories by subgoal and combines action-level and group-level assessments into intermediate rewards for training agents with sparse task outcomes.
- [Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents](https://awesomecua.com/resources/arxiv-2610-16998/) — 2026-10-12
  Introduces Glasseek, a framework for deep-search agents that explore the open web, with trajectory construction, training across context compression, and a test-set leakage audit.
- [Learn from Move: the Next Step for GUI Agents](https://awesomecua.com/resources/arxiv-2610-16720/) — 2026-10-12
  Introduces LatentGUIWorld to test learning interface semantics and dynamics through interaction, and studies finer movement actions with intermediate visual feedback and exploration demonstrations.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.com/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.com/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.com/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.com/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](https://awesomecua.com/resources/arxiv-2610-06829/) — 2026-10-05
  Introduces CLIFT, which certifies agent-generated verification signals against training-time judges and reuses them for per-step rewards and trajectory selection. At inference, a frozen question bank helps compare candidate web rollouts without querying an external judge.
- [ComputerSD: Online Self-Distillation from Real-Time Feedback for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-40253/) — 2026-09-30
  Introduces ComputerSD, which turns feedback from executed GUI transitions into online self-distillation guidance and step-level scores. A GUI analyzer supplies these signals, which are combined with trajectory-level reinforcement learning in asynchronous training.
- [HybridCUA: Learning to Orchestrate GUI and CLI for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-38008/) — 2026-09-29
  Trains computer agents on verified GUI, command-line, and interleaved trajectories to learn when and how to combine interaction modes.
- [SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents](https://awesomecua.com/resources/arxiv-2609-36939/) — 2026-09-29
  Introduces Spatial Credit Assignment, which uses click coordinates to refine group-relative reinforcement-learning updates for GUI grounding. It distinguishes failed clicks by spatial evidence while leaving the deployed action policy unchanged.
- [CUA-Sandbox: Efficient Environments for Computer-Use Agent Reinforcement Learning](https://awesomecua.com/resources/arxiv-2609-32750/) — 2026-09-26
  Introduces CUA-Sandbox, which separates each rollout’s mutable state from shared initialized software runtimes. State-scoped execution and transactional resets or branches aim to reduce training-environment costs while retaining original interfaces and evaluators.
- [CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs](https://awesomecua.com/resources/arxiv-2609-31957/) — 2026-09-25
  Introduces CaptchaArena, a dataset of execution-verified interactive CAPTCHA solutions with screenshot–action trajectories, reasoning annotations, and pixel masks for irregular targets. The work trains a single policy across CAPTCHA types using supervised learning followed by verifier-reward reinforcement learning.
- [From Tapping to Hopping: Augmenting Mobile GUI Agents with App-Native Deeplinks](https://awesomecua.com/resources/arxiv-2609-30887/) — 2026-09-25
  GUI-Hopper combines verified Android deeplinks with GUI actions, using landing-screen descriptions, hybrid trajectory training and reinforcement learning to select navigation shortcuts and recover through GUI control.
- [Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://awesomecua.com/resources/arxiv-2609-29892/) — 2026-09-24
  Trains a mobile planner with supervised trajectories and competence-adaptive RL, then couples typed tool execution with memory, skills and offline model-harness refinement.
- [MintAct: A Unified Visual Agent for Digital Environments](https://awesomecua.com/resources/arxiv-2609-22083/) — 2026-09-18
  MintAct trains a visual-agent family for grounding, navigation and tool use across mobile, desktop and web environments. Its shared infrastructure supports trajectory collection and asynchronous online RL while controlling cross-domain sampling and off-policy drift.
- [BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2609-12394/) — 2026-09-11
  Describes a mobile-agent training pipeline centered on real-device rollouts, recovery of useful supervision from failures, and evolving evaluation tasks.
- [Seeing Through Conflicts: Improving Instruction Hierarchy Alignment in Vision-Language Models](https://awesomecua.com/resources/arxiv-2609-22234/) — 2026-09-03
  Studies reinforcement learning for vision-language models facing conflicting instructions across text and images, including evaluation on web-agent safety tasks.
- [Tail-Likelihood Reinforcement Learning](https://awesomecua.com/resources/arxiv-2609-02987/) — 2026-09-02
  Introduces Tail-Likelihood Reinforcement Learning (TailRL), an RL objective that favors rare high-reward rollouts; GUI grounding is one of several evaluation tasks.
- [Iron: Intent-Aligned and Retrospective Dual Learning Framework for Enhancing Generalist Virtual Agents](https://awesomecua.com/resources/arxiv-2608-27866/) — 2026-08-28
  Introduces Iron, a GUI-agent training framework that aligns low-level actions with high-level intent using cycle-consistency rewards. It also repurposes failed trajectories through hindsight reconstruction and evaluates transfer to other digital tasks.
- [Beyond Task Completion: Training Capable and Safe Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-22178/) — 2026-08-27
  Introduces SCOPE, which trains computer-use agents on ordinary task demonstrations, safe continuations around hazards, and explicit refusals. Its SCOPE-Gen pipeline pairs verifiable tasks with environmental-risk variants to support joint capability and safety training.
- [UI-Venus-2 Technical Report](https://awesomecua.com/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [WM-R1: Training GUI Agents to Reason and leverage World Models with Reinforcement Learning](https://awesomecua.com/resources/arxiv-2608-27508/) — 2026-08-27
  Uses learned world models for mobile-agent training rollouts and for reasoning about the consequences of candidate GUI actions.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.com/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [Task-Adaptive Rubrics for GUI Reward Modeling](https://awesomecua.com/resources/arxiv-2608-24174/) — 2026-08-25
  Introduces AdaptRubric, which retrieves reusable criteria for a GUI task family and then generates instruction-specific checks for concrete values and constraints. It evaluates these adaptive rubrics in offline reward assessment and online agent optimization.
- [Are Android GUI Agents Robust Against Runtime Anomalies? AnTrap: Evaluating Agents in Dynamic Adversarial Environments](https://awesomecua.com/resources/arxiv-2608-24099/) — 2026-08-25
  Introduces AnTrap, which injects task-solvable runtime anomalies into Android GUI-agent trajectories using a layered failure taxonomy. It compares model robustness and adversarial reinforcement learning to distinguish recoverable interface traps from persistent contextual failures.
- [GSAR: Goal-State-Anchor Rewards for Mobile GUI Agents with Self-Evolving Data Synthesis](https://awesomecua.com/resources/arxiv-2608-22847/) — 2026-08-24
  Introduces GSAR, which synthesizes GUI tasks and successful goal states, then annotates task-relevant interface elements as reward anchors. These anchors support offline trajectory verification and online policy training.
- [Training Needs Trustworthy Worlds: Verified Synthetic Web Environments for Agent Learning](https://awesomecua.com/resources/arxiv-2608-21898/) — 2026-08-22
  Builds synthetic websites with verified navigation, backend state, and feasible tasks to provide reliable supervision for web-agent training.
- [Beyond Success and Failure: Length-Aware Contrastive Learning for GUI Agents](https://awesomecua.com/resources/arxiv-2608-21830/) — 2026-08-22
  Introduces LACL-GUI, a contrastive learning objective that distinguishes trajectory quality within both successful and failed GUI executions. It favors concise successes and uses divergence from successful trajectories to differentiate failures during policy optimization.
- [Towards Faithful Simulation of Human Shopping Behavior](https://awesomecua.com/resources/arxiv-2608-20707/) — 2026-08-21
  Presents RecVerse, a screenshot-based shopping simulation agent with hierarchical memory and trajectory-level RL, alongside USB, an interactive e-commerce GUI trajectory dataset.
- [Wuying-Browser-Agent: Real-World Centric Fundamental Long-Horizon Browser Agents](https://awesomecua.com/resources/arxiv-2608-17319/) — 2026-08-18
  Combines a browser execution framework, recovery-oriented supervision, and online reinforcement learning, with a bilingual live-web task benchmark.
- [Agentic ESOpt: Fine-Tuning Long-Horizon LLM Agents with Minimal GPU Requirements](https://awesomecua.com/resources/arxiv-2608-17310/) — 2026-08-18
  Introduces Agentic ESOpt, an evolution-strategies fine-tuning framework for long-horizon agents, evaluated on WebArena-Lite web tasks and automatic heuristic design.
- [CoAdapt-GUI: Joint Workflow Context and Policy Adaptation for Unseen GUI Applications](https://awesomecua.com/resources/arxiv-2608-11588/) — 2026-08-12
  Introduces CoAdapt-GUI, which adapts workflow context and policy from a mobile GUI agent's own rollouts and rewards when it encounters unseen applications.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.com/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [WebGrader: Training LLMs for Web Development with Self-Evolving Programmatic Grader](https://awesomecua.com/resources/arxiv-2608-06474/) — 2026-08-06
  Introduces WebGrader, a programmatic grader for website generation that plans interaction flows, runs them in a live browser, and uses observed outcomes as RL rewards.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.com/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [RMSWeb: Reflection, Failure-Mode Mining, and Salvage-DS for Web Agent Reinforcement Learning](https://awesomecua.com/resources/arxiv-2608-00335/) — 2026-07-31
  Introduces RMSWeb, a training recipe for web agents that uses reflection retries, failure-mode mining, and Salvage-DS reward and sampling methods for web actions.
- [MemHarness: Memory Is Reconstructed, Not Replayed](https://awesomecua.com/resources/arxiv-2607-28272/) — 2026-07-30
  Introduces MemHarness, which trains agents to critique and reconstruct retrieved experience before acting; WebShop is one of two evaluation environments.
- [Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents](https://awesomecua.com/resources/arxiv-2607-28227/) — 2026-07-30
  Describes a foundation GUI agent with combined GUI and command-line actions, large-scale interaction infrastructure, and iterative environment and task generation.
- [Echoverse: Deep, Evolving Environments for Training Computer-Use Agents at Scale](https://awesomecua.com/resources/arxiv-2607-28074/) — 2026-07-30
  Introduces Echoverse, which compiles specifications into stateful applications with database-grounded graders and uses rollouts to improve both the environments and agent policies. It examines behavioral depth, targeted interface practice, and environment repair as sources of training value.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://awesomecua.com/resources/arxiv-2607-21557/) — 2026-07-23
  OpenForgeRL connects stateful agent harnesses to reinforcement-learning infrastructure through a model-call recording proxy and isolated rollout containers. Its validation includes browser and computer-use agents, alongside tool-oriented agents, and examines how harness choice affects learned reliability.
- [Teach it to stop, not just to click](https://awesomecua.com/resources/arxiv-2607-17136/) — 2026-07-19
  Studies verifier-guided repair of a 35B computer-use agent across five environments, examining variation across runs and data draws in done detection, GUI clicks, and field entry.
- [A Learning-Rate-Gated Failure of GRPO in a Small Language and Vision-Language Model Web Agent: A Controlled Null and Its Mechanism](https://awesomecua.com/resources/arxiv-2607-12640/) — 2026-07-14
  Studies a controlled setting where GRPO fails to improve a strong small web agent and can reduce text-track performance. Matched reachable-reward tasks and component grafting distinguish limited optimization headroom from learning-rate-dependent failure mechanisms.
- [SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL](https://awesomecua.com/resources/arxiv-2607-11185/) — 2026-07-13
  Scales computer-agent reinforcement learning through verifiable task generation, capability-aware rollout allocation, and segmented visual context.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.com/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.com/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [What Memory Do GUI Agents Really Need? From Passive Records to Active Task-Driving States](https://awesomecua.com/resources/arxiv-2606-31612/) — 2026-06-30
  Proposes ATMem, an updated execution-state memory for long mobile GUI tasks, and STR-GRPO to train selective memory use; also introduces a mobile task benchmark.
- [Xiaomi-GUI-0 Technical Report](https://awesomecua.com/resources/arxiv-2606-31410/) — 2026-06-30
  Describes a mobile GUI agent trained through real-device interaction, corrected failure trajectories, supervised learning, and reinforcement learning.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.com/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.com/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation](https://awesomecua.com/resources/arxiv-2606-24515/) — 2026-06-23
  The framework uses a vision-language judge’s final-screen assessment as a terminal reward for GUI reinforcement learning. It models evaluator noise and corrects the reward estimator used by PPO across desktop benchmarks.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [Automating SKILL.md Generation for Computer-Using Agents via Interaction Trajectory Mining](https://awesomecua.com/resources/arxiv-2606-20363/) — 2026-06-18
  Segments and clusters GUI trajectories into inspectable skills, then trains a skill-aware policy from those annotations. Its diagnostic results distinguish readable source-domain clusters from reliable transfer and report limited or absent downstream gains.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.com/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.com/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [Reasoning for Mobile User Experience with Multimodal LLMs: Task, Benchmark, and Approach](https://awesomecua.com/resources/arxiv-2606-13192/) — 2026-06-11
  Introduces UXBench for diagnosing usability issues from UI screenshots and UI-UX, a reinforcement-trained model for reasoning about those interface problems.
- [GUI-AC: Enhancing Continual Learning in GUI Agents](https://awesomecua.com/resources/arxiv-2606-10522/) — 2026-06-09
  GUI-AC uses grounding certainty to adjust advantage weighting and policy-clipping bounds during continual reinforcement fine-tuning. Its mechanisms aim to suppress noisy confidence updates while retaining exploration under shifting GUI domains and resolutions.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [Self-evolving LLM agents with in-distribution Optimization](https://awesomecua.com/resources/arxiv-2606-07367/) — 2026-06-05
  Introduces Q-Evolve, which derives step-wise rewards from an in-distribution critic for LLM agent learning; WebShop is one of its interactive evaluation settings.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.com/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [AsyncWebRL: Efficient Asynchronous Reinforcement Learning for Multi-Step Visual Web Agents](https://awesomecua.com/resources/arxiv-2606-05597/) — 2026-06-04
  AsyncWebRL overlaps web-agent rollouts, updates and policy refresh while managing screenshot handling and a persistent rollout pool. It also replaces trajectory-length normalization in multi-step GRPO to reduce verbose failed trajectories, with throughput and out-of-distribution evaluation.
- [OpenWebRL: Demystifying Online Multi-turn Reinforcement Learning for Visual Web Agents](https://awesomecua.com/resources/arxiv-2606-02031/) — 2026-06-01
  Introduces OpenWebRL, a framework for training visual web agents with online multi-turn reinforcement learning on live websites, including browser infrastructure and success judging.
- [GUI-SAGE: Enhancing GUI Automation with Self-Explanatory Learning](https://awesomecua.com/resources/url-beb8f1fd6b945ffc9d93/) — 2026-06
  GUI-SAGE generates reasoning conditioned on known actions and weights policy updates using confidence and reward signals. Its experiments use AndroidControl and GUIOdyssey data and separately evaluate interactive AndroidWorld tasks.
- [GUI-C$^2$: Coarse-to-Fine GUI Grounding via Difficulty-Aware Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-30884/) — 2026-05-29
  Introduces GUI-D to score training samples by difficulty and GUI-C² to refine screen-element locations through area-gated cropping and reinforcement learning.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.com/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [STAMP: Training Explicit Memory for Mobile GUI Agents in Controllable and Scalable Virtual Environments](https://awesomecua.com/resources/arxiv-2605-29324/) — 2026-05-28
  STAMP trains explicit memory for mobile GUI agents in virtual environments by injecting facts into generated tasks and using supervised data and online RL.
- [PRO-CUA: Process-Reward Optimization for Computer Use Agents](https://awesomecua.com/resources/arxiv-2605-29119/) — 2026-05-27
  PRO-CUA trains computer-use agents with step-level RL, scoring candidate actions from live rollouts with a process reward model and evaluating on live web benchmarks.
- [Darwin Mobile Agent: A Roadmap for Self-Evolution](https://awesomecua.com/resources/arxiv-2606-20622/) — 2026-05-26
  Describes asynchronous reinforcement-learning infrastructure using parallel cloud-hosted Android instances, explicit task lifecycles, and persistent-state management for mobile GUI interaction.
- [MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research](https://awesomecua.com/resources/arxiv-2605-26114/) — 2026-05-25
  Introduces MobileGym, a browser-hosted simulation of mobile app interactions whose configurable JSON state supports deterministic judging and parallel rollouts. MobileGym-Bench adds parameterized tasks, with experiments examining online training and transfer to real devices.
- [CUA-Gym: Scaling Verifiable Training Environments and Tasks for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-25624/) — 2026-05-25
  Presents CUA-Gym, which co-generates instructions, initial and target states, and executable reward checks through generator-discriminator iterations. Mock web applications expand training environments, with learned agents evaluated on OSWorld-Verified and WebArena.
- [Spreadsheet-RL: Advancing Large Language Model Agents on Realistic Spreadsheet Tasks via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-22642/) — 2026-05-21
  Spreadsheet-RL trains spreadsheet agents with RL in a Microsoft Excel environment exposed through a Python sandbox and supplies the Domain-Spreadsheet benchmark.
- [What and When to Distill: Selective Hindsight Distillation for Multi-Turn Agents](https://awesomecua.com/resources/arxiv-2605-19447/) — 2026-05-19
  SERL trains multi-turn agents by using task rewards and selective step feedback to weight updates, with WebShop among its evaluation settings.
- [PAGER: Bridging the Semantic-Execution Gap in Point-Precise Geometric GUI Control](https://awesomecua.com/resources/arxiv-2605-15963/) — 2026-05-15
  Introduces PAGE Bench for point-precise geometric GUI construction and PAGER, an agent that plans around primitive dependencies and executes pixel-level actions.
- [Orchard: An Open-Source Agentic Modeling Framework](https://awesomecua.com/resources/arxiv-2605-15040/) — 2026-05-14
  Orchard provides an environment service and training recipes for several agent domains, including Orchard-GUI, a vision-language computer-use agent.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.com/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Don't Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://awesomecua.com/resources/arxiv-2605-09497/) — 2026-05-10
  DUDE combines asymmetric hybrid-reward learning with summaries of deceptive-interface failures to guide safer web actions. Its RUC benchmark evaluates deception susceptibility alongside ordinary task performance across interface scenarios.
- [LiteGUI: Lightweight GUI Agents via Multi-Solution Guided Distillation and Dual-Level Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-07505/) — 2026-05-08
  LiteGUI trains lightweight GUI agents on logged states with guided on-policy distillation and dual-level RL, supported by its multi-solution Lite-Dataset.
- [Weblica: Scalable and Reproducible Training Environments for Visual Web Agents](https://awesomecua.com/resources/arxiv-2605-06761/) — 2026-05-07
  Introduces Weblica, which combines HTTP-level capture and replay with website-grounded environment synthesis. The resulting interactive web environments support reinforcement learning and tests of navigation transfer and inference-time scaling.
- [Planner Matters! An Efficient and Unbalanced Multi-agent Collaboration Framework for Long-horizon Planning](https://awesomecua.com/resources/arxiv-2605-02168/) — 2026-05-04
  A planner-centric RL framework divides agent automation among a planner, actor, and memory manager, with evaluations that include web navigation and OS control.
- [Faithful Mobile GUI Agents with Guided Advantage Estimator](https://awesomecua.com/resources/arxiv-2605-01208/) — 2026-05-02
  Introduces Faithful-Agent, which first teaches abstention under perturbed evidence and then refines GUI policies with an anchor-based, variance-adaptive advantage estimator. A thought-action consistency reward encourages decisions grounded in displayed evidence and instructions.
- [SOLAR-RL: Semi-Online Long-horizon Assignment Reinforcement Learning](https://awesomecua.com/resources/arxiv-2604-22558/) — 2026-04-24
  SOLAR-RL trains GUI navigation agents by reconstructing rollout candidates from static data and assigning step rewards that reflect trajectory quality.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.com/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [RiskWebWorld: A Realistic Interactive Benchmark for GUI Agents in E-commerce Risk Management](https://awesomecua.com/resources/arxiv-2604-13531/) — 2026-04-15
  Introduces RiskWebWorld, an interactive benchmark of e-commerce risk-management tasks for GUI agents on websites, with Gymnasium infrastructure for evaluation and agentic RL.
- [Towards Scalable Lightweight GUI Agents via Multi-role Orchestration](https://awesomecua.com/resources/arxiv-2604-13488/) — 2026-04-15
  Introduces LAMO, a training framework for a lightweight GUI agent that can execute tasks alone or serve as an action executor alongside planners in multi-agent workflows.
- [From Imitation to Discrimination: Progressive Curriculum Learning for Robust Web Navigation](https://awesomecua.com/resources/arxiv-2604-12666/) — 2026-04-14
  Introduces the Triton dataset and a staged training curriculum for text-based web navigation agents, using hard-negative HTML examples to train element discrimination and longer task execution.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.com/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents](https://awesomecua.com/resources/arxiv-2604-11784/) — 2026-04-13
  Presents ClawGUI, a shared harness for GUI-agent reinforcement learning, benchmark evaluation and deployment on mobile devices. It combines parallel virtual and physical environments, process rewards, and hybrid CLI-GUI execution with persistent memory.
- [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](https://awesomecua.com/resources/arxiv-2604-07277/) — 2026-04-08
  Introduces Android Coach, which uses a learned critic to evaluate multiple candidate actions at each observed emulator state. Process rewards and a group-wise advantage estimator support online training, evaluated on AndroidLab and AndroidWorld.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.com/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.com/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [OS-Themis: A Scalable Critic Framework for Generalist GUI Rewards](https://awesomecua.com/resources/arxiv-2603-19191/) — 2026-03-19
  Presents OS-Themis, a multi-agent critic that divides GUI trajectories into verifiable milestones and reviews their evidence before assigning an outcome. OGRBench evaluates GUI rewards across platforms, with AndroidWorld experiments examining training and trajectory filtering.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.com/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [Safe and Scalable Web Agent Learning via Recreated Websites](https://awesomecua.com/resources/arxiv-2603-10505/) — 2026-03-11
  Introduces VeriEnv, which recreates websites as executable training environments and exposes internal state through a Python SDK for task generation and deterministic reward checks. Experiments examine web-agent learning across new and expanded site environments.
- [Agentic Critical Training](https://awesomecua.com/resources/arxiv-2603-08706/) — 2026-03-09
  Introduces Agentic Critical Training (ACT), a reinforcement-learning warm-up that teaches general agents to choose expert actions over alternatives, with WebShop among its evaluations.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.com/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [SlowBA: An efficiency backdoor attack towards VLM-based GUI agents](https://awesomecua.com/resources/arxiv-2603-08316/) — 2026-03-09
  Introduces SlowBA, a backdoor attack on vision-language GUI agents that uses pop-up triggers to induce longer reasoning chains and increase response latency.
- [Generalization in Online Reinforcement Learning for Mobile Agents](https://awesomecua.com/resources/arxiv-2603-07432/) — 2026-03-08
  Introduces AndroidWorld-Generalization with separate tests for unseen task instances, templates, and applications. A GRPO training system combines containerized environments with asynchronous trajectory collection to study these generalization regimes.
- [WebFactory: Automated Compression of Foundational Language Intelligence into Grounded Web Agents](https://awesomecua.com/resources/arxiv-2603-05044/) — 2026-03-05
  Introduces WebFactory, a GUI-agent training pipeline that synthesizes websites, generates tasks and trajectories, and trains with decomposed rewards. Offline and online transfer evaluations examine agents trained on the generated environments.
- [Dual-Modality Multi-Stage Adversarial Safety Training: Robustifying Multimodal Web Agents Against Cross-Modal Attacks](https://awesomecua.com/resources/arxiv-2603-04364/) — 2026-03-04
  Studies webpage injections that affect both screenshots and accessibility trees, then trains web agents through teacher imitation, supervised adversarial examples, and adversarial reinforcement learning. The evaluation tests defenses on MiniWoB++ and held-out tasks.
- [CGL: Advancing Continual GUI Learning via Reinforcement Fine-Tuning](https://awesomecua.com/resources/arxiv-2603-02951/) — 2026-03-03
  Combines supervised and reinforcement fine-tuning for continual GUI learning, using policy entropy to adjust their proportions and gradient projection to limit conflicting updates. AndroidControl-CL groups applications into sequential tasks to evaluate adaptation and retention.
- [K^2-Agent: Co-Evolving Know-What and Know-How for Hierarchical Mobile Device Control](https://awesomecua.com/resources/arxiv-2603-00676/) — 2026-02-28
  Introduces K2-Agent, a hierarchical mobile-control framework that refines task knowledge through a reasoning loop and trains an executor with curriculum-guided reinforcement learning.
- [GUI-Libra: Training Native GUI Agents to Reason and Act with Action-aware Supervision and Partially Verifiable RL](https://awesomecua.com/resources/arxiv-2602-22190/) — 2026-02-25
  GUI-Libra trains GUI agents with action-aware supervision, a curated reasoning dataset and reinforcement learning adapted to partially verifiable actions across web and mobile tasks.
- [HiPER: Hierarchical Reinforcement Learning with Explicit Credit Assignment for Large Language Model Agents](https://awesomecua.com/resources/arxiv-2602-16165/) — 2026-02-18
  HiPER trains interactive LLM agents with separate subgoal planning and multi-step execution, assigning reinforcement-learning credit at both levels.
- [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://awesomecua.com/resources/arxiv-2602-16855/) — 2026-02-15
  Presents GUI-Owl-1.5 variants and a hybrid data pipeline for multimodal GUI interaction, tool use, memory, and multi-platform tasks.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.com/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization](https://awesomecua.com/resources/arxiv-2602-13653/) — 2026-02-14
  This framework learns an agentic-Q model to estimate individual actions’ contributions to GUI task completion. It then optimizes a policy with step-level samples from its own trajectories, decoupling policy updates from environment interaction.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.com/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [Adaptive Milestone Reward for GUI Agents](https://awesomecua.com/resources/arxiv-2602-11524/) — 2026-02-12
  ADMIRE extracts milestones from successful GUI explorations to provide adaptive intermediate rewards. It assigns credit differently to successful and failed trajectories and evaluates training on AndroidWorld, with additional transfer studies in web and embodied settings.
- [ICA: Information-Aware Credit Assignment for Visually Grounded Long-Horizon Information-Seeking Agents](https://awesomecua.com/resources/arxiv-2602-10863/) — 2026-02-11
  Information-Aware Credit Assignment scores intermediate information gathered by web agents, using rendered webpage snapshots to compare evidence across trajectories.
- [Autonomous Continual Learning for Environment Adaptation of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2602-10356/) — 2026-02-10
  ACuRL uses autonomous interface exploration and an adaptive task curriculum to continually train computer-use policies with reinforcement learning. CUAJudge supplies outcome feedback, and experiments study adaptation across desktop applications and environment changes.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.com/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [UI-Venus-1.5 Technical Report](https://awesomecua.com/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [POINTS-GUI-G: GUI-Grounding Journey](https://awesomecua.com/resources/arxiv-2602-06391/) — 2026-02-06
  Studies GUI-grounding development from a weakly grounded base model through data preparation, visual training, and verifiable rewards.
- [UI-Mem: Self-Evolving Experience Memory for Online Reinforcement Learning in Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2602-05832/) — 2026-02-05
  UI-Mem stores workflows, skills and failure patterns as reusable templates to guide online GUI reinforcement learning. It varies guidance within rollout groups and continually updates the memory so an unguided policy can learn from guided experiences.
- [SSL: Sweet Spot Learning for Differentiated Guidance in Agentic Optimization](https://awesomecua.com/resources/arxiv-2601-22491/) — 2026-01-30
  SSL uses progressively tiered rewards for agent training, including distance-based guidance on GUI perception tasks alongside planning and reasoning tasks.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.com/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents](https://awesomecua.com/resources/arxiv-2601-21872/) — 2026-01-29
  WebArbiter generates reasoned action-preference verdicts for web navigation, using reasoning distillation followed by reinforcement learning. It introduces WebPRMBench and evaluates both preference judgments and reward-guided trajectory search.
- [Continual GUI Agents](https://awesomecua.com/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.com/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [Computer Environments Elicit General Agentic Intelligence in LLMs](https://awesomecua.com/resources/arxiv-2601-16206/) — 2026-01-22
  LLM-in-Sandbox gives agents a minimal computer environment for resource access, file management and code execution; LLM-in-Sandbox-RL trains models to use it.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.com/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.com/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [Web Agent Agentic Reinforcement Learning Decision Model Under Multi-Cost and Failure Risk](https://awesomecua.com/resources/arxiv-2610-23857/) — 2026-01-12
  Proposes constrained reinforcement learning for web agents that weighs request costs, latency and failure risk across multi-step website tasks.
- [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](https://awesomecua.com/resources/arxiv-2601-05787/) — 2026-01-09
  BEPA adapts a small set of expert GUI traces into policy-aligned guidance through trajectories reachable by the learner and a dynamically updated task cache. It evaluates this two-level approach to reinforcement learning on desktop and web benchmarks.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.com/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.com/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [SmartSnap: Proactive Evidence Seeking for Self-Verifying Agents](https://awesomecua.com/resources/arxiv-2512-22322/) — 2025-12-26
  SmartSnap trains GUI agents to collect concise screenshot evidence of task completion for an LLM judge, with experiments on mobile tasks.
- [MAI-UI Technical Report: Real-World Centric Foundation GUI Agents](https://awesomecua.com/resources/arxiv-2512-22047/) — 2025-12-26
  MAI-UI combines GUI navigation, native user interaction, and MCP tool calls in a family of policies trained through generated data and online reinforcement learning. The report also studies device-cloud routing and scaling of parallel environments and interaction budgets, with grounding and Android navigation evaluation.
- [OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models](https://awesomecua.com/resources/arxiv-2512-16295/) — 2025-12-18
  OS-Oracle synthesizes GUI critic examples and trains a pre-action critic with supervised learning followed by consistency-preserving GRPO. It introduces OS-Critic Bench across mobile, web, and desktop settings and tests critic-assisted agents in OSWorld and AndroidWorld.
- [GUI Exploration Lab: Enhancing Screen Navigation in Agents via Multi-Turn Reinforcement Learning](https://awesomecua.com/resources/arxiv-2512-02423/) — 2025-12-02
  Introduces GUI Exploration Lab, a simulation engine for composing screens, interface elements, and navigation graphs. It studies how supervised learning, single-turn RL, and multiturn RL affect GUI navigation and exploration.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.com/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [STEP: Success-Rate-Aware Trajectory-Efficient Policy Optimization](https://awesomecua.com/resources/arxiv-2511-13091/) — 2025-11-17
  STEP allocates RL sampling by task success rate and trains on individual steps from interaction trajectories, with evaluations on OSWorld and AndroidWorld.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.com/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.com/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.com/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.com/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [Scaling Agent Learning via Experience Synthesis](https://awesomecua.com/resources/arxiv-2511-03773/) — 2025-11-05
  DreamGym synthesizes agent experiences with a reasoning-based environment model for online RL; its evaluations include the web task setting WebArena.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.com/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [GUI-Rise: Structured Reasoning and History Summarization for GUI Navigation](https://awesomecua.com/resources/arxiv-2510-27210/) — 2025-10-31
  Combines structured progress-and-decision reasoning with history summarization to improve cross-domain generalization in GUI navigation agents.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.com/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [UI-Ins: Enhancing GUI Grounding with Multi-Perspective Instruction-as-Reasoning](https://awesomecua.com/resources/arxiv-2510-20286/) — 2025-10-23
  Treats alternative instruction formulations as reasoning paths and trains GUI-grounding models to select and combine useful perspectives.
- [ColorAgent: Building A Robust, Personalized, and Interactive OS Agent](https://awesomecua.com/resources/arxiv-2510-19386/) — 2025-10-22
  Presents ColorAgent, an operating system agent for long-horizon user instructions, trained with step-wise RL and self-evolving training and evaluated on AndroidWorld and AndroidLab.
- [See, Think, Act: Online Shopper Behavior Simulation with VLM Agents](https://awesomecua.com/resources/arxiv-2510-19245/) — 2025-10-22
  Studies online shopper action prediction with VLM agents using webpage screenshots, HTML, and action history from OPeRA, trained with SFT and hierarchical RL rewards.
- [UltraCUA: A Foundation Model for Computer Use Agents with Hybrid Action](https://awesomecua.com/resources/arxiv-2510-17790/) — 2025-10-20
  UltraCUA trains a shared policy for primitive GUI actions and high-level tool calls using synthesized tasks and hybrid trajectories. Supervised fine-tuning followed by online reinforcement learning is evaluated on OSWorld and WindowsAgentArena.
- [Beyond Pipelines: A Survey of the Paradigm Shift toward Model-Native Agentic AI](https://awesomecua.com/resources/arxiv-2510-16720/) — 2025-10-19
  Surveys model-native agentic AI and the role of RL in learned planning, tool use and memory, covering GUI agents as one application alongside deep-research agents.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.com/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [Agentic Entropy-Balanced Policy Optimization](https://awesomecua.com/resources/arxiv-2510-14545/) — 2025-10-16
  Introduces Agentic Entropy-Balanced Policy Optimization (AEPO), an RL method that adjusts rollout sampling and policy updates for tool-using web agents.
- [Hi-Agent: Hierarchical Vision-Language Agents for Mobile Device Control](https://awesomecua.com/resources/arxiv-2510-14388/) — 2025-10-16
  Introduces Hi-Agent, jointly training a high-level reasoning model and a low-level mobile action model. Execution feedback supplies a foresight advantage for optimizing subgoal decisions, with evaluations on Android control benchmarks.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.com/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.com/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.com/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.com/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [GUI-Shepherd: Reliable Process Reward and Verification for Long-Sequence GUI Tasks](https://awesomecua.com/resources/arxiv-2509-23738/) — 2025-09-28
  Introduces GUI-Shepherd, a process reward model trained on annotated GUI interactions to give step-level feedback for agent training and verification on AndroidWorld and AndroidControl.
- [WebGen-Agent: Enhancing Interactive Website Generation with Multi-Level Feedback and Step-Level Reinforcement Learning](https://awesomecua.com/resources/arxiv-2509-22644/) — 2025-09-26
  Introduces WebGen-Agent for website code generation, using screenshot critiques and GUI-agent tests to refine code and provide step-level training rewards.
- [RISK: A Framework for GUI Agents in E-commerce Risk Management](https://awesomecua.com/resources/arxiv-2509-21982/) — 2025-09-26
  RISK combines browser-interaction training data, a benchmark, and reinforcement fine-tuning for e-commerce risk-management workflows. Its trajectories and rewards distinguish individual actions from multi-step stateful tasks involving deeply embedded web content.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.com/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [Agentic Reinforcement Learning with Implicit Step Rewards](https://awesomecua.com/resources/arxiv-2509-19199/) — 2025-09-23
  Introduces iStar, a general agentic RL method that learns implicit step rewards; WebShop is one of several interactive benchmarks used to evaluate it.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.com/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [Mano Technical Report](https://awesomecua.com/resources/arxiv-2509-17336/) — 2025-09-22
  Introduces Mano, a GUI agent trained with simulated data, supervised fine-tuning, and offline and online RL, with a verification module for error recovery.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.com/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.com/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [TGPO: Tree-Guided Preference Optimization for Robust Web Agent Reinforcement Learning](https://awesomecua.com/resources/arxiv-2509-14172/) — 2025-09-17
  TGPO merges semantically equivalent web states into tree-structured trajectories for offline preference optimization. A process reward model scores subgoal progress, redundant behavior, and action validity, while dynamic weighting emphasizes consequential decisions.
- [ReSum: Unlocking Long-Horizon Search Intelligence via Context Summarization](https://awesomecua.com/resources/arxiv-2509-13313/) — 2025-09-16
  Introduces ReSum, which compresses interaction histories during long web searches, and ReSum-GRPO, which trains agents to reason across the resulting segments.
- [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.com/resources/arxiv-2509-11543/) — 2025-09-15
  UI-S1 simulates multi-turn online learning over offline trajectories, using a patch module to recover divergences while retaining the model’s own outputs in context. It combines discounted future returns with step- and episode-level advantages and introduces a semi-online performance proxy.
- [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2509-18119/) — 2025-09-10
  MobileRL adapts GRPO to mobile GUI training with difficulty-dependent replay of successes and filtering of failure curricula. A shortest-path reward adjustment accounts for task length, with evaluations on AndroidWorld and AndroidLab.
- [VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents](https://awesomecua.com/resources/arxiv-2509-07553/) — 2025-09-09
  Introduces VeriOS-Agent, which learns when to execute GUI actions autonomously and when to query a user under untrustworthy conditions. Its staged training combines supervised learning and group-relative policy optimization.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.com/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [Succeed or Learn Slowly: Sample Efficient Off-Policy Reinforcement Learning for Mobile App Control](https://awesomecua.com/resources/arxiv-2509-01720/) — 2025-09-01
  Succeed or Learn Slowly applies direct off-policy updates to successful interactions and more conservative regularized updates to negative examples. Successful Transition Replay prioritizes successful experience during policy learning, with evaluation on AndroidWorld.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.com/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.com/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [SWIRL: A Staged Workflow for Interleaved Reinforcement Learning in Mobile GUI Control](https://awesomecua.com/resources/arxiv-2508-20018/) — 2025-08-27
  Introduces SWIRL, staged interleaved RL for mobile GUI control, pairing a Navigator that plans from screens and language with an Interactor that produces actions.
- [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://awesomecua.com/resources/arxiv-2508-19679/) — 2025-08-27
  InquireMobile trains mobile agents to seek human confirmation at critical decisions using staged reinforcement fine-tuning and pre-action reasoning. InquireBench evaluates safe interaction and proactive inquiry, distinguishing asking for help from completing the underlying task.
- [InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency](https://awesomecua.com/resources/arxiv-2508-18265/) — 2025-08-25
  Introduces InternVL3.5, a multimodal model family trained with Cascade RL and designed for more efficient inference; GUI interaction is among its stated capabilities.
- [ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents](https://awesomecua.com/resources/arxiv-2508-14040/) — 2025-08-19
  Combines API and GUI actions with distributed desktop reinforcement learning and alternating supervised training to address training instability.
- [CRAFT-GUI: Curriculum-Reinforced Agent For GUI Tasks](https://awesomecua.com/resources/arxiv-2508-11360/) — 2025-08-15
  CRAFT-GUI organizes GUI trajectories by difficulty for curriculum-based GRPO training. Its reward combines rule-based signals with model judgments, with evaluation on Android Control and an internal online benchmark.
- [UI-Venus Technical Report: Building High-performance UI Agents with RFT](https://awesomecua.com/resources/arxiv-2508-10833/) — 2025-08-14
  Studies screenshot-based GUI grounding and navigation using curated interaction data, reward design, and reinforcement fine-tuning.
- [InfiGUI-G1: Advancing GUI Grounding with Adaptive Exploration Policy Optimization](https://awesomecua.com/resources/arxiv-2508-05731/) — 2025-08-07
  Uses multiple candidate answers and adaptive exploration rewards to improve spatial and semantic alignment in GUI grounding.
- [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.com/resources/arxiv-2508-05615/) — 2025-08-07
  GUI-RC aggregates multiple grounding predictions into spatial voting grids to choose a consensus region. GUI-RCPO then turns agreement with that region into a reward for test-time policy updates on unlabeled GUI screenshots.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.com/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [GuirlVG: Incentivize GUI Visual Grounding via Empirical Exploration on Reinforcement Learning](https://awesomecua.com/resources/arxiv-2508-04389/) — 2025-08-06
  Introduces GuirlVG, an empirical study of reinforcement fine-tuning for GUI visual grounding. It analyzes training components and adds an adaptive KL-based mechanism to limit reward over-optimization.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.com/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](https://awesomecua.com/resources/arxiv-2508-02046/) — 2025-08-04
  NaviMaster trains a shared policy for GUI and embodied navigation using a common visual-trajectory formulation. It combines trajectory collection, reinforcement learning and distance-aware rewards, with evaluation across both task families.
- [UI-AGILE: Advancing GUI Agents with Effective Reinforcement Learning and Precise Inference-Time Grounding](https://awesomecua.com/resources/arxiv-2507-22025/) — 2025-07-29
  Combines grounding-oriented reward and sampling improvements with inference-time image decomposition and target selection.
- [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.com/resources/arxiv-2507-15846/) — 2025-07-21
  GUI-G2 replaces binary grounding rewards with Gaussian point rewards and spatial-coverage rewards. An adaptive variance tied to element dimensions supplies continuous training feedback for targets of different sizes, evaluated on the ScreenSpot benchmark family.
- [MagicGUI: A Foundational Mobile GUI Agent with Scalable Data Pipeline and Reinforcement Fine-tuning](https://awesomecua.com/resources/arxiv-2508-03700/) — 2025-07-19
  Combines a mobile GUI data pipeline, perception and planning capabilities, and reinforcement fine-tuning for interactive task execution.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.com/resources/arxiv-2507-05791/) — 2025-07-08
  GTA1 samples multiple action proposals at each GUI step and uses a judge to select among them. A separate grounding model is trained with reinforcement learning to map selected proposals to visual targets, linking planning-time search with click localization.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.com/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.com/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [GLM-4.5V and GLM-4.1V-Thinking: Towards Versatile Multimodal Reasoning with Scalable Reinforcement Learning](https://awesomecua.com/resources/arxiv-2507-01006/) — 2025-07-01
  Reports the GLM-4.1V-Thinking, GLM-4.5V, and GLM-4.6V vision-language model family and curriculum-based RL training, with GUI agents among its evaluated tasks.
- [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://awesomecua.com/resources/arxiv-2506-20332/) — 2025-06-25
  Uses a staged curriculum from response-format alignment through action feedback to interactive task-level training for mobile agents.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.com/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [LPO: Towards Accurate GUI Agent Interaction via Location Preference Optimization](https://awesomecua.com/resources/arxiv-2506-09373/) — 2025-06-11
  Location Preference Optimization uses an information-entropy signal to select interaction regions and a distance-based reward to assess click locations. It trains GUI localization through preference optimization and evaluates both offline grounding and online interaction.
- [Thinking vs. Doing: Agents that Reason by Scaling Test-Time Interaction](https://awesomecua.com/resources/arxiv-2506-07976/) — 2025-06-09
  Test-Time Interaction scales the interaction horizon so web agents can explore, backtrack and revise plans within a rollout. Its online reinforcement-learning curriculum adjusts rollout lengths and is evaluated on WebVoyager and WebArena.
- [MiMo-VL Technical Report](https://awesomecua.com/resources/arxiv-2506-03569/) — 2025-06-04
  Reports MiMo-VL-7B-SFT and MiMo-VL-7B-RL, general vision-language models trained with staged pre-training and mixed RL, with GUI grounding evaluated on OSWorld-G.
- [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://awesomecua.com/resources/arxiv-2506-01391/) — 2025-06-02
  Combines grounding pretraining, bilingual interaction trajectories, and reinforcement fine-tuning for mobile GUI actions.
- [ZeroGUI: Automating Online GUI Learning at Zero Human Cost](https://awesomecua.com/resources/arxiv-2505-23762/) — 2025-05-29
  Combines generated tasks, estimated success rewards, and online reinforcement learning to automate GUI-agent interaction training.
- [Grounded Reinforcement Learning for Visual Reasoning](https://awesomecua.com/resources/arxiv-2505-23678/) — 2025-05-29
  Introduces ViGoRL, a visual reasoning model trained to reference image coordinates and zoom during reasoning; its evaluations include GUI element localization.
- [WorkForceAgent-R1: Incentivizing Reasoning Capability in LLM-based Web Agents via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-22942/) — 2025-05-28
  Uses rule-based rewards for output structure and action correctness to train reasoning for enterprise web navigation.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [SPA-RL: Reinforcing LLM Agents via Stepwise Progress Attribution](https://awesomecua.com/resources/arxiv-2505-20732/) — 2025-05-27
  Introduces SPA, a reward redistribution method for multi-step LLM agents that estimates each action’s contribution to task completion; Webshop is among its evaluations.
- [ScreenExplorer: Training a Vision-Language Model for Diverse Exploration in Open GUI World](https://awesomecua.com/resources/arxiv-2505-19095/) — 2025-05-25
  Trains ScreenExplorer with reinforcement learning in dynamic GUI environments, using a world-model curiosity reward and experience-stream distillation to support sustained exploration.
- [ProgRM: Build Better GUI Agents with Progress Rewards](https://awesomecua.com/resources/arxiv-2505-18121/) — 2025-05-23
  ProgRM predicts per-step task completion progress to provide intermediate rewards during online GUI-agent training. It derives progress labels by using longest common subsequences to identify key trajectory steps, allowing useful partial progress to contribute even when a trajectory ultimately fails.
- [WebAgent-R1: Training Web Agents via End-to-End Multi-Turn Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-16421/) — 2025-05-22
  Trains web agents through asynchronous multi-turn environment interaction, using task-success rewards to optimize complete trajectories.
- [ARPO:End-to-End Policy Optimization for GUI Agents with Experience Replay](https://awesomecua.com/resources/arxiv-2505-16282/) — 2025-05-22
  ARPO extends group-relative policy optimization with a replay buffer that reuses successful GUI trajectories across training iterations. It filters tasks using baseline performance and compares end-to-end reinforcement learning with offline preference optimization on OSWorld.
- [GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents](https://awesomecua.com/resources/arxiv-2505-15810/) — 2025-05-21
  Analyzes reasoning templates, reward design, and policy updates in GUI grounding, then proposes targeted adjustments to the training process.
- [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.com/resources/arxiv-2505-15277/) — 2025-05-21
  Web-Shepherd is a process reward model for assessing individual steps of web-navigation trajectories. It introduces a collection of 40,000 step-level preference pairs with checklists and a separate benchmark for comparing reward models, then evaluates verification during WebArena-lite navigation.
- [ReGUIDE: Data Efficient GUI Grounding via Spatial Reasoning and Search](https://awesomecua.com/resources/arxiv-2505-15259/) — 2025-05-21
  Combines self-generated localization reasoning, spatial consistency checks, and inference-time search to improve data-efficient web grounding.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [Enhancing Visual Grounding for GUI Agents via Self-Evolutionary Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-12370/) — 2025-05-18
  Proposes GUI grounding training that combines curated seed examples, continuous location-dependent policy feedback, and iterative refinement guided by attention maps. The study evaluates the resulting reinforcement-learning procedure on three grounding benchmarks, including ScreenSpot-Pro.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.com/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [Group-in-Group Policy Optimization for LLM Agent Training](https://awesomecua.com/resources/arxiv-2505-10978/) — 2025-05-16
  Introduces Group-in-Group Policy Optimization (GiGPO), an RL method for assigning step-level credit in multi-turn agents, evaluated on WebShop among other tasks.
- [A Survey on GUI Agents with Foundation Models Enhanced by Reinforcement Learning](https://awesomecua.com/resources/arxiv-2504-20464/) — 2025-04-29
  Formalizes GUI tasks as Markov decision processes and traces agent training from prompting through supervised fine-tuning to reinforcement learning.
- [InfiGUI-R1: Advancing Multimodal GUI Agents from Reactive Actors to Deliberative Reasoners](https://awesomecua.com/resources/arxiv-2504-14239/) — 2025-04-19
  Uses a staged reasoning-focused training framework to move GUI agents from reactive actions toward deliberative planning and recovery.
- [GUI-R1 : A Generalist R1-Style Vision-Language Action Model For GUI Agents](https://awesomecua.com/resources/arxiv-2504-10458/) — 2025-04-14
  Applies reinforcement fine-tuning with unified action rules and curated cross-platform examples to vision-language GUI agents.
- [UI-R1: Enhancing Efficient Action Prediction of GUI Agents by Reinforcement Learning](https://awesomecua.com/resources/arxiv-2503-21620/) — 2025-03-27
  Uses rule-based action rewards and policy optimization to train GUI action prediction from a compact set of mobile tasks.
- [STEVE: A Step Verification Pipeline for Computer-use Agent Training](https://awesomecua.com/resources/arxiv-2503-12532/) — 2025-03-16
  Labels individual computer-use actions by comparing surrounding screenshots, then trains agents from both successful and unsuccessful steps.
- [VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model](https://awesomecua.com/resources/arxiv-2502-18906/) — 2025-02-26
  Trains GUI agents with a frozen value model learned from offline interactions, guiding action exploration without predicting complete next observations.
- [Advancing Language Multi-Agent Learning with Credit Re-Assignment for Interactive Environment Generalization](https://awesomecua.com/resources/arxiv-2502-14496/) — 2025-02-20
  Introduces CollabUIAgents, a multi-agent RL framework that assigns LLM-based process rewards to help agents generalize across interactive settings including mobile operations and web browsing.
- [Digi-Q: Learning Q-Value Functions for Training Device-Control Agents](https://awesomecua.com/resources/arxiv-2502-15760/) — 2025-02-13
  Learns action-value functions from offline device-control experience and uses them to rank candidate actions for policy improvement.
- [Advancing Autonomous VLM Agents via Variational Subgoal-Conditioned Reinforcement Learning](https://awesomecua.com/resources/arxiv-2502-07949/) — 2025-02-11
  Uses variational subgoal-conditioned reinforcement learning to improve learning efficiency on sparse-reward mobile and web-control tasks.
- [Reinforcement Learning for Long-Horizon Interactive LLM Agents](https://awesomecua.com/resources/arxiv-2502-01600/) — 2025-02-03
  LOOP trains interactive digital agents with reinforcement learning in stateful, multi-app environments where tasks are performed through API calls.
- [Proposer-Agent-Evaluator(PAE): Autonomous Skill Discovery For Foundation Model Internet Agents](https://awesomecua.com/resources/arxiv-2412-13194/) — 2024-12-17
  Combines autonomous task proposal, web interaction, and visual success evaluation to discover skills and improve browser-agent policies.
- [From Novice to Expert: LLM Agent Policy Optimization via Step-wise Reinforcement Learning](https://awesomecua.com/resources/arxiv-2411-03817/) — 2024-11-06
  Introduces StepAgent, which compares agent and expert actions to supply intermediate rewards for policy learning, with implicit-reward and inverse-RL variants. Evaluation includes WebShop and Mind2Web alongside non-web tasks.
- [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://awesomecua.com/resources/arxiv-2411-02337/) — 2024-11-04
  Trains web agents with an evolving task curriculum, outcome supervision, and reinforcement-learning updates intended to manage policy drift.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.com/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [DistRL: An Asynchronous Distributed Reinforcement Learning Framework for On-Device Control Agents](https://awesomecua.com/resources/arxiv-2410-14803/) — 2024-10-18
  Introduces asynchronous distributed reinforcement learning with centralized updates and decentralized interaction collection for device-control agents.
- [DigiRL: Training In-The-Wild Device-Control Agents with Autonomous Reinforcement Learning](https://awesomecua.com/resources/arxiv-2406-11896/) — 2024-06-14
  Combines offline initialization and online reinforcement learning in Android environments, with automated evaluation and curriculum-based sampling.
- [Navigating WebAI: Training Agents to Complete Web Tasks with Large Language Models and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2405-00516/) — 2024-05-01
  Combines supervised and reinforcement learning for MiniWoB web tasks and investigates whether agents understand HTML structure or memorize target elements.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.com/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [AutoWebGLM: A Large Language Model-based Web Navigating Agent](https://awesomecua.com/resources/arxiv-2404-03648/) — 2024-04-04
  Builds a web agent through simplified HTML observations, human-and-AI browsing data, curriculum training, and reinforcement-learning refinement.
- [CrashTranslator: Automatically Reproducing Mobile Application Crashes Directly from Stack Trace](https://awesomecua.com/resources/arxiv-2310-07128/) — 2023-10-11
  Introduces CrashTranslator, which predicts GUI exploration steps from stack traces with an LLM and uses RL-guided search to reproduce crashes in Android apps.
- [Reinforced UI Instruction Grounding: Towards a Generic UI Task Automation API](https://awesomecua.com/resources/arxiv-2310-04716/) — 2023-10-07
  Trains a screenshot-based instruction-grounding model to predict target coordinates, using reinforcement learning to improve spatial decoding.
- [A data-driven approach for learning to control computers](https://awesomecua.com/resources/arxiv-2202-08137/) — 2022-02-16
  Combines reinforcement learning with behavioral priors from human interactions to learn computer control through keyboard and mouse actions.
- [AppBuddy: Learning to Accomplish Tasks in Mobile Apps via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2106-00133/) — 2021-05-31
  Introduces AppBuddy, an RL training platform and task suite for mobile apps where agents use on-screen element states and tap or type to complete multi-step tasks.
- [AndroidEnv: A Reinforcement Learning Platform for Android](https://awesomecua.com/resources/arxiv-2105-13231/) — 2021-05-27
  Presents an Android environment for training and evaluating reinforcement-learning agents through touchscreen interaction.
- [DOM-Q-NET: Grounded RL on Structured Language](https://awesomecua.com/resources/arxiv-1902-07257/) — 2019-02-19
  Introduces DOM-Q-NET, an RL architecture for web navigation that represents HTML as a tree and uses separate Q-function networks for clicking elements and typing text.
- [Learning to Navigate the Web](https://awesomecua.com/resources/arxiv-1812-09195/) — 2018-12-21
  Introduces guided RL for QWeb, using a curriculum of smaller instructions and generated tasks to train an agent that follows instructions and fills forms on web pages.
- [Reinforcement Learning on Web Interfaces Using Workflow-Guided Exploration](https://awesomecua.com/resources/arxiv-1802-08802/) — 2018-02-24
  Uses workflows extracted from demonstrations to constrain reinforcement-learning exploration for interactive web tasks.
- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://awesomecua.com/resources/url-52a3261eb6a19b402e88/) — 2017-07-17
  Introduces World of Bits, a web-task platform combining human demonstrations, keyboard and mouse actions, and cached HTTP traffic for repeatable task environments. It evaluates agents trained through behavioral cloning and reinforcement learning.

## 评测基准

- [cua-bench (ERPNext)](https://awesomecua.com/resources/github-vaiyr-cua-bench/) — Date not recorded
  cua-bench packages containerized ERPNext v15 accounting and enterprise workflows as Harbor RL and evaluation environments for GUI agents.
- [CUA-Gym-Hub](https://awesomecua.com/resources/github-xlang-ai-cua-gym-hub/) — Date not recorded
  CUA-Gym-Hub provides 98 self-contained mock web applications with deterministic state verifiers as RL training and evaluation environments.
- [cua_reliability (SA-OPSD)](https://awesomecua.com/resources/github-mercurialsolo-sa-opsd/) — Date not recorded
  Provides the cua_reliability evaluation toolkit and reference training code for measuring stopping and abstention reliability in CUA RL.
- [HoloSkill Gym](https://awesomecua.com/resources/github-elenaviewsynthesis-holoskill-gym/) — Date not recorded
  Gym environment and optimization framework for self-evolving CLI and computer-use agent skills.
- [Kernel Eval Protocol](https://awesomecua.com/resources/github-kernel-kernel-eval-protocol-quickstart/) — Date not recorded
  Evaluates and fine-tunes vision-language browser agents using Eval Protocol, Kernel cloud browsers, and verifiable task graders.
- [MiniWoB++](https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/) — Date not recorded
  Over 100 web-interaction environments extending OpenAI's MiniWoB, controlled from Python through a Gymnasium API that drives the browser with Selenium.
- [MobileGym](https://awesomecua.com/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [pptxgym (CUA-Gym.pptx)](https://awesomecua.com/resources/github-lyt060814-cua-gym-pptx/) — Date not recorded
  Synthesizes and grades verifiable computer-use reinforcement-learning tasks from real PowerPoint presentation decks.

## 数据集

- [GroundGUI RL Dataset](https://awesomecua.com/resources/url-4e71dc456c4112eed727/) — Date not recorded
  Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.
- [GUI-R1 data bundle](https://awesomecua.com/resources/url-df680385f18b01a825be/) — Date not recorded
  Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.
- [OpenMobile-Data-v2](https://awesomecua.com/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.
- [UI-AGILE-Data](https://awesomecua.com/resources/url-41abb1b7206689cf5057/) — Date not recorded
  UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.
- [UI-S1 released training examples](https://awesomecua.com/resources/url-16184830c0f4bdb146fa/) — Date not recorded
  A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

## 模型

- [AgentCPM-GUI 8B checkpoint](https://awesomecua.com/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [ARPO UI-TARS-1.5-7B checkpoint](https://awesomecua.com/resources/url-db6fc5f29f186d13991c/) — Date not recorded
  UI-TARS-1.5-7B-derived checkpoint trained with ARPO on OSWorld desktop tasks.
- [BlueLM-GUI](https://awesomecua.com/resources/github-vivo-ai-lab-bluelm-gui/) — Date not recorded
  Mobile GUI agent research release with technical report, benchmark data, and evaluation tooling from vivo AI Lab.
- [ColorGUI-32B](https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/) — Date not recorded
  ColorGUI-32B is a mobile GUI action model adapted from Qwen3-VL-32B-Instruct. It reads screenshots and instructions to select actions for a mobile agent runtime.
- [EvoCUA](https://awesomecua.com/resources/github-meituan-evocua/) — Date not recorded
  Computer-use model and training resources from the EvoCUA project.
- [EvoCUA 32B 20260105](https://awesomecua.com/resources/url-60a95f34072aeb2771cc/) — Date not recorded
  Larger EvoCUA computer-use agent checkpoint (20260105 release) with about 33B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [EvoCUA 8B 20260105](https://awesomecua.com/resources/url-2a2682f86dcb8ebc9a80/) — Date not recorded
  EvoCUA computer-use agent checkpoint (20260105 release) with about 8.8B BF16 parameters in the Qwen3-VL architecture, tagged for OSWorld and for English and Chinese.
- [Gelato](https://awesomecua.com/resources/github-mlfoundations-gelato/) — Date not recorded
  Release code for Gelato-30B-A3B, a GUI click-grounding model trained with GRPO on Click-100k: EasyR1 configs, click rewards, grounding evaluation scripts and logs, and a GPT-5-planned OS-World agent harness.
- [Gelato-30B-A3B](https://awesomecua.com/resources/url-46502d87b2c13515790a/) — Date not recorded
  Qwen3-VL-30B-A3B-Instruct checkpoint trained with GRPO on Click-100k that returns one (x,y) click point, normalized to 0–1000, for a screenshot and an element description.
- [GroundNext-7B-V0](https://awesomecua.com/resources/url-174e10a319d62c338879/) — Date not recorded
  GroundNext GUI-grounding checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct with SFT then RLOO on GroundCUA desktop data; it maps a screenshot and instruction to a computer_use click call.
- [GTA1-7B](https://awesomecua.com/resources/url-fa6761a4612fab664a7c/) — Date not recorded
  Released GUI grounding checkpoint trained with reinforcement learning to predict click coordinates from screenshots and instructions, with inference examples and reported benchmark results.
- [GTA1-7B-2507](https://awesomecua.com/resources/url-691c52679bb1d3521db7/) — Date not recorded
  GTA1-7B-2507 is a GUI-grounding checkpoint trained with reinforcement learning to locate described elements in screenshots and return click coordinates.
- [GUI-G1](https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/) — Date not recorded
  GUI-grounding training code that modifies reasoning templates, reward functions, and the GRPO objective, with a linked model release.
- [GUI-G1 3B v1](https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/) — Date not recorded
  A Qwen2.5-VL-3B checkpoint released for R1-style visual grounding experiments, predicting interface target locations from screenshots and instructions.
- [GUI-G2 3B](https://awesomecua.com/resources/url-d80fa13b647c4020a755/) — Date not recorded
  The 3B GUI-G2 grounding checkpoint: Qwen2.5-VL-3B-Instruct fine-tuned with Gaussian point and coverage rewards to locate interface elements in screenshots from text instructions.
- [GUI-G2 7B](https://awesomecua.com/resources/url-90eea6f6d099a3297850/) — Date not recorded
  A Qwen2.5-VL grounding checkpoint trained with Gaussian point and coverage rewards whose granularity adapts to interface-element scale.
- [GUI-Libra](https://awesomecua.com/resources/github-gui-libra-gui-libra/) — Date not recorded
  GUI-Libra provides training and evaluation pipelines for native GUI agents using action-aware supervision and partially verifiable RL.
- [GUI-Libra 3B](https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct (about 4.07B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 4B](https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen3-VL-4B-Instruct (about 4.83B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 7B](https://awesomecua.com/resources/url-f52794224f9541fd9eb3/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct (about 8.29B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Libra 8B](https://awesomecua.com/resources/url-6694391b0cf50389d2e9/) — Date not recorded
  GUI-Libra checkpoint fine-tuned from Qwen3-VL-8B-Instruct (about 8.77B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.
- [GUI-Owl 7B Desktop-RL](https://awesomecua.com/resources/url-b01a78c76299196e3df1/) — Date not recorded
  GUI-Owl 7B variant from Mobile-Agent-v3 that is RL-tuned for desktop use on OSWorld, released as a research checkpoint for validating environment-RL improvements rather than for production.
- [GUI-R1](https://awesomecua.com/resources/github-ritzz-ai-gui-r1/) — Date not recorded
  GUI action-model training and evaluation code with verifiable rewards, plus linked reinforcement-learning data and checkpoints.
- [GUI-R1 checkpoint bundle](https://awesomecua.com/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [Holo1.5 72B](https://awesomecua.com/resources/url-a8e086f155c278e45c55/) — Date not recorded
  The 72B member of H Company's Holo1.5 series, fine-tuned from Qwen2.5-VL-72B-Instruct for UI element localization and screen question answering on web, desktop and mobile interfaces.
- [Holo2 235B-A22B](https://awesomecua.com/resources/url-dad3d02b2f9603713287/) — Date not recorded
  Research-preview Holo2 checkpoint, a 235B-total, 22B-active mixture-of-experts fine-tune of Qwen3-VL-235B-A22B-Thinking for UI localization and navigation on web, desktop and mobile screens.
- [Holo2 30B-A3B](https://awesomecua.com/resources/url-ed8d5883c240b78e329f/) — Date not recorded
  Mixture-of-experts Holo2 checkpoint fine-tuned from Qwen3-VL-30B-A3B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile screens.
- [Holo2 8B](https://awesomecua.com/resources/url-38942453b2b7018c0d01/) — Date not recorded
  Holo2 checkpoint fine-tuned from Qwen3-VL-8B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile interfaces.
- [Holo3](https://awesomecua.com/resources/url-a03c649e4b14e293e2dd/) — Date not recorded
  Holo3 is a computer-use model family trained on synthetic navigation and enterprise workflows. Its publisher reports desktop benchmark results and offers inference access and an open checkpoint.
- [inclusionAI/UI-Venus-Navi-7B](https://awesomecua.com/resources/url-6d36e088ada02184c6bc/) — Date not recorded
  A released UI agent checkpoint based on Qwen2.5-VL that takes screenshots and prior actions to predict GUI navigation actions and element locations.
- [InfiGUI-G1 7B](https://awesomecua.com/resources/url-d70a755e3b2102f25f34/) — Date not recorded
  A GUI-grounding checkpoint trained with adaptive exploration rewards and multiple candidate answers to improve instruction-to-element alignment.
- [InfiGUI-G1-3B](https://awesomecua.com/resources/url-3888a4042043fb547705/) — Date not recorded
  A GUI grounding checkpoint based on Qwen2.5-VL-3B-Instruct. It uses adaptive exploration training to locate interface elements from an instruction and screen image.
- [InfiGUI-R1](https://awesomecua.com/resources/github-reallm-labs-infigui-r1/) — Date not recorded
  3B GUI agent trained in two stages: distilling spatial reasoning from teacher models, then reinforcement learning that rewards accurate sub-goals and trains error recovery.
- [InfiGUI-R1 3B](https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [KDEGroup/UI-AGILE-3B](https://awesomecua.com/resources/url-642671eabef44827b7de/) — Date not recorded
  A released UI-AGILE checkpoint for GUI grounding, associated with reward design and cropping based resampling during training and image decomposition during inference.
- [KV-Ground 8B (BaseGuiOwl1.5 0315)](https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/) — Date not recorded
  GUI-grounding checkpoint post-trained from GUI-Owl-1.5-8B-Instruct with SFT and GRPO on cleaned and synthesized high-resolution data, aimed at locating elements in large screenshots.
- [KV-Ground-4B-BaseGuiOwl1.5-0228](https://awesomecua.com/resources/url-709d8b51bbc8d257318f/) — Date not recorded
  A 4B vision-language checkpoint for locating GUI targets in high-resolution images. It is fine-tuned from GUI-Owl-1.5-4B-Instruct with supervised and reward-based post-training.
- [KV-Ground-4B-BaseQw3vl](https://awesomecua.com/resources/url-969eb56a53187cda74c7/) — Date not recorded
  A 4B GUI grounding model for high-resolution screenshots and text instructions, fine-tuned from Qwen3-VL-4B-Instruct with supervised and reward-based training.
- [MM-Eureka](https://awesomecua.com/resources/github-modalminds-mm-eureka/) — Date not recorded
  MM-Eureka provides rule-based multimodal reinforcement learning code, models, and datasets based on OpenRLHF and InternVL.
- [MobileRL 9B checkpoint](https://awesomecua.com/resources/url-d5667c854845c77b9f5b/) — Date not recorded
  A GLM-4.1V-based mobile action checkpoint released by the MobileRL project for Android interaction.
- [PAE LLaVA 7B](https://awesomecua.com/resources/url-5d61c1b5fc8dd650518d/) — Date not recorded
  A released LLaVA checkpoint for visual browser interaction from the PAE autonomous task-proposal and policy-learning system.
- [Salesforce/GTA1-32B](https://awesomecua.com/resources/url-5288515eb50aef1e84a2/) — Date not recorded
  A 32B GUI grounding checkpoint trained with GRPO to produce screen actions from tasks and screenshots, with reported results on grounding and desktop agent benchmarks.
- [ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld](https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/) — Date not recorded
  GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard](https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/) — Date not recorded
  GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL from a released SFT start point for ScienceBoard scientific-software tasks.
- [ScaleCUA (THUDM) Qwen3-VL-8B OSWorld](https://awesomecua.com/resources/url-1807bdb33fc352a97240/) — Date not recorded
  Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after a released SFT start point.
- [ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard](https://awesomecua.com/resources/url-73c169c32b5765688376/) — Date not recorded
  Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) Qwen3.5-9B OSWorld](https://awesomecua.com/resources/url-0919e695670c5740a123/) — Date not recorded
  Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard](https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/) — Date not recorded
  Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [UI-AGILE](https://awesomecua.com/resources/github-kdegroup-ui-agile/) — Date not recorded
  GUI agent trained by RL with a continuous reward, a simple-thinking reward and cropping-based resampling on about 9k samples, plus a plug-in decomposed grounding-and-selection inference method.
- [UI-AGILE checkpoint](https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/) — Date not recorded
  The released UI-AGILE model for GUI grounding with reward shaping, crop-based resampling and decomposed selection during inference.
- [UI-Ins-32B](https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/) — Date not recorded
  A GUI grounding checkpoint that locates interface elements from instructions. Its training combines varied instruction formulations with reinforcement learning.
- [UI-Ins-7B](https://awesomecua.com/resources/url-62cf0bee7a14cfbc84a0/) — Date not recorded
  UI-Ins-7B is a GUI-grounding checkpoint trained on varied instruction formulations and reinforcement learning to locate interface elements for agent actions.
- [UI-R1](https://awesomecua.com/resources/github-lll6gg-ui-r1/) — Date not recorded
  Rule-based reinforcement learning for GUI action prediction, releasing UI-R1-3B, trained from Qwen2.5-VL-3B, the efficiency-oriented UI-R1-E-3B, and training data.
- [UI-R1 3B](https://awesomecua.com/resources/url-f13474d7aa734a30624d/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.
- [UI-S1 7B](https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.
- [UI-Venus-Navi-72B](https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/) — Date not recorded
  A Qwen2.5-VL-based UI checkpoint for predicting navigation actions and locating interface elements from screenshots, trained with reinforcement fine-tuning.
- [WebRL Llama 3.1 8B](https://awesomecua.com/resources/url-a6ee20fea67438d91e06/) — Date not recorded
  A WebRL browser-policy checkpoint for performing actions in the five website environments of WebArena.
- [WebRL outcome reward model 8B](https://awesomecua.com/resources/url-d1e85aeb6d96859c109d/) — Date not recorded
  The outcome-supervision checkpoint used by WebRL to score browser trajectories during policy training.
- [WebRL-GLM-4-9B](https://awesomecua.com/resources/url-f979ca583090405aadee/) — Date not recorded
  A GLM-based WebRL model released for browser tasks across five WebArena websites. Its card reports evaluation results on WebArena-Lite.
- [webrl-llama-3.1-70b](https://awesomecua.com/resources/url-5371bf588e7790a66ff0/) — Date not recorded
  A released Llama-3.1-70B WebRL model for operating five WebArena websites. Its model card reports WebArena-Lite results and points to inference requirements.
- [ZeroGUI-AndroidLab-7B](https://awesomecua.com/resources/url-f75cab7180d8f5264606/) — Date not recorded
  ZeroGUI-AndroidLab-7B is a GUI-agent checkpoint associated with training that generates interface tasks, estimates rewards from screenshots, and adapts through online reinforcement learning.
- [ZeroGUI-OSWorld-7B](https://awesomecua.com/resources/url-6ea345c7ba56049476e8/) — Date not recorded
  A GUI agent checkpoint associated with ZeroGUI, which trains on generated interface tasks using rewards estimated from trajectory screenshots.

## 工程与产业

- [Agent Q](https://awesomecua.com/resources/github-sentient-engineering-agent-q/) — Date not recorded
  Agent Q combines Monte Carlo Tree Search, AI self-critique, and Direct Preference Optimization for autonomous web navigation.
- [AgentGym](https://awesomecua.com/resources/github-woooodyy-agentgym/) — Date not recorded
  AgentGym provides interactive environments for developing and evaluating agents, including web tasks in WebShop and WebArena, with trajectory collection and training support.
- [AndroidEnv](https://awesomecua.com/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [ARPO training framework](https://awesomecua.com/resources/github-jia-lab-research-arpo/) — Date not recorded
  Replay-based policy-optimization framework for GUI agents, with distributed OSWorld rollouts and screenshot/action histories.
- [AutoCoA](https://awesomecua.com/resources/github-adam-bjtu-autocoa/) — Date not recorded
  AutoCoA internalizes Chain-of-Action generation into reasoning models via step-level SFT, reinforcement learning, and simulated tool world models.
- [Autonomous Evaluation and Refinement of Digital Agents](https://awesomecua.com/resources/github-berkeley-nlp-agent-eval-refine/) — Date not recorded
  Provides VLM evaluator and policy-refinement code for autonomous evaluation and filtered behavioral cloning on WebArena and AndroidInTheWild.
- [AWorld-RL](https://awesomecua.com/resources/github-inclusionai-agenticlearning/) — Date not recorded
  AWorld-RL collects training projects for agents, including V2P for visual GUI grounding, with codebases, datasets, and checkpoints.
- [CGL (Continual GUI Learning)](https://awesomecua.com/resources/github-skounputer-cgl/) — Date not recorded
  CGL advances continual GUI agent learning across evolving domains via reinforcement fine-tuning without catastrophic forgetting.
- [ClawGUI](https://awesomecua.com/resources/github-zju-real-clawgui/) — Date not recorded
  Framework for GUI agent training, evaluation, and deployment.
- [Coasty](https://awesomecua.com/resources/url-05dde0b8766744e94e07/) — Date not recorded
  Coasty develops computer-use environments for agent training and evaluation, using computer and phone interfaces alongside trajectories and outcome checks.
- [CODA](https://awesomecua.com/resources/github-openixclab-coda/) — Date not recorded
  CODA coordinates a trainable planner ('Cerebrum') with a grounded GUI executor ('Cerebellum') via decoupled reinforcement learning on ScienceBoard.
- [CollabUIAgents](https://awesomecua.com/resources/github-thunlp-mt-collabuiagents/) — Date not recorded
  CollabUIAgents trains UI agents with synthesized interaction data and process rewards assigned by collaborating agents. The repository releases data collection and inference code.
- [Compress2Focus (CCPO)](https://awesomecua.com/resources/github-hithink-research-ccpo/) — Date not recorded
  Compress2Focus (CCPO) implements coordinate compression for multi-turn policy optimization in vision-language GUI agents.
- [Computer Use with SLM (GRPO + OpenEnv)](https://awesomecua.com/resources/github-shayanamir0-computer-use-with-slm/) — Date not recorded
  Fine-tunes small language models for computer-use navigation and GUI interaction using Group Relative Policy Optimization (GRPO) and OpenEnv.
- [ComputerRL](https://awesomecua.com/resources/github-thudm-computerrl/) — Date not recorded
  Reinforcement-learning infrastructure for computer-use agents.
- [CUA Evaluation & RL with Autonomous Feedback](https://awesomecua.com/resources/github-martasumyk-cua-eval-and-finetuning/) — Date not recorded
  Implements reinforcement learning with autonomous evaluator feedback for fine-tuning and benchmarking computer-use agents.
- [CUA-Gym](https://awesomecua.com/resources/github-xlang-ai-cua-gym/) — Date not recorded
  CUA-Gym is a scalable pipeline for synthesizing interactive mock web environments and verifiable RLVR training tasks for computer-use agents.
- [CUArena](https://awesomecua.com/resources/github-ogutdgn-cuarena/) — Date not recorded
  CUArena wraps desktop and web applications into resettable, observable, and programmatically gradable reinforcement-learning environments.
- [cuforge](https://awesomecua.com/resources/github-huzjie-cuforge/) — Date not recorded
  cuforge is an online reinforcement-learning and verifiable task-synthesis platform for training computer-use GUI agents.
- [DART-GUI](https://awesomecua.com/resources/github-computer-use-agents-dart-gui/) — Date not recorded
  DART-GUI implements decoupled multi-turn reinforcement learning and adaptive trajectory curation for training computer-use GUI agents.
- [DeskForge](https://awesomecua.com/resources/github-saidgurbuz-deskforge/) — Date not recorded
  DeskForge extracts dense step-level supervision signals from desktop execution environments to train and verify computer-use agents.
- [Digi-Q](https://awesomecua.com/resources/github-digirl-agent-digiq/) — Date not recorded
  Offline device-control training code that learns action values and uses them to select promising actions, with linked trajectories and checkpoints.
- [DigiRL](https://awesomecua.com/resources/github-digirl-agent-digirl/) — Date not recorded
  Reinforcement learning for autonomous mobile device control.
- [DistRL](https://awesomecua.com/resources/github-distrl-lab-distrl-open/) — Date not recorded
  Distributed online reinforcement-learning framework for Android agents, with environment setup and trajectory collection tools.
- [ENVISIONS](https://awesomecua.com/resources/github-xufangzhi-envisions/) — Date not recorded
  ENVISIONS is an environment-guided neural-symbolic self-training framework for language agents across symbolic reasoning and WebShop tasks.
- [ENVS (Environment-Native Verified Search)](https://awesomecua.com/resources/github-artysicistz-envs/) — Date not recorded
  ENVS is a post-training and verified tree-search pipeline for long-horizon GUI agents operating in live desktop and web environments.
- [ETO (Exploration-Based Trajectory Optimization)](https://awesomecua.com/resources/github-yifan-song793-eto/) — Date not recorded
  ETO trains LLM agents on WebShop, ScienceWorld, and ALFWorld by contrasting failed exploration trajectories against expert demonstrations.
- [Grounded Language Agent for Product Search](https://awesomecua.com/resources/github-multifacetednlp-web-agents-unsupervised/) — Date not recorded
  Provides training and evaluation code for unsupervised web product-search agents on WebShop using symbolic actions and value-guided search.
- [GroundGUI training and evaluation code](https://awesomecua.com/resources/github-prentisai-groundgui/) — Date not recorded
  Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.
- [GUI Exploration Lab](https://awesomecua.com/resources/github-summoneryhl-gelab-engine/) — Date not recorded
  A synthetic GUI environment with configurable screens, icons and navigation graphs for training and evaluating agents on screen navigation.
- [GUI-RC / GUI-RCPO](https://awesomecua.com/resources/github-zju-real-gui-rcpo/) — Date not recorded
  GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.
- [GUI-Rise](https://awesomecua.com/resources/github-leon022-gui-rise-code/) — Date not recorded
  A GUI navigation agent that combines stepwise reasoning with history summarization; its repository provides supervised training, reinforcement learning, and evaluation instructions.
- [GUI-SD](https://awesomecua.com/resources/github-zhangyan-ucas-gui-sd-code/) — Date not recorded
  GUI-SD implements on-policy self-distillation for GUI visual grounding and action prediction using Qwen-VL backbones.
- [GUI-Shift](https://awesomecua.com/resources/github-ubiquitouslearning-gui-shift/) — Date not recorded
  GUI-Shift is a training framework that uses pairs of GUI screenshots to teach vision-language models to predict the action behind an interface transition.
- [HiconAgent](https://awesomecua.com/resources/github-ilearn-lab-cvpr26-hiconagent/) — Date not recorded
  HiconAgent provides GUI-policy training code that samples histories of varied lengths and compresses past interactions during policy optimization.
- [HUD](https://awesomecua.com/resources/github-hud-evals-hud-python/) — Date not recorded
  SDK for RL environments and evals spanning coding, browser, computer-use and robotics agents, whose environments expose SSH, MCP, CDP or VNC capabilities behind a minimal start-and-grade protocol.
- [Huzzle Labs](https://awesomecua.com/resources/url-913a72e8929afd96ad07/) — Date not recorded
  Company developing computer-use models, RL environments and evaluations for AI labs and enterprise work. Its site describes the Huzzle World model family.
- [K²-Agent](https://awesomecua.com/resources/github-k2-agent-k2-agent/) — Date not recorded
  A hierarchical mobile-device agent that combines a demonstration-informed planner with a learned action executor; the release includes AndroidWorld evaluation trajectories.
- [Lightcone SDK](https://awesomecua.com/resources/github-tzafon-lightcone/) — Date not recorded
  Lightcone is Tzafon's Python and TypeScript SDK for building computer-use agents powered by Northstar GUI vision-language models.
- [LLM-in-Sandbox](https://awesomecua.com/resources/github-llm-in-sandbox-llm-in-sandbox/) — Date not recorded
  LLM-in-Sandbox equips language models with virtualized Linux computer sandboxes and RL training pipelines for multi-turn task execution.
- [Minecraft-RL](https://awesomecua.com/resources/github-otsolappalainen-minecraft-rl/) — Date not recorded
  Trains Proximal Policy Optimization (PPO) agents over visual frame buffers and action sockets in parallel Minecraft environments.
- [MobileForge](https://awesomecua.com/resources/github-kwai-mobileforge/) — Date not recorded
  Android GUI-agent adaptation framework combining app exploration, generated curricula and rollout feedback with hint-conditioned step-level GRPO; the documented public training path targets Qwen3-VL-8B.
- [MobileRL](https://awesomecua.com/resources/github-thudm-mobilerl/) — Date not recorded
  Online agentic RL framework for mobile GUI agents built around the difficulty-adaptive ADAGRPO algorithm, with Dockerized AndroidWorld and AndroidLab evaluation and a MobileRL-9B checkpoint.
- [MPO (Meta Plan Optimization)](https://awesomecua.com/resources/github-weiminxiong-mpo/) — Date not recorded
  MPO optimizes reusable high-level meta-plans via preference learning to guide LLM agents on interactive web and decision-making tasks.
- [Octopus](https://awesomecua.com/resources/github-dongyh20-octopus/) — Date not recorded
  Octopus is a vision-language programmer agent trained with environmental feedback to generate executable control code in GTA and Gibson worlds.
- [OpAgent](https://awesomecua.com/resources/github-codefuse-ai-oagent/) — Date not recorded
  OpAgent is a web-navigation agent that observes screenshots, plans and grounds actions, and executes browser operations. Its repository also includes single-model and training modes.
- [OpAgent](https://awesomecua.com/resources/github-codefuse-ai-opagent/) — Date not recorded
  A web navigation agent with single-model and modular modes. Its modular loop observes screenshots, plans actions, grounds page targets, and executes browser operations through Playwright.
- [OpenWebVoyager](https://awesomecua.com/resources/github-minorjerry-openwebvoyager/) — Date not recorded
  OpenWebVoyager trains multimodal web navigation agents through iterative real-world web exploration, feedback verification, and trajectory tuning.
- [OSRS PvP Reinforcement Learning](https://awesomecua.com/resources/github-naton1-osrs-pvp-reinforcement-learning/) — Date not recorded
  Trains PPO self-play reinforcement learning agents for real-time Old School RuneScape PvP combat across high-dimensional action spaces.
- [Pix2Act](https://awesomecua.com/resources/github-google-deepmind-pix2act/) — Date not recorded
  Pix2Act provides JAX/T5X training and evaluation code for pixel-only GUI agents on MiniWoB++ using behavioral cloning and tree search.
- [Proposer-Agent-Evaluator (PAE)](https://awesomecua.com/resources/github-amazon-science-pae/) — Date not recorded
  A browser-agent training system that proposes tasks, collects visual interaction trajectories, and uses automated evaluation to drive policy improvement.
- [RLVR-World](https://awesomecua.com/resources/github-thuml-rlvr-world/) — Date not recorded
  RLVR-World trains world models with verifiable reinforcement learning to predict state transitions for web and game agents.
- [SCALE-CUA (THUDM)](https://awesomecua.com/resources/github-thudm-scale-cua/) — Date not recorded
  Computer-use training framework with VeriGen task synthesis, adaptive rollout sampling, and visual-context segmentation.
- [screen2gym](https://awesomecua.com/resources/github-marc-saouda-screen2gym/) — Date not recorded
  screen2gym compiles raw action-labeled screen recordings into resettable, programmatically gradable RL environments for computer-use agents.
- [SE-GUI](https://awesomecua.com/resources/github-yxb-nku-se-gui/) — Date not recorded
  SE-GUI provides training and evaluation code for a GUI-grounding model refined with location-based rewards and attention feedback; its README links separate weights and seed data.
- [SEAgent](https://awesomecua.com/resources/github-sunzey-seagent/) — Date not recorded
  SEAgent enables computer-use agents to self-evolve in unfamiliar software environments using a World State Model and curriculum task generator.
- [Shinken](https://awesomecua.com/resources/github-meirtz-shinken/) — Date not recorded
  Shinken is a high-throughput runtime for training computer-use agents end-to-end with reinforcement learning across parallel real desktops.
- [SOLO](https://awesomecua.com/resources/github-wzq975-solo/) — Date not recorded
  SOLO performs single-rollout test-time adaptation for GUI agents using online self-supervised feedback during deployment.
- [ToolCUA](https://awesomecua.com/resources/github-x-plug-toolcua/) — Date not recorded
  ToolCUA trains computer-use agents to orchestrate hybrid MCP tool invocations and GUI actions on OSWorld-MCP.
- [UI-Voyager](https://awesomecua.com/resources/github-ui-voyager-ui-voyager/) — Date not recorded
  UI-Voyager is a self-evolving mobile GUI agent framework that learns from failed execution trajectories via group-relative reflection.
- [Universe legacy GUI interaction client](https://awesomecua.com/resources/github-openai-universe/) — Date not recorded
  An archived Gym-compatible client that exposes screen observations and keyboard/mouse actions over VNC for remote application and browser environments, including the historical World of Bits integration.
- [VEM GUI-Agent-RL](https://awesomecua.com/resources/github-microsoft-gui-agent-rl/) — Date not recorded
  Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.
- [VLM-R1](https://awesomecua.com/resources/github-om-ai-lab-vlm-r1/) — Date not recorded
  VLM-R1 provides reinforcement learning code for vision-language models, including a GUI training example and a reported defect detection model for interface screens.
- [Voice2Task Post-Training](https://awesomecua.com/resources/github-raidriar7170-voice2task-posttraining/) — Date not recorded
  Post-training and evaluation pipeline for mapping spoken Chinese ASR commands into schema-valid browser agent action plans.
- [VSC-RL code](https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/) — Date not recorded
  VSC-RL training code for Android in the Wild tasks: Gemini-generated subgoals condition an Auto-UI policy trained online in emulators with learned critics and a Gemini end-state evaluator, built on DigiRL.
- [WebAgent-R1](https://awesomecua.com/resources/github-weizhepei-webagent-r1/) — Date not recorded
  Environment setup, multi-turn reinforcement-learning and evaluation tooling for browser agents interacting with WebArena.
- [WebRL](https://awesomecua.com/resources/github-thudm-webrl/) — Date not recorded
  Training pipeline that evolves web tasks from prior attempts and uses an outcome reward model to refine browser policies.
- [WebThinker](https://awesomecua.com/resources/github-ruc-nlpir-webthinker/) — Date not recorded
  WebThinker empowers large reasoning models to autonomously search, browse webpages, and draft research reports during deep thinking.
- [WinDOM code](https://awesomecua.com/resources/github-chenghengli-windom/) — Date not recorded
  GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.
- [Workflow-Guided Exploration research code](https://awesomecua.com/resources/github-stanfordnlp-wge/) — Date not recorded
  Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.
- [WorkForceAgent-R1](https://awesomecua.com/resources/github-night-chen-workforceagent-r1/) — Date not recorded
  Web-task reward functions, WorkArena data processing and GRPO training configurations for reasoning-oriented language agents.
- [ZeroGUI](https://awesomecua.com/resources/github-opengvlab-zerogui/) — Date not recorded
  Online RL framework for GUI agents in which VLMs generate the training tasks and judge success from trajectory screenshots, with OSWorld and AndroidLab checkpoints trained from UI-TARS-7B-DPO.

## 学习资源

- [Awesome Reinforcement Learning for GUI Agents](https://awesomecua.com/resources/github-steve2457-awesome-rl-gui-agents/) — Date not recorded
  A curated reading list of reinforcement learning work on GUI agents, organized by learning methods, reward and efficiency questions, datasets, and training environments.
