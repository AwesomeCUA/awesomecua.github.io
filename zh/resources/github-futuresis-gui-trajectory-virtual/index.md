---
title: "GUI-Trajectory-Virtual · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-futuresis-gui-trajectory-virtual/
updated: 2026-10-18
type: framework
lang: zh-CN
---

# GUI-Trajectory-Virtual

无需设备即可合成 Android 智能体轨迹：聊天补全 API 后的图像模型根据上一张截图和 Mobile-Agent-v3 风格智能体选择的操作绘制下一屏。

- 目录页面：https://awesomecua.com/zh/resources/github-futuresis-gui-trajectory-virtual/
- English：https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/index.md
- 原始来源：https://github.com/Futuresis/GUI-Trajectory-Virtual
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、世界模型、手机操作
- 证据核查日期：2026-10-18T15:56:30Z
- ID：github:futuresis/gui-trajectory-virtual

## 范围记录

The README says its arXiv paper is still to come; the GUIGuard project page presents this repository as that paper's trajectory-synthesis workflow, which is the basis for the paper link. In virtual_env_gemini3.py each step sends the previous screenshot and an action description to a chat-completions endpoint and decodes the returned image as the next screen; the code's default model is google/gemini-2.0-flash-exp:free, while the README examples use google/gemini-3-pro-image-preview. The adapter mocks the accessibility tree and ADB calls. The runner defines 57 social-app task goals whose simplified task class reports success as 1.0 without a check; generated trajectories therefore have unverified outcomes. Nothing was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/README.md（获取于 2026-10-18T15:56:30Z；SHA-256：2262044b993d01ef4833e28511f2646983e2ae3df2e1ae097eef6896062aa87a）
- https://futuresis.github.io/GUIGuard-page/（获取于 2026-10-18T15:54:36Z；SHA-256：14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5）
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_gemini3.py（获取于 2026-10-18T15:54:39Z；SHA-256：5c53724751a6bbd86773179aa3aaad8fc8ae7564d1aaa00167e7fcd4caddc870）
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/run_virtual.py（获取于 2026-10-18T15:54:39Z；SHA-256：fb3ce0feb35566cd2ad2913794cb6983d7a949540e8f1a03fef58e81cce2f931）
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_adapter.py（获取于 2026-10-18T15:56:05Z；SHA-256：e5d4dd12b9562aa48cc6ca641d717633796ea18fa50715570d69e0b5b06def70）
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/agent_env/task_evals/single/contacts.py（获取于 2026-10-18T15:54:40Z；SHA-256：b668a60fd31dc89b7e493585ff1bf4966a3fbd6c8a77da10adaa2f4727133be6）
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE（获取于 2026-10-18T15:56:48Z；SHA-256：0b7f2e6ad1dbbf5989c34b34a71da4a9b7271b2356715fb007a009ec73d1b705）
