# 无需训练的方法

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/training-free/records.jsonl

## 论文与综述

- [MAPLE: A Multimodal Mobile Agent with Playbook-Learned Experience](https://awesomecua.com/zh/resources/arxiv-2611-01351/) — 2026-10-31
  Introduces MAPLE, a training-free multi-agent framework that shares step-level experience while navigating mobile GUIs and updates prompts during execution.
- [AdaGround: Token-Normalized Adaptive Zooming with Verifier-in-the-Loop Refinement for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2610-36874/) — 2026-10-27
  Introduces AdaGround, a training-free GUI grounding method that adjusts screenshot zoom to target size and uses a click verifier to refine or reject predictions.
- [GUIFlow: Temporal Redundancy-Aware Incremental Inference for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-34959/) — 2026-10-26
  Introduces GUIFlow, an incremental inference framework that reuses visual, language, and action computation across successive GUI-agent steps.
- [MPIDetector: Detecting Multi-modal Prompt Injection via LLM-based Reasoning](https://awesomecua.com/zh/resources/arxiv-2610-30202/) — 2026-10-21
  MPIDetector uses few-shot prompts to detect text and visual prompt injections, with environmental web-agent injections included in its evaluation.
- [In-Context Teacher–Student Guidance for Open-Weight Browser Agents](https://awesomecua.com/zh/resources/url-a5dc446fab5e6bdce517/) — 2026-10-19
  Training-free protocol that turns a teacher model's offline reasoning traces into prompt guidance for open-weight browser agents; on MiniWoB++ it lifts solved student-task pairs from 208 to 271 across ten students.
- [From Seeing to Reporting: A Theory of Reliable Visual Set Generation in Vision-Language Models](https://awesomecua.com/zh/resources/arxiv-2610-25503/) — 2026-10-18
  FSR models visual reporting and gives inference-time procedures for frozen vision-language models, including screen parsing and GUI target selection.
- [Visible but Not Avoided: State-Dependent Re-Proposal of Rejected Candidates in Catalog-Based LLM Optimization Loops](https://awesomecua.com/zh/resources/arxiv-2610-15738/) — 2026-10-11
  Studies repeated rejected edits while optimizing a screenshot-only GUI agent, contrasting static probes with reached loop states and testing how rejection wording changes subsequent edit proposals.
- [Harness Evolution Hits a Ceiling: When Weight Training Should Begin](https://awesomecua.com/zh/resources/arxiv-2610-11655/) — 2026-10-08
  Studies when to improve an LLM agent's runtime harness or train its weights by classifying failed trajectories; WebArena-Lite supplies a web-task transfer test.
- [Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-33304/) — 2026-09-27
  Introduces ExpActivator, which matches the current GUI state to relevant historical states before supplying past actions as guidance. A separate activation rule decides whether a recurring user intent is warranted by the current time and situation or should be withheld.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://awesomecua.com/zh/resources/arxiv-2609-15364/) — 2026-09-14
  Introduces RSIAgent, a training-free framework that explores unfamiliar digital interfaces, stores environment-specific action knowledge, and reuses that memory for later tasks.
- [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-10297/) — 2026-09-09
  TRACE orders screenshot evidence for monotonic visual-token reduction using layout priors, instruction relevance and feature novelty. Spatial token reserves and incremental KV contraction aim to preserve useful evidence for future GUI targets without repeatedly encoding retired frames.
- [From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2609-04869/) — 2026-09-04
  An online skill-evolution framework turns GUI interaction traces and evaluator feedback into a versioned library of reusable procedures without updating model parameters. Controlled OSWorld comparisons examine both the benefits of shared procedural memory and its domain-dependent instability under repeated revision.
- [LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-25777/) — 2026-08-26
  Introduces LocalLSTC, a training-free control architecture that maintains persistent task state and uses it to form short execution commitments. Outcomes feed back into that state for progress checks, recovery, and termination in locally deployed desktop agents.
- [A Task-State Representation for Long-Horizon Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2607-00502/) — 2026-07-01
  Introduces TSR, a training-free wrapper for long-horizon mobile GUI agents that tracks instructions, subgoal progress, and action outcomes separately from screen observations.
- [Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-31270/) — 2026-06-30
  Uses failed computer-use trajectories to diagnose failure modes and generate inference-time agent code patches, with light human verification. An OSWorld study evaluates this failure-driven improvement loop without additional model training.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.com/zh/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [WebChallenger: A Reliable and Efficient Generalist Web Agent](https://awesomecua.com/zh/resources/arxiv-2606-10423/) — 2026-06-09
  WebChallenger builds a hierarchical DOM-derived page representation for selective observation, reusable site maps and compound actions. The framework combines these mechanisms without model fine-tuning and evaluates generalization across multiple web-agent benchmarks.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.com/zh/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [AQuaUI: Visual Token Reduction for GUI Agents with Adaptive Quadtrees](https://awesomecua.com/zh/resources/arxiv-2605-19260/) — 2026-05-19
  AQuaUI reduces screenshot tokens for GUI agents at inference time with adaptive quadtrees that retain spatial positions and reuse prior tree structure across steps.
- [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2605-15542/) — 2026-05-15
  DRS-GUI searches screenshot regions through focus, shift and scatter operations selected by a tree-search planner. A region-quality reward guides this training-free perceptual search before final GUI grounding.
- [What Happens Before Decoding? Prefill Determines GUI Grounding in VLMs](https://awesomecua.com/zh/resources/arxiv-2605-12549/) — 2026-05-10
  Re-Prefill adds an attention-guided second prefill pass that revisits candidate screen regions before coordinate generation. The study evaluates this training-free intervention across GUI-grounding models and benchmarks.
- [BAMI: Training-Free Bias Mitigation in GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2605-06664/) — 2026-05-07
  BAMI uses coarse-to-fine focus and candidate selection at inference time to address precision and ambiguity errors in GUI grounding.
- [AutoFocus: Uncertainty-Aware Active Visual Search for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2605-02630/) — 2026-05-04
  Presents AutoFocus, a training-free grounding method that turns sampled coordinates and token uncertainty into spatial region proposals. Shape-aware crops and visual comparison select a target while retaining surrounding interface context.
- [LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent](https://awesomecua.com/zh/resources/url-4395ff8522cd77109b83/) — 2026-04-20
  Training-free GUI agent that indexes screen elements via icon detection and OCR, checks each step with multi-level reflection and recovers by fallback clicks or rollback; introduces LongGUIBench, tasks over 15 steps.
- [UI-Zoomer: Uncertainty-Driven Adaptive Zoom-In for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2604-14113/) — 2026-04-15
  Introduces UI-Zoomer, a training-free grounding method that uses candidate agreement and token confidence to decide when to crop and retry. Prediction variance determines a separate crop radius for each uncertain interface target.
- [PixelPrune: Pixel-Level Adaptive Visual Token Reduction via Predictive Coding](https://awesomecua.com/zh/resources/arxiv-2604-00886/) — 2026-04-01
  PixelPrune removes pixel-redundant patches before the vision encoder, reducing both encoding and downstream language-model work. The training-free method evaluates lossless and controlled-lossy compression on document and GUI tasks.
- [GUIDE: Resolving Domain Bias in GUI Agents through Real-Time Web Video Retrieval and Plug-and-Play Annotation](https://awesomecua.com/zh/resources/arxiv-2603-26266/) — 2026-03-27
  GUIDE retrieves relevant software tutorials through subtitle-based video search, then infers planning and grounding knowledge from consecutive annotated keyframes. It inserts that knowledge into existing GUI-agent modules without parameter updates and evaluates the plug-in on OSWorld.
- [Zoom to Essence: Trainless GUI Grounding by Inferring upon Interface Elements](https://awesomecua.com/zh/resources/arxiv-2603-14448/) — 2026-03-15
  Presents ZoomUI, a training-free grounding method that expresses instructions as visual element descriptions and uses model attention to zoom progressively into relevant interface regions. Evaluation examines instruction-to-element localization on GUI benchmarks.
- [M$^2$: Dual-Memory Augmentation for Long-Horizon Web Agents via Trajectory Summarization and Insight Retrieval](https://awesomecua.com/zh/resources/arxiv-2603-00503/) — 2026-02-28
  Introduces M², a training-free memory framework for long-horizon web agents that summarizes interaction history and retrieves task guidance from an offline insight bank.
- [ST-Lite: Training-Free KV Cache Compression with Spatio-Trajectory Guidance for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-00188/) — 2026-02-27
  Introduces ST-Lite, a training-free KV cache compression scheme for vision-language GUI agents that filters redundant frames and preserves small UI elements in interaction traces.
- [Spatio-Temporal Token Pruning for Efficient High-Resolution GUI Agents](https://awesomecua.com/zh/resources/arxiv-2602-23235/) — 2026-02-26
  GUIPruner compresses high-resolution screenshots and interaction history for GUI navigation through training-free resizing and layout-aware token pruning.
- [Trifuse: Enhancing Attention-Based GUI Grounding via Multimodal Fusion](https://awesomecua.com/zh/resources/arxiv-2602-06351/) — 2026-02-06
  Trifuse combines attention-based localization with OCR text cues and icon captions to ground GUI instructions. Its fusion procedure favors cross-modal agreement and sharp location peaks, and is evaluated without task-specific fine-tuning.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.com/zh/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [MVP: Multiple View Prediction Improves GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2512-08529/) — 2025-12-09
  MVP addresses unstable GUI coordinates by predicting across several attention-guided cropped views. It clusters the resulting coordinates and selects the densest cluster centroid, evaluating this training-free inference method across grounding models.
- [Zoom in, Click out: Unlocking and Evaluating the Potential of Zooming for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2512-05941/) — 2025-12-05
  ZoomClick uses repeated zooming and context adjustment to improve GUI grounding without training. The paper studies zoom depth, crop sizes, and related choices and introduces GUIZoom-Bench to evaluate how grounding models respond to zoomed views.
- [Chain-of-Ground: Improving GUI Grounding via Iterative Reasoning and Reference Feedback](https://awesomecua.com/zh/resources/arxiv-2512-01979/) — 2025-12-01
  Chain-of-Ground uses iterative visual reasoning and reference feedback to refine GUI localization without additional training. It evaluates on ScreenSpot-Pro and introduces TPanel-UI to probe grounding on industrial control panels with visual distortions.
- [Mitigating Coordinate Prediction Bias from Positional Encoding Failures](https://awesomecua.com/zh/resources/arxiv-2510-22102/) — 2025-10-25
  Introduces Vision-PE Shuffle Guidance (VPSG), a training-free correction for coordinate drift in visual models, evaluated for localization on ScreenSpot-Pro.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.com/zh/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [D-Artemis: A Deliberative Cognitive Framework for Mobile GUI Multi-Agents](https://awesomecua.com/zh/resources/arxiv-2509-21799/) — 2025-09-26
  Introduces D-Artemis, a mobile GUI agent framework that retrieves app-specific tips, checks actions before execution, and reflects on their outcomes without trajectory training.
- [How Auxiliary Reasoning Unleashes GUI Grounding in VLMs](https://awesomecua.com/zh/resources/arxiv-2509-11548/) — 2025-09-15
  Studies the gap between latent visual grounding and explicit coordinate output in general vision-language models. Three zero-shot methods add axes, grids, or labeled intersections to GUI screenshots so models can express spatial locations without fine-tuning.
- [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.com/zh/resources/arxiv-2508-05615/) — 2025-08-07
  GUI-RC aggregates multiple grounding predictions into spatial voting grids to choose a consensus region. GUI-RCPO then turns agreement with that region into a reward for test-time policy updates on unlabeled GUI screenshots.
- [A Training-Free, Task-Agnostic Framework for Enhancing MLLM Performance on High-Resolution Images](https://awesomecua.com/zh/resources/arxiv-2507-10202/) — 2025-07-14
  Introduces Extract Candidate then Predict (ECP), a training-free two-stage method for high-resolution images, evaluated partly on 4K GUI grounding.
- [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://awesomecua.com/zh/resources/arxiv-2507-10610/) — 2025-07-13
  Introduces LaSM, a training-free defense that selectively scales attention and MLP components to improve alignment with task-relevant screen regions. It evaluates the approach against pop-up-based GUI injection attacks.
- [Understanding GUI Agent Localization Biases through Logit Sharpness](https://awesomecua.com/zh/resources/arxiv-2506-15425/) — 2025-06-18
  Introduces a finer-grained taxonomy of GUI localization errors and a logit-based Peak Sharpness Score for analyzing coordinate-prediction uncertainty. A context-aware cropping method refines the visual input without retraining the grounding model.
- [Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments](https://awesomecua.com/zh/resources/arxiv-2501-10893/) — 2025-01-18
  Learn-by-interact synthesizes agent interaction trajectories from documentation and derives instructions from their histories for training or in-context use across web and desktop tasks.
- [Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model](https://awesomecua.com/zh/resources/url-6942e8211a0f59eb7878/) — 2025
  Presents Halligan, a VLM agent that abstracts visual CAPTCHAs into frames, elements and keypoints and solves each as a search problem through generated interaction code, tested on 2,600 challenges of 26 types.
- [Prompting Is All You Need: Automated Android Bug Replay with Large Language Models](https://awesomecua.com/zh/resources/arxiv-2306-01987/) — 2023-06-03
  Introduces AdbGPT, a prompting-based approach that uses LLMs to replay app bugs from written reports, applying few-shot examples and reasoning without model training.
- [Language Models can Solve Computer Tasks](https://awesomecua.com/zh/resources/arxiv-2303-17491/) — 2023-03-30
  Introduces recursive criticism and improvement prompting for language-model agents performing computer tasks, evaluated on MiniWoB++ with a small number of demonstrations per task.
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://awesomecua.com/zh/resources/arxiv-2210-03629/) — 2022-10-06
  Introduces ReAct, a method that interleaves reasoning traces and actions for language-model agents; WebShop is one of its interactive decision-making evaluations.
- [Enabling Conversational Interaction with Mobile UI using Large Language Models](https://awesomecua.com/zh/resources/arxiv-2209-08655/) — 2022-09-18
  Studies few-shot prompting of a single language model for four mobile-UI interaction tasks, aiming to support conversational interface use without a separate trained model for each task.

## 工程与产业

- [AdaGround](https://awesomecua.com/zh/resources/github-bcwang-sjtu-adaground/) — Date not recorded
  A training-free GUI grounding framework that adjusts screenshot zoom to target size and checks proposed clicks before accepting or revising them.
- [AdbGPT](https://awesomecua.com/zh/resources/github-sidongfeng-adbgpt/) — Date not recorded
  An Android bug replay agent that extracts action details from written bug reports and uses the current app screen to guide reproduction steps.
- [AgentOccam](https://awesomecua.com/zh/resources/github-amazon-science-agentoccam/) — Date not recorded
  AgentOccam is a web agent that uses webpage descriptions and action strings to carry out tasks from a URL and instruction. Its repository includes task configurations and evaluation scripts.
- [CanpGrid](https://awesomecua.com/zh/resources/github-yeqi99-canpgrid/) — Date not recorded
  CanpGrid provides an adaptive recursive image grid overlay for progressive coarse-to-fine visual localization by multimodal agents.
- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.com/zh/resources/github-yan98-gta1/) — Date not recorded
  GTA1 is a GUI agent that samples action proposals, uses a judge to select one, and maps it to a visual target with a reinforcement-trained grounding model.
- [GUI Grounding via Iterative Narrowing](https://awesomecua.com/zh/resources/github-ant-8-gui-grounding-via-iterative-narrowing/) — Date not recorded
  Implements training-free iterative visual crop-and-narrow refinement for improving MLLM coordinate grounding on GUI screenshots.
- [GUI-explorer](https://awesomecua.com/zh/resources/github-ilearn-lab-acl25-gui-explorer/) — Date not recorded
  Android agent code that explores apps over ADB, mines transition-aware knowledge into a knowledge base behind a retrieval service, and runs an OpenAI-backed agent demo that draws on it.
- [Hoverclick](https://awesomecua.com/zh/resources/github-neilyysun-ui-hoverclick/) — Date not recorded
  Hoverclick introduces test-time cursor hover verification and visual attention guidance before committing GUI click actions.
- [MarkForge](https://awesomecua.com/zh/resources/github-lannistersyh-markforge/) — Date not recorded
  MarkForge provides deterministic, auditable Set-of-Mark badge rendering and coordinate resolution for multimodal GUI agents.
- [MM-Navigator](https://awesomecua.com/zh/resources/github-zzxslp-mm-navigator/) — Date not recorded
  Example code for the GPT-4V smartphone navigation study: a prompt builder that sends raw and number-tagged screenshots plus action history to GPT-4V for the next Android action, and an action-matching evaluation script.
- [RCI Agent](https://awesomecua.com/zh/resources/github-posgnu-rci-agent/) — Date not recorded
  A MiniWoB++ agent that uses explicit and implicit recursive criticism-and-improvement prompts to refine action plans and ground actions to browser state.
- [Re-Prefill](https://awesomecua.com/zh/resources/github-linjiaping1-re-prefill/) — Date not recorded
  Re-Prefill calibrates prefill visual attention representations in vision-language models to improve zero-shot GUI grounding accuracy.
- [RegionFocus](https://awesomecua.com/zh/resources/github-tiangeluo-regionfocus/) — Date not recorded
  RegionFocus provides code for GUI grounding through selected screenshot regions. The release evaluates UI-TARS and Qwen2.5-VL on ScreenSpot-Pro.
- [TAG attention-driven GUI grounding](https://awesomecua.com/zh/resources/github-heimingx-tag/) — Date not recorded
  Grounding and evaluation code that aggregates a pretrained vision-language model’s attention maps to localize requested interface elements without fine-tuning.
- [Zoom Consistency Routing](https://awesomecua.com/zh/resources/github-omxyz-zoom-consistency-routing/) — Date not recorded
  A training-free router chooses between visual grounding models using prediction distance from a zoom crop's center. The release includes ScreenSpot-Pro evaluation scripts.
