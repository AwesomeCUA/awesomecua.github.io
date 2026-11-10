---
title: "MONDAY annotations · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/
updated: 2026-10-17
type: dataset
lang: zh-CN
---

# MONDAY annotations

从视频提取的移动端导航标注，将场景边界、屏幕或元素框与操作标签配对，用于训练和评估 GUI 智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-570654ff67ecefa2b955/
- English：https://awesomecua.com/resources/url-570654ff67ecefa2b955/index.md
- 原始来源：https://huggingface.co/datasets/runamu/MONDAY
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：数据生成、手机操作、视频、模仿学习
- 证据核查日期：2026-10-17T12:32:07Z
- ID：url:570654ff67ecefa2b955

## 范围记录

The ungated Hub publishes four Parquet splits containing video identifiers and annotations. Original videos and extracted screenshots must be obtained separately; the code README explains that consumers download source videos from YouTube. A Windows Mobile unseen-OS test split is documented. The companion code has an Apache-2.0 file, while the data card declares no data license and the repository defers third-party materials to original terms. Training scripts, pretrained checkpoints and the full generation pipeline remain planned updates.

- 完整记录 JSON：https://awesomecua.com/resources/url-570654ff67ecefa2b955/record.json

## 结构化规格

- 格式：Parquet
- 模态：text, timestamps, bounding boxes, action labels
- 数据划分：train, validation, test, test_unseen_os
- 监督信号：video-derived scene and action annotations

### 数量记录

- 19,725 条视频标注记录 — train split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 495 条视频标注记录 — validation split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 100 条视频标注记录 — test split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- 50 条视频标注记录 — test_unseen_os split（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- ≈ 333,000 个检测到的场景 — publisher overview of MONDAY（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）
- ≈ 313,000 个已识别的动作 — publisher overview of MONDAY（来源报告；来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md）

Split counts are video-annotation rows; scene and action totals are rounded publisher reports. Source videos/images are not included in the Hub files.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：No dataset-license declaration in the inspected card; Apache-2.0 applies to companion code and is not transferred to YouTube content or this annotation package.
  来源：https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE

## 一手证据

- https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md（获取于 2026-10-17T12:32:07Z；SHA-256：62a346fd0d328deb5b56a652c8581850b0c8120f5c77e53b33f24b9baf937adb）
- https://huggingface.co/api/datasets/runamu/MONDAY（获取于 2026-10-17T12:32:07Z；SHA-256：f55c319a70c8ff988049363dc8fc266a9f1b1a09b8ac7096ee573f962e8f9492）
- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md（获取于 2026-10-17T12:30:53Z；SHA-256：cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc）
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE（获取于 2026-10-17T12:34:09Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
