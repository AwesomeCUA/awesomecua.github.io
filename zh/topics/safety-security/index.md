# 安全与防护

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/safety-security/records.jsonl

## 论文与综述

- [Task-State Governance: A Virtual Machine for Verifiable and Recoverable GUI Agent Execution](https://awesomecua.github.io/resources/arxiv-2610-20100/) — 2026-10-14
  Presents TaskVM, an interface for specifying desired and preserved application state, checking agent actions, and exposing whether changes can be reversed or compensated.
- [Towards Safe Autonomy for Computer Use](https://awesomecua.github.io/resources/arxiv-2610-18508/) — 2026-10-13
  Presents SA-CUA, separating trusted and untrusted visual content using accessibility-derived masking rules and a controlled channel for verifying information before endorsement.
- [BrowseSafe++: Benchmarking Prompt Injection Detection Across Web Contexts, Languages, and Browser Views](https://awesomecua.github.io/resources/arxiv-2610-17457/) — 2026-10-12
  Extends BrowseSafe with paired attacked and clean webpages in several representations, and studies text and screenshot detectors plus feedback-adapted prompt injections.
- [PrivacyGuard: Source-Linked Sanitization and Locally Resolvable PII References for Cloud GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-16778/) — 2026-10-12
  Introduces PrivacyGuard, which sanitizes source-linked personal information and maintains locally resolvable references across mobile-agent turns to reduce exposure to remote planners.
- [The Agent Clicks Approve: Injected Page Text Makes Browser Agents Authorize Access the Task Never Named](https://awesomecua.github.io/resources/arxiv-2610-15138/) — 2026-10-10
  Studies prompt-injected account-access approvals in browser agents and proposes a service-side authority envelope that checks authorization requests against the user task before allowing them to complete.
- [Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11942/) — 2026-10-08
  Presents LGWM, a decoder-free GUI world model that predicts the next screen representation from an action and compares it with the observed state to verify transitions. Its paired diagnostic separates legitimate and hijacked transitions that lead to the same credential screen.
- [Secure-CUA: Controlling Untrusted Influence in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-09469/) — 2026-10-07
  Proposes Secure-CUA, which commits to per-action transactions before reading untrusted page content and separates content queries from GUI target selection. The paper formalizes its protection assumptions and evaluates benign task utility on WebArena.
- [Adversarial Images Hijack Web Agents from Visual Grounding to Browser Execution](https://awesomecua.github.io/resources/arxiv-2610-09240/) — 2026-10-07
  Introduces WebMirage, a visual red-teaming framework that models webpage element competition and action post-processing to test whether manipulated grounding decisions lead to executed browser actions.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.github.io/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [Control OSWorld: An AI Control Environment for GUI Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2610-03818/) — 2026-10-02
  Pairs OSWorld tasks with harmful side objectives to evaluate monitors that detect malicious behavior in computer-use agent trajectories.
- [Securing Computer-Use Agents Against Branch Steering Attacks](https://awesomecua.github.io/resources/arxiv-2610-03089/) — 2026-10-02
  Introduces STEER-Bench to study branch-steering attacks that manipulate untrusted web data toward hazardous paths already permitted by an agent’s plan. Its COBRA architecture combines trusted branching plans with advance constraints on the parameters and destinations each branch can use.
- [SCOUT: Synergizing Reasoning and Tool-Use for Computer-Use Safety](https://awesomecua.github.io/resources/arxiv-2609-36201/) — 2026-09-28
  Introduces SCOUT, a safety verifier that first derives task-specific completion and safety rubrics from a computer-use trajectory, then actively probes the resulting environment for evidence. It evaluates whether these two stages detect harmful consequences that screenshots alone can miss.
- [Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces](https://awesomecua.github.io/resources/arxiv-2609-34974/) — 2026-09-28
  Introduces Veer, a runtime defense that changes task-relevant web state when an otherwise valid proposed action would produce an unauthorized consequence. It plans a prospective intervention and grounds and verifies its execution before the base agent continues.
- [AgentTell: Behavioural Side-Channel Leakage in Browser-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-32915/) — 2026-09-26
  Introduces AgentTell, a benchmark for privacy leakage through browser actions after an agent learns a private fact on another website. It examines whether agents choose revealing options despite nondisclosure instructions and whether their final reports accurately describe that behavior.
- [CAVEAT: Towards Robust Computer-Use Agents in Incentive-Misaligned Environments](https://awesomecua.github.io/resources/arxiv-2609-27273/) — 2026-09-23
  Introduces CAVEAT, a controlled marketplace benchmark for testing whether delegated agents preserve user objectives when interfaces favor other outcomes. It diagnoses decision failures and studies harness interventions and targeted training to improve resistance to marketplace steering.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [WiP: Characterizing and Defending Against Mobile-Agent-Driven MFA Automation](https://awesomecua.github.io/resources/arxiv-2609-02154/) — 2026-09-02
  Studies how mobile automation can combine authentication factors within one agent environment and evaluates motion sensing as a user-presence signal.
- [SIR: Self-improving Red-teaming for Compute Use Agents](https://awesomecua.github.io/resources/arxiv-2608-30207/) — 2026-08-31
  Introduces SIR, which iteratively refines a reusable library of prompt-injection strategies from failed computer-use attack trajectories. Its evaluation uses deterministic system-state checks and counts attacks only when the adversarial objective and legitimate task both complete.
- [ActReal: System-Level Mobile Agents Challenge Mobile Automation Detection](https://awesomecua.github.io/resources/arxiv-2608-30038/) — 2026-08-30
  Introduces ActReal, which translates semantic mobile-agent actions into coordinated touch and sensor signals to study automation-detection weaknesses. It evaluates detectors that observe touch events alone or together with inertial measurements under a privileged executor threat model.
- [CURA: Certified Runtime Alarms for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-27808/) — 2026-08-28
  Introduces CURA, a telemetry-based runtime monitor that turns computer-use trajectories into sequential failure alarms and can trigger mid-task oversight. Its certificate controls false alarms, while the study separately reports detection performance and limits of retrospective monitoring.
- [Beyond Task Completion: Training Capable and Safe Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-22178/) — 2026-08-27
  Introduces SCOPE, which trains computer-use agents on ordinary task demonstrations, safe continuations around hazards, and explicit refusals. Its SCOPE-Gen pipeline pairs verifiable tasks with environmental-risk variants to support joint capability and safety training.
- [UI-Venus-2 Technical Report](https://awesomecua.github.io/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [ADeptS-Bench: Measuring the Trustworthiness of Computer Use Agents Across Devices](https://awesomecua.github.io/resources/arxiv-2608-26204/) — 2026-08-25
  Evaluates interface-embedded threats and whether computer-use agents seek clarification when mobile or desktop instructions are ambiguous.
- [WebMCP-Phalanx: Enforcing and Characterizing Trust Boundaries for Browser-Integrated LLM Agents](https://awesomecua.github.io/resources/arxiv-2608-24017/) — 2026-08-25
  Proposes WebMCP-Phalanx, a browser-integrated runtime that binds page-exposed tools to their registering principals and separates content inspection from privileged invocation. It studies lifecycle and prompt-injection attacks, including a timing bypass that motivates validating all visible metadata before tool use.
- [MobileWorldSafety: Benchmarking GUI Agent Safety Against Environmental Injection Attacks in Android Apps](https://awesomecua.github.io/resources/arxiv-2608-17659/) — 2026-08-18
  Evaluates environmental injection risks in Android tasks using programmatic risk checks and model-based adjudication of ambiguous cases.
- [RealGUINoise: An Interactive Cross-Platform Benchmark for GUI Agent Robustness under Real-World Interface Noise](https://awesomecua.github.io/resources/arxiv-2609-38184/) — 2026-08-07
  Evaluates interactive GUI agents under varied realistic interface noise, comparing task completion, safety, and behavior with clean-environment runs.
- [SeerGuard: A Safety Framework for Mobile GUI Agents via World Model Prediction](https://awesomecua.github.io/resources/arxiv-2607-15550/) — 2026-07-17
  Uses instruction screening and a safety-augmented world model to assess likely consequences of mobile GUI actions before execution.
- [GUI agent: Guided Exploration of User-Sensitive Screens](https://awesomecua.github.io/resources/arxiv-2606-25705/) — 2026-06-24
  This short paper develops an explorer agent that expands from a demonstrated GUI task to discover requests likely to reach user-sensitive screens. The proposed exploration supports identifying situations where task execution should be handed back to the user.
- [Capable but Careless: Do Computer-Use Agents Follow Contextual Integrity?](https://awesomecua.github.io/resources/arxiv-2606-23189/) — 2026-06-22
  AgentCIBench evaluates whether computer-use agents disclose information in ways that violate its original context. Deterministically scored scenarios test nearby sensitive UI content, ambiguous requests and recipient mismatches, including end-to-end agent execution.
- [OSGuard: A Benchmark for Safety in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-15034/) — 2026-06-13
  Evaluates action-level guardrails and full computer tasks with environment-dependent safety constraints, separating safe completion from nominal success.
- [Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents](https://awesomecua.github.io/resources/arxiv-2606-13385/) — 2026-06-11
  StakeBench evaluates prompt-injection harm to different stakeholders in shopping web-agent workflows. Its executable cases separate attack objectives and assess both outcomes and execution processes to reveal how the same attack pattern can affect different parties.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [Next-Gen CAPTCHAs: Leveraging the Cognitive Gap for Scalable and Diverse GUI-Agent Defense](https://awesomecua.github.io/resources/arxiv-2602-09012/) — 2026-02-09
  Next-Gen CAPTCHAs introduces generated interactive challenges intended to distinguish human users from GUI agents. The benchmark targets perception, memory, decisions and actions, with backend-supported challenge types designed for scalable instance generation.
- [When Actions Go Off-Task: Detecting and Correcting Misaligned Actions in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-08995/) — 2026-02-09
  MisActBench provides action-level labels for task alignment, while DeAction checks proposed computer-use actions and requests revisions through structured feedback. The paper separately evaluates offline detection and interactive operation in OSWorld and RedTeamCUA.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.github.io/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [WebSentinel: Detecting and Localizing Prompt Injection Attacks for Web Agents](https://awesomecua.github.io/resources/arxiv-2602-03792/) — 2026-02-03
  WebSentinel identifies suspicious webpage segments and checks each against its surrounding page context to detect and locate prompt injections. Its evaluation uses both contaminated and clean webpage datasets.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.github.io/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [GUIGuard-Bench: Toward a General Evaluation for Privacy-Preserving GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-18842/) — 2026-01-26
  Introduces GUIGuard-Bench, which annotates private regions in GUI trajectories with categories, risk levels, and relevance to the user’s task. It evaluates privacy recognition and the effect of screenshot protection on offline planning and task utility.
- [MirrorGuard: Toward Secure Computer-Use Agents via Simulation-to-Real Reasoning Correction](https://awesomecua.github.io/resources/arxiv-2601-12822/) — 2026-01-19
  MirrorGuard trains a reasoning-correction defense using GUI risk trajectories generated in a text-based neural-symbolic simulator. It evaluates whether corrections transfer to computer-use agents operating real interfaces, keeping simulated training separate from deployment tests.
- [Mind the Gap: Action Rebinding Attacks against Android GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-12349/) — 2026-01-18
  Studies action-rebinding attacks in which an Android GUI agent’s planned input is redirected to a different application during the observation–action delay. The evaluation examines cross-application execution and the consequences of treating an earlier screen as the current action target.
- [CaMeLs Can Use Computers Too: System-level Security for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2601-09923/) — 2026-01-14
  NOVA separates trusted task planning from screen-derived observations by producing a branching plan before execution and resolving runtime values through perception. Its OSWorld study examines security and utility while identifying remaining risks from perception-driven branch steering.
- [WebTrap Park: An Automated Platform for Systematic Security Evaluation of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08406/) — 2026-01-13
  Introduces WebTrap Park, a platform that turns web-agent security risks into executable tasks and assesses concrete interactions with live pages. It compares agent frameworks without requiring modifications to their implementations.
- [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://awesomecua.github.io/resources/arxiv-2510-24411/) — 2025-10-28
  Introduces MobileRisk-Live and OS-Sentinel, combining a formal verifier for system-level violations with a multimodal judge for contextual risks in mobile GUI workflows.
- [Just Do It!? Computer-Use Agents Exhibit Blind Goal-Directedness](https://awesomecua.github.io/resources/arxiv-2510-01670/) — 2025-10-02
  BLIND-ACT tests whether computer-use agents persist with ambiguous, contradictory, or infeasible goals without adequate contextual reasoning. Its OSWorld-based tasks and judged trajectories examine these behaviors and the effect of mitigation prompts.
- [InfraMind: A Novel Exploration-based GUI Agentic Framework for Mission-critical Industrial Management](https://awesomecua.github.io/resources/arxiv-2509-13704/) — 2025-09-17
  InfraMind explores industrial management GUIs using virtual-machine snapshots and builds memory for planning and hierarchical state recognition. Its framework also studies knowledge distillation and safety checks on open-source and commercial data-center management platforms.
- [PrivWeb: Unobtrusive and Content-aware Privacy Protection For Web Agents](https://awesomecua.github.io/resources/arxiv-2509-11939/) — 2025-09-15
  Introduces PrivWeb, which uses a local language model to anonymize interface information according to user preferences. Adaptive notifications and selective pauses give users control over sensitive information access during web-agent tasks.
- [Environmental Injection Attacks against GUI Agents in Realistic Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2509-11250/) — 2025-09-14
  Introduces Chameleon, an environmental-injection evaluation framework that varies webpage content and trigger context. It combines simulated page variation with attention-based optimization and tests GUI agents across realistic websites.
- [Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight](https://awesomecua.github.io/resources/arxiv-2509-10723/) — 2025-09-12
  Studies how GUI agents, people, and human-agent teams respond to manipulative interface designs. The two-phase evaluation examines failure modes and the benefits and costs of human oversight.
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2509-07764/) — 2025-09-09
  Introduces AgentSentinel, which intercepts sensitive computer-agent operations and audits them using task context together with system traces. BadComputerUse evaluates this enforcement approach across attack scenarios involving tool and computer control.
- [VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents](https://awesomecua.github.io/resources/arxiv-2509-07553/) — 2025-09-09
  Introduces VeriOS-Agent, which learns when to execute GUI actions autonomously and when to query a user under untrustworthy conditions. Its staged training combines supervised learning and group-relative policy optimization.
- [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://awesomecua.github.io/resources/arxiv-2508-15832/) — 2025-08-18
  Amazon-Bench generates functionality-specific web tasks from page content and interactive controls, covering operations beyond product search. Its evaluator checks task completion and unintended changes to account state, such as address or purchase settings.
- [MVISU-Bench: Benchmarking Mobile Agents for Real-World Tasks by Multi-App, Vague, Interactive, Single-App and Unethical Instructions](https://awesomecua.github.io/resources/arxiv-2508-09057/) — 2025-08-12
  MVISU-Bench evaluates bilingual mobile tasks involving cross-app work, vague requests, user interaction and unethical instructions alongside ordinary single-app tasks. Its Aider prompting module is designed to clarify intent and mitigate risky execution within agent workflows.
- [Magentic-UI: Towards Human-in-the-loop Agentic Systems](https://awesomecua.github.io/resources/arxiv-2507-22358/) — 2025-07-30
  Magentic-UI combines browser interaction, code execution, file operations, and MCP tools in an interface for human-agent collaboration. It studies collaborative planning and task execution, action guards, and persistent memory through benchmark tasks, simulated users, user studies, and safety assessments.
- [Manipulating LLM Web Agents with Indirect Prompt Injection Attack via HTML Accessibility Tree](https://awesomecua.github.io/resources/arxiv-2507-14799/) — 2025-07-20
  Studies indirect prompt injection through HTML content consumed as accessibility trees. The evaluation tests how manipulated page observations redirect browser-agent actions on real websites.
- [WebGuard: Building a Generalizable Guardrail for Web Agents](https://awesomecua.github.io/resources/arxiv-2507-14293/) — 2025-07-18
  Introduces WebGuard, a human-annotated dataset for predicting outcomes and risk levels of state-changing website actions. It provides generalization splits and evaluates specialized guardrail models.
- [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://awesomecua.github.io/resources/arxiv-2507-10610/) — 2025-07-13
  Introduces LaSM, a training-free defense that selectively scales attention and MLP components to improve alignment with task-relevant screen regions. It evaluates the approach against pop-up-based GUI injection attacks.
- [VisualTrap: A Stealthy Backdoor Attack on GUI Agents via Visual Grounding Manipulation](https://awesomecua.github.io/resources/arxiv-2507-06899/) — 2025-07-09
  Studies backdoors that redirect GUI visual grounding even when the task plan is correct. VisualTrap evaluates whether poisoned grounding training transfers to downstream tasks and across web, mobile, and desktop interface settings.
- [OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety](https://awesomecua.github.io/resources/arxiv-2507-06134/) — 2025-07-08
  Evaluates agent safety across real browser, code, filesystem, shell, and messaging tools using rule-based and model-based assessments.
- [A Systematization of Security Vulnerabilities in Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2507-05445/) — 2025-07-07
  Analyzes security boundaries in computer-use agents through a risk taxonomy and concrete adversarial case studies. It links observed failures to input provenance, interface-action binding, memory, and delegation, and proposes CUA-specific evaluation principles.
- [Mobile GUI Agents under Real-world Threats: Are We There Yet?](https://awesomecua.github.io/resources/arxiv-2507-04227/) — 2025-07-06
  Introduces an app-content instrumentation framework and complementary interactive and static test suites for mobile GUI agents. It studies how untrusted third-party content changes task execution and state understanding.
- [Context manipulation attacks : Web agents are susceptible to corrupted memory](https://awesomecua.github.io/resources/arxiv-2506-17318/) — 2025-06-18
  Studies context manipulation in web agents by altering stored task representations rather than webpage prompts alone. Evaluation on Browser-use and Agent-E examines memory-directed attacks and the implications for secure context handling.
- [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-14866/) — 2025-06-17
  Extends OSWorld with tasks covering user misuse, prompt injection, and model misbehavior, with assessment of both task success and safety.
- [macOSWorld: A Multilingual Interactive Benchmark for GUI Agents](https://awesomecua.github.io/resources/arxiv-2506-04135/) — 2025-06-04
  macOSWorld provides 202 interactive tasks across 30 applications, with instructions and operating-system interfaces in five languages. It evaluates GUI agents on macOS workflows and includes a separate subset for deception-attack testing.
- [VerificAgent: Domain-Specific Memory Verification for Scalable Oversight of Aligned Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-02539/) — 2025-06-03
  Introduces VerificAgent, which grows domain-specific memories from task trajectories and subjects them to human fact-checking before deployment. Its OSWorld evaluation treats persistent memory as an auditable constraint on later agent behavior.
- [VPI-Bench: Visual Prompt Injection Attacks for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-02456/) — 2025-06-03
  Introduces VPI-Bench, interactive web-platform variants containing visually embedded malicious instructions. It evaluates computer-use and browser-use agents under these threats and examines system-prompt defenses.
- [RiOSWorld: Benchmarking the Risk of Multimodal Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-00618/) — 2025-05-31
  Introduces RiOSWorld, a computer-use risk benchmark separating user-originated and environmental threats. It evaluates both risky-goal intent and goal completion across web and other computer applications.
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.github.io/resources/arxiv-2505-21936/) — 2025-05-28
  RedTeamCUA combines a virtual-machine OS environment with containerized websites for controlled prompt-injection tests spanning both interfaces. Its RTC-Bench contains 864 examples and can initialize agents at injection points to separate attack susceptibility from navigation failures.
- [AdInject: Real-World Black-Box Attacks on Web Agents via Advertising Delivery](https://awesomecua.github.io/resources/arxiv-2505-21499/) — 2025-05-27
  Studies advertising delivery as an indirect-injection channel for web agents under a black-box threat model. AdInject evaluates how static ad content shaped by website context can redirect browser actions.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks](https://awesomecua.github.io/resources/arxiv-2505-14289/) — 2025-05-20
  Introduces EVA, a red-teaming framework that evolves semantic payloads for GUI environmental-injection tests. It studies the contribution of semantic versus visual deception and distills discovered patterns into reusable evaluation rules.
- [GEM: Gaussian Embedding Modeling for Out-of-Distribution Detection in GUI Agents](https://awesomecua.github.io/resources/arxiv-2505-12842/) — 2025-05-19
  GEM detects instructions outside a GUI agent’s capabilities by modeling distances in its input-embedding space with a Gaussian mixture. Experiments across mobile, computer and browser data also examine selective escalation to a cloud model when an input is detected as unfamiliar.
- [A Survey on the Safety and Security Threats of Computer-Using Agents: JARVIS or Ultron?](https://awesomecua.github.io/resources/arxiv-2505-10924/) — 2025-05-16
  Survey of research directions in GUI or computer-use agents.
- [Characterizing Unintended Consequences in Human-GUI Agent Collaboration for Web Browsing](https://awesomecua.github.io/resources/arxiv-2505-09875/) — 2025-05-15
  Studies unintended consequences of collaborative web browsing with GUI agents through social-media analysis and interviews. It organizes observed failures, user impacts, and mitigation practices around planning, interface interaction, feedback, privacy, and trust.
- [Toward a Human-Centered Evaluation Framework for Trustworthy LLM-Powered GUI Agents](https://awesomecua.github.io/resources/arxiv-2504-17934/) — 2025-04-24
  Presents a position paper on privacy and security evaluation for GUI agents, identifying risk categories and challenges in involving human evaluators. It proposes risk-aware assessment and in-context consent as design directions.
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://awesomecua.github.io/resources/arxiv-2504-18575/) — 2025-04-22
  Introduces WASP, an end-to-end benchmark for prompt-injection security in web agents. Its evaluation separates partial attack progress from completion of the attacker’s full objective.
- [The Obvious Invisible Threat: LLM-Powered GUI Agents' Vulnerability to Fine-Print Injections](https://awesomecua.github.io/resources/arxiv-2504-11281/) — 2025-04-15
  Characterizes six forms of GUI-content injection and studies their effects on GUI agents and human users using adversarial webpages. The analysis examines privacy failures and the limits of human oversight.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.github.io/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [Towards Trustworthy GUI Agents: A Survey](https://awesomecua.github.io/resources/arxiv-2503-23434/) — 2025-03-30
  Survey of research directions in GUI or computer-use agents.
- [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://awesomecua.github.io/resources/arxiv-2503-22738/) — 2025-03-26
  Proposes a guardrail agent that reasons over explicit safety policies and checks action trajectories, with a web-agent safety benchmark.
- [VeriSafe Agent: Safeguarding Mobile GUI Agent via Logic-based Action Verification](https://awesomecua.github.io/resources/arxiv-2503-18492/) — 2025-03-24
  Translates user instructions into formal specifications and applies runtime logic-based checks to proposed mobile GUI actions.
- [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2503-09780/) — 2025-03-12
  Evaluates whether autonomous web agents minimize use of sensitive personal information when completing tasks that expose unnecessary private data.
- [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2503-04957/) — 2025-03-06
  Pairs benign and harmful web tasks to assess deliberate misuse risks and categorize agent behavior by risk level.
- [Why Are Web AI Agents More Vulnerable Than Standalone LLMs? A Security Analysis](https://awesomecua.github.io/resources/arxiv-2502-20383/) — 2025-02-27
  Analyzes web-agent vulnerabilities at the component level, examining goal placement in prompts, multistep action generation, and observations as sources of increased susceptibility.
- [OS-Kairos: Adaptive Interaction for MLLM-Powered GUI Agents](https://awesomecua.github.io/resources/arxiv-2503-16465/) — 2025-02-26
  Uses step-level confidence estimates to decide when a GUI agent should act autonomously or request human intervention in complex situations.
- [Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks](https://awesomecua.github.io/resources/arxiv-2502-13053/) — 2025-02-18
  Examines active environmental injection against mobile agents, testing whether adversarial interface content redirects decisions during task execution.
- [Towards Computer-Using Personal Agents](https://awesomecua.github.io/resources/arxiv-2503-15515/) — 2025-01-31
  Proposes computer-using personal agents connected to user-controlled data repositories, discussing privacy, interoperability, and collaborative tasks.
- [Agent-SafetyBench: Evaluating the Safety of LLM Agents](https://awesomecua.github.io/resources/arxiv-2412-14470/) — 2024-12-19
  Introduces diverse interactive environments and tool-use scenarios for evaluating agent safety risks, failure modes, and limitations of prompting defenses.
- [Attacking Vision-Language Computer Agents via Pop-ups](https://awesomecua.github.io/resources/arxiv-2411-02391/) — 2024-11-04
  Tests whether adversarial visual pop-ups divert computer agents from intended tasks in desktop and web benchmark environments.
- [Evaluating Cultural and Social Awareness of LLM Web Agents](https://awesomecua.github.io/resources/arxiv-2410-23252/) — 2024-10-30
  Introduces CASA to assess web agents' responses to cultural and social norms in shopping and forum tasks, including misleading observations.
- [MobileSafetyBench: Evaluating Safety of Autonomous Agents in Mobile Device Control](https://awesomecua.github.io/resources/arxiv-2410-17520/) — 2024-10-23
  Evaluates mobile agents on misuse, side effects, and indirect prompt-injection risks in an Android emulator environment.
- [AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://awesomecua.github.io/resources/arxiv-2410-17401/) — 2024-10-22
  Introduces a black-box web-agent red-teaming framework that learns adversarial prompts from agent feedback to study security weaknesses.
- [Refusal-Trained LLMs Are Easily Jailbroken As Browser Agents](https://awesomecua.github.io/resources/arxiv-2410-13886/) — 2024-10-11
  Introduces BrowserART and studies whether chat-model refusal behavior transfers to browser agents carrying out potentially harmful instructions.
- [From Interaction to Impact: Towards Safer AI Agents Through Understanding and Evaluating Mobile UI Operation Impacts](https://awesomecua.github.io/resources/arxiv-2410-09006/) — 2024-10-11
  Develops a taxonomy of mobile-action consequences and annotated interaction data to evaluate whether models recognize impactful or risky UI operations.
- [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://awesomecua.github.io/resources/arxiv-2410-06703/) — 2024-10-09
  Evaluates web-task completion under explicit enterprise policies, measuring policy-compliant completion and safety violations separately.
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://awesomecua.github.io/resources/arxiv-2409-11295/) — 2024-09-17
  Evaluates privacy-directed webpage instruction injection against generalist web agents using PII-related interaction steps from Mind2Web, including attempts to expose specific user information or entire requests.
- [Systematic Categorization, Construction and Evaluation of New Attacks against Multi-modal Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2407-09295/) — 2024-07-12
  Develops a threat taxonomy and evaluation framework for attacks against multimodal mobile GUI agents, with case studies and dataset experiments.
- [WIPI: A New Web Threat for LLM-Driven Web Agents](https://awesomecua.github.io/resources/arxiv-2402-16965/) — 2024-02-26
  Studies WIPI, a black-box indirect-instruction threat in which webpage content redirects LLM-driven web agents. Evaluation spans plugin-based agents, Web GPTs, and open-source web-agent implementations.

## 评测基准

- [Adversarial Web Agents](https://awesomecua.github.io/resources/github-chenwu98-agent-attack/) — Date not recorded
  Evaluation resources for adversarial attacks on multimodal web agents.
- [AgentDAM](https://awesomecua.github.io/resources/github-facebookresearch-ai-agent-privacy/) — Date not recorded
  Web-agent benchmark for measuring unnecessary use of sensitive personal information during end-to-end task execution.
- [MobileSafetyBench](https://awesomecua.github.io/resources/github-jylee425-mobilesafetybench/) — Date not recorded
  Benchmark for safety behavior of mobile device agents.
- [OS-Harm](https://awesomecua.github.io/resources/github-tml-epfl-os-harm/) — Date not recorded
  Benchmark for safety of computer-use agents across misuse, prompt injection, and unintended model behavior.
- [PopupAttack](https://awesomecua.github.io/resources/github-salt-nlp-popupattack/) — Date not recorded
  Resources for evaluating GUI agents under malicious popup instructions.
- [SafeArena](https://awesomecua.github.io/resources/github-mcgill-nlp-safearena/) — Date not recorded
  Web-agent benchmark pairing benign and harmful tasks to study deliberate misuse risks.
- [WebTailBench](https://awesomecua.github.io/resources/url-3b6dfd52f98bfe76bc7f/) — Date not recorded
  Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.

## 工程与产业

- [AdvAgent (formerly AdvWeb)](https://awesomecua.github.io/resources/github-ai-secure-advagent/) — Date not recorded
  Research code for constructing and evaluating adversarial inputs to web agents, with a black-box red-team pipeline using Mind2Web data and SeeAct.
- [Agent Browser Shield](https://awesomecua.github.io/resources/github-pixiebrix-agent-browser-shield/) — Date not recorded
  Browser extension for filtering potentially unsafe agent input.
- [OS-Kairos](https://awesomecua.github.io/resources/github-wuzheng02-os-kairos/) — Date not recorded
  Android GUI-agent research implementation that uses confidence-guided interaction to choose between autonomous actions and human assistance.
- [OS-Sentinel](https://awesomecua.github.io/resources/github-os-copilot-os-sentinel/) — Date not recorded
  Safety-oriented research for computer-use agents.
- [RedTeamCUA](https://awesomecua.github.io/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
