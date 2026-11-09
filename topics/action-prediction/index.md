# Action prediction

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/action-prediction/records.jsonl

## Papers & surveys

- [Visual Token Routing: Learning to keep tokens that matter](https://awesomecua.com/resources/arxiv-2611-06854/) — 2026-11-04
  Introduces Visual Token Routing (VTR), which selects visual tokens from current and earlier screenshots to reduce computer-use agent inference cost while retaining action-relevant information.
- [MAGAR: Multimodal Agents for GUI-Based 3D Mechanical Assembly and Minimal Rework](https://awesomecua.com/resources/arxiv-2611-02472/) — 2026-11-02
  Introduces MAGAR-Bench for GUI-based 3D mechanical assembly decisions and recovery, and MAGAR, a selective correction method for assembly outputs and actions.
- [Where to Learn and How Far to Roll Out: Efficient Adaptive Training for GUI Agents](https://awesomecua.com/resources/arxiv-2610-39251/) — 2026-10-29
  Introduces a two-stage GUI-agent RL framework that selects uncertain action checkpoints and expands rollout length as training progresses.
- [GUI-JEPA: Candidate-Conditioned JEPA Latents as a Fast Action Policy for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2610-36877/) — 2026-10-27
  Introduces GUI-JEPA, a mobile GUI policy that scores candidate actions from screenshot latents in a batched pass without decoding action text.
- [HobbyLM: A Sparse Mixture-of-Experts Model Family on a Hobby Budget](https://awesomecua.com/resources/arxiv-2610-34582/) — 2026-10-25
  Describes HobbyLM, a small model family whose post-trained variants include a computer-use agent and an on-device macOS computer-use adapter.
- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.com/resources/arxiv-2610-24372/) — 2026-10-17
  Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.
- [Co-Evolving Acting and Forecasting for Language Agents](https://awesomecua.com/resources/arxiv-2610-20597/) — 2026-10-14
  Introduces CoPE, which trains language agents to forecast later actions from earlier histories during RL; WebShop is one of five evaluation benchmarks.
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://awesomecua.com/resources/arxiv-2610-13092/) — 2026-10-09
  Evaluates Jev as a bounded action selector inside three AndroidWorld agents and two text-based ALFWorld agents, separating decision savings from task success, recovery and resources per delivered outcome.
- [ReSAIL: Mitigating Collapse in Iterative Agent Self-Distillation](https://awesomecua.com/resources/arxiv-2609-39306/) — 2026-09-30
  Introduces ReSAIL, an augmentation for iterative agent self-distillation that selects informative interaction steps; it also tests GUI-agent action prediction.
- [SimTrace: Grounded Multimodal User Trajectories Generation for Online User Modeling](https://awesomecua.com/resources/arxiv-2609-38397/) — 2026-09-29
  Introduces SimTrace, a framework that generates synthetic multimodal web clickstreams by pairing a computer-use client agent's actions with web observations and user context.
- [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](https://awesomecua.com/resources/arxiv-2609-32511/) — 2026-09-26
  ShareMem consolidates reusable experience across users while keeping preference retrieval user-bound; its web evaluation predicts target elements and actions on recorded Mind2Web states.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.com/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.com/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [GameWAM: A World Action Model for Video Games](https://awesomecua.com/resources/arxiv-2608-26200/) — 2026-08-25
  Introduces GameWAM, a model for native game play and GUI control that predicts future visuals and keyboard-mouse actions from synchronized gameplay and GUI trajectories.
- [Beyond Success and Failure: Length-Aware Contrastive Learning for GUI Agents](https://awesomecua.com/resources/arxiv-2608-21830/) — 2026-08-22
  Introduces LACL-GUI, a contrastive learning objective that distinguishes trajectory quality within both successful and failed GUI executions. It favors concise successes and uses divergence from successful trajectories to differentiate failures during policy optimization.
- [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](https://awesomecua.com/resources/arxiv-2608-11191/) — 2026-08-11
  Introduces a Test-Time Self-Evolving framework for GUI grounding that explores unseen interfaces, reflects on predicted coordinates, and distills those reflections into the model.
- [SkillLens: Visual Skill Cards for Retrieval-Augmented GUI Action Prediction and On-Policy Distillation](https://awesomecua.com/resources/arxiv-2608-10775/) — 2026-08-11
  Introduces SkillLens visual skill cards for retrieved GUI action guidance and CardDistill for training an action-prediction student that runs without retrieval on website tasks.
- [Scaling GUI Agents with Visual State Transitions](https://awesomecua.com/resources/arxiv-2607-24112/) — 2026-07-27
  Introduces State Transition Pretraining, which jointly learns to infer actions from GUI changes and predict future states from current screens and actions. Subsequent instruction-trajectory fine-tuning tests whether these representations transfer to desktop and mobile agent tasks.
- [EvoGUI: An Evolution-Aware Benchmark for GUI State-Transition Understanding](https://awesomecua.com/resources/arxiv-2607-17050/) — 2026-07-19
  Introduces EvoGUI, which derives temporal ordering, inverse action/value prediction, and successor-discrimination probes from recorded GUI trajectories. Its web-derived benchmark isolates transition understanding from the other abilities involved in end-to-end task success.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.com/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.com/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [A Benchmark and Framework for Evaluating Next Action Predictions in Spreadsheets](https://awesomecua.com/resources/arxiv-2606-13802/) — 2026-06-11
  Introduces a benchmark and online evaluation method for predicting the next spreadsheet action from a user's action history, using curated action sequences.
- [MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models](https://awesomecua.com/resources/arxiv-2606-04627/) — 2026-06-03
  Introduces MIRAGE, which trains mobile app agents to reason in compact latent states and anticipate future screenshots, reducing generated tokens during action selection.
- [Learn from Weaknesses: Automated Domain Specialization for Small Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-28775/) — 2026-05-27
  LearnWeak specializes small computer-use agents by finding domain-specific weaknesses, generating targeted tasks, and training separately for planning and execution errors.
- [Mobile-Aptus: Confidence-Driven Proactive and Robust Interaction in MLLM-based Mobile-Using Agents](https://awesomecua.com/resources/arxiv-2605-28629/) — 2026-05-27
  Mobile-Aptus trains mobile agents to output actions and confidence scores, then corrects confidence bias to guide when they request human help.
- [Beyond Binary: Reframing GUI Critique as Continuous Semantic Alignment](https://awesomecua.com/resources/arxiv-2605-14311/) — 2026-05-14
  BBCritic ranks candidate GUI-agent actions through instruction–action alignment, while BBBench evaluates fine-grained ranking with a hierarchical action taxonomy.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.com/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents](https://awesomecua.com/resources/arxiv-2604-07429/) — 2026-04-08
  Introduces GameWorld, a browser-game benchmark that evaluates multimodal agents through keyboard and mouse controls or semantic actions using outcome checks.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.com/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://awesomecua.com/resources/arxiv-2603-26211/) — 2026-03-27
  Adapts a discrete vision-language diffusion model to single-turn GUI action and bounding-box prediction, using a hybrid masking schedule for coordinate geometry. Experiments across web, desktop and mobile datasets examine grounding accuracy and inference tradeoffs.
- [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](https://awesomecua.com/resources/arxiv-2603-12138/) — 2026-03-12
  Introduces HATS, which directs GUI trajectory exploration toward semantically ambiguous actions and iteratively checks instruction-execution alignment. Feedback from trajectory refinement updates the exploration signal used to collect subsequent training examples.
- [Agentic Critical Training](https://awesomecua.com/resources/arxiv-2603-08706/) — 2026-03-09
  Introduces Agentic Critical Training (ACT), a reinforcement-learning warm-up that teaches general agents to choose expert actions over alternatives, with WebShop among its evaluations.
- [CoME: Empowering Channel-of-Mobile-Experts with Informative Hybrid-Capabilities Reasoning](https://awesomecua.com/resources/arxiv-2602-24142/) — 2026-02-27
  Introduces Channel-of-Mobile-Experts (CoME), a mobile agent with experts for screen summary, subtask planning, action decisions and action functions, trained in stages with InfoGain-Driven DPO (Info-DPO).
- [GUI-Libra: Training Native GUI Agents to Reason and Act with Action-aware Supervision and Partially Verifiable RL](https://awesomecua.com/resources/arxiv-2602-22190/) — 2026-02-25
  GUI-Libra trains GUI agents with action-aware supervision, a curated reasoning dataset and reinforcement learning adapted to partially verifiable actions across web and mobile tasks.
- [ProactiveMobile: A Comprehensive Benchmark for Boosting Proactive Intelligence on Mobile Devices](https://awesomecua.com/resources/arxiv-2602-21858/) — 2026-02-25
  ProactiveMobile benchmarks mobile agents on inferring latent user intent from device context and generating executable sequences from a pool of 63 APIs.
- [Modeling Distinct Human Interaction in Web Agents](https://awesomecua.com/resources/arxiv-2602-17588/) — 2026-02-19
  CowCorpus records interleaved human and agent actions during web navigation and identifies distinct patterns of user intervention. Models trained to anticipate these interventions are integrated into live web agents and assessed in a user study.
- [Computer-Using World Model](https://awesomecua.com/resources/arxiv-2602-17365/) — 2026-02-19
  Presents a desktop world model that predicts textual UI changes before synthesizing the next screenshot. It learns from Microsoft Office transitions and is evaluated by letting a frozen agent compare simulated actions before execution.
- [Where Not to Learn: Prior-Aligned Training with Subset-based Attribution Constraints](https://awesomecua.com/resources/arxiv-2602-07008/) — 2026-01-30
  Proposes training with subset-based attribution constraints so models attend to intended evidence, evaluated on image classification and GUI-agent click decisions.
- [SwipeGen: Bridging the Execution Gap in GUI Agents via Human-like Swipe Synthesis](https://awesomecua.com/resources/arxiv-2601-18305/) — 2026-01-26
  Introduces SwipeGen for synthesizing varied swipe trajectories and SwipeBench for assessing their execution quality. The study examines how richer control of trajectory, speed, and timing changes GUI agents’ interaction performance.
- [See, Think, Act: Online Shopper Behavior Simulation with VLM Agents](https://awesomecua.com/resources/arxiv-2510-19245/) — 2025-10-22
  Studies online shopper action prediction with VLM agents using webpage screenshots, HTML, and action history from OPeRA, trained with SFT and hierarchical RL rewards.
- [Watch and Learn: Learning to Use Computers from Online Videos](https://awesomecua.com/resources/arxiv-2510-04673/) — 2025-10-06
  Introduces Watch & Learn (W&L), which converts human computer-use videos into UI action trajectories by predicting actions between consecutive screen states.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.com/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.com/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [OmniActor: A Generalist GUI and Embodied Agent for 2D&3D Worlds](https://awesomecua.com/resources/arxiv-2509-02322/) — 2025-09-02
  Introduces OmniActor, which shares shallow model layers while separating deeper parameters to train jointly on GUI and embodied interactions. A unified action representation and mixed training data support evaluation in both task families.
- [UITron-Speech: Towards Automated GUI Agents Based on Speech Instructions](https://awesomecua.com/resources/arxiv-2506-11127/) — 2025-06-10
  Introduces UITron-Speech, which predicts GUI actions from spoken instructions and screenshots. It combines synthetic speech data and mixed-modality training with a training-free grounding refinement step.
- [Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents](https://awesomecua.com/resources/url-60a2dc930fa11860858a/) — 2025-05-01
  Trains a separate language model to rewrite lengthy web page observations into focused descriptions for LLM web agents, keeping training targets that let several LLMs predict the correct next action.
- [JARVIS-VLA: Post-Training Large-Scale Vision Language Models to Play Visual Games with Keyboards and Mouse](https://awesomecua.com/resources/arxiv-2503-16365/) — 2025-03-20
  Introduces Act from Visual Language Post-Training, a method for agents that follow instructions in Minecraft through visual input and actions, adjacent to interface operation.
- [Lightweight Neural App Control](https://awesomecua.com/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [MobileVLM: A Vision-Language Model for Better Intra- and Inter-UI Understanding](https://awesomecua.com/resources/arxiv-2409-14818/) — 2024-09-23
  MobileVLM adds two pretraining stages and four UI tasks to learn element detail and relationships between successive screens. Its Mobile3M dataset contains three million Chinese mobile UI pages connected by recorded transition actions.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.com/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [Auto-Formula: Recommend Formulas in Spreadsheets using Contrastive Learning for Table Representations](https://awesomecua.com/resources/arxiv-2404-12608/) — 2024-04-19
  Auto-Formula recommends formulas for target spreadsheet cells by adapting formulas from similar spreadsheets within an organization.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.com/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [MineDreamer: Learning to Follow Instructions via Chain-of-Imagination for Simulated-World Control](https://awesomecua.com/resources/arxiv-2403-12037/) — 2024-03-18
  Introduces MineDreamer, a Minecraft agent that imagines stages of an instruction and turns them into keyboard-and-mouse actions in a simulated world.
- [Scaling Instructable Agents Across Many Simulated Worlds](https://awesomecua.com/resources/arxiv-2404-10179/) — 2024-03-13
  The SIMA project trains agents to follow language instructions in simulated 3D worlds, using images as input and keyboard-and-mouse actions as output.
- [From Pixels to UI Actions: Learning to Follow Instructions via Graphical User Interfaces](https://awesomecua.com/resources/arxiv-2306-00245/) — 2023-05-31
  Studies instruction-following agents that observe screenshots and act through a generic mouse-and-keyboard action space, evaluating pixel-based pretraining for GUI tasks on MiniWoB++.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.com/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.com/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.com/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.

## Benchmarks

- [action-choice-bench](https://awesomecua.com/resources/github-gbesse-action-choice-bench/) — Date not recorded
  action-choice-bench evaluates discrete UI action selection and calibrated abstention on frozen interface states.
- [AndroidDaily](https://awesomecua.com/resources/url-8697c910c05d48152916/) — Date not recorded
  Android GUI benchmark dataset from Step-GUI containing 3,146 static action evaluation items and 235 end-to-end daily mobile tasks.
- [Astra Game Arena](https://awesomecua.com/resources/github-gih10012-astra-game-arena/) — Date not recorded
  Resumable, screen-only computer-use evaluation arena testing whether Codex agents can play locally installed desktop games.
- [decision-luna-browse-control](https://awesomecua.com/resources/github-humanity-forever-decision-luna-browse-control/) — Date not recorded
  Evaluates typed System-One decision models (Luna Decisions and Jev) driving real Chromium browser workflows on synthetic web apps.
- [Embodied Agent Interface (EAI)](https://awesomecua.com/resources/github-embodied-agent-eval-embodied-agent-eval/) — Date not recorded
  Embodied Agent Interface (EAI) benchmarks LLMs across goal interpretation, subgoal decomposition, action sequencing, and transition modeling.
- [GameWorld](https://awesomecua.com/resources/github-gameworld-project-gameworld/) — Date not recorded
  GameWorld provides a standardized browser-based evaluation suite for multimodal game agents across 34 games and 170 verifiable tasks.
- [WebLINX 1.1 (WebLINX-BrowserGym)](https://awesomecua.com/resources/url-77afb3a9b045a157167c/) — Date not recorded
  WebLINX 1.1, a reprocessed release of WebLINX's conversational web-navigation demonstrations packaged as single-step BrowserGym tasks that score one predicted browser action against the recorded turn.

## Datasets

- [GUIrilla-Task](https://awesomecua.com/resources/url-afe8260e6db2617b72ec/) — Date not recorded
  macOS screenshots paired with generated instructions and a ground-truth click or type action on a labelled element, collected by the GUIrilla accessibility-API crawler in app-disjoint train and test splits.
- [META-GUI dataset](https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/) — Date not recorded
  Hub release of META-GUI, task-oriented dialogues in which an agent operates mobile apps: each turn pairs the conversation with screenshots, view-hierarchy XML, recorded GUI actions and a reply.
- [Mind2Web bbox eval (MultiUI)](https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/) — Date not recorded
  Mind2Web steps repackaged by the MultiUI authors as JPEG screenshots with per-step JSONL queries and candidate-element boxes, for MultiUI's screenshot-based Mind2Web action evaluation.
- [Mind2Web data](https://awesomecua.com/resources/url-380a6eedcb4de7778e88/) — Date not recorded
  Hub release of Mind2Web's crowdsourced web-task demonstrations: train-split JSON with raw and cleaned HTML, candidate elements and CLICK/TYPE/SELECT steps, plus a password-protected archive of the three test splits.
- [Multimodal-Mind2Web](https://awesomecua.com/resources/url-66f780b493156dc7efe5/) — Date not recorded
  Mind2Web action steps aligned with the matching webpage screenshot, plus raw and cleaned HTML, candidate elements and the target operation, in a train split and test splits held out by task, website and domain.
- [ShowUI-π training data](https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [UI-R1 3B training data](https://awesomecua.com/resources/url-7c568d88a472f914d316/) — Date not recorded
  The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.
- [VideoCUA](https://awesomecua.com/resources/url-78adf6919bdbce42bc24/) — Date not recorded
  Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.
- [WebLINX dataset](https://awesomecua.com/resources/url-1517e989c470563bd08d/) — Date not recorded
  Hub data of WebLINX 1.0: conversational web-navigation demonstrations preprocessed into per-turn records with dialogue, cleaned HTML, candidate elements and action history, plus reranking data.
- [WildGUI](https://awesomecua.com/resources/url-daf52475338f385b9310/) — Date not recorded
  WildGUI release from Video2GUI: per-task JSONL trajectories mined from Internet tutorial videos, with instructions, plans and grounded actions on web, desktop and mobile, plus screenshot shards for parts 1-15.

## Models

- [ACT-1](https://awesomecua.com/resources/url-f885d17601171253d25e/) — Date not recorded
  Adept's 2022 action transformer, previewed in demo videos of a Chrome extension that reads a custom rendering of the page and clicks, types and scrolls on its UI elements to carry out typed requests.
- [Aria-UI context-aware checkpoint](https://awesomecua.com/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
- [ARPO UI-TARS-1.5-7B checkpoint](https://awesomecua.com/resources/url-db6fc5f29f186d13991c/) — Date not recorded
  UI-TARS-1.5-7B-derived checkpoint trained with ARPO on OSWorld desktop tasks.
- [CogAgent 9B 20241220](https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [CombatVLA](https://awesomecua.com/resources/github-chenvoid-combatvla/) — Date not recorded
  CombatVLA is a vision-language-action model and action tracker for real-time combat control in 3D action role-playing PC games.
- [Gemini 2.5 Computer Use](https://awesomecua.com/resources/url-44827a16f49e65ba8fb3/) — Date not recorded
  Preview Google DeepMind model built on Gemini 2.5 Pro and post-trained for UI control, returning browser and mobile actions from screenshots and recent action history through the Gemini API computer_use tool.
- [GroundingPI](https://awesomecua.com/resources/github-groundingpi-groundingpi/) — Date not recorded
  GroundingPI is a 4B visual grounding foundation model that unifies bounding-box detection, referring expressions, and point localization.
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
- [GUI-Owl 1.5 2B Instruct](https://awesomecua.com/resources/url-0b94b29f2afbfe8a3abb/) — Date not recorded
  Smallest instruct checkpoint of GUI-Owl 1.5, a Qwen3-VL-based native GUI agent family from Mobile-Agent-v3.5 for desktop, mobile and browser tasks, usable alone or as a role in that framework.
- [GUI-Owl 1.5 32B Instruct](https://awesomecua.com/resources/url-6a943fb3667791b6cdb4/) — Date not recorded
  Instruct variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.
- [GUI-Owl 1.5 32B Think](https://awesomecua.com/resources/url-e0e4712ee701f652bf31/) — Date not recorded
  Thinking variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.
- [GUI-Owl 1.5 4B Instruct](https://awesomecua.com/resources/url-17a0422036ebea8d4e93/) — Date not recorded
  4B instruct checkpoint of GUI-Owl 1.5, a Qwen3-VL-based native GUI agent family from Mobile-Agent-v3.5 for desktop, mobile and browser tasks, usable alone or as a role in that framework.
- [GUI-Owl 1.5 8B Instruct](https://awesomecua.com/resources/url-d01dfc6e5b5fcece7b41/) — Date not recorded
  Instruct variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.
- [GUI-Owl 1.5 8B Think](https://awesomecua.com/resources/url-374138c6e18c9f1dd44a/) — Date not recorded
  Thinking variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.
- [GUI-Owl 32B](https://awesomecua.com/resources/url-a92e7dfcdfdcacb2e634/) — Date not recorded
  The 32B GUI-Owl checkpoint from the Mobile-Agent-v3 project, fine-tuned from Qwen2.5-VL-32B-Instruct for GUI grounding and actions, and usable as specialized agents in the Mobile-Agent-v3 framework.
- [GUI-Owl 7B](https://awesomecua.com/resources/url-aeb32973694f91ad9920/) — Date not recorded
  A Qwen2.5-VL-based GUI checkpoint released with Mobile-Agent-v3 for grounded actions and specialized roles in its agent framework.
- [GUI-Owl 7B Desktop-RL](https://awesomecua.com/resources/url-b01a78c76299196e3df1/) — Date not recorded
  GUI-Owl 7B variant from Mobile-Agent-v3 that is RL-tuned for desktop use on OSWorld, released as a research checkpoint for validating environment-RL improvements rather than for production.
- [GUI-R1 checkpoint bundle](https://awesomecua.com/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [gWorld (GuiWorld)](https://awesomecua.com/resources/github-trillion-labs-gworld/) — Date not recorded
  gWorld is an open-weight 8B/32B mobile GUI world model that predicts next-step screen states via renderable web code generation.
- [Holo2 235B-A22B](https://awesomecua.com/resources/url-dad3d02b2f9603713287/) — Date not recorded
  Research-preview Holo2 checkpoint, a 235B-total, 22B-active mixture-of-experts fine-tune of Qwen3-VL-235B-A22B-Thinking for UI localization and navigation on web, desktop and mobile screens.
- [Holo2 30B-A3B](https://awesomecua.com/resources/url-ed8d5883c240b78e329f/) — Date not recorded
  Mixture-of-experts Holo2 checkpoint fine-tuned from Qwen3-VL-30B-A3B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile screens.
- [Holo2 4B](https://awesomecua.com/resources/url-16a51d9e725ad5a5c629/) — Date not recorded
  A Qwen3-VL-based checkpoint for navigation and multi-step GUI actions across web, desktop and mobile interfaces.
- [Holo2 8B](https://awesomecua.com/resources/url-38942453b2b7018c0d01/) — Date not recorded
  Holo2 checkpoint fine-tuned from Qwen3-VL-8B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile interfaces.
- [Holo3 35B-A3B](https://awesomecua.com/resources/url-a349aace3cfde25628a8/) — Date not recorded
  A sparse Qwen3.5-based GUI-action checkpoint released for navigation and computer-use workflows.
- [Holo3.1 0.8B](https://awesomecua.com/resources/url-df84f6a103123387b0dd/) — Date not recorded
  Smallest checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.
- [Holo3.1 35B-A3B](https://awesomecua.com/resources/url-0c9ce9f220b2fdfd70b0/) — Date not recorded
  35B-A3B checkpoint of H Company's Holo3.1 family, a sparse mixture-of-experts vision-language model for web, desktop and mobile computer use with native function calling.
- [Holo3.1 4B](https://awesomecua.com/resources/url-90b24afa7bb8b2181205/) — Date not recorded
  4B checkpoint of H Company's Holo3.1 family, a vision-language model for web, desktop and mobile computer-use agents with native function calling, built on a dense Qwen3.5 architecture.
- [Holo3.1 9B](https://awesomecua.com/resources/url-4e9e46b2c7a0a21e130d/) — Date not recorded
  9B checkpoint of H Company's Holo3.1 family of vision-language models for web, desktop and mobile computer-use agents, with native function calling for agent frameworks.
- [Holo4 27B BF16](https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/) — Date not recorded
  Dense 27B computer-use checkpoint from H Company built on Qwen3.8-27B; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [Holo4 27B FP8](https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/) — Date not recorded
  FP8 block-quantized release of the Holo4-27B computer-use model; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [Holo4 27B GGUF](https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/) — Date not recorded
  Q4_K_M GGUF release of the Holo4-27B computer-use model with a separate F16 vision projector; an external harness sends it screenshots and tool results and executes the actions and tool calls it requests.
- [Holo4 35B-A3B BF16](https://awesomecua.com/resources/url-16083a0225a60882c704/) — Date not recorded
  A Qwen3.6-based computer-use checkpoint designed to request GUI actions, code execution and tool calls through an external agent harness.
- [Holotron 3 Nano](https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/) — Date not recorded
  Computer-use policy checkpoint that H Company post-trained from NVIDIA Nemotron 3 Nano Omni, a hybrid Mamba-MoE model with 3B of 30B parameters active per token, aimed at lower-latency agent workloads.
- [Holotron-12B](https://awesomecua.com/resources/url-6c16f91d8d79d7836283/) — Date not recorded
  Computer-use policy checkpoint from H Company and NVIDIA, fine-tuned from Nemotron Nano 12B v2 VL on localization and navigation data, with a hybrid SSM-attention backbone for high-throughput multi-image inference.
- [Holotron4 30B-A3B](https://awesomecua.com/resources/url-7638e3f688374cea2217/) — Date not recorded
  NemotronH Nano Omni-based computer-use checkpoint in H Company's Holo4 family; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [Holotron4 30B-A3B FP8](https://awesomecua.com/resources/url-a72a105e755836154412/) — Date not recorded
  FP8 release of Holotron4-30B-A3B, H Company's computer-use model built on Nemotron 3 Nano Omni; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.
- [HTLM](https://awesomecua.com/resources/github-espetro-htlm/) — Date not recorded
  HTLM is a compact 350M browser-agent model fine-tuned on Mind2Web for fast on-device and in-browser DOM action prediction.
- [kev-browser-use](https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/) — Date not recorded
  kev-browser-use is a compact 0.6B System-One action model fine-tuned on Mind2Web for low-latency browser element selection.
- [Laya-Android](https://awesomecua.com/resources/github-byun11-laya-android/) — Date not recorded
  Laya-Android is a compact 322M on-device decision model for Android GUI action selection.
- [laya-browser](https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/) — Date not recorded
  Non-generative browser-agent policy fine-tuned from the 322M laya encoder: one forward pass over page text and the interactive-element list picks the next operation and its target element.
- [Llama-3-8B-Web](https://awesomecua.com/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [Mano-P](https://awesomecua.com/resources/github-mininglamp-ai-mano-p/) — Date not recorded
  Mano-P is an open-source GUI vision-language-action model optimized for edge devices and evaluated on OSWorld and Mind2Web.
- [MiniCPM-GUIDance](https://awesomecua.com/resources/url-73570e699421a5ad04eb/) — Date not recorded
  MiniCPM-V checkpoint released with GUICourse and tuned on its GUIEnv, GUIAct and GUIChat data; card prompts cover next-action generation from a task and action history, and screenshot chat with grounded boxes.
- [MobileVLM](https://awesomecua.com/resources/github-xiaomi-mobilevlm/) — Date not recorded
  MobileVLM is a vision-language model pre-trained on the Mobile3M UI transition graph for intra-screen and inter-screen mobile UI understanding.
- [OneJev](https://awesomecua.com/resources/github-omnijev-onejev/) — Date not recorded
  OneJev is a multimodal System-One decision model based on Qwen that returns calibrated probabilities over typed action choices.
- [OpenCUA 72B](https://awesomecua.com/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [OpenJev](https://awesomecua.com/resources/github-alanhuangyoo-openjev/) — Date not recorded
  Decision models at 1.7B, 4B and 8B that answer typed questions with calibrated probabilities in one pass; trained on browser-agent steps and general decision data, they pick a web agent's next operation and element.
- [OpenMobile-8B](https://awesomecua.com/resources/url-6616228d4f267363458e/) — Date not recorded
  Mobile agent checkpoint with a Qwen3-VL architecture, released with OpenMobile and fine-tuned on its synthesized Android trajectories; the code README serves it with vLLM for AndroidWorld evaluation.
- [OS-Atlas Pro 7B](https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/) — Date not recorded
  OS-Atlas action checkpoint fine-tuned from OS-Atlas-Base-7B that reads a screenshot, task and history and writes a thought plus the next basic or user-defined GUI action, in the Qwen2-VL architecture.
- [OS-Genesis 4B AC](https://awesomecua.com/resources/url-b1837823421bd08cb826/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidControl trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 4B AW](https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/) — Date not recorded
  InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidWorld trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.
- [OS-Genesis 4B WA](https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/) — Date not recorded
  The WebArena-oriented InternVL2-4B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.
- [OS-Genesis 7B AC](https://awesomecua.com/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [OS-Genesis 7B AW](https://awesomecua.com/resources/url-7afa17db925828d9a035/) — Date not recorded
  The AndroidWorld-oriented Qwen2-VL checkpoint trained on mobile trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and screen.
- [OS-Genesis 7B WA](https://awesomecua.com/resources/url-93c98e3b5aea945e0877/) — Date not recorded
  The WebArena-oriented Qwen2-VL-7B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.
- [OS-Genesis 8B AC](https://awesomecua.com/resources/url-2be7f81cdca0eb8566c6/) — Date not recorded
  AndroidControl-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [OS-Genesis 8B AW](https://awesomecua.com/resources/url-2eaf614de14193997f33/) — Date not recorded
  AndroidWorld-oriented InternVL2-8B checkpoint trained on OS-Genesis mobile trajectories; the card prompts it with a screenshot, accessibility tree, goal and action history for the next thought and action.
- [OS-Genesis 8B WA](https://awesomecua.com/resources/url-f2c34526651f5f57cf98/) — Date not recorded
  WebArena-oriented InternVL2-8B checkpoint trained on web trajectories from OS-Genesis reverse task synthesis; the card's example prompt pairs a screenshot and accessibility tree with the instruction and action history.
- [PC-Agent-E checkpoint](https://awesomecua.com/resources/url-04aa7569d183379d615c/) — Date not recorded
  Computer-use checkpoint fine-tuned on PC-Agent-E trajectories; the model-card prose identifies Qwen2.5-VL-72B-Instruct as its starting model.
- [Plan-and-Act Actor 70B](https://awesomecua.com/resources/url-8a284d122d7dcf23479d/) — Date not recorded
  Llama-3.3-70B-Instruct-based executor checkpoint from the Plan-and-Act web-agent framework that translates high-level plans into browser actions.
- [Qwen-GUI checkpoint](https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/) — Date not recorded
  Qwen-VL checkpoint released with GUICourse and tuned on its GUIAct and GUIChat data; the card's demo draws the box and point coordinates it returns, on a 0–1000 grid, onto the input screenshot.
- [Qwen3-VL / Qwen2.5-VL](https://awesomecua.com/resources/github-qwenlm-qwen3-vl/) — Date not recorded
  Official repository for the Qwen-VL vision-language model series supporting native visual GUI grounding, computer use, and mobile navigation.
- [ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld](https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/) — Date not recorded
  GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld SFT](https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/) — Date not recorded
  Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld desktop computer-use agent.
- [ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard](https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/) — Date not recorded
  GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL from a released SFT start point for ScienceBoard scientific-software tasks.
- [ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard SFT](https://awesomecua.com/resources/url-7fbde54a49250739baee/) — Date not recorded
  Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.
- [ScaleCUA (THUDM) Qwen3-VL-8B OSWorld](https://awesomecua.com/resources/url-1807bdb33fc352a97240/) — Date not recorded
  Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after a released SFT start point.
- [ScaleCUA (THUDM) Qwen3-VL-8B OSWorld SFT](https://awesomecua.com/resources/url-50501b63a93c611d6e54/) — Date not recorded
  Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point from which online RL trains its OSWorld desktop computer-use agent.
- [ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard](https://awesomecua.com/resources/url-73c169c32b5765688376/) — Date not recorded
  Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard SFT](https://awesomecua.com/resources/url-058cb7a92cba506f9739/) — Date not recorded
  Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.
- [ScaleCUA (THUDM) Qwen3.5-9B OSWorld](https://awesomecua.com/resources/url-0919e695670c5740a123/) — Date not recorded
  Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT](https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/) — Date not recorded
  Supervised Qwen3.5-9B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld computer-use agent.
- [ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard](https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/) — Date not recorded
  Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.
- [ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard SFT](https://awesomecua.com/resources/url-af7a03e8199643c3508f/) — Date not recorded
  Supervised Qwen3.5-9B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.
- [ScaleCUA 7B](https://awesomecua.com/resources/url-ff7b1873a3eead89607a/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.
- [Seed1.5-VL](https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/) — Date not recorded
  ByteDance Seed vision-language foundation model served by API, whose repository provides cookbooks including GUI-agent prompts for computer and mobile use with click, drag, hotkey, typing and scroll actions.
- [ShowUI-π checkpoint](https://awesomecua.com/resources/url-f70aa7c95824a8729516/) — Date not recorded
  A compact visual-action checkpoint that predicts continuous GUI drag trajectories from a screenshot and a natural-language instruction.
- [Textual Foresight](https://awesomecua.com/resources/github-aburns4-textualforesight/) — Date not recorded
  Textual Foresight pretrains UI representations by predicting textual descriptions of future screen states resulting from mobile UI actions.
- [UI-Act model](https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/) — Date not recorded
  2023 GUI agent model: a text-conditioned encoder-decoder Transformer that reads full-screen captures through a convolutional encoder and predicts left clicks on a 4-pixel grid, demonstrated on GNOME Calculator.
- [UI-Genie Agent 3B](https://awesomecua.com/resources/url-43d811a5957d8effb7ed/) — Date not recorded
  A Qwen2.5-VL-3B mobile GUI action model fine-tuned on AndroidControl, AMEX, AndroidLab and UI-Genie synthetic trajectories to predict app launches, taps, swipes, typing and system-button presses.
- [UI-Genie Agent 7B](https://awesomecua.com/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.
- [UI-R1 3B](https://awesomecua.com/resources/url-f13474d7aa734a30624d/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.
- [UI-S1 7B](https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.
- [UI-TARS 2B SFT](https://awesomecua.com/resources/url-bd9f8174e5503055c0bd/) — Date not recorded
  SFT-labelled 2B UI-TARS checkpoint, the compact size of the original release: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and GUI actions.
- [UI-TARS 72B DPO](https://awesomecua.com/resources/url-0447e1fb83a794507aa2/) — Date not recorded
  DPO-labelled 72B UI-TARS checkpoint that its card marks as recommended: a native GUI agent model in the Qwen2-VL architecture for screen perception, element grounding and multi-step actions on web, mobile and desktop.
- [UI-TARS 72B SFT](https://awesomecua.com/resources/url-fdb901523979ed1e831b/) — Date not recorded
  SFT-labelled 72B UI-TARS checkpoint: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and multi-step actions on web, mobile and desktop.
- [UI-TARS 7B DPO](https://awesomecua.com/resources/url-a8b43a1f2bebd998f612/) — Date not recorded
  DPO-labelled 7B UI-TARS checkpoint that its card marks as recommended: a native GUI agent model in the Qwen2-VL architecture for screen perception, element grounding and multi-step actions on web, mobile and desktop.
- [UI-TARS 7B SFT](https://awesomecua.com/resources/url-dbd880ec31b412487945/) — Date not recorded
  SFT-labelled 7B UI-TARS checkpoint: a native GUI agent model in the Qwen2-VL architecture, stored in FP32, for screen perception, element grounding and multi-step actions on web, mobile and desktop.
- [UIX-Qwen2-Mind2Web](https://awesomecua.com/resources/url-592e434848a1514efef0/) — Date not recorded
  UIX-Qwen2 further fine-tuned on the Mind2Web training set; the MultiUI paper evaluates it on predicting the next web action from a screenshot, the task and previous actions.

## Engineering & industry

- [AeonMind agenthands](https://awesomecua.com/resources/github-aeonmindai-agenthands/) — Date not recorded
  Human-calibrated mouse trajectory and keyboard timing synthesis library for browser and desktop agents.
- [AI-Player](https://awesomecua.com/resources/github-shasankp000-ai-player/) — Date not recorded
  AI-Player is a Minecraft Fabric mod that embeds an LLM/VLM-driven autonomous second player capable of navigation, combat, and crafting.
- [Amazon Bedrock Minecraft Agent](https://awesomecua.com/resources/github-build-on-aws-amazon-bedrock-minecraft-agent/) — Date not recorded
  TypeScript agent built on Amazon Bedrock and Mineflayer that translates natural-language instructions into in-game Minecraft actions.
- [axstream](https://awesomecua.com/resources/github-milind-soni-axstream/) — Date not recorded
  Streaming JSON-lines action language and compiler for macOS computer-use agents.
- [claude-minecraft-use](https://awesomecua.com/resources/github-observedobserver-claude-minecraft-use/) — Date not recorded
  Adapts Anthropic Claude Computer Use on macOS with continuous movement and camera controls to play Minecraft from screen observations.
- [ClickAgent](https://awesomecua.com/resources/github-samsung-clickagent/) — Date not recorded
  ClickAgent decouples high-level MLLM action reasoning from a specialized UI element localization model for Android task automation.
- [CoAT research implementation](https://awesomecua.com/resources/github-imnearth-coat/) — Date not recorded
  Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.
- [D-PoT evaluation code](https://awesomecua.com/resources/github-sqzhang-lazy-d-pot/) — Date not recorded
  Offline prompting and evaluation code for Dynamic Planning of Thoughts on Android-in-the-Wild, including action extraction and comparison with reference actions.
- [DesktopAgent (S1-Fast)](https://awesomecua.com/resources/github-elidot007-desktop-agent/) — Date not recorded
  DesktopAgent operates Windows desktop applications in the background using a local 0.33B System-One decision model (S1-Fast) and UI Automation.
- [fara-7b-agent](https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/) — Date not recorded
  Minimal, fully local agent harness for running Microsoft's Fara-7B computer-use model on desktop and browser tasks.
- [FastCUA](https://awesomecua.com/resources/github-guojiz-fastcua/) — Date not recorded
  Local, accessibility-first Windows control plane for AI agents exposing structured UI trees and multi-action execution.
- [FluidUse](https://awesomecua.com/resources/github-fluidinference-fluiduse/) — Date not recorded
  Swift package for local computer use on Apple silicon that reads forms in running Mac apps or browsers through the Accessibility API and fills them with on-device Core ML decision models.
- [Human Browser Copilot](https://awesomecua.com/resources/github-officiallemmy254-droid-human-browser-copilot/) — Date not recorded
  Agentic Chrome copilot featuring organic mouse kinematics, visual perception, and natural-language web task execution.
- [Jev Browser Agent](https://awesomecua.com/resources/github-amyivychoi-jev-browser-agent/) — Date not recorded
  Jev Browser Agent combines Browser Use DOM extraction, Jev System-One action selection, and deterministic browser harness execution.
- [jev-for-chrome](https://awesomecua.com/resources/github-luciferlu755-jev-for-chrome/) — Date not recorded
  Chrome extension that drives web browsing, clicking, and typing using TypeSafe Jev System-One decision models.
- [jev-windows-agent](https://awesomecua.com/resources/github-vbs2004-jev-windows-agent/) — Date not recorded
  jev-windows-agent pairs Windows UI Automation inspection with a fast Jev System-One decision loop for low-latency desktop control.
- [Lightcone SDK](https://awesomecua.com/resources/github-tzafon-lightcone/) — Date not recorded
  Lightcone is Tzafon's Python and TypeScript SDK for building computer-use agents powered by Northstar GUI vision-language models.
- [Milli-Agent](https://awesomecua.com/resources/github-abdullah-al-raju-milli-agent/) — Date not recorded
  Milli-Agent is a real-time computer-use agent architecture designed for high-frequency in-memory screen capture and low-latency actuation.
- [Minecraft-RL](https://awesomecua.com/resources/github-otsolappalainen-minecraft-rl/) — Date not recorded
  Trains Proximal Policy Optimization (PPO) agents over visual frame buffers and action sockets in parallel Minecraft environments.
- [Octopus](https://awesomecua.com/resources/github-dongyh20-octopus/) — Date not recorded
  Octopus is a vision-language programmer agent trained with environmental feedback to generate executable control code in GTA and Gibson worlds.
- [Open Interface](https://awesomecua.com/resources/github-ambersahdev-open-interface/) — Date not recorded
  Open Interface is a cross-platform desktop application that translates natural-language requests into GUI mouse and keyboard actions via LLMs.
- [OSRS PvP Reinforcement Learning](https://awesomecua.com/resources/github-naton1-osrs-pvp-reinforcement-learning/) — Date not recorded
  Trains PPO self-play reinforcement learning agents for real-time Old School RuneScape PvP combat across high-dimensional action spaces.
- [OSRS-CV](https://awesomecua.com/resources/github-kaustubhlall-osrs-cv/) — Date not recorded
  Uses YOLOv8 object detection, Tesseract OCR, and human-like Bézier mouse trajectories to automate Old School RuneScape GUI gameplay.
- [OSWorld Qwen2.5-VL Enhanced](https://awesomecua.com/resources/github-issumer-ku-osworld-qwen2-5vl-enhanced/) — Date not recorded
  Provides an OpenAI-compatible Qwen2.5-VL computer-use agent and multi-environment evaluation runner for OSWorld.
- [OSWorld-CogAgent](https://awesomecua.com/resources/github-issumer-ku-osworld-cogagent/) — Date not recorded
  Provides a provider-neutral CogAgent-9B model server, adapter, and multi-environment evaluation runner for OSWorld.
- [Pi Jev Browser](https://awesomecua.com/resources/github-laihenyi-pi-jev-browser/) — Date not recorded
  Pi Jev Browser is a browser and macOS agent for the pi coding harness where Jev selects actions over structured page observations.
- [PreAct](https://awesomecua.com/resources/github-19pine-ai-preact/) — Date not recorded
  PreAct compiles repeated computer-use agent trajectories into cached action graphs with lightweight visual verification to accelerate execution.
- [ScreenSuite](https://awesomecua.com/resources/github-huggingface-screensuite/) — Date not recorded
  A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.
- [Seq2act code (google-research)](https://awesomecua.com/resources/component-google-research-seq2act/) — Date not recorded
  TensorFlow code for mapping natural-language instructions to Android UI action sequences, with phrase-tuple extraction and grounding models and pipelines for AndroidHowTo, RicoSCA and PixelHelp.
- [Smol2Operator](https://awesomecua.com/resources/github-huggingface-smol2operator/) — Date not recorded
  Hugging Face recipe that converts Aguvis GUI data into one normalized action space and fine-tunes SmolVLM2-2.2B in two phases, first for screenshot grounding and then for agentic GUI action code.
- [System1-Agents](https://awesomecua.com/resources/github-thinkflowlab-system1-agents/) — Date not recorded
  Framework that puts System 1 decision models such as Jev, Laya or Cua-S1 in openJiuwen agents to pick one typed option per step; ships browser, desktop-app, game, ALFWorld and ticket-routing agents.
- [tinycomputer](https://awesomecua.com/resources/github-tinyhumansai-tinycomputer/) — Date not recorded
  Jev decision-model harness for fast desktop and browser action execution.
- [ToolGen](https://awesomecua.com/resources/github-reason-wang-toolgen/) — Date not recorded
  ToolGen represents external tools as virtual vocabulary tokens to unify massive-scale tool retrieval and execution via autoregressive generation.
- [ToolTok](https://awesomecua.com/resources/github-zephinuecode-tooltok/) — Date not recorded
  ToolTok introduces atomic directional cursor-movement tokens for multi-step iterative GUI visual grounding on ScreenSpot and ScreenSpot-Pro.
- [typesafe-computer-use](https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/) — Date not recorded
  Computer-use loop that reads the screen with OCR and accessibility labels, has the hosted TypeSafe classifier choose each next action with a confidence, and calls a writer model only for free text.
- [uia-agent](https://awesomecua.com/resources/github-supermarioyl-uia-agent/) — Date not recorded
  uia-agent defines an open-source LLM agent action space that drives legacy Windows desktop applications through the UI Automation tree.
- [VACT (Vector Agent Context Transport)](https://awesomecua.com/resources/github-fy2ne-vact/) — Date not recorded
  High-frequency GPU screen perception and low-latency input transport protocol for desktop computer-use agents.
- [VoltageInputMcp](https://awesomecua.com/resources/github-casualkre-voltage-input-mcp/) — Date not recorded
  Two-layer local input engine for MCP where a frontier planning model dispatches high-rate action programs to a local executor.
- [web-pilot](https://awesomecua.com/resources/github-vinimabreu-web-pilot/) — Date not recorded
  Browser-use framework where the model proposes a single action from a closed vocabulary and deterministic code validates and executes it.
