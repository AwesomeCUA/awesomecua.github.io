# WebPRM Collection preference data

带检查清单标注的网页决策记录，包含页面观察、先前动作、一个优选的后续步骤及被拒绝的备选步骤，用于过程奖励学习。

- 目录页面：https://awesomecua.com/zh/resources/url-8dfc84eb4016204fe70a/
- English：https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/index.md
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、奖励模型、评测
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:8dfc84eb4016204fe70a

## 范围记录

Ten public Parquet shards are present. The card names its split test and reports 9,460 rows; the project’s 40K-plus preference-annotation claim uses a different grain. A row can contain multiple rejected alternatives. No data-license declaration is present.

- 完整记录 JSON：https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/record.json

## 结构化规格

- 格式：Parquet
- 模态：screenshots, text, action history
- 数据划分：test
- 监督信号：preferred and rejected continuations, task checklists

### 数量记录

- 9,460 rows — Hub split named test（来源报告；来源：https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md）

Preserves the publisher’s split label despite the collection’s training purpose. Rows contain lists of rejected candidates. Data license is unknown.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：9c091c5fc625ce53f53f8262f5cee8d08194e4fd1b8eeed543ff1c3723c823fd）
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_preference_pair（获取于 2026-10-17T02:44:50Z；SHA-256：28a1d5d12e84fc38515bd3c5031ae0cf315c5f8772b90d982d926b98f2857563）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）
