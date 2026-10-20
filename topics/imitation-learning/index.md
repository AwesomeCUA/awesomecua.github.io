# Imitation learning

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/imitation-learning/records.jsonl

## Papers & surveys

- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.github.io/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.github.io/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation](https://awesomecua.github.io/resources/arxiv-2607-29320/) — 2026-07-31
  MAGA distills specialized GUI agents into one policy by allocating supervision according to structured-action correctness rather than treating all response tokens equally. A training-only teacher hint supports fusion across mobile, web and desktop settings without changing student inputs.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://awesomecua.github.io/resources/arxiv-2606-27330/) — 2026-06-25
  PEEU explores web environments and turns hindsight experience into aligned high-level planning supervision. A hierarchical task-decomposition analysis examines why atomic-skill competence alone does not ensure planning generalization across websites.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.github.io/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [Skill-Guided Continuation Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-18890/) — 2026-06-17
  Skill-Guided Continuation Distillation first lets a policy reach its own off-trajectory states, then uses skill guidance to collect successful continuations. Mixing those continuations with expert traces supplies supervision for recovery states absent from demonstrations.
- [Trust the Right Teacher: Quality-Aware Self-Distillation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-18101/) — 2026-06-16
  Proposes quality-aware self-distillation for GUI coordinate generation under student-produced prefixes. A correctness-aware gate suppresses coordinate-token supervision that cannot reach the target box, while teacher-probability scaling adjusts the remaining signal strength.
- [ProCUA-SFT Technical Report](https://awesomecua.github.io/resources/arxiv-2606-17321/) — 2026-06-15
  ProCUA-SFT generates tasks and synthetic trajectories on live desktops seeded with document content, checking task preconditions before rollout. The resulting step-prefix examples are formatted to match inference context and used for supervised GUI-agent fine-tuning.
- [Speculative Rollback Correction for Quality-Diverse Web Agent Imitation](https://awesomecua.github.io/resources/arxiv-2606-12485/) — 2026-06-10
  Speculative Rollback Correction lets a student web agent execute short branches before teacher review localizes harmful deviations. Verified continuations and localized corrections feed supervised training while an archive retains diverse successful solutions.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.github.io/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2605-12481/) — 2026-05-12
  ToolCUA synthesizes interleaved GUI/tool trajectories and trains agents to choose between graphical actions and higher-level tools. Staged supervised and reinforcement learning culminate in online hybrid-environment training with a reward for efficient execution paths.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [AutoSurfer -- Teaching Web Agents through Comprehensive Surfing, Learning, and Modeling](https://awesomecua.github.io/resources/arxiv-2604-27253/) — 2026-04-29
  AutoSurfer explores website actions breadth-first, retaining page and trajectory knowledge to guide task synthesis and trajectory refinement. It evaluates the resulting training data by fine-tuning a web agent on WebArena and examining synthesized-task diversity.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.github.io/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [EE-MCP: Self-Evolving MCP-GUI Agents via Automated Environment Generation and Experience Learning](https://awesomecua.github.io/resources/arxiv-2604-09815/) — 2026-04-10
  EE-MCP studies application-dependent mixtures of GUI actions and MCP calls using generated environments, trajectory collection and filtered training. An experience bank extracts rules from trajectory comparisons for inference-time improvement, distinct from model distillation.
- [MolmoWeb: Open Visual Web Agent and Open Data for the Open Web](https://awesomecua.github.io/resources/arxiv-2604-08516/) — 2026-04-09
  Presents MolmoWebMix, combining synthetic browser trajectories, human demonstrations and GUI perception data, and MolmoWeb screenshot-to-action policies trained from it. Browser benchmarks also test parallel rollouts with best-of-N selection.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.github.io/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](https://awesomecua.github.io/resources/arxiv-2512-10962/) — 2025-11-22
  Introduces a pipeline that filters individual steps from noisy computer-agent rollouts and augments them with reasoning for training. WebSTAR and WebSCORE support GUI-policy supervision and a distilled process reward model, StepRM.
- [SynthAgent: Adapting Web Agents with Synthetic Supervision](https://awesomecua.github.io/resources/arxiv-2511-06101/) — 2025-11-08
  Introduces SynthAgent, which generates tasks by exploring website elements and refines them when observations reveal conflicts. A later trajectory-refinement stage removes misaligned behavior before fine-tuning agents for the target websites.
- [BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://awesomecua.github.io/resources/arxiv-2510-10666/) — 2025-10-12
  Trains BrowserAgent to use Playwright-based scrolling, clicking and typing directly on webpages for information-seeking tasks. Supervised and rejection fine-tuning are paired with explicit memory for conclusions carried across steps.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.github.io/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [OmniActor: A Generalist GUI and Embodied Agent for 2D&3D Worlds](https://awesomecua.github.io/resources/arxiv-2509-02322/) — 2025-09-02
  Introduces OmniActor, which shares shallow model layers while separating deeper parameters to train jointly on GUI and embodied interactions. A unified action representation and mixed training data support evaluation in both task families.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.github.io/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.github.io/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.github.io/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-15637/) — 2024-09-24
  Synatra converts indirect procedural knowledge, including human-oriented tutorials, into direct demonstrations for digital agents. It trains a 7B CodeLlama on 100,000 synthesized demonstrations and evaluates the resulting policy on Mind2Web, MiniWoB++, and WebArena.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.github.io/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.github.io/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [Interactive Task and Concept Learning from Natural Language Instructions and GUI Demonstrations](https://awesomecua.github.io/resources/arxiv-1909-00031/) — 2019-08-30
  Introduces PUMICE, an agent that learns mobile-app procedures and conditional concepts through natural-language conversation and GUI demonstrations, recursively resolving ambiguous instructions with users.

## Benchmarks

- [FedMABench](https://awesomecua.github.io/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.

## Datasets

- [AgentSynth tasks and trajectories](https://awesomecua.github.io/resources/url-58a209f2b3b970916396/) — Date not recorded
  Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.
- [AutoDroid V2 training data](https://awesomecua.github.io/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [Go-Browse-WA processed data](https://awesomecua.github.io/resources/url-a13a187bc058fbb4f6af/) — Date not recorded
  Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.
- [GUI-CIDER causal knowledge data](https://awesomecua.github.io/resources/url-d0300db5ba754b1a64fa/) — Date not recorded
  A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.
- [GUI-Net-1M](https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUIMid training data](https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [MONDAY annotations](https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MT-Mind2Web](https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.
- [OS-Genesis mobile training data](https://awesomecua.github.io/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [PC-Agent-E training data](https://awesomecua.github.io/resources/url-14449fe321e0a1ca34ea/) — Date not recorded
  Released dataset used to train PC-Agent-E, linked by the official pipeline for refining human trajectories and synthesizing action reasoning.
- [ShowUI-π training data](https://awesomecua.github.io/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [UI-Genie trajectory data](https://awesomecua.github.io/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [VideoCAD data](https://awesomecua.github.io/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.
- [WebEvolver SFT data](https://awesomecua.github.io/resources/url-e126bbd9729ebdaf05ab/) — Date not recorded
  Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

## Models

- [Go-Browse WebArena Qwen 7B](https://awesomecua.github.io/resources/url-db1b7b7efe3755ae5693/) — Date not recorded
  A Qwen-2.5-7B-Instruct checkpoint fine-tuned on Go-Browse WebArena trajectories for website task execution.
- [Llama-3-8B-Web](https://awesomecua.github.io/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [OS-Genesis 7B AC](https://awesomecua.github.io/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [PC-Agent-E checkpoint](https://awesomecua.github.io/resources/url-04aa7569d183379d615c/) — Date not recorded
  Computer-use checkpoint fine-tuned on PC-Agent-E trajectories; the model-card prose identifies Qwen2.5-VL-72B-Instruct as its starting model.
- [UI-Genie Agent 7B](https://awesomecua.github.io/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.

## Engineering & industry

- [Go-Browse](https://awesomecua.github.io/resources/github-apga-go-browse/) — Date not recorded
  Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.
- [GUI-CIDER research code](https://awesomecua.github.io/resources/github-wuzheng02-gui-cider/) — Date not recorded
  Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.
- [GUIPivot](https://awesomecua.github.io/resources/github-zrw00-guipivot/) — Date not recorded
  Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.
- [LearnAct](https://awesomecua.github.io/resources/github-lgy0404-learnact/) — Date not recorded
  Released inference and evaluation code for demonstration-conditioned mobile GUI agents on LearnGUI-Offline. The repository describes a multi-agent adaptation method and links the LearnGUI demonstrations.
- [MemGUI-Agent](https://awesomecua.github.io/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [PC-Agent-E training and deployment](https://awesomecua.github.io/resources/github-gair-nlp-pc-agent-e/) — Date not recorded
  Tools for refining and augmenting human computer-use trajectories, preparing supervised training data, and deploying a native PC-Agent-E scaffold.
- [Synapse](https://awesomecua.github.io/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [TongUI training and inference framework](https://awesomecua.github.io/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [UI-Genie](https://awesomecua.github.io/resources/github-euphoria16-ui-genie/) — Date not recorded
  Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.
- [VideoCAD training and evaluation code](https://awesomecua.github.io/resources/github-ghadinehme-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.
- [WebLlama](https://awesomecua.github.io/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
