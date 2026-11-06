# 安全与防护

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.com/downloads/topics/safety-security/records.jsonl

## 论文与综述

- [Securing Web Agents with the Compile-Then-Execute Paradigm](https://awesomecua.com/resources/arxiv-2611-06039/) — 2026-11-04
  Baya compiles a web task into a program using a Trusted Website API before viewing live content, limiting how webpage prompt injections can alter agent control flow.
- [Voluntary Servitude: Weaponized Safety Warning Mechanisms for Controlling AI Agents](https://awesomecua.com/resources/arxiv-2611-04393/) — 2026-11-03
  Studies fabricated hazard warnings in reviews that steer agents’ choices without explicit commands, including transfer to browser agents, and tests a corroboration requirement.
- [Cross-Interface Authorization for AI Computer-Use Agents](https://awesomecua.com/resources/arxiv-2610-41397/) — 2026-10-30
  Presents a profile-bounded authorization protocol for computer-use agents working through GUIs, APIs, scripts, and other routes, with route-bound tickets and commit-time checks.
- [ANGLER: Verifier-Grounded Benchmarking with an Adaptive Attacker for Web Agents](https://awesomecua.com/resources/arxiv-2610-41272/) — 2026-10-30
  Introduces REEF, a website benchmark with state-based attack verification, and ANGLER, which adapts attack lures using outcomes from web-agent rollouts.
- [AgentShield: Fortifying Web Applications Against AI Agents and Agentic Browsers](https://awesomecua.com/resources/arxiv-2610-41181/) — 2026-10-30
  Evaluates agentic browsers against web anti-bot defenses and introduces AgentShield, a behavioral fingerprinting framework for distinguishing agents from people.
- [AgentHeal: Evaluating Goal-Preserving Resource Recovery of Web Agents under Access Barriers](https://awesomecua.com/resources/arxiv-2610-39234/) — 2026-10-29
  Introduces AgentHeal, a benchmark of whether web agents detect access barriers, find legitimate alternative sources, and preserve the user's original goal.
- [Correct Answers, Closed Gates: SolveBind for GUI Agents at the Verification Barrier](https://awesomecua.com/resources/arxiv-2610-32223/) — 2026-10-23
  Introduces SolveBind, a GUI-agent framework that decomposes verification tasks and uses runtime evidence to guide interactions with protected websites and applications.
- [MPIDetector: Detecting Multi-modal Prompt Injection via LLM-based Reasoning](https://awesomecua.com/resources/arxiv-2610-30202/) — 2026-10-21
  MPIDetector uses few-shot prompts to detect text and visual prompt injections, with environmental web-agent injections included in its evaluation.
- [Who Verifies the Agent's Success Claim? Self-Report Leakage in GUI-Agent Completion Judging](https://awesomecua.com/resources/arxiv-2610-29609/) — 2026-10-21
  Studies how GUI agents' success claims affect completion judgments and builds a claim-blind auditor that checks reports against recorded traces.
- [SPIDES: Information-Flow Control for Browser Agents](https://awesomecua.com/resources/arxiv-2610-24277/) — 2026-10-16
  SPIDES propagates HTML integrity and confidentiality labels into agent context and mediates browser actions with information-flow policies and approval gates, evaluated in the labeled MicroNet ecosystem.
- [MobileInject: Evaluating Reasoning-to-Action Security of MLLM-Based Mobile Agents under Cross-Modal Consistency Injection](https://awesomecua.com/resources/arxiv-2610-23307/) — 2026-10-16
  MobileInject evaluates visual/textual observation injection in stateful Android workflows using resettable emulators, benign/adversarial state oracles and trace-based diagnosis of emitted rationales and actions.
- [MobileJailBench: Red Queen Jailbreak Benchmarking for Mobile Agents](https://awesomecua.com/resources/arxiv-2610-23303/) — 2026-10-16
  MobileJailBench evaluates mobile-agent jailbreaks in a browser-based Android-like simulator, combining feedback-driven attack evolution, separately admitted task expansions and evidence-grounded outcome adjudication.
- [What It Is, Not What It Says: Securing Agentic Browsing Interactions with Web Semantics](https://awesomecua.com/resources/arxiv-2610-22697/) — 2026-10-15
  Intact records webpage element provenance and capabilities, isolates planning per element, and uses a browser harness to constrain actions and request consent for third-party interactions.
- [Task-State Governance: A Virtual Machine for Verifiable and Recoverable GUI Agent Execution](https://awesomecua.com/resources/arxiv-2610-20100/) — 2026-10-14
  Presents TaskVM, an interface for specifying desired and preserved application state, checking agent actions, and exposing whether changes can be reversed or compensated.
- [MMA-SafetyBench: A Benchmark for Multimodal Agent Safety Evaluation](https://awesomecua.com/resources/arxiv-2610-19384/) — 2026-10-14
  Builds trajectory-guided visual-injection tests for web, desktop and mobile observations, separating target-matching action predictions from broader semantic compromise.
- [Towards Safe Autonomy for Computer Use](https://awesomecua.com/resources/arxiv-2610-18508/) — 2026-10-13
  Presents SA-CUA, separating trusted and untrusted visual content using accessibility-derived masking rules and a controlled channel for verifying information before endorsement.
- [BrowseSafe++: Benchmarking Prompt Injection Detection Across Web Contexts, Languages, and Browser Views](https://awesomecua.com/resources/arxiv-2610-17457/) — 2026-10-12
  Extends BrowseSafe with paired attacked and clean webpages in several representations, and studies text and screenshot detectors plus feedback-adapted prompt injections.
- [PrivacyGuard: Source-Linked Sanitization and Locally Resolvable PII References for Cloud GUI Agents](https://awesomecua.com/resources/arxiv-2610-16778/) — 2026-10-12
  Introduces PrivacyGuard, which sanitizes source-linked personal information and maintains locally resolvable references across mobile-agent turns to reduce exposure to remote planners.
- [From Observations to Authorized Actions: Measuring Source Information in Android Agents](https://awesomecua.com/resources/arxiv-2610-15502/) — 2026-10-11
  Measures source-attribution limits in Android accessibility and separately tests application-history and selected-WebView-object checks for authorizing AppFunctions actions.
- [The Agent Clicks Approve: Injected Page Text Makes Browser Agents Authorize Access the Task Never Named](https://awesomecua.com/resources/arxiv-2610-15138/) — 2026-10-10
  Studies prompt-injected account-access approvals in browser agents and proposes a service-side authority envelope that checks authorization requests against the user task before allowing them to complete.
- [Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents](https://awesomecua.com/resources/arxiv-2610-11942/) — 2026-10-08
  Presents LGWM, a decoder-free GUI world model that predicts the next screen representation from an action and compares it with the observed state to verify transitions. Its paired diagnostic separates legitimate and hijacked transitions that lead to the same credential screen.
- [Secure-CUA: Controlling Untrusted Influence in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2610-09469/) — 2026-10-07
  Proposes Secure-CUA, which commits to per-action transactions before reading untrusted page content and separates content queries from GUI target selection. The paper formalizes its protection assumptions and evaluates benign task utility on WebArena.
- [Adversarial Images Hijack Web Agents from Visual Grounding to Browser Execution](https://awesomecua.com/resources/arxiv-2610-09240/) — 2026-10-07
  Introduces WebMirage, a visual red-teaming framework that models webpage element competition and action post-processing to test whether manipulated grounding decisions lead to executed browser actions.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.com/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [nanoMuse: An Open-Source Personal Agent for Every Device You Own](https://awesomecua.com/resources/arxiv-2610-08699/) — 2026-10-06
  Presents nanoMuse, an open-source personal agent designed to act on phone and computer screens, with a shared conversation, action-checking Sentinel, and readable file memory.
- [Control OSWorld: An AI Control Environment for GUI Computer Use Agents](https://awesomecua.com/resources/arxiv-2610-03818/) — 2026-10-02
  Pairs OSWorld tasks with harmful side objectives to evaluate monitors that detect malicious behavior in computer-use agent trajectories.
- [Securing Computer-Use Agents Against Branch Steering Attacks](https://awesomecua.com/resources/arxiv-2610-03089/) — 2026-10-02
  Introduces STEER-Bench to study branch-steering attacks that manipulate untrusted web data toward hazardous paths already permitted by an agent’s plan. Its COBRA architecture combines trusted branching plans with advance constraints on the parameters and destinations each branch can use.
- [DIBench: Benchmarking Decision Integrity of GUI-based Mobile Agents Under Deceptive Injections](https://awesomecua.com/resources/arxiv-2610-06898/) — 2026-09-29
  Evaluates whether deceptive UI content steers mobile agents away from instruction-consistent choices, using paired benign and injected decision states and decision-integrity metrics.
- [SCOUT: Synergizing Reasoning and Tool-Use for Computer-Use Safety](https://awesomecua.com/resources/arxiv-2609-36201/) — 2026-09-28
  Introduces SCOUT, a safety verifier that first derives task-specific completion and safety rubrics from a computer-use trajectory, then actively probes the resulting environment for evidence. It evaluates whether these two stages detect harmful consequences that screenshots alone can miss.
- [Before Acting, Change the State: Prospective State Intervention for Web Agents under Deceptive Interfaces](https://awesomecua.com/resources/arxiv-2609-34974/) — 2026-09-28
  Introduces Veer, a runtime defense that changes task-relevant web state when an otherwise valid proposed action would produce an unauthorized consequence. It plans a prospective intervention and grounds and verifies its execution before the base agent continues.
- [ORBIT: A Framework for Multi-Agent Safety and Security Evaluations](https://awesomecua.com/resources/arxiv-2609-33102/) — 2026-09-27
  Inspect-based framework that varies multi-agent roles, communication, attacks and defenses, with BrowserGym and virtual-desktop GUI adapters alongside coding and other tool scenarios.
- [AgentTell: Behavioural Side-Channel Leakage in Browser-Use Agents](https://awesomecua.com/resources/arxiv-2609-32915/) — 2026-09-26
  Introduces AgentTell, a benchmark for privacy leakage through browser actions after an agent learns a private fact on another website. It examines whether agents choose revealing options despite nondisclosure instructions and whether their final reports accurately describe that behavior.
- [Invisible in Space, Visible in Time: Motion Vision CAPTCHA against GUI Agents](https://awesomecua.com/resources/arxiv-2609-27461/) — 2026-09-23
  MVCAP-Bench tests live browser CAPTCHAs whose foreground meaning emerges through motion against dynamic backgrounds. A foreground-only control separates temporal camouflage difficulty from answer format and browser interaction.
- [CAVEAT: Towards Robust Computer-Use Agents in Incentive-Misaligned Environments](https://awesomecua.com/resources/arxiv-2609-27273/) — 2026-09-23
  Introduces CAVEAT, a controlled marketplace benchmark for testing whether delegated agents preserve user objectives when interfaces favor other outcomes. It diagnoses decision failures and studies harness interventions and targeted training to improve resistance to marketplace steering.
- [MATE: Policy-Aware Security Auditing for Mobile Agents via Synthesis-Driven Trajectory Learning](https://awesomecua.com/resources/arxiv-2609-22724/) — 2026-09-19
  Introduces MATE, a policy-conditioned auditor for mobile-agent trajectories, and MATEBench for evaluating whether those trajectories violate app security policies.
- [A Dual-Process Perspective on Nudge Susceptibility in LLM-Based GUI Agents](https://awesomecua.com/resources/arxiv-2609-19843/) — 2026-09-17
  Studies how automatic defaults and reflective social-influence cues affect GUI-agent shopping decisions under different reasoning configurations. A randomized simulated-shopping experiment finds that reasoning changes the type of susceptibility rather than uniformly removing interface influence.
- [The Verifiable Action Card: Trustworthy Human-in-the-Loop Control for Secure Autonomous Agents](https://awesomecua.com/resources/arxiv-2609-18411/) — 2026-09-16
  Presents the Verifiable Action Card (VAC), a browser approval mechanism that derives confirmations from pending actions and binds user approval to execution.
- [RiskChainBench: A Benchmark for Obfuscated Platform Message Restoration and Evidence-Grounded Web Investigation](https://awesomecua.com/resources/arxiv-2609-16900/) — 2026-09-15
  Introduces RiskChainBench, pairing obfuscated-message restoration with web-agent investigation of linked sites in labeled local web environments.
- [When Agents See Differently: Exposing UI Desynchronization Threats in Mobile Agents](https://awesomecua.com/resources/arxiv-2609-16732/) — 2026-09-15
  Investigates mismatches between what humans see on a mobile display and what agents receive through screenshots or accessibility metadata. An automated evaluation framework embeds instruction-agnostic perturbations into functional APK clones and compares static and dynamic agent deviations with human noticeability.
- [PriMobiBench: Characterizing Visual Privacy Leakage in VLM-Driven Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2609-13873/) — 2026-09-12
  PriMobiBench evaluates direct privacy leakage and user profiling from mobile GUI screenshot trajectories, supported by the MobiLeak trace dataset. It also tests masking sensitive, task-irrelevant interface elements before cloud processing and measures the resulting privacy and utility trade-off.
- [AgentHijack: Visual Patch Attacks on Multimodal Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-09212/) — 2026-09-06
  AgentHijack evaluates whether visual patch effects propagate from screenshots through model outputs and action parsing into real environment changes. Its controlled web-page experiments distinguish intermediate attack signals from verified end-to-end consequences.
- [Seeing Through Conflicts: Improving Instruction Hierarchy Alignment in Vision-Language Models](https://awesomecua.com/resources/arxiv-2609-22234/) — 2026-09-03
  Studies reinforcement learning for vision-language models facing conflicting instructions across text and images, including evaluation on web-agent safety tasks.
- [Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents](https://awesomecua.com/resources/arxiv-2609-03438/) — 2026-09-03
  CONFLICTGUI evaluates termination under instruction conflicts and mismatches between instructions and interface context. CONFLICTGUARD couples feasibility checks with conditional action modulation to reduce unnecessary execution while tracking normal-task behavior.
- [Beyond the Verdict: Evidence-Aligned Evaluation of Visual Prompt-Injection Guardrails](https://awesomecua.com/resources/arxiv-2609-05535/) — 2026-09-02
  Introduces Mind2Web-Injection, a benchmark for evaluating web-agent guardrail decisions on instruction-screenshot pairs using evidence boxes and image-side counterfactuals.
- [WiP: Characterizing and Defending Against Mobile-Agent-Driven MFA Automation](https://awesomecua.com/resources/arxiv-2609-02154/) — 2026-09-02
  Studies how mobile automation can combine authentication factors within one agent environment and evaluates motion sensing as a user-presence signal.
- [SIR: Self-improving Red-teaming for Compute Use Agents](https://awesomecua.com/resources/arxiv-2608-30207/) — 2026-08-31
  Introduces SIR, which iteratively refines a reusable library of prompt-injection strategies from failed computer-use attack trajectories. Its evaluation uses deterministic system-state checks and counts attacks only when the adversarial objective and legitimate task both complete.
- [ActReal: System-Level Mobile Agents Challenge Mobile Automation Detection](https://awesomecua.com/resources/arxiv-2608-30038/) — 2026-08-30
  Introduces ActReal, which translates semantic mobile-agent actions into coordinated touch and sensor signals to study automation-detection weaknesses. It evaluates detectors that observe touch events alone or together with inertial measurements under a privileged executor threat model.
- [A Systematic Survey of Agentic Skills: Architecture, Lifecycle, and Security](https://awesomecua.com/resources/arxiv-2608-29596/) — 2026-08-30
  Surveys modular agentic skill architectures, skill lifecycles, and security risks in autonomous tool- and interface-using agents.
- [CURA: Certified Runtime Alarms for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-27808/) — 2026-08-28
  Introduces CURA, a telemetry-based runtime monitor that turns computer-use trajectories into sequential failure alarms and can trigger mid-task oversight. Its certificate controls false alarms, while the study separately reports detection performance and limits of retrospective monitoring.
- [Beyond Task Completion: Training Capable and Safe Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-22178/) — 2026-08-27
  Introduces SCOPE, which trains computer-use agents on ordinary task demonstrations, safe continuations around hazards, and explicit refusals. Its SCOPE-Gen pipeline pairs verifiable tasks with environmental-risk variants to support joint capability and safety training.
- [UI-Venus-2 Technical Report](https://awesomecua.com/resources/arxiv-2609-00028/) — 2026-08-27
  Describes a GUI foundation agent trained through expanded environments, function-grounded tasks, and trajectory verification with safety-aware execution mechanisms.
- [ADeptS-Bench: Measuring the Trustworthiness of Computer Use Agents Across Devices](https://awesomecua.com/resources/arxiv-2608-26204/) — 2026-08-25
  Evaluates interface-embedded threats and whether computer-use agents seek clarification when mobile or desktop instructions are ambiguous.
- [WebMCP-Phalanx: Enforcing and Characterizing Trust Boundaries for Browser-Integrated LLM Agents](https://awesomecua.com/resources/arxiv-2608-24017/) — 2026-08-25
  Proposes WebMCP-Phalanx, a browser-integrated runtime that binds page-exposed tools to their registering principals and separates content inspection from privileged invocation. It studies lifecycle and prompt-injection attacks, including a timing bypass that motivates validating all visible metadata before tool use.
- [ClawProBench: Trace-Aware Evaluation of AI Agents with Runtime Coverage and Frozen Workplace-Style Holdouts](https://awesomecua.com/resources/arxiv-2608-22510/) — 2026-08-23
  Introduces ClawProBench, a trace-aware benchmark for agents on OpenClaw that scores workspace and native-runtime tasks using execution traces, safety checks, and process quality.
- [Automated Trajectory Evaluation for Mobile Agents via Step-Level Consequence Reasoning and Aggregation](https://awesomecua.com/resources/arxiv-2608-20797/) — 2026-08-21
  Introduces CRATE, a step-level visual judge for mobile-agent trajectories, and CRATE-S for assessing operational safety from action-conditioned state changes.
- [MobileWorldSafety: Benchmarking GUI Agent Safety Against Environmental Injection Attacks in Android Apps](https://awesomecua.com/resources/arxiv-2608-17659/) — 2026-08-18
  Evaluates environmental injection risks in Android tasks using programmatic risk checks and model-based adjudication of ambiguous cases.
- [LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows](https://awesomecua.com/resources/arxiv-2608-14131/) — 2026-08-14
  LegacyWorld evaluates Windows GUI workflows under an atomicity criterion: finish correctly or fail without persistent unintended changes. It compares expert prompts with prompts derived from recorded golden paths and separates useful completion, safe failure and non-atomic side effects.
- [Not an A11y: How Android Accessibility Exposes Mobile AI Agents to Indirect Prompt Injection](https://awesomecua.com/resources/arxiv-2608-08939/) — 2026-08-09
  Demonstrates that unsanitized Android accessibility tree metadata exposes mobile GUI agents to stealthy indirect prompt injection attacks.
- [RealGUINoise: An Interactive Cross-Platform Benchmark for GUI Agent Robustness under Real-World Interface Noise](https://awesomecua.com/resources/arxiv-2609-38184/) — 2026-08-07
  Evaluates interactive GUI agents under varied realistic interface noise, comparing task completion, safety, and behavior with clean-environment runs.
- [SynChain: Inducing Computer-Use Agent Systems to Construct Their Own Attack Chains](https://awesomecua.com/resources/arxiv-2608-06862/) — 2026-08-07
  Introduces SynChain, an attack that induces persistent agents to create poisoned skills or memory entries, and CUAChain for evaluating later attack-chain activation.
- [StepJack: Benchmarking Computer-Use Agent Safety Against Multi-Step Indirect Prompt Injection](https://awesomecua.com/resources/arxiv-2608-06477/) — 2026-08-06
  Introduces StepJack, a benchmark of indirect prompt injections that split an adversarial goal across pages on a computer-use agent's web navigation path.
- ["Allow" to Achieve, Over-Privileged Inadvertently: The Unintended Cost of Task-Completion-Driven Pop-up Decisions in Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-04755/) — 2026-08-05
  This permission-literacy study tests whether mobile GUI agents grant only task-necessary permissions. Controlled changes to task context and requester identity expose authorization biases and the trade-off between suppressing unnecessary and legitimate grants.
- [LoginTrap: Uncovering Task-Agnostic Phishing-Style Indirect Prompt Injection Attacks against LLM-based Web Agents](https://awesomecua.com/resources/arxiv-2608-04741/) — 2026-08-05
  Introduces LoginTrap, a black-box indirect-injection evaluation in which attacker-controlled page context and login flows induce unauthorized authentication. It measures end-to-end private-data leakage across web-agent backbones, architectures and defenses.
- [MissClick: Execution-Aware Adversarial Attacks on Coordinate Generation in GUI Grounding Models](https://awesomecua.com/resources/arxiv-2608-03740/) — 2026-08-04
  MissClick designs white-box attacks around the numerical effect of coordinate digits on executable GUI clicks. Separate untargeted displacement and targeted place-weighted objectives are evaluated across desktop, web and mobile grounding settings.
- [Invisible Ink Threats: Adversarial Goals Behind Legitimate Tasks in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-02018/) — 2026-08-03
  Introduces II-Bench for low-harm indirect prompt injections against computer-use agents and HITLCUA for testing them in virtual-machine and web environments with simulated user review.
- [From Monoliths to Swarms: A Study of Attack Surface Evolution in the Transition to Multi-Agent Web Systems](https://awesomecua.com/resources/arxiv-2608-00202/) — 2026-07-31
  Categorizes structural attack surfaces that emerge when single-agent browser systems are decomposed into multi-agent web workflows.
- [Alignment Is Local: A Paired Diagnostic for GUI Agents under User-Side Persuasion](https://awesomecua.com/resources/arxiv-2607-29199/) — 2026-07-31
  Presents a paired diagnostic of prompt guardrails in GUI agents under screen-grounded user persuasion, comparing single-turn probes with four-turn escalation.
- [SafeFlow: Semantic Information-Flow Control for Blocking Malicious Propagation in Multi-Agent Systems](https://awesomecua.com/resources/arxiv-2607-25255/) — 2026-07-28
  Introduces SafeFlow, a semantic information-flow defense for multi-agent delegation, evaluated on safety tasks that include harmful web-agent behavior.
- [From Blind Edits to Verified Repair: Building Trustworthy User-Side LLM Agents for Web Accessibility](https://awesomecua.com/resources/arxiv-2608-24913/) — 2026-07-26
  Builds a local browser-extension agent that generates and verifies additive CSS repairs for WCAG web accessibility violations.
- [Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents](https://awesomecua.com/resources/arxiv-2607-18659/) — 2026-07-21
  Measures how autonomous LLM browser agents interact with commercial bot-management and anti-automation defenses on the web.
- [SeerGuard: A Safety Framework for Mobile GUI Agents via World Model Prediction](https://awesomecua.com/resources/arxiv-2607-15550/) — 2026-07-17
  Uses instruction screening and a safety-augmented world model to assess likely consequences of mobile GUI actions before execution.
- [The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory](https://awesomecua.com/resources/arxiv-2607-10608/) — 2026-07-12
  The Entry–Propagation–Recovery framework traces where conflicting memory first changes an agent action, how the effect propagates and whether recovery occurs. WebArena and the controlled MemTrapBench separate memory-consumption failures across these stages.
- [Prismata: Confining Cross-Site Prompt Injection in Web Agents](https://awesomecua.com/resources/arxiv-2607-08147/) — 2026-07-09
  Introduces Prismata, a defense for web agents that assigns trust labels to page content and enforces them by redacting content and restricting agent actions.
- [Untrusted Content Masking for Web Agents with Security Guarantees](https://awesomecua.com/resources/arxiv-2607-05277/) — 2026-07-06
  Untrusted Content Masking uses DOM structure to redact untrusted webpage regions before agent observation. A sandboxed interaction interface separates privileges so browser actions can proceed under the proposed trust-boundary model without exposing protected content to the planner.
- [Agent Data Injection Attacks are Realistic Threats to AI Agents](https://awesomecua.com/resources/arxiv-2607-05120/) — 2026-07-06
  This study examines agent data injection, where untrusted content impersonates trusted metadata or tool-context data. It reports arbitrary-click vulnerabilities in web agents alongside separate coding-agent attacks, highlighting trust-boundary failures beyond instruction injection.
- [Do GUI Agents Believe Their Eyes? Diagnosing State-Belief Reliance on Pixels versus Structure](https://awesomecua.com/resources/arxiv-2607-04334/) — 2026-07-05
  Defines visual state reliance and probes whether GUI agents resolve screenshot/structure conflicts using pixels, serialized interface structure or prior beliefs. Paired interventions and live multi-step tests connect misattributed state beliefs to failures and compare consistency-based mitigations.
- [(A)I Sees What You Don't: Exploiting New Attack Surfaces in Third-Party Mobile Agents](https://awesomecua.com/resources/arxiv-2607-00333/) — 2026-07-01
  Analyzes cross-app privilege escalation and visual attack surfaces introduced by third-party VLM-powered mobile agents.
- [On the Internet, Nobody Knows You're an LLM Bot: Unmasking Web Agents with Multi-Layer Fingerprinting](https://awesomecua.com/resources/arxiv-2606-30119/) — 2026-06-29
  Evaluates web agents against anti-bot mechanisms on instrumented honeysites and analyzes network, HTTP and browser fingerprints. The study compares resistance to blocking with the ability to distinguish agents, humans and agent implementations.
- [Uncertainty Quantification for Computer-Use Agents: A Benchmark across Vision-Language Models and GUI Grounding Datasets](https://awesomecua.com/resources/arxiv-2606-25760/) — 2026-06-24
  Argus benchmarks post-hoc uncertainty methods for single-step GUI grounding across open-weight and closed-source observation regimes. It tests calibration, rejection, error severity and conformal click regions, finding that uncertainty rankings transfer less reliably across model/interface regimes than across datasets for one model.
- [GUI agent: Guided Exploration of User-Sensitive Screens](https://awesomecua.com/resources/arxiv-2606-25705/) — 2026-06-24
  This short paper develops an explorer agent that expands from a demonstrated GUI task to discover requests likely to reach user-sensitive screens. The proposed exploration supports identifying situations where task execution should be handed back to the user.
- [AOHP: An Open-Source OS-Level Agent Harness for Personalized, Efficient and Secure Interaction](https://awesomecua.com/resources/arxiv-2606-23449/) — 2026-06-22
  Introduces AOHP, an Android OS-level harness that treats agents as system actors and provides adaptive interfaces, agent interfaces, and information-flow controls.
- [Capable but Careless: Do Computer-Use Agents Follow Contextual Integrity?](https://awesomecua.com/resources/arxiv-2606-23189/) — 2026-06-22
  AgentCIBench evaluates whether computer-use agents disclose information in ways that violate its original context. Deterministically scored scenarios test nearby sensitive UI content, ambiguous requests and recipient mismatches, including end-to-end agent execution.
- [When AUC 0.998 Is Not Enough: A Candidate Evaluation Protocol for Hidden-State Probes of Indirect Prompt Injection in Multimodal Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-22864/) — 2026-06-22
  Proposes diagnostic controls for hidden-state probes of indirect prompt injection in multimodal computer-use agents, using a teacher-forced Mind2Web case study.
- [Agent MechSuits: Mechanistic Subspace Safety Steering for Multi-Turn CLI Agents](https://awesomecua.com/resources/arxiv-2606-22673/) — 2026-06-21
  Introduces Agent MechSuits, a framework that detects unsafe states and steers multi-turn CLI agents through hidden-representation interventions, alongside the MAS trajectory benchmark.
- [Whose Agent Are You? Multi-Layer Fingerprinting and Attribution of Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2606-20910/) — 2026-06-18
  Builds a logging framework that combines network/protocol fingerprints with browser interaction behavior to attribute web-agent traffic. A decision-tree classifier is evaluated across six agent implementations, human browsing and conventional crawlers.
- [MIRAGE: Stealthy Visual Prompt Injection for Vulnerability Detection in Web Agents](https://awesomecua.com/resources/arxiv-2606-20717/) — 2026-06-16
  MIRAGE evaluates targeted next-action hijacking from adversarial images restricted to legitimate third-party webpage regions. It combines diffusion-based image generation with execution-aware optimization and tests the constrained visual-injection setting on web-agent frameworks.
- [FraudSMSWalker: Benchmarking Agentic Large Language Models for SMS-to-Webpage Fraud Detection](https://awesomecua.com/resources/arxiv-2606-16659/) — 2026-06-15
  FraudSMSWalker tests browser agents on bilingual SMS-to-webpage fraud judgments while hiding URL and reputation shortcuts. Its controlled chains include difficult benign login/payment cases and evaluate whether classifications remain supported by the visible message and page evidence.
- [OSGuard: A Benchmark for Safety in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-15034/) — 2026-06-13
  Evaluates action-level guardrails and full computer tasks with environment-dependent safety constraints, separating safe completion from nominal success.
- [Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents](https://awesomecua.com/resources/arxiv-2606-13385/) — 2026-06-11
  StakeBench evaluates prompt-injection harm to different stakeholders in shopping web-agent workflows. Its executable cases separate attack objectives and assess both outcomes and execution processes to reveal how the same attack pattern can affect different parties.
- [CAPED: Context-Aware Privacy Exposure Defense for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2606-12666/) — 2026-06-10
  CAPED filters mobile screenshots before upload by combining task requirements, screen context and parsed UI elements to mask incidental private content. AndroidWorld and a controlled seeded privacy evaluation examine leakage reduction alongside task utility and prototype costs.
- [MemVenom: Triggered Poisoning of Multimodal Memories in Web Agents](https://awesomecua.com/resources/arxiv-2606-10742/) — 2026-06-09
  Introduces MemVenom, a black-box attack that plants coordinated text and image content in web-agent memory to trigger retrieval and redirect later actions.
- [Domain-Conditioned Safety in Frontier Computer-Using Agents: A 793-Episode Browser Benchmark, a Coding-Domain Cross-Reference, and a Reproducibility Audit of Recent Red-Teaming](https://awesomecua.com/resources/arxiv-2606-05233/) — 2026-06-03
  Introduces CUA-HandCrafted, a browser-agent red-teaming benchmark that varies attack templates, tasks and system prompts. Its domain comparison and reproducibility audit caution against transferring browser-surface safety conclusions to coding agents or unreleased optimized injections.
- [SkillHarness: Harnessing Safe Skills for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-20636/) — 2026-06-02
  Introduces SkillHarness, a framework for computer-use agents to learn and reuse skills under safety constraints when interactions include prompt injections or pop-ups.
- [MedCUA-Bench: A Screenshot-Only Benchmark for Clinical Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-03203/) — 2026-06-02
  MedCUA-Bench evaluates screenshot-only clinical interface workflows using paired intent- and step-level goals. It combines reconstructed medical interfaces with completion and clinical-safety checks, and separately reports results on a real OpenEMR system.
- [BraveGuard: From Open-World Threats to Safer Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-01166/) — 2026-05-31
  Introduces BraveGuard, a framework that turns emerging threats and computer-use agent trajectories into training supervision for guards that monitor multi-step safety risks.
- [MaskClaw: Edge-Side Personalized Privacy Arbitration for GUI Agents with Behavior-Driven Skill Evolution](https://awesomecua.com/resources/arxiv-2605-28646/) — 2026-05-27
  MaskClaw makes local Allow, Mask or Ask decisions before GUI screenshots leave a trusted environment, using visual evidence and personalized policy memory. Its benchmark and designed evolution scenarios test how corrections and edits can become privacy skills checked by a sandbox gate.
- [MIRAGE: Context-Aware Prompt Injection against Mobile GUI Agents via User-Generated Content](https://awesomecua.com/resources/arxiv-2605-28116/) — 2026-05-27
  MIRAGE constructs mobile screenshot injections in ordinary user-content regions through localization, contextual payload generation and realism curation. Its evaluation separates visual realism from attack effectiveness against pixel-observing GUI agents.
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [PersonaFingerprint: Measuring Persona Inference on Modern Websites with LLM-Driven Browsing](https://awesomecua.com/resources/arxiv-2605-15962/) — 2026-05-15
  PersonaFingerprint studies persona inference from encrypted web traffic, using a persona-constrained computer-use agent to browse real websites and collect traces.
- [WARD: Adversarially Robust Defense of Web Agents Against Prompt Injections](https://awesomecua.com/resources/arxiv-2605-15030/) — 2026-05-14
  WARD guards web agents against prompt injections in HTML and visual interfaces, using web data and adaptive attacker–guard training.
- [Known By Their Actions: Fingerprinting LLM Browser Agents via UI Traces](https://awesomecua.com/resources/arxiv-2605-14786/) — 2026-05-14
  A study shows that websites can infer the model behind a browser agent from passively recorded UI actions and timing traces across web tasks.
- [Web Agents Should Adopt the Plan-Then-Execute Paradigm](https://awesomecua.com/resources/arxiv-2605-14290/) — 2026-05-14
  Argues for compiling web tasks into predefined execution graphs before exposing an agent to untrusted runtime content. Its WebArena task analysis identifies typed, semantically complete website tools as a prerequisite and distinguishes this interface proposal from reactive click-level control.
- [Don't Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://awesomecua.com/resources/arxiv-2605-09497/) — 2026-05-10
  DUDE combines asymmetric hybrid-reward learning with summaries of deceptive-interface failures to guide safer web actions. Its RUC benchmark evaluates deception susceptibility alongside ordinary task performance across interface scenarios.
- [OTora: A Unified Red Teaming Framework for Reasoning-Level Denial-of-Service in LLM Agents](https://awesomecua.com/resources/arxiv-2605-08876/) — 2026-05-09
  OTora generates attacks that increase reasoning and tool use in multi-step LLM agents while preserving task outcomes; evaluations include WebShop agents.
- [WebTrap: Stealthy Mid-Task Hijacking of Browser Agents During Navigation](https://awesomecua.com/resources/arxiv-2605-08310/) — 2026-05-08
  WebTrap injects mid-task instructions into browser-agent navigation to steer an agent toward an attacker goal before it resumes the user's task.
- [Securing Computer-Use Agents: A Unified Architecture-Lifecycle Framework for Deployment-Grounded Reliability](https://awesomecua.com/resources/arxiv-2605-07110/) — 2026-05-08
  Survey of computer-use agent reliability and security across browsers, desktops, and mobile apps, using architecture and lifecycle views to map failures and controls.
- [Constraining Host-Level Abuse in Self-Hosted Computer-Use Agents via TEE-Backed Isolation](https://awesomecua.com/resources/arxiv-2605-06393/) — 2026-05-07
  A TEE-backed design confines host operations by self-hosted computer-use agents, classifying and authorizing actions before constrained local execution.
- [WAAA! Web Adversaries Against Agentic Browsers](https://awesomecua.com/resources/arxiv-2605-05509/) — 2026-05-06
  Evaluates agentic browsers against classical web attacks and visual social-engineering lures beyond indirect prompt injection.
- [AcademiClaw: When Students Set Challenges for AI Agents](https://awesomecua.com/resources/arxiv-2605-02661/) — 2026-05-04
  AcademiClaw benchmarks OpenClaw agents on long academic workflows, scoring task completion in isolated Docker sandboxes with rubrics and a safety audit.
- [SnapGuard: Lightweight Prompt Injection Detection for Screenshot-Based Web Agents](https://awesomecua.com/resources/arxiv-2604-25562/) — 2026-04-28
  SnapGuard detects screenshot-based prompt injection through complementary visual-stability and recovered textual cues. Its evaluation compares detection quality and inference cost across attack and benign-page settings, rather than establishing universal runtime prevention.
- [OS-SPEAR: A Toolkit for the Safety, Performance,Efficiency, and Robustness Analysis of OS Agents](https://awesomecua.com/resources/arxiv-2604-24348/) — 2026-04-27
  Provides an evaluation toolkit for joint safety, efficiency, and multimodal robustness analysis of operating-system GUI agents.
- [Benchmarking Web Agent Safety under E-commerce Deceptive Interfaces](https://awesomecua.com/resources/arxiv-2606-13686/) — 2026-04-26
  Introduces WebDecept, a plugin for injecting deceptive e-commerce interface patterns during web-agent tasks and evaluating how multimodal agents respond.
- [Temporal UI State Inconsistency in Desktop GUI Agents: Formalizing and Defending Against TOCTOU Attacks on Computer-Use Agents](https://awesomecua.com/resources/arxiv-2604-18860/) — 2026-04-20
  This study examines UI changes between a desktop agent’s screenshot observation and action dispatch. Its pre-execution state checks address overlay and focus manipulation, while the reported DOM-injection blind spot limits the defense’s coverage.
- [Human-Guided Harm Recovery for Computer Use Agents](https://awesomecua.com/resources/arxiv-2604-18847/) — 2026-04-20
  Introduces a preference-trained reward model for guiding computer-use agents out of harmful states and BackBench, a benchmark of recovery tasks.
- [A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle](https://awesomecua.com/resources/arxiv-2604-16548/) — 2026-04-17
  Organizes security risks and defenses for persistent agent memory into six lifecycle phases and proposes five verifiable governance primitives.
- [Penny Wise, Pixel Foolish: Bypassing Price Constraints in Multimodal Agents via Visual Adversarial Perturbations](https://awesomecua.com/resources/arxiv-2604-16515/) — 2026-04-15
  Introduces PriceBlind, a visual perturbation method for controlled screenshot-based evaluation of price-constrained multimodal agents. The reported transfer experiments use a simplified single-turn coordinate-selection protocol.
- [WebAgentGuard: A Reasoning-Driven Guard Model for Detecting Prompt Injection Attacks in Web Agents](https://awesomecua.com/resources/arxiv-2604-12284/) — 2026-04-14
  WebAgentGuard separates prompt-injection detection from the operating web agent through a parallel multimodal guard. The guard is trained on synthetic visual/textual examples using reasoning-focused supervised fine-tuning followed by reinforcement learning.
- [Mobile GUI Agent Privacy Personalization with Trajectory Induced Preference Optimization](https://awesomecua.com/resources/arxiv-2604-11259/) — 2026-04-13
  Proposes Trajectory Induced Preference Optimization (TIPO) to train mobile GUI agents for differing user privacy preferences across structurally different task trajectories.
- [The Blind Spot of Agent Safety: How Benign User Instructions Expose Critical Vulnerabilities in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2604-10577/) — 2026-04-12
  Introduces OS-BLIND, a computer-use agent safety benchmark for harmful outcomes arising from benign instructions and threats in task environments.
- [CORA: Conformal Risk-Controlled Agents for Safeguarded Mobile GUI Automation](https://awesomecua.com/resources/arxiv-2604-09155/) — 2026-04-10
  Introduces CORA, which calibrates a risk model to choose between executing and abstaining from mobile GUI actions, then diagnoses rejected actions to suggest interventions. Phone-Harm provides step-level safety labels for evaluating this safeguarding process.
- [Preference Redirection via Attention Concentration: An Attack on Computer Use Agents](https://awesomecua.com/resources/arxiv-2604-08005/) — 2026-04-09
  Introduces PRAC, an adversarial-patch attack that redirects a computer-use agent's visual attention to steer product selection on an online shopping platform.
- [Are GUI Agents Focused Enough? Automated Distraction via Semantic-level UI Element Injection](https://awesomecua.com/resources/arxiv-2604-07831/) — 2026-04-09
  This study tests black-box GUI-grounding failures caused by strategically added, innocuous-looking UI elements. Its iterative overlay search is compared with random injection and repeated independent grounding trials to distinguish persistent misdirection from incidental clutter.
- [WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks](https://awesomecua.com/resources/arxiv-2604-06367/) — 2026-04-07
  WebSP-Eval evaluates agents carrying out website security and privacy tasks such as preference changes and session management. A browser extension controls account and initial state across runs, enabling analysis of failures on stateful UI controls.
- [Comparing Human Oversight Strategies for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2604-04918/) — 2026-04-06
  Compares four human oversight strategies during live web-agent sessions, examining exposure to problematic actions and opportunities to intervene. The analysis identifies timing and attention problems in control handoffs and upfront plan approval.
- [Your Agent, Their Asset: A Real-World Safety Analysis of OpenClaw](https://awesomecua.com/resources/arxiv-2604-04759/) — 2026-04-06
  Introduces a safety evaluation of OpenClaw and the CIK taxonomy for analyzing how changes to a personal agent's persistent state affect attacks on its local and service access.
- [AgentHazard: A Benchmark for Evaluating Harmful Behavior in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2604-02947/) — 2026-04-03
  Introduces AgentHazard, a benchmark of harmful multi-step behavior by computer-use agents acting through tools, files, and execution environments.
- [Poison Once, Exploit Forever: Environment-Injected Memory Poisoning Attacks on Web Agents](https://awesomecua.com/resources/arxiv-2604-02623/) — 2026-04-03
  Studies persistent web-agent memory contamination introduced through environmental observations instead of direct memory access. Experiments on WebArena and VisualWebArena examine cross-session effects and how interaction failures alter susceptibility.
- [Do Phone-Use Agents Respect Your Privacy?](https://awesomecua.com/resources/arxiv-2604-00986/) — 2026-04-01
  Introduces MyPhoneBench to verify whether phone-use agents minimize personal data disclosure when filling forms during benign mobile tasks.
- ["What Did It Actually Do?": Understanding Risk Awareness and Traceability for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-28551/) — 2026-03-30
  Presents an interview study of computer-use agent risks and AgentTrace, a prototype interface showing agent actions, resource access, permission history, and lasting changes.
- [The Cognitive Firewall:Securing Browser Based AI Agents Against Indirect Prompt Injection Via Hybrid Edge Cloud Defense](https://awesomecua.com/resources/arxiv-2603-23791/) — 2026-03-24
  Proposes a split-compute browser defense pairing a local visual sentinel, a cloud planner, and deterministic policy enforcement against indirect prompt injection.
- [AgentRAE: Remote Action Execution through Notification-based Visual Backdoors against Screenshots-based Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2603-23007/) — 2026-03-24
  AgentRAE studies notification-based visual backdoors that redirect mobile GUI-agent actions. Its training separates sensitivity to icon differences from trigger/action association, with evaluations of clean behavior and targeted redirection.
- [MANA: Towards Efficient Mobile Ad Detection via Multimodal Agentic UI Navigation](https://awesomecua.com/resources/arxiv-2603-20351/) — 2026-03-20
  MANA combines visual, temporal and exploration signals to guide navigation toward mobile advertisements. It evaluates ad detection and interaction cost on commercial smartphones, including obfuscated-ad cases.
- [ClawTrap: A MITM-Based Red-Teaming Framework for Real-World OpenClaw Security Evaluation](https://awesomecua.com/resources/arxiv-2603-18762/) — 2026-03-19
  Presents a man-in-the-middle network red-teaming framework for evaluating autonomous OpenClaw agents under live traffic manipulation.
- [WebPII: Benchmarking Visual PII Detection for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-17357/) — 2026-03-18
  WebPII provides synthetic e-commerce screenshots with fine-grained annotations for sensitive information, including partially filled forms and transaction identifiers. It also trains WebRedact to detect visual PII as a privacy component for computer-use agents.
- [How Vulnerable Are AI Agents to Indirect Prompt Injections? Insights from a Large-Scale Public Competition](https://awesomecua.com/resources/arxiv-2603-15714/) — 2026-03-16
  This public red-teaming study evaluates indirect prompt injection that both changes agent behavior and hides the compromise from the final response. Its scenarios include computer use alongside tool calling and coding, with analyses of transfer and model-dependent vulnerability.
- [Visual Confused Deputy: Exploiting and Defending Perception Failures in Computer-Using Agents](https://awesomecua.com/resources/arxiv-2603-14707/) — 2026-03-16
  Formalizes a visual confused-deputy failure in which a computer agent acts on a misperceived UI object. A separate guardrail checks both the visual target and the agent's action reasoning against deployment-specific knowledge before permitting execution.
- [You Told Me to Do It: Measuring Instructional Text-induced Private Data Leakage in LLM Agents](https://awesomecua.com/resources/arxiv-2603-11862/) — 2026-03-12
  Introduces ReadSecBench, a README-based benchmark for measuring whether high-privilege agents follow injected instructions that leak private data; a computer-use agent is evaluated.
- [SlowBA: An efficiency backdoor attack towards VLM-based GUI agents](https://awesomecua.com/resources/arxiv-2603-08316/) — 2026-03-09
  Introduces SlowBA, a backdoor attack on vision-language GUI agents that uses pop-up triggers to induce longer reasoning chains and increase response latency.
- [Dual-Modality Multi-Stage Adversarial Safety Training: Robustifying Multimodal Web Agents Against Cross-Modal Attacks](https://awesomecua.com/resources/arxiv-2603-04364/) — 2026-03-04
  Studies webpage injections that affect both screenshots and accessibility trees, then trains web agents through teacher imitation, supervised adversarial examples, and adversarial reinforcement learning. The evaluation tests defenses on MiniWoB++ and held-out tasks.
- [Atomicity for Agents: Exposing, Exploiting, and Mitigating TOCTOU Vulnerabilities in Browser-Use Agents](https://awesomecua.com/resources/arxiv-2603-00476/) — 2026-02-28
  Identifies time-of-check to time-of-use (TOCTOU) race vulnerabilities when web pages mutate between agent planning and action execution.
- [A Trajectory-Based Safety Audit of Clawdbot (OpenClaw)](https://awesomecua.com/resources/arxiv-2602-14364/) — 2026-02-16
  Audits Clawdbot safety through logged action and tool-call trajectories across local execution and web-mediated workflows, using automated and human review.
- [SPILLage: Agentic Oversharing on the Web](https://awesomecua.com/resources/arxiv-2602-13516/) — 2026-02-13
  Formalizes and measures natural agentic oversharing when browser agents handle private user emails and calendars across live websites.
- [Agent Skills for Large Language Models: Architecture, Acquisition, Security, and the Path Forward](https://awesomecua.com/resources/arxiv-2602-12430/) — 2026-02-12
  This survey organizes agent skills by architecture, acquisition, deployment and security, including their role in computer-use systems and GUI grounding. It also proposes a permission and lifecycle governance framework for skill deployment.
- [How Smart Is Your GUI Agent? A Framework for the Future of Software Interaction](https://awesomecua.com/resources/arxiv-2602-11514/) — 2026-02-12
  Proposes GUI Agent Autonomy Levels (GAL), a six-level framework for describing autonomy and benchmarking GUI agents that navigate web, desktop, and mobile software.
- [Blind Gods and Broken Screens: Architecting a Secure, Intent-Centric Mobile Agent Operating System](https://awesomecua.com/resources/arxiv-2602-10915/) — 2026-02-11
  Analyzes security risks in screen-based mobile agents and proposes Aura, an agent runtime with structured interactions, app-agent isolation and mediated communication.
- [MUZZLE: Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks](https://awesomecua.com/resources/arxiv-2602-09222/) — 2026-02-09
  MUZZLE evaluates web-agent exposure to indirect prompt injection by finding attack surfaces in agent trajectories and refining injected instructions from execution feedback.
- [Next-Gen CAPTCHAs: Leveraging the Cognitive Gap for Scalable and Diverse GUI-Agent Defense](https://awesomecua.com/resources/arxiv-2602-09012/) — 2026-02-09
  Next-Gen CAPTCHAs introduces generated interactive challenges intended to distinguish human users from GUI agents. The benchmark targets perception, memory, decisions and actions, with backend-supported challenge types designed for scalable instance generation.
- [When Actions Go Off-Task: Detecting and Correcting Misaligned Actions in Computer-Use Agents](https://awesomecua.com/resources/arxiv-2602-08995/) — 2026-02-09
  MisActBench provides action-level labels for task alignment, while DeAction checks proposed computer-use actions and requests revisions through structured feedback. The paper separately evaluates offline detection and interactive operation in OSWorld and RedTeamCUA.
- [When Benign Inputs Lead to Severe Harms: Eliciting Unsafe Unintended Behaviors of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2602-08235/) — 2026-02-09
  AutoElicit iteratively revises benign instructions using execution feedback to surface harmful unintended actions by computer-use agents in OS workflows.
- [Anonymization-Enhanced Privacy Protection for Mobile GUI Agents: Available but Invisible](https://awesomecua.com/resources/arxiv-2602-10139/) — 2026-02-08
  An anonymization framework replaces sensitive screen content and instructions with consistent, type-preserving placeholders while mediating actions through a local interaction proxy. Experiments on AndroidLab and PrivScreen examine the privacy–utility trade-off when mobile GUI agents operate over these transformed interfaces.
- [WebSentinel: Detecting and Localizing Prompt Injection Attacks for Web Agents](https://awesomecua.com/resources/arxiv-2602-03792/) — 2026-02-03
  WebSentinel identifies suspicious webpage segments and checks each against its surrounding page context to detect and locate prompt injections. Its evaluation uses both contaminated and clean webpage datasets.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.com/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [Okara: Detection and Attribution of TLS Man-in-the-Middle Vulnerabilities in Android Apps with Foundation Models](https://awesomecua.com/resources/arxiv-2601-22770/) — 2026-01-30
  Okara uses foundation-model-driven GUI agents to explore Android apps for TLS vulnerability detection, then applies instrumentation and classification to attribute vulnerable code.
- [GUIGuard-Bench: Toward a General Evaluation for Privacy-Preserving GUI Agents](https://awesomecua.com/resources/arxiv-2601-18842/) — 2026-01-26
  Introduces GUIGuard-Bench, which annotates private regions in GUI trajectories with categories, risk levels, and relevance to the user’s task. It evaluates privacy recognition and the effect of screenshot protection on offline planning and task utility.
- [MalURLBench: A Benchmark Evaluating Agents' Vulnerabilities When Processing Web URLs](https://awesomecua.com/resources/arxiv-2601-18113/) — 2026-01-26
  MalURLBench evaluates how LLM-based web agents handle disguised malicious URLs across attack scenarios; the paper also analyzes attack factors and proposes URLGuard.
- [MirrorGuard: Toward Secure Computer-Use Agents via Simulation-to-Real Reasoning Correction](https://awesomecua.com/resources/arxiv-2601-12822/) — 2026-01-19
  MirrorGuard trains a reasoning-correction defense using GUI risk trajectories generated in a text-based neural-symbolic simulator. It evaluates whether corrections transfer to computer-use agents operating real interfaces, keeping simulated training separate from deployment tests.
- [Mind the Gap: Action Rebinding Attacks against Android GUI Agents](https://awesomecua.com/resources/arxiv-2601-12349/) — 2026-01-18
  Studies action-rebinding attacks in which an Android GUI agent’s planned input is redirected to a different application during the observation–action delay. The evaluation examines cross-application execution and the consequences of treating an earlier screen as the current action target.
- [CaMeLs Can Use Computers Too: System-level Security for Computer Use Agents](https://awesomecua.com/resources/arxiv-2601-09923/) — 2026-01-14
  NOVA separates trusted task planning from screen-derived observations by producing a branching plan before execution and resolving runtime values through perception. Its OSWorld study examines security and utility while identifying remaining risks from perception-driven branch steering.
- [WebTrap Park: An Automated Platform for Systematic Security Evaluation of Web Agents](https://awesomecua.com/resources/arxiv-2601-08406/) — 2026-01-13
  Introduces WebTrap Park, a platform that turns web-agent security risks into executable tasks and assesses concrete interactions with live pages. It compares agent frameworks without requiring modifications to their implementations.
- [When Bots Take the Bait: Exposing and Mitigating the Emerging Social Engineering Attack in Web Automation Agent](https://awesomecua.com/resources/arxiv-2601-07263/) — 2026-01-12
  Studies deceptive social-engineering web patterns targeting browser automation agents and proposes defenses against bait-based manipulation.
- [It's a TRAP! Task-Redirecting Agent Persuasion Benchmark for Web Agents](https://awesomecua.com/resources/arxiv-2512-23128/) — 2025-12-29
  Introduces TRAP, which evaluates task-redirection attacks embedded in realistic web interfaces. Controlled website clones and a modular injection framework support comparisons of persuasion techniques and contextual changes across agents.
- [DECEPTICON: How Dark Patterns Manipulate Web Agents](https://awesomecua.com/resources/arxiv-2512-22894/) — 2025-12-28
  DECEPTICON is an environment of 700 web navigation tasks that isolates dark patterns to measure how deceptive interface designs steer agent actions.
- [WebOperator: Action-Aware Tree Search for Autonomous Agents in Web Environment](https://awesomecua.com/resources/arxiv-2512-12692/) — 2025-12-14
  WebOperator uses tree search, action filtering, and path checks before replay to explore web tasks and backtrack while accounting for irreversible actions.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.com/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [Privacy Practices of Browser Agents](https://awesomecua.com/resources/arxiv-2512-07725/) — 2025-12-08
  Presents a privacy evaluation framework for browser agents covering component weaknesses, website defenses, tracking, privacy-related prompts and personal-data leakage. The framework is applied to deployed browser-agent tools.
- [Permission Manifests for Web Agents](https://awesomecua.com/resources/arxiv-2601-02371/) — 2025-12-07
  Proposes agent-permissions.json, a website manifest for declaring which interactions web agents may perform, with optional references to APIs.
- [BrowseSafe: Understanding and Preventing Prompt Injection Within AI Browser Agents](https://awesomecua.com/resources/arxiv-2511-20597/) — 2025-11-25
  BrowseSafe builds a benchmark of prompt injections in realistic HTML for browser agents and evaluates defenses against attacks that can affect agent actions.
- [Building Browser Agents: Architecture, Security, and Practical Solutions](https://awesomecua.com/resources/arxiv-2511-19477/) — 2025-11-22
  Reports architectural and security lessons from building a browser agent, including hybrid accessibility-tree and visual context, browser tooling and programmatic constraints. A WebGames evaluation accompanies the discussion of reliability and specialization.
- [DualTAP: A Dual-Task Adversarial Protector for Mobile MLLM Agents](https://awesomecua.com/resources/arxiv-2511-13248/) — 2025-11-17
  Applies dual-task adversarial perturbations to mobile screenshots to conceal personally identifiable information from untrusted MLLM routers while preserving agent task utility.
- [Measuring the Security of Mobile LLM Agents under Adversarial Prompts from Untrusted Third-Party Channels](https://awesomecua.com/resources/arxiv-2510-27140/) — 2025-10-31
  Measures how untrusted third-party notifications, messages, and app content can hijack mobile LLM agents into executing unauthorized cross-app actions.
- [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://awesomecua.com/resources/arxiv-2510-24411/) — 2025-10-28
  Introduces MobileRisk-Live and OS-Sentinel, combining a formal verifier for system-level violations with a multimodal judge for contextual risks in mobile GUI workflows.
- [GhostEI-Bench: Do Mobile Agents Resilience to Environmental Injection in Dynamic On-Device Environments?](https://awesomecua.com/resources/arxiv-2510-20333/) — 2025-10-23
  Introduces GhostEI-Bench, a benchmark that injects deceptive UI events into Android emulator workflows to assess mobile agents and analyze failures from actions and screenshots.
- [Genesis: Evolving Attack Strategies for LLM Web Agent Red-Teaming](https://awesomecua.com/resources/arxiv-2510-18314/) — 2025-10-21
  Introduces Genesis, a red-teaming framework that generates adversarial injections for web agents and revises attack strategies using responses and interaction logs.
- [Investigating the Impact of Dark Patterns on LLM-Based Web Agents](https://awesomecua.com/resources/arxiv-2510-18113/) — 2025-10-20
  Presents LiteAgent for recording web-agent interactions and TrickyArena for enabling or disabling dark patterns in controlled websites. Experiments compare how individual patterns, combined patterns and visual or HTML changes affect agent decisions.
- [CORE: Reducing UI Exposure in Mobile Agents via Collaboration Between Cloud and Local LLMs](https://awesomecua.com/resources/arxiv-2510-15455/) — 2025-10-17
  Introduces CORE, which divides mobile UI hierarchies into semantic blocks and shares planning between local and cloud language models. Local ranking limits the screen information sent for cloud-side element selection, with a multi-round mechanism for correcting inadequate context.
- [In-Browser LLM-Guided Fuzzing for Real-Time Prompt Injection Testing in Agentic AI Browsers](https://awesomecua.com/resources/arxiv-2510-13543/) — 2025-10-15
  Proposes an in-browser fuzzing framework that uses language-model guidance to test indirect prompt-injection vulnerabilities in agentic browsers. The work focuses on unwanted actions triggered by webpage instructions under the browser agent's user privileges.
- [HackWorld: Evaluating Computer-Use Agents on Exploiting Web Application Vulnerabilities](https://awesomecua.com/resources/arxiv-2510-12200/) — 2025-10-14
  Introduces HackWorld for evaluating visual computer-use agents in a capture-the-flag collection of web applications. The benchmark examines interface navigation and multistep planning during vulnerability discovery and exploitation tasks.
- [SusBench: An Online Benchmark for Evaluating Dark Pattern Susceptibility of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2510-11035/) — 2025-10-13
  Introduces SusBench, an online benchmark that inserts dark-pattern designs into consumer websites for agent evaluation. A human study checks the realism of the interventions, and agent trials compare susceptibility across pattern types.
- [SecureWebArena: A Holistic Security Evaluation Benchmark for LVLM-based Web Agents](https://awesomecua.com/resources/arxiv-2510-10073/) — 2025-10-11
  Introduces SecureWebArena with simulated interactive websites, an attack-vector taxonomy and labeled agent trajectories. Its evaluation separates failures in reasoning, behavioral traces and task outcomes across vision-language agent families.
- [Invisible to Humans, Triggered by Agents: Stealthy Jailbreak Attacks on Mobile Vision-Language Agents](https://awesomecua.com/resources/arxiv-2510-07809/) — 2025-10-09
  Uses the near-zero contact-touch signals of automated mobile agents to expose malicious visual content selectively during agent interactions. The paper combines this agent-only perceptual injection with HG-IDA* prompt optimization to study unauthorized cross-app actions.
- [Your Harness is Not Secure: Benchmarking Real-world Threat of Command Line Interface Agent](https://awesomecua.com/resources/arxiv-2510-06607/) — 2025-10-08
  Introduces AdvCLI, a sandbox benchmark for evaluating whether command-line agents carry out security-relevant operating-system tasks across multiple hosts.
- [Cross-Modal Content Optimization for Steering Web Agent Preferences](https://awesomecua.com/resources/arxiv-2510-03612/) — 2025-10-04
  Introduces Cross-Modal Preference Steering (CPS), a black-box attack that edits a listing's images and text to steer VLM-based web agents' selections.
- [Learning Efficient Guardrails for Compliance](https://awesomecua.com/resources/arxiv-2510-03485/) — 2025-10-03
  Introduces PolicyGuardBench for detecting policy violations in full web-agent trajectories and their prefixes, and trains PolicyGuard as an efficient guardrail model.
- [FocusAgent: Simple Yet Effective Ways of Trimming the Large Context of Web Agents](https://awesomecua.com/resources/arxiv-2510-03204/) — 2025-10-03
  Introduces FocusAgent, which uses a lightweight LLM to select task-relevant lines from web agents' accessibility-tree observations, reducing context size and exposure to prompt injection.
- [Say One Thing, Do Another? Diagnosing Reasoning-Execution Gaps in VLM-Powered Mobile-Use Agents](https://awesomecua.com/resources/arxiv-2510-02204/) — 2025-10-02
  Introduces an evaluation framework for mobile GUI agents that compares actions implied by their reasoning with intended and executed actions to diagnose mismatches.
- [Just Do It!? Computer-Use Agents Exhibit Blind Goal-Directedness](https://awesomecua.com/resources/arxiv-2510-01670/) — 2025-10-02
  BLIND-ACT tests whether computer-use agents persist with ambiguous, contradictory, or infeasible goals without adequate contextual reasoning. Its OSWorld-based tasks and judged trajectories examine these behaviors and the effect of mitigation prompts.
- [WAInjectBench: Benchmarking Prompt Injection Detections for Web Agents](https://awesomecua.com/resources/arxiv-2510-01354/) — 2025-10-01
  Introduces WAInjectBench with a threat-model taxonomy and malicious and benign text-image datasets for web-agent prompt-injection detection. It compares detector families across explicit and less visible forms of injected content.
- [Can We Stop Malicious AI? KILLBENCH: A Benchmark for External AI Kill Switch Feasibility](https://awesomecua.com/resources/arxiv-2511-13725/) — 2025-09-26
  KillBench evaluates external prompt-style signals intended to halt maliciously operating web agents, across harmful scenarios and agent configurations.
- [Secure and Efficient Access Control for Computer-Use Agents via Context Space](https://awesomecua.com/resources/arxiv-2509-22256/) — 2025-09-26
  Introduces CSAgent, which combines static access policies with user intent and context and enforces them through an operating-system service. A supporting toolchain constructs and refines policies for agents using API, CLI and GUI interfaces.
- [Benchmarking MLLM-based Web Understanding: Reasoning, Robustness and Safety](https://awesomecua.com/resources/arxiv-2509-21782/) — 2025-09-26
  Evaluates multimodal LLMs on web interface reasoning, visual perturbation robustness, and safety-critical web understanding tasks.
- [InfraMind: A Novel Exploration-based GUI Agentic Framework for Mission-critical Industrial Management](https://awesomecua.com/resources/arxiv-2509-13704/) — 2025-09-17
  InfraMind explores industrial management GUIs using virtual-machine snapshots and builds memory for planning and hierarchical state recognition. Its framework also studies knowledge distillation and safety checks on open-source and commercial data-center management platforms.
- [PrivWeb: Unobtrusive and Content-aware Privacy Protection For Web Agents](https://awesomecua.com/resources/arxiv-2509-11939/) — 2025-09-15
  Introduces PrivWeb, which uses a local language model to anonymize interface information according to user preferences. Adaptive notifications and selective pauses give users control over sensitive information access during web-agent tasks.
- [Environmental Injection Attacks against GUI Agents in Realistic Dynamic Environments](https://awesomecua.com/resources/arxiv-2509-11250/) — 2025-09-14
  Introduces Chameleon, an environmental-injection evaluation framework that varies webpage content and trigger context. It combines simulated page variation with attention-based optimization and tests GUI agents across realistic websites.
- [Dark Patterns Meet GUI Agents: LLM Agent Susceptibility to Manipulative Interfaces and the Role of Human Oversight](https://awesomecua.com/resources/arxiv-2509-10723/) — 2025-09-12
  Studies how GUI agents, people, and human-agent teams respond to manipulative interface designs. The two-phase evaluation examines failure modes and the benefits and costs of human oversight.
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2509-07764/) — 2025-09-09
  Introduces AgentSentinel, which intercepts sensitive computer-agent operations and audits them using task context together with system traces. BadComputerUse evaluates this enforcement approach across attack scenarios involving tool and computer control.
- [VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents](https://awesomecua.com/resources/arxiv-2509-07553/) — 2025-09-09
  Introduces VeriOS-Agent, which learns when to execute GUI actions autonomously and when to query a user under untrustworthy conditions. Its staged training combines supervised learning and group-relative policy optimization.
- [Throttling Web Agents Using Reasoning Gates](https://awesomecua.com/resources/arxiv-2509-01619/) — 2025-09-01
  Introduces reasoning gates that require agents to solve generated, verifiable puzzles before receiving access to resources. The throttling approach is deployed on a custom website and MCP servers and evaluated with web agents.
- [Mind the Third Eye! Benchmarking Privacy Awareness in MLLM-powered Smartphone Agents](https://awesomecua.com/resources/arxiv-2508-19493/) — 2025-08-27
  Introduces SAPA-Bench with 7,138 smartphone scenarios to evaluate whether MLLM-powered mobile agents detect and protect sensitive personal information on screen.
- [Reliable Weak-to-Strong Monitoring of LLM Agents](https://awesomecua.com/resources/arxiv-2508-19461/) — 2025-08-26
  Introduces CUA-SHADE-Arena and a red-teaming workflow for testing monitors that detect covert misbehavior in computer-use agent trajectories.
- [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://awesomecua.com/resources/arxiv-2508-15832/) — 2025-08-18
  Amazon-Bench generates functionality-specific web tasks from page content and interactive controls, covering operations beyond product search. Its evaluator checks task completion and unintended changes to account state, such as address or purchase settings.
- [MVISU-Bench: Benchmarking Mobile Agents for Real-World Tasks by Multi-App, Vague, Interactive, Single-App and Unethical Instructions](https://awesomecua.com/resources/arxiv-2508-09057/) — 2025-08-12
  MVISU-Bench evaluates bilingual mobile tasks involving cross-app work, vague requests, user interaction and unethical instructions alongside ordinary single-app tasks. Its Aider prompting module is designed to clarify intent and mitigate risky execution within agent workflows.
- [HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization](https://awesomecua.com/resources/arxiv-2508-04010/) — 2025-08-06
  Introduces HarmonyGuard, a multi-agent framework that updates security policies and weighs safety against task completion for agents operating on the open web.
- [Measuring Harmfulness of Computer-Using Agents](https://awesomecua.com/resources/arxiv-2508-00935/) — 2025-07-31
  Introduces CUAHarm, 104 computer-use misuse tasks in a sandbox with verifiable rewards, and studies whether language models can monitor unsafe agent actions.
- [Magentic-UI: Towards Human-in-the-loop Agentic Systems](https://awesomecua.com/resources/arxiv-2507-22358/) — 2025-07-30
  Magentic-UI combines browser interaction, code execution, file operations, and MCP tools in an interface for human-agent collaboration. It studies collaborative planning and task execution, action guards, and persistent memory through benchmark tasks, simulated users, user studies, and safety assessments.
- [Manipulating LLM Web Agents with Indirect Prompt Injection Attack via HTML Accessibility Tree](https://awesomecua.com/resources/arxiv-2507-14799/) — 2025-07-20
  Studies indirect prompt injection through HTML content consumed as accessibility trees. The evaluation tests how manipulated page observations redirect browser-agent actions on real websites.
- [WebGuard: Building a Generalizable Guardrail for Web Agents](https://awesomecua.com/resources/arxiv-2507-14293/) — 2025-07-18
  Introduces WebGuard, a human-annotated dataset for predicting outcomes and risk levels of state-changing website actions. It provides generalization splits and evaluates specialized guardrail models.
- [Machine-Readable Ads: Accessibility and Trust Patterns for AI Web Agents interacting with Online Advertisements](https://awesomecua.com/resources/arxiv-2507-12844/) — 2025-07-17
  Compares DOM-based and pixel-based web agents on a cloned news site containing advertisements, consent dialogs and paywalls. The study examines how interface presentation affects ad interaction and consequential subscription choices.
- [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://awesomecua.com/resources/arxiv-2507-10610/) — 2025-07-13
  Introduces LaSM, a training-free defense that selectively scales attention and MLP components to improve alignment with task-relevant screen regions. It evaluates the approach against pop-up-based GUI injection attacks.
- [VisualTrap: A Stealthy Backdoor Attack on GUI Agents via Visual Grounding Manipulation](https://awesomecua.com/resources/arxiv-2507-06899/) — 2025-07-09
  Studies backdoors that redirect GUI visual grounding even when the task plan is correct. VisualTrap evaluates whether poisoned grounding training transfers to downstream tasks and across web, mobile, and desktop interface settings.
- [OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety](https://awesomecua.com/resources/arxiv-2507-06134/) — 2025-07-08
  Evaluates agent safety across real browser, code, filesystem, shell, and messaging tools using rule-based and model-based assessments.
- [A Systematization of Security Vulnerabilities in Computer Use Agents](https://awesomecua.com/resources/arxiv-2507-05445/) — 2025-07-07
  Analyzes security boundaries in computer-use agents through a risk taxonomy and concrete adversarial case studies. It links observed failures to input provenance, interface-action binding, memory, and delegation, and proposes CUA-specific evaluation principles.
- [Mobile GUI Agents under Real-world Threats: Are We There Yet?](https://awesomecua.com/resources/arxiv-2507-04227/) — 2025-07-06
  Introduces an app-content instrumentation framework and complementary interactive and static test suites for mobile GUI agents. It studies how untrusted third-party content changes task execution and state understanding.
- [SafeMobile: Chain-level Jailbreak Detection and Automated Evaluation for Multimodal Mobile Agents](https://awesomecua.com/resources/arxiv-2507-00841/) — 2025-07-01
  Studies chain-level risk detection for mobile multimodal agents and a language-model-assisted evaluator, assessing safety interventions together with functional preservation.
- [Agent-RewardBench: Towards a Unified Benchmark for Reward Modeling across Perception, Planning, and Safety in Real-World Multimodal Agents](https://awesomecua.com/resources/arxiv-2506-21252/) — 2025-06-26
  Introduces Agent-RewardBench to evaluate step-level reward models for multimodal agents across perception, planning, and safety; web navigation is among its scenarios.
- [Context manipulation attacks : Web agents are susceptible to corrupted memory](https://awesomecua.com/resources/arxiv-2506-17318/) — 2025-06-18
  Studies context manipulation in web agents by altering stored task representations rather than webpage prompts alone. Evaluation on Browser-use and Agent-E examines memory-directed attacks and the implications for secure context handling.
- [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://awesomecua.com/resources/arxiv-2506-14866/) — 2025-06-17
  Extends OSWorld with tasks covering user misuse, prompt injection, and model misbehavior, with assessment of both task success and safety.
- [Poison Once, Control Anywhere: Clean-Text Visual Backdoors in VLM-based Mobile Agents](https://awesomecua.com/resources/arxiv-2506-13205/) — 2025-06-16
  Demonstrates clean-text visual backdoor attacks (VIBMA) that compromise fine-tuned VLM mobile agents through visual triggers while keeping text instructions intact.
- [Build the web for agents, not agents for the web](https://awesomecua.com/resources/arxiv-2506-10953/) — 2025-06-12
  Proposes Agentic Web Interface (AWI), a website interface intended for agent navigation, and sets out six design principles for web-agent use.
- [macOSWorld: A Multilingual Interactive Benchmark for GUI Agents](https://awesomecua.com/resources/arxiv-2506-04135/) — 2025-06-04
  macOSWorld provides 202 interactive tasks across 30 applications, with instructions and operating-system interfaces in five languages. It evaluates GUI agents on macOS workflows and includes a separate subset for deception-attack testing.
- [VerificAgent: Domain-Specific Memory Verification for Scalable Oversight of Aligned Computer-Use Agents](https://awesomecua.com/resources/arxiv-2506-02539/) — 2025-06-03
  Introduces VerificAgent, which grows domain-specific memories from task trajectories and subjects them to human fact-checking before deployment. Its OSWorld evaluation treats persistent memory as an auditable constraint on later agent behavior.
- [VPI-Bench: Visual Prompt Injection Attacks for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2506-02456/) — 2025-06-03
  Introduces VPI-Bench, interactive web-platform variants containing visually embedded malicious instructions. It evaluates computer-use and browser-use agents under these threats and examines system-prompt defenses.
- [MLA-Trust: Benchmarking Trustworthiness of Multimodal LLM Agents in GUI Environments](https://awesomecua.com/resources/arxiv-2506-01616/) — 2025-06-02
  Benchmarks truthfulness, controllability, safety, and privacy of multimodal LLM agents across interactive web and mobile GUI tasks.
- [RiOSWorld: Benchmarking the Risk of Multimodal Computer-Use Agents](https://awesomecua.com/resources/arxiv-2506-00618/) — 2025-05-31
  Introduces RiOSWorld, a computer-use risk benchmark separating user-originated and environmental threats. It evaluates both risky-goal intent and goal completion across web and other computer applications.
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.com/resources/arxiv-2505-21936/) — 2025-05-28
  RedTeamCUA combines a virtual-machine OS environment with containerized websites for controlled prompt-injection tests spanning both interfaces. Its RTC-Bench contains 864 examples and can initialize agents at injection points to separate attack susceptibility from navigation failures.
- [AdInject: Real-World Black-Box Attacks on Web Agents via Advertising Delivery](https://awesomecua.com/resources/arxiv-2505-21499/) — 2025-05-27
  Studies advertising delivery as an indirect-injection channel for web agents under a black-box threat model. AdInject evaluates how static ad content shaped by website context can redirect browser actions.
- [Hidden Ghost Hand: Unveiling Backdoor Vulnerabilities in MLLM-Powered Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2505-14418/) — 2025-05-20
  Studies backdoor risks in mobile GUI agents through AgentGhost, which combines goal-level and interaction-history triggers during model training. The paper evaluates multiple mobile agents and a tailored defense.
- [EVA: Evolving Semantic Adversaries for Red-Teaming GUI Agents Against Environmental Injection Attacks](https://awesomecua.com/resources/arxiv-2505-14289/) — 2025-05-20
  Introduces EVA, a red-teaming framework that evolves semantic payloads for GUI environmental-injection tests. It studies the contribution of semantic versus visual deception and distills discovered patterns into reusable evaluation rules.
- [The Hidden Dangers of Browsing AI Agents](https://awesomecua.com/resources/arxiv-2505-13076/) — 2025-05-19
  Outlines an end-to-end threat model and empirical security evaluation across architectural layers of autonomous browser agents.
- [From Assistants to Adversaries: Exploring the Security Risks of Mobile LLM Agents](https://awesomecua.com/resources/arxiv-2505-12981/) — 2025-05-19
  Analyzes security vulnerabilities across OEM system-level, third-party, and research mobile LLM agents, covering GUI and cross-application attack surfaces.
- [GEM: Gaussian Embedding Modeling for Out-of-Distribution Detection in GUI Agents](https://awesomecua.com/resources/arxiv-2505-12842/) — 2025-05-19
  GEM detects instructions outside a GUI agent’s capabilities by modeling distances in its input-embedding space with a Gaussian mixture. Experiments across mobile, computer and browser data also examine selective escalation to a cloud model when an input is detected as unfamiliar.
- [WebInject: Prompt Injection Attack to Web Agents](https://awesomecua.com/resources/arxiv-2505-11717/) — 2025-05-16
  Introduces WebInject, a prompt-injection attack that optimizes rendered webpage pixels to make screenshot-based web agents take attacker-chosen actions.
- [A Survey on the Safety and Security Threats of Computer-Using Agents: JARVIS or Ultron?](https://awesomecua.com/resources/arxiv-2505-10924/) — 2025-05-16
  Systematizes safety and security threats to computer-using agents, with taxonomies of threats and defensive strategies.
- [Characterizing Unintended Consequences in Human-GUI Agent Collaboration for Web Browsing](https://awesomecua.com/resources/arxiv-2505-09875/) — 2025-05-15
  Studies unintended consequences of collaborative web browsing with GUI agents through social-media analysis and interviews. It organizes observed failures, user impacts, and mitigation practices around planning, interface interaction, feedback, privacy, and trust.
- [AgentVigil: Generic Black-Box Red-teaming for Indirect Prompt Injection against LLM Agents](https://awesomecua.com/resources/arxiv-2505-05849/) — 2025-05-09
  Introduces AgentVigil, a black-box fuzzing framework for finding indirect prompt injections against LLM agents, including attacks that redirect web navigation.
- [Toward a Human-Centered Evaluation Framework for Trustworthy LLM-Powered GUI Agents](https://awesomecua.com/resources/arxiv-2504-17934/) — 2025-04-24
  Presents a position paper on privacy and security evaluation for GUI agents, identifying risk categories and challenges in involving human evaluators. It proposes risk-aware assessment and in-context consent as design directions.
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://awesomecua.com/resources/arxiv-2504-18575/) — 2025-04-22
  Introduces WASP, an end-to-end benchmark for prompt-injection security in web agents. Its evaluation separates partial attack progress from completion of the attacker’s full objective.
- [DoomArena: A framework for Testing AI Agents Against Evolving Security Threats](https://awesomecua.com/resources/arxiv-2504-14064/) — 2025-04-18
  Presents a modular security testing framework that plugs into BrowserGym and tool-use benchmarks to evaluate agents under configurable threat models.
- [The Obvious Invisible Threat: LLM-Powered GUI Agents' Vulnerability to Fine-Print Injections](https://awesomecua.com/resources/arxiv-2504-11281/) — 2025-04-15
  Characterizes six forms of GUI-content injection and studies their effects on GUI agents and human users using adversarial webpages. The analysis examines privacy failures and the limits of human oversight.
- [On the Robustness of GUI Grounding Models Against Image Attacks](https://awesomecua.com/resources/arxiv-2504-04716/) — 2025-04-07
  Evaluates GUI grounding models under natural image noise, untargeted adversarial perturbations, and targeted image attacks. Experiments cover mobile, desktop, and web interfaces and analyze sensitivity to image resolution and adversarial changes.
- [Towards Trustworthy GUI Agents: A Survey](https://awesomecua.com/resources/arxiv-2503-23434/) — 2025-03-30
  Frames GUI-agent trustworthiness as an execution gap and reviews failures, attacks, and defenses across perception, reasoning, and interaction.
- [A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models](https://awesomecua.com/resources/arxiv-2503-23350/) — 2025-03-30
  Surveys foundation-model web agents through their architectures, training methods and trustworthiness. It organizes research on completing browser tasks from user instructions and identifies directions for further development.
- [ShieldAgent: Shielding Agents via Verifiable Safety Policy Reasoning](https://awesomecua.com/resources/arxiv-2503-22738/) — 2025-03-26
  Proposes a guardrail agent that reasons over explicit safety policies and checks action trajectories, with a web-agent safety benchmark.
- [sudo rm -rf agentic_security](https://awesomecua.com/resources/arxiv-2503-20279/) — 2025-03-26
  Evaluates security failures of computer-use agents under adversarial requests and screen-context manipulation. The study examines refusal behavior while agents perform tasks in desktop and web environments.
- [VeriSafe Agent: Safeguarding Mobile GUI Agent via Logic-based Action Verification](https://awesomecua.com/resources/arxiv-2503-18492/) — 2025-03-24
  Translates user instructions into formal specifications and applies runtime logic-based checks to proposed mobile GUI actions.
- [MIP against Agent: Malicious Image Patches Hijacking Multimodal OS Agents](https://awesomecua.com/resources/arxiv-2503-10809/) — 2025-03-13
  Studies Malicious Image Patches (MIPs), altered screen regions that can steer screenshot-based OS agents into harmful mouse and keyboard actions.
- [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2503-09780/) — 2025-03-12
  Evaluates whether autonomous web agents minimize use of sensitive personal information when completing tasks that expose unnecessary private data.
- [In-Context Defense in Computer Agents: An Empirical Study](https://awesomecua.com/resources/arxiv-2503-09241/) — 2025-03-12
  Studies in-context defenses for computer agents exposed to misleading pop-ups and other environmental instructions. It examines defensive reasoning before action planning and how a small set of examples changes resistance to these attacks.
- [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2503-04957/) — 2025-03-06
  Pairs benign and harmful web tasks to assess deliberate misuse risks and categorize agent behavior by risk level.
- [Why Are Web AI Agents More Vulnerable Than Standalone LLMs? A Security Analysis](https://awesomecua.com/resources/arxiv-2502-20383/) — 2025-02-27
  Analyzes web-agent vulnerabilities at the component level, examining goal placement in prompts, multistep action generation, and observations as sources of increased susceptibility.
- [OS-Kairos: Adaptive Interaction for MLLM-Powered GUI Agents](https://awesomecua.com/resources/arxiv-2503-16465/) — 2025-02-26
  Uses step-level confidence estimates to decide when a GUI agent should act autonomously or request human intervention in complex situations.
- [Evaluating the Robustness of Multimodal Agents Against Active Environmental Injection Attacks](https://awesomecua.com/resources/arxiv-2502-13053/) — 2025-02-18
  Examines active environmental injection against mobile agents, testing whether adversarial interface content redirects decisions during task execution.
- [Towards Computer-Using Personal Agents](https://awesomecua.com/resources/arxiv-2503-15515/) — 2025-01-31
  Proposes computer-using personal agents connected to user-controlled data repositories, discussing privacy, interoperability, and collaborative tasks.
- [Attacking Vision-Language Computer Agents via Pop-ups](https://awesomecua.com/resources/arxiv-2411-02391/) — 2024-11-04
  Tests whether adversarial visual pop-ups divert computer agents from intended tasks in desktop and web benchmark environments.
- [Evaluating Cultural and Social Awareness of LLM Web Agents](https://awesomecua.com/resources/arxiv-2410-23252/) — 2024-10-30
  Introduces CASA to assess web agents' responses to cultural and social norms in shopping and forum tasks, including misleading observations.
- [MobileSafetyBench: Evaluating Safety of Autonomous Agents in Mobile Device Control](https://awesomecua.com/resources/arxiv-2410-17520/) — 2024-10-23
  Evaluates mobile agents on misuse, side effects, and indirect prompt-injection risks in an Android emulator environment.
- [AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://awesomecua.com/resources/arxiv-2410-17401/) — 2024-10-22
  Introduces a black-box web-agent red-teaming framework that learns adversarial prompts from agent feedback to study security weaknesses.
- [Refusal-Trained LLMs Are Easily Jailbroken As Browser Agents](https://awesomecua.com/resources/arxiv-2410-13886/) — 2024-10-11
  Introduces BrowserART and studies whether chat-model refusal behavior transfers to browser agents carrying out potentially harmful instructions.
- [From Interaction to Impact: Towards Safer AI Agents Through Understanding and Evaluating Mobile UI Operation Impacts](https://awesomecua.com/resources/arxiv-2410-09006/) — 2024-10-11
  Develops a taxonomy of mobile-action consequences and annotated interaction data to evaluate whether models recognize impactful or risky UI operations.
- [ST-WebAgentBench: A Benchmark for Evaluating Safety and Trustworthiness in Web Agents](https://awesomecua.com/resources/arxiv-2410-06703/) — 2024-10-09
  Evaluates web-task completion under explicit enterprise policies, measuring policy-compliant completion and safety violations separately.
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://awesomecua.com/resources/arxiv-2409-11295/) — 2024-09-17
  Evaluates privacy-directed webpage instruction injection against generalist web agents using PII-related interaction steps from Mind2Web, including attempts to expose specific user information or entire requests.
- [Caution for the Environment: Multimodal LLM Agents are Susceptible to Environmental Distractions](https://awesomecua.com/resources/arxiv-2408-02544/) — 2024-08-05
  Measures how irrelevant GUI content affects multimodal agents using a simulated dataset and three perception patterns. The study also examines adversarial environment injection and possible ways to improve instruction faithfulness.
- [Systematic Categorization, Construction and Evaluation of New Attacks against Multi-modal Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2407-09295/) — 2024-07-12
  Develops a threat taxonomy and evaluation framework for attacks against multimodal mobile GUI agents, with case studies and dataset experiments.
- [Dissecting Adversarial Robustness of Multimodal LM Agents](https://awesomecua.com/resources/arxiv-2406-12814/) — 2024-06-18
  Introduces adversarial tasks on VisualWebArena and an evaluation framework that tracks how manipulated information passes between agent components. The analysis examines vulnerabilities introduced by reflection and tree-search evaluators as well as direct action generation.
- [GuardAgent: Safeguard LLM Agents by a Guard Agent via Knowledge-Enabled Reasoning](https://awesomecua.com/resources/arxiv-2406-09187/) — 2024-06-13
  Introduces GuardAgent, which translates safety requests into executable guardrail code using plans and retrieved demonstrations. Mind2Web-SC supplies a web-agent safety-policy evaluation alongside a separate healthcare access-control benchmark.
- [WIPI: A New Web Threat for LLM-Driven Web Agents](https://awesomecua.com/resources/arxiv-2402-16965/) — 2024-02-26
  Studies WIPI, a black-box indirect-instruction threat in which webpage content redirects LLM-driven web agents. Evaluation spans plugin-based agents, Web GPTs, and open-source web-agent implementations.
- [Watch Out for Your Agents! Investigating Backdoor Threats to LLM-Based Agents](https://awesomecua.com/resources/arxiv-2402-11208/) — 2024-02-17
  Studies backdoor attacks on LLM agents, including triggers in user queries or intermediate observations, with web shopping among the evaluated agent tasks.
- [A Trembling House of Cards? Mapping Adversarial Attacks against Language Agents](https://awesomecua.com/resources/arxiv-2402-10196/) — 2024-02-15
  Presents a conceptual perception–reasoning–action framework and 12 potential attack scenarios for language agents, including hypothetical web-navigation attacks.
- [Responsible Task Automation: Empowering Large Language Models as Responsible Task Automators](https://awesomecua.com/resources/arxiv-2306-01242/) — 2023-06-02
  Presents ResponsibleTA, a coordinator-executor framework that checks command feasibility and task completion while using local memory for privacy-related controls. The paper compares prompted and learned implementations and evaluates them on UI task automation.

## 评测基准

- [Adversarial Web Agents](https://awesomecua.com/resources/github-chenwu98-agent-attack/) — Date not recorded
  Evaluation resources for adversarial attacks on multimodal web agents.
- [AgentDAM](https://awesomecua.com/resources/github-facebookresearch-ai-agent-privacy/) — Date not recorded
  Web-agent benchmark for measuring unnecessary use of sensitive personal information during end-to-end task execution.
- [BrowserART](https://awesomecua.com/resources/github-scaleapi-browser-art/) — Date not recorded
  Red-teaming benchmark and test suite from Scale AI evaluating whether refusal-trained language models can be jailbroken when deployed as browser agents.
- [EIA](https://awesomecua.com/resources/github-osu-nlp-group-eia-against-webagent/) — Date not recorded
  Evaluation suite for Environmental Injection Attacks that embed invisible malicious HTML elements into benign websites to test privacy leakage in generalist web agents.
- [MLA-Trust](https://awesomecua.com/resources/github-thu-ml-mla-trust/) — Date not recorded
  Unified evaluation framework measuring truthfulness, controllability, safety, and privacy of multimodal LLM agents across interactive web and mobile GUI tasks.
- [MobileSafetyBench](https://awesomecua.com/resources/github-jylee425-mobilesafetybench/) — Date not recorded
  Android emulator testbed that scores mobile device-control agents on both safety and helpfulness, using ADB and Appium for observations, actions and success checks.
- [OS-Harm](https://awesomecua.com/resources/github-tml-epfl-os-harm/) — Date not recorded
  Benchmark for safety of computer-use agents across misuse, prompt injection, and unintended model behavior.
- [PopupAttack](https://awesomecua.com/resources/github-salt-nlp-popupattack/) — Date not recorded
  Resources for evaluating GUI agents under malicious popup instructions.
- [SafeArena](https://awesomecua.com/resources/github-mcgill-nlp-safearena/) — Date not recorded
  Web-agent benchmark pairing benign and harmful tasks to study deliberate misuse risks.
- [ST-WebAgentBench](https://awesomecua.com/resources/github-segev-shlomov-st-webagentbench/) — Date not recorded
  BrowserGym-based benchmark for evaluating the safety and policy compliance of enterprise web agents across six trustworthiness risk dimensions.
- [WebGuard](https://awesomecua.com/resources/github-osu-nlp-group-webguard/) — Date not recorded
  Codebase, annotation toolkit, and action-level risk dataset for training and evaluating guardrail models that flag unsafe browser-agent actions before execution.
- [WebTailBench](https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/) — Date not recorded
  Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.

## 工程与产业

- [AdvAgent (formerly AdvWeb)](https://awesomecua.com/resources/github-ai-secure-advagent/) — Date not recorded
  Research code for constructing and evaluating adversarial inputs to web agents, with a black-box red-team pipeline using Mind2Web data and SeeAct.
- [Agent Browser Shield](https://awesomecua.com/resources/github-pixiebrix-agent-browser-shield/) — Date not recorded
  Browser extension for filtering potentially unsafe agent input.
- [ORBIT framework](https://awesomecua.com/resources/github-wlanderson0-orbit/) — Date not recorded
  Inspect-based multi-agent evaluation framework with role, scheduling and communication controls, BrowserART accessibility-tree actions, and desktop mouse, keyboard and screenshot tools.
- [OS-Kairos](https://awesomecua.com/resources/github-wuzheng02-os-kairos/) — Date not recorded
  Android GUI-agent research implementation that uses confidence-guided interaction to choose between autonomous actions and human assistance.
- [OS-Sentinel](https://awesomecua.com/resources/github-os-copilot-os-sentinel/) — Date not recorded
  Safety-checking environment and benchmark for mobile agents on AndroidWorld that judges proposed actions with rule-based and VLM-based checks, evaluated on the MobileRisk trajectory dataset.
- [RedTeamCUA](https://awesomecua.com/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
- [VeriOS](https://awesomecua.com/resources/github-wuzheng02-verios/) — Date not recorded
  Research code for proactive human–GUI-agent verification, including offline interaction-loop and dual-agent evaluation scripts plus LLaMA-Factory fine-tuning configurations.
- [VeriSafe Agent](https://awesomecua.com/resources/github-verisafeagent-verisafeagent/) — Date not recorded
  Runtime verification framework for Android GUI agents that checks proposed actions against logical rules derived from user instructions and developer-defined app states.
