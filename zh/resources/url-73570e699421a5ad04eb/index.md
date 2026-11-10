---
title: "MiniCPM-GUIDance · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-73570e699421a5ad04eb/
updated: 2026-10-18
type: model
lang: zh-CN
---

# MiniCPM-GUIDance

随 GUICourse 发布的 MiniCPM-V 检查点，使用其 GUIEnv、GUIAct 和 GUIChat 数据微调；模型卡提示涵盖根据任务与操作历史生成下一操作，以及结合定位框进行截图对话。

- 目录页面：https://awesomecua.com/zh/resources/url-73570e699421a5ad04eb/
- English：https://awesomecua.com/resources/url-73570e699421a5ad04eb/index.md
- 原始来源：https://huggingface.co/RhapsodyAI/minicpm-guidance
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-18T15:57:12Z
- ID：url:73570e699421a5ad04eb

## 范围记录

GUICourse's README announces this repository as the MiniCPM-GUI weights with inference code. The card's YAML lists GUIChat, GUIEnv and GUIAct and declares Apache-2.0; its prose gives action and grounding prompt templates and a batch-size-one inference example whose output marks an element with a box. config.json gives MiniCPMVForCausalLM; the base checkpoint remains unspecified in the card. The manifest holds one PyTorch weight file. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-73570e699421a5ad04eb/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

## 一手证据

- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance（获取于 2026-10-18T15:57:12Z；SHA-256：034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9）
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md（获取于 2026-10-18T15:57:11Z；SHA-256：2dfe7d1252e18ad2f107e4d450440ca6217edfde26684c8763f57ec28790a7d2）
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/config.json（获取于 2026-10-18T15:57:11Z；SHA-256：4974d4b6f3eacca89a03a88ec790ff3982ddea01fbbc01e8c37b783521c56044）
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md（获取于 2026-10-18T15:57:11Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance（获取于 2026-10-18T15:57:12Z；SHA-256：034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9）
