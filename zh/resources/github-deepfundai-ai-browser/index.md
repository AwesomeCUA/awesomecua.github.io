# AI Browser (DeepFundAI)

Electron 桌面浏览器，内置从基于 Eko 的 npm 包导入的智能体，可规划可编辑的多步工作流并操作自身标签页中的网页，同时提供聊天、定时任务和记忆功能。

- 目录页面：https://awesomecua.com/zh/resources/github-deepfundai-ai-browser/
- English：https://awesomecua.com/resources/github-deepfundai-ai-browser/index.md
- 原始来源：https://github.com/DeepFundAI/ai-browser
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、工作流、人机协作
- 证据核查日期：2026-10-18T15:41:31Z
- ID：github:deepfundai/ai-browser

## 范围记录

The repository holds the Next.js and Electron app: tabs as Electron WebContentsView instances (electron/main/services/tab-manager.ts), scheduling, memory, settings, and the agent wiring in electron/main/services/eko-service.ts. The BrowserAgent and FileAgent themselves are imported from the npm packages @jarvis-agent/core and @jarvis-agent/electron (0.3.x), which the README describes as based on Eko; their npm metadata names FellouAI as author and a placeholder repository URL, and their source is not in this tree. In Deep Explore mode the user confirms or edits the generated workflow, and the agent can ask questions during a run. The README calls it a learning project developed and tested mainly with DeepSeek models. Releases ship macOS and Windows installers.

- 完整记录 JSON：https://awesomecua.com/resources/github-deepfundai-ai-browser/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/README.md（获取于 2026-10-18T15:41:31Z；SHA-256：227fc4df2761a0fe4abc714e0f50f55290a351d769a05032f749824b99e02993）
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/electron/main/services/eko-service.ts（获取于 2026-10-18T15:41:28Z；SHA-256：c6dafa9e7c30e6b589acaa96b51a3a552b34f55ed76f270c26d28618417acaf1）
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/electron/main/services/tab-manager.ts（获取于 2026-10-18T15:41:28Z；SHA-256：4683c4a14967335bbb3aa5b91d010bdeb9ec4783a57f73213918df8935e753c7）
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/package.json（获取于 2026-10-18T15:41:29Z；SHA-256：19418f0be5ea19b3c775d4a56fae5dbd08d5de665dadbf58440e47906dea3445）
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/LICENSE（获取于 2026-10-18T15:41:29Z；SHA-256：dcf14747aed27f24321ce837c0006d1637c92a818481def3ff5793e2f9aef889）
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/LICENSE（获取于 2026-10-18T15:41:39Z；SHA-256：dcf14747aed27f24321ce837c0006d1637c92a818481def3ff5793e2f9aef889）
