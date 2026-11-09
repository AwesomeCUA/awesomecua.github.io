# OS-Critic Bench

跨平台 GUI 评判基准，包含移动端、桌面端和网页的 JSONL 数据划分及截图资源，并附公开的推理与准确率评分脚本。

- 目录页面：https://awesomecua.com/zh/resources/url-c73ba0618d1b3c505887/
- English：https://awesomecua.com/resources/url-c73ba0618d1b3c505887/index.md
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：评测、奖励模型、界面理解
- 证据核查日期：2026-10-17T11:18:18Z
- ID：url:c73ba0618d1b3c505887

## 范围记录

The Hub card provides split/format/license metadata, while the official OS-Oracle README establishes critic-evaluation purpose and platform scope. The repository currently releases benchmark inference/scoring components; data-synthesis code, training datasets and model checkpoints remain unchecked TODOs. Apache-2.0 is recorded for benchmark data only; the evaluation code has no inspected license declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c73ba0618d1b3c505887/record.json

## 结构化规格

- 动作 / 输出：critic-model responses
- 评测方式：The official repository runs model inference and computes accuracy with cal_acc.py.
- 侧重：GUI critic prediction
- 观测：benchmark JSONL, UI screenshots
- 任务设置：offline

### 数量记录

- 3 platform JSONL splits — mobile/desktop/web configurations in the Hub card（计算得出；来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md）

No sample count is inferred from the n<1K Hub size band. OS-Oracle training data and weights remain pending; released evaluation code covers a separate component.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card license declaration for OS-Critic-Bench; not an evaluation-code or model-weight license.
  来源：https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/numbmelon/OS-Oracle/HEAD/README.md（获取于 2026-10-17T11:18:18Z；SHA-256：58305b8ebe1af5dfbddd636484d63722d4e21d28ed3e22bb8c0068e654f33479）
- https://api.github.com/repos/numbmelon/OS-Oracle（获取于 2026-10-17T11:18:17Z；SHA-256：17bcf851f39d06e7e357871df1dc1ddf697bcbea31842c16348227bbf4fbb224）
- https://api.github.com/repos/numbmelon/OS-Oracle/git/trees/main?recursive=1（获取于 2026-10-17T11:22:55Z；SHA-256：516beea465382b54548e4b8bfd12ae510080a49451b30262ad1c769ed5a3398e）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Critic-Bench（获取于 2026-10-17T11:23:06Z；SHA-256：ef311b49437e246ffef6ad13c090277a0bdacc4a124e5b3cfe8d2643ced8f843）
- https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md（获取于 2026-10-17T11:23:07Z；SHA-256：4139e25e8911ca8450f6db9acb8dc3a98c126c3c43514c72bcefa4ed33b8ffa8）
