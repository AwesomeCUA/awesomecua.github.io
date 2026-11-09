# AndroidControl

Android 操作演示，包含高层目标、分步指令、截图和无障碍树。

- 目录页面：https://awesomecua.com/zh/resources/component-google-research-android-control/
- English：https://awesomecua.com/resources/component-google-research-android-control/index.md
- 原始来源：https://github.com/google-research/google-research/tree/master/android_control
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作
- 证据核查日期：2026-10-16T06:38:29Z
- ID：component:google-research/android_control

- 完整记录 JSON：https://awesomecua.com/resources/component-google-research-android-control/record.json

## 结构化规格

- 格式：GZIP-compressed TFRecord
- 模态：screenshots, accessibility trees, instructions, JSON actions
- 数据划分：publisher split file
- 监督信号：interaction trajectories, high- and low-level action instruction

### 数量记录

- > 15,000 demonstrations — AndroidControl collection（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md）
- 833 applications — AndroidControl collection（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md）

Step instructions can be repeated across multiple actions. Each episode has one more screenshot than action; step instructions can repeat across multiple actions.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md（获取于 2026-10-16T06:38:29Z；SHA-256：e4f8baa15441fb63cad07220cc5a4de177a1f785d4fe1fed5cfcbf3c3867faf1）
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE（获取于 2026-10-16T06:42:06Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
