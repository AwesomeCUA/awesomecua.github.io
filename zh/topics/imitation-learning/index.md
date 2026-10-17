# 模仿学习

Reviewed topic membership; resources can appear in multiple topics. Shared membership is not a dependency claim.

Full source records: https://awesomecua.github.io/downloads/topics/imitation-learning/records.jsonl

## 论文与综述

- [ASIL: Replacing Screenshot-and-Click with Structured State and Semantic Actions](https://awesomecua.github.io/resources/arxiv-2608-26991/) — 2026-08-27
  ASIL exposes application state as structured JSON and provides code-executable semantic actions. Its application benchmark compares this interface with screenshot control and application-native APIs, and studies supervised and reinforcement learning on the structured interface.
- [UI-MOPD: Multi-Platform On-Policy Distillation for Unified GUI Agents](https://awesomecua.github.io/resources/arxiv-2607-04425/) — 2026-07-05
  Introduces Uni-GUI, a collection of executable desktop and mobile trajectories, and UI-MOPD, which trains a shared policy from its own rollouts using platform-specific teachers. The distillation procedure routes each visited state to the appropriate teacher to preserve distinct interaction conventions.
- [Mem-W: Latent Memory-Native GUI Agents](https://awesomecua.github.io/resources/arxiv-2605-09317/) — 2026-05-10
  Introduces Mem-W, which compresses previous trajectories and current-session segments into latent memory tokens used directly by the GUI policy. Self-distillation and outcome supervision train this memory representation for web and mobile navigation.
- [OpenMobile: Building Open Mobile Agents with Task and Trajectory Synthesis](https://awesomecua.github.io/resources/arxiv-2604-15093/) — 2026-04-16
  Presents OpenMobile, which builds exploration-based environment memory to synthesize task instructions and switches between learner and expert policies during trajectory collection. The resulting data includes recovery behavior and is tested through mobile-agent training and benchmark-overlap analysis.
- [MolmoWeb: Open Visual Web Agent and Open Data for the Open Web](https://awesomecua.github.io/resources/arxiv-2604-08516/) — 2026-04-09
  Presents MolmoWebMix, combining synthetic browser trajectories, human demonstrations and GUI perception data, and MolmoWeb screenshot-to-action policies trained from it. Browser benchmarks also test parallel rollouts with best-of-N selection.
- [UI-Voyager: A Self-Evolving GUI Agent Learning via Failed Experience](https://awesomecua.github.io/resources/arxiv-2603-24533/) — 2026-03-25
  Introduces a two-stage mobile GUI learner that first co-evolves trajectories and policies through rejection fine-tuning. Group Relative Self-Distillation then uses successful rollout branches to provide step-level supervision for failed trajectories, evaluated on AndroidWorld.
- [Scaling Synthetic Task Generation for Agents via Exploration](https://awesomecua.github.io/resources/arxiv-2509-25047/) — 2025-09-29
  AutoPlay explores application states and functions to generate tasks, then uses a model executor and verifier to construct demonstrations. It produces 20,000 tasks across 20 Android apps and 10,000 tasks across 13 Ubuntu apps for supervised and reinforcement learning of UI agents.
- [Retrieval-augmented GUI Agents with Generative Guidelines](https://awesomecua.github.io/resources/arxiv-2509-24183/) — 2025-09-29
  RAG-GUI trains a small guidance adapter to filter and summarize retrieved web tutorials while keeping the acting agent fixed. Supervised and rejection-sampling stages prepare the adapter for inference-time assistance, tested on offline web/mobile tasks and interactive Android tasks.
- [UIPro: Unleashing Superior Interaction Capability For GUI Agents](https://awesomecua.github.io/resources/arxiv-2509-17328/) — 2025-09-22
  UIPro pretrains GUI understanding on 20.6 million tasks and then harmonizes interaction datasets through a unified action space. Continued fine-tuning uses the merged multi-platform data to train action prediction for generalist GUI operation.
- [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.github.io/resources/arxiv-2508-20096/) — 2025-08-27
  CODA combines a generalist planner with a specialist GUI executor and trains application-specific planners through decoupled GRPO. Successful specialist trajectories then support supervised training of a consolidated planner, evaluated across four ScienceBoard applications.
- [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.github.io/resources/arxiv-2508-04700/) — 2025-08-06
  SEAgent explores unfamiliar software using a world-state assessor and an automatically generated task curriculum. It learns from failed and successful interactions through adversarial imitation and GRPO, then combines specialist experience into a generalist agent evaluated on five OSWorld software environments.
- [How to Train Your LLM Web Agent: A Statistical Diagnosis](https://awesomecua.github.io/resources/arxiv-2507-04103/) — 2025-07-05
  Studies compute allocation for web-agent post-training with teacher-generated supervised fine-tuning followed by on-policy reinforcement learning. It samples 1,370 training configurations and uses bootstrap analysis to examine hyperparameter sensitivity on WorkArena and MiniWoB++.
- [AppVLM: A Lightweight Vision Language Model for Online App Control](https://awesomecua.github.io/resources/arxiv-2502-06395/) — 2025-02-10
  AppVLM first learns app actions from AndroidControl and then refines its policy through data collected in AndroidWorld. The study compares offline action prediction and online task completion for a lightweight vision-language smartphone agent.
- [Synatra: Turning Indirect Knowledge into Direct Demonstrations for Digital Agents at Scale](https://awesomecua.github.io/resources/arxiv-2409-15637/) — 2024-09-24
  Synatra converts indirect procedural knowledge, including human-oriented tutorials, into direct demonstrations for digital agents. It trains a 7B CodeLlama on 100,000 synthesized demonstrations and evaluates the resulting policy on Mind2Web, MiniWoB++, and WebArena.
- [Grounded Language Agent for Product Search via Intelligent Web Interactions](https://awesomecua.github.io/resources/arxiv-2404-10887/) — 2024-04-16
  Introduces GLAINTEL, a Flan-T5-based product-search web agent studied under unsupervised learning, demonstration-based training, and unsupervised domain adaptation. It compares ways to combine demonstrations with reinforcement learning.
- [Multimodal Web Navigation with Instruction-Finetuned Foundation Models](https://awesomecua.github.io/resources/arxiv-2305-11854/) — 2023-05-19
  Trains WebGUM offline from demonstrations by jointly tuning an instruction-following language model and a vision encoder over webpage screenshots and HTML. The agent predicts browser actions and is evaluated on MiniWoB, WebShop, and Mind2Web.
- [Interactive Task and Concept Learning from Natural Language Instructions and GUI Demonstrations](https://awesomecua.github.io/resources/arxiv-1909-00031/) — 2019-08-30
  Introduces PUMICE, an agent that learns mobile-app procedures and conditional concepts through natural-language conversation and GUI demonstrations, recursively resolving ambiguous instructions with users.

## 评测基准

- [FedMABench](https://awesomecua.github.io/resources/github-wwh0411-fedmabench/) — Date not recorded
  A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.

## 数据集

- [AutoDroid V2 training data](https://awesomecua.github.io/resources/url-9a3506ca6ef034adb424/) — Date not recorded
  Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.
- [Go-Browse-WA processed data](https://awesomecua.github.io/resources/url-a13a187bc058fbb4f6af/) — Date not recorded
  Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.
- [GUI-CIDER causal knowledge data](https://awesomecua.github.io/resources/url-d0300db5ba754b1a64fa/) — Date not recorded
  A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.
- [GUI-Net-1M](https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/) — Date not recorded
  A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.
- [GUIMid training data](https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/) — Date not recorded
  A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.
- [MONDAY annotations](https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/) — Date not recorded
  Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.
- [MT-Mind2Web](https://awesomecua.github.io/resources/url-bdfb50330deb97893ce4/) — Date not recorded
  Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.
- [OS-Genesis mobile training data](https://awesomecua.github.io/resources/url-d3ec5122a2b52fd5ae4b/) — Date not recorded
  Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.
- [ShowUI-π training data](https://awesomecua.github.io/resources/url-3dab53c6c38c9e7217ea/) — Date not recorded
  Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.
- [UI-Genie trajectory data](https://awesomecua.github.io/resources/url-2e1927450da2183a5abe/) — Date not recorded
  Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.
- [VideoCAD data](https://awesomecua.github.io/resources/url-2b5dead3172c0b70da7e/) — Date not recorded
  CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.

## 模型

- [Go-Browse WebArena Qwen 7B](https://awesomecua.github.io/resources/url-db1b7b7efe3755ae5693/) — Date not recorded
  A Qwen-2.5-7B-Instruct checkpoint fine-tuned on Go-Browse WebArena trajectories for website task execution.
- [Llama-3-8B-Web](https://awesomecua.github.io/resources/url-7c3e8c4ba52428584079/) — Date not recorded
  A Llama 3 8B instruction-model checkpoint fine-tuned on WebLINX web interactions and dialogue, predicting browser actions from a textual state representation.
- [OS-Genesis 7B AC](https://awesomecua.github.io/resources/url-80858580c1009eba0e98/) — Date not recorded
  The AndroidControl-oriented Qwen2-VL checkpoint trained with mobile trajectories generated through OS-Genesis reverse task synthesis.
- [UI-Genie Agent 7B](https://awesomecua.github.io/resources/url-6d959b58bd4a2e98e417/) — Date not recorded
  A Qwen2.5-VL mobile action model trained using existing and reward-guided synthetic trajectories from the UI-Genie framework.

## 工程与产业

- [Go-Browse](https://awesomecua.github.io/resources/github-apga-go-browse/) — Date not recorded
  Structured website-exploration and data-processing code that revisits discovered pages, proposes tasks and collects trajectories for web-agent fine-tuning.
- [GUI-CIDER research code](https://awesomecua.github.io/resources/github-wuzheng02-gui-cider/) — Date not recorded
  Released data-synthesis and evaluation scripts that distill planning and causal GUI knowledge into text for mid-training mobile interface agents.
- [GUIPivot](https://awesomecua.github.io/resources/github-zrw00-guipivot/) — Date not recorded
  Research tooling for query-inference pivot tasks that connect screenshot grounding with GUI action reasoning, including preprocessing, query refinement and mobile-agent evaluation.
- [Synapse](https://awesomecua.github.io/resources/github-ltzheng-synapse/) — Date not recorded
  A computer-control research implementation that retrieves example trajectories from memory, abstracts task-relevant state and prompts an agent to navigate browser tasks.
- [TongUI training and inference framework](https://awesomecua.github.io/resources/github-tongui-agent-tongui-agent/) — Date not recorded
  Training configurations, preprocessing and inference examples for tutorial-trained GUI models, with a LLaMA-Factory fine-tuning workflow and screenshot-grounding interfaces.
- [UI-Genie](https://awesomecua.github.io/resources/github-euphoria16-ui-genie/) — Date not recorded
  Training and evaluation code for a mobile-agent framework that iteratively generates trajectories using agent and reward-model feedback.
- [VideoCAD training and evaluation code](https://awesomecua.github.io/resources/github-udgok-videocad/) — Date not recorded
  VideoCADFormer training, action-log preprocessing and evaluation code for learning long sequences of CAD interface operations from screen recordings.
- [WebLlama](https://awesomecua.github.io/resources/github-mcgill-nlp-webllama/) — Date not recorded
  Training, evaluation and integration tooling for dialogue-guided web agents, including Llama fine-tuning workflows and BrowserGym examples built around WebLINX.
