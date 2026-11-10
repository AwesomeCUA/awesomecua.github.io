---
title: "GUI-Libra-81K-SFT · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-f6e1a7527f9346ed1c1d/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# GUI-Libra-81K-SFT

GUI-Libra-81K 的 SFT 版本，以 JSON 标注文件提供网页和 Android 截图上的逐步推理轨迹及坐标定位操作，含完整、无推理和 1,000 样本版本。

- 目录页面：https://awesomecua.com/zh/resources/url-f6e1a7527f9346ed1c1d/
- English：https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/index.md
- 原始来源：https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：数据生成、GUI 定位、网页导航、手机操作
- 证据核查日期：2026-10-18T12:32:45Z
- ID：url:f6e1a7527f9346ed1c1d

## 范围记录

The thin card only describes the annotation files and split image archives; the paper link, training role and data format come from the official GUI-Libra repository, whose SFT guide downloads this dataset. Annotations re-annotate screenshots from public sources (Mind2Web, GUIAct web, AITW, AMEX, AndroidControl, GUI-Odyssey, Android in the Zoo). The 81K figure is the repository's.

- 完整记录 JSON：https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/record.json

## 结构化规格

- 格式：JSON, split tar.gz image archives
- 模态：screenshots, instructions, interaction history, reasoning text, actions
- 数据划分：未记录
- 监督信号：step-level reasoning text, demonstrated GUI actions, coordinate-grounded targets

### 数量记录

- ≈ 81,000 个推理步骤 — GUI-Libra-81K as described by the official repository README（来源报告；来源：https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md）
- 32 个 JSON 标注文件 — data/annotations at revision 05bb2c5f: 8 source subsets, each with full, no-reasoning, 1,000-sample and 1,000-sample no-reasoning variants（计算得出）（来源：https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23）
- 8 组图像归档 — data/images at revision 05bb2c5f, stored as 9 split .tar.gz part files（计算得出）（来源：https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23）

Steps, files and archive groups are different units and are counted separately. Variant files overlap: the 1,000-sample and no-reasoning files are subsets or reformulations of the same source data and share examples.

## 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md

## 一手证据

- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md（获取于 2026-10-18T12:32:45Z；SHA-256：dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd）
- https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23（获取于 2026-10-18T12:32:46Z；SHA-256：ef92cfb5e07d55d121f269e6432e41bd6d0c37077a5ce770d2fd6f67287f1444）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T12:32:46Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/SFT/README.md（获取于 2026-10-18T12:32:46Z；SHA-256：de69ba44d3233547f25f8297edf60300b7a9a7ea261805bacbc00b118d0a08ff）
- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md（获取于 2026-10-18T12:32:45Z；SHA-256：dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd）
