# Gelato OS-World agent trajectories

Gelato-30B-A3B 和 GTA1-32B 在相同的 GPT-5 规划、基于 GTA1.5 的框架中各运行三轮 OS-World 任务，提供逐任务轨迹、初始及逐步截图和自动评估结果。

- 目录页面：https://awesomecua.com/zh/resources/url-aed610c413d6bb9f1caa/
- English：https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/index.md
- 原始来源：https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T15:37:17Z
- ID：url:aed610c413d6bb9f1caa

## 范围记录

The dataset card holds only license metadata; the description and scope come from the official Gelato README, which says this repository provides all of the agent's OS-World trajectories from runs on a fixed OS-World snapshot with GPT-5 as planner and a 50-step limit. The file list also holds the GTA1-32B baseline runs from the same harness, which the README compares as separate baseline material. The README reports 58.71 ± 0.66% automated and 61.85 ± 0.79% human-corrected success for Gelato-30B-A3B, against 56.97 ± 1.47% and 59.47 ± 1.27% for GTA1-32B. The GitHub repository has no license file; MIT is the dataset card's declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/record.json

## 结构化规格

- 格式：JSONL, PNG, plain text
- 模态：screenshots, action trajectories, task results
- 数据划分：未记录
- 监督信号：agent-generated trajectories, automated task results

### 数量记录

- 2,166 个含 traj.jsonl 的任务轨迹目录 — six run directories at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 6 个运行目录 — gelato-30b/run_1-3 and gta1-32b_baseline/run_1-3 at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 361 个不重复的 OS-World 任务 — each run directory at Hub revision b9495a8e (the same task set in all six)（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）
- 34,598 张 PNG 截图 — six run directories at Hub revision b9495a8e（计算得出）（来源：https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618）

Counts come from a script over the pinned Hub file list. Every task directory holds traj.jsonl, result.txt, an initial screenshot and step screenshots; the 361 tasks span 10 OS-World domain folders. Results are the automated evaluation; the README's human re-check of 20 tasks lives in the GitHub repository. Directories, tasks and screenshots are different units and are counted separately.

## 许可证信息

- 代码：未记录
- 数据：MIT — https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Dataset-card metadata declaration (license: mit) for this release; the card contains only that metadata.
  来源：https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md

## 一手证据

- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:37:17Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618（获取于 2026-10-18T15:36:09Z；SHA-256：218daeb50d48f98a41b69b9eae6ef3bb7676b6a1da223574cbf3348490878c6f）
- https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md（获取于 2026-10-18T15:36:09Z；SHA-256：d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17）
