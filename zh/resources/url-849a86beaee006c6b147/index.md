# OmniAct

OmniAct 是用于生成计算机交互程序的数据集和基准。

- 目录页面：https://awesomecua.com/zh/resources/url-849a86beaee006c6b147/
- English：https://awesomecua.com/resources/url-849a86beaee006c6b147/index.md
- 原始来源：https://huggingface.co/datasets/Writer/omniact
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:849a86beaee006c6b147

- 完整记录 JSON：https://awesomecua.com/resources/url-849a86beaee006c6b147/record.json

## 结构化规格

- 动作 / 输出：PyAutoGUI script: pointer movement/click/drag, key presses, hotkeys, and text entry
- 评测方式：The bundled evaluator reports weighted sequence match and action match, comparing action types and applying coordinate, key, and writing penalties. Target element-box metadata is evaluation-only. The retained scorer has a click-penalty defect: predicted coordinates are read from gold_line, so score reproduction requires explicit scorer-version review.
- 侧重：offline desktop/web action-script generation
- 观测：screenshot, natural-language task
- 任务设置：离线

### 数量记录

- 6,788 个任务示例 — train split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）
- 2,020 个任务示例 — test split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）
- 991 个任务示例 — val split, HF revision 5e4bcb26（来源报告；来源：https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md）

This released split table totals 9,799 examples; paper-level collection size is a separate population. Public files include train/test/val JSON indexes, task/image archives, and eval.py. Evaluation uses offline script comparison. MIT is the Hub data declaration; original app/content rights are not resolved by it.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/Writer/omniact
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/Writer/omniact（获取于 2026-10-16T06:38:27Z；SHA-256：2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3）
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md（获取于 2026-10-17T14:10:00Z；SHA-256：7b54ad557f89d621fe39c3d2fe9f02164a2bfcb7fef0db610d964586d3673693）
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/eval.py（获取于 2026-10-17T14:22:06Z；SHA-256：a786de678af46df5e2b6b1a2a69d2ee239fe8fd5b63663765d84d39e21fc2365）
- https://huggingface.co/api/datasets/Writer/omniact（获取于 2026-10-16T06:38:27Z；SHA-256：2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3）
