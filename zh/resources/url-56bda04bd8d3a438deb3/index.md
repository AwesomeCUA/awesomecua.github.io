# ScreenRef

GUI 截图及配套的定位指令和目标，包含目标缺失的样例；图像访问按发布方条款受限。

- 目录页面：https://awesomecua.com/zh/resources/url-56bda04bd8d3a438deb3/
- English：https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/index.md
- 原始来源：https://huggingface.co/datasets/PrentisAI/ScreenRef
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、Android、Linux
- 主题：GUI 定位、数据生成、界面理解
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:56bda04bd8d3a438deb3

## 范围记录

The public Hub API reports gated=auto and a Restricted Research-Only declaration. The companion card distinguishes annotations from screenshots and limits reuse. Access terms were inspected as public metadata; no access agreement was accepted or gated files downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/record.json

## 结构化规格

- 格式：Parquet
- 模态：screenshots, text, coordinates
- 数据划分：train
- 监督信号：instruction-to-click grounding, bounding boxes, absent-target abstention

### 数量记录

- 585,981 distinct screenshots — ScreenRef image inventory（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 633,369 annotation rows — full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）
- 22,475 annotation rows — refusal subset of full recipe（来源报告；来源：https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md）

The publisher reports these inventories in the companion annotation card. The refusal subset is included in the full recipe. Screenshot access is gated; no image download or independent corpus recount was performed.

## 许可证信息

- 代码：未记录
- 数据：other — https://huggingface.co/datasets/PrentisAI/ScreenRef
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/PrentisAI/ScreenRef（获取于 2026-10-17T01:48:51Z；SHA-256：634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317）
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f）
- https://huggingface.co/api/datasets/PrentisAI/ScreenRef（获取于 2026-10-17T01:48:51Z；SHA-256：634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317）
