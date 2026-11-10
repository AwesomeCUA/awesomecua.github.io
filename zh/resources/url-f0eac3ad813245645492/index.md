# FiftyOne GUI Grounding Training Set

739 张 GUI 截图，多数为 macOS 浏览器画面；采用基于 COCO4GUI 的 FiftyOne 格式标注交互点、操作类型和逐操作任务描述，用于元素定位与点击预测。

- 目录页面：https://awesomecua.com/zh/resources/url-f0eac3ad813245645492/
- English：https://awesomecua.com/resources/url-f0eac3ad813245645492/index.md
- 原始来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T15:34:01Z
- ID：url:f0eac3ad813245645492

## 范围记录

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train, which the Hub now resolves to this repository. Per the card, the dataset curator captured and annotated the screenshots with the GUI annotation tool it links, between July 22 and August 8, 2025, mostly on macOS in Arc and Chrome. It is a small training set; samples.json and metadata.json were read.

- 完整记录 JSON：https://awesomecua.com/resources/url-f0eac3ad813245645492/record.json

## 结构化规格

- 格式：FiftyOne dataset export (samples.json, metadata.json), PNG
- 模态：screenshots, task descriptions, interaction keypoints
- 数据划分：train
- 监督信号：human-placed interaction points, action types, natural-language task descriptions

### 数量记录

- 739 annotated screenshots — training set described by the card at revision ec67c2bf（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md）

The Hub manifest at this revision lists 739 PNG files under data/. Computed from samples.json at this revision (26 MB): 2,397 interaction keypoints (1,960 click, 185 hover, 158 select, 48 type, 46 drag) and platform labels of 704 macOS, 23 Mobile and 12 blank. Samples also carry a screenparser_preds detection field that the card does not describe; it is not counted as human annotation.

## 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md

## 一手证据

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md（获取于 2026-10-18T15:34:01Z；SHA-256：d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/revision/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812（获取于 2026-10-18T15:34:01Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/metadata.json（获取于 2026-10-18T15:34:01Z；SHA-256：607b0b21cb543562117e879949cacad745caec12ebadbb5c42010ac3f22898e8）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md（获取于 2026-10-18T15:34:01Z；SHA-256：d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35）
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train（获取于 2026-10-18T15:34:10Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train（获取于 2026-10-18T15:34:10Z；SHA-256：49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78）
