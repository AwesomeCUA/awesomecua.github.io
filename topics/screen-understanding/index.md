# Screen understanding

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/screen-understanding/records.jsonl

## Papers & surveys

- [Visual Token Routing: Learning to keep tokens that matter](https://awesomecua.com/resources/arxiv-2611-06854/) — 2026-11-04
  Introduces Visual Token Routing (VTR), which selects visual tokens from current and earlier screenshots to reduce computer-use agent inference cost while retaining action-relevant information.
- [MKD2World: A Typed Spatial MarkDown World Model For Web Agents](https://awesomecua.com/resources/arxiv-2611-06544/) — 2026-11-04
  Introduces MKD2World, a desktop web world model that represents interface elements in Typed Spatial Markdown and predicts post-action states, supported by AtomBlock-WebUI annotations.
- [UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2611-00926/) — 2026-10-31
  Introduces UI-UG 2, a mobile UI model trained for component understanding, GUI grounding, and structured interface generation with render-aware RL.
- [Learning to Look Beyond Screens: Transferable Visual Observation from GUI Grounding](https://awesomecua.com/resources/arxiv-2610-37093/) — 2026-10-27
  Introduces LBS, a vision-language model trained with GUI grounding trajectories and crop-and-inspect decisions to study transfer of active visual observation.
- [Chart the Invisible: Interactive Perception for Hidden-Target Exploration in GUI Agents](https://awesomecua.com/resources/arxiv-2610-35237/) — 2026-10-26
  Introduces Hagasu, a scrollable-region perception model that helps GUI agents decide where to swipe to reveal hidden targets, especially on mobile screens.
- [PreView: Enhancing GUI Grounding with Preprocessed Views and Cues](https://awesomecua.com/resources/arxiv-2610-33645/) — 2026-10-24
  Introduces PreView, a screenshot preprocessor that adds cropped views and candidate cues to help existing GUI grounding models identify controls for clicks.
- [IGG: A Benchmark for Interactive GUI Grounding under Visibility Constraints](https://awesomecua.com/resources/arxiv-2610-32536/) — 2026-10-23
  Introduces Interactive GUI Grounding (IGG), a benchmark that tests whether agents can reveal hidden interface targets through interaction before clicking them.
- [WaitLens: Temporal VLM-Based Adaptive Waiting for Industrial GUI Testing Agents](https://awesomecua.com/resources/arxiv-2610-32482/) — 2026-10-23
  Introduces WaitLens, a vision-language model trained on GUI loading trajectories to decide when testing agents can stop waiting for an interface to load.
- [AgentVQA: A Unified Benchmark for Agentic Visual Understanding](https://awesomecua.com/resources/arxiv-2610-31494/) — 2026-10-22
  AgentVQA is an offline visual question-answering benchmark across five agent domains, including web agents and questions involving UI element location.
- [PointerBench: A Diagnostic Benchmark for Fine-Grained GUI Grounding](https://awesomecua.com/resources/arxiv-2610-31274/) — 2026-10-22
  POINTERBENCH is a diagnostic GUI grounding suite covering spreadsheet sub-elements, document characters and targets across professional applications.
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [From Seeing to Reporting: A Theory of Reliable Visual Set Generation in Vision-Language Models](https://awesomecua.com/resources/arxiv-2610-25503/) — 2026-10-18
  FSR models visual reporting and gives inference-time procedures for frozen vision-language models, including screen parsing and GUI target selection.
- [fxBench: Evaluating and Understanding Formula Suggestions in Spreadsheets](https://awesomecua.com/resources/arxiv-2610-24729/) — 2026-10-17
  Introduces fxBench, a benchmark of spreadsheet formula suggestions, and examines context selection, intent understanding and formula writing for editing assistance.
- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.com/resources/arxiv-2610-20390/) — 2026-10-14
  Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure.
- [Towards Safe Autonomy for Computer Use](https://awesomecua.com/resources/arxiv-2610-18508/) — 2026-10-13
  Presents SA-CUA, separating trusted and untrusted visual content using accessibility-derived masking rules and a controlled channel for verifying information before endorsement.
- [MHVF: Training-Free GUI Grounding via Verification-Guided Multi-Hypothesis Search](https://awesomecua.com/resources/arxiv-2610-17792/) — 2026-10-13
  Introduces MHVF, a training-free grounding method that explores several candidate screen regions, verifies them in local views, and uses those checks to guide further search.
- [Seg2Click: Learning Pixel-Level Action Masks for GUI Visual Grounding](https://awesomecua.com/resources/arxiv-2610-16234/) — 2026-10-12
  Recasts GUI grounding as predicting a mask of valid click locations from bounding-box supervision, then derives a click point with a deterministic selection rule.
- [CaptchaAgent: Verifiable Visual Reasoning for CAPTCHA Solving](https://awesomecua.com/resources/arxiv-2610-12866/) — 2026-10-09
  Presents CaptchaAgent, which builds an explicit visual representation of objects and relations, refines ambiguous regions, and checks counterfactual consistency before acting on interactive CAPTCHAs.
- [When Charts Deceive Web Agents: A Paired Benchmark for Misleading Visualization-Grounded Tasks](https://awesomecua.com/resources/arxiv-2610-12823/) — 2026-10-09
  Introduces MisVisAgentBench, a paired executable benchmark that changes chart evidence while holding web tasks fixed, to trace how misleading visualizations affect agent decisions and downstream actions.
- [PlaySuite: A Large-Scale Benchmark for Interactive Visual Intelligence](https://awesomecua.com/resources/arxiv-2610-07127/) — 2026-10-05
  Introduces PlaySuite, a closed-loop video-game benchmark that evaluates interactive visual agents, including computer-use agents, over extended play.
- [Recurrent Latent Visual Search for GUI Grounding](https://awesomecua.com/resources/arxiv-2610-05185/) — 2026-10-04
  Introduces ReLaViS, which performs recurrent visual search inside a grounding model by repeatedly querying screenshot tokens and feeding the resulting spatial evidence back into the model. Coarse-to-fine supervision is constructed from existing interface-element annotations.
- [OpenVAM: Open-World Visual Attention Modeling with VLMs](https://awesomecua.com/resources/arxiv-2609-31364/) — 2026-09-25
  Combines dense saliency prediction with explanations of attended elements, including webpage layouts; evaluates human-attention agreement and textual rationales rather than agent actions.
- [Invisible in Space, Visible in Time: Motion Vision CAPTCHA against GUI Agents](https://awesomecua.com/resources/arxiv-2609-27461/) — 2026-09-23
  MVCAP-Bench tests live browser CAPTCHAs whose foreground meaning emerges through motion against dynamic backgrounds. A foreground-only control separates temporal camouflage difficulty from answer format and browser interaction.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.com/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [When Agents See Differently: Exposing UI Desynchronization Threats in Mobile Agents](https://awesomecua.com/resources/arxiv-2609-16732/) — 2026-09-15
  Investigates mismatches between what humans see on a mobile display and what agents receive through screenshots or accessibility metadata. An automated evaluation framework embeds instruction-agnostic perturbations into functional APK clones and compares static and dynamic agent deviations with human noticeability.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.com/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](https://awesomecua.com/resources/arxiv-2609-10297/) — 2026-09-09
  TRACE orders screenshot evidence for monotonic visual-token reduction using layout priors, instruction relevance and feature novelty. Spatial token reserves and incremental KV contraction aim to preserve useful evidence for future GUI targets without repeatedly encoding retired frames.
- [Beyond the Verdict: Evidence-Aligned Evaluation of Visual Prompt-Injection Guardrails](https://awesomecua.com/resources/arxiv-2609-05535/) — 2026-09-02
  Introduces Mind2Web-Injection, a benchmark for evaluating web-agent guardrail decisions on instruction-screenshot pairs using evidence boxes and image-side counterfactuals.
- [Reflection with Action-Induced Visual Differences for Desktop GUI Agents](https://awesomecua.com/resources/arxiv-2608-24015/) — 2026-08-25
  Introduces Evidence-First Reflection, which separates extraction of action-induced screen changes from judgment of whether an operation achieved its objective. It filters visual differences into relevant evidence before a desktop agent’s reflector decides how execution should continue.
- [GUI-Primitives: Diagnosing Spatial Reasoning Failures in Vision-Language GUI Grounding](https://awesomecua.com/resources/arxiv-2608-21832/) — 2026-08-22
  Introduces GUI-Primitives, a paired-instruction benchmark that changes a spatial relation while holding the screenshot and anchor fixed. Its diagnostics separate failure to localize either candidate from failure to choose the candidate satisfying the relation.
- [Lexical Coupling in GUI Element Grounding: Sentence Embeddings Track Labels across Mobile and Web](https://awesomecua.com/resources/arxiv-2608-21794/) — 2026-08-22
  Studies whether text-embedding GUI grounding scores reflect semantic matching or recovery of visible labels. Same-screen ranking comparisons with lexical baselines expose differences between deployable fusion, oracle selection, and performance on label-poor targets.
- [ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-18307/) — 2026-08-18
  ComponentBench evaluates short interactions with canonical web UI components using verified tasks and matched human reference trajectories. Its diagnostic pipeline compares observation/action representations and analyzes structural difficulty, failure patterns and interaction efficiency.
- [Improving LLM-based Autonomous Web Agents with Filtering](https://awesomecua.com/resources/arxiv-2609-27770/) — 2026-08-16
  Trains HTML-element relevance filters on Mind2Web trajectories and transfers them to WebArena to reduce irrelevant browser context. It also evaluates a zero-shot ColBERT retriever and documents baseline web-agent failure modes.
- [Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching](https://awesomecua.com/resources/arxiv-2608-09654/) — 2026-08-10
  This framework separates frozen-model instruction expansion from a trained layout-aware matcher that localizes GUI elements without coordinate regression. Binary text/icon supervision supports the matcher, with evaluations on GUI grounding and Mind2Web element-selection tasks.
- [Not an A11y: How Android Accessibility Exposes Mobile AI Agents to Indirect Prompt Injection](https://awesomecua.com/resources/arxiv-2608-08939/) — 2026-08-09
  Demonstrates that unsanitized Android accessibility tree metadata exposes mobile GUI agents to stealthy indirect prompt injection attacks.
- [CAP: A Scalable Benchmark for Evaluating Cross-Site Browser Agents with Complex Actions and Perception](https://awesomecua.com/resources/arxiv-2608-08392/) — 2026-08-09
  CAP builds cross-site browser workflows by decomposing websites into operation and perception requirements and recomposing them into tasks. Its judge-based evaluation diagnoses complex interactions and visual-perception failures across real websites.
- [Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents](https://awesomecua.com/resources/arxiv-2608-06171/) — 2026-08-06
  Measures the complementarity, cost and rerun variability of six browser observation modes on WebArena and VisualWebArena. Its routing experiments distinguish an oracle cost opportunity from policies that fail to robustly outperform a fixed observation mode.
- [GUI-Lens: Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs](https://awesomecua.com/resources/arxiv-2608-03270/) — 2026-08-04
  GUI-Lens uses OCR and detected interface components as coordinate references while a general-purpose VLM selects progressively enlarged screenshot crops. Instruction-conditioned checks constrain the crop and click proposals before mapping the final location back to the original screen.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.com/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [StepX-Edge: An On-Device UI Vision-Language Model via Architecture-Training-Deployment Co-Design](https://awesomecua.com/resources/arxiv-2607-22708/) — 2026-07-20
  Introduces StepX-Edge, an on-device UI vision-language model for screen understanding, OCR, question answering, and element grounding on mobile chips.
- [MCP-Driven Accessibility Tree Standardization for AI-Powered Screen Reader Agents](https://awesomecua.com/resources/arxiv-2608-24898/) — 2026-07-13
  Proposes an MCP architecture that presents accessibility trees from Windows, macOS, Android, and web frameworks in a common form for LLM assistive agents interacting with GUIs.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.com/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents](https://awesomecua.com/resources/arxiv-2606-30697/) — 2026-06-29
  LUMOS converts native accessibility metadata and browser UI structure into semantic interface blueprints with stable element identifiers and available actions. It combines live pointer-to-element grounding with an observe-act loop constrained to visible-UI primitives.
- [One Forward Beats Two: InnerZoom for Accurate and Efficient GUI Grounding](https://awesomecua.com/resources/arxiv-2606-30084/) — 2026-06-29
  InnerZoom preserves target-region cues from intermediate decoder layers and reinjects a compact evidence state during coordinate decoding. Its single-forward GUI grounder is compared with crop-and-rerun zooming and matched supervised/RL baselines for accuracy and inference cost.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.com/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.com/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [VISUALSKILL: Multimodal Skills for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-18448/) — 2026-06-16
  VISUALSKILL organizes application-specific text and figures into hierarchical skills retrieved on demand through an MCP tool. Skills combine authored documentation with live UI exploration, and matched multimodal/text-only comparisons test their utility for interface identification and workflow-state verification.
- [Running the Gauntlet: Hard Agentic Tasks](https://awesomecua.com/resources/arxiv-2606-14397/) — 2026-06-12
  Introduces GauntletBench, a web-based benchmark of vision-intensive tasks in five professional applications for assessing agent perception, 3D reasoning, and generalisation.
- [Reasoning for Mobile User Experience with Multimodal LLMs: Task, Benchmark, and Approach](https://awesomecua.com/resources/arxiv-2606-13192/) — 2026-06-11
  Introduces UXBench for diagnosing usability issues from UI screenshots and UI-UX, a reinforcement-trained model for reasoning about those interface problems.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [Signal-Driven Observation for Long-Horizon Web Agents](https://awesomecua.com/resources/arxiv-2606-06708/) — 2026-06-04
  Proposes Signal-Driven Observation: a separate call selects relevant DOM elements and selectors, and a detector requests new observations only after meaningful browser events or failures. The paper frames observation timing and compression as an architectural research problem for long-horizon web agents.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.com/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [Benchmarking Living-Screen-Native GUI Agents on Short-Video Platforms](https://awesomecua.com/resources/arxiv-2606-04701/) — 2026-06-03
  LivingScreen evaluates agents in a browser-based short-video environment where observing content consumes time and affects subsequent actions. Its task suite scores accuracy together with information efficiency to diagnose over- and under-observation on continuously changing screens.
- [Context-Aware Workflow Decomposition for Automated Mobile UI Annotation Using Multimodal Large Language Models](https://awesomecua.com/resources/arxiv-2606-02208/) — 2026-06-01
  Studies staged prompting for automated mobile UI element annotation, comparing workflow depths and element groupings on expert-annotated MUIAnno screens.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.com/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [DiffSpot: Can VLMs Spot Fine-Grained Visual Differences in Web Interfaces?](https://awesomecua.com/resources/arxiv-2605-29615/) — 2026-05-28
  DiffSpot benchmarks detection of fine visual changes in rendered web interfaces using image pairs created by single-property CSS mutations.
- [ChartAct: A Benchmark for Dynamic Chart Understanding](https://awesomecua.com/resources/arxiv-2605-26994/) — 2026-05-26
  ChartAct benchmarks multimodal models and GUI agents on interactive charts from websites, requiring actions such as hovering or zooming to answer questions.
- [AQuaUI: Visual Token Reduction for GUI Agents with Adaptive Quadtrees](https://awesomecua.com/resources/arxiv-2605-19260/) — 2026-05-19
  AQuaUI reduces screenshot tokens for GUI agents at inference time with adaptive quadtrees that retain spatial positions and reuse prior tree structure across steps.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.com/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [ScreenSearch: Uncertainty-Aware OS Exploration](https://awesomecua.com/resources/arxiv-2605-16024/) — 2026-05-15
  ScreenSearch explores desktop GUI states by indexing and deduplicating UIA-tree screens, then using outcome ambiguity and frontier rewards to guide graph search.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.com/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-11212/) — 2026-05-11
  Trains GUI agents with a learned selector that removes repeated visual patches across consecutive screenshots while preserving spatial structure. ReVision evaluates this history representation on OSWorld, WebTailBench and AgentNetBench.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.com/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [Region4Web: Rethinking Observation Space Granularity for Web Agents](https://awesomecua.com/resources/arxiv-2605-07134/) — 2026-05-08
  Reorganizes webpage accessibility trees into functional regions through hierarchical decomposition and semantic abstraction. PageDigest supplies a persistent region-level observation to web agents, evaluated on WebArena.
- [BAMI: Training-Free Bias Mitigation in GUI Grounding](https://awesomecua.com/resources/arxiv-2605-06664/) — 2026-05-07
  BAMI uses coarse-to-fine focus and candidate selection at inference time to address precision and ambiguity errors in GUI grounding.
- [AutoFocus: Uncertainty-Aware Active Visual Search for GUI Grounding](https://awesomecua.com/resources/arxiv-2605-02630/) — 2026-05-04
  Presents AutoFocus, a training-free grounding method that turns sampled coordinates and token uncertainty into spatial region proposals. Shape-aware crops and visual comparison select a target while retaining surrounding interface context.
- [A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-00551/) — 2026-05-01
  A11y-Compressor transforms linearized accessibility trees through modal detection, redundancy reduction and semantic structuring. Its OSWorld evaluation measures both observation-token reduction and task success.
- [Beyond Screenshots: Evaluating VLMs' Understanding of UI Animations](https://awesomecua.com/resources/arxiv-2604-26148/) — 2026-04-28
  AniMINT evaluates how VLMs perceive, explain and interpret UI animations using densely annotated videos. The study distinguishes basic motion recognition from higher-level animation meaning and probes motion, context and perceptual cues.
- [SnapGuard: Lightweight Prompt Injection Detection for Screenshot-Based Web Agents](https://awesomecua.com/resources/arxiv-2604-25562/) — 2026-04-28
  SnapGuard detects screenshot-based prompt injection through complementary visual-stability and recovered textual cues. Its evaluation compares detection quality and inference cost across attack and benign-page settings, rather than establishing universal runtime prevention.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.com/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [PageGuide: Browser extension to assist users in navigating a webpage and locating information](https://awesomecua.com/resources/arxiv-2604-23772/) — 2026-04-26
  PageGuide is a browser extension that highlights evidence for answers on a page and guides users through web pages with evidence captured at each step.
- [LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent](https://awesomecua.com/resources/url-4395ff8522cd77109b83/) — 2026-04-20
  Training-free GUI agent that indexes screen elements via icon detection and OCR, checks each step with multi-level reflection and recovers by fallback clicks or rollback; introduces LongGUIBench, tasks over 15 steps.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.com/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [PrecisionCUA: Iterative Visual Refinement for Pixel-Precise Cursor Grounding in Code Editors](https://awesomecua.com/resources/arxiv-2604-13019/) — 2026-04-14
  Studies iterative cursor grounding in dense code-editor interfaces, using visual feedback from earlier attempts to correct displacement. PrecisionCUA evaluates this closed-loop process across multiple model families on coding-interface tasks.
- [Preference Redirection via Attention Concentration: An Attack on Computer Use Agents](https://awesomecua.com/resources/arxiv-2604-08005/) — 2026-04-09
  Introduces PRAC, an adversarial-patch attack that redirects a computer-use agent's visual attention to steer product selection on an online shopping platform.
- [What's Missing in Screen-to-Action? Towards a UI-in-the-Loop Paradigm for Multimodal GUI Reasoning](https://awesomecua.com/resources/arxiv-2604-06995/) — 2026-04-08
  Introduces UILoop, which inserts explicit UI-element localization, function and usage reasoning between screen observation and action. UI Comprehension-Bench evaluates these element-level capabilities with three metrics.
- [Read More, Think More: Revisiting Observation Reduction for Web Agents](https://awesomecua.com/resources/arxiv-2604-01535/) — 2026-04-02
  Studies HTML and accessibility-tree observations for web agents, relating their usefulness to model capability and thinking budget, and proposes diff-based observation history to save tokens.
- [PixelPrune: Pixel-Level Adaptive Visual Token Reduction via Predictive Coding](https://awesomecua.com/resources/arxiv-2604-00886/) — 2026-04-01
  PixelPrune removes pixel-redundant patches before the vision encoder, reducing both encoding and downstream language-model work. The training-free method evaluates lossless and controlled-lossy compression on document and GUI tasks.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.com/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [Where and How to Prune: An Empirical Study of Visual Token Pruning for GUI Agent Navigation](https://awesomecua.com/resources/arxiv-2603-26041/) — 2026-03-27
  Studies visual token pruning for GUI navigation, separating reusable screenshot encoder embeddings from later language-model computation. The analysis examines foreground-background token allocation and spatial coverage when pruning historical screenshots.
- [GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks](https://awesomecua.com/resources/arxiv-2603-25864/) — 2026-03-26
  GUIDE evaluates whether models can recognize a user’s behavior, infer intent and decide when to offer help during open-ended software tasks. It uses narrated screen recordings of novice users and studies the effect of additional user context on these assistance decisions.
- [MANA: Towards Efficient Mobile Ad Detection via Multimodal Agentic UI Navigation](https://awesomecua.com/resources/arxiv-2603-20351/) — 2026-03-20
  MANA combines visual, temporal and exploration signals to guide navigation toward mobile advertisements. It evaluates ad detection and interaction cost on commercial smartphones, including obfuscated-ad cases.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.com/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [Zoom to Essence: Trainless GUI Grounding by Inferring upon Interface Elements](https://awesomecua.com/resources/arxiv-2603-14448/) — 2026-03-15
  Presents ZoomUI, a training-free grounding method that expresses instructions as visual element descriptions and uses model attention to zoom progressively into relevant interface regions. Evaluation examines instruction-to-element localization on GUI benchmarks.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.com/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [ST-Lite: Training-Free KV Cache Compression with Spatio-Trajectory Guidance for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2603-00188/) — 2026-02-27
  Introduces ST-Lite, a training-free KV cache compression scheme for vision-language GUI agents that filters redundant frames and preserves small UI elements in interaction traces.
- [CoME: Empowering Channel-of-Mobile-Experts with Informative Hybrid-Capabilities Reasoning](https://awesomecua.com/resources/arxiv-2602-24142/) — 2026-02-27
  Introduces Channel-of-Mobile-Experts (CoME), a mobile agent with experts for screen summary, subtask planning, action decisions and action functions, trained in stages with InfoGain-Driven DPO (Info-DPO).
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.com/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.com/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.com/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [Trifuse: Enhancing Attention-Based GUI Grounding via Multimodal Fusion](https://awesomecua.com/resources/arxiv-2602-06351/) — 2026-02-06
  Trifuse combines attention-based localization with OCR text cues and icon captions to ground GUI instructions. Its fusion procedure favors cross-modal agreement and sharp location peaks, and is evaluated without task-specific fine-tuning.
- [Generative Visual Code Mobile World Models](https://awesomecua.com/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [Where Not to Learn: Prior-Aligned Training with Subset-based Attribution Constraints](https://awesomecua.com/resources/arxiv-2602-07008/) — 2026-01-30
  Proposes training with subset-based attribution constraints so models attend to intended evidence, evaluated on image classification and GUI-agent click decisions.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.com/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [FocusUI: Efficient UI Grounding via Position-Preserving Visual Token Selection](https://awesomecua.com/resources/arxiv-2601-03928/) — 2026-01-07
  FocusUI selects instruction-relevant screenshot patches while preserving their positional structure for GUI grounding. Its PosPad scheme replaces runs of dropped tokens with positional markers and is evaluated under reduced token budgets.
- [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://awesomecua.com/resources/arxiv-2512-22009/) — 2025-12-26
  Introduces iSHIFT, which combines latent reasoning with perception-control tokens to adapt GUI inference. The agent switches between detailed regional grounding and faster use of global visual cues.
- [DAVE: A VLM Vision Encoder for Document Understanding and Web Agents](https://awesomecua.com/resources/arxiv-2512-17221/) — 2025-12-19
  DAVE trains a vision encoder for document images and web agents using self-supervised pretraining followed by supervised parsing and localization. It combines decoder-specific encoder merging with feature fusion and evaluates web localization and agent benchmarks alongside document tasks.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.com/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](https://awesomecua.com/resources/arxiv-2512-00756/) — 2025-11-30
  MPR-GUI evaluates GUI perception and reasoning through strictly aligned tasks in six languages. GUI-XLI adjusts non-English hidden representations toward English representations at language-sensitive layers during inference to address the measured cross-language gaps.
- [Qwen3-VL Technical Report](https://awesomecua.com/resources/arxiv-2511-21631/) — 2025-11-26
  Describes the Qwen3-VL dense and MoE vision-language models, with 256K-token interleaved context, interleaved-MRoPE, DeepStack and textual video timestamps; a general foundation model aimed partly at agentic use.
- [Prune4Web: DOM Tree Pruning Programming for Web Agent](https://awesomecua.com/resources/arxiv-2511-21398/) — 2025-11-26
  Introduces Prune4Web, where generated scoring programs filter DOM elements according to decomposed subtasks before grounding. An annotation pipeline and two-turn training procedure coordinate the planner, programmatic filter and grounder.
- [MEGA-GUI: Multi-stage Enhanced Grounding Agents for GUI Elements](https://awesomecua.com/resources/arxiv-2511-13087/) — 2025-11-17
  Introduces MEGA-GUI, which separates coarse region selection from fine-grained interface-element grounding. Bidirectional zooming and context-aware instruction rewriting coordinate specialized vision-language agents across visual scales.
- [GUI-AIMA: Aligning Intrinsic Multimodal Attention with a Context Anchor for GUI Grounding](https://awesomecua.com/resources/arxiv-2511-00810/) — 2025-11-02
  Introduces GUI-AIMA, which supervises instruction-relevant attention over visual patches instead of directly training coordinate text generation. Patch-level grounding can be combined with an optional zoom stage and is evaluated across GUI localization benchmarks.
- [UI-Hawk: Unleashing the Screen Stream Understanding for Mobile GUI Agents](https://awesomecua.com/resources/url-9113270916a36b4b76f1/) — 2025-11
  Mobile GUI agent whose history-aware visual encoder reads earlier screenshots with the current one, trained by a curriculum from grounding, referring, screen QA and summarization to navigation; adds the FunUI benchmark.
- [GUI Knowledge Bench: Revealing the Knowledge Gap of VLMs in GUI Tasks](https://awesomecua.com/resources/arxiv-2510-26098/) — 2025-10-30
  GUI Knowledge Bench tests knowledge of widgets, interactions, and procedures across six named platforms and 292 applications to assess VLMs used for GUI tasks.
- [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.com/resources/arxiv-2510-16051/) — 2025-10-16
  GUIrilla systematically explores macOS interfaces to collect interaction traces and accessibility metadata for downstream GUI research. It organizes these observations into hierarchical MacApp Trees and describes an accessibility-driven collection library.
- [State Your Intention to Steer Your Attention: An AI Assistant for Intentional Digital Living](https://awesomecua.com/resources/arxiv-2510-14513/) — 2025-10-16
  Introduces an assistant that reads screenshots, application titles, and URLs to compare computer activity with a user's stated intention and send notifications when it diverges.
- [Improving GUI Grounding with Explicit Position-to-Coordinate Mapping](https://awesomecua.com/resources/arxiv-2510-03230/) — 2025-10-03
  This work addresses GUI localization errors caused by mismatches between visual patch positions and output pixel coordinates. RULER tokens provide explicit coordinate references, while Interleaved MRoPE balances width and height encoding; evaluation uses the ScreenSpot benchmark family.
- [FocusAgent: Simple Yet Effective Ways of Trimming the Large Context of Web Agents](https://awesomecua.com/resources/arxiv-2510-03204/) — 2025-10-03
  Introduces FocusAgent, which uses a lightweight LLM to select task-relevant lines from web agents' accessibility-tree observations, reducing context size and exposure to prompt injection.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.com/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [GUI-PRA: Process Reward Agent for GUI Tasks](https://awesomecua.com/resources/arxiv-2509-23263/) — 2025-09-27
  GUI-PRA evaluates GUI progress by generating task-specific criteria and actively inspecting visual evidence with tools. It tests offline judgment on OS-Critic Bench and the effects of this feedback on online mobile policies in AndroidWorld.
- [Benchmarking MLLM-based Web Understanding: Reasoning, Robustness and Safety](https://awesomecua.com/resources/arxiv-2509-21782/) — 2025-09-26
  Evaluates multimodal LLMs on web interface reasoning, visual perturbation robustness, and safety-critical web understanding tasks.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.com/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [How Auxiliary Reasoning Unleashes GUI Grounding in VLMs](https://awesomecua.com/resources/arxiv-2509-11548/) — 2025-09-15
  Studies the gap between latent visual grounding and explicit coordinate output in general vision-language models. Three zero-shot methods add axes, grids, or labeled intersections to GUI screenshots so models can express spatial locations without fine-tuning.
- [SparkUI-Parser: Enhancing GUI Perception with Robust Grounding and Parsing](https://awesomecua.com/resources/arxiv-2509-04908/) — 2025-09-05
  Introduces SparkUI-Parser, which adds continuous coordinate decoding and a rejection mechanism for nonexistent targets to a multimodal model. It also presents ScreenParse for evaluating structural interface perception.
- [Learning Active Perception via Self-Evolving Preference Optimization for GUI Grounding](https://awesomecua.com/resources/arxiv-2509-04243/) — 2025-09-04
  LASER builds preference data for multi-step GUI perception by combining Monte Carlo quality estimates with region-overlap evaluation. Its self-evolving training encourages relevant region selection and adapts the amount of reasoning before predicting screen coordinates.
- [PG-Agent: An Agent Powered by Page Graph](https://awesomecua.com/resources/arxiv-2509-03536/) — 2025-08-27
  Introduces PG-Agent, which turns GUI operation episodes into page graphs and retrieves guidance from them to support task decomposition in new scenarios.
- [DashboardQA: Benchmarking Multimodal Agents for Question Answering on Interactive Dashboards](https://awesomecua.com/resources/arxiv-2508-17398/) — 2025-08-24
  Introduces DashboardQA to evaluate how vision-language GUI agents answer questions by interacting with dashboards, grounding elements, and planning actions.
- [WebMMU: A Benchmark for Multimodal Multilingual Website Understanding and Code Generation](https://awesomecua.com/resources/arxiv-2508-16763/) — 2025-08-22
  Introduces WebMMU, a multilingual benchmark for website visual question answering, element grounding, code editing, and mockup-to-code generation.
- [Structuring GUI Elements through Vision Language Models: Towards Action Space Generation](https://awesomecua.com/resources/arxiv-2508-16271/) — 2025-08-22
  Introduces IAML training, which augments coordinate samples to help multimodal models locate GUI elements from screen content and user instructions.
- [V2P: Visual Attention Calibration for GUI Grounding via Background Suppression and Center Peaking](https://awesomecua.com/resources/arxiv-2508-13634/) — 2025-08-19
  V2P trains GUI grounding by suppressing attention to background regions and emphasizing the center of the target element. It represents target importance with size-dependent Gaussian heatmaps and evaluates the contribution of each component on ScreenSpot-v2 and ScreenSpot-Pro.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.com/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [Beyond Pixels: Exploring DOM Downsampling for LLM-Based Web Agents](https://awesomecua.com/resources/arxiv-2508-04412/) — 2025-08-06
  D2Snap reduces serialized DOM observations while preserving actionable elements and features that distinguish their uses. The study compares reduced DOM inputs with screenshot-based observations for a web agent on tasks sampled from Online-Mind2Web.
- [Uncertainty-Aware GUI Agent: Adaptive Perception through Component Recommendation and Human-in-the-Loop Refinement](https://awesomecua.com/resources/arxiv-2508-04025/) — 2025-08-06
  RecAgent narrows attention to recommended UI components and requests user feedback when task intent or decisions remain uncertain. It introduces ComplexAction to evaluate specified single-step GUI actions in difficult interface scenarios.
- [Phi-Ground Tech Report: Advancing Perception in GUI Grounding](https://awesomecua.com/resources/arxiv-2507-23779/) — 2025-07-31
  Reports a GUI-grounding model family and empirical design choices covering source data, perception training, and coordinate prediction.
- [Screen2AX: Vision-Based Approach for Automatic macOS Accessibility Generation](https://awesomecua.com/resources/arxiv-2507-16704/) — 2025-07-22
  Introduces Screen2AX, which creates hierarchical accessibility metadata from macOS screenshots, plus datasets and Screen2AX-Task for desktop-agent evaluation.
- [A Training-Free, Task-Agnostic Framework for Enhancing MLLM Performance on High-Resolution Images](https://awesomecua.com/resources/arxiv-2507-10202/) — 2025-07-14
  Introduces Extract Candidate then Predict (ECP), a training-free two-stage method for high-resolution images, evaluated partly on 4K GUI grounding.
- [R-VLM: Region-Aware Vision Language Model for Precise GUI Grounding](https://awesomecua.com/resources/arxiv-2507-05673/) — 2025-07-08
  R-VLM localizes GUI elements through zoomed-in region proposals and an intersection-over-union-aware training objective. It evaluates the grounding model on ScreenSpot and AgentStudio and studies its effect on navigation in AITW and Mind2Web.
- [FormGym: Doing Paperwork with Agents](https://awesomecua.com/resources/arxiv-2506-14079/) — 2025-06-17
  Introduces FormGym, a benchmark for filling image-only forms, and FieldFinder, a tool that helps LLMs locate where to place text on those forms.
- [DiMo-GUI: Advancing Test-time Scaling in GUI Grounding via Modality-Aware Visual Reasoning](https://awesomecua.com/resources/arxiv-2507-00008/) — 2025-06-12
  Separates textual and iconic UI elements and iteratively focuses visual regions to refine grounding without additional model training.
- [FormFactory: An Interactive Benchmarking Suite for Multimodal Form-Filling Agents](https://awesomecua.com/resources/arxiv-2506-01520/) — 2025-06-02
  Introduces FormFactory, an interactive web-based benchmark for agents filling online forms, with varied field formats and evaluation of instruction-to-field alignment.
- [Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents](https://awesomecua.com/resources/arxiv-2505-24878/) — 2025-05-30
  Open CaptchaWorld evaluates multimodal agents on interactive browser-based CAPTCHA puzzles. Its benchmark distinguishes task success from the depth of visual reasoning and interaction needed to complete a puzzle.
- [Grounded Reinforcement Learning for Visual Reasoning](https://awesomecua.com/resources/arxiv-2505-23678/) — 2025-05-29
  Introduces ViGoRL, a visual reasoning model trained to reference image coordinates and zoom during reasoning; its evaluations include GUI element localization.
- [Seed1.5-VL Technical Report](https://awesomecua.com/resources/arxiv-2505-07062/) — 2025-05-11
  Reports Seed1.5-VL, a general vision-language model evaluated on GUI control and gameplay alongside visual understanding and reasoning tasks.
- [Do MLLMs Capture How Interfaces Guide User Behavior? A Benchmark for Multimodal UI/UX Design Understanding](https://awesomecua.com/resources/arxiv-2505-05026/) — 2025-05-08
  Introduces WiserUI-Bench, pairing real UI variants from industry A/B tests with observed behavioral winners and expert explanations. It evaluates models’ ability to predict the more effective interface and explain its effect on user behavior.
- [Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents](https://awesomecua.com/resources/url-60a2dc930fa11860858a/) — 2025-05-01
  Trains a separate language model to rewrite lengthy web page observations into focused descriptions for LLM web agents, keeping training targets that let several LLMs predict the correct next action.
- [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.com/resources/arxiv-2505-00684/) — 2025-05-01
  RegionFocus adds visual test-time scaling by zooming into selected screenshot regions and maintaining an image-based map of landmarks and actions. It evaluates this grounding procedure with UI-TARS and Qwen2.5-VL on ScreenSpot-Pro and WebVoyager.
- [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.com/resources/arxiv-2504-16419/) — 2025-04-23
  Introduces PixelWeb, a webpage GUI dataset with element images, contours, and pixel masks. Its annotation pipeline combines bitmap channel information with DOM-based visibility and stacking analysis to address occlusion and overlapping elements.
- [Kimi-VL Technical Report](https://awesomecua.com/resources/arxiv-2504-07491/) — 2025-04-10
  Presents Kimi-VL, a general vision-language model evaluated on multi-turn agent tasks including OSWorld and on ScreenSpot-Pro alongside other vision-language tasks.
- [ScreenLLM: Stateful Screen Schema for Efficient Action Understanding and Prediction](https://awesomecua.com/resources/arxiv-2503-20978/) — 2025-03-26
  Represents interface interactions with a stateful screen schema to model user behavior and support action understanding and prediction.
- [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.com/resources/arxiv-2503-15661/) — 2025-03-19
  Provides annotated desktop demonstrations for evaluating element grounding, layout grounding, and action prediction.
- [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.com/resources/arxiv-2503-14021/) — 2025-03-18
  Uses specialized graphical, textual, and spatial perception components with a data-collection pipeline to improve GUI understanding.
- [WebNav: An Intelligent Agent for Voice-Controlled Web Navigation](https://awesomecua.com/resources/arxiv-2503-13843/) — 2025-03-18
  Introduces WebNav, a web navigation agent that turns natural-language commands into GUI actions using screenshot context, DOM labels, and separate LLMs for planning and action parameters.
- [DeskVision: Large Scale Desktop Region Captioning for Advanced GUI Agents](https://awesomecua.com/resources/arxiv-2503-11170/) — 2025-03-14
  Introduces AutoCaptioner, DeskVision, and GUIExplorer for generating desktop region descriptions and training interface-understanding models.
- [MIP against Agent: Malicious Image Patches Hijacking Multimodal OS Agents](https://awesomecua.com/resources/arxiv-2503-10809/) — 2025-03-13
  Studies Malicious Image Patches (MIPs), altered screen regions that can steer screenshot-based OS agents into harmful mouse and keyboard actions.
- [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.com/resources/arxiv-2503-03196/) — 2025-03-05
  Introduces SpiritSight and GUI-Lasagne data, combining multilevel GUI annotations with visual block parsing for high-resolution interface navigation.
- [Qwen2.5-VL Technical Report](https://awesomecua.com/resources/arxiv-2502-13923/) — 2025-02-19
  Reports Qwen2.5-VL, a vision-language model that can act as a visual agent for tasks involving computer and mobile-device operation, alongside broader visual tasks.
- [TRISHUL: Towards Region Identification and Screen Hierarchy Understanding for Large VLM based GUI Agents](https://awesomecua.com/resources/arxiv-2502-08226/) — 2025-02-12
  Combines hierarchical screen parsing with spatially enriched element descriptions to support both locating GUI targets and describing indicated elements.
- [RWKV-UI: UI Understanding with Enhanced Perception and Reasoning](https://awesomecua.com/resources/arxiv-2502-03971/) — 2025-02-06
  RWKV-UI is a visual language model for high-resolution web interfaces that uses layout detection and reasoning-chain visual prompts to understand pages.
- [Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model](https://awesomecua.com/resources/url-6942e8211a0f59eb7878/) — 2025
  Presents Halligan, a VLM agent that abstracts visual CAPTCHAs into frames, elements and keypoints and solves each as a search problem through generated interaction code, tested on 2,600 challenges of 26 types.
- [Iris: Breaking GUI Complexity with Adaptive Focus and Self-Refining](https://awesomecua.com/resources/arxiv-2412-10342/) — 2024-12-13
  Combines information-sensitive image cropping with a learning loop between element description and grounding for complex interface understanding.
- [Falcon-UI: Understanding GUI Before Following User Instructions](https://awesomecua.com/resources/arxiv-2412-09362/) — 2024-12-12
  Pretrains GUI-context understanding with instruction-free web interactions before fine-tuning Falcon-UI on instructed GUI tasks.
- [BigDocs: An Open Dataset for Training Multimodal Models on Document and Code Tasks](https://awesomecua.com/resources/arxiv-2412-04626/) — 2024-12-05
  BigDocs-7.5M provides multimodal document data, while BigDocs-Bench includes GUI reasoning and image-to-code tasks relevant to screen understanding.
- [EDGE: Enhanced Grounded GUI Understanding with Enriched Multi-Granularity Synthetic Data](https://awesomecua.com/resources/arxiv-2410-19461/) — 2024-10-25
  Synthesizes GUI training examples at multiple levels of detail from webpages and studies transfer of learned understanding to other interface environments.
- [Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://awesomecua.com/resources/arxiv-2410-18967/) — 2024-10-24
  Extends Ferret-UI across device platforms with adaptive visual scaling and synthetic data for referring, grounding, and user-centered UI tasks.
- [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://awesomecua.com/resources/arxiv-2410-13824/) — 2024-10-17
  Builds MultiUI by generating instructions from webpage accessibility trees and pairing them with screenshots for multimodal training. Evaluation examines web-interface understanding, including VisualWebBench and Mind2Web, and transfer to other text-rich visual tasks.
- [DreamStruct: Understanding Slides and User Interfaces via Synthetic Data Generation](https://awesomecua.com/resources/arxiv-2410-00201/) — 2024-09-30
  Generates labeled slides and interface visuals through code to support visual element detection, description, and classification with less manual annotation.
- [MM1.5: Methods, Analysis & Insights from Multimodal LLM Fine-tuning](https://awesomecua.com/resources/arxiv-2409-20566/) — 2024-09-30
  MM1.5 is a multimodal model family trained with curated data mixtures; its MM1.5-UI variant targets mobile UI understanding.
- [Inferring Alt-text For UI Icons With Large Language Models During App Development](https://awesomecua.com/resources/arxiv-2409-18060/) — 2024-09-26
  Introduces IconDesc, which generates mobile icon alt-text from partial UI context such as element identifiers, bounds, nearby text and hierarchy. Model evaluation and a user study examine the resulting accessibility descriptions.
- [MobileVLM: A Vision-Language Model for Better Intra- and Inter-UI Understanding](https://awesomecua.com/resources/arxiv-2409-14818/) — 2024-09-23
  MobileVLM adds two pretraining stages and four UI tasks to learn element detail and relationships between successive screens. Its Mobile3M dataset contains three million Chinese mobile UI pages connected by recorded transition actions.
- [MobileViews: A Million-scale and Diverse Mobile GUI Dataset](https://awesomecua.com/resources/arxiv-2409-14337/) — 2024-09-22
  Builds mobile screenshot and view-hierarchy pairs through automated application traversal and evaluates their usefulness for GUI grounding.
- [The Impact of Element Ordering on LM Agent Performance](https://awesomecua.com/resources/arxiv-2409-12089/) — 2024-09-18
  Studies how the ordering of UI elements in an agent observation affects web and desktop performance. A pixel-based element detector and dimensionality-reduction ordering are evaluated on OmniACT when document hierarchy is unavailable.
- [Grounded GUI Understanding for Vision-Based Spatial Intelligent Agent: Exemplified by Extended Reality Apps](https://awesomecua.com/resources/arxiv-2409-10811/) — 2024-09-17
  Orienter detects interactable GUI elements in XR applications by interpreting scene context and revisiting candidate elements through a validation and reflection loop. It addresses open-vocabulary element types and context-dependent interactability.
- [PeriGuru: A Peripheral Robotic Mobile App Operation Assistant based on GUI Image Understanding and Prompting with LLM](https://awesomecua.com/resources/arxiv-2409-09354/) — 2024-09-14
  PeriGuru interprets smartphone GUI screenshots with computer vision and uses a language model to decide the next action. A peripheral robotic arm executes the phone interactions, providing an alternative mechanism for operating mobile apps.
- [WebQuest: A Benchmark for Multimodal QA on Web Page Sequences](https://awesomecua.com/resources/arxiv-2409-13711/) — 2024-09-06
  Introduces question answering over individual screens, multiple web pages, and navigation traces to test information synthesis across views.
- [OmniParser for Pure Vision Based GUI Agent](https://awesomecua.com/resources/arxiv-2408-00203/) — 2024-08-01
  Parses screenshots into interactable regions and semantic element descriptions to support visually grounded agent actions.
- [UICrit: Enhancing Automated Design Evaluation with a UICritique Dataset](https://awesomecua.com/resources/arxiv-2407-08850/) — 2024-07-11
  Introduces designer-authored mobile UI critiques and quality ratings, studying how targeted examples improve automated design feedback.
- [MobileFlow: A Multimodal LLM For Mobile GUI Agent](https://awesomecua.com/resources/arxiv-2407-04346/) — 2024-07-05
  Introduces a mobile GUI model using hybrid visual encoders, mixture-of-experts expansion, and alignment training for multilingual interfaces.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.com/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [RealWeb: A Benchmark for Universal Instruction Following in Realistic Web Services Navigation](https://awesomecua.com/resources/url-a998ab1efc741ba69d82/) — 2024-07
  Introduces RealWeb, a Chinese benchmark of 11,739 instructions on 40 real websites with annotated screenshots and slot trees, plus a baseline that detects page regions, parses instructions and acts on the pages.
- [Read Anywhere Pointed: Layout-aware GUI Screen Reading with Tree-of-Lens Grounding](https://awesomecua.com/resources/arxiv-2406-19263/) — 2024-06-27
  Introduces Screen Point-and-Read and a hierarchical layout approach that interprets screen regions indicated by a user-selected point.
- [Identifying User Goals from UI Trajectories](https://awesomecua.com/resources/arxiv-2406-14314/) — 2024-06-20
  Defines goal identification from observed UI trajectories and an evaluation method for comparing intent descriptions within the same interface context. Experiments reuse Android and web automation data to compare human and model inference of users’ detailed goals.
- [VGA: Vision GUI Assistant -- Minimizing Hallucinations through Image-Centric Fine-Tuning](https://awesomecua.com/resources/arxiv-2406-14056/) — 2024-06-20
  Uses image-dependent question-answer data and staged fine-tuning to improve GUI comprehension and reduce unsupported visual answers.
- [GUI Action Narrator: Where and When Did That Action Take Place?](https://awesomecua.com/resources/arxiv-2406-13719/) — 2024-06-19
  Introduces Act2Cap and a cursor-guided method for describing GUI actions from video, with temporal and spatial localization challenges.
- [GUICourse: From General Vision Language Models to Versatile GUI Agents](https://awesomecua.com/resources/arxiv-2406-11317/) — 2024-06-17
  Introduces GUIEnv, GUIAct, and GUIChat datasets to develop OCR, grounding, component knowledge, and interaction abilities in visual-language models.
- [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://awesomecua.com/resources/arxiv-2406-10819/) — 2024-06-16
  Introduces video-based GUI questions and annotations for studying temporal interface understanding across varied interaction settings.
- [Practical, Automated Scenario-based Mobile App Testing](https://awesomecua.com/resources/arxiv-2406-08340/) — 2024-06-12
  ScenTest builds scenario-specific event knowledge graphs from crowdsourced test reports containing GUI and action information. It uses the current app state and testing context to generate scenario tests across applications.
- [Tell Me What's Next: Textual Foresight for Generic UI Representations](https://awesomecua.com/resources/arxiv-2406-07822/) — 2024-06-12
  Textual Foresight learns UI representations by describing the future screen expected after an action on the current interface. The OpenApp dataset supports pretraining and downstream evaluation of representations that connect individual elements with whole-screen changes.
- [CAAP: Context-Aware Action Planning Prompting to Solve Computer Tasks with Front-End UI Only](https://awesomecua.com/resources/arxiv-2406-06947/) — 2024-06-11
  CAAP converts screenshots into textual observations and plans keyboard-and-mouse actions using a prompt that examines task context from multiple perspectives. The agent is evaluated on MiniWoB++ and WebShop using only front-end visual observations.
- [Visual Grounding for User Interfaces](https://awesomecua.com/resources/url-36a7cba41056d46cdcde/) — 2024-06
  Proposes LVG, which detects and grounds the UI element named by a free-form command in an Android screenshot, using layout-guided contrastive learning and synthetic referring expressions generated from Rico screens.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.com/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [SmartFlow: Robotic Process Automation using LLMs](https://awesomecua.com/resources/arxiv-2405-12842/) — 2024-05-21
  Presents SmartFlow, which converts visible GUI elements into text for language-model action planning and executes the plan through a scripting engine. A collection of enterprise applications evaluates adaptation to different layouts and tasks.
- [MUD: Towards a Large-Scale and Noise-Filtered UI Dataset for Modern Style UI Modeling](https://awesomecua.com/resources/arxiv-2405-07090/) — 2024-05-11
  MUD combines LLM-guided Android app exploration, noise filtering and human annotation to collect modern UI screenshots. The study evaluates the resulting data for element detection and UI retrieval.
- [VisualWebBench: How Far Have Multimodal LLMs Evolved in Web Page Understanding and Grounding?](https://awesomecua.com/resources/arxiv-2404-05955/) — 2024-04-09
  Separately evaluates web-page reading, understanding, and element grounding across tasks drawn from real websites.
- [Ferret-UI: Grounded Mobile UI Understanding with Multimodal LLMs](https://awesomecua.com/resources/arxiv-2404-05719/) — 2024-04-08
  Adapts multimodal modeling to mobile interfaces through detailed screen crops, region annotations, and UI reasoning tasks.
- [ReALM: Reference Resolution As Language Modeling](https://awesomecua.com/resources/arxiv-2403-20329/) — 2024-03-29
  Frames conversational and on-screen reference resolution as language modeling, allowing textual representations of screen entities to support user-reference interpretation. Evaluation separately examines on-screen references against an existing resolver and language-model baselines.
- [Draw-and-Understand: Leveraging Visual Prompts to Enable MLLMs to Comprehend What You Want](https://awesomecua.com/resources/arxiv-2403-20271/) — 2024-03-29
  Introduces Draw-and-Understand and MDVP-Bench for understanding visual prompts such as points and boxes; its multi-domain data includes mobile and web screenshots.
- [Computer User Interface Understanding. A New Dataset and a Learning Framework](https://awesomecua.com/resources/arxiv-2403-10170/) — 2024-03-15
  Introduces desktop interaction videos and a framework combining synthetic examples with hierarchical contrastive learning for interface classification.
- [UI Semantic Group Detection: Grouping UI Elements with Similar Semantics in Mobile Graphical User Interface](https://awesomecua.com/resources/arxiv-2403-04984/) — 2024-03-08
  UISCGD detects semantic groups of adjacent text and non-text UI elements. It learns from Android and iOS screenshots to support interface retrieval, UI-to-code structure and screen-reader accessibility.
- [Cradle: Empowering Foundation Agents Towards General Computer Control](https://awesomecua.com/resources/arxiv-2403-03186/) — 2024-03-05
  Uses screenshot observations, planning modules, and generated low-level keyboard and mouse control for general computer interaction.
- [Improving Language Understanding from Screenshots](https://awesomecua.com/resources/arxiv-2402-14073/) — 2024-02-21
  Studies language understanding from text-rendered screenshots using joint image-patch and text prediction; a perception foundation relevant to screen-reading models.
- [CoCo-Agent: A Comprehensive Cognitive MLLM Agent for Smartphone GUI Automation](https://awesomecua.com/resources/arxiv-2402-11941/) — 2024-02-19
  Combines screenshots, layout information, and action history with a factored action predictor for smartphone automation.
- [UEyes: An Eye-Tracking Dataset across User Interface Types](https://awesomecua.com/resources/arxiv-2402-05202/) — 2024-02-07
  Introduces UEyes, an eye-tracking dataset of webpage, desktop, mobile, and poster interfaces, and analyzes how people view these different UI types.
- [ScreenAI: A Vision-Language Model for UI and Infographics Understanding](https://awesomecua.com/resources/arxiv-2402-04615/) — 2024-02-07
  Introduces ScreenAI and screen-annotation training that supports UI question answering, navigation, and summarization data generation.
- [Dual-View Visual Contextualization for Web Navigation](https://awesomecua.com/resources/arxiv-2402-04476/) — 2024-02-06
  Uses screenshot geometry and visual content to enrich HTML element representations for web navigation. Nearby elements contribute textual and visual context, with evaluation on cross-task, cross-website, and cross-domain Mind2Web splits.
- [VisionTasker: Mobile Task Automation Using Vision Based UI Understanding and LLM Task Planning](https://awesomecua.com/resources/arxiv-2312-11190/) — 2023-12-18
  VisionTasker converts screenshots into textual UI interpretations and presents one interface at a time to an LLM planner for action selection. It evaluates visual representations and execution of 147 tasks on an Android smartphone, including integration with programming by demonstration.
- [CogAgent: A Visual Language Model for GUI Agents](https://awesomecua.com/resources/arxiv-2312-08914/) — 2023-12-14
  Introduces a visual-language model with low- and high-resolution image encoders for screenshot understanding and GUI navigation.
- [Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions](https://awesomecua.com/resources/arxiv-2310-15780/) — 2023-10-24
  Introduces GPTDroid for mobile GUI testing: it feeds app page information to an LLM, runs generated test scripts and uses feedback and memory to guide further exploration.
- [Vision-Based Mobile App GUI Testing: A Survey](https://awesomecua.com/resources/arxiv-2310-13518/) — 2023-10-20
  Surveys vision-based mobile app GUI testing across test generation, record-and-replay and testing frameworks, drawing on 271 papers including 92 vision-based studies.
- [UReader: Universal OCR-free Visually-situated Language Understanding with Multimodal Large Language Model](https://awesomecua.com/resources/arxiv-2310-05126/) — 2023-10-08
  Introduces UReader, which combines unified instruction tuning, auxiliary text-reading tasks and shape-adaptive image crops for OCR-free visual language understanding. Its evaluation includes webpage screenshots alongside documents, tables, charts and natural images.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.com/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [AXNav: Replaying Accessibility Tests from Natural Language](https://awesomecua.com/resources/arxiv-2310-02424/) — 2023-10-03
  Introduces an LLM and pixel-based UI system that executes natural-language accessibility tests, records navigable videos and flags potential interface issues.
- [Unveiling the Tricks: Automated Detection of Dark Patterns in Mobile Applications](https://awesomecua.com/resources/arxiv-2308-05898/) — 2023-08-11
  Introduces UIGuard, a system that examines mobile UI visuals and text to detect dark patterns, together with a labeled dataset of benign and malicious interfaces.
- [Mobile User Interface Element Detection Via Adaptively Prompt Tuning](https://awesomecua.com/resources/arxiv-2305-09699/) — 2023-05-16
  Introduces MUI-zh and APT for detecting mobile UI elements, combining visual features with OCR descriptions to adjust category prompts in CLIP-based detectors.
- [WebUI: A Dataset for Enhancing Visual UI Understanding with Web Semantics](https://awesomecua.com/resources/arxiv-2301-13280/) — 2023-01-30
  Collects rendered webpages and structural metadata for visual UI modeling, studying how web semantics transfer to interface-understanding tasks.
- [Lexi: Self-Supervised Learning of the UI Language](https://awesomecua.com/resources/arxiv-2301-10165/) — 2023-01-23
  Introduces Lexi and UICaption to learn UI image-text representations from descriptions of interface functionality. Evaluation covers UI action entailment, instruction-based retrieval, referring-expression grounding, and UI entity recognition.
- [Fill in the Blank: Context-aware Automated Text Input Generation for Mobile GUI Testing](https://awesomecua.com/resources/arxiv-2212-04732/) — 2022-12-09
  Introduces QTypist, an LLM-based method that generates text inputs from mobile GUI context and integrates with automated testing tools to help them reach further app pages.
- [Understanding HTML with Large Language Models](https://awesomecua.com/resources/arxiv-2210-03945/) — 2022-10-08
  Studies language models for HTML element classification, page description and autonomous web navigation. Fine-tuned models are evaluated on MiniWoB, and a distilled, automatically labeled CommonCrawl HTML corpus supports the training approach.
- [Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding](https://awesomecua.com/resources/arxiv-2210-03347/) — 2022-10-07
  Pix2Struct pretrains an image-to-text model by reconstructing simplified HTML from masked webpage screenshots. Its variable-resolution visual representation is evaluated across several domains, including user-interface understanding.
- [Towards Better Semantic Understanding of Mobile Interfaces](https://awesomecua.com/resources/arxiv-2210-02663/) — 2022-10-06
  Augments RICO screens and view hierarchies with human labels for icon shape and meaning and for links between UI elements and text labels. It compares image-only and multimodal models on semantic understanding of previously unseen apps.
- [Spotlight: Mobile UI Understanding using Vision-Language Models with a Focus](https://awesomecua.com/resources/arxiv-2209-14927/) — 2022-09-29
  Introduces Spotlight, a vision-language model conditioned on a UI screenshot and a selected region of interest. It evaluates screenshot-based mobile UI understanding and explores multitask learning and few-shot prompting.
- [Enabling Conversational Interaction with Mobile UI using Large Language Models](https://awesomecua.com/resources/arxiv-2209-08655/) — 2022-09-18
  Studies few-shot prompting of a single language model for four mobile-UI interaction tasks, aiming to support conversational interface use without a separate trained model for each task.
- [ScreenQA: Large-Scale Question-Answer Pairs over Mobile App Screenshots](https://awesomecua.com/resources/arxiv-2209-08199/) — 2022-09-16
  Introduces screenshot question answering over mobile interfaces, linking answers to screen content and bounding boxes.
- [Learning to Denoise Raw Mobile UI Layouts for Improving Datasets at Scale](https://awesomecua.com/resources/arxiv-2201-04100/) — 2022-01-11
  Introduces CLAY, a pipeline that repairs noisy mobile UI layouts by removing nodes without valid visual counterparts and assigning semantic element types, supported by human-annotated layouts for evaluation.
- [VUT: Versatile UI Transformer for Multi-Modal Multi-Task User Interface Modeling](https://awesomecua.com/resources/arxiv-2112-05692/) — 2021-12-10
  The Versatile UI Transformer jointly models interface screenshots, structure, and language for five UI tasks. Its encoder supports element detection when structural metadata is absent, while an autoregressive component handles UI question answering and command grounding.
- [Screen2Words: Automatic Mobile UI Summarization with Multimodal Learning](https://awesomecua.com/resources/arxiv-2108-03353/) — 2021-08-07
  Studies mobile-screen summarization using visual, textual, and structural UI information, with a dataset of human-written descriptions.
- [UIBert: Learning Generic Multimodal Representations for UI Understanding](https://awesomecua.com/resources/arxiv-2107-13731/) — 2021-07-29
  Learns shared image, text, and structural UI representations through self-supervised tasks based on relationships among interface components.
- [Understanding Mobile GUI: from Pixel-Words to Screen-Sentences](https://awesomecua.com/resources/arxiv-2105-11941/) — 2021-05-25
  Models mobile screens as atomic text and graphic components whose relationships are learned by a Screen Transformer. The work introduces RICO-PW annotations and evaluates metadata-free screen understanding on relation, clickability, retrieval, and app-classification tasks.
- [WebSRC: A Dataset for Web-Based Structural Reading Comprehension](https://awesomecua.com/resources/arxiv-2101-09465/) — 2021-01-23
  Introduces question answering over webpage text and structure, with aligned HTML, screenshots, and metadata for structural reading comprehension.
- [Screen Recognition: Creating Accessibility Metadata for Mobile Applications from Pixels](https://awesomecua.com/resources/arxiv-2101-04893/) — 2021-01-13
  Infers UI elements and accessibility metadata from mobile screenshots to support screen-reader interaction with iOS applications.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.com/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Widget Captioning: Generating Natural Language Description for Mobile User Interface Elements](https://awesomecua.com/resources/arxiv-2010-04295/) — 2020-10-08
  Introduces crowdsourced descriptions of mobile UI elements and studies multimodal models that generate useful widget captions.
- [Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://awesomecua.com/resources/arxiv-2008-05132/) — 2020-08-12
  Compares seven traditional and learned GUI element detectors on more than 50,000 interface images. The analysis motivates a coarse-to-fine non-text detector combined with a learned text detector to address GUI-specific localization requirements.
- [DOM-Q-NET: Grounded RL on Structured Language](https://awesomecua.com/resources/arxiv-1902-07257/) — 2019-02-19
  Introduces DOM-Q-NET, an RL architecture for web navigation that represents HTML as a tree and uses separate Q-function networks for clicking elements and typing text.
- [Rico: A Mobile App Dataset for Building Data-Driven Design Applications](https://awesomecua.com/resources/url-b560b5d6abaab98483f6/) — 2017-10-20
  Introduces Rico, collecting Android interface designs and interaction traces through crowdsourced use followed by automated exploration. The paper demonstrates UI-layout retrieval using learned representations and describes visual, textual, structural, and interaction data.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.com/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.

## Benchmarks

- [Astra Game Arena](https://awesomecua.com/resources/github-gih10012-astra-game-arena/) — Date not recorded
  Resumable, screen-only computer-use evaluation arena testing whether Codex agents can play locally installed desktop games.
- [AutomotiveUI-Bench-4K](https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/) — Date not recorded
  Offline test set of 998 photos and screenshots of in-vehicle infotainment screens from 15 brands, with 4,208 English annotations for locating UI elements and judging expected results as passed or failed.
- [BearCubs](https://awesomecua.com/resources/url-86229ebd22143128bcf7/) — Date not recorded
  A live-web benchmark with 111 questions testing agents' ability to browse and extract factual answers through text and multimodal interactions.
- [Frozen Vision Backbones for GUI Grounding](https://awesomecua.com/resources/github-dhruvraval04-do-frozen-vision-backbones-transfer-to-guis/) — Date not recorded
  Benchmarks dense versus global features across frozen vision backbones for pixel-coordinate GUI grounding.
- [Gomoku Computer-Use Model Comparison](https://awesomecua.com/resources/github-jns-c-model-comparison-gomoku/) — Date not recorded
  Controlled evaluation benchmark comparing frontier Claude models on interactive board-game reasoning and GUI execution.
- [GuideBench](https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/) — Date not recorded
  Released data for the GUIDE benchmark: annotated segments of narrated novice screen recordings in 10 applications, for predicting user behavior state, short-term intent and whether and how to help.
- [GUIGuard-Bench public-ladder release](https://awesomecua.com/resources/url-61860953a680776ffe53/) — Date not recorded
  Public-ladder release of GUIGuard-Bench: 121 Android and Linux desktop agent trajectories whose 2,002 screenshots carry region-level privacy labels, for privacy recognition, protected-screen planning and click grounding.
- [LMMs-Eval](https://awesomecua.com/resources/github-evolvinglmms-lab-lmms-eval/) — Date not recorded
  LMMs-Eval is a standardized evaluation harness for large multimodal models covering GUI grounding, VQA, document, and video benchmarks.
- [LongPuzzleBench](https://awesomecua.com/resources/github-bingozhang-verapraxis-longpuzzlebench/) — Date not recorded
  LongPuzzleBench evaluates GUI and computer-use agents on long-horizon visual puzzle games requiring multi-step spatial reasoning.
- [OS-Critic Bench](https://awesomecua.com/resources/url-c73ba0618d1b3c505887/) — Date not recorded
  A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.
- [OSWorld GPT-4o-mini Benchmark Evaluation](https://awesomecua.com/resources/github-suraj-ranganath-osworld-gpt4o-mini-benchmark/) — Date not recorded
  Evaluates GPT-4o-mini on OSWorld desktop automation tasks comparing screenshot-only, accessibility-tree, and Set-of-Mark observation modes.
- [Screen Point-and-Read / Tree-of-Lens](https://awesomecua.com/resources/github-ucsb-ai-screen-point-and-read/) — Date not recorded
  Screen-reading benchmark and Tree-of-Lens implementation for interpreting user-indicated regions and their layout context.
- [SWE-bench Multimodal](https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/) — Date not recorded
  Issue-resolution benchmark for visual JavaScript and TypeScript software, where each task's issue or patch includes screenshots, mockups or renderings and fixes are checked by repository unit tests.
- [SWEeper-Bench](https://awesomecua.com/resources/github-zlab-princeton-sweeper-bench/) — Date not recorded
  SWEeper-Bench evaluates whether interactive GUI and browser agents can autonomously discover and reproduce 200 real bugs in open-source software.
- [TurkingBench](https://awesomecua.com/resources/url-808a22468ee0bf565d6e/) — Date not recorded
  A web-agent benchmark built from crowdsourcing HTML tasks, with 32.2K instances across 158 tasks and a framework that applies model responses to page controls.
- [VisualWebArena](https://awesomecua.com/resources/github-web-arena-x-visualwebarena/) — Date not recorded
  Visually grounded web tasks extending the WebArena evaluation setting.
- [VisualWebBench](https://awesomecua.com/resources/github-visualwebbench-visualwebbench/) — Date not recorded
  Evaluation of multimodal models on visual web understanding tasks.
- [Web Context Bench (Python)](https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/) — Date not recorded
  Local-page benchmark comparing six browser representations on token use, factual reading and target-element selection, with deterministic answer scoring.
- [WinDeskGround](https://awesomecua.com/resources/github-zzzhr-1-windeskground/) — Date not recorded
  WinDeskGround benchmarks desktop GUI grounding in multi-window Windows environments with controlled occlusion, scaling, and interference levels.
- [WONDERBREAD](https://awesomecua.com/resources/github-hazyresearch-wonderbread/) — Date not recorded
  An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.

## Datasets

- [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/) — Date not recorded
  Official Hub release of AMEX: Android app screenshots annotated for interactive-element grounding, screen and element functionality, and instructions with stepwise GUI-action chains.
- [AndroidCode](https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/) — Date not recorded
  HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.
- [Aria-UI Data](https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/) — Date not recorded
  GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.
- [AutoGUI v1 training data](https://awesomecua.com/resources/url-79287058342289aa5d45/) — Date not recorded
  Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.
- [bevaya/RICO-ScreenQA-Complex](https://awesomecua.com/resources/url-b6114625f883ec0fda33/) — Date not recorded
  A test dataset of complex questions about RICO interface screens, with screen images and ground-truth answers. The card lists 11,781 examples.
- [GroundCUA](https://awesomecua.com/resources/github-servicenow-groundcua/) — Date not recorded
  GroundCUA releases 56,000 desktop screenshots with 3.56M human-verified UI element annotations across 87 applications plus GroundNext models.
- [GroundCUA dataset](https://awesomecua.com/resources/url-f6c88faa4392848f81b6/) — Date not recorded
  Desktop GUI-grounding data from the GroundCUA project: PNG screenshots of 87 applications paired by hash with JSON lists of element boxes, visible text and optional coarse categories.
- [GUI-Lasagne L1](https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/) — Date not recorded
  The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.
- [GUI-World](https://awesomecua.com/resources/github-dongping-chen-gui-world/) — Date not recorded
  GUI video benchmark and training data covering six scenarios, from Android and iOS to websites and XR, with eight question types for image and video LLMs and the GUI-Vid model.
- [GUI-World data](https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/) — Date not recorded
  Hub release of GUI-World: GUI screen-recording videos from six scenarios (Android, iOS, website, software, multi-app and XR) with train and benchmark annotation JSONL for GUI-oriented video question answering.
- [GUI-Xplore](https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/) — Date not recorded
  Per-app Android exploration videos with screenshot and action sequences, view hierarchies and question-answer pairs for five tasks, from app overview and page analysis to action recall and sequence verification.
- [GUIMid training data](https://awesomecua.com/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [Mobile-GUI-Worldmodel-SFT](https://awesomecua.com/resources/url-e041226738f8ea43a878/) — Date not recorded
  A mobile GUI dataset for world-model training and evaluation. Its trajectory archives pair screenshots with page-state text and action-formatted training examples.
- [Mobile3M](https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/) — Date not recorded
  Pre-training corpus for Xiaomi's MobileVLM, distributed as per-app graph archives for mobile apps such as Baidu Map, QQ Music, Ctrip and Vipshop.
- [MobileViews](https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/) — Date not recorded
  Over 600,000 Android screenshot and view-hierarchy pairs from more than 20,000 Google Play apps, collected with an optimized DroidBot, with complete per-app traces.
- [MoCon](https://awesomecua.com/resources/url-c7489f15e7883a695832/) — Date not recorded
  Icon and text bounding-box annotations for 10,364 mobile app screenshots, with 154 icon classes and font-family text labels in LabelMe JSON and train, val and test splits; images not included.
- [MoGUI](https://awesomecua.com/resources/url-be89a250747f507a27ef/) — Date not recorded
  Android app GUI crawl with per-app navigation graphs that link screen IDs through the UI action taken, plus 200 archive shards of the captured screens.
- [MultiUI](https://awesomecua.com/resources/github-neulab-multiui/) — Date not recorded
  7.3 million training samples built from webpage UIs and structured with enhanced accessibility trees, for text-rich visual understanding, released with UIX-Qwen2 models.
- [MultiUI training data](https://awesomecua.com/resources/url-8cd911654653a6ba8521/) — Date not recorded
  Gated Hub release of the MultiUI web-UI training data, about 7.3 million samples per the project README, packaged as two training-stage JSON files and 21 split TAR archive parts.
- [PixelWeb](https://awesomecua.com/resources/url-67ae69986d6408fde468/) — Date not recorded
  PixelWeb releases webpage screenshots, DOM data and element images with masks, contours and boxes in 1K, 10K and 100K collections.
- [RelationGUI & RelationQA](https://awesomecua.com/resources/github-malonghui-relationgui/) — Date not recorded
  RelationGUI provides datasets and training code for explicit spatial, hierarchical, and functional relational understanding in GUI agents.
- [Rico](https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/) — Date not recorded
  Mobile app screenshots, view hierarchies, and interaction traces for UI research.
- [RICO Semantics](https://awesomecua.com/resources/github-google-research-datasets-rico-semantics/) — Date not recorded
  RICO Semantics provides 500,000 human annotations on RICO mobile screens covering icon shapes, semantic roles, and text-element associations.
- [RICO-SCA](https://awesomecua.com/resources/url-72f05843df9bd7ea35af/) — Date not recorded
  A mobile UI dataset pairing screenshots and widget boxes with synthetic captions and view hierarchy data for screen understanding and interface grounding.
- [RICO-Screen2Words](https://awesomecua.com/resources/url-cf7c132c9a988d3a6ec4/) — Date not recorded
  RICO-Screen2Words pairs Android app screenshots with human screen summaries, app metadata and view hierarchies for mobile interface understanding.
- [RICO-ScreenAnnotation](https://awesomecua.com/resources/url-2a4dd75acb6efdeb0e4a/) — Date not recorded
  A standardized Rico screen-annotation dataset pairing mobile screenshots with text about interface elements and their locations. It provides train, validation, and test splits.
- [RICO-ScreenQA](https://awesomecua.com/resources/url-bd15fb092ff80643ed97/) — Date not recorded
  RICO-ScreenQA provides questions and answers for app screenshots, with images, answer text, and UI-element bounds in train, validation, and test splits.
- [RICO-ScreenQA-Short](https://awesomecua.com/resources/url-060c9288c7197c5a188e/) — Date not recorded
  A screen question-answering dataset based on RICO interface images, pairing questions with machine-generated short answers. It provides train, validation and test splits.
- [Screen Annotation](https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/) — Date not recorded
  Google Research release of ScreenAI's Screen Annotation data: train, validation and test CSVs that describe the UI elements of Rico mobile screens by type, box coordinates, on-screen text and image captions.
- [Screen2Words](https://awesomecua.com/resources/github-google-research-datasets-screen2words/) — Date not recorded
  Mobile screen descriptions for language-based screen understanding.
- [ScreenParse](https://awesomecua.com/resources/url-98e8a413ddd670214755/) — Date not recorded
  Dense screen-parsing data that labels the visible UI elements of rendered web screenshots with boxes, 55 element classes, text, interactability and reading order, generated by an automated crawl-and-filter pipeline.
- [ScreenQA](https://awesomecua.com/resources/github-google-research-datasets-screen-qa/) — Date not recorded
  About 86,000 human-written question-answer pairs over 35,000 Rico mobile screenshots, plus ScreenQA Short and ComplexQA variants, for benchmarking screen content understanding.
- [ScreenRef](https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/) — Date not recorded
  GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.
- [TreeCUA-Datasets](https://awesomecua.com/resources/url-2e8bba756c71f9fe3fbd/) — Date not recorded
  TreeCUA-Datasets releases GUI exploration trees with setup files, action sequences, goals, and verification results. Users replay the trees in OSWorld to reconstruct screen observations.
- [UEyes](https://awesomecua.com/resources/github-yuejiang-nj-ueyes-chi2023/) — Date not recorded
  UEyes is an eye-tracking dataset of 62 participants viewing 1,980 UI screenshots across webpages, desktop interfaces, mobile apps, and posters.
- [UI-Vision](https://awesomecua.com/resources/url-2c2004baae4669f8169a/) — Date not recorded
  Desktop GUI data for interface understanding and interaction research.
- [UIBert AppSim and RefExp annotations](https://awesomecua.com/resources/github-google-research-datasets-uibert/) — Date not recorded
  Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.
- [UICrit](https://awesomecua.com/resources/github-google-research-datasets-uicrit/) — Date not recorded
  Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.
- [UiPad](https://awesomecua.com/resources/url-3ac3ccfb23fe13adf428/) — Date not recorded
  A macOS UI dataset with 352 screens from 63 applications. It pairs screenshots with available accessibility trees and questions about interface elements and click locations.
- [VisualWebBench dataset](https://awesomecua.com/resources/url-149769d8bf07b7fbabdc/) — Date not recorded
  Hugging Face dataset release for VisualWebBench spanning seven visual web understanding, OCR, element grounding, and action prediction tasks.
- [Wave UI](https://awesomecua.com/resources/url-0dbb55f127da04d95222/) — Date not recorded
  Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.
- [WaveUI-25k](https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/) — Date not recorded
  A 24,978-example subset of an ~80k UI element collection, pairing screenshots and instructions with target boxes and annotated element names, descriptions, types, OCR, purposes and click expectations.
- [WebSRC](https://awesomecua.com/resources/github-x-lance-websrc-baseline/) — Date not recorded
  WebSRC provides baseline models and processing pipelines for the Web-Based Structural Reading Comprehension dataset over HTML and screenshots.
- [websrc](https://awesomecua.com/resources/url-d768dd5245832bc4b824/) — Date not recorded
  websrc is a screenshot-focused WebSRC compilation for answering questions about webpage content and structure. It provides page identifiers, questions, answers, and encoded images.
- [WebSRC v1.0](https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/) — Date not recorded
  Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.
- [WebUI](https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/) — Date not recorded
  Web screenshot and interface data for UI research.

## Models

- [Aria-UI/Aria-UI-base](https://awesomecua.com/resources/url-2866edbea80fa34aa684/) — Date not recorded
  Aria-UI/Aria-UI-base is a released GUI grounding checkpoint that maps an instruction and interface image to target coordinates. The card documents history-aware input and inference examples.
- [browserground](https://awesomecua.com/resources/github-renezander030-browserground/) — Date not recorded
  browserground is a compact Qwen3-VL-2B LoRA visual UI-grounding model that maps screenshots and text targets to bounding-box JSON.
- [Claude Sonnet 4.5](https://awesomecua.com/resources/url-18816edf464a073a0120/) — Date not recorded
  Claude Sonnet 4.5 is a general model available through an API. Anthropic reports its computer-use performance on OSWorld and demonstrates browser tasks.
- [Code2World-8B checkpoint](https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/) — Date not recorded
  Released GUI world-model checkpoint that turns a screenshot and proposed action into HTML for rendering a predicted next screen.
- [CogAgent](https://awesomecua.com/resources/github-thudm-cogagent/) — Date not recorded
  Visual language model for GUI understanding and interaction.
- [CogAgent 9B 20241220](https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [CogVLM](https://awesomecua.com/resources/github-thudm-cogvlm/) — Date not recorded
  CogVLM provides official inference and fine-tuning code for the CogVLM vision-language foundation model and the CogAgent GUI agent.
- [CogVLM2](https://awesomecua.com/resources/github-thudm-cogvlm2/) — Date not recorded
  CogVLM2 releases high-resolution image and video vision-language models supporting visual grounding, document reading, and GUI understanding.
- [DeskMind Eyes](https://awesomecua.com/resources/github-deskmind-ai-eyes/) — Date not recorded
  DeskMind Eyes is a compact 4B GUI visual grounding model and training recipe for localizing click targets on desktop screenshots.
- [Ferret-UI](https://awesomecua.com/resources/github-apple-ml-ferret/) — Date not recorded
  Screen understanding research within the Ferret model family.
- [Fintor/Fintor-GUI-S2](https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/) — Date not recorded
  Fintor-GUI-S2 is a GUI grounding checkpoint fine-tuned from UI-TARS-7B-DPO on OS-Copilot data. Its card reports ScreenSpot Pro and v2 evaluations.
- [Fuyu-8B](https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/) — Date not recorded
  Adept's decoder-only multimodal base model that feeds image patches straight into the transformer, released for research on digital agents, UI question answering and screen localization.
- [GLM-V](https://awesomecua.com/resources/github-zai-org-glm-v/) — Date not recorded
  Z.ai repository for the open-weight GLM-4.1V-Thinking, GLM-4.5V and GLM-4.6V vision-language models, with GUI-agent prompt examples for mobile, PC and web plus a released VLM reward system.
- [GPA-GUI-Detector](https://awesomecua.com/resources/url-87f28e117d95985d5177/) — Date not recorded
  GPA-GUI-Detector is a YOLO model that locates interactive elements such as buttons and icons in interface screenshots and returns bounding boxes for automation workflows.
- [GroundAnything](https://awesomecua.com/resources/github-groundingpi-groundanything/) — Date not recorded
  GroundAnything is a 4B parallel-decoding diffusion grounding model for low-latency visual coordinate localization.
- [GroundGUI-8B](https://awesomecua.com/resources/url-de31b07ff24ab15d9bdf/) — Date not recorded
  Screenshot grounding checkpoint that emits a single click in a normalized coordinate space.
- [GroundingPI](https://awesomecua.com/resources/github-groundingpi-groundingpi/) — Date not recorded
  GroundingPI is a 4B visual grounding foundation model that unifies bounding-box detection, referring expressions, and point localization.
- [GUI-Actor-7B-Qwen2.5-VL](https://awesomecua.com/resources/url-3e58eecd59c404508757/) — Date not recorded
  A Qwen2.5-VL-7B checkpoint for locating instructed GUI targets in screenshots. Its attention-based action head predicts click points, with inference code shown in the card.
- [GUI-AIMA](https://awesomecua.com/resources/github-sjz5202-gui-aima/) — Date not recorded
  GUI-AIMA aligns intrinsic multimodal attention heads with context anchors for data-efficient visual GUI element grounding.
- [GUI-Spotlight](https://awesomecua.com/resources/github-bin123apple-gui-spotlight/) — Date not recorded
  GUI-Spotlight is a think-with-image GUI visual grounding model that iteratively crops and refines focus regions on high-resolution screens.
- [GUI-Vid](https://awesomecua.com/resources/url-579b1c0ceac633eeb328/) — Date not recorded
  GUI-Vid is a released video language model retrained on GUI-World for understanding graphical interfaces in video.
- [Holo1.5 3B](https://awesomecua.com/resources/url-dc20a06c296207ac11a6/) — Date not recorded
  Smallest Holo1.5 checkpoint, fine-tuned from Qwen2.5-VL-3B-Instruct with supervised training then GRPO, for locating interface elements and answering questions about web, desktop and mobile screens.
- [Holo1.5 72B](https://awesomecua.com/resources/url-a8e086f155c278e45c55/) — Date not recorded
  The 72B member of H Company's Holo1.5 series, fine-tuned from Qwen2.5-VL-72B-Instruct for UI element localization and screen question answering on web, desktop and mobile interfaces.
- [Holo1.5 7B](https://awesomecua.com/resources/url-98e5813bceb30104d6c4/) — Date not recorded
  H Company's Qwen2.5-VL-7B-based Holo1.5 checkpoint for locating interface elements and answering questions about screens across web, desktop and mobile, trained with supervised fine-tuning then GRPO.
- [Holo4-27B-NVFP4](https://awesomecua.com/resources/url-b1457a20d437732b60f7/) — Date not recorded
  A quantized Holo4 vision-language checkpoint for computer use across web, desktop, and mobile interfaces, with a harness that executes requested GUI and tool actions.
- [Holo4-35B-A3B-FP8](https://awesomecua.com/resources/url-f3a7296977a39c37f693/) — Date not recorded
  An FP8 vision-language checkpoint for computer use. With an agent harness, it processes screenshots and tool results to request clicks, typing, code and tool calls.
- [Indeed-UI](https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/) — Date not recorded
  A GUI grounding model described for desktop, mobile, and browser interfaces. Its repository provides ScreenSpot-Pro evaluation and zoom-in scripts.
- [InfiGUI-G1-3B](https://awesomecua.com/resources/url-3888a4042043fb547705/) — Date not recorded
  A GUI grounding checkpoint based on Qwen2.5-VL-3B-Instruct. It uses adaptive exploration training to locate interface elements from an instruction and screen image.
- [InternVL](https://awesomecua.com/resources/github-opengvlab-internvl/) — Date not recorded
  Official repository for the InternVL open-source multimodal foundation model family supporting high-resolution GUI grounding and visual reasoning.
- [jadechoghari/Ferret-UI-Llama8b](https://awesomecua.com/resources/url-4b66957b9799a9e3decc/) — Date not recorded
  Llama-3-8B variant of Ferret-UI for understanding interface screenshots, answering questions about selected regions and locating elements with bounding boxes.
- [Kimi-VL](https://awesomecua.com/resources/github-moonshotai-kimi-vl/) — Date not recorded
  Moonshot AI open-weight MoE vision-language model with 2.8B activated LLM parameters and a native-resolution encoder; its README reports OSWorld, ScreenSpot-Pro and OSWorld-G results for OS-agent use.
- [Kimi-VL-A3B-Thinking-2506](https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/) — Date not recorded
  A multimodal reasoning model with released weights and high-resolution image input. Its authors report GUI grounding evaluations on ScreenSpot-Pro, ScreenSpot-V2 and OSWorld-G.
- [KV-Ground-4B-BaseQw3vl](https://awesomecua.com/resources/url-969eb56a53187cda74c7/) — Date not recorded
  A 4B GUI grounding model for high-resolution screenshots and text instructions, fine-tuned from Qwen3-VL-4B-Instruct with supervised and reward-based training.
- [Magma-8B](https://awesomecua.com/resources/url-d3247ff0ff9a1f6bc247/) — Date not recorded
  Magma-8B is a released multimodal agent checkpoint whose card shows UI navigation tasks alongside robot manipulation and describes training with video data.
- [microsoft/OmniParser](https://awesomecua.com/resources/url-b5fb13515d7779218f5d/) — Date not recorded
  Released screen-parsing weights that detect actionable UI regions and caption icons in screenshots, supporting structured screen input for GUI agents.
- [microsoft/Phi-Ground-Any](https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/) — Date not recorded
  A fine-tuned vision model that takes an image and instruction and returns a click point. Its card specifies image resizing and coordinate conversion.
- [MiniCPM-GUIDance](https://awesomecua.com/resources/url-73570e699421a5ad04eb/) — Date not recorded
  MiniCPM-V checkpoint released with GUICourse and tuned on its GUIEnv, GUIAct and GUIChat data; card prompts cover next-action generation from a task and action history, and screenshot chat with grounded boxes.
- [MM-Eureka](https://awesomecua.com/resources/github-modalminds-mm-eureka/) — Date not recorded
  MM-Eureka provides rule-based multimodal reinforcement learning code, models, and datasets based on OpenRLHF and InternVL.
- [MobileVLM](https://awesomecua.com/resources/github-xiaomi-mobilevlm/) — Date not recorded
  MobileVLM is a vision-language model pre-trained on the Mobile3M UI transition graph for intra-screen and inter-screen mobile UI understanding.
- [MolmoPoint-GUI-8B](https://awesomecua.com/resources/url-beb2ca7cdaefbef42ee6/) — Date not recorded
  GUI grounding model that takes one screenshot and an instruction-like query, then returns a point for the referenced location using dedicated pointing tokens.
- [MP-GUI](https://awesomecua.com/resources/github-bigtaige-mp-gui/) — Date not recorded
  MP-GUI provides multimodal perception training and evaluation code with graphical, textual, and spatial experts for GUI understanding.
- [Muse-Glimmer-30B-GUI-Grounding-Fast](https://awesomecua.com/resources/url-7645072fe9580fa9993a/) — Date not recorded
  A LoRA adapter for Muse-Glimmer-30B that returns a UI element's bounding box from a screenshot and instruction, with examples spanning desktop, mobile, and web screens.
- [OmniParser v2 model bundle](https://awesomecua.com/resources/url-e21ca7c859544dbf5fb6/) — Date not recorded
  A screen-parsing weight bundle containing icon-region detectors and an icon captioner for converting screenshots into agent-readable interface elements.
- [omniparser-finetuned](https://awesomecua.com/resources/url-e2b79e8d1c6a28c65bff/) — Date not recorded
  omniparser-finetuned releases a Florence-2 icon captioning checkpoint for UI parsing, trained with icon labels and screenshot crops.
- [OpenCUA-7B-exl2](https://awesomecua.com/resources/url-76f3981d219bb87b4eea/) — Date not recorded
  OpenCUA-7B-exl2 is a 4.5bpw quantized OpenCUA-7B checkpoint for generating computer actions and locating GUI targets from screenshots.
- [Pix2Struct](https://awesomecua.com/resources/github-google-research-pix2struct/) — Date not recorded
  Pix2Struct provides official training and inference code for screenshot-parsing vision-language pretraining across web and mobile UI tasks.
- [Pix2Struct base (pretrained)](https://awesomecua.com/resources/url-bb1440d051c68455a72e/) — Date not recorded
  Pretrained base-size Pix2Struct checkpoint in Transformers format, learned by parsing masked web page screenshots into simplified HTML and released only as a starting point for fine-tuning.
- [Pix2Struct Screen2Words base](https://awesomecua.com/resources/url-1cf7f8b4b2a1eb9c6547/) — Date not recorded
  Base-size Pix2Struct checkpoint fine-tuned on Screen2Words that writes a short functional summary of a mobile UI screenshot, converted to Transformers from Google's original release.
- [Pix2Struct Screen2Words large](https://awesomecua.com/resources/url-6c3e04249787a3de7cbc/) — Date not recorded
  Large-size Pix2Struct checkpoint fine-tuned on Screen2Words that writes a short functional summary of a mobile UI screenshot, converted to Transformers from Google's original release.
- [POINTS-GUI-G 8B](https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/) — Date not recorded
  A specialized interface-grounding checkpoint that returns normalized point coordinates for a requested element in a screenshot.
- [Qwen-CUA](https://awesomecua.com/resources/url-a886fea306211d527701/) — Date not recorded
  Qwen-CUA is a screenshot-based computer-use model that generates grounded keyboard and mouse actions. Its release includes weights and a browser reference runtime.
- [Qwen-GUI checkpoint](https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/) — Date not recorded
  Qwen-VL checkpoint released with GUICourse and tuned on its GUIAct and GUIChat data; the card's demo draws the box and point coordinates it returns, on a 0–1000 grid, onto the input screenshot.
- [Qwen/Qwen3-VL-8B-Instruct](https://awesomecua.com/resources/url-90ae002dbf099d42fabb/) — Date not recorded
  Qwen3-VL-8B-Instruct is a vision-language checkpoint whose card describes PC and mobile GUI operation, including element recognition and tool calls.
- [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/) — Date not recorded
  An instruction-tuned 7B multimodal model for image and video understanding; its card describes visually guided operation of mobile devices.
- [Qwen2.5-VL](https://awesomecua.com/resources/url-4bece2c969edcdfc2e8d/) — Date not recorded
  A general vision-language model family whose release documents visual-agent behavior for computer and phone use, alongside image and video understanding.
- [Qwen2.5-VL-3B-Instruct](https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/) — Date not recorded
  An instruction-tuned vision-language checkpoint that reads visual layouts, localizes points or boxes, and supports computer and phone use. Its card reports screen and mobile-agent evaluations.
- [Qwen3-VL / Qwen2.5-VL](https://awesomecua.com/resources/github-qwenlm-qwen3-vl/) — Date not recorded
  Official repository for the Qwen-VL vision-language model series supporting native visual GUI grounding, computer use, and mobile navigation.
- [Qwen3-VL-8B-Thinking](https://awesomecua.com/resources/url-d1305a893a47ac03d0de/) — Date not recorded
  A general vision-language weight release whose documented visual-agent capability includes recognizing PC and mobile GUI elements and invoking tools to complete tasks.
- [ScreenParser](https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/) — Date not recorded
  YOLO11-L UI element detector from IBM Research and ETH Zurich that boxes and labels 55 element classes in web screenshots; the main checkpoint is trained on ScreenParse v2 and the v1 detector stays on a branch.
- [Seed1.5-VL](https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/) — Date not recorded
  ByteDance Seed vision-language foundation model served by API, whose repository provides cookbooks including GUI-agent prompts for computer and mobile use with click, drag, hotkey, typing and scroll actions.
- [SpiritSight-Agent 8B base](https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/) — Date not recorded
  An InternVL2-based visual GUI checkpoint distributed for grounding and interface navigation, with the publisher recommending task-specific fine-tuning of the base release.
- [SpiritSight-Agent-26B](https://awesomecua.com/resources/url-55be07e942393d43132f/) — Date not recorded
  A 26B vision-based checkpoint for GUI navigation across interface platforms. The release includes model weights and an inference script built around an InternVL2 base model.
- [SpiritSight-Agent-2B](https://awesomecua.com/resources/url-37570eed422d326bfa5a/) — Date not recorded
  A 2B vision-based GUI agent checkpoint for interface navigation across GUI platforms, released with an inference script and base-model information.
- [Textual Foresight](https://awesomecua.com/resources/github-aburns4-textualforesight/) — Date not recorded
  Textual Foresight pretrains UI representations by predicting textual descriptions of future screen states resulting from mobile UI actions.
- [UGround-V1-2B](https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/) — Date not recorded
  UGround-V1-2B is a Qwen2-VL-based checkpoint for locating targets in GUI screenshots, with reported evaluations on mobile, desktop, and web screens.
- [UGround-V1-72B](https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/) — Date not recorded
  UGround-V1-72B is a Qwen2-VL-based model for locating targets in GUI screenshots, released with weights and reported evaluations on mobile, desktop, and web screens.
- [UI-Ins-32B](https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/) — Date not recorded
  A GUI grounding checkpoint that locates interface elements from instructions. Its training combines varied instruction formulations with reinforcement learning.
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
- [UIX-Qwen2](https://awesomecua.com/resources/url-54997a3c67e54abdf319/) — Date not recorded
  A MultiUI-trained visual-language checkpoint for text-rich webpage understanding and interface tasks.
- [VGA (Vision GUI Assistant)](https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/) — Date not recorded
  Vision GUI Assistant (VGA) provides image-centric fine-tuning code and datasets to reduce hallucinations in vision-language GUI grounding.
- [ZonUI-3B checkpoint](https://awesomecua.com/resources/url-c8c046847f829fea4821/) — Date not recorded
  Qwen2.5-VL-3B-based GUI grounding checkpoint that predicts click locations from screenshots and text instructions across desktop, mobile and web screens.

## Engineering & industry

- [988hj7tczd-oss dsh-computer-use](https://awesomecua.com/resources/github-988hj7tczd-oss-dsh-computer-use/) — Date not recorded
  Cross-platform DeepSeek Harness computer-use plugin featuring an independent virtual cursor, UI grounding, and desktop input.
- [a11y-computer-use](https://awesomecua.com/resources/github-perception-dynamics-inc-a11y-computer-use/) — Date not recorded
  Accessibility-first computer-use runtime that feeds pruned accessibility-tree snapshots to AI agents so they click semantic UI elements.
- [Active Desktop Context Engine](https://awesomecua.com/resources/github-amirf147-active-desktop-context-engine/) — Date not recorded
  Zero-cloud Windows OS perception layer and Model Context Protocol server streaming real-time desktop UI context to AI agents.
- [Aegis-Agent (Privacy Firewall Browser Agent)](https://awesomecua.com/resources/github-lukan-lawslaf-aegis-agent/) — Date not recorded
  Privacy-first browser agent framework that blurs faces and redacts PII in screenshots before sending observations to cloud LLMs.
- [Aeyes (Voice Browser Assistant)](https://awesomecua.com/resources/github-evalutik-ai-partner-catalyst/) — Date not recorded
  Aeyes is a voice-controlled Chrome extension assistant designed to help blind and visually impaired users navigate websites.
- [afa-cloud desktop-gui-automation-cua](https://awesomecua.com/resources/github-afa-cloud-desktop-gui-automation-cua/) — Date not recorded
  macOS desktop GUI automation skill built on `cua-driver` combining Accessibility trees with pixel-level fallback.
- [Agent Cursor & GroundSight](https://awesomecua.com/resources/github-dwstar79-agent-cursor/) — Date not recorded
  Accuracy engine for computer-use agents pairing a machine-readable cursor overlay (Agent Cursor) with local visual verification (GroundSight).
- [Agent Eyes](https://awesomecua.com/resources/github-jumpsy-agent-eyes/) — Date not recorded
  Visual inspection toolkit for AI agents that captures rendered screenshots and extracts live CSS design tokens from the DOM.
- [agent-computer-use](https://awesomecua.com/resources/github-kortix-ai-agent-computer-use/) — Date not recorded
  Rust CLI (agent-cu) that lets agents snapshot desktop app accessibility trees into element refs or selectors and click, type, scroll or drag through AX on macOS, UI Automation on Windows and AT-SPI2 on Linux.
- [agent-ctrl](https://awesomecua.com/resources/github-k4cper-g-agent-ctrl/) — Date not recorded
  Rust CLI and daemon that let agents snapshot native app accessibility trees as element refs and act on them, with UI Automation on Windows, AX on macOS and a read-only AT-SPI surface on Linux.
- [agent-desktop](https://awesomecua.com/resources/github-lahfir-agent-desktop/) — Date not recorded
  agent-desktop is a Rust CLI that exposes cross-platform OS accessibility trees and native UI actions as compact JSON for AI agents.
- [agent-eyes](https://awesomecua.com/resources/github-mohanli-eng-agent-eyes/) — Date not recorded
  MCP server and workflow skill giving Claude Code live visual and DOM inspection over the browser runtime.
- [Agent-OS (J.A.R.V.I.S. macOS Harness)](https://awesomecua.com/resources/github-my-cmdhub-agent-os/) — Date not recorded
  Voice-first macOS accessibility agent that reads screen state as structured text and verifies every GUI action.
- [agent-seat-linux](https://awesomecua.com/resources/github-muhibnayem-agent-seat-linux/) — Date not recorded
  Provides application-scoped Wayland screen capture and isolated input seats for Linux automation agents.
- [agent-vision-toolkit](https://awesomecua.com/resources/github-anionex-agent-vision-toolkit/) — Date not recorded
  Vision toolkit and skill pack equipping text-only LLMs with multi-image reading, UI reconstruction, and GUI automation.
- [AgentCursor](https://awesomecua.com/resources/github-kumard3-agentcursor/) — Date not recorded
  Reads macOS application windows as compact text affordances (~9 tokens per click) and drives a human-like virtual cursor over MCP.
- [Agentic Browser](https://awesomecua.com/resources/github-applejuice093-agentic-browser/) — Date not recorded
  Agent-first Python browser runtime providing stable element references, compact observations, outcome verification, and an MCP server.
- [AgentOCR](https://awesomecua.com/resources/github-agentmaker-agentocr/) — Date not recorded
  AgentOCR provides compact visual-token and OCR screen compression for accelerating GUI and computer-use agents.
- [AgentP](https://awesomecua.com/resources/github-omerfeyzioglu-agentp-macos/) — Date not recorded
  AgentP is a fast macOS computer-use agent where Gemini plans once and a local Jev System-One model executes steps via the Accessibility API.
- [AgentScope Browser MCP](https://awesomecua.com/resources/github-nazocatai-agent-scope-browser/) — Date not recorded
  AI-agent-dedicated browser MCP server providing semantic page observations and stable `element_id` interactions.
- [AgentSeat](https://awesomecua.com/resources/github-vimalinx-agentseat/) — Date not recorded
  Lightweight Wayland scaffold isolating an AI agent to operate a single GUI application inside its own virtual seat.
- [AGI-0 Agent](https://awesomecua.com/resources/url-06f6618d8f95f3d041cf/) — Date not recorded
  AGI-0 uses screenshots to navigate Android apps, planning subtasks and checking screen changes after each action. Its publisher reports AndroidWorld results.
- [AI Vision (Chrome Screenshot Assistant)](https://awesomecua.com/resources/github-stiwarilbj-ai-vision/) — Date not recorded
  Chrome extension that captures selected webpage regions for Gemini visual analysis, OCR extraction, and contextual Q&A.
- [AILEEN Desktop](https://awesomecua.com/resources/github-haixu8396-png-aileen-desktop/) — Date not recorded
  Windows desktop AI assistant combining a Live2D interactive character with screen perception and desktop tool execution.
- [Airi-PC Computer Mode Runtime](https://awesomecua.com/resources/github-arancione3000-airi-pc-bootstrap/) — Date not recorded
  Local Computer Mode runtime and reproducible bootstrap for the Airi-PC desktop agent.
- [AIVANE](https://awesomecua.com/resources/github-taiyouqu-aivane/) — Date not recorded
  AIVANE is a cross-platform GUI automation assistant that combines YOLO icon detection, OCR, and multimodal LLMs for desktop control.
- [Altairpaca DSH Computer Use for Windows](https://awesomecua.com/resources/github-altairpaca-dsh-computer-use-windows/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness providing window-bound screenshots, OCR grounding, and verified clicks.
- [amajorai Ghost Desktop MCP](https://awesomecua.com/resources/github-amajorai-ghost/) — Date not recorded
  Desktop-automation Model Context Protocol server providing screen perception and mouse/keyboard input control for AI agents.
- [amcu (Another macOS Computer Use)](https://awesomecua.com/resources/github-uoox-amcu/) — Date not recorded
  Single-binary, dependency-free macOS computer-use tool that reads and drives Mac apps without stealing cursor or window focus.
- [Android Device Perception Skill](https://awesomecua.com/resources/github-worksonmyvm-android-device-perception-skill/) — Date not recorded
  Portable, read-only Android state-snapshot skill via ADB for AI coding and mobile agents.
- [AndroidClaw](https://awesomecua.com/resources/github-xiuqianli1996-androidclaw/) — Date not recorded
  Android-native LLM phone agent operating directly on-device via Android AccessibilityService and screen hierarchy parsing.
- [AnimaWatch](https://awesomecua.com/resources/github-rishitank-animawatch/) — Date not recorded
  FastMCP server that records webpage animations and uses vision models to detect frame drops, jank, and visual layout artifacts.
- [Anionex DSH Computer Use](https://awesomecua.com/resources/github-anionex-dsh-computer-use/) — Date not recorded
  macOS computer-use plugin for DeepSeek Harness featuring fresh Accessibility observations, stale-state rejection, and scoped permissions.
- [AOI (Agent-Computer Observation Interface) & DynaCU-Bench](https://awesomecua.com/resources/github-19pine-ai-aoi/) — Date not recorded
  AOI provides an adaptive video and audio perception layer for computer-use agents alongside the DynaCU-Bench dynamic GUI benchmark.
- [ApexCommander-RS](https://awesomecua.com/resources/github-buckster123-apexcommander-rs/) — Date not recorded
  AT-SPI-first Linux computer-use CLI and Model Context Protocol server written in Rust.
- [argos-eye](https://awesomecua.com/resources/github-xhae123-argos-eye/) — Date not recorded
  argos-eye is a visual grounding skill and tool for Claude Code that resolves natural-language UI targets to verified pixel coordinates.
- [Argus (macOS Vision-AX MCP Plugin)](https://awesomecua.com/resources/github-korisame-argus/) — Date not recorded
  Claude Code MCP plugin providing 40 macOS automation tools with a unified Accessibility, AppleScript, and Vision OCR resolver.
- [asdasdsdsdasdasdasd DSH Linux X11 Computer Use](https://awesomecua.com/resources/github-asdasdsdsdasdasdasd-dsh-computer-use/) — Date not recorded
  Linux X11 computer-use plugin for DeepSeek Harness supporting screenshots, mouse/keyboard control, and window management.
- [ASIL (Agent-Software Interaction Layer)](https://awesomecua.com/resources/github-sharryxr-asil/) — Date not recorded
  ASIL replaces screenshot-and-click loops with structured application state observations and semantic action interfaces for CUA.
- [Astra AI (Windows Gemini Live Assistant)](https://awesomecua.com/resources/github-chinmaybitne-astra-ai/) — Date not recorded
  Voice-first Windows AI desktop assistant powered by Gemini Live with screen vision and system control.
- [AstraClaw Agent Computer Use MCP](https://awesomecua.com/resources/github-astraclawteam-agent-computer-use-mcp/) — Date not recorded
  Evidence-driven Windows Computer Use MCP server providing semantic UI observation, secure screenshots, and verified actions.
- [Atlas Desktop Agent](https://awesomecua.com/resources/github-dortanes-atlas/) — Date not recorded
  Atlas is a voice-and-screen desktop agent that observes active windows and executes mouse and keyboard actions.
- [atlas-desktop](https://awesomecua.com/resources/github-abydin-atlas-desktop/) — Date not recorded
  macOS desktop-control CLI that reads any application's UI hierarchy as structured JSON and dispatches native actions.
- [Auto_OS](https://awesomecua.com/resources/github-jaswanth1902-auto-os/) — Date not recorded
  Sub-30ms Windows desktop automation primitive using direct Win32 UI Automation tree traversal and native input injection.
- [AutoGUI code](https://awesomecua.com/resources/github-zjulihongxin-autogui/) — Date not recorded
  AutoGUI's functionality-annotation pipeline (collect, reject, annotate from accessibility-tree changes, verify, generate tasks), with Qwen-VL LoRA fine-tuning and lmms-eval-based grounding evaluation.
- [autourgos-cua-coordinate-tool](https://awesomecua.com/resources/github-devxjitin-autourgos-cua-coordinate-tool/) — Date not recorded
  Vision-based UI coordinate localization tool for Autourgos computer-use agents.
- [AUV](https://awesomecua.com/resources/github-moeru-ai-auv/) — Date not recorded
  Rust toolkit, CLI and MCP server for scripting reusable GUI operations on macOS, Linux and Windows, with native input drivers, accessibility trees, OCR and traced, verifiable action results.
- [axcli](https://awesomecua.com/resources/github-andelf-axcli/) — Date not recorded
  axcli is a Rust command-line tool for querying, inspecting, and automating macOS application UIs through the native Accessibility API.
- [Axon](https://awesomecua.com/resources/github-gxcsoccer-axon/) — Date not recorded
  macOS computer-use automation server and CLI exposing Accessibility API element control, AppleScript/JXA execution, and screenshots.
- [AXTree API](https://awesomecua.com/resources/github-amaar-mc-axtree-api/) — Date not recorded
  Event-driven macOS Accessibility tree streaming server and action bridge for computer-use agents.
- [AzaiSakura dsh-computer-use (macOS)](https://awesomecua.com/resources/github-azaisakura-dsh-computer-use/) — Date not recorded
  Re-implementation of the OpenAI macOS Computer Use plugin tailored for DeepSeek Harness.
- [BeijingWahw DSH Computer Use Plugin](https://awesomecua.com/resources/github-beijingwahw-dsh-computer-use-plugin/) — Date not recorded
  Full-featured desktop computer-use plugin for DeepSeek Harness supporting multi-display capture, OCR, and GUI actions.
- [Better AX for Computer Use](https://awesomecua.com/resources/github-hqhq1025-better-ax-for-computer-use/) — Date not recorded
  Better AX for Computer Use prunes and formats macOS Accessibility trees and injects Chromium/Electron AX flags for low-token GUI grounding.
- [Better Computer Use](https://awesomecua.com/resources/github-suge8-better-computer-use/) — Date not recorded
  macOS background desktop control CLI for AI agents supporting window discovery, Accessibility-tree reads, and focus-free input.
- [Better Computer Use (Accessibility MCP)](https://awesomecua.com/resources/github-ridelink0-claude-computer-use/) — Date not recorded
  Provides an accessibility-tree MCP server for Claude Code to inspect and operate Windows and macOS desktop applications without screenshots.
- [BLAXIN](https://awesomecua.com/resources/github-tasinxxx-blaxin/) — Date not recorded
  Open-source AI desktop agent for Linux that plans, executes, and verifies GUI and shell workflows.
- [BraveCowNoFear Windows Computer Use](https://awesomecua.com/resources/github-bravecownofear-windows-computer-use/) — Date not recorded
  Local Windows computer-use plugin for Codex combining UIA3 semantic trees, MCP tools, SendInput, and window capture.
- [browsegrab](https://awesomecua.com/resources/github-arknill-browsegrab/) — Date not recorded
  Token-efficient browser agent and MCP server for local LLMs combining Playwright, accessibility trees, and Markdown extraction.
- [Browser Perception](https://awesomecua.com/resources/github-rounakkm-browser-perception/) — Date not recorded
  Privacy-preserving browser perception framework that redacts sensitive PII from DOM trees and screenshots before LLM ingestion.
- [Browser-Use Vision](https://awesomecua.com/resources/github-raidriar7170-browser-use-vision/) — Date not recorded
  Vision-grounding plugin for browser-use combining Set-of-Mark overlays, Florence-2 detection, and Vision-DOM alignment.
- [BRYES (Brain-Eyes)](https://awesomecua.com/resources/github-alvseek-bryes/) — Date not recorded
  BRYES decouples a high-level reasoning planner ('Brain') from swappable visual perception and grounding backends ('Eyes') for computer use.
- [BX Browser](https://awesomecua.com/resources/github-painbaba-bx-browser/) — Date not recorded
  DOM-first, vision-capable autonomous browser agent that plans and executes multi-step web tasks.
- [bytehunt br (Agent Browser CLI)](https://awesomecua.com/resources/github-bytehunt-br/) — Date not recorded
  Agent-oriented browser CLI powered by Bun WebView with terminal Kitty graphics rendering.
- [c-vision (DSH Vision & Computer Use Plugin)](https://awesomecua.com/resources/github-cczzyy-cn-c-vision/) — Date not recorded
  Autonomous vision and computer-use plugin for DeepSeek Harness providing screen capture, OCR, window listing, and GUI input.
- [CAAP Agent](https://awesomecua.com/resources/github-caap-agent-caap-agent/) — Date not recorded
  Screenshot-driven agent implementation for MiniWoB++ and WebShop, using a visual observer and context-aware prompts to issue mouse and keyboard actions.
- [CalebNewtonUSC Nova (Mac Operator)](https://awesomecua.com/resources/github-calebnewtonusc-nova/) — Date not recorded
  Autonomous macOS desktop operator that inspects screen state and drives native Mac applications.
- [Camel AI (Visual QA Agent)](https://awesomecua.com/resources/github-dilawarshafiq-camel-ai/) — Date not recorded
  Screen-driven QA agent that tests web and desktop applications through their rendered UI and hands off edge cases to humans.
- [CanpGrid](https://awesomecua.com/resources/github-yeqi99-canpgrid/) — Date not recorded
  CanpGrid provides an adaptive recursive image grid overlay for progressive coarse-to-fine visual localization by multimodal agents.
- [CaptiOCR](https://awesomecua.com/resources/github-carlosacchi-captiocr/) — Date not recorded
  CaptiOCR is a real-time Windows screen region OCR and text extraction tool powered by Tesseract for desktop workflows.
- [CEL OSS (Computer Experience Layer)](https://awesomecua.com/resources/github-dimpagk92-cellar/) — Date not recorded
  Computer Experience Layer (CEL) provides structured macOS perception contracts and an MCP server for native computer use.
- [cellar (Context Execution Layer)](https://awesomecua.com/resources/github-dilipod-cellar/) — Date not recorded
  cellar implements the Context Execution Layer (CEL), a structured context and action execution protocol for computer-use agents.
- [chatgpt-desktop-mcp](https://awesomecua.com/resources/github-cantbeblank96-chatgpt-mcp/) — Date not recorded
  Model Context Protocol server exposing the official Ubuntu/Linux ChatGPT Desktop app via 6 AT-SPI2 accessibility tools.
- [chrome-eye](https://awesomecua.com/resources/github-trvux-chrome-eye/) — Date not recorded
  Model Context Protocol server exposing 56 structured-JSON Chrome CDP tools to Claude Code as a fast alternative to screenshots.
- [chromium-screenshots](https://awesomecua.com/resources/github-samestrin-chromium-screenshots/) — Date not recorded
  Playwright-based MCP server and API that captures zero-drift Chromium screenshots paired with authenticated DOM state for vision agents.
- [Claude Codex Computer Use](https://awesomecua.com/resources/github-songkeys-claude-codex-computer-use/) — Date not recorded
  Bridge allowing Claude Code to invoke OpenAI Codex's native macOS Computer Use engine.
- [Claude Linux Desktop MCP](https://awesomecua.com/resources/github-lukelamb-claude-linux-mcp/) — Date not recorded
  Model Context Protocol extension giving Claude full Linux X11 desktop control across screenshots, windows, clipboard, and input.
- [Clawd Cursor](https://awesomecua.com/resources/github-amrdab-clawdcursor/) — Date not recorded
  Local MCP server that compiles desktop screens into stable UI element maps with action verification and safety guardrails.
- [clef-use](https://awesomecua.com/resources/github-kotori0919-clef-use/) — Date not recorded
  clef-use is a local computer-use runtime combining structured accessibility, SigLIP2 visual tile grounding, OmniParser, and MCP tools.
- [Clevrr Computer](https://awesomecua.com/resources/github-clevrr-ai-clevrr-computer/) — Date not recorded
  Clevrr Computer is a PyAutoGUI-based desktop automation agent that captures screenshots and executes mouse and keyboard actions from LLM plans.
- [CLIF](https://awesomecua.com/resources/github-cmalpass-clif/) — Date not recorded
  CLIF is a Windows desktop UI automation CLI and local MCP server for inspecting and driving WPF, WinForms, and WinUI applications.
- [CoCo-Agent](https://awesomecua.com/resources/github-xbmxb-coco-agent/) — Date not recorded
  Research implementation combining screen and layout perception with conditional action prediction for smartphone automation.
- [Codex Computer Use Lab](https://awesomecua.com/resources/github-hqhq1025-codex-computer-use-lab/) — Date not recorded
  Documents and reproduces the macOS Computer Use architecture, SkyLight window capture, and Accessibility action dispatch in the Codex desktop app.
- [codex-computer-use-x11](https://awesomecua.com/resources/github-alekseiseleznev-codex-computer-use-x11/) — Date not recorded
  Standalone Rust CLI and Model Context Protocol plugin enabling Codex Computer Use on Linux Cinnamon/X11 desktops.
- [CompBuddy](https://awesomecua.com/resources/github-lewiswlker-compbuddy/) — Date not recorded
  CompBuddy is a background macOS computer-use agent that observes target windows and dispatches Accessibility and CGEvent actions without stealing focus.
- [Computer Use AI SDK](https://awesomecua.com/resources/github-mediar-ai-mcp-server-client-computer-use-ai-sdk/) — Date not recorded
  Computer Use AI SDK provides an MCP server and client that drives desktop applications through native OS accessibility trees.
- [Computer Use Vision (DSH Windows Plugin)](https://awesomecua.com/resources/github-xuanyuanluoxue-computer-use-vision/) — Date not recorded
  Windows desktop visual recognition and simulated input plugin for DeepSeek Harness.
- [computer-use-fallback-mac](https://awesomecua.com/resources/github-zss03040464-computer-use-fallback-mac/) — Date not recorded
  Window-scoped macOS Computer Use MCP server providing background window capture and Accessibility control without foreground focus.
- [computer-use-grid](https://awesomecua.com/resources/github-yxdgyxlf-computer-use-grid/) — Date not recorded
  Enhances desktop clicking precision for AI computer-use agents via screenshot grid overlays and iterative zoom refinement.
- [computer-use-linux](https://awesomecua.com/resources/github-agent-sh-computer-use-linux/) — Date not recorded
  Native Linux desktop control server for AI agents over MCP, Pi tools, and CLI with semantic AT-SPI trees and screenshots.
- [Control-Agent](https://awesomecua.com/resources/github-gekaixing-control-agent/) — Date not recorded
  Unified multimodal control framework combining pure-vision desktop operation, structured DOM browser control, and ADB mobile automation.
- [CrossHands](https://awesomecua.com/resources/github-caelaxie-crosshands/) — Date not recorded
  Local computer-use runtime for coding agents exposing desktop inspection and input actions via a JSON CLI and stdio MCP.
- [cu (Native GUI Automation CLI)](https://awesomecua.com/resources/github-killsng-cu/) — Date not recorded
  Native GUI automation CLI written in Swift (macOS) and Rust (Windows) for ~50ms state reads and ~100ms clicks.
- [cua-rs-mcp](https://awesomecua.com/resources/github-maestrojeong-cua-rs-mcp/) — Date not recorded
  Rust Model Context Protocol server that drives native macOS apps through the Accessibility API without moving the user's cursor.
- [Cursor Companion (MacScreenCompanion)](https://awesomecua.com/resources/github-pradyut-das-macscreencompanion/) — Date not recorded
  Native screen-aware macOS AI assistant invoked via hotkey to inspect and act on whatever is currently on screen.
- [CyberRaccoon](https://awesomecua.com/resources/github-chaoticpixelio-cyberraccoon/) — Date not recorded
  Non-invasive physical computer-use agent that captures HDMI video and dispatches USB HID mouse and keyboard actions from a Raspberry Pi.
- [dcc-cua](https://awesomecua.com/resources/github-dcc-mcp-dcc-cua/) — Date not recorded
  Cross-platform Rust runtime and CLI for AI agents to observe and control scoped desktop application windows.
- [DeepSeek Harness Mac Control](https://awesomecua.com/resources/github-18126295767-cell-dsh-mac-control/) — Date not recorded
  macOS control plugin for DeepSeek Harness enabling browser tab inspection, app switching, and desktop GUI actions.
- [DeepSeekEyes](https://awesomecua.com/resources/github-dttxorg-deepseekeyes/) — Date not recorded
  Auditable vision and cross-platform computer-use runtime for DeepSeek Harness with cryptographic evidence receipts.
- [DEIMOS (Environment-Aware Computer Agent)](https://awesomecua.com/resources/github-sakshamjuneja007-freaky-monkey/) — Date not recorded
  Environment-aware autonomous computer-use agent that perceives OS state and executes multi-step desktop workflows.
- [DeskCanvas](https://awesomecua.com/resources/github-sorry123luck-desk-canvas/) — Date not recorded
  DeskCanvas converts live Windows application windows into structured semantic state with guarded action execution for AI agents.
- [DeskCtl (Desktop Control Engine)](https://awesomecua.com/resources/github-mini-mind-deskctl/) — Date not recorded
  Desktop control engine for GUI agents using UIA and AT-SPI accessibility trees as the primary path with visual fallback.
- [deskpal](https://awesomecua.com/resources/github-b1tank-deskpal/) — Date not recorded
  C-native Linux desktop-control MCP server supporting X11/Xwayland, AT-SPI accessibility trees, OCR, and isolated displays.
- [Desktop Action Agent](https://awesomecua.com/resources/github-dax0056-desktop-action-agent/) — Date not recorded
  Sandboxed local computer-automation agent reference architecture with window detection and action verification.
- [Desktop Agent](https://awesomecua.com/resources/github-ruslankoroy-desktop-agent/) — Date not recorded
  Desktop Agent controls a local computer via screenshot grid overlays, OCR text detection, voice commands, and mouse/keyboard execution.
- [Desktop Pilot MCP](https://awesomecua.com/resources/github-versoxbt-desktop-pilot-mcp/) — Date not recorded
  Native macOS Accessibility MCP server giving Claude and MCP clients low-latency structured control over desktop applications.
- [desktop-touch-mcp](https://awesomecua.com/resources/github-harusame64-desktop-touch-mcp/) — Date not recorded
  Windows computer-use MCP server that drives desktop applications via semantic discover-then-act UI Automation targeting.
- [DesktopCtl](https://awesomecua.com/resources/github-yaroshevych-desktopctl/) — Date not recorded
  GPU-accelerated local macOS CLI for AI agents to inspect screen text/controls and dispatch mouse and keyboard actions.
- [DH.Window.UITool](https://awesomecua.com/resources/github-cyberkdh-dh-window-uitool/) — Date not recorded
  Windows UI Automation inspection and scripting tool for analyzing UI element trees and building repeatable desktop workflows.
- [Domstamp](https://awesomecua.com/resources/github-zuub-don-domstamp/) — Date not recorded
  Framework-neutral browser-state snapshotter capturing compact, diffable DOM and accessibility states for AI web agents.
- [DrishtiGuard](https://awesomecua.com/resources/github-atharvasamant4-drishtiguard/) — Date not recorded
  On-device visual privacy firewall that detects and masks sensitive screen regions before lightweight browser agents process frames.
- [Drisp Browser MCP](https://awesomecua.com/resources/github-drisplabs-browser-mcp/) — Date not recorded
  Drisp Browser is a token-efficient browser automation MCP server exposing compact semantic page snapshots and stateful actions.
- [DroidBot](https://awesomecua.com/resources/github-honeynet-droidbot/) — Date not recorded
  DroidBot generates scripted or model-guided inputs for Android app testing and records UI transitions, view structures, and method traces.
- [DSH Desktop Operator](https://awesomecua.com/resources/github-zjh02249-dsh-desktop-operator/) — Date not recorded
  Safe Windows computer-use plugin for DeepSeek Harness providing window-scoped desktop automation and verification.
- [dsh-browser-playwright](https://awesomecua.com/resources/github-chenyuheee-dsh-browser-playwright/) — Date not recorded
  Snapshot-first Playwright browser automation plugin for DeepSeek Harness using accessibility-tree interactions.
- [dsh-browser-vision](https://awesomecua.com/resources/github-tristan-mcinnis-dsh-browser-vision/) — Date not recorded
  Vision-enabled browser automation plugin for DeepSeek Harness combining Browser-Use actions with page screenshot inspection.
- [dsh-click](https://awesomecua.com/resources/github-perrylink-dsh-click/) — Date not recorded
  Cross-platform native desktop control plugin for DeepSeek Harness supporting screenshots, UI element search, and mouse/keyboard actions.
- [dsh-cua](https://awesomecua.com/resources/github-hutusion-dsh-cua/) — Date not recorded
  Client-neutral Windows computer-use MCP server for DeepSeek Harness exposing UI Automation, screenshots, and desktop input tools.
- [dsh-nuphus-mcp](https://awesomecua.com/resources/github-mrpulor-gh-dsh-nuphus-mcp/) — Date not recorded
  DeepSeek Harness plugin that mounts `nuphus-mcp` desktop control tools natively inside DSH sessions.
- [dsh-vision-click](https://awesomecua.com/resources/github-zdd3143-dsh-vision-click/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness using offline `Windows.Media.Ocr` text localization and pre/post-click pixel verification.
- [dsh_omnivision (OmniVision)](https://awesomecua.com/resources/github-xiaozhengdeng-dsh-omnivision/) — Date not recorded
  OmniParser-powered GUI agent plugin for DeepSeek Harness providing screen element detection and desktop mouse/keyboard automation.
- [Dunst (macOS Affordance-Graph MCP)](https://awesomecua.com/resources/github-azerozero-dunst/) — Date not recorded
  Accessibility-first affordance-graph MCP server for macOS combining AX trees, Apple Vision OCR, and computer vision.
- [DXcam](https://awesomecua.com/resources/github-ra1nty-dxcam/) — Date not recorded
  DXcam is a high-frequency Python screen capture library for Windows using the Desktop Duplication API at up to 240Hz for GUI agents.
- [ecobrowser (ai-browser)](https://awesomecua.com/resources/github-haidaresber-ai-browser/) — Date not recorded
  AI-native browser framework with structured page perception, token-efficient state representation, and deterministic action tools.
- [ego lite](https://awesomecua.com/resources/github-citrolabs-ego-lite/) — Date not recorded
  ego lite is a desktop browser that gives agents separate browsing Spaces and exposes page snapshots and actions through the ego-browser integration.
- [ESP (Echo-Skeleton Perception)](https://awesomecua.com/resources/github-badtheorylabs-esp/) — Date not recorded
  Stateful, event-driven screen-perception runtime that converts UI changes into compact text events for text-only computer-use agents.
- [ExactMac](https://awesomecua.com/resources/github-joeycumines-exactmac/) — Date not recorded
  ExactMac provides local, Accessibility-first macOS desktop automation over MCP using a Swift gRPC host and Go MCP server.
- [eyehands](https://awesomecua.com/resources/github-shameindemgg-eyehands/) — Date not recorded
  Local HTTP server for Windows that provides low-latency UI Automation inspection and input execution for computer-use agents.
- [FastCUA](https://awesomecua.com/resources/github-guojiz-fastcua/) — Date not recorded
  Local, accessibility-first Windows control plane for AI agents exposing structured UI trees and multi-action execution.
- [faster-browser-agent](https://awesomecua.com/resources/github-mikastiebitz-faster-browser-agent/) — Date not recorded
  Fast MCP browser server for AI agents that navigates complex web apps by reading accessibility trees and application source.
- [Fazm](https://awesomecua.com/resources/github-mediar-ai-fazm/) — Date not recorded
  Fazm is a native macOS desktop and browser agent that observes screen state via Accessibility/OCR and automates cross-application workflows.
- [FlowPilot Engine](https://awesomecua.com/resources/github-pensefact-flowpilot-engine/) — Date not recorded
  Hybrid AI browser automation engine combining Claude's visual Computer Use API with deterministic Playwright execution.
- [Front-End Operation Master (FEOM)](https://awesomecua.com/resources/github-a92070888-dev-mcp-os-native-automation/) — Date not recorded
  Windows native UI automation framework and MCP server operating over UIA trees with zero vision tokens and ~3.9ms action latency.
- [Fuji-Web](https://awesomecua.com/resources/github-normal-computing-oss-fuji-web/) — Date not recorded
  Chrome side-panel extension agent that completes a typed task on websites, choosing click, type, scroll and navigate actions from uid-annotated screenshots or a simplified DOM with OpenAI, Anthropic or Gemini models.
- [GAZE](https://awesomecua.com/resources/github-kevintrinhdev-gaze/) — Date not recorded
  Vision-first browser controller that observes and drives an already logged-in Chrome window.
- [GenPark DOM Accessibility Tree Pruner Skill](https://awesomecua.com/resources/github-alpha-park-genpark-dom-semantic-accessibility-tree-pruner-skill/) — Date not recorded
  Agent skill that compresses raw HTML DOM trees into token-efficient semantic accessibility snapshots.
- [Geohotstan DSH Codex Computer Use](https://awesomecua.com/resources/github-geohotstan-dsh-computer-use/) — Date not recorded
  macOS computer-use plugin for DeepSeek Harness providing app listing, Accessibility-tree window capture, and GUI input.
- [GERALLT](https://awesomecua.com/resources/github-dlr-sc-gerallt/) — Date not recorded
  An LLM-driven system for testing RCE through its graphical interface, using separate models to control actions, assess problems, and describe icons.
- [Ghost (macOS Accessibility CLI)](https://awesomecua.com/resources/github-tylergibbs1-ghost/) — Date not recorded
  Swift CLI and MCP tool that reads the native macOS Accessibility tree to expose GUI-only applications to AI agents.
- [Ghost (Non-Interfering macOS CUA)](https://awesomecua.com/resources/github-fletcherholt-ghost/) — Date not recorded
  Invisible, non-interfering macOS computer-use tool for Claude Code that drives native Mac apps in the background.
- [Ghost Semantic OS](https://awesomecua.com/resources/github-zainmfjavaid-ghost-semantic-os/) — Date not recorded
  Ghost Semantic OS provides a text-only semantic accessibility runtime for operating Linux desktop applications in OSWorld without screenshots.
- [Ghosthand](https://awesomecua.com/resources/github-ameerhmz-ghosthand/) — Date not recorded
  Ghosthand is a low-latency local voice and computer-use agent for Apple Silicon macOS powered by Laya models and native Accessibility APIs.
- [GhostHands](https://awesomecua.com/resources/github-georgenijo-ghosthands/) — Date not recorded
  Local Apple Silicon MLX computer-use bridge that drives native macOS apps via the Accessibility API without stealing the physical cursor.
- [Glasswarp MCP Server](https://awesomecua.com/resources/github-glasswarp-mcp-server/) — Date not recorded
  Remote Model Context Protocol server for observing and controlling physical or virtual Windows PCs via Glasswarp.
- [Glasswarp Python SDK](https://awesomecua.com/resources/github-glasswarp-python-sdk/) — Date not recorded
  Python SDK for the Glasswarp platform enabling AI agents to observe and control remote or local Windows PCs.
- [gnome-wayland-computer-use](https://awesomecua.com/resources/github-ryanraposo-gnome-wayland-computer-use/) — Date not recorded
  Computer-use bridge for driving Linux GNOME Wayland desktop sessions.
- [godzilaa browser-agent Extension](https://awesomecua.com/resources/github-godzilaa-browser-agent/) — Date not recorded
  Chrome Manifest V3 extension that converts any live webpage into structured JSON and executes agent actions.
- [GoldenCut](https://awesomecua.com/resources/github-silbercue-goldencut/) — Date not recorded
  Claude Code skill that measures live browser UI layouts and returns concrete golden-ratio spacing and typography fixes.
- [GPT-4V-Act](https://awesomecua.com/resources/github-ddupont808-gpt-4v-act/) — Date not recorded
  GPT-4V-Act combines Chromium DOM auto-labeling and Set-of-Mark visual prompting to drive web browser interactions with multimodal LLMs.
- [gpuview](https://awesomecua.com/resources/github-onlyterp-gpuview/) — Date not recorded
  GPU-native Windows screen perception tool capturing frames directly from the DXGI Desktop Duplication compositor handoff for AI agents.
- [Grasp MCP](https://awesomecua.com/resources/github-jamshed7470-grasp-mcp/) — Date not recorded
  Model Context Protocol server giving Claude and MCP clients full desktop screen vision and mouse/keyboard control.
- [GUI Object Detection Benchmark & Models](https://awesomecua.com/resources/github-chenjshnn-object-detection-for-graphical-user-interface/) — Date not recorded
  Provides training and evaluation code comparing classical and deep-learning GUI element detectors alongside the hybrid UIED model.
- [hanzhangzzz dsh-computer-use](https://awesomecua.com/resources/github-hanzhangzzz-dsh-computer-use/) — Date not recorded
  Structure-first browser and desktop computer-use plugin for DeepSeek Harness.
- [Hemi](https://awesomecua.com/resources/github-piuqiupiaqia-hemi/) — Date not recorded
  Desktop AI assistant for macOS and Windows featuring voice interaction, screen awareness, and local tool execution.
- [hermes-hyprland-plugin](https://awesomecua.com/resources/github-xcaptain09-hermes-hyprland-plugin/) — Date not recorded
  C++ Hyprland Wayland compositor plugin and Python D-Bus AT-SPI coordinate-fusion bridge for zero-mouse-stealing Linux GUI agents.
- [HeySnap](https://awesomecua.com/resources/github-dhamani-aryan-heysnap/) — Date not recorded
  AI-first workspace for capturing files, documents, and live browser context into structured agent memory.
- [hfyydd dsh-cua](https://awesomecua.com/resources/github-hfyydd-dsh-cua/) — Date not recorded
  DeepSeek Harness computer-use plugin backed by the `cua-driver` daemon for accessibility-first desktop automation.
- [Hikari (光)](https://awesomecua.com/resources/github-codewithevilxd-hikari/) — Date not recorded
  Autonomous AI desktop agent for Windows capable of GUI control, system management, and multi-step task execution.
- [HumanAIE (Human AI Eyes)](https://awesomecua.com/resources/github-datboip-humanaie/) — Date not recorded
  HumanAIE is a shared browser workspace for human-AI collaboration where users highlight visual regions and co-steer web agents.
- [HumanHands](https://awesomecua.com/resources/github-thispc-humanhands/) — Date not recorded
  macOS computer-use agent that combines Accessibility-tree semantics with visual fallback to operate Mac apps like a human.
- [Hunch MCP](https://awesomecua.com/resources/github-prithviseran-hunch-mcp/) — Date not recorded
  Focus-free background macOS automation MCP server combining OS APIs, AppleScript, Chrome CDP, and Accessibility trees.
- [hwatu](https://awesomecua.com/resources/github-hongnoul-hwatu/) — Date not recorded
  Headless verification browser for AI coding agents featuring 35ms one-call UI checks and pixel diffing.
- [hypr-computer-use-mcp](https://awesomecua.com/resources/github-smirnov-labs-hypr-computer-use-mcp/) — Date not recorded
  Hyprland/Wayland computer-use MCP server combining screenshot/click/type tools with tmux and CDP integration.
- [hyprhands](https://awesomecua.com/resources/github-berker-z-hyprhands/) — Date not recorded
  Hyprland Wayland computer-use MCP server giving AI agents semantic and pixel-level desktop control.
- [hypruse](https://awesomecua.com/resources/github-ilyaskhallouki-hypruse/) — Date not recorded
  Model Context Protocol server giving AI agents native window, input, and screenshot control on Linux Hyprland Wayland desktops.
- [iphone-use](https://awesomecua.com/resources/github-leeguooooo-iphone-use/) — Date not recorded
  MCP server and CLI that lets Claude Code, Codex, and MCP agents read real iPhone screens as structured text and execute taps/swipes.
- [IrisGUI](https://awesomecua.com/resources/github-black-yt-irisgui/) — Date not recorded
  IrisGUI is a cross-platform desktop GUI agent that perceives screens and automates mouse and keyboard workflows.
- [jarvis-eyes-mcp](https://awesomecua.com/resources/github-harshil1502-jarvis-eyes-mcp/) — Date not recorded
  macOS-native Model Context Protocol server for low-latency desktop awareness combining Accessibility tree extraction and screenshots.
- [JasonWei04 dsh-computer-use](https://awesomecua.com/resources/github-jasonwei04-dsh-computer-use/) — Date not recorded
  Equips text-only LLMs in DeepSeek Harness with desktop screen perception and mouse/keyboard control.
- [jev-windows-agent](https://awesomecua.com/resources/github-vbs2004-jev-windows-agent/) — Date not recorded
  jev-windows-agent pairs Windows UI Automation inspection with a fast Jev System-One decision loop for low-latency desktop control.
- [jing-hy computer-user (DSH Windows Plugin)](https://awesomecua.com/resources/github-jing-hy-computer-user/) — Date not recorded
  Codex-style Windows computer-use plugin for DeepSeek Harness supporting screen reading and mouse/keyboard input.
- [jmeguilos Computer Use MCP](https://awesomecua.com/resources/github-jmeguilos-computer-use-mcp/) — Date not recorded
  Window-scoped macOS computer-use server over local stdio MCP using native ScreenCaptureKit and Accessibility APIs.
- [Kagami Desktop (鏡)](https://awesomecua.com/resources/github-gytxtx-kagami-desktop/) — Date not recorded
  Windows native CLI and MCP tool for desktop window observation, UI Automation control-tree parsing, and input interaction.
- [kde-mcp](https://awesomecua.com/resources/github-atassis-kde-mcp/) — Date not recorded
  Model Context Protocol server for observing and controlling Linux KDE Plasma 6 Wayland desktops.
- [kimi-cu-pi](https://awesomecua.com/resources/github-johndfowler-kimi-cu-pi/) — Date not recorded
  Extension connecting Kimi Computer Use (KimiCU) visual grounding and action capabilities to the Pi coding agent.
- [kwin-mcp](https://awesomecua.com/resources/github-isac322-kwin-mcp/) — Date not recorded
  Model Context Protocol server for Linux KDE Plasma 6 Wayland desktop GUI automation providing 29 tools for virtual KWin sessions, AT-SPI, and input.
- [Label Controllers](https://awesomecua.com/resources/github-amywlp-label-controllers/) — Date not recorded
  Label Controllers is a screenshot-to-controls API combining YOLO widget detection and RapidOCR with OpenAI/Anthropic computer-use tool schemas.
- [LAI (Linux Native OS Agent)](https://awesomecua.com/resources/github-cufelix-lai/) — Date not recorded
  Native OS agent runtime for Linux desktops providing system-wide screen observation, accessibility inspection, and input control.
- [Larker](https://awesomecua.com/resources/github-qiadastrachen-bit-larker/) — Date not recorded
  Larker is a vision-driven Windows desktop agent that automates GUI clients lacking DOM or Accessibility APIs via VLM grounding.
- [LibreAutomate](https://awesomecua.com/resources/github-qgindi-libreautomate/) — Date not recorded
  LibreAutomate is a C# script editor and Windows automation library supporting UI Automation, accessibility trees, image matching, and OCR.
- [Linux CUA (5omeotherguy)](https://awesomecua.com/resources/github-5omeotherguy-linux-computer-use/) — Date not recorded
  Linux desktop toolkit for computer-use agents providing isolated X11 workspaces, window capture, and input synthesis.
- [linux-computer-use](https://awesomecua.com/resources/github-tak-uukti-linux-computer-use/) — Date not recorded
  Linux/X11 computer-use toolkit and MCP server combining AT-SPI semantic trees, screenshots, and input control for coding agents.
- [linux-use](https://awesomecua.com/resources/github-javimosch-linux-use/) — Date not recorded
  Agent-first, CLI-first GUI control toolkit for Linux desktops operating over the AT-SPI2 accessibility tree.
- [LKO Mark 3.4](https://awesomecua.com/resources/github-shubhransh-gupta-lko-mark-3-4/) — Date not recorded
  Autonomous macOS desktop assistant with voice interaction, screen vision, and native AppleScript/system control.
- [LOCR (Lightweight OCR)](https://awesomecua.com/resources/github-dmzlingyin-locr/) — Date not recorded
  LOCR is a lightweight cross-platform clipboard and screen OCR utility based on RapidOCR.
- [LongHorizonUI](https://awesomecua.com/resources/github-kane2kang-longhorizonui/) — Date not recorded
  Code for the LongHorizonUI Android agent: OCR plus OmniParser icon detection yields numbered element boxes for an LLM, and failed taps fall back from element index to relative and absolute points with rollback.
- [look-decide-act](https://awesomecua.com/resources/github-ivanposel-look-decide-act/) — Date not recorded
  Drives live web applications over CDP through a closed-loop visual look-decide-act cycle rather than brittle script replay.
- [Lucy Screen Agent](https://awesomecua.com/resources/github-alzin-lucy-screen-agent/) — Date not recorded
  Lucy is a voice-and-screen Android agent that perceives live app screens with Gemini vision and executes taps, swipes, and text input.
- [mac-use-mcp](https://awesomecua.com/resources/github-antbotlab-mac-use-mcp/) — Date not recorded
  Zero-dependency macOS desktop automation MCP server exposing 18 tools for Accessibility inspection, screenshots, and input control.
- [MacControlKit](https://awesomecua.com/resources/github-tzafon-maccontrolkit/) — Date not recorded
  MacControlKit is a Swift package by Tzafon for capturing macOS screens and dispatching native mouse and keyboard events.
- [macMCP](https://awesomecua.com/resources/github-erwinzhang7-macmcp/) — Date not recorded
  macOS Model Context Protocol server with per-application permission gating, Accessibility tree inspection, screenshots, and UI control.
- [macOS Computer Use MCP Server (33 Tools)](https://awesomecua.com/resources/github-syedazharmbnr1-computer-use-mcp/) — Date not recorded
  Python Model Context Protocol server exposing 33 tools for macOS screen capture, Accessibility inspection, and input control.
- [macOS Visual Agent](https://awesomecua.com/resources/github-peakmojo-macos-visual-agent/) — Date not recorded
  macOS Visual Agent inspects native Apple Accessibility trees, detects UI elements, and executes coordinate-accurate clicks on macOS.
- [macOS-MCP](https://awesomecua.com/resources/github-cursortouch-macos-mcp/) — Date not recorded
  Lightweight Model Context Protocol server for macOS computer use providing Accessibility tree traversal, screenshots, and input simulation.
- [macOS-use](https://awesomecua.com/resources/github-browser-use-macos-use/) — Date not recorded
  An archived Browser Use project that lets an LLM operate macOS apps by reading their accessibility trees and pressing, typing into and opening elements through the macOS Accessibility API.
- [macOS-Use](https://awesomecua.com/resources/github-jeomon-macos-use/) — Date not recorded
  macOS-Use is a GUI desktop agent that reads the macOS Accessibility tree and executes multi-step application workflows.
- [MacosUseSDK](https://awesomecua.com/resources/github-mediar-ai-macosusesdk/) — Date not recorded
  MacosUseSDK is a Swift library and CLI for traversing the macOS accessibility tree and simulating native mouse and keyboard input.
- [macpilot-mcp](https://awesomecua.com/resources/github-passerby2049-macpilot-mcp/) — Date not recorded
  macOS Model Context Protocol server for capturing displays, reading Accessibility trees, and invoking native UI actions.
- [MacWork](https://awesomecua.com/resources/github-gklab-macwork/) — Date not recorded
  MacWork is an open-source macOS computer-use agent and MCP server that drives desktop applications through the native Accessibility API.
- [mapleluvr cu (Evidence-Bound Windows CLI)](https://awesomecua.com/resources/github-mapleluvr-cu/) — Date not recorded
  Evidence-bound computer-use CLI for Windows that pairs every UI action with pre/post window observations.
- [Marey](https://awesomecua.com/resources/github-badalraj9-marey/) — Date not recorded
  Marey is a modular perception engine for computer-use agents that tracks screen changes and extracts UI elements with minimal model calls.
- [MarkForge](https://awesomecua.com/resources/github-lannistersyh-markforge/) — Date not recorded
  MarkForge provides deterministic, auditable Set-of-Mark badge rendering and coordinate resolution for multimodal GUI agents.
- [Marvi OS](https://awesomecua.com/resources/github-xretr00-marvi-os/) — Date not recorded
  Conversational desktop agent shell that observes screen context and executes local OS and GUI actions.
- [Mary (Personal AI OS)](https://awesomecua.com/resources/github-rao-studios-mary/) — Date not recorded
  Ambient-intelligent macOS computer-use desktop client and personal AI operating environment.
- [MAWR (Machine-Aware Web Runtime)](https://awesomecua.com/resources/github-iasolutionorg-mawr/) — Date not recorded
  Open-source, Chromium-free lightweight web runtime engineered specifically for machines and AI web agents.
- [MCP Virtual Cursor](https://awesomecua.com/resources/github-sos2778-mcp-virtual-cursor/) — Date not recorded
  macOS computer-use MCP server that operates applications via Accessibility actions and a virtual cursor without hijacking the physical mouse.
- [mcp-linux-desktop](https://awesomecua.com/resources/github-wizardofweb125-lab-mcp-linux-desktop/) — Date not recorded
  Model Context Protocol server for full Linux desktop control spanning windows, mouse, keyboard, clipboard, audio, OCR, and accessibility.
- [MEGA-GUI](https://awesomecua.com/resources/github-samsungsds-research-papers-mega-gui/) — Date not recorded
  MEGA-GUI implements a multi-stage GUI grounding pipeline combining candidate region proposal, iterative zoom-in, and element localization.
- [midscene-pc](https://awesomecua.com/resources/github-mofangbao-midscene-pc/) — Date not recorded
  midscene-pc extends Midscene.js to local and remote PC desktops, enabling natural-language GUI automation across Windows, Linux, and macOS.
- [Miiiuser dsh-browser-agent](https://awesomecua.com/resources/github-miiiuser-dsh-browser-agent/) — Date not recorded
  Playwright browser automation and vision grounding toolkit for text-only LLMs on DeepSeek Harness.
- [Milli-Agent](https://awesomecua.com/resources/github-abdullah-al-raju-milli-agent/) — Date not recorded
  Milli-Agent is a real-time computer-use agent architecture designed for high-frequency in-memory screen capture and low-latency actuation.
- [MindsEye (dsh-mindseye)](https://awesomecua.com/resources/github-kanchengw-dsh-mindseye/) — Date not recorded
  Vision plugin for text-only models on DeepSeek Harness enabling interactive image and UI screenshot inspection.
- [mllm](https://awesomecua.com/resources/github-ubiquitouslearning-mllm/) — Date not recorded
  mllm is a C++ multimodal LLM inference engine optimized for on-device execution on mobile NPU/CPU hardware.
- [MobileClaw](https://awesomecua.com/resources/github-eggbrid2-mobileclaw/) — Date not recorded
  MobileClaw is an open Android AI agent runtime for phone control, VLM screen reading, and reusable mobile skill execution.
- [Mobilerun Portal (formerly Droidrun Portal)](https://awesomecua.com/resources/github-droidrun-mobilerun-portal/) — Date not recorded
  An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.
- [MultimodalWebSurfer](https://awesomecua.com/resources/url-41556fece3bf8a2419ba/) — Date not recorded
  MultimodalWebSurfer operates a Chromium browser through Playwright, using marked screenshots and a multimodal model to choose actions on web pages.
- [MVP (Multiple View Prediction)](https://awesomecua.com/resources/github-zjuscl-mvp/) — Date not recorded
  MVP improves GUI visual grounding by aggregating multi-view coordinate predictions across aspect-ratio and resolution transformations.
- [my_tiny_agent](https://awesomecua.com/resources/github-yanjin101-my-tiny-agent/) — Date not recorded
  Spec-driven small-LLM desktop agent that operates Windows end-to-end using OCR, YOLO icon detection, and Win32 APIs without a VLM.
- [nanbbb dsh-computer-use-windows](https://awesomecua.com/resources/github-nanbbb-dsh-computer-use-windows/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness combining window discovery, UI Automation inspection, and input synthesis.
- [native-devtools-mcp](https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/) — Date not recorded
  Local Rust MCP server for operating macOS and Windows apps, Chrome or Electron pages over CDP, and Android devices over ADB, with screenshots, OCR, accessibility lookup, input and template matching.
- [Navisual](https://awesomecua.com/resources/github-navisualguide-navisual/) — Date not recorded
  Navisual is a non-intrusive visual desktop guide that observes the screen and highlights where the user should click next.
- [NeuroSight (QiraBot Vision Runtime)](https://awesomecua.com/resources/github-vthanhhdev-qirabot-vision-runtime/) — Date not recorded
  Selector-free AI vision automation runtime for desktop applications, mobile screens, and games.
- [NextGen macOS Computer-Use Agent](https://awesomecua.com/resources/github-nextgen-agentics-computer-use-agent/) — Date not recorded
  macOS desktop automation agent using a 5-layer perception cascade from native Accessibility trees to OCR and VLM grounding.
- [NirvanaX AutoAgent](https://awesomecua.com/resources/github-sayantanthecmd-nirvanax-autoagent/) — Date not recorded
  Multimodal personal AI assistant for Windows that combines voice input, screen vision, and desktop control.
- [NormCap](https://awesomecua.com/resources/github-dynobo-normcap/) — Date not recorded
  NormCap is a cross-platform OCR screen-capture tool that extracts text directly from selected screen regions on Linux, macOS, and Windows.
- [NORTHTEK Ghost](https://awesomecua.com/resources/github-northtekdevs-ghost/) — Date not recorded
  Provides verified desktop control for AI agents on Windows and Linux across native GUI applications lacking APIs.
- [Nova (Rust Cross-Platform CUA MCP)](https://awesomecua.com/resources/github-bigduu-nova/) — Date not recorded
  Cross-platform Rust computer-use MCP server for macOS and Windows combining AX/UIA accessibility trees, screenshots, OCR, and input.
- [NOVA Computer Use](https://awesomecua.com/resources/github-theodorebeaupre-prog-nova-computer-use/) — Date not recorded
  Native, local-first macOS Computer Use runtime for Codex on both Intel and Apple Silicon Macs.
- [nuphus-mcp](https://awesomecua.com/resources/github-mrpulor-gh-nuphus-mcp/) — Date not recorded
  Cross-platform desktop automation MCP server for controlling screens, windows, mouse, and keyboard.
- [O-yuan (启原) v3.0](https://awesomecua.com/resources/github-znfr60-o-yuan-agent/) — Date not recorded
  Cross-platform general-purpose agent equipped with 28+ built-in tools, multi-model deliberation, GUI automation, and persistent shell.
- [Ocular](https://awesomecua.com/resources/github-guatxlabs-ocular/) — Date not recorded
  Hardened web capture and hostile-HTML analysis engine with anti-bot reconnaissance for browser agents.
- [Odin](https://awesomecua.com/resources/github-madanlalit-odin/) — Date not recorded
  Odin is a macOS computer automation agent combining vision LLMs, Accessibility context extraction, and native input control.
- [Offhand](https://awesomecua.com/resources/github-humzakhan-offhand/) — Date not recorded
  Offhand is an offline, accessibility-first desktop agent for macOS and Windows powered by compact local vision-language models.
- [Okno Windows Computer Use MCP](https://awesomecua.com/resources/github-vitalcc55-okno/) — Date not recorded
  Windows-native Model Context Protocol runtime for AI agents providing desktop window inspection, OCR, and input control.
- [Omarchy OMCP](https://awesomecua.com/resources/github-btsouth-omarchy-omcp/) — Date not recorded
  Exposes an Omarchy Linux desktop session as a live, watchable Model Context Protocol server for AI agents.
- [Ommatix](https://awesomecua.com/resources/github-yosoyepa-ommatix/) — Date not recorded
  Ommatix is an incremental spatial-indexing perception engine that tracks stable UI element IDs and state diffs across desktop frames.
- [omni-computer-use](https://awesomecua.com/resources/github-jason26214-omni-computer-use/) — Date not recorded
  Windows computer-use Model Context Protocol server replicating Claude Desktop's computer-use tool surface.
- [OmniInfer](https://awesomecua.com/resources/github-omnimind-ai-omniinfer/) — Date not recorded
  OmniInfer is a local LLM and VLM inference engine with OpenAI-compatible APIs for desktop and edge agents.
- [OmniParser](https://awesomecua.com/resources/github-microsoft-omniparser/) — Date not recorded
  Screenshot parser that detects interactable regions and captions icons so vision-language models can ground actions, released as V1.5 and V2 weights alongside OmniTool for driving a Windows 11 VM.
- [OmniParser MCP Server](https://awesomecua.com/resources/github-cute-aaa-omniparser-mcp/) — Date not recorded
  OmniParser MCP Server wraps Microsoft OmniParser V2 into a Model Context Protocol server that converts screenshots into structured UI elements.
- [Open Codex Computer History](https://awesomecua.com/resources/github-hqhq1025-open-codex-computer-history/) — Date not recorded
  Clean-room macOS implementation of event-stream interaction recording using Accessibility hit-testing, CGEvent taps, and SkyLight window snapshots.
- [Open Frame](https://awesomecua.com/resources/github-off-camber-open-frame/) — Date not recorded
  Deterministic desktop automation engine for AI agents implementing a capture-recognize-act-verify loop.
- [open-computer-use](https://awesomecua.com/resources/github-ifuryst-open-computer-use/) — Date not recorded
  Computer-use MCP server and CLI for macOS, Linux and Windows exposing nine shared tools, such as get_app_state, click and set_value, with macOS apps read through accessibility APIs.
- [Openbrowser (Semantic Headless Runtime)](https://awesomecua.com/resources/github-datuomart5423-openbrowser/) — Date not recorded
  Headless browser runtime that converts webpages into compact structured semantic state for AI agents.
- [opencode-gui-bridge](https://awesomecua.com/resources/github-yueqi-wang-795-opencode-gui-bridge/) — Date not recorded
  Model Context Protocol bridge giving OpenCode and MCP clients real Windows GUI control via UI Automation and vision.
- [opencode-mobile-use](https://awesomecua.com/resources/github-system1970-opencode-mobile-use/) — Date not recorded
  OpenCode plugin for controlling Android devices with a live phone screen in the TUI sidebar and resilient UI hierarchy dumps.
- [OpenComet](https://awesomecua.com/resources/github-princechouhan19-opencometai/) — Date not recorded
  Chrome side-panel agent that tags page elements with numbered boxes, redacts faces, credential fields and text PII on-device before a model sees the screenshot and DOM text, and acts through selectors or debugger clicks.
- [OpenControl](https://awesomecua.com/resources/github-joshuaalawrence-opencontrol/) — Date not recorded
  Single-binary ~2MB Rust Model Context Protocol server exposing 54 native Windows desktop control, UI Automation, and screenshot tools.
- [OpenDesk](https://awesomecua.com/resources/github-shopable-ai-opendesk/) — Date not recorded
  OpenDesk is an API-driven desktop automation runtime that lets AI agents control windows, mouse/keyboard, OCR, and files via JavaScript or MCP.
- [OpenDesk](https://awesomecua.com/resources/github-vitalops-opendesk/) — Date not recorded
  Computer-use MCP server and Python/TypeScript SDKs giving agents Set-of-Marks screenshots, accessibility-based UI actions, mouse, keyboard, OCR, CDP browser control and workflow replay on local or paired machines.
- [OpenGUI (Windows Native Service)](https://awesomecua.com/resources/github-lessenings-prog-opengui/) — Date not recorded
  Windows-native .NET 9 desktop automation service exposing sub-millisecond named-pipe IPC and UI Automation perception to LLM agents.
- [OpenOCR](https://awesomecua.com/resources/github-topdu-openocr/) — Date not recorded
  OpenOCR is an open-source scene and document text detection, recognition, and VLM-OCR toolkit used for screen text parsing.
- [OpenUI](https://awesomecua.com/resources/github-wandb-openui/) — Date not recorded
  OpenUI lets users and agents generate, preview, and iteratively edit live HTML/Tailwind/React UI components from natural language and screenshots.
- [Opus](https://awesomecua.com/resources/github-jeffrey-zang-opus/) — Date not recorded
  Electron app for macOS whose OpenAI Agents SDK loop operates apps through AppleScript, Accessibility-element clicks, key presses, shell commands and URIs, guided by element lists and screenshots.
- [orangeofcarl0-sys dsh-computer-use](https://awesomecua.com/resources/github-orangeofcarl0-sys-dsh-computer-use/) — Date not recorded
  Windows desktop computer-use plugin for DeepSeek Harness featuring numbered UI element grounding and background-first input delivery.
- [Orbination AI Desktop Vision & Control](https://awesomecua.com/resources/github-amichail-1-orbination-ai-desktop-vision-control/) — Date not recorded
  Native Windows MCP server combining UI Automation, dark-theme-aware OCR, visual grounding, and mouse/keyboard control.
- [Orynn](https://awesomecua.com/resources/github-robomohit-orynn/) — Date not recorded
  Orynn is a Windows desktop agent that controls native applications by UI Automation control names without screenshot loops.
- [Ossabellator Bounded Computer-Use Runtime](https://awesomecua.com/resources/github-ossabellator-computer-use/) — Date not recorded
  Bounded computer-use runtime and semantic browser engine with explicit capability and policy enforcement.
- [OSWright](https://awesomecua.com/resources/github-ask-812-oswright/) — Date not recorded
  Windows desktop automation MCP server using incremental UI Automation state diffs rather than full-screen vision loops.
- [PageLens](https://awesomecua.com/resources/github-heinevwinston-bot-pagelens/) — Date not recorded
  Read-only Claude browser assistant that inspects live webpages and suggests UX and accessibility improvements.
- [pagewatch-mcp](https://awesomecua.com/resources/github-toolshedlabs-hash-pagewatch-mcp/) — Date not recorded
  Minimal 3-tool Model Context Protocol server for reading webpages as Markdown, capturing screenshots, and exporting PDFs.
- [PANOPTES Screen MCP Server](https://awesomecua.com/resources/github-yxpil-panoptes/) — Date not recorded
  Streamable HTTP Model Context Protocol server exposing 9 screen capture and mouse/keyboard control tools to AI agents.
- [pc-screen-control](https://awesomecua.com/resources/github-desteny-dev-pc-screen-control/) — Date not recorded
  Windows Model Context Protocol server that exposes the desktop accessibility tree as structured data rather than screenshots.
- [pcbridge](https://awesomecua.com/resources/github-eymistaken-pcbridge/) — Date not recorded
  Turns a Linux desktop into a Model Context Protocol server for shell execution, window management, and GUI automation.
- [perceive](https://awesomecua.com/resources/github-gauthierpiarrette-perceive/) — Date not recorded
  perceive is a reachability-filtered perception layer for browser agents that prunes non-interactive or occluded DOM elements.
- [pi-computer-use](https://awesomecua.com/resources/github-injaneity-pi-computer-use/) — Date not recorded
  Pi extension that gives agents tools to find app windows, observe and search visible controls, click, type, scroll and wait for UI changes in desktop software.
- [pi-iphone-mirroring](https://awesomecua.com/resources/github-aniruddha-adhikary-pi-iphone-mirroring/) — Date not recorded
  Vision-first iPhone Mirroring control package for the Pi coding agent on macOS.
- [pinchtab-mcp](https://awesomecua.com/resources/github-maderwin-pinchtab-mcp/) — Date not recorded
  Model Context Protocol server for PinchTab enabling AI agents to control Chromium browsers via accessibility trees and CDP.
- [pixel-forge](https://awesomecua.com/resources/github-sjxbbdb-pixel-forge/) — Date not recorded
  Desktop automation toolkit providing screenshot capture, OCR, pixel-diff change detection, and mouse/keyboard actions for AI agents.
- [PixelCheck](https://awesomecua.com/resources/github-xcodethink-pixelcheck/) — Date not recorded
  Drop-in MCP server providing five visual browser primitives for frontend coding agents to inspect, screenshot, and verify live web UIs.
- [Plasmate](https://awesomecua.com/resources/github-plasmate-labs-plasmate/) — Date not recorded
  Plasmate is a Rust browser engine for AI agents that transforms HTML and DOM state into a compact, actionable Semantic Object Model.
- [Pointframe](https://awesomecua.com/resources/github-dimitar-radenkov-pointframe/) — Date not recorded
  MCP server and CLI that lets coding agents inspect, drive, and verify native Windows UI applications with signed screenshot evidence.
- [Polyform a11y-guide](https://awesomecua.com/resources/github-polyform-ai-a11y-guide/) — Date not recorded
  Semantic accessibility page-guidance layer designed simultaneously for assistive technologies and AI browser agents.
- [PortaMCP](https://awesomecua.com/resources/github-tnlegend-portamcp/) — Date not recorded
  Client-neutral Model Context Protocol server and secure desktop Control Center for Windows automation.
- [Prism AI Screen Reader](https://awesomecua.com/resources/github-chrismannina-prism-ai-screen-reader/) — Date not recorded
  Prism is a macOS screen reader and activity analyzer that captures screenshots and summarizes user desktop workflows with vision-language models.
- [PUDA guidriver](https://awesomecua.com/resources/github-pudap-guidriver/) — Date not recorded
  Windows-first edge service for recording, verifying, and deterministically replaying reviewed GUI workflows.
- [pursr](https://awesomecua.com/resources/github-0xheycat-pursr/) — Date not recorded
  Visual QA, accessibility auditing, screenshot diffing, and MCP browser automation toolkit.
- [pyside6-mcp](https://awesomecua.com/resources/github-com55-pyside6-mcp/) — Date not recorded
  Playwright-style Model Context Protocol server that lets AI agents inspect, control, and debug Qt/PySide6 desktop GUI applications.
- [Qirabot](https://awesomecua.com/resources/github-qirabot-qirabot/) — Date not recorded
  Qirabot is a pure-vision multimodal GUI automation framework for operating browsers, mobile apps, desktops, and games without DOM selectors.
- [QWebBridge](https://awesomecua.com/resources/github-hu-qi-qwebbridge/) — Date not recorded
  Browser bridge that lets AI agents navigate, click, fill forms, and read Chrome pages via the accessibility tree.
- [rdc (Remote Desktop Control for AI Agents)](https://awesomecua.com/resources/github-bscott-rdc/) — Date not recorded
  Remote desktop control CLI and bridge allowing a coding agent to capture screenshots and send mouse/keyboard input to another machine.
- [Reasonix Computer Use](https://awesomecua.com/resources/github-plocr-reasonix-computer-use/) — Date not recorded
  Cross-platform desktop automation plugin combining native accessibility trees (UIA/AXAPI/AT-SPI2) with EasyOCR visual fallback.
- [reflex-computer-use](https://awesomecua.com/resources/github-8itlab-reflex-cu/) — Date not recorded
  reflex-computer-use is an MCP server for macOS and Windows that reads native UI accessibility trees and dispatches low-latency actions.
- [Renoned dsh-computer-use](https://awesomecua.com/resources/github-renoned-dsh-computer-use/) — Date not recorded
  Capability-aware macOS computer-use plugin for DeepSeek Harness combining Accessibility-first queries with Vision Router fallback.
- [Roadmvn linux-computer-use](https://awesomecua.com/resources/github-roadmvn-linux-computer-use/) — Date not recorded
  Linux computer-use Model Context Protocol server for Claude Code, OpenAI Codex, and MCP clients.
- [RPA Desktop Canal Visual](https://awesomecua.com/resources/github-hab99-rpa-desktop-canal-visual/) — Date not recorded
  Closed-loop visual desktop RPA runtime that drives isolated terminal and GUI applications purely from screen captures.
- [rs_peekaboo](https://awesomecua.com/resources/github-undivisible-rs-peekaboo/) — Date not recorded
  Rust-native cross-platform computer-use CLI and library for desktop window inspection, screenshots, and input automation.
- [s1](https://awesomecua.com/resources/github-matthew-eucaristo-s1/) — Date not recorded
  s1 is a voice-first macOS computer-use agent that inspects the Accessibility tree, executes UI actions, and displays an auditable step trail.
- [Scout Browser Agent](https://awesomecua.com/resources/github-sanjeev29-scout-browser-agent/) — Date not recorded
  Browser agent using a 4-layer perception cascade from lightweight HTTP text to accessibility trees and vision fallback.
- [Screen Intelligence](https://awesomecua.com/resources/github-zacfink-screen-intelligence/) — Date not recorded
  Screen Intelligence is a macOS desktop agent that reads screens with multimodal LLMs and drives mouse and keyboard actions.
- [screen-mcp (Linux Wayland)](https://awesomecua.com/resources/github-88plug-screen-mcp/) — Date not recorded
  Linux Wayland computer-use MCP server for Claude Code and Grok providing screenshot capture, clicking, typing, and scrolling.
- [screen-use](https://awesomecua.com/resources/github-tongriyaotxt-screen-use/) — Date not recorded
  Browser-Use-style framework for the entire desktop that gives AI agents visual screen perception and mouse/keyboard control.
- [screen-vision](https://awesomecua.com/resources/github-daizedong-screen-vision/) — Date not recorded
  Captures desktop windows and extracts UI elements and buttons with pixel coordinates combining accessibility trees and OCR.
- [Screen2AX](https://awesomecua.com/resources/github-macpaw-screen2ax/) — Date not recorded
  Screen2AX reconstructs macOS application accessibility trees from screenshots using vision detectors and releases the Maceka GUI dataset.
- [ScreenHand](https://awesomecua.com/resources/github-manushi4-screenhand/) — Date not recorded
  Open-source desktop automation MCP server that drives native macOS and Windows UI elements in ~50ms via OS accessibility APIs.
- [ScreenParse Webshot toolkit](https://awesomecua.com/resources/github-saidgurbuz-screenparse/) — Date not recorded
  Official ScreenParse code: the Webshot toolkit that renders websites with Playwright, records visible DOM elements as boxed, nested annotations, relabels them with Qwen3-VL, exports YOLO data and evaluates parsers.
- [screenshotting-gui](https://awesomecua.com/resources/github-evilfreelancer-screenshotting-gui/) — Date not recorded
  Agent skill for Claude Code, Codex, and Cursor that captures repeatable, window-scoped screenshots of native desktop and browser GUI apps.
- [ScreenWatch](https://awesomecua.com/resources/github-abnsapkota001-screenwatch/) — Date not recorded
  Python library for detecting persistent visual state changes and UI settlement in desktop applications.
- [secretxuan dsh-computer-use-win](https://awesomecua.com/resources/github-secretxuan-dsh-computer-use-win/) — Date not recorded
  Windows computer-use bundle for DeepSeek Harness providing desktop screenshots, window management, and input automation.
- [see_the_screen (DSH Windows Desktop Plugin)](https://awesomecua.com/resources/github-jaychouu-see-the-screen/) — Date not recorded
  Windows desktop automation plugin for DeepSeek Harness agents providing screen observation and GUI control.
- [Seg2Click](https://awesomecua.com/resources/github-jcwang0602-seg2click/) — Date not recorded
  Training and inference implementation that predicts an executable-region mask and derives a GUI click from that mask.
- [Seg2Click](https://awesomecua.com/resources/url-8525e17eee1f3e754ad4/) — Date not recorded
  A hosted GUI grounding demo that takes a screenshot and instruction, then predicts an action mask and click point using a public Seg2Click checkpoint.
- [Semantic Browser (agent-browser)](https://awesomecua.com/resources/github-atreasureboy-agent-browser/) — Date not recorded
  Agent-readable semantic browser layer providing token-efficient webpage understanding and structured action execution.
- [Semantic GUI Control Layer (SGCL)](https://awesomecua.com/resources/github-frankbria-semantic-gui-control/) — Date not recorded
  SGCL is a cross-platform, text-first control layer that exposes graphical user interfaces to agents as structured semantic affordances.
- [Sensory-Grounding MCP](https://awesomecua.com/resources/github-luclinocruz-lucross-sensory-grounding-mcp/) — Date not recorded
  Closed-loop visual, audio, and video sensory grounding MCP server for verifying UI state in coding and computer-use agents.
- [servo-agent](https://awesomecua.com/resources/github-parker-brown-family-servo-agent/) — Date not recorded
  Agent-controllable web browser built on the Rust Servo engine that distills live rendered DOM layouts into compact agent observations.
- [Shadow](https://awesomecua.com/resources/github-ghostwright-shadow/) — Date not recorded
  macOS app that records screen, audio, input events and accessibility trees on-device, builds searchable episodes, and replays learned procedures through AX-first grounding with a LoRA-tuned ShowUI-2B fallback.
- [shadow-web](https://awesomecua.com/resources/github-ulinycoin-shadow-web/) — Date not recorded
  Local-first Python SDK for web agents providing Shadow DOM flattening, Action Maps, SchemaSnap extraction, and form filling.
- [Sidelook](https://awesomecua.com/resources/github-ucsandman-sidelook/) — Date not recorded
  Windows desktop companion agent that observes active application context and executes user-approved UI actions.
- [Sidemates](https://awesomecua.com/resources/github-prisacariurobert-sidemates/) — Date not recorded
  Open-source desktop AI companion that observes active windows and assists with everyday computer tasks.
- [SIH26 Privacy-Preserving Browser Agent](https://awesomecua.com/resources/github-dalwadi-aryan-pranavkumar-sih-26/) — Date not recorded
  Privacy-preserving AI browser agent framework that sanitizes sensitive DOM and screen fields before LLM planning.
- [Sikuli legacy research implementation](https://awesomecua.com/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [Smart Pet Agent](https://awesomecua.com/resources/github-realstreetsmartnyc-smart-pet-agent/) — Date not recorded
  Local-first ambient desktop pet agent that observes workspace context and automates routine desktop actions.
- [Smouj AgentBrowser](https://awesomecua.com/resources/github-smouj-agent-browser/) — Date not recorded
  AI-powered browser automation platform combining a REST API, live web dashboard, and vision-assisted DOM interaction.
- [Snapsurf](https://awesomecua.com/resources/github-zumerlab-snapsurf/) — Date not recorded
  Web navigation and verification layer for AI agents providing compact semantic page digests and typed post-action DOM diffs.
- [SoftAuto MCP](https://awesomecua.com/resources/github-guangfubill-crypto-softauto-mcp/) — Date not recorded
  Open-source Windows RPA and Model Context Protocol server providing UI Automation desktop control to AI agents.
- [Solari Voice Agent](https://awesomecua.com/resources/github-muhammad-abdullahghani-solari-voice-agent/) — Date not recorded
  Voice-directed autonomous computer-use agent built on Solari Desktop and LangGraph.
- [SpectraBrowser MCP](https://awesomecua.com/resources/github-virajverse-spectra-browser-mcp/) — Date not recorded
  Autonomous real-browser interaction engine and Chrome extension bridge exposing 99 MCP tools to AI agents.
- [Spooky Action](https://awesomecua.com/resources/github-jumpsy-spooky-action/) — Date not recorded
  Focus-free macOS computer-use tool that presses native Accessibility buttons in the background without moving the user's cursor.
- [Stagehand](https://awesomecua.com/resources/url-0210d8713fd41ca1448f/) — Date not recorded
  An SDK for browser agents that combines Playwright-style page control with natural-language actions, observation, and extraction. It runs beside the browser as an extension.
- [Surfer-H-CLI](https://awesomecua.com/resources/github-hcompai-surfer-h-cli/) — Date not recorded
  Deprecated runner for H Company's Surfer-H web agent: a policy model reads recent Chrome screenshots, a Holo localizer returns click coordinates, Selenium acts, and an optional validator checks the answer.
- [System Automation MCP](https://awesomecua.com/resources/github-aurafriday-system-mcp/) — Date not recorded
  System Automation MCP exposes cross-platform desktop UI inspection, OCR, window management, and mouse/keyboard actions to MCP-compatible agents.
- [Tactile](https://awesomecua.com/resources/github-yliust-tactile/) — Date not recorded
  Skill, protocol and tool layer that has agents operate software through accessibility semantics first, reading roles, names and states before reaching for screenshots.
- [Tailorec Browser Orchestrator](https://awesomecua.com/resources/github-tailorec-tailorec-browser-orch/) — Date not recorded
  Run-isolated browser orchestration service that converts webpages into semantic snapshots with stable element references.
- [TankWork](https://awesomecua.com/resources/github-agenttankos-tankwork/) — Date not recorded
  TankWork is a desktop agent framework combining OmniParser visual grounding, OCR, and PyAutoGUI actuation.
- [Tarsier](https://awesomecua.com/resources/github-reworkd-tarsier/) — Date not recorded
  Perception utilities for web agents that tag interactable elements with typed IDs an LLM can act on, and use OCR to render page screenshots as whitespace-structured text for models without vision.
- [Tarsier-AI](https://awesomecua.com/resources/github-siddzzzz-tarsier/) — Date not recorded
  Tarsier-AI transforms desktop and web accessibility trees into portable semantic snapshots and deterministic action primitives for LLM agents.
- [Tauri Dev Screen CLI](https://awesomecua.com/resources/github-johunsang-tauri-dev-screen-cli/) — Date not recorded
  Node.js CLI for AI agents to inspect, screenshot, and control live Tauri desktop application windows during development.
- [termcast](https://awesomecua.com/resources/github-chromedp-termcast/) — Date not recorded
  A Go utility that displays a chromedp browser page in a graphics terminal using screencast frames, with options to show the whole page or one element.
- [terminal-use-mcp](https://awesomecua.com/resources/github-hlh2023-terminal-use-mcp/) — Date not recorded
  Model Context Protocol server for interactive terminal computer use, allowing AI agents to operate full-screen TUI applications (`vim`, `htop`, `lazygit`).
- [THEIA Computer Use](https://awesomecua.com/resources/github-tree-ind-theia-ui-computer-use/) — Date not recorded
  THEIA (The Human Environment Intelligence Aperture) is a visual perception and UI computer-use plugin and framework for AI agents.
- [Third Eye](https://awesomecua.com/resources/github-slastrina-third-eye/) — Date not recorded
  Local macOS computer-use agent with screen perception and verified action execution.
- [ThreeBody6666 DSH Computer Use](https://awesomecua.com/resources/github-threebody6666-dsh-computer-use/) — Date not recorded
  Native Windows computer-use and configurable vision plugin for DeepSeek Harness.
- [TideSurf](https://awesomecua.com/resources/github-tidesurf-core/) — Date not recorded
  TideSurf connects Chromium to LLM agents via compact structured DOM compression requiring 50 to 200 tokens per webpage.
- [tine](https://awesomecua.com/resources/github-smythp-tine/) — Date not recorded
  Command-line interface for AI agents to inspect and drive Linux GNOME Wayland desktops without portal consent dialogs.
- [TipTour](https://awesomecua.com/resources/github-milind-soni-tiptour-macos/) — Date not recorded
  macOS menu-bar agent that grounds clicks with a local Core ML control detector and accessibility tree, driven by TypeSafe's JEV text loop or Gemini realtime voice, with a localhost harness for other agents.
- [Touchline](https://awesomecua.com/resources/github-edenbuilds-touchline/) — Date not recorded
  Multi-agent browser squad for evidence-led website inspection and frontend reconstruction.
- [Touchpoint](https://awesomecua.com/resources/github-touchpoint-labs-touchpoint/) — Date not recorded
  Touchpoint is a cross-platform desktop accessibility API and MCP server giving AI agents unified UI inspection and control.
- [Trope CUA](https://awesomecua.com/resources/github-tropeai-trope-cua/) — Date not recorded
  Trope CUA enables background desktop inspection and GUI operation on Windows and macOS without interrupting foreground user work.
- [Turan AI](https://awesomecua.com/resources/github-aykutkrm67-turan-ai/) — Date not recorded
  Local multi-brain Windows AI desktop agent with visible computer control and verified action execution.
- [typesafe-computer-use](https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/) — Date not recorded
  Computer-use loop that reads the screen with OCR and accessibility labels, has the hosted TypeSafe classifier choose each next action with a confidence, and calls a writer model only for free text.
- [UI Annotator MCP](https://awesomecua.com/resources/github-mcpware-ui-annotator-mcp/) — Date not recorded
  Model Context Protocol server that injects interactive Set-of-Mark hover labels into live webpages for visual browser agents.
- [UI Defect Mocker](https://awesomecua.com/resources/github-zju-aces-ise-uidefectmocker/) — Date not recorded
  Synthesizes visual UI defects from mobile screenshots and Android layout metadata to support GUI-testing experiments.
- [UI Image to Code Studio](https://awesomecua.com/resources/github-zwq-top-ui-image-to-code-studio/) — Date not recorded
  Codex skill for converting UI screenshots and live websites into React, Vue, or HTML code with visual browser verification.
- [uia-agent](https://awesomecua.com/resources/github-supermarioyl-uia-agent/) — Date not recorded
  uia-agent defines an open-source LLM agent action space that drives legacy Windows desktop applications through the UI Automation tree.
- [uiacli (Windows UI Automation CLI)](https://awesomecua.com/resources/github-amitse-uiacli/) — Date not recorded
  Exposes Windows desktop applications to AI agents via structured UI Automation trees and CLI commands.
- [UIAutomationMcp](https://awesomecua.com/resources/github-trsdn-mcp-server-uiautomation/) — Date not recorded
  Windows UI Automation toolkit providing a CLI, MCP server, and VS Code extension for inspecting and driving native desktop controls.
- [uictl-mac-mcp](https://awesomecua.com/resources/github-byronjones-elsevier-uictl-mac-mcp/) — Date not recorded
  macOS GUI-automation CLI and Model Context Protocol server for coding agents.
- [uictl-win-mcp](https://awesomecua.com/resources/github-byronjones-elsevier-uictl-win-mcp/) — Date not recorded
  Windows .NET/C# GUI-automation CLI and Model Context Protocol server for coding agents.
- [UIED (UI Element Detection)](https://awesomecua.com/resources/github-mulongxie-uied/) — Date not recorded
  UIED detects graphical widgets and text blocks in UI screenshots by combining flood-fill/Canny component analysis with deep text recognition.
- [UltraTerm Computer Use](https://awesomecua.com/resources/github-michael-berardi-ultraterm-computer-use/) — Date not recorded
  Local desktop automation plugin for MCP-capable agents on macOS, Linux, and Windows.
- [UltraWin MCP](https://awesomecua.com/resources/github-jxoesneon-ultrawin-mcp/) — Date not recorded
  Rust Model Context Protocol server for Windows desktop automation providing native UI Automation tree inspection and input control.
- [Universal Computer Control MCP](https://awesomecua.com/resources/github-adkdev200-universal-computer-control/) — Date not recorded
  Model Context Protocol server giving AI agents cross-platform screen capture, mouse, keyboard, and window control.
- [Universal Computer Use](https://awesomecua.com/resources/github-nico0713520-universal-computer-use/) — Date not recorded
  Lightweight, model-free Model Context Protocol plugin giving multimodal agents native macOS screen and input control.
- [VACT (Vector Agent Context Transport)](https://awesomecua.com/resources/github-fy2ne-vact/) — Date not recorded
  High-frequency GPU screen perception and low-latency input transport protocol for desktop computer-use agents.
- [vadgr-computer-use](https://awesomecua.com/resources/github-montbrain-vadgr-computer-use/) — Date not recorded
  Three-tier computer-use MCP server combining system shell tools, OS accessibility trees (UIA/AT-SPI/AX), and vision fallback.
- [vco (Visual Computer Operate)](https://awesomecua.com/resources/github-lo2589-vco/) — Date not recorded
  Shell-driven visual computer-use toolkit enabling LLMs to inspect and click web pages and desktop screens.
- [Vigil](https://awesomecua.com/resources/github-bofstudios-vigil/) — Date not recorded
  Native C# Windows desktop AI assistant invoked by voice wake-word or hotkey to execute system and GUI tasks.
- [Vision Browser Agent](https://awesomecua.com/resources/github-zbcs-studiocr-cn-vision-browser-agent/) — Date not recorded
  Pure-vision browser automation framework with built-in local Moondream3 inference, zero DOM dependency, and human-like mouse trajectories.
- [Vision Primitives MCP](https://awesomecua.com/resources/github-zouyuanqing-vision-primitives-mcp/) — Date not recorded
  Vision Primitives MCP equips text-only LLMs with 30 visual MCP tools for screen description, coordinate localization, OCR, and crop-zoom.
- [vision-bridge](https://awesomecua.com/resources/github-rusnetru-vision-bridge/) — Date not recorded
  Unified Windows vision and action MCP server for AI agents to inspect desktop windows and dispatch mouse/keyboard events.
- [Vision-MCP](https://awesomecua.com/resources/github-haruhiyuki-vision-mcp/) — Date not recorded
  Desktop application interaction MCP server combining visual UI element detection with mouse and keyboard automation.
- [VisionAX](https://awesomecua.com/resources/github-rao-studios-visionax/) — Date not recorded
  Computer-vision accessibility-tree (AX/A11Y) generator that synthesizes structured UI trees from raw desktop pixels.
- [VisionDroid](https://awesomecua.com/resources/github-testtesta6-visiondroid/) — Date not recorded
  VisionDroid uses multimodal LLMs to explore Android app screens and detect non-crash functional GUI logic bugs across page transitions.
- [VisionGrid AI](https://awesomecua.com/resources/github-mohsinjutt62-autoplay-cv-engine-bot/) — Date not recorded
  Computer-vision Android UI automation and heuristic gameplay engine built with OpenCV and ADB.
- [VisionTasker](https://awesomecua.com/resources/github-akimotoayako-visiontasker/) — Date not recorded
  An Android automation implementation that translates screenshot-based UI understanding into language descriptions for step-by-step LLM planning and action execution.
- [Visual Context Router](https://awesomecua.com/resources/github-fangsylar-pixel-visual-context-router/) — Date not recorded
  Token-aware visual context router that crops, downscales, or replaces full screenshots with localized regions before sending to CUA models.
- [visual-agent](https://awesomecua.com/resources/github-cloudsbeyond-visual-agent/) — Date not recorded
  Protocol-first framework enabling visual-model hosts to safely inspect and operate software GUI interfaces.
- [vnc-remote-control](https://awesomecua.com/resources/github-bitranox-vnc-remote-control/) — Date not recorded
  Layout-aware VNC/RFB remote-control CLI providing typing, clicking, screenshot capture, and OCR against any VNC server.
- [Voice and Vision System Controller](https://awesomecua.com/resources/github-muhammad-touseef-akhtar-voice-vision-system-controller/) — Date not recorded
  Offline Python desktop automation system combining voice commands with computer-vision screen interaction.
- [wangye520 codex-computer-use (Cursor Port)](https://awesomecua.com/resources/github-wangye520-codex-computer-use/) — Date not recorded
  Port of OpenAI Codex's `@oai/sky` Computer Use engine to Cursor for screenshot-driven mouse and keyboard control.
- [wangyong1972 dsh-computer-use-macos](https://awesomecua.com/resources/github-wangyong1972-dsh-computer-use-macos/) — Date not recorded
  Native macOS computer-use plugin for DeepSeek Harness with trusted window targeting and Accessibility integration.
- [wayhand-mcp](https://awesomecua.com/resources/github-timlai666-wayhand-mcp/) — Date not recorded
  Local Model Context Protocol server enabling Claude Code and Codex to observe and operate GNOME Wayland desktops.
- [wayland-computer-use](https://awesomecua.com/resources/github-wh0ami3-wayland-computer-use/) — Date not recorded
  Native Wayland desktop control server using XDG RemoteDesktop portal input and PipeWire capture where X11 tools fail.
- [Web Context Interface (WCI)](https://awesomecua.com/resources/github-amirrezaalasti-webcontextinterface/) — Date not recorded
  Web Context Interface (WCI) is a three-layer specification and toolkit augmenting HTML with structured semantic metadata for AI web agents.
- [WebFovea](https://awesomecua.com/resources/github-jianganghan-webfovea/) — Date not recorded
  WebFovea is a vision-based web agent that combines foveated visual crop refinement with live browser interaction.
- [WebMarker](https://awesomecua.com/resources/github-reidbarber-webmarker/) — Date not recorded
  A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.
- [WebQA Agent](https://awesomecua.com/resources/github-migoxlab-webqa-agent/) — Date not recorded
  WebQA Agent is an autonomous multimodal web testing agent that audits webpage functionality, performance, and visual UX without test scripts.
- [WebSense MCP 2.0](https://awesomecua.com/resources/github-spliffspliff70-wq-websense-mcp/) — Date not recorded
  Non-vision browser automation Model Context Protocol server exposing 7 compact DOM-sensing and action tools.
- [WieslawSoltes Linux Computer Use for Codex](https://awesomecua.com/resources/github-wieslawsoltes-linuxcomputeruse/) — Date not recorded
  Linux desktop and X11/Wayland GUI control skill for OpenAI Codex.
- [Win32 MCP Server](https://awesomecua.com/resources/github-randynorthrup-win32-mcp-server/) — Date not recorded
  Win32 MCP Server exposes 53 native Windows Win32 and UI Automation tools over the Model Context Protocol for desktop agents.
- [winctl-mcp](https://awesomecua.com/resources/github-shult-winctl-mcp/) — Date not recorded
  Local Model Context Protocol server giving AI agents full control over Windows desktop screens, windows, mouse, and keyboard.
- [Windows Computer Use MCP (DXGI + UIA)](https://awesomecua.com/resources/github-betrayzl-windows-computer-use-mcp/) — Date not recorded
  Windows Model Context Protocol server combining DXGI desktop duplication screen capture, UI Automation trees, and human-like input.
- [Windows Sandbox Computer Use Skill](https://awesomecua.com/resources/github-2018wzh-windows-sandbox-computer-use/) — Date not recorded
  Windows-only agent skill for provisioning an isolated Windows Sandbox VM and driving it via visual computer use.
- [windows-gui-mcp](https://awesomecua.com/resources/github-dcl632-windows-gui-mcp/) — Date not recorded
  Windows GUI automation Model Context Protocol server for AI coding and computer-use agents.
- [Windows-MCP](https://awesomecua.com/resources/github-cursortouch-windows-mcp/) — Date not recorded
  A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.
- [Windows-Use](https://awesomecua.com/resources/github-jeomon-windows-use/) — Date not recorded
  A Python agent that drives Windows applications through the UI Automation tree, optionally with screenshots, choosing clicks, typing, scrolling, shortcuts, window actions and PowerShell commands with an LLM.
- [WinMind](https://awesomecua.com/resources/github-jhonpork1233-beep-win-mind/) — Date not recorded
  WinMind is a Windows MCP server that lets AI agents inspect and drive desktop applications through the UI Automation accessibility tree.
- [winuse-mcp](https://awesomecua.com/resources/github-ryanportfolio-winuse-mcp/) — Date not recorded
  Model Context Protocol server enabling Claude and MCP agents to inspect and control Windows desktop applications.
- [WinWright](https://awesomecua.com/resources/github-alegauss-winwright/) — Date not recorded
  Playwright-inspired Windows desktop automation and testing framework that drives native apps and reports verified UI state.
- [Workroom (MLX Computer-Use Agent)](https://awesomecua.com/resources/github-iamibrahimmemon-mlx-llm-workroom/) — Date not recorded
  Workroom is a fully local macOS computer-use agent running an Apple Silicon MLX vision-language model to read screens and execute commands.
- [x11-computer-use](https://awesomecua.com/resources/github-ja-plus-x11-computer-use/) — Date not recorded
  x11-computer-use is an Agent Skills package for Linux X11 desktop control using xdotool input injection, ImageMagick screenshots, and AT-SPI trees.
- [xa11y](https://awesomecua.com/resources/github-xa11y-xa11y/) — Date not recorded
  xa11y is a cross-platform desktop accessibility library in Rust, Python, and Node.js for inspecting and driving native apps on macOS, Windows, and Linux.
- [XiaoShuang (小双桌面女神)](https://awesomecua.com/resources/github-daixin315-xiaoshuang/) — Date not recorded
  Cross-platform desktop AI companion with screen reading, real-time translation, and Hermes-linked app automation.
- [yu-tao-li dsh-computer-use-win](https://awesomecua.com/resources/github-yu-tao-li-dsh-computer-use-win/) — Date not recorded
  Windows computer-use npm package for DeepSeek Harness supporting UI Automation trees, OCR grounding, and background window control.
- [Yunkai](https://awesomecua.com/resources/github-solplum-yunkai/) — Date not recorded
  Android phone assistant combining model-driven tool use with accessibility-tree reading, screenshots, and tap, swipe and text-entry primitives. Its documented interaction flow presents operation plans for user confirmation.
- [Zavora Computer Use MCP](https://awesomecua.com/resources/github-zavora-ai-computer-use-mcp/) — Date not recorded
  Zavora Computer Use MCP is a Rust MCP server and client for discovering desktop applications, inspecting UI controls, and executing actions.
- [zcode-computer-use](https://awesomecua.com/resources/github-sainzs-zcode-computer-use/) — Date not recorded
  macOS computer-control MCP server for ZCode and coding agents combining screenshots, Accessibility trees, and input actions.
- [zetakai desktop-mcp](https://awesomecua.com/resources/github-zetakai-desktop-mcp/) — Date not recorded
  Desktop vision and input control Model Context Protocol server for Linux X11 and Wayland sessions.
- [ZonUI-3B](https://awesomecua.com/resources/github-han1018-zonui-3b/) — Date not recorded
  Code for training and evaluating ZonUI-3B, a GUI grounding model tested on mobile, desktop, and web screenshots at varying resolutions.
- [ZoomClick](https://awesomecua.com/resources/github-princeton-ai2-lab-zoomclick/) — Date not recorded
  ZoomClick implements iterative zoom-in GUI grounding and behavior-based grounding evaluation across high-resolution interfaces.
- [ZRui-C DSH Computer Use](https://awesomecua.com/resources/github-zrui-c-dsh-computer-use/) — Date not recorded
  Text-first browser and background macOS window control plugin for DeepSeek Harness.
- [zseven-w DSH Computer](https://awesomecua.com/resources/github-zseven-w-dsh-computer/) — Date not recorded
  Background macOS desktop automation plugin for DeepSeek Harness that observes and controls apps without stealing focus.

## Learning resources

- [Awesome Multimodal Agentic Coding](https://awesomecua.com/resources/github-jiangjin1999-awesome-multimodal-agentic-coding/) — Date not recorded
  Comprehensive research map of papers, benchmarks, and tools for multimodal coding and UI-verifying agents.
- [Web Browser Automation with Agents (smolagents tutorial)](https://awesomecua.com/resources/url-5857c840372512cfe3fc/) — Date not recorded
  Versioned tutorial building a vision-guided CodeAgent with Selenium/Helium browser tools, screenshot callbacks and example web-navigation tasks.
