# Sandboxes

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/sandbox/records.jsonl

## Papers & surveys

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
- [AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines](https://awesomecua.github.io/resources/arxiv-2602-14296/) — 2026-02-15
  AutoWebWorld turns finite-state task models into interactive websites whose actions and goal states can be checked programmatically. It generates verified trajectories for training and evaluates transfer to WebVoyager and Online-Mind2Web.
- [GUI-GENESIS: Automated Synthesis of Efficient Environments with Verifiable Rewards for GUI Agent Post-Training](https://awesomecua.github.io/resources/arxiv-2602-14093/) — 2026-02-15
  GUI-GENESIS reconstructs applications as lightweight web environments with executable assertions for reward computation. It evaluates the cost of these training environments and transfer from synthetic interaction training to held-out real tasks.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2601-04126/) — 2026-01-07
  InfiniteWeb generates functional, interconnected websites and task evaluators using shared specifications and task-driven development. It evaluates website construction and the transfer of GUI policies trained in these synthetic web environments to OSWorld and Online-Mind2Web.
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

## Benchmarks

- [AppSim-Bench](https://awesomecua.github.io/resources/github-acrab-agentic-labs-appsim/) — Date not recorded
  Simulated mobile applications and evaluation tooling for reproducible GUI-agent tasks with controlled application state.
- [MobileGym](https://awesomecua.github.io/resources/github-purewhiter-mobilegym/) — Date not recorded
  A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.

## Engineering & industry

- [Agent Infra Sandbox](https://awesomecua.github.io/resources/github-agent-infra-sandbox/) — Date not recorded
  Sandbox environments supporting computer and browser interaction.
- [AgentDesk](https://awesomecua.github.io/resources/github-agentsea-agentdesk/) — Date not recorded
  Virtual desktop provisioning and control tools for agents.
- [AndroidEnv](https://awesomecua.github.io/resources/github-google-deepmind-android-env/) — Date not recorded
  Android device-control platform with screenshots, accessibility telemetry, input actions, and an optional reinforcement-learning task interface.
- [Browserbase Cloud](https://awesomecua.github.io/resources/url-978d1dcd70fde8661b9e/) — Date not recorded
  Managed browser infrastructure for agent applications.
- [Browserless](https://awesomecua.github.io/resources/url-1e6b8682e0f1ddc3d36f/) — Date not recorded
  Hosted browser infrastructure for automation applications.
- [E2B](https://awesomecua.github.io/resources/url-fda52d641c6b482bda7b/) — Date not recorded
  Sandbox infrastructure for executing agent workloads.
- [E2B Desktop](https://awesomecua.github.io/resources/github-e2b-dev-desktop/) — Date not recorded
  Desktop sandboxes for computer-use agents.
- [Hyperbrowser](https://awesomecua.github.io/resources/url-053ebfe0afac66c86222/) — Date not recorded
  Browser infrastructure and automation services for AI agents.
- [Lume](https://awesomecua.github.io/resources/github-trycua-lume/) — Date not recorded
  Virtual machine management for local computer-use environments.
- [RedTeamCUA](https://awesomecua.github.io/resources/github-osu-nlp-group-redteamcua/) — Date not recorded
  A controlled testing framework that combines desktop virtual machines and replicated websites to evaluate computer-use agents against indirect prompt injection.
- [ScienceBoard VMware environment](https://awesomecua.github.io/resources/url-75917f2c2b2802aafd3e/) — Date not recorded
  A prebuilt Ubuntu virtual-machine archive containing the software environment used for ScienceBoard scientific computer-use tasks.
- [Steel Browser](https://awesomecua.github.io/resources/github-steel-dev-steel-browser/) — Date not recorded
  Browser infrastructure for agent applications.
- [Steel Cloud](https://awesomecua.github.io/resources/url-b940a884f200a916a61b/) — Date not recorded
  Managed browser infrastructure associated with Steel Browser.
