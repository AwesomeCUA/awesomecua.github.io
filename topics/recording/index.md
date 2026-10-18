# Recording

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/recording/records.jsonl

## Papers & surveys

- [Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction](https://awesomecua.github.io/resources/arxiv-2610-12984/) — 2026-10-09
  Aligns human screen recordings, input events, and accessibility information to derive reusable workflow skills from desktop demonstrations.
- [OmegaUse-SOP: SOP Engineering for Professional Computer Use from Human Demonstrations](https://awesomecua.github.io/resources/arxiv-2609-02149/) — 2026-09-02
  OmegaUse-SOP converts expert GUI demonstrations into configurable procedures and refines them with domain rules and human input. It records, abstracts, grounds and verifies live execution, with a case study of photovoltaic simulation workflows in PVsyst 7.2.
- [Inducing Task Models from Computer-Use Traces](https://awesomecua.github.io/resources/arxiv-2608-20319/) — 2026-08-20
  Task Model Induction disentangles concurrent activities in screenshot and mouse/keyboard traces, then constructs hierarchical goals and procedural control flow for each task. Evaluation tests reconstruction of observed execution and reuse of derived skills on held-out tasks.
- [LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows](https://awesomecua.github.io/resources/arxiv-2608-14131/) — 2026-08-14
  LegacyWorld evaluates Windows GUI workflows under an atomicity criterion: finish correctly or fail without persistent unintended changes. It compares expert prompts with prompts derived from recorded golden paths and separates useful completion, safe failure and non-atomic side effects.
- [HANSEL: Extracting Breadcrumbs from Web Agent Trajectories for Interactive Verification](https://awesomecua.github.io/resources/arxiv-2606-18671/) — 2026-06-17
  HANSEL extracts evidence pages and snippets from browser-agent traces and preserves relevant page state in interactive verification views. It flags untraceable answers and evaluates evidence selection and human verification effort separately.
- [PreAct: Computer-Using Agents that Get Faster on Repeated Tasks](https://awesomecua.github.io/resources/arxiv-2606-17929/) — 2026-06-16
  PreAct compiles successful screen-interaction runs into guarded state-machine programs for repeated tasks. It validates programs from clean states before storage and returns control to the agent when replayed screen expectations fail, with tests across mobile, desktop and web.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.github.io/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [ShowUI-Aloha: Human-Taught GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-07181/) — 2026-01-12
  Transforms human screen recordings and input events into annotated demonstrations used by planning and execution components for GUI tasks.
- [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.github.io/resources/arxiv-2510-16051/) — 2025-10-16
  GUIrilla systematically explores macOS interfaces to collect interaction traces and accessibility metadata for downstream GUI research. It organizes these observations into hierarchical MacApp Trees and describes an accessibility-driven collection library.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.github.io/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [PC Agent: While You Sleep, AI Works -- A Cognitive Journey into Digital World](https://awesomecua.github.io/resources/arxiv-2412-17589/) — 2024-12-23
  Combines PC Tracker interaction capture, completion of action and reasoning annotations, and planning and grounding agents for desktop workflows.
- [Rousillon: Scraping Distributed Hierarchical Web Data](https://awesomecua.github.io/resources/url-97c0b1896525632434e2/) — 2018
  Introduces Rousillon, which generalizes a demonstration of collecting one hierarchical data row into a browser-automation program that traverses related pages. The paper develops relation-selection and generalization methods and evaluates users building such scripts.
- [SUGILITE: Creating Multimodal Smartphone Automation by Demonstration](https://awesomecua.github.io/resources/url-392a602c660ffa91be46/) — 2017
  Introduces SUGILITE, which combines spoken instructions, demonstrated Android actions, and UI hierarchies to generate reusable automation scripts. Its interface includes context checking and repairs for unfamiliar situations and changing app interfaces.
- [Ringer: Web Automation by Demonstration](https://awesomecua.github.io/resources/url-347925d0f440d6396080/) — 2016-11
  Introduces Ringer, which converts demonstrated webpage interactions into scripts combining actions, target selectors, and waiting conditions. It evaluates replay robustness on tasks recorded from real websites.
- [Koala: Capture, Share, Automate, Personalize Business Processes on the Web](https://awesomecua.github.io/resources/url-cccd967aa993404d74d0/) — 2007
  Introduces Koala, a collaborative web automation system that records browser interactions as editable pseudo-natural-language scripts. Scripts are shared through a wiki and instantiated with personal or corporate data for reuse by other users.

## Datasets

- [WorkDemo-350](https://awesomecua.github.io/resources/url-243ab00712ba19cc2089/) — Date not recorded
  Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

## Engineering & industry

- [Browser Use WebUI](https://awesomecua.github.io/resources/github-browser-use-web-ui/) — Date not recorded
  A Gradio interface for configuring and running Browser Use agents, including persistent browser sessions and interaction recordings.
- [BrowserOS / BrowserOS neo](https://awesomecua.github.io/resources/github-browseros-ai-browseros/) — Date not recorded
  Chromium-based browser implementations for external agent control and built-in assistant workflows, with session visibility and replay facilities.
- [OpenAdapt](https://awesomecua.github.io/resources/github-openadaptai-openadapt/) — Date not recorded
  Tools for learning and automating workflows from desktop demonstrations.
- [Scribe](https://awesomecua.github.io/resources/url-63ef8c7e455951a20281/) — Date not recorded
  Workflow recording and documentation product adjacent to agent data collection.
- [ShowUI-Aloha](https://awesomecua.github.io/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [Work2Skill](https://awesomecua.github.io/resources/github-china-qijizhifeng-work2skill/) — Date not recorded
  Collects human GUI demonstrations and inspects multimodal evidence to derive reusable agent workflow skills.
