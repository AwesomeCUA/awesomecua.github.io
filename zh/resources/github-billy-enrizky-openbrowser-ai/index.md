# OpenBrowser

Python 浏览器自动化框架：CodeAgent 向模型展示带索引的 DOM 状态和可选截图，再在持久化命名空间中运行其编写的 Python 代码，通过 Chrome DevTools Protocol 辅助工具操作浏览器。

- 目录页面：https://awesomecua.com/zh/resources/github-billy-enrizky-openbrowser-ai/
- English：https://awesomecua.com/resources/github-billy-enrizky-openbrowser-ai/index.md
- 原始来源：https://github.com/billy-enrizky/openbrowser-ai
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化、工具集成
- 证据核查日期：2026-10-18T15:33:16Z
- ID：github:billy-enrizky/openbrowser-ai

## 范围记录

Published on PyPI as openbrowser-ai. The CodeAgent (src/openbrowser/code_use/service.py) sends a compact serialized DOM state with element indices and, unless vision is turned off, a JPEG screenshot; the model replies with Python that the executor runs in a persistent namespace. The MCP server exposes a single execute_code tool over the same namespace, and a CLI daemon keeps a browser session alive between commands. The repository also holds a hosted-platform backend and frontend, and infra/training with SFT, online GRPO and diffusion-language-model RL code for FormFactory form filling; the README links the two related papers on ResearchGate. Token and latency comparisons with other browser tools are publisher-reported.

- 完整记录 JSON：https://awesomecua.com/resources/github-billy-enrizky-openbrowser-ai/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/README.md（获取于 2026-10-18T15:33:16Z；SHA-256：5932f9377209714b55d969410f301422a8083cd702af79974e70e000f0e5d73b）
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/src/openbrowser/code_use/service.py（获取于 2026-10-18T15:32:55Z；SHA-256：0a3890c37aac37f7bc7fcc3430a3de830978436d5f67911a95f7ac2c923f6a5e）
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/src/openbrowser/mcp/server.py（获取于 2026-10-18T15:32:55Z；SHA-256：04724480ffd6c9d1b29c1f7b193ce35e80c0b82934d72d5f2924e73b61033f91）
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/infra/training/finetuning/online_grpo_trainer.py（获取于 2026-10-18T15:32:56Z；SHA-256：6cb5223bd2403f9dd343206fef7b77edc74c803ec0b265f03570ee11bef84510）
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/48ec5d9dccad00001a5c7d644b863bf1277bb1e0/LICENSE（获取于 2026-10-18T15:32:56Z；SHA-256：4341c316d2ba2ec1e37f184e8ac1251def4368da78262633f1197174cd671aab）
- https://raw.githubusercontent.com/billy-enrizky/openbrowser-ai/HEAD/LICENSE（获取于 2026-10-18T15:33:22Z；SHA-256：4341c316d2ba2ec1e37f184e8ac1251def4368da78262633f1197174cd671aab）
