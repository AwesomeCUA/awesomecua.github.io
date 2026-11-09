# ScreenSpot v2

ScreenSpot 定位测试集的第二版，由 OS-Copilot 发布，桌面、移动端和网页标注分别存放，截图则共用一个归档文件。

- 目录页面：https://awesomecua.com/zh/resources/url-bd7214de6d98917c2350/
- English：https://awesomecua.com/resources/url-bd7214de6d98917c2350/index.md
- 原始来源：https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:bd7214de6d98917c2350

- 完整记录 JSON：https://awesomecua.com/resources/url-bd7214de6d98917c2350/record.json

## 结构化规格

- 动作 / 输出：click coordinates
- 评测方式：The inspected Jedi evaluation adapter reads the v2 mobile/desktop/web annotation files, scores a point against the target box, and reports overall, platform, and text/icon accuracy. This is a named compatible evaluator implementation; the OS-Atlas dataset card itself supplies no evaluator specification.
- 侧重：single-step GUI grounding on the ScreenSpot-v2 release
- 观测：screenshot, instruction
- 任务设置：offline

### 数量记录

未记录数量。

The public Hub revision 5efbb1f1 contains three platform JSON annotation files and an image ZIP; its card only declares Apache-2.0. No sample total or equivalence to the original ScreenSpot test count is asserted. Keep v2 separate from v1 and retain evaluator/version and coordinate conversion when comparing results.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2（获取于 2026-10-16T06:38:26Z；SHA-256：7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408）
- https://osatlas.github.io/（获取于 2026-10-17T14:22:05Z；SHA-256：94547cb88756cf6a36bfb86d5fe9bdca1e40d7edb9e452c33cb462bbe760fed0）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_screenspot_v2_jedi.py（获取于 2026-10-17T14:21:09Z；SHA-256：0e8772bc8fd5a25c50d3c2f6b0caee05ed2ab4659d46d99d60adf2b5ab29e997）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py（获取于 2026-10-17T14:21:09Z；SHA-256：b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a）
- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2（获取于 2026-10-16T06:38:26Z；SHA-256：7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408）
