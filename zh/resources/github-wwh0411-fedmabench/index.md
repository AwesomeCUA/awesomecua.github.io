# FedMABench

联邦式移动端智能体训练与评估套件，可调整用户数据异质性和应用分布，并发布了分区标注及推理、评分脚本。

- 目录页面：https://awesomecua.com/zh/resources/github-wwh0411-fedmabench/
- English：https://awesomecua.com/resources/github-wwh0411-fedmabench/index.md
- 原始来源：https://github.com/wwh0411/FedMABench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、模仿学习、手机操作
- 证据核查日期：2026-10-17T11:18:17Z
- ID：github:wwh0411/fedmabench

## 范围记录

The public Hub lists six dataset families of JSON/JSONL partition annotations. The repository says unpacked screenshots must be reconstructed from original AndroidControl and AITW sources. This is offline training/evaluation infrastructure. No repository license file or dataset-license declaration was found in the inspected sources; neither is inferred from the underlying ms-swift project.

- 完整记录 JSON：https://awesomecua.com/resources/github-wwh0411-fedmabench/record.json

## 结构化规格

- 动作 / 输出：model predictions on mobile-agent examples
- 评测方式：The provided evaluation workflow performs model inference over selected partitions and invokes test_swift_fed.py for accuracy scoring.
- 侧重：mobile-agent federated training, data heterogeneity
- 观测：mobile-agent examples with externally sourced screenshots
- 任务设置：offline

### 数量记录

- 6 dataset families — released FedMABench partition families（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md）
- 3 heterogeneity types — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md）
- 8 federated learning algorithms — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md）

The dataset-family count measures dataset families. Code and data licenses are unknown; external image sources are required.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md（获取于 2026-10-17T11:18:17Z；SHA-256：b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8）
- https://api.github.com/repos/wwh0411/FedMABench（获取于 2026-10-17T11:18:17Z；SHA-256：3e1b2b643a263af129b3a4092a84efe47d3643f00509f7b9517da21a4aac0371）
- https://api.github.com/repos/wwh0411/FedMABench/git/trees/master?recursive=1（获取于 2026-10-17T11:22:54Z；SHA-256：4fb977a469cee3d5083da0b5bf2984fedc6b867146a90b20963985e08f9e9716）
- https://huggingface.co/api/datasets/wwh0411/FedMABench（获取于 2026-10-17T11:23:06Z；SHA-256：df5379f4a9b350dad0c3d374d2f9a1d6eacd974b6d54750e2a14ecec1faec6e5）
- https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md（获取于 2026-10-17T11:23:06Z；SHA-256：2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc）
