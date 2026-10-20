# 沙箱

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/sandbox/records.jsonl

## 论文与综述

- [Agent World Model in the Wild: Computer-Use Agent Environment Synthesis](https://awesomecua.github.io/resources/arxiv-2610-26828/) — 2026-10-19
  WildAWM synthesizes resettable GUI/MCP/CLI environments and cross-interface tasks, using execution-based checks of solvability, difficulty and verifier consistency before supervised and reinforcement learning.
- [CUA-Lite: An Open Platform for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2610-26071/) — 2026-10-19
  CUA-Lite unifies environment interfaces, supervised data formats and per-model harnesses for evaluation, reinforcement learning and supervised fine-tuning across desktop, browser and mobile tasks.
- [BlenderWorld: Benchmarking Visual Agents for 3D Creation from Real-World References](https://awesomecua.github.io/resources/arxiv-2610-23986/) — 2026-10-14
  Benchmarks agents creating editable Blender projects through shell, Python and MCP tools, judging delivered scenes with multi-view renders, task-specific rubrics and visual-quality ratings.
- [MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments](https://awesomecua.github.io/resources/arxiv-2610-20939/) — 2026-10-14
  Unifies GUI evaluation, trajectory collection, environment synthesis, and online reinforcement learning across mobile, computer, and web tasks.
- [SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments](https://awesomecua.github.io/resources/arxiv-2610-12611/) — 2026-10-08
  Introduces SoftwareGym, a pipeline that synthesizes runnable GUI applications and iteratively repairs them using execution checks. It also provides a task benchmark and studies whether training on synthesized application trajectories transfers to other computer-use environments.
- [CUA-Sandbox: Efficient Environments for Computer-Use Agent Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2609-32750/) — 2026-09-26
  Introduces CUA-Sandbox, which separates each rollout’s mutable state from shared initialized software runtimes. State-scoped execution and transactional resets or branches aim to reduce training-environment costs while retaining original interfaces and evaluators.
- [APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-07712/) — 2026-09-07
  Introduces controlled simulated mobile apps with deterministic backend data and outcome checks for reproducible evaluation of realistic interactions.
- [CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents](https://awesomecua.github.io/resources/arxiv-2609-05374/) — 2026-09-04
  Turns desktop applications into reproducible GUI-and-CLI environments and generates verified hybrid trajectories for agent post-training.
- [BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes](https://awesomecua.github.io/resources/arxiv-2608-24848/) — 2026-08-25
  Introduces BrowserForge, which combines broad website sourcing, parallel browser sandboxes, and task-proposer/solver interaction to collect verified web trajectories. The pipeline uses page structure during synthesis but trains a policy that acts from screenshots.
- [Training Needs Trustworthy Worlds: Verified Synthetic Web Environments for Agent Learning](https://awesomecua.github.io/resources/arxiv-2608-21898/) — 2026-08-22
  Builds synthetic websites with verified navigation, backend state, and feasible tasks to provide reliable supervision for web-agent training.
- [Echoverse: Deep, Evolving Environments for Training Computer-Use Agents at Scale](https://awesomecua.github.io/resources/arxiv-2607-28074/) — 2026-07-30
  Introduces Echoverse, which compiles specifications into stateful applications with database-grounded graders and uses rollouts to improve both the environments and agent policies. It examines behavioral depth, targeted interface practice, and environment repair as sources of training value.
- [OpenForgeRL: Train Harness-native Agents in Any Environment](https://awesomecua.github.io/resources/arxiv-2607-21557/) — 2026-07-23
  OpenForgeRL connects stateful agent harnesses to reinforcement-learning infrastructure through a model-call recording proxy and isolated rollout containers. Its validation includes browser and computer-use agents, alongside tool-oriented agents, and examines how harness choice affects learned reliability.
- [EvoCUA-1.5: Online Reinforcement Learning for Multi-turn Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-09773/) — 2026-07-07
  EvoCUA-1.5 trains multi-turn desktop agents through online reinforcement learning in executable sandboxes. It combines step-level policy optimization, task filtering and calibration, an adaptive curriculum, and asynchronous rollout handling with staleness control.
- [Untrusted Content Masking for Web Agents with Security Guarantees](https://awesomecua.github.io/resources/arxiv-2607-05277/) — 2026-07-06
  Untrusted Content Masking uses DOM structure to redact untrusted webpage regions before agent observation. A sandboxed interaction interface separates privileges so browser actions can proceed under the proposed trust-boundary model without exposing protected content to the planner.
- [PhoneWorld: From Real-App Trajectories to Dynamic and Verifiable Environments for Phone-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-29486/) — 2026-05-28
  Introduces PhoneWorld, which converts observed app pages, transitions and state changes into executable Android environments through a build-inspect-repair process. Generated tasks and programmatic verifiers support benchmarking, trajectory collection and online training.
- [MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research](https://awesomecua.github.io/resources/arxiv-2605-26114/) — 2026-05-25
  Introduces MobileGym, a browser-hosted simulation of mobile app interactions whose configurable JSON state supports deterministic judging and parallel rollouts. MobileGym-Bench adds parameterized tasks, with experiments examining online training and transfer to real devices.
- [CUA-Gym: Scaling Verifiable Training Environments and Tasks for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-25624/) — 2026-05-25
  Presents CUA-Gym, which co-generates instructions, initial and target states, and executable reward checks through generator-discriminator iterations. Mock web applications expand training environments, with learned agents evaluated on OSWorld-Verified and WebArena.
- [ScaleWoB: Guiding GUI Agents with Coding Agents via Large-Scale Environmental Synthesis](https://awesomecua.github.io/resources/arxiv-2605-25160/) — 2026-05-24
  Introduces ScaleWoB, which synthesizes interactive GUI environments as backend-free webpages with verifiable rewards. Its mobile-oriented benchmark evaluates agent execution and compares selected synthetic tasks with real-app behavior.
- [TClone: Low-Latency Forking of Live GUI Environments for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2605-17320/) — 2026-05-17
  TClone versions live GUI workspaces through snapshots, isolated forks, rollback and selective commit or merge. It separates fast branch creation from durable checkpoints using copy-on-write sharing, filesystem versioning and asynchronous checkpointing, with end-to-end agent-loop latency measurements.
- [Weblica: Scalable and Reproducible Training Environments for Visual Web Agents](https://awesomecua.github.io/resources/arxiv-2605-06761/) — 2026-05-07
  Introduces Weblica, which combines HTTP-level capture and replay with website-grounded environment synthesis. The resulting interactive web environments support reinforcement learning and tests of navigation transfer and inference-time scaling.
- [Gym-Anything: Turn any Software into an Agent Environment](https://awesomecua.github.io/resources/arxiv-2604-06126/) — 2026-04-07
  Introduces Gym-Anything, where a setup agent configures software environments and an independent auditor checks the resulting evidence. CUA-World supplies long-horizon tasks across professional applications, with experiments on trajectory distillation and test-time auditing.
- [Safe and Scalable Web Agent Learning via Recreated Websites](https://awesomecua.github.io/resources/arxiv-2603-10505/) — 2026-03-11
  Introduces VeriEnv, which recreates websites as executable training environments and exposes internal state through a Python SDK for task generation and deterministic reward checks. Experiments examine web-agent learning across new and expanded site environments.
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.github.io/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.github.io/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
- [ceLLMate: Sandboxing Browser AI Agents](https://awesomecua.github.io/resources/arxiv-2512-12594/) — 2025-12-14
  ceLLMate constrains browser-agent authority through an extension that applies policies at the HTTP layer. It evaluates this sandbox against prompt-injection attacks in WASP, avoiding dependence on brittle low-level click and keystroke policies.
- [OSGym: Scalable OS Infra for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2511-11672/) — 2025-11-11
  OSGym supplies full operating-system sandboxes with GUIs for parallel computer-use data collection and training. It combines per-replica state management, hardware-aware orchestration, copy-on-write virtual-machine disks, and layered failure recovery.
- [WEBSERV: A Full-Stack and RL-Ready Web Environment for Training Web Agents at Scale](https://awesomecua.github.io/resources/arxiv-2510-16252/) — 2025-10-17
  WebServ combines copy-on-write container environments with a compact DOM-derived browser interface for training web agents. Network-aware waiting supports action execution in single-page applications, with evaluations and reinforcement-learning experiments on WebArena-Lite.
- [WARC-Bench: Web Archive Based Benchmark for GUI Subtask Executions](https://awesomecua.github.io/resources/arxiv-2510-09872/) — 2025-10-10
  WARC-Bench packages dynamic web pages as replayable archives and evaluates short navigation subtasks involving components such as date pickers and scrollable containers. It also studies supervised training followed by reinforcement learning with verifiable rewards on these browser interactions.
- [SCUBA: Salesforce Computer Use Benchmark](https://awesomecua.github.io/resources/arxiv-2509-26506/) — 2025-09-30
  SCUBA evaluates enterprise UI navigation and CRM workflows with 300 task instances derived from Salesforce user interviews. Salesforce sandbox execution and milestone-based assessment support comparisons between zero-shot agents and agents given demonstrations.
- [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.github.io/resources/arxiv-2509-23866/) — 2025-09-28
  DART separates GUI reinforcement learning into asynchronous environment, rollout, data-management, and training services. It curates experience by task difficulty, successful trajectories, and step uncertainty while correcting rollout-policy mismatch, with evaluation on OSWorld.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-02544/) — 2025-09-02
  UI-TARS-2 combines scalable trajectory generation, stabilized multi-turn reinforcement learning, and a sandbox that supports GUI, filesystem, and terminal actions. The report evaluates the resulting agent across web, desktop, Android, and game tasks and analyzes training stability.
- [WebMall -- A Multi-Shop Benchmark for Evaluating Web Agents](https://awesomecua.github.io/resources/arxiv-2508-13024/) — 2025-08-18
  WebMall provides four simulated online shops with heterogeneous product data for comparison shopping, related-product searches, and checkout tasks. It evaluates web agents with different observation formats and memory configurations in a fixed offline environment.
- [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2506-07672/) — 2025-06-09
  MCPWorld evaluates API, GUI, and hybrid computer-use agents with 201 tasks in applications whose source can be instrumented and extended with MCP support. It verifies completion from application behavior and packages the testbed in containers with GPU support.
- [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.github.io/resources/arxiv-2505-21936/) — 2025-05-28
  RedTeamCUA combines a virtual-machine OS environment with containerized websites for controlled prompt-injection tests spanning both interfaces. Its RTC-Bench contains 864 examples and can initialize agents at injection points to separate attack susceptibility from navigation failures.
- [The BrowserGym Ecosystem for Web Agent Research](https://awesomecua.github.io/resources/arxiv-2412-05467/) — 2024-12-06
  Describes BrowserGym's shared web interaction environment and AgentLab tooling for consistent experiments across multiple agent benchmarks.
- [AgentStudio: A Toolkit for Building General Virtual Agents](https://awesomecua.github.io/resources/arxiv-2403-17918/) — 2024-03-26
  AgentStudio combines an interactive GUI/API environment with tools for creating tasks, annotating interface elements, and labeling actions in videos. Its online suite and GroundUI, IDMBench, and CriticBench datasets examine interaction, grounding, learning from video, and success detection.
- [Mobile-Env: Building Qualified Evaluation Benchmarks for LLM-GUI Interaction](https://awesomecua.github.io/resources/arxiv-2305-08144/) — 2023-05-14
  Provides an Android benchmark toolkit with controlled environments, intermediate feedback, and task sets for reproducible GUI-agent evaluation.
- [AndroidEnv: A Reinforcement Learning Platform for Android](https://awesomecua.github.io/resources/arxiv-2105-13231/) — 2021-05-27
  Presents an Android environment for training and evaluating reinforcement-learning agents through touchscreen interaction.

## 评测基准

- [AppSim-Bench](https://awesomecua.github.io/resources/github-acrab-agentic-labs-appsim/) — Date not recorded
  Simulated mobile applications and evaluation tooling for reproducible GUI-agent tasks with controlled application state.
- [MobileGym](https://awesomecua.github.io/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.
- [OpenApps](https://awesomecua.github.io/resources/github-facebookresearch-openapps/) — Date not recorded
  Configurable browser apps and task rewards for testing computer-use agents under changes in content, layout and appearance.

## 工程与产业

- [Agent Infra Sandbox](https://awesomecua.github.io/resources/github-agent-infra-sandbox/) — Date not recorded
  Sandbox environments supporting computer and browser interaction.
- [AgentDesk](https://awesomecua.github.io/resources/github-agentsea-agentdesk/) — Date not recorded
  Desktop environments that AI agents control programmatically, run locally with Docker or remotely on Kubernetes, built on the agentd REST daemon and offering a coordinate-grid overlay for LMM input.
- [AgentStudio](https://awesomecua.github.io/resources/github-skyworkai-agent-studio/) — Date not recorded
  Toolkit and Ubuntu-based environment for building and evaluating generalist computer-use agents through GUI and API interaction.
- [AndroidEnv](https://awesomecua.github.io/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [Browserbase Cloud](https://awesomecua.github.io/resources/url-978d1dcd70fde8661b9e/) — Date not recorded
  Managed browser infrastructure for agent applications.
- [Browserless](https://awesomecua.github.io/resources/url-1e6b8682e0f1ddc3d36f/) — Date not recorded
  Hosted browser infrastructure for automation applications.
- [E2B](https://awesomecua.github.io/resources/url-fda52d641c6b482bda7b/) — Date not recorded
  Sandbox infrastructure for executing agent workloads.
- [E2B Desktop](https://awesomecua.github.io/resources/github-e2b-dev-desktop/) — Date not recorded
  Open-source, isolated Linux Xfce desktop sandboxes for computer-use agents, driven from Python or JavaScript SDKs with screen streaming, mouse, keyboard and window control, screenshots and shell.
- [Hyperbrowser](https://awesomecua.github.io/resources/url-053ebfe0afac66c86222/) — Date not recorded
  Browser infrastructure and automation services for AI agents.
- [Lume](https://awesomecua.github.io/resources/github-trycua-lume/) — Date not recorded
  Virtual machine management for local computer-use environments.
- [RedTeamCUA](https://awesomecua.github.io/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
- [ScienceBoard VMware environment](https://awesomecua.github.io/resources/url-75917f2c2b2802aafd3e/) — Date not recorded
  A prebuilt Ubuntu virtual-machine archive containing the software environment used for ScienceBoard scientific computer-use tasks.
- [Steel Browser](https://awesomecua.github.io/resources/github-steel-dev-steel-browser/) — Date not recorded
  Open-source browser API managing Chrome sessions for agents, reachable through Puppeteer, Playwright or Selenium over CDP, with persisted cookies, proxy rotation, stealth and a session debugging UI.
- [Steel Cloud](https://awesomecua.github.io/resources/url-b940a884f200a916a61b/) — Date not recorded
  Managed browser infrastructure associated with Steel Browser.
