# Observability

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/observability/records.jsonl

## Papers & surveys

- [WebFovea: When the Model Is Right but the Click Is Wrong -- Reliable Round Trips for Vision-Based Web Agents on Live Websites](https://awesomecua.github.io/resources/arxiv-2610-03036/) — 2026-10-02
  Describes WebFovea, a vision-based live-web agent whose execution loop checks action parsing, browser effects, feedback accuracy, and observation delivery. The report analyzes failures such as coordinate mismatches and silent control interactions and documents corresponding harness changes.
- [Auditing Web Agent Evaluation on WebArena-Lite: Human Review of Outcomes and Trajectories](https://awesomecua.github.io/resources/arxiv-2610-01491/) — 2026-10-01
  Audits WebArena-Lite outcomes and trajectories with human review to identify automatic-evaluator false negatives and the first consequential execution errors. It also studies explicit execution-state memory and procedural guidance, showing why final task scores can miss substantial differences in agent behavior.
- [GUI-HARVEST: Self-Improving GUI Agents through Evidence-Driven Harness Evolution](https://awesomecua.github.io/resources/arxiv-2610-00948/) — 2026-10-01
  Improves GUI-agent execution code by analyzing action effects and repeated-task failures, then validating bounded changes with frozen model weights.
- [Absorbed in Inertia: Activation Analysis for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2609-37176/) — 2026-09-29
  Studies repetitive, unproductive actions in desktop agents through their internal activation states. It proposes Reset, Reroute, Restore, a context intervention that temporarily resets an agent’s trajectory and later restores it to help escape repeated ineffective behavior.
- [GUITAR: Structured Failure Diagnosis of GUI Agents via State Transitions](https://awesomecua.github.io/resources/arxiv-2609-34113/) — 2026-09-28
  Introduces GUITAR, which groups visually different screens into functional states and analyzes agent failures over a state-transition graph. It uses the resulting bottlenecks to diagnose recurring mobile and web errors and evaluate targeted guidance.
- [OSWorld-Pro: Process-based Evaluation for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2609-24890/) — 2026-09-21
  Adds annotated intermediate subgoals to computer-use tasks and uses process-oriented evaluation to identify action and progress failures.
- [CURA: Certified Runtime Alarms for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2608-27808/) — 2026-08-28
  Introduces CURA, a telemetry-based runtime monitor that turns computer-use trajectories into sequential failure alarms and can trigger mid-task oversight. Its certificate controls false alarms, while the study separately reports detection performance and limits of retrospective monitoring.
- [How Benchmarks Mis-Score Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-28367/) — 2026-07-30
  Audits failure-scored computer-use trajectories to distinguish agent errors from broken tasks and evaluator false negatives. It organizes reliability issues across task construction, trajectory evidence, scoring, and reporting, then derives corresponding evaluation design practices.
- [Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2607-17527/) — 2026-07-20
  Introduces Sidekick, a communication interface that uses ambient status cues, multimodal action summaries, and visual and verbal explanations of reasoning to help people monitor computer-use agents. A user study examines progress awareness, error traceability, and multitasking across background and foreground interaction.
- [Plover: Steering GUI Agents through Plan-Centric Interaction](https://awesomecua.github.io/resources/arxiv-2607-15193/) — 2026-07-16
  Plover exposes GUI-agent plans and replanning as persistent artifacts that users can inspect and edit during execution. Its planner–executor design supports localized correction through plan edits, language guidance and screenshot-grounded interventions, studied through failure repair and workflow scenarios.
- [Tactile: Giving Computer-Using Agents Hands and Feet](https://awesomecua.github.io/resources/arxiv-2607-14443/) — 2026-07-16
  Tactile turns accessibility, OCR and visual evidence into explicit desktop targets with executable actions and verification cues. Its execution loop chooses semantic actions or coordinate fallbacks while retaining provenance for replay and diagnosis.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.github.io/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [OpenComputer: Verifiable Software Worlds for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-19769/) — 2026-05-19
  Introduces OpenComputer, which builds desktop tasks around application-state verifiers and refines those verifiers using execution feedback. An evaluation harness records trajectories and assigns auditable partial credit across professional software workflows.
- [AgentClick: A Skill-Based Human-in-the-Loop Review Layer for Terminal AI Agents](https://awesomecua.github.io/resources/arxiv-2604-16520/) — 2026-04-15
  AgentClick gives terminal-based agents a browser review interface for plans, drafts, execution traces and editable memory. A local server and skill plugin let users inspect proposed actions and provide structured feedback.
- [Terminal Is All You Need: Design Properties for Human-AI Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2603-10664/) — 2026-03-11
  This position paper derives interface design principles from terminal-based human-agent collaboration: representational compatibility, transparent actions and low participation barriers. It argues that graphical and other agent-facing modalities should provide these properties explicitly.
- [CUAAudit: Meta-Evaluation of Vision-Language Models as Auditors of Autonomous Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-10577/) — 2026-03-11
  CUAAudit examines vision-language models that judge computer-use task completion from an instruction and final environment state. Across macOS, Windows and Linux benchmarks, it measures accuracy, confidence calibration and disagreement between auditors.
- [MobiBench: Multi-Branch, Modular Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2512-12634/) — 2025-12-14
  MobiBench evaluates mobile GUI agents offline while allowing multiple valid action paths. It decomposes agent pipelines into modules to study component contributions, configurations, and performance bottlenecks.
- [Computer-Use Agents as Judges for Generative User Interface](https://awesomecua.github.io/resources/arxiv-2511-15567/) — 2025-11-19
  AUI-Gym evaluates generated websites by having computer-use agents attempt tasks whose executability is checked programmatically. A feedback dashboard condenses navigation histories into visual summaries that a coding agent can use to revise an interface.
- [ProBench: Benchmarking GUI Agents with Accurate Process Information](https://awesomecua.github.io/resources/arxiv-2511-09157/) — 2025-11-12
  ProBench extends mobile GUI evaluation with tasks whose correctness depends on the interaction process as well as the final state. Its ProcessProvider supplies process information for assessing agent behavior and analyzing failure modes.
- [WebGraphEval: Multi-Turn Trajectory Evaluation for Web Agents using Graph Representation](https://awesomecua.github.io/resources/arxiv-2510-19205/) — 2025-10-22
  Introduces WebGraphEval, which merges multiple agents' trajectories into a weighted graph of canonical actions. Structural analyses examine recurring behavior, inefficient paths and important decision points beyond a final success score.
- [Robust, Observable, and Evolvable Agentic Systems Engineering: A Principled Framework Validated via the Fairy GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-20729/) — 2025-09-25
  Presents an agent-engineering framework combining runtime goal clarification, an observable component architecture and evolving execution memory. The Fairy mobile GUI agent evaluates these mechanisms on ambiguous tasks and through controlled and user studies.
- [Detecting Pipeline Failures through Fine-Grained Analysis of Web Agents](https://awesomecua.github.io/resources/arxiv-2509-14382/) — 2025-09-17
  Introduces a modular framework for identifying errors at intermediate stages of a web-agent pipeline. A SeeAct and Mind2Web case study examines weaknesses that are obscured by final task-success metrics.
- [AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2509-07764/) — 2025-09-09
  Introduces AgentSentinel, which intercepts sensitive computer-agent operations and audits them using task context together with system traces. BadComputerUse evaluates this enforcement approach across attack scenarios involving tool and computer control.
- [You Don't Know Until You Click:Automated GUI Testing for Production-Ready Software Evaluation](https://awesomecua.github.io/resources/arxiv-2508-14104/) — 2025-08-17
  RealDevWorld evaluates generated software repositories with 194 development tasks and AppEvalPilot, an agent judge that operates the resulting GUIs. The evaluation examines functional behavior, visual fidelity, and runtime responses to produce task-specific diagnostic feedback.
- [FineState-Bench: A Comprehensive Benchmark for Fine-Grained State Control in GUI Agents](https://awesomecua.github.io/resources/arxiv-2508-09241/) — 2025-08-12
  FineState-Bench evaluates fine-grained GUI perception and control across desktop, web, and mobile interfaces. Its Visual Diagnostic Assistant separates perception and localization contributions in controlled interaction experiments.
- [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2506-16042/) — 2025-06-19
  OSWorld-Human adds human-determined trajectories to OSWorld to evaluate the efficiency of desktop computer-use agents. The study compares 16 agents and analyzes model-call latency, changes in step duration during task execution, and excess action steps.
- [WebSuite: Systematically Evaluating Why Web Agents Fail](https://awesomecua.github.io/resources/arxiv-2406-01623/) — 2024-06-01
  WebSuite organizes browser operations into an action taxonomy and tests both isolated controls and complete workflows. Its diagnostic tasks attribute failures to specific actions, enabling comparison of text-based and multimodal web agents.
- [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://awesomecua.github.io/resources/arxiv-2401-13178/) — 2024-01-24
  Introduces AgentBoard, a multiturn agent evaluation framework with intermediate progress metrics and analysis tools. Its broader task suite includes WebShop and WebArena interactions with stepwise progress measurements.

## Engineering & industry

- [BrowserTrace](https://awesomecua.github.io/resources/github-aaronlab-browsertrace/) — Date not recorded
  Local, cloud-free replay debugger that records each Browser Use step's screenshot, URL, action and model I/O as a timeline and reports the step at which a failed run diverges from a known-good one.
- [GUI-HARVEST](https://awesomecua.github.io/resources/github-garyyang12345-gui-harvest/) — Date not recorded
  Optimizes GUI-agent execution code from repeated rollout evidence and checks proposed changes against fixed validation gates.
- [Lumen browser agent](https://awesomecua.github.io/resources/github-omxyz-lumen/) — Date not recorded
  A screenshot-driven browser agent over Chrome DevTools Protocol, with resumable sessions, context compression, action replay and configurable completion checks.
