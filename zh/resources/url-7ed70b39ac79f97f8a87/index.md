# GUI-Perturbed

逐步网页定位基准，对 Mind2Web 页面施加样式、缩放和文字大小扰动后重新渲染，并将每张截图与直接或关系型指令及目标框配对。

- 目录页面：https://awesomecua.com/zh/resources/url-7ed70b39ac79f97f8a87/
- English：https://awesomecua.com/resources/url-7ed70b39ac79f97f8a87/index.md
- 原始来源：https://huggingface.co/datasets/figai/GUI-Perturbed
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、评测、鲁棒性
- 证据核查日期：2026-10-18T15:59:36Z
- ID：url:7ed70b39ac79f97f8a87

## 范围记录

The card YAML at revision 727c857b lists one eval split of 3,120 examples in four Parquet shards, with screenshot, instruction, gt_bbox, visual_variant, instruction_type, task_id and step_index fields. Hugging Face dataset-viewer statistics show 780 rows for each of four visual variants (labelled original, style, precision and text_shrink; the card calls the first one baseline) and 1,560 rows for each of the direct and relational instruction types, so the card's per-variant sample size of 390 covers one instruction type. The card designates the set for evaluation and asks that it be reserved from training; the pages come from Mind2Web MHTML archives. eval.yaml names point-in-bbox accuracy. The card declares CC BY 4.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-7ed70b39ac79f97f8a87/record.json

## 结构化规格

- 动作 / 输出：predicted target location
- 评测方式：eval.yaml specifies point-in-bbox accuracy against the annotated target box; results can be split by visual variant and instruction type. Grounding accuracy and end-to-end task success are separate measures.
- 侧重：step-level web GUI element localization, robustness to visual and instruction perturbations
- 观测：rendered web-page screenshots, natural-language instructions
- 任务设置：offline

### 数量记录

- 3,120 examples — eval split at revision 727c857b（来源报告；来源：https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md）
- 283 distinct Mind2Web task IDs — eval split（计算得出；来源：https://datasets-server.huggingface.co/statistics?dataset=figai/GUI-Perturbed&config=default&split=eval）

Each example is one screenshot, instruction and target box; four visual variants are crossed with two instruction types. Examples, source tasks and visual variants are different units.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md（获取于 2026-10-18T15:59:36Z；SHA-256：6105d4c240dd71a698fe63b501aa74c2c2478455dbbd03313abb7ccc81ce237e）
- https://huggingface.co/api/datasets/figai/GUI-Perturbed/revision/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7（获取于 2026-10-18T15:59:07Z；SHA-256：55c9358d6269d88f6f2eebc5f74c463096bd417434092bbcfef3b9774b179c23）
- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/eval.yaml（获取于 2026-10-18T15:59:07Z；SHA-256：119930290bb21bcceb3f3a2b22d4f738ce5d0eb4531652cb7e7ad0dde348e30a）
- https://datasets-server.huggingface.co/statistics?dataset=figai/GUI-Perturbed&config=default&split=eval（获取于 2026-10-18T15:59:07Z；SHA-256：5a23805cf7a6122abf01288f46139bb3c7890306678ec0280e9e6d488adb5908）
- https://huggingface.co/datasets/figai/GUI-Perturbed/raw/727c857bcf7cf3b4077773aefd6e3ab8295c0ed7/README.md（获取于 2026-10-18T15:59:36Z；SHA-256：6105d4c240dd71a698fe63b501aa74c2c2478455dbbd03313abb7ccc81ce237e）
