# Self-reflection

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/self-reflection/records.jsonl

## Papers & surveys

- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.github.io/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.github.io/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [Reflection with Action-Induced Visual Differences for Desktop GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-24015/) — 2026-08-25
  Introduces Evidence-First Reflection, which separates extraction of action-induced screen changes from judgment of whether an operation achieved its objective. It filters visual differences into relevant evidence before a desktop agent’s reflector decides how execution should continue.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.github.io/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.github.io/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [Falsifiable Commitment Planning for Self-Correcting Web Agents](https://awesomecua.github.io/resources/arxiv-2607-24167/) — 2026-07-27
  Introduces FCPAgent, which attaches confirming and falsifying evidence to each skill-grounded plan step. A plan–test–repair loop checks actions and observations, then localizes contradictions so execution, skills, or plans can be revised at the appropriate level.
- [Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2606-31270/) — 2026-06-30
  Uses failed computer-use trajectories to diagnose failure modes and generate inference-time agent code patches, with light human verification. An OSWorld study evaluates this failure-driven improvement loop without additional model training.
- [VLAA-GUI: Knowing When to Stop, Recover, and Search, A Modular Framework for GUI Automation](https://awesomecua.github.io/resources/arxiv-2604-21375/) — 2026-04-23
  VLAA-GUI combines mandatory checks for visually supported completion, multi-tier loop recovery and on-demand workflow search. Optional coding and grounding agents support execution, with component ablations on Linux and Windows GUI tasks.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.github.io/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.github.io/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.github.io/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.github.io/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [GAIR: GUI Automation via Information-Joint Reasoning and Group Reflection](https://awesomecua.github.io/resources/arxiv-2512-09396/) — 2025-12-10
  Introduces GAIR, which combines information from specialized GUI models through a general-purpose coordinating model. When the available information is insufficient, group reflection sends targeted requests back to the specialists before selecting an operation.
- ["Are We Done Yet?": A Vision-Based Judge for Autonomous Task Completion of Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2511-20067/) — 2025-11-25
  This study tests vision-language models as task-completion judges using screenshots and instructions from 42 built-in macOS applications. It evaluates judgment accuracy on human-labeled tasks and separately studies how judge feedback affects agent task success.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://awesomecua.github.io/resources/arxiv-2509-25140/) — 2025-09-29
  Distills generalizable reasoning strategies from both successful and failed agent trajectories into a persistent memory bank for test-time retrieval.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.github.io/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2505-21964/) — 2025-05-28
  Introduces UI-Evol, which extracts action sequences from agent interactions and critiques external guidance against those traces. Evaluation on OSWorld examines how revised operational knowledge affects execution and behavioral consistency.
- [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.github.io/resources/arxiv-2505-20013/) — 2025-05-26
  WebCoT turns reflection, look-ahead, branching and rollback procedures into chain-of-thought training rationales. Fine-tuning on these reconstructed trajectories is evaluated for web-agent self-improvement and transfer across navigation tasks.
- [Guiding VLM Agents with Process Rewards at Inference Time for GUI Navigation](https://awesomecua.github.io/resources/arxiv-2504-16073/) — 2025-04-22
  Guides visual GUI agents at inference time with a process-reward model that evaluates intermediate actions. It combines stepwise guidance with trajectory reflection and retry mechanisms in static and interactive navigation tasks.
- [From Novice to Expert: LLM Agent Policy Optimization via Step-wise Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2411-03817/) — 2024-11-06
  Introduces StepAgent, which compares agent and expert actions to supply intermediate rewards for policy learning, with implicit-reward and inverse-RL variants. Evaluation includes WebShop and Mind2Web alongside non-web tasks.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.github.io/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [A Zero-Shot Language Agent for Computer Control with Structured Reflection](https://awesomecua.github.io/resources/arxiv-2310-08740/) — 2023-10-12
  Studies a zero-shot computer-control agent that plans executable actions and organizes its own reflections after mistakes. MiniWoB++ experiments examine learning to complete tasks without supplied expert trajectories.
- [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://awesomecua.github.io/resources/arxiv-2305-16653/) — 2023-05-26
  Introduces AdaPlanner, which revises code-structured plans in response to environmental feedback and reuses successful plans as exemplars. Experiments include MiniWoB++ web tasks alongside ALFWorld.
- [Language Models can Solve Computer Tasks](https://awesomecua.github.io/resources/arxiv-2303-17491/) — 2023-03-30
  Introduces recursive criticism and improvement prompting for language-model agents performing computer tasks, evaluated on MiniWoB++ with a small number of demonstrations per task.

## Models

- [InfiGUI-R1 3B](https://awesomecua.github.io/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [OpenCUA 32B](https://awesomecua.github.io/resources/url-ad7f176848fd84de64e2/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.
- [OpenCUA 72B](https://awesomecua.github.io/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.

## Engineering & industry

- [Agent-R](https://awesomecua.github.io/resources/github-bytedance-seed-agent-r/) — Date not recorded
  Trajectory collection and revision utilities that use tree search and model-guided critique to train agents to recover from mistakes, including WebShop tasks.
- [MobA](https://awesomecua.github.io/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile-Agent-E code component](https://awesomecua.github.io/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [PC-Agent (X-PLUG component)](https://awesomecua.github.io/resources/component-x-plug-mobileagent-pc-agent/) — Date not recorded
  Multi-agent desktop automation component for Windows and macOS, combining active perception, task decomposition and reflection for workflows spanning applications.
- [RCI Agent](https://awesomecua.github.io/resources/github-posgnu-rci-agent/) — Date not recorded
  A MiniWoB++ agent that uses explicit and implicit recursive criticism-and-improvement prompts to refine action plans and ground actions to browser state.
- [Self-MAP](https://awesomecua.github.io/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [WebEvolver code component](https://awesomecua.github.io/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
