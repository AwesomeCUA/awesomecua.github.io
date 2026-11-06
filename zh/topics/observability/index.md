# 可观测性

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/observability/records.jsonl

## 论文与综述

- [Interpretable Early Termination of Web Navigation Agents via Closed Sequential Pattern Mining](https://awesomecua.com/resources/arxiv-2611-04142/) — 2026-11-03
  Applies sequential pattern mining to MiniWoB++ web-agent traces, producing reviewable failure signatures and an early-termination policy to reduce token use.
- [VeriCUA: Verification as Agentic Exploration for Computer-Using Agents](https://awesomecua.com/resources/arxiv-2610-40578/) — 2026-10-29
  Introduces VeriCUA, a cross-platform task verifier that gathers evidence through GUI or code checks to assess computer-use agent completion.
- [EnvOS: Auditing Computer-Use Agents When the World Moves On : Phenomenon-Based Task Construction, Certification, and Evidence-Based Evaluation](https://awesomecua.com/resources/arxiv-2610-40246/) — 2026-10-29
  Introduces EnvOS, a framework for constructing and auditing changing computer-use environments, including checks of task changes, solvability, grading, and run evidence.
- [When to Intervene? An Empirical Study of Errors and Self-Recovery in LLM Agents](https://awesomecua.com/resources/arxiv-2610-36471/) — 2026-10-27
  Introduces ReInBench, annotated computer-use and web-agent error traces, and ReCoF, a method for predicting whether an agent will recover without intervention.
- [Build or Adopt? Custom-Built vs. General-Purpose LLM Agent Harnesses for Automotive GUI Testing](https://awesomecua.com/resources/arxiv-2610-33636/) — 2026-10-24
  Compares a custom harness with general-purpose LLM agent harnesses for GUI testing of Android-based vehicle interfaces and tasks in public apps.
- [Understanding Tool-Mediated Interaction Failures in Agentic GUI Software: An Empirical Study](https://awesomecua.com/resources/arxiv-2610-31698/) — 2026-10-21
  Malva catalogs failures that make GUI agents' tool-mediated view diverge from the live interface; MalvaGuard checks related tool contracts before deployment.
- [Who Verifies the Agent's Success Claim? Self-Report Leakage in GUI-Agent Completion Judging](https://awesomecua.com/resources/arxiv-2610-29609/) — 2026-10-21
  Studies how GUI agents' success claims affect completion judgments and builds a claim-blind auditor that checks reports against recorded traces.
- [Comparing Computer Use Behavior Across Multiple Levels of Abstraction](https://awesomecua.com/resources/arxiv-2610-26703/) — 2026-10-19
  MAP annotates computer-use traces at linked operation, function/consequence, method and goal levels, then compares human and agent workflows through sequence, pattern and effort metrics.
- [MobileInject: Evaluating Reasoning-to-Action Security of MLLM-Based Mobile Agents under Cross-Modal Consistency Injection](https://awesomecua.com/resources/arxiv-2610-23307/) — 2026-10-16
  MobileInject evaluates visual/textual observation injection in stateful Android workflows using resettable emulators, benign/adversarial state oracles and trace-based diagnosis of emitted rationales and actions.
- [MobileJailBench: Red Queen Jailbreak Benchmarking for Mobile Agents](https://awesomecua.com/resources/arxiv-2610-23303/) — 2026-10-16
  MobileJailBench evaluates mobile-agent jailbreaks in a browser-based Android-like simulator, combining feedback-driven attack evolution, separately admitted task expansions and evidence-grounded outcome adjudication.
- [From Observations to Authorized Actions: Measuring Source Information in Android Agents](https://awesomecua.com/resources/arxiv-2610-15502/) — 2026-10-11
  Measures source-attribution limits in Android accessibility and separately tests application-history and selected-WebView-object checks for authorizing AppFunctions actions.
- [Harness Evolution Hits a Ceiling: When Weight Training Should Begin](https://awesomecua.com/resources/arxiv-2610-11655/) — 2026-10-08
  Studies when to improve an LLM agent's runtime harness or train its weights by classifying failed trajectories; WebArena-Lite supplies a web-task transfer test.
- [AgentTime: Can Agents Estimate and Control Their Own Runtime?](https://awesomecua.com/resources/arxiv-2610-09944/) — 2026-10-07
  Evaluates duration following, runtime forecasts and elapsed-time estimates in native agent harnesses, including OSWorld desktop tasks, with external timers, native graders and work-versus-wait analysis.
- [WebFovea: When the Model Is Right but the Click Is Wrong -- Reliable Round Trips for Vision-Based Web Agents on Live Websites](https://awesomecua.com/resources/arxiv-2610-03036/) — 2026-10-02
  Describes WebFovea, a vision-based live-web agent whose execution loop checks action parsing, browser effects, feedback accuracy, and observation delivery. The report analyzes failures such as coordinate mismatches and silent control interactions and documents corresponding harness changes.
- [Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories](https://awesomecua.com/resources/arxiv-2610-01491/) — 2026-10-01
  Audits WebArena-Lite outcomes and trajectories with human review to identify automatic-evaluator false negatives and the first consequential execution errors. It also studies explicit execution-state memory and procedural guidance, showing why final task scores can miss substantial differences in agent behavior.
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.com/resources/arxiv-2610-00948/) — 2026-10-01
  Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights.
- [Absorbed in Inertia: Activation Analysis for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2609-37176/) — 2026-09-29
  Studies repetitive, unproductive actions in desktop agents through their internal activation states. It proposes Reset, Reroute, Restore, a context intervention that temporarily resets an agent’s trajectory and later restores it to help escape repeated ineffective behavior.
- [GUITAR: Structured Failure Diagnosis of GUI Agents via State Transitions](https://awesomecua.com/resources/arxiv-2609-34113/) — 2026-09-28
  Introduces GUITAR, which groups visually different screens into functional states and analyzes agent failures over a state-transition graph. It uses the resulting bottlenecks to diagnose recurring mobile and web errors and evaluate targeted guidance.
- [OSWorld-Pro: Process-based Evaluation for Computer Use Agents](https://awesomecua.com/resources/arxiv-2609-24890/) — 2026-09-21
  Adds annotated intermediate subgoals to computer-use tasks and uses process-oriented evaluation to identify action and progress failures.
- [Monitoring Web Agents Without Internal Signals: Observable Trajectories and Key-Step Supervision](https://awesomecua.com/resources/arxiv-2609-02057/) — 2026-09-02
  Predicts web-agent failure risk from observable trajectory prefixes using cross-step behavior and black-box consistency queries. Key-step labels preserve valid early prefixes of failed runs, and evaluation tests early intervention and transfer across website categories.
- [CURA: Certified Runtime Alarms for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2608-27808/) — 2026-08-28
  Introduces CURA, a telemetry-based runtime monitor that turns computer-use trajectories into sequential failure alarms and can trigger mid-task oversight. Its certificate controls false alarms, while the study separately reports detection performance and limits of retrospective monitoring.
- [ClawProBench: Trace-Aware Evaluation of AI Agents with Runtime Coverage and Frozen Workplace-Style Holdouts](https://awesomecua.com/resources/arxiv-2608-22510/) — 2026-08-23
  Introduces ClawProBench, a trace-aware benchmark for agents on OpenClaw that scores workspace and native-runtime tasks using execution traces, safety checks, and process quality.
- [Software Engineering for and with GUI Agent](https://awesomecua.com/resources/arxiv-2608-09278/) — 2026-08-10
  Surveys 336 GUI-agent papers through a software engineering lens, covering architectures, evaluation, and lifecycle concerns in mobile and web settings.
- [How Benchmarks Mis-Score Computer-Use Agents](https://awesomecua.com/resources/arxiv-2607-28367/) — 2026-07-30
  Audits failure-scored computer-use trajectories to distinguish agent errors from broken tasks and evaluator false negatives. It organizes reliability issues across task construction, trajectory evidence, scoring, and reporting, then derives corresponding evaluation design practices.
- [Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents](https://awesomecua.com/resources/arxiv-2607-17527/) — 2026-07-20
  Introduces Sidekick, a communication interface that uses ambient status cues, multimodal action summaries, and visual and verbal explanations of reasoning to help people monitor computer-use agents. A user study examines progress awareness, error traceability, and multitasking across background and foreground interaction.
- [Just A Rather Very Intelligent Spoken Agent](https://awesomecua.com/resources/arxiv-2607-16610/) — 2026-07-18
  Introduces JarvisBench, a benchmark for spoken mediation during long-horizon agent workflows, measuring task collaboration and how users follow ongoing execution.
- [Plover: Steering GUI Agents through Plan-Centric Interaction](https://awesomecua.com/resources/arxiv-2607-15193/) — 2026-07-16
  Plover exposes GUI-agent plans and replanning as persistent artifacts that users can inspect and edit during execution. Its planner–executor design supports localized correction through plan edits, language guidance and screenshot-grounded interventions, studied through failure repair and workflow scenarios.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.com/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [WebRetriever: A Large-Scale Comprehensive Benchmark for Efficient Web Agent Evaluation](https://awesomecua.com/resources/arxiv-2607-06118/) — 2026-07-07
  WebRetriever evaluates navigation, knowledge-assisted interaction and end-to-end information-extraction workflows under separate protocols. Its NavEval judge uses richer interaction context to diagnose cases where navigation success does not translate into useful task completion.
- [On the Internet, Nobody Knows You're an LLM Bot: Unmasking Web Agents with Multi-Layer Fingerprinting](https://awesomecua.com/resources/arxiv-2606-30119/) — 2026-06-29
  Evaluates web agents against anti-bot mechanisms on instrumented honeysites and analyzes network, HTTP and browser fingerprints. The study compares resistance to blocking with the ability to distinguish agents, humans and agent implementations.
- [Agent MechSuits: Mechanistic Subspace Safety Steering for Multi-Turn CLI Agents](https://awesomecua.com/resources/arxiv-2606-22673/) — 2026-06-21
  Introduces Agent MechSuits, a framework that detects unsafe states and steers multi-turn CLI agents through hidden-representation interventions, alongside the MAS trajectory benchmark.
- [Whose Agent Are You? Multi-Layer Fingerprinting and Attribution of Autonomous Web Agents](https://awesomecua.com/resources/arxiv-2606-20910/) — 2026-06-18
  Builds a logging framework that combines network/protocol fingerprints with browser interaction behavior to attribute web-agent traffic. A decision-tree classifier is evaluated across six agent implementations, human browsing and conventional crawlers.
- [HANSEL: Extracting Breadcrumbs from Web Agent Trajectories for Interactive Verification](https://awesomecua.com/resources/arxiv-2606-18671/) — 2026-06-17
  HANSEL extracts evidence pages and snippets from browser-agent traces and preserves relevant page state in interactive verification views. It flags untraceable answers and evaluates evidence selection and human verification effort separately.
- [When Web Agents Finish but Still Fail: Reproducible Triggers and Trace Diagnostics for Parallel Web Exploration](https://awesomecua.com/resources/arxiv-2606-20724/) — 2026-06-16
  Introduces Parallel WebBench for parallel web exploration and uses verified URL trajectories to diagnose search loops, incomplete answers, and failures after evidence retrieval.
- [BraveGuard: From Open-World Threats to Safer Computer-Use Agents](https://awesomecua.com/resources/arxiv-2606-01166/) — 2026-05-31
  Introduces BraveGuard, a framework that turns emerging threats and computer-use agent trajectories into training supervision for guards that monitor multi-step safety risks.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.com/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [AgentHijack: Benchmarking Computer Use Agent Robustness to Common Environment Corruptions](https://awesomecua.com/resources/arxiv-2605-25707/) — 2026-05-25
  Introduces AgentHijack, a benchmark for desktop computer-use agents facing pop-ups, resolution changes and other common corruptions, alongside an agent that checks its environment.
- [OpenComputer: Verifiable Software Worlds for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2605-19769/) — 2026-05-19
  Introduces OpenComputer, which builds desktop tasks around application-state verifiers and refines those verifiers using execution feedback. An evaluation harness records trajectories and assigns auditable partial credit across professional software workflows.
- [DiagEval: Trajectory-Conditioned Diagnosis for Reliable Software Evaluation with GUI Agents](https://awesomecua.com/resources/arxiv-2605-17439/) — 2026-05-17
  DiagEval diagnoses failed GUI-agent evaluations of interactive software by reusing failed trajectories for targeted probes that distinguish execution errors from defects.
- [Securing Computer-Use Agents: A Unified Architecture-Lifecycle Framework for Deployment-Grounded Reliability](https://awesomecua.com/resources/arxiv-2605-07110/) — 2026-05-08
  Survey of computer-use agent reliability and security across browsers, desktops, and mobile apps, using architecture and lifecycle views to map failures and controls.
- [AgentClick: A Skill-Based Human-in-the-Loop Review Layer for Terminal AI Agents](https://awesomecua.com/resources/arxiv-2604-16520/) — 2026-04-15
  AgentClick gives terminal-based agents a browser review interface for plans, drafts, execution traces and editable memory. A local server and skill plugin let users inspect proposed actions and provide structured feedback.
- [Same Outcomes, Different Journeys: A Trace-Level Framework for Comparing Human and GUI-Agent Behavior in Production Search Systems](https://awesomecua.com/resources/arxiv-2604-07929/) — 2026-04-09
  Presents a trace-level framework for comparing GUI agents with people on task outcomes, queries, and interface navigation in a production audio-search application.
- [Where Did It Go Wrong? Process-Level Evaluation of Web Agents with Semantic State Tracking](https://awesomecua.com/resources/arxiv-2606-15673/) — 2026-04-08
  Introduces WebStep, a web-agent benchmark that records semantic states behind GUI interactions to analyze exploration, execution accuracy, and decisive errors across task steps.
- ["What Did It Actually Do?": Understanding Risk Awareness and Traceability for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-28551/) — 2026-03-30
  Presents an interview study of computer-use agent risks and AgentTrace, a prototype interface showing agent actions, resource access, permission history, and lasting changes.
- [Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective](https://awesomecua.com/resources/arxiv-2603-14248/) — 2026-03-15
  Presents a hierarchical planning framework for evaluating web agents at planning, execution and replanning stages, and reports low-level execution as the main failure source.
- [AI Planning Framework for LLM-Based Web Agents](https://awesomecua.com/resources/arxiv-2603-12710/) — 2026-03-13
  Introduces a planning taxonomy and trajectory-quality metrics for web agents, supported by 794 human-labeled WebArena trajectories and a comparison of two planning styles.
- [Terminal Is All You Need: Design Properties for Human-AI Agent Collaboration](https://awesomecua.com/resources/arxiv-2603-10664/) — 2026-03-11
  This position paper derives interface design principles from terminal-based human-agent collaboration: representational compatibility, transparent actions and low participation barriers. It argues that graphical and other agent-facing modalities should provide these properties explicitly.
- [CUAAudit: Meta-Evaluation of Vision-Language Models as Auditors of Autonomous Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-10577/) — 2026-03-11
  CUAAudit examines vision-language models that judge computer-use task completion from an instruction and final environment state. Across macOS, Windows and Linux benchmarks, it measures accuracy, confidence calibration and disagreement between auditors.
- [Web Agents Should Use Typed Actions Instead of Click-Based Browsing](https://awesomecua.com/resources/arxiv-2602-17245/) — 2026-02-19
  Proposes web verbs as typed actions for web agents, exposing operations with structured inputs, outputs and conditions so agents can compose auditable workflows.
- [A Trajectory-Based Safety Audit of Clawdbot (OpenClaw)](https://awesomecua.com/resources/arxiv-2602-14364/) — 2026-02-16
  Audits Clawdbot safety through logged action and tool-call trajectories across local execution and web-mediated workflows, using automated and human review.
- [VenusBench-Mobile: A Challenging and User-Centric Benchmark for Mobile GUI Agents with Capability Diagnostics](https://awesomecua.com/resources/arxiv-2604-06182/) — 2026-02-06
  Introduces VenusBench-Mobile, an online benchmark for mobile GUI agents with user-intent-driven tasks and capability annotations for analyzing agent behavior and failures.
- [MobiBench: Multi-Branch, Modular Benchmark for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2512-12634/) — 2025-12-14
  MobiBench evaluates mobile GUI agents offline while allowing multiple valid action paths. It decomposes agent pipelines into modules to study component contributions, configurations, and performance bottlenecks.
- [Computer-Use Agents as Judges for Generative User Interface](https://awesomecua.com/resources/arxiv-2511-15567/) — 2025-11-19
  AUI-Gym evaluates generated websites by having computer-use agents attempt tasks whose executability is checked programmatically. A feedback dashboard condenses navigation histories into visual summaries that a coding agent can use to revise an interface.
- [TaskSense: Cognitive Chain Modeling and Difficulty Estimation for GUI Tasks](https://awesomecua.com/resources/arxiv-2511-09309/) — 2025-11-12
  Cognitive Chain estimates GUI task difficulty by extracting sequences of cognitive steps from execution traces, then uses those estimates to assess GUI agents.
- [ProBench: Benchmarking GUI Agents with Accurate Process Information](https://awesomecua.com/resources/arxiv-2511-09157/) — 2025-11-12
  ProBench extends mobile GUI evaluation with tasks whose correctness depends on the interaction process as well as the final state. Its ProcessProvider supplies process information for assessing agent behavior and analyzing failure modes.
- [GhostEI-Bench: Do Mobile Agents Resilience to Environmental Injection in Dynamic On-Device Environments?](https://awesomecua.com/resources/arxiv-2510-20333/) — 2025-10-23
  Introduces GhostEI-Bench, a benchmark that injects deceptive UI events into Android emulator workflows to assess mobile agents and analyze failures from actions and screenshots.
- [WebGraphEval: Multi-Turn Trajectory Evaluation for Web Agents using Graph Representation](https://awesomecua.com/resources/arxiv-2510-19205/) — 2025-10-22
  Introduces WebGraphEval, which merges multiple agents' trajectories into a weighted graph of canonical actions. Structural analyses examine recurring behavior, inefficient paths and important decision points beyond a final success score.
- [GUISpector: An MLLM Agent Framework for Automated Verification of Natural Language Requirements in GUI Prototypes](https://awesomecua.com/resources/arxiv-2510-04791/) — 2025-10-06
  Introduces GUISpector, an MLLM agent framework that operates GUI prototypes to check natural-language requirements and produces feedback for developers.
- [Say One Thing, Do Another? Diagnosing Reasoning-Execution Gaps in VLM-Powered Mobile-Use Agents](https://awesomecua.com/resources/arxiv-2510-02204/) — 2025-10-02
  Introduces an evaluation framework for mobile GUI agents that compares actions implied by their reasoning with intended and executed actions to diagnose mismatches.
- [Demystifying deep search: a holistic evaluation with hint-free multi-hop questions and factorised metrics](https://awesomecua.com/resources/arxiv-2510-05137/) — 2025-10-01
  Introduces WebDetective, a deep-search benchmark with a traceable Wikipedia sandbox, and EvidenceLoop, an evidence-tracking workflow for web-agent search and synthesis.
- [Robust, Observable, and Evolvable Agentic Systems Engineering: A Principled Framework Validated via the Fairy GUI Agent](https://awesomecua.com/resources/arxiv-2509-20729/) — 2025-09-25
  Presents an agent-engineering framework combining runtime goal clarification, an observable component architecture and evolving execution memory. The Fairy mobile GUI agent evaluates these mechanisms on ambiguous tasks and through controlled and user studies.
- [Detecting Pipeline Failures through Fine-Grained Analysis of Web Agents](https://awesomecua.com/resources/arxiv-2509-14382/) — 2025-09-17
  Introduces a modular framework for identifying errors at intermediate stages of a web-agent pipeline. A SeeAct and Mind2Web case study examines weaknesses that are obscured by final task-success metrics.
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2509-07764/) — 2025-09-09
  Introduces AgentSentinel, which intercepts sensitive computer-agent operations and audits them using task context together with system traces. BadComputerUse evaluates this enforcement approach across attack scenarios involving tool and computer control.
- [Reliable Weak-to-Strong Monitoring of LLM Agents](https://awesomecua.com/resources/arxiv-2508-19461/) — 2025-08-26
  Introduces CUA-SHADE-Arena and a red-teaming workflow for testing monitors that detect covert misbehavior in computer-use agent trajectories.
- [You Don't Know Until You Click:Automated GUI Testing for Production-Ready Software Evaluation](https://awesomecua.com/resources/arxiv-2508-14104/) — 2025-08-17
  RealDevWorld evaluates generated software repositories with 194 development tasks and AppEvalPilot, an agent judge that operates the resulting GUIs. The evaluation examines functional behavior, visual fidelity, and runtime responses to produce task-specific diagnostic feedback.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.com/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [Measuring Harmfulness of Computer-Using Agents](https://awesomecua.com/resources/arxiv-2508-00935/) — 2025-07-31
  Introduces CUAHarm, 104 computer-use misuse tasks in a sandbox with verifiable rewards, and studies whether language models can monitor unsafe agent actions.
- [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://awesomecua.com/resources/arxiv-2506-16042/) — 2025-06-19
  OSWorld-Human adds human-determined trajectories to OSWorld to evaluate the efficiency of desktop computer-use agents. The study compares 16 agents and analyzes model-call latency, changes in step duration during task execution, and excess action steps.
- [Deep Research Bench: Evaluating AI Web Research Agents](https://awesomecua.com/resources/arxiv-2506-06287/) — 2025-05-06
  Introduces Deep Research Bench, 89 multi-step web research tasks and a frozen collection of scraped pages for evaluating search agents and their traces over time.
- [WebSuite: Systematically Evaluating Why Web Agents Fail](https://awesomecua.com/resources/arxiv-2406-01623/) — 2024-06-01
  WebSuite organizes browser operations into an action taxonomy and tests both isolated controls and complete workflows. Its diagnostic tasks attribute failures to specific actions, enabling comparison of text-based and multimodal web agents.
- [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://awesomecua.com/resources/arxiv-2401-13178/) — 2024-01-24
  Introduces AgentBoard, a multiturn agent evaluation framework with intermediate progress metrics and analysis tools. Its broader task suite includes WebShop and WebArena interactions with stepwise progress measurements.

## 评测基准

- [ClawBench](https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/) — Date not recorded
  Everyday-task benchmark on live websites that runs browser agents in containerized Chromium, blocks each final submission request for scoring by URL match and an LLM judge, and records five layers of run evidence.

## 工程与产业

- [BrowserTrace](https://awesomecua.com/resources/github-aaronlab-browsertrace/) — Date not recorded
  Local, cloud-free replay debugger that records each Browser Use step's screenshot, URL, action and model I/O as a timeline and reports the step at which a failed run diverges from a known-good one.
- [GUI-HARVEST](https://awesomecua.com/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [Lumen browser agent](https://awesomecua.com/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [ORBIT framework](https://awesomecua.com/resources/github-wlanderson0-orbit/) — Date not recorded
  Inspect-based multi-agent evaluation framework with role, scheduling and communication controls, BrowserART accessibility-tree actions, and desktop mouse, keyboard and screenshot tools.
- [PhantomJS](https://awesomecua.com/resources/github-ariya-phantomjs/) — Date not recorded
  PhantomJS is a scriptable headless WebKit tool for automating web pages, capturing page contents, testing, and monitoring network activity.
- [web-eval-agent](https://awesomecua.com/resources/github-refreshdotdev-web-eval-agent/) — Date not recorded
  MCP server that launches a browser-use agent to run a web app, capture screenshots, console and network logs, and return a UX report to the coding agent.
