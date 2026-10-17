# 界面理解

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/screen-understanding/records.jsonl

## 论文与综述

- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-20390/) — 2026-10-14
  Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure.
- [Towards Safe Autonomy for Computer Use](https://awesomecua.github.io/resources/arxiv-2610-18508/) — 2026-10-13
  Presents SA-CUA, separating trusted and untrusted visual content using accessibility-derived masking rules and a controlled channel for verifying information before endorsement.
- [MHVF: Training-Free GUI Grounding via Verification-Guided Multi-Hypothesis Search](https://awesomecua.github.io/resources/arxiv-2610-17792/) — 2026-10-13
  Introduces MHVF, a training-free grounding method that explores several candidate screen regions, verifies them in local views, and uses those checks to guide further search.
- [Seg2Click: Learning Pixel-Level Action Masks for GUI Visual Grounding](https://awesomecua.github.io/resources/arxiv-2610-16234/) — 2026-10-12
  Recasts GUI grounding as predicting a mask of valid click locations from bounding-box supervision, then derives a click point with a deterministic selection rule.
- [CaptchaAgent: Verifiable Visual Reasoning for CAPTCHA Solving](https://awesomecua.github.io/resources/arxiv-2610-12866/) — 2026-10-09
  Presents CaptchaAgent, which builds an explicit visual representation of objects and relations, refines ambiguous regions, and checks counterfactual consistency before acting on interactive CAPTCHAs.
- [When Charts Deceive Web Agents: A Paired Benchmark for Misleading Visualization-Grounded Tasks](https://awesomecua.github.io/resources/arxiv-2610-12823/) — 2026-10-09
  Introduces MisVisAgentBench, a paired executable benchmark that changes chart evidence while holding web tasks fixed, to trace how misleading visualizations affect agent decisions and downstream actions.
- [Recurrent Latent Visual Search for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2610-05185/) — 2026-10-04
  Introduces ReLaViS, which performs recurrent visual search inside a grounding model by repeatedly querying screenshot tokens and feeding the resulting spatial evidence back into the model. Coarse-to-fine supervision is constructed from existing interface-element annotations.
- [Invisible in Space, Visible in Time: Motion Vision CAPTCHA against GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27461/) — 2026-09-23
  MVCAP-Bench tests live browser CAPTCHAs whose foreground meaning emerges through motion against dynamic backgrounds. A foreground-only control separates temporal camouflage difficulty from answer format and browser interaction.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.github.io/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [Reflection with Action-Induced Visual Differences for Desktop GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-24015/) — 2026-08-25
  Introduces Evidence-First Reflection, which separates extraction of action-induced screen changes from judgment of whether an operation achieved its objective. It filters visual differences into relevant evidence before a desktop agent’s reflector decides how execution should continue.
- [GUI-Primitives: Diagnosing Spatial Reasoning Failures in Vision-Language GUI Grounding](https://awesomecua.github.io/resources/arxiv-2608-21832/) — 2026-08-22
  Introduces GUI-Primitives, a paired-instruction benchmark that changes a spatial relation while holding the screenshot and anchor fixed. Its diagnostics separate failure to localize either candidate from failure to choose the candidate satisfying the relation.
- [Lexical Coupling in GUI Element Grounding: Sentence Embeddings Track Labels across Mobile and Web](https://awesomecua.github.io/resources/arxiv-2608-21794/) — 2026-08-22
  Studies whether text-embedding GUI grounding scores reflect semantic matching or recovery of visible labels. Same-screen ranking comparisons with lexical baselines expose differences between deployable fusion, oracle selection, and performance on label-poor targets.
- [ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-18307/) — 2026-08-18
  ComponentBench evaluates short interactions with canonical web UI components using verified tasks and matched human reference trajectories. Its diagnostic pipeline compares observation/action representations and analyzes structural difficulty, failure patterns and interaction efficiency.
- [Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching](https://awesomecua.github.io/resources/arxiv-2608-09654/) — 2026-08-10
  This framework separates frozen-model instruction expansion from a trained layout-aware matcher that localizes GUI elements without coordinate regression. Binary text/icon supervision supports the matcher, with evaluations on GUI grounding and Mind2Web element-selection tasks.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.github.io/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.github.io/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.github.io/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.github.io/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.github.io/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.github.io/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.github.io/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://awesomecua.github.io/resources/arxiv-2605-11212/) — 2026-05-11
  Trains GUI agents with a learned selector that removes repeated visual patches across consecutive screenshots while preserving spatial structure. ReVision evaluates this history representation on OSWorld, WebTailBench and AgentNetBench.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.github.io/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [Region4Web: Rethinking Observation Space Granularity for Web Agents](https://awesomecua.github.io/resources/arxiv-2605-07134/) — 2026-05-08
  Reorganizes webpage accessibility trees into functional regions through hierarchical decomposition and semantic abstraction. PageDigest supplies a persistent region-level observation to web agents, evaluated on WebArena.
- [AutoFocus: Uncertainty-Aware Active Visual Search for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2605-02630/) — 2026-05-04
  Presents AutoFocus, a training-free grounding method that turns sampled coordinates and token uncertainty into spatial region proposals. Shape-aware crops and visual comparison select a target while retaining surrounding interface context.
- [Beyond Screenshots: Evaluating VLMs' Understanding of UI Animations](https://awesomecua.github.io/resources/arxiv-2604-26148/) — 2026-04-28
  AniMINT evaluates how VLMs perceive, explain and interpret UI animations using densely annotated videos. The study distinguishes basic motion recognition from higher-level animation meaning and probes motion, context and perceptual cues.
- [SnapGuard: Lightweight Prompt Injection Detection for Screenshot-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2604-25562/) — 2026-04-28
  SnapGuard detects screenshot-based prompt injection through complementary visual-stability and recovered textual cues. Its evaluation compares detection quality and inference cost across attack and benign-page settings, rather than establishing universal runtime prevention.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.github.io/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [PrecisionCUA: Iterative Visual Refinement for Pixel-Precise Cursor Grounding in Code Editors](https://awesomecua.github.io/resources/arxiv-2604-13019/) — 2026-04-14
  Studies iterative cursor grounding in dense code-editor interfaces, using visual feedback from earlier attempts to correct displacement. PrecisionCUA evaluates this closed-loop process across multiple model families on coding-interface tasks.
- [What's Missing in Screen-to-Action? Towards a UI-in-the-Loop Paradigm for Multimodal GUI Reasoning](https://awesomecua.github.io/resources/arxiv-2604-06995/) — 2026-04-08
  Introduces UILoop, which inserts explicit UI-element localization, function and usage reasoning between screen observation and action. UI Comprehension-Bench evaluates these element-level capabilities with three metrics.
- [PixelPrune: Pixel-Level Adaptive Visual Token Reduction via Predictive Coding](https://awesomecua.github.io/resources/arxiv-2604-00886/) — 2026-04-01
  PixelPrune removes pixel-redundant patches before the vision encoder, reducing both encoding and downstream language-model work. The training-free method evaluates lossless and controlled-lossy compression on document and GUI tasks.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.github.io/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [Where and How to Prune: An Empirical Study of Visual Token Pruning for GUI Agent Navigation](https://awesomecua.github.io/resources/arxiv-2603-26041/) — 2026-03-27
  Studies visual token pruning for GUI navigation, separating reusable screenshot encoder embeddings from later language-model computation. The analysis examines foreground-background token allocation and spatial coverage when pruning historical screenshots.
- [GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks](https://awesomecua.github.io/resources/arxiv-2603-25864/) — 2026-03-26
  GUIDE evaluates whether models can recognize a user’s behavior, infer intent and decide when to offer help during open-ended software tasks. It uses narrated screen recordings of novice users and studies the effect of additional user context on these assistance decisions.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.github.io/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [Zoom to Essence: Trainless GUI Grounding by Inferring upon Interface Elements](https://awesomecua.github.io/resources/arxiv-2603-14448/) — 2026-03-15
  Presents ZoomUI, a training-free grounding method that expresses instructions as visual element descriptions and uses model attention to zoom progressively into relevant interface regions. Evaluation examines instruction-to-element localization on GUI benchmarks.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.github.io/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.github.io/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.github.io/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.github.io/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [Trifuse: Enhancing Attention-Based GUI Grounding via Multimodal Fusion](https://awesomecua.github.io/resources/arxiv-2602-06351/) — 2026-02-06
  Trifuse combines attention-based localization with OCR text cues and icon captions to ground GUI instructions. Its fusion procedure favors cross-modal agreement and sharp location peaks, and is evaluated without task-specific fine-tuning.
- [Generative Visual Code Mobile World Models](https://awesomecua.github.io/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [FocusUI: Efficient UI Grounding via Position-Preserving Visual Token Selection](https://awesomecua.github.io/resources/arxiv-2601-03928/) — 2026-01-07
  FocusUI selects instruction-relevant screenshot patches while preserving their positional structure for GUI grounding. Its PosPad scheme replaces runs of dropped tokens with positional markers and is evaluated under reduced token budgets.
- [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://awesomecua.github.io/resources/arxiv-2512-22009/) — 2025-12-26
  Introduces iSHIFT, which combines latent reasoning with perception-control tokens to adapt GUI inference. The agent switches between detailed regional grounding and faster use of global visual cues.
- [DAVE: A VLM Vision Encoder for Document Understanding and Web Agents](https://awesomecua.github.io/resources/arxiv-2512-17221/) — 2025-12-19
  DAVE trains a vision encoder for document images and web agents using self-supervised pretraining followed by supervised parsing and localization. It combines decoder-specific encoder merging with feature fusion and evaluates web localization and agent benchmarks alongside document tasks.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-00756/) — 2025-11-30
  MPR-GUI evaluates GUI perception and reasoning through strictly aligned tasks in six languages. GUI-XLI adjusts non-English hidden representations toward English representations at language-sensitive layers during inference to address the measured cross-language gaps.
- [Prune4Web: DOM Tree Pruning Programming for Web Agent](https://awesomecua.github.io/resources/arxiv-2511-21398/) — 2025-11-26
  Introduces Prune4Web, where generated scoring programs filter DOM elements according to decomposed subtasks before grounding. An annotation pipeline and two-turn training procedure coordinate the planner, programmatic filter and grounder.
- [MEGA-GUI: Multi-stage Enhanced Grounding Agents for GUI Elements](https://awesomecua.github.io/resources/arxiv-2511-13087/) — 2025-11-17
  Introduces MEGA-GUI, which separates coarse region selection from fine-grained interface-element grounding. Bidirectional zooming and context-aware instruction rewriting coordinate specialized vision-language agents across visual scales.
- [GUI-AIMA: Aligning Intrinsic Multimodal Attention with a Context Anchor for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2511-00810/) — 2025-11-02
  Introduces GUI-AIMA, which supervises instruction-relevant attention over visual patches instead of directly training coordinate text generation. Patch-level grounding can be combined with an optional zoom stage and is evaluated across GUI localization benchmarks.
- [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.github.io/resources/arxiv-2510-16051/) — 2025-10-16
  GUIrilla systematically explores macOS interfaces to collect interaction traces and accessibility metadata for downstream GUI research. It organizes these observations into hierarchical MacApp Trees and describes an accessibility-driven collection library.
- [Improving GUI Grounding with Explicit Position-to-Coordinate Mapping](https://awesomecua.github.io/resources/arxiv-2510-03230/) — 2025-10-03
  This work addresses GUI localization errors caused by mismatches between visual patch positions and output pixel coordinates. RULER tokens provide explicit coordinate references, while Interleaved MRoPE balances width and height encoding; evaluation uses the ScreenSpot benchmark family.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.github.io/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [GUI-PRA: Process Reward Agent for GUI Tasks](https://awesomecua.github.io/resources/arxiv-2509-23263/) — 2025-09-27
  GUI-PRA evaluates GUI progress by generating task-specific criteria and actively inspecting visual evidence with tools. It tests offline judgment on OS-Critic Bench and the effects of this feedback on online mobile policies in AndroidWorld.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [How Auxiliary Reasoning Unleashes GUI Grounding in VLMs](https://awesomecua.github.io/resources/arxiv-2509-11548/) — 2025-09-15
  Studies the gap between latent visual grounding and explicit coordinate output in general vision-language models. Three zero-shot methods add axes, grids, or labeled intersections to GUI screenshots so models can express spatial locations without fine-tuning.
- [SparkUI-Parser: Enhancing GUI Perception with Robust Grounding and Parsing](https://awesomecua.github.io/resources/arxiv-2509-04908/) — 2025-09-05
  Introduces SparkUI-Parser, which adds continuous coordinate decoding and a rejection mechanism for nonexistent targets to a multimodal model. It also presents ScreenParse for evaluating structural interface perception.
- [Learning Active Perception via Self-Evolving Preference Optimization for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-04243/) — 2025-09-04
  LASER builds preference data for multi-step GUI perception by combining Monte Carlo quality estimates with region-overlap evaluation. Its self-evolving training encourages relevant region selection and adapts the amount of reasoning before predicting screen coordinates.
- [V2P: Visual Attention Calibration for GUI Grounding via Background Suppression and Center Peaking](https://awesomecua.github.io/resources/arxiv-2508-13634/) — 2025-08-19
  V2P trains GUI grounding by suppressing attention to background regions and emphasizing the center of the target element. It represents target importance with size-dependent Gaussian heatmaps and evaluates the contribution of each component on ScreenSpot-v2 and ScreenSpot-Pro.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.github.io/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [Beyond Pixels: Exploring DOM Downsampling for LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2508-04412/) — 2025-08-06
  D2Snap reduces serialized DOM observations while preserving actionable elements and features that distinguish their uses. The study compares reduced DOM inputs with screenshot-based observations for a web agent on tasks sampled from Online-Mind2Web.
- [Uncertainty-Aware GUI Agent: Adaptive Perception through Component Recommendation and Human-in-the-Loop Refinement](https://awesomecua.github.io/resources/arxiv-2508-04025/) — 2025-08-06
  RecAgent narrows attention to recommended UI components and requests user feedback when task intent or decisions remain uncertain. It introduces ComplexAction to evaluate specified single-step GUI actions in difficult interface scenarios.
- [Phi-Ground Tech Report: Advancing Perception in GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-23779/) — 2025-07-31
  Reports a GUI-grounding model family and empirical design choices covering source data, perception training, and coordinate prediction.
- [R-VLM: Region-Aware Vision Language Model for Precise GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-05673/) — 2025-07-08
  R-VLM localizes GUI elements through zoomed-in region proposals and an intersection-over-union-aware training objective. It evaluates the grounding model on ScreenSpot and AgentStudio and studies its effect on navigation in AITW and Mind2Web.
- [DiMo-GUI: Advancing Test-time Scaling in GUI Grounding via Modality-Aware Visual Reasoning](https://awesomecua.github.io/resources/arxiv-2507-00008/) — 2025-06-12
  Separates textual and iconic UI elements and iteratively focuses visual regions to refine grounding without additional model training.
- [Do MLLMs Capture How Interfaces Guide User Behavior? A Benchmark for Multimodal UI/UX Design Understanding](https://awesomecua.github.io/resources/arxiv-2505-05026/) — 2025-05-08
  Introduces WiserUI-Bench, pairing real UI variants from industry A/B tests with observed behavioral winners and expert explanations. It evaluates models’ ability to predict the more effective interface and explain its effect on user behavior.
- [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.github.io/resources/arxiv-2505-00684/) — 2025-05-01
  RegionFocus adds visual test-time scaling by zooming into selected screenshot regions and maintaining an image-based map of landmarks and actions. It evaluates this grounding procedure with UI-TARS and Qwen2.5-VL on ScreenSpot-Pro and WebVoyager.
- [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.github.io/resources/arxiv-2504-16419/) — 2025-04-23
  Introduces PixelWeb, a webpage GUI dataset with element images, contours, and pixel masks. Its annotation pipeline combines bitmap channel information with DOM-based visibility and stacking analysis to address occlusion and overlapping elements.
- [ScreenLLM: Stateful Screen Schema for Efficient Action Understanding and Prediction](https://awesomecua.github.io/resources/arxiv-2503-20978/) — 2025-03-26
  Represents interface interactions with a stateful screen schema to model user behavior and support action understanding and prediction.
- [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.github.io/resources/arxiv-2503-15661/) — 2025-03-19
  Provides annotated desktop demonstrations for evaluating element grounding, layout grounding, and action prediction.
- [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.github.io/resources/arxiv-2503-14021/) — 2025-03-18
  Uses specialized graphical, textual, and spatial perception components with a data-collection pipeline to improve GUI understanding.
- [DeskVision: Large Scale Desktop Region Captioning for Advanced GUI Agents](https://awesomecua.github.io/resources/arxiv-2503-11170/) — 2025-03-14
  Introduces AutoCaptioner, DeskVision, and GUIExplorer for generating desktop region descriptions and training interface-understanding models.
- [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.github.io/resources/arxiv-2503-03196/) — 2025-03-05
  Introduces SpiritSight and GUI-Lasagne data, combining multilevel GUI annotations with visual block parsing for high-resolution interface navigation.
- [TRISHUL: Towards Region Identification and Screen Hierarchy Understanding for Large VLM based GUI Agents](https://awesomecua.github.io/resources/arxiv-2502-08226/) — 2025-02-12
  Combines hierarchical screen parsing with spatially enriched element descriptions to support both locating GUI targets and describing indicated elements.
- [Iris: Breaking GUI Complexity with Adaptive Focus and Self-Refining](https://awesomecua.github.io/resources/arxiv-2412-10342/) — 2024-12-13
  Combines information-sensitive image cropping with a learning loop between element description and grounding for complex interface understanding.
- [Falcon-UI: Understanding GUI Before Following User Instructions](https://awesomecua.github.io/resources/arxiv-2412-09362/) — 2024-12-12
  Pretrains GUI-context understanding with instruction-free web interactions before fine-tuning Falcon-UI on instructed GUI tasks.
- [EDGE: Enhanced Grounded GUI Understanding with Enriched Multi-Granularity Synthetic Data](https://awesomecua.github.io/resources/arxiv-2410-19461/) — 2024-10-25
  Synthesizes GUI training examples at multiple levels of detail from webpages and studies transfer of learned understanding to other interface environments.
- [Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://awesomecua.github.io/resources/arxiv-2410-18967/) — 2024-10-24
  Extends Ferret-UI across device platforms with adaptive visual scaling and synthetic data for referring, grounding, and user-centered UI tasks.
- [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://awesomecua.github.io/resources/arxiv-2410-13824/) — 2024-10-17
  Builds MultiUI by generating instructions from webpage accessibility trees and pairing them with screenshots for multimodal training. Evaluation examines web-interface understanding, including VisualWebBench and Mind2Web, and transfer to other text-rich visual tasks.
- [DreamStruct: Understanding Slides and User Interfaces via Synthetic Data Generation](https://awesomecua.github.io/resources/arxiv-2410-00201/) — 2024-09-30
  Generates labeled slides and interface visuals through code to support visual element detection, description, and classification with less manual annotation.
- [Inferring Alt-text For UI Icons With Large Language Models During App Development](https://awesomecua.github.io/resources/arxiv-2409-18060/) — 2024-09-26
  Introduces IconDesc, which generates mobile icon alt-text from partial UI context such as element identifiers, bounds, nearby text and hierarchy. Model evaluation and a user study examine the resulting accessibility descriptions.
- [MobileVLM: A Vision-Language Model for Better Intra- and Inter-UI Understanding](https://awesomecua.github.io/resources/arxiv-2409-14818/) — 2024-09-23
  MobileVLM adds two pretraining stages and four UI tasks to learn element detail and relationships between successive screens. Its Mobile3M dataset contains three million Chinese mobile UI pages connected by recorded transition actions.
- [MobileViews: A Million-scale and Diverse Mobile GUI Dataset](https://awesomecua.github.io/resources/arxiv-2409-14337/) — 2024-09-22
  Builds mobile screenshot and view-hierarchy pairs through automated application traversal and evaluates their usefulness for GUI grounding.
- [The Impact of Element Ordering on LM Agent Performance](https://awesomecua.github.io/resources/arxiv-2409-12089/) — 2024-09-18
  Studies how the ordering of UI elements in an agent observation affects web and desktop performance. A pixel-based element detector and dimensionality-reduction ordering are evaluated on OmniACT when document hierarchy is unavailable.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.github.io/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [WebQuest: A Benchmark for Multimodal QA on Web Page Sequences](https://awesomecua.github.io/resources/arxiv-2409-13711/) — 2024-09-06
  Introduces question answering over individual screens, multiple web pages, and navigation traces to test information synthesis across views.
- [OmniParser for Pure Vision Based GUI Agent](https://awesomecua.github.io/resources/arxiv-2408-00203/) — 2024-08-01
  Parses screenshots into interactable regions and semantic element descriptions to support visually grounded agent actions.
- [UICrit: Enhancing Automated Design Evaluation with a UICritique Dataset](https://awesomecua.github.io/resources/arxiv-2407-08850/) — 2024-07-11
  Introduces designer-authored mobile UI critiques and quality ratings, studying how targeted examples improve automated design feedback.
- [MobileFlow: A Multimodal LLM For Mobile GUI Agent](https://awesomecua.github.io/resources/arxiv-2407-04346/) — 2024-07-05
  Introduces a mobile GUI model using hybrid visual encoders, mixture-of-experts expansion, and alignment training for multilingual interfaces.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [Read Anywhere Pointed: Layout-aware GUI Screen Reading with Tree-of-Lens Grounding](https://awesomecua.github.io/resources/arxiv-2406-19263/) — 2024-06-27
  Introduces Screen Point-and-Read and a hierarchical layout approach that interprets screen regions indicated by a user-selected point.
- [Identifying User Goals from UI Trajectories](https://awesomecua.github.io/resources/arxiv-2406-14314/) — 2024-06-20
  Defines goal identification from observed UI trajectories and an evaluation method for comparing intent descriptions within the same interface context. Experiments reuse Android and web automation data to compare human and model inference of users’ detailed goals.
- [VGA: Vision GUI Assistant -- Minimizing Hallucinations through Image-Centric Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2406-14056/) — 2024-06-20
  Uses image-dependent question-answer data and staged fine-tuning to improve GUI comprehension and reduce unsupported visual answers.
- [GUI Action Narrator: Where and When Did That Action Take Place?](https://awesomecua.github.io/resources/arxiv-2406-13719/) — 2024-06-19
  Introduces Act2Cap and a cursor-guided method for describing GUI actions from video, with temporal and spatial localization challenges.
- [GUICourse: From General Vision Language Models to Versatile GUI Agents](https://awesomecua.github.io/resources/arxiv-2406-11317/) — 2024-06-17
  Introduces GUIEnv, GUIAct, and GUIChat datasets to develop OCR, grounding, component knowledge, and interaction abilities in visual-language models.
- [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://awesomecua.github.io/resources/arxiv-2406-10819/) — 2024-06-16
  Introduces video-based GUI questions and annotations for studying temporal interface understanding across varied interaction settings.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.github.io/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [Tell Me What's Next: Textual Foresight for Generic UI Representations](https://awesomecua.github.io/resources/arxiv-2406-07822/) — 2024-06-12
  Textual Foresight learns UI representations by describing the future screen expected after an action on the current interface. The OpenApp dataset supports pretraining and downstream evaluation of representations that connect individual elements with whole-screen changes.
- [CAAP: Context-Aware Action Planning Prompting to Solve Computer Tasks with Front-End UI Only](https://awesomecua.github.io/resources/arxiv-2406-06947/) — 2024-06-11
  CAAP converts screenshots into textual observations and plans keyboard-and-mouse actions using a prompt that examines task context from multiple perspectives. The agent is evaluated on MiniWoB++ and WebShop using only front-end visual observations.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.github.io/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [SmartFlow: Robotic Process Automation using LLMs](https://awesomecua.github.io/resources/arxiv-2405-12842/) — 2024-05-21
  Presents SmartFlow, which converts visible GUI elements into text for language-model action planning and executes the plan through a scripting engine. A collection of enterprise applications evaluates adaptation to different layouts and tasks.
- [VisualWebBench: How Far Have Multimodal LLMs Evolved in Web Page Understanding and Grounding?](https://awesomecua.github.io/resources/arxiv-2404-05955/) — 2024-04-09
  Separately evaluates web-page reading, understanding, and element grounding across tasks drawn from real websites.
- [Ferret-UI: Grounded Mobile UI Understanding with Multimodal LLMs](https://awesomecua.github.io/resources/arxiv-2404-05719/) — 2024-04-08
  Adapts multimodal modeling to mobile interfaces through detailed screen crops, region annotations, and UI reasoning tasks.
- [ReALM: Reference Resolution As Language Modeling](https://awesomecua.github.io/resources/arxiv-2403-20329/) — 2024-03-29
  Frames conversational and on-screen reference resolution as language modeling, allowing textual representations of screen entities to support user-reference interpretation. Evaluation separately examines on-screen references against an existing resolver and language-model baselines.
- [Computer User Interface Understanding. A New Dataset and a Learning Framework](https://awesomecua.github.io/resources/arxiv-2403-10170/) — 2024-03-15
  Introduces desktop interaction videos and a framework combining synthetic examples with hierarchical contrastive learning for interface classification.
- [Cradle: Empowering Foundation Agents Towards General Computer Control](https://awesomecua.github.io/resources/arxiv-2403-03186/) — 2024-03-05
  Uses screenshot observations, planning modules, and generated low-level keyboard and mouse control for general computer interaction.
- [Improving Language Understanding from Screenshots](https://awesomecua.github.io/resources/arxiv-2402-14073/) — 2024-02-21
  Studies language understanding from text-rendered screenshots using joint image-patch and text prediction; a perception foundation relevant to screen-reading models.
- [CoCo-Agent: A Comprehensive Cognitive MLLM Agent for Smartphone GUI Automation](https://awesomecua.github.io/resources/arxiv-2402-11941/) — 2024-02-19
  Combines screenshots, layout information, and action history with a factored action predictor for smartphone automation.
- [ScreenAI: A Vision-Language Model for UI and Infographics Understanding](https://awesomecua.github.io/resources/arxiv-2402-04615/) — 2024-02-07
  Introduces ScreenAI and screen-annotation training that supports UI question answering, navigation, and summarization data generation.
- [Dual-View Visual Contextualization for Web Navigation](https://awesomecua.github.io/resources/arxiv-2402-04476/) — 2024-02-06
  Uses screenshot geometry and visual content to enrich HTML element representations for web navigation. Nearby elements contribute textual and visual context, with evaluation on cross-task, cross-website, and cross-domain Mind2Web splits.
- [VisionTasker: Mobile Task Automation Using Vision Based UI Understanding and LLM Task Planning](https://awesomecua.github.io/resources/arxiv-2312-11190/) — 2023-12-18
  VisionTasker converts screenshots into textual UI interpretations and presents one interface at a time to an LLM planner for action selection. It evaluates visual representations and execution of 147 tasks on an Android smartphone, including integration with programming by demonstration.
- [CogAgent: A Visual Language Model for GUI Agents](https://awesomecua.github.io/resources/arxiv-2312-08914/) — 2023-12-14
  Introduces a visual-language model with low- and high-resolution image encoders for screenshot understanding and GUI navigation.
- [UReader: Universal OCR-free Visually-situated Language Understanding with Multimodal Large Language Model](https://awesomecua.github.io/resources/arxiv-2310-05126/) — 2023-10-08
  Introduces UReader, which combines unified instruction tuning, auxiliary text-reading tasks and shape-adaptive image crops for OCR-free visual language understanding. Its evaluation includes webpage screenshots alongside documents, tables, charts and natural images.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.github.io/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [WebUI: A Dataset for Enhancing Visual UI Understanding with Web Semantics](https://awesomecua.github.io/resources/arxiv-2301-13280/) — 2023-01-30
  Collects rendered webpages and structural metadata for visual UI modeling, studying how web semantics transfer to interface-understanding tasks.
- [Lexi: Self-Supervised Learning of the UI Language](https://awesomecua.github.io/resources/arxiv-2301-10165/) — 2023-01-23
  Introduces Lexi and UICaption to learn UI image-text representations from descriptions of interface functionality. Evaluation covers UI action entailment, instruction-based retrieval, referring-expression grounding, and UI entity recognition.
- [Understanding HTML with Large Language Models](https://awesomecua.github.io/resources/arxiv-2210-03945/) — 2022-10-08
  Studies language models for HTML element classification, page description and autonomous web navigation. Fine-tuned models are evaluated on MiniWoB, and a distilled, automatically labeled CommonCrawl HTML corpus supports the training approach.
- [Towards Better Semantic Understanding of Mobile Interfaces](https://awesomecua.github.io/resources/arxiv-2210-02663/) — 2022-10-06
  Augments RICO screens and view hierarchies with human labels for icon shape and meaning and for links between UI elements and text labels. It compares image-only and multimodal models on semantic understanding of previously unseen apps.
- [Spotlight: Mobile UI Understanding using Vision-Language Models with a Focus](https://awesomecua.github.io/resources/arxiv-2209-14927/) — 2022-09-29
  Introduces Spotlight, a vision-language model conditioned on a UI screenshot and a selected region of interest. It evaluates screenshot-based mobile UI understanding and explores multitask learning and few-shot prompting.
- [Enabling Conversational Interaction with Mobile UI using Large Language Models](https://awesomecua.github.io/resources/arxiv-2209-08655/) — 2022-09-18
  Studies few-shot prompting of a single language model for four mobile-UI interaction tasks, aiming to support conversational interface use without a separate trained model for each task.
- [ScreenQA: Large-Scale Question-Answer Pairs over Mobile App Screenshots](https://awesomecua.github.io/resources/arxiv-2209-08199/) — 2022-09-16
  Introduces screenshot question answering over mobile interfaces, linking answers to screen content and bounding boxes.
- [Learning to Denoise Raw Mobile UI Layouts for Improving Datasets at Scale](https://awesomecua.github.io/resources/arxiv-2201-04100/) — 2022-01-11
  Introduces CLAY, a pipeline that repairs noisy mobile UI layouts by removing nodes without valid visual counterparts and assigning semantic element types, supported by human-annotated layouts for evaluation.
- [VUT: Versatile UI Transformer for Multi-Modal Multi-Task User Interface Modeling](https://awesomecua.github.io/resources/arxiv-2112-05692/) — 2021-12-10
  The Versatile UI Transformer jointly models interface screenshots, structure, and language for five UI tasks. Its encoder supports element detection when structural metadata is absent, while an autoregressive component handles UI question answering and command grounding.
- [Screen2Words: Automatic Mobile UI Summarization with Multimodal Learning](https://awesomecua.github.io/resources/arxiv-2108-03353/) — 2021-08-07
  Studies mobile-screen summarization using visual, textual, and structural UI information, with a dataset of human-written descriptions.
- [UIBert: Learning Generic Multimodal Representations for UI Understanding](https://awesomecua.github.io/resources/arxiv-2107-13731/) — 2021-07-29
  Learns shared image, text, and structural UI representations through self-supervised tasks based on relationships among interface components.
- [Understanding Mobile GUI: from Pixel-Words to Screen-Sentences](https://awesomecua.github.io/resources/arxiv-2105-11941/) — 2021-05-25
  Models mobile screens as atomic text and graphic components whose relationships are learned by a Screen Transformer. The work introduces RICO-PW annotations and evaluates metadata-free screen understanding on relation, clickability, retrieval, and app-classification tasks.
- [WebSRC: A Dataset for Web-Based Structural Reading Comprehension](https://awesomecua.github.io/resources/arxiv-2101-09465/) — 2021-01-23
  Introduces question answering over webpage text and structure, with aligned HTML, screenshots, and metadata for structural reading comprehension.
- [Screen Recognition: Creating Accessibility Metadata for Mobile Applications from Pixels](https://awesomecua.github.io/resources/arxiv-2101-04893/) — 2021-01-13
  Infers UI elements and accessibility metadata from mobile screenshots to support screen-reader interaction with iOS applications.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.github.io/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Widget Captioning: Generating Natural Language Description for Mobile User Interface Elements](https://awesomecua.github.io/resources/arxiv-2010-04295/) — 2020-10-08
  Introduces crowdsourced descriptions of mobile UI elements and studies multimodal models that generate useful widget captions.
- [Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://awesomecua.github.io/resources/arxiv-2008-05132/) — 2020-08-12
  Compares seven traditional and learned GUI element detectors on more than 50,000 interface images. The analysis motivates a coarse-to-fine non-text detector combined with a learned text detector to address GUI-specific localization requirements.
- [Rico: A Mobile App Dataset for Building Data-Driven Design Applications](https://awesomecua.github.io/resources/url-b560b5d6abaab98483f6/) — 2017-10-20
  Introduces Rico, collecting Android interface designs and interaction traces through crowdsourced use followed by automated exploration. The paper demonstrates UI-layout retrieval using learned representations and describes visual, textual, structural, and interaction data.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.github.io/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.

## 评测基准

- [OS-Critic Bench](https://awesomecua.github.io/resources/url-c73ba0618d1b3c505887/) — Date not recorded
  A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.
- [Screen Point-and-Read / Tree-of-Lens](https://awesomecua.github.io/resources/github-ucsb-ai-screen-point-and-read/) — Date not recorded
  Screen-reading benchmark and Tree-of-Lens implementation for interpreting user-indicated regions and their layout context.
- [VisualWebArena](https://awesomecua.github.io/resources/github-web-arena-x-visualwebarena/) — Date not recorded
  Visually grounded web tasks extending the WebArena evaluation setting.
- [VisualWebBench](https://awesomecua.github.io/resources/github-visualwebbench-visualwebbench/) — Date not recorded
  Evaluation of multimodal models on visual web understanding tasks.
- [WONDERBREAD](https://awesomecua.github.io/resources/github-hazyresearch-wonderbread/) — Date not recorded
  An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.

## 数据集

- [Aria-UI Data](https://awesomecua.github.io/resources/url-f8566bd0394d36ed4f8e/) — Date not recorded
  GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.
- [AutoGUI v1 training data](https://awesomecua.github.io/resources/url-79287058342289aa5d45/) — Date not recorded
  Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.
- [GUI-Lasagne L1](https://awesomecua.github.io/resources/url-0c5659ca9e59d942aea3/) — Date not recorded
  The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.
- [GUI-World](https://awesomecua.github.io/resources/github-dongping-chen-gui-world/) — Date not recorded
  GUI video benchmark and training data covering six scenarios, from Android and iOS to websites and XR, with eight question types for image and video LLMs and the GUI-Vid model.
- [GUIMid training data](https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [Mobile3M](https://awesomecua.github.io/resources/url-b80bfa0a4939a493a11f/) — Date not recorded
  Pre-training corpus for Xiaomi's MobileVLM, distributed as per-app graph archives for mobile apps such as Baidu Map, QQ Music, Ctrip and Vipshop.
- [MobileViews](https://awesomecua.github.io/resources/url-cc4aa8caeee0cff58e73/) — Date not recorded
  Over 600,000 Android screenshot and view-hierarchy pairs from more than 20,000 Google Play apps, collected with an optimized DroidBot, with complete per-app traces.
- [MultiUI](https://awesomecua.github.io/resources/github-neulab-multiui/) — Date not recorded
  7.3 million training samples built from webpage UIs and structured with enhanced accessibility trees, for text-rich visual understanding, released with UIX-Qwen2 models.
- [Rico](https://awesomecua.github.io/resources/url-0b134b082a7bd507fc6a/) — Date not recorded
  Mobile app screenshots, view hierarchies, and interaction traces for UI research.
- [Screen2Words](https://awesomecua.github.io/resources/github-google-research-datasets-screen2words/) — Date not recorded
  Mobile screen descriptions for language-based screen understanding.
- [ScreenQA](https://awesomecua.github.io/resources/github-google-research-datasets-screen-qa/) — Date not recorded
  About 86,000 human-written question-answer pairs over 35,000 Rico mobile screenshots, plus ScreenQA Short and ComplexQA variants, for benchmarking screen content understanding.
- [ScreenRef](https://awesomecua.github.io/resources/url-56bda04bd8d3a438deb3/) — Date not recorded
  GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.
- [UI-Vision](https://awesomecua.github.io/resources/url-2c2004baae4669f8169a/) — Date not recorded
  Desktop GUI data for interface understanding and interaction research.
- [UIBert AppSim and RefExp annotations](https://awesomecua.github.io/resources/github-google-research-datasets-uibert/) — Date not recorded
  Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.
- [UICrit](https://awesomecua.github.io/resources/github-google-research-datasets-uicrit/) — Date not recorded
  Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.
- [Wave UI](https://awesomecua.github.io/resources/url-0dbb55f127da04d95222/) — Date not recorded
  Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.
- [WebUI](https://awesomecua.github.io/resources/url-13b9442bcb6a8b984c4f/) — Date not recorded
  Web screenshot and interface data for UI research.

## 模型

- [CogAgent](https://awesomecua.github.io/resources/github-thudm-cogagent/) — Date not recorded
  Visual language model for GUI understanding and interaction.
- [CogAgent 9B 20241220](https://awesomecua.github.io/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [Ferret-UI](https://awesomecua.github.io/resources/github-apple-ml-ferret/) — Date not recorded
  Screen understanding research within the Ferret model family.
- [GroundGUI-8B](https://awesomecua.github.io/resources/url-de31b07ff24ab15d9bdf/) — Date not recorded
  Screenshot grounding checkpoint that emits a single click in a normalized coordinate space.
- [OmniParser v2 model bundle](https://awesomecua.github.io/resources/url-e21ca7c859544dbf5fb6/) — Date not recorded
  A screen-parsing weight bundle containing icon-region detectors and an icon captioner for converting screenshots into agent-readable interface elements.
- [POINTS-GUI-G 8B](https://awesomecua.github.io/resources/url-cc931199bda2bdf1f5f7/) — Date not recorded
  A specialized interface-grounding checkpoint that returns normalized point coordinates for a requested element in a screenshot.
- [SpiritSight-Agent 8B base](https://awesomecua.github.io/resources/url-52b7de0e43b1afc9c226/) — Date not recorded
  An InternVL2-based visual GUI checkpoint distributed for grounding and interface navigation, with the publisher recommending task-specific fine-tuning of the base release.
- [UIX-Qwen2](https://awesomecua.github.io/resources/url-54997a3c67e54abdf319/) — Date not recorded
  A MultiUI-trained visual-language checkpoint for text-rich webpage understanding and interface tasks.

## 工程与产业

- [CoCo-Agent](https://awesomecua.github.io/resources/github-xbmxb-coco-agent/) — Date not recorded
  Research implementation combining screen and layout perception with conditional action prediction for smartphone automation.
- [Mobilerun Portal (formerly Droidrun Portal)](https://awesomecua.github.io/resources/github-droidrun-mobilerun-portal/) — Date not recorded
  An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.
- [OmniParser](https://awesomecua.github.io/resources/github-microsoft-omniparser/) — Date not recorded
  Screenshot parser that detects interactable regions and captions icons so vision-language models can ground actions, released as V1.5 and V2 weights alongside OmniTool for driving a Windows 11 VM.
- [Seg2Click](https://awesomecua.github.io/resources/github-jcwang0602-seg2click/) — Date not recorded
  Training and inference implementation that predicts an executable-region mask and derives a GUI click from that mask.
- [Sikuli legacy research implementation](https://awesomecua.github.io/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [Tarsier](https://awesomecua.github.io/resources/github-reworkd-tarsier/) — Date not recorded
  Perception utilities for web agents that tag interactable elements with typed IDs an LLM can act on, and use OCR to render page screenshots as whitespace-structured text for models without vision.
- [UI Defect Mocker](https://awesomecua.github.io/resources/github-zju-aces-ise-uidefectmocker/) — Date not recorded
  Synthesizes visual UI defects from mobile screenshots and Android layout metadata to support GUI-testing experiments.
- [VisionTasker](https://awesomecua.github.io/resources/github-akimotoayako-visiontasker/) — Date not recorded
  An Android automation implementation that translates screenshot-based UI understanding into language descriptions for step-by-step LLM planning and action execution.
- [WebMarker](https://awesomecua.github.io/resources/github-reidbarber-webmarker/) — Date not recorded
  A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.
- [Windows-MCP](https://awesomecua.github.io/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
