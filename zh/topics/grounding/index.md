# GUI 定位

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/grounding/records.jsonl

## 论文与综述

- [GUI Grounding for Computer-Use Agents: A Survey](https://awesomecua.com/resources/url-0579bd92efb87b26cb15/) — 2026-11-04
  A survey of GUI grounding organizes methods by learning, inference, and target representation, and reviews datasets, benchmarks, metrics, and inference costs.
- [UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2611-00926/) — 2026-10-31
  Introduces UI-UG 2, a mobile UI model trained for component understanding, GUI grounding, and structured interface generation with render-aware RL.
- [Online Dense Reinforcement Learning with Planning-Grounding Agent for UI Navigation on Live IOS Apps](https://awesomecua.com/resources/arxiv-2610-39264/) — 2026-10-29
  Introduces online RL training for agents navigating live iOS apps, separating planning from UI grounding and using step-level and task-completion rewards.
- [Learning to Look Beyond Screens: Transferable Visual Observation from GUI Grounding](https://awesomecua.com/resources/arxiv-2610-37093/) — 2026-10-27
  Introduces LBS, a vision-language model trained with GUI grounding trajectories and crop-and-inspect decisions to study transfer of active visual observation.
- [AdaGround: Token-Normalized Adaptive Zooming with Verifier-in-the-Loop Refinement for GUI Grounding](https://awesomecua.com/resources/arxiv-2610-36874/) — 2026-10-27
  Introduces AdaGround, a training-free GUI grounding method that adjusts screenshot zoom to target size and uses a click verifier to refine or reject predictions.
- [Right Click, Wrong Box: Grading GUI Grounding by What a Click Does](https://awesomecua.com/resources/arxiv-2610-36831/) — 2026-10-27
  Proposes grading GUI grounding clicks by their executed outcomes and audits box-based scores on live web applications and ScreenSpot-v2 screenshots.
- [PreView: Enhancing GUI Grounding with Preprocessed Views and Cues](https://awesomecua.com/resources/arxiv-2610-33645/) — 2026-10-24
  Introduces PreView, a screenshot preprocessor that adds cropped views and candidate cues to help existing GUI grounding models identify controls for clicks.
- [IGG: A Benchmark for Interactive GUI Grounding under Visibility Constraints](https://awesomecua.com/resources/arxiv-2610-32536/) — 2026-10-23
  Introduces Interactive GUI Grounding (IGG), a benchmark that tests whether agents can reveal hidden interface targets through interaction before clicking them.
- [Correct Answers, Closed Gates: SolveBind for GUI Agents at the Verification Barrier](https://awesomecua.com/resources/arxiv-2610-32223/) — 2026-10-23
  Introduces SolveBind, a GUI-agent framework that decomposes verification tasks and uses runtime evidence to guide interactions with protected websites and applications.
- [AgentVQA: A Unified Benchmark for Agentic Visual Understanding](https://awesomecua.com/resources/arxiv-2610-31494/) — 2026-10-22
  AgentVQA is an offline visual question-answering benchmark across five agent domains, including web agents and questions involving UI element location.
- [PointerBench: A Diagnostic Benchmark for Fine-Grained GUI Grounding](https://awesomecua.com/resources/arxiv-2610-31274/) — 2026-10-22
  POINTERBENCH is a diagnostic GUI grounding suite covering spreadsheet sub-elements, document characters and targets across professional applications.
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [From Seeing to Reporting: A Theory of Reliable Visual Set Generation in Vision-Language Models](https://awesomecua.com/resources/arxiv-2610-25503/) — 2026-10-18
  FSR models visual reporting and gives inference-time procedures for frozen vision-language models, including screen parsing and GUI target selection.
- [STP-GUI: Spatially-Aware Token Pruning for Efficient Web-GUI Agents](https://awesomecua.com/resources/arxiv-2610-20390/) — 2026-10-14
  Introduces STP-GUI, which selects spatially coherent screenshot windows conditioned on the instruction to reduce visual tokens while retaining useful interface structure.
- [Why Generate a Click? Plug-in Decision Heads for Web Agents](https://awesomecua.com/resources/arxiv-2610-20107/) — 2026-10-14
  Adds decision heads to a frozen vision-language generator for selecting web actions and targets, with a confidence gate that falls back to text generation.
- [MMA-SafetyBench: A Benchmark for Multimodal Agent Safety Evaluation](https://awesomecua.com/resources/arxiv-2610-19384/) — 2026-10-14
  Builds trajectory-guided visual-injection tests for web, desktop and mobile observations, separating target-matching action predictions from broader semantic compromise.
- [GroundGUI: GUI Grounding by High-Quality Data and Distillation-to-Reinforcement Learning](https://awesomecua.com/resources/arxiv-2610-19100/) — 2026-10-13
  Introduces ScreenRef screenshot grounding data and a training sequence from supervised learning through teacher-guided distillation to reinforcement learning for GroundGUI-8B.
- [MHVF: Training-Free GUI Grounding via Verification-Guided Multi-Hypothesis Search](https://awesomecua.com/resources/arxiv-2610-17792/) — 2026-10-13
  Introduces MHVF, a training-free grounding method that explores several candidate screen regions, verifies them in local views, and uses those checks to guide further search.
- [Learn from Move: the Next Step for GUI Agents](https://awesomecua.com/resources/arxiv-2610-16720/) — 2026-10-12
  Introduces LatentGUIWorld to test learning interface semantics and dynamics through interaction, and studies finer movement actions with intermediate visual feedback and exploration demonstrations.
- [Seg2Click: Learning Pixel-Level Action Masks for GUI Visual Grounding](https://awesomecua.com/resources/arxiv-2610-16234/) — 2026-10-12
  Recasts GUI grounding as predicting a mask of valid click locations from bounding-box supervision, then derives a click point with a deterministic selection rule.
- [Visible but Not Avoided: State-Dependent Re-Proposal of Rejected Candidates in Catalog-Based LLM Optimization Loops](https://awesomecua.com/resources/arxiv-2610-15738/) — 2026-10-11
  Studies repeated rejected edits while optimizing a screenshot-only GUI agent, contrasting static probes with reached loop states and testing how rejection wording changes subsequent edit proposals.
- [ConClick: Element-Wise Contrastive Learning Improves GUI Grounding](https://awesomecua.com/resources/arxiv-2610-13268/) — 2026-10-09
  Analyzes recurring distractor clicks in GUI grounding and introduces ConClick, a contrastive training method built from target–distractor pairs. Its ReClick inference procedure revisits candidate regions and compares competing predictions.
- [CaptchaAgent: Verifiable Visual Reasoning for CAPTCHA Solving](https://awesomecua.com/resources/arxiv-2610-12866/) — 2026-10-09
  Presents CaptchaAgent, which builds an explicit visual representation of objects and relations, refines ambiguous regions, and checks counterfactual consistency before acting on interactive CAPTCHAs.
- [Adversarial Images Hijack Web Agents from Visual Grounding to Browser Execution](https://awesomecua.com/resources/arxiv-2610-09240/) — 2026-10-07
  Introduces WebMirage, a visual red-teaming framework that models webpage element competition and action post-processing to test whether manipulated grounding decisions lead to executed browser actions.
- [Decoupling What from Where: How Should a Small GUI Grounding Model Receive the Action Type?](https://awesomecua.com/resources/arxiv-2610-07444/) — 2026-10-05
  Compares ways to condition a small GUI grounding model on action type under matched training conditions on Android in the Wild. The study traces apparent gains to a coordinate-serialization choice and reports limited evidence that the gains persist with predicted action types.
- [Recurrent Latent Visual Search for GUI Grounding](https://awesomecua.com/resources/arxiv-2610-05185/) — 2026-10-04
  Introduces ReLaViS, which performs recurrent visual search inside a grounding model by repeatedly querying screenshot tokens and feeding the resulting spatial evidence back into the model. Coarse-to-fine supervision is constructed from existing interface-element annotations.
- [DeskForge: Dense Supervision from Desktop Environments for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2610-02320/) — 2026-10-01
  Generates dense desktop supervision by varying real application scenes and combining screenshots, accessibility trees, and window geometry.
- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://awesomecua.com/resources/arxiv-2610-01215/) — 2026-10-01
  Introduces AutoGUIWorld, which combines task planning and image editing to synthesize action-grounded GUI trajectories without running the depicted software. It filters generated transitions and tests whether training on them improves agents operating real desktop and scientific applications.
- [SCA: Spatial Credit Assignment for Reinforcement Learning of GUI Agents](https://awesomecua.com/resources/arxiv-2609-36939/) — 2026-09-29
  Introduces Spatial Credit Assignment, which uses click coordinates to refine group-relative reinforcement-learning updates for GUI grounding. It distinguishes failed clicks by spatial evidence while leaving the deployed action policy unchanged.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.com/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [Probe to Act: Elevating Browser-Use Agent via Active Visual Probing](https://awesomecua.com/resources/arxiv-2609-33646/) — 2026-09-27
  Introduces Probe to Act, which lets browser agents request visual evidence linking DOM handles and screen regions before committing an operation. It retains selected interaction evidence as memory and studies both prompted use and distillation into open models.
- [DashAct: A Progressive Diagnostic Benchmark for GUI Agents in Interactive Dashboard Analysis](https://awesomecua.com/resources/arxiv-2609-32385/) — 2026-09-26
  Diagnoses dashboard-agent failures by progressively restoring interaction context, next-action support, and visual target information within the same task.
- [ScreenHaystack: Finding Blind Zones in GUI Grounding](https://awesomecua.com/resources/arxiv-2609-32036/) — 2026-09-25
  Moves controlled target icons across high-resolution interfaces to diagnose spatial blind zones in grounding models and study targeted augmentation.
- [CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs](https://awesomecua.com/resources/arxiv-2609-31957/) — 2026-09-25
  Introduces CaptchaArena, a dataset of execution-verified interactive CAPTCHA solutions with screenshot–action trajectories, reasoning annotations, and pixel masks for irregular targets. The work trains a single policy across CAPTCHA types using supervised learning followed by verifier-reward reinforcement learning.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.com/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [How Many Pixels Is a Digit Worth? Place-Aware Coordinate Entropy for GUI Agent Confidence Estimation](https://awesomecua.com/resources/arxiv-2609-24277/) — 2026-09-21
  PACE weights coordinate-digit entropy by place value to estimate confidence in GUI clicks from one forward pass. It evaluates correctness ranking and selective accuracy against repeated-sampling alternatives on ScreenSpot-Pro and ScreenSpot-v2.
- [MintAct: A Unified Visual Agent for Digital Environments](https://awesomecua.com/resources/arxiv-2609-22083/) — 2026-09-18
  MintAct trains a visual-agent family for grounding, navigation and tool use across mobile, desktop and web environments. Its shared infrastructure supports trajectory collection and asynchronous online RL while controlling cross-domain sampling and off-policy drift.
- [RankGround: Efficient High-Resolution GUI Grounding via Lightweight Reranker-Guided Crop Selection](https://awesomecua.com/resources/arxiv-2609-18690/) — 2026-09-16
  RankGround trains a lightweight reranker to select a promising screenshot crop before one VLM localization call. Ranking supervision uses containment and boundary-aware augmentation, with pointwise and listwise training stages.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.com/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [Learning from Reliable Negatives: Confidence-Anchored Test-Time Adaptation for GUI Grounding](https://awesomecua.com/resources/arxiv-2609-15307/) — 2026-09-14
  Confidence-Anchored Learning uses coordinate-token confidence to filter pseudo-supervision for GUI grounding. Its negative-only variant performs label-free test-time updates to reduce reliance on potentially incorrect positive examples.
- [LLaDA-UI: Bringing Block-wise Diffusion to Vision-Language GUI Agents](https://awesomecua.com/resources/arxiv-2609-13287/) — 2026-09-09
  LLaDA-UI adapts block-wise diffusion generation to a vision-language GUI agent through multimodal pretraining and GUI supervised fine-tuning. It evaluates grounding and navigation across multiple platform settings.
- [Tail-Likelihood Reinforcement Learning](https://awesomecua.com/resources/arxiv-2609-02987/) — 2026-09-02
  Introduces Tail-Likelihood Reinforcement Learning (TailRL), an RL objective that favors rare high-reward rollouts; GUI grounding is one of several evaluation tasks.
- [CA-OPD: Confidence-Aware On-Policy Distillation for Structured Visual Prediction](https://awesomecua.com/resources/arxiv-2609-02401/) — 2026-09-02
  Introduces CA-OPD, a confidence-guided distillation method for visual prediction, evaluated on GUI grounding and optical character recognition benchmarks.
- [Are We There Yet? Assessing Computer-Use Agents for Blind Users' Accessible Interaction with Desktop Applications](https://awesomecua.com/resources/arxiv-2609-00524/) — 2026-09-01
  A diary study deploys the screen-reader-accessible OLLA computer-use prototype with blind users across desktop applications. Recorded commands and interaction traces support model comparisons and analysis of grounding, planning, constraint tracking and termination failures.
- [Focus Like a Human: Efficient GUI Grounding via Coarse-to-Fine Visual Attention and Parallel Verification](https://awesomecua.com/resources/url-85cad9e7962668786093/) — 2026-09
  FastFocus grounds GUI targets by proposing regions from low-resolution views and checking candidates with parallel high-resolution zooms; it is evaluated on ScreenSpot-Pro.
- [Iron: Intent-Aligned and Retrospective Dual Learning Framework for Enhancing Generalist Virtual Agents](https://awesomecua.com/resources/arxiv-2608-27866/) — 2026-08-28
  Introduces Iron, a GUI-agent training framework that aligns low-level actions with high-level intent using cycle-consistency rewards. It also repurposes failed trajectories through hindsight reconstruction and evaluates transfer to other digital tasks.
- [GUI-Primitives: Diagnosing Spatial Reasoning Failures in Vision-Language GUI Grounding](https://awesomecua.com/resources/arxiv-2608-21832/) — 2026-08-22
  Introduces GUI-Primitives, a paired-instruction benchmark that changes a spatial relation while holding the screenshot and anchor fixed. Its diagnostics separate failure to localize either candidate from failure to choose the candidate satisfying the relation.
- [Lexical Coupling in GUI Element Grounding: Sentence Embeddings Track Labels across Mobile and Web](https://awesomecua.com/resources/arxiv-2608-21794/) — 2026-08-22
  Studies whether text-embedding GUI grounding scores reflect semantic matching or recovery of visible labels. Same-screen ranking comparisons with lexical baselines expose differences between deployable fusion, oracle selection, and performance on label-poor targets.
- [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](https://awesomecua.com/resources/arxiv-2608-11191/) — 2026-08-11
  Introduces a Test-Time Self-Evolving framework for GUI grounding that explores unseen interfaces, reflects on predicted coordinates, and distills those reflections into the model.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.com/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [Hallucination-Free GUI Grounding via Regression-Free Layout-Aware Matching](https://awesomecua.com/resources/arxiv-2608-09654/) — 2026-08-10
  This framework separates frozen-model instruction expansion from a trained layout-aware matcher that localizes GUI elements without coordinate regression. Binary text/icon supervision supports the matcher, with evaluations on GUI grounding and Mind2Web element-selection tasks.
- [MissClick: Execution-Aware Adversarial Attacks on Coordinate Generation in GUI Grounding Models](https://awesomecua.com/resources/arxiv-2608-03740/) — 2026-08-04
  MissClick designs white-box attacks around the numerical effect of coordinate digits on executable GUI clicks. Separate untargeted displacement and targeted place-weighted objectives are evaluated across desktop, web and mobile grounding settings.
- [GUI-Lens: Coarse-to-Fine Cropping for GUI Grounding with General-Purpose VLMs](https://awesomecua.com/resources/arxiv-2608-03270/) — 2026-08-04
  GUI-Lens uses OCR and detected interface components as coordinate references while a general-purpose VLM selects progressively enlarged screenshot crops. Instruction-conditioned checks constrain the crop and click proposals before mapping the final location back to the original screen.
- [SPECTRA: On-Device Cognitive Perturbation and Trajectory Analysis for Autonomous Edge-Cloud GUI Grounding](https://awesomecua.com/resources/arxiv-2609-35775/) — 2026-07-31
  Introduces SPECTRA, an edge-cloud GUI grounding framework that uses visual perturbations and trajectory analysis to decide when to request a cloud model.
- [MAGA: Multi-Platform Self-Fusion of GUI Agents via Structured Action Distillation](https://awesomecua.com/resources/arxiv-2607-29320/) — 2026-07-31
  MAGA distills specialized GUI agents into one policy by allocating supervision according to structured-action correctness rather than treating all response tokens equally. A training-only teacher hint supports fusion across mobile, web and desktop settings without changing student inputs.
- [StepX-Edge: An On-Device UI Vision-Language Model via Architecture-Training-Deployment Co-Design](https://awesomecua.com/resources/arxiv-2607-22708/) — 2026-07-20
  Introduces StepX-Edge, an on-device UI vision-language model for screen understanding, OCR, question answering, and element grounding on mobile chips.
- [Teach it to stop, not just to click](https://awesomecua.com/resources/arxiv-2607-17136/) — 2026-07-19
  Studies verifier-guided repair of a 35B computer-use agent across five environments, examining variation across runs and data draws in done detection, GUI clicks, and field entry.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.com/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.com/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [Look Before You Leap: Context-Sensitive GUI Grounding for Boosting Automated Extended Reality (XR) Testing](https://awesomecua.com/resources/url-39f88102e1659647b1a0/) — 2026-06-30
  Orienter detects interactive elements in 3D XR interfaces using app context and iterative reflection, then evaluates detection and guided testing on Steam app images.
- [DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching](https://awesomecua.com/resources/arxiv-2606-31980/) — 2026-06-30
  DigitalCoach records expert–novice software coaching conversations aligned with screen and input events. Automated and interactive evaluations examine how model coaches differ from humans in explanation, error diagnosis and visual grounding when helping a learner operate software.
- [LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents](https://awesomecua.com/resources/arxiv-2606-30697/) — 2026-06-29
  LUMOS converts native accessibility metadata and browser UI structure into semantic interface blueprints with stable element identifiers and available actions. It combines live pointer-to-element grounding with an observe-act loop constrained to visible-UI primitives.
- [One Forward Beats Two: InnerZoom for Accurate and Efficient GUI Grounding](https://awesomecua.com/resources/arxiv-2606-30084/) — 2026-06-29
  InnerZoom preserves target-region cues from intermediate decoder layers and reinjects a compact evidence state during coordinate decoding. Its single-forward GUI grounder is compared with crop-and-rerun zooming and matched supervised/RL baselines for accuracy and inference cost.
- [GUICrafter: Weakly-Supervised GUI Agent Leveraging Massive Unannotated Screenshots](https://awesomecua.com/resources/arxiv-2606-29705/) — 2026-06-29
  GUICrafter first learns grounding from large collections of unannotated screenshots and webpages, then uses a smaller high-quality dataset for reinforcement-learning calibration. The curriculum targets reduced dependence on manually annotated GUI training data.
- [WinDOM: Self-Family Distillation for Small-Model GUI Grounding](https://awesomecua.com/resources/arxiv-2606-25964/) — 2026-06-24
  WinDOM obtains bounding-box supervision from a Windows 11 web reimplementation driven through Playwright, and studies rejection-sampling distillation for small GUI grounders. It treats the depth of the supervised cold start as a GRPO choice, comparing same-size EMA and larger same-family teachers.
- [Uncertainty Quantification for Computer-Use Agents: A Benchmark across Vision-Language Models and GUI Grounding Datasets](https://awesomecua.com/resources/arxiv-2606-25760/) — 2026-06-24
  Argus benchmarks post-hoc uncertainty methods for single-step GUI grounding across open-weight and closed-source observation regimes. It tests calibration, rejection, error severity and conformal click regions, finding that uncertainty rankings transfer less reliably across model/interface regimes than across datasets for one model.
- [Trust the Right Teacher: Quality-Aware Self-Distillation for GUI Grounding](https://awesomecua.com/resources/arxiv-2606-18101/) — 2026-06-16
  Proposes quality-aware self-distillation for GUI coordinate generation under student-produced prefixes. A correctness-aware gate suppresses coordinate-token supervision that cannot reach the target box, while teacher-probability scaling adjusts the remaining signal strength.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.com/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.com/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.com/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [GUI-AC: Enhancing Continual Learning in GUI Agents](https://awesomecua.com/resources/arxiv-2606-10522/) — 2026-06-09
  GUI-AC uses grounding certainty to adjust advantage weighting and policy-clipping bounds during continual reinforcement fine-tuning. Its mechanisms aim to suppress noisy confidence updates while retaining exploration under shifting GUI domains and resolutions.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.com/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [DragOn: A Benchmark and Dataset for Drag-Based GUI Interactions](https://awesomecua.com/resources/arxiv-2606-06322/) — 2026-06-04
  DragOn supplies drag-grounding training data and a held-out benchmark for highlighting text, selecting cells, resizing elements and moving sliders. It evaluates existing vision-language models and a model fine-tuned on the drag tasks.
- [GUI-C$^2$: Coarse-to-Fine GUI Grounding via Difficulty-Aware Reinforcement Learning](https://awesomecua.com/resources/arxiv-2605-30884/) — 2026-05-29
  Introduces GUI-D to score training samples by difficulty and GUI-C² to refine screen-element locations through area-gated cropping and reinforcement learning.
- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://awesomecua.com/resources/arxiv-2605-19484/) — 2026-05-19
  Cutverse benchmarks GUI agents on long editing workflows across professional media applications and parses recordings and input logs into grounded action trajectories.
- [DocOS: Towards Proactive Document-Guided Actions in GUI Agents](https://awesomecua.com/resources/arxiv-2605-18048/) — 2026-05-18
  DocOS benchmarks agents that search online documentation and translate procedural instructions into GUI actions in interactive web environments. It separates failures to retrieve useful procedures from failures to ground retrieved instructions into executable actions.
- [MUIAnno: An Expert-Annotated Dataset and Evaluation Benchmark for Mobile UI Understanding](https://awesomecua.com/resources/arxiv-2605-17656/) — 2026-05-17
  MUIAnno provides expert labels for elements in manually explored mobile-app screens, with a web annotation tool that emits structured JSON. It also supplies UI-element detection baselines for the dataset.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.com/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [PAGER: Bridging the Semantic-Execution Gap in Point-Precise Geometric GUI Control](https://awesomecua.com/resources/arxiv-2605-15963/) — 2026-05-15
  Introduces PAGE Bench for point-precise geometric GUI construction and PAGER, an agent that plans around primitive dependencies and executes pixel-level actions.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.com/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [WinDeskGround: A Benchmark for Robust GUI Grounding in Complex Multi-Window Desktop Environments](https://awesomecua.com/resources/arxiv-2605-16402/) — 2026-05-13
  WinDeskGround synthesizes multi-window desktop layouts with controlled occlusion, density and semantic similarity to test GUI grounding robustness. Its instruction-target benchmark measures how localization changes when interfaces depart from simple single-layer scenes.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.com/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.com/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [BAMI: Training-Free Bias Mitigation in GUI Grounding](https://awesomecua.com/resources/arxiv-2605-06664/) — 2026-05-07
  BAMI uses coarse-to-fine focus and candidate selection at inference time to address precision and ambiguity errors in GUI grounding.
- [X-OmniClaw Technical Report: A Unified Mobile Agent for Multimodal Understanding and Interaction](https://awesomecua.com/resources/arxiv-2605-05765/) — 2026-05-07
  Describes an Android agent architecture combining multimodal perception, working and personal memory, hybrid XML/visual grounding, and reusable skills captured from user interactions.
- [AutoFocus: Uncertainty-Aware Active Visual Search for GUI Grounding](https://awesomecua.com/resources/arxiv-2605-02630/) — 2026-05-04
  Presents AutoFocus, a training-free grounding method that turns sampled coordinates and token uncertainty into spatial region proposals. Shape-aware crops and visual comparison select a target while retaining surrounding interface context.
- [Learn where to Click from Yourself: On-Policy Self-Distillation for GUI Grounding](https://awesomecua.com/resources/arxiv-2605-00642/) — 2026-05-01
  Introduces GUI-SD, an on-policy self-distillation method for locating GUI elements from instructions, using a visually enriched teacher context and entropy-guided token weighting.
- [A11y-Compressor: A Framework for Enhancing the Efficiency of GUI Agent Observations through Visual Context Reconstruction and Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-00551/) — 2026-05-01
  A11y-Compressor transforms linearized accessibility trees through modal detection, redundancy reduction and semantic structuring. Its OSWorld evaluation measures both observation-token reduction and task success.
- [FineState-Bench: Benchmarking State-Conditioned Grounding for Fine-grained GUI State Setting](https://awesomecua.com/resources/arxiv-2604-27974/) — 2026-04-30
  FineState-Bench tests whether GUI agents locate the intended control and set its exact state across desktop, web, and mobile interfaces, with stage-wise diagnostic metrics.
- [AutoGUI-v2: A Comprehensive Multi-Modal GUI Functionality Understanding Benchmark](https://awesomecua.com/resources/arxiv-2604-24441/) — 2026-04-27
  AutoGUI-v2 evaluates interface functionality, grounding and predicted interaction outcomes using hierarchical regions derived through VLM-human annotation. Its tasks span multiple operating systems and expose differences between functional localization, captioning and transition-logic understanding.
- [GoClick: Lightweight Element Grounding Model for Autonomous GUI Interaction](https://awesomecua.com/resources/arxiv-2604-23941/) — 2026-04-27
  Studies a compact encoder-decoder grounding model and progressive training-data refinement for resource-constrained GUI interaction.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.com/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [HalluClear: Diagnosing, Evaluating and Mitigating Hallucinations in GUI Agents](https://awesomecua.com/resources/arxiv-2604-17284/) — 2026-04-19
  Introduces HalluClear with a GUI hallucination taxonomy, expert-calibrated evaluation workflow and structured-reasoning post-training scheme. It evaluates how these components affect hallucinations, grounding and action fidelity across GUI agents.
- [Beyond Chat and Clicks: GUI Agents for In-Situ Assistance via Live Interface Transformation](https://awesomecua.com/resources/arxiv-2604-14668/) — 2026-04-16
  DOMSteer translates help requests and live page context into reversible DOM changes such as control highlighting, contextual tooltips and layout reorganization. The work evaluates in-place GUI assistance with interface tests, use cases and a comparative user study.
- [Zoom Consistency: A Free Confidence Signal in Multi-Step Visual Grounding Pipelines](https://awesomecua.com/resources/arxiv-2604-15376/) — 2026-04-15
  Proposes zoom consistency as a confidence signal for multistep GUI grounding and uses it to route between specialist and generalist visual grounding models.
- [GUI-Perturbed: Domain Randomization Reveals Systematic Brittleness in GUI Grounding Models](https://awesomecua.com/resources/arxiv-2604-14262/) — 2026-04-15
  Introduces GUI-Perturbed, which varies screenshot appearance and instruction wording independently to diagnose grounding failures. Experiments on three related model architectures examine relational instructions, browser zoom and augmentation-based fine-tuning.
- [UI-Zoomer: Uncertainty-Driven Adaptive Zoom-In for GUI Grounding](https://awesomecua.com/resources/arxiv-2604-14113/) — 2026-04-15
  Introduces UI-Zoomer, a training-free grounding method that uses candidate agreement and token confidence to decide when to crop and retry. Prediction variance determines a separate crop radius for each uncertain interface target.
- [PrecisionCUA: Iterative Visual Refinement for Pixel-Precise Cursor Grounding in Code Editors](https://awesomecua.com/resources/arxiv-2604-13019/) — 2026-04-14
  Studies iterative cursor grounding in dense code-editor interfaces, using visual feedback from earlier attempts to correct displacement. PrecisionCUA evaluates this closed-loop process across multiple model families on coding-interface tasks.
- [Are GUI Agents Focused Enough? Automated Distraction via Semantic-level UI Element Injection](https://awesomecua.com/resources/arxiv-2604-07831/) — 2026-04-09
  This study tests black-box GUI-grounding failures caused by strategically added, innocuous-looking UI elements. Its iterative overlay search is compared with random injection and repeated independent grounding trials to distinguish persistent misdirection from incidental clutter.
- [What's Missing in Screen-to-Action? Towards a UI-in-the-Loop Paradigm for Multimodal GUI Reasoning](https://awesomecua.com/resources/arxiv-2604-06995/) — 2026-04-08
  Introduces UILoop, which inserts explicit UI-element localization, function and usage reasoning between screen observation and action. UI Comprehension-Bench evaluates these element-level capabilities with three metrics.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.com/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [GUIDE: Resolving Domain Bias in GUI Agents through Real-Time Web Video Retrieval and Plug-and-Play Annotation](https://awesomecua.com/resources/arxiv-2603-26266/) — 2026-03-27
  GUIDE retrieves relevant software tutorials through subtitle-based video search, then infers planning and grounding knowledge from consecutive annotated keyframes. It inserts that knowledge into existing GUI-agent modules without parameter updates and evaluates the plug-in on OSWorld.
- [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://awesomecua.com/resources/arxiv-2603-26211/) — 2026-03-27
  Adapts a discrete vision-language diffusion model to single-turn GUI action and bounding-box prediction, using a hybrid masking schedule for coordinate geometry. Experiments across web, desktop and mobile datasets examine grounding accuracy and inference tradeoffs.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [MedSPOT: A Workflow-Aware Sequential Grounding Benchmark for Clinical GUI](https://awesomecua.com/resources/arxiv-2603-19993/) — 2026-03-20
  Benchmarks sequential target localization in clinical software workflows, emphasizing how early mistakes affect subsequent interaction steps.
- [AdaZoom-GUI: Adaptive Zoom-based GUI Grounding with Instruction Refinement](https://awesomecua.com/resources/arxiv-2603-17441/) — 2026-03-18
  Combines instruction rewriting with conditional second-stage zooming for small GUI targets. A grounding dataset and GRPO training support joint prediction of click coordinates and element bounding boxes.
- [Visual Confused Deputy: Exploiting and Defending Perception Failures in Computer-Using Agents](https://awesomecua.com/resources/arxiv-2603-14707/) — 2026-03-16
  Formalizes a visual confused-deputy failure in which a computer agent acts on a misperceived UI object. A separate guardrail checks both the visual target and the agent's action reasoning against deployment-specific knowledge before permitting execution.
- [Zoom to Essence: Trainless GUI Grounding by Inferring upon Interface Elements](https://awesomecua.com/resources/arxiv-2603-14448/) — 2026-03-15
  Presents ZoomUI, a training-free grounding method that expresses instructions as visual element descriptions and uses model attention to zoom progressively into relevant interface regions. Evaluation examines instruction-to-element localization on GUI benchmarks.
- [FDC-Ground: Improving GRPO for GUI Grounding via Exponential Rewards and Fact-Aligned Pruning](https://awesomecua.com/resources/url-2eaafb0b5ecde3babbf1/) — 2026-03-14
  FDC-Ground trains GUI element location models with a distance-based reward and completion pruning; a 7B model is evaluated on ScreenSpot and ScreenSpot-v2.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.com/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [WebChain: A Large-Scale Human-Annotated Dataset of Real-World Web Interaction Traces](https://awesomecua.com/resources/arxiv-2603-05295/) — 2026-03-05
  WebChain aligns human web-interaction trajectories with visual, structural and action data for agent training. It also introduces WebChainBench and a mid-training approach that separates spatial grounding from planning.
- [Spatio-Temporal Token Pruning for Efficient High-Resolution GUI Agents](https://awesomecua.com/resources/arxiv-2602-23235/) — 2026-02-26
  GUIPruner compresses high-resolution screenshots and interaction history for GUI navigation through training-free resizing and layout-aware token pruning.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.com/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [GUI-Libra: Training Native GUI Agents to Reason and Act with Action-aware Supervision and Partially Verifiable RL](https://awesomecua.com/resources/arxiv-2602-22190/) — 2026-02-25
  GUI-Libra trains GUI agents with action-aware supervision, a curated reasoning dataset and reinforcement learning adapted to partially verifiable actions across web and mobile tasks.
- [ScreenParse: Moving Beyond Sparse Grounding with Complete Screen Parsing Supervision](https://awesomecua.com/resources/arxiv-2602-14276/) — 2026-02-15
  ScreenParse supplies dense annotations of UI elements, types and text in web screenshots through an automated rendering and filtering pipeline. ScreenVLM learns to output structured screen markup, and the study evaluates dense parsing and transfer to GUI grounding.
- [Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization](https://awesomecua.com/resources/arxiv-2602-13653/) — 2026-02-14
  This framework learns an agentic-Q model to estimate individual actions’ contributions to GUI task completion. It then optimizes a policy with step-level samples from its own trajectories, decoupling policy updates from environment interaction.
- [See, Plan, Snap: Evaluating Multimodal GUI Agents in Scratch](https://awesomecua.com/resources/arxiv-2602-10814/) — 2026-02-11
  ScratchWorld evaluates program construction through the Scratch interface using fine-grained drag-and-drop actions and a complementary semantic-API mode. Runtime tests assess the resulting programs, allowing analysis of the gap between program reasoning and GUI manipulation.
- [UI-Venus-1.5 Technical Report](https://awesomecua.com/resources/arxiv-2602-09082/) — 2026-02-09
  Describes a GUI-agent family combining broad intermediate training, full-trajectory online reinforcement learning, and merging of specialized models.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.com/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [POINTS-GUI-G: GUI-Grounding Journey](https://awesomecua.com/resources/arxiv-2602-06391/) — 2026-02-06
  Studies GUI-grounding development from a weakly grounded base model through data preparation, visual training, and verifiable rewards.
- [Trifuse: Enhancing Attention-Based GUI Grounding via Multimodal Fusion](https://awesomecua.com/resources/arxiv-2602-06351/) — 2026-02-06
  Trifuse combines attention-based localization with OCR text cues and icon captions to ground GUI instructions. Its fusion procedure favors cross-modal agreement and sharp location peaks, and is evaluated without task-specific fine-tuning.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.com/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [SafeGround: Know When to Trust GUI Grounding Models via Uncertainty Calibration](https://awesomecua.com/resources/arxiv-2602-02419/) — 2026-02-02
  Introduces SafeGround, which estimates GUI-grounding uncertainty from the spatial dispersion of sampled predictions and calibrates a decision threshold before testing. It studies risk-aware selection on ScreenSpot-Pro, with statistical control scoped to the threshold’s false-discovery rate.
- [ToolTok: Tool Tokenization for Efficient and Generalizable GUI Agents](https://awesomecua.com/resources/arxiv-2602-02548/) — 2026-01-30
  ToolTok represents GUI operations with learned tool tokens and frames interaction as progressive tool selection. Semantic anchoring and an easy-to-hard curriculum teach tool meanings before visual pathfinding, with evaluation across grounding scenarios.
- [Continual GUI Agents](https://awesomecua.com/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [OmegaUse: Building a General-Purpose GUI Agent for Autonomous Task Execution](https://awesomecua.com/resources/arxiv-2601-20380/) — 2026-01-28
  OmegaUse combines exploratory and taxonomy-guided data synthesis with supervised fine-tuning followed by GRPO for GUI control. The report introduces OS-Nav for offline Android and Ubuntu evaluation alongside established grounding and action-prediction benchmarks.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.com/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [GUIGuard-Bench: Toward a General Evaluation for Privacy-Preserving GUI Agents](https://awesomecua.com/resources/arxiv-2601-18842/) — 2026-01-26
  Introduces GUIGuard-Bench, which annotates private regions in GUI trajectories with categories, risk levels, and relevance to the user’s task. It evaluates privacy recognition and the effect of screenshot protection on offline planning and task utility.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.com/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [GUI-Eyes: Tool-Augmented Perception for Visual Grounding in GUI Agents](https://awesomecua.com/resources/arxiv-2601-09770/) — 2026-01-14
  GUI-Eyes trains GUI grounders to decide when and how to use visual tools such as crops and zooms. Its coarse-to-fine policy uses dense spatial rewards based on location proximity and region overlap, with evaluation on ScreenSpot-Pro.
- [FocusUI: Efficient UI Grounding via Position-Preserving Visual Token Selection](https://awesomecua.com/resources/arxiv-2601-03928/) — 2026-01-07
  FocusUI selects instruction-relevant screenshot patches while preserving their positional structure for GUI grounding. Its PosPad scheme replaces runs of dropped tokens with positional markers and is evaluated under reduced token budgets.
- [Trace2Ground: Scenario, Disambiguation, and Relation Traces for Web GUI Grounding](https://awesomecua.com/resources/url-8b87df7992bc7b4da1a5/) — 2026
  Trace2Ground builds a web GUI grounding dataset from HTML/DOM elements and simulated traces, testing scenario, duplicate-label, and relational instructions.
- [Look Where You’re Told: Instruction-Consistent Attention for GUI Grounding](https://awesomecua.com/resources/url-3a73f9fc424ca9fe170e/) — 2026
  Attention Cycle-Consistency trains GUI element grounding with semantic and spatial alignment constraints, while removing its auxiliary components at inference.
- [Do GUI Grounders Truly Understand UI Elements?](https://awesomecua.com/resources/url-16f4a8903de0f90d3638/) — 2026
  A desktop GUI grounding benchmark tests whether models identify the same element across varied descriptions; a diagnosis agent generates difficult instructions using model feedback.
- [ShowUI-$π$: Flow-based Generative Models as GUI Dexterous Hands](https://awesomecua.com/resources/arxiv-2512-24965/) — 2025-12-31
  Models discrete clicks and continuous drags with flow-based action generation, and introduces drag trajectories and the ScreenDrag benchmark.
- [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://awesomecua.com/resources/arxiv-2512-22009/) — 2025-12-26
  Introduces iSHIFT, which combines latent reasoning with perception-control tokens to adapt GUI inference. The agent switches between detailed regional grounding and faster use of global visual cues.
- [DAVE: A VLM Vision Encoder for Document Understanding and Web Agents](https://awesomecua.com/resources/arxiv-2512-17221/) — 2025-12-19
  DAVE trains a vision encoder for document images and web agents using self-supervised pretraining followed by supervised parsing and localization. It combines decoder-specific encoder merging with feature fusion and evaluates web localization and agent benchmarks alongside document tasks.
- [VenusBench-GD: A Comprehensive Multi-Platform GUI Benchmark for Diverse Grounding Tasks](https://awesomecua.com/resources/arxiv-2512-16501/) — 2025-12-18
  VenusBench-GD is a bilingual, cross-platform GUI grounding benchmark organized into basic and advanced tasks. Its annotation pipeline and six-subtask taxonomy support comparisons of general multimodal models and GUI-specialized models across different grounding demands.
- [A Survey on Benchmarks of LLM-based GUI Agents](https://awesomecua.com/resources/url-e1842006eb7b4745da03/) — 2025-12-16
  Surveys LLM-based GUI agent benchmarks in three task tiers (grounding and QA, multi-step navigation, open-world environments), comparing their datasets, environments and metrics, and outlines open evaluation gaps.
- [MVP: Multiple View Prediction Improves GUI Grounding](https://awesomecua.com/resources/arxiv-2512-08529/) — 2025-12-09
  MVP addresses unstable GUI coordinates by predicting across several attention-guided cropped views. It clusters the resulting coordinates and selects the densest cluster centroid, evaluating this training-free inference method across grounding models.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.com/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [Chain-of-Ground: Improving GUI Grounding via Iterative Reasoning and Reference Feedback](https://awesomecua.com/resources/arxiv-2512-01979/) — 2025-12-01
  Chain-of-Ground uses iterative visual reasoning and reference feedback to refine GUI localization without additional training. It evaluates on ScreenSpot-Pro and introduces TPanel-UI to probe grounding on industrial control panels with visual distortions.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.com/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [AFRAgent : An Adaptive Feature Renormalization Based High Resolution Aware GUI agent](https://awesomecua.com/resources/arxiv-2512-00846/) — 2025-11-30
  Introduces AFRAgent, which uses adaptive feature renormalization to combine low-resolution visual embeddings with high-resolution details. The architecture is evaluated for smartphone GUI automation on Meta-GUI and AITW.
- [Prune4Web: DOM Tree Pruning Programming for Web Agent](https://awesomecua.com/resources/arxiv-2511-21398/) — 2025-11-26
  Introduces Prune4Web, where generated scoring programs filter DOM elements according to decomposed subtasks before grounding. An annotation pipeline and two-turn training procedure coordinate the planner, programmatic filter and grounder.
- [MEGA-GUI: Multi-stage Enhanced Grounding Agents for GUI Elements](https://awesomecua.com/resources/arxiv-2511-13087/) — 2025-11-17
  Introduces MEGA-GUI, which separates coarse region selection from fine-grained interface-element grounding. Bidirectional zooming and context-aware instruction rewriting coordinate specialized vision-language agents across visual scales.
- [Co-EPG: A Framework for Co-Evolution of Planning and Grounding in Autonomous GUI Agents](https://awesomecua.com/resources/arxiv-2511-10705/) — 2025-11-13
  Co-EPG alternates reinforcement learning for a planner with updates to a grounding model using generated training examples. The evolving grounder provides feedback to the planner, and evaluation uses Multimodal Mind2Web and AndroidControl.
- [An Efficient Training Pipeline for Reasoning Graphical User Interface Agents](https://awesomecua.com/resources/arxiv-2511-08172/) — 2025-11-11
  A GUI grounding pipeline filters 4.8M synthetic examples to 12K training instances and adapts a 3B vision-language model, evaluated on ScreenSpot, Multimodal-Mind2Web, and AndroidControl.
- [Grounding Computer Use Agents on Human Demonstrations](https://awesomecua.com/resources/arxiv-2511-07332/) — 2025-11-10
  GroundCUA turns expert desktop demonstrations into densely annotated screenshots and grounding instructions. The GroundNext model family uses this supervision and subsequent reinforcement learning, with both grounding benchmarks and an OSWorld agent configuration used for evaluation.
- [AUTO-Explorer: Automated Data Collection for GUI Agent](https://awesomecua.com/resources/arxiv-2511-06417/) — 2025-11-09
  Introduces Auto-Explorer, an automated GUI exploration method that records software states for training-data collection. UIXplore evaluates exploration coverage, and collected data is used to fine-tune and test GUI element grounding.
- [Beyond Clicking:A Step Towards Generalist GUI Grounding via Text Dragging](https://awesomecua.com/resources/arxiv-2601-06031/) — 2025-11-07
  GUI-Drag provides synthesized text-dragging examples, while ScreenDrag benchmarks selecting text by dragging across varied GUI contexts.
- [GUI-360$^\circ$: A Comprehensive Dataset and Benchmark for Computer-Using Agents](https://awesomecua.com/resources/arxiv-2511-04307/) — 2025-11-06
  Collects Windows application trajectories with screenshots and action traces for grounding, screen parsing, and action prediction.
- [GUI-AIMA: Aligning Intrinsic Multimodal Attention with a Context Anchor for GUI Grounding](https://awesomecua.com/resources/arxiv-2511-00810/) — 2025-11-02
  Introduces GUI-AIMA, which supervises instruction-relevant attention over visual patches instead of directly training coordinate text generation. Patch-level grounding can be combined with an optional zoom stage and is evaluated across GUI localization benchmarks.
- [UI-Hawk: Unleashing the Screen Stream Understanding for Mobile GUI Agents](https://awesomecua.com/resources/url-9113270916a36b4b76f1/) — 2025-11
  Mobile GUI agent whose history-aware visual encoder reads earlier screenshots with the current one, trained by a curriculum from grounding, referring, screen QA and summarization to navigation; adds the FunUI benchmark.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.com/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [Mixing Importance with Diversity: Joint Optimization for KV Cache Compression in Large Vision-Language Models](https://awesomecua.com/resources/arxiv-2510-20707/) — 2025-10-23
  MixKV compresses vision-language model KV caches by balancing importance and diversity; its evaluations include GUI grounding alongside broader multimodal tasks.
- [UI-Ins: Enhancing GUI Grounding with Multi-Perspective Instruction-as-Reasoning](https://awesomecua.com/resources/arxiv-2510-20286/) — 2025-10-23
  Treats alternative instruction formulations as reasoning paths and trains GUI-grounding models to select and combine useful perspectives.
- [AndroidControl-Curated: Revealing the True Potential of GUI Agents through Benchmark Purification](https://awesomecua.com/resources/arxiv-2510-18488/) — 2025-10-21
  AndroidControl-Curated audits ambiguities and factual errors in AndroidControl and produces a refined evaluation dataset. The paper also studies post-training a small Magma-R1 model on a curated subset to examine the effect of data quality on GUI action assessment.
- [Detect Anything via Next Point Prediction](https://awesomecua.com/resources/arxiv-2510-12798/) — 2025-10-14
  Introduces Rex-Omni, a general visual perception model trained for coordinate prediction; GUI grounding is one capability evaluated alongside detection and OCR.
- [\textsc{GUI-Spotlight}: Adaptive Iterative Focus Refinement for Enhanced GUI Visual Grounding](https://awesomecua.com/resources/arxiv-2510-04039/) — 2025-10-05
  GUI-Spotlight trains a grounding model to reason over images and call tools that iteratively narrow its visual focus. The paper evaluates this refinement method on ScreenSpot-Pro after training on 18,500 samples.
- [Improving GUI Grounding with Explicit Position-to-Coordinate Mapping](https://awesomecua.com/resources/arxiv-2510-03230/) — 2025-10-03
  This work addresses GUI localization errors caused by mismatches between visual patch positions and output pixel coordinates. RULER tokens provide explicit coordinate references, while Interleaved MRoPE balances width and height encoding; evaluation uses the ScreenSpot benchmark family.
- [Ferret-UI Lite: Lessons from Building Small On-Device GUI Agents](https://awesomecua.com/resources/arxiv-2509-26539/) — 2025-09-30
  Ferret-UI Lite develops a 3B GUI agent using mixed real and synthetic data, reasoning with visual tools at inference, and reinforcement learning. It evaluates grounding and navigation across mobile, web, and desktop settings, including AndroidWorld and OSWorld.
- [Generalist Scanner Meets Specialist Locator: A Synergistic Coarse-to-Fine Framework for Robust GUI Grounding](https://awesomecua.com/resources/arxiv-2509-24133/) — 2025-09-29
  GMS pairs a general vision-language scanner that proposes interface regions with a specialist locator that predicts coordinates within them. Hierarchical coarse-to-fine search coordinates the two components for GUI grounding on ScreenSpot-Pro.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.com/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.com/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [BTL-UI: Blink-Think-Link Reasoning Model for GUI Agent](https://awesomecua.com/resources/arxiv-2509-15566/) — 2025-09-19
  BTL-UI separates GUI interaction into screen-region attention, planning and executable-command generation. It adds an automated annotation pipeline and rule-based process/outcome rewards for training, with evaluation on both static understanding and dynamic interaction.
- [GUI-ARP: Enhancing Grounding with Adaptive Region Perception for GUI Agents](https://awesomecua.com/resources/arxiv-2509-15532/) — 2025-09-19
  GUI-ARP uses visual attention to crop relevant screenshot regions and decides whether a target needs single-stage or multi-stage analysis. Supervised fine-tuning followed by GRPO trains this adaptive procedure for high-resolution GUI grounding.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.com/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [How Auxiliary Reasoning Unleashes GUI Grounding in VLMs](https://awesomecua.com/resources/arxiv-2509-11548/) — 2025-09-15
  Studies the gap between latent visual grounding and explicit coordinate output in general vision-language models. Three zero-shot methods add axes, grids, or labeled intersections to GUI screenshots so models can express spatial locations without fine-tuning.
- [SparkUI-Parser: Enhancing GUI Perception with Robust Grounding and Parsing](https://awesomecua.com/resources/arxiv-2509-04908/) — 2025-09-05
  Introduces SparkUI-Parser, which adds continuous coordinate decoding and a rejection mechanism for nonexistent targets to a multimodal model. It also presents ScreenParse for evaluating structural interface perception.
- [Learning Active Perception via Self-Evolving Preference Optimization for GUI Grounding](https://awesomecua.com/resources/arxiv-2509-04243/) — 2025-09-04
  LASER builds preference data for multi-step GUI perception by combining Monte Carlo quality estimates with region-overlap evaluation. Its self-evolving training encourages relevant region selection and adapts the amount of reasoning before predicting screen coordinates.
- [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.com/resources/arxiv-2509-02444/) — 2025-09-02
  Describes a mobile-agent stack combining region-based coordinate correction, hierarchical task planning, multi-agent voting, and reuse of successful interaction traces.
- [UItron: Foundational GUI Agent with Advanced Perception and Planning](https://awesomecua.com/resources/arxiv-2508-21767/) — 2025-08-29
  UItron combines GUI perception and planning data engineering with supervised training and curriculum reinforcement learning in connected mobile and PC environments. It also collects more than one million operation steps across 100 Chinese apps and builds offline and online evaluation environments.
- [SWIRL: A Staged Workflow for Interleaved Reinforcement Learning in Mobile GUI Control](https://awesomecua.com/resources/arxiv-2508-20018/) — 2025-08-27
  Introduces SWIRL, staged interleaved RL for mobile GUI control, pairing a Navigator that plans from screens and language with an Interactor that produces actions.
- [DashboardQA: Benchmarking Multimodal Agents for Question Answering on Interactive Dashboards](https://awesomecua.com/resources/arxiv-2508-17398/) — 2025-08-24
  Introduces DashboardQA to evaluate how vision-language GUI agents answer questions by interacting with dashboards, grounding elements, and planning actions.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.com/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [WebMMU: A Benchmark for Multimodal Multilingual Website Understanding and Code Generation](https://awesomecua.com/resources/arxiv-2508-16763/) — 2025-08-22
  Introduces WebMMU, a multilingual benchmark for website visual question answering, element grounding, code editing, and mockup-to-code generation.
- [Structuring GUI Elements through Vision Language Models: Towards Action Space Generation](https://awesomecua.com/resources/arxiv-2508-16271/) — 2025-08-22
  Introduces IAML training, which augments coordinate samples to help multimodal models locate GUI elements from screen content and user instructions.
- [V2P: Visual Attention Calibration for GUI Grounding via Background Suppression and Center Peaking](https://awesomecua.com/resources/arxiv-2508-13634/) — 2025-08-19
  V2P trains GUI grounding by suppressing attention to background regions and emphasizing the center of the target element. It represents target importance with size-dependent Gaussian heatmaps and evaluates the contribution of each component on ScreenSpot-v2 and ScreenSpot-Pro.
- [UI-Venus Technical Report: Building High-performance UI Agents with RFT](https://awesomecua.com/resources/arxiv-2508-10833/) — 2025-08-14
  Studies screenshot-based GUI grounding and navigation using curated interaction data, reward design, and reinforcement fine-tuning.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.com/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [InfiGUI-G1: Advancing GUI Grounding with Adaptive Exploration Policy Optimization](https://awesomecua.com/resources/arxiv-2508-05731/) — 2025-08-07
  Uses multiple candidate answers and adaptive exploration rewards to improve spatial and semantic alignment in GUI grounding.
- [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.com/resources/arxiv-2508-05615/) — 2025-08-07
  GUI-RC aggregates multiple grounding predictions into spatial voting grids to choose a consensus region. GUI-RCPO then turns agreement with that region into a reward for test-time policy updates on unlabeled GUI screenshots.
- [GuirlVG: Incentivize GUI Visual Grounding via Empirical Exploration on Reinforcement Learning](https://awesomecua.com/resources/arxiv-2508-04389/) — 2025-08-06
  Introduces GuirlVG, an empirical study of reinforcement fine-tuning for GUI visual grounding. It analyzes training components and adds an adaptive KL-based mechanism to limit reward over-optimization.
- [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.com/resources/arxiv-2508-04037/) — 2025-08-06
  The Self-Evolution Agent combines automatic generation of verifiable computer-use trajectories with step-wise reinforcement learning for long-horizon training. It also describes a model-enhancement procedure that integrates grounding and planning capabilities without an additional training stage.
- [Phi-Ground Tech Report: Advancing Perception in GUI Grounding](https://awesomecua.com/resources/arxiv-2507-23779/) — 2025-07-31
  Reports a GUI-grounding model family and empirical design choices covering source data, perception training, and coordinate prediction.
- [UI-AGILE: Advancing GUI Agents with Effective Reinforcement Learning and Precise Inference-Time Grounding](https://awesomecua.com/resources/arxiv-2507-22025/) — 2025-07-29
  Combines grounding-oriented reward and sampling improvements with inference-time image decomposition and target selection.
- [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.com/resources/arxiv-2507-19478/) — 2025-07-25
  MMBench-GUI evaluates interface understanding, element grounding, task automation, and collaboration across six named desktop, mobile, and web platforms. It introduces the Efficiency-Quality Area metric for examining execution efficiency alongside task quality in online GUI automation.
- [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.com/resources/arxiv-2507-15846/) — 2025-07-21
  GUI-G2 replaces binary grounding rewards with Gaussian point rewards and spatial-coverage rewards. An adaptive variance tied to element dimensions supplies continuous training feedback for targets of different sizes, evaluated on the ScreenSpot benchmark family.
- [A Training-Free, Task-Agnostic Framework for Enhancing MLLM Performance on High-Resolution Images](https://awesomecua.com/resources/arxiv-2507-10202/) — 2025-07-14
  Introduces Extract Candidate then Predict (ECP), a training-free two-stage method for high-resolution images, evaluated partly on 4K GUI grounding.
- [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://awesomecua.com/resources/arxiv-2507-10610/) — 2025-07-13
  Introduces LaSM, a training-free defense that selectively scales attention and MLP components to improve alignment with task-relevant screen regions. It evaluates the approach against pop-up-based GUI injection attacks.
- [VisualTrap: A Stealthy Backdoor Attack on GUI Agents via Visual Grounding Manipulation](https://awesomecua.com/resources/arxiv-2507-06899/) — 2025-07-09
  Studies backdoors that redirect GUI visual grounding even when the task plan is correct. VisualTrap evaluates whether poisoned grounding training transfers to downstream tasks and across web, mobile, and desktop interface settings.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.com/resources/arxiv-2507-05791/) — 2025-07-08
  GTA1 samples multiple action proposals at each GUI step and uses a judge to select among them. A separate grounding model is trained with reinforcement learning to map selected proposals to visual targets, linking planning-time search with click localization.
- [R-VLM: Region-Aware Vision Language Model for Precise GUI Grounding](https://awesomecua.com/resources/arxiv-2507-05673/) — 2025-07-08
  R-VLM localizes GUI elements through zoomed-in region proposals and an intersection-over-union-aware training objective. It evaluates the grounding model on ScreenSpot and AgentStudio and studies its effect on navigation in AITW and Mind2Web.
- [WinSpot: GUI Grounding Benchmark with Multimodal Large Language Models](https://awesomecua.com/resources/url-b5cab56e1a439ca8e524/) — 2025-07
  Introduces WinSpot, a Windows GUI grounding benchmark of 5,000 manually validated coordinate-instruction pairs, built by having multimodal LLMs label raw desktop screenshots without HTML or accessibility trees.
- [ZonUI-3B: A Lightweight Vision-Language Model for Cross-Resolution GUI Grounding](https://awesomecua.com/resources/arxiv-2506-23491/) — 2025-06-30
  ZonUI-3B trains GUI grounding with a curated 24,000-example collection of mobile, desktop, and web screenshots. Its two-stage procedure first learns across platforms and then specializes on high-resolution images, with ablations on data diversity and redundant examples.
- [Learning, Reasoning, Refinement: A Framework for Kahneman's Dual-System Intelligence in GUI Agents](https://awesomecua.com/resources/arxiv-2506-17913/) — 2025-06-22
  CogniGUI combines hierarchical visual parsing of interface elements with a GRPO-based grounding agent that compares alternative interaction paths. Its ScreenSeek benchmark evaluates navigation across applications, changing interface states, and consistency between interfaces.
- [Understanding GUI Agent Localization Biases through Logit Sharpness](https://awesomecua.com/resources/arxiv-2506-15425/) — 2025-06-18
  Introduces a finer-grained taxonomy of GUI localization errors and a logit-based Peak Sharpness Score for analyzing coordinate-prediction uncertainty. A context-aware cropping method refines the visual input without retraining the grounding model.
- [DiMo-GUI: Advancing Test-time Scaling in GUI Grounding via Modality-Aware Visual Reasoning](https://awesomecua.com/resources/arxiv-2507-00008/) — 2025-06-12
  Separates textual and iconic UI elements and iteratively focuses visual regions to refine grounding without additional model training.
- [LPO: Towards Accurate GUI Agent Interaction via Location Preference Optimization](https://awesomecua.com/resources/arxiv-2506-09373/) — 2025-06-11
  Location Preference Optimization uses an information-entropy signal to select interaction regions and a distance-based reward to assess click locations. It trains GUI localization through preference optimization and evaluates both offline grounding and online interaction.
- [UITron-Speech: Towards Automated GUI Agents Based on Speech Instructions](https://awesomecua.com/resources/arxiv-2506-11127/) — 2025-06-10
  Introduces UITron-Speech, which predicts GUI actions from spoken instructions and screenshots. It combines synthetic speech data and mixed-modality training with a training-free grounding refinement step.
- [MiMo-VL Technical Report](https://awesomecua.com/resources/arxiv-2506-03569/) — 2025-06-04
  Reports MiMo-VL-7B-SFT and MiMo-VL-7B-RL, general vision-language models trained with staged pre-training and mixed RL, with GUI grounding evaluated on OSWorld-G.
- [GUI-Actor: Coordinate-Free Visual Grounding for GUI Agents](https://awesomecua.com/resources/arxiv-2506-03143/) — 2025-06-03
  Uses an attention-based action head and a verifier to select relevant screen regions without generating coordinates as text.
- [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.com/resources/arxiv-2506-02865/) — 2025-06-03
  Describes Surfer-H, a web agent paired with the Holo1 vision-language model family trained on web content, synthetic examples, and agent-generated data. The work introduces WebClick for web-interface localization and evaluates browser task execution on WebVoyager.
- [Grounded Reinforcement Learning for Visual Reasoning](https://awesomecua.com/resources/arxiv-2505-23678/) — 2025-05-29
  Introduces ViGoRL, a visual reasoning model trained to reference image coordinates and zoom during reasoning; its evaluations include GUI element localization.
- [XBOUND: Exploring Capability Boundaries of Device-Control Agents at the State Level](https://awesomecua.com/resources/arxiv-2505-21279/) — 2025-05-27
  XBOUND evaluates GUI agents at the level of a screen state, considering multiple instructions and possible target actions within it. The study separates action matching from instruction unification and compares effects of grounding and trajectory data.
- [TransBench: Breaking Barriers for Transferable Graphical User Interface Agents in Dynamic Digital Environments](https://awesomecua.com/resources/arxiv-2505-17629/) — 2025-05-23
  Introduces TransBench to evaluate GUI grounding transfer across app versions, iOS, Android, Web, and functionally distinct applications.
- [GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents](https://awesomecua.com/resources/arxiv-2505-15810/) — 2025-05-21
  Analyzes reasoning templates, reward design, and policy updates in GUI grounding, then proposes targeted adjustments to the training process.
- [ReGUIDE: Data Efficient GUI Grounding via Spatial Reasoning and Search](https://awesomecua.com/resources/arxiv-2505-15259/) — 2025-05-21
  Combines self-generated localization reasoning, spatial consistency checks, and inference-time search to improve data-efficient web grounding.
- [Scaling Computer-Use Grounding via User Interface Decomposition and Synthesis](https://awesomecua.com/resources/arxiv-2505-13227/) — 2025-05-19
  Introduces OSWorld-G grounding evaluation and the Jedi synthesis pipeline for examples spanning layout reasoning and fine-grained interaction.
- [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-12493/) — 2025-05-18
  GUI-Shift trains an inverse-dynamics task that predicts the initial action connecting two GUI states, using trajectories without natural-language instructions. It combines rule-based reinforcement learning with data filtering and evaluates transfer to Android automation and screenshot grounding.
- [Enhancing Visual Grounding for GUI Agents via Self-Evolutionary Reinforcement Learning](https://awesomecua.com/resources/arxiv-2505-12370/) — 2025-05-18
  Proposes GUI grounding training that combines curated seed examples, continuous location-dependent policy feedback, and iterative refinement guided by attention maps. The study evaluates the resulting reinforcement-learning procedure on three grounding benchmarks, including ScreenSpot-Pro.
- [Leveraging Vision-Language Models for Visual Grounding and Analysis of Automotive UI](https://awesomecua.com/resources/arxiv-2505-05895/) — 2025-05-09
  Introduces AutomotiveUI-Bench-4K and a fine-tuned vision-language model for locating elements and evaluating automotive infotainment interfaces.
- [Grounding Multimodal Large Language Model in GUI World](https://awesomecua.com/resources/url-dca82e9214c5926109f1/) — 2025-05-01
  Trains a 0.4B SAM-initialized GUI grounding model on 0.5M auto-collected web screenshots with 35M element annotations, then links it to a Qwen-VL planner through a position token for MiniWob, AITW and Mind2Web.
- [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.com/resources/arxiv-2505-00684/) — 2025-05-01
  RegionFocus adds visual test-time scaling by zooming into selected screenshot regions and maintaining an image-based map of landmarks and actions. It evaluates this grounding procedure with UI-TARS and Qwen2.5-VL on ScreenSpot-Pro and WebVoyager.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.com/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.com/resources/arxiv-2504-16419/) — 2025-04-23
  Introduces PixelWeb, a webpage GUI dataset with element images, contours, and pixel masks. Its annotation pipeline combines bitmap channel information with DOM-based visibility and stacking analysis to address occlusion and overlapping elements.
- [Guiding VLM Agents with Process Rewards at Inference Time for GUI Navigation](https://awesomecua.com/resources/arxiv-2504-16073/) — 2025-04-22
  Guides visual GUI agents at inference time with a process-reward model that evaluates intermediate actions. It combines stepwise guidance with trajectory reflection and retry mechanisms in static and interactive navigation tasks.
- [TongUI: Internet-Scale Trajectories from Multimodal Web Tutorials for Generalized GUI Agents](https://awesomecua.com/resources/arxiv-2504-12679/) — 2025-04-17
  TongUI converts multimodal online tutorials, including videos and articles, into GUI-agent trajectories. Its GUI-Net dataset contains 143,000 trajectories spanning five operating systems and more than 200 applications, and supports fine-tuning for grounding and navigation.
- [UI-E2I-Synth: Advancing GUI Grounding with Large-Scale Instruction Synthesis](https://awesomecua.com/resources/arxiv-2504-11257/) — 2025-04-15
  UI-E2I-Synth uses GPT-4o to synthesize GUI grounding instructions with varied complexity, addressing small elements, imbalanced element types, and implicit requests. The accompanying UI-I2E-Bench evaluates instruction-to-element localization across these annotation challenges.
- [GUI-R1 : A Generalist R1-Style Vision-Language Action Model For GUI Agents](https://awesomecua.com/resources/arxiv-2504-10458/) — 2025-04-14
  Applies reinforcement fine-tuning with unified action rules and curated cross-platform examples to vision-language GUI agents.
- [RealWebAssist: A Benchmark for Long-Horizon Web Assistance with Real-World Users](https://awesomecua.com/resources/arxiv-2504-10445/) — 2025-04-14
  RealWebAssist evaluates web assistance through sequences of instructions collected from real users across multiple websites. It tests intent interpretation, user-specific routines, long-term context, and visual grounding when instructions are ambiguous or evolve during interaction.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.com/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.com/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [ScreenSpot-Pro: GUI Grounding for Professional High-Resolution Computer Use](https://awesomecua.com/resources/arxiv-2504-07981/) — 2025-04-04
  Evaluates GUI target localization in high-resolution professional software and studies cascaded visual search to narrow the target region.
- [Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents](https://awesomecua.com/resources/arxiv-2504-00906/) — 2025-04-01
  Combines generalist and specialist models with hierarchical planning and multiple grounding methods for computer-use tasks.
- [UI-R1: Enhancing Efficient Action Prediction of GUI Agents by Reinforcement Learning](https://awesomecua.com/resources/arxiv-2503-21620/) — 2025-03-27
  Uses rule-based action rewards and policy optimization to train GUI action prediction from a compact set of mobile tasks.
- [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.com/resources/arxiv-2503-15661/) — 2025-03-19
  Provides annotated desktop demonstrations for evaluating element grounding, layout grounding, and action prediction.
- [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.com/resources/arxiv-2503-14021/) — 2025-03-18
  Uses specialized graphical, textual, and spatial perception components with a data-collection pipeline to improve GUI understanding.
- [DeskVision: Large Scale Desktop Region Captioning for Advanced GUI Agents](https://awesomecua.com/resources/arxiv-2503-11170/) — 2025-03-14
  Introduces AutoCaptioner, DeskVision, and GUIExplorer for generating desktop region descriptions and training interface-understanding models.
- [Think Twice, Click Once: Enhancing GUI Grounding via Fast and Slow Systems](https://awesomecua.com/resources/arxiv-2503-06470/) — 2025-03-09
  Combines rapid target prediction with deliberate interface analysis, adaptively selecting the grounding process according to task complexity.
- [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.com/resources/arxiv-2503-03196/) — 2025-03-05
  Introduces SpiritSight and GUI-Lasagne data, combining multilevel GUI annotations with visual block parsing for high-resolution interface navigation.
- [Smoothing Grounding and Reasoning for MLLM-Powered GUI Agents with Query-Oriented Pivot Tasks](https://awesomecua.com/resources/arxiv-2503-00401/) — 2025-03-01
  Uses inference of possible user queries from screenshots and target coordinates as a training bridge between GUI grounding and action reasoning.
- [Magma: A Foundation Model for Multimodal AI Agents](https://awesomecua.com/resources/arxiv-2502-13130/) — 2025-02-18
  Introduces Magma, a multimodal agent model trained with labels for clickable GUI elements and video motion traces, and evaluated on UI navigation and robot tasks.
- [TRISHUL: Towards Region Identification and Screen Hierarchy Understanding for Large VLM based GUI Agents](https://awesomecua.com/resources/arxiv-2502-08226/) — 2025-02-12
  Combines hierarchical screen parsing with spatially enriched element descriptions to support both locating GUI targets and describing indicated elements.
- [AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs](https://awesomecua.com/resources/arxiv-2502-01977/) — 2025-02-04
  Infers element functionality from UI changes before and after interaction to produce verified annotations for grounding-model training.
- [WinClick: GUI Grounding with Multimodal Large Language Models](https://awesomecua.com/resources/arxiv-2503-04730/) — 2025-01-27
  Introduces a screenshot-based Windows GUI agent and the WinSpot benchmark for evaluating localization of actionable interface regions.
- [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://awesomecua.com/resources/arxiv-2501-13896/) — 2025-01-23
  Collects environment-specific interaction data through autonomous exploration to adapt grounding models to previously unseen GUIs.
- [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://awesomecua.com/resources/arxiv-2501-12326/) — 2025-01-21
  Studies a screenshot-driven native GUI model with unified actions, deliberate reasoning, and iterative training on interaction traces.
- [InfiGUIAgent: A Multimodal Generalist GUI Agent with Native Reasoning and Reflection](https://awesomecua.com/resources/arxiv-2501-04575/) — 2025-01-08
  Uses staged supervised training to combine GUI understanding and grounding with hierarchical reasoning and expectation-based reflection.
- [INREACT: An Inspire-Then-Reinforce Training Framework For Multimodal GUI Agent](https://awesomecua.com/resources/url-a102be4d98ab5ce068d8/) — 2025
  InReAct trains a multimodal GUI agent with staged curriculum learning and outcome-based reinforcement learning for pixel-level grounding and navigation.
- [Aria-UI: Visual Grounding for GUI Instructions](https://awesomecua.com/resources/arxiv-2412-16256/) — 2024-12-20
  Introduces a vision-based grounding model trained with diverse synthetic instructions and action histories for context-sensitive GUI targeting.
- [Attention-driven GUI Grounding: Leveraging Pretrained Multimodal Large Language Models without Fine-Tuning](https://awesomecua.com/resources/arxiv-2412-10840/) — 2024-12-14
  Locates GUI targets by identifying and aggregating attention maps in pretrained multimodal models without task-specific fine-tuning.
- [WEPO: Web Element Preference Optimization for LLM-based Web Navigation](https://awesomecua.com/resources/arxiv-2412-10742/) — 2024-12-14
  Uses web-element preference optimization with sampled negative HTML elements to align high-level user intent with navigation actions.
- [Iris: Breaking GUI Complexity with Adaptive Focus and Self-Refining](https://awesomecua.com/resources/arxiv-2412-10342/) — 2024-12-13
  Combines information-sensitive image cropping with a learning loop between element description and grounding for complex interface understanding.
- [Aguvis: Unified Pure Vision Agents for Autonomous GUI Interaction](https://awesomecua.com/resources/arxiv-2412-04454/) — 2024-12-05
  Uses screenshots, a unified action space, and staged grounding and reasoning training for cross-platform GUI interaction.
- [Ponder & Press: Advancing Visual GUI Agent towards General Computer Control](https://awesomecua.com/resources/arxiv-2412-01268/) — 2024-12-02
  Separates interpretation of user instructions from precise GUI localization using general-purpose and specialized visual-language components.
- [ShowUI: One Vision-Language-Action Model for GUI Visual Agent](https://awesomecua.com/resources/arxiv-2411-17465/) — 2024-11-26
  Combines visual token selection, interleaved visual-action history, and curated instruction data in a compact GUI action model.
- [Improved GUI Grounding via Iterative Narrowing](https://awesomecua.com/resources/arxiv-2411-13591/) — 2024-11-18
  Uses iterative visual narrowing to improve localization of requested GUI elements with general or specially trained vision-language models.
- [OS-ATLAS: A Foundation Action Model for Generalist GUI Agents](https://awesomecua.com/resources/arxiv-2410-23218/) — 2024-10-30
  Combines cross-platform GUI grounding data synthesis with action-model training to study generalization to unfamiliar interfaces.
- [AutoGLM: Autonomous Foundation Agents for GUIs](https://awesomecua.com/resources/arxiv-2411-00820/) — 2024-10-28
  Presents AutoGLM agents for browser and phone control, separating planning from grounding and training through an evolving interaction curriculum.
- [EDGE: Enhanced Grounded GUI Understanding with Enriched Multi-Granularity Synthetic Data](https://awesomecua.com/resources/arxiv-2410-19461/) — 2024-10-25
  Synthesizes GUI training examples at multiple levels of detail from webpages and studies transfer of learned understanding to other interface environments.
- [Ferret-UI 2: Mastering Universal User Interface Understanding Across Platforms](https://awesomecua.com/resources/arxiv-2410-18967/) — 2024-10-24
  Extends Ferret-UI across device platforms with adaptive visual scaling and synthetic data for referring, grounding, and user-centered UI tasks.
- [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://awesomecua.com/resources/arxiv-2410-13824/) — 2024-10-17
  Builds MultiUI by generating instructions from webpage accessibility trees and pairing them with screenshots for multimodal training. Evaluation examines web-interface understanding, including VisualWebBench and Mind2Web, and transfer to other text-rich visual tasks.
- [ClickAgent: Enhancing UI Location Capabilities of Autonomous Agents](https://awesomecua.com/resources/arxiv-2410-11872/) — 2024-10-09
  Separates multimodal reasoning and action planning from a dedicated UI localization model, with evaluation on Android devices.
- [TinyClick: Single-Turn Agent for Empowering GUI Automation](https://awesomecua.com/resources/arxiv-2410-11871/) — 2024-10-09
  Adapts a compact Florence-2 model to map user instructions to screen coordinates using multitask training and augmented data.
- [Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://awesomecua.com/resources/arxiv-2410-05243/) — 2024-10-07
  Introduces UGround, a visual target-localization model trained with large-scale synthetic references to elements in GUI screenshots.
- [The Impact of Element Ordering on LM Agent Performance](https://awesomecua.com/resources/arxiv-2409-12089/) — 2024-09-18
  Studies how the ordering of UI elements in an agent observation affects web and desktop performance. A pixel-based element detector and dimensionality-reduction ordering are evaluated on OmniACT when document hierarchy is unavailable.
- [Grounded GUI Understanding for Vision-Based Spatial Intelligent Agent: Exemplified by Extended Reality Apps](https://awesomecua.com/resources/arxiv-2409-10811/) — 2024-09-17
  Orienter detects interactable GUI elements in XR applications by interpreting scene context and revisiting candidate elements through a validation and reflection loop. It addresses open-vocabulary element types and context-dependent interactability.
- [From Grounding to Planning: Benchmarking Bottlenecks in Web Agents](https://awesomecua.com/resources/arxiv-2409-01927/) — 2024-09-03
  Separates web-agent planning and grounding evaluations on Mind2Web to analyze which components limit task performance.
- [OmniParser for Pure Vision Based GUI Agent](https://awesomecua.com/resources/arxiv-2408-00203/) — 2024-08-01
  Parses screenshots into interactable regions and semantic element descriptions to support visually grounded agent actions.
- [AMEX: Android Multi-annotation Expo Dataset for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2407-17490/) — 2024-07-03
  Introduces Android screenshots with element locations, functionality descriptions, and instructions linked to sequences of GUI actions.
- [Read Anywhere Pointed: Layout-aware GUI Screen Reading with Tree-of-Lens Grounding](https://awesomecua.com/resources/arxiv-2406-19263/) — 2024-06-27
  Introduces Screen Point-and-Read and a hierarchical layout approach that interprets screen regions indicated by a user-selected point.
- [VGA: Vision GUI Assistant -- Minimizing Hallucinations through Image-Centric Fine-Tuning](https://awesomecua.com/resources/arxiv-2406-14056/) — 2024-06-20
  Uses image-dependent question-answer data and staged fine-tuning to improve GUI comprehension and reduce unsupported visual answers.
- [GUICourse: From General Vision Language Models to Versatile GUI Agents](https://awesomecua.com/resources/arxiv-2406-11317/) — 2024-06-17
  Introduces GUIEnv, GUIAct, and GUIChat datasets to develop OCR, grounding, component knowledge, and interaction abilities in visual-language models.
- [Visual Grounding for User Interfaces](https://awesomecua.com/resources/url-36a7cba41056d46cdcde/) — 2024-06
  Proposes LVG, which detects and grounds the UI element named by a free-form command in an Android screenshot, using layout-guided contrastive learning and synthetic referring expressions generated from Rico screens.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.com/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [Visual Grounding Methods for Efficient Interaction with Desktop Graphical User Interfaces](https://awesomecua.com/resources/arxiv-2407-01558/) — 2024-05-05
  Compares modular OCR-based and end-to-end methods for locating desktop GUI targets from natural-language instructions.
- [GUIDE: Graphical User Interface Data for Execution](https://awesomecua.com/resources/arxiv-2404-16048/) — 2024-04-09
  Introduces annotated website task trajectories with screenshots, prior actions, reasoning, and grounded next actions for process automation.
- [VisualWebBench: How Far Have Multimodal LLMs Evolved in Web Page Understanding and Grounding?](https://awesomecua.com/resources/arxiv-2404-05955/) — 2024-04-09
  Separately evaluates web-page reading, understanding, and element grounding across tasks drawn from real websites.
- [Ferret-UI: Grounded Mobile UI Understanding with Multimodal LLMs](https://awesomecua.com/resources/arxiv-2404-05719/) — 2024-04-08
  Adapts multimodal modeling to mobile interfaces through detailed screen crops, region annotations, and UI reasoning tasks.
- [ReALM: Reference Resolution As Language Modeling](https://awesomecua.com/resources/arxiv-2403-20329/) — 2024-03-29
  Frames conversational and on-screen reference resolution as language modeling, allowing textual representations of screen entities to support user-reference interpretation. Evaluation separately examines on-screen references against an existing resolver and language-model baselines.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.com/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [UI Semantic Group Detection: Grouping UI Elements with Similar Semantics in Mobile Graphical User Interface](https://awesomecua.com/resources/arxiv-2403-04984/) — 2024-03-08
  UISCGD detects semantic groups of adjacent text and non-text UI elements. It learns from Android and iOS screenshots to support interface retrieval, UI-to-code structure and screen-reader accessibility.
- [OmniACT: A Dataset and Benchmark for Enabling Multimodal Generalist Autonomous Agents for Desktop and Web](https://awesomecua.com/resources/arxiv-2402-17553/) — 2024-02-27
  Introduces a dataset and benchmark for generating executable task scripts from screenshots and visually grounded desktop or web instructions.
- [UFO: A UI-Focused Agent for Windows OS Interaction](https://awesomecua.com/resources/arxiv-2402-07939/) — 2024-02-08
  UFO uses two agents to inspect Windows application interfaces and their control metadata, then grounds and executes user requests within and across applications. The study evaluates this UI-focused architecture on nine Windows applications.
- [Dual-View Visual Contextualization for Web Navigation](https://awesomecua.com/resources/arxiv-2402-04476/) — 2024-02-06
  Uses screenshot geometry and visual content to enrich HTML element representations for web navigation. Nearby elements contribute textual and visual context, with evaluation on cross-task, cross-website, and cross-domain Mind2Web splits.
- [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://awesomecua.com/resources/arxiv-2401-13649/) — 2024-01-24
  Introduces visually grounded website tasks for evaluating multimodal agents that must interpret both images and text.
- [SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents](https://awesomecua.com/resources/arxiv-2401-10935/) — 2024-01-17
  Trains a screenshot-driven GUI agent with grounding pretraining and introduces ScreenSpot for evaluating interface target localization.
- [GPT-4V(ision) is a Generalist Web Agent, if Grounded](https://awesomecua.com/resources/arxiv-2401-01614/) — 2024-01-03
  Introduces SeeAct and live-website evaluation, examining how visual planning and element grounding affect web-agent task completion.
- [CogAgent: A Visual Language Model for GUI Agents](https://awesomecua.com/resources/arxiv-2312-08914/) — 2023-12-14
  Introduces a visual-language model with low- and high-resolution image encoders for screenshot understanding and GUI navigation.
- [GPT-4V in Wonderland: Large Multimodal Models for Zero-Shot Smartphone GUI Navigation](https://awesomecua.com/resources/arxiv-2311-07562/) — 2023-11-13
  Studies MM-Navigator, a multimodal agent that interprets smartphone screenshots and predicts localized actions without task-specific training.
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V](https://awesomecua.com/resources/arxiv-2310-11441/) — 2023-10-17
  Overlays labeled image regions to help multimodal models refer to and reason about visual targets; a general visual-prompting method relevant to GUI grounding.
- [ILuvUI: Instruction-tuned LangUage-Vision modeling of UIs from Machine Conversations](https://awesomecua.com/resources/arxiv-2310-04869/) — 2023-10-07
  ILuvUI generates 335,000 conversational training examples paired with UI screenshots, covering questions, descriptions, and plans. The resulting vision-language model is assessed on element detection, response quality, and examples of multi-step UI navigation.
- [Reinforced UI Instruction Grounding: Towards a Generic UI Task Automation API](https://awesomecua.com/resources/arxiv-2310-04716/) — 2023-10-07
  Trains a screenshot-based instruction-grounding model to predict target coordinates, using reinforcement learning to improve spatial decoding.
- [From Pixels to UI Actions: Learning to Follow Instructions via Graphical User Interfaces](https://awesomecua.com/resources/arxiv-2306-00245/) — 2023-05-31
  Studies instruction-following agents that observe screenshots and act through a generic mouse-and-keyboard action space, evaluating pixel-based pretraining for GUI tasks on MiniWoB++.
- [Lexi: Self-Supervised Learning of the UI Language](https://awesomecua.com/resources/arxiv-2301-10165/) — 2023-01-23
  Introduces Lexi and UICaption to learn UI image-text representations from descriptions of interface functionality. Evaluation covers UI action entailment, instruction-based retrieval, referring-expression grounding, and UI entity recognition.
- [UGIF: UI Grounded Instruction Following](https://awesomecua.com/resources/arxiv-2211-07615/) — 2022-11-14
  Introduces multilingual smartphone instruction-following data and a pipeline that retrieves help instructions and maps them to UI actions.
- [Towards Better Semantic Understanding of Mobile Interfaces](https://awesomecua.com/resources/arxiv-2210-02663/) — 2022-10-06
  Augments RICO screens and view hierarchies with human labels for icon shape and meaning and for links between UI elements and text labels. It compares image-only and multimodal models on semantic understanding of previously unseen apps.
- [MUG: Interactive Multimodal Grounding on User Interfaces](https://awesomecua.com/resources/arxiv-2209-15099/) — 2022-09-29
  Studies iterative UI grounding in which users refine or correct an agent's interpretation over multiple conversational turns.
- [Spotlight: Mobile UI Understanding using Vision-Language Models with a Focus](https://awesomecua.com/resources/arxiv-2209-14927/) — 2022-09-29
  Introduces Spotlight, a vision-language model conditioned on a UI screenshot and a selected region of interest. It evaluates screenshot-based mobile UI understanding and explores multitask learning and few-shot prompting.
- [VUT: Versatile UI Transformer for Multi-Modal Multi-Task User Interface Modeling](https://awesomecua.com/resources/arxiv-2112-05692/) — 2021-12-10
  The Versatile UI Transformer jointly models interface screenshots, structure, and language for five UI tasks. Its encoder supports element detection when structural metadata is absent, while an autoregressive component handles UI question answering and command grounding.
- [Understanding Mobile GUI: from Pixel-Words to Screen-Sentences](https://awesomecua.com/resources/arxiv-2105-11941/) — 2021-05-25
  Models mobile screens as atomic text and graphic components whose relationships are learned by a Screen Transformer. The work introduces RICO-PW annotations and evaluates metadata-free screen understanding on relation, clickability, retrieval, and app-classification tasks.
- [Grounding Open-Domain Instructions to Automate Web Support Tasks](https://awesomecua.com/resources/arxiv-2103-16057/) — 2021-03-30
  Introduces RUSS, which translates support instructions into a domain-specific language and grounds them in actionable web elements.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.com/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Widget Captioning: Generating Natural Language Description for Mobile User Interface Elements](https://awesomecua.com/resources/arxiv-2010-04295/) — 2020-10-08
  Introduces crowdsourced descriptions of mobile UI elements and studies multimodal models that generate useful widget captions.
- [Object Detection for Graphical User Interface: Old Fashioned or Deep Learning or a Combination?](https://awesomecua.com/resources/arxiv-2008-05132/) — 2020-08-12
  Compares seven traditional and learned GUI element detectors on more than 50,000 interface images. The analysis motivates a coarse-to-fine non-text detector combined with a learned text detector to address GUI-specific localization requirements.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.com/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.
- [Mapping Natural Language Commands to Web Elements](https://awesomecua.com/resources/arxiv-1808-09132/) — 2018-08-28
  Defines language grounding on webpages as choosing the UI element targeted by a natural-language command. A collection of more than 50,000 commands and three baseline models study functional references, relationships between elements, and visual position cues.
- [APPINITE: A Multi-Modal Interface for Specifying Data Descriptions in Programming by Demonstration Using Natural Language Instructions](https://awesomecua.com/resources/url-ba2c664c1b3c6f1b172f/) — 2018
  Introduces APPINITE, a conversational interface for specifying the intended targets of demonstrated Android actions. It constructs semantic UI representations and uses an on-screen overlay to preview and refine executable data descriptions.
- [GUI Testing Using Computer Vision](https://awesomecua.com/resources/url-6262c757080f8838e62c/) — 2010-04
  Presents visual GUI test scripts that use images to specify actions and expected screen feedback. Recording both input events and screenshots can generate tests from demonstrations, supporting unit, regression, and test-driven workflows.
- [Sikuli: Using GUI screenshots for search and automation](https://awesomecua.com/resources/url-a4cdb2ee0d07d3980651/) — 2009-10
  Introduces screenshot-based GUI search and visual scripting, using image patterns to locate interface targets and direct mouse and keyboard events. It evaluates screenshot queries and demonstrates automation and interactive-help tasks.

## 评测基准

- [AndroidControl-Curated](https://awesomecua.com/resources/url-dda8a0f1413a6bc7c26f/) — Date not recorded
  Purified AndroidControl test set that scores predicted clicks against target element boxes and repairs ambiguous or wrong task labels, released as step-level JSON files with screenshot archives.
- [Astra Game Arena](https://awesomecua.com/resources/github-gih10012-astra-game-arena/) — Date not recorded
  Resumable, screen-only computer-use evaluation arena testing whether Codex agents can play locally installed desktop games.
- [AutomotiveUI-Bench-4K](https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/) — Date not recorded
  Offline test set of 998 photos and screenshots of in-vehicle infotainment screens from 15 brands, with 4,208 English annotations for locating UI elements and judging expected results as passed or failed.
- [CAPTCHA Gym](https://awesomecua.com/resources/github-mildchef-muse-captcha-gym/) — Date not recorded
  CAPTCHA Gym is a self-hosted evaluation platform for browser agents featuring controlled reCAPTCHA-style visual challenges and server scoring.
- [CaptchaArena](https://awesomecua.com/resources/github-x0x0x00-captchaarena/) — Date not recorded
  CaptchaArena provides a live server and fine-grained trajectory dataset across 20 interactive CAPTCHA types for evaluating computer-use agents.
- [fast-automation (Plan-Once Ground-Locally)](https://awesomecua.com/resources/github-thedivyanshshukla-plan-once-ground-locally/) — Date not recorded
  Compares plan-once local-grounding web agents against step-by-step ReAct loops across a 200-task benchmark and 2,800 recorded runs.
- [FedGUI](https://awesomecua.com/resources/github-wwh0411-fedgui/) — Date not recorded
  FedGUI benchmarks federated GUI agent training and evaluation across heterogeneous platforms, device types, data sources, and operating systems.
- [FineState-Bench](https://awesomecua.com/resources/github-fengxianji-finestate-bench/) — Date not recorded
  A GUI benchmark for precise state changes across desktop, web, and mobile interfaces, with 2,257 tasks and metrics separating element location from interaction success.
- [Frozen Vision Backbones for GUI Grounding](https://awesomecua.com/resources/github-dhruvraval04-do-frozen-vision-backbones-transfer-to-guis/) — Date not recorded
  Benchmarks dense versus global features across frozen vision backbones for pixel-coordinate GUI grounding.
- [GroundUI-18K](https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/) — Date not recorded
  AgentStudio's full GUI grounding test set: 18,026 instruction and target-box examples on web, desktop and mobile screenshots, pooled from Mind2Web, OmniACT, MoTIF, ScreenSpot and AgentStudio.
- [GroundUI-1K](https://awesomecua.com/resources/url-d86f55753bfea45fe313/) — Date not recorded
  AgentStudio's 1,000-example GUI grounding test set, sampled from GroundUI-18K: web, desktop and mobile screenshots with GPT-4o-recaptioned instructions and target bounding boxes.
- [GUI-Perturbed](https://awesomecua.com/resources/url-7ed70b39ac79f97f8a87/) — Date not recorded
  Step-level web grounding benchmark that re-renders Mind2Web pages with style, zoom and text-size perturbations and pairs each screenshot with a direct or relational instruction and a target box.
- [GUIGuard-Bench evaluation code](https://awesomecua.com/resources/github-shaluoyan523-guiguard-bench/) — Date not recorded
  Evaluation code for GUIGuard-Bench: privacy-region recognition scoring, LLM-judged planning consistency on masked screenshots and click grounding under protection, with a small Android and PC example subset.
- [GUIGuard-Bench public-ladder release](https://awesomecua.com/resources/url-61860953a680776ffe53/) — Date not recorded
  Public-ladder release of GUIGuard-Bench: 121 Android and Linux desktop agent trajectories whose 2,002 screenshots carry region-level privacy labels, for privacy recognition, protected-screen planning and click grounding.
- [jev-click-bench](https://awesomecua.com/resources/github-arthurkatcher-jev-click-bench/) — Date not recorded
  jev-click-bench evaluates Jev 1.14 bounding-box grounding on ScreenSpot-v2 and ScreenSpot-Pro with official scoring and per-click logs.
- [LMMs-Eval](https://awesomecua.com/resources/github-evolvinglmms-lab-lmms-eval/) — Date not recorded
  LMMs-Eval is a standardized evaluation harness for large multimodal models covering GUI grounding, VQA, document, and video benchmarks.
- [MedSPOT](https://awesomecua.com/resources/github-tajamul21-medspot/) — Date not recorded
  A sequential GUI grounding benchmark covering 10 medical imaging applications. It evaluates target localization across multi-step workflows and provides model evaluation scripts.
- [MMBench-GUI](https://awesomecua.com/resources/github-open-compass-mmbench-gui/) — Date not recorded
  Four-level GUI-agent benchmark across six platforms, from content understanding and element grounding to task automation and collaboration, scored with an efficiency-quality area metric.
- [OSWorld GPT-4o-mini Benchmark Evaluation](https://awesomecua.com/resources/github-suraj-ranganath-osworld-gpt4o-mini-benchmark/) — Date not recorded
  Evaluates GPT-4o-mini on OSWorld desktop automation tasks comparing screenshot-only, accessibility-tree, and Set-of-Mark observation modes.
- [OSWorld-G](https://awesomecua.com/resources/github-xlang-ai-osworld-g/) — Date not recorded
  Computer-use grounding benchmark with original and refined instructions, released with the Jedi synthetic data pipeline, a 4-million-example Jedi dataset and Jedi-3B and Jedi-7B models.
- [Pointerbench](https://awesomecua.com/resources/github-warmwindos-pointerbench/) — Date not recorded
  Pointerbench evaluates whether computer-use models can locate instructed targets in screenshots. Its three subsets cover spreadsheets, text, and professional application interfaces.
- [Precision CUA Bench](https://awesomecua.com/resources/github-microsoft-precision-cua-bench/) — Date not recorded
  Evaluation resources for pixel-precise cursor grounding in code editors.
- [Screen Point-and-Read / Tree-of-Lens](https://awesomecua.com/resources/github-ucsb-ai-screen-point-and-read/) — Date not recorded
  Screen-reading benchmark and Tree-of-Lens implementation for interpreting user-indicated regions and their layout context.
- [ScreenSpot](https://awesomecua.com/resources/url-7abb418096432f56c685/) — Date not recorded
  GUI grounding test set of 1,272 screenshot instructions from iOS, Android, macOS, Windows and web interfaces, each labeled with the target element's bounding box.
- [ScreenSpot Pro](https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/) — Date not recorded
  GUI grounding benchmark focused on professional high-resolution interfaces.
- [ScreenSpot v2](https://awesomecua.com/resources/url-bd7214de6d98917c2350/) — Date not recorded
  Second version of the ScreenSpot grounding test set, published by OS-Copilot as separate desktop, mobile and web annotation files with a shared screenshot archive.
- [ScreenSpot-v2 instruction variants](https://awesomecua.com/resources/url-17729e1c532ba7043404/) — Date not recorded
  Instruction variants over ScreenSpot-v2 screenshots that distinguish original commands, explicit actions, target descriptions and impossible operations.
- [showdown-clicks](https://awesomecua.com/resources/url-863cc1744cd5d40418be/) — Date not recorded
  Offline click benchmark from General Agents: 557 human left clicks on macOS screenshots, each with an instruction and the bounding box of valid click locations, scored by whether a predicted point lands inside.
- [UI-I2E-Bench](https://awesomecua.com/resources/url-c08566be0d973ec40c48/) — Date not recorded
  GUI grounding benchmark from UI-E2I-Synth: 1,477 explicit and implicit instructions on mobile, desktop and web screenshots, each paired with a target element's bounding box and element type.
- [Web Context Bench (Python)](https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/) — Date not recorded
  Local-page benchmark comparing six browser representations on token use, factual reading and target-element selection, with deterministic answer scoring.
- [WebClick](https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/) — Date not recorded
  A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.
- [WinDeskGround](https://awesomecua.com/resources/github-zzzhr-1-windeskground/) — Date not recorded
  WinDeskGround benchmarks desktop GUI grounding in multi-window Windows environments with controlled occlusion, scaling, and interference levels.

## 数据集

- [Aguvis stage 1 grounding data](https://awesomecua.com/resources/url-06dd5ac7917c45d48509/) — Date not recorded
  The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.
- [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/) — Date not recorded
  Official Hub release of AMEX: Android app screenshots annotated for interactive-element grounding, screen and element functionality, and instructions with stepwise GUI-action chains.
- [Aria-UI Context-aware Data](https://awesomecua.com/resources/url-07b65dc937756ddff4a1/) — Date not recorded
  Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.
- [Aria-UI Data](https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/) — Date not recorded
  GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.
- [AutoGUI v1 training data](https://awesomecua.com/resources/url-79287058342289aa5d45/) — Date not recorded
  Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.
- [ClawGUI-Eval](https://awesomecua.com/resources/url-e8cea6261ab19611ad23/) — Date not recorded
  GUI grounding evaluation data for six benchmarks, with images, prompts, and prior outputs for an inference, judging, and metrics workflow.
- [Click-100k](https://awesomecua.com/resources/url-bf847949766b2b257d1c/) — Date not recorded
  101,314 screenshot–instruction pairs with target boxes for click grounding, filtered from public GUI grounding sets and tutorial-video frames, packaged with EasyR1 point-prediction prompts.
- [DragOn](https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/) — Date not recorded
  Drag-grounding training and evaluation data pairing each screenshot instruction with start and end boxes, across text highlighting, spreadsheet cells, slide resizing and sliders.
- [duvo-eye-1-evals](https://awesomecua.com/resources/url-dfcb24f23a03e58316cf/) — Date not recorded
  Dataset of per-sample GUI grounding predictions and reference points for public benchmarks, accompanied by a script for rescoring model outputs.
- [FiftyOne GUI Grounding Training Set](https://awesomecua.com/resources/url-f0eac3ad813245645492/) — Date not recorded
  739 GUI screenshots, mostly macOS browser views, labeled with interaction points, action types and per-action task descriptions in a COCO4GUI-based FiftyOne format for element grounding and click prediction.
- [FiftyOne GUI Grounding Training Set with Synthetic Augmentation](https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/) — Date not recorded
  4,036 GUI screenshots, mostly macOS browser views, with interaction keypoints and task descriptions: 739 manually annotated originals plus 3,297 color-vision and reworded-task variants made with a FiftyOne plugin.
- [GroundCUA](https://awesomecua.com/resources/github-servicenow-groundcua/) — Date not recorded
  GroundCUA releases 56,000 desktop screenshots with 3.56M human-verified UI element annotations across 87 applications plus GroundNext models.
- [GroundCUA dataset](https://awesomecua.com/resources/url-f6c88faa4392848f81b6/) — Date not recorded
  Desktop GUI-grounding data from the GroundCUA project: PNG screenshots of 87 applications paired by hash with JSON lists of element boxes, visible text and optional coarse categories.
- [GroundGUI RL Dataset](https://awesomecua.com/resources/url-4e71dc456c4112eed727/) — Date not recorded
  Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.
- [Grounding-Anything-GUI](https://awesomecua.com/resources/url-d1830de02226155ee16d/) — Date not recorded
  The public training archive linked by the Phi-Ground project for its Phi-Ground-Any model.
- [GTA1 cleaned grounding dataset](https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/) — Date not recorded
  Cleaned GUI grounding training data linked by the GTA1 repository, drawn mainly from Aria-UI and OS-Atlas, with samples dropped when the target box does not match an OmniParser-detected element.
- [GUI-360](https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/) — Date not recorded
  Desktop GUI trajectory data supporting multiple interface understanding tasks.
- [GUI-Actor data](https://awesomecua.com/resources/url-66096ad4057a3d3726f5/) — Date not recorded
  A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.
- [GUI-Drag](https://awesomecua.com/resources/url-aa28e1329a52e341d285/) — Date not recorded
  Data for learning text-dragging interactions in graphical interfaces.
- [GUI-Lasagne L1](https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/) — Date not recorded
  The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.
- [GUI-Libra-81K-SFT](https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/) — Date not recorded
  SFT release of GUI-Libra-81K: per-step reasoning traces and coordinate-grounded actions over web and Android screenshots, in JSON annotation files with full, no-reasoning and 1,000-sample variants.
- [GUI-Net-1M](https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUI-Net-Mini](https://awesomecua.com/resources/url-0627940da1b988739f75/) — Date not recorded
  TongUI training mixture: about 143K samples from WikiHow, Baidu Experience and GUI videos plus reprocessed AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI data, as grounding and navigation JSON with screenshots.
- [GUI-R1 data bundle](https://awesomecua.com/resources/url-df680385f18b01a825be/) — Date not recorded
  Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.
- [GUIAct](https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/) — Date not recorded
  Web and Android GUI action-instruction data, with single-step, multi-step and smartphone partitions.
- [GUIChat](https://awesomecua.com/resources/url-edf38d43800be8c955ae/) — Date not recorded
  Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.
- [GUIEnv-local](https://awesomecua.com/resources/url-0af07e00658a430cee6a/) — Date not recorded
  The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.
- [GUIrilla-Task](https://awesomecua.com/resources/url-afe8260e6db2617b72ec/) — Date not recorded
  macOS screenshots paired with generated instructions and a ground-truth click or type action on a labelled element, collected by the GUIrilla accessibility-API crawler in app-disjoint train and test splits.
- [Jedi](https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/) — Date not recorded
  Synthetic GUI grounding data associated with UI decomposition research and the OSWorld-G benchmark.
- [MolmoPoint-GUISyn](https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/) — Date not recorded
  Ai2's synthetic GUI grounding set of about 36K code-rendered desktop, mobile and web screenshots, each with dense element boxes, names and five natural-language intents per element for training pointing models.
- [OpenGVLab/MMBench-GUI](https://awesomecua.com/resources/url-339e28b1f939ae45f9fe/) — Date not recorded
  MMBench-GUI releases annotations and offline images for evaluating interface understanding and grounding within a GUI-agent benchmark spanning desktop, mobile and web platforms.
- [OS-Atlas Data](https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/) — Date not recorded
  GUI grounding pre-training data for OS-Atlas in desktop (Linux, macOS, Windows), mobile and web domains, with element boxes stored as relative left, top, right and bottom ratios.
- [PixelWeb](https://awesomecua.com/resources/url-67ae69986d6408fde468/) — Date not recorded
  PixelWeb releases webpage screenshots, DOM data and element images with masks, contours and boxes in 1K, 10K and 100K collections.
- [RelationGUI & RelationQA](https://awesomecua.com/resources/github-malonghui-relationgui/) — Date not recorded
  RelationGUI provides datasets and training code for explicit spatial, hierarchical, and functional relational understanding in GUI agents.
- [RICO Semantics](https://awesomecua.com/resources/github-google-research-datasets-rico-semantics/) — Date not recorded
  RICO Semantics provides 500,000 human annotations on RICO mobile screens covering icon shapes, semantic roles, and text-element associations.
- [RICO-SCA](https://awesomecua.com/resources/url-72f05843df9bd7ea35af/) — Date not recorded
  A mobile UI dataset pairing screenshots and widget boxes with synthetic captions and view hierarchy data for screen understanding and interface grounding.
- [RICO-ScreenAnnotation](https://awesomecua.com/resources/url-2a4dd75acb6efdeb0e4a/) — Date not recorded
  A standardized Rico screen-annotation dataset pairing mobile screenshots with text about interface elements and their locations. It provides train, validation, and test splits.
- [RICO-WidgetCaptioning](https://awesomecua.com/resources/url-013bb9256ca6ad5188be/) — Date not recorded
  A mobile UI dataset pairing RICO screenshots and widget regions with human-written captions. It includes view hierarchies and train, validation, and test splits.
- [Salesforce Grounding Dataset](https://awesomecua.com/resources/url-1001251b5a7729988118/) — Date not recorded
  GUI grounding set that merges Aria-UI, OmniAct, Widget Caption, UI-Vision and OS-Atlas screenshots into target boxes with action, appearance, function and combined instructions, cited to GTA1.
- [Screen Point-and-Read Data](https://awesomecua.com/resources/url-4b747a376f628e6f9760/) — Date not recorded
  Screen Point-and-Read Data pairs OS, web and mobile screenshots with selected points, annotated regions and corrected captions for layout-aware GUI interpretation.
- [ScreenDrag](https://awesomecua.com/resources/url-fe43af1801032be708cc/) — Date not recorded
  GUI dragging data with screen observations, prior state, and continuous pointer actions, provided as trajectory files and Parquet representations.
- [ScreenParse](https://awesomecua.com/resources/url-98e8a413ddd670214755/) — Date not recorded
  Dense screen-parsing data that labels the visible UI elements of rendered web screenshots with boxes, 55 element classes, text, interactability and reading order, generated by an automated crawl-and-filter pipeline.
- [ScreenRef](https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/) — Date not recorded
  GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.
- [ScreenRef Annotations](https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/) — Date not recorded
  Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.
- [ScreenSpot-Pro data](https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/) — Date not recorded
  High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.
- [ShowUI-web](https://awesomecua.com/resources/url-8933977bb0a57940ed23/) — Date not recorded
  Web-interface grounding examples with instructions, element boxes and points, paired with a separately packaged screenshot archive.
- [ShowUI-π training data](https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [Two-Box Judge GUI Dataset](https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/) — Date not recorded
  Training data for BAMI's local correction model: pairs of cropped GUI screenshots that each highlight one candidate box, with a click command and an automatic label for the box that fits it.
- [UGround V1 Data](https://awesomecua.com/resources/url-c4898ad1bfc049926a63/) — Date not recorded
  Gated web grounding training data for UGround in Web-Hybrid and Web-Direct subsets, with a bounding-box version whose coordinates are normalized to 0-999.
- [UI-AGILE-Data](https://awesomecua.com/resources/url-41abb1b7206689cf5057/) — Date not recorded
  UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.
- [UI-R1 3B training data](https://awesomecua.com/resources/url-7c568d88a472f914d316/) — Date not recorded
  The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.
- [UI-Vision](https://awesomecua.com/resources/url-2c2004baae4669f8169a/) — Date not recorded
  Desktop GUI data for interface understanding and interaction research.
- [UIBert AppSim and RefExp annotations](https://awesomecua.com/resources/github-google-research-datasets-uibert/) — Date not recorded
  Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.
- [UiPad](https://awesomecua.com/resources/url-3ac3ccfb23fe13adf428/) — Date not recorded
  A macOS UI dataset with 352 screens from 63 applications. It pairs screenshots with available accessibility trees and questions about interface elements and click locations.
- [VideoCAD data](https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.
- [VisualWebBench dataset](https://awesomecua.com/resources/url-149769d8bf07b7fbabdc/) — Date not recorded
  Hugging Face dataset release for VisualWebBench spanning seven visual web understanding, OCR, element grounding, and action prediction tasks.
- [Wave UI](https://awesomecua.com/resources/url-0dbb55f127da04d95222/) — Date not recorded
  Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.
- [WaveUI-25k](https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/) — Date not recorded
  A 24,978-example subset of an ~80k UI element collection, pairing screenshots and instructions with target boxes and annotated element names, descriptions, types, OCR, purposes and click expectations.
- [WebChain (original release)](https://awesomecua.com/resources/url-116431f8ea32dbc6d637/) — Date not recorded
  Original WebChain release of human-annotated trajectories on live websites, with raw JSON records, viewport and partial full-page screenshots, and Parquet files for high-level planning and low-level grounding steps.
- [WebChain v2](https://awesomecua.com/resources/url-56f08987cc19b82dc607/) — Date not recorded
  Cleaned v2 release of WebChain's human web trajectories, packaged as trajectory-level and Seed-style sliding-window SFT Parquet with aligned screenshots, plus action metadata and a 150-trace evaluation subset.
- [WebSRC v1.0](https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/) — Date not recorded
  Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.
- [WildGUI](https://awesomecua.com/resources/url-daf52475338f385b9310/) — Date not recorded
  WildGUI release from Video2GUI: per-task JSONL trajectories mined from Internet tutorial videos, with instructions, plans and grounded actions on web, desktop and mobile, plus screenshot shards for parts 1-15.

## 模型

- [AgentCPM-GUI](https://awesomecua.com/resources/github-openbmb-agentcpm-gui/) — Date not recorded
  8B on-device smartphone agent built on MiniCPM-V that operates Chinese and English apps from screenshots, trained with reinforcement fine-tuning and a compact JSON action space.
- [AgentCPM-GUI 8B checkpoint](https://awesomecua.com/resources/url-8ef3985dce697e5feea9/) — Date not recorded
  An eight-billion-parameter MiniCPM-V-based model that consumes smartphone screenshots and predicts compact actions for Chinese and English Android app tasks.
- [Aguvis](https://awesomecua.com/resources/github-xlang-ai-aguvis/) — Date not recorded
  Vision-based GUI agent models with unified action representations.
- [Aria-UI](https://awesomecua.com/resources/github-ariaui-aria-ui/) — Date not recorded
  Mixture-of-experts GUI grounding model with 3.9B activated parameters that can use text or interleaved image history, with released training data and an AndroidWorld agent.
- [Aria-UI context-aware checkpoint](https://awesomecua.com/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
- [Aria-UI/Aria-UI-base](https://awesomecua.com/resources/url-2866edbea80fa34aa684/) — Date not recorded
  Aria-UI/Aria-UI-base is a released GUI grounding checkpoint that maps an instruction and interface image to target coordinates. The card documents history-aware input and inference examples.
- [browserground](https://awesomecua.com/resources/github-renezander030-browserground/) — Date not recorded
  browserground is a compact Qwen3-VL-2B LoRA visual UI-grounding model that maps screenshots and text targets to bounding-box JSON.
- [Claude Computer Use](https://awesomecua.com/resources/url-57f17b7d0c18b2d7c8bf/) — Date not recorded
  Claude tool capability for screenshot-based computer interaction.
- [CogAgent](https://awesomecua.com/resources/github-thudm-cogagent/) — Date not recorded
  Visual language model for GUI understanding and interaction.
- [CogAgent 9B 20241220](https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [CogVLM](https://awesomecua.com/resources/github-thudm-cogvlm/) — Date not recorded
  CogVLM provides official inference and fine-tuning code for the CogVLM vision-language foundation model and the CogAgent GUI agent.
- [CogVLM2](https://awesomecua.com/resources/github-thudm-cogvlm2/) — Date not recorded
  CogVLM2 releases high-resolution image and video vision-language models supporting visual grounding, document reading, and GUI understanding.
- [ColorGUI-32B](https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/) — Date not recorded
  ColorGUI-32B is a mobile GUI action model adapted from Qwen3-VL-32B-Instruct. It reads screenshots and instructions to select actions for a mobile agent runtime.
- [ConClick](https://awesomecua.com/resources/github-zhangruotian-conclick/) — Date not recorded
  ConClick is a GUI grounding model trained with coordinate supervision and target distractor ranking. Its ReClick inference method revisits candidate screen regions before choosing a click.
- [DeskMind Eyes](https://awesomecua.com/resources/github-deskmind-ai-eyes/) — Date not recorded
  DeskMind Eyes is a compact 4B GUI visual grounding model and training recipe for localizing click targets on desktop screenshots.
- [DiMo-GUI](https://awesomecua.com/resources/github-vivo-dimo-gui/) — Date not recorded
  GUI grounding research using modality-aware visual reasoning and test-time scaling.
- [Ferret-UI](https://awesomecua.com/resources/github-apple-ml-ferret/) — Date not recorded
  Screen understanding research within the Ferret model family.
- [Fintor/Fintor-GUI-S2](https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/) — Date not recorded
  Fintor-GUI-S2 is a GUI grounding checkpoint fine-tuned from UI-TARS-7B-DPO on OS-Copilot data. Its card reports ScreenSpot Pro and v2 evaluations.
- [Fuyu-8B](https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/) — Date not recorded
  Adept's decoder-only multimodal base model that feeds image patches straight into the transformer, released for research on digital agents, UI question answering and screen localization.
- [Gelato](https://awesomecua.com/resources/github-mlfoundations-gelato/) — Date not recorded
  Release code for Gelato-30B-A3B, a GUI click-grounding model trained with GRPO on Click-100k: EasyR1 configs, click rewards, grounding evaluation scripts and logs, and a GPT-5-planned OS-World agent harness.
- [Gelato-30B-A3B](https://awesomecua.com/resources/url-46502d87b2c13515790a/) — Date not recorded
  Qwen3-VL-30B-A3B-Instruct checkpoint trained with GRPO on Click-100k that returns one (x,y) click point, normalized to 0–1000, for a screenshot and an element description.
- [Gemini Computer Use](https://awesomecua.com/resources/url-879d4e3e75e83582bde6/) — Date not recorded
  Gemini capability for generating interface actions from screenshots.
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
- [GroundNext-7B-V0](https://awesomecua.com/resources/url-174e10a319d62c338879/) — Date not recorded
  GroundNext GUI-grounding checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct with SFT then RLOO on GroundCUA desktop data; it maps a screenshot and instruction to a computer_use click call.
- [GTA1-7B](https://awesomecua.com/resources/url-fa6761a4612fab664a7c/) — Date not recorded
  Released GUI grounding checkpoint trained with reinforcement learning to predict click coordinates from screenshots and instructions, with inference examples and reported benchmark results.
- [GTA1-7B-2507](https://awesomecua.com/resources/url-691c52679bb1d3521db7/) — Date not recorded
  GTA1-7B-2507 is a GUI-grounding checkpoint trained with reinforcement learning to locate described elements in screenshots and return click coordinates.
- [GUI-Actor](https://awesomecua.com/resources/github-microsoft-gui-actor/) — Date not recorded
  GUI grounding model with attention-based action localization.
- [GUI-Actor 2B Qwen2-VL](https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/) — Date not recorded
  GUI-Actor grounding checkpoint built on Qwen2-VL-2B-Instruct with an attention-based action head that proposes ranked click points for an instruction on a screenshot, without emitting coordinates as text.
- [GUI-Actor 3B Qwen2.5-VL](https://awesomecua.com/resources/url-0c400260635b7e4ab7c0/) — Date not recorded
  GUI-Actor grounding checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct with an attention-based action head, with about 3.8B BF16 parameters and a config naming a pointer variant of the Qwen2.5-VL class, under MIT.
- [GUI-Actor 7B Qwen2-VL](https://awesomecua.com/resources/url-e3e5dd82a3102689c4ea/) — Date not recorded
  GUI-Actor checkpoint fine-tuned from Qwen2-VL-7B-Instruct, with about 8.4B BF16 parameters, whose config names a pointer variant of the Qwen2-VL class rather than the stock one, under MIT.
- [GUI-Actor-7B-Qwen2.5-VL](https://awesomecua.com/resources/url-3e58eecd59c404508757/) — Date not recorded
  A Qwen2.5-VL-7B checkpoint for locating instructed GUI targets in screenshots. Its attention-based action head predicts click points, with inference code shown in the card.
- [GUI-Actor-Verifier-2B](https://awesomecua.com/resources/url-9b653775f6b9270304d3/) — Date not recorded
  A GUI grounding verifier that checks whether a marked screenshot position matches an instruction and provides a score for candidate action positions.
- [GUI-AIMA](https://awesomecua.com/resources/github-sjz5202-gui-aima/) — Date not recorded
  GUI-AIMA aligns intrinsic multimodal attention heads with context anchors for data-efficient visual GUI element grounding.
- [GUI-G1](https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/) — Date not recorded
  GUI-grounding training code that modifies reasoning templates, reward functions, and the GRPO objective, with a linked model release.
- [GUI-G1 3B v1](https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/) — Date not recorded
  A Qwen2.5-VL-3B checkpoint released for R1-style visual grounding experiments, predicting interface target locations from screenshots and instructions.
- [GUI-G2](https://awesomecua.com/resources/github-zju-real-gui-g2/) — Date not recorded
  GUI grounding models at 3B and 7B trained with Gaussian rewards for click proximity to element centers and region coverage, with variance scaled to element size.
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
- [GUI-R1](https://awesomecua.com/resources/github-ritzz-ai-gui-r1/) — Date not recorded
  GUI action-model training and evaluation code with verifiable rewards, plus linked reinforcement-learning data and checkpoints.
- [GUI-R1 checkpoint bundle](https://awesomecua.com/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [GUI-Spotlight](https://awesomecua.com/resources/github-bin123apple-gui-spotlight/) — Date not recorded
  GUI-Spotlight is a think-with-image GUI visual grounding model that iteratively crops and refines focus regions on high-resolution screens.
- [Hcompany/Holo4-35B-A3B-NVFP4](https://awesomecua.com/resources/url-ef732d252e9eb9b04e20/) — Date not recorded
  Holo4-35B-A3B-NVFP4 is an NVFP4 computer-use vision-language checkpoint that consumes screenshots and tool results to request interface actions through an agent harness.
- [Holo Model Family](https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/) — Date not recorded
  H computer-use model family and its release-specific access options.
- [Holo-3.1-35B-A3B-FP8](https://awesomecua.com/resources/url-566bd1469811983951f3/) — Date not recorded
  An FP8 checkpoint in the Holo3.1 vision-language model family for computer-use agents. The card describes web, desktop and mobile tasks and links to deployment guidance.
- [Holo-3.1-35B-A3B-GGUF](https://awesomecua.com/resources/url-ee3a18b51eb44d94a94b/) — Date not recorded
  A quantized Holo3.1 vision-language checkpoint for computer-use agents across web, desktop, and mobile interfaces, with UI grounding and function calling.
- [Holo-3.1-35B-A3B-NVFP4](https://awesomecua.com/resources/url-aeffabf23c16f8cf2139/) — Date not recorded
  Holo-3.1-35B-A3B-NVFP4 is a quantized computer-use vision-language checkpoint for web, desktop and mobile tasks, with function-calling support.
- [Holo1 3B](https://awesomecua.com/resources/url-c491c446a71cac1def66/) — Date not recorded
  The 3B Holo1 action VLM, fine-tuned from Qwen2.5-VL-3B-Instruct to act as policy, UI localizer or answer validator inside the Surfer-H browser agent.
- [Holo1 7B](https://awesomecua.com/resources/url-f35cfcbaeb79663eabeb/) — Date not recorded
  A Qwen2.5-VL-based action model released for the Surfer-H web-agent system, supporting policy, interface-localization and validation roles.
- [Holo1.5 3B](https://awesomecua.com/resources/url-dc20a06c296207ac11a6/) — Date not recorded
  Smallest Holo1.5 checkpoint, fine-tuned from Qwen2.5-VL-3B-Instruct with supervised training then GRPO, for locating interface elements and answering questions about web, desktop and mobile screens.
- [Holo1.5 72B](https://awesomecua.com/resources/url-a8e086f155c278e45c55/) — Date not recorded
  The 72B member of H Company's Holo1.5 series, fine-tuned from Qwen2.5-VL-72B-Instruct for UI element localization and screen question answering on web, desktop and mobile interfaces.
- [Holo1.5 7B](https://awesomecua.com/resources/url-98e5813bceb30104d6c4/) — Date not recorded
  H Company's Qwen2.5-VL-7B-based Holo1.5 checkpoint for locating interface elements and answering questions about screens across web, desktop and mobile, trained with supervised fine-tuning then GRPO.
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
- [inclusionAI/UI-Venus-Navi-7B](https://awesomecua.com/resources/url-6d36e088ada02184c6bc/) — Date not recorded
  A released UI agent checkpoint based on Qwen2.5-VL that takes screenshots and prior actions to predict GUI navigation actions and element locations.
- [Indeed-UI](https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/) — Date not recorded
  A GUI grounding model described for desktop, mobile, and browser interfaces. Its repository provides ScreenSpot-Pro evaluation and zoom-in scripts.
- [InfiGUI-G1](https://awesomecua.com/resources/github-infixai-infigui-g1/) — Date not recorded
  InfiGUI-G1 3B and 7B grounding models trained with Adaptive Exploration Policy Optimization, which samples several candidate answers per pass under an adaptive exploration reward.
- [InfiGUI-G1 7B](https://awesomecua.com/resources/url-d70a755e3b2102f25f34/) — Date not recorded
  A GUI-grounding checkpoint trained with adaptive exploration rewards and multiple candidate answers to improve instruction-to-element alignment.
- [InfiGUI-G1-3B](https://awesomecua.com/resources/url-3888a4042043fb547705/) — Date not recorded
  A GUI grounding checkpoint based on Qwen2.5-VL-3B-Instruct. It uses adaptive exploration training to locate interface elements from an instruction and screen image.
- [InfiGUI-R1 3B](https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [InternVL](https://awesomecua.com/resources/github-opengvlab-internvl/) — Date not recorded
  Official repository for the InternVL open-source multimodal foundation model family supporting high-resolution GUI grounding and visual reasoning.
- [jadechoghari/Ferret-UI-Llama8b](https://awesomecua.com/resources/url-4b66957b9799a9e3decc/) — Date not recorded
  Llama-3-8B variant of Ferret-UI for understanding interface screenshots, answering questions about selected regions and locating elements with bounding boxes.
- [Jedi-3B-1080p](https://awesomecua.com/resources/url-2f2e38f240a36f31b631/) — Date not recorded
  A Qwen2.5-VL-3B-based computer-use grounding checkpoint with an example that predicts mouse-action coordinates from an interface image.
- [Jedi-7B-1080p](https://awesomecua.com/resources/url-75dee6afef81a56ba4b2/) — Date not recorded
  A released model checkpoint for computer-use grounding research, based on Qwen2.5-VL-7B-Instruct. The repository includes weight shards and tokenizer files.
- [KDEGroup/UI-AGILE-3B](https://awesomecua.com/resources/url-642671eabef44827b7de/) — Date not recorded
  A released UI-AGILE checkpoint for GUI grounding, associated with reward design and cropping based resampling during training and image decomposition during inference.
- [Kimi-VL](https://awesomecua.com/resources/github-moonshotai-kimi-vl/) — Date not recorded
  Moonshot AI open-weight MoE vision-language model with 2.8B activated LLM parameters and a native-resolution encoder; its README reports OSWorld, ScreenSpot-Pro and OSWorld-G results for OS-agent use.
- [Kimi-VL-A3B-Thinking-2506](https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/) — Date not recorded
  A multimodal reasoning model with released weights and high-resolution image input. Its authors report GUI grounding evaluations on ScreenSpot-Pro, ScreenSpot-V2 and OSWorld-G.
- [KV-Ground 8B (BaseGuiOwl1.5 0315)](https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/) — Date not recorded
  GUI-grounding checkpoint post-trained from GUI-Owl-1.5-8B-Instruct with SFT and GRPO on cleaned and synthesized high-resolution data, aimed at locating elements in large screenshots.
- [KV-Ground-4B-BaseGuiOwl1.5-0228](https://awesomecua.com/resources/url-709d8b51bbc8d257318f/) — Date not recorded
  A 4B vision-language checkpoint for locating GUI targets in high-resolution images. It is fine-tuned from GUI-Owl-1.5-4B-Instruct with supervised and reward-based post-training.
- [KV-Ground-4B-BaseQw3vl](https://awesomecua.com/resources/url-969eb56a53187cda74c7/) — Date not recorded
  A 4B GUI grounding model for high-resolution screenshots and text instructions, fine-tuned from Qwen3-VL-4B-Instruct with supervised and reward-based training.
- [Magma](https://awesomecua.com/resources/github-microsoft-magma/) — Date not recorded
  Microsoft foundation model for multimodal agents, pretrained with Set-of-Mark and Trace-of-Mark objectives on UI, robotics and video data and fine-tunable for web and mobile UI navigation.
- [MAI-UI 2B](https://awesomecua.com/resources/url-4b6d61ff2c1d6c8e1a23/) — Date not recorded
  A 2B MAI-UI checkpoint in the Qwen3-VL architecture, from a GUI agent family whose training data adds agent-user interaction and MCP tool calls to mobile navigation and grounding.
- [MAI-UI 8B](https://awesomecua.com/resources/url-00b1a3abf9bcb424b264/) — Date not recorded
  A released MAI-UI checkpoint combining mobile GUI actions, agent-user interaction and tool-use-oriented navigation.
- [Mano-P](https://awesomecua.com/resources/github-mininglamp-ai-mano-p/) — Date not recorded
  Mano-P is an open-source GUI vision-language-action model optimized for edge devices and evaluated on OSWorld and Mind2Web.
- [microsoft/OmniParser](https://awesomecua.com/resources/url-b5fb13515d7779218f5d/) — Date not recorded
  Released screen-parsing weights that detect actionable UI regions and caption icons in screenshots, supporting structured screen input for GUI agents.
- [microsoft/Phi-Ground-Any](https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/) — Date not recorded
  A fine-tuned vision model that takes an image and instruction and returns a click point. Its card specifies image resizing and coordinate conversion.
- [Milo-Pointer](https://awesomecua.com/resources/github-chayworks-milo-pointer/) — Date not recorded
  Milo-Pointer uses a 149M on-device text encoder as a fast first-tier router and action selector for mobile phone agents.
- [MiniCPM-GUIDance](https://awesomecua.com/resources/url-73570e699421a5ad04eb/) — Date not recorded
  MiniCPM-V checkpoint released with GUICourse and tuned on its GUIEnv, GUIAct and GUIChat data; card prompts cover next-action generation from a task and action history, and screenshot chat with grounded boxes.
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
- [OpenAI CUA](https://awesomecua.com/resources/url-74eeb7c9fb20674fe6e2/) — Date not recorded
  Computer-using model introduced with the Operator research preview.
- [OpenCUA 32B](https://awesomecua.com/resources/url-ad7f176848fd84de64e2/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.
- [OpenCUA 72B](https://awesomecua.com/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [OpenCUA-7B](https://awesomecua.com/resources/url-2803eda78cff23fb63cc/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that produces desktop actions from screenshots and instructions, using recent screen history for context.
- [OpenCUA-7B-exl2](https://awesomecua.com/resources/url-76f3981d219bb87b4eea/) — Date not recorded
  OpenCUA-7B-exl2 is a 4.5bpw quantized OpenCUA-7B checkpoint for generating computer actions and locating GUI targets from screenshots.
- [Orienter](https://awesomecua.com/resources/url-758f048c78e5c184333c/) — Date not recorded
  Orienter locates interactable elements in extended reality interface screenshots using application context and a detector. The release includes code and a checkpoint.
- [OS-Atlas](https://awesomecua.com/resources/github-os-copilot-os-atlas/) — Date not recorded
  OS-Atlas GUI action models, including grounding bases fine-tuned from InternVL2-4B and Qwen2-VL-7B-Instruct that accept any image size and output 0-1000 relative coordinates.
- [OS-Atlas Base 4B](https://awesomecua.com/resources/url-30c831a1198b9bc2a0f5/) — Date not recorded
  OS-Atlas base checkpoint with about 4.1B parameters, fine-tuned from InternVL2-4B and loaded in Transformers through custom InternVL chat model code.
- [OS-Atlas Base 7B](https://awesomecua.com/resources/url-82a30f45d9e855f423c7/) — Date not recorded
  OS-Atlas base checkpoint fine-tuned from Qwen2-VL-7B-Instruct, using the standard Qwen2-VL architecture in Transformers with about 8.3B BF16 parameters.
- [OS-Atlas Pro 7B](https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/) — Date not recorded
  OS-Atlas action checkpoint fine-tuned from OS-Atlas-Base-7B that reads a screenshot, task and history and writes a thought plus the next basic or user-defined GUI action, in the Qwen2-VL architecture.
- [Phi-Ground](https://awesomecua.com/resources/github-microsoft-phi-ground/) — Date not recorded
  Microsoft GUI grounding models from an empirical study of grounding training, from data collection to model training, released as Phi-Ground-4B-7C with evaluation code.
- [Phi-Ground checkpoint](https://awesomecua.com/resources/url-cee45b940d5fbff3ccca/) — Date not recorded
  Microsoft Phi-Ground GUI grounding checkpoint fine-tuned from Phi-3.5-vision-instruct, shipped as two PyTorch weight shards with custom Phi-3-V configuration and processing code under MIT.
- [Pix2Struct](https://awesomecua.com/resources/github-google-research-pix2struct/) — Date not recorded
  Pix2Struct provides official training and inference code for screenshot-parsing vision-language pretraining across web and mobile UI tasks.
- [POINTS-GUI](https://awesomecua.com/resources/github-tencent-points-gui/) — Date not recorded
  POINTS-GUI-G-8B GUI grounding model, trained from a POINTS-1.5 base without native grounding through a data pipeline that unifies coordinates, filters noise and adds hard cases.
- [POINTS-GUI-G 8B](https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/) — Date not recorded
  A specialized interface-grounding checkpoint that returns normalized point coordinates for a requested element in a screenshot.
- [PTA-1](https://awesomecua.com/resources/url-303e1926b8ff4f60e006/) — Date not recorded
  AskUI's Florence-2-base grounding model of about 270M parameters that returns a bounding box for a described element in a screenshot, intended for low-latency local computer and phone automation.
- [Qwen-CUA](https://awesomecua.com/resources/url-a886fea306211d527701/) — Date not recorded
  Qwen-CUA is a screenshot-based computer-use model that generates grounded keyboard and mouse actions. Its release includes weights and a browser reference runtime.
- [Qwen-GUI checkpoint](https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/) — Date not recorded
  Qwen-VL checkpoint released with GUICourse and tuned on its GUIAct and GUIChat data; the card's demo draws the box and point coordinates it returns, on a 0–1000 grid, onto the input screenshot.
- [Qwen/Qwen3-VL-8B-Instruct](https://awesomecua.com/resources/url-90ae002dbf099d42fabb/) — Date not recorded
  Qwen3-VL-8B-Instruct is a vision-language checkpoint whose card describes PC and mobile GUI operation, including element recognition and tool calls.
- [Qwen2.5-VL-3B-Instruct](https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/) — Date not recorded
  An instruction-tuned vision-language checkpoint that reads visual layouts, localizes points or boxes, and supports computer and phone use. Its card reports screen and mobile-agent evaluations.
- [Qwen2.5-VL-3B-UI-R1-E](https://awesomecua.com/resources/url-72f3737bb5194fd64852/) — Date not recorded
  Qwen2.5-VL-3B-UI-R1-E releases UI-R1-E-3B, a model that predicts click coordinates from interface screenshots and commands, with reported mobile, desktop, and web grounding evaluations.
- [Qwen2.5-VL-7B-Instruct](https://awesomecua.com/resources/url-557edb1d63e8fcfdee12/) — Date not recorded
  Qwen2.5-VL-7B-Instruct releases vision-language weights whose card describes computer and phone use and reports results on screen grounding and mobile-agent benchmarks.
- [Qwen3-VL / Qwen2.5-VL](https://awesomecua.com/resources/github-qwenlm-qwen3-vl/) — Date not recorded
  Official repository for the Qwen-VL vision-language model series supporting native visual GUI grounding, computer use, and mobile navigation.
- [Salesforce/GTA1-32B](https://awesomecua.com/resources/url-5288515eb50aef1e84a2/) — Date not recorded
  A 32B GUI grounding checkpoint trained with GRPO to produce screen actions from tasks and screenshots, with reported results on grounding and desktop agent benchmarks.
- [ScaleCUA 7B](https://awesomecua.com/resources/url-ff7b1873a3eead89607a/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.
- [SeeClick](https://awesomecua.com/resources/github-njucckevin-seeclick/) — Date not recorded
  GUI grounding model trained to locate visual interface elements.
- [SeeClick checkpoint](https://awesomecua.com/resources/url-cfea8a0949472a637990/) — Date not recorded
  The released SeeClick visual grounding checkpoint for mapping an interface screenshot and referring instruction to a point or bounding box.
- [Seed1.5-VL](https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/) — Date not recorded
  ByteDance Seed vision-language foundation model served by API, whose repository provides cookbooks including GUI-agent prompts for computer and mobile use with click, drag, hotkey, typing and scroll actions.
- [Seg2Click Qwen2.5-VL 3B](https://awesomecua.com/resources/url-23ad240757185c6f7eac/) — Date not recorded
  Seg2Click checkpoint based on Qwen2.5-VL-3B with a custom action-mask decoder.
- [Seg2Click Qwen3.5 0.8B](https://awesomecua.com/resources/url-7405463ba56f9a41e79a/) — Date not recorded
  Compact Seg2Click checkpoint with a merged Qwen3.5 backbone and an action-mask decoder.
- [Seg2Click Qwen3.5 2B](https://awesomecua.com/resources/url-fec1c5aa8fd93cb78923/) — Date not recorded
  Seg2Click checkpoint using a 2B Qwen3.5 backbone to predict a mask and select an interface click.
- [Seg2Click Qwen3.5 4B](https://awesomecua.com/resources/url-29588aa5651b5839c045/) — Date not recorded
  Seg2Click checkpoint pairing a 4B Qwen3.5 backbone with pixel-level action-mask prediction.
- [Seg2Click Qwen3.5 9B](https://awesomecua.com/resources/url-826f3753905c5c43bf46/) — Date not recorded
  Seg2Click checkpoint pairing a 9B Qwen3.5 backbone with a decoder for valid GUI click regions.
- [ShowUI](https://awesomecua.com/resources/github-showlab-showui/) — Date not recorded
  Lightweight GUI-agent vision-language-action model from Show Lab and Microsoft, released with UI-guided token selection, training code, the ShowUI-web and ShowUI-desktop datasets and vLLM inference.
- [ShowUI 2B](https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/) — Date not recorded
  ShowUI vision-language-action checkpoint fine-tuned from Qwen2-VL-2B-Instruct, published as a single PyTorch weight file under the MIT license and tagged for GUI agents and computer use.
- [ShowUI-π](https://awesomecua.com/resources/github-showlab-showui-pi/) — Date not recorded
  Vision-language-action model and training code for GUI dragging, with links to checkpoints and continuous-action evaluation data.
- [ShowUI-π checkpoint](https://awesomecua.com/resources/url-f70aa7c95824a8729516/) — Date not recorded
  A compact visual-action checkpoint that predicts continuous GUI drag trajectories from a screenshot and a natural-language instruction.
- [SpiritSight-Agent 8B base](https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/) — Date not recorded
  An InternVL2-based visual GUI checkpoint distributed for grounding and interface navigation, with the publisher recommending task-specific fine-tuning of the base release.
- [SpiritSight-Agent-26B](https://awesomecua.com/resources/url-55be07e942393d43132f/) — Date not recorded
  A 26B vision-based checkpoint for GUI navigation across interface platforms. The release includes model weights and an inference script built around an InternVL2 base model.
- [SpiritSight-Agent-2B](https://awesomecua.com/resources/url-37570eed422d326bfa5a/) — Date not recorded
  A 2B vision-based GUI agent checkpoint for interface navigation across GUI platforms, released with an inference script and base-model information.
- [UGround](https://awesomecua.com/resources/github-osu-nlp-group-uground/) — Date not recorded
  Code, training data and weights for universal visual grounding of GUI elements from screenshots, including Qwen2-VL-based UGround-V1 at 2B, 7B and 72B and offline and online evaluation suites.
- [UGround V1 7B](https://awesomecua.com/resources/url-e554295a7f3f5c9ad0d6/) — Date not recorded
  UGround-V1 checkpoint fine-tuned from Qwen2-VL-7B, with about 8.3B BF16 parameters in the standard Qwen2-VL architecture, provided as safetensors and a PyTorch file under Apache-2.0.
- [UGround-V1-2B](https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/) — Date not recorded
  UGround-V1-2B is a Qwen2-VL-based checkpoint for locating targets in GUI screenshots, with reported evaluations on mobile, desktop, and web screens.
- [UGround-V1-72B](https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/) — Date not recorded
  UGround-V1-72B is a Qwen2-VL-based model for locating targets in GUI screenshots, released with weights and reported evaluations on mobile, desktop, and web screens.
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
- [UI-TARS](https://awesomecua.com/resources/github-bytedance-ui-tars/) — Date not recorded
  Native GUI agent models; UI-TARS-1.5 adds reinforcement-learned reasoning before acting and an open 7B checkpoint, and UI-TARS-2 extends to games, code and tool use.
- [UI-TARS 1.5 7B](https://awesomecua.com/resources/url-4d32ad3682ae2d71c178/) — Date not recorded
  UI-TARS 1.5 GUI-agent checkpoint in the Qwen2.5-VL architecture with about 8.3B parameters stored in FP32, released under Apache-2.0 for English image-text-to-text use in Transformers.
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
- [UI-Venus](https://awesomecua.com/resources/github-inclusionai-ui-venus/) — Date not recorded
  GUI agent model family; UI-Venus-2, at 9B and 27B, acts on mobile, web and desktop in one end-to-end agent, trained with keypoint-based multi-judge task verification.
- [UI-Venus 2 9B](https://awesomecua.com/resources/url-611df37e5f3caa6befd7/) — Date not recorded
  UI-Venus 2 GUI-agent checkpoint fine-tuned from Qwen3.5-9B, with about 9.4B BF16 parameters in the Qwen3.5 multimodal architecture, loaded through Transformers for image-text-to-text.
- [UI-Venus-Navi-72B](https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/) — Date not recorded
  A Qwen2.5-VL-based UI checkpoint for predicting navigation actions and locating interface elements from screenshots, trained with reinforcement fine-tuning.
- [UIX-Qwen2](https://awesomecua.com/resources/url-54997a3c67e54abdf319/) — Date not recorded
  A MultiUI-trained visual-language checkpoint for text-rich webpage understanding and interface tasks.
- [UIX-Qwen2-Mind2Web](https://awesomecua.com/resources/url-592e434848a1514efef0/) — Date not recorded
  UIX-Qwen2 further fine-tuned on the Mind2Web training set; the MultiUI paper evaluates it on predicting the next web action from a screenshot, the task and previous actions.
- [VGA (Vision GUI Assistant)](https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/) — Date not recorded
  Vision GUI Assistant (VGA) provides image-centric fine-tuning code and datasets to reduce hallucinations in vision-language GUI grounding.
- [ZonUI-3B checkpoint](https://awesomecua.com/resources/url-c8c046847f829fea4821/) — Date not recorded
  Qwen2.5-VL-3B-based GUI grounding checkpoint that predicts click locations from screenshots and text instructions across desktop, mobile and web screens.

## 工程与产业

- [Ace](https://awesomecua.com/resources/url-7a35f44787f99834f13e/) — Date not recorded
  General Agents' desktop autopilot, trained on recorded expert behavior, that predicts clicks, keystrokes and other actions from screenshots; its API client ships a macOS controller that executes them.
- [Action-Type-Conditioned Grounding for GUI Agents](https://awesomecua.com/resources/github-aadcha-action-conditioned-gui-agent/) — Date not recorded
  Research code for GUI grounding that predicts an action type and then conditions coordinate prediction on it. It compares six conditioning methods and includes training and evaluation scripts.
- [AdaGround](https://awesomecua.com/resources/github-bcwang-sjtu-adaground/) — Date not recorded
  A training-free GUI grounding framework that adjusts screenshot zoom to target size and checks proposed clicks before accepting or revising them.
- [AdbGPT](https://awesomecua.com/resources/github-sidongfeng-adbgpt/) — Date not recorded
  An Android bug replay agent that extracts action details from written bug reports and uses the current app screen to guide reproduction steps.
- [aegis-desktop](https://awesomecua.com/resources/github-mihneateodorstoica-aegis-desktop/) — Date not recorded
  Extensible Linux-first desktop-control MCP server with pluggable window, input, screenshot, OCR, and policy backends.
- [AeonMind agenthands](https://awesomecua.com/resources/github-aeonmindai-agenthands/) — Date not recorded
  Human-calibrated mouse trajectory and keyboard timing synthesis library for browser and desktop agents.
- [afa-cloud desktop-gui-automation-cua](https://awesomecua.com/resources/github-afa-cloud-desktop-gui-automation-cua/) — Date not recorded
  macOS desktop GUI automation skill built on `cua-driver` combining Accessibility trees with pixel-level fallback.
- [Agent Cursor & GroundSight](https://awesomecua.com/resources/github-dwstar79-agent-cursor/) — Date not recorded
  Accuracy engine for computer-use agents pairing a machine-readable cursor overlay (Agent Cursor) with local visual verification (GroundSight).
- [Agent Desktop Harness (ADH)](https://awesomecua.com/resources/github-xuyw1997-agent-desktop-harness/) — Date not recorded
  Native Windows desktop computer-use and reusable RPA harness exposing CLI, MCP, Python, and C++ interfaces.
- [Agent Lumos](https://awesomecua.com/resources/github-allenai-lumos/) — Date not recorded
  Agent Lumos provides unified training data and modular planning and grounding architectures for open-source language and web agents.
- [agent-vision-toolkit](https://awesomecua.com/resources/github-anionex-agent-vision-toolkit/) — Date not recorded
  Vision toolkit and skill pack equipping text-only LLMs with multi-image reading, UI reconstruction, and GUI automation.
- [Agentic Android](https://awesomecua.com/resources/github-xdope7137-agentic-android/) — Date not recorded
  LLM-powered Android agent over ADB that reads the screen, executes tap/swipe/type actions, and verifies outcomes at each step.
- [AgentOCR](https://awesomecua.com/resources/github-agentmaker-agentocr/) — Date not recorded
  AgentOCR provides compact visual-token and OCR screen compression for accelerating GUI and computer-use agents.
- [AgentQL](https://awesomecua.com/resources/url-8896d44370711136fd54/) — Date not recorded
  Natural-language querying and interaction tools for web interfaces.
- [AgentStudio](https://awesomecua.com/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [AGY Computer Use](https://awesomecua.com/resources/github-orakulzero-agy-computer-use/) — Date not recorded
  AGY Computer Use provides native Windows desktop automation combining UI Automation trees, Set-of-Marks grounding, and background PrintWindow capture.
- [AI Vision (Chrome Screenshot Assistant)](https://awesomecua.com/resources/github-stiwarilbj-ai-vision/) — Date not recorded
  Chrome extension that captures selected webpage regions for Gemini visual analysis, OCR extraction, and contextual Q&A.
- [AIVANE](https://awesomecua.com/resources/github-taiyouqu-aivane/) — Date not recorded
  AIVANE is a cross-platform GUI automation assistant that combines YOLO icon detection, OCR, and multimodal LLMs for desktop control.
- [Andee](https://awesomecua.com/resources/github-kuafuai-andee/) — Date not recorded
  On-device Android agent in one APK that operates any app through an accessibility service, reading an element outline or, when needed, a screenshot with a labelled 8x12 grid, on any OpenAI-compatible model.
- [AndroidWorld-SeeAct-V](https://awesomecua.com/resources/github-boyugou-android-world-seeact-v/) — Date not recorded
  AndroidWorld-SeeAct-V runs a visual Android agent that plans the next action and grounds coordinate actions in screenshots. The repository includes code for AndroidWorld evaluation.
- [annotate-mcp](https://awesomecua.com/resources/github-elainemhr-annotate-mcp/) — Date not recorded
  Model Context Protocol server that injects a drawing and comment overlay into live webpages so coding agents can read visual markup.
- [Anthropic Computer Use for Mac](https://awesomecua.com/resources/github-deedy-mac-computer-use/) — Date not recorded
  Adapts the Anthropic Claude Computer Use reference agent to control a native macOS desktop using PyAutoGUI and cliclick.
- [App Use](https://awesomecua.com/resources/github-erickjtorres-app-use/) — Date not recorded
  App Use is a Python framework that connects LLM agents to Android and iOS mobile applications via Appium and accessibility-tree inspection.
- [argos-eye](https://awesomecua.com/resources/github-xhae123-argos-eye/) — Date not recorded
  argos-eye is a visual grounding skill and tool for Claude Code that resolves natural-language UI targets to verified pixel coordinates.
- [Argus (macOS Vision-AX MCP Plugin)](https://awesomecua.com/resources/github-korisame-argus/) — Date not recorded
  Claude Code MCP plugin providing 40 macOS automation tools with a unified Accessibility, AppleScript, and Vision OCR resolver.
- [ARTEMIS](https://awesomecua.com/resources/github-google-artemis/) — Date not recorded
  ARTEMIS is an Android agent that carries out natural-language tasks across apps. It targets UI elements visually or by index and exposes device runs through an MCP server.
- [AskUI Vision Agent Python SDK](https://awesomecua.com/resources/github-askui-python-sdk/) — Date not recorded
  AskUI Vision Agent Python SDK provides cross-platform visual UI element localization and desktop/mobile automation APIs for AI agents.
- [AURA (Agent-User Remote Automation)](https://awesomecua.com/resources/github-lvusyy-aura/) — Date not recorded
  Closed-loop screenshot-click-verify remote automation framework over MCP for desktop and mobile devices.
- [Auten MCP Server](https://awesomecua.com/resources/github-auten-ai-auten-mcp/) — Date not recorded
  Auten MCP Server gives MCP clients native screen capture, UI element inspection, and mouse/keyboard control across macOS, Windows, and Linux.
- [AutoCua](https://awesomecua.com/resources/github-computeruseagent-autocua/) — Date not recorded
  AutoCua is a multi-agent computer-use orchestration platform for automating end-to-end workflows across macOS, Windows, Linux, Android, and web.
- [AutoGUI code](https://awesomecua.com/resources/github-zjulihongxin-autogui/) — Date not recorded
  AutoGUI's functionality-annotation pipeline (collect, reject, annotate from accessibility-tree changes, verify, generate tasks), with Qwen-VL LoRA fine-tuning and lmms-eval-based grounding evaluation.
- [Autonomous Vision Browser-Use Agent](https://awesomecua.com/resources/github-therealfullmetal55555-browser-use-agent/) — Date not recorded
  Playwright-based vision browser agent featuring loop detection, DOM-plus-screenshot grounding, and per-step token telemetry.
- [autourgos-cua-coordinate-tool](https://awesomecua.com/resources/github-devxjitin-autourgos-cua-coordinate-tool/) — Date not recorded
  Vision-based UI coordinate localization tool for Autourgos computer-use agents.
- [AWorld-RL](https://awesomecua.com/resources/github-inclusionai-agenticlearning/) — Date not recorded
  AWorld-RL collects training projects for agents, including V2P for visual GUI grounding, with codebases, datasets, and checkpoints.
- [Blue Steel](https://awesomecua.com/resources/github-apothic-ai-blue-steel/) — Date not recorded
  Vision-driven browser agent powered by the Camoufox stealth Firefox browser.
- [Bounded Multimodal Desktop GUI Agent](https://awesomecua.com/resources/github-momoyi0929-gui-agent/) — Date not recorded
  Bounded multimodal desktop GUI agent built with LangChain and LangGraph featuring OCR grounding, action safety checks, and Mind2Web/ScreenAgent evals.
- [Browser-Use Vision](https://awesomecua.com/resources/github-raidriar7170-browser-use-vision/) — Date not recorded
  Vision-grounding plugin for browser-use combining Set-of-Mark overlays, Florence-2 detection, and Vision-DOM alignment.
- [BrowserGPT](https://awesomecua.com/resources/github-mayt-browsergpt/) — Date not recorded
  BrowserGPT is a browser automation script that uses GPT-4 to generate Playwright code for navigating and interacting with web pages from natural-language tasks.
- [BRYES (Brain-Eyes)](https://awesomecua.com/resources/github-alvseek-bryes/) — Date not recorded
  BRYES decouples a high-level reasoning planner ('Brain') from swappable visual perception and grounding backends ('Eyes') for computer use.
- [BX Browser](https://awesomecua.com/resources/github-painbaba-bx-browser/) — Date not recorded
  DOM-first, vision-capable autonomous browser agent that plans and executes multi-step web tasks.
- [c-vision (DSH Vision & Computer Use Plugin)](https://awesomecua.com/resources/github-cczzyy-cn-c-vision/) — Date not recorded
  Autonomous vision and computer-use plugin for DeepSeek Harness providing screen capture, OCR, window listing, and GUI input.
- [CanpGrid](https://awesomecua.com/resources/github-yeqi99-canpgrid/) — Date not recorded
  CanpGrid provides an adaptive recursive image grid overlay for progressive coarse-to-fine visual localization by multimodal agents.
- [Cappuccino](https://awesomecua.com/resources/github-gml-fmgroup-cappuccino/) — Date not recorded
  Cappuccino is a pure-vision desktop GUI agent that plans and executes multi-step computer tasks from natural-language instructions.
- [CaptiOCR](https://awesomecua.com/resources/github-carlosacchi-captiocr/) — Date not recorded
  CaptiOCR is a real-time Windows screen region OCR and text extraction tool powered by Tesseract for desktop workflows.
- [CGL (Continual GUI Learning)](https://awesomecua.com/resources/github-skounputer-cgl/) — Date not recorded
  CGL advances continual GUI agent learning across evolving domains via reinforcement fine-tuning without catastrophic forgetting.
- [Claude Computer Use Demo for macOS](https://awesomecua.com/resources/github-pallavag-claude-computer-use-macos/) — Date not recorded
  Runs Anthropic Claude Computer Use directly on macOS without Docker by translating tool calls into native macOS screen capture and input actions.
- [Claude Computer-Use Tools MCP Server](https://awesomecua.com/resources/github-yossifibrahem-computer-use-mcp-server/) — Date not recorded
  Model Context Protocol server replicating Anthropic Claude's built-in computer-use tools (`view`, `click`, `type`, `key`) for any MCP client.
- [clef-use](https://awesomecua.com/resources/github-kotori0919-clef-use/) — Date not recorded
  clef-use is a local computer-use runtime combining structured accessibility, SigLIP2 visual tile grounding, OmniParser, and MCP tools.
- [ClickAgent](https://awesomecua.com/resources/github-samsung-clickagent/) — Date not recorded
  ClickAgent decouples high-level MLLM action reasoning from a specialized UI element localization model for Android task automation.
- [ClickClickClick](https://awesomecua.com/resources/github-instavm-clickclickclick/) — Date not recorded
  ClickClickClick is a framework for autonomous Android and desktop computer use supporting local and cloud vision-language models.
- [Clickyy](https://awesomecua.com/resources/github-jayamitkatariya-clickyyy/) — Date not recorded
  Clickyy is a macOS desktop automation CLI and MCP server combining native Accessibility element targeting with Quartz input simulation.
- [CoAct-1 Implementation](https://awesomecua.com/resources/github-buiilding-coact-1-implementation/) — Date not recorded
  Open-source replication of the CoAct-1 hybrid coding-and-GUI multi-agent architecture evaluated on OSWorld-Verified.
- [COCO4GUI](https://awesomecua.com/resources/github-harpreetsahota204-gui-dataset-creator/) — Date not recorded
  COCO4GUI is an interactive screen capture and bounding-box annotation tool for building COCO-formatted GUI grounding datasets.
- [CODA](https://awesomecua.com/resources/github-openixclab-coda/) — Date not recorded
  CODA coordinates a trainable planner ('Cerebrum') with a grounded GUI executor ('Cerebellum') via decoupled reinforcement learning on ScienceBoard.
- [Codex Computer Use Lab](https://awesomecua.com/resources/github-hqhq1025-codex-computer-use-lab/) — Date not recorded
  Documents and reproduces the macOS Computer Use architecture, SkyLight window capture, and Accessibility action dispatch in the Codex desktop app.
- [Compress2Focus (CCPO)](https://awesomecua.com/resources/github-hithink-research-ccpo/) — Date not recorded
  Compress2Focus (CCPO) implements coordinate compression for multi-turn policy optimization in vision-language GUI agents.
- [Computer Control MCP](https://awesomecua.com/resources/github-ab498-computer-control-mcp/) — Date not recorded
  Computer Control MCP is a zero-dependency Model Context Protocol server providing mouse, keyboard, window, and RapidOCR screen control via PyAutoGUI.
- [Computer Use for macOS](https://awesomecua.com/resources/github-philfung-computer-use/) — Date not recorded
  Native macOS desktop application for running Claude Computer Use with local screen capture and mouse/keyboard actuation.
- [Computer Use Vision (DSH Windows Plugin)](https://awesomecua.com/resources/github-xuanyuanluoxue-computer-use-vision/) — Date not recorded
  Windows desktop visual recognition and simulated input plugin for DeepSeek Harness.
- [Computer-Use-Agent (Windows)](https://awesomecua.com/resources/github-nabhpatodi10-computer-use-agent/) — Date not recorded
  LangGraph-based Windows computer-use agent combining UI Automation tree inspection, OmniParser visual grounding, and human confirmation gates.
- [computer-use-grid](https://awesomecua.com/resources/github-yxdgyxlf-computer-use-grid/) — Date not recorded
  Enhances desktop clicking precision for AI computer-use agents via screenshot grid overlays and iterative zoom refinement.
- [computer-use-plus](https://awesomecua.com/resources/github-ethanout-computer-use-plus/) — Date not recorded
  Low-token, low-latency Windows computer-use MCP server with learned action shortcuts and hybrid UIA/CDP/OCR routing.
- [ComputerMate](https://awesomecua.com/resources/github-one710-computermate/) — Date not recorded
  ComputerMate is a cross-platform Model Context Protocol server granting AI models screen capture, OCR, mouse/keyboard, and shell control.
- [cua_agent](https://awesomecua.com/resources/github-lacassef-computeruse/) — Date not recorded
  cua_agent is a modular Python computer-use framework with OS-agnostic planning, semantic UI grounding, and policy-checked desktop/browser drivers.
- [cuAgent](https://awesomecua.com/resources/github-xhqing-cuagent/) — Date not recorded
  cuAgent is a desktop computer-use agent that operates GUI applications through the open-computer-use Model Context Protocol server.
- [CuaOS](https://awesomecua.com/resources/github-cuaos-cuaos/) — Date not recorded
  CuaOS runs a Qwen3-VL computer-use agent that autonomously controls an Ubuntu virtual desktop inside a local Docker sandbox.
- [Cursor Companion (MacScreenCompanion)](https://awesomecua.com/resources/github-pradyut-das-macscreencompanion/) — Date not recorded
  Native screen-aware macOS AI assistant invoked via hotkey to inspect and act on whatever is currently on screen.
- [Cuse (macOS AI Cursor Agent)](https://awesomecua.com/resources/github-muneebkhan08-cuse/) — Date not recorded
  Cuse is an open-source voice-and-text AI cursor agent for macOS that visually localizes UI controls and executes mouse and keyboard tasks.
- [CyberRaccoon](https://awesomecua.com/resources/github-chaoticpixelio-cyberraccoon/) — Date not recorded
  Non-invasive physical computer-use agent that captures HDMI video and dispatches USB HID mouse and keyboard actions from a Raspberry Pi.
- [DeskCtl (Desktop Control Engine)](https://awesomecua.com/resources/github-mini-mind-deskctl/) — Date not recorded
  Desktop control engine for GUI agents using UIA and AT-SPI accessibility trees as the primary path with visual fallback.
- [DeskMind](https://awesomecua.com/resources/github-deskmind-ai-deskmind/) — Date not recorded
  DeskMind is a local-first macOS computer-use agent that combines accessibility inspection, DeskMind Eyes grounding, and user clarification.
- [Desktop Agent](https://awesomecua.com/resources/github-ruslankoroy-desktop-agent/) — Date not recorded
  Desktop Agent controls a local computer via screenshot grid overlays, OCR text detection, voice commands, and mouse/keyboard execution.
- [desktop-touch-mcp](https://awesomecua.com/resources/github-harusame64-desktop-touch-mcp/) — Date not recorded
  Windows computer-use MCP server that drives desktop applications via semantic discover-then-act UI Automation targeting.
- [Deskwright](https://awesomecua.com/resources/github-tristanmuzzu-deskwright/) — Date not recorded
  Deskwright is a cross-platform desktop automation toolkit for AI agents combining OS accessibility trees with OCR fallback and input control.
- [device-use](https://awesomecua.com/resources/github-labclaw-device-use/) — Date not recorded
  device-use enables AI agents to operate scientific laboratory instruments through their native desktop GUI software without hardware APIs.
- [DSH Mobile GUI Agent](https://awesomecua.com/resources/github-kunjinkao-os-dsh-mobile-gui-agent/) — Date not recorded
  Android Mobile GUI Agent plugin for DeepSeek Harness featuring ADB actuation, iterative screen verification, and error recovery.
- [DSH Phone Agent](https://awesomecua.com/resources/github-sktyou-dsh-phone-agent/) — Date not recorded
  Controls Android phones over LAN via an on-device AccessibilityService app with local OCR, template matching, and GKD ad-skipping rules.
- [dsh-browser-vision](https://awesomecua.com/resources/github-tristan-mcinnis-dsh-browser-vision/) — Date not recorded
  Vision-enabled browser automation plugin for DeepSeek Harness combining Browser-Use actions with page screenshot inspection.
- [dsh-click](https://awesomecua.com/resources/github-perrylink-dsh-click/) — Date not recorded
  Cross-platform native desktop control plugin for DeepSeek Harness supporting screenshots, UI element search, and mouse/keyboard actions.
- [dsh-desktop-automation](https://awesomecua.com/resources/github-junkrat9527-dsh-desktop-automation/) — Date not recorded
  macOS desktop automation plugin for DeepSeek Harness with a closed-loop screenshot-locate-click-verify pipeline.
- [dsh-plugin-midscene](https://awesomecua.com/resources/github-ciky20171114-dsh-plugin-midscene/) — Date not recorded
  Midscene.js-powered visual UI automation plugin for DeepSeek Harness supporting both Android (`android_ui`) and Web (`web_ui`).
- [dsh-vision-click](https://awesomecua.com/resources/github-zdd3143-dsh-vision-click/) — Date not recorded
  Windows computer-use plugin for DeepSeek Harness using offline `Windows.Media.Ocr` text localization and pre/post-click pixel verification.
- [dsh-vision-kit](https://awesomecua.com/resources/github-maopk-dsh-vision-kit/) — Date not recorded
  dsh-vision-kit provides a resident Windows PC Actor combining UI Automation structure, SendInput actuation, and visual grounding for DeepSeek Harness.
- [dsh_omnivision (OmniVision)](https://awesomecua.com/resources/github-xiaozhengdeng-dsh-omnivision/) — Date not recorded
  OmniParser-powered GUI agent plugin for DeepSeek Harness providing screen element detection and desktop mouse/keyboard automation.
- [Dunst (macOS Affordance-Graph MCP)](https://awesomecua.com/resources/github-azerozero-dunst/) — Date not recorded
  Accessibility-first affordance-graph MCP server for macOS combining AX trees, Apple Vision OCR, and computer vision.
- [Enhanced Claude Computer Use for Mac](https://awesomecua.com/resources/github-swilliams9772-mac-computer-use/) — Date not recorded
  Adapts Anthropic Claude Computer Use for native macOS with extended thinking, AppleScript integration, and Retina coordinate scaling.
- [Enikk](https://awesomecua.com/resources/github-gtt116-enikk/) — Date not recorded
  Enikk is an open-source computer-use agent that combines GUI visual control and CLI execution across vision and text-only models.
- [ESP32 iPhone Agent](https://awesomecua.com/resources/github-onehumanbeing-esp32-iphone-agent/) — Date not recorded
  ESP32 iPhone Agent controls unmodified iPhones via Bluetooth HID mouse/keyboard emulation from an ESP32 paired with vision-language screen parsing.
- [Explorer](https://awesomecua.com/resources/github-varnelis-explorer/) — Date not recorded
  A cross-platform GUI automation system with vision-based interactable detection, voice navigation, screen recording, and tools for creating and replaying traces.
- [Fara Browser Automation Agent](https://awesomecua.com/resources/github-pmbstyle-fara-agent/) — Date not recorded
  Local browser automation agent powered by Microsoft's Fara-7B computer-use model via LM Studio or Ollama and Playwright.
- [fara-7b-agent](https://awesomecua.com/resources/github-cobusgreyling-fara-7b-agent/) — Date not recorded
  Minimal, fully local agent harness for running Microsoft's Fara-7B computer-use model on desktop and browser tasks.
- [Fathom](https://awesomecua.com/resources/github-drizzdev-fathom/) — Date not recorded
  Fathom is an execution harness for mobile computer-use agents that translates plain-English goals into grounded actions on iOS and Android.
- [FerrisGrid-CLI](https://awesomecua.com/resources/github-brunov21-ferrisgrid-cli/) — Date not recorded
  FerrisGrid-CLI captures screenshots, maps UI regions to deterministic grid coordinates, and executes constrained desktop actions in Rust.
- [FinalRun](https://awesomecua.com/resources/url-3b99bbbd3480dbc1ec6b/) — Date not recorded
  Android UI agent that prunes interface trees, waits for stable screens, feeds action failures back into its decisions, and takes fresh screenshots before grounding actions.
- [FIVE-UI-Evol](https://awesomecua.com/resources/github-microsoft-five-ui-evol/) — Date not recorded
  Microsoft monorepo for InfiniteWeb website and task-evaluator synthesis, the UI-E2I-Synth grounding evaluation script and UI-I2E-Bench leaderboard, and UI-Evol trajectory-based knowledge refinement.
- [frontprompt](https://awesomecua.com/resources/github-surrealmindai-frontprompt/) — Date not recorded
  Browser-automation MCP server with an interactive visual overlay that lets users annotate webpage elements and dispatch agent tasks.
- [GACUA](https://awesomecua.com/resources/github-openmule-gacua/) — Date not recorded
  GACUA is an out-of-the-box computer-use agent built on Gemini CLI that combines desktop screen control, browser automation, and shell tools.
- [GAZE](https://awesomecua.com/resources/github-kevintrinhdev-gaze/) — Date not recorded
  Vision-first browser controller that observes and drives an already logged-in Chrome window.
- [Genie](https://awesomecua.com/resources/github-vimalmathew26-genie/) — Date not recorded
  Genie is an autonomous Linux desktop agent with 3-tier UI resolution across AT-SPI accessibility trees, Chrome CDP, and VLM vision.
- [GenPark Viewport Occlusion Resolver Skill](https://awesomecua.com/resources/github-alpha-park-genpark-visual-viewport-element-occlusion-resolver-skill/) — Date not recorded
  Agent skill that detects viewport element occlusion and dismisses blocking modals or cookie banners before clicking.
- [Ghost in the Droid](https://awesomecua.com/resources/github-ghost-in-the-droid-android-agent/) — Date not recorded
  Ghost in the Droid is an Android GUI agent that combines accessibility trees, screenshot perception, and ADB/on-device execution.
- [Ghost OS](https://awesomecua.com/resources/github-ghostwright-ghost-os/) — Date not recorded
  Ghost OS is a native macOS MCP server combining accessibility-tree action execution, Vision OCR fallback, and reusable workflow recipes.
- [glassbox](https://awesomecua.com/resources/github-yoyicue-glassbox/) — Date not recorded
  glassbox is an iOS and iPadOS computer-use runtime that drives physical iPhones and iPads from screen observations and hardware/bridge control.
- [GPT-4V-Act](https://awesomecua.com/resources/github-ddupont808-gpt-4v-act/) — Date not recorded
  GPT-4V-Act combines Chromium DOM auto-labeling and Set-of-Mark visual prompting to drive web browser interactions with multimodal LLMs.
- [Grasp MCP](https://awesomecua.com/resources/github-jamshed7470-grasp-mcp/) — Date not recorded
  Model Context Protocol server giving Claude and MCP clients full desktop screen vision and mouse/keyboard control.
- [gridhand](https://awesomecua.com/resources/github-zachrouan-gridhand/) — Date not recorded
  Zero-dependency Rust CLI for cross-platform GUI automation that overlays labeled coordinate grids onto screenshots for deterministic clicking.
- [GroundGUI training and evaluation code](https://awesomecua.com/resources/github-prentisai-groundgui/) — Date not recorded
  Code for screenshot grounding through supervised training, teacher-guided distillation, reinforcement learning, and benchmark evaluation.
- [GUI Agent Framework](https://awesomecua.com/resources/github-sjkncs-gui-agent-framework/) — Date not recorded
  Modular block-based GUI automation framework combining VLM screen perception, LLM planning, Playwright browser control, and desktop actuation.
- [GUI Grounding Evaluation Harness](https://awesomecua.com/resources/github-patrickstarl-gui-grounding-eval/) — Date not recorded
  ScreenSpot-Pro evaluation harness with explicit coordinate transforms, prompt and crop-based inference comparisons, and per-sample grounding accuracy and cost records.
- [GUI Grounding Pre-training Data for SeeClick](https://awesomecua.com/resources/github-chuyg1005-seeclick-crawler/) — Date not recorded
  A SeeClick data collection tool that uses Common Crawl URLs and Selenium to gather web pages and element grounding data for pretraining.
- [GUI Grounding via Iterative Narrowing](https://awesomecua.com/resources/github-ant-8-gui-grounding-via-iterative-narrowing/) — Date not recorded
  Implements training-free iterative visual crop-and-narrow refinement for improving MLLM coordinate grounding on GUI screenshots.
- [GUI Object Detection Benchmark & Models](https://awesomecua.com/resources/github-chenjshnn-object-detection-for-graphical-user-interface/) — Date not recorded
  Provides training and evaluation code comparing classical and deep-learning GUI element detectors alongside the hybrid UIED model.
- [gui-agent](https://awesomecua.com/resources/github-waynchi-gui-agent/) — Date not recorded
  Research code for GUI-agent experiments, accompanied by a trained interface element detector, experiment configurations and prompts.
- [GUI-RC / GUI-RCPO](https://awesomecua.com/resources/github-zju-real-gui-rcpo/) — Date not recorded
  GUI-grounding research code for spatial voting across sampled predictions and test-time policy optimization using region-consistency rewards.
- [GUI-SD](https://awesomecua.com/resources/github-zhangyan-ucas-gui-sd-code/) — Date not recorded
  GUI-SD implements on-policy self-distillation for GUI visual grounding and action prediction using Qwen-VL backbones.
- [GUI-Shift](https://awesomecua.com/resources/github-ubiquitouslearning-gui-shift/) — Date not recorded
  GUI-Shift is a training framework that uses pairs of GUI screenshots to teach vision-language models to predict the action behind an interface transition.
- [gui_agent (FastMCP Desktop Server)](https://awesomecua.com/resources/github-leandre755-gui-agent/) — Date not recorded
  FastMCP server for Linux and Windows desktop computer use providing low-latency screen capture, OCR, and input automation.
- [Guibot](https://awesomecua.com/resources/github-intra2net-guibot/) — Date not recorded
  Guibot is a Python GUI automation library unifying template matching, feature detection, cascade classifiers, OCR, and VNC/PyAutoGUI control.
- [GUIPivot](https://awesomecua.com/resources/github-zrw00-guipivot/) — Date not recorded
  Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.
- [Helix Control](https://awesomecua.com/resources/github-miyahluvgames-source-helix-computer-use/) — Date not recorded
  Windows computer-use MCP stack combining browser control, native desktop UI Automation, and dynamic screen grounding.
- [Helm](https://awesomecua.com/resources/github-tylergibbs1-helm/) — Date not recorded
  Semantic browser automation MCP server providing 27 tools with label-based element resolution and structured page state.
- [Hermes Desktop Control](https://awesomecua.com/resources/github-jiangxiao642-spec-hermes-desktop-control/) — Date not recorded
  Hermes Desktop Control is a runtime-neutral Windows GUI automation engine combining UI Automation trees, Set-of-Mark overlays, and input dispatch.
- [hermes-hyprland-plugin](https://awesomecua.com/resources/github-xcaptain09-hermes-hyprland-plugin/) — Date not recorded
  C++ Hyprland Wayland compositor plugin and Python D-Bus AT-SPI coordinate-fusion bridge for zero-mouse-stealing Linux GUI agents.
- [hfyydd dsh-cua](https://awesomecua.com/resources/github-hfyydd-dsh-cua/) — Date not recorded
  DeepSeek Harness computer-use plugin backed by the `cua-driver` daemon for accessibility-first desktop automation.
- [Hoverclick](https://awesomecua.com/resources/github-neilyysun-ui-hoverclick/) — Date not recorded
  Hoverclick introduces test-time cursor hover verification and visual attention guidance before committing GUI click actions.
- [Human Browser Copilot](https://awesomecua.com/resources/github-officiallemmy254-droid-human-browser-copilot/) — Date not recorded
  Agentic Chrome copilot featuring organic mouse kinematics, visual perception, and natural-language web task execution.
- [Human-Browser](https://awesomecua.com/resources/github-hterzia-human-browser/) — Date not recorded
  Vision-driven browser automation service where an external LLM sets high-level goals and a visual browser assistant executes them.
- [HumanHands](https://awesomecua.com/resources/github-thispc-humanhands/) — Date not recorded
  macOS computer-use agent that combines Accessibility-tree semantics with visual fallback to operate Mac apps like a human.
- [Huzzle Labs](https://awesomecua.com/resources/url-913a72e8929afd96ad07/) — Date not recorded
  Company developing computer-use models, RL environments and evaluations for AI labs and enterprise work. Its site describes the Huzzle World model family.
- [hyprhands](https://awesomecua.com/resources/github-berker-z-hyprhands/) — Date not recorded
  Hyprland Wayland computer-use MCP server giving AI agents semantic and pixel-level desktop control.
- [Inner Coordinates](https://awesomecua.com/resources/github-xiaochu-1208-inner-coordinates/) — Date not recorded
  Reverse-engineers a clickable coordinate and state map of macOS and iPhone applications once for deterministic workflow replay.
- [Intent Browser Runtime (ibr)](https://awesomecua.com/resources/github-hop-top-ibr/) — Date not recorded
  Intent Browser Runtime (ibr) translates natural-language instructions into resilient XPath/DOM actions using Playwright and Vercel AI SDK.
- [iPhone CUA](https://awesomecua.com/resources/github-masone-iphone-cua/) — Date not recorded
  iPhone CUA steers physical iPhones from macOS by pairing an iPhone screen/control bridge with OpenAI Computer-Using Agent models.
- [IrisGUI](https://awesomecua.com/resources/github-black-yt-irisgui/) — Date not recorded
  IrisGUI is a cross-platform desktop GUI agent that perceives screens and automates mouse and keyboard workflows.
- [JasonWei04 dsh-computer-use](https://awesomecua.com/resources/github-jasonwei04-dsh-computer-use/) — Date not recorded
  Equips text-only LLMs in DeepSeek Harness with desktop screen perception and mouse/keyboard control.
- [Jev macOS Loop](https://awesomecua.com/resources/github-jcpsimmons-jev-macos-loop/) — Date not recorded
  Jev macOS Loop combines Apple Silicon local Jev decision models, OmniParser grounding, and native macOS Accessibility actuation.
- [Label Controllers](https://awesomecua.com/resources/github-amywlp-label-controllers/) — Date not recorded
  Label Controllers is a screenshot-to-controls API combining YOLO widget detection and RapidOCR with OpenAI/Anthropic computer-use tool schemas.
- [Larker](https://awesomecua.com/resources/github-qiadastrachen-bit-larker/) — Date not recorded
  Larker is a vision-driven Windows desktop agent that automates GUI clients lacking DOM or Accessibility APIs via VLM grounding.
- [LASSO WebMCP](https://awesomecua.com/resources/github-smkzz-lasso/) — Date not recorded
  AI-assisted dispatch console that turns human visual lasso selections on a webpage into live typed WebMCP capabilities.
- [LegacyBridge](https://awesomecua.com/resources/github-peterhaupt-legacybridge/) — Date not recorded
  Local open-weight LLM agent framework for automating legacy enterprise ERP and business desktop software without APIs.
- [lenovo TianXi_Action_Grounding_7B](https://awesomecua.com/resources/github-ancolie18-lenovo-pcie-grounding/) — Date not recorded
  An evaluation script for running a multimodal GUI grounding model on ScreenSpot-Pro, with options for instruction variants and structured result logs.
- [LibreAutomate](https://awesomecua.com/resources/github-qgindi-libreautomate/) — Date not recorded
  LibreAutomate is a C# script editor and Windows automation library supporting UI Automation, accessibility trees, image matching, and OCR.
- [Lightcone SDK](https://awesomecua.com/resources/github-tzafon-lightcone/) — Date not recorded
  Lightcone is Tzafon's Python and TypeScript SDK for building computer-use agents powered by Northstar GUI vision-language models.
- [Local Computer-Use Agent](https://awesomecua.com/resources/github-storage1n1-local-computer-use-agent/) — Date not recorded
  Offline computer-use agent combining Ollama vision-language models (`qwen3-vl`, `minicpm-v`) with Set-of-Marks grounding and crop-zoom refinement.
- [Local Grounding MCP](https://awesomecua.com/resources/github-archie-ib-dev-local-grounding-mcp/) — Date not recorded
  Local Grounding MCP provides privacy-first local visual grounding fallback and DOM-visual hybrid routing for MCP browser agents on Apple Silicon.
- [look-decide-act](https://awesomecua.com/resources/github-ivanposel-look-decide-act/) — Date not recorded
  Drives live web applications over CDP through a closed-loop visual look-decide-act cycle rather than brittle script replay.
- [Lusipad Browser Agent](https://awesomecua.com/resources/github-lusipad-browser-agent/) — Date not recorded
  Chrome sidebar autonomous AI browser agent featuring visual ROI perception, dual-process fast/slow cognition, and local LLM support.
- [macOS Control CLI](https://awesomecua.com/resources/github-ferdinandl007-macos-control-cli/) — Date not recorded
  macOS Control CLI combines local OmniParser v2 UI element detection with human-like mouse, keyboard, and scroll actuation on macOS.
- [macOS Visual Agent](https://awesomecua.com/resources/github-peakmojo-macos-visual-agent/) — Date not recorded
  macOS Visual Agent inspects native Apple Accessibility trees, detects UI elements, and executes coordinate-accurate clicks on macOS.
- [macos-computer-use](https://awesomecua.com/resources/github-iamme19862002-macos-computer-use/) — Date not recorded
  macos-computer-use is a native Swift CLI toolkit providing 68+ commands for macOS window management, UI element localization, OCR, and input.
- [macOS-Use](https://awesomecua.com/resources/github-jeomon-macos-use/) — Date not recorded
  macOS-Use is a GUI desktop agent that reads the macOS Accessibility tree and executes multi-step application workflows.
- [Magnitude](https://awesomecua.com/resources/github-magnitudedev-browser-agent/) — Date not recorded
  A TypeScript browser-agent framework in which a visually grounded model returns pixel coordinates for mouse and keyboard actions, with act and extract calls, a visual test runner and an MCP server.
- [MAI](https://awesomecua.com/resources/github-fluxaster-mai/) — Date not recorded
  MAI combines MaaFramework with multimodal LLMs in a Planner-Executor-Verifier loop for game and application GUI automation.
- [MAI-UI inference and evaluation code](https://awesomecua.com/resources/github-tongyi-mai-mai-ui/) — Date not recorded
  Published MAI-UI grounding and navigation-agent implementations with inference demos and evaluation scripts.
- [Marey](https://awesomecua.com/resources/github-badalraj9-marey/) — Date not recorded
  Marey is a modular perception engine for computer-use agents that tracks screen changes and extracts UI elements with minimal model calls.
- [MarkForge](https://awesomecua.com/resources/github-lannistersyh-markforge/) — Date not recorded
  MarkForge provides deterministic, auditable Set-of-Mark badge rendering and coordinate resolution for multimodal GUI agents.
- [MEGA-GUI](https://awesomecua.com/resources/github-samsungsds-research-papers-mega-gui/) — Date not recorded
  MEGA-GUI implements a multi-stage GUI grounding pipeline combining candidate region proposal, iterative zoom-in, and element localization.
- [mew-agent](https://awesomecua.com/resources/github-kaiizer777-mew-agent/) — Date not recorded
  mew-agent is a Rust-native browser agent that drives visible Chromium via CDP using accessibility-tree perception and vision fallback.
- [Midscene Java](https://awesomecua.com/resources/github-alstafeev-midscene-java/) — Date not recorded
  A Java SDK for agents that operate web pages through natural-language instructions. It combines screenshot and DOM grounding with browser actions and execution reports.
- [Midscene Java](https://awesomecua.com/resources/github-master-frank-midscene-java/) — Date not recorded
  Midscene Java is a framework for natural-language UI automation across web pages and Android apps, with modules for element location, actions, extraction and assertions.
- [Midscene Python](https://awesomecua.com/resources/github-python51888-midscene-python/) — Date not recorded
  Midscene Python is a framework for natural-language automation of websites and Android devices, with model-assisted actions, element location, extraction and assertions.
- [midscene-pc](https://awesomecua.com/resources/github-mofangbao-midscene-pc/) — Date not recorded
  midscene-pc extends Midscene.js to local and remote PC desktops, enabling natural-language GUI automation across Windows, Linux, and macOS.
- [Midscene.js](https://awesomecua.com/resources/github-web-infra-dev-midscene/) — Date not recorded
  Visual automation toolkit for web, mobile, and desktop interfaces.
- [migi](https://awesomecua.com/resources/github-mikuh-migi/) — Date not recorded
  migi is a skill-oriented desktop GUI vision automation CLI for LLM agents with machine-readable JSON outputs and coordinate grounding.
- [Mind2Web-Live](https://awesomecua.com/resources/github-boyugou-mind2web-live-seeact-v/) — Date not recorded
  A SeeAct-V web agent implementation for Mind2Web-Live. It uses screen images to plan actions and a visual grounding model to locate targets for coordinate-based actions.
- [MindsEye (dsh-mindseye)](https://awesomecua.com/resources/github-kanchengw-dsh-mindseye/) — Date not recorded
  Vision plugin for text-only models on DeepSeek Harness enabling interactive image and UI screenshot inspection.
- [Mobile QA Agent](https://awesomecua.com/resources/github-sumanmadipeddi-mobile-qa-agent/) — Date not recorded
  Mobile QA Agent is a Supervisor-Planner-Executor multi-agent system built on Agent S3 for automated Android app testing via ADB.
- [MultimodalWebSurfer](https://awesomecua.com/resources/url-41556fece3bf8a2419ba/) — Date not recorded
  MultimodalWebSurfer operates a Chromium browser through Playwright, using marked screenshots and a multimodal model to choose actions on web pages.
- [munim-computer-use](https://awesomecua.com/resources/github-munimtechnologies-munim-computer-use/) — Date not recorded
  munim-computer-use is a cross-platform Computer Use MCP server combining native OS accessibility trees, OCR, and policy guardrails.
- [MVP (Multiple View Prediction)](https://awesomecua.com/resources/github-zjuscl-mvp/) — Date not recorded
  MVP improves GUI visual grounding by aggregating multi-view coordinate predictions across aspect-ratio and resolution transformations.
- [my_tiny_agent](https://awesomecua.com/resources/github-yanjin101-my-tiny-agent/) — Date not recorded
  Spec-driven small-LLM desktop agent that operates Windows end-to-end using OCR, YOLO icon detection, and Win32 APIs without a VLM.
- [Navisual](https://awesomecua.com/resources/github-navisualguide-navisual/) — Date not recorded
  Navisual is a non-intrusive visual desktop guide that observes the screen and highlights where the user should click next.
- [NeuroSight (QiraBot Vision Runtime)](https://awesomecua.com/resources/github-vthanhhdev-qirabot-vision-runtime/) — Date not recorded
  Selector-free AI vision automation runtime for desktop applications, mobile screens, and games.
- [NextGen macOS Computer-Use Agent](https://awesomecua.com/resources/github-nextgen-agentics-computer-use-agent/) — Date not recorded
  macOS desktop automation agent using a 5-layer perception cascade from native Accessibility trees to OCR and VLM grounding.
- [Nova (Rust Cross-Platform CUA MCP)](https://awesomecua.com/resources/github-bigduu-nova/) — Date not recorded
  Cross-platform Rust computer-use MCP server for macOS and Windows combining AX/UIA accessibility trees, screenshots, OCR, and input.
- [OculiX (SikuliX continuation)](https://awesomecua.com/resources/github-oculix-org-oculix/) — Date not recorded
  A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.
- [Odin](https://awesomecua.com/resources/github-madanlalit-odin/) — Date not recorded
  Odin is a macOS computer automation agent combining vision LLMs, Accessibility context extraction, and native input control.
- [Oh My DSH](https://awesomecua.com/resources/github-secretxuan-oh-my-dsh/) — Date not recorded
  Oh My DSH coordinates multi-agent teams with a shared compare-and-set task graph and native-vision Windows computer-use for DeepSeek Harness.
- [OmniParser](https://awesomecua.com/resources/github-microsoft-omniparser/) — Date not recorded
  Screenshot parser that detects interactable regions and captions icons so vision-language models can ground actions, released as V1.5 and V2 weights alongside OmniTool for driving a Windows 11 VM.
- [OmniParser MCP Server](https://awesomecua.com/resources/github-cute-aaa-omniparser-mcp/) — Date not recorded
  OmniParser MCP Server wraps Microsoft OmniParser V2 into a Model Context Protocol server that converts screenshots into structured UI elements.
- [OpAgent](https://awesomecua.com/resources/github-codefuse-ai-oagent/) — Date not recorded
  OpAgent is a web-navigation agent that observes screenshots, plans and grounds actions, and executes browser operations. Its repository also includes single-model and training modes.
- [OpAgent](https://awesomecua.com/resources/github-codefuse-ai-opagent/) — Date not recorded
  A web navigation agent with single-model and modular modes. Its modular loop observes screenshots, plans actions, grounds page targets, and executes browser operations through Playwright.
- [Open Computer Use](https://awesomecua.com/resources/github-e2b-dev-open-computer-use/) — Date not recorded
  Open Computer Use runs open-source vision-language models inside an E2B Desktop cloud Linux sandbox for autonomous GUI task execution.
- [Open Frame](https://awesomecua.com/resources/github-off-camber-open-frame/) — Date not recorded
  Deterministic desktop automation engine for AI agents implementing a capture-recognize-act-verify loop.
- [Open ZCode Computer Use](https://awesomecua.com/resources/github-hqhq1025-open-zcode-computer-use/) — Date not recorded
  Clean-room implementation of Z.ai ZCode's dual-mode computer-use MCP server combining pixel-coordinate desktop control and native macOS AX tools.
- [open-codex-computer-use](https://awesomecua.com/resources/github-ifuryst-open-codex-computer-use/) — Date not recorded
  open-codex-computer-use is a native Swift MCP server that exposes macOS per-application window capture, accessibility inspection, and input control.
- [openadapt-grounding](https://awesomecua.com/resources/github-openadaptai-openadapt-grounding/) — Date not recorded
  An archived GUI element localization package that anchors targets to OCR text and stabilizes detections across frames, with optional model-based fallbacks.
- [openadapt-ml](https://awesomecua.com/resources/github-openadaptai-openadapt-ml/) — Date not recorded
  A Python research package for GUI-action models, with trajectory schemas, model adapters, fine-tuning, grounding, and a policy interface for predicting the next action.
- [OpenAPA](https://awesomecua.com/resources/github-laiye-ai-open-apa/) — Date not recorded
  A computer-use agent for desktop GUI tasks that combines screenshot-based reasoning, visual grounding, planning, and action execution across applications.
- [opencode-gui-bridge](https://awesomecua.com/resources/github-yueqi-wang-795-opencode-gui-bridge/) — Date not recorded
  Model Context Protocol bridge giving OpenCode and MCP clients real Windows GUI control via UI Automation and vision.
- [OpenComputer](https://awesomecua.com/resources/github-andykr1k-opencomputer/) — Date not recorded
  OpenComputer is a local-first cross-platform computer-use agent for Linux, Windows, and macOS powered by local vision-language models.
- [OpenGUI](https://awesomecua.com/resources/github-core-mate-opengui/) — Date not recorded
  OpenGUI is an Android GUI agent framework that combines screen perception, accessibility trees, and ADB actuation for real-device automation.
- [OpenOCR](https://awesomecua.com/resources/github-topdu-openocr/) — Date not recorded
  OpenOCR is an open-source scene and document text detection, recognition, and VLM-OCR toolkit used for screen text parsing.
- [OpenQA](https://awesomecua.com/resources/github-openqa-labs-openqa/) — Date not recorded
  OpenQA is an open-source agentic browser testing harness that executes natural-language test assertions with dynamic selector resolution.
- [OpenVINO Autonomous GUI Agent](https://awesomecua.com/resources/github-shehrozkashif-openvino-autonomous-gui-agent/) — Date not recorded
  Fully local desktop GUI agent running five INT4 OpenVINO models for screen perception, planning, action execution, and step verification.
- [Optics Framework](https://awesomecua.com/resources/github-mozarkai-optics-framework/) — Date not recorded
  Optics Framework is a self-healing test automation engine for mobile, web, and TV interfaces with Vision/OCR fallback and an MCP server.
- [orangeofcarl0-sys dsh-computer-use](https://awesomecua.com/resources/github-orangeofcarl0-sys-dsh-computer-use/) — Date not recorded
  Windows desktop computer-use plugin for DeepSeek Harness featuring numbered UI element grounding and background-first input delivery.
- [Orbination AI Desktop Vision & Control](https://awesomecua.com/resources/github-amichail-1-orbination-ai-desktop-vision-control/) — Date not recorded
  Native Windows MCP server combining UI Automation, dark-theme-aware OCR, visual grounding, and mouse/keyboard control.
- [Orbit (orbit-cua)](https://awesomecua.com/resources/github-aadya940-orbit/) — Date not recorded
  Orbit is a Python computer-use framework that combines natural-language screen grounding with composable, typed workflow steps.
- [OS-Symphony](https://awesomecua.com/resources/github-os-copilot-os-symphony/) — Date not recorded
  OS-Symphony is a holistic computer-use agent framework combining a Reflection-Memory Agent, versatile toolset, and multimodal searcher.
- [OSRS-CV](https://awesomecua.com/resources/github-kaustubhlall-osrs-cv/) — Date not recorded
  Uses YOLOv8 object detection, Tesseract OCR, and human-like Bézier mouse trajectories to automate Old School RuneScape GUI gameplay.
- [OSWorld Qwen2.5-VL Enhanced](https://awesomecua.com/resources/github-issumer-ku-osworld-qwen2-5vl-enhanced/) — Date not recorded
  Provides an OpenAI-compatible Qwen2.5-VL computer-use agent and multi-environment evaluation runner for OSWorld.
- [OSWorld-CogAgent](https://awesomecua.com/resources/github-issumer-ku-osworld-cogagent/) — Date not recorded
  Provides a provider-neutral CogAgent-9B model server, adapter, and multi-environment evaluation runner for OSWorld.
- [Overlay Companion MCP](https://awesomecua.com/resources/github-ryansopensourcerice-overlay-companion-mcp/) — Date not recorded
  Overlay Companion MCP provides a transparent on-screen visual overlay and MCP server for human-in-the-loop computer-use interaction.
- [PawWork (爪爪 / BrowserKitten)](https://awesomecua.com/resources/github-player-yn-browserkitten/) — Date not recorded
  Selection-first Chrome web agent where users highlight elements on the live page to scope and guide agent actions.
- [Peekaboo](https://awesomecua.com/resources/github-openclaw-peekaboo/) — Date not recorded
  Peekaboo is a macOS screen-capture, accessibility-element targeting, and GUI automation CLI and MCP server for computer-use agents.
- [perceive](https://awesomecua.com/resources/github-gauthierpiarrette-perceive/) — Date not recorded
  perceive is a reachability-filtered perception layer for browser agents that prunes non-interactive or occluded DOM elements.
- [PhysiClaw](https://awesomecua.com/resources/github-physiclaw-physiclaw/) — Date not recorded
  PhysiClaw uses an overhead camera and a 3-axis capacitive stylus gantry to physically tap and swipe unmodified smartphones.
- [Pix2Act](https://awesomecua.com/resources/github-google-deepmind-pix2act/) — Date not recorded
  Pix2Act provides JAX/T5X training and evaluation code for pixel-only GUI agents on MiniWoB++ using behavioral cloning and tree search.
- [pixel-forge](https://awesomecua.com/resources/github-sjxbbdb-pixel-forge/) — Date not recorded
  Desktop automation toolkit providing screenshot capture, OCR, pixel-diff change detection, and mouse/keyboard actions for AI agents.
- [Plip OSS](https://awesomecua.com/resources/github-hussainn7-plip-oss/) — Date not recorded
  Open-source macOS notch assistant and runtime for grounded, model-agnostic computer-use agents with verifiable action previews.
- [PyMCPAutoGUI](https://awesomecua.com/resources/github-ahaufox-pymcpautogui/) — Date not recorded
  PyMCPAutoGUI is a cross-platform MCP server combining PyAutoGUI mouse/keyboard control, window management, and EasyOCR screen text localization.
- [Q-Reflector](https://awesomecua.com/resources/github-pockyitachi-q-reflector/) — Date not recorded
  Q-Reflector trains an 8B vision-language verifier with generated pre/post-action conditions to detect and correct GUI action errors.
- [Qirabot](https://awesomecua.com/resources/github-qirabot-qirabot/) — Date not recorded
  Qirabot is a pure-vision multimodal GUI automation framework for operating browsers, mobile apps, desktops, and games without DOM selectors.
- [Qontinui](https://awesomecua.com/resources/github-qontinui-qontinui/) — Date not recorded
  Qontinui is a model-based GUI automation framework that represents application screens as state graphs with visual template and OCR matching.
- [QUE CORE](https://awesomecua.com/resources/github-qubasehq-que-tools/) — Date not recorded
  QUE CORE is a hybrid Rust and Python runtime exposing 121 consolidated system, window, and GUI control tools for computer-use agents.
- [Re-Prefill](https://awesomecua.com/resources/github-linjiaping1-re-prefill/) — Date not recorded
  Re-Prefill calibrates prefill visual attention representations in vision-language models to improve zero-shot GUI grounding accuracy.
- [Reasonix Computer Use](https://awesomecua.com/resources/github-plocr-reasonix-computer-use/) — Date not recorded
  Cross-platform desktop automation plugin combining native accessibility trees (UIA/AXAPI/AT-SPI2) with EasyOCR visual fallback.
- [RegionCUA](https://awesomecua.com/resources/github-region-ai-region-cua/) — Date not recorded
  RegionCUA is a local Ollama-powered desktop agent that explores GUI applications and generates documented screenshots, videos, and replay scripts.
- [RegionFocus](https://awesomecua.com/resources/github-tiangeluo-regionfocus/) — Date not recorded
  RegionFocus provides code for GUI grounding through selected screenshot regions. The release evaluates UI-TARS and Qwen2.5-VL on ScreenSpot-Pro.
- [Renoned dsh-computer-use](https://awesomecua.com/resources/github-renoned-dsh-computer-use/) — Date not recorded
  Capability-aware macOS computer-use plugin for DeepSeek Harness combining Accessibility-first queries with Vision Router fallback.
- [RobotGo](https://awesomecua.com/resources/github-go-vgo-robotgo/) — Date not recorded
  RobotGo is a native Go cross-platform desktop automation library for controlling the mouse, keyboard, bitmap screen capture, and window handles.
- [RPA Desktop Canal Visual](https://awesomecua.com/resources/github-hab99-rpa-desktop-canal-visual/) — Date not recorded
  Closed-loop visual desktop RPA runtime that drives isolated terminal and GUI applications purely from screen captures.
- [Screen Intelligence](https://awesomecua.com/resources/github-zacfink-screen-intelligence/) — Date not recorded
  Screen Intelligence is a macOS desktop agent that reads screens with multimodal LLMs and drives mouse and keyboard actions.
- [screen-use](https://awesomecua.com/resources/github-tongriyaotxt-screen-use/) — Date not recorded
  Browser-Use-style framework for the entire desktop that gives AI agents visual screen perception and mouse/keyboard control.
- [screen-vision](https://awesomecua.com/resources/github-daizedong-screen-vision/) — Date not recorded
  Captures desktop windows and extracts UI elements and buttons with pixel coordinates combining accessibility trees and OCR.
- [Screen2AX](https://awesomecua.com/resources/github-macpaw-screen2ax/) — Date not recorded
  Screen2AX reconstructs macOS application accessibility trees from screenshots using vision detectors and releases the Maceka GUI dataset.
- [ScreenBuddy](https://awesomecua.com/resources/github-nideesh1-screen-buddy/) — Date not recorded
  ScreenBuddy is a native Rust and Tauri macOS desktop client for running bring-your-own-key Claude Computer Use workflows.
- [ScreenClaw (睇虾)](https://awesomecua.com/resources/github-ginsing1226-screenclaw/) — Date not recorded
  Windows visual GUI automation companion combining percentage-coordinate grid overlays with non-blocking workflow recording and replay.
- [ScreenPilot](https://awesomecua.com/resources/github-droppinganvil-screenpilot/) — Date not recorded
  ScreenPilot is a local computer-use agent designed to run within 8GB of VRAM, combining screenshot planning with mouse and keyboard control.
- [ScreenSuite](https://awesomecua.com/resources/github-huggingface-screensuite/) — Date not recorded
  A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.
- [SE-GUI](https://awesomecua.com/resources/github-yxb-nku-se-gui/) — Date not recorded
  SE-GUI provides training and evaluation code for a GUI-grounding model refined with location-based rewards and attention feedback; its README links separate weights and seed data.
- [SeeAct](https://awesomecua.com/resources/github-osu-nlp-group-seeact/) — Date not recorded
  Generalist web agent framework for large multimodal models such as GPT-4V, with a Playwright tool that runs agents on live websites, text-choice and set-of-mark grounding, and a crawler mode.
- [Seg2Click](https://awesomecua.com/resources/github-jcwang0602-seg2click/) — Date not recorded
  Training and inference implementation that predicts an executable-region mask and derives a GUI click from that mask.
- [Seg2Click](https://awesomecua.com/resources/url-8525e17eee1f3e754ad4/) — Date not recorded
  A hosted GUI grounding demo that takes a screenshot and instruction, then predicts an action mask and click point using a public Seg2Click checkpoint.
- [Self Operating Computer](https://awesomecua.com/resources/github-othersideai-self-operating-computer/) — Date not recorded
  Framework, released in November 2023, in which a multimodal model views the screen and picks mouse and keyboard actions toward a goal, with backends such as GPT-4o, Claude 3, Gemini and LLaVA.
- [Sensory-Grounding MCP](https://awesomecua.com/resources/github-luclinocruz-lucross-sensory-grounding-mcp/) — Date not recorded
  Closed-loop visual, audio, and video sensory grounding MCP server for verifying UI state in coding and computer-use agents.
- [Seq2act code (google-research)](https://awesomecua.com/resources/component-google-research-seq2act/) — Date not recorded
  TensorFlow code for mapping natural-language instructions to Android UI action sequences, with phrase-tuple extraction and grounding models and pipelines for AndroidHowTo, RicoSCA and PixelHelp.
- [Set of Mark](https://awesomecua.com/resources/github-microsoft-som/) — Date not recorded
  Visual-prompting toolbox that labels image regions for multimodal reference and grounding, including GUI applications.
- [Shadow](https://awesomecua.com/resources/github-ghostwright-shadow/) — Date not recorded
  macOS app that records screen, audio, input events and accessibility trees on-device, builds searchable episodes, and replays learned procedures through AX-first grounding with a LoRA-tuned ShowUI-2B fallback.
- [Sikuli legacy research implementation](https://awesomecua.com/resources/github-sikuli-sikuli/) — Date not recorded
  The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.
- [SimpAgent](https://awesomecua.com/resources/github-jiutian-vl-simpagent/) — Date not recorded
  SimpAgent implements context-aware history simplification and visual token pruning to accelerate multimodal GUI agents.
- [smart-computer-use](https://awesomecua.com/resources/github-lindoelio-smart-computer-use/) — Date not recorded
  Agent skill for Claude Code, Codex, Cursor, and OpenCode that drives desktop GUIs via a Rust CLI and local vision grounding.
- [Smol2Operator](https://awesomecua.com/resources/github-huggingface-smol2operator/) — Date not recorded
  Hugging Face recipe that converts Aguvis GUI data into one normalized action space and fine-tunes SmolVLM2-2.2B in two phases, first for screenshot grounding and then for agentic GUI action code.
- [SuperSelector Studio](https://awesomecua.com/resources/github-pirate-cua-superselector/) — Date not recorded
  Resilient, cacheable fuzzy UI element identifiers and studio for Codex Computer Use recording and replay.
- [Surf MCP](https://awesomecua.com/resources/github-shanevcantwell-surf-mcp/) — Date not recorded
  Surf MCP is a visual browser automation MCP server that lets AI agents click, type, and navigate webpages by describing visual elements.
- [Surfer 2](https://awesomecua.com/resources/url-efd78f56fcde1f4f05e5/) — Date not recorded
  Surfer 2 is a computer-use agent for desktop, web and mobile tasks. Its orchestrator assigns subtasks while components handle visual grounding and execution.
- [Surfer-H-CLI](https://awesomecua.com/resources/github-hcompai-surfer-h-cli/) — Date not recorded
  Deprecated runner for H Company's Surfer-H web agent: a policy model reads recent Chrome screenshots, a Holo localizer returns click coordinates, Selenium acts, and an optional validator checks the answer.
- [SwiftAutoGUI](https://awesomecua.com/resources/github-nakaokarei-swiftautogui/) — Date not recorded
  SwiftAutoGUI is a native Swift library for macOS GUI automation providing mouse, keyboard, screenshot, template matching, and AppleScript control.
- [Tactile](https://awesomecua.com/resources/github-yliust-tactile/) — Date not recorded
  Skill, protocol and tool layer that has agents operate software through accessibility semantics first, reading roles, names and states before reaching for screenshots.
- [TAG attention-driven GUI grounding](https://awesomecua.com/resources/github-heimingx-tag/) — Date not recorded
  Grounding and evaluation code that aggregates a pretrained vision-language model’s attention maps to localize requested interface elements without fine-tuning.
- [TankWork](https://awesomecua.com/resources/github-agenttankos-tankwork/) — Date not recorded
  TankWork is a desktop agent framework combining OmniParser visual grounding, OCR, and PyAutoGUI actuation.
- [taproot](https://awesomecua.com/resources/github-shivampkumar-taproot/) — Date not recorded
  taproot is an open-source mobile GUI agent harness combining vision-language models with accessibility-tree grounding on AndroidWorld.
- [Taskhomie](https://awesomecua.com/resources/github-suitedaces-computer-agent/) — Date not recorded
  Taskhomie is a local computer-use agent that executes natural-language desktop tasks via screenshots, mouse/keyboard actions, and shell commands.
- [Taylor-Bayouth Browser Agent](https://awesomecua.com/resources/github-taylor-bayouth-browser-agent/) — Date not recorded
  Stealth browser agent that controls real Chrome via CDP and OS-level input without injecting page JavaScript.
- [Terminator](https://awesomecua.com/resources/github-mediar-ai-terminator/) — Date not recorded
  Terminator is an accessibility-first desktop automation SDK and MCP server for controlling Windows, macOS, and Linux GUI applications.
- [THEIA Computer Use](https://awesomecua.com/resources/github-tree-ind-theia-ui-computer-use/) — Date not recorded
  THEIA (The Human Environment Intelligence Aperture) is a visual perception and UI computer-use plugin and framework for AI agents.
- [tinycomputer](https://awesomecua.com/resources/github-tinyhumansai-tinycomputer/) — Date not recorded
  Jev decision-model harness for fast desktop and browser action execution.
- [TipTour](https://awesomecua.com/resources/github-milind-soni-tiptour-macos/) — Date not recorded
  macOS menu-bar agent that grounds clicks with a local Core ML control detector and accessibility tree, driven by TypeSafe's JEV text loop or Gemini realtime voice, with a localhost harness for other agents.
- [ToL Hierarchical GUI region detection](https://awesomecua.com/resources/github-llv22-tol-gui-region-detection/) — Date not recorded
  Code and configurations for training a hierarchical Android GUI region detector with DINO and running region inference on the ScreenPR benchmark.
- [TongUI training and inference framework](https://awesomecua.com/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [ToolTok](https://awesomecua.com/resources/github-zephinuecode-tooltok/) — Date not recorded
  ToolTok introduces atomic directional cursor-movement tokens for multi-step iterative GUI visual grounding on ScreenSpot and ScreenSpot-Pro.
- [TuriX-CUA](https://awesomecua.com/resources/github-turixai-turix-cua/) — Date not recorded
  TuriX-CUA is a multi-agent desktop automation framework for macOS and Windows combining planner, actor, reflector, and memory skills.
- [Two-Layer macOS GUI Agent](https://awesomecua.com/resources/github-eauchs-gui-agent/) — Date not recorded
  Two-layer macOS GUI navigation agent that separates VLM screen perception from strategic LLM action planning.
- [UI Annotator MCP](https://awesomecua.com/resources/github-mcpware-ui-annotator-mcp/) — Date not recorded
  Model Context Protocol server that injects interactive Set-of-Mark hover labels into live webpages for visual browser agents.
- [Ui.Vision RPA](https://awesomecua.com/resources/github-a9t9-rpa/) — Date not recorded
  Ui.Vision combines Selenium-compatible browser commands, visual desktop OCR/template automation, and an MCP server for AI agents.
- [uia-agent](https://awesomecua.com/resources/github-supermarioyl-uia-agent/) — Date not recorded
  uia-agent defines an open-source LLM agent action space that drives legacy Windows desktop applications through the UI Automation tree.
- [UIED (UI Element Detection)](https://awesomecua.com/resources/github-mulongxie-uied/) — Date not recorded
  UIED detects graphical widgets and text blocks in UI screenshots by combining flood-fill/Canny component analysis with deep text recognition.
- [UiPath ScreenPlay](https://awesomecua.com/resources/url-b09d10b87e42b7e74de9/) — Date not recorded
  UiPath Studio activity whose Screen Agent turns natural-language task descriptions into self-driving UI automations on Windows, Linux and macOS, using a planner, a pixel grounder, DOM extraction and selectable LLMs.
- [uitars-mcp](https://awesomecua.com/resources/github-sandraschi-uitars-mcp/) — Date not recorded
  uitars-mcp is a Model Context Protocol server that connects vision-language GUI models (such as UI-TARS) to desktop and browser actuation.
- [VACT (Vector Agent Context Transport)](https://awesomecua.com/resources/github-fy2ne-vact/) — Date not recorded
  High-frequency GPU screen perception and low-latency input transport protocol for desktop computer-use agents.
- [vadgr-computer-use](https://awesomecua.com/resources/github-montbrain-vadgr-computer-use/) — Date not recorded
  Three-tier computer-use MCP server combining system shell tools, OS accessibility trees (UIA/AT-SPI/AX), and vision fallback.
- [vco (Visual Computer Operate)](https://awesomecua.com/resources/github-lo2589-vco/) — Date not recorded
  Shell-driven visual computer-use toolkit enabling LLMs to inspect and click web pages and desktop screens.
- [Video2GUI](https://awesomecua.com/resources/github-weiminxiong-video2gui/) — Date not recorded
  Video2GUI synthesizes large-scale GUI interaction trajectories from unlabeled screen-recording videos via inverse dynamics and VLM annotation.
- [VideoCAD training and evaluation code](https://awesomecua.com/resources/github-ghadinehme-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning CAD interface action sequences from screen recordings of browser-based Onshape.
- [vimGPT](https://awesomecua.com/resources/github-ishan0102-vimgpt/) — Date not recorded
  vimGPT enables multimodal LLMs to browse the web by overlaying Vimium keyboard shortcut badges onto interactive DOM elements.
- [Vision Browser Agent](https://awesomecua.com/resources/github-zbcs-studiocr-cn-vision-browser-agent/) — Date not recorded
  Pure-vision browser automation framework with built-in local Moondream3 inference, zero DOM dependency, and human-like mouse trajectories.
- [Vision Primitives MCP](https://awesomecua.com/resources/github-zouyuanqing-vision-primitives-mcp/) — Date not recorded
  Vision Primitives MCP equips text-only LLMs with 30 visual MCP tools for screen description, coordinate localization, OCR, and crop-zoom.
- [Vision UI](https://awesomecua.com/resources/github-meituan-dianping-vision-ui/) — Date not recorded
  Vision UI is a visual analysis toolkit for detecting UI elements, matching semantic targets, recognizing text, and comparing interface images.
- [vision-bridge](https://awesomecua.com/resources/github-rusnetru-vision-bridge/) — Date not recorded
  Unified Windows vision and action MCP server for AI agents to inspect desktop windows and dispatch mouse/keyboard events.
- [Vision-MCP](https://awesomecua.com/resources/github-haruhiyuki-vision-mcp/) — Date not recorded
  Desktop application interaction MCP server combining visual UI element detection with mouse and keyboard automation.
- [VisionAX](https://awesomecua.com/resources/github-rao-studios-visionax/) — Date not recorded
  Computer-vision accessibility-tree (AX/A11Y) generator that synthesizes structured UI trees from raw desktop pixels.
- [VisionGrid AI](https://awesomecua.com/resources/github-mohsinjutt62-autoplay-cv-engine-bot/) — Date not recorded
  Computer-vision Android UI automation and heuristic gameplay engine built with OpenCV and ADB.
- [Visual Context Router](https://awesomecua.com/resources/github-fangsylar-pixel-visual-context-router/) — Date not recorded
  Token-aware visual context router that crops, downscales, or replaces full screenshots with localized regions before sending to CUA models.
- [visual-agent](https://awesomecua.com/resources/github-cloudsbeyond-visual-agent/) — Date not recorded
  Protocol-first framework enabling visual-model hosts to safely inspect and operate software GUI interfaces.
- [Voice and Vision System Controller](https://awesomecua.com/resources/github-muhammad-touseef-akhtar-voice-vision-system-controller/) — Date not recorded
  Offline Python desktop automation system combining voice commands with computer-vision screen interaction.
- [Wayland MCP Server](https://awesomecua.com/resources/github-kurojs-wayland-mcp/) — Date not recorded
  Wayland MCP Server provides screenshot capture, VLM coordinate analysis, and virtual pointer/keyboard input for Linux Wayland desktops.
- [WebFovea](https://awesomecua.com/resources/github-jianganghan-webfovea/) — Date not recorded
  WebFovea is a vision-based web agent that combines foveated visual crop refinement with live browser interaction.
- [WebMarker](https://awesomecua.com/resources/github-reidbarber-webmarker/) — Date not recorded
  A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.
- [WebMirage](https://awesomecua.com/resources/github-moontea0416-webmirage/) — Date not recorded
  WebMirage is an adversarial red-teaming framework that crafts visual perturbations to hijack web agents from grounding to browser execution.
- [WebVLN research implementation](https://awesomecua.com/resources/github-webvln-webvln/) — Date not recorded
  Training and evaluation code for question-guided website navigation that combines visual observations with web-specific HTML information.
- [Win:Computer Use MCP](https://awesomecua.com/resources/github-jnx03-windowncomputeruse/) — Date not recorded
  Windows Model Context Protocol server giving MCP clients a dedicated virtual cursor, UI Automation inspection, and desktop control.
- [WinAgent-Lite](https://awesomecua.com/resources/github-zyydi1959-winagent-lite/) — Date not recorded
  WinAgent-Lite is a local vision-driven Windows GUI agent and MCP server with a reproducible desktop evaluation suite.
- [WinDOM code](https://awesomecua.com/resources/github-chenghengli-windom/) — Date not recorded
  GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.
- [Windows Computer Use MCP (DXGI + UIA)](https://awesomecua.com/resources/github-betrayzl-windows-computer-use-mcp/) — Date not recorded
  Windows Model Context Protocol server combining DXGI desktop duplication screen capture, UI Automation trees, and human-like input.
- [windows-computer-use-mcp](https://awesomecua.com/resources/github-sandraschi-windows-computer-use-mcp/) — Date not recorded
  windows-computer-use-mcp provides 22 MCP tools for Windows UI Automation, OCR, mouse/keyboard control, and UAC safety guardrails.
- [WKAppBot SDK](https://awesomecua.com/resources/github-kiexpert-wkappbot-sdk/) — Date not recorded
  WKAppBot is an open-source Windows Computer Use and AppBot SDK giving AI agents structured UI perception and action execution.
- [yu-tao-li dsh-computer-use-win](https://awesomecua.com/resources/github-yu-tao-li-dsh-computer-use-win/) — Date not recorded
  Windows computer-use npm package for DeepSeek Harness supporting UI Automation trees, OCR grounding, and background window control.
- [Zhubi (朱笔)](https://awesomecua.com/resources/github-icesword0760-zhubi/) — Date not recorded
  Zhubi is a self-hosted bounding-box annotation and fine-tuning workbench for training Florence-2 and YOLO GUI detector models.
- [Ziweixing (紫微星)](https://awesomecua.com/resources/github-xiaozhe7772222-ziweixing/) — Date not recorded
  Intent-first Android phone automation agent with human-like touch trajectories and screen perception.
- [ZonUI-3B](https://awesomecua.com/resources/github-han1018-zonui-3b/) — Date not recorded
  Code for training and evaluating ZonUI-3B, a GUI grounding model tested on mobile, desktop, and web screenshots at varying resolutions.
- [Zoom Consistency Routing](https://awesomecua.com/resources/github-omxyz-zoom-consistency-routing/) — Date not recorded
  A training-free router chooses between visual grounding models using prediction distance from a zoom crop's center. The release includes ScreenSpot-Pro evaluation scripts.
- [ZoomClick](https://awesomecua.com/resources/github-princeton-ai2-lab-zoomclick/) — Date not recorded
  ZoomClick implements iterative zoom-in GUI grounding and behavior-based grounding evaluation across high-resolution interfaces.

## 学习资源

- [H.AI cookbook](https://awesomecua.com/resources/github-hcompai-hai-cookbook/) — Date not recorded
  The H.AI cookbook provides notebooks and guides for deploying Holo models and invoking their web navigation and interface localization capabilities.
- [NeurIPS 2025: 45 Computer-Use Agent Papers You Should Know About](https://awesomecua.com/resources/url-5f211a7eba35415ea382/) — Date not recorded
  An annotated reading list of 45 NeurIPS 2025 computer-use agent papers, organized around benchmarks, safety, grounding and agent architectures.
