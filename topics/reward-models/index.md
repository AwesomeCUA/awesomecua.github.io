# Reward models

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/reward-models/records.jsonl

## Papers & surveys

- [VeriCUA: Learning Proactive Verification for Reliable GUI Agent Rewards](https://awesomecua.github.io/resources/arxiv-2610-26469/) — 2026-10-19
  VeriCUA trains a Judge to select verification checks and stopping decisions while a frozen Probe inspects the post-task GUI. Single-attempt reinforcement learning balances verdict correctness and Probe use.
- [From Trajectories to Grounded Preferences: Process Preference Synthesis via Interaction Element Graphs for Web PRMs](https://awesomecua.github.io/resources/arxiv-2609-32351/) — 2026-09-26
  Introduces SURFPRM, which turns web demonstrations into an interaction-element graph for synthesizing grounded negative actions. Its contrastive preference data trains process reward models to distinguish plausible on-page alternatives and guide downstream trajectory search.
- [Discriminative World Models for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [Task-Adaptive Rubrics for GUI Reward Modeling](https://awesomecua.github.io/resources/arxiv-2608-24174/) — 2026-08-25
  Introduces AdaptRubric, which retrieves reusable criteria for a GUI task family and then generates instruction-specific checks for concrete values and constraints. It evaluates these adaptive rubrics in offline reward assessment and online agent optimization.
- [GSAR: Goal-State-Anchor Rewards for Mobile GUI Agents with Self-Evolving Data Synthesis](https://awesomecua.github.io/resources/arxiv-2608-22847/) — 2026-08-24
  Introduces GSAR, which synthesizes GUI tasks and successful goal states, then annotates task-relevant interface elements as reward anchors. These anchors support offline trajectory verification and online policy training.
- [Benchmarking LLM Judges for Mobile Agent Evaluation](https://awesomecua.github.io/resources/arxiv-2608-11434/) — 2026-08-11
  MobileJudgeBench compares completion judges against human labels on mobile-agent trajectories. It studies screenshot-sampling baselines, model-dependent error profiles and how judge quality relates to agent rankings and reinforcement-learning rewards.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](https://awesomecua.github.io/resources/arxiv-2607-28609/) — 2026-07-30
  Introduces OSReward and its harder and multidimensional variants for assessing judgments of computer-use trajectories. It also releases a reasoning-annotated judgment corpus and trains reward models, examining reliability, leniency bias, and evaluation cost.
- [Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](https://awesomecua.github.io/resources/arxiv-2607-25904/) — 2026-07-28
  Introduces an Interactive Reward Agent that proposes completion conditions and verifies them using system, application, and GUI tools after execution. GUI-RewardBench provides annotated desktop trajectories for evaluating these evidence-based judgments and their use in reinforcement learning.
- [SeekJudge: A Practical Reward Framework for Reinforcement Learning in Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2607-23263/) — 2026-07-25
  Introduces SeekJudge, which iteratively searches and analyzes GUI trajectories to assess instruction fulfillment. The work combines dense judgment-data synthesis, a step-label benchmark, and reward-server scheduling to study accurate and practical reward feedback for agent training.
- [VisCritic: Visual State Comparison as Process Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-24525/) — 2026-06-23
  VisCritic compares before/after screenshots through change-aware visual features and an action-conditioned critic. Weakly supervised samples from existing traces train judgments of action success, progress and error type for GUI-agent verification.
- [Reinforcement Learning for Computer-Use Agents with Autonomous Evaluation](https://awesomecua.github.io/resources/arxiv-2606-24515/) — 2026-06-23
  The framework uses a vision-language judge’s final-screen assessment as a terminal reward for GUI reinforcement learning. It models evaluator noise and corrects the reward estimator used by PPO across desktop benchmarks.
- [A History-Aware Visually Grounded Critic for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2606-11078/) — 2026-06-09
  HiViG combines a compact history of completed actions with a visually grounded critic that checks proposed coordinates before execution. Its evaluations separate history-related planning failures from errors caused by targeting the wrong screen element.
- [StainFlow: Entity-Stain Tracking and Evidence Linking for Process Rewards in GUI Agents](https://awesomecua.github.io/resources/arxiv-2606-07027/) — 2026-06-05
  StainFlow tracks visually verifiable task entities through GUI trajectories to identify phases and retrieve focused evidence windows. Its process-reward model is tested for both online policy learning and trajectory-completion judgments.
- [AJ-Bench: Benchmarking Agent-as-a-Judge for Environment-Aware Evaluation](https://awesomecua.github.io/resources/arxiv-2604-18240/) — 2026-04-20
  AJ-Bench evaluates judge agents that actively gather evidence from search, data systems and graphical interfaces. Its annotated tasks and trajectories test information acquisition, state verification and process verification.
- [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](https://awesomecua.github.io/resources/arxiv-2604-07277/) — 2026-04-08
  Introduces Android Coach, which uses a learned critic to evaluate multiple candidate actions at each observed emulator state. Process rewards and a group-wise advantage estimator support online training, evaluated on AndroidLab and AndroidWorld.
- [IntentScore: Intent-Conditioned Action Evaluation for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2604-05157/) — 2026-04-06
  Trains IntentScore on offline desktop GUI interactions to assess candidate actions using both their state relevance and planning intent. The reward model is evaluated as an action reranker for Agent S3 on OSWorld.
- [The Art of Building Verifiers for Computer Use Agents](https://awesomecua.github.io/resources/arxiv-2604-06240/) — 2026-04-05
  Describes a web-trajectory verifier built around structured rubrics, separate process and outcome judgments, and explicit treatment of uncontrollable failures. CUAVerifierBench supplies human labels for evaluating these choices and screenshot-based context management.
- [A Subgoal-driven Framework for Improving Long-Horizon LLM Agents](https://awesomecua.github.io/resources/arxiv-2603-19685/) — 2026-03-20
  The framework separates inference-time subgoal planning from MiRA, a reinforcement-learning method that supplies milestone rewards. WebArena-Lite experiments evaluate these mechanisms for long-horizon web navigation.
- [OS-Themis: A Scalable Critic Framework for Generalist GUI Rewards](https://awesomecua.github.io/resources/arxiv-2603-19191/) — 2026-03-19
  Presents OS-Themis, a multi-agent critic that divides GUI trajectories into verifiable milestones and reviews their evidence before assigning an outcome. OGRBench evaluates GUI rewards across platforms, with AndroidWorld experiments examining training and trajectory filtering.
- [Video-Based Reward Modeling for Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2603-10178/) — 2026-03-10
  Builds ExeVR-53k from execution-video, instruction and reward triplets, including negative instructions with step annotations. A reward model uses spatiotemporal token pruning to judge task completion from the instruction and execution keyframes.
- [Building Autonomous GUI Navigation via Agentic-Q Estimation and Step-Wise Policy Optimization](https://awesomecua.github.io/resources/arxiv-2602-13653/) — 2026-02-14
  This framework learns an agentic-Q model to estimate individual actions’ contributions to GUI task completion. It then optimizes a policy with step-level samples from its own trajectories, decoupling policy updates from environment interaction.
- [Adaptive Milestone Reward for GUI Agents](https://awesomecua.github.io/resources/arxiv-2602-11524/) — 2026-02-12
  ADMIRE extracts milestones from successful GUI explorations to provide adaptive intermediate rewards. It assigns credit differently to successful and failed trajectories and evaluates training on AndroidWorld, with additional transfer studies in web and embodied settings.
- [Autonomous Continual Learning for Environment Adaptation of Computer-Use Agents](https://awesomecua.github.io/resources/arxiv-2602-10356/) — 2026-02-10
  ACuRL uses autonomous interface exploration and an adaptive task curriculum to continually train computer-use policies with reinforcement learning. CUAJudge supplies outcome feedback, and experiments study adaptation across desktop applications and environment changes.
- [Agentic Reward Modeling: Verifying GUI Agent via Progressive Trajectory-Grounded Interaction](https://awesomecua.github.io/resources/arxiv-2602-00575/) — 2026-01-31
  VAGEN verifies GUI trajectories by first extracting readily available evidence and escalating to tool-based environment probes when needed. Evaluation on OSWorld-Verified and AndroidWorld studies verification accuracy and its cost.
- [WebArbiter: A Principle-Guided Reasoning Process Reward Model for Web Agents](https://awesomecua.github.io/resources/arxiv-2601-21872/) — 2026-01-29
  WebArbiter generates reasoned action-preference verdicts for web navigation, using reasoning distillation followed by reinforcement learning. It introduces WebPRMBench and evaluates both preference judgments and reward-guided trajectory search.
- [GAIA: A Data Flywheel System for Training GUI Test-Time Scaling Critic Models](https://awesomecua.github.io/resources/arxiv-2601-18197/) — 2026-01-26
  GAIA trains a GUI action critic on positive and negative examples, then uses that critic to collect improved examples for another training round. It studies how recycling these data affects the test-time action choices of different GUI agents.
- [MagicGUI-RMS: A Multi-Agent Reward Model System for Self-Evolving GUI Agents via Automated Feedback Reflux](https://awesomecua.github.io/resources/arxiv-2601-13060/) — 2026-01-19
  MagicGUI-RMS combines domain-specific and general reward models to assess GUI actions and propose corrections. A structured data pipeline and feedback-recycling process support repeated reward-model and agent improvement.
- [EchoTrail-GUI: Building Actionable Memory for GUI Agents via Critic-Guided Self-Exploration](https://awesomecua.github.io/resources/arxiv-2512-19396/) — 2025-12-22
  EchoTrail-GUI builds a memory of successful GUI trajectories through autonomous exploration filtered by a reward model. It retrieves relevant trajectories as in-context guidance for new tasks and evaluates the approach on AndroidWorld and AndroidLab.
- [OS-Oracle: A Comprehensive Framework for Cross-Platform GUI Critic Models](https://awesomecua.github.io/resources/arxiv-2512-16295/) — 2025-12-18
  OS-Oracle synthesizes GUI critic examples and trains a pre-action critic with supervised learning followed by consistency-preserving GRPO. It introduces OS-Critic Bench across mobile, web, and desktop settings and tests critic-assisted agents in OSWorld and AndroidWorld.
- [Step-GUI Technical Report](https://awesomecua.github.io/resources/arxiv-2512-15431/) — 2025-12-17
  Step-GUI uses calibrated trajectory rewards to turn generated GUI interaction data into training signals for compact agent models. The report also introduces GUI-MCP for hierarchical GUI operations and local task delegation, and AndroidDaily for static-action and end-to-end mobile evaluation.
- [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](https://awesomecua.github.io/resources/arxiv-2512-10962/) — 2025-11-22
  Introduces a pipeline that filters individual steps from noisy computer-agent rollouts and augments them with reasoning for training. WebSTAR and WebSCORE support GUI-policy supervision and a distilled process reward model, StepRM.
- [Scaling Agents for Computer Use](https://awesomecua.github.io/resources/arxiv-2510-02250/) — 2025-10-02
  Introduces Behavior Judge, which converts execution trajectories into behavior narratives and compares multiple candidate rollouts. Experiments examine this selection approach on OSWorld, WindowsAgentArena and AndroidWorld.
- [GUI-PRA: Process Reward Agent for GUI Tasks](https://awesomecua.github.io/resources/arxiv-2509-23263/) — 2025-09-27
  GUI-PRA evaluates GUI progress by generating task-specific criteria and actively inspecting visual evidence with tools. It tests offline judgment on OS-Critic Bench and the effects of this feedback on online mobile policies in AndroidWorld.
- [ProRe: A Proactive Reward System for GUI Agents via Reasoner-Actor Collaboration](https://awesomecua.github.io/resources/arxiv-2509-21823/) — 2025-09-26
  ProRe evaluates GUI task outcomes by having a reasoner assign targeted environment-probing tasks to specialist actors. The additional observations support reward judgments, with separate evaluation of judge accuracy and downstream agent task success.
- [Orcust: Stepwise-Feedback Reinforcement Learning for GUI Agent](https://awesomecua.github.io/resources/arxiv-2509-17917/) — 2025-09-22
  Orcust combines principle-constrained reward modeling with GUI trajectory collection in instrumented virtual machines. Environment-checkable and model-derived principles guide stepwise feedback for grounding, basic operations, and complete task execution.
- [TGPO: Tree-Guided Preference Optimization for Robust Web Agent Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2509-14172/) — 2025-09-17
  TGPO merges semantically equivalent web states into tree-structured trajectories for offline preference optimization. A process reward model scores subgoal progress, redundant behavior, and action validity, while dynamic weighting emphasizes consequential decisions.
- [CRAFT-GUI: Curriculum-Reinforced Agent For GUI Tasks](https://awesomecua.github.io/resources/arxiv-2508-11360/) — 2025-08-15
  CRAFT-GUI organizes GUI trajectories by difficulty for curriculum-based GRPO training. Its reward combines rule-based signals with model judgments, with evaluation on Android Control and an internal online benchmark.
- [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2507-15846/) — 2025-07-21
  GUI-G2 replaces binary grounding rewards with Gaussian point rewards and spatial-coverage rewards. An adaptive variance tied to element dimensions supplies continuous training feedback for targets of different sizes, evaluated on the ScreenSpot benchmark family.
- [WebGuard: Building a Generalizable Guardrail for Web Agents](https://awesomecua.github.io/resources/arxiv-2507-14293/) — 2025-07-18
  Introduces WebGuard, a human-annotated dataset for predicting outcomes and risk levels of state-changing website actions. It provides generalization splits and evaluates specialized guardrail models.
- [Guiding VLM Agents with Process Rewards at Inference Time for GUI Navigation](https://awesomecua.github.io/resources/arxiv-2504-16073/) — 2025-04-22
  Guides visual GUI agents at inference time with a process-reward model that evaluates intermediate actions. It combines stepwise guidance with trajectory reflection and retry mechanisms in static and interactive navigation tasks.
- [From Novice to Expert: LLM Agent Policy Optimization via Step-wise Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2411-03817/) — 2024-11-06
  Introduces StepAgent, which compares agent and expert actions to supply intermediate rewards for policy learning, with implicit-reward and inverse-RL variants. Evaluation includes WebShop and Mind2Web alongside non-web tasks.
- [Autonomous Evaluation and Refinement of Digital Agents](https://awesomecua.github.io/resources/arxiv-2404-06474/) — 2024-04-09
  Compares automatic trajectory evaluators for web navigation and device control against oracle judgments. The resulting feedback is used for agent fine-tuning and inference-time guidance, including experiments on WebArena.

## Benchmarks

- [AgentRewardBench](https://awesomecua.github.io/resources/github-mcgill-nlp-agent-reward-bench/) — Date not recorded
  A benchmark and evaluation toolkit for comparing automatic web-agent judges against expert judgments of task success, side effects and repetition.
- [CUAVerifierBench](https://awesomecua.github.io/resources/url-d5140d438466c1e1348a/) — Date not recorded
  Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.
- [OS-Critic Bench](https://awesomecua.github.io/resources/url-c73ba0618d1b3c505887/) — Date not recorded
  A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.
- [WebRewardBench](https://awesomecua.github.io/resources/url-ac6d0f80765f5a32255a/) — Date not recorded
  An offline preference-evaluation set for web process reward models, pairing page and trajectory context with preferred and rejected candidate decisions.

## Datasets

- [UI-Genie reward data](https://awesomecua.github.io/resources/url-84e5aeeffaf561baa966/) — Date not recorded
  Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.
- [WebPRM checklist-generation data](https://awesomecua.github.io/resources/url-fcc98b149272bbf31b05/) — Date not recorded
  Web-task context, starting observations and action history paired with structured checklists and subgoal analyses for checklist generation.
- [WebPRM Collection preference data](https://awesomecua.github.io/resources/url-8dfc84eb4016204fe70a/) — Date not recorded
  Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

## Models

- [GUI-G2 7B](https://awesomecua.github.io/resources/url-90eea6f6d099a3297850/) — Date not recorded
  A Qwen2.5-VL grounding checkpoint trained with Gaussian point and coverage rewards whose granularity adapts to interface-element scale.
- [WebJudge 7B](https://awesomecua.github.io/resources/url-772161f06c2b3d4978b5/) — Date not recorded
  A visual trajectory judge that retains selected intermediate screenshots to evaluate whether a web agent completed its task.
- [WebRL outcome reward model 8B](https://awesomecua.github.io/resources/url-d1e85aeb6d96859c109d/) — Date not recorded
  The outcome-supervision checkpoint used by WebRL to score browser trajectories during policy training.
- [WebShepherd 3B](https://awesomecua.github.io/resources/url-72f7fe0211c6551b945f/) — Date not recorded
  A public text-based process-reward checkpoint from the Web-Shepherd collection for scoring web-agent decisions against task checklists.

## Engineering & industry

- [UI-Genie](https://awesomecua.github.io/resources/github-euphoria16-ui-genie/) — Date not recorded
  Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.
- [VEM GUI-Agent-RL](https://awesomecua.github.io/resources/github-microsoft-gui-agent-rl/) — Date not recorded
  Training code that learns a value environment model from offline Android interaction data and uses its frozen value estimates to guide GUI policy optimization.
- [Web-Shepherd inference and evaluation](https://awesomecua.github.io/resources/github-kyle8581-web-shepherd/) — Date not recorded
  Process-reward inference and benchmark-evaluation utilities that use task checklists to assess individual web-agent decisions.
