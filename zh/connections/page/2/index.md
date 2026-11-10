---
title: "计算机使用智能体论文、代码与数据集（第 2 页） | AwesomeCUA"
url: https://awesomecua.com/zh/connections/page/2/
updated: 2026-11-10
type: page
lang: zh-CN
---

# 计算机使用智能体论文、代码与数据集（第 2 页）

查看与已审阅论文相关联的实现、评测基准和数据集。下方每条关联都附有一手来源证据链接。

关联表示论文记录或首次提出了该资源。

## [ColorAgent: Building A Robust, Personalized, and Interactive OS Agent](https://awesomecua.com/zh/resources/arxiv-2510-19386/)

ColorAgent 是执行长流程用户指令的操作系统智能体，采用逐步 RL 和自演进训练，并在 AndroidWorld 与 AndroidLab 上评估。

- [ColorGUI-32B](https://awesomecua.com/zh/resources/url-38672ac9af2e25fbfb58/) — 模型 · [来源证据](https://huggingface.co/api/models/MadeAgents/ColorGUI-32B)

## [VideoAgentTrek: Computer Use Pretraining from Unlabeled Videos](https://awesomecua.com/zh/resources/arxiv-2510-19488/)

利用逆向动力学从录屏教程中提取结构化 GUI 操作，再用推断出的轨迹训练计算机使用智能体。

- [VideoAgentTrek-IDM-s1-7B](https://awesomecua.com/zh/resources/url-280f2ab56bbc0b630d81/) — 模型 · [来源证据](https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B)
- [VideoAgentTrek-IDM-s2-7B](https://awesomecua.com/zh/resources/url-2e88b52ca1717a28fd32/) — 模型 · [来源证据](https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s2-7B)

## [AndroidControl-Curated: Revealing the True Potential of GUI Agents through Benchmark Purification](https://awesomecua.com/zh/resources/arxiv-2510-18488/)

AndroidControl-Curated 核查 AndroidControl 中的歧义和事实错误，形成修订后的评估数据集。论文还在精选子集上对小型 Magma-R1 模型进行后训练，研究数据质量对 GUI 操作评估的影响。

- [AndroidControl-Curated](https://awesomecua.com/zh/resources/url-dda8a0f1413a6bc7c26f/) — 评测基准 · [来源证据](https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/raw/62aeecdcafa4097d340c5a4389690a5f14e938ed/README.md)
- [Magma-R1](https://awesomecua.com/zh/resources/url-e5e74846aeaa8398673e/) — 模型 · [来源证据](https://huggingface.co/api/models/batwBMW/Magma-R1)

## [WebAggregator: Enhancing Compositional Reasoning Capabilities of Deep Research Agent Foundation Models](https://awesomecua.com/zh/resources/arxiv-2510-14438/)

提出 WebAggregator，从网站信息合成组合推理问题，用于训练深度研究智能体；另提出 WebAggregatorQA 测试平台。

- [WebAggregator](https://awesomecua.com/zh/resources/github-tencent-webaggregator/) — 框架 · [来源证据](https://raw.githubusercontent.com/Tencent/WebAggregator/0e4f4d1583431abb838895267f925c018b0df510/readme.md)

## [ColorBench: Benchmarking Mobile Agents with Graph-Structured Framework for Complex Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2510-14621/)

ColorBench 用从真实设备采集的状态图表示移动端任务，提供包含多条有效路径和错误路径的准动态环境。它以完成情况、子任务进度和原子级诊断评估单应用及跨应用任务。

- [ColorBench](https://awesomecua.com/zh/resources/github-madeagents-colorbench/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)

## [LLMs as Scalable, General-Purpose Simulators For Evolving Digital Agent Training](https://awesomecua.com/zh/resources/arxiv-2510-14969/)

提出 UI-Simulator，生成 UI 状态及状态转换以合成智能体训练轨迹；另提出 UI-Simulator-Grow，优先处理任务和轨迹变体。

- [UI-Simulator_android_data](https://awesomecua.com/zh/resources/url-d32dfe60eff4b87c1d05/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/UI-Simulator/UI-Simulator_android_data)

## [GUIrilla: A Scalable Framework for Automated Desktop UI Exploration](https://awesomecua.com/zh/resources/arxiv-2510-16051/)

GUIrilla 系统地探索 macOS 界面，收集交互轨迹和无障碍元数据，供后续 GUI 研究使用。它将观察结果组织为分层 MacApp Trees，并介绍由无障碍信息驱动的采集库。

- [GUIrilla-Task](https://awesomecua.com/zh/resources/url-afe8260e6db2617b72ec/) — 数据集 · [来源证据](https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md)

## [Detect Anything via Next Point Prediction](https://awesomecua.com/zh/resources/arxiv-2510-12798/)

提出 Rex-Omni，通过坐标预测训练通用视觉感知模型；GUI 元素定位是其与目标检测、OCR 等一同评估的能力之一。

- [Rex-Omni](https://awesomecua.com/zh/resources/github-idea-research-rex-omni/) — 模型 · [来源证据](https://raw.githubusercontent.com/IDEA-Research/Rex-Omni/HEAD/README.md)
- [Rex-Omni](https://awesomecua.com/zh/resources/url-37880875f816f46f6dfe/) — 模型 · [来源证据](https://huggingface.co/api/models/IDEA-Research/Rex-Omni)

## [Auto-scaling Continuous Memory for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2510-09038/)

将 GUI 轨迹编码为紧凑的连续嵌入，可直接检索并加入智能体输入。自动化环境发现和轨迹生成流程为长任务与陌生界面扩充这类记忆。

- [CoMEM-Agent](https://awesomecua.com/zh/resources/github-wenyiwu0111-comem-agent/) — 智能体 · [来源证据](https://raw.githubusercontent.com/WenyiWU0111/CoMEM-Agent/HEAD/README.md)
- [WenyiWU0111/CoMEM-agent-memory-trajectories](https://awesomecua.com/zh/resources/url-87e0195f2401d5f6f66f/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories)
- [lora_qformer_test_V4-700_merged](https://awesomecua.com/zh/resources/url-8a5201470d27334977fa/) — 模型 · [来源证据](https://huggingface.co/api/models/WenyiWU0111/lora_qformer_test_V4-700_merged)
- [lora_qformer_uitars_test_V1-400_merged](https://awesomecua.com/zh/resources/url-b144605ae24674ffb917/) — 模型 · [来源证据](https://huggingface.co/api/models/WenyiWU0111/lora_qformer_uitars_test_V1-400_merged)

## [\textsc{GUI-Spotlight}: Adaptive Iterative Focus Refinement for Enhanced GUI Visual Grounding](https://awesomecua.com/zh/resources/arxiv-2510-04039/)

GUI-Spotlight 训练定位模型对图像进行推理，并调用工具逐步缩小视觉关注范围。模型使用 18,500 个样本训练后，在 ScreenSpot-Pro 上评估这一方法。

- [GUI-Spotlight](https://awesomecua.com/zh/resources/github-bin123apple-gui-spotlight/) — 模型 · [来源证据](https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/README.md)

## [Scaling Agents for Computer Use](https://awesomecua.com/zh/resources/arxiv-2510-02250/)

Behavior Judge 将执行轨迹转化为行为叙述，并比较多个候选执行轨迹。研究在 OSWorld、WindowsAgentArena 和 AndroidWorld 上考察这种选择方法。

- [Agent S](https://awesomecua.com/zh/resources/github-simular-ai-agent-s/) — 智能体 · [来源证据](https://raw.githubusercontent.com/simular-ai/Agent-S/HEAD/README.md)

## [SCUBA: Salesforce Computer Use Benchmark](https://awesomecua.com/zh/resources/arxiv-2509-26506/)

SCUBA 以源自 Salesforce 用户访谈的 300 个任务实例评估企业 UI 导航和 CRM 流程。通过 Salesforce 沙盒执行和基于里程碑的评估，比较零样本智能体与获得示范的智能体。

- [SCUBA (Salesforce Computer Use Benchmark)](https://awesomecua.com/zh/resources/github-salesforceairesearch-scuba/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/SalesforceAIResearch/SCUBA/HEAD/README.md)

## [Efficient Multi-turn RL for GUI Agents via Decoupled Training and Adaptive Data Curation](https://awesomecua.com/zh/resources/arxiv-2509-23866/)

DART 将 GUI 强化学习拆分为异步环境、轨迹生成、数据管理和训练服务。它按任务难度、成功轨迹和步骤不确定性筛选经验，同时校正轨迹生成策略与训练策略的偏差，并在 OSWorld 上评估。

- [DART-GUI](https://awesomecua.com/zh/resources/github-computer-use-agents-dart-gui/) — 框架 · [来源证据](https://raw.githubusercontent.com/Computer-use-agents/dart-gui/HEAD/README.md)
- [dart-gui-7b](https://awesomecua.com/zh/resources/url-689fea75118e3113476b/) — 模型 · [来源证据](https://huggingface.co/api/models/dart-gui/dart-gui-7b)

## [WebGen-Agent: Enhancing Interactive Website Generation with Multi-Level Feedback and Step-Level Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2509-22644/)

提出网站代码生成智能体 WebGen-Agent，以截图评议和 GUI 智能体测试反馈迭代修改代码，并提供逐步训练奖励。

- [WebGen-Agent](https://awesomecua.com/zh/resources/github-mnluzimu-webgen-agent/) — 智能体 · [来源证据](https://raw.githubusercontent.com/mnluzimu/WebGen-Agent/HEAD/README.md)
- [WebGenAgent-LM-7B-SFT](https://awesomecua.com/zh/resources/url-1ff9a17a7d0802a71b1a/) — 模型 · [来源证据](https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-SFT)
- [WebGenAgent-LM-8B-Step-GRPO](https://awesomecua.com/zh/resources/url-7ebba507c0df876c6113/) — 模型 · [来源证据](https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-Step-GRPO)
- [WebGenAgent-LM-8B-SFT](https://awesomecua.com/zh/resources/url-b3dd615ebfe977392f90/) — 模型 · [来源证据](https://huggingface.co/api/models/luzimu/WebGenAgent-LM-8B-SFT)
- [WebGenAgent-LM-7B-Step-GRPO](https://awesomecua.com/zh/resources/url-cdb9a1ad26e169a411f5/) — 模型 · [来源证据](https://huggingface.co/api/models/luzimu/WebGenAgent-LM-7B-Step-GRPO)

## [Mano Technical Report](https://awesomecua.com/zh/resources/arxiv-2509-17336/)

提出 GUI 智能体 Mano，利用模拟数据、监督微调及离线和在线 RL 训练，并以验证模块处理错误恢复。

- [Mano-CUA-2.0-4B](https://awesomecua.com/zh/resources/url-1b08ff264bbf2f8a10a3/) — 模型 · [来源证据](https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B)
- [Mano-CUA-2.0-4B-MLX-8bit](https://awesomecua.com/zh/resources/url-430e47e1ca9f3b2a302f/) — 模型 · [来源证据](https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B-MLX-8bit)

## [GUI-ReWalk: Massive Data Generation for GUI Agent via Stochastic Exploration and Intent-Aware Reasoning](https://awesomecua.com/zh/resources/arxiv-2509-15738/)

GUI-ReWalk 先随机探索界面，再推断目标以生成连贯的操作轨迹；它支持跨应用的长程工作流，并通过定位和导航基准研究使用生成数据进行训练的效果。

- [GUI-ReWalk](https://awesomecua.com/zh/resources/github-bytedance-gui-rewalk/) — 框架 · [来源证据](https://raw.githubusercontent.com/bytedance/GUI-ReWalk/HEAD/README.md)

## [ScaleCUA: Scaling Open-Source Computer Use Agents with Cross-Platform Data](https://awesomecua.com/zh/resources/arxiv-2509-15221/)

提出跨平台计算机使用数据集，以及通过结合自动交互与人工输入的数据采集流程训练的智能体。

- [ScaleCUA](https://awesomecua.com/zh/resources/github-opengvlab-scalecua/) — 模型 · [来源证据](https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md)
- [ScaleCUA Data](https://awesomecua.com/zh/resources/url-631e74223e198ef40202/) — 数据集 · [来源证据](https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md)
- [ScaleCUA 7B](https://awesomecua.com/zh/resources/url-ff7b1873a3eead89607a/) — 模型 · [来源证据](https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md)

## [UI-S1: Advancing GUI Automation via Semi-online Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2509-11543/)

UI-S1 利用离线轨迹模拟多轮在线学习，以修补模块修复偏离，同时在上下文中保留模型自身输出；它结合折扣未来回报与步骤级、回合级优势，并提出半在线性能代理指标。

- [UI-S1 released training examples](https://awesomecua.com/zh/resources/url-16184830c0f4bdb146fa/) — 数据集 · [来源证据](https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md)
- [UI-S1 7B](https://awesomecua.com/zh/resources/url-1c4ee99a9a55ae71a7ac/) — 模型 · [来源证据](https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md)

## [MobileRL: Online Agentic Reinforcement Learning for Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2509-18119/)

MobileRL 通过按难度重放成功经验、筛选失败课程，将 GRPO 用于移动 GUI 训练；还用最短路径奖励调整处理任务长度，并在 AndroidWorld 和 AndroidLab 上评估。

- [MobileRL](https://awesomecua.com/zh/resources/github-thudm-mobilerl/) — 框架 · [来源证据](https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/README.md)
- [MobileRL 9B checkpoint](https://awesomecua.com/zh/resources/url-d5667c854845c77b9f5b/) — 模型 · [来源证据](https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/README.md)

## [VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents](https://awesomecua.com/zh/resources/arxiv-2509-07553/)

提出 VeriOS-Agent，使其学会在不可信条件下判断何时自主执行 GUI 操作、何时询问用户；分阶段训练结合监督学习与组相对策略优化。

- [VeriOS](https://awesomecua.com/zh/resources/github-wuzheng02-verios/) — 框架 · [来源证据](https://raw.githubusercontent.com/Wuzheng02/VeriOS/HEAD/README.md)
- [VeriOS-Agent-7B](https://awesomecua.com/zh/resources/url-0b0a7a841d65715d60b1/) — 模型 · [来源证据](https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-7B)
- [VeriOS-Bench](https://awesomecua.com/zh/resources/url-16a5ccde8bb16cda19ff/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/wuuuuuz/VeriOS-Bench)
- [VeriOS-Agent-32B](https://awesomecua.com/zh/resources/url-97040677a731edfedc2d/) — 模型 · [来源证据](https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-32B)

## [AppCopilot: Toward General, Accurate, Long-Horizon, and Efficient Mobile Agent](https://awesomecua.com/zh/resources/arxiv-2509-02444/)

介绍一种移动智能体系统，结合基于区域的坐标校正、分层任务规划、多智能体投票以及成功交互轨迹的复用。

- [AppCopilot](https://awesomecua.com/zh/resources/github-openbmb-appcopilot/) — 智能体 · [来源证据](https://raw.githubusercontent.com/OpenBMB/AppCopilot/HEAD/README.md)

## [FlashAdventure: A Benchmark for GUI Agents Solving Full Story Arcs in Diverse Adventure Games](https://awesomecua.com/zh/resources/arxiv-2509-01052/)

FlashAdventure 评估 GUI 智能体完成 34 款冒险游戏剧情线的能力，并结合自动化游戏评判器与 COAST 框架；后者保存长期线索记忆，用于规划和完成连续目标。

- [FlashAdventure](https://awesomecua.com/zh/resources/github-ahnjaewoo-flashadventure/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/ahnjaewoo/FlashAdventure/HEAD/README.md)

## [MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents](https://awesomecua.com/zh/resources/arxiv-2508-21475/)

提出多模态浏览基准 MMSearch-Plus，要求迭代图文检索；配套智能体框架可标记和裁剪图像，以开展定向搜索。

- [MMSearch-Plus](https://awesomecua.com/zh/resources/github-mmsearch-plus-mmsearch-plus/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/mmsearch-plus/MMSearch-Plus/HEAD/README.md)
- [Cie1/MMSearch-Plus](https://awesomecua.com/zh/resources/url-8fd4e25ae5c0fe619969/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/Cie1/MMSearch-Plus)

## [CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2508-20096/)

CODA 结合通用规划器与专用 GUI 执行器，通过解耦的 GRPO 训练应用专用规划器，再利用成功的专用轨迹监督训练统一规划器，并在 4 个 ScienceBoard 应用上评估。

- [CODA](https://awesomecua.com/zh/resources/github-openixclab-coda/) — 框架 · [来源证据](https://raw.githubusercontent.com/OpenIXCLab/CODA/HEAD/README.md)
- [CODA-PLANNER-TARS-32B](https://awesomecua.com/zh/resources/url-cf16d0a4a05ea7270ffa/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenIXCLab/CODA-PLANNER-TARS-32B)

## [AppAgent-Pro: A Proactive GUI Agent System for Multidomain Information Integration and User Assistance](https://awesomecua.com/zh/resources/arxiv-2508-18689/)

提出一种主动式 GUI 助手，根据用户请求及预期的信息需求，跨领域收集信息。

- [AppAgent Pro](https://awesomecua.com/zh/resources/github-laokuize-appagent-pro/) — 智能体 · [来源证据](https://raw.githubusercontent.com/LaoKuiZe/AppAgent-Pro/HEAD/README.md)

## [InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency](https://awesomecua.com/zh/resources/arxiv-2508-18265/)

提出多模态模型系列 InternVL3.5，采用 Cascade RL 训练，旨在提高推理效率；GUI 交互也被列为其能力之一。

- [InternVL3_5-4B-HF](https://awesomecua.com/zh/resources/url-0585c680192ac22d2735/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-4B-HF)
- [InternVL3_5-38B-HF](https://awesomecua.com/zh/resources/url-099960c12bbdd80f73cb/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B-HF)
- [InternVL3_5-8B-HF](https://awesomecua.com/zh/resources/url-15c5435c1cb4f9e6b737/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B-HF)
- [InternVL3_5-30B-A3B-HF](https://awesomecua.com/zh/resources/url-2ebcbc24ecbdc2db22fb/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B-HF)
- [InternVL3_5-38B](https://awesomecua.com/zh/resources/url-33b35b47d8bb269d84a1/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B)
- [InternVL3_5-30B-A3B](https://awesomecua.com/zh/resources/url-4d7042b462e937c33406/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-30B-A3B)
- [InternVL3_5-14B-HF](https://awesomecua.com/zh/resources/url-5304880559ad79f5b797/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B-HF)
- [InternVL3_5-14B](https://awesomecua.com/zh/resources/url-558abdb3eb20b922e01b/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-14B)
- [InternVL3_5-241B-A28B-HF](https://awesomecua.com/zh/resources/url-7c6929dcffffe6553ea9/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B-HF)
- [InternVL3_5-8B](https://awesomecua.com/zh/resources/url-7f7d17a0873e6ffda2b9/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B)
- [InternVL3_5-1B-HF](https://awesomecua.com/zh/resources/url-98f37e375e57e027af64/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B-HF)
- [InternVL3_5-1B](https://awesomecua.com/zh/resources/url-b75abe232c389788d2c4/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-1B)
- [InternVL3_5-GPT-OSS-20B-A4B-Preview-HF](https://awesomecua.com/zh/resources/url-c09ce6d4ca2ddaf02fae/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-GPT-OSS-20B-A4B-Preview-HF)
- [InternVL3_5-241B-A28B](https://awesomecua.com/zh/resources/url-c8d93b1c274acd679694/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B)
- [InternVL3_5-2B-HF](https://awesomecua.com/zh/resources/url-d1f0e13ad96c108ef09b/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B-HF)
- [InternVL3_5-2B](https://awesomecua.com/zh/resources/url-feaad5e9f2497d1ed9ca/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/InternVL3_5-2B)

## [Mobile-Agent-v3: Fundamental Agents for GUI Automation](https://awesomecua.com/zh/resources/arxiv-2508-15144/)

提出 GUI-Owl 模型和 Mobile-Agent-v3 编排机制，利用环境生成的轨迹支持 GUI 能力。

- [Mobile-Agent](https://awesomecua.com/zh/resources/github-x-plug-mobileagent/) — 智能体 · [来源证据](https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/README.md)
- [GUI-Owl 32B](https://awesomecua.com/zh/resources/url-a92e7dfcdfdcacb2e634/) — 模型 · [来源证据](https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md)
- [GUI-Owl 7B](https://awesomecua.com/zh/resources/url-aeb32973694f91ad9920/) — 模型 · [来源证据](https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md)
- [GUI-Owl 7B Desktop-RL](https://awesomecua.com/zh/resources/url-b01a78c76299196e3df1/) — 模型 · [来源证据](https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md)

## [V2P: Visual Attention Calibration for GUI Grounding via Background Suppression and Center Peaking](https://awesomecua.com/zh/resources/arxiv-2508-13634/)

V2P 通过抑制对背景区域的注意力、突出目标元素中心来训练 GUI 定位，以随目标尺寸变化的高斯热图表示目标重要性，并在 ScreenSpot-v2 和 ScreenSpot-Pro 上评估各组件的作用。

- [V2P-7B](https://awesomecua.com/zh/resources/url-a815c128627d11011e89/) — 模型 · [来源证据](https://huggingface.co/api/models/inclusionAI/V2P-7B)

## [ComputerRL: Scaling End-to-End Online Reinforcement Learning for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2508-14040/)

结合 API 与 GUI 操作、分布式桌面强化学习和交替监督训练，以应对训练不稳定问题。

- [ComputerRL](https://awesomecua.com/zh/resources/github-thudm-computerrl/) — 框架 · [来源证据](https://raw.githubusercontent.com/THUDM/ComputerRL/HEAD/README.md)

## [WebMall -- A Multi-Shop Benchmark for Evaluating Web Agents](https://awesomecua.com/zh/resources/arxiv-2508-13024/)

WebMall 提供 4 家产品数据各异的模拟网店，用于比价购物、相关商品搜索和结账任务；在固定的离线环境中，评估采用不同观察格式与记忆配置的网页智能体。

- [WebMall](https://awesomecua.com/zh/resources/github-wbsg-uni-mannheim-webmall/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/wbsg-uni-mannheim/WebMall/HEAD/README.md)

## [UI-Venus Technical Report: Building High-performance UI Agents with RFT](https://awesomecua.com/zh/resources/arxiv-2508-10833/)

利用筛选后的交互数据、奖励设计和强化微调，研究基于截图的 GUI 定位与导航。

- [UI-Venus](https://awesomecua.com/zh/resources/github-inclusionai-ui-venus/) — 模型 · [来源证据](https://raw.githubusercontent.com/inclusionAI/UI-Venus/HEAD/README.md)
- [inclusionAI/UI-Venus-Navi-7B](https://awesomecua.com/zh/resources/url-6d36e088ada02184c6bc/) — 模型 · [来源证据](https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-7B)
- [UI-Venus-Navi-72B](https://awesomecua.com/zh/resources/url-80ec6c9a43360adbbc6b/) — 模型 · [来源证据](https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-72B)

## [OpenCUA: Open Foundations for Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2508-09123/)

介绍用于开放计算机使用模型的演示收集基础设施、AgentNet 数据集和训练流水线。

- [OpenCUA](https://awesomecua.com/zh/resources/github-xlang-ai-opencua/) — 模型 · [来源证据](https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/README.md)
- [OpenCUA-7B](https://awesomecua.com/zh/resources/url-2803eda78cff23fb63cc/) — 模型 · [来源证据](https://huggingface.co/api/models/xlangai/OpenCUA-7B)
- [OpenCUA 72B](https://awesomecua.com/zh/resources/url-4a0b1692589594745a3c/) — 模型 · [来源证据](https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md)
- [OpenCUA-7B-exl2](https://awesomecua.com/zh/resources/url-76f3981d219bb87b4eea/) — 模型 · [来源证据](https://huggingface.co/api/models/sujitvasanth/OpenCUA-7B-exl2)
- [AgentNet](https://awesomecua.com/zh/resources/url-964d70c40bfc5ca8e1ee/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/xlangai/AgentNet)
- [OpenCUA 32B](https://awesomecua.com/zh/resources/url-ad7f176848fd84de64e2/) — 模型 · [来源证据](https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md)

## [Test-Time Reinforcement Learning for GUI Grounding via Region Consistency](https://awesomecua.com/zh/resources/arxiv-2508-05615/)

GUI-RC 将多个定位预测汇入空间投票网格，选出一致区域；GUI-RCPO 再将与该区域的一致程度转化为奖励，用于在无标签 GUI 截图上进行测试时策略更新。

- [GUI-RC / GUI-RCPO](https://awesomecua.com/zh/resources/github-zju-real-gui-rcpo/) — 框架 · [来源证据](https://raw.githubusercontent.com/zju-real/gui-rcpo/HEAD/README.md)

## [InfiGUI-G1: Advancing GUI Grounding with Adaptive Exploration Policy Optimization](https://awesomecua.com/zh/resources/arxiv-2508-05731/)

利用多个候选答案和自适应探索奖励，改善 GUI 定位中的空间与语义对齐。

- [InfiGUI-G1](https://awesomecua.com/zh/resources/github-infixai-infigui-g1/) — 模型 · [来源证据](https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/README.md)
- [InfiGUI-G1-3B](https://awesomecua.com/zh/resources/url-3888a4042043fb547705/) — 模型 · [来源证据](https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-3B)
- [InfiGUI-G1 7B](https://awesomecua.com/zh/resources/url-d70a755e3b2102f25f34/) — 模型 · [来源证据](https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md)

## [HarmonyGuard: Toward Safety and Utility in Web Agents via Adaptive Policy Enhancement and Dual-Objective Optimization](https://awesomecua.com/zh/resources/arxiv-2508-04010/)

HarmonyGuard 是面向开放网络操作的多智能体框架，可更新安全策略，并在执行任务时兼顾安全与任务完成。

- [HarmonyGuard](https://awesomecua.com/zh/resources/github-yurunchen-harmonyguard/) — 框架 · [来源证据](https://raw.githubusercontent.com/YurunChen/HarmonyGuard/HEAD/readme.md)

## [VeriWeb: Verifiable Long-Chain Web Benchmark for Agentic Information-Seeking](https://awesomecua.com/zh/resources/arxiv-2508-04026/)

VeriWeb 是长链式网页信息查找基准，将任务拆成可核查的子任务，并为每项任务提供人工标注的完整轨迹。

- [VeriGUI](https://awesomecua.com/zh/resources/url-8477ada5b7de1d399c9d/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI)

## [Evolving in Tasks: Empowering the Multi-modality Large Language Model as the Computer Use Agent](https://awesomecua.com/zh/resources/arxiv-2508-04037/)

Self-Evolution Agent 结合自动生成可验证的计算机使用轨迹与逐步强化学习，进行长程任务训练；还介绍一种无需额外训练阶段即可整合定位和规划能力的模型增强方法。

- [lenovo TianXi_Action_Grounding_7B](https://awesomecua.com/zh/resources/github-ancolie18-lenovo-pcie-grounding/) — 工具 · [来源证据](https://raw.githubusercontent.com/Ancolie18/Lenovo-PCIE-Grounding/HEAD/README.md)
- [TianXi_Action_Grounding_7B](https://awesomecua.com/zh/resources/url-f644200c18bea88da7b3/) — 模型 · [来源证据](https://huggingface.co/api/models/tangliang/TianXi_Action_Grounding_7B)

## [SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://awesomecua.com/zh/resources/arxiv-2508-04700/)

SEAgent 借助世界状态评估器和自动生成的任务课程探索陌生软件，通过对抗模仿和 GRPO 从成功与失败的交互中学习，再将专门经验整合为通用智能体，在 5 个 OSWorld 软件环境中评估。

- [SEAgent](https://awesomecua.com/zh/resources/github-sunzey-seagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/SunzeY/SEAgent/HEAD/README.md)
- [SEAgent-1.0-7B](https://awesomecua.com/zh/resources/url-62688de46b172fb0c746/) — 模型 · [来源证据](https://huggingface.co/api/models/Zery/SEAgent-1.0-7B)
- [CUA_World_State_Model](https://awesomecua.com/zh/resources/url-f0ffbdc41c9dca4c585f/) — 模型 · [来源证据](https://huggingface.co/api/models/Zery/CUA_World_State_Model)

## [CoAct-1: Computer-using Multi-Agent System with Coding Actions](https://awesomecua.com/zh/resources/arxiv-2508-03923/)

CoAct-1 在 GUI 操作员和执行 Python 或 Bash 的程序员之间分配子任务。其 OSWorld 评估研究混合操作空间：脚本处理适合的文件与数据操作，视觉交互处理其他步骤。

- [CoAct-1 Implementation](https://awesomecua.com/zh/resources/github-buiilding-coact-1-implementation/) — 框架 · [来源证据](https://raw.githubusercontent.com/buiilding/Coact-1_Implementation/HEAD/README.md)

## [Phi-Ground Tech Report: Advancing Perception in GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2507-23779/)

报告一系列 GUI 定位模型，以及涉及源数据、感知训练和坐标预测的实证设计选择。

- [Phi-Ground](https://awesomecua.com/zh/resources/github-microsoft-phi-ground/) — 模型 · [来源证据](https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md)

## [UI-AGILE: Advancing GUI Agents with Effective Reinforcement Learning and Precise Inference-Time Grounding](https://awesomecua.com/zh/resources/arxiv-2507-22025/)

结合面向定位的奖励与采样改进，以及推理阶段的图像分解和目标选择。

- [UI-AGILE](https://awesomecua.com/zh/resources/github-kdegroup-ui-agile/) — 模型 · [来源证据](https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/README.md)
- [UI-AGILE-Data](https://awesomecua.com/zh/resources/url-41abb1b7206689cf5057/) — 数据集 · [来源证据](https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md)
- [KDEGroup/UI-AGILE-3B](https://awesomecua.com/zh/resources/url-642671eabef44827b7de/) — 模型 · [来源证据](https://huggingface.co/api/models/KDEGroup/UI-AGILE-3B)
- [UI-AGILE checkpoint](https://awesomecua.com/zh/resources/url-b94e285c3f757e2d0f3a/) — 模型 · [来源证据](https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md)

## [OS-MAP: How Far Can Computer-Using Agents Go in Breadth and Depth?](https://awesomecua.com/zh/resources/arxiv-2507-19132/)

OS-MAP 按 5 级自动化分类和用户需求层级，组织涵盖 15 个应用的 416 项计算机使用任务。该基准区分所需自主程度与泛化范围，以分析任务要求提高时智能体面临的困难。

- [OS-Map](https://awesomecua.com/zh/resources/github-os-copilot-os-map/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/README.md)

## [MMBench-GUI: Hierarchical Multi-Platform Evaluation Framework for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2507-19478/)

MMBench-GUI 在 6 个明确指定的桌面、移动和网页平台上评估界面理解、元素定位、任务自动化与协作，并提出 Efficiency-Quality Area 指标，同时考察在线 GUI 自动化的执行效率和任务质量。

- [MMBench-GUI](https://awesomecua.com/zh/resources/github-open-compass-mmbench-gui/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/open-compass/MMBench-GUI/HEAD/README.md)
- [OpenGVLab/MMBench-GUI](https://awesomecua.com/zh/resources/url-339e28b1f939ae45f9fe/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/OpenGVLab/MMBench-GUI)

## [Screen2AX: Vision-Based Approach for Automatic macOS Accessibility Generation](https://awesomecua.com/zh/resources/arxiv-2507-16704/)

Screen2AX 从 macOS 截图生成层级式无障碍元数据，并提供数据集和桌面智能体评测基准 Screen2AX-Task。

- [Screen2AX-Tree](https://awesomecua.com/zh/resources/url-3821c0d8516819a50d28/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree)
- [yolov11l-ui-elements-detection](https://awesomecua.com/zh/resources/url-5d824526d56f179d3d51/) — 模型 · [来源证据](https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection)
- [YOLOv11l — UI Groups Detection](https://awesomecua.com/zh/resources/url-6106415bee936ef638aa/) — 模型 · [来源证据](https://huggingface.co/api/models/MacPaw/yolov11l-ui-groups-detection)
- [Screen2AX-Group](https://awesomecua.com/zh/resources/url-6680e812b94c168e6bed/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group)
- [Screen2AX-Task](https://awesomecua.com/zh/resources/url-97d846b5b33235f566a1/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task)
- [blip-icon-captioning](https://awesomecua.com/zh/resources/url-b4a01331e3e89e1bae9d/) — 模型 · [来源证据](https://huggingface.co/api/models/MacPaw/blip-icon-captioning)
- [Screen2AX-Element](https://awesomecua.com/zh/resources/url-e96299566d12e790422e/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element)

## [GUI-G$^2$: Gaussian Reward Modeling for GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2507-15846/)

GUI-G2 以高斯点奖励和空间覆盖奖励取代二元定位奖励，并根据元素尺寸自适应调整方差，为不同大小的目标提供连续训练反馈，在 ScreenSpot 系列基准上进行评估。

- [GUI-G2](https://awesomecua.com/zh/resources/github-zju-real-gui-g2/) — 模型 · [来源证据](https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/HEAD/README.md)
- [GUI-G2 7B](https://awesomecua.com/zh/resources/url-90eea6f6d099a3297850/) — 模型 · [来源证据](https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md)
- [GUI-G2 3B](https://awesomecua.com/zh/resources/url-d80fa13b647c4020a755/) — 模型 · [来源证据](https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md)

## [MobileUse: A GUI Agent with Hierarchical Reflection for Autonomous Mobile Operation](https://awesomecua.com/zh/resources/arxiv-2507-16853/)

MobileUse 按操作和任务两个时间尺度反思错误，按需触发反思，并主动探索陌生应用；在 AndroidWorld 和 AndroidLab 上评估该移动端执行框架，还介绍了实体设备操作工具包。

- [Mobile Use](https://awesomecua.com/zh/resources/github-madeagents-mobile-use/) — 智能体 · [来源证据](https://raw.githubusercontent.com/MadeAgents/mobile-use/HEAD/README.md)

## [WebGuard: Building a Generalizable Guardrail for Web Agents](https://awesomecua.com/zh/resources/arxiv-2507-14293/)

提出 WebGuard，一个经人工标注、用于预测网站状态变更操作的结果与风险等级的数据集，并提供泛化能力划分，评估专门的防护模型。

- [WebGuard](https://awesomecua.com/zh/resources/github-osu-nlp-group-webguard/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/README.md)
- [WebGuard](https://awesomecua.com/zh/resources/url-df10c80a8da55773154d/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/osunlp/WebGuard)

## [GTA1: GUI Test-time Scaling Agent](https://awesomecua.com/zh/resources/arxiv-2507-05791/)

GTA1 在每个 GUI 操作步骤采样多个候选操作，并由评判模型作出选择；另用强化学习训练定位模型，将选定操作映射到视觉目标，连接规划阶段的搜索与点击定位。

- [GTA1: GUI Test-time Scaling Agent](https://awesomecua.com/zh/resources/github-yan98-gta1/) — 智能体 · [来源证据](https://raw.githubusercontent.com/Yan98/GTA1/HEAD/README.md)
- [Salesforce Grounding Dataset](https://awesomecua.com/zh/resources/url-1001251b5a7729988118/) — 数据集 · [来源证据](https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md)
- [GTA1-7B-2507](https://awesomecua.com/zh/resources/url-691c52679bb1d3521db7/) — 模型 · [来源证据](https://huggingface.co/api/models/Salesforce/GTA1-7B-2507)
- [GTA1 cleaned grounding dataset](https://awesomecua.com/zh/resources/url-d46306ac1d0a0cce573a/) — 数据集 · [来源证据](https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md)

## [OpenAgentSafety: A Comprehensive Framework for Evaluating Real-World AI Agent Safety](https://awesomecua.com/zh/resources/arxiv-2507-06134/)

使用基于规则和基于模型的评估方法，评估智能体使用真实浏览器、代码、文件系统、shell 及消息工具时的安全性。

- [OpenAgentSafety](https://awesomecua.com/zh/resources/github-open-agent-safety-openagentsafety/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/Open-Agent-Safety/OpenAgentSafety/HEAD/README.md)

## [Less is More: Empowering GUI Agent with Context-Aware Simplification](https://awesomecua.com/zh/resources/arxiv-2507-03730/)

SimpAgent 用视觉掩码去除分散注意力的界面元素，并依据一致性指导压缩交互历史；研究在网页和移动端 GUI 导航中评估这两种上下文精简方式。

- [SimpAgent](https://awesomecua.com/zh/resources/github-jiutian-vl-simpagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/JiuTian-VL/SimpAgent/HEAD/README.md)

## [GLM-4.5V and GLM-4.1V-Thinking: Towards Versatile Multimodal Reasoning with Scalable Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2507-01006/)

报告 GLM-4.1V-Thinking、GLM-4.5V 和 GLM-4.6V 视觉语言模型系列及基于课程的 RL 训练；GUI 智能体是评测任务之一。

- [GLM-V](https://awesomecua.com/zh/resources/github-zai-org-glm-v/) — 模型 · [来源证据](https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/README.md)
- [GLM-4.6V](https://awesomecua.com/zh/resources/url-17d4fdd26efe4e3b9e05/) — 模型 · [来源证据](https://huggingface.co/api/models/zai-org/GLM-4.6V)
- [GLM-4.6V-FP8](https://awesomecua.com/zh/resources/url-2a99aab63fc1fe65610d/) — 模型 · [来源证据](https://huggingface.co/api/models/zai-org/GLM-4.6V-FP8)
- [GLM-4.5V](https://awesomecua.com/zh/resources/url-97cfbcd45f879ff71499/) — 模型 · [来源证据](https://huggingface.co/api/models/zai-org/GLM-4.5V)
- [GLM-4.6V-Flash](https://awesomecua.com/zh/resources/url-e01fe95f620b699bb00d/) — 模型 · [来源证据](https://huggingface.co/api/models/zai-org/GLM-4.6V-Flash)
- [GLM-4.5V-FP8](https://awesomecua.com/zh/resources/url-fc8bf80ab1747df651ca/) — 模型 · [来源证据](https://huggingface.co/api/models/zai-org/GLM-4.5V-FP8)

## [ZonUI-3B: A Lightweight Vision-Language Model for Cross-Resolution GUI Grounding](https://awesomecua.com/zh/resources/arxiv-2506-23491/)

ZonUI-3B 使用精选的 24,000 个移动端、桌面端和网页截图样例训练 GUI 定位；先进行跨平台学习，再针对高分辨率图像训练，并对数据多样性和冗余样例进行消融分析。

- [ZonUI-3B](https://awesomecua.com/zh/resources/github-han1018-zonui-3b/) — 工具 · [来源证据](https://raw.githubusercontent.com/Han1018/ZonUI-3B/HEAD/README.md)
- [ShowUI-web-8K](https://awesomecua.com/zh/resources/url-2260aaa47fb9c63bb917/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/zonghanHZH/ShowUI-web-8k)
- [AMEX-8K](https://awesomecua.com/zh/resources/url-2b4b3e54d9c52f868b4e/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/zonghanHZH/AMEX-8k)
- [UGround-V1-8k](https://awesomecua.com/zh/resources/url-8d87e8ae53971aab3f8d/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/zonghanHZH/UGround-V1-8k)
- [ZonUI-3B checkpoint](https://awesomecua.com/zh/resources/url-c8c046847f829fea4821/) — 模型 · [来源证据](https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md)

## [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://awesomecua.com/zh/resources/arxiv-2506-20332/)

通过分阶段课程训练移动端智能体，依次进行响应格式对齐、利用操作反馈训练，以及交互式任务级训练。

- [Mobile-R1 trajectory sample](https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/) — 数据集 · [来源证据](https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)

## [OSWorld-Human: Benchmarking the Efficiency of Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-16042/)

OSWorld-Human 为 OSWorld 加入由人确定的操作轨迹，以评估桌面计算机使用智能体的效率；研究比较 16 个智能体，并分析模型调用延迟、任务执行中单步耗时的变化及多余操作步数。

- [OSWorld-Human](https://awesomecua.com/zh/resources/github-wuklab-osworld-human/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/WukLab/osworld-human/HEAD/README.md)

## [AgentSynth: Scalable Task Generation for Generalist Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-14205/)

AgentSynth 将易于生成的子任务组合成难度可调的较长计算机使用任务与轨迹，并以子任务数量考察任务复杂度增加时智能体成功率的变化。

- [AgentSynth task-generation pipeline](https://awesomecua.com/zh/resources/github-sunblaze-ucb-agentsynth/) — 框架 · [来源证据](https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md)
- [AgentSynth tasks and trajectories](https://awesomecua.com/zh/resources/url-58a209f2b3b970916396/) — 数据集 · [来源证据](https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md)

## [GUI-Robust: A Comprehensive Dataset for Testing GUI Agent Robustness in Real-World Anomalies](https://awesomecua.com/zh/resources/arxiv-2506-14477/)

构建包含真实交互异常的 GUI 任务数据，并评估这些条件下智能体行为的变化。

- [GUI-Robust](https://awesomecua.com/zh/resources/github-chessbean1-gui-robust/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/chessbean1/GUI-Robust/HEAD/README.md)
- [kuangtie/GUI-Robust](https://awesomecua.com/zh/resources/url-369456114b26b0ff0a05/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/kuangtie/GUI-Robust)

## [OS-Harm: A Benchmark for Measuring Safety of Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-14866/)

OS-Harm 为 OSWorld 增加涵盖用户滥用、提示注入和模型不当行为的任务，同时评估任务完成情况与安全性。

- [OS-Harm](https://awesomecua.com/zh/resources/github-tml-epfl-os-harm/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md)

## [DiMo-GUI: Advancing Test-time Scaling in GUI Grounding via Modality-Aware Visual Reasoning](https://awesomecua.com/zh/resources/arxiv-2507-00008/)

区分文字和图标类 UI 元素，并迭代聚焦视觉区域，在不额外训练模型的情况下改进定位。

- [DiMo-GUI](https://awesomecua.com/zh/resources/github-vivo-dimo-gui/) — 模型 · [来源证据](https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/readme.md)

## [Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System](https://awesomecua.com/zh/resources/arxiv-2506-08972/)

UI-NEXUS 评估本地工具应用及中英文在线服务应用中的组合式移动端任务；AGENT-NEXUS 将这些长任务拆成独立的原子子任务，以研究超出单个界面或短操作链的泛化能力。

- [UI-NEXUS](https://awesomecua.com/zh/resources/github-starwalkin-ui-nexus/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/README.md)

## [MCPWorld: A Unified Benchmarking Testbed for API, GUI, and Hybrid Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-07672/)

MCPWorld 在源码可插桩且可扩展 MCP 支持的应用中设置 201 项任务，评估 API、GUI 及混合式计算机使用智能体；它根据应用行为核验任务完成情况，并提供支持 GPU 的容器化测试环境。

- [MCPWorld](https://awesomecua.com/zh/resources/github-saagent-mcpworld/) — 评测基准 · [来源证据](https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=600&max_results=100&sortBy=submittedDate&sortOrder=descending)

## [GUI-Reflection: Empowering Multimodal GUI Models with Self-Reflection Behavior](https://awesomecua.com/zh/resources/arxiv-2506-08012/)

GUI-Reflection 从成功轨迹中合成反思与纠错样例，并为这些行为设置专门的学习阶段；还引入反思任务集、用于在线收集数据的移动端环境和迭代式反思调优。

- [GUI Reflection](https://awesomecua.com/zh/resources/github-penghao-wu-gui-reflection/) — 智能体 · [来源证据](https://raw.githubusercontent.com/penghao-wu/GUI_Reflection/HEAD/README.md)
- [GUI_Reflection_SFT_train](https://awesomecua.com/zh/resources/url-528f6fe128b77e9615aa/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/craigwu/GUI_Reflection_SFT_train)
- [GUI_Reflection_Task_Suite_Benchmark](https://awesomecua.com/zh/resources/url-dea0e09f027df704ca00/) — 评测基准 · [来源证据](https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_Benchmark)
- [GUI_Reflection_Task_Suite_train](https://awesomecua.com/zh/resources/url-f68939821685c9dcc78c/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_train)

## [Go-Browse: Training Web Agents with Structured Exploration](https://awesomecua.com/zh/resources/arxiv-2506-03533/)

Go-Browse 将网页环境探索建模为图搜索，使信息可在不同数据收集过程中复用；它在 WebArena 上收集 10,000 条成功轨迹和 40,000 个交互步骤，并用于微调网页智能体。

- [Go-Browse](https://awesomecua.com/zh/resources/github-apga-go-browse/) — 框架 · [来源证据](https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md)
- [nnetnav-wa-qwen-7B](https://awesomecua.com/zh/resources/url-511ba336435d406f3761/) — 模型 · [来源证据](https://huggingface.co/api/models/apurvaga/nnetnav-wa-qwen-7B)
- [Go-Browse-WA processed data](https://awesomecua.com/zh/resources/url-a13a187bc058fbb4f6af/) — 数据集 · [来源证据](https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md)
- [Go-Browse WebArena Qwen 7B](https://awesomecua.com/zh/resources/url-db1b7b7efe3755ae5693/) — 模型 · [来源证据](https://huggingface.co/apurvaga/go-browse-wa-qwen-7B/raw/main/README.md)

## [macOSWorld: A Multilingual Interactive Benchmark for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2506-04135/)

macOSWorld 涵盖 30 个应用中的 202 项交互任务，指令和操作系统界面提供 5 种语言，用于评估 GUI 智能体在 macOS 上的工作流程，并设有单独的欺骗攻击测试子集。

- [macOSWorld](https://awesomecua.com/zh/resources/github-showlab-macosworld/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/showlab/macosworld/HEAD/readme.md)

## [Surfer-H Meets Holo1: Cost-Efficient Web Agent Powered by Open Weights](https://awesomecua.com/zh/resources/arxiv-2506-02865/)

介绍网页智能体 Surfer-H 及与之配套的 Holo1 视觉语言模型系列，后者用网页内容、合成样例和智能体生成的数据训练；工作提出用于网页界面定位的 WebClick，并在 WebVoyager 上评估浏览器任务执行。

- [H.AI cookbook](https://awesomecua.com/zh/resources/github-hcompai-hai-cookbook/) — 学习资源 · [来源证据](https://raw.githubusercontent.com/hcompai/hai-cookbook/HEAD/README.md)
- [Surfer-H-CLI](https://awesomecua.com/zh/resources/github-hcompai-surfer-h-cli/) — 智能体 · [来源证据](https://raw.githubusercontent.com/hcompai/surfer-h-cli/HEAD/README.md)
- [WebClick](https://awesomecua.com/zh/resources/url-5e2bd1b3398974b79c9c/) — 评测基准 · [来源证据](https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md)
- [Holo1 3B](https://awesomecua.com/zh/resources/url-c491c446a71cac1def66/) — 模型 · [来源证据](https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/README.md)
- [Holo1 7B](https://awesomecua.com/zh/resources/url-f35cfcbaeb79663eabeb/) — 模型 · [来源证据](https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md)

## [GUI-Actor: Coordinate-Free Visual Grounding for GUI Agents](https://awesomecua.com/zh/resources/arxiv-2506-03143/)

使用基于注意力的动作头和验证器选择相关屏幕区域，无需以文本形式生成坐标。

- [GUI-Actor](https://awesomecua.com/zh/resources/github-microsoft-gui-actor/) — 模型 · [来源证据](https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md)
- [GUI-Actor 3B Qwen2.5-VL](https://awesomecua.com/zh/resources/url-0c400260635b7e4ab7c0/) — 模型 · [来源证据](https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md)
- [GUI-Actor-7B-Qwen2.5-VL](https://awesomecua.com/zh/resources/url-3e58eecd59c404508757/) — 模型 · [来源证据](https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2.5-VL)
- [GUI-Actor-3B-Qwen2.5-VL-LiteTrain](https://awesomecua.com/zh/resources/url-5e0c3173aea8edd0f3b7/) — 模型 · [来源证据](https://huggingface.co/api/models/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain)
- [GUI-Actor data](https://awesomecua.com/zh/resources/url-66096ad4057a3d3726f5/) — 数据集 · [来源证据](https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md)
- [GUI-Actor-Verifier-2B](https://awesomecua.com/zh/resources/url-9b653775f6b9270304d3/) — 模型 · [来源证据](https://huggingface.co/api/models/microsoft/GUI-Actor-Verifier-2B)
- [GUI-Actor 2B Qwen2-VL](https://awesomecua.com/zh/resources/url-e42b286fd85b62bd7bb1/) — 模型 · [来源证据](https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md)
- [qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain](https://awesomecua.com/zh/resources/url-fe85a6b4ffbdb303f382/) — 模型 · [来源证据](https://huggingface.co/api/models/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain)

## [AgentCPM-GUI: Building Mobile-Use Agents with Reinforcement Fine-Tuning](https://awesomecua.com/zh/resources/arxiv-2506-01391/)

结合定位预训练、双语交互轨迹和强化微调，训练移动 GUI 操作能力。

- [AgentCPM-GUI](https://awesomecua.com/zh/resources/github-openbmb-agentcpm-gui/) — 模型 · [来源证据](https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/README.md)
- [AgentCPM-GUI 8B checkpoint](https://awesomecua.com/zh/resources/url-8ef3985dce697e5feea9/) — 模型 · [来源证据](https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md)
- [CAGUI](https://awesomecua.com/zh/resources/url-a06622da7688e3718a7b/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/openbmb/CAGUI)

## [MLA-Trust: Benchmarking Trustworthiness of Multimodal LLM Agents in GUI Environments](https://awesomecua.com/zh/resources/arxiv-2506-01616/)

通过交互式网页和移动 GUI 任务，对多模态 LLM 智能体的真实性、可控性、安全性和隐私保护进行基准评估。

- [MLA-Trust](https://awesomecua.com/zh/resources/github-thu-ml-mla-trust/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/README.md)

## [RiOSWorld: Benchmarking the Risk of Multimodal Computer-Use Agents](https://awesomecua.com/zh/resources/arxiv-2506-00618/)

提出计算机使用风险基准 RiOSWorld，区分来自用户与环境的威胁，并在网页及其他计算机应用中评估风险目标意图和目标完成情况。

- [RiOSWorld](https://awesomecua.com/zh/resources/github-yjyddq-riosworld/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/yjyddq/RiOSWorld/HEAD/README.md)

## [VideoCAD: A Dataset and Model for Learning Long-Horizon 3D CAD UI Interactions from Video](https://awesomecua.com/zh/resources/arxiv-2505-24838/)

提出合成的 CAD 交互视频、从视频学习界面操作的模型，以及用于评估空间推理和长时程推理的任务。

- [VideoCAD training and evaluation code](https://awesomecua.com/zh/resources/github-ghadinehme-videocad/) — 框架 · [来源证据](https://arxiv.org/html/2505.24838v2)
- [VideoCAD data](https://awesomecua.com/zh/resources/url-2b5dead3172c0b70da7e/) — 数据集 · [来源证据](https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md)

## [Open CaptchaWorld: A Comprehensive Web-based Platform for Testing and Benchmarking Multimodal LLM Agents](https://awesomecua.com/zh/resources/arxiv-2505-24878/)

Open CaptchaWorld 通过交互式浏览器 CAPTCHA 谜题评估多模态智能体；其基准区分任务是否成功与完成谜题所需的视觉推理和交互深度。

- [Open CaptchaWorld](https://awesomecua.com/zh/resources/github-metaagentx-opencaptchaworld/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/MetaAgentX/OpenCaptchaWorld/HEAD/README.md)

## [ZeroGUI: Automating Online GUI Learning at Zero Human Cost](https://awesomecua.com/zh/resources/arxiv-2505-23762/)

结合生成的任务、估计的成功奖励和在线强化学习，自动训练 GUI 智能体的交互能力。

- [ZeroGUI](https://awesomecua.com/zh/resources/github-opengvlab-zerogui/) — 框架 · [来源证据](https://raw.githubusercontent.com/OpenGVLab/ZeroGUI/HEAD/README.md)
- [ZeroGUI-OSWorld-7B](https://awesomecua.com/zh/resources/url-6ea345c7ba56049476e8/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/ZeroGUI-OSWorld-7B)
- [ZeroGUI-AndroidLab-7B](https://awesomecua.com/zh/resources/url-f75cab7180d8f5264606/) — 模型 · [来源证据](https://huggingface.co/api/models/OpenGVLab/ZeroGUI-AndroidLab-7B)

## [RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments](https://awesomecua.com/zh/resources/arxiv-2505-21936/)

RedTeamCUA 结合虚拟机操作系统环境和容器化网站，开展跨两类界面的受控提示注入测试。RTC-Bench 包含 864 个样例，可让智能体从注入点开始执行，以区分受攻击影响与导航失败。

- [RedTeamCUA](https://awesomecua.com/zh/resources/github-osu-nlp-group-redteamcua/) — 框架 · [来源证据](https://raw.githubusercontent.com/OSU-NLP-Group/RedTeamCUA/HEAD/README.md)

## [UI-Evol: Automatic Knowledge Evolving for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2505-21964/)

UI-Evol 从智能体交互中提取动作序列，并对照这些轨迹审查外部指导；在 OSWorld 上的评估考察修订后的操作知识如何影响任务执行和行为一致性。

- [FIVE-UI-Evol](https://awesomecua.com/zh/resources/github-microsoft-five-ui-evol/) — 框架 · [来源证据](https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-Evol/README.md)

## [WorkForceAgent-R1: Incentivizing Reasoning Capability in LLM-based Web Agents via Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2505-22942/)

使用针对输出结构和动作正确性的规则奖励，训练面向企业网页导航的推理能力。

- [WorkForceAgent-R1](https://awesomecua.com/zh/resources/github-night-chen-workforceagent-r1/) — 框架 · [来源证据](https://raw.githubusercontent.com/night-chen/WorkForceAgent-R1/HEAD/README.md)

## [UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents](https://awesomecua.com/zh/resources/arxiv-2505-21496/)

UI-Genie 共同改进移动 GUI 智能体与奖励模型；后者结合截图和交互历史提供动作级与任务级反馈。其数据流程利用规则验证、受损轨迹和困难负例，支持奖励引导的探索与迭代训练。

- [UI-Genie](https://awesomecua.com/zh/resources/github-euphoria16-ui-genie/) — 框架 · [来源证据](https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md)
- [UI-Genie trajectory data](https://awesomecua.com/zh/resources/url-2e1927450da2183a5abe/) — 数据集 · [来源证据](https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md)
- [UI-Genie Agent 3B](https://awesomecua.com/zh/resources/url-43d811a5957d8effb7ed/) — 模型 · [来源证据](https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/README.md)
- [UI-Genie Agent 7B](https://awesomecua.com/zh/resources/url-6d959b58bd4a2e98e417/) — 模型 · [来源证据](https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md)
- [UI-Genie reward data](https://awesomecua.com/zh/resources/url-84e5aeeffaf561baa966/) — 数据集 · [来源证据](https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md)

## [AdInject: Real-World Black-Box Attacks on Web Agents via Advertising Delivery](https://awesomecua.com/zh/resources/arxiv-2505-21499/)

研究黑箱威胁模型下，广告投放作为网页智能体间接注入渠道的作用；AdInject 评估根据网站上下文设计的静态广告内容如何改变浏览器操作。

- [AdInject](https://awesomecua.com/zh/resources/github-nicerwang-adinject/) — 框架 · [来源证据](https://raw.githubusercontent.com/NicerWang/AdInject/HEAD/README.md)

## [ScienceBoard: Evaluating Multimodal Autonomous Agents in Realistic Scientific Workflows](https://awesomecua.com/zh/resources/arxiv-2505-19897/)

ScienceBoard 结合交互环境、专业科研软件及 169 项人工设计的任务，领域包括生物化学、天文学和地理信息学；它在视觉内容丰富的科研流程中评估计算机使用智能体，并分析其执行局限。

- [ScienceBoard](https://awesomecua.com/zh/resources/github-os-copilot-scienceboard/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md)
- [ScienceBoard evaluation trajectories](https://awesomecua.com/zh/resources/url-4784f63cd7117f64a2a3/) — 数据集 · [来源证据](https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md)
- [ScienceBoard VMware environment](https://awesomecua.com/zh/resources/url-75917f2c2b2802aafd3e/) — 基础设施 · [来源证据](https://huggingface.co/OS-Copilot/ScienceBoard-Env/raw/main/README.md)

## [WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought in Reflection, Branching, and Rollback](https://awesomecua.com/zh/resources/arxiv-2505-20013/)

WebCoT 将反思、前瞻、分支和回退过程转为思维链训练依据，并通过重建的轨迹微调，评估网页智能体的自我改进及跨导航任务迁移。

- [Tencent AI LAB - Self-Improving Agent](https://awesomecua.com/zh/resources/github-tencent-selfevolvingagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/README.md)

## [ARPO:End-to-End Policy Optimization for GUI Agents with Experience Replay](https://awesomecua.com/zh/resources/arxiv-2505-16282/)

ARPO 在组相对策略优化中加入回放缓冲区，跨训练迭代复用成功的 GUI 轨迹；它依据基线表现筛选任务，并在 OSWorld 上比较端到端强化学习与离线偏好优化。

- [ARPO training framework](https://awesomecua.com/zh/resources/github-jia-lab-research-arpo/) — 框架 · [来源证据](https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/README.md)
- [ARPO UI-TARS-1.5-7B checkpoint](https://awesomecua.com/zh/resources/url-db6fc5f29f186d13991c/) — 模型 · [来源证据](https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/README.md)

## [WebAgent-R1: Training Web Agents via End-to-End Multi-Turn Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2505-16421/)

通过异步、多轮的环境交互训练网页智能体，以任务成功奖励优化完整轨迹。

- [WebAgent-R1](https://awesomecua.com/zh/resources/github-weizhepei-webagent-r1/) — 框架 · [来源证据](https://raw.githubusercontent.com/weizhepei/WebAgent-R1/HEAD/WebAgent-R1/README.md)

## [GUI-explorer: Autonomous Exploration and Mining of Transition-aware Knowledge for GUI Agent](https://awesomecua.com/zh/resources/arxiv-2505-16827/)

GUI-explorer 根据截图和界面结构生成探索目标，再从观察、动作、结果三元组中提取应用专属的状态转换知识；所得智能体无需训练，在移动任务执行中使用这些知识，并在 SPA-Bench 和 AndroidWorld 上接受评估。

- [GUI-explorer](https://awesomecua.com/zh/resources/github-ilearn-lab-acl25-gui-explorer/) — 智能体 · [来源证据](https://raw.githubusercontent.com/iLearn-Lab/ACL25-GUI-explorer/HEAD/README.md)

## [Web-Shepherd: Advancing PRMs for Reinforcing Web Agents](https://awesomecua.com/zh/resources/arxiv-2505-15277/)

Web-Shepherd 是评估网页导航轨迹各步骤的过程奖励模型；工作构建了含检查清单的 40,000 对步骤级偏好数据及独立的奖励模型比较基准，并评估其在 WebArena-lite 导航中的验证作用。

- [WebShepherd 3B](https://awesomecua.com/zh/resources/url-72f7fe0211c6551b945f/) — 模型 · [来源证据](https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8)
- [WebPRM Collection preference data](https://awesomecua.com/zh/resources/url-8dfc84eb4016204fe70a/) — 数据集 · [来源证据](https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md)
- [WebRewardBench](https://awesomecua.com/zh/resources/url-ac6d0f80765f5a32255a/) — 评测基准 · [来源证据](https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md)

## [GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents](https://awesomecua.com/zh/resources/arxiv-2505-15810/)

分析 GUI 定位中的推理模板、奖励设计和策略更新，并提出针对性的训练流程调整。

- [GUI-G1](https://awesomecua.com/zh/resources/github-yuqi-zhou-gui-g1/) — 模型 · [来源证据](https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/README.md)
- [GUI-G1 3B v1](https://awesomecua.com/zh/resources/url-9dc9d8d3b9a4b32d6f4b/) — 模型 · [来源证据](https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md)

## [Efficient Agent Training for Computer Use](https://awesomecua.com/zh/resources/arxiv-2505-13909/)

PC Agent-E 用 Claude 3.7 Sonnet 合成的替代动作决策扩充 312 条人工计算机使用轨迹，研究基于两者的训练，并提出更新后的评估基准 WindowsAgentArena-V2。

- [PC-Agent-E training and deployment](https://awesomecua.com/zh/resources/github-gair-nlp-pc-agent-e/) — 框架 · [来源证据](https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md)
- [WindowsAgentArena-V2](https://awesomecua.com/zh/resources/github-gair-nlp-windowsagentarena-v2/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md)
- [PC-Agent-E checkpoint](https://awesomecua.com/zh/resources/url-04aa7569d183379d615c/) — 模型 · [来源证据](https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md)
- [PC-Agent-E training data](https://awesomecua.com/zh/resources/url-14449fe321e0a1ca34ea/) — 数据集 · [来源证据](https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md)

## [Scalable Video-to-Dataset Generation for Cross-Platform Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2505-12632/)

提出 MONDAY 及自动化流程，从跨操作系统平台的教学视频中提取移动端导航训练数据。

- [MONDAY](https://awesomecua.com/zh/resources/github-runamu-monday/) — 数据集 · [来源证据](https://raw.githubusercontent.com/runamu/monday/HEAD/README.md)
- [MONDAY annotations](https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/) — 数据集 · [来源证据](https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)

## [Scaling Computer-Use Grounding via User Interface Decomposition and Synthesis](https://awesomecua.com/zh/resources/arxiv-2505-13227/)

提出 OSWorld-G 定位评估和 Jedi 样例合成流程，样例涵盖布局推理与细粒度交互。

- [OSWorld-G](https://awesomecua.com/zh/resources/github-xlang-ai-osworld-g/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/README.md)
- [Jedi-3B-1080p](https://awesomecua.com/zh/resources/url-2f2e38f240a36f31b631/) — 模型 · [来源证据](https://huggingface.co/api/models/xlangai/Jedi-3B-1080p)
- [Jedi-7B-1080p](https://awesomecua.com/zh/resources/url-75dee6afef81a56ba4b2/) — 模型 · [来源证据](https://huggingface.co/api/models/xlangai/Jedi-7B-1080p)
- [Jedi](https://awesomecua.com/zh/resources/url-e062cf1445eaee0f3ade/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/xlangai/Jedi)

## [Enhancing Visual Grounding for GUI Agents via Self-Evolutionary Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2505-12370/)

提出结合精选种子示例、随位置连续变化的策略反馈及注意力图引导的迭代改进的 GUI 定位训练方法，并在包括 ScreenSpot-Pro 在内的 3 个定位基准上评估这一强化学习流程。

- [SE-GUI](https://awesomecua.com/zh/resources/github-yxb-nku-se-gui/) — 框架 · [来源证据](https://raw.githubusercontent.com/YXB-NKU/SE-GUI/HEAD/README.md)
- [SE-GUI-7B](https://awesomecua.com/zh/resources/url-00f5bfd8c7991012a183/) — 模型 · [来源证据](https://huggingface.co/api/models/XinBB/SE-GUI-7B)
- [SE-GUI-3k](https://awesomecua.com/zh/resources/url-380318a8de65fe45956c/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/XinBB/SE-GUI-3k)
- [SE-GUI-3B](https://awesomecua.com/zh/resources/url-6d6f7ffc6a15e9e75a14/) — 模型 · [来源证据](https://huggingface.co/api/models/XinBB/SE-GUI-3B)

## [GUI-Shift: Enhancing VLM-Based GUI Agents through Self-supervised Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2505-12493/)

GUI-Shift 利用无自然语言指令的轨迹训练逆动力学任务，预测连接 2 个 GUI 状态的初始动作。它结合基于规则的强化学习与数据筛选，并评估向 Android 自动化和截图定位任务的迁移。

- [GUI-Shift](https://awesomecua.com/zh/resources/github-ubiquitouslearning-gui-shift/) — 框架 · [来源证据](https://raw.githubusercontent.com/UbiquitousLearning/GUI-Shift/HEAD/README.md)
- [UIShift-7B-2K](https://awesomecua.com/zh/resources/url-0dcc389cc2b1b15fb081/) — 模型 · [来源证据](https://huggingface.co/api/models/mllmTeam/UIShift-7B-2K)

## [Mobile-Bench-v2: A More Realistic and Comprehensive Benchmark for VLM-based Mobile Agents](https://awesomecua.com/zh/resources/arxiv-2505-11891/)

Mobile-Bench-v2 通过多条可接受的离线操作路径、含广告或弹窗的干扰界面，以及带脚本化澄清交互的模糊指令，评估移动端 GUI 智能体。这些任务划分分别考察步骤级执行、抗干扰能力和主动交互。

- [SMAN-Bench](https://awesomecua.com/zh/resources/github-gezelligheid0314-sman-bench/) — 评测基准 · [来源证据](https://proceedings.iclr.cc/paper_files/paper/2026/file/1b4279dc1ec8d0183c22528664d84459-Paper-Conference.pdf)
- [Mobile-Bench-v2 released data](https://awesomecua.com/zh/resources/url-1d5b85321b98765141fc/) — 评测基准 · [来源证据](https://export.arxiv.org/api/query?id_list=2503.16788%2C2503.17709%2C2503.18492%2C2503.19537%2C2503.20978%2C2503.21620%2C2503.23434%2C2504.01382%2C2504.07981%2C2504.10445%2C2504.10458%2C2504.11257%2C2504.11281%2C2504.12679%2C2504.13805%2C2504.13865%2C2504.14239%2C2504.18575%2C2504.19838%2C2504.20464%2C2505.10924%2C2505.11891%2C2505.12299%2C2505.12632%2C2505.13227%2C2505.13887%2C2505.13909%2C2505.14289%2C2505.15810%2C2505.16282%2C2505.16827%2C2505.18829%2C2505.19897%2C2505.21496%2C2505.21499%2C2505.21936%2C2505.22648%2C2505.23762%2C2505.24838%2C2506.00618%2C2506.01391%2C2506.01968%2C2506.02456%2C2506.03143%2C2506.03569%2C2506.04135%2C2506.04614%2C2506.07672%2C2506.08012%2C2506.08972&max_results=50)

## [Seed1.5-VL Technical Report](https://awesomecua.com/zh/resources/arxiv-2505-07062/)

介绍通用视觉语言模型 Seed1.5-VL；除视觉理解与推理任务外，还报告了 GUI 控制和游戏任务评估。

- [Seed1.5-VL](https://awesomecua.com/zh/resources/github-bytedance-seed-seed1-5-vl/) — 模型 · [来源证据](https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/README.md)

## [Leveraging Vision-Language Models for Visual Grounding and Analysis of Automotive UI](https://awesomecua.com/zh/resources/arxiv-2505-05895/)

提出 AutomotiveUI-Bench-4K 数据集及微调的视觉语言模型，用于定位汽车信息娱乐界面元素并评估界面。

- [ELAM-7B](https://awesomecua.com/zh/resources/url-057b43bab2e1e58fc58e/) — 模型 · [来源证据](https://huggingface.co/api/models/sparks-solutions/ELAM-7B)

## [OSUniverse: Benchmark for Multimodal GUI-navigation AI Agents](https://awesomecua.com/zh/resources/arxiv-2505-03570/)

提出桌面 GUI 基准 OSUniverse，涵盖精确点击、多步骤及跨应用任务，并提供人工评分和自动验证机制。

- [OSUniverse](https://awesomecua.com/zh/resources/github-agentsea-osuniverse/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/agentsea/osuniverse/HEAD/README.md)

## [WebGen-Bench: Evaluating LLMs on Generating Interactive and Functional Websites from Scratch](https://awesomecua.com/zh/resources/arxiv-2505-03733/)

提出 WebGen-Bench，评估智能体生成多文件网站的能力，并让网页导航智能体执行交互测试，检查生成页面的功能。

- [WebGen-Bench](https://awesomecua.com/zh/resources/github-mnluzimu-webgen-bench/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/mnluzimu/WebGen-Bench/HEAD/README.md)
- [luzimu/WebGen-Bench](https://awesomecua.com/zh/resources/url-405959de004b6e32c911/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/luzimu/WebGen-Bench)
- [luzimu/WebGen-Bench_train_data](https://awesomecua.com/zh/resources/url-c47b5927fc41eb9a24d4/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/luzimu/WebGen-Bench_train_data)

## [Visual Test-time Scaling for GUI Agent Grounding](https://awesomecua.com/zh/resources/arxiv-2505-00684/)

RegionFocus 通过放大选定的截图区域，并维护基于图像的地标与动作地图，增加视觉测试时计算。在 ScreenSpot-Pro 和 WebVoyager 上使用 UI-TARS 与 Qwen2.5-VL 评估这一定位方法。

- [RegionFocus](https://awesomecua.com/zh/resources/github-tiangeluo-regionfocus/) — 工具 · [来源证据](https://raw.githubusercontent.com/tiangeluo/RegionFocus/HEAD/README.md)

## [WebThinker: Empowering Large Reasoning Models with Deep Research Capability](https://awesomecua.com/zh/resources/arxiv-2504-21776/)

结合迭代式网页搜索、链接跟踪、交错推理与报告起草开展深度研究。其网页探索模块通过爬虫获取页面内容。

- [WebThinker](https://awesomecua.com/zh/resources/github-ruc-nlpir-webthinker/) — 框架 · [来源证据](https://raw.githubusercontent.com/RUC-NLPIR/WebThinker/HEAD/README.md)
- [WebThinker-R1-7B](https://awesomecua.com/zh/resources/url-564c980a531e7204447c/) — 模型 · [来源证据](https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-7B)
- [WebThinker-R1-14B](https://awesomecua.com/zh/resources/url-7d198acee96b3ec197aa/) — 模型 · [来源证据](https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-14B)
- [WebThinker-R1-32B](https://awesomecua.com/zh/resources/url-8076f65dc82b4dcea18c/) — 模型 · [来源证据](https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-32B)
- [WebThinker-QwQ-32B](https://awesomecua.com/zh/resources/url-e058cc2487a805f976fd/) — 模型 · [来源证据](https://huggingface.co/api/models/lixiaoxi45/WebThinker-QwQ-32B)

## [PixelWeb: The First Web GUI Dataset with Pixel-Wise Labels](https://awesomecua.com/zh/resources/arxiv-2504-16419/)

提出网页 GUI 数据集 PixelWeb，包含元素图像、轮廓和像素掩码。其标注流程结合位图通道信息与基于 DOM 的可见性和层叠分析，处理遮挡和元素重叠。

- [PixelWeb](https://awesomecua.com/zh/resources/url-67ae69986d6408fde468/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/cyberalchemist/PixelWeb)

## [WebEvolver: Enhancing Web Agent Self-Improvement with Coevolving World Model](https://awesomecua.com/zh/resources/arxiv-2504-21024/)

WebEvolver 训练协同演进的世界模型，用于预测网页观测并生成额外的智能体训练轨迹。同一模型还支持推理时的前瞻动作选择，并在实时网页任务基准上接受评估。

- [WebEvolver code component](https://awesomecua.com/zh/resources/component-tencent-selfevolvingagent-webevolver/) — 框架 · [来源证据](https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md)
- [Tencent AI LAB - Self-Improving Agent](https://awesomecua.com/zh/resources/github-tencent-selfevolvingagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/README.md)
- [WebEvolver SFT data](https://awesomecua.com/zh/resources/url-e126bbd9729ebdaf05ab/) — 数据集 · [来源证据](https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md)

## [WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks](https://awesomecua.com/zh/resources/arxiv-2504-18575/)

提出评估网页智能体提示注入安全性的端到端基准 WASP，分别衡量攻击的部分进展和攻击者完整目标的达成情况。

- [WASP](https://awesomecua.com/zh/resources/github-facebookresearch-wasp/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/facebookresearch/wasp/HEAD/README.md)

## [InfiGUI-R1: Advancing Multimodal GUI Agents from Reactive Actors to Deliberative Reasoners](https://awesomecua.com/zh/resources/arxiv-2504-14239/)

采用分阶段、侧重推理的训练框架，推动 GUI 智能体从反应式操作转向审慎规划与恢复。

- [InfiGUI-R1](https://awesomecua.com/zh/resources/github-reallm-labs-infigui-r1/) — 模型 · [来源证据](https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/README.md)
- [android_control_test](https://awesomecua.com/zh/resources/url-1f248862e4b691b85343/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/Reallm-Labs/android_control_test)
- [InfiGUI-R1 3B](https://awesomecua.com/zh/resources/url-35b9879a351cc3b3d7d5/) — 模型 · [来源证据](https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md)

## [LearnAct: Few-Shot Mobile GUI Agent with a Unified Demonstration Benchmark](https://awesomecua.com/zh/resources/arxiv-2504-13805/)

LearnAct 将人类演示解析为可复用知识，检索相关示例，并在执行移动端 GUI 任务时使用。配套的 LearnGUI 基准包含 2,252 项离线任务和 101 项在线任务，用于研究从演示中学习适应。

- [LearnAct](https://awesomecua.com/zh/resources/github-lgy0404-learnact/) — 智能体 · [来源证据](https://raw.githubusercontent.com/lgy0404/LearnAct/HEAD/README.md)
- [LearnGUI](https://awesomecua.com/zh/resources/url-a7beaa489fc4ffeb555f/) — 评测基准 · [来源证据](https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)

## [DoomArena: A framework for Testing AI Agents Against Evolving Security Threats](https://awesomecua.com/zh/resources/arxiv-2504-14064/)

提出模块化安全测试框架，可接入 BrowserGym 和工具使用基准，在可配置的威胁模型下评估智能体。

- [DoomArena](https://awesomecua.com/zh/resources/github-servicenow-doomarena/) — 框架 · [来源证据](https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/README.md)

## [TongUI: Internet-Scale Trajectories from Multimodal Web Tutorials for Generalized GUI Agents](https://awesomecua.com/zh/resources/arxiv-2504-12679/)

TongUI 将视频、文章等多模态在线教程转化为 GUI 智能体轨迹。其 GUI-Net 数据集包含 143,000 条轨迹，覆盖 5 种操作系统和 200 多款应用，可用于定位与导航微调。

- [TongUI training and inference framework](https://awesomecua.com/zh/resources/github-tongui-agent-tongui-agent/) — 框架 · [来源证据](https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md)
- [GUI-Net-Mini](https://awesomecua.com/zh/resources/url-0627940da1b988739f75/) — 数据集 · [来源证据](https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md)
- [GUI-Net-1M](https://awesomecua.com/zh/resources/url-8c9aaafb918aaf8b4e92/) — 数据集 · [来源证据](https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md)

## [UI-E2I-Synth: Advancing GUI Grounding with Large-Scale Instruction Synthesis](https://awesomecua.com/zh/resources/arxiv-2504-11257/)

UI-E2I-Synth 使用 GPT-4o 合成复杂程度各异的 GUI 定位指令，涵盖小元素、元素类型不均衡和隐含请求等问题。配套的 UI-I2E-Bench 评估这些标注难题下从指令到元素的定位。

- [FIVE-UI-Evol](https://awesomecua.com/zh/resources/github-microsoft-five-ui-evol/) — 框架 · [来源证据](https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html)
- [UI-I2E-Bench](https://awesomecua.com/zh/resources/url-c08566be0d973ec40c48/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html)

## [REAL: Benchmarking Autonomous Agents on Deterministic Simulations of Real Websites](https://awesomecua.com/zh/resources/arxiv-2504-11543/)

提出 REAL，以确定性网站副本构建基准，包含 112 项信息检索和更改网站状态的浏览器任务。

- [AGI SDK](https://awesomecua.com/zh/resources/github-agi-inc-agisdk/) — 框架 · [来源证据](https://raw.githubusercontent.com/agi-inc/agisdk/HEAD/README.md)

## [ViMo: A Generative Visual GUI World Model for App Agents](https://awesomecua.com/zh/resources/arxiv-2504-13936/)

ViMo 分别建模图形与文本，根据候选动作预测移动应用的下一张截图。符号占位表示保留布局，另一预测器补入可读文本，为 GUI 智能体规划提供视觉预判。

- [ViMo code](https://awesomecua.com/zh/resources/github-ai-agents-2030-vimo/) — 框架 · [来源证据](https://ai-agents-2030.github.io/ViMo/)

## [Breaking the Data Barrier -- Building GUI Agents Through Task Generalization](https://awesomecua.com/zh/resources/arxiv-2504-10127/)

研究 GUI 感知、多模态推理和文本推理的中期训练能否迁移到 GUI 智能体规划。在 GUI 轨迹稀缺的情况下，基于 WebArena 和 AndroidWorld 比较 11 种任务来源及精选混合数据，以研究训练数据的选择。

- [GUIMid training data](https://awesomecua.com/zh/resources/url-422010da7a5c845a18f6/) — 数据集 · [来源证据](https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md)

## [GUI-R1 : A Generalist R1-Style Vision-Language Action Model For GUI Agents](https://awesomecua.com/zh/resources/arxiv-2504-10458/)

通过统一的动作规则和精选的跨平台示例，对视觉语言 GUI 智能体进行强化学习微调。

- [GUI-R1](https://awesomecua.com/zh/resources/github-ritzz-ai-gui-r1/) — 模型 · [来源证据](https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md)
- [GUI-R1 checkpoint bundle](https://awesomecua.com/zh/resources/url-61a5321db10fc8a312b9/) — 模型 · [来源证据](https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md)
- [GUI-R1 data bundle](https://awesomecua.com/zh/resources/url-df680385f18b01a825be/) — 数据集 · [来源证据](https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md)

## [AgentRewardBench: Evaluating Automatic Evaluations of Web Agent Trajectories](https://awesomecua.com/zh/resources/arxiv-2504-08942/)

AgentRewardBench 以来自 5 个基准的 1,302 条轨迹的专家评审为参照，评估自动化网页智能体评判方法。标注涵盖任务完成情况、副作用和重复行为，可用于比较 LLM 评判模型与基于规则的任务评估器。

- [AgentRewardBench](https://awesomecua.com/zh/resources/github-mcgill-nlp-agent-reward-bench/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/McGill-NLP/agent-reward-bench/HEAD/README.md)
- [AgentRewardBench dataset](https://awesomecua.com/zh/resources/url-866251b68d6bba8b8ba6/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench)

## [Kimi-VL Technical Report](https://awesomecua.com/zh/resources/arxiv-2504-07491/)

Kimi-VL 是通用视觉语言模型；报告了它在包括 OSWorld 在内的多轮智能体任务、ScreenSpot-Pro 及其他视觉语言任务上的评估。

- [Kimi-VL](https://awesomecua.com/zh/resources/github-moonshotai-kimi-vl/) — 模型 · [来源证据](https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/README.md)
- [Kimi-VL-A3B-Instruct](https://awesomecua.com/zh/resources/url-a42c3bca105218f17645/) — 模型 · [来源证据](https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Instruct)
- [moonshotai/Kimi-VL-A3B-Thinking](https://awesomecua.com/zh/resources/url-c1851e7db3b0e53d2218/) — 模型 · [来源证据](https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking)
- [Kimi-VL-A3B-Thinking-2506](https://awesomecua.com/zh/resources/url-fb5921fec3f7c313ab5b/) — 模型 · [来源证据](https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking-2506)

## [Inducing Programmatic Skills for Agentic Tasks](https://awesomecua.com/zh/resources/arxiv-2504-06821/)

提出 agent skill induction (ASI)，在网页任务中生成、检验和复用程序化技能，将基本操作组合为较高层的操作流程。

- [Agent Skill Induction (ASI)](https://awesomecua.com/zh/resources/github-zorazrw-agent-skill-induction/) — 框架 · [来源证据](https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/README.md)

## [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://awesomecua.com/zh/resources/arxiv-2504-07079/)

SkillWeaver 探索网站、练习交互，并将所得经验转化为可复用、可调用的技能 API 库；在 WebArena 和实时网站上的实验考察技能改进、组合及从较强智能体向较弱智能体迁移。

- [SkillWeaver](https://awesomecua.com/zh/resources/github-osu-nlp-group-skillweaver/) — 框架 · [来源证据](https://osu-nlp-group.github.io/SkillWeaver/)

## [ScreenSpot-Pro: GUI Grounding for Professional High-Resolution Computer Use](https://awesomecua.com/zh/resources/arxiv-2504-07981/)

评估专业软件高分辨率界面中的 GUI 目标定位，并研究通过级联视觉搜索缩小目标区域。

- [ScreenSpot-Pro data](https://awesomecua.com/zh/resources/url-c79e152e6f7af1a9efed/) — 数据集 · [来源证据](https://gui-agent.github.io/grounding-leaderboard/)

## [An Illusion of Progress? Assessing the Current State of Web Agents](https://awesomecua.com/zh/resources/arxiv-2504-01382/)

提出涵盖 136 个实时网站、共 300 项任务的 Online-Mind2Web，考察基准设计如何影响网页智能体评估；还开发了判断任务完成情况的 LLM 评判器，并将其判断与人工评估比较。

- [WebJudge 7B](https://awesomecua.com/zh/resources/url-772161f06c2b3d4978b5/) — 模型 · [来源证据](https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md)
- [Online-Mind2Web task data](https://awesomecua.com/zh/resources/url-a252b36bf1c440269a2e/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/osunlp/Online-Mind2Web)

## [Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents](https://awesomecua.com/zh/resources/arxiv-2504-00906/)

结合通用模型与专用模型，通过分层规划和多种定位方法完成计算机使用任务。

- [Agent S](https://awesomecua.com/zh/resources/github-simular-ai-agent-s/) — 智能体 · [来源证据](https://raw.githubusercontent.com/simular-ai/Agent-S/HEAD/README.md)

## [UI-R1: Enhancing Efficient Action Prediction of GUI Agents by Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2503-21620/)

利用基于规则的操作奖励和策略优化，从一组精简的移动端任务中训练 GUI 操作预测能力。

- [UI-R1](https://awesomecua.com/zh/resources/github-lll6gg-ui-r1/) — 模型 · [来源证据](https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md)
- [Qwen2.5-VL-3B-UI-R1-E](https://awesomecua.com/zh/resources/url-72f3737bb5194fd64852/) — 模型 · [来源证据](https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1-E)
- [UI-R1 3B training data](https://awesomecua.com/zh/resources/url-7c568d88a472f914d316/) — 数据集 · [来源证据](https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train/raw/main/README.md)
- [UI-R1 3B](https://awesomecua.com/zh/resources/url-f13474d7aa734a30624d/) — 模型 · [来源证据](https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md)

## [Agents in the Sandbox: End-to-End Crash Bug Reproduction for Minecraft](https://awesomecua.com/zh/resources/arxiv-2503-20036/)

提出 BugCraft，将 Minecraft 崩溃报告转为复现步骤，再由视觉智能体通过宏 API 执行；BugCraft-Bench 用于评估。

- [bugcraft-dataset](https://awesomecua.com/zh/resources/url-2c85ae447a0eeed51393/) — 评测基准 · [来源证据](https://huggingface.co/api/models/erayyapagci/bugcraft-dataset)

## [VeriSafe Agent: Safeguarding Mobile GUI Agent via Logic-based Action Verification](https://awesomecua.com/zh/resources/arxiv-2503-18492/)

将用户指令转化为形式化规范，并在运行时通过逻辑检查拟执行的移动端 GUI 操作。

- [VeriSafe Agent](https://awesomecua.com/zh/resources/github-verisafeagent-verisafeagent/) — 框架 · [来源证据](https://arxiv.org/html/2503.18492v2)

## [GUI-Xplore: Empowering Generalizable GUI Agents with One Exploration](https://awesomecua.com/zh/resources/arxiv-2503-17709/)

提出 GUI-Xplore 探索视频及下游任务，并设计结合操作感知建模与图结构环境推理的智能体。

- [GUI-Xplore](https://awesomecua.com/zh/resources/url-f56dbd8bfac8b0545e07/) — 数据集 · [来源证据](https://arxiv.org/html/2503.17709v1)

## [Does Chain-of-Thought Reasoning Help Mobile GUI Agent? An Empirical Study](https://awesomecua.com/zh/resources/arxiv-2503-16788/)

比较匹配的推理型与非推理型视觉语言模型在静态移动端 GUI 任务和交互式 AndroidWorld 导航中的表现，发现思维链的效果随任务和模型系列而变化。

- [VLM-Reasoning-Traces](https://awesomecua.com/zh/resources/github-llamatouch-vlm-reasoning-traces/) — 数据集 · [来源证据](https://raw.githubusercontent.com/LlamaTouch/VLM-Reasoning-Traces/HEAD/README.md)

## [Advancing Mobile GUI Agents: A Verifier-Driven Approach to Practical Deployment](https://awesomecua.com/zh/resources/arxiv-2503-15937/)

提出 V-Droid，在离散操作空间中验证候选操作。

- [V-Droid](https://awesomecua.com/zh/resources/github-v-droid-agent-v-droid/) — 框架 · [来源证据](https://raw.githubusercontent.com/V-Droid-Agent/V-Droid/HEAD/README.md)
- [V-Droid-8B-0323](https://awesomecua.com/zh/resources/url-82adab61eb515398da48/) — 模型 · [来源证据](https://huggingface.co/api/models/V-Droid/V-Droid-8B-0323)

## [UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://awesomecua.com/zh/resources/arxiv-2503-15661/)

提供带标注的桌面操作演示，用于评估元素定位、布局定位和操作预测。

- [UI-Vision](https://awesomecua.com/zh/resources/url-2c2004baae4669f8169a/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/ServiceNow/ui-vision)

## [MP-GUI: Modality Perception with MLLMs for GUI Understanding](https://awesomecua.com/zh/resources/arxiv-2503-14021/)

结合专门处理图形、文本和空间信息的感知组件与数据收集流程，改进 GUI 理解。

- [MP-GUI](https://awesomecua.com/zh/resources/github-bigtaige-mp-gui/) — 模型 · [来源证据](https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/README.md)

## [STEVE: A Step Verification Pipeline for Computer-use Agent Training](https://awesomecua.com/zh/resources/arxiv-2503-12532/)

通过比较操作前后的截图，为单步计算机使用标注结果，再利用成功和失败的步骤训练智能体。

- [STEVE / STEVE-R1 research code](https://awesomecua.com/zh/resources/github-fanbinlu-steve-r1/) — 框架 · [来源证据](https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending)
- [Fanbin/waa_steve_trajectories](https://awesomecua.com/zh/resources/url-2bab4b78c81cde1d5ecb/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/Fanbin/waa_steve_trajectories)
- [STEVE-R1-7B-SFT](https://awesomecua.com/zh/resources/url-666844c28be1138b0e37/) — 模型 · [来源证据](https://huggingface.co/api/models/Fanbin/STEVE-R1-7B-SFT)

## [COLA: A Scalable Multi-Agent Framework For Windows UI Task Automation](https://awesomecua.com/zh/resources/arxiv-2503-09263/)

通过动态任务调度、共享记忆和人工触发的回滚，协调专门负责不同任务的 Windows UI 智能体从错误中恢复。

- [COLA demo](https://awesomecua.com/zh/resources/github-alokia-cola-demo/) — 智能体 · [来源证据](https://export.arxiv.org/api/query?id_list=2412.04454%2C2412.04626%2C2412.05467%2C2412.09362%2C2412.09605%2C2412.10342%2C2412.10742%2C2412.10840%2C2412.13103%2C2412.13194%2C2412.13501%2C2412.14161%2C2412.14470%2C2412.16256%2C2412.17589%2C2412.18116%2C2412.18426%2C2412.19723%2C2501.01149%2C2501.04575%2C2501.07572%2C2501.11733%2C2501.12326%2C2501.13896%2C2501.16150%2C2502.01600%2C2502.01977%2C2502.02982%2C2502.06395%2C2502.07949%2C2502.08047%2C2502.08226%2C2502.11357%2C2502.13053%2C2502.13923%2C2502.14282%2C2502.18906%2C2503.00401%2C2503.02268%2C2503.03196%2C2503.04730%2C2503.05143%2C2503.06470%2C2503.09263%2C2503.11069%2C2503.11170%2C2503.12687%2C2503.15661%2C2503.15937%2C2503.16465&max_results=50)

## [Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://awesomecua.com/zh/resources/arxiv-2503-09572/)

将规划与执行分开，并生成合成的计划标注，用于训练智能体完成长程网页导航任务。

- [Plan-and-Act](https://awesomecua.com/zh/resources/github-squeezeailab-plan-and-act/) — 框架 · [来源证据](https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/README.md)
- [Plan-and-Act Planner 70B](https://awesomecua.com/zh/resources/url-3932d69c6b6f9b2a7ba8/) — 模型 · [来源证据](https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md)
- [Plan-and-Act Actor 70B](https://awesomecua.com/zh/resources/url-8a284d122d7dcf23479d/) — 模型 · [来源证据](https://huggingface.co/api/models/xTRam1/plan-and-act-actor-70b)
- [Plan-and-Act training data](https://awesomecua.com/zh/resources/url-ba6453cfdae0eb049ced/) — 数据集 · [来源证据](https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md)

## [AgentDAM: Privacy Leakage Evaluation for Autonomous Web Agents](https://awesomecua.com/zh/resources/arxiv-2503-09780/)

评估自主网页智能体在执行会接触到非必要私人数据的任务时，是否尽量减少使用敏感个人信息。

- [AgentDAM](https://awesomecua.com/zh/resources/github-facebookresearch-ai-agent-privacy/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/facebookresearch/ai-agent-privacy/HEAD/README.md)

## [FedMABench: Benchmarking Mobile Agents on Decentralized Heterogeneous User Data](https://awesomecua.com/zh/resources/arxiv-2503-05143/)

提出面向用户及应用分布异构条件下联邦移动端智能体训练的基准，整合数据集、算法和基础模型。

- [FedMABench](https://awesomecua.com/zh/resources/github-wwh0411-fedmabench/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md)
- [FedMABench data partitions](https://awesomecua.com/zh/resources/url-86b3c2ee65911daf84a8/) — 数据集 · [来源证据](https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)

## [SafeArena: Evaluating the Safety of Autonomous Web Agents](https://awesomecua.com/zh/resources/arxiv-2503-04957/)

将正常与有害的网页任务配对，评估智能体被蓄意滥用的风险，并按风险等级分类其行为。

- [SafeArena](https://awesomecua.com/zh/resources/github-mcgill-nlp-safearena/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/McGill-NLP/safearena/HEAD/README.md)
- [McGill-NLP/safearena](https://awesomecua.com/zh/resources/url-be4ca14d1724b0cf8314/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/McGill-NLP/safearena)

## [SpiritSight Agent: Advanced GUI Agent with One Look](https://awesomecua.com/zh/resources/arxiv-2503-03196/)

提出 SpiritSight 和 GUI-Lasagne 数据，结合多层级 GUI 标注与视觉区块解析，支持高分辨率界面导航。

- [GUI-Lasagne L1](https://awesomecua.com/zh/resources/url-0c5659ca9e59d942aea3/) — 数据集 · [来源证据](https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md)
- [SpiritSight-Agent-2B](https://awesomecua.com/zh/resources/url-37570eed422d326bfa5a/) — 模型 · [来源证据](https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-2B)
- [SpiritSight-Agent 8B base](https://awesomecua.com/zh/resources/url-52b7de0e43b1afc9c226/) — 模型 · [来源证据](https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md)
- [SpiritSight-Agent-26B](https://awesomecua.com/zh/resources/url-55be07e942393d43132f/) — 模型 · [来源证据](https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-26B)

## [CHOP: Mobile Operating Assistant with Constrained High-frequency Optimized Subtask Planning](https://awesomecua.com/zh/resources/arxiv-2503-03743/)

利用人工规划的子任务，约束并改进连接用户目标与可执行移动端操作的中间计划。

- [CHOP](https://awesomecua.com/zh/resources/github-yuqi-zhou-chop/) — 框架 · [来源证据](https://raw.githubusercontent.com/Yuqi-Zhou/CHOP/HEAD/README.md)

## [AppAgentX: Evolving GUI Agents as Proficient Smartphone Users](https://awesomecua.com/zh/resources/arxiv-2503-02268/)

记录交互历史，将重复的操作序列转化为可复用的高层快捷操作，用于移动端 GUI 任务。

- [AppAgentX](https://awesomecua.com/zh/resources/github-westlake-agi-lab-appagentx/) — 智能体 · [来源证据](https://raw.githubusercontent.com/Westlake-AGI-Lab/AppAgentX/HEAD/README.md)

## [MPO: Boosting LLM Agents with Meta Plan Optimization](https://awesomecua.com/zh/resources/arxiv-2503-02682/)

利用执行反馈改进可复用的高层元计划，指导语言智能体在交互环境中的规划。

- [MPO (Meta Plan Optimization)](https://awesomecua.com/zh/resources/github-weiminxiong-mpo/) — 框架 · [来源证据](https://raw.githubusercontent.com/WeiminXiong/MPO/HEAD/README.md)

## [LiteWebAgent: The Open-Source Suite for VLM-Based Web-Agent Applications](https://awesomecua.com/zh/resources/arxiv-2503-02950/)

提出包含规划和记忆组件的模块化视觉网页智能体架构，并通过远程浏览器应用和 Chrome 扩展提供使用入口。

- [LiteWebAgent](https://awesomecua.com/zh/resources/github-pathonai-litewebagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/README.md)
- [LiteWebAgent](https://awesomecua.com/zh/resources/github-pathonaiorg-litewebagent/) — 框架 · [来源证据](https://raw.githubusercontent.com/PathOnAI/LiteWebAgent/HEAD/README.md)

## [Smoothing Grounding and Reasoning for MLLM-Powered GUI Agents with Query-Oriented Pivot Tasks](https://awesomecua.com/zh/resources/arxiv-2503-00401/)

从截图和目标坐标推断可能的用户查询，以此作为连接 GUI 定位与操作推理的训练桥梁。

- [GUIPivot](https://awesomecua.com/zh/resources/github-zrw00-guipivot/) — 框架 · [来源证据](https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/README.md)

## [VEM: Environment-Free Exploration for Training GUI Agent with Value Environment Model](https://awesomecua.com/zh/resources/arxiv-2502-18906/)

利用从离线交互中学得且参数冻结的价值模型训练 GUI 智能体，指导操作探索，而无须预测完整的下一步观察结果。

- [VEM GUI-Agent-RL](https://awesomecua.com/zh/resources/github-microsoft-gui-agent-rl/) — 框架 · [来源证据](https://raw.githubusercontent.com/microsoft/GUI-Agent-RL/HEAD/README.md)

## [OS-Kairos: Adaptive Interaction for MLLM-Powered GUI Agents](https://awesomecua.com/zh/resources/arxiv-2503-16465/)

利用逐步置信度估计，决定 GUI 智能体何时自主操作、何时在复杂情况下请求人工介入。

- [OS-Kairos](https://awesomecua.com/zh/resources/github-wuzheng02-os-kairos/) — 智能体 · [来源证据](https://raw.githubusercontent.com/Wuzheng02/OS-Kairos/HEAD/README.md)

## [Programming with Pixels: Can Computer-Use Agents do Software Engineering?](https://awesomecua.com/zh/resources/arxiv-2502-18525/)

提出面向软件工程任务的可视化 IDE 环境和基准，比较基于截图的控制方式与使用编辑工具和 Shell 工具的方式。

- [Programming with Pixels (PwP)](https://awesomecua.com/zh/resources/github-programmingwithpixels-pwp/) — 框架 · [来源证据](https://raw.githubusercontent.com/ProgrammingwithPixels/PwP/HEAD/README.md)

## [PC-Agent: A Hierarchical Multi-Agent Collaboration Framework for Complex Task Automation on PC](https://awesomecua.com/zh/resources/arxiv-2502-14282/)

在 PC 工作流程中，利用主动感知和分层智能体完成指令拆解、进度跟踪、操作选择与反思。

- [PC-Agent (X-PLUG component)](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-pc-agent/) — 智能体 · [来源证据](https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/PC-Agent/README.md)

## [Advancing Language Multi-Agent Learning with Credit Re-Assignment for Interactive Environment Generalization](https://awesomecua.com/zh/resources/arxiv-2502-14496/)

CollabUIAgents 是多智能体 RL 框架，利用 LLM 分配过程奖励，帮助智能体在包括移动端操作和网页浏览在内的交互环境中泛化。

- [CollabUIAgents](https://awesomecua.com/zh/resources/github-thunlp-mt-collabuiagents/) — 框架 · [来源证据](https://raw.githubusercontent.com/THUNLP-MT/CollabUIAgents/HEAD/README.md)

## [Qwen2.5-VL Technical Report](https://awesomecua.com/zh/resources/arxiv-2502-13923/)

介绍视觉语言模型 Qwen2.5-VL；除一般视觉任务外，它还可作为视觉智能体执行计算机和移动设备操作任务。

- [Qwen3-VL / Qwen2.5-VL](https://awesomecua.com/zh/resources/github-qwenlm-qwen3-vl/) — 模型 · [来源证据](https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/README.md)
- [Qwen2.5-VL-32B-Instruct](https://awesomecua.com/zh/resources/url-beafd78bf2ea84211e6d/) — 模型 · [来源证据](https://huggingface.co/api/models/Qwen/Qwen2.5-VL-32B-Instruct)

## [Magma: A Foundation Model for Multimodal AI Agents](https://awesomecua.com/zh/resources/arxiv-2502-13130/)

提出多模态智能体模型 Magma，利用可点击 GUI 元素标记与视频运动轨迹进行训练，并在 UI 导航和机器人任务上评估。

- [Magma-8B](https://awesomecua.com/zh/resources/url-d3247ff0ff9a1f6bc247/) — 模型 · [来源证据](https://huggingface.co/api/models/microsoft/Magma-8B)
- [Magma-Mind2Web-SoM](https://awesomecua.com/zh/resources/url-e8256e338a9c379ca85b/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MagmaAI/Magma-Mind2Web-SoM)
- [Magma-AITW-SoM](https://awesomecua.com/zh/resources/url-ffe40334f1050b94f8b2/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/MagmaAI/Magma-AITW-SoM)

## [Explorer: Scaling Exploration-driven Web Trajectory Synthesis for Multimodal Web Agents](https://awesomecua.com/zh/resources/arxiv-2502-11357/)

通过探索与改进合成多模态网页轨迹，再训练浏览器智能体，研究扩展交互数据规模的影响。

- [Explorer](https://awesomecua.com/zh/resources/github-osu-nlp-group-explorer/) — 框架 · [来源证据](https://raw.githubusercontent.com/OSU-NLP-Group/Explorer/HEAD/README.md)

## [Digi-Q: Learning Q-Value Functions for Training Device-Control Agents](https://awesomecua.com/zh/resources/arxiv-2502-15760/)

从离线设备控制经验中学习操作价值函数，并用其对候选操作排序，以改进策略。

- [Digi-Q](https://awesomecua.com/zh/resources/github-digirl-agent-digiq/) — 框架 · [来源证据](https://raw.githubusercontent.com/DigiRL-agent/digiq/HEAD/README.md)
- [aitw-general-digiq-agent](https://awesomecua.com/zh/resources/url-0e5617031e625a75cfc7/) — 模型 · [来源证据](https://huggingface.co/api/models/JackBAI/aitw-general-digiq-agent)
- [aitw-webshop-digiq-agent](https://awesomecua.com/zh/resources/url-5281c8befef1059590f3/) — 模型 · [来源证据](https://huggingface.co/api/models/JackBAI/aitw-webshop-digiq-agent)

## [WorldGUI: An Interactive Benchmark for Desktop GUI Automation from Any Starting Point](https://awesomecua.com/zh/resources/arxiv-2502-08047/)

提出初始状态各异的桌面和网页任务，测试智能体在常规初始配置之外的规划恢复与适应能力。

- [WorldGUI](https://awesomecua.com/zh/resources/github-showlab-worldgui/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/showlab/WorldGUI/HEAD/README.md)
- [WorldGUI-Bench](https://awesomecua.com/zh/resources/url-b540fe81c57cedb1f556/) — 数据集 · [来源证据](https://huggingface.co/api/datasets/hhenryz/WorldGUI-Bench)

## [Advancing Autonomous VLM Agents via Variational Subgoal-Conditioned Reinforcement Learning](https://awesomecua.com/zh/resources/arxiv-2502-07949/)

采用变分子目标条件强化学习，提高移动端和网页控制稀疏奖励任务的学习效率。

- [VSC-RL code](https://awesomecua.com/zh/resources/github-ai-agents-2030-vsc-rl/) — 框架 · [来源证据](https://ai-agents-2030.github.io/VSC-RL/)

## [InSTA: Towards Internet-Scale Training For Agents](https://awesomecua.com/zh/resources/arxiv-2502-06776/)

InSTA 构建流程，为网站生成任务、收集网页智能体轨迹，并按判定的成功情况筛选数据，训练较小的网页导航智能体。

- [InSTA](https://awesomecua.com/zh/resources/github-data-for-agents-insta/) — 框架 · [来源证据](https://raw.githubusercontent.com/data-for-agents/insta/HEAD/README.md)

## [AutoGUI: Scaling GUI Grounding with Automatic Functionality Annotations from LLMs](https://awesomecua.com/zh/resources/arxiv-2502-01977/)

根据交互前后的 UI 变化推断元素功能，生成经核验的标注，用于训练定位模型。

- [AutoGUI code](https://awesomecua.com/zh/resources/github-zjulihongxin-autogui/) — 框架 · [来源证据](https://arxiv.org/abs/2502.01977v2)
- [AutoGUI v1 training data](https://awesomecua.com/zh/resources/url-79287058342289aa5d45/) — 数据集 · [来源证据](https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md)

## [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://awesomecua.com/zh/resources/arxiv-2501-12326/)

研究基于截图的原生 GUI 模型，采用统一操作表示、审慎推理，并利用交互轨迹迭代训练。

- [UI-TARS](https://awesomecua.com/zh/resources/github-bytedance-ui-tars/) — 模型 · [来源证据](https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/README.md)
- [UI-TARS 72B DPO](https://awesomecua.com/zh/resources/url-0447e1fb83a794507aa2/) — 模型 · [来源证据](https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md)
- [UI-TARS 7B DPO](https://awesomecua.com/zh/resources/url-a8b43a1f2bebd998f612/) — 模型 · [来源证据](https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md)
- [UI-TARS 2B SFT](https://awesomecua.com/zh/resources/url-bd9f8174e5503055c0bd/) — 模型 · [来源证据](https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md)
- [UI-TARS 7B SFT](https://awesomecua.com/zh/resources/url-dbd880ec31b412487945/) — 模型 · [来源证据](https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md)
- [UI-TARS 72B SFT](https://awesomecua.com/zh/resources/url-fdb901523979ed1e831b/) — 模型 · [来源证据](https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md)

## [Agent-R: Training Language Model Agents to Reflect via Iterative Self-Training](https://awesomecua.com/zh/resources/arxiv-2501-11425/)

从搜索得到的纠错路径构建自我评议训练样例，提升智能体在交互中发现并纠正错误的能力。

- [Agent-R](https://awesomecua.com/zh/resources/github-bytedance-seed-agent-r/) — 框架 · [来源证据](https://raw.githubusercontent.com/ByteDance-Seed/Agent-R/HEAD/README.md)

## [Mobile-Agent-E: Self-Evolving Mobile Assistant for Complex Tasks](https://awesomecua.com/zh/resources/arxiv-2501-11733/)

采用分层移动智能体，并持续保存提示和可复用的操作捷径，利用积累的经验改进复杂任务的执行。

- [Mobile-Agent-E code component](https://awesomecua.com/zh/resources/component-x-plug-mobileagent-mobile-agent-e/) — 智能体 · [来源证据](https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md)
- [Mobile-Eval-E task definitions](https://awesomecua.com/zh/resources/url-342b081c3668a8bbe155/) — 评测基准 · [来源证据](https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md)

第 151–300 篇，共 444 篇论文。

[下载已审阅的关联（JSON）](https://awesomecua.com/downloads/relationships.json) · [收录方法](https://awesomecua.com/zh/about/)
