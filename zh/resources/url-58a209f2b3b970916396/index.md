# AgentSynth tasks and trajectories

已发布的 AgentSynth 任务定义和记录的 GUI 轨迹，包含 OSWorld 及 InSTA 训练配置，以及打包的截图、思考内容和命令。

- 目录页面：https://awesomecua.com/zh/resources/url-58a209f2b3b970916396/
- English：https://awesomecua.com/resources/url-58a209f2b3b970916396/index.md
- 原始来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：数据生成、长任务、模仿学习
- 证据核查日期：2026-10-18T04:35:17Z
- ID：url:58a209f2b3b970916396

## 范围记录

Public Hub manifest contains JSONL task files and trajectory ZIP packages. Counts describe the publisher-reported task collection; independently counted archive-row and ZIP-filename totals remain unavailable.

- 完整记录 JSON：https://awesomecua.com/resources/url-58a209f2b3b970916396/record.json

## 结构化规格

- 格式：JSONL, ZIP trajectory packages
- 模态：screenshots, task instructions, LLM thoughts, commands
- 数据划分：train (osworld configuration), train (insta configuration)
- 监督信号：synthetic tasks, agent trajectories

### 数量记录

- > 6,000 tasks — The count is the collection total described by the dataset card; the released-row count remains unverified.（来源报告；来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md）

Card maps osworld/train to all_tasks.jsonl and insta/train to task_sequences.jsonl. Six difficulty levels and trajectory screenshots/thoughts/commands are documented. ZIP file labels identify files; trajectory totals are unspecified, and configurations and composed-task levels may overlap.

## 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for this release.
  来源：https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md

## 一手证据

- https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：c1669d8e3caa27f8cd47c17b243b6a8d42807438d8a6a36074668adc57d33757）
- https://huggingface.co/api/datasets/sunblaze-ucb/AgentSynth（获取于 2026-10-18T04:33:20Z；SHA-256：0d3797d75dd4089ece8c8d4624f2a726024d25be255255d8770f78de21d75906）
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md（获取于 2026-10-18T04:27:12Z；SHA-256：42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106）
