---
title: "模仿学习：Computer-Use 研究与资源 | AwesomeCUA"
url: https://awesomecua.com/zh/topics/imitation-learning/
updated: 2026-11-10
type: topic
lang: zh-CN
---

# 模仿学习

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/imitation-learning/records.jsonl

## 论文与综述

- [HiSTEVE 1.0: Harnessing Human-Interface VLA Agents for Open-World Games](https://awesomecua.com/zh/resources/arxiv-2610-31162/) — 2026-10-22
  HiSTEVE uses a hierarchical planner and a vision-only keyboard-and-mouse controller for Minecraft tasks that include GUI and non-GUI interactions.
- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.com/zh/resources/arxiv-2610-26828/) — 2026-10-19
  WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning.
- [ScopeMem: Latent Memory That Learns Where to Revise Frozen GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-26503/) — 2026-10-19
  ScopeMem conditions latent-memory prefixes on a frozen GUI agent's initial action and trains them to correct errors while preserving correct decisions. Its evaluation separates action repairs from harmful revisions.
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2610-26071/) — 2026-10-19
  CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks.
- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.com/zh/resources/arxiv-2610-24372/) — 2026-10-17
  Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.
- [Don't Retrain, Remix: Adaptation of Web Agents using Mixture Hypernetworks](https://awesomecua.com/zh/resources/arxiv-2610-22539/) — 2026-10-15
  WebMix uses a scout-produced interface manual to route mixtures of source-trained LoRA adapters for web agents, adapting to target interfaces without target-time gradient updates.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/zh/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [Harness Evolution Hits a Ceiling: When Weight Training Should Begin](https://awesomecua.com/zh/resources/arxiv-2610-11655/) — 2026-10-08
  Studies when to improve an LLM agent's runtime harness or train its weights by classifying failed trajectories; WebArena-Lite supplies a web-task transfer test.
- [ReSAIL: Mitigating Collapse in Iterative Agent Self-Distillation](https://awesomecua.com/zh/resources/arxiv-2609-39306/) — 2026-09-30
  Introduces ReSAIL, an augmentation for iterative agent self-distillation that selects informative interaction steps; it also tests GUI-agent action prediction.
- [From Tapping to Hopping: Augmenting Mobile GUI Agents with App-Native Deeplinks](https://awesomecua.com/zh/resources/arxiv-2609-30887/) — 2026-09-25
  GUI-Hopper combines verified Android deeplinks with GUI actions, using landing-screen descriptions, hybrid trajectory training and reinforcement learning to select navigation shortcuts and recover through GUI control.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.com/zh/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.com/zh/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [CA-OPD: Confidence-Aware On-Policy Distillation for Structured Visual Prediction](https://awesomecua.com/zh/resources/arxiv-2609-02401/) — 2026-09-02
  Introduces CA-OPD, a confidence-guided distillation method for visual prediction, evaluated on GUI grounding and optical character recognition benchmarks.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.com/zh/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [SkillLens: Visual Skill Cards for Retrieval-Augmented GUI Action Prediction and On-Policy Distillation](https://awesomecua.com/zh/resources/arxiv-2608-10775/) — 2026-08-11
  Introduces SkillLens visual skill cards for retrieved GUI action guidance and CardDistill for training an action-prediction student that runs without retrieval on website tasks.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.com/zh/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.com/zh/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation](https://awesomecua.com/zh/resources/arxiv-2607-29320/) — 2026-07-31
  MAGA distills specialized GUI agents into one policy by allocating supervision according to structured-action correctness. A training-only teacher hint supports fusion across mobile, web and desktop settings without changing student inputs.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://awesomecua.com/zh/resources/arxiv-2606-27330/) — 2026-06-25
  PEEU explores web environments and turns hindsight experience into aligned high-level planning supervision. A hierarchical task-decomposition analysis examines why atomic-skill competence alone falls short of planning generalization across websites.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.com/zh/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [Skill-Guided Continuation Distillation for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2606-18890/) — 2026-06-17
  Skill-Guided Continuation Distillation first lets a policy reach its own off-trajectory states, then uses skill guidance to collect successful continuations. Mixing those continuations with expert traces supplies supervision for recovery states absent from demonstrations.
- [Trust the Right Teacher: Quality-Aware Self-Distillation for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2606-18101/) — 2026-06-16
  Proposes quality-aware self-distillation for GUI coordinate generation under student-produced prefixes. A correctness-aware gate suppresses coordinate-token supervision outside the target box, while teacher-probability scaling adjusts the remaining signal strength.
- [ProCUA-SFT Technical Report](https://awesomecua.com/zh/resources/arxiv-2606-17321/) — 2026-06-15
  ProCUA-SFT generates tasks and synthetic trajectories on live desktops seeded with document content, checking task preconditions before rollout. The resulting step-prefix examples are formatted to match inference context and used for supervised GUI-agent fine-tuning.
- [Speculative Rollback Correction for Quality-Diverse Web Agent Imitation](https://awesomecua.com/zh/resources/arxiv-2606-12485/) — 2026-06-10
  Speculative Rollback Correction lets a student web agent execute short branches before teacher review localizes harmful deviations. Verified continuations and localized corrections feed supervised training while an archive retains diverse successful solutions.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [PerceptUI: LLM Agents as Human-Aligned Synthetic Users for UI/UX Evaluation](https://awesomecua.com/zh/resources/arxiv-2606-05697/) — 2026-06-04
  Introduces PerceptUI, a persona-conditioned model for predicting how particular users answer questions about interfaces, supporting synthetic UI/UX evaluation.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.com/zh/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [Video2GUI: Synthesizing Large-Scale Interaction Trajectories for Generalized GUI Agent Pretraining](https://awesomecua.com/zh/resources/arxiv-2605-14747/) — 2026-05-14
  Video2GUI extracts GUI interaction trajectories from tutorial videos to build WildGUI, a pretraining dataset spanning applications and websites.
- [SimPersona: Learning Discrete Buyer Personas from Raw Clickstreams for Grounded E-Commerce Agents](https://awesomecua.com/zh/resources/arxiv-2605-14205/) — 2026-05-14
  SimPersona learns buyer types from clickstreams and uses persona tokens to condition web agents trained on browsing traces for live storefront tasks.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [LiteGUI: Lightweight GUI Agents via Multi-Solution Guided Distillation and Dual-Level Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2605-07505/) — 2026-05-08
  LiteGUI trains lightweight GUI agents on logged states with guided on-policy distillation and dual-level RL, supported by its multi-solution Lite-Dataset.
- [AutoSurfer -- Teaching Web Agents through Comprehensive Surfing, Learning, and Modeling](https://awesomecua.com/zh/resources/arxiv-2604-27253/) — 2026-04-29
  AutoSurfer explores website actions breadth-first, retaining page and trajectory knowledge to guide task synthesis and trajectory refinement. It evaluates the resulting training data by fine-tuning a web agent on WebArena and examining synthesized-task diversity.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.com/zh/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [From Imitation to Discrimination: Progressive Curriculum Learning for Robust Web Navigation](https://awesomecua.com/zh/resources/arxiv-2604-12666/) — 2026-04-14
  Introduces the Triton dataset and a staged training curriculum for text-based web navigation agents, using hard-negative HTML examples to train element discrimination and longer task execution.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.com/zh/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [EE-MCP: Self-Evolving MCP-GUI Agents via Automated Environment Generation and Experience Learning](https://awesomecua.com/zh/resources/arxiv-2604-09815/) — 2026-04-10
  EE-MCP studies application-dependent mixtures of GUI actions and MCP calls using generated environments, trajectory collection and filtered training. An experience bank extracts rules from trajectory comparisons for inference-time improvement, distinct from model distillation.
- [MolmoWeb: Open Visual Web Agent and Open Data for the Open Web](https://awesomecua.com/zh/resources/arxiv-2604-08516/) — 2026-04-09
  Presents MolmoWebMix, combining synthetic browser trajectories, human demonstrations and GUI perception data, and MolmoWeb screenshot-to-action policies trained from it. Browser benchmarks also test parallel rollouts with best-of-N selection.
- [Structured Distillation of Web Agent Capabilities Enables Generalization](https://awesomecua.com/zh/resources/arxiv-2604-07776/) — 2026-04-09
  Introduces Agent-as-Annotators, which uses modular LLM roles to synthesize and filter web-agent trajectories for supervised training of a smaller web agent.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.com/zh/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [Agentic Critical Training](https://awesomecua.com/zh/resources/arxiv-2603-08706/) — 2026-03-09
  Introduces Agentic Critical Training (ACT), a reinforcement-learning warm-up that teaches general agents to choose expert actions over alternatives, with WebShop among its evaluations.
- [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](https://awesomecua.com/zh/resources/arxiv-2512-10962/) — 2025-11-22
  Introduces a pipeline that filters individual steps from noisy computer-agent rollouts and augments them with reasoning for training. WebSTAR and WebSCORE support GUI-policy supervision and a distilled process reward model, StepRM.
- [SynthAgent: Adapting Web Agents with Synthetic Supervision](https://awesomecua.com/zh/resources/arxiv-2511-06101/) — 2025-11-08
  Introduces SynthAgent, which generates tasks by exploring website elements and refines them when observations reveal conflicts. A later trajectory-refinement stage removes misaligned behavior before fine-tuning agents for the target websites.
- [BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://awesomecua.com/zh/resources/arxiv-2510-10666/) — 2025-10-12
  Trains BrowserAgent to use Playwright-based scrolling, clicking and typing directly on webpages for information-seeking tasks. Supervised and rejection fine-tuning are paired with explicit memory for conclusions carried across steps.
- [ALLOY: Generating Reusable Agent Workflows from User Demonstration](https://awesomecua.com/zh/resources/arxiv-2510-10049/) — 2025-10-11
  Introduces ALLOY, which turns user demonstrations into editable, reusable workflows for LLM-based web agents carrying out preference-dependent tasks.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.com/zh/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.com/zh/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.com/zh/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [Instruction Agent: Enhancing Agent with Expert Demonstration](https://awesomecua.com/zh/resources/arxiv-2509-07098/) — 2025-09-08
  Introduces Instruction Agent, a GUI agent that follows instructions extracted from one expert demonstration and uses verification and backtracking to handle interruptions.
- [OmniActor: A Generalist GUI and Embodied Agent for 2D&3D Worlds](https://awesomecua.com/zh/resources/arxiv-2509-02322/) — 2025-09-02
  Introduces OmniActor, which shares shallow model layers while separating deeper parameters to train jointly on GUI and embodied interactions. A unified action representation and mixed training data support evaluation in both task families.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.com/zh/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.com/zh/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [Training LLM-Based Agents with Synthetic Self-Reflected Trajectories and Partial Masking](https://awesomecua.com/zh/resources/arxiv-2505-20023/) — 2025-05-26
  Introduces STeP, which trains agents on synthetic trajectories containing error reflections and corrections while masking poor steps; WebShop is one of three evaluated tasks.
- [JARVIS-VLA: Post-Training Large-Scale Vision Language Models to Play Visual Games with Keyboards and Mouse](https://awesomecua.com/zh/resources/arxiv-2503-16365/) — 2025-03-20
  Introduces Act from Visual Language Post-Training, a method for agents that follow instructions in Minecraft through visual input and actions, adjacent to interface operation.
- [InSTA: Towards Internet-Scale Training For Agents](https://awesomecua.com/zh/resources/arxiv-2502-06776/) — 2025-02-10
  InSTA builds a pipeline that creates website tasks, collects web-agent trajectories and filters them by judged success to train smaller web navigation agents.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.com/zh/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://awesomecua.com/zh/resources/arxiv-2409-15637/) — 2024-09-24
  Synatra converts indirect procedural knowledge, including human-oriented tutorials, into direct demonstrations for digital agents. It trains a 7B CodeLlama on 100,000 synthesized demonstrations and evaluates the resulting policy on Mind2Web, MiniWoB++, and WebArena.
- [Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents](https://awesomecua.com/zh/resources/arxiv-2408-07199/) — 2024-08-13
  Agent Q combines guided tree search, self-critique and preference-based fine-tuning to train web agents from successful and unsuccessful interactions.
- [UINav: A Practical Approach to Train On-Device Automation Agents](https://awesomecua.com/zh/resources/url-ca76de56f3ddbd7c61b4/) — 2024-06
  Trains small Android automation agents from demonstrations, using macro actions with status checks, demonstration augmentation, and a referee model that predicts task completion to guide further demonstrations.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.com/zh/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [Scaling Instructable Agents Across Many Simulated Worlds](https://awesomecua.com/zh/resources/arxiv-2404-10179/) — 2024-03-13
  The SIMA project trains agents to follow language instructions in simulated 3D worlds, using images as input and keyboard-and-mouse actions as output.
- [UINav: A Practical Approach to Train On-Device Automation Agents](https://awesomecua.com/zh/resources/arxiv-2312-10170/) — 2023-12-15
  Introduces UINav, a demonstration-based method for training mobile UI automation agents, with a referee model for failure feedback and automatic augmentation of examples.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.com/zh/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [CORNET: Learning Table Formatting Rules By Example](https://awesomecua.com/zh/resources/arxiv-2208-06032/) — 2022-08-11
  Introduces CORNET, a system that learns spreadsheet conditional-formatting rules from cells formatted by users, using symbolic rule enumeration and a neural ranker.
- [WebGPT: Browser-assisted question-answering with human feedback](https://awesomecua.com/zh/resources/arxiv-2112-09332/) — 2021-12-17
  Trains a question-answering model to search and navigate a text-based web browser, collect references and improve long-form answers using demonstrations and human feedback.
- [Interactive Task and Concept Learning from Natural Language Instructions and GUI Demonstrations](https://awesomecua.com/zh/resources/arxiv-1909-00031/) — 2019-08-30
  Introduces PUMICE, an agent that learns mobile-app procedures and conditional concepts through natural-language conversation and GUI demonstrations, recursively resolving ambiguous instructions with users.

## 评测基准

- [FedMABench](https://awesomecua.com/zh/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.
- [LearnGUI](https://awesomecua.com/zh/resources/url-a7beaa489fc4ffeb555f/) — Date not recorded
  Mobile GUI benchmark for learning from demonstrations: 2,252 offline tasks and 101 online tasks with human step-by-step trajectories, each query paired with one to three similar support demonstrations.
- [TimeWarp](https://awesomecua.com/zh/resources/github-sparklabutah-timewarp/) — Date not recorded
  Web-agent benchmark on self-hosted Wiki, News and Shop sites, each with six era-styled UI versions, registering 231 BrowserGym tasks scored mainly by deterministic answer verifiers.

## 数据集

- [AgentSynth tasks and trajectories](https://awesomecua.com/zh/resources/url-58a209f2b3b970916396/) — Date not recorded
  Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.
- [AutoDroid V2 training data](https://awesomecua.com/zh/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [CaptchaArena-Trajectories](https://awesomecua.com/zh/resources/url-52067b3e48e9381e4c66/) — Date not recorded
  Chain-of-thought computer-use trajectories on 20 interactive CAPTCHA types: 46,000 browser rollouts with step screenshots and click, drag, hold or type actions, kept only when the page verifier accepts.
- [CognitiveKernel-Pro-SFT](https://awesomecua.com/zh/resources/url-7c431ccb1d5dc1f035d8/) — Date not recorded
  CognitiveKernel-Pro-SFT contains rejection-sampled GPT-4.1 trajectories for fine-tuning Cognitive Kernel-Pro agents, from URLQA web queries, DocBench, TableBench and a WebWalkerQA subset.
- [ExACT-VWA](https://awesomecua.com/zh/resources/url-792920a5f64df66d34d7/) — Date not recorded
  Post-processed R-MCTS and GPT-4o agent trajectories collected on VisualWebArena, stored as context and response pairs with domain and task metadata; part of the set was used to fine-tune GPT-4o.
- [FedMABench data partitions](https://awesomecua.com/zh/resources/url-86b3c2ee65911daf84a8/) — Date not recorded
  Six families of JSONL partitions of AndroidControl and AitW mobile-agent episodes for FedMABench federated training under app, category and step/episode heterogeneity; screenshots must be rebuilt from the sources.
- [Go-Browse-WA processed data](https://awesomecua.com/zh/resources/url-a13a187bc058fbb4f6af/) — Date not recorded
  Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.
- [GUI-CIDER causal knowledge data](https://awesomecua.com/zh/resources/url-d0300db5ba754b1a64fa/) — Date not recorded
  A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.
- [GUI-Net-1M](https://awesomecua.com/zh/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUI-Net-Mini](https://awesomecua.com/zh/resources/url-0627940da1b988739f75/) — Date not recorded
  TongUI training mixture: about 143K samples from WikiHow, Baidu Experience and GUI videos plus reprocessed AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI data, as grounding and navigation JSON with screenshots.
- [GUI_Reflection_SFT_train](https://awesomecua.com/zh/resources/url-528f6fe128b77e9615aa/) — Date not recorded
  Offline supervised fine-tuning data for GUI Reflection, released as JSONL files. Users obtain the corresponding images from the source datasets named in the card.
- [GUIMid training data](https://awesomecua.com/zh/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [lumos_unified_ground_iterative](https://awesomecua.com/zh/resources/url-87bba046fba8c1cd968c/) — Date not recorded
  A JSONL training dataset for the Lumos-I grounding module, combining math, question-answering, and web-agent annotations, including examples from Mind2Web.
- [Mobile-R1 trajectory sample](https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/) — Date not recorded
  Open sample of Mobile-R1's annotated trajectories on Chinese Android apps: 1,007 tasks whose steps pair a screenshot with a thought, a subtask and a mobile_use action such as click, swipe, type or open.
- [MONDAY annotations](https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MT-Mind2Web](https://awesomecua.com/zh/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.
- [OpenMobile-Data](https://awesomecua.com/zh/resources/url-3849b18aa87edefc6afd/) — Date not recorded
  OpenMobile's synthesized Android agent data: four LLaMA-Factory SFT split files built from AndroidWorld rollouts plus an archive of the original rollout trajectories and screenshots.
- [OS-Genesis mobile training data](https://awesomecua.com/zh/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [OS-Genesis web training data](https://awesomecua.com/zh/resources/url-31768421b4ecd1ad89f7/) — Date not recorded
  Gated OS-Genesis web release holding one JSONL file of reverse-task-synthesis training trajectories and a screenshot archive, named in the project README as training data for its WA checkpoints.
- [PC-Agent-E training data](https://awesomecua.com/zh/resources/url-14449fe321e0a1ca34ea/) — Date not recorded
  Released dataset used to train PC-Agent-E, linked by the official pipeline for refining human trajectories and synthesizing action reasoning.
- [PSAI Computer Use Dataset](https://awesomecua.com/zh/resources/github-anaishowland-computeruse-data-psai/) — Date not recorded
  PSAI Computer Use Dataset provides 3,167 human-computer interaction trajectories with synchronized screen video, input events, and DOM/AX snapshots.
- [Regimes/androidcontrol-cl](https://awesomecua.com/zh/resources/url-461e9b8305356347077e/) — Date not recorded
  AndroidControl-CL provides Android GUI screenshot trajectories and structured training and evaluation data for continual GUI learning.
- [SATraj-OS](https://awesomecua.com/zh/resources/url-73b9b17648ea7af7aa8f/) — Date not recorded
  Desktop computer-use trajectories with per-step screenshots and success, safety and attack labels, split into capability runs, safe-completion and refusal runs, and a legacy RiOSWorld-derived safety archive.
- [sharryXR/asil-training-data](https://awesomecua.com/zh/resources/url-e9423bcf01a8d6b078bc/) — Date not recorded
  Training data for ASIL agents includes replayed action traces, guided supervision, and an evaluator-backed reinforcement-learning curriculum in JSONL and Parquet splits.
- [ShowUI-π training data](https://awesomecua.com/zh/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [TimeWarp-GPT5-Traces](https://awesomecua.com/zh/resources/url-fa8fd2873571ab1b3556/) — Date not recorded
  GPT-5 teacher trajectories on the TimeWarp web benchmark, grouped by UI version, with SoM-annotated screenshots for each step and experiment logs, used to fine-tune web agents with LlamaFactory.
- [UI-Genie trajectory data](https://awesomecua.com/zh/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [Uni-GUI-Desktop-1](https://awesomecua.com/zh/resources/url-20f7cdee10b0dd70815f/) — Date not recorded
  Desktop trajectories from the UI-MOPD training data, collected in OSWorld environments: 2,685 tasks across 10 app categories with step screenshots, reasoning traces, normalized actions and pyautogui code.
- [Uni-GUI-Mobile](https://awesomecua.com/zh/resources/url-93278fa5b9e6bd0cbcef/) — Date not recorded
  Self-collected phone trajectories from the UI-MOPD training data: 871 tasks across 10 app categories, each with step screenshots, reasoning traces, normalized tap, swipe and type actions, and adb commands.
- [Uni-GUI-OpenMobile](https://awesomecua.com/zh/resources/url-66a0adb854eff694965d/) — Date not recorded
  Android trajectories on 19 open-source apps from the UI-MOPD training data, collected via AndroidWorld: 2,640 tasks with step screenshots, reasoning traces and normalized click, swipe, type and answer actions.
- [VideoCAD data](https://awesomecua.com/zh/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.
- [VideoCUA](https://awesomecua.com/zh/resources/url-78adf6919bdbce42bc24/) — Date not recorded
  Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.
- [WebArena-Infinity browser agent trajectories](https://awesomecua.com/zh/resources/url-ccac8d260d6d1d330bf5/) — Date not recorded
  Passing runs of three browser agents on 13 WebArena-Infinity web apps generated from product documentation, with per-step reasoning, actions, screenshots and programmatic verifier results.
- [WebChain v2](https://awesomecua.com/zh/resources/url-56f08987cc19b82dc607/) — Date not recorded
  Cleaned v2 release of WebChain's human web trajectories, packaged as trajectory-level and Seed-style sliding-window SFT Parquet with aligned screenshots, plus action metadata and a 150-trace evaluation subset.
- [WebEvolver SFT data](https://awesomecua.com/zh/resources/url-e126bbd9729ebdaf05ab/) — Date not recorded
  Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

## 模型

- [AgentTrek-1.0-32B](https://awesomecua.com/zh/resources/url-c3ab0f006a880174e645/) — Date not recorded
  A web-agent checkpoint fine-tuned from Qwen2.5-32B-Instruct using the AgentTrek trajectory-synthesis project. The release includes model weights.
- [asil-qwen35-9b-sft](https://awesomecua.com/zh/resources/url-9960d240939244c3edaa/) — Date not recorded
  An ASIL supervised fine-tuning checkpoint for an application-control approach based on structured state and semantic actions, released with loadable model weights.
- [DeskMind Brain](https://awesomecua.com/zh/resources/github-deskmind-ai-brain/) — Date not recorded
  DeskMind Brain provides local models that choose the next macOS desktop action and return probabilities for typed decisions about targets and task completion.
- [espetro/htlm-lfm2.5-350m](https://awesomecua.com/zh/resources/url-df38112df002157ce4b0/) — Date not recorded
  A fine-tuned LFM2.5-350M model that selects click, type, or select actions from an instruction and indexed web elements, with a GGUF file for browser inference.
- [Go-Browse WebArena Qwen 7B](https://awesomecua.com/zh/resources/url-db1b7b7efe3755ae5693/) — Date not recorded
  A Qwen-2.5-7B-Instruct checkpoint fine-tuned on Go-Browse WebArena trajectories for website task execution.
- [Llama-3-8B-Web](https://awesomecua.com/zh/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [Llama8b-NNetNav-WA](https://awesomecua.com/zh/resources/url-c9d2a9288a568db12bd1/) — Date not recorded
  A Llama checkpoint trained on demonstrations gathered through WebArena exploration. It takes a task instruction and selects browser actions to navigate webpages.
- [lumos_unified_plan_iterative-13B](https://awesomecua.com/zh/resources/url-eb6a5940793aa81153d0/) — Date not recorded
  A Lumos planning checkpoint fine-tuned on web-agent, question-answering, multimodal and math tasks within a modular agent system.
- [nnetnav-wa-qwen-7B](https://awesomecua.com/zh/resources/url-511ba336435d406f3761/) — Date not recorded
  Qwen-2.5-7B-Instruct fine-tuned on the NNetNav-WA WebArena trajectories, released by the Go-Browse project as its NNetNav-7B comparison model for WebArena web navigation.
- [OpenMobile-8B](https://awesomecua.com/zh/resources/url-6616228d4f267363458e/) — Date not recorded
  Mobile agent checkpoint with a Qwen3-VL architecture, released with OpenMobile and fine-tuned on its synthesized Android trajectories; the code README serves it with vLLM for AndroidWorld evaluation.
- [OpenWebVoyager-opt-1](https://awesomecua.com/zh/resources/url-bd293c9a5f9bf16b8199/) — Date not recorded
  OpenWebVoyager checkpoint after the first exploration-feedback-optimization round: the imitation-learned multimodal web agent further trained on successful real-website trajectories judged by GPT-4o.
- [OpenWebVoyager-opt-2](https://awesomecua.com/zh/resources/url-f4f6f5bfe051e6ba3d94/) — Date not recorded
  The second optimization-iteration checkpoint of OpenWebVoyager, an idefics2-8b multimodal web agent trained by imitation learning and then refined on successful real-website trajectories kept by GPT-4o feedback.
- [OpenWebVoyager-opt-3](https://awesomecua.com/zh/resources/url-2cd89755e4e2511de633/) — Date not recorded
  Third optimization-stage checkpoint of OpenWebVoyager, an Idefics2-based multimodal web agent trained by imitation learning and then refined on successful self-explored trajectories judged by GPT-4o.
- [OpenWebVoyager/OpenWebVoyager-IL](https://awesomecua.com/zh/resources/url-725f9a8225f0f9c40d93/) — Date not recorded
  An Idefics2-based multimodal web-agent checkpoint trained by imitation learning on trajectories collected with a web-agent framework.
- [OS-Genesis 4B AC](https://awesomecua.com/zh/resources/url-b1837823421bd08cb826/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidControl trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 4B AW](https://awesomecua.com/zh/resources/url-a2362e23fdcbc73763e6/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidWorld trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 4B WA](https://awesomecua.com/zh/resources/url-807dadc7dc4ba995bbbe/) — Date not recorded
  The WebArena-oriented InternVL2-4B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.
- [OS-Genesis 7B AC](https://awesomecua.com/zh/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [OS-Genesis 7B AW](https://awesomecua.com/zh/resources/url-7afa17db925828d9a035/) — Date not recorded
  The AndroidWorld-oriented Qwen2-VL checkpoint trained on mobile trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and screen.
- [OS-Genesis 7B WA](https://awesomecua.com/zh/resources/url-93c98e3b5aea945e0877/) — Date not recorded
  The WebArena-oriented Qwen2-VL-7B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.
- [OS-Genesis 8B AC](https://awesomecua.com/zh/resources/url-2be7f81cdca0eb8566c6/) — Date not recorded
  AndroidControl-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [OS-Genesis 8B AW](https://awesomecua.com/zh/resources/url-2eaf614de14193997f33/) — Date not recorded
  AndroidWorld-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [OS-Genesis 8B WA](https://awesomecua.com/zh/resources/url-f2c34526651f5f57cf98/) — Date not recorded
  WebArena-oriented InternVL2-8B checkpoint trained on web trajectories from OS-Genesis reverse task synthesis; the card's example prompt pairs a screenshot and accessibility tree with the instruction and action history.
- [PC-Agent-E checkpoint](https://awesomecua.com/zh/resources/url-04aa7569d183379d615c/) — Date not recorded
  Computer-use checkpoint fine-tuned on PC-Agent-E trajectories; the model-card prose identifies Qwen2.5-VL-72B-Instruct as its starting model.
- [PlayJev-0.8B](https://awesomecua.com/zh/resources/url-b6a26f1b74d70fc783da/) — Date not recorded
  A 0.8B checkpoint fine-tuned from Qwen3.5-0.8B-Base that picks a move in ten browser games from one rendered frame and an option list, trained by behaviour cloning and three DAgger rounds.
- [Qwen3-8B-FormFactory-SFT-LoRA](https://awesomecua.com/zh/resources/url-994d4cf27b0931fb53e3/) — Date not recorded
  A Qwen3-8B LoRA adapter fine-tuned on 992 demonstrations for filling web forms in FormFactory, released with instructions for loading it through PEFT.
- [Qwen3.5-4B-Browser-Agent-SFT-FP8](https://awesomecua.com/zh/resources/url-6eda678ca03ea2b10d2d/) — Date not recorded
  An FP8 Qwen3.5-4B checkpoint fine-tuned on browser-agent trajectories with structured actions. Its card provides vLLM serving settings and reports BrowseWebApp-Bench v2 results.
- [SCOPE-SFT-9B](https://awesomecua.com/zh/resources/url-389202404e2653f59838/) — Date not recorded
  A Qwen3.5-9B computer-use checkpoint trained on desktop task demonstrations and safety response trajectories, with reported task and attack-avoidance evaluations.
- [SEAgent-1.0-7B](https://awesomecua.com/zh/resources/url-62688de46b172fb0c746/) — Date not recorded
  Computer-use agent checkpoint from SEAgent, built on UI-TARS-7B-DPO and trained by experiential learning on self-generated OSWorld software tasks; the paper reports 34.5% success on five novel applications.
- [STEVE-R1-7B-SFT](https://awesomecua.com/zh/resources/url-666844c28be1138b0e37/) — Date not recorded
  STEVE-R1-7B-SFT is a released computer-use checkpoint trained with step-verified data for desktop agent tasks and evaluated on Windows and Ubuntu environments.
- [tti_webarena](https://awesomecua.com/zh/resources/url-a1621345ec327462b86e/) — Date not recorded
  TTI-WebArena checkpoint from the Test-Time Interaction work, a multimodal web agent trained with online filtered behavior cloning on WebArena tasks and set in the TTI evaluation configs.
- [UI-Act model](https://awesomecua.com/zh/resources/github-tobiasnorlund-ui-act-model/) — Date not recorded
  2023 GUI agent model: a text-conditioned encoder-decoder Transformer that reads full-screen captures through a convolutional encoder and predicts left clicks on a 4-pixel grid, demonstrated on GNOME Calculator.
- [UI-Genie Agent 3B](https://awesomecua.com/zh/resources/url-43d811a5957d8effb7ed/) — Date not recorded
  A Qwen2.5-VL-3B mobile GUI action model fine-tuned on AndroidControl, AMEX, AndroidLab and UI-Genie synthetic trajectories to predict app launches, taps, swipes, typing and system-button presses.
- [UI-Genie Agent 7B](https://awesomecua.com/zh/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.
- [UI-Voyager](https://awesomecua.com/zh/resources/url-e2ddf502803f46085aca/) — Date not recorded
  A released mobile GUI agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct to operate device interfaces, with AndroidWorld evaluation instructions.
- [WebGenAgent-LM-7B-SFT](https://awesomecua.com/zh/resources/url-1ff9a17a7d0802a71b1a/) — Date not recorded
  The 7B supervised fine-tuned checkpoint of WebGen-Agent, which writes website code from instructions and refines it with screenshot critiques and GUI-agent functional tests.
- [WebGenAgent-LM-8B-SFT](https://awesomecua.com/zh/resources/url-b3dd615ebfe977392f90/) — Date not recorded
  The 8B supervised fine-tuned checkpoint of WebGen-Agent, which writes website code from instructions and refines it with screenshot critiques and GUI-agent functional tests.

## 工程与产业

- [Ace](https://awesomecua.com/zh/resources/url-7a35f44787f99834f13e/) — Date not recorded
  General Agents' desktop autopilot, trained on recorded expert behavior, that predicts clicks, keystrokes and other actions from screenshots; its API client ships a macOS controller that executes them.
- [Agent Lumos](https://awesomecua.com/zh/resources/github-allenai-lumos/) — Date not recorded
  Agent Lumos provides unified training data and modular planning and grounding architectures for open-source language and web agents.
- [Android-Skill-Agent](https://awesomecua.com/zh/resources/github-xiru0834-eng-android-skill-agent/) — Date not recorded
  Android-Skill-Agent extracts demonstration-guided, parameterized operational skills with accessibility-tree verification for Android apps.
- [Apprentice](https://awesomecua.com/zh/resources/github-bluzername-apprentice/) — Date not recorded
  Apprentice is a local-first macOS agent that observes repeated user routines across allowlisted apps and replays them with click-by-click approval.
- [Automata](https://awesomecua.com/zh/resources/github-mindattic-automata/) — Date not recorded
  Record-once, replay-many browser automation runtime for Windows that records live user actions into deterministic workflows.
- [Avenir-Web](https://awesomecua.com/zh/resources/github-princeton-ai2-lab-avenir-web/) — Date not recorded
  Avenir-Web trains human-experience-imitating multimodal web agents with mixture-of-grounding experts and experience-tracking memory.
- [Browser Agent Recorder](https://awesomecua.com/zh/resources/github-velvetabyss-browser-agent-recorder/) — Date not recorded
  Records human browser workflows and exports them as both human-readable SOP documents and machine-readable Agent Skill Packs.
- [clirec](https://awesomecua.com/zh/resources/github-ellmos-ai-clirec/) — Date not recorded
  Records human GUI demonstrations into human-readable, diffable CLI transcripts for training and prompting computer-use agents.
- [CloudCrew Understudy](https://awesomecua.com/zh/resources/github-cloudcrewatwork-understudy/) — Date not recorded
  Records human UI workflows once and compiles them into parameterized, editable replay scripts for computer-use agents.
- [dsh-record-replay](https://awesomecua.com/zh/resources/github-humblebanana-dsh-record-replay/) — Date not recorded
  DeepSeek Harness plugin that records macOS desktop demonstrations via Open Record/Replay and compiles them into agent skills.
- [DuckTrack](https://awesomecua.com/zh/resources/github-theduckai-ducktrack/) — Date not recorded
  DuckTrack records synchronized screen video and low-level mouse and keyboard events for building multimodal computer-interaction datasets.
- [ECLAIR](https://awesomecua.com/zh/resources/github-hazyresearch-eclair-agents/) — Date not recorded
  ECLAIR automates enterprise web and desktop workflows from human demonstrations with ground-truth SOP validation and step-level error recovery.
- [ETO (Exploration-Based Trajectory Optimization)](https://awesomecua.com/zh/resources/github-yifan-song793-eto/) — Date not recorded
  ETO trains LLM agents on WebShop, ScienceWorld, and ALFWorld by contrasting failed exploration trajectories against expert demonstrations.
- [Explorer](https://awesomecua.com/zh/resources/github-osu-nlp-group-explorer/) — Date not recorded
  Explorer synthesizes large-scale multimodal web trajectories through autonomous bottom-up web exploration for training GUI web agents.
- [Go-Browse](https://awesomecua.com/zh/resources/github-apga-go-browse/) — Date not recorded
  Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.
- [GUI Reflection](https://awesomecua.com/zh/resources/github-penghao-wu-gui-reflection/) — Date not recorded
  GUI Reflection provides agent code that predicts GUI actions from a screen image and task goal, alongside scripts for evaluation and supervised training.
- [GUI-CIDER research code](https://awesomecua.com/zh/resources/github-wuzheng02-gui-cider/) — Date not recorded
  Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.
- [GUIPivot](https://awesomecua.com/zh/resources/github-zrw00-guipivot/) — Date not recorded
  Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.
- [hands-off](https://awesomecua.com/zh/resources/github-niramay-kelkar-hands-off/) — Date not recorded
  hands-off discovers UI workflows in legacy back-office software without APIs and compiles them into deterministic replay scripts.
- [Humanoid](https://awesomecua.com/zh/resources/github-yzygitzh-humanoid/) — Date not recorded
  Android app exploration component that uses a model learned from human usage traces to rank the input events proposed by DroidBot.
- [InSTA](https://awesomecua.com/zh/resources/github-data-for-agents-insta/) — Date not recorded
  Code for a web-agent training pipeline that generates website tasks, collects browser trajectories and filters them by judged success. It also serves an agent in a virtual browser.
- [Intent Relay WebMCP](https://awesomecua.com/zh/resources/github-midorikuramochi-intent-relay/) — Date not recorded
  Demonstration-driven intent translator that carries user workflow preferences across WebMCP-enabled websites.
- [LearnAct](https://awesomecua.com/zh/resources/github-lgy0404-learnact/) — Date not recorded
  Released inference and evaluation code for demonstration-conditioned mobile GUI agents on LearnGUI-Offline. The repository describes a multi-agent adaptation method and links the LearnGUI demonstrations.
- [Maestro (AI-Drivable RPA)](https://awesomecua.com/zh/resources/github-rexchengm-maestro/) — Date not recorded
  Records a desktop or browser task once and lets AI optimize, parameterize, and replay it as a deterministic RPA workflow.
- [MemGUI-Agent](https://awesomecua.com/zh/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [Neo Lab](https://awesomecua.com/zh/resources/github-belarusian-neo-lab/) — Date not recorded
  Neo Lab is a macOS computer-use sandbox for recording demonstrations, replaying skills, and testing GUI automation plans.
- [Open Record/Replay](https://awesomecua.com/zh/resources/github-humblebanana-open-record-replay/) — Date not recorded
  Open Record/Replay records macOS user demonstrations with Accessibility metadata and compiles them into reusable agent skills.
- [openadapt-ml](https://awesomecua.com/zh/resources/github-openadaptai-openadapt-ml/) — Date not recorded
  A Python research package for GUI-action models, with trajectory schemas, model adapters, fine-tuning, grounding, and a policy interface for predicting the next action.
- [OpenMobile code](https://awesomecua.com/zh/resources/github-njucckevin-openmobile-code/) — Date not recorded
  OpenMobile pipeline for AndroidWorld: random-walk exploration, memory-based task-instruction synthesis, learner/expert policy-switching rollouts, conversion to LLaMA-Factory SFT data, and AndroidWorld evaluation.
- [OpenWebVoyager](https://awesomecua.com/zh/resources/github-minorjerry-openwebvoyager/) — Date not recorded
  OpenWebVoyager trains multimodal web navigation agents through iterative real-world web exploration, feedback verification, and trajectory tuning.
- [Operant](https://awesomecua.com/zh/resources/github-alpharomerojl-operant/) — Date not recorded
  Local-first desktop agent runtime that compiles exploratory AI trajectories into deterministic, invariant-gated skills.
- [OysterWorkflow](https://awesomecua.com/zh/resources/github-shuxinyang111-oysterworkflow/) — Date not recorded
  OysterWorkflow captures real human computer work and extracts structured, reusable workflow graphs for AI agents.
- [PC-Agent-E training and deployment](https://awesomecua.com/zh/resources/github-gair-nlp-pc-agent-e/) — Date not recorded
  Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.
- [Pix2Act](https://awesomecua.com/zh/resources/github-google-deepmind-pix2act/) — Date not recorded
  Pix2Act provides JAX/T5X training and evaluation code for pixel-only GUI agents on MiniWoB++ using behavioral cloning and tree search.
- [PlayJev](https://awesomecua.com/zh/resources/github-omnijev-playjev/) — Date not recorded
  A browser-game agent that selects moves from rendered frames. Its repository provides game environments, a demo, and scripts for training and evaluation.
- [Protean](https://awesomecua.com/zh/resources/github-aibrain-mnemis-protean/) — Date not recorded
  Protean turns everyday human desktop and browser demonstrations into reusable, adaptive agent skills.
- [record-and-replay-skill](https://awesomecua.com/zh/resources/github-ugarchance-record-and-replay-skill/) — Date not recorded
  Agent-agnostic skill that watches a user demonstrate a browser or desktop workflow once and compiles it into a replayable script.
- [Replay (Teach-by-Demonstration)](https://awesomecua.com/zh/resources/github-misb74-replay/) — Date not recorded
  Converts human screen demonstrations of real desktop and web work into verifiable, repeatable AI agent workflows.
- [RishabhP1508 Understudy](https://awesomecua.com/zh/resources/github-rishabhp1508-understudy/) — Date not recorded
  Records a single LLM-driven exploration of a legacy UI into a typed capability artifact for deterministic zero-LLM replay.
- [ScribeAgent](https://awesomecua.com/zh/resources/github-colonylabs-scribeagent/) — Date not recorded
  ScribeAgent trains web agents from recorded workflows represented with page HTML and prior actions. The repository provides preprocessing, fine-tuning, and evaluation code.
- [Smol2Operator](https://awesomecua.com/zh/resources/github-huggingface-smol2operator/) — Date not recorded
  Hugging Face recipe that converts Aguvis GUI data into one normalized action space and fine-tunes SmolVLM2-2.2B in two phases, first for screenshot grounding and then for agentic GUI action code.
- [Synapse](https://awesomecua.com/zh/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [Taprun (tap)](https://awesomecua.com/zh/resources/github-leonting1010-tap/) — Date not recorded
  Captures a logged-in browser task demonstration once and compiles it into a deterministic zero-token replay skill.
- [TeachReplay](https://awesomecua.com/zh/resources/github-ottohere-mourn-teachreplay/) — Date not recorded
  TeachReplay is a harness-agnostic teach-by-demonstration engine that records human UI workflows and compiles them into parameterized skills.
- [TongUI training and inference framework](https://awesomecua.com/zh/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [UI-Genie](https://awesomecua.com/zh/resources/github-euphoria16-ui-genie/) — Date not recorded
  Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.
- [UI-Mate](https://awesomecua.com/zh/resources/github-tencent-ui-mate/) — Date not recorded
  UI-Mate is a desktop GUI agent that uses screenshots and keyboard and mouse actions for tasks across applications. It also supports workflows learned from recorded demonstrations.
- [Understudy](https://awesomecua.com/zh/resources/github-understudy-ai-understudy/) — Date not recorded
  Understudy observes human desktop and browser demonstrations and compiles them into parameterized, replayable computer-use skills.
- [VideoCAD training and evaluation code](https://awesomecua.com/zh/resources/github-ghadinehme-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.
- [WebLlama](https://awesomecua.com/zh/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
- [WinDOM code](https://awesomecua.com/zh/resources/github-chenghengli-windom/) — Date not recorded
  GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.
- [Windows Local Action Recorder](https://awesomecua.com/zh/resources/github-week833-windows-local-action-recorder/) — Date not recorded
  Windows desktop action recorder and controlled replay tool that packages human UI demonstrations for Codex agents.
- [Zhaozuo (照做)](https://awesomecua.com/zh/resources/github-dongsheng123132-zhaozuo/) — Date not recorded
  Demonstration-driven Windows desktop automation framework compatible with the ActionParity protocol for third-party GUI software.
