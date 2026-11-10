---
title: "自我反思：Computer-Use 研究与资源 | AwesomeCUA"
url: https://awesomecua.com/zh/topics/self-reflection/
updated: 2026-11-10
type: topic
lang: zh-CN
---

# 自我反思

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/self-reflection/records.jsonl

## 论文与综述

- [ScienceCUA: Resource-to-Skill Construction and Execution-Guided Skill Evolution for Scientific Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2611-03238/) — 2026-11-02
  Introduces ScienceCUA, which turns scientific software documentation into reusable agent skills and revises them using execution feedback, with two audited evaluation variants.
- [MAGAR: Multimodal Agents for GUI-Based 3D Mechanical Assembly and Minimal Rework](https://awesomecua.com/zh/resources/arxiv-2611-02472/) — 2026-11-02
  Introduces MAGAR-Bench for GUI-based 3D mechanical assembly decisions and recovery, and MAGAR, a selective correction method for assembly outputs and actions.
- [AdaGround: Token-Normalized Adaptive Zooming with Verifier-in-the-Loop Refinement for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2610-36874/) — 2026-10-27
  Introduces AdaGround, a training-free GUI grounding method that adjusts screenshot zoom to target size and uses a click verifier to refine or reject predictions.
- [Step-Aligned Script Generation with Verification and Recovery for Web Automation Testing](https://awesomecua.com/zh/resources/arxiv-2610-25601/) — 2026-10-19
  Presents TESSARA, which turns natural-language web test intent into Playwright scripts, linking each browser interaction to selector evidence, outcomes, and repair history.
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://awesomecua.com/zh/resources/arxiv-2610-13092/) — 2026-10-09
  Evaluates Jev as a bounded action selector inside three AndroidWorld agents and two text-based ALFWorld agents, separating decision savings from task success, recovery and resources per delivered outcome.
- [Reflect, Revise, Reuse: Training-Free Skill Evolution for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2609-17653/) — 2026-09-15
  EvoSkill-GUI revises reusable skill files from execution feedback through an executor–critic loop. It studies how training-free updates to localization, recovery and procedure information help subsequent mobile and desktop tasks.
- [AnchorGUI: Asymmetric Memory for Dual-Scale Learning in GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2609-15457/) — 2026-09-14
  AnchorGUI compares expected and observed UI transitions and selectively retains screenshots when they disagree. This asymmetric memory supports immediate correction and focuses cross-attempt experience distillation on likely failure steps.
- [Reflection with Action-Induced Visual Differences for Desktop GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-24015/) — 2026-08-25
  Introduces Evidence-First Reflection, which separates extraction of action-induced screen changes from judgment of whether an operation achieved its objective. It filters visual differences into relevant evidence before a desktop agent’s reflector decides how execution should continue.
- [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](https://awesomecua.com/zh/resources/arxiv-2608-11191/) — 2026-08-11
  Introduces a Test-Time Self-Evolving framework for GUI grounding that explores unseen interfaces, reflects on predicted coordinates, and distills those reflections into the model.
- [LookAgain: Closed-Loop GUI Grounding with Visually Grounded Reflection](https://awesomecua.com/zh/resources/arxiv-2608-09723/) — 2026-08-10
  LookAgain treats a GUI coordinate as a revisable hypothesis, rendering its marker and a local screenshot patch before confirmation. Reflective supervised trajectories provide a cold start, followed by GRPO using terminal grounding correctness.
- [AndroidReality: How Far Are Mobile Agents from the Real World?](https://awesomecua.com/zh/resources/arxiv-2608-07775/) — 2026-08-07
  Extends AndroidWorld with controlled state, transition, and action perturbations to test mobile-agent robustness, and studies a training-free introspective recovery mechanism.
- [StepReflect: Structured UI Transition Reflection for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2608-05587/) — 2026-08-06
  StepReflect predicts structured per-action reflections from transition specifications and paired visual evidence. The paper distinguishes offline transition-label accuracy from online task success when the reflection model is integrated into mobile agents.
- [CUADebug: Diagnosing and Repairing Computer-Use Agent Failures](https://awesomecua.com/zh/resources/arxiv-2608-02643/) — 2026-07-31
  CUADebug combines a failure taxonomy and human-annotated OSWorld failure trajectories with an agent that locates causal steps and proposes corrections from screenshots and action traces. It evaluates root-cause diagnosis separately from controlled task re-execution and failure recovery.
- [MemHarness: Memory Is Reconstructed, Not Replayed](https://awesomecua.com/zh/resources/arxiv-2607-28272/) — 2026-07-30
  Introduces MemHarness, which trains agents to critique and reconstruct retrieved experience before acting; WebShop is one of two evaluation environments.
- [Falsifiable Commitment Planning for Self-Correcting Web Agents](https://awesomecua.com/zh/resources/arxiv-2607-24167/) — 2026-07-27
  Introduces FCPAgent, which attaches confirming and falsifying evidence to each skill-grounded plan step. A plan–test–repair loop checks actions and observations, then localizes contradictions so execution, skills, or plans can be revised at the appropriate level.
- [Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2606-31270/) — 2026-06-30
  Uses failed computer-use trajectories to diagnose failure modes and generate inference-time agent code patches, with light human verification. An OSWorld study evaluates this failure-driven improvement loop without additional model training.
- [Learning to Adapt: Self-Improving Web Agent via Cognitive-Aware Exploration](https://awesomecua.com/zh/resources/arxiv-2605-31365/) — 2026-05-29
  Introduces SCALE, which uses exploration roles and graph planning to train web agents, and SCALE-20k, a dataset of tasks and demonstrations from real websites.
- [BaRA: Budget-constrained and Reliable Web Data Collection Agent](https://awesomecua.com/zh/resources/arxiv-2607-00007/) — 2026-05-02
  Introduces BaRA, a web data-collection agent that discovers live site links, checks extracted text, images, and videos, and uses history to recover from failures.
- [DRIVE: Modeling Skills at the Reasoning and Interaction Levels for Web Agents under Continual Learning](https://awesomecua.com/zh/resources/arxiv-2605-23939/) — 2026-04-28
  DRIVE separates reusable reasoning skills from page-specific interaction skills for web agents, retrieving both to plan tasks and execute actions on websites.
- [VLAA-GUI: Knowing When to Stop, Recover, and Search, A Modular Framework for GUI Automation](https://awesomecua.com/zh/resources/arxiv-2604-21375/) — 2026-04-23
  VLAA-GUI combines mandatory checks for visually supported completion, multi-tier loop recovery and on-demand workflow search. Optional coding and grounding agents support execution, with component ablations on Linux and Windows GUI tasks.
- [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2604-21268/) — 2026-04-23
  Trains a GUI grounding proposer together with a visual critic that evaluates candidate locations rendered on screenshots. An adaptive reinforcement-learning schedule balances their development, using proposal diversity and critic feedback during training.
- [LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent](https://awesomecua.com/zh/resources/url-4395ff8522cd77109b83/) — 2026-04-20
  Training-free GUI agent that indexes screen elements via icon detection and OCR, checks each step with multi-level reflection and recovers by fallback clicks or rollback; introduces LongGUIBench, tasks over 15 steps.
- [CAPTCHA Solving for Native GUI Agents: Automated Reasoning-Action Data Generation and Self-Corrective Training](https://awesomecua.com/zh/resources/arxiv-2603-23559/) — 2026-03-23
  Introduces ReCAP, a native GUI agent for interactive CAPTCHA challenges, trained with generated interaction trajectories, reasoning traces and self-correction data.
- [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2603-15039/) — 2026-03-16
  GUI-CEval evaluates Chinese mobile GUI agents through a hierarchy of atomic abilities and application-level tasks collected on physical devices. Its diagnostics cover perception, planning, reflection, execution and post-action evaluation across a broad set of apps.
- [World-Model-Augmented Web Agents with Action Correction](https://awesomecua.com/zh/resources/arxiv-2602-15384/) — 2026-02-17
  WAC has a web-agent action model consult a world model, simulate action outcomes and use judge feedback to correct actions before execution.
- [OpAgent: Operator Agent for Web Navigation](https://awesomecua.com/zh/resources/arxiv-2602-13559/) — 2026-02-14
  OpAgent combines multi-task GUI fine-tuning with online web reinforcement learning using outcome judgments and rule-based progress rewards. A modular planner, grounder, reflector and summarizer support navigation and recovery, evaluated separately from the underlying trained policy.
- [Do Multi-Agents Dream of Electric Screens? Achieving Perfect Accuracy on AndroidWorld Through Task Decomposition](https://awesomecua.com/zh/resources/arxiv-2602-07787/) — 2026-02-08
  Minitap coordinates six specialized agents for AndroidWorld tasks, checking text input against device state and detecting action loops to revise its strategy.
- [EvoCUA: Evolving Computer Use Agents via Learning from Scalable Synthetic Experience](https://awesomecua.com/zh/resources/arxiv-2601-15876/) — 2026-01-22
  EvoCUA combines task synthesis with executable validators, asynchronous sandbox rollouts and iterative policy updates. It turns successful routines and analyzed failures into supervision and evaluates the evolving agent on OSWorld.
- [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agent](https://awesomecua.com/zh/resources/arxiv-2601-07779/) — 2026-01-12
  OS-Symphony coordinates milestone-based reflection and memory with tools that build visually aligned tutorials through browser interaction. The framework evaluates trajectory correction and adaptation on online computer-use benchmarks including OSWorld.
- [GUITester: Enabling GUI Agents for Exploratory Defect Discovery](https://awesomecua.com/zh/resources/arxiv-2601-04500/) — 2026-01-08
  Introduces GUITestBench for interactive defect discovery and GUITester, which separates task navigation from anomaly verification. Testing-oriented plans and history-based reflection help distinguish software defects from agent execution mistakes.
- [SmartSnap: Proactive Evidence Seeking for Self-Verifying Agents](https://awesomecua.com/zh/resources/arxiv-2512-22322/) — 2025-12-26
  SmartSnap trains GUI agents to collect concise screenshot evidence of task completion for an LLM judge, with experiments on mobile tasks.
- [GAIR: GUI Automation via Information-Joint Reasoning and Group Reflection](https://awesomecua.com/zh/resources/arxiv-2512-09396/) — 2025-12-10
  Introduces GAIR, which combines information from specialized GUI models through a general-purpose coordinating model. When the available information is insufficient, group reflection sends targeted requests back to the specialists before selecting an operation.
- ["Are We Done Yet?": A Vision-Based Judge for Autonomous Task Completion of Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2511-20067/) — 2025-11-25
  This study tests vision-language models as task-completion judges using screenshots and instructions from 42 built-in macOS applications. It evaluates judgment accuracy on human-labeled tasks and separately studies how judge feedback affects agent task success.
- [History-Aware Reasoning for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2511-09127/) — 2025-11-12
  HAR-GUI combines episodic reasoning and short-term memory to use earlier interactions when selecting GUI actions. Its training constructs reflective scenarios and correction guidance and applies a hybrid reinforcement-learning reward to the 3B policy.
- [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://awesomecua.com/zh/resources/arxiv-2509-25140/) — 2025-09-29
  Distills generalizable reasoning strategies from both successful and failed agent trajectories into a persistent memory bank for test-time retrieval.
- [WebGen-Agent: Enhancing Interactive Website Generation with Multi-Level Feedback and Step-Level Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2509-22644/) — 2025-09-26
  Introduces WebGen-Agent for website code generation, using screenshot critiques and GUI-agent tests to refine code and provide step-level training rewards.
- [D-Artemis: A Deliberative Cognitive Framework for Mobile GUI Multi-Agents](https://awesomecua.com/zh/resources/arxiv-2509-21799/) — 2025-09-26
  Introduces D-Artemis, a mobile GUI agent framework that retrieves app-specific tips, checks actions before execution, and reflects on their outcomes without trajectory training.
- [Mano Technical Report](https://awesomecua.com/zh/resources/arxiv-2509-17336/) — 2025-09-22
  Introduces Mano, a GUI agent trained with simulated data, supervised fine-tuning, and offline and online RL, with a verification module for error recovery.
- [Instruction Agent: Enhancing Agent with Expert Demonstration](https://awesomecua.com/zh/resources/arxiv-2509-07098/) — 2025-09-08
  Introduces Instruction Agent, a GUI agent that follows instructions extracted from one expert demonstration and uses verification and backtracking to handle interruptions.
- [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.com/zh/resources/arxiv-2507-16853/) — 2025-07-21
  MobileUse reflects on errors at action and task timescales, invoking reflection when needed and using proactive exploration to learn unfamiliar apps. It evaluates this mobile execution framework on AndroidWorld and AndroidLab and describes a toolkit for physical-device operation.
- [Let's Think in Two Steps: Mitigating Agreement Bias in MLLMs with Self-Grounded Verification](https://awesomecua.com/zh/resources/arxiv-2507-11662/) — 2025-07-15
  Studies agreement bias in multimodal agent verifiers across web navigation and computer use, and introduces SGV to assess trajectories using self-generated priors.
- [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2505-21964/) — 2025-05-28
  Introduces UI-Evol, which extracts action sequences from agent interactions and critiques external guidance against those traces. Evaluation on OSWorld examines how revised operational knowledge affects execution and behavioral consistency.
- [Training LLM-Based Agents with Synthetic Self-Reflected Trajectories and Partial Masking](https://awesomecua.com/zh/resources/arxiv-2505-20023/) — 2025-05-26
  Introduces STeP, which trains agents on synthetic trajectories containing error reflections and corrections while masking poor steps; WebShop is one of three evaluated tasks.
- [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.com/zh/resources/arxiv-2505-20013/) — 2025-05-26
  WebCoT turns reflection, look-ahead, branching and rollback procedures into chain-of-thought training rationales. Fine-tuning on these reconstructed trajectories is evaluated for web-agent self-improvement and transfer across navigation tasks.
- [Guiding VLM Agents with Process Rewards at Inference Time for GUI Navigation](https://awesomecua.com/zh/resources/arxiv-2504-16073/) — 2025-04-22
  Guides visual GUI agents at inference time with a process-reward model that evaluates intermediate actions. It combines stepwise guidance with trajectory reflection and retry mechanisms in static and interactive navigation tasks.
- [R2D2: Remembering, Replaying and Dynamic Decision Making with a Reflective Agentic Memory](https://awesomecua.com/zh/resources/arxiv-2501-12485/) — 2025-01-21
  R2D2 gives web agents a replay-buffer map of visited pages and a reflection step for analyzing errors and revising navigation strategies.
- [From Novice to Expert: LLM Agent Policy Optimization via Step-wise Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2411-03817/) — 2024-11-06
  Introduces StepAgent, which compares agent and expert actions to supply intermediate rewards for policy learning, with implicit-reward and inverse-RL variants. Evaluation includes WebShop and Mind2Web alongside non-web tasks.
- [ExACT: Teaching AI Agents to Explore with Reflective-MCTS and Exploratory Learning](https://awesomecua.com/zh/resources/arxiv-2410-02052/) — 2024-10-02
  ExACT combines reflective tree search with learning from search experience to help web agents explore, assess states and backtrack on VisualWebArena.
- [Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents](https://awesomecua.com/zh/resources/arxiv-2408-07199/) — 2024-08-13
  Agent Q combines guided tree search, self-critique and preference-based fine-tuning to train web agents from successful and unsuccessful interactions.
- [VLM Agents Generate Their Own Memories: Distilling Experience into Embodied Programs of Thought](https://awesomecua.com/zh/resources/arxiv-2406-14596/) — 2024-06-20
  ICAL turns imperfect agent trajectories into reusable strategies and action annotations through reflection and human feedback, with VisualWebArena among its evaluations.
- [SheetAgent: Towards A Generalist Agent for Spreadsheet Reasoning and Manipulation via Large Language Models](https://awesomecua.com/zh/resources/arxiv-2403-03636/) — 2024-03-06
  Introduces SheetRM, a benchmark of long-horizon spreadsheet tasks, and SheetAgent, an LLM agent that plans, retrieves information and reflects while manipulating spreadsheets.
- [On the Multi-turn Instruction Following for Conversational Web Agents](https://awesomecua.com/zh/resources/arxiv-2402-15057/) — 2024-02-23
  MT-Mind2Web evaluates web navigation through sequences of conversational user instructions. Self-MAP combines memory-augmented planning with reflection to preserve context and dependencies across those interaction turns.
- [A Zero-Shot Language Agent for Computer Control with Structured Reflection](https://awesomecua.com/zh/resources/arxiv-2310-08740/) — 2023-10-12
  Studies a zero-shot computer-control agent that plans executable actions and organizes its own reflections after mistakes. MiniWoB++ experiments examine learning to complete tasks without supplied expert trajectories.
- [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://awesomecua.com/zh/resources/arxiv-2305-16653/) — 2023-05-26
  Introduces AdaPlanner, which revises code-structured plans in response to environmental feedback and reuses successful plans as exemplars. Experiments include MiniWoB++ web tasks alongside ALFWorld.
- [Language Models can Solve Computer Tasks](https://awesomecua.com/zh/resources/arxiv-2303-17491/) — 2023-03-30
  Introduces recursive criticism and improvement prompting for language-model agents performing computer tasks, evaluated on MiniWoB++ with a small number of demonstrations per task.

## 评测基准

- [AgentForge](https://awesomecua.com/zh/resources/github-moeenasim-agentforge-v5/) — Date not recorded
  Multi-agent adversarial evaluation and safety-checking laboratory for stress-testing computer-use agents.
- [cskwork vigil](https://awesomecua.com/zh/resources/github-cskwork-vigil/) — Date not recorded
  Continuous browser QA harness that reproduces reported bugs and autonomously expands end-to-end test coverage on live web URLs.
- [done-or-not](https://awesomecua.com/zh/resources/github-tatra-labs-done-or-not/) — Date not recorded
  done-or-not is an offline benchmark of 910 computer-use trajectories across three simulated computers for grading completion verifiers.
- [GUI_Reflection_Task_Suite_Benchmark](https://awesomecua.com/zh/resources/url-dea0e09f027df704ca00/) — Date not recorded
  Evaluation split of the GUI Reflection Task Suite, with JSONL files for action verification, action reversal and mistake-informed reattempts on ScreenSpot and ScreenSpot v2.
- [HoloSkill Gym](https://awesomecua.com/zh/resources/github-elenaviewsynthesis-holoskill-gym/) — Date not recorded
  Gym environment and optimization framework for self-evolving CLI and computer-use agent skills.
- [Kane](https://awesomecua.com/zh/resources/github-venkat5599-kane/) — Date not recorded
  Plain-English browser verification harness for AI-built web applications that reports UI failures back to coding agents.
- [OmniWebBench](https://awesomecua.com/zh/resources/github-fanxutherealone-omniwebbench/) — Date not recorded
  OmniWebBench evaluates agentic browsers across end-to-end web navigation, action execution, failure recovery, and evidence verification.

## 数据集

- [GUI_Reflection_SFT_train](https://awesomecua.com/zh/resources/url-528f6fe128b77e9615aa/) — Date not recorded
  Offline supervised fine-tuning data for GUI Reflection, released as JSONL files. Users obtain the corresponding images from the source datasets named in the card.
- [GUI_Reflection_Task_Suite_train](https://awesomecua.com/zh/resources/url-f68939821685c9dcc78c/) — Date not recorded
  Training split of the GUI Reflection Task Suite: JSONL files for action verification, action reversal and mistake-informed reattempt, built on AndroidControl, GUI Odyssey, AMEX, OS-Atlas and Wave UI.

## 模型

- [GUI_Reflection_8b_pretrain](https://awesomecua.com/zh/resources/url-534151cf8b1e1df5bf96/) — Date not recorded
  GUI Reflection checkpoint from the GUI pre-training stage, trained on grounding, captioning, OCR and VQA data plus reflection-task data, before the offline SFT stage.
- [GUI_Reflection_8b_SFT](https://awesomecua.com/zh/resources/url-e2c687595af929b4332a/) — Date not recorded
  Final GUI Reflection agent checkpoint, built on InternVL, that predicts mobile GUI actions from a screenshot and task goal after training on reflection and error-correction data.
- [InfiGUI-R1 3B](https://awesomecua.com/zh/resources/url-35b9879a351cc3b3d7d5/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with the Actor2Reasoner procedure to combine interface grounding with planning and recovery reasoning.
- [Northstar-CUA-Fast](https://awesomecua.com/zh/resources/url-52de9679739ad0a50f69/) — Date not recorded
  A 4B-parameter computer-use model trained with GUI reinforcement learning that maps text and screenshots to actions such as clicks, typing, and scrolling.
- [OpenCUA 32B](https://awesomecua.com/zh/resources/url-ad7f176848fd84de64e2/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history with planning and grounded executable actions.
- [OpenCUA 72B](https://awesomecua.com/zh/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [ScreenAgent](https://awesomecua.com/zh/resources/url-92b5cb08491c09243b72/) — Date not recorded
  ScreenAgent-2312 weights in SAT format, a CogAgent-based vision-language model that drives the ScreenAgent environment, issuing mouse and keyboard actions over VNC in plan, act and reflect stages.
- [UI-Voyager](https://awesomecua.com/zh/resources/url-e2ddf502803f46085aca/) — Date not recorded
  A released mobile GUI agent checkpoint fine-tuned from Qwen3-VL-4B-Instruct to operate device interfaces, with AndroidWorld evaluation instructions.

## 工程与产业

- [AdaGround](https://awesomecua.com/zh/resources/github-bcwang-sjtu-adaground/) — Date not recorded
  A training-free GUI grounding framework that adjusts screenshot zoom to target size and checks proposed clicks before accepting or revising them.
- [Agent Q](https://awesomecua.com/zh/resources/github-sentient-engineering-agent-q/) — Date not recorded
  Agent Q combines Monte Carlo Tree Search, AI self-critique, and Direct Preference Optimization for autonomous web navigation.
- [Agent-R](https://awesomecua.com/zh/resources/github-bytedance-seed-agent-r/) — Date not recorded
  Trajectory collection and revision utilities that use tree search and model-guided critique to train agents to recover from mistakes, including WebShop tasks.
- [Agentic Android](https://awesomecua.com/zh/resources/github-xdope7137-agentic-android/) — Date not recorded
  LLM-powered Android agent over ADB that reads the screen, executes tap/swipe/type actions, and verifies outcomes at each step.
- [AgenticX-GUIAgent](https://awesomecua.com/zh/resources/github-demondamon-agenticx-guiagent/) — Date not recorded
  AgenticX-GUIAgent is a multi-agent Android GUI automation system with coordinated manager, executor, reflector, and notetaker roles.
- [AgentVision](https://awesomecua.com/zh/resources/github-amitpatole-agent-vision/) — Date not recorded
  A visual review tool for AI agents that renders interfaces and reports layout, contrast, text, and image issues. Agents can use its findings to revise and check their output again.
- [Anchor-Inference Daedalus](https://awesomecua.com/zh/resources/github-anchor-inference-daedalus/) — Date not recorded
  Self-developing personal AI agent with its own desktop app, persistent memory, and computer-use tools.
- [AndroidGen](https://awesomecua.com/zh/resources/github-thudm-androidgen/) — Date not recorded
  AndroidGen operates Android tasks using retrieved examples, plan updates, and action checks. Its repository includes agent code and AndroidWorld evaluation scripts.
- [Attest](https://awesomecua.com/zh/resources/github-cyrus580529-attest/) — Date not recorded
  Self-verifying web agent core where the model proposes candidate actions and the harness validates real DOM state transitions.
- [AURA (Agent-User Remote Automation)](https://awesomecua.com/zh/resources/github-lvusyy-aura/) — Date not recorded
  Closed-loop screenshot-click-verify remote automation framework over MCP for desktop and mobile devices.
- [AutoBot](https://awesomecua.com/zh/resources/github-demeyer1-autobot/) — Date not recorded
  AutoBot is a self-improving agent harness for ChatGPT and Codex on macOS featuring persistent on-disk memory and browser evaluation.
- [AutoManual](https://awesomecua.com/zh/resources/github-minghchen-automanual/) — Date not recorded
  AutoManual enables LLM agents to construct and iteratively refine structured instruction manuals through online environmental interaction.
- [Autonomous Evaluation and Refinement of Digital Agents](https://awesomecua.com/zh/resources/github-berkeley-nlp-agent-eval-refine/) — Date not recorded
  Provides VLM evaluator and policy-refinement code for autonomous evaluation and filtered behavioral cloning on WebArena and AndroidInTheWild.
- [BLAXCY](https://awesomecua.com/zh/resources/github-alex3430143-blaxcyds/) — Date not recorded
  BLAXCY is a policy-gated, self-verifying Linux desktop computer-use agent with action confirmation and state verification.
- [BLAXIN](https://awesomecua.com/zh/resources/github-tasinxxx-blaxin/) — Date not recorded
  Open-source AI desktop agent for Linux that plans, executes, and verifies GUI and shell workflows.
- [Browser Reliability Runtime](https://awesomecua.com/zh/resources/github-oosuhada-browser-reliability-runtime/) — Date not recorded
  Multimodal browser reliability runtime for failure diagnosis, policy-aware recovery, and action verification.
- [ChangeShield](https://awesomecua.com/zh/resources/github-kxvya18-chnage-shield/) — Date not recorded
  Self-repairing browser automation prototype that detects and adapts to third-party UI selector drift.
- [Claude Blender](https://awesomecua.com/zh/resources/github-minihellboy-claude-blender/) — Date not recorded
  An MCP server and Blender add-on that let an AI assistant control scenes through tools, inspect screenshots and renders, and revise work using visual feedback.
- [CompBuddy](https://awesomecua.com/zh/resources/github-lewiswlker-compbuddy/) — Date not recorded
  CompBuddy is a background macOS computer-use agent that observes target windows and dispatches Accessibility and CGEvent actions without stealing focus.
- [Computer Use Studio Pro](https://awesomecua.com/zh/resources/github-666xiaoniuzi-computer-use-skill/) — Date not recorded
  Cross-agent skill for low-latency, verified desktop, browser, and window control.
- [DSH Mobile GUI Agent](https://awesomecua.com/zh/resources/github-kunjinkao-os-dsh-mobile-gui-agent/) — Date not recorded
  Android Mobile GUI Agent plugin for DeepSeek Harness featuring ADB actuation, iterative screen verification, and error recovery.
- [dsh-desktop-automation](https://awesomecua.com/zh/resources/github-junkrat9527-dsh-desktop-automation/) — Date not recorded
  macOS desktop automation plugin for DeepSeek Harness with a closed-loop screenshot-locate-click-verify pipeline.
- [dsh-live-loop](https://awesomecua.com/zh/resources/github-powerrrrrrrr-dsh-live-loop/) — Date not recorded
  Frontend runtime verification plugin for DeepSeek Harness that detects, launches, previews, and tests web apps in a live browser.
- [dsh-OpenLiulan (开放浏览)](https://awesomecua.com/zh/resources/github-haodongzhang022-hue-openliulan/) — Date not recorded
  Self-healing browser control framework for DeepSeek Harness featuring semantic page perception and automated fault recovery.
- [dsh-preview](https://awesomecua.com/zh/resources/github-viger1-dsh-preview/) — Date not recorded
  Self-verification browser preview loop for DeepSeek Harness agents to inspect and validate live frontend changes.
- [ENVISIONS](https://awesomecua.com/zh/resources/github-xufangzhi-envisions/) — Date not recorded
  ENVISIONS is an environment-guided neural-symbolic self-training framework for language agents across symbolic reasoning and WebShop tasks.
- [ENVS (Environment-Native Verified Search)](https://awesomecua.com/zh/resources/github-artysicistz-envs/) — Date not recorded
  ENVS is a post-training and verified tree-search pipeline for long-horizon GUI agents operating in live desktop and web environments.
- [ExACT](https://awesomecua.com/zh/resources/github-microsoft-exact/) — Date not recorded
  ExACT supplies a web agent that uses reflective tree search to explore and assess interface states, plus scripts for running and evaluating tasks in VisualWebArena.
- [GenericAgent](https://awesomecua.com/zh/resources/github-lsdefine-genericagent/) — Date not recorded
  GenericAgent is a minimal self-evolving agent framework that synthesizes reusable skills for browser, OS, and ADB mobile control.
- [Genie](https://awesomecua.com/zh/resources/github-vimalmathew26-genie/) — Date not recorded
  Genie is an autonomous Linux desktop agent with 3-tier UI resolution across AT-SPI accessibility trees, Chrome CDP, and VLM vision.
- [GUI Reflection](https://awesomecua.com/zh/resources/github-penghao-wu-gui-reflection/) — Date not recorded
  GUI Reflection provides agent code that predicts GUI actions from a screen image and task goal, alongside scripts for evaluation and supervised training.
- [Hachifish](https://awesomecua.com/zh/resources/github-momo-null-hachifish/) — Date not recorded
  Hachifish is an on-device Android GUI agent that executes natural-language tasks via the native AccessibilityService with pre-completion checks.
- [HarvestNet](https://awesomecua.com/zh/resources/github-lethe044-harvestnet/) — Date not recorded
  Self-healing web extraction and browser automation framework for .NET.
- [Hermes Agent](https://awesomecua.com/zh/resources/github-nousresearch-hermes-agent/) — Date not recorded
  Hermes Agent is a self-improving autonomous agent by Nous Research with procedural skill synthesis, browser control, and multi-platform sandboxes.
- [Hosp2MES-Agent](https://awesomecua.com/zh/resources/github-ctrl-cv-master-hosp2mes-agent-public/) — Date not recorded
  Hosp2MES-Agent is a long-horizon browser GUI agent for executing multi-page Manufacturing Execution System (MES) workflows with state verification.
- [Hoverclick](https://awesomecua.com/zh/resources/github-neilyysun-ui-hoverclick/) — Date not recorded
  Hoverclick introduces test-time cursor hover verification and visual attention guidance before committing GUI click actions.
- [iOS Agent Harness](https://awesomecua.com/zh/resources/github-a178960320-ios-agent-harness/) — Date not recorded
  iOS Agent Harness runs a Manager-Executor-Reflector GUI agent loop on iPhones to automate cross-app tasks from natural language.
- [JARVIS-1](https://awesomecua.com/zh/resources/github-craftjarvis-jarvis-1/) — Date not recorded
  JARVIS-1 is an open-world multimodal Minecraft agent with episodic multimodal memory and goal-conditioned keyboard/mouse control.
- [Jcua (Jev Computer Use Agent)](https://awesomecua.com/zh/resources/github-1deat0r-jcua/) — Date not recorded
  Jcua is a cross-platform computer-use agent powered by Jev decision models across Linux, Windows, and macOS desktops.
- [Kryptic](https://awesomecua.com/zh/resources/github-adnqcr7-code-kryptic/) — Date not recorded
  Local-first AI engineering and browser-control agent runtime with bounded execution, verification, and self-repair.
- [Language Agent Tree Search (LATS)](https://awesomecua.com/zh/resources/github-lapisrocks-languageagenttreesearch/) — Date not recorded
  Language Agent Tree Search (LATS) unifies LLM reasoning, acting, and Monte Carlo Tree Search with self-reflection on WebShop and programming tasks.
- [LGWM (Latent GUI World Model)](https://awesomecua.com/zh/resources/github-jiamingzhang94-lgwm/) — Date not recorded
  LGWM is an action-conditioned latent GUI world model that predicts next-state representations to verify GUI agent transitions.
- [llm-browser-agent](https://awesomecua.com/zh/resources/github-justifysiddh-llm-browser-agent/) — Date not recorded
  Self-healing browser automation framework that replaces brittle CSS selectors with LLM-guided semantic element resolution.
- [LongHorizon-Harness](https://awesomecua.com/zh/resources/github-amap-ml-longhorizon-harness/) — Date not recorded
  LongHorizon-Harness wraps desktop and CLI agents in a persistent plan-act-verify-recover loop for multi-hour autonomous computer-use workflows.
- [LongHorizonUI](https://awesomecua.com/zh/resources/github-kane2kang-longhorizonui/) — Date not recorded
  Code for the LongHorizonUI Android agent: OCR plus OmniParser icon detection yields numbered element boxes for an LLM, and failed taps fall back from element index to relative and absolute points with rollback.
- [Lynx Agent](https://awesomecua.com/zh/resources/github-wangjiang314-lynx-agent/) — Date not recorded
  Lynx Agent is a completion-first Android phone-use agent with evidence-based state verification, recovery, and safety checks.
- [MAI](https://awesomecua.com/zh/resources/github-fluxaster-mai/) — Date not recorded
  MAI combines MaaFramework with multimodal LLMs in a Planner-Executor-Verifier loop for game and application GUI automation.
- [MCP for Blender](https://awesomecua.com/zh/resources/github-ahujasid-blender-mcp/) — Date not recorded
  MCP for Blender connects AI clients to Blender through an addon and MCP server for scene edits, Python commands and visual verification using views and renders.
- [MobA](https://awesomecua.com/zh/resources/github-opendfm-moba/) — Date not recorded
  An Android agent that combines global task planning and memory with a local action executor, using reflection to revise mobile interaction steps.
- [Mobile-Agent-E code component](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-mobile-agent-e/) — Date not recorded
  Android automation component with hierarchical planning, reflection and persistent tips/shortcuts learned across task sequences.
- [MobilePilot Runtime](https://awesomecua.com/zh/resources/github-qizhanggu-mobilepilot-runtime/) — Date not recorded
  MobilePilot is an auditable Android GUI agent runtime with structured action verification, on-demand UI trees, and bounded error recovery.
- [Narada Code and OperatorMini](https://awesomecua.com/zh/resources/url-fd28110220935a0fae26/) — Date not recorded
  Narada Code develops and tests computer-use workflows, then revises them after failures. OperatorMini executes the instructions for repeatable web and enterprise tasks.
- [NORTHTEK Ghost](https://awesomecua.com/zh/resources/github-northtekdevs-ghost/) — Date not recorded
  Provides verified desktop control for AI agents on Windows and Linux across native GUI applications lacking APIs.
- [Open Frame](https://awesomecua.com/zh/resources/github-off-camber-open-frame/) — Date not recorded
  Deterministic desktop automation engine for AI agents implementing a capture-recognize-act-verify loop.
- [OpenAmer Agent](https://awesomecua.com/zh/resources/github-openamer-openamer/) — Date not recorded
  Self-hosted, self-improving AI desktop agent for Windows with native in-process system and UI tools.
- [OpenVINO Autonomous GUI Agent](https://awesomecua.com/zh/resources/github-shehrozkashif-openvino-autonomous-gui-agent/) — Date not recorded
  Fully local desktop GUI agent running five INT4 OpenVINO models for screen perception, planning, action execution, and step verification.
- [Orquestrador de Features](https://awesomecua.com/zh/resources/github-gustavo-em-orchestrator-features/) — Date not recorded
  Multi-agent loop that plans React Native mobile features, writes code, drives the simulator UI, and verifies visual results.
- [OS-Symphony](https://awesomecua.com/zh/resources/github-os-copilot-os-symphony/) — Date not recorded
  OS-Symphony is a holistic computer-use agent framework combining a Reflection-Memory Agent, versatile toolset, and multimodal searcher.
- [Pactora](https://awesomecua.com/zh/resources/github-mrnetwork0001-pactora/) — Date not recorded
  WebMCP marketplace and verification harness featuring a closed-loop self-healing browser verifier.
- [PC-Agent (X-PLUG component)](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-pc-agent/) — Date not recorded
  Multi-agent desktop automation component for Windows and macOS, combining active perception, task decomposition and reflection for workflows spanning applications.
- [PlayCoder](https://awesomecua.com/zh/resources/github-tencent-playcoder/) — Date not recorded
  PlayCoder generates and refines GUI application code using interactive tests. Its PlayTester observes application screenshots, performs interface actions and feeds results into repair.
- [Q-Reflector](https://awesomecua.com/zh/resources/github-pockyitachi-q-reflector/) — Date not recorded
  Q-Reflector trains an 8B vision-language verifier with generated pre/post-action conditions to detect and correct GUI action errors.
- [Q-Verifier / Q-Reflector](https://awesomecua.com/zh/resources/github-pockyitachi-q-verifier/) — Date not recorded
  Q-Reflector checks a GUI agent's action against before-and-after screenshots and task context, with training and online evaluation code.
- [QAgent](https://awesomecua.com/zh/resources/github-rishabhcli-qagent/) — Date not recorded
  QAgent is a local-first web QA and repair agent with an Electron desktop UI, CLI, MCP server, and isolated Git worktree execution.
- [RCI Agent](https://awesomecua.com/zh/resources/github-posgnu-rci-agent/) — Date not recorded
  A MiniWoB++ agent that uses explicit and implicit recursive criticism-and-improvement prompts to refine action plans and ground actions to browser state.
- [Roubao](https://awesomecua.com/zh/resources/github-turbo1123-roubao/) — Date not recorded
  On-device Android phone agent in Kotlin that captures screenshots and taps, swipes and types through Shizuku without a PC, running a planner, executor and reflector loop on any OpenAI-compatible VLM, GUI-Owl or MAI-UI.
- [RSIGame](https://awesomecua.com/zh/resources/github-wenyiwu0111-rsigame/) — Date not recorded
  An agentic game-development system that plays generated games, uses screenshots and run evidence to guide revisions, and replays builds to check the changes.
- [SEAgent](https://awesomecua.com/zh/resources/github-sunzey-seagent/) — Date not recorded
  SEAgent enables computer-use agents to self-evolve in unfamiliar software environments using a World State Model and curriculum task generator.
- [Self-Healing Browser Agent](https://awesomecua.com/zh/resources/github-25andresbernal-self-healing-browser-agent/) — Date not recorded
  Combines Claude planning with Playwright execution and ranked selector fallback to self-heal broken web automation steps.
- [Self-MAP](https://awesomecua.com/zh/resources/github-magicgh-self-map/) — Date not recorded
  A conversational web-agent implementation with candidate ranking and memory-assisted action planning, including optional memory simplification, refinement and self-reflection modules.
- [Seven-Layer Web Agent & Benchmark](https://awesomecua.com/zh/resources/github-xyyojl-web-agent/) — Date not recorded
  Seven-layer LLM browser agent architecture paired with a 45-task hierarchical benchmark and reproducible execution artifacts.
- [SOLO](https://awesomecua.com/zh/resources/github-wzq975-solo/) — Date not recorded
  SOLO performs single-rollout test-time adaptation for GUI agents using online self-supervised feedback during deployment.
- [StatePilot](https://awesomecua.com/zh/resources/github-newsbruno-statepilot/) — Date not recorded
  StatePilot is a predictable browser runtime for AI agents with state validation, episodic memory, error recovery, and MCP tools.
- [Svate](https://awesomecua.com/zh/resources/github-jieao-re-svate/) — Date not recorded
  Svate is an on-device Android UI automation agent combining Accessibility trees, screenshots, pre-action safety checks, and recovery.
- [Tencent AI LAB - Self-Improving Agent](https://awesomecua.com/zh/resources/github-tencent-selfevolvingagent/) — Date not recorded
  A research code collection for web-agent self-improvement, including WebEvolver's world-model approach and WebCoT's reconstructed reasoning trajectories.
- [Third Eye](https://awesomecua.com/zh/resources/github-slastrina-third-eye/) — Date not recorded
  Local macOS computer-use agent with screen perception and verified action execution.
- [Tongyi UI Agent API](https://awesomecua.com/zh/resources/url-ce0af37931cd5aa20233/) — Date not recorded
  Alibaba Cloud Model Studio API that returns the next GUI action with its reasoning for a screenshot and task, with a mobile pipeline and a PC pipeline using planner, worker, reflector and memory agents.
- [Tsaagan](https://awesomecua.com/zh/resources/github-michaelolmos-tsaagan/) — Date not recorded
  Tsaagan is a verify-first browser control framework for AI agents that proves every click and form action succeeded before advancing.
- [Turan AI](https://awesomecua.com/zh/resources/github-aykutkrm67-turan-ai/) — Date not recorded
  Local multi-brain Windows AI desktop agent with visible computer control and verified action execution.
- [UI-Voyager](https://awesomecua.com/zh/resources/github-ui-voyager-ui-voyager/) — Date not recorded
  UI-Voyager is a self-evolving mobile GUI agent framework that learns from failed execution trajectories via group-relative reflection.
- [V-Droid](https://awesomecua.com/zh/resources/github-v-droid-agent-v-droid/) — Date not recorded
  V-Droid pairs a mobile GUI actor with a generative verifier that scores candidate actions before execution on Android devices.
- [VLAA-GUI](https://awesomecua.com/zh/resources/github-ucsc-vlaa-vlaa-gui/) — Date not recorded
  VLAA-GUI provides a modular GUI automation framework that teaches agents when to stop, recover from errors, and search alternatives.
- [WebEvolver code component](https://awesomecua.com/zh/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
- [Zhaozuo (照做)](https://awesomecua.com/zh/resources/github-dongsheng123132-zhaozuo/) — Date not recorded
  Demonstration-driven Windows desktop automation framework compatible with the ActionParity protocol for third-party GUI software.
