# Interaction history

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/interaction-history/records.jsonl

## Papers & surveys

- [Visual Token Routing: Learning to keep tokens that matter](https://awesomecua.com/resources/arxiv-2611-06854/) — 2026-11-04
  Introduces Visual Token Routing (VTR), which selects visual tokens from current and earlier screenshots to reduce computer-use agent inference cost while retaining action-relevant information.
- [Can LLM Agents Learn to Test? Maintaining Scoped Experience as Testing Evidence for Mobile GUI Testing](https://awesomecua.com/resources/arxiv-2611-05873/) — 2026-11-04
  AdaptiTest specifies scoped, revalidated memory for an LLM-based mobile GUI tester to reuse routes and locators across read-only Android test workflows.
- [From Local Skills to Long-Horizon Web Tasks: Progressive Skill Exploration for LLM Web Agents](https://awesomecua.com/resources/arxiv-2611-03116/) — 2026-11-02
  Introduces SCOPE, a training method for long web-agent tasks that discovers local skills from rollouts, composes them into chains, and expands them using failure experience.
- [MAPLE: A Multimodal Mobile Agent with Playbook-Learned Experience](https://awesomecua.com/resources/arxiv-2611-01351/) — 2026-10-31
  Introduces MAPLE, a training-free multi-agent framework that shares step-level experience while navigating mobile GUIs and updates prompts during execution.
- [MemU-Bench: Benchmarking GUI Agents on Long-Horizon User Interactions](https://awesomecua.com/resources/arxiv-2611-00191/) — 2026-10-30
  Introduces MemU-Bench for mobile GUI tasks that depend on past user interactions, alongside AppMem, a training-free memory framework for retrieving app-specific context.
- [GUIFlow: Temporal Redundancy-Aware Incremental Inference for GUI Agents](https://awesomecua.com/resources/arxiv-2610-34959/) — 2026-10-26
  Introduces GUIFlow, an incremental inference framework that reuses visual, language, and action computation across successive GUI-agent steps.
- [iPrefBench: A User-Centric Benchmark for Personalized Mobile Use Agents](https://awesomecua.com/resources/arxiv-2610-34735/) — 2026-10-26
  Introduces iPrefBench, an iOS benchmark for mobile agents that tests when they infer missing user preferences from activity history and when they ask the user.
- [Reuse, Rewrite, or Reject: Evidence-Constrained Trace Reuse for Repeated Mobile GUI Control](https://awesomecua.com/resources/arxiv-2610-31712/) — 2026-10-22
  Proposes graph-text templates that let mobile GUI agents reuse, adapt, or discard steps from earlier executions based on the current instruction and UI state.
- [Subgoal-aware Memory Graph for GUI Agent](https://awesomecua.com/resources/arxiv-2610-31307/) — 2026-10-22
  Proposes a subgoal-aware memory graph that turns past mobile GUI agent trajectories into reusable evidence for decisions across tasks.
- [ScopeMem: Latent Memory That Learns Where to Revise Frozen GUI Agents](https://awesomecua.com/resources/arxiv-2610-26503/) — 2026-10-19
  ScopeMem conditions latent-memory prefixes on a frozen GUI agent's initial action and trains them to correct errors while preserving correct decisions. Its evaluation separates action repairs from harmful revisions.
- [Focused Omni-Modal GUI Agents](https://awesomecua.com/resources/arxiv-2610-26203/) — 2026-10-19
  FocusGUI learns step-specific weights over screenshot, audio, video and interaction-context channels, injecting a compact residual into a frozen decoder without pruning its inputs.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [Seeing, Maintaining, and Learning: The Evolution of Multimodal Agent Memory](https://awesomecua.com/resources/arxiv-2610-19366/) — 2026-10-14
  Surveys multimodal memory using representation and management axes, distinguishing fixed-policy updates from policy evolution and comparing GUI memory evaluation with other modalities.
- [Reading Right, Acting Wrong: Diagnosing Decision Failures of System One Models in Agent Loops](https://awesomecua.com/resources/arxiv-2610-18579/) — 2026-10-13
  Pairs factual probes with next-action choices on frozen agent traces, including Mind2Web, to diagnose reading-decision gaps without closed-loop execution.
- [ReSAIL: Mitigating Collapse in Iterative Agent Self-Distillation](https://awesomecua.com/resources/arxiv-2609-39306/) — 2026-09-30
  Introduces ReSAIL, an augmentation for iterative agent self-distillation that selects informative interaction steps; it also tests GUI-agent action prediction.
- [SimTrace: Grounded Multimodal User Trajectories Generation for Online User Modeling](https://awesomecua.com/resources/arxiv-2609-38397/) — 2026-09-29
  Introduces SimTrace, a framework that generates synthetic multimodal web clickstreams by pairing a computer-use client agent's actions with web observations and user context.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.com/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.com/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [TRACE: Trajectory-robust Admission with Evidence Ordering for Efficient GUI Agents](https://awesomecua.com/resources/arxiv-2609-10297/) — 2026-09-09
  TRACE orders screenshot evidence for monotonic visual-token reduction using layout priors, instruction relevance and feature novelty. Spatial token reserves and incremental KV contraction aim to preserve useful evidence for future GUI targets without repeatedly encoding retired frames.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.com/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [Monitoring Web Agents Without Internal Signals: Observable Trajectories and Key-Step Supervision](https://awesomecua.com/resources/arxiv-2609-02057/) — 2026-09-02
  Predicts web-agent failure risk from observable trajectory prefixes using cross-step behavior and black-box consistency queries. Key-step labels preserve valid early prefixes of failed runs, and evaluation tests early intervention and transfer across website categories.
- [Inducing Task Models from Computer-Use Traces](https://awesomecua.com/resources/arxiv-2608-20319/) — 2026-08-20
  Task Model Induction disentangles concurrent activities in screenshot and mouse/keyboard traces, then constructs hierarchical goals and procedural control flow for each task. Evaluation tests reconstruction of observed execution and reuse of derived skills on held-out tasks.
- [MemPrism: Task-Conditioned Relational Memory Views for Long-Horizon Agents](https://awesomecua.com/resources/arxiv-2608-06745/) — 2026-08-07
  Introduces MemPrism, which records prior interactions and builds task-conditioned relational memory views for decisions in long-horizon web-agent tasks.
- [The Next Screenshot Knows: Gated Hindsight Distillation for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-06065/) — 2026-08-06
  Gated Hindsight Distillation gives a teacher access to the next screenshot during training while the student sees only the available trajectory prefix. Distillation is applied when hindsight repairs a student failure, and the resulting policies are evaluated on Android tasks.
- [FocusMem: Factorizing Content, Readout, and Trust in Latent GUI Memory](https://awesomecua.com/resources/arxiv-2608-04530/) — 2026-08-05
  Introduces FocusMem, a latent memory interface for GUI agents that separates stored content, state-conditioned readout, and a gate for irrelevant retrieved experience.
- [Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-03327/) — 2026-08-04
  This study separates tool-adoption behavior from task competence in hybrid GUI–MCP agents. It tests tool-use incentives and screenshot-history compression, showing that changed action preferences can coexist with unchanged held-out accuracy.
- [Qwen-CUA: Native Computer Use for (almost) Everything](https://awesomecua.com/resources/arxiv-2608-02352/) — 2026-08-03
  Qwen-CUA operates through screenshots and keyboard/mouse events while compressing older visual history into reusable context blocks. Its report combines verifiable task generation, trajectory-based training and separate browser and Bash-augmented studies.
- [KnowAct-GUIClaw: Know Deeply, Act Perfectly, Personal GUI Assistant with Self-Evolving Memory and Skill](https://awesomecua.com/resources/arxiv-2607-12625/) — 2026-07-14
  KnowAct-GUIClaw combines a host planner with pluggable GUI subagents, attributable experience memory and an evolving skill library. It uses user profiles and feedback for task decomposition and evaluates transfer across Android, iOS, HarmonyOS and Windows.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.com/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.com/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A Benchmark and Framework for Evaluating Next Action Predictions in Spreadsheets](https://awesomecua.com/resources/arxiv-2606-13802/) — 2026-06-11
  Introduces a benchmark and online evaluation method for predicting the next spreadsheet action from a user's action history, using curated action sequences.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.com/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.com/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models](https://awesomecua.com/resources/arxiv-2606-01790/) — 2026-06-01
  STaR-KV compresses GUI-agent KV caches by calibrating visual-token importance across attention subspaces and interaction time. Its training-free scoring combines spatial specialization, temporal redundancy and an adaptive temperature, evaluated at matched cache budgets.
- [PersonaTrail: Benchmarking Personalized Web Agents through Browsing Trails](https://awesomecua.com/resources/arxiv-2607-20482/) — 2026-05-30
  Introduces PersonaTrail, a benchmark for personalized web agents using browsing histories, and PACMem, a structured memory method for guiding navigation.
- [Masking Stale Observations Helps Search Agents -- Until It Doesn't: A Regime Map and Its Mechanism](https://awesomecua.com/resources/arxiv-2606-00408/) — 2026-05-29
  Studies when masking older retrieved pages helps long-horizon search agents manage context, using offline and live-web search benchmarks and analysis of reopened pages.
- [Scaling, Benchmarking, and Reasoning of Vision-Language Agents for Mobile GUI Navigation](https://awesomecua.com/resources/arxiv-2605-27134/) — 2026-05-26
  HyperTrack provides mobile GUI navigation tasks across Chinese apps, while GUIEvalKit benchmarks VLM agents offline and supports analysis of training scale and history.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.com/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [MementoGUI: Learning Agentic Multimodal Memory Control for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2605-18652/) — 2026-05-18
  MementoGUI learns a controller for selecting, compressing and retrieving textual and region-level visual memories while leaving the GUI-agent backbone fixed. It also converts computer-use traces into controller training data and evaluates semantic actions, progress and memory consistency on long-horizon tasks.
- [DiagEval: Trajectory-Conditioned Diagnosis for Reliable Software Evaluation with GUI Agents](https://awesomecua.com/resources/arxiv-2605-17439/) — 2026-05-17
  DiagEval diagnoses failed GUI-agent evaluations of interactive software by reusing failed trajectories for targeted probes that distinguish execution errors from defects.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.com/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [Known By Their Actions: Fingerprinting LLM Browser Agents via UI Traces](https://awesomecua.com/resources/arxiv-2605-14786/) — 2026-05-14
  A study shows that websites can infer the model behind a browser agent from passively recorded UI actions and timing traces across web tasks.
- [SimPersona: Learning Discrete Buyer Personas from Raw Clickstreams for Grounded E-Commerce Agents](https://awesomecua.com/resources/arxiv-2605-14205/) — 2026-05-14
  SimPersona learns buyer types from clickstreams and uses persona tokens to condition web agents trained on browsing traces for live storefront tasks.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.com/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://awesomecua.com/resources/arxiv-2605-11212/) — 2026-05-11
  Trains GUI agents with a learned selector that removes repeated visual patches across consecutive screenshots while preserving spatial structure. ReVision evaluates this history representation on OSWorld, WebTailBench and AgentNetBench.
- [BaRA: Budget-constrained and Reliable Web Data Collection Agent](https://awesomecua.com/resources/arxiv-2607-00007/) — 2026-05-02
  Introduces BaRA, a web data-collection agent that discovers live site links, checks extracted text, images, and videos, and uses history to recover from failures.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.com/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [Same Outcomes, Different Journeys: A Trace-Level Framework for Comparing Human and GUI-Agent Behavior in Production Search Systems](https://awesomecua.com/resources/arxiv-2604-07929/) — 2026-04-09
  Presents a trace-level framework for comparing GUI agents with people on task outcomes, queries, and interface navigation in a production audio-search application.
- [Read More, Think More: Revisiting Observation Reduction for Web Agents](https://awesomecua.com/resources/arxiv-2604-01535/) — 2026-04-02
  Studies HTML and accessibility-tree observations for web agents, relating their usefulness to model capability and thinking budget, and proposes diff-based observation history to save tokens.
- [Where and How to Prune: An Empirical Study of Visual Token Pruning for GUI Agent Navigation](https://awesomecua.com/resources/arxiv-2603-26041/) — 2026-03-27
  Studies visual token pruning for GUI navigation, separating reusable screenshot encoder embeddings from later language-model computation. The analysis examines foreground-background token allocation and spatial coverage when pruning historical screenshots.
- [Hybrid Self-evolving Structured Memory for GUI Agents](https://awesomecua.com/resources/arxiv-2603-10291/) — 2026-03-11
  Introduces HyMEM, a graph-based memory for GUI agents that links symbolic task knowledge with trajectory embeddings and refreshes working memory during computer-use tasks.
- [Ares: Adaptive Reasoning Effort Selection for Efficient LLM Agents](https://awesomecua.com/resources/arxiv-2603-07915/) — 2026-03-09
  Introduces Ares, a router that selects a reasoning level for each step of a general LLM agent from its interaction history, with web agents among the evaluation settings.
- [Enhancing Web Agents with a Hierarchical Memory Tree](https://awesomecua.com/resources/arxiv-2603-07024/) — 2026-03-07
  Introduces Hierarchical Memory Tree (HMT), which organizes web-agent trajectories by intent, stage and action, then uses the hierarchy to plan and act on websites.
- [M$^2$: Dual-Memory Augmentation for Long-Horizon Web Agents via Trajectory Summarization and Insight Retrieval](https://awesomecua.com/resources/arxiv-2603-00503/) — 2026-02-28
  Introduces M², a training-free memory framework for long-horizon web agents that summarizes interaction history and retrieves task guidance from an offline insight bank.
- [ST-Lite: Training-Free KV Cache Compression with Spatio-Trajectory Guidance for Long-Horizon GUI Agents](https://awesomecua.com/resources/arxiv-2603-00188/) — 2026-02-27
  Introduces ST-Lite, a training-free KV cache compression scheme for vision-language GUI agents that filters redundant frames and preserves small UI elements in interaction traces.
- [Spatio-Temporal Token Pruning for Efficient High-Resolution GUI Agents](https://awesomecua.com/resources/arxiv-2602-23235/) — 2026-02-26
  GUIPruner compresses high-resolution screenshots and interaction history for GUI navigation through training-free resizing and layout-aware token pruning.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.com/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions.
- [MUZZLE: Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks](https://awesomecua.com/resources/arxiv-2602-09222/) — 2026-02-09
  MUZZLE evaluates web-agent exposure to indirect prompt injection by finding attack surfaces in agent trajectories and refining injected instructions from execution feedback.
- [Me-Agent: A Personalized Mobile Agent with Two-Level User Habit Learning for Enhanced Interaction](https://awesomecua.com/resources/arxiv-2601-20162/) — 2026-01-28
  Me-Agent personalizes mobile agent behavior through a preference reward model and hierarchical memory for long-term and app-specific habits, and introduces User FingerTip.
- [Compress to Focus: Efficient Coordinate Compression for Policy Optimization in Multi-Turn GUI Agents](https://awesomecua.com/resources/arxiv-2601-11631/) — 2026-01-14
  CCPO couples GUI policy optimization with coordinate-guided compression of past visual observations. It aggregates targets across rollouts to focus retained context and uses distance-based advantages to train grounding and compression together.
- [Trace2Ground: Scenario, Disambiguation, and Relation Traces for Web GUI Grounding](https://awesomecua.com/resources/url-8b87df7992bc7b4da1a5/) — 2026
  Trace2Ground builds a web GUI grounding dataset from HTML/DOM elements and simulated traces, testing scenario, duplicate-label, and relational instructions.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.com/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://awesomecua.com/resources/arxiv-2512-01763/) — 2025-12-01
  HiconAgent trains GUI policies to use history through variable-length context sampling and paired policy updates with compressed and complete histories. Its compression retains past actions while removing historical observations, and an alignment loss couples the two branches.
- [Real-Time Procedural Learning From Experience for AI Agents](https://awesomecua.com/resources/arxiv-2511-22074/) — 2025-11-27
  PRAXIS stores action outcomes and retrieves past state-action-result examples to guide agent decisions, with evaluation on the REAL web browsing benchmark.
- [WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance](https://awesomecua.com/resources/arxiv-2511-12997/) — 2025-11-17
  Introduces WebCoach, which condenses navigation logs into persistent episodic memory and retrieves experiences by similarity and recency. Runtime hooks selectively supply advice to browser agents, evaluated on WebVoyager without retraining the underlying models.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.com/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [UI-Hawk: Unleashing the Screen Stream Understanding for Mobile GUI Agents](https://awesomecua.com/resources/url-9113270916a36b4b76f1/) — 2025-11
  Mobile GUI agent whose history-aware visual encoder reads earlier screenshots with the current one, trained by a curriculum from grounding, referring, screen QA and summarization to navigation; adds the FunUI benchmark.
- [GUI-Rise: Structured Reasoning and History Summarization for GUI Navigation](https://awesomecua.com/resources/arxiv-2510-27210/) — 2025-10-31
  Combines structured progress-and-decision reasoning with history summarization to improve cross-domain generalization in GUI navigation agents.
- [See, Think, Act: Online Shopper Behavior Simulation with VLM Agents](https://awesomecua.com/resources/arxiv-2510-19245/) — 2025-10-22
  Studies online shopper action prediction with VLM agents using webpage screenshots, HTML, and action history from OPeRA, trained with SFT and hierarchical RL rewards.
- [WebGraphEval: Multi-Turn Trajectory Evaluation for Web Agents using Graph Representation](https://awesomecua.com/resources/arxiv-2510-19205/) — 2025-10-22
  Introduces WebGraphEval, which merges multiple agents' trajectories into a weighted graph of canonical actions. Structural analyses examine recurring behavior, inefficient paths and important decision points beyond a final success score.
- [Genesis: Evolving Attack Strategies for LLM Web Agent Red-Teaming](https://awesomecua.com/resources/arxiv-2510-18314/) — 2025-10-21
  Introduces Genesis, a red-teaming framework that generates adversarial injections for web agents and revises attack strategies using responses and interaction logs.
- [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.com/resources/arxiv-2510-09038/) — 2025-10-10
  Encodes GUI trajectories into compact continuous embeddings that can be retrieved directly into an agent’s input. An automated environment-discovery and rollout pipeline expands this memory for long tasks and unfamiliar interfaces.
- [JEF-Hinter: Leveraging Offline Knowledge for Improving Web Agents Adaptation](https://awesomecua.com/resources/arxiv-2510-04373/) — 2025-10-05
  Introduces JEF-Hinter, which distills successful and failed trajectories into compact episodic hints and retrieves them for the current agent state. Web benchmark experiments examine guidance from decisive steps.
- [GUI-KV: Efficient GUI Agents via KV Cache with Spatio-Temporal Awareness](https://awesomecua.com/resources/arxiv-2510-00536/) — 2025-10-01
  GUI-KV compresses vision-language agents’ attention caches using visual-token saliency and redundancy between screenshot frames. The method requires no retraining and evaluates how cache budgets affect GUI action accuracy and computational cost.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.com/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [ReSum: Unlocking Long-Horizon Search Intelligence via Context Summarization](https://awesomecua.com/resources/arxiv-2509-13313/) — 2025-09-16
  Introduces ReSum, which compresses interaction histories during long web searches, and ReSum-GRPO, which trains agents to reason across the resulting segments.
- [PG-Agent: An Agent Powered by Page Graph](https://awesomecua.com/resources/arxiv-2509-03536/) — 2025-08-27
  Introduces PG-Agent, which turns GUI operation episodes into page graphs and retrieves guidance from them to support task decomposition in new scenarios.
- [OdysseyBench: Evaluating LLM Agents on Long-Horizon Complex Office Application Workflows](https://awesomecua.com/resources/arxiv-2508-09124/) — 2025-08-12
  Introduces OdysseyBench for evaluating long-horizon workflows across office applications, plus HomerAgents to generate tasks from environment exploration and dialogue synthesis.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.com/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents](https://awesomecua.com/resources/arxiv-2507-21071/) — 2025-06-09
  FingerTip 20K gathers 20K human Android demonstrations from users' long-term everyday app use, with user context, to evaluate proactive task suggestion and preference-aware task execution.
- [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2505-21496/) — 2025-05-27
  UI-Genie jointly improves a mobile GUI agent and a reward model that processes screenshots with interaction history and supplies action- and task-level feedback. Its data pipeline uses rule-based verification, corrupted trajectories, and hard negatives to support reward-guided exploration and iterative training.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [ScaleTrack: Scaling and back-tracking Automated GUI Agents](https://awesomecua.com/resources/arxiv-2505-00416/) — 2025-05-01
  ScaleTrack combines a unified collection of GUI grounding samples with a planning objective that predicts the next action while reconstructing prior actions. This backward prediction links the current screenshot to interaction history during agent training.
- [R2D2: Remembering, Replaying and Dynamic Decision Making with a Reflective Agentic Memory](https://awesomecua.com/resources/arxiv-2501-12485/) — 2025-01-21
  R2D2 gives web agents a replay-buffer map of visited pages and a reflection step for analyzing errors and revising navigation strategies.
- [Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments](https://awesomecua.com/resources/arxiv-2501-10893/) — 2025-01-18
  Learn-by-interact synthesizes agent interaction trajectories from documentation and derives instructions from their histories for training or in-context use across web and desktop tasks.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.com/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [Lightweight Neural App Control](https://awesomecua.com/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [Large Language Models Empowered Personalized Web Agents](https://awesomecua.com/resources/arxiv-2410-17236/) — 2024-10-22
  PersonalWAB benchmarks personalized web tasks, while PUMA retrieves relevant past web behavior to adapt agents' instruction handling and actions.
- [ExACT: Teaching AI Agents to Explore with Reflective-MCTS and Exploratory Learning](https://awesomecua.com/resources/arxiv-2410-02052/) — 2024-10-02
  ExACT combines reflective tree search with learning from search experience to help web agents explore, assess states and backtrack on VisualWebArena.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.com/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [Identifying User Goals from UI Trajectories](https://awesomecua.com/resources/arxiv-2406-14314/) — 2024-06-20
  Defines goal identification from observed UI trajectories and an evaluation method for comparing intent descriptions within the same interface context. Experiments reuse Android and web automation data to compare human and model inference of users’ detailed goals.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.com/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [AllTogether: Investigating the Efficacy of Spliced Prompt for Web Navigation using Large Language Models](https://awesomecua.com/resources/arxiv-2310-18331/) — 2023-10-20
  AllTogether standardizes prompts for HTML-based web navigation and compares prompting with instruction fine-tuning. Its analysis examines how HTML context, interaction history, and current environmental feedback affect task execution.
- [Eager: Programming Repetitive Tasks by Example](https://awesomecua.com/resources/url-bf0c11018e49dff6aeec/) — 1991
  Describes Eager, which detects repeated HyperCard interactions, generalizes them into loops, and previews predicted actions by highlighting interface objects. Users can then ask it to execute the inferred repetitive task.

## Benchmarks

- [PersonalAlign](https://awesomecua.com/resources/github-ilearn-lab-acl26-personalalign/) — Date not recorded
  PersonalAlign releases AndroidIntent evaluations of personalized mobile GUI agents and HIM-Agent memory for using long-term interaction records.
- [VideoWebArena](https://awesomecua.com/resources/github-ljang0-videowebarena/) — Date not recorded
  VideoWebArena evaluates web agents that use video tutorials to complete website tasks. Its released benchmark includes task configurations, environments, and an evaluation pipeline.

## Datasets

- [Agent-Trajectories](https://awesomecua.com/resources/url-61c09ceb7c78f6b5e74f/) — Date not recorded
  An archive dataset of evaluated web, Android, and iOS agent trajectories, including iOS emulator runs and WebArena runs used for agent refinement.
- [Fanbin/waa_steve_trajectories](https://awesomecua.com/resources/url-2bab4b78c81cde1d5ecb/) — Date not recorded
  A dataset of STEVE-R1 evaluation trajectories on WindowsAgentArena, pairing task screenshots and agent responses with action traces and outcome labels.
- [gameworld-qwen38-flash-next-trajectory](https://awesomecua.com/resources/url-e3c3e5a5a00f024ebac5/) — Date not recorded
  A dataset of 1,020 GameWorld agent trajectories from general and computer-use interfaces, with step records, screenshots, outcomes, and metrics.
- [go-browse-wa-raw](https://awesomecua.com/resources/url-edb0eadcc3df5559e941/) — Date not recorded
  go-browse-wa-raw is a browser-agent trajectory dataset with page observations, actions, goals, rewards, and images. Its train split contains 196462 examples.
- [WenyiWU0111/CoMEM-agent-memory-trajectories](https://awesomecua.com/resources/url-87e0195f2401d5f6f66f/) — Date not recorded
  A dataset for GUI-agent memory research containing expanded web links, synthesized tasks, and executed trajectories with successful and failed outcomes.
- [xunsss/osworld2-codex-gpt56sol-0624-attempt-preview](https://awesomecua.com/resources/url-bf57897ba4d047112345/) — Date not recorded
  This OSWorld-V2 dataset provides compact tables for browsing Codex task summaries, attempts, trajectory events, and executed GUI or CLI actions.

## Models

- [AGW-35B](https://awesomecua.com/resources/url-39e2a96f88ed3223ece9/) — Date not recorded
  A screenshot-based GUI action model fine-tuned on 79,266 synthetic interaction examples. It uses a task, current screen and recent actions to predict structured computer-use calls.
- [Aria-UI context-aware checkpoint](https://awesomecua.com/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
- [Aria-UI/Aria-UI-base](https://awesomecua.com/resources/url-2866edbea80fa34aa684/) — Date not recorded
  Aria-UI/Aria-UI-base is a released GUI grounding checkpoint that maps an instruction and interface image to target coordinates. The card documents history-aware input and inference examples.
- [OpenCUA-7B](https://awesomecua.com/resources/url-2803eda78cff23fb63cc/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that produces desktop actions from screenshots and instructions, using recent screen history for context.
- [STEVE-R1-7B-SFT](https://awesomecua.com/resources/url-666844c28be1138b0e37/) — Date not recorded
  STEVE-R1-7B-SFT is a released computer-use checkpoint trained with step-verified data for desktop agent tasks and evaluated on Windows and Ubuntu environments.

## Engineering & industry

- [Auto-UI](https://awesomecua.com/resources/github-gimme1dollar-auto-ui/) — Date not recorded
  A multimodal interface agent that uses earlier actions and future action plans to predict the next action. The repository provides training and inference instructions.
- [COCO4GUI Dataset Importer](https://awesomecua.com/resources/github-harpreetsahota204-coco4gui-fiftyone/) — Date not recorded
  COCO4GUI Dataset Importer loads GUI interaction annotations into FiftyOne, preserving element regions, action points, workflow sequences, and application metadata.
- [GUI-Rise](https://awesomecua.com/resources/github-leon022-gui-rise-code/) — Date not recorded
  A GUI navigation agent that combines stepwise reasoning with history summarization; its repository provides supervised training, reinforcement learning, and evaluation instructions.
- [HiconAgent](https://awesomecua.com/resources/github-ilearn-lab-cvpr26-hiconagent/) — Date not recorded
  HiconAgent provides GUI-policy training code that samples histories of varied lengths and compresses past interactions during policy optimization.
- [Jev Social](https://awesomecua.com/resources/github-socai-io-jev-social/) — Date not recorded
  Jev Social researches Instagram, TikTok, and LinkedIn through a signed-in Chrome browser, choosing successive actions and assembling reports from captured source evidence.
- [MemGUI-Agent](https://awesomecua.com/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [nocta-recorder](https://awesomecua.com/resources/github-nossa-y-nocta-recorder/) — Date not recorded
  A macOS recorder that stores screen snapshots, accessibility elements, OCR, input events, and audio in a local SQLite database and serves the captured activity through a local API.
- [Open Codex Computer History](https://awesomecua.com/resources/github-hqhq1025-open-codex-computer-history/) — Date not recorded
  Clean-room macOS implementation of event-stream interaction recording using Accessibility hit-testing, CGEvent taps, and SkyLight window snapshots.
- [Q-Verifier / Q-Reflector](https://awesomecua.com/resources/github-pockyitachi-q-verifier/) — Date not recorded
  Q-Reflector checks a GUI agent's action against before-and-after screenshots and task context, with training and online evaluation code.
- [rrweb](https://awesomecua.com/resources/github-rrweb-io-rrweb/) — Date not recorded
  rrweb captures web-page state and user interactions, then reconstructs sessions for replay through its recording, replay, and player packages.
- [Taxy AI](https://awesomecua.com/resources/github-taxyai-browser-extension/) — Date not recorded
  Taxy AI is a Chrome extension that turns user instructions and a simplified page DOM into clicks and text entry, then checks the updated page before continuing.
- [UI-Hawk](https://awesomecua.com/resources/github-imnearth-uihawk/) — Date not recorded
  UI-Hawk is a GUI agent designed to interpret sequences of screens during navigation. Its research release describes a history-aware visual encoder, screen tasks, and the FunUI benchmark.
