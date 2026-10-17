# Memory

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/memory/records.jsonl

## Papers & surveys

- [Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://awesomecua.github.io/resources/arxiv-2610-18784/) — 2026-10-13
  Introduces CarryOn, which maintains evidence-linked task objects and remaining-work context across history compression, with evaluations on desktop tasks and web research.
- [Learning How to Remember: Memory Modality Selection for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-17928/) — 2026-10-13
  Introduces SwitchMem, which chooses a textual or visual representation of retrieved experience at each GUI interaction step instead of fixing one memory modality for a task.
- [Web$hell: A Unified Interface for Agentic Web Access](https://awesomecua.github.io/resources/arxiv-2610-13416/) — 2026-10-09
  Introduces Web$hell, an interface that compiles live pages into persistent information and action objects so agents can gather evidence, navigate websites, and reuse acquired content through shared operations.
- [DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11707/) — 2026-10-08
  Introduces DeltaReplay, which stores mobile GUI trajectories as transition graphs and decides at each step whether to reuse an action, substitute task-specific parameters, or defer to the base agent. This supports reuse of partially matching experiences without rewriting stored memory.
- [AMBER: Training Long-Horizon Web Agents through Append-Only Memory](https://awesomecua.github.io/resources/arxiv-2610-07118/) — 2026-10-05
  Introduces AMBER, an append-only memory framework in which a web agent learns to reason, act, and retain evidence using outcome-reward reinforcement learning. It studies whether preserving entries avoids the loss of facts and corrective feedback seen with rewritten memory.
- [TeleTune: Evolving Agent Skills From Offline Telemetry](https://awesomecua.github.io/resources/arxiv-2610-05437/) — 2026-10-04
  Introduces TeleTune, which edits a textual skill library using held-out action prediction on offline software-use logs with missing goals or interleaved tasks. The learned workflows also guide retrieval of demonstrations for subsequent web-agent execution.
- [Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-01787/) — 2026-10-01
  Studies how to route different parts of GUI experience into model weights or runtime context rather than treating whole trajectories as a single unit. It separates locators, procedures, state facts, and lessons, then predicts their destination from recurrence and dependence on the current state.
- [Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories](https://awesomecua.github.io/resources/arxiv-2610-01491/) — 2026-10-01
  Audits WebArena-Lite outcomes and trajectories with human review to identify automatic-evaluator false negatives and the first consequential execution errors. It also studies explicit execution-state memory and procedural guidance, showing why final task scores can miss substantial differences in agent behavior.
- [Learning Reliable GUI Agents under Imperfect Priors](https://awesomecua.github.io/resources/arxiv-2609-39547/) — 2026-09-30
  Combines structured GUI exploration with training designed to tolerate imperfect retrieved experience. It builds state-transition graphs and synthetic task trajectories, then injects realistic forms of interface drift so agents learn when to rely on or reject prior guidance.
- [Action Conditioned Bisimulation For GUI Agent Memory](https://awesomecua.github.io/resources/arxiv-2609-38778/) — 2026-09-30
  Defines a GUI-memory merge rule that treats two states as equivalent only when shared actions lead to matching outcomes and successor states. The training-free method replaces observation-similarity merging and is tested in closed-loop MiniWoB++ interaction.
- [Absorbed in Inertia: Activation Analysis for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-37176/) — 2026-09-29
  Studies repetitive, unproductive actions in desktop agents through their internal activation states. It proposes Reset, Reroute, Restore, a context intervention that temporarily resets an agent’s trajectory and later restores it to help escape repeated ineffective behavior.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.github.io/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [AdaptArena: Evaluating Test-Time Personalization of Web Agents](https://awesomecua.github.io/resources/arxiv-2609-36488/) — 2026-09-29
  Introduces AdaptArena to test whether web agents can infer unstated user preferences from relevant past trajectories and carry those preferences into new tasks. Its AdaptiveAgent baseline separates preference-retrieval challenges from failures in downstream web execution.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.github.io/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [One Rollout Is All You Get: Fully Test-Time Adaptation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-34321/) — 2026-09-28
  Defines a test-time adaptation setting with one counted attempt per arriving GUI task and no ground-truth feedback. Its SOLO method filters or relabels completed episodes, then updates a small adapter from a short window of the agent’s own experience.
- [Probe to Act: Elevating Browser-Use Agent via Active Visual Probing](https://awesomecua.github.io/resources/arxiv-2609-33646/) — 2026-09-27
  Introduces Probe to Act, which lets browser agents request visual evidence linking DOM handles and screen regions before committing an operation. It retains selected interaction evidence as memory and studies both prompted use and distillation into open models.
- [Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-33304/) — 2026-09-27
  Introduces ExpActivator, which matches the current GUI state to relevant historical states before supplying past actions as guidance. A separate activation rule decides whether a recurring user intent is warranted by the current time and situation or should be withheld.
- [AgentTell: Behavioural Side-Channel Leakage in Browser-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-32915/) — 2026-09-26
  Introduces AgentTell, a benchmark for privacy leakage through browser actions after an agent learns a private fact on another website. It examines whether agents choose revealing options despite nondisclosure instructions and whether their final reports accurately describe that behavior.
- [PastForward: Faster On-Device GUI Agents via Computational Experience Reuse](https://awesomecua.github.io/resources/arxiv-2609-32166/) — 2026-09-26
  Introduces PastForward, which reuses earlier output sequences as verified decoding proposals and starts future action computation from predicted GUI transitions. Screen checks determine whether speculative computation and cached model states can be retained.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.github.io/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [Learn How to Act from Your Own Interactions: On-Policy Self-Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-27307/) — 2026-09-23
  GUI-SD-v2 extends on-policy self-distillation from grounding to multi-turn GUI interaction. It first strengthens responses to privileged guidance, then selectively distills step-specific reasoning and memory support for later actions.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.github.io/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-04869/) — 2026-09-04
  An online skill-evolution framework turns GUI interaction traces and evaluator feedback into a versioned library of reusable procedures without updating model parameters. Controlled OSWorld comparisons examine both the benefits of shared procedural memory and its domain-dependent instability under repeated revision.
- [SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction](https://awesomecua.github.io/resources/arxiv-2609-05511/) — 2026-08-31
  Introduces SCAFFOLD, which extracts executable skills from web trajectories, composes them into a hierarchy, and compresses redundant skills through behavioral checks. It periodically distills skill-guided trajectories into the policy and studies repeated improvement across web benchmarks.
- [CausalCache: Conditional High-Fidelity Restoration for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-22577/) — 2026-08-23
  Introduces CausalCache, which selects archived screenshots to restore alongside text summaries under a fixed visual-memory budget. A history-gated adapter processes restored images, with evaluation distinguishing standard step limits from longer-horizon and mobile-transfer settings.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.github.io/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.github.io/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [iOSWorld: A Benchmark for Personally Intelligent Phone Agents](https://awesomecua.github.io/resources/arxiv-2606-09764/) — 2026-06-08
  Introduces a native iOS simulator benchmark with persistent user data, multi-app tasks, and personalization-dependent phone workflows.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.github.io/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.github.io/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.github.io/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [UI-KOBE: Knowledge-Oriented Behavior Exploration for Lightweight Graph-Guided GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-29534/) — 2026-05-28
  UI-KOBE explores mobile applications to build graphs of UI states and executable transitions. A lightweight agent then matches its current screenshot to the graph and chooses a transition, local action, completion signal or fallback action.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.github.io/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [SE-GA: Memory-Augmented Self-Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-16883/) — 2026-05-16
  SE-GA retrieves hierarchical memories during inference and uses the collected experience in a separate policy-improvement pipeline. Its evaluation includes offline grounding/action tasks and online Android interaction, which measure different capabilities.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.github.io/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [Exploring LLM Agent Designs and Interaction Modalities for Scientific Visualization](https://awesomecua.github.io/resources/arxiv-2604-27996/) — 2026-04-30
  This study compares specialized, computer-use and coding agents on scientific visualization workflows. It examines GUI, CLI, code and tool-call interaction modes, including how persistent memory changes performance across repeated trials.
- [AgentClick: A Skill-Based Human-in-the-Loop Review Layer for Terminal AI Agents](https://awesomecua.github.io/resources/arxiv-2604-16520/) — 2026-04-15
  AgentClick gives terminal-based agents a browser review interface for plans, drafts, execution traces and editable memory. A local server and skill plugin let users inspect proposed actions and provide structured feedback.
- [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://awesomecua.github.io/resources/arxiv-2604-13822/) — 2026-04-15
  UI-Copilot separates GUI execution from on-demand memory retrieval and numerical assistance. Its training procedure treats tool selection and multi-turn task execution as distinct optimization targets while keeping persistent observations outside transient context.
- [Poison Once, Exploit Forever: Environment-Injected Memory Poisoning Attacks on Web Agents](https://awesomecua.github.io/resources/arxiv-2604-02623/) — 2026-04-03
  Studies persistent web-agent memory contamination introduced through environmental observations instead of direct memory access. Experiments on WebArena and VisualWebArena examine cross-session effects and how interaction failures alter susceptibility.
- [CarePilot: A Multi-Agent Framework for Long-Horizon Computer Task Automation in Healthcare](https://awesomecua.github.io/resources/arxiv-2603-24157/) — 2026-03-25
  CareFlow benchmarks long healthcare-software workflows, while CarePilot coordinates action proposals, execution checks and corrective feedback using short- and long-term memory. Its actor consumes visual interfaces and system state to select semantic actions.
- [AndroTMem: From Interaction Trajectories to Anchored Memory in Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-18429/) — 2026-03-19
  Introduces AndroTMem-Bench for Android tasks whose later actions depend on earlier UI states. Anchored State Memory retains causally linked intermediate states for subgoal-specific retrieval and evaluates them against full-history and summary-based memory.
- [Adaptive Vision-Language Model Routing for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2603-12823/) — 2026-03-13
  Adaptive VLM Routing estimates GUI-action difficulty and small-model confidence to select a model under a predicted reliability threshold. Grounding and agent-routing benchmarks assess the cost–accuracy trade-off, with prior interaction context used for warm agents.
- [SecAgent: Efficient Mobile GUI Agent with Semantic Context](https://awesomecua.github.io/resources/arxiv-2603-08533/) — 2026-03-09
  Presents a Chinese mobile GUI dataset and navigation benchmark together with SecAgent, which compresses previous screenshots and actions into semantic summaries. The agent is trained with supervised and reinforcement fine-tuning to use this compact interaction context.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.github.io/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [Persona2Web: Benchmarking Personalized Web Agents for Contextual Reasoning with User History](https://awesomecua.github.io/resources/arxiv-2602-17003/) — 2026-02-19
  Persona2Web tests whether web agents can resolve ambiguous requests using preferences implicit in a user’s history. Its reasoning-aware evaluation compares agent architectures and history-access strategies on personalized tasks on the open web.
- [MemoryArena: Benchmarking Agent Memory in Interdependent Multi-Session Agentic Tasks](https://awesomecua.github.io/resources/arxiv-2602-16313/) — 2026-02-18
  MemoryArena links tasks across sessions so that agents must distill earlier interaction experience and use it in later decisions. Its evaluation includes web navigation alongside planning, search and formal reasoning, testing memory through subsequent actions rather than recall alone.
- [Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-16855/) — 2026-02-15
  Presents GUI-Owl-1.5 variants and a hybrid data pipeline for multimodal GUI interaction, tool use, memory, and multi-platform tasks.
- [TreeCUA: Efficiently Scaling GUI Automation with Tree-Structured Verifiable Evolution](https://awesomecua.github.io/resources/arxiv-2602-09662/) — 2026-02-10
  TreeCUA organizes GUI exploration trajectories as reusable trees and balances deeper tasks against broader coverage. Its data pipeline combines action verification, memory-backed recovery and a DPO variant that uses information from adjacent branches.
- [UI-Mem: Self-Evolving Experience Memory for Online Reinforcement Learning in Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-05832/) — 2026-02-05
  UI-Mem stores workflows, skills and failure patterns as reusable templates to guide online GUI reinforcement learning. It varies guidance within rollout groups and continually updates the memory so an unguided policy can learn from guided experiences.
- [MemGUI-Bench: Benchmarking Memory of Mobile GUI Agents in Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2602-06075/) — 2026-02-03
  MemGUI-Bench evaluates short-term retention and cross-session experience reuse in mobile GUI agents using paired tasks and repeated-attempt protocols. Its staged evaluator measures memory fidelity, learning and execution efficiency.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.github.io/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [Darwinian Memory: A Training-Free Self-Regulating Memory System for GUI Agent Evolution](https://awesomecua.github.io/resources/arxiv-2601-22528/) — 2026-01-30
  Darwinian Memory splits GUI trajectories into reusable units and updates the memory by retaining useful paths and pruning poor ones. It evaluates this training-free memory mechanism on long multi-application tasks.
- [CUA-Skill: Develop Skills for Computer Using Agent](https://awesomecua.github.io/resources/arxiv-2601-21123/) — 2026-01-28
  CUA-Skill encodes Windows application knowledge in parameterized skills and execution/composition graphs. Its agent retrieves and instantiates these skills and uses memory for failure recovery, with end-to-end evaluation on WindowsAgentArena.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [GraphPilot: GUI Task Automation with One-Step LLM Reasoning Powered by Knowledge Graph](https://awesomecua.github.io/resources/arxiv-2601-17418/) — 2026-01-24
  GraphPilot builds app-specific knowledge graphs from explored pages, elements and transitions, then uses them to plan action sequences. It requests additional interface observations when uncertain and checks plans against graph transition rules before correction and execution.
- [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://awesomecua.github.io/resources/arxiv-2601-09636/) — 2026-01-14
  Introduces AndroidIntent to evaluate how GUI agents infer omitted preferences and recurring routines from long-term user records. Its HIM-Agent maintains hierarchical memory of preferences and routines for personalized execution and proactive suggestions.
- [ExpSeek: Self-Triggered Experience Seeking for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08605/) — 2026-01-13
  ExpSeek uses step-level entropy signals to decide when a web agent should request experience-based guidance. It supplies guidance tailored to the current step and evaluates the intervention across web-agent benchmarks.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.github.io/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-07262/) — 2026-01-12
  ColorBrowserAgent converts human feedback into reusable website knowledge and uses that knowledge to guide progressive context summaries. It evaluates the resulting memory and adaptation mechanisms on long browser workflows.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.github.io/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [AgentProg: Empowering Long-Horizon GUI Agents with Program-Guided Context Management](https://awesomecua.github.io/resources/arxiv-2512-10371/) — 2025-12-11
  Introduces AgentProg, organizing mobile-agent interaction history as a program with variables and control flow to decide what context to retain. A global belief state handles partial observability, with evaluation on AndroidWorld and extended long-horizon tasks.
- [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-01763/) — 2025-12-01
  HiconAgent trains GUI policies to use history through variable-length context sampling and paired policy updates with compressed and complete histories. Its compression retains past actions while removing historical observations, and an alignment loss couples the two branches.
- [WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance](https://awesomecua.github.io/resources/arxiv-2511-12997/) — 2025-11-17
  Introduces WebCoach, which condenses navigation logs into persistent episodic memory and retrieves experiences by similarity and recency. Runtime hooks selectively supply advice to browser agents, evaluated on WebVoyager without retraining the underlying models.
- [Mobile-Agent-RAG: Driving Smart Multi-Agent Coordination with Contextual Knowledge Empowerment for Long-Horizon Mobile Automation](https://awesomecua.github.io/resources/arxiv-2511-12254/) — 2025-11-15
  Uses separate retrieval systems for high-level mobile-task planning and precise interface operations, with a benchmark for extended cross-app tasks.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [Learning from Online Videos at Inference Time for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2511-04137/) — 2025-11-06
  This work retrieves online video tutorials and converts them into structured GUI action demonstrations with short objectives. A two-stage selection process supplies a relevant local trajectory as in-context guidance at each execution step.
- [MGA: Memory-Driven GUI Agent for Observation-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2510-24168/) — 2025-10-28
  Introduces MGA, which separates task-agnostic screen-state reading from decision making and connects steps through structured state memory. Validated state deltas replace full trajectory replay, evaluated on OSWorld and application tasks.
- [OpenPhone: Mobile Agentic Foundation Models](https://awesomecua.github.io/resources/arxiv-2510-22009/) — 2025-10-24
  OpenPhone trains a compact mobile policy with supervised learning followed by GRPO on synthetic GUI data, incorporating reasoning and memory management. Its device-cloud design handles routine work locally and delegates complex subtasks, with online evaluation on AndroidLab.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://awesomecua.github.io/resources/arxiv-2510-10666/) — 2025-10-12
  Trains BrowserAgent to use Playwright-based scrolling, clicking and typing directly on webpages for information-seeking tasks. Supervised and rejection fine-tuning are paired with explicit memory for conclusions carried across steps.
- [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.github.io/resources/arxiv-2510-09038/) — 2025-10-10
  Encodes GUI trajectories into compact continuous embeddings that can be retrieved directly into an agent’s input. An automated environment-discovery and rollout pipeline expands this memory for long tasks and unfamiliar interfaces.
- [ReInAgent: A Context-Aware GUI Agent Enabling Human-in-the-Loop Mobile Task Navigation](https://awesomecua.github.io/resources/arxiv-2510-07988/) — 2025-10-09
  Introduces ReInAgent, coordinating information management, planning, and reflection around a shared memory for mobile tasks. It proactively asks users for information and checks consistency when instructions are ambiguous or change during execution.
- [JEF-Hinter: Leveraging Offline Knowledge for Improving Web Agents Adaptation](https://awesomecua.github.io/resources/arxiv-2510-04373/) — 2025-10-05
  Introduces JEF-Hinter, which distills successful and failed trajectories into compact episodic hints and retrieves them for the current agent state. Web benchmark experiments examine guidance from decisive steps rather than full demonstration replay.
- [PAL-UI: Planning with Active Look-back for Vision-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2510-00413/) — 2025-10-01
  PAL-UI combines observation/action summaries with selective retrieval of historical screenshots during planning. It trains mobile navigation models from step-level supervision and evaluates transfer to web navigation without additional training.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [Robust, Observable, and Evolvable Agentic Systems Engineering: A Principled Framework Validated via the Fairy GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-20729/) — 2025-09-25
  Presents an agent-engineering framework combining runtime goal clarification, an observable component architecture and evolving execution memory. The Fairy mobile GUI agent evaluates these mechanisms on ambiguous tasks and through controlled and user studies.
- [InfraMind: A Novel Exploration-based GUI Agentic Framework for Mission-critical Industrial Management](https://awesomecua.github.io/resources/arxiv-2509-13704/) — 2025-09-17
  InfraMind explores industrial management GUIs using virtual-machine snapshots and builds memory for planning and hierarchical state recognition. Its framework also studies knowledge distillation and safety checks on open-source and commercial data-center management platforms.
- [MobileRAG: Enhancing Mobile Agent with Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-03891/) — 2025-09-04
  MobileRAG combines retrieval and memory components to support mobile tasks that need external knowledge or long action sequences. MobileRAG-Eval is introduced to study these requirements on complex real-world app tasks.
- [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.github.io/resources/arxiv-2509-01052/) — 2025-09-01
  FlashAdventure evaluates GUI agents on completing story arcs in 34 adventure games. It pairs an automated gameplay judge with COAST, a framework that keeps long-term clue memory to plan and complete sequential objectives.
- [KG-RAG: Enhancing GUI Agent Decision-Making via Knowledge Graph-Driven Retrieval-Augmented Generation](https://awesomecua.github.io/resources/arxiv-2509-00366/) — 2025-08-30
  KG-RAG converts UI transition graphs into a searchable vector store and uses intent-guided retrieval to construct actionable navigation paths. It introduces KG-Android-Bench and KG-Harmony-Bench and evaluates transfer from mobile apps to web and desktop tasks.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.github.io/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [MapAgent: Trajectory-Constructed Memory-Augmented Planning for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2507-21953/) — 2025-07-29
  Builds reusable page memories from past mobile trajectories and retrieves them to support task planning and execution.
- [WebArxiv: A Reproducible Benchmark for Evaluating Multimodal Web Agents on arXiv Tasks](https://awesomecua.github.io/resources/arxiv-2507-00938/) — 2025-07-01
  WebArxiv provides 510 static-snapshot tasks with deterministic answers for scholarly browsing, including constrained paper retrieval, content extraction, and cross-paper comparison. The study also tests dynamic retrieval of interaction history to address repetitive or incomplete agent reasoning.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.github.io/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [Context manipulation attacks : Web agents are susceptible to corrupted memory](https://awesomecua.github.io/resources/arxiv-2506-17318/) — 2025-06-18
  Studies context manipulation in web agents by altering stored task representations rather than webpage prompts alone. Evaluation on Browser-use and Agent-E examines memory-directed attacks and the implications for secure context handling.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.github.io/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [VerificAgent: Domain-Specific Memory Verification for Scalable Oversight of Aligned Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-02539/) — 2025-06-03
  Introduces VerificAgent, which grows domain-specific memories from task trajectories and subjects them to human fact-checking before deployment. Its OSWorld evaluation treats persistent memory as an auditable constraint on later agent behavior.
- [Agent-SAMA: State-Aware Mobile Assistant](https://awesomecua.github.io/resources/arxiv-2505-23596/) — 2025-05-29
  Models mobile application execution as a finite-state machine to support planning, verification, and recovery across interface transitions.
- [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2505-21964/) — 2025-05-28
  Introduces UI-Evol, which extracts action sequences from agent interactions and critiques external guidance against those traces. Evaluation on OSWorld examines how revised operational knowledge affects execution and behavioral consistency.
- [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.github.io/resources/arxiv-2505-16827/) — 2025-05-22
  GUI-explorer generates exploration goals from screenshots and interface structure, then mines observation-action-outcome triples for app-specific transition knowledge. The resulting training-free agent uses this knowledge during mobile task execution, evaluated on SPA-Bench and AndroidWorld.
- [Creating General User Models from Computer Use](https://awesomecua.github.io/resources/arxiv-2505-10831/) — 2025-05-16
  Proposes general user models that turn computer-use observations into confidence-weighted propositions and revise them as new context arrives. Demonstrations use this memory to contextualize assistants, manage notifications, and support proactive actions across apps.
- [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.github.io/resources/arxiv-2504-13805/) — 2025-04-18
  LearnAct parses human demonstrations into reusable knowledge, retrieves relevant examples, and uses them during mobile GUI task execution. The accompanying LearnGUI benchmark includes 2,252 offline tasks and 101 online tasks for studying adaptation from demonstrations.
- [ScreenLLM: Stateful Screen Schema for Efficient Action Understanding and Prediction](https://awesomecua.github.io/resources/arxiv-2503-20978/) — 2025-03-26
  Represents interface interactions with a stateful screen schema to model user behavior and support action understanding and prediction.
- [COLA: A Scalable Multi-Agent Framework For Windows UI Task Automation](https://awesomecua.github.io/resources/arxiv-2503-09263/) — 2025-03-12
  Coordinates specialized Windows UI agents with dynamic task scheduling, shared memory, and human-triggered rollback for recovering from errors.
- [MPO: Boosting LLM Agents with Meta Plan Optimization](https://awesomecua.github.io/resources/arxiv-2503-02682/) — 2025-03-04
  Refines reusable high-level meta plans with execution feedback to guide language-agent planning across interactive environments.
- [AppAgentX: Evolving GUI Agents as Proficient Smartphone Users](https://awesomecua.github.io/resources/arxiv-2503-02268/) — 2025-03-04
  Records interaction history and converts repeated action sequences into reusable high-level shortcuts for mobile GUI tasks.
- [Mobile-Agent-V: A Video-Guided Approach for Effortless and Efficient Operational Knowledge Injection in Mobile Automation](https://awesomecua.github.io/resources/arxiv-2502-17110/) — 2025-02-24
  Extracts operational guidance from video for mobile task execution and introduces Mobile-Knowledge to evaluate the contribution of external knowledge.
- [Towards Computer-Using Personal Agents](https://awesomecua.github.io/resources/arxiv-2503-15515/) — 2025-01-31
  Proposes computer-using personal agents connected to user-controlled data repositories, discussing privacy, interoperability, and collaborative tasks.
- [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.github.io/resources/arxiv-2501-11733/) — 2025-01-20
  Uses hierarchical mobile agents and persistent tips and reusable action shortcuts to improve complex tasks from accumulated experience.
- [Aria-UI: Visual Grounding for GUI Instructions](https://awesomecua.github.io/resources/arxiv-2412-16256/) — 2024-12-20
  Introduces a vision-based grounding model trained with diverse synthetic instructions and action histories for context-sensitive GUI targeting.
- [VideoWebArena: Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://awesomecua.github.io/resources/arxiv-2410-19100/) — 2024-10-24
  Evaluates whether web agents can retain procedural skills and factual information from long video tutorials and use them during tasks.
- [MobA: Multifaceted Memory-Enhanced Adaptive Planning for Efficient Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2410-13757/) — 2024-10-17
  Combines adaptive mobile-task planning, reflection-based recovery, and multiple memory components, evaluated with MobBench and AndroidArena.
- [Agent S: An Open Agentic Framework that Uses Computers Like a Human](https://awesomecua.github.io/resources/arxiv-2410-08164/) — 2024-10-10
  Combines hierarchical planning, retrieved experience, and a computer interaction interface to execute multistep GUI tasks.
- [StateAct: Enhancing LLM Base Agents via Self-prompting and State-tracking](https://awesomecua.github.io/resources/arxiv-2410-02810/) — 2024-09-21
  Maintains explicit task goals and evolving state descriptions to improve base-agent decisions across interactive tasks, including web shopping.
- [Agent Workflow Memory](https://awesomecua.github.io/resources/arxiv-2409-07429/) — 2024-09-11
  Agent Workflow Memory extracts reusable task routines and selectively supplies them to guide later web actions. It studies both offline workflow induction from training examples and online induction from test experience on Mind2Web and WebArena.
- [AppAgent v2: Advanced Agent for Flexible Mobile Interactions](https://awesomecua.github.io/resources/arxiv-2408-11824/) — 2024-08-05
  Separates exploration and deployment while using a structured application knowledge base and retrieval to guide mobile workflows.
- [Mobile-Agent-v2: Mobile Device Operation Assistant with Effective Navigation via Multi-Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2406-01014/) — 2024-06-03
  Separates mobile planning, decision-making, and reflection, with a memory unit for task progress and relevant content.
- [MMInA: Benchmarking Multihop Multimodal Internet Agents](https://awesomecua.github.io/resources/arxiv-2404-09992/) — 2024-04-15
  Evaluates multimodal agents on compositional tasks across changing websites and studies replaying prior trajectories as memory support.
- [WILBUR: Adaptive In-Context Learning for Robust and Accurate Web Agents](https://awesomecua.github.io/resources/arxiv-2404-05902/) — 2024-04-08
  WILBUR learns to rank prior task demonstrations for a web agent’s prompt and synthesizes instructions from past runs. A generated task curriculum and a backtracking mechanism support adaptation and recovery, evaluated on WebVoyager.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.github.io/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [GPTVoiceTasker: Advancing Multi-step Mobile Task Efficiency Through Dynamic Interface Exploration and Learning](https://awesomecua.github.io/resources/arxiv-2401-14268/) — 2024-01-25
  Introduces GPTVoiceTasker, a mobile assistant that interprets user commands, executes device interactions, and learns from prior commands to streamline later task execution. The work includes a user study of task efficiency.
- [AutoTask: Executing Arbitrary Voice Commands by Exploring and Learning from Mobile GUI](https://awesomecua.github.io/resources/arxiv-2312-16062/) — 2023-12-26
  Executes voice-requested mobile tasks through GUI exploration, backtracking, and accumulated interaction experience.
- [AppAgent: Multimodal Agents as Smartphone Users](https://awesomecua.github.io/resources/arxiv-2312-13771/) — 2023-12-21
  Builds app knowledge through exploration or human demonstrations and uses it to guide multimodal smartphone interactions.
- [Explore, Select, Derive, and Recall: Augmenting LLM with Human-like Memory for Mobile Task Automation](https://awesomecua.github.io/resources/arxiv-2312-03003/) — 2023-12-04
  Introduces MobileGPT, which organizes mobile-app experience into reusable subtasks using an explore, select, derive, and recall cycle. Its memory supports learning task procedures and adapting them to new contexts.
- [AutoDroid: LLM-powered Task Automation in Android](https://awesomecua.github.io/resources/arxiv-2308-15272/) — 2023-08-29
  Combines language-model reasoning with app analysis, UI representations, and exploration-derived memory for Android task automation.
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://awesomecua.github.io/resources/arxiv-2306-07863/) — 2023-06-13
  Synapse filters task-irrelevant page state and places complete abstracted state-action trajectories into the prompt. An embedding-based exemplar memory retrieves relevant demonstrations for new tasks, evaluated on MiniWoB++ and Mind2Web.

## Benchmarks

- [iOSWorld](https://awesomecua.github.io/resources/github-ljang0-iosworld/) — Date not recorded
  Native iPhone-simulator benchmark with shared user data, application workflows, agent runners, and rubric-based scoring.

## Datasets

- [Aria-UI Context-aware Data](https://awesomecua.github.io/resources/url-07b65dc937756ddff4a1/) — Date not recorded
  Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.
- [MT-Mind2Web](https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.

## Engineering & industry

- [Agent S](https://awesomecua.github.io/resources/github-simular-ai-agent-s/) — Date not recorded
  Agent framework for general computer interaction.
- [Agent Workflow Memory implementation](https://awesomecua.github.io/resources/github-zorazrw-agent-workflow-memory/) — Date not recorded
  Research code that extracts reusable browser-task routines from demonstrations or prior executions, stores them as workflow memory and reuses them during subsequent navigation.
- [AndroTMem inference and evaluation code](https://awesomecua.github.io/resources/github-cvc2233-androtmem/) — Date not recorded
  A public Android GUI evaluation framework with action-history, summary and anchored-memory prompt modes, plus step-action and dependency-aware task scoring.
- [AppAgent](https://awesomecua.github.io/resources/github-tencentqqgylab-appagent/) — Date not recorded
  Mobile app agent using exploration and reusable knowledge.
- [AppAgentX](https://awesomecua.github.io/resources/github-westlake-agi-lab-appagentx/) — Date not recorded
  Mobile agent research using accumulated interaction experience.
- [Cradle](https://awesomecua.github.io/resources/github-baai-agents-cradle/) — Date not recorded
  General computer-control framework using visual interfaces.
- [LiteWebAgent](https://awesomecua.github.io/resources/github-pathonaiorg-litewebagent/) — Date not recorded
  Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.
- [Lumen browser agent](https://awesomecua.github.io/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [MobA](https://awesomecua.github.io/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [MobileGPT](https://awesomecua.github.io/resources/github-fclab-skku-mobilegpt/) — Date not recorded
  An Android client and Python-server agent that learns reusable app subtasks through exploration, selection, derivation and memory recall.
- [Self-MAP](https://awesomecua.github.io/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [SwitchMem](https://awesomecua.github.io/resources/github-dmis-lab-switchmem/) — Date not recorded
  Memory-routing implementation that chooses text or image demonstrations for a frozen GUI actor, with offline evaluation and Android transfer experiments.
- [Synapse](https://awesomecua.github.io/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
