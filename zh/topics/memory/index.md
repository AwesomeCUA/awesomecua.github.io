# 记忆

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/memory/records.jsonl

## 论文与综述

- [Can LLM Agents Learn to Test? Maintaining Scoped Experience as Testing Evidence for Mobile GUI Testing](https://awesomecua.com/zh/resources/arxiv-2611-05873/) — 2026-11-04
  AdaptiTest specifies scoped, revalidated memory for an LLM-based mobile GUI tester to reuse routes and locators across read-only Android test workflows.
- [What Is This Memory Useful For? Measuring Task-Conditioned Utility in Long-Term Agent Memory](https://awesomecua.com/zh/resources/arxiv-2611-03930/) — 2026-11-02
  Introduces task-conditioned measurements and a dataset for assessing whether stored agent memories help later tasks, using factual-recall tasks built from web-agent memories.
- [ScienceCUA: Resource-to-Skill Construction and Execution-Guided Skill Evolution for Scientific Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2611-03238/) — 2026-11-02
  Introduces ScienceCUA, which turns scientific software documentation into reusable agent skills and revises them using execution feedback, with two audited evaluation variants.
- [Coati: Host-Grounded Execution for Installable Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2611-02644/) — 2026-11-02
  Introduces Coati, an installable Android GUI agent that checks action outcomes with phone-side evidence, stores per-app procedures, and routes simpler steps to a fast executor.
- [MemU-Bench: Benchmarking GUI Agents on Long-Horizon User Interactions](https://awesomecua.com/zh/resources/arxiv-2611-00191/) — 2026-10-30
  Introduces MemU-Bench for mobile GUI tasks that depend on past user interactions, alongside AppMem, a training-free memory framework for retrieving app-specific context.
- [From Interaction to Capability: Task Advancement as State and Supervision for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-37482/) — 2026-10-27
  Introduces Task Advancement Memory (TAM) for long GUI workflows, tracking task progress across applications and learning reusable operations from interactions with local results.
- [Harness-Model Collaboration for Long-Horizon Continual Learning](https://awesomecua.com/zh/resources/arxiv-2610-34724/) — 2026-10-26
  Introduces HaMo, a continual-learning framework for web agents that retrieves strategy cards from past workflows and updates model parameters to reuse them.
- [SkillShift-Bench: Benchmarking Skill Learning under Environment Evolution for Web Agents](https://awesomecua.com/zh/resources/arxiv-2610-33528/) — 2026-10-24
  Introduces SkillShift-Bench to evaluate how web agents reuse learned skills when task context, visual perception, or execution conditions change across web systems.
- [Subgoal-aware Memory Graph for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2610-31307/) — 2026-10-22
  Proposes a subgoal-aware memory graph that turns past mobile GUI agent trajectories into reusable evidence for decisions across tasks.
- [Diagnosing Personalization Failures in Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-30573/) — 2026-10-22
  PrefDiag-Bench diagnoses when and how user preferences should affect sequential mobile GUI agent actions, using staged probes and user context.
- [ScopeMem: Latent Memory That Learns Where to Revise Frozen GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-26503/) — 2026-10-19
  ScopeMem conditions latent-memory prefixes on a frozen GUI agent's initial action and trains them to correct errors while preserving correct decisions. Its evaluation separates action repairs from harmful revisions.
- [Not All Graphs Are Maps: A Task-Agnostic Exploration Framework for Mobile GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2610-22672/) — 2026-10-15
  TAG-Nav supplies Android GUI agents with destination and route memory distilled from offline app exploration. DestBench measures arrival at a reference pre-action screen, separately from downstream task execution.
- [ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation](https://awesomecua.com/zh/resources/arxiv-2610-22408/) — 2026-10-14
  ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.
- [Seeing, Maintaining, and Learning: The Evolution of Multimodal Agent Memory](https://awesomecua.com/zh/resources/arxiv-2610-19366/) — 2026-10-14
  Surveys multimodal memory using representation and management axes, distinguishing fixed-policy updates from policy evolution and comparing GUI memory evaluation with other modalities.
- [Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://awesomecua.com/zh/resources/arxiv-2610-18784/) — 2026-10-13
  Introduces CarryOn, which maintains evidence-linked task objects and remaining-work context across history compression, with evaluations on desktop tasks and web research.
- [Learning How to Remember: Memory Modality Selection for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-17928/) — 2026-10-13
  Introduces SwitchMem, which chooses a textual or visual representation of retrieved experience at each GUI interaction step.
- [Web$hell: A Unified Interface for Agentic Web Access](https://awesomecua.com/zh/resources/arxiv-2610-13416/) — 2026-10-09
  Introduces Web$hell, an interface that compiles live pages into persistent information and action objects so agents can gather evidence, navigate websites, and reuse acquired content through shared operations.
- [DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-11707/) — 2026-10-08
  Introduces DeltaReplay, which stores mobile GUI trajectories as transition graphs and decides at each step whether to reuse an action, substitute task-specific parameters, or defer to the base agent. This supports reuse of partially matching experiences without rewriting stored memory.
- [nanoMuse: An Open-Source Personal Agent for Every Device You Own](https://awesomecua.com/zh/resources/arxiv-2610-08699/) — 2026-10-06
  Presents nanoMuse, an open-source personal agent designed to act on phone and computer screens, with a shared conversation, action-checking Sentinel, and readable file memory.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.com/zh/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [TeleTune: Evolving Agent Skills From Offline Telemetry](https://awesomecua.com/zh/resources/arxiv-2610-05437/) — 2026-10-04
  Introduces TeleTune, which edits a textual skill library using held-out action prediction on offline software-use logs with missing goals or interleaved tasks. The learned workflows also guide retrieval of demonstrations for subsequent web-agent execution.
- [Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents](https://awesomecua.com/zh/resources/arxiv-2610-01787/) — 2026-10-01
  Studies how to route different parts of GUI experience into model weights or runtime context. It separates locators, procedures, state facts, and lessons, then predicts their destination from recurrence and dependence on the current state.
- [Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories](https://awesomecua.com/zh/resources/arxiv-2610-01491/) — 2026-10-01
  Audits WebArena-Lite outcomes and trajectories with human review to identify automatic-evaluator false negatives and the first consequential execution errors. It also studies explicit execution-state memory and procedural guidance, showing why final task scores can miss substantial differences in agent behavior.
- [Learning Reliable GUI Agents under Imperfect Priors](https://awesomecua.com/zh/resources/arxiv-2609-39547/) — 2026-09-30
  Combines structured GUI exploration with training designed to tolerate imperfect retrieved experience. It builds state-transition graphs and synthetic task trajectories, then injects realistic forms of interface drift so agents learn when to rely on or reject prior guidance.
- [Action Conditioned Bisimulation For GUI Agent Memory](https://awesomecua.com/zh/resources/arxiv-2609-38778/) — 2026-09-30
  Defines a GUI-memory merge rule that treats two states as equivalent only when shared actions lead to matching outcomes and successor states. The training-free method replaces observation-similarity merging and is tested in closed-loop MiniWoB++ interaction.
- [Absorbed in Inertia: Activation Analysis for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2609-37176/) — 2026-09-29
  Studies repetitive, unproductive actions in desktop agents through their internal activation states. It proposes Reset, Reroute, Restore, a context intervention that temporarily resets an agent’s trajectory and later restores it to help escape repeated ineffective behavior.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.com/zh/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [AdaptArena: Evaluating Test-Time Personalization of Web Agents](https://awesomecua.com/zh/resources/arxiv-2609-36488/) — 2026-09-29
  Introduces AdaptArena to test whether web agents can infer unstated user preferences from relevant past trajectories and carry those preferences into new tasks. Its AdaptiveAgent baseline separates preference-retrieval challenges from failures in downstream web execution.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.com/zh/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [One Rollout Is All You Get: Fully Test-Time Adaptation for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-34321/) — 2026-09-28
  Defines a test-time adaptation setting with one counted attempt per arriving GUI task and no ground-truth feedback. Its SOLO method filters or relabels completed episodes, then updates a small adapter from a short window of the agent’s own experience.
- [Probe to Act: Elevating Browser-Use Agent via Active Visual Probing](https://awesomecua.com/zh/resources/arxiv-2609-33646/) — 2026-09-27
  Introduces Probe to Act, which lets browser agents request visual evidence linking DOM handles and screen regions before committing an operation. It retains selected interaction evidence as memory and studies both prompted use and distillation into open models.
- [Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-33304/) — 2026-09-27
  Introduces ExpActivator, which matches the current GUI state to relevant historical states before supplying past actions as guidance. A separate activation rule decides whether a recurring user intent is warranted by the current time and situation or should be withheld.
- [AgentTell: Behavioural Side-Channel Leakage in Browser-Use Agents](https://awesomecua.com/zh/resources/arxiv-2609-32915/) — 2026-09-26
  Introduces AgentTell, a benchmark for privacy leakage through browser actions after an agent learns a private fact on another website. It examines whether agents choose revealing options despite nondisclosure instructions and whether their final reports accurately describe that behavior.
- [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](https://awesomecua.com/zh/resources/arxiv-2609-32511/) — 2026-09-26
  ShareMem consolidates reusable experience across users while keeping preference retrieval user-bound; its web evaluation predicts target elements and actions on recorded Mind2Web states.
- [PastForward: Faster On-Device GUI Agents via Computational Experience Reuse](https://awesomecua.com/zh/resources/arxiv-2609-32166/) — 2026-09-26
  Introduces PastForward, which reuses earlier output sequences as verified decoding proposals and starts future action computation from predicted GUI transitions. Screen checks determine whether speculative computation and cached model states can be retained.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.com/zh/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [Qwen-Planner-Agent: A Closed-Loop AI-for-AI Framework for Real-World Mobile Planner Agents](https://awesomecua.com/zh/resources/arxiv-2609-29892/) — 2026-09-24
  Trains a mobile planner with supervised trajectories and competence-adaptive RL, then couples typed tool execution with memory, skills and offline model-harness refinement.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [EconSkills: Studying Skill Transfer and Retrieval for Web Agents on Live Economic Data](https://awesomecua.com/zh/resources/arxiv-2609-19523/) — 2026-09-17
  EconSkills converts verified economic-data browsing traces into parameterized procedures with navigation, verification and recovery guidance. Its evaluation separates known-skill transfer from library retrieval, exposing the limits of approximate matches to new tasks.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://awesomecua.com/zh/resources/arxiv-2609-15364/) — 2026-09-14
  Introduces RSIAgent, a training-free framework that explores unfamiliar digital interfaces, stores environment-specific action knowledge, and reuses that memory for later tasks.
- [Token Efficient Task Execution via Application Behavior Modeling for Web Agents](https://awesomecua.com/zh/resources/arxiv-2609-13491/) — 2026-09-11
  OdoBot builds a model of web-application behavior from successful task demonstrations and uses it to guide task execution. Its Canvas LMS evaluation compares token use and completion with existing web agents.
- [VRL-Bench: Benchmarking agents on computer control tasks under finite trial budgets](https://awesomecua.com/zh/resources/arxiv-2609-12404/) — 2026-09-11
  Introduces VRL-Bench to compare trial-and-error learning for computer-control agents under limited attempts, and VEX² to schedule exploration and exploitation.
- [GraphDroid: Asynchronous LLM-Based Mobile App GUI Testing via History-Aware Exploration and Hybrid Intent Fulfillment](https://awesomecua.com/zh/resources/arxiv-2609-10031/) — 2026-09-09
  GraphDroid combines clustered memory of visited GUI states with asynchronous test-intent generation. A hybrid executor reserves LLM calls for complex intents and uses heuristics for simpler ones, evaluated through Android app coverage, bug discovery and crash detection.
- [Selective Knowledge Control for Continual GUI Agent Learning over Application Streams](https://awesomecua.com/zh/resources/arxiv-2609-06530/) — 2026-09-06
  Introduces activation-conditioned gradient control for GUI agents learning successive applications. It protects inactive application-specific neurons, constrains updates to shared neurons, and accumulates a compact historical state to balance adaptation with retention.
- [From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2609-04869/) — 2026-09-04
  An online skill-evolution framework turns GUI interaction traces and evaluator feedback into a versioned library of reusable procedures without updating model parameters. Controlled OSWorld comparisons examine both the benefits of shared procedural memory and its domain-dependent instability under repeated revision.
- [SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction](https://awesomecua.com/zh/resources/arxiv-2609-05511/) — 2026-08-31
  Introduces SCAFFOLD, which extracts executable skills from web trajectories, composes them into a hierarchy, and compresses redundant skills through behavioral checks. It periodically distills skill-guided trajectories into the policy and studies repeated improvement across web benchmarks.
- [A Systematic Survey of Agentic Skills: Architecture, Lifecycle, and Security](https://awesomecua.com/zh/resources/arxiv-2608-29596/) — 2026-08-30
  Surveys modular agentic skill architectures, skill lifecycles, and security risks in autonomous tool- and interface-using agents.
- [CausalCache: Conditional High-Fidelity Restoration for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-22577/) — 2026-08-23
  Introduces CausalCache, which selects archived screenshots to restore alongside text summaries under a fixed visual-memory budget. A history-gated adapter processes restored images, with evaluation distinguishing standard step limits from longer-horizon and mobile-transfer settings.
- [Towards Faithful Simulation of Human Shopping Behavior](https://awesomecua.com/zh/resources/arxiv-2608-20707/) — 2026-08-21
  Presents RecVerse, a screenshot-based shopping simulation agent with hierarchical memory and trajectory-level RL, alongside USB, an interactive e-commerce GUI trajectory dataset.
- [Inducing Task Models from Computer-Use Traces](https://awesomecua.com/zh/resources/arxiv-2608-20319/) — 2026-08-20
  Task Model Induction disentangles concurrent activities in screenshot and mouse/keyboard traces, then constructs hierarchical goals and procedural control flow for each task. Evaluation tests reconstruction of observed execution and reuse of derived skills on held-out tasks.
- [StateM: Reaching 95.3% Raw Accuracy, or a \$15 Frontier Run, on Terminal-Bench 2.1 via Harness Scaling](https://awesomecua.com/zh/resources/arxiv-2608-15089/) — 2026-08-15
  Introduces StateM, a stateful runtime with checked transitions and reusable runbooks for long-horizon agents; its reported evaluations use terminal and business tasks.
- [SkillLens: Visual Skill Cards for Retrieval-Augmented GUI Action Prediction and On-Policy Distillation](https://awesomecua.com/zh/resources/arxiv-2608-10775/) — 2026-08-11
  Introduces SkillLens visual skill cards for retrieved GUI action guidance and CardDistill for training an action-prediction student that runs without retrieval on website tasks.
- [SkillTracer: Structural Failure Attribution and Refinement of Agentic Skills in Long-Horizon Web Tasks](https://awesomecua.com/zh/resources/url-a2c0216a0d8875e86dee/) — 2026-08-08
  SkillTracer maps web agent skills to inspectable plan graphs, uses interaction traces to locate failures, and refines reusable skills across long tasks and episodes.
- [SynChain: Inducing Computer-Use Agent Systems to Construct Their Own Attack Chains](https://awesomecua.com/zh/resources/arxiv-2608-06862/) — 2026-08-07
  Introduces SynChain, an attack that induces persistent agents to create poisoned skills or memory entries, and CUAChain for evaluating later attack-chain activation.
- [MemPrism: Task-Conditioned Relational Memory Views for Long-Horizon Agents](https://awesomecua.com/zh/resources/arxiv-2608-06745/) — 2026-08-07
  Introduces MemPrism, which records prior interactions and builds task-conditioned relational memory views for decisions in long-horizon web-agent tasks.
- [Activity Frames: Deterministic Screen-Activity Compilation for Agent Memory and Replay](https://awesomecua.com/zh/resources/arxiv-2608-05784/) — 2026-08-06
  Introduces Activity Frames, a deterministic pipeline that turns captured screen activity into typed episodes for computer-use agent memory and routine replay.
- [FocusMem: Factorizing Content, Readout, and Trust in Latent GUI Memory](https://awesomecua.com/zh/resources/arxiv-2608-04530/) — 2026-08-05
  Introduces FocusMem, a latent memory interface for GUI agents that separates stored content, state-conditioned readout, and a gate for irrelevant retrieved experience.
- [MemHarness: Memory Is Reconstructed, Not Replayed](https://awesomecua.com/zh/resources/arxiv-2607-28272/) — 2026-07-30
  Introduces MemHarness, which trains agents to critique and reconstruct retrieved experience before acting; WebShop is one of two evaluation environments.
- [PalmClaw: A Native On-Device Agent Framework for Mobile Phones](https://awesomecua.com/zh/resources/arxiv-2607-13027/) — 2026-07-14
  Introduces PalmClaw, an on-device phone agent framework that manages sessions, memory, and tools, exposing mobile capabilities through structured device-tool calls.
- [KnowAct-GUIClaw: Know Deeply, Act Perfectly, Personal GUI Assistant with Self-Evolving Memory and Skill](https://awesomecua.com/zh/resources/arxiv-2607-12625/) — 2026-07-14
  KnowAct-GUIClaw combines a host planner with pluggable GUI subagents, attributable experience memory and an evolving skill library. It uses user profiles and feedback for task decomposition and evaluates transfer across Android, iOS, HarmonyOS and Windows.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.com/zh/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [What Memory Do GUI Agents Really Need? From Passive Records to Active Task-Driving States](https://awesomecua.com/zh/resources/arxiv-2606-31612/) — 2026-06-30
  Proposes ATMem, an updated execution-state memory for long mobile GUI tasks, and STR-GRPO to train selective memory use; also introduces a mobile task benchmark.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.com/zh/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [Automating SKILL.md Generation for Computer-Using Agents via Interaction Trajectory Mining](https://awesomecua.com/zh/resources/arxiv-2606-20363/) — 2026-06-18
  Segments and clusters GUI trajectories into inspectable skills, then trains a skill-aware policy from those annotations. Its diagnostic results distinguish readable source-domain clusters from reliable transfer and report limited or absent downstream gains.
- [MemGUI-Agent: An End-to-End Long-Horizon Mobile GUI Agent with Proactive Context Management](https://awesomecua.com/zh/resources/arxiv-2606-19926/) — 2026-06-18
  MemGUI-Agent makes context management an action chosen by the same policy that controls the mobile UI. Structured history, UI-state and recent-step fields are trained from annotated trajectories to retain cross-app facts while limiting context growth.
- [VISUALSKILL: Multimodal Skills for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-18448/) — 2026-06-16
  VISUALSKILL organizes application-specific text and figures into hierarchical skills retrieved on demand through an MCP tool. Skills combine authored documentation with live UI exploration, and matched multimodal/text-only comparisons test their utility for interface identification and workflow-state verification.
- [PreAct: Computer-Using Agents that Get Faster on Repeated Tasks](https://awesomecua.com/zh/resources/arxiv-2606-17929/) — 2026-06-16
  PreAct compiles successful screen-interaction runs into guarded state-machine programs for repeated tasks. It validates programs from clean states before storage and returns control to the agent when replayed screen expectations fail, with tests across mobile, desktop and web.
- [Beyond Domains: Reusing Web Skills via Transferable Interaction Patterns](https://awesomecua.com/zh/resources/arxiv-2606-17645/) — 2026-06-16
  Introduces SkillMigrator, a web agent that turns successful interactions into reusable skills and transfers them between sites by matching page layouts and live element references.
- [Are Online Skill and Memory Modules Always Worth Their Tokens? A Budget-Constrained Study of Web Agents](https://awesomecua.com/zh/resources/arxiv-2606-15017/) — 2026-06-12
  Compares online skill and memory augmentations with a vanilla web agent given the same total inference-token budget. Across WebArena and WorkArena settings, it studies when module overhead removes aggregate gains and how rerun variability changes conclusions.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.com/zh/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [MemVenom: Triggered Poisoning of Multimodal Memories in Web Agents](https://awesomecua.com/zh/resources/arxiv-2606-10742/) — 2026-06-09
  Introduces MemVenom, a black-box attack that plants coordinated text and image content in web-agent memory to trigger retrieval and redirect later actions.
- [WebChallenger: A Reliable and Efficient Generalist Web Agent](https://awesomecua.com/zh/resources/arxiv-2606-10423/) — 2026-06-09
  WebChallenger builds a hierarchical DOM-derived page representation for selective observation, reusable site maps and compound actions. The framework combines these mechanisms without model fine-tuning and evaluates generalization across multiple web-agent benchmarks.
- [iOSWorld: A Benchmark for Personally Intelligent Phone Agents](https://awesomecua.com/zh/resources/arxiv-2606-09764/) — 2026-06-08
  Introduces a native iOS simulator benchmark with persistent user data, multi-app tasks, and personalization-dependent phone workflows.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.com/zh/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.com/zh/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [SkillHarness: Harnessing Safe Skills for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-20636/) — 2026-06-02
  Introduces SkillHarness, a framework for computer-use agents to learn and reuse skills under safety constraints when interactions include prompt injections or pop-ups.
- [PersonaTrail: Benchmarking Personalized Web Agents through Browsing Trails](https://awesomecua.com/zh/resources/arxiv-2607-20482/) — 2026-05-30
  Introduces PersonaTrail, a benchmark for personalized web agents using browsing histories, and PACMem, a structured memory method for guiding navigation.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.com/zh/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [STAMP: Training Explicit Memory for Mobile GUI Agents in Controllable and Scalable Virtual Environments](https://awesomecua.com/zh/resources/arxiv-2605-29324/) — 2026-05-28
  STAMP trains explicit memory for mobile GUI agents in virtual environments by injecting facts into generated tasks and using supervised data and online RL.
- [MaskClaw: Edge-Side Personalized Privacy Arbitration for GUI Agents with Behavior-Driven Skill Evolution](https://awesomecua.com/zh/resources/arxiv-2605-28646/) — 2026-05-27
  MaskClaw makes local Allow, Mask or Ask decisions before GUI screenshots leave a trusted environment, using visual evidence and personalized policy memory. Its benchmark and designed evolution scenarios test how corrections and edits can become privacy skills checked by a sandbox gate.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.com/zh/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [PANDO: Efficient Multimodal AI Agents via Online Skill Distillation](https://awesomecua.com/zh/resources/arxiv-2605-24785/) — 2026-05-24
  Analyzes inefficiency in VisualWebArena trajectories and distills reusable online skills to reduce repeated actions and token overhead in multimodal web agents.
- [MemGym: a Long-Horizon Memory Environment for LLM Agents](https://awesomecua.com/zh/resources/arxiv-2605-20833/) — 2026-05-20
  MemGym benchmarks agent memory across several task regimes, including computer use on WebArena-Infinity, with scores designed to isolate memory performance.
- [MementoGUI: Learning Agentic Multimodal Memory Control for Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-18652/) — 2026-05-18
  MementoGUI learns a controller for selecting, compressing and retrieving textual and region-level visual memories while leaving the GUI-agent backbone fixed. It also converts computer-use traces into controller training data and evaluates semantic actions, progress and memory consistency on long-horizon tasks.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.com/zh/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [Executable Agentic Memory for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2605-12294/) — 2026-05-12
  Executable Agentic Memory stores GUI routines in a knowledge graph built through state-aware exploration and action-group mining. A learned value model guides tree search over this executable memory for retrieval-based planning, with AndroidWorld and efficiency evaluation.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.com/zh/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [X-OmniClaw Technical Report: A Unified Mobile Agent for Multimodal Understanding and Interaction](https://awesomecua.com/zh/resources/arxiv-2605-05765/) — 2026-05-07
  Describes an Android agent architecture combining multimodal perception, working and personal memory, hybrid XML/visual grounding, and reusable skills captured from user interactions.
- [cotomi Act: Learning to Automate Work by Watching You](https://awesomecua.com/zh/resources/arxiv-2605-03231/) — 2026-05-04
  cotomi Act is a browser agent that executes multi-step tasks and turns observed user browsing into persistent knowledge shared with users.
- [Planner Matters! An Efficient and Unbalanced Multi-agent Collaboration Framework for Long-horizon Planning](https://awesomecua.com/zh/resources/arxiv-2605-02168/) — 2026-05-04
  A planner-centric RL framework divides agent automation among a planner, actor, and memory manager, with evaluations that include web navigation and OS control.
- [Exploring LLM Agent Designs and Interaction Modalities for Scientific Visualization](https://awesomecua.com/zh/resources/arxiv-2604-27996/) — 2026-04-30
  This study compares specialized, computer-use and coding agents on scientific visualization workflows. It examines GUI, CLI, code and tool-call interaction modes, including how persistent memory changes performance across repeated trials.
- [DRIVE: Modeling Skills at the Reasoning and Interaction Levels for Web Agents under Continual Learning](https://awesomecua.com/zh/resources/arxiv-2605-23939/) — 2026-04-28
  DRIVE separates reusable reasoning skills from page-specific interaction skills for web agents, retrieving both to plan tasks and execute actions on websites.
- [Mango: Multi-Agent Web Navigation via Global-View Optimization](https://awesomecua.com/zh/resources/arxiv-2604-18779/) — 2026-04-20
  Proposes Mango, a multi-agent web-navigation method that selects starting URLs using Thompson Sampling and stores navigation history to inform later attempts.
- [A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle](https://awesomecua.com/zh/resources/arxiv-2604-16548/) — 2026-04-17
  Organizes security risks and defenses for persistent agent memory into six lifecycle phases and proposes five verifiable governance primitives.
- [SkillDroid: Compile Once, Reuse Forever](https://awesomecua.com/zh/resources/arxiv-2604-14872/) — 2026-04-16
  Introduces SkillDroid, which compiles successful mobile GUI trajectories into reusable action templates and replays them without model calls, recompiling when they degrade.
- [AgentClick: A Skill-Based Human-in-the-Loop Review Layer for Terminal AI Agents](https://awesomecua.com/zh/resources/arxiv-2604-16520/) — 2026-04-15
  AgentClick gives terminal-based agents a browser review interface for plans, drafts, execution traces and editable memory. A local server and skill plugin let users inspect proposed actions and provide structured feedback.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [WebXSkill: Skill Learning for Autonomous Web Agents](https://awesomecua.com/zh/resources/arxiv-2604-13318/) — 2026-04-14
  WebXSkill pairs parameterized action programs with step-level language guidance, mining reusable skills from synthetic browser-agent traces. A URL-based graph supports retrieval, and deployment alternates between direct program execution and guided native planning.
- [EE-MCP: Self-Evolving MCP-GUI Agents via Automated Environment Generation and Experience Learning](https://awesomecua.com/zh/resources/arxiv-2604-09815/) — 2026-04-10
  EE-MCP studies application-dependent mixtures of GUI actions and MCP calls using generated environments, trajectory collection and filtered training. An experience bank extracts rules from trajectory comparisons for inference-time improvement, distinct from model distillation.
- [MAESTRO: Adapting GUIs and Guiding Navigation with User Preferences in Conversational Agents with GUIs](https://awesomecua.com/zh/resources/arxiv-2604-06134/) — 2026-04-07
  Introduces MAESTRO, a conversational GUI system that remembers user preferences, adapts interface options, and guides backtracking in multistep booking decisions.
- [Your Agent, Their Asset: A Real-World Safety Analysis of OpenClaw](https://awesomecua.com/zh/resources/arxiv-2604-04759/) — 2026-04-06
  Introduces a safety evaluation of OpenClaw and the CIK taxonomy for analyzing how changes to a personal agent's persistent state affect attacks on its local and service access.
- [Poison Once, Exploit Forever: Environment-Injected Memory Poisoning Attacks on Web Agents](https://awesomecua.com/zh/resources/arxiv-2604-02623/) — 2026-04-03
  Studies persistent web-agent memory contamination introduced through environmental observations. Experiments on WebArena and VisualWebArena examine cross-session effects and how interaction failures alter susceptibility.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.com/zh/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [AndroTMem: From Interaction Trajectories to Anchored Memory in Long-Horizon GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-18429/) — 2026-03-19
  Introduces AndroTMem-Bench for Android tasks whose later actions depend on earlier UI states. Anchored State Memory retains causally linked intermediate states for subgoal-specific retrieval and evaluates them against full-history and summary-based memory.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [Hybrid Self-evolving Structured Memory for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-10291/) — 2026-03-11
  Introduces HyMEM, a graph-based memory for GUI agents that links symbolic task knowledge with trajectory embeddings and refreshes working memory during computer-use tasks.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.com/zh/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.com/zh/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [Enhancing Web Agents with a Hierarchical Memory Tree](https://awesomecua.com/zh/resources/arxiv-2603-07024/) — 2026-03-07
  Introduces Hierarchical Memory Tree (HMT), which organizes web-agent trajectories by intent, stage and action, then uses the hierarchy to plan and act on websites.
- [K^2-Agent: Co-Evolving Know-What and Know-How for Hierarchical Mobile Device Control](https://awesomecua.com/zh/resources/arxiv-2603-00676/) — 2026-02-28
  Introduces K2-Agent, a hierarchical mobile-control framework that refines task knowledge through a reasoning loop and trains an executor with curriculum-guided reinforcement learning.
- [M$^2$: Dual-Memory Augmentation for Long-Horizon Web Agents via Trajectory Summarization and Insight Retrieval](https://awesomecua.com/zh/resources/arxiv-2603-00503/) — 2026-02-28
  Introduces M², a training-free memory framework for long-horizon web agents that summarizes interaction history and retrieves task guidance from an offline insight bank.
- [ActionEngine: From Reactive to Programmatic Web Agents via State Machine Memory](https://awesomecua.com/zh/resources/arxiv-2602-20502/) — 2026-02-24
  ActionEngine explores web applications to build an updateable state-machine memory of GUI states, operations and transitions. It generates complete task programs from that memory, using reactive repair to handle changed interfaces or missing knowledge.
- [IntentCUA: Learning Intent-level Representations for Skill Abstraction and Multi-Agent Planning in Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2602-17049/) — 2026-02-19
  IntentCUA coordinates planner and critic agents through shared intent-aligned memory, retrieving reusable skills for long-horizon automation across desktop applications.
- [Persona2Web: Benchmarking Personalized Web Agents for Contextual Reasoning with User History](https://awesomecua.com/zh/resources/arxiv-2602-17003/) — 2026-02-19
  Persona2Web tests whether web agents can resolve ambiguous requests using preferences implicit in a user’s history. Its reasoning-aware evaluation compares agent architectures and history-access strategies on personalized tasks on the open web.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.com/zh/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions.
- [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://awesomecua.com/zh/resources/arxiv-2602-16855/) — 2026-02-15
  Presents GUI-Owl-1.5 variants and a hybrid data pipeline for multimodal GUI interaction, tool use, memory, and multi-platform tasks.
- [TreeCUA: Efficiently Scaling GUI Automation with Tree-Structured Verifiable Evolution](https://awesomecua.com/zh/resources/arxiv-2602-09662/) — 2026-02-10
  TreeCUA organizes GUI exploration trajectories as reusable trees and balances deeper tasks against broader coverage. Its data pipeline combines action verification, memory-backed recovery and a DPO variant that uses information from adjacent branches.
- [PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents](https://awesomecua.com/zh/resources/arxiv-2603-03296/) — 2026-02-06
  Introduces PlugMem, a knowledge-graph memory module for general LLM agents, evaluated on web-agent tasks alongside conversational question answering and knowledge retrieval.
- [UI-Mem: Self-Evolving Experience Memory for Online Reinforcement Learning in Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2602-05832/) — 2026-02-05
  UI-Mem stores workflows, skills and failure patterns as reusable templates to guide online GUI reinforcement learning. It varies guidance within rollout groups and continually updates the memory so an unguided policy can learn from guided experiences.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.com/zh/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.com/zh/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.com/zh/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.com/zh/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [Me-Agent: A Personalized Mobile Agent with Two-Level User Habit Learning for Enhanced Interaction](https://awesomecua.com/zh/resources/arxiv-2601-20162/) — 2026-01-28
  Me-Agent personalizes mobile agent behavior through a preference reward model and hierarchical memory for long-term and app-specific habits, and introduces User FingerTip.
- [Curiosity Driven Knowledge Retrieval for Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2601-19306/) — 2026-01-27
  Uses execution uncertainty to trigger retrieval from application documentation, code, and past trajectories, organizing the results into structured AppCards for Android agent planning.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.com/zh/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.com/zh/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://awesomecua.com/zh/resources/arxiv-2601-09636/) — 2026-01-14
  Introduces AndroidIntent to evaluate how GUI agents infer omitted preferences and recurring routines from long-term user records. Its HIM-Agent maintains hierarchical memory of preferences and routines for personalized execution and proactive suggestions.
- [ExpSeek: Self-Triggered Experience Seeking for Web Agents](https://awesomecua.com/zh/resources/arxiv-2601-08605/) — 2026-01-13
  ExpSeek uses step-level entropy signals to decide when a web agent should request experience-based guidance. It supplies guidance tailored to the current step and evaluates the intervention across web-agent benchmarks.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.com/zh/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution](https://awesomecua.com/zh/resources/arxiv-2601-07262/) — 2026-01-12
  ColorBrowserAgent converts human feedback into reusable website knowledge and uses that knowledge to guide progressive context summaries. It evaluates the resulting memory and adaptation mechanisms on long browser workflows.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.com/zh/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.com/zh/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2512-01763/) — 2025-12-01
  HiconAgent trains GUI policies to use history through variable-length context sampling and paired policy updates with compressed and complete histories. Its compression retains past actions while removing historical observations, and an alignment loss couples the two branches.
- [Real-Time Procedural Learning From Experience for AI Agents](https://awesomecua.com/zh/resources/arxiv-2511-22074/) — 2025-11-27
  PRAXIS stores action outcomes and retrieves past state-action-result examples to guide agent decisions, with evaluation on the REAL web browsing benchmark.
- [WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance](https://awesomecua.com/zh/resources/arxiv-2511-12997/) — 2025-11-17
  Introduces WebCoach, which condenses navigation logs into persistent episodic memory and retrieves experiences by similarity and recency. Runtime hooks selectively supply advice to browser agents, evaluated on WebVoyager without retraining the underlying models.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [Learning from Online Videos at Inference Time for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2511-04137/) — 2025-11-06
  This work retrieves online video tutorials and converts them into structured GUI action demonstrations with short objectives. A two-stage selection process supplies a relevant local trajectory as in-context guidance at each execution step.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.com/zh/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [WebATLAS: An LLM Agent with Experience-Driven Memory and Action Simulation](https://awesomecua.com/zh/resources/arxiv-2510-22732/) — 2025-10-26
  WebATLAS is a web agent that stores interaction outcomes and simulates candidate actions before acting, using past experience to plan navigation on unseen websites.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.com/zh/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [Branch-and-Browse: Efficient and Controllable Web Exploration with Tree-Structured Reasoning and Action Memory](https://awesomecua.com/zh/resources/arxiv-2510-19838/) — 2025-10-18
  Branch-and-Browse is a web agent framework that uses tree-structured subtasks, web state replay, and page action memory to explore and complete tasks.
- [PolySkill: Learning Generalizable Skills Through Polymorphic Abstraction](https://awesomecua.com/zh/resources/arxiv-2510-15863/) — 2025-10-17
  Introduces PolySkill, which separates a web-agent skill's goal from its execution so agents can learn and reuse skills across websites.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.com/zh/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://awesomecua.com/zh/resources/arxiv-2510-10666/) — 2025-10-12
  Trains BrowserAgent to use Playwright-based scrolling, clicking and typing directly on webpages for information-seeking tasks. Supervised and rejection fine-tuning are paired with explicit memory for conclusions carried across steps.
- [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2510-09038/) — 2025-10-10
  Encodes GUI trajectories into compact continuous embeddings that can be retrieved directly into an agent’s input. An automated environment-discovery and rollout pipeline expands this memory for long tasks and unfamiliar interfaces.
- [ReInAgent: A Context-Aware GUI Agent Enabling Human-in-the-Loop Mobile Task Navigation](https://awesomecua.com/zh/resources/arxiv-2510-07988/) — 2025-10-09
  Introduces ReInAgent, coordinating information management, planning, and reflection around a shared memory for mobile tasks. It proactively asks users for information and checks consistency when instructions are ambiguous or change during execution.
- [JEF-Hinter: Leveraging Offline Knowledge for Improving Web Agents Adaptation](https://awesomecua.com/zh/resources/arxiv-2510-04373/) — 2025-10-05
  Introduces JEF-Hinter, which distills successful and failed trajectories into compact episodic hints and retrieves them for the current agent state. Web benchmark experiments examine guidance from decisive steps.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.com/zh/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://awesomecua.com/zh/resources/arxiv-2509-25140/) — 2025-09-29
  Distills generalizable reasoning strategies from both successful and failed agent trajectories into a persistent memory bank for test-time retrieval.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.com/zh/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [D-Artemis: A Deliberative Cognitive Framework for Mobile GUI Multi-Agents](https://awesomecua.com/zh/resources/arxiv-2509-21799/) — 2025-09-26
  Introduces D-Artemis, a mobile GUI agent framework that retrieves app-specific tips, checks actions before execution, and reflects on their outcomes without trajectory training.
- [Robust, Observable, and Evolvable Agentic Systems Engineering: A Principled Framework Validated via the Fairy GUI Agent](https://awesomecua.com/zh/resources/arxiv-2509-20729/) — 2025-09-25
  Presents an agent-engineering framework combining runtime goal clarification, an observable component architecture and evolving execution memory. The Fairy mobile GUI agent evaluates these mechanisms on ambiguous tasks and through controlled and user studies.
- [InfraMind: A Novel Exploration-based GUI Agentic Framework for Mission-critical Industrial Management](https://awesomecua.com/zh/resources/arxiv-2509-13704/) — 2025-09-17
  InfraMind explores industrial management GUIs using virtual-machine snapshots and builds memory for planning and hierarchical state recognition. Its framework also studies knowledge distillation and safety checks on open-source and commercial data-center management platforms.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.com/zh/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.com/zh/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.com/zh/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [PG-Agent: An Agent Powered by Page Graph](https://awesomecua.com/zh/resources/arxiv-2509-03536/) — 2025-08-27
  Introduces PG-Agent, which turns GUI operation episodes into page graphs and retrieves guidance from them to support task decomposition in new scenarios.
- [PerPilot: Personalizing VLM-based Mobile Agents via Memory and Exploration](https://awesomecua.com/zh/resources/arxiv-2508-18040/) — 2025-08-25
  Introduces PerPilot and the PerInstruct dataset for completing user-specific mobile instructions through memory retrieval, app exploration, and clarification when missing context remains unresolved.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.com/zh/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2507-21953/) — 2025-07-29
  Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution.
- [WebArxiv: A Reproducible Benchmark for Evaluating Multimodal Web Agents on arXiv Tasks](https://awesomecua.com/zh/resources/arxiv-2507-00938/) — 2025-07-01
  WebArxiv provides 510 static-snapshot tasks with deterministic answers for scholarly browsing, including constrained paper retrieval, content extraction, and cross-paper comparison. The study also tests dynamic retrieval of interaction history to address repetitive or incomplete agent reasoning.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.com/zh/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [Context manipulation attacks : Web agents are susceptible to corrupted memory](https://awesomecua.com/zh/resources/arxiv-2506-17318/) — 2025-06-18
  Studies context manipulation in web agents by altering stored task representations. Evaluation on Browser-use and Agent-E examines memory-directed attacks and the implications for secure context handling.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.com/zh/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [VerificAgent: Domain-Specific Memory Verification for Scalable Oversight of Aligned Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-02539/) — 2025-06-03
  Introduces VerificAgent, which grows domain-specific memories from task trajectories and subjects them to human fact-checking before deployment. Its OSWorld evaluation treats persistent memory as an auditable constraint on later agent behavior.
- [WebChoreArena: Evaluating Web Browsing Agents on Realistic Tedious Web Tasks](https://awesomecua.com/zh/resources/arxiv-2506-01952/) — 2025-06-02
  Introduces WebChoreArena, 532 web chores built on WebArena environments to evaluate agents’ retention of page information, calculation, and tracking across pages.
- [Agent-SAMA: State-Aware Mobile Assistant](https://awesomecua.com/zh/resources/arxiv-2505-23596/) — 2025-05-29
  Models mobile application execution as a finite-state machine to support planning, verification, and recovery across interface transitions.
- [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2505-21964/) — 2025-05-28
  Introduces UI-Evol, which extracts action sequences from agent interactions and critiques external guidance against those traces. Evaluation on OSWorld examines how revised operational knowledge affects execution and behavioral consistency.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Creating General User Models from Computer Use](https://awesomecua.com/zh/resources/arxiv-2505-10831/) — 2025-05-16
  Proposes general user models that turn computer-use observations into confidence-weighted propositions and revise them as new context arrives. Demonstrations use this memory to contextualize assistants, manage notifications, and support proactive actions across apps.
- [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.com/zh/resources/arxiv-2504-13805/) — 2025-04-18
  LearnAct parses human demonstrations into reusable knowledge, retrieves relevant examples, and uses them during mobile GUI task execution. The accompanying LearnGUI benchmark includes 2,252 offline tasks and 101 online tasks for studying adaptation from demonstrations.
- [Inducing Programmatic Skills for Agentic Tasks](https://awesomecua.com/zh/resources/arxiv-2504-06821/) — 2025-04-09
  Introduces agent skill induction (ASI), which creates, checks, and reuses program-based skills for web tasks by combining primitive actions into higher-level routines.
- [ScreenLLM: Stateful Screen Schema for Efficient Action Understanding and Prediction](https://awesomecua.com/zh/resources/arxiv-2503-20978/) — 2025-03-26
  Represents interface interactions with a stateful screen schema to model user behavior and support action understanding and prediction.
- [COLA: A Scalable Multi-Agent Framework For Windows UI Task Automation](https://awesomecua.com/zh/resources/arxiv-2503-09263/) — 2025-03-12
  Coordinates specialized Windows UI agents with dynamic task scheduling, shared memory, and human-triggered rollback for recovering from errors.
- [MPO: Boosting LLM Agents with Meta Plan Optimization](https://awesomecua.com/zh/resources/arxiv-2503-02682/) — 2025-03-04
  Refines reusable high-level meta plans with execution feedback to guide language-agent planning across interactive environments.
- [AppAgentX: Evolving GUI Agents as Proficient Smartphone Users](https://awesomecua.com/zh/resources/arxiv-2503-02268/) — 2025-03-04
  Records interaction history and converts repeated action sequences into reusable high-level shortcuts for mobile GUI tasks.
- [Mobile-Agent-V: A Video-Guided Approach for Effortless and Efficient Operational Knowledge Injection in Mobile Automation](https://awesomecua.com/zh/resources/arxiv-2502-17110/) — 2025-02-24
  Extracts operational guidance from video for mobile task execution and introduces Mobile-Knowledge to evaluate the contribution of external knowledge.
- [MobileSteward: Integrating Multiple App-Oriented Agents with Self-Evolution to Automate Cross-App Instructions](https://awesomecua.com/zh/resources/arxiv-2502-16796/) — 2025-02-24
  Introduces MobileSteward, which coordinates app-specific phone agents, schedules cross-app tasks, and reuses successful experience; CAPBench evaluates cross-app instructions.
- [Towards Computer-Using Personal Agents](https://awesomecua.com/zh/resources/arxiv-2503-15515/) — 2025-01-31
  Proposes computer-using personal agents connected to user-controlled data repositories, discussing privacy, interoperability, and collaborative tasks.
- [R2D2: Remembering, Replaying and Dynamic Decision Making with a Reflective Agentic Memory](https://awesomecua.com/zh/resources/arxiv-2501-12485/) — 2025-01-21
  R2D2 gives web agents a replay-buffer map of visited pages and a reflection step for analyzing errors and revising navigation strategies.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.com/zh/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [MemAgent: A cache-inspired framework for augmenting conversational Web Agents with task-specific information](https://awesomecua.com/zh/resources/url-3fdea133115518f9205a/) — 2025
  MemAgent adds a cache for task-specific information to conversational web agents, separating information gathering from execution across 150 web tasks.
- [Aria-UI: Visual Grounding for GUI Instructions](https://awesomecua.com/zh/resources/arxiv-2412-16256/) — 2024-12-20
  Introduces a vision-based grounding model trained with diverse synthetic instructions and action histories for context-sensitive GUI targeting.
- [VideoWebArena: Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://awesomecua.com/zh/resources/arxiv-2410-19100/) — 2024-10-24
  Evaluates whether web agents can retain procedural skills and factual information from long video tutorials and use them during tasks.
- [Large Language Models Empowered Personalized Web Agents](https://awesomecua.com/zh/resources/arxiv-2410-17236/) — 2024-10-22
  PersonalWAB benchmarks personalized web tasks, while PUMA retrieves relevant past web behavior to adapt agents' instruction handling and actions.
- [MobA: Multifaceted Memory-Enhanced Adaptive Planning for Efficient Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2410-13757/) — 2024-10-17
  Combines adaptive mobile-task planning, reflection-based recovery, and multiple memory components, evaluated with MobBench and AndroidArena.
- [Agent S: An Open Agentic Framework that Uses Computers Like a Human](https://awesomecua.com/zh/resources/arxiv-2410-08164/) — 2024-10-10
  Combines hierarchical planning, retrieved experience, and a computer interaction interface to execute multistep GUI tasks.
- [StateAct: Enhancing LLM Base Agents via Self-prompting and State-tracking](https://awesomecua.com/zh/resources/arxiv-2410-02810/) — 2024-09-21
  Maintains explicit task goals and evolving state descriptions to improve base-agent decisions across interactive tasks, including web shopping.
- [Agent Workflow Memory](https://awesomecua.com/zh/resources/arxiv-2409-07429/) — 2024-09-11
  Agent Workflow Memory extracts reusable task routines and selectively supplies them to guide later web actions. It studies both offline workflow induction from training examples and online induction from test experience on Mind2Web and WebArena.
- [AppAgent v2: Advanced Agent for Flexible Mobile Interactions](https://awesomecua.com/zh/resources/arxiv-2408-11824/) — 2024-08-05
  Separates exploration and deployment while using a structured application knowledge base and retrieval to guide mobile workflows.
- [VLM Agents Generate Their Own Memories: Distilling Experience into Embodied Programs of Thought](https://awesomecua.com/zh/resources/arxiv-2406-14596/) — 2024-06-20
  ICAL turns imperfect agent trajectories into reusable strategies and action annotations through reflection and human feedback, with VisualWebArena among its evaluations.
- [Mobile-Agent-v2: Mobile Device Operation Assistant with Effective Navigation via Multi-Agent Collaboration](https://awesomecua.com/zh/resources/arxiv-2406-01014/) — 2024-06-03
  Separates mobile planning, decision-making, and reflection, with a memory unit for task progress and relevant content.
- [MMInA: Benchmarking Multihop Multimodal Internet Agents](https://awesomecua.com/zh/resources/arxiv-2404-09992/) — 2024-04-15
  Evaluates multimodal agents on compositional tasks across changing websites and studies replaying prior trajectories as memory support.
- [WILBUR: Adaptive In-Context Learning for Robust and Accurate Web Agents](https://awesomecua.com/zh/resources/arxiv-2404-05902/) — 2024-04-08
  WILBUR learns to rank prior task demonstrations for a web agent’s prompt and synthesizes instructions from past runs. A generated task curriculum and a backtracking mechanism support adaptation and recovery, evaluated on WebVoyager.
- [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://awesomecua.com/zh/resources/arxiv-2403-08978/) — 2024-03-13
  Introduces AutoGuide, which generates conditional, context-aware guidelines from past agent experience to support decisions in sequential tasks, including web navigation.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.com/zh/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [GPTVoiceTasker: Advancing Multi-step Mobile Task Efficiency Through Dynamic Interface Exploration and Learning](https://awesomecua.com/zh/resources/arxiv-2401-14268/) — 2024-01-25
  Introduces GPTVoiceTasker, a mobile assistant that interprets user commands, executes device interactions, and learns from prior commands to streamline later task execution. The work includes a user study of task efficiency.
- [AutoTask: Executing Arbitrary Voice Commands by Exploring and Learning from Mobile GUI](https://awesomecua.com/zh/resources/arxiv-2312-16062/) — 2023-12-26
  Executes voice-requested mobile tasks through GUI exploration, backtracking, and accumulated interaction experience.
- [AppAgent: Multimodal Agents as Smartphone Users](https://awesomecua.com/zh/resources/arxiv-2312-13771/) — 2023-12-21
  Builds app knowledge through exploration or human demonstrations and uses it to guide multimodal smartphone interactions.
- [Explore, Select, Derive, and Recall: Augmenting LLM with Human-like Memory for Mobile Task Automation](https://awesomecua.com/zh/resources/arxiv-2312-03003/) — 2023-12-04
  Introduces MobileGPT, which organizes mobile-app experience into reusable subtasks using an explore, select, derive, and recall cycle. Its memory supports learning task procedures and adapting them to new contexts.
- [Autonomous Large Language Model Agents Enabling Intent-Driven Mobile GUI Testing](https://awesomecua.com/zh/resources/arxiv-2311-08649/) — 2023-11-15
  DroidAgent uses language models and memory to set and execute GUI test goals in Android apps; an evaluation covers 15 apps from the Themis benchmark.
- [Make LLM a Testing Expert: Bringing Human-like Interaction to Mobile GUI Testing via Functionality-aware Decisions](https://awesomecua.com/zh/resources/arxiv-2310-15780/) — 2023-10-24
  Introduces GPTDroid for mobile GUI testing: it feeds app page information to an LLM, runs generated test scripts and uses feedback and memory to guide further exploration.
- [AutoDroid: LLM-powered Task Automation in Android](https://awesomecua.com/zh/resources/arxiv-2308-15272/) — 2023-08-29
  Combines language-model reasoning with app analysis, UI representations, and exploration-derived memory for Android task automation.
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://awesomecua.com/zh/resources/arxiv-2306-07863/) — 2023-06-13
  Synapse filters task-irrelevant page state and places complete abstracted state-action trajectories into the prompt. An embedding-based exemplar memory retrieves relevant demonstrations for new tasks, evaluated on MiniWoB++ and Mind2Web.

## 评测基准

- [FlashAdventure](https://awesomecua.com/zh/resources/github-ahnjaewoo-flashadventure/) — Date not recorded
  FlashAdventure benchmarks GUI agents on solving complete story arcs across 34 Flash point-and-click adventure games requiring long-term memory.
- [iOSWorld](https://awesomecua.com/zh/resources/github-ljang0-iosworld/) — Date not recorded
  Native iPhone-simulator benchmark with shared user data, application workflows, agent runners, and rubric-based scoring.
- [MemGUI-Bench](https://awesomecua.com/zh/resources/github-lgy0404-memgui-bench/) — Date not recorded
  Memory-centric Android benchmark of 128 tasks across 26 apps, run in Dockerized emulators on a MobileWorld-style runtime and judged by MemGUI-Eval, an LLM evaluator reporting pass@k and memory metrics.
- [PersonalAlign](https://awesomecua.com/zh/resources/github-ilearn-lab-acl26-personalalign/) — Date not recorded
  PersonalAlign releases AndroidIntent evaluations of personalized mobile GUI agents and HIM-Agent memory for using long-term interaction records.

## 数据集

- [Aria-UI Context-aware Data](https://awesomecua.com/zh/resources/url-07b65dc937756ddff4a1/) — Date not recorded
  Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.
- [MemGUI-Bench agent trajectories](https://awesomecua.com/zh/resources/url-2b7363c3a20d8022b319/) — Date not recorded
  Recorded MemGUI-Bench runs of mobile GUI agents and models, packaged as per-agent ZIP archives with step screenshots, action logs and evaluator outputs, plus compressed trajectory previews for the leaderboard viewer.
- [MT-Mind2Web](https://awesomecua.com/zh/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.
- [WenyiWU0111/CoMEM-agent-memory-trajectories](https://awesomecua.com/zh/resources/url-87e0195f2401d5f6f66f/) — Date not recorded
  A dataset for GUI-agent memory research containing expanded web links, synthesized tasks, and executed trajectories with successful and failed outcomes.

## 模型

- [GUI-Owl 1.5 32B Instruct](https://awesomecua.com/zh/resources/url-6a943fb3667791b6cdb4/) — Date not recorded
  Instruct variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.
- [GUI-Owl 1.5 32B Think](https://awesomecua.com/zh/resources/url-e0e4712ee701f652bf31/) — Date not recorded
  Thinking variant of the 32B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 33.4B BF16 parameters under MIT.
- [GUI-Owl 1.5 8B Instruct](https://awesomecua.com/zh/resources/url-d01dfc6e5b5fcece7b41/) — Date not recorded
  Instruct variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.
- [GUI-Owl 1.5 8B Think](https://awesomecua.com/zh/resources/url-374138c6e18c9f1dd44a/) — Date not recorded
  Thinking variant of the 8B GUI-Owl 1.5 native GUI agent model, built on Qwen3-VL and released with Mobile-Agent-v3.5 for desktop, mobile and browser control, with about 8.8B BF16 parameters under MIT.

## 工程与产业

- [A-MEM](https://awesomecua.com/zh/resources/github-agiresearch-a-mem/) — Date not recorded
  A-MEM implements a Zettelkasten-inspired dynamic memory architecture that links and evolves structured episodic notes for LLM agents.
- [activity-frames](https://awesomecua.com/zh/resources/github-nossa-y-activity-frames/) — Date not recorded
  Converts continuous local desktop activity into structured, queryable workflow frames served over MCP.
- [ADB MCP Server Pro](https://awesomecua.com/zh/resources/github-tiendung2k03-adb-mcp-server-pro/) — Date not recorded
  Model Context Protocol server for Android device control via ADB featuring self-learning UI element maps.
- [Aeiva](https://awesomecua.com/zh/resources/github-chatsci-aeiva/) — Date not recorded
  Aeiva is a modular general-purpose AI agent framework adaptable across desktop, web, and scientific task environments.
- [Agent S](https://awesomecua.com/zh/resources/github-simular-ai-agent-s/) — Date not recorded
  Simular's open-source framework for computer-use agents that click, type and scroll through desktop and web apps on macOS, Windows and Linux; its third generation, Agent S3, reports 72.6% on OSWorld.
- [Agent Skill Induction (ASI)](https://awesomecua.com/zh/resources/github-zorazrw-agent-skill-induction/) — Date not recorded
  Official code for agent skill induction on WebArena: an LLM judge checks each trajectory, successful episodes become Python skill functions, and skills join the action space only after generated tests pass.
- [Agent Workflow Memory implementation](https://awesomecua.com/zh/resources/github-zorazrw-agent-workflow-memory/) — Date not recorded
  Research code that extracts reusable browser-task routines from demonstrations or prior executions, stores them as workflow memory and reuses them during subsequent navigation.
- [agent-qa](https://awesomecua.com/zh/resources/github-vostride-agent-qa/) — Date not recorded
  agent-qa is an AI quality-assurance runner that executes natural-language user-journey tests across web, Android, and iOS interfaces.
- [agent-qa](https://awesomecua.com/zh/resources/url-73e9e26d40de2a60ae05/) — Date not recorded
  A QA agent that runs plain-language tests against web, Android, and iOS apps. It navigates user flows, verifies outcomes, and stores validated run evidence for reuse.
- [Agente Pessoal](https://awesomecua.com/zh/resources/github-thomas-adrian-soler-nilsson-agente-pessoal/) — Date not recorded
  Multimodal personal AI desktop assistant with voice interaction, persistent memory, and OS automation.
- [agentmemory](https://awesomecua.com/zh/resources/github-rohitg00-agentmemory/) — Date not recorded
  agentmemory provides persistent cross-session memory and MCP integration for coding and computer-use agents including Claude Code, Codex, and OpenClaw.
- [AgentProg](https://awesomecua.com/zh/resources/github-mobilellm-agentprog/) — Date not recorded
  Android GUI-agent framework that keeps long-running task context in structured programs, variables and control flow, with a CLI and AndroidWorld integration.
- [AI-Player](https://awesomecua.com/zh/resources/github-shasankp000-ai-player/) — Date not recorded
  AI-Player is a Minecraft Fabric mod that embeds an LLM/VLM-driven autonomous second player capable of navigation, combat, and crafting.
- [AILEEN Desktop](https://awesomecua.com/zh/resources/github-haixu8396-png-aileen-desktop/) — Date not recorded
  Windows desktop AI assistant combining a Live2D interactive character with screen perception and desktop tool execution.
- [AIOS](https://awesomecua.com/zh/resources/github-agiresearch-aios/) — Date not recorded
  AIOS is an agent operating system whose computer-use architecture provides a virtual machine controller and MCP server for agents interacting with graphical computer environments.
- [Anchor-Inference Daedalus](https://awesomecua.com/zh/resources/github-anchor-inference-daedalus/) — Date not recorded
  Self-developing personal AI agent with its own desktop app, persistent memory, and computer-use tools.
- [Andee](https://awesomecua.com/zh/resources/github-kuafuai-andee/) — Date not recorded
  On-device Android agent in one APK that operates any app through an accessibility service, reading an element outline or, when needed, a screenshot with a labelled 8x12 grid, on any OpenAI-compatible model.
- [Android-Skill-Agent](https://awesomecua.com/zh/resources/github-xiru0834-eng-android-skill-agent/) — Date not recorded
  Android-Skill-Agent extracts demonstration-guided, parameterized operational skills with accessibility-tree verification for Android apps.
- [AndroidGen](https://awesomecua.com/zh/resources/github-thudm-androidgen/) — Date not recorded
  AndroidGen operates Android tasks using retrieved examples, plan updates, and action checks. Its repository includes agent code and AndroidWorld evaluation scripts.
- [AndroTMem inference and evaluation code](https://awesomecua.com/zh/resources/github-cvc2233-androtmem/) — Date not recorded
  A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.
- [AnythingLLM](https://awesomecua.com/zh/resources/github-mintplex-labs-anything-llm/) — Date not recorded
  AnythingLLM is a local-first desktop and server application supporting custom AI agents, web browsing, MCP tools, and document RAG.
- [AppAgent](https://awesomecua.com/zh/resources/github-tencentqqgylab-appagent/) — Date not recorded
  Multimodal agent that operates Android apps through taps and swipes without back-end access, building a reusable knowledge base from autonomous exploration or from watching human demonstrations.
- [AppAgentX](https://awesomecua.com/zh/resources/github-westlake-agi-lab-appagentx/) — Date not recorded
  Mobile agent research using accumulated interaction experience.
- [AutoBot](https://awesomecua.com/zh/resources/github-demeyer1-autobot/) — Date not recorded
  AutoBot is a self-improving agent harness for ChatGPT and Codex on macOS featuring persistent on-disk memory and browser evaluation.
- [AutoBot-AI](https://awesomecua.com/zh/resources/github-mrveiss-autobot-ai/) — Date not recorded
  AutoBot-AI is a self-hosted autonomous agent platform combining vision-driven browser and desktop control, voice interaction, and workflow memory.
- [AutoManual](https://awesomecua.com/zh/resources/github-minghchen-automanual/) — Date not recorded
  AutoManual enables LLM agents to construct and iteratively refine structured instruction manuals through online environmental interaction.
- [AutoTask](https://awesomecua.com/zh/resources/github-bowenbryanwang-autotask/) — Date not recorded
  An Android agent that explores mobile interfaces to execute voice commands and uses what it learns during interaction to guide later actions.
- [Avenir-Web](https://awesomecua.com/zh/resources/github-princeton-ai2-lab-avenir-web/) — Date not recorded
  Avenir-Web trains human-experience-imitating multimodal web agents with mixture-of-grounding experts and experience-tracking memory.
- [avids2 Jarvis](https://awesomecua.com/zh/resources/github-avids2-jarvis/) — Date not recorded
  Real-time Chinese voice and desktop agent with persistent memory and Pi tool execution.
- [BabyAGI](https://awesomecua.com/zh/resources/github-yoheinakajima-babyagi/) — Date not recorded
  BabyAGI is an autonomous task-management agent framework that iteratively creates, prioritizes, and executes tasks using LLMs and vector memory.
- [Browser Operator](https://awesomecua.com/zh/resources/github-browseroperator-browser-operator-core/) — Date not recorded
  Chromium-based AI browser whose DevTools panel runs a multi-agent framework (web-task, action, form-fill, research and verification agents) over accessibility trees with OpenRouter, OpenAI, Groq or LiteLLM models.
- [cc-haha](https://awesomecua.com/zh/resources/github-nanmicoder-cc-haha/) — Date not recorded
  cc-haha is a clean-room TypeScript implementation and visual debugger of the Claude Code agent harness, memory, and tool runtime.
- [ClawMobile](https://awesomecua.com/zh/resources/github-clawmobile-clawmobile/) — Date not recorded
  ClawMobile is an Android agent runtime built on OpenClaw for controlling mobile apps, learning reusable skills, and executing device workflows.
- [ClosePaw](https://awesomecua.com/zh/resources/github-imoonkey-closepaw/) — Date not recorded
  On-device Android agent app that reads the accessibility tree, with optional screenshots, acts through accessibility node actions or gesture taps, and can run on a Shizuku virtual display in the background.
- [ColorBrowserAgent](https://awesomecua.com/zh/resources/github-madeagents-browser-agent/) — Date not recorded
  A browser agent for long web tasks that compresses progress into summaries and incorporates human supplied site knowledge to guide later actions.
- [CoMEM-Agent](https://awesomecua.com/zh/resources/github-wenyiwu0111-comem-agent/) — Date not recorded
  A web GUI agent implementation that retrieves compact embeddings of earlier interaction trajectories as memory. The repository includes inference and training code.
- [Computer-Use Cache](https://awesomecua.com/zh/resources/github-rohanarun-computer-use-cache/) — Date not recorded
  Drop-in OpenAI-compatible caching proxy that records and replays repeated computer-use and browser-agent workflows.
- [Computer-Use Capability Engine](https://awesomecua.com/zh/resources/github-pavanvakula-computer-use-capability-engine/) — Date not recorded
  Discovers legacy UI workflows with an LLM once and compiles them into typed, versioned, deterministically replayable capabilities.
- [computer-use-plus](https://awesomecua.com/zh/resources/github-ethanout-computer-use-plus/) — Date not recorded
  Low-token, low-latency Windows computer-use MCP server with learned action shortcuts and hybrid UIA/CDP/OCR routing.
- [ConnectOnion](https://awesomecua.com/zh/resources/github-openonion-connectonion/) — Date not recorded
  ConnectOnion is a CLI and Python framework that gives agents commands for connected accounts, a logged-in browser, files, and chat apps.
- [CowAgent](https://awesomecua.com/zh/resources/github-zhayujie-cowagent/) — Date not recorded
  CowAgent is an open-source assistant that plans tasks and controls a computer, browser, and external services. It combines browser tools with memory, skills, and service integrations.
- [Cradle](https://awesomecua.com/zh/resources/github-baai-agents-cradle/) — Date not recorded
  Framework in which foundation models control games and software from screenshots alone, acting through keyboard and mouse, shown on RDR2, Stardew Valley, Cities: Skylines and Dealer's Life 2.
- [Crimson-Heart](https://awesomecua.com/zh/resources/github-yeyvhaiou-crimson-heart/) — Date not recorded
  Persistent multimodal desktop agent with explicit runtime state management, priority-aware scheduling, and interruptible execution.
- [cua-desktop-automation-skills](https://awesomecua.com/zh/resources/github-chrislamdev-cua-desktop-automation-skills/) — Date not recorded
  Router learning system and macOS desktop automation skill pack for AI agents using Cua Driver.
- [dassi](https://awesomecua.com/zh/resources/url-040e17448d9d190b3c14/) — Date not recorded
  Side-panel extension for Chrome, Edge and Brave whose agent reads pages, takes screenshots, clicks, types, fills forms and manages tabs in the user's signed-in browser, with saved skills, schedules and a choice of model.
- [Dex](https://awesomecua.com/zh/resources/url-76f0ba33cddbb348ea01/) — Date not recorded
  ThirdLayer's Chrome extension that keeps an operational memory of a user's work tools and runs agents that navigate tabs and fill forms in the browser, alongside Gmail, Slack and CRM integrations.
- [E2-Mem](https://awesomecua.com/zh/resources/github-jianminya-e2mem/) — Date not recorded
  E2-Mem is an episodic-event hierarchical memory framework for long-horizon web agents evaluated on WebArena.
- [Errand](https://awesomecua.com/zh/resources/github-runta-dev-errand/) — Date not recorded
  Open-source persistent desktop AI teammate with scheduled tasks, browser control, and workspace memory.
- [Evoui Browser](https://awesomecua.com/zh/resources/github-salmonbird-evoui-browser/) — Date not recorded
  Self-evolving browser automation skill for Codex, Claude Code, and Cursor that caches reusable site knowledge.
- [ExpActivator](https://awesomecua.com/zh/resources/github-fyzhang1-expactivator/) — Date not recorded
  ExpActivator selectively retrieves and verifies applicable historical interaction experiences for personalized GUI agents.
- [FIVE-UI-Evol](https://awesomecua.com/zh/resources/github-microsoft-five-ui-evol/) — Date not recorded
  Microsoft monorepo for InfiniteWeb website and task-evaluator synthesis, the UI-E2I-Synth grounding evaluation script and UI-I2E-Bench leaderboard, and UI-Evol trajectory-based knowledge refinement.
- [Forged](https://awesomecua.com/zh/resources/github-sam-siavoshian-forged/) — Date not recorded
  Self-learning browser automation MCP server that records successful agent trajectories and replays deterministic Playwright steps.
- [FurlPay Bot](https://awesomecua.com/zh/resources/github-furlpay-furlpay-bot/) — Date not recorded
  Persistent AI teammate equipped with its own virtual computer, browser, long-term memory, and voice interface.
- [Galley](https://awesomecua.com/zh/resources/github-wangjc683-galley/) — Date not recorded
  Galley is a desktop assistant that works through screen vision, mouse and keyboard control, a browser extension, files, and terminal tools to complete user tasks.
- [GenericAgent](https://awesomecua.com/zh/resources/github-lsdefine-genericagent/) — Date not recorded
  GenericAgent is a minimal self-evolving agent framework that synthesizes reusable skills for browser, OS, and ADB mobile control.
- [Ghost in the Minecraft (GITM)](https://awesomecua.com/zh/resources/github-opengvlab-gitm/) — Date not recorded
  Ghost in the Minecraft (GITM) integrates LLMs with text-based knowledge and memory to complete the full Minecraft technology tree.
- [Ghost OS](https://awesomecua.com/zh/resources/github-ghostwright-ghost-os/) — Date not recorded
  Ghost OS is a native macOS MCP server combining accessibility-tree action execution, Vision OCR fallback, and reusable workflow recipes.
- [GUI-explorer](https://awesomecua.com/zh/resources/github-ilearn-lab-acl25-gui-explorer/) — Date not recorded
  Android agent code that explores apps over ADB, mines transition-aware knowledge into a knowledge base behind a retrieval service, and runs an OpenAI-backed agent demo that draws on it.
- [Hanzi Browse](https://awesomecua.com/zh/resources/github-hanzili-hanzi-browse/) — Date not recorded
  Hanzi Browse is a site-adapter and browser execution layer that supplies structured YAML recipes for complex dynamic web applications.
- [Hermes Agent](https://awesomecua.com/zh/resources/github-nousresearch-hermes-agent/) — Date not recorded
  Hermes Agent is a self-improving autonomous agent by Nous Research with procedural skill synthesis, browser control, and multi-platform sandboxes.
- [HeySnap](https://awesomecua.com/zh/resources/github-dhamani-aryan-heysnap/) — Date not recorded
  AI-first workspace for capturing files, documents, and live browser context into structured agent memory.
- [HIPPO Agent](https://awesomecua.com/zh/resources/github-wadang-muscle-mem-agent/) — Date not recorded
  A computer-use agent for multistep GUI tasks that stores task facts and progress in working memory and combines planning, grounding, and completion checks.
- [Intelligence Indeed](https://awesomecua.com/zh/resources/github-intelligence-indeed-intelligence-indeed/) — Date not recorded
  Intelligence Indeed is a desktop GUI agent that loads reusable guidance, probes the current environment and shares task-specific findings across planning and execution.
- [JARVIS-1](https://awesomecua.com/zh/resources/github-craftjarvis-jarvis-1/) — Date not recorded
  JARVIS-1 is an open-world multimodal Minecraft agent with episodic multimodal memory and goal-conditioned keyboard/mouse control.
- [Knot Agent](https://awesomecua.com/zh/resources/github-liz-public-knot-agent/) — Date not recorded
  Journal-first decentralized agent harness where independent browser and desktop plugins coordinate through an append-only fact log.
- [LangGraph](https://awesomecua.com/zh/resources/github-langchain-ai-langgraph/) — Date not recorded
  LangGraph is a stateful graph orchestration framework for building long-running, cyclical, and human-in-the-loop LLM and CUA agents.
- [LASER](https://awesomecua.com/zh/resources/github-mayer123-laser/) — Date not recorded
  LASER models interactive web navigation as state-space exploration with explicit state transitions and backtracking on WebShop.
- [lean-computer-use-mcp](https://awesomecua.com/zh/resources/github-kvxw1105-lean-computer-use-mcp/) — Date not recorded
  An MCP facade for Windows computer use that condenses accessibility observations, checks state freshness, and records desktop actions for later replay.
- [LiteWebAgent](https://awesomecua.com/zh/resources/github-pathonai-litewebagent/) — Date not recorded
  Open-source VLM web-agent framework providing Playwright browser control, planning, workflow memory, tree search, and FastAPI/Vercel deployment.
- [LiteWebAgent](https://awesomecua.com/zh/resources/github-pathonaiorg-litewebagent/) — Date not recorded
  Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.
- [LKO Mark 3.4](https://awesomecua.com/zh/resources/github-shubhransh-gupta-lko-mark-3-4/) — Date not recorded
  Autonomous macOS desktop assistant with voice interaction, screen vision, and native AppleScript/system control.
- [LLM Wiki for Chrome](https://awesomecua.com/zh/resources/github-nvk-llm-wiki-chrome/) — Date not recorded
  Bounded Chrome collaboration extension and local connector for building LLM-maintained knowledge wikis from live browsing.
- [Lumen browser agent](https://awesomecua.com/zh/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [Mary (Personal AI OS)](https://awesomecua.com/zh/resources/github-rao-studios-mary/) — Date not recorded
  Ambient-intelligent macOS computer-use desktop client and personal AI operating environment.
- [Mem0](https://awesomecua.com/zh/resources/github-mem0ai-mem0/) — Date not recorded
  Mem0 provides a scalable long-term memory layer for AI agents that extracts, consolidates, and retrieves user and session facts.
- [MemGUI-Agent](https://awesomecua.com/zh/resources/github-kwai-memgui-agent/) — Date not recorded
  MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.
- [Memlayer](https://awesomecua.com/zh/resources/github-divagr18-memlayer/) — Date not recorded
  Memlayer is a plug-and-play memory layer that extracts facts, builds knowledge graphs, and retrieves tiered context for LLM agents.
- [MemMachine](https://awesomecua.com/zh/resources/github-memmachine-memmachine/) — Date not recorded
  MemMachine is an open-source memory layer for AI agents providing working, episodic, and user-profile memory via REST, Python SDK, and MCP.
- [Memori](https://awesomecua.com/zh/resources/github-memorilabs-memori/) — Date not recorded
  Memori captures structured execution facts from agent tool calls and conversations into a relational memory store.
- [MERRICK](https://awesomecua.com/zh/resources/github-simoncheungai-merrick/) — Date not recorded
  Personal macOS assistant agent for planning, browser automation, and native desktop task execution.
- [MobA](https://awesomecua.com/zh/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile-Agent-E code component](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [MobileGPT](https://awesomecua.com/zh/resources/github-fclab-skku-mobilegpt/) — Date not recorded
  An Android client and Python-server agent that learns reusable app subtasks through exploration, selection, derivation and memory recall.
- [MobileRAG](https://awesomecua.com/zh/resources/github-liuxiaojieoutofworld-mobilerag-arxiv/) — Date not recorded
  MobileRAG operates Android devices via ADB by combining local app retrieval, historical trajectory memory, and external web search.
- [nanoMuse](https://awesomecua.com/zh/resources/github-nano-muse-nanomuse/) — Date not recorded
  nanoMuse is an open-source personal agent that maintains persistent cross-device memory and executes browser, desktop, and mobile tasks.
- [NaturalGAIA & LightManus](https://awesomecua.com/zh/resources/github-keles-coding-naturegaia/) — Date not recorded
  NaturalGAIA and LightManus provide a hierarchical multi-agent framework with browser automation, code execution, and episodic memory.
- [openadapt-retrieval](https://awesomecua.com/zh/resources/github-openadaptai-openadapt-retrieval/) — Date not recorded
  Archived retrieval tool that indexes GUI demonstrations from task text and screenshots, then finds similar examples through a Python API or CLI.
- [OpenBUA](https://awesomecua.com/zh/resources/github-alisharjeell-openbua/) — Date not recorded
  Chrome side-panel agent that works in the user's signed-in browser, reading DOM control inventories and tab screenshots, then clicking, typing and filling forms through injected synthetic events.
- [OpenDesk](https://awesomecua.com/zh/resources/github-vitalops-opendesk/) — Date not recorded
  Computer-use MCP server and Python/TypeScript SDKs giving agents Set-of-Marks screenshots, accessibility-based UI actions, mouse, keyboard, OCR, CDP browser control and workflow replay on local or paired machines.
- [OpenMemory (LongMemory)](https://awesomecua.com/zh/resources/github-caviraoss-openmemory/) — Date not recorded
  OpenMemory provides local-first temporal graph memory, decay scoring, and MCP integration for long-horizon AI agents.
- [OpenTeam](https://awesomecua.com/zh/resources/github-raghavpillai-openteam/) — Date not recorded
  Self-hosted multi-agent platform with persistent memory, browser automation, and computer-use execution.
- [OS-Symphony](https://awesomecua.com/zh/resources/github-os-copilot-os-symphony/) — Date not recorded
  OS-Symphony is a holistic computer-use agent framework combining a Reflection-Memory Agent, versatile toolset, and multimodal searcher.
- [OysterWorkflow](https://awesomecua.com/zh/resources/github-shuxinyang111-oysterworkflow/) — Date not recorded
  OysterWorkflow captures real human computer work and extracts structured, reusable workflow graphs for AI agents.
- [pebkac](https://awesomecua.com/zh/resources/github-michaelsoftmd-pebkac-chrome/) — Date not recorded
  Self-hosted web co-browser in which a smolagents code agent on a local llama.cpp model writes Python that drives Chrome through Zendriver: navigation, CSS-selector clicks and typing, Trafilatura text extraction and tabs.
- [POK-Agent](https://awesomecua.com/zh/resources/github-acekorneya-pok-agent/) — Date not recorded
  POK-Agent is a Windows computer-use agent that pairs a cloud planner with a fast local actor and caches repeated UI workflows as skills.
- [PreAct](https://awesomecua.com/zh/resources/github-19pine-ai-preact/) — Date not recorded
  PreAct compiles repeated computer-use agent trajectories into cached action graphs with lightweight visual verification to accelerate execution.
- [Protean](https://awesomecua.com/zh/resources/github-aibrain-mnemis-protean/) — Date not recorded
  Protean turns everyday human desktop and browser demonstrations into reusable, adaptive agent skills.
- [Recallo](https://awesomecua.com/zh/resources/github-tianqi-bu-recallo/) — Date not recorded
  Recallo is a local-first browser agent with persistent SQLite episodic memory across browsing sessions.
- [ReMe](https://awesomecua.com/zh/resources/github-agentscope-ai-reme/) — Date not recorded
  ReMe is a local-first personal knowledge and procedural memory management framework for autonomous LLM agents.
- [Ruflo](https://awesomecua.com/zh/resources/github-ruvnet-ruflo/) — Date not recorded
  Ruflo is an agent orchestration and MCP meta-harness for coordinating multi-agent swarms across Claude Code, Codex, and Cursor.
- [SCoR (Sparse Context Reset)](https://awesomecua.com/zh/resources/github-huia711-scor/) — Date not recorded
  Sparse Context Reset (SCoR) framework for preventing context overflow and drift in long-horizon GUI agents.
- [Screenpipe](https://awesomecua.com/zh/resources/github-screenpipe-screenpipe/) — Date not recorded
  Screenpipe continuously captures desktop screen text via accessibility/OCR and audio transcripts into a local database for AI agents.
- [Self-MAP](https://awesomecua.com/zh/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [Semantic Kernel](https://awesomecua.com/zh/resources/github-microsoft-semantic-kernel/) — Date not recorded
  Semantic Kernel is an enterprise SDK for orchestrating multi-agent workflows, plugins, and memory across Python, .NET, and Java.
- [Shadow](https://awesomecua.com/zh/resources/github-ghostwright-shadow/) — Date not recorded
  macOS app that records screen, audio, input events and accessibility trees on-device, builds searchable episodes, and replays learned procedures through AX-first grounding with a LoRA-tuned ShowUI-2B fallback.
- [Sidemates](https://awesomecua.com/zh/resources/github-prisacariurobert-sidemates/) — Date not recorded
  Open-source desktop AI companion that observes active windows and assists with everyday computer tasks.
- [SimpleMem](https://awesomecua.com/zh/resources/github-aiming-lab-simplemem/) — Date not recorded
  SimpleMem provides semantic lossless memory compression and multimodal retrieval for long-horizon LLM and desktop/CLI agents.
- [Smart Pet Agent](https://awesomecua.com/zh/resources/github-realstreetsmartnyc-smart-pet-agent/) — Date not recorded
  Local-first ambient desktop pet agent that observes workspace context and automates routine desktop actions.
- [StatePilot](https://awesomecua.com/zh/resources/github-newsbruno-statepilot/) — Date not recorded
  StatePilot is a predictable browser runtime for AI agents with state validation, episodic memory, error recovery, and MCP tools.
- [Strawberry](https://awesomecua.com/zh/resources/url-1aa4168c796c15476b97/) — Date not recorded
  Agentic desktop browser for macOS and Windows whose AI companions open sites, click through flows and work inside the user's signed-in accounts, asking for approval before sending, paying or deleting.
- [SwitchMem](https://awesomecua.com/zh/resources/github-dmis-lab-switchmem/) — Date not recorded
  Memory-routing implementation that chooses text or image demonstrations for a frozen GUI actor, with offline evaluation and Android transfer experiments.
- [Synapse](https://awesomecua.com/zh/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [TENKA](https://awesomecua.com/zh/resources/github-om-khode-tenka/) — Date not recorded
  TENKA is a Windows voice agent that carries out browser and desktop tasks through browser control, native UI actions and a vision fallback, with stored conversational memory.
- [TERX](https://awesomecua.com/zh/resources/github-ixchio-terx/) — Date not recorded
  Browser-agent procedural memory and MCP server that compiles repeated web workflows into deterministic zero-token replays.
- [TuriX-CUA](https://awesomecua.com/zh/resources/github-turixai-turix-cua/) — Date not recorded
  TuriX-CUA is a multi-agent desktop automation framework for macOS and Windows combining planner, actor, reflector, and memory skills.
- [Webcmd](https://awesomecua.com/zh/resources/github-agentrhq-webcmd/) — Date not recorded
  Webcmd captures and indexes website navigational context as agents browse, compiling site structure into reusable local memory skills.
- [WebTactix](https://awesomecua.com/zh/resources/url-40795d2c86388ae89f43/) — Date not recorded
  A web agent that simplifies accessibility trees, explores candidate actions in parallel and stores visited pages in a semantic tree to guide later decisions and recovery.
- [WeChat Mac RPA](https://awesomecua.com/zh/resources/github-wq19901103wq-wechat-mac-rpa/) — Date not recorded
  WeChat Mac RPA is a macOS agent that reads WeChat screenshots, reasons over conversations and uses system automation to send messages and switch chats.
- [Xiaoshe Agent (小蛇 Agent)](https://awesomecua.com/zh/resources/github-jackygilbert498-debug-xiaoshe-agent/) — Date not recorded
  Local-first desktop agent built on DeepSeek Harness featuring plugin governance, permission approvals, and completion receipts.
- [Xiryn](https://awesomecua.com/zh/resources/github-souravberaakaspeed-xiryn/) — Date not recorded
  Self-hosted personal agent app that gives each agent its own Docker Linux desktop with Chromium, operated through screenshots and xdotool clicks and keys, with live take-over, memory, a vault and Telegram control.
- [ZetaTron](https://awesomecua.com/zh/resources/github-itsmarcels-zetatron/) — Date not recorded
  Self-directed local-first autonomous agent harness for Windows with desktop and browser execution capabilities.

## 学习资源

- [clawtouch-skills](https://awesomecua.com/zh/resources/github-tinqiao-oss-clawtouch-skills/) — Date not recorded
  A collection of Markdown operator guides gives desktop agents app-specific menu paths, shortcuts and interaction techniques for use with HID controls.
- [learn-workbuddy](https://awesomecua.com/zh/resources/github-adongwanai-learn-workbuddy/) — Date not recorded
  24-chapter bilingual Python engineering course building a WorkBuddy-style desktop AI agent harness from scratch.
