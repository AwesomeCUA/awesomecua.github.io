# WebSRC v1.0

用于结构化阅读理解的网页片段、问题、答案、HTML、截图和布局元数据。

- 目录页面：https://awesomecua.com/zh/resources/url-e0ba328ae1a643b0a5aa/
- English：https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/index.md
- 原始来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-18T04:35:16Z
- ID：url:e0ba328ae1a643b0a5aa

## 范围记录

Public release includes train+dev and test ZIP packages plus a test-answer JSON file. The v1.0 card’s exact split table differs from the older project-page headline of 0.44M questions/6.5K pages; counts are kept with their sources. This is a static webpage-understanding dataset. CC-BY-4.0 is the data-card declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/record.json

## 结构化规格

- 格式：CSV, HTML, JSON, ZIP packages
- 模态：questions and answers, HTML, screenshots, layout metadata
- 数据划分：train, dev, test
- 监督信号：extractive or yes/no answers, answer DOM-element references

### 数量记录

- 307,315 个问答示例 — WebSRC v1.0 train（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 4,549 个网页 — WebSRC v1.0 train（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 52,826 个问答示例 — WebSRC v1.0 dev（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 913 个网页 — WebSRC v1.0 dev（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 40,357 个问答示例 — WebSRC v1.0 test（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）
- 985 个网页 — WebSRC v1.0 test（来源报告；来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md）

Each dataset.csv row is a QA example; web pages and QA examples are different units. Use the v1.0 split table for this release. The card retains email-evaluation instructions, while the manifest now includes test answers; no submission was made.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md

## 一手证据

- https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md（获取于 2026-10-18T04:35:16Z；SHA-256：061e5bcaa49e819f0133afb912ad5ce20a8c2b6c28ca60319a4635d6ce835ddb）
- https://huggingface.co/api/datasets/X-LANCE/WebSRC_v1.0（获取于 2026-10-18T04:33:29Z；SHA-256：a7976dd931c3fcf11de2456614f95eb071978599bd70fb89c0ea009d31da4300）
- https://x-lance.github.io/WebSRC/（获取于 2026-10-17T15:37:04Z；SHA-256：3c2c601d8b4ad2f379cac9b97a2cbb901883d9bc6c1a682359f9b4135e6dd4bc）
