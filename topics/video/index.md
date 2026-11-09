# Video

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/video/records.jsonl

## Papers & surveys

- [CUA-Master: Scaling Computer-use Agents through Open-World Recursive Improvements](https://awesomecua.com/resources/arxiv-2611-03126/) — 2026-11-02
  Introduces CUA-Master, a computer-use training framework that mines workflows from instructional videos and turns them into synthesized tasks and trajectories.
- [Invisible in Space, Visible in Time: Motion Vision CAPTCHA against GUI Agents](https://awesomecua.com/resources/arxiv-2609-27461/) — 2026-09-23
  MVCAP-Bench tests live browser CAPTCHAs whose foreground meaning emerges through motion against dynamic backgrounds. A foreground-only control separates temporal camouflage difficulty from answer format and browser interaction.
- [GameWAM: A World Action Model for Video Games](https://awesomecua.com/resources/arxiv-2608-26200/) — 2026-08-25
  Introduces GameWAM, a model for native game play and GUI control that predicts future visuals and keyboard-mouse actions from synchronized gameplay and GUI trajectories.
- [DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching](https://awesomecua.com/resources/arxiv-2606-31980/) — 2026-06-30
  DigitalCoach records expert–novice software coaching conversations aligned with screen and input events. Automated and interactive evaluations examine how model coaches differ from humans in explanation, error diagnosis and visual grounding when helping a learner operate software.
- [Agent-Computer Observation Interfaces Enable Dynamic Computer Use](https://awesomecua.com/resources/arxiv-2606-29472/) — 2026-06-28
  The Agent-Computer Observation Interface separates continuous perception from discrete computer actions using captured frames, audio transcription and persistent visual narration. DynaCU-Bench tests these components on dynamic browser tasks and static controls, with model-specific ablations showing that additional observations can also hurt.
- [Bridging VideoQA and Video-Guided Agentic Tasks via Generalized Keyframe Extraction](https://awesomecua.com/resources/arxiv-2606-29445/) — 2026-06-28
  Introduces VG-GUIBench to evaluate GUI agents following video tutorials, and TASKER to select task-relevant keyframes for video-guided tasks and VideoQA.
- [Benchmarking Living-Screen-Native GUI Agents on Short-Video Platforms](https://awesomecua.com/resources/arxiv-2606-04701/) — 2026-06-03
  LivingScreen evaluates agents in a browser-based short-video environment where observing content consumes time and affects subsequent actions. Its task suite scores accuracy together with information efficiency to diagnose over- and under-observation on continuously changing screens.
- [Demo2Tutorial: From Human Experience to Multimodal Software Tutorials](https://awesomecua.com/resources/arxiv-2606-03951/) — 2026-06-02
  Introduces Demo2Tutorial, which turns recorded software interactions into multimodal tutorials with task graphs and reports benefits for GUI-agent planning.
- [Video2GUI: Synthesizing Large-Scale Interaction Trajectories for Generalized GUI Agent Pretraining](https://awesomecua.com/resources/arxiv-2605-14747/) — 2026-05-14
  Video2GUI extracts GUI interaction trajectories from tutorial videos to build WildGUI, a pretraining dataset spanning applications and websites.
- [MMTB: Evaluating Terminal Agents on Multimedia-File Tasks](https://awesomecua.com/resources/arxiv-2605-10966/) — 2026-05-08
  MultiMedia-TerminalBench evaluates agents that use terminal tools to work with audio and video files. The Terminus-MM harness adds multimedia perception to study how accessible evidence changes executable workflows and task outcomes.
- [Beyond Screenshots: Evaluating VLMs' Understanding of UI Animations](https://awesomecua.com/resources/arxiv-2604-26148/) — 2026-04-28
  AniMINT evaluates how VLMs perceive, explain and interpret UI animations using densely annotated videos. The study distinguishes basic motion recognition from higher-level animation meaning and probes motion, context and perceptual cues.
- [Benchmarking and Improving GUI Agents in High-Dynamic Environments](https://awesomecua.com/resources/arxiv-2604-25380/) — 2026-04-28
  Introduces DynamicGUIBench for applications whose interfaces change between actions, together with DynamicUI, an agent that processes screen recordings. The agent selects informative frames, filters inconsistent action reasoning and uses trajectory reflection for subsequent decisions.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.com/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [MolmoPoint: Better Pointing for VLMs with Grounding Tokens](https://awesomecua.com/resources/arxiv-2603-28069/) — 2026-03-30
  MolmoPoint replaces textual coordinate generation with pointing tokens that select visual regions and refine them through subpatches. The general image/video method includes GUI-pointing evaluation on ScreenSpotPro alongside other visual grounding tasks.
- [GUIDE: Resolving Domain Bias in GUI Agents through Real-Time Web Video Retrieval and Plug-and-Play Annotation](https://awesomecua.com/resources/arxiv-2603-26266/) — 2026-03-27
  GUIDE retrieves relevant software tutorials through subtitle-based video search, then infers planning and grounding knowledge from consecutive annotated keyframes. It inserts that knowledge into existing GUI-agent modules without parameter updates and evaluates the plug-in on OSWorld.
- [GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks](https://awesomecua.com/resources/arxiv-2603-25864/) — 2026-03-26
  GUIDE evaluates whether models can recognize a user’s behavior, infer intent and decide when to offer help during open-ended software tasks. It uses narrated screen recordings of novice users and studies the effect of additional user context on these assistance decisions.
- [CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-24440/) — 2026-03-25
  CUA-Suite combines continuous expert desktop demonstrations in VideoCUA with the UI-Vision evaluation benchmark and GroundCUA grounding data. Screen recordings, cursor traces and layered annotations support study of temporal behavior and professional software workflows.
- [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://awesomecua.com/resources/arxiv-2603-22529/) — 2026-03-23
  Ego2Web pairs first-person videos with online tasks that require agents to connect the user’s physical context to web actions. It also evaluates an automatic task judge against human judgments and analyzes failures in video understanding and web execution.
- [Video-Based Reward Modeling for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2603-10178/) — 2026-03-10
  Builds ExeVR-53k from execution-video, instruction and reward triplets, including negative instructions with step annotations. A reward model uses spatiotemporal token pruning to judge task completion from the instruction and execution keyframes.
- [Learning from Online Videos at Inference Time for Computer-Use Agents](https://awesomecua.com/resources/arxiv-2511-04137/) — 2025-11-06
  This work retrieves online video tutorials and converts them into structured GUI action demonstrations with short objectives. A two-stage selection process supplies a relevant local trajectory as in-context guidance at each execution step.
- [VideoAgentTrek: Computer Use Pretraining from Unlabeled Videos](https://awesomecua.com/resources/arxiv-2510-19488/) — 2025-10-22
  Extracts structured GUI actions from screen-recorded tutorials using inverse dynamics, then uses the inferred trajectories for computer-use training.
- [Watch and Learn: Learning to Use Computers from Online Videos](https://awesomecua.com/resources/arxiv-2510-04673/) — 2025-10-06
  Introduces Watch & Learn (W&L), which converts human computer-use videos into UI action trajectories by predicting actions between consecutive screen states.
- [MM-BrowseComp: A Comprehensive Benchmark for Multimodal Browsing Agents](https://awesomecua.com/resources/arxiv-2508-13186/) — 2025-08-14
  Introduces MM-BrowseComp, a benchmark for browsing agents that must use evidence from web images and videos to answer multimodal search questions.
- [VideoCAD: A Dataset and Model for Learning Long-Horizon 3D CAD UI Interactions from Video](https://awesomecua.com/resources/arxiv-2505-24838/) — 2025-05-30
  Introduces synthetic CAD interaction videos, a model for learning interface actions from video, and evaluation tasks for spatial and long-horizon reasoning.
- [Scalable Video-to-Dataset Generation for Cross-Platform Mobile Agents](https://awesomecua.com/resources/arxiv-2505-12632/) — 2025-05-19
  Introduces MONDAY and an automated pipeline that extracts mobile-navigation training data from instructional videos across operating-system platforms.
- [TongUI: Internet-Scale Trajectories from Multimodal Web Tutorials for Generalized GUI Agents](https://awesomecua.com/resources/arxiv-2504-12679/) — 2025-04-17
  TongUI converts multimodal online tutorials, including videos and articles, into GUI-agent trajectories. Its GUI-Net dataset contains 143,000 trajectories spanning five operating systems and more than 200 applications, and supports fine-tuning for grounding and navigation.
- [GUI-Xplore: Empowering Generalizable GUI Agents with One Exploration](https://awesomecua.com/resources/arxiv-2503-17709/) — 2025-03-22
  Introduces GUI-Xplore exploration videos and downstream tasks, with an agent that combines action-aware modeling and graph-based environment reasoning.
- [BEARCUBS: A benchmark for computer-using web agents](https://awesomecua.com/resources/arxiv-2503-07919/) — 2025-03-10
  BEARCUBS provides 111 live-web information-seeking questions with short answers and human-validated browsing trajectories. Its tasks require multimodal computer interaction, including video understanding and navigation of interactive 3D content.
- [Mobile-Agent-V: A Video-Guided Approach for Effortless and Efficient Operational Knowledge Injection in Mobile Automation](https://awesomecua.com/resources/arxiv-2502-17110/) — 2025-02-24
  Extracts operational guidance from video for mobile task execution and introduces Mobile-Knowledge to evaluate the contribution of external knowledge.
- [Magma: A Foundation Model for Multimodal AI Agents](https://awesomecua.com/resources/arxiv-2502-13130/) — 2025-02-18
  Introduces Magma, a multimodal agent model trained with labels for clickable GUI elements and video motion traces, and evaluated on UI navigation and robot tasks.
- [UXAgent: An LLM Agent-Based Usability Testing Framework for Web Design](https://awesomecua.com/resources/arxiv-2502-12561/) — 2025-02-18
  Introduces UXAgent, which uses simulated users and a browser connector to test website usability and present their actions, responses, and recordings to UX researchers.
- [VideoWebArena: Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://awesomecua.com/resources/arxiv-2410-19100/) — 2024-10-24
  Evaluates whether web agents can retain procedural skills and factual information from long video tutorials and use them during tasks.
- [GUI Action Narrator: Where and When Did That Action Take Place?](https://awesomecua.com/resources/arxiv-2406-13719/) — 2024-06-19
  Introduces Act2Cap and a cursor-guided method for describing GUI actions from video, with temporal and spatial localization challenges.
- [WONDERBREAD: A Benchmark for Evaluating Multimodal Foundation Models on Business Process Management Tasks](https://awesomecua.com/resources/arxiv-2406-13264/) — 2024-06-19
  Introduces WONDERBREAD, a benchmark pairing human WebArena workflow demonstrations with screen recordings, action logs, and written procedures. Six evaluation tasks cover documentation, knowledge transfer, and process improvement beyond end-to-end execution.
- [GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://awesomecua.com/resources/arxiv-2406-10819/) — 2024-06-16
  Introduces video-based GUI questions and annotations for studying temporal interface understanding across varied interaction settings.
- [VideoGUI: A Benchmark for GUI Automation from Instructional Videos](https://awesomecua.com/resources/arxiv-2406-10227/) — 2024-06-14
  Evaluates GUI automation from instructional videos at separate levels of high-level planning, action narration, and primitive execution.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.com/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [Computer User Interface Understanding. A New Dataset and a Learning Framework](https://awesomecua.com/resources/arxiv-2403-10170/) — 2024-03-15
  Introduces desktop interaction videos and a framework combining synthetic examples with hierarchical contrastive learning for interface classification.
- [AXNav: Replaying Accessibility Tests from Natural Language](https://awesomecua.com/resources/arxiv-2310-02424/) — 2023-10-03
  Introduces an LLM and pixel-based UI system that executes natural-language accessibility tests, records navigable videos and flags potential interface issues.

## Benchmarks

- [GuideBench](https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/) — Date not recorded
  Released data for the GUIDE benchmark: annotated segments of narrated novice screen recordings in 10 applications, for predicting user behavior state, short-term intent and whether and how to help.
- [VideoGUI](https://awesomecua.com/resources/github-showlab-videogui/) — Date not recorded
  Benchmark for desktop GUI tasks derived from instructional videos.
- [WONDERBREAD](https://awesomecua.com/resources/github-hazyresearch-wonderbread/) — Date not recorded
  An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.

## Datasets

- [AgentTrek](https://awesomecua.com/resources/github-xlang-ai-agenttrek/) — Date not recorded
  Synthesizes browser-agent trajectories by replaying web tutorials as guidance, releasing the trajectory data with multimodal grounding and reasoning and an AgentTrek-32B agent.
- [Computer Use Large (markov-ai)](https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/) — Date not recorded
  48,478 trimmed, audio-free screen-recording videos (about 12,300 hours) of AutoCAD, Blender, Excel, Photoshop, Salesforce and VS Code use, gathered from the internet, with duration metadata and no action labels.
- [GUI-Action Narrator](https://awesomecua.com/resources/github-showlab-gui-action-narrator/) — Date not recorded
  Action narration resources for GUI interaction trajectories.
- [GUI-World](https://awesomecua.com/resources/github-dongping-chen-gui-world/) — Date not recorded
  GUI video benchmark and training data covering six scenarios, from Android and iOS to websites and XR, with eight question types for image and video LLMs and the GUI-Vid model.
- [GUI-World data](https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/) — Date not recorded
  Hub release of GUI-World: GUI screen-recording videos from six scenarios (Android, iOS, website, software, multi-app and XR) with train and benchmark annotation JSONL for GUI-oriented video question answering.
- [GUI-Xplore](https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/) — Date not recorded
  Per-app Android exploration videos with screenshot and action sequences, view hierarchies and question-answer pairs for five tasks, from app overview and page analysis to action recall and sequence verification.
- [MONDAY](https://awesomecua.com/resources/github-runamu-monday/) — Date not recorded
  Cross-platform mobile GUI trajectory dataset derived from instructional videos, with released data-processing helpers and example evaluation code for Android and iOS data.
- [MONDAY annotations](https://awesomecua.com/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [PSAI computer-use dataset](https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/) — Date not recorded
  Human computer-use recordings for 3,167 browser and desktop tasks, each with a screen video, input events and reasoning steps, plus screenshots or DOM snapshots for part of the tasks.
- [VideoCAD data](https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.
- [VideoCUA](https://awesomecua.com/resources/url-78adf6919bdbce42bc24/) — Date not recorded
  Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.
- [WildGUI](https://awesomecua.com/resources/url-daf52475338f385b9310/) — Date not recorded
  WildGUI release from Video2GUI: per-task JSONL trajectories mined from Internet tutorial videos, with instructions, plans and grounded actions on web, desktop and mobile, plus screenshot shards for parts 1-15.
- [WildGUI Screenshots (parts 16-19)](https://awesomecua.com/resources/url-348f31b5b339403ec26f/) — Date not recorded
  Companion Hub repository holding the WildGUI screenshot tar shards for parts 16-19; the matching trajectory annotations and the other parts' frames are in the main WildGUI repository.
- [WorkDemo-350](https://awesomecua.com/resources/url-243ab00712ba19cc2089/) — Date not recorded
  Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

## Models

- [CogVLM2](https://awesomecua.com/resources/github-thudm-cogvlm2/) — Date not recorded
  CogVLM2 releases high-resolution image and video vision-language models supporting visual grounding, document reading, and GUI understanding.
- [CombatVLA](https://awesomecua.com/resources/github-chenvoid-combatvla/) — Date not recorded
  CombatVLA is a vision-language-action model and action tracker for real-time combat control in 3D action role-playing PC games.
- [InternVL](https://awesomecua.com/resources/github-opengvlab-internvl/) — Date not recorded
  Official repository for the InternVL open-source multimodal foundation model family supporting high-resolution GUI grounding and visual reasoning.
- [Qwen3-VL / Qwen2.5-VL](https://awesomecua.com/resources/github-qwenlm-qwen3-vl/) — Date not recorded
  Official repository for the Qwen-VL vision-language model series supporting native visual GUI grounding, computer use, and mobile navigation.

## Engineering & industry

- [AnimaWatch](https://awesomecua.com/resources/github-rishitank-animawatch/) — Date not recorded
  FastMCP server that records webpage animations and uses vision models to detect frame drops, jank, and visual layout artifacts.
- [AOI (Agent-Computer Observation Interface) & DynaCU-Bench](https://awesomecua.com/resources/github-19pine-ai-aoi/) — Date not recorded
  AOI provides an adaptive video and audio perception layer for computer-use agents alongside the DynaCU-Bench dynamic GUI benchmark.
- [clickcast](https://awesomecua.com/resources/github-alexkay28-clickcast/) — Date not recorded
  Playwright browser automation, screenshot, and GIF/MP4/WebP session-recording toolkit and MCP server for AI agents.
- [DJCLIPZ Agent Controller](https://awesomecua.com/resources/github-form-u-la-djclipz-agent-controller/) — Date not recorded
  Starter kit and controller for driving the DJCLIPZ browser media application programmatically from AI agents.
- [MergeProof](https://awesomecua.com/resources/github-bukacdan-mergeproof/) — Date not recorded
  Installable Agent Skill that records live browser verification demos and attaches them to pull requests.
- [Pagecast MCP](https://awesomecua.com/resources/github-mcpware-pagecast/) — Date not recorded
  Playwright and FFmpeg Model Context Protocol server that records browser agent interactions as GIFs or MP4 videos.
- [Product Demo Video Skill](https://awesomecua.com/resources/github-afnanksalal-product-demo-video-skill/) — Date not recorded
  Codex and Claude Agent Skill that drives live web products in a browser to record truth-linked walkthrough demo videos.
- [screencast-desktop](https://awesomecua.com/resources/github-jhamidun-screencast-desktop/) — Date not recorded
  Claude Code plugin where an agent drives a Windows desktop application and records the session as a narrated screencast.
- [Sensory-Grounding MCP](https://awesomecua.com/resources/github-luclinocruz-lucross-sensory-grounding-mcp/) — Date not recorded
  Closed-loop visual, audio, and video sensory grounding MCP server for verifying UI state in coding and computer-use agents.
- [VG-GUI-TASKER](https://awesomecua.com/resources/github-vg-gui-tasker-vg-gui-tasker/) — Date not recorded
  VG-GUI-TASKER extracts informative keyframes from instructional demonstration videos to guide multimodal GUI agents.
- [Video2GUI](https://awesomecua.com/resources/github-weiminxiong-video2gui/) — Date not recorded
  Video2GUI synthesizes large-scale GUI interaction trajectories from unlabeled screen-recording videos via inverse dynamics and VLM annotation.
