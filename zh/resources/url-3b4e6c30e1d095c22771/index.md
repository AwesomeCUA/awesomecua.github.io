---
title: "OSWorld 2.0 trajectories · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-3b4e6c30e1d095c22771/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# OSWorld 2.0 trajectories

XLang 受限发布的 OSWorld 2.0 智能体运行数据：21 个按模型和运行设置命名的 ZIP 结果归档，以及七次模型运行的逐任务轨迹 JSONL、逐步截图、结果和日志。

- 目录页面：https://awesomecua.com/zh/resources/url-3b4e6c30e1d095c22771/
- English：https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/osworld2.0-trajectory
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务
- 证据核查日期：2026-10-18T12:07:35Z
- ID：url:3b4e6c30e1d095c22771

## 范围记录

The repository is gated with automatic approval; its card could not be read without accepting the gate, and the Hub API carries no card metadata or license. The OSWorld-V2 README links it as the benchmark's trajectory download beside a hosted trajectory viewer. Some archive names carry the v2.1 label, a release the README dates after the paper, and step budgets of 150, 300 or 500; the runs include evaluations beyond the paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/record.json

## 结构化规格

- 格式：ZIP archives, PNG, JSONL, JSON, text logs
- 模态：screenshots, trajectory logs, result files, API usage records
- 数据划分：未记录
- 监督信号：agent run trajectories, evaluation results

### 数量记录

- 21 个 ZIP 结果归档 — repository root at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0）
- 7 个模型运行文件夹 — website_demo folder at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo）
- 108 个任务文件夹 — website_demo/MiniMax-M3/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks）
- 108 个任务文件夹 — website_demo/claude-opus-4-7/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks）
- 108 个任务文件夹 — website_demo/claude-sonnet-4-6-max/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks）
- 108 个任务文件夹 — website_demo/claude-sonnet-4-6-medium/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks）
- 108 个任务文件夹 — website_demo/gpt-5.5/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks）
- 107 个任务文件夹 — website_demo/gpt-5.6/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks）
- 108 个任务文件夹 — website_demo/qwen3.7/tasks at Hub revision a9cd5b05（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks）

Counts come from the Hub tree listings at the pinned revision. A task folder is one model's run of one task; folders across models overlap by task, with 107 folders for gpt-5.6 and 108 for the others. The inspected folder website_demo/MiniMax-M3/tasks/001 holds traj.jsonl, 501 PNG step screenshots, result and per-step-budget result files, eval and runtime logs, checkpoint results and API usage. ZIP archive contents and their trajectory counts are unknown.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：No data-license declaration is readable: the card is behind the access gate and the Hub API has no card metadata.
  来源：https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory

## 一手证据

- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory（获取于 2026-10-18T12:07:35Z；SHA-256：691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md（获取于 2026-10-18T12:07:36Z；SHA-256：0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0（获取于 2026-10-18T12:07:36Z；SHA-256：ea47577538434f9f4095efec3ab5df156cdb90132c4b226c64c53ba861a34fbe）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo（获取于 2026-10-18T12:07:37Z；SHA-256：9049b14cdecc2be6a23eae60362769f2eea4284454f3d35a0a0e6d20a86a2bf0）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：e66da738b64af2d79bbae9f75befa2423c6e2bdb00941c7f12afb58d9413c083）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：4e51c4903cc95fb305a39e4f6eb5d496aa5c67f47c499f6185d922fac6cd4bc3）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：24e4bd257eb6a7a0b015227b726057f587fd617d26878d88208d1871877169be）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：7892c77e47a846b79191df5dd94b44671c96343d34ca0dc13685300b36592253）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks（获取于 2026-10-18T12:07:37Z；SHA-256：842dee0c38022622e0b6f226fc78fb83ff18e28ee7debe21c81717ea0cb50388）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks（获取于 2026-10-18T12:07:38Z；SHA-256：adf4626b61ff2cdffe049d18ac335b9abb31b5d80c52a7053e3f4a26ca4248a6）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks（获取于 2026-10-18T12:07:38Z；SHA-256：1ce80893f5c161008d75aba19ddc25db10b169c9b5047a9530668bf5b72768e7）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks/001（获取于 2026-10-18T12:07:38Z；SHA-256：2381fce2e44ea97602a22d0dac4f6a2879860e04800bfd3f0552eb3e6ace38d5）
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory（获取于 2026-10-18T12:07:35Z；SHA-256：691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea）
