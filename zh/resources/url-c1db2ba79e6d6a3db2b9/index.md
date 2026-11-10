---
title: "ScreenRef Annotations · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-c1db2ba79e6d6a3db2b9/
updated: 2026-10-17
type: dataset
lang: zh-CN
---

# ScreenRef Annotations

ScreenRef 的标注文件、任务配置和图像清单；截图存放在单独的受限访问图像仓库中。

- 目录页面：https://awesomecua.com/zh/resources/url-c1db2ba79e6d6a3db2b9/
- English：https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/index.md
- 原始来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Android、Linux
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:c1db2ba79e6d6a3db2b9

## 范围记录

The card declares restricted academic research use and no redistribution. Annotation coordinates use a normalized 1000 by 1000 space. Some source instructions name gestures other than the single-click target; the publisher recommends treating those as location supervision.

- 完整记录 JSON：https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/record.json

## 结构化规格

- 格式：JSONL, JSON task recipes, TSV manifests
- 模态：text, coordinates, image references
- 数据划分：full/train, point/train
- 监督信号：instruction-to-click grounding, bounding boxes, absent-target abstention

### 数量记录

- 633,369 行标注数据 — full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 610,894 行标注数据 — point recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）

The recipes reuse source images and represent related views of the same dataset. This download contains no screenshots. Counts are publisher-reported; rows named for trajectories are independent decision examples.

## 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）
