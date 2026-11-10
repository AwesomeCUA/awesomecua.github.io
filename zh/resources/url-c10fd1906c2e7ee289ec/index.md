---
title: "FiftyOne GUI Grounding Training Set… · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-c10fd1906c2e7ee289ec/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# FiftyOne GUI Grounding Training Set with Synthetic Augmentation

4,036 张 GUI 截图，多为 macOS 浏览器页面，附交互关键点和任务描述；包含 739 张人工标注原图，以及通过 FiftyOne 插件制作的 3,297 张色觉与任务改写变体。

- 目录页面：https://awesomecua.com/zh/resources/url-c10fd1906c2e7ee289ec/
- English：https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/index.md
- 原始来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：GUI 定位、数据生成、鲁棒性
- 证据核查日期：2026-10-18T15:59:00Z
- ID：url:c10fd1906c2e7ee289ec

## 范围记录

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic, which the Hub now resolves to this repository. The card describes grayscale, color inversion, six color-vision simulations, resolution scaling and text variants, and says synthetic samples carry a transform_record field. The exported samples at revision 3deedc5d have no such field (metadata.json lists none), and their tags name only three transforms: 1,884 tritanopia, 942 color-inverted and 471 task-description-augmented samples. The 739 originals are tagged 370 train and 369 val, and every synthetic sample is tagged train. Apache-2.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/record.json

## 结构化规格

- 格式：FiftyOne dataset export (samples.json, metadata.json), PNG
- 模态：screenshots, task descriptions, interaction keypoints
- 数据划分：train, val
- 监督信号：human-placed interaction points, action types, natural-language task descriptions, programmatic image and text augmentations

### 数量记录

- 4,036 个样本 — whole release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 739 张原始已标注截图 — real samples in the release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 3,297 个合成变体样本 — augmented samples in the release（来源报告；来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md）
- 4,036 个 PNG 文件 — data/ at Hub revision 3deedc5d（计算得出）（来源：https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c）

Computed from samples.json at this revision (15.7 MB, read once): 4,036 samples, of which 739 have plain timestamp file names and 3,297 carry a hash suffix; sample tags give 1,884 tritanopia, 942 color_inverted and 471 task_description_augmented variants, and 370 train plus 369 val originals; 17,916 keypoints in all, counted again on each variant; platform labels 3,721 macOS, 205 Mobile and 110 blank. Variants duplicate the annotations of their source screenshots; sample counts include those repeated annotations. Samples, files and keypoints are different units; these counts are reported separately.

## 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md

## 一手证据

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md（获取于 2026-10-18T15:59:00Z；SHA-256：44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c（获取于 2026-10-18T15:58:38Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/metadata.json（获取于 2026-10-18T15:58:39Z；SHA-256：350cc2918e6a826bfda5f5b5feb9f6f35320d5b7fd06eda1c677e269ee462d07）
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md（获取于 2026-10-18T15:59:00Z；SHA-256：44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895）
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic（获取于 2026-10-18T15:58:39Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic（获取于 2026-10-18T15:58:39Z；SHA-256：3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60）
