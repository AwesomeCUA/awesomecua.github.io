# ScreenParse

密集标注渲染网页截图中的可见 UI 元素，提供边界框、55 种元素类别、文本、可交互性和阅读顺序，由自动抓取与过滤流程生成。

- 目录页面：https://awesomecua.com/zh/resources/url-98e8a413ddd670214755/
- English：https://awesomecua.com/resources/url-98e8a413ddd670214755/index.md
- 原始来源：https://huggingface.co/datasets/docling-project/screenparse
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、数据生成、GUI 定位
- 证据核查日期：2026-10-18T12:16:38Z
- ID：url:98e8a413ddd670214755

## 范围记录

The main branch holds the v2 release, which the card describes as using leaf-element annotations, stricter quality filtering and varied viewport resolutions; the first release stays on the repository's v1 branch, outside this record. Labels come from DOM extraction refined by Qwen3-VL-8B-Instruct and VLM-as-a-judge filtering. CC-BY-4.0 is the card's data declaration and does not establish rights to the crawled websites' content.

- 完整记录 JSON：https://awesomecua.com/resources/url-98e8a413ddd670214755/record.json

## 结构化规格

- 格式：Parquet
- 模态：web screenshots, source URLs, element annotations
- 数据划分：train
- 监督信号：UI element bounding boxes, element class labels, element text, interactable flags, reading-order indices

### 数量记录

- 1,447,100 screenshots — ScreenParse v2 train split (main branch)（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 25,575,213 UI element annotations — ScreenParse v2 train split (main branch)（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 55 UI element classes — ScreenParse v2 label set（来源报告；来源：https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md）
- 1,448 Parquet shards — Hub manifest at revision bc0113f9（计算得出；来源：https://huggingface.co/api/datasets/docling-project/screenparse）

Screenshots, element annotations, classes and shards are different units and are counted separately. Screenshot and annotation counts are the card's v2 figures; the shard count is computed from the Hub file manifest.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md（获取于 2026-10-18T12:16:38Z；SHA-256：9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e）
- https://huggingface.co/api/datasets/docling-project/screenparse（获取于 2026-10-18T12:16:38Z；SHA-256：cd1f607be439cef0ed4a47265be47673495964289006ee6cbac63b4cdd507bcb）
- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md（获取于 2026-10-18T12:16:38Z；SHA-256：9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e）
