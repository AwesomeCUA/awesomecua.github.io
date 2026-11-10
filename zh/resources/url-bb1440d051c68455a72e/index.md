---
title: "Pix2Struct base (pretrained) · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-bb1440d051c68455a72e/
updated: 2026-10-18
type: model
lang: zh-CN
---

# Pix2Struct base (pretrained)

Pix2Struct 基础规模的预训练检查点，采用 Transformers 格式，通过将遮挡的网页截图解析为简化 HTML 进行学习，仅作为微调起点发布。

- 目录页面：https://awesomecua.com/zh/resources/url-bb1440d051c68455a72e/
- English：https://awesomecua.com/resources/url-bb1440d051c68455a72e/index.md
- 原始来源：https://huggingface.co/google/pix2struct-base
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：界面理解
- 证据核查日期：2026-10-18T16:07:20Z
- ID：url:bb1440d051c68455a72e

## 范围记录

Adjacent: a general visual-language pretraining checkpoint with broader scope than agent or UI-specific fine-tuning. The card calls it the pretrained version of Pix2Struct for fine-tuning only, quotes the paper abstract, shows the T5X-to-Transformers conversion script, and says the weights were contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada. Hub API at revision 4605659e lists model.safetensors and pytorch_model.bin in the Pix2StructForConditionalGeneration architecture, with 282,285,696 F32 parameters reported for the safetensors file; the repository is publicly accessible. The card leaves scores and a link to the Pix2Struct code repository absent, leaving a family relation unrecorded. The card declares Apache-2.0 for the checkpoint; no pretraining data is part of this release.

- 完整记录 JSON：https://awesomecua.com/resources/url-bb1440d051c68455a72e/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md

## 一手证据

- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md（获取于 2026-10-18T16:07:20Z；SHA-256：4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e）
- https://huggingface.co/api/models/google/pix2struct-base/revision/4605659ec5d82c985955ebdea8210f32fe54a682（获取于 2026-10-18T16:07:04Z；SHA-256：bb1962674cf165e80a32f358c4bc2b79714eaa0eb0b79145174e4dbf17d2bad2）
- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md（获取于 2026-10-18T16:07:20Z；SHA-256：4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e）
