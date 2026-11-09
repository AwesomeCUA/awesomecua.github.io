# AndroidCode

从移动 GUI 轨迹构建的 HTML 及标注数据，用于 Code2World 训练以操作为条件的 GUI 状态预测。

- 目录页面：https://awesomecua.com/zh/resources/url-cf4d2d45a7314cb16acb/
- English：https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/index.md
- 原始来源：https://huggingface.co/datasets/GD-ML/AndroidCode
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、数据生成、界面理解
- 证据核查日期：2026-10-18T04:27:14Z
- ID：url:cf4d2d45a7314cb16acb

## 范围记录

The Hub card is license-only; semantic description and reported scale come from the official Code2World README. The public manifest contains HTML files, Android-Control train/test JSON files and extraction/loading scripts. The public manifest lists HTML files, Android-Control train/test JSON files and scripts; standalone screenshot image files are absent from that listing, and embedded/reference image packaging is unspecified. MIT is the data-card declaration, not a grant for every upstream source dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/record.json

## 结构化规格

- 格式：HTML, JSON, Python extraction/loading scripts
- 模态：GUI screenshots (described input), GUI actions, HTML
- 数据划分：Android-Control train file, Android-Control test file
- 监督信号：action-conditioned next-state code prediction, generated HTML supervision

### 数量记录

- > 80,000 screen–action pairs — AndroidCode corpus described by Code2World README; the released JSON-row count remains unverified.（来源报告；来源：https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md）

The manifest lists 58,953 HTML files; the >80k reported pairs use a different unit. The reported >80k pairs and the HTML-file inventory have different units. The card supplies neither a sample schema nor a count; archive/image completeness and JSON contents remain unverified.

## 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  来源：https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md

## 一手证据

- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md（获取于 2026-10-18T04:27:14Z；SHA-256：26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777）
- https://huggingface.co/api/datasets/GD-ML/AndroidCode（获取于 2026-10-18T04:33:22Z；SHA-256：5774a3c096264fbba58b7a16587ea65f35628edb9ca39afe8a32c74ec7fd1ce7）
- https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17）
