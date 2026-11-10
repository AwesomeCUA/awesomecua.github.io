# Uni-GUI-Mobile

UI-MOPD 训练数据中自行采集的手机操作轨迹：覆盖 10 类应用的 871 项任务，每项含逐步截图、推理轨迹、归一化的点击、滑动和输入操作及 adb 命令。

- 目录页面：https://awesomecua.com/zh/resources/url-93278fa5b9e6bd0cbcef/
- English：https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/index.md
- 原始来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-18T12:32:23Z
- ID：url:93278fa5b9e6bd0cbcef

## 范围记录

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; this repository is the self-collected mobile part (the paper's composition table rounds it to about 1K trajectories and 17K steps, the card reports about 14K steps). Per the paper, teacher models produced the rollouts, an automatic judge kept only successful ones, and reasoning traces were rewritten into one format. The card says only 'mobile'; Android is inferred from the adb commands in its step records and the paper's use of AndroidWorld and MobileWorld environments for mobile queries. Apache-2.0 is the card's declaration for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/record.json

## 结构化规格

- 格式：per-trajectory folders with task.json and PNG screenshots
- 模态：screenshots, task queries, reasoning traces, actions
- 数据划分：未记录
- 监督信号：teacher-model GUI trajectories filtered by an automatic success judge, structured reasoning traces, normalized mobile actions with adb commands

### 数量记录

- 871 trajectories — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- ≈ 14,000 steps — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- 10 app categories — Uni-GUI-Mobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md）
- 871 task.json trajectory files — Hub manifest at revision 45244387（计算得出；来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838）
- 14,275 PNG screenshot files — Hub manifest at revision 45244387（计算得出；来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838）

Trajectories, steps, app categories and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1080x2400 screen. No train/test split is declared.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md（获取于 2026-10-18T12:32:23Z；SHA-256：5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088）
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838（获取于 2026-10-18T12:32:02Z；SHA-256：b3ae1be79448b6a2901630def28957fe31e4a16da9ed09c0e4d4e1180faef392）
- https://arxiv.org/html/2607.04425v1（获取于 2026-10-18T12:32:02Z；SHA-256：7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md（获取于 2026-10-18T12:32:23Z；SHA-256：5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088）
