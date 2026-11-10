# Computer Use Trajectories (markov-ai)

由使用辅助功能树定位的 Gemini 3 Flash Preview 智能体生成的 160 条成功 OSWorld 轨迹，共 1,378 步，含逐步截图、辅助功能树、pyautogui 操作、响应及运行日志。

- 目录页面：https://awesomecua.com/zh/resources/url-5a073f50270c4f316ce5/
- English：https://awesomecua.com/resources/url-5a073f50270c4f316ce5/index.md
- 原始来源：https://huggingface.co/datasets/markov-ai/computer-use
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成
- 证据核查日期：2026-10-18T11:44:36Z
- ID：url:5a073f50270c4f316ce5

## 范围记录

The Hub API at revision de58c88b reports an ungated repository with 16 Parquet shards for the train split and 313 MP4 files under recordings/<domain>/. The card's 160 rows match its per-domain table, but the recording folders hold 313 files with a different domain mix, so some recordings may not belong to a published row; this was not checked. Every row has score 1.0 because only fully successful runs were kept; the set samples successful runs. The card credits a 'ComputerRL' evaluation framework at github.com/anthropics/ComputerRL, which the GitHub API did not resolve on 2026-10-18. The card declares Apache-2.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-5a073f50270c4f316ce5/record.json

## 结构化规格

- 格式：Parquet, MP4
- 模态：screenshots, accessibility trees, task instructions, pyautogui actions, model responses, execution logs, screen recordings
- 数据划分：train
- 监督信号：successful agent trajectories

### 数量记录

- 160 条轨迹 — train split (one row per task trajectory)（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 1,378 步 — all 160 trajectories（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 10 个应用领域 — train split（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md）
- 313 个 MP4 录制文件 — recordings/ at revision de58c88b（计算得出）（来源：https://huggingface.co/api/datasets/markov-ai/computer-use）

Rows are agent runs filtered to score 1.0. Step and row counts are the card's figures. Recording files were counted from the Hub manifest; the recording-file and row counts differ.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md（获取于 2026-10-18T11:44:36Z；SHA-256：f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381）
- https://huggingface.co/api/datasets/markov-ai/computer-use（获取于 2026-10-18T11:44:36Z；SHA-256：73c4ea92c82983d3bc5ac6b8565f199c33f52f4206e5203502d0bf817b5b02cd）
- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md（获取于 2026-10-18T11:44:36Z；SHA-256：f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381）
