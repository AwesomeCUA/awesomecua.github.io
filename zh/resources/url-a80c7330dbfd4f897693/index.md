# InSTA 150k Tasks (v3)

InSTA 项目约 15 万项网页导航任务，每项提供网站域名、指令、建议步骤和成功标准，训练集与测试集取自不同网站。

- 目录页面：https://awesomecua.com/zh/resources/url-a80c7330dbfd4f897693/
- English：https://awesomecua.com/resources/url-a80c7330dbfd4f897693/index.md
- 原始来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成
- 证据核查日期：2026-10-18T16:03:36Z
- ID：url:a80c7330dbfd4f897693

## 范围记录

The card cites arXiv 2502.06776 (InSTA: Towards Internet-Scale Training For Agents) and points to an LLM judge in the separate data-for-agents/insta code repository; this record covers the task data. Rows contain text task specifications alone, with agent trajectories and screenshots outside this release. The card declares MIT for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-a80c7330dbfd4f897693/record.json

## 结构化规格

- 格式：Parquet
- 模态：text
- 数据划分：train, test
- 监督信号：task instructions, suggested step lists, success criteria

### 数量记录

- ≈ 150,000 tasks — complete v3 release（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 143,508 examples — train split（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 2,933 examples — test split（来源报告；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md）
- 2,933 distinct website domains — test split（计算得出；来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet）

Split sizes are the card's dataset_info num_examples. The distinct-domain count was computed from the inspected test Parquet file.

## 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the v3 task release; the InSTA code repository and the websites named in tasks are not covered by this evidence.
  来源：https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md

## 一手证据

- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md（获取于 2026-10-18T16:03:36Z；SHA-256：0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23）
- https://huggingface.co/api/datasets/data-for-agents/insta-150k-v3（获取于 2026-10-18T16:03:35Z；SHA-256：480f7e251f32652812aafd5ffcb638a14c9612cec73bbb33c245f9685a542808）
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet（获取于 2026-10-18T16:04:11Z；SHA-256：3ae8bb40fd3da6991c15e5d34579b0a631f9ad520ad70a09358ef99770cb239d）
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md（获取于 2026-10-18T16:03:36Z；SHA-256：0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23）
