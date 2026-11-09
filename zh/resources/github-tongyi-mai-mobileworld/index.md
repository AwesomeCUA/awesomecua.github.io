# MobileWorld (Tongyi-MAI)

容器化 Android 评估环境，包含纯 GUI、智能体与用户交互及 MCP 增强的任务，并检查应用和后端状态。

- 目录页面：https://awesomecua.com/zh/resources/github-tongyi-mai-mobileworld/
- English：https://awesomecua.com/resources/github-tongyi-mai-mobileworld/index.md
- 原始来源：https://github.com/Tongyi-MAI/MobileWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、人机协作、工具集成
- 证据核查日期：2026-10-17T09:12:16Z
- ID：github:tongyi-mai/mobileworld

## 范围记录

This is Tongyi-MAI/MobileWorld, distinct from jacklishufan/MobileWorld (MobileWorldBench). Public source includes task definitions, verification logic and environment orchestration. The README reports 201 tasks across 20 applications. Linux/KVM or WSL2/KVM is required by the documented host setup, with macOS support in progress. MCP and simulated-user settings can require separate external services.

- 完整记录 JSON：https://awesomecua.com/resources/github-tongyi-mai-mobileworld/record.json

## 结构化规格

- 动作 / 输出：Android GUI operations, MCP calls when enabled, agent-user interaction when enabled
- 评测方式：The publisher documents text-answer matching, backend database verification, local-storage inspection and application callbacks.
- 侧重：Android task completion, agent-user interaction, hybrid GUI and MCP use
- 观测：Android application interface, user-agent interaction when enabled
- 任务设置：interactive

### 数量记录

- 201 tasks — README benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md）
- 20 mobile applications — README benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md）

Publisher-reported inventory. GUI-only, agent-user and MCP-augmented configurations have different dependencies and task eligibility; preserve enabled modes and step budget with results.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Repository code license; self-hosted applications, model APIs and MCP services keep their own terms.
  来源：https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE

## 一手证据

- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md（获取于 2026-10-17T09:12:16Z；SHA-256：fbc306b3414dfdb230171358efd6eb8d67573fbb94e11487a4a7e971e2abf0d9）
- https://api.github.com/repos/Tongyi-MAI/MobileWorld（获取于 2026-10-17T09:12:15Z；SHA-256：266e1fe5b5b1a4c1540ab0fd5eba206395084ee283f0079f424930a156cf8e18）
- https://api.github.com/repos/Tongyi-MAI/MobileWorld/git/trees/main?recursive=1（获取于 2026-10-17T09:14:08Z；SHA-256：14500ed2dfa14bb5c34211090f0c8827e4a16c3233e35a2d695c0d7261f9358b）
- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE（获取于 2026-10-17T09:14:09Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）
