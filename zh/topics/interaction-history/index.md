# 交互历史

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/interaction-history/records.jsonl

## 论文与综述

- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.github.io/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing why changed action preferences alone need not improve held-out accuracy.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.github.io/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.github.io/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.github.io/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.github.io/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.github.io/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://awesomecua.github.io/resources/arxiv-2605-11212/) — 2026-05-11
  Trains GUI agents with a learned selector that removes repeated visual patches across consecutive screenshots while preserving spatial structure. ReVision evaluates this history representation on OSWorld, WebTailBench and AgentNetBench.
- [Where and How to Prune: An Empirical Study of Visual Token Pruning for GUI Agent Navigation](https://awesomecua.github.io/resources/arxiv-2603-26041/) — 2026-03-27
  Studies visual token pruning for GUI navigation, separating reusable screenshot encoder embeddings from later language-model computation. The analysis examines foreground-background token allocation and spatial coverage when pruning historical screenshots.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.github.io/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions rather than recall alone.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.github.io/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-01763/) — 2025-12-01
  HiconAgent trains GUI policies to use history through variable-length context sampling and paired policy updates with compressed and complete histories. Its compression retains past actions while removing historical observations, and an alignment loss couples the two branches.
- [WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance](https://awesomecua.github.io/resources/arxiv-2511-12997/) — 2025-11-17
  Introduces WebCoach, which condenses navigation logs into persistent episodic memory and retrieves experiences by similarity and recency. Runtime hooks selectively supply advice to browser agents, evaluated on WebVoyager without retraining the underlying models.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [WebGraphEval: Multi-Turn Trajectory Evaluation for Web Agents using Graph Representation](https://awesomecua.github.io/resources/arxiv-2510-19205/) — 2025-10-22
  Introduces WebGraphEval, which merges multiple agents' trajectories into a weighted graph of canonical actions. Structural analyses examine recurring behavior, inefficient paths and important decision points beyond a final success score.
- [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.github.io/resources/arxiv-2510-09038/) — 2025-10-10
  Encodes GUI trajectories into compact continuous embeddings that can be retrieved directly into an agent’s input. An automated environment-discovery and rollout pipeline expands this memory for long tasks and unfamiliar interfaces.
- [JEF-Hinter: Leveraging Offline Knowledge for Improving Web Agents Adaptation](https://awesomecua.github.io/resources/arxiv-2510-04373/) — 2025-10-05
  Introduces JEF-Hinter, which distills successful and failed trajectories into compact episodic hints and retrieves them for the current agent state. Web benchmark experiments examine guidance from decisive steps rather than full demonstration replay.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.github.io/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.github.io/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.github.io/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.github.io/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [Lightweight Neural App Control](https://awesomecua.github.io/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [Identifying User Goals from UI Trajectories](https://awesomecua.github.io/resources/arxiv-2406-14314/) — 2024-06-20
  Defines goal identification from observed UI trajectories and an evaluation method for comparing intent descriptions within the same interface context. Experiments reuse Android and web automation data to compare human and model inference of users’ detailed goals.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.github.io/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [AllTogether: Investigating the Efficacy of Spliced Prompt for Web Navigation using Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-18331/) — 2023-10-20
  AllTogether standardizes prompts for HTML-based web navigation and compares prompting with instruction fine-tuning. Its analysis examines how HTML context, interaction history, and current environmental feedback affect task execution.
- [Eager: Programming Repetitive Tasks by Example](https://awesomecua.github.io/resources/url-bf0c11018e49dff6aeec/) — 1991
  Describes Eager, which detects repeated HyperCard interactions, generalizes them into loops, and previews predicted actions by highlighting interface objects. Users can then ask it to execute the inferred repetitive task.

## 模型

- [Aria-UI context-aware checkpoint](https://awesomecua.github.io/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
