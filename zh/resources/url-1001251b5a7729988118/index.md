---
title: "Salesforce Grounding Dataset · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-1001251b5a7729988118/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Salesforce Grounding Dataset

GUI 定位数据集，整合 Aria-UI、OmniAct、Widget Caption、UI-Vision 和 OS-Atlas 截图，将目标边界框与操作、外观、功能及组合指令关联，并引用 GTA1。

- 目录页面：https://awesomecua.com/zh/resources/url-1001251b5a7729988118/
- English：https://awesomecua.com/resources/url-1001251b5a7729988118/index.md
- 原始来源：https://huggingface.co/datasets/Salesforce/grounding_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T12:26:45Z
- ID：url:1001251b5a7729988118

## 范围记录

Hub revision 0bf2eb71 lists the card and 75 train Parquet shards; access is open. The card names desktop, web, mobile and operating-system interfaces without naming a mobile OS. Each row keeps a source-dataset tag and the original caption; the card does not describe how the description, function and combined instruction fields were produced, and no rows were downloaded. The card asks users to cite GTA1 and the five source datasets but does not say which GTA1 checkpoint was trained on this release. No license is declared for the compilation itself.

- 完整记录 JSON：https://awesomecua.com/resources/url-1001251b5a7729988118/record.json

## 结构化规格

- 格式：Parquet
- 模态：GUI screenshots, bounding boxes, instructions, element descriptions
- 数据划分：train
- 监督信号：instruction-to-bounding-box GUI grounding

### 数量记录

- 70,688 个示例 — train split at Hub revision 0bf2eb71（来源报告；来源：https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md）

The count is the card's dataset_info num_examples for the train split. An example is one screenshot-target pair with its instructions. Rows are tagged ariaui, omniact, widget_caption, ui_vision or os_altas by source.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card declares no license for this compilation. It lists the five source datasets' own licenses (Apache-2.0, MIT, CC BY 4.0), which stay with those sources and are not a grant for this release.
  来源：https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md

## 一手证据

- https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md（获取于 2026-10-18T12:26:45Z；SHA-256：503369538fd705e5932f9eaa32b1107874fbb1392ead98c64988d9f1da3c4459）
- https://huggingface.co/api/datasets/Salesforce/grounding_dataset/revision/0bf2eb71734353da92f137f8b26e27c2f75efcfc（获取于 2026-10-18T12:25:55Z；SHA-256：573d7ee66dbb84e8eef9609b7f1ce3913659521a4895fb92c2731b73d7de82ab）
