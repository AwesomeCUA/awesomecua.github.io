# ScreenSpot Pro

ScreenSpot Pro 是侧重专业高分辨率界面的 GUI 定位基准。

- 目录页面：https://awesomecua.com/zh/resources/github-likaixin2000-screenspot-pro-gui-grounding/
- English：https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/index.md
- 原始来源：https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：评测、GUI 定位
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:likaixin2000/screenspot-pro-gui-grounding

- 完整记录 JSON：https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/record.json

## 结构化规格

- 动作 / 输出：predicted target coordinates
- 评测方式：For positive targets, the predicted point must fall inside the annotated bounding box.
- 侧重：GUI grounding
- 观测：high-resolution screenshots, target instructions
- 任务设置：offline

### 数量记录

- 1,581 target annotations — sum of icon/text counts in the published card table（计算得出；来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md）

Language, instruction style, and positive/negative target configuration are explicit evaluator options. This profile describes target localization. The target count uses card-table targets; expanded language/style evaluation instances use a different count.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/readme.md（获取于 2026-10-16T06:35:58Z；SHA-256：7b64ccad9cfec24c2c9cb35f55923bff93d53729cef3cc7463c79b29bdb1de1a）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py（获取于 2026-10-16T11:38:05Z；SHA-256：a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc）
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：c78681e624c748b7a9980b6a9fd1514cec5140c7b3c7f08fe21b36bc7468f2ce）
