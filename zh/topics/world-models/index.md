# 世界模型

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/world-models/records.jsonl

## 论文与综述

- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.github.io/resources/arxiv-2610-24372/) — 2026-10-17
  Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.
- [Latent World Action Model for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-14228/) — 2026-10-09
  Replaces future-screenshot generation with a shared latent representation for GUI action selection and action-conditioned transition prediction. An action-aware contrastive objective encourages the transition representation to retain discriminative action-induced changes.
- [Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents](https://awesomecua.github.io/resources/arxiv-2610-11942/) — 2026-10-08
  Presents LGWM, a decoder-free GUI world model that predicts the next screen representation from an action and compares it with the observed state to verify transitions. Its paired diagnostic separates legitimate and hijacked transitions that lead to the same credential screen.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.github.io/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [Imagine to Act: High-Fidelity Data Synthesis via Image Editing World Model for Scalable GUI Agent Training](https://awesomecua.github.io/resources/arxiv-2610-05861/) — 2026-10-05
  Introduces Infinite-Dreamer, which learns action-conditioned screenshot editing from structured descriptions of GUI changes and uses it to synthesize robustness examples and multi-step trajectories. The synthetic data trains a mobile GUI agent evaluated on AndroidWorld, MobileWorld, and AndroidControl-Curated.
- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://awesomecua.github.io/resources/arxiv-2610-01215/) — 2026-10-01
  Introduces AutoGUIWorld, which combines task planning and image editing to synthesize action-grounded GUI trajectories without running the depicted software. It filters generated transitions and tests whether training on them improves agents operating real desktop and scientific applications.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.github.io/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.github.io/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [Discriminative World Models for Web Agents](https://awesomecua.github.io/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments](https://awesomecua.github.io/resources/arxiv-2609-00048/) — 2026-08-30
  Introduces GUI-CC, a benchmark for assessing GUI world models as multi-step agent environments. Separate reference-action and agent-loop tracks test whether generated screens preserve context, plausible transitions, and task progress throughout interaction.
- [WM-R1: Training GUI Agents to Reason and leverage World Models with Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2608-27508/) — 2026-08-27
  Uses learned world models for mobile-agent training rollouts and for reasoning about the consequences of candidate GUI actions.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [Scaling GUI Agents with Visual State Transitions](https://awesomecua.github.io/resources/arxiv-2607-24112/) — 2026-07-27
  Introduces State Transition Pretraining, which jointly learns to infer actions from GUI changes and predict future states from current screens and actions. Subsequent instruction-trajectory fine-tuning tests whether these representations transfer to desktop and mobile agent tasks.
- [EvoGUI: An Evolution-Aware Benchmark for GUI State-Transition Understanding](https://awesomecua.github.io/resources/arxiv-2607-17050/) — 2026-07-19
  Introduces EvoGUI, which derives temporal ordering, inverse action/value prediction, and successor-discrimination probes from recorded GUI trajectories. Its web-derived benchmark isolates transition understanding from the other abilities involved in end-to-end task success.
- [SeerGuard: A Safety Framework for Mobile GUI Agents via World Model Prediction](https://awesomecua.github.io/resources/arxiv-2607-15550/) — 2026-07-17
  Uses instruction screening and a safety-augmented world model to assess likely consequences of mobile GUI actions before execution.
- [How Mobile World Model Guides GUI Agents?](https://awesomecua.github.io/resources/arxiv-2605-10347/) — 2026-05-11
  Compares mobile world models that predict state changes as delta text, full text, images or renderable code. Downstream Android benchmarks examine synthetic training trajectories and test-time guidance, including limits of post-action reflection.
- [Computer-Using World Model](https://awesomecua.github.io/resources/arxiv-2602-17365/) — 2026-02-19
  Presents a desktop world model that predicts textual UI changes before synthesizing the next screenshot. It learns from Microsoft Office transitions and is evaluated by letting a frozen agent compare simulated actions before execution.
- [WebWorld: A Large-Scale World Model for Web Agent Training](https://awesomecua.github.io/resources/arxiv-2602-14721/) — 2026-02-16
  Introduces WebWorld, an open-web simulator trained on interaction trajectories for generating agent training data and testing candidate actions. WebWorld-Bench evaluates simulated transitions, alongside downstream web-agent training experiments.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.github.io/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.github.io/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.github.io/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.github.io/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [Generative Visual Code Mobile World Models](https://awesomecua.github.io/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.github.io/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [MobileDreamer: Generative Sketch World Model for GUI Agent](https://awesomecua.github.io/resources/arxiv-2601-04035/) — 2026-01-07
  MobileDreamer predicts post-action GUI states as task-relevant textual sketches with an order-invariant learning objective. Agents use these predictions for lookahead action selection, evaluated on AndroidWorld.
- [MobileWorldBench: Towards Semantic World Modeling For Mobile Agents](https://awesomecua.github.io/resources/arxiv-2512-14014/) — 2025-12-16
  Evaluates semantic world models for mobile interfaces and studies natural-language state transitions as a tool for agent planning.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.github.io/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.github.io/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [ScreenExplorer: Training a Vision-Language Model for Diverse Exploration in Open GUI World](https://awesomecua.github.io/resources/arxiv-2505-19095/) — 2025-05-25
  Trains ScreenExplorer with reinforcement learning in dynamic GUI environments, using a world-model curiosity reward and experience-stream distillation to support sustained exploration.
- [Unlocking Smarter Device Control: Foresighted Planning with a World Model-Driven Code Execution Approach](https://awesomecua.github.io/resources/arxiv-2505-16422/) — 2025-05-22
  FPWC builds and refines a task-oriented world model before planning mobile-device actions. It executes plans as code and evaluates the approach in simulated environments and on real mobile devices.
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.github.io/resources/arxiv-2504-21024/) — 2025-04-23
  WebEvolver trains a co-evolving world model to predict web observations and generate additional agent-training trajectories. The same model supports look-ahead action selection at inference, with evaluation on live web-task benchmarks.
- [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.github.io/resources/arxiv-2504-13936/) — 2025-04-15
  ViMo predicts the next mobile-app screenshot after a candidate action by separately modeling graphics and text. A symbolic placeholder representation preserves layout while a second predictor supplies readable text, enabling visual lookahead for GUI-agent planning.
- [VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model](https://awesomecua.github.io/resources/arxiv-2502-18906/) — 2025-02-26
  Trains GUI agents with a frozen value model learned from offline interactions, guiding action exploration without predicting complete next observations.
- [Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents](https://awesomecua.github.io/resources/arxiv-2411-06559/) — 2024-11-10
  Introduces WebDreamer, which simulates candidate web actions with language-model world models and value estimates before acting.
- [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://awesomecua.github.io/resources/arxiv-2410-13232/) — 2024-10-17
  Uses a learned web world model to predict important state changes and compare candidate actions before executing them.
- [Tell Me What's Next: Textual Foresight for Generic UI Representations](https://awesomecua.github.io/resources/arxiv-2406-07822/) — 2024-06-12
  Textual Foresight learns UI representations by describing the future screen expected after an action on the current interface. The OpenApp dataset supports pretraining and downstream evaluation of representations that connect individual elements with whole-screen changes.

## 数据集

- [AndroidCode](https://awesomecua.github.io/resources/url-cf4d2d45a7314cb16acb/) — Date not recorded
  HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.
- [Dreamer V1 Data](https://awesomecua.github.io/resources/url-eadc6cba9ea46c38dd1d/) — Date not recorded
  Web-world-model training data with prompts, images, action descriptions, and responses, released with the WebDreamer project.
- [WebEvolver SFT data](https://awesomecua.github.io/resources/url-e126bbd9729ebdaf05ab/) — Date not recorded
  Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

## 模型

- [Code2World-8B checkpoint](https://awesomecua.github.io/resources/url-bc3deaf8eeecf569e73b/) — Date not recorded
  Released GUI world-model checkpoint that turns a screenshot and proposed action into HTML for rendering a predicted next screen.
- [Dreamer-7B](https://awesomecua.github.io/resources/url-e3c1a2a2d556e4728953/) — Date not recorded
  WebDreamer model checkpoint that predicts the consequences of web actions from screenshots and textual descriptions.

## 工程与产业

- [WebDreamer](https://awesomecua.github.io/resources/github-osu-nlp-group-webdreamer/) — Date not recorded
  World-model and planning components that simulate web-action outcomes, with linked training data and model checkpoints.
- [WebEvolver code component](https://awesomecua.github.io/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
