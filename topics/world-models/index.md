# World models

Reviewed topic membership; resources can appear in multiple topics.

Full source records: https://awesomecua.com/downloads/topics/world-models/records.jsonl

## Papers & surveys

- [MKD2World: A Typed Spatial MarkDown World Model For Web Agents](https://awesomecua.com/resources/arxiv-2611-06544/) — 2026-11-04
  Introduces MKD2World, a desktop web world model that represents interface elements in Typed Spatial Markdown and predicts post-action states, supported by AtomBlock-WebUI annotations.
- [Computer-Use Agents Gain Little Benefit from a World Model When Conditioned on Tutorials](https://awesomecua.com/resources/arxiv-2611-04073/) — 2026-11-02
  RAG-PolicyJudge selects computer-use actions proposed with task-specific tutorials; the study compares its decisions with and without world-model rollouts.
- [Steering Black-Box Large Language Model Agents with Pitfall Anticipation World Model](https://awesomecua.com/resources/arxiv-2610-29139/) — 2026-10-21
  PAWM predicts likely multi-step pitfalls and selectively guides black-box agents; its evaluations include a web-agent benchmark.
- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.com/resources/arxiv-2610-24372/) — 2026-10-17
  Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.
- [Latent World Action Model for GUI Agents](https://awesomecua.com/resources/arxiv-2610-14228/) — 2026-10-09
  Replaces future-screenshot generation with a shared latent representation for GUI action selection and action-conditioned transition prediction. An action-aware contrastive objective encourages the transition representation to retain discriminative action-induced changes.
- [Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents](https://awesomecua.com/resources/arxiv-2610-11942/) — 2026-10-08
  Presents LGWM, a decoder-free GUI world model that predicts the next screen representation from an action and compares it with the observed state to verify transitions. Its paired diagnostic separates legitimate and hijacked transitions that lead to the same credential screen.
- [AdvSim2Real : Training Web Agents Against Adaptive Prompt Injection in a Web World Model](https://awesomecua.com/resources/arxiv-2610-08773/) — 2026-10-06
  Presents AdvSim2Real, which jointly adapts web-task curricula, prompt-injection adversaries, and agent policies inside a frozen web world model. It evaluates robustness against an unseen adversary and transfer from simulated interaction to a real browser.
- [Imagine to Act: High-Fidelity Data Synthesis via Image Editing World Model for Scalable GUI Agent Training](https://awesomecua.com/resources/arxiv-2610-05861/) — 2026-10-05
  Introduces Infinite-Dreamer, which learns action-conditioned screenshot editing from structured descriptions of GUI changes and uses it to synthesize robustness examples and multi-step trajectories. The synthetic data trains a mobile GUI agent evaluated on AndroidWorld, MobileWorld, and AndroidControl-Curated.
- [How To Train Your World Model: Fine-tuning vs RAG for LM-based World Modeling](https://awesomecua.com/resources/arxiv-2610-02542/) — 2026-10-01
  Compares fine-tuned, retrieval-based and hybrid language-model world models for next-observation prediction and action selection in text environments including WebShop.
- [AutoGUIWorld: Image Generators as Visual World Models for GUI Agent](https://awesomecua.com/resources/arxiv-2610-01215/) — 2026-10-01
  Introduces AutoGUIWorld, which combines task planning and image editing to synthesize action-grounded GUI trajectories without running the depicted software. It filters generated transitions and tests whether training on them improves agents operating real desktop and scientific applications.
- [PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval](https://awesomecua.com/resources/arxiv-2609-36923/) — 2026-09-29
  Presents PrecogUI, which retrieves prior anomaly and success patterns and predicts symbolic UI transitions before choosing actions. It also introduces InterfereBench, generated for evaluating long GUI workflows with disruptive events and recovery requirements.
- [The GUI Is Not the State: Diagnosing State Aliasing in GUI World Models](https://awesomecua.com/resources/arxiv-2609-32679/) — 2026-09-26
  Introduces StateAliasBench to isolate GUI world-model ambiguities in which matching visible screens and actions can lead to different futures. It augments frozen world models with structured state recovered from interaction history and evaluates the effect on prediction and agent execution.
- [Discriminative World Models for Web Agents](https://awesomecua.com/resources/arxiv-2609-02885/) — 2026-09-02
  Trains discriminative web world models to distinguish the true next state from outcomes of alternative actions. Branching web trajectories support training, followed by tests of predicted-state matching, process-reward action ranking and end-to-end WebArena-Lite selection.
- [GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments](https://awesomecua.com/resources/arxiv-2609-00048/) — 2026-08-30
  Introduces GUI-CC, a benchmark for assessing GUI world models as multi-step agent environments. Separate reference-action and agent-loop tracks test whether generated screens preserve context, plausible transitions, and task progress throughout interaction.
- [WM-R1: Training GUI Agents to Reason and leverage World Models with Reinforcement Learning](https://awesomecua.com/resources/arxiv-2608-27508/) — 2026-08-27
  Uses learned world models for mobile-agent training rollouts and for reasoning about the consequences of candidate GUI actions.
- [GameWAM: A World Action Model for Video Games](https://awesomecua.com/resources/arxiv-2608-26200/) — 2026-08-25
  Introduces GameWAM, a model for native game play and GUI control that predicts future visuals and keyboard-mouse actions from synchronized gameplay and GUI trajectories.
- [AppDeltaWorld: Transition-Grounded Delta Code World Model for Mobile GUI Agents](https://awesomecua.com/resources/arxiv-2608-05891/) — 2026-08-06
  AppDeltaWorld predicts executable code updates for the next mobile UI state, using transition-constrained retrieval and rendered visual assets. It evaluates reconstruction fidelity separately from policy training and adaptation using generated environments.
- [Scaling GUI Agents with Visual State Transitions](https://awesomecua.com/resources/arxiv-2607-24112/) — 2026-07-27
  Introduces State Transition Pretraining, which jointly learns to infer actions from GUI changes and predict future states from current screens and actions. Subsequent instruction-trajectory fine-tuning tests whether these representations transfer to desktop and mobile agent tasks.
- [EvoGUI: An Evolution-Aware Benchmark for GUI State-Transition Understanding](https://awesomecua.com/resources/arxiv-2607-17050/) — 2026-07-19
  Introduces EvoGUI, which derives temporal ordering, inverse action/value prediction, and successor-discrimination probes from recorded GUI trajectories. Its web-derived benchmark isolates transition understanding from the other abilities involved in end-to-end task success.
- [SeerGuard: A Safety Framework for Mobile GUI Agents via World Model Prediction](https://awesomecua.com/resources/arxiv-2607-15550/) — 2026-07-17
  Uses instruction screening and a safety-augmented world model to assess likely consequences of mobile GUI actions before execution.
- [MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models](https://awesomecua.com/resources/arxiv-2606-04627/) — 2026-06-03
  Introduces MIRAGE, which trains mobile app agents to reason in compact latent states and anticipate future screenshots, reducing generated tokens during action selection.
- [How Mobile World Model Guides GUI Agents?](https://awesomecua.com/resources/arxiv-2605-10347/) — 2026-05-11
  Compares mobile world models that predict state changes as delta text, full text, images or renderable code. Downstream Android benchmarks examine synthetic training trajectories and test-time guidance, including limits of post-action reflection.
- [Agentic World Modeling: Foundations, Capabilities, Laws, and Beyond](https://awesomecua.com/resources/arxiv-2604-22748/) — 2026-04-24
  Survey of agentic world models that classifies predictive capabilities and governing laws, including the digital setting of web and GUI agents.
- [Computer-Using World Model](https://awesomecua.com/resources/arxiv-2602-17365/) — 2026-02-19
  Presents a desktop world model that predicts textual UI changes before synthesizing the next screenshot. It learns from Microsoft Office transitions and is evaluated by letting a frozen agent compare simulated actions before execution.
- [World-Model-Augmented Web Agents with Action Correction](https://awesomecua.com/resources/arxiv-2602-15384/) — 2026-02-17
  WAC has a web-agent action model consult a world model, simulate action outcomes and use judge feedback to correct actions before execution.
- [WebWorld: A Large-Scale World Model for Web Agent Training](https://awesomecua.com/resources/arxiv-2602-14721/) — 2026-02-16
  Introduces WebWorld, an open-web simulator trained on interaction trajectories for generating agent training data and testing candidate actions. WebWorld-Bench evaluates simulated transitions, alongside downstream web-agent training experiments.
- [UI-Oceanus: Scaling GUI Agents with Synthetic Environmental Dynamics](https://awesomecua.com/resources/arxiv-2604-02345/) — 2026-02-11
  UI-Oceanus converts autonomous GUI exploration and execution feedback into supervision for predicting future interface states. It compares forward and inverse objectives during continual pretraining and examines downstream offline and online navigation as synthetic data scales.
- [Code2World: A GUI World Model via Renderable Code Generation](https://awesomecua.com/resources/arxiv-2602-09856/) — 2026-02-10
  Code2World predicts future GUI screens through renderable code, trained on AndroidCode trajectories with supervised learning and render-aware reinforcement learning. It evaluates visual prediction and downstream AndroidWorld navigation with the learned world model.
- [GUI-GenBench: Evaluating Image Generation Models as Interactive GUI Environments](https://awesomecua.com/resources/arxiv-2602-09007/) — 2026-02-09
  GUI-GenBench tests image-generation models as action-conditioned GUI environments across five suites, including transitions, trajectories and grounding. Its VLM-based GUI-Score separates goal completion, interaction logic, consistency and visual properties.
- [SafePred: A Predictive Guardrail for Computer-Using Agents via World Models](https://awesomecua.com/resources/arxiv-2602-01725/) — 2026-02-02
  SafePred uses world-model risk forecasts to guide action filtering and task replanning. Its desktop and web safety evaluations distinguish policy compliance, task success and success under the specified policy.
- [Generative Visual Code Mobile World Models](https://awesomecua.com/resources/arxiv-2602-01576/) — 2026-02-02
  gWorld predicts future mobile GUI states as renderable web code and supplies an automated pipeline for code-based training data. The study evaluates visual state prediction and how stronger world models affect downstream mobile policies.
- [DynaWeb: Model-Based Reinforcement Learning of Web Agents](https://awesomecua.com/resources/arxiv-2601-22149/) — 2026-01-29
  DynaWeb learns a world model that predicts web-page representations after actions and uses it to generate policy-training rollouts. It interleaves these rollouts with expert trajectories and evaluates the trained web agents on WebArena and WebVoyager.
- [MobileDreamer: Generative Sketch World Model for GUI Agent](https://awesomecua.com/resources/arxiv-2601-04035/) — 2026-01-07
  MobileDreamer predicts post-action GUI states as task-relevant textual sketches with an order-invariant learning objective. Agents use these predictions for lookahead action selection, evaluated on AndroidWorld.
- [MobileWorldBench: Towards Semantic World Modeling For Mobile Agents](https://awesomecua.com/resources/arxiv-2512-14014/) — 2025-12-16
  Evaluates semantic world models for mobile interfaces and studies natural-language state transitions as a tool for agent planning.
- [Scaling Agent Learning via Experience Synthesis](https://awesomecua.com/resources/arxiv-2511-03773/) — 2025-11-05
  DreamGym synthesizes agent experiences with a reasoning-based environment model for online RL; its evaluations include the web task setting WebArena.
- [WebATLAS: An LLM Agent with Experience-Driven Memory and Action Simulation](https://awesomecua.com/resources/arxiv-2510-22732/) — 2025-10-26
  WebATLAS is a web agent that stores interaction outcomes and simulates candidate actions before acting, using past experience to plan navigation on unseen websites.
- [LLMs as Scalable, General-Purpose Simulators For Evolving Digital Agent Training](https://awesomecua.com/resources/arxiv-2510-14969/) — 2025-10-16
  Introduces UI-Simulator, which generates UI states and transitions for agent-training trajectories, and UI-Simulator-Grow, which prioritizes tasks and trajectory variants.
- [R-WoM: Retrieval-augmented World Model For Computer-use Agents](https://awesomecua.com/resources/arxiv-2510-11892/) — 2025-10-13
  R-WoM evaluates how well world models predict nearby GUI states, align complete procedures, and recognize milestone transitions. It retrieves external tutorials to guide simulated future interactions, with experiments on subsets of OSWorld and WebArena.
- [UISim: An Interactive Image-Based UI Simulator for Dynamic Mobile Environments](https://awesomecua.com/resources/arxiv-2509-21733/) — 2025-09-26
  Introduces UISim, an image-based mobile UI simulator that predicts the next screen layout after an action and renders the resulting screen for testing and data generation.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.com/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [General Agentic Planning Through Simulative Reasoning with World Models](https://awesomecua.com/resources/arxiv-2507-23773/) — 2025-07-31
  Introduces SiRA, an agent architecture that uses a language-based world model to simulate action outcomes for planning in web-browser tasks.
- [WebSynthesis: World-Model-Guided MCTS for Efficient WebUI-Trajectory Synthesis](https://awesomecua.com/resources/arxiv-2507-04370/) — 2025-07-06
  Introduces WebSynthesis, which uses a learned web world model and tree-based planning to synthesize interaction trajectories for training web agents.
- [ScreenExplorer: Training a Vision-Language Model for Diverse Exploration in Open GUI World](https://awesomecua.com/resources/arxiv-2505-19095/) — 2025-05-25
  Trains ScreenExplorer with reinforcement learning in dynamic GUI environments, using a world-model curiosity reward and experience-stream distillation to support sustained exploration.
- [Unlocking Smarter Device Control: Foresighted Planning with a World Model-Driven Code Execution Approach](https://awesomecua.com/resources/arxiv-2505-16422/) — 2025-05-22
  FPWC builds and refines a task-oriented world model before planning mobile-device actions. It executes plans as code and evaluates the approach in simulated environments and on real mobile devices.
- [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.com/resources/arxiv-2504-21024/) — 2025-04-23
  WebEvolver trains a co-evolving world model to predict web observations and generate additional agent-training trajectories. The same model supports look-ahead action selection at inference, with evaluation on live web-task benchmarks.
- [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.com/resources/arxiv-2504-13936/) — 2025-04-15
  ViMo predicts the next mobile-app screenshot after a candidate action by separately modeling graphics and text. A symbolic placeholder representation preserves layout while a second predictor supplies readable text, enabling visual lookahead for GUI-agent planning.
- [Language Models can Self-Improve at State-Value Estimation for Better Search](https://awesomecua.com/resources/arxiv-2503-02878/) — 2025-03-04
  Introduces Self-Taught Lookahead (STL), which trains a value model to predict actions and resulting states for more efficient search, with evaluation on web-agent tasks.
- [VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model](https://awesomecua.com/resources/arxiv-2502-18906/) — 2025-02-26
  Trains GUI agents with a frozen value model learned from offline interactions, guiding action exploration without predicting complete next observations.
- [Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents](https://awesomecua.com/resources/arxiv-2411-06559/) — 2024-11-10
  Introduces WebDreamer, which simulates candidate web actions with language-model world models and value estimates before acting.
- [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://awesomecua.com/resources/arxiv-2410-13232/) — 2024-10-17
  Uses a learned web world model to predict important state changes and compare candidate actions before executing them.
- [Tell Me What's Next: Textual Foresight for Generic UI Representations](https://awesomecua.com/resources/arxiv-2406-07822/) — 2024-06-12
  Textual Foresight learns UI representations by describing the future screen expected after an action on the current interface. The OpenApp dataset supports pretraining and downstream evaluation of representations that connect individual elements with whole-screen changes.
- [MineDreamer: Learning to Follow Instructions via Chain-of-Imagination for Simulated-World Control](https://awesomecua.com/resources/arxiv-2403-12037/) — 2024-03-18
  Introduces MineDreamer, a Minecraft agent that imagines stages of an instruction and turns them into keyboard-and-mouse actions in a simulated world.

## Benchmarks

- [MWMBench](https://awesomecua.com/resources/url-a3ea3a844de7dd8a6792/) — Date not recorded
  MWMBench evaluates mobile GUI world models by asking them to predict the next screen from a screenshot and coordinate action.

## Datasets

- [AndroidCode](https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/) — Date not recorded
  HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.
- [Dreamer V1 Data](https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/) — Date not recorded
  Web-world-model training data with prompts, images, action descriptions, and responses, released with the WebDreamer project.
- [LGWM data and RSWT-Bench](https://awesomecua.com/resources/url-fde41ce8459b7d3f647f/) — Date not recorded
  A dataset of GUI screen transitions for training a world model, released with RSWT-Bench to evaluate whether observed screens follow the intended actions.
- [Mobile-GUI-Worldmodel-SFT](https://awesomecua.com/resources/url-e041226738f8ea43a878/) — Date not recorded
  A mobile GUI dataset for world-model training and evaluation. Its trajectory archives pair screenshots with page-state text and action-formatted training examples.
- [WebEvolver SFT data](https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/) — Date not recorded
  Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

## Models

- [Code2World-8B checkpoint](https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/) — Date not recorded
  Released GUI world-model checkpoint that turns a screenshot and proposed action into HTML for rendering a predicted next screen.
- [Dreamer-7B](https://awesomecua.com/resources/url-e3c1a2a2d556e4728953/) — Date not recorded
  WebDreamer model checkpoint that predicts the consequences of web actions from screenshots and textual descriptions.
- [Dreamer-7B-Classifieds](https://awesomecua.com/resources/url-b7ccf7acb2e9d8a11853/) — Date not recorded
  Dreamer-7B-Classifieds is a WebDreamer checkpoint for the Classifieds web domain. It supports planning by simulating the results of candidate actions.
- [Dreamer-7B-Reddit](https://awesomecua.com/resources/url-dfa8047521d1f3b3aa54/) — Date not recorded
  Dreamer-7B-Reddit is a Reddit-domain checkpoint for WebDreamer. It predicts the screen state after a proposed action to support web-agent planning.
- [Dreamer-7B-Shopping](https://awesomecua.com/resources/url-3173abbb295c74d0e9ec/) — Date not recorded
  A shopping-domain Dreamer-7B checkpoint for WebDreamer, which uses screenshot-conditioned predictions of candidate web actions to support agent planning.
- [gWorld (GuiWorld)](https://awesomecua.com/resources/github-trillion-labs-gworld/) — Date not recorded
  gWorld is an open-weight 8B/32B mobile GUI world model that predicts next-step screen states via renderable web code generation.
- [gWorld-32B](https://awesomecua.com/resources/url-e44096836ef47bc66d9c/) — Date not recorded
  A released mobile GUI world model that takes a screenshot and an action, then predicts the next interface as renderable HTML. The card identifies Qwen3-VL-32B as its base.
- [gWorld-8B](https://awesomecua.com/resources/url-78802d1a2fce25f20f85/) — Date not recorded
  gWorld-8B is a released mobile GUI world model that predicts the screen after an action by generating renderable HTML from the current screenshot and action.
- [jiamingzz/lgwm](https://awesomecua.com/resources/url-512cd7335068b2c17859/) — Date not recorded
  Released weights for a GUI world model that predicts a screen representation after an action and checks the observed transition, with a separate harm scoring head.
- [Textual Foresight](https://awesomecua.com/resources/github-aburns4-textualforesight/) — Date not recorded
  Textual Foresight pretrains UI representations by predicting textual descriptions of future screen states resulting from mobile UI actions.

## Engineering & industry

- [AutoCoA](https://awesomecua.com/resources/github-adam-bjtu-autocoa/) — Date not recorded
  AutoCoA internalizes Chain-of-Action generation into reasoning models via step-level SFT, reinforcement learning, and simulated tool world models.
- [Code2World](https://awesomecua.com/resources/github-amap-ml-code2world/) — Date not recorded
  Code2World provides code for predicting the next Android GUI screen from a screenshot and proposed action through renderable code, with an AndroidWorld agent integration.
- [GUI-Trajectory-Virtual](https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/) — Date not recorded
  Synthesizes Android agent trajectories without a device: an image model behind a chat-completions API draws each next screen from the previous screenshot and the action chosen by a Mobile-Agent-v3-style agent.
- [LGWM (Latent GUI World Model)](https://awesomecua.com/resources/github-jiamingzhang94-lgwm/) — Date not recorded
  LGWM is an action-conditioned latent GUI world model that predicts next-state representations to verify GUI agent transitions.
- [nanoAWM (Agent World Model Lab)](https://awesomecua.com/resources/github-jlov7-nanoawm/) — Date not recorded
  nanoAWM is an inspectable Agent World Model laboratory for simulating action consequences in long-horizon tool and computer-use agents.
- [Octopus](https://awesomecua.com/resources/github-dongyh20-octopus/) — Date not recorded
  Octopus is a vision-language programmer agent trained with environmental feedback to generate executable control code in GTA and Gibson worlds.
- [RLVR-World](https://awesomecua.com/resources/github-thuml-rlvr-world/) — Date not recorded
  RLVR-World trains world models with verifiable reinforcement learning to predict state transitions for web and game agents.
- [SEAgent](https://awesomecua.com/resources/github-sunzey-seagent/) — Date not recorded
  SEAgent enables computer-use agents to self-evolve in unfamiliar software environments using a World State Model and curriculum task generator.
- [Tencent AI LAB - Self-Improving Agent](https://awesomecua.com/resources/github-tencent-selfevolvingagent/) — Date not recorded
  A research code collection for web-agent self-improvement, including WebEvolver's world-model approach and WebCoT's reconstructed reasoning trajectories.
- [ViMo code](https://awesomecua.com/resources/github-ai-agents-2030-vimo/) — Date not recorded
  Code for the ViMo GUI world model: Gemini-based next-screen text prediction, AITW and AndroidControl data processing, InstructPix2Pix-style graphic inference, and an AndroidWorld agent that consults it.
- [WebDreamer](https://awesomecua.com/resources/github-osu-nlp-group-webdreamer/) — Date not recorded
  World-model and planning components that simulate web-action outcomes, with linked training data and model checkpoints.
- [WebEvolver code component](https://awesomecua.com/resources/component-tencent-selfevolvingagent-webevolver/) — Date not recorded
  Component for web-agent trajectory collection, supervised-data preparation and world-model-based trajectory synthesis.
- [WMA Web Agent](https://awesomecua.com/resources/github-kyle8581-wma-agents/) — Date not recorded
  A web agent uses a learned world model to predict consequential page changes before choosing an action. The repository includes trajectory processing and inference code.
