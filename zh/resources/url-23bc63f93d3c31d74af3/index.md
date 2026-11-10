---
title: "Qwen-GUI checkpoint · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-23bc63f93d3c31d74af3/
updated: 2026-10-18
type: model
lang: zh-CN
---

# Qwen-GUI checkpoint

随 GUICourse 发布、在 GUIAct 和 GUIChat 数据上调优的 Qwen-VL 检查点；数据卡演示将其在 0 至 1000 坐标网格上返回的边界框与点绘制到输入截图上。

- 目录页面：https://awesomecua.com/zh/resources/url-23bc63f93d3c31d74af3/
- English：https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/index.md
- 原始来源：https://huggingface.co/RhapsodyAI/qwen_vl_guidance
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-18T15:43:24Z
- ID：url:23bc63f93d3c31d74af3

## 范围记录

GUICourse's README announces this repository as the Qwen-GUI weights. The card has no prose: its YAML lists GUIChat and GUIAct as datasets and declares Apache-2.0, and its only content is an inference script. config.json gives a QWenLMHeadModel with a 448-pixel visual encoder. The manifest holds one PyTorch weight file plus trainer state. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

## 一手证据

- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance（获取于 2026-10-18T15:43:24Z；SHA-256：c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581）
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md（获取于 2026-10-18T15:43:24Z；SHA-256：d995100b41eaa95f3476df60d95544c4932b2c25d9df7926d77a9fc2741022d6）
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/config.json（获取于 2026-10-18T15:43:25Z；SHA-256：2c9878d68214797ea1ba0602a6360860d4862f4cf9f56b29cb27af781e6afab3）
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md（获取于 2026-10-18T15:43:25Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance（获取于 2026-10-18T15:43:24Z；SHA-256：c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581）
