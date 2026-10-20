# GUI grounding

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/grounding/records.jsonl

## Papers & surveys

- [Focused Omni-Modal GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-20390/) — 2026-10-14
  Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure.
- [Why Generate a Click? Plug-in Decision Heads for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-20107/) — 2026-10-14
  Adds decision heads to a frozen vision-language generator for selecting web actions and targets, with a confidence gate that falls back to text generation.
- [MMA-SafetyBench: A Benchmark for Multimodal Agent Safety Evaluation](https://awesomecua.github.io/resources/arxiv-2610-19384/) — 2026-10-14
  Builds trajectory-guided visual-injection tests for web, desktop and mobile observations, separating target-matching action predictions from broader semantic compromise.
- [GroundGUI: GUI Grounding by High-Quality Data and Distillation-to-Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2610-19100/) — 2026-10-13
  Introduces ScreenRef screenshot grounding data and a training sequence from supervised learning through teacher-guided distillation to reinforcement learning for GroundGUI-8B.
- [MHVF: Training-Free GUI Grounding via Verification-Guided Multi-Hypothesis Search](https://awesomecua.github.io/resources/arxiv-2610-17792/) — 2026-10-13
  Introduces MHVF, a training-free grounding method that explores several candidate screen regions, verifies them in local views, and uses those checks to guide further search.
- [Learn from Move: the Next Step for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16720/) — 2026-10-12
  Introduces LatentGUIWorld to test learning interface semantics and dynamics through interaction, and studies finer movement actions with intermediate visual feedback and exploration demonstrations.
- [Seg2Click: Learning Pixel-Level Action Masks for GUI Visual Grounding](https://awesomecua.github.io/resources/arxiv-2610-16234/) — 2026-10-12
  Recasts GUI grounding as predicting a mask of valid click locations from bounding-box supervision, then derives a click point with a deterministic selection rule.
- [Visible but Not Avoided: State-Dependent Re-Proposal of Rejected Candidates in Catalog-Based LLM Optimization Loops](https://awesomecua.github.io/resources/arxiv-2610-15738/) — 2026-10-11
  Studies repeated rejected edits while optimizing a screenshot-only GUI agent, contrasting static probes with reached loop states and testing how rejection wording changes subsequent edit proposals.
- [ConClick: Element-Wise Contrastive Learning Improves GUI Grounding](https://awesomecua.github.io/resources/arxiv-2610-13268/) — 2026-10-09
  Analyzes recurring distractor clicks in GUI grounding and introduces ConClick, a contrastive training method built from target–distractor pairs. Its ReClick inference procedure revisits candidate regions and compares competing predictions.
- [CaptchaAgent: Verifiable Visual Reasoning for CAPTCHA Solving](https://awesomecua.github.io/resources/arxiv-2610-12866/) — 2026-10-09
  Presents CaptchaAgent, which builds an explicit visual representation of objects and relations, refines ambiguous regions, and checks counterfactual consistency before acting on interactive CAPTCHAs.
- [Adversarial Images Hijack Web Agents from Visual Grounding to Browser Execution](https://awesomecua.github.io/resources/arxiv-2610-09240/) — 2026-10-07
  Introduces WebMirage, a visual red-teaming framework that models webpage element competition and action post-processing to test whether manipulated grounding decisions lead to executed browser actions.
- [Decoupling What from Where: How Should a Small GUI Grounding Model Receive the Action Type?](https://awesomecua.github.io/resources/arxiv-2610-07444/) — 2026-10-05
  Compares ways to condition a small GUI grounding model on action type under matched training conditions on Android in the Wild. The study traces apparent gains to a coordinate-serialization choice and reports limited evidence that the gains persist with predicted action types.
- [Recurrent Latent Visual Search for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2610-05185/) — 2026-10-04
  Introduces ReLaViS, which performs recurrent visual search inside a grounding model by repeatedly querying screenshot tokens and feeding the resulting spatial evidence back into the model. Coarse-to-fine supervision is constructed from existing interface-element annotations.
- [DeskForge: Dense Supervision from Desktop Environments for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-02320/) — 2026-10-01
  Generates dense desktop supervision by varying real application scenes and combining screenshots, accessibility trees, and window geometry.
- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://awesomecua.github.io/resources/arxiv-2610-01215/) — 2026-10-01
  Introduces AutoGUIWorld, which combines task planning and image editing to synthesize action-grounded GUI trajectories without running the depicted software. It filters generated transitions and tests whether training on them improves agents operating real desktop and scientific applications.
- [SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-36939/) — 2026-09-29
  Introduces Spatial Credit Assignment, which uses click coordinates to refine group-relative reinforcement-learning updates for GUI grounding. It distinguishes failed clicks by spatial evidence while leaving the deployed action policy unchanged.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.github.io/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [Probe to Act: Elevating Browser-Use Agent via Active Visual Probing](https://awesomecua.github.io/resources/arxiv-2609-33646/) — 2026-09-27
  Introduces Probe to Act, which lets browser agents request visual evidence linking DOM handles and screen regions before committing an operation. It retains selected interaction evidence as memory and studies both prompted use and distillation into open models.
- [DashAct: A Progressive Diagnostic Benchmark for GUI Agents in Interactive Dashboard Analysis](https://awesomecua.github.io/resources/arxiv-2609-32385/) — 2026-09-26
  Diagnoses dashboard-agent failures by progressively restoring interaction context, next-action support, and visual target information within the same task.
- [ScreenHaystack: Finding Blind Zones in GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-32036/) — 2026-09-25
  Moves controlled target icons across high-resolution interfaces to diagnose spatial blind zones in grounding models and study targeted augmentation.
- [CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs](https://awesomecua.github.io/resources/arxiv-2609-31957/) — 2026-09-25
  Introduces CaptchaArena, a dataset of execution-verified interactive CAPTCHA solutions with screenshot–action trajectories, reasoning annotations, and pixel masks for irregular targets. The work trains a single policy across CAPTCHA types using supervised learning followed by verifier-reward reinforcement learning.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [How Many Pixels Is a Digit Worth? Place-Aware Coordinate Entropy for GUI Agent Confidence Estimation](https://awesomecua.github.io/resources/arxiv-2609-24277/) — 2026-09-21
  PACE weights coordinate-digit entropy by place value to estimate confidence in GUI clicks from one forward pass. It evaluates correctness ranking and selective accuracy against repeated-sampling alternatives on ScreenSpot-Pro and ScreenSpot-v2.
- [MintAct: A Unified Visual Agent for Digital Environments](https://awesomecua.github.io/resources/arxiv-2609-22083/) — 2026-09-18
  MintAct trains a visual-agent family for grounding, navigation and tool use across mobile, desktop and web environments. Its shared infrastructure supports trajectory collection and asynchronous online RL while controlling cross-domain sampling and off-policy drift.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.github.io/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [Learning from Reliable Negatives: Confidence-Anchored Test-Time Adaptation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-15307/) — 2026-09-14
  Confidence-Anchored Learning uses coordinate-token confidence to filter pseudo-supervision for GUI grounding. Its negative-only variant performs label-free test-time updates to reduce reliance on potentially incorrect positive examples.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [Are We There Yet? Assessing Computer-Use Agents for Blind Users' Accessible Interaction with Desktop Applications](https://awesomecua.github.io/resources/arxiv-2609-00524/) — 2026-09-01
  A diary study deploys the screen-reader-accessible OLLA computer-use prototype with blind users across desktop applications. Recorded commands and interaction traces support model comparisons and analysis of grounding, planning, constraint tracking and termination failures.
- [Iron: Intent-Aligned and Retrospective Dual Learning Framework for Enhancing Generalist Virtual Agents](https://awesomecua.github.io/resources/arxiv-2608-27866/) — 2026-08-28
  Introduces Iron, a GUI-agent training framework that aligns low-level actions with high-level intent using cycle-consistency rewards. It also repurposes failed trajectories through hindsight reconstruction and evaluates transfer to other digital tasks.
- [GUI-Primitives: Diagnosing Spatial Reasoning Failures in Vision-Language GUI Grounding](https://awesomecua.github.io/resources/arxiv-2608-21832/) — 2026-08-22
  Introduces GUI-Primitives, a paired-instruction benchmark that changes a spatial relation while holding the screenshot and anchor fixed. Its diagnostics separate failure to localize either candidate from failure to choose the candidate satisfying the relation.
- [Lexical Coupling in GUI Element Grounding: Sentence Embeddings Track Labels across Mobile and Web](https://awesomecua.github.io/resources/arxiv-2608-21794/) — 2026-08-22
  Studies whether text-embedding GUI grounding scores reflect semantic matching or recovery of visible labels. Same-screen ranking comparisons with lexical baselines expose differences between deployable fusion, oracle selection, and performance on label-poor targets.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.github.io/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching](https://awesomecua.github.io/resources/arxiv-2608-09654/) — 2026-08-10
  This framework separates frozen-model instruction expansion from a trained layout-aware matcher that localizes GUI elements without coordinate regression. Binary text/icon supervision supports the matcher, with evaluations on GUI grounding and Mind2Web element-selection tasks.
- [MissClick: Execution-Aware Adversarial Attacks on Coordinate Generation in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2608-03740/) — 2026-08-04
  MissClick designs white-box attacks around the numerical effect of coordinate digits on executable GUI clicks. Separate untargeted displacement and targeted place-weighted objectives are evaluated across desktop, web and mobile grounding settings.
- [GUI-Lens: Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs](https://awesomecua.github.io/resources/arxiv-2608-03270/) — 2026-08-04
  GUI-Lens uses OCR and detected interface components as coordinate references while a general-purpose VLM selects progressively enlarged screenshot crops. Instruction-conditioned checks constrain the crop and click proposals before mapping the final location back to the original screen.
- [MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation](https://awesomecua.github.io/resources/arxiv-2607-29320/) — 2026-07-31
  MAGA distills specialized GUI agents into one policy by allocating supervision according to structured-action correctness rather than treating all response tokens equally. A training-only teacher hint supports fusion across mobile, web and desktop settings without changing student inputs.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.github.io/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.github.io/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching](https://awesomecua.github.io/resources/arxiv-2606-31980/) — 2026-06-30
  DigitalCoach records expert–novice software coaching conversations aligned with screen and input events. Automated and interactive evaluations examine how model coaches differ from humans in explanation, error diagnosis and visual grounding when helping a learner operate software.
- [LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents](https://awesomecua.github.io/resources/arxiv-2606-30697/) — 2026-06-29
  LUMOS converts native accessibility metadata and browser UI structure into semantic interface blueprints with stable element identifiers and available actions. It combines live pointer-to-element grounding with an observe-act loop constrained to visible-UI primitives.
- [One Forward Beats Two: InnerZoom for Accurate and Efficient GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-30084/) — 2026-06-29
  InnerZoom preserves target-region cues from intermediate decoder layers and reinjects a compact evidence state during coordinate decoding. Its single-forward GUI grounder is compared with crop-and-rerun zooming and matched supervised/RL baselines for accuracy and inference cost.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.github.io/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [Uncertainty Quantification for Computer-Use Agents: A Benchmark across Vision-Language Models and GUI Grounding Datasets](https://awesomecua.github.io/resources/arxiv-2606-25760/) — 2026-06-24
  Argus benchmarks post-hoc uncertainty methods for single-step GUI grounding across open-weight and closed-source observation regimes. It tests calibration, rejection, error severity and conformal click regions, finding that uncertainty rankings transfer less reliably across model/interface regimes than across datasets for one model.
- [Trust the Right Teacher: Quality-Aware Self-Distillation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-18101/) — 2026-06-16
  Proposes quality-aware self-distillation for GUI coordinate generation under student-produced prefixes. A correctness-aware gate suppresses coordinate-token supervision that cannot reach the target box, while teacher-probability scaling adjusts the remaining signal strength.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [GUI-AC: Enhancing Continual Learning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-10522/) — 2026-06-09
  GUI-AC uses grounding certainty to adjust advantage weighting and policy-clipping bounds during continual reinforcement fine-tuning. Its mechanisms aim to suppress noisy confidence updates while retaining exploration under shifting GUI domains and resolutions.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.github.io/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.github.io/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [DocOS: Towards Proactive Document-Guided Actions in GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18048/) — 2026-05-18
  DocOS benchmarks agents that search online documentation and translate procedural instructions into GUI actions in interactive web environments. It separates failures to retrieve useful procedures from failures to ground retrieved instructions into executable actions.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.github.io/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.github.io/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [WinDeskGround: A Benchmark for Robust GUI Grounding in Complex Multi-Window Desktop Environments](https://awesomecua.github.io/resources/arxiv-2605-16402/) — 2026-05-13
  WinDeskGround synthesizes multi-window desktop layouts with controlled occlusion, density and semantic similarity to test GUI grounding robustness. Its instruction-target benchmark measures how localization changes when interfaces depart from simple single-layer scenes.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.github.io/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.github.io/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [X-OmniClaw Technical Report: A Unified Mobile Agent for Multimodal Understanding and Interaction](https://awesomecua.github.io/resources/arxiv-2605-05765/) — 2026-05-07
  Describes an Android agent architecture combining multimodal perception, working and personal memory, hybrid XML/visual grounding, and reusable skills captured from user interactions.
- [AutoFocus: Uncertainty-Aware Active Visual Search for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2605-02630/) — 2026-05-04
  Presents AutoFocus, a training-free grounding method that turns sampled coordinates and token uncertainty into spatial region proposals. Shape-aware crops and visual comparison select a target while retaining surrounding interface context.
- [A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction](https://awesomecua.github.io/resources/arxiv-2605-00551/) — 2026-05-01
  A11y-Compressor transforms linearized accessibility trees through modal detection, redundancy reduction and semantic structuring. Its OSWorld evaluation measures both observation-token reduction and task success.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.github.io/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [GoClick: Lightweight Element Grounding Model for Autonomous GUI Interaction](https://awesomecua.github.io/resources/arxiv-2604-23941/) — 2026-04-27
  Studies a compact encoder-decoder grounding model and progressive training-data refinement for resource-constrained GUI interaction.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [HalluClear: Diagnosing, Evaluating and Mitigating Hallucinations in GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-17284/) — 2026-04-19
  Introduces HalluClear with a GUI hallucination taxonomy, expert-calibrated evaluation workflow and structured-reasoning post-training scheme. It evaluates how these components affect hallucinations, grounding and action fidelity across GUI agents.
- [Beyond Chat and Clicks: GUI Agents for In-Situ Assistance via Live Interface Transformation](https://awesomecua.github.io/resources/arxiv-2604-14668/) — 2026-04-16
  DOMSteer translates help requests and live page context into reversible DOM changes such as control highlighting, contextual tooltips and layout reorganization. The work evaluates in-place GUI assistance with interface tests, use cases and a comparative user study.
- [GUI-Perturbed: Domain Randomization Reveals Systematic Brittleness in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2604-14262/) — 2026-04-15
  Introduces GUI-Perturbed, which varies screenshot appearance and instruction wording independently to diagnose grounding failures. Experiments on three related model architectures examine relational instructions, browser zoom and augmentation-based fine-tuning.
- [UI-Zoomer: Uncertainty-Driven Adaptive Zoom-In for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-14113/) — 2026-04-15
  Introduces UI-Zoomer, a training-free grounding method that uses candidate agreement and token confidence to decide when to crop and retry. Prediction variance determines a separate crop radius for each uncertain interface target.
- [PrecisionCUA: Iterative Visual Refinement for Pixel-Precise Cursor Grounding in Code Editors](https://awesomecua.github.io/resources/arxiv-2604-13019/) — 2026-04-14
  Studies iterative cursor grounding in dense code-editor interfaces, using visual feedback from earlier attempts to correct displacement. PrecisionCUA evaluates this closed-loop process across multiple model families on coding-interface tasks.
- [Are GUI Agents Focused Enough? Automated Distraction via Semantic-level UI Element Injection](https://awesomecua.github.io/resources/arxiv-2604-07831/) — 2026-04-09
  This study tests black-box GUI-grounding failures caused by strategically added, innocuous-looking UI elements. Its iterative overlay search is compared with random injection and repeated independent grounding trials to distinguish persistent misdirection from incidental clutter.
- [What's Missing in Screen-to-Action? Towards a UI-in-the-Loop Paradigm for Multimodal GUI Reasoning](https://awesomecua.github.io/resources/arxiv-2604-06995/) — 2026-04-08
  Introduces UILoop, which inserts explicit UI-element localization, function and usage reasoning between screen observation and action. UI Comprehension-Bench evaluates these element-level capabilities with three metrics.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.github.io/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [GUIDE: Resolving Domain Bias in GUI Agents through Real-Time Web Video Retrieval and Plug-and-Play Annotation](https://awesomecua.github.io/resources/arxiv-2603-26266/) — 2026-03-27
  GUIDE retrieves relevant software tutorials through subtitle-based video search, then infers planning and grounding knowledge from consecutive annotated keyframes. It inserts that knowledge into existing GUI-agent modules without parameter updates and evaluates the plug-in on OSWorld.
- [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2603-26211/) — 2026-03-27
  Adapts a discrete vision-language diffusion model to single-turn GUI action and bounding-box prediction, using a hybrid masking schedule for coordinate geometry. Experiments across web, desktop and mobile datasets examine grounding accuracy and inference tradeoffs.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [MedSPOT: A Workflow-Aware Sequential Grounding Benchmark for Clinical GUI](https://awesomecua.github.io/resources/arxiv-2603-19993/) — 2026-03-20
  Benchmarks sequential target localization in clinical software workflows, emphasizing how early mistakes affect subsequent interaction steps.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.github.io/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [Visual Confused Deputy: Exploiting and Defending Perception Failures in Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2603-14707/) — 2026-03-16
  Formalizes a visual confused-deputy failure in which a computer agent acts on a misperceived UI object. A separate guardrail checks both the visual target and the agent's action reasoning against deployment-specific knowledge before permitting execution.
- [Zoom to Essence: Trainless GUI Grounding by Inferring upon Interface Elements](https://awesomecua.github.io/resources/arxiv-2603-14448/) — 2026-03-15
  Presents ZoomUI, a training-free grounding method that expresses instructions as visual element descriptions and uses model attention to zoom progressively into relevant interface regions. Evaluation examines instruction-to-element localization on GUI benchmarks.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [WebChain: A Large-Scale Human-Annotated Dataset of Real-World Web Interaction Traces](https://awesomecua.github.io/resources/arxiv-2603-05295/) — 2026-03-05
  WebChain aligns human web-interaction trajectories with visual, structural and action data for agent training. It also introduces WebChainBench and a mid-training approach that separates spatial grounding from planning.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.github.io/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization](https://awesomecua.github.io/resources/arxiv-2602-13653/) — 2026-02-14
  This framework learns an agentic-Q model to estimate individual actions’ contributions to GUI task completion. It then optimizes a policy with step-level samples from its own trajectories, decoupling policy updates from environment interaction.
- [See, Plan, Snap: Evaluating Multimodal GUI Agents in Scratch](https://awesomecua.github.io/resources/arxiv-2602-10814/) — 2026-02-11
  ScratchWorld evaluates program construction through the Scratch interface using fine-grained drag-and-drop actions and a complementary semantic-API mode. Runtime tests assess the resulting programs, allowing analysis of the gap between program reasoning and GUI manipulation.
- [UI-Venus-1.5 Technical Report](https://awesomecua.github.io/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.github.io/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [POINTS-GUI-G: GUI-Grounding Journey](https://awesomecua.github.io/resources/arxiv-2602-06391/) — 2026-02-06
  Studies GUI-grounding development from a weakly grounded base model through data preparation, visual training, and verifiable rewards.
- [Trifuse: Enhancing Attention-Based GUI Grounding via Multimodal Fusion](https://awesomecua.github.io/resources/arxiv-2602-06351/) — 2026-02-06
  Trifuse combines attention-based localization with OCR text cues and icon captions to ground GUI instructions. Its fusion procedure favors cross-modal agreement and sharp location peaks, and is evaluated without task-specific fine-tuning.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.github.io/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [SafeGround: Know When to Trust GUI Grounding Models via Uncertainty Calibration](https://awesomecua.github.io/resources/arxiv-2602-02419/) — 2026-02-02
  Introduces SafeGround, which estimates GUI-grounding uncertainty from the spatial dispersion of sampled predictions and calibrates a decision threshold before testing. It studies risk-aware selection on ScreenSpot-Pro, with statistical control scoped to the threshold’s false-discovery rate.
- [ToolTok: Tool Tokenization for Efficient and Generalizable GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-02548/) — 2026-01-30
  ToolTok represents GUI operations with learned tool tokens and frames interaction as progressive tool selection. Semantic anchoring and an easy-to-hard curriculum teach tool meanings before visual pathfinding, with evaluation across grounding scenarios.
- [Continual GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.github.io/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [GUIGuard-Bench: Toward a General Evaluation for Privacy-Preserving GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-18842/) — 2026-01-26
  Introduces GUIGuard-Bench, which annotates private regions in GUI trajectories with categories, risk levels, and relevance to the user’s task. It evaluates privacy recognition and the effect of screenshot protection on offline planning and task utility.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [FocusUI: Efficient UI Grounding via Position-Preserving Visual Token Selection](https://awesomecua.github.io/resources/arxiv-2601-03928/) — 2026-01-07
  FocusUI selects instruction-relevant screenshot patches while preserving their positional structure for GUI grounding. Its PosPad scheme replaces runs of dropped tokens with positional markers and is evaluated under reduced token budgets.
- [ShowUI-$π$: Flow-based Generative Models as GUI Dexterous Hands](https://awesomecua.github.io/resources/arxiv-2512-24965/) — 2025-12-31
  Models discrete clicks and continuous drags with flow-based action generation, and introduces drag trajectories and the ScreenDrag benchmark.
- [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://awesomecua.github.io/resources/arxiv-2512-22009/) — 2025-12-26
  Introduces iSHIFT, which combines latent reasoning with perception-control tokens to adapt GUI inference. The agent switches between detailed regional grounding and faster use of global visual cues.
- [DAVE: A VLM Vision Encoder for Document Understanding and Web Agents](https://awesomecua.github.io/resources/arxiv-2512-17221/) — 2025-12-19
  DAVE trains a vision encoder for document images and web agents using self-supervised pretraining followed by supervised parsing and localization. It combines decoder-specific encoder merging with feature fusion and evaluates web localization and agent benchmarks alongside document tasks.
- [VenusBench-GD: A Comprehensive Multi-Platform GUI Benchmark for Diverse Grounding Tasks](https://awesomecua.github.io/resources/arxiv-2512-16501/) — 2025-12-18
  VenusBench-GD is a bilingual, cross-platform GUI grounding benchmark organized into basic and advanced tasks. Its annotation pipeline and six-subtask taxonomy support comparisons of general multimodal models and GUI-specialized models across different grounding demands.
- [MVP: Multiple View Prediction Improves GUI Grounding](https://awesomecua.github.io/resources/arxiv-2512-08529/) — 2025-12-09
  MVP addresses unstable GUI coordinates by predicting across several attention-guided cropped views. It clusters the resulting coordinates and selects the densest cluster centroid, evaluating this training-free inference method across grounding models.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [Chain-of-Ground: Improving GUI Grounding via Iterative Reasoning and Reference Feedback](https://awesomecua.github.io/resources/arxiv-2512-01979/) — 2025-12-01
  Chain-of-Ground uses iterative visual reasoning and reference feedback to refine GUI localization without additional training. It evaluates on ScreenSpot-Pro and introduces TPanel-UI to probe grounding on industrial control panels with visual distortions.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.github.io/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [AFRAgent : An Adaptive Feature Renormalization Based High Resolution Aware GUI agent](https://awesomecua.github.io/resources/arxiv-2512-00846/) — 2025-11-30
  Introduces AFRAgent, which uses adaptive feature renormalization to combine low-resolution visual embeddings with high-resolution details. The architecture is evaluated for smartphone GUI automation on Meta-GUI and AITW.
- [Prune4Web: DOM Tree Pruning Programming for Web Agent](https://awesomecua.github.io/resources/arxiv-2511-21398/) — 2025-11-26
  Introduces Prune4Web, where generated scoring programs filter DOM elements according to decomposed subtasks before grounding. An annotation pipeline and two-turn training procedure coordinate the planner, programmatic filter and grounder.
- [MEGA-GUI: Multi-stage Enhanced Grounding Agents for GUI Elements](https://awesomecua.github.io/resources/arxiv-2511-13087/) — 2025-11-17
  Introduces MEGA-GUI, which separates coarse region selection from fine-grained interface-element grounding. Bidirectional zooming and context-aware instruction rewriting coordinate specialized vision-language agents across visual scales.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [AUTO-Explorer: Automated Data Collection for GUI Agent](https://awesomecua.github.io/resources/arxiv-2511-06417/) — 2025-11-09
  Introduces Auto-Explorer, an automated GUI exploration method that records software states for training-data collection. UIXplore evaluates exploration coverage, and collected data is used to fine-tune and test GUI element grounding.
- [GUI-360$^\circ$: A Comprehensive Dataset and Benchmark for Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2511-04307/) — 2025-11-06
  Collects Windows application trajectories with screenshots and action traces for grounding, screen parsing, and action prediction.
- [GUI-AIMA: Aligning Intrinsic Multimodal Attention with a Context Anchor for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2511-00810/) — 2025-11-02
  Introduces GUI-AIMA, which supervises instruction-relevant attention over visual patches instead of directly training coordinate text generation. Patch-level grounding can be combined with an optional zoom stage and is evaluated across GUI localization benchmarks.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [UI-Ins: Enhancing GUI Grounding with Multi-Perspective Instruction-as-Reasoning](https://awesomecua.github.io/resources/arxiv-2510-20286/) — 2025-10-23
  Treats alternative instruction formulations as reasoning paths and trains GUI-grounding models to select and combine useful perspectives.
- [AndroidControl-Curated: Revealing the True Potential of GUI Agents through Benchmark Purification](https://awesomecua.github.io/resources/arxiv-2510-18488/) — 2025-10-21
  AndroidControl-Curated audits ambiguities and factual errors in AndroidControl and produces a refined evaluation dataset. The paper also studies post-training a small Magma-R1 model on a curated subset to examine the effect of data quality on GUI action assessment.
- [\textsc{GUI-Spotlight}: Adaptive Iterative Focus Refinement for Enhanced GUI Visual Grounding](https://awesomecua.github.io/resources/arxiv-2510-04039/) — 2025-10-05
  GUI-Spotlight trains a grounding model to reason over images and call tools that iteratively narrow its visual focus. The paper evaluates this refinement method on ScreenSpot-Pro after training on 18,500 samples.
- [Improving GUI Grounding with Explicit Position-to-Coordinate Mapping](https://awesomecua.github.io/resources/arxiv-2510-03230/) — 2025-10-03
  This work addresses GUI localization errors caused by mismatches between visual patch positions and output pixel coordinates. RULER tokens provide explicit coordinate references, while Interleaved MRoPE balances width and height encoding; evaluation uses the ScreenSpot benchmark family.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Generalist Scanner Meets Specialist Locator: A Synergistic Coarse-to-Fine Framework for Robust GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-24133/) — 2025-09-29
  GMS pairs a general vision-language scanner that proposes interface regions with a specialist locator that predicts coordinates within them. Hierarchical coarse-to-fine search coordinates the two components for GUI grounding on ScreenSpot-Pro.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.github.io/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.github.io/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [How Auxiliary Reasoning Unleashes GUI Grounding in VLMs](https://awesomecua.github.io/resources/arxiv-2509-11548/) — 2025-09-15
  Studies the gap between latent visual grounding and explicit coordinate output in general vision-language models. Three zero-shot methods add axes, grids, or labeled intersections to GUI screenshots so models can express spatial locations without fine-tuning.
- [SparkUI-Parser: Enhancing GUI Perception with Robust Grounding and Parsing](https://awesomecua.github.io/resources/arxiv-2509-04908/) — 2025-09-05
  Introduces SparkUI-Parser, which adds continuous coordinate decoding and a rejection mechanism for nonexistent targets to a multimodal model. It also presents ScreenParse for evaluating structural interface perception.
- [Learning Active Perception via Self-Evolving Preference Optimization for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2509-04243/) — 2025-09-04
  LASER builds preference data for multi-step GUI perception by combining Monte Carlo quality estimates with region-overlap evaluation. Its self-evolving training encourages relevant region selection and adapts the amount of reasoning before predicting screen coordinates.
- [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.github.io/resources/arxiv-2509-02444/) — 2025-09-02
  Describes a mobile-agent stack combining region-based coordinate correction, hierarchical task planning, multi-agent voting, and reuse of successful interaction traces.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.github.io/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.github.io/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [V2P: Visual Attention Calibration for GUI Grounding via Background Suppression and Center Peaking](https://awesomecua.github.io/resources/arxiv-2508-13634/) — 2025-08-19
  V2P trains GUI grounding by suppressing attention to background regions and emphasizing the center of the target element. It represents target importance with size-dependent Gaussian heatmaps and evaluates the contribution of each component on ScreenSpot-v2 and ScreenSpot-Pro.
- [UI-Venus Technical Report: Building High-performance UI Agents with RFT](https://awesomecua.github.io/resources/arxiv-2508-10833/) — 2025-08-14
  Studies screenshot-based GUI grounding and navigation using curated interaction data, reward design, and reinforcement fine-tuning.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.github.io/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [InfiGUI-G1: Advancing GUI Grounding with Adaptive Exploration Policy Optimization](https://awesomecua.github.io/resources/arxiv-2508-05731/) — 2025-08-07
  Uses multiple candidate answers and adaptive exploration rewards to improve spatial and semantic alignment in GUI grounding.
- [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.github.io/resources/arxiv-2508-05615/) — 2025-08-07
  GUI-RC aggregates multiple grounding predictions into spatial voting grids to choose a consensus region. GUI-RCPO then turns agreement with that region into a reward for test-time policy updates on unlabeled GUI screenshots.
- [GuirlVG: Incentivize GUI Visual Grounding via Empirical Exploration on Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-04389/) — 2025-08-06
  Introduces GuirlVG, an empirical study of reinforcement fine-tuning for GUI visual grounding. It analyzes training components and adds an adaptive KL-based mechanism to limit reward over-optimization.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.github.io/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [Phi-Ground Tech Report: Advancing Perception in GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-23779/) — 2025-07-31
  Reports a GUI-grounding model family and empirical design choices covering source data, perception training, and coordinate prediction.
- [UI-AGILE: Advancing GUI Agents with Effective Reinforcement Learning and Precise Inference-Time Grounding](https://awesomecua.github.io/resources/arxiv-2507-22025/) — 2025-07-29
  Combines grounding-oriented reward and sampling improvements with inference-time image decomposition and target selection.
- [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.github.io/resources/arxiv-2507-19478/) — 2025-07-25
  MMBench-GUI evaluates interface understanding, element grounding, task automation, and collaboration across six named desktop, mobile, and web platforms. It introduces the Efficiency-Quality Area metric for examining execution efficiency alongside task quality in online GUI automation.
- [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-15846/) — 2025-07-21
  GUI-G2 replaces binary grounding rewards with Gaussian point rewards and spatial-coverage rewards. An adaptive variance tied to element dimensions supplies continuous training feedback for targets of different sizes, evaluated on the ScreenSpot benchmark family.
- [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://awesomecua.github.io/resources/arxiv-2507-10610/) — 2025-07-13
  Introduces LaSM, a training-free defense that selectively scales attention and MLP components to improve alignment with task-relevant screen regions. It evaluates the approach against pop-up-based GUI injection attacks.
- [VisualTrap: A Stealthy Backdoor Attack on GUI Agents via Visual Grounding Manipulation](https://awesomecua.github.io/resources/arxiv-2507-06899/) — 2025-07-09
  Studies backdoors that redirect GUI visual grounding even when the task plan is correct. VisualTrap evaluates whether poisoned grounding training transfers to downstream tasks and across web, mobile, and desktop interface settings.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.github.io/resources/arxiv-2507-05791/) — 2025-07-08
  GTA1 samples multiple action proposals at each GUI step and uses a judge to select among them. A separate grounding model is trained with reinforcement learning to map selected proposals to visual targets, linking planning-time search with click localization.
- [R-VLM: Region-Aware Vision Language Model for Precise GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-05673/) — 2025-07-08
  R-VLM localizes GUI elements through zoomed-in region proposals and an intersection-over-union-aware training objective. It evaluates the grounding model on ScreenSpot and AgentStudio and studies its effect on navigation in AITW and Mind2Web.
- [ZonUI-3B: A Lightweight Vision-Language Model for Cross-Resolution GUI Grounding](https://awesomecua.github.io/resources/arxiv-2506-23491/) — 2025-06-30
  ZonUI-3B trains GUI grounding with a curated 24,000-example collection of mobile, desktop, and web screenshots. Its two-stage procedure first learns across platforms and then specializes on high-resolution images, with ablations on data diversity and redundant examples.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [Understanding GUI Agent Localization Biases through Logit Sharpness](https://awesomecua.github.io/resources/arxiv-2506-15425/) — 2025-06-18
  Introduces a finer-grained taxonomy of GUI localization errors and a logit-based Peak Sharpness Score for analyzing coordinate-prediction uncertainty. A context-aware cropping method refines the visual input without retraining the grounding model.
- [DiMo-GUI: Advancing Test-time Scaling in GUI Grounding via Modality-Aware Visual Reasoning](https://awesomecua.github.io/resources/arxiv-2507-00008/) — 2025-06-12
  Separates textual and iconic UI elements and iteratively focuses visual regions to refine grounding without additional model training.
- [LPO: Towards Accurate GUI Agent Interaction via Location Preference Optimization](https://awesomecua.github.io/resources/arxiv-2506-09373/) — 2025-06-11
  Location Preference Optimization uses an information-entropy signal to select interaction regions and a distance-based reward to assess click locations. It trains GUI localization through preference optimization and evaluates both offline grounding and online interaction.
- [UITron-Speech: Towards Automated GUI Agents Based on Speech Instructions](https://awesomecua.github.io/resources/arxiv-2506-11127/) — 2025-06-10
  Introduces UITron-Speech, which predicts GUI actions from spoken instructions and screenshots. It combines synthetic speech data and mixed-modality training with a training-free grounding refinement step.
- [GUI-Actor: Coordinate-Free Visual Grounding for GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-03143/) — 2025-06-03
  Uses an attention-based action head and a verifier to select relevant screen regions without generating coordinates as text.
- [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.github.io/resources/arxiv-2506-02865/) — 2025-06-03
  Describes Surfer-H, a web agent paired with the Holo1 vision-language model family trained on web content, synthetic examples, and agent-generated data. The work introduces WebClick for web-interface localization and evaluates browser task execution on WebVoyager.
- [XBOUND: Exploring Capability Boundaries of Device-Control Agents at the State Level](https://awesomecua.github.io/resources/arxiv-2505-21279/) — 2025-05-27
  XBOUND evaluates GUI agents at the level of a screen state, considering multiple instructions and possible target actions within it. The study separates action matching from instruction unification and compares effects of grounding and trajectory data.
- [GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-15810/) — 2025-05-21
  Analyzes reasoning templates, reward design, and policy updates in GUI grounding, then proposes targeted adjustments to the training process.
- [ReGUIDE: Data Efficient GUI Grounding via Spatial Reasoning and Search](https://awesomecua.github.io/resources/arxiv-2505-15259/) — 2025-05-21
  Combines self-generated localization reasoning, spatial consistency checks, and inference-time search to improve data-efficient web grounding.
- [Scaling Computer-Use Grounding via User Interface Decomposition and Synthesis](https://awesomecua.github.io/resources/arxiv-2505-13227/) — 2025-05-19
  Introduces OSWorld-G grounding evaluation and the Jedi synthesis pipeline for examples spanning layout reasoning and fine-grained interaction.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [Enhancing Visual Grounding for GUI Agents via Self-Evolutionary Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-12370/) — 2025-05-18
  Proposes GUI grounding training that combines curated seed examples, continuous location-dependent policy feedback, and iterative refinement guided by attention maps. The study evaluates the resulting reinforcement-learning procedure on three grounding benchmarks, including ScreenSpot-Pro.
- [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.github.io/resources/arxiv-2505-00684/) — 2025-05-01
  RegionFocus adds visual test-time scaling by zooming into selected screenshot regions and maintaining an image-based map of landmarks and actions. It evaluates this grounding procedure with UI-TARS and Qwen2.5-VL on ScreenSpot-Pro and WebVoyager.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.github.io/resources/arxiv-2504-16419/) — 2025-04-23
  Introduces PixelWeb, a webpage GUI dataset with element images, contours, and pixel masks. Its annotation pipeline combines bitmap channel information with DOM-based visibility and stacking analysis to address occlusion and overlapping elements.
- [Guiding VLM Agents with Process Rewards at Inference Time for GUI Navigation](https://awesomecua.github.io/resources/arxiv-2504-16073/) — 2025-04-22
  Guides visual GUI agents at inference time with a process-reward model that evaluates intermediate actions. It combines stepwise guidance with trajectory reflection and retry mechanisms in static and interactive navigation tasks.
- [TongUI: Internet-Scale Trajectories from Multimodal Web Tutorials for Generalized GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-12679/) — 2025-04-17
  TongUI converts multimodal online tutorials, including videos and articles, into GUI-agent trajectories. Its GUI-Net dataset contains 143,000 trajectories spanning five operating systems and more than 200 applications, and supports fine-tuning for grounding and navigation.
- [UI-E2I-Synth: Advancing GUI Grounding with Large-Scale Instruction Synthesis](https://awesomecua.github.io/resources/arxiv-2504-11257/) — 2025-04-15
  UI-E2I-Synth uses GPT-4o to synthesize GUI grounding instructions with varied complexity, addressing small elements, imbalanced element types, and implicit requests. The accompanying UI-I2E-Bench evaluates instruction-to-element localization across these annotation challenges.
- [GUI-R1 : A Generalist R1-Style Vision-Language Action Model For GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-10458/) — 2025-04-14
  Applies reinforcement fine-tuning with unified action rules and curated cross-platform examples to vision-language GUI agents.
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://awesomecua.github.io/resources/arxiv-2504-10445/) — 2025-04-14
  RealWebAssist evaluates web assistance through sequences of instructions collected from real users across multiple websites. It tests intent interpretation, user-specific routines, long-term context, and visual grounding when instructions are ambiguous or evolve during interaction.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.github.io/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.github.io/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [ScreenSpot-Pro: GUI Grounding for Professional High-Resolution Computer Use](https://awesomecua.github.io/resources/arxiv-2504-07981/) — 2025-04-04
  Evaluates GUI target localization in high-resolution professional software and studies cascaded visual search to narrow the target region.
- [Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2504-00906/) — 2025-04-01
  Combines generalist and specialist models with hierarchical planning and multiple grounding methods for computer-use tasks.
- [UI-R1: Enhancing Efficient Action Prediction of GUI Agents by Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2503-21620/) — 2025-03-27
  Uses rule-based action rewards and policy optimization to train GUI action prediction from a compact set of mobile tasks.
- [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.github.io/resources/arxiv-2503-15661/) — 2025-03-19
  Provides annotated desktop demonstrations for evaluating element grounding, layout grounding, and action prediction.
- [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.github.io/resources/arxiv-2503-14021/) — 2025-03-18
  Uses specialized graphical, textual, and spatial perception components with a data-collection pipeline to improve GUI understanding.
- [DeskVision: Large Scale Desktop Region Captioning for Advanced GUI Agents](https://awesomecua.github.io/resources/arxiv-2503-11170/) — 2025-03-14
  Introduces AutoCaptioner, DeskVision, and GUIExplorer for generating desktop region descriptions and training interface-understanding models.
- [Think Twice, Click Once: Enhancing GUI Grounding via Fast and Slow Systems](https://awesomecua.github.io/resources/arxiv-2503-06470/) — 2025-03-09
  Combines rapid target prediction with deliberate interface analysis, adaptively selecting the grounding process according to task complexity.
- [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.github.io/resources/arxiv-2503-03196/) — 2025-03-05
  Introduces SpiritSight and GUI-Lasagne data, combining multilevel GUI annotations with visual block parsing for high-resolution interface navigation.
- [Smoothing Grounding and Reasoning for MLLM-Powered GUI Agents with Query-Oriented Pivot Tasks](https://awesomecua.github.io/resources/arxiv-2503-00401/) — 2025-03-01
  Uses inference of possible user queries from screenshots and target coordinates as a training bridge between GUI grounding and action reasoning.
- [TRISHUL: Towards Region Identification and Screen Hierarchy Understanding for Large VLM based GUI Agents](https://awesomecua.github.io/resources/arxiv-2502-08226/) — 2025-02-12
  Combines hierarchical screen parsing with spatially enriched element descriptions to support both locating GUI targets and describing indicated elements.
- [AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs](https://awesomecua.github.io/resources/arxiv-2502-01977/) — 2025-02-04
  Infers element functionality from UI changes before and after interaction to produce verified annotations for grounding-model training.
- [WinClick: GUI Grounding with Multimodal Large Language Models](https://awesomecua.github.io/resources/arxiv-2503-04730/) — 2025-01-27
  Introduces a screenshot-based Windows GUI agent and the WinSpot benchmark for evaluating localization of actionable interface regions.
- [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://awesomecua.github.io/resources/arxiv-2501-13896/) — 2025-01-23
  Collects environment-specific interaction data through autonomous exploration to adapt grounding models to previously unseen GUIs.
- [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://awesomecua.github.io/resources/arxiv-2501-12326/) — 2025-01-21
  Studies a screenshot-driven native GUI model with unified actions, deliberate reasoning, and iterative training on interaction traces.
- [InfiGUIAgent: A Multimodal Generalist GUI Agent with Native Reasoning and Reflection](https://awesomecua.github.io/resources/arxiv-2501-04575/) — 2025-01-08
  Uses staged supervised training to combine GUI understanding and grounding with hierarchical reasoning and expectation-based reflection.
- [Aria-UI: Visual Grounding for GUI Instructions](https://awesomecua.github.io/resources/arxiv-2412-16256/) — 2024-12-20
  Introduces a vision-based grounding model trained with diverse synthetic instructions and action histories for context-sensitive GUI targeting.
- [Attention-driven GUI Grounding: Leveraging Pretrained Multimodal Large Language Models without Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2412-10840/) — 2024-12-14
  Locates GUI targets by identifying and aggregating attention maps in pretrained multimodal models without task-specific fine-tuning.
- [WEPO: Web Element Preference Optimization for LLM-based Web Navigation](https://awesomecua.github.io/resources/arxiv-2412-10742/) — 2024-12-14
  Uses web-element preference optimization with sampled negative HTML elements to align high-level user intent with navigation actions.
- [Iris: Breaking GUI Complexity with Adaptive Focus and Self-Refining](https://awesomecua.github.io/resources/arxiv-2412-10342/) — 2024-12-13
  Combines information-sensitive image cropping with a learning loop between element description and grounding for complex interface understanding.
- [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://awesomecua.github.io/resources/arxiv-2412-04454/) — 2024-12-05
  Uses screenshots, a unified action space, and staged grounding and reasoning training for cross-platform GUI interaction.
- [Ponder & Press: Advancing Visual GUI Agent towards General Computer Control](https://awesomecua.github.io/resources/arxiv-2412-01268/) — 2024-12-02
  Separates interpretation of user instructions from precise GUI localization using general-purpose and specialized visual-language components.
- [ShowUI: One Vision-Language-Action Model for GUI Visual Agent](https://awesomecua.github.io/resources/arxiv-2411-17465/) — 2024-11-26
  Combines visual token selection, interleaved visual-action history, and curated instruction data in a compact GUI action model.
- [Improved GUI Grounding via Iterative Narrowing](https://awesomecua.github.io/resources/arxiv-2411-13591/) — 2024-11-18
  Uses iterative visual narrowing to improve localization of requested GUI elements with general or specially trained vision-language models.
- [OS-ATLAS: A Foundation Action Model for Generalist GUI Agents](https://awesomecua.github.io/resources/arxiv-2410-23218/) — 2024-10-30
  Combines cross-platform GUI grounding data synthesis with action-model training to study generalization to unfamiliar interfaces.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.github.io/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [EDGE: Enhanced Grounded GUI Understanding with Enriched Multi-Granularity Synthetic Data](https://awesomecua.github.io/resources/arxiv-2410-19461/) — 2024-10-25
  Synthesizes GUI training examples at multiple levels of detail from webpages and studies transfer of learned understanding to other interface environments.
- [Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://awesomecua.github.io/resources/arxiv-2410-18967/) — 2024-10-24
  Extends Ferret-UI across device platforms with adaptive visual scaling and synthetic data for referring, grounding, and user-centered UI tasks.
- [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://awesomecua.github.io/resources/arxiv-2410-13824/) — 2024-10-17
  Builds MultiUI by generating instructions from webpage accessibility trees and pairing them with screenshots for multimodal training. Evaluation examines web-interface understanding, including VisualWebBench and Mind2Web, and transfer to other text-rich visual tasks.
- [ClickAgent: Enhancing UI Location Capabilities of Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2410-11872/) — 2024-10-09
  Separates multimodal reasoning and action planning from a dedicated UI localization model, with evaluation on Android devices.
- [TinyClick: Single-Turn Agent for Empowering GUI Automation](https://awesomecua.github.io/resources/arxiv-2410-11871/) — 2024-10-09
  Adapts a compact Florence-2 model to map user instructions to screen coordinates using multitask training and augmented data.
- [Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://awesomecua.github.io/resources/arxiv-2410-05243/) — 2024-10-07
  Introduces UGround, a visual target-localization model trained with large-scale synthetic references to elements in GUI screenshots.
- [The Impact of Element Ordering on LM Agent Performance](https://awesomecua.github.io/resources/arxiv-2409-12089/) — 2024-09-18
  Studies how the ordering of UI elements in an agent observation affects web and desktop performance. A pixel-based element detector and dimensionality-reduction ordering are evaluated on OmniACT when document hierarchy is unavailable.
- [Grounded GUI Understanding for Vision-Based Spatial Intelligent Agent: Exemplified by Extended Reality Apps](https://awesomecua.github.io/resources/arxiv-2409-10811/) — 2024-09-17
  Orienter detects interactable GUI elements in XR applications by interpreting scene context and revisiting candidate elements through a validation and reflection loop. It addresses open-vocabulary element types and context-dependent interactability.
- [From Grounding to Planning: Benchmarking Bottlenecks in Web Agents](https://awesomecua.github.io/resources/arxiv-2409-01927/) — 2024-09-03
  Separates web-agent planning and grounding evaluations on Mind2Web to analyze which components limit task performance.
- [OmniParser for Pure Vision Based GUI Agent](https://awesomecua.github.io/resources/arxiv-2408-00203/) — 2024-08-01
  Parses screenshots into interactable regions and semantic element descriptions to support visually grounded agent actions.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [Read Anywhere Pointed: Layout-aware GUI Screen Reading with Tree-of-Lens Grounding](https://awesomecua.github.io/resources/arxiv-2406-19263/) — 2024-06-27
  Introduces Screen Point-and-Read and a hierarchical layout approach that interprets screen regions indicated by a user-selected point.
- [VGA: Vision GUI Assistant -- Minimizing Hallucinations through Image-Centric Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2406-14056/) — 2024-06-20
  Uses image-dependent question-answer data and staged fine-tuning to improve GUI comprehension and reduce unsupported visual answers.
- [GUICourse: From General Vision Language Models to Versatile GUI Agents](https://awesomecua.github.io/resources/arxiv-2406-11317/) — 2024-06-17
  Introduces GUIEnv, GUIAct, and GUIChat datasets to develop OCR, grounding, component knowledge, and interaction abilities in visual-language models.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.github.io/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [Visual Grounding Methods for Efficient Interaction with Desktop Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2407-01558/) — 2024-05-05
  Compares modular OCR-based and end-to-end methods for locating desktop GUI targets from natural-language instructions.
- [GUIDE: Graphical User Interface Data for Execution](https://awesomecua.github.io/resources/arxiv-2404-16048/) — 2024-04-09
  Introduces annotated website task trajectories with screenshots, prior actions, reasoning, and grounded next actions for process automation.
- [VisualWebBench: How Far Have Multimodal LLMs Evolved in Web Page Understanding and Grounding?](https://awesomecua.github.io/resources/arxiv-2404-05955/) — 2024-04-09
  Separately evaluates web-page reading, understanding, and element grounding across tasks drawn from real websites.
- [Ferret-UI: Grounded Mobile UI Understanding with Multimodal LLMs](https://awesomecua.github.io/resources/arxiv-2404-05719/) — 2024-04-08
  Adapts multimodal modeling to mobile interfaces through detailed screen crops, region annotations, and UI reasoning tasks.
- [ReALM: Reference Resolution As Language Modeling](https://awesomecua.github.io/resources/arxiv-2403-20329/) — 2024-03-29
  Frames conversational and on-screen reference resolution as language modeling, allowing textual representations of screen entities to support user-reference interpretation. Evaluation separately examines on-screen references against an existing resolver and language-model baselines.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.github.io/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [UI Semantic Group Detection: Grouping UI Elements with Similar Semantics in Mobile Graphical User Interface](https://awesomecua.github.io/resources/arxiv-2403-04984/) — 2024-03-08
  UISCGD detects semantic groups of adjacent text and non-text UI elements. It learns from Android and iOS screenshots to support interface retrieval, UI-to-code structure and screen-reader accessibility.
- [OmniACT: A Dataset and Benchmark for Enabling Multimodal Generalist Autonomous Agents for Desktop and Web](https://awesomecua.github.io/resources/arxiv-2402-17553/) — 2024-02-27
  Introduces a dataset and benchmark for generating executable task scripts from screenshots and visually grounded desktop or web instructions.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.github.io/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [Dual-View Visual Contextualization for Web Navigation](https://awesomecua.github.io/resources/arxiv-2402-04476/) — 2024-02-06
  Uses screenshot geometry and visual content to enrich HTML element representations for web navigation. Nearby elements contribute textual and visual context, with evaluation on cross-task, cross-website, and cross-domain Mind2Web splits.
- [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://awesomecua.github.io/resources/arxiv-2401-13649/) — 2024-01-24
  Introduces visually grounded website tasks for evaluating multimodal agents that must interpret both images and text.
- [SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents](https://awesomecua.github.io/resources/arxiv-2401-10935/) — 2024-01-17
  Trains a screenshot-driven GUI agent with grounding pretraining and introduces ScreenSpot for evaluating interface target localization.
- [GPT-4V(ision) is a Generalist Web Agent, if Grounded](https://awesomecua.github.io/resources/arxiv-2401-01614/) — 2024-01-03
  Introduces SeeAct and live-website evaluation, examining how visual planning and element grounding affect web-agent task completion.
- [CogAgent: A Visual Language Model for GUI Agents](https://awesomecua.github.io/resources/arxiv-2312-08914/) — 2023-12-14
  Introduces a visual-language model with low- and high-resolution image encoders for screenshot understanding and GUI navigation.
- [GPT-4V in Wonderland: Large Multimodal Models for Zero-Shot Smartphone GUI Navigation](https://awesomecua.github.io/resources/arxiv-2311-07562/) — 2023-11-13
  Studies MM-Navigator, a multimodal agent that interprets smartphone screenshots and predicts localized actions without task-specific training.
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V](https://awesomecua.github.io/resources/arxiv-2310-11441/) — 2023-10-17
  Overlays labeled image regions to help multimodal models refer to and reason about visual targets; a general visual-prompting method relevant to GUI grounding.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.github.io/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [Reinforced UI Instruction Grounding: Towards a Generic UI Task Automation API](https://awesomecua.github.io/resources/arxiv-2310-04716/) — 2023-10-07
  Trains a screenshot-based instruction-grounding model to predict target coordinates, using reinforcement learning to improve spatial decoding.
- [From Pixels to UI Actions: Learning to Follow Instructions via Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2306-00245/) — 2023-05-31
  Studies instruction-following agents that observe screenshots and act through a generic mouse-and-keyboard action space, evaluating pixel-based pretraining for GUI tasks on MiniWoB++.
- [Lexi: Self-Supervised Learning of the UI Language](https://awesomecua.github.io/resources/arxiv-2301-10165/) — 2023-01-23
  Introduces Lexi and UICaption to learn UI image-text representations from descriptions of interface functionality. Evaluation covers UI action entailment, instruction-based retrieval, referring-expression grounding, and UI entity recognition.
- [UGIF: UI Grounded Instruction Following](https://awesomecua.github.io/resources/arxiv-2211-07615/) — 2022-11-14
  Introduces multilingual smartphone instruction-following data and a pipeline that retrieves help instructions and maps them to UI actions.
- [Towards Better Semantic Understanding of Mobile Interfaces](https://awesomecua.github.io/resources/arxiv-2210-02663/) — 2022-10-06
  Augments RICO screens and view hierarchies with human labels for icon shape and meaning and for links between UI elements and text labels. It compares image-only and multimodal models on semantic understanding of previously unseen apps.
- [MUG: Interactive Multimodal Grounding on User Interfaces](https://awesomecua.github.io/resources/arxiv-2209-15099/) — 2022-09-29
  Studies iterative UI grounding in which users refine or correct an agent's interpretation over multiple conversational turns.
- [Spotlight: Mobile UI Understanding using Vision-Language Models with a Focus](https://awesomecua.github.io/resources/arxiv-2209-14927/) — 2022-09-29
  Introduces Spotlight, a vision-language model conditioned on a UI screenshot and a selected region of interest. It evaluates screenshot-based mobile UI understanding and explores multitask learning and few-shot prompting.
- [VUT: Versatile UI Transformer for Multi-Modal Multi-Task User Interface Modeling](https://awesomecua.github.io/resources/arxiv-2112-05692/) — 2021-12-10
  The Versatile UI Transformer jointly models interface screenshots, structure, and language for five UI tasks. Its encoder supports element detection when structural metadata is absent, while an autoregressive component handles UI question answering and command grounding.
- [Understanding Mobile GUI: from Pixel-Words to Screen-Sentences](https://awesomecua.github.io/resources/arxiv-2105-11941/) — 2021-05-25
  Models mobile screens as atomic text and graphic components whose relationships are learned by a Screen Transformer. The work introduces RICO-PW annotations and evaluates metadata-free screen understanding on relation, clickability, retrieval, and app-classification tasks.
- [Grounding Open-Domain Instructions to Automate Web Support Tasks](https://awesomecua.github.io/resources/arxiv-2103-16057/) — 2021-03-30
  Introduces RUSS, which translates support instructions into a domain-specific language and grounds them in actionable web elements.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.github.io/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Widget Captioning: Generating Natural Language Description for Mobile User Interface Elements](https://awesomecua.github.io/resources/arxiv-2010-04295/) — 2020-10-08
  Introduces crowdsourced descriptions of mobile UI elements and studies multimodal models that generate useful widget captions.
- [Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://awesomecua.github.io/resources/arxiv-2008-05132/) — 2020-08-12
  Compares seven traditional and learned GUI element detectors on more than 50,000 interface images. The analysis motivates a coarse-to-fine non-text detector combined with a learned text detector to address GUI-specific localization requirements.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.github.io/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.
- [Mapping Natural Language Commands to Web Elements](https://awesomecua.github.io/resources/arxiv-1808-09132/) — 2018-08-28
  Defines language grounding on webpages as choosing the UI element targeted by a natural-language command. A collection of more than 50,000 commands and three baseline models study functional references, relationships between elements, and visual position cues.
- [APPINITE: A Multi-Modal Interface for Specifying Data Descriptions in Programming by Demonstration Using Natural Language Instructions](https://awesomecua.github.io/resources/url-ba2c664c1b3c6f1b172f/) — 2018
  Introduces APPINITE, a conversational interface for specifying the intended targets of demonstrated Android actions. It constructs semantic UI representations and uses an on-screen overlay to preview and refine executable data descriptions.
- [GUI Testing Using Computer Vision](https://awesomecua.github.io/resources/url-6262c757080f8838e62c/) — 2010-04
  Presents visual GUI test scripts that use images to specify actions and expected screen feedback. Recording both input events and screenshots can generate tests from demonstrations, supporting unit, regression, and test-driven workflows.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.github.io/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.

## Benchmarks

- [MMBench-GUI](https://awesomecua.github.io/resources/github-open-compass-mmbench-gui/) — Date not recorded
  Four-level GUI-agent benchmark across six platforms, from content understanding and element grounding to task automation and collaboration, scored with an efficiency-quality area metric.
- [OSWorld-G](https://awesomecua.github.io/resources/github-xlang-ai-osworld-g/) — Date not recorded
  Computer-use grounding benchmark with original and refined instructions, released with the Jedi synthetic data pipeline, a 4-million-example Jedi dataset and Jedi-3B and Jedi-7B models.
- [Precision CUA Bench](https://awesomecua.github.io/resources/github-microsoft-precision-cua-bench/) — Date not recorded
  Evaluation resources for pixel-precise cursor grounding in code editors.
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
- [Web Context Bench (Python)](https://awesomecua.github.io/resources/github-charlypoly-web-context-bench-python/) — Date not recorded
  Local-page benchmark comparing six browser representations on token use, factual reading and target-element selection, with deterministic answer scoring.
- [WebClick](https://awesomecua.github.io/resources/url-5e2bd1b3398974b79c9c/) — Date not recorded
  A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.

## Datasets

- [Aguvis stage 1 grounding data](https://awesomecua.github.io/resources/url-06dd5ac7917c45d48509/) — Date not recorded
  The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.
- [Aria-UI Context-aware Data](https://awesomecua.github.io/resources/url-07b65dc937756ddff4a1/) — Date not recorded
  Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.
- [Aria-UI Data](https://awesomecua.github.io/resources/url-f8566bd0394d36ed4f8e/) — Date not recorded
  GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.
- [AutoGUI v1 training data](https://awesomecua.github.io/resources/url-79287058342289aa5d45/) — Date not recorded
  Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.
- [DragOn](https://awesomecua.github.io/resources/url-b854ff53e497da3a5ad8/) — Date not recorded
  Drag-grounding training and evaluation data pairing each screenshot instruction with start and end boxes, across text highlighting, spreadsheet cells, slide resizing and sliders.
- [GroundGUI RL Dataset](https://awesomecua.github.io/resources/url-4e71dc456c4112eed727/) — Date not recorded
  Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.
- [Grounding-Anything-GUI](https://awesomecua.github.io/resources/url-d1830de02226155ee16d/) — Date not recorded
  The public training archive linked by the Phi-Ground project for its Phi-Ground-Any model.
- [GUI-360](https://awesomecua.github.io/resources/url-0b590d03a3d5103a79e4/) — Date not recorded
  Desktop GUI trajectory data supporting multiple interface understanding tasks.
- [GUI-Actor data](https://awesomecua.github.io/resources/url-66096ad4057a3d3726f5/) — Date not recorded
  A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.
- [GUI-Drag](https://awesomecua.github.io/resources/url-aa28e1329a52e341d285/) — Date not recorded
  Data for learning text-dragging interactions in graphical interfaces.
- [GUI-Lasagne L1](https://awesomecua.github.io/resources/url-0c5659ca9e59d942aea3/) — Date not recorded
  The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.
- [GUI-Net-1M](https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUI-R1 data bundle](https://awesomecua.github.io/resources/url-df680385f18b01a825be/) — Date not recorded
  Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.
- [GUIAct](https://awesomecua.github.io/resources/url-6cd150ec23361b4d2e84/) — Date not recorded
  Web and Android GUI action-instruction data, with single-step, multi-step and smartphone partitions.
- [GUIChat](https://awesomecua.github.io/resources/url-edf38d43800be8c955ae/) — Date not recorded
  Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.
- [GUIEnv-local](https://awesomecua.github.io/resources/url-0af07e00658a430cee6a/) — Date not recorded
  The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.
- [Jedi](https://awesomecua.github.io/resources/url-e062cf1445eaee0f3ade/) — Date not recorded
  Synthetic GUI grounding data associated with UI decomposition research and the OSWorld-G benchmark.
- [OS-Atlas Data](https://awesomecua.github.io/resources/url-0fdeb1cf5f49f84820e6/) — Date not recorded
  GUI grounding pre-training data for OS-Atlas in desktop (Linux, macOS, Windows), mobile and web domains, with element boxes stored as relative left, top, right and bottom ratios.
- [ScreenDrag](https://awesomecua.github.io/resources/url-fe43af1801032be708cc/) — Date not recorded
  GUI dragging data with screen observations, prior state, and continuous pointer actions, provided as trajectory files and Parquet representations.
- [ScreenRef](https://awesomecua.github.io/resources/url-56bda04bd8d3a438deb3/) — Date not recorded
  GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.
- [ScreenRef Annotations](https://awesomecua.github.io/resources/url-c1db2ba79e6d6a3db2b9/) — Date not recorded
  Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.
- [ScreenSpot-Pro data](https://awesomecua.github.io/resources/url-c79e152e6f7af1a9efed/) — Date not recorded
  High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.
- [ShowUI-web](https://awesomecua.github.io/resources/url-8933977bb0a57940ed23/) — Date not recorded
  Web-interface grounding examples with instructions, element boxes and points, paired with a separately packaged screenshot archive.
- [ShowUI-π training data](https://awesomecua.github.io/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [UGround V1 Data](https://awesomecua.github.io/resources/url-c4898ad1bfc049926a63/) — Date not recorded
  Gated web grounding training data for UGround in Web-Hybrid and Web-Direct subsets, with a bounding-box version whose coordinates are normalized to 0-999.
- [UI-AGILE-Data](https://awesomecua.github.io/resources/url-41abb1b7206689cf5057/) — Date not recorded
  UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.
- [UI-R1 3B training data](https://awesomecua.github.io/resources/url-7c568d88a472f914d316/) — Date not recorded
  The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.
- [UI-Vision](https://awesomecua.github.io/resources/url-2c2004baae4669f8169a/) — Date not recorded
  Desktop GUI data for interface understanding and interaction research.
- [UIBert AppSim and RefExp annotations](https://awesomecua.github.io/resources/github-google-research-datasets-uibert/) — Date not recorded
  Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.
- [VideoCAD data](https://awesomecua.github.io/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.
- [Wave UI](https://awesomecua.github.io/resources/url-0dbb55f127da04d95222/) — Date not recorded
  Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.
- [WebSRC v1.0](https://awesomecua.github.io/resources/url-e0ba328ae1a643b0a5aa/) — Date not recorded
  Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.

## Models

- [AgentCPM-GUI](https://awesomecua.github.io/resources/github-openbmb-agentcpm-gui/) — Date not recorded
  8B on-device smartphone agent built on MiniCPM-V that operates Chinese and English apps from screenshots, trained with reinforcement fine-tuning and a compact JSON action space.
- [AgentCPM-GUI 8B checkpoint](https://awesomecua.github.io/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [Aguvis](https://awesomecua.github.io/resources/github-xlang-ai-aguvis/) — Date not recorded
  Vision-based GUI agent models with unified action representations.
- [Aria-UI](https://awesomecua.github.io/resources/github-ariaui-aria-ui/) — Date not recorded
  Mixture-of-experts GUI grounding model with 3.9B activated parameters that can use text or interleaved image history, with released training data and an AndroidWorld agent.
- [Aria-UI context-aware checkpoint](https://awesomecua.github.io/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
- [Claude Computer Use](https://awesomecua.github.io/resources/url-57f17b7d0c18b2d7c8bf/) — Date not recorded
  Claude tool capability for screenshot-based computer interaction.
- [CogAgent](https://awesomecua.github.io/resources/github-thudm-cogagent/) — Date not recorded
  Visual language model for GUI understanding and interaction.
- [CogAgent 9B 20241220](https://awesomecua.github.io/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [DiMo-GUI](https://awesomecua.github.io/resources/github-vivo-dimo-gui/) — Date not recorded
  GUI grounding research using modality-aware visual reasoning and test-time scaling.
- [Ferret-UI](https://awesomecua.github.io/resources/github-apple-ml-ferret/) — Date not recorded
  Screen understanding research within the Ferret model family.
- [Gemini Computer Use](https://awesomecua.github.io/resources/url-879d4e3e75e83582bde6/) — Date not recorded
  Gemini capability for generating interface actions from screenshots.
- [GroundGUI-8B](https://awesomecua.github.io/resources/url-de31b07ff24ab15d9bdf/) — Date not recorded
  Screenshot grounding checkpoint that emits a single click in a normalized coordinate space.
- [GUI-Actor](https://awesomecua.github.io/resources/github-microsoft-gui-actor/) — Date not recorded
  GUI grounding model with attention-based action localization.
- [GUI-Actor 7B Qwen2-VL](https://awesomecua.github.io/resources/url-e3e5dd82a3102689c4ea/) — Date not recorded
  GUI-Actor checkpoint fine-tuned from Qwen2-VL-7B-Instruct, with about 8.4B BF16 parameters, whose config names a pointer variant of the Qwen2-VL class rather than the stock one, under MIT.
- [GUI-G1](https://awesomecua.github.io/resources/github-yuqi-zhou-gui-g1/) — Date not recorded
  GUI-grounding training code that modifies reasoning templates, reward functions, and the GRPO objective, with a linked model release.
- [GUI-G1 3B v1](https://awesomecua.github.io/resources/url-9dc9d8d3b9a4b32d6f4b/) — Date not recorded
  A Qwen2.5-VL-3B checkpoint released for R1-style visual grounding experiments, predicting interface target locations from screenshots and instructions.
- [GUI-G2](https://awesomecua.github.io/resources/github-zju-real-gui-g2/) — Date not recorded
  GUI grounding models at 3B and 7B trained with Gaussian rewards for click proximity to element centers and region coverage, with variance scaled to element size.
- [GUI-G2 7B](https://awesomecua.github.io/resources/url-90eea6f6d099a3297850/) — Date not recorded
  A Qwen2.5-VL grounding checkpoint trained with Gaussian point and coverage rewards whose granularity adapts to interface-element scale.
- [GUI-Owl 7B](https://awesomecua.github.io/resources/url-aeb32973694f91ad9920/) — Date not recorded
  A Qwen2.5-VL-based GUI checkpoint released with Mobile-Agent-v3 for grounded actions and specialized roles in its agent framework.
- [GUI-R1](https://awesomecua.github.io/resources/github-ritzz-ai-gui-r1/) — Date not recorded
  GUI action-model training and evaluation code with verifiable rewards, plus linked reinforcement-learning data and checkpoints.
- [GUI-R1 checkpoint bundle](https://awesomecua.github.io/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [Holo Model Family](https://awesomecua.github.io/resources/url-c0bd07d82ce25ad1d99d/) — Date not recorded
  H computer-use model family and its release-specific access options.
- [Holo1 7B](https://awesomecua.github.io/resources/url-f35cfcbaeb79663eabeb/) — Date not recorded
  A Qwen2.5-VL-based action model released for the Surfer-H web-agent system, supporting policy, interface-localization and validation roles.
- [Holo2 4B](https://awesomecua.github.io/resources/url-16a51d9e725ad5a5c629/) — Date not recorded
  A Qwen3-VL-based checkpoint for navigation and multi-step GUI actions across web, desktop and mobile interfaces.
- [Holo3 35B-A3B](https://awesomecua.github.io/resources/url-a349aace3cfde25628a8/) — Date not recorded
  A sparse Qwen3.5-based GUI-action checkpoint released for navigation and computer-use workflows.
- [Holo4 35B-A3B BF16](https://awesomecua.github.io/resources/url-16083a0225a60882c704/) — Date not recorded
  A Qwen3.6-based computer-use checkpoint designed to request GUI actions, code execution and tool calls through an external agent harness.
- [InfiGUI-G1](https://awesomecua.github.io/resources/github-infixai-infigui-g1/) — Date not recorded
  InfiGUI-G1 3B and 7B grounding models trained with Adaptive Exploration Policy Optimization, which samples several candidate answers per pass under an adaptive exploration reward.
- [InfiGUI-G1 7B](https://awesomecua.github.io/resources/url-d70a755e3b2102f25f34/) — Date not recorded
  A GUI-grounding checkpoint trained with adaptive exploration rewards and multiple candidate answers to improve instruction-to-element alignment.
- [InfiGUI-R1 3B](https://awesomecua.github.io/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [Magma](https://awesomecua.github.io/resources/github-microsoft-magma/) — Date not recorded
  Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.
- [MAI-UI 8B](https://awesomecua.github.io/resources/url-00b1a3abf9bcb424b264/) — Date not recorded
  A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.
- [OmniParser v2 model bundle](https://awesomecua.github.io/resources/url-e21ca7c859544dbf5fb6/) — Date not recorded
  A screen-parsing weight bundle containing icon-region detectors and an icon captioner for converting screenshots into agent-readable interface elements.
- [OpenAI CUA](https://awesomecua.github.io/resources/url-74eeb7c9fb20674fe6e2/) — Date not recorded
  Computer-using model introduced with the Operator research preview.
- [OpenCUA 32B](https://awesomecua.github.io/resources/url-ad7f176848fd84de64e2/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.
- [OpenCUA 72B](https://awesomecua.github.io/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [OS-Atlas](https://awesomecua.github.io/resources/github-os-copilot-os-atlas/) — Date not recorded
  OS-Atlas GUI action models, including grounding bases fine-tuned from InternVL2-4B and Qwen2-VL-7B-Instruct that accept any image size and output 0-1000 relative coordinates.
- [OS-Atlas Base 4B](https://awesomecua.github.io/resources/url-30c831a1198b9bc2a0f5/) — Date not recorded
  OS-Atlas base checkpoint with about 4.1B parameters, fine-tuned from InternVL2-4B and loaded in Transformers through custom InternVL chat model code.
- [OS-Atlas Base 7B](https://awesomecua.github.io/resources/url-82a30f45d9e855f423c7/) — Date not recorded
  OS-Atlas base checkpoint fine-tuned from Qwen2-VL-7B-Instruct, using the standard Qwen2-VL architecture in Transformers with about 8.3B BF16 parameters.
- [Phi-Ground](https://awesomecua.github.io/resources/github-microsoft-phi-ground/) — Date not recorded
  Microsoft GUI grounding models from an empirical study of grounding training, from data collection to model training, released as Phi-Ground-4B-7C with evaluation code.
- [Phi-Ground checkpoint](https://awesomecua.github.io/resources/url-cee45b940d5fbff3ccca/) — Date not recorded
  Microsoft Phi-Ground GUI grounding checkpoint fine-tuned from Phi-3.5-vision-instruct, shipped as two PyTorch weight shards with custom Phi-3-V configuration and processing code under MIT.
- [POINTS-GUI](https://awesomecua.github.io/resources/github-tencent-points-gui/) — Date not recorded
  POINTS-GUI-G-8B GUI grounding model, trained from a POINTS-1.5 base without native grounding through a data pipeline that unifies coordinates, filters noise and adds hard cases.
- [POINTS-GUI-G 8B](https://awesomecua.github.io/resources/url-cc931199bda2bdf1f5f7/) — Date not recorded
  A specialized interface-grounding checkpoint that returns normalized point coordinates for a requested element in a screenshot.
- [ScaleCUA 7B](https://awesomecua.github.io/resources/url-ff7b1873a3eead89607a/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.
- [SeeClick](https://awesomecua.github.io/resources/github-njucckevin-seeclick/) — Date not recorded
  GUI grounding model trained to locate visual interface elements.
- [SeeClick checkpoint](https://awesomecua.github.io/resources/url-cfea8a0949472a637990/) — Date not recorded
  The released SeeClick visual grounding checkpoint for mapping an interface screenshot and referring instruction to a point or bounding box.
- [Seg2Click Qwen2.5-VL 3B](https://awesomecua.github.io/resources/url-23ad240757185c6f7eac/) — Date not recorded
  Seg2Click checkpoint based on Qwen2.5-VL-3B with a custom action-mask decoder.
- [Seg2Click Qwen3.5 0.8B](https://awesomecua.github.io/resources/url-7405463ba56f9a41e79a/) — Date not recorded
  Compact Seg2Click checkpoint with a merged Qwen3.5 backbone and an action-mask decoder.
- [Seg2Click Qwen3.5 2B](https://awesomecua.github.io/resources/url-fec1c5aa8fd93cb78923/) — Date not recorded
  Seg2Click checkpoint using a 2B Qwen3.5 backbone to predict a mask and select an interface click.
- [Seg2Click Qwen3.5 4B](https://awesomecua.github.io/resources/url-29588aa5651b5839c045/) — Date not recorded
  Seg2Click checkpoint pairing a 4B Qwen3.5 backbone with pixel-level action-mask prediction.
- [Seg2Click Qwen3.5 9B](https://awesomecua.github.io/resources/url-826f3753905c5c43bf46/) — Date not recorded
  Seg2Click checkpoint pairing a 9B Qwen3.5 backbone with a decoder for valid GUI click regions.
- [ShowUI](https://awesomecua.github.io/resources/github-showlab-showui/) — Date not recorded
  Lightweight GUI-agent vision-language-action model from Show Lab and Microsoft, released with UI-guided token selection, training code, the ShowUI-web and ShowUI-desktop datasets and vLLM inference.
- [ShowUI 2B](https://awesomecua.github.io/resources/url-c0f39f7cf2cd9c18e8bd/) — Date not recorded
  ShowUI vision-language-action checkpoint fine-tuned from Qwen2-VL-2B-Instruct, published as a single PyTorch weight file under the MIT license and tagged for GUI agents and computer use.
- [ShowUI-π](https://awesomecua.github.io/resources/github-showlab-showui-pi/) — Date not recorded
  Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.
- [ShowUI-π checkpoint](https://awesomecua.github.io/resources/url-f70aa7c95824a8729516/) — Date not recorded
  A compact visual-action checkpoint that predicts continuous GUI drag trajectories from a screenshot and a natural-language instruction.
- [SpiritSight-Agent 8B base](https://awesomecua.github.io/resources/url-52b7de0e43b1afc9c226/) — Date not recorded
  An InternVL2-based visual GUI checkpoint distributed for grounding and interface navigation, with the publisher recommending task-specific fine-tuning of the base release.
- [UGround](https://awesomecua.github.io/resources/github-osu-nlp-group-uground/) — Date not recorded
  Code, training data and weights for universal visual grounding of GUI elements from screenshots, including Qwen2-VL-based UGround-V1 at 2B, 7B and 72B and offline and online evaluation suites.
- [UGround V1 7B](https://awesomecua.github.io/resources/url-e554295a7f3f5c9ad0d6/) — Date not recorded
  UGround-V1 checkpoint fine-tuned from Qwen2-VL-7B, with about 8.3B BF16 parameters in the standard Qwen2-VL architecture, provided as safetensors and a PyTorch file under Apache-2.0.
- [UI-AGILE](https://awesomecua.github.io/resources/github-kdegroup-ui-agile/) — Date not recorded
  GUI agent trained by RL with a continuous reward, a simple-thinking reward and cropping-based resampling on about 9k samples, plus a plug-in decomposed grounding-and-selection inference method.
- [UI-AGILE checkpoint](https://awesomecua.github.io/resources/url-b94e285c3f757e2d0f3a/) — Date not recorded
  The released UI-AGILE model for GUI grounding with reward shaping, crop-based resampling and decomposed selection during inference.
- [UI-R1](https://awesomecua.github.io/resources/github-lll6gg-ui-r1/) — Date not recorded
  Rule-based reinforcement learning for GUI action prediction, releasing UI-R1-3B, trained from Qwen2.5-VL-3B, the efficiency-oriented UI-R1-E-3B, and training data.
- [UI-R1 3B](https://awesomecua.github.io/resources/url-f13474d7aa734a30624d/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.
- [UI-TARS](https://awesomecua.github.io/resources/github-bytedance-ui-tars/) — Date not recorded
  Native GUI agent models; UI-TARS-1.5 adds reinforcement-learned reasoning before acting and an open 7B checkpoint, and UI-TARS-2 extends to games, code and tool use.
- [UI-TARS 1.5 7B](https://awesomecua.github.io/resources/url-4d32ad3682ae2d71c178/) — Date not recorded
  UI-TARS 1.5 GUI-agent checkpoint in the Qwen2.5-VL architecture with about 8.3B parameters stored in FP32, released under Apache-2.0 for English image-text-to-text use in Transformers.
- [UI-Venus](https://awesomecua.github.io/resources/github-inclusionai-ui-venus/) — Date not recorded
  GUI agent model family; UI-Venus-2, at 9B and 27B, acts on mobile, web and desktop in one end-to-end agent, trained with keypoint-based multi-judge task verification.
- [UI-Venus 2 9B](https://awesomecua.github.io/resources/url-611df37e5f3caa6befd7/) — Date not recorded
  UI-Venus 2 GUI-agent checkpoint fine-tuned from Qwen3.5-9B, with about 9.4B BF16 parameters in the Qwen3.5 multimodal architecture, loaded through Transformers for image-text-to-text.
- [UIX-Qwen2](https://awesomecua.github.io/resources/url-54997a3c67e54abdf319/) — Date not recorded
  A MultiUI-trained visual-language checkpoint for text-rich webpage understanding and interface tasks.
- [ZonUI-3B checkpoint](https://awesomecua.github.io/resources/url-c8c046847f829fea4821/) — Date not recorded
  Qwen2.5-VL-3B-based GUI grounding checkpoint that predicts click locations from screenshots and text instructions across desktop, mobile and web screens.

## Engineering & industry

- [AgentQL](https://awesomecua.github.io/resources/url-8896d44370711136fd54/) — Date not recorded
  Natural-language querying and interaction tools for web interfaces.
- [AgentStudio](https://awesomecua.github.io/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [GroundGUI training and evaluation code](https://awesomecua.github.io/resources/github-prentisai-groundgui/) — Date not recorded
  Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.
- [GUI Grounding Evaluation Harness](https://awesomecua.github.io/resources/github-patrickstarl-gui-grounding-eval/) — Date not recorded
  ScreenSpot-Pro evaluation harness with explicit coordinate transforms, prompt and crop-based inference comparisons, and per-sample grounding accuracy and cost records.
- [GUI-RC / GUI-RCPO](https://awesomecua.github.io/resources/github-zju-real-gui-rcpo/) — Date not recorded
  GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.
- [GUIPivot](https://awesomecua.github.io/resources/github-zrw00-guipivot/) — Date not recorded
  Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.
- [MAI-UI inference and evaluation code](https://awesomecua.github.io/resources/github-tongyi-mai-mai-ui/) — Date not recorded
  Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.
- [Midscene.js](https://awesomecua.github.io/resources/github-web-infra-dev-midscene/) — Date not recorded
  Visual automation toolkit for web, mobile, and desktop interfaces.
- [OculiX (SikuliX continuation)](https://awesomecua.github.io/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [OmniParser](https://awesomecua.github.io/resources/github-microsoft-omniparser/) — Date not recorded
  Screenshot parser that detects interactable regions and captions icons so vision-language models can ground actions, released as V1.5 and V2 weights alongside OmniTool for driving a Windows 11 VM.
- [ScreenSuite](https://awesomecua.github.io/resources/github-huggingface-screensuite/) — Date not recorded
  A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.
- [SeeAct](https://awesomecua.github.io/resources/github-osu-nlp-group-seeact/) — Date not recorded
  Generalist web agent framework for large multimodal models such as GPT-4V, with a Playwright tool that runs agents on live websites, text-choice and set-of-mark grounding, and a crawler mode.
- [Seg2Click](https://awesomecua.github.io/resources/github-jcwang0602-seg2click/) — Date not recorded
  Training and inference implementation that predicts an executable-region mask and derives a GUI click from that mask.
- [Self Operating Computer](https://awesomecua.github.io/resources/github-othersideai-self-operating-computer/) — Date not recorded
  Framework, released in November 2023, in which a multimodal model views the screen and picks mouse and keyboard actions toward a goal, with backends such as GPT-4o, Claude 3, Gemini and LLaVA.
- [Set of Mark](https://awesomecua.github.io/resources/github-microsoft-som/) — Date not recorded
  Visual-prompting toolbox that labels image regions for multimodal reference and grounding, including GUI applications.
- [Sikuli legacy research implementation](https://awesomecua.github.io/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [TAG attention-driven GUI grounding](https://awesomecua.github.io/resources/github-heimingx-tag/) — Date not recorded
  Grounding and evaluation code that aggregates a pretrained vision-language model’s attention maps to localize requested interface elements without fine-tuning.
- [TongUI training and inference framework](https://awesomecua.github.io/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [VideoCAD training and evaluation code](https://awesomecua.github.io/resources/github-ghadinehme-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.
- [WebMarker](https://awesomecua.github.io/resources/github-reidbarber-webmarker/) — Date not recorded
  A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.
- [WebVLN research implementation](https://awesomecua.github.io/resources/github-webvln-webvln/) — Date not recorded
  Training and evaluation code for question-guided website navigation that combines visual observations with web-specific HTML information.
- [WinDOM code](https://awesomecua.github.io/resources/github-chenghengli-windom/) — Date not recorded
  GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.
