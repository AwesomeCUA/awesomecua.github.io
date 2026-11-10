# GroundUI-18K

AgentStudio 的完整 GUI 元素定位测试集，汇集 Mind2Web、OmniACT、MoTIF、ScreenSpot 和 AgentStudio 的网页、桌面及移动端截图，含 18,026 条指令与目标边界框样例。

- 目录页面：https://awesomecua.com/zh/resources/url-d206aacf01e1b7dc786d/
- English：https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/index.md
- 原始来源：https://huggingface.co/datasets/agent-studio/GroundUI-18K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T16:19:41Z
- ID：url:d206aacf01e1b7dc786d

## 范围记录

The card calls this the full GroundUI-18K of AgentStudio and a test set reserved from training, although the single Hub split is named train. One split in 19 Parquet shards carries image, image_path, instruction, bbox, resolution, source and platform fields. Platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels are three Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. The AgentStudio evaluation README says GroundUI-18K was recaptioned with CogVLM2; the published instruction version remains unspecified in the card. MIT is the dataset-card declaration; screenshots drawn from upstream datasets keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/record.json

## 结构化规格

- 动作 / 输出：click coordinate
- 评测方式：The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- 侧重：instruction-conditioned GUI element grounding
- 观测：screenshots, natural-language instructions
- 任务设置：离线

### 数量记录

- 18,026 个示例 — Hub split at revision f061eba2 (named train, described as a test set)（来源报告；来源：https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md）
- 11,593 个示例 — platform label web（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）
- 2,476 个示例 — platform label desktop（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）
- 3,957 个示例 — platform label mobile（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train）

Source-label tallies from the same statistics: mind2web_test_domain 5,817, mind2web_test_task 2,080, mind2web_test_website 1,371, omniact 3,804, motif 3,455, screenspot 1,272 and agent_studio 227. A 1,000-example subset was sampled from this set for efficient benchmarking and is published as a separate Hub repository; this count covers the full set.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md（获取于 2026-10-18T16:19:41Z；SHA-256：8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290）
- https://huggingface.co/api/datasets/agent-studio/GroundUI-18K/revision/f061eba2b7e3fffcf511694f15ad3ca38898ab9e（获取于 2026-10-18T16:19:44Z；SHA-256：54436ec8e82156648f4e04e4a1b6830a73c6de30245a7304bdc0ce92b5153724）
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train（获取于 2026-10-18T16:19:45Z；SHA-256：5e9ee49bba2b05f26330bd61168e2aabbea1ccf45d26538b440db8fcd3818e46）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md（获取于 2026-10-18T16:19:45Z；SHA-256：1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py（获取于 2026-10-18T16:19:45Z；SHA-256：d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8）
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/README.md（获取于 2026-10-18T16:19:47Z；SHA-256：996f153a3a281dd5167bdea1d32bc12027386a42114dd23e78bfa23daaeb6cf8）
- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md（获取于 2026-10-18T16:19:41Z；SHA-256：8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290）
