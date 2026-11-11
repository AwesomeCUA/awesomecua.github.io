---
title: "计算机使用智能体评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/categories/benchmark/
updated: 2026-11-10
type: category
lang: zh-CN
---

# 计算机使用智能体评测基准

计算机使用评测基准是一组任务与环境，用来给操作网页浏览器、桌面应用或移动设备的智能体打分。每个基准都把固定的任务集与评估器配在一起，评估方式包括基于执行的状态检查、答案匹配和目标定位。

> AwesomeCUA 目录收录 309 条已审核评测基准。每条附有完整注释、一手证据和许可证信息。快照：2026-11-11T08:21:20Z。

HTML 页面：https://awesomecua.com/zh/categories/benchmark/ · [English](https://awesomecua.com/categories/benchmark/index.md) · 目录索引：https://awesomecua.com/llms.txt · API：https://awesomecua.com/api/v1/resources.json

## 怎么选

| 评测基准 | 平台 | 设置 | 规模 | 排行榜 |
| --- | --- | --- | --- | --- |
| [OSWorld](https://awesomecua.com/resources/github-xlang-ai-osworld/) | 桌面 | 交互式 | [369 个任务定义](https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json) | [排行榜](https://os-world.github.io/) |
| [WebArena](https://awesomecua.com/resources/github-web-arena-x-webarena/) | 网页 | 交互式 | [812 个任务示例](https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/README.md) | [排行榜](https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ/edit?usp=sharing) |
| [AndroidWorld](https://awesomecua.com/resources/github-google-research-android-world/) | 手机 | 交互式 | [116 个任务定义](https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md) | [排行榜](https://docs.google.com/spreadsheets/d/1cchzP9dlTZ3WXQTfYNhh3avxoLipqHN75v1Tb86uhHo/edit?gid=0#gid=0) |
| [BrowserGym](https://awesomecua.com/resources/github-servicenow-browsergym/) | 网页 | 混合 | — | — |
| [Mind2Web](https://awesomecua.com/resources/github-osu-nlp-group-mind2web/) | 网页 | 离线 | [1,009 个任务实例](https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md) | — |
| [ScreenSpot Pro](https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/) | 桌面 | 离线 | [1,581 条目标标注](https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md) | [排行榜](https://gui-agent.github.io/grounding-leaderboard) |

## 常见问题

### 目录中被提及最多的评测基准有哪些？

[OSWorld](https://awesomecua.com/resources/github-xlang-ai-osworld/)（60 条记录）、[WebArena](https://awesomecua.com/resources/github-web-arena-x-webarena/)（31 条记录）和 [AndroidWorld](https://awesomecua.com/resources/github-google-research-android-world/)（22 条记录）在其他目录记录的已审核来源中被提及最多。

### 这些评测基准覆盖哪些平台？

在 309 条已审核评测基准中，网页 210 条、桌面 95 条、手机 46 条、跨平台 28 条；14 条未记录平台。标注多个平台的条目在每个平台下各计一次。

### 哪些评测基准有官方排行榜？

309 条评测基准中有 25 条在已审核来源中链接了官方排行榜，包括 [OSWorld](https://awesomecua.com/resources/github-xlang-ai-osworld/)、[WebArena](https://awesomecua.com/resources/github-web-arena-x-webarena/)、[AndroidWorld](https://awesomecua.com/resources/github-google-research-android-world/) 和 [ScreenSpot Pro](https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/)。

### 交互式评测和离线评测各有多少？

在 94 条记录了评测协议的基准中，交互式 56 条、离线 34 条、混合 4 条。[评测基准对比页](https://awesomecua.com/compare/benchmarks/)列出每个协议的观察、动作、评估器和计数。

### 评测基准使用哪些许可证？

最常见的声明许可证是 MIT（121 条）、Apache-2.0（70 条）和 CC-BY-4.0（7 条）。309 条中有 101 条未记录声明的许可证。

---

## OSWorld

通过实际执行任务，评估智能体在真实桌面环境中的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-osworld/
- 原始来源：https://github.com/xlang-ai/OSWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：评测、跨应用
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:xlang-ai/osworld

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-osworld/record.json

### 结构化规格

- 动作 / 输出：mouse and keyboard via PyAutoGUI
- 评测方式：Task-specific execution-based evaluators inspect application or system state.
- 侧重：task completion, cross-application workflows
- 观测：screenshots
- 任务设置：交互式

#### 数量记录

- 369 个任务定义 — test_all.json（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json）
- 361 个任务定义 — test_nogdrive.json（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json）

Counts were computed from unique task identifiers in the two inspected manifests. The subsets differ; record the manifest, repository revision, agent interface, and step budget with a score.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：83b8684c2f4ac4f31996b8b4752195fcb6cc5429f89d92398177b9b721d787fc）
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50（获取于 2026-10-16T06:31:28Z；SHA-256：be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json（获取于 2026-10-16T11:34:59Z；SHA-256：9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json（获取于 2026-10-16T11:34:59Z；SHA-256：fcb9497e93a8986407345d3012c872c9c2fed253420730fbea64ccfcace67dbb）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）

---

## WebArena

用于评估自主网页智能体的自行托管网页环境和任务。

- 目录页面：https://awesomecua.com/zh/resources/github-web-arena-x-webarena/
- 原始来源：https://github.com/web-arena-x/webarena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:web-arena-x/webarena

- 完整记录 JSON：https://awesomecua.com/resources/github-web-arena-x-webarena/record.json

### 结构化规格

- 动作 / 输出：browser element actions
- 评测方式：Functional correctness of completed web tasks.
- 侧重：web task completion
- 观测：HTML or accessibility tree
- 任务设置：交互式

#### 数量记录

- 812 个任务示例 — canonical WebArena evaluation suite（来源报告；来源：https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/README.md）

The canonical repository documents self-hosted websites and environment resets. Its README recommends BrowserGym/AgentLab for newer infrastructure; harness changes must be recorded.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：081c826497f9b7da4952771ee128c2215ec3532379db0fe9f7fcbd899d9c9287）
- https://export.arxiv.org/api/query?id_list=1802.08802%2C1808.09132%2C2005.03776%2C2101.09465%2C2103.16057%2C2104.08560%2C2105.13231%2C2107.03374%2C2107.13731%2C2108.03353%2C2202.02312%2C2202.08137%2C2204.01691%2C2205.11029%2C2207.01206%2C2209.08199%2C2209.08655%2C2209.14927%2C2209.15099%2C2210.02663%2C2210.03629%2C2210.03945%2C2211.07615%2C2301.10165%2C2301.13280%2C2302.04761%2C2303.07280%2C2303.08774%2C2303.17491%2C2303.17580%2C2304.04370%2C2304.07061%2C2305.04091%2C2305.05662%2C2305.08144%2C2305.10601%2C2305.11854%2C2305.12487%2C2305.14257%2C2305.14325%2C2305.16504%2C2305.16653%2C2305.19308%2C2306.00245%2C2306.06070%2C2306.07863%2C2307.10088%2C2307.12856%2C2307.13854%2C2308.01990&max_results=50（获取于 2026-10-16T06:31:20Z；SHA-256：cbe8bfcbce4170a94a6cf42de01fbe0a448e7b1d29fa75a0de877105a98ec08e）
- https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## AndroidWorld

AndroidWorld 是面向移动智能体的 Android 环境，支持通过程序评估任务。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-android-world/
- 原始来源：https://github.com/google-research/android_world
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:google-research/android_world

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-android-world/record.json

### 结构化规格

- 动作 / 输出：Android device interactions
- 评测方式：Programmatic task-specific initialization, system-state success checks, and teardown.
- 侧重：mobile task completion
- 观测：screenshots, accessibility information
- 任务设置：交互式

#### 数量记录

- 116 个任务定义 — parameterized AndroidWorld tasks（来源报告；来源：https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md）
- 20 个应用 — documented AndroidWorld app set（来源报告；来源：https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md）

Random parameters produce many instances from the same task definitions. Preserve seeds and parameterization; 116 counts task definitions, while random parameters produce many task instances.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/android_world/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：93201de5e21f2b12283a75b1e2c357781b2e6cc27eab20cc7dd7aa0f5919d839）
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50（获取于 2026-10-16T06:31:28Z；SHA-256：be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7）
- https://raw.githubusercontent.com/google-research/android_world/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）

---

## BrowserGym

为浏览器智能体任务和基准环境提供统一接口。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-browsergym/
- 原始来源：https://github.com/ServiceNow/BrowserGym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:servicenow/browsergym

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-browsergym/record.json

### 结构化规格

- 动作 / 输出：element-ID actions, coordinate mouse and keyboard actions, tab/navigation/scroll operations, Python/Playwright action mode
- 评测方式：Gymnasium reset/step interface delegates reward, completion, messages and task info to each adapter’s validate() method. There is no universal BrowserGym success metric or shared task total; retain benchmark/adapter version and action subset for comparisons.
- 侧重：shared browser-agent evaluation interface, benchmark adapters with separate task definitions
- 观测：browser screenshot, DOM snapshot, accessibility tree, tab/URL state, previous action and its error, chat messages and task goal
- 任务设置：混合

#### 数量记录

未记录数量。

A framework with interactive browser adapters and a static WebLINX evaluation integration, so the profile setting is mixed. README-listed integrations are components of this framework; their tasks and datasets are separate inventories. Core requires Playwright/Chromium; individual benchmarks have their own setup, credentials, licenses and validation rules. Apache-2.0 covers repository code only. No browser tasks or third-party project code were executed.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：7b685115ef822989fac9093518d16c46f0202736d005eed56e7f9fc36b43f3ee）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/browsergym/core/src/browsergym/core/env.py（获取于 2026-10-17T14:22:05Z；SHA-256：867cc6efdfead356839fef8a26b492502b8b5e3d165d1b3c17d24aaeec268d63）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/docs/src/core/action_space.rst（获取于 2026-10-17T14:21:11Z；SHA-256：c4bbe6b7d0cb36a5d5effab1aa5568301cead97fe4015273e1b82c667da3823a）
- https://api.github.com/repos/ServiceNow/BrowserGym/git/trees/main?recursive=1（获取于 2026-10-17T14:14:08Z；SHA-256：418efbe8c65ad7ebab61d3a066339876c820a9c957506eb456b8078ab352f6bf）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b）

---

## ScreenSpot Pro

ScreenSpot Pro 是侧重专业高分辨率界面的 GUI 定位基准。

- 目录页面：https://awesomecua.com/zh/resources/github-likaixin2000-screenspot-pro-gui-grounding/
- 原始来源：https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:likaixin2000/screenspot-pro-gui-grounding

- 完整记录 JSON：https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/record.json

### 结构化规格

- 动作 / 输出：predicted target coordinates
- 评测方式：For positive targets, the predicted point must fall inside the annotated bounding box.
- 侧重：GUI grounding
- 观测：high-resolution screenshots, target instructions
- 任务设置：离线

#### 数量记录

- 1,581 条目标标注 — sum of icon/text counts in the published card table（计算得出）（来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md）

Language, instruction style, and positive/negative target configuration are explicit evaluator options. This profile describes target localization. The target count uses card-table targets; expanded language/style evaluation instances use a different count.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/readme.md（获取于 2026-10-16T06:35:58Z；SHA-256：7b64ccad9cfec24c2c9cb35f55923bff93d53729cef3cc7463c79b29bdb1de1a）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py（获取于 2026-10-16T11:38:05Z；SHA-256：a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc）
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：c78681e624c748b7a9980b6a9fd1514cec5140c7b3c7f08fe21b36bc7468f2ce）

---

## VisualWebArena

在 WebArena 评估设置基础上扩展的视觉定位网页任务。

- 目录页面：https://awesomecua.com/zh/resources/github-web-arena-x-visualwebarena/
- 原始来源：https://github.com/web-arena-x/visualwebarena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面理解
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:web-arena-x/visualwebarena

- 完整记录 JSON：https://awesomecua.com/resources/github-web-arena-x-visualwebarena/record.json

### 结构化规格

- 动作 / 输出：browser element actions
- 评测方式：Execution-based completion checks for visually grounded web tasks.
- 侧重：multimodal web task completion
- 观测：screenshots with set-of-mark annotations, caption-augmented accessibility tree
- 任务设置：交互式

#### 数量记录

- 910 个任务 — full VWA suite（来源报告；来源：https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md）
- 233 条人工轨迹 — one task from each template type（来源报告；来源：https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md）

The 233 demonstration trajectories and the full 910-task evaluation set are different populations. Observation modes and captioning components differ across baseline agents.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：182529c2fce1e41f3a2162727205c54da8b3d2381b2273d726170ee9d8cf65cc）

---

## Mind2Web

提供用于通用网页导航研究的人类演示和任务。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-mind2web/
- 原始来源：https://github.com/OSU-NLP-Group/Mind2Web
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:osu-nlp-group/mind2web

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-mind2web/record.json

### 结构化规格

- 动作 / 输出：CLICK, TYPE, SELECT
- 评测方式：Offline candidate and action evaluation against recorded demonstrations; the repository distinguishes macro from micro averaging.
- 侧重：web action prediction, generalization to unseen sites and domains
- 观测：task instructions, HTML, recorded action history
- 任务设置：离线

#### 数量记录

- 1,009 个任务实例 — train split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 252 个任务实例 — cross-task test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 177 个任务实例 — cross-website test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 912 个任务实例 — cross-domain test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）

These are reported split inventories. Original Mind2Web, Multimodal-Mind2Web, and Online-Mind2Web have different inputs/protocols. The authors require macro-average metrics for comparison with the paper; test archives remain upstream.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：953ff47dbbc0c0563d1ec2d245b06d1206f2f38c4ed2f0da728e027ae2e5a973）

---

## WebVoyager

多模态网页导航智能体，以及基于真实网站的评估任务。

- 目录页面：https://awesomecua.com/zh/resources/github-minorjerry-webvoyager/
- 原始来源：https://github.com/MinorJerry/WebVoyager
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:minorjerry/webvoyager

- 完整记录 JSON：https://awesomecua.com/resources/github-minorjerry-webvoyager/record.json

### 结构化规格

- 动作 / 输出：Selenium-backed browser interactions
- 评测方式：The repository supplies an automated multimodal-model evaluation protocol.
- 侧重：live-web task completion
- 观测：webpage screenshots, textual task instructions
- 任务设置：交互式

#### 数量记录

- 643 条任务查询 — WebVoyager task collection（来源报告；来源：https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md）
- 15 个网站 — WebVoyager task collection（来源报告；来源：https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md）
- 90 个任务 — separate GAIA validation-derived web subset（来源报告；来源：https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md）

The GAIA-derived subset is separate from the 643 WebVoyager queries. Live sites and time-sensitive travel tasks can change; record the task snapshot and evaluation date.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：b5523941b2773634fdcf359b5b89bf0aca589f33ad9db30692c8b1912ed5dda5）
- https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）

---

## AndroidLab

可复现的 Android 基准，在预设虚拟设备上的 9 个应用中包含 138 项任务，可在 Mac 上通过 AVD 或在 Linux 上通过 Docker 运行，并与 Android Instruct 训练集一同发布。

- 目录页面：https://awesomecua.com/zh/resources/github-thudm-android-lab/
- 原始来源：https://github.com/THUDM/Android-Lab
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:thudm/android-lab

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-android-lab/record.json

### 结构化规格

- 动作 / 输出：Android operations through the agent framework
- 评测方式：The evaluation pipeline produces success, subgoal success, reversed redundancy, and reasonable-operation metrics; result generation requires a configured judge model.
- 侧重：Android task completion, subgoal completion, operation efficiency
- 观测：UI XML, set-of-marks views
- 任务设置：交互式

#### 数量记录

- 138 个任务 — benchmark task collection（来源报告；来源：https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md）
- 9 个应用 — benchmark application set（来源报告；来源：https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md）

The benchmark uses predefined virtual-device images and apps chosen to work without network/login requirements. XML and SoM modes should be reported separately. These counts concern evaluation tasks; Android Instruct is a separately released training set.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b）
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b）
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE（获取于 2026-10-16T06:41:58Z；SHA-256：1bbbee919161337e2456c587c6be809214406482cd9f1292a9eb62428f6961f3）

---

## Windows Agent Arena

面向多模态桌面智能体的 Windows 11 基准，在可复现的虚拟机中本地运行或通过 Azure ML 并行运行；更难的模式要求智能体自行设置任务。

- 目录页面：https://awesomecua.com/zh/resources/github-microsoft-windowsagentarena/
- 原始来源：https://github.com/microsoft/WindowsAgentArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Windows、桌面
- 主题：评测
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:microsoft/windowsagentarena

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-windowsagentarena/record.json

### 结构化规格

- 动作 / 输出：agent-defined Windows interactions
- 评测方式：Task configuration selects an evaluator and expected application or system outcome; evaluators return a reward for the resulting state.
- 侧重：Windows task completion, desktop workflows
- 观测：screenshots, accessibility information, screen-element detections
- 任务设置：交互式

#### 数量记录

- 154 个任务定义 — evaluation_examples_windows/test_all.json（计算得出）（来源：https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json）

Counted unique identifiers in the inspected manifest. Normal and hard modes differ in how much task setup the agent must perform. Record the difficulty and observation/backend configuration with each result; no VM was launched.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/docs/Develop-Tasks.md（获取于 2026-10-17T02:06:30Z；SHA-256：c565dc02ab0049bf9710b87e2760dda8d7c92268ea78f0354952695ab59c0de3）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json（获取于 2026-10-17T02:06:30Z；SHA-256：902fb24cf0a9e146bf6c29288e74a7254fe40294e49dd47363e0b15d65608fef）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：9906940f61b1f0b533fa7d99baf55178b2808fbe113ea51dfbfad8572ccd5f2b）

---

## MobileWorld (Tongyi-MAI)

容器化 Android 评估环境，包含纯 GUI、智能体与用户交互及 MCP 增强的任务，并检查应用和后端状态。

- 目录页面：https://awesomecua.com/zh/resources/github-tongyi-mai-mobileworld/
- 原始来源：https://github.com/Tongyi-MAI/MobileWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、人机协作、工具集成
- 证据核查日期：2026-10-17T09:12:16Z
- ID：github:tongyi-mai/mobileworld

### 范围记录

This is Tongyi-MAI/MobileWorld, distinct from jacklishufan/MobileWorld (MobileWorldBench). Public source includes task definitions, verification logic and environment orchestration. The README reports 201 tasks across 20 applications. Linux/KVM or WSL2/KVM is required by the documented host setup, with macOS support in progress. MCP and simulated-user settings can require separate external services.

- 完整记录 JSON：https://awesomecua.com/resources/github-tongyi-mai-mobileworld/record.json

### 结构化规格

- 动作 / 输出：Android GUI operations, MCP calls when enabled, agent-user interaction when enabled
- 评测方式：The publisher documents text-answer matching, backend database verification, local-storage inspection and application callbacks.
- 侧重：Android task completion, agent-user interaction, hybrid GUI and MCP use
- 观测：Android application interface, user-agent interaction when enabled
- 任务设置：交互式

#### 数量记录

- 201 个任务 — README benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md）
- 20 个移动应用 — README benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md）

Publisher-reported inventory. GUI-only, agent-user and MCP-augmented configurations have different dependencies and task eligibility; preserve enabled modes and step budget with results.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Repository code license; self-hosted applications, model APIs and MCP services keep their own terms.
  来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md（获取于 2026-10-17T09:12:16Z；SHA-256：fbc306b3414dfdb230171358efd6eb8d67573fbb94e11487a4a7e971e2abf0d9）
- https://api.github.com/repos/Tongyi-MAI/MobileWorld（获取于 2026-10-17T09:12:15Z；SHA-256：266e1fe5b5b1a4c1540ab0fd5eba206395084ee283f0079f424930a156cf8e18）
- https://api.github.com/repos/Tongyi-MAI/MobileWorld/git/trees/main?recursive=1（获取于 2026-10-17T09:14:08Z；SHA-256：14500ed2dfa14bb5c34211090f0c8827e4a16c3233e35a2d695c0d7261f9358b）
- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE（获取于 2026-10-17T09:14:09Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）

---

## WebShop

用于遵循指令的网页智能体的模拟购物环境。

- 目录页面：https://awesomecua.com/zh/resources/github-princeton-nlp-webshop/
- 原始来源：https://github.com/princeton-nlp/WebShop
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:princeton-nlp/webshop

- 完整记录 JSON：https://awesomecua.com/resources/github-princeton-nlp-webshop/record.json

### 结构化规格

- 动作 / 输出：search queries, click actions, product option selection
- 评测方式：未记录
- 侧重：instruction-conditioned product selection, web navigation
- 观测：HTML pages, simplified text views
- 任务设置：交互式

#### 数量记录

- 12,087 条指令 — crowd-sourced instruction collection（来源报告；来源：https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md）
- ≈ 1,180,000 个产品 — full product inventory（来源报告；来源：https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md）

This is a simulated shop. The default preview loads 1,000 products, while the full inventory is much larger; report the loaded subset and observation mode. Instructions and products are different populations.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/LICENSE.md
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：79b7a90a1413a52deb53142b5bbd81ecf40f61743bd4601c2835e91375898ec0）
- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：79b7a90a1413a52deb53142b5bbd81ecf40f61743bd4601c2835e91375898ec0）
- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/LICENSE.md（获取于 2026-10-16T06:41:58Z；SHA-256：8872dbf8660b00890b5e07ce1ea1f7a44fa7ae4e1857da56caba172b51dab3cb）

---

## Browser Use Benchmark (BU Bench)

Browser Use Benchmark (BU Bench V2.1) 在 200 项真实网页导航和交互任务上评测浏览器智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-browser-use-benchmark/
- 原始来源：https://github.com/browser-use/benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-04T14:41:44Z
- ID：github:browser-use/benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-browser-use-benchmark/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/browser-use/benchmark/HEAD/README.md（获取于 2026-11-04T14:41:44Z；SHA-256：849a8da2e5e5c972ae5ab6f46620c740b3c2440add259650fa08cb4dfd9917aa）

---

## GroundUI-1K

AgentStudio 从 GroundUI-18K 抽取的 1,000 条 GUI 元素定位测试集，包含网页、桌面和移动端截图、经 GPT-4o 重写的指令及目标边界框。

- 目录页面：https://awesomecua.com/zh/resources/url-d86f55753bfea45fe313/
- 原始来源：https://huggingface.co/datasets/agent-studio/GroundUI-1K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T16:08:23Z
- ID：url:d86f55753bfea45fe313

### 范围记录

The card calls this a test set and asks that it be reserved from training, although the Hub split is named train. One Parquet split in two shards carries image, instruction, raw_instruction, bbox, resolution, source and platform fields; platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels name Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. MIT is the dataset-card declaration, and screenshots drawn from upstream datasets keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-d86f55753bfea45fe313/record.json

### 结构化规格

- 动作 / 输出：click coordinate
- 评测方式：The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- 侧重：instruction-conditioned GUI element grounding
- 观测：screenshots, natural-language instructions
- 任务设置：离线

#### 数量记录

- 1,000 个示例 — Hub split at revision 5d18efc3 (named train, described as a test set)（来源报告；来源：https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md）
- 400 个示例 — platform label web（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）
- 300 个示例 — platform label desktop（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）
- 300 个示例 — platform label mobile（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）

Subset of GroundUI-18K sampled for efficient benchmarking; this count covers the subset, while the larger set is a separate Hub repository. Instructions were recaptioned with GPT-4o; raw_instruction keeps the source wording.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c）
- https://huggingface.co/api/datasets/agent-studio/GroundUI-1K/revision/5d18efc3085902648b7031bf747a1090356a1b17（获取于 2026-10-18T16:07:58Z；SHA-256：652082bd5c0e35322611a1c97a9291f061598ec7930b998ea4b437d3d56fd1f0）
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train（获取于 2026-10-18T16:07:17Z；SHA-256：afd9a96bdb3d2a6575c9b738ed709fad9ba41523bd82ee7714d6ffd54e22665a）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md（获取于 2026-10-18T16:07:58Z；SHA-256：1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py（获取于 2026-10-18T16:07:58Z；SHA-256：d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8）
- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c）

---

## LMMs-Eval

LMMs-Eval 是面向大型多模态模型的标准化评测测试框架，涵盖 GUI 定位、VQA、文档和视频评测基准。

- 目录页面：https://awesomecua.com/zh/resources/github-evolvinglmms-lab-lmms-eval/
- 原始来源：https://github.com/EvolvingLMMs-Lab/lmms-eval
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、网页、桌面、Android
- 主题：评测、界面理解、GUI 定位
- 证据核查日期：2026-11-04T13:12:14Z
- ID：github:evolvinglmms-lab/lmms-eval

- 完整记录 JSON：https://awesomecua.com/resources/github-evolvinglmms-lab-lmms-eval/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/EvolvingLMMs-Lab/lmms-eval/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/EvolvingLMMs-Lab/lmms-eval/HEAD/README.md（获取于 2026-11-04T13:12:14Z；SHA-256：f14d00e5d467b739b9bbbbf03eacf78dbbd6f28ec65f74ee52939556e6f02e23）
- https://raw.githubusercontent.com/EvolvingLMMs-Lab/lmms-eval/HEAD/LICENSE（获取于 2026-11-04T13:41:32Z；SHA-256：17358b5caadacb8108f14a6a319779cc8a20feed699f79c59e396e7e9dd5c33b）

---

## Online Mind2Web

提供 136 个在线网站上的 300 项任务，用于在线评估网页智能体；过时任务会逐步替换，提交结果经人工审核，并配有 WebJudge 自动评估器。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-online-mind2web/
- 原始来源：https://github.com/OSU-NLP-Group/Online-Mind2Web
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:osu-nlp-group/online-mind2web

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-online-mind2web/record.json

### 结构化规格

- 动作 / 输出：web interactions
- 评测方式：Human evaluation and WebJudge-based evaluation are documented as distinct assessment paths.
- 侧重：live-web task completion
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 300 个任务 — documented Online-Mind2Web suite（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md）
- 136 个网站 — documented site coverage（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md）

Tasks are actively replaced when websites or requirements become invalid. Record the task revision and submission schema because tasks are actively replaced when websites or requirements become invalid.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：49d7cc317fd2ba0df65abf65a0357d1fa2384e59019a96d4e24b784888599eaa）
- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：93675f9d13697ae98889d703b8fae86a7200623e7ae8d844c9ee2200ad480583）

---

## OSWorld-G

计算机使用定位基准，包含原始指令和改写指令；与 Jedi 合成数据流水线、含 4 百万个样例的 Jedi 数据集，以及 Jedi-3B 和 Jedi-7B 模型一同发布。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-osworld-g/
- 原始来源：https://github.com/xlang-ai/OSWorld-G
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:xlang-ai/osworld-g

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-osworld-g/record.json

### 结构化规格

- 动作 / 输出：click point or box center, refusal represented by negative coordinates in the evaluator
- 评测方式：The inspected Jedi runner maps predictions from resized-image coordinates back to the original image, then checks the predicted center against rectangle/polygon targets or the refusal rule. It reports overall and classification-group accuracy. This is offline grounding; OSWorld task-execution success is a separate measure.
- 侧重：desktop GUI grounding, infeasible-target refusal
- 观测：screenshot, instruction
- 任务设置：离线

#### 数量记录

未记录数量。

The repository retains original OSWorld-G.json and refined OSWorld-G_refined.json instructions as alternative benchmark versions. Refined instructions reduce requirements beyond grounding. The same repository also contains Jedi training/rendering material, which is excluded from benchmark counts. The standalone generic eval.py entry point is a stub; the named model runner supplies image_size to its geometry helper. No task count or successful execution is inferred from repository file totals. Apache-2.0 is recorded for code only.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e814851bc3016a2abf59358f99b80afd9c2bd5894fc34baddfb7e4d0aa03bd45）
- https://api.github.com/repos/xlang-ai/OSWorld-G/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：48308bba4f26b02cb7b8fbbc433bb31ec81c494dabd3af437ddbb10b8d9ce667）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_osworld_g_jedi.py（获取于 2026-10-17T14:22:04Z；SHA-256：64f64e0b847e0fa200aa6051e20b8035a436df00e2ef0d769688ab13fa4d3046）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py（获取于 2026-10-17T14:21:09Z；SHA-256：b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## Plasmate Benchmarks

Plasmate Benchmarks 为 Plasmate 语义浏览器引擎提供可复现的延迟、内存和 token 效率评测。

- 目录页面：https://awesomecua.com/zh/resources/github-plasmate-labs-plasmate-benchmarks/
- 原始来源：https://github.com/plasmate-labs/plasmate-benchmarks
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率
- 证据核查日期：2026-11-04T13:12:31Z
- ID：github:plasmate-labs/plasmate-benchmarks

- 完整记录 JSON：https://awesomecua.com/resources/github-plasmate-labs-plasmate-benchmarks/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/plasmate-labs/plasmate-benchmarks/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/plasmate-labs/plasmate-benchmarks/HEAD/README.md（获取于 2026-11-04T13:12:31Z；SHA-256：a1413e9e2e49d49849bcbfdc6676973fe41c0021d86f90449621d2ba5b4762c6）
- https://raw.githubusercontent.com/plasmate-labs/plasmate-benchmarks/HEAD/LICENSE（获取于 2026-11-04T13:22:33Z；SHA-256：be0abdc0b8595ce37f0eb281cb9b623651974eb33294459f6a7c802b1d1ab432）

---

## ScreenSpot v2

ScreenSpot 定位测试集的第二版，由 OS-Copilot 发布，桌面、移动端和网页标注分别存放，截图则共用一个归档文件。

- 目录页面：https://awesomecua.com/zh/resources/url-bd7214de6d98917c2350/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:bd7214de6d98917c2350

- 完整记录 JSON：https://awesomecua.com/resources/url-bd7214de6d98917c2350/record.json

### 结构化规格

- 动作 / 输出：click coordinates
- 评测方式：The inspected Jedi evaluation adapter reads the v2 mobile/desktop/web annotation files, scores a point against the target box, and reports overall, platform, and text/icon accuracy. This is a named compatible evaluator implementation; the OS-Atlas dataset card itself supplies no evaluator specification.
- 侧重：single-step GUI grounding on the ScreenSpot-v2 release
- 观测：screenshot, instruction
- 任务设置：离线

#### 数量记录

未记录数量。

The public Hub revision 5efbb1f1 contains three platform JSON annotation files and an image ZIP; its card only declares Apache-2.0. No sample total or equivalence to the original ScreenSpot test count is asserted. Keep v2 separate from v1 and retain evaluator/version and coordinate conversion when comparing results.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2（获取于 2026-10-16T06:38:26Z；SHA-256：7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408）
- https://osatlas.github.io/（获取于 2026-10-17T14:22:05Z；SHA-256：94547cb88756cf6a36bfb86d5fe9bdca1e40d7edb9e452c33cb462bbe760fed0）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_screenspot_v2_jedi.py（获取于 2026-10-17T14:21:09Z；SHA-256：0e8772bc8fd5a25c50d3c2f6b0caee05ed2ab4659d46d99d60adf2b5ab29e997）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py（获取于 2026-10-17T14:21:09Z；SHA-256：b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a）
- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2（获取于 2026-10-16T06:38:26Z；SHA-256：7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408）

---

## WebClick

网页界面定位基准，包含截图指令和目标框，覆盖智能体浏览、人工浏览和日历场景。

- 目录页面：https://awesomecua.com/zh/resources/url-5e2bd1b3398974b79c9c/
- 原始来源：https://huggingface.co/datasets/Hcompany/WebClick
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、评测、网页导航
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:5e2bd1b3398974b79c9c

### 范围记录

Four public test Parquet shards are present. The dataset card declares Apache-2.0. This is an offline localization test; reported screenshots and samples are different units.

- 完整记录 JSON：https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/record.json

### 结构化规格

- 动作 / 输出：click target or bounding box
- 评测方式：Assess localization against annotated targets; agentbrowse, humanbrowse and calendars are distinct source buckets.
- 侧重：instruction-conditioned web localization
- 观测：web screenshots, instructions
- 任务设置：离线

#### 数量记录

- 1,639 个示例 — test split（来源报告；来源：https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md）

The card reports more than 100 websites. Grounding accuracy and task completion are separate measures.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：958bbf0eb9f61afd6c576673fbe6f7d84e6c4b8a9d4d8c4fc0e1224b5d8da30b）
- https://huggingface.co/api/datasets/Hcompany/WebClick（获取于 2026-10-17T04:01:33Z；SHA-256：c9576957a3cb14785bf274691b50f90b04567a442ed60ee8c39f0f73108359f4）

---

## DeskMind Bench

DeskMind Bench 提供沙箱化的 macOS 桌面任务、状态评分器和参考轨迹，用于评测计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-deskmind-ai-bench/
- 原始来源：https://github.com/deskmind-ai/bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测、沙箱
- 证据核查日期：2026-11-04T14:02:44Z
- ID：github:deskmind-ai/bench

- 完整记录 JSON：https://awesomecua.com/resources/github-deskmind-ai-bench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/deskmind-ai/bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/deskmind-ai/bench/HEAD/README.md（获取于 2026-11-04T14:02:44Z；SHA-256：b2b3c0839d1286be08764abf1c747ac4c76a7e8d3ab8b25c28024abafac9c8e4）
- https://raw.githubusercontent.com/deskmind-ai/bench/HEAD/LICENSE（获取于 2026-11-04T14:07:17Z；SHA-256：1ff13e6d4ef6873561edb424365c17c311cbe0807f4afa5d7dda46ab6c5c659d）

---

## openadapt-evals

openadapt-evals 使用可复现的评测器，在 Windows Agent Arena 等评测基准上为 GUI 智能体和编译后的工作流评分。

- 目录页面：https://awesomecua.com/zh/resources/github-openadaptai-openadapt-evals/
- 原始来源：https://github.com/OpenAdaptAI/openadapt-evals
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、网页
- 主题：评测、工作流、沙箱
- 证据核查日期：2026-11-04T14:41:44Z
- ID：github:openadaptai/openadapt-evals

- 完整记录 JSON：https://awesomecua.com/resources/github-openadaptai-openadapt-evals/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OpenAdaptAI/openadapt-evals/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-evals/HEAD/README.md（获取于 2026-11-04T14:41:44Z；SHA-256：f7c6b6da8b6fe579d9e4e576829c6daf4bd9611a5f134cf478fe85a0e2862156）
- https://raw.githubusercontent.com/OpenAdaptAI/openadapt-evals/HEAD/LICENSE（获取于 2026-11-04T14:45:03Z；SHA-256：59aeac47ca72de18ba99dd38f0b2f9596b822f85e9cf816684369fadb6664e06）

---

## showdown

showdown-clicks 基准的评测代码：eval.py 判断模型在 macOS 截图上预测的点击是否落在标注的边界框内，并集成了 Claude、Qwen、UI-TARS 等模型。

- 目录页面：https://awesomecua.com/zh/resources/github-generalagents-showdown/
- 原始来源：https://github.com/generalagents/showdown
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、评测、动作预测
- 证据核查日期：2026-11-10T03:00:59Z
- ID：github:generalagents/showdown

### 范围记录

The clicks/ directory holds eval.py, scripts and model integrations for Ace, Claude, Gemini, Molmo, OmniParser, OpenAI, OpenAI CUA, Qwen and UI-TARS; its .gitignore excludes data/*, and the README links the showdown-clicks-dev data on Hugging Face. The README reports accuracy with bootstrapped 95% intervals and latency per model on the 557-click dev subset of a 5,679-click collection.

- 完整记录 JSON：https://awesomecua.com/resources/github-generalagents-showdown/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/generalagents/showdown/86cbd20d161eb3a3e49babe677a26dcec4beb91a/README.md（获取于 2026-11-10T03:00:59Z；SHA-256：bce749a655255ac4100318b93fd8a40f381b90f093c38f7884edd1f8b3de593b）

---

## MiniWoB++

扩展自 OpenAI MiniWoB 的 100 多个网页交互环境，可通过 Python 中的 Gymnasium API 使用 Selenium 控制浏览器。

- 目录页面：https://awesomecua.com/zh/resources/github-farama-foundation-miniwob-plusplus/
- 原始来源：https://github.com/Farama-Foundation/miniwob-plusplus
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、强化学习
- 证据核查日期：2026-10-16T06:40:54Z
- ID：github:farama-foundation/miniwob-plusplus

### 范围记录

The maintainer README identifies MiniWoB++ as the extension introduced in the 2018 workflow-guided exploration paper. It separately links World of Bits as the source for the original MiniWoB predecessor. The current Farama interface, environment inventory, and maintenance status belong to the retained repository snapshot.

- 完整记录 JSON：https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/record.json

### 结构化规格

- 动作 / 输出：configurable coordinate actions, element-reference actions, keyboard input
- 评测方式：未记录
- 侧重：small web interaction tasks
- 观测：task instructions, screenshots, visible DOM-element attributes
- 任务设置：交互式

#### 数量记录

- > 100 个 Web 环境 — README collection size（来源报告；来源：https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md）

The README gives a lower bound for the active-environment inventory. Action presets expose different capabilities, so comparisons must identify the preset. The repository is in maintenance mode.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f）
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f）
- https://miniwob.farama.org/content/observation_space/（获取于 2026-10-17T02:03:23Z；SHA-256：511039e0e3c26b117e7e0a001746c26ec6d94a8ab8c467f0be0bc1a0b01e870a）
- https://miniwob.farama.org/content/action_space/（获取于 2026-10-17T02:03:23Z；SHA-256：ae7bf6a3b98b198b985d7ca7b41cb2bdab3cf48e6445467ad9a8d4a2c8df240f）
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE（获取于 2026-10-16T06:42:07Z；SHA-256：fd6529fb8f648d4130fd969e3d7fc740c9992a0bd94a1998f52555a873311511）

---

## ScienceBoard

面向多模态智能体的科学工作流程任务，涉及 ChimeraX、KAlgebra、Celestia、Grass GIS 和 Lean 4 等桌面软件；应用经过修改，可暴露状态供评估使用。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-scienceboard/
- 原始来源：https://github.com/OS-Copilot/ScienceBoard
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、科学工作流
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:os-copilot/scienceboard

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-scienceboard/record.json

### 结构化规格

- 动作 / 输出：PyAutoGUI desktop actions, code/tool commands and answer/stop actions according to configured agent mode
- 评测方式：Application-specific verifiers inspect state, files, database values, equations, compilation or answer/stop conditions. The official audit records 242 verifier entries across its VM task suite. This profile covers the released VM task definitions; Docker smoke results and Raw/Dual alternatives are separate populations.
- 侧重：scientific-software desktop workflows, GUI and code-assisted scientific tasks
- 观测：desktop screenshots, accessibility-tree observations, set-of-marks with accessibility tree
- 任务设置：交互式

#### 数量记录

- 169 个 VM 任务定义 — tasks/VM/**/*.json at tree 21b5eb0f; excludes tasks/Raw and tasks/Dual（计算得出）（来源：https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1）
- 6 个应用系列 — VM suite: Celestia, ChimeraX, GrassGIS, KAlgebra, Lean, TeXstudio（来源报告；来源：https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md）

Manifest count 169 matches the official verifier audit. Other Raw/Dual definitions can represent alternative execution modes of the same problems. Official Docker migration documents a 20-task acceptance subset; full-suite performance uses a different scope, and legacy VMware remains. External service sign-in/rate limits, amd64 binaries and ChimeraX redistribution terms limit portability. Only code MIT is established; VM, scientific data and bundled apps need their own terms.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md（获取于 2026-10-17T14:21:10Z；SHA-256：d276e11127abc5826bd1b2aa2caf543fcd45a8a60477774e8c8b1054067997ec）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/known-issues.md（获取于 2026-10-17T14:21:10Z；SHA-256：4f90270617c0c1d58f523c0a7f2e4603fa67a49560d68e2f88cfa080d764313b）
- https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1（获取于 2026-10-17T14:14:07Z；SHA-256：3398670a517a5d1d71f420dd866493d3f8a77853e3933fd4928103f9a8be1e4f）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/sci/base/task.py（获取于 2026-10-17T14:35:24Z；SHA-256：d6a1481b453c074e34739fd29def56efa35a1dc10e856418f557f067e9ff08c5）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：cbb1d28b515a39c294963d4bfc24077e669a483fc5ebba9b84a727afd4187426）

---

## ScreenSpot

ScreenSpot 是 GUI 定位测试集，包含来自 iOS、Android、macOS、Windows 和网页界面的 1,272 条截图指令，每条均标注目标元素的边界框。

- 目录页面：https://awesomecua.com/zh/resources/url-7abb418096432f56c685/
- 原始来源：https://huggingface.co/datasets/rootsautomation/ScreenSpot
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:7abb418096432f56c685

- 完整记录 JSON：https://awesomecua.com/resources/url-7abb418096432f56c685/record.json

### 结构化规格

- 动作 / 输出：predicted click point; a predicted box is reduced to its center
- 评测方式：The SeeClick evaluator scores whether the predicted point falls inside the target box, with platform and text/icon breakdowns. The Hub packaging uses xyxy boxes, whereas the original evaluator reads xywh and converts it; adapt the loader to the chosen release.
- 侧重：single-step GUI element grounding
- 观测：screenshot, English instruction
- 任务设置：离线

#### 数量记录

- 1,272 个指令–目标示例 — Hub test split at 0be08781; row count distinct from unique screenshots（来源报告；来源：https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md）

Offline, zero-shot evaluation across mobile, desktop, and web. The card explicitly excludes training use in its intended-use description. Public API reports ungated Parquet files and canonical Hub id bevaya/ScreenSpot; the catalog identity is preserved. Apache-2.0 is the Hub data declaration. No runtime or underlying screenshot rights audit was performed.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/rootsautomation/ScreenSpot
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-16T06:38:26Z；SHA-256：9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9）
- https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md（获取于 2026-10-17T14:10:00Z；SHA-256：5ab2240c064502f75a6726311e10e7724ab7055347697f883b15a6ee8e7d00a6）
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/pretrain/screenspot_test.py（获取于 2026-10-17T14:22:04Z；SHA-256：eb72113eefd4868114f8a8105eba2d3385da9034a5b3a4860661e03ae7dcae15）
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-16T06:38:26Z；SHA-256：9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9）
- https://huggingface.co/api/datasets/bevaya/ScreenSpot（获取于 2026-10-17T19:14:56Z；SHA-256：af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c）
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-17T19:14:56Z；SHA-256：af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c）

---

## TheAgentCompany

自包含的职场环境，用于评估智能体处理涉及网站、文件、代码和模拟同事的专业任务。

- 目录页面：https://awesomecua.com/zh/resources/github-theagentcompany-theagentcompany/
- 原始来源：https://github.com/TheAgentCompany/TheAgentCompany
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、工作流、跨应用
- 证据核查日期：2026-10-16T10:42:34Z
- ID：github:theagentcompany/theagentcompany

- 完整记录 JSON：https://awesomecua.com/resources/github-theagentcompany-theagentcompany/record.json

### 结构化规格

- 动作 / 输出：web browsing, code execution, coworker communication
- 评测方式：Task-specific evaluator scripts run within the prepared workplace environment.
- 侧重：professional workflows, multi-tool tasks
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 175 张任务图像 — workspace images documented by the README（来源报告；来源：https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/README.md）

Each task is packaged as a Docker image. Record task-image and server versions; the environment includes simulated coworkers and external application state.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/README.md（获取于 2026-10-16T10:42:34Z；SHA-256：d1646f67d49d38ef1e81bf7b5057dfc3d6f172b4c8a7413a2cc78741ccb08723）
- https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/LICENSE（获取于 2026-10-16T10:48:42Z；SHA-256：2d6976a9b482bb14d9cd4f0d97ce6e14305496f1649b8667cb91d027c670930f）

---

## VisualAgentBench

涵盖视觉 GUI、具身和设计任务的评估框架，包括移动端及基于 WebArena 的环境。

- 目录页面：https://awesomecua.com/zh/resources/github-thudm-visualagentbench/
- 原始来源：https://github.com/THUDM/VisualAgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、网页、Android
- 主题：评测
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:thudm/visualagentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-visualagentbench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：21afbc4086441dee131fe4b84986870f9b280413dd2a38df6e99406f1fc45586）
- https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/LICENSE（获取于 2026-10-16T10:48:41Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WebArena-Verified

经审校重新发布 WebArena 的 812 项网页任务，修正参考答案，并以确定性评估器根据结构化智能体回答和捕获的网络轨迹评分，另含 258 项高难度任务子集。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-webarena-verified/
- 原始来源：https://github.com/ServiceNow/webarena-verified
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T11:06:05Z
- ID：github:servicenow/webarena-verified

### 范围记录

The README describes this as the verified release of WebArena and keeps the original task file (assets/dataset/test.raw.json) for reference; scores on it are not interchangeable with original WebArena results. The cited paper is a NeurIPS 2025 Scaling Environments for Agents workshop paper on OpenReview (94tlGxmqkN) with no arXiv identifier, so no paper record is linked. The task file is also published as the Hugging Face dataset AmineHA/WebArena-Verified, which was not reviewed here; Apache-2.0 is the repository code license and is not applied to the task data or to the self-hosted site images. Docker images and a PyPI package are documented.

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-webarena-verified/record.json

### 结构化规格

- 动作 / 输出：browser interactions on self-hosted WebArena sites
- 评测方式：Deterministic evaluators compare a structured agent response (task type, status, retrieved data) with the reference; 488 of the 812 tasks also check network events from a captured HAR trace, with 663 network-event checks in all. LLM-as-a-judge and substring matching were removed, and runs can be scored offline from saved responses and traces.
- 侧重：web task completion, information retrieval from self-hosted websites
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 812 个任务定义 — assets/dataset/webarena-verified.json（计算得出）（来源：https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json）
- 258 个任务 ID — WebArena-Verified Hard subset (assets/dataset/subsets/webarena-verified-hard.json)（计算得出）（来源：https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json）

Counts are unique task_id values in the inspected manifests. Tasks span the shopping, shopping_admin, gitlab, reddit, map and wikipedia sites, including cross-site tasks; each task carries a revision number. The observation format and agent harness are not prescribed. Record the task-file revision, subset and environment images with a score.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/README.md（获取于 2026-10-18T11:06:05Z；SHA-256：8f343078ba55263182f86ec54497958a1174d90cb8ce7573cedcc29f5c8e6b50）
- https://api.github.com/repos/ServiceNow/webarena-verified（获取于 2026-10-18T11:06:07Z；SHA-256：564d8926e929185697d0471e5554b84743cf1eae4776045ab46f72b2cab49c31）
- https://api.github.com/repos/ServiceNow/webarena-verified/git/trees/main?recursive=1（获取于 2026-10-18T11:06:08Z；SHA-256：7fefd38b6a2cacdc12e0d659e37bed409a3784da269b0c18558e74ab71ae1e06）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json（获取于 2026-10-18T11:06:05Z；SHA-256：d65275660814663375028e9017e1f929e3c38321041b125795e2713b52243d30）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json（获取于 2026-10-18T11:06:06Z；SHA-256：3b0a4df231bb5a0c642215e521c3fa97701a384f52a734dc2db8f617ad0591a7）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE（获取于 2026-10-18T11:06:06Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE（获取于 2026-10-18T11:06:06Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WebLINX

WebLINX 提供对话式网页导航的演示数据和评估。

- 目录页面：https://awesomecua.com/zh/resources/github-mcgill-nlp-weblinx/
- 原始来源：https://github.com/mcgill-nlp/weblinx
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:mcgill-nlp/weblinx

- 完整记录 JSON：https://awesomecua.com/resources/github-mcgill-nlp-weblinx/record.json

### 结构化规格

- 动作 / 输出：predicted browser actions
- 评测方式：Offline evaluation compares action predictions against recorded human demonstrations.
- 侧重：conversational web navigation, next-action prediction
- 观测：dialogue history, HTML, screenshots, action history
- 任务设置：离线

#### 数量记录

- ≈ 100,000 次交互 — original paper benchmark（来源报告；来源：https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50）
- ≈ 2,300 条专家演示 — original paper benchmark（来源报告；来源：https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50）
- > 150 个网站 — original paper benchmark（来源报告；来源：https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50）

The figures are rounded descriptions from the original paper. WebLINX 1.1 / BrowserGym removes some demonstrations and changes evaluated steps, including tab actions; its results and counts have a different scope from the original release. This profile covers replayed demonstration steps; live task completion is a separate measure.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528）
- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528）
- https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50（获取于 2026-10-16T06:31:24Z；SHA-256：3aac6e9748769efff3c475ede0da192776daa03431d231b5f67e2aa50f8a3be9）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/main/README.md（获取于 2026-10-17T02:03:23Z；SHA-256：9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527）
- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：cc0156153933fb96f6f3bf8d736c15e24d78d0838945c2ed456e3ada96cf67c4）

---

## WorkArena

围绕 ServiceNow 构建的浏览器端企业工作流程任务。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-workarena/
- 原始来源：https://github.com/ServiceNow/WorkArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工作流
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:servicenow/workarena

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-workarena/record.json

### 结构化规格

- 动作 / 输出：BrowserGym browser actions
- 评测方式：Task-specific checks on ServiceNow workflows; levels and task configurations define different evaluations.
- 侧重：enterprise web workflows, compositional tasks
- 观测：multimodal browser observations
- 任务设置：交互式

#### 数量记录

- 33 个任务定义 — WorkArena-L1 atomic tasks（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）
- 19,912 个任务实例 — WorkArena-L1 documented instances（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）
- 682 个任务定义 — WorkArena++ compositional tasks（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）

Definitions and instantiated tasks are different units. ServiceNow instance access is gated. WorkArena-L1 and WorkArena++ should be reported separately.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：834a48f0346036a0fc591a36f9eb6f513b44a2777a66afa0917f28fc63f29334）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）
- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b）

---

## BlenderWorld

一项包含 223 个 Blender 创作任务的基准，输入涵盖文本、图像和视频。智能体提交可编辑项目，由评测程序渲染并依据评分细则评估。

- 目录页面：https://awesomecua.com/zh/resources/url-883e7c46e883b005762c/
- 原始来源：https://huggingface.co/datasets/Qwen/BlenderWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、科学工作流、工具集成
- 证据核查日期：2026-11-09T21:10:10Z
- ID：url:883e7c46e883b005762c

### 范围记录

The package includes task inputs, Blender environments, verifier code, and rubric data. Its Harbor setup calls for a GPU-capable Linux sandbox; the adapter and evaluator code is MIT licensed.

- 完整记录 JSON：https://awesomecua.com/resources/url-883e7c46e883b005762c/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/Qwen/BlenderWorld
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Qwen/BlenderWorld（获取于 2026-11-09T21:10:10Z；SHA-256：dd659d8f6434ac87c396b423811baeb9679fb5a5831f822938caef08b33b8079）
- https://huggingface.co/api/datasets/Qwen/BlenderWorld（获取于 2026-11-09T21:10:10Z；SHA-256：dd659d8f6434ac87c396b423811baeb9679fb5a5831f822938caef08b33b8079）

---

## CUA-Gym-Hub

CUA-Gym-Hub 提供 98 个自包含的模拟网页应用，配有确定性状态验证器，可用作 RL 训练和评测环境。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-cua-gym-hub/
- 原始来源：https://github.com/xlang-ai/CUA-Gym-Hub
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、强化学习、沙箱
- 证据核查日期：2026-11-04T14:20:05Z
- ID：github:xlang-ai/cua-gym-hub

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-cua-gym-hub/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/CUA-Gym-Hub/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/CUA-Gym-Hub/HEAD/README.md（获取于 2026-11-04T14:20:05Z；SHA-256：979699e12a3ee57f2059720cf2f22abbd42fd07a97896826522f9ec5ccb8e9c5）
- https://raw.githubusercontent.com/xlang-ai/CUA-Gym-Hub/HEAD/LICENSE（获取于 2026-11-04T14:23:33Z；SHA-256：4b90ed4baf4f3ac8df3e7e9bb4bb0cf758146d1ab716a687366cbee9f7418af4）

---

## Halluminate Westworld

Halluminate Westworld 使用设于仿真网站的任务评估网页智能体，并提供任务加载、手动演示和评测接口。

- 目录页面：https://awesomecua.com/zh/resources/github-halluminate-westworld/
- 原始来源：https://github.com/Halluminate/westworld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、沙箱
- 证据核查日期：2026-11-09T21:09:49Z
- ID：github:halluminate/westworld

### 范围记录

The source links a Hugging Face task dataset. Its demo requires browser support and an API key for simulated environments.

- 完整记录 JSON：https://awesomecua.com/resources/github-halluminate-westworld/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Halluminate/westworld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Halluminate/westworld/HEAD/README.md（获取于 2026-11-09T21:09:49Z；SHA-256：20455fb9e6f65fd921eb20b8de96bda4e1c996487b10904972ffb901e5f7a734）
- https://raw.githubusercontent.com/Halluminate/westworld/HEAD/LICENSE（获取于 2026-11-09T21:12:08Z；SHA-256：db2802dd8e3073d4d30d53e8195c98047c3a53998177460a3d7d1357974f02a1）

---

## KNOWS Benchmark

KNOWS 在涵盖 Google Docs、Sheets 和 Slides 的真实、开放式 Google Workspace 任务上评测网页智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-alexgill321-knows-benchmark/
- 原始来源：https://github.com/alexgill321/KNOWS-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:alexgill321/knows-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-alexgill321-knows-benchmark/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/alexgill321/KNOWS-benchmark/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/alexgill321/KNOWS-benchmark/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：f750474dccbe9673e3bec61826570cfbcf59e7483c742d7dcdd1f66f9cd04475）
- https://raw.githubusercontent.com/alexgill321/KNOWS-benchmark/HEAD/LICENSE（获取于 2026-11-04T14:07:20Z；SHA-256：989b42e4201a4e1c21a6ea4e796bd43d9f52f3090f602afc33fad1867392999f）

---

## Lexbench-Headless-Browser

Lexbench-Headless-Browser 在 1,928 项网页任务上评测 13 种无头浏览器自动化运行时。

- 目录页面：https://awesomecua.com/zh/resources/github-lexmount-lexbench-headless-browser/
- 原始来源：https://github.com/lexmount/Lexbench-Headless-Browser
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率
- 证据核查日期：2026-11-04T14:41:45Z
- ID：github:lexmount/lexbench-headless-browser

- 完整记录 JSON：https://awesomecua.com/resources/github-lexmount-lexbench-headless-browser/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/lexmount/Lexbench-Headless-Browser/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lexmount/Lexbench-Headless-Browser/HEAD/README.md（获取于 2026-11-04T14:41:45Z；SHA-256：585540235499a1aa708e7ec7fabf2594994437a7a8d417302c3c82db3c553e65）
- https://raw.githubusercontent.com/lexmount/Lexbench-Headless-Browser/HEAD/LICENSE（获取于 2026-11-04T14:45:03Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## MemGUI-Bench

MemGUI-Bench 是涵盖 26 款应用、128 项任务的记忆能力 Android 基准，在 Docker 模拟器中通过类似 MobileWorld 的运行环境执行，由 MemGUI-Eval 这一 LLM 评估器报告 pass@k 和记忆指标。

- 目录页面：https://awesomecua.com/zh/resources/github-lgy0404-memgui-bench/
- 原始来源：https://github.com/lgy0404/MemGUI-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、记忆、长任务、跨应用
- 证据核查日期：2026-10-19T07:05:14Z
- ID：github:lgy0404/memgui-bench

### 范围记录

Official benchmark code for the MemGUI-Bench paper (ACM MM 2026 per the README). The mg CLI pulls a prebuilt Docker runtime with the Android emulator and the MemGUI AVD snapshot, launches parallel backend containers on a Linux host with KVM, runs agents through MobileWorld's agent interface (src/mobile_world) and writes MobileWorld-format trajectories with screenshots. MemGUI-Eval (memgui_eval/) describes each step with a multimodal model and makes a final decision with a second model; the leaderboard uses Gemini 2.5 Flash and Gemini 2.5 Pro for these roles. Each task CSV row gives the app(s), difficulty, whether UI memory is required and golden steps; the default step budget is int(golden_steps * 2.5 + 1). The Hugging Face dataset lgy0404/MemGUI-Bench holds the same two task CSV files (byte-identical at revisions 217713e and 3fb01b6), so it is recorded as an alias.

- 完整记录 JSON：https://awesomecua.com/resources/github-lgy0404-memgui-bench/record.json

### 结构化规格

- 动作 / 输出：MobileWorld JSON actions
- 评测方式：MemGUI-Eval: an LLM step-description model and a final-decision model judge each trajectory; reported metrics are pass@K, information retrieval rate (IRR), failure recovery rate (FRR), memory task performance ratio (MTPR), step ratio, time per step and cost per step.
- 侧重：memory-intensive mobile GUI tasks, cross-app long-horizon tasks
- 观测：screenshots
- 任务设置：交互式

#### 数量记录

- 128 个任务 — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark)（计算得出）（来源：https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv）
- 40 个任务 — data/memgui-tasks-40.csv at 3fb01b6 (quick-test subset)（计算得出）（来源：https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-40.csv）
- 26 个应用 — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark)（计算得出）（来源：https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv）
- 115 个标记为需要 UI 记忆的任务 — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark)（计算得出）（来源：https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv）

Counts come from the pinned CSV files and match the README badges (128 tasks, 26 apps, 89.8% memory-intensive). The full set has 48, 42 and 38 tasks at difficulty levels 1, 2 and 3, and its golden steps average about 36. The 40-task file is a subset of the 128 tasks. Leaderboard settings fix the judge models; debugging runs may use others.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/HEAD/LICENSE
- 数据：mit — https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The Hub card for the task CSV files (the alias lgy0404/MemGUI-Bench) declares mit; it covers the task definitions, not app content.
  来源：https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md

### 一手证据

- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md（获取于 2026-10-19T07:05:14Z；SHA-256：fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb）
- https://api.github.com/repos/lgy0404/MemGUI-Bench/git/trees/3fb01b6cc0d13e287c67f488c76f449df7d65558?recursive=1（获取于 2026-10-19T07:05:17Z；SHA-256：5ea1ee28f93335f167bc25b3db56248dc01cfc066ea8eceaddaf361545fc03ab）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv（获取于 2026-10-19T07:05:18Z；SHA-256：28d862beb94250e5630b6f7cc2a50369f4fb533fe7cf780991c1f4f73790be07）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-40.csv（获取于 2026-10-19T07:05:18Z；SHA-256：138b8371bf1880df837b99d596e5a86679a9fe0ce0be33da69846e4ea2b44169）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/memgui_eval/evaluator.py（获取于 2026-10-19T07:05:18Z；SHA-256：c8e9270c39852e17fa1b2d34bf3ca630375f68a1d817474e6a446e53d9490c1f）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/LICENSE（获取于 2026-10-19T07:05:18Z；SHA-256：4fcd9de2604362b40f3529af286e34882e01bd4cb26dbedc9934c09a3f6ee827）
- https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md（获取于 2026-10-19T07:05:19Z；SHA-256：1c291cb5096e2cf98e945456b1acb66d7b1bebd3d950c9d043b34ef75dd660b5）
- https://huggingface.co/api/datasets/lgy0404/MemGUI-Bench/revision/217713ee891b227b1f297c3a59dd1798e9d4a09b（获取于 2026-10-19T07:05:19Z；SHA-256：d44183bab1958372904dd52e19efdb4d8bb277a896fe24a9954b65e2fc926db1）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/HEAD/LICENSE（获取于 2026-10-19T07:06:23Z；SHA-256：4fcd9de2604362b40f3529af286e34882e01bd4cb26dbedc9934c09a3f6ee827）

---

## MMBench-GUI

跨 6 个平台的 4 级 GUI 智能体基准，涵盖内容理解、元素定位、任务自动化和协作，采用效率与质量的面积指标评分。

- 目录页面：https://awesomecua.com/zh/resources/github-open-compass-mmbench-gui/
- 原始来源：https://github.com/open-compass/MMBench-GUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:open-compass/mmbench-gui

- 完整记录 JSON：https://awesomecua.com/resources/github-open-compass-mmbench-gui/record.json

### 结构化规格

- 动作 / 输出：未记录
- 评测方式：Level-specific evaluation; Efficiency–Quality Area (EQA) combines navigation quality and efficiency.
- 侧重：screen understanding, grounding, task automation, task collaboration
- 观测：screenshots
- 任务设置：混合

#### 数量记录

- > 8,000 个任务 — reported multi-level benchmark（来源报告；来源：https://raw.githubusercontent.com/open-compass/MMBench-GUI/HEAD/README.md）

The README documents four levels, but its release notes and TODOs distinguish released L1/L2 evaluation from pending L3/L4 integration. The README documents four levels; release notes and TODOs distinguish released L1/L2 evaluation from pending L3/L4 integration.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/open-compass/MMBench-GUI/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：35db9fca3ed1c1a3513924fefff4ccd224bc70cd7eb4bf8c54fcb9048851988e）

---

## MobileGym

运行于浏览器的移动应用模拟器，提供可编程状态、参数化任务和确定性的状态检查评判机制，用于并行评估 GUI 智能体和在线强化学习。

- 目录页面：https://awesomecua.com/zh/resources/github-purewhiter-mobilegym/
- 原始来源：https://github.com/Purewhiter/mobilegym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、手机操作、强化学习、沙箱
- 证据核查日期：2026-10-17T11:18:19Z
- ID：github:purewhiter/mobilegym

### 范围记录

The inspected code release is v0.1.0, with a separately listed data-v0.1.0 archive. The interaction target is a browser-hosted Android-like simulation; real-device transfer results are separate publisher-reported experiments. Source split manifests contain 160 training IDs and 256 test IDs with no duplicates or overlap. Platform/training code declares Apache-2.0. LICENSE-DATA applies CC-BY-NC-4.0 only to maintainer-created compilation, curation and synthetic content, and explicitly leaves third-party UGC/API terms and author rights separate. No runtime, archive or model was executed/downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/github-purewhiter-mobilegym/record.json

### 结构化规格

- 动作 / 输出：tap, type, swipe, back, home, drag, complete
- 评测方式：Deterministic task judges inspect state changes; reported metrics distinguish success, progress, false completion and unexpected side effects.
- 侧重：mobile GUI task completion in simulation, state verification and parallel training
- 观测：simulated mobile screenshots, structured simulator state for judges
- 任务设置：交互式

#### 数量记录

- 416 个任务模板 — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md）
- 28 个模拟应用 — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md）
- 160 个任务标识符 — bench_env/splits/train.txt（计算得出）（来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt）
- 256 个任务标识符 — bench_env/splits/test.txt（计算得出）（来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt）

The split-ID inventory counts task IDs. Extra runtime/data dependencies and third-party content terms remain distinct.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE
- 数据：CC-BY-NC-4.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA
- 文档：未记录
- 权重：未记录

- 代码审核：Core source LICENSE; mobilegym-rl has a separate matching Apache-2.0 license and retains vendored notices.
  来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE

- 数据审核：Limited to maintainers’ dataset compilation/curation and authored synthetic content; third-party user content remains subject to platform terms and its authors’ rights.
  来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA

### 一手证据

- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md（获取于 2026-10-17T11:18:19Z；SHA-256：815294dd2aa4bf8264978c3bfedee85a3a2c835c511860c732314a4c282a974a）
- https://api.github.com/repos/Purewhiter/mobilegym（获取于 2026-10-17T11:18:18Z；SHA-256：48df04a2fbf479f956d5c7f22d7006c22f591b8857cab8a1d64c196349045495）
- https://api.github.com/repos/Purewhiter/mobilegym/git/trees/main?recursive=1（获取于 2026-10-17T11:22:56Z；SHA-256：68f1fa16c0999079bccc3aa1b6c3c22b72b570a5b971837c5026ea5408853375）
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/v0.1.0（获取于 2026-10-17T11:23:08Z；SHA-256：cb1057b0a0a2ef7ab781414c168bb41f0f3da88afc042ce266d6063493561bde）
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/data-v0.1.0（获取于 2026-10-17T11:23:09Z；SHA-256：ad0c86a6cdde2caba8bd1f98b121803817d93718319a863b0b833da2760c23aa）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE（获取于 2026-10-17T11:22:59Z；SHA-256：7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/mobilegym-rl/LICENSE（获取于 2026-10-17T11:27:50Z；SHA-256：58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA（获取于 2026-10-17T11:22:59Z；SHA-256：e222fa518c5003d425ee9b371e987c95ba10e52b54fea078571254ae6a8eaf23）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt（获取于 2026-10-17T11:27:49Z；SHA-256：0ecef460fecfd8aa91dcbb2cd4cca17b033f620f85a50d7f0b598ed19a27c0eb）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt（获取于 2026-10-17T11:27:48Z；SHA-256：a3d485015d480f4f1ebbd12dbbf02c25c0aa667d1afcf5f6fa35f0263a82c567）

---

## MyPCBench

一个 Linux 桌面基准，包含跨预置网页应用和办公软件的 184 项任务，使用虚拟机运行器与评分细则进行评分。

- 目录页面：https://awesomecua.com/zh/resources/github-ljang0-mypcbench/
- 原始来源：https://github.com/ljang0/MyPCBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、网页
- 主题：评测、跨应用、沙箱、长任务
- 证据核查日期：2026-11-09T06:16:33Z
- ID：github:ljang0/mypcbench

### 范围记录

The repository ships the harness, tasks, rubrics, persona metadata and documentation. The runnable VM is distributed separately as a Docker image and a qcow2 file; the README specifies Linux, KVM and QEMU for direct runs.

- 完整记录 JSON：https://awesomecua.com/resources/github-ljang0-mypcbench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ljang0/MyPCBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ljang0/MyPCBench/HEAD/README.md（获取于 2026-11-09T06:16:33Z；SHA-256：5b82d77eeb655123ee6b287b23491d113bea762de0850e522e540a0fd4c768a3）
- https://raw.githubusercontent.com/ljang0/MyPCBench/HEAD/LICENSE（获取于 2026-11-09T06:13:33Z；SHA-256：1e18ae7e58d5f87ba1edec3967e53489879185d3b932f57f14308fd2014f3b80）

---

## OSWorkerBench

桌面图形界面智能体基准，包含横跨 17 个业务领域和 41 个应用的 100 项办公任务。它发布任务表和演示数据表，供 UI-Mate 评测框架使用。

- 目录页面：https://awesomecua.com/zh/resources/url-c8c3d4ef20e68086a812/
- 原始来源：https://huggingface.co/datasets/tencent/OSWorkerBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务、工作流、数据生成
- 证据核查日期：2026-11-09T19:57:27Z
- ID：url:c8c3d4ef20e68086a812

### 范围记录

The card names task and demonstration test splits. Executing evaluations requires the UI-Mate harness, an Ubuntu Docker VM, mock applications, and a compatible model endpoint. The card declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-c8c3d4ef20e68086a812/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/tencent/OSWorkerBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/tencent/OSWorkerBench（获取于 2026-11-09T19:57:27Z；SHA-256：4daa1b9bca5134e229d27cac4e9a1dbed09c3a286b83a51e746a92066bdd1a06）
- https://huggingface.co/api/datasets/tencent/OSWorkerBench（获取于 2026-11-09T19:57:27Z；SHA-256：4daa1b9bca5134e229d27cac4e9a1dbed09c3a286b83a51e746a92066bdd1a06）

---

## OSWorld-MCP

OSWorld-MCP 在 OSWorld 中评测计算机使用智能体混合使用 GUI 交互和 Model Context Protocol（MCP）工具调用的能力。

- 目录页面：https://awesomecua.com/zh/resources/github-x-plug-osworld-mcp/
- 原始来源：https://github.com/X-PLUG/OSWorld-MCP
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、工具集成、沙箱
- 证据核查日期：2026-11-04T13:12:43Z
- ID：github:x-plug/osworld-mcp

- 完整记录 JSON：https://awesomecua.com/resources/github-x-plug-osworld-mcp/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/X-PLUG/OSWorld-MCP/HEAD/README.md（获取于 2026-11-04T13:12:43Z；SHA-256：6fd51bd79a5603e9513f84e69f98b8ca733cef762a8a2391bb287ae3698399ec）

---

## REAL

一个浏览器智能体评测工具包，提供可复现的网站副本、任务目标、智能体 API 和评测框架。

- 目录页面：https://awesomecua.com/zh/resources/github-agi-inc-real/
- 原始来源：https://github.com/agi-inc/REAL
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、沙箱、网页导航
- 证据核查日期：2026-11-09T19:55:56Z
- ID：github:agi-inc/real

### 范围记录

The source includes SDK installation instructions and custom-agent examples. Evaluation requires browser dependencies and a model API key.

- 完整记录 JSON：https://awesomecua.com/resources/github-agi-inc-real/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/agi-inc/REAL/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/agi-inc/REAL/HEAD/README.md（获取于 2026-11-09T19:55:56Z；SHA-256：b3ab8cc93c834bf26b59a67c3f0d30d30602f5f1aad1fe4a1f4864f263f87e79）
- https://raw.githubusercontent.com/agi-inc/REAL/HEAD/LICENSE（获取于 2026-11-09T14:20:31Z；SHA-256：229b91680e13d4ec18779fae8da1f75958703be023e14fb3149f8d96c1e254d6）

---

## ScreenSpot-v2 instruction variants

基于 ScreenSpot-v2 截图的指令变体，区分原始命令、明确的操作、目标描述和无法执行的操作。

- 目录页面：https://awesomecua.com/zh/resources/url-17729e1c532ba7043404/
- 原始来源：https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测、鲁棒性
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:17729e1c532ba7043404

### 范围记录

Public image files and desktop/mobile/web annotation JSON files are listed. This is a changed instruction set over an existing screenshot collection. No data license or precise example count is declared in the card; no paper relationship is inferred from its generic project/PDF links.

- 完整记录 JSON：https://awesomecua.com/resources/url-17729e1c532ba7043404/record.json

### 结构化规格

- 动作 / 输出：target localization, identification of impossible requests
- 评测方式：Publisher supplies original, action, description and negative instruction types; no common end-to-end success metric is asserted.
- 侧重：instruction-form robustness, negative grounding requests
- 观测：screenshots, instructions
- 任务设置：离线

#### 数量记录

- 4 种指令类型 — instruction-variant design（来源报告；来源：https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants/raw/main/README.md）

Reuses ScreenSpot-v2 imagery. Image-file counts, independent screenshots and tasks are different units.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：7fb2bc9499d8a2b37b663c116af49d11bba493e6767d76a5305fad93257bebf2）
- https://huggingface.co/api/datasets/likaixin/ScreenSpot-v2-variants（获取于 2026-10-17T04:07:19Z；SHA-256：dea98efa75e063eee2d6bfb5d46da94b41df3d779e2fb0bdaea7866534b5c469）

---

## TimeWarp

在自托管 Wiki、News 和 Shop 网站上运行的网页智能体基准，每个网站有六种不同时代风格的 UI 版本，共注册 231 个 BrowserGym 任务，主要由确定性答案验证器评分。

- 目录页面：https://awesomecua.com/zh/resources/github-sparklabutah-timewarp/
- 原始来源：https://github.com/sparklabutah/timewarp
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、鲁棒性、模仿学习
- 证据核查日期：2026-10-20T07:40:09Z
- ID：github:sparklabutah/timewarp

### 范围记录

Code for the TimeWarp paper, which the README's citation lists as to appear in the NeurIPS 2026 Evaluations and Datasets Track. env/ holds Flask apps for Wiki and News and an adapted copy of WebShop for Shop (with WebShop's MIT license text), plus a homepage app; each loads one of six numbered UI themes styled after different eras (the Wiki app also registers a seventh 'modern' theme), and new themes can be added as folders. Site data is downloaded from the Hugging Face dataset sparklabutah/timewarp-env-data. src/browsergym/timewarp registers timewarp.1 to timewarp.231 with BrowserGym; its task file has 231 tasks: 70 Wiki-only, 64 Shop-only, 47 News-only and 50 spanning two or three sites. Agents answer in free text, which is normalized and checked by string_match, number_match and list_match verifiers (AND-combined per task); 2 tasks use only the LLM judge (GPT-5 by default, or a locally served Gemma model). scripts/ runs AgentLab studies per site and sweeps models and UI versions; collectTeacherTraj/ provides a modified AgentLab loop and agent that save teacher trajectories, llamafactory/ has full and LoRA fine-tuning configs for training on them, and the README points to GPT-5 traces on Hugging Face. scripts/annotation holds the verifier authoring and audit tooling, results/ has page-measurement and visual-information validation data, and proofs/ has Lean 4 proofs of the appendix theory. The README shows an MIT badge without a link, and the tree has no root license file. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-sparklabutah-timewarp/record.json

### 结构化规格

- 动作 / 输出：BrowserGym browser actions, free-text answer message to the user
- 评测方式：Each task's free-text answer is normalized (case, unicode, markdown, punctuation, number formatting) and checked by the verifiers listed in its eval_types (string_match, number_match, list_match, combined with AND); tasks still on llm_judge are graded by GPT-5 by default or an open Gemma judge. The same tasks are run against each UI version.
- 侧重：robustness of web agents to UI redesigns across eras, information seeking across Wiki, News and Shop sites
- 观测：BrowserGym observations of the self-hosted sites, as selected by the agent
- 任务设置：交互式

#### 数量记录

- 231 个任务 — BrowserGym task file src/browsergym/timewarp/data/test.raw.json（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 70 个任务 — Wiki-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 64 个任务 — Shop-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 47 个任务 — News-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 50 个任务 — tasks spanning two or three sites（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 2 个任务 — tasks scored only by the LLM judge（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 6 个 UI 版本（每个网站） — numbered themes for each of Wiki, News and Shop（来源报告；来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/README.md）

Task counts were computed from the task file's sites and eval.eval_types fields at the reviewed commit; test.raw.v2.json is byte-identical, and test.raw.llm_judge.json is a variant that routes all 231 tasks to the LLM judge. Results depend on the UI version served, so a score should state the version.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README shows an MIT badge with an empty link, and the complete tree at the reviewed commit has no root license file; the MIT text under env/webshop covers the bundled WebShop copy only.
  来源：https://api.github.com/repos/sparklabutah/timewarp/git/trees/4978e690ef2ad33d81a4a0c043da3f80588902a0?recursive=1

### 一手证据

- https://raw.githubusercontent.com/sparklabutah/timewarp/HEAD/README.md（获取于 2026-10-20T07:40:09Z；SHA-256：96644cd15ad327a891d602d46bbb1bbc3332335b6ec8ef8e89c371f99082e73a）
- https://api.github.com/repos/sparklabutah/timewarp/git/trees/4978e690ef2ad33d81a4a0c043da3f80588902a0?recursive=1（获取于 2026-10-20T04:39:35Z；SHA-256：fd7f883a5f6b4e520abcb8759a66e26fd91c2219dd50e45881b4c1bec18b3518）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/README.md（获取于 2026-10-20T04:39:37Z；SHA-256：96644cd15ad327a891d602d46bbb1bbc3332335b6ec8ef8e89c371f99082e73a）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json（获取于 2026-10-20T04:39:37Z；SHA-256：51fa0eb24ba21d177d8e1fb1f2a53544416bbf84eae343449e60ff9c919592dc）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/task.py（获取于 2026-10-20T04:39:38Z；SHA-256：bf65e287b4929dfab48ceffb4f1e523b8be3bc92970fe3d594200f0149ec7b92）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/config.py（获取于 2026-10-20T04:39:38Z；SHA-256：8d9031adb0b9f5ffdc0778542703b7476861ba20ee2faf0ffe9beb5dc318ecce）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/env/wiki/wiki_app.py（获取于 2026-10-20T04:39:39Z；SHA-256：c61fdde172f86f1414a7d45fe6af0db3226baa55fd354b8bf7679f86619ba513）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/scripts/singleBenchmark/benchmarkGeneralWiki.py（获取于 2026-10-20T04:39:40Z；SHA-256：2bb06ac3980085b81fd3d9f2f4efe7421792e9414ad34e2dc30d21ae269453ec）

---

## WebCanvas

WebCanvas 提供面向真实场景网页智能体的框架和评估资源。

- 目录页面：https://awesomecua.com/zh/resources/github-imeanai-webcanvas/
- 原始来源：https://github.com/iMeanAI/WebCanvas
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:imeanai/webcanvas

- 完整记录 JSON：https://awesomecua.com/resources/github-imeanai-webcanvas/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e）
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：cbaab6bcbc9c3e28d0de902e12f92c2466103c775cb2a5af1e6d4110e82223a6）

---

## WebCanvas_showcase

一个将网页智能体框架接入 WebCanvas 在线评测的示例仓库；其 SEEACT 目录在真实网站上运行 SeeAct，并对其在 Mind2Web-Live 任务中命中的关键节点计分。

- 目录页面：https://awesomecua.com/zh/resources/github-imeanai-webcanvas-showcase/
- 原始来源：https://github.com/iMeanAI/WebCanvas_showcase
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:00:59Z
- ID：github:imeanai/webcanvas_showcase

### 范围记录

SEEACT holds the SeeAct codebase with an evaluate_with_webcanvas function and a script that aggregates key node scores and task completion rates. Tree Search for Language Model Agents and tarsier are listed as planned integrations. SeeAct runs on Playwright with OpenAI, Gemini or Ollama-served LLaVA models.

- 完整记录 JSON：https://awesomecua.com/resources/github-imeanai-webcanvas-showcase/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/iMeanAI/WebCanvas_showcase/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/iMeanAI/WebCanvas_showcase/5ab2a8f222536c64c5621ca9155c49dafcc04fc7/README.md（获取于 2026-11-10T03:00:59Z；SHA-256：7cfd6fb05fe495ebf52c943f8801dc54e274948d1020eb9388ed5107b4dcb71c）
- https://raw.githubusercontent.com/iMeanAI/WebCanvas_showcase/HEAD/LICENSE（获取于 2026-11-10T02:08:09Z；SHA-256：dd727fb2cfafa595dffb6f600a83563e510117d027b70e4cca8e37042c0f5e82）

---

## WebLINX 1.1 (WebLINX-BrowserGym)

WebLINX 1.1 是 WebLINX 对话式网页导航演示的重新处理版本，封装为单步 BrowserGym 任务，以预测的浏览器操作与记录中的对应步骤比对评分。

- 目录页面：https://awesomecua.com/zh/resources/url-77afb3a9b045a157167c/
- 原始来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、动作预测
- 证据核查日期：2026-10-18T12:21:40Z
- ID：url:77afb3a9b045a157167c

### 范围记录

The card and the WebLINX README describe WebLINX 1.1 as derived from WebLINX for BrowserGym and AgentLab: some demonstrations were removed and tab actions were added to the evaluated steps; results should be reported as WebLINX-1.1, WebLINX-BrowserGym or WebLINX-BG and compared within that release. Each demonstration folder holds accessibility trees, DOM snapshots, element properties and boxes, page HTML and screenshots, with per-demonstration ZIP archives alongside. The task loader and scorer live in the separate McGill-NLP/weblinx-browsergym extension repository, which declares no license. CC-BY-NC-SA-4.0 is the card's data declaration, with added terms of use.

- 完整记录 JSON：https://awesomecua.com/resources/url-77afb3a9b045a157167c/record.json

### 结构化规格

- 动作 / 输出：click, hover, fill, goto, scroll, new_tab, tab_close, tab_focus, send_msg_to_user
- 评测方式：Each task replays one recorded turn and ends after one step. The extension's get_reward compares the predicted action with the reference turn: IoU for click and hover, chrF times IoU for text input, URL F-score for page loads, chrF for messages, a distance score for scrolls, intent match for opening or closing tabs and exact target match for tab switches; unsupported intents score 0.
- 侧重：conversational web navigation, next-action prediction from recorded demonstration states
- 观测：screenshot, DOM snapshot, accessibility tree, extra element properties, open tab URLs and titles, chat history and goal
- 任务设置：离线

#### 数量记录

- 62,966 个单步任务 — all splits, task metadata at revision 9db39ad4（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 2,325 条演示 — all splits, distinct demo_name values at revision 9db39ad4（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 26,410 个单步任务 — train split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 2,526 个单步任务 — valid split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 2,650 个单步任务 — test_iid split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 6,802 个单步任务 — test_cat split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 8,704 个单步任务 — test_geo split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 10,407 个单步任务 — test_vis split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）
- 5,467 个单步任务 — test_web split（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv）

A task is one demonstration turn named weblinx.<demo>.<step>. Tasks and demonstrations are different units; split task counts add up to the all-splits total. Counts were computed with a script from browsergym/task_metadata/weblinx_all.csv. The Hub API file list stops at 100,000 entries. No agent was run.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md（获取于 2026-10-18T12:21:40Z；SHA-256：15791d57bbcc8d4c5c88a8a3f5316ed72bc1e2ace939b1fb8dd6039b9a7b0d8b）
- https://huggingface.co/api/datasets/McGill-NLP/weblinx-browsergym（获取于 2026-10-18T12:21:39Z；SHA-256：9a1bc777aadeb117d66a4bc240401471cbbc21b968140f7ab85cf2ec79c7d164）
- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv（获取于 2026-10-18T12:21:40Z；SHA-256：d50c9bd8d67675316c50ff0cebf81c8273d1e4b1b815337c16757b0bb370b481）
- https://raw.githubusercontent.com/McGill-NLP/weblinx-browsergym/297e5de4e773b8756b0d4c044f23d5075950dc3d/weblinx_browsergym/__init__.py（获取于 2026-10-18T12:21:41Z；SHA-256：9f16aa5ee665b9d1b6eb36bd2b1c4303d53c1f0e7cb6b6b664fce03d389c7ab0）
- https://raw.githubusercontent.com/McGill-NLP/weblinx/9a7e814ffaac36d36ae5291dc3407c530055e16f/README.md（获取于 2026-10-18T12:21:41Z；SHA-256：15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528）
- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md（获取于 2026-10-18T12:21:40Z；SHA-256：15791d57bbcc8d4c5c88a8a3f5316ed72bc1e2ace939b1fb8dd6039b9a7b0d8b）

---

## WebRetriever

这是一个网页智能体基准，包含导航、文档引导导航和端到端信息提取三种评测协议，涵盖 1,550 项任务。

- 目录页面：https://awesomecua.com/zh/resources/url-e96228937fdb3bc51531/
- 原始来源：https://huggingface.co/datasets/Mininglamp-2718/WebRetriever
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T21:09:04Z
- ID：url:e96228937fdb3bc51531

### 范围记录

The repository lists three protocol JSON files. The page says access to file content requires accepting its conditions and declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e96228937fdb3bc51531/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Mininglamp-2718/WebRetriever（获取于 2026-11-09T21:09:04Z；SHA-256：2d969c171d618bd202d1aa360b929d48d2b09c35f0fceb60d3a2a1a6f09be65c）
- https://huggingface.co/api/datasets/Mininglamp-2718/WebRetriever（获取于 2026-11-09T21:09:04Z；SHA-256：2d969c171d618bd202d1aa360b929d48d2b09c35f0fceb60d3a2a1a6f09be65c）

---

## WildClawBench

WildClawBench 在包含浏览器、邮件、文件和编程工具的在线工具环境中，以 60 项任务评估智能体，并发布评测代码及任务数据、轨迹链接。

- 目录页面：https://awesomecua.com/zh/resources/github-internlm-wildclawbench/
- 原始来源：https://github.com/InternLM/WildClawBench
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、网页
- 主题：评测、长任务、工具集成、安全与防护
- 证据核查日期：2026-11-09T06:16:40Z
- ID：github:internlm/wildclawbench

### 范围记录

The README describes Docker isolation and four agent harnesses. The repository includes evaluation code and a technical report; task data and trajectories are linked as Hugging Face datasets.

- 完整记录 JSON：https://awesomecua.com/resources/github-internlm-wildclawbench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/InternLM/WildClawBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/InternLM/WildClawBench/HEAD/README.md（获取于 2026-11-09T06:16:40Z；SHA-256：669c3fbe0ff02b9b00b69552c0e43ae270200317f5fcb2a621f47463de24ef81）
- https://raw.githubusercontent.com/InternLM/WildClawBench/HEAD/LICENSE（获取于 2026-11-09T06:14:01Z；SHA-256：1097320d3b3dcabcc40bf0d81e516be95439e877d31fc4679a1255c5d4527edc）

---

## Adversarial Web Agents

用于评估针对多模态网页智能体的对抗攻击的资源。

- 目录页面：https://awesomecua.com/zh/resources/github-chenwu98-agent-attack/
- 原始来源：https://github.com/ChenWu98/agent-attack
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、鲁棒性
- 证据核查日期：2026-10-16T06:40:54Z
- ID：github:chenwu98/agent-attack

- 完整记录 JSON：https://awesomecua.com/resources/github-chenwu98-agent-attack/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ChenWu98/agent-attack/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：0759e1212025ac487c1646877f97526d35db1a62337192800acaff7684471087）
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50（获取于 2026-10-16T06:31:32Z；SHA-256：b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb）

---

## Agent-CE

Agent-CE 是容器化的持续评测平台，用于通过可复现的任务套件评测网页浏览智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-anaishowland-agent-ce/
- 原始来源：https://github.com/anaishowland/agent-CE
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Linux
- 主题：评测、沙箱、网页导航、可观测性
- 证据核查日期：2026-11-04T15:45:42Z
- ID：github:anaishowland/agent-ce

- 完整记录 JSON：https://awesomecua.com/resources/github-anaishowland-agent-ce/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/anaishowland/agent-CE/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/anaishowland/agent-CE/HEAD/README.md（获取于 2026-11-04T15:45:42Z；SHA-256：f9d769e9ec535a6e7835307b1024f89e097038a0515846d076ee81754c922124）
- https://raw.githubusercontent.com/anaishowland/agent-CE/HEAD/LICENSE（获取于 2026-11-04T15:57:25Z；SHA-256：69fe907b069ea55efd908c2062ff86839b936d7c4402e4628cfeca476aa06d47）

---

## Agent-friendly UI

一个评估与修订流程用计算机操作智能体测试生成的网站，依据规则检查任务完成情况，并汇总导航失败问题。

- 目录页面：https://awesomecua.com/zh/resources/github-showlab-aui/
- 原始来源：https://github.com/showlab/AUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、网页导航、可观测性
- 证据核查日期：2026-11-09T19:56:09Z
- ID：github:showlab/aui

### 范围记录

The repository lists stage scripts, model configuration, task rules, trajectories, and a dashboard. Its README names Playwright browser installation and model endpoints as setup requirements.

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-aui/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/showlab/AUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/AUI/HEAD/README.md（获取于 2026-11-09T19:56:09Z；SHA-256：79c5ad5931f5c43bef41b45fd6c4786e8d9907c98496954787cf202d0ddb5e7e）
- https://raw.githubusercontent.com/showlab/AUI/HEAD/LICENSE（获取于 2026-11-09T14:20:37Z；SHA-256：01b63589548387162a37d1cbfad7e66ea40ecfd22c68f9b0f0d288025ff2542f）

---

## AgentBench

智能体评估套件，提供容器化任务和函数调用接口，涵盖操作系统及购物环境。

- 目录页面：https://awesomecua.com/zh/resources/github-thudm-agentbench/
- 原始来源：https://github.com/THUDM/AgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、网页
- 主题：评测、工具集成
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:thudm/agentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-agentbench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：1b7d1f1cd7a74ac9497c639324ec342dd3f8769e9c0c4cd2cd92a4eb6740ac98）
- https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/LICENSE（获取于 2026-10-16T10:48:41Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## AgentBoard

AgentBoard 在包括网页交互在内的多种任务中评估多轮智能体，并提供进度指标和可视化结果，用于分析其运行过程。

- 目录页面：https://awesomecua.com/zh/resources/github-hkust-nlp-agentboard/
- 原始来源：https://github.com/hkust-nlp/AgentBoard
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、可观测性、网页导航
- 证据核查日期：2026-11-09T19:56:59Z
- ID：github:hkust-nlp/agentboard

### 范围记录

The repository contains evaluation scripts and configurations. Its setup describes separate data downloads, environment setup and optional Weights & Biases visualization.

- 完整记录 JSON：https://awesomecua.com/resources/github-hkust-nlp-agentboard/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/hkust-nlp/AgentBoard/HEAD/README.md（获取于 2026-11-09T19:56:59Z；SHA-256：82e6f19d462feb4b021c7facd8aee38aecf5cfb1b8d16e09d3092e9ea08eabed）

---

## AgentCIBench

AgentCIBench 评估计算机操作智能体是否会在个人应用之间泄露信息。它提供可评分的场景、基准测试程序，以及用于可视化运行的网页环境。

- 目录页面：https://awesomecua.com/zh/resources/github-ukplab-arxiv2026-agentcibench/
- 原始来源：https://github.com/ukplab/arxiv2026-agentcibench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、跨应用
- 证据核查日期：2026-11-09T19:55:59Z
- ID：github:ukplab/arxiv2026-agentcibench

### 范围记录

The repository lists local scenario data, reasoning and visual evaluation runners, a multi-app web environment, and optional Docker support. It states that the code uses Apache License 2.0 and the data uses CC BY 4.0.

- 完整记录 JSON：https://awesomecua.com/resources/github-ukplab-arxiv2026-agentcibench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ukplab/arxiv2026-agentcibench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ukplab/arxiv2026-agentcibench/HEAD/README.md（获取于 2026-11-09T19:55:59Z；SHA-256：f836c578d6fea20f7b38092071a9646d2db19b422fe6117d57e6de57ab5e1324）
- https://raw.githubusercontent.com/ukplab/arxiv2026-agentcibench/HEAD/LICENSE（获取于 2026-11-09T14:20:34Z；SHA-256：3c6de8f9409b07e7c0bf84465159bbf98d035c3a32b0c9974b007da85124989b）

---

## AgentCIBench

计算机使用智能体的上下文完整性基准：117 个合成多应用工作区场景，将信息不完整的请求与必须共享和禁止共享的信息清单配对，另含 50 个实时 UI 场景的子集。

- 目录页面：https://awesomecua.com/zh/resources/url-d7f35409d35584385097/
- 原始来源：https://huggingface.co/datasets/UKPLab/agentcibench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、跨应用
- 证据核查日期：2026-10-19T06:04:29Z
- ID：url:d7f35409d35584385097

### 范围记录

Each scenario is a JSON snapshot of app states in the OpenApps workspace (messenger, todo, calendar, code editor, maps and shopping apps) with a task prompt and a disclosure policy. The card's test split serves the state-grounded reasoning track; test_e2e is a 50-scenario subset of it (all IDs overlap) for runs in the rendered UI, which the code README describes as a local multi-app web environment driven through Playwright; seeds holds 36 disjoint hand-written scenarios. The card says source is seed or mcts, but every released row reads seed or legacy_pilot_seed. The code repository linked as ukplab/arxiv2026-agentcibench now resolves to UKPLab/emnlp2026-agentcibench (GitHub API), and the card's second code link, agentcibench/agentcibench, returns 404. The 67.9% average leakage over 15 agents is a publisher figure. CC BY 4.0 is the card's data declaration; the code is a separate Apache-2.0 release.

- 完整记录 JSON：https://awesomecua.com/resources/url-d7f35409d35584385097/record.json

### 结构化规格

- 动作 / 输出：GUI actions in the rendered workspace (live-UI subset), content shared or sent through the workspace apps
- 评测方式：The code release scores each run for utility (required items shared) and contextual-integrity violation (prohibited items leaked), combining deterministic text matching against the scenario's must-share and must-not-share lists with an LLM judge at temperature 0; summaries report utility rate, leak rate and average reward.
- 侧重：contextual-integrity compliance of computer-use agents, information disclosure across personal apps
- 观测：decoded app states, rendered app UI (live-UI subset), natural-language task prompts
- 任务设置：混合

#### 数量记录

- 117 个场景 — test split（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 50 个场景 — test_e2e split (subset of test used for live-UI evaluation)（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 36 个场景 — seeds split (hand-written seed scenarios)（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 75 个场景 — test split, failure mode task_ambiguity_overshare（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 24 个场景 — test split, failure mode recipient_misalignment（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 18 个场景 — test split, failure mode visual_co_location（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）

Setting is mixed: the reasoning track scores responses over decoded app states, while the test_e2e subset runs in the rendered web UI. A script recount of the released JSONL files matches every reported split and failure-mode count. The 50 test_e2e IDs all appear in test; seeds share separate IDs.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md（获取于 2026-10-19T06:04:29Z；SHA-256：3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde）
- https://huggingface.co/api/datasets/UKPLab/agentcibench/revision/f5523cb986828ee77bc505120a933f114bbcf4f3（获取于 2026-10-19T06:04:29Z；SHA-256：2ae68d96a7bff7a2eb78f323c3e87b09768812c06f2a2e0aadbaee2d627f5f7d）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test-00000-of-00001.jsonl（获取于 2026-10-19T06:04:29Z；SHA-256：709d43e4e09d2f3558d9290b8bdf4c15e95e4fefc29a56be6d12b52e646c99d7）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test_e2e-00000-of-00001.jsonl（获取于 2026-10-19T06:04:30Z；SHA-256：9aced6b0d1e1368c28b3b110ba85e79a935b501a03a3c1b48fb97996dd4c05b2）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/seeds-00000-of-00001.jsonl（获取于 2026-10-19T06:04:30Z；SHA-256：1b1a458c15ac64d63b7f6c20fab23740115a2b09d151ceeeb6f2c353c97f5418）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/README.md（获取于 2026-10-19T06:04:30Z；SHA-256：f836c578d6fea20f7b38092071a9646d2db19b422fe6117d57e6de57ab5e1324）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/mcts/reward_judge.py（获取于 2026-10-19T06:04:30Z；SHA-256：9527a682f91c5d7455853f392096ad47f117e35a14fda01b03969a4ef9c3bdc5）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/eval/metrics.py（获取于 2026-10-19T06:04:30Z；SHA-256：c51a95f1e0df49d627e986e6be845e3917260f4d1e82991bd88fecb6724dda24）
- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md（获取于 2026-10-19T06:04:29Z；SHA-256：3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde）

---

## AgentEval

AgentGym 框架的基准套件：包含 1,160 条测试样本，覆盖 14 个环境，其中有 WebShop 和 WebArena 网页任务，以及文本游戏、具身、工具使用和 SQL 任务。

- 目录页面：https://awesomecua.com/zh/resources/url-85b700fbb7f1c599b7c3/
- 原始来源：https://huggingface.co/datasets/AgentGym/AgentEval
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:01:09Z
- ID：url:85b700fbb7f1c599b7c3

### 范围记录

The repository holds one JSON test file per environment, such as webshop_test.json, webarena_test.json and alfworld_test.json, and has no dataset card. The AgentGym README lists 200 WebShop and 20 WebArena evaluation items and runs tasks through its environment servers.

- 完整记录 JSON：https://awesomecua.com/resources/url-85b700fbb7f1c599b7c3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/AgentGym/AgentEval（获取于 2026-11-10T03:01:09Z；SHA-256：bfe6149f400f46dc3f423a9397525c98e12374b55fff997d443796f14c1fccd2）
- https://huggingface.co/api/datasets/AgentGym/AgentEval（获取于 2026-11-10T03:01:09Z；SHA-256：bfe6149f400f46dc3f423a9397525c98e12374b55fff997d443796f14c1fccd2）

---

## AgentGauntlet

面向浏览器智能体的可靠性 CI 测试框架，在不断变化的 DOM 条件下运行相同的网页任务，以衡量其适应能力。

- 目录页面：https://awesomecua.com/zh/resources/github-konuktor-agent-gauntlet/
- 原始来源：https://github.com/Konuktor/agent-gauntlet
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-04T18:11:30Z
- ID：github:konuktor/agent-gauntlet

- 完整记录 JSON：https://awesomecua.com/resources/github-konuktor-agent-gauntlet/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Konuktor/agent-gauntlet/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Konuktor/agent-gauntlet/master/README.md（获取于 2026-11-04T18:11:30Z；SHA-256：cd32affe5c6c37bb4edb8e487d125f94796687357e584f059756da97cf6187a8）
- https://raw.githubusercontent.com/Konuktor/agent-gauntlet/HEAD/LICENSE（获取于 2026-11-04T18:16:07Z；SHA-256：22918c4bed6907f7570e308f338130ec1820cbc22dc42e500ac40bacd3907bf9）

---

## AgentRewardBench

AgentRewardBench 提供基准和评估工具，将自动网页智能体评判器对任务成功、附带影响和重复操作的判断与专家判断进行比较。

- 目录页面：https://awesomecua.com/zh/resources/github-mcgill-nlp-agent-reward-bench/
- 原始来源：https://github.com/McGill-NLP/agent-reward-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T03:59:54Z
- ID：github:mcgill-nlp/agent-reward-bench

### 范围记录

The public repository contains judges, evaluation utilities and annotation files; the linked Hub hosts trajectory/screenshot manifests. No root code license is declared. Dataset Terms of Use are custom and retain third-party restrictions rather than declaring an SPDX license. The paper-reported 1,302 trajectories describe its reviewed study population.

- 完整记录 JSON：https://awesomecua.com/resources/github-mcgill-nlp-agent-reward-bench/record.json

### 结构化规格

- 动作 / 输出：judge verdicts
- 评测方式：Compare automatic judgments with expert answers on task success, side effects and repetitiveness.
- 侧重：automatic evaluator agreement, task success, side effects, repetition
- 观测：web trajectories, screenshots, actions
- 任务设置：离线

#### 数量记录

- 1,302 条轨迹 — paper-reported expert-reviewed set（来源报告；来源：https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending）

Counts refer to the paper study.

### 许可证信息

- 代码：未记录
- 数据：Custom AgentRewardBench Terms of Use — https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card supplies custom Terms of Use and preserves third-party conditions. The repository has no root code license, and no dataset license is inherited from its benchmarks.
  来源：https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/McGill-NLP/agent-reward-bench/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：fb753e41c3eb19be172e9e7fccbc6bcadf44288507f82b190ca99e64144294b6）
- https://api.github.com/repos/McGill-NLP/agent-reward-bench（获取于 2026-10-17T03:59:54Z；SHA-256：7dfac983a6e443d5f66e1fc0fc3706ebea4c93005f03457cc0a2b13a2bd89601）
- https://api.github.com/repos/McGill-NLP/agent-reward-bench/git/trees/main?recursive=1（获取于 2026-10-17T03:59:54Z；SHA-256：79a1639cd4738719e51fc7f32313d63c0483914517cee96175459f63513e8c07）
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench（获取于 2026-10-17T04:03:18Z；SHA-256：20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb）
- https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md（获取于 2026-10-17T04:03:20Z；SHA-256：e16adf817e3950441d70c7bb1bb3f44bd8dc65344938247f23fea4aaff9f654e）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）

---

## AI GameStore

一个基准，收录 100 款由 App Store 和 Steam 榜单游戏改编的网页版游戏，并配有 Playwright 评测框架，将游戏截图发送给视觉语言模型并执行模型返回的按键。

- 目录页面：https://awesomecua.com/zh/resources/github-lance-ying-aigamestore/
- 原始来源：https://github.com/lance-ying/aigamestore
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-11-10T06:29:34Z
- ID：github:lance-ying/aigamestore

### 范围记录

Ten of the 100 games are public and the other 90 form a private test set; the release adds the game generation pipeline and human study data from 87 participants. The harness needs Python 3.10+, Playwright Chromium and a provider API key. Code is MIT and study data CC BY 4.0.

- 完整记录 JSON：https://awesomecua.com/resources/github-lance-ying-aigamestore/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/lance-ying/aigamestore/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lance-ying/aigamestore/a6da2626be43ea99de170ee93da14994b8d3fc17/README.md（获取于 2026-11-10T06:29:34Z；SHA-256：8418bd0bf40150c77b5f5df56ac02d9b7e60229f3a558de18f9d84b4de7e5ea3）
- https://raw.githubusercontent.com/lance-ying/aigamestore/HEAD/LICENSE（获取于 2026-11-10T06:22:37Z；SHA-256：f5fbc6ba0443b7e025761812bfcd3fa553caace70fb23e4feb1053513bd5be86）

---

## AndroidDaily

来自 Step-GUI 的 Android GUI 评测基准数据集，包含 3,146 个静态动作评测条目和 235 项端到端移动端日常任务。

- 目录页面：https://awesomecua.com/zh/resources/url-8697c910c05d48152916/
- 原始来源：https://huggingface.co/datasets/stepfun-ai/AndroidDaily
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、动作预测
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:8697c910c05d48152916

- 完整记录 JSON：https://awesomecua.com/resources/url-8697c910c05d48152916/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/stepfun-ai/AndroidDaily
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/stepfun-ai/AndroidDaily（获取于 2026-10-17T02:42:32Z；SHA-256：ad3e1fdecd148dbe711b644290d61e7462e9f17ff629220949f3f07178eb8e10）
- https://huggingface.co/api/datasets/stepfun-ai/AndroidDaily（获取于 2026-10-17T02:42:32Z；SHA-256：ad3e1fdecd148dbe711b644290d61e7462e9f17ff629220949f3f07178eb8e10）

---

## AppControlBench

AppControlBench 在模拟器中评估智能体完成 iOS 应用任务的表现，根据最终截图评分，并发布任务定义和运行记录。

- 目录页面：https://awesomecua.com/zh/resources/github-software-mansion-app-control-bench/
- 原始来源：https://github.com/software-mansion/app-control-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：iOS
- 主题：评测、手机操作
- 证据核查日期：2026-11-09T21:09:09Z
- ID：github:software-mansion/app-control-bench

### 范围记录

The README describes 60 tasks across Bluesky and Element iOS and a matrix of 720 runs. It says each run uses a fresh simulator clone.

- 完整记录 JSON：https://awesomecua.com/resources/github-software-mansion-app-control-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/software-mansion/app-control-bench/HEAD/README.md（获取于 2026-11-09T21:09:09Z；SHA-256：2d40459d39c1e9342b1aa85cca2e3cb396290ffa8b43182b3f4896463a10f6d3）

---

## AppWorld

提供模拟应用、用户数据和基于状态的任务检查，用于评估通过 API 和代码交互的智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-stonybrooknlp-appworld/
- 原始来源：https://github.com/StonyBrookNLP/appworld
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：评测、工具集成、跨应用
- 证据核查日期：2026-10-16T10:45:03Z
- ID：github:stonybrooknlp/appworld

### 范围记录

Primarily API and coding interaction; included as an adjacent comparison for GUI and hybrid agents.

- 完整记录 JSON：https://awesomecua.com/resources/github-stonybrooknlp-appworld/record.json

### 结构化规格

- 动作 / 输出：Python code, application API calls
- 评测方式：State-based unit tests check task outcomes and unintended changes.
- 侧重：interactive coding, cross-app tool use
- 观测：API documentation, execution feedback
- 任务设置：交互式

#### 数量记录

- 750 个任务 — original AppWorld benchmark (2024 paper)（来源报告；来源：https://arxiv.org/abs/2407.18901）
- 9 个应用 — original AppWorld environment (2024 paper)（来源报告；来源：https://arxiv.org/abs/2407.18901）

This is an adjacent API/coding benchmark. Preserve the named release; task counts here refer to the original paper.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/stonybrooknlp/appworld/HEAD/README.md（获取于 2026-10-16T10:45:03Z；SHA-256：f4049141b6e520217395b7ccd9f27048c8e0f90331690dcbef300d2bc4ff7bdd）
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50（获取于 2026-10-16T06:31:32Z；SHA-256：b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb）
- https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE（获取于 2026-10-16T10:48:42Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## ASIL Benchmark

ASIL Benchmark 发布带索引的软件智能体任务，用于单应用和多应用评测，并提供任务定义及公开素材。

- 目录页面：https://awesomecua.com/zh/resources/url-9b01ef4cc50d241ff34a/
- 原始来源：https://huggingface.co/datasets/sharryXR/asil-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、跨应用
- 证据核查日期：2026-11-09T21:08:39Z
- ID：url:9b01ef4cc50d241ff34a

### 范围记录

The card lists main, multi-application, hard, and easier task indexes under evaluation_examples/. It declares a CC BY 4.0 license; training data and runtime images are separate releases.

- 完整记录 JSON：https://awesomecua.com/resources/url-9b01ef4cc50d241ff34a/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/sharryXR/asil-benchmark
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/sharryXR/asil-benchmark（获取于 2026-11-09T21:08:39Z；SHA-256：dfd90aac095ca49cd7b5e6bba4b3f5aa7b3dfcb0b1d523762b1bfc7a67800dad）
- https://huggingface.co/api/datasets/sharryXR/asil-benchmark（获取于 2026-11-09T21:08:39Z；SHA-256：dfd90aac095ca49cd7b5e6bba4b3f5aa7b3dfcb0b1d523762b1bfc7a67800dad）

---

## AssistantBench

AssistantBench 用贴近现实、耗时较长的网页任务评测智能体；项目仓库提供任务数据集和提交排行榜的链接。

- 目录页面：https://awesomecua.com/zh/resources/github-oriyor-assistantbench/
- 原始来源：https://github.com/oriyor/AssistantBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务
- 证据核查日期：2026-11-09T06:16:33Z
- ID：github:oriyor/assistantbench

### 范围记录

The README links to a Hugging Face dataset and leaderboard. It says SeePlanAct code and additional resources will be released later.

- 完整记录 JSON：https://awesomecua.com/resources/github-oriyor-assistantbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/oriyor/AssistantBench/HEAD/README.md（获取于 2026-11-09T06:16:33Z；SHA-256：4a1495306987646ca022a2ac658970028778bd5a04f768e7c6a4da4ac4eaac3f）

---

## BlenderWorld

一个评测智能体依据文本和视觉参考创建可编辑 Blender 项目的基准。它提供 223 项任务、提交内容打包工具，以及按场景和视觉标准评分的评估器。

- 目录页面：https://awesomecua.com/zh/resources/github-qwenlm-blenderworld/
- 原始来源：https://github.com/QwenLM/BlenderWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、科学工作流、工具集成
- 证据核查日期：2026-11-09T19:57:37Z
- ID：github:qwenlm/blenderworld

### 范围记录

The repository includes a Python package and documentation for dataset, submission, and evaluation formats. The README specifies Linux for its quickstart and Blender 4.2.10 for project generation.

- 完整记录 JSON：https://awesomecua.com/resources/github-qwenlm-blenderworld/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/QwenLM/BlenderWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/QwenLM/BlenderWorld/HEAD/README.md（获取于 2026-11-09T19:57:37Z；SHA-256：ba788d794d44e1d5c808e62b44477619099cf1d6b8e19531d1d8f24c6677882b）
- https://raw.githubusercontent.com/QwenLM/BlenderWorld/HEAD/LICENSE（获取于 2026-11-09T14:21:07Z；SHA-256：9aa96ce7e5177f4940bd61ec88cadd31fa13ba72c5c4923da5a16b6d87548e27）

---

## Browser AI Agent — live-web benchmark audit

一项已归档的网页智能体实时网站任务评估审查，提供任务子集和脚本，用于检查网站变化、访问障碍与测量错误。

- 目录页面：https://awesomecua.com/zh/resources/github-saarthak-yadav-browser-agent-webvoyager/
- 原始来源：https://github.com/saarthak-yadav/browser-agent-webvoyager
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航、历史
- 证据核查日期：2026-11-09T21:09:38Z
- ID：github:saarthak-yadav/browser-agent-webvoyager

### 范围记录

The repository includes audit artifacts, subset rules, Playwright scripts, and tests. Its README says the planned agent did not produce a pass rate. Code is MIT licensed; included task files retain their upstream licenses.

- 完整记录 JSON：https://awesomecua.com/resources/github-saarthak-yadav-browser-agent-webvoyager/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/saarthak-yadav/browser-agent-webvoyager/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/saarthak-yadav/browser-agent-webvoyager/HEAD/README.md（获取于 2026-11-09T21:09:38Z；SHA-256：be9c2510bdf218a5c0c71b82fc0ec292e93226f950d5cd3ed206e3b40794f34b）
- https://raw.githubusercontent.com/saarthak-yadav/browser-agent-webvoyager/HEAD/LICENSE（获取于 2026-11-09T21:11:53Z；SHA-256：080d93a39040f6bdcc157f8a9bda0c8f5f68dc54b16b00db1175da9c6f45b2f0）

---

## BrowserGym-Knows

一个用于评估智能体的 BrowserGym 分支，让智能体在 Chromium 中完成 Google Workspace 任务，并通过 Workspace API 评定结果。

- 目录页面：https://awesomecua.com/zh/resources/github-farhanishmam-browsergym-knows/
- 原始来源：https://github.com/farhanishmam/BrowserGym-Knows
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T21:09:42Z
- ID：github:farhanishmam/browsergym-knows

### 范围记录

The setup uses companion repositories as submodules. It requires a Google account, a service account for grading and model API keys.

- 完整记录 JSON：https://awesomecua.com/resources/github-farhanishmam-browsergym-knows/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/farhanishmam/BrowserGym-Knows/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/farhanishmam/BrowserGym-Knows/HEAD/README.md（获取于 2026-11-09T21:09:42Z；SHA-256：018c86069ef7a83a2a257b104c2b3918b030369d9d2329ac9d256c2c2b3f208f）
- https://raw.githubusercontent.com/farhanishmam/BrowserGym-Knows/HEAD/LICENSE（获取于 2026-11-09T21:11:59Z；SHA-256：b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b）

---

## bugcraft-dataset

BugCraft-Bench 数据：来自 Mojira 的 86 份 Minecraft 崩溃缺陷报告，附带问题元数据和附件，用于评测借助视觉大模型操作游戏、复现崩溃的智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-2c85ae447a0eeed51393/
- 原始来源：https://huggingface.co/erayyapagci/bugcraft-dataset
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测
- 证据核查日期：2026-11-10T03:01:03Z
- ID：url:2c85ae447a0eeed51393

### 范围记录

Each bugcraft_bench/MC-<id> folder holds issue.json, websites.json and the report's attachments such as screenshots, crash logs, videos and zip files; no license is stated. The project page reports 34.9% end-to-end reproduction for BugCraft with GPT-4.1 and 25.5% for the OpenAI Computer Use Agent.

- 完整记录 JSON：https://awesomecua.com/resources/url-2c85ae447a0eeed51393/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/erayyapagci/bugcraft-dataset（获取于 2026-11-10T03:01:03Z；SHA-256：c127cfb95d664b75afa0ac6325fa261f6c1c6f21fa3b635ec55ad11704d300f0）
- https://huggingface.co/api/models/erayyapagci/bugcraft-dataset（获取于 2026-11-10T03:01:03Z；SHA-256：c127cfb95d664b75afa0ac6325fa261f6c1c6f21fa3b635ec55ad11704d300f0）

---

## ClawBench

真实网站上的日常任务基准，让浏览器智能体在容器化 Chromium 中运行，拦截每次最终提交请求并通过 URL 匹配和 LLM 裁判评分，同时记录 5 层运行证据。

- 目录页面：https://awesomecua.com/zh/resources/github-tiger-ai-lab-clawbench/
- 原始来源：https://github.com/TIGER-AI-Lab/ClawBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流、可观测性
- 证据核查日期：2026-10-18T11:53:46Z
- ID：github:tiger-ai-lab/clawbench

### 范围记录

Renamed from reacher-z/ClawBench; both API names return repository 1206519531 (TIGER-AI-Lab/ClawBench), which remains active as the same repository. Counts and scoring rules were read at commit 07eb50a3. The tree also holds v1-lite, claw-eval and environmental-observation task folders; this record’s counts cover the stated task set. Task definitions and execution traces are also published as Hugging Face datasets (NAIL-Group/ClawBench, NAIL-Group/ClawBenchV1Trace, TIGER-Lab/ClawBenchV2Trace); their data licenses remain unverified in this record. Apache-2.0 is recorded for repository code only. Nothing was installed or run.

- 完整记录 JSON：https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/record.json

### 结构化规格

- 动作 / 输出：harness-defined browser actions such as navigating, clicking and filling forms
- 评测方式：Two stages per task run: a request interceptor inside the container blocks the final HTTP request and marks the run intercepted when its URL regex and method match the task's eval_schema; an LLM judge (default deepseek-v4-pro at temperature 0) then checks the intercepted body against the instruction. A pass needs both. The original V1 paper rubric instead compares agent and human-reference trajectories.
- 侧重：everyday online tasks on production websites, multi-step, write-heavy form workflows
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 152 个任务 — V1 corpus shipped in test-cases/v1 (task.json files)（计算得出）（来源：https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1）
- 129 个任务 — V2 corpus shipped in test-cases/v2 (task.json files)（计算得出）（来源：https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1）
- 153 个任务 — V1 corpus as published in the paper and used as the scoring denominator（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md）
- 130 个任务 — V2 corpus as published and used as the scoring denominator（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md）
- 143 个在线网站 — shipped V1 corpus（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md）
- 63 个在线网站 — shipped V2 corpus（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md）

The README says two ASPCA tasks were removed after publication, so the shipped corpora hold 152 and 129 tasks while scoring.md still divides by 153 and 130. Live sites change over time, and the README asks for comparisons under the same corpus revision, harness and rubric. Agents run through selectable harnesses (for example Hermes and OpenClaw), so observations and actions depend on the harness.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md（获取于 2026-10-18T11:53:46Z；SHA-256：61bad2a8e6ab56df159237d75f1081e1246b294183b31ef7abe47193ac26b541）
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1（获取于 2026-10-18T11:54:35Z；SHA-256：144a65c3dd92c7437e4ce065bed7b16e4c33496ea395d2bb1ecbd74132da29ce）
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md（获取于 2026-10-18T11:54:36Z；SHA-256：8d8ade83a355e10800591435de5aa111e8d8297374b025ff88804358ee80b71a）
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE（获取于 2026-10-18T11:55:00Z；SHA-256：cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606）
- https://api.github.com/repos/reacher-z/ClawBench（获取于 2026-10-18T11:54:36Z；SHA-256：4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da）
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench（获取于 2026-10-18T11:54:37Z；SHA-256：4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da）

---

## Co-Design Bench

Co-Design Bench 评估编码智能体依据多模态请求修改应用程序的结果，并结合源代码和浏览器证据检查需求是否满足。

- 目录页面：https://awesomecua.com/zh/resources/github-wiselnn570-co-design-bench/
- 原始来源：https://github.com/Wiselnn570/Co-Design-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、界面理解
- 证据核查日期：2026-11-09T21:09:08Z
- ID：github:wiselnn570/co-design-bench

### 范围记录

The README describes a public Multimodal Editing subset with 96 tasks and 521 acceptance criteria, plus scoring and judging commands. Dataset archives are distributed separately; the reference judge requires an authenticated Claude CLI, Node.js, Playwright, and Chromium.

- 完整记录 JSON：https://awesomecua.com/resources/github-wiselnn570-co-design-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Wiselnn570/Co-Design-Bench/HEAD/README.md（获取于 2026-11-09T21:09:08Z；SHA-256：c7c4f4c3953ec95db5efe4a07866aa01ed05de9ad2cf2b7937bc72b3cf20da9a）

---

## Co-Design Bench

Co-Design Bench 用 96 个带标注截图的编辑任务和 521 项标准，根据源代码及浏览器证据评估智能体对多模态请求所做的应用修改。

- 目录页面：https://awesomecua.com/zh/resources/url-7cfe1cd1a61d7ebfd083/
- 原始来源：https://huggingface.co/datasets/Wiselnn/Co-Design-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、界面理解
- 证据核查日期：2026-11-09T21:10:15Z
- ID：url:7cfe1cd1a61d7ebfd083

### 范围记录

The release describes solver and evaluation archives, Parquet task and rubric indexes, and a separate code package for preparing, judging, and scoring submissions.

- 完整记录 JSON：https://awesomecua.com/resources/url-7cfe1cd1a61d7ebfd083/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Wiselnn/Co-Design-Bench（获取于 2026-11-09T21:10:15Z；SHA-256：999f23474c0196074ede24093fc38629e23e02db9ef6c6bf151718386d0233a5）
- https://huggingface.co/api/datasets/Wiselnn/Co-Design-Bench（获取于 2026-11-09T21:10:15Z；SHA-256：999f23474c0196074ede24093fc38629e23e02db9ef6c6bf151718386d0233a5）

---

## CodexQA

一套包含 11 个本地优先 QA Agent Skills 的工具，供 Cursor、Claude Code 和 Codex 验证实时网页和桌面用户操作流程。

- 目录页面：https://awesomecua.com/zh/resources/github-openqa-cn-codexqa/
- 原始来源：https://github.com/openqa-cn/codexqa
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、网页导航、工具集成、工作流
- 证据核查日期：2026-11-04T18:11:44Z
- ID：github:openqa-cn/codexqa

- 完整记录 JSON：https://awesomecua.com/resources/github-openqa-cn-codexqa/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/openqa-cn/codexqa/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/openqa-cn/codexqa/main/README.md（获取于 2026-11-04T18:11:44Z；SHA-256：c4021c817fba23ac4172c2024e996fe9b00751c5cfecec6c83a64fe3a758f092）
- https://raw.githubusercontent.com/openqa-cn/codexqa/HEAD/LICENSE（获取于 2026-11-04T18:16:07Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## CUAVerifierBench

人工标注的浏览器智能体轨迹，用于将自动化任务成功与过程质量验证器的判断同评审人员的判断进行比较。

- 目录页面：https://awesomecua.com/zh/resources/url-d5140d438466c1e1348a/
- 原始来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:d5140d438466c1e1348a

### 范围记录

Public Parquet configs separate trajectories from per-reviewer annotations. The card declares MIT. The two splits have different review stages: Online-Mind2Web includes blind and verifier-informed annotations, whereas the internal split is blind-only. This measures verifier agreement.

- 完整记录 JSON：https://awesomecua.com/resources/url-d5140d438466c1e1348a/record.json

### 结构化规格

- 动作 / 输出：success verdict, process score
- 评测方式：Agreement metrics including Cohen’s kappa, accuracy and F1 against human annotations; review stages must be kept distinct.
- 侧重：verifier-human agreement, process quality
- 观测：screenshots, action logs, final answers
- 任务设置：离线

#### 数量记录

- 106 条轨迹 — fara7b_om2w_browserbase split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 154 条轨迹 — internal split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 215 行标注数据 — fara7b_om2w_browserbase split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 154 行标注数据 — internal split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）

Trajectory rows and reviewer rows have different grains. The released Parquet files are public despite internal task labels. No payload data was downloaded.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：44d7190b72ae489297f59d6fadff635ced6dd067c845c77b04f187a7b2d7bec7）
- https://huggingface.co/api/datasets/microsoft/CUAVerifierBench（获取于 2026-10-17T02:42:32Z；SHA-256：fb1fe8a9fd6e45fc82157c65c08d5c682d08bead5196308776200ef3c39c1e41）

---

## Dev Browser Eval

Dev Browser Eval 在游戏追踪网页应用的任务中比较三种浏览器自动化方法，并根据重复运行的结果生成报告。

- 目录页面：https://awesomecua.com/zh/resources/github-sawyerhood-dev-browser-eval/
- 原始来源：https://github.com/SawyerHood/dev-browser-eval
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-09T21:08:54Z
- ID：github:sawyerhood/dev-browser-eval

### 范围记录

The setup script clones the game-tracker repository, copies a local environment file, and installs dependencies. The README lists dev-browser, playwright-skill, and playwright-mcp as methods.

- 完整记录 JSON：https://awesomecua.com/resources/github-sawyerhood-dev-browser-eval/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/SawyerHood/dev-browser-eval/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SawyerHood/dev-browser-eval/HEAD/README.md（获取于 2026-11-09T21:08:54Z；SHA-256：96658b39ac860470dbfd7cc842a095995ae1025c3a2b963d730cbaa24a7a9b3f）
- https://raw.githubusercontent.com/SawyerHood/dev-browser-eval/HEAD/LICENSE（获取于 2026-11-09T21:11:18Z；SHA-256：03d74e251e5e0908889933e57337de443989b87a8f43cc6377d21350bdb77316）

---

## FedMABench

联邦式移动端智能体训练与评估套件，可调整用户数据异质性和应用分布，并发布了分区标注及推理、评分脚本。

- 目录页面：https://awesomecua.com/zh/resources/github-wwh0411-fedmabench/
- 原始来源：https://github.com/wwh0411/FedMABench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、模仿学习、手机操作
- 证据核查日期：2026-10-17T11:18:17Z
- ID：github:wwh0411/fedmabench

### 范围记录

The public Hub lists six dataset families of JSON/JSONL partition annotations. The repository says unpacked screenshots must be reconstructed from original AndroidControl and AITW sources. This is offline training/evaluation infrastructure. No repository license file or dataset-license declaration was found in the inspected sources; neither is inferred from the underlying ms-swift project.

- 完整记录 JSON：https://awesomecua.com/resources/github-wwh0411-fedmabench/record.json

### 结构化规格

- 动作 / 输出：model predictions on mobile-agent examples
- 评测方式：The provided evaluation workflow performs model inference over selected partitions and invokes test_swift_fed.py for accuracy scoring.
- 侧重：mobile-agent federated training, data heterogeneity
- 观测：mobile-agent examples with externally sourced screenshots
- 任务设置：离线

#### 数量记录

- 6 个数据集系列 — released FedMABench partition families（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md）
- 3 种异构类型 — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md）
- 8 种联邦学习算法 — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md）

The dataset-family count measures dataset families. Code and data licenses are unknown; external image sources are required.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md（获取于 2026-10-17T11:18:17Z；SHA-256：b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8）
- https://api.github.com/repos/wwh0411/FedMABench（获取于 2026-10-17T11:18:17Z；SHA-256：3e1b2b643a263af129b3a4092a84efe47d3643f00509f7b9517da21a4aac0371）
- https://api.github.com/repos/wwh0411/FedMABench/git/trees/master?recursive=1（获取于 2026-10-17T11:22:54Z；SHA-256：4fb977a469cee3d5083da0b5bf2984fedc6b867146a90b20963985e08f9e9716）
- https://huggingface.co/api/datasets/wwh0411/FedMABench（获取于 2026-10-17T11:23:06Z；SHA-256：df5379f4a9b350dad0c3d374d2f9a1d6eacd974b6d54750e2a14ecec1faec6e5）
- https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md（获取于 2026-10-17T11:23:06Z；SHA-256：2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc）

---

## FronTalk

FronTalk 评测根据文本和视觉指令进行的多轮网站编码。它提供对话任务和测试用例，并使用网页智能体评估生成的网站。

- 目录页面：https://awesomecua.com/zh/resources/github-shirley-wu-frontalk/
- 原始来源：https://github.com/shirley-wu/frontalk
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、网页导航
- 证据核查日期：2026-11-09T21:09:09Z
- ID：github:shirley-wu/frontalk

### 范围记录

The README reports 100 dialogues, 1000 turns and 3676 test cases. The repository includes data.jsonl, inference scripts and evaluation scripts; the documented setup may require Chrome and ChromeDriver.

- 完整记录 JSON：https://awesomecua.com/resources/github-shirley-wu-frontalk/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/shirley-wu/frontalk/HEAD/README.md（获取于 2026-11-09T21:09:09Z；SHA-256：fd6fd0a3ae9772be5f0ade679e403044db589deb744768bfd63133dad804a02a）

---

## FunUI-Benchmark

FunUI 是一个中英双语基准，基于 2,150 张中文和 9,347 张英文 Android 屏幕，测试 UI 定位、UI 指代、屏幕问答和屏幕摘要。

- 目录页面：https://awesomecua.com/zh/resources/url-92241e51e909ea9ca564/
- 原始来源：https://huggingface.co/datasets/Earthiii/FunUI-Benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-11-10T06:29:22Z
- ID：url:92241e51e909ea9ca564

### 范围记录

The Hugging Face repository holds zipped Chinese and English screen images and per-task JSON annotation files for the four tasks. The card cites the UI-Hawk preprint and declares the CC BY-SA 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-92241e51e909ea9ca564/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-sa-4.0 — https://huggingface.co/datasets/Earthiii/FunUI-Benchmark
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Earthiii/FunUI-Benchmark（获取于 2026-11-10T06:29:22Z；SHA-256：ae52a62986e54c85e3599835eb1b59a47d047e325259ad0c1d4d57905279c4bc）
- https://huggingface.co/api/datasets/Earthiii/FunUI-Benchmark（获取于 2026-11-10T06:29:22Z；SHA-256：ae52a62986e54c85e3599835eb1b59a47d047e325259ad0c1d4d57905279c4bc）

---

## GA-Technical-Report

GenericAgent 的评估材料涵盖网页浏览及其他智能体任务；各基准测试文件夹说明了任务设置、评估协议和复现方法。

- 目录页面：https://awesomecua.com/zh/resources/github-jinyihan99-ga-technical-report/
- 原始来源：https://github.com/JinyiHan99/GA-Technical-Report
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-09T21:10:35Z
- ID：github:jinyihan99/ga-technical-report

### 范围记录

The repository also contains a technical report PDF. The runnable agent is linked in a separate source-code repository.

- 完整记录 JSON：https://awesomecua.com/resources/github-jinyihan99-ga-technical-report/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/JinyiHan99/GA-Technical-Report/HEAD/README.md（获取于 2026-11-09T21:10:35Z；SHA-256：cf4a3da62848163b6c4c48390f2924f14cd4b5fc017c02c2ac07657ecaf7cf9f）

---

## GameWorld

GameWorld 提供标准化的浏览器端评测套件，涵盖 34 款游戏和 170 项可验证任务，用于评测多模态游戏智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-gameworld-project-gameworld/
- 原始来源：https://github.com/gameworld-project/GameWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、动作预测、规划
- 证据核查日期：2026-11-04T14:02:40Z
- ID：github:gameworld-project/gameworld

- 完整记录 JSON：https://awesomecua.com/resources/github-gameworld-project-gameworld/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gameworld-project/GameWorld/HEAD/README.md（获取于 2026-11-04T14:02:40Z；SHA-256：a20fdc3d534295ba721ce7c12b121f03b56a0ededb9f2eacc40d5aefa56da624）

---

## GameWorld Games

GameWorld Games 提供用于智能体评测的浏览器游戏快照，每个游戏都有初始化、重置和检查游戏状态的 API。

- 目录页面：https://awesomecua.com/zh/resources/github-gameworld-project-gameworld-games/
- 原始来源：https://github.com/gameworld-project/GameWorld-Games
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、沙箱、状态追踪
- 证据核查日期：2026-11-09T21:09:44Z
- ID：github:gameworld-project/gameworld-games

### 范围记录

The source lists 34 games under benchmark directories and shows a JSON-safe window.gameAPI interface. It restricts the assets to educational and research purposes.

- 完整记录 JSON：https://awesomecua.com/resources/github-gameworld-project-gameworld-games/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gameworld-project/GameWorld-Games/HEAD/README.md（获取于 2026-11-09T21:09:44Z；SHA-256：02fa6d682de1a5589e481a0754b0a36c6ca34e55faa5e856a2b7f01ad0e94c89）

---

## GUI-Perturbed

逐步网页定位基准，对 Mind2Web 页面施加样式、缩放和文字大小扰动后重新渲染，并将每张截图与直接或关系型指令及目标框配对。

- 目录页面：https://awesomecua.com/zh/resources/url-7ed70b39ac79f97f8a87/
- 原始来源：https://huggingface.co/datasets/figai/GUI-Perturbed
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、评测、鲁棒性
- 证据核查日期：2026-10-18T15:59:36Z
- ID：url:7ed70b39ac79f97f8a87

### 范围记录

The card YAML at revision 727c857b lists one eval split of 3,120 examples in four Parquet shards, with screenshot, instruction, gt_bbox, visual_variant, instruction_type, task_id and step_index fields. Hugging Face dataset-viewer statistics show 780 rows for each of four visual variants (labelled original, style, precision and text_shrink; the card calls the first one baseline) and 1,560 rows for each of the direct and relational instruction types, so the card's per-variant sample size of 390 covers one instruction type. The card designates the set for evaluation and asks that it be reserved from training; the pages come from Mind2Web MHTML archives. eval.yaml names point-in-bbox accuracy. The card declares CC BY 4.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-7ed70b39ac79f97f8a87/record.json

### 结构化规格

- 动作 / 输出：predicted target location
- 评测方式：eval.yaml specifies point-in-bbox accuracy against the annotated target box; results can be split by visual variant and instruction type. Grounding accuracy and end-to-end task success are separate measures.
- 侧重：step-level web GUI element localization, robustness to visual and instruction perturbations
- 观测：rendered web-page screenshots, natural-language instructions
- 任务设置：离线

#### 数量记录

- 3,120 个示例 — eval split at revision 727c857b（来源报告；来源：https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md）
- 283 个不重复的 Mind2Web 任务 ID — eval split（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=figai/GUI-Perturbed&config=default&split=eval）

Each example is one screenshot, instruction and target box; four visual variants are crossed with two instruction types. Examples, source tasks and visual variants are different units.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md（获取于 2026-10-18T15:59:36Z；SHA-256：6105d4c240dd71a698fe63b501aa74c2c2478455dbbd03313abb7ccc81ce237e）
- https://huggingface.co/api/datasets/figai/GUI-Perturbed/revision/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7（获取于 2026-10-18T15:59:07Z；SHA-256：55c9358d6269d88f6f2eebc5f74c463096bd417434092bbcfef3b9774b179c23）
- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/eval.yaml（获取于 2026-10-18T15:59:07Z；SHA-256：119930290bb21bcceb3f3a2b22d4f738ce5d0eb4531652cb7e7ad0dde348e30a）
- https://datasets-server.huggingface.co/statistics?dataset=figai/GUI-Perturbed&config=default&split=eval（获取于 2026-10-18T15:59:07Z；SHA-256：5a23805cf7a6122abf01288f46139bb3c7890306678ec0280e9e6d488adb5908）
- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md（获取于 2026-10-18T15:59:36Z；SHA-256：6105d4c240dd71a698fe63b501aa74c2c2478455dbbd03313abb7ccc81ce237e）

---

## GUI_Reflection_Task_Suite_Benchmark

GUI Reflection 任务套件的评测部分，包含动作验证、动作回退以及在 ScreenSpot 和 ScreenSpot v2 上基于错误重试的 JSONL 文件。

- 目录页面：https://awesomecua.com/zh/resources/url-dea0e09f027df704ca00/
- 原始来源：https://huggingface.co/datasets/craigwu/GUI_Reflection_Task_Suite_Benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：自我反思、评测
- 证据核查日期：2026-11-10T06:29:28Z
- ID：url:dea0e09f027df704ca00

### 范围记录

The repository holds four JSONL annotation files; screenshots come from AndroidControl, GUI Odyssey, ScreenSpot and ScreenSpot v2. The card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-dea0e09f027df704ca00/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/craigwu/GUI_Reflection_Task_Suite_Benchmark
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_Benchmark（获取于 2026-11-10T06:29:28Z；SHA-256：ba5e4bd41a45665879a796dd338b0b5640e1ac0a5fa4e9ecf0c9404095b072cf）
- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_Benchmark（获取于 2026-11-10T06:29:28Z；SHA-256：ba5e4bd41a45665879a796dd338b0b5640e1ac0a5fa4e9ecf0c9404095b072cf）

---

## GUIGuard-Bench public-ladder release

GUIGuard-Bench 公开榜单版本：含 121 条 Android 和 Linux 桌面智能体轨迹，2,002 张截图带区域级隐私标签，用于隐私识别、受保护界面规划和点击定位。

- 目录页面：https://awesomecua.com/zh/resources/url-61860953a680776ffe53/
- 原始来源：https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面、Linux
- 主题：安全与防护、评测、GUI 定位、界面理解
- 证据核查日期：2026-10-18T15:37:19Z
- ID：url:61860953a680776ffe53

### 范围记录

This Hub repository is the public-ladder subset: the paper and project page describe 241 trajectories with 4,080 screenshots, while this card's evaluation set has 121. The reference_virtual_android and reference_virtual_pc folders contain emulated Android and Windows trajectories without privacy labels as reference material outside the evaluation. The card is an anonymous-review version without a citation; the paper link comes from the project page that the paper's abstract links. Screenshots contain personal information, and the card limits use to research.

- 完整记录 JSON：https://awesomecua.com/resources/url-61860953a680776ffe53/record.json

### 结构化规格

- 动作 / 输出：recorded Android atomic actions, recorded PC pyautogui actions, click coordinates for grounding
- 评测方式：Region-level privacy labels (risk level, category, task essentiality, boxes) support recognition scoring; planning is compared before and after protection methods (black mask, mosaic, random blocks, LLM text replacement); grounding follows a ScreenSpot-style click check. The card does not ship a scorer; it points to an anonymized toolkit.
- 侧重：privacy-risk recognition in GUI agent screenshots, agent planning fidelity on privacy-protected screenshots, click grounding under visual privacy protection
- 观测：recorded trajectory screenshots, task goals, plan and progress text
- 任务设置：离线

#### 数量记录

- 121 条评测轨迹 — public-ladder evaluation set (68 Android + 53 PC)（来源报告；来源：https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md）
- 2,002 张截图（评测样本） — public-ladder evaluation set, data/eval.jsonl（来源报告；来源：https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md）
- 26,407 条区域级隐私标注 — public-ladder evaluation set（来源报告；来源：https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md）
- 68 个 Android 任务目录 — Android/ at revision c2b5ca41（计算得出）（来源：https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920）
- 53 个 PC 任务目录 — PC/ at revision c2b5ca41（计算得出）（来源：https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920）

Trajectories, screenshots and annotations are different units and are counted separately. The manifest also lists 1,239 Android and 763 PC images, which together match the 2,002 samples. A script over data/eval.jsonl at this revision (11 MB, read once) found 2,002 rows from 121 task folders, 26,407 privacy labels and 1,949 labelled rows, matching the card. Reference-only folders hold 238 and 150 top-level directories; they are excluded from these counts.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-NC-4.0 — https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md

### 一手证据

- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md（获取于 2026-10-18T15:37:19Z；SHA-256：81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229）
- https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920（获取于 2026-10-18T15:37:19Z；SHA-256：788d251b561c0dfda4b5c6e643c2af0cc683ef8978759e6fa392db2e9548096b）
- https://raw.githubusercontent.com/Futuresis/GUIGuard-page/df9c709058d7e39d1f9286edd33c9f645aa60b55/index.html（获取于 2026-10-18T15:37:19Z；SHA-256：14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5）
- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md（获取于 2026-10-18T15:37:19Z；SHA-256：81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229）

---

## Gym-Anything

运行时与 CUA-World 任务套件将 Ubuntu、Windows 11、Android 和 macOS 上的真实应用变为让智能体观察屏幕并使用鼠标键盘的环境，配有设置脚本和程序验证器。

- 目录页面：https://awesomecua.com/zh/resources/github-cmu-l3-gym-anything/
- 原始来源：https://github.com/cmu-l3/gym-anything
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS、Android
- 主题：评测、沙箱、长任务
- 证据核查日期：2026-10-19T06:44:15Z
- ID：github:cmu-l3/gym-anything

### 范围记录

Official code of the Gym-Anything paper. The README describes three parts that can be used separately: the core runtime (src/gym_anything), the CUA-World benchmark (benchmarks/cua_world) and reference agents for Claude, Gemini, Qwen, Kimi and other models. The inspected environment configs (Moodle, Power BI Desktop, an Android AVD calculator and macOS Finder) declare screen observations with mouse and keyboard actions on Ubuntu GNOME, Windows 11, Android AVD 34 and macOS bases; the Finder config also exposes a UI tree, and macOS environments sit in a separate benchmarks/cua_world-macos suite. A task such as moodle_env/enroll_student pairs setup and export hooks with a verifier.py program check and a VLM checklist file. extras/research/software_as_env/creation_audit implements the paper's environment creation-and-audit pipeline, driven by Claude Code by default or Codex CLI. Runners (Docker, Apptainer, QEMU, AVD, AVF, Modal, local and Sandweave) differ in caching, snapshot and recording support. Code was read.

- 完整记录 JSON：https://awesomecua.com/resources/github-cmu-l3-gym-anything/record.json

### 结构化规格

- 动作 / 输出：mouse, keyboard
- 评测方式：Each task's task.json names a program check (verifier.py) that runs after the episode, with pre-task setup and post-task export hooks; task folders also carry a VLM checklist file.
- 侧重：long-horizon computer use in professional and enterprise software, conversion of arbitrary applications into agent environments
- 观测：screen frames, UI tree (some macOS environments)
- 任务设置：交互式

#### 数量记录

- 200 个软件应用 — applications processed into CUA-World (paper v1 abstract)（来源报告；来源：https://arxiv.org/abs/2604.06126v1）
- > 10,000 个长程任务 — CUA-World (paper v1 abstract)（来源报告；来源：https://arxiv.org/abs/2604.06126v1）
- 7,150 个任务 — verified split manifest benchmarks/cua_world/splits/verified.json at 4a8d967（计算得出）（来源：https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json）
- 191 个环境 — verified split manifest benchmarks/cua_world/splits/verified.json at 4a8d967（计算得出）（来源：https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json）

The paper's application and task totals and the repository's verified manifest are different populations; these counts are reported separately. Per-environment split files list train and test tasks, and several cover variant folders of one application; these counts are reported separately.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/cmu-l3/gym-anything/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/README.md（获取于 2026-10-19T06:44:15Z；SHA-256：11821d717f09b17762937661eed9a2bcb80606ca765de1381f9047fe8c58cf9a）
- https://api.github.com/repos/cmu-l3/gym-anything/git/trees/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca（获取于 2026-10-19T06:44:16Z；SHA-256：fb2aa984e243b90058d62435ade2aa2ad9e5a3729df6f293e1c9a536f9749f45）
- https://api.github.com/repos/cmu-l3/gym-anything/git/commits/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca（获取于 2026-10-19T06:44:17Z；SHA-256：cd7d25da944d9deaf995e320d2c0b4752c194557b4fc53da8473c3afee4ec511）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json（获取于 2026-10-19T06:44:17Z；SHA-256：727c6beaff1de5f36bea959037e7346453fb5d40b4817529fa31566acc7fbb04）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/moodle_env/env.json（获取于 2026-10-19T06:44:17Z；SHA-256：ab0398ca5df1d7e8b41357f2a1966c3576f8d2bdd4c6c81db3249a51826a5d9b）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/moodle_env/tasks/enroll_student/task.json（获取于 2026-10-19T06:44:17Z；SHA-256：0d6b81e193cc3a15269c1eb580b91f88c72e607173b21427f7f3ee13b67b9047）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/power_bi_desktop_env/env.json（获取于 2026-10-19T06:44:17Z；SHA-256：f32ac8bb3b99e4ea9550994ac18700066138a2aaa3f835c3e30cce38ca2e6c1b）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/android_avd_calculator_env/env.json（获取于 2026-10-19T06:44:17Z；SHA-256：d1aabfba25b6f586c3054a64bbd3e013b95ff4d012ffea3c2432bb4895e11660）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world-macos/environments/finder_env/env.json（获取于 2026-10-19T06:44:17Z；SHA-256：85f6d078b5b9228bc1aa17b3f73ec3852db0a01a878979112ad2fc10bfedae8f）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/docs/content/docs/core/runners.mdx（获取于 2026-10-19T06:44:17Z；SHA-256：0756ebcad68e10d820ce586d3b058a65e054f98d7f8540de5e80914e13620635）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/docs/content/docs/extras/creation-audit.mdx（获取于 2026-10-19T06:44:57Z；SHA-256：201cb50510bf7b7c9f56bdbffb43f75baa1fc1cf24edce4c39f66ddd34461a37）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/LICENSE（获取于 2026-10-19T06:44:18Z；SHA-256：d289e0e1ddfe766ba384068d7cf83848aaf07470f6482711c57ce12763072614）
- https://arxiv.org/abs/2604.06126v1（获取于 2026-10-19T06:44:18Z；SHA-256：89fe4dad54d6ef84e001d5b7c46375946223e1a3bf6a041ca2925a883e9a767a）
- https://raw.githubusercontent.com/cmu-l3/gym-anything/HEAD/LICENSE（获取于 2026-10-19T06:45:58Z；SHA-256：d289e0e1ddfe766ba384068d7cf83848aaf07470f6482711c57ce12763072614）

---

## Gym-Anything-RT

Gym-Anything-RT 用成对的实时与不限时浏览器小游戏评测依靠截图行动的智能体。其运行器可暂停或放慢游戏时钟，以区分时间因素的影响。

- 目录页面：https://awesomecua.com/zh/resources/github-gym-anything-gym-anything-rt/
- 原始来源：https://github.com/gym-anything/gym-anything-rt
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Linux
- 主题：评测、效率、沙箱
- 证据核查日期：2026-11-09T19:57:06Z
- ID：github:gym-anything/gym-anything-rt

### 范围记录

The README reports 100 real-time minigames with non-real-time counterparts, five difficulty levels, and two interaction modes. It describes benchmark environments, splits, graders, agents, and an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/github-gym-anything-gym-anything-rt/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/gym-anything/gym-anything-rt/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gym-anything/gym-anything-rt/HEAD/README.md（获取于 2026-11-09T19:57:06Z；SHA-256：cb6c110b595d725b0dca10f598158e8c5e98b1a64e683c4bb5160a9c20397223）
- https://raw.githubusercontent.com/gym-anything/gym-anything-rt/HEAD/LICENSE（获取于 2026-11-09T14:20:51Z；SHA-256：813d1fbc50ef21c3581c6cfd5733aed82db3b5850042fde0629db45afa6d082e）

---

## HarnessBench

基准测试框架固定基础模型，在各自容器中运行六种浏览器智能体框架，执行 ClawBench 的日常在线任务，并复用其录制与评判流程。

- 目录页面：https://awesomecua.com/zh/resources/github-reacher-z-harnessbench/
- 原始来源：https://github.com/reacher-z/HarnessBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T16:03:11Z
- ID：github:reacher-z/harnessbench

### 范围记录

Sister project of ClawBench. The repository holds the harness-bench CLI (harness x model x task matrix expansion with credential gating, run, batch and a leaderboard renderer over ClawBench result summaries), six harness adapters (openclaw, hermes, claw-code, browser-use, stagehand, coze-studio), each a Dockerfile, setup script and run script built on the clawbench-base image, and a one-task smoke fixture. The tasks, the five-layer recording and the judge belong to ClawBench; this repository holds the harness, whose run and batch commands call clawbench.run_case and require clawbench-eval 0.2.0 or later. At the inspected commit the README's fixtures/lite.txt 20-task subset is absent from the tree, the browser-use run script calls a run-browser-use.py that neither the tree nor its Dockerfile supplies, and the leaderboard and demo videos are placeholders. stagehand and coze-studio need BrowserBase or Coze credentials.

- 完整记录 JSON：https://awesomecua.com/resources/github-reacher-z-harnessbench/record.json

### 结构化规格

- 动作 / 输出：harness-specific browser actions
- 评测方式：Inherited from ClawBench per the README: five-layer session recordings judged by DOM matching and an LLM judge against human reference runs; the leaderboard partitions pass rates by harness, model and category.
- 侧重：comparison of agent harnesses with the base model held fixed, everyday online tasks in a real browser
- 观测：harness-specific (each adapter drives Chrome its own way, for example over CDP or Playwright)
- 任务设置：交互式

#### 数量记录

- 153 个任务 — ClawBench shared task pool, held in the separate ClawBench repository（来源报告；来源：https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/README.md）
- 6 个评测框架适配器 — clawbench.harnesses entry points registered in pyproject.toml（计算得出）（来源：https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/pyproject.toml）

Task definitions and judge prompts live in ClawBench. Cloud harnesses without credentials are reported as skipped, not scored as zero. No results were published at the inspected commit.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/README.md（获取于 2026-10-18T16:03:11Z；SHA-256：1c334914871f8ac362cf7e21033e0699e36e9da0fd4fe82b1a747ce9b223cf31）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/pyproject.toml（获取于 2026-10-18T16:02:39Z；SHA-256：fd80d793c455e5c13e8cd455e5a686c036af60ec5c56731b411aa68a60b783f1）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/matrix.py（获取于 2026-10-18T16:02:43Z；SHA-256：5c5dc2cb4e363ca2fe1de37982f353b11034f1d65131233047d2a63f0629e4fe）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/cli.py（获取于 2026-10-18T16:02:44Z；SHA-256：2b2b3340d03783ba77adc06dbe97df441f58230aeff68ef73f05bd631c658a1c）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/harnesses/browser_use/run.sh（获取于 2026-10-18T16:02:45Z；SHA-256：781e8b621ad7ef5e214ae9ea2db825a5168c1c3ce42c0ffa45cef481379d0989）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/harnesses/browser_use/Dockerfile（获取于 2026-10-18T16:02:45Z；SHA-256：9520987e628abd8544c45e3a6444893fe7b690daf676dedd247e731cc85f7b00）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/docs/harness-comparison.md（获取于 2026-10-18T16:02:46Z；SHA-256：679b94aab37bd6b0a0daff0a999bd4431b06773a2c1942ab4c34372c3013059a）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/LICENSE（获取于 2026-10-18T16:03:20Z；SHA-256：cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606）

---

## LearnGUI

面向示范学习的移动端 GUI 基准，包含 2,252 项离线任务和 101 项在线任务及人工逐步轨迹，每项查询配有一至三条相似的辅助示范。

- 目录页面：https://awesomecua.com/zh/resources/url-a7beaa489fc4ffeb555f/
- 原始来源：https://huggingface.co/datasets/lgy0404/LearnGUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、手机操作、模仿学习
- 证据核查日期：2026-10-18T16:00:11Z
- ID：url:a7beaa489fc4ffeb555f

### 范围记录

The Hub repository holds data only: multi-part offline screenshot archives, element and instruction annotations, k-shot pairings in task_split.json (the card's tree spells it task_spilit.json), and 101 online task folders with screenshots, UI XML files, operation logs and one screen recording each. Offline-Train (2,001 tasks) doubles as a training split. The card names no mobile operating system. Inference and evaluation code is in the separately cataloged LearnAct repository (github:lgy0404/learnact). The card declares Apache-2.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-a7beaa489fc4ffeb555f/record.json

### 结构化规格

- 动作 / 输出：mobile GUI actions such as CLICK[x,y] and SWIPE[direction]
- 评测方式：The card describes offline evaluation against ground-truth step actions and online evaluation on 101 interactive tasks; no evaluator ships in this dataset repository, and none was run.
- 侧重：demonstration-conditioned mobile GUI task execution, k-shot (k = 1, 2, 3) support demonstrations with instruction, UI and action similarity scores
- 观测：step screenshots, high-level and low-level instructions, UI element annotations, support demonstrations
- 任务设置：混合

#### 数量记录

- 2,353 个任务 — LearnGUI offline and online tasks combined（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 2,252 个任务 — LearnGUI-Offline（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 101 个任务 — LearnGUI-Online（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 2,001 个任务 — Offline-Train split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 251 个任务 — Offline-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 26,184 个步骤动作 — Offline-Train split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 3,469 个步骤动作 — Offline-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 1,423 个步骤动作 — Online-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 73 个应用 — LearnGUI offline and online tasks combined（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 101 个任务指令文件 — online/low_level_instructions at the inspected revision（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/LearnGUI）
- 101 段屏幕录像 — online/raw_data at the inspected revision（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/LearnGUI）

Task, step-action, application and file counts are different units; these counts are reported separately. Each k-shot table row reuses the same split tasks with a different number of support demonstrations; the 1-, 2- and 3-shot rows describe those same tasks.

### 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the LearnGUI release; the LearnAct code repository and app content shown in screenshots are not covered by this evidence.
  来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md

### 一手证据

- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md（获取于 2026-10-18T16:00:11Z；SHA-256：a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c）
- https://huggingface.co/api/datasets/lgy0404/LearnGUI（获取于 2026-10-18T16:00:11Z；SHA-256：19300276c328762286e677eed624bc169c189cafa48571244e791008bf576c50）
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/online/low_level_instructions/AudioRecorderRecordAudio.json（获取于 2026-10-18T16:00:11Z；SHA-256：d5b3c31b62e08bce07270e0f99d0c8608b68f64848251329e725384825b68b5d）
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md（获取于 2026-10-18T16:00:11Z；SHA-256：a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c）

---

## LlamaTouch

LlamaTouch 利用应用状态信息评估移动端 UI 任务。

- 目录页面：https://awesomecua.com/zh/resources/github-llamatouch-llamatouch/
- 原始来源：https://github.com/LlamaTouch/LlamaTouch
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:llamatouch/llamatouch

- 完整记录 JSON：https://awesomecua.com/resources/github-llamatouch-llamatouch/record.json

### 结构化规格

- 动作 / 输出：device actions through AgentEnv
- 评测方式：Checks whether the recorded execution visits all annotated essential states.
- 侧重：mobile task completion, essential-state evaluation
- 观测：screenshots, view hierarchies, Android activity names
- 任务设置：交互式

#### 数量记录

- 495 个任务 — complete task collection（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 102 个任务 — AITW-derived subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 393 个任务 — self-constructed subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 46 个 Android 应用 — self-constructed subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）

Application coverage refers to the self-constructed subset. Task execution and essential-state annotation are separate components; counts are publisher-reported.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9）
- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9）

---

## mac-agent-bench

mac-agent-bench 在已登录的 Mac 上运行电脑操作工具，以脚本检查任务结果，同时测量前台应用和光标的变化。

- 目录页面：https://awesomecua.com/zh/resources/github-prithviseran-mac-agent-bench/
- 原始来源：https://github.com/PrithviSeran/mac-agent-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测、可观测性、跨应用
- 证据核查日期：2026-11-09T19:57:10Z
- ID：github:prithviseran/mac-agent-bench

### 范围记录

The README describes a Python runner, MCP adapter files, task setup and check scripts, JSONL results, and per-trial transcripts. It states an MIT license for the harness and tasks. The source explicitly names MacAgentBench as another benchmark.

- 完整记录 JSON：https://awesomecua.com/resources/github-prithviseran-mac-agent-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/PrithviSeran/mac-agent-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/PrithviSeran/mac-agent-bench/HEAD/README.md（获取于 2026-11-09T19:57:10Z；SHA-256：6562e408af5fe630309dd75817338ba109734a97fff1dcf5f3069368eed54cf6）
- https://raw.githubusercontent.com/PrithviSeran/mac-agent-bench/HEAD/LICENSE（获取于 2026-11-09T14:20:53Z；SHA-256：83b091fc55f2296c5f0598af15b9ccd1dc4da9354264dcfaf96994e6928683ef）

---

## MacAgentBench

MacAgentBench 包含覆盖 25 个应用的 676 项 macOS 任务；每项任务在独立 Docker 容器中运行，通过含多个检查点的确定性规则检查评分。

- 目录页面：https://awesomecua.com/zh/resources/github-jetastra-macagentbench/
- 原始来源：https://github.com/JetAstra/MacAgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:jetastra/macagentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-jetastra-macagentbench/record.json

### 结构化规格

- 动作 / 输出：GUI interactions, command-line operations
- 评测方式：Deterministic rule-based evaluators with intermediate checkpoints.
- 侧重：macOS task completion, cross-application workflows
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 676 个任务 — documented MacAgentBench suite（来源报告；来源：https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md）
- 25 个应用 — documented application coverage（来源报告；来源：https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md）

The benchmark evaluates multiple agent frameworks and GUI/CLI workflows. Framework skills and interfaces affect the task setting, with observation representation varying by framework.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：f1f8c0cd5d984e4026abea858b54f0f1427c018cad7e75322e744f1e070225a9）
- https://export.arxiv.org/api/query?id_list=2605.06761%2C2605.07110%2C2605.07134%2C2605.09497%2C2605.11212%2C2605.12481%2C2605.12501%2C2605.12549%2C2605.13631%2C2605.14290%2C2605.14747%2C2605.15030%2C2605.15542%2C2605.15777%2C2605.16024%2C2605.16116%2C2605.16402%2C2605.17320%2C2605.18048%2C2605.18652%2C2605.18758%2C2605.19260%2C2605.19769%2C2605.21470%2C2605.25160%2C2605.25624%2C2605.25707%2C2605.26114%2C2605.27761%2C2605.28116%2C2605.28534%2C2605.28646%2C2605.28775%2C2605.29119%2C2605.29324%2C2605.29447%2C2605.29486%2C2605.29534%2C2605.29615%2C2606.06322%2C2606.09426%2C2606.11042%2C2606.22557%2C2606.23189%2C2606.24551%2C2608.17659%2C2609.22000%2C2609.34139&max_results=48（获取于 2026-10-16T06:32:03Z；SHA-256：2adad07a9ec7189aea25e48c76fa28206eda97f8974d5745cadda9529103bb1a）
- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：adf69997028988ba1eec34666afa119e007771dfc8e830c5dc50ad650896e897）

---

## macOSWorld

macOSWorld 在 30 款 macOS 应用的任务中，以五种语言评测 GUI 智能体。它提供用于 AWS macOS 实例的 Python 测试框架和安全任务子集。

- 目录页面：https://awesomecua.com/zh/resources/github-showlab-macosworld/
- 原始来源：https://github.com/showlab/macosworld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测、安全与防护、工作流
- 证据核查日期：2026-11-09T19:57:51Z
- ID：github:showlab/macosworld

### 范围记录

The repository includes task files, agent adapters, evaluation scripts, and instructions for configuring AWS instances. Its README cites arXiv:2506.04135 as the benchmark paper.

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-macosworld/record.json

### 许可证信息

- 代码：CC-BY-NC-4.0 — https://raw.githubusercontent.com/showlab/macosworld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/macosworld/HEAD/readme.md（获取于 2026-11-09T19:57:51Z；SHA-256：c92b717dfd531c9703d82e8e5d9c35b3d9577bce6b94b0a714f80522ffdb1d57）
- https://raw.githubusercontent.com/showlab/macosworld/HEAD/LICENSE（获取于 2026-11-09T14:21:16Z；SHA-256：41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0）

---

## Magnitude WebVoyager Benchmark Results

这是 Magnitude 浏览器智能体的 WebVoyager 评测发布内容，包括所报告的任务结果、任务修订和复现说明。

- 目录页面：https://awesomecua.com/zh/resources/github-magnitudedev-webvoyager/
- 原始来源：https://github.com/magnitudedev/webvoyager
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-09T21:09:58Z
- ID：github:magnitudedev/webvoyager

### 范围记录

The repository links to run results and includes patches.json for updated or removed WebVoyager tasks. Its performance figures are the authors' reported results.

- 完整记录 JSON：https://awesomecua.com/resources/github-magnitudedev-webvoyager/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/magnitudedev/webvoyager/HEAD/README.md（获取于 2026-11-09T21:09:58Z；SHA-256：5b39c1ad16cacd674666b689bd71f1fabc61f72df1549f26999a7c45bf2e99a7）

---

## Mobile-Bench-v2 released data

移动端智能体的离线任务数据，涵盖常见任务，并发布了含噪声、受污染和指令含糊的子集。

- 目录页面：https://awesomecua.com/zh/resources/url-1d5b85321b98765141fc/
- 原始来源：https://huggingface.co/datasets/xwk123/MobileBench-v2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、鲁棒性
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:1d5b85321b98765141fc

### 范围记录

The card distinguishes complete common-simple/common-complex JSON files from sampled noisy and ambiguous subsets; common tasks also require the separately cataloged Mobile3M dataset. Card metadata says Apache-2.0, while the prose explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to data. Do not apply the permissive header to dataset payloads, and do not describe every announced split as fully released.

- 完整记录 JSON：https://awesomecua.com/resources/url-1d5b85321b98765141fc/record.json

### 结构化规格

- 动作 / 输出：mobile UI actions, clarification responses
- 评测方式：Paper defines multi-path and noise/ambiguity evaluations; the public card identifies which files are full common-task sets and which are samples.
- 侧重：offline multi-path evaluation, noisy interfaces, ambiguous instructions
- 观测：mobile screenshots, XML UI state, instructions
- 任务设置：离线

#### 数量记录

未记录数量。

Release completeness differs by split. No full-benchmark sample total is inferred from the archive manifest.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The same first-party card has an Apache-2.0 metadata header but explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to the dataset in its License section. Preserve both declarations and leave a single data license unresolved instead of displaying the permissive header as the data permission.
  来源：https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：13424be795c7b75b8c2195469c1252a7b3ec633e8bb31f1f6d7e44476611cbe9）
- https://huggingface.co/api/datasets/xwk123/MobileBench-v2（获取于 2026-10-17T04:01:33Z；SHA-256：247b1766b8cbdb2943c4602d2667f9f06dec8b84f0d24457080d499177475f22）
- https://export.arxiv.org/api/query?id_list=2503.16788%2C2503.17709%2C2503.18492%2C2503.19537%2C2503.20978%2C2503.21620%2C2503.23434%2C2504.01382%2C2504.07981%2C2504.10445%2C2504.10458%2C2504.11257%2C2504.11281%2C2504.12679%2C2504.13805%2C2504.13865%2C2504.14239%2C2504.18575%2C2504.19838%2C2504.20464%2C2505.10924%2C2505.11891%2C2505.12299%2C2505.12632%2C2505.13227%2C2505.13887%2C2505.13909%2C2505.14289%2C2505.15810%2C2505.16282%2C2505.16827%2C2505.18829%2C2505.19897%2C2505.21496%2C2505.21499%2C2505.21936%2C2505.22648%2C2505.23762%2C2505.24838%2C2506.00618%2C2506.01391%2C2506.01968%2C2506.02456%2C2506.03143%2C2506.03569%2C2506.04135%2C2506.04614%2C2506.07672%2C2506.08012%2C2506.08972&max_results=50（获取于 2026-10-16T06:31:42Z；SHA-256：afe4e75ffb8a5c44f4c088a90ffa5f53553036f514aa768f5aee0c5aa38d731e）
- https://huggingface.co/api/datasets/xwk123/Mobile3M（获取于 2026-10-16T06:38:26Z；SHA-256：356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824）

---

## MobileGUI-VBench

覆盖日常场景的移动应用任务定义，标注了前置条件和需要澄清的事项，用于评估智能体行为。

- 目录页面：https://awesomecua.com/zh/resources/url-d7a4f34a6a5202af5f64/
- 原始来源：https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、手机操作、跨应用
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:d7a4f34a6a5202af5f64

### 范围记录

Public task files are available as JSONL and XLSX with documentation. The card explicitly declares Apache-2.0 for the dataset, despite having no license field in its YAML metadata. It identifies mobile apps across an unspecified operating-system taxonomy.

- 完整记录 JSON：https://awesomecua.com/resources/url-d7a4f34a6a5202af5f64/record.json

### 结构化规格

- 动作 / 输出：mobile interface operations, clarification requests
- 评测方式：Published task definitions include preconditions and clarification requirements.
- 侧重：mobile task completion, clarification behavior, cross-app tasks
- 观测：mobile app interfaces
- 任务设置：交互式

#### 数量记录

- 150 个任务 — MobileGUI-VBench release（来源报告；来源：https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md）
- 40 个移动应用 — MobileGUI-VBench release（来源报告；来源：https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md）

The card describes 140 single-app and 10 cross-app tasks. Task and app counts are different units.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：422ff6a557a1aabd8f6c6ef26e5fd05b992f4acf0e5128ab8bc437021fcc5ea7）
- https://huggingface.co/api/datasets/vivo-ai/MobileGUI-VBench（获取于 2026-10-17T02:42:32Z；SHA-256：5850fc58f54c877cffe328dba2a0b5e3e98767637aae6d6efd9a037cf06eabce）

---

## MobileGym++ / MobileGym++ Bench

基于浏览器渲染的移动端模拟环境，应用状态可重置，并为纯 GUI 智能体和 GUI 加工具智能体提供共用任务集。

- 目录页面：https://awesomecua.com/zh/resources/github-openmobile2-mobilegym-plusplus/
- 原始来源：https://github.com/OpenMobile2/MobileGym-plusplus
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：手机操作、评测、跨应用、工具集成
- 证据核查日期：2026-10-17T01:48:10Z
- ID：github:openmobile2/mobilegym-plusplus

### 范围记录

These clients simulate named commercial applications. The code and simulator data have distinct license files. No benchmark run was performed. The README describes a phone that runs in the browser, and the Android-emulator playground is a separate OpenMobile2 release, so the platform facet is web.

- 完整记录 JSON：https://awesomecua.com/resources/github-openmobile2-mobilegym-plusplus/record.json

### 结构化规格

- 动作 / 输出：GUI gestures, foreground-app tool calls in hybrid mode
- 评测方式：Programmatic checkers inspect changes in application state; both modes share task definitions and initial states.
- 侧重：task completion, cross-application workflows, GUI and app-native tool comparison
- 观测：screenshots
- 任务设置：交互式

#### 数量记录

- 215 个任务定义 — official.json（计算得出）（来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json）
- 63 个模拟客户端 — complete simulator installation（来源报告；来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md）
- 35 个模拟客户端 — new clients in this release（来源报告；来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md）

The task count was checked against unique task_id values in the published manifest. The 35 new clients are a subset of 63 total clients. This simulator runs in a browser; Android-emulator apps are a separate part of OpenMobile-2.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：d9f850ec196e715650e679cb81515adaa64ddc5a60a882bfe97b0f6a098ddc83）
- https://os-copilot.github.io/OpenMobile2-Home/（获取于 2026-10-17T01:46:06Z；SHA-256：9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc）
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json（获取于 2026-10-17T01:50:11Z；SHA-256：35c1641b349201c68917fbe4c4036814487678e9588d9b1c903af26917800316）
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE（获取于 2026-10-17T01:52:51Z；SHA-256：7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e）

---

## MobileRisk

带标注的 Android 智能体轨迹，分为安全与不安全两组，用于 OS-Sentinel 基准，衡量检测方法识别移动端 GUI 智能体不安全操作的能力。

- 目录页面：https://awesomecua.com/zh/resources/url-ca7bfba3981fc7e5b3bf/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/MobileRisk
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、评测、手机操作
- 证据核查日期：2026-11-10T03:01:14Z
- ID：url:ca7bfba3981fc7e5b3bf

### 范围记录

Files are zip archives such as safe_du.zip, safe_mi.zip and unsafe_mi.zip; the Hub preview shows 3,906 image rows. The OS-Sentinel README evaluates VLM and LLM detectors with pipeline/eval.py and related scripts, which need an API key.

- 完整记录 JSON：https://awesomecua.com/resources/url-ca7bfba3981fc7e5b3bf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/MobileRisk（获取于 2026-11-10T03:01:14Z；SHA-256：71e79e2f4b105fc19ceb7f961373ce7d07c2748dd5977b42e7f0043bc7f2dc26）
- https://huggingface.co/api/datasets/OS-Copilot/MobileRisk（获取于 2026-11-10T03:01:14Z；SHA-256：71e79e2f4b105fc19ceb7f961373ce7d07c2748dd5977b42e7f0043bc7f2dc26）

---

## MWMBench

MWMBench 通过要求模型依据截图和坐标操作预测下一屏幕，评估移动端 GUI 世界模型。

- 目录页面：https://awesomecua.com/zh/resources/url-a3ea3a844de7dd8a6792/
- 原始来源：https://huggingface.co/datasets/trillionlabs/MWMBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、世界模型、手机操作
- 证据核查日期：2026-11-09T21:10:03Z
- ID：url:a3ea3a844de7dd8a6792

### 范围记录

The card documents screenshot, next-screenshot and action-prompt fields, a train split and an Apache-2.0 license. It identifies the gWorld paper as its introduction.

- 完整记录 JSON：https://awesomecua.com/resources/url-a3ea3a844de7dd8a6792/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/trillionlabs/MWMBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/trillionlabs/MWMBench（获取于 2026-11-09T21:10:03Z；SHA-256：1aaae08e85dd73b94273f198ba322210384e5dcabfd4999afb50b0471ec04079）
- https://huggingface.co/api/datasets/trillionlabs/MWMBench（获取于 2026-11-09T21:10:03Z；SHA-256：1aaae08e85dd73b94273f198ba322210384e5dcabfd4999afb50b0471ec04079）

---

## Next-Gen CAPTCHAs

Next-Gen CAPTCHAs 提供交互式评测基准和认知差距 CAPTCHA 挑战生成器，用于防范 GUI 网页智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-metaagentx-nextgen-captchas/
- 原始来源：https://github.com/MetaAgentX/NextGen-CAPTCHAs
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-04T13:12:24Z
- ID：github:metaagentx/nextgen-captchas

- 完整记录 JSON：https://awesomecua.com/resources/github-metaagentx-nextgen-captchas/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/MetaAgentX/NextGen-CAPTCHAs/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MetaAgentX/NextGen-CAPTCHAs/HEAD/README.md（获取于 2026-11-04T13:12:24Z；SHA-256：44711dbb604684fdb67fe1214f65eca22368dfb1f2599304c75ce87e24b280ba）
- https://raw.githubusercontent.com/MetaAgentX/NextGen-CAPTCHAs/HEAD/LICENSE（获取于 2026-11-04T13:22:28Z；SHA-256：d009312b46edeace3d9fa5a66a6b11e71b78701aa1f2d1085500033b87821feb）

---

## Odysseys

包含 200 项取自真实浏览会话的长流程网页任务，通过 OSWorld 运行器在 Chrome 中访问实时互联网，并由 LLM 评判器依据轨迹截图和操作按评分细则逐项评分。

- 目录页面：https://awesomecua.com/zh/resources/github-ljang0-odysseys/
- 原始来源：https://github.com/ljang0/Odysseys
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、长任务、网页导航
- 证据核查日期：2026-10-19T07:10:53Z
- ID：github:ljang0/odysseys

### 范围记录

Each task has a SHA-1 ID, a prompt, a starting URL, a difficulty level, a reference step count, numbered rubric items with requirement and verification text, and SimilarWeb category tags. The README runs tasks with the OSWorld runner (Chrome in an Ubuntu VM, 100-step budget) after converting them with convert_odysseys_to_osworld.py, whose OSWorld evaluator is a placeholder; scoring is done afterwards by run_full_trajectory_per_rubric.py, which asks an LLM judge (by default gemini-3.1-flash-lite-preview, the model the README uses, or an OpenAI-compatible model) whether any step satisfies each rubric item. Reported metrics are the averaged rubric score, the perfect rate and trajectory efficiency. The README says the starting URL is always Google, but 70 of the 200 tasks in odysseys.json start at another site, and the converter opens each task's own URL. Tasks run on live websites, so results can drift. README results are paper figures.

- 完整记录 JSON：https://awesomecua.com/resources/github-ljang0-odysseys/record.json

### 结构化规格

- 动作 / 输出：OSWorld computer actions in Chrome
- 评测方式：Post-hoc rubric scoring: an LLM judge marks each rubric item satisfied if any step's screenshot and action satisfy it; metrics are mean rubric score, perfect rate (all items satisfied) and trajectory efficiency.
- 侧重：long-horizon web tasks from real browsing sessions
- 观测：screenshots
- 任务设置：交互式

#### 数量记录

- 200 个任务 — data/odysseys.json at 8378146（计算得出）（来源：https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json）
- 45 个简单任务 — data/odysseys.json at 8378146（计算得出）（来源：https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json）
- 46 个中等难度任务 — data/odysseys.json at 8378146（计算得出）（来源：https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json）
- 109 个困难任务 — data/odysseys.json at 8378146（计算得出）（来源：https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json）
- 1,225 项评分细则 — data/odysseys.json at 8378146（计算得出）（来源：https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json）

Counts were computed from the pinned task file and match the README's 200 tasks split into 45 easy, 46 medium and 109 hard. Difficulty follows reference step count and domain spread. The observation and action spaces are those of the OSWorld agent used; the paper setup uses a 100-step budget.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ljang0/Odysseys/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/README.md（获取于 2026-10-19T07:10:53Z；SHA-256：ffbbc15712ee94ec6718756992e7fda72c0632b259e73db7e93dd2d34674dd80）
- https://api.github.com/repos/ljang0/Odysseys/git/trees/837814633ef948479abb3d142458f0acdb73fa65?recursive=1（获取于 2026-10-19T07:10:55Z；SHA-256：c045c5525b370808035bffe95869fca74950580053f53bffd3563b801e5f451b）
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json（获取于 2026-10-19T07:10:55Z；SHA-256：0bb7081d740eb6237b72e7e33524cc9489e769c5e236ec54879a8eb06ebc48e0）
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/scripts/python/convert_odysseys_to_osworld.py（获取于 2026-10-19T07:10:55Z；SHA-256：d80d1edac5e9245225722f8ca5566b3b5e0346a60efe7f595918d60177d48bbc）
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/scripts/python/run_full_trajectory_per_rubric.py（获取于 2026-10-19T07:10:55Z；SHA-256：736c3c20a6d1d00d6fa1ffb34ae2b7c7835618bea0fe735bab99d036ee26983f）
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/LICENSE（获取于 2026-10-19T07:10:56Z；SHA-256：e58e9591671256eb4c7a45959614e70e9416ceda7b89d2120f9ade55060ed13b）
- https://raw.githubusercontent.com/ljang0/Odysseys/HEAD/LICENSE（获取于 2026-10-19T07:11:32Z；SHA-256：e58e9591671256eb4c7a45959614e70e9416ceda7b89d2120f9ade55060ed13b）

---

## OmniAct

OmniAct 是用于生成计算机交互程序的数据集和基准。

- 目录页面：https://awesomecua.com/zh/resources/url-849a86beaee006c6b147/
- 原始来源：https://huggingface.co/datasets/Writer/omniact
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:849a86beaee006c6b147

- 完整记录 JSON：https://awesomecua.com/resources/url-849a86beaee006c6b147/record.json

### 结构化规格

- 动作 / 输出：PyAutoGUI script: pointer movement/click/drag, key presses, hotkeys, and text entry
- 评测方式：The bundled evaluator reports weighted sequence match and action match, comparing action types and applying coordinate, key, and writing penalties. Target element-box metadata is evaluation-only. The retained scorer has a click-penalty defect: predicted coordinates are read from gold_line, so score reproduction requires explicit scorer-version review.
- 侧重：offline desktop/web action-script generation
- 观测：screenshot, natural-language task
- 任务设置：离线

#### 数量记录

- 6,788 个任务示例 — train split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）
- 2,020 个任务示例 — test split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）
- 991 个任务示例 — val split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）

This released split table totals 9,799 examples; paper-level collection size is a separate population. Public files include train/test/val JSON indexes, task/image archives, and eval.py. Evaluation uses offline script comparison. MIT is the Hub data declaration; original app/content rights are not resolved by it.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/Writer/omniact
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Writer/omniact（获取于 2026-10-16T06:38:27Z；SHA-256：2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3）
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md（获取于 2026-10-17T14:10:00Z；SHA-256：7b54ad557f89d621fe39c3d2fe9f02164a2bfcb7fef0db610d964586d3673693）
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/eval.py（获取于 2026-10-17T14:22:06Z；SHA-256：a786de678af46df5e2b6b1a2a69d2ee239fe8fd5b63663765d84d39e21fc2365）
- https://huggingface.co/api/datasets/Writer/omniact（获取于 2026-10-16T06:38:27Z；SHA-256：2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3）

---

## only-cli/benchmarks

这套可复现的基准测试比较智能体读取实时网页所用的工具，通过页面查看和浏览任务衡量内容获取情况、耗时及令牌用量。

- 目录页面：https://awesomecua.com/zh/resources/github-only-cli-benchmarks/
- 原始来源：https://github.com/only-cli/benchmarks
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、效率、网页导航
- 证据核查日期：2026-11-09T19:57:00Z
- ID：github:only-cli/benchmarks

### 范围记录

The repository includes task definitions, tool adapters, runner scripts and saved results. Agent suites require a logged-in Claude or Codex CLI.

- 完整记录 JSON：https://awesomecua.com/resources/github-only-cli-benchmarks/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/only-cli/benchmarks/HEAD/README.md（获取于 2026-11-09T19:57:00Z；SHA-256：d1d8d9e19d8c570f9b8d0af19bfacb353c0e3c9256021bd4f6c714ab03fffe58）

---

## Open CaptchaWorld

Open CaptchaWorld 通过网页界面中的交互式验证码谜题评估多模态网页智能体，提供谜题数据、答案检查和结果记录。

- 目录页面：https://awesomecua.com/zh/resources/github-metaagentx-opencaptchaworld/
- 原始来源：https://github.com/MetaAgentX/OpenCaptchaWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面理解、安全与防护
- 证据核查日期：2026-11-09T21:08:36Z
- ID：github:metaagentx/opencaptchaworld

### 范围记录

The README describes puzzle images and ground-truth files, a Flask application, API endpoints and a benchmark CLI. It links the project to its research paper.

- 完整记录 JSON：https://awesomecua.com/resources/github-metaagentx-opencaptchaworld/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MetaAgentX/OpenCaptchaWorld/HEAD/README.md（获取于 2026-11-09T21:08:36Z；SHA-256：782dab58f840519c2255664e35151d5c442754d5b96456734be026c2a147378a）

---

## OpenAgentSafety

这是一个智能体安全基准，采用涉及浏览器、文件系统、终端和消息工具的多步模拟任务，测试智能体如何应对含糊、冲突和对抗性指令。

- 目录页面：https://awesomecua.com/zh/resources/github-open-agent-safety-openagentsafety/
- 原始来源：https://github.com/Open-Agent-Safety/OpenAgentSafety
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、安全与防护、工具集成、长任务
- 证据核查日期：2026-11-09T19:57:44Z
- ID：github:open-agent-safety/openagentsafety

### 范围记录

The repository includes task and evaluation code and uses services launched through Docker. Its README calls the codebase legacy and points to an updated evaluation implementation. The source declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/github-open-agent-safety-openagentsafety/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Open-Agent-Safety/OpenAgentSafety/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Open-Agent-Safety/OpenAgentSafety/HEAD/README.md（获取于 2026-11-09T19:57:44Z；SHA-256：34cc82678478704f82932d9e5cc79ee6ee2a2dc3d43cdfc746d1a682c0273de5）
- https://raw.githubusercontent.com/Open-Agent-Safety/OpenAgentSafety/HEAD/LICENSE（获取于 2026-11-09T14:21:16Z；SHA-256：2d6976a9b482bb14d9cd4f0d97ce6e14305496f1649b8667cb91d027c670930f）

---

## OS-Harm

评估计算机使用智能体在滥用、提示注入和模型意外行为方面安全性的基准。

- 目录页面：https://awesomecua.com/zh/resources/github-tml-epfl-os-harm/
- 原始来源：https://github.com/tml-epfl/os-harm
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T09:36:33Z
- ID：github:tml-epfl/os-harm

### 范围记录

The retained task-ID manifests have 50 misuse, 10 injection and 50 misbehavior IDs. Prompt-injection execution expands vectors/goals; the reported 150-task total and released IDs have different grains.

- 完整记录 JSON：https://awesomecua.com/resources/github-tml-epfl-os-harm/record.json

### 结构化规格

- 动作 / 输出：OSWorld/PyAutoGUI desktop interaction
- 评测方式：Automated LLM judge scores both task accuracy and safety from saved execution traces. Keep judge model/prompt version and harm category with a result; the scripts separately compute predicted metrics. This is an interactive desktop safety benchmark.
- 侧重：deliberate misuse, prompt-injection safety, unintended harmful behavior during normal tasks
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：交互式

#### 数量记录

- 150 个任务（据论文/README 报告） — reported benchmark total; unique released task IDs use a separate count（来源报告；来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md）
- 50 个任务 ID — released misuse task-ID list; before injection/goal expansion（计算得出）（来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json）
- 10 个任务 ID — released injection task-ID list; before injection/goal expansion（计算得出）（来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json）
- 50 个任务 ID — released misbehavior task-ID list; before injection/goal expansion（计算得出）（来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json）

README/paper reports 150 tasks, whereas retained misuse/injection/misbehavior lists contain 50/10/50 IDs. run.py expands injection vectors/goals, giving the released ID inventory and paper settings different grains. Judge agreement F1 values in the README measure agreement with human labels. Experiments use OSWorld desktop apps, with VMware documented as tested and screenshot/a11y/SOM observation choices. Apache-2.0 covers the code. Publisher asks that the benchmark not be used directly as agent training data.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md（获取于 2026-10-16T09:36:33Z；SHA-256：d001158f58ac37b01c8470224db1567a52feb8010877305f7966637cf7400706）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/run.py（获取于 2026-10-17T14:23:14Z；SHA-256：86dd59a252fd654fc3244268a75de37b2c7f97e16f6b1de8c4cf885458a422f7）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json（获取于 2026-10-17T14:22:04Z；SHA-256：8ff6092a51cc924c5225ace01c011c6481a2461eb0a47b7360eddaf6619b898c）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json（获取于 2026-10-17T14:22:04Z；SHA-256：b4c451236bb4ff36eb7e790dfa8cb517bffb245602bc441080314b13c8aba54f）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json（获取于 2026-10-17T14:22:05Z；SHA-256：8eb6bade72696c3c0b53160a05b006a773c9e553ab5e401418b54d9acc98c0f2）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE（获取于 2026-10-16T09:39:34Z；SHA-256：7c3ab1eeeb073d92238ecb65ffaebe58ab5922929b115a7c0b64eb4f9a9afc2f）

---

## OSWorld 2.0

OSWorld 2.0 通过更新的任务集、轨迹查看器和容器沙箱，评测计算机使用智能体执行长流程桌面工作流的能力。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-osworld-v2/
- 原始来源：https://github.com/xlang-ai/OSWorld-V2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows
- 主题：评测、长任务、沙箱
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:xlang-ai/osworld-v2

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-osworld-v2/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/HEAD/LICENSE（获取于 2026-11-04T14:07:14Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）

---

## PersonalAlign

PersonalAlign 发布 AndroidIntent 评测，用于测试个性化移动界面智能体，并提供利用长期交互记录的 HIM-Agent 记忆方法。

- 目录页面：https://awesomecua.com/zh/resources/github-ilearn-lab-acl26-personalalign/
- 原始来源：https://github.com/iLearn-Lab/ACL26-PersonalAlign
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、记忆、交互历史、手机操作
- 证据核查日期：2026-11-09T19:57:38Z
- ID：github:ilearn-lab/acl26-personalalign

### 范围记录

The README gives evaluation scripts for personalized execution, proactive suggestion, and HIM-Agent memory. It instructs users to download FingerTip 20k separately before evaluation.

- 完整记录 JSON：https://awesomecua.com/resources/github-ilearn-lab-acl26-personalalign/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/iLearn-Lab/ACL26-PersonalAlign/HEAD/README.md（获取于 2026-11-09T19:57:38Z；SHA-256：b72e0a0967afa15da61ffcc59db4f10e41f26963df8a1a32373124b0d812d16a）

---

## PhoneHarness

PhoneHarness 评估结合图形界面操作、设备命令和主机工具的 Android 手机智能体。它提供运行环境、部分基准测试运行程序，以及基于运行轨迹的任务结果检查。

- 目录页面：https://awesomecua.com/zh/resources/github-phoneharness-phoneharness/
- 原始来源：https://github.com/PhoneHarness/PhoneHarness
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、工具集成、可观测性
- 证据核查日期：2026-11-09T21:10:25Z
- ID：github:phoneharness/phoneharness

### 范围记录

The README names Android emulators, a GUI worker, JSONL traces and HTML viewers. It points to a separate Hugging Face benchmark dataset and requires locally obtained apps and model endpoint credentials.

- 完整记录 JSON：https://awesomecua.com/resources/github-phoneharness-phoneharness/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/PhoneHarness/PhoneHarness/HEAD/README.md（获取于 2026-11-09T21:10:25Z；SHA-256：73e0a238aac7161c80d4c3a86d0afa4abea646fd371e8b2649218ce096b36894）

---

## PhoneHarness Bench

包含 124 个混合动作 Android 手机任务和 30 个安全任务的任务定义与验证器元数据，智能体可通过应用 GUI、设备命令和 MCP 风格工具执行操作。

- 目录页面：https://awesomecua.com/zh/resources/url-92b80b37a7a117acfd3c/
- 原始来源：https://huggingface.co/datasets/PhoneHarness/phoneharness-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、工具集成、安全与防护
- 证据核查日期：2026-11-10T06:29:29Z
- ID：url:92b80b37a7a117acfd3c

### 范围记录

Files are main_tasks.jsonl with a CSV mirror, safety_tasks.jsonl and dataset_summary.json; the release holds task definitions and verifier metadata only. Safety tasks carry SAFE_COMPLETE, CONFIRM_FIRST or NEVER_AUTO policy labels. The card declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-92b80b37a7a117acfd3c/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/PhoneHarness/phoneharness-bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/PhoneHarness/phoneharness-bench（获取于 2026-11-10T06:29:29Z；SHA-256：76172803083e0404125ed5be7523cf2afaf47a5cf793511e2429fcd3be3957b0）
- https://huggingface.co/api/datasets/PhoneHarness/phoneharness-bench（获取于 2026-11-10T06:29:29Z；SHA-256：76172803083e0404125ed5be7523cf2afaf47a5cf793511e2429fcd3be3957b0）

---

## PopupAttack

用于评估 GUI 智能体在恶意弹窗指令下表现的资源。

- 目录页面：https://awesomecua.com/zh/resources/github-salt-nlp-popupattack/
- 原始来源：https://github.com/SALT-NLP/PopupAttack
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护
- 证据核查日期：2026-10-16T06:40:54Z
- ID：github:salt-nlp/popupattack

- 完整记录 JSON：https://awesomecua.com/resources/github-salt-nlp-popupattack/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SALT-NLP/PopupAttack/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：24251854f9481af5c8db65750197604546f000b54868930a6de79adc365db854）

---

## PPTC

PPTC 是 PowerPoint 创建与编辑基准，通过 API 执行任务，并检查生成的演示文稿文件。

- 目录页面：https://awesomecua.com/zh/resources/github-gydpku-pptc/
- 原始来源：https://github.com/gydpku/PPTC
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：评测、工具集成
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:gydpku/pptc

- 完整记录 JSON：https://awesomecua.com/resources/github-gydpku-pptc/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/gydpku/PPTC/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gydpku/PPTC/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：63349e7557bd99240d4628de3994a53b69e54e3bd809895be11e9879bfba40cb）
- https://raw.githubusercontent.com/gydpku/PPTC/HEAD/LICENSE（获取于 2026-10-16T10:48:41Z；SHA-256：f872ff2b1a064f46a45eee86f2cb2562fc0513285b80036c6cf7df9a5ffc6c70）

---

## RecreationBench

通过混合式计算机交互复刻参考应用的任务。

- 目录页面：https://awesomecua.com/zh/resources/url-d9d8e68f19ef0956d189/
- 原始来源：https://huggingface.co/datasets/Qwen/RecreationBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、工具集成
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:d9d8e68f19ef0956d189

### 范围记录

Dataset card declares multiple upstream licenses; do not treat the package as having one blanket permissive license.

- 完整记录 JSON：https://awesomecua.com/resources/url-d9d8e68f19ef0956d189/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Qwen/RecreationBench/raw/main/README.md（获取于 2026-10-16T06:50:49Z；SHA-256：79deaa899d085ece77a127d53b12ddb9edea8a796943f35b75e9acec67bcb976）

---

## RiOSWorld

在 Ubuntu 虚拟机中衡量多模态计算机使用智能体的风险行为，包含钓鱼邮件等风险场景，并发布评估轨迹。

- 目录页面：https://awesomecua.com/zh/resources/github-yjyddq-riosworld/
- 原始来源：https://github.com/yjyddq/RiOSWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:yjyddq/riosworld

- 完整记录 JSON：https://awesomecua.com/resources/github-yjyddq-riosworld/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/yjyddq/RiOSWorld/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：c984f114df33af953a97d22e14e14246f8a98e0866edcaf283900b309b71d8d1）

---

## SPA-Bench

涵盖 66 款中英文 Android 应用中的 340 项单应用和跨应用任务，支持以插件方式接入 11 种手机智能体，并自动从粗到细检测任务是否成功。

- 目录页面：https://awesomecua.com/zh/resources/github-ai-agents-2030-spa-bench/
- 原始来源：https://github.com/ai-agents-2030/SPA-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:ai-agents-2030/spa-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-ai-agents-2030-spa-bench/record.json

### 结构化规格

- 动作 / 输出：agent-specific Android actions
- 评测方式：A multimodal evaluator and annotated key-component matching assess completion; the framework also reports resource-use metrics.
- 侧重：mobile task completion, resource use, cross-app workflows
- 观测：screenshot trajectories
- 任务设置：交互式

#### 数量记录

- 340 个任务 — complete README task collection（来源报告；来源：https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md）
- 300 个任务 — single-app subset（来源报告；来源：https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md）
- 40 个任务 — cross-app subset（来源报告；来源：https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md）
- 66 个应用 — README total including third-party, Google, and system apps（来源报告；来源：https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md）

The two task subsets partition the 340 tasks. The integrated agent and evaluator modes must accompany results. The preconfigured emulator snapshot is still marked coming soon in the inspected documentation.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：5294a67728072a3658cb2073bdf9a084fe3c00d87a848923dff68adb35213072）
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：5294a67728072a3658cb2073bdf9a084fe3c00d87a848923dff68adb35213072）
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/Documentation.md（获取于 2026-10-17T02:03:23Z；SHA-256：a55290d62f8823097c73d74bac4eb08853a3caff724382e60a6a9364e7ced987）
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/LICENSE（获取于 2026-10-16T06:41:58Z；SHA-256：6962bfc8ee16c6e985e4fb680b8fe46d5b34d30f7cb8a1e61fd4c55c93120ddf）

---

## Spider Browser Dataset

Spider Browser Dataset 在 18 个类别的 999 个 URL 和 327 个域名上评测浏览器自动化和抗反机器人机制的能力。

- 目录页面：https://awesomecua.com/zh/resources/github-spider-rs-spider-browser-dataset/
- 原始来源：https://github.com/spider-rs/spider-browser-dataset
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、鲁棒性
- 证据核查日期：2026-11-04T14:41:50Z
- ID：github:spider-rs/spider-browser-dataset

- 完整记录 JSON：https://awesomecua.com/resources/github-spider-rs-spider-browser-dataset/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/spider-rs/spider-browser-dataset/HEAD/README.md（获取于 2026-11-04T14:41:50Z；SHA-256：c36ad209f9c755d27220572906ba8674a0b88a2f78078b8e72fbc75810a74f78）

---

## ST-WebAgentBench

基于 BrowserGym 的基准，从 6 个可信性风险维度评估企业网页智能体的安全性和政策合规性。

- 目录页面：https://awesomecua.com/zh/resources/github-segev-shlomov-st-webagentbench/
- 原始来源：https://github.com/segev-shlomov/ST-WebAgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-10-18T10:59:54Z
- ID：github:segev-shlomov/st-webagentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-segev-shlomov-st-webagentbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/segev-shlomov/ST-WebAgentBench/HEAD/README.md（获取于 2026-10-18T10:59:54Z；SHA-256：e712feb15886d5a2aba1051d419dc69dc6e58c9a86a9d2d566090bbbf67492fc）

---

## UniClawBench

UniClawBench 评测智能体使用工具、浏览器、文件及桌面图形界面完成流程任务。双语版本包含 400 个任务、Docker 运行环境和轨迹查看工具。

- 目录页面：https://awesomecua.com/zh/resources/github-hku-mmlab-uniclawbench/
- 原始来源：https://github.com/HKU-MMLab/UniClawBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：评测、跨应用、工作流、可观测性
- 证据核查日期：2026-11-09T05:05:17Z
- ID：github:hku-mmlab/uniclawbench

### 范围记录

The README describes 200 English tasks and 200 mirrored Chinese tasks, with an executor, hidden answer supervisor, and public user simulator. The repository includes a WebUI and distributed dispatch scripts.

- 完整记录 JSON：https://awesomecua.com/resources/github-hku-mmlab-uniclawbench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/HKU-MMLab/UniClawBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/HKU-MMLab/UniClawBench/HEAD/README.md（获取于 2026-11-09T05:05:17Z；SHA-256：4f0c6ae1ffee2bfdfffd4ebd1f12ce8a3bde8a71d4d5393f50a066c2eaebc276）
- https://raw.githubusercontent.com/HKU-MMLab/UniClawBench/HEAD/LICENSE（获取于 2026-11-09T05:07:33Z；SHA-256：f2b932ba4cc23fb6e61cb9c8a568f0fec473da0bc4207640ce33b75734375945）

---

## VG-GUI-Bench

一个根据教程视频、先前动作和当前屏幕预测移动端界面动作的基准，发布了逐步标注、视频和参考帧。

- 目录页面：https://awesomecua.com/zh/resources/url-3e3ca34dbdaf3190465c/
- 原始来源：https://huggingface.co/datasets/Aoraku/VG-GUI-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、视频、手机操作、动作预测
- 证据核查日期：2026-11-09T19:55:51Z
- ID：url:3e3ca34dbdaf3190465c

### 范围记录

The card reports 100 episodes and 1,071 annotated steps. It describes a JSON annotation file, source tutorial videos, eight reference-frame modes, and an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3e3ca34dbdaf3190465c/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/Aoraku/VG-GUI-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Aoraku/VG-GUI-Bench（获取于 2026-11-09T19:55:51Z；SHA-256：2adf52772b0107386cbb0f18a15c013c768c3c9d4ac8b0991a402ca53ce0573e）
- https://huggingface.co/api/datasets/Aoraku/VG-GUI-Bench（获取于 2026-11-09T19:55:51Z；SHA-256：2adf52772b0107386cbb0f18a15c013c768c3c9d4ac8b0991a402ca53ce0573e）

---

## VideoGUI

基于教学视频构建的桌面 GUI 任务基准。

- 目录页面：https://awesomecua.com/zh/resources/github-showlab-videogui/
- 原始来源：https://github.com/showlab/videogui
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、视频
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:showlab/videogui

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-videogui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/videogui/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：1a21631fb312cc7eac35547792611a84f13dcf756a3cf92209676ccdb92cbc6b）

---

## vimgolf-gym

这是一个面向 VimGolf 任务的类 Gym 基准，可让智能体向 Vim 发送按键、截取屏幕截图，并按正确性和按键次数评估解法。

- 目录页面：https://awesomecua.com/zh/resources/github-james4ever0-vimgolf-gym/
- 原始来源：https://github.com/James4Ever0/vimgolf-gym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、自动化、沙箱
- 证据核查日期：2026-11-09T19:56:57Z
- ID：github:james4ever0/vimgolf-gym

### 范围记录

The package provides local, online and custom challenges, plus a Docker execution option. The README includes action, screenshot, verification and scoring examples.

- 完整记录 JSON：https://awesomecua.com/resources/github-james4ever0-vimgolf-gym/record.json

### 许可证信息

- 代码：Unlicense — https://raw.githubusercontent.com/James4Ever0/vimgolf-gym/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/James4Ever0/vimgolf-gym/HEAD/README.md（获取于 2026-11-09T19:56:57Z；SHA-256：a804950d1cfa50d7ea838795eaf77e91fd7b5a3894a15064d5ac5ea7492cb8ff）
- https://raw.githubusercontent.com/James4Ever0/vimgolf-gym/HEAD/LICENSE（获取于 2026-11-09T14:20:47Z；SHA-256：6b0382b16279f26ff69014300541967a356a666eb0b91b422f6862f6b7dad17e）

---

## WASP

WASP 是一套可运行的基准测试，在模拟网站环境中评估针对网页智能体的提示注入攻击。

- 目录页面：https://awesomecua.com/zh/resources/github-facebookresearch-wasp/
- 原始来源：https://github.com/facebookresearch/wasp
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-09T21:08:28Z
- ID：github:facebookresearch/wasp

### 范围记录

The repository includes attack configurations and code based on VisualWebArena and computer-use demos. The README specifies Python, Playwright, site setup, and model API credentials.

- 完整记录 JSON：https://awesomecua.com/resources/github-facebookresearch-wasp/record.json

### 许可证信息

- 代码：CC-BY-NC-4.0 — https://raw.githubusercontent.com/facebookresearch/wasp/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/facebookresearch/wasp/HEAD/README.md（获取于 2026-11-09T21:08:28Z；SHA-256：c8cad77d7b99dc4880fafd4bfd929697e4db987aa0cbfa6b378490b61b0f5d64）
- https://raw.githubusercontent.com/facebookresearch/wasp/HEAD/LICENSE（获取于 2026-11-09T21:11:04Z；SHA-256：4b531055125dcda36059651634bdb424ad2612f4759b3d2067a731d2823d1cdc）

---

## WeaveBench

WeaveBench 是结合图形界面交互与代码执行的计算机使用基准。

- 目录页面：https://awesomecua.com/zh/resources/url-6a212bc12f82c824f6b9/
- 原始来源：https://huggingface.co/datasets/wanlilll/WeaveBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、工具集成
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:6a212bc12f82c824f6b9

- 完整记录 JSON：https://awesomecua.com/resources/url-6a212bc12f82c824f6b9/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/wanlilll/WeaveBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/wanlilll/WeaveBench（获取于 2026-10-16T06:38:27Z；SHA-256：e65e5793fe5b251ef7793a0618f4e8139fe5c92c2cf8093d0cc6142e8ece9d02）
- https://huggingface.co/api/datasets/wanlilll/WeaveBench（获取于 2026-10-16T06:38:27Z；SHA-256：e65e5793fe5b251ef7793a0618f4e8139fe5c92c2cf8093d0cc6142e8ece9d02）

---

## web-agent-eval (REAL Benchmark Runner)

在明确的步骤、token 和预算约束下，使用 REAL 评测基准中的 102 个复刻网站评测网页智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-saarthak-yadav-web-agent-eval/
- 原始来源：https://github.com/saarthak-yadav/web-agent-eval
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-04T14:41:52Z
- ID：github:saarthak-yadav/web-agent-eval

- 完整记录 JSON：https://awesomecua.com/resources/github-saarthak-yadav-web-agent-eval/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/saarthak-yadav/web-agent-eval/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/saarthak-yadav/web-agent-eval/HEAD/README.md（获取于 2026-11-04T14:41:52Z；SHA-256：71898649b30cdb23817a348aec099bdd0741454e50f950c4dcfd231f8ca2ff31）
- https://raw.githubusercontent.com/saarthak-yadav/web-agent-eval/HEAD/LICENSE（获取于 2026-11-04T14:45:07Z；SHA-256：080d93a39040f6bdcc157f8a9bda0c8f5f68dc54b16b00db1175da9c6f45b2f0）

---

## WebArena-Infinity

生成模仿 GitLab、PayPal、Xero、Elation EHR 等产品的网页应用，具备可重置状态及供浏览器智能体使用的 Python 验证任务，并附有构建应用的编程智能体流水线。

- 目录页面：https://awesomecua.com/zh/resources/github-web-arena-x-webarena-infinity/
- 原始来源：https://github.com/web-arena-x/webarena-infinity
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、沙箱、数据生成
- 证据核查日期：2026-10-20T04:06:22Z
- ID：github:web-arena-x/webarena-infinity

### 范围记录

Documented by a March 2026 blog post at webarena.dev; the README cites that post and no arXiv paper. At commit 1ca7781, apps/ holds 13 generated environments, each a static HTML/CSS/JS app whose browser pushes its full state to a Python server.py; verifiers read GET /api/state, and POST /api/reset restores the seed state. The tree has 1,620 real-task verifiers (260 easy, 260 medium, 1,100 hard) and 737 functional-test verifiers. The blog's initial-release table lists ten of these environments with 1,260 tasks; elation-patient-communication, figma-slides and figma-text-and-typography are further directories outside that table. evaluation/run_eval_parallel.py runs browser-use agents (GPT-4o, Gemini 3 Flash and Pro, Claude Sonnet 4.6) with vision off unless --use-vision is set, and screenshot agents (Gemini and Claude computer use, Kimi K2.5, Qwen 3.5) whose coordinate actions Playwright executes; defaults are 50 steps and a 600-second task limit. infra/pipeline.py runs Claude Code with --dangerously-skip-permissions to generate new apps from documentation, such as the product-manual files under apps/user-manuals, whose rights were not reviewed. The agent trajectories described in the blog are published separately as the Hugging Face dataset webarena-x/webarena-infinity-trajectories.

- 完整记录 JSON：https://awesomecua.com/resources/github-web-arena-x-webarena-infinity/record.json

### 结构化规格

- 动作 / 输出：browser-use element actions, mouse click, drag and scroll, key press and typing
- 评测方式：Before each task the harness posts /api/reset; after the agent finishes, the task's Python verifier reads the app state from GET /api/state and returns pass or fail with a message. Tasks are graded easy, medium or hard, and the blog reports success rate per agent.
- 侧重：browser agents on generated replicas of real web applications, programmatic state verification of task outcomes
- 观测：DOM-derived page state through browser-use (screenshots optional), screenshots
- 任务设置：交互式

#### 数量记录

- 1,260 个任务 — initial release, ten environments (blog statistics table)（来源报告；来源：https://webarena.dev/webarena-infinity/content.md）
- 10 个环境 — initial release (blog statistics table)（来源报告；来源：https://webarena.dev/webarena-infinity/content.md）
- 13 个环境目录 — apps/ at commit 1ca7781, excluding ablations, app-description and user-manuals（计算得出）（来源：https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1）
- 1,620 个真实任务验证脚本 — apps/*/real-tasks/task_*.py at commit 1ca7781 (260 easy, 260 medium, 1,100 hard by file prefix)（计算得出）（来源：https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1）
- 737 个功能测试验证脚本 — apps/*/function-tasks/task_*.py at commit 1ca7781（计算得出）（来源：https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1）

The repository holds three more environment directories than the blog's release table, so state which environments and task suite (real-tasks or function-tasks) a score covers. Keep the agent harness, vision setting, step limit and task timeout with any score. No benchmark run was executed for this review.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/README.md（获取于 2026-10-20T04:06:22Z；SHA-256：4565d5631292349f2e534fc1602425639d4874cbff64778a28f3ccd6f3086081）
- https://webarena.dev/webarena-infinity/content.md（获取于 2026-10-20T04:06:17Z；SHA-256：f55d394a98ab18b01578d329c6bfe43de90be336051e6e479c730c39e4181f2b）
- https://api.github.com/repos/web-arena-x/webarena-infinity/git/trees/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d?recursive=1（获取于 2026-10-20T04:06:17Z；SHA-256：1680aa208a7a5c4615b642a4cfeeb70d61967f0e774fe37e63c22c18800dd3fa）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/run_eval_parallel.py（获取于 2026-10-20T04:06:21Z；SHA-256：b4a55c3e5bd0479dd70ab660c190aa10c08ec253d86224fa378fe75fb8f3a920）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/tasks.py（获取于 2026-10-20T04:06:22Z；SHA-256：a36959f9907e486c768fb42f78f58335df8e7fdd8be9216db54ff51c5bf012a8）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/agents.py（获取于 2026-10-20T04:06:22Z；SHA-256：4c2819c8126df79a979586ad874eecb947c414ba6356d791254bafe16994886e）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/evaluation/vision_agents.py（获取于 2026-10-20T04:06:22Z；SHA-256：03c1cf3728ac0977ed56a9b1dfe52a0bef979443802905d0ea16fa1d88bfd5dc）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/1ca77813bf8d8e4011aa3fb1f740f70d78bd522d/docs/environment-protocol.md（获取于 2026-10-20T04:06:22Z；SHA-256：21a54a5f85b4cc75539af061d8b066fa582941fc40268d1052dfe17062d46d44）
- https://raw.githubusercontent.com/web-arena-x/webarena-infinity/HEAD/LICENSE（获取于 2026-10-20T04:07:54Z；SHA-256：8954170f22d127cd7d0b7d1d62c25356d0989167eec26e68c69782892e480b94）

---

## WebGen-Bench

WebGen-Bench 用自动化测试评估生成的网站，其中包括让界面智能体执行交互并检查结果。仓库提供评测代码和数据。

- 目录页面：https://awesomecua.com/zh/resources/github-mnluzimu-webgen-bench/
- 原始来源：https://github.com/mnluzimu/WebGen-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面设计
- 证据核查日期：2026-11-09T06:16:36Z
- ID：github:mnluzimu/webgen-bench

### 范围记录

The repository includes data, evaluation scripts and archived experiment outputs. The README describes Windows and Linux execution paths and optional deployment of a UI testing model.

- 完整记录 JSON：https://awesomecua.com/resources/github-mnluzimu-webgen-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mnluzimu/WebGen-Bench/HEAD/README.md（获取于 2026-11-09T06:16:36Z；SHA-256：f579d4f90c17ed8a9e862f2ba6b2862886637425fdce8fdf495ea37d246a5b10）

---

## WebHarbor

WebHarbor 将 153 个真实网站做成基于 Docker 的本地镜像，包含登录和数据库，并提供 3,518 个带验证器的任务，用于评估和强化学习训练 GUI 网页智能体，另有控制面实现亚秒级站点重置。

- 目录页面：https://awesomecua.com/zh/resources/github-aiming-lab-webharbor/
- 原始来源：https://github.com/aiming-lab/WebHarbor
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：沙箱、评测、网页导航、强化学习
- 证据核查日期：2026-11-10T06:29:27Z
- ID：github:aiming-lab/webharbor

### 范围记录

Prebuilt images on Docker Hub (about 20 GB for all sites); tasks are in Harbor format on Hugging Face with train, test and WebVoyager splits, and harnesses for browser-use, OpenCode and OpenWebRL are in harbor/. The authors report a 75.8 average for WebHarbor-4B on WebVoyager and Online-Mind2Web.

- 完整记录 JSON：https://awesomecua.com/resources/github-aiming-lab-webharbor/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/aiming-lab/WebHarbor/db506e3a28d8829a8295a2bb5f06c299e1db47f6/README.md（获取于 2026-11-10T06:29:27Z；SHA-256：850d1ffba550f7e2d776d69009cd2ea3aed05acf3b3bdc4d798facc41ef19080）

---

## WebReplayBench

一个网页智能体基准，提供本地商店网站、BrowserGym 任务和数据库审计记录，用于衡量任务完成情况以及回溯时的重复写入。

- 目录页面：https://awesomecua.com/zh/resources/github-mahirlabibdihan-webreplaybench/
- 原始来源：https://github.com/mahirlabibdihan/WebReplayBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、状态追踪、安全与防护
- 证据核查日期：2026-11-09T19:57:08Z
- ID：github:mahirlabibdihan/webreplaybench

### 范围记录

The README lists 20 tasks, 100 instrumented elements, and JSON scenario files. Running the site requires Node and PostgreSQL; a Docker setup is also documented.

- 完整记录 JSON：https://awesomecua.com/resources/github-mahirlabibdihan-webreplaybench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mahirlabibdihan/WebReplayBench/HEAD/README.md（获取于 2026-11-09T19:57:08Z；SHA-256：4de49715d062c3c24329571d1e3c3ffe4c7f7efd3b26a21f2353b0adee3f61b3）

---

## WebRetriever

WebRetriever 提供网页智能体评测运行器，并利用采集到的网络请求、操作和页面 URL 判断任务是否完成。

- 目录页面：https://awesomecua.com/zh/resources/github-mininglamp-ai-webretriever/
- 原始来源：https://github.com/Mininglamp-AI/WebRetriever
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-09T19:55:43Z
- ID：github:mininglamp-ai/webretriever

### 范围记录

The repository includes example tasks, launch scripts, agent code and NavEval code. Its setup uses Playwright and task data hosted on Hugging Face; the source declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/github-mininglamp-ai-webretriever/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Mininglamp-AI/WebRetriever/HEAD/README.md（获取于 2026-11-09T19:55:43Z；SHA-256：fcf53577ad17c2e3255605efdbae11abab08f6b0b20a9164021d1d3a5acef654）

---

## WebRewardBench

用于网页过程奖励模型的离线偏好评估集，将页面和轨迹上下文与受偏好及被拒绝的候选决策配对。

- 目录页面：https://awesomecua.com/zh/resources/url-ac6d0f80765f5a32255a/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、奖励模型、评测
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:ac6d0f80765f5a32255a

### 范围记录

Two public Parquet shards are present. Card metadata reports 776 test rows, whereas the project describes 1,000-plus test cases without reconciling that count to rows. The 776 test rows and 1,000-plus project cases use unresolved counting units; neither establishes a count of independent tasks. No data license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-ac6d0f80765f5a32255a/record.json

### 结构化规格

- 动作 / 输出：candidate-decision preference
- 评测方式：Compare reward-model preferences with the provided chosen/rejected decision labels; no independent score was reproduced.
- 侧重：web process-reward evaluation
- 观测：page screenshots, text observations, action history, task checklists
- 任务设置：离线

#### 数量记录

- 776 行 — Hub test split（来源报告；来源：https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md）

The current Hub row count and project case-count claim use unresolved counting units. Candidate lists make rows a different unit from tasks or pairs.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：0968f60eea10b95f79cd16ad3746b0e0b1acaeb0e97c45856f709d53a14dd73a）
- https://huggingface.co/api/datasets/LangAGI-Lab/WebRewardBench（获取于 2026-10-17T02:44:50Z；SHA-256：db06c66b8cf5687008b0ad0d9ae269fcc27936887d238cfe2bdeb52151e1683e）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）

---

## WebTailBench

用于评估计算机使用智能体的实时网页任务定义和评分标准，包含保留的原始任务、更新后的 V2 任务集及独立的拒绝任务集。

- 目录页面：https://awesomecua.com/zh/resources/url-3b6dfd52f98bfe76bc7f/
- 原始来源：https://huggingface.co/datasets/microsoft/WebTailBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、安全与防护
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:3b6dfd52f98bfe76bc7f

### 范围记录

Public TSV files contain V1, V2 and refusal task definitions. The card declares MIT for the dataset. V1 and V2 share the same 609 task identities. The May 2026 refresh supersedes calendar-bound task wording.

- 完整记录 JSON：https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/record.json

### 结构化规格

- 动作 / 输出：browser interaction
- 评测方式：Task-specific precomputed rubrics; refusal tasks are a separate evaluation population.
- 侧重：live web task completion, unsafe-request refusal
- 观测：web pages
- 任务设置：交互式

#### 数量记录

- 609 个任务标识 — main V1/V2 suite (shared identities)（来源报告；来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md）
- 111 个任务 — refusal suite（来源报告；来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md）

V2 refreshes task strings and rubrics while preserving V1 task IDs. Counts are task definitions.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：c4cfc361d1d47d7855269af4110483363964e23f9c65244a1182830eccccbb7f）
- https://huggingface.co/api/datasets/microsoft/WebTailBench（获取于 2026-10-17T02:42:32Z；SHA-256：93469a20d333219dde89a225891a54ee716120d559eb8ac9f69a1a7ee84f57a3）

---

## WebUIProof

一个包含 149 项网页界面生成任务及结构化测试用例的基准，并使用视觉语言智能体在浏览器中测试生成的界面。

- 目录页面：https://awesomecua.com/zh/resources/github-yunyuntsai-webuiproof-benchmark/
- 原始来源：https://github.com/yunyuntsai/webuiproof-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、网页导航
- 证据核查日期：2026-11-09T19:56:02Z
- ID：github:yunyuntsai/webuiproof-benchmark

### 范围记录

The repository lists task files, evaluation code, result files, and training data. Its instructions specify an API key and a local web application setup.

- 完整记录 JSON：https://awesomecua.com/resources/github-yunyuntsai-webuiproof-benchmark/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/yunyuntsai/webuiproof-benchmark/HEAD/README.md（获取于 2026-11-09T19:56:02Z；SHA-256：ff8d4a9d821839772032e5d4b764ca8fd5e2211ad74e69ad3ec27d93024cf095）

---

## WindTunnel

WindTunnel 通过相同的网页任务比较浏览器智能体的交互接口，并依据应用状态检查衡量任务完成情况、执行时间、令牌用量和成本。

- 目录页面：https://awesomecua.com/zh/resources/github-nekuda-ai-windtunnel/
- 原始来源：https://github.com/nekuda-ai/WindTunnel
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率
- 证据核查日期：2026-11-09T21:08:36Z
- ID：github:nekuda-ai/windtunnel

### 范围记录

The README describes a harness, task definitions, scoring checks and published run artifacts. Running the full benchmark requires Docker and an API key.

- 完整记录 JSON：https://awesomecua.com/resources/github-nekuda-ai-windtunnel/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/nekuda-ai/WindTunnel/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/nekuda-ai/WindTunnel/HEAD/README.md（获取于 2026-11-09T21:08:36Z；SHA-256：861f45f93f5e88ef03d7cd477f7efa543241a0daaa36a9fb81c50ae328e06b45）
- https://raw.githubusercontent.com/nekuda-ai/WindTunnel/HEAD/LICENSE（获取于 2026-11-09T21:11:07Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## WorkArena-Instances

这套受限访问的 ServiceNow 实例用于运行 WorkArena 基准评估；仓库提供实例信息，并说明研究使用条件。

- 目录页面：https://awesomecua.com/zh/resources/url-01b9e39cd2526d41c527/
- 原始来源：https://huggingface.co/datasets/ServiceNow/WorkArena-Instances
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、沙箱、工作流
- 证据核查日期：2026-11-09T06:16:38Z
- ID：url:01b9e39cd2526d41c527

### 范围记录

Access requires accepting conditions through Hugging Face. The repository lists instances.json and instances_v2.json; the card limits use to benchmarking, evaluation and research.

- 完整记录 JSON：https://awesomecua.com/resources/url-01b9e39cd2526d41c527/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ServiceNow/WorkArena-Instances（获取于 2026-11-09T06:16:38Z；SHA-256：7c797dc4f0ac44ab8b67d5659c1c156a8707456cc691edbc1c538754e0fd848e）
- https://huggingface.co/api/datasets/ServiceNow/WorkArena-Instances（获取于 2026-11-09T06:16:38Z；SHA-256：7c797dc4f0ac44ab8b67d5659c1c156a8707456cc691edbc1c538754e0fd848e）

---

## Action Check WebMCP

外部状态验证评测基准，用于测试 WebMCP 浏览器工具是否真正产生其声称的 DOM 和后端效果。

- 目录页面：https://awesomecua.com/zh/resources/github-ajaknumber4-action-check-webmcp/
- 原始来源：https://github.com/ajaknumber4/action-check-webmcp
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、状态追踪、工具集成、网页导航
- 证据核查日期：2026-11-04T18:11:27Z
- ID：github:ajaknumber4/action-check-webmcp

- 完整记录 JSON：https://awesomecua.com/resources/github-ajaknumber4-action-check-webmcp/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ajaknumber4/action-check-webmcp/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ajaknumber4/action-check-webmcp/main/README.md（获取于 2026-11-04T18:11:27Z；SHA-256：f9c70f290a730537b60b903944429ab624422c22606e3eb5d42c874c03136241）
- https://raw.githubusercontent.com/ajaknumber4/action-check-webmcp/HEAD/LICENSE（获取于 2026-11-04T18:16:06Z；SHA-256：f5eee63fb76b6585d82d7c3e7e7c5136331316c3256e72cb6bdf587f234d20de）

---

## action-choice-bench

action-choice-bench 在固定的界面状态下评测离散 UI 动作选择和经过校准的弃答能力。

- 目录页面：https://awesomecua.com/zh/resources/github-gbesse-action-choice-bench/
- 原始来源：https://github.com/gbesse/action-choice-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、动作预测、安全与防护
- 证据核查日期：2026-11-04T14:20:13Z
- ID：github:gbesse/action-choice-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-gbesse-action-choice-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/gbesse/action-choice-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gbesse/action-choice-bench/HEAD/README.md（获取于 2026-11-04T14:20:13Z；SHA-256：4446d6d9bf5b0a93bb30d6a4088b7c27b843eb0ee4adc0068acb7007d0511d3d）
- https://raw.githubusercontent.com/gbesse/action-choice-bench/HEAD/LICENSE（获取于 2026-11-04T14:23:42Z；SHA-256：21f5a0a33c9be1b92476f41d82de75c482a3c9f514d408249429957a2571a200）

---

## Agent Tool Benchmark

提供可复现的同机评测基准，比较 AI 智能体的浏览器和桌面工具包，并附有完整执行记录。

- 目录页面：https://awesomecua.com/zh/resources/github-alloevil-agent-tool-benchmark/
- 原始来源：https://github.com/alloevil/agent-tool-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、工具集成、效率
- 证据核查日期：2026-11-04T14:41:52Z
- ID：github:alloevil/agent-tool-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-alloevil-agent-tool-benchmark/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/alloevil/agent-tool-benchmark/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/alloevil/agent-tool-benchmark/HEAD/README.md（获取于 2026-11-04T14:41:52Z；SHA-256：c230f3c544dc842f3d51dfd99f43fb3ec4219ccee172d9c965066ddb2cc004b5）
- https://raw.githubusercontent.com/alloevil/agent-tool-benchmark/HEAD/LICENSE（获取于 2026-11-04T14:45:06Z；SHA-256：55c6e8ebf27106c9f41b9ee6d8c0f295172c0b50a0fd9b84ef688480b1d522b1）

---

## agent-bench

agent-bench 通过涵盖导航、表单填写、搜索和电商结账的 50 个网页任务，评测基于浏览器的 AI 智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-megaurav4-agent-bench/
- 原始来源：https://github.com/MeGaurav4/agent-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-04T14:20:08Z
- ID：github:megaurav4/agent-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-megaurav4-agent-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/MeGaurav4/agent-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MeGaurav4/agent-bench/HEAD/README.md（获取于 2026-11-04T14:20:08Z；SHA-256：f93e8e9b24195e4f4c3f6602914daaeceb3252fa1473bb1875c8a16166110ef4）
- https://raw.githubusercontent.com/MeGaurav4/agent-bench/HEAD/LICENSE（获取于 2026-11-04T14:23:45Z；SHA-256：7e484ad0f31747e0e9c737568bf6af8c5b1632d4a61a61c1d813266d4880ce5f）

---

## Agentalyze

Agentalyze 是面向 LLM 浏览器智能体的评测测试框架，提供真实 Chromium 任务、基于 DOM 的状态验证器和步骤级轨迹分析。

- 目录页面：https://awesomecua.com/zh/resources/github-ilyat9-agentalyze/
- 原始来源：https://github.com/Ilyat9/Agentalyze
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:ilyat9/agentalyze

- 完整记录 JSON：https://awesomecua.com/resources/github-ilyat9-agentalyze/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Ilyat9/Agentalyze/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：20c1d8fa330d0631393756c1af5ec429b601e1863d8eb3e665073faef25bff91）

---

## agentB

agentB 是评测基准，用于评测开放网页智能体在真实知识工作和浏览器自动化任务上的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-beme08-agentb/
- 原始来源：https://github.com/beme08/agentb
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-04T16:30:12Z
- ID：github:beme08/agentb

- 完整记录 JSON：https://awesomecua.com/resources/github-beme08-agentb/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/beme08/agentb/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/beme08/agentb/HEAD/README.md（获取于 2026-11-04T16:30:12Z；SHA-256：37559ee669543cde359a723b3366bd62768c630ea330a3ec893f7ff2760a1652）
- https://raw.githubusercontent.com/beme08/agentb/HEAD/LICENSE（获取于 2026-11-04T16:34:22Z；SHA-256：8f0d6c2682c3751cb502003e52bc9af3cc0aa85023c62a8a245070312d0e6526）

---

## AgentDAM

衡量网页智能体在端到端任务执行中是否不必要地使用敏感个人信息的基准。

- 目录页面：https://awesomecua.com/zh/resources/github-facebookresearch-ai-agent-privacy/
- 原始来源：https://github.com/facebookresearch/ai-agent-privacy
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T10:42:34Z
- ID：github:facebookresearch/ai-agent-privacy

- 完整记录 JSON：https://awesomecua.com/resources/github-facebookresearch-ai-agent-privacy/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/facebookresearch/ai-agent-privacy/HEAD/README.md（获取于 2026-10-16T10:42:34Z；SHA-256：9c938f8f3f3ee04f459362a8b7d399588fd030ce476cda111e5f23fbf1e31f10）

---

## AgentDojo

用于测试工具调用智能体提示注入安全性的 Python 基准包，包含工作区、银行、旅行和 Slack 任务套件、可插拔攻防模块，以及评估任务效用和攻击成功率的脚本。

- 目录页面：https://awesomecua.com/zh/resources/github-ethz-spylab-agentdojo/
- 原始来源：https://github.com/ethz-spylab/agentdojo
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：安全与防护、评测、工具集成
- 证据核查日期：2026-10-18T11:06:20Z
- ID：github:ethz-spylab/agentdojo

### 范围记录

Agents interact with simulated applications through function calls; it is included as an adjacent security benchmark for comparison with GUI and browser-agent safety work. The inspected v1 suite directory lists banking, slack, travel and workspace; later suite versions (v1_1 to v1_2_2) exist alongside it, so record the suite version with any score. The README warns that the package API may still change. MIT applies to the repository code.

- 完整记录 JSON：https://awesomecua.com/resources/github-ethz-spylab-agentdojo/record.json

### 结构化规格

- 动作 / 输出：function calls to suite tools
- 评测方式：Each user task is checked for utility, and each injection task is checked for whether the attacker goal was executed; the benchmark script combines suites, attacks and defenses.
- 侧重：prompt-injection robustness, task utility under attack
- 观测：tool-call results from simulated applications
- 任务设置：交互式

#### 数量记录

- 97 个用户任务 — suites reported in the paper (version 3 abstract)（来源报告；来源：https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1）
- 629 个安全测试用例 — suites reported in the paper (version 3 abstract)（来源报告；来源：https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1）
- 4 个任务套件 — src/agentdojo/default_suites/v1 directory listing（计算得出）（来源：https://api.github.com/repos/ethz-spylab/agentdojo/contents/src/agentdojo/default_suites/v1）

Paper counts describe the reported benchmark; later suite versions in the repository may change tasks. Keep the suite version, attack, defense and model with a result.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/README.md（获取于 2026-10-18T11:06:20Z；SHA-256：d8c6460ecce9bbf59ed300fbc74b4440188f74cd147a7611836270be49e7660e）
- https://api.github.com/repos/ethz-spylab/agentdojo（获取于 2026-10-18T11:06:25Z；SHA-256：9ad83f42b22642a9dc444edcb45f07a8b296b36b459c951183d3d8a4f3e47f2d）
- https://api.github.com/repos/ethz-spylab/agentdojo/contents/src/agentdojo/default_suites/v1（获取于 2026-10-18T11:06:45Z；SHA-256：3f222c17164d5efd16c1c3b93088c5f51c0eb7d3f034581be3bbe7a4b3b2750d）
- https://export.arxiv.org/api/query?id_list=2406.13352&max_results=1（获取于 2026-10-18T11:06:08Z；SHA-256：82f712f54aa9b3b42146ddc85ad8a0f6b765507bfdde986cab3344f50a88bf4b）
- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE（获取于 2026-10-18T11:06:32Z；SHA-256：4285a071f2d382338e52b4fb0a186d952984a34d43a33d8872e1a1d8cb43401e）
- https://raw.githubusercontent.com/ethz-spylab/agentdojo/HEAD/LICENSE（获取于 2026-10-18T11:06:32Z；SHA-256：4285a071f2d382338e52b4fb0a186d952984a34d43a33d8872e1a1d8cb43401e）

---

## AgentForge

用于对计算机使用智能体进行压力测试的多智能体对抗评测与安全检查实验室。

- 目录页面：https://awesomecua.com/zh/resources/github-moeenasim-agentforge-v5/
- 原始来源：https://github.com/MoeenAsim/Agentforge-V5
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、安全与防护、自我反思、鲁棒性
- 证据核查日期：2026-11-04T18:11:31Z
- ID：github:moeenasim/agentforge-v5

- 完整记录 JSON：https://awesomecua.com/resources/github-moeenasim-agentforge-v5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MoeenAsim/Agentforge-V5/main/README.md（获取于 2026-11-04T18:11:31Z；SHA-256：804cccd4f46d23989e4356c6b05e4cd2b92d8dea6e6b975d1d0ae3d31a14ff87）

---

## agentic-browser-boundary-tests

面向 AI 浏览器和网页智能体的本地测试套件，包含提示注入及指令权限边界场景，并配有金丝雀检查。

- 目录页面：https://awesomecua.com/zh/resources/github-larrypeseckis-agentic-browser-boundary-tests/
- 原始来源：https://github.com/larrypeseckis/agentic-browser-boundary-tests
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-04T16:30:16Z
- ID：github:larrypeseckis/agentic-browser-boundary-tests

- 完整记录 JSON：https://awesomecua.com/resources/github-larrypeseckis-agentic-browser-boundary-tests/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/larrypeseckis/agentic-browser-boundary-tests/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/larrypeseckis/agentic-browser-boundary-tests/HEAD/README.md（获取于 2026-11-04T16:30:16Z；SHA-256：d8b3f1efea6173921f2f892f1e9180674209a05bce9c3dbc69f69c90fe650697）
- https://raw.githubusercontent.com/larrypeseckis/agentic-browser-boundary-tests/HEAD/LICENSE（获取于 2026-11-04T16:34:22Z；SHA-256：e82c568e34c35180b6027f56fa75ee2b78e7f3ea2cf28c532e246ea648aae440）

---

## AgentReady

云端浏览器评测测试框架，用于测试自主 AI 智能体能否完成网站的主要转化动作。

- 目录页面：https://awesomecua.com/zh/resources/github-williehems-agentready/
- 原始来源：https://github.com/Williehems/agentready
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面设计
- 证据核查日期：2026-11-04T18:11:37Z
- ID：github:williehems/agentready

- 完整记录 JSON：https://awesomecua.com/resources/github-williehems-agentready/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Williehems/agentready/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Williehems/agentready/main/README.md（获取于 2026-11-04T18:11:37Z；SHA-256：267635348d119608cc61bd9fa4ec3a0d6d26e832f56c5758131c977047a4a4a6）
- https://raw.githubusercontent.com/Williehems/agentready/HEAD/LICENSE（获取于 2026-11-04T18:16:08Z；SHA-256：6925e9d6c82840eec0d9d315bd9f0a23262f1b53909ec6c87011f3212689121d）

---

## AndroidArena

用于评估语言模型驱动的智能体的 Android 环境。

- 目录页面：https://awesomecua.com/zh/resources/github-androidarenaagent-androidarena/
- 原始来源：https://github.com/AndroidArenaAgent/AndroidArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:androidarenaagent/androidarena

- 完整记录 JSON：https://awesomecua.com/resources/github-androidarenaagent-androidarena/record.json

### 结构化规格

- 动作 / 输出：app launch/stop, click/double-click/long-click, text input, swipe/drag and Android navigation, finish
- 评测方式：The released evaluator compares trajectories with reference actions using longest-common-subsequence-based task reward and completion. Its reversed redundancy metric is the reference/predicted action-length ratio (with 1e-6 denominator smoothing), multiplied by the LLM success flag. LLM success judgments and instruction-constraint checks are separate metrics. Complete annotated action sequences are pending release; reference-dependent evaluation currently has limited coverage.
- 侧重：multi-step Android tasks, cross-app workflows and instruction constraints
- 观测：UI hierarchy text, screenshots, combined text/image observations
- 任务设置：交互式

#### 数量记录

未记录数量。

README states that task instructions are released but annotated action sequences, apart from the calendar example, will come later. Environment setup targets Android API 33 with uiautomator2 and manual Google-account setup. Public task YAML and evaluator code exist. No task total is derived from app YAML file counts. Code and data licenses remain unknown.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：206bd0dc5220cf754cffc97767cce6a3cd27660ef050a569366bef2331241c60）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/README.md（获取于 2026-10-17T14:21:10Z；SHA-256：a1e7dc0c5facae030c2cf19aad6511996e7e1198d8d6619268d10c29a1b57bcf）
- https://api.github.com/repos/AndroidArenaAgent/AndroidArena/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：edc03388b67143644db4a412e4c888f8c796068daff29f63615f0b6a3a04262a）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/observation.py（获取于 2026-10-17T14:24:52Z；SHA-256：cfa9d272c85398f54c18d6e7445d680009e8c16d128962235d899592d3094c2f）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/actions.py（获取于 2026-10-17T14:24:53Z；SHA-256：d25f2edf9202f59615341b62fc6046ac23a6f4cb072a6038ac562506cbdc891c）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/run_evaluator.py（获取于 2026-10-17T14:21:10Z；SHA-256：257c42e980a0b14bd74bfcc381a0ecbef2b538c0f1cc1a94d22925efe354fb8e）

---

## AndroidControl-Curated

净化后的 AndroidControl 测试集，按目标元素边界框评估预测点击，并修复含糊或错误的任务标签；以步骤级 JSON 文件和截图归档发布。

- 目录页面：https://awesomecua.com/zh/resources/url-dda8a0f1413a6bc7c26f/
- 原始来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、GUI 定位
- 证据核查日期：2026-10-18T16:19:08Z
- ID：url:dda8a0f1413a6bc7c26f

### 范围记录

The Hub repository holds five benchmark JSON files, three screenshot tar.gz archives (about 18 GB in total) and the project's web-page assets; the card declares no data license. The point-format files keep coordinate targets, the bbox files add element boxes, and the high-level task-improved file adds revised task text and corrected labels from the paper's LLM-plus-human review; the evaluation script runs that file by default. The GitHub repository batechworks/AndroidControl_Curated carries JSON files with the same names and the vLLM evaluation code.

- 完整记录 JSON：https://awesomecua.com/resources/url-dda8a0f1413a6bc7c26f/record.json

### 结构化规格

- 动作 / 输出：click, long press, swipe, text input, open app, navigate back, wait
- 评测方式：Per-step type accuracy, box accuracy and step success. A step succeeds when the predicted action type matches and, for click and long-press steps, the centre of the predicted box or point lies inside the ground-truth box; in the task-improved file, listed candidate actions count as alternative ground truths.
- 侧重：single-step Android GUI action prediction, element grounding against target boxes
- 观测：screenshots, task goals, step instructions (low-level files), action history
- 任务设置：离线

#### 数量记录

- 8,377 条步骤记录 — android_control_high_task-improved.json (high-level goals, revised labels)（计算得出）（来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json）
- 1,540 个回合（不重复的截图目录） — android_control_high_task-improved.json（计算得出）（来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json）
- 527 条含修订任务文本的步骤记录 — android_control_high_task-improved.json（计算得出）（来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json）
- 85 条含已更正真值动作的步骤记录 — android_control_high_task-improved.json (gpt_corrected true)（计算得出）（来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json）
- 8,377 条步骤记录 — android_control_low_bbox.json (step instructions)（计算得出）（来源：https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_low_bbox.json）

Counts were computed from the pinned JSON files. The high-level bbox file before task correction and the two point-format files have different record totals; these counts are reported separately.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/raw/62aeecdcafa4097d340c5a4389690a5f14e938ed/README.md（获取于 2026-10-18T16:19:08Z；SHA-256：4711ccd07eee077ec4297b9c403dc948b33592a18bed6b7bfb833022ccfda0b9）
- https://huggingface.co/api/datasets/batwBMW/AndroidControl_Curated/revision/62aeecdcafa4097d340c5a4389690a5f14e938ed（获取于 2026-10-18T16:18:11Z；SHA-256：247a1030646117d8d6dba3947a37ce036027377f4ee884c403d21c2090c693e4）
- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json（获取于 2026-10-18T16:18:11Z；SHA-256：e8c851dd1ab367db3e7eef05735920e38d34c43cd8d6f80516fc8bd6aec9656c）
- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_low_bbox.json（获取于 2026-10-18T16:18:11Z；SHA-256：75b442e6b7e627ae4fdf845052734a578999edfa20e09db96007899a85ef2aba）
- https://raw.githubusercontent.com/batechworks/AndroidControl_Curated/955062cc68e20666f71c4930e6025f989393a326/src/eval/evaluate_actions_androidControl_vllm.py（获取于 2026-10-18T16:17:00Z；SHA-256：77a8b6da8f9c8e5e7016794198bad8e167d6fc5ccfcd66ca0105080e9b01bd49）
- https://raw.githubusercontent.com/batechworks/AndroidControl_Curated/955062cc68e20666f71c4930e6025f989393a326/src/eval/utils.py（获取于 2026-10-18T16:17:30Z；SHA-256：e8eb46eaecb4abcbeb921e20b86682116505e944b3bf242a62b0cfb24053b244）

---

## AppSim-Bench

提供模拟移动应用和评估工具，在受控应用状态下复现 GUI 智能体任务。

- 目录页面：https://awesomecua.com/zh/resources/github-acrab-agentic-labs-appsim/
- 原始来源：https://github.com/Acrab-Agentic-Labs/AppSim
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、沙箱
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:acrab-agentic-labs/appsim

- 完整记录 JSON：https://awesomecua.com/resources/github-acrab-agentic-labs-appsim/record.json

### 结构化规格

- 动作 / 输出：mobile GUI operations
- 评测方式：Controlled backend data and outcome-based task verification.
- 侧重：mobile task completion
- 观测：mobile interfaces
- 任务设置：交互式

#### 数量记录

- 557 个任务 — AppSim-Bench paper-described release（来源报告；来源：https://arxiv.org/abs/2609.07712）
- 17 个应用 — published simulated app set（来源报告；来源：https://raw.githubusercontent.com/Acrab-Agentic-Labs/AppSim/HEAD/README.md）

Use the simulated apps and controlled backend state supplied by the benchmark. Desktop host instructions describe setup; the evaluated platform is separate.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Acrab-Agentic-Labs/AppSim/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：12dc2afe339c1ed66e4a6a4ccf5ae13d27ce32f452960341529a4b9016f69059）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=100&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:32Z；SHA-256：13d3fb5811d203f2e6b80eb45d30ebc0b3cfefd88e2034ffa3b1b80687bef285）

---

## Astra Game Arena

可恢复进度、仅通过屏幕交互的计算机使用评测场，用于测试 Codex 智能体能否玩本地安装的桌面游戏。

- 目录页面：https://awesomecua.com/zh/resources/github-gih10012-astra-game-arena/
- 原始来源：https://github.com/gih10012/astra-game-arena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：评测、界面理解、GUI 定位、动作预测
- 证据核查日期：2026-11-04T18:11:44Z
- ID：github:gih10012/astra-game-arena

- 完整记录 JSON：https://awesomecua.com/resources/github-gih10012-astra-game-arena/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/gih10012/astra-game-arena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gih10012/astra-game-arena/main/README.md（获取于 2026-11-04T18:11:44Z；SHA-256：3de5186dbd0affcbea6915090d650c7bc80a0276bcb6869fa9ad347eced09de0）
- https://raw.githubusercontent.com/gih10012/astra-game-arena/HEAD/LICENSE（获取于 2026-11-04T18:16:06Z；SHA-256：dca6509359bc55da0945f70ad19072049ea68d4405280fc8bbe27fef63f9fdcf）

---

## AutomotiveUI-Bench-4K

车载信息娱乐屏幕的离线测试集，含来自 15 个品牌的 998 张照片和截图，以及 4,208 条英文标注，用于定位 UI 元素并判断预期结果通过或失败。

- 目录页面：https://awesomecua.com/zh/resources/url-e80e9cf4f565f9ab2abf/
- 原始来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、评测、界面理解、产业
- 证据核查日期：2026-10-19T07:49:42Z
- ID：url:e80e9cf4f565f9ab2abf

### 范围记录

Sparks Solutions publishes one ungated test split of 22 Parquet shards at revision d760810c. The card describes mostly photographs of in-vehicle infotainment displays plus some direct screenshots such as Android Auto; its per-brand image counts cover 13 car brands, Apple CarPlay and Google Android Auto and sum to 998. No catalog platform facet fits infotainment systems, so the environment is unspecified. Each annotation pairs a bounding box with either an imperative test action or an expected-result statement labeled passed or failed; UI text is German or English and annotations are English. The card's example code runs the publisher's ELAM-7B model, and its results table is publisher-reported. The card cites arXiv 2505.05895 (Ernhofer et al., 2025). CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/record.json

### 结构化规格

- 动作 / 输出：point or bounding box for the referenced UI element, passed or failed verdict for expected results
- 评测方式：The card's scoring script counts a grounding hit when the predicted point, or the center of a predicted box, lies inside the annotated box, and scores expected-result verdicts against the passed or failed labels, overall and by UI language.
- 侧重：grounding infotainment UI elements from test-action commands, judging expected-result statements as passed or failed
- 观测：photographs and screenshots of in-vehicle infotainment displays, English test-action or expected-result text
- 任务设置：离线

#### 数量记录

- 4,208 条标注 — test split, the only split, at revision d760810c（来源报告；来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md）
- 998 张图像 — images in the release（来源报告；来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md）
- 2,269 条标注 — Test Action rows in the test split, from the Hub dataset viewer's column statistics（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test）
- 1,939 条标注 — Expected Result rows in the test split (1,375 passed, 564 failed), from the Hub dataset viewer's column statistics（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test）

Image and annotation totals are the card's. The class split comes from the Hub dataset viewer's statistics for the test split, whose 4,208 rows match the card; the language column is the UI language (2,220 German and 1,988 English rows).

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md（获取于 2026-10-19T07:49:42Z；SHA-256：5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7）
- https://huggingface.co/api/datasets/sparks-solutions/AutomotiveUI-Bench-4K/revision/d760810c47bed006d88ee70dad7248056fdec223（获取于 2026-10-19T07:49:43Z；SHA-256：864ae1e85c8348b194569e78e9ac1defc9c928016ab4f0d0e49895d8e99c0130）
- https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test（获取于 2026-10-19T07:50:08Z；SHA-256：ae3164aa48bcf6a05f6f6c0dd6d43e463b97a1dc5562b60460f4e787f7841d44）
- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md（获取于 2026-10-19T07:49:42Z；SHA-256：5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7）

---

## B-MoCA

B-MoCA 是涵盖不同界面配置的移动设备控制基准。

- 目录页面：https://awesomecua.com/zh/resources/github-jylee425-b-moca/
- 原始来源：https://github.com/jylee425/b-moca
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:jylee425/b-moca

- 完整记录 JSON：https://awesomecua.com/resources/github-jylee425-b-moca/record.json

### 结构化规格

- 动作 / 输出：normalized touch/lift coordinate pairs for tap or swipe
- 评测方式：Task success is detected using Appium; positive task reward terminates the episode. Environment variants change device/locale/wallpaper/DPI/dark mode and are loaded as snapshots. The numeric action interface is (touch_y, touch_x, lift_y, lift_x); wrapper/tanh transformations must be kept with the evaluated agent.
- 侧重：Android control across visual/device variation, generalization across environment snapshots
- 观测：screenshot pixels, XML view hierarchy, goal instruction
- 任务设置：交互式

#### 数量记录

- 131 个任务定义文件 — asset/tasks/**/*.textproto in retained release/ver.3 tree; source-file inventory distinct from the paper test-task total（计算得出）（来源：https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1）
- 35 行环境配置数据 — environments_train.csv, retained release/ver.3 snapshot（计算得出）（来源：https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv）
- 10 行环境配置数据 — environments_test.csv, retained release/ver.3 snapshot（计算得出）（来源：https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv）

Current source inventory differs in grain from published experiment subsets: 131 definitions and 35/10 configuration rows are separate counts. Setup requires Android API 29, Appium, external app versions and generated AVD snapshots. No apps/snapshots were downloaded or run. Apache-2.0 covers the code.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/readme.md（获取于 2026-10-16T06:35:58Z；SHA-256：bd1354c8008d7d79d4883c0c037b7918392f86fab61391b39b52e507b04672ce）
- https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：06ba40a5e0d5fb52e7bf5e5df636cb8e8bbbc56a8308dc6d528012489f7650ee）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/coordinator.py（获取于 2026-10-17T14:24:53Z；SHA-256：34bc0c23949732e0a8091e334d59d2d41cae49a82cde850247aa0e6d739d2464）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/environment.py（获取于 2026-10-17T14:21:10Z；SHA-256：d866af344c0cff5255b813576f2e9e9c5c2964e6809058b39e2b5180af71d946）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv（获取于 2026-10-17T14:23:14Z；SHA-256：c278cc28f8a0667b7fdc6ba638704cfbe43783cd496181231c45c865087543f3）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv（获取于 2026-10-17T14:23:15Z；SHA-256：4b92933fe4f4f66e71a694b579940db11bedd5ea8f153752a44e633825b06fa3）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE（获取于 2026-10-16T06:41:58Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
- https://api.github.com/repos/gimme1dollar/b-moca（获取于 2026-10-17T14:14:03Z；SHA-256：9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f）
- https://api.github.com/repos/jylee425/b-moca（获取于 2026-10-17T14:14:04Z；SHA-256：9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f）

---

## Bananalyzer

Bananalyzer 是评测框架和数据集套件，用于测试网页智能体的结构化数据提取和导航任务。

- 目录页面：https://awesomecua.com/zh/resources/github-reworkd-bananalyzer/
- 原始来源：https://github.com/reworkd/bananalyzer
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-04T13:12:33Z
- ID：github:reworkd/bananalyzer

- 完整记录 JSON：https://awesomecua.com/resources/github-reworkd-bananalyzer/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/reworkd/bananalyzer/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/reworkd/bananalyzer/HEAD/README.md（获取于 2026-11-04T13:12:33Z；SHA-256：c7f5574143b871394c3f3ad38635eb6c2e00f37bd435dbb524c2ba68d8696245）
- https://raw.githubusercontent.com/reworkd/bananalyzer/HEAD/LICENSE（获取于 2026-11-04T13:22:34Z；SHA-256：f4ff2ba0f16e8abb7087071651c217ced6421e224313755c5d88433e324f19a1）

---

## Baseerat

Baseerat 评测对计算机使用智能体的非视觉监督，测试屏幕阅读器的音频描述能否揭示智能体的不安全动作。

- 目录页面：https://awesomecua.com/zh/resources/github-yas1i-baseerat/
- 原始来源：https://github.com/yas1i/baseerat
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Android
- 主题：评测、安全与防护、人机协作
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:yas1i/baseerat

- 完整记录 JSON：https://awesomecua.com/resources/github-yas1i-baseerat/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/yas1i/baseerat/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：736b72fc9e8f35f63b1d6a8472c7628870c8285f148b910f15ee7479d8382c24）

---

## BearCubs

面向实时网页的智能体基准，包含 111 道题，评测智能体通过文本与多模态交互浏览网页并提取事实答案的能力。

- 目录页面：https://awesomecua.com/zh/resources/url-86229ebd22143128bcf7/
- 原始来源：https://bear-cubs.github.io
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面理解
- 证据核查日期：2026-11-09T05:05:19Z
- ID：url:86229ebd22143128bcf7

### 范围记录

The site provides a leaderboard, example trajectories, and autorater code. It says gold answers are available by request for noncommercial research and are not publicly released.

- 完整记录 JSON：https://awesomecua.com/resources/url-86229ebd22143128bcf7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://bear-cubs.github.io（获取于 2026-11-09T05:05:19Z；SHA-256：b1f73da19162f0fdb4b95a96afe12c1a84a15338738ba46ff61fd5ef2b8ea4be）

---

## Bellwether

Bellwether 衡量计算机使用智能体在旧式企业 UI 工作流上的多次试验 pass^k 一致性。

- 目录页面：https://awesomecua.com/zh/resources/github-al-mohad-bell-weather/
- 原始来源：https://github.com/al-mohad/bell-weather
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、鲁棒性、工作流
- 证据核查日期：2026-11-04T14:20:13Z
- ID：github:al-mohad/bell-weather

- 完整记录 JSON：https://awesomecua.com/resources/github-al-mohad-bell-weather/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/al-mohad/bell-weather/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/al-mohad/bell-weather/HEAD/README.md（获取于 2026-11-04T14:20:13Z；SHA-256：5cdd12de673bbd9cbd3262b2049474c85d13b0dc16c32c1239d211ad5dc8883b）
- https://raw.githubusercontent.com/al-mohad/bell-weather/HEAD/LICENSE（获取于 2026-11-04T14:23:41Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## Bond Underwriting Agent Benchmark

中文垂直领域长程评测基准，通过多步骤金融债券承销文档和网页工作流程测试智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-vitoworleone-bond-underwriting-agent-benchmark/
- 原始来源：https://github.com/vitoworleone/bond-underwriting-agent-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、长任务、工作流
- 证据核查日期：2026-11-04T18:11:44Z
- ID：github:vitoworleone/bond-underwriting-agent-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-vitoworleone-bond-underwriting-agent-benchmark/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/vitoworleone/bond-underwriting-agent-benchmark/main/README.md（获取于 2026-11-04T18:11:44Z；SHA-256：fcf090c02c2bff65b60a2512a570809c5cde2d4e4eb35f14da7860d44c82c400）

---

## BrowseComp

OpenAI 的 1,266 题浏览智能体基准，要求跨多个网站持续搜索和导航，给出简短且可核验的答案，并由模型裁判评分。

- 目录页面：https://awesomecua.com/zh/resources/component-openai-simple-evals-browsecomp/
- 原始来源：https://github.com/openai/simple-evals/blob/main/browsecomp_eval.py
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务
- 证据核查日期：2026-10-18T11:08:09Z
- ID：component:openai/simple-evals/browsecomp

### 范围记录

This record covers the BrowseComp reference implementation and question set that OpenAI publishes in simple-evals. The catalog's client received HTTP 403 from the launch page (https://openai.com/index/browsecomp/). The paper (arXiv 2504.12516) is not in the retained archive and no curated receipt cites its arXiv ID, so it is not linked yet. The simple-evals README says updates for new models have ended and the repository continues to host the BrowseComp reference implementation. The README lists BrowseComp next to an MIT License link, but this record does not treat that as a declaration for the question data, so the data license stays unknown. The derivative BrowseComp-Plus uses fixed-corpus retrieval and is a separate resource; this record covers BrowseComp.

- 完整记录 JSON：https://awesomecua.com/resources/component-openai-simple-evals-browsecomp/record.json

### 结构化规格

- 动作 / 输出：未记录
- 评测方式：A grader model extracts the final answer from the response and judges it correct or incorrect against the decrypted reference answer; accuracy is the share judged correct. The reference implementation sends each question to any sampler and does not prescribe browsing tools or an action space.
- 侧重：open-web information seeking, persistent multi-site search
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 1,266 个问题 — browse_comp_test_set.csv（计算得出）（来源：https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv）

The count is the number of data rows in the released CSV, whose problem and answer fields are XOR-encrypted with a per-row canary and carry a problem_topic label. Results depend on the agent's browsing tools, the grader model and the number of repeats; record these with a score.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The simple-evals LICENSE is the standard MIT text and covers the evaluation code; the question CSV is hosted separately and has no data-license declaration in the inspected sources.
  来源：https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/openai/simple-evals/HEAD/browsecomp_eval.py（获取于 2026-10-18T11:08:09Z；SHA-256：0bfb33cfdf5fa0e0d7da48068cc86c5a22acc755979be4a2b46f8a821cc44b74）
- https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv（获取于 2026-10-18T11:08:29Z；SHA-256：7b24471cd5b3eb2a46830a14802b5c029ea62f488ff75a0f88af7923d1454abf）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/README.md（获取于 2026-10-18T11:08:34Z；SHA-256：d9647c4a0e34cd9b2b528ff6986141734aac6f5f2f18a068eeadb2af0b29786f）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE（获取于 2026-10-18T11:08:35Z；SHA-256：d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE（获取于 2026-10-18T11:08:35Z；SHA-256：d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0）

---

## Browser Agent Comparison (4 Approaches)

从任务完成情况和成本两方面比较四种 AI 浏览器控制方式：Chrome 扩展程序、Playwright、Browser Use V3 和 CLI。

- 目录页面：https://awesomecua.com/zh/resources/github-ismael-joffroy-chandoutis-browser-agent-comparison/
- 原始来源：https://github.com/ismael-joffroy-chandoutis/browser-agent-comparison
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率、工具集成
- 证据核查日期：2026-11-04T16:30:16Z
- ID：github:ismael-joffroy-chandoutis/browser-agent-comparison

- 完整记录 JSON：https://awesomecua.com/resources/github-ismael-joffroy-chandoutis-browser-agent-comparison/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ismael-joffroy-chandoutis/browser-agent-comparison/HEAD/README.md（获取于 2026-11-04T16:30:16Z；SHA-256：6ffa7b2876a0ee00c1131973cc8f0ee38144610c40e9cf906785cb87739400a6）

---

## Browser Automation Benchmark (Python vs Rust)

评测 Python Playwright、Rust playwright-rs 和 chromiumoxide 的无头浏览器启动、导航及截图延迟。

- 目录页面：https://awesomecua.com/zh/resources/github-tashonbraganca-browser-automation-benchmark/
- 原始来源：https://github.com/TashonBraganca/browser-automation-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、效率、网页导航
- 证据核查日期：2026-11-04T14:41:52Z
- ID：github:tashonbraganca/browser-automation-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-tashonbraganca-browser-automation-benchmark/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/TashonBraganca/browser-automation-benchmark/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TashonBraganca/browser-automation-benchmark/HEAD/README.md（获取于 2026-11-04T14:41:52Z；SHA-256：21a01bd842d92a17985bb684c17c07b000020f84c9a33f52115c90d0f10fa3fd）
- https://raw.githubusercontent.com/TashonBraganca/browser-automation-benchmark/HEAD/LICENSE（获取于 2026-11-04T14:45:05Z；SHA-256：dc81469864443c0f1fa1a4179807e815dc4ea5602d00f5d2a5b2606c5bd806bf）

---

## Browser LLM Perf

Browser LLM Perf 比较浏览器自动化 CLI（CraftDriver 与 Playwright CLI）的任务完成速度和 LLM token 成本。

- 目录页面：https://awesomecua.com/zh/resources/github-dtopuzov-browser-llm-perf/
- 原始来源：https://github.com/dtopuzov/browser-llm-perf
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率
- 证据核查日期：2026-11-04T14:41:52Z
- ID：github:dtopuzov/browser-llm-perf

- 完整记录 JSON：https://awesomecua.com/resources/github-dtopuzov-browser-llm-perf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/dtopuzov/browser-llm-perf/HEAD/README.md（获取于 2026-11-04T14:41:52Z；SHA-256：c30c16123f1be38a73571cac70e8db60fe26105e91940278bbc468471de2b5fe）

---

## browser-eval

browser-eval 是用于网页抓取、确定性浏览器轨迹重放和自主网页智能体基准评测的测试框架。

- 目录页面：https://awesomecua.com/zh/resources/github-lexmount-browser-eval/
- 原始来源：https://github.com/lexmount/browser-eval
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、录制
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:lexmount/browser-eval

- 完整记录 JSON：https://awesomecua.com/resources/github-lexmount-browser-eval/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/lexmount/browser-eval/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lexmount/browser-eval/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：6c7e1450a76b3f648c649e701c33d3e200a19569c349d32875e7709fe34ccc98）
- https://raw.githubusercontent.com/lexmount/browser-eval/HEAD/LICENSE（获取于 2026-11-04T14:07:22Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## browser-task-bench

browser-task-bench 是包含 200+ 项网页交互任务的评测基准套件，涵盖表单、搜索、身份验证和结账流程。

- 目录页面：https://awesomecua.com/zh/resources/github-tradestackdev-browser-task-bench/
- 原始来源：https://github.com/TradeStackDev/browser-task-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-04T14:20:07Z
- ID：github:tradestackdev/browser-task-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-tradestackdev-browser-task-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TradeStackDev/browser-task-bench/HEAD/README.md（获取于 2026-11-04T14:20:07Z；SHA-256：2bc4430a06e27720e25cae12f1566818a54cf7d74f3bc425b87421eed76e16b9）

---

## BrowserAgentRegression

本地优先的回归测试评测基准，用于在受控的 UI 和 DOM 变更下评测浏览器智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-albertxxuu-browseragentregression/
- 原始来源：https://github.com/AlbertXXuu/BrowserAgentRegression
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-04T17:20:37Z
- ID：github:albertxxuu/browseragentregression

- 完整记录 JSON：https://awesomecua.com/resources/github-albertxxuu-browseragentregression/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/AlbertXXuu/BrowserAgentRegression/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/AlbertXXuu/BrowserAgentRegression/main/README.md（获取于 2026-11-04T17:20:37Z；SHA-256：8721526c46614364df44fbf1940e69c6ef89f28ec9c60a1a8ba9693ec67d2a6c）
- https://raw.githubusercontent.com/AlbertXXuu/BrowserAgentRegression/HEAD/LICENSE（获取于 2026-11-04T17:26:34Z；SHA-256：43d888062f56712f558697a3ae75c0b371930e27b4f1187ff1b72fd1055bb9f5）

---

## BrowserART

Scale AI 的红队测试基准与测试套件，用于评估经过拒绝训练的语言模型在作为浏览器智能体部署时能否被越狱。

- 目录页面：https://awesomecua.com/zh/resources/github-scaleapi-browser-art/
- 原始来源：https://github.com/scaleapi/browser-art
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-10-18T10:59:54Z
- ID：github:scaleapi/browser-art

### 范围记录

The retained README and LICENSE contain conflicting code-license declarations. The catalog leaves the code-license value unknown pending an upstream clarification; it does not infer data or model permissions.

- 完整记录 JSON：https://awesomecua.com/resources/github-scaleapi-browser-art/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The retained README states that the project is MIT licensed, while the retained LICENSE contains Creative Commons Attribution-NonCommercial-NoDerivatives 4.0. These declarations conflict, so a settled code license is not asserted.
  来源：https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/README.md, https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/README.md（获取于 2026-10-18T10:59:54Z；SHA-256：a9d33536fae38485eb6aac9698ae22ed3533510d43f783d6c0e9f9cf95d9c58f）
- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE（获取于 2026-10-18T11:03:46Z；SHA-256：f7f28b8c7a1af76b9874ca6d040e8b1eb6768fd1043106c9d315090ea96754e7）
- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE（获取于 2026-10-18T11:03:46Z；SHA-256：f7f28b8c7a1af76b9874ca6d040e8b1eb6768fd1043106c9d315090ea96754e7）

---

## BrowserTransactionBench

BrowserTransactionBench 评测自主浏览器智能体的事务安全性、幂等性和重复支出防范能力。

- 目录页面：https://awesomecua.com/zh/resources/github-lamenting-hawthorn-browserbench/
- 原始来源：https://github.com/lamenting-hawthorn/browserbench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航、鲁棒性
- 证据核查日期：2026-11-04T14:20:10Z
- ID：github:lamenting-hawthorn/browserbench

- 完整记录 JSON：https://awesomecua.com/resources/github-lamenting-hawthorn-browserbench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/lamenting-hawthorn/browserbench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lamenting-hawthorn/browserbench/HEAD/README.md（获取于 2026-11-04T14:20:10Z；SHA-256：a7952ee35e851afc93862aa7676a7b539654c69e32f96ba783547d496ae43853）
- https://raw.githubusercontent.com/lamenting-hawthorn/browserbench/HEAD/LICENSE（获取于 2026-11-04T14:23:36Z；SHA-256：52f9c104477e9750a9893451f2c73700641664a6502860ce5e4dffd9896720a0）

---

## BrowseWebApp Bench

BrowseWebApp Bench 通过 100 个真实的网页工作流程评测浏览器智能体，涵盖记录提取、文档上传和表单提交。

- 目录页面：https://awesomecua.com/zh/resources/github-visnia-ai-browsewebapp-bench/
- 原始来源：https://github.com/visnia-ai/browsewebapp-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-04T14:20:10Z
- ID：github:visnia-ai/browsewebapp-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-visnia-ai-browsewebapp-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/visnia-ai/browsewebapp-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/visnia-ai/browsewebapp-bench/HEAD/README.md（获取于 2026-11-04T14:20:10Z；SHA-256：57175a393411d33806a82adb48f1970dd3f02b5b229286f49b9d99ff2864377b）
- https://raw.githubusercontent.com/visnia-ai/browsewebapp-bench/HEAD/LICENSE（获取于 2026-11-04T14:23:36Z；SHA-256：1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685）

---

## CAPTCHA Gym

CAPTCHA Gym 是面向浏览器智能体的自托管评测平台，提供受控的 reCAPTCHA 风格视觉挑战和服务器端评分。

- 目录页面：https://awesomecua.com/zh/resources/github-mildchef-muse-captcha-gym/
- 原始来源：https://github.com/mildchef/Muse-Captcha-Gym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、GUI 定位、网页导航
- 证据核查日期：2026-11-04T14:20:16Z
- ID：github:mildchef/muse-captcha-gym

- 完整记录 JSON：https://awesomecua.com/resources/github-mildchef-muse-captcha-gym/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/mildchef/Muse-Captcha-Gym/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mildchef/Muse-Captcha-Gym/HEAD/README.md（获取于 2026-11-04T14:20:16Z；SHA-256：ed87f80658ae951687b75ee71f76e8c67a1068a1cd89afcbe3925e35061bef89）
- https://raw.githubusercontent.com/mildchef/Muse-Captcha-Gym/HEAD/LICENSE（获取于 2026-11-04T14:23:43Z；SHA-256：94c4c4592f61d7702eafd46ac8986acc276d289690967e6f539694f92c4a880a）

---

## CaptchaArena

CaptchaArena 提供实时服务器和涵盖 20 种交互式 CAPTCHA 类型的细粒度轨迹数据集，用于评测计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-x0x0x00-captchaarena/
- 原始来源：https://github.com/X0X0X00/CaptchaArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航、GUI 定位
- 证据核查日期：2026-11-04T14:02:42Z
- ID：github:x0x0x00/captchaarena

- 完整记录 JSON：https://awesomecua.com/resources/github-x0x0x00-captchaarena/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/X0X0X00/CaptchaArena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/X0X0X00/CaptchaArena/HEAD/README.md（获取于 2026-11-04T14:02:42Z；SHA-256：2d5624b9ac25a06c7d26acb1cc7a0b4ea60cf9a90f0118b9172bd692f2b2ff94）
- https://raw.githubusercontent.com/X0X0X00/CaptchaArena/HEAD/LICENSE（获取于 2026-11-04T14:07:17Z；SHA-256：1229a048b92c0897722046f02ecd47c2308f6528dc063e9c45fec006242881b1）

---

## Collision Canary

多执行者不变量验证测试框架，驱动两个并发浏览器智能体操作共享后端，以发现竞态错误。

- 目录页面：https://awesomecua.com/zh/resources/github-mystiquemide-collision-canary/
- 原始来源：https://github.com/mystiquemide/collision-canary
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-04T17:20:55Z
- ID：github:mystiquemide/collision-canary

- 完整记录 JSON：https://awesomecua.com/resources/github-mystiquemide-collision-canary/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/mystiquemide/collision-canary/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mystiquemide/collision-canary/main/README.md（获取于 2026-11-04T17:20:55Z；SHA-256：7d043be57a472bbe9a373eb529ddacd54e70c694d10e9c53995beb63a236faa7）
- https://raw.githubusercontent.com/mystiquemide/collision-canary/HEAD/LICENSE（获取于 2026-11-04T17:26:36Z；SHA-256：14eb642b6eb85d4ddff951f820e49c46a796049e625c7e5b090b5c9a1810f6f0）

---

## ColorBench

ColorBench 是基于图的移动 GUI 基准，通过截图状态及多种有效或错误的状态转移评估长任务，涵盖反思、重新规划和回退。

- 目录页面：https://awesomecua.com/zh/resources/github-madeagents-colorbench/
- 原始来源：https://github.com/MadeAgents/ColorBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、长任务、跨应用
- 证据核查日期：2026-10-17T11:18:16Z
- ID：github:madeagents/colorbench

### 范围记录

The source tree contains graph and task JSON files plus construction/evaluation code; the linked ungated Hub provides the screenshot archive. The environment is static, interactive and graph-based. Counts are publisher-reported task/app inventories. Apache-2.0 declarations for repository code and the Hub dataset are separately retained; third-party application visuals are not granted additional rights by this catalog.

- 完整记录 JSON：https://awesomecua.com/resources/github-madeagents-colorbench/record.json

### 结构化规格

- 动作 / 输出：mobile GUI operations along graph transitions
- 评测方式：The publisher reports success rate, completion rate and atomic-capability diagnostics using graph-based evaluation.
- 侧重：long-horizon mobile task completion, multi-path graph interaction
- 观测：mobile screenshots represented as graph states
- 任务设置：交互式

#### 数量记录

- 175 个任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 101 个跨应用任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 74 个单应用任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 21 个移动应用 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）

The interaction environment replays graph states. The 101 and 74 subsets partition the reported 175 tasks.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE
- 数据：apache-2.0 — https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 代码审核：Repository source LICENSE.
  来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE

- 数据审核：Publisher metadata for the separately hosted screenshot archive; underlying third-party content retains applicable rights.
  来源：https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md（获取于 2026-10-17T11:18:16Z；SHA-256：5c0190fffb68b91c1855a408f6a5e252871d94000b95fa258504a3c100600cec）
- https://api.github.com/repos/MadeAgents/ColorBench（获取于 2026-10-17T11:18:16Z；SHA-256：2f6940503cc0d6cb97bdf142d6b8c6ab116de82227f2fa6d97fd56d7e5aebec0）
- https://api.github.com/repos/MadeAgents/ColorBench/git/trees/main?recursive=1（获取于 2026-10-17T11:22:54Z；SHA-256：6a00c093a6794ec4a172d30b70fdabc17400584a9e25a157a47a7661dbdd20fa）
- https://huggingface.co/api/datasets/Norsheep/ColorBench（获取于 2026-10-17T11:23:06Z；SHA-256：c0c3286b5150e128e55034ba0393ef85f7fcf73e4b73f4276389a04c9bcec919）
- https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md（获取于 2026-10-17T11:23:06Z；SHA-256：4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7）
- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE（获取于 2026-10-17T11:22:54Z；SHA-256：130976c026bcafa9dcc479697fe6595dbefb73cdb375fc47b8478acc16e6ea73）

---

## Computer Agent Arena

众包对战平台，用户在 Ubuntu 或 Windows VM 上比较两个计算机使用智能体；代码库包含投票前端、环境预设和 2,010 场已核验对战记录。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-computer-agent-arena/
- 原始来源：https://github.com/xlang-ai/computer-agent-arena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows
- 主题：评测、人机协作
- 证据核查日期：2026-10-20T07:42:02Z
- ID：github:xlang-ai/computer-agent-arena

### 范围记录

Platform code from the xlang-ai organization; the repository description and README name ICLR 2026. At the reviewed commit (the second of two) the tree holds the React/TypeScript frontend (dual-agent chat and evaluation panels, a bundled noVNC desktop viewer, trajectory player, ranking and Prolific pages), quick-setup presets for Chrome, LibreOffice and other apps, setup notes for OSWorld's in-VM server and for AWS, VMware and VirtualBox providers, backend/requirements.txt and backend/scripts/sessions_clean_filtered.csv. Although the README describes the full stack, the tree has no Python source: there is no backend/main.py, the server notes refer to main.py and pyxcursor.py files that are absent, and backend/agents is a git submodule pointing to xlang-ai/computer-agent-arena-hub, which the GitHub API did not return at review (404). The CSV has 2,010 verified two-agent sessions started between 2025-02-13 and 2025-05-15 (1,070 Windows, 940 Ubuntu; 653 distinct user IDs) with user-written task instructions, each agent's model and method, per-step feedback and the battle result (751 and 644 wins for the first and second agent, 615 ties). Agents in it are Claude 3.5 and 3.7 Sonnet computer use, OpenAI computer-use-preview, UI-TARS-1.5, a Qwen2.5-VL-72B agent, and GPT-4.1, GPT-4o, o3, o4-mini and Gemini models through a base agent. The frontend evaluation form asks for each agent's correctness (correct, partially correct, wrong) and a pairwise preference (A better, tie, B better, tie with both bad). The README shows an MIT badge and links a LICENSE file, but the tree has no root license file; its only license texts are those of the bundled noVNC viewer. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-computer-agent-arena/record.json

### 结构化规格

- 动作 / 输出：agent-defined desktop actions
- 评测方式：After two agents attempt the same user task on separate virtual machines, the user rates each agent's correctness (correct, partially correct, wrong) and states a pairwise preference (A better, tie, B better, or tie with both bad); per-step feedback is also recorded. The README says the votes feed an ELO leaderboard; the aggregation backend remains outside this repository.
- 侧重：human pairwise preference between computer-use agents, open-ended user-written tasks
- 观测：live Ubuntu or Windows virtual machine desktop shown to the user through VNC, agent-defined observations of that desktop
- 任务设置：交互式

#### 数量记录

- 2,010 场已验证的双智能体对战 — backend/scripts/sessions_clean_filtered.csv (started 2025-02-13 to 2025-05-15)（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv）
- 1,070 场已验证的双智能体对战 — Windows sessions in the CSV（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv）
- 940 场已验证的双智能体对战 — Ubuntu sessions in the CSV（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv）
- 615 场已验证的双智能体对战 — sessions whose battle_result is tie（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv）

Counts are rows of the released CSV, computed with Python's csv module; each row is one session with two agents and a distinct session ID. Agent observations and actions are defined by the agent implementations in the unreleased hub.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README shows an MIT badge and links a LICENSE file, but the complete tree at the reviewed commit has no root license file; its only license texts belong to the bundled noVNC viewer under frontend/public/noVNC, so no grant is established for the repository's own code.
  来源：https://api.github.com/repos/xlang-ai/computer-agent-arena/git/trees/4536036e8d0a3de9a0de9829c09f4a5916f73013?recursive=1

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/HEAD/README.md（获取于 2026-10-20T07:42:02Z；SHA-256：00d3174a9b3e8e3a330dc6cec3b054310f64ec469b6b34d41f1f46b4279a72a2）
- https://api.github.com/repos/xlang-ai/computer-agent-arena/git/trees/4536036e8d0a3de9a0de9829c09f4a5916f73013?recursive=1（获取于 2026-10-20T04:30:07Z；SHA-256：1ee818ef657248aca717db0d900e681b9aa17fc4ec2ca8b3b7effe2da9dc2aca）
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/README.md（获取于 2026-10-20T04:30:09Z；SHA-256：00d3174a9b3e8e3a330dc6cec3b054310f64ec469b6b34d41f1f46b4279a72a2）
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/.gitmodules（获取于 2026-10-20T04:30:10Z；SHA-256：a972e48328679c1c89c08490e27b39c25ef7f138fc26122ad0d7f64283d1fb9a）
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/desktop_env/server/README.md（获取于 2026-10-20T04:30:10Z；SHA-256：af2b411ab7c09f148577223a71fb91dc82746b1928a82c6b6f91871b079b15b5）
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv（获取于 2026-10-20T04:30:10Z；SHA-256：f1c6dd44d44d45e31671174edb37aa0d02b28f84b2c494ae73caafdd64965dec）
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/frontend/src/components/Arena/eval.tsx（获取于 2026-10-20T04:30:11Z；SHA-256：6d4e406d0ff1d573480bd2bd864ef9b1326b11c6d671ee3690468b925201b8f1）

---

## CRAB

用于多模态智能体的跨环境基准框架。

- 目录页面：https://awesomecua.com/zh/resources/github-camel-ai-crab/
- 原始来源：https://github.com/camel-ai/crab
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Android
- 主题：评测、跨应用
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:camel-ai/crab

- 完整记录 JSON：https://awesomecua.com/resources/github-camel-ai-crab/record.json

### 结构化规格

- 动作 / 输出：Python-defined environment actions
- 评测方式：Graph-based evaluators measure progress through task requirements.
- 侧重：cross-environment tasks
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 120 个任务 — CRAB Benchmark-v0 (paper)（来源报告；来源：https://arxiv.org/abs/2407.01511）

CRAB is also an extensible framework. The 120-task count belongs to Benchmark-v0.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/camel-ai/crab/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：7b894c5474ba78294427cfd4ef0eea8cb22d76dfa0c2e8c7f01e31ad927064e9）
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50（获取于 2026-10-16T06:31:32Z；SHA-256：b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb）

---

## cskwork vigil

持续运行的浏览器 QA 测试框架，可复现已报告的错误，并在实时网页 URL 上自主扩展端到端测试覆盖范围。

- 目录页面：https://awesomecua.com/zh/resources/github-cskwork-vigil/
- 原始来源：https://github.com/cskwork/vigil
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、自我反思、网页导航、自动化
- 证据核查日期：2026-11-04T18:11:27Z
- ID：github:cskwork/vigil

- 完整记录 JSON：https://awesomecua.com/resources/github-cskwork-vigil/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/cskwork/vigil/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/cskwork/vigil/main/README.md（获取于 2026-11-04T18:11:27Z；SHA-256：95558460768d27a08c2ab70509b7ddb777ab3da7d0a5e7c7deee24a2014434d1）
- https://raw.githubusercontent.com/cskwork/vigil/HEAD/LICENSE（获取于 2026-11-04T18:16:06Z；SHA-256：2825c7d0c067e14f21b4e0790807d0d303872b7df406995fd335bdeaa509c836）

---

## CUA Eval Kit

受控的浏览器测试环境和包含 10 个任务的计算机使用评测套件，用于评估网页智能体的准确性和步骤效率。

- 目录页面：https://awesomecua.com/zh/resources/github-marwanalsiddiq-cua-eval-kit/
- 原始来源：https://github.com/MarwanAlsiddiq/cua-eval-kit
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-04T18:11:47Z
- ID：github:marwanalsiddiq/cua-eval-kit

- 完整记录 JSON：https://awesomecua.com/resources/github-marwanalsiddiq-cua-eval-kit/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/MarwanAlsiddiq/cua-eval-kit/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MarwanAlsiddiq/cua-eval-kit/main/README.md（获取于 2026-11-04T18:11:47Z；SHA-256：22ed28bfacadd914bf0d84969b82717d82a22fc9c4da84efcbcc7aaf18e81fba）
- https://raw.githubusercontent.com/MarwanAlsiddiq/cua-eval-kit/HEAD/LICENSE（获取于 2026-11-04T18:16:07Z；SHA-256：6d2f50789db7e1a0df05eba30ac48b34a70e3592282c553041986b77fd0ef480）

---

## cua-bench (ERPNext)

cua-bench 将容器化的 ERPNext v15 会计和企业工作流程封装为面向 GUI 智能体的 Harbor RL 与评测环境。

- 目录页面：https://awesomecua.com/zh/resources/github-vaiyr-cua-bench/
- 原始来源：https://github.com/vaiyr/cua-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、强化学习、工作流、沙箱
- 证据核查日期：2026-11-04T14:20:09Z
- ID：github:vaiyr/cua-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-vaiyr-cua-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/vaiyr/cua-bench/HEAD/README.md（获取于 2026-11-04T14:20:09Z；SHA-256：48df5d15113f1c89314fe049d2f35cad6029afac6c9c43fe4a264b5058f0ecdc）

---

## cua_reliability (SA-OPSD)

提供 cua_reliability 评测工具包和参考训练代码，用于衡量 CUA RL 中停止执行和弃答的可靠性。

- 目录页面：https://awesomecua.com/zh/resources/github-mercurialsolo-sa-opsd/
- 原始来源：https://github.com/mercurialsolo/sa-opsd
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、强化学习、安全与防护、鲁棒性
- 证据核查日期：2026-11-04T14:20:07Z
- ID：github:mercurialsolo/sa-opsd

- 完整记录 JSON：https://awesomecua.com/resources/github-mercurialsolo-sa-opsd/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/mercurialsolo/sa-opsd/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mercurialsolo/sa-opsd/HEAD/README.md（获取于 2026-11-04T14:20:07Z；SHA-256：ae9c6889159a465dba4f5239817ddfd0b10b47ddc12219b64aeed826020ff59e）
- https://raw.githubusercontent.com/mercurialsolo/sa-opsd/HEAD/LICENSE（获取于 2026-11-04T14:23:46Z；SHA-256：e60b154c2b5eb3baae00cd97ecbb8ab137264fb06c1f3870336dcae3c58e368c）

---

## decision-luna-browse-control

评测带类型的 System-One 决策模型（Luna Decisions 和 Jev）在合成网页应用中驱动真实 Chromium 浏览器工作流的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-humanity-forever-decision-luna-browse-control/
- 原始来源：https://github.com/humanity-forever/decision-luna-browse-control
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、动作预测、效率
- 证据核查日期：2026-11-04T14:41:47Z
- ID：github:humanity-forever/decision-luna-browse-control

- 完整记录 JSON：https://awesomecua.com/resources/github-humanity-forever-decision-luna-browse-control/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/humanity-forever/decision-luna-browse-control/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/humanity-forever/decision-luna-browse-control/HEAD/README.md（获取于 2026-11-04T14:41:47Z；SHA-256：4cba2611cf35dbc4688ce7ba479d5bea9b9e895a3b27e3c2ea70f749923abf3d）
- https://raw.githubusercontent.com/humanity-forever/decision-luna-browse-control/HEAD/LICENSE（获取于 2026-11-04T14:45:04Z；SHA-256：174f476437bc3ca30892d5973c74090489e4fa801542b08b5de5178585320ebc）

---

## deedchain

deedchain 以录制的真实网页执行轨迹为依据，评测浏览器智能体的报告保真度和幻觉率。

- 目录页面：https://awesomecua.com/zh/resources/github-pillcrew-deedchain/
- 原始来源：https://github.com/PillCrew/deedchain
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、鲁棒性
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:pillcrew/deedchain

- 完整记录 JSON：https://awesomecua.com/resources/github-pillcrew-deedchain/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/PillCrew/deedchain/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/PillCrew/deedchain/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：089251b6dd29051380ba9135d4f08197f6970db52e6cb1887953140c09c7631f）
- https://raw.githubusercontent.com/PillCrew/deedchain/HEAD/LICENSE（获取于 2026-11-04T14:23:39Z；SHA-256：33439fe076663b472bafae7360b5443097d6b1dc3f1aee4800d19ec138234916）

---

## DeskCert CLI

安全认证 CLI，在生产部署前针对内部网页应用对 AI 浏览器和计算机使用智能体进行压力测试。

- 目录页面：https://awesomecua.com/zh/resources/github-rudrendupaul-deskcert-cli/
- 原始来源：https://github.com/RudrenduPaul/DeskCert-CLI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、安全与防护、鲁棒性
- 证据核查日期：2026-11-04T16:51:54Z
- ID：github:rudrendupaul/deskcert-cli

- 完整记录 JSON：https://awesomecua.com/resources/github-rudrendupaul-deskcert-cli/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/RudrenduPaul/DeskCert-CLI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/RudrenduPaul/DeskCert-CLI/HEAD/README.md（获取于 2026-11-04T16:51:54Z；SHA-256：2884cd38ed5e520f60b1d1fca442a2fbb8a0becca9416dca714bafca0ceabc13）
- https://raw.githubusercontent.com/RudrenduPaul/DeskCert-CLI/HEAD/LICENSE（获取于 2026-11-04T16:56:30Z；SHA-256：1448919c1d0815332b6ceacdb8b368ca9c7eac45dccb699df6db0a791e1ec268）

---

## DesktopAgentBench

DesktopAgentBench 是与智能体无关的 Windows 评测基准，评测桌面智能体的任务可靠性、恢复能力和安全防护机制。

- 目录页面：https://awesomecua.com/zh/resources/github-raghava00001-desktopagentbench/
- 原始来源：https://github.com/Raghava00001/DesktopAgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、安全与防护、鲁棒性
- 证据核查日期：2026-11-04T14:20:08Z
- ID：github:raghava00001/desktopagentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-raghava00001-desktopagentbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Raghava00001/DesktopAgentBench/HEAD/README.md（获取于 2026-11-04T14:20:08Z；SHA-256：4ba24916f14a6b69cf54dae6208762c51d30169a63d9cc39758f0dfa73c6924d）

---

## dom-drift-bench

dom-drift-bench 在 10 类结构性 DOM 漂移中评测 4 种网页提取和定位策略。

- 目录页面：https://awesomecua.com/zh/resources/github-notel1gible-dom-drift-bench/
- 原始来源：https://github.com/NotEl1gible/dom-drift-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-04T14:20:11Z
- ID：github:notel1gible/dom-drift-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-notel1gible-dom-drift-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/NotEl1gible/dom-drift-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/NotEl1gible/dom-drift-bench/HEAD/README.md（获取于 2026-11-04T14:20:11Z；SHA-256：b391254be26a8afb7b99abc80c944b285892ccc9b5d527bb9ecc61640ef54134）
- https://raw.githubusercontent.com/NotEl1gible/dom-drift-bench/HEAD/LICENSE（获取于 2026-11-04T14:23:37Z；SHA-256：bbdd312efda5b645ab2c2d9fdc7ee2abd59fd759faa097a9d8a9a7eb5b1295b4）

---

## done-or-not

done-or-not 是离线评测基准，包含来自三台模拟计算机的 910 条计算机使用轨迹，用于评定任务完成情况验证器。

- 目录页面：https://awesomecua.com/zh/resources/github-tatra-labs-done-or-not/
- 原始来源：https://github.com/tatra-labs/done-or-not
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、奖励模型、自我反思
- 证据核查日期：2026-11-04T14:20:17Z
- ID：github:tatra-labs/done-or-not

- 完整记录 JSON：https://awesomecua.com/resources/github-tatra-labs-done-or-not/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/tatra-labs/done-or-not/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/tatra-labs/done-or-not/HEAD/README.md（获取于 2026-11-04T14:20:17Z；SHA-256：5bd1dcd3a555152a6181d22764e2e81452734a036688be653c62997812b3834c）
- https://raw.githubusercontent.com/tatra-labs/done-or-not/HEAD/LICENSE（获取于 2026-11-04T14:23:33Z；SHA-256：9567be531c570f10e1616723c584e8d550d3b62ec8c87ba8fe5f3d6ab26f4389）

---

## drift-audit

审查并分类浏览器自动化仓库的选择器维护历史，以量化其受 UI 变化影响的脆弱程度。

- 目录页面：https://awesomecua.com/zh/resources/github-sebastianpuchet-drift-audit/
- 原始来源：https://github.com/SebastianPuchet/drift-audit
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-04T17:55:20Z
- ID：github:sebastianpuchet/drift-audit

- 完整记录 JSON：https://awesomecua.com/resources/github-sebastianpuchet-drift-audit/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SebastianPuchet/drift-audit/main/README.md（获取于 2026-11-04T17:55:20Z；SHA-256：321a19ee9d65fcfecd62c8c0ffe43bc67afc900eaf5216369879ca974ccb7b71）

---

## DSH QA

DeepSeek Harness QA 插件，其中自主浏览器智能体探索运行中的网页应用，以发现功能和 UX 缺陷。

- 目录页面：https://awesomecua.com/zh/resources/github-zseven-w-dsh-qa/
- 原始来源：https://github.com/ZSeven-W/dsh-qa
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工具集成、自动化
- 证据核查日期：2026-11-04T17:55:20Z
- ID：github:zseven-w/dsh-qa

- 完整记录 JSON：https://awesomecua.com/resources/github-zseven-w-dsh-qa/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ZSeven-W/dsh-qa/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ZSeven-W/dsh-qa/main/README.md（获取于 2026-11-04T17:55:20Z；SHA-256：c4dd7e863d00368944679494308b13a9d1a3b74448db64139e4d7d98e2290c32）
- https://raw.githubusercontent.com/ZSeven-W/dsh-qa/HEAD/LICENSE（获取于 2026-11-04T17:59:59Z；SHA-256：7cfca0a2a21dc7b205a5c4289dc1605056280edb858e2ea5894d38efaa926f6d）

---

## DynamicGUIBench

含 500 项 OSWorld 风格桌面任务的基准，界面会在观察间因脚本化弹窗、定时编辑和列表变化而改变；提供中英双语指令及最终状态评估器。

- 目录页面：https://awesomecua.com/zh/resources/url-20fa95f00391bf965af2/
- 原始来源：https://huggingface.co/datasets/L1007555652/osworld_env
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、状态追踪、鲁棒性
- 证据核查日期：2026-10-18T15:40:40Z
- ID：url:20fa95f00391bf965af2

### 范围记录

The Hub repository is named osworld_env; its card titles the release DynamicGUIBench. The manifest at revision 44adf69d holds 500 task JSON files under dynamic/ plus per-application asset folders and three stray .nfs files; it contains no agent code. The card states that its Qwen3-VL and UI-TARS results come from the original 150-task release and do not carry over to the 500-task expansion. Tasks run in a separately configured OSWorld environment. No data license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-20fa95f00391bf965af2/record.json

### 结构化规格

- 动作 / 输出：desktop GUI actions through a separately configured agent
- 评测方式：Each task JSON names an OSWorld evaluator function with its expected result for an executable end-state check; a config_myself block launches applications and scripts the dynamic events during the run.
- 侧重：desktop task completion when interface state changes between observations
- 观测：English and Chinese task instructions, live desktop application state
- 任务设置：交互式

#### 数量记录

- 500 个任务 JSON 文件 — dynamic/ directory at Hub revision 44adf69d（计算得出）（来源：https://huggingface.co/api/datasets/L1007555652/osworld_env）
- 150 个任务 — original verified release before the 20 August 2026 expansion（来源报告；来源：https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md）

Computed per-folder task files: Chrome 75, GIMP 45, LibreOffice Calc 50, Impress 42, Writer 50, multi-app 66, OS 42, Thunderbird 44, VLC 38 and VS Code 48. The card groups tasks into interruptive UI states, ephemeral references, dynamic list selection and content-triggered interaction.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the dataset card nor the Hub metadata declares a license for the task files or assets.
  来源：https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md

### 一手证据

- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md（获取于 2026-10-18T15:40:40Z；SHA-256：8492eacf5283bbb02e54c8f4f340bbfebee6539f49f8933743ac310abdf418e0）
- https://huggingface.co/api/datasets/L1007555652/osworld_env（获取于 2026-10-18T15:40:40Z；SHA-256：2f568cf0a9b4a7691097809c10f8455372841d6f09421287e4380b1b3de8e3e0）
- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/dynamic/chrome/chrome_addcart.json（获取于 2026-10-18T15:40:41Z；SHA-256：64334a72b6d5a9e2cf3a04650db9cd4a73fd36919648853ae266fcc88d60bd0b）

---

## Effectprint

用于验证 WebMCP 浏览器智能体工具副作用的确定性行为契约审计套件。

- 目录页面：https://awesomecua.com/zh/resources/github-tommytranx-effectprint/
- 原始来源：https://github.com/TommyTranX/effectprint
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、工具集成、网页导航
- 证据核查日期：2026-11-04T17:55:05Z
- ID：github:tommytranx/effectprint

- 完整记录 JSON：https://awesomecua.com/resources/github-tommytranx-effectprint/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/TommyTranX/effectprint/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TommyTranX/effectprint/main/README.md（获取于 2026-11-04T17:55:05Z；SHA-256：e527397b674e72f7ef7a9a1a3e4e8234ca8927d435f37302dea5c14f84d92599）
- https://raw.githubusercontent.com/TommyTranX/effectprint/HEAD/LICENSE（获取于 2026-11-04T17:59:58Z；SHA-256：143592ff2ac0251540cf4375448980ffc39f4c0f3023536715e027cb83803355）

---

## Ego Browser Benchmark Framework

Ego Browser Benchmark Framework 是可复现的测试框架，用于在受控的浏览器使用智能体任务上比较基础模型。

- 目录页面：https://awesomecua.com/zh/resources/github-citrolabs-ego-browser-benchmark-framework/
- 原始来源：https://github.com/citrolabs/ego-browser-benchmark-framework
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-04T14:20:10Z
- ID：github:citrolabs/ego-browser-benchmark-framework

- 完整记录 JSON：https://awesomecua.com/resources/github-citrolabs-ego-browser-benchmark-framework/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/citrolabs/ego-browser-benchmark-framework/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/citrolabs/ego-browser-benchmark-framework/HEAD/README.md（获取于 2026-11-04T14:20:10Z；SHA-256：f520f55d5270fb776300de52ddd472b471fef29b8653b5196e120aba26e3954f）
- https://raw.githubusercontent.com/citrolabs/ego-browser-benchmark-framework/HEAD/LICENSE（获取于 2026-11-04T14:23:35Z；SHA-256：4e756287a1d148b3e9144e62de20d7d6c16d85e9399d8d7970f3a2996b0b4ac5）

---

## EIA

环境注入攻击评估套件，通过在正常网站中嵌入不可见的恶意 HTML 元素，测试通用网页智能体的隐私泄露情况。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-eia-against-webagent/
- 原始来源：https://github.com/OSU-NLP-Group/EIA_against_webagent
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-10-18T10:59:54Z
- ID：github:osu-nlp-group/eia_against_webagent

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-eia-against-webagent/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/README.md（获取于 2026-10-18T10:59:54Z；SHA-256：61eb6109404f266fd22c6fa8ca58ef773a9d502567403f42edc096958ab2e430）
- https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/LICENSE（获取于 2026-10-18T11:03:46Z；SHA-256：953ff47dbbc0c0563d1ec2d245b06d1206f2f38c4ed2f0da728e027ae2e5a973）

---

## Embodied Agent Interface (EAI)

Embodied Agent Interface（EAI）从目标理解、子目标分解、动作排序和状态转换建模等方面评测 LLM。

- 目录页面：https://awesomecua.com/zh/resources/github-embodied-agent-eval-embodied-agent-eval/
- 原始来源：https://github.com/embodied-agent-eval/embodied-agent-eval
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：评测、规划、动作预测
- 证据核查日期：2026-11-04T13:12:13Z
- ID：github:embodied-agent-eval/embodied-agent-eval

- 完整记录 JSON：https://awesomecua.com/resources/github-embodied-agent-eval-embodied-agent-eval/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/embodied-agent-eval/embodied-agent-eval/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/embodied-agent-eval/embodied-agent-eval/HEAD/README.md（获取于 2026-11-04T13:12:13Z；SHA-256：8b4d58dc20ace87a10106b827ab857c91b2289e3db46b15c61f5682c22e377bc）
- https://raw.githubusercontent.com/embodied-agent-eval/embodied-agent-eval/HEAD/LICENSE（获取于 2026-11-04T13:41:32Z；SHA-256：9c619e8dda93227f5b5aa1f0f358a62d1333e23c71798fde169c4640acb91754）

---

## ExactDelta (ActionProof)

面向 WebMCP 浏览器智能体的动作后状态差异验证测试框架，可检测未显现的 UI 和状态故障。

- 目录页面：https://awesomecua.com/zh/resources/github-tsuchiyatakahirolab-actionproof/
- 原始来源：https://github.com/tsuchiyatakahirolab/actionproof
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、状态追踪、工具集成、网页导航
- 证据核查日期：2026-11-04T17:55:02Z
- ID：github:tsuchiyatakahirolab/actionproof

- 完整记录 JSON：https://awesomecua.com/resources/github-tsuchiyatakahirolab-actionproof/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/tsuchiyatakahirolab/actionproof/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/tsuchiyatakahirolab/actionproof/main/README.md（获取于 2026-11-04T17:55:02Z；SHA-256：f727f24053c8e84b2475ba93f0e364f96eb0c162bf23d71922a713f640300eea）
- https://raw.githubusercontent.com/tsuchiyatakahirolab/actionproof/HEAD/LICENSE（获取于 2026-11-04T17:59:58Z；SHA-256：d455b78cdfbe3a3e3261a4700a3ca5c4494c481e9cab413745df64446e3b7191）

---

## fast-automation (Plan-Once Ground-Locally)

在包含 200 个任务和 2,800 次记录运行的评测基准上，对比一次规划、局部定位的网页智能体与逐步执行的 ReAct 循环。

- 目录页面：https://awesomecua.com/zh/resources/github-thedivyanshshukla-plan-once-ground-locally/
- 原始来源：https://github.com/TheDivyanshShukla/plan-once-ground-locally
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、规划、GUI 定位、效率
- 证据核查日期：2026-11-04T14:20:13Z
- ID：github:thedivyanshshukla/plan-once-ground-locally

- 完整记录 JSON：https://awesomecua.com/resources/github-thedivyanshshukla-plan-once-ground-locally/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/TheDivyanshShukla/plan-once-ground-locally/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TheDivyanshShukla/plan-once-ground-locally/HEAD/README.md（获取于 2026-11-04T14:20:13Z；SHA-256：47896171dcd498f15bd527695784311c5099dbc258ff3a6178aacc1ec5a1b2cf）
- https://raw.githubusercontent.com/TheDivyanshShukla/plan-once-ground-locally/HEAD/LICENSE（获取于 2026-11-04T14:23:42Z；SHA-256：64c522406c98854592ad99c2c7c1f52e2a5692aec1fbce2b9ef3af66d4cd00f8）

---

## FedGUI

FedGUI 对跨异构平台、设备类型、数据来源和操作系统的联邦式 GUI 智能体训练与评测进行基准测试。

- 目录页面：https://awesomecua.com/zh/resources/github-wwh0411-fedgui/
- 原始来源：https://github.com/wwh0411/FedGUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：评测、GUI 定位
- 证据核查日期：2026-11-04T13:12:43Z
- ID：github:wwh0411/fedgui

- 完整记录 JSON：https://awesomecua.com/resources/github-wwh0411-fedgui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/wwh0411/FedGUI/HEAD/README.md（获取于 2026-11-04T13:12:43Z；SHA-256：b13a574dcd13d552530a10ed1db1b7c65082e77b0ebb1ad87341d6aa0e011d9a）

---

## Financial CUA Benchmark

Financial CUA Benchmark 提供确定性验证器和债券承销任务，用于评测金融计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-vitoworleone-financial-cua-benchmark/
- 原始来源：https://github.com/vitoworleone/financial-cua-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、工作流
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:vitoworleone/financial-cua-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-vitoworleone-financial-cua-benchmark/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/vitoworleone/financial-cua-benchmark/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：5c1801728a26291839c89a4764161b941ea4536727a08c23e4e5f418b7e78b33）

---

## FineState-Bench

一个评估桌面、网页和移动界面精细状态操作的 GUI 基准，包含 2,257 项任务，并分别衡量元素定位与交互成功率。

- 目录页面：https://awesomecua.com/zh/resources/github-fengxianji-finestate-bench/
- 原始来源：https://github.com/FengxianJi/FineState-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、GUI 定位、状态追踪
- 证据核查日期：2026-11-09T06:16:32Z
- ID：github:fengxianji/finestate-bench

### 范围记录

The repository includes platform-specific evaluation scripts, model configurations, and diagnostic utilities. The README directs users to download the dataset separately and describes both API-based and local model configurations.

- 完整记录 JSON：https://awesomecua.com/resources/github-fengxianji-finestate-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/FengxianJi/FineState-Bench/HEAD/README.md（获取于 2026-11-09T06:16:32Z；SHA-256：bdc165e77ad0e828b605513a46e7e469713611589ccb7e8b96e8e59f306e23da）

---

## FixtureBench

FixtureBench 在具有分页、MFA 和诱饵 PO 的确定性 Coupa 风格买方及供应商门户上评测采购浏览器智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-prabal-singh-fixturebench/
- 原始来源：https://github.com/Prabal-Singh/fixturebench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流、鲁棒性
- 证据核查日期：2026-11-04T14:20:09Z
- ID：github:prabal-singh/fixturebench

- 完整记录 JSON：https://awesomecua.com/resources/github-prabal-singh-fixturebench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Prabal-Singh/fixturebench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Prabal-Singh/fixturebench/HEAD/README.md（获取于 2026-11-04T14:20:09Z；SHA-256：b2e70f1a5fe0ba37920a9f4d6713fe0673088be00e0a08fc043381f3ce70c025）
- https://raw.githubusercontent.com/Prabal-Singh/fixturebench/HEAD/LICENSE（获取于 2026-11-04T14:23:35Z；SHA-256：9a798ad181c18e9cf27a4bf48b4b8ce54de0204bc3a941e1ef5d5e57009784ba）

---

## FlashAdventure

FlashAdventure 通过 34 款需要长期记忆的 Flash 点击式冒险游戏，评测 GUI 智能体完成完整故事情节的能力。

- 目录页面：https://awesomecua.com/zh/resources/github-ahnjaewoo-flashadventure/
- 原始来源：https://github.com/ahnjaewoo/FlashAdventure
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、长任务、记忆、规划
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:ahnjaewoo/flashadventure

- 完整记录 JSON：https://awesomecua.com/resources/github-ahnjaewoo-flashadventure/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ahnjaewoo/FlashAdventure/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ahnjaewoo/FlashAdventure/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：6c7bd2eb4647d2a6e1be92c95b2675cf9ca2bc89810c009e207b8fc05dc2378e）
- https://raw.githubusercontent.com/ahnjaewoo/FlashAdventure/HEAD/LICENSE（获取于 2026-11-04T14:07:15Z；SHA-256：bc16d48ce4b9c15da8d65fc3e8ab687b76a9e3aea96587214fd82c302ed6639e）

---

## Frozen Vision Backbones for GUI Grounding

评测冻结视觉骨干网络的密集特征与全局特征在像素坐标 GUI 定位中的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-dhruvraval04-do-frozen-vision-backbones-transfer-to-guis/
- 原始来源：https://github.com/DhruvRaval04/do-frozen-vision-backbones-transfer-to-guis
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：评测、GUI 定位、界面理解
- 证据核查日期：2026-11-04T14:20:10Z
- ID：github:dhruvraval04/do-frozen-vision-backbones-transfer-to-guis

- 完整记录 JSON：https://awesomecua.com/resources/github-dhruvraval04-do-frozen-vision-backbones-transfer-to-guis/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/DhruvRaval04/do-frozen-vision-backbones-transfer-to-guis/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/DhruvRaval04/do-frozen-vision-backbones-transfer-to-guis/HEAD/README.md（获取于 2026-11-04T14:20:10Z；SHA-256：6d06d48b23063c6a8269c2edc267c0d4490061f13c2169ed030c65c5ba3938da）
- https://raw.githubusercontent.com/DhruvRaval04/do-frozen-vision-backbones-transfer-to-guis/HEAD/LICENSE（获取于 2026-11-04T14:23:35Z；SHA-256：902f12393a01c4aa835ee0e288c4d9045721744dbb6418f1b8da5bb65f196901）

---

## GBOX MCP + Claude Code

这是基于 AndroidWorld 的评测配置，通过 GBOX MCP 将 Claude 智能体连接到 Android 模拟器，并提供任务完成信号工具。

- 目录页面：https://awesomecua.com/zh/resources/github-babelcloud-android-world-benchmark/
- 原始来源：https://github.com/babelcloud/android_world_benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、沙箱
- 证据核查日期：2026-11-09T05:05:19Z
- ID：github:babelcloud/android_world_benchmark

### 范围记录

The README requires GBOX and Anthropic API keys, an Android emulator, and a configured box ID. The repository includes AndroidWorld files and scripts for benchmark setup and execution.

- 完整记录 JSON：https://awesomecua.com/resources/github-babelcloud-android-world-benchmark/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/babelcloud/android_world_benchmark/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/babelcloud/android_world_benchmark/HEAD/README.md（获取于 2026-11-09T05:05:19Z；SHA-256：c18f69d865d2ab28a47598e6e1d543d3ba4ff00e1eff4c6228881ef4675487da）
- https://raw.githubusercontent.com/babelcloud/android_world_benchmark/HEAD/LICENSE（获取于 2026-11-09T05:07:34Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）

---

## Gomoku Computer-Use Model Comparison

受控评测基准，用于比较前沿 Claude 模型在交互式棋盘游戏推理和 GUI 执行方面的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-jns-c-model-comparison-gomoku/
- 原始来源：https://github.com/JNS-C/model-comparison-gomoku
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、规划、界面理解
- 证据核查日期：2026-11-04T18:11:45Z
- ID：github:jns-c/model-comparison-gomoku

- 完整记录 JSON：https://awesomecua.com/resources/github-jns-c-model-comparison-gomoku/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/JNS-C/model-comparison-gomoku/main/README.md（获取于 2026-11-04T18:11:45Z；SHA-256：c2666f5f6d53a4fe8fd6f7d401f2a863b64f173a13c765277ccbca4583ca2d44）

---

## Graph-Guided Agentic Testing

使用浏览器智能体探索网页结账流程，将其构建为 Neo4j 状态图，并生成由图引导的端到端测试。

- 目录页面：https://awesomecua.com/zh/resources/github-avikundal-graph-guided-agentic-testing/
- 原始来源：https://github.com/avikundal/graph-guided-agentic-testing
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、规划、状态追踪
- 证据核查日期：2026-11-04T16:30:14Z
- ID：github:avikundal/graph-guided-agentic-testing

- 完整记录 JSON：https://awesomecua.com/resources/github-avikundal-graph-guided-agentic-testing/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/avikundal/graph-guided-agentic-testing/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/avikundal/graph-guided-agentic-testing/HEAD/README.md（获取于 2026-11-04T16:30:14Z；SHA-256：15f418cf61e5cf6bca24c36337857554da1475441dd341f2ba583f917de454c8）
- https://raw.githubusercontent.com/avikundal/graph-guided-agentic-testing/HEAD/LICENSE（获取于 2026-11-04T16:34:26Z；SHA-256：14bf1a25be18b9a250f014847aba23022315bbbbca496edd2c063ba9d05cd80a）

---

## GroundUI-18K

AgentStudio 的完整 GUI 元素定位测试集，汇集 Mind2Web、OmniACT、MoTIF、ScreenSpot 和 AgentStudio 的网页、桌面及移动端截图，含 18,026 条指令与目标边界框样例。

- 目录页面：https://awesomecua.com/zh/resources/url-d206aacf01e1b7dc786d/
- 原始来源：https://huggingface.co/datasets/agent-studio/GroundUI-18K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T16:19:41Z
- ID：url:d206aacf01e1b7dc786d

### 范围记录

The card calls this the full GroundUI-18K of AgentStudio and a test set reserved from training, although the single Hub split is named train. One split in 19 Parquet shards carries image, image_path, instruction, bbox, resolution, source and platform fields. Platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels are three Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. The AgentStudio evaluation README says GroundUI-18K was recaptioned with CogVLM2; the published instruction version remains unspecified in the card. MIT is the dataset-card declaration; screenshots drawn from upstream datasets keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/record.json

### 结构化规格

- 动作 / 输出：click coordinate
- 评测方式：The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- 侧重：instruction-conditioned GUI element grounding
- 观测：screenshots, natural-language instructions
- 任务设置：离线

#### 数量记录

- 18,026 个示例 — Hub split at revision f061eba2 (named train, described as a test set)（来源报告；来源：https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md）
- 11,593 个示例 — platform label web（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）
- 2,476 个示例 — platform label desktop（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）
- 3,957 个示例 — platform label mobile（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）

Source-label tallies from the same statistics: mind2web_test_domain 5,817, mind2web_test_task 2,080, mind2web_test_website 1,371, omniact 3,804, motif 3,455, screenspot 1,272 and agent_studio 227. A 1,000-example subset was sampled from this set for efficient benchmarking and is published as a separate Hub repository; this count covers the full set.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md（获取于 2026-10-18T16:19:41Z；SHA-256：8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290）
- https://huggingface.co/api/datasets/agent-studio/GroundUI-18K/revision/f061eba2b7e3fffcf511694f15ad3ca38898ab9e（获取于 2026-10-18T16:19:44Z；SHA-256：54436ec8e82156648f4e04e4a1b6830a73c6de30245a7304bdc0ce92b5153724）
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train（获取于 2026-10-18T16:19:45Z；SHA-256：5e9ee49bba2b05f26330bd61168e2aabbea1ccf45d26538b440db8fcd3818e46）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md（获取于 2026-10-18T16:19:45Z；SHA-256：1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py（获取于 2026-10-18T16:19:45Z；SHA-256：d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/README.md（获取于 2026-10-18T16:19:47Z；SHA-256：996f153a3a281dd5167bdea1d32bc12027386a42114dd23e78bfa23daaeb6cf8）
- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md（获取于 2026-10-18T16:19:41Z；SHA-256：8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290）

---

## GUI-Robust

提供评估脚本和关联数据，用于比较普通及异常界面条件下的 GUI 操作预测和任务执行。

- 目录页面：https://awesomecua.com/zh/resources/github-chessbean1-gui-robust/
- 原始来源：https://github.com/chessbean1/GUI-Robust
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T10:43:11Z
- ID：github:chessbean1/gui-robust

- 完整记录 JSON：https://awesomecua.com/resources/github-chessbean1-gui-robust/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/chessbean1/GUI-Robust/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：93defc2b31d0f8e6144e77cda4a74abeafd5253ae18a626bfc625f429050770a）

---

## GuideBench

GUIDE 基准发布的数据：来自 10 款应用的新手口述屏幕录像的标注片段，用于预测用户行为状态、短期意图，以及是否提供帮助和如何帮助。

- 目录页面：https://awesomecua.com/zh/resources/url-37b4f525e6d7a56a9967/
- 原始来源：https://huggingface.co/datasets/kixlab/GuideBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、人机协作、视频、界面理解
- 证据核查日期：2026-10-19T06:04:35Z
- ID：url:37b4f525e6d7a56a9967

### 范围记录

Formerly published as saelyne/GuideBench; the Hub API redirects that name to this repository with the same object ID. Access is gated with automatic approval. The Hub manifest at revision 783caa86 holds three annotation JSON files (one per task), 40 task-description Markdown files, 120 think-aloud transcription JSON files and two CSV files under videos/; no video files are hosted in the repository. The project page lists Photoshop, GIMP, Figma, Canva, PowerPoint, Google Slides, Premiere Pro, CapCut, Google Sheets and Excel without naming operating systems; the environment facets follow from those applications. Models are evaluated on video snippets without the narrations. CC-BY-4.0 is the Hub data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/record.json

### 结构化规格

- 动作 / 输出：未记录
- 评测方式：Accuracy on 9-way behavior-state classification, 4-way multiple-choice intent prediction, and help prediction split into a binary help-need decision and a 4-way multiple-choice help-content question.
- 侧重：user behavior state detection, short-term intent prediction, help need and help content prediction
- 观测：screen-recording video segments
- 任务设置：离线

#### 数量记录

- 120 条演示 — GUIDE screen recordings（来源报告；来源：https://guide-bench.github.io）
- 67.5 小时屏幕录像 — GUIDE screen recordings（来源报告；来源：https://guide-bench.github.io）
- 54 名新手用户 — GUIDE participants（来源报告；来源：https://guide-bench.github.io）
- 10 个应用 — GUIDE software coverage（来源报告；来源：https://guide-bench.github.io）
- 40 个开放式任务 — GUIDE task design（来源报告；来源：https://guide-bench.github.io）
- 120 个转录文件 — Hub manifest at revision 783caa86 (transcriptions/)（计算得出）（来源：https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1）
- 40 个任务描述文件 — Hub manifest at revision 783caa86 (tasks/)（计算得出）（来源：https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1）

Demonstration, hour, user, application and task counts are the project page's figures; file counts come from the Hub manifest. The access gate leaves segment counts per task uncomputed from the annotation files.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/kixlab/GuideBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1（获取于 2026-10-19T06:04:35Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://guide-bench.github.io（获取于 2026-10-19T06:04:26Z；SHA-256：0a3441b26d204655fe737e7b3738a61ebb8c67fd0977e26042cad59f24352c14）
- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1（获取于 2026-10-19T06:04:35Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://huggingface.co/api/datasets/saelyne/GuideBench（获取于 2026-10-19T06:03:50Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://huggingface.co/api/datasets/kixlab/GuideBench（获取于 2026-10-19T06:03:50Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）

---

## GUIGuard-Bench evaluation code

GUIGuard-Bench 评估代码涵盖隐私区域识别评分、基于 LLM 评判的遮挡截图规划一致性，以及受保护界面的点击定位，并附少量 Android 和 PC 示例。

- 目录页面：https://awesomecua.com/zh/resources/github-shaluoyan523-guiguard-bench/
- 原始来源：https://github.com/shaluoyan523/GUIGuard-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：安全与防护、评测、GUI 定位
- 证据核查日期：2026-10-18T15:56:30Z
- ID：github:shaluoyan523/guiguard-bench

### 范围记录

The README is an anonymous-review version without authors or a citation; the paper link comes from the GUIGuard project page, which links this repository as the paper's code. The full benchmark data is hosted separately on the Hugging Face Hub; this repository ships only dataset_example/ for smoke tests. The README and croissant.json describe that dataset as MIT, while the Hub dataset card at revision c2b5ca41 declares CC-BY-NC-4.0, so no data license is recorded here. The repository has no LICENSE file and the GitHub API reports no license. Nothing was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-shaluoyan523-guiguard-bench/record.json

### 结构化规格

- 动作 / 输出：predicted privacy regions with labels, generated next-action plans, predicted click points
- 评测方式：privacy_recognition scores region-level privacy predictions against the labels (IoU-only or paper-style scoring); planner_eval has an LLM judge rate step-level semantic consistency between plans from original and protected trajectories on a 0-4 scale; grounding_eval counts a click as correct when the predicted point falls inside the target box.
- 侧重：privacy-region recognition on GUI screenshots, planning fidelity on privacy-protected screenshots, click grounding under visual privacy protection
- 观测：recorded trajectory screenshots, task instructions, next-action plans
- 任务设置：离线

#### 数量记录

- 34 个 Android 任务目录 — dataset_example/Android at commit 542a902a, of which 33 are complete trajectories（来源报告；来源：https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md）
- 26 条 PC 轨迹 — dataset_example/PC at commit 542a902a（来源报告；来源：https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md）
- 290 个下一步动作定位样本 — dataset_example/grounding_data/manifest.jsonl at commit 542a902a（计算得出）（来源：https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/dataset_example/grounding_data/manifest.jsonl）

Counts describe dataset_example/, the repository's review subset for smoke tests; the README says benchmark numbers need the full Hub dataset. A script over the repository tree at this commit found the same 34 Android directories (task 62 lacks traj.jsonl and task_result.json) and 26 PC directories, and 290 images in each of the original, black-mask and LLM-replacement variants. Directories, trajectories and samples are different units; these counts are reported separately.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README's License section covers only the dataset, the repository tree at 542a902a has no LICENSE file, and the GitHub API reports no license; no code license is established.
  来源：https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md

### 一手证据

- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md（获取于 2026-10-18T15:56:30Z；SHA-256：f7961f6d3f6809f6ae61bf5b679d03595b79c64a15a2687dfccdb1b5a89e065b）
- https://futuresis.github.io/GUIGuard-page/（获取于 2026-10-18T15:54:36Z；SHA-256：14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5）
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/dataset_example/grounding_data/manifest.jsonl（获取于 2026-10-18T15:55:25Z；SHA-256：0cd6681a25d989ec0e925c75d3ea06807e1738d3a853c824de473cec0476b23f）
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/grounding_eval/grounding_eval/metrics.py（获取于 2026-10-18T15:55:25Z；SHA-256：5f173b67f64d4aad028253e821f4cd1afbf682cf84dc0a2bbe75feb1e0141302）
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/planner_eval/planner_eval/judges/graders/semantic_consistency.py（获取于 2026-10-18T15:55:26Z；SHA-256：8ee9842717668cb38c400ac41c8a8e1a5c63c26849150715c9b1f8f54512aa25）
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/croissant.json（获取于 2026-10-18T15:54:38Z；SHA-256：b0b84ad6af5b79da3caada0bb559f9022c546e5df03f56a4f6abe45a1958153e）
- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md（获取于 2026-10-18T15:56:05Z；SHA-256：81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229）

---

## GUIHalluBench

将模型列出的界面元素边界框和描述与人工标注比对，衡量其解析 1,000 张英文和 1,000 张中文截图时的幻觉。

- 目录页面：https://awesomecua.com/zh/resources/github-ant-research-guihallubench/
- 原始来源：https://github.com/ant-research/GUIHalluBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T06:40:51Z
- ID：github:ant-research/guihallubench

- 完整记录 JSON：https://awesomecua.com/resources/github-ant-research-guihallubench/record.json

### 结构化规格

- 动作 / 输出：list of UI element boxes [x1,y1,x2,y2] and text descriptions
- 评测方式：Metrics use greedy one-to-one matching in descending IoU order, then micro precision/recall/F1 and lowercased difflib.SequenceMatcher description similarity on matched pairs. Actual metrics.py accepts IoU >= 0.5 at its default threshold; README prose says > 0.5. Predictions align to annotations by image_path; callers must supply complete prediction coverage.
- 侧重：GUI page-element detection, element-description consistency
- 观测：page screenshot
- 任务设置：离线

#### 数量记录

- 1,000 条页面标注条目 — English annotation subset reported by README（来源报告；来源：https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md）
- 1,000 条页面标注条目 — Chinese annotation subset reported by README（来源报告；来源：https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md）

Each annotation entry represents a page. README illustrates num_samples=4796 as example output; the corpus count remains unspecified. Public tree contains both annotation JSON files and an images.tar.gz Git-LFS pointer. LEGAL.md only governs comment-language precedence, not a code/data license grant; both slots remain unknown. No benchmark run was performed.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://github.com/ant-research/GUIHalluBench（获取于 2026-10-16T06:40:51Z；SHA-256：51df9dbcf52f46e4774207f2e6ad84dc8a6d117cdab6f77a38e9897ded1d0963）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：d9c476d6960a4ef99e20d4c3b5d35a63f3ae5e61fc20e9dea00b11e64b74c9e9）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/src/metrics.py（获取于 2026-10-17T14:21:09Z；SHA-256：f36707dfcd3e83fc9d7f57b50d0c27007801e5029cc1ac255e000560ecf778fc）
- https://api.github.com/repos/ant-research/GUIHalluBench/git/trees/master?recursive=1（获取于 2026-10-17T14:14:07Z；SHA-256：c0896bc90d515b7bd8fe86b062aeb199bd47570e6eca8474986f5b1ef1d98dbd）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/LEGAL.md（获取于 2026-10-17T14:21:09Z；SHA-256：adba50d9794b9ef3f7ec8cbc680f7f1fa3fbf9df0ac8d1f9b9ccab6d941bc11b）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/.gitattributes（获取于 2026-10-17T14:34:56Z；SHA-256：8f35fa75be42a7a53e4f96de1b62be84962d2cf1beb8b23dfcfaecfaea4a6b90）

---

## GUITestBench

GUITestBench 评测安卓智能体能否通过多步操作发现应用缺陷，并结合导航与触发条件检查及评判模型进行评估。

- 目录页面：https://awesomecua.com/zh/resources/github-adam-bjtu-guitestbench/
- 原始来源：https://github.com/ADaM-BJTU/GUITestBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、长任务
- 证据核查日期：2026-11-09T05:05:07Z
- ID：github:adam-bjtu/guitestbench

### 范围记录

The release describes code, configurations and defective APKs. Its setup requires an Android emulator, and the example evaluation command covers 143 tasks.

- 完整记录 JSON：https://awesomecua.com/resources/github-adam-bjtu-guitestbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ADaM-BJTU/GUITestBench/HEAD/README.md（获取于 2026-11-09T05:05:07Z；SHA-256：d6015bad95ce9ae964268ac8c45da79883574b5dd734a884f91f92ce1fe93db4）

---

## HealthEnv

HealthEnv 将纵向临床问答任务编译为有状态、可验证的计算机使用评测环境。

- 目录页面：https://awesomecua.com/zh/resources/github-possibleme2026-lang-healthenv/
- 原始来源：https://github.com/possibleme2026-lang/healthenv
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、沙箱、工作流
- 证据核查日期：2026-11-04T14:41:46Z
- ID：github:possibleme2026-lang/healthenv

- 完整记录 JSON：https://awesomecua.com/resources/github-possibleme2026-lang-healthenv/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/possibleme2026-lang/healthenv/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/possibleme2026-lang/healthenv/HEAD/README.md（获取于 2026-11-04T14:41:46Z；SHA-256：8f91bc42fd6a20a7e4e19ba461abbe75923558010133f99f5a8830bbe7ad70e8）
- https://raw.githubusercontent.com/possibleme2026-lang/healthenv/HEAD/LICENSE（获取于 2026-11-04T14:45:02Z；SHA-256：994cf4b8722b9a4975ea5455694bcddbf40aaff0b415555755df00320de7a564）

---

## HoloSkill Gym

用于自我演进的 CLI 和计算机使用智能体技能的 Gym 环境与优化框架。

- 目录页面：https://awesomecua.com/zh/resources/github-elenaviewsynthesis-holoskill-gym/
- 原始来源：https://github.com/ElenaViewSynthesis/holoskill-gym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、强化学习、自我反思、工作流
- 证据核查日期：2026-11-04T17:30:34Z
- ID：github:elenaviewsynthesis/holoskill-gym

- 完整记录 JSON：https://awesomecua.com/resources/github-elenaviewsynthesis-holoskill-gym/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ElenaViewSynthesis/holoskill-gym/main/README.md（获取于 2026-11-04T17:30:34Z；SHA-256：4f351caff863214512c597e9c68be0a9595266234df755ca32c3e6b3694ea5e4）

---

## HumanQA

以证据为先的产品质量与 UX 评测测试框架，用于通过浏览器智能体测试网页应用。

- 目录页面：https://awesomecua.com/zh/resources/github-hotragn-humanqa/
- 原始来源：https://github.com/Hotragn/humanqa
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、网页导航
- 证据核查日期：2026-11-04T17:20:52Z
- ID：github:hotragn/humanqa

- 完整记录 JSON：https://awesomecua.com/resources/github-hotragn-humanqa/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Hotragn/humanqa/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Hotragn/humanqa/main/README.md（获取于 2026-11-04T17:20:52Z；SHA-256：37a15b95ec894afff0d1e11e58d6b2a4df934068cb3b250164e1de18a1eee7a8）
- https://raw.githubusercontent.com/Hotragn/humanqa/HEAD/LICENSE（获取于 2026-11-04T17:26:34Z；SHA-256：91dbfa3cf8aa316d440b1fd81b1f48d467780f2975eca932590137171909db46）

---

## hyprbench

hyprbench 是面向 Linux Hyprland Wayland 合成器、采用 OSWorld 风格的计算机使用评测基准，配有脚本化窗口管理验证器。

- 目录页面：https://awesomecua.com/zh/resources/github-crispwisp-hyprbench/
- 原始来源：https://github.com/crispwisp/hyprbench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、沙箱、自动化
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:crispwisp/hyprbench

- 完整记录 JSON：https://awesomecua.com/resources/github-crispwisp-hyprbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/crispwisp/hyprbench/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：04e30af26bc075f96deea6ea6bd46ba5743c725a1ecb89866d29b6236cfc9c65）

---

## Inspect Evals

Inspect Evals 是面向 UK AISI Inspect 框架的社区评测基准套件，包含 OSWorld、GAIA、SWE-bench 以及网络安全和智能体评测。

- 目录页面：https://awesomecua.com/zh/resources/github-ukgovernmentbeis-inspect-evals/
- 原始来源：https://github.com/UKGovernmentBEIS/inspect_evals
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Linux
- 主题：评测、安全与防护、沙箱
- 证据核查日期：2026-11-04T13:12:41Z
- ID：github:ukgovernmentbeis/inspect_evals

- 完整记录 JSON：https://awesomecua.com/resources/github-ukgovernmentbeis-inspect-evals/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/UKGovernmentBEIS/inspect_evals/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/UKGovernmentBEIS/inspect_evals/HEAD/README.md（获取于 2026-11-04T13:12:41Z；SHA-256：27150e51a4f8c9c320dbee61cbc57d47501d8bfa03e0579715ef1a6e260de70f）
- https://raw.githubusercontent.com/UKGovernmentBEIS/inspect_evals/HEAD/LICENSE（获取于 2026-11-04T13:41:32Z；SHA-256：c593c2afc81388521eaeb03f0d1a4b01bc3e5147ed9cb16c1f129e5be353b6af）

---

## Intention-in-Interaction (IN3) & Mistral-Interact

提供 Intention-in-Interaction (IN3) 评测基准和 Mistral-Interact 模型，用于在智能体任务中主动澄清用户意图。

- 目录页面：https://awesomecua.com/zh/resources/github-openbmb-tell-me-more/
- 原始来源：https://github.com/OpenBMB/Tell_Me_More
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、人机协作、规划
- 证据核查日期：2026-11-04T13:12:29Z
- ID：github:openbmb/tell_me_more

- 完整记录 JSON：https://awesomecua.com/resources/github-openbmb-tell-me-more/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OpenBMB/Tell_Me_More/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenBMB/Tell_Me_More/HEAD/README.md（获取于 2026-11-04T13:12:29Z；SHA-256：95a0d43bdf625a6845c8fd2ded35f86dfb2db4cc8ff7fd53da746de82cec5d40）
- https://raw.githubusercontent.com/OpenBMB/Tell_Me_More/HEAD/LICENSE（获取于 2026-11-04T13:41:32Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## Intentproof

由 AI 驱动的端到端验证编排工具和交互式浏览器测试框架。

- 目录页面：https://awesomecua.com/zh/resources/github-egagofur-intentproof/
- 原始来源：https://github.com/egagofur/intentproof
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-04T17:30:40Z
- ID：github:egagofur/intentproof

- 完整记录 JSON：https://awesomecua.com/resources/github-egagofur-intentproof/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/egagofur/intentproof/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/egagofur/intentproof/main/README.md（获取于 2026-11-04T17:30:40Z；SHA-256：a9065ff2c722f3cd089c5b5a6b91c56d19f156eb3ad5ce987164f4424cbf0c40）
- https://raw.githubusercontent.com/egagofur/intentproof/HEAD/LICENSE（获取于 2026-11-04T17:39:41Z；SHA-256：a59c0baaf0dd5981c04a209d7783b060b2f6b420ef0b1c5a9a603ce3b0983b57）

---

## iOSWorld

iOSWorld 是原生 iPhone 模拟器基准，包含共享用户数据、应用工作流程、智能体运行器和基于评分细则的评分。

- 目录页面：https://awesomecua.com/zh/resources/github-ljang0-iosworld/
- 原始来源：https://github.com/ljang0/iOSWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：iOS
- 主题：评测、跨应用、记忆
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:ljang0/iosworld

- 完整记录 JSON：https://awesomecua.com/resources/github-ljang0-iosworld/record.json

### 结构化规格

- 动作 / 输出：touch actions, MCP tools (optional)
- 评测方式：Rubric satisfaction per task; full-task pass requires every criterion to be satisfied.
- 侧重：personalized phone tasks, cross-app workflows
- 观测：screenshots, accessibility XML (optional)
- 任务设置：交互式

#### 数量记录

- 133 个任务 — tasks.json benchmark（来源报告；来源：https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md）
- 26 个应用 — bundled SwiftUI apps（来源报告；来源：https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md）

Vision-only, vision-plus-XML, and MCP modes expose different information and tools. The documented default evaluator is model-based; compare the same mode and judge.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：706f9d770b65a1238e56f74f7dd5089c7756cc88e0ac09d80c7b2b3085a09b27）
- https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/LICENSE（获取于 2026-10-16T10:48:41Z；SHA-256：fa9fe1e31ed8da21d0b51621d3a3669ced4f0e42353aaf4bd8be1615d200eaac）

---

## jev-click-bench

jev-click-bench 使用官方评分方法和逐次点击日志，在 ScreenSpot-v2 和 ScreenSpot-Pro 上评测 Jev 1.14 的边界框定位。

- 目录页面：https://awesomecua.com/zh/resources/github-arthurkatcher-jev-click-bench/
- 原始来源：https://github.com/arthurkatcher/jev-click-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：评测、GUI 定位
- 证据核查日期：2026-11-04T14:41:46Z
- ID：github:arthurkatcher/jev-click-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-arthurkatcher-jev-click-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/arthurkatcher/jev-click-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/arthurkatcher/jev-click-bench/HEAD/README.md（获取于 2026-11-04T14:41:46Z；SHA-256：95c819ead98fb53930b527770c80a0481a87d3f1d8f7614ce6c00e145d3aa063）
- https://raw.githubusercontent.com/arthurkatcher/jev-click-bench/HEAD/LICENSE（获取于 2026-11-04T14:45:04Z；SHA-256：0e0159fc1884722a1d7bf841468e41414b0daf0ffdeb3b19f6890bef399cff80）

---

## Kane

面向 AI 构建的网页应用的通俗英语浏览器验证测试框架，将 UI 故障报告给编码智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-venkat5599-kane/
- 原始来源：https://github.com/Venkat5599/kane
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自我反思
- 证据核查日期：2026-11-04T17:30:27Z
- ID：github:venkat5599/kane

- 完整记录 JSON：https://awesomecua.com/resources/github-venkat5599-kane/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Venkat5599/kane/main/README.md（获取于 2026-11-04T17:30:27Z；SHA-256：2a6af07f95c092d3e9529a6036b99a170007c76f8c37903a65ad579954a6bdb2）

---

## Kernel Eval Protocol

使用 Eval Protocol、Kernel 云浏览器和可验证的任务评分器，评测并微调视觉语言浏览器智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-kernel-kernel-eval-protocol-quickstart/
- 原始来源：https://github.com/kernel/kernel-eval-protocol-quickstart
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、强化学习、网页导航、沙箱
- 证据核查日期：2026-11-04T15:45:42Z
- ID：github:kernel/kernel-eval-protocol-quickstart

- 完整记录 JSON：https://awesomecua.com/resources/github-kernel-kernel-eval-protocol-quickstart/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/kernel/kernel-eval-protocol-quickstart/HEAD/README.md（获取于 2026-11-04T15:45:42Z；SHA-256：bc26e8e18238dbf0fecad48424be36ca5891e8751796d9d1b1261a8600b81ebe）

---

## LAST DOOR

认证韧性评测基准和 WebMCP 权限编译器，用于测试浏览器智能体在登录及权限边界处的行为。

- 目录页面：https://awesomecua.com/zh/resources/github-agentsimdev-last-door/
- 原始来源：https://github.com/agentsimdev/last-door
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航、工具集成
- 证据核查日期：2026-11-04T17:55:02Z
- ID：github:agentsimdev/last-door

- 完整记录 JSON：https://awesomecua.com/resources/github-agentsimdev-last-door/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/agentsimdev/last-door/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/agentsimdev/last-door/main/README.md（获取于 2026-11-04T17:55:02Z；SHA-256：9353d8b66e4229c535ac14284cae7e7f8f3b1079b03f9a9512d9f879d4e25f71）
- https://raw.githubusercontent.com/agentsimdev/last-door/HEAD/LICENSE（获取于 2026-11-04T17:59:57Z；SHA-256：ef7b828a549a34b0bf9879e58cfa658d37d13cae4c5ba50ed2047482e7e6d22a）

---

## LLM as a Judge for Computer-Use Agents

LLM 充当评判者的评测测试框架，用于评估计算机使用智能体在网页浏览和桌面交互任务中的轨迹。

- 目录页面：https://awesomecua.com/zh/resources/github-anaishowland-llm-judge-psai/
- 原始来源：https://github.com/anaishowland/llm-judge-psai
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-11-04T15:45:42Z
- ID：github:anaishowland/llm-judge-psai

- 完整记录 JSON：https://awesomecua.com/resources/github-anaishowland-llm-judge-psai/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/anaishowland/llm-judge-psai/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/anaishowland/llm-judge-psai/HEAD/README.md（获取于 2026-11-04T15:45:42Z；SHA-256：dd1fb61ec03112ae04b2a34d5a663715e664daf6326f9290009b318a42fd3c4c）
- https://raw.githubusercontent.com/anaishowland/llm-judge-psai/HEAD/LICENSE（获取于 2026-11-04T15:57:25Z；SHA-256：e785dca3c094c4d014724f01280ebe8ebd91166676f251c4feaf4470b623121e）

---

## LongPuzzleBench

LongPuzzleBench 通过需要多步骤空间推理的长时程视觉解谜游戏，评测 GUI 和计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-bingozhang-verapraxis-longpuzzlebench/
- 原始来源：https://github.com/bingozhang-verapraxis/LongPuzzleBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、长任务、规划、界面理解
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:bingozhang-verapraxis/longpuzzlebench

- 完整记录 JSON：https://awesomecua.com/resources/github-bingozhang-verapraxis-longpuzzlebench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/bingozhang-verapraxis/LongPuzzleBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/bingozhang-verapraxis/LongPuzzleBench/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：ab4d26e67bca7fdd94e48b74054b7ee69ad22ac27226391559e4bd9f27f779ce）
- https://raw.githubusercontent.com/bingozhang-verapraxis/LongPuzzleBench/HEAD/LICENSE（获取于 2026-11-04T14:07:19Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## LPS-Bench

LPS-Bench 在良性及对抗性执行场景下，评测计算机使用智能体进行长程规划时的安全意识。

- 目录页面：https://awesomecua.com/zh/resources/github-tychenn-lps-bench/
- 原始来源：https://github.com/tychenn/LPS-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、安全与防护、规划、长任务
- 证据核查日期：2026-11-04T13:12:41Z
- ID：github:tychenn/lps-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-tychenn-lps-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/tychenn/LPS-Bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/tychenn/LPS-Bench/HEAD/README.md（获取于 2026-11-04T13:12:41Z；SHA-256：a3b3072715773798e4d3a723fa77e45dc757de27e8873ea30697f25607161118）
- https://raw.githubusercontent.com/tychenn/LPS-Bench/HEAD/LICENSE（获取于 2026-11-04T13:22:27Z；SHA-256：407c33cea7a36c5beab41115f8267011bd4bee60fb87909af4c10b8bd3ca1b63）

---

## MacArena

MacArena 在可复现的在线 macOS 虚拟机环境中，通过跨应用桌面任务评测计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-macpaw-macarena/
- 原始来源：https://github.com/MacPaw/MacArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测、沙箱、长任务
- 证据核查日期：2026-11-04T14:02:42Z
- ID：github:macpaw/macarena

- 完整记录 JSON：https://awesomecua.com/resources/github-macpaw-macarena/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MacPaw/MacArena/HEAD/README.md（获取于 2026-11-04T14:02:42Z；SHA-256：3f82d0c556ed2210607534731658a0f0677c5ce5c9f7c9a6f61104270d4d913b）

---

## MalURLBench

MalURLBench 在 10 个真实网页场景中，评测基于 LLM 的网页智能体遭受网络钓鱼和恶意 URL 攻击时的脆弱性。

- 目录页面：https://awesomecua.com/zh/resources/github-jiangyinger-malurlbench/
- 原始来源：https://github.com/JiangYingEr/MalURLBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-04T13:12:20Z
- ID：github:jiangyinger/malurlbench

- 完整记录 JSON：https://awesomecua.com/resources/github-jiangyinger-malurlbench/record.json

### 许可证信息

- 代码：GPL-3.0 — https://raw.githubusercontent.com/JiangYingEr/MalURLBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/JiangYingEr/MalURLBench/HEAD/README.md（获取于 2026-11-04T13:12:20Z；SHA-256：d7bfd8e332f3f623d4131f20751debdbdf35361d1275526051fc43679bef1b5b）
- https://raw.githubusercontent.com/JiangYingEr/MalURLBench/HEAD/LICENSE（获取于 2026-11-04T13:22:28Z；SHA-256：3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986）

---

## MarketBench

MarketBench 是可复现的 WebMCP 评测基准，用于评测浏览器智能体在模拟市场中跨数周的经济决策。

- 目录页面：https://awesomecua.com/zh/resources/github-santos-sanz-marketbench/
- 原始来源：https://github.com/santos-sanz/marketbench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、规划、工具集成
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:santos-sanz/marketbench

- 完整记录 JSON：https://awesomecua.com/resources/github-santos-sanz-marketbench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/santos-sanz/marketbench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/santos-sanz/marketbench/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：3a39592161583e28bc1456f7f592ebd056e405d82e719f5d887521cf91221a5a）
- https://raw.githubusercontent.com/santos-sanz/marketbench/HEAD/LICENSE（获取于 2026-11-04T14:23:37Z；SHA-256：8ce7da3b826c67d11f562eed1ed5a9e5115862a953aac7f986069963727350ca）

---

## Maudslay

Maudslay 根据独立的后端和电子邮件真实结果，评测计算机使用智能体的发布就绪程度与 pass^k 可靠性。

- 目录页面：https://awesomecua.com/zh/resources/github-theo-ai-lab-maudslay/
- 原始来源：https://github.com/theo-ai-lab/maudslay
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、鲁棒性、可观测性
- 证据核查日期：2026-11-04T14:20:09Z
- ID：github:theo-ai-lab/maudslay

- 完整记录 JSON：https://awesomecua.com/resources/github-theo-ai-lab-maudslay/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/theo-ai-lab/maudslay/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/theo-ai-lab/maudslay/HEAD/README.md（获取于 2026-11-04T14:20:09Z；SHA-256：8e1d681c3b9dde339a2f214de304242995c451a76a36bd99497a3d4918716075）
- https://raw.githubusercontent.com/theo-ai-lab/maudslay/HEAD/LICENSE（获取于 2026-11-04T14:23:33Z；SHA-256：ba86525fa785c0361588e83ac93f62f89af52df0cd52fff51b41d83938c7855c）

---

## MCPWorld

结合计算机交互与工具访问的评估环境。

- 目录页面：https://awesomecua.com/zh/resources/github-saagent-mcpworld/
- 原始来源：https://github.com/SAAgent/MCPWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、工具集成
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:saagent/mcpworld

### 范围记录

The retained paper reports 201 tasks, whereas the retained repository README describes approximately 170. The retained paper reports 201 tasks, whereas the retained repository README describes approximately 170.

- 完整记录 JSON：https://awesomecua.com/resources/github-saagent-mcpworld/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：5559ca58f8ee06d2812c6cbc8c3e49ef112f4ef41fdcf4e95568b268bb24bf14）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=600&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:50Z；SHA-256：26fb4922c4c0bb5c9069935ed0aef0a9f56938cf8ae1af9724894fa1409955fb）
- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：5559ca58f8ee06d2812c6cbc8c3e49ef112f4ef41fdcf4e95568b268bb24bf14）
- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：d7a04bf11ce24a7b79cd44b4a78dcc9971eaeb3b565821de437e0ecb7723e634）

---

## MedSPOT

覆盖 10 款医学影像应用的连续式界面定位评测集，用于评估模型在多步骤工作流程中定位目标的能力，并提供评测脚本。

- 目录页面：https://awesomecua.com/zh/resources/github-tajamul21-medspot/
- 原始来源：https://github.com/Tajamul21/MedSPOT
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、GUI 定位、工作流、科学工作流
- 证据核查日期：2026-11-09T06:16:36Z
- ID：github:tajamul21/medspot

### 范围记录

The README links the dataset and documents task, step, and failure metrics. The repository includes evaluation scripts for multiple models; some runs require Hugging Face access or an OpenAI API key.

- 完整记录 JSON：https://awesomecua.com/resources/github-tajamul21-medspot/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Tajamul21/MedSPOT/HEAD/README.md（获取于 2026-11-09T06:16:36Z；SHA-256：c9a0157852fb97a30605b9943414510aecc330faf1d472d2f78ab5b44b50ddcb）

---

## mimiq

mimiq 是动态端到端智能体模拟和网页 UI 评测运行器，集成 Cypress、Playwright 和 Stagehand。

- 目录页面：https://awesomecua.com/zh/resources/github-gojiplus-mimiq/
- 原始来源：https://github.com/gojiplus/mimiq
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T15:45:42Z
- ID：github:gojiplus/mimiq

- 完整记录 JSON：https://awesomecua.com/resources/github-gojiplus-mimiq/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/gojiplus/mimiq/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/gojiplus/mimiq/HEAD/README.md（获取于 2026-11-04T15:45:42Z；SHA-256：b4909ae368b5fa12398ff113beeb703c2e2502c8dddd263f369872712e09482f）
- https://raw.githubusercontent.com/gojiplus/mimiq/HEAD/LICENSE（获取于 2026-11-04T15:57:25Z；SHA-256：bb1f65812e2de061212902b532382e857aede0faf5d28141a25c84037f6181f7）

---

## Mind2Web 2

长程智能体网页搜索基准，使用 Agent-as-a-Judge 框架评估随时间变化且有引文支持的答案，并提供开发集和测试集的评估脚本。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-mind2web-2/
- 原始来源：https://github.com/OSU-NLP-Group/Mind2Web-2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务
- 证据核查日期：2026-10-17T17:18:21Z
- ID：github:osu-nlp-group/mind2web-2

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-mind2web-2/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/README.md（获取于 2026-10-17T17:18:21Z；SHA-256：5cc72b992cfc11094dcf341c284d5baadc6c66a302fdfd474b27913fe1c91f6f）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/LICENSE（获取于 2026-10-17T17:18:56Z；SHA-256：93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa）

---

## Mirage (Adversarial Web Benchmark)

受控的对抗性网页环境，用于衡量自主浏览器智能体如何在欺骗性 UI 和提示陷阱下失败。

- 目录页面：https://awesomecua.com/zh/resources/github-shushant17711-mirage/
- 原始来源：https://github.com/Shushant17711/mirage
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、鲁棒性、网页导航
- 证据核查日期：2026-11-04T18:11:35Z
- ID：github:shushant17711/mirage

- 完整记录 JSON：https://awesomecua.com/resources/github-shushant17711-mirage/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Shushant17711/mirage/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Shushant17711/mirage/master/README.md（获取于 2026-11-04T18:11:35Z；SHA-256：1d4c48c1152cb3b3c21a9b709e111383ab43991963d7afc65f4f2843597abf8a）
- https://raw.githubusercontent.com/Shushant17711/mirage/HEAD/LICENSE（获取于 2026-11-04T18:16:08Z；SHA-256：614c8ccf71c29e27a718369d15ae445ef74187d0699eb11677a51c5850e870f4）

---

## MLA-Trust

统一评估框架，衡量多模态 LLM 智能体在交互式网页和移动 GUI 任务中的真实性、可控性、安全性与隐私表现。

- 目录页面：https://awesomecua.com/zh/resources/github-thu-ml-mla-trust/
- 原始来源：https://github.com/thu-ml/MLA-Trust
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android、跨平台
- 主题：安全与防护、评测、鲁棒性
- 证据核查日期：2026-10-18T10:59:55Z
- ID：github:thu-ml/mla-trust

- 完整记录 JSON：https://awesomecua.com/resources/github-thu-ml-mla-trust/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/README.md（获取于 2026-10-18T10:59:55Z；SHA-256：d69da19edaed185ad3071a97db3bb3fcfbdb14c0b514b7d27794b39fbe8e2541）
- https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/LICENSE（获取于 2026-10-18T11:03:46Z；SHA-256：240fb6820e7bcb0753617bcad6ffbd4a9ba83ca98e1e6aaa06c7b197b244bf16）

---

## MM-SafetyBench

MM-SafetyBench 在 13 种场景中，使用与查询相关的对抗性图像和排版安全提示评测多模态大语言模型。

- 目录页面：https://awesomecua.com/zh/resources/github-ai45lab-mm-safetybench/
- 原始来源：https://github.com/AI45Lab/MM-SafetyBench
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：评测、安全与防护
- 证据核查日期：2026-11-04T13:12:05Z
- ID：github:ai45lab/mm-safetybench

- 完整记录 JSON：https://awesomecua.com/resources/github-ai45lab-mm-safetybench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/AI45Lab/MM-SafetyBench/HEAD/README.md（获取于 2026-11-04T13:12:05Z；SHA-256：7fb245e804e1b7a06b6e3902d2fb880a850a63a2a419de3a1304c8e134671670）

---

## MMInA

基于 WebArena 环境的多模态网页任务，需在购物网站、Wikipedia 等站点间完成 1 至 10 跳的操作，用于测试长链推理。

- 目录页面：https://awesomecua.com/zh/resources/github-shulin16-mmina/
- 原始来源：https://github.com/shulin16/MMInA
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、长任务
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:shulin16/mmina

- 完整记录 JSON：https://awesomecua.com/resources/github-shulin16-mmina/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/shulin16/MMInA/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：abc848e7eb5181be22168dbc076446c5eb0f065fd57c7e10367284ca6e50bf5c）

---

## MMSearch-Plus

面向多模态网页智能体的评测集，含 311 道需反复检索图像与文本的视觉推理任务；仓库链接数据集并提供加载辅助程序。

- 目录页面：https://awesomecua.com/zh/resources/github-mmsearch-plus-mmsearch-plus/
- 原始来源：https://github.com/mmsearch-plus/MMSearch-Plus
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面理解
- 证据核查日期：2026-11-09T06:16:35Z
- ID：github:mmsearch-plus/mmsearch-plus

### 范围记录

The README links the Hugging Face dataset and describes a decryption helper. It lists agent rollout code, evaluation scripts, and Set-of-Mark annotations as future work; the repository code is MIT-licensed and the dataset is CC BY 4.0.

- 完整记录 JSON：https://awesomecua.com/resources/github-mmsearch-plus-mmsearch-plus/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/mmsearch-plus/MMSearch-Plus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mmsearch-plus/MMSearch-Plus/HEAD/README.md（获取于 2026-11-09T06:16:35Z；SHA-256：e718b5e9724c9a0553592b26c0c02baa4e1adf5ddff0f572af5229b22571500e）
- https://raw.githubusercontent.com/mmsearch-plus/MMSearch-Plus/HEAD/LICENSE（获取于 2026-11-09T06:13:39Z；SHA-256：45bb638569f949013c512259e919ded75c9809d82519e72404c18771af638e77）

---

## MobBench task definitions

用于评估 MobA 的公开真机移动任务定义集，中文和英文任务材料以带版本号的 JSON 形式发布。

- 目录页面：https://awesomecua.com/zh/resources/url-b53e03a6e4ca4226d126/
- 原始来源：https://huggingface.co/datasets/OpenDFM/MobA-MobBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-17T12:32:07Z
- ID：url:b53e03a6e4ca4226d126

### 范围记录

The ungated manifest lists MobBench_tasks_release_v1.0.json and bilingual cards. The card reports fifty tasks; no sample records were downloaded to recount them. This release supplies task definitions and agent setup guidance. The data card declares CC-BY-NC-SA-4.0; code and model licenses are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-b53e03a6e4ca4226d126/record.json

### 结构化规格

- 动作 / 输出：mobile GUI actions through a separately configured agent
- 评测方式：The publisher reports a fifty-task real-device evaluation.
- 侧重：mobile task completion
- 观测：Android device interface
- 任务设置：交互式

#### 数量记录

- 50 个任务 — MobBench tasks used in the paper（来源报告；来源：https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md）

Task definitions are distinct from device images, agent execution and automated scoring.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Dataset-card declaration for the MobBench task-definition release only.
  来源：https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md（获取于 2026-10-17T12:32:07Z；SHA-256：231a8f483256c774840c99383ab6536520a0aed0f04d62b4d64f1f59477b906e）
- https://huggingface.co/api/datasets/OpenDFM/MobA-MobBench（获取于 2026-10-17T12:32:07Z；SHA-256：4e7225f956d7cee98fe671e7bfd91fc407d87dd805d8f0c11c3b0c839714ccf3）

---

## Mobile-Bench

Mobile-Bench 通过结合 UI 动作与 API 扩展、使用检查点指标的多步骤 Android 任务，评测基于 LLM 的移动端智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-xiaomi-mobilebench/
- 原始来源：https://github.com/XiaoMi/MobileBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、工具集成
- 证据核查日期：2026-11-04T13:12:45Z
- ID：github:xiaomi/mobilebench

- 完整记录 JSON：https://awesomecua.com/resources/github-xiaomi-mobilebench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/XiaoMi/MobileBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/XiaoMi/MobileBench/HEAD/README.md（获取于 2026-11-04T13:12:45Z；SHA-256：f3aca4ac8ae8e72329d14c42f204b919a46fc7b3e5071852da1b9b7c4e7b403c）
- https://raw.githubusercontent.com/XiaoMi/MobileBench/HEAD/LICENSE（获取于 2026-11-04T13:22:31Z；SHA-256：d642832150981d993726e3284767cba4ed15cf27d6689a9d19ee05688e132ee0）

---

## Mobile-Eval-E task definitions

用于 Mobile-Agent-E 长时程、跨应用 Android 评估的任务定义，以含 25 条记录的测试集形式提供，并附有评分标准和人工参考操作字符串。

- 目录页面：https://awesomecua.com/zh/resources/url-342b081c3668a8bbe155/
- 原始来源：https://huggingface.co/datasets/mikewang/mobile_eval_e
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、长任务、跨应用
- 证据核查日期：2026-10-18T04:27:15Z
- ID：url:342b081c3668a8bbe155

### 范围记录

The public Hub manifest contains one test Parquet file. This resource is the benchmark’s task-definition package. Card metadata supplies rubrics/reference-operation fields but no data-license declaration or verified automated scorer; the code repository’s MIT license is not transferred to these records.

- 完整记录 JSON：https://awesomecua.com/resources/url-342b081c3668a8bbe155/record.json

### 结构化规格

- 动作 / 输出：未记录
- 评测方式：The published task schema contains rubrics and human_reference_operations. No automated scoring protocol or single numeric agent metric is established by the inspected card; execution uses separately configured Android tooling.
- 侧重：long-horizon multi-app Android task execution
- 观测：task instructions, app/scenario metadata
- 任务设置：交互式

#### 数量记录

- 25 条任务定义记录 — Hub test split at revision b8eca829（来源报告；来源：https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md）

Features are task_id, instruction, type, apps, scenario, rubrics and human-reference operation strings. A task record contains task-definition fields and human-reference operation strings; the counted unit is tasks. Public Parquet inventory was checked but no sample rows were downloaded; companion README limits the tested agent platform to Android.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：A data-license declaration is unrecorded in the inspected task card.
  来源：https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md

### 一手证据

- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md（获取于 2026-10-18T04:27:15Z；SHA-256：f8515fbce73ea0ef3d1d558d4567bb949244e6384e61c956ba3ddbc27294f0ae）
- https://huggingface.co/api/datasets/mikewang/mobile_eval_e（获取于 2026-10-18T04:33:29Z；SHA-256：f9b10eada9e0a64e26f1a7d477768f218b807103199855d893b3ab07feddc755）
- https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md（获取于 2026-10-18T04:35:15Z；SHA-256：9fdf43753fbfac9868d8bec57fa5601db3e03ed5c30fb981f9da88f6b75ffcc5）
- https://export.arxiv.org/api/query?id_list=2412.04454%2C2412.04626%2C2412.05467%2C2412.09362%2C2412.09605%2C2412.10342%2C2412.10742%2C2412.10840%2C2412.13103%2C2412.13194%2C2412.13501%2C2412.14161%2C2412.14470%2C2412.16256%2C2412.17589%2C2412.18116%2C2412.18426%2C2412.19723%2C2501.01149%2C2501.04575%2C2501.07572%2C2501.11733%2C2501.12326%2C2501.13896%2C2501.16150%2C2502.01600%2C2502.01977%2C2502.02982%2C2502.06395%2C2502.07949%2C2502.08047%2C2502.08226%2C2502.11357%2C2502.13053%2C2502.13923%2C2502.14282%2C2502.18906%2C2503.00401%2C2503.02268%2C2503.03196%2C2503.04730%2C2503.05143%2C2503.06470%2C2503.09263%2C2503.11069%2C2503.11170%2C2503.12687%2C2503.15661%2C2503.15937%2C2503.16465&max_results=50（获取于 2026-10-16T06:31:38Z；SHA-256：e96b86015c763c780e0430a8d0867b96cae947f50e888b3441c85abcaa42de78）

---

## MobileAgentBench

面向移动端 LLM 智能体的自动化基准，默认任务使用 10 个 Simple Mobile Tools Android 应用；作为 Python 库安装，并检测任务是否完成。

- 目录页面：https://awesomecua.com/zh/resources/github-mobileagentbench-mobile-agent-bench/
- 原始来源：https://github.com/MobileAgentBench/mobile-agent-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:mobileagentbench/mobile-agent-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-mobileagentbench-mobile-agent-bench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MobileAgentBench/mobile-agent-bench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：e1d75e8a196f19af6050c53694383f069561244c810ca259c5f8075ee91f72b1）

---

## MobileBench-OL

MobileBench-OL 提供在线评测测试框架，在真实 Android 设备上测试移动端 GUI 智能体，并动态验证任务。

- 目录页面：https://awesomecua.com/zh/resources/github-xiaomi-research-mobilebench-ol/
- 原始来源：https://github.com/xiaomi-research/mobilebench-ol
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、鲁棒性
- 证据核查日期：2026-11-04T13:12:45Z
- ID：github:xiaomi-research/mobilebench-ol

- 完整记录 JSON：https://awesomecua.com/resources/github-xiaomi-research-mobilebench-ol/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xiaomi-research/mobilebench-ol/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xiaomi-research/mobilebench-ol/HEAD/README.md（获取于 2026-11-04T13:12:45Z；SHA-256：bace67b98a6e04a94324246a76f3268e751868a4608ecdd2a5c75ad67115fff3）
- https://raw.githubusercontent.com/xiaomi-research/mobilebench-ol/HEAD/LICENSE（获取于 2026-11-04T13:22:29Z；SHA-256：997ae1f91734822c2971f0ad91ac221d03dad400a29e3c94bd97774161df0807）

---

## MobileSafetyBench

MobileSafetyBench 是 Android 模拟器测试环境，借助 ADB 和 Appium 获取观察、执行操作并检查任务是否成功，同时评估移动设备控制智能体的安全性与有用性。

- 目录页面：https://awesomecua.com/zh/resources/github-jylee425-mobilesafetybench/
- 原始来源：https://github.com/jylee425/mobilesafetybench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:jylee425/mobilesafetybench

- 完整记录 JSON：https://awesomecua.com/resources/github-jylee425-mobilesafetybench/record.json

### 结构化规格

- 动作 / 输出：tap/long-tap/swipe, navigation buttons and text editing, refuse, ask-consent and complete, task-specific shortcut actions
- 评测方式：Appium-backed task evaluators track goal achievement and harm prevention as separate booleans, plus risk-detection step and completion progress. The base evaluator defaults to max_step=15; task-specific overrides must be retained. Results include separate goal-achievement, harm-prevention, risk-detection and completion-progress measures.
- 侧重：mobile task helpfulness, harm prevention during Android interaction
- 观测：screenshot pixels, parsed UI hierarchy text, task instruction and interaction history
- 任务设置：交互式

#### 数量记录

未记录数量。

Inspected release/ver.3 branch exposes task definitions, Android environment and per-task evaluators. It requires Android API 34, Appium/ADB and documented third-party app versions. The action parser includes semantic shortcuts in addition to screen gestures. No corpus task total is inferred from evaluator-module or file counts. Apache-2.0 applies to repository code, not automatically app/data assets.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：e733115d9b2fbe910cb3891162f04a89af8cbda25255c8f0bf60f78101e4309a）
- https://api.github.com/repos/jylee425/mobilesafetybench/git/trees/release/ver.3?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：8dc66f6c5087a32c5c9fb7b3104ea6f9e0082255e2ba3cf9ba8244ce5a24da6f）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/environment.py（获取于 2026-10-17T14:21:09Z；SHA-256：f56d6345546a9c67a2113cfba5b7148f5bd6b48fac5c34f1a5f4080e2d81ae2f）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/component/parser.py（获取于 2026-10-17T14:21:10Z；SHA-256：120487c3a6492371321dd3eebcd65dc59de6a82454d622d7fed3a7d86b8fa6c5）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/evaluator/_base_evaluator.py（获取于 2026-10-17T14:23:14Z；SHA-256：918e3aa64ab3f578fb54580da123c1ff4508022b64ce74f88ce28c7a612756a4）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt（获取于 2026-10-16T06:41:58Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## MobileWorldBench

MobileWorldBench 是评估移动智能体语义世界建模的基准，包含问答任务和由 GPT 评判的生成任务，并提供基于 AitW 及 AndroidControl 屏幕构建的训练数据。

- 目录页面：https://awesomecua.com/zh/resources/github-jacklishufan-mobileworld/
- 原始来源：https://github.com/jacklishufan/MobileWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:40:51Z
- ID：github:jacklishufan/mobileworld

- 完整记录 JSON：https://awesomecua.com/resources/github-jacklishufan-mobileworld/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://github.com/jacklishufan/MobileWorld（获取于 2026-10-16T06:40:51Z；SHA-256：dfcbaa088cc21dd4e3c67d6eb3b3a1dc476217165ce2ca0daa2facfda71b5a38）

---

## Nightshift

运行于 Solari 的黑盒计算机使用质量检查测试框架，无需访问应用测试钩子即可评测实时用户界面。

- 目录页面：https://awesomecua.com/zh/resources/github-yayaq1-nightshift/
- 原始来源：https://github.com/yayaq1/nightshift
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T17:55:25Z
- ID：github:yayaq1/nightshift

- 完整记录 JSON：https://awesomecua.com/resources/github-yayaq1-nightshift/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/yayaq1/nightshift/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/yayaq1/nightshift/main/README.md（获取于 2026-11-04T17:55:25Z；SHA-256：3a2d3cdbbf327a8555d6a2cc4cd7962d396eb7ed7593d7cf20af97884fda21e8）
- https://raw.githubusercontent.com/yayaq1/nightshift/HEAD/LICENSE（获取于 2026-11-04T17:59:59Z；SHA-256：5f220ea17d1b2c4ab3ea8745de474fbbaa2c7dbd89f72c1dc9fea5f0e7560674）

---

## OmniWebBench

OmniWebBench 从端到端网页导航、动作执行、故障恢复和证据核验等方面评测智能体浏览器。

- 目录页面：https://awesomecua.com/zh/resources/github-fanxutherealone-omniwebbench/
- 原始来源：https://github.com/FanXuTheRealOne/OmniWebBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自我反思、鲁棒性
- 证据核查日期：2026-11-04T14:20:10Z
- ID：github:fanxutherealone/omniwebbench

- 完整记录 JSON：https://awesomecua.com/resources/github-fanxutherealone-omniwebbench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/FanXuTheRealOne/OmniWebBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/FanXuTheRealOne/OmniWebBench/HEAD/README.md（获取于 2026-11-04T14:20:10Z；SHA-256：1c3fa67c31446916a2b526b953e6703bbd0deba22f44615210661b2e553cb3d8）
- https://raw.githubusercontent.com/FanXuTheRealOne/OmniWebBench/HEAD/LICENSE（获取于 2026-11-04T14:23:36Z；SHA-256：4dd13869245e356246a5b770723247bbb80a8f07a181d1d3d873a1734297cdb9）

---

## Open Operator Evals

Notte Labs 已归档的评测框架和结果，对 WebVoyager 的 30 项任务子集让网页智能体各运行八次，以 GPT-4o 截图评判器评分，并与智能体自报成功情况比较。

- 目录页面：https://awesomecua.com/zh/resources/github-nottelabs-open-operator-evals/
- 原始来源：https://github.com/nottelabs/open-operator-evals
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、鲁棒性
- 证据核查日期：2026-10-19T06:03:58Z
- ID：github:nottelabs/open-operator-evals

### 范围记录

GitHub marks the repository archived. Notte Labs, the developer of one of the compared agents, published the results and ranks Notte first in its README; the results are publisher-run. The March 2025 runs used Notte v1.3.3 with Gemini 2.0 Flash, Browser-Use 0.1.40 with GPT-4o and Convergence Proxy-lite at a pinned commit, headless, from a residential Swiss IP. Agent handlers in eval/agent_handlers also cover Falco, a Browser-Use API and a mock agent. WebVoyager30 is the publisher's sample of WebVoyager; the repository also carries the full WebVoyager task file and archived variants. Per-run results, summary images and logs for the three providers are committed under WebVoyager30/. Live websites change, so scores are tied to their run dates. No license file is present.

- 完整记录 JSON：https://awesomecua.com/resources/github-nottelabs-open-operator-evals/record.json

### 结构化规格

- 动作 / 输出：agent-defined browser actions
- 评测方式：A GPT-4o judge (default model in eval/evaluators/webvoyager.py) receives the task, the agent's final response and up to its last four screenshots under WebVoyager's evaluation prompt and returns SUCCESS, NOT SUCCESS or UNKNOWN; the agent's own success claim is recorded separately. The three published configurations (configs/) run each task 8 times with at most 20 steps and 360 seconds.
- 侧重：live-website task completion, agent self-report calibration, run-to-run variance
- 观测：agent-defined browser observations, final screenshots and response for the judge
- 任务设置：交互式

#### 数量记录

- 30 个任务 — WebVoyager30 (eval/data/webvoyager/webvoyager_simple.jsonl)（计算得出）（来源：https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl）
- 15 个网站 — WebVoyager30 (eval/data/webvoyager/webvoyager_simple.jsonl)（计算得出）（来源：https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl）
- 643 个任务 — full WebVoyager task file in the repository (eval/data/webvoyager/webvoyager.jsonl)（计算得出）（来源：https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager.jsonl）

Counts are distinct task identifiers and website_name values in the inspected task files at the reviewed commit. The README calls WebVoyager about 600 tasks; the repository file holds 643 rows. Results depend on the agent version, model, step and time budget, IP location and run date.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/nottelabs/open-operator-evals/HEAD/README.md（获取于 2026-10-19T06:03:58Z；SHA-256：64bfc6493fa8f24cf5d1f0fb640a2d16239c6ad5a1673bd679bb72db4f2644af）
- https://api.github.com/repos/nottelabs/open-operator-evals（获取于 2026-10-19T06:03:10Z；SHA-256：a9a61c471c5582fea8ee4daaf9ca3eff80605c5b458a167c85eee50e34683a1a）
- https://api.github.com/repos/nottelabs/open-operator-evals/git/trees/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238?recursive=1（获取于 2026-10-19T06:04:37Z；SHA-256：7cd274b6cff857d101a49b84522cdcc25e864eda9befdb768c7642fde04867ca）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl（获取于 2026-10-19T06:03:11Z；SHA-256：09c9e30f8bc7f47e6039764d4fa58f74d2617c0cd47d5f0ba372b1274e52a893）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager.jsonl（获取于 2026-10-19T06:03:11Z；SHA-256：b5c50649aa9caf5f299e1ef94e8d843760222bbfe790d8b3931664f7cb3ac59f）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/evaluators/webvoyager.py（获取于 2026-10-19T06:03:11Z；SHA-256：2a87b31230b130fece98a9e057644cc5776b94996c43e7e173ae41c5c7decc9f）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/run.py（获取于 2026-10-19T06:03:11Z；SHA-256：e1eb241cc61cb24b21c622ce3671193e06d24cc304a5c5a5142dc29ebc732bf9）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/notte.headless.gemini.toml（获取于 2026-10-19T06:03:11Z；SHA-256：4729b8007aa2c63f94ae02477c55a69f94b4f86d2a14cca6420e74feccc2a8cf）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/browseruse.headless.openai.toml（获取于 2026-10-19T06:03:56Z；SHA-256：dd4be7388dcecaf2f294ca9d975617d2659a06fc10ef1f419d4e4cb81af26e11）
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/convergence.headless.toml（获取于 2026-10-19T06:03:57Z；SHA-256：87311f9335da34b9c8a99d506b886053b8da1a9b609b9f3e691394a899a3a223）

---

## Open User

黑盒用户体验审查测试框架，派遣 AI 浏览器用户角色测试网页产品并记录障碍点。

- 目录页面：https://awesomecua.com/zh/resources/github-tiacoo-open-user/
- 原始来源：https://github.com/Tiacoo/open-user
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计、网页导航
- 证据核查日期：2026-11-04T17:20:47Z
- ID：github:tiacoo/open-user

- 完整记录 JSON：https://awesomecua.com/resources/github-tiacoo-open-user/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Tiacoo/open-user/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Tiacoo/open-user/main/README.md（获取于 2026-11-04T17:20:47Z；SHA-256：7a1a86a96ef069372d3b983a00038dab104be21ff008f37306bd5fa55f1efef1）
- https://raw.githubusercontent.com/Tiacoo/open-user/HEAD/LICENSE（获取于 2026-11-04T17:26:36Z；SHA-256：735b9a515274200e7db51b2b8e3d54feac0e75befcf63cd19df76bc0f2a6c21e）

---

## OpenApps

提供可配置的浏览器应用和任务奖励，用于测试计算机使用智能体在内容、布局和外观变化下的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-facebookresearch-openapps/
- 原始来源：https://github.com/facebookresearch/OpenApps
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、跨应用、沙箱
- 证据核查日期：2026-10-18T04:35:18Z
- ID：github:facebookresearch/openapps

### 范围记录

Public code includes app/task/configuration and agent-launching implementations. README distinguishes moving main from v1.0-paper and says even that tag differs at the byte level from the published runs. CC-BY-NC-4.0 is the repository’s declared code license. No commercial-use permission or fixed downloadable task total is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/github-facebookresearch-openapps/record.json

### 结构化规格

- 动作 / 输出：click, type, scroll, configured BrowserGym/AgentLab actions
- 评测方式：Tasks define check_if_task_is_complete(initial_state,current_state); app-specific reward logic evaluates underlying state, with custom checks for code-editor file contents. Observation/history flags are configurable. No universal single fixed task total or published-run reproduction is implied.
- 侧重：UI-agent reliability under environment variation, state-based browser task evaluation
- 观测：screenshots, accessibility trees, set-of-marks and coordinates (configurable)
- 任务设置：交互式

#### 数量记录

未记录数量。

Preserve the code/tag, app state, theme/layout/content choices, goal variant and action/observation configuration. Current main refactors the paper-era appearance surface, and the v1.0-paper tag includes post-publication fixes that may move rewards. The environments run as browser apps with phone/tablet viewports.

### 许可证信息

- 代码：CC-BY-NC-4.0 — https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  来源：https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/README.md（获取于 2026-10-18T04:35:18Z；SHA-256：1df0f66584b37e7dba90811a7732d3b0c13c96cd7da4aec3970a18be36a6cec1）
- https://api.github.com/repos/facebookresearch/OpenApps（获取于 2026-10-18T04:33:19Z；SHA-256：2c57b627cb344e360480c10e74dcdd1d1ed321d9a7a4e3891bc970355b15f4cd）
- https://api.github.com/repos/facebookresearch/OpenApps/git/trees/main?recursive=1（获取于 2026-10-18T04:35:18Z；SHA-256：34aa76fbd6cca6ac2f3949792144662b90d85d7a18988afabcb570167ea5c1d6）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/tasks.md（获取于 2026-10-18T04:40:40Z；SHA-256：af030b93a7604c063b08f003b0a0124a6e95e560649d0306bfe40dd87fed563d）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/agents.md（获取于 2026-10-18T04:40:40Z；SHA-256：aede4dfd965bd3484336f40ddb1bd6db48aed00ab45e27c048b76cc4601d71b3）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE（获取于 2026-10-18T04:35:20Z；SHA-256：336255dc30193e8e15d689d9481bb05673d89055718f3a96923a7ffb99adbbaf）

---

## OS-Critic Bench

跨平台 GUI 评判基准，包含移动端、桌面端和网页的 JSONL 数据划分及截图资源，并附公开的推理与准确率评分脚本。

- 目录页面：https://awesomecua.com/zh/resources/url-c73ba0618d1b3c505887/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、奖励模型、界面理解
- 证据核查日期：2026-10-17T11:18:18Z
- ID：url:c73ba0618d1b3c505887

### 范围记录

The Hub card provides split/format/license metadata, while the official OS-Oracle README establishes critic-evaluation purpose and platform scope. The repository currently releases benchmark inference/scoring components; data-synthesis code, training datasets and model checkpoints remain unchecked TODOs. Apache-2.0 is recorded for benchmark data only; the evaluation code has no inspected license declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c73ba0618d1b3c505887/record.json

### 结构化规格

- 动作 / 输出：critic-model responses
- 评测方式：The official repository runs model inference and computes accuracy with cal_acc.py.
- 侧重：GUI critic prediction
- 观测：benchmark JSONL, UI screenshots
- 任务设置：离线

#### 数量记录

- 3 个平台 JSONL 划分 — mobile/desktop/web configurations in the Hub card（计算得出）（来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md）

No sample count is inferred from the n<1K Hub size band. OS-Oracle training data and weights remain pending; released evaluation code covers a separate component.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card license declaration for OS-Critic-Bench; not an evaluation-code or model-weight license.
  来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/numbmelon/OS-Oracle/HEAD/README.md（获取于 2026-10-17T11:18:18Z；SHA-256：58305b8ebe1af5dfbddd636484d63722d4e21d28ed3e22bb8c0068e654f33479）
- https://api.github.com/repos/numbmelon/OS-Oracle（获取于 2026-10-17T11:18:17Z；SHA-256：17bcf851f39d06e7e357871df1dc1ddf697bcbea31842c16348227bbf4fbb224）
- https://api.github.com/repos/numbmelon/OS-Oracle/git/trees/main?recursive=1（获取于 2026-10-17T11:22:55Z；SHA-256：516beea465382b54548e4b8bfd12ae510080a49451b30262ad1c769ed5a3398e）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Critic-Bench（获取于 2026-10-17T11:23:06Z；SHA-256：ef311b49437e246ffef6ad13c090277a0bdacc4a124e5b3cfe8d2643ced8f843）
- https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md（获取于 2026-10-17T11:23:07Z；SHA-256：4139e25e8911ca8450f6db9acb8dc3a98c126c3c43514c72bcefa4ed33b8ffa8）

---

## OS-Map

源自 OSWorld 的桌面基准，提供 Ubuntu 虚拟机环境和扩展的任务配置，用于衡量计算机交互的广度与深度。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-os-map/
- 原始来源：https://github.com/OS-Copilot/OS-Map
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务、跨应用
- 证据核查日期：2026-10-17T09:12:14Z
- ID：github:os-copilot/os-map

### 范围记录

Public task manifests, agent runner and evaluator code are present, and the linked ungated Hub manifest lists Ubuntu0.zip and task files. The main setup supports x86 VMware Workstation and says ARM/Docker alternatives are still in development. An inherited evaluation-examples README still mentions Windows 10 and under-construction status; those statements are retained as a documentation inconsistency. The manifest has 416 category/task references but 412 globally distinct ID strings.

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-os-map/record.json

### 结构化规格

- 动作 / 输出：actions executed by the OSWorld-derived DesktopEnv
- 评测方式：Task configurations provide evaluators for application/system state, using an OSWorld-derived runtime.
- 侧重：breadth of desktop task coverage, depth of desktop task execution
- 观测：desktop observations from an Ubuntu virtual machine
- 任务设置：交互式

#### 数量记录

- 416 个类别/任务引用 — evaluation_examples/all.json（计算得出）（来源：https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json）

416 category/task pairs are unique, but only 412 bare ID strings are unique across categories. This is a manifest-reference count. Main runtime documentation specifies Ubuntu; the subdirectory README retains older Windows-only wording.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Repository code LICENSE; no license is inferred for the VM image or bundled third-party applications.
  来源：https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/README.md（获取于 2026-10-17T09:12:14Z；SHA-256：fc9f3c8d9fffdff8b51e312b013be0d9fdfc10e57fdc2ec4a8a8d012c4b42475）
- https://api.github.com/repos/OS-Copilot/OS-Map（获取于 2026-10-17T09:12:14Z；SHA-256：d6c91b4910e92f40cc694b4cb6467c1a20f42c0c14047b95a1e777aca0892677）
- https://api.github.com/repos/OS-Copilot/OS-Map/git/trees/main?recursive=1（获取于 2026-10-17T09:14:07Z；SHA-256：41342157c53f28ad2729137491930225ac11da922e7b16762e84ac958a2e9d28）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE（获取于 2026-10-17T09:14:07Z；SHA-256：1dd924135cbf0a85ce72d75025259adb7b849970d400af4ed854327a34e7ee41）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json（获取于 2026-10-17T09:17:22Z；SHA-256：4199af4c8bc60451079d8a2e7598ab7386bd82b0d5c9ad7e6927d6cb8e03ad6f）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/README.md（获取于 2026-10-17T09:17:22Z；SHA-256：a6b60d5721cfdd26416e7d0ae3192360896427a97ccb3793812cc150e9cd7126）
- https://huggingface.co/api/datasets/os-map/OSMAP（获取于 2026-10-17T09:14:16Z；SHA-256：d2da837872b123f2927a069a020aeb14fb4b22148599c9f2e8b6689ee444ec88）

---

## OSReward

OSReward 的评估器与采集代码，检验 VLM 评判器对人工标注的计算机使用轨迹所给 SUCCESS/FAIL 结论，并提供网页、Windows、Android 和 Ubuntu 轨迹采集流水线。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-osreward/
- 原始来源：https://github.com/OS-Copilot/OSReward
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Windows、Linux、Android
- 主题：奖励模型、评测、数据生成
- 证据核查日期：2026-10-20T07:40:03Z
- ID：github:os-copilot/osreward

### 范围记录

Code for the OSReward paper; the trajectories themselves are released separately on Hugging Face as OS-Copilot/OSReward (the README reports 1,019 Full and 284 Hard trajectories with screenshots and human verdicts), alongside the gated OS-Shepherd-100K corpus and OS-Shepherd checkpoints. eval_pipeline/run_judge.py downloads the Full or Hard Parquet split (or reads local traces), sends a judge the full thought and action history and, by default, the last five screenshots with red markers at normalized action points, at temperature 0, through an OpenAI-compatible or native Anthropic API, and parses one 'Judge: SUCCESS' or 'Judge: FAIL' verdict per trajectory. It reports accuracy, balanced accuracy, SUCCESS and FAIL recall and coverage; missing, failed and unparseable outputs count as incorrect. Its subset option offers full, hard and custom, with no OSReward-Multi option, although the README roadmap lists Multi under the evaluation harness. trajectory_collection/ holds the collection pipelines: webtrail for live and self-hosted websites, a Windows Agent Arena based Windows 11 VM pipeline, an AndroidWorld based emulator pipeline, and an OSWorld based Ubuntu pipeline with a screenshot-only tool-call agent (the root README calls Ubuntu 'on the way' and the collection README calls it a placeholder, but its code is in the tree), plus export_judged_sft.py for judge-SFT bundles. benchmarking_analysis/ scores judges against the ground-truth labels of OSWorld, WindowsAgentArena, WebArena and AndroidWorld rollouts, with small samples under data/raw. The OS-Shepherd-100K construction pipeline and the OS-Shepherd training and inference code are listed as pending release. There is no root LICENSE; the bundled Windows and Android pipelines carry Microsoft's MIT and the Apache-2.0 license texts. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-osreward/record.json

### 结构化规格

- 动作 / 输出：one SUCCESS or FAIL verdict per trajectory
- 评测方式：Verdicts are compared with human gold labels; the evaluator reports accuracy, balanced accuracy, SUCCESS recall, FAIL recall and coverage, counting missing, API-error and unparseable outputs as incorrect.
- 侧重：reliability of VLM judges and reward models on computer-use trajectories, binary success verdicts
- 观测：task instruction, full thought and action history, last five screenshots with red action-point markers (default)
- 任务设置：离线

#### 数量记录

- 1,019 条轨迹 — OSReward Full split on Hugging Face（来源报告；来源：https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md）
- 284 条轨迹 — OSReward Hard split on Hugging Face（来源报告；来源：https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md）

Counts are as the README reports them for the Hugging Face release. Screenshot window, history mode, markers and temperature are evaluator defaults that can be changed by flags.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The complete tree at the reviewed commit has no root license file; the MIT and Apache-2.0 texts under trajectory_collection/windows and trajectory_collection/mobile cover those bundled upstream-derived pipelines, not the whole repository.
  来源：https://api.github.com/repos/OS-Copilot/OSReward/git/trees/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a?recursive=1

### 一手证据

- https://raw.githubusercontent.com/OS-Copilot/OSReward/HEAD/README.md（获取于 2026-10-20T07:40:03Z；SHA-256：ea91d9df443f0dc23a7cf8f53e91adc0ac187c8472e8bfbe0b14bb3ed779083d）
- https://api.github.com/repos/OS-Copilot/OSReward/git/trees/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a?recursive=1（获取于 2026-10-20T04:33:17Z；SHA-256：6522233e6807ed71417ba52358dfe6609c040e606260b056e0f7b1422d0bdf99）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md（获取于 2026-10-20T04:33:21Z；SHA-256：ea91d9df443f0dc23a7cf8f53e91adc0ac187c8472e8bfbe0b14bb3ed779083d）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/eval_pipeline/README.md（获取于 2026-10-20T04:33:22Z；SHA-256：13bd46be73db879e77e073368c9a67fa308878074901bf0a43190a8754057704）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/eval_pipeline/run_judge.py（获取于 2026-10-20T04:33:22Z；SHA-256：6dc1ca1812a15b72ebf11145d53dddbda770b31b7a9df2093c0746cbc2a25598）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/trajectory_collection/README.md（获取于 2026-10-20T04:33:22Z；SHA-256：8044300c8f0a28ee1ebbce35294769b2837a287554dfa18c270d85251f582d4c）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/trajectory_collection/ubuntu/README.md（获取于 2026-10-20T04:33:22Z；SHA-256：c41a25d24a74a01cbb809df70edc0dacce8cd6a2bb0c34a77413269713bf7ee7）
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/benchmarking_analysis/README.md（获取于 2026-10-20T04:33:23Z；SHA-256：99c9a201fab38897465f439688326bef7789b76dc92bd3f4555f4f252f47be8a）

---

## OSUniverse

OSUniverse 是面向任务的桌面评测基准，用于评测视觉驱动的多模态 GUI 导航智能体在操作系统应用中的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-agentsea-osuniverse/
- 原始来源：https://github.com/agentsea/osuniverse
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、沙箱
- 证据核查日期：2026-11-04T13:12:04Z
- ID：github:agentsea/osuniverse

- 完整记录 JSON：https://awesomecua.com/resources/github-agentsea-osuniverse/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/agentsea/osuniverse/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/agentsea/osuniverse/HEAD/README.md（获取于 2026-11-04T13:12:04Z；SHA-256：058441b402477e39dde9634cae443d24038f082670d4f0859a686d656db9fe23）
- https://raw.githubusercontent.com/agentsea/osuniverse/HEAD/LICENSE（获取于 2026-11-04T13:22:27Z；SHA-256：4aec50b8ad158f4eff3d07be4781897c35f7c84a180f3a879479a631a1f99d56）

---

## OSWorld GPT-4o-mini Benchmark Evaluation

在 OSWorld 桌面自动化任务上评测 GPT-4o-mini，对比仅截图、辅助功能树和 Set-of-Mark 三种观察模式。

- 目录页面：https://awesomecua.com/zh/resources/github-suraj-ranganath-osworld-gpt4o-mini-benchmark/
- 原始来源：https://github.com/suraj-ranganath/osworld-gpt4o-mini-benchmark
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、GUI 定位、界面理解
- 证据核查日期：2026-11-04T15:03:37Z
- ID：github:suraj-ranganath/osworld-gpt4o-mini-benchmark

- 完整记录 JSON：https://awesomecua.com/resources/github-suraj-ranganath-osworld-gpt4o-mini-benchmark/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/suraj-ranganath/osworld-gpt4o-mini-benchmark/HEAD/README.md（获取于 2026-11-04T15:03:37Z；SHA-256：d492b408c3be96fe63b20ae62a840d5b626bd32208fc454dca9325ae78b20b51）

---

## OSWorld-Human

提供人类参考轨迹和评分代码，用于衡量计算机使用智能体完成 OSWorld 任务时的操作效率。

- 目录页面：https://awesomecua.com/zh/resources/github-wuklab-osworld-human/
- 原始来源：https://github.com/WukLab/osworld-human
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、效率、工作流
- 证据核查日期：2026-10-17T03:59:54Z
- ID：github:wuklab/osworld-human

### 范围记录

The repository publishes per-application reference JSON files and score.py. It explicitly states that these evaluation solutions should not be used for training. No root code or data-license declaration was found; no license is inherited from OSWorld, and the score script was not executed.

- 完整记录 JSON：https://awesomecua.com/resources/github-wuklab-osworld-human/record.json

### 结构化规格

- 动作 / 输出：efficiency scores
- 评测方式：The scorer consumes OSWorld results and a specified maximum step budget; the README distinguishes single-action and grouped-action WES+ and WES-.
- 侧重：action efficiency relative to humans
- 观测：OSWorld result trajectories, human reference actions
- 任务设置：离线

#### 数量记录

未记录数量。

Reference solutions are published for evaluation and expressly discouraged for training. No task count is inferred from file count.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/WukLab/osworld-human/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：35c2f4dbed9d9bfc57f4c5a3f2fd70d313d6b463403b482c2fd4066d27b02cc1）
- https://api.github.com/repos/WukLab/osworld-human（获取于 2026-10-17T03:59:54Z；SHA-256：21c86601da6e77a3326fbcd143e3c5d9a033cd59e6e13973250966dff6f51ae9）
- https://api.github.com/repos/WukLab/osworld-human/git/trees/main?recursive=1（获取于 2026-10-17T03:59:55Z；SHA-256：c7b958d7a075adf5d282be08b68ad2b090568da342d4cb4b501ae808e54d0053）

---

## OSWorld-Science

在按领域划分的虚拟机中运行科学软件操作智能体，并通过任务专用的可执行评估器检查应用状态和交付成果的基准框架。

- 目录页面：https://awesomecua.com/zh/resources/github-discoailab-osworld-science/
- 原始来源：https://github.com/DiscoAILab/OSWorld-Science
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows
- 主题：评测、科学工作流
- 证据核查日期：2026-10-18T12:33:40Z
- ID：github:discoailab/osworld-science

### 范围记录

The repository holds the osworld_science package (CLI, VM control, agents, evaluators), VM build scripts and tests; task data and VM images are downloaded from the gated Hugging Face dataset, and the inspected tree contains no data/ files. The built-in prompt agent follows the OSWorld PromptAgent pattern (screenshot in, pyautogui code out); a Kimi tool-calling agent is vendored from xlang-ai/OSWorld under Apache-2.0. The paper builds task images on Ubuntu, and its ANSYS configuration runs on Windows; the README says that Windows image cannot be redistributed and the EEGLAB image is not yet published. The repository LICENSE is CC BY 4.0; scientific software and vendored components keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-discoailab-osworld-science/record.json

### 结构化规格

- 动作 / 输出：pyautogui code (built-in prompt agent), tool calls (vendored Kimi agent)
- 评测方式：Task-specific executable evaluators (JSON, CSV, artifact, R, SQL, Slicer and Praat checks plus author-provided scientific checks) inspect application states and collected deliverables and can award partial credit; the report command exports PASS/FAIL/VOID counts, scores, steps and costs.
- 侧重：scientific-software workflows, combined GUI and command-line interaction
- 观测：screenshots
- 任务设置：交互式

#### 数量记录

- 146 个任务 — full benchmark reported in the paper, seven scientific domains（来源报告；来源：https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md）

The README states that 83.6% of tasks also allow CLI access and 16.4% are GUI-only under the recorded configurations. The published dataset includes answer keys (the private/ folder is hidden from the solver, not access-controlled), so results from models that may have trained on it are not held-out measurements. Record the code revision, task data revision, VM image, model and agent when comparing scores.

### 许可证信息

- 代码：CC-BY-4.0 — https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md（获取于 2026-10-18T12:33:40Z；SHA-256：5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057）
- https://api.github.com/repos/DiscoAILab/OSWorld-Science/git/trees/25483148138b235212ee75c660a63e5b7bde6072?recursive=1（获取于 2026-10-18T12:33:40Z；SHA-256：470ffe57b8ce4baab4b7849aa6c01450491142c7d8e16853f2e8d91c73cbff71）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/25483148138b235212ee75c660a63e5b7bde6072/src/osworld_science/agents/prompt_agent/agent.py（获取于 2026-10-18T12:32:27Z；SHA-256：59571f205d945c2a4a2eaec84bf40e681c5de302182acaafe61f0481d9de52e7）
- https://arxiv.org/html/2609.39903v1（获取于 2026-10-18T12:32:28Z；SHA-256：b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/LICENSE（获取于 2026-10-18T12:34:15Z；SHA-256：97d24386ff776d7160b87031b259a942bd03c9939796cab6724ad5d17d2cf785）

---

## pantheon-webarena

pantheon-webarena 将容器化 WebArena 环境与重置、健康检查和并行评测工具打包，供网页智能体使用。

- 目录页面：https://awesomecua.com/zh/resources/github-pantheon-auto-pantheon-webarena/
- 原始来源：https://github.com/pantheon-auto/pantheon-webarena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、沙箱
- 证据核查日期：2026-11-04T13:12:31Z
- ID：github:pantheon-auto/pantheon-webarena

- 完整记录 JSON：https://awesomecua.com/resources/github-pantheon-auto-pantheon-webarena/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/pantheon-auto/pantheon-webarena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/pantheon-auto/pantheon-webarena/HEAD/README.md（获取于 2026-11-04T13:12:31Z；SHA-256：55319554f01e438794a36db4d2ace28aa93576302a9cdf350d4c4f68a1261316）
- https://raw.githubusercontent.com/pantheon-auto/pantheon-webarena/HEAD/LICENSE（获取于 2026-11-04T13:41:33Z；SHA-256：c2ea39d996dbcc54d8717f5a6bfb0ad98e6f95e0a9236522813ffe902b0a9d8e）

---

## Pathproof

优先在本地运行的 AI 辅助网站回归问题发现套件，支持确定性的 Playwright 重放。

- 目录页面：https://awesomecua.com/zh/resources/github-mikulabc-pathproof/
- 原始来源：https://github.com/mikulabc/pathproof
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、录制、网页导航
- 证据核查日期：2026-11-04T17:20:53Z
- ID：github:mikulabc/pathproof

- 完整记录 JSON：https://awesomecua.com/resources/github-mikulabc-pathproof/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/mikulabc/pathproof/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/mikulabc/pathproof/main/README.md（获取于 2026-11-04T17:20:53Z；SHA-256：e9190bfe417d812dd1400b383825d3493c5d9cd0d6c18d0af362ee995bf6847c）
- https://raw.githubusercontent.com/mikulabc/pathproof/HEAD/LICENSE（获取于 2026-11-04T17:26:34Z；SHA-256：0f05ce2a2dc649eae29589e5d0b404e5deb2efdd695ee53dd3330ae3a1a07819）

---

## Persona UX Test

使用仅通过渲染画面交互的隔离 AI 用户角色，对网页和桌面用户界面进行盲测。

- 目录页面：https://awesomecua.com/zh/resources/github-ericwong5021-persona-ux-test/
- 原始来源：https://github.com/Ericwong5021/persona-ux-test
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、界面设计、网页导航
- 证据核查日期：2026-11-04T16:51:52Z
- ID：github:ericwong5021/persona-ux-test

- 完整记录 JSON：https://awesomecua.com/resources/github-ericwong5021-persona-ux-test/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Ericwong5021/persona-ux-test/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Ericwong5021/persona-ux-test/HEAD/README.md（获取于 2026-11-04T16:51:52Z；SHA-256：00d44c55a14acddbf8145b03bc72d488f341e1bf038166b17327a49a6e4748d1）
- https://raw.githubusercontent.com/Ericwong5021/persona-ux-test/HEAD/LICENSE（获取于 2026-11-04T16:56:30Z；SHA-256：fbffb26ca0f84d12c2732f660db235a5f8a9ef7a6d67f21e295ef3a1d8f646dd）

---

## pms-race

面向操作传统物业管理网页 UI 的计算机使用智能体的并发评测基准，用于衡量竞态条件和重复预订。

- 目录页面：https://awesomecua.com/zh/resources/github-lgoyal6-pms-race/
- 原始来源：https://github.com/lgoyal6/pms-race
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航、工作流
- 证据核查日期：2026-11-04T17:20:47Z
- ID：github:lgoyal6/pms-race

- 完整记录 JSON：https://awesomecua.com/resources/github-lgoyal6-pms-race/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/lgoyal6/pms-race/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lgoyal6/pms-race/main/README.md（获取于 2026-11-04T17:20:47Z；SHA-256：e7f8684019174fc6773fbea1a164c41251b506f9a7dadcc2aeb82023aa9e92cb）
- https://raw.githubusercontent.com/lgoyal6/pms-race/HEAD/LICENSE（获取于 2026-11-04T17:26:34Z；SHA-256：02b9a6608439a3f78a537bce3d2dbb908d6931eb1268a83faab35c5aa11b395b）

---

## Pointerbench

Pointerbench 评测计算机使用模型能否根据指令在截图中定位目标，三个子集涵盖电子表格、文本和专业应用界面。

- 目录页面：https://awesomecua.com/zh/resources/github-warmwindos-pointerbench/
- 原始来源：https://github.com/warmwindOS/pointerbench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、GUI 定位、界面理解
- 证据核查日期：2026-11-09T06:16:33Z
- ID：github:warmwindos/pointerbench

### 范围记录

The repository contains evaluation scripts and metadata; full evaluation requires screenshots from Hugging Face. The source states that dataset images and annotations use CC BY 4.0 and evaluation scripts use MIT.

- 完整记录 JSON：https://awesomecua.com/resources/github-warmwindos-pointerbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/warmwindOS/pointerbench/HEAD/README.md（获取于 2026-11-09T06:16:33Z；SHA-256：dd06eec4f0b9b6f58424c0790a7fd16dad51b458b1b0909af920ea8235f381a6）

---

## PoisonPage

对抗性测试平台，展示针对 AI 购物网页智能体的间接提示词注入和 API 密钥外泄。

- 目录页面：https://awesomecua.com/zh/resources/github-redbotster-poisonpage/
- 原始来源：https://github.com/redbotster/poisonpage
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-04T16:51:51Z
- ID：github:redbotster/poisonpage

- 完整记录 JSON：https://awesomecua.com/resources/github-redbotster-poisonpage/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/redbotster/poisonpage/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/redbotster/poisonpage/HEAD/README.md（获取于 2026-11-04T16:51:51Z；SHA-256：cfa803f57577b12bc9ff55f21a0c64d85848007ad4e7b18f38269875b3e25705）
- https://raw.githubusercontent.com/redbotster/poisonpage/HEAD/LICENSE（获取于 2026-11-04T16:56:30Z；SHA-256：ee6b77bc820538f93662bb63bd25c3ed5fe60a5728db18b0cad2d9e4ba9ae3c8）

---

## pptxgym (CUA-Gym.pptx)

从真实 PowerPoint 演示文稿中合成可验证的计算机使用强化学习任务，并对其评分。

- 目录页面：https://awesomecua.com/zh/resources/github-lyt060814-cua-gym-pptx/
- 原始来源：https://github.com/Lyt060814/CUA-Gym.pptx
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、强化学习、数据生成、工作流
- 证据核查日期：2026-11-04T16:51:56Z
- ID：github:lyt060814/cua-gym.pptx

- 完整记录 JSON：https://awesomecua.com/resources/github-lyt060814-cua-gym-pptx/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Lyt060814/CUA-Gym.pptx/HEAD/README.md（获取于 2026-11-04T16:51:56Z；SHA-256：37a73c626e59c6b299ad497a9131d31d07ddfa32ba2571b3b4f602fc6fbf553c）

---

## Precision CUA Bench

用于评估代码编辑器中像素级精确光标定位的资源。

- 目录页面：https://awesomecua.com/zh/resources/github-microsoft-precision-cua-bench/
- 原始来源：https://github.com/microsoft/precision-cua-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:40:52Z
- ID：github:microsoft/precision-cua-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-precision-cua-bench/record.json

### 结构化规格

- 动作 / 输出：pixel (x,y) cursor coordinate
- 评测方式：The inspected evaluator scales target boxes from a 1000×1000 reference grid into image pixels and tests pixel predictions, allowing ±10 pixels around the center along any target dimension narrower than 1 pixel after scaling. It reports cumulative hit accuracy by turn (earlier hits remain correct), miss distances, any-turn hit rate, and a correction rate whose denominator is all successfully processed samples. The default budget is five turns; retain prompt/feedback variant, turn budget, and processed/skipped coverage.
- 侧重：pixel-precise editor cursor placement, multi-turn visual self-correction
- 观测：code-editor screenshot, cursor-location instruction, red-cross feedback marking previous incorrect prediction
- 任务设置：离线

#### 数量记录

未记录数量。

The release has four editor/theme JSONL partitions (Cursor/VS Code × dark/light) and screenshot files. The four editor/theme partitions (Cursor/VS Code × dark/light) are separate from train/test splits and task totals. README’s initial field table calls bbox pixel coordinates, but the evaluation-format section and actual ratio_h/ratio_w=dimension/1000 code use normalized target boxes; profile follows the inspected evaluator and retains the inconsistency. MIT is recorded for repository code only.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://github.com/microsoft/precision-cua-bench（获取于 2026-10-16T06:40:52Z；SHA-256：23d0dc8ea0a10c080cf8ae32121eade2785ae923a6b0d853d166c94c195e789b）
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：84ad4fb798abb776dce813cf4dab296d6e03248d8ae29388e1f06cccd27d1241）
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/eval/test_allturns_api.py（获取于 2026-10-17T14:21:08Z；SHA-256：1fda7c3980fe7a7c373478eda6ecfabff227e92c2b1f19c6fe903b408f583797）
- https://api.github.com/repos/microsoft/precision-cua-bench/git/trees/main?recursive=1（获取于 2026-10-17T14:14:06Z；SHA-256：ede84e3dda47f80fada4234caa2423db08e21ff7667a37599c03aae657b2f84b）
- https://export.arxiv.org/api/query?id_list=2603.12823%2C2603.14707%2C2603.15039%2C2603.17357%2C2603.18429%2C2603.19191%2C2603.24440%2C2603.25226%2C2603.25864%2C2603.26211%2C2603.26648%2C2603.29318%2C2604.01535%2C2604.02947%2C2604.04399%2C2604.05477%2C2604.06126%2C2604.06182%2C2604.06367%2C2604.07429%2C2604.08455%2C2604.08516%2C2604.08523%2C2604.09155%2C2604.09574%2C2604.09587%2C2604.09815%2C2604.09937%2C2604.11259%2C2604.11784%2C2604.12284%2C2604.13019%2C2604.13822%2C2604.14113%2C2604.14262%2C2604.14956%2C2604.15093%2C2604.15309%2C2604.17817%2C2604.17821%2C2604.18860%2C2604.24964%2C2604.25380%2C2604.25562%2C2604.27151%2C2604.27253%2C2604.27776%2C2605.00642%2C2605.06393%2C2605.06664&max_results=50（获取于 2026-10-16T06:32:00Z；SHA-256：4d09ebfb093e43a4c44adef86c8fa8374f90d907fc33bd8e12a1315e62d5a583）
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383）

---

## Preflight-Bench

Preflight-Bench 评测计算机使用智能体在异步 UI 更新情况下的点击前过时状态检查和页面加载同步能力。

- 目录页面：https://awesomecua.com/zh/resources/github-multimodal-ai-engineering-preflight-bench/
- 原始来源：https://github.com/multimodal-ai-engineering/preflight-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、鲁棒性、效率、状态追踪
- 证据核查日期：2026-11-04T14:20:16Z
- ID：github:multimodal-ai-engineering/preflight-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-multimodal-ai-engineering-preflight-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/multimodal-ai-engineering/preflight-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/multimodal-ai-engineering/preflight-bench/HEAD/README.md（获取于 2026-11-04T14:20:16Z；SHA-256：1dabe4fb0ef00a19662e4fbe86eb35a1f65cbed045d60a9c0a97a8533f268535）
- https://raw.githubusercontent.com/multimodal-ai-engineering/preflight-bench/HEAD/LICENSE（获取于 2026-11-04T14:23:33Z；SHA-256：5593575c475df8fa83b077b215b10aa5dde3bf509b5cfccf3e9861a3ce261317）

---

## REFRACT-PPTX

面向可编辑 PowerPoint 演示文稿的智能体引导生成与多维视觉评测基准。

- 目录页面：https://awesomecua.com/zh/resources/github-haikong-lu1206-refract-pptx/
- 原始来源：https://github.com/Haikong-Lu1206/REFRACT-PPTX
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、界面设计、工作流、数据生成
- 证据核查日期：2026-11-04T17:55:20Z
- ID：github:haikong-lu1206/refract-pptx

- 完整记录 JSON：https://awesomecua.com/resources/github-haikong-lu1206-refract-pptx/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Haikong-Lu1206/REFRACT-PPTX/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Haikong-Lu1206/REFRACT-PPTX/main/README.md（获取于 2026-11-04T17:55:20Z；SHA-256：fca6618c2d0f35cb3855a42e7f06af05ac4dc9ea79b45498373d3bc217104db2）
- https://raw.githubusercontent.com/Haikong-Lu1206/REFRACT-PPTX/HEAD/LICENSE（获取于 2026-11-04T17:59:57Z；SHA-256：105e52a70bbba9de980a2df15ae7f612abea138ea7379cf9ef2f56a5735e2f03）

---

## Resurf

Resurf 是确定性、可复现的测试环境，用于在真实的网页故障模式下评测 AI 浏览器智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-lightfeed-resurf/
- 原始来源：https://github.com/lightfeed/resurf
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、沙箱、鲁棒性
- 证据核查日期：2026-11-04T16:10:34Z
- ID：github:lightfeed/resurf

- 完整记录 JSON：https://awesomecua.com/resources/github-lightfeed-resurf/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/lightfeed/resurf/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lightfeed/resurf/HEAD/README.md（获取于 2026-11-04T16:10:34Z；SHA-256：91a449c93c0178ed90755f4eaa996f24891ad75bca15b8711e5611a008105d8c）
- https://raw.githubusercontent.com/lightfeed/resurf/HEAD/LICENSE（获取于 2026-11-04T16:13:33Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## RLG-ALE

RLG-ALE 用可检查的 Android 任务评估移动端图形界面智能体。页面展示了包含任务提示、截图、评估记录和可重置环境的示例过程。

- 目录页面：https://awesomecua.com/zh/resources/url-0596dd7e97fd30abaadc/
- 原始来源：https://gbox.ai
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、长任务、沙箱
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:0596dd7e97fd30abaadc

### 范围记录

The page describes Android 14 touch and text input, deterministic reset, and offline replay. It shows database and UI based task verifiers and offers on-premise deployment.

- 完整记录 JSON：https://awesomecua.com/resources/url-0596dd7e97fd30abaadc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://gbox.ai（获取于 2026-11-09T05:04:58Z；SHA-256：e6c97ad441aa403e653ac1ba3890c204ade900275a23a89636e149b62a2f849c）

---

## SaaS-Bench

涵盖 6 个领域、23 个自行托管的 SaaS 应用中的 106 个浏览器操作业务流程；每项任务由读取应用数据库的验证器评分，并给予部分分数。

- 目录页面：https://awesomecua.com/zh/resources/github-unipat-ai-saas-bench/
- 原始来源：https://github.com/UniPat-AI/SaaS-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工作流
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:unipat-ai/saas-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-unipat-ai-saas-bench/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：8cfab6fca80090adb47c4ef634f89eedd49a6204dbdc2b5b8e0d6f04c32db289）
- https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：971246559df3f118e367cb299d3544f94e7c3d30db39f05c0c164589af4f3a88）

---

## SafeArena

SafeArena 是将良性与有害任务配对、用于研究蓄意滥用风险的网页智能体基准。

- 目录页面：https://awesomecua.com/zh/resources/github-mcgill-nlp-safearena/
- 原始来源：https://github.com/McGill-NLP/safearena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T09:36:33Z
- ID：github:mcgill-nlp/safearena

- 完整记录 JSON：https://awesomecua.com/resources/github-mcgill-nlp-safearena/record.json

### 结构化规格

- 动作 / 输出：web interactions
- 评测方式：Task outcomes and the Agent Risk Assessment categories evaluate agent behavior on benign and harmful requests.
- 侧重：web-agent safety, task completion
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 250 个任务 — safe split（来源报告；来源：https://arxiv.org/abs/2503.04957）
- 250 个任务 — harmful split（来源报告；来源：https://arxiv.org/abs/2503.04957）

Use SafeArena-specific containers. The documented task splits require access approval.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/McGill-NLP/safearena/HEAD/README.md（获取于 2026-10-16T09:36:33Z；SHA-256：ae50121aa60ac26b32d8d6ad6f578f9091a81a3cb9ca28b98050bddee16c929a）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）

---

## Screen Point-and-Read / Tree-of-Lens

提供屏幕阅读基准和 Tree-of-Lens 实现，用于理解用户指示的区域及其布局上下文。

- 目录页面：https://awesomecua.com/zh/resources/github-ucsb-ai-screen-point-and-read/
- 原始来源：https://github.com/UCSB-AI/Screen-Point-and-Read
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-10-16T10:43:11Z
- ID：github:ucsb-ai/screen-point-and-read

### 范围记录

The canonical repository now belongs to UCSB-AI. Its README lists additional setup documentation and evaluation scripts as unfinished.

- 完整记录 JSON：https://awesomecua.com/resources/github-ucsb-ai-screen-point-and-read/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/UCSB-AI/Screen-Point-and-Read/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/eric-ai-lab/Screen-Point-and-Read/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：7567287ceee0ad2d3d5605abb44ac50463c1008f9b6309393695763cf2ce89bb）
- https://raw.githubusercontent.com/UCSB-AI/Screen-Point-and-Read/HEAD/LICENSE（获取于 2026-10-16T10:48:42Z；SHA-256：4748fb7d92f7a3a2a4a93353db96f6a2df547e5ea9ae87afa811c5423e96f363）
- https://api.github.com/repos/eric-ai-lab/Screen-Point-and-Read（获取于 2026-10-17T14:14:01Z；SHA-256：868e18717ff76355c6552a5629b15de9fed1add1262fa5801ecabd7a7fb333d4）
- https://api.github.com/repos/UCSB-AI/Screen-Point-and-Read（获取于 2026-10-17T14:14:02Z；SHA-256：868e18717ff76355c6552a5629b15de9fed1add1262fa5801ecabd7a7fb333d4）

---

## ScreenLeak

ScreenLeak 是多模态评测基准，用于衡量连续屏幕录制数据中的敏感信息检测和个人身份信息脱敏。

- 目录页面：https://awesomecua.com/zh/resources/github-screenpipe-screenleak/
- 原始来源：https://github.com/screenpipe/screenleak
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、安全与防护、录制
- 证据核查日期：2026-11-04T14:02:42Z
- ID：github:screenpipe/screenleak

- 完整记录 JSON：https://awesomecua.com/resources/github-screenpipe-screenleak/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/screenpipe/screenleak/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/screenpipe/screenleak/HEAD/README.md（获取于 2026-11-04T14:02:42Z；SHA-256：e61c26ed059c81162a6bc38c91c7d4a2376b1ee3f3863fdab3cdccd7db116336）
- https://raw.githubusercontent.com/screenpipe/screenleak/HEAD/LICENSE（获取于 2026-11-04T14:07:16Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## SCUBA (Salesforce Computer Use Benchmark)

SCUBA 在企业 Salesforce CRM 工作流上评测计算机使用智能体，涵盖管理员配置、销售运营和服务任务。

- 目录页面：https://awesomecua.com/zh/resources/github-salesforceairesearch-scuba/
- 原始来源：https://github.com/SalesforceAIResearch/SCUBA
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、工作流、沙箱
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:salesforceairesearch/scuba

- 完整记录 JSON：https://awesomecua.com/resources/github-salesforceairesearch-scuba/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/SalesforceAIResearch/SCUBA/HEAD/LICENSE.txt
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SalesforceAIResearch/SCUBA/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：ff27b52a2386fd3599b70e8c834f6b392247465fe0d8b32d80cc634b95b08ce3）
- https://raw.githubusercontent.com/SalesforceAIResearch/SCUBA/HEAD/LICENSE.txt（获取于 2026-11-04T14:07:16Z；SHA-256：a32115015c1eea6186e519fa03ab3b77844170a75cf57ddbeb57f15dae44729a）

---

## showdown-clicks

General Agents 的离线点击基准：557 次 macOS 截图上的人工左键点击，分别配有指令和有效点击位置边界框，以预测点是否落框评分。

- 目录页面：https://awesomecua.com/zh/resources/url-863cc1744cd5d40418be/
- 原始来源：https://huggingface.co/datasets/generalagents/showdown-clicks
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：macOS、桌面
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T11:14:39Z
- ID：url:863cc1744cd5d40418be

### 范围记录

The card describes showdown-clicks as part of General Agents' showdown suite and a 5,679-click collection recorded in late 2024, of which only the 557-click showdown-clicks-dev subset is released; the remainder is not public. Screenshots range from 1280x800 to 1680x1050. The card's results table includes the publisher's own ace-control models. The card declares MIT and notes that screenshots may contain third-party content.

- 完整记录 JSON：https://awesomecua.com/resources/url-863cc1744cd5d40418be/record.json

### 结构化规格

- 动作 / 输出：single left-click coordinate
- 评测方式：A prediction counts as correct when the predicted click point falls inside the annotated bounding box of viable click locations; the card reports accuracy with bootstrapped 95% confidence intervals and latency.
- 侧重：instruction-conditioned click grounding, low-level desktop control
- 观测：macOS screenshots
- 任务设置：离线

#### 数量记录

- 557 次已标注的点击 — showdown-clicks-dev/data.csv (dev split)（计算得出）（来源：https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv）
- 5,679 次左键点击 — full showdown-clicks collection described by the card; not released（来源报告；来源：https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md）

The released CSV has 557 rows with unique IDs and screenshots, and columns for instruction, bounding box and image size. Only the dev subset is public, so scores on the full collection cannot be reproduced from the release.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md（获取于 2026-10-18T11:14:39Z；SHA-256：14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4）
- https://huggingface.co/api/datasets/generalagents/showdown-clicks（获取于 2026-10-18T11:14:40Z；SHA-256：b1a8a685e2bca74891afc030decdb65fc46d2f0a2d2842df1df24faa2999c678）
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv（获取于 2026-10-18T11:14:41Z；SHA-256：c13a190cdc2157438ec505778dfa21ebbce1b9f518d06b8d3ebb31737aeb5312）
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md（获取于 2026-10-18T11:14:39Z；SHA-256：14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4）

---

## Simulation Labs

行为 CI 关卡，让计算机使用智能体在每次部署时测试注册、结账和新用户引导流程。

- 目录页面：https://awesomecua.com/zh/resources/github-satyamdave-simulation-labs/
- 原始来源：https://github.com/SatyamDave/simulation-labs
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T16:51:42Z
- ID：github:satyamdave/simulation-labs

- 完整记录 JSON：https://awesomecua.com/resources/github-satyamdave-simulation-labs/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/SatyamDave/simulation-labs/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/SatyamDave/simulation-labs/HEAD/README.md（获取于 2026-11-04T16:51:42Z；SHA-256：e360f1e2412c948b74a59fdc1acb97614d434320dde40a907e44e03b79763552）
- https://raw.githubusercontent.com/SatyamDave/simulation-labs/HEAD/LICENSE（获取于 2026-11-04T16:56:30Z；SHA-256：63bd4dfe938bc995b052a01e20d2ccf0cdd8ccb5248ed1c0e45bde63733cb6c2）

---

## SMAN-Bench

SMAN-Bench（Mobile-Bench-v2）评估代码：AppAgent 和 Mobile-Agent-v2 运行器重放录制的 Android 页面，执行单路径、多路径、含噪和模糊任务，以步骤和任务成功率评分。

- 目录页面：https://awesomecua.com/zh/resources/github-gezelligheid0314-sman-bench/
- 原始来源：https://github.com/gezelligheid0314/SMAN-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、鲁棒性
- 证据核查日期：2026-10-20T07:38:59Z
- ID：github:gezelligheid0314/sman-bench

### 范围记录

SMAN-Bench is the title of the ICLR 2026 edition of the Mobile-Bench-v2 paper; that edition's proceedings PDF gives this repository as its code and data location, and the README's dataset badge links the Hugging Face release xwk123/MobileBench-v2, which holds the task data. The repository itself has code only, no task files. AppAgent runners draw numbered boxes for clickable and scrollable elements, taken from each recorded page's XML, onto the screenshot; Mobile-Agent-v2 runners (memory unit on, reflection off by default) receive the centre coordinates of the same elements. Single-path and ambiguous runs step through the ground-truth page sequence whatever the agent chooses; multi-path runs move through the recorded page graph according to the agent's actions (default limit 20 rounds) and succeed on reaching the goal page. Ambiguous runs prompt with the task's vague instruction and per-step instructions, or with the complete instruction. eval.py has scorers for single-path, multi-path and noisy runs, printing task success rate, action accuracy and action-type accuracy; the noisy scorer checks the ground-truth click or swipe coordinates against the predicted element's bounds and typed text by character-level F1 above 0.5. Model endpoints are set in config/config.yaml. The README shows an MIT badge, but the tree at the reviewed commit has no LICENSE file. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-gezelligheid0314-sman-bench/record.json

### 结构化规格

- 动作 / 输出：click a labelled element, scroll a labelled element in a direction, input text
- 评测方式：Predicted actions are mapped to the recorded action IDs of each page. Single-path runs are scored step by step against the ground-truth path (action accuracy, action-type accuracy, success only when every step matches); multi-path runs succeed when the agent's actions reach the goal page in the recorded page graph; noisy runs check ground-truth click and swipe coordinates against the predicted element's bounds and typed text by character-level F1.
- 侧重：single-path step accuracy, multi-path task completion, robustness to pop-ups and ads, ambiguous instructions
- 观测：recorded Android screenshots with element boxes drawn from the page XML, element centre coordinates (Mobile-Agent-v2 runner), task instructions
- 任务设置：离线

#### 数量记录

未记录数量。

The task files and counts belong to the Hugging Face data release; this repository contains the code. Scoring rules are taken from eval.py at the reviewed commit, which has no separate scorer for the ambiguous split.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README shows an MIT badge linking a LICENSE file, but the complete tree at the reviewed commit has no license file, so no grant is established.
  来源：https://api.github.com/repos/gezelligheid0314/SMAN-Bench/git/trees/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327?recursive=1

### 一手证据

- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/HEAD/readme.md（获取于 2026-10-20T07:38:59Z；SHA-256：73cdb1d20119322652fce8f475be5304efdc78ba9ce7162b282790646bc56a1e）
- https://api.github.com/repos/gezelligheid0314/SMAN-Bench/git/trees/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327?recursive=1（获取于 2026-10-20T04:19:28Z；SHA-256：e3b1edf5ebd8a3c4ece3fe55994678b01188bf8c8aed5ac3ebbd93a818eec0c8）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/readme.md（获取于 2026-10-20T04:20:09Z；SHA-256：73cdb1d20119322652fce8f475be5304efdc78ba9ce7162b282790646bc56a1e）
- https://proceedings.iclr.cc/paper_files/paper/2026/file/1b4279dc1ec8d0183c22528664d84459-Paper-Conference.pdf（获取于 2026-10-20T04:20:08Z；SHA-256：061442053b0487074fd3556a298e8e7a8715741c6f8939b31ead7b9326ffccb6）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/eval.py（获取于 2026-10-20T04:19:29Z；SHA-256：860f45a6ff49829b3e5ff6ad938862c7420d09bf41964340d87927f636bef45c）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_singlepath.py（获取于 2026-10-20T04:19:29Z；SHA-256：b49ccd022e82f2da2727ec9c048cc5c6eaa9edd0c8953d17e06548bc2859c232）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_multipath.py（获取于 2026-10-20T04:21:04Z；SHA-256：fe4dffc17866473e8c26871ca71d12ce2c04187e17df80fa6b1be232b7fbd571）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_ambiguous.py（获取于 2026-10-20T04:21:05Z；SHA-256：0640d5cba898e72764c49039fc837c7b4846b868b3c4d94300d540c62a7f00c0）
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/mobileagent/mobileagent_singlepath.py（获取于 2026-10-20T04:19:29Z；SHA-256：f7ec44782984c911ef7c0472fdedccf4286d55ed08f9d072f2599f651a567565）

---

## solari-playtest

Solari 上的自主游戏测试智能体和评测测试框架，从 Git 构建网页游戏，并在真实浏览器中测试玩法。

- 目录页面：https://awesomecua.com/zh/resources/github-moazessam376-dev-solari-playtest/
- 原始来源：https://github.com/moazessam376-dev/solari-playtest
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T18:11:32Z
- ID：github:moazessam376-dev/solari-playtest

- 完整记录 JSON：https://awesomecua.com/resources/github-moazessam376-dev-solari-playtest/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/moazessam376-dev/solari-playtest/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/moazessam376-dev/solari-playtest/main/README.md（获取于 2026-11-04T18:11:32Z；SHA-256：9c34786a1969fdc2d9811edfce4b12c99ff6f07082ac178c5617319c97cebf6d）
- https://raw.githubusercontent.com/moazessam376-dev/solari-playtest/HEAD/LICENSE（获取于 2026-11-04T18:16:07Z；SHA-256：11d02dddb55d18a2ef39470fadd7fdd7a8aedf88bec62eea1426a76c338e4541）

---

## Spider2-V

在数据科学和工程工作流程中评估视觉智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-spider2-v/
- 原始来源：https://github.com/xlang-ai/Spider2-V
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、工作流
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:xlang-ai/spider2-v

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-spider2-v/record.json

### 结构化规格

- 动作 / 输出：PyAutoGUI mouse and keyboard actions
- 评测方式：Task-specific evaluation functions are invoked after agent execution.
- 侧重：data-science workflows, multi-application task completion
- 观测：screenshots, accessibility trees, set-of-marks views
- 任务设置：交互式

#### 数量记录

- 494 个任务定义 — evaluation_examples/test_all.json（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/evaluation_examples/test_all.json）
- 20 个应用 — README task-suite coverage（来源报告；来源：https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md）

Counted unique task IDs in the full manifest. Verbose versus abstract instructions and account versus non-account tasks form different subsets. The Ubuntu VM and external-account requirements are part of the protocol; no accounts or environments were provisioned.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：e3edf30ab45da16382b46d8c542607c1bbbfcf077b6df57a2decf938fc84ff0f）
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：e3edf30ab45da16382b46d8c542607c1bbbfcf077b6df57a2decf938fc84ff0f）
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/evaluation_examples/test_all.json（获取于 2026-10-17T02:06:30Z；SHA-256：338dd38ba7047b0cf6dbc68f3f7b9374f962708fa2dadcc8d126c232dfc31746）
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）

---

## SWE-bench Multimodal

针对视觉 JavaScript 和 TypeScript 软件的问题解决基准；每项任务的问题描述或补丁包含截图、设计稿或渲染图，并用仓库单元测试检查修复结果。

- 目录页面：https://awesomecua.com/zh/resources/url-cb7f3bdb832d533c96b0/
- 原始来源：https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：评测、界面理解
- 证据核查日期：2026-10-18T11:11:00Z
- ID：url:cb7f3bdb832d533c96b0

### 范围记录

Adjacent scope: agents resolve issues by producing code patches, and every instance requires interpreting interface screenshots, recordings or renderings of front-end software; code-only operation is allowed. The card's prose describes 612 issue-pull request pairs (102 dev, 510 test) from 17 repositories, while the card's dataset_info and the Hub dataset viewer report 100 dev and 480 test rows for the released Parquet files; the published rows are counted here and the difference is unexplained. The card's eval.yaml describes 517 issues with visual elements and the paper abstract reports 617 task instances. The card declares no data license, so data terms remain unknown. An older copy exists at princeton-nlp/SWE-bench_Multimodal. Evaluation uses the SWE-bench harness and per-instance Docker images; nothing was run here.

- 完整记录 JSON：https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/record.json

### 结构化规格

- 动作 / 输出：code patch submission
- 评测方式：Submitted patches are applied in per-instance Docker images and judged by the repository's FAIL_TO_PASS and PASS_TO_PASS unit tests through the SWE-bench harness; the reported metric is the percentage of instances resolved.
- 侧重：issue resolution in visual JavaScript/TypeScript software, interpreting screenshots and renderings in issue reports
- 观测：repository checkout, issue text, issue and patch images
- 任务设置：离线

#### 数量记录

- 480 个任务实例 — Hub test split as released (dataset_info and dataset viewer)（来源报告；来源：https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal）
- 100 个任务实例 — Hub dev split as released (dataset_info and dataset viewer)（来源报告；来源：https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal）
- 612 组 issue–pull request 对 — dataset card prose (102 dev and 510 test from 17 repositories)（来源报告；来源：https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md）

The released Parquet rows (100 dev, 480 test) differ from the card's prose totals (102 dev, 510 test); record the Hub revision and split with a score. The dev and test splits use disjoint repositories. Some carbon-design-system accessibility tests fetch a rule engine over the network at evaluation time, so their verdicts can vary between runs.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md（获取于 2026-10-18T11:11:00Z；SHA-256：dbff146d57bbc200cb584c300d045bc81ab738cec0c07ae405e4f5ebbf5dc6ea）
- https://huggingface.co/api/datasets/SWE-bench/SWE-bench_Multimodal（获取于 2026-10-18T11:11:01Z；SHA-256：5f1503ae26a328a37c4d3f67d1b73b0d64e3dd80534eed4604a8b65944bcd6dc）
- https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal（获取于 2026-10-18T11:11:05Z；SHA-256：8347894b2ea01e61e4d74fbbeaeacd7809ae0bef9beabdb74c16636cfbd9a3fc）

---

## SWEeper-Bench

SWEeper-Bench 评测交互式 GUI 和浏览器智能体能否自主发现并复现开源软件中的 200 个真实缺陷。

- 目录页面：https://awesomecua.com/zh/resources/github-zlab-princeton-sweeper-bench/
- 原始来源：https://github.com/zlab-princeton/sweeper-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、自动化、界面理解
- 证据核查日期：2026-11-04T14:02:44Z
- ID：github:zlab-princeton/sweeper-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-zlab-princeton-sweeper-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/zlab-princeton/sweeper-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/zlab-princeton/sweeper-bench/HEAD/README.md（获取于 2026-11-04T14:02:44Z；SHA-256：2e320cee08f5bd1f28ceb1ea6caedefa1e5e4d5997da2f2b2eb2dbbbcd5bfcb4）
- https://raw.githubusercontent.com/zlab-princeton/sweeper-bench/HEAD/LICENSE（获取于 2026-11-04T14:07:19Z；SHA-256：f10983fa3e28ea44e61f702afc7e78f17182fd6322142c92a78df82a1c4ea5f7）

---

## taskproof

taskproof 是开源 CI 测试框架，用于测试真实的 AI 计算机使用智能体和浏览器智能体能否在实时网站上完成任务。

- 目录页面：https://awesomecua.com/zh/resources/github-taskproof-taskproof/
- 原始来源：https://github.com/taskproof/taskproof
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T16:30:10Z
- ID：github:taskproof/taskproof

- 完整记录 JSON：https://awesomecua.com/resources/github-taskproof-taskproof/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/taskproof/taskproof/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/taskproof/taskproof/HEAD/README.md（获取于 2026-11-04T16:30:10Z；SHA-256：eede2b1fb3647ae0aafc67750afb49ef2587a08f6abbf2a2f26746efac22348c）
- https://raw.githubusercontent.com/taskproof/taskproof/HEAD/LICENSE（获取于 2026-11-04T16:34:22Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## TestPilot

智能体驱动的端到端网页测试平台，在实时浏览器中执行自然语言测试用例。

- 目录页面：https://awesomecua.com/zh/resources/github-h0ngza1-testpilot/
- 原始来源：https://github.com/H0nGzA1/testpilot
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、自动化
- 证据核查日期：2026-11-04T17:55:25Z
- ID：github:h0ngza1/testpilot

- 完整记录 JSON：https://awesomecua.com/resources/github-h0ngza1-testpilot/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/H0nGzA1/testpilot/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/H0nGzA1/testpilot/main/README.md（获取于 2026-11-04T17:55:25Z；SHA-256：09ed9858e4b0c344bcdfdb86691769c3d624b0e08a6b00d2e11c748a9d308e31）
- https://raw.githubusercontent.com/H0nGzA1/testpilot/HEAD/LICENSE（获取于 2026-11-04T17:59:57Z；SHA-256：d684420ddbca78cb7d310eb283ea53ff24ea504ff1716ad0ce175a7172e25fc9）

---

## TurkingBench

基于众包 HTML 任务的网页智能体基准，含 32.2K 个实例、158 项任务，并提供将模型回答映射为页面操作的评估框架。

- 目录页面：https://awesomecua.com/zh/resources/url-808a22468ee0bf565d6e/
- 原始来源：https://turkingbench.github.io
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测、界面理解
- 证据核查日期：2026-11-09T05:05:16Z
- ID：url:808a22468ee0bf565d6e

### 范围记录

The project page links to a paper and code. Its task interfaces include text boxes and radio buttons.

- 完整记录 JSON：https://awesomecua.com/resources/url-808a22468ee0bf565d6e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://turkingbench.github.io（获取于 2026-11-09T05:05:16Z；SHA-256：f8282a1bfe1b6105cc3a3eb179d2e9391d2114f4f3f9646ba069b099b79cebcf）

---

## UI-FaultLab

UI-FaultLab 评测视觉 UI 测试工作流中，可审计的智能体与应用故障归因。

- 目录页面：https://awesomecua.com/zh/resources/github-kakoyvostorg-ui-faultlab/
- 原始来源：https://github.com/kakoyvostorg/ui-faultlab
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：评测、可观测性、鲁棒性
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:kakoyvostorg/ui-faultlab

- 完整记录 JSON：https://awesomecua.com/resources/github-kakoyvostorg-ui-faultlab/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/kakoyvostorg/ui-faultlab/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/kakoyvostorg/ui-faultlab/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：584fdc7fef79a8f10fabfcd488468f6d1b17ac457df9984bec96a50d2d8866b7）
- https://raw.githubusercontent.com/kakoyvostorg/ui-faultlab/HEAD/LICENSE（获取于 2026-11-04T14:23:39Z；SHA-256：ee8087b8f4ec2634529d7d372f1d00f3ed2d356e47869659d2e22e0859a28532）

---

## UI-I2E-Bench

源自 UI-E2I-Synth 的 GUI 元素定位基准，包含 1,477 条针对移动端、桌面和网页截图的显式与隐式指令，每条均配有目标元素边界框和元素类型。

- 目录页面：https://awesomecua.com/zh/resources/url-c08566be0d973ec40c48/
- 原始来源：https://huggingface.co/datasets/vaundys/I2E-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-19T07:08:32Z
- ID：url:c08566be0d973ec40c48

### 范围记录

The Hub card has only metadata (apache-2.0, English, 1K<n<10K). The UI-I2E-Bench leaderboard page in microsoft/FIVE-UI-Evol links this dataset, the UI-E2I-Synth paper and the code, and describes the benchmark as using implicit instructions and long-tail element types with realistic element-to-screen size ratios. Each annotation row gives an image path, instruction, bounding box, element type, source and quality flags. The evaluation script in that repository counts a prediction correct when the predicted point falls inside the box and reports accuracy by source, element type and instruction type. The apache-2.0 declaration does not settle rights to the screenshots.

- 完整记录 JSON：https://awesomecua.com/resources/url-c08566be0d973ec40c48/record.json

### 结构化规格

- 动作 / 输出：point prediction
- 评测方式：Point-in-box accuracy against the annotated bounding box, broken down by source platform, element type and instruction type (UI-E2I-Synth/i2e-bench-eval.py).
- 侧重：GUI element grounding from explicit and implicit instructions
- 观测：screenshots, natural-language instructions
- 任务设置：离线

#### 数量记录

- 1,477 条已标注的指令 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）
- 1,161 张被引用的不重复截图 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）
- 705 条移动端指令 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）
- 519 条桌面指令 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）
- 253 条 Web 指令 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）
- 917 条隐式指令 — I2E-bench-annotation.jsonl at Hub revision ecfcc01（计算得出）（来源：https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl）

Counts were computed from the pinned annotation file; source counts sum to the instruction total, and implicit plus 560 explicit instructions do too. The Hub manifest has 1,509 PNG files in five folders, more than the 1,161 screenshots the annotations reference. No split is declared.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/vaundys/I2E-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/vaundys/I2E-Bench/revision/ecfcc016d92c87ce6c194dba1b3faffabf7db51d（获取于 2026-10-19T07:08:32Z；SHA-256：cf382038d5dc2c54bb2353b50fad311ff8fab34bab7433fe26a66147ef44607c）
- https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl（获取于 2026-10-19T07:08:32Z；SHA-256：56f69897e22e683d82f015e698f33e35d19de25d77eeaba992039767efe63981）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html（获取于 2026-10-19T07:08:31Z；SHA-256：9ddfcc1e1898d61fa01197cdb0fafee7990cc92e3671c229ae83634330c66814）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/i2e-bench-eval.py（获取于 2026-10-19T07:08:31Z；SHA-256：504f491e65b1d242644857d5c1ed2cdf86a6c214f252332d4b84a4f31adc6dbc）
- https://huggingface.co/datasets/vaundys/I2E-Bench/raw/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/README.md（获取于 2026-10-19T07:08:32Z；SHA-256：718a10fa2b6c81adfe66e848f13cd9672364685e2ab638ef67c3892a1cb74d8a）
- https://huggingface.co/api/datasets/vaundys/I2E-Bench/revision/ecfcc016d92c87ce6c194dba1b3faffabf7db51d（获取于 2026-10-19T07:08:32Z；SHA-256：cf382038d5dc2c54bb2353b50fad311ff8fab34bab7433fe26a66147ef44607c）

---

## UI-NEXUS

组合式移动智能体基准，包含 100 个跨 AndroidWorld 模拟器中的本地工具应用及中英文在线服务应用串联操作的任务模板，并提供模拟器状态设置工具。

- 目录页面：https://awesomecua.com/zh/resources/github-starwalkin-ui-nexus/
- 原始来源：https://github.com/StarWalkin/UI-NEXUS
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、长任务
- 证据核查日期：2026-10-20T07:41:49Z
- ID：github:starwalkin/ui-nexus

### 范围记录

Official repository of the paper "Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System" (named by title in the README). The task files are data/offline_English.csv (50 English tasks for UI-NEXUS-Anchor, the local utility app subset), data/online_Chinese.csv (25 tasks) and data/online_English.xlsx (25 tasks); each row has a category (Simple Concatenation, Context Transition or Deep Dive), the apps involved, a template and one instantiation. UI-NEXUS-Anchor reuses AndroidWorld's 20 apps on a Pixel 6, API 33 emulator; the repository bundles adapted copies of AndroidWorld and AndroidEnv (each with its Apache-2.0 license text), and the README also credits SPA-Bench's AndroidWorld adaptation. android_world/emulator_init sets app and system state (contacts, SMS, calendar, music, notes, settings) from JSON files; android_world/task_config holds representative configurations for five Anchor tasks (six files; one is filed under two categories), and the README says the complete set will follow. The README says the agent-running code is still being refactored, and neither the task files nor the state configurations carry success criteria, so the evaluation procedure cannot be reproduced from this repository. The README reports 30 online service apps and an average optimal length of 14.05 steps. There is no root license file. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-starwalkin-ui-nexus/record.json

### 结构化规格

- 动作 / 输出：agent-defined Android actions
- 评测方式：Not specified in the repository: the README defers the agent-running code, and neither the task files nor the state configurations carry success criteria.
- 侧重：compositional multi-app mobile tasks, generalization from atomic to compositional tasks
- 观测：agent-defined observations of the Android emulator or device
- 任务设置：交互式

#### 数量记录

- 100 个任务模板 — all task files (50 + 25 + 25 rows)（计算得出）（来源：https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv）
- 50 个任务模板 — UI-NEXUS-Anchor, English, local utility apps (data/offline_English.csv)（计算得出）（来源：https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv）
- 25 个任务模板 — online service apps, Chinese (data/online_Chinese.csv)（计算得出）（来源：https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_Chinese.csv）
- 25 个任务模板 — online service apps, English (data/online_English.xlsx)（计算得出）（来源：https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_English.xlsx）

Template counts are data rows with distinct task IDs, counted with Python's csv module and by parsing the XLSX sheet XML. Anchor categories: Simple Concatenation 20, Context Transition 20, Deep Dive 10; each online file: Simple Concatenation 7, Context Transition 11, Deep Dive 7. Each row carries one instantiation of its template.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The complete tree at the reviewed commit has no root license file; the Apache-2.0 texts under android_env and android_world cover those bundled adapted upstream packages, not the benchmark's own task data or scripts.
  来源：https://api.github.com/repos/StarWalkin/UI-NEXUS/git/trees/c2ebeadc2c6821ecd246e097787efcc9a448b1b5?recursive=1

### 一手证据

- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/HEAD/README.md（获取于 2026-10-20T07:41:49Z；SHA-256：4a2ebb00b718b7aca9f4460827270d6e9828cc7ee9148a124ae663c6b1186f84）
- https://api.github.com/repos/StarWalkin/UI-NEXUS/git/trees/c2ebeadc2c6821ecd246e097787efcc9a448b1b5?recursive=1（获取于 2026-10-20T04:36:11Z；SHA-256：0ea9401ff29cf9fd9cc5adb4b084e77c09f25a2df0119e45a4bc056895c55fde）
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/README.md（获取于 2026-10-20T04:36:15Z；SHA-256：4a2ebb00b718b7aca9f4460827270d6e9828cc7ee9148a124ae663c6b1186f84）
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv（获取于 2026-10-20T04:36:15Z；SHA-256：c37e589a077131149f1d1a292500b60354e5c2ff401494422d36cda8ccbe1b2d）
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_Chinese.csv（获取于 2026-10-20T04:36:17Z；SHA-256：815766e4ba5fa6111289ad66fabc6bdc44ed5ea9af40052e4388b27781771472）
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_English.xlsx（获取于 2026-10-20T04:36:17Z；SHA-256：819efeb7ea389ff0a340d717e0b39ae5ab89bf7ebcad1b45dac8acf414f5b111）
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/android_world/emulator_init/README.md（获取于 2026-10-20T04:36:18Z；SHA-256：29d7bcb1df1d7264d685945a580e0238cef82a9e1d3fbae9b2cfffba8a3e5c86）

---

## UserZero

模拟首次用户的评测测试框架，通过让 AI 浏览器智能体尝试完成入门引导和核心流程来验证 Web 应用。

- 目录页面：https://awesomecua.com/zh/resources/github-aafre-userzero/
- 原始来源：https://github.com/aafre/userzero
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面设计
- 证据核查日期：2026-11-04T17:55:25Z
- ID：github:aafre/userzero

- 完整记录 JSON：https://awesomecua.com/resources/github-aafre-userzero/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/aafre/userzero/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/aafre/userzero/master/README.md（获取于 2026-11-04T17:55:25Z；SHA-256：60516db495ca068d602530c1826607e9af6f89bf36c398eff6ee85c045589e06）
- https://raw.githubusercontent.com/aafre/userzero/HEAD/LICENSE（获取于 2026-11-04T17:59:57Z；SHA-256：42733a8d727cfdc75d695ae3105ab624589a539e35274a157afb98bcc102ed49）

---

## Verisim

Verisim 是覆盖范围认证工具和对抗性评测套件，用于测试计算机使用智能体及工具智能体的执行前防护规则。

- 目录页面：https://awesomecua.com/zh/resources/github-clay-good-verisim/
- 原始来源：https://github.com/clay-good/verisim
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、安全与防护、鲁棒性
- 证据核查日期：2026-11-04T16:30:03Z
- ID：github:clay-good/verisim

- 完整记录 JSON：https://awesomecua.com/resources/github-clay-good-verisim/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/clay-good/verisim/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/clay-good/verisim/HEAD/README.md（获取于 2026-11-04T16:30:03Z；SHA-256：c963d56a33d4cb19b430bf394f3bf985f98f9c175c5880f35897064320e066b4）
- https://raw.githubusercontent.com/clay-good/verisim/HEAD/LICENSE（获取于 2026-11-04T16:34:26Z；SHA-256：aceaa598dc09afa1b58c1e42127fac9c605e1d3eac92d5501ed0583aaa048f5a）

---

## VeriWeb (formerly VeriGUI)

由 VeriGUI 更名而来的可验证网页信息检索基准；桌面端评估被列为未来工作。

- 目录页面：https://awesomecua.com/zh/resources/github-verigui-team-verigui/
- 原始来源：https://github.com/VeriGUI-Team/VeriGUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:verigui-team/verigui

- 完整记录 JSON：https://awesomecua.com/resources/github-verigui-team-verigui/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：e9a0866c8d9fa1759dedebd5ea3a4176009e51eb669f5877540524e53ac1077d）
- https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## VideoWebArena

VideoWebArena 评测网络智能体利用视频教程完成网站任务的能力，发布的基准包括任务配置、运行环境和评测流程。

- 目录页面：https://awesomecua.com/zh/resources/github-ljang0-videowebarena/
- 原始来源：https://github.com/ljang0/videowebarena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、视频、网页导航、交互历史
- 证据核查日期：2026-11-09T06:16:33Z
- ID：github:ljang0/videowebarena

### 范围记录

The source reports 2,021 tasks and links the videos as a separate download. Evaluation requires configured website environments; the documented baselines use video frames or summaries.

- 完整记录 JSON：https://awesomecua.com/resources/github-ljang0-videowebarena/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ljang0/videowebarena/HEAD/README.md（获取于 2026-11-09T06:16:33Z；SHA-256：faf7596af0970a77cd7af2071ebbb2c0d9bb615647735119f7763fd3d05d9f70）

---

## VisualWebBench

评估多模态模型在视觉网页理解任务上的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-visualwebbench-visualwebbench/
- 原始来源：https://github.com/VisualWebBench/VisualWebBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面理解
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:visualwebbench/visualwebbench

- 完整记录 JSON：https://awesomecua.com/resources/github-visualwebbench-visualwebbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/VisualWebBench/VisualWebBench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：262947081ddd17dbf5bb3d072574a19bbf30510c42c3ff42c9851a748fd37546）

---

## Voice & Computer-Use Benchmark Landscape

公开的语音智能体、多模态和计算机使用评测基准的结构化分类与对比图谱。

- 目录页面：https://awesomecua.com/zh/resources/github-sophon-llc-voice-agent-benchmark-landscape/
- 原始来源：https://github.com/Sophon-LLC/voice-agent-benchmark-landscape
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面、网页
- 主题：评测、综述
- 证据核查日期：2026-11-04T17:55:25Z
- ID：github:sophon-llc/voice-agent-benchmark-landscape

- 完整记录 JSON：https://awesomecua.com/resources/github-sophon-llc-voice-agent-benchmark-landscape/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Sophon-LLC/voice-agent-benchmark-landscape/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Sophon-LLC/voice-agent-benchmark-landscape/main/README.md（获取于 2026-11-04T17:55:25Z；SHA-256：aef33f374143f95b22cc96824cb40dae648ee456cc245883e6cdae5b75f5179f）
- https://raw.githubusercontent.com/Sophon-LLC/voice-agent-benchmark-landscape/HEAD/LICENSE（获取于 2026-11-04T17:59:58Z；SHA-256：43335e3a749730e9019a00d83b73e244a29308b96c4dfa406817f1a01bd3184b）

---

## WAInjectBench

WAInjectBench 针对网页交互流程中的 6 种文本和图像攻击类型，评测网页智能体的提示注入检测能力。

- 目录页面：https://awesomecua.com/zh/resources/github-norrrrrrr-lyn-wainjectbench/
- 原始来源：https://github.com/Norrrrrrr-lyn/WAInjectBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、网页导航
- 证据核查日期：2026-11-04T13:12:28Z
- ID：github:norrrrrrr-lyn/wainjectbench

- 完整记录 JSON：https://awesomecua.com/resources/github-norrrrrrr-lyn-wainjectbench/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Norrrrrrr-lyn/WAInjectBench/HEAD/README.md（获取于 2026-11-04T13:12:28Z；SHA-256：de16483df2836a5b59152fc732560913d99a54fd75db2eba73673fcbcf1e463c）

---

## WATCHER

面向自主网页智能体的提示注入防御分类器、评测基准和具备防御机制的浏览器测试框架。

- 目录页面：https://awesomecua.com/zh/resources/github-aaman-911-watcher/
- 原始来源：https://github.com/Aaman-911/watcher
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-11-04T17:30:33Z
- ID：github:aaman-911/watcher

- 完整记录 JSON：https://awesomecua.com/resources/github-aaman-911-watcher/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Aaman-911/watcher/main/README.md（获取于 2026-11-04T17:30:33Z；SHA-256：1153559776f26627d176badbaeeaf1e5c5f80f7b9aa577f34d580a8e848a941e）

---

## WeaveBench

WeaveBench 通过结合 GUI、网页和程序化工具接口的真实世界长程工作流程评测计算机使用智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-weavebench-weavebench/
- 原始来源：https://github.com/weavebench/WeaveBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Linux
- 主题：评测、长任务、工具集成、沙箱
- 证据核查日期：2026-11-04T14:02:42Z
- ID：github:weavebench/weavebench

- 完整记录 JSON：https://awesomecua.com/resources/github-weavebench-weavebench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/weavebench/WeaveBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/weavebench/WeaveBench/HEAD/README.md（获取于 2026-11-04T14:02:42Z；SHA-256：7e39c52cf5ec07d4499d2d55dbcf18989e13a2adbee36149cde6e3a95a964de1）
- https://raw.githubusercontent.com/weavebench/WeaveBench/HEAD/LICENSE（获取于 2026-11-04T14:07:14Z；SHA-256：20b73d53cd7d689f0e7e3a8be21c8a36981b7ae87300be35b128a630db3b66be）

---

## Web Agent Comparison

可复现的 8 维评测基准，从延迟、token 开销和任务成功率等方面比较 7 个浏览器自动化 MCP 服务器。

- 目录页面：https://awesomecua.com/zh/resources/github-pleasedodisturb-web-agent-comparison/
- 原始来源：https://github.com/pleasedodisturb/web-agent-comparison
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工具集成、效率
- 证据核查日期：2026-11-04T14:20:17Z
- ID：github:pleasedodisturb/web-agent-comparison

- 完整记录 JSON：https://awesomecua.com/resources/github-pleasedodisturb-web-agent-comparison/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/pleasedodisturb/web-agent-comparison/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/pleasedodisturb/web-agent-comparison/HEAD/README.md（获取于 2026-11-04T14:20:17Z；SHA-256：f204ae526e91b247abd2541eb47882b61b49405790e9300bc3359a70e979ce3d）
- https://raw.githubusercontent.com/pleasedodisturb/web-agent-comparison/HEAD/LICENSE（获取于 2026-11-04T14:23:44Z；SHA-256：a67b0dc78a8e441dea87829c32c38805ca617dd5ca1576a5ad5097a9619280f7）

---

## Web Context Bench (Python)

基于本地页面的基准，比较 6 种浏览器表示在 token 用量、事实读取和目标元素选择上的表现，并采用确定性答案评分。

- 目录页面：https://awesomecua.com/zh/resources/github-charlypoly-web-context-bench-python/
- 原始来源：https://github.com/charlypoly/web-context-bench-python
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、GUI 定位、效率、界面理解
- 证据核查日期：2026-10-20T11:51:30.874397Z
- ID：github:charlypoly/web-context-bench-python

### 范围记录

This is a single-snapshot representation evaluation on local fixtures and captured pages. Its shared-prompt, one-model setup differs from complete Browser Use or Stagehand agents. The methodology notes unresolved redistribution licensing for third-party practice-site snapshots; MIT is recorded for repository code only.

- 完整记录 JSON：https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/record.json

### 结构化规格

- 动作 / 输出：READ text answer, ACT selector, text/label, accessible role/name, DOM index, Stagehand reference or screenshot point, according to the representation
- 评测方式：READ uses normalized exact match against an answer or allowed alias. ACT resolves predicted identifiers to ground-truth elements, or checks screenshot points inside the target box. Representation-token accounting subtracts fixed-prompt tokens; screenshots use billed input usage minus the fixed prompt. These are answer/target correctness and token metrics.
- 侧重：Browser-representation token use, Factual READ accuracy, ACT target-element selection
- 观测：Top-document HTML, Markdown converted from HTML, Playwright accessibility snapshot, Browser Use indexed DOM, Stagehand hybrid snapshot, Viewport screenshot
- 任务设置：离线

#### 数量记录

未记录数量。

Fixed local-page observations; the reported run uses claude-sonnet-5 and a shared prompt, without scrolling or an agent loop. Browser Use disables its viewport cutoff and sends untruncated text; Stagehand uses a separate matched browser load. Short-string representability labels are approximate. The offline evaluation uses model API calls. Third-party snapshot redistribution remains unresolved.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The inspected root LICENSE contains complete MIT terms for repository software. Redistribution permission for captured third-party practice-site pages is unresolved in the methodology.
  来源：https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE

### 一手证据

- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/README.md（获取于 2026-10-20T11:51:30.874397Z；SHA-256：14775f6e3daba69d4684380fd33bf717bdc3093b65be796eb863bbd27d0c0bab）
- https://api.github.com/search/repositories?q=topic%3Aweb-agents+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc（获取于 2026-10-20T11:05:35.063004+00:00；SHA-256：3e22e1cbfa47bcf98f6f70a5f6f162a31a509a9f2091a84679bb5231977e29d9）
- https://github.com/charlypoly/web-context-bench-python（获取于 2026-10-20T11:50:54.545491Z；SHA-256：fd30e94e78e7167a49579922259fde1c7d7f8259e9f00afba15faf3a71966a94）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/METHODOLOGY.md（获取于 2026-10-20T11:52:30.131541Z；SHA-256：1c3c0cbf9f9d9f7cd9e7a2f027ecb217fd5c16fa157916281a15bb7f403f6f1c）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/src/wpbench/scoring.py（获取于 2026-10-20T11:53:28.567861Z；SHA-256：8cada5d71b5a61e7aff2e1ac2b951c266eb2db7c082c06c5a13aa127d42b3fc5）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE（获取于 2026-10-20T11:51:41.499735Z；SHA-256：9b64ef672f5091b6074d02502f6d3c161d94308a3d9d142d7437dcddf611bbc4）

---

## web-agent-bench

web-agent-bench 根据 Token 用量、延迟和任务完成情况，比较浏览器自动化测试框架（Playwright MCP、agent-browser、Stagehand）。

- 目录页面：https://awesomecua.com/zh/resources/github-nsosio-web-agent-bench/
- 原始来源：https://github.com/nsosio/web-agent-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、效率、工具集成
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:nsosio/web-agent-bench

- 完整记录 JSON：https://awesomecua.com/resources/github-nsosio-web-agent-bench/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/nsosio/web-agent-bench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/nsosio/web-agent-bench/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：5771611bda8ae442bf31a5a6f0498d21d4eb1509f83f15e0823b93fb0526172a）
- https://raw.githubusercontent.com/nsosio/web-agent-bench/HEAD/LICENSE（获取于 2026-11-04T14:07:21Z；SHA-256：d034230dad809f4f558a0a817456f6b8698cb0fdfd43b7e3555e89e1784eb6b4）

---

## WebBench

Halluminate 与 Skyvern 的实时网页基准，涵盖 452 个高流量网站上的读取、创建、更新、删除和文件下载任务，包括登录与表单填写，并发布各智能体的运行结果。

- 目录页面：https://awesomecua.com/zh/resources/github-halluminate-webbench/
- 原始来源：https://github.com/Halluminate/WebBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T11:13:06Z
- ID：github:halluminate/webbench

### 范围记录

The README and dataset card describe 2,454 tasks on 452 websites (category counts summing to 2,454) and an expanded pool of 5,750 tasks. The released webbenchfinal.csv has 2,647 rows with unique IDs and 453 distinct starting URLs, so the released file and the documented total differ. Tasks run on live third-party websites, so content, logins and anti-bot measures change over time. The repository holds the task CSVs and per-agent result files but no evaluation harness; the README points to the leaderboard and technical report for methodology. The Hugging Face dataset card declares MIT for the task data; the repository LICENSE is MIT for the repository. Website content and account requirements belong to the target sites.

- 完整记录 JSON：https://awesomecua.com/resources/github-halluminate-webbench/record.json

### 结构化规格

- 动作 / 输出：browser interactions on live websites
- 评测方式：The repository releases per-agent result files; the scoring procedure is described in the publisher's technical report rather than an executable evaluator in the repository.
- 侧重：live-web task completion, write operations such as account creation, updates and deletions, file downloads
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 2,454 个任务 — documented WebBench task set（来源报告；来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md）
- 452 个网站 — documented site coverage（来源报告；来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md）
- 2,647 行任务数据 — webbenchfinal.csv as released（计算得出）（来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv）

The released CSV has columns ID, Starting URL, Category and Task, with 1,637 READ, 594 CREATE, 206 UPDATE, 166 DELETE and 44 FILE_MANIPULATION rows; the README's category table sums to 2,454. A separate webbench_hitl_final.csv covers human-in-the-loop runs. Record the task file revision with a score.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE
- 数据：MIT — https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card for the Hub copy of the task CSV declares license: mit; this is a data declaration from the dataset card, not inferred from the repository code license.
  来源：https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md（获取于 2026-10-18T11:13:06Z；SHA-256：9898c4ea9c7d08c08566893dd6adb6a6ca3d2e3ef85a2dbcbc350b2bd22736b8）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv（获取于 2026-10-18T11:13:07Z；SHA-256：fd5311a38bdb6f941e8f544150735656c114d76fbfb17193da973d5de0165217）
- https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md（获取于 2026-10-18T11:13:09Z；SHA-256：017626f88e56eacdb45d7f8b90540ba4a65fa67b78ea745c026b8c28181dff29）
- https://huggingface.co/api/datasets/Halluminate/WebBench（获取于 2026-10-18T11:13:09Z；SHA-256：fd85246105d23d09511b920505391f1937bbd0ca3037963498edb9744554d593）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE（获取于 2026-10-18T11:13:09Z；SHA-256：96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE（获取于 2026-10-18T11:13:09Z；SHA-256：96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58）

---

## WebGames

包含 5 个能力领域的 150 个客户端网页挑战，设计为人类容易完成、浏览器操作智能体难以完成；每关解答后会显示密码。

- 目录页面：https://awesomecua.com/zh/resources/github-convergence-ai-webgames/
- 原始来源：https://github.com/convergence-ai/webgames
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:convergence-ai/webgames

- 完整记录 JSON：https://awesomecua.com/resources/github-convergence-ai-webgames/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：a2df62f9b4359f7839c7d6c6917ff654f9eadeafa92f96311495b71e37abd9ba）
- https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：0e03b68c7acb0b340e47f9000ac3808950e2ac8c4cd05960437a9e46e3c09a62）

---

## WebGuard

提供代码库、标注工具包和操作级风险数据集，用于训练和评估在执行前标记浏览器智能体不安全操作的防护模型。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-webguard/
- 原始来源：https://github.com/OSU-NLP-Group/WebGuard
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-10-18T10:59:53Z
- ID：github:osu-nlp-group/webguard

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-webguard/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/README.md（获取于 2026-10-18T10:59:53Z；SHA-256：be53561dcf69cb2295a26eaebf965eead10b3504fca30f71f73dc5e5728fc5b3）
- https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/LICENSE（获取于 2026-10-18T11:03:46Z；SHA-256：93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa）

---

## WebMall

WebMall 是多商店电子商务网页智能体评测基准，评测跨网站比价、商品搜索和购物车结账。

- 目录页面：https://awesomecua.com/zh/resources/github-wbsg-uni-mannheim-webmall/
- 原始来源：https://github.com/wbsg-uni-mannheim/WebMall
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、跨应用
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:wbsg-uni-mannheim/webmall

- 完整记录 JSON：https://awesomecua.com/resources/github-wbsg-uni-mannheim-webmall/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/wbsg-uni-mannheim/WebMall/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：b6ac178382068948a9ecbeaf9861f3a67adb4c6dbecae471f845b5c35981d130）

---

## WebMCP Description Benchmarks

WebMCP Description Benchmarks 评测浏览器内 WebMCP 工具的模式描述如何影响智能体选择工具和执行任务的准确率。

- 目录页面：https://awesomecua.com/zh/resources/github-clouatre-labs-webmcp-description-benchmarks/
- 原始来源：https://github.com/clouatre-labs/webmcp-description-benchmarks
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工具集成、网页导航
- 证据核查日期：2026-11-04T14:20:14Z
- ID：github:clouatre-labs/webmcp-description-benchmarks

- 完整记录 JSON：https://awesomecua.com/resources/github-clouatre-labs-webmcp-description-benchmarks/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/clouatre-labs/webmcp-description-benchmarks/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/clouatre-labs/webmcp-description-benchmarks/HEAD/README.md（获取于 2026-11-04T14:20:14Z；SHA-256：06d2fd02ae6aa06c4174d486c3a56d1adc3d3bbaa986c14ad6c25f8e771b6033）
- https://raw.githubusercontent.com/clouatre-labs/webmcp-description-benchmarks/HEAD/LICENSE（获取于 2026-11-04T14:23:43Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WebsiteBench

网站重建基准：智能体通过浏览器探索生产级网站，重建全栈版本，并在 70 项任务中通过隐藏的功能与视觉测试用例评分。

- 目录页面：https://awesomecua.com/zh/resources/github-tiger-ai-lab-websitebench/
- 原始来源：https://github.com/TIGER-AI-Lab/WebsiteBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务、界面设计
- 证据核查日期：2026-11-06T06:21:48Z
- ID：github:tiger-ai-lab/websitebench

### 范围记录

Read at commit 78f5558e. The README and docs/tasks.md were reviewed; the 70 tasks and 46,916 hidden cases were checked by summing the docs/tasks.md table. The README's paper badge has no link, so no paper relation is recorded. Apache-2.0 is the README's statement for benchmark code, task definitions and verifier. Nothing was installed or run.

- 完整记录 JSON：https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/record.json

### 结构化规格

- 动作 / 输出：harness-defined browser actions through the task's local browser service
- 评测方式：Hidden test cases per task. A case passes when its functional checks pass and every visual checkpoint's flat-baseline-normalized RGB SSIM reaches 0.99. A task's reward is passed cases divided by cases, weighted equally.
- 侧重：full-stack website reconstruction from browser exploration, without the source code, visual appearance and functional behavior of the rebuilt site
- 观测：未记录
- 任务设置：交互式

#### 数量记录

- 70 个任务 — released tasks（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md）
- 46,916 个测试用例 — hidden test cases summed over the docs/tasks.md table（计算得出）（来源：https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md）

Agents run through selectable Harbor agents, so observations and actions depend on the agent. Each task requests 8 CPUs, 8 GiB of memory and 20 GiB of disk per environment, with up to 16 hours for the agent.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/README.md（获取于 2026-11-06T06:21:48Z；SHA-256：c79cb821975c34552a46f01349edd0869c2f20c9a85d4b7811155d3fb7f7f0b2）
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md（获取于 2026-11-06T06:21:44Z；SHA-256：d98bd00fb45abc63df0fddd6d9f9f5e669396cd53c157e5e06d6de9d103adf09）
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE（获取于 2026-11-06T06:22:02Z；SHA-256：cda5b289b68650d0643c0ded2d43dc797cb7777c4d943f2b03067250de6d3c26）

---

## WebTestBench

端到端网页测试基准，智能体根据开发说明制定测试清单，与已部署的应用交互，并报告功能或约束方面的缺陷。

- 目录页面：https://awesomecua.com/zh/resources/github-friedrichor-webtestbench/
- 原始来源：https://github.com/friedrichor/WebTestBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工具集成
- 证据核查日期：2026-10-17T11:18:18Z
- ID：github:friedrichor/webtestbench

### 范围记录

Public evaluation/deployment scripts accompany an ungated Hub release with JSON/JSONL metadata and 100 application ZIP files. The ZIP count is an artifact inventory. The documented baseline uses Claude Agent SDK and a pinned Playwright MCP version with external model credentials. Code and data Apache-2.0 declarations are retained separately.

- 完整记录 JSON：https://awesomecua.com/resources/github-friedrichor-webtestbench/record.json

### 结构化规格

- 动作 / 输出：browser interaction, test checklist generation, defect reports
- 评测方式：The supplied WebTester pipeline separates checklist generation from interactive defect detection and provides a scoring workflow.
- 侧重：web functionality testing, latent permission and business constraints
- 观测：web application interface, development instruction
- 任务设置：交互式

#### 数量记录

- 7 个应用类别 — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md）
- 100 个 Web 应用归档 — Hub file manifest（计算得出）（来源：https://huggingface.co/api/datasets/friedrichor/WebTestBench）

The 100 archive files form an artifact inventory. Backend/tool versions and deployment settings affect reproducibility.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE
- 数据：apache-2.0 — https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 代码审核：Repository source LICENSE.
  来源：https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE

- 数据审核：Publisher Hub-card license declaration for the released benchmark dataset.
  来源：https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md（获取于 2026-10-17T11:18:18Z；SHA-256：b41472026cd7d4f81a01d58bf39193dc1fabc7875c61e370090a20cc77500cdd）
- https://api.github.com/repos/friedrichor/WebTestBench（获取于 2026-10-17T11:18:18Z；SHA-256：7203ecc2aae5f1697eeeb804ca8f21d47b9f22a8b8fa43a4064c4e1c49f5e72c）
- https://api.github.com/repos/friedrichor/WebTestBench/git/trees/main?recursive=1（获取于 2026-10-17T11:22:55Z；SHA-256：bd1f09149b00d59a0078d414216bd2fb78e09ce7212d15bbda84ddec7052c8af）
- https://huggingface.co/api/datasets/friedrichor/WebTestBench（获取于 2026-10-17T11:23:08Z；SHA-256：db1e97f40107038ae03835dc20f17b13b37e74b5c8587f8c39b441271618f017）
- https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md（获取于 2026-10-17T11:23:08Z；SHA-256：6f2f94a25ed66a14779f6b4e6686044d0510eb32a0187645cc473978d93f7c5b）
- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE（获取于 2026-10-17T11:22:55Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WebWalker

用于评测大型语言模型完成多步网页遍历和深度信息查找任务的评测基准与多智能体框架。

- 目录页面：https://awesomecua.com/zh/resources/github-alibaba-nlp-webwalker/
- 原始来源：https://github.com/Alibaba-NLP/WebWalker
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、规划、长任务
- 证据核查日期：2026-10-16T11:09:28Z
- ID：github:alibaba-nlp/webwalker

- 完整记录 JSON：https://awesomecua.com/resources/github-alibaba-nlp-webwalker/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Alibaba-NLP/WebWalker/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Alibaba-NLP/WebWalker/HEAD/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：4b453a820810d95071a8be84ca0a9f41500984b44a379220081d38d779b7c667）
- https://raw.githubusercontent.com/Alibaba-NLP/WebWalker/HEAD/LICENSE（获取于 2026-11-02T17:35:50Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WinDeskGround

WinDeskGround 在具有受控遮挡、缩放和干扰等级的多窗口 Windows 环境中，评测桌面 GUI 定位。

- 目录页面：https://awesomecua.com/zh/resources/github-zzzhr-1-windeskground/
- 原始来源：https://github.com/ZZZhr-1/WinDeskGround
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、GUI 定位、界面理解
- 证据核查日期：2026-11-04T13:12:46Z
- ID：github:zzzhr-1/windeskground

- 完整记录 JSON：https://awesomecua.com/resources/github-zzzhr-1-windeskground/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ZZZhr-1/WinDeskGround/HEAD/README.md（获取于 2026-11-04T13:12:46Z；SHA-256：0a4885bd95df160629314754e9ff6878df07c584d8e2e80fd18361e00c07c563）

---

## WindowsAgentArena-V2

Windows 基准的修订版本，修复任务和评估器问题并支持虚拟机初始化，相关说明与 PC-Agent-E 一同提供。

- 目录页面：https://awesomecua.com/zh/resources/github-gair-nlp-windowsagentarena-v2/
- 原始来源：https://github.com/GAIR-NLP/WindowsAgentArena-V2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、跨应用、鲁棒性
- 证据核查日期：2026-10-18T04:35:17Z
- ID：github:gair-nlp/windowsagentarena-v2

### 范围记录

Repository contains executable evaluation code and task definitions. README links a separate Windows 11 VM snapshot. MIT is recorded for repository code only. Default task selection and the reported full suite have different scopes.

- 完整记录 JSON：https://awesomecua.com/resources/github-gair-nlp-windowsagentarena-v2/record.json

### 结构化规格

- 动作 / 输出：PyAutoGUI
- 评测方式：Runner exposes four observation choices and uses PyAutoGUI. count.py sums the last score in each results.json and divides by the number of traj.jsonl files, multiplying by 100; it separately reports result/trajectory/error-file coverage. This denominator counts trajectory files in the evaluated run, with the full benchmark size recorded separately.
- 侧重：Windows desktop task execution, revised task evaluators
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：交互式

#### 数量记录

- 141 个任务 — full WindowsAgentArena-V2 suite reported by README（来源报告；来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md）
- 11 个 Windows 应用 — full suite coverage reported by README（来源报告；来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md）
- 20 个任务 ID — shipped test_custom.json selection（计算得出）（来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json）

README sample config uses max_steps=30. The shipped selected-task index has 20 IDs; the 141-task figure has a different scope. Preserve the selected task list, trial ID, score coverage and VM snapshot when comparing runs. Docker/Windows-11 setup is required. No VM or benchmark was executed.

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：1dd744ce565ec00b20ea5637eb7bc6112e97fb9044bd9a471f7cc4b7227ca344）
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2（获取于 2026-10-18T04:33:20Z；SHA-256：0b0af02d3c2c4916dd786b868b99d60b4681927d0273a23661eb2b6db7cf9404）
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2/git/trees/main?recursive=1（获取于 2026-10-18T04:35:16Z；SHA-256：638ef9ee593a3a560c1d0b3fb2bc4a9d31a3e904c0111971924a6d66e1763aa6）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/run.py（获取于 2026-10-18T04:40:39Z；SHA-256：494de9e74629ac2c55358629c0d9ba13703f36317057a3089388fbb6e80ca28f）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json（获取于 2026-10-18T04:40:39Z；SHA-256：e45ba7fdc7555f46ad1b4cfaab79d00754909d053fc49d5bab651b0fb593439b）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/count.py（获取于 2026-10-18T04:40:39Z；SHA-256：f12147ac78c39c72eb75f9c37b293ba7fff3209fc5758fd51c69abbd96d80a97）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE（获取于 2026-10-18T04:35:20Z；SHA-256：2a2d1e46940b570d60f5e2198ed27fcec6316fc8489e9660da8777dbd75aaeec）

---

## WindowsWorld

WindowsWorld 是跨应用的 Windows 基准，支持对任务中间步骤进行评估。

- 目录页面：https://awesomecua.com/zh/resources/github-hitsz-tmg-windowsworld/
- 原始来源：https://github.com/HITsz-TMG/WindowsWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、跨应用
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:hitsz-tmg/windowsworld

- 完整记录 JSON：https://awesomecua.com/resources/github-hitsz-tmg-windowsworld/record.json

### 结构化规格

- 动作 / 输出：PyAutoGUI, UiPath Computer_13 action interface
- 评测方式：Publisher distinguishes S_int (intermediate checkpoint score on L1–L3) and S_final (final completion on L1–L4). Documented step budgets are 15/25/40/20 for L1/L2/L3/L4. Preserve level, observation mode, agent interface and checkpoint/final metric when reporting a run.
- 侧重：multi-application Windows workflows, intermediate-state and final-goal completion
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：交互式

#### 数量记录

- 181 个任务 — WindowsWorld benchmark described in the retained README（来源报告；来源：https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md）
- 17 个桌面应用 — WindowsWorld coverage described in the retained README（来源报告；来源：https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md）

Interactive VMware/Windows environment. The public repository includes benchmark.json, task/evaluator code and monitoring support; the README refers VM import to Installation Guide.md. Checkpoint counts, application counts and task counts are different units. Apache-2.0 is recorded for repository code.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：9857bd8ae9f521f152761ae3bd85debe4e7471aad34c9eb47618332948bca6c9）
- https://api.github.com/repos/HITsz-TMG/WindowsWorld/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：490c9257d56f0a5214e6424e02490379b0b00ca2f7d4626fd5d14e17239d05ed）
- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）

---

## WONDERBREAD

WONDERBREAD 是用于评估工作流程文档编写、质量评估和知识迁移的离线基准，使用人类网页导航演示、操作轨迹和书面流程。

- 目录页面：https://awesomecua.com/zh/resources/github-hazyresearch-wonderbread/
- 原始来源：https://github.com/HazyResearch/wonderbread
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工作流、视频、界面理解
- 证据核查日期：2026-10-17T09:12:11Z
- ID：github:hazyresearch/wonderbread

### 范围记录

The repository contains evaluation and collection code; the linked Zenodo release exposes the full, gold and debug demonstration archives and metadata. This measures workflow understanding. Zenodo declares CC-BY-4.0 for that dataset; no repository-level code license was found.

- 完整记录 JSON：https://awesomecua.com/resources/github-hazyresearch-wonderbread/record.json

### 结构化规格

- 动作 / 输出：generate procedures, segment demonstrations, answer workflow questions, validate and rank procedures
- 评测方式：Task-specific scripts evaluate six workflow-understanding task types.
- 侧重：workflow documentation, workflow quality assessment, workflow knowledge transfer
- 观测：screen recordings, action traces, screenshots, written standard operating procedures
- 任务设置：离线

#### 数量记录

- 6 种任务类型 — WONDERBREAD BPM benchmark（来源报告；来源：https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md）
- 2,928 条人工演示 — full dataset release 14094162（来源报告；来源：https://zenodo.org/api/records/14094162）
- 598 个网页导航工作流 — full dataset release 14094162（来源报告；来源：https://zenodo.org/api/records/14094162）
- 724 条人工演示 — gold subset used for the original paper evaluations（来源报告；来源：https://zenodo.org/api/records/14094162）

Counts are publisher-reported. The gold subset covers 162 workflows and differs from the full collection; scores require the exact task and subset.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://zenodo.org/api/records/14094162
- 文档：未记录
- 权重：未记录

- 数据审核：The linked Zenodo dataset release declares CC-BY-4.0.
  来源：https://zenodo.org/api/records/14094162

### 一手证据

- https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md（获取于 2026-10-17T09:12:11Z；SHA-256：1e4308d59a22b39543c28b745a58d3d7c47be1ab9df9a4c5c0fe868a810350b2）
- https://api.github.com/repos/HazyResearch/wonderbread（获取于 2026-10-17T09:12:11Z；SHA-256：5ba27e24455b36b52bf65b3c9f589e760f97a576bb01d622d89836c5bb53b38c）
- https://api.github.com/repos/HazyResearch/wonderbread/git/trees/main?recursive=1（获取于 2026-10-17T09:14:04Z；SHA-256：accb518a5362948cf96e9f0b684fb6fcc9b26e43a691016ae70a3283c0e1e2c2）
- https://zenodo.org/api/records/14094162（获取于 2026-10-17T09:15:34Z；SHA-256：68b4b952c1ab90484d457b392de1d0c95a24f6cc1674c82125a6bd26f1cb1016）

---

## WorldGUI

包含 611 项要求智能体从不同起点完成的桌面 GUI 任务，附有教学视频、项目文件和具备自我反思能力的 WorldGUI-Agent 基线。

- 目录页面：https://awesomecua.com/zh/resources/github-showlab-worldgui/
- 原始来源：https://github.com/showlab/WorldGUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:showlab/worldgui

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-worldgui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/WorldGUI/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：ea54ea82b86548ff38913ef328ec18152ace71a3fe9bb497bcabcaad24e6a678）

---

## Wornpage WebMCP Conformance

验证工具包，用于检查页面自有的 WebMCP 工具模式、授权边界和执行一致性。

- 目录页面：https://awesomecua.com/zh/resources/github-wornpage-webmcp-conformance/
- 原始来源：https://github.com/wornpage/webmcp-conformance
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、工具集成、网页导航
- 证据核查日期：2026-11-04T18:11:27Z
- ID：github:wornpage/webmcp-conformance

- 完整记录 JSON：https://awesomecua.com/resources/github-wornpage-webmcp-conformance/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/wornpage/webmcp-conformance/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/wornpage/webmcp-conformance/main/README.md（获取于 2026-11-04T18:11:27Z；SHA-256：dbe90a9859641b5ea0edaa60db8dc60eec60e8f041665c9be0adcee6802221d8）
- https://raw.githubusercontent.com/wornpage/webmcp-conformance/HEAD/LICENSE（获取于 2026-11-04T18:16:09Z；SHA-256：85a43a5d43f30f0affaa58d0586f3941ce32dc530b4622f313de7227ae531ce6）
