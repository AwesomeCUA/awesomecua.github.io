# Action prediction

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/action-prediction/records.jsonl

## Papers & surveys

- [Beyond Next-Screen Prediction: The Decision Value of GUI World Models](https://awesomecua.github.io/resources/arxiv-2610-24372/) — 2026-10-17
  Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.
- [When Faster Decisions Do Not Make Better Agents: An Empirical Study of Jev in Agent Workflows](https://awesomecua.github.io/resources/arxiv-2610-13092/) — 2026-10-09
  Evaluates Jev as a bounded action selector inside three AndroidWorld agents and two text-based ALFWorld agents, separating decision savings from task success, recovery and resources per delivered outcome.
- [Learning from Others, Acting for You: Cross-User Memory Sharing for LLM Agents](https://awesomecua.github.io/resources/arxiv-2609-32511/) — 2026-09-26
  ShareMem consolidates reusable experience across users while keeping preference retrieval user-bound; its web evaluation predicts target elements and actions on recorded Mind2Web states.
- [Guides That Cause Actions: An Offline Study of Guide-Action Mutual Reinforcement in Multimodal Web Agents](https://awesomecua.github.io/resources/arxiv-2609-27353/) — 2026-09-23
  WebMRE pairs guidance sentences with grounded actions in an offline benchmark derived from successful WebArena traces. Controlled decoding-prefix interventions test how guide content affects action selection, while separating offline prediction metrics from live browser task success.
- [Towards Omni-dimensional GUI Agent Navigation with Masked Trajectory Prediction](https://awesomecua.github.io/resources/arxiv-2609-25769/) — 2026-09-22
  MaP unifies GUI-navigation objectives by masking and predicting components of multi-turn trajectories. Role-aware adapters address heterogeneous training data, and evaluations compare the approach with direct task-mixture training across navigation benchmarks.
- [Beyond Success and Failure: Length-Aware Contrastive Learning for GUI Agents](https://awesomecua.github.io/resources/arxiv-2608-21830/) — 2026-08-22
  Introduces LACL-GUI, a contrastive learning objective that distinguishes trajectory quality within both successful and failed GUI executions. It favors concise successes and uses divergence from successful trajectories to differentiate failures during policy optimization.
- [Scaling GUI Agents with Visual State Transitions](https://awesomecua.github.io/resources/arxiv-2607-24112/) — 2026-07-27
  Introduces State Transition Pretraining, which jointly learns to infer actions from GUI changes and predict future states from current screens and actions. Subsequent instruction-trajectory fine-tuning tests whether these representations transfer to desktop and mobile agent tasks.
- [EvoGUI: An Evolution-Aware Benchmark for GUI State-Transition Understanding](https://awesomecua.github.io/resources/arxiv-2607-17050/) — 2026-07-19
  Introduces EvoGUI, which derives temporal ordering, inverse action/value prediction, and successor-discrimination probes from recorded GUI trajectories. Its web-derived benchmark isolates transition understanding from the other abilities involved in end-to-end task success.
- [MAG: A Web-Agent Benchmark and Harness for Multimodal Action and Guide Generation](https://awesomecua.github.io/resources/arxiv-2607-10079/) — 2026-07-11
  MAG jointly evaluates browser task actions and user-facing guides grounded in screenshots through element marks or pixel coordinates. Its harness covers annotation, live evaluation and joint metrics, with an expert-trajectory-augmented GRPO training study.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [Covering Human Action Space for Computer Use: Data Synthesis and Benchmark](https://awesomecua.github.io/resources/arxiv-2605-12501/) — 2026-05-12
  Introduces CUActSpot to evaluate clicks, drags, drawing and other screen interactions across GUI, text, tables, canvases and natural images. A renderer-based pipeline records geometry and screenshots, then generates matching instructions and action traces for training a grounding model.
- [OmniGUI: Benchmarking GUI Agents in Omni-Modal Smartphone Environments](https://awesomecua.github.io/resources/arxiv-2605-18758/) — 2026-04-03
  OmniGUI evaluates step-level action prediction from interleaved smartphone screenshots, synchronous audio and video. Expert demonstrations carry multimodal-dependency annotations, and initial baselines use native multimodal models as agent proxies to study temporal and audio-related failures.
- [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://awesomecua.github.io/resources/arxiv-2603-26211/) — 2026-03-27
  Adapts a discrete vision-language diffusion model to single-turn GUI action and bounding-box prediction, using a hybrid masking schedule for coordinate geometry. Experiments across web, desktop and mobile datasets examine grounding accuracy and inference tradeoffs.
- [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](https://awesomecua.github.io/resources/arxiv-2603-12138/) — 2026-03-12
  Introduces HATS, which directs GUI trajectory exploration toward semantically ambiguous actions and iteratively checks instruction-execution alignment. Feedback from trajectory refinement updates the exploration signal used to collect subsequent training examples.
- [Modeling Distinct Human Interaction in Web Agents](https://awesomecua.github.io/resources/arxiv-2602-17588/) — 2026-02-19
  CowCorpus records interleaved human and agent actions during web navigation and identifies distinct patterns of user intervention. Models trained to anticipate these interventions are integrated into live web agents and assessed in a user study.
- [Computer-Using World Model](https://awesomecua.github.io/resources/arxiv-2602-17365/) — 2026-02-19
  Presents a desktop world model that predicts textual UI changes before synthesizing the next screenshot. It learns from Microsoft Office transitions and is evaluated by letting a frozen agent compare simulated actions before execution.
- [SwipeGen: Bridging the Execution Gap in GUI Agents via Human-like Swipe Synthesis](https://awesomecua.github.io/resources/arxiv-2601-18305/) — 2026-01-26
  Introduces SwipeGen for synthesizing varied swipe trajectories and SwipeBench for assessing their execution quality. The study examines how richer control of trajectory, speed, and timing changes GUI agents’ interaction performance.
- [Learning GUI Grounding with Spatial Reasoning from Visual Feedback](https://awesomecua.github.io/resources/arxiv-2509-21552/) — 2025-09-25
  GUI-Cursor treats GUI grounding as a sequence of cursor movements guided by visible feedback and movement history. Online reinforcement learning with trajectory rewards trains the model to refine the target location across multiple steps.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [OmniActor: A Generalist GUI and Embodied Agent for 2D&3D Worlds](https://awesomecua.github.io/resources/arxiv-2509-02322/) — 2025-09-02
  Introduces OmniActor, which shares shallow model layers while separating deeper parameters to train jointly on GUI and embodied interactions. A unified action representation and mixed training data support evaluation in both task families.
- [UITron-Speech: Towards Automated GUI Agents Based on Speech Instructions](https://awesomecua.github.io/resources/arxiv-2506-11127/) — 2025-06-10
  Introduces UITron-Speech, which predicts GUI actions from spoken instructions and screenshots. It combines synthetic speech data and mixed-modality training with a training-free grounding refinement step.
- [Lightweight Neural App Control](https://awesomecua.github.io/resources/arxiv-2410-17883/) — 2024-10-23
  LiMAC combines a compact Action Transformer with a fine-tuned vision-language model for Android app control. It uses textual goals and histories of screenshots and UI trees to predict actions, with evaluation on two mobile-control datasets.
- [MobileVLM: A Vision-Language Model for Better Intra- and Inter-UI Understanding](https://awesomecua.github.io/resources/arxiv-2409-14818/) — 2024-09-23
  MobileVLM adds two pretraining stages and four UI tasks to learn element detail and relationships between successive screens. Its Mobile3M dataset contains three million Chinese mobile UI pages connected by recorded transition actions.
- [V-Zen: Efficient GUI Understanding and Precise Grounding With A Novel Multimodal LLM](https://awesomecua.github.io/resources/arxiv-2405-15341/) — 2024-05-24
  Describes V-Zen, a multimodal GUI model with dual-resolution image encoders for grounding and next-action prediction, fine-tuned using GUIDE interface elements and task sequences.
- [Training a Vision Language Model as Smartphone Assistant](https://awesomecua.github.io/resources/arxiv-2404-08755/) — 2024-04-12
  Trains a smartphone assistant from sequences of screenshots paired with earlier actions. The model predicts UI-only interactions such as taps and swipes, with evaluation on Android in the Wild.
- [From Pixels to UI Actions: Learning to Follow Instructions via Graphical User Interfaces](https://awesomecua.github.io/resources/arxiv-2306-00245/) — 2023-05-31
  Studies instruction-following agents that observe screenshots and act through a generic mouse-and-keyboard action space, evaluating pixel-based pretraining for GUI tasks on MiniWoB++.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.github.io/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [ActionBert: Leveraging User Actions for Semantic Understanding of User Interfaces](https://awesomecua.github.io/resources/arxiv-2012-12350/) — 2020-12-22
  Pretrains ActionBert on user interaction traces to combine visual, linguistic, and UI-structure features. It evaluates the resulting UI representations on tasks including icon classification and description-based component retrieval.
- [Mapping Natural Language Instructions to Mobile UI Action Sequences](https://awesomecua.github.io/resources/arxiv-2005-03776/) — 2020-05-07
  Introduces PIXELHELP for predicting mobile UI action sequences from instructions, together with action-phrase annotations and synthetic UI action descriptions for training. Separate Transformers extract instruction steps and ground object descriptions using interface content and screen position.

## Datasets

- [ShowUI-π training data](https://awesomecua.github.io/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [UI-R1 3B training data](https://awesomecua.github.io/resources/url-7c568d88a472f914d316/) — Date not recorded
  The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.

## Models

- [Aria-UI context-aware checkpoint](https://awesomecua.github.io/resources/url-085b6811ddd6f797475d/) — Date not recorded
  The context-aware Aria-UI release that uses interaction context to support grounding in dynamic Android and desktop agent tasks.
- [ARPO UI-TARS-1.5-7B checkpoint](https://awesomecua.github.io/resources/url-db6fc5f29f186d13991c/) — Date not recorded
  UI-TARS-1.5-7B-derived checkpoint trained with ARPO on OSWorld desktop tasks.
- [CogAgent 9B 20241220](https://awesomecua.github.io/resources/url-c5eb975c0d66f8a2954f/) — Date not recorded
  A bilingual GLM-4V-based execution model that uses screenshots, task instructions and action history to predict GUI operations.
- [GUI-Owl 7B](https://awesomecua.github.io/resources/url-aeb32973694f91ad9920/) — Date not recorded
  A Qwen2.5-VL-based GUI checkpoint released with Mobile-Agent-v3 for grounded actions and specialized roles in its agent framework.
- [GUI-R1 checkpoint bundle](https://awesomecua.github.io/resources/url-61a5321db10fc8a312b9/) — Date not recorded
  A single Hub release containing GUI-R1 3B and 7B action-model checkpoints trained with reinforcement learning across interface platforms.
- [Holo2 4B](https://awesomecua.github.io/resources/url-16a51d9e725ad5a5c629/) — Date not recorded
  A Qwen3-VL-based checkpoint for navigation and multi-step GUI actions across web, desktop and mobile interfaces.
- [Holo3 35B-A3B](https://awesomecua.github.io/resources/url-a349aace3cfde25628a8/) — Date not recorded
  A sparse Qwen3.5-based GUI-action checkpoint released for navigation and computer-use workflows.
- [Holo4 35B-A3B BF16](https://awesomecua.github.io/resources/url-16083a0225a60882c704/) — Date not recorded
  A Qwen3.6-based computer-use checkpoint designed to request GUI actions, code execution and tool calls through an external agent harness.
- [Llama-3-8B-Web](https://awesomecua.github.io/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [OpenCUA 72B](https://awesomecua.github.io/resources/url-4a0b1692589594745a3c/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint that combines screenshot history and reflective reasoning to predict executable desktop actions.
- [OS-Genesis 7B AC](https://awesomecua.github.io/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [PC-Agent-E checkpoint](https://awesomecua.github.io/resources/url-04aa7569d183379d615c/) — Date not recorded
  Computer-use checkpoint fine-tuned on PC-Agent-E trajectories; the model-card prose identifies Qwen2.5-VL-72B-Instruct as its starting model.
- [ScaleCUA 7B](https://awesomecua.github.io/resources/url-ff7b1873a3eead89607a/) — Date not recorded
  A Qwen2.5-VL-based computer-use checkpoint with direct grounding and agent action modes across desktop, mobile and web interfaces.
- [ShowUI-π checkpoint](https://awesomecua.github.io/resources/url-f70aa7c95824a8729516/) — Date not recorded
  A compact visual-action checkpoint that predicts continuous GUI drag trajectories from a screenshot and a natural-language instruction.
- [UI-Genie Agent 7B](https://awesomecua.github.io/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.
- [UI-R1 3B](https://awesomecua.github.io/resources/url-f13474d7aa734a30624d/) — Date not recorded
  A Qwen2.5-VL checkpoint trained with reinforcement learning for GUI action prediction and evaluated on mobile, desktop and web grounding tasks.
- [UI-S1 7B](https://awesomecua.github.io/resources/url-1c4ee99a9a55ae71a7ac/) — Date not recorded
  A mobile GUI checkpoint trained with semi-online reinforcement learning that uses offline trajectories to improve multi-turn action prediction.

## Engineering & industry

- [CoAT research implementation](https://awesomecua.github.io/resources/github-imnearth-coat/) — Date not recorded
  Research scripts that generate screen descriptions, action reasoning and expected outcomes, then predict Android GUI actions using the resulting Chain-of-Action-Thought context.
- [D-PoT evaluation code](https://awesomecua.github.io/resources/github-sqzhang-lazy-d-pot/) — Date not recorded
  Offline prompting and evaluation code for Dynamic Planning of Thoughts on Android-in-the-Wild, including action extraction and comparison with reference actions.
- [ScreenSuite](https://awesomecua.github.io/resources/github-huggingface-screensuite/) — Date not recorded
  A shared evaluation harness for GUI-model perception, offline action prediction and multi-step interaction, using simple smolagents-based agents across existing benchmarks.
