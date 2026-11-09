# OSWorld-G

计算机使用定位基准，包含原始指令和改写指令；与 Jedi 合成数据流水线、含 4 百万个样例的 Jedi 数据集，以及 Jedi-3B 和 Jedi-7B 模型一同发布。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-osworld-g/
- English：https://awesomecua.com/resources/github-xlang-ai-osworld-g/index.md
- 原始来源：https://github.com/xlang-ai/OSWorld-G
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:xlang-ai/osworld-g

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-osworld-g/record.json

## 结构化规格

- 动作 / 输出：click point or box center, refusal represented by negative coordinates in the evaluator
- 评测方式：The inspected Jedi runner maps predictions from resized-image coordinates back to the original image, then checks the predicted center against rectangle/polygon targets or the refusal rule. It reports overall and classification-group accuracy. This is offline grounding; OSWorld task-execution success is a separate measure.
- 侧重：desktop GUI grounding, infeasible-target refusal
- 观测：screenshot, instruction
- 任务设置：offline

### 数量记录

未记录数量。

The repository retains original OSWorld-G.json and refined OSWorld-G_refined.json instructions as alternative benchmark versions. Refined instructions reduce requirements beyond grounding. The same repository also contains Jedi training/rendering material, which is excluded from benchmark counts. The standalone generic eval.py entry point is a stub; the named model runner supplies image_size to its geometry helper. No task count or successful execution is inferred from repository file totals. Apache-2.0 is recorded for code only.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e814851bc3016a2abf59358f99b80afd9c2bd5894fc34baddfb7e4d0aa03bd45）
- https://api.github.com/repos/xlang-ai/OSWorld-G/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：48308bba4f26b02cb7b8fbbc433bb31ec81c494dabd3af437ddbb10b8d9ce667）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_osworld_g_jedi.py（获取于 2026-10-17T14:22:04Z；SHA-256：64f64e0b847e0fa200aa6051e20b8035a436df00e2ef0d769688ab13fa4d3046）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py（获取于 2026-10-17T14:21:09Z；SHA-256：b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
