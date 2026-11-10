# CUA Speedrun results

收录 CUA Speedrun 在 OSWorld 子集、CUA-World 和 MyPCBench 上评估计算机使用模型的轨迹归档及逐任务结果，含验证器分数、实测任务耗时和记录或估算的成本。

- 目录页面：https://awesomecua.com/zh/resources/url-099451a33699510476df/
- English：https://awesomecua.com/resources/url-099451a33699510476df/index.md
- 原始来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、效率、可观测性
- 证据核查日期：2026-10-18T12:32:49Z
- ID：url:099451a33699510476df

## 范围记录

The publishing account is anonymous (anonymousmypcbench). The card names the benchmark sets used by CUA Speedrun but cites no paper, and neither the cua-speedrun paper, its project page nor its GitHub README links this repository, so no relation to the paper is asserted. Scores, task times and costs are the publisher's measurements; several costs are API-equivalent token estimates, and the card keeps two Kimi K3 OSWorld2 evaluations as billing-affected recordings. Screenshots for five September evaluations were deleted before publication. No license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-099451a33699510476df/record.json

## 结构化规格

- 格式：ZIP run archives, JSON, SHA-256 checksum lists
- 模态：screenshots, agent transcripts, action logs, setup and verifier logs, timing and cost records
- 数据划分：未记录
- 监督信号：verifier task scores, agent-generated trajectories, measured task timings

### 数量记录

- 97 个 ZIP 运行归档 — repository root at Hub revision 447ff4cd（计算得出）（来源：https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c）
- 14 个逐次评测成本证据 JSON 文件 — COST-*.json files at Hub revision 447ff4cd（计算得出）（来源：https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c）
- 295 个 OSWorld 任务 — Unanimous-295 set, with per-task metrics for nine models in one JSON file（来源报告；来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md）

Archive and cost-file counts come from a script over the pinned Hub file list; the card's tables link 39 of the 97 archives, so one benchmark set uses a subset of the archives. The sets differ in size (295, 50, 52, 26 and 38 tasks) and some tables use different tracks and measurement contracts, which the card says limits comparison across them. Mean scores include verifier partial credit; strict passes use recorded verdicts.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the card metadata nor its text declares a license, and the file list at this revision has no license file, so no data grant is established; agent outputs, screenshots and logged third-party content keep their own terms.
  来源：https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md

## 一手证据

- https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md（获取于 2026-10-18T12:32:49Z；SHA-256：948719ad1839eddc0ccc4e9e8a1de218876d96395522546b77e89f71e5df35a8）
- https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c（获取于 2026-10-18T12:32:16Z；SHA-256：894abd6718d735a5845475c2630f7b5cf8c03a32b1046a9e643ee3f2f9f2f6f2）
