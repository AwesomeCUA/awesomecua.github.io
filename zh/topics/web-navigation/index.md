# 网页导航

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/web-navigation/records.jsonl

## 论文与综述

- [SPIDES: Information-Flow Control for Browser Agents](https://awesomecua.github.io/resources/arxiv-2610-24277/) — 2026-10-16
  SPIDES propagates HTML integrity and confidentiality labels into agent context and mediates browser actions with information-flow policies and approval gates, evaluated in the labeled MicroNet ecosystem.
- [PersonaCUABench: Benchmarking Computer-Use Agents Serving Diverse Personas](https://awesomecua.github.io/resources/arxiv-2610-22990/) — 2026-10-16
  PersonaCUABench varies simulated user requests and clarification dialogue over fixed web tasks, comparing task completion with requirement handling and persona-agent satisfaction ratings.
- [Don't Retrain, Remix: Adaptation of Web Agents using Mixture Hypernetworks](https://awesomecua.github.io/resources/arxiv-2610-22539/) — 2026-10-15
  WebMix uses a scout-produced interface manual to route mixtures of source-trained LoRA adapters for web agents, adapting to target interfaces without target-time gradient updates.
- [Why Generate a Click? Plug-in Decision Heads for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-20107/) — 2026-10-14
  Adds decision heads to a frozen vision-language generator for selecting web actions and targets, with a confidence gate that falls back to text generation.
- [Teaching Agents in their Own Style: Blackbox Teacher Distillation for Web Agents](https://awesomecua.github.io/resources/arxiv-2610-19834/) — 2026-10-14
  Introduces WebKD, which repairs failed student web-agent trajectories with minimal teacher edits and trains on corrections that preserve the student's reasoning style.
- [BrowseSafe++: Benchmarking Prompt Injection Detection Across Web Contexts, Languages, and Browser Views](https://awesomecua.github.io/resources/arxiv-2610-17457/) — 2026-10-12
  Extends BrowseSafe with paired attacked and clean webpages in several representations, and studies text and screenshot detectors plus feedback-adapted prompt injections.
- [HyWe: Unifying Search and Operation for Real-World Hybrid Web Tasks](https://awesomecua.github.io/resources/arxiv-2610-16319/) — 2026-10-12
  Introduces HyWe, which switches between information search and browser operation within one trajectory, alongside a demonstration pipeline and a benchmark of hybrid web tasks.
- [A Baseline Assessment for the Agentic Web Technology Stack](https://awesomecua.github.io/resources/arxiv-2610-13703/) — 2026-10-09
  Presents MASTIF, a framework for comparing combinations of agent models, protocols, and implementation frameworks on web tasks, with an initial assessment using 300 Mind2Web tasks.
- [Web$hell: A Unified Interface for Agentic Web Access](https://awesomecua.github.io/resources/arxiv-2610-13416/) — 2026-10-09
  Introduces Web$hell, an interface that compiles live pages into persistent information and action objects so agents can gather evidence, navigate websites, and reuse acquired content through shared operations.
- [Can LLMs Fix It Without Code? Toward Automated Verification of No-Code Bug Fixes](https://awesomecua.github.io/resources/arxiv-2610-11963/) — 2026-10-08
  Tests natural-language no-code fixes through GUI execution in Linux Brave. Scripted fixed/buggy-state gates and issue-specific checkers distinguish fix outcomes from the executor's completion claims.
- [Secure-CUA: Controlling Untrusted Influence in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2610-09469/) — 2026-10-07
  Proposes Secure-CUA, which commits to per-action transactions before reading untrusted page content and separates content queries from GUI target selection. The paper formalizes its protection assumptions and evaluates benign task utility on WebArena.
- [CLIFT: Conformal Self-Verification for Web Agent Training and Test-Time Scaling](https://awesomecua.github.io/resources/arxiv-2610-06829/) — 2026-10-05
  Introduces CLIFT, which certifies agent-generated verification signals against training-time judges and reuses them for per-step rewards and trajectory selection. At inference, a frozen question bank helps compare candidate web rollouts without querying an external judge.
- [WebFovea: When the Model Is Right but the Click Is Wrong -- Reliable Round Trips for Vision-Based Web Agents on Live Websites](https://awesomecua.github.io/resources/arxiv-2610-03036/) — 2026-10-02
  Describes WebFovea, a vision-based live-web agent whose execution loop checks action parsing, browser effects, feedback accuracy, and observation delivery. The report analyzes failures such as coordinate mismatches and silent control interactions and documents corresponding harness changes.
- [WebUIProof: Benchmarking WebUI Code Generators with UI-Agent Execution Harness](https://awesomecua.github.io/resources/arxiv-2610-02617/) — 2026-10-02
  Introduces an execution-based benchmark for generated web interfaces, with a headless-browser UI-agent harness that checks DOM interactions and functional assertions.
- [Action Conditioned Bisimulation For GUI Agent Memory](https://awesomecua.github.io/resources/arxiv-2609-38778/) — 2026-09-30
  Defines a GUI-memory merge rule that treats two states as equivalent only when shared actions lead to matching outcomes and successor states. The training-free method replaces observation-similarity merging and is tested in closed-loop MiniWoB++ interaction.
- [AdaptArena: Evaluating Test-Time Personalization of Web Agents](https://awesomecua.github.io/resources/arxiv-2609-36488/) — 2026-09-29
  Introduces AdaptArena to test whether web agents can infer unstated user preferences from relevant past trajectories and carry those preferences into new tasks. Its AdaptiveAgent baseline separates preference-retrieval challenges from failures in downstream web execution.
- [Structured Interaction, Visual Localization, and Robust Execution for Complex Web Tasks: A Technical Report on the WebRetriever Challenge](https://awesomecua.github.io/resources/arxiv-2609-35904/) — 2026-09-28
  Describes a WebRetriever agent that combines semantic webpage operations with visual localization when structured representations are insufficient. Hierarchical context management and fault-aware execution support processing tasks across concurrent browsers.
- [Probe to Act: Elevating Browser-Use Agent via Active Visual Probing](https://awesomecua.github.io/resources/arxiv-2609-33646/) — 2026-09-27
  Introduces Probe to Act, which lets browser agents request visual evidence linking DOM handles and screen regions before committing an operation. It retains selected interaction evidence as memory and studies both prompted use and distillation into open models.
- [ORBIT: A Framework for Multi-Agent Safety and Security Evaluations](https://awesomecua.github.io/resources/arxiv-2609-33102/) — 2026-09-27
  Inspect-based framework that varies multi-agent roles, communication, attacks and defenses, with BrowserGym and virtual-desktop GUI adapters alongside coding and other tool scenarios.
- [From Trajectories to Grounded Preferences: Process Preference Synthesis via Interaction Element Graphs for Web PRMs](https://awesomecua.github.io/resources/arxiv-2609-32351/) — 2026-09-26
  Introduces SURFPRM, which turns web demonstrations into an interaction-element graph for synthesizing grounded negative actions. Its contrastive preference data trains process reward models to distinguish plausible on-page alternatives and guide downstream trajectory search.
- [The Hard Part Comes After Search: Benchmarking Web Agents on Synthesizing, Organizing, and Displaying Knowledge](https://awesomecua.github.io/resources/arxiv-2609-30604/) — 2026-09-24
  KNOWS benchmarks browser workflows that retrieve and synthesize information into documents, presentations and spreadsheets. Task-specific evaluators combine deterministic checks with model judgments, distinguishing partial progress from usable end-to-end artifact completion.
- [EconSkills: Studying Skill Transfer and Retrieval for Web Agents on Live Economic Data](https://awesomecua.github.io/resources/arxiv-2609-19523/) — 2026-09-17
  EconSkills converts verified economic-data browsing traces into parameterized procedures with navigation, verification and recovery guidance. Its evaluation separates known-skill transfer from library retrieval, exposing the limits of approximate matches to new tasks.
- [AutoTailor: Automatic, User-Aligned Capability Selection and Adaptation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-13548/) — 2026-09-11
  AutoTailor compiles web trajectories into reusable browser-automation APIs, then filters and dynamically revises the capability inventory. WebArena experiments distinguish API-only operation from an agent that can fall back to ordinary reasoning and browser actions.
- [Token Efficient Task Execution via Application Behavior Modeling for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-13491/) — 2026-09-11
  OdoBot builds a model of web-application behavior from successful task demonstrations and uses it to guide task execution. Its Canvas LMS evaluation compares token use and completion with existing web agents.
- [When and What to Teach: Budget-Aware Online Adaptation for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-05513/) — 2026-08-31
  Proposes an online teaching framework that decides which web-agent episodes warrant a stronger teacher and which trajectory turns merit training. A solvability gate and score-guided trimming aim to preserve first-attempt performance while reducing teaching and training costs.
- [SCAFFOLD: Self-Improving Web Agents via Recursive Parametric Skill Abstraction](https://awesomecua.github.io/resources/arxiv-2609-05511/) — 2026-08-31
  Introduces SCAFFOLD, which extracts executable skills from web trajectories, composes them into a hierarchy, and compresses redundant skills through behavioral checks. It periodically distills skill-guided trajectories into the policy and studies repeated improvement across web benchmarks.
- [Learning Simple Test-Time Environments for LLM Web Agents](https://awesomecua.github.io/resources/arxiv-2608-29305/) — 2026-08-29
  Introduces Test-Time Environment Decomposition, which uses trial interaction to break complex web observations into simpler modules. A label-free adaptation procedure learns from these sub-environments and studies whether their gains compose in full web tasks.
- [BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes](https://awesomecua.github.io/resources/arxiv-2608-24848/) — 2026-08-25
  Introduces BrowserForge, which combines broad website sourcing, parallel browser sandboxes, and task-proposer/solver interaction to collect verified web trajectories. The pipeline uses page structure during synthesis but trains a policy that acts from screenshots.
- [Wuying-Browser-Agent: Real-World Centric Fundamental Long-Horizon Browser Agents](https://awesomecua.github.io/resources/arxiv-2608-17319/) — 2026-08-18
  Combines a browser execution framework, recovery-oriented supervision, and online reinforcement learning, with a bilingual live-web task benchmark.
- [Improving LLM-based Autonomous Web Agents with Filtering](https://awesomecua.github.io/resources/arxiv-2609-27770/) — 2026-08-16
  Trains HTML-element relevance filters on Mind2Web trajectories and transfers them to WebArena to reduce irrelevant browser context. It also evaluates a zero-shot ColBERT retriever and documents baseline web-agent failure modes.
- [SynWeaver: Website-Prior Task and Trajectory Co-Synthesis for Web Agents](https://awesomecua.github.io/resources/arxiv-2608-12429/) — 2026-08-12
  SynWeaver explores a website to build a map of page states and executable interactions, then learns website priors for task proposals. Joint task/trajectory synthesis revises inconsistent pairs and verifies or repairs the resulting supervision.
- [CAP: A Scalable Benchmark for Evaluating Cross-Site Browser Agents with Complex Actions and Perception](https://awesomecua.github.io/resources/arxiv-2608-08392/) — 2026-08-09
  CAP builds cross-site browser workflows by decomposing websites into operation and perception requirements and recomposing them into tasks. Its judge-based evaluation diagnoses complex interactions and visual-perception failures across real websites.
- [From Monoliths to Swarms: A Study of Attack Surface Evolution in the Transition to Multi-Agent Web Systems](https://awesomecua.github.io/resources/arxiv-2608-00202/) — 2026-07-31
  Categorizes structural attack surfaces that emerge when single-agent browser systems are decomposed into multi-agent web workflows.
- [From Blind Edits to Verified Repair: Building Trustworthy User-Side LLM Agents for Web Accessibility](https://awesomecua.github.io/resources/arxiv-2608-24913/) — 2026-07-26
  Builds a local browser-extension agent that generates and verifies additive CSS repairs for WCAG web accessibility violations.
- [Broken Gates: Re-evaluating Web Bot Defenses in the Age of LLM Agents](https://awesomecua.github.io/resources/arxiv-2607-18659/) — 2026-07-21
  Measures how autonomous LLM browser agents interact with commercial bot-management and anti-automation defenses on the web.
- [WebRetriever: A Large-Scale Comprehensive Benchmark for Efficient Web Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2607-06118/) — 2026-07-07
  WebRetriever evaluates navigation, knowledge-assisted interaction and end-to-end information-extraction workflows under separate protocols. Its NavEval judge uses richer interaction context to diagnose cases where navigation success does not translate into useful task completion.
- [Untrusted Content Masking for Web Agents with Security Guarantees](https://awesomecua.github.io/resources/arxiv-2607-05277/) — 2026-07-06
  Untrusted Content Masking uses DOM structure to redact untrusted webpage regions before agent observation. A sandboxed interaction interface separates privileges so browser actions can proceed under the proposed trust-boundary model without exposing protected content to the planner.
- [Navigation Alone Is Not Enough: Evaluating Explanatory Assistive UI Agents](https://awesomecua.github.io/resources/arxiv-2608-09944/) — 2026-07-01
  Introduces NeXUI, an assistive UI-agent benchmark that evaluates navigation together with interface-grounded explanations and user oversight in recorded interface states.
- [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://awesomecua.github.io/resources/arxiv-2606-27330/) — 2026-06-25
  PEEU explores web environments and turns hindsight experience into aligned high-level planning supervision. A hierarchical task-decomposition analysis examines why atomic-skill competence alone does not ensure planning generalization across websites.
- [Fara-1.5: Scalable Learning Environments for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-20785/) — 2026-06-18
  Builds browser-agent training trajectories with live and synthetic environments, solvers, user simulation, and complementary correctness and efficiency verifiers.
- [Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-world Web Agents](https://awesomecua.github.io/resources/arxiv-2606-13385/) — 2026-06-11
  StakeBench evaluates prompt-injection harm to different stakeholders in shopping web-agent workflows. Its executable cases separate attack objectives and assess both outcomes and execution processes to reveal how the same attack pattern can affect different parties.
- [WebChallenger: A Reliable and Efficient Generalist Web Agent](https://awesomecua.github.io/resources/arxiv-2606-10423/) — 2026-06-09
  WebChallenger builds a hierarchical DOM-derived page representation for selective observation, reusable site maps and compound actions. The framework combines these mechanisms without model fine-tuning and evaluates generalization across multiple web-agent benchmarks.
- [AliyunConsoleAgent: Training Web Agents in Real-World Cloud Environments via Distillation and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2606-09447/) — 2026-06-08
  AliyunConsoleAgent trains browser agents to verify documented procedures against changing cloud-console UIs through trajectory distillation and online GRPO. Provisioned rollout environments and backend audit-log checks support training and outcome evaluation.
- [RunAgent SuperBrowser: A Theory of Autonomous Web Navigation Grounded in Human Browsing Behaviour](https://awesomecua.github.io/resources/arxiv-2606-09399/) — 2026-06-08
  SUPERBROWSER combines screenshot-based target proposals with separate orchestration, planning and action roles. A bounded ledger and context-eviction process retain recent actions, task facts and checkpoints during browser execution.
- [AsyncWebRL: Efficient Asynchronous Reinforcement Learning for Multi-Step Visual Web Agents](https://awesomecua.github.io/resources/arxiv-2606-05597/) — 2026-06-04
  AsyncWebRL overlaps web-agent rollouts, updates and policy refresh while managing screenshot handling and a persistent rollout pool. It also replaces trajectory-length normalization in multi-step GRPO to reduce verbose failed trajectories, with throughput and out-of-distribution evaluation.
- [Online Skill Learning for Web Agents via State-Grounded Dynamic Retrieval](https://awesomecua.github.io/resources/arxiv-2606-04391/) — 2026-06-03
  State-Grounded Dynamic Retrieval extracts reusable sub-procedures from completed web trajectories and represents them as paired text and code. Skills are retrieved against both the current webpage state and the task goal at intermediate execution steps.
- [PANDO: Efficient Multimodal AI Agents via Online Skill Distillation](https://awesomecua.github.io/resources/arxiv-2605-24785/) — 2026-05-24
  Analyzes inefficiency in VisualWebArena trajectories and distills reusable online skills to reduce repeated actions and token overhead in multimodal web agents.
- [Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling](https://awesomecua.github.io/resources/arxiv-2605-21470/) — 2026-05-20
  Agent JIT compilation turns browser task descriptions into validated executable plans containing model calls, tools and parallel work. A cost-based scheduler and pre/postcondition protocol target latency and incorrect tool use in web-agent execution.
- [Weasel: Out-of-Domain Generalization for Web Agents via Importance-Diversity Data Selection](https://awesomecua.github.io/resources/arxiv-2605-20291/) — 2026-05-19
  Weasel selects web-agent training steps by balancing importance and diversity across states, sites and interaction patterns. It also prunes training accessibility trees around known action targets and regenerates rationales to match the model’s reasoning style.
- [DocOS: Towards Proactive Document-Guided Actions in GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-18048/) — 2026-05-18
  DocOS benchmarks agents that search online documentation and translate procedural instructions into GUI actions in interactive web environments. It separates failures to retrieve useful procedures from failures to ground retrieved instructions into executable actions.
- [SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?](https://awesomecua.github.io/resources/arxiv-2605-15777/) — 2026-05-15
  SaaS-Bench evaluates browser agents on professional workflows across self-hosted applications. Weighted checkpoints measure task completion and partial progress, with application-state checks and configured content judges documented in the official harness.
- [Region4Web: Rethinking Observation Space Granularity for Web Agents](https://awesomecua.github.io/resources/arxiv-2605-07134/) — 2026-05-08
  Reorganizes webpage accessibility trees into functional regions through hierarchical decomposition and semantic abstraction. PageDigest supplies a persistent region-level observation to web agents, evaluated on WebArena.
- [WAAA! Web Adversaries Against Agentic Browsers](https://awesomecua.github.io/resources/arxiv-2605-05509/) — 2026-05-06
  Evaluates agentic browsers against classical web attacks and visual social-engineering lures beyond indirect prompt injection.
- [AutoSurfer -- Teaching Web Agents through Comprehensive Surfing, Learning, and Modeling](https://awesomecua.github.io/resources/arxiv-2604-27253/) — 2026-04-29
  AutoSurfer explores website actions breadth-first, retaining page and trajectory knowledge to guide task synthesis and trajectory refinement. It evaluates the resulting training data by fine-tuning a web agent on WebArena and examining synthesized-task diversity.
- [WebUncertainty: Dual-Level Uncertainty Driven Planning and Reasoning For Autonomous Web Agent](https://awesomecua.github.io/resources/arxiv-2604-17821/) — 2026-04-20
  WebUncertainty adapts planning mode to task uncertainty and guides action-level tree search with confidence-derived uncertainty estimates. Its evaluations examine autonomous execution of dynamic, long-horizon web tasks on WebArena and WebVoyager.
- [WebXSkill: Skill Learning for Autonomous Web Agents](https://awesomecua.github.io/resources/arxiv-2604-13318/) — 2026-04-14
  WebXSkill pairs parameterized action programs with step-level language guidance, mining reusable skills from synthetic browser-agent traces. A URL-based graph supports retrieval, and deployment alternates between direct program execution and guided native planning.
- [WebForge: Breaking the Realism-Reproducibility-Scalability Trilemma in Browser Agent Benchmark](https://awesomecua.github.io/resources/arxiv-2604-10988/) — 2026-04-13
  Presents WebForge, a pipeline that plans, generates, refines and validates self-contained interactive websites. WebForge-Bench uses these environments to evaluate browser agents across domains and controlled difficulty levels.
- [MolmoWeb: Open Visual Web Agent and Open Data for the Open Web](https://awesomecua.github.io/resources/arxiv-2604-08516/) — 2026-04-09
  Presents MolmoWebMix, combining synthetic browser trajectories, human demonstrations and GUI perception data, and MolmoWeb screenshot-to-action policies trained from it. Browser benchmarks also test parallel rollouts with best-of-N selection.
- [WebSP-Eval: Evaluating Web Agents on Website Security and Privacy Tasks](https://awesomecua.github.io/resources/arxiv-2604-06367/) — 2026-04-07
  WebSP-Eval evaluates agents carrying out website security and privacy tasks such as preference changes and session management. A browser extension controls account and initial state across runs, enabling analysis of failures on stateful UI controls.
- [Poison Once, Exploit Forever: Environment-Injected Memory Poisoning Attacks on Web Agents](https://awesomecua.github.io/resources/arxiv-2604-02623/) — 2026-04-03
  Studies persistent web-agent memory contamination introduced through environmental observations instead of direct memory access. Experiments on WebArena and VisualWebArena examine cross-session effects and how interaction failures alter susceptibility.
- [Emergence WebVoyager: Toward Consistent and Transparent Evaluation of (Web) Agents in The Wild](https://awesomecua.github.io/resources/arxiv-2603-29020/) — 2026-03-30
  Audits sources of ambiguity and operational variation in WebVoyager evaluation and introduces standardized guidance for task setup, failure handling, annotation and reporting. Emergence WebVoyager applies this protocol to a web-agent evaluation.
- [WebTestBench: Evaluating Computer-Use Agents towards End-to-End Automated Web Testing](https://awesomecua.github.io/resources/arxiv-2603-25226/) — 2026-03-26
  Introduces WebTestBench for end-to-end website testing, separating checklist generation from defect detection. Its WebTester baseline evaluates test coverage, detection and sustained interaction across web application categories.
- [The Cognitive Firewall:Securing Browser Based AI Agents Against Indirect Prompt Injection Via Hybrid Edge Cloud Defense](https://awesomecua.github.io/resources/arxiv-2603-23791/) — 2026-03-24
  Proposes a split-compute browser defense pairing a local visual sentinel, a cloud planner, and deterministic policy enforcement against indirect prompt injection.
- [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://awesomecua.github.io/resources/arxiv-2603-22529/) — 2026-03-23
  Ego2Web pairs first-person videos with online tasks that require agents to connect the user’s physical context to web actions. It also evaluates an automatic task judge against human judgments and analyzes failures in video understanding and web execution.
- [ContractSkill: Repairable Contract-Based Skills for Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2603-20340/) — 2026-03-20
  Turns draft web-agent skills into structured executable artifacts that support deterministic checks, fault localization and local repair. VisualWebArena and MiniWoB experiments examine execution and reuse within the same benchmark family.
- [ClawTrap: A MITM-Based Red-Teaming Framework for Real-World OpenClaw Security Evaluation](https://awesomecua.github.io/resources/arxiv-2603-18762/) — 2026-03-19
  Presents a man-in-the-middle network red-teaming framework for evaluating autonomous OpenClaw agents under live traffic manipulation.
- [WebFactory: Automated Compression of Foundational Language Intelligence into Grounded Web Agents](https://awesomecua.github.io/resources/arxiv-2603-05044/) — 2026-03-05
  Introduces WebFactory, a GUI-agent training pipeline that synthesizes websites, generates tasks and trajectories, and trains with decomposed rewards. Offline and online transfer evaluations examine agents trained on the generated environments.
- [TimeWarp: Evaluating Web Agents by Revisiting the Past](https://awesomecua.github.io/resources/arxiv-2603-04949/) — 2026-03-05
  TimeWarp tests web agents across multiple versions of the same sites, varying visual design, frontend code and workflows. TimeTraj transfers plans across versions to collect training trajectories and study robustness to interface change.
- [Atomicity for Agents: Exposing, Exploiting, and Mitigating TOCTOU Vulnerabilities in Browser-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-00476/) — 2026-02-28
  Identifies time-of-check to time-of-use (TOCTOU) race vulnerabilities when web pages mutate between agent planning and action execution.
- [ActionEngine: From Reactive to Programmatic Web Agents via State Machine Memory](https://awesomecua.github.io/resources/arxiv-2602-20502/) — 2026-02-24
  ActionEngine explores web applications to build an updateable state-machine memory of GUI states, operations and transitions. It generates complete task programs from that memory, using reactive repair to handle changed interfaces or missing knowledge.
- [Modeling Distinct Human Interaction in Web Agents](https://awesomecua.github.io/resources/arxiv-2602-17588/) — 2026-02-19
  CowCorpus records interleaved human and agent actions during web navigation and identifies distinct patterns of user intervention. Models trained to anticipate these interventions are integrated into live web agents and assessed in a user study.
- [Persona2Web: Benchmarking Personalized Web Agents for Contextual Reasoning with User History](https://awesomecua.github.io/resources/arxiv-2602-17003/) — 2026-02-19
  Persona2Web tests whether web agents can resolve ambiguous requests using preferences implicit in a user’s history. Its reasoning-aware evaluation compares agent architectures and history-access strategies on personalized tasks on the open web.
- [EmbeWebAgent: Embedding Web Agents into Any Customized UI](https://awesomecua.github.io/resources/arxiv-2602-14865/) — 2026-02-16
  EmbeWebAgent embeds agent access into existing web applications through frontend observations and a page-specific function registry. Its workflow combines GUI primitives, composite actions and MCP tools, demonstrated in a live interface.
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.github.io/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.github.io/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [SPILLage: Agentic Oversharing on the Web](https://awesomecua.github.io/resources/arxiv-2602-13516/) — 2026-02-13
  Formalizes and measures natural agentic oversharing when browser agents handle private user emails and calendars across live websites.
- [Scaling Web Agent Training through Automatic Data Generation and Fine-grained Evaluation](https://awesomecua.github.io/resources/arxiv-2602-12544/) — 2026-02-13
  This work uses constraint-based progress evaluation to retain partially successful web trajectories for training. It introduces BookingArena for structured booking tasks and studies a distilled agent trained with the resulting data.
- [Agentic Test-Time Scaling for WebAgents](https://awesomecua.github.io/resources/arxiv-2602-12276/) — 2026-02-12
  CATTS allocates additional inference computation when an agent’s action votes show uncertainty. The paper compares voting and arbiter strategies and evaluates this selective scaling on WebArena-Lite, Online-Mind2Web and GoBrowse.
- [Do Web Agents Investigate Before They Decide?](https://awesomecua.github.io/resources/arxiv-2602-05354/) — 2026-02-05
  Introduces MIRAGE, a web decision benchmark where agents must actively uncover evidence that can contradict the visible context. Separate investigation, reasoning, decision, and hallucination measures diagnose failures beyond reaching the right page.
- [WebSentinel: Detecting and Localizing Prompt Injection Attacks for Web Agents](https://awesomecua.github.io/resources/arxiv-2602-03792/) — 2026-02-03
  WebSentinel identifies suspicious webpage segments and checks each against its surrounding page context to detect and locate prompt injections. Its evaluation uses both contaminated and clean webpage datasets.
- [Avenir-Web: Human-Experience-Imitating Multimodal Web Agents with Mixture of Grounding Experts](https://awesomecua.github.io/resources/arxiv-2602-02468/) — 2026-02-02
  Avenir-Web combines multiple grounding specialists with procedural experience, a task checklist and adaptive memory. It evaluates this planning and execution framework on live Online-Mind2Web tasks.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [How do Visual Attributes Influence Web Agents? A Comprehensive Evaluation of User Interface Design Factors](https://awesomecua.github.io/resources/arxiv-2601-21961/) — 2026-01-29
  Introduces VAF, a controlled pipeline that varies webpage appearance while retaining item semantics. It measures both agent clicks and reasoning references to study which visual design factors change browsing decisions.
- [WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-21872/) — 2026-01-29
  WebArbiter generates reasoned action-preference verdicts for web navigation, using reasoning distillation followed by reinforcement learning. It introduces WebPRMBench and evaluates both preference judgments and reward-guided trajectory search.
- [ExpSeek: Self-Triggered Experience Seeking for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08605/) — 2026-01-13
  ExpSeek uses step-level entropy signals to decide when a web agent should request experience-based guidance. It supplies guidance tailored to the current step and evaluates the intervention across web-agent benchmarks.
- [WebTrap Park: An Automated Platform for Systematic Security Evaluation of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-08406/) — 2026-01-13
  Introduces WebTrap Park, a platform that turns web-agent security risks into executable tasks and assesses concrete interactions with live pages. It compares agent frameworks without requiring modifications to their implementations.
- [When Bots Take the Bait: Exposing and Mitigating the Emerging Social Engineering Attack in Web Automation Agent](https://awesomecua.github.io/resources/arxiv-2601-07263/) — 2026-01-12
  Studies deceptive social-engineering web patterns targeting browser automation agents and proposes defenses against bait-based manipulation.
- [ColorBrowserAgent: Complex Long-Horizon Browser Agent with Adaptive Knowledge Evolution](https://awesomecua.github.io/resources/arxiv-2601-07262/) — 2026-01-12
  ColorBrowserAgent converts human feedback into reusable website knowledge and uses that knowledge to guide progressive context summaries. It evaluates the resulting memory and adaptation mechanisms on long browser workflows.
- [WebGym: Scaling Training Environments for Visual Web Agents with Realistic Tasks](https://awesomecua.github.io/resources/arxiv-2601-02439/) — 2026-01-05
  WebGym supplies realistic web tasks with rubric-based evaluation and an asynchronous rollout system for reinforcement learning. It studies how training on an agent’s own interaction traces scales with task coverage and transfers to unseen websites.
- [Nested Browser-Use Learning for Agentic Information Seeking](https://awesomecua.github.io/resources/arxiv-2512-23647/) — 2025-12-29
  NestBrowse organizes browser actions in a nested framework that separates interaction control from page exploration. It evaluates this design for deep information seeking beyond snippet retrieval and direct URL fetching.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.github.io/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [Privacy Practices of Browser Agents](https://awesomecua.github.io/resources/arxiv-2512-07725/) — 2025-12-08
  Presents a privacy evaluation framework for browser agents covering component weaknesses, website defenses, tracking, privacy-related prompts and personal-data leakage. The framework is applied to deployed browser-agent tools.
- [LegalWebAgent: Empowering Access to Justice via LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2512-04105/) — 2025-11-28
  LegalWebAgent separates user-needs clarification, webpage browsing, and actions such as form completion or scheduling. A 15-task evaluation studies legal-service workflows relevant to Québec civil-law users, using HTML and screenshot observations.
- [Fara-7B: An Efficient Agentic Model for Computer Use](https://awesomecua.github.io/resources/arxiv-2511-19663/) — 2025-11-24
  Introduces FaraGen synthetic web trajectories, a compact screenshot-based action model, and WebTailBench for underrepresented browser tasks.
- [Building Browser Agents: Architecture, Security, and Practical Solutions](https://awesomecua.github.io/resources/arxiv-2511-19477/) — 2025-11-22
  Reports architectural and security lessons from building a browser agent, including hybrid accessibility-tree and visual context, browser tooling and programmatic constraints. A WebGames evaluation accompanies the discussion of reliability and specialization.
- [WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance](https://awesomecua.github.io/resources/arxiv-2511-12997/) — 2025-11-17
  Introduces WebCoach, which condenses navigation logs into persistent episodic memory and retrieves experiences by similarity and recency. Runtime hooks selectively supply advice to browser agents, evaluated on WebVoyager without retraining the underlying models.
- [SynthAgent: Adapting Web Agents with Synthetic Supervision](https://awesomecua.github.io/resources/arxiv-2511-06101/) — 2025-11-08
  Introduces SynthAgent, which generates tasks by exploring website elements and refines them when observations reveal conflicts. A later trajectory-refinement stage removes misaligned behavior before fine-tuning agents for the target websites.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.github.io/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [HackWorld: Evaluating Computer-Use Agents on Exploiting Web Application Vulnerabilities](https://awesomecua.github.io/resources/arxiv-2510-12200/) — 2025-10-14
  Introduces HackWorld for evaluating visual computer-use agents in a capture-the-flag collection of web applications. The benchmark examines interface navigation and multistep planning during vulnerability discovery and exploitation tasks.
- [BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://awesomecua.github.io/resources/arxiv-2510-10666/) — 2025-10-12
  Trains BrowserAgent to use Playwright-based scrolling, clicking and typing directly on webpages for information-seeking tasks. Supervised and rejection fine-tuning are paired with explicit memory for conclusions carried across steps.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.github.io/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [JEF-Hinter: Leveraging Offline Knowledge for Improving Web Agents Adaptation](https://awesomecua.github.io/resources/arxiv-2510-04373/) — 2025-10-05
  Introduces JEF-Hinter, which distills successful and failed trajectories into compact episodic hints and retrieves them for the current agent state. Web benchmark experiments examine guidance from decisive steps rather than full demonstration replay.
- [BrowserArena: Evaluating LLM Agents on Real-World Web Navigation Tasks](https://awesomecua.github.io/resources/arxiv-2510-02418/) — 2025-10-02
  Introduces BrowserArena, a live-web platform for head-to-head agent comparisons on user-submitted tasks. Step-level human annotations support targeted analysis of navigation, pop-up handling and CAPTCHA-related failures.
- [WALT: Web Agents that Learn Tools](https://awesomecua.github.io/resources/arxiv-2510-01524/) — 2025-10-01
  WALT explores website functionality and converts demonstrated interactions into validated, reusable tools combining DOM actions, URL navigation, and agentic fallbacks. It evaluates this expanded browser action space on WebArena and VisualWebArena.
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://awesomecua.github.io/resources/arxiv-2509-25140/) — 2025-09-29
  Distills generalizable reasoning strategies from both successful and failed agent trajectories into a persistent memory bank for test-time retrieval.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [WAREX: Web Agent Reliability Evaluation on Existing Benchmarks](https://awesomecua.github.io/resources/arxiv-2510-03285/) — 2025-09-28
  WAREX augments existing web-agent benchmarks with reliability challenges arising from unstable systems and changing or disruptive website behavior. Evaluation on WebArena, WebVoyager and REAL examines how these disturbances affect task completion.
- [Detecting Pipeline Failures through Fine-Grained Analysis of Web Agents](https://awesomecua.github.io/resources/arxiv-2509-14382/) — 2025-09-17
  Introduces a modular framework for identifying errors at intermediate stages of a web-agent pipeline. A SeeAct and Mind2Web case study examines weaknesses that are obscured by final task-success metrics.
- [TGPO: Tree-Guided Preference Optimization for Robust Web Agent Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-14172/) — 2025-09-17
  TGPO merges semantically equivalent web states into tree-structured trajectories for offline preference optimization. A process reward model scores subgoal progress, redundant behavior, and action validity, while dynamic weighting emphasizes consequential decisions.
- [PrivWeb: Unobtrusive and Content-aware Privacy Protection For Web Agents](https://awesomecua.github.io/resources/arxiv-2509-11939/) — 2025-09-15
  Introduces PrivWeb, which uses a local language model to anonymize interface information according to user preferences. Adaptive notifications and selective pauses give users control over sensitive information access during web-agent tasks.
- [Morae: Proactively Pausing UI Agents for User Choices](https://awesomecua.github.io/resources/arxiv-2508-21456/) — 2025-08-29
  Introduces Morae, a UI agent that detects decision points and pauses for user choices using interface code and screenshots. A study with blind and low-vision participants evaluates this mixed-initiative approach on real web tasks.
- [WebSight: A Vision-First Architecture for Robust Web Agents](https://awesomecua.github.io/resources/arxiv-2508-16987/) — 2025-08-23
  WebSight uses a vision-language model trained on web-interface examples within a modular agent with planning, action, verification, and episodic memory components. It evaluates element clicking on Showdown Clicks and full browsing tasks on WebVoyager using visual observations.
- [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://awesomecua.github.io/resources/arxiv-2508-15832/) — 2025-08-18
  Amazon-Bench generates functionality-specific web tasks from page content and interactive controls, covering operations beyond product search. Its evaluator checks task completion and unintended changes to account state, such as address or purchase settings.
- [WebMall -- A Multi-Shop Benchmark for Evaluating Web Agents](https://awesomecua.github.io/resources/arxiv-2508-13024/) — 2025-08-18
  WebMall provides four simulated online shops with heterogeneous product data for comparison shopping, related-product searches, and checkout tasks. It evaluates web agents with different observation formats and memory configurations in a fixed offline environment.
- [Cognitive Duality for Adaptive Web Agents](https://awesomecua.github.io/resources/arxiv-2508-05081/) — 2025-08-07
  Introduces CogniWeb, which switches between fast reactive processing and slower deliberative reasoning according to task complexity. WebArena experiments examine this combination of learned behaviors and online planning.
- [Beyond Pixels: Exploring DOM Downsampling for LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2508-04412/) — 2025-08-06
  D2Snap reduces serialized DOM observations while preserving actionable elements and features that distinguish their uses. The study compares reduced DOM inputs with screenshot-based observations for a web agent on tasks sampled from Online-Mind2Web.
- [Web-CogReasoner: Towards Multimodal Knowledge-Induced Cognitive Reasoning for Web Agents](https://awesomecua.github.io/resources/arxiv-2508-01858/) — 2025-08-03
  Web-CogReasoner separates factual and conceptual web knowledge from procedural reasoning, using a structured curriculum to train a multimodal agent. Web-CogDataset and Web-CogBench support study of these capabilities alongside web-navigation evaluation.
- [Magentic-UI: Towards Human-in-the-loop Agentic Systems](https://awesomecua.github.io/resources/arxiv-2507-22358/) — 2025-07-30
  Magentic-UI combines browser interaction, code execution, file operations, and MCP tools in an interface for human-agent collaboration. It studies collaborative planning and task execution, action guards, and persistent memory through benchmark tasks, simulated users, user studies, and safety assessments.
- [Manipulating LLM Web Agents with Indirect Prompt Injection Attack via HTML Accessibility Tree](https://awesomecua.github.io/resources/arxiv-2507-14799/) — 2025-07-20
  Studies indirect prompt injection through HTML content consumed as accessibility trees. The evaluation tests how manipulated page observations redirect browser-agent actions on real websites.
- [R-VLM: Region-Aware Vision Language Model for Precise GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-05673/) — 2025-07-08
  R-VLM localizes GUI elements through zoomed-in region proposals and an intersection-over-union-aware training objective. It evaluates the grounding model on ScreenSpot and AgentStudio and studies its effect on navigation in AITW and Mind2Web.
- [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.github.io/resources/arxiv-2507-03730/) — 2025-07-04
  SimpAgent prunes distracting interface elements with visual masks and compresses interaction history using consistency-based guidance. The study evaluates these two forms of context reduction during GUI navigation in web and mobile environments.
- [WebArxiv: A Reproducible Benchmark for Evaluating Multimodal Web Agents on arXiv Tasks](https://awesomecua.github.io/resources/arxiv-2507-00938/) — 2025-07-01
  WebArxiv provides 510 static-snapshot tasks with deterministic answers for scholarly browsing, including constrained paper retrieval, content extraction, and cross-paper comparison. The study also tests dynamic retrieval of interaction history to address repetitive or incomplete agent reasoning.
- [LineRetriever: Planning-Aware Observation Reduction for Web Agents](https://awesomecua.github.io/resources/arxiv-2507-00210/) — 2025-06-30
  LineRetriever uses a language model to select observation lines that matter for upcoming web-navigation actions. It reduces DOM or accessibility-tree context by considering the planning horizon instead of relying solely on semantic similarity.
- [Embodied Web Agents: Bridging Physical-Digital Realms for Integrated Agent Intelligence](https://awesomecua.github.io/resources/arxiv-2506-15677/) — 2025-06-18
  Introduces environments that couple 3D physical-world simulations with functional web interfaces. The accompanying benchmark evaluates tasks requiring agents to coordinate online information and physical actions across cooking, navigation and shopping scenarios.
- [Mirage-1: Augmenting and Updating GUI Agent with Hierarchical Multimodal Skills](https://awesomecua.github.io/resources/arxiv-2506-10387/) — 2025-06-12
  Mirage-1 organizes interaction trajectories into execution, core, and meta-skills, then uses them to guide Monte Carlo tree search during online GUI tasks. It introduces AndroidLH for long-horizon evaluation and tests the approach on Android and web-navigation benchmarks.
- [EconWebArena: Benchmarking Autonomous Agents on Economic Tasks in Realistic Web Environments](https://awesomecua.github.io/resources/arxiv-2506-08136/) — 2025-06-09
  Introduces EconWebArena, a curated benchmark of economic-data tasks requiring live website navigation, multimodal interpretation, and precise extraction. It evaluates visual grounding, planning, and interaction design within multistep workflows.
- [Thinking vs. Doing: Agents that Reason by Scaling Test-Time Interaction](https://awesomecua.github.io/resources/arxiv-2506-07976/) — 2025-06-09
  Test-Time Interaction scales the interaction horizon so web agents can explore, backtrack and revise plans within a rollout. Its online reinforcement-learning curriculum adjusts rollout lengths and is evaluated on WebVoyager and WebArena.
- [Go-Browse: Training Web Agents with Structured Exploration](https://awesomecua.github.io/resources/arxiv-2506-03533/) — 2025-06-04
  Go-Browse frames web-environment exploration as graph search so that information can be reused across data-collection episodes. It collects 10,000 successful trajectories and 40,000 interaction steps on WebArena and uses them to fine-tune a web agent.
- [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.github.io/resources/arxiv-2506-02865/) — 2025-06-03
  Describes Surfer-H, a web agent paired with the Holo1 vision-language model family trained on web content, synthetic examples, and agent-generated data. The work introduces WebClick for web-interface localization and evaluates browser task execution on WebVoyager.
- [DeepShop: A Benchmark for Deep Research Shopping Agents](https://awesomecua.github.io/resources/arxiv-2506-02839/) — 2025-06-03
  DeepShop evaluates shopping agents with evolving query complexity across product attributes, filters and sorting preferences. Its evaluation combines checks of these individual requirements with overall task success.
- [Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents](https://awesomecua.github.io/resources/arxiv-2505-24878/) — 2025-05-30
  Open CaptchaWorld evaluates multimodal agents on interactive browser-based CAPTCHA puzzles. Its benchmark distinguishes task success from the depth of visual reasoning and interaction needed to complete a puzzle.
- [AdInject: Real-World Black-Box Attacks on Web Agents via Advertising Delivery](https://awesomecua.github.io/resources/arxiv-2505-21499/) — 2025-05-27
  Studies advertising delivery as an indirect-injection channel for web agents under a black-box threat model. AdInject evaluates how static ad content shaped by website context can redirect browser actions.
- [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.github.io/resources/arxiv-2505-20013/) — 2025-05-26
  WebCoT turns reflection, look-ahead, branching and rollback procedures into chain-of-thought training rationales. Fine-tuning on these reconstructed trajectories is evaluated for web-agent self-improvement and transfer across navigation tasks.
- [WebAgent-R1: Training Web Agents via End-to-End Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2505-16421/) — 2025-05-22
  Trains web agents through asynchronous multi-turn environment interaction, using task-success rewards to optimize complete trajectories.
- [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.github.io/resources/arxiv-2505-15277/) — 2025-05-21
  Web-Shepherd is a process reward model for assessing individual steps of web-navigation trajectories. It introduces a collection of 40,000 step-level preference pairs with checklists and a separate benchmark for comparing reward models, then evaluates verification during WebArena-lite navigation.
- [The Hidden Dangers of Browsing AI Agents](https://awesomecua.github.io/resources/arxiv-2505-13076/) — 2025-05-19
  Outlines an end-to-end threat model and empirical security evaluation across architectural layers of autonomous browser agents.
- [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.github.io/resources/arxiv-2505-00684/) — 2025-05-01
  RegionFocus adds visual test-time scaling by zooming into selected screenshot regions and maintaining an image-based map of landmarks and actions. It evaluates this grounding procedure with UI-TARS and Qwen2.5-VL on ScreenSpot-Pro and WebVoyager.
- [WebThinker: Empowering Large Reasoning Models with Deep Research Capability](https://awesomecua.github.io/resources/arxiv-2504-21776/) — 2025-04-30
  Combines iterative web search and link-following with interleaved reasoning and report drafting for deep research. Its reported web explorer retrieves page content through a crawler rather than controlling a visual browser interface.
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.github.io/resources/arxiv-2504-21024/) — 2025-04-23
  WebEvolver trains a co-evolving world model to predict web observations and generate additional agent-training trajectories. The same model supports look-ahead action selection at inference, with evaluation on live web-task benchmarks.
- [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://awesomecua.github.io/resources/arxiv-2504-18575/) — 2025-04-22
  Introduces WASP, an end-to-end benchmark for prompt-injection security in web agents. Its evaluation separates partial attack progress from completion of the attacker’s full objective.
- [WebRollback: Enhancing Web Agents with Explicit Rollback Mechanisms](https://awesomecua.github.io/resources/arxiv-2504-11788/) — 2025-04-16
  WebRollback gives a web agent an explicit action for returning to an earlier state in its navigation trajectory. It studies this recovery mechanism on two live web-navigation benchmarks under both zero-shot and fine-tuned settings.
- [AgentRewardBench: Evaluating Automatic Evaluations of Web Agent Trajectories](https://awesomecua.github.io/resources/arxiv-2504-08942/) — 2025-04-11
  AgentRewardBench evaluates automated web-agent judges against expert reviews of 1,302 trajectories from five benchmarks. The annotations cover completion, side effects, and repetition, enabling comparison of LLM judges and rule-based task evaluators.
- [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://awesomecua.github.io/resources/arxiv-2504-07079/) — 2025-04-09
  SkillWeaver explores websites, practices interactions, and converts the resulting experience into a reusable library of callable skill APIs. Its WebArena and live-website experiments examine skill refinement, composition, and transfer from stronger agents to weaker ones.
- [Are Autonomous Web Agents Good Testers?](https://awesomecua.github.io/resources/arxiv-2504-01495/) — 2025-04-02
  Adapts web agents to execute natural-language test steps, verify assertions, and issue test verdicts. The study introduces 113 passing and failing test cases across three offline web applications and compares two agent implementations with qualitative failure analysis.
- [An Illusion of Progress? Assessing the Current State of Web Agents](https://awesomecua.github.io/resources/arxiv-2504-01382/) — 2025-04-02
  Introduces Online-Mind2Web, with 300 tasks across 136 live websites, and examines how benchmark design affects assessments of web agents. It also develops an LLM judge for task completion and compares its judgments with human evaluation.
- [A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation with Large Foundation Models](https://awesomecua.github.io/resources/arxiv-2503-23350/) — 2025-03-30
  Surveys foundation-model web agents through their architectures, training methods and trustworthiness. It organizes research on completing browser tasks from user instructions and identifies directions for further development.
- [BEARCUBS: A benchmark for computer-using web agents](https://awesomecua.github.io/resources/arxiv-2503-07919/) — 2025-03-10
  BEARCUBS provides 111 live-web information-seeking questions with short answers and human-validated browsing trajectories. Its tasks require multimodal computer interaction, including video understanding and navigation of interactive 3D content.
- [LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications](https://awesomecua.github.io/resources/arxiv-2503-02950/) — 2025-03-04
  Introduces a modular visual web-agent stack with planning and memory components, exposed through a remote-browser application and Chrome extension.
- [Why Are Web AI Agents More Vulnerable Than Standalone LLMs? A Security Analysis](https://awesomecua.github.io/resources/arxiv-2502-20383/) — 2025-02-27
  Analyzes web-agent vulnerabilities at the component level, examining goal placement in prompts, multistep action generation, and observations as sources of increased susceptibility.
- [Explorer: Scaling Exploration-driven Web Trajectory Synthesis for Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2502-11357/) — 2025-02-17
  Synthesizes multimodal web trajectories through exploration and refinement, then trains a browser agent to study the effect of scaling interaction data.
- [Symbiotic Cooperation for Web Agents: Harnessing Complementary Strengths of Large and Small LLMs](https://awesomecua.github.io/resources/arxiv-2502-07942/) — 2025-02-11
  Couples large- and small-model web-agent exploration with trajectory synthesis and distillation to improve both model types iteratively.
- [CowPilot: A Framework for Autonomous and Human-Agent Collaborative Web Navigation](https://awesomecua.github.io/resources/arxiv-2501-16609/) — 2025-01-28
  Introduces CowPilot, a web-navigation framework where agents suggest actions and users can pause, reject, override, or resume them. It evaluates autonomous and collaborative use through task success and human effort.
- [WebWalker: Benchmarking LLMs in Web Traversal](https://awesomecua.github.io/resources/arxiv-2501-07572/) — 2025-01-13
  Introduces WebWalkerQA and an exploration-and-critique framework for gathering information by traversing multiple levels of a website.
- [Proposer-Agent-Evaluator(PAE): Autonomous Skill Discovery For Foundation Model Internet Agents](https://awesomecua.github.io/resources/arxiv-2412-13194/) — 2024-12-17
  Combines autonomous task proposal, web interaction, and visual success evaluation to discover skills and improve browser-agent policies.
- [WEPO: Web Element Preference Optimization for LLM-based Web Navigation](https://awesomecua.github.io/resources/arxiv-2412-10742/) — 2024-12-14
  Uses web-element preference optimization with sampled negative HTML elements to align high-level user intent with navigation actions.
- [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://awesomecua.github.io/resources/arxiv-2412-09605/) — 2024-12-12
  Converts public tutorials into task specifications and executes them with an agent to synthesize multimodal interaction trajectories.
- [ScribeAgent: Towards Specialized Web Agents Using Production-Scale Workflow Data](https://awesomecua.github.io/resources/arxiv-2411-15004/) — 2024-11-22
  Studies fine-tuning open language models on production web-workflow traces, including training choices for specialized web agents.
- [AdaptAgent: Adapting Multimodal Web Agents with Few-Shot Learning from Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2411-13451/) — 2024-11-20
  Adapts multimodal web agents to unfamiliar websites using a small number of human demonstrations through prompting or meta-learning.
- [Generalist Virtual Agents: A Survey on Autonomous Agents Across Digital Platforms](https://awesomecua.github.io/resources/arxiv-2411-10943/) — 2024-11-17
  Surveys virtual agents for browsers, applications and operating systems, organizing prior work by task type, observation and action spaces, model strategies and evaluation methods. It examines screen-based interaction and keyboard, mouse and touch control, alongside transferability and long-sequence decision-making challenges.
- [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2411-02337/) — 2024-11-04
  Trains web agents with an evolving task curriculum, outcome supervision, and reinforcement-learning updates intended to manage policy drift.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.github.io/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [Auto-Intent: Automated Intent Discovery and Self-Exploration for Large Language Model Web Agents](https://awesomecua.github.io/resources/arxiv-2410-22552/) — 2024-10-29
  Discovers compact intents from demonstrations and uses intent predictions to guide a language-model web agent's decisions and exploration.
- [OpenWebVoyager: Building Multimodal Web Agents via Iterative Real-World Exploration, Feedback and Optimization](https://awesomecua.github.io/resources/arxiv-2410-19609/) — 2024-10-25
  Develops multimodal browser agents through repeated cycles of real-web exploration, trajectory feedback, and policy optimization.
- [Beyond Browsing: API-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2410-16464/) — 2024-10-21
  Compares browsing-only, API-only, and hybrid web agents on WebArena, examining how access to application APIs changes task execution alongside browser interaction.
- [AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2410-13825/) — 2024-10-17
  Studies how simplifying and aligning a web agent's observations and actions with language-model capabilities affects task completion.
- [NNetNav: Unsupervised Learning of Browser Agents Through Environment Interaction in the Wild](https://awesomecua.github.io/resources/arxiv-2410-02907/) — 2024-10-03
  Generates browser-agent demonstrations through autonomous exploration and retrospective task labeling, pruning trajectories that lack meaningful subtasks.
- [Multimodal Auto Validation For Self-Refinement in Web Agents](https://awesomecua.github.io/resources/arxiv-2410-00689/) — 2024-10-01
  Studies text and visual validation for web agents and uses the resulting validator to detect failures and guide workflow self-refinement.
- [Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-15637/) — 2024-09-24
  Synatra converts indirect procedural knowledge, including human-oriented tutorials, into direct demonstrations for digital agents. It trains a 7B CodeLlama on 100,000 synthesized demonstrations and evaluates the resulting policy on Mind2Web, MiniWoB++, and WebArena.
- [Steward: Natural Language Web Automation](https://awesomecua.github.io/resources/arxiv-2409-15441/) — 2024-09-23
  Introduces Steward, a natural-language browser automation system that repeatedly plans and executes website actions. The paper examines completion detection, state representation, responsiveness, and caching in real-site tasks.
- [EIA: Environmental Injection Attack on Generalist Web Agents for Privacy Leakage](https://awesomecua.github.io/resources/arxiv-2409-11295/) — 2024-09-17
  Evaluates privacy-directed webpage instruction injection against generalist web agents using PII-related interaction steps from Mind2Web, including attempts to expose specific user information or entire requests.
- [NaviQAte: Functionality-Guided Web Application Navigation](https://awesomecua.github.io/resources/arxiv-2409-10741/) — 2024-09-16
  Frames web-application exploration as functionality-oriented question answering, generating navigation actions from multimodal context.
- [Agent Workflow Memory](https://awesomecua.github.io/resources/arxiv-2409-07429/) — 2024-09-11
  Agent Workflow Memory extracts reusable task routines and selectively supplies them to guide later web actions. It studies both offline workflow induction from training examples and online induction from test experience on Mind2Web and WebArena.
- [WebPilot: A Versatile and Autonomous Multi-Agent System for Web Task Execution with Strategic Exploration](https://awesomecua.github.io/resources/arxiv-2408-15978/) — 2024-08-28
  WebPilot separates global subtask planning from local Monte Carlo tree search during web execution. It continually refines the high-level plan and adapts local search to uncertain transitions and incomplete observations, evaluated on WebArena and MiniWoB++.
- [AssistantBench: Can Web Agents Solve Realistic and Time-Consuming Tasks?](https://awesomecua.github.io/resources/arxiv-2407-15711/) — 2024-07-22
  Introduces realistic open-web tasks and the SeePlanAct agent, analyzing the limitations of browsing and retrieval in time-consuming assistant work.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.github.io/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [Tree Search for Language Model Agents](https://awesomecua.github.io/resources/arxiv-2407-01476/) — 2024-07-01
  Applies best-first search to agent actions within interactive web environments, allowing exploration and multistep planning at inference time. WebArena and VisualWebArena experiments examine search behavior and test-time computation.
- [WebCanvas: Benchmarking Web Agents in Online Environments](https://awesomecua.github.io/resources/arxiv-2406-12373/) — 2024-06-18
  Introduces WebCanvas and Mind2Web-Live, evaluating online task progress through meaningful intermediate states on changing websites.
- [CAAP: Context-Aware Action Planning Prompting to Solve Computer Tasks with Front-End UI Only](https://awesomecua.github.io/resources/arxiv-2406-06947/) — 2024-06-11
  CAAP converts screenshots into textual observations and plans keyboard-and-mouse actions using a prompt that examines task context from multiple perspectives. The agent is evaluated on MiniWoB++ and WebShop using only front-end visual observations.
- [WebSuite: Systematically Evaluating Why Web Agents Fail](https://awesomecua.github.io/resources/arxiv-2406-01623/) — 2024-06-01
  WebSuite organizes browser operations into an action taxonomy and tests both isolated controls and complete workflows. Its diagnostic tasks attribute failures to specific actions, enabling comparison of text-based and multimodal web agents.
- [Large Language Models Can Self-Improve At Web Agent Tasks](https://awesomecua.github.io/resources/arxiv-2405-20309/) — 2024-05-30
  Examines self-improvement by fine-tuning web agents on three mixtures of model-generated training data. WebArena experiments and trajectory-level evaluation measures study task performance, robustness, and behavior beyond aggregate success rates.
- [Navigating WebAI: Training Agents to Complete Web Tasks with Large Language Models and Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2405-00516/) — 2024-05-01
  Combines supervised and reinforcement learning for MiniWoB web tasks and investigates whether agents understand HTML structure or memorize target elements.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.github.io/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [WILBUR: Adaptive In-Context Learning for Robust and Accurate Web Agents](https://awesomecua.github.io/resources/arxiv-2404-05902/) — 2024-04-08
  WILBUR learns to rank prior task demonstrations for a web agent’s prompt and synthesizes instructions from past runs. A generated task curriculum and a backtracking mechanism support adaptation and recovery, evaluated on WebVoyager.
- [AutoWebGLM: A Large Language Model-based Web Navigating Agent](https://awesomecua.github.io/resources/arxiv-2404-03648/) — 2024-04-04
  Builds a web agent through simplified HTML observations, human-and-AI browsing data, curriculum training, and reinforcement-learning refinement.
- [Tur\[k\]ingBench: A Challenge Benchmark for Web Agents](https://awesomecua.github.io/resources/arxiv-2403-11905/) — 2024-03-18
  Evaluates web agents on multimodal annotation tasks adapted from HTML interfaces originally built for crowdsourcing workers.
- [WIPI: A New Web Threat for LLM-Driven Web Agents](https://awesomecua.github.io/resources/arxiv-2402-16965/) — 2024-02-26
  Studies WIPI, a black-box indirect-instruction threat in which webpage content redirects LLM-driven web agents. Evaluation spans plugin-based agents, Web GPTs, and open-source web-agent implementations.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.github.io/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [WebLINX: Real-World Website Navigation with Multi-Turn Dialogue](https://awesomecua.github.io/resources/arxiv-2402-05930/) — 2024-02-08
  Collects expert demonstrations of conversational web navigation and studies retrieval-based element selection for processing large pages.
- [Dual-View Visual Contextualization for Web Navigation](https://awesomecua.github.io/resources/arxiv-2402-04476/) — 2024-02-06
  Uses screenshot geometry and visual content to enrich HTML element representations for web navigation. Nearby elements contribute textual and visual context, with evaluation on cross-task, cross-website, and cross-domain Mind2Web splits.
- [WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models](https://awesomecua.github.io/resources/arxiv-2401-13919/) — 2024-01-25
  Combines multimodal web interaction with a real-website task collection and an automated evaluation protocol.
- [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://awesomecua.github.io/resources/arxiv-2401-13649/) — 2024-01-24
  Introduces visually grounded website tasks for evaluating multimodal agents that must interpret both images and text.
- [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://awesomecua.github.io/resources/arxiv-2401-13178/) — 2024-01-24
  Introduces AgentBoard, a multiturn agent evaluation framework with intermediate progress metrics and analysis tools. Its broader task suite includes WebShop and WebArena interactions with stepwise progress measurements.
- [GPT-4V(ision) is a Generalist Web Agent, if Grounded](https://awesomecua.github.io/resources/arxiv-2401-01614/) — 2024-01-03
  Introduces SeeAct and live-website evaluation, examining how visual planning and element grounding affect web-agent task completion.
- [WebVLN: Vision-and-Language Navigation on Websites](https://awesomecua.github.io/resources/arxiv-2312-15820/) — 2023-12-25
  WebVLN trains website navigation from question-based instructions using both rendered visual information and underlying HTML. It introduces WebVLN-v1 and a website-aware navigation network to study this digital variant of vision-and-language navigation.
- [Exposing Limitations of Language Model Agents in Sequential-Task Compositions on the Web](https://awesomecua.github.io/resources/arxiv-2311-18751/) — 2023-11-30
  CompWoB adds 50 composed web-automation tasks to study generalization from simpler interactions. The paper compares prompted and fine-tuned agents, balances task training data, and probes sensitivity to changes in instruction order.
- [WebWISE: Web Interface Control and Sequential Exploration with Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-16042/) — 2023-10-24
  WebWISE filters DOM elements into observations and generates short programs for click, scroll, and text-entry steps. It evaluates in-context learning from either one supplied example or an example collected during a successful zero-shot MiniWoB++ trial.
- [AllTogether: Investigating the Efficacy of Spliced Prompt for Web Navigation using Large Language Models](https://awesomecua.github.io/resources/arxiv-2310-18331/) — 2023-10-20
  AllTogether standardizes prompts for HTML-based web navigation and compares prompting with instruction fine-tuning. Its analysis examines how HTML context, interaction history, and current environmental feedback affect task execution.
- [OpenAgents: An Open Platform for Language Agents in the Wild](https://awesomecua.github.io/resources/arxiv-2310-10634/) — 2023-10-16
  OpenAgents hosts three language agents, for data analysis, API plugins and autonomous web browsing, behind a web interface for non-expert users, with local deployment for developers.
- [A Zero-Shot Language Agent for Computer Control with Structured Reflection](https://awesomecua.github.io/resources/arxiv-2310-08740/) — 2023-10-12
  Studies a zero-shot computer-control agent that plans executable actions and organizes its own reflections after mistakes. MiniWoB++ experiments examine learning to complete tasks without supplied expert trajectories.
- [SteP: Stacked LLM Policies for Web Actions](https://awesomecua.github.io/resources/arxiv-2310-03720/) — 2023-10-05
  SteP dynamically composes specialized web-action policies through a stack that records the active chain of policy calls. It studies this control structure across WebArena, MiniWoB++, and CRM workflows.
- [LASER: LLM Agent with State-Space Exploration for Web Navigation](https://awesomecua.github.io/resources/arxiv-2309-08172/) — 2023-09-15
  LASER represents web navigation as exploration over a defined set of states, allowing an agent to revisit earlier states after mistakes. The study evaluates this backtracking approach on WebShop and Amazon tasks.
- [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://awesomecua.github.io/resources/arxiv-2307-13854/) — 2023-07-25
  Introduces reproducible web environments with task-completion checks for evaluating autonomous web agents.
- [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://awesomecua.github.io/resources/arxiv-2307-12856/) — 2023-07-24
  Combines task decomposition, HTML summarization, and generated Python programs to carry out instructions on websites.
- [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://awesomecua.github.io/resources/arxiv-2306-07863/) — 2023-06-13
  Synapse filters task-irrelevant page state and places complete abstracted state-action trajectories into the prompt. An embedding-based exemplar memory retrieves relevant demonstrations for new tasks, evaluated on MiniWoB++ and Mind2Web.
- [Mind2Web: Towards a Generalist Agent for the Web](https://awesomecua.github.io/resources/arxiv-2306-06070/) — 2023-06-09
  Introduces a web-task dataset spanning diverse websites and evaluates generalization to unseen sites and domains.
- [From Pixels to UI Actions: Learning to Follow Instructions via Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2306-00245/) — 2023-05-31
  Studies instruction-following agents that observe screenshots and act through a generic mouse-and-keyboard action space, evaluating pixel-based pretraining for GUI tasks on MiniWoB++.
- [Hierarchical Prompting Assists Large Language Model on Web Navigation](https://awesomecua.github.io/resources/arxiv-2305-14257/) — 2023-05-23
  Separates web navigation prompting into a SUMMARIZER that extracts action-relevant observations and an ACTOR that chooses the next action from the condensed context.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.github.io/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [Language Models can Solve Computer Tasks](https://awesomecua.github.io/resources/arxiv-2303-17491/) — 2023-03-30
  Introduces recursive criticism and improvement prompting for language-model agents performing computer tasks, evaluated on MiniWoB++ with a small number of demonstrations per task.
- [Understanding HTML with Large Language Models](https://awesomecua.github.io/resources/arxiv-2210-03945/) — 2022-10-08
  Studies language models for HTML element classification, page description and autonomous web navigation. Fine-tuned models are evaluated on MiniWoB, and a distilled, automatically labeled CommonCrawl HTML corpus supports the training approach.
- [WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents](https://awesomecua.github.io/resources/arxiv-2207-01206/) — 2022-07-04
  Provides a simulated shopping environment where language agents search, configure, and select products from natural-language requirements.
- [Grounding Open-Domain Instructions to Automate Web Support Tasks](https://awesomecua.github.io/resources/arxiv-2103-16057/) — 2021-03-30
  Introduces RUSS, which translates support instructions into a domain-specific language and grounds them in actionable web elements.
- [Rousillon: Scraping Distributed Hierarchical Web Data](https://awesomecua.github.io/resources/url-97c0b1896525632434e2/) — 2018
  Introduces Rousillon, which generalizes a demonstration of collecting one hierarchical data row into a browser-automation program that traverses related pages. The paper develops relation-selection and generalization methods and evaluates users building such scripts.
- [World of Bits: An Open-Domain Platform for Web-Based Agents](https://awesomecua.github.io/resources/url-52a3261eb6a19b402e88/) — 2017-07-17
  Introduces World of Bits, a web-task platform combining human demonstrations, keyboard and mouse actions, and cached HTTP traffic for repeatable task environments. It evaluates agents trained through behavioral cloning and reinforcement learning.
- [Ringer: Web Automation by Demonstration](https://awesomecua.github.io/resources/url-347925d0f440d6396080/) — 2016-11
  Introduces Ringer, which converts demonstrated webpage interactions into scripts combining actions, target selectors, and waiting conditions. It evaluates replay robustness on tasks recorded from real websites.
- [End-to-End Goal-Driven Web Navigation](https://awesomecua.github.io/resources/arxiv-1602-02261/) — 2016-02-06
  Introduces WebNav for converting websites into goal-directed hyperlink navigation tasks and WikiNav for evaluating language-conditioned navigation and question answering on Wikipedia.
- [Koala: Capture, Share, Automate, Personalize Business Processes on the Web](https://awesomecua.github.io/resources/url-cccd967aa993404d74d0/) — 2007
  Introduces Koala, a collaborative web automation system that records browser interactions as editable pseudo-natural-language scripts. Scripts are shared through a wiki and instantiated with personal or corporate data for reuse by other users.
- [PLOW: A Collaborative Task Learning Agent](https://awesomecua.github.io/resources/url-628b5251757bb3888e89/) — 2007
  Describes PLOW, which learns executable web-task models from a session combining demonstrations, natural-language explanations, and dialogue. Browser instrumentation connects user actions with DOM structure to support task generalization.

## 评测基准

- [AgentRewardBench](https://awesomecua.github.io/resources/github-mcgill-nlp-agent-reward-bench/) — Date not recorded
  A benchmark and evaluation toolkit for comparing automatic web-agent judges against expert judgments of task success, side effects and repetition.
- [BrowserART](https://awesomecua.github.io/resources/github-scaleapi-browser-art/) — Date not recorded
  Red-teaming benchmark and test suite from Scale AI evaluating whether refusal-trained language models can be jailbroken when deployed as browser agents.
- [CUAVerifierBench](https://awesomecua.github.io/resources/url-d5140d438466c1e1348a/) — Date not recorded
  Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.
- [EIA](https://awesomecua.github.io/resources/github-osu-nlp-group-eia-against-webagent/) — Date not recorded
  Evaluation suite for Environmental Injection Attacks that embed invisible malicious HTML elements into benign websites to test privacy leakage in generalist web agents.
- [Mind2Web](https://awesomecua.github.io/resources/github-osu-nlp-group-mind2web/) — Date not recorded
  Human demonstrations and tasks for generalist web navigation research.
- [Mind2Web 2](https://awesomecua.github.io/resources/github-osu-nlp-group-mind2web-2/) — Date not recorded
  Long-horizon agentic web search benchmark whose Agent-as-a-Judge framework scores time-varying, citation-backed answers, with evaluation scripts for its dev and test sets.
- [Online Mind2Web](https://awesomecua.github.io/resources/github-osu-nlp-group-online-mind2web/) — Date not recorded
  300 tasks on 136 live websites for evaluating web agents online, with outdated tasks replaced over time, human-reviewed submissions and the WebJudge automatic evaluator.
- [ST-WebAgentBench](https://awesomecua.github.io/resources/github-segev-shlomov-st-webagentbench/) — Date not recorded
  BrowserGym-based benchmark for evaluating the safety and policy compliance of enterprise web agents across six trustworthiness risk dimensions.
- [WebArena](https://awesomecua.github.io/resources/github-web-arena-x-webarena/) — Date not recorded
  Self-hosted web environments and tasks for evaluating autonomous web agents.
- [WebClick](https://awesomecua.github.io/resources/url-5e2bd1b3398974b79c9c/) — Date not recorded
  A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.
- [WebGuard](https://awesomecua.github.io/resources/github-osu-nlp-group-webguard/) — Date not recorded
  Codebase, annotation toolkit, and action-level risk dataset for training and evaluating guardrail models that flag unsafe browser-agent actions before execution.
- [WebLINX](https://awesomecua.github.io/resources/github-mcgill-nlp-weblinx/) — Date not recorded
  Demonstrations and evaluation for conversational web navigation.
- [WebRewardBench](https://awesomecua.github.io/resources/url-ac6d0f80765f5a32255a/) — Date not recorded
  An offline preference-evaluation set for web process reward models, pairing page and trajectory context with preferred and rejected candidate decisions.
- [WebShop](https://awesomecua.github.io/resources/github-princeton-nlp-webshop/) — Date not recorded
  Simulated shopping environment for instruction-following web agents.
- [WebTailBench](https://awesomecua.github.io/resources/url-3b6dfd52f98bfe76bc7f/) — Date not recorded
  Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.
- [WebTestBench](https://awesomecua.github.io/resources/github-friedrichor-webtestbench/) — Date not recorded
  An end-to-end web-testing benchmark where agents derive test checklists from development instructions, interact with deployed applications and report functional or constraint-related defects.
- [WebVoyager](https://awesomecua.github.io/resources/github-minorjerry-webvoyager/) — Date not recorded
  Multimodal web navigation agent and evaluation tasks on real websites.

## 数据集

- [Go-Browse-WA processed data](https://awesomecua.github.io/resources/url-a13a187bc058fbb4f6af/) — Date not recorded
  Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.
- [MT-Mind2Web](https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.
- [NNetNav Live data](https://awesomecua.github.io/resources/url-4f47abde8cd28a1ec1e1/) — Date not recorded
  Browser-interaction data released with NNetNav for its live-website setting, with separate training and test files.
- [NNetNav WebArena data](https://awesomecua.github.io/resources/url-25a4d0ab29b60250863a/) — Date not recorded
  NNetNav's WebArena-oriented browser-interaction data release, with separate training and test files.
- [Plan-and-Act training data](https://awesomecua.github.io/resources/url-ba6453cfdae0eb049ced/) — Date not recorded
  Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.
- [WebEvolver SFT data](https://awesomecua.github.io/resources/url-e126bbd9729ebdaf05ab/) — Date not recorded
  Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.
- [WebPRM checklist-generation data](https://awesomecua.github.io/resources/url-fcc98b149272bbf31b05/) — Date not recorded
  Web-task context, starting observations and action history paired with structured checklists and subgoal analyses for checklist generation.
- [WebPRM Collection preference data](https://awesomecua.github.io/resources/url-8dfc84eb4016204fe70a/) — Date not recorded
  Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

## 模型

- [Fara](https://awesomecua.github.io/resources/github-microsoft-fara/) — Date not recorded
  Microsoft browser-use agent models that act from screenshots by predicting click coordinates without accessibility trees; Fara1.5 comes in 4B, 9B and 27B, succeeding Fara-7B.
- [Fara 7B](https://awesomecua.github.io/resources/url-a4da77ee63f879cc8e63/) — Date not recorded
  Microsoft's Fara checkpoint, a Qwen2.5-VL-architecture image-text-to-text model with about 8.3B BF16 parameters, English, MIT-licensed and linked to arXiv paper 2511.19663.
- [Go-Browse WebArena Qwen 7B](https://awesomecua.github.io/resources/url-db1b7b7efe3755ae5693/) — Date not recorded
  A Qwen-2.5-7B-Instruct checkpoint fine-tuned on Go-Browse WebArena trajectories for website task execution.
- [Holo1 7B](https://awesomecua.github.io/resources/url-f35cfcbaeb79663eabeb/) — Date not recorded
  A Qwen2.5-VL-based action model released for the Surfer-H web-agent system, supporting policy, interface-localization and validation roles.
- [Llama-3-8B-Web](https://awesomecua.github.io/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [PAE LLaVA 7B](https://awesomecua.github.io/resources/url-5d61c1b5fc8dd650518d/) — Date not recorded
  A released LLaVA checkpoint for visual browser interaction from the PAE autonomous task-proposal and policy-learning system.
- [Plan-and-Act Planner 70B](https://awesomecua.github.io/resources/url-3932d69c6b6f9b2a7ba8/) — Date not recorded
  The planner component of Plan-and-Act, generating structured high-level plans that an executor turns into web actions.
- [WebJudge 7B](https://awesomecua.github.io/resources/url-772161f06c2b3d4978b5/) — Date not recorded
  A visual trajectory judge that retains selected intermediate screenshots to evaluate whether a web agent completed its task.
- [WebRL Llama 3.1 8B](https://awesomecua.github.io/resources/url-a6ee20fea67438d91e06/) — Date not recorded
  A WebRL browser-policy checkpoint for performing actions in the five website environments of WebArena.
- [WebRL outcome reward model 8B](https://awesomecua.github.io/resources/url-d1e85aeb6d96859c109d/) — Date not recorded
  The outcome-supervision checkpoint used by WebRL to score browser trajectories during policy training.
- [WebShepherd 3B](https://awesomecua.github.io/resources/url-72f7fe0211c6551b945f/) — Date not recorded
  A public text-based process-reward checkpoint from the Web-Shepherd collection for scoring web-agent decisions against task checklists.

## 工程与产业

- [Agent E](https://awesomecua.github.io/resources/github-emergenceai-agent-e/) — Date not recorded
  Browser automation agent on the AG2 framework that pairs a planner agent with a browser navigation agent to fill forms, search shops and work through sites, also callable over a local HTTP API.
- [Agent Workflow Memory implementation](https://awesomecua.github.io/resources/github-zorazrw-agent-workflow-memory/) — Date not recorded
  Research code that extracts reusable browser-task routines from demonstrations or prior executions, stores them as workflow memory and reuses them during subsequent navigation.
- [agent-browser](https://awesomecua.github.io/resources/github-vercel-labs-agent-browser/) — Date not recorded
  A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.
- [Agent-R](https://awesomecua.github.io/resources/github-bytedance-seed-agent-r/) — Date not recorded
  Trajectory collection and revision utilities that use tree search and model-guided critique to train agents to recover from mistakes, including WebShop tasks.
- [AgentQL](https://awesomecua.github.io/resources/url-8896d44370711136fd54/) — Date not recorded
  Natural-language querying and interaction tools for web interfaces.
- [Amazon Nova Act](https://awesomecua.github.io/resources/url-dec156cbf0cb1181f7b6/) — Date not recorded
  AWS service for building and deploying agents that automate browser-based UI workflows from natural language and Python, powered by a custom Nova 2 Lite model.
- [AutoWebGLM](https://awesomecua.github.io/resources/github-thudm-autowebglm/) — Date not recorded
  Web navigation agent built on ChatGLM3-6B that simplifies HTML for the model, is trained on hybrid human and AI data with RL and rejection sampling, and comes with the bilingual AutoWebBench.
- [Browser Use](https://awesomecua.github.io/resources/github-browser-use-browser-use/) — Date not recorded
  Open-source browser agent library that runs locally with any LLM against a local or cloud browser, and also serves as a CLI for coding agents and as a driver for Claude's browser toolset.
- [Browser Use Cloud](https://awesomecua.github.io/resources/url-ef244017b1460269fc68/) — Date not recorded
  Hosted browser-agent platform from Browser Use.
- [Browser Use WebUI](https://awesomecua.github.io/resources/github-browser-use-web-ui/) — Date not recorded
  A Gradio interface for configuring and running Browser Use agents, including persistent browser sessions and interaction recordings.
- [BrowserOS / BrowserOS neo](https://awesomecua.github.io/resources/github-browseros-ai-browseros/) — Date not recorded
  Chromium-based browser implementations for external agent control and built-in assistant workflows, with session visibility and replay facilities.
- [CAAP Agent](https://awesomecua.github.io/resources/github-caap-agent-caap-agent/) — Date not recorded
  Screenshot-driven agent implementation for MiniWoB++ and WebShop, using a visual observer and context-aware prompts to issue mouse and keyboard actions.
- [ChatGPT Atlas](https://awesomecua.github.io/resources/url-240a05c02f85d4da60dc/) — Date not recorded
  OpenAI browser product integrating ChatGPT and agent capabilities.
- [Claude for Chrome](https://awesomecua.github.io/resources/url-07b6bbce7ce26a847f79/) — Date not recorded
  Claude browser extension for interacting with websites.
- [Go-Browse](https://awesomecua.github.io/resources/github-apga-go-browse/) — Date not recorded
  Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.
- [HoloTab](https://awesomecua.github.io/resources/url-4a47a6df845735984bf1/) — Date not recorded
  H browser extension for executing tasks through website interfaces.
- [HyperAgent](https://awesomecua.github.io/resources/github-hyperbrowserai-hyperagent/) — Date not recorded
  Library adding natural-language commands to Playwright: accessibility-tree single actions, multi-step tasks that can use screenshots, an MCP client and action caching for replay without LLM calls.
- [LaVague](https://awesomecua.github.io/resources/github-lavague-ai-lavague/) — Date not recorded
  Open-source web agent framework where a World Model turns an objective and the current page into instructions and an Action Engine compiles them into Selenium or Playwright code to run.
- [LiteWebAgent](https://awesomecua.github.io/resources/github-pathonaiorg-litewebagent/) — Date not recorded
  Modular web-agent framework with browser control, planning, workflow memory, and tree-search components, plus web and extension interfaces.
- [Lumen browser agent](https://awesomecua.github.io/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [Nanobrowser](https://awesomecua.github.io/resources/github-nanobrowser-nanobrowser/) — Date not recorded
  A browser-extension agent that reads pages, interacts with elements and moves between tabs from a side-panel task interface.
- [NNetNav](https://awesomecua.github.io/resources/github-murtyshikhar-nnetnav/) — Date not recorded
  Collects and labels browser-exploration trajectories for agent training, with code for data processing, fine-tuning, and web evaluation.
- [Notte](https://awesomecua.github.io/resources/github-nottelabs-notte/) — Date not recorded
  Web agent framework and cloud SDKs for managed Chrome sessions, adding a CLI, an MCP server for coding agents, serverless browser functions and an API that builds automations from English tasks.
- [OpenAgents Web Agent](https://awesomecua.github.io/resources/component-xlang-ai-openagents-web-agent/) — Date not recorded
  The OpenAgents browser-control component, connecting a Chrome extension to a web agent and local chat platform for navigating sites and completing interface tasks.
- [Operator](https://awesomecua.github.io/resources/url-f0584842138a52158f51/) — Date not recorded
  Historical OpenAI browser-agent research preview.
- [Plan-and-Act](https://awesomecua.github.io/resources/github-squeezeailab-plan-and-act/) — Date not recorded
  A web-agent framework that separates high-level planning from action execution, with replanning and synthetic planner-data generation components.
- [Proposer-Agent-Evaluator (PAE)](https://awesomecua.github.io/resources/github-amazon-science-pae/) — Date not recorded
  A browser-agent training system that proposes tasks, collects visual interaction trajectories, and uses automated evaluation to drive policy improvement.
- [RCI Agent](https://awesomecua.github.io/resources/github-posgnu-rci-agent/) — Date not recorded
  A MiniWoB++ agent that uses explicit and implicit recursive criticism-and-improvement prompts to refine action plans and ground actions to browser state.
- [SeeAct](https://awesomecua.github.io/resources/github-osu-nlp-group-seeact/) — Date not recorded
  Generalist web agent framework for large multimodal models such as GPT-4V, with a Playwright tool that runs agents on live websites, text-choice and set-of-mark grounding, and a crawler mode.
- [Self-MAP](https://awesomecua.github.io/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [SkillWeaver](https://awesomecua.github.io/resources/github-osu-nlp-group-skillweaver/) — Date not recorded
  A web-agent framework that explores sites, synthesizes reusable interaction APIs and builds a skill library for later tasks.
- [Stagehand](https://awesomecua.github.io/resources/github-browserbase-stagehand/) — Date not recorded
  Browser automation framework combining code and natural-language actions.
- [StateAct](https://awesomecua.github.io/resources/github-ai-nikolai-stateact/) — Date not recorded
  State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.
- [Steel Browser](https://awesomecua.github.io/resources/github-steel-dev-steel-browser/) — Date not recorded
  Open-source browser API managing Chrome sessions for agents, reachable through Puppeteer, Playwright or Selenium over CDP, with persisted cookies, proxy rotation, stealth and a session debugging UI.
- [Surf New](https://awesomecua.github.io/resources/github-steel-dev-surf-new/) — Date not recorded
  Next.js and FastAPI playground from Steel for trying web agents in a controlled browser environment, with live views of browser interaction and support for providers such as Claude and GPT-4.
- [Synapse](https://awesomecua.github.io/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [TinyFish](https://awesomecua.github.io/resources/url-d92596cfe618e5322ec2/) — Date not recorded
  Browser-agent API for executing web tasks and extracting structured results.
- [Web-Shepherd inference and evaluation](https://awesomecua.github.io/resources/github-kyle8581-web-shepherd/) — Date not recorded
  Process-reward inference and benchmark-evaluation utilities that use task checklists to assess individual web-agent decisions.
- [WebAgent-R1](https://awesomecua.github.io/resources/github-weizhepei-webagent-r1/) — Date not recorded
  Environment setup, multi-turn reinforcement-learning and evaluation tooling for browser agents interacting with WebArena.
- [WebEvolver code component](https://awesomecua.github.io/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
- [WebLlama](https://awesomecua.github.io/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
- [WebRL](https://awesomecua.github.io/resources/github-thudm-webrl/) — Date not recorded
  Training pipeline that evolves web tasks from prior attempts and uses an outcome reward model to refine browser policies.
- [WebVLN research implementation](https://awesomecua.github.io/resources/github-webvln-webvln/) — Date not recorded
  Training and evaluation code for question-guided website navigation that combines visual observations with web-specific HTML information.
- [Workflow-Guided Exploration research code](https://awesomecua.github.io/resources/github-stanfordnlp-wge/) — Date not recorded
  Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.
- [WorkForceAgent-R1](https://awesomecua.github.io/resources/github-night-chen-workforceagent-r1/) — Date not recorded
  Web-task reward functions, WorkArena data processing and GRPO training configurations for reasoning-oriented language agents.
