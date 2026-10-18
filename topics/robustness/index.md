# Robustness

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/robustness/records.jsonl

## Papers & surveys

- [How GUI Agents Fail: GraceBench for Execution Stability Diagnosis](https://awesomecua.github.io/resources/arxiv-2610-19900/) — 2026-10-14
  Introduces GraceBench, using application transition graphs and recorded interaction evidence to diagnose deviations, loops, and recovery that final task-success scores can hide.
- [CLASHarness: Benchmarking Multi-Agent Conflict in Computer Use via a Controllable and Verifiable Generation Pipeline](https://awesomecua.github.io/resources/arxiv-2610-19128/) — 2026-10-13
  Introduces CLASHarness, generating verifiable computer-use tasks with conflicting agent reports, shared-state constraints, and coordination requirements to evaluate conflict detection and resolution.
- [MHVF: Training-Free GUI Grounding via Verification-Guided Multi-Hypothesis Search](https://awesomecua.github.io/resources/arxiv-2610-17792/) — 2026-10-13
  Introduces MHVF, a training-free grounding method that explores several candidate screen regions, verifies them in local views, and uses those checks to guide further search.
- [ConClick: Element-Wise Contrastive Learning Improves GUI Grounding](https://awesomecua.github.io/resources/arxiv-2610-13268/) — 2026-10-09
  Analyzes recurring distractor clicks in GUI grounding and introduces ConClick, a contrastive training method built from target–distractor pairs. Its ReClick inference procedure revisits candidate regions and compares competing predictions.
- [When Charts Deceive Web Agents: A Paired Benchmark for Misleading Visualization-Grounded Tasks](https://awesomecua.github.io/resources/arxiv-2610-12823/) — 2026-10-09
  Introduces MisVisAgentBench, a paired executable benchmark that changes chart evidence while holding web tasks fixed, to trace how misleading visualizations affect agent decisions and downstream actions.
- [Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces](https://awesomecua.github.io/resources/arxiv-2610-07972/) — 2026-10-06
  Introduces PAIR for controlled evaluation of mobile GUI agents across user-conditioned application states and RePAIR for training from cross-user subgoal outcomes. The study examines failures when personalized interfaces change which items an agent must identify.
- [Decoupling What from Where: How Should a Small GUI Grounding Model Receive the Action Type?](https://awesomecua.github.io/resources/arxiv-2610-07444/) — 2026-10-05
  Compares ways to condition a small GUI grounding model on action type under matched training conditions on Android in the Wild. The study traces apparent gains to a coordinate-serialization choice and reports limited evidence that the gains persist with predicted action types.
- [WebFovea: When the Model Is Right but the Click Is Wrong -- Reliable Round Trips for Vision-Based Web Agents on Live Websites](https://awesomecua.github.io/resources/arxiv-2610-03036/) — 2026-10-02
  Describes WebFovea, a vision-based live-web agent whose execution loop checks action parsing, browser effects, feedback accuracy, and observation delivery. The report analyzes failures such as coordinate mismatches and silent control interactions and documents corresponding harness changes.
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.github.io/resources/arxiv-2610-00948/) — 2026-10-01
  Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights.
- [Learning Reliable GUI Agents under Imperfect Priors](https://awesomecua.github.io/resources/arxiv-2609-39547/) — 2026-09-30
  Combines structured GUI exploration with training designed to tolerate imperfect retrieved experience. It builds state-transition graphs and synthetic task trajectories, then injects realistic forms of interface drift so agents learn when to rely on or reject prior guidance.
- [Talk2Agent: Benchmarking Voice Interfaces for Text Agents](https://awesomecua.github.io/resources/arxiv-2609-38867/) — 2026-09-30
  Introduces Talk2Agent, a benchmark of spoken instructions for computer-use tasks that measures whether voice interfaces preserve task-critical information. It pairs human speech with an execution-free intention-based metric and checks how that metric relates to downstream task completion.
- [Absorbed in Inertia: Activation Analysis for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-37176/) — 2026-09-29
  Studies repetitive, unproductive actions in desktop agents through their internal activation states. It proposes Reset, Reroute, Restore, a context intervention that temporarily resets an agent’s trajectory and later restores it to help escape repeated ineffective behavior.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.github.io/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.github.io/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [WebPageBench: Event-Level Verification and Controlled UI-Variant Generation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-35026/) — 2026-09-28
  Verifies web tasks through typed interface events and generates controlled UI variations while preserving instructions and success conditions.
- [Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2609-34974/) — 2026-09-28
  Introduces Veer, a runtime defense that changes task-relevant web state when an otherwise valid proposed action would produce an unauthorized consequence. It plans a prospective intervention and grounds and verifies its execution before the base agent continues.
- [One Rollout Is All You Get: Fully Test-Time Adaptation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-34321/) — 2026-09-28
  Defines a test-time adaptation setting with one counted attempt per arriving GUI task and no ground-truth feedback. Its SOLO method filters or relabels completed episodes, then updates a small adapter from a short window of the agent’s own experience.
- [Same Tasks, Different Apps: Why Mobile GUI Agents Fail to Generalize?](https://awesomecua.github.io/resources/arxiv-2609-34139/) — 2026-09-28
  Introduces AnyAppBench, a live Android benchmark that holds user goals fixed while changing the application used to achieve them. It combines category-controlled task pairs with failure annotations to distinguish task understanding from application-specific execution skill.
- [GUITAR: Structured Failure Diagnosis of GUI Agents via State Transitions](https://awesomecua.github.io/resources/arxiv-2609-34113/) — 2026-09-28
  Introduces GUITAR, which groups visually different screens into functional states and analyzes agent failures over a state-transition graph. It uses the resulting bottlenecks to diagnose recurring mobile and web errors and evaluate targeted guidance.
- [REBASE: Device-Cloud Experience Coherence for GUI Agents Across App Updates](https://awesomecua.github.io/resources/arxiv-2609-32130/) — 2026-09-26
  Introduces REBASE, a device–cloud protocol for repairing cached GUI experience after app updates. It combines cloud replay, device-side step verification, and progressively richer failure reports to produce repairs tied to application versions.
- [ScreenHaystack: Finding Blind Zones in GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-32036/) — 2026-09-25
  Moves controlled target icons across high-resolution interfaces to diagnose spatial blind zones in grounding models and study targeted augmentation.
- [CAVEAT: Towards Robust Computer-Use Agents in Incentive-Misaligned Environments](https://awesomecua.github.io/resources/arxiv-2609-27273/) — 2026-09-23
  Introduces CAVEAT, a controlled marketplace benchmark for testing whether delegated agents preserve user objectives when interfaces favor other outcomes. It diagnoses decision failures and studies harness interventions and targeted training to improve resistance to marketplace steering.
- [How Many Pixels Is a Digit Worth? Place-Aware Coordinate Entropy for GUI Agent Confidence Estimation](https://awesomecua.github.io/resources/arxiv-2609-24277/) — 2026-09-21
  PACE weights coordinate-digit entropy by place value to estimate confidence in GUI clicks from one forward pass. It evaluates correctness ranking and selective accuracy against repeated-sampling alternatives on ScreenSpot-Pro and ScreenSpot-v2.
- [Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://awesomecua.github.io/resources/arxiv-2609-35814/) — 2026-09-20
  BreakingWeb pairs solvable browser tasks with controlled environment interventions that preserve the goal, target and backend success criterion. The paired evaluations isolate robustness failures, including agents declaring completion without the required state change.
- [A Dual-Process Perspective on Nudge Susceptibility in LLM-Based GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-19843/) — 2026-09-17
  Studies how automatic defaults and reflective social-influence cues affect GUI-agent shopping decisions under different reasoning configurations. A randomized simulated-shopping experiment finds that reasoning changes the type of susceptibility rather than uniformly removing interface influence.
- [ERPBench: A State-Grounded Evaluation Paradigm for Computer-Use Agents in Enterprise Software](https://awesomecua.github.io/resources/arxiv-2609-17885/) — 2026-09-15
  ERPBench evaluates screenshot-only agents in enterprise software using database values to check the business records produced by their actions. It pairs these state-based checks with a harness for human approval and analyzes cases where visible completion masks incorrect persisted data.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [When Agents See Differently: Exposing UI Desynchronization Threats in Mobile Agents](https://awesomecua.github.io/resources/arxiv-2609-16732/) — 2026-09-15
  Investigates mismatches between what humans see on a mobile display and what agents receive through screenshots or accessibility metadata. An automated evaluation framework embeds instruction-agnostic perturbations into functional APK clones and compares static and dynamic agent deviations with human noticeability.
- [EchoPath: Execution-Level Replayable Memory for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-16635/) — 2026-09-15
  EchoPath turns validated GUI trajectories into parameterized replay procedures with explicit runtime preconditions. Image-based target matching adjusts stored coordinates, while ambiguous steps fall back to bounded repair or fresh planning.
- [Learning from Reliable Negatives: Confidence-Anchored Test-Time Adaptation for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2609-15307/) — 2026-09-14
  Confidence-Anchored Learning uses coordinate-token confidence to filter pseudo-supervision for GUI grounding. Its negative-only variant performs label-free test-time updates to reduce reliance on potentially incorrect positive examples.
- [AgentHijack: Visual Patch Attacks on Multimodal Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-09212/) — 2026-09-06
  AgentHijack evaluates whether visual patch effects propagate from screenshots through model outputs and action parsing into real environment changes. Its controlled web-page experiments distinguish intermediate attack signals from verified end-to-end consequences.
- [Selective Knowledge Control for Continual GUI Agent Learning over Application Streams](https://awesomecua.github.io/resources/arxiv-2609-06530/) — 2026-09-06
  Introduces activation-conditioned gradient control for GUI agents learning successive applications. It protects inactive application-specific neurons, constrains updates to shared neurons, and accumulates a compact historical state to balance adaptation with retention.
- [ElderBench: Benchmarking Autonomous Mobile Agents for Older Adults](https://awesomecua.github.io/resources/arxiv-2609-04850/) — 2026-09-04
  ElderBench evaluates mobile GUI agents on smartphone requests elicited from older adults, including indirect and underspecified language. Online and offline tests, instruction normalization and linguistic analyses examine how these request patterns contribute to failures.
- [Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-03438/) — 2026-09-03
  CONFLICTGUI evaluates termination under instruction conflicts and mismatches between instructions and interface context. CONFLICTGUARD couples feasibility checks with conditional action modulation to reduce unnecessary execution while tracking normal-task behavior.
- [Monitoring Web Agents Without Internal Signals: Observable Trajectories and Key-Step Supervision](https://awesomecua.github.io/resources/arxiv-2609-02057/) — 2026-09-02
  Predicts web-agent failure risk from observable trajectory prefixes using cross-step behavior and black-box consistency queries. Key-step labels preserve valid early prefixes of failed runs, and evaluation tests early intervention and transfer across website categories.
- [Learning Simple Test-Time Environments for LLM Web Agents](https://awesomecua.github.io/resources/arxiv-2608-29305/) — 2026-08-29
  Introduces Test-Time Environment Decomposition, which uses trial interaction to break complex web observations into simpler modules. A label-free adaptation procedure learns from these sub-environments and studies whether their gains compose in full web tasks.
- [Are Android GUI Agents Robust Against Runtime Anomalies? AnTrap: Evaluating Agents in Dynamic Adversarial Environments](https://awesomecua.github.io/resources/arxiv-2608-24099/) — 2026-08-25
  Introduces AnTrap, which injects task-solvable runtime anomalies into Android GUI-agent trajectories using a layered failure taxonomy. It compares model robustness and adversarial reinforcement learning to distinguish recoverable interface traps from persistent contextual failures.
- [Reflection with Action-Induced Visual Differences for Desktop GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-24015/) — 2026-08-25
  Introduces Evidence-First Reflection, which separates extraction of action-induced screen changes from judgment of whether an operation achieved its objective. It filters visual differences into relevant evidence before a desktop agent’s reflector decides how execution should continue.
- [ComponentBench: Diagnosing Component-Level Failures in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-18307/) — 2026-08-18
  ComponentBench evaluates short interactions with canonical web UI components using verified tasks and matched human reference trajectories. Its diagnostic pipeline compares observation/action representations and analyzes structural difficulty, failure patterns and interaction efficiency.
- [SynWeaver: Website-Prior Task and Trajectory Co-Synthesis for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-12429/) — 2026-08-12
  SynWeaver explores a website to build a map of page states and executable interactions, then learns website priors for task proposals. Joint task/trajectory synthesis revises inconsistent pairs and verifies or repairs the resulting supervision.
- [Benchmarking LLM Judges for Mobile Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2608-11434/) — 2026-08-11
  MobileJudgeBench compares completion judges against human labels on mobile-agent trajectories. It studies screenshot-sampling baselines, model-dependent error profiles and how judge quality relates to agent rankings and reinforcement-learning rewards.
- [RealGUINoise: An Interactive Cross-Platform Benchmark for GUI Agent Robustness under Real-World Interface Noise](https://awesomecua.github.io/resources/arxiv-2609-38184/) — 2026-08-07
  Evaluates interactive GUI agents under varied realistic interface noise, comparing task completion, safety, and behavior with clean-environment runs.
- [Routing Is Least Learnable Where It Is Most Valuable: Bounds on Representation Routing for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-06171/) — 2026-08-06
  Measures the complementarity, cost and rerun variability of six browser observation modes on WebArena and VisualWebArena. Its routing experiments distinguish an oracle cost opportunity from policies that fail to robustly outperform a fixed observation mode.
- ["Allow" to Achieve, Over-Privileged Inadvertently: The Unintended Cost of Task-Completion-Driven Pop-up Decisions in Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-04755/) — 2026-08-05
  This permission-literacy study tests whether mobile GUI agents grant only task-necessary permissions. Controlled changes to task context and requester identity expose authorization biases and the trade-off between suppressing unnecessary and legitimate grants.
- [LoginTrap: Uncovering Task-Agnostic Phishing-Style Indirect Prompt Injection Attacks against LLM-based Web Agents](https://awesomecua.github.io/resources/arxiv-2608-04741/) — 2026-08-05
  Introduces LoginTrap, a black-box indirect-injection evaluation in which attacker-controlled page context and login flows induce unauthorized authentication. It measures end-to-end private-data leakage across web-agent backbones, architectures and defenses.
- [MissClick: Execution-Aware Adversarial Attacks on Coordinate Generation in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2608-03740/) — 2026-08-04
  MissClick designs white-box attacks around the numerical effect of coordinate digits on executable GUI clicks. Separate untargeted displacement and targeted place-weighted objectives are evaluated across desktop, web and mobile grounding settings.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.github.io/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](https://awesomecua.github.io/resources/arxiv-2607-28573/) — 2026-07-30
  Examines inference-time scaling for local computer-use models by varying context, step budgets, decomposition, and parallel execution. OSWorld experiments track both task performance and changing failure modes, exposing cases where extra computation extends errors or adds coordination overhead.
- [Why Are GUI Agents Correct but Late? Decode on the Decision-Time Critical Path, Tested with Pre-Compiled Policy Trees](https://awesomecua.github.io/resources/arxiv-2607-28399/) — 2026-07-30
  Introduces Adaptive Anticipatory Policy Trees, which precompute guarded actions and deadlines during idle periods so transient GUI events can be handled without new text generation. Paired experiments examine when this prepared execution helps and when reactive control remains preferable.
- [How Benchmarks Mis-Score Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-28367/) — 2026-07-30
  Audits failure-scored computer-use trajectories to distinguish agent errors from broken tasks and evaluator false negatives. It organizes reliability issues across task construction, trajectory evidence, scoring, and reporting, then derives corresponding evaluation design practices.
- [Falsifiable Commitment Planning for Self-Correcting Web Agents](https://awesomecua.github.io/resources/arxiv-2607-24167/) — 2026-07-27
  Introduces FCPAgent, which attaches confirming and falsifying evidence to each skill-grounded plan step. A plan–test–repair loop checks actions and observations, then localizes contradictions so execution, skills, or plans can be revised at the appropriate level.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://awesomecua.github.io/resources/arxiv-2607-21557/) — 2026-07-23
  OpenForgeRL connects stateful agent harnesses to reinforcement-learning infrastructure through a model-call recording proxy and isolated rollout containers. Its validation includes browser and computer-use agents, alongside tool-oriented agents, and examines how harness choice affects learned reliability.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.github.io/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [A Learning-Rate-Gated Failure of GRPO in a Small Language and Vision-Language Model Web Agent: A Controlled Null and Its Mechanism](https://awesomecua.github.io/resources/arxiv-2607-12640/) — 2026-07-14
  Studies a controlled setting where GRPO fails to improve a strong small web agent and can reduce text-track performance. Matched reachable-reward tasks and component grafting distinguish limited optimization headroom from learning-rate-dependent failure mechanisms.
- [StructAgent: Harness Long-horizon Digital Agents with Unified Causal Structure](https://awesomecua.github.io/resources/arxiv-2607-11388/) — 2026-07-13
  StructAgent maintains compact task state and regulates long-horizon execution through verified transitions and progress checkpoints. Its workflow supports evidence-based completion and targeted recovery, with desktop computer-use evaluation and a separate Minecraft extension.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.github.io/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [Agent Data Injection Attacks are Realistic Threats to AI Agents](https://awesomecua.github.io/resources/arxiv-2607-05120/) — 2026-07-06
  This study examines agent data injection, where untrusted content impersonates trusted metadata or tool-context data. It reports arbitrary-click vulnerabilities in web agents alongside separate coding-agent attacks, highlighting trust-boundary failures beyond instruction injection.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.github.io/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [Xiaomi-GUI-0 Technical Report](https://awesomecua.github.io/resources/arxiv-2606-31410/) — 2026-06-30
  Describes a mobile GUI agent trained through real-device interaction, corrected failure trajectories, supervised learning, and reinforcement learning.
- [Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-31270/) — 2026-06-30
  Uses failed computer-use trajectories to diagnose failure modes and generate inference-time agent code patches, with light human verification. An OSWorld study evaluates this failure-driven improvement loop without additional model training.
- [Uncertainty Quantification for Computer-Use Agents: A Benchmark across Vision-Language Models and GUI Grounding Datasets](https://awesomecua.github.io/resources/arxiv-2606-25760/) — 2026-06-24
  Argus benchmarks post-hoc uncertainty methods for single-step GUI grounding across open-weight and closed-source observation regimes. It tests calibration, rejection, error severity and conformal click regions, finding that uncertainty rankings transfer less reliably across model/interface regimes than across datasets for one model.
- [Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation](https://awesomecua.github.io/resources/arxiv-2606-24515/) — 2026-06-23
  The framework uses a vision-language judge’s final-screen assessment as a terminal reward for GUI reinforcement learning. It models evaluator noise and corrects the reward estimator used by PPO across desktop benchmarks.
- [GUI vs. CLI: Execution Bottlenecks in Screen-Only and Skill-Mediated Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-24551/) — 2026-06-22
  This benchmark matches desktop goals, initial states and final-state verifiers across screen-only GUI and skill-mediated CLI agents. Its experiments separate graphical execution failures from missing CLI skill coverage, including a verifier-guided skill-augmentation condition.
- [ENVS: Environment-Native Verified Search for Long-Horizon GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-22948/) — 2026-06-22
  ENVS branches over GUI actions in live desktop VMs, verifies successful leaves, and converts them into balanced step-level training supervision. It also introduces OSWorld-Noisy to test recovery from dynamic interruptions while retaining the underlying tasks.
- [Skill-Guided Continuation Distillation for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-18890/) — 2026-06-17
  Skill-Guided Continuation Distillation first lets a policy reach its own off-trajectory states, then uses skill guidance to collect successful continuations. Mixing those continuations with expert traces supplies supervision for recovery states absent from demonstrations.
- [MIRAGE: Stealthy Visual Prompt Injection for Vulnerability Detection in Web Agents](https://awesomecua.github.io/resources/arxiv-2606-20717/) — 2026-06-16
  MIRAGE evaluates targeted next-action hijacking from adversarial images restricted to legitimate third-party webpage regions. It combines diffusion-based image generation with execution-aware optimization and tests the constrained visual-injection setting on web-agent frameworks.
- [FraudSMSWalker: Benchmarking Agentic Large Language Models for SMS-to-Webpage Fraud Detection](https://awesomecua.github.io/resources/arxiv-2606-16659/) — 2026-06-15
  FraudSMSWalker tests browser agents on bilingual SMS-to-webpage fraud judgments while hiding URL and reputation shortcuts. Its controlled chains include difficult benign login/payment cases and evaluate whether classifications remain supported by the visible message and page evidence.
- [Are Online Skill and Memory Modules Always Worth Their Tokens? A Budget-Constrained Study of Web Agents](https://awesomecua.github.io/resources/arxiv-2606-15017/) — 2026-06-12
  Compares online skill and memory augmentations with a vanilla web agent given the same total inference-token budget. Across WebArena and WorkArena settings, it studies when module overhead removes aggregate gains and how rerun variability changes conclusions.
- [VISTA: View-Consistent Self-Verified Training for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2606-14579/) — 2026-06-12
  VISTA forms GRPO comparison groups from target-preserving crops of the same GUI instance with exactly remapped target boxes. A conditional, advantage-weighted cross-view anchor supplies additional supervision without entering the group baseline, and evaluation includes view-consistency robustness.
- [Naive Visual Memory is Not Enough: A Failure-Mode Study of GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-14106/) — 2026-06-12
  This study finds that full-image visual memory can reduce some state errors while worsening action-level failures. Its AGMem alternative stores local crops associated with successful actions or recovery and evaluates their use in desktop GUI tasks.
- [Speculative Rollback Correction for Quality-Diverse Web Agent Imitation](https://awesomecua.github.io/resources/arxiv-2606-12485/) — 2026-06-10
  Speculative Rollback Correction lets a student web agent execute short branches before teacher review localizes harmful deviations. Verified continuations and localized corrections feed supervised training while an archive retains diverse successful solutions.
- [Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields](https://awesomecua.github.io/resources/arxiv-2606-11042/) — 2026-06-09
  Workflow-GYM evaluates long GUI workflows in professional software rather than isolated interface actions. Its analysis examines failures such as omitted stages, accumulated errors and goal drift during specialized end-to-end work.
- [GUI-AC: Enhancing Continual Learning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-10522/) — 2026-06-09
  GUI-AC uses grounding certainty to adjust advantage weighting and policy-clipping bounds during continual reinforcement fine-tuning. Its mechanisms aim to suppress noisy confidence updates while retaining exploration under shifting GUI domains and resolutions.
- [MacArena: Benchmarking Computer Use Agents on an Online macOS Environment](https://awesomecua.github.io/resources/arxiv-2606-06560/) — 2026-06-04
  MacArena runs computer-use tasks through Apple’s virtualization framework on Apple Silicon, combining task ports with macOS-native workloads. It distinguishes the ported and native subsets when examining agent performance and cross-platform transfer.
- [Domain-Conditioned Safety in Frontier Computer-Using Agents: A 793-Episode Browser Benchmark, a Coding-Domain Cross-Reference, and a Reproducibility Audit of Recent Red-Teaming](https://awesomecua.github.io/resources/arxiv-2606-05233/) — 2026-06-03
  Introduces CUA-HandCrafted, a browser-agent red-teaming benchmark that varies attack templates, tasks and system prompts. Its domain comparison and reproducibility audit caution against transferring browser-surface safety conclusions to coding agents or unreleased optimized injections.
- [GUI-SAGE: Enhancing GUI Automation with Self-Explanatory Learning](https://awesomecua.github.io/resources/url-beb8f1fd6b945ffc9d93/) — 2026-06
  GUI-SAGE generates reasoning conditioned on known actions and weights policy updates using confidence and reward signals. Its experiments use AndroidControl and GUIOdyssey data and separately evaluate interactive AndroidWorld tasks.
- [MIRAGE: Context-Aware Prompt Injection against Mobile GUI Agents via User-Generated Content](https://awesomecua.github.io/resources/arxiv-2605-28116/) — 2026-05-27
  MIRAGE constructs mobile screenshot injections in ordinary user-content regions through localization, contextual payload generation and realism curation. Its evaluation separates visual realism from attack effectiveness against pixel-observing GUI agents.
- [AndroidDaily: A Verifiable Benchmark for Mobile GUI Agents on Real-World Closed-Source Applications](https://awesomecua.github.io/resources/arxiv-2605-27761/) — 2026-05-26
  AndroidDaily evaluates mobile GUI agents on daily workflows in closed-source Android apps. Its GRADE evaluator follows visual trajectories against operational obligations, output-quality requirements and negative constraints, producing process-level diagnostics without hidden app state.
- [MobileExplorer: Accelerating On-Device Inference for Mobile GUI Agents via Online Exploration](https://awesomecua.github.io/resources/arxiv-2605-26546/) — 2026-05-26
  MobileExplorer probes relevant UI elements while an on-device model is reasoning, then supplies the exploration trace as compact context. A two-level rollback mechanism restores the working state when simple backtracking fails.
- [Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World](https://awesomecua.github.io/resources/arxiv-2605-26086/) — 2026-05-25
  Claw-Anything benchmarks persistent personal assistance across activity histories, backend services and integrated GUI/CLI interaction. Its simulated event histories introduce irrelevant or conflicting context, and a separate generation pipeline supplies training environments.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.github.io/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [WinDeskGround: A Benchmark for Robust GUI Grounding in Complex Multi-Window Desktop Environments](https://awesomecua.github.io/resources/arxiv-2605-16402/) — 2026-05-13
  WinDeskGround synthesizes multi-window desktop layouts with controlled occlusion, density and semantic similarity to test GUI grounding robustness. Its instruction-target benchmark measures how localization changes when interfaces depart from simple single-layer scenes.
- [Don't Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2605-09497/) — 2026-05-10
  DUDE combines asymmetric hybrid-reward learning with summaries of deceptive-interface failures to guide safer web actions. Its RUC benchmark evaluates deception susceptibility alongside ordinary task performance across interface scenarios.
- [Faithful Mobile GUI Agents with Guided Advantage Estimator](https://awesomecua.github.io/resources/arxiv-2605-01208/) — 2026-05-02
  Introduces Faithful-Agent, which first teaches abstention under perturbed evidence and then refines GUI policies with an anchor-based, variance-adaptive advantage estimator. A thought-action consistency reward encourages decisions grounded in displayed evidence and instructions.
- [Step-level Optimization for Efficient Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2604-27151/) — 2026-04-29
  Proposes a step-level model cascade that runs a smaller computer-use policy until learned monitors flag stalled progress or semantic drift. Separate history-based stuck detection and milestone checks determine when to escalate for recovery or verification without retraining the larger model.
- [VLAA-GUI: Knowing When to Stop, Recover, and Search, A Modular Framework for GUI Automation](https://awesomecua.github.io/resources/arxiv-2604-21375/) — 2026-04-23
  VLAA-GUI combines mandatory checks for visually supported completion, multi-tier loop recovery and on-demand workflow search. Optional coding and grounding agents support execution, with component ablations on Linux and Windows GUI tasks.
- [Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks on Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-18860/) — 2026-04-20
  This study examines UI changes between a desktop agent’s screenshot observation and action dispatch. Its pre-execution state checks address overlay and focus manipulation, while the reported DOM-injection blind spot limits the defense’s coverage.
- [On the Reliability of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2604-17849/) — 2026-04-20
  This study examines repeated OSWorld executions to separate execution stochasticity, task-specification ambiguity and behavioral variation. Paired task-level tests show why one successful run is insufficient evidence of reliable computer use.
- [WebUncertainty: Dual-Level Uncertainty Driven Planning and Reasoning For Autonomous Web Agent](https://awesomecua.github.io/resources/arxiv-2604-17821/) — 2026-04-20
  WebUncertainty adapts planning mode to task uncertainty and guides action-level tree search with confidence-derived uncertainty estimates. Its evaluations examine autonomous execution of dynamic, long-horizon web tasks on WebArena and WebVoyager.
- [Do LLMs Need to See Everything? A Benchmark and Study of Failures in LLM-driven Smartphone Automation using Screentext vs. Screenshots](https://awesomecua.github.io/resources/arxiv-2604-17817/) — 2026-04-20
  DailyDroid compares text-only and text-plus-screenshot agents on everyday Android tasks across multiple apps and difficulty levels. Its failure analysis examines accessibility, observation modality and agent/application behavior.
- [HalluClear: Diagnosing, Evaluating and Mitigating Hallucinations in GUI Agents](https://awesomecua.github.io/resources/arxiv-2604-17284/) — 2026-04-19
  Introduces HalluClear with a GUI hallucination taxonomy, expert-calibrated evaluation workflow and structured-reasoning post-training scheme. It evaluates how these components affect hallucinations, grounding and action fidelity across GUI agents.
- [FedGUI: Benchmarking Federated GUI Agents across Heterogeneous Platforms, Devices, and Operating Systems](https://awesomecua.github.io/resources/arxiv-2604-14956/) — 2026-04-16
  Introduces FedGUI, a federated GUI-learning benchmark built from six datasets spanning mobile, web and desktop interfaces. Its experiments separate platform, device, operating-system and data-source heterogeneity when evaluating collaborative training.
- [GUI-Perturbed: Domain Randomization Reveals Systematic Brittleness in GUI Grounding Models](https://awesomecua.github.io/resources/arxiv-2604-14262/) — 2026-04-15
  Introduces GUI-Perturbed, which varies screenshot appearance and instruction wording independently to diagnose grounding failures. Experiments on three related model architectures examine relational instructions, browser zoom and augmentation-based fine-tuning.
- [PrecisionCUA: Iterative Visual Refinement for Pixel-Precise Cursor Grounding in Code Editors](https://awesomecua.github.io/resources/arxiv-2604-13019/) — 2026-04-14
  Studies iterative cursor grounding in dense code-editor interfaces, using visual feedback from earlier attempts to correct displacement. PrecisionCUA evaluates this closed-loop process across multiple model families on coding-interface tasks.
- [Are GUI Agents Focused Enough? Automated Distraction via Semantic-level UI Element Injection](https://awesomecua.github.io/resources/arxiv-2604-07831/) — 2026-04-09
  This study tests black-box GUI-grounding failures caused by strategically added, innocuous-looking UI elements. Its iterative overlay search is compared with random injection and repeated independent grounding trials to distinguish persistent misdirection from incidental clutter.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.github.io/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [GPA: Learning GUI Process Automation from Demonstrations](https://awesomecua.github.io/resources/arxiv-2604-01676/) — 2026-04-02
  Presents demonstration-based GUI process replay with Sequential Monte Carlo localization and readiness checks. GPA executes the learned workflow locally and can serve as the GUI execution component of an agent using MCP or CLI tools.
- [AgentRAE: Remote Action Execution through Notification-based Visual Backdoors against Screenshots-based Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-23007/) — 2026-03-24
  AgentRAE studies notification-based visual backdoors that redirect mobile GUI-agent actions. Its training separates sensitivity to icon differences from trigger/action association, with evaluations of clean behavior and targeted redirection.
- [ContractSkill: Repairable Contract-Based Skills for Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2603-20340/) — 2026-03-20
  Turns draft web-agent skills into structured executable artifacts that support deterministic checks, fault localization and local repair. VisualWebArena and MiniWoB experiments examine execution and reuse within the same benchmark family.
- [How Vulnerable Are AI Agents to Indirect Prompt Injections? Insights from a Large-Scale Public Competition](https://awesomecua.github.io/resources/arxiv-2603-15714/) — 2026-03-16
  This public red-teaming study evaluates indirect prompt injection that both changes agent behavior and hides the compromise from the final response. Its scenarios include computer use alongside tool calling and coding, with analyses of transfer and model-dependent vulnerability.
- [Visual Confused Deputy: Exploiting and Defending Perception Failures in Computer-Using Agents](https://awesomecua.github.io/resources/arxiv-2603-14707/) — 2026-03-16
  Formalizes a visual confused-deputy failure in which a computer agent acts on a misperceived UI object. A separate guardrail checks both the visual target and the agent's action reasoning against deployment-specific knowledge before permitting execution.
- [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-12138/) — 2026-03-12
  Introduces HATS, which directs GUI trajectory exploration toward semantically ambiguous actions and iteratively checks instruction-execution alignment. Feedback from trajectory refinement updates the exploration signal used to collect subsequent training examples.
- [CUAAudit: Meta-Evaluation of Vision-Language Models as Auditors of Autonomous Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-10577/) — 2026-03-11
  CUAAudit examines vision-language models that judge computer-use task completion from an instruction and final environment state. Across macOS, Windows and Linux benchmarks, it measures accuracy, confidence calibration and disagreement between auditors.
- [Generalization in Online Reinforcement Learning for Mobile Agents](https://awesomecua.github.io/resources/arxiv-2603-07432/) — 2026-03-08
  Introduces AndroidWorld-Generalization with separate tests for unseen task instances, templates, and applications. A GRPO training system combines containerized environments with asynchronous trajectory collection to study these generalization regimes.
- [TimeWarp: Evaluating Web Agents by Revisiting the Past](https://awesomecua.github.io/resources/arxiv-2603-04949/) — 2026-03-05
  TimeWarp tests web agents across multiple versions of the same sites, varying visual design, frontend code and workflows. TimeTraj transfers plans across versions to collect training trajectories and study robustness to interface change.
- [CGL: Advancing Continual GUI Learning via Reinforcement Fine-Tuning](https://awesomecua.github.io/resources/arxiv-2603-02951/) — 2026-03-03
  Combines supervised and reinforcement fine-tuning for continual GUI learning, using policy entropy to adjust their proportions and gradient projection to limit conflicting updates. AndroidControl-CL groups applications into sequential tasks to evaluate adaptation and retention.
- [Autonomous Continual Learning for Environment Adaptation of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-10356/) — 2026-02-10
  ACuRL uses autonomous interface exploration and an adaptive task curriculum to continually train computer-use policies with reinforcement learning. CUAJudge supplies outcome feedback, and experiments study adaptation across desktop applications and environment changes.
- [When Actions Go Off-Task: Detecting and Correcting Misaligned Actions in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-08995/) — 2026-02-09
  MisActBench provides action-level labels for task alignment, while DeAction checks proposed computer-use actions and requests revisions through structured feedback. The paper separately evaluates offline detection and interactive operation in OSWorld and RedTeamCUA.
- [SafeGround: Know When to Trust GUI Grounding Models via Uncertainty Calibration](https://awesomecua.github.io/resources/arxiv-2602-02419/) — 2026-02-02
  Introduces SafeGround, which estimates GUI-grounding uncertainty from the spatial dispersion of sampled predictions and calibrates a decision threshold before testing. It studies risk-aware selection on ScreenSpot-Pro, with statistical control scoped to the threshold’s false-discovery rate.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [Continual GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-20732/) — 2026-01-28
  Continual GUI Agents defines grounding under changing application domains and screen resolutions. Its GUI-AiF training framework uses separate point- and region-alignment rewards to adapt grounding as these distributions shift.
- [MobileBench-OL: A Comprehensive Chinese Benchmark for Evaluating Mobile GUI Agents in Real-World Environment](https://awesomecua.github.io/resources/arxiv-2601-20335/) — 2026-01-28
  Introduces MobileBench-OL, an online benchmark of Chinese-app tasks spanning execution, reasoning, exploration, and noisy conditions. Its automatic evaluation and reset framework supports repeated testing of mobile GUI agents in real environments.
- [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-19199/) — 2026-01-27
  MAGNET maintains separate memories for stable interface functions and task procedures across changing layouts and workflows. It updates frequently used knowledge and evaluates adaptation in AndroidWorld and offline distribution-shift settings.
- [MagicGUI-RMS: A Multi-Agent Reward Model System for Self-Evolving GUI Agents via Automated Feedback Reflux](https://awesomecua.github.io/resources/arxiv-2601-13060/) — 2026-01-19
  MagicGUI-RMS combines domain-specific and general reward models to assess GUI actions and propose corrections. A structured data pipeline and feedback-recycling process support repeated reward-model and agent improvement.
- [MirrorGuard: Toward Secure Computer-Use Agents via Simulation-to-Real Reasoning Correction](https://awesomecua.github.io/resources/arxiv-2601-12822/) — 2026-01-19
  MirrorGuard trains a reasoning-correction defense using GUI risk trajectories generated in a text-based neural-symbolic simulator. It evaluates whether corrections transfer to computer-use agents operating real interfaces, keeping simulated training separate from deployment tests.
- [CaMeLs Can Use Computers Too: System-level Security for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2601-09923/) — 2026-01-14
  NOVA separates trusted task planning from screen-derived observations by producing a branching plan before execution and resolving runtime values through perception. Its OSWorld study examines security and utility while identifying remaining risks from perception-driven branch steering.
- [AndroidLens: Long-latency Evaluation with Nested Sub-targets for Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-21302/) — 2025-12-24
  AndroidLens provides 571 extended mobile tasks in Chinese and English, with multiple valid paths and preserved environmental anomalies. Its dynamic evaluation uses nested milestones and Average Task Progress to measure partial completion of long workflows.
- [VenusBench-GD: A Comprehensive Multi-Platform GUI Benchmark for Diverse Grounding Tasks](https://awesomecua.github.io/resources/arxiv-2512-16501/) — 2025-12-18
  VenusBench-GD is a bilingual, cross-platform GUI grounding benchmark organized into basic and advanced tasks. Its annotation pipeline and six-subtask taxonomy support comparisons of general multimodal models and GUI-specialized models across different grounding demands.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.github.io/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [MVP: Multiple View Prediction Improves GUI Grounding](https://awesomecua.github.io/resources/arxiv-2512-08529/) — 2025-12-09
  MVP addresses unstable GUI coordinates by predicting across several attention-guided cropped views. It clusters the resulting coordinates and selects the densest cluster centroid, evaluating this training-free inference method across grounding models.
- [Chain-of-Ground: Improving GUI Grounding via Iterative Reasoning and Reference Feedback](https://awesomecua.github.io/resources/arxiv-2512-01979/) — 2025-12-01
  Chain-of-Ground uses iterative visual reasoning and reference feedback to refine GUI localization without additional training. It evaluates on ScreenSpot-Pro and introduces TPanel-UI to probe grounding on industrial control panels with visual distortions.
- [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-00756/) — 2025-11-30
  MPR-GUI evaluates GUI perception and reasoning through strictly aligned tasks in six languages. GUI-XLI adjusts non-English hidden representations toward English representations at language-sensitive layers during inference to address the measured cross-language gaps.
- [OpenApps: Simulating Environment Variations to Measure UI-Agent Reliability](https://awesomecua.github.io/resources/arxiv-2511-20766/) — 2025-11-25
  Introduces OpenApps, a configurable app ecosystem for measuring UI-agent reliability under changes in appearance and content. Its evaluation compares task success and failure behavior across many versions of the same apps.
- [UI-CUBE: Enterprise-Grade Computer Use Agent Benchmarking Beyond Task Accuracy to Operational Reliability](https://awesomecua.github.io/resources/arxiv-2511-17131/) — 2025-11-21
  UI-CUBE evaluates 226 tasks ranging from individual controls to copy-paste and enterprise workflows. Interface variations, multiple resolutions, and application-state validation support diagnosis of operational reliability beyond task accuracy alone.
- [D-GARA: A Dynamic Benchmarking Framework for GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2511-16590/) — 2025-11-20
  D-GARA evaluates Android GUI agents under runtime anomalies such as permission dialogs, battery warnings, and update prompts. Its modular environment embeds these interruptions in Android applications to study recovery and robustness.
- [Enhancing Trustworthy GUI Grounding via Self-Critiqued Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2510-27266/) — 2025-10-31
  HyperClick trains GUI grounders to produce a click and an accompanying confidence estimate using rewards for correctness and confidence alignment. Its evaluation examines localization, calibration, and abstention behavior.
- [Surfer 2: The Next Generation of Cross-Platform Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2510-19949/) — 2025-10-22
  Surfer2 combines hierarchical context management with separate planning and execution, self-verification, and recovery for visual computer use. It evaluates the framework across web, desktop, and Android tasks without task-specific fine-tuning.
- [SecureWebArena: A Holistic Security Evaluation Benchmark for LVLM-based Web Agents](https://awesomecua.github.io/resources/arxiv-2510-10073/) — 2025-10-11
  Introduces SecureWebArena with simulated interactive websites, an attack-vector taxonomy and labeled agent trajectories. Its evaluation separates failures in reasoning, behavioral traces and task outcomes across vision-language agent families.
- [Improving GUI Grounding with Explicit Position-to-Coordinate Mapping](https://awesomecua.github.io/resources/arxiv-2510-03230/) — 2025-10-03
  This work addresses GUI localization errors caused by mismatches between visual patch positions and output pixel coordinates. RULER tokens provide explicit coordinate references, while Interleaved MRoPE balances width and height encoding; evaluation uses the ScreenSpot benchmark family.
- [Just Do It!? Computer-Use Agents Exhibit Blind Goal-Directedness](https://awesomecua.github.io/resources/arxiv-2510-01670/) — 2025-10-02
  BLIND-ACT tests whether computer-use agents persist with ambiguous, contradictory, or infeasible goals without adequate contextual reasoning. Its OSWorld-based tasks and judged trajectories examine these behaviors and the effect of mitigation prompts.
- [WAInjectBench: Benchmarking Prompt Injection Detections for Web Agents](https://awesomecua.github.io/resources/arxiv-2510-01354/) — 2025-10-01
  Introduces WAInjectBench with a threat-model taxonomy and malicious and benign text-image datasets for web-agent prompt-injection detection. It compares detector families across explicit and less visible forms of injected content.
- [WAREX: Web Agent Reliability Evaluation on Existing Benchmarks](https://awesomecua.github.io/resources/arxiv-2510-03285/) — 2025-09-28
  WAREX augments existing web-agent benchmarks with reliability challenges arising from unstable systems and changing or disruptive website behavior. Evaluation on WebArena, WebVoyager and REAL examines how these disturbances affect task completion.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.github.io/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [Robust, Observable, and Evolvable Agentic Systems Engineering: A Principled Framework Validated via the Fairy GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-20729/) — 2025-09-25
  Presents an agent-engineering framework combining runtime goal clarification, an observable component architecture and evolving execution memory. The Fairy mobile GUI agent evaluates these mechanisms on ambiguous tasks and through controlled and user studies.
- [Environmental Injection Attacks against GUI Agents in Realistic Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2509-11250/) — 2025-09-14
  Introduces Chameleon, an environmental-injection evaluation framework that varies webpage content and trigger context. It combines simulated page variation with attention-based optimization and tests GUI agents across realistic websites.
- [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](https://awesomecua.github.io/resources/arxiv-2508-02046/) — 2025-08-04
  NaviMaster trains a shared policy for GUI and embodied navigation using a common visual-trajectory formulation. It combines trajectory collection, reinforcement learning and distance-aware rewards, with evaluation across both task families.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.github.io/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [Understanding GUI Agent Localization Biases through Logit Sharpness](https://awesomecua.github.io/resources/arxiv-2506-15425/) — 2025-06-18
  Introduces a finer-grained taxonomy of GUI localization errors and a logit-based Peak Sharpness Score for analyzing coordinate-prediction uncertainty. A context-aware cropping method refines the visual input without retraining the grounding model.
- [GUI-Robust: A Comprehensive Dataset for Testing GUI Agent Robustness in Real-World Anomalies](https://awesomecua.github.io/resources/arxiv-2506-14477/) — 2025-06-17
  Builds GUI task data with real-world interaction anomalies and evaluates how agent behavior changes under those conditions.
- [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.github.io/resources/arxiv-2506-08012/) — 2025-06-09
  GUI-Reflection synthesizes reflection and error-correction examples from successful trajectories and adds dedicated learning stages for these behaviors. It introduces a reflection task suite, a mobile environment for online data collection, and iterative reflection tuning.
- [GUIPilot: A Consistency-based Mobile GUI Testing Approach for Detecting Application-specific Bugs](https://awesomecua.github.io/resources/arxiv-2506-07385/) — 2025-06-09
  Introduces GUIPilot, which compares mobile design mock-ups with implemented screens through widget alignment and tests expected transitions by executing inferred UI actions. It evaluates both visual inconsistencies and workflow-specific bugs.
- [Look Before You Leap: A GUI-Critic-R1 Model for Pre-Operative Error Diagnosis in GUI Automation](https://awesomecua.github.io/resources/arxiv-2506-04614/) — 2025-06-05
  Uses a pre-execution critic and reinforcement training to evaluate proposed GUI actions and provide corrective suggestions before execution.
- [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2505-21964/) — 2025-05-28
  Introduces UI-Evol, which extracts action sequences from agent interactions and critiques external guidance against those traces. Evaluation on OSWorld examines how revised operational knowledge affects execution and behavioral consistency.
- [BacktrackAgent: Enhancing GUI Agent with Error Detection and Backtracking Mechanism](https://awesomecua.github.io/resources/arxiv-2505-20660/) — 2025-05-27
  BacktrackAgent adds verification, judgment, and reflection modules to detect erroneous GUI actions and guide recovery. It develops backtracking-oriented training data that includes post-action pages and evaluates task completion and step accuracy on Mobile3M and Auto-UI.
- [GEM: Gaussian Embedding Modeling for Out-of-Distribution Detection in GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-12842/) — 2025-05-19
  GEM detects instructions outside a GUI agent’s capabilities by modeling distances in its input-embedding space with a Gaussian mixture. Experiments across mobile, computer and browser data also examine selective escalation to a cloud model when an input is detected as unfamiliar.
- [Mobile-Bench-v2: A More Realistic and Comprehensive Benchmark for VLM-based Mobile Agents](https://awesomecua.github.io/resources/arxiv-2505-11891/) — 2025-05-17
  Mobile-Bench-v2 evaluates mobile GUI agents using multiple acceptable offline action paths, noisy interfaces with ads or pop-ups, and ambiguous instructions with scripted clarification exchanges. These splits separate step-level execution, robustness, and proactive interaction.
- [WebRollback: Enhancing Web Agents with Explicit Rollback Mechanisms](https://awesomecua.github.io/resources/arxiv-2504-11788/) — 2025-04-16
  WebRollback gives a web agent an explicit action for returning to an earlier state in its navigation trajectory. It studies this recovery mechanism on two live web-navigation benchmarks under both zero-shot and fine-tuned settings.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.github.io/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks](https://awesomecua.github.io/resources/arxiv-2502-13053/) — 2025-02-18
  Examines active environmental injection against mobile agents, testing whether adversarial interface content redirects decisions during task execution.
- [WorldGUI: An Interactive Benchmark for Desktop GUI Automation from Any Starting Point](https://awesomecua.github.io/resources/arxiv-2502-08047/) — 2025-02-12
  Introduces desktop and web tasks with varied initial states to test planning recovery and adaptability beyond canonical starting configurations.
- [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://awesomecua.github.io/resources/arxiv-2501-11425/) — 2025-01-20
  Builds self-critique training examples from searched recovery paths to improve agents' ability to detect and correct errors during interaction.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.github.io/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [Multimodal Auto Validation For Self-Refinement in Web Agents](https://awesomecua.github.io/resources/arxiv-2410-00689/) — 2024-10-01
  Studies text and visual validation for web agents and uses the resulting validator to detect failures and guide workflow self-refinement.
- [Dynamic Planning for LLM-based Graphical User Interface Automation](https://awesomecua.github.io/resources/arxiv-2410-00467/) — 2024-10-01
  Dynamic Planning of Thoughts revises a mobile GUI plan using current environmental feedback and execution history. The study compares this planning strategy with long-dialogue prompting and examines its behavior on unfamiliar tasks and different language-model backbones.
- [Caution for the Environment: Multimodal LLM Agents are Susceptible to Environmental Distractions](https://awesomecua.github.io/resources/arxiv-2408-02544/) — 2024-08-05
  Measures how irrelevant GUI content affects multimodal agents using a simulated dataset and three perception patterns. The study also examines adversarial environment injection and possible ways to improve instruction faithfulness.
- [Dissecting Adversarial Robustness of Multimodal LM Agents](https://awesomecua.github.io/resources/arxiv-2406-12814/) — 2024-06-18
  Introduces adversarial tasks on VisualWebArena and an evaluation framework that tracks how manipulated information passes between agent components. The analysis examines vulnerabilities introduced by reflection and tree-search evaluators as well as direct action generation.
- [Benchmarking Mobile Device Control Agents across Diverse Configurations](https://awesomecua.github.io/resources/arxiv-2404-16660/) — 2024-04-25
  Introduces B-MoCA, an interactive mobile-control benchmark that varies device settings, layouts, and languages to test generalization.
- [WILBUR: Adaptive In-Context Learning for Robust and Accurate Web Agents](https://awesomecua.github.io/resources/arxiv-2404-05902/) — 2024-04-08
  WILBUR learns to rank prior task demonstrations for a web agent’s prompt and synthesizes instructions from past runs. A generated task curriculum and a backtracking mechanism support adaptation and recovery, evaluated on WebVoyager.
- [PPTC-R benchmark: Towards Evaluating the Robustness of Large Language Models for PowerPoint Task Completion](https://awesomecua.github.io/resources/arxiv-2403-03788/) — 2024-03-06
  Benchmarks robustness of API-based PowerPoint completion under sentence-level, semantic, and multilingual instruction perturbations and changes to the available API set.
- [Exposing Limitations of Language Model Agents in Sequential-Task Compositions on the Web](https://awesomecua.github.io/resources/arxiv-2311-18751/) — 2023-11-30
  CompWoB adds 50 composed web-automation tasks to study generalization from simpler interactions. The paper compares prompted and fine-tuned agents, balances task training data, and probes sensitivity to changes in instruction order.
- [LASER: LLM Agent with State-Space Exploration for Web Navigation](https://awesomecua.github.io/resources/arxiv-2309-08172/) — 2023-09-15
  LASER represents web navigation as exploration over a defined set of states, allowing an agent to revisit earlier states after mistakes. The study evaluates this backtracking approach on WebShop and Amazon tasks.
- [Ringer: Web Automation by Demonstration](https://awesomecua.github.io/resources/url-347925d0f440d6396080/) — 2016-11
  Introduces Ringer, which converts demonstrated webpage interactions into scripts combining actions, target selectors, and waiting conditions. It evaluates replay robustness on tasks recorded from real websites.

## Benchmarks

- [Adversarial Web Agents](https://awesomecua.github.io/resources/github-chenwu98-agent-attack/) — Date not recorded
  Evaluation resources for adversarial attacks on multimodal web agents.
- [B-MoCA](https://awesomecua.github.io/resources/github-jylee425-b-moca/) — Date not recorded
  Mobile control benchmark with varied interface configurations.
- [GUI-Robust](https://awesomecua.github.io/resources/github-chessbean1-gui-robust/) — Date not recorded
  Evaluation scripts and linked data for comparing GUI action predictions and task execution under ordinary and anomalous interface conditions.
- [GUIHalluBench](https://awesomecua.github.io/resources/github-ant-research-guihallubench/) — Date not recorded
  Measures hallucination in UI-element parsing by matching the boxes and descriptions a model lists for 1,000 English and 1,000 Chinese screenshots against human annotations.
- [Mobile-Bench-v2 released data](https://awesomecua.github.io/resources/url-1d5b85321b98765141fc/) — Date not recorded
  Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.
- [OpenApps](https://awesomecua.github.io/resources/github-facebookresearch-openapps/) — Date not recorded
  Configurable browser apps and task rewards for testing computer-use agents under changes in content, layout and appearance.
- [ScreenSpot-v2 instruction variants](https://awesomecua.github.io/resources/url-17729e1c532ba7043404/) — Date not recorded
  Instruction variants over ScreenSpot-v2 screenshots that distinguish original commands, explicit actions, target descriptions and impossible operations.
- [WindowsAgentArena-V2](https://awesomecua.github.io/resources/github-gair-nlp-windowsagentarena-v2/) — Date not recorded
  Windows benchmark revision with task/evaluator fixes and VM-initialization support, documented alongside PC-Agent-E.
- [WorldGUI](https://awesomecua.github.io/resources/github-showlab-worldgui/) — Date not recorded
  611 desktop GUI tasks that agents must complete from varied starting points, shipped with instructional videos and project files, plus the self-reflective WorldGUI-Agent baseline.

## Datasets

- [RoTS](https://awesomecua.github.io/resources/github-alibabaresearch-rots/) — Date not recorded
  Announced GUI trajectory synthesis resources for recovery from policy-induced errors; the inspected repository marks code and data releases as in preparation.

## Engineering & industry

- [AdvAgent (formerly AdvWeb)](https://awesomecua.github.io/resources/github-ai-secure-advagent/) — Date not recorded
  Research code for constructing and evaluating adversarial inputs to web agents, with a black-box red-team pipeline using Mind2Web data and SeeAct.
- [GUI-HARVEST](https://awesomecua.github.io/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
