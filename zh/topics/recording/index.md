# 录制

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/recording/records.jsonl

## 论文与综述

- [InterWebCoder: Learning Interactive Webpage Generation from Executable Tests via Reinforcement Learning](https://awesomecua.com/resources/arxiv-2610-28610/) — 2026-10-20
  InterWebCoder trains models to generate interactive webpage code using recorded interactions, executable tests and repair feedback, an adjacent web interface task.
- [Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction](https://awesomecua.com/resources/arxiv-2610-12984/) — 2026-10-09
  Aligns human screen recordings, input events, and accessibility information to derive reusable workflow skills from desktop demonstrations.
- [OmegaUse-SOP: SOP Engineering for Professional Computer Use from Human Demonstrations](https://awesomecua.com/resources/arxiv-2609-02149/) — 2026-09-02
  OmegaUse-SOP converts expert GUI demonstrations into configurable procedures and refines them with domain rules and human input. It records, abstracts, grounds and verifies live execution, with a case study of photovoltaic simulation workflows in PVsyst 7.2.
- [Inducing Task Models from Computer-Use Traces](https://awesomecua.com/resources/arxiv-2608-20319/) — 2026-08-20
  Task Model Induction disentangles concurrent activities in screenshot and mouse/keyboard traces, then constructs hierarchical goals and procedural control flow for each task. Evaluation tests reconstruction of observed execution and reuse of derived skills on held-out tasks.
- [LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows](https://awesomecua.com/resources/arxiv-2608-14131/) — 2026-08-14
  LegacyWorld evaluates Windows GUI workflows under an atomicity criterion: finish correctly or fail without persistent unintended changes. It compares expert prompts with prompts derived from recorded golden paths and separates useful completion, safe failure and non-atomic side effects.
- [Activity Frames: Deterministic Screen-Activity Compilation for Agent Memory and Replay](https://awesomecua.com/resources/arxiv-2608-05784/) — 2026-08-06
  Introduces Activity Frames, a deterministic pipeline that turns captured screen activity into typed episodes for computer-use agent memory and routine replay.
- [HANSEL: Extracting Breadcrumbs from Web Agent Trajectories for Interactive Verification](https://awesomecua.com/resources/arxiv-2606-18671/) — 2026-06-17
  HANSEL extracts evidence pages and snippets from browser-agent traces and preserves relevant page state in interactive verification views. It flags untraceable answers and evaluates evidence selection and human verification effort separately.
- [PreAct: Computer-Using Agents that Get Faster on Repeated Tasks](https://awesomecua.com/resources/arxiv-2606-17929/) — 2026-06-16
  PreAct compiles successful screen-interaction runs into guarded state-machine programs for repeated tasks. It validates programs from clean states before storage and returns control to the agent when replayed screen expectations fail, with tests across mobile, desktop and web.
- [Demo2Tutorial: From Human Experience to Multimodal Software Tutorials](https://awesomecua.com/resources/arxiv-2606-03951/) — 2026-06-02
  Introduces Demo2Tutorial, which turns recorded software interactions into multimodal tutorials with task graphs and reports benefits for GUI-agent planning.
- [Syll: Open-Source Personal Automation with Cross-Surface Execution](https://awesomecua.com/resources/arxiv-2606-07594/) — 2026-05-28
  Syll combines tool calls, shell execution and visual GUI control in a personal-automation runtime. It turns user demonstrations into reusable skills and exposes execution logs, keyframes and approval checkpoints for inspection.
- [CutVerse: A Compositional GUI Agents Benchmark for Media Post-Production Editing](https://awesomecua.com/resources/arxiv-2605-19484/) — 2026-05-19
  Cutverse benchmarks GUI agents on long editing workflows across professional media applications and parses recordings and input logs into grounded action trajectories.
- [Known By Their Actions: Fingerprinting LLM Browser Agents via UI Traces](https://awesomecua.com/resources/arxiv-2605-14786/) — 2026-05-14
  A study shows that websites can infer the model behind a browser agent from passively recorded UI actions and timing traces across web tasks.
- [cotomi Act: Learning to Automate Work by Watching You](https://awesomecua.com/resources/arxiv-2605-03231/) — 2026-05-04
  cotomi Act is a browser agent that executes multi-step tasks and turns observed user browsing into persistent knowledge shared with users.
- [AppAgent-Claw: CLI Is All You Need for GUI Automation](https://awesomecua.com/resources/arxiv-2606-05171/) — 2026-04-15
  Introduces AppAgent-Claw, which records demonstrated GUI workflows as reusable OpenClaw skills, locates visual targets during replay and checks intended on-screen effects.
- [ShowUI-Aloha: Human-Taught GUI Agent](https://awesomecua.com/resources/arxiv-2601-07181/) — 2026-01-12
  Transforms human screen recordings and input events into annotated demonstrations used by planning and execution components for GUI tasks.
- [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.com/resources/arxiv-2510-16051/) — 2025-10-16
  GUIrilla systematically explores macOS interfaces to collect interaction traces and accessibility metadata for downstream GUI research. It organizes these observations into hierarchical MacApp Trees and describes an accessibility-driven collection library.
- [Explorer: Robust Collection of Interactable GUI Elements](https://awesomecua.com/resources/arxiv-2504-09352/) — 2025-04-12
  Explorer collects interactable GUI elements from a live target application and records user sessions for application-specific model training. It links repeated interface states into a navigation map that supports path planning and voice-directed interaction.
- [PC Agent: While You Sleep, AI Works -- A Cognitive Journey into Digital World](https://awesomecua.com/resources/arxiv-2412-17589/) — 2024-12-23
  Combines PC Tracker interaction capture, completion of action and reasoning annotations, and planning and grounding agents for desktop workflows.
- [Vision-Based Mobile App GUI Testing: A Survey](https://awesomecua.com/resources/arxiv-2310-13518/) — 2023-10-20
  Surveys vision-based mobile app GUI testing across test generation, record-and-replay and testing frameworks, drawing on 271 papers including 92 vision-based studies.
- [Rousillon: Scraping Distributed Hierarchical Web Data](https://awesomecua.com/resources/url-97c0b1896525632434e2/) — 2018
  Introduces Rousillon, which generalizes a demonstration of collecting one hierarchical data row into a browser-automation program that traverses related pages. The paper develops relation-selection and generalization methods and evaluates users building such scripts.
- [SUGILITE: Creating Multimodal Smartphone Automation by Demonstration](https://awesomecua.com/resources/url-392a602c660ffa91be46/) — 2017
  Introduces SUGILITE, which combines spoken instructions, demonstrated Android actions, and UI hierarchies to generate reusable automation scripts. Its interface includes context checking and repairs for unfamiliar situations and changing app interfaces.
- [Ringer: Web Automation by Demonstration](https://awesomecua.com/resources/url-347925d0f440d6396080/) — 2016-11
  Introduces Ringer, which converts demonstrated webpage interactions into scripts combining actions, target selectors, and waiting conditions. It evaluates replay robustness on tasks recorded from real websites.
- [Koala: Capture, Share, Automate, Personalize Business Processes on the Web](https://awesomecua.com/resources/url-cccd967aa993404d74d0/) — 2007
  Introduces Koala, a collaborative web automation system that records browser interactions as editable pseudo-natural-language scripts. Scripts are shared through a wiki and instantiated with personal or corporate data for reuse by other users.

## 评测基准

- [browser-eval](https://awesomecua.com/resources/github-lexmount-browser-eval/) — Date not recorded
  browser-eval is an evaluation harness for web fetching, deterministic browser trajectory replay, and autonomous web agent benchmarking.
- [Pathproof](https://awesomecua.com/resources/github-mikulabc-pathproof/) — Date not recorded
  Local-first AI-assisted website regression discovery suite with deterministic Playwright replay.
- [ScreenLeak](https://awesomecua.com/resources/github-screenpipe-screenleak/) — Date not recorded
  ScreenLeak is a multimodal benchmark for measuring sensitive-information detection and PII redaction in continuous screen recording data.

## 数据集

- [PSAI Computer Use Dataset](https://awesomecua.com/resources/github-anaishowland-computeruse-data-psai/) — Date not recorded
  PSAI Computer Use Dataset provides 3,167 human-computer interaction trajectories with synchronized screen video, input events, and DOM/AX snapshots.
- [PSAI computer-use dataset](https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/) — Date not recorded
  Human computer-use recordings for 3,167 browser and desktop tasks, each with a screen video, input events and reasoning steps, plus screenshots or DOM snapshots for part of the tasks.
- [VideoCUA](https://awesomecua.com/resources/url-78adf6919bdbce42bc24/) — Date not recorded
  Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.
- [WorkDemo-350](https://awesomecua.com/resources/url-243ab00712ba19cc2089/) — Date not recorded
  Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

## 工程与产业

- [19ska Computer-Use Automation](https://awesomecua.com/resources/github-19ska-computer-use-automation/) — Date not recorded
  Uses an LLM to discover a UI workflow once and compiles the trajectory into a deterministic replay script.
- [ActionAnything](https://awesomecua.com/resources/github-xxwtiancai-action-anything/) — Date not recorded
  Model-agnostic runtime for evaluating, approving, recording, and replaying AI agent actions across desktop and web interfaces.
- [Activity Recorder](https://awesomecua.com/resources/github-anikasomaia-local-activity-recorder/) — Date not recorded
  Windows tray utility that records primary-display screenshots, keyboard key codes and mouse events as local JPEG and JSON files for training-data collection.
- [activity-frames](https://awesomecua.com/resources/github-nossa-y-activity-frames/) — Date not recorded
  Converts continuous local desktop activity into structured, queryable workflow frames served over MCP.
- [Agent DevTools (39-tools)](https://awesomecua.com/resources/github-yydongro-39-tools/) — Date not recorded
  Action-level observability, state verification, and debugging toolkit for computer-use agents.
- [Agent Hands](https://awesomecua.com/resources/github-ashishkosana-agent-hands/) — Date not recorded
  Computer-use automation infrastructure for legacy financial software that compiles LLM-discovered UI flows into deterministic replays.
- [Agent VCR](https://awesomecua.com/resources/github-ixchio-agent-vcr/) — Date not recorded
  Agent VCR records, replays, and diffs deterministic cassettes of multi-turn agent tool calls, state transitions, and execution traces.
- [AgentScrub](https://awesomecua.com/resources/github-codewithsupra-agentscrub/) — Date not recorded
  Visual session-replay debugger for Browser Use agent runs that lets developers scrub through step timelines and DOM states.
- [AgentStudio](https://awesomecua.com/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [AI Computer Interaction Logger](https://awesomecua.com/resources/github-hemangjoshi37a-aicomputerinteractionlogger/) — Date not recorded
  AI Computer Interaction Logger records synchronized screen video, active window metadata, and mouse/keyboard events for CUA imitation learning.
- [AI Mime](https://awesomecua.com/resources/github-prakhar1114-ai-mime/) — Date not recorded
  macOS app that records a demonstrated task, has an agent compile it into a portable skill of scripts, browser CDP steps and computer-use fallbacks, and patches the skill when a rerun breaks.
- [Apache Maka](https://awesomecua.com/resources/github-apache-maka/) — Date not recorded
  Apache Maka is an agent workspace for macOS that records verifiable execution traces across browser, terminal, and GUI actions.
- [Apprentice](https://awesomecua.com/resources/github-bluzername-apprentice/) — Date not recorded
  Apprentice is a local-first macOS agent that observes repeated user routines across allowlisted apps and replays them with click-by-click approval.
- [Appwalk](https://awesomecua.com/resources/github-kubstack-appwalk/) — Date not recorded
  AI-powered CLI that explores a web application in a browser and compiles the run into verified Playwright test suites.
- [augur-sdk](https://awesomecua.com/resources/github-mercurialsolo-augur-sdk/) — Date not recorded
  augur-sdk instruments screenshot-grounded computer-use agents to record structured telemetry bundles, screenshots, and failure traces.
- [Automata](https://awesomecua.com/resources/github-mindattic-automata/) — Date not recorded
  Record-once, replay-many browser automation runtime for Windows that records live user actions into deterministic workflows.
- [AXON OS](https://awesomecua.com/resources/github-frezzaroukos-axon-os/) — Date not recorded
  Local-first, policy-governed action layer for Linux desktop automation with preview, approval, and rollback receipts.
- [axstream](https://awesomecua.com/resources/github-milind-soni-axstream/) — Date not recorded
  Streaming JSON-lines action language and compiler for macOS computer-use agents.
- [Bflow (browser-automation-cli)](https://awesomecua.com/resources/github-khbayazidahmed-browser-automation-cli/) — Date not recorded
  Zero-dependency browser automation CLI and visual workflow recorder.
- [bgivenb Typed UI Capabilities](https://awesomecua.com/resources/github-bgivenb-computer-use-automation/) — Date not recorded
  Model-guided UI workflow discovery framework with signed human review and deterministic replay.
- [Bridge Studio (WebMCP Browser Studio)](https://awesomecua.com/resources/github-salilbhasinofficial-webmcp-browser-studio/) — Date not recorded
  Visible, human-governed browser workspace that converts live web workflows into reusable WebMCP tools.
- [Browse AI](https://awesomecua.com/resources/url-307838fec5f74218b032/) — Date not recorded
  No-code web scraping and monitoring platform whose robots replay recorded clicks, typed inputs, dropdown choices, logins and pagination on target sites, or let AI build the table, then extract data on a schedule.
- [Browser Agent Recorder](https://awesomecua.com/resources/github-velvetabyss-browser-agent-recorder/) — Date not recorded
  Records human browser workflows and exports them as both human-readable SOP documents and machine-readable Agent Skill Packs.
- [Browser Use WebUI](https://awesomecua.com/resources/github-browser-use-web-ui/) — Date not recorded
  A Gradio interface for configuring and running Browser Use agents, including persistent browser sessions and interaction recordings.
- [BrowserOS / BrowserOS neo](https://awesomecua.com/resources/github-browseros-ai-browseros/) — Date not recorded
  Chromium-based browser implementations for external agent control and built-in assistant workflows, with session visibility and replay facilities.
- [Captr for macOS](https://awesomecua.com/resources/github-anaishowland-captr-macos/) — Date not recorded
  Captr for macOS records synchronized screen video, keyboard/mouse input, DOM snapshots, and macOS accessibility trees for CUA datasets.
- [Captr for Windows](https://awesomecua.com/resources/github-anaishowland-captr-windows/) — Date not recorded
  Captr for Windows records synchronized screen video, mouse/keyboard events, DOM snapshots, and Windows accessibility trees for CUA datasets.
- [clickcast](https://awesomecua.com/resources/github-alexkay28-clickcast/) — Date not recorded
  Playwright browser automation, screenshot, and GIF/MP4/WebP session-recording toolkit and MCP server for AI agents.
- [clirec](https://awesomecua.com/resources/github-ellmos-ai-clirec/) — Date not recorded
  Records human GUI demonstrations into human-readable, diffable CLI transcripts for training and prompting computer-use agents.
- [CloudCrew Understudy](https://awesomecua.com/resources/github-cloudcrewatwork-understudy/) — Date not recorded
  Records human UI workflows once and compiles them into parameterized, editable replay scripts for computer-use agents.
- [COCO4GUI](https://awesomecua.com/resources/github-harpreetsahota204-gui-dataset-creator/) — Date not recorded
  COCO4GUI is an interactive screen capture and bounding-box annotation tool for building COCO-formatted GUI grounding datasets.
- [Computer Use Data Collection](https://awesomecua.com/resources/github-bobcoi03-computeruse-data-collection/) — Date not recorded
  Computer Use Data Collection is a desktop recorder that captures synchronized screenshots, mouse clicks, and keystrokes for training CUA models.
- [Computer-Use Cache](https://awesomecua.com/resources/github-rohanarun-computer-use-cache/) — Date not recorded
  Drop-in OpenAI-compatible caching proxy that records and replays repeated computer-use and browser-agent workflows.
- [Cybergod](https://awesomecua.com/resources/github-james4ever0-agi-computer-control/) — Date not recorded
  Experimental monorepo for computer-control agents with a tmux terminal environment, a web recorder for GUI and terminal sessions in noVNC/ttyd Docker workers, and random-input data collection.
- [demosmith-mcp](https://awesomecua.com/resources/github-g0d2i11a-demosmith-mcp/) — Date not recorded
  Model Context Protocol server that lets AI agents record automated browser product demos with cursor animations and narration.
- [Deterministic Computer-Use Automation](https://awesomecua.com/resources/github-joncody-computer-use-automation/) — Date not recorded
  Two-phase computer-use automation framework that compiles LLM-driven UI discovery into deterministic replay scripts.
- [DH.Window.UITool](https://awesomecua.com/resources/github-cyberkdh-dh-window-uitool/) — Date not recorded
  Windows UI Automation inspection and scripting tool for analyzing UI element trees and building repeatable desktop workflows.
- [doc-agent](https://awesomecua.com/resources/github-samuel-as-doc-agent/) — Date not recorded
  Claude Code skill that documents a web procedure with annotated screenshots by performing it in a live browser.
- [DSH Patrol](https://awesomecua.com/resources/github-qigelunbiya-dsh-patrol/) — Date not recorded
  Teach-once, patrol-repeatedly website inspection and monitoring plugin for DeepSeek Harness.
- [dsh-browser-ops](https://awesomecua.com/resources/github-lirui1024k-dsh-browser-ops/) — Date not recorded
  DeepSeek Harness plugin combining agent-driven real-browser control with workflow recording.
- [dsh-record-replay](https://awesomecua.com/resources/github-humblebanana-dsh-record-replay/) — Date not recorded
  DeepSeek Harness plugin that records macOS desktop demonstrations via Open Record/Replay and compiles them into agent skills.
- [DuckTrack](https://awesomecua.com/resources/github-theduckai-ducktrack/) — Date not recorded
  DuckTrack records synchronized screen video and low-level mouse and keyboard events for building multimodal computer-interaction datasets.
- [DXcam](https://awesomecua.com/resources/github-ra1nty-dxcam/) — Date not recorded
  DXcam is a high-frequency Python screen capture library for Windows using the Desktop Duplication API at up to 240Hz for GUI agents.
- [FaizannRaza Computer-Use Automation](https://awesomecua.com/resources/github-faizannraza-computer-use-automation/) — Date not recorded
  Discovers legacy banking UI workflows with an LLM once and compiles the run into a deterministic capability artifact.
- [flowcast](https://awesomecua.com/resources/github-supermarioyl-flowcast/) — Date not recorded
  Records browser walkthroughs once, stores structured locator cues, and replays parameterized web workflows with self-healing recovery.
- [Forged](https://awesomecua.com/resources/github-sam-siavoshian-forged/) — Date not recorded
  Self-learning browser automation MCP server that records successful agent trajectories and replays deterministic Playwright steps.
- [gpuview](https://awesomecua.com/resources/github-onlyterp-gpuview/) — Date not recorded
  GPU-native Windows screen perception tool capturing frames directly from the DXGI Desktop Duplication compositor handoff for AI agents.
- [GUI Label Tool](https://awesomecua.com/resources/github-ethanyxx-gui-label-tool/) — Date not recorded
  GUI Label Tool records and annotates human desktop trajectories inside a Dockerized QEMU virtual machine with paired input events and screenshots.
- [Handrail CUA](https://awesomecua.com/resources/github-codelit-io-handrail-cua/) — Date not recorded
  Discover-once, replay-many computer-use automation framework with deterministic execution guardrails.
- [Helios](https://awesomecua.com/resources/github-vrtnis-helios/) — Date not recorded
  Observability and evaluation harness that converts H computer-use agent sessions into reviewable traces and failure findings.
- [Inner Coordinates](https://awesomecua.com/resources/github-xiaochu-1208-inner-coordinates/) — Date not recorded
  Reverse-engineers a clickable coordinate and state map of macOS and iPhone applications once for deterministic workflow replay.
- [Interceptor](https://awesomecua.com/resources/github-hacker-valley-media-interceptor/) — Date not recorded
  CLI and MCP server that lets agents operate the user's signed-in Chrome, Brave or Safari, native apps via accessibility on macOS, Windows and Linux, and a physical iPhone through an XCUITest runner.
- [Komos](https://awesomecua.com/resources/url-65a9a9211f0dd2b7264a/) — Date not recorded
  Hosted automation platform whose task flows use a prompt-driven agent to navigate, click, type and extract on websites in a cloud Chromium sandbox or self-hosted runner, built from narrated screen recordings or chat.
- [Legacy UI Capability Engine](https://awesomecua.com/resources/github-saitejareddi3636-legacy-ui-capability-engine/) — Date not recorded
  Learns a legacy browser workflow once with an LLM and compiles it into a verified, reusable capability module.
- [Libretto](https://awesomecua.com/resources/github-cashew-labs-libretto/) — Date not recorded
  Libretto is a toolkit that gives coding agents a live browser and CLI to inspect pages, record user actions, build scripts, and debug web integrations.
- [Lightfeed Replayable Browser Agent](https://awesomecua.com/resources/github-lightfeed-browser-agent/) — Date not recorded
  TypeScript browser agent library that uses an LLM to complete a web navigation workflow once and replays cached selectors with zero LLM tokens.
- [MacControlKit](https://awesomecua.com/resources/github-tzafon-maccontrolkit/) — Date not recorded
  MacControlKit is a Swift package by Tzafon for capturing macOS screens and dispatching native mouse and keyboard events.
- [Maestro (AI-Drivable RPA)](https://awesomecua.com/resources/github-rexchengm-maestro/) — Date not recorded
  Records a desktop or browser task once and lets AI optimize, parameterize, and replay it as a deterministic RPA workflow.
- [maponce](https://awesomecua.com/resources/github-shivampatel0714-maponce/) — Date not recorded
  Uses an LLM to map or record browser automations once and replays them deterministically via Playwright without LLM calls.
- [mcp-chrome-bridge](https://awesomecua.com/resources/github-wizardofweb125-lab-mcp-chrome-bridge/) — Date not recorded
  Model Context Protocol server for controlling Chrome tabs, forms, console/network logs, screenshots, and GIF recordings.
- [MergeProof](https://awesomecua.com/resources/github-bukacdan-mergeproof/) — Date not recorded
  Installable Agent Skill that records live browser verification demos and attaches them to pull requests.
- [MetaWebMCP](https://awesomecua.com/resources/github-scanchila-metawebmcp/) — Date not recorded
  In-browser workbench to author, test, and export structured WebMCP tool definitions from live website workflows.
- [Mobile GUI-VLA Device Platform](https://awesomecua.com/resources/github-chbq-mobile-gui-vla-device-platform/) — Date not recorded
  Provides a zero-dependency Python device I/O and trajectory instrumentation layer for Android GUI-VLA experiments.
- [native-devtools-mcp](https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/) — Date not recorded
  Local Rust MCP server for operating macOS and Windows apps, Chrome or Electron pages over CDP, and Android devices over ADB, with screenshots, OCR, accessibility lookup, input and template matching.
- [Neo Lab](https://awesomecua.com/resources/github-belarusian-neo-lab/) — Date not recorded
  Neo Lab is a macOS computer-use sandbox for recording demonstrations, replaying skills, and testing GUI automation plans.
- [Northstar (Legacy Portal CUA)](https://awesomecua.com/resources/github-zoyaarief-legacy-credit-union-automation/) — Date not recorded
  Discovers workflows on legacy credit-union web portals with an AI agent once and compiles them into deterministic scripts.
- [Open Codex Computer History](https://awesomecua.com/resources/github-hqhq1025-open-codex-computer-history/) — Date not recorded
  Clean-room macOS implementation of event-stream interaction recording using Accessibility hit-testing, CGEvent taps, and SkyLight window snapshots.
- [Open Codex Record & Replay](https://awesomecua.com/resources/github-hqhq1025-open-codex-record-and-replay/) — Date not recorded
  Clean-room macOS implementation of semantic UI workflow recording and deterministic Accessibility-tree replay with visual template fallback.
- [Open Record/Replay](https://awesomecua.com/resources/github-humblebanana-open-record-replay/) — Date not recorded
  Open Record/Replay records macOS user demonstrations with Accessibility metadata and compiles them into reusable agent skills.
- [OpenAdapt](https://awesomecua.com/resources/github-openadaptai-openadapt/) — Date not recorded
  Tools for learning and automating workflows from desktop demonstrations.
- [Operant](https://awesomecua.com/resources/github-alpharomerojl-operant/) — Date not recorded
  Local-first desktop agent runtime that compiles exploratory AI trajectories into deterministic, invariant-gated skills.
- [OysterWorkflow](https://awesomecua.com/resources/github-shuxinyang111-oysterworkflow/) — Date not recorded
  OysterWorkflow captures real human computer work and extracts structured, reusable workflow graphs for AI agents.
- [Pagecast MCP](https://awesomecua.com/resources/github-mcpware-pagecast/) — Date not recorded
  Playwright and FFmpeg Model Context Protocol server that records browser agent interactions as GIFs or MP4 videos.
- [PageRunner](https://awesomecua.com/resources/github-say-5-pagerunner/) — Date not recorded
  PageRunner is a browser-agent orchestration platform with bounded execution loops, deterministic replay, and golden-trace verification.
- [Paragent](https://awesomecua.com/resources/github-myselfsiddharth-paragent/) — Date not recorded
  Stateful browser execution layer that records an agent task once, replays it without LLM calls, and self-repairs when selectors change.
- [Prism AI Screen Reader](https://awesomecua.com/resources/github-chrismannina-prism-ai-screen-reader/) — Date not recorded
  Prism is a macOS screen reader and activity analyzer that captures screenshots and summarizes user desktop workflows with vision-language models.
- [Product Demo Video Skill](https://awesomecua.com/resources/github-afnanksalal-product-demo-video-skill/) — Date not recorded
  Codex and Claude Agent Skill that drives live web products in a browser to record truth-linked walkthrough demo videos.
- [Project Interface (Legacy Web UI Compiler)](https://awesomecua.com/resources/github-shahadeven-project-interface/) — Date not recorded
  Uses an LLM to discover how to complete a task in a legacy web UI once and distills the run into a reusable programmatic interface.
- [Promptwright](https://awesomecua.com/resources/github-sahajamit-promptwright/) — Date not recorded
  Promptwright is an AI QA desktop agent that drives browsers from plain English or records user clicks into deterministic Playwright tests.
- [Protean](https://awesomecua.com/resources/github-aibrain-mnemis-protean/) — Date not recorded
  Protean turns everyday human desktop and browser demonstrations into reusable, adaptive agent skills.
- [PUDA guidriver](https://awesomecua.com/resources/github-pudap-guidriver/) — Date not recorded
  Windows-first edge service for recording, verifying, and deterministically replaying reviewed GUI workflows.
- [recast](https://awesomecua.com/resources/github-yagna-1-recast/) — Date not recorded
  Compiler that converts recorded AI browser-agent execution traces into deterministic, zero-token Playwright test scripts.
- [record-and-replay-skill](https://awesomecua.com/resources/github-ugarchance-record-and-replay-skill/) — Date not recorded
  Agent-agnostic skill that watches a user demonstrate a browser or desktop workflow once and compiles it into a replayable script.
- [RecordAgent (ButvanAgent)](https://awesomecua.com/resources/github-kavanio-recordagent/) — Date not recorded
  Local-first Tauri and AgentScope desktop agent workbench with permission approvals, tool orchestration, and workflow recording.
- [RegionCUA](https://awesomecua.com/resources/github-region-ai-region-cua/) — Date not recorded
  RegionCUA is a local Ollama-powered desktop agent that explores GUI applications and generates documented screenshots, videos, and replay scripts.
- [Replay (Teach-by-Demonstration)](https://awesomecua.com/resources/github-misb74-replay/) — Date not recorded
  Converts human screen demonstrations of real desktop and web work into verifiable, repeatable AI agent workflows.
- [Replay AI](https://awesomecua.com/resources/github-bryansbtian-replay-ai/) — Date not recorded
  Discovers UI workflows once using a local LLM and compiles the successful trajectory into a deterministic replay script.
- [Retriever AI (rtrvr.ai)](https://awesomecua.com/resources/url-4f3ce151a13cba635e74/) — Date not recorded
  Browser agent from Retriever AI that runs in a Chrome extension on the user's signed-in sessions or in cloud browsers, reading page structure to click, type and fill forms; also callable through an API and MCP.
- [RishabhP1508 Understudy](https://awesomecua.com/resources/github-rishabhp1508-understudy/) — Date not recorded
  Records a single LLM-driven exploration of a legacy UI into a typed capability artifact for deterministic zero-LLM replay.
- [rote](https://awesomecua.com/resources/github-bhuvanb3110-rote/) — Date not recorded
  Record-once, replay-many computer-use automation framework for legacy banking and back-office web applications lacking APIs.
- [RPA-Everything](https://awesomecua.com/resources/github-mingqian94-rpa-everything/) — Date not recorded
  Compiles repeated browser, desktop, Android, and office workflows into reviewed, deterministic RPA skills for AI agents.
- [Ruyi (如意)](https://awesomecua.com/resources/github-icesword0760-ruyi/) — Date not recorded
  Ruyi streams remote Chrome sessions to the user's browser for collaborative human-AI control and compiles actions into self-healing scripts.
- [screen2gym](https://awesomecua.com/resources/github-marc-saouda-screen2gym/) — Date not recorded
  screen2gym compiles raw action-labeled screen recordings into resettable, programmatically gradable RL environments for computer-use agents.
- [screencast-desktop](https://awesomecua.com/resources/github-jhamidun-screencast-desktop/) — Date not recorded
  Claude Code plugin where an agent drives a Windows desktop application and records the session as a narrated screencast.
- [ScreenClaw (睇虾)](https://awesomecua.com/resources/github-ginsing1226-screenclaw/) — Date not recorded
  Windows visual GUI automation companion combining percentage-coordinate grid overlays with non-blocking workflow recording and replay.
- [Screenpipe](https://awesomecua.com/resources/github-screenpipe-screenpipe/) — Date not recorded
  Screenpipe continuously captures desktop screen text via accessibility/OCR and audio transcripts into a local database for AI agents.
- [screenshotting-gui](https://awesomecua.com/resources/github-evilfreelancer-screenshotting-gui/) — Date not recorded
  Agent skill for Claude Code, Codex, and Cursor that captures repeatable, window-scoped screenshots of native desktop and browser GUI apps.
- [Scribe](https://awesomecua.com/resources/url-63ef8c7e455951a20281/) — Date not recorded
  Workflow recording and documentation product adjacent to agent data collection.
- [SeleniumBase](https://awesomecua.com/resources/github-seleniumbase-seleniumbase/) — Date not recorded
  Python browser automation framework for web crawling, end-to-end testing and scraping, with a recorder that generates tests and stealth options.
- [Shadow](https://awesomecua.com/resources/github-ghostwright-shadow/) — Date not recorded
  macOS app that records screen, audio, input events and accessibility trees on-device, builds searchable episodes, and replays learned procedures through AX-first grounding with a LoRA-tuned ShowUI-2B fallback.
- [ShowUI-Aloha](https://awesomecua.com/resources/github-showlab-showui-aloha/) — Date not recorded
  Desktop agent that records demonstrations, derives semantic action traces, and uses them to plan and execute related workflows.
- [SightRig](https://awesomecua.com/resources/github-coetzeexu-sightrig/) — Date not recorded
  SightRig is a traceable runtime and visual workbench for inspecting, guarding, and replaying GUI agent perceptions and actions.
- [skillproof](https://awesomecua.com/resources/github-hccccc01333-skillproof/) — Date not recorded
  skillproof records a human browser demonstration once and compiles it into a replayable agent skill paired with an explicit completion verifier.
- [SuperSelector Studio](https://awesomecua.com/resources/github-pirate-cua-superselector/) — Date not recorded
  Resilient, cacheable fuzzy UI element identifiers and studio for Codex Computer Use recording and replay.
- [Taprun (tap)](https://awesomecua.com/resources/github-leonting1010-tap/) — Date not recorded
  Captures a logged-in browser task demonstration once and compiles it into a deterministic zero-token replay skill.
- [TeachReplay](https://awesomecua.com/resources/github-ottohere-mourn-teachreplay/) — Date not recorded
  TeachReplay is a harness-agnostic teach-by-demonstration engine that records human UI workflows and compiles them into parameterized skills.
- [TERX](https://awesomecua.com/resources/github-ixchio-terx/) — Date not recorded
  Browser-agent procedural memory and MCP server that compiles repeated web workflows into deterministic zero-token replays.
- [ThinkRun](https://awesomecua.com/resources/github-dundas-thinkrun/) — Date not recorded
  Browser session and screen recorder that packages visual bug reproductions and DOM traces for AI coding and browser agents.
- [TraceFact](https://awesomecua.com/resources/github-alex0ai-tracefact/) — Date not recorded
  Evidence-first reliability reporting and deterministic replay framework for coding and browser agents.
- [UnderPixel](https://awesomecua.com/resources/github-leluth-underpixel/) — Date not recorded
  Chrome extension and MCP server that correlates timestamped visual screen interactions with underlying network API calls.
- [Understudy](https://awesomecua.com/resources/github-understudy-ai-understudy/) — Date not recorded
  Understudy observes human desktop and browser demonstrations and compiles them into parameterized, replayable computer-use skills.
- [Vedanshu7 Operant](https://awesomecua.com/resources/github-vedanshu7-operant/) — Date not recorded
  Discovers how to complete a task in a no-API application once with an LLM and compiles the trace for repeatable execution.
- [Web Agent Protocol (WAP)](https://awesomecua.com/resources/github-ota-tech-ai-web-agent-protocol/) — Date not recorded
  Records browser sessions with a Chrome extension and turns them into exact or LLM-condensed smart replay lists, replays them with a bundled Browser Use agent, and converts recordings into MCP servers.
- [Windows Local Action Recorder](https://awesomecua.com/resources/github-week833-windows-local-action-recorder/) — Date not recorded
  Windows desktop action recorder and controlled replay tool that packages human UI demonstrations for Codex agents.
- [windows-computer-use-mcp (Scan-Code & Multi-Monitor)](https://awesomecua.com/resources/github-sshh12-windows-computer-use-mcp/) — Date not recorded
  Windows computer-use MCP server supporting multi-monitor screen capture and hardware scan-code keyboard/mouse injection for desktop and 3D apps.
- [Witness](https://awesomecua.com/resources/github-ericfinland-witness/) — Date not recorded
  Local-first observability and execution trace recorder for AI browser agents.
- [Work2Skill](https://awesomecua.com/resources/github-china-qijizhifeng-work2skill/) — Date not recorded
  Collects human GUI demonstrations and inspects multimodal evidence to derive reusable agent workflow skills.
- [Workflow Use](https://awesomecua.com/resources/github-browser-use-workflow-use/) — Date not recorded
  Turns a recorded browser session or a Browser Use agent run into a parameterized workflow file that replays deterministically with Playwright, falling back to an LLM agent when a step fails.
- [Zhaozuo (照做)](https://awesomecua.com/resources/github-dongsheng123132-zhaozuo/) — Date not recorded
  Demonstration-driven Windows desktop automation framework compatible with the ActionParity protocol for third-party GUI software.
- [Zhubi (朱笔)](https://awesomecua.com/resources/github-icesword0760-zhubi/) — Date not recorded
  Zhubi is a self-hosted bounding-box annotation and fine-tuning workbench for training Florence-2 and YOLO GUI detector models.
