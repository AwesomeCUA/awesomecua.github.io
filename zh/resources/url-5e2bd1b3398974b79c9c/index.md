# WebClick

网页界面定位基准，包含截图指令和目标框，覆盖智能体浏览、人工浏览和日历场景。

- 目录页面：https://awesomecua.com/zh/resources/url-5e2bd1b3398974b79c9c/
- English：https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/index.md
- 原始来源：https://huggingface.co/datasets/Hcompany/WebClick
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、评测、网页导航
- 证据核查日期：2026-10-17T04:01:33Z
- ID：url:5e2bd1b3398974b79c9c

## 范围记录

Four public test Parquet shards are present. The dataset card declares Apache-2.0. This is an offline localization test; reported screenshots and samples are different units.

- 完整记录 JSON：https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/record.json

## 结构化规格

- 动作 / 输出：click target or bounding box
- 评测方式：Assess localization against annotated targets; agentbrowse, humanbrowse and calendars are distinct source buckets.
- 侧重：instruction-conditioned web localization
- 观测：web screenshots, instructions
- 任务设置：offline

### 数量记录

- 1,639 examples — test split（来源报告；来源：https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md）

The card reports more than 100 websites. Grounding accuracy and task completion are separate measures.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md（获取于 2026-10-17T04:01:33Z；SHA-256：958bbf0eb9f61afd6c576673fbe6f7d84e6c4b8a9d4d8c4fc0e1224b5d8da30b）
- https://huggingface.co/api/datasets/Hcompany/WebClick（获取于 2026-10-17T04:01:33Z；SHA-256：c9576957a3cb14785bf274691b50f90b04567a442ed60ee8c39f0f73108359f4）
