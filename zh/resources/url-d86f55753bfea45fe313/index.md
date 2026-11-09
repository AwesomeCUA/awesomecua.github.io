# GroundUI-1K

AgentStudio 从 GroundUI-18K 抽取的 1,000 条 GUI 元素定位测试集，包含网页、桌面和移动端截图、经 GPT-4o 重写的指令及目标边界框。

- 目录页面：https://awesomecua.com/zh/resources/url-d86f55753bfea45fe313/
- English：https://awesomecua.com/resources/url-d86f55753bfea45fe313/index.md
- 原始来源：https://huggingface.co/datasets/agent-studio/GroundUI-1K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T16:08:23Z
- ID：url:d86f55753bfea45fe313

## 范围记录

The card calls this a test set and asks that it be reserved from training, although the Hub split is named train. One Parquet split in two shards carries image, instruction, raw_instruction, bbox, resolution, source and platform fields; platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels name Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. MIT is the dataset-card declaration, and screenshots drawn from upstream datasets keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-d86f55753bfea45fe313/record.json

## 结构化规格

- 动作 / 输出：click coordinate
- 评测方式：The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- 侧重：instruction-conditioned GUI element grounding
- 观测：screenshots, natural-language instructions
- 任务设置：offline

### 数量记录

- 1,000 examples — Hub split at revision 5d18efc3 (named train, described as a test set)（来源报告；来源：https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md）
- 400 examples — platform label web（计算得出；来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）
- 300 examples — platform label desktop（计算得出；来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）
- 300 examples — platform label mobile（计算得出；来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train）

Subset of GroundUI-18K sampled for efficient benchmarking; this count covers the subset, while the larger set is a separate Hub repository. Instructions were recaptioned with GPT-4o; raw_instruction keeps the source wording.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c）
- https://huggingface.co/api/datasets/agent-studio/GroundUI-1K/revision/5d18efc3085902648b7031bf747a1090356a1b17（获取于 2026-10-18T16:07:58Z；SHA-256：652082bd5c0e35322611a1c97a9291f061598ec7930b998ea4b437d3d56fd1f0）
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train（获取于 2026-10-18T16:07:17Z；SHA-256：afd9a96bdb3d2a6575c9b738ed709fad9ba41523bd82ee7714d6ffd54e22665a）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md（获取于 2026-10-18T16:07:58Z；SHA-256：1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py（获取于 2026-10-18T16:07:58Z；SHA-256：d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8）
- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c）
