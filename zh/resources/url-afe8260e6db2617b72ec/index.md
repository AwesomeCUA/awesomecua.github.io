# GUIrilla-Task

macOS 截图与生成的指令及标注元素上的正确点击或输入操作配对，由 GUIrilla 无障碍 API 抓取器采集，训练集与测试集中的应用互不重叠。

- 目录页面：https://awesomecua.com/zh/resources/url-afe8260e6db2617b72ec/
- English：https://awesomecua.com/resources/url-afe8260e6db2617b72ec/index.md
- 原始来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、动作预测、数据生成
- 证据核查日期：2026-10-18T12:27:04Z
- ID：url:afe8260e6db2617b72ec

## 范围记录

Each record holds the full screenshot, a cropped app-window image, the window's accessibility JSON, the element data (bounding box for clicks, insertion location and text for typing) and task/element categories. The card says GPT-4 agents drafted the tasks during crawling, so instructions are model-generated. The data license is CC-BY-NC-4.0 per card metadata and the bundled LICENSE; the separate MacPaw/GUIrilla code repository's MIT license is not transferred to the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-afe8260e6db2617b72ec/record.json

## 结构化规格

- 格式：Parquet
- 模态：screenshots, cropped window images, accessibility trees, instructions, actions
- 数据划分：train, test
- 监督信号：generated task instructions, ground-truth click and type actions, element bounding boxes

### 数量记录

- 25,606 个示例 — train split at Hub revision ec4853a2（来源报告；来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md）
- 1,565 个示例 — test split at Hub revision ec4853a2（来源报告；来源：https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md）
- 101 个 Parquet 分片 — data/ files at Hub revision ec4853a2 (96 train, 5 test)（计算得出）（来源：https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297）

The card states the splits are application-level disjoint. Example counts come from the card's dataset_info and split table; shard counts were computed from the pinned Hub file list. An example is one screenshot-instruction-action triple; multi-step trajectories use a different unit.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md（获取于 2026-10-18T12:27:04Z；SHA-256：2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658）
- https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297（获取于 2026-10-18T12:26:25Z；SHA-256：bccbc1dd9fd5aae317583d464c9119090984aea910cb8dd6be3cc077d6bbb037）
- https://raw.githubusercontent.com/MacPaw/GUIrilla/15896d8c3158b7c4bbfaafc57582f1a28ff50074/README.md（获取于 2026-10-18T12:26:24Z；SHA-256：9ffc792287271564b8dc841fa9b86f2cfc7d9f1e2b30c0d90aae059329f59273）
- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md（获取于 2026-10-18T12:27:04Z；SHA-256：2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658）
