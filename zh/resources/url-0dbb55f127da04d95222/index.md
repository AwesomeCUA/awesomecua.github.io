---
title: "Wave UI · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-0dbb55f127da04d95222/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Wave UI

包含截图、指令、目标框和 UI 元数据的记录；元数据包括 OCR、来源、元素类型和平台。

- 目录页面：https://awesomecua.com/zh/resources/url-0dbb55f127da04d95222/
- English：https://awesomecua.com/resources/url-0dbb55f127da04d95222/index.md
- 原始来源：https://huggingface.co/datasets/agentsea/wave-ui
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:0dbb55f127da04d95222

## 范围记录

Train, validation and test Parquet files are publicly listed. The compilation license explicitly preserves each image’s original source terms and grants no extra rights to those images. The card exposes a platform column without listing its values, so operating-system coverage remains unspecified.

- 完整记录 JSON：https://awesomecua.com/resources/url-0dbb55f127da04d95222/record.json

## 结构化规格

- 格式：Parquet
- 模态：images, text, bounding boxes, OCR metadata
- 数据划分：train, validation, test
- 监督信号：instruction-to-target boxes

### 数量记录

- 63,530 行 — train split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）
- 7,944 行 — validation split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）
- 7,938 行 — test split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md）

Card-reported row counts and unique-screen counts are different units. The source field is important for the per-image license terms; the compilation does not relicense original images.

## 许可证信息

- 代码：未记录
- 数据：Wave UI Dataset License; per-image source terms retained — https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md
- 文档：未记录
- 权重：未记录

- 数据审核：The compilation expressly does not relicense its images and lists differing source terms. No blanket permissive data license is appropriate.
  来源：https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md

## 一手证据

- https://huggingface.co/api/datasets/agentsea/wave-ui（获取于 2026-10-17T04:01:33Z；SHA-256：76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md（获取于 2026-10-17T04:06:57Z；SHA-256：63c6b3ce6a3d9c21a505865ceed698df2894bcb292590c59686e9477df867942）
- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c）
- https://huggingface.co/api/datasets/agentsea/wave-ui（获取于 2026-10-17T04:01:33Z；SHA-256：76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19）
