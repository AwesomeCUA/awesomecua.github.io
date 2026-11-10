# Rico

用于 UI 研究的移动应用截图、视图层级和交互轨迹。

- 目录页面：https://awesomecua.com/zh/resources/url-0b134b082a7bd507fc6a/
- English：https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/index.md
- 原始来源：https://www.interactionmining.org/archive/rico
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:29Z
- ID：url:0b134b082a7bd507fc6a

## 范围记录

The official project page cites the 2017 Rico paper. The project page reports more than 66,000 screens, while the original publication reports more than 72,000. The retained paper and project page report separate screen and app counts; the reason for their difference remains unresolved. App counts also differ: the official project page reports more than 9.3k Android apps and the retained published abstract more than 9.7k. Profile counts use the project-page scope; no reconciliation is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/record.json

## 结构化规格

- 格式：PNG, JSON, CSV, NumPy NPY, GIF
- 模态：screenshots, Android view hierarchies, gesture traces, transition animations, app/UI metadata
- 数据划分：未记录
- 监督信号：UI structure and element properties, recorded human interactions, learned UI layout embeddings

### 数量记录

- > 66,000 个不重复的 UI 界面 — original Rico downloads described on the project page（来源报告；来源：https://www.interactionmining.org/archive/rico）
- > 9,300 个 Android 应用 — original Rico collection described on the project page（来源报告；来源：https://www.interactionmining.org/archive/rico）
- 10,811 条人工交互追踪记录 — crowd-worker collection before automated exploration（来源报告；来源：https://www.interactionmining.org/archive/rico）

Project-page scope: screenshots paired with augmented view hierarchies, gesture coordinates, layout vectors and metadata. These observations describe screens paired with metadata; action and task totals use different units. The later semantic-annotation download augments the same screen corpus. The retained original paper reports more than 72k screens from more than 9.7k apps while this project page says more than 66k screens and more than 9.3k apps; the difference is unresolved. Profile counts follow the project page; the paper reports a separate screen and app population. No train/validation/test partition or data license is established here; archives were not downloaded.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://www.interactionmining.org/archive/rico（获取于 2026-10-16T06:38:29Z；SHA-256：daa370b9aae5bce9f5171ea81fa4574c6155e04177af1db138529efd76377f89）
- https://danafergan.com/publications/deka2017rico.pdf（获取于 2026-10-17T10:01:32Z；SHA-256：a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84）
