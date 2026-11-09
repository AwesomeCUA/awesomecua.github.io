# GUIChat

包含文字丰富的图像和边界框的对话式 GUI 监督数据，按单轮问答和多轮对话组织。

- 目录页面：https://awesomecua.com/zh/resources/url-edf38d43800be8c955ae/
- English：https://awesomecua.com/resources/url-edf38d43800be8c955ae/index.md
- 原始来源：https://huggingface.co/datasets/yiye2023/GUIChat
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:36:01Z
- ID：url:edf38d43800be8c955ae

## 范围记录

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-edf38d43800be8c955ae/record.json

## 结构化规格

- 格式：JSON, Parquet
- 模态：screenshots, text, bounding boxes
- 数据划分：未记录
- 监督信号：single-turn question answering, multi-turn dialogue

### 数量记录

- ≈ 44,000 QA pairs — single-turn portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）
- ≈ 6,000 dialogues — multi-turn portion（来源报告；来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md）

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  来源：https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/datasets/yiye2023/GUIChat（获取于 2026-10-17T04:01:33Z；SHA-256：3ccb4a9ded4f45aa334f0df5dc9a0f8963c645857e8442c46efe1d9cf4a4360b）
- https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7）
