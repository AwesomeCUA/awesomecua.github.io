# Observability

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/observability/records.jsonl

## Papers & surveys

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
- [SkillTracer: Structural Failure Attribution and Refinement of Agentic Skills in Long-Horizon Web Tasks](https://awesomecua.com/resources/url-a2c0216a0d8875e86dee/) — 2026-08-08
  SkillTracer maps web agent skills to inspectable plan graphs, uses interaction traces to locate failures, and refines reusable skills across long tasks and episodes.
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
  WebRetriever evaluates navigation, knowledge-assisted interaction and end-to-end information-extraction workflows under separate protocols. Its NavEval judge uses richer interaction context to diagnose cases where navigation success and useful task completion diverge.
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
- [Computer Agent Arena: Toward Human-Centric Evaluation and Analysis of Computer-Use Agents](https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/) — 2026-04-20
  Crowdsourced arena where users set tasks on cloud Ubuntu or Windows desktops, watch two anonymous computer-use agents attempt them side by side and vote; reports 2,201 votes over 12 agents.
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

## Benchmarks

- [Agent-CE](https://awesomecua.com/resources/github-anaishowland-agent-ce/) — Date not recorded
  Agent-CE is a containerized continuous evaluation platform for benchmarking web browsing agents across reproducible task suites.
- [Agent-friendly UI](https://awesomecua.com/resources/github-showlab-aui/) — Date not recorded
  An evaluation and revision pipeline tests generated websites with computer-use agents, checks task completion against rules, and summarizes navigation failures.
- [Agentalyze](https://awesomecua.com/resources/github-ilyat9-agentalyze/) — Date not recorded
  Agentalyze is an evaluation harness for LLM browser agents with real Chromium tasks, DOM-based state verifiers, and step-level trace analysis.
- [AgentBoard](https://awesomecua.com/resources/github-hkust-nlp-agentboard/) — Date not recorded
  AgentBoard evaluates multiturn agents across several tasks, including web interactions, and provides progress metrics and visualizations for analyzing their runs.
- [ClawBench](https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/) — Date not recorded
  Everyday-task benchmark on live websites that runs browser agents in containerized Chromium, blocks each final submission request for scoring by URL match and an LLM judge, and records five layers of run evidence.
- [CUA Eval Kit](https://awesomecua.com/resources/github-marwanalsiddiq-cua-eval-kit/) — Date not recorded
  Controlled browser fixture and 10-task computer-use evaluation suite for grading web agent accuracy and step efficiency.
- [Intentproof](https://awesomecua.com/resources/github-egagofur-intentproof/) — Date not recorded
  AI-driven end-to-end verification orchestrator and interactive browser testing harness.
- [mac-agent-bench](https://awesomecua.com/resources/github-prithviseran-mac-agent-bench/) — Date not recorded
  mac-agent-bench runs computer-use tools on a logged-in Mac, checking task outcomes with scripts while measuring changes to the foreground app and cursor.
- [Maudslay](https://awesomecua.com/resources/github-theo-ai-lab-maudslay/) — Date not recorded
  Maudslay evaluates release readiness and pass^k reliability of computer-use agents against independent backend and email ground truth.
- [PhoneHarness](https://awesomecua.com/resources/github-phoneharness-phoneharness/) — Date not recorded
  PhoneHarness evaluates Android phone agents that combine GUI actions with device commands and host tools. It provides a runtime, a benchmark runner subset and trace-based checks of task outcomes.
- [UI-FaultLab](https://awesomecua.com/resources/github-kakoyvostorg-ui-faultlab/) — Date not recorded
  UI-FaultLab benchmarks auditable agent-versus-application failure attribution in visual UI testing workflows.
- [UniClawBench](https://awesomecua.com/resources/github-hku-mmlab-uniclawbench/) — Date not recorded
  UniClawBench evaluates agents on tool, browser, file, and desktop GUI workflows. Its bilingual release contains 400 tasks, Docker runtimes, and trace review tools.
- [web-agent-eval (REAL Benchmark Runner)](https://awesomecua.com/resources/github-saarthak-yadav-web-agent-eval/) — Date not recorded
  Evaluates web agents on 102 replica websites from the REAL benchmark under explicit step, token, and budget constraints.
- [WebRetriever](https://awesomecua.com/resources/github-mininglamp-ai-webretriever/) — Date not recorded
  WebRetriever supplies a web-agent evaluation runner and a judge that assesses task completion from captured requests, actions and page URLs.

## Datasets

- [ClawBenchV2Trace](https://awesomecua.com/resources/url-3452cef2f99d7de2935a/) — Date not recorded
  Raw execution traces of browser-agent runs on the 130-task ClawBench V2 set, each with a screen recording, network capture, browser action stream, agent reasoning, the intercepted final request and a judge verdict.
- [CUA Speedrun results](https://awesomecua.com/resources/url-099451a33699510476df/) — Date not recorded
  Trajectory archives and per-task results from CUA Speedrun evaluations of computer-use models on OSWorld subsets, CUA-World and MyPCBench, with verifier scores, measured task times and recorded or estimated costs.
- [Gelato OS-World agent trajectories](https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/) — Date not recorded
  Gelato-30B-A3B and GTA1-32B OS-World agent runs, three trials each in the same GPT-5-planned GTA1.5-based harness, with per-task trajectories, initial and step screenshots, and automated results.
- [Holo4 Trajectories](https://awesomecua.com/resources/url-b5dab1881ac1069e44ce/) — Date not recorded
  Dataset of 7,366 computer-use agent execution trajectories from Holo4 27B and Holo4 35B-A3B, recording step-level reasoning, actions, tool results, and screenshots.
- [NAIL-Group/ClawBenchV1Trace](https://awesomecua.com/resources/url-e7653b062bded670198a/) — Date not recorded
  ClawBench V1 Traces releases browser-agent run records with screen video, actions, network traffic and agent messages for replay, debugging and regrading.
- [OSWorld-V2 0624 Codex attempt trajectories](https://awesomecua.com/resources/url-9112dfcb201f2de7241f/) — Date not recorded
  Self-reported OSWorld-V2 run of a Codex-based harness with gpt-5.6-sol on all 108 tasks: per-step CLI and GUI actions, screenshots and scores, plus retried attempts and the solution and recovery cards that guided them.
- [Sai on OSWorld v2.1 reference-VM runs](https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/) — Date not recorded
  Simular's 134 clean runs of its Sai computer-use agent on the 108 OSWorld v2.1 tasks in a reference Ubuntu VM, with OSWorld trajectories, agent records, harness and grader logs, scorecards and screenshot and video tars.
- [Sai OSWorld-V2 benchmark runs](https://awesomecua.com/resources/url-e0180b9651fec04d0308/) — Date not recorded
  Simular's per-task evidence from two complete 108-task OSWorld-V2 runs of its Sai computer-use agent: scores, step trajectories, message traces, evaluator and API logs, and run manifests, without screenshots.
- [SWEeper-Bench-traces](https://awesomecua.com/resources/url-54907fd6dc968eaced34/) — Date not recorded
  Recorded runs from the SWEeper-Bench paper, 5,200 in all across 42 agent configurations, each with the coding agent's trajectory, shell commands and patch plus the browser verifier's trajectories and verdicts.
- [xunsss/osworld2-codex-gpt56sol-0624-attempt-preview](https://awesomecua.com/resources/url-bf57897ba4d047112345/) — Date not recorded
  This OSWorld-V2 dataset provides compact tables for browsing Codex task summaries, attempts, trajectory events, and executed GUI or CLI actions.

## Engineering & industry

- [@jshookmcp/jshook](https://awesomecua.com/resources/github-vmoranv-jshookmcp/) — Date not recorded
  An MCP server for agent-assisted front-end analysis that combines browser automation, network inspection, and JavaScript and WASM analysis tools.
- [A2R2 (Android Agent Reliability Runtime)](https://awesomecua.com/resources/github-rty90-android-agent-reliability-runtime/) — Date not recorded
  A2R2 is a black-box safety and reliability runtime for Android GUI agents that intercepts unsafe actions and detects execution loops.
- [action-receipt](https://awesomecua.com/resources/github-jeremiahm37-action-receipt/) — Date not recorded
  Generates deterministic per-action DOM and network effect receipts for auditing browser-agent executions.
- [Aether Agent Browser](https://awesomecua.com/resources/github-aetherai3-agent-browser/) — Date not recorded
  Self-hosted Chrome agent runtime with bounded API control, live VNC observation, and human takeover.
- [Agent DevTools (39-tools)](https://awesomecua.com/resources/github-yydongro-39-tools/) — Date not recorded
  Action-level observability, state verification, and debugging toolkit for computer-use agents.
- [Agent VCR](https://awesomecua.com/resources/github-ixchio-agent-vcr/) — Date not recorded
  Agent VCR records, replays, and diffs deterministic cassettes of multi-turn agent tool calls, state transitions, and execution traces.
- [agent-eyes](https://awesomecua.com/resources/github-mohanli-eng-agent-eyes/) — Date not recorded
  MCP server and workflow skill giving Claude Code live visual and DOM inspection over the browser runtime.
- [agent-qa](https://awesomecua.com/resources/url-f7e21b1a3ba5c58a73bc/) — Date not recorded
  QA agent for browser and mobile apps that executes actions through Playwright and Appium, verifies steps, and records runs. Its publisher reports completing all AndroidWorld tasks.
- [agent-view](https://awesomecua.com/resources/github-petukhovart-agent-view/) — Date not recorded
  A CLI for agents to inspect and operate Electron, Windows Tauri, and Chromium apps through Chrome DevTools Protocol, with accessibility, screenshot, input, and diagnostic commands.
- [AgentDesk (Enterprise Digital Workforce Platform)](https://awesomecua.com/resources/github-huzjie-agentdesk/) — Date not recorded
  Enterprise digital workforce operations platform combining computer-use execution, reusable skills, and governance.
- [AgentScrub](https://awesomecua.com/resources/github-codewithsupra-agentscrub/) — Date not recorded
  Visual session-replay debugger for Browser Use agent runs that lets developers scrub through step timelines and DOM states.
- [agentwatch](https://awesomecua.com/resources/github-yubinkim444-agentwatch/) — Date not recorded
  Translucent in-tab DevTools HUD overlay for browser AI agents that displays live agent thoughts, targets, and actions.
- [AI Web](https://awesomecua.com/resources/github-dongxinsuperman-ai-web/) — Date not recorded
  Natural-language Browser Agent execution platform supporting multi-browser scheduling, task queues, and traceable QA test reports.
- [AI Web Tester](https://awesomecua.com/resources/github-siamalsobari-ai-web-tester/) — Date not recorded
  Autonomous browser testing, QA matrix execution, and console/network telemetry toolkit for AI coding agents.
- [AIHawk](https://awesomecua.com/resources/github-feder-cr-aihawk/) — Date not recorded
  AIHawk searches and scores jobs against a resume, then uses Firefox to fill and submit applications selected by the user. It retains each page's response and a screenshot.
- [Amazon Bedrock AgentCore](https://awesomecua.com/resources/url-ecf89236d4e75b05c7b4/) — Date not recorded
  AWS managed agent platform whose Browser tool runs isolated cloud browser sessions with automation and live-view streams and optional recording, alongside runtime, memory, gateway and code-execution services.
- [Apache Maka](https://awesomecua.com/resources/github-apache-maka/) — Date not recorded
  Apache Maka is an agent workspace for macOS that records verifiable execution traces across browser, terminal, and GUI actions.
- [Argus CDP MCP Server](https://awesomecua.com/resources/github-jmsa-argus/) — Date not recorded
  Chrome DevTools Protocol MCP server giving AI agents live browser DOM, console, network, and interaction tools.
- [ARTEMIS](https://awesomecua.com/resources/github-google-artemis/) — Date not recorded
  ARTEMIS is an Android agent that carries out natural-language tasks across apps. It targets UI elements visually or by index and exposes device runs through an MCP server.
- [aside-telegram-bridge](https://awesomecua.com/resources/github-saiamartya-aside-telegram-bridge/) — Date not recorded
  A Telegram bridge and phone Mini App for sending tasks to the Aside browser agent, viewing live progress and transcripts, and responding to its decisions.
- [AskUI](https://awesomecua.com/resources/url-d071f3f5a01a5f9d6d78/) — Date not recorded
  AskUI runs plain-language Android app tests through visual screen interaction on devices and emulators, with screenshot traces and CI integrations.
- [augur-sdk](https://awesomecua.com/resources/github-mercurialsolo-augur-sdk/) — Date not recorded
  augur-sdk instruments screenshot-grounded computer-use agents to record structured telemetry bundles, screenshots, and failure traces.
- [autocomputer](https://awesomecua.com/resources/github-yygg693-autocomputer/) — Date not recorded
  Desktop GUI automation platform combining a Rust execution core, Python SDK, MCP server, and HTML5 monitoring dashboard.
- [Autonomous Vision Browser-Use Agent](https://awesomecua.com/resources/github-therealfullmetal55555-browser-use-agent/) — Date not recorded
  Playwright-based vision browser agent featuring loop detection, DOM-plus-screenshot grounding, and per-step token telemetry.
- [AutoWebNav](https://awesomecua.com/resources/github-mindattic-autowebnav/) — Date not recorded
  AutoWebNav is a .NET library for WebView2 browser automation, combining page actions and element resolution with interaction recording and live observation.
- [AUV](https://awesomecua.com/resources/github-moeru-ai-auv/) — Date not recorded
  Rust toolkit, CLI and MCP server for scripting reusable GUI operations on macOS, Linux and Windows, with native input drivers, accessibility trees, OCR and traced, verifiable action results.
- [Avenir-UX](https://awesomecua.com/resources/github-onflow-ai-avenir-ux/) — Date not recorded
  Avenir-UX runs web tasks and scores interface usability after agent actions. It combines step assessments with persona settings and produces session reports.
- [aworld-mcp-servers](https://awesomecua.com/resources/github-qingw-dev-aworld-mcp-servers/) — Date not recorded
  A collection of service endpoints that includes a Browser Use API for natural-language web tasks. Its browser endpoint can return an execution trace.
- [bdg - Browser Debugger CLI](https://awesomecua.com/resources/github-szymdzum-browser-debugger-cli/) — Date not recorded
  A browser CLI for agents to navigate and interact with pages while inspecting the DOM, network requests, console output, and layout through individual commands.
- [Browser Use Terminal](https://awesomecua.com/resources/github-browser-use-terminal/) — Date not recorded
  Browser Use Terminal is a Rust terminal user interface (TUI) for interactively controlling and monitoring browser-use agents.
- [Browser Workbench for Codex](https://awesomecua.com/resources/github-slemmis-browser-workbench-for-codex/) — Date not recorded
  Playwright-powered browser inspection, visual testing, and interactive debugging workbench for OpenAI Codex.
- [browser-link](https://awesomecua.com/resources/github-jobshimo-browser-link/) — Date not recorded
  Developer-focused MCP bridge connecting Claude Code, OpenCode, and GitHub Copilot CLI to a live Chrome browser.
- [Browserless](https://awesomecua.com/resources/github-browserless-browserless/) — Date not recorded
  Browserless runs headless browsers as a Docker service for Puppeteer and Playwright scripts, with session concurrency controls and a live debugging view.
- [BrowserTrace](https://awesomecua.com/resources/github-aaronlab-browsertrace/) — Date not recorded
  Local, cloud-free replay debugger that records each Browser Use step's screenshot, URL, action and model I/O as a timeline and reports the step at which a failed run diverges from a known-good one.
- [BrowserTrack](https://awesomecua.com/resources/github-litepacks-browsertrack/) — Date not recorded
  Local browser diagnostics collector and Model Context Protocol bridge for sharing live console/network traces with coding agents.
- [Case Flow](https://awesomecua.com/resources/github-dongxinsuperman-case-flow-ai/) — Date not recorded
  Case Flow is a visual test workbench that sends cases to phone and web executors, then gathers run status, reports, and evidence for review.
- [cc-haha](https://awesomecua.com/resources/github-nanmicoder-cc-haha/) — Date not recorded
  cc-haha is a clean-room TypeScript implementation and visual debugger of the Claude Code agent harness, memory, and tool runtime.
- [Chrome DevTools MCP Persistent Bridge](https://awesomecua.com/resources/github-dev-newb-chrome-devtools-mcp-persistent-bridge/) — Date not recorded
  Persistent, fail-closed Chrome DevTools Model Context Protocol bridge for OpenAI Codex on Windows.
- [chrome-agent](https://awesomecua.com/resources/github-captivus-chrome-agent/) — Date not recorded
  A CLI that exposes Chrome DevTools Protocol commands to agents for browser navigation, screenshots and event monitoring, with shared browser access.
- [chromedp-proxy](https://awesomecua.com/resources/github-chromedp-chromedp-proxy/) — Date not recorded
  chromedp-proxy forwards Chrome DevTools Protocol traffic between a client and browser while logging session messages for debugging browser automation.
- [ClaudeDesk](https://awesomecua.com/resources/github-phantivia-claudedesk/) — Date not recorded
  Streams the Windows desktop to a browser interface so coding agents can visually inspect and debug GUI applications.
- [ClawPilot Command Center](https://awesomecua.com/resources/github-edgeagent-clawpilot-command-center/) — Date not recorded
  Chrome Manifest V3 command center for OpenClaw agents to capture page context, review planned actions, and monitor runs.
- [Codex Boss Desktop](https://awesomecua.com/resources/github-zhiheng-zhang-mera-codex-boss/) — Date not recorded
  Local-first Electron controller for multi-model deliberation and evidence-preserving computer-use orchestration.
- [CodexQA Jev Browser](https://awesomecua.com/resources/github-openqa-cn-jev-browser/) — Date not recorded
  CodexQA Jev Browser operates Playwright pages through indexed controls and model-selected actions, with case replay and reports based on visible page evidence.
- [cube-harness](https://awesomecua.com/resources/github-the-ai-alliance-cube-harness/) — Date not recorded
  cube-harness runs agent evaluations across compatible benchmarks, including MiniWob, and provides trajectories, screenshots, and an experiment viewer.
- [Custom Chrome Dev MCP](https://awesomecua.com/resources/github-habaandrei-custom-chrome-dev-mcp/) — Date not recorded
  Local-only Model Context Protocol server that drives the user's already-open Chrome session over DevTools.
- [Deck](https://awesomecua.com/resources/github-cofy-x-deck/) — Date not recorded
  Deck is an open-source desktop cockpit for managing isolated local AI agent sandboxes, desktop sessions, and developer handoffs.
- [DeepSeekEyes](https://awesomecua.com/resources/github-dttxorg-deepseekeyes/) — Date not recorded
  Auditable vision and cross-platform computer-use runtime for DeepSeek Harness with cryptographic evidence receipts.
- [devloop](https://awesomecua.com/resources/github-vincentvella-devloop/) — Date not recorded
  Model Context Protocol server that correlates headless browser automation actions and dev-server logs on a single unified timeline.
- [DevScope Bridge](https://awesomecua.com/resources/github-15273-devscope-bridge/) — Date not recorded
  Local-first Chrome side panel and bridge connecting Claude Code, Cursor, and Codex to live browser DOM and console state.
- [DevTools Lens MCP](https://awesomecua.com/resources/github-aakcay5656-devtools-lens-mcp/) — Date not recorded
  Chrome DevTools Model Context Protocol server exposing console, network, DOM, and performance inspection to AI agents.
- [Diwall](https://awesomecua.com/resources/github-ronandavalan-diwall/) — Date not recorded
  Diwall gives language models screenshots, numbered page elements and accessibility data for browser actions, while preserving captures that a human can review.
- [Domstamp](https://awesomecua.com/resources/github-zuub-don-domstamp/) — Date not recorded
  Framework-neutral browser-state snapshotter capturing compact, diffable DOM and accessibility states for AI web agents.
- [DSH Patrol](https://awesomecua.com/resources/github-qigelunbiya-dsh-patrol/) — Date not recorded
  Teach-once, patrol-repeatedly website inspection and monitoring plugin for DeepSeek Harness.
- [DSH × Termux — mobile operations kit](https://awesomecua.com/resources/github-maopk-dsh-termux-kit/) — Date not recorded
  An Android operations kit for DeepSeek Harness with widgets, a Console app, and an Accessibility bridge that lets an AI read and control the phone screen.
- [dsh-browser-secure](https://awesomecua.com/resources/github-frankxie-java-dsh-browser-secure/) — Date not recorded
  Security-hardened fork of `dsh-browser` for DeepSeek Harness adding audit logging and domain egress allowlists.
- [dsh-plugin-ui-debug](https://awesomecua.com/resources/github-featherhunter-dsh-plugin-ui-debug/) — Date not recorded
  DeepSeek Harness plugin for inspecting live DOM styles, layout issues, and console errors during frontend UI debugging.
- [DualKey](https://awesomecua.com/resources/github-wadekeith-dualkey-agent/) — Date not recorded
  DualKey enforces deterministic policy checks, human approvals, and cryptographically signed receipts for AI agent actions.
- [ElectroMCP](https://awesomecua.com/resources/github-therealseandonahoe-electromcp/) — Date not recorded
  Connects Claude and MCP-compatible agents to Electron desktop apps for UI clicking, screenshot capture, IPC inspection, and HAR recording.
- [Evidence Workspace](https://awesomecua.com/resources/github-anand-0038-evidence-workspace/) — Date not recorded
  Human-controlled WebMCP research workspace for reviewing source-backed claims gathered by browser agents.
- [Evidence-Bounded GEO Workbench (WebMCP)](https://awesomecua.com/resources/github-subbu-ctd-chinamarketingai-webmcp/) — Date not recorded
  Browser-native human-in-the-loop WebMCP workbench with evidence-bounded action verification.
- [Farsyn](https://awesomecua.com/resources/github-xala-technologies-farsyn/) — Date not recorded
  Geographic experience and web-evidence engine that drives real browsers across locales and records verifiable captures.
- [FluidGPT](https://awesomecua.com/resources/url-738bfdfe24671ad29a43/) — Date not recorded
  An Android agent that selects reusable app routines from a task goal and executes them through the accessibility tree. Its benchmark report presents episode recordings and action traces.
- [GlassBrowser](https://awesomecua.com/resources/github-lzw12w-glass-browser/) — Date not recorded
  Auditable, low-cost, DOM-only browser agent designed for transparent step-by-step inspection and debugging.
- [Gofer](https://awesomecua.com/resources/github-jleuth-gofer/) — Date not recorded
  Gofer is a persistent desktop agent that monitors screen changes, executes shell and GUI actions, and communicates via Telegram or a local REPL.
- [Grok Chrome Bridge](https://awesomecua.com/resources/github-davidsolheim-grok-chrome-bridge/) — Date not recorded
  Chrome bridge allowing Grok Build to inspect and interact with live local web applications during development.
- [GUI-HARVEST](https://awesomecua.com/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [hai-agents](https://awesomecua.com/resources/github-hcompai-hai-agents-python/) — Date not recorded
  hai-agents is a Python SDK and CLI for launching browser and desktop agents through H Company's Agents API and monitoring their sessions.
- [hai-agents](https://awesomecua.com/resources/github-hcompai-hai-agents-ts/) — Date not recorded
  A TypeScript SDK for running browser agents through H Company's Agents API. It provides session controls, progress events and ways to steer an agent during a task.
- [Helios](https://awesomecua.com/resources/github-vrtnis-helios/) — Date not recorded
  Observability and evaluation harness that converts H computer-use agent sessions into reviewable traces and failure findings.
- [Hunter (Autonomous Job-Search Agent)](https://awesomecua.com/resources/github-lodelux-hunter-public/) — Date not recorded
  Autonomous job-search and application browser agent with evidence-linked fit scoring and submission tracking.
- [ibara](https://awesomecua.com/resources/github-mayberrydt-ibara/) — Date not recorded
  ibara connects MCP-enabled agents to spare Omarchy computers for desktop and browser tasks. A console displays screens and tasks and lets a person take control.
- [Index](https://awesomecua.com/resources/github-lmnr-ai-index/) — Date not recorded
  Archived Laminar browser agent in Python that drives Playwright Chromium with vision-capable LLMs, returns Pydantic-structured results and offers an interactive CLI with optional Laminar tracing.
- [Inside the Agent (SAE Browser Harness)](https://awesomecua.com/resources/github-kalyvask-inside-the-agent/) — Date not recorded
  Reproducible harness for Sparse Autoencoder (SAE) feature steering and live interpretability monitoring of browser agents.
- [Interlock Relay](https://awesomecua.com/resources/github-wsk-build-interlock-relay/) — Date not recorded
  Interlock Relay is an Android library that connects sandboxed agents to host-app capabilities through an approval gate. It provides execution backends, quotas, artifacts, and audit logs.
- [Kernel](https://awesomecua.com/resources/github-kernel-kernel-images/) — Date not recorded
  Kernel supplies isolated Chrome browser instances for web agents and automation. Its images support remote control, live viewing, and session recording.
- [Kernel CLI](https://awesomecua.com/resources/github-onkernel-cli/) — Date not recorded
  Kernel CLI manages sandboxed Chrome sessions for browser automation and web agents. It can deploy applications, invoke actions, and provide live views of managed browsers.
- [Kota-Kawa Browser-Agent](https://awesomecua.com/resources/github-kota-kawa-browser-agent/) — Date not recorded
  FastAPI and browser-use web agent featuring live CDP session streaming, Server-Sent Events (SSE) progress logs, and interactive UI control.
- [lazy-mobile-mcp](https://awesomecua.com/resources/github-leaf76-lazy-mobile-mcp/) — Date not recorded
  Lazy-mobile-mcp gives MCP clients tools to inspect and control Android and iOS devices, with screenshots, touch actions, UI dumps, and performance sampling.
- [lean-chronoscope-mcp](https://awesomecua.com/resources/github-yyhezkel-lean-chronoscope-mcp/) — Date not recorded
  Token-efficient headless Chrome MCP server in Docker that records console, network, and DOM timelines for coding agents.
- [lnwjud (Windows MCP Access)](https://awesomecua.com/resources/github-phuongt2576-lnwjud-readme/) — Date not recorded
  Provides AI agents with native Windows desktop access via MCP, secure tunnels, and live monitoring.
- [Lumen browser agent](https://awesomecua.com/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
- [MaaDebugger](https://awesomecua.com/resources/github-maaxyz-maadebugger/) — Date not recorded
  A debugger for MaaFramework automation projects that runs as a local web interface on port 8011 by default, installed from PyPI with pip or uv; a Go and web rewrite is published on npm.
- [MaaEvidenceKit](https://awesomecua.com/resources/github-windsland52-maaevidencekit/) — Date not recorded
  A CLI and TypeScript SDK that extracts located runtime and static evidence from MaaFramework logs and projects, with stable evidence IDs, timelines and JSON or text views for agent harnesses.
- [MaaInspector](https://awesomecua.com/resources/github-tanyashue-maainspector/) — Date not recorded
  A Tauri desktop node editor for MaaFramework 5 pipelines that builds workflows by drag and drop and runs and debugs nodes while showing their execution state.
- [MaaLogAnalyzer](https://awesomecua.com/resources/github-maaxyz-maaloganalyzer/) — Date not recorded
  A visual analyzer for MaaFramework application logs that shows task execution with recognition and action details, keyword and regex search, an ELK node flowchart with replay, and run statistics.
- [MaaPipelineEditor](https://awesomecua.com/resources/github-kqcoxn-maapipelineeditor/) — Date not recorded
  A browser-based visual editor for MaaFramework Pipeline JSON that builds automation flows as connected nodes, with OCR and screenshot helpers, node templates, flow debugging and an optional local service.
- [mapleluvr cu (Evidence-Bound Windows CLI)](https://awesomecua.com/resources/github-mapleluvr-cu/) — Date not recorded
  Evidence-bound computer-use CLI for Windows that pairs every UI action with pre/post window observations.
- [MELRA](https://awesomecua.com/resources/github-xagi-lab-melra/) — Date not recorded
  Modular Execution Layer for Reliable Autonomy (MELRA), a local MCP runtime that validates agent tool calls and gates risky actions.
- [Memori](https://awesomecua.com/resources/github-memorilabs-memori/) — Date not recorded
  Memori captures structured execution facts from agent tool calls and conversations into a relational memory store.
- [Midscene Java](https://awesomecua.com/resources/github-alstafeev-midscene-java/) — Date not recorded
  A Java SDK for agents that operate web pages through natural-language instructions. It combines screenshot and DOM grounding with browser actions and execution reports.
- [MobilePilot Runtime](https://awesomecua.com/resources/github-qizhanggu-mobilepilot-runtime/) — Date not recorded
  MobilePilot is an auditable Android GUI agent runtime with structured action verification, on-demand UI trees, and bounded error recovery.
- [ModCDP](https://awesomecua.com/resources/github-browserbase-modcdp/) — Date not recorded
  ModCDP is Browserbase's framework for extending the Chrome DevTools Protocol with custom commands, events, and agent middlewares.
- [Momo](https://awesomecua.com/resources/github-holdtroop-momo/) — Date not recorded
  Policy-compliant autonomous AI browser agent operating in local context with transparent intent logging and human oversight.
- [Mosaic Desktop Automation](https://awesomecua.com/resources/github-quill-00-mosaic-desktop-automation/) — Date not recorded
  Local-first Windows dashboard for scheduling, watching, and auditing desktop automation agents.
- [MT Code](https://awesomecua.com/resources/github-munimtechnologies-mtcode/) — Date not recorded
  MT Code is a desktop app that runs coding agents and gives them browser computer-use controls, a live computer view and access to reachable machines.
- [nemosr dsh-personal-plugins](https://awesomecua.com/resources/github-nemosr-dsh-personal-plugins/) — Date not recorded
  DeepSeek Harness plugin bundle providing `web_app_testing` browser automation and `host-web-debug` live inspection tools.
- [neuron-inspector](https://awesomecua.com/resources/github-conquext-neuron-inspector/) — Date not recorded
  Exposes 98 Chrome inspection, DOM debugging, network tracing, and interaction tools to AI agents over MCP.
- [Nexus Computer Use Harness (NexusCUH)](https://awesomecua.com/resources/github-subasah-computer-use-harness/) — Date not recorded
  NexusCUH is a computer-use agent harness with sandboxed execution, MCP integration, policy guardrails, and trace observability.
- [Nova Act Extension](https://awesomecua.com/resources/github-aws-nova-act-extension/) — Date not recorded
  A VS Code, Kiro and Cursor extension for writing Nova Act browser-agent scripts, with chat-to-script generation, 7 templates, live debugging, an action viewer and AWS deployment.
- [Open Computer](https://awesomecua.com/resources/github-mintplex-labs-open-computer/) — Date not recorded
  Open Computer gives agents an isolated Debian desktop with a browser and native app controls. People can watch and assist through a live interface.
- [openadapt-viewer](https://awesomecua.com/resources/github-openadaptai-openadapt-viewer/) — Date not recorded
  openadapt-viewer builds an HTML report from desktop or web agent runs, showing task outcomes and step-by-step screenshots alongside actions and reasoning.
- [OpenAgent](https://awesomecua.com/resources/github-the-open-agent-openagent/) — Date not recorded
  OpenAgent is a self-hostable assistant whose agent loop can operate a browser by navigating, clicking and filling forms. It also runs code and connects to external tools.
- [OpenAI Computer Use Sample Apps](https://awesomecua.com/resources/github-openai-openai-cua-sample-app/) — Date not recorded
  OpenAI reference agents that drive a browser through Playwright JavaScript or a desktop through PyAutoGUI Python, with the model writing code via the Responses API, plus mock kanban, paint and booking labs.
- [opencli-plugin-albato](https://awesomecua.com/resources/github-vecyang1-opencli-plugin-albato/) — Date not recorded
  An OpenCLI adapter lets agents inspect and change Albato automations through its web console, then reads the live DOM to verify state changes.
- [ORBIT framework](https://awesomecua.com/resources/github-wlanderson0-orbit/) — Date not recorded
  Inspect-based multi-agent evaluation framework with role, scheduling and communication controls, BrowserART accessibility-tree actions, and desktop mouse, keyboard and screenshot tools.
- [PhantomJS](https://awesomecua.com/resources/github-ariya-phantomjs/) — Date not recorded
  PhantomJS is a scriptable headless WebKit tool for automating web pages, capturing page contents, testing, and monitoring network activity.
- [PRAXOVELA](https://awesomecua.com/resources/github-axisvela-praxovela-open/) — Date not recorded
  Governable, local-first desktop agent runtime with policy enforcement and auditable execution traces.
- [Predicate Python SDK](https://awesomecua.com/resources/github-predicatesystems-predicate-runtime-python/) — Date not recorded
  The Predicate Python SDK gives browser agents semantic page snapshots, UI assertions, and run traces so they can verify actions and inspect failures.
- [Predicate Systems (formerly SentienceAPI)](https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/) — Date not recorded
  Runtime trust layer for browser agents: a sidecar checks each action against local policy before it runs, and SDKs turn pages into compact ranked element snapshots and verify outcomes with DOM assertions.
- [Predicate TypeScript SDK](https://awesomecua.com/resources/github-predicatesystems-sdk-typescript/) — Date not recorded
  Predicate TypeScript SDK supplies browser-agent snapshots, element actions, assertions and traces for building runs that check UI outcomes.
- [predicate-secure](https://awesomecua.com/resources/github-predicatesystems-predicate-secure/) — Date not recorded
  predicate-secure is a security wrapper for browser agents that checks actions against policy, verifies outcomes, and records audit evidence.
- [Prism AI Screen Reader](https://awesomecua.com/resources/github-chrismannina-prism-ai-screen-reader/) — Date not recorded
  Prism is a macOS screen reader and activity analyzer that captures screenshots and summarizes user desktop workflows with vision-language models.
- [ProofPack](https://awesomecua.com/resources/github-ebt55-proofpack/) — Date not recorded
  Pre-approval review and verification runtime where every agent finding and UI state is backed by a SHA-hashed capture.
- [Qontinui Runner](https://awesomecua.com/resources/github-qontinui-qontinui-runner/) — Date not recorded
  Qontinui Runner is a desktop application that executes configured GUI automation projects and monitors their progress. It supports mouse, keyboard, and screen actions.
- [ReactSentinel](https://awesomecua.com/resources/github-edgarbnt-reactsentinel/) — Date not recorded
  Model Context Protocol server that lets AI agents inspect live React component state, replay interactions, and validate UI fixes in the browser.
- [redux-webmcp](https://awesomecua.com/resources/github-breeznik-redux-webmcp/) — Date not recorded
  A WebMCP bridge for Redux Toolkit apps that lets browser agents dispatch allowed actions and inspect state changes. Developers can require approval for selected actions.
- [ReproSight](https://awesomecua.com/resources/github-tungcorn-reprosight/) — Date not recorded
  ReproSight is a CLI that lets coding agents reproduce visual defects in a browser, collect evidence, isolate edits in a worktree, and run regression checks.
- [Reqvexa](https://awesomecua.com/resources/github-kareemheshaam-reqvexa/) — Date not recorded
  HAR-based HTTP provenance analyzer that traces cookies, tokens, and headers behind browser-agent network requests.
- [Ringlight WebMCP](https://awesomecua.com/resources/github-doom2quake-ringlight/) — Date not recorded
  WebMCP investigation console where browser agents trace entity graphs across live web views with human review.
- [Rocuronium](https://awesomecua.com/resources/github-kageroumado-rocuronium/) — Date not recorded
  Isolates macOS computer-use agents inside a separate login session while rendering a live visible-agent overlay on the host screen.
- [rrweb](https://awesomecua.com/resources/github-rrweb-io-rrweb/) — Date not recorded
  rrweb captures web-page state and user interactions, then reconstructs sessions for replay through its recording, replay, and player packages.
- [Safari iOS Web Inspector MCP](https://awesomecua.com/resources/github-rodneyrdx-safari-ios-webinspector-mcp/) — Date not recorded
  TypeScript Model Context Protocol server for inspecting and debugging live iPhone Safari WebKit sessions from macOS.
- [Sandbar](https://awesomecua.com/resources/github-jdrolls-sandbar/) — Date not recorded
  A self-hosted Linux desktop container for computer-use agents, with a browser-streamed workspace, human takeover, and optional API and MCP control.
- [Scavenge](https://awesomecua.com/resources/github-aarohim24-scavenge/) — Date not recorded
  Deterministic web-field inspector that extracts and verifies single webpage values with cryptographic evidence for coding agents.
- [Screenpipe](https://awesomecua.com/resources/github-screenpipe-screenpipe/) — Date not recorded
  Screenpipe continuously captures desktop screen text via accessibility/OCR and audio transcripts into a local database for AI agents.
- [ScreenWatch](https://awesomecua.com/resources/github-abnsapkota001-screenwatch/) — Date not recorded
  Python library for detecting persistent visual state changes and UI settlement in desktop applications.
- [SeeAct Web Agent (Chrome Extension)](https://awesomecua.com/resources/github-osu-nlp-group-seeactchromeextension/) — Date not recorded
  A Chrome extension that runs a SeeAct-based agent in an existing browser session to navigate websites, gather information and prepare forms.
- [sentineldesk-agent](https://awesomecua.com/resources/github-sentineldesk-agent/) — Date not recorded
  sentineldesk-agent operates a Linux desktop through MCP tools, offering terminal and browser chat interfaces while logging goals, actions and results.
- [SightRig](https://awesomecua.com/resources/github-coetzeexu-sightrig/) — Date not recorded
  SightRig is a traceable runtime and visual workbench for inspecting, guarding, and replaying GUI agent perceptions and actions.
- [SiteWarden](https://awesomecua.com/resources/github-shantodotdev-sitewarden/) — Date not recorded
  Autonomous, lightweight browser smoke-testing daemon written in Rust for continuous website verification.
- [Smouj AgentBrowser](https://awesomecua.com/resources/github-smouj-agent-browser/) — Date not recorded
  AI-powered browser automation platform combining a REST API, live web dashboard, and vision-assisted DOM interaction.
- [Steel MCP Server](https://awesomecua.com/resources/github-steel-dev-steel-mcp-server/) — Date not recorded
  Steel MCP Server gives MCP clients tools to read and operate cloud Chrome sessions through page elements, with session diagnostics and handoff for human input.
- [Supply Recovery Console (WebMCP)](https://awesomecua.com/resources/github-navi-ai-project-supply-recovery-console/) — Date not recorded
  WebMCP reference console for auditable, human-approved supply-chain actions executed by browser agents.
- [Talox](https://awesomecua.com/resources/github-avant-iconic-talox/) — Date not recorded
  Talox is a stateful Playwright browser runtime for AI agents with stealth interaction, structured page state, and trace observability.
- [TeleGen](https://awesomecua.com/resources/github-commoluo-telegen/) — Date not recorded
  TeleGen runs browser tasks against instrumented web apps, condenses interaction telemetry, and gives the resulting evidence to a code repair agent.
- [termcast](https://awesomecua.com/resources/github-chromedp-termcast/) — Date not recorded
  A Go utility that displays a chromedp browser page in a graphics terminal using screencast frames, with options to show the whole page or one element.
- [ThinkRun](https://awesomecua.com/resources/github-dundas-thinkrun/) — Date not recorded
  Browser session and screen recorder that packages visual bug reproductions and DOM traces for AI coding and browser agents.
- [Threadline WebMCP](https://awesomecua.com/resources/github-jameswirths-threadline/) — Date not recorded
  WebMCP argument debugger and research workspace with human-gated provenance tracking for browser agents.
- [TraceFact](https://awesomecua.com/resources/github-alex0ai-tracefact/) — Date not recorded
  Evidence-first reliability reporting and deterministic replay framework for coding and browser agents.
- [UI Debugger MCP](https://awesomecua.com/resources/github-developerz-ai-ui-debugger-mcp/) — Date not recorded
  Autonomous UI debugging MCP server that drives browsers and desktop apps to detect visual and functional bugs.
- [UnderPixel](https://awesomecua.com/resources/github-leluth-underpixel/) — Date not recorded
  Chrome extension and MCP server that correlates timestamped visual screen interactions with underlying network API calls.
- [Vadgr](https://awesomecua.com/resources/github-montbrain-vadgr/) — Date not recorded
  Vadgr runs agent tasks on a desktop computer through a CLI or phone app, using screenshots and input controls for optional app automation.
- [Valk](https://awesomecua.com/resources/github-ercbot-valk/) — Date not recorded
  Valk is a Python library and observable remote-desktop interface for programmatic mouse, keyboard, and screen control by AI agents.
- [web-eval-agent](https://awesomecua.com/resources/github-refreshdotdev-web-eval-agent/) — Date not recorded
  MCP server that launches a browser-use agent to run a web app, capture screenshots, console and network logs, and return a UX report to the coding agent.
- [WebMCP - Model Context Tool Inspector](https://awesomecua.com/resources/github-beaufortfrancois-model-context-tool-inspector/) — Date not recorded
  A Chrome extension displays WebMCP tools exposed by a page and lets developers inspect and execute them through a side panel.
- [WebOperator Experiments](https://awesomecua.com/resources/github-mahirlabibdihan-weboperator-experiments/) — Date not recorded
  Browsable viewers show WebOperator task trajectories for WebArena and WebArena-lite, with screenshots loaded from a linked Hugging Face dataset.
- [windows-mcp-server](https://awesomecua.com/resources/github-deploymenttheory-windows-mcp-server/) — Date not recorded
  An MCP server lets agents inspect and control Windows desktops through accessibility data and input tools, with device policy checks and audit logging.
- [WinWright](https://awesomecua.com/resources/github-alegauss-winwright/) — Date not recorded
  Playwright-inspired Windows desktop automation and testing framework that drives native apps and reports verified UI state.
- [Witness](https://awesomecua.com/resources/github-ericfinland-witness/) — Date not recorded
  Local-first observability and execution trace recorder for AI browser agents.
- [Zhuque Recruiting (朱雀招聘)](https://awesomecua.com/resources/github-shenkemin-sketch-zhuque-recruiting/) — Date not recorded
  Auditable Codex Computer Use skill for automating candidate sourcing and screening across web recruiting platforms.

## Learning resources

- [Predicate SDK Playground](https://awesomecua.com/resources/github-predicatesystems-predicate-sdk-playground/) — Date not recorded
  A collection of runnable browser-agent demos using semantic page snapshots and assertions, with logs, screenshots and token accounting for evaluation.
