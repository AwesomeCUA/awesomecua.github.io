# WebChain v2

WebChain 人工网页轨迹的清洗版 v2，以轨迹级和 Seed 风格滑动窗口 SFT Parquet 提供数据，配有对齐截图、操作元数据和 150 条轨迹的评估子集。

- 目录页面：https://awesomecua.com/zh/resources/url-56f08987cc19b82dc607/
- English：https://awesomecua.com/resources/url-56f08987cc19b82dc607/index.md
- 原始来源：https://huggingface.co/datasets/webagentlab/webchain
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航、GUI 定位、规划、模仿学习
- 证据核查日期：2026-10-18T15:33:42Z
- ID：url:56f08987cc19b82dc607

## 范围记录

The card calls this the cleaned, training-ready release and points to the publisher's separate original release (Hub repository webagentlab/webchain-legacy) for raw JSON records, split screenshot archives and the earlier high- and low-level formulations. Its counts (31,675 trajectories, 317,682 steps) are after cleaning; the paper's 31,725 trajectories and 317,993 steps describe the corpus before it. Annotators executed tasks on live websites; tasks were synthesized from site schemas and reasoning text was added in post-processing. CC-BY-4.0 is the card's data declaration and does not establish rights to the captured websites' content.

- 完整记录 JSON：https://awesomecua.com/resources/url-56f08987cc19b82dc607/record.json

## 结构化规格

- 格式：Parquet (Trace SFT and Seed/Demo SFT), Parquet and CSV metadata tables, SHA-256 manifests
- 模态：viewport screenshots, task queries, reasoning text, actions, DOM and accessibility-tree references in trace metadata
- 数据划分：未记录
- 监督信号：human-executed web task trajectories, click coordinates, bounding boxes and CSS selectors, action types and text arguments, reasoning text added in post-processing

### 数量记录

- 31,675 cleaned trajectories — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 317,682 interaction steps — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 39,332 Seed/Demo sliding-window rows — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 263,995 SFT image/action turns — WebChain v2 release as stated on its card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 150 evaluation traces — test_suite_150 subset as stated on the card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md）
- 48 data parts per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft（计算得出；来源：https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce）
- 71 SFT Parquet shards per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft（计算得出；来源：https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce）

Trajectories, steps, windows, turns, parts and shards are different units and are counted separately. Trace SFT has one row per cleaned trajectory; Seed/Demo SFT re-cuts the same trajectories into bounded windows, so the formats overlap. The 150-trace subset is a stratified sample for loader checks and compact offline evaluation; the card does not say it is held out from the parts. The part and shard counts from the manifest match the card.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T15:33:42Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）
- https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce（获取于 2026-10-18T15:33:18Z；SHA-256：b2845f4365632a07cf5296879f18b516603a08a7b7700558db543962475a7bfa）
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T15:33:42Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）
