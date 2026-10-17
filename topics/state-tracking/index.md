# State tracking

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/state-tracking/records.jsonl

## Papers & surveys

- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.github.io/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [LocalLSTC: A Long Short-Term Control Architecture for Locally Deployed GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-25777/) — 2026-08-26
  Introduces LocalLSTC, a training-free control architecture that maintains persistent task state and uses it to form short execution commitments. Outcomes feed back into that state for progress checks, recovery, and termination in locally deployed desktop agents.
- [Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](https://awesomecua.github.io/resources/arxiv-2607-26041/) — 2026-07-28
  Introduces Desktop-Delta Bench, an offline diagnostic of GUI transition understanding using temporal-ordering tasks and before/after action inference. It includes decoy observations to test whether models track the source and task relevance of screen changes.
- [StateAct: Program State, before Pixels, for Long-Horizon Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-22798/) — 2026-07-24
  Introduces StateAct, a code-first computer-use harness that manipulates program state directly and delegates screenshot-and-click subgoals to a GUI agent. An independent completion gate checks saved outputs, while fresh subagents handle subgoals to limit accumulated context.
- [LongMemEval-V2: Evaluating Long-Term Agent Memory Toward Experienced Colleagues](https://awesomecua.github.io/resources/arxiv-2605-12493/) — 2026-05-12
  LongMemEval-V2 asks memory systems to recover environment knowledge from long web-agent histories for question answering. Its AgentRunbook variants contrast indexed knowledge pools with coding-agent retrieval from stored trajectory files.
- [Benchmarking and Improving GUI Agents in High-Dynamic Environments](https://awesomecua.github.io/resources/arxiv-2604-25380/) — 2026-04-28
  Introduces DynamicGUIBench for applications whose interfaces change between actions, together with DynamicUI, an agent that processes screen recordings. The agent selects informative frames, filters inconsistent action reasoning and uses trajectory reflection for subsequent decisions.
- [AJ-Bench: Benchmarking Agent-as-a-Judge for Environment-Aware Evaluation](https://awesomecua.github.io/resources/arxiv-2604-18240/) — 2026-04-20
  AJ-Bench evaluates judge agents that actively gather evidence from search, data systems and graphical interfaces. Its annotated tasks and trajectories test information acquisition, state verification and process verification.
- [Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://awesomecua.github.io/resources/arxiv-2604-05477/) — 2026-04-07
  Introduces VeriGUI, which checks expected action effects and reasons about recovery before subsequent GUI actions. Training combines synthetic failure trajectories with verification-weighted GRPO, evaluated on an AndroidControl-based robustness benchmark.
- [PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents](https://awesomecua.github.io/resources/arxiv-2603-08013/) — 2026-03-09
  PIRA-Bench evaluates proactive intent recommendations from noisy GUI screenshot sequences containing interleaved tasks and user context. Its PIRF baseline combines memory and state tracking to maintain multiple task threads and identify opportunities to assist.
- [BEAP-Agent: Backtrackable Execution and Adaptive Planning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2601-21352/) — 2026-01-29
  BEAP-Agent treats GUI execution as depth-first search with coordinated planning, execution and task-state tracking. It supports backtracking across multiple levels of earlier states and evaluates recovery on OSWorld.
- [DrawingBench: Evaluating Spatial Reasoning and UI Interaction Capabilities of Large Language Models through Mouse-Based Drawing Tasks](https://awesomecua.github.io/resources/arxiv-2512-01174/) — 2025-12-01
  DrawingBench evaluates sequences of low-level mouse-based GUI actions through 250 drawing prompts and rule-based criteria. Action inspection and multi-turn external feedback support analysis of spatial reasoning, tool-state management, and refinement.
- [Training High-Level Schedulers with Execution-Feedback Reinforcement Learning for Long-Horizon GUI Automation](https://awesomecua.github.io/resources/arxiv-2511-22235/) — 2025-11-27
  This work trains high-level schedulers with staged reinforcement learning driven by execution feedback. Its CES framework separates a Coordinator for planning and decomposition, a StateTracker for compressed context, and a low-level Executor.
- [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.github.io/resources/arxiv-2510-14621/) — 2025-10-16
  ColorBench represents mobile tasks as graphs of states collected from real devices, providing a quasi-dynamic environment with multiple valid paths and error paths. It evaluates single-app and cross-app tasks using completion, subtask progress, and atomic diagnostics.
- [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://awesomecua.github.io/resources/arxiv-2509-13615/) — 2025-09-17
  Introduces a benchmark for binary GUI-toggle instructions and State-aware Reasoning, which compares the observed control state with the requested state before choosing an action. It evaluates agents on toggle tasks and broader interactive benchmarks.
- [Chain-of-Memory: Enhancing GUI Agents for Cross-Application Navigation](https://awesomecua.github.io/resources/arxiv-2506-18158/) — 2025-06-22
  Chain-of-Memory explicitly records action descriptions and task-relevant screen information in short- and long-term memory for GUI navigation. GUI Odyssey-CoM provides 111,000 screen-action pairs with memory annotations for learning and evaluating information retention across applications.
- [From Context to Action: Analysis of the Impact of State Representation and Context on the Generalization of Multi-Turn Web Navigation Agents](https://awesomecua.github.io/resources/arxiv-2410-23555/) — 2024-10-31
  Analyzes how interaction history and webpage representation affect multiturn web-agent generalization across unfamiliar websites, task categories, and geographic settings.
- [OSCAR: Operating System Control via State-Aware Reasoning and Re-Planning](https://awesomecua.github.io/resources/arxiv-2410-18963/) — 2024-10-24
  OSCAR translates user instructions into Python control code while observing screen images and acting through mouse and keyboard operations. A state-machine controller handles errors and replans tasks during execution across desktop and mobile applications.
- [Agent-E: From Autonomous Web Navigation to Foundational Design Principles in Agentic Systems](https://awesomecua.github.io/resources/arxiv-2407-13032/) — 2024-07-17
  Agent-E combines hierarchical web-task control with DOM distillation and observations of interface changes. WebVoyager experiments inform a broader discussion of primitive skills, observation reduction, and self-improvement in agent architecture.
- [Seeing is Believing: Vision-driven Non-crash Functional Bug Detection for Mobile Apps](https://awesomecua.github.io/resources/arxiv-2407-03037/) — 2024-07-03
  Trident combines exploration, monitoring, and detection agents to identify functional bugs that do not crash a mobile app. It reasons over screenshot sequences and interface transitions to construct test oracles, evaluated on 590 non-crash bugs and additional live apps.
- [Latent State Estimation Helps UI Agents to Reason](https://awesomecua.github.io/resources/arxiv-2405-11120/) — 2024-05-17
  Studies explicit textual estimates of latent UI state, including whether commanded actions occurred and how far a task has progressed. The experiments compare agents that reason with these estimates against agents that omit them across public and internal task benchmarks.
- [LlamaTouch: A Faithful and Scalable Testbed for Mobile UI Task Automation](https://awesomecua.github.io/resources/arxiv-2404-16054/) — 2024-04-12
  LlamaTouch executes mobile tasks on devices and evaluates whether an agent visits manually annotated essential application or system states. Screenshot and hierarchy annotations, combined with exact and fuzzy state matching, support evaluation of 496 tasks across multiple agents.

## Engineering & industry

- [StateAct](https://awesomecua.github.io/resources/github-ai-nikolai-stateact/) — Date not recorded
  State-tracking prompts and experiment runners for language agents, including a WebShop implementation alongside text-based environments.
