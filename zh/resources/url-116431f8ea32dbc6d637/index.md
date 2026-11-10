# WebChain (original release)

WebChain 原始版收录真实网站上的人工标注轨迹，提供原始 JSON 记录、视口截图及部分完整页面截图，以及用于高层规划和低层定位步骤的 Parquet 文件。

- 目录页面：https://awesomecua.com/zh/resources/url-116431f8ea32dbc6d637/
- English：https://awesomecua.com/resources/url-116431f8ea32dbc6d637/index.md
- 原始来源：https://huggingface.co/datasets/webagentlab/webchain-legacy
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：数据生成、网页导航、GUI 定位、规划
- 证据核查日期：2026-10-18T12:24:21Z
- ID：url:116431f8ea32dbc6d637

## 范围记录

The publisher's cleaned v2 release is a separate Hub repository (webagentlab/webchain) whose card calls this repository the original release with the least-processed artifacts and earlier high- and low-level formulations; v2 reports different counts after cleaning. Here the image and full-page screenshot folders are split ZIP sets, and the card says full-page screenshots cover only some steps. Rationales come from synthetic generation. CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-116431f8ea32dbc6d637/record.json

## 结构化规格

- 格式：zipped JSON, split ZIP image archives, Parquet
- 模态：viewport screenshots, partial full-page screenshots, HTML snapshots, accessibility-tree snapshots, instructions, actions
- 数据划分：high-level train, high-level test, low-level train, low-level test
- 监督信号：human-executed web task trajectories, element bounding boxes and click coordinates, CSS selectors and DOM references, action types and input text, generated rationales where included

### 数量记录

- 31,725 trajectories — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 317,993 interaction steps — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 428 web domains — WebChain corpus as stated on the original-release card（来源报告；来源：https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md）
- 13 Parquet files — processed/high_parquet (2) and processed/low_parquet (11) at revision bd569907（计算得出；来源：https://huggingface.co/api/datasets/webagentlab/webchain-legacy）

Trajectories, steps, domains and files are different units and are counted separately. The trajectory, step and domain figures match the paper's statistics; the v2 card says they describe the corpus before final cleaning. The file count comes from the Hub manifest.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60）
- https://huggingface.co/api/datasets/webagentlab/webchain-legacy（获取于 2026-10-18T12:24:21Z；SHA-256：808a507eed99aac784cf773cf1c4dbb0cd03a4c66b75c49466f3c0dc353a325b）
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c）
- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md（获取于 2026-10-18T12:24:21Z；SHA-256：730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60）
