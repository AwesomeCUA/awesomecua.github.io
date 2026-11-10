# 计算机使用智能体数据集

计算机使用数据集提供截图、指令、界面元素标注和动作轨迹，用于训练或评估 GUI 智能体。监督信号从单个元素的定位到完整的多步轨迹不等。

> AwesomeCUA 目录收录 267 条已审核数据集。每条附有完整注释、一手证据和许可证信息。快照：2026-11-10T03:01:53Z。

HTML 页面：https://awesomecua.com/zh/categories/dataset/ · [English](https://awesomecua.com/categories/dataset/index.md) · 目录索引：https://awesomecua.com/llms.txt · API：https://awesomecua.com/api/v1/resources.json

## 怎么选

| 数据集 | 平台 | 监督信号 | 规模 | 许可证 |
| --- | --- | --- | --- | --- |
| [ScreenSpot-Pro data](https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/) | 桌面 | GUI grounding | [1,581 条目标标注](https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md) | [MIT（数据）](https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md) |
| [OS-Genesis](https://awesomecua.com/resources/github-os-copilot-os-genesis/) | 跨平台 | reverse task synthesis, GUI action trajectories | — | — |
| [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/) | 手机 | interactive-element grounding, screen and element functionality descriptions | [> 104,000 张截图](https://arxiv.org/abs/2407.17490v1) | [CC-BY-4.0（数据）](https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md) |
| [GUIAct](https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/) | 网页 · 手机 | single-step actions, multi-step navigation | [≈ 67,000 条动作指令](https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md) | — |
| [GroundCUA dataset](https://awesomecua.com/resources/url-f6c88faa4392848f81b6/) | 桌面 | UI element bounding boxes, element text or short descriptions | [51,175 组截图–标注文件对](https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data) | [MIT（数据）](https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md) |
| [GUI-Actor data](https://awesomecua.com/resources/url-66096ad4057a3d3726f5/) | — | GUI grounding with bounding-box supervision | — | — |

## 常见问题

### 目录中被提及最多的数据集有哪些？

[ScreenSpot-Pro data](https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/)（12 条记录）、[OS-Genesis](https://awesomecua.com/resources/github-os-copilot-os-genesis/)（11 条记录）和 [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/)（7 条记录）在其他目录记录的已审核来源中被提及最多。

### 这些数据集覆盖哪些平台？

在 267 条已审核数据集中，网页 116 条、桌面 74 条、手机 74 条、跨平台 34 条；35 条未记录平台。标注多个平台的条目在每个平台下各计一次。

### 哪些数据集记录了监督信号和规模？

267 条数据集中有 125 条附有数据集档案，记录监督信号、模态、格式、划分以及带单位的计数。最常见的监督信号是 element grounding（6 条）、agent-generated trajectories（5 条）和 interaction trajectories（4 条）。[数据集对比页](https://awesomecua.com/compare/datasets/)可逐项比较。

### 数据集使用哪些许可证？

最常见的声明许可证是 Apache-2.0（71 条）、MIT（44 条）和 CC-BY-4.0（35 条）。267 条中有 85 条未记录声明的许可证。

### 这个列表按什么排序？

按在已审核来源中提及该条目的目录记录数排序，多者在前，数量相同时按名称排序。列表上方的排序菜单可切换为 A–Z。

---

## ScreenSpot-Pro data

用于评估基于指令的 GUI 定位的高分辨率专业界面截图及目标标注。

- 目录页面：https://awesomecua.com/zh/resources/url-c79e152e6f7af1a9efed/
- 原始来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T11:35:55Z
- ID：url:c79e152e6f7af1a9efed

### 范围记录

This is the benchmark data asset, distinct from its evaluation-code repository. Target counts and unique image counts are different units.

- 完整记录 JSON：https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/record.json

### 结构化规格

- 格式：JSON annotations, screen images
- 模态：high-resolution screenshots, instructions, bounding boxes
- 数据划分：未记录
- 监督信号：GUI grounding

#### 数量记录

- 1,581 条目标标注 — sum of icon/text counts in the published card table（计算得出）（来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md）

Counts describe target annotations; unique screenshots and expanded language/style variants use different units. The evaluation code can reuse a target across configurations.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py（获取于 2026-10-16T11:38:05Z；SHA-256：a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）
- https://gui-agent.github.io/grounding-leaderboard/（获取于 2026-10-18T04:27:10Z；SHA-256：2f7f635dee3c593b40efc61246c082ab1d76f7ce78f84a1d4b6391d30fa4e8fd）
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）

---

## OS-Genesis

基于交互的数据生成流程，通过逆向任务合成和轨迹奖励模型，在无人类监督或预设任务的条件下生成移动端和网页 GUI 智能体轨迹。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-os-genesis/
- 原始来源：https://github.com/OS-Copilot/OS-Genesis
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:os-copilot/os-genesis

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-os-genesis/record.json

### 结构化规格

- 格式：JSONL trajectories, JSON transition triples
- 模态：screenshots, text, actions
- 数据划分：未记录
- 监督信号：reverse task synthesis, GUI action trajectories

#### 数量记录

未记录数量。

The repository links distinct AndroidControl-oriented, AndroidWorld-oriented, and web training files plus raw pre-state/action/post-state triples. These are training artifacts with related representations of the same corpus; the release documents no train/test split. No numerical inventory is asserted from release names or linked archives.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）

---

## AMEX dataset release

AMEX 官方 Hub 数据包含 Android 应用截图及交互元素定位、屏幕与元素功能标注，以及配有逐步 GUI 操作链的指令。

- 目录页面：https://awesomecua.com/zh/resources/url-1b2091d717c977d4f8b9/
- 原始来源：https://huggingface.co/datasets/Yuxiang007/AMEX
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、界面理解、手机操作
- 证据核查日期：2026-10-19T06:22:26Z
- ID：url:1b2091d717c977d4f8b9

### 范围记录

The card calls this the official dataset repository of the AMEX paper. The full release sits under AMEX/ as element_anno.zip, instruction_anno.zip and a screenshot archive split into eight 10 GiB parts plus a final zip (about 93.5 GB together); a sample/ folder holds one episode's five screenshots with its annotations. The card adds publisher figures for ScreenSpot mobile-subset and AndroidControl beyond the arXiv paper. The AMEX project page links both this dataset and the AMEX-codebase training-code repository, which the catalog holds as the AMEX record github:yuxiangchai/amex-codebase; this release is recorded as its component. CC-BY-4.0 is the card's data declaration; that repository's Apache-2.0 code license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/record.json

### 结构化规格

- 格式：split ZIP archives, JSON, PNG
- 模态：screenshots, element bounding boxes, functionality descriptions, instructions, actions
- 数据划分：未记录
- 监督信号：interactive-element grounding, screen and element functionality descriptions, instructions with stepwise GUI-action chains

#### 数量记录

- > 104,000 张截图 — AMEX collection described in the arXiv v1 abstract（来源报告；来源：https://arxiv.org/abs/2407.17490v1）
- 3,046 个指令回合 — AMEX/instruction_anno.zip at revision 17196b29 (one JSON file per episode, unique episode_id)（计算得出）（来源：https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip）
- 38,709 个动作步骤 — steps lists of the 3,046 instruction episodes in AMEX/instruction_anno.zip at revision 17196b29（计算得出）（来源：https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip）

Episode and step counts were computed with a script from the instruction archive; the screenshot figure is the paper's reported scale. Each step records the action type, touch and lift coordinates, typed text, package name and screenshot path. No train/test split is published.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md（获取于 2026-10-19T06:22:26Z；SHA-256：dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192）
- https://huggingface.co/api/datasets/Yuxiang007/AMEX/revision/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e（获取于 2026-10-18T15:51:37Z；SHA-256：dad2a3226a7c3c2f74998be09f4e989a82bd91cf21b1cbd22211d807cfa91d97）
- https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip（获取于 2026-10-18T15:51:38Z；SHA-256：673d89f1fee1b3be6ec8c3c380e24768265c04f0ece87d852ff185b05daa585a）
- https://arxiv.org/abs/2407.17490v1（获取于 2026-10-18T15:51:39Z；SHA-256：0b19217aee442587ec75e7d691d4645f6d6125e82edf0c08ee5670a1a64ddfd8）
- https://yxchai.com/AMEX/（获取于 2026-10-19T06:21:55Z；SHA-256：4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa）
- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md（获取于 2026-10-19T06:22:26Z；SHA-256：dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192）

---

## Holo4 Trajectories

包含来自 Holo4 27B 和 Holo4 35B-A3B 的 7,366 条计算机使用智能体执行轨迹的数据集，记录步骤级推理、动作、工具结果和截图。

- 目录页面：https://awesomecua.com/zh/resources/url-b5dab1881ac1069e44ce/
- 原始来源：https://huggingface.co/datasets/Hcompany/trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android、跨平台
- 主题：评测、可观测性、数据生成
- 证据核查日期：2026-10-17T05:32:58Z
- ID：url:b5dab1881ac1069e44ce

- 完整记录 JSON：https://awesomecua.com/resources/url-b5dab1881ac1069e44ce/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Hcompany/trajectories
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Hcompany/trajectories（获取于 2026-10-17T05:32:58Z；SHA-256：147ea4deaadb2d9961302d2a15893d16cc90b40aa41d911ffe2dc2af794fe05c）
- https://huggingface.co/api/datasets/Hcompany/trajectories（获取于 2026-10-17T05:32:58Z；SHA-256：147ea4deaadb2d9961302d2a15893d16cc90b40aa41d911ffe2dc2af794fe05c）

---

## GroundCUA dataset

GroundCUA 项目的桌面 GUI 定位数据：87 款应用的 PNG 截图按哈希与 JSON 标注配对，标注列出元素边界框、可见文字和可选的粗分类。

- 目录页面：https://awesomecua.com/zh/resources/url-f6c88faa4392848f81b6/
- 原始来源：https://huggingface.co/datasets/ServiceNow/GroundCUA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-10-18T15:33:17Z
- ID：url:f6c88faa4392848f81b6

### 范围记录

At revision 5d6845b0 a paged listing of the Hub tree gives 51,175 PNG screenshots under images/ and 51,175 JSON annotation files with the same hashes under data/, in 87 application folders. The project's GitHub README reports 56K screenshots and about 3.56M element annotations, so the Hub file count and the reported screenshot count differ. The card says categories are approximate and present only for some elements. The repository root also holds an instruction_tuning.tar.gz archive (about 202 MB). The card names Windows, macOS and Linux for the applications but does not label each screenshot's operating system. MIT is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-f6c88faa4392848f81b6/record.json

### 结构化规格

- 格式：PNG, JSON
- 模态：desktop screenshots, element annotations
- 数据划分：未记录
- 监督信号：UI element bounding boxes, element text or short descriptions, coarse element categories for some elements

#### 数量记录

- 51,175 组截图–标注文件对 — Hub release at revision 5d6845b0 (images/*.png matched by hash to data/*.json)（计算得出）（来源：https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data）
- 87 个应用文件夹 — data/ at revision 5d6845b0（计算得出）（来源：https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data）
- ≈ 56,000 张截图 — GroundCUA dataset as described in the project README（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md）
- ≈ 3,560,000 条元素标注 — GroundCUA dataset as described in the project README（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md）

Screenshots, file pairs, folders and element annotations are different units and are counted separately. The pair count was computed by paging the recursive Hub tree of data/ and images/ at revision 5d6845b0; the listed receipt records the 87 application folders. The README figures describe the project dataset. No train/test split is declared.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md（获取于 2026-10-18T15:33:17Z；SHA-256：fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified（获取于 2026-10-18T15:34:25Z；SHA-256：1dfb2e14b6113d469314c2f1b752214d8f6f795710387b9f0e3769d218179191）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data（获取于 2026-10-18T15:33:17Z；SHA-256：a0534eba3c6ef17b9d63eec787825e29507eed375e778effe84230930e00628b）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3（获取于 2026-10-18T15:33:18Z；SHA-256：5ae73e5d203c9561fde9279e39e0dc15e375c2e806408d4addd8ae002de5849a）
- https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md（获取于 2026-10-18T15:33:18Z；SHA-256：ea25e5db95415f19bcf42f37547912eed185b72441a4fa57a0c981a7f50d732a）
- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md（获取于 2026-10-18T15:33:17Z；SHA-256：fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da）

---

## GUI-Actor data

已发布的用于训练 GUI-Actor 视觉定位模型的已处理截图和边界框数据集。

- 目录页面：https://awesomecua.com/zh/resources/url-66096ad4057a3d3726f5/
- 原始来源：https://huggingface.co/datasets/cckevinn/GUI-Actor-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:66096ad4057a3d3726f5

### 范围记录

Public JSON annotations and image archives are present. The card has no data-license declaration. Its source list contains mismatched hyperlinks and says six datasets while naming fewer distinct entries; no source-derivation relationships or aggregate count are imported from that list.

- 完整记录 JSON：https://awesomecua.com/resources/url-66096ad4057a3d3726f5/record.json

### 结构化规格

- 格式：JSON annotations, ZIP image packages, multipart image archives
- 模态：GUI screenshots, bounding boxes, grounding annotations
- 数据划分：training
- 监督信号：GUI grounding with bounding-box supervision

#### 数量记录

未记录数量。

Public Hub revision 5a0b35fb includes six bbox JSON files and associated image archives. The training configuration names six input paths with sampling_strategy=all; path count and verified example count are different units. No data license is established by the card, and the model repository license is not transferred to these data.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c）
- https://huggingface.co/api/datasets/cckevinn/GUI-Actor-Data（获取于 2026-10-17T02:42:32Z；SHA-256：d6271cff879b1a2a70490cf3dd95765bef44ecfca531d8ef3545f101673b4423）
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e）
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/data/data_config.yaml（获取于 2026-10-17T14:21:12Z；SHA-256：3521c849b29d7fc88430a8e73a8b2aeb2e613d7fa16ca054dd5bf4ec011b36ca）

---

## GUI-Odyssey

用于训练和评估智能体的人工演示 Android 跨应用导航任务过程，涵盖 6 类任务、212 个应用和约 1,400 种应用组合。

- 目录页面：https://awesomecua.com/zh/resources/github-opengvlab-gui-odyssey/
- 原始来源：https://github.com/OpenGVLab/GUI-Odyssey
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：跨应用、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:opengvlab/gui-odyssey

- 完整记录 JSON：https://awesomecua.com/resources/github-opengvlab-gui-odyssey/record.json

### 结构化规格

- 格式：JSON annotations, PNG screenshots
- 模态：screenshots, instructions, actions, bounding boxes, step context
- 数据划分：random, task, device, app
- 监督信号：cross-app trajectories, action grounding

#### 数量记录

- 8,334 个回合 — recommended hflqf88888/GUIOdyssey release（来源报告；来源：https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md）

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15）
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md（获取于 2026-10-16T11:39:52Z；SHA-256：fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831）
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md（获取于 2026-10-16T11:39:52Z；SHA-256：78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28）

---

## Click-100k

101,314 组截图与指令配对数据，附点击定位目标框，从公开 GUI 定位数据集及教程视频帧中筛选，并配有 EasyR1 点位预测提示。

- 目录页面：https://awesomecua.com/zh/resources/url-bf847949766b2b257d1c/
- 原始来源：https://huggingface.co/datasets/mlfoundations/Click-100k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T15:54:59Z
- ID：url:bf847949766b2b257d1c

### 范围记录

Sources named by the card: ShowUI (web and desktop), AutoGUI, PC-Agent-E, WaveUI, OS-Atlas, UGround, PixMo Points, SeeClick, UI-Vision, a Jedi spreadsheet subset and frames from professional-application tutorial videos labelled with Claude 4 Sonnet (the card says 85 videos, the release README 80+). Each source was capped at 50k instances, and noisy or trivial samples were removed with OmniParser and grounding-model filters. The card says SeeClick, PixMo and UGround samples were excluded during RL training, so the training subset is smaller than the release. The release declares no data license, and the upstream sources keep their own terms. The training config names the dataset mlfoundations/clicks-100k, a spelling that differs from this Hub ID.

- 完整记录 JSON：https://awesomecua.com/resources/url-bf847949766b2b257d1c/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, instructions, bounding boxes
- 数据划分：train
- 监督信号：element instructions with target bounding boxes

#### 数量记录

- 101,314 个示例 — train split (dataset_info in the card metadata)（来源报告；来源：https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md）
- 64 个 Parquet 分片 — data/ at Hub revision f728db8f（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7）

Each row holds an image path, the image, an EasyR1 prompt that embeds the element description, pixel and normalized boxes and the image size. Examples and shards are different units. Per-source counts are not given.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the dataset card nor the release repository declares a license for Click-100k; the code repository has no license file, and the upstream sources keep their own terms.
  来源：https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md

### 一手证据

- https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：3d6d130f966f51338eb58cae805640aa37db9985a7bbc86fa95417bcbef4fe01）
- https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7（获取于 2026-10-18T15:53:39Z；SHA-256：e3636612b79e3c042500613bf351bb4202669acaf1d3ccbb82cc73279bc049a8）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md（获取于 2026-10-18T15:53:37Z；SHA-256：c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669）

---

## GroundCUA

GroundCUA 发布覆盖 87 个应用的 56,000 张桌面截图、3.56M 条经人工验证的 UI 元素标注，以及 GroundNext 模型。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-groundcua/
- 原始来源：https://github.com/ServiceNow/GroundCUA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-11-04T13:12:35Z
- ID：github:servicenow/groundcua

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-groundcua/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ServiceNow/GroundCUA/HEAD/README.md（获取于 2026-11-04T13:12:35Z；SHA-256：ea25e5db95415f19bcf42f37547912eed185b72441a4fa57a0c981a7f50d732a）

---

## GUI-Odyssey — original OpenGVLab release

GUI Odyssey 原始 Hub 上传版：六台模拟设备上的 7,735 段跨应用 Android 导航轨迹，含逐步截图、操作和四个数据划分文件；数据卡说明其已由新版取代。

- 目录页面：https://awesomecua.com/zh/resources/url-5f7e55313246edf727bf/
- 原始来源：https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、跨应用、数据生成
- 证据核查日期：2026-10-18T12:08:12Z
- ID：url:5f7e55313246edf727bf

### 范围记录

The card now asks users to switch to the newer hflqf88888/GUIOdyssey release, which reports a different episode total; this record keeps the earlier OpenGVLab upload, whose card still links the GUI-Odyssey repository and paper. Hub API at revision 71e0e7e2: open access, with all_anno.json, 7,735 annotation JSON files, four split files and screenshot folders; its sibling list stops at 100,000 entries. A paginated Hub tree listing at the same revision counted 118,791 PNG files in 100 screenshot folders; zipped copies of annotations and screenshots sit under zips/. The card declares CC-BY-4.0 for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-5f7e55313246edf727bf/record.json

### 结构化规格

- 格式：JSON annotations, PNG screenshots, zip archives
- 模态：screenshots, instructions, actions, click and scroll coordinates, device metadata
- 数据划分：random, task, device, app
- 监督信号：cross-app trajectories, action grounding

#### 数量记录

- 7,735 个回合 — original OpenGVLab/GUI-Odyssey release（来源报告；来源：https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md）
- 7,735 个标注 JSON 文件 — annotations/ at revision 71e0e7e2（计算得出）（来源：https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889）

Each annotation file is one episode keyed by episode_id, with device, task (category, apps, meta-task, instruction) and per-step screenshot, action, info and ps fields; actions are CLICK, SCROLL, LONG_PRESS, TYPE, COMPLETE, IMPOSSIBLE, HOME and BACK, with coordinates normalized to 0-1000. Each split file lists train and test episode IDs.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md（获取于 2026-10-18T12:08:12Z；SHA-256：e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a）
- https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889（获取于 2026-10-18T12:08:13Z；SHA-256：4a8355cb0fb25eb47234f7ed6eace6abf12e462768f7f9240f81577a58811c4e）
- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md（获取于 2026-10-18T12:08:12Z；SHA-256：e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a）

---

## GUIAct

GUIAct 是网页和 Android GUI 的动作指令数据，分为单步、多步和智能手机部分。

- 目录页面：https://awesomecua.com/zh/resources/url-6cd150ec23361b4d2e84/
- 原始来源：https://huggingface.co/datasets/yiye2023/GUIAct
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：url:6cd150ec23361b4d2e84

### 范围记录

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/record.json

### 结构化规格

- 格式：JSON, Parquet
- 模态：screenshots, instructions, actions
- 数据划分：train, test
- 监督信号：single-step actions, multi-step navigation

#### 数量记录

- ≈ 67,000 条动作指令 — single-step portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）
- ≈ 15,000 条动作指令 — multi-step portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/datasets/yiye2023/GUIAct（获取于 2026-10-17T04:01:33Z；SHA-256：624ccdd6e6c5b29b588a4289d1d94c1a1c0803868bd586175f2c9ebc3bfdd0b6）
- https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：98b45ea81164d1e1a1dd82255207053b15cd6c69d922a1c5cf3387ce604d4b74）

---

## Online-Mind2Web task data

Online-Mind2Web 任务集的受限 Hub 发布版，含实时网站任务的单个 JSON 测试集；据项目 README，共有 136 个网站上的 300 项任务，发布方会随网站变化修订。

- 目录页面：https://awesomecua.com/zh/resources/url-a252b36bf1c440269a2e/
- 原始来源：https://huggingface.co/datasets/osunlp/Online-Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测
- 证据核查日期：2026-10-18T11:39:35Z
- ID：url:a252b36bf1c440269a2e

### 范围记录

The Hub API at revision eacad896 reports gated 'auto' (access is approved automatically after a logged-in request) and one data file, Online_Mind2Web.json, configured as the test split. The card and task file sit behind the gate; the description and counts come from the project README, which links this dataset as its data. The Hub card metadata declares CC BY 4.0, matching the README's dataset license; the repository code is MIT and is not applied to the data. The publishers replace invalid tasks over time (36 on 2025-11-03), so a result needs the dataset revision.

- 完整记录 JSON：https://awesomecua.com/resources/url-a252b36bf1c440269a2e/record.json

### 结构化规格

- 格式：JSON
- 模态：text
- 数据划分：test
- 监督信号：task definitions for live-web evaluation

#### 数量记录

- 300 个任务 — Online-Mind2Web task set as documented in the README（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md）
- 136 个网站 — Online-Mind2Web task set as documented in the README（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md）

Counts describe the task set according to the README; the gated file count remains unknown. The README says replacements aim to keep the same websites and a similar reference length, but the task population still changes between revisions.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/osunlp/Online-Mind2Web
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web（获取于 2026-10-18T11:39:35Z；SHA-256：a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23）
- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md（获取于 2026-10-18T11:39:36Z；SHA-256：49d7cc317fd2ba0df65abf65a0357d1fa2384e59019a96d4e24b784888599eaa）
- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web（获取于 2026-10-18T11:39:35Z；SHA-256：a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23）

---

## OS-Atlas Data

OS-Atlas 的 GUI 定位预训练数据，覆盖桌面端（Linux、macOS、Windows）、移动端和网页；元素框以左、上、右、下边界的相对比例存储。

- 目录页面：https://awesomecua.com/zh/resources/url-0fdeb1cf5f49f84820e6/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:0fdeb1cf5f49f84820e6

- 完整记录 JSON：https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/record.json

### 结构化规格

- 格式：JSON annotations, image archives
- 模态：screenshots, referring expressions, bounding boxes
- 数据划分：未记录
- 监督信号：element grounding

#### 数量记录

- > 270,000 张截图 — SeeClick-derived web subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）
- > 3,000,000 个 UI 元素 — SeeClick-derived web subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）
- ≥ 1,600,000 张图像 — FineWeb-derived subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）

These are subset-specific counts for OS-Atlas. Raw boxes use 0–1 coordinates; the documented training wrapper scales them to 0–1000.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data（获取于 2026-10-16T06:38:26Z；SHA-256：c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20）
- https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md（获取于 2026-10-16T11:40:46Z；SHA-256：19f28b4bc0798e28180b968010c0f7c8dfed2dbfb24b122b958476b871d2e4fd）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data（获取于 2026-10-16T06:38:26Z；SHA-256：c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20）

---

## VisualWebBench dataset

VisualWebBench 的 Hugging Face 数据集发布版本，涵盖视觉网页理解、OCR、元素定位和动作预测的七项任务。

- 目录页面：https://awesomecua.com/zh/resources/url-149769d8bf07b7fbabdc/
- 原始来源：https://huggingface.co/datasets/visualwebbench/VisualWebBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、GUI 定位、界面理解、网页导航
- 证据核查日期：2026-11-01T19:22:16Z
- ID：url:149769d8bf07b7fbabdc

- 完整记录 JSON：https://awesomecua.com/resources/url-149769d8bf07b7fbabdc/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/visualwebbench/VisualWebBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/visualwebbench/VisualWebBench（获取于 2026-11-01T19:22:16Z；SHA-256：5e9a830858c10166213bd4c7c360ff93d722fed198910736116f0b3f2f4b4a85）
- https://huggingface.co/api/datasets/visualwebbench/VisualWebBench（获取于 2026-11-01T19:22:16Z；SHA-256：5e9a830858c10166213bd4c7c360ff93d722fed198910736116f0b3f2f4b4a85）

---

## GUIChat

包含文字丰富的图像和边界框的对话式 GUI 监督数据，按单轮问答和多轮对话组织。

- 目录页面：https://awesomecua.com/zh/resources/url-edf38d43800be8c955ae/
- 原始来源：https://huggingface.co/datasets/yiye2023/GUIChat
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：url:edf38d43800be8c955ae

### 范围记录

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-edf38d43800be8c955ae/record.json

### 结构化规格

- 格式：JSON, Parquet
- 模态：screenshots, text, bounding boxes
- 数据划分：未记录
- 监督信号：single-turn question answering, multi-turn dialogue

#### 数量记录

- ≈ 44,000 组 QA 对 — single-turn portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）
- ≈ 6,000 段对话 — multi-turn portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/datasets/yiye2023/GUIChat（获取于 2026-10-17T04:01:33Z；SHA-256：3ccb4a9ded4f45aa334f0df5dc9a0f8963c645857e8442c46efe1d9cf4a4360b）
- https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7）

---

## GUIEnv-local

GUIEnv 已发布的局部监督数据，将网页区域与文本配对，用于 OCR 和 GUI 定位。

- 目录页面：https://awesomecua.com/zh/resources/url-0af07e00658a430cee6a/
- 原始来源：https://huggingface.co/datasets/yiye2023/GUIEnv
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：url:0af07e00658a430cee6a

### 范围记录

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate. GUIEnv-local is released; the advertised 10M-example GUIEnv-global pretraining collection is still unchecked.

- 完整记录 JSON：https://awesomecua.com/resources/url-0af07e00658a430cee6a/record.json

### 结构化规格

- 格式：JSON, Parquet
- 模态：screenshots, text, bounding boxes
- 数据划分：train, test
- 监督信号：OCR, region-text grounding

#### 数量记录

- ≈ 700,000 组区域文本 QA 对 — GUIEnv-local SFT data（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/datasets/yiye2023/GUIEnv（获取于 2026-10-17T04:01:33Z；SHA-256：15813be05dc76aed5f667875188bf9612e74ff2f4699d270dd0d1aeda86767f8）
- https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7）

---

## Mind2Web data

Mind2Web 众包网页任务演示的 Hub 发布版：训练集 JSON 包含原始与清洗后的 HTML、候选元素和 CLICK/TYPE/SELECT 步骤，另有受密码保护的三个测试集归档。

- 目录页面：https://awesomecua.com/zh/resources/url-380a6eedcb4de7778e88/
- 原始来源：https://huggingface.co/datasets/osunlp/Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、数据生成
- 证据核查日期：2026-10-18T11:38:06Z
- ID：url:380a6eedcb4de7778e88

### 范围记录

This is the Hub data release, distinct from the code and benchmark repository github:osu-nlp-group/mind2web. The Hub API at revision 17ece8eb reports an ungated repository holding 11 train JSON shards, test.zip and scores_all_data.pkl. The card declares CC BY 4.0 for the data; the code repository's MIT license is not applied to it. Multimodal-Mind2Web (paired screenshots) and the raw trace dump are separate releases outside this record.

- 完整记录 JSON：https://awesomecua.com/resources/url-380a6eedcb4de7778e88/record.json

### 结构化规格

- 格式：JSON, password-protected ZIP (test splits)
- 模态：task descriptions, raw HTML, cleaned HTML, candidate elements, actions
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：crowdsourced action sequences, ground-truth target elements

#### 数量记录

- > 2,000 个任务 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 137 个网站 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 31 个领域 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 1,009 个任务实例 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 252 个任务实例 — cross-task test split (test_task)（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 177 个任务实例 — cross-website test split (test_website)（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 912 个任务实例 — cross-domain test split (test_domain)（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）

Each instance is one task with its multi-step action sequence; step counts use a different unit. The card prints the cross-domain size as '9,12'; the repository README gives 912. The test splits are released only as a ZIP whose password the README publishes, with a request not to redistribute the unzipped files. scores_all_data.pkl holds candidate-ranking outputs of a tuned DeBERTa-v3-base model, not annotations.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md（获取于 2026-10-18T11:38:06Z；SHA-256：d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a）
- https://huggingface.co/api/datasets/osunlp/Mind2Web（获取于 2026-10-18T11:38:07Z；SHA-256：25fcf0a0ee9c1c89b33cdae0ebe7ffd5721e4685fe4b74377184be983bd1f597）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-18T11:38:07Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md（获取于 2026-10-18T11:38:06Z；SHA-256：d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a）

---

## Mind2Web-Live

WebCanvas 实时网页基准的任务文件：源自 Mind2Web 的 438 项训练任务和 104 项测试任务，使用 URL 或页面元素上的关键节点检查评估中间进度。

- 目录页面：https://awesomecua.com/zh/resources/url-03ffa3f28413bc2edb1b/
- 原始来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T15:45:39Z
- ID：url:03ffa3f28413bc2edb1b

### 范围记录

The files hold task instructions, reference task lengths and key-node evaluation functions (URL inclusion or exact match, element path and value matches, and semantic URL and value matches); trajectories and page snapshots are separate data types. Agents run on live websites through the WebCanvas framework, so results depend on site changes, location and time. The test file was revised on 2024-10-24; the 2024-05-28 test file stays under old_version with 104 tasks and 444 key nodes, which with the 1,995 training key nodes gives the 2,439 states the WebCanvas README reports. The card itself links only the WebCanvas repository and declares CC-BY-4.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/record.json

### 结构化规格

- 格式：JSON
- 模态：task instructions, URL and page-element evaluation functions
- 数据划分：train (2024-05-28 file), test (2024-10-24 file)
- 监督信号：key-node evaluation annotations, reference task lengths

#### 数量记录

- 438 个任务 — train file mind2web-live_train_20240528.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json）
- 1,995 条关键节点评测条目 — train file mind2web-live_train_20240528.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json）
- 104 个任务 — test file mind2web-live_test_20241024.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json）
- 443 条关键节点评测条目 — test file mind2web-live_test_20241024.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json）
- 542 个任务 — original Mind2Web-Live release as described in the WebCanvas README（来源报告；来源：https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md）

Tasks and key-node evaluation entries are different units. The revised test file has one fewer key node than the original 2024-05-28 test file.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live（获取于 2026-10-18T15:45:39Z；SHA-256：1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/raw/160677b57f6a608e6d63b51849a33d2920b35588/README.md（获取于 2026-10-18T15:45:39Z；SHA-256：8ac014447b87cd4450289e5e3b3254e0f8ad9a90d31e76b0efcb70c402aaa80e）
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md（获取于 2026-10-18T15:45:39Z；SHA-256：5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json（获取于 2026-10-18T15:45:39Z；SHA-256：026adb028cc07f72e39af0952c8770fa630d59ea8ceffb4dc4fab5e01fd57b35）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json（获取于 2026-10-18T15:45:40Z；SHA-256：abc2032302fed1ac801539ecc6003dd73ff0aafe824aaf9450e4e504a8ff83f2）
- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live（获取于 2026-10-18T15:45:39Z；SHA-256：1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d）

---

## Multimodal-Mind2Web

Mind2Web 操作步骤与对应网页截图对齐，附原始及清理后的 HTML、候选元素和目标操作，包含训练集及按任务、网站和域名划分的留出测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-66f780b493156dc7efe5/
- 原始来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、评测
- 证据核查日期：2026-10-18T16:02:04Z
- ID：url:66f780b493156dc7efe5

### 范围记录

Each row is one action step with the page state before the action; tasks are distinct annotation IDs. The card says the three test splits were human-verified for element visibility and rendering, while the train split may contain badly rendered screenshots. Its test task counts (177, 142 and 694) are lower than the 252, 177 and 912 task instances that the Mind2Web README lists for the cross-task, cross-website and cross-domain test sets. The card points to the SeeAct repository and paper and declares OpenRAIL, recorded as stated; terms for the underlying website content were not assessed.

- 完整记录 JSON：https://awesomecua.com/resources/url-66f780b493156dc7efe5/record.json

### 结构化规格

- 格式：Parquet
- 模态：webpage screenshots, raw and cleaned HTML, task descriptions, action histories
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：target operation per step (CLICK, TYPE or SELECT with value), positive and negative candidate elements

#### 数量记录

- 7,775 个动作步骤 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,009 个任务 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,339 个动作步骤 — test_task split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 177 个任务 — test_task split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,019 个动作步骤 — test_website split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 142 个任务 — test_website split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 4,060 个动作步骤 — test_domain split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 694 个任务 — test_domain split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）

Action steps and tasks are different units; the split sizes are the card's figures, and a column read of the Parquet files at this revision gave the same step and task counts.

### 许可证信息

- 代码：未记录
- 数据：openrail — https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web（获取于 2026-10-18T16:02:04Z；SHA-256：261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503）
- https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md（获取于 2026-10-18T16:02:04Z；SHA-256：8bb1e02777556f3f679c4610be9e5572b3cb218a89b98d6f75a4fc1b82fa06dd）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/33bd95caeee7bba22dd08ecc935845e15c5e5dc7/README.md（获取于 2026-10-18T16:02:15Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web（获取于 2026-10-18T16:02:04Z；SHA-256：261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503）

---

## MultiUI

基于网页 UI 构建的 7.3 百万个训练样本，以增强的无障碍树组织，用于理解文本丰富的视觉内容；与 UIX-Qwen2 模型一同发布。

- 目录页面：https://awesomecua.com/zh/resources/github-neulab-multiui/
- 原始来源：https://github.com/neulab/multiui
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:neulab/multiui

- 完整记录 JSON：https://awesomecua.com/resources/github-neulab-multiui/record.json

### 结构化规格

- 格式：未记录
- 模态：webpage UI content, text, accessibility-derived structure
- 数据划分：training collection
- 监督信号：UI understanding, text-rich visual tasks

#### 数量记录

- ≈ 7,300,000 个样本 — reported MultiUI training collection（来源报告；来源：https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md）

The README provides a rounded sample count. Unique screenshots and normalized split sizes are unrecorded. Synthetic examples and publicly sourced web content have provenance and quality limits; data terms must be checked separately from repository code.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）

---

## OpenMobile-Data-v2

来自仿真器和模拟器轨迹的移动端智能体监督数据，另含用于强化学习、带有初始状态和成功判定条件的可执行任务。

- 目录页面：https://awesomecua.com/zh/resources/url-546e6c95825d1318c98d/
- 原始来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页
- 主题：手机操作、数据生成、强化学习、工具集成
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:546e6c95825d1318c98d

### 范围记录

The reviewed card contains no explicit license declaration, so data-license status remains unknown. The repository code license is not inherited. The current code README points to the v2 dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-546e6c95825d1318c98d/record.json

### 结构化规格

- 格式：JSON, JSONL, PNG
- 模态：screenshots, text, tool calls
- 数据划分：sft/train, rl/train
- 监督信号：next-action supervision, verifiable task outcomes

#### 数量记录

- 11,643 条轨迹 — SFT collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）
- 118,582 个决策步骤 — SFT collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）
- 2,475 个可执行任务 — RL collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）

These are publisher-reported totals at three distinct grains. Earlier screenshots may be collapsed; each SFT example keeps at most three images. The card and repository disagree on the singular/plural RL filename, so consumers should inspect the actual file manifest.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：abacf9a10759a9e7a8eeec5a266c96ed83742bd9296a19be95d09c9717e18b7c）
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d）
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data（获取于 2026-10-17T19:15:18Z；SHA-256：14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a）
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data-v2（获取于 2026-10-17T19:15:20Z；SHA-256：14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a）

---

## ScreenQA

基于 35,000 张 Rico 移动端截图的约 86,000 组人工编写问答对，另有 ScreenQA Short 和 ComplexQA 变体，用于评测屏幕内容理解。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-screen-qa/
- 原始来源：https://github.com/google-research-datasets/screen_qa
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:google-research-datasets/screen_qa

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-screen-qa/record.json

### 结构化规格

- 格式：JSON
- 模态：questions, answers, screen references, bounding boxes
- 数据划分：train, validation, test
- 监督信号：screen question answering, answer grounding

#### 数量记录

- 68,951 组问答对 — original ScreenQA train split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）
- 8,614 组问答对 — original ScreenQA validation split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）
- 8,419 组问答对 — original ScreenQA test split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）

All questions for a given screenshot share one split. ScreenQA Short reuses the same questions/screens; ComplexQA is a separate extension. ScreenQA Short reuses the same questions and screens; ComplexQA is a separate extension.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：7d1bfe7d6eddd5d3fc4c33d4814de3cabf7a6b6fd3d3f85ba4c2b33036bf8867）

---

## ScreenRef

GUI 截图及配套的定位指令和目标，包含目标缺失的样例；图像访问按发布方条款受限。

- 目录页面：https://awesomecua.com/zh/resources/url-56bda04bd8d3a438deb3/
- 原始来源：https://huggingface.co/datasets/PrentisAI/ScreenRef
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Android、Linux
- 主题：GUI 定位、数据生成、界面理解
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:56bda04bd8d3a438deb3

### 范围记录

The public Hub API reports gated=auto and a Restricted Research-Only declaration. The companion card distinguishes annotations from screenshots and limits reuse. Access terms were inspected as public metadata; no access agreement was accepted or gated files downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, text, coordinates
- 数据划分：train
- 监督信号：instruction-to-click grounding, bounding boxes, absent-target abstention

#### 数量记录

- 585,981 张不重复的截图 — ScreenRef image inventory（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 633,369 行标注数据 — full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 22,475 行标注数据 — refusal subset of full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）

The publisher reports these inventories in the companion annotation card. The refusal subset is included in the full recipe. Screenshot access is gated; no image download or independent corpus recount was performed.

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/PrentisAI/ScreenRef
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/PrentisAI/ScreenRef（获取于 2026-10-17T01:48:51Z；SHA-256：634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317）
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）
- https://huggingface.co/api/datasets/PrentisAI/ScreenRef（获取于 2026-10-17T01:48:51Z；SHA-256：634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317）

---

## UI-Vision

用于界面理解和交互研究的桌面 GUI 数据。

- 目录页面：https://awesomecua.com/zh/resources/url-2c2004baae4669f8169a/
- 原始来源：https://huggingface.co/datasets/ServiceNow/ui-vision
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:2c2004baae4669f8169a

- 完整记录 JSON：https://awesomecua.com/resources/url-2c2004baae4669f8169a/record.json

### 结构化规格

- 格式：JSON annotations, image files
- 模态：screenshots, bounding boxes, UI labels, action annotations
- 数据划分：未记录
- 监督信号：element grounding, layout grounding, action prediction

#### 数量记录

- 83 个软件应用 — paper-described benchmark coverage（来源报告；来源：https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md）

This is an offline evaluation dataset. Application coverage and sample counts are different units. The inspected file-layout documentation describes grounding annotations and images. A common split and complete action-trajectory inventory are unrecorded.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ServiceNow/ui-vision
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ServiceNow/ui-vision（获取于 2026-10-16T06:38:26Z；SHA-256：34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c）
- https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md（获取于 2026-10-17T02:02:37Z；SHA-256：295cf7f7500a18cea5c80eab1cdf4d7264f2f0e959b75efc5ba59083d93c9097）
- https://huggingface.co/api/datasets/ServiceNow/ui-vision（获取于 2026-10-16T06:38:26Z；SHA-256：34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c）

---

## Aguvis stage 1 grounding data

Aguvis 第一阶段训练数据集，汇集多个界面数据源的 GUI 元素定位标注和图像归档。

- 目录页面：https://awesomecua.com/zh/resources/url-06dd5ac7917c45d48509/
- 原始来源：https://huggingface.co/datasets/xlangai/aguvis-stage1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:06dd5ac7917c45d48509

### 范围记录

The manifest contains grounding JSON annotations and packaged images. The card declares Apache-2.0, which is recorded for this release without overriding source-dataset rights. This first-stage grounding collection is distinct from the project’s second-stage trajectory collection. No archive or training sample was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-06dd5ac7917c45d48509/record.json

### 结构化规格

- 格式：JSON annotations, ZIP image packages, multipart TAR image packages
- 模态：GUI screenshots, grounding annotations
- 数据划分：training
- 监督信号：GUI grounding supervised fine-tuning

#### 数量记录

未记录数量。

Stage 1 grounding release, Hub revision 5d11f8f5. JSON annotations and ZIP/multipart TAR image packages are publicly listed. The official training configuration groups web, desktop and mobile inputs and selects all rows of its configured inputs. The config names omniact.json while the Hub manifest lists omniact_fix.json, so local paths need reconciliation. No sample total is inferred from names such as webui350k. Apache-2.0 is the release card declaration; upstream source rights remain separate.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77）
- https://huggingface.co/api/datasets/xlangai/aguvis-stage1（获取于 2026-10-17T02:03:33Z；SHA-256：cb3b8ec88d811d946df3cbf38ef555db5a10d1124668765710c380e9b1988b06）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage1.yaml（获取于 2026-10-17T14:21:11Z；SHA-256：f6a9e55c5d48469e2c8f7799d917d25e7a758036f71c7c045fa92c35057d20da）
- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77）

---

## Aguvis stage 2 trajectory data

Aguvis 第二阶段的界面轨迹数据集，用于在定位预训练后学习操作序列、规划和推理。

- 目录页面：https://awesomecua.com/zh/resources/url-b5e2127e07f692d516b9/
- 原始来源：https://huggingface.co/datasets/xlangai/aguvis-stage2
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：规划、数据生成
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:b5e2127e07f692d516b9

### 范围记录

The manifest contains trajectory annotations and archives associated with mobile, desktop and web sources. The card declares Apache-2.0. This stage has a different training purpose and files from the grounding release. No archive or training sample was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-b5e2127e07f692d516b9/record.json

### 结构化规格

- 格式：JSON annotations, ZIP image packages, multipart TAR image packages
- 模态：GUI screenshots, natural-language instructions, action trajectories
- 数据划分：training
- 监督信号：GUI trajectory supervised fine-tuning, planning and reasoning with inner monologue

#### 数量记录

未记录数量。

Stage 2 trajectory release, Hub revision bd6f1ed4, is distinct from Stage 1 grounding. The public manifest lists source-specific JSON levels and image ZIP/multipart TAR packages. The training recipe uses all rows for some inputs and random:33% for others; several l2 paths occur twice while the manifest also contains l3 files. Recipe rows/levels are neither independent datasets nor disjoint train/test splits. No example/action/trajectory count is inferred. Apache-2.0 is the card declaration, with separate underlying source terms.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72）
- https://huggingface.co/api/datasets/xlangai/aguvis-stage2（获取于 2026-10-17T02:03:33Z；SHA-256：f030264a7a8c7485dc7cf15ca554d84450cc492d2ac90e5965810a0207ef370b）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage2.yaml（获取于 2026-10-17T14:21:11Z；SHA-256：8c1b39e9d16067018ce845fd4e996f34e2b47346c342b2ba26b030f4a5338b66）
- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72）

---

## AutoGUI v1 training data

基于截图的定位和图像描述样本，包含 UI 功能描述、目标坐标和边界框。

- 目录页面：https://awesomecua.com/zh/resources/url-79287058342289aa5d45/
- 原始来源：https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-16T10:42:13Z
- ID：url:79287058342289aa5d45

### 范围记录

The row count and unique-screen count are different units. The data card documents image scaling conventions that affect coordinate interpretation.

- 完整记录 JSON：https://awesomecua.com/resources/url-79287058342289aa5d45/record.json

### 结构化规格

- 格式：未记录
- 模态：screenshots, instructions, functionality labels, bounding boxes
- 数据划分：train
- 监督信号：element grounding, functionality captioning

#### 数量记录

- 701,864 行训练数据 — default/train in the dataset card metadata（来源报告；来源：https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md）

Rows and unique screenshots are different units. The card documents image-downscaling conventions that affect coordinates; preserve the device and original image-size fields.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md（获取于 2026-10-16T10:42:13Z；SHA-256：c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7）
- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md（获取于 2026-10-16T10:42:13Z；SHA-256：c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7）

---

## CAGUI

CAGUI 是随 AgentCPM-GUI 发布的中文 Android GUI 基准，包含面向控件和 OCR 文本的定位任务，以及面向中文应用多步任务的智能体任务。

- 目录页面：https://awesomecua.com/zh/resources/url-a06622da7688e3718a7b/
- 原始来源：https://huggingface.co/datasets/openbmb/CAGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:a06622da7688e3718a7b

- 完整记录 JSON：https://awesomecua.com/resources/url-a06622da7688e3718a7b/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/openbmb/CAGUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/openbmb/CAGUI（获取于 2026-10-16T06:38:26Z；SHA-256：98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd）
- https://huggingface.co/api/datasets/openbmb/CAGUI（获取于 2026-10-16T06:38:26Z；SHA-256：98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd）

---

## ChilleD/WildAWM

WildAWM 提供 341 项跨命令行、MCP 和网页界面的计算机使用任务，包含固定的任务环境以及供 Harbor 运行的训练集和测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-eb8af3be965f5c0fde6a/
- 原始来源：https://huggingface.co/datasets/ChilleD/WildAWM
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页
- 主题：评测、数据生成、沙箱、工具集成
- 证据核查日期：2026-11-09T19:56:22Z
- ID：url:eb8af3be965f5c0fde6a

### 范围记录

The card lists 100 supervised fine-tuning tasks, 208 reinforcement-learning tasks, and 33 test tasks. It describes programmatic verification with completion and failure rewards.

- 完整记录 JSON：https://awesomecua.com/resources/url-eb8af3be965f5c0fde6a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ChilleD/WildAWM（获取于 2026-11-09T19:56:22Z；SHA-256：be67f753d85e6d1de66f1d22a247a80131d71647f58b2758e53e71ab9d644733）
- https://huggingface.co/api/datasets/ChilleD/WildAWM（获取于 2026-11-09T19:56:22Z；SHA-256：be67f753d85e6d1de66f1d22a247a80131d71647f58b2758e53e71ab9d644733）

---

## cua-ai/cua-s1-forms

用于根据文档内容选择图形界面表单操作的训练与评测数据，包含合成的训练、验证和测试集，以及真实浏览器表单演示。

- 目录页面：https://awesomecua.com/zh/resources/url-62d912811f786f787ae4/
- 原始来源：https://huggingface.co/datasets/cua-ai/cua-s1-forms
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、动作预测、评测
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:62d912811f786f787ae4

### 范围记录

The card lists train.jsonl, validation.jsonl, test.jsonl, and demo.jsonl. Each row contains a context, candidate options, and the correct option index. The stated license is MIT.

- 完整记录 JSON：https://awesomecua.com/resources/url-62d912811f786f787ae4/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/cua-ai/cua-s1-forms
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/cua-ai/cua-s1-forms（获取于 2026-11-09T05:05:17Z；SHA-256：8d3f5b91c78778051ee4c287658eb823c39ae9e3ff6f55ed720d55d78174afef）
- https://huggingface.co/api/datasets/cua-ai/cua-s1-forms（获取于 2026-11-09T05:05:17Z；SHA-256：8d3f5b91c78778051ee4c287658eb823c39ae9e3ff6f55ed720d55d78174afef）

---

## CUA-Gym

CUA-Gym 提供用于智能体研究的计算机使用环境和任务资源。

- 目录页面：https://awesomecua.com/zh/resources/url-6aa1aa58a7a888395189/
- 原始来源：https://huggingface.co/datasets/xlangai/CUA-Gym
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:6aa1aa58a7a888395189

- 完整记录 JSON：https://awesomecua.com/resources/url-6aa1aa58a7a888395189/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/xlangai/CUA-Gym
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xlangai/CUA-Gym（获取于 2026-10-16T06:38:26Z；SHA-256：43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44）
- https://huggingface.co/datasets/xlangai/CUA-Gym/raw/main/README.md（获取于 2026-10-17T16:10:25Z；SHA-256：962cd9162bea83f7adfedb3da50129bcf4203ae65176bdf53f0af6788b9603ef）
- https://huggingface.co/api/datasets/xlangai/CUA-Gym（获取于 2026-10-16T06:38:26Z；SHA-256：43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44）

---

## Dreamer V1 Data

随 WebDreamer 项目发布的网页世界模型训练数据，包含提示词、图像、操作描述和回复。

- 目录页面：https://awesomecua.com/zh/resources/url-eadc6cba9ea46c38dd1d/
- 原始来源：https://huggingface.co/datasets/osunlp/Dreamer-V1-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、数据生成
- 证据核查日期：2026-10-16T11:09:28Z
- ID：url:eadc6cba9ea46c38dd1d

### 范围记录

The card reports a cleaned size of 3.12M without explicitly defining its counting unit. The catalog leaves the exact sample count unknown. Its data license differs from the model-weight license.

- 完整记录 JSON：https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/record.json

### 结构化规格

- 格式：未记录
- 模态：images, prompts, actions, responses
- 数据划分：未记录
- 监督信号：web-world-model prediction

#### 数量记录

未记录数量。

The card reports a cleaned size of 3.12M without defining the counting unit, so no sample total is inferred. The data card declares noncommercial share-alike terms, separately from the model-weight license.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c）
- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c）

---

## GUI-R1 data bundle

随 GUI-R1 提供的训练和评估用 Parquet 数据包，包含 GUI 定位及移动端和网页端的动作预测数据。

- 目录页面：https://awesomecua.com/zh/resources/url-df680385f18b01a825be/
- 原始来源：https://huggingface.co/datasets/ritzzai/GUI-R1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、Linux、macOS、Android、网页
- 主题：GUI 定位、强化学习、评测
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:df680385f18b01a825be

### 范围记录

The Hub is a dataset repository with Parquet payloads, although the short card mistakenly calls it a model. The official project identifies it as training/evaluation data and describes subsequent expanded mixtures. MIT is declared in this dataset card; upstream dataset terms remain separate. No 3K/800K aggregate count is inferred for the mutable bundle.

- 完整记录 JSON：https://awesomecua.com/resources/url-df680385f18b01a825be/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3）
- https://huggingface.co/api/datasets/ritzzai/GUI-R1（获取于 2026-10-17T02:42:32Z；SHA-256：f31ae9547d94967dd91f5cde5e5c66430d7d59ee3a525c0914bc600a79999af7）
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d）
- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3）

---

## GUIOdyssey — current data release

跨应用 Android 交互操作片段，包含细粒度步骤指令、屏幕描述、操作上下文和目标框。

- 目录页面：https://awesomecua.com/zh/resources/url-511903ebfac45e6751b2/
- 原始来源：https://huggingface.co/datasets/hflqf88888/GUIOdyssey
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、跨应用、数据生成
- 证据核查日期：2026-10-16T11:39:52Z
- ID：url:511903ebfac45e6751b2

### 范围记录

The project recommends this release over its earlier OpenGVLab/GUI-Odyssey upload. Episode count follows the current data card; conflicting repository prose is documented in the profile.

- 完整记录 JSON：https://awesomecua.com/resources/url-511903ebfac45e6751b2/record.json

### 结构化规格

- 格式：JSON annotations, PNG screenshots
- 模态：screenshots, instructions, actions, bounding boxes, step context
- 数据划分：random, task, device, app
- 监督信号：cross-app trajectories, action grounding

#### 数量记录

- 8,334 个回合 — recommended hflqf88888/GUIOdyssey release（来源报告；来源：https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md）

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md（获取于 2026-10-16T11:39:52Z；SHA-256：fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831）
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15）
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md（获取于 2026-10-16T11:39:52Z；SHA-256：78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28）
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md（获取于 2026-10-16T11:39:52Z；SHA-256：fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831）

---

## MONDAY annotations

从视频提取的移动端导航标注，将场景边界、屏幕或元素框与操作标签配对，用于训练和评估 GUI 智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/
- 原始来源：https://huggingface.co/datasets/runamu/MONDAY
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：数据生成、手机操作、视频、模仿学习
- 证据核查日期：2026-10-17T12:32:07Z
- ID：url:570654ff67ecefa2b955

### 范围记录

The ungated Hub publishes four Parquet splits containing video identifiers and annotations. Original videos and extracted screenshots must be obtained separately; the code README explains that consumers download source videos from YouTube. A Windows Mobile unseen-OS test split is documented. The companion code has an Apache-2.0 file, while the data card declares no data license and the repository defers third-party materials to original terms. Training scripts, pretrained checkpoints and the full generation pipeline remain planned updates.

- 完整记录 JSON：https://awesomecua.com/resources/url-570654ff67ecefa2b955/record.json

### 结构化规格

- 格式：Parquet
- 模态：text, timestamps, bounding boxes, action labels
- 数据划分：train, validation, test, test_unseen_os
- 监督信号：video-derived scene and action annotations

#### 数量记录

- 19,725 条视频标注记录 — train split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 495 条视频标注记录 — validation split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 100 条视频标注记录 — test split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 50 条视频标注记录 — test_unseen_os split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- ≈ 333,000 个检测到的场景 — publisher overview of MONDAY（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- ≈ 313,000 个已识别的动作 — publisher overview of MONDAY（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）

Split counts are video-annotation rows; scene and action totals are rounded publisher reports. Source videos/images are not included in the Hub files.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：No dataset-license declaration in the inspected card; Apache-2.0 applies to companion code and is not transferred to YouTube content or this annotation package.
  来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE

### 一手证据

- https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md（获取于 2026-10-17T12:32:07Z；SHA-256：62a346fd0d328deb5b56a652c8581850b0c8120f5c77e53b33f24b9baf937adb）
- https://huggingface.co/api/datasets/runamu/MONDAY（获取于 2026-10-17T12:32:07Z；SHA-256：f55c319a70c8ff988049363dc8fc266a9f1b1a09b8ac7096ee573f962e8f9492）
- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md（获取于 2026-10-17T12:30:53Z；SHA-256：cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc）
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE（获取于 2026-10-17T12:34:09Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## MultiUI training data

MultiUI 网页 UI 训练数据的受限 Hub 版本；项目 README 称约有 730 万条样本，打包为两个训练阶段 JSON 文件和 21 个分卷 TAR 归档。

- 目录页面：https://awesomecua.com/zh/resources/url-8cd911654653a6ba8521/
- 原始来源：https://huggingface.co/datasets/neulab/MultiUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、数据生成
- 证据核查日期：2026-10-18T15:57:03Z
- ID：url:8cd911654653a6ba8521

### 范围记录

The Hub API at revision c17e5f29 reports gated 'auto' and lists stage1_data.json (about 5.2 GB), stage2_data_to_be_combined_with_general_data.json (about 0.25 GB) and 21 TAR parts in three groups: v0.6_5M (12 parts), v0.7_exclude_v0.6 (4) and v0.8_exclude_v0.7 (5), about 955 GB in all. The card and files sit behind the gate; the description comes from the project README, which links this dataset as its 7.3-million-sample training set and says the data was built from webpages linked in FineWeb or generated by LLMs. The card metadata declares ODC-BY for the data; the GitHub repository has no license file, so its code terms stay unknown.

- 完整记录 JSON：https://awesomecua.com/resources/url-8cd911654653a6ba8521/record.json

### 结构化规格

- 格式：JSON, split TAR archives
- 模态：webpage UI content, text, accessibility-derived structure
- 数据划分：未记录
- 监督信号：text-rich web UI understanding tasks

#### 数量记录

- ≈ 7,300,000 个样本 — MultiUI training dataset as described in the project README（来源报告；来源：https://raw.githubusercontent.com/neulab/multiui/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md）
- 21 个 TAR 归档分卷 — Hub file manifest at revision c17e5f29（计算得出）（来源：https://huggingface.co/api/datasets/neulab/MultiUI/tree/c17e5f297392be76741dcc3599e8fedc4304b386）

The sample count is the README's rounded figure; the gated files remain uncounted. Archive parts are package files. The versioned archive names (v0.7 excluding v0.6, v0.8 excluding v0.7) suggest incremental releases, but the card that would explain them is gated.

### 许可证信息

- 代码：未记录
- 数据：odc-by — https://huggingface.co/datasets/neulab/MultiUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/neulab/MultiUI（获取于 2026-10-18T15:57:03Z；SHA-256：05ffe28893cff7ee8ae2612252432a64af1e270393c5bdc9113e223601abf815）
- https://raw.githubusercontent.com/neulab/multiui/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md（获取于 2026-10-18T15:56:29Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://huggingface.co/api/datasets/neulab/MultiUI/tree/c17e5f297392be76741dcc3599e8fedc4304b386（获取于 2026-10-18T15:56:29Z；SHA-256：a21100c8e73264bf6c02af02d1d490dc6436bf674e97f297fbb3d77b7d97a944）
- https://huggingface.co/api/datasets/neulab/MultiUI（获取于 2026-10-18T15:57:03Z；SHA-256：05ffe28893cff7ee8ae2612252432a64af1e270393c5bdc9113e223601abf815）

---

## OpenGVLab/MMBench-GUI

MMBench-GUI 提供标注数据和离线图像，用于评估横跨桌面、移动端及网页的 GUI 智能体对界面的理解与元素定位能力。

- 目录页面：https://awesomecua.com/zh/resources/url-339e28b1f939ae45f9fe/
- 原始来源：https://huggingface.co/datasets/OpenGVLab/MMBench-GUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows、macOS、Linux、iOS、Android、网页
- 主题：评测、GUI 定位、界面理解、自动化
- 证据核查日期：2026-11-09T06:16:39Z
- ID：url:339e28b1f939ae45f9fe

### 范围记录

The repository includes L1 and L2 annotation files and an offline image archive. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-339e28b1f939ae45f9fe/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OpenGVLab/MMBench-GUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OpenGVLab/MMBench-GUI（获取于 2026-11-09T06:16:39Z；SHA-256：bee7e3ec919487a075372e5503416e279fd97fa17bfba654d17a957de5569dff）
- https://huggingface.co/api/datasets/OpenGVLab/MMBench-GUI（获取于 2026-11-09T06:16:39Z；SHA-256：bee7e3ec919487a075372e5503416e279fd97fa17bfba654d17a957de5569dff）

---

## OpenMobile-Data

OpenMobile 合成的 Android 智能体数据，包括由 AndroidWorld 运行轨迹生成的四个 LLaMA-Factory SFT 划分文件，以及原始轨迹和截图归档。

- 目录页面：https://awesomecua.com/zh/resources/url-3849b18aa87edefc6afd/
- 原始来源：https://huggingface.co/datasets/cckevinn/OpenMobile-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-19T06:53:38Z
- ID：url:3849b18aa87edefc6afd

### 范围记录

The short card says the four JSON files are LLaMA-Factory training files and raw_dumps.tar.gz holds the original rollout trajectories with the screenshots the training files need. The OpenMobile code README registers the files as openmobile_split1 to openmobile_split4 in ShareGPT format and gives a converter to the Qwen3.5 format. No license is declared on the card.

- 完整记录 JSON：https://awesomecua.com/resources/url-3849b18aa87edefc6afd/record.json

### 结构化规格

- 格式：LLaMA-Factory ShareGPT JSON, tar.gz archive of raw rollouts
- 模态：screenshots, instructions, step histories, reasoning text, actions, target element bounding boxes
- 数据划分：split1, split2, split3, split4
- 监督信号：synthesized task instructions, agent rollout trajectories with learner/expert policy switching

#### 数量记录

- ≈ 2,800 条合成指令 — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）
- ≈ 34,000 个动作步骤 — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）
- 20 个 Android 应用 — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）

Instruction, step and app counts are the project page's headline figures. Streaming the four split files at revision 8ed12d1 gave 7,393, 6,767, 9,345 and 3,855 step-level samples (27,360 in total), each with one screenshot path into raw_dumps, a system prompt with the mobile_use tool, the task and step history, an assistant thought with a tool call, and a target bounding box; the files exceed the receipt budget, leaving these computed counts outside count observations. Steps in the files and the page's action steps are not reconciled. The four split names are training files.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card declares no license; the code repository's Apache-2.0 license is not transferred to the data, and the code README says other released artifacts may have their own terms.
  来源：https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md

### 一手证据

- https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md（获取于 2026-10-19T06:53:38Z；SHA-256：5a119d88171e645b3dccad526ed25e75d4e28e4e5c101f89daa1c6697b92d601）
- https://huggingface.co/api/datasets/cckevinn/OpenMobile-Data/revision/8ed12d15763057f8e8d40134cfddfcc756ff8a7a（获取于 2026-10-19T06:53:39Z；SHA-256：054432be78024ecf09b1d8f022c11b82addf7ee5127a8f355d9a6eb18b212355）
- https://njucckevin.github.io/openmobile/（获取于 2026-10-19T06:53:36Z；SHA-256：b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md（获取于 2026-10-19T06:53:33Z；SHA-256：8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080）

---

## OSWorld 2.0 task classes

OSWorld 2.0 基准的受限 Hub 发布版，包含 Python 任务类，其中的任务设置与评估逻辑未放入公开代码，以减少泄漏，并按基准版本固定。

- 目录页面：https://awesomecua.com/zh/resources/url-1c4a0389ace7c5cb8a4b/
- 原始来源：https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务
- 证据核查日期：2026-10-18T11:47:41Z
- ID：url:1c4a0389ace7c5cb8a4b

### 范围记录

The Hub API at revision 0a1aadad reports gated 'auto' (access is approved automatically after a logged-in request) and 147 files: 108 task_*.py classes, 34 task implementation notes, a task-hash manifest and the card. The card and files sit behind the gate; the description comes from the OSWorld-V2 README, which links this dataset as its data and downloads it into evaluation_examples/task_class. The README pins task, asset and website snapshots per benchmark release (osworld-v2.1 recommended, plus osworld-v2-2026.08.08 and osworld-v2-2026.06.24); main-branch file counts are distinct from release task counts. Task assets are in the separate gated xlangai/osworld_v2_assets_gated dataset and anonymous runtime assets in xlangai/osworld_v2_assets; neither is covered here. The code repository github.com/xlang-ai/OSWorld-V2 has no active catalog record, so no component relation is recorded. The card metadata declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/record.json

### 结构化规格

- 格式：Python, Markdown, JSON manifest
- 模态：Python task classes, implementation notes
- 数据划分：未记录
- 监督信号：task setup and evaluator code

#### 数量记录

- 108 个任务类文件 — task_*.py on the main branch at revision 0a1aadad（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks）
- 34 个实现说明文件 — implementation_notes/task_*.md on the main branch at revision 0a1aadad（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks）

Counts are files in the public main-branch manifest. Benchmark releases are pinned to their own tags; these are main-branch counts.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks（获取于 2026-10-18T11:47:41Z；SHA-256：b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md（获取于 2026-10-18T11:47:41Z；SHA-256：0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4）
- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks（获取于 2026-10-18T11:47:41Z；SHA-256：b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87）

---

## osworld_v2_assets_gated

OSWorld 2.0 计算机使用基准任务资源的受限访问 Hub 快照，包含任务初始化文件和标准答案文件等，需按基准版本固定后下载到本地再运行任务。

- 目录页面：https://awesomecua.com/zh/resources/url-3de50fa3eee0081d31ac/
- 原始来源：https://huggingface.co/datasets/xlangai/osworld_v2_assets_gated
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务
- 证据核查日期：2026-11-10T03:01:06Z
- ID：url:3de50fa3eee0081d31ac

### 范围记录

Access requires accepting a gated request; the visible file list shows a shared/ folder with archives such as email_031.tar.gz and cached external images, about 4.92 GB in total. The OSWorld-V2 README fetches it with scripts/tools/download_osworld_v2_assets.py and points OSWORLD_FILE_BASE_URL at the local copy; xlangai/osworld_v2_assets holds only browser-facing files.

- 完整记录 JSON：https://awesomecua.com/resources/url-3de50fa3eee0081d31ac/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xlangai/osworld_v2_assets_gated（获取于 2026-11-10T03:01:06Z；SHA-256：cf51915e2522cafe54a43e9bf969b425c73304f6745f2e55d9286c9c632ca646）
- https://huggingface.co/api/datasets/xlangai/osworld_v2_assets_gated（获取于 2026-11-10T03:01:06Z；SHA-256：cf51915e2522cafe54a43e9bf969b425c73304f6745f2e55d9286c9c632ca646）

---

## ScaleCUA Data

随 ScaleCUA 发布的跨平台训练数据，包含 Ubuntu、Windows、macOS、Android、iPhone 和网页截图的定位与导航标注。

- 目录页面：https://awesomecua.com/zh/resources/url-631e74223e198ef40202/
- 原始来源：https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:631e74223e198ef40202

- 完整记录 JSON：https://awesomecua.com/resources/url-631e74223e198ef40202/record.json

### 结构化规格

- 格式：JSONL annotations, JSON manifest, split image archives
- 模态：screenshots, text, actions
- 数据划分：未记录
- 监督信号：GUI grounding, GUI action trajectories

#### 数量记录

- 6 个平台类别 — Linux, macOS, Windows, Android, iOS, and Web（来源报告；来源：https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md）

The six categories include Web. Grounding and trajectory annotations follow different collection processes. No sample total or train/test division is inferred from archive-part counts or Hub size tags.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data（获取于 2026-10-16T06:38:26Z；SHA-256：dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac）
- https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md（获取于 2026-10-17T02:02:37Z；SHA-256：8c545d66cc7199a9258bd91ed48930691d0d99555bc30ee457fae9bf656fd18d）
- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data（获取于 2026-10-16T06:38:26Z；SHA-256：dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac）

---

## Screen Point-and-Read Data

Screen Point-and-Read Data 收录桌面系统、网页及移动端截图，配有指定点、区域标注和修订后的描述，用于研究界面布局理解。

- 目录页面：https://awesomecua.com/zh/resources/url-4b747a376f628e6f9760/
- 原始来源：https://huggingface.co/datasets/yfan1997/ScreenPR
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：界面理解、GUI 定位、数据生成、评测
- 证据核查日期：2026-11-09T06:16:35Z
- ID：url:4b747a376f628e6f9760

### 范围记录

The dataset card documents point coordinates, human-annotated region boxes, reference regions and cycle-consistency candidates. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-4b747a376f628e6f9760/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/yfan1997/ScreenPR
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/yfan1997/ScreenPR（获取于 2026-11-09T06:16:35Z；SHA-256：31ffc7c11a54ba92ee5936a57412ffdcd7735e90e7331387d31671177329f434）
- https://huggingface.co/api/datasets/yfan1997/ScreenPR（获取于 2026-11-09T06:16:35Z；SHA-256：31ffc7c11a54ba92ee5936a57412ffdcd7735e90e7331387d31671177329f434）

---

## ScreenDrag

包含屏幕观察、先前状态和连续指针操作的 GUI 拖动数据，以轨迹文件和 Parquet 格式提供。

- 目录页面：https://awesomecua.com/zh/resources/url-fe43af1801032be708cc/
- 原始来源：https://huggingface.co/datasets/h-siyuan/ScreenDrag
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T11:12:56Z
- ID：url:fe43af1801032be708cc

### 范围记录

Raw and Parquet folders are alternative views of the same data. The inspected card did not state a license.

- 完整记录 JSON：https://awesomecua.com/resources/url-fe43af1801032be708cc/record.json

### 结构化规格

- 格式：Parquet, episode files
- 模态：screen images, instructions, previous state, continuous actions
- 数据划分：train, test
- 监督信号：continuous GUI dragging

#### 数量记录

未记录数量。

Raw and Parquet folders are alternative views of the same data. Each sample describes a dragging task over multiple timesteps; action vectors encode button state and coordinates.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/h-siyuan/ScreenDrag/raw/main/README.md（获取于 2026-10-16T11:12:56Z；SHA-256：39c7c028f7ef5ca5c75f79b59a107c7e25444776095a2a08bb7535c4f523f7fa）
- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef）

---

## ScreenParse

密集标注渲染网页截图中的可见 UI 元素，提供边界框、55 种元素类别、文本、可交互性和阅读顺序，由自动抓取与过滤流程生成。

- 目录页面：https://awesomecua.com/zh/resources/url-98e8a413ddd670214755/
- 原始来源：https://huggingface.co/datasets/docling-project/screenparse
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、数据生成、GUI 定位
- 证据核查日期：2026-10-18T12:16:38Z
- ID：url:98e8a413ddd670214755

### 范围记录

The main branch holds the v2 release, which the card describes as using leaf-element annotations, stricter quality filtering and varied viewport resolutions; the first release stays on the repository's v1 branch, outside this record. Labels come from DOM extraction refined by Qwen3-VL-8B-Instruct and VLM-as-a-judge filtering. CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-98e8a413ddd670214755/record.json

### 结构化规格

- 格式：Parquet
- 模态：web screenshots, source URLs, element annotations
- 数据划分：train
- 监督信号：UI element bounding boxes, element class labels, element text, interactable flags, reading-order indices

#### 数量记录

- 1,447,100 张截图 — ScreenParse v2 train split (main branch)（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 25,575,213 条 UI 元素标注 — ScreenParse v2 train split (main branch)（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 55 个 UI 元素类别 — ScreenParse v2 label set（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 1,448 个 Parquet 分片 — Hub manifest at revision bc0113f9（计算得出）（来源：https://huggingface.co/api/datasets/docling-project/screenparse）

Screenshots, element annotations, classes and shards are different units and are counted separately. Screenshot and annotation counts are the card's v2 figures; the shard count is computed from the Hub file manifest.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md（获取于 2026-10-18T12:16:38Z；SHA-256：9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e）
- https://huggingface.co/api/datasets/docling-project/screenparse（获取于 2026-10-18T12:16:38Z；SHA-256：cd1f607be439cef0ed4a47265be47673495964289006ee6cbac63b4cdd507bcb）
- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md（获取于 2026-10-18T12:16:38Z；SHA-256：9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e）

---

## ShowUI Desktop

基于 OmniAct 截图构建的 7,496 个桌面定位样例，其标注经 GPT-4o 改写，用于描述元素外观、空间关系和功能。

- 目录页面：https://awesomecua.com/zh/resources/url-f976dec3d1c5e0bedbd7/
- 原始来源：https://huggingface.co/datasets/showlab/ShowUI-desktop-8K
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:f976dec3d1c5e0bedbd7

- 完整记录 JSON：https://awesomecua.com/resources/url-f976dec3d1c5e0bedbd7/record.json

### 结构化规格

- 格式：Hub table with an image column
- 模态：screenshots, text, bounding boxes, points
- 数据划分：train
- 监督信号：instruction-to-element grounding

#### 数量记录

- 7,496 个示例 — train split declared in the dataset card（来源报告；来源：https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md）

The card declares 7,496 examples for the 8K release. Images and original annotations come from OmniAct and are augmented with generated descriptions. Examples are not asserted to be unique screenshots.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K（获取于 2026-10-16T06:38:26Z；SHA-256：84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31）
- https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md（获取于 2026-10-17T02:02:38Z；SHA-256：577a78efa03cde05141c23033222014094681cb5d04786dbb4a698df8543b3df）
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K（获取于 2026-10-16T06:38:26Z；SHA-256：84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31）
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop（获取于 2026-10-17T19:14:57Z；SHA-256：57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d）
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K（获取于 2026-10-17T19:14:58Z；SHA-256：57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d）

---

## UGround V1 Data

UGround 的受限访问网页定位训练数据，分为 Web-Hybrid 和 Web-Direct 子集；边界框版本的坐标归一化至 0-999。

- 目录页面：https://awesomecua.com/zh/resources/url-c4898ad1bfc049926a63/
- 原始来源：https://huggingface.co/datasets/osunlp/UGround-V1-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:c4898ad1bfc049926a63

- 完整记录 JSON：https://awesomecua.com/resources/url-c4898ad1bfc049926a63/record.json

### 结构化规格

- 格式：Parquet shards
- 模态：GUI screenshots, natural-language grounding descriptions
- 数据划分：未记录
- 监督信号：GUI visual-grounding training for the UGround-V1 family

#### 数量记录

未记录数量。

Public API revision 33325877 lists Parquet assets but gated=auto; the pinned raw card returned HTTP 401 and no access was requested. Official README identifies this as V1 training data; the API excerpt also announces a Web-Hybrid bounding-box variant with coordinates normalized to [0,999]. The public API excerpt documents a Web-Hybrid bounding-box variant; shard schemas and a release-wide point/bbox count remain unspecified. No train/test partition, example total, or unrestricted downloadability is claimed. Preserve the recorded CC-BY-NC-SA-4.0 data declaration separately from model/code terms.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data（获取于 2026-10-16T06:38:26Z；SHA-256：0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6）
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc）
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data（获取于 2026-10-16T06:38:26Z；SHA-256：0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6）

---

## UGround-V1-Data-Box

UGround-V1-Data-Box 包含带有图像和对话的 Web-Hybrid 与 Web-Direct 图形界面定位数据；其边界框版本使用归一化坐标。

- 目录页面：https://awesomecua.com/zh/resources/url-9e89e3332db1770388bc/
- 原始来源：https://huggingface.co/datasets/osunlp/UGround-V1-Data-Box
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、数据生成、界面理解
- 证据核查日期：2026-11-09T19:57:12Z
- ID：url:9e89e3332db1770388bc

### 范围记录

The repository file list contains Parquet shards. The rendered page specifies image bytes, dimensions, and serialized conversations in its record format. Access requires approval, and the page states a CC BY-NC-SA 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-9e89e3332db1770388bc/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data-Box
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data-Box（获取于 2026-11-09T19:57:12Z；SHA-256：eecef815309ed235f58ed7979f2ecbfb9302edfdd8f4e5c6ae420de3babcde66）
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data-Box（获取于 2026-11-09T19:57:12Z；SHA-256：eecef815309ed235f58ed7979f2ecbfb9302edfdd8f4e5c6ae420de3babcde66）

---

## UI-AGILE-Data

UI-AGILE 训练标注和截图，以及转换后的 GUI 定位和 AndroidControl 评估文件。

- 目录页面：https://awesomecua.com/zh/resources/url-41abb1b7206689cf5057/
- 原始来源：https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、强化学习、评测
- 证据核查日期：2026-10-17T02:43:19Z
- ID：url:41abb1b7206689cf5057

### 范围记录

Public JSON, image archives and Parquet evaluation files are present. The card has no data-license declaration; the model’s MIT declaration is not inherited. The publisher describes fixes to AndroidControl action parameters.

- 完整记录 JSON：https://awesomecua.com/resources/url-41abb1b7206689cf5057/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md（获取于 2026-10-17T02:43:19Z；SHA-256：ce35413bc1ef28338bc6fd9f132fa271a4f5e0bf23cecd7346f54adf0a964fd7）
- https://huggingface.co/api/datasets/KDEGroup/UI-AGILE-Data（获取于 2026-10-17T02:43:19Z；SHA-256：7782422de88830a497d9eb530bd2f0fb6283904cbb25dafcf2ff4d03358a377a）

---

## WaveUI-25k

约 8 万条 UI 元素数据中的 24,978 条子集，将截图和指令与目标边界框、元素名称、描述、类型、OCR、用途及点击预期标注配对。

- 目录页面：https://awesomecua.com/zh/resources/url-f2cf4ec32aa0b3ba6b95/
- 原始来源：https://huggingface.co/datasets/agentsea/wave-ui-25k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-18T16:19:30Z
- ID：url:f2cf4ec32aa0b3ba6b95

### 范围记录

The card describes this as a subset of a collection of about 80k preprocessed examples built from WebUI, RoboFlow website screenshots and GroundUI-18K, filtered for duplicates, overlaps, low quality and many text elements, with added annotation fields. The publisher's agentsea/wave-ui dataset (Wave UI) has the same 13 fields and 79,412 rows across three splits; the component link rests on that match. Dataset-viewer statistics over 12,493 of the rows (partial) show platform values web, desktop and mobile and source labels including roboflow, webui, mind2web_test_*, omniact, motif, screenspot and agent_studio. The repository declares no license, and the source datasets' terms are not inferred.

- 完整记录 JSON：https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/record.json

### 结构化规格

- 格式：Parquet
- 模态：images, text, bounding boxes, OCR metadata
- 数据划分：train
- 监督信号：instruction-to-target boxes, element annotations

#### 数量记录

- 24,978 行 — train split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md）

The row count comes from the card's dataset_info metadata; rows count labeled element examples, a separate unit from unique screens. The annotation fields are name, description, type, OCR, language, purpose and expectation.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The WaveUI-25k repository has no license metadata or license file. The compilation license in the separate agentsea/wave-ui repository is not applied here, and the WebUI, RoboFlow and GroundUI-18K source terms are not inferred.
  来源：https://huggingface.co/api/datasets/agentsea/wave-ui-25k

### 一手证据

- https://huggingface.co/api/datasets/agentsea/wave-ui-25k（获取于 2026-10-18T16:19:30Z；SHA-256：b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec）
- https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md（获取于 2026-10-18T16:19:32Z；SHA-256：612d075ed11bba7357482d31b3d0d3dfa6d397babe36a236e6aa218ce6eb5488）
- https://datasets-server.huggingface.co/statistics?dataset=agentsea/wave-ui-25k&config=default&split=train（获取于 2026-10-18T16:19:34Z；SHA-256：7ad5c9887649c0eaaa4180816c5bd8381d5b7e394f665134cfcdc6c01ba61210）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/21dc5aa1b39c038aea30f4572d80edef592b7989/README.md（获取于 2026-10-18T16:19:34Z；SHA-256：27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9）
- https://huggingface.co/api/datasets/agentsea/wave-ui-25k（获取于 2026-10-18T16:19:30Z；SHA-256：b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec）

---

## weboperator-experiments

WebOperator 网页智能体使用 gpt-4o 在 812 个 WebArena 任务及 155 个任务的 WebArena-lite 消融实验上的运行日志，包含每个任务的轨迹、搜索树、截图和得分。

- 目录页面：https://awesomecua.com/zh/resources/url-a12c18540006368e69ab/
- 原始来源：https://huggingface.co/datasets/mahirlabibdihan/weboperator-experiments
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测、规划
- 证据核查日期：2026-11-10T03:01:12Z
- ID：url:a12c18540006368e69ab

### 范围记录

Each run folder holds config.yml and summary.json, and each task folder holds trajectory.json, tree.json, evaluation.json, experiment.log, action-generator logs, a trajectory.html viewer and step screenshots. The card reports a 54.56% WebArena success rate and 60.00% on WebArena-lite for the full system.

- 完整记录 JSON：https://awesomecua.com/resources/url-a12c18540006368e69ab/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/mahirlabibdihan/weboperator-experiments（获取于 2026-11-10T03:01:12Z；SHA-256：6714d278f5dc08e3b882b5c5e47670057db8112e0359f28ed30dfbe01d57d93b）
- https://huggingface.co/api/datasets/mahirlabibdihan/weboperator-experiments（获取于 2026-11-10T03:01:12Z；SHA-256：6714d278f5dc08e3b882b5c5e47670057db8112e0359f28ed30dfbe01d57d93b）

---

## WildGUI

Video2GUI 发布的 WildGUI 数据：从互联网教程视频提取逐任务 JSONL 轨迹，含网页、桌面和移动端的指令、计划与定位操作，另提供第 1 至 15 部分的截图分片。

- 目录页面：https://awesomecua.com/zh/resources/url-daf52475338f385b9310/
- 原始来源：https://huggingface.co/datasets/xwm/WildGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：数据生成、视频、GUI 定位、动作预测
- 证据核查日期：2026-10-18T12:28:47Z
- ID：url:daf52475338f385b9310

### 范围记录

The card describes this as a personally reprocessed annotation release: records were regenerated and cleaned following the annotation workflow, then split so that each JSONL line holds one task with its ordered action trajectory; action parameters are omitted when grounding is unreliable (use_grounding false). The Video2GUI project README links this repository as the WildGUI dataset and names the joker-112/WildGUI_Screenshots repository as the host of the part16-part19 frames. Its figures of about 12M trajectories over more than 1,500 applications and websites describe WildGUI in the paper; the 19 JSONL shards (about 78 GB) were not downloaded, so the Hub record count is not established. The project README says trajectories and grounding boxes were produced by Gemini-3-Pro, so labels are model-generated. The data license is the card's CC-BY-NC-4.0 declaration; the source videos and screenshots keep their own rights, and the Apache-2.0 license of the project repository is not transferred to the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-daf52475338f385b9310/record.json

### 结构化规格

- 格式：JSONL, tar archives of JPEG frames
- 模态：screenshots, instructions, plans, actions, action rationales
- 数据划分：未记录
- 监督信号：video-derived task instructions and plans, model-generated action grounding

#### 数量记录

- 19 个标注 JSONL 分片 — Hub repository at revision 75287698 (parts 1-19)（计算得出）（来源：https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769）
- 4,137 个截图 tar 分片 — Hub repository at revision 75287698 (parts 1-15)（计算得出）（来源：https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769）
- ≈ 12,000,000 条交互轨迹 — WildGUI as described in the Video2GUI project README; not recounted in this Hub release（来源报告；来源：https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md）

Shard counts were computed by script from the pinned Hub API file list; they count files. Each JSONL line is one task with its ordered action trajectory; the number of lines was not counted. The reported trajectory figure comes from the project README and may differ from the reprocessed Hub release. Frames for parts 16-19 are in a separate repository.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a）
- https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769（获取于 2026-10-18T12:27:40Z；SHA-256：0f2184af45c554954dcdfaf27d74e3a4907e637b7297ca7b5d34372a3f264c8f）
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md（获取于 2026-10-18T12:27:41Z；SHA-256：5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92）
- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a）

---

## WildGUI Screenshots (parts 16-19)

配套 Hub 仓库存放 WildGUI 第 16 至 19 部分的截图 tar 分片；对应的轨迹标注及其他部分的图像位于 WildGUI 主仓库。

- 目录页面：https://awesomecua.com/zh/resources/url-348f31b5b339403ec26f/
- 原始来源：https://huggingface.co/datasets/joker-112/WildGUI_Screenshots
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：数据生成、视频
- 证据核查日期：2026-10-18T12:28:47Z
- ID：url:348f31b5b339403ec26f

### 范围记录

The repository contains only JPEG frames packed in tar shards (671 for part16, 878 for part17, 212 for part18 and 161 for part19) and no annotations; each frame is stored as {video_id}/screenshot_{MM_SS}.jpg and is linked to an action through the annotation's video_id and timestamp. The card notes that a small fraction of annotated frames may be missing. The Video2GUI project README lists this repository as part of the WildGUI release. The data license is the card's CC-BY-NC-4.0 declaration; frames derived from third-party tutorial videos keep their own rights.

- 完整记录 JSON：https://awesomecua.com/resources/url-348f31b5b339403ec26f/record.json

### 结构化规格

- 格式：tar archives of JPEG frames
- 模态：screenshots
- 数据划分：未记录
- 监督信号：frames referenced by video-derived trajectory annotations

#### 数量记录

- 1,922 个截图 tar 分片 — Hub repository at revision 8d31cbd4 (parts 16-19)（计算得出）（来源：https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd）

Shard count computed by script from the pinned Hub API file list; it counts files. The card says each shard holds up to about 20,000 frames; the number of frames was not counted.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d）
- https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd（获取于 2026-10-18T12:27:41Z；SHA-256：7532cb6ed1d70aab3c8aa3fc0cc76a4e52809f0440179f0c8f2de4bdfb6349e4）
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md（获取于 2026-10-18T12:27:41Z；SHA-256：5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92）
- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d）

---

## Agent-Trajectories

一个收录网页、Android 和 iOS 智能体评测轨迹的归档数据集，包括 iOS 模拟器运行轨迹和用于改进智能体的 WebArena 运行轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-61c09ceb7c78f6b5e74f/
- 原始来源：https://huggingface.co/datasets/Agent-Eval-Refine/Agent-Trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android、iOS、跨平台
- 主题：交互历史、数据生成、评测
- 证据核查日期：2026-11-09T21:08:38Z
- ID：url:61c09ceb7c78f6b5e74f

### 范围记录

The release lists trajectory ZIP archives for WebArena, Android, and iOS, plus separate WebArena evaluator variants. The card does not specify a license.

- 完整记录 JSON：https://awesomecua.com/resources/url-61c09ceb7c78f6b5e74f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Agent-Eval-Refine/Agent-Trajectories（获取于 2026-11-09T21:08:38Z；SHA-256：f63ca67f8ebf5f3f2bcd31fae923a522fa49eb41e65dc31bce2f9378061ee03a）
- https://huggingface.co/api/datasets/Agent-Eval-Refine/Agent-Trajectories（获取于 2026-11-09T21:08:38Z；SHA-256：f63ca67f8ebf5f3f2bcd31fae923a522fa49eb41e65dc31bce2f9378061ee03a）

---

## AgentNet

AgentNet 包含 Windows、macOS 和 Ubuntu 上的 22.6K 个人工标注桌面计算机使用任务，随 OpenCUA 发布，用于训练和评估视觉语言动作模型。

- 目录页面：https://awesomecua.com/zh/resources/url-964d70c40bfc5ca8e1ee/
- 原始来源：https://huggingface.co/datasets/xlangai/AgentNet
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:964d70c40bfc5ca8e1ee

- 完整记录 JSON：https://awesomecua.com/resources/url-964d70c40bfc5ca8e1ee/record.json

### 结构化规格

- 格式：JSONL, image archives
- 模态：screenshots, instructions, actions, generated reasoning
- 数据划分：未记录
- 监督信号：computer-use trajectories, synthesized reasoning

#### 数量记录

- ≈ 22,600 个任务 — AgentNet collection（来源报告；来源：https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md）

The card distinguishes human task instructions from generated summaries, reasoning, reflections, and quality fields. The card distinguishes human task instructions from generated summaries, reasoning, reflections and quality fields; generated labels use a different acceptance process from independent human quality records.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/xlangai/AgentNet
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xlangai/AgentNet（获取于 2026-10-16T06:38:26Z；SHA-256：f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6）
- https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md（获取于 2026-10-16T11:40:46Z；SHA-256：327a77856df259db0a0c2405478f75a0d0f2bf17c51806abc7c509ad82c3ad57）
- https://huggingface.co/api/datasets/xlangai/AgentNet（获取于 2026-10-16T06:38:26Z；SHA-256：f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6）

---

## AgentRewardBench dataset

AgentRewardBench 的 Hugging Face 数据集发布版本，包含来自 WebArena、VisualWebArena、AssistantBench、WorkArena 和 OSWorld 的轨迹评测实例。

- 目录页面：https://awesomecua.com/zh/resources/url-866251b68d6bba8b8ba6/
- 原始来源：https://huggingface.co/datasets/McGill-NLP/agent-reward-bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T04:03:18Z
- ID：url:866251b68d6bba8b8ba6

- 完整记录 JSON：https://awesomecua.com/resources/url-866251b68d6bba8b8ba6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench（获取于 2026-10-17T04:03:18Z；SHA-256：20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb）
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench（获取于 2026-10-17T04:03:18Z；SHA-256：20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb）

---

## AMEX-8K

AMEX 的一个 8K 样本子集，收录不同应用、设备形态和屏幕密度的移动应用截图，用于 GUI 定位预训练。

- 目录页面：https://awesomecua.com/zh/resources/url-2b4b3e54d9c52f868b4e/
- 原始来源：https://huggingface.co/datasets/zonghanHZH/AMEX-8k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：GUI 定位、手机操作、数据生成
- 证据核查日期：2026-11-09T19:57:10Z
- ID：url:2b4b3e54d9c52f868b4e

### 范围记录

The card identifies AMEX as the source dataset and lists Apache 2.0 licensing. It names the ZonUI-3B paper as using this subset in its training corpus.

- 完整记录 JSON：https://awesomecua.com/resources/url-2b4b3e54d9c52f868b4e/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/zonghanHZH/AMEX-8k
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zonghanHZH/AMEX-8k（获取于 2026-11-09T19:57:10Z；SHA-256：ec70a6c3db4c1f4700287aa7c71ab8d55a03e161826ccd31853b36f809c16f22）
- https://huggingface.co/api/datasets/zonghanHZH/AMEX-8k（获取于 2026-11-09T19:57:10Z；SHA-256：ec70a6c3db4c1f4700287aa7c71ab8d55a03e161826ccd31853b36f809c16f22）

---

## android_control_test

android_control_test 提供经过处理的 Android Control 测试集，用于评估 InfiGUI-R1 移动界面智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-1f248862e4b691b85343/
- 原始来源：https://huggingface.co/datasets/Reallm-Labs/android_control_test
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-11-09T05:05:04Z
- ID：url:1f248862e4b691b85343

### 范围记录

The repository lists an Android Control test-set archive. The card points to project instructions for use with InfiGUI-R1 and states an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-1f248862e4b691b85343/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Reallm-Labs/android_control_test
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test（获取于 2026-11-09T05:05:04Z；SHA-256：47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56）
- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test（获取于 2026-11-09T05:05:04Z；SHA-256：47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56）
- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test（获取于 2026-11-09T05:25:45Z；SHA-256：47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56）
- https://huggingface.co/api/datasets/InfiX-ai/android_control_test（获取于 2026-11-09T05:25:46Z；SHA-256：47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56）

---

## AndroidCode

从移动 GUI 轨迹构建的 HTML 及标注数据，用于 Code2World 训练以操作为条件的 GUI 状态预测。

- 目录页面：https://awesomecua.com/zh/resources/url-cf4d2d45a7314cb16acb/
- 原始来源：https://huggingface.co/datasets/GD-ML/AndroidCode
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、数据生成、界面理解
- 证据核查日期：2026-10-18T04:27:14Z
- ID：url:cf4d2d45a7314cb16acb

### 范围记录

The Hub card is license-only; semantic description and reported scale come from the official Code2World README. The public manifest contains HTML files, Android-Control train/test JSON files and extraction/loading scripts. The public manifest lists HTML files, Android-Control train/test JSON files and scripts; standalone screenshot image files are absent from that listing, and embedded/reference image packaging is unspecified. MIT is the data-card declaration, not a grant for every upstream source dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/record.json

### 结构化规格

- 格式：HTML, JSON, Python extraction/loading scripts
- 模态：GUI screenshots (described input), GUI actions, HTML
- 数据划分：Android-Control train file, Android-Control test file
- 监督信号：action-conditioned next-state code prediction, generated HTML supervision

#### 数量记录

- > 80,000 组界面–动作对 — AndroidCode corpus described by Code2World README; the released JSON-row count remains unverified.（来源报告；来源：https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md）

The manifest lists 58,953 HTML files; the >80k reported pairs use a different unit. The reported >80k pairs and the HTML-file inventory have different units. The card supplies neither a sample schema nor a count; archive/image completeness and JSON contents remain unverified.

### 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md

### 一手证据

- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md（获取于 2026-10-18T04:27:14Z；SHA-256：26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777）
- https://huggingface.co/api/datasets/GD-ML/AndroidCode（获取于 2026-10-18T04:33:22Z；SHA-256：5774a3c096264fbba58b7a16587ea65f35628edb9ca39afe8a32c74ec7fd1ce7）
- https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17）

---

## Aria-UI Context-aware Data

随 Aria-UI 发布的按交互片段组织的移动端 GUI 定位数据，用于在目标定位中纳入交互历史。

- 目录页面：https://awesomecua.com/zh/resources/url-07b65dc937756ddff4a1/
- 原始来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、记忆
- 证据核查日期：2026-10-16T11:11:53Z
- ID：url:07b65dc937756ddff4a1

### 范围记录

The publisher reports approximately 992K instruction-output pairs in its repository. The Hub card contains a license declaration; schema quality and exact sample counts remain unverified.

- 完整记录 JSON：https://awesomecua.com/resources/url-07b65dc937756ddff4a1/record.json

### 结构化规格

- 格式：未记录
- 模态：screen observations, instructions, interaction history
- 数据划分：未记录
- 监督信号：context-aware grounding

#### 数量记录

- ≈ 992,000 组指令–输出对 — context-aware episode training release（来源报告；来源：https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md）

The Hub card contains only licensing metadata. The project README supports the episode-training description and rounded count; archive-level quality and exact row counts remain unverified.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data（获取于 2026-10-16T11:11:53Z；SHA-256：79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad）
- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480）
- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data（获取于 2026-10-16T11:11:53Z；SHA-256：79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad）

---

## Aria-UI Data

涵盖网页、移动端和 Ubuntu 桌面界面的 GUI 元素描述与定位指令。

- 目录页面：https://awesomecua.com/zh/resources/url-f8566bd0394d36ed4f8e/
- 原始来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android、桌面、Linux
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-16T10:42:13Z
- ID：url:f8566bd0394d36ed4f8e

### 范围记录

The publisher flags original desktop files as deprecated because of screenshot-mapping issues, and identifies corrected versions in the dataset card.

- 完整记录 JSON：https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/record.json

### 结构化规格

- 格式：JSON annotations, image archives
- 模态：screenshots, instructions, element captions
- 数据划分：未记录
- 监督信号：element grounding, element descriptions

#### 数量记录

- ≈ 2,900,000 条指令 — web subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）
- ≈ 173,000 张图像 — web subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）
- ≈ 1,100,000 条指令 — mobile subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）
- ≈ 104,000 张图像 — mobile subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）
- ≈ 150,000 条指令 — desktop subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）
- ≈ 7,800 张图像 — desktop subset（来源报告；来源：https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md）

The card identifies deprecated desktop files with screenshot-mapping errors and names corrected releases. Counts are rounded publisher figures for separate platform subsets; instructions and images are different units.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md（获取于 2026-10-16T10:42:13Z；SHA-256：8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb）
- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md（获取于 2026-10-16T10:42:13Z；SHA-256：8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb）

---

## AssistantBench

AssistantBench 的任务数据集，托管于 Hugging Face：需要在开放网络上耗时完成的真实问题，分为 dev 和 test 两个 JSONL 文件，dev 部分附答案、参考网址和解释。论文报告共 214 个任务。

- 目录页面：https://awesomecua.com/zh/resources/url-447997967beea3b07f6f/
- 原始来源：https://huggingface.co/datasets/AssistantBench/AssistantBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:01:03Z
- ID：url:447997967beea3b07f6f

### 范围记录

Two files, assistant_bench_v1.0_dev.jsonl and assistant_bench_v1.0_test.jsonl; dev rows carry task, answer, gold_url, explanation and difficulty fields. The card declares Apache-2.0, and the benchmark repository links a Hugging Face leaderboard for submissions.

- 完整记录 JSON：https://awesomecua.com/resources/url-447997967beea3b07f6f/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/AssistantBench/AssistantBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/AssistantBench/AssistantBench（获取于 2026-11-10T03:01:03Z；SHA-256：c20c637d01ea35c22b59ea2ec06317fbebeb6b3b5793a999ce8053e8af9d1fb7）
- https://huggingface.co/api/datasets/AssistantBench/AssistantBench（获取于 2026-11-10T03:01:03Z；SHA-256：c20c637d01ea35c22b59ea2ec06317fbebeb6b3b5793a999ce8053e8af9d1fb7）

---

## AutoGUI-v1-zip

这是 AutoGUI 的训练数据仓库，包含带标注的图形界面数据集和选定的视觉数据集，并说明如何合并其 JSON 文件用于微调。

- 目录页面：https://awesomecua.com/zh/resources/url-02370867dd4b96000a33/
- 原始来源：https://huggingface.co/datasets/WebAgent/AutoGUI-v1-zip
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、界面理解
- 证据核查日期：2026-11-09T19:58:07Z
- ID：url:02370867dd4b96000a33

### 范围记录

The repository lists JSON data and image archives. The card instructs users to adjust image paths and merge three JSON files for the AutoGUI training script. It declares a cc license.

- 完整记录 JSON：https://awesomecua.com/resources/url-02370867dd4b96000a33/record.json

### 许可证信息

- 代码：未记录
- 数据：cc — https://huggingface.co/datasets/WebAgent/AutoGUI-v1-zip
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip（获取于 2026-11-09T19:58:07Z；SHA-256：4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55）
- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip（获取于 2026-11-09T19:58:07Z；SHA-256：4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55）
- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip（获取于 2026-11-09T20:03:11Z；SHA-256：4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55）
- https://huggingface.co/api/datasets/HongxinLi/AutoGUI-v1-zip（获取于 2026-11-09T20:03:11Z；SHA-256：4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55）

---

## BrowserART

一个用于浏览器智能体安全红队评测的数据集，包含 100 种有害的浏览器相关行为，覆盖真实网站与合成网站。

- 目录页面：https://awesomecua.com/zh/resources/url-dec73112f4c2dad889cb/
- 原始来源：https://huggingface.co/datasets/ScaleAI/BrowserART
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-11-09T06:16:32Z
- ID：url:dec73112f4c2dad889cb

### 范围记录

The repository file list includes a behavior CSV. The card says the synthetic websites' code is hosted separately on GitHub and declares a CC-BY-NC-4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-dec73112f4c2dad889cb/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/ScaleAI/BrowserART
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ScaleAI/BrowserART（获取于 2026-11-09T06:16:32Z；SHA-256：854d13f5b05b7b0f7f96f0c2f6016dbe2ead826a4d6255574c323ad743b29ca2）
- https://huggingface.co/api/datasets/ScaleAI/BrowserART（获取于 2026-11-09T06:16:32Z；SHA-256：854d13f5b05b7b0f7f96f0c2f6016dbe2ead826a4d6255574c323ad743b29ca2）

---

## CaptchaArena-Trajectories

在 20 类交互式验证码上的思维链计算机使用轨迹：共 46,000 条浏览器执行记录，含每步截图与点击、拖拽、长按或输入动作，仅保留通过页面验证器检查的轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-52067b3e48e9381e4c66/
- 原始来源：https://huggingface.co/datasets/ZHEN-04/CaptchaArena-Trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：模仿学习、数据生成
- 证据核查日期：2026-11-10T03:01:03Z
- ID：url:52067b3e48e9381e4c66

### 范围记录

Train and val splits hold 42,000 and 4,000 trajectories, expanded into 144,618 per-turn SFT samples with 169,945 PNG screenshots (about 50.9 GB). Access is gated with manual approval under CC-BY-NC-4.0; the 4,000 test puzzles sit in the separate CaptchaArena puzzle dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-52067b3e48e9381e4c66/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/ZHEN-04/CaptchaArena-Trajectories
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ZHEN-04/CaptchaArena-Trajectories?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags（获取于 2026-11-10T03:01:03Z；SHA-256：24c896e5df4852c97d768899db1c62734937394c8d6f3526321f4af181a05bc4）
- https://huggingface.co/api/datasets/ZHEN-04/CaptchaArena-Trajectories?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags（获取于 2026-11-10T03:01:03Z；SHA-256：24c896e5df4852c97d768899db1c62734937394c8d6f3526321f4af181a05bc4）

---

## Cie1/MMSearch-Plus

一个包含 311 项图像任务的数据集，用于评估通过迭代检索图像和文本来回答问题的多模态网页浏览智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-8fd4e25ae5c0fe619969/
- 原始来源：https://huggingface.co/datasets/Cie1/MMSearch-Plus
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、界面理解
- 证据核查日期：2026-11-09T19:57:44Z
- ID：url:8fd4e25ae5c0fe619969

### 范围记录

The card describes five Arrow shards, encrypted answers, and a decryption helper. It records corrections to two answer annotations and declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-8fd4e25ae5c0fe619969/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/Cie1/MMSearch-Plus
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Cie1/MMSearch-Plus（获取于 2026-11-09T19:57:44Z；SHA-256：bf8e8178e5ce2e31e7be679b0457b876cbcb99266eae43dddcb1ef933544d5d6）
- https://huggingface.co/api/datasets/Cie1/MMSearch-Plus（获取于 2026-11-09T19:57:44Z；SHA-256：bf8e8178e5ce2e31e7be679b0457b876cbcb99266eae43dddcb1ef933544d5d6）

---

## ClawBench

面向真实网站日常任务的浏览器智能体数据集，包含 V1 和 V2 测试集、任务背景资料，以及拦截最终提交的规则。

- 目录页面：https://awesomecua.com/zh/resources/url-9c96a767b56ba0eb4494/
- 原始来源：https://huggingface.co/datasets/TIGER-Lab/ClawBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测、安全与防护、工作流
- 证据核查日期：2026-11-09T05:05:16Z
- ID：url:9c96a767b56ba0eb4494

### 范围记录

The card documents Parquet test splits, supplementary JSON files, a leaderboard file, and separate companion trace datasets. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-9c96a767b56ba0eb4494/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/ClawBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/TIGER-Lab/ClawBench（获取于 2026-11-09T05:05:16Z；SHA-256：9cddcd7abe86f5a70c1ebb61bd46521e5c67fa04e147fce9f1134f25f59de997）
- https://huggingface.co/api/datasets/TIGER-Lab/ClawBench（获取于 2026-11-09T05:05:16Z；SHA-256：9cddcd7abe86f5a70c1ebb61bd46521e5c67fa04e147fce9f1134f25f59de997）

---

## ClawBenchV2Trace

ClawBench V2 130 项任务集上浏览器智能体运行的原始执行轨迹，每次运行包含屏幕录像、网络抓包、浏览器动作流、智能体推理过程、被拦截的最终请求以及评审结论。

- 目录页面：https://awesomecua.com/zh/resources/url-3452cef2f99d7de2935a/
- 原始来源：https://huggingface.co/datasets/TIGER-Lab/ClawBenchV2Trace
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、可观测性
- 证据核查日期：2026-11-10T03:01:05Z
- ID：url:3452cef2f99d7de2935a

### 范围记录

As of 2026-05-12 the card lists 806 V2 runs from six models under the hermes harness, each run directory self-contained at about 10 to 15 MB. Scoring combines a per-task interception schema with an LLM judge; the card declares Apache-2.0, and V1 traces sit in NAIL-Group/ClawBenchV1Trace.

- 完整记录 JSON：https://awesomecua.com/resources/url-3452cef2f99d7de2935a/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/ClawBenchV2Trace
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/TIGER-Lab/ClawBenchV2Trace（获取于 2026-11-10T03:01:05Z；SHA-256：bea2ceb965a9a52fbc1df358a92e046afba55bb8b99295afa7cfbc87830e3c4f）
- https://huggingface.co/api/datasets/TIGER-Lab/ClawBenchV2Trace（获取于 2026-11-10T03:01:05Z；SHA-256：bea2ceb965a9a52fbc1df358a92e046afba55bb8b99295afa7cfbc87830e3c4f）

---

## ClawGUI-Eval

面向六项图形界面定位基准的评测数据，包含图像、提示词和已有输出，可用于推理、判定与指标计算流程。

- 目录页面：https://awesomecua.com/zh/resources/url-e8cea6261ab19611ad23/
- 原始来源：https://huggingface.co/datasets/johnzqlu/clawgui-eval
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、GUI 定位
- 证据核查日期：2026-11-09T06:16:38Z
- ID：url:e8cea6261ab19611ad23

### 范围记录

The repository lists image.zip, data.zip, and output.zip. The card says the archives contain benchmark images, data and prompts, and precomputed inference and judge results.

- 完整记录 JSON：https://awesomecua.com/resources/url-e8cea6261ab19611ad23/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/johnzqlu/clawgui-eval（获取于 2026-11-09T06:16:38Z；SHA-256：2cf582665728f9ce157236b5f8e23dd4383568325e62e2d8a809214bff313ac3）
- https://huggingface.co/api/datasets/johnzqlu/clawgui-eval（获取于 2026-11-09T06:16:38Z；SHA-256：2cf582665728f9ce157236b5f8e23dd4383568325e62e2d8a809214bff313ac3）

---

## ConClick-Data

ConClick-Data 提供带目标坐标和干扰项框的截图定位样本，以 JSONL 文件形式发布，供训练使用。

- 目录页面：https://awesomecua.com/zh/resources/url-bf416a816f74718f94dd/
- 原始来源：https://huggingface.co/datasets/ruotian/ConClick-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成、界面理解
- 证据核查日期：2026-11-09T19:56:15Z
- ID：url:bf416a816f74718f94dd

### 范围记录

The card describes separate target–distractor and ordinary grounding files derived from Click-100k. It says screenshots retain their upstream source terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-bf416a816f74718f94dd/record.json

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/ruotian/ConClick-Data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ruotian/ConClick-Data（获取于 2026-11-09T19:56:15Z；SHA-256：9954accff9c056352ccca18dbc315c2bfe43f0baa16c37f3d5e671f8dcef9693）
- https://huggingface.co/api/datasets/ruotian/ConClick-Data（获取于 2026-11-09T19:56:15Z；SHA-256：9954accff9c056352ccca18dbc315c2bfe43f0baa16c37f3d5e671f8dcef9693）

---

## DeskForge-1M

一个桌面图形界面数据集，包含截图、元素标注和操作记录，并提供训练集、验证集以及按应用、主题和分辨率划分的测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-e555cae98afb22876f3b/
- 原始来源：https://huggingface.co/datasets/docling-project/DeskForge-1M
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、界面理解、数据生成、评测
- 证据核查日期：2026-11-09T21:08:47Z
- ID：url:e555cae98afb22876f3b

### 范围记录

The card lists WebDataset tar shards and a transitions preview with before and after images. It declares the MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e555cae98afb22876f3b/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/docling-project/DeskForge-1M
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/docling-project/DeskForge-1M（获取于 2026-11-09T21:08:47Z；SHA-256：eccb46263cdbea3615ea6d0ad1dad966217d935c7c2e42f3306c0d03168dd94c）
- https://huggingface.co/api/datasets/docling-project/DeskForge-1M（获取于 2026-11-09T21:08:47Z；SHA-256：eccb46263cdbea3615ea6d0ad1dad966217d935c7c2e42f3306c0d03168dd94c）

---

## DroidCall data

用于学习调用 Android 意图的指令到函数调用样例，包含面向移动任务执行的训练、测试和 API 标注文件。

- 目录页面：https://awesomecua.com/zh/resources/url-ae8f5208eea9e7f1f606/
- 原始来源：https://huggingface.co/datasets/mllmTeam/DroidCall
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：Android
- 主题：手机操作、工具集成、数据生成
- 证据核查日期：2026-10-17T02:02:28Z
- ID：url:ae8f5208eea9e7f1f606

### 范围记录

The release provides JSONL data and API annotations. This is Android intent-calling supervision, marked adjacent to screenshot-and-click trajectories. The dataset card declares Apache-2.0; the companion repository’s MIT code license is a separate declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-ae8f5208eea9e7f1f606/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The Hub dataset card declares Apache-2.0 in its metadata header (license: apache-2.0). The companion repository's MIT code license is a separate declaration.
  来源：https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：08a6c5cfa655e1ecd774a41a9a815e845ad0afd47b289378bc1d6ee66c81dda9）
- https://huggingface.co/api/datasets/mllmTeam/DroidCall（获取于 2026-10-17T02:02:28Z；SHA-256：c7804987d56b03314a4c48e3ddf2e5819fc0d9c83cc65ba54a981a2f4a584dd9）

---

## Fanbin/waa_steve_trajectories

该数据集收录 STEVE-R1 在 WindowsAgentArena 上的评估轨迹，将任务截图、智能体回复、操作记录和结果标签配对保存。

- 目录页面：https://awesomecua.com/zh/resources/url-2bab4b78c81cde1d5ecb/
- 原始来源：https://huggingface.co/datasets/Fanbin/waa_steve_trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、交互历史、数据生成
- 证据核查日期：2026-11-09T05:05:12Z
- ID：url:2bab4b78c81cde1d5ecb

### 范围记录

The card describes 16 zip files covering experiments on 154 tasks and 37K action steps. Each trajectory includes screenshots, plan responses, traj.jsonl, and result.txt.

- 完整记录 JSON：https://awesomecua.com/resources/url-2bab4b78c81cde1d5ecb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Fanbin/waa_steve_trajectories（获取于 2026-11-09T05:05:12Z；SHA-256：53118f052a6bc8860aabd4c8fb43a7a47f16799a959406df31ab5c48af5986f8）
- https://huggingface.co/api/datasets/Fanbin/waa_steve_trajectories（获取于 2026-11-09T05:05:12Z；SHA-256：53118f052a6bc8860aabd4c8fb43a7a47f16799a959406df31ab5c48af5986f8）

---

## gameworld-qwen38-flash-next-trajectory

一套包含 1,020 条 GameWorld 智能体轨迹的数据集，涵盖通用接口和计算机操作接口，并提供步骤记录、屏幕截图、结果及指标。

- 目录页面：https://awesomecua.com/zh/resources/url-e3c3e5a5a00f024ebac5/
- 原始来源：https://huggingface.co/datasets/yyyang/gameworld-qwen38-flash-next-trajectory
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、交互历史、数据生成
- 证据核查日期：2026-11-09T21:08:40Z
- ID：url:e3c3e5a5a00f024ebac5

### 范围记录

The card describes six trajectory archives, each with 170 runs, plus examples for inspecting individual steps. It identifies the benchmark protocol as fine-control-2026-08.

- 完整记录 JSON：https://awesomecua.com/resources/url-e3c3e5a5a00f024ebac5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory（获取于 2026-11-09T21:08:40Z；SHA-256：27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee）
- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory（获取于 2026-11-09T21:08:40Z；SHA-256：27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee）
- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory（获取于 2026-11-09T21:12:44Z；SHA-256：27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee）
- https://huggingface.co/api/datasets/yyyang/gameworld-benchmark-trajectories（获取于 2026-11-09T21:12:44Z；SHA-256：27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee）

---

## Gelato OS-World agent trajectories

Gelato-30B-A3B 和 GTA1-32B 在相同的 GPT-5 规划、基于 GTA1.5 的框架中各运行三轮 OS-World 任务，提供逐任务轨迹、初始及逐步截图和自动评估结果。

- 目录页面：https://awesomecua.com/zh/resources/url-aed610c413d6bb9f1caa/
- 原始来源：https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T15:37:17Z
- ID：url:aed610c413d6bb9f1caa

### 范围记录

The dataset card holds only license metadata; the description and scope come from the official Gelato README, which says this repository provides all of the agent's OS-World trajectories from runs on a fixed OS-World snapshot with GPT-5 as planner and a 50-step limit. The file list also holds the GTA1-32B baseline runs from the same harness, which the README compares as separate baseline material. The README reports 58.71 ± 0.66% automated and 61.85 ± 0.79% human-corrected success for Gelato-30B-A3B, against 56.97 ± 1.47% and 59.47 ± 1.27% for GTA1-32B. The GitHub repository has no license file; MIT is the dataset card's declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/record.json

### 结构化规格

- 格式：JSONL, PNG, plain text
- 模态：screenshots, action trajectories, task results
- 数据划分：未记录
- 监督信号：agent-generated trajectories, automated task results

#### 数量记录

- 2,166 个含 traj.jsonl 的任务轨迹目录 — six run directories at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 6 个运行目录 — gelato-30b/run_1-3 and gta1-32b_baseline/run_1-3 at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 361 个不重复的 OS-World 任务 — each run directory at Hub revision b9495a8e (the same task set in all six)（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 34,598 张 PNG 截图 — six run directories at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）

Counts come from a script over the pinned Hub file list. Every task directory holds traj.jsonl, result.txt, an initial screenshot and step screenshots; the 361 tasks span 10 OS-World domain folders. Results are the automated evaluation; the README's human re-check of 20 tasks lives in the GitHub repository. Directories, tasks and screenshots are different units and are counted separately.

### 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Dataset-card metadata declaration (license: mit) for this release; the card contains only that metadata.
  来源：https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md

### 一手证据

- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:37:17Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618（获取于 2026-10-18T15:36:09Z；SHA-256：218daeb50d48f98a41b69b9eae6ef3bb7676b6a1da223574cbf3348490878c6f）
- https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md（获取于 2026-10-18T15:36:09Z；SHA-256：d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17）

---

## Go-Browse-WA processed data

扁平化的网页交互训练记录，包含无障碍树观察、助手续写、轨迹奖励和步骤链接元数据。

- 目录页面：https://awesomecua.com/zh/resources/url-a13a187bc058fbb4f6af/
- 原始来源：https://huggingface.co/datasets/apurvaga/go-browse-wa
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:a13a187bc058fbb4f6af

### 范围记录

The public release contains nine Parquet shards. The short card supplies schema and split metadata but no license declaration; the official README describes successful and unsuccessful trajectories processed for fine-tuning. The raw screenshot/HTML corpus is a separate release.

- 完整记录 JSON：https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/record.json

### 结构化规格

- 格式：Parquet
- 模态：text, accessibility-tree observations, actions
- 数据划分：train
- 监督信号：action completion, trajectory outcome

#### 数量记录

- 164,533 条步骤记录 — train split（来源报告；来源：https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md）

The card count is flattened step records. Both successful and unsuccessful trajectories are included according to the project README; no license is declared.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa（获取于 2026-10-17T02:44:50Z；SHA-256：494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361）
- https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：18ab64833acf31113a83b2463359f1c7e37c4aaabfe11c33db2ba3e7d32818c6）
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566）
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa（获取于 2026-10-17T02:44:50Z；SHA-256：494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361）

---

## go-browse-wa-raw

go-browse-wa-raw 是浏览器智能体轨迹数据集，包含页面观察、操作、目标、奖励和图像。其训练集包含 196462 个样本。

- 目录页面：https://awesomecua.com/zh/resources/url-edb0eadcc3df5559e941/
- 原始来源：https://huggingface.co/datasets/apurvaga/go-browse-wa-raw
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测、交互历史
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:edb0eadcc3df5559e941

### 范围记录

The schema includes accessibility-tree text, pruned HTML, action errors, thoughts, success flags, and PNG images. The source defines a train split stored in data/train-* files.

- 完整记录 JSON：https://awesomecua.com/resources/url-edb0eadcc3df5559e941/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa-raw（获取于 2026-11-09T05:04:58Z；SHA-256：833d1bf1a46a112e48dd81f4ec0604052879a3f037a00903e2236fb66f7c462b）
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa-raw（获取于 2026-11-09T05:04:58Z；SHA-256：833d1bf1a46a112e48dd81f4ec0604052879a3f037a00903e2236fb66f7c462b）

---

## GroundGUI RL Dataset

从 GroundCUA 选取的桌面定位提示，按基于点击的强化学习格式组织，并使用目标框奖励。

- 目录页面：https://awesomecua.com/zh/resources/url-4e71dc456c4112eed727/
- 原始来源：https://huggingface.co/datasets/PrentisAI/GroundGUI_RL
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、强化学习、数据生成
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:4e71dc456c4112eed727

### 范围记录

The card declares MIT and attributes the source examples to GroundCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-4e71dc456c4112eed727/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, text, coordinates
- 数据划分：train
- 监督信号：instruction-to-click grounding, target bounding boxes

#### 数量记录

- 12,600 条提示词 — RL training corpus（来源报告；来源：https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md）
- 11,205 张截图 — RL training corpus（来源报告；来源：https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md）
- 87 个桌面应用 — RL training corpus（来源报告；来源：https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md）

Publisher-reported counts cover a selection and reformatting of GroundCUA. No independent image-overlap audit was performed.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276）
- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276）

---

## Grounding-Anything-GUI

Phi-Ground 项目为其 Phi-Ground-Any 模型提供链接的公开训练归档文件。

- 目录页面：https://awesomecua.com/zh/resources/url-d1830de02226155ee16d/
- 原始来源：https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:d1830de02226155ee16d

### 范围记录

The Hub exposes train.zip and a card containing only license/language metadata. The official repository marks this training-data release complete, but its Phi-Ground-Any paper is still pending. No binding to the earlier Phi-Ground paper, sample count, split structure or operating-system coverage is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/url-d1830de02226155ee16d/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI（获取于 2026-10-17T02:42:32Z；SHA-256：c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5）
- https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：31b964cfd198f99491f0f480024b2322fbdf3a237f7806847e83978109bc5856）
- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：a0609394a736dc495d077cd57a2945b018123e5b3f9514d7d5bafb9e690aeae2）
- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI（获取于 2026-10-17T02:42:32Z；SHA-256：c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5）

---

## GUI-Dense-Descriptions

一个将 GUI 截图与详细文字描述配对的数据集，以包含 1,263 条图文样本的训练集形式发布。

- 目录页面：https://awesomecua.com/zh/resources/url-fd24a394359c59b35c71/
- 原始来源：https://huggingface.co/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、数据生成
- 证据核查日期：2026-11-09T06:16:32Z
- ID：url:fd24a394359c59b35c71

### 范围记录

The card lists image and string text fields in a train split. The repository file list includes a Parquet data file.

- 完整记录 JSON：https://awesomecua.com/resources/url-fd24a394359c59b35c71/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions（获取于 2026-11-09T06:16:32Z；SHA-256：bdb1aa3804c30607563e9f1eaadceb9fbe1369158dd50f86e2a5e5953db8a6a9）
- https://huggingface.co/api/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions（获取于 2026-11-09T06:16:32Z；SHA-256：bdb1aa3804c30607563e9f1eaadceb9fbe1369158dd50f86e2a5e5953db8a6a9）

---

## GUI-Lasagne L1

用于 SpiritSight 的已发布 GUI-Lasagne 训练数据集，以按日期划分的归档分片形式分发，供视觉界面学习使用。

- 目录页面：https://awesomecua.com/zh/resources/url-0c5659ca9e59d942aea3/
- 原始来源：https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-10-17T02:02:28Z
- ID：url:0c5659ca9e59d942aea3

### 范围记录

Public archive shards are present. The dataset card declares Apache-2.0; it does not resolve rights in third-party interface content. The short card supplies no reliable sample count or explicit train/test partition, so these remain unspecified. An associated SpiritSight model card still describes dataset release as forthcoming; the independent dataset card and public archive manifest establish this release's availability.

- 完整记录 JSON：https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985）
- https://huggingface.co/api/datasets/SenseLLM/GUI-Lasagne-L1（获取于 2026-10-17T02:02:28Z；SHA-256：224d6487de47cc63251c3b5c5c9f6e75e692b5ef0e12f0a7f71000da0b866e6f）
- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3）
- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985）

---

## GUI-SD-data

GUI-SD 的训练数据，GUI-SD 是一种用于 GUI 定位的在线策略自蒸馏方法；数据包含约 6.99k 张截图和一个供 GUI-SD 训练脚本读取的 JSONL 标注文件。

- 目录页面：https://awesomecua.com/zh/resources/url-1a495ecc8b0d73e04308/
- 原始来源：https://huggingface.co/datasets/yankie123/GUI-SD-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位
- 证据核查日期：2026-11-10T03:01:01Z
- ID：url:1a495ecc8b0d73e04308

### 范围记录

The repository holds an images/ folder of PNG screenshots and anno.jsonl in a single train split, with no dataset card or license. The GUI-SD repository's ms-swift training script loads the data through its --dataset argument.

- 完整记录 JSON：https://awesomecua.com/resources/url-1a495ecc8b0d73e04308/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/yankie123/GUI-SD-data（获取于 2026-11-10T03:01:01Z；SHA-256：07aeef4c2b766ef4e95ec3aa6439c7060aadd9d046936aa197216da59cf8d67a）
- https://huggingface.co/api/datasets/yankie123/GUI-SD-data（获取于 2026-11-10T03:01:01Z；SHA-256：07aeef4c2b766ef4e95ec3aa6439c7060aadd9d046936aa197216da59cf8d67a）

---

## GUI-World

覆盖 Android、iOS、网站和 XR 等 6 类场景的 GUI 视频基准及训练数据，包含面向图像和视频 LLM 的 8 类问题，以及 GUI-Vid 模型。

- 目录页面：https://awesomecua.com/zh/resources/github-dongping-chen-gui-world/
- 原始来源：https://github.com/Dongping-Chen/GUI-World
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：视频、界面理解
- 证据核查日期：2026-10-16T06:40:52Z
- ID：github:dongping-chen/gui-world

- 完整记录 JSON：https://awesomecua.com/resources/github-dongping-chen-gui-world/record.json

### 结构化规格

- 格式：未记录
- 模态：videos, frame images, text
- 数据划分：train, test
- 监督信号：GUI video question answering, temporal interface understanding

#### 数量记录

- 6 个 GUI 场景类别 — dataset taxonomy（来源报告；来源：https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md）
- 8 种问题类型 — dataset taxonomy（来源报告；来源：https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md）

Taxonomy counts describe coverage; video and question counts use different units. Cases include Android, iOS, desktop software, websites, multi-application use, and XR. Keyframe-selection settings affect evaluation.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://github.com/Dongping-Chen/GUI-World（获取于 2026-10-16T06:40:52Z；SHA-256：d02fa5da3384a3e58cf1d28aad47497de73fe3aad0ce57219585da04fc3187ef）
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md（获取于 2026-10-17T02:03:23Z；SHA-256：905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6）
- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/main/README.md（获取于 2026-10-17T02:06:30Z；SHA-256：d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed）
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50（获取于 2026-10-16T06:31:28Z；SHA-256：be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7）

---

## GUI-World data

GUI-World 的 Hub 发布版，收录 Android、iOS、网站、软件、多应用和 XR 六类场景的 GUI 录屏视频，以及面向 GUI 视频问答的训练与基准标注 JSONL。

- 目录页面：https://awesomecua.com/zh/resources/url-40ce19527f25bfa3bd63/
- 原始来源：https://huggingface.co/datasets/ONE-Lab/GUI-World
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、Android、iOS、网页
- 主题：视频、界面理解、评测
- 证据核查日期：2026-10-18T11:41:24Z
- ID：url:40ce19527f25bfa3bd63

### 范围记录

This is the Hub data release; the repository record github:dongping-chen/gui-world covers the evaluation and GUI-Vid code and case studies, and its README calls this dataset the canonical train and test release. The Hub API at revision 7901fa3f reports an ungated repository with 12 annotation JSONL files (benchmark and train for each scenario) and 12,379 MP4 or MOV video files in per-scenario folders. The card has no license metadata field; its License section states CC BY 4.0. The GUI-Vid checkpoint is a separate Hub model.

- 完整记录 JSON：https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/record.json

### 结构化规格

- 格式：MP4 and MOV video files, JSONL annotations
- 模态：screen-recording videos, text annotations
- 数据划分：train, benchmark
- 监督信号：GUI-oriented question-answer annotations

#### 数量记录

- 12,379 个视频文件 — MP4 and MOV files in the Hub manifest at revision 7901fa3f（计算得出）（来源：https://huggingface.co/api/datasets/ONE-Lab/GUI-World）
- 12 个标注文件 — JSONL files under Annotation/benchmark and Annotation/train at revision 7901fa3f（计算得出）（来源：https://huggingface.co/api/datasets/ONE-Lab/GUI-World）
- 6 个 GUI 场景类别 — dataset taxonomy（来源报告；来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md）
- 8 种问题类型 — dataset taxonomy（来源报告；来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md）

Video files were counted from the Hub file manifest; video, question and annotation counts use different units.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The card states that the work is licensed under CC BY 4.0. The declaration is recorded in prose because enrich only extracts card metadata.
  来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md

### 一手证据

- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md（获取于 2026-10-18T11:41:24Z；SHA-256：d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed）
- https://huggingface.co/api/datasets/ONE-Lab/GUI-World（获取于 2026-10-18T11:41:24Z；SHA-256：dfb9a575c567a2fe97640cd1f1f73c8fa6ba970c392f335791f1ed857f504a89）
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md（获取于 2026-10-18T11:41:24Z；SHA-256：905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6）

---

## gui_and_terminal_operation_recording

一个收录图形界面和终端操作记录的数据集。图形界面会话包含带时间戳的截图、鼠标事件和键盘事件；终端会话包含输入与输出日志。

- 目录页面：https://awesomecua.com/zh/resources/url-dfa0c83ebd679a37ad00/
- 原始来源：https://huggingface.co/datasets/cybergod-agi/gui_and_terminal_operation_recording
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：录制、数据生成、工具集成
- 证据核查日期：2026-11-09T19:57:42Z
- ID：url:dfa0c83ebd679a37ad00

### 范围记录

The repository lists individual recording files and a 7z archive of the same directory structure. The card declares the Unlicense license.

- 完整记录 JSON：https://awesomecua.com/resources/url-dfa0c83ebd679a37ad00/record.json

### 许可证信息

- 代码：未记录
- 数据：unlicense — https://huggingface.co/datasets/cybergod-agi/gui_and_terminal_operation_recording
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/cybergod-agi/gui_and_terminal_operation_recording（获取于 2026-11-09T19:57:42Z；SHA-256：3e8e163e3b7b66542bedd273c4f1a7a8c231a6844787005122a907ddc2b6fcc3）
- https://huggingface.co/api/datasets/cybergod-agi/gui_and_terminal_operation_recording（获取于 2026-11-09T19:57:42Z；SHA-256：3e8e163e3b7b66542bedd273c4f1a7a8c231a6844787005122a907ddc2b6fcc3）

---

## GUI_Reflection_SFT_train

GUI Reflection 的离线监督微调数据，以 JSONL 文件发布；配套图像需从卡片列出的原始数据集获取。

- 目录页面：https://awesomecua.com/zh/resources/url-528f6fe128b77e9615aa/
- 原始来源：https://huggingface.co/datasets/craigwu/GUI_Reflection_SFT_train
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：模仿学习、自我反思、数据生成
- 证据核查日期：2026-11-09T05:05:16Z
- ID：url:528f6fe128b77e9615aa

### 范围记录

The repository lists JSONL files for several source datasets and reflection examples. The card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-528f6fe128b77e9615aa/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/craigwu/GUI_Reflection_SFT_train
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_SFT_train（获取于 2026-11-09T05:05:16Z；SHA-256：e4f44e03fc317dabcc66e8fecfe9285805cd1cbc746a9bc1e106a520f434d8a0）
- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_SFT_train（获取于 2026-11-09T05:05:16Z；SHA-256：e4f44e03fc317dabcc66e8fecfe9285805cd1cbc746a9bc1e106a520f434d8a0）

---

## GUICourse

用于将通用 VLM 转化为 GUI 智能体的 3 个数据集：面向 OCR 和定位的 GUIEnv、含 67k 条单步及 15k 条多步网页和 Android 操作的 GUIAct，以及 GUIChat 对话数据。

- 目录页面：https://awesomecua.com/zh/resources/github-yiye3-guicourse/
- 原始来源：https://github.com/yiye3/GUICourse
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:yiye3/guicourse

- 完整记录 JSON：https://awesomecua.com/resources/github-yiye3-guicourse/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）

---

## Halluminate/WebBench

Halluminate/WebBench 发布任务数据，用于评估浏览器智能体在真实网站上的读取、创建、更新、删除和文件处理流程。

- 目录页面：https://awesomecua.com/zh/resources/url-5831a1ae8385cda79575/
- 原始来源：https://huggingface.co/datasets/Halluminate/WebBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T21:09:08Z
- ID：url:5831a1ae8385cda79575

### 范围记录

The card reports 2,454 tasks across 452 websites and declares an MIT license. The repository file list includes a CSV task file; the linked GitHub repository holds code and results.

- 完整记录 JSON：https://awesomecua.com/resources/url-5831a1ae8385cda79575/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/Halluminate/WebBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Halluminate/WebBench（获取于 2026-11-09T21:09:08Z；SHA-256：8ddd687af7aff13b7c0c80351243e6b1959e2d9cb81614a2f79d6820e46070d3）
- https://huggingface.co/api/datasets/Halluminate/WebBench（获取于 2026-11-09T21:09:08Z；SHA-256：8ddd687af7aff13b7c0c80351243e6b1959e2d9cb81614a2f79d6820e46070d3）

---

## HiconAgent-AMEX

基于 AMEX 安卓数据集构建的 HiconAgent 训练与验证数据：每个样本包含任务目标、此前的截图与动作，并以下一步动作作为答案，用于 GUI 智能体的历史感知强化学习。

- 目录页面：https://awesomecua.com/zh/resources/url-3df97229d34c44c2014a/
- 原始来源：https://huggingface.co/datasets/Minuskid/HiconAgent-AMEX
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、交互历史、强化学习
- 证据核查日期：2026-11-10T03:01:06Z
- ID：url:3df97229d34c44c2014a

### 范围记录

Two parquet files, train and validation, with id, images, problem, answer and image_size fields; the paper samples 3,000 AMEX steps without extra filtering. The card lists the task category as robotics and declares no license; the HiconAgent repository links this dataset as its data.

- 完整记录 JSON：https://awesomecua.com/resources/url-3df97229d34c44c2014a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Minuskid/HiconAgent-AMEX（获取于 2026-11-10T03:01:06Z；SHA-256：139a63bf925823f929bfc1877e6e1659ceb33ee834051eac18348a16bd325e38）
- https://huggingface.co/api/datasets/Minuskid/HiconAgent-AMEX（获取于 2026-11-10T03:01:06Z；SHA-256：139a63bf925823f929bfc1877e6e1659ceb33ee834051eac18348a16bd325e38）

---

## InSTA 150k Tasks (v3)

InSTA 项目约 15 万项网页导航任务，每项提供网站域名、指令、建议步骤和成功标准，训练集与测试集取自不同网站。

- 目录页面：https://awesomecua.com/zh/resources/url-a80c7330dbfd4f897693/
- 原始来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成
- 证据核查日期：2026-10-18T16:03:36Z
- ID：url:a80c7330dbfd4f897693

### 范围记录

The card cites arXiv 2502.06776 (InSTA: Towards Internet-Scale Training For Agents) and points to an LLM judge in the separate data-for-agents/insta code repository; this record covers the task data. Rows contain text task specifications alone, with agent trajectories and screenshots outside this release. The card declares MIT for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-a80c7330dbfd4f897693/record.json

### 结构化规格

- 格式：Parquet
- 模态：text
- 数据划分：train, test
- 监督信号：task instructions, suggested step lists, success criteria

#### 数量记录

- ≈ 150,000 个任务 — complete v3 release（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 143,508 个示例 — train split（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 2,933 个示例 — test split（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 2,933 个不重复的网站域名 — test split（计算得出）（来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet）

Split sizes are the card's dataset_info num_examples. The distinct-domain count was computed from the inspected test Parquet file.

### 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the v3 task release; the InSTA code repository and the websites named in tasks are not covered by this evidence.
  来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md

### 一手证据

- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md（获取于 2026-10-18T16:03:36Z；SHA-256：0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23）
- https://huggingface.co/api/datasets/data-for-agents/insta-150k-v3（获取于 2026-10-18T16:03:35Z；SHA-256：480f7e251f32652812aafd5ffcb638a14c9612cec73bbb33c245f9685a542808）
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet（获取于 2026-10-18T16:04:11Z；SHA-256：3ae8bb40fd3da6991c15e5d34579b0a631f9ad520ad70a09358ef99770cb239d）
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md（获取于 2026-10-18T16:03:36Z；SHA-256：0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23）

---

## jacklishufan/MobileWorld

MobileWorldBench 训练数据的标注归档：一个 tar 文件，内含基于 AiTW 与 AndroidControl 屏幕构建的 parquet 子集以及一个清洗后的问答划分，用于微调移动端语义世界模型。

- 目录页面：https://awesomecua.com/zh/resources/url-3d12df2fd27076504434/
- 原始来源：https://huggingface.co/datasets/jacklishufan/MobileWorld
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、手机操作
- 证据核查日期：2026-11-10T03:01:06Z
- ID：url:3d12df2fd27076504434

### 范围记录

One mobileworld.tar of about 184 MB; the README asks users to download and untar it manually. Screenshots come from the separate jacklishufan/aitw and jacklishufan/android_control image datasets, and the README also links the Qwen3-VL-8B-Instruct-MobileWorld-SFT model. The repository has no card or license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3d12df2fd27076504434/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/jacklishufan/MobileWorld（获取于 2026-11-10T03:01:06Z；SHA-256：1f10d590e7459e736945793ddc41dd83112bcbb411dd62db596dad8396fb8786）
- https://huggingface.co/api/datasets/jacklishufan/MobileWorld（获取于 2026-11-10T03:01:06Z；SHA-256：1f10d590e7459e736945793ddc41dd83112bcbb411dd62db596dad8396fb8786）

---

## James4Ever0/the_frozen_forest

这是一个将屏幕录像与键盘、鼠标事件配对的数据集归档。时间戳文件用于对应视频帧与记录下的输入操作。

- 目录页面：https://awesomecua.com/zh/resources/url-ede673f7e6f369eae600/
- 原始来源：https://huggingface.co/datasets/James4Ever0/the_frozen_forest
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：录制、视频、数据生成
- 证据核查日期：2026-11-09T19:57:28Z
- ID：url:ede673f7e6f369eae600

### 范围记录

The repository contains recordings.rar. The card describes timestamped folders containing video, HID event records and timestamp JSON files, and declares a WTFPL license.

- 完整记录 JSON：https://awesomecua.com/resources/url-ede673f7e6f369eae600/record.json

### 许可证信息

- 代码：未记录
- 数据：wtfpl — https://huggingface.co/datasets/James4Ever0/the_frozen_forest
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/James4Ever0/the_frozen_forest（获取于 2026-11-09T19:57:28Z；SHA-256：861e9a2a44ef7386d6b207e08832a0132428f9098d7136ca2009658fdd15f46e）
- https://huggingface.co/api/datasets/James4Ever0/the_frozen_forest（获取于 2026-11-09T19:57:28Z；SHA-256：861e9a2a44ef7386d6b207e08832a0132428f9098d7136ca2009658fdd15f46e）

---

## Jedi

与界面分解研究及 OSWorld-G 基准相关的合成 GUI 定位数据。

- 目录页面：https://awesomecua.com/zh/resources/url-e062cf1445eaee0f3ade/
- 原始来源：https://huggingface.co/datasets/xlangai/Jedi
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T09:33:18Z
- ID：url:e062cf1445eaee0f3ade

### 范围记录

The dataset card requires coordinate scaling to stay aligned with the image processor. Follow the publisher recipe before using the grounding labels.

- 完整记录 JSON：https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/record.json

### 结构化规格

- 格式：未记录
- 模态：images, text, coordinates
- 数据划分：未记录
- 监督信号：icon grounding, component grounding, layout grounding, refusal

#### 数量记录

未记录数量。

Coordinates were resized for a specified Qwen2.5-VL image processor and must remain aligned with image resizing. AGUVIS++ material requires images from upstream AGUVIS and OS-Atlas releases.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/Jedi
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xlangai/Jedi（获取于 2026-10-16T09:33:18Z；SHA-256：63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad）
- https://huggingface.co/datasets/xlangai/Jedi/raw/main/README.md（获取于 2026-10-17T02:02:38Z；SHA-256：1d4d15c0cd27837602d55f0fda1ed91d9e8a98b33b3e3c4ba64decae42399558）
- https://huggingface.co/api/datasets/xlangai/Jedi（获取于 2026-10-16T09:33:18Z；SHA-256：63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad）

---

## KNOWS Benchmark

KNOWS 提供 110 项网页智能体任务的提示词和评分细则，用于在 Google Workspace 中创建文档、电子表格和幻灯片。

- 目录页面：https://awesomecua.com/zh/resources/url-573954fad8617c3d5e57/
- 原始来源：https://huggingface.co/datasets/utahnlp/knows-benchmark
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T21:08:28Z
- ID：url:573954fad8617c3d5e57

### 范围记录

The test split is stored in data/test.jsonl. The card directs users to the separate GitHub repository for task-specific evaluators and states an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-573954fad8617c3d5e57/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/utahnlp/knows-benchmark
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/utahnlp/knows-benchmark（获取于 2026-11-09T21:08:28Z；SHA-256：b0b80319026a6027e08ea9ea190d3fca2478deb707d62236a9ca27fa3742dea5）
- https://huggingface.co/api/datasets/utahnlp/knows-benchmark（获取于 2026-11-09T21:08:28Z；SHA-256：b0b80319026a6027e08ea9ea190d3fca2478deb707d62236a9ca27fa3742dea5）

---

## kuangtie/GUI-Robust

GUI-Robust 数据的 Hub 发布版本：包含 GUI 任务的逐步截图及 JSON 标注，任务涵盖七类真实场景异常，可用 GUI-Robust 评测脚本评估单步定位与完整任务成功率。

- 目录页面：https://awesomecua.com/zh/resources/url-369456114b26b0ff0a05/
- 原始来源：https://huggingface.co/datasets/kuangtie/GUI-Robust
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：鲁棒性、评测、动作预测
- 证据核查日期：2026-11-10T03:01:05Z
- ID：url:369456114b26b0ff0a05

### 范围记录

The repository holds a 16.1 GB ui-agent-benchmark.rar archive and a folder of 65 task directories with per-step PNG screenshots and JSON annotations, step names in Chinese; the card declares Apache-2.0, English and Chinese, and 1K to 10K examples. The paper collects user action sequences with RPA tools and writes step and task descriptions with MLLMs.

- 完整记录 JSON：https://awesomecua.com/resources/url-369456114b26b0ff0a05/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/kuangtie/GUI-Robust
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/kuangtie/GUI-Robust（获取于 2026-11-10T03:01:05Z；SHA-256：651ba105b1684b3f9ccc1fdfd127506a574e4d1b801a4cfeb962e3e69c1ea459）
- https://huggingface.co/api/datasets/kuangtie/GUI-Robust（获取于 2026-11-10T03:01:05Z；SHA-256：651ba105b1684b3f9ccc1fdfd127506a574e4d1b801a4cfeb962e3e69c1ea459）

---

## LexBench-Trajectory-Replay

LexBench-Trajectory-Replay 提供 30 个公开网站任务，包含固定的浏览器操作和断言，用于评估浏览器执行与信息获取。

- 目录页面：https://awesomecua.com/zh/resources/url-c049eba816b97d5076d0/
- 原始来源：https://huggingface.co/datasets/Lexmount/LexBench-Trajectory-Replay
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T19:56:08Z
- ID：url:c049eba816b97d5076d0

### 范围记录

The card identifies a test split in data/curated-v1.jsonl and a runtime suite in definitions/suites/curated-v1.json. It declares Apache-2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-c049eba816b97d5076d0/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Lexmount/LexBench-Trajectory-Replay
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Lexmount/LexBench-Trajectory-Replay（获取于 2026-11-09T19:56:08Z；SHA-256：bd851321fe399fd11eec2cc933f202d5c91d7c28205ba19598d40e43e627b884）
- https://huggingface.co/api/datasets/Lexmount/LexBench-Trajectory-Replay（获取于 2026-11-09T19:56:08Z；SHA-256：bd851321fe399fd11eec2cc933f202d5c91d7c28205ba19598d40e43e627b884）

---

## LexBench-WebArena-Replay

LexBench-WebArena-Replay 将 WebArena 任务定义与固定的浏览器操作配对，供 Browser Eval 重放操作并对已发布的 812 项任务评估完成情况。

- 目录页面：https://awesomecua.com/zh/resources/url-a96c70bcf5a235f980b6/
- 原始来源：https://huggingface.co/datasets/Lexmount/LexBench-WebArena-Replay
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、录制
- 证据核查日期：2026-11-09T19:57:26Z
- ID：url:a96c70bcf5a235f980b6

### 范围记录

The release includes a JSONL viewer split and an archive of runtime suites, task scopes, corrected inputs, a site map and file hashes. Execution requires self-hosted WebArena sites and the Browser Eval implementation.

- 完整记录 JSON：https://awesomecua.com/resources/url-a96c70bcf5a235f980b6/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Lexmount/LexBench-WebArena-Replay
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Lexmount/LexBench-WebArena-Replay（获取于 2026-11-09T19:57:26Z；SHA-256：1f99a48d5c214ee5e22fb3cbc7bc3d7f49fabd678ac76a48a724bddde19a4b33）
- https://huggingface.co/api/datasets/Lexmount/LexBench-WebArena-Replay（获取于 2026-11-09T19:57:26Z；SHA-256：1f99a48d5c214ee5e22fb3cbc7bc3d7f49fabd678ac76a48a724bddde19a4b33）

---

## LGWM data and RSWT-Bench

一个用于训练世界模型的图形界面屏幕状态转换数据集，并附有 RSWT-Bench，用于评估观察到的屏幕是否由预期操作产生。

- 目录页面：https://awesomecua.com/zh/resources/url-fde41ce8459b7d3f647f/
- 原始来源：https://huggingface.co/datasets/jiamingzz/lgwm-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页、跨平台
- 主题：数据生成、评测、世界模型、安全与防护
- 证据核查日期：2026-11-09T19:58:06Z
- ID：url:fde41ce8459b7d3f647f

### 范围记录

The card lists training and validation transition indices, screenshot shards and benchmark train and test splits. It identifies the accompanying paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-fde41ce8459b7d3f647f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/jiamingzz/lgwm-data（获取于 2026-11-09T19:58:06Z；SHA-256：0f6310fa2c8ef9320e440732393eddc1c9afc2a325f0462ce11a37aa5e283ebe）
- https://huggingface.co/api/datasets/jiamingzz/lgwm-data（获取于 2026-11-09T19:58:06Z；SHA-256：0f6310fa2c8ef9320e440732393eddc1c9afc2a325f0462ce11a37aa5e283ebe）

---

## LPS-Bench

一个用于评测计算机操作智能体轨迹安全性的数据集，包含 570 个基础案例和 40 个技能变体，覆盖良性任务与对抗性任务。

- 目录页面：https://awesomecua.com/zh/resources/url-625bd97c7aa32cf05833/
- 原始来源：https://huggingface.co/datasets/tianyyuu/LPS-Bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、安全与防护、长任务
- 证据核查日期：2026-11-09T21:08:38Z
- ID：url:625bd97c7aa32cf05833

### 范围记录

The card lists test JSONL tables, case JSON files, mock tools, skill documents, and schemas. It links the execution runner and evaluators in the separate GitHub repository and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-625bd97c7aa32cf05833/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/tianyyuu/LPS-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/tianyyuu/LPS-Bench（获取于 2026-11-09T21:08:38Z；SHA-256：88e850233b0a1279a596fbb244e20eecf2a5e069aa08e7b78cddb3c59cae4a53）
- https://huggingface.co/api/datasets/tianyyuu/LPS-Bench（获取于 2026-11-09T21:08:38Z；SHA-256：88e850233b0a1279a596fbb244e20eecf2a5e069aa08e7b78cddb3c59cae4a53）

---

## lumos_unified_ground_iterative

这是供 Lumos-I 定位模块训练的 JSONL 数据集，汇集数学、问答和网页智能体标注，其中包括 Mind2Web 样本。

- 目录页面：https://awesomecua.com/zh/resources/url-87bba046fba8c1cd968c/
- 原始来源：https://huggingface.co/datasets/ai2lumos/lumos_unified_ground_iterative
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、网页导航、模仿学习
- 证据核查日期：2026-11-09T19:57:38Z
- ID：url:87bba046fba8c1cd968c

### 范围记录

The repository lists a JSONL data file and an Apache-2.0 license. The card identifies the resource's paper as arXiv:2311.05657.

- 完整记录 JSON：https://awesomecua.com/resources/url-87bba046fba8c1cd968c/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_unified_ground_iterative
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_ground_iterative（获取于 2026-11-09T19:57:38Z；SHA-256：316af5b9ad684ce01a4fca1d20f6125a33667224c2caa12057dd4dcfec71a779）
- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_ground_iterative（获取于 2026-11-09T19:57:38Z；SHA-256：316af5b9ad684ce01a4fca1d20f6125a33667224c2caa12057dd4dcfec71a779）

---

## lumos_unified_plan_iterative

lumos_unified_plan_iterative 是用于训练 Lumos 规划模块的 JSONL 数据集，汇集了网页智能体、数学和复杂问答任务的样本。

- 目录页面：https://awesomecua.com/zh/resources/url-543aff764901777e6ad5/
- 原始来源：https://huggingface.co/datasets/ai2lumos/lumos_unified_plan_iterative
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航、数据生成
- 证据核查日期：2026-11-09T19:55:45Z
- ID：url:543aff764901777e6ad5

### 范围记录

The repository includes a JSONL data file. The card lists Mind2Web among the data sources and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-543aff764901777e6ad5/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_unified_plan_iterative
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_plan_iterative（获取于 2026-11-09T19:55:45Z；SHA-256：218b2e60f439ec331b2004b0dc911ff8cd1eb8f435233a59e787e5429cf3680f）
- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_plan_iterative（获取于 2026-11-09T19:55:45Z；SHA-256：218b2e60f439ec331b2004b0dc911ff8cd1eb8f435233a59e787e5429cf3680f）

---

## lumos_web_agent_ground_iterative

这是用于训练网页智能体定位模块的 Lumos-Iterative 数据集。数据卡列出 1009 条 Mind2Web 标注，并链接到使用该数据训练的模型。

- 目录页面：https://awesomecua.com/zh/resources/url-1e85f7557b39ae40193f/
- 原始来源：https://huggingface.co/datasets/ai2lumos/lumos_web_agent_ground_iterative
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、网页导航、数据生成
- 证据核查日期：2026-11-09T21:08:46Z
- ID：url:1e85f7557b39ae40193f

### 范围记录

The repository lists a JSONL data file and declares an Apache-2.0 license. The card associates the data with the Lumos paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-1e85f7557b39ae40193f/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_web_agent_ground_iterative
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_ground_iterative（获取于 2026-11-09T21:08:46Z；SHA-256：ba56bb812567e39ec9f1db863059ae9fe9cf063d3fc1a89cde644eea07d90c51）
- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_ground_iterative（获取于 2026-11-09T21:08:46Z；SHA-256：ba56bb812567e39ec9f1db863059ae9fe9cf063d3fc1a89cde644eea07d90c51）

---

## lumos_web_agent_plan_iterative

这是用于训练 Lumos-Iterative 网页智能体规划模块的数据集；数据概览列出 1009 条 Mind2Web 任务标注。

- 目录页面：https://awesomecua.com/zh/resources/url-0772193ae2967c407d22/
- 原始来源：https://huggingface.co/datasets/ai2lumos/lumos_web_agent_plan_iterative
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航、数据生成
- 证据核查日期：2026-11-09T05:05:19Z
- ID：url:0772193ae2967c407d22

### 范围记录

The repository contains a JSONL data file. The card declares Apache-2.0 and links to the Lumos paper and related model repositories.

- 完整记录 JSON：https://awesomecua.com/resources/url-0772193ae2967c407d22/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_web_agent_plan_iterative
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_plan_iterative（获取于 2026-11-09T05:05:19Z；SHA-256：fb27dc6294ff4bace360fdb62cc5c160478cf59a56671d2257455744a0adf2d6）
- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_plan_iterative（获取于 2026-11-09T05:05:19Z；SHA-256：fb27dc6294ff4bace360fdb62cc5c160478cf59a56671d2257455744a0adf2d6）

---

## luzimu/WebGen-Bench

该数据集收录网站生成指令和 UI 测试用例，用于评估交互式网站，并设有独立的训练集和测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-405959de004b6e32c911/
- 原始来源：https://huggingface.co/datasets/luzimu/WebGen-Bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、界面设计
- 证据核查日期：2026-11-09T19:56:12Z
- ID：url:405959de004b6e32c911

### 范围记录

The card reports 6667 training instructions, 101 test instructions and 647 test cases. The repository contains train and test Parquet files and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-405959de004b6e32c911/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/luzimu/WebGen-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/luzimu/WebGen-Bench（获取于 2026-11-09T19:56:12Z；SHA-256：3e967dc4663052e125531ea5e4f10e9af4902b753591543f6e8e4c2967dec12c）
- https://huggingface.co/api/datasets/luzimu/WebGen-Bench（获取于 2026-11-09T19:56:12Z；SHA-256：3e967dc4663052e125531ea5e4f10e9af4902b753591543f6e8e4c2967dec12c）

---

## luzimu/WebGen-Bench_train_data

WebGen-Instruct 是包含 6,667 条网站生成指令的训练数据集，其中有 600 条轨迹，并设有描述预期界面任务的字段。

- 目录页面：https://awesomecua.com/zh/resources/url-c47b5927fc41eb9a24d4/
- 原始来源：https://huggingface.co/datasets/luzimu/WebGen-Bench_train_data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面设计、数据生成
- 证据核查日期：2026-11-09T21:08:34Z
- ID：url:c47b5927fc41eb9a24d4

### 范围记录

The card shows train and test splits and an example using the Hugging Face Datasets library. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-c47b5927fc41eb9a24d4/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/luzimu/WebGen-Bench_train_data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/luzimu/WebGen-Bench_train_data（获取于 2026-11-09T21:08:34Z；SHA-256：0365a303f495ae9b49354f7f4f035a0397bef0ab8265eb4b4701acb1415112e6）
- https://huggingface.co/api/datasets/luzimu/WebGen-Bench_train_data（获取于 2026-11-09T21:08:34Z；SHA-256：0365a303f495ae9b49354f7f4f035a0397bef0ab8265eb4b4701acb1415112e6）

---

## Magma-AITW-SoM

Magma-AITW-SoM 提供用于 Magma 多模态智能体下游任务微调的 AITW 数据。

- 目录页面：https://awesomecua.com/zh/resources/url-ffe40334f1050b94f8b2/
- 原始来源：https://huggingface.co/datasets/MagmaAI/Magma-AITW-SoM
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：手机操作、数据生成
- 证据核查日期：2026-11-09T05:05:01Z
- ID：url:ffe40334f1050b94f8b2

### 范围记录

The card declares an MIT license. The listed repository files include Arrow data shards and dataset metadata.

- 完整记录 JSON：https://awesomecua.com/resources/url-ffe40334f1050b94f8b2/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/MagmaAI/Magma-AITW-SoM
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MagmaAI/Magma-AITW-SoM（获取于 2026-11-09T05:05:01Z；SHA-256：65435577e2f15341b26bf596fa97da930eb8f779f9e082ef9f6429beaeddd8f8）
- https://huggingface.co/api/datasets/MagmaAI/Magma-AITW-SoM（获取于 2026-11-09T05:05:01Z；SHA-256：65435577e2f15341b26bf596fa97da930eb8f779f9e082ef9f6429beaeddd8f8）

---

## Magma-Mind2Web-SoM

Magma-Mind2Web-SoM 提供用于 Magma 多模态智能体下游微调的 Mind2Web 数据。

- 目录页面：https://awesomecua.com/zh/resources/url-e8256e338a9c379ca85b/
- 原始来源：https://huggingface.co/datasets/MagmaAI/Magma-Mind2Web-SoM
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成
- 证据核查日期：2026-11-09T05:05:01Z
- ID：url:e8256e338a9c379ca85b

### 范围记录

The card declares an MIT license. The listed repository files include Arrow data shards and dataset metadata.

- 完整记录 JSON：https://awesomecua.com/resources/url-e8256e338a9c379ca85b/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/MagmaAI/Magma-Mind2Web-SoM
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MagmaAI/Magma-Mind2Web-SoM（获取于 2026-11-09T05:05:01Z；SHA-256：112de38c5e1f1d4c4d5d93e399a75c8eed014ae2f8cf2c6a18f3179d177322a9）
- https://huggingface.co/api/datasets/MagmaAI/Magma-Mind2Web-SoM（获取于 2026-11-09T05:05:01Z；SHA-256：112de38c5e1f1d4c4d5d93e399a75c8eed014ae2f8cf2c6a18f3179d177322a9）

---

## McGill-NLP/safearena

SafeArena 提供安全与有害任务分组，用于评估自主网页智能体的安全性；配套环境归档需申请权限后获取。

- 目录页面：https://awesomecua.com/zh/resources/url-be4ca14d1724b0cf8314/
- 原始来源：https://huggingface.co/datasets/McGill-NLP/safearena
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:be4ca14d1724b0cf8314

### 范围记录

The page names safe.json and harm.json task files and requires users to request dataset access before downloading. The repository file list includes forum, GitLab and shopping-admin archives.

- 完整记录 JSON：https://awesomecua.com/resources/url-be4ca14d1724b0cf8314/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/McGill-NLP/safearena（获取于 2026-11-09T05:05:20Z；SHA-256：8b31816950372082f6ce4496f8a696ea67172a6cb96d865b81d8887928950978）
- https://huggingface.co/api/datasets/McGill-NLP/safearena（获取于 2026-11-09T05:05:20Z；SHA-256：8b31816950372082f6ce4496f8a696ea67172a6cb96d865b81d8887928950978）

---

## MemGUI-Bench agent trajectories

MemGUI-Bench 移动 GUI 智能体及模型的运行记录按智能体打包为 ZIP，包含逐步截图、操作日志和评估输出，并提供供排行榜查看器使用的压缩轨迹预览。

- 目录页面：https://awesomecua.com/zh/resources/url-2b7363c3a20d8022b319/
- 原始来源：https://huggingface.co/datasets/lgy0404/memgui-bench-trajs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、记忆
- 证据核查日期：2026-10-19T07:05:19Z
- ID：url:2b7363c3a20d8022b319

### 范围记录

The card says each attempt holds step screenshots, a log.json action sequence, evaluation_summary.json and final_decision.json, and action visualizations. The MemGUI-Bench README asks submitters to add a gzip JSON preview and MP4 under site/trajs/ through Hub pull requests. Archive names identify the agent or model, such as M3A, T3A, Mobile-Agent-E, Agent-S2, GUI-Owl-7B and several API models. The card's usage section shows an older run.py interface. The card's apache-2.0 declaration does not settle rights to app screenshots.

- 完整记录 JSON：https://awesomecua.com/resources/url-2b7363c3a20d8022b319/record.json

### 结构化规格

- 格式：ZIP archives, gzip JSON, MP4
- 模态：screenshots, action logs, evaluation results, video previews
- 数据划分：未记录
- 监督信号：agent execution trajectories with LLM-judged outcomes

#### 数量记录

- 14 个按智能体划分的 ZIP 归档 — Hub manifest at revision 4525fc5（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a）
- 19 个 gzip JSON 轨迹预览包 — site/trajs/ in the Hub manifest at revision 4525fc5（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a）

Archives and preview bundles are different packagings and overlap in the agents they cover; neither is a trajectory or task count. site/trajs/index.json lists only 9 of the 19 preview bundles.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md（获取于 2026-10-19T07:05:19Z；SHA-256：62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735）
- https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a（获取于 2026-10-19T07:05:19Z；SHA-256：36b39075a426e792530250753c3befd3136b963e65b67e230ed1deedca9b1296）
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/site/trajs/index.json（获取于 2026-10-19T07:05:21Z；SHA-256：d7889d1a5f6da09930ce70b128e304d61b08768c27bc0500cb9f8863b314a866）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md（获取于 2026-10-19T07:05:14Z；SHA-256：fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb）
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md（获取于 2026-10-19T07:05:19Z；SHA-256：62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735）

---

## META-GUI dataset

META-GUI 的 Hub 发布版，收录智能体操作移动应用的任务型对话；每轮将对话与截图、视图层级 XML、记录的 GUI 操作和回复配对。

- 目录页面：https://awesomecua.com/zh/resources/url-05a9a7c592089d1ddd46/
- 原始来源：https://huggingface.co/datasets/X-LANCE/META-GUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：手机操作、人机协作、动作预测
- 证据核查日期：2026-10-18T15:46:20Z
- ID：url:05a9a7c592089d1ddd46

### 范围记录

The card only links the paper and the X-LANCE/META-GUI-baseline repository, which documents the raw dialog folders (dialog.json, per-turn actions.json, PNG screenshots and XML view hierarchies) and the processed data.json fields. The Hub manifest at revision 12660de5 holds train.tar and test.tar (about 14.3 GB and 1.8 GB); the baseline README instead describes train and dev folders from an Amazon S3 archive, and the split correspondence is not established. No source names the mobile operating system. Apache-2.0 is the Hub card's data declaration; the baseline code's MIT license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/record.json

### 结构化规格

- 格式：TAR archives, JSON, PNG, XML
- 模态：dialogue text, screenshots, view hierarchies, actions
- 数据划分：train, test
- 监督信号：GUI action sequences per dialogue turn, target elements for clicks, system response text

#### 数量记录

未记录数量。

Splits are the two Hub archive names; the baseline README's processed data uses train and dev folders. Formats inside the archives come from the baseline README's raw-data description.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md（获取于 2026-10-18T15:46:20Z；SHA-256：cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda）
- https://huggingface.co/api/datasets/X-LANCE/META-GUI/revision/12660de515ad55e40e8c4e5afa8f4d0e7430ab34（获取于 2026-10-18T15:45:56Z；SHA-256：ef370ba12e94c45d0fb74fe3e44b29f9e058e19fab739a15a6a1d04f4101460d）
- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/a845f88e7d89fe60d3666d15adb32d4e2ef907db/README.md（获取于 2026-10-18T15:45:57Z；SHA-256：2cea1be73ea75acd46990ab1fb567fbd83ad58a2bc69ca858b207660df9fe8c1）
- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md（获取于 2026-10-18T15:46:20Z；SHA-256：cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda）

---

## Mind2Web 2 task data and judge scripts

Mind2Web 2 在 Hub 上自动设置访问限制的发布版：用于长程自主网页搜索的开发集与测试集任务 CSV，以及充当评判智能体的 130 个逐任务 Python 评估脚本。

- 目录页面：https://awesomecua.com/zh/resources/url-4f4c4f0bf0cec93c59d1/
- 原始来源：https://huggingface.co/datasets/osunlp/Mind2Web-2
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务
- 证据核查日期：2026-10-18T16:01:45Z
- ID：url:4f4c4f0bf0cec93c59d1

### 范围记录

The Hub API at revision 54f5b254 reports gated 'auto' (access is approved automatically after a logged-in request) and lists dev_set.csv and test_set.csv as the dev_set and test_set splits, a changelog, and 130 Python files under evaluation_scripts/2025_10_23. The description comes from the project README, which links this dataset as its tasks and judge-agent evaluation scripts and says the scripts for both the public dev set and the test set were released on 2025-10-23. The Hub card metadata declares CC BY 4.0; the repository code is MIT and is not applied to the data. Per the README, scoring with the scripts needs model API keys, and precaching the cited webpages is optional but recommended.

- 完整记录 JSON：https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/record.json

### 结构化规格

- 格式：CSV, Python
- 模态：text, Python code
- 数据划分：dev_set, test_set
- 监督信号：task definitions for live-web agentic search, per-task judge-agent evaluation scripts

#### 数量记录

- 130 个逐任务评测脚本 — evaluation_scripts/2025_10_23 in osunlp/Mind2Web-2 at revision 54f5b25（计算得出）（来源：https://huggingface.co/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23）

The script count is the number of distinct .py files in the pinned tree listing. The automatic access gate leaves the dev and test task CSVs unopened and their per-split task counts unknown.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web-2
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45（获取于 2026-10-18T16:01:45Z；SHA-256：c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/1fcbfda98bf5c669daa2ed0a27f1d2f2499475ee/README.md（获取于 2026-10-18T16:01:21Z；SHA-256：5cc72b992cfc11094dcf341c284d5baadc6c66a302fdfd474b27913fe1c91f6f）
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23（获取于 2026-10-18T16:00:57Z；SHA-256：42844a52150a767be14adcad614f2973e537a7154944a24c0dcb6bce6bf47d9d）
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45（获取于 2026-10-18T16:01:45Z；SHA-256：c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e）

---

## Mind2Web bbox eval (MultiUI)

Mind2Web 步骤经 MultiUI 作者重新打包为 JPEG 截图及逐步 JSONL 查询和候选元素框，用于 MultiUI 基于截图的 Mind2Web 操作评估。

- 目录页面：https://awesomecua.com/zh/resources/url-56b5936190d20fa3d1c1/
- 原始来源：https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、评测
- 证据核查日期：2026-10-18T16:03:54Z
- ID：url:56b5936190d20fa3d1c1

### 范围记录

The Hub API at revision b089ea88 lists two ZIP archives (about 6.25 GB and 14.4 GB) beside a card that declares ODC-By; the repository is publicly accessible. The card only names this the Mind2Web evaluation set for the MultiUI paper. The MultiUI README calls it its processed Mind2Web evaluation dataset, places it under its Mind2Web-SeeAct offline-experiment directory and runs eval_m2w.py on test_task, test_website or test_domain. Archive contents were read from their ZIP central directories and one sample query: each step folder, named by Mind2Web annotation and action IDs, holds a queries.jsonl with the task, previous actions, target operation and positive and negative candidate elements with bounding boxes, plus JPEG images. The archive named for ground-truth crops also has a train split; the paper's Appendix H says screenshots are randomly cropped around the target element. Mind2Web's own data terms are not resolved here; ODC-By is the card declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/record.json

### 结构化规格

- 格式：ZIP archives, JSONL, JPEG
- 模态：screenshots, task instructions, previous actions, target operations, candidate elements with bounding boxes
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：next-action prediction on Mind2Web steps, candidate-element bounding boxes

#### 数量记录

未记录数量。

Counts were taken with a script from the archives' ZIP central directories at revision b089ea88 and have no retained receipt, so they are kept here rather than as count observations. bbox_generate_gt_crop_offline_data_-1choices.zip: 16,715 step folders with one JPEG each (train 7,357; test_task 2,093; test_website 1,370; test_domain 5,895). offline_data_-1choices.zip: 9,364 step folders with 27,967 JPEGs, test splits only (test_task 2,093; test_website 1,373; test_domain 5,898). Step folders and tasks are different units; distinct annotation IDs per split are train 1,009, test_task 252, test_website 177 and test_domain 912, with the same test counts in both archives.

### 许可证信息

- 代码：未记录
- 数据：odc-by — https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md（获取于 2026-10-18T16:03:54Z；SHA-256：ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970）
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/revision/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d（获取于 2026-10-18T16:02:59Z；SHA-256：e662d712439d9cfc547fc2b1834051c194eff072e3947281a3588281662f49ab）
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/tree/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d（获取于 2026-10-18T16:02:59Z；SHA-256：b623f067568ec9fa36b4caed1b7de98a01d0d4197945ce42de078d32be508698）
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md（获取于 2026-10-18T16:02:59Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://arxiv.org/html/2410.13824v3（获取于 2026-10-18T16:03:00Z；SHA-256：383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c）
- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md（获取于 2026-10-18T16:03:54Z；SHA-256：ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970）

---

## Mind2Web-cleaned-lite-value-model-w-cot-test

一个包含 6125 条网页操作记录的 Mind2Web 数据集，涵盖元素候选项、无障碍树、先前操作、推理说明和价值评分。

- 目录页面：https://awesomecua.com/zh/resources/url-9e2c14b01faf8d48b4e9/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、GUI 定位、奖励模型、网页导航
- 证据核查日期：2026-11-09T21:10:46Z
- ID：url:9e2c14b01faf8d48b4e9

### 范围记录

The card defines a train split and lists fields for the current and next accessibility trees. The repository lists Parquet data files.

- 完整记录 JSON：https://awesomecua.com/resources/url-9e2c14b01faf8d48b4e9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test（获取于 2026-11-09T21:10:46Z；SHA-256：3270a1d936f40fd9607b173103cf444aee725d9137f49f58dfea9ea5b237d70b）
- https://huggingface.co/api/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test（获取于 2026-11-09T21:10:46Z；SHA-256：3270a1d936f40fd9607b173103cf444aee725d9137f49f58dfea9ea5b237d70b）

---

## Mobile3M

小米 MobileVLM 的预训练语料，以各应用的图结构归档文件分发，涵盖百度地图、QQ 音乐、携程和唯品会等移动应用。

- 目录页面：https://awesomecua.com/zh/resources/url-b80bfa0a4939a493a11f/
- 原始来源：https://huggingface.co/datasets/xwk123/Mobile3M
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:b80bfa0a4939a493a11f

- 完整记录 JSON：https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/record.json

### 结构化规格

- 格式：7z app-graph archives, multipart 7z files
- 模态：未记录
- 数据划分：partial training release
- 监督信号：mobile UI pretraining for MobileVLM

#### 数量记录

未记录数量。

Official README calls this a partial training release and says app data will be uploaded gradually. Its training-JSON and test-data links point to separate Hub repositories with separate file and split inventories. Public revision 3df26694 lists app-graph archives; the downloadable example count remains unspecified. The card YAML says Apache-2.0 while its prose and official README assign CC-BY-NC-SA-4.0 to data and Apache to code; the existing data-license value remains unknown with the conflict documented.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The retained first-party API has Apache-2.0 card metadata but its publisher description explicitly assigns Apache to source code and CC-BY-NC-SA-4.0 to the dataset. A single permissive dataset declaration is unresolved.
  来源：https://huggingface.co/api/datasets/xwk123/Mobile3M

### 一手证据

- https://huggingface.co/api/datasets/xwk123/Mobile3M（获取于 2026-10-16T06:38:26Z；SHA-256：356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824）
- https://huggingface.co/datasets/xwk123/Mobile3M/raw/3df26694ff9186604eb44a8e633894d3ece67ed9/README.md（获取于 2026-10-17T14:10:01Z；SHA-256：8a097dbc7384d3743f262dc0164c176ed577bf720cbbc92ff8b3cd820d1aed4f）
- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md（获取于 2026-10-17T14:22:04Z；SHA-256：e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef）
- https://huggingface.co/api/datasets/xwk123/Mobile3M（获取于 2026-10-16T06:38:26Z；SHA-256：356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824）

---

## MobileViews

使用优化后的 DroidBot 从 20,000 多个 Google Play 应用采集的超过 600,000 对 Android 截图与视图层级数据，包含各应用的完整轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-cc4aa8caeee0cff58e73/
- 原始来源：https://huggingface.co/datasets/mllmTeam/MobileViews
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:cc4aa8caeee0cff58e73

- 完整记录 JSON：https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/record.json

### 结构化规格

- 格式：JPEG, JSON, XML, Parquet, CSV, ZIP packages, HTML/JavaScript trace visualization
- 模态：screenshots, view hierarchies, action traces, app metadata
- 数据划分：未记录
- 监督信号：paired screenshot/view-hierarchy structure, recorded app states, actions and transitions

#### 数量记录

- > 600,000 组截图–视图层级对 — publisher-reported MobileViews-600K first release（来源报告；来源：https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md）
- > 20,000 个 Android 应用 — publisher-reported MobileViews-600K first release（来源报告；来源：https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md）

Counts describe the card’s first-release claim. The card distinguishes globally image-hash-deduplicated screenshot/VH pairs from November 2024 complete-app traces; trace states reuse the screen population. JPEG/JSON and Parquet are alternative representations. Listed filename ranges are examples; a complete corpus count requires a separate inventory. No train/validation/test split is documented. Hub revision c734715e is ungated; MIT is its data declaration, without resolving third-party app content rights.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/mllmTeam/MobileViews
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/mllmTeam/MobileViews（获取于 2026-10-16T06:38:26Z；SHA-256：d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9）
- https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md（获取于 2026-10-17T14:10:01Z；SHA-256：94a4f04e180dbd597c271b0d7470c907e6526b95a6420f01b3183feb1ee24d6e）
- https://huggingface.co/api/datasets/mllmTeam/MobileViews（获取于 2026-10-16T06:38:26Z；SHA-256：d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9）

---

## mobilevlm_test

MobileVLM 的 Mobile3M 基准测试数据，以两卷 7z 压缩包发布。Mobile3M 是一个中文移动端 UI 数据集，包含 300 万个由真实跳转动作连接的页面。

- 目录页面：https://awesomecua.com/zh/resources/url-5182ab4e9bd7843f240b/
- 原始来源：https://huggingface.co/datasets/xwk123/mobilevlm_test
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、手机操作、评测
- 证据核查日期：2026-11-10T03:01:03Z
- ID：url:5182ab4e9bd7843f240b

### 范围记录

Files are test_data.7z.001 and test_data.7z.002. The card states CC BY-NC-SA 4.0 for the dataset and Apache 2.0 for code; the MobileVLM repository releases Mobile3M training data, training JSON files and the Appium collection script separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-5182ab4e9bd7843f240b/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xwk123/mobilevlm_test
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xwk123/mobilevlm_test（获取于 2026-11-10T03:01:03Z；SHA-256：abee6057987d5794c4f18114c0918a85ec346a1d253e5610c2d691e4ee6f9d65）
- https://huggingface.co/api/datasets/xwk123/mobilevlm_test（获取于 2026-11-10T03:01:03Z；SHA-256：abee6057987d5794c4f18114c0918a85ec346a1d253e5610c2d691e4ee6f9d65）

---

## MoCon

为 10,364 张移动应用截图提供图标和文字边界框标注，含 154 个图标类别及文字字体标签，以 LabelMe JSON 和训练、验证、测试划分发布；此次发布将标注与所引用的图像分开提供。

- 目录页面：https://awesomecua.com/zh/resources/url-c7489f15e7883a695832/
- 原始来源：https://huggingface.co/datasets/OpenDFM/MoCon
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、数据生成
- 证据核查日期：2026-10-18T16:15:57Z
- ID：url:c7489f15e7883a695832

### 范围记录

The card, shared with its sibling crawl release, carries only the license, links and citation requests, and the pre-release PDF it links is a two-page announcement framed around mobile GUI agents without methods or statistics. Contents were read from the 15.6 MB mocondata.zip (SHA-256 98463d69…, matching the Hub LFS object): one LabelMe 4.5.9 JSON file per screenshot whose imagePath names a JPEG outside this repository and whose imageData is empty. A script counted 364,352 rectangles: 212,342 labelled icon with one of the 154 icon.csv classes (in Chinese or English) and 152,010 text boxes labelled with a font family (sans, fantasy, serif, cursive, mono or math) and the transcribed text. Image sizes are mostly 1080×1920 and 540×960 portrait. No operating system is named, so the environment stays unspecified. CC BY-NC-SA 4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c7489f15e7883a695832/record.json

### 结构化规格

- 格式：LabelMe JSON, ZIP, CSV
- 模态：bounding-box annotations, UI text transcriptions
- 数据划分：train, val, test
- 监督信号：icon bounding boxes with class labels, text bounding boxes with transcribed text and font-family labels

#### 数量记录

- 6,972 张已标注的截图 — MoCon train split（计算得出）（来源：https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv）
- 1,143 张已标注的截图 — MoCon val split（计算得出）（来源：https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv）
- 2,249 张已标注的截图 — MoCon test split（计算得出）（来源：https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv）
- 154 个图标类别 — icon.csv class table (Chinese and English names)（计算得出）（来源：https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv）

split.csv assigns each of the 10,364 annotation IDs to exactly one split, and the IDs match the JSON file names in mocondata.zip one to one. Screenshot images are referenced by file name; pairing the annotations with pixels requires images from outside this repository. The publisher states no counts; all counts were computed from the released files.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md（获取于 2026-10-18T16:15:57Z；SHA-256：7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd）
- https://huggingface.co/api/datasets/OpenDFM/MoCon（获取于 2026-10-18T16:15:56Z；SHA-256：9ddd265eeda4ed7439927fefd24805573c46fb9ee072341b8129a377d720f8f5）
- https://huggingface.co/api/datasets/OpenDFM/MoCon/tree/e37127c9ad04ccd5a1381aa60054683eda8a5462（获取于 2026-10-18T16:16:12Z；SHA-256：4cbfe0afb8a5b37901a986d9bfcb38c2e6bd9455eebdb95879039c15c205d6a9）
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv（获取于 2026-10-18T16:15:58Z；SHA-256：281c3b35f822b9e7b278552c663718df17ba698fccc8ef65ef29280cbae2dd18）
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv（获取于 2026-10-18T16:15:59Z；SHA-256：409e9b424de315eafd248f80030221b70c4f372355f88b1ce36b076c52db1ef5）
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/MoGUI_Paper_v0.1.pdf（获取于 2026-10-18T16:16:00Z；SHA-256：5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5）
- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md（获取于 2026-10-18T16:15:57Z；SHA-256：7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd）

---

## MoGUI

Android 应用 GUI 抓取数据包含逐应用导航图，以 UI 操作连接屏幕 ID，另有 200 个分片归档保存捕获的屏幕。

- 目录页面：https://awesomecua.com/zh/resources/url-be89a250747f507a27ef/
- 原始来源：https://huggingface.co/datasets/OpenDFM/MoGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、数据生成、手机操作
- 证据核查日期：2026-10-19T06:19:12Z
- ID：url:be89a250747f507a27ef

### 范围记录

The card carries the license, links and citation requests (MobA, META-GUI, CAM-GUI and a MoGUI/MoCon technical report); the announced complete report remains unlinked, leaving the paper relation unrecorded. The repository's MoGUI_Paper_v0.1.pdf is a two-page pre-release announcement without methods or statistics. Android is established by the metadata: Google Play package names, android.widget element classes and Android permission-controller screens. At revision 19639219 the manifest holds 200 metadata JSON shards, 200 moguidata tar.gz shards totalling about 1.14 TB, and an apk_infos.json file of Google Play listing fields per package. Metadata shard 1 alone holds navigation graphs for 1,084 app packages listing 13,726 valid screens. A streamed read of the start of the first tar.gz shard showed per-app folders of PNG screenshots with same-named XML files. CC BY-NC-SA 4.0 is the card's data declaration. The sibling MoCon dataset is a separate release.

- 完整记录 JSON：https://awesomecua.com/resources/url-be89a250747f507a27ef/record.json

### 结构化规格

- 格式：JSON, tar.gz archives, PNG, XML
- 模态：UI action strings naming element text, package, widget class and bounds, screenshots (seen in a partial archive read), XML view hierarchies (seen in a partial archive read)
- 数据划分：未记录
- 监督信号：crawled screen-transition navigation graphs

#### 数量记录

未记录数量。

Each metadata shard maps an app package to a root screen, a valid-screen list and a navigation graph whose nodes are screen hashes with next screens and the triggering actions. Only metadata shard 1 was counted; total app, screen and transition counts remain unspecified by the publisher, and file counts are a separate unit from samples.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md（获取于 2026-10-19T06:19:12Z；SHA-256：bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8）
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/revision/19639219617d083a03e24842fc620e010cc63189（获取于 2026-10-19T06:19:11Z；SHA-256：aa4356912f147cade9b4f9067103beff80dc594f7b6562f6ae61ac4b9ef9bb71）
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/metadata/data_00001_of_00200.json（获取于 2026-10-18T16:04:11Z；SHA-256：758a3c377b240a779d73b96b4c2ac5a185c99e0dc04bbda5d4dbcaa3ae59f166）
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/tree/19639219617d083a03e24842fc620e010cc63189/moguidata（获取于 2026-10-18T16:04:13Z；SHA-256：a518ed2d7726225d4c399bdd06c3d9e1a5333425b6dd86446e3d22f2fef1a007）
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/MoGUI_Paper_v0.1.pdf（获取于 2026-10-18T16:04:23Z；SHA-256：5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5）
- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md（获取于 2026-10-19T06:19:12Z；SHA-256：bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8）

---

## MolmoPoint-GUISyn

Ai2 合成 GUI 元素定位数据集包含约 36K 张由代码渲染的桌面、移动端和网页截图，每张均有密集元素边界框、名称及每个元素的五条自然语言意图，用于训练指向模型。

- 目录页面：https://awesomecua.com/zh/resources/url-a7e3c6c6b37793c3151c/
- 原始来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows、macOS、Linux、Android、iOS、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-19T06:17:16Z
- ID：url:a7e3c6c6b37793c3151c

### 范围记录

Screenshots are rendered with headless Chromium from HTML that Claude Sonnet 4.6 wrote, so the Windows, macOS, Linux, iOS and Android labels describe simulated interfaces; the card says this content is subject to Anthropic's terms. Each example keeps its source HTML and generation metadata. The Hub repository also holds the MolmoPoint paper PDF; the generation pipeline and the companion pointing model are released separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, HTML source, bounding boxes, instructions
- 数据划分：desktop train, desktop validation, mobile train, mobile validation, web train, web validation
- 监督信号：synthetic GUI element annotations, element names, natural-language interaction intents

#### 数量记录

- ≈ 36,000 张截图 — all three subsets as described in the card prose（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 16,232 个截图示例 — desktop train split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 256 个截图示例 — desktop validation split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 9,830 个截图示例 — web train split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 256 个截图示例 — web validation split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- ≈ 10,500 个截图示例 — mobile subset as described in the card prose（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）

The card metadata gives split sizes for the desktop and web configurations only; the mobile configuration's sizes appear only as the prose figure of 10.5K. The prose figures for desktop (16.6K) and web (10.2K) differ slightly from the metadata split totals (16,488 and 10,086). Each element carries a name, five intents and center/size coordinates; the card reports an average of 54 annotated elements per image. Annotations are LLM-generated.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting declarations in the same card: the metadata header declares Apache-2.0, while the License section declares ODC-BY and adds that Claude-generated screenshots are subject to Anthropic's terms. The GitHub code license does not resolve the data terms.
  来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md

### 一手证据

- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md（获取于 2026-10-19T06:17:16Z；SHA-256：74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd）
- https://huggingface.co/api/datasets/allenai/MolmoPoint-GUISyn/revision/24bb3e990bb1e48796d80ade9dbc858dda695e75（获取于 2026-10-19T06:17:16Z；SHA-256：df47b9fad1bfd4ec67013263cd4bfe1be0a32e3f303f2e13be068ac81bdc4101）
- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md（获取于 2026-10-19T06:17:16Z；SHA-256：74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd）

---

## MoTIF

移动端任务的操作演示和自然语言指令。

- 目录页面：https://awesomecua.com/zh/resources/github-aburns4-motif/
- 原始来源：https://github.com/aburns4/MoTIF
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:aburns4/motif

- 完整记录 JSON：https://awesomecua.com/resources/github-aburns4-motif/record.json

### 结构化规格

- 格式：JSON metadata, screen images
- 模态：screenshots, view hierarchies, language, interaction sequences, feasibility labels
- 数据划分：未记录
- 监督信号：interaction trajectories, task feasibility

#### 数量记录

未记录数量。

The raw collection mixes action, language, exploration, and unusable/other traces. These groups have different annotation coverage; valid task demonstrations are a subset of raw traces.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/aburns4/MoTIF/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：4b2f5a23dc28e96b671272380b953e7fabaf34f4b1e83f3513643846718e3389）

---

## NAIL-Group/ClawBench

NAIL-Group/ClawBench 发布用于评估浏览器智能体的真实网站任务数据；数据卡介绍 V1、V2 任务集、任务元数据，以及通过 datasets 库加载的方法。

- 目录页面：https://awesomecua.com/zh/resources/url-146edbaee6701bdb6ee0/
- 原始来源：https://huggingface.co/datasets/NAIL-Group/ClawBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、数据生成
- 证据核查日期：2026-11-09T05:05:02Z
- ID：url:146edbaee6701bdb6ee0

### 范围记录

The repository lists a Parquet data file, test cases, extra task information, and leaderboard results. The card declares an Apache-2.0 license and links companion trace datasets.

- 完整记录 JSON：https://awesomecua.com/resources/url-146edbaee6701bdb6ee0/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/NAIL-Group/ClawBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/NAIL-Group/ClawBench（获取于 2026-11-09T05:05:02Z；SHA-256：324d28cf0a3bccc791f36ad98baeeea0ae2c3279d4a37562a9f63c846ba0b2dc）
- https://huggingface.co/api/datasets/NAIL-Group/ClawBench（获取于 2026-11-09T05:05:02Z；SHA-256：324d28cf0a3bccc791f36ad98baeeea0ae2c3279d4a37562a9f63c846ba0b2dc）

---

## NAIL-Group/ClawBenchV1Trace

ClawBench V1 Traces 发布浏览器智能体运行记录，包含屏幕视频、操作、网络流量和智能体消息，可用于回放、调试及重新评分。

- 目录页面：https://awesomecua.com/zh/resources/url-e7653b062bded670198a/
- 原始来源：https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、可观测性、录制、网页导航
- 证据核查日期：2026-11-09T05:05:10Z
- ID：url:e7653b062bded670198a

### 范围记录

Each run directory includes metadata, recording.mp4, actions.jsonl, requests.jsonl, agent-messages.jsonl and interception.json. The card declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e7653b062bded670198a/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/NAIL-Group/ClawBenchV1Trace（获取于 2026-11-09T05:05:10Z；SHA-256：548f66ce537d36b35656141469524f6f0a7a9fea92cc4cb37d60ede5421a57a5）
- https://huggingface.co/api/datasets/NAIL-Group/ClawBenchV1Trace（获取于 2026-11-09T05:05:10Z；SHA-256：548f66ce537d36b35656141469524f6f0a7a9fea92cc4cb37d60ede5421a57a5）

---

## navi-bench

Navi-Bench 的任务数据，该基准包含在真实网站上执行的日常网页任务：验证集共 200 行，覆盖 Apartments、Craigslist、Google Flights 等十个网站，每行带有任务生成配置、领域和类别。

- 目录页面：https://awesomecua.com/zh/resources/url-5bbbc1012ab02e9df3bb/
- 原始来源：https://huggingface.co/datasets/yutori-ai/navi-bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:01:04Z
- ID：url:5bbbc1012ab02e9df3bb

### 范围记录

One parquet file with fields such as task_id, task_generation_config_json, env, domain, l1_category, l2_category and suggested_difficulty; the card declares Apache-2.0. The domain column covers ten sites: Resy, Zillow, Allbirds, Craigslist, Google Flights, OpenTable, Gymshark, Apartments, Redfin and Trip, 20 rows each; 66 of the 200 rows carry a suggested difficulty.

- 完整记录 JSON：https://awesomecua.com/resources/url-5bbbc1012ab02e9df3bb/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/yutori-ai/navi-bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/yutori-ai/navi-bench（获取于 2026-11-10T03:01:04Z；SHA-256：8c41c65a4a1df2c3ba8602bace4dff99dc72529b18e72e15068346a332e95435）
- https://huggingface.co/api/datasets/yutori-ai/navi-bench（获取于 2026-11-10T03:01:04Z；SHA-256：8c41c65a4a1df2c3ba8602bace4dff99dc72529b18e72e15068346a332e95435）

---

## NNetNav Live data

随 NNetNav 发布的实时网站场景浏览器交互数据，训练文件和测试文件分别提供。

- 目录页面：https://awesomecua.com/zh/resources/url-4f47abde8cd28a1ec1e1/
- 原始来源：https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航
- 证据核查日期：2026-10-16T11:11:53Z
- ID：url:4f47abde8cd28a1ec1e1

### 范围记录

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- 完整记录 JSON：https://awesomecua.com/resources/url-4f47abde8cd28a1ec1e1/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live（获取于 2026-10-16T11:11:53Z；SHA-256：d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16）
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md（获取于 2026-10-16T10:42:34Z；SHA-256：3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3）
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live（获取于 2026-10-16T11:11:53Z；SHA-256：d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16）

---

## OneJev-Data

OneJev-Data 以 Parquet 文件发布 94,707 条问答训练数据，涵盖 GUI 智能体运行记录、屏幕、图像、视频和文本。

- 目录页面：https://awesomecua.com/zh/resources/url-f2e2030eaee4250d995d/
- 原始来源：https://huggingface.co/datasets/OmniJev/OneJev-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、界面理解、视频
- 证据核查日期：2026-11-09T19:56:33Z
- ID：url:f2e2030eaee4250d995d

### 范围记录

The full training split is stored in 18 Parquet files, alongside a 100-row sample. Each row retains its source license, recorded in the license column and licenses.csv.

- 完整记录 JSON：https://awesomecua.com/resources/url-f2e2030eaee4250d995d/record.json

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/OmniJev/OneJev-Data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OmniJev/OneJev-Data（获取于 2026-11-09T19:56:33Z；SHA-256：73166b2733fff59c6c924944c812fb307107832f4768bf33098aa2c04ce463b5）
- https://huggingface.co/api/datasets/OmniJev/OneJev-Data（获取于 2026-11-09T19:56:33Z；SHA-256：73166b2733fff59c6c924944c812fb307107832f4768bf33098aa2c04ce463b5）

---

## OpenJev-Data

OpenJev-Data 提供带标签的浏览器操作步骤，用于训练模型选择网页智能体的下一步操作及目标元素，并提供固定测试集以评估端点。

- 目录页面：https://awesomecua.com/zh/resources/url-a54a35c90681ced60cec/
- 原始来源：https://huggingface.co/datasets/alanhuangya/OpenJev-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、网页导航、评测、数据生成
- 证据核查日期：2026-11-09T19:57:36Z
- ID：url:a54a35c90681ced60cec

### 范围记录

The card lists Parquet configurations with training, validation, and test splits. Its license field says mixed-see-card.

- 完整记录 JSON：https://awesomecua.com/resources/url-a54a35c90681ced60cec/record.json

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/alanhuangya/OpenJev-Data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/alanhuangya/OpenJev-Data（获取于 2026-11-09T19:57:36Z；SHA-256：7459e00d6843a6a8bfb39a17642ecf161efb97f351ccfecbdfedb13c2f95090d）
- https://huggingface.co/api/datasets/alanhuangya/OpenJev-Data（获取于 2026-11-09T19:57:36Z；SHA-256：7459e00d6843a6a8bfb39a17642ecf161efb97f351ccfecbdfedb13c2f95090d）

---

## OpenPhone_dataset

OpenPhone 移动智能体的训练数据：包含 AndroidLab 训练数据压缩包，以及带有大模型生成的推理与反思链、按 GRPO 训练格式整理的 Hugging Face 视觉语言数据集。

- 目录页面：https://awesomecua.com/zh/resources/url-e7ea65893ab264517d83/
- 原始来源：https://huggingface.co/datasets/hkuds/OpenPhone_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、数据生成、强化学习
- 证据核查日期：2026-11-10T03:01:14Z
- ID：url:e7ea65893ab264517d83

### 范围记录

Two zip archives: android-lab-train.zip, copied from the AndroidLab project, and android_lab_o1_visual_hf.zip, produced from it by the OpenPhone prepare_data scripts. The OpenPhone repository uses them for SFT with LLaMA-Factory and GRPO training of a Qwen2.5-VL-3B model. License: MIT.

- 完整记录 JSON：https://awesomecua.com/resources/url-e7ea65893ab264517d83/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/hkuds/OpenPhone_dataset
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/hkuds/OpenPhone_dataset（获取于 2026-11-10T03:01:14Z；SHA-256：c8025c985de2d2b28592be5da74b2047e41b081d908de1d07cdfc8cf7b63d211）
- https://huggingface.co/api/datasets/hkuds/OpenPhone_dataset（获取于 2026-11-10T03:01:14Z；SHA-256：c8025c985de2d2b28592be5da74b2047e41b081d908de1d07cdfc8cf7b63d211）

---

## OS-Copilot/OS-Shepherd-100K

一个包含图形界面智能体轨迹和截图的数据集，用于训练判断任务是否完成的模型，并提供监督训练记录及强化学习数据划分。

- 目录页面：https://awesomecua.com/zh/resources/url-d716497286ae5cd5e762/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Shepherd-100K
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：奖励模型、数据生成、评测
- 证据核查日期：2026-11-09T19:57:44Z
- ID：url:d716497286ae5cd5e762

### 范围记录

The card lists supervised JSON files, screenshot tar shards, and GRPO training and validation Parquet files. It also describes a mobile trajectory supplement.

- 完整记录 JSON：https://awesomecua.com/resources/url-d716497286ae5cd5e762/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/OS-Shepherd-100K（获取于 2026-11-09T19:57:44Z；SHA-256：d4df1d3dc30c514bed42ee3c09c04de4e9c5fe6421ad8e2d15904920d2e7c7a8）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Shepherd-100K（获取于 2026-11-09T19:57:44Z；SHA-256：d4df1d3dc30c514bed42ee3c09c04de4e9c5fe6421ad8e2d15904920d2e7c7a8）

---

## OS-Copilot/OSReward

OSReward 发布带有标签且截图与步骤对齐的计算机操作轨迹，分为 Full 和 Hard 测试集，用于评估任务成功与否的判断。

- 目录页面：https://awesomecua.com/zh/resources/url-e01658de14c2e62fbf20/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OSReward
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Windows、Linux、Android
- 主题：评测、奖励模型、数据生成
- 证据核查日期：2026-11-09T21:09:36Z
- ID：url:e01658de14c2e62fbf20

### 范围记录

The card reports 1,019 Full trajectories and 284 Hard trajectories, stored as sharded Parquet files with embedded images and binary SUCCESS or FAIL labels. It cites arXiv:2607.28609.

- 完整记录 JSON：https://awesomecua.com/resources/url-e01658de14c2e62fbf20/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/OSReward（获取于 2026-11-09T21:09:36Z；SHA-256：6f98b648853c9e98c1e12032773fcb03b5db49b34867c5de93a5f52927a848ad）
- https://huggingface.co/api/datasets/OS-Copilot/OSReward（获取于 2026-11-09T21:09:36Z；SHA-256：6f98b648853c9e98c1e12032773fcb03b5db49b34867c5de93a5f52927a848ad）

---

## OSWorld 2.0 trajectories

XLang 受限发布的 OSWorld 2.0 智能体运行数据：21 个按模型和运行设置命名的 ZIP 结果归档，以及七次模型运行的逐任务轨迹 JSONL、逐步截图、结果和日志。

- 目录页面：https://awesomecua.com/zh/resources/url-3b4e6c30e1d095c22771/
- 原始来源：https://huggingface.co/datasets/xlangai/osworld2.0-trajectory
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务
- 证据核查日期：2026-10-18T12:07:35Z
- ID：url:3b4e6c30e1d095c22771

### 范围记录

The repository is gated with automatic approval; its card could not be read without accepting the gate, and the Hub API carries no card metadata or license. The OSWorld-V2 README links it as the benchmark's trajectory download beside a hosted trajectory viewer. Some archive names carry the v2.1 label, a release the README dates after the paper, and step budgets of 150, 300 or 500; the runs include evaluations beyond the paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/record.json

### 结构化规格

- 格式：ZIP archives, PNG, JSONL, JSON, text logs
- 模态：screenshots, trajectory logs, result files, API usage records
- 数据划分：未记录
- 监督信号：agent run trajectories, evaluation results

#### 数量记录

- 21 个 ZIP 结果归档 — repository root at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0）
- 7 个模型运行文件夹 — website_demo folder at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo）
- 108 个任务文件夹 — website_demo/MiniMax-M3/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks）
- 108 个任务文件夹 — website_demo/claude-opus-4-7/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks）
- 108 个任务文件夹 — website_demo/claude-sonnet-4-6-max/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks）
- 108 个任务文件夹 — website_demo/claude-sonnet-4-6-medium/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks）
- 108 个任务文件夹 — website_demo/gpt-5.5/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks）
- 107 个任务文件夹 — website_demo/gpt-5.6/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks）
- 108 个任务文件夹 — website_demo/qwen3.7/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks）

Counts come from the Hub tree listings at the pinned revision. A task folder is one model's run of one task; folders across models overlap by task, with 107 folders for gpt-5.6 and 108 for the others. The inspected folder website_demo/MiniMax-M3/tasks/001 holds traj.jsonl, 501 PNG step screenshots, result and per-step-budget result files, eval and runtime logs, checkpoint results and API usage. ZIP archive contents and their trajectory counts are unknown.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：No data-license declaration is readable: the card is behind the access gate and the Hub API has no card metadata.
  来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory

### 一手证据

- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory（获取于 2026-10-18T12:07:35Z；SHA-256：691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md（获取于 2026-10-18T12:07:36Z；SHA-256：0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0（获取于 2026-10-18T12:07:36Z；SHA-256：ea47577538434f9f4095efec3ab5df156cdb90132c4b226c64c53ba861a34fbe）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo（获取于 2026-10-18T12:07:37Z；SHA-256：9049b14cdecc2be6a23eae60362769f2eea4284454f3d35a0a0e6d20a86a2bf0）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：e66da738b64af2d79bbae9f75befa2423c6e2bdb00941c7f12afb58d9413c083）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：4e51c4903cc95fb305a39e4f6eb5d496aa5c67f47c499f6185d922fac6cd4bc3）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：24e4bd257eb6a7a0b015227b726057f587fd617d26878d88208d1871877169be）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：7892c77e47a846b79191df5dd94b44671c96343d34ca0dc13685300b36592253）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：842dee0c38022622e0b6f226fc78fb83ff18e28ee7debe21c81717ea0cb50388）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks（获取于 2026-10-18T12:07:38Z；SHA-256：adf4626b61ff2cdffe049d18ac335b9abb31b5d80c52a7053e3f4a26ca4248a6）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks（获取于 2026-10-18T12:07:38Z；SHA-256：1ce80893f5c161008d75aba19ddc25db10b169c9b5047a9530668bf5b72768e7）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks/001（获取于 2026-10-18T12:07:38Z；SHA-256：2381fce2e44ea97602a22d0dac4f6a2879860e04800bfd3f0552eb3e6ace38d5）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory（获取于 2026-10-18T12:07:35Z；SHA-256：691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea）

---

## OSWorld-Science task data

OSWorld-Science 在 Hub 上受访问控制的发布版，提供科学软件操作智能体所需的任务定义、预置输入、评分参考资料和预备好的 Ubuntu 虚拟机镜像。

- 目录页面：https://awesomecua.com/zh/resources/url-263e82b29d4fca964463/
- 原始来源：https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、科学工作流
- 证据核查日期：2026-10-18T12:33:40Z
- ID：url:263e82b29d4fca964463

### 范围记录

Access requires manual approval by the publisher; the record rests on the public Hub metadata and file list, the paper and the benchmark README. The paper says the release holds all question sets and images and carries a contamination watermark; the benchmark README says it includes answer keys. The Windows/ANSYS image is not part of the release. Hub metadata declares CC-BY-NC-4.0 for the data; bundled scientific software and third-party inputs keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-263e82b29d4fca964463/record.json

### 结构化规格

- 格式：JSON, QCOW2, Python, CSV
- 模态：task instructions, input files, reference outputs, VM disk images
- 数据划分：未记录
- 监督信号：expert-defined task definitions, grader reference files

#### 数量记录

- 153 个任务定义 JSON 文件 — <domain>/tasks/ at Hub revision 9b8de9ad (chem 44, biomed 34, physics 31, stat 20, eeg 10, econ 6, geoscience 6, linguistics 2)（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 115 个已翻译的任务文件 — ablation/ at Hub revision 9b8de9ad (23 each in es, fr, ja, th, zh)（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 11 个 QCOW2 VM 镜像 — files at Hub revision 9b8de9ad（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 2,759 个文件 — Hub repository at revision 9b8de9ad（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）

All counts come from a script over the pinned Hub file list; no file was downloaded. The paper and README report 146 tasks in seven domains, while the listing has 153 task files in eight domain folders, including six econ tasks; a task file is a definition, while an agent run is a different unit. Task files, translated variants, images and files are different units and are counted separately.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681（获取于 2026-10-18T12:33:40Z；SHA-256：68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md（获取于 2026-10-18T12:32:26Z；SHA-256：5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057）
- https://arxiv.org/html/2609.39903v1（获取于 2026-10-18T12:32:28Z；SHA-256：b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178）
- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681（获取于 2026-10-18T12:33:40Z；SHA-256：68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e）

---

## OSWorld-V2 0624 Codex attempt trajectories

自报的 OSWorld-V2 运行数据，涵盖 Codex 框架使用 gpt-5.6-sol 在全部 108 项任务上的逐步 CLI 和 GUI 操作、截图及评分，以及重试记录和指导操作的解题卡与恢复卡。

- 目录页面：https://awesomecua.com/zh/resources/url-9112dfcb201f2de7241f/
- 原始来源：https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T15:49:15Z
- ID：url:9112dfcb201f2de7241f

### 范围记录

The card calls this a self-reported trajectory package; it links no paper or harness code, and the run was not listed in the official OSWorld-V2 leaderboard data when checked on 2026-10-18. run_manifest.json records benchmark release osworld-v2-2026.06.24, a Docker provider with a QEMU backend at 1920x1080, a 400-step limit, a screenshot at every step with accessibility tree and OCR on demand, and a multi-attempt policy with one reported result per task. Per task_results.csv, 83 reported results come from initial attempts, 22 from recovery attempts and 3 from retries; the preview table names a different selected attempt for 6 tasks, and the manifest and summary.json give different recovery limits (2 and 3). Each attempt has a card written as instructions to the agent: the solution card opened for task 001 lists the exact schedule entries to enter, the events to delete and the final checks, and the recovery card opened for task 002 plans a guided retry from its parent attempt. summary.json reports a mean score of 0.661 and 43 binary passes over 108 tasks (the preview table marks 44 because task 015 scores 0.9999999999999999); these are publisher measurements from guided, multi-attempt runs. Linux is established from the Ubuntu Calendar target and /home/user shell commands in task 001. The card declares no license.

- 完整记录 JSON：https://awesomecua.com/resources/url-9112dfcb201f2de7241f/record.json

### 结构化规格

- 格式：JSONL, JSON, PNG, CSV, Parquet
- 模态：screenshots, action trajectories, task guidance cards, scores
- 数据划分：未记录
- 监督信号：agent-generated trajectories, evaluator task scores

#### 数量记录

- 108 个任务 — OSWorld-V2 v2026.06.24 tasks 001-108 in this run（来源报告；来源：https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json）
- 108 个含 traj.jsonl 的已报告任务文件夹 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）
- 154 个保留的先前尝试文件夹 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）
- 132 张解决方案卡片 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）
- 51 张恢复卡片 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）
- 12,868 张位于已报告任务文件夹中的 PNG 截图 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）
- 16,400 张位于先前尝试文件夹中的 PNG 截图 — Hub manifest at revision 523e49b9（计算得出）（来源：https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2）

Counts come from a script over the pinned Hub file list; tasks, folders, cards and screenshots are different units and are counted separately. The manifest's own card totals (132 solution, 51 recovery) match the file list. The preview Parquet and CSV tables are derived indexes of the same trajectories. Scores come from the benchmark evaluator as reported by the publisher; no trajectory was replayed.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the card metadata nor the file list at this revision declares a license, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  来源：https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md

### 一手证据

- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md（获取于 2026-10-18T15:49:15Z；SHA-256：73f86ad3b7fac604225cb982469db22ac68d863cbe0a636e3bee40fd0e7a5bdb）
- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2（获取于 2026-10-18T15:49:14Z；SHA-256：1f1a6cabddd3e68b93b61bb78648788d88df4ca829ebc0d3cc4542049e906857）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json（获取于 2026-10-18T15:49:14Z；SHA-256：5bb8864f430494a989c86a8717ec1e210e63d16d58a3593990c4986a949a5f20）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/summary.json（获取于 2026-10-18T15:49:14Z；SHA-256：1dab011e8a4f1ed1ca5d0da13252f0ac8fd894d07fe6e286bae041bdb059507d）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/task_results.csv（获取于 2026-10-18T15:49:14Z；SHA-256：dfc978893fc67eeeea8ed1677edde5f6425829f4c3439d8c7b8812ed3384279d）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/preview/task_summary.csv（获取于 2026-10-18T15:49:14Z；SHA-256：dc8267b5a34741f2386d363a8f1ab465db026925c2f52239b5290872d0b572ac）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/001/attempt_001/solution_card.json（获取于 2026-10-18T15:49:14Z；SHA-256：131afcc6939d517594c70890e250d3e8202d4c9c7662e865921eff120e605c00）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/002/attempt_002/recovery_card.json（获取于 2026-10-18T15:49:14Z；SHA-256：7ee876e0e0322f815cc2d8ee171cf721c0680c9396d6cabf32ef4aae32457ff4）
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/tasks/001/traj.jsonl（获取于 2026-10-18T15:49:14Z；SHA-256：6450de28c3909d27bbb25099589b4c5bfc65daa42be9d21a31b4ad25e3b47f1b）

---

## P-GUI-Evo

这是一个包含 622 个图形界面场景的合成数据集，用于评估智能体如何提取隐私规则、判断拟执行的操作并响应用户反馈。

- 目录页面：https://awesomecua.com/zh/resources/url-b79ca6f7731ebf067709/
- 原始来源：https://huggingface.co/datasets/Keonq/P-GUI-Evo
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：安全与防护、评测、界面理解、数据生成
- 证据核查日期：2026-11-09T19:56:40Z
- ID：url:b79ca6f7731ebf067709

### 范围记录

The release describes D1, D2 and D3 evaluation buckets with JSONL manifests and screenshot images. The card declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b79ca6f7731ebf067709/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/Keonq/P-GUI-Evo
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Keonq/P-GUI-Evo（获取于 2026-11-09T19:56:40Z；SHA-256：660eb1b5d563fdf5f75e5f9b0089e5c8c82ec3deddcb6fb3ee4b3144621bfc31）
- https://huggingface.co/api/datasets/Keonq/P-GUI-Evo（获取于 2026-11-09T19:56:40Z；SHA-256：660eb1b5d563fdf5f75e5f9b0089e5c8c82ec3deddcb6fb3ee4b3144621bfc31）

---

## pae-data

pae-data 发布与 PAE 互联网智能体研究相关的数据，包括 WebArena 和 WebVoyager 的任务文件及模型检查点文件。

- 目录页面：https://awesomecua.com/zh/resources/url-72301bf2dec104205c8d/
- 原始来源：https://huggingface.co/datasets/yifeizhou/pae-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成、评测
- 证据核查日期：2026-11-09T19:57:11Z
- ID：url:72301bf2dec104205c8d

### 范围记录

The repository file list includes JSONL task sets, an example archive, and checkpoint files. The rendered page lists a CC BY 4.0 license and requires accepting access conditions.

- 完整记录 JSON：https://awesomecua.com/resources/url-72301bf2dec104205c8d/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/yifeizhou/pae-data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/yifeizhou/pae-data（获取于 2026-11-09T19:57:11Z；SHA-256：9a6673f9c8b9eeca2b641e402ac60e3adf9b8881fcd8d47805afb18bed3b92d0）
- https://huggingface.co/api/datasets/yifeizhou/pae-data（获取于 2026-11-09T19:57:11Z；SHA-256：9a6673f9c8b9eeca2b641e402ac60e3adf9b8881fcd8d47805afb18bed3b92d0）

---

## PC-Agent-E training data

已发布的 PC-Agent-E 训练数据集，官方流程将其用于改进人工轨迹和合成操作推理。

- 目录页面：https://awesomecua.com/zh/resources/url-14449fe321e0a1ca34ea/
- 原始来源：https://huggingface.co/datasets/henryhe0123/PC-Agent-E
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、Linux
- 主题：数据生成、模仿学习
- 证据核查日期：2026-10-18T04:27:13Z
- ID：url:14449fe321e0a1ca34ea

### 范围记录

Hub release contains data.zip. Training-purpose and platform descriptions come from the official pipeline README; the brief card establishes the paper association and MIT data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-14449fe321e0a1ca34ea/record.json

### 结构化规格

- 格式：ZIP package
- 模态：GUI screenshots, action trajectories, generated reasoning
- 数据划分：training
- 监督信号：human demonstration refinement, generated action reasoning, trajectory augmentation

#### 数量记录

未记录数量。

Public manifest exposes data.zip; the internal file schema and number of examples remain unverified. Supervision describes the publisher’s refinement/thought-completion/trajectory-boost pipeline.

### 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md

### 一手证据

- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md（获取于 2026-10-18T04:27:13Z；SHA-256：3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d）
- https://huggingface.co/api/datasets/henryhe0123/PC-Agent-E（获取于 2026-10-18T04:33:21Z；SHA-256：66f70ee2704cdf2e8847cfe04be05d9e14b3a3c1bee953e744f8209d6c9c2b85）
- https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：4dfd1f3ec40f7ff3c94896955216cb60a25114b320caff29e909d296d375d6ef）

---

## Plan-and-Act training data

面向 WebArena-Lite 和 WebVoyager 的规划器与操作执行器训练样例，包含按模型处理的文件和原始轨迹标注。

- 目录页面：https://awesomecua.com/zh/resources/url-ba6453cfdae0eb049ced/
- 原始来源：https://huggingface.co/datasets/xTRam1/plan-and-act-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航、数据生成
- 证据核查日期：2026-10-17T02:02:29Z
- ID：url:ba6453cfdae0eb049ced

### 范围记录

The public manifest exposes JSON/JSONL data for planner and actor roles, including train and validation variants. The card declares MIT. Its loading examples use a different Hub repository identifier and omit the data/ prefix for one file; the inspected xTRam1 manifest records the file layout.

- 完整记录 JSON：https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/record.json

### 结构化规格

- 格式：JSON, JSONL
- 模态：text, plans, actions
- 数据划分：train (QwQ-32B files), validation (QwQ-32B files)
- 监督信号：high-level plans, action execution

#### 数量记录

未记录数量。

The release contains planner and actor files for two web environments. No sample count is inferred from the package-file manifest. Card loading examples have repository/path inconsistencies.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md（获取于 2026-10-17T02:02:29Z；SHA-256：2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448）
- https://huggingface.co/api/datasets/xTRam1/plan-and-act-data（获取于 2026-10-17T02:02:28Z；SHA-256：a98f98b7d4ceb81b00f217983ff271257f2f1e7d2c1a09836b872b2350d79ae9）
- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md（获取于 2026-10-17T02:02:29Z；SHA-256：2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448）

---

## Preflight Bench

这是一个用于评估动态网页点击前检查的数据集，包含成对的截图、点击结果和检查器答案，并提供 Lance 数据表及开发集和测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-a40fc87ac700add33232/
- 原始来源：https://huggingface.co/datasets/multimodal-ai-engineering/preflight-bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、状态追踪、数据生成
- 证据核查日期：2026-11-09T19:57:47Z
- ID：url:a40fc87ac700add33232

### 范围记录

The card lists click_pairs, outcome_pairs and checker_answers tables. It states that the data uses six synthetic web pages and includes labels for both splits. The card declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-a40fc87ac700add33232/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/multimodal-ai-engineering/preflight-bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/multimodal-ai-engineering/preflight-bench（获取于 2026-11-09T19:57:47Z；SHA-256：f7182f98fbd70b45239f75146b3e5582a957669410575d228cf89de6720411e6）
- https://huggingface.co/api/datasets/multimodal-ai-engineering/preflight-bench（获取于 2026-11-09T19:57:47Z；SHA-256：f7182f98fbd70b45239f75146b3e5582a957669410575d228cf89de6720411e6）

---

## PrivScreen

PrivScreen 是用于研究移动智能体屏幕截图隐私保护的数据集；其仓库包含图像和问答文件。

- 目录页面：https://awesomecua.com/zh/resources/url-a0f2b96269c91c5c815c/
- 原始来源：https://huggingface.co/datasets/fyzzzzzz/PrivScreen
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：安全与防护、数据生成
- 证据核查日期：2026-11-09T21:08:34Z
- ID：url:a0f2b96269c91c5c815c

### 范围记录

The listed files include website screenshot images and normal and privacy question-answer JSON files. The card says the data is synthetic, anonymized, or legally sourced and intended for research and safety development.

- 完整记录 JSON：https://awesomecua.com/resources/url-a0f2b96269c91c5c815c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/fyzzzzzz/PrivScreen（获取于 2026-11-09T21:08:34Z；SHA-256：e63543a82296eaf5a2ad16075a301ceee2432b9fc07958fdb46456a14850233c）
- https://huggingface.co/api/datasets/fyzzzzzz/PrivScreen（获取于 2026-11-09T21:08:34Z；SHA-256：e63543a82296eaf5a2ad16075a301ceee2432b9fc07958fdb46456a14850233c）

---

## PSAI computer-use dataset

收录 3,167 项浏览器和桌面任务的人类操作记录，每项含屏幕视频、输入事件和推理步骤，部分任务另有截图或 DOM 快照。

- 目录页面：https://awesomecua.com/zh/resources/url-10a75e1b7b975b3617ae/
- 原始来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Windows、macOS
- 主题：数据生成、录制、视频
- 证据核查日期：2026-10-18T12:12:10Z
- ID：url:10a75e1b7b975b3617ae

### 范围记录

Released by Paradigm Shift AI. The card reports 2,220 browser and 947 computer tasks over 294 websites and 173 applications, labels most tasks cross-platform with a few Windows or macOS tasks, and says human vendors performed the tasks under signed release agreements but that recordings may contain personal information. Hub API at revision 0e1b7c63: not gated, 16 parquet shards, 3,167 MP4 videos and 1,766 DOM-snapshot zips; there is no LICENSE file in the repository. The card metadata declares MIT for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/record.json

### 结构化规格

- 格式：Parquet, MP4, zip archives, JSON strings
- 模态：screen videos, screenshots, DOM snapshots, keyboard and mouse events, task metadata
- 数据划分：train
- 监督信号：human computer-use demonstrations, reasoning steps

#### 数量记录

- 3,167 个任务 — unique completed tasks in the train split（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 3,267 行 — train split rows, including 100 duplicate rows（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 14,740 张截图 — images embedded in the parquet files, covering 1,349 tasks（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 3,167 个视频文件 — videos/*.mp4 at revision 0e1b7c63（计算得出）（来源：https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4）
- 1,766 个 DOM 快照归档 — dom_snaps/*.zip at revision 0e1b7c63（计算得出）（来源：https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4）

Rows carry task name, category (browser or computer task), sub-categories, application or website, difficulty, OS label, login requirement, completion time, screenshots, video and DOM file paths, event JSON, reasoning steps and system metadata. Tasks share template IDs across vendors. Deduplicate on unique_data_id.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md（获取于 2026-10-18T12:12:10Z；SHA-256：599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e）
- https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4（获取于 2026-10-18T12:12:10Z；SHA-256：4b2708de50c2368246883bc0d62919cef0c6843c2172c5ec708d168a0670eaf7）
- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md（获取于 2026-10-18T12:12:10Z；SHA-256：599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e）

---

## Regimes/androidcontrol-cl

AndroidControl-CL 提供 Android 图形界面的截图轨迹及结构化训练和评估数据，用于持续式界面学习。

- 目录页面：https://awesomecua.com/zh/resources/url-461e9b8305356347077e/
- 原始来源：https://huggingface.co/datasets/Regimes/androidcontrol-cl
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、数据生成、模仿学习
- 证据核查日期：2026-11-09T21:08:54Z
- ID：url:461e9b8305356347077e

### 范围记录

The card lists screenshot trajectories, JSONL files, Parquet files, and train and test splits organized by task category.

- 完整记录 JSON：https://awesomecua.com/resources/url-461e9b8305356347077e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Regimes/androidcontrol-cl（获取于 2026-11-09T21:08:54Z；SHA-256：77b1e1ec0ae8579e928caa9ea305f82e2b71000bdab10805665b13d1afd49981）
- https://huggingface.co/api/datasets/Regimes/androidcontrol-cl（获取于 2026-11-09T21:08:54Z；SHA-256：77b1e1ec0ae8579e928caa9ea305f82e2b71000bdab10805665b13d1afd49981）

---

## Screen Annotation

Google Research 发布的 ScreenAI Screen Annotation 数据；训练、验证和测试 CSV 按类型、边界框坐标、屏幕文字和图像说明描述 Rico 移动端界面元素。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-screen-annotation/
- 原始来源：https://github.com/google-research-datasets/screen_annotation
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-18T12:32:42Z
- ID：github:google-research-datasets/screen_annotation

### 范围记录

Each CSV row pairs a Rico screen ID with one text serialization of the screen's UI elements, nested by containment; screenshots come from Rico, which the Rico paper describes as Android apps. The README says the labels were produced automatically and then verified and corrected by human raters, and that the splits follow Screen2Words. Its per-split figures (15,743, 2,364 and 4,310 screenshots) are larger than the rows in the CSVs at commit 053a4a1c: 15,548 train, 2,311 valid and 4,217 test. The README names the columns image_id and label, while the files use screen_id and screen_annotation. CC BY 4.0 is the README's dataset declaration; the repository has no LICENSE file, and Rico screenshots keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/record.json

### 结构化规格

- 格式：CSV
- 模态：text annotations, bounding-box coordinates, Rico screen IDs
- 数据划分：train, valid, test
- 监督信号：screen annotation: UI element type, location, text and image description

#### 数量记录

- 15,743 张截图 — train split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 2,364 张截图 — validation split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 4,310 张截图 — test split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 2,311 个已标注界面（CSV 行） — valid.csv at commit 053a4a1c（计算得出）（来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv）
- 4,217 个已标注界面（CSV 行） — test.csv at commit 053a4a1c（计算得出）（来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv）

The README's split sizes count screenshots; the CSV row counts count annotated screens, one row per screen ID. train.csv holds 15,548 rows at the same commit. Labels were machine-generated and then verified and corrected by human raters, according to the README.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The README states that the dataset is licensed under CC BY 4.0; Rico screenshots keep their own terms.
  来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md（获取于 2026-10-18T12:32:42Z；SHA-256：db749dd869ced469a63b403173d9a69593778afc4afb43aacde4f2149d0485f9）
- https://api.github.com/repos/google-research-datasets/screen_annotation/git/trees/053a4a1c4737969def99fd36084d7adf3715798f?recursive=1（获取于 2026-10-18T12:32:43Z；SHA-256：ca12adf80ac7aa1efa98dab82d3a533fb40b49eeb8510f28df696788efa5236a）
- https://danafergan.com/publications/deka2017rico.pdf（获取于 2026-10-18T12:33:11Z；SHA-256：a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84）
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv（获取于 2026-10-18T12:32:44Z；SHA-256：a1f5928168d2dc71e70f41f8dcd7cc8f855d76bde709ddfd4b58e4660aa18457）
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv（获取于 2026-10-18T12:32:44Z；SHA-256：db247ac02ce875c49c3429ae0bdfef0039cacc663598c61b7541f24342537f98）

---

## Screen2AX-Element

该数据集包含 macOS 应用截图，以及界面元素的边界框和类别标签，用于训练和评估界面元素检测模型。

- 目录页面：https://awesomecua.com/zh/resources/url-e96299566d12e790422e/
- 原始来源：https://huggingface.co/datasets/MacPaw/Screen2AX-Element
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-11-09T19:58:09Z
- ID：url:e96299566d12e790422e

### 范围记录

The card lists train, valid, and test splits and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e96299566d12e790422e/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Element
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element（获取于 2026-11-09T19:58:09Z；SHA-256：eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element（获取于 2026-11-09T19:58:09Z；SHA-256：eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element（获取于 2026-11-09T20:03:13Z；SHA-256：eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd）
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Element（获取于 2026-11-09T20:03:13Z；SHA-256：eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd）

---

## Screen2AX-Group

一个包含 macOS 应用截图、边界框和界面组标签的数据集，用于训练和评估界面目标检测模型。

- 目录页面：https://awesomecua.com/zh/resources/url-6680e812b94c168e6bed/
- 原始来源：https://huggingface.co/datasets/MacPaw/Screen2AX-Group
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、macOS
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-11-09T19:56:42Z
- ID：url:6680e812b94c168e6bed

### 范围记录

The release provides train, valid and test splits in Parquet files. Each sample has an image and objects with bounding boxes and category labels. The card declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-6680e812b94c168e6bed/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Group
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group（获取于 2026-11-09T19:56:42Z；SHA-256：5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group（获取于 2026-11-09T19:56:42Z；SHA-256：5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group（获取于 2026-11-09T20:02:43Z；SHA-256：5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5）
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Group（获取于 2026-11-09T20:02:43Z；SHA-256：5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5）

---

## Screen2AX-Task

这是一个 macOS 界面定位数据集，将应用截图和操作指令与目标边界框及视觉描述配对。

- 目录页面：https://awesomecua.com/zh/resources/url-97d846b5b33235f566a1/
- 原始来源：https://huggingface.co/datasets/MacPaw/Screen2AX-Task
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T21:09:04Z
- ID：url:97d846b5b33235f566a1

### 范围记录

The card lists image, bounding-box coordinates, image dimensions, command and visual-description fields. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-97d846b5b33235f566a1/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Task
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task（获取于 2026-11-09T21:09:04Z；SHA-256：cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task（获取于 2026-11-09T21:09:04Z；SHA-256：cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task（获取于 2026-11-09T21:12:48Z；SHA-256：cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde）
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Task（获取于 2026-11-09T21:12:48Z；SHA-256：cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde）

---

## Screen2AX-Tree

该数据集将 macOS 应用截图与序列化的无障碍树配对，用于训练模型从视觉输入重建界面层级结构。

- 目录页面：https://awesomecua.com/zh/resources/url-3821c0d8516819a50d28/
- 原始来源：https://huggingface.co/datasets/MacPaw/Screen2AX-Tree
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：界面理解、数据生成
- 证据核查日期：2026-11-09T21:09:02Z
- ID：url:3821c0d8516819a50d28

### 范围记录

The card lists image and accessibility fields and a train split. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3821c0d8516819a50d28/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Tree
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree（获取于 2026-11-09T21:09:02Z；SHA-256：cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree（获取于 2026-11-09T21:09:02Z；SHA-256：cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b）
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree（获取于 2026-11-09T21:12:47Z；SHA-256：cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b）
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Tree（获取于 2026-11-09T21:12:48Z；SHA-256：cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b）

---

## Screen2Words

用于基于语言的屏幕理解的移动端屏幕描述数据。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-screen2words/
- 原始来源：https://github.com/google-research-datasets/screen2words
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:google-research-datasets/screen2words

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-screen2words/record.json

### 结构化规格

- 格式：CSV
- 模态：text summaries, RICO screen references
- 数据划分：train, dev, test
- 监督信号：screen summarization

#### 数量记录

- 112,085 条摘要 — screen2words release（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md）
- 22,417 个界面 — RICO screens referenced by screen2words（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md）

Multiple summaries describe one screen. The repository provides annotations and split files; use the referenced RICO assets for screenshots.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：8be66dc5a3907e0e84993a66679416d928ed1a32aae70db8bb0e0f771c7a8715）

---

## ScreenRef Annotations

ScreenRef 的标注文件、任务配置和图像清单；截图存放在单独的受限访问图像仓库中。

- 目录页面：https://awesomecua.com/zh/resources/url-c1db2ba79e6d6a3db2b9/
- 原始来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Android、Linux
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:c1db2ba79e6d6a3db2b9

### 范围记录

The card declares restricted academic research use and no redistribution. Annotation coordinates use a normalized 1000 by 1000 space. Some source instructions name gestures other than the single-click target; the publisher recommends treating those as location supervision.

- 完整记录 JSON：https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/record.json

### 结构化规格

- 格式：JSONL, JSON task recipes, TSV manifests
- 模态：text, coordinates, image references
- 数据划分：full/train, point/train
- 监督信号：instruction-to-click grounding, bounding boxes, absent-target abstention

#### 数量记录

- 633,369 行标注数据 — full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 610,894 行标注数据 — point recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）

The recipes reuse source images and represent related views of the same dataset. This download contains no screenshots. Counts are publisher-reported; rows named for trajectories are independent decision examples.

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）

---

## SE-GUI-3k

SE-GUI 的种子训练数据。SE-GUI 是通过自进化强化微调训练的 GUI 定位模型；每行数据将一段工具调用对话、一张截图与目标边界框配对。

- 目录页面：https://awesomecua.com/zh/resources/url-380318a8de65fe45956c/
- 原始来源：https://huggingface.co/datasets/XinBB/SE-GUI-3k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-11-10T03:01:05Z
- ID：url:380318a8de65fe45956c

### 范围记录

One SE-GUI-3k.json file of about 1.38 GB; the Hub viewer shows a single train split of 772 rows with six-value bbox fields. The SE-GUI README describes a 3,018-sample curated seed set used to train 3B and 7B Qwen2.5-VL grounding models; the repository has no card or license.

- 完整记录 JSON：https://awesomecua.com/resources/url-380318a8de65fe45956c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/XinBB/SE-GUI-3k（获取于 2026-11-10T03:01:05Z；SHA-256：dba30cb278f98b0bddff5c49747894c90fc832cebd52f50e73ca2ed79b91bd4a）
- https://huggingface.co/api/datasets/XinBB/SE-GUI-3k（获取于 2026-11-10T03:01:05Z；SHA-256：dba30cb278f98b0bddff5c49747894c90fc832cebd52f50e73ca2ed79b91bd4a）

---

## sharryXR/asil-training-data

ASIL 智能体训练数据包含重放的动作轨迹、引导式监督数据，以及由评估器支持的强化学习课程，并以 JSONL 和 Parquet 分片提供。

- 目录页面：https://awesomecua.com/zh/resources/url-e9423bcf01a8d6b078bc/
- 原始来源：https://huggingface.co/datasets/sharryXR/asil-training-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、模仿学习、强化学习
- 证据核查日期：2026-11-09T21:09:15Z
- ID：url:e9423bcf01a8d6b078bc

### 范围记录

The card lists train and validation splits for supervised and reinforcement-learning data, plus a manifest and checksums. It declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e9423bcf01a8d6b078bc/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/sharryXR/asil-training-data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/sharryXR/asil-training-data（获取于 2026-11-09T21:09:15Z；SHA-256：e64fb2f16482fca87ba948c98ba607a74d9111f51a44aab621791f9ba66a3028）
- https://huggingface.co/api/datasets/sharryXR/asil-training-data（获取于 2026-11-09T21:09:15Z；SHA-256：e64fb2f16482fca87ba948c98ba607a74d9111f51a44aab621791f9ba66a3028）

---

## ShowUI-web

网页界面定位样本，包含指令、元素边界框和点，并配有单独打包的截图归档。

- 目录页面：https://awesomecua.com/zh/resources/url-8933977bb0a57940ed23/
- 原始来源：https://huggingface.co/datasets/showlab/ShowUI-web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:8933977bb0a57940ed23

### 范围记录

Public Parquet annotations, metadata JSON and images.tar.gz are present. The card refers to image.tar.gz in its extraction command, while the actual archive is plural. No data-license declaration is present; the ShowUI code or model licenses are not inherited.

- 完整记录 JSON：https://awesomecua.com/resources/url-8933977bb0a57940ed23/record.json

### 结构化规格

- 格式：Parquet, JSON, TAR.GZ
- 模态：screenshots, text, bounding boxes, points
- 数据划分：train
- 监督信号：element grounding

#### 数量记录

- 21,988 行 — train split（来源报告；来源：https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md）

Row count is the card dataset_info value; one row may contain multiple instructions. The card summarizes screenshots as approximately 22K. No data license is declared.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：08586aa1ded1f1a1f984fb55697fdb1007d86c7fdf4988a2dc1fcf3fdfd49a47）
- https://huggingface.co/api/datasets/showlab/ShowUI-web（获取于 2026-10-17T02:42:32Z；SHA-256：12412480f1a3957069d9dcdc53abce4ad3e34be7dac7ca6fe1726d04764cadfd）

---

## ShowUI-web-8K

ShowUI-web 的一个 8K 样本子集，包含来自不同网站的截图，用于训练网页界面的 GUI 定位模型。

- 目录页面：https://awesomecua.com/zh/resources/url-2260aaa47fb9c63bb917/
- 原始来源：https://huggingface.co/datasets/zonghanHZH/ShowUI-web-8k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-11-09T19:57:15Z
- ID：url:2260aaa47fb9c63bb917

### 范围记录

The card names ShowUI-web as the source dataset and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-2260aaa47fb9c63bb917/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/zonghanHZH/ShowUI-web-8k
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zonghanHZH/ShowUI-web-8k（获取于 2026-11-09T19:57:15Z；SHA-256：172b24977469772785e35919560aa150f11bbd0c97377cefa2c3a6770e62239d）
- https://huggingface.co/api/datasets/zonghanHZH/ShowUI-web-8k（获取于 2026-11-09T19:57:15Z；SHA-256：172b24977469772785e35919560aa150f11bbd0c97377cefa2c3a6770e62239d）

---

## ShowUI-π training data

用于 ShowUI-π模型的拖拽和点击操作片段数据，涵盖桌面编辑、演示文稿、手写等界面任务。

- 目录页面：https://awesomecua.com/zh/resources/url-3dab53c6c38c9e7217ea/
- 原始来源：https://huggingface.co/datasets/showlab/ShowUI-pi-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、动作预测、模仿学习
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:3dab53c6c38c9e7217ea

### 范围记录

Public Parquet chunks and LeRobot metadata are present. The card names a v3.0 revision in its usage example. No data license is declared. Hub size-category bands describe storage size; episode counts use a different unit.

- 完整记录 JSON：https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/record.json

### 结构化规格

- 格式：Parquet, LeRobot metadata
- 模态：screenshots, instructions, actions
- 数据划分：未记录
- 监督信号：drag trajectories, click episodes

#### 数量记录

未记录数量。

No sample or episode count is inferred from the size tag or package manifest. Main-branch files were inspected.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/showlab/ShowUI-pi-data/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：0e3a2a923865ae24d0de590143e9e32564b0e20db059579582d6181cdcf75bf1）
- https://huggingface.co/api/datasets/showlab/ShowUI-pi-data（获取于 2026-10-17T04:01:33Z；SHA-256：86fadf9a32185f018f6a8e49d52b39ee5c99c177075510361202dc25a214191f）

---

## Static-FineBench

FineState-Bench 的数据，该基准评测细粒度 GUI 状态控制：包含桌面、网页和移动端截图，以及 XML 与 JSON 标注，标注给出定位与交互指令，并分别提供定位框和交互框。

- 目录页面：https://awesomecua.com/zh/resources/url-94adc54bf1cd168da768/
- 原始来源：https://huggingface.co/datasets/wumiaoshou/Static-FineBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、跨平台
- 主题：GUI 定位、评测、状态追踪
- 证据核查日期：2026-11-10T03:00:58Z
- ID：url:94adc54bf1cd168da768

### 范围记录

The repository holds desktop, web and mobile screenshots with Pascal VOC-style XML annotations and per-category JSON annotation folders, with Chinese copies, and has no dataset card. The FineState-Bench GitHub repository holds the desktop, web and mobile evaluation scripts with Loc SR, Int SR, SA-Locate SR and SA-Interact SR metrics and declares the MIT License.

- 完整记录 JSON：https://awesomecua.com/resources/url-94adc54bf1cd168da768/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/wumiaoshou/Static-FineBench（获取于 2026-11-10T03:00:58Z；SHA-256：b1d8c94f6f1618016211ae73cf5dcf2c177bf69e0d43d6090671721ad01b83dc）
- https://huggingface.co/api/datasets/wumiaoshou/Static-FineBench（获取于 2026-11-10T03:00:58Z；SHA-256：b1d8c94f6f1618016211ae73cf5dcf2c177bf69e0d43d6090671721ad01b83dc）

---

## SWEeper-Bench

SWEeper-Bench 提供源自网页应用程序缺陷的任务，用于评估检查运行中应用并修复问题的智能体。每个任务包含提示、代码库版本和浏览器行为测试。

- 目录页面：https://awesomecua.com/zh/resources/url-9d35341e71dfd457fd79/
- 原始来源：https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流
- 证据核查日期：2026-11-09T21:09:37Z
- ID：url:9d35341e71dfd457fd79

### 范围记录

The repository lists test data in JSONL and Parquet formats. The card describes 200 tasks, a separate runner, and a CC BY 4.0 license for this dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-9d35341e71dfd457fd79/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench（获取于 2026-11-09T21:09:37Z；SHA-256：cbbcfed6889c2a8622daa179c754fc7076d6a90d3a0a2538e2806f2ae330b1ff）
- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench（获取于 2026-11-09T21:09:37Z；SHA-256：cbbcfed6889c2a8622daa179c754fc7076d6a90d3a0a2538e2806f2ae330b1ff）

---

## SWEeper-Bench-traces

SWEeper-Bench 论文的全部运行记录，共 5,200 次运行、42 种智能体配置；每次运行含编码智能体的轨迹、shell 命令和补丁，以及浏览器验证器的轨迹与判定。

- 目录页面：https://awesomecua.com/zh/resources/url-54907fd6dc968eaced34/
- 原始来源：https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench-traces
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、可观测性、工具集成
- 证据核查日期：2026-11-10T03:01:04Z
- ID：url:54907fd6dc968eaced34

### 范围记录

runs.csv indexes every run by task, model, harness, prompt, template and verdict; the full set is about 5 GB in 65,000 files. Ablations cover bug-described prompts, a non-browser template, other harnesses and time budgets. Released under CC BY 4.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-54907fd6dc968eaced34/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench-traces
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench-traces（获取于 2026-11-10T03:01:04Z；SHA-256：26dfa3a4bf48206366e877224ee72f9bb8a1310186bbbdaf28748b8f52133c33）
- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench-traces（获取于 2026-11-10T03:01:04Z；SHA-256：26dfa3a4bf48206366e877224ee72f9bb8a1310186bbbdaf28748b8f52133c33）

---

## TimeWarp

包含 231 个网页智能体任务目标的数据集，覆盖六个界面时代的 Wiki、News 和 Shop 网站，并提供训练集、测试集及评估器规范。

- 目录页面：https://awesomecua.com/zh/resources/url-8be414a28d1984abb1b9/
- 原始来源：https://huggingface.co/datasets/sparklabutah/timewarp
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、网页导航
- 证据核查日期：2026-11-09T19:57:15Z
- ID：url:8be414a28d1984abb1b9

### 范围记录

The release lists train.csv with 128 goals, test.csv with 103, and data.json with runnable task specifications. The card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-8be414a28d1984abb1b9/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/sparklabutah/timewarp
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/sparklabutah/timewarp（获取于 2026-11-09T19:57:15Z；SHA-256：19932bff03ae237843b6e8e933eb940912c518c829ea180ae94e3c3e4628cd7d）
- https://huggingface.co/api/datasets/sparklabutah/timewarp（获取于 2026-11-09T19:57:15Z；SHA-256：19932bff03ae237843b6e8e933eb940912c518c829ea180ae94e3c3e4628cd7d）

---

## TimeWarp-GPT5-Traces

TimeWarp 网页基准上的 GPT-5 教师轨迹，按 UI 版本分组，包含每一步的 SoM 标注截图和实验日志，用于通过 LlamaFactory 微调网页智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-fa8fd2873571ab1b3556/
- 原始来源：https://huggingface.co/datasets/sparklabutah/TimeWarp-GPT5-Traces
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、鲁棒性
- 证据核查日期：2026-11-10T03:01:15Z
- ID：url:fa8fd2873571ab1b3556

### 范围记录

Folders version_1 to version_6 hold GenericAgentWithTraining runs of gpt-5-2025-08-07 on timewarp tasks, each with SoM screenshots, pickled experiment arguments and goal objects, logs and package versions. The TimeWarp repository's convert2sgptArgs.py converts them to ShareGPT format. License: MIT.

- 完整记录 JSON：https://awesomecua.com/resources/url-fa8fd2873571ab1b3556/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/sparklabutah/TimeWarp-GPT5-Traces
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/sparklabutah/TimeWarp-GPT5-Traces（获取于 2026-11-10T03:01:15Z；SHA-256：eae468a563d694f77c32bb9759c7b46184c450416451dc9db95ee9d60479d41a）
- https://huggingface.co/api/datasets/sparklabutah/TimeWarp-GPT5-Traces（获取于 2026-11-10T03:01:15Z；SHA-256：eae468a563d694f77c32bb9759c7b46184c450416451dc9db95ee9d60479d41a）

---

## TreeCUA-Datasets

TreeCUA-Datasets 发布图形界面探索树，包含配置文件、操作序列、目标和验证结果。用户可在 OSWorld 中重放探索树，以重建屏幕观察。

- 目录页面：https://awesomecua.com/zh/resources/url-2e8bba756c71f9fe3fbd/
- 原始来源：https://huggingface.co/datasets/jdy18/TreeCUA-Datasets
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：数据生成、评测、工作流、界面理解
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:2e8bba756c71f9fe3fbd

### 范围记录

The release contains tree configurations, JSONL action nodes, and task initialization assets. The card specifies a 1024x768 desktop resolution for replay and declares a CC-BY-4.0 dataset license.

- 完整记录 JSON：https://awesomecua.com/resources/url-2e8bba756c71f9fe3fbd/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/jdy18/TreeCUA-Datasets
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/jdy18/TreeCUA-Datasets（获取于 2026-11-09T05:04:58Z；SHA-256：473264e06d71f68f257563edab08d0e733ac0e8f0940eb493d15a20395a717de）
- https://huggingface.co/api/datasets/jdy18/TreeCUA-Datasets（获取于 2026-11-09T05:04:58Z；SHA-256：473264e06d71f68f257563edab08d0e733ac0e8f0940eb493d15a20395a717de）

---

## UGround-single

一个包含 829 万条训练记录的图形界面定位数据集，将图像引用和元素请求与边界框坐标及点击操作配对。

- 目录页面：https://awesomecua.com/zh/resources/url-9bb57ce3dde2c8289ac1/
- 原始来源：https://huggingface.co/datasets/smz8599/UGround-single
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-11-09T21:08:46Z
- ID：url:9bb57ce3dde2c8289ac1

### 范围记录

The repository page shows a single train split and previews conversation records. The file list includes a JSON data file.

- 完整记录 JSON：https://awesomecua.com/resources/url-9bb57ce3dde2c8289ac1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/smz8599/UGround-single（获取于 2026-11-09T21:08:46Z；SHA-256：306722a8bf25aea33ce9864dc16dd03b0651c900450e7c504cb901f324c0c395）
- https://huggingface.co/api/datasets/smz8599/UGround-single（获取于 2026-11-09T21:08:46Z；SHA-256：306722a8bf25aea33ce9864dc16dd03b0651c900450e7c504cb901f324c0c395）

---

## UGround-V1-8k

UGround-V1-8k 提供含 8K 个样本的网页界面截图子集，用于在不同分辨率和宽高比下预训练界面元素定位能力。

- 目录页面：https://awesomecua.com/zh/resources/url-8d87e8ae53971aab3f8d/
- 原始来源：https://huggingface.co/datasets/zonghanHZH/UGround-V1-8k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、数据生成、界面理解
- 证据核查日期：2026-11-09T21:08:30Z
- ID：url:8d87e8ae53971aab3f8d

### 范围记录

The card says the samples come from UGround-V1-Data (Web-Hybrid) and cover simulated mobile, tablet, and desktop views. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-8d87e8ae53971aab3f8d/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/zonghanHZH/UGround-V1-8k
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zonghanHZH/UGround-V1-8k（获取于 2026-11-09T21:08:30Z；SHA-256：3c1d4a73bd40394cf3604529aed61005a28ca9a9f29aec10ce9b3c8ef08973b2）
- https://huggingface.co/api/datasets/zonghanHZH/UGround-V1-8k（获取于 2026-11-09T21:08:30Z；SHA-256：3c1d4a73bd40394cf3604529aed61005a28ca9a9f29aec10ce9b3c8ef08973b2）

---

## UI-Genie reward data

用于训练 UI-Genie 轨迹评估模型的移动端 GUI 奖励标注。

- 目录页面：https://awesomecua.com/zh/resources/url-84e5aeeffaf561baa966/
- 原始来源：https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、奖励模型
- 证据核查日期：2026-10-17T04:01:34Z
- ID：url:84e5aeeffaf561baa966

### 范围记录

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is a release name; verified sample count and complete image packaging remain unspecified.

- 完整记录 JSON：https://awesomecua.com/resources/url-84e5aeeffaf561baa966/record.json

### 结构化规格

- 格式：JSONL
- 模态：text
- 数据划分：未记录
- 监督信号：trajectory rewards

#### 数量记录

未记录数量。

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is a release name; verified sample count and complete image packaging remain unspecified.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63）
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-RM-517k（获取于 2026-10-17T04:01:33Z；SHA-256：ab4bf30b6188959f825f2747ca711b0f190dddfe1658319c881ca9c73be9ecc9）
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726）
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63）

---

## UI-Genie trajectory data

随 UI-Genie 智能体训练流程发布的合成移动端 GUI 轨迹监督数据和截图。

- 目录页面：https://awesomecua.com/zh/resources/url-2e1927450da2183a5abe/
- 原始来源：https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-17T04:01:34Z
- ID：url:2e1927450da2183a5abe

### 范围记录

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels.

- 完整记录 JSON：https://awesomecua.com/resources/url-2e1927450da2183a5abe/record.json

### 结构化规格

- 格式：JSONL, PNG
- 模态：screenshots, text, actions
- 数据划分：未记录
- 监督信号：GUI action trajectories

#### 数量记录

未记录数量。

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9）
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k（获取于 2026-10-17T04:01:33Z；SHA-256：548df402288350920a26bff2099544bf21835200ee58ff2c657c331fa6200317）
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726）
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9）
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-5k（获取于 2026-10-17T19:15:09Z；SHA-256：66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e）
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k（获取于 2026-10-17T19:15:10Z；SHA-256：66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e）

---

## UI-R1 3B training data

为原版 UI-R1 3B 模型发布的移动端训练数据子集，包含动作标注和独立的截图文件。

- 目录页面：https://awesomecua.com/zh/resources/url-7c568d88a472f914d316/
- 原始来源：https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、GUI 定位、动作预测
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:7c568d88a472f914d316

### 范围记录

The public manifest includes train.json and a train_imgs directory. The card has no dataset-license declaration, and the model’s MIT metadata is not inherited. The official repository identifies this as v1 training data drawn from AndroidControl and ScreenSpot; later enlarged training mixtures are distinct.

- 完整记录 JSON：https://awesomecua.com/resources/url-7c568d88a472f914d316/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：640cb5908abefb770ea6bb8d12f22e9eca622224fa73e9f5c67a3a95f4f7b8e5）
- https://huggingface.co/api/datasets/LZXzju/UI-R1-3B-Train（获取于 2026-10-17T02:03:33Z；SHA-256：482d1304ad53736b3e410694cfa427067ff8b45267374964e4a8ff3833afbbd3）
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3）

---

## UI-S1 released training examples

UI-S1 移动端训练数据中公开的示例子集，以 JSONL 标注和 Parquet 图像形式打包。

- 目录页面：https://awesomecua.com/zh/resources/url-16184830c0f4bdb146fa/
- 原始来源：https://huggingface.co/datasets/mPLUG/UI_S1_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：强化学习、数据生成、手机操作
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:16184830c0f4bdb146fa

### 范围记录

The release contains train_1000.jsonl and images.parquet. The official README explicitly describes 1,000 released examples and calls the release only part of the training dataset. Apache-2.0 is declared by the dataset card. The release contains part of the training corpus.

- 完整记录 JSON：https://awesomecua.com/resources/url-16184830c0f4bdb146fa/record.json

### 结构化规格

- 格式：JSONL, Parquet
- 模态：images, text, actions
- 数据划分：training example subset
- 监督信号：GUI actions

#### 数量记录

- 1,000 个训练示例 — public example subset（来源报告；来源：https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md）

The count is explicitly reported by the publisher. Full training data remains outside this release.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5）
- https://huggingface.co/api/datasets/mPLUG/UI_S1_dataset（获取于 2026-10-17T04:07:19Z；SHA-256：cdfbcbf23a3b1b4a609e1943e80dcf144ca1224a74ebf2308fde4fcb4326ab3c）
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md（获取于 2026-10-17T04:06:57Z；SHA-256：f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942）
- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5）

---

## UIBert AppSim and RefExp annotations

2 个源自 Rico 的 UI 组件检索数据集：AppSim 配对不同屏幕中语义相似的元素，RefExp 将指代表达关联到目标元素。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-uibert/
- 原始来源：https://github.com/google-research-datasets/uibert
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-10-17T12:30:54Z
- ID：github:google-research-datasets/uibert

### 范围记录

The archived repository retains TFRecord train/dev/test files for AppSim and RefExp. These are annotation and UI-structure records with Rico image identifiers. The README’s 72k figure describes the upstream Rico source. The publisher explicitly assigns CC-BY-4.0 to these datasets.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-uibert/record.json

### 结构化规格

- 格式：TFRecord
- 模态：text, bounding boxes, UI hierarchy metadata, Rico image identifiers
- 数据划分：AppSim train/dev/test, RefExp train/dev/test
- 监督信号：similar UI element retrieval, referring-expression component retrieval

#### 数量记录

未记录数量。

Original UI images are retrieved separately by Rico IDs. No release-specific sample count is established.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The README explicitly says the datasets are licensed under CC BY 4.0; original Rico materials keep their source terms.
  来源：https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md（获取于 2026-10-17T12:30:54Z；SHA-256：45d1ca0f5c727cf58b2671dc5579f0628f4d78e07b977a5d8b018295c6fe1f58）
- https://api.github.com/repos/google-research-datasets/uibert（获取于 2026-10-17T12:30:54Z；SHA-256：24a7838d425bdae363a7d5872702996b22068c1f0e47be274fdfbc4b0e20144f）
- https://api.github.com/repos/google-research-datasets/uibert/git/trees/main?recursive=1（获取于 2026-10-17T12:32:05Z；SHA-256：9a6fc19c6b407309943fe645f4addb3d032f153856976c4f8d7a8cfb6d2ffe6b）
- https://interactionmining.org/rico（获取于 2026-10-17T12:36:55Z；SHA-256：f752ebfb2598b7f848d343f428502b28e0f591f27849ab707f14bee398d4eb8d）

---

## VeriGUI

VeriWeb 数据集包含 302 项网页信息搜集任务，提供子任务标注、人工操作日志和执行视频，用于评估长链任务智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-8477ada5b7de1d399c9d/
- 原始来源：https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、长任务、评测、录制
- 证据核查日期：2026-11-09T05:05:16Z
- ID：url:8477ada5b7de1d399c9d

### 范围记录

The card describes task JSON and video files, including webpage URLs, optional HTML, timestamps, mouse coordinates, and target element information. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-8477ada5b7de1d399c9d/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI（获取于 2026-11-09T05:05:16Z；SHA-256：9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd）
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI（获取于 2026-11-09T05:05:16Z；SHA-256：9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd）
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI（获取于 2026-11-09T05:26:01Z；SHA-256：9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd）
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriWeb（获取于 2026-11-09T05:26:01Z；SHA-256：9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd）

---

## VeriOS-Bench

一套用于训练和评估操作图形界面的操作系统智能体的数据集，重点考察自主操作不可靠时何时向人求助。

- 目录页面：https://awesomecua.com/zh/resources/url-16a5ccde8bb16cda19ff/
- 原始来源：https://huggingface.co/datasets/wuuuuuz/VeriOS-Bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：人机协作、评测、安全与防护
- 证据核查日期：2026-11-09T05:04:57Z
- ID：url:16a5ccde8bb16cda19ff

### 范围记录

The repository lists a VeriOS-Bench.zip file. The card points to evaluation scripts in the linked code repository for the agent and baselines.

- 完整记录 JSON：https://awesomecua.com/resources/url-16a5ccde8bb16cda19ff/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/wuuuuuz/VeriOS-Bench（获取于 2026-11-09T05:04:57Z；SHA-256：a83d5343770ef0bc12a00dab4c1c64dba9349d6db58403173b1f20a1102478a5）
- https://huggingface.co/api/datasets/wuuuuuz/VeriOS-Bench（获取于 2026-11-09T05:04:57Z；SHA-256：a83d5343770ef0bc12a00dab4c1c64dba9349d6db58403173b1f20a1102478a5）

---

## VG-RL-filter-dataset-hf

这是为 GUI-Spotlight 第二阶段训练发布的数据集；数据卡说明作者在该阶段使用了 18.5K 个样本。

- 目录页面：https://awesomecua.com/zh/resources/url-07fb5e963998782505a6/
- 原始来源：https://huggingface.co/datasets/nuoxu1993/VG-RL-filter-dataset-hf
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、GUI 定位
- 证据核查日期：2026-11-09T19:57:04Z
- ID：url:07fb5e963998782505a6

### 范围记录

The repository listing contains Arrow data shards. The card does not describe individual fields or a license.

- 完整记录 JSON：https://awesomecua.com/resources/url-07fb5e963998782505a6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/nuoxu1993/VG-RL-filter-dataset-hf（获取于 2026-11-09T19:57:04Z；SHA-256：ca57c936b2732f3f06f4e95d3f3233c3bedb2389ef8c98648859968a86629cfe）
- https://huggingface.co/api/datasets/nuoxu1993/VG-RL-filter-dataset-hf（获取于 2026-11-09T19:57:04Z；SHA-256：ca57c936b2732f3f06f4e95d3f3233c3bedb2389ef8c98648859968a86629cfe）

---

## Vision_GUI_Assistant

这个图形界面图像对话数据集提供指令和对话 JSON 文件，用于分阶段视觉微调；示例要求模型识别界面按钮。

- 目录页面：https://awesomecua.com/zh/resources/url-b9a56cf9e9346a359c0b/
- 原始来源：https://huggingface.co/datasets/zylate/Vision_GUI_Assistant
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、数据生成
- 证据核查日期：2026-11-09T19:58:08Z
- ID：url:b9a56cf9e9346a359c0b

### 范围记录

The card names instruction and conversation splits and instructs users to obtain the Rico images separately. It describes training with LLaVA and declares a CC BY-NC 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b9a56cf9e9346a359c0b/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/zylate/Vision_GUI_Assistant
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zylate/Vision_GUI_Assistant（获取于 2026-11-09T19:58:08Z；SHA-256：9f366a78ca176c7a5aeec93042546ce247e900b2209da83c4569bb9d05b0b714）
- https://huggingface.co/api/datasets/zylate/Vision_GUI_Assistant（获取于 2026-11-09T19:58:08Z；SHA-256：9f366a78ca176c7a5aeec93042546ce247e900b2209da83c4569bb9d05b0b714）

---

## Wave UI

包含截图、指令、目标框和 UI 元数据的记录；元数据包括 OCR、来源、元素类型和平台。

- 目录页面：https://awesomecua.com/zh/resources/url-0dbb55f127da04d95222/
- 原始来源：https://huggingface.co/datasets/agentsea/wave-ui
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:0dbb55f127da04d95222

### 范围记录

Train, validation and test Parquet files are publicly listed. The compilation license explicitly preserves each image’s original source terms and grants no extra rights to those images. The card exposes a platform column without listing its values, so operating-system coverage remains unspecified.

- 完整记录 JSON：https://awesomecua.com/resources/url-0dbb55f127da04d95222/record.json

### 结构化规格

- 格式：Parquet
- 模态：images, text, bounding boxes, OCR metadata
- 数据划分：train, validation, test
- 监督信号：instruction-to-target boxes

#### 数量记录

- 63,530 行 — train split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）
- 7,944 行 — validation split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）
- 7,938 行 — test split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）

Card-reported row counts and unique-screen counts are different units. The source field is important for the per-image license terms; the compilation does not relicense original images.

### 许可证信息

- 代码：未记录
- 数据：Wave UI Dataset License; per-image source terms retained — https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md
- 文档：未记录
- 权重：未记录

- 数据审核：The compilation expressly does not relicense its images and lists differing source terms. No blanket permissive data license is appropriate.
  来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md

### 一手证据

- https://huggingface.co/api/datasets/agentsea/wave-ui（获取于 2026-10-17T04:01:33Z；SHA-256：76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md（获取于 2026-10-17T04:06:57Z；SHA-256：63c6b3ce6a3d9c21a505865ceed698df2894bcb292590c59686e9477df867942）
- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c）
- https://huggingface.co/api/datasets/agentsea/wave-ui（获取于 2026-10-17T04:01:33Z；SHA-256：76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19）

---

## WebArena-Infinity browser agent trajectories

收录三个浏览器智能体在 13 个由产品文档生成的 WebArena-Infinity 网页应用上的成功运行，含逐步推理、操作、截图及程序化验证结果。

- 目录页面：https://awesomecua.com/zh/resources/url-ccac8d260d6d1d330bf5/
- 原始来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成、模仿学习
- 证据核查日期：2026-10-18T12:33:11Z
- ID：url:ccac8d260d6d1d330bf5

### 范围记录

Released by the web-arena-x organization. The card cites a project page (webarena.dev/webarena-infinity); the environment-generation pipeline is the separate repository github.com/web-arena-x/webarena-infinity. Only trajectories that passed the programmatic state checks in a three-repetition final run are included; the sample contains successful trajectories. In the sampled history files, Gemini 2.5 Flash (Browser Use harness) acts on indexed DOM elements, while Kimi K2.5 and Qwen 2.5 VL Plus trajectories store clicks as absolute pixel coordinates next to the model's raw output. MIT is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/record.json

### 结构化规格

- 格式：JSON, PNG
- 模态：browser screenshots, task instructions, agent reasoning, actions
- 数据划分：未记录
- 监督信号：agent-generated successful trajectories, programmatic state-verifier outcomes

#### 数量记录

- 2,329 条轨迹 — manifest.json at revision 73cf7f57: Gemini 2.5 Flash 978, Kimi K2.5 643, Qwen 2.5 VL Plus 708（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 1,124 个不重复的任务（环境与 task_id 组合） — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 13 个 Web 应用环境 — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 25,503 个智能体步骤（manifest 中 steps 字段之和） — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 2,195 个含 history.json 的轨迹文件夹 — Hub file tree at revision 73cf7f57（计算得出）（来源：https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe）

Trajectories, tasks, environments, steps and folders are different units and are counted separately. Each agent has at most one trajectory per task. Manifest difficulty labels: 604 easy, 508 medium, 1,217 hard. The manifest lists 134 Gemini trajectories (89 gitlab-plan-and-track, 45 gmail) whose folders are absent from the file tree at this revision, so 2,195 trajectories have files. Two history files were sampled.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md（获取于 2026-10-18T12:33:11Z；SHA-256：02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031）
- https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe（获取于 2026-10-18T12:32:01Z；SHA-256：b764c9a4e6c27838c898d433b386a0b08a864ba53a0edfa896391db28d939e15）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json（获取于 2026-10-18T12:32:01Z；SHA-256：d0c98be46cfc16e8eb408c62c774924edd8b7bd9f958fe65d983d55072a38c4d）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/gemini/paypal-my-wallet/task_e1/history.json（获取于 2026-10-18T12:33:30Z；SHA-256：3e990071c45afa463fe8372fd613ca78852fc42a35877373336d7a742fee256a）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/kimi/gmail/task_e10/history.json（获取于 2026-10-18T12:33:30Z；SHA-256：cfa5f0eda4c0817879c957c70aad7881013a5b4590e0270a4ae86b8e26a0e596）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md（获取于 2026-10-18T12:33:11Z；SHA-256：02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031）

---

## webarena-world-model-cot

用于训练语言世界模型的 WebArena 网页状态转移数据：将思维链标注与动作执行后无障碍树中的条目变化配对，供 RLVR-World 中的监督微调与 RLVR 训练使用。

- 目录页面：https://awesomecua.com/zh/resources/url-3e0f07cb0ff3f32dfc0e/
- 原始来源：https://huggingface.co/datasets/thuml/webarena-world-model-cot
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、网页导航
- 证据核查日期：2026-11-10T03:01:06Z
- ID：url:3e0f07cb0ff3f32dfc0e

### 范围记录

Train and test parquet files; the card declares MIT. The paper derives it from the WMA WebArena dataset, keeps about 7,000 of 14,000 trajectories under a 5,000-token limit, and splits them 99% for training and 1% for testing.

- 完整记录 JSON：https://awesomecua.com/resources/url-3e0f07cb0ff3f32dfc0e/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/thuml/webarena-world-model-cot
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/thuml/webarena-world-model-cot（获取于 2026-11-10T03:01:06Z；SHA-256：537384af9032d029a2079216fec61c1bd484778b2f02ac8b7d95a01537924244）
- https://huggingface.co/api/datasets/thuml/webarena-world-model-cot（获取于 2026-11-10T03:01:06Z；SHA-256：537384af9032d029a2079216fec61c1bd484778b2f02ac8b7d95a01537924244）

---

## WebChain (original release)

WebChain 原始版收录真实网站上的人工标注轨迹，提供原始 JSON 记录、视口截图及部分完整页面截图，以及用于高层规划和低层定位步骤的 Parquet 文件。

- 目录页面：https://awesomecua.com/zh/resources/url-116431f8ea32dbc6d637/
- 原始来源：https://huggingface.co/datasets/webagentlab/webchain-legacy
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航、GUI 定位、规划
- 证据核查日期：2026-10-18T12:24:21Z
- ID：url:116431f8ea32dbc6d637

### 范围记录

The publisher's cleaned v2 release is a separate Hub repository (webagentlab/webchain) whose card calls this repository the original release with the least-processed artifacts and earlier high- and low-level formulations; v2 reports different counts after cleaning. Here the image and full-page screenshot folders are split ZIP sets, and the card says full-page screenshots cover only some steps. Rationales come from synthetic generation. CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-116431f8ea32dbc6d637/record.json

### 结构化规格

- 格式：zipped JSON, split ZIP image archives, Parquet
- 模态：viewport screenshots, partial full-page screenshots, HTML snapshots, accessibility-tree snapshots, instructions, actions
- 数据划分：high-level train, high-level test, low-level train, low-level test
- 监督信号：human-executed web task trajectories, element bounding boxes and click coordinates, CSS selectors and DOM references, action types and input text, generated rationales where included

#### 数量记录

- 31,725 条轨迹 — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 317,993 个交互步骤 — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 428 个 Web 领域 — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 13 个 Parquet 文件 — processed/high_parquet (2) and processed/low_parquet (11) at revision bd569907（计算得出）（来源：https://huggingface.co/api/datasets/webagentlab/webchain-legacy）

Trajectories, steps, domains and files are different units and are counted separately. The trajectory, step and domain figures match the paper's statistics; the v2 card says they describe the corpus before final cleaning. The file count comes from the Hub manifest.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60）
- https://huggingface.co/api/datasets/webagentlab/webchain-legacy（获取于 2026-10-18T12:24:21Z；SHA-256：808a507eed99aac784cf773cf1c4dbb0cd03a4c66b75c49466f3c0dc353a325b）
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）
- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60）

---

## WebChain v2

WebChain 人工网页轨迹的清洗版 v2，以轨迹级和 Seed 风格滑动窗口 SFT Parquet 提供数据，配有对齐截图、操作元数据和 150 条轨迹的评估子集。

- 目录页面：https://awesomecua.com/zh/resources/url-56f08987cc19b82dc607/
- 原始来源：https://huggingface.co/datasets/webagentlab/webchain
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航、GUI 定位、规划、模仿学习
- 证据核查日期：2026-10-18T15:33:42Z
- ID：url:56f08987cc19b82dc607

### 范围记录

The card calls this the cleaned, training-ready release and points to the publisher's separate original release (Hub repository webagentlab/webchain-legacy) for raw JSON records, split screenshot archives and the earlier high- and low-level formulations. Its counts (31,675 trajectories, 317,682 steps) are after cleaning; the paper's 31,725 trajectories and 317,993 steps describe the corpus before it. Annotators executed tasks on live websites; tasks were synthesized from site schemas and reasoning text was added in post-processing. CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-56f08987cc19b82dc607/record.json

### 结构化规格

- 格式：Parquet (Trace SFT and Seed/Demo SFT), Parquet and CSV metadata tables, SHA-256 manifests
- 模态：viewport screenshots, task queries, reasoning text, actions, DOM and accessibility-tree references in trace metadata
- 数据划分：未记录
- 监督信号：human-executed web task trajectories, click coordinates, bounding boxes and CSS selectors, action types and text arguments, reasoning text added in post-processing

#### 数量记录

- 31,675 条清洗后的轨迹 — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 317,682 个交互步骤 — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 39,332 行 Seed/Demo 滑动窗口数据 — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 263,995 轮 SFT 图像/动作交互 — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 150 条评测追踪记录 — test_suite_150 subset as stated on the card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 48 个数据分卷（每种格式） — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft（计算得出）（来源：https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce）
- 71 个 SFT Parquet 分片（每种格式） — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft（计算得出）（来源：https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce）

Trajectories, steps, windows, turns, parts and shards are different units and are counted separately. Trace SFT has one row per cleaned trajectory; Seed/Demo SFT re-cuts the same trajectories into bounded windows, so the formats overlap. The 150-trace subset is a stratified sample for loader checks and compact offline evaluation; the card does not say it is held out from the parts. The part and shard counts from the manifest match the card.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T15:33:42Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）
- https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce（获取于 2026-10-18T15:33:18Z；SHA-256：b2845f4365632a07cf5296879f18b516603a08a7b7700558db543962475a7bfa）
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T15:33:42Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）

---

## webgames

WebGames 的任务列表，这是一组供浏览智能体完成的客户端网页挑战：一个 JSONL 文件，记录每个任务的 ID、标题、描述、页面路径、完成后显示的密码和标签。

- 目录页面：https://awesomecua.com/zh/resources/url-654e0cbc1a22b59eca47/
- 原始来源：https://huggingface.co/datasets/convergence-ai/webgames
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:01:04Z
- ID：url:654e0cbc1a22b59eca47

### 范围记录

Agents are scored by checking that the task's password appears in their final message; the WebGames repository also includes an Inspect AI eval scaffold and a hosted version of the challenges. The card declares the MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-654e0cbc1a22b59eca47/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/convergence-ai/webgames
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/convergence-ai/webgames（获取于 2026-11-10T03:01:04Z；SHA-256：01956443717e1c85b8d643e5875e85719f6b9138b67185d03ce291df6ce33f54）
- https://huggingface.co/api/datasets/convergence-ai/webgames（获取于 2026-11-10T03:01:04Z；SHA-256：01956443717e1c85b8d643e5875e85719f6b9138b67185d03ce291df6ce33f54）

---

## WebGuard

包含 5,999 条浏览器操作安全标注的数据集，将网站和操作信息与风险分类配对，供网页智能体研究使用。

- 目录页面：https://awesomecua.com/zh/resources/url-df10c80a8da55773154d/
- 原始来源：https://huggingface.co/datasets/osunlp/WebGuard
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测、网页导航
- 证据核查日期：2026-11-09T05:05:11Z
- ID：url:df10c80a8da55773154d

### 范围记录

The card lists a train split, a dataset-loading example, and the CC BY-NC 4.0 license. Screenshot fields contain Google Drive view links.

- 完整记录 JSON：https://awesomecua.com/resources/url-df10c80a8da55773154d/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/osunlp/WebGuard
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/WebGuard（获取于 2026-11-09T05:05:11Z；SHA-256：814d636b8d709972501e27cd5818fff4438a0c297ca703496f8dae5516358dcd）
- https://huggingface.co/api/datasets/osunlp/WebGuard（获取于 2026-11-09T05:05:11Z；SHA-256：814d636b8d709972501e27cd5818fff4438a0c297ca703496f8dae5516358dcd）

---

## WebLINX dataset

WebLINX 1.0 的 Hub 数据将对话式网页导航演示预处理为逐轮记录，包含对话、清理后的 HTML、候选元素和操作历史，并提供重排序数据。

- 目录页面：https://awesomecua.com/zh/resources/url-1517e989c470563bd08d/
- 原始来源：https://huggingface.co/datasets/McGill-NLP/WebLINX
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、动作预测
- 证据核查日期：2026-10-18T15:49:24Z
- ID：url:1517e989c470563bd08d

### 范围记录

The WebLINX repository README calls this the official dataset page and its library loads the data. The main revision a30ff2cb holds the preprocessed chat and reranking configurations, per-split CSV files, splits.json and prompt templates; the card points to a separate McGill-NLP/WebLINX-full repository for the complete raw demonstrations outside this record. The card describes WebLINX 1.1, a reprocessed BrowserGym release in another Hub repository, and links this original release as the v1.0 tag. CC-BY-NC-SA-4.0 with added terms of use is the card's data declaration; the code repository's Apache-2.0 license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-1517e989c470563bd08d/record.json

### 结构化规格

- 格式：gzip-compressed JSON Lines, CSV, JSON
- 模态：dialogue utterances, cleaned HTML, candidate element descriptions, action history, viewport size
- 数据划分：train, valid, test_iid, test_geo, test_vis, test_cat, test_web
- 监督信号：next action per navigator turn, conversational instructions and responses

#### 数量记录

- 2,337 条演示 — all splits in splits.json at revision a30ff2cb (train, valid and five test splits; disjoint)（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 969 条演示 — train split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 100 条演示 — valid split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 100 条演示 — test_iid split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 290 条演示 — test_geo split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 444 条演示 — test_vis split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 223 条演示 — test_cat split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 211 条演示 — test_web split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 2,126 条 chat-config 轮次记录 — valid split, data/chat/valid.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz）
- 2,308 条 chat-config 轮次记录 — test_iid split, data/chat/test_iid.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz）
- 7,672 条 chat-config 轮次记录 — test_geo split, data/chat/test_geo.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz）
- 9,023 条 chat-config 轮次记录 — test_vis split, data/chat/test_vis.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz）
- 5,971 条 chat-config 轮次记录 — test_cat split, data/chat/test_cat.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz）
- 4,856 条 chat-config 轮次记录 — test_web split, data/chat/test_web.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz）

Counts were computed with a script. Demonstrations come from splits.json, whose seven splits are disjoint; its iid_all list is the union of valid and test_iid and overlaps those splits. Turn records are rows of the chat configuration, one per evaluated navigator turn, a different unit from demonstrations; the train file exceeds the catalog's 10 MB evidence budget, leaving its turn-record count unrecorded. The card's extra test split duplicates test_iid. The counts cover demonstrations and chat turn records; reranking files and CSVs fall outside those counts. Screenshots are not in this repository.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md（获取于 2026-10-18T15:49:24Z；SHA-256：9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527）
- https://huggingface.co/api/datasets/McGill-NLP/WebLINX/revision/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13（获取于 2026-10-18T15:48:39Z；SHA-256：940bc61bb13a1ea7a4a038a812161121d932e2cd5af4d866accc508839d401de）
- https://raw.githubusercontent.com/McGill-NLP/weblinx/9a7e814ffaac36d36ae5291dc3407c530055e16f/README.md（获取于 2026-10-18T15:48:40Z；SHA-256：15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json（获取于 2026-10-18T15:48:39Z；SHA-256：db6fd50e6b1ba053817ede3f2a8ec61a292ad2710dd7f4e300cf685f70d843e6）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz（获取于 2026-10-18T15:48:42Z；SHA-256：086adc2ee12e711893a59e47822c08cf05cbf8c021db1e7a39f6fbc8d8cef7ab）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz（获取于 2026-10-18T15:48:43Z；SHA-256：0bbdd414f371fea6b4e6741f821bd60aeaf13ba5114456d4cb901bd0e6617ba7）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz（获取于 2026-10-18T15:48:44Z；SHA-256：738fb37c35acaa5a3bfe752886b258d5cacf09cdeec7abe1c71574074011a249）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz（获取于 2026-10-18T15:48:45Z；SHA-256：7371eaa43dc95ff7482844afd840a98f8728df4364baf85e15688d134af07380）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz（获取于 2026-10-18T15:48:46Z；SHA-256：b9ea603cba86761d0780490867bc22ea95ff59e5702dfd765fa58b17d25e7eab）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz（获取于 2026-10-18T15:48:47Z；SHA-256：10d780712da997da9ff2d15d642aa199410ebe5d30d2ea3f9ba56fb044a745db）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md（获取于 2026-10-18T15:49:24Z；SHA-256：9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527）

---

## WebPRM Collection preference data

带检查清单标注的网页决策记录，包含页面观察、先前动作、一个优选的后续步骤及被拒绝的备选步骤，用于过程奖励学习。

- 目录页面：https://awesomecua.com/zh/resources/url-8dfc84eb4016204fe70a/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、奖励模型、评测
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:8dfc84eb4016204fe70a

### 范围记录

Ten public Parquet shards are present. The card names its split test and reports 9,460 rows; the project’s 40K-plus preference-annotation claim uses a different grain. A row can contain multiple rejected alternatives. No data-license declaration is present.

- 完整记录 JSON：https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, text, action history
- 数据划分：test
- 监督信号：preferred and rejected continuations, task checklists

#### 数量记录

- 9,460 行 — Hub split named test（来源报告；来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md）

Preserves the publisher’s split label despite the collection’s training purpose. Rows contain lists of rejected candidates. Data license is unknown.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：9c091c5fc625ce53f53f8262f5cee8d08194e4fd1b8eeed543ff1c3723c823fd）
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_preference_pair（获取于 2026-10-17T02:44:50Z；SHA-256：28a1d5d12e84fc38515bd3c5031ae0cf315c5f8772b90d982d926b98f2857563）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）

---

## WebsiteBench

WebsiteBench 70 个任务的 Hugging Face 版本，采用 Harbor 格式：智能体通过浏览器探索一个生产级网站，并重建其全栈副本，由隐藏的功能与视觉测试评分。

- 目录页面：https://awesomecua.com/zh/resources/url-687a7b27f38720fe54bc/
- 原始来源：https://huggingface.co/datasets/TIGER-Lab/WebsiteBench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-11-10T03:01:04Z
- ID：url:687a7b27f38720fe54bc

### 范围记录

Each task folder has instruction.md, task.toml, an agent environment with a browser gateway and reference website, an oracle solution and a hidden verifier; manifest.json records file hashes. The full set is 9.7 GB, each environment requests 8 CPUs, 8 GiB memory and 20 GiB disk, and code and task definitions are Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-687a7b27f38720fe54bc/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/WebsiteBench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/TIGER-Lab/WebsiteBench?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags（获取于 2026-11-10T03:01:04Z；SHA-256：dd90c82730ed48470c35d0323b1a44344b50a4965dae6d42b6fb4ce3fbe46500）
- https://huggingface.co/api/datasets/TIGER-Lab/WebsiteBench?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags（获取于 2026-11-10T03:01:04Z；SHA-256：dd90c82730ed48470c35d0323b1a44344b50a4965dae6d42b6fb4ce3fbe46500）

---

## WebSRC v1.0

用于结构化阅读理解的网页片段、问题、答案、HTML、截图和布局元数据。

- 目录页面：https://awesomecua.com/zh/resources/url-e0ba328ae1a643b0a5aa/
- 原始来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-18T04:35:16Z
- ID：url:e0ba328ae1a643b0a5aa

### 范围记录

Public release includes train+dev and test ZIP packages plus a test-answer JSON file. The v1.0 card’s exact split table differs from the older project-page headline of 0.44M questions/6.5K pages; counts are kept with their sources. This is a static webpage-understanding dataset. CC-BY-4.0 is the data-card declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/record.json

### 结构化规格

- 格式：CSV, HTML, JSON, ZIP packages
- 模态：questions and answers, HTML, screenshots, layout metadata
- 数据划分：train, dev, test
- 监督信号：extractive or yes/no answers, answer DOM-element references

#### 数量记录

- 307,315 个问答示例 — WebSRC v1.0 train（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 4,549 个网页 — WebSRC v1.0 train（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 52,826 个问答示例 — WebSRC v1.0 dev（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 913 个网页 — WebSRC v1.0 dev（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 40,357 个问答示例 — WebSRC v1.0 test（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 985 个网页 — WebSRC v1.0 test（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）

Each dataset.csv row is a QA example; web pages and QA examples are different units. Use the v1.0 split table for this release. The card retains email-evaluation instructions, while the manifest now includes test answers; no submission was made.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md

### 一手证据

- https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md（获取于 2026-10-18T04:35:16Z；SHA-256：061e5bcaa49e819f0133afb912ad5ce20a8c2b6c28ca60319a4635d6ce835ddb）
- https://huggingface.co/api/datasets/X-LANCE/WebSRC_v1.0（获取于 2026-10-18T04:33:29Z；SHA-256：a7976dd931c3fcf11de2456614f95eb071978599bd70fb89c0ea009d31da4300）
- https://x-lance.github.io/WebSRC/（获取于 2026-10-17T15:37:04Z；SHA-256：3c2c601d8b4ad2f379cac9b97a2cbb901883d9bc6c1a682359f9b4135e6dd4bc）

---

## WenyiWU0111/CoMEM-agent-memory-trajectories

用于图形界面智能体记忆研究的数据集，包含扩展的网页链接、合成任务，以及成功和失败的执行轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-87e0195f2401d5f6f66f/
- 原始来源：https://huggingface.co/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、交互历史、记忆
- 证据核查日期：2026-11-09T19:58:09Z
- ID：url:87e0195f2401d5f6f66f

### 范围记录

The card reports 222,235 synthesized tasks and 188,451 trajectories. It lists Apache-2.0 as the license.

- 完整记录 JSON：https://awesomecua.com/resources/url-87e0195f2401d5f6f66f/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories（获取于 2026-11-09T19:58:09Z；SHA-256：e272987a86a523262373eea1dc5f950a298eed8202a6bf124bd8330a66108d37）
- https://huggingface.co/api/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories（获取于 2026-11-09T19:58:09Z；SHA-256：e272987a86a523262373eea1dc5f950a298eed8202a6bf124bd8330a66108d37）

---

## widget-caption

一个描述界面控件功能的说明文字数据集，用于训练和评估界面元素描述模型。它包含 61,286 个带说明文字的控件。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-widget-caption/
- 原始来源：https://github.com/google-research-datasets/widget-caption
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、数据生成、评测
- 证据核查日期：2026-11-09T19:56:09Z
- ID：github:google-research-datasets/widget-caption

### 范围记录

Screens for 12,960 captioned widgets are withheld for copyright reasons. The README explains widget lookup through nodeId and declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-widget-caption/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/widget-caption/HEAD/README.md（获取于 2026-11-09T19:56:09Z；SHA-256：47e102c1672f7f87b06a92122e874622c2dbe2740e8c5e8b44871bb0c8ec3062）

---

## WikiHow Task Set

用于 Mobile-Env 的 WikiHow 应用导航评测任务集，另含跨 Android 应用的补充任务，提供任务定义和改写的指令。

- 目录页面：https://awesomecua.com/zh/resources/url-25af759a783f1514fe58/
- 原始来源：https://huggingface.co/datasets/zdy023/WikiHow-taskset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、工作流、数据生成
- 证据核查日期：2026-11-09T05:05:10Z
- ID：url:25af759a783f1514fe58

### 范围记录

The source says the public WikiHow APK and cached website data were removed at WikiHow's request. It describes released open-world task definitions, an Android virtual device archive and human-rewritten instructions. The card declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-25af759a783f1514fe58/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/zdy023/WikiHow-taskset
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset（获取于 2026-11-09T05:05:10Z；SHA-256：5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf）
- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset（获取于 2026-11-09T05:05:10Z；SHA-256：5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf）
- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset（获取于 2026-11-09T05:25:47Z；SHA-256：5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf）
- https://huggingface.co/api/datasets/X-LANCE/WikiHow-taskset（获取于 2026-11-09T05:25:47Z；SHA-256：5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf）

---

## WinDeskGround

用于多窗口合成桌面 GUI 元素定位的基准数据：585 张图像上的 1356 个样本，包含受控的遮挡、语义干扰和杂乱设置，以及 L1 至 L5 难度等级。

- 目录页面：https://awesomecua.com/zh/resources/url-897db7dba36e69a60e5e/
- 原始来源：https://huggingface.co/datasets/Zbao/WinDeskGround
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、鲁棒性、评测
- 证据核查日期：2026-11-10T03:01:09Z
- ID：url:897db7dba36e69a60e5e

### 范围记录

The repository holds desktop screenshots with paired debug renderings under sensitivity/ folders and simulation/L1 to L5 folders and declares an Apache-2.0 license. The WinDeskGround GitHub repository holds the generation and evaluation scripts, and WinDeskGround_windows holds the source window images.

- 完整记录 JSON：https://awesomecua.com/resources/url-897db7dba36e69a60e5e/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Zbao/WinDeskGround
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Zbao/WinDeskGround（获取于 2026-11-10T03:01:09Z；SHA-256：51844b9973a85a45ae726c182beb722d8207a10bd261289d389dc2e9ac45c845）
- https://huggingface.co/api/datasets/Zbao/WinDeskGround（获取于 2026-11-10T03:01:09Z；SHA-256：51844b9973a85a45ae726c182beb722d8207a10bd261289d389dc2e9ac45c845）

---

## WinDeskGround_windows

WinDeskGround_windows 提供 Windows 应用截图，并标注可点击目标、边界框和指代表达，用于桌面图形界面定位任务。

- 目录页面：https://awesomecua.com/zh/resources/url-79b8dfa115894a7f53aa/
- 原始来源：https://huggingface.co/datasets/Zbao/WinDeskGround_windows
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-11-09T19:57:12Z
- ID：url:79b8dfa115894a7f53aa

### 范围记录

The card reports 614 screenshots and 1,578 queries in its domain table. The repository lists an annotation JSON file and images across browser, productivity, communication, and utility categories. The card declares Apache 2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-79b8dfa115894a7f53aa/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Zbao/WinDeskGround_windows
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Zbao/WinDeskGround_windows（获取于 2026-11-09T19:57:12Z；SHA-256：687cfae8c1a7d4288b6912d22aecf6fc5882666b194c8a7620eb73f090fa7514）
- https://huggingface.co/api/datasets/Zbao/WinDeskGround_windows（获取于 2026-11-09T19:57:12Z；SHA-256：687cfae8c1a7d4288b6912d22aecf6fc5882666b194c8a7620eb73f090fa7514）

---

## WorkDemo-350

桌面操作演示数据，包含任务描述、视频、输入日志，以及与操作关联的截图证据，用于研究可复用的智能体技能。

- 目录页面：https://awesomecua.com/zh/resources/url-243ab00712ba19cc2089/
- 原始来源：https://huggingface.co/datasets/yuqi777/WorkDemo-350
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：录制、工作流、视频
- 证据核查日期：2026-10-16T10:47:49Z
- ID：url:243ab00712ba19cc2089

### 范围记录

The card documents post hoc selection of the 286-task OSWorld subset based on model outcomes, uncalibrated coordinate annotations, and missing task-success acceptance records. It provides no train/test split or complete evaluator and does not claim complete anonymization. Review these limits before training or evaluation; the collection is an offline demonstration asset.

- 完整记录 JSON：https://awesomecua.com/resources/url-243ab00712ba19cc2089/record.json

### 结构化规格

- 格式：MP4, PNG, JSON, JSONL, commented key logs
- 模态：screen video, screenshots, input events, task text
- 数据划分：未记录
- 监督信号：human workflow demonstrations, skill induction

#### 数量记录

- 350 条演示 — packaged tasks/videos（来源报告；来源：https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md）
- 8,388 张证据图像 — final packaged images（来源报告；来源：https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md）
- 11,951 条动作记录 — packaged action traces（来源报告；来源：https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md）

The OSWorld subset was selected post hoc using model outcomes; no train/test split is supplied. Coordinate calibration, task success, and complete anonymization are not established by package-format checks.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md（获取于 2026-10-16T10:47:49Z；SHA-256：ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0）
- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md（获取于 2026-10-16T10:47:49Z；SHA-256：ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0）

---

## world_model_for_wa_desc_with_tao_dataset

WMA 网页智能体世界模型的训练数据：14744 个步骤，每步将任务目标、历史动作、观测和当前动作与下一状态及其变化描述配对。

- 目录页面：https://awesomecua.com/zh/resources/url-96bb23bd687d6c227a41/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、网页导航、数据生成
- 证据核查日期：2026-11-10T03:01:12Z
- ID：url:96bb23bd687d6c227a41

### 范围记录

One Parquet split of 14,744 rows with url, task_id, step_idx, objective, previous_actions, observation, current_action, next_state_acctree, refined_tao, raw_prediction, rationale and next_state_description_with_tao fields. The WMA-Agents README lists it beside a formatted version and the Meta-Llama-3.1-8B-Instruct world model adapter.

- 完整记录 JSON：https://awesomecua.com/resources/url-96bb23bd687d6c227a41/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset（获取于 2026-11-10T03:01:12Z；SHA-256：27e68537e1f7b62f35f47bc9322eea2a77d5af3ae616d10af702f4b65655f982）
- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset（获取于 2026-11-10T03:01:12Z；SHA-256：27e68537e1f7b62f35f47bc9322eea2a77d5af3ae616d10af702f4b65655f982）

---

## world_model_for_wa_desc_with_tao_formatted_w_cot

用于训练 WMA 世界模型的格式化指令、输入与输出样本；该模型描述动作执行后 WebArena 页面如何变化。数据含 11795 条训练样本和 2949 条验证样本。

- 目录页面：https://awesomecua.com/zh/resources/url-3ef18fbb67e0376561db/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、网页导航
- 证据核查日期：2026-11-10T03:01:06Z
- ID：url:3ef18fbb67e0376561db

### 范围记录

Parquet train and validation splits with three string fields, about 163 MB; the card body is the default template and states no license. The WMA-Agents README pairs it with the raw world_model_for_wa_desc_with_tao_dataset and a Llama-3.1-8B world-model adapter.

- 完整记录 JSON：https://awesomecua.com/resources/url-3ef18fbb67e0376561db/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot（获取于 2026-11-10T03:01:06Z；SHA-256：64bb48706a581de66ec7a5ed86608fa3dc3d5e6478685b0b58e7c78d043d1957）
- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot（获取于 2026-11-10T03:01:06Z；SHA-256：64bb48706a581de66ec7a5ed86608fa3dc3d5e6478685b0b58e7c78d043d1957）

---

## WorldGUI-Bench

这套桌面图形界面评估数据包含用户请求、教学视频和用于改变任务初始状态的预操作，并提供任务元数据与数据归档。

- 目录页面：https://awesomecua.com/zh/resources/url-b540fe81c57cedb1f556/
- 原始来源：https://huggingface.co/datasets/hhenryz/WorldGUI-Bench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、鲁棒性、视频、规划
- 证据核查日期：2026-11-09T06:16:39Z
- ID：url:b540fe81c57cedb1f556

### 范围记录

The repository lists WorldGUI-data.zip and worldgui_metadata.json. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b540fe81c57cedb1f556/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/hhenryz/WorldGUI-Bench
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/hhenryz/WorldGUI-Bench（获取于 2026-11-09T06:16:39Z；SHA-256：04918486ebffcb42022477bdcab041b2da78361f0072bc60137c506d3a129a7d）
- https://huggingface.co/api/datasets/hhenryz/WorldGUI-Bench（获取于 2026-11-09T06:16:39Z；SHA-256：04918486ebffcb42022477bdcab041b2da78361f0072bc60137c506d3a129a7d）

---

## xunsss/osworld2-codex-gpt56sol-0624-attempt-preview

这个 OSWorld-V2 数据集提供精简数据表，用于浏览 Codex 的任务摘要、尝试记录、轨迹事件，以及已执行的图形界面或命令行操作。

- 目录页面：https://awesomecua.com/zh/resources/url-bf57897ba4d047112345/
- 原始来源：https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、交互历史、可观测性
- 证据核查日期：2026-11-09T19:55:52Z
- ID：url:bf57897ba4d047112345

### 范围记录

The repository lists Parquet files for task summaries, attempts, events, and actions. The card says screenshots and original trajectory files remain in the complete archive.

- 完整记录 JSON：https://awesomecua.com/resources/url-bf57897ba4d047112345/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview（获取于 2026-11-09T19:55:52Z；SHA-256：512942c4f0a6a59a6417e8ff9c60f8193dbd8e906bd3a3cc5d4695bbe62f1ea3）
- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview（获取于 2026-11-09T19:55:52Z；SHA-256：512942c4f0a6a59a6417e8ff9c60f8193dbd8e906bd3a3cc5d4695bbe62f1ea3）

---

## a3-qwen-3.5-9b-trajectories

A3-Qwen3.5-9B 网页智能体在 BrowserGym 基准上的 AgentLab 运行日志，按任务以逐步 JSON 文件保存目标、页面 URL、DOM 与无障碍树观测以及动作；该地址指向其中的 WebArena 文件夹。

- 目录页面：https://awesomecua.com/zh/resources/url-3ab90a696d8578c944c8/
- 原始来源：https://huggingface.co/datasets/xhluca/a3-qwen-3.5-9b-trajectories/tree/main/webarena
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、评测
- 证据核查日期：2026-11-10T03:01:05Z
- ID：url:3ab90a696d8578c944c8

### 范围记录

Top-level folders are miniwob, webarena, visualwebarena, workarena_l1 and workarena_l2; each task folder holds exp_args.json, step_N.json files and summary_info.json. The collection for arXiv 2604.07776 lists it beside the A3-Qwen3.5 models and the A3-Synth training data; the repository has no card or license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3ab90a696d8578c944c8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xhluca/a3-qwen-3.5-9b-trajectories（获取于 2026-11-10T03:01:05Z；SHA-256：e68f200e58322e3c039d734f57c8a81c0342ef89f93b5a202c7c5a7f0a4ed94c）
- https://huggingface.co/api/datasets/xhluca/a3-qwen-3.5-9b-trajectories（获取于 2026-11-10T03:01:05Z；SHA-256：e68f200e58322e3c039d734f57c8a81c0342ef89f93b5a202c7c5a7f0a4ed94c）

---

## Agent Humanization Benchmark (AHB) recordings

记录人类与移动端 GUI 智能体完成相同中文 Android 应用任务时的触摸手势和运动传感器数据，附任务列表和元数据，用于训练区分智能体与人类的检测器。

- 目录页面：https://awesomecua.com/zh/resources/url-3e1a864c46c8ed5735d4/
- 原始来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、手机操作、评测
- 证据核查日期：2026-10-18T15:51:35Z
- ID：url:3e1a864c46c8ed5735d4

### 范围记录

The Hub repository has no dataset card or license file; the arXiv paper and its code repository link it as the released data. The paper reports that all sessions ran on one Xiaomi Mi Max 2 phone with MIUI 11.0.2.0. Per-archive contents remain unverified because the recording archives were outside the reviewed evidence. Event totals are the paper's figures.

- 完整记录 JSON：https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/record.json

### 结构化规格

- 格式：ZIP archives, plain-text gesture logs, CSV, XLSX, Python pickle
- 模态：touch input events, motion-sensor readings, task instructions
- 数据划分：未记录
- 监督信号：source labels for human users and named agent configurations, task success scoring in the metadata workbook

#### 数量记录

- 116 条任务描述 — metadata/tasks.csv at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv）
- 20 个不重复的应用名称 — metadata/tasks.csv at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv）
- 21 个应用 — dataset described in the paper, grouped into five clusters（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 72 个手势录制日志文件 — three agent folders under gesture_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 7 个手势录制 ZIP 归档 — gesture_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 8 个传感器录制 ZIP 归档 — sensor_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 37,768,698 个运动与传感器事件 — four human sub-populations (paper Table 4)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 243,090,929 个运动与传感器事件 — five raw agent configurations (paper Table 4)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 280,320,486 个运动与传感器事件 — humanized agents without fake actions (paper Table 5)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 154,704,094 个运动与传感器事件 — humanized agents with fake actions (paper Table 5)（来源报告；来源：https://arxiv.org/html/2604.09574v1）

Computed counts come from a script over the pinned Hub file list and tasks.csv. tasks.csv names 20 apps while the paper reports 21. The task texts are in Chinese. The code repository says the metadata workbook holds agent, task, timestamp and success-scoring fields. Event counts are per sensor or touch event, and the four totals are separate populations; these counts are reported separately.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The Hub repository has no dataset card, license metadata or license file at this revision, and the linked code repository declares no license, so no data grant is established.
  来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe

### 一手证据

- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe（获取于 2026-10-18T15:51:35Z；SHA-256：76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b）
- https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv（获取于 2026-10-18T15:51:35Z；SHA-256：5b906fbc0df5f8677516c1a2c1e47c7c3a191df320574c5c3a100e99616a5f24）
- https://arxiv.org/html/2604.09574v1（获取于 2026-10-18T15:51:35Z；SHA-256：21c0f429eede313b7e3d302750bb5d77515af84b21c303c5fc5cc39138eb18c3）
- https://raw.githubusercontent.com/Gebro13/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/8924fa3e687af6f264d3b91a2d2f48faf8adfd8c/README.md（获取于 2026-10-18T15:51:36Z；SHA-256：20ddeb13fedd6e07ff06104b65a2bd09ff7422b28064d7442196301c5172b062）
- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe（获取于 2026-10-18T15:51:35Z；SHA-256：76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b）

---

## AgentSynth tasks and trajectories

已发布的 AgentSynth 任务定义和记录的 GUI 轨迹，包含 OSWorld 及 InSTA 训练配置，以及打包的截图、思考内容和命令。

- 目录页面：https://awesomecua.com/zh/resources/url-58a209f2b3b970916396/
- 原始来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：数据生成、长任务、模仿学习
- 证据核查日期：2026-10-18T04:35:17Z
- ID：url:58a209f2b3b970916396

### 范围记录

Public Hub manifest contains JSONL task files and trajectory ZIP packages. Counts describe the publisher-reported task collection; independently counted archive-row and ZIP-filename totals remain unavailable.

- 完整记录 JSON：https://awesomecua.com/resources/url-58a209f2b3b970916396/record.json

### 结构化规格

- 格式：JSONL, ZIP trajectory packages
- 模态：screenshots, task instructions, LLM thoughts, commands
- 数据划分：train (osworld configuration), train (insta configuration)
- 监督信号：synthetic tasks, agent trajectories

#### 数量记录

- > 6,000 个任务 — The count is the collection total described by the dataset card; the released-row count remains unverified.（来源报告；来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md）

Card maps osworld/train to all_tasks.jsonl and insta/train to task_sequences.jsonl. Six difficulty levels and trajectory screenshots/thoughts/commands are documented. ZIP file labels identify files; trajectory totals are unspecified, and configurations and composed-task levels may overlap.

### 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md

### 一手证据

- https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：c1669d8e3caa27f8cd47c17b243b6a8d42807438d8a6a36074668adc57d33757）
- https://huggingface.co/api/datasets/sunblaze-ucb/AgentSynth（获取于 2026-10-18T04:33:20Z；SHA-256：0d3797d75dd4089ece8c8d4624f2a726024d25be255255d8770f78de21d75906）
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md（获取于 2026-10-18T04:27:12Z；SHA-256：42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106）

---

## AgentTrek

以网页教程为指引，通过重放合成浏览器智能体轨迹；发布包含多模态定位与推理信息的轨迹数据及 AgentTrek-32B 智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-agenttrek/
- 原始来源：https://github.com/xlang-ai/AgentTrek
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、视频
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:xlang-ai/agenttrek

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-agenttrek/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/AgentTrek/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：17fa475b96bdd00270c656072d3f8fc55d8433f0e3a1c2762110160ec21a5c35）

---

## AMEX

AMEX Android GUI 数据处理代码，将 3 个标注层级转为问答对并微调 LLaMA2-Accessory 模型，同时发布了模型检查点。

- 目录页面：https://awesomecua.com/zh/resources/github-yuxiangchai-amex-codebase/
- 原始来源：https://github.com/YuxiangChai/AMEX-codebase
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:yuxiangchai/amex-codebase

- 完整记录 JSON：https://awesomecua.com/resources/github-yuxiangchai-amex-codebase/record.json

### 结构化规格

- 格式：未记录
- 模态：screenshots, element annotations, functionality descriptions, action chains
- 数据划分：未记录
- 监督信号：element grounding, UI functionality, interaction trajectories

#### 数量记录

- > 104,000 张截图 — AMEX collection described in the paper（来源报告；来源：https://arxiv.org/abs/2407.17490）

The main repository contains companion training code. The scale and annotation levels here come from the paper.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：3184bfd612543621e57226e9079132dc8d5695339795a60366d3f6d445e13551）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）
- https://yxchai.com/AMEX/（获取于 2026-10-18T04:27:11Z；SHA-256：4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa）
- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE（获取于 2026-10-16T06:42:02Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## Android in the Wild

Android 任务的人类操作演示，包含截图和触摸操作。

- 目录页面：https://awesomecua.com/zh/resources/component-google-research-android-in-the-wild/
- 原始来源：https://github.com/google-research/google-research/tree/master/android_in_the_wild
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作
- 证据核查日期：2026-10-16T06:38:29Z
- ID：component:google-research/android_in_the_wild

- 完整记录 JSON：https://awesomecua.com/resources/component-google-research-android-in-the-wild/record.json

### 结构化规格

- 格式：GZIP-compressed TFRecord
- 模态：screenshots, instructions, actions
- 数据划分：未记录
- 监督信号：interaction trajectories, action prediction

#### 数量记录

- 715,142 个回合 — sum of the five published AitW subsets（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md）
- 5,689,993 个动作示例 — sum of the five published AitW subsets（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md）

Episodes and action examples are different units. The collection combines multi-step subsets and hindsight-labeled single-step tasks; preserve subset and split choices.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md（获取于 2026-10-16T06:38:29Z；SHA-256：6d8964c95db41dada1d5867e50a5ec61f6cb90595965d0e72e010b8e4a12dcb2）
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE（获取于 2026-10-16T06:42:06Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## android_icon_dataset

Android 图标标注数据集，用于研究界面中的视觉元素；训练集包含图像和字符串类别标签。

- 目录页面：https://awesomecua.com/zh/resources/url-b1c6b94743e6dbac930d/
- 原始来源：https://huggingface.co/datasets/Lancelot53/android_icon_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:b1c6b94743e6dbac930d

### 范围记录

The repository contains a Parquet train split. The card lists 8,161 examples and identifies a Misc_or_unknown class.

- 完整记录 JSON：https://awesomecua.com/resources/url-b1c6b94743e6dbac930d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Lancelot53/android_icon_dataset（获取于 2026-11-09T06:16:33Z；SHA-256：ebd75e1be578565fb446ef6ab148f5d3e5d456907f5eb5eef25b2301cbd5b9f2）
- https://huggingface.co/api/datasets/Lancelot53/android_icon_dataset（获取于 2026-11-09T06:16:33Z；SHA-256：ebd75e1be578565fb446ef6ab148f5d3e5d456907f5eb5eef25b2301cbd5b9f2）

---

## AndroidControl

Android 操作演示，包含高层目标、分步指令、截图和无障碍树。

- 目录页面：https://awesomecua.com/zh/resources/component-google-research-android-control/
- 原始来源：https://github.com/google-research/google-research/tree/master/android_control
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作
- 证据核查日期：2026-10-16T06:38:29Z
- ID：component:google-research/android_control

- 完整记录 JSON：https://awesomecua.com/resources/component-google-research-android-control/record.json

### 结构化规格

- 格式：GZIP-compressed TFRecord
- 模态：screenshots, accessibility trees, instructions, JSON actions
- 数据划分：publisher split file
- 监督信号：interaction trajectories, high- and low-level action instruction

#### 数量记录

- > 15,000 条演示 — AndroidControl collection（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md）
- 833 个应用 — AndroidControl collection（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md）

Step instructions can be repeated across multiple actions. Each episode has one more screenshot than action; step instructions can repeat across multiple actions.

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md（获取于 2026-10-16T06:38:29Z；SHA-256：e4f8baa15441fb63cad07220cc5a4de177a1f785d4fe1fed5cfcbf3c3867faf1）
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE（获取于 2026-10-16T06:42:06Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## AndroidHowTo

AndroidHowTo 提供脚本和标注，用于构建将操作指南步骤与 Android 屏幕关联的移动端 UI 动作数据集。

- 目录页面：https://awesomecua.com/zh/resources/github-debymf-generating-android-howto/
- 原始来源：https://github.com/debymf/generating_android_howto
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、数据生成
- 证据核查日期：2026-11-04T13:12:13Z
- ID：github:debymf/generating_android_howto

- 完整记录 JSON：https://awesomecua.com/resources/github-debymf-generating-android-howto/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/debymf/generating_android_howto/HEAD/README.md（获取于 2026-11-04T13:12:13Z；SHA-256：e8c73323ff5bc5cc82583a61dea9686206ded5771235cc52b06b8d58cabad546）

---

## AutoDroid V2 training data

用于微调 AutoDroid V2 的对话格式监督数据；项目文档提供了 ShareGPT 风格的 JSON 配置。

- 目录页面：https://awesomecua.com/zh/resources/url-9a3506ca6ef034adb424/
- 原始来源：https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、模仿学习、手机操作
- 证据核查日期：2026-10-17T09:15:33Z
- ID：url:9a3506ca6ef034adb424

### 范围记录

The public Hub manifest lists AutoDroid-V2-Dataset.json; no training records were downloaded. The card contains only an MIT metadata declaration, so the description and intended training use come from the official repository training guide.

- 完整记录 JSON：https://awesomecua.com/resources/url-9a3506ca6ef034adb424/record.json

### 结构化规格

- 格式：JSON in ShareGPT conversation format
- 模态：text
- 数据划分：未记录
- 监督信号：supervised conversations for AutoDroid-V2 fine-tuning

#### 数量记录

未记录数量。

The card has license metadata only. The project training README supplies formatting and purpose. No sample count or split inventory is inferred from the training configuration.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card license declaration for the released data.
  来源：https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md

### 一手证据

- https://huggingface.co/api/datasets/BlitherBoom/AutoDroid-V2-Dataset（获取于 2026-10-17T09:15:33Z；SHA-256：1b300edfbf44167da71639a56f8ab668dabd33769575fb313ebef5220fc1bddb）
- https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md（获取于 2026-10-17T09:15:33Z；SHA-256：d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17）
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/step_3_training/README.md（获取于 2026-10-17T09:14:58Z；SHA-256：8ba37983a2c2da53d96a52696c07e4bdbea4e987a1a07b557935d614c3be46d2）
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/README_minimal.md（获取于 2026-10-17T09:14:58Z；SHA-256：74508100843f8db6db6bb151e77ac1cc604a6b7ebd16d3225266d73434465136）

---

## bevaya/RICO-ScreenQA-Complex

这是面向 RICO 界面截图的复杂问答测试数据集，包含截图、问题和标准答案。数据卡列出 11,781 个样本。

- 目录页面：https://awesomecua.com/zh/resources/url-b6114625f883ec0fda33/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Complex
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、评测
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:b6114625f883ec0fda33

### 范围记录

The card lists a test split, image and text fields, and a CC BY 4.0 license. The repository file list contains three test Parquet files.

- 完整记录 JSON：https://awesomecua.com/resources/url-b6114625f883ec0fda33/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Complex
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Complex（获取于 2026-11-09T05:05:17Z；SHA-256：0f033c7e26d5245ddb127ec8f6ef83f5e967b6159bfc0425e3174be844847d01）
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Complex（获取于 2026-11-09T05:05:17Z；SHA-256：0f033c7e26d5245ddb127ec8f6ef83f5e967b6159bfc0425e3174be844847d01）

---

## Browser Agent Failure Corpus

Browser Agent Failure Corpus 是一个带版本管理的数据集，收录浏览器智能体的动作失败、执行轨迹和防护机制反例。

- 目录页面：https://awesomecua.com/zh/resources/github-mutantweb-browser-agent-failure-corpus/
- 原始来源：https://github.com/MutantWeb/browser-agent-failure-corpus
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、安全与防护
- 证据核查日期：2026-11-04T14:20:12Z
- ID：github:mutantweb/browser-agent-failure-corpus

- 完整记录 JSON：https://awesomecua.com/resources/github-mutantweb-browser-agent-failure-corpus/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/MutantWeb/browser-agent-failure-corpus/HEAD/README.md（获取于 2026-11-04T14:20:12Z；SHA-256：78d26a8dbaaca6da843cbacb71e271f652f5386831d6a4de1fcadbd16cb28f6a）

---

## CMGUI

包含来自电商、社交媒体等领域 50 多个中文移动应用的 18k 条轨迹、共 98k 步，用于构建面向中文应用的 GUI 智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-ab26f9ef56d651cee587/
- 原始来源：https://huggingface.co/datasets/alibabagroup/CMGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:ab26f9ef56d651cee587

- 完整记录 JSON：https://awesomecua.com/resources/url-ab26f9ef56d651cee587/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/alibabagroup/CMGUI
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/alibabagroup/CMGUI（获取于 2026-10-16T06:38:26Z；SHA-256：aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685）
- https://huggingface.co/datasets/alibabagroup/CMGUI/raw/main/README.md（获取于 2026-10-17T16:10:26Z；SHA-256：6f43b9e5f2c783f91cc3271f51db6a9a521c29f21954a2a30ad0cfa186e1c1b7）
- https://huggingface.co/api/datasets/alibabagroup/CMGUI（获取于 2026-10-16T06:38:26Z；SHA-256：aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685）

---

## Computer Use Large (markov-ai)

从互联网收集的 48,478 段经裁剪且无音频的屏幕录制视频，约 12,300 小时，展示 AutoCAD、Blender、Excel、Photoshop、Salesforce 和 VS Code 的使用；附时长元数据，无操作标签。

- 目录页面：https://awesomecua.com/zh/resources/url-f00b2ed65c517295a6cc/
- 原始来源：https://huggingface.co/datasets/markov-ai/computer-use-large
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：视频、数据生成
- 证据核查日期：2026-10-18T15:51:07Z
- ID：url:f00b2ed65c517295a6cc

### 范围记录

The card says the videos were sourced from the internet, trimmed to screen-recording segments and stripped of audio, and are meant for training and evaluating computer-use agents. Per-folder metadata.jsonl files give file name, category, trimmed duration and segment count only; there are no actions, cursor events or instructions. At Hub revision b50aecce the manifest lists 48,477 MP4 files, one fewer than the card (Excel has 8,110 against 8,111). The repository also holds descriptions.parquet and 48,473 per-video JSON files under descriptions/, beyond the card's documented files; the one inspected file gives the source video's title and channel, transcript text in 10-second windows and a short step description or NO_TASK per window. CC-BY-4.0 is the card's declaration for the videos.

- 完整记录 JSON：https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/record.json

### 结构化规格

- 格式：MP4, JSONL, JSON, Parquet
- 模态：screen-recording video, per-video duration metadata
- 数据划分：train
- 监督信号：unlabeled screen recordings

#### 数量记录

- 48,478 段视频 — all six software categories（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- ≈ 12,300 小时视频 — all six software categories after trimming（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- 6 个软件类别 — AutoCAD, Blender, Excel, Photoshop, Salesforce, VS Code（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- 48,477 个 MP4 文件 — data/ at Hub revision b50aecce（计算得出）（来源：https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9）
- 48,473 个逐视频描述 JSON 文件 — descriptions/ at Hub revision b50aecce（计算得出）（来源：https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9）

File counts come from a script over the pinned Hub manifest; the card's per-category table gives Excel 8,111 videos where the manifest has 8,110 MP4 files. The card leaves the description files undocumented; their content was checked in one file only. Videos, hours, categories and files are different units; these counts are reported separately. Each category is one configuration with a single train split.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Dataset-card metadata and License section declare CC-BY-4.0 for this release; the card says the videos were sourced from the internet.
  来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md

### 一手证据

- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md（获取于 2026-10-18T15:51:07Z；SHA-256：4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78）
- https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9（获取于 2026-10-18T15:50:47Z；SHA-256：3b3f16168be7ff108abb2a9e55d716b1336601d33cb7c6b8b8b3729994f2d791）
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/descriptions/vscode/-2x-5DN-caM_descriptions.json（获取于 2026-10-18T15:50:47Z；SHA-256：50f55d2be263484950dc59bceb4b116a8daaeeb8fb38ee7ab6496a8723c29411）
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md（获取于 2026-10-18T15:51:07Z；SHA-256：4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78）

---

## Computer Use Trajectories (markov-ai)

由使用辅助功能树定位的 Gemini 3 Flash Preview 智能体生成的 160 条成功 OSWorld 轨迹，共 1,378 步，含逐步截图、辅助功能树、pyautogui 操作、响应及运行日志。

- 目录页面：https://awesomecua.com/zh/resources/url-5a073f50270c4f316ce5/
- 原始来源：https://huggingface.co/datasets/markov-ai/computer-use
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成
- 证据核查日期：2026-10-18T11:44:36Z
- ID：url:5a073f50270c4f316ce5

### 范围记录

The Hub API at revision de58c88b reports an ungated repository with 16 Parquet shards for the train split and 313 MP4 files under recordings/<domain>/. The card's 160 rows match its per-domain table, but the recording folders hold 313 files with a different domain mix, so some recordings may not belong to a published row; this was not checked. Every row has score 1.0 because only fully successful runs were kept; the set samples successful runs. The card credits a 'ComputerRL' evaluation framework at github.com/anthropics/ComputerRL, which the GitHub API did not resolve on 2026-10-18. The card declares Apache-2.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-5a073f50270c4f316ce5/record.json

### 结构化规格

- 格式：Parquet, MP4
- 模态：screenshots, accessibility trees, task instructions, pyautogui actions, model responses, execution logs, screen recordings
- 数据划分：train
- 监督信号：successful agent trajectories

#### 数量记录

- 160 条轨迹 — train split (one row per task trajectory)（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 1,378 步 — all 160 trajectories（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 10 个应用领域 — train split（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 313 个 MP4 录制文件 — recordings/ at revision de58c88b（计算得出）（来源：https://huggingface.co/api/datasets/markov-ai/computer-use）

Rows are agent runs filtered to score 1.0. Step and row counts are the card's figures. Recording files were counted from the Hub manifest; the recording-file and row counts differ.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md（获取于 2026-10-18T11:44:36Z；SHA-256：f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381）
- https://huggingface.co/api/datasets/markov-ai/computer-use（获取于 2026-10-18T11:44:36Z；SHA-256：73c4ea92c82983d3bc5ac6b8565f199c33f52f4206e5203502d0bf817b5b02cd）
- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md（获取于 2026-10-18T11:44:36Z；SHA-256：f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381）

---

## CUA Speedrun results

收录 CUA Speedrun 在 OSWorld 子集、CUA-World 和 MyPCBench 上评估计算机使用模型的轨迹归档及逐任务结果，含验证器分数、实测任务耗时和记录或估算的成本。

- 目录页面：https://awesomecua.com/zh/resources/url-099451a33699510476df/
- 原始来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、效率、可观测性
- 证据核查日期：2026-10-18T12:32:49Z
- ID：url:099451a33699510476df

### 范围记录

The publishing account is anonymous (anonymousmypcbench). The card names the benchmark sets used by CUA Speedrun but cites no paper, and neither the cua-speedrun paper, its project page nor its GitHub README links this repository, so no relation to the paper is asserted. Scores, task times and costs are the publisher's measurements; several costs are API-equivalent token estimates, and the card keeps two Kimi K3 OSWorld2 evaluations as billing-affected recordings. Screenshots for five September evaluations were deleted before publication. No license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-099451a33699510476df/record.json

### 结构化规格

- 格式：ZIP run archives, JSON, SHA-256 checksum lists
- 模态：screenshots, agent transcripts, action logs, setup and verifier logs, timing and cost records
- 数据划分：未记录
- 监督信号：verifier task scores, agent-generated trajectories, measured task timings

#### 数量记录

- 97 个 ZIP 运行归档 — repository root at Hub revision 447ff4cd（计算得出）（来源：https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c）
- 14 个逐次评测成本证据 JSON 文件 — COST-*.json files at Hub revision 447ff4cd（计算得出）（来源：https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c）
- 295 个 OSWorld 任务 — Unanimous-295 set, with per-task metrics for nine models in one JSON file（来源报告；来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md）

Archive and cost-file counts come from a script over the pinned Hub file list; the card's tables link 39 of the 97 archives, so one benchmark set uses a subset of the archives. The sets differ in size (295, 50, 52, 26 and 38 tasks) and some tables use different tracks and measurement contracts, which the card says limits comparison across them. Mean scores include verifier partial credit; strict passes use recorded verdicts.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the card metadata nor its text declares a license, and the file list at this revision has no license file, so no data grant is established; agent outputs, screenshots and logged third-party content keep their own terms.
  来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md

### 一手证据

- https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md（获取于 2026-10-18T12:32:49Z；SHA-256：948719ad1839eddc0ccc4e9e8a1de218876d96395522546b77e89f71e5df35a8）
- https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c（获取于 2026-10-18T12:32:16Z；SHA-256：894abd6718d735a5845475c2630f7b5cf8c03a32b1046a9e643ee3f2f9f2f6f2）

---

## DragOn

拖拽定位训练与评估数据，将每条截图指令与起点和终点框配对，涵盖文本高亮、电子表格单元格、幻灯片缩放和滑块。

- 目录页面：https://awesomecua.com/zh/resources/url-b854ff53e497da3a5ad8/
- 原始来源：https://huggingface.co/datasets/Hcompany/DragOn
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:b854ff53e497da3a5ad8

### 范围记录

The card cites a workshop paper titled "DragOn: A Drag-Grounding Benchmark and Training Dataset for GUI Agents" without an arXiv link. arXiv 2606.06322 has a different title, so no paper relation is recorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Hcompany/DragOn
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/Hcompany/DragOn（获取于 2026-10-16T06:38:26Z；SHA-256：08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40）
- https://huggingface.co/datasets/Hcompany/DragOn/raw/main/README.md（获取于 2026-10-17T16:10:54Z；SHA-256：e7ef94cafcfd155961beec373f2f4e727715b7d517a819f52b5407fc2dec4009）
- https://huggingface.co/api/datasets/Hcompany/DragOn（获取于 2026-10-16T06:38:26Z；SHA-256：08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40）

---

## duvo-eye-1-evals

收录多个公开基准逐样本的图形界面定位预测与参考坐标，并附有重新计算结果的脚本。

- 目录页面：https://awesomecua.com/zh/resources/url-dfcb24f23a03e58316cf/
- 原始来源：https://huggingface.co/datasets/duvoai/duvo-eye-1-evals
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、GUI 定位
- 证据核查日期：2026-11-09T06:16:37Z
- ID：url:dfcb24f23a03e58316cf

### 范围记录

The repository lists prediction JSONL files and benchmark result files. The card specifies single-shot inference and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-dfcb24f23a03e58316cf/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/duvoai/duvo-eye-1-evals
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/duvoai/duvo-eye-1-evals（获取于 2026-11-09T06:16:37Z；SHA-256：829964b0175ba2b6f17506222deb90caf8566ef8231e62703539f89a66cca170）
- https://huggingface.co/api/datasets/duvoai/duvo-eye-1-evals（获取于 2026-11-09T06:16:37Z；SHA-256：829964b0175ba2b6f17506222deb90caf8566ef8231e62703539f89a66cca170）

---

## EnvDistraction

EnvDistraction 提供模拟 GUI 环境和评测脚本，用于衡量多模态智能体受环境干扰的程度。

- 目录页面：https://awesomecua.com/zh/resources/github-xbmxb-envdistraction/
- 原始来源：https://github.com/xbmxb/EnvDistraction
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：鲁棒性、安全与防护、评测
- 证据核查日期：2026-11-04T13:12:43Z
- ID：github:xbmxb/envdistraction

- 完整记录 JSON：https://awesomecua.com/resources/github-xbmxb-envdistraction/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xbmxb/EnvDistraction/HEAD/README.md（获取于 2026-11-04T13:12:43Z；SHA-256：fe5af0a4e28c3a635fc1213c8ebd535ade5f9dfba45986d65f16940c28ce36d8）

---

## FedMABench data partitions

FedMABench 联邦训练数据将 AndroidControl 与 AitW 移动端智能体任务记录按应用、类别及步骤或任务轮次差异划分为六组 JSONL 分区；截图须从原始数据重建。

- 目录页面：https://awesomecua.com/zh/resources/url-86b3c2ee65911daf84a8/
- 原始来源：https://huggingface.co/datasets/wwh0411/FedMABench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习
- 证据核查日期：2026-10-18T16:06:17Z
- ID：url:86b3c2ee65911daf84a8

### 范围记录

The Hub manifest at revision 4596a060 holds 41 JSONL partition files in six folders (Basic-AC 15, Category-Level 7, App-Level 5, Basic-AitW 5, Step-Episode 5, ScaleApp 4), plus split JSON files, an overview PDF and .DS_Store files; three folder names end with a trailing space. Inspected records are episode-level, with an instruction, step sub-instructions, original and converted actions, and image paths on the authors' machine. The FedMABench README says unpacked screenshots are not distributed and gives scripts to rebuild them from AndroidControl and AitW. Neither the card nor the Hub metadata declares a license, so the data license stays unknown. Partitions overlap; these counts are reported separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/record.json

### 结构化规格

- 格式：JSONL, JSON
- 模态：text instructions, actions, screenshot paths (images not included)
- 数据划分：federated training partitions, validation sets
- 监督信号：episode instructions, step sub-instructions, action sequences

#### 数量记录

- 6 个数据集系列 — FedMABench data release（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- > 30 个子集 — FedMABench data release（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- > 800 个应用 — apps across five categories（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- 41 个 JSONL 分区文件 — Hub manifest at revision 4596a060（计算得出）（来源：https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b）

A partition file, a task, an episode and a client count are different units. Screenshots are external dependencies that users rebuild from AndroidControl and AitW.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md（获取于 2026-10-18T16:06:17Z；SHA-256：2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc）
- https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b（获取于 2026-10-18T16:05:47Z；SHA-256：e3511f0f47d9a40da0ead5ce2eb49f590c010ed6199be0fe052a852e0fc83edf）
- https://raw.githubusercontent.com/wwh0411/FedMABench/417d8b0006830f423c7d07c213fc57277d75d966/README.md（获取于 2026-10-18T16:05:47Z；SHA-256：b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8）

---

## FiftyOne GUI Grounding Training Set

739 张 GUI 截图，多数为 macOS 浏览器画面；采用基于 COCO4GUI 的 FiftyOne 格式标注交互点、操作类型和逐操作任务描述，用于元素定位与点击预测。

- 目录页面：https://awesomecua.com/zh/resources/url-f0eac3ad813245645492/
- 原始来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T15:34:01Z
- ID：url:f0eac3ad813245645492

### 范围记录

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train, which the Hub now resolves to this repository. Per the card, the dataset curator captured and annotated the screenshots with the GUI annotation tool it links, between July 22 and August 8, 2025, mostly on macOS in Arc and Chrome. It is a small training set; samples.json and metadata.json were read.

- 完整记录 JSON：https://awesomecua.com/resources/url-f0eac3ad813245645492/record.json

### 结构化规格

- 格式：FiftyOne dataset export (samples.json, metadata.json), PNG
- 模态：screenshots, task descriptions, interaction keypoints
- 数据划分：train
- 监督信号：human-placed interaction points, action types, natural-language task descriptions

#### 数量记录

- 739 张已标注的截图 — training set described by the card at revision ec67c2bf（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md）

The Hub manifest at this revision lists 739 PNG files under data/. Computed from samples.json at this revision (26 MB): 2,397 interaction keypoints (1,960 click, 185 hover, 158 select, 48 type, 46 drag) and platform labels of 704 macOS, 23 Mobile and 12 blank. Samples also carry a screenparser_preds detection field that the card does not describe; it is not counted as human annotation.

### 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md

### 一手证据

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md（获取于 2026-10-18T15:34:01Z；SHA-256：d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/revision/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812（获取于 2026-10-18T15:34:01Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/metadata.json（获取于 2026-10-18T15:34:01Z；SHA-256：607b0b21cb543562117e879949cacad745caec12ebadbb5c42010ac3f22898e8）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md（获取于 2026-10-18T15:34:01Z；SHA-256：d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35）
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train（获取于 2026-10-18T15:34:10Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train（获取于 2026-10-18T15:34:10Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）

---

## FiftyOne GUI Grounding Training Set with Synthetic Augmentation

4,036 张 GUI 截图，多为 macOS 浏览器页面，附交互关键点和任务描述；包含 739 张人工标注原图，以及通过 FiftyOne 插件制作的 3,297 张色觉与任务改写变体。

- 目录页面：https://awesomecua.com/zh/resources/url-c10fd1906c2e7ee289ec/
- 原始来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：GUI 定位、数据生成、鲁棒性
- 证据核查日期：2026-10-18T15:59:00Z
- ID：url:c10fd1906c2e7ee289ec

### 范围记录

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic, which the Hub now resolves to this repository. The card describes grayscale, color inversion, six color-vision simulations, resolution scaling and text variants, and says synthetic samples carry a transform_record field. The exported samples at revision 3deedc5d have no such field (metadata.json lists none), and their tags name only three transforms: 1,884 tritanopia, 942 color-inverted and 471 task-description-augmented samples. The 739 originals are tagged 370 train and 369 val, and every synthetic sample is tagged train. Apache-2.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/record.json

### 结构化规格

- 格式：FiftyOne dataset export (samples.json, metadata.json), PNG
- 模态：screenshots, task descriptions, interaction keypoints
- 数据划分：train, val
- 监督信号：human-placed interaction points, action types, natural-language task descriptions, programmatic image and text augmentations

#### 数量记录

- 4,036 个样本 — whole release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 739 张原始已标注截图 — real samples in the release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 3,297 个合成变体样本 — augmented samples in the release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 4,036 个 PNG 文件 — data/ at Hub revision 3deedc5d（计算得出）（来源：https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c）

Computed from samples.json at this revision (15.7 MB, read once): 4,036 samples, of which 739 have plain timestamp file names and 3,297 carry a hash suffix; sample tags give 1,884 tritanopia, 942 color_inverted and 471 task_description_augmented variants, and 370 train plus 369 val originals; 17,916 keypoints in all, counted again on each variant; platform labels 3,721 macOS, 205 Mobile and 110 blank. Variants duplicate the annotations of their source screenshots; sample counts include those repeated annotations. Samples, files and keypoints are different units; these counts are reported separately.

### 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md

### 一手证据

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md（获取于 2026-10-18T15:59:00Z；SHA-256：44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c（获取于 2026-10-18T15:58:38Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/metadata.json（获取于 2026-10-18T15:58:39Z；SHA-256：350cc2918e6a826bfda5f5b5feb9f6f35320d5b7fd06eda1c677e269ee462d07）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md（获取于 2026-10-18T15:59:00Z；SHA-256：44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic（获取于 2026-10-18T15:58:39Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic（获取于 2026-10-18T15:58:39Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）

---

## FingerTip-20K

收录 500+ 个应用中超过 20,000 段人类 Android 操作过程，包含用户上下文和长期使用模式，并设有主动意图预测与个性化执行任务方向。

- 目录页面：https://awesomecua.com/zh/resources/github-tsinghua-fib-lab-fingertip-20k/
- 原始来源：https://github.com/tsinghua-fib-lab/FingerTip-20K
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成
- 证据核查日期：2026-10-16T06:36:02Z
- ID：github:tsinghua-fib-lab/fingertip-20k

- 完整记录 JSON：https://awesomecua.com/resources/github-tsinghua-fib-lab-fingertip-20k/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/tsinghua-fib-lab/FingerTip-20K/HEAD/README.md（获取于 2026-10-16T06:36:02Z；SHA-256：2c67c8b181e7196f3ca1e88888ffc5d6b32afca686a0e5c4353ad3f5af51ff9e）

---

## GTA1 cleaned grounding dataset

GTA1 仓库关联的清洗版 GUI 定位训练数据，主要来自 Aria-UI 和 OS-Atlas；目标框与 OmniParser 检测元素存在差异的样本已被剔除。

- 目录页面：https://awesomecua.com/zh/resources/url-d46306ac1d0a0cce573a/
- 原始来源：https://huggingface.co/datasets/HelloKKMe/grounding_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T12:28:59Z
- ID：url:d46306ac1d0a0cce573a

### 范围记录

Hub revision 5c0836a5 lists the card, inp.json and ten split image archive parts (image.part.aa to image.part.aj); the repository is not gated and has no card metadata. The card describes desktop and web grounding sources and names no paper; the GTA1 repository README links this repository as GTA1's training data and cleaned dataset, which supports the paper relation. Salesforce later published a separate grounding release with a different field schema and more source datasets; this record covers only this upload. The license comes from the GTA1 README.

- 完整记录 JSON：https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/record.json

### 结构化规格

- 格式：JSON (inp.json), split binary image archive
- 模态：GUI screenshots, bounding-box annotations
- 数据划分：training
- 监督信号：instruction-to-bounding-box GUI grounding, OmniParser IoU filtering of annotated boxes

#### 数量记录

未记录数量。

The Hub API lists inp.json (767,769,533 bytes) and ten image archive parts (208,677,206,554 bytes in total); an example count is unrecorded. The filtering step and its OmniParser IoU criterion come from the card and the GTA1 preprocessing code; the card notes that the filter can occasionally remove correct samples and puts such cases below 3% of the data.

### 许可证信息

- 代码：未记录
- 数据：CC-BY-NC-SA-4.0 — https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The GTA1 repository README, which links this Hub repository as GTA1's training and cleaned dataset, states under License that the dataset follows CC BY-NC-SA 4.0 for non-commercial use only. The Hub card declares no license; upstream source images keep their own terms.
  来源：https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md

### 一手证据

- https://huggingface.co/datasets/HelloKKMe/grounding_dataset/raw/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1/README.md（获取于 2026-10-18T12:28:59Z；SHA-256：cae816e6d5696a1122f836235b70a326a7d66a389d078cc48588cf20bd64a518）
- https://huggingface.co/api/datasets/HelloKKMe/grounding_dataset/revision/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1（获取于 2026-10-18T12:27:44Z；SHA-256：74797aa594a98347ac080d446950094ac34076c749e39a6c99ab1a2751896c7f）
- https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md（获取于 2026-10-18T12:27:44Z；SHA-256：16c633cc2e6e457a37f33b410a93c639edf7b55bb2b590e08f20734da7564951）

---

## GUI-360

支持多种界面理解任务的桌面 GUI 轨迹数据。

- 目录页面：https://awesomecua.com/zh/resources/url-0b590d03a3d5103a79e4/
- 原始来源：https://huggingface.co/datasets/vyokky/GUI-360
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:0b590d03a3d5103a79e4

- 完整记录 JSON：https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/vyokky/GUI-360
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/vyokky/GUI-360（获取于 2026-10-16T06:38:26Z；SHA-256：e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd）
- https://huggingface.co/api/datasets/vyokky/GUI-360（获取于 2026-10-16T06:38:26Z；SHA-256：e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd）

---

## GUI-Action Narrator

用于描述 GUI 交互轨迹中操作的资源。

- 目录页面：https://awesomecua.com/zh/resources/github-showlab-gui-action-narrator/
- 原始来源：https://github.com/showlab/GUI-Action-Narrator
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成、视频
- 证据核查日期：2026-10-16T06:40:52Z
- ID：github:showlab/gui-action-narrator

### 范围记录

Original repository URL redirects to showlab/GUI-Narrator.

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-gui-action-narrator/record.json

### 结构化规格

- 格式：未记录
- 模态：GUI video, action captions
- 数据划分：未记录
- 监督信号：GUI action captioning

#### 数量记录

- 4,189 个视频描述样本 — Act2Cap benchmark described in the paper（来源报告；来源：https://arxiv.org/abs/2406.13719）

Captioning samples, unique videos and complete task trajectories are different units.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://github.com/showlab/GUI-Action-Narrator（获取于 2026-10-16T06:40:52Z；SHA-256：379aae1a8890a0c3d3b5999589b8338338cf1ea63883c2b77df678fd3bb367a2）
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50（获取于 2026-10-16T06:31:32Z；SHA-256：b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb）

---

## GUI-CIDER causal knowledge data

已发布的 JSONL 语料，包含为 GUI 智能体中期训练合成的规划与因果知识，由 GUI-CIDER 官方项目直接提供链接。

- 目录页面：https://awesomecua.com/zh/resources/url-d0300db5ba754b1a64fa/
- 原始来源：https://huggingface.co/datasets/wuuuuuz/GUI-CIDER
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、模仿学习、规划
- 证据核查日期：2026-10-17T11:18:20Z
- ID：url:d0300db5ba754b1a64fa

### 范围记录

The official project explicitly links this corpus, and the ungated Hub API lists GUI-CIDER.jsonl. The repository has no README card at the Hub (404); purpose and Android context are therefore supported by the project README and dataset guide, while the API supports only identity/file availability. No sample count, split inventory, or data license was established. The project README’s MIT badge is not transferred to this data artifact.

- 完整记录 JSON：https://awesomecua.com/resources/url-d0300db5ba754b1a64fa/record.json

### 结构化规格

- 格式：JSONL
- 模态：text
- 数据划分：未记录
- 监督信号：synthesized static planning knowledge, synthesized dynamic causal knowledge

#### 数量记录

未记录数量。

Purpose is established by the official project. No sample records were downloaded; count and data-license fields remain unknown.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/README.md（获取于 2026-10-17T11:18:20Z；SHA-256：9a46741bbde1373ed4b87887cdadde98e05ea8795d34efe39fc25d69b4d50213）
- https://huggingface.co/api/datasets/wuuuuuz/GUI-CIDER（获取于 2026-10-17T11:23:07Z；SHA-256：aec6da0e872092d737953f8b4db227867024da10e127cd32d15d05ff95552d45）
- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/data/dataset.md（获取于 2026-10-17T11:24:47Z；SHA-256：bffca456e649a08239f6a1a3be10a7d7c21bcb427e783ba2c304e4b8410d385a）

---

## GUI-Drag

用于学习图形界面中文本拖拽交互的数据。

- 目录页面：https://awesomecua.com/zh/resources/url-aa28e1329a52e341d285/
- 原始来源：https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:aa28e1329a52e341d285

### 范围记录

The card links its paper (arXiv 2601.06031) and code repository (OSU-NLP-Group/GUI-Drag). Neither is a reviewed catalog record yet, so no relation is recorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-aa28e1329a52e341d285/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset（获取于 2026-10-16T06:38:26Z；SHA-256：cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a）
- https://huggingface.co/datasets/osunlp/GUI-Drag-dataset/raw/main/README.md（获取于 2026-10-17T16:10:54Z；SHA-256：907c8a5169c180491ef8c26c9428b2c67bc4e26f472d6423ce3715cbe47f76ef）
- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset（获取于 2026-10-16T06:38:26Z；SHA-256：cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a）

---

## GUI-Libra-81K-SFT

GUI-Libra-81K 的 SFT 版本，以 JSON 标注文件提供网页和 Android 截图上的逐步推理轨迹及坐标定位操作，含完整、无推理和 1,000 样本版本。

- 目录页面：https://awesomecua.com/zh/resources/url-f6e1a7527f9346ed1c1d/
- 原始来源：https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：数据生成、GUI 定位、网页导航、手机操作
- 证据核查日期：2026-10-18T12:32:45Z
- ID：url:f6e1a7527f9346ed1c1d

### 范围记录

The thin card only describes the annotation files and split image archives; the paper link, training role and data format come from the official GUI-Libra repository, whose SFT guide downloads this dataset. Annotations re-annotate screenshots from public sources (Mind2Web, GUIAct web, AITW, AMEX, AndroidControl, GUI-Odyssey, Android in the Zoo). The 81K figure is the repository's.

- 完整记录 JSON：https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/record.json

### 结构化规格

- 格式：JSON, split tar.gz image archives
- 模态：screenshots, instructions, interaction history, reasoning text, actions
- 数据划分：未记录
- 监督信号：step-level reasoning text, demonstrated GUI actions, coordinate-grounded targets

#### 数量记录

- ≈ 81,000 个推理步骤 — GUI-Libra-81K as described by the official repository README（来源报告；来源：https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md）
- 32 个 JSON 标注文件 — data/annotations at revision 05bb2c5f: 8 source subsets, each with full, no-reasoning, 1,000-sample and 1,000-sample no-reasoning variants（计算得出）（来源：https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23）
- 8 组图像归档 — data/images at revision 05bb2c5f, stored as 9 split .tar.gz part files（计算得出）（来源：https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23）

Steps, files and archive groups are different units and are counted separately. Variant files overlap: the 1,000-sample and no-reasoning files are subsets or reformulations of the same source data and share examples.

### 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md

### 一手证据

- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md（获取于 2026-10-18T12:32:45Z；SHA-256：dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd）
- https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23（获取于 2026-10-18T12:32:46Z；SHA-256：ef92cfb5e07d55d121f269e6432e41bd6d0c37077a5ce770d2fd6f67287f1444）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T12:32:46Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/SFT/README.md（获取于 2026-10-18T12:32:46Z；SHA-256：de69ba44d3233547f25f8297edf60300b7a9a7ea261805bacbc00b118d0a08ff）
- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md（获取于 2026-10-18T12:32:45Z；SHA-256：dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd）

---

## GUI-Net-1M

TongUI 从多模态网页教程收集的训练语料，以标注文件和分卷截图归档形式发布，用于 GUI 轨迹监督训练。

- 目录页面：https://awesomecua.com/zh/resources/url-8c9aaafb918aaf8b4e92/
- 原始来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、GUI 定位、模仿学习
- 证据核查日期：2026-10-17T12:30:54Z
- ID：url:8c9aaafb918aaf8b4e92

### 范围记录

The ungated manifest lists JSON annotations and multipart image archives. Training documentation describes roughly one million collected training trajectories from Wikihow, Baidu Experience and GUI videos; this is distinct from larger mixtures that add external datasets. Platform-specific distribution and exact row counts were not established from this release metadata. Apache-2.0 is the publisher dataset declaration, without a grant of additional rights to upstream tutorial content. No image archive or example record was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/record.json

### 结构化规格

- 格式：JSON annotations, multipart image archives
- 模态：text, screenshots
- 数据划分：training collection
- 监督信号：GUI trajectory supervision from multimodal tutorials

#### 数量记录

- ≈ 1,000,000 条训练轨迹 — TongUI-collected GUI-Net-1M data, excluding added external mixtures（来源报告；来源：https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md）

The source reports an approximate trajectory total.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher declaration for this dataset packaging; original web/tutorial materials retain applicable rights.
  来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md

### 一手证据

- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md（获取于 2026-10-17T12:30:54Z；SHA-256：f30a18d1a533b8f71f436dae2ee7369f8971422bd76527e069499c5bba911912）
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-1M（获取于 2026-10-17T12:32:07Z；SHA-256：314a77eb0ba43bedffbe6869601e41aea41993eaca59d86ba346652c853802d2）
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md（获取于 2026-10-17T12:36:55Z；SHA-256：b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e）
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md（获取于 2026-10-17T12:32:07Z；SHA-256：c2df5c3a6dd576ae53f0dc0f72ecab07d93ed034b04336abd2072a6f0d812c64）

---

## GUI-Net-Mini

TongUI 训练混合数据：约 143K 条来自 WikiHow、Baidu Experience 和 GUI 视频的样本，加上重新处理的 AITW、AMEX、GUIAct、Mind2Web、MiniWoB 和 ShowUI 数据，以带截图的定位和导航 JSON 提供。

- 目录页面：https://awesomecua.com/zh/resources/url-0627940da1b988739f75/
- 原始来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页、桌面
- 主题：数据生成、GUI 定位、模仿学习
- 证据核查日期：2026-10-18T15:46:31Z
- ID：url:0627940da1b988739f75

### 范围记录

The card is titled TongUI-143K. The TongUI training docs list this repository beside GUI-Net-1M as 143k TongUI-collected samples plus about 240k from previous work, used for scaling experiments, and their default 3B configuration, which they say reproduces the paper's results, names 13 datasets whose dataset_info.json files are exactly this repository's 13 annotation files. A streaming script over those files counts 143,856 records in the three TongUI-collected files (WikiHow, Baidu Experience, GUI video) and 379,517 in the ten files reprocessed from AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI; the card's 237K 'Other' figure matches the 237,564 records in eight of those ten, leaving out the AMEX element and ShowUI web grounding files (141,953 records). Records are LLaMA-Factory conversations: coordinate-prediction grounding turns, or navigation steps with a thought and a JSON action in a smartphone, computer or website action space depending on the file. Screenshots come as 24 split ZIP parts (about 254 GB in the manifest). Apache-2.0 is the card's declaration; the reprocessed datasets and the tutorial and video content keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-0627940da1b988739f75/record.json

### 结构化规格

- 格式：LLaMA-Factory JSON conversations, multipart ZIP image archive
- 模态：screenshots, instructions, reasoning traces, actions
- 数据划分：training collection
- 监督信号：GUI grounding coordinates, GUI navigation steps with thoughts and actions

#### 数量记录

- ≈ 143,000 个训练样本 — TongUI-collected part, card table（来源报告；来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md）
- ≈ 237,000 个训练样本 — data from other sources, card table（来源报告；来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md）
- 13 个 JSON 标注文件 — Hub manifest at revision 7c1ed0cd（计算得出）（来源：https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12）
- 24 个拆分 ZIP 图像归档分卷 — Hub manifest at revision 7c1ed0cd（计算得出）（来源：https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12）

The card states numbers without a unit; the training docs call them training data. Record counts computed by streaming the 13 annotation files are in the record notes; the card's two figures and the file counts are different populations and units and are counted separately. No validation or test split is published.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md（获取于 2026-10-18T15:46:31Z；SHA-256：5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626）
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12（获取于 2026-10-18T15:46:29Z；SHA-256：c9a580a8e25cc011273aa2f7ea10a6045f10787897c51eed50dd172ea1c3cad7）
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/docs/train.md（获取于 2026-10-18T15:46:29Z；SHA-256：b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e）
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/data/dataset_info.json（获取于 2026-10-18T15:46:29Z；SHA-256：1287032d17f24bf89313569bd210811675a78d0b2fce73824502d23b16f06ad4）
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md（获取于 2026-10-18T15:46:31Z；SHA-256：5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626）

---

## GUI-Xplore

按 Android 应用整理的探索视频，含截图与操作序列、视图层级，以及应用概览、页面分析、操作回忆、序列验证等五类任务的问答对。

- 目录页面：https://awesomecua.com/zh/resources/url-f56dbd8bfac8b0545e07/
- 原始来源：https://huggingface.co/datasets/9211sun/GUI-Xplore
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：视频、手机操作、界面理解、数据生成
- 证据核查日期：2026-10-18T12:29:45Z
- ID：url:f56dbd8bfac8b0545e07

### 范围记录

The paper's arXiv HTML links github.com/921112343/GUI-Xplore, whose README names this Hub dataset as the release; the paper link comes from the repository README. View-hierarchy files use Android uiautomator classes and Android package names, and the paper describes collection with DroidBot and crowd workers on cloud mobile devices. The card's summary line gives 32,569 QA pairs while its split table totals 35,316. The repository README lists the Xplore-Agent model, checkpoints and evaluation scripts as not yet released. Data license is CC-BY-4.0 per card metadata; it does not settle rights in third-party app content.

- 完整记录 JSON：https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/record.json

### 结构化规格

- 格式：MP4, PNG, JPEG, XML, JSON, CSV
- 模态：exploration videos, screenshots, view hierarchies, actions, question-answer pairs
- 数据划分：auto, manual_train, manual_test
- 监督信号：exploration recordings, question-answer annotations, action sequences

#### 数量记录

- 312 个应用 — all splits (207 auto, 85 manual_train, 20 manual_test)（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 34,367 张截图 — all splits（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 41,293 个动作 — all splits（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 15,934 个问答样本 — auto split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 16,744 个问答样本 — manual_train split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 2,638 个问答样本 — manual_test split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- > 115 小时探索视频 — all apps（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 312 段 MP4 探索视频 — files at Hub revision ebac33a0 (207 auto, 85 manual_train, 20 manual_test)（计算得出）（来源：https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da）

Reported counts come from the card's split table. A script over the 15 QA JSON files at revision ebac33a0 counted 15,934 auto, 16,744 manual_train and 2,634 manual_test entries (35,312 in total), so the card's manual_test figure is four higher than the released files. Apps, screenshots, actions, QA samples and video hours are different units and are counted separately.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md（获取于 2026-10-18T12:29:45Z；SHA-256：3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da）
- https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da（获取于 2026-10-18T12:28:52Z；SHA-256：e2346ed137224f040c012a47d46f613facf449ec418a9ecbfecf97c0254d2fa3）
- https://raw.githubusercontent.com/921112343/GUI-Xplore/3e87e22264a587a3b4ff093a0b7e35d76d1cc554/README.md（获取于 2026-10-18T12:28:51Z；SHA-256：596648200fb473192bbab00f7b7e01680ec169c67d6a7ebf7978f299f1f4983d）
- https://arxiv.org/html/2503.17709v1（获取于 2026-10-18T12:29:10Z；SHA-256：b7d8ea43f0db8c7b2432cee39e8bfb262c9c4bfd8a7290c0b50427d8eb1ac3fd）
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/manual_test/data/vh/com_android_documentsui/vh_1724467408.9856646.xml（获取于 2026-10-18T12:28:52Z；SHA-256：03b665dfc0b49e1721676ce9ffc63532c3b1589304fe6f63ac59f690ab61f76e）
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md（获取于 2026-10-18T12:29:45Z；SHA-256：3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da）

---

## GUIMid training data

已发布的 GUI 智能体中期训练混合数据及配套领域数据集，另含后期训练轨迹文件和网页、移动端交互图像归档。

- 目录页面：https://awesomecua.com/zh/resources/url-422010da7a5c845a18f6/
- 原始来源：https://huggingface.co/datasets/hkust-nlp/GUIMid
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：模仿学习、规划、界面理解
- 证据核查日期：2026-10-17T11:23:07Z
- ID：url:422010da7a5c845a18f6

### 范围记录

The public manifest includes GUIMid.json, mavis.tar.gz, GUI_trajectory.json, traj.tar.gz and domain-specific JSON files. The card says image data for some individual domains is still forthcoming and its overview inconsistently says nine tasks while later enumerating seven vision-language plus four language-only domains; no aggregate task/sample count is inferred. Training code remains marked coming soon in the repository. MIT is the publisher dataset declaration, not a relicensing of all upstream content.

- 完整记录 JSON：https://awesomecua.com/resources/url-422010da7a5c845a18f6/record.json

### 结构化规格

- 格式：JSON, tar.gz image archives
- 模态：text, images
- 数据划分：train configurations for named mid-training domains
- 监督信号：mid-training instruction supervision, GUI post-training trajectories

#### 数量记录

未记录数量。

Hub size bands and the inconsistent introductory task count use different units from a verified sample total. Some constituent-domain image packages remain forthcoming.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the released packaging.
  来源：https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md（获取于 2026-10-17T11:23:07Z；SHA-256：1cdf702c819ecf370f4191c6c71fae7b579cfbaf766908b42156964a69eddacc）
- https://huggingface.co/api/datasets/hkust-nlp/GUIMid（获取于 2026-10-17T11:23:07Z；SHA-256：ededa2b3c8f21af8188152b028758c800db76cdbb8461ba82b8574cab375914e）
- https://api.github.com/repos/hkust-nlp/GUIMid（获取于 2026-10-17T11:18:19Z；SHA-256：31b836da66c6907ff9a75ebc7f06da0db67e7d9fe9ca92d0c770f5f15f90a39e）
- https://raw.githubusercontent.com/hkust-nlp/GUIMid/HEAD/README.md（获取于 2026-10-17T11:18:19Z；SHA-256：d9f63a03088c37f7145725c7a182100d1593fceadd26a9bf817d434ca8d6297e）

---

## GUIrilla-Task

macOS 截图与生成的指令及标注元素上的正确点击或输入操作配对，由 GUIrilla 无障碍 API 抓取器采集，训练集与测试集中的应用互不重叠。

- 目录页面：https://awesomecua.com/zh/resources/url-afe8260e6db2617b72ec/
- 原始来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、动作预测、数据生成
- 证据核查日期：2026-10-18T12:27:04Z
- ID：url:afe8260e6db2617b72ec

### 范围记录

Each record holds the full screenshot, a cropped app-window image, the window's accessibility JSON, the element data (bounding box for clicks, insertion location and text for typing) and task/element categories. The card says GPT-4 agents drafted the tasks during crawling, so instructions are model-generated. The data license is CC-BY-NC-4.0 per card metadata and the bundled LICENSE; the separate MacPaw/GUIrilla code repository's MIT license is not transferred to the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-afe8260e6db2617b72ec/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, cropped window images, accessibility trees, instructions, actions
- 数据划分：train, test
- 监督信号：generated task instructions, ground-truth click and type actions, element bounding boxes

#### 数量记录

- 25,606 个示例 — train split at Hub revision ec4853a2（来源报告；来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md）
- 1,565 个示例 — test split at Hub revision ec4853a2（来源报告；来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md）
- 101 个 Parquet 分片 — data/ files at Hub revision ec4853a2 (96 train, 5 test)（计算得出）（来源：https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297）

The card states the splits are application-level disjoint. Example counts come from the card's dataset_info and split table; shard counts were computed from the pinned Hub file list. An example is one screenshot-instruction-action triple; multi-step trajectories use a different unit.

### 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md（获取于 2026-10-18T12:27:04Z；SHA-256：2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658）
- https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297（获取于 2026-10-18T12:26:25Z；SHA-256：bccbc1dd9fd5aae317583d464c9119090984aea910cb8dd6be3cc077d6bbb037）
- https://raw.githubusercontent.com/MacPaw/GUIrilla/15896d8c3158b7c4bbfaafc57582f1a28ff50074/README.md（获取于 2026-10-18T12:26:24Z；SHA-256：9ffc792287271564b8dc841fa9b86f2cfc7d9f1e2b30c0d90aae059329f59273）
- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md（获取于 2026-10-18T12:27:04Z；SHA-256：2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658）

---

## Mobile-GUI-Worldmodel-SFT

这是用于移动界面世界模型训练与评估的数据集。轨迹归档将截图与页面状态文本及动作格式的训练样例配对。

- 目录页面：https://awesomecua.com/zh/resources/url-e041226738f8ea43a878/
- 原始来源：https://huggingface.co/datasets/xwk123/Mobile-GUI-Worldmodel-SFT
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、界面理解、动作预测、世界模型
- 证据核查日期：2026-11-09T05:05:00Z
- ID：url:e041226738f8ea43a878

### 范围记录

The card lists AITZ, AITW, AMEX, AndroidControl, and GUI-Odyssey archives, plus annotation scripts and evaluation assets.

- 完整记录 JSON：https://awesomecua.com/resources/url-e041226738f8ea43a878/record.json

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/xwk123/Mobile-GUI-Worldmodel-SFT
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/xwk123/Mobile-GUI-Worldmodel-SFT（获取于 2026-11-09T05:05:00Z；SHA-256：89de56cb4197c62d153e66997b1001aeb3c2cd76043305567c1369e0badba1f8）
- https://huggingface.co/api/datasets/xwk123/Mobile-GUI-Worldmodel-SFT（获取于 2026-11-09T05:05:00Z；SHA-256：89de56cb4197c62d153e66997b1001aeb3c2cd76043305567c1369e0badba1f8）

---

## Mobile-R1 trajectory sample

Mobile-R1 中文 Android 应用标注轨迹的开放样本：1,007 个任务的各步骤将截图与思路、子任务及点击、滑动、输入或打开等 mobile_use 动作配对。

- 目录页面：https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/
- 原始来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习
- 证据核查日期：2026-10-19T06:56:13Z
- ID：url:114ced4a94d12f384d69

### 范围记录

The card describes this release as an open-sourced sample: the full Mobile-R1 dataset has 24,521 manually annotated instances from 4,635 trajectories, of which 1,007 trajectories on 28 applications are published. Instructions, thoughts and subtasks are in Chinese. Each data.jsonl row carries the app name, instruction, system prompt, screen size and a step list whose entries hold an image filename, thought, subtask, a mobile_use function call and the full model-style response. The card's apache-2.0 declaration covers this release and does not settle rights to the app screenshots.

- 完整记录 JSON：https://awesomecua.com/resources/url-114ced4a94d12f384d69/record.json

### 结构化规格

- 格式：JSONL, PNG images
- 模态：screenshots, instructions, thoughts, subtask descriptions, actions
- 数据划分：未记录
- 监督信号：manually annotated trajectories

#### 数量记录

- 1,007 条轨迹 — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 28 个应用 — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 3,924 个样本（步骤） — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 1,007 行 data.jsonl 数据 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl）
- 3,899 条轨迹步骤条目 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl）
- 3,924 个位于 images/ 下的 PNG 文件 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516）

Counts use different units; these counts are reported separately. The card's 3,924 samples equal the number of PNG files in the manifest, but data.jsonl references 3,899 distinct images, all present, leaving 25 files unreferenced. The rows use 30 non-empty app_name strings, including variant spellings of the same app (B站 and 哔哩哔哩), plus 5 rows with an empty name; the card reports 28 applications. No train/test split is declared.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md（获取于 2026-10-19T06:56:13Z；SHA-256：c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625）
- https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516（获取于 2026-10-19T06:56:14Z；SHA-256：3379e01e9e163c27700a3c11a8647cef1311faad72f740a58d8255ab2342ed98）
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl（获取于 2026-10-19T06:56:15Z；SHA-256：a5af20573ee10ee858ab6b464cc7ed27b964cd6c967993b3711967c3069ebce3）
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md（获取于 2026-10-19T06:56:13Z；SHA-256：c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625）

---

## MONDAY

从教学视频提取的跨平台移动 GUI 轨迹数据集，提供数据处理辅助工具和适用于 Android 及 iOS 数据的评估示例代码。

- 目录页面：https://awesomecua.com/zh/resources/github-runamu-monday/
- 原始来源：https://github.com/runamu/monday
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS、跨平台
- 主题：数据生成、手机操作、视频
- 证据核查日期：2026-10-18T10:59:55Z
- ID：github:runamu/monday

### 范围记录

The retained README marks release of the full data-generation pipeline, training scripts, and model checkpoints as pending. The repository code license covers the repository code.

- 完整记录 JSON：https://awesomecua.com/resources/github-runamu-monday/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md（获取于 2026-10-18T10:59:55Z；SHA-256：cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc）
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE（获取于 2026-10-18T11:03:47Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## MT-Mind2Web

基于 Mind2Web 交互构建的多轮网页导航对话，包含对话轮次、HTML 快照、候选元素及点击、输入、选择操作序列。

- 目录页面：https://awesomecua.com/zh/resources/url-bdfb50330deb97893ce4/
- 原始来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、记忆
- 证据核查日期：2026-10-17T12:34:10Z
- ID：url:bdfb50330deb97893ce4

### 范围记录

The ungated Hub manifest contains train, test-task, test-website and test-subdomain JSON shards plus a candidate-ranking pickle file. Counts distinguish conversation sessions from dialogue turns; neither is a screenshot or action-step count. No pickle or sample data was loaded. The card declares CC-BY-4.0 and identifies the original Mind2Web interactions as its source.

- 完整记录 JSON：https://awesomecua.com/resources/url-bdfb50330deb97893ce4/record.json

### 结构化规格

- 格式：JSON, auxiliary PKL
- 模态：dialogue text, HTML, element candidates, actions
- 数据划分：train, test_task, test_website, test_subdomain
- 监督信号：multi-turn web instruction following, element/action prediction

#### 数量记录

- 600 段对话 — train（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 34 段对话 — test-task（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 42 段对话 — test-website（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 44 段对话 — test-subdomain（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 2,896 轮对话 — train（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 191 轮对话 — test-task（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 218 轮对话 — test-website（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 216 轮对话 — test-subdomain（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）

Conversation, dialogue-turn and action-step units differ. The released file manifest is inspected.

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the multi-turn annotation release.
  来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md

### 一手证据

- https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md（获取于 2026-10-17T12:34:10Z；SHA-256：8685e0a26a06b3339b5c078632a7b0ade1ead40e6b586ef1ff3676414699a4bc）
- https://huggingface.co/api/datasets/magicgh/MT-Mind2Web（获取于 2026-10-17T12:34:10Z；SHA-256：4455e6daf1151694c03b2a1ebd4a7af40b5b079b0568706a1783a0222383bb1d）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）

---

## NNetNav WebArena data

NNetNav 发布的面向 WebArena 的浏览器交互数据，训练文件和测试文件分别提供。

- 目录页面：https://awesomecua.com/zh/resources/url-25a4d0ab29b60250863a/
- 原始来源：https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航
- 证据核查日期：2026-10-16T11:11:53Z
- ID：url:25a4d0ab29b60250863a

### 范围记录

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- 完整记录 JSON：https://awesomecua.com/resources/url-25a4d0ab29b60250863a/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa（获取于 2026-10-16T11:11:53Z；SHA-256：3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb）
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md（获取于 2026-10-16T10:42:34Z；SHA-256：3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3）
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa（获取于 2026-10-16T11:11:53Z；SHA-256：3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb）

---

## OS-Genesis mobile training data

通过逆向任务合成得到的移动端轨迹，分别以 AndroidControl 和 AndroidWorld 训练标注文件发布。

- 目录页面：https://awesomecua.com/zh/resources/url-d3ec5122a2b52fd5ae4b/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-17T04:01:34Z
- ID：url:d3ec5122a2b52fd5ae4b

### 范围记录

The public manifest contains AC/AW JSONL training annotations and a screenshot archive. MIT is declared for the data in its own card, separately from Apache-2.0 declarations on some model checkpoints. The gated web-data release is a separate asset.

- 完整记录 JSON：https://awesomecua.com/resources/url-d3ec5122a2b52fd5ae4b/record.json

### 结构化规格

- 格式：JSONL, ZIP
- 模态：screenshots, text, actions
- 数据划分：AndroidControl training, AndroidWorld training
- 监督信号：mobile action trajectories

#### 数量记录

未记录数量。

AC and AW refer to distinct target training sets; no sample count is inferred from the two JSONL files or ZIP packaging.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-mobile-data（获取于 2026-10-17T04:01:33Z；SHA-256：6a5e0c2baecc2dc8bf4466903798f5ecda07cdac917042bbd4cfbe54d895c11e）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md（获取于 2026-10-17T04:01:34Z；SHA-256：de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170）

---

## OS-Genesis web training data

受访问控制的 OS-Genesis 网页数据版本，含一个反向任务合成训练轨迹 JSONL 文件和截图归档；项目 README 将其列为 WA 检查点的训练数据。

- 目录页面：https://awesomecua.com/zh/resources/url-31768421b4ecd1ad89f7/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Genesis-web-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航、模仿学习
- 证据核查日期：2026-10-18T15:45:46Z
- ID：url:31768421b4ecd1ad89f7

### 范围记录

Access is auto-gated; the Hub API reports MIT in the card metadata for this data release. The manifest at revision 0080190f holds os_genesis_web_training.jsonl and os_genesis_web_screenshots.zip; no record count is asserted. The raw web triples linked by the README on Google Drive and the separate mobile data release are separate assets outside this record.

- 完整记录 JSON：https://awesomecua.com/resources/url-31768421b4ecd1ad89f7/record.json

### 结构化规格

- 格式：JSONL, ZIP
- 模态：screenshots, text, actions
- 数据划分：web training
- 监督信号：web action trajectories

#### 数量记录

未记录数量。

The README pairs this one training file with the 4B, 7B and 8B WA checkpoints; no sample count is inferred from the JSONL file or ZIP packaging.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/OS-Copilot/OS-Genesis-web-data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-web-data（获取于 2026-10-18T15:45:46Z；SHA-256：94c7927766c63a5f70f59faf4b50c0b32163228139ab4a3ef2fad64a3c495a0e）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T15:45:47Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-web-data（获取于 2026-10-18T15:45:46Z；SHA-256：94c7927766c63a5f70f59faf4b50c0b32163228139ab4a3ef2fad64a3c495a0e）

---

## OSWorld file cache (Ubuntu)

OSWorld 的 Ubuntu 任务配置在设置和评估时下载的文件的 Hub 托管副本，从 Google Drive 迁移后按应用和任务 ID 组织。

- 目录页面：https://awesomecua.com/zh/resources/url-c885712b9c69579ac591/
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：评测
- 证据核查日期：2026-10-18T11:46:05Z
- ID：url:c885712b9c69579ac591

### 范围记录

Adjacent: a file host that the curated OSWorld benchmark depends on; this asset hosts benchmark files. OSWorld task JSON (for example os/5c1075ca, which fetches setup.sh and eval.sh) points at this repository. The Hub API at revision 1e112283 reports an ungated repository with 720 files, most of them in application/task-ID folders, plus a fonts archive. The card metadata declares Apache-2.0, while its License section says the files follow the original OSWorld project's terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-c885712b9c69579ac591/record.json

### 结构化规格

- 格式：original application file formats, archives
- 模态：images, documents, spreadsheets, presentations, audio and video, scripts
- 数据划分：未记录
- 监督信号：task setup and evaluation assets

#### 数量记录

- 720 个文件 — Hub manifest at revision 1e112283（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache）
- 262 个应用/任务 ID 文件夹 — Hub manifest at revision 1e112283（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache）

Counts come from the Hub file manifest. Task folder and OSWorld task-definition counts use different units; OSWorld tasks have partial folder coverage here.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md（获取于 2026-10-18T11:46:05Z；SHA-256：23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache（获取于 2026-10-18T11:46:05Z；SHA-256：064fcc8dd91932dccbb0257be254fe5a95b95f369fb3d41ca2c169413cc424cf）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/examples/os/5c1075ca-bb34-46a3-a7a0-029bd7463e79.json（获取于 2026-10-18T11:46:05Z；SHA-256：6b57e8b32c048a252d8076fc280bf029f869e99e2938530ff78087aa7fdce410）
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md（获取于 2026-10-18T11:46:05Z；SHA-256：23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944）

---

## OSWorld-Verified trajectories

收录多种计算机使用智能体在 Ubuntu 上以不同步数预算运行 OSWorld-Verified 的评估轨迹；每个归档含截图、操作、模型推理和逐任务结果，供分析使用。

- 目录页面：https://awesomecua.com/zh/resources/url-2c99f0de2840277abc72/
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测
- 证据核查日期：2026-10-18T12:10:51Z
- ID：url:2c99f0de2840277abc72

### 范围记录

The OSWorld project page says all verified trajectories are published in this dataset. Hub API at revision 5473c39e: open access, 100 run archives (99 zip, one tar.gz) plus a README and root all_result.json and args.json files that belong to a single run. Archive names identify the agent or model and often the step budget. The card's totals (15+ model variants, 1000+ episodes, last updated August 2025) predate later uploads, and it calls training on these runs not recommended. The card declares MIT for the data; outputs of third-party models keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-2c99f0de2840277abc72/record.json

### 结构化规格

- 格式：zip archives, tar.gz archive, JSON
- 模态：screenshots, actions, model reasoning, task results
- 数据划分：未记录
- 监督信号：agent evaluation trajectories

#### 数量记录

- 100 个运行归档 — zip and tar.gz files at revision 5473c39e（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c）

A run archive is one agent configuration evaluated on OSWorld-Verified; task and episode counts use different units. Step budgets in archive names range over 15, 50, 100 and more steps, and several agents have one archive per budget.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md（获取于 2026-10-18T12:10:51Z；SHA-256：3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c（获取于 2026-10-18T12:10:51Z；SHA-256：eec08ba92c8032dd5b978c2a488a27d9193c82be741790da7541fe5c19b96928）
- https://raw.githubusercontent.com/OS-World/OS-World.github.io/62f8466dbe8b4d67c104b5ead3f8271da01aa09d/index.html（获取于 2026-10-18T12:10:52Z；SHA-256：bf37e00ce23e8c5472d485a6eb3b291ffa2de220b44040402516e41cbc48c516）
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md（获取于 2026-10-18T12:10:51Z；SHA-256：3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc）

---

## PixelWeb

PixelWeb 提供 1K、10K 和 100K 规模的网页截图、DOM 数据及元素图像，并附有掩码、轮廓和边界框标注。

- 目录页面：https://awesomecua.com/zh/resources/url-67ae69986d6408fde468/
- 原始来源：https://huggingface.co/datasets/cyberalchemist/PixelWeb
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、GUI 定位、数据生成
- 证据核查日期：2026-11-09T05:05:05Z
- ID：url:67ae69986d6408fde468

### 范围记录

The card describes raw and annotated archives, document naming and element class labels. It declares Apache 2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-67ae69986d6408fde468/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/cyberalchemist/PixelWeb
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/cyberalchemist/PixelWeb（获取于 2026-11-09T05:05:05Z；SHA-256：9ee3b6af76796b0b07da5d1ba31b564f0de190880f18ececa3ca958705bd3763）
- https://huggingface.co/api/datasets/cyberalchemist/PixelWeb（获取于 2026-11-09T05:05:05Z；SHA-256：9ee3b6af76796b0b07da5d1ba31b564f0de190880f18ececa3ca958705bd3763）

---

## PSAI Computer Use Dataset

PSAI Computer Use Dataset 提供 3,167 条人机交互轨迹，包含同步的屏幕视频、输入事件和 DOM/AX 快照。

- 目录页面：https://awesomecua.com/zh/resources/github-anaishowland-computeruse-data-psai/
- 原始来源：https://github.com/anaishowland/computeruse-data-psai
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：数据生成、模仿学习、录制
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:anaishowland/computeruse-data-psai

- 完整记录 JSON：https://awesomecua.com/resources/github-anaishowland-computeruse-data-psai/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：f5521f8dddc136cae9b84f7ae0f83a535f4611161e95ebc788e21147338140be）
- https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/LICENSE（获取于 2026-11-04T14:07:22Z；SHA-256：242a79eb1cf827de167ccf640900fb55c99326c97ed721105673bf671f7fa06a）

---

## RelationGUI & RelationQA

RelationGUI 提供数据集和训练代码，帮助 GUI 智能体明确理解空间、层级和功能关系。

- 目录页面：https://awesomecua.com/zh/resources/github-malonghui-relationgui/
- 原始来源：https://github.com/malonghui/RelationGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-11-04T14:02:42Z
- ID：github:malonghui/relationgui

- 完整记录 JSON：https://awesomecua.com/resources/github-malonghui-relationgui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/malonghui/RelationGUI/HEAD/README.md（获取于 2026-11-04T14:02:42Z；SHA-256：4c4b459ece453ac59e1eead8392b91e816fcdb89ad3753f338b8d3ac6d4197c6）

---

## Rico

用于 UI 研究的移动应用截图、视图层级和交互轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-0b134b082a7bd507fc6a/
- 原始来源：https://www.interactionmining.org/archive/rico
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:29Z
- ID：url:0b134b082a7bd507fc6a

### 范围记录

The official project page cites the 2017 Rico paper. The project page reports more than 66,000 screens, while the original publication reports more than 72,000. The retained paper and project page report separate screen and app counts; the reason for their difference remains unresolved. App counts also differ: the official project page reports more than 9.3k Android apps and the retained published abstract more than 9.7k. Profile counts use the project-page scope; no reconciliation is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/record.json

### 结构化规格

- 格式：PNG, JSON, CSV, NumPy NPY, GIF
- 模态：screenshots, Android view hierarchies, gesture traces, transition animations, app/UI metadata
- 数据划分：未记录
- 监督信号：UI structure and element properties, recorded human interactions, learned UI layout embeddings

#### 数量记录

- > 66,000 个不重复的 UI 界面 — original Rico downloads described on the project page（来源报告；来源：https://www.interactionmining.org/archive/rico）
- > 9,300 个 Android 应用 — original Rico collection described on the project page（来源报告；来源：https://www.interactionmining.org/archive/rico）
- 10,811 条人工交互追踪记录 — crowd-worker collection before automated exploration（来源报告；来源：https://www.interactionmining.org/archive/rico）

Project-page scope: screenshots paired with augmented view hierarchies, gesture coordinates, layout vectors and metadata. These observations describe screens paired with metadata; action and task totals use different units. The later semantic-annotation download augments the same screen corpus. The retained original paper reports more than 72k screens from more than 9.7k apps while this project page says more than 66k screens and more than 9.3k apps; the difference is unresolved. Profile counts follow the project page; the paper reports a separate screen and app population. No train/validation/test partition or data license is established here; archives were not downloaded.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.interactionmining.org/archive/rico（获取于 2026-10-16T06:38:29Z；SHA-256：daa370b9aae5bce9f5171ea81fa4574c6155e04177af1db138529efd76377f89）
- https://danafergan.com/publications/deka2017rico.pdf（获取于 2026-10-17T10:01:32Z；SHA-256：a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84）

---

## Rico Dataset

Rico Dataset 是 Interaction Mining 展示的移动应用交互与设计数据集，包含来自 5k 款应用的 70k 张屏幕和 10k 条用户操作流程。

- 目录页面：https://awesomecua.com/zh/resources/url-0c845d69c9498dd4e20c/
- 原始来源：https://www.interactionmining.org
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：数据生成、界面设计
- 证据核查日期：2026-11-09T06:16:39Z
- ID：url:0c845d69c9498dd4e20c

### 范围记录

The site describes a platform for collecting, managing, and sharing mobile interaction datasets and invites contributions or self-hosting. It also states that 10k pieces of private user data are protected.

- 完整记录 JSON：https://awesomecua.com/resources/url-0c845d69c9498dd4e20c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.interactionmining.org（获取于 2026-11-09T06:16:39Z；SHA-256：a6f3f922d63153d90b34c56ba443ce305395e2ba7fa5ebe812993b21525dbd1e）

---

## RICO Semantics

RICO Semantics 提供针对 RICO 移动端屏幕的 500,000 条人工标注，涵盖图标形状、语义角色和文本元素关联。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-rico-semantics/
- 原始来源：https://github.com/google-research-datasets/rico_semantics
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、GUI 定位、数据生成
- 证据核查日期：2026-11-04T13:12:16Z
- ID：github:google-research-datasets/rico_semantics

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-rico-semantics/record.json

### 许可证信息

- 代码：CC-BY-SA-4.0 — https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/README.md（获取于 2026-11-04T13:12:16Z；SHA-256：444a35d65f55407ffb931c1138e984374833990aa7180f029e2228c2f820112b）
- https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/LICENSE（获取于 2026-11-04T13:22:34Z；SHA-256：71a43a169b52bb1b39510b65ec5b43b4bbb59196d449a835fe58b50af6a72742）

---

## RICO-SCA

一套移动界面数据集，将截图、控件边界框、合成描述和视图层级配对，用于屏幕理解与界面定位。

- 目录页面：https://awesomecua.com/zh/resources/url-72f05843df9bd7ea35af/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-SCA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-11-09T05:04:57Z
- ID：url:72f05843df9bd7ea35af

### 范围记录

The card lists a train split with 71,350 examples and declares Apache-2.0 licensing. It describes the release as a SeeClick cache of data generated with the RICO SCA procedure.

- 完整记录 JSON：https://awesomecua.com/resources/url-72f05843df9bd7ea35af/record.json

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/bevaya/RICO-SCA
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-SCA（获取于 2026-11-09T05:04:57Z；SHA-256：fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063）
- https://huggingface.co/api/datasets/bevaya/RICO-SCA（获取于 2026-11-09T05:04:57Z；SHA-256：fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063）
- https://huggingface.co/api/datasets/rootsautomation/RICO-SCA（获取于 2026-11-09T05:26:44Z；SHA-256：fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063）
- https://huggingface.co/api/datasets/bevaya/RICO-SCA（获取于 2026-11-09T05:26:44Z；SHA-256：fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063）

---

## RICO-Screen2Words

RICO-Screen2Words 将 Android 应用截图与人工编写的界面摘要、应用元数据和视图层级配对，用于移动界面理解。

- 目录页面：https://awesomecua.com/zh/resources/url-cf7c132c9a988d3a6ec4/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-Screen2Words
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、数据生成、界面设计
- 证据核查日期：2026-11-09T05:05:09Z
- ID：url:cf7c132c9a988d3a6ec4

### 范围记录

The repository provides Parquet files for train, validation and test splits. The card states that the data uses RICO screens and declares a CC-BY-4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-cf7c132c9a988d3a6ec4/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-Screen2Words
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-Screen2Words（获取于 2026-11-09T05:05:09Z；SHA-256：3b489e1ada913728c95de1a46c264eff62dd8a36303efe797b8647696881d657）
- https://huggingface.co/api/datasets/bevaya/RICO-Screen2Words（获取于 2026-11-09T05:05:09Z；SHA-256：3b489e1ada913728c95de1a46c264eff62dd8a36303efe797b8647696881d657）

---

## RICO-ScreenAnnotation

这是标准化的 Rico 屏幕标注数据集，将移动端截图与界面元素及其位置的文字描述配对，并提供训练、验证和测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-2a4dd75acb6efdeb0e4a/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-ScreenAnnotation
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、GUI 定位、数据生成
- 证据核查日期：2026-11-09T05:05:00Z
- ID：url:2a4dd75acb6efdeb0e4a

### 范围记录

The card lists screen ID, annotation, and image fields and declares a CC-BY-4.0 license. The repository file list includes Parquet files for all three splits.

- 完整记录 JSON：https://awesomecua.com/resources/url-2a4dd75acb6efdeb0e4a/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenAnnotation
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenAnnotation（获取于 2026-11-09T05:05:00Z；SHA-256：3a72b34930d7562051f8d1ef9374129bad2b2b12ad525ef685f4c9d69d90dd0d）
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenAnnotation（获取于 2026-11-09T05:05:00Z；SHA-256：3a72b34930d7562051f8d1ef9374129bad2b2b12ad525ef685f4c9d69d90dd0d）

---

## RICO-ScreenQA

RICO-ScreenQA 提供应用截图问答数据，包含图像、答案文本和界面元素边界框，并划分为训练、验证和测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-bd15fb092ff80643ed97/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-ScreenQA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、评测
- 证据核查日期：2026-11-09T05:05:05Z
- ID：url:bd15fb092ff80643ed97

### 范围记录

The repository lists Parquet files for train, validation, and test splits. The card declares a CC BY 4.0 license and links to the original ScreenQA project.

- 完整记录 JSON：https://awesomecua.com/resources/url-bd15fb092ff80643ed97/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA（获取于 2026-11-09T05:05:05Z；SHA-256：f08afef5a0de2040fde65c5620f9a08c0a7d9a09bf2c833eb838d363cad68bc4）
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA（获取于 2026-11-09T05:05:05Z；SHA-256：f08afef5a0de2040fde65c5620f9a08c0a7d9a09bf2c833eb838d363cad68bc4）

---

## RICO-ScreenQA-Short

基于 RICO 界面图像的屏幕问答数据集，将问题与机器生成的简短答案配对，提供训练、验证和测试划分。

- 目录页面：https://awesomecua.com/zh/resources/url-060c9288c7197c5a188e/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Short
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、数据生成
- 证据核查日期：2026-11-09T05:05:07Z
- ID：url:060c9288c7197c5a188e

### 范围记录

The card lists 68,980 training, 8,618 validation and 8,427 test examples, stored as Parquet files. It declares a CC BY 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-060c9288c7197c5a188e/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Short
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Short（获取于 2026-11-09T05:05:07Z；SHA-256：a73cb0dc80512e613a5dfc328e66f01340a67ccafd0bce382f1b907d45ccc175）
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Short（获取于 2026-11-09T05:05:07Z；SHA-256：a73cb0dc80512e613a5dfc328e66f01340a67ccafd0bce382f1b907d45ccc175）

---

## RICO-WidgetCaptioning

移动界面数据集，将 RICO 截图及控件区域与人工描述配对，并提供视图层级以及训练、验证和测试数据划分。

- 目录页面：https://awesomecua.com/zh/resources/url-013bb9256ca6ad5188be/
- 原始来源：https://huggingface.co/datasets/bevaya/RICO-WidgetCaptioning
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、GUI 定位、数据生成、手机操作
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:013bb9256ca6ad5188be

### 范围记录

The card lists screenshots, bounding boxes, captions, semantic annotations, and app metadata. It declares a CC-BY-4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-013bb9256ca6ad5188be/record.json

### 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-WidgetCaptioning
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/RICO-WidgetCaptioning（获取于 2026-11-09T06:16:33Z；SHA-256：4cb966ead67248ceebf1f744c72438433b92c8d8357edf02002a21e288ab9e6c）
- https://huggingface.co/api/datasets/bevaya/RICO-WidgetCaptioning（获取于 2026-11-09T06:16:33Z；SHA-256：4cb966ead67248ceebf1f744c72438433b92c8d8357edf02002a21e288ab9e6c）

---

## RoTS

公布了用于从策略导致的错误中恢复的 GUI 轨迹合成资源；所查看的仓库标注代码和数据仍在准备发布。

- 目录页面：https://awesomecua.com/zh/resources/github-alibabaresearch-rots/
- 原始来源：https://github.com/AlibabaResearch/RoTS
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成、鲁棒性
- 证据核查日期：2026-10-16T06:36:02Z
- ID：github:alibabaresearch/rots

### 范围记录

The 800k figure describes training samples in the study. The repository code-license declaration covers the repository code.

- 完整记录 JSON：https://awesomecua.com/resources/github-alibabaresearch-rots/record.json

### 结构化规格

- 格式：未记录
- 模态：GUI interaction trajectories
- 数据划分：未记录
- 监督信号：recovery trajectory synthesis

#### 数量记录

- ≈ 800,000 个训练样本 — paper-described synthesis output（来源报告；来源：https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md）

The inspected README marks the dataset and collection pipelines as in preparation. The inspected README marks the dataset and collection pipelines as in preparation; file formats, splits and release-specific data terms remain unknown.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md（获取于 2026-10-16T06:36:02Z；SHA-256：bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244）
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md（获取于 2026-10-16T06:36:02Z；SHA-256：bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244）
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md（获取于 2026-10-16T06:36:02Z；SHA-256：bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244）

---

## Sai on OSWorld v2.1 reference-VM runs

收录 Simular 的 Sai 智能体在 Ubuntu 参考虚拟机中完成 108 项 OSWorld v2.1 任务的 134 次有效运行，含 OSWorld 轨迹、智能体记录、运行框架与评分器日志、记分卡及截图和视频 tar 包。

- 目录页面：https://awesomecua.com/zh/resources/url-a19a076a4808a80f6ac8/
- 原始来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T12:34:54Z
- ID：url:a19a076a4808a80f6ac8

### 范围记录

The card reports agent model anthropic/claude-opus-5 at max thinking effort on a cocoon microVM built from the official OSWorld v2.1 reference image (Ubuntu 22.04.3), and five guest image builds (ref4, ref5, ref7, ref8, ref9) that differ only in environment fixes. A run is clean under the card's own rule: a numeric score, infra ok or proxy_missing, and no disk-full, driver-timeout or forced-zero replay-render failure. Headline scores are the publisher's. Text files are redacted copies (proxy, credentials, per-run GitLab passwords, host names); images and video are unchanged and show masked GitLab login fields and an internal GitLab address in two tasks. The Hub owner simular-ai is the account named Simular, whose site presents Sai as its agent. No license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/record.json

### 结构化规格

- 格式：JSONL, JSON, plain-text logs, TAR media archives
- 模态：screenshots, screen recordings, action trajectories, agent messages and events, harness and grader logs, scores
- 数据划分：未记录
- 监督信号：grader task scores, agent-generated trajectories

#### 数量记录

- 134 次无异常的任务运行 — osworld-v2.1 release as described by the card（来源报告；来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md）
- 134 个含 traj.jsonl 的运行/任务目录 — runs/ at Hub revision abfb5852（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 108 个不重复的 OSWorld v2.1 任务 — runs/ at Hub revision abfb5852（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 18 个批次目录 — runs/ at Hub revision abfb5852（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 134 个按运行划分的媒体 TAR 归档 — media/ at Hub revision abfb5852（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）

Computed counts come from a script over the pinned Hub file list. A run is one task execution; some tasks ran more than once, so 134 run directories cover 108 tasks, grouped under 18 batch directories. Card headline: 0.7731 mean over tasks of each task's mean clean score (first clean run 0.7674, best 0.7938), from the benchmark grader. No task file or media archive was downloaded.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card declares no license in its metadata or text, and the file list at this revision has no license file, so no data grant is established; agent outputs and captured third-party content keep their own terms.
  来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md

### 一手证据

- https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md（获取于 2026-10-18T12:34:54Z；SHA-256：d11edc15df8bb33c7ef2a49772985166f6fb37107e5e36334653c95108246a12）
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658（获取于 2026-10-18T12:33:58Z；SHA-256：de6231347f32cc04143d47778d616ef03fc6a6d49ebb69b7992a1f95fc7e92ec）

---

## Sai OSWorld-V2 benchmark runs

收录 Simular 的 Sai 计算机使用智能体两次完整的 108 任务 OSWorld-V2 运行证据：分数、逐步轨迹、消息记录、评估器和 API 日志及运行清单，不含截图。

- 目录页面：https://awesomecua.com/zh/resources/url-e0180b9651fec04d0308/
- 原始来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T12:27:42Z
- ID：url:e0180b9651fec04d0308

### 范围记录

The card reports run1 (2026-08-12) at a 0.7276 mean score with 28 perfect tasks and run2 (2026-08-20) at 0.7329 with 33, both 108/108 scored with anthropic/claude-opus-5 at max thinking, a 500-step limit and claude-sonnet-4-6 as evaluator and user simulator; these are publisher measurements. The run manifests record an Ubuntu 1920x1080 VM on AWS, screenshot observations, the pyautogui action space, benchmark release osworld-v2-2026.06.24 and a separate grounding model (simular-ui-venus-15-30b-a3b-rtx6000). Each run root's manifest describes its last partial invocation (a one-task backfill for run1, a three-task infrastructure rerun for run2). Superseded attempt directories are kept beside the canonical three-digit task directories. The card names a RUNS.md index that is absent at this revision. The Hub license is `other` with no license text.

- 完整记录 JSON：https://awesomecua.com/resources/url-e0180b9651fec04d0308/record.json

### 结构化规格

- 格式：JSON, JSONL, CSV, plain-text logs, Markdown
- 模态：action trajectories, agent messages and events, runtime and evaluator logs, scores
- 数据划分：未记录
- 监督信号：evaluator task scores, agent-generated trajectories

#### 数量记录

- 2 次完整的基准测试运行（108 个任务） — Hub revision fb621da2（来源报告；来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md）
- 108 个含 traj.jsonl 的规范任务目录 — run1/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 108 个含 traj.jsonl 的规范任务目录 — run2/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 23 个已被取代的尝试目录 — run1/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 4 个已被取代的尝试目录 — run2/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）

Counts come from a script over the pinned Hub file list: a canonical directory has a three-digit task name; suffixed names (_infra_, _hung_, _attempt1 and similar) are superseded attempts that the card keeps as evidence. Screenshots, observation images and recordings were removed by the publisher. Scores come from an LLM evaluator; the run manifests and score tables were read, leaving task files outside this inspection.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card metadata declares only `license: other`, and neither the card nor the file list at this revision contains license text, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md

### 一手证据

- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md（获取于 2026-10-18T12:27:42Z；SHA-256：4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7）
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a（获取于 2026-10-18T12:26:14Z；SHA-256：c71c46888e4f6723aa2f654e2f8256a64f11a56be166aaf05fce9fcd1c012e3d）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run1/run_manifest.json（获取于 2026-10-18T12:26:22Z；SHA-256：72f7d1c318890f190dd8279d8f6a34f2fb2694dd524335fd4b79b87eaafb4410）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run2/run_manifest.json（获取于 2026-10-18T12:26:22Z；SHA-256：2857dfa4d3c3da2058065df7cf476ec07fab866f07a09f8b256e1c19de59d58e）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md（获取于 2026-10-18T12:27:42Z；SHA-256：4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7）

---

## Salesforce Grounding Dataset

GUI 定位数据集，整合 Aria-UI、OmniAct、Widget Caption、UI-Vision 和 OS-Atlas 截图，将目标边界框与操作、外观、功能及组合指令关联，并引用 GTA1。

- 目录页面：https://awesomecua.com/zh/resources/url-1001251b5a7729988118/
- 原始来源：https://huggingface.co/datasets/Salesforce/grounding_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T12:26:45Z
- ID：url:1001251b5a7729988118

### 范围记录

Hub revision 0bf2eb71 lists the card and 75 train Parquet shards; access is open. The card names desktop, web, mobile and operating-system interfaces without naming a mobile OS. Each row keeps a source-dataset tag and the original caption; the card does not describe how the description, function and combined instruction fields were produced, and no rows were downloaded. The card asks users to cite GTA1 and the five source datasets but does not say which GTA1 checkpoint was trained on this release. No license is declared for the compilation itself.

- 完整记录 JSON：https://awesomecua.com/resources/url-1001251b5a7729988118/record.json

### 结构化规格

- 格式：Parquet
- 模态：GUI screenshots, bounding boxes, instructions, element descriptions
- 数据划分：train
- 监督信号：instruction-to-bounding-box GUI grounding

#### 数量记录

- 70,688 个示例 — train split at Hub revision 0bf2eb71（来源报告；来源：https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md）

The count is the card's dataset_info num_examples for the train split. An example is one screenshot-target pair with its instructions. Rows are tagged ariaui, omniact, widget_caption, ui_vision or os_altas by source.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card declares no license for this compilation. It lists the five source datasets' own licenses (Apache-2.0, MIT, CC BY 4.0), which stay with those sources and are not a grant for this release.
  来源：https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md

### 一手证据

- https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md（获取于 2026-10-18T12:26:45Z；SHA-256：503369538fd705e5932f9eaa32b1107874fbb1392ead98c64988d9f1da3c4459）
- https://huggingface.co/api/datasets/Salesforce/grounding_dataset/revision/0bf2eb71734353da92f137f8b26e27c2f75efcfc（获取于 2026-10-18T12:25:55Z；SHA-256：573d7ee66dbb84e8eef9609b7f1ce3913659521a4895fb92c2731b73d7de82ab）

---

## SATraj-OS

桌面计算机使用轨迹包含逐步截图及成功、安全和攻击标签，分为能力运行、安全完成与拒绝运行，以及源自 RiOSWorld 的旧版安全归档。

- 目录页面：https://awesomecua.com/zh/resources/url-73b9b17648ea7af7aa8f/
- 原始来源：https://huggingface.co/datasets/AI45Research/SATraj-OS
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成、安全与防护、模仿学习
- 证据核查日期：2026-10-18T11:15:59Z
- ID：url:73b9b17648ea7af7aa8f

### 范围记录

The ungated Hub repository (revision 74deb768) publishes trajectories.jsonl files with zipped or tarred step screenshots in three configs: Capability (tasks from SCOPE-Gen), Safety-v2 (safe completions and refusals on attack-injected Capability tasks) and a legacy Safety archive generated through RiOSWorld rollouts that keeps risky outcomes. Each record has chat-format messages whose assistant turns hold an action description and a coordinate action, plus success, safety, reward and attack fields. The card declares Apache-2.0 for the data; screenshots show third-party desktop applications whose own terms are not addressed. Thunderbird and VLC capability files are present outside the capability config. The Safactory report (arXiv 2605.06230, v2) describes SATraj-OS as produced with its OSGym environment and reports 10,496 trajectories and 158,196 steps. That paper is not yet in the retained archive, so no paper relation is recorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/record.json

### 结构化规格

- 格式：JSONL, ZIP image archives, tar.gz image archives
- 模态：screenshots, instructions, actions, action descriptions
- 数据划分：capability/train, safety/train, safety_v2/train
- 监督信号：computer-use trajectories, task-success labels, safety-outcome labels, safe-refusal examples

#### 数量记录

- 4,344 条轨迹 — Capability set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 68,140 个交互步骤 — Capability set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 541 条轨迹 — Safety-v2 set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 3,486 个交互步骤 — Safety-v2 set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 6,152 条轨迹 — legacy Safety archive（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 88,496 个交互步骤 — legacy Safety archive（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）

Counts are publisher-reported on the card. The card's headline 4,885 trajectories and 71,626 steps cover Capability plus Safety-v2 only. The Safactory report's 10,496 trajectories match Capability plus the legacy Safety archive, but its 158,196 steps do not equal the card's step totals for those sets. A trajectory is a multi-step episode; screenshot counts use a different unit.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md（获取于 2026-10-18T11:15:59Z；SHA-256：2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977）
- https://huggingface.co/api/datasets/AI45Research/SATraj-OS（获取于 2026-10-18T11:16:00Z；SHA-256：9afd95cd02de90cb4fab79a80810f5858409128e23a19b6913b79571ea5766f5）
- https://arxiv.org/html/2605.06230v2（获取于 2026-10-18T11:16:01Z；SHA-256：f2b9696b13f7052a31f460675dd19e406485816dd284892378c2e281ec3d3d16）
- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md（获取于 2026-10-18T11:15:59Z；SHA-256：2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977）

---

## ScienceBoard evaluation trajectories

ScienceBoard 智能体评估运行记录的归档，按智能体配置及截图、无障碍树或标记集观察模式分别组织。

- 目录页面：https://awesomecua.com/zh/resources/url-4784f63cd7117f64a2a3/
- 原始来源：https://huggingface.co/datasets/OS-Copilot/ScienceBoard-Traj
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、科学工作流、工作流
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:4784f63cd7117f64a2a3

### 范围记录

The manifest exposes six ZIP archives but no README card or data-license declaration. The official project announces evaluation-result trajectories.

- 完整记录 JSON：https://awesomecua.com/resources/url-4784f63cd7117f64a2a3/record.json

### 结构化规格

- 格式：ZIP
- 模态：screenshots, accessibility trees, text
- 数据划分：未记录
- 监督信号：evaluation rollout logs

#### 数量记录

未记录数量。

Observation modes follow publisher archive labels. No count or training-use permission is inferred.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj（获取于 2026-10-17T04:07:19Z；SHA-256：0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577）
- https://huggingface.co/OS-Copilot/ScienceBoard-Env/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：8ee436f67e708bb917992764bc60a017c9db2edb21bdb99356b35c69f73724d7）
- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj（获取于 2026-10-17T04:07:19Z；SHA-256：0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44）

---

## Two-Box Judge GUI Dataset

BAMI 局部纠错模型的训练数据：成对裁剪的 GUI 截图各高亮一个候选框，配有点击指令及自动生成的标签，指出更符合指令的框。

- 目录页面：https://awesomecua.com/zh/resources/url-e7c3d3d49bf977b49996/
- 原始来源：https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Windows、macOS
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T15:35:11Z
- ID：url:e7c3d3d49bf977b49996

### 范围记录

In each sample, the first crop marks the grounding model's initial box and the second the box found after masking and regrounding; both are crops around the candidate. Labels come from IoU of at least 0.5 or a center point inside the ground-truth box, with box 1 chosen when both or neither qualify, so the classes are imbalanced. The card names GUIAct web data and an unnamed Windows/macOS desktop set as sources. The 12,849-sample validation split that the card and dataset_infos.json report is not in the repository at revision a09c08da, although the bundled loader expects a validation folder. Apache-2.0 is the card's data declaration and does not settle rights in the upstream screenshots. Appendix C.3 of the BAMI paper (v1 HTML) describes training its LoRA Qwen3-VL-8B corrector on 128,487 such samples.

- 完整记录 JSON：https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/record.json

### 结构化规格

- 格式：Parquet metadata, PNG images
- 模态：cropped GUI screenshots with a highlighted candidate box, natural-language click commands
- 数据划分：train
- 监督信号：automatically derived choice between two candidate boxes against ground truth

#### 数量记录

- 115,638 个双框样本 — train/metadata.parquet at revision a09c08da (106,350 labeled box 1, 9,288 labeled box 2)（计算得出）（来源：https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet）
- 12,849 个双框样本 — validation split as reported; no validation files at revision a09c08da（来源报告；来源：https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json）
- 128,487 个双框样本 — train plus validation as reported by dataset_infos.json and the card（来源报告；来源：https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json）

Each sample has two image files, so image and sample counts differ. The train metadata has 27,934 distinct command strings; per its original-path columns, 98,369 train rows come from a desktop-named source folder and 17,269 from another folder. The card's per-source figures (about 70K GUIAct and 423K desktop samples) describe the pool before balancing; this release is the balanced set.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md（获取于 2026-10-18T15:35:11Z；SHA-256：962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99）
- https://huggingface.co/api/datasets/THU-BoZhang/two-box-judge-gui/revision/a09c08daed473ad1154414021a3d724d68deeb37（获取于 2026-10-18T15:33:04Z；SHA-256：54e36fe240316a7266800b025607da2d10a4aff3f1bcfc814d956a6f1bee4dd5）
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json（获取于 2026-10-18T15:33:04Z；SHA-256：96259003534aa7368a090f5c71b8da188c0ffbacf5af04ae52f3252b3a189549）
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet（获取于 2026-10-18T15:33:04Z；SHA-256：fabf1525a1e7ad6eac27f6c3c67a24ea1e5881b39cb1e94745a1455558c5ae91）
- https://arxiv.org/html/2605.06664v1（获取于 2026-10-18T15:33:04Z；SHA-256：2b2685f4f68842335f3357e1f1670c00a1183ad7c629cc43fe21bca40eb1ecfb）
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md（获取于 2026-10-18T15:35:11Z；SHA-256：962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99）

---

## UEyes

UEyes 是眼动追踪数据集，记录 62 名参与者观看 1,980 张 UI 截图的情况，截图涵盖网页、桌面界面、移动端应用和海报。

- 目录页面：https://awesomecua.com/zh/resources/github-yuejiang-nj-ueyes-chi2023/
- 原始来源：https://github.com/YueJiang-nj/UEyes-CHI2023
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：界面理解、界面设计
- 证据核查日期：2026-11-04T13:12:46Z
- ID：github:yuejiang-nj/ueyes-chi2023

- 完整记录 JSON：https://awesomecua.com/resources/github-yuejiang-nj-ueyes-chi2023/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/YueJiang-nj/UEyes-CHI2023/HEAD/README.md（获取于 2026-11-04T13:12:46Z；SHA-256：f4320fa807c89af7fc4a7181a0f90053b09156fd2e5d57e0ce5e206233a07c6a）

---

## UI-Ins

将定位指令视为多个推理视角，发布数据流程、训练代码，以及先用合成指令进行 SFT、再经 RL 训练的 UI-Ins-7B 和 32B 模型。

- 目录页面：https://awesomecua.com/zh/resources/github-alibaba-ui-ins/
- 原始来源：https://github.com/alibaba/UI-Ins
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成
- 证据核查日期：2026-10-16T06:36:02Z
- ID：github:alibaba/ui-ins

- 完整记录 JSON：https://awesomecua.com/resources/github-alibaba-ui-ins/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/alibaba/UI-Ins/HEAD/README.md（获取于 2026-10-16T06:36:02Z；SHA-256：e06aedcb1760867470afeb27d4eb4cdde9a3b76b9d55af183047df3c0ae2b71c）

---

## UI-Simulator_android_data

来自 UI-Simulator 的合成 Android 智能体训练数据：每条提示把目标与模拟的 UI 元素列表配对，并给出下一步动作回复，分为无 RAG、基于 RAG 和两个 UI-Simulator-Grow 划分。

- 目录页面：https://awesomecua.com/zh/resources/url-d32dfe60eff4b87c1d05/
- 原始来源：https://huggingface.co/datasets/UI-Simulator/UI-Simulator_android_data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、动作预测
- 证据核查日期：2026-11-10T03:01:14Z
- ID：url:d32dfe60eff4b87c1d05

### 范围记录

Four CSV splits with Arrow copies; license MIT per the card. The RAG-free split has 6,658 rows per the Hub rows API, and the action space covers click, input_text, open_app, scroll, navigate_back and stop.

- 完整记录 JSON：https://awesomecua.com/resources/url-d32dfe60eff4b87c1d05/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/UI-Simulator/UI-Simulator_android_data
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/UI-Simulator/UI-Simulator_android_data（获取于 2026-11-10T03:01:14Z；SHA-256：72dbd84ef07b8fcfa963f0e426a3bc0f222d8a185696ab18da5bbe0a84d8b80e）
- https://huggingface.co/api/datasets/UI-Simulator/UI-Simulator_android_data（获取于 2026-11-10T03:01:14Z；SHA-256：72dbd84ef07b8fcfa963f0e426a3bc0f222d8a185696ab18da5bbe0a84d8b80e）

---

## UICrit

包含区域坐标和 RICO 屏幕引用的移动端界面评语及质量评分，并提供一个由 3 名标注者参与、规模大于原论文数据集的版本。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-uicrit/
- 原始来源：https://github.com/google-research-datasets/uicrit
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、界面设计、评测
- 证据核查日期：2026-10-17T02:02:45Z
- ID：github:google-research-datasets/uicrit

### 范围记录

The published CSV contains critique text, normalized boxes, ratings and RICO IDs; screenshots are referenced through RICO. The README explicitly licenses the work CC-BY-4.0. Its current 1,000-screen, 11,344-critique release differs from the original paper population. The README cites an ACM DOI. Its README establishes mobile interfaces without naming an operating system.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-uicrit/record.json

### 结构化规格

- 格式：CSV
- 模态：text, bounding boxes, quality ratings
- 数据划分：未记录
- 监督信号：design critique, region localization, quality rating

#### 数量记录

- 1,000 个移动端 UI 界面 — current three-annotator release（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md）
- 11,344 条设计评论 — current three-annotator release（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md）

Publisher-reported current release, separate from the smaller original-paper population. Screenshot pixels are obtained through referenced RICO IDs.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md（获取于 2026-10-17T02:02:45Z；SHA-256：345ff7003120f146016741099dd57b9b1a9ffc54ce1fc90f4d16d61e31d379e6）
- https://api.github.com/repos/google-research-datasets/uicrit（获取于 2026-10-17T02:02:45Z；SHA-256：5579bbbc622a2f9fa1f77b509c1ece17af023b8c14b53aa48dcc41288a5852f2）
- https://api.github.com/repos/google-research-datasets/uicrit/contents（获取于 2026-10-17T02:02:45Z；SHA-256：8e790a53de8c40aa14f9e49aebf42b077e6a172a6841f38c7c6851af57b0617a）

---

## UiPad

macOS 界面数据集，收录 63 款应用的 352 个屏幕，提供截图、可用的无障碍树，以及界面元素和点击位置相关问题。

- 目录页面：https://awesomecua.com/zh/resources/url-3ac3ccfb23fe13adf428/
- 原始来源：https://huggingface.co/datasets/MacPaw/uipad
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：界面理解、GUI 定位、评测
- 证据核查日期：2026-11-09T05:05:14Z
- ID：url:3ac3ccfb23fe13adf428

### 范围记录

The card says 68% of screens have JSON accessibility trees and describes numeric, yes/no, text and coordinate questions. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3ac3ccfb23fe13adf428/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/MacPaw/uipad
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/MacPaw/uipad（获取于 2026-11-09T05:05:14Z；SHA-256：9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3）
- https://huggingface.co/api/datasets/MacPaw/uipad（获取于 2026-11-09T05:05:14Z；SHA-256：9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3）
- https://huggingface.co/api/datasets/MacPaw/uipad（获取于 2026-11-09T05:25:51Z；SHA-256：9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3）
- https://huggingface.co/api/datasets/macpaw-research/UiPad（获取于 2026-11-09T05:25:52Z；SHA-256：9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3）

---

## Uni-GUI-Desktop-1

UI-MOPD 训练数据中的桌面轨迹，采集于 OSWorld 环境：涵盖 10 类应用的 2,685 项任务，含逐步截图、推理轨迹、归一化操作和 pyautogui 代码。

- 目录页面：https://awesomecua.com/zh/resources/url-20f7cdee10b0dd70815f/
- 原始来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：数据生成、模仿学习、跨应用
- 证据核查日期：2026-10-18T15:41:52Z
- ID：url:20f7cdee10b0dd70815f

### 范围记录

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; its composition table rounds the self-collected desktop part to about 7K trajectories and 95K steps, so this repository (2,685 trajectories and about 36K steps per the card) holds a portion of it. Per the paper, desktop queries were generated with Kimi-K2.6 from functional points of initialized OSWorld environments, Kimi-K2.6 produced the rollouts and Gemini-3.1-Pro cleaned them; these are model-generated demonstrations. Every folder name ends in an OSWorld task ID: a script over the manifest finds 245 distinct IDs, all present in OSWorld's test_all.json, with up to 19 trajectories each. Two opened task.json files for the same OSWorld task label it 'OSWorld'; one repeats that task's instruction verbatim and the other paraphrases it, so the data overlaps OSWorld's test tasks. Both carry verified: false and task_completed: true, while the card's example shows verified: true; 160 folders also hold a result.txt. Linux is inferred from the paper's use of OSWorld environments and the Linux terminal and /home/user paths in the opened queries. Apache-2.0 is the card's declaration for the data. Only two task.json files and one result.txt were opened.

- 完整记录 JSON：https://awesomecua.com/resources/url-20f7cdee10b0dd70815f/record.json

### 结构化规格

- 格式：per-trajectory folders with task.json and PNG screenshots
- 模态：screenshots, task queries, reasoning traces, actions
- 数据划分：未记录
- 监督信号：teacher-model GUI trajectories cleaned by a filtering pipeline, structured reasoning traces, normalized desktop actions with pyautogui code

#### 数量记录

- 2,685 条轨迹 — Uni-GUI-Desktop-1 card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md）
- ≈ 36,000 步 — Uni-GUI-Desktop-1 card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md）
- 10 个应用类别 — Uni-GUI-Desktop-1 card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md）
- 2,685 个 task.json 轨迹文件 — Hub manifest at revision 92ef5917（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62）
- 38,283 个 PNG 截图文件 — Hub manifest at revision 92ef5917（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62）
- 245 个不重复的 OSWorld 任务 ID（取自轨迹文件夹名称） — Hub manifest at revision 92ef5917, matched against OSWorld test_all.json（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62）

Trajectories, steps, application categories, files and task IDs are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1920x1080 screen. No train/test split is declared.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md（获取于 2026-10-18T15:41:52Z；SHA-256：b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63）
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62（获取于 2026-10-18T15:41:30Z；SHA-256：10e90be7f9d76804ea44a39ea33c0d3d6f121fc2cb23d0d5eb0ffa0e3f92a6e4）
- https://arxiv.org/html/2607.04425v1（获取于 2026-10-18T15:41:30Z；SHA-256：7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/47a8cd34-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json（获取于 2026-10-18T15:41:30Z；SHA-256：f6becd79ec187bd6d6ea2ba3a5521c6b80d6b4b5e5d6efb2e0422ef0f369578a）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/0c267f5e-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json（获取于 2026-10-18T15:41:30Z；SHA-256：7af0ffc4d28e344dd6fddd670121573d027b66b72d420fe49db343b35a68bee5）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/test_all.json（获取于 2026-10-18T15:41:30Z；SHA-256：9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md（获取于 2026-10-18T15:41:52Z；SHA-256：b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63）

---

## Uni-GUI-Mobile

UI-MOPD 训练数据中自行采集的手机操作轨迹：覆盖 10 类应用的 871 项任务，每项含逐步截图、推理轨迹、归一化的点击、滑动和输入操作及 adb 命令。

- 目录页面：https://awesomecua.com/zh/resources/url-93278fa5b9e6bd0cbcef/
- 原始来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-18T12:32:23Z
- ID：url:93278fa5b9e6bd0cbcef

### 范围记录

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; this repository is the self-collected mobile part (the paper's composition table rounds it to about 1K trajectories and 17K steps, the card reports about 14K steps). Per the paper, teacher models produced the rollouts, an automatic judge kept only successful ones, and reasoning traces were rewritten into one format. The card says only 'mobile'; Android is inferred from the adb commands in its step records and the paper's use of AndroidWorld and MobileWorld environments for mobile queries. Apache-2.0 is the card's declaration for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/record.json

### 结构化规格

- 格式：per-trajectory folders with task.json and PNG screenshots
- 模态：screenshots, task queries, reasoning traces, actions
- 数据划分：未记录
- 监督信号：teacher-model GUI trajectories filtered by an automatic success judge, structured reasoning traces, normalized mobile actions with adb commands

#### 数量记录

- 871 条轨迹 — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- ≈ 14,000 步 — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- 10 个应用类别 — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- 871 个 task.json 轨迹文件 — Hub manifest at revision 45244387（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838）
- 14,275 个 PNG 截图文件 — Hub manifest at revision 45244387（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838）

Trajectories, steps, app categories and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1080x2400 screen. No train/test split is declared.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md（获取于 2026-10-18T12:32:23Z；SHA-256：5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088）
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838（获取于 2026-10-18T12:32:02Z；SHA-256：b3ae1be79448b6a2901630def28957fe31e4a16da9ed09c0e4d4e1180faef392）
- https://arxiv.org/html/2607.04425v1（获取于 2026-10-18T12:32:02Z；SHA-256：7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md（获取于 2026-10-18T12:32:23Z；SHA-256：5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088）

---

## Uni-GUI-OpenMobile

UI-MOPD 训练数据中通过 AndroidWorld 在 19 款开源应用上采集的 Android 轨迹：共 2,640 项任务，含逐步截图、推理轨迹和归一化的点击、滑动、输入及回答操作。

- 目录页面：https://awesomecua.com/zh/resources/url-66a0adb854eff694965d/
- 原始来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-18T12:34:20Z
- ID：url:66a0adb854eff694965d

### 范围记录

The UI-MOPD paper's Uni-GUI combines self-collected trajectories with cleaned public OpenCUA and OpenMobile (arxiv:2604.15093) trajectories, and its composition table lists a mobile OpenMobile part of about 2.7K trajectories and 35K steps; this repository's name and 2,640 trajectories match that part, though its card describes the data only as collected on open-source apps via AndroidWorld and reports about 25.9K steps. Episode IDs carry split1 to split4 prefixes. Every folder also has a result.json (a sampled one holds the goal and raw per-step model responses with tool calls), and 1,913 folders have a metadata.json. Apache-2.0 is the card's declaration and does not settle rights to the upstream trajectories or app content.

- 完整记录 JSON：https://awesomecua.com/resources/url-66a0adb854eff694965d/record.json

### 结构化规格

- 格式：per-trajectory folders with task.json, result.json and PNG screenshots
- 模态：screenshots, task queries, reasoning traces, actions
- 数据划分：未记录
- 监督信号：agent trajectories cleaned and normalized for supervised training, structured reasoning traces, normalized mobile actions

#### 数量记录

- 2,640 条轨迹 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- ≈ 25,900 步 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- 19 个开源 Android 应用 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- 2,640 个 task.json 轨迹文件 — Hub manifest at revision 774eb20f（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38）
- 34,344 个 PNG 截图文件 — Hub manifest at revision 774eb20f（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38）

Trajectories, steps, apps and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count, and the card's per-app counts sum to 2,640 trajectories. Screenshot files were counted from the manifest. Coordinates are normalized to [0, 1000] on a 1080x2400 screen. No train/test split is declared; the split1 to split4 episode prefixes (727, 603, 793 and 517 trajectories) are not documented as splits.

### 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md（获取于 2026-10-18T12:34:20Z；SHA-256：3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72）
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38（获取于 2026-10-18T12:33:58Z；SHA-256：78a2b80c6ad0d44016c7858c47b6871f4de3cfb880dd18ffff446629b0efd1ae）
- https://arxiv.org/html/2607.04425v1（获取于 2026-10-18T12:32:02Z；SHA-256：7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/split1_1004_ExpenseAddMultipleFromGallery/result.json（获取于 2026-10-18T12:33:58Z；SHA-256：cd0e9164c57baa4e9d2dc1854337fed09e961cf710ee3a69d52fe1623cca6f9e）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md（获取于 2026-10-18T12:34:20Z；SHA-256：3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72）

---

## VideoCAD data

CAD 屏幕录制数据，配有操作日志和目标模型图像，用于研究精确的界面控制和长时程视觉模仿。

- 目录页面：https://awesomecua.com/zh/resources/url-2b5dead3172c0b70da7e/
- 原始来源：https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/WX8PCK
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、模仿学习、视频
- 证据核查日期：2026-10-17T02:03:20Z
- ID：url:2b5dead3172c0b70da7e

### 范围记录

Dataverse reports a RELEASED version 5.0 with 261 unrestricted files and a CC0-1.0 dataset declaration. Archive counts, video counts and trajectory counts are different units. The author repository documents the action and video formats, and Section 3 of the v2 paper identifies the recorded Onshape browser interface. No archives or training samples were downloaded; operating-system coverage is unspecified.

- 完整记录 JSON：https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/record.json

### 结构化规格

- 格式：ZIP, MP4, JSON, PNG
- 模态：video, UI action logs, target CAD images
- 数据划分：未记录
- 监督信号：timestamped UI actions, target model images

#### 数量记录

- > 41,000 段视频录像 — VideoCAD published collection（来源报告；来源：https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK）

The reported video total is distinct from the Dataverse package-file count. The exact-version paper identifies the recorded interface as browser-based Onshape.

### 许可证信息

- 代码：未记录
- 数据：CC0 1.0 — https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK
- 文档：未记录
- 权重：未记录

### 一手证据

- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK（获取于 2026-10-17T02:03:20Z；SHA-256：f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007）
- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md（获取于 2026-10-18T12:02:53.536297+00:00；SHA-256：cbb08803922b4b7736979ca0a5fe552b111fcd428fa9317401bc090b14bb4e54）
- https://arxiv.org/html/2505.24838v2（获取于 2026-10-18T12:02:34.311949+00:00；SHA-256：a303d95a811331cd6ee23b0340f1b9ef2dd996835bfbc66656a871ff94eead50）
- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK（获取于 2026-10-17T02:03:20Z；SHA-256：f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007）

---

## VideoCUA

CUA-Suite 的专家桌面操作演示：涵盖 87 款应用约 10,000 项任务，提供 30 fps 屏幕录像及精确到毫秒的鼠标和键盘操作日志。

- 目录页面：https://awesomecua.com/zh/resources/url-78adf6919bdbce42bc24/
- 原始来源：https://huggingface.co/datasets/ServiceNow/VideoCUA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：视频、录制、模仿学习、动作预测、数据生成
- 证据核查日期：2026-10-18T15:36:02Z
- ID：url:78adf6919bdbce42bc24

### 范围记录

At revision 6ecc530d raw_data/ holds one ZIP archive per application, 87 in total and about 26.1 GB. The card describes each archive as task folders with an action_log.json (instruction, platform and timestamped actions) and a 1920x1080 MP4 recording with its metadata; each action carries a groundcua_id that the card says identifies the matching annotated GroundCUA screenshot. Frame extraction into trajectories and LLM-written chain-of-thought steps come from a pipeline in the GroundCUA GitHub repository; this release holds raw recordings and logs as source material. The card names no operating system. The card's metadata declares MIT; its linked LICENSE file is absent from the repository. Task, hour and frame figures are publisher-reported.

- 完整记录 JSON：https://awesomecua.com/resources/url-78adf6919bdbce42bc24/record.json

### 结构化规格

- 格式：ZIP archives of MP4 video and JSON
- 模态：screen recordings, action logs, instructions
- 数据划分：未记录
- 监督信号：human expert task demonstrations, timestamped mouse and keyboard actions, task instructions

#### 数量记录

- ≈ 10,000 个任务 — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- ≈ 55 小时屏幕录像（30 fps） — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- ≈ 6,000,000 帧视频画面 — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- 87 个按应用划分的 ZIP 归档 — raw_data/ at revision 6ecc530d（计算得出）（来源：https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data）

Tasks, hours, frames and archives are different units and are counted separately. The archive count is computed from the Hub tree listing; the card also reports 87 applications. No train/test split is declared.

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md（获取于 2026-10-18T15:36:02Z；SHA-256：41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified（获取于 2026-10-18T15:36:02Z；SHA-256：75b4545d65bfb6a101a4624859802a4384e74eba85aacbf6d3f4e395d22ae3d3）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data（获取于 2026-10-18T15:36:02Z；SHA-256：fdc432015122390eb89b397ab7031b429ace6d56599ae37ef27a809abb05f254）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93（获取于 2026-10-18T15:36:03Z；SHA-256：32ffe76e0b63cd91c5b8f44af39630fc390e725061974acc55514d9b1232e87f）
- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md（获取于 2026-10-18T15:36:02Z；SHA-256：41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778）

---

## VLM-Reasoning-Traces

VLM-Reasoning-Traces 发布模型输出，用于比较基础视觉语言模型与启用思考能力的视觉语言模型在 AndroidControl、ScreenSpot 和 AndroidWorld 上的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-llamatouch-vlm-reasoning-traces/
- 原始来源：https://github.com/LlamaTouch/VLM-Reasoning-Traces
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、评测、规划
- 证据核查日期：2026-11-04T13:12:21Z
- ID：github:llamatouch/vlm-reasoning-traces

- 完整记录 JSON：https://awesomecua.com/resources/github-llamatouch-vlm-reasoning-traces/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/LlamaTouch/VLM-Reasoning-Traces/HEAD/README.md（获取于 2026-11-04T13:12:21Z；SHA-256：ace444c823ceaa6c30a25c946828fcf2be8bec5e4f0ce629db816c3fa1a6e946）

---

## WebEvolver SFT data

两个 JSONL 数据集，用于监督微调 WebEvolver 智能体策略和网页世界模型。

- 目录页面：https://awesomecua.com/zh/resources/url-e126bbd9729ebdaf05ab/
- 原始来源：https://huggingface.co/datasets/CognitiveKernel/WebEvolver
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、世界模型、模仿学习
- 证据核查日期：2026-10-18T04:35:17Z
- ID：url:e126bbd9729ebdaf05ab

### 范围记录

The card and public manifest identify separate policy-model and world-model JSONL files. The inspected card leaves the row total and complete record schema unstated. MIT is the publisher’s data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/record.json

### 结构化规格

- 格式：JSONL
- 模态：未记录
- 数据划分：未记录
- 监督信号：agent-policy supervised fine-tuning, web-world-model supervised fine-tuning

#### 数量记录

未记录数量。

Two purpose-specific files are released: webevolver_policy_sft.jsonl and webevolver_world_model_sft.jsonl. The files serve policy-model and world-model purposes; their split relationship, modality and example count remain unspecified.

### 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md

### 一手证据

- https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：36ccdce12c1b1512ad4b21326c5d0c0379c73e85f0b8150779d43240b54686de）
- https://huggingface.co/api/datasets/CognitiveKernel/WebEvolver（获取于 2026-10-18T04:33:29Z；SHA-256：cbef3f8037405d311ed9fe8aa620ec3734f91c77ca8f4209fbe98167fb33bee8）
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md（获取于 2026-10-18T04:27:14Z；SHA-256：447dfa1e52789f7f3f111e9e0d453fb1f9fd8bf2d7b858f28fbe21a2239b4b2e）

---

## WebPRM checklist-generation data

将网页任务背景、初始观察和操作历史与结构化检查清单及子目标分析配对的数据，用于生成检查清单。

- 目录页面：https://awesomecua.com/zh/resources/url-fcc98b149272bbf31b05/
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：奖励模型、数据生成、网页导航
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:fcc98b149272bbf31b05

### 范围记录

Five public Parquet shards are present. This collection provides checklist-generation supervision and is distinct from the previously cataloged chosen/rejected preference data. The Hub calls its split test; that label is preserved. No data license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-fcc98b149272bbf31b05/record.json

### 结构化规格

- 格式：Parquet
- 模态：screenshots, text, action history
- 数据划分：test
- 监督信号：checklist generation, subgoal analysis

#### 数量记录

- 3,630 行 — Hub split named test（来源报告；来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md）

This is the checklist-generation release. No unique-task count or data permission is inferred.

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation（获取于 2026-10-17T04:01:33Z；SHA-256：2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2）
- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：3693cb307065a6ced63a4789a7f592b5eba0ad6a5ffe1a3caf0649decd5cb6e8）
- https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8（获取于 2026-10-17T02:45:05Z；SHA-256：647d9e7bdad5fe2c03a8cfcd34d93f3b2bf7c1553b517a4a843bc0113fa47456）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation（获取于 2026-10-17T04:01:33Z；SHA-256：2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2）

---

## WebSRC

WebSRC 为基于 HTML 和截图的 Web-Based Structural Reading Comprehension 数据集提供基线模型和处理流水线。

- 目录页面：https://awesomecua.com/zh/resources/github-x-lance-websrc-baseline/
- 原始来源：https://github.com/X-LANCE/WebSRC-Baseline
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、网页导航、评测
- 证据核查日期：2026-11-04T13:12:43Z
- ID：github:x-lance/websrc-baseline

- 完整记录 JSON：https://awesomecua.com/resources/github-x-lance-websrc-baseline/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/README.md（获取于 2026-11-04T13:12:43Z；SHA-256：2de9d5b2bd24a3fe11abe41835d249c9b34427548b38e7f0a805045128f2ea27）
- https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/LICENSE（获取于 2026-11-04T13:22:35Z；SHA-256：611f5fdb5ad94d56abf287230fdefdcd010aa12eb27fcda436ca82dbc9a0de33）

---

## websrc

websrc 是面向网页截图问答的 WebSRC 整理版本，用于理解页面内容与结构；数据包含页面标识、问题、答案和编码图像。

- 目录页面：https://awesomecua.com/zh/resources/url-d768dd5245832bc4b824/
- 原始来源：https://huggingface.co/datasets/bevaya/websrc
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、评测
- 证据核查日期：2026-11-09T05:05:18Z
- ID：url:d768dd5245832bc4b824

### 范围记录

The card lists train and dev splits as Parquet files and says this upload omits HTML, other metadata, and the test split. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-d768dd5245832bc4b824/record.json

### 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/bevaya/websrc
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/bevaya/websrc（获取于 2026-11-09T05:05:18Z；SHA-256：8a5d0d2c9049976c7e500c1098599d3483639b3cd03baa9173661f7f9d82c903）
- https://huggingface.co/api/datasets/bevaya/websrc（获取于 2026-11-09T05:05:18Z；SHA-256：8a5d0d2c9049976c7e500c1098599d3483639b3cd03baa9173661f7f9d82c903）

---

## WebUI

用于 UI 研究的网页截图和界面数据。

- 目录页面：https://awesomecua.com/zh/resources/url-13b9442bcb6a8b984c4f/
- 原始来源：https://huggingface.co/datasets/biglab/webui-all
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:13b9442bcb6a8b984c4f

### 范围记录

The card links the WebUI project's ACM publication (DOI 10.1145/3544548.3581158) and website, so no paper or family relation is recorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/record.json

### 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/biglab/webui-all
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/datasets/biglab/webui-all（获取于 2026-10-16T06:38:26Z；SHA-256：70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a）
- https://huggingface.co/datasets/biglab/webui-all/raw/main/README.md（获取于 2026-10-17T16:10:53Z；SHA-256：93bd04914735f748d687b71597970a79d95ae8636e7ed75d267ebd6954d11a8f）
- https://huggingface.co/api/datasets/biglab/webui-all（获取于 2026-10-16T06:38:26Z；SHA-256：70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a）
