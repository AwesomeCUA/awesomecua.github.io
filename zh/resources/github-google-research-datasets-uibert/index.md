---
title: "UIBert AppSim and RefExp annotations · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-google-research-datasets-uibert/
updated: 2026-10-17
type: dataset
lang: zh-CN
---

# UIBert AppSim and RefExp annotations

2 个源自 Rico 的 UI 组件检索数据集：AppSim 配对不同屏幕中语义相似的元素，RefExp 将指代表达关联到目标元素。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-uibert/
- English：https://awesomecua.com/resources/github-google-research-datasets-uibert/index.md
- 原始来源：https://github.com/google-research-datasets/uibert
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-10-17T12:30:54Z
- ID：github:google-research-datasets/uibert

## 范围记录

The archived repository retains TFRecord train/dev/test files for AppSim and RefExp. These are annotation and UI-structure records with Rico image identifiers. The README’s 72k figure describes the upstream Rico source. The publisher explicitly assigns CC-BY-4.0 to these datasets.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-uibert/record.json

## 结构化规格

- 格式：TFRecord
- 模态：text, bounding boxes, UI hierarchy metadata, Rico image identifiers
- 数据划分：AppSim train/dev/test, RefExp train/dev/test
- 监督信号：similar UI element retrieval, referring-expression component retrieval

### 数量记录

未记录数量。

Original UI images are retrieved separately by Rico IDs. No release-specific sample count is established.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The README explicitly says the datasets are licensed under CC BY 4.0; original Rico materials keep their source terms.
  来源：https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md

## 一手证据

- https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md（获取于 2026-10-17T12:30:54Z；SHA-256：45d1ca0f5c727cf58b2671dc5579f0628f4d78e07b977a5d8b018295c6fe1f58）
- https://api.github.com/repos/google-research-datasets/uibert（获取于 2026-10-17T12:30:54Z；SHA-256：24a7838d425bdae363a7d5872702996b22068c1f0e47be274fdfbc4b0e20144f）
- https://api.github.com/repos/google-research-datasets/uibert/git/trees/main?recursive=1（获取于 2026-10-17T12:32:05Z；SHA-256：9a6fc19c6b407309943fe645f4addb3d032f153856976c4f8d7a8cfb6d2ffe6b）
- https://interactionmining.org/rico（获取于 2026-10-17T12:36:55Z；SHA-256：f752ebfb2598b7f848d343f428502b28e0f591f27849ab707f14bee398d4eb8d）
