# Go-Browse-WA processed data

扁平化的网页交互训练记录，包含无障碍树观察、助手续写、轨迹奖励和步骤链接元数据。

- 目录页面：https://awesomecua.com/zh/resources/url-a13a187bc058fbb4f6af/
- English：https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/index.md
- 原始来源：https://huggingface.co/datasets/apurvaga/go-browse-wa
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:a13a187bc058fbb4f6af

## 范围记录

The public release contains nine Parquet shards. The short card supplies schema and split metadata but no license declaration; the official README describes successful and unsuccessful trajectories processed for fine-tuning. The raw screenshot/HTML corpus is a separate release.

- 完整记录 JSON：https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/record.json

## 结构化规格

- 格式：Parquet
- 模态：text, accessibility-tree observations, actions
- 数据划分：train
- 监督信号：action completion, trajectory outcome

### 数量记录

- 164,533 条步骤记录 — train split（来源报告；来源：https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md）

The card count is flattened step records. Both successful and unsuccessful trajectories are included according to the project README; no license is declared.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa（获取于 2026-10-17T02:44:50Z；SHA-256：494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361）
- https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：18ab64833acf31113a83b2463359f1c7e37c4aaabfe11c33db2ba3e7d32818c6）
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566）
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa（获取于 2026-10-17T02:44:50Z；SHA-256：494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361）
