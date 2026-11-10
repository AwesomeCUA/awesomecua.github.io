---
title: "PTA-1 · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-303e1926b8ff4f60e006/
updated: 2026-10-18
type: model
lang: zh-CN
---

# PTA-1

AskUI 基于 Florence-2-base 的定位模型，约有 2.7 亿参数，可根据元素描述返回其在截图中的边界框，面向低延迟的本地计算机和手机自动化。

- 目录页面：https://awesomecua.com/zh/resources/url-303e1926b8ff4f60e006/
- English：https://awesomecua.com/resources/url-303e1926b8ff4f60e006/index.md
- 原始来源：https://huggingface.co/AskUI/PTA-1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面
- 主题：GUI 定位、效率
- 证据核查日期：2026-10-18T15:50:29Z
- ID：url:303e1926b8ff4f60e006

## 范围记录

Inference uses Florence-2's <OPEN_VOCABULARY_DETECTION> task prompt with the element description and the repository's remote code. The card calls its evaluation a first version on 999 samples (333 each from three datasets) scored by click success, marks datasets whose training splits the model saw, and attributes part of its score to data bias; no result was reproduced. MIT is declared on the card for the weights; Florence-2's own terms and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-303e1926b8ff4f60e006/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

## 一手证据

- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md（获取于 2026-10-18T15:50:29Z；SHA-256：f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61）
- https://huggingface.co/api/models/AskUI/PTA-1（获取于 2026-10-18T15:50:30Z；SHA-256：a51d649a22372d609874dc6a512645770f2e785919f1dab23df5ec2476b75ec6）
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/config.json（获取于 2026-10-18T15:50:30Z；SHA-256：74c60cc3088daaed377d9399c3a68577c424394ab4e03ced000bfd28d752938e）
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md（获取于 2026-10-18T15:50:29Z；SHA-256：f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61）
