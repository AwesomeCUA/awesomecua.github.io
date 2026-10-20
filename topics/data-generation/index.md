# Data generation

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/data-generation/records.jsonl

## Papers & surveys

- [Player-1: Learning to Play from Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2610-20584/) — 2026-10-14
  Extends computer-use policies to game control through synthetic training environments and richer keyboard and pointer actions. Its evaluation concerns games rather than ordinary productivity workflows.
- [Teaching Agents in their Own Style: Blackbox Teacher Distillation for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-19834/) — 2026-10-14
  Introduces WebKD, which repairs failed student web-agent trajectories with minimal teacher edits and trains on corrections that preserve the student's reasoning style.
- [GroundGUI: GUI Grounding by High-Quality Data and Distillation-to-Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2610-19100/) — 2026-10-13
  Introduces ScreenRef screenshot grounding data and a training sequence from supervised learning through teacher-guided distillation to reinforcement learning for GroundGUI-8B.
- [Interaction-as-a-Judge](https://awesomecua.github.io/resources/arxiv-2610-17895/) — 2026-10-13
  Uses computer-use agents to interact with generated applications, studying whether interaction improves preference judging, requirement checks, and feedback for application generation.
- [HyWe: Unifying Search and Operation for Real-World Hybrid Web Tasks](https://awesomecua.github.io/resources/arxiv-2610-16319/) — 2026-10-12
  Introduces HyWe, which switches between information search and browser operation within one trajectory, alongside a demonstration pipeline and a benchmark of hybrid web tasks.
- [OpenMobile-2: Building Versatile Mobile Agents with Scalable Environments and App-Native Tools](https://awesomecua.github.io/resources/arxiv-2610-14157/) — 2026-10-09
  Introduces OpenMobile-2, combining simulated mobile apps, emulator tasks, released training data, and policies that can alternate GUI interaction with app-native tools.
- [ConClick: Element-Wise Contrastive Learning Improves GUI Grounding](https://awesomecua.github.io/resources/arxiv-2610-13268/) — 2026-10-09
  Analyzes recurring distractor clicks in GUI grounding and introduces ConClick, a contrastive training method built from target–distractor pairs. Its ReClick inference procedure revisits candidate regions and compares competing predictions.
- [Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction](https://awesomecua.github.io/resources/arxiv-2610-12984/) — 2026-10-09
  Aligns human screen recordings, input events, and accessibility information to derive reusable workflow skills from desktop demonstrations.
- [SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments](https://awesomecua.github.io/resources/arxiv-2610-12611/) — 2026-10-08
  Introduces SoftwareGym, a pipeline that synthesizes runnable GUI applications and iteratively repairs them using execution checks. It also provides a task benchmark and studies whether training on synthesized application trajectories transfers to other computer-use environments.
- [Imagine to Act: High-Fidelity Data Synthesis via Image Editing World Model for Scalable GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2610-05861/) — 2026-10-05
  Introduces Infinite-Dreamer, which learns action-conditioned screenshot editing from structured descriptions of GUI changes and uses it to synthesize robustness examples and multi-step trajectories. The synthetic data trains a mobile GUI agent evaluated on AndroidWorld, MobileWorld, and AndroidControl-Curated.
- [DeskForge: Dense Supervision from Desktop Environments for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-02320/) — 2026-10-01
  Generates dense desktop supervision by varying real application scenes and combining screenshots, accessibility trees, and window geometry.
- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://awesomecua.github.io/resources/arxiv-2610-01215/) — 2026-10-01
  Introduces AutoGUIWorld, which combines task planning and image editing to synthesize action-grounded GUI trajectories without running the depicted software. It filters generated transitions and tests whether training on them improves agents operating real desktop and scientific applications.
- [Learning Reliable GUI Agents under Imperfect Priors](https://awesomecua.github.io/resources/arxiv-2609-39547/) — 2026-09-30
  Combines structured GUI exploration with training designed to tolerate imperfect retrieved experience. It builds state-transition graphs and synthetic task trajectories, then injects realistic forms of interface drift so agents learn when to rely on or reject prior guidance.
- [HybridCUA: Learning to Orchestrate GUI and CLI for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-38008/) — 2026-09-29
  Trains computer agents on verified GUI, command-line, and interleaved trajectories to learn when and how to combine interaction modes.
- [From Trajectories to Grounded Preferences: Process Preference Synthesis via Interaction Element Graphs for Web PRMs](https://awesomecua.github.io/resources/arxiv-2609-32351/) — 2026-09-26
  Introduces SURFPRM, which turns web demonstrations into an interaction-element graph for synthesizing grounded negative actions. Its contrastive preference data trains process reward models to distinguish plausible on-page alternatives and guide downstream trajectory search.
- [CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs](https://awesomecua.github.io/resources/arxiv-2609-31957/) — 2026-09-25
  Introduces CaptchaArena, a dataset of execution-verified interactive CAPTCHA solutions with screenshot–action trajectories, reasoning annotations, and pixel masks for irregular targets. The work trains a single policy across CAPTCHA types using supervised learning followed by verifier-reward reinforcement learning.
- [Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://awesomecua.github.io/resources/arxiv-2609-35814/) — 2026-09-20
  BreakingWeb pairs solvable browser tasks with controlled environment interventions that preserve the goal, target and backend success criterion. The paired evaluations isolate robustness failures, including agents declaring completion without the required state change.
- [MintAct: A Unified Visual Agent for Digital Environments](https://awesomecua.github.io/resources/arxiv-2609-22083/) — 2026-09-18
  MintAct trains a visual-agent family for grounding, navigation and tool use across mobile, desktop and web environments. Its shared infrastructure supports trajectory collection and asynchronous online RL while controlling cross-domain sampling and off-policy drift.
- [RecreationWorld: Scalable and Verifiable Environments for Hybrid Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22000/) — 2026-09-18
  RecreationWorld gives hybrid agents running reference applications to explore and recreate using native GUI controls and coding tools. Its multi-platform benchmark checks interaction-dependent behavior with programmatic and visual assertions, while trajectory-training transfer is evaluated separately.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.github.io/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-12394/) — 2026-09-11
  Describes a mobile-agent training pipeline centered on real-device rollouts, recovery of useful supervision from failures, and evolving evaluation tasks.
- [CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents](https://awesomecua.github.io/resources/arxiv-2609-05374/) — 2026-09-04
  Turns desktop applications into reproducible GUI-and-CLI environments and generates verified hybrid trajectories for agent post-training.
- [Discriminative World Models for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [When and What to Teach: Budget-Aware Online Adaptation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-05513/) — 2026-08-31
  Proposes an online teaching framework that decides which web-agent episodes warrant a stronger teacher and which trajectory turns merit training. A solvability gate and score-guided trimming aim to preserve first-attempt performance while reducing teaching and training costs.
- [SIR: Self-improving Red-teaming for Compute Use Agents](https://awesomecua.github.io/resources/arxiv-2608-30207/) — 2026-08-31
  Introduces SIR, which iteratively refines a reusable library of prompt-injection strategies from failed computer-use attack trajectories. Its evaluation uses deterministic system-state checks and counts attacks only when the adversarial objective and legitimate task both complete.
- [Iron: Intent-Aligned and Retrospective Dual Learning Framework for Enhancing Generalist Virtual Agents](https://awesomecua.github.io/resources/arxiv-2608-27866/) — 2026-08-28
  Introduces Iron, a GUI-agent training framework that aligns low-level actions with high-level intent using cycle-consistency rewards. It also repurposes failed trajectories through hindsight reconstruction and evaluates transfer to other digital tasks.
- [Beyond Task Completion: Training Capable and Safe Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22178/) — 2026-08-27
  Introduces SCOPE, which trains computer-use agents on ordinary task demonstrations, safe continuations around hazards, and explicit refusals. Its SCOPE-Gen pipeline pairs verifiable tasks with environmental-risk variants to support joint capability and safety training.
- [BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes](https://awesomecua.github.io/resources/arxiv-2608-24848/) — 2026-08-25
  Introduces BrowserForge, which combines broad website sourcing, parallel browser sandboxes, and task-proposer/solver interaction to collect verified web trajectories. The pipeline uses page structure during synthesis but trains a policy that acts from screenshots.
- [GSAR: Goal-State-Anchor Rewards for Mobile GUI Agents with Self-Evolving Data Synthesis](https://awesomecua.github.io/resources/arxiv-2608-22847/) — 2026-08-24
  Introduces GSAR, which synthesizes GUI tasks and successful goal states, then annotates task-relevant interface elements as reward anchors. These anchors support offline trajectory verification and online policy training.
- [Training Needs Trustworthy Worlds: Verified Synthetic Web Environments for Agent Learning](https://awesomecua.github.io/resources/arxiv-2608-21898/) — 2026-08-22
  Builds synthetic websites with verified navigation, backend state, and feasible tasks to provide reliable supervision for web-agent training.
- [UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations](https://awesomecua.github.io/resources/arxiv-2608-15930/) — 2026-08-16
  Combines environment-grounded training with demonstration-conditioned workflows, and introduces OSWorkerBench for extended office-task evaluation.
- [SynWeaver: Website-Prior Task and Trajectory Co-Synthesis for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-12429/) — 2026-08-12
  SynWeaver explores a website to build a map of page states and executable interactions, then learns website priors for task proposals. Joint task/trajectory synthesis revises inconsistent pairs and verifies or repairs the resulting supervision.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](https://awesomecua.github.io/resources/arxiv-2607-28609/) — 2026-07-30
  Introduces OSReward and its harder and multidimensional variants for assessing judgments of computer-use trajectories. It also releases a reasoning-annotated judgment corpus and trains reward models, examining reliability, leniency bias, and evaluation cost.
- [Echoverse: Deep, Evolving Environments for Training Computer-Use Agents at Scale](https://awesomecua.github.io/resources/arxiv-2607-28074/) — 2026-07-30
  Introduces Echoverse, which compiles specifications into stateful applications with database-grounded graders and uses rollouts to improve both the environments and agent policies. It examines behavioral depth, targeted interface practice, and environment repair as sources of training value.
- [Scaling GUI Agents with Visual State Transitions](https://awesomecua.github.io/resources/arxiv-2607-24112/) — 2026-07-27
  Introduces State Transition Pretraining, which jointly learns to infer actions from GUI changes and predict future states from current screens and actions. Subsequent instruction-trajectory fine-tuning tests whether these representations transfer to desktop and mobile agent tasks.
- [SeekJudge: A Practical Reward Framework for Reinforcement Learning in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-23263/) — 2026-07-25
  Introduces SeekJudge, which iteratively searches and analyzes GUI trajectories to assess instruction fulfillment. The work combines dense judgment-data synthesis, a step-label benchmark, and reward-server scheduling to study accurate and practical reward feedback for agent training.
- [SEE: Structure-aware Exploring & Exploiting for Long-horizon GUI Agent Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2607-18046/) — 2026-07-20
  Introduces SEE, which first explores mobile interfaces to build a screen-and-element transition graph, then composes task trajectories through graph planning and controlled sampling. It studies coverage, loop avoidance, and transfer after training agents on the generated sequences.
- [HyMobileAgent: Data-Environment Co-Scaling for Efficient GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-14548/) — 2026-07-16
  Combines GUI perception data, instructional videos, real and simulated devices, and planning with reflection to develop a mobile agent.
- [SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL](https://awesomecua.github.io/resources/arxiv-2607-11185/) — 2026-07-13
  Scales computer-agent reinforcement learning through verifiable task generation, capability-aware rollout allocation, and segmented visual context.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.github.io/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://awesomecua.github.io/resources/arxiv-2606-27330/) — 2026-06-25
  PEEU explores web environments and turns hindsight experience into aligned high-level planning supervision. A hierarchical task-decomposition analysis examines why atomic-skill competence alone does not ensure planning generalization across websites.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [GUI agent: Guided Exploration of User-Sensitive Screens](https://awesomecua.github.io/resources/arxiv-2606-25705/) — 2026-06-24
  This short paper develops an explorer agent that expands from a demonstrated GUI task to discover requests likely to reach user-sensitive screens. The proposed exploration supports identifying situations where task execution should be handed back to the user.
- [VisCritic: Visual State Comparison as Process Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-24525/) — 2026-06-23
  VisCritic compares before/after screenshots through change-aware visual features and an action-conditioned critic. Weakly supervised samples from existing traces train judgments of action success, progress and error type for GUI-agent verification.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [Fara-1.5: Scalable Learning Environments for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-20785/) — 2026-06-18
  Builds browser-agent training trajectories with live and synthetic environments, solvers, user simulation, and complementary correctness and efficiency verifiers.
- [Automating SKILL.md Generation for Computer-Using Agents via Interaction Trajectory Mining](https://awesomecua.github.io/resources/arxiv-2606-20363/) — 2026-06-18
  Segments and clusters GUI trajectories into inspectable skills, then trains a skill-aware policy from those annotations. Its diagnostic results distinguish readable source-domain clusters from reliable transfer and report limited or absent downstream gains.
- [MobileForge: Annotation-Free Adaptation for Mobile GUI Agents with Hierarchical Feedback-Guided Policy Optimization](https://awesomecua.github.io/resources/arxiv-2606-19930/) — 2026-06-18
  MobileForge couples real-app exploration and generated tasks with hierarchical feedback for mobile-agent adaptation. Its optimizer turns trajectory outcomes, step feedback and corrective hints into contextualized GRPO updates, with evaluation on AndroidWorld and a GUI-only MobileWorld split.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.github.io/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [Skill-Guided Continuation Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-18890/) — 2026-06-17
  Skill-Guided Continuation Distillation first lets a policy reach its own off-trajectory states, then uses skill guidance to collect successful continuations. Mixing those continuations with expert traces supplies supervision for recovery states absent from demonstrations.
- [ProCUA-SFT Technical Report](https://awesomecua.github.io/resources/arxiv-2606-17321/) — 2026-06-15
  ProCUA-SFT generates tasks and synthetic trajectories on live desktops seeded with document content, checking task preconditions before rollout. The resulting step-prefix examples are formatted to match inference context and used for supervised GUI-agent fine-tuning.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [Speculative Rollback Correction for Quality-Diverse Web Agent Imitation](https://awesomecua.github.io/resources/arxiv-2606-12485/) — 2026-06-10
  Speculative Rollback Correction lets a student web agent execute short branches before teacher review localizes harmful deviations. Verified continuations and localized corrections feed supervised training while an archive retains diverse successful solutions.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.github.io/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [GUI-SAGE: Enhancing GUI Automation with Self-Explanatory Learning](https://awesomecua.github.io/resources/url-beb8f1fd6b945ffc9d93/) — 2026-06
  GUI-SAGE generates reasoning conditioned on known actions and weights policy updates using confidence and reward signals. Its experiments use AndroidControl and GUIOdyssey data and separately evaluate interactive AndroidWorld tasks.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [GUI-CIDER: Mid-training GUI Agents via Causal Internalization and Density-aware Exemplar Reselection](https://awesomecua.github.io/resources/arxiv-2605-28534/) — 2026-05-27
  GUI-CIDER turns GUI trajectories into textual planning and causal interface knowledge, reselects exemplars for causal structure and low redundancy, then mid-trains GUI agents on that corpus.
- [MIRAGE: Context-Aware Prompt Injection against Mobile GUI Agents via User-Generated Content](https://awesomecua.github.io/resources/arxiv-2605-28116/) — 2026-05-27
  MIRAGE constructs mobile screenshot injections in ordinary user-content regions through localization, contextual payload generation and realism curation. Its evaluation separates visual realism from attack effectiveness against pixel-observing GUI agents.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.github.io/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [CUA-Gym: Scaling Verifiable Training Environments and Tasks for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-25624/) — 2026-05-25
  Presents CUA-Gym, which co-generates instructions, initial and target states, and executable reward checks through generator-discriminator iterations. Mock web applications expand training environments, with learned agents evaluated on OSWorld-Verified and WebArena.
- [ScaleWoB: Guiding GUI Agents with Coding Agents via Large-Scale Environmental Synthesis](https://awesomecua.github.io/resources/arxiv-2605-25160/) — 2026-05-24
  Introduces ScaleWoB, which synthesizes interactive GUI environments as backend-free webpages with verifiable rewards. Its mobile-oriented benchmark evaluates agent execution and compares selected synthetic tasks with real-app behavior.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.github.io/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [OpenComputer: Verifiable Software Worlds for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-19769/) — 2026-05-19
  Introduces OpenComputer, which builds desktop tasks around application-state verifiers and refines those verifiers using execution feedback. An evaluation harness records trajectories and assigns auditable partial credit across professional software workflows.
- [MementoGUI: Learning Agentic Multimodal Memory Control for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18652/) — 2026-05-18
  MementoGUI learns a controller for selecting, compressing and retrieving textual and region-level visual memories while leaving the GUI-agent backbone fixed. It also converts computer-use traces into controller training data and evaluates semantic actions, progress and memory consistency on long-horizon tasks.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.github.io/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [WinDeskGround: A Benchmark for Robust GUI Grounding in Complex Multi-Window Desktop Environments](https://awesomecua.github.io/resources/arxiv-2605-16402/) — 2026-05-13
  WinDeskGround synthesizes multi-window desktop layouts with controlled occlusion, density and semantic similarity to test GUI grounding robustness. Its instruction-target benchmark measures how localization changes when interfaces depart from simple single-layer scenes.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.github.io/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [How Mobile World Model Guides GUI Agents?](https://awesomecua.github.io/resources/arxiv-2605-10347/) — 2026-05-11
  Compares mobile world models that predict state changes as delta text, full text, images or renderable code. Downstream Android benchmarks examine synthetic training trajectories and test-time guidance, including limits of post-action reflection.
- [Weblica: Scalable and Reproducible Training Environments for Visual Web Agents](https://awesomecua.github.io/resources/arxiv-2605-06761/) — 2026-05-07
  Introduces Weblica, which combines HTTP-level capture and replay with website-grounded environment synthesis. The resulting interactive web environments support reinforcement learning and tests of navigation transfer and inference-time scaling.
- [AutoSurfer -- Teaching Web Agents through Comprehensive Surfing, Learning, and Modeling](https://awesomecua.github.io/resources/arxiv-2604-27253/) — 2026-04-29
  AutoSurfer explores website actions breadth-first, retaining page and trajectory knowledge to guide task synthesis and trajectory refinement. It evaluates the resulting training data by fine-tuning a web agent on WebArena and examining synthesized-task diversity.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.github.io/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.github.io/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [WebForge: Breaking the Realism-Reproducibility-Scalability Trilemma in Browser Agent Benchmark](https://awesomecua.github.io/resources/arxiv-2604-10988/) — 2026-04-13
  Presents WebForge, a pipeline that plans, generates, refines and validates self-contained interactive websites. WebForge-Bench uses these environments to evaluate browser agents across domains and controlled difficulty levels.
- [EE-MCP: Self-Evolving MCP-GUI Agents via Automated Environment Generation and Experience Learning](https://awesomecua.github.io/resources/arxiv-2604-09815/) — 2026-04-10
  EE-MCP studies application-dependent mixtures of GUI actions and MCP calls using generated environments, trajectory collection and filtered training. An experience bank extracts rules from trajectory comparisons for inference-time improvement, distinct from model distillation.
- [MolmoWeb: Open Visual Web Agent and Open Data for the Open Web](https://awesomecua.github.io/resources/arxiv-2604-08516/) — 2026-04-09
  Presents MolmoWebMix, combining synthetic browser trajectories, human demonstrations and GUI perception data, and MolmoWeb screenshot-to-action policies trained from it. Browser benchmarks also test parallel rollouts with best-of-N selection.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.github.io/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.github.io/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-12138/) — 2026-03-12
  Introduces HATS, which directs GUI trajectory exploration toward semantically ambiguous actions and iteratively checks instruction-execution alignment. Feedback from trajectory refinement updates the exploration signal used to collect subsequent training examples.
- [Safe and Scalable Web Agent Learning via Recreated Websites](https://awesomecua.github.io/resources/arxiv-2603-10505/) — 2026-03-11
  Introduces VeriEnv, which recreates websites as executable training environments and exposes internal state through a Python SDK for task generation and deterministic reward checks. Experiments examine web-agent learning across new and expanded site environments.
- [OSExpert: Computer-Use Agents Learning Professional Skills via Exploration](https://awesomecua.github.io/resources/arxiv-2603-07978/) — 2026-03-09
  Uses GUI-based depth-first exploration to verify elementary software functions, assemble action primitives, and construct curricula of composed skills. OSExpert-Eval examines how the resulting procedural knowledge supports complex computer-use tasks.
- [WebChain: A Large-Scale Human-Annotated Dataset of Real-World Web Interaction Traces](https://awesomecua.github.io/resources/arxiv-2603-05295/) — 2026-03-05
  WebChain aligns human web-interaction trajectories with visual, structural and action data for agent training. It also introduces WebChainBench and a mid-training approach that separates spatial grounding from planning.
- [WebFactory: Automated Compression of Foundational Language Intelligence into Grounded Web Agents](https://awesomecua.github.io/resources/arxiv-2603-05044/) — 2026-03-05
  Introduces WebFactory, a GUI-agent training pipeline that synthesizes websites, generates tasks and trajectories, and trains with decomposed rewards. Offline and online transfer evaluations examine agents trained on the generated environments.
- [TimeWarp: Evaluating Web Agents by Revisiting the Past](https://awesomecua.github.io/resources/arxiv-2603-04949/) — 2026-03-05
  TimeWarp tests web agents across multiple versions of the same sites, varying visual design, frontend code and workflows. TimeTraj transfers plans across versions to collect training trajectories and study robustness to interface change.
- [Modeling Distinct Human Interaction in Web Agents](https://awesomecua.github.io/resources/arxiv-2602-17588/) — 2026-02-19
  CowCorpus records interleaved human and agent actions during web navigation and identifies distinct patterns of user intervention. Models trained to anticipate these interventions are integrated into live web agents and assessed in a user study.
- [WebWorld: A Large-Scale World Model for Web Agent Training](https://awesomecua.github.io/resources/arxiv-2602-14721/) — 2026-02-16
  Introduces WebWorld, an open-web simulator trained on interaction trajectories for generating agent training data and testing candidate actions. WebWorld-Bench evaluates simulated transitions, alongside downstream web-agent training experiments.
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.github.io/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.github.io/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.github.io/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [Scaling Web Agent Training through Automatic Data Generation and Fine-grained Evaluation](https://awesomecua.github.io/resources/arxiv-2602-12544/) — 2026-02-13
  This work uses constraint-based progress evaluation to retain partially successful web trajectories for training. It introduces BookingArena for structured booking tasks and studies a distilled agent trained with the resulting data.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.github.io/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [Autonomous Continual Learning for Environment Adaptation of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-10356/) — 2026-02-10
  ACuRL uses autonomous interface exploration and an adaptive task curriculum to continually train computer-use policies with reinforcement learning. CUAJudge supplies outcome feedback, and experiments study adaptation across desktop applications and environment changes.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.github.io/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [TreeCUA: Efficiently Scaling GUI Automation with Tree-Structured Verifiable Evolution](https://awesomecua.github.io/resources/arxiv-2602-09662/) — 2026-02-10
  TreeCUA organizes GUI exploration trajectories as reusable trees and balances deeper tasks against broader coverage. Its data pipeline combines action verification, memory-backed recovery and a DPO variant that uses information from adjacent branches.
- [A11y-CUA Dataset: Characterizing the Accessibility Gap in Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2602-09310/) — 2026-02-10
  Introduces A11y-CUA, a dataset comparing how blind or low-vision users and sighted users perform everyday computer tasks. It contrasts those traces with agent behavior under default, keyboard-only, and magnifier conditions to identify barriers to shared control.
- [Next-Gen CAPTCHAs: Leveraging the Cognitive Gap for Scalable and Diverse GUI-Agent Defense](https://awesomecua.github.io/resources/arxiv-2602-09012/) — 2026-02-09
  Next-Gen CAPTCHAs introduces generated interactive challenges intended to distinguish human users from GUI agents. The benchmark targets perception, memory, decisions and actions, with backend-supported challenge types designed for scalable instance generation.
- [ANCHOR: Branch-Point Data Generation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-07153/) — 2026-02-06
  ANCHOR expands verified desktop demonstrations by generating new tasks at meaningful branch points and executing their instructions. State-aware verification and action filtering refine the resulting trajectories, which are evaluated through fine-tuned agents on OSWorld and WindowsAgentArena.
- [M$^2$-Miner: Multi-Agent Enhanced MCTS for Mobile GUI Agent Data Mining](https://awesomecua.github.io/resources/arxiv-2602-05429/) — 2026-02-05
  M2-Miner uses multi-agent-guided Monte Carlo tree search to collect mobile GUI intent–trajectory pairs. Intent recycling and progressive collector training aim to increase the diversity and usefulness of the mined interaction data.
- [Generative Visual Code Mobile World Models](https://awesomecua.github.io/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [ToolTok: Tool Tokenization for Efficient and Generalizable GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-02548/) — 2026-01-30
  ToolTok represents GUI operations with learned tool tokens and frames interaction as progressive tool selection. Semantic anchoring and an easy-to-hard curriculum teach tool meanings before visual pathfinding, with evaluation across grounding scenarios.
- [Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-22781/) — 2026-01-30
  MobileGen estimates a mobile agent’s strengths across structural and semantic task difficulty, then samples new training targets around that profile. A controllable multi-agent generator creates the corresponding instructions and GUI trajectories.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.github.io/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [SwipeGen: Bridging the Execution Gap in GUI Agents via Human-like Swipe Synthesis](https://awesomecua.github.io/resources/arxiv-2601-18305/) — 2026-01-26
  Introduces SwipeGen for synthesizing varied swipe trajectories and SwipeBench for assessing their execution quality. The study examines how richer control of trajectory, speed, and timing changes GUI agents’ interaction performance.
- [GAIA: A Data Flywheel System for Training GUI Test-Time Scaling Critic Models](https://awesomecua.github.io/resources/arxiv-2601-18197/) — 2026-01-26
  GAIA trains a GUI action critic on positive and negative examples, then uses that critic to collect improved examples for another training round. It studies how recycling these data affects the test-time action choices of different GUI agents.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [MagicGUI-RMS: A Multi-Agent Reward Model System for Self-Evolving GUI Agents via Automated Feedback Reflux](https://awesomecua.github.io/resources/arxiv-2601-13060/) — 2026-01-19
  MagicGUI-RMS combines domain-specific and general reward models to assess GUI actions and propose corrections. A structured data pipeline and feedback-recycling process support repeated reward-model and agent improvement.
- [MirrorGuard: Toward Secure Computer-Use Agents via Simulation-to-Real Reasoning Correction](https://awesomecua.github.io/resources/arxiv-2601-12822/) — 2026-01-19
  MirrorGuard trains a reasoning-correction defense using GUI risk trajectories generated in a text-based neural-symbolic simulator. It evaluates whether corrections transfer to computer-use agents operating real interfaces, keeping simulated training separate from deployment tests.
- [ShowUI-Aloha: Human-Taught GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-07181/) — 2026-01-12
  Transforms human screen recordings and input events into annotated demonstrations used by planning and execution components for GUI tasks.
- [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](https://awesomecua.github.io/resources/arxiv-2601-05787/) — 2026-01-09
  BEPA adapts a small set of expert GUI traces into policy-aligned guidance through trajectories reachable by the learner and a dynamically updated task cache. It evaluates this two-level approach to reinforcement learning on desktop and web benchmarks.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.github.io/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [ShowUI-$π$: Flow-based Generative Models as GUI Dexterous Hands](https://awesomecua.github.io/resources/arxiv-2512-24965/) — 2025-12-31
  Models discrete clicks and continuous drags with flow-based action generation, and introduces drag trajectories and the ScreenDrag benchmark.
- [MAI-UI Technical Report: Real-World Centric Foundation GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-22047/) — 2025-12-26
  MAI-UI combines GUI navigation, native user interaction, and MCP tool calls in a family of policies trained through generated data and online reinforcement learning. The report also studies device-cloud routing and scaling of parallel environments and interaction budgets, with grounding and Android navigation evaluation.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.github.io/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [VenusBench-GD: A Comprehensive Multi-Platform GUI Benchmark for Diverse Grounding Tasks](https://awesomecua.github.io/resources/arxiv-2512-16501/) — 2025-12-18
  VenusBench-GD is a bilingual, cross-platform GUI grounding benchmark organized into basic and advanced tasks. Its annotation pipeline and six-subtask taxonomy support comparisons of general multimodal models and GUI-specialized models across different grounding demands.
- [OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models](https://awesomecua.github.io/resources/arxiv-2512-16295/) — 2025-12-18
  OS-Oracle synthesizes GUI critic examples and trains a pre-action critic with supervised learning followed by consistency-preserving GRPO. It introduces OS-Critic Bench across mobile, web, and desktop settings and tests critic-assisted agents in OSWorld and AndroidWorld.
- [Step-GUI Technical Report](https://awesomecua.github.io/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [Using GUI Agent for Electronic Design Automation](https://awesomecua.github.io/resources/arxiv-2512-11611/) — 2025-12-12
  GUI-EDA collects more than 2,000 screenshot-answer-action pairs from engineers working across five CAD tools and five physical domains. The accompanying benchmark evaluates more than 30 GUI agents on specialized electronic-design workflows.
- [GUI Exploration Lab: Enhancing Screen Navigation in Agents via Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2512-02423/) — 2025-12-02
  Introduces GUI Exploration Lab, a simulation engine for composing screens, interface elements, and navigation graphs. It studies how supervised learning, single-turn RL, and multiturn RL affect GUI navigation and exploration.
- [OpenApps: Simulating Environment Variations to Measure UI-Agent Reliability](https://awesomecua.github.io/resources/arxiv-2511-20766/) — 2025-11-25
  Introduces OpenApps, a configurable app ecosystem for measuring UI-agent reliability under changes in appearance and content. Its evaluation compares task success and failure behavior across many versions of the same apps.
- [Fara-7B: An Efficient Agentic Model for Computer Use](https://awesomecua.github.io/resources/arxiv-2511-19663/) — 2025-11-24
  Introduces FaraGen synthetic web trajectories, a compact screenshot-based action model, and WebTailBench for underrepresented browser tasks.
- [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](https://awesomecua.github.io/resources/arxiv-2512-10962/) — 2025-11-22
  Introduces a pipeline that filters individual steps from noisy computer-agent rollouts and augments them with reasoning for training. WebSTAR and WebSCORE support GUI-policy supervision and a distilled process reward model, StepRM.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [AUTO-Explorer: Automated Data Collection for GUI Agent](https://awesomecua.github.io/resources/arxiv-2511-06417/) — 2025-11-09
  Introduces Auto-Explorer, an automated GUI exploration method that records software states for training-data collection. UIXplore evaluates exploration coverage, and collected data is used to fine-tune and test GUI element grounding.
- [SynthAgent: Adapting Web Agents with Synthetic Supervision](https://awesomecua.github.io/resources/arxiv-2511-06101/) — 2025-11-08
  Introduces SynthAgent, which generates tasks by exploring website elements and refines them when observations reveal conflicts. A later trajectory-refinement stage removes misaligned behavior before fine-tuning agents for the target websites.
- [GUI-360$^\circ$: A Comprehensive Dataset and Benchmark for Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2511-04307/) — 2025-11-06
  Collects Windows application trajectories with screenshots and action traces for grounding, screen parsing, and action prediction.
- [Learning from Online Videos at Inference Time for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2511-04137/) — 2025-11-06
  This work retrieves online video tutorials and converts them into structured GUI action demonstrations with short objectives. A two-stage selection process supplies a relevant local trajectory as in-context guidance at each execution step.
- [VideoAgentTrek: Computer Use Pretraining from Unlabeled Videos](https://awesomecua.github.io/resources/arxiv-2510-19488/) — 2025-10-22
  Extracts structured GUI actions from screen-recorded tutorials using inverse dynamics, then uses the inferred trajectories for computer-use training.
- [AndroidControl-Curated: Revealing the True Potential of GUI Agents through Benchmark Purification](https://awesomecua.github.io/resources/arxiv-2510-18488/) — 2025-10-21
  AndroidControl-Curated audits ambiguities and factual errors in AndroidControl and produces a refined evaluation dataset. The paper also studies post-training a small Magma-R1 model on a curated subset to examine the effect of data quality on GUI action assessment.
- [UltraCUA: A Foundation Model for Computer Use Agents with Hybrid Action](https://awesomecua.github.io/resources/arxiv-2510-17790/) — 2025-10-20
  UltraCUA trains a shared policy for primitive GUI actions and high-level tool calls using synthesized tasks and hybrid trajectories. Supervised fine-tuning followed by online reinforcement learning is evaluated on OSWorld and WindowsAgentArena.
- [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.github.io/resources/arxiv-2510-16051/) — 2025-10-16
  GUIrilla systematically explores macOS interfaces to collect interaction traces and accessibility metadata for downstream GUI research. It organizes these observations into hierarchical MacApp Trees and describes an accessibility-driven collection library.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.github.io/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.github.io/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [RISK: A Framework for GUI Agents in E-commerce Risk Management](https://awesomecua.github.io/resources/arxiv-2509-21982/) — 2025-09-26
  RISK combines browser-interaction training data, a benchmark, and reinforcement fine-tuning for e-commerce risk-management workflows. Its trajectories and rewards distinguish individual actions from multi-step stateful tasks involving deeply embedded web content.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.github.io/resources/arxiv-2509-15738/) — 2025-09-19
  GUI-ReWalk begins with stochastic interface exploration and then infers goals to generate coherent action trajectories. It supports long-horizon workflows across applications and studies training on the resulting data using grounding and navigation benchmarks.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data](https://awesomecua.github.io/resources/arxiv-2509-15221/) — 2025-09-18
  Introduces a cross-platform computer-use dataset and agents trained with a collection pipeline combining automated interaction and human input.
- [Learning Active Perception via Self-Evolving Preference Optimization for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-04243/) — 2025-09-04
  LASER builds preference data for multi-step GUI perception by combining Monte Carlo quality estimates with region-overlap evaluation. Its self-evolving training encourages relevant region selection and adapts the amount of reasoning before predicting screen coordinates.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [OmniActor: A Generalist GUI and Embodied Agent for 2D&3D Worlds](https://awesomecua.github.io/resources/arxiv-2509-02322/) — 2025-09-02
  Introduces OmniActor, which shares shallow model layers while separating deeper parameters to train jointly on GUI and embodied interactions. A unified action representation and mixed training data support evaluation in both task families.
- [MobiAgent: A Systematic Framework for Customizable Mobile Agents](https://awesomecua.github.io/resources/arxiv-2509-00531/) — 2025-08-30
  Presents MobiAgent, combining MobiMind agent models, the AgentRR acceleration framework, and MobiFlow evaluation. It also introduces an AI-assisted data-collection pipeline for mobile GUI tasks.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.github.io/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [Mobile-Agent-v3: Fundamental Agents for GUI Automation](https://awesomecua.github.io/resources/arxiv-2508-15144/) — 2025-08-21
  Introduces GUI-Owl models and Mobile-Agent-v3 orchestration, using environment-generated trajectories to support GUI capabilities.
- [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://awesomecua.github.io/resources/arxiv-2508-15832/) — 2025-08-18
  Amazon-Bench generates functionality-specific web tasks from page content and interactive controls, covering operations beyond product search. Its evaluator checks task completion and unintended changes to account state, such as address or purchase settings.
- [OpenCUA: Open Foundations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2508-09123/) — 2025-08-12
  Presents demonstration collection infrastructure, the AgentNet dataset, and a training pipeline for open computer-use models.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.github.io/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.github.io/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](https://awesomecua.github.io/resources/arxiv-2508-02046/) — 2025-08-04
  NaviMaster trains a shared policy for GUI and embodied navigation using a common visual-trajectory formulation. It combines trajectory collection, reinforcement learning and distance-aware rewards, with evaluation across both task families.
- [Web-CogReasoner: Towards Multimodal Knowledge-Induced Cognitive Reasoning for Web Agents](https://awesomecua.github.io/resources/arxiv-2508-01858/) — 2025-08-03
  Web-CogReasoner separates factual and conceptual web knowledge from procedural reasoning, using a structured curriculum to train a multimodal agent. Web-CogDataset and Web-CogBench support study of these capabilities alongside web-navigation evaluation.
- [MagicGUI: A Foundational Mobile GUI Agent with Scalable Data Pipeline and Reinforcement Fine-tuning](https://awesomecua.github.io/resources/arxiv-2508-03700/) — 2025-07-19
  Combines a mobile GUI data pipeline, perception and planning capabilities, and reinforcement fine-tuning for interactive task execution.
- [MobileGUI-RL: Advancing Mobile GUI Agent through Reinforcement Learning in Online Environment](https://awesomecua.github.io/resources/arxiv-2507-05720/) — 2025-07-08
  MobileGUI-RL constructs an online training curriculum through agent exploration and task filtering. It adapts GRPO with trajectory-aware advantages and rewards for task completion and execution efficiency, evaluated on three online mobile-agent benchmarks.
- [ZonUI-3B: A Lightweight Vision-Language Model for Cross-Resolution GUI Grounding](https://awesomecua.github.io/resources/arxiv-2506-23491/) — 2025-06-30
  ZonUI-3B trains GUI grounding with a curated 24,000-example collection of mobile, desktop, and web screenshots. Its two-stage procedure first learns across platforms and then specializes on high-resolution images, with ablations on data diversity and redundant examples.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.github.io/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [GUI-Robust: A Comprehensive Dataset for Testing GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2506-14477/) — 2025-06-17
  Builds GUI task data with real-world interaction anomalies and evaluates how agent behavior changes under those conditions.
- [AgentSynth: Scalable Task Generation for Generalist Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-14205/) — 2025-06-17
  AgentSynth composes easily generated subtasks into longer computer-use tasks and trajectories with adjustable difficulty. Its evaluation uses the number of subtasks to probe how agent success changes as task complexity grows.
- [UITron-Speech: Towards Automated GUI Agents Based on Speech Instructions](https://awesomecua.github.io/resources/arxiv-2506-11127/) — 2025-06-10
  Introduces UITron-Speech, which predicts GUI actions from spoken instructions and screenshots. It combines synthetic speech data and mixed-modality training with a training-free grounding refinement step.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.github.io/resources/arxiv-2506-08012/) — 2025-06-09
  GUI-Reflection synthesizes reflection and error-correction examples from successful trajectories and adds dedicated learning stages for these behaviors. It introduces a reflection task suite, a mobile environment for online data collection, and iterative reflection tuning.
- [Go-Browse: Training Web Agents with Structured Exploration](https://awesomecua.github.io/resources/arxiv-2506-03533/) — 2025-06-04
  Go-Browse frames web-environment exploration as graph search so that information can be reused across data-collection episodes. It collects 10,000 successful trajectories and 40,000 interaction steps on WebArena and uses them to fine-tune a web agent.
- [DPO Learning with LLMs-Judge Signal for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-03095/) — 2025-06-03
  Uses an LLM judge to evaluate and filter synthetic GUI interaction trajectories for training a compact vision-language agent. OSWorld experiments assess the policy designed for local execution.
- [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.github.io/resources/arxiv-2506-02865/) — 2025-06-03
  Describes Surfer-H, a web agent paired with the Holo1 vision-language model family trained on web content, synthetic examples, and agent-generated data. The work introduces WebClick for web-interface localization and evaluates browser task execution on WebVoyager.
- [VideoCAD: A Dataset and Model for Learning Long-Horizon 3D CAD UI Interactions from Video](https://awesomecua.github.io/resources/arxiv-2505-24838/) — 2025-05-30
  Introduces synthetic CAD interaction videos, a model for learning interface actions from video, and evaluation tasks for spatial and long-horizon reasoning.
- [ZeroGUI: Automating Online GUI Learning at Zero Human Cost](https://awesomecua.github.io/resources/arxiv-2505-23762/) — 2025-05-29
  Combines generated tasks, estimated success rewards, and online reinforcement learning to automate GUI-agent interaction training.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://awesomecua.github.io/resources/arxiv-2505-20660/) — 2025-05-27
  BacktrackAgent adds verification, judgment, and reflection modules to detect erroneous GUI actions and guide recovery. It develops backtracking-oriented training data that includes post-action pages and evaluates task completion and step accuracy on Mobile3M and Auto-UI.
- [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.github.io/resources/arxiv-2505-20013/) — 2025-05-26
  WebCoT turns reflection, look-ahead, branching and rollback procedures into chain-of-thought training rationales. Fine-tuning on these reconstructed trajectories is evaluated for web-agent self-improvement and transfer across navigation tasks.
- [ScreenExplorer: Training a Vision-Language Model for Diverse Exploration in Open GUI World](https://awesomecua.github.io/resources/arxiv-2505-19095/) — 2025-05-25
  Trains ScreenExplorer with reinforcement learning in dynamic GUI environments, using a world-model curiosity reward and experience-stream distillation to support sustained exploration.
- [ProgRM: Build Better GUI Agents with Progress Rewards](https://awesomecua.github.io/resources/arxiv-2505-18121/) — 2025-05-23
  ProgRM predicts per-step task completion progress to provide intermediate rewards during online GUI-agent training. It derives progress labels by using longest common subsequences to identify key trajectory steps, allowing useful partial progress to contribute even when a trajectory ultimately fails.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.github.io/resources/arxiv-2505-15277/) — 2025-05-21
  Web-Shepherd is a process reward model for assessing individual steps of web-navigation trajectories. It introduces a collection of 40,000 step-level preference pairs with checklists and a separate benchmark for comparing reward models, then evaluates verification during WebArena-lite navigation.
- [Efficient Agent Training for Computer Use](https://awesomecua.github.io/resources/arxiv-2505-13909/) — 2025-05-20
  PC Agent-E augments 312 human computer-use trajectories with alternative action decisions synthesized by Claude 3.7 Sonnet. It studies training with this combination and introduces WindowsAgentArena-V2 as an updated evaluation benchmark.
- [Scaling Computer-Use Grounding via User Interface Decomposition and Synthesis](https://awesomecua.github.io/resources/arxiv-2505-13227/) — 2025-05-19
  Introduces OSWorld-G grounding evaluation and the Jedi synthesis pipeline for examples spanning layout reasoning and fine-grained interaction.
- [Scalable Video-to-Dataset Generation for Cross-Platform Mobile Agents](https://awesomecua.github.io/resources/arxiv-2505-12632/) — 2025-05-19
  Introduces MONDAY and an automated pipeline that extracts mobile-navigation training data from instructional videos across operating-system platforms.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [MobileIPL: Enhancing Mobile Agents Thinking Process via Iterative Preference Learning](https://awesomecua.github.io/resources/arxiv-2505-12299/) — 2025-05-18
  MobileIPL samples trees of action-planning thoughts, propagates rule-based leaf rewards backward, and forms preference pairs for reasoning-level optimization. It also expands screenshot-based instruction data through staged evolution before evaluation on mobile GUI-agent benchmarks.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.github.io/resources/arxiv-2504-21024/) — 2025-04-23
  WebEvolver trains a co-evolving world model to predict web observations and generate additional agent-training trajectories. The same model supports look-ahead action selection at inference, with evaluation on live web-task benchmarks.
- [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.github.io/resources/arxiv-2504-16419/) — 2025-04-23
  Introduces PixelWeb, a webpage GUI dataset with element images, contours, and pixel masks. Its annotation pipeline combines bitmap channel information with DOM-based visibility and stacking analysis to address occlusion and overlapping elements.
- [TongUI: Internet-Scale Trajectories from Multimodal Web Tutorials for Generalized GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-12679/) — 2025-04-17
  TongUI converts multimodal online tutorials, including videos and articles, into GUI-agent trajectories. Its GUI-Net dataset contains 143,000 trajectories spanning five operating systems and more than 200 applications, and supports fine-tuning for grounding and navigation.
- [UI-E2I-Synth: Advancing GUI Grounding with Large-Scale Instruction Synthesis](https://awesomecua.github.io/resources/arxiv-2504-11257/) — 2025-04-15
  UI-E2I-Synth uses GPT-4o to synthesize GUI grounding instructions with varied complexity, addressing small elements, imbalanced element types, and implicit requests. The accompanying UI-I2E-Bench evaluates instruction-to-element localization across these annotation challenges.
- [Breaking the Data Barrier -- Building GUI Agents Through Task Generalization](https://awesomecua.github.io/resources/arxiv-2504-10127/) — 2025-04-14
  Studies whether mid-training on GUI perception, multimodal reasoning, and text reasoning transfers to GUI-agent planning. Experiments compare 11 task sources and curated mixtures using WebArena and AndroidWorld to investigate training-data choices when GUI trajectories are scarce.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.github.io/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [GUI-Xplore: Empowering Generalizable GUI Agents with One Exploration](https://awesomecua.github.io/resources/arxiv-2503-17709/) — 2025-03-22
  Introduces GUI-Xplore exploration videos and downstream tasks, with an agent that combines action-aware modeling and graph-based environment reasoning.
- [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.github.io/resources/arxiv-2503-14021/) — 2025-03-18
  Uses specialized graphical, textual, and spatial perception components with a data-collection pipeline to improve GUI understanding.
- [STEVE: A Step Verification Pipeline for Computer-use Agent Training](https://awesomecua.github.io/resources/arxiv-2503-12532/) — 2025-03-16
  Labels individual computer-use actions by comparing surrounding screenshots, then trains agents from both successful and unsuccessful steps.
- [DeskVision: Large Scale Desktop Region Captioning for Advanced GUI Agents](https://awesomecua.github.io/resources/arxiv-2503-11170/) — 2025-03-14
  Introduces AutoCaptioner, DeskVision, and GUIExplorer for generating desktop region descriptions and training interface-understanding models.
- [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2503-09572/) — 2025-03-12
  Separates planning from execution and creates synthetic plan annotations for training agents on extended web-navigation tasks.
- [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.github.io/resources/arxiv-2503-03196/) — 2025-03-05
  Introduces SpiritSight and GUI-Lasagne data, combining multilevel GUI annotations with visual block parsing for high-resolution interface navigation.
- [ATLaS: Agent Tuning via Learning Critical Steps](https://awesomecua.github.io/resources/arxiv-2503-02197/) — 2025-03-04
  Selects critical steps from expert interaction trajectories for targeted agent fine-tuning, studying efficiency and generalization across tasks.
- [Explorer: Scaling Exploration-driven Web Trajectory Synthesis for Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2502-11357/) — 2025-02-17
  Synthesizes multimodal web trajectories through exploration and refinement, then trains a browser agent to study the effect of scaling interaction data.
- [Symbiotic Cooperation for Web Agents: Harnessing Complementary Strengths of Large and Small LLMs](https://awesomecua.github.io/resources/arxiv-2502-07942/) — 2025-02-11
  Couples large- and small-model web-agent exploration with trajectory synthesis and distillation to improve both model types iteratively.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.github.io/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [MobileA3gent: Training Mobile GUI Agents Using Decentralized Self-Sourced Data from Diverse Users](https://awesomecua.github.io/resources/arxiv-2502-02982/) — 2025-02-05
  Studies automatic annotation and federated training of mobile GUI agents from decentralized user interaction data with heterogeneous distributions.
- [ReachAgent: Enhancing Mobile Agent via Page Reaching and Operation](https://awesomecua.github.io/resources/arxiv-2502-02955/) — 2025-02-05
  Splits mobile tasks into reaching the required page and operating on it, using subtask data and preferred GUI trajectories for training.
- [AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs](https://awesomecua.github.io/resources/arxiv-2502-01977/) — 2025-02-04
  Infers element functionality from UI changes before and after interaction to produce verified annotations for grounding-model training.
- [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://awesomecua.github.io/resources/arxiv-2501-13896/) — 2025-01-23
  Collects environment-specific interaction data through autonomous exploration to adapt grounding models to previously unseen GUIs.
- [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://awesomecua.github.io/resources/arxiv-2501-12326/) — 2025-01-21
  Studies a screenshot-driven native GUI model with unified actions, deliberate reasoning, and iterative training on interaction traces.
- [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://awesomecua.github.io/resources/arxiv-2501-11425/) — 2025-01-20
  Builds self-critique training examples from searched recovery paths to improve agents' ability to detect and correct errors during interaction.
- [OS-Genesis: Automating GUI Agent Trajectory Construction via Reverse Task Synthesis](https://awesomecua.github.io/resources/arxiv-2412-19723/) — 2024-12-27
  Builds GUI trajectories by exploring environments first and deriving tasks retrospectively, with reward-model filtering of generated trajectories.
- [PC Agent: While You Sleep, AI Works -- A Cognitive Journey into Digital World](https://awesomecua.github.io/resources/arxiv-2412-17589/) — 2024-12-23
  Combines PC Tracker interaction capture, completion of action and reasoning annotations, and planning and grounding agents for desktop workflows.
- [Proposer-Agent-Evaluator(PAE): Autonomous Skill Discovery For Foundation Model Internet Agents](https://awesomecua.github.io/resources/arxiv-2412-13194/) — 2024-12-17
  Combines autonomous task proposal, web interaction, and visual success evaluation to discover skills and improve browser-agent policies.
- [Large Action Models: From Inception to Implementation](https://awesomecua.github.io/resources/arxiv-2412-10047/) — 2024-12-13
  Uses a Windows-agent case study to describe a development workflow for large action models, covering data collection, training, grounding, environment integration, and evaluation.
- [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://awesomecua.github.io/resources/arxiv-2412-09605/) — 2024-12-12
  Converts public tutorials into task specifications and executes them with an agent to synthesize multimodal interaction trajectories.
- [Falcon-UI: Understanding GUI Before Following User Instructions](https://awesomecua.github.io/resources/arxiv-2412-09362/) — 2024-12-12
  Pretrains GUI-context understanding with instruction-free web interactions before fine-tuning Falcon-UI on instructed GUI tasks.
- [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://awesomecua.github.io/resources/arxiv-2412-04454/) — 2024-12-05
  Uses screenshots, a unified action space, and staged grounding and reasoning training for cross-platform GUI interaction.
- [DroidCall: A Dataset for LLM-powered Android Intent Invocation](https://awesomecua.github.io/resources/arxiv-2412-00402/) — 2024-11-30
  Introduces data and a generation pipeline for translating natural-language requests into Android intent invocations using compact language models.
- [AdaptAgent: Adapting Multimodal Web Agents with Few-Shot Learning from Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2411-13451/) — 2024-11-20
  Adapts multimodal web agents to unfamiliar websites using a small number of human demonstrations through prompting or meta-learning.
- [AndroidLab: Training and Systematic Benchmarking of Android Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2410-24024/) — 2024-10-31
  Provides a shared Android action environment, reproducible tasks, and instruction data for training and comparing language and multimodal agents.
- [OS-ATLAS: A Foundation Action Model for Generalist GUI Agents](https://awesomecua.github.io/resources/arxiv-2410-23218/) — 2024-10-30
  Combines cross-platform GUI grounding data synthesis with action-model training to study generalization to unfamiliar interfaces.
- [OpenWebVoyager: Building Multimodal Web Agents via Iterative Real-World Exploration, Feedback and Optimization](https://awesomecua.github.io/resources/arxiv-2410-19609/) — 2024-10-25
  Develops multimodal browser agents through repeated cycles of real-web exploration, trajectory feedback, and policy optimization.
- [EDGE: Enhanced Grounded GUI Understanding with Enriched Multi-Granularity Synthetic Data](https://awesomecua.github.io/resources/arxiv-2410-19461/) — 2024-10-25
  Synthesizes GUI training examples at multiple levels of detail from webpages and studies transfer of learned understanding to other interface environments.
- [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://awesomecua.github.io/resources/arxiv-2410-13824/) — 2024-10-17
  Builds MultiUI by generating instructions from webpage accessibility trees and pairing them with screenshots for multimodal training. Evaluation examines web-interface understanding, including VisualWebBench and Mind2Web, and transfer to other text-rich visual tasks.
- [Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://awesomecua.github.io/resources/arxiv-2410-05243/) — 2024-10-07
  Introduces UGround, a visual target-localization model trained with large-scale synthetic references to elements in GUI screenshots.
- [NNetNav: Unsupervised Learning of Browser Agents Through Environment Interaction in the Wild](https://awesomecua.github.io/resources/arxiv-2410-02907/) — 2024-10-03
  Generates browser-agent demonstrations through autonomous exploration and retrospective task labeling, pruning trajectories that lack meaningful subtasks.
- [DreamStruct: Understanding Slides and User Interfaces via Synthetic Data Generation](https://awesomecua.github.io/resources/arxiv-2410-00201/) — 2024-09-30
  Generates labeled slides and interface visuals through code to support visual element detection, description, and classification with less manual annotation.
- [Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-15637/) — 2024-09-24
  Synatra converts indirect procedural knowledge, including human-oriented tutorials, into direct demonstrations for digital agents. It trains a 7B CodeLlama on 100,000 synthesized demonstrations and evaluates the resulting policy on Mind2Web, MiniWoB++, and WebArena.
- [MobileVLM: A Vision-Language Model for Better Intra- and Inter-UI Understanding](https://awesomecua.github.io/resources/arxiv-2409-14818/) — 2024-09-23
  MobileVLM adds two pretraining stages and four UI tasks to learn element detail and relationships between successive screens. Its Mobile3M dataset contains three million Chinese mobile UI pages connected by recorded transition actions.
- [MobileViews: A Million-scale and Diverse Mobile GUI Dataset](https://awesomecua.github.io/resources/arxiv-2409-14337/) — 2024-09-22
  Builds mobile screenshot and view-hierarchy pairs through automated application traversal and evaluates their usefulness for GUI grounding.
- [VisualAgentBench: Towards Large Multimodal Models as Visual Foundation Agents](https://awesomecua.github.io/resources/arxiv-2408-06327/) — 2024-08-12
  Benchmarks visual agents across GUI, embodied, and design tasks, with training trajectories collected through solvers, agents, and human demonstrations.
- [GUIOdyssey: A Comprehensive Dataset for Cross-App GUI Navigation on Mobile Devices](https://awesomecua.github.io/resources/arxiv-2406-08451/) — 2024-06-12
  Introduces annotated cross-application mobile trajectories and studies history-aware navigation over long task sequences.
- [Tell Me What's Next: Textual Foresight for Generic UI Representations](https://awesomecua.github.io/resources/arxiv-2406-07822/) — 2024-06-12
  Textual Foresight learns UI representations by describing the future screen expected after an action on the current interface. The OpenApp dataset supports pretraining and downstream evaluation of representations that connect individual elements with whole-screen changes.
- [On the Effects of Data Scale on UI Control Agents](https://awesomecua.github.io/resources/arxiv-2406-03679/) — 2024-06-06
  Studies how Android task performance changes with demonstration scale and releases AndroidControl with high- and low-level instructions.
- [Large Language Models Can Self-Improve At Web Agent Tasks](https://awesomecua.github.io/resources/arxiv-2405-20309/) — 2024-05-30
  Examines self-improvement by fine-tuning web agents on three mixtures of model-generated training data. WebArena experiments and trajectory-level evaluation measures study task performance, robustness, and behavior beyond aggregate success rates.
- [MUD: Towards a Large-Scale and Noise-Filtered UI Dataset for Modern Style UI Modeling](https://awesomecua.github.io/resources/arxiv-2405-07090/) — 2024-05-11
  MUD combines LLM-guided Android app exploration, noise filtering and human annotation to collect modern UI screenshots. The study evaluates the resulting data for element detection and UI retrieval.
- [GUIDE: Graphical User Interface Data for Execution](https://awesomecua.github.io/resources/arxiv-2404-16048/) — 2024-04-09
  Introduces annotated website task trajectories with screenshots, prior actions, reasoning, and grounded next actions for process automation.
- [WILBUR: Adaptive In-Context Learning for Robust and Accurate Web Agents](https://awesomecua.github.io/resources/arxiv-2404-05902/) — 2024-04-08
  WILBUR learns to rank prior task demonstrations for a web agent’s prompt and synthesizes instructions from past runs. A generated task curriculum and a backtracking mechanism support adaptation and recovery, evaluated on WebVoyager.
- [AutoWebGLM: A Large Language Model-based Web Navigating Agent](https://awesomecua.github.io/resources/arxiv-2404-03648/) — 2024-04-04
  Builds a web agent through simplified HTML observations, human-and-AI browsing data, curriculum training, and reinforcement-learning refinement.
- [Computer User Interface Understanding. A New Dataset and a Learning Framework](https://awesomecua.github.io/resources/arxiv-2403-10170/) — 2024-03-15
  Introduces desktop interaction videos and a framework combining synthetic examples with hierarchical contrastive learning for interface classification.
- [WebLINX: Real-World Website Navigation with Multi-Turn Dialogue](https://awesomecua.github.io/resources/arxiv-2402-05930/) — 2024-02-08
  Collects expert demonstrations of conversational web navigation and studies retrieval-based element selection for processing large pages.
- [ScreenAI: A Vision-Language Model for UI and Infographics Understanding](https://awesomecua.github.io/resources/arxiv-2402-04615/) — 2024-02-07
  Introduces ScreenAI and screen-annotation training that supports UI question answering, navigation, and summarization data generation.
- [SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents](https://awesomecua.github.io/resources/arxiv-2401-10935/) — 2024-01-17
  Trains a screenshot-driven GUI agent with grounding pretraining and introduces ScreenSpot for evaluating interface target localization.
- [WebVLN: Vision-and-Language Navigation on Websites](https://awesomecua.github.io/resources/arxiv-2312-15820/) — 2023-12-25
  WebVLN trains website navigation from question-based instructions using both rendered visual information and underlying HTML. It introduces WebVLN-v1 and a website-aware navigation network to study this digital variant of vision-and-language navigation.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.github.io/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [Android in the Wild: A Large-Scale Dataset for Android Device Control](https://awesomecua.github.io/resources/arxiv-2307-10088/) — 2023-07-19
  Collects Android interaction demonstrations with screens, actions, and instructions across device and platform variations for robustness evaluation.
- [Mind2Web: Towards a Generalist Agent for the Web](https://awesomecua.github.io/resources/arxiv-2306-06070/) — 2023-06-09
  Introduces a web-task dataset spanning diverse websites and evaluates generalization to unseen sites and domains.
- [WebUI: A Dataset for Enhancing Visual UI Understanding with Web Semantics](https://awesomecua.github.io/resources/arxiv-2301-13280/) — 2023-01-30
  Collects rendered webpages and structural metadata for visual UI modeling, studying how web semantics transfer to interface-understanding tasks.
- [Lexi: Self-Supervised Learning of the UI Language](https://awesomecua.github.io/resources/arxiv-2301-10165/) — 2023-01-23
  Introduces Lexi and UICaption to learn UI image-text representations from descriptions of interface functionality. Evaluation covers UI action entailment, instruction-based retrieval, referring-expression grounding, and UI entity recognition.
- [Understanding HTML with Large Language Models](https://awesomecua.github.io/resources/arxiv-2210-03945/) — 2022-10-08
  Studies language models for HTML element classification, page description and autonomous web navigation. Fine-tuned models are evaluated on MiniWoB, and a distilled, automatically labeled CommonCrawl HTML corpus supports the training approach.
- [Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding](https://awesomecua.github.io/resources/arxiv-2210-03347/) — 2022-10-07
  Pix2Struct pretrains an image-to-text model by reconstructing simplified HTML from masked webpage screenshots. Its variable-resolution visual representation is evaluated across several domains, including user-interface understanding.
- [Towards Better Semantic Understanding of Mobile Interfaces](https://awesomecua.github.io/resources/arxiv-2210-02663/) — 2022-10-06
  Augments RICO screens and view hierarchies with human labels for icon shape and meaning and for links between UI elements and text labels. It compares image-only and multimodal models on semantic understanding of previously unseen apps.
- [Learning to Denoise Raw Mobile UI Layouts for Improving Datasets at Scale](https://awesomecua.github.io/resources/arxiv-2201-04100/) — 2022-01-11
  Introduces CLAY, a pipeline that repairs noisy mobile UI layouts by removing nodes without valid visual counterparts and assigning semantic element types, supported by human-annotated layouts for evaluation.
- [Understanding Mobile GUI: from Pixel-Words to Screen-Sentences](https://awesomecua.github.io/resources/arxiv-2105-11941/) — 2021-05-25
  Models mobile screens as atomic text and graphic components whose relationships are learned by a Screen Transformer. The work introduces RICO-PW annotations and evaluates metadata-free screen understanding on relation, clickability, retrieval, and app-classification tasks.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.github.io/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.
- [Mapping Natural Language Commands to Web Elements](https://awesomecua.github.io/resources/arxiv-1808-09132/) — 2018-08-28
  Defines language grounding on webpages as choosing the UI element targeted by a natural-language command. A collection of more than 50,000 commands and three baseline models study functional references, relationships between elements, and visual position cues.
- [Rico: A Mobile App Dataset for Building Data-Driven Design Applications](https://awesomecua.github.io/resources/url-b560b5d6abaab98483f6/) — 2017-10-20
  Introduces Rico, collecting Android interface designs and interaction traces through crowdsourced use followed by automated exploration. The paper demonstrates UI-layout retrieval using learned representations and describes visual, textual, structural, and interaction data.
- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://awesomecua.github.io/resources/url-52a3261eb6a19b402e88/) — 2017-07-17
  Introduces World of Bits, a web-task platform combining human demonstrations, keyboard and mouse actions, and cached HTTP traffic for repeatable task environments. It evaluates agents trained through behavioral cloning and reinforcement learning.

## Datasets

- [AgentNet](https://awesomecua.github.io/resources/url-964d70c40bfc5ca8e1ee/) — Date not recorded
  22.6K human-annotated desktop computer-use tasks on Windows, macOS and Ubuntu, released with OpenCUA for training and evaluating vision-language-action models.
- [AgentSynth tasks and trajectories](https://awesomecua.github.io/resources/url-58a209f2b3b970916396/) — Date not recorded
  Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.
- [AgentTrek](https://awesomecua.github.io/resources/github-xlang-ai-agenttrek/) — Date not recorded
  Synthesizes browser-agent trajectories by replaying web tutorials as guidance, releasing the trajectory data with multimodal grounding and reasoning and an AgentTrek-32B agent.
- [Aguvis stage 1 grounding data](https://awesomecua.github.io/resources/url-06dd5ac7917c45d48509/) — Date not recorded
  The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.
- [Aguvis stage 2 trajectory data](https://awesomecua.github.io/resources/url-b5e2127e07f692d516b9/) — Date not recorded
  The second-stage Aguvis collection of interface trajectories for learning action sequences, planning and reasoning after grounding pretraining.
- [AMEX](https://awesomecua.github.io/resources/github-yuxiangchai-amex-codebase/) — Date not recorded
  Code for AMEX Android GUI data that converts its three annotation levels into question-answer pairs and fine-tunes a LLaMA2-Accessory model, with a released checkpoint.
- [Android in the Wild](https://awesomecua.github.io/resources/component-google-research-android-in-the-wild/) — Date not recorded
  Human demonstrations of Android tasks with screenshots and touch actions.
- [AndroidCode](https://awesomecua.github.io/resources/url-cf4d2d45a7314cb16acb/) — Date not recorded
  HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.
- [AndroidControl](https://awesomecua.github.io/resources/component-google-research-android-control/) — Date not recorded
  Android demonstrations with high-level goals, step instructions, screenshots, and accessibility trees.
- [AutoDroid V2 training data](https://awesomecua.github.io/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [CAGUI](https://awesomecua.github.io/resources/url-a06622da7688e3718a7b/) — Date not recorded
  Chinese Android GUI benchmark released with AgentCPM-GUI, with a grounding track for widgets and OCR text and an agent track for multi-step tasks in Chinese apps.
- [CMGUI](https://awesomecua.github.io/resources/url-ab26f9ef56d651cee587/) — Date not recorded
  18k trajectories with 98k steps from more than 50 Chinese mobile apps in domains such as e-commerce and social media, for building GUI agents on Chinese apps.
- [CUA-Gym](https://awesomecua.github.io/resources/url-6aa1aa58a7a888395189/) — Date not recorded
  Computer-use environment and task resources for agent research.
- [Dreamer V1 Data](https://awesomecua.github.io/resources/url-eadc6cba9ea46c38dd1d/) — Date not recorded
  Web-world-model training data with prompts, images, action descriptions, and responses, released with the WebDreamer project.
- [DroidCall data](https://awesomecua.github.io/resources/url-ae8f5208eea9e7f1f606/) — Date not recorded
  Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.
- [FingerTip-20K](https://awesomecua.github.io/resources/github-tsinghua-fib-lab-fingertip-20k/) — Date not recorded
  Over 20,000 human Android episodes across 500+ apps with user context and long-term usage patterns, plus tracks for proactive intent prediction and personalized execution.
- [GroundGUI RL Dataset](https://awesomecua.github.io/resources/url-4e71dc456c4112eed727/) — Date not recorded
  Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.
- [Grounding-Anything-GUI](https://awesomecua.github.io/resources/url-d1830de02226155ee16d/) — Date not recorded
  The public training archive linked by the Phi-Ground project for its Phi-Ground-Any model.
- [GUI-360](https://awesomecua.github.io/resources/url-0b590d03a3d5103a79e4/) — Date not recorded
  Desktop GUI trajectory data supporting multiple interface understanding tasks.
- [GUI-Action Narrator](https://awesomecua.github.io/resources/github-showlab-gui-action-narrator/) — Date not recorded
  Action narration resources for GUI interaction trajectories.
- [GUI-Actor data](https://awesomecua.github.io/resources/url-66096ad4057a3d3726f5/) — Date not recorded
  A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.
- [GUI-CIDER causal knowledge data](https://awesomecua.github.io/resources/url-d0300db5ba754b1a64fa/) — Date not recorded
  A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.
- [GUI-Lasagne L1](https://awesomecua.github.io/resources/url-0c5659ca9e59d942aea3/) — Date not recorded
  The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.
- [GUI-Net-1M](https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUI-Odyssey](https://awesomecua.github.io/resources/github-opengvlab-gui-odyssey/) — Date not recorded
  Human-demonstrated Android episodes for cross-app navigation, spanning six task types, 212 apps and about 1,400 app combinations, for training and evaluating agents.
- [GUIAct](https://awesomecua.github.io/resources/url-6cd150ec23361b4d2e84/) — Date not recorded
  Web and Android GUI action-instruction data, with single-step, multi-step and smartphone partitions.
- [GUIChat](https://awesomecua.github.io/resources/url-edf38d43800be8c955ae/) — Date not recorded
  Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.
- [GUICourse](https://awesomecua.github.io/resources/github-yiye3-guicourse/) — Date not recorded
  Three datasets for turning general VLMs into GUI agents: GUIEnv for OCR and grounding, GUIAct with 67k single-step and 15k multi-step web and Android actions, and GUIChat dialogues.
- [GUIEnv-local](https://awesomecua.github.io/resources/url-0af07e00658a430cee6a/) — Date not recorded
  The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.
- [GUIOdyssey — current data release](https://awesomecua.github.io/resources/url-511903ebfac45e6751b2/) — Date not recorded
  Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.
- [Jedi](https://awesomecua.github.io/resources/url-e062cf1445eaee0f3ade/) — Date not recorded
  Synthetic GUI grounding data associated with UI decomposition research and the OSWorld-G benchmark.
- [MONDAY](https://awesomecua.github.io/resources/github-runamu-monday/) — Date not recorded
  Cross-platform mobile GUI trajectory dataset derived from instructional videos, with released data-processing helpers and example evaluation code for Android and iOS data.
- [MONDAY annotations](https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MultiUI](https://awesomecua.github.io/resources/github-neulab-multiui/) — Date not recorded
  7.3 million training samples built from webpage UIs and structured with enhanced accessibility trees, for text-rich visual understanding, released with UIX-Qwen2 models.
- [NNetNav Live data](https://awesomecua.github.io/resources/url-4f47abde8cd28a1ec1e1/) — Date not recorded
  Browser-interaction data released with NNetNav for its live-website setting, with separate training and test files.
- [NNetNav WebArena data](https://awesomecua.github.io/resources/url-25a4d0ab29b60250863a/) — Date not recorded
  NNetNav's WebArena-oriented browser-interaction data release, with separate training and test files.
- [OpenMobile-Data-v2](https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/) — Date not recorded
  Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.
- [OS-Atlas Data](https://awesomecua.github.io/resources/url-0fdeb1cf5f49f84820e6/) — Date not recorded
  GUI grounding pre-training data for OS-Atlas in desktop (Linux, macOS, Windows), mobile and web domains, with element boxes stored as relative left, top, right and bottom ratios.
- [OS-Genesis](https://awesomecua.github.io/resources/github-os-copilot-os-genesis/) — Date not recorded
  Interaction-driven pipeline that synthesizes mobile and web GUI agent trajectories without human supervision or predefined tasks, via reverse task synthesis and a trajectory reward model.
- [OS-Genesis mobile training data](https://awesomecua.github.io/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [PC-Agent-E training data](https://awesomecua.github.io/resources/url-14449fe321e0a1ca34ea/) — Date not recorded
  Released dataset used to train PC-Agent-E, linked by the official pipeline for refining human trajectories and synthesizing action reasoning.
- [Plan-and-Act training data](https://awesomecua.github.io/resources/url-ba6453cfdae0eb049ced/) — Date not recorded
  Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.
- [RoTS](https://awesomecua.github.io/resources/github-alibabaresearch-rots/) — Date not recorded
  Announced GUI trajectory synthesis resources for recovery from policy-induced errors; the inspected repository marks code and data releases as in preparation.
- [ScaleCUA Data](https://awesomecua.github.io/resources/url-631e74223e198ef40202/) — Date not recorded
  Cross-platform training data released with ScaleCUA, with grounding and navigation annotations for Ubuntu, Windows, macOS, Android, iPhone and web screenshots.
- [ScreenRef](https://awesomecua.github.io/resources/url-56bda04bd8d3a438deb3/) — Date not recorded
  GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.
- [ScreenRef Annotations](https://awesomecua.github.io/resources/url-c1db2ba79e6d6a3db2b9/) — Date not recorded
  Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.
- [ShowUI Desktop](https://awesomecua.github.io/resources/url-f976dec3d1c5e0bedbd7/) — Date not recorded
  7,496 desktop grounding examples built from OmniAct screenshots, with annotations rewritten by GPT-4o to describe element appearance, spatial relations and function.
- [ShowUI-web](https://awesomecua.github.io/resources/url-8933977bb0a57940ed23/) — Date not recorded
  Web-interface grounding examples with instructions, element boxes and points, paired with a separately packaged screenshot archive.
- [UGround V1 Data](https://awesomecua.github.io/resources/url-c4898ad1bfc049926a63/) — Date not recorded
  Gated web grounding training data for UGround in Web-Hybrid and Web-Direct subsets, with a bounding-box version whose coordinates are normalized to 0-999.
- [UI-Genie reward data](https://awesomecua.github.io/resources/url-84e5aeeffaf561baa966/) — Date not recorded
  Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.
- [UI-Genie trajectory data](https://awesomecua.github.io/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [UI-Ins](https://awesomecua.github.io/resources/github-alibaba-ui-ins/) — Date not recorded
  Treats grounding instructions as multiple reasoning perspectives, releasing a data pipeline, training code and UI-Ins-7B and 32B models trained by SFT on synthesized instructions, then RL.
- [UI-R1 3B training data](https://awesomecua.github.io/resources/url-7c568d88a472f914d316/) — Date not recorded
  The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.
- [UI-S1 released training examples](https://awesomecua.github.io/resources/url-16184830c0f4bdb146fa/) — Date not recorded
  A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.
- [WebPRM checklist-generation data](https://awesomecua.github.io/resources/url-fcc98b149272bbf31b05/) — Date not recorded
  Web-task context, starting observations and action history paired with structured checklists and subgoal analyses for checklist generation.

## Models

- [OpenCUA](https://awesomecua.github.io/resources/github-xlang-ai-opencua/) — Date not recorded
  Open computer-use research stack including models and training resources.
- [ScaleCUA](https://awesomecua.github.io/resources/github-opengvlab-scalecua/) — Date not recorded
  Computer-use model family trained with cross-platform interaction data.

## Engineering & industry

- [Agent-R](https://awesomecua.github.io/resources/github-bytedance-seed-agent-r/) — Date not recorded
  Trajectory collection and revision utilities that use tree search and model-guided critique to train agents to recover from mistakes, including WebShop tasks.
- [AgentSynth task-generation pipeline](https://awesomecua.github.io/resources/github-sunblaze-ucb-agentsynth/) — Date not recorded
  Generates synthetic computer-use tasks and records trajectories in OSWorld desktop environments and InSTA browser environments.
- [AutoDroid V2](https://awesomecua.github.io/resources/github-mobilellm-autodroid-v2/) — Date not recorded
  An Android automation implementation that builds app documentation from exploration traces and evaluates language-model-generated execution code in emulator workflows.
- [DroidCall generation and evaluation code](https://awesomecua.github.io/resources/github-ubiquitouslearning-droidcall/) — Date not recorded
  Data-generation, fine-tuning and evaluation utilities for teaching small language models to invoke Android intents through predefined functions.
- [Go-Browse](https://awesomecua.github.io/resources/github-apga-go-browse/) — Date not recorded
  Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.
- [GroundGUI training and evaluation code](https://awesomecua.github.io/resources/github-prentisai-groundgui/) — Date not recorded
  Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.
- [GUI-CIDER research code](https://awesomecua.github.io/resources/github-wuzheng02-gui-cider/) — Date not recorded
  Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.
- [GUI-ReWalk](https://awesomecua.github.io/resources/github-bytedance-gui-rewalk/) — Date not recorded
  A desktop trajectory-generation framework that moves from stochastic GUI exploration to inferred goals and multi-stage task completion, with retrospective reasoning annotations.
- [MobileForge](https://awesomecua.github.io/resources/github-kwai-mobileforge/) — Date not recorded
  Android GUI-agent adaptation framework combining app exploration, generated curricula and rollout feedback with hint-conditioned step-level GRPO; the documented public training path targets Qwen3-VL-8B.
- [NNetNav](https://awesomecua.github.io/resources/github-murtyshikhar-nnetnav/) — Date not recorded
  Collects and labels browser-exploration trajectories for agent training, with code for data processing, fine-tuning, and web evaluation.
- [PC-Agent-E training and deployment](https://awesomecua.github.io/resources/github-gair-nlp-pc-agent-e/) — Date not recorded
  Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.
- [Plan-and-Act](https://awesomecua.github.io/resources/github-squeezeailab-plan-and-act/) — Date not recorded
  A web-agent framework that separates high-level planning from action execution, with replanning and synthetic planner-data generation components.
- [Proposer-Agent-Evaluator (PAE)](https://awesomecua.github.io/resources/github-amazon-science-pae/) — Date not recorded
  A browser-agent training system that proposes tasks, collects visual interaction trajectories, and uses automated evaluation to drive policy improvement.
- [SCALE-CUA (THUDM)](https://awesomecua.github.io/resources/github-thudm-scale-cua/) — Date not recorded
  Computer-use training framework with VeriGen task synthesis, adaptive rollout sampling, and visual-context segmentation.
- [SkillWeaver](https://awesomecua.github.io/resources/github-osu-nlp-group-skillweaver/) — Date not recorded
  A web-agent framework that explores sites, synthesizes reusable interaction APIs and builds a skill library for later tasks.
- [STEVE / STEVE-R1 research code](https://awesomecua.github.io/resources/github-fanbinlu-steve-r1/) — Date not recorded
  Research code and linked models for step-verified computer-use training; the current repository describes STEVE-R1 and its trajectory releases.
- [TongUI training and inference framework](https://awesomecua.github.io/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [TreeCUA](https://awesomecua.github.io/resources/github-uitron-hub-treecua/) — Date not recorded
  Framework for generating GUI trajectories through tree-structured exploration and verification.
- [UI Defect Mocker](https://awesomecua.github.io/resources/github-zju-aces-ise-uidefectmocker/) — Date not recorded
  Synthesizes visual UI defects from mobile screenshots and Android layout metadata to support GUI-testing experiments.
- [UI-Genie](https://awesomecua.github.io/resources/github-euphoria16-ui-genie/) — Date not recorded
  Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.
- [WebEvolver code component](https://awesomecua.github.io/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
- [WebRL](https://awesomecua.github.io/resources/github-thudm-webrl/) — Date not recorded
  Training pipeline that evolves web tasks from prior attempts and uses an outcome reward model to refine browser policies.
- [Work2Skill](https://awesomecua.github.io/resources/github-china-qijizhifeng-work2skill/) — Date not recorded
  Collects human GUI demonstrations and inspects multimodal evidence to derive reusable agent workflow skills.
- [ZeroGUI](https://awesomecua.github.io/resources/github-opengvlab-zerogui/) — Date not recorded
  Online RL framework for GUI agents in which VLMs generate the training tasks and judge success from trajectory screenshots, with OSWorld and AndroidLab checkpoints trained from UI-TARS-7B-DPO.
