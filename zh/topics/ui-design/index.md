# 界面设计

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/ui-design/records.jsonl

## 论文与综述

- [VISTA: An End-to-End Benchmark for Visual Spec-to-Web-App Coding Agents](https://awesomecua.github.io/resources/arxiv-2605-26144/) — 2026-05-22
  VISTA evaluates coding agents that turn design handoffs into working web and Android applications. Its evaluator locates annotated interactive components and probes their behavior, keeping visual localization distinct from functional correctness.
- [Beyond Screenshots: Evaluating VLMs' Understanding of UI Animations](https://awesomecua.github.io/resources/arxiv-2604-26148/) — 2026-04-28
  AniMINT evaluates how VLMs perceive, explain and interpret UI animations using densely annotated videos. The study distinguishes basic motion recognition from higher-level animation meaning and probes motion, context and perceptual cues.
- [Training Computer Use Agents to Assess the Usability of Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2604-26020/) — 2026-04-28
  uxCUA learns to assess interface usability by choosing interaction flows, executing them and predicting a numerical usability score. Training uses interactive UIs with usability labels and human preferences, with evaluations on synthetic and real interfaces.
- [PlayCoder: Making LLM-Generated GUI Code Playable](https://awesomecua.github.io/resources/arxiv-2604-19742/) — 2026-04-21
  PlayEval measures whether generated GUI applications remain logically playable, using PlayTester to execute task-oriented GUI playthroughs. PlayCoder closes the loop between repository-aware generation, interactive testing and targeted code repair.
- [Terminal Is All You Need: Design Properties for Human-AI Agent Collaboration](https://awesomecua.github.io/resources/arxiv-2603-10664/) — 2026-03-11
  This position paper derives interface design principles from terminal-based human-agent collaboration: representational compatibility, transparent actions and low participation barriers. It argues that graphical and other agent-facing modalities should provide these properties explicitly.
- [Avenir-UX: Automated UX Evaluation via Simulated Human Web Interaction with GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-09581/) — 2026-02-25
  Avenir-UX combines grounded web interaction with simulated user profiles and structured usability measures to produce evaluations of website journeys. The paper describes its architecture and use of SUS, step-wise ease questions and think-aloud traces for automated UX reporting.
- [Mapping the Design Space of User Experience for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2602-07283/) — 2026-02-07
  Develops a taxonomy of computer-use-agent interaction design through system review and practitioner interviews. A Wizard-of-Oz study then examines how users respond to normal, erroneous, and risky web-based execution, focusing on control, explanation, prompts, and mental models.
- [How do Visual Attributes Influence Web Agents? A Comprehensive Evaluation of User Interface Design Factors](https://awesomecua.github.io/resources/arxiv-2601-21961/) — 2026-01-29
  Introduces VAF, a controlled pipeline that varies webpage appearance while retaining item semantics. It measures both agent clicks and reasoning references to study which visual design factors change browsing decisions.
- [The Behavioral Fabric of LLM-Powered GUI Agents: Human Values and Interaction Outcomes](https://awesomecua.github.io/resources/arxiv-2601-16356/) — 2026-01-22
  Introduces a controlled web-task testbed for studying how stated preferences and human values influence GUI-agent decisions. It analyzes how personas alter navigation and how prominent interface cues can override the intended preference guidance.
- [It's a TRAP! Task-Redirecting Agent Persuasion Benchmark for Web Agents](https://awesomecua.github.io/resources/arxiv-2512-23128/) — 2025-12-29
  Introduces TRAP, which evaluates task-redirection attacks embedded in realistic web interfaces. Controlled website clones and a modular injection framework support comparisons of persuasion techniques and contextual changes across agents.
- [Computer-Use Agents as Judges for Generative User Interface](https://awesomecua.github.io/resources/arxiv-2511-15567/) — 2025-11-19
  AUI-Gym evaluates generated websites by having computer-use agents attempt tasks whose executability is checked programmatically. A feedback dashboard condenses navigation histories into visual summaries that a coding agent can use to revise an interface.
- [Investigating the Impact of Dark Patterns on LLM-Based Web Agents](https://awesomecua.github.io/resources/arxiv-2510-18113/) — 2025-10-20
  Presents LiteAgent for recording web-agent interactions and TrickyArena for enabling or disabling dark patterns in controlled websites. Experiments compare how individual patterns, combined patterns and visual or HTML changes affect agent decisions.
- [SusBench: An Online Benchmark for Evaluating Dark Pattern Susceptibility of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2510-11035/) — 2025-10-13
  Introduces SusBench, an online benchmark that inserts dark-pattern designs into consumer websites for agent evaluation. A human study checks the realism of the interventions, and agent trials compare susceptibility across pattern types.
- [Machine-Readable Ads: Accessibility and Trust Patterns for AI Web Agents interacting with Online Advertisements](https://awesomecua.github.io/resources/arxiv-2507-12844/) — 2025-07-17
  Compares DOM-based and pixel-based web agents on a cloned news site containing advertisements, consent dialogs and paywalls. The study examines how interface presentation affects ad interaction and consequential subscription choices.
- [Do MLLMs Capture How Interfaces Guide User Behavior? A Benchmark for Multimodal UI/UX Design Understanding](https://awesomecua.github.io/resources/arxiv-2505-05026/) — 2025-05-08
  Introduces WiserUI-Bench, pairing real UI variants from industry A/B tests with observed behavioral winners and expert explanations. It evaluates models’ ability to predict the more effective interface and explain its effect on user behavior.
- [Inferring Alt-text For UI Icons With Large Language Models During App Development](https://awesomecua.github.io/resources/arxiv-2409-18060/) — 2024-09-26
  Introduces IconDesc, which generates mobile icon alt-text from partial UI context such as element identifiers, bounds, nearby text and hierarchy. Model evaluation and a user study examine the resulting accessibility descriptions.
- [Rico: A Mobile App Dataset for Building Data-Driven Design Applications](https://awesomecua.github.io/resources/url-b560b5d6abaab98483f6/) — 2017-10-20
  Introduces Rico, collecting Android interface designs and interaction traces through crowdsourced use followed by automated exploration. The paper demonstrates UI-layout retrieval using learned representations and describes visual, textual, structural, and interaction data.

## 数据集

- [UICrit](https://awesomecua.github.io/resources/github-google-research-datasets-uicrit/) — Date not recorded
  Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.
