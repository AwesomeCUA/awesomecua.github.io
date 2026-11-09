# jev-use

macOS 语音和文字计算机使用应用，遍历前台应用的无障碍树，由托管的 Jev 模型逐步选择操作和编号目标，再通过无障碍操作及模拟输入执行。

- 目录页面：https://awesomecua.com/zh/resources/github-savka777-jev-use/
- English：https://awesomecua.com/resources/github-savka777-jev-use/index.md
- 原始来源：https://github.com/savka777/jev-use
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：自动化、效率、人机协作
- 证据核查日期：2026-10-20T07:55:46Z
- ID：github:savka777/jev-use

## 范围记录

The Swift app (built as Desktop Voice.app; macOS 14.2+ and Xcode) reads the front window's Accessibility tree, skipping secure text fields, and sends the command, app and window names, numbered targets and recent actions to TypeSafe's hosted systemone endpoint with model jev-latest; no screenshots are sent (Sources/JevDesktop/Desktop.swift, Sources/JevCore/Decision.swift). Actions use Accessibility presses and value setting plus CGEvent mouse, key and scroll events. An optional OpenRouter key enables a planner model (default inception/mercury-2.5) that splits a spoken command into steps; Jev still chooses each on-screen target (Sources/JevCore/Planner.swift). Input is Apple Speech hold-to-talk, hands-free mode, an optional "Hey Jev" wake phrase, or typed commands. The README says low-confidence and destructive picks stop and ask. Jev is a hosted model.

- 完整记录 JSON：https://awesomecua.com/resources/github-savka777-jev-use/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/savka777/jev-use/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/savka777/jev-use/HEAD/README.md（获取于 2026-10-20T07:55:46Z；SHA-256：33dcaacf9df33772c939e9d47b9f9d9b2a62aa89350f18679c1efa30a9b53a72）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/README.md（获取于 2026-10-20T07:55:00Z；SHA-256：33dcaacf9df33772c939e9d47b9f9d9b2a62aa89350f18679c1efa30a9b53a72）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/Sources/JevDesktop/Desktop.swift（获取于 2026-10-20T07:55:00Z；SHA-256：749d56d50e44b0b186075823f2ebde9b7ce0202dca0433508b1525d8c8fd1efe）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/Sources/JevCore/Decision.swift（获取于 2026-10-20T07:55:01Z；SHA-256：be29bfdff736e2d471f00fb20d8777f9195653385708baf6ceba42f70e0248e7）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/Sources/JevCore/Planner.swift（获取于 2026-10-20T07:55:01Z；SHA-256：d415336ae42e87dd015503c62ca947cba81f6ea7a6266e586da63941331d6b94）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/Sources/JevDesktop/JevDesktopApp.swift（获取于 2026-10-20T07:55:04Z；SHA-256：b3e1a792f0a817662ecc2d87cd8fe4900d76ba1e8251a38b5c1ac916d2d7594a）
- https://raw.githubusercontent.com/savka777/jev-use/b22e568adf110eeb64f89bf4d731a69d23c461dc/LICENSE（获取于 2026-10-20T07:55:04Z；SHA-256：d07df820340b2caa015b0135264e779facb2e2098874fa12bc99dd7069480be3）
- https://raw.githubusercontent.com/savka777/jev-use/HEAD/LICENSE（获取于 2026-10-20T07:55:53Z；SHA-256：d07df820340b2caa015b0135264e779facb2e2098874fa12bc99dd7069480be3）
