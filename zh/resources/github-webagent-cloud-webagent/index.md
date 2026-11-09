# Webagent (webagent.cloud)

可自行托管的浏览器智能体服务器，运行 Browser Use 或 Notte 智能体，将运行记录中的操作转为参数化工作流，再通过 Playwright 重放，步骤失败时交由智能体处理。

- 目录页面：https://awesomecua.com/zh/resources/github-webagent-cloud-webagent/
- English：https://awesomecua.com/resources/github-webagent-cloud-webagent/index.md
- 原始来源：https://github.com/webagent-cloud/webagent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：自动化、工作流、网页导航
- 证据核查日期：2026-10-20T07:41:55Z
- ID：github:webagent-cloud/webagent

## 范围记录

Open-source code of the webagent.cloud hosted service, published by webagent-cloud. A FastAPI server (server.py, webagent/api.py) with a bundled React UI accepts a prompt and runs it with the engine set by ENGINE_PROVIDER: Browser Use by default, or Notte, whose agent is fixed to gemini-2.5-flash with at most 30 steps. The browser comes from BROWSER_PROVIDER: a local Playwright Chromium over CDP, Browserbase or Steel; at the reviewed commit the Steel provider's create_session takes a context argument that the caller omits. Models are reached through Browser Use's chat clients for OpenAI, DeepSeek, Anthropic, Google and Groq; other provider values fall back to the OpenAI client. After a run, workflow_builder_service.py asks an LLM to extract parameters from the prompt and template the recorded actions with their element XPaths; workflow_replay_service.py replays those steps with Playwright (navigation, search, XPath clicks and typing, scrolling, key presses, uploads, dropdowns) without a model and, when an action fails, hands that step to the AI engine for up to three attempts. Tasks, runs and results are kept in a local SQLite database; results can be text or JSON validated against a supplied JSON Schema, and a webhook can be called on completion. The README's n8n, Zapier and Make integrations and Stagehand engine are not in the tree. Root LICENSE is MIT.

- 完整记录 JSON：https://awesomecua.com/resources/github-webagent-cloud-webagent/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/webagent-cloud/webagent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/webagent-cloud/webagent/HEAD/README.md（获取于 2026-10-20T07:41:55Z；SHA-256：4262e0f23c1fa2bdfe887a9ad9679cbd398c1e031c3760678d863242a3b1f276）
- https://api.github.com/repos/webagent-cloud/webagent/git/trees/21969388bbb70a0ebf44aee0a8a913ccc54d294e?recursive=1（获取于 2026-10-20T04:43:10Z；SHA-256：196b9b7c64b450b10263e5dcb8458f14d7cbd62648894018ab66dc6d455576e1）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/LICENSE（获取于 2026-10-20T04:43:11Z；SHA-256：8149145076020a5c142fb8fd03463a2da2cadce98aa703ac6746f40cb5ee8f6b）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/agent_service.py（获取于 2026-10-20T04:43:15Z；SHA-256：91e52a56360d5fd5657ba8c598afb08c86ca26b45a354b2147d0c37d880dc7e3）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/engine_providers/browseruse_service.py（获取于 2026-10-20T04:43:12Z；SHA-256：6b1ba814c102f943348a7214238d299d59dfad6077f6300cb005ddc43c44646f）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/engine_providers/notte_service.py（获取于 2026-10-20T04:43:12Z；SHA-256：d8b16ba84530eb6caa72cc5409bbe701904a89e21591eb67152c8f8217197c20）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/workflow_builder_service.py（获取于 2026-10-20T04:43:11Z；SHA-256：0f3e65b0312156d63c90fb78b7b90516b7d54788bf3fb5c71d08e91c1d62ad38）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/workflow_replay_service.py（获取于 2026-10-20T04:43:11Z；SHA-256：3d784549d7dd0d92a5c0ea27a0a43d36e311baf5a1bcf59a44707726453a4f25）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/workflow_ai_fallback_service.py（获取于 2026-10-20T04:43:11Z；SHA-256：b9913e4a935e544c8599b16c0dcd004acec275fded435e743f8e8723e14aeded）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/browser_providers/steel_browser_service.py（获取于 2026-10-20T04:43:14Z；SHA-256：2740f416cbe5878ade75db3f0fb8bce6763df335e1b4f26c70005599f6724785）
- https://raw.githubusercontent.com/webagent-cloud/webagent/21969388bbb70a0ebf44aee0a8a913ccc54d294e/webagent/llm_service.py（获取于 2026-10-20T04:44:10Z；SHA-256：9964b0d3beee28d4deb8ab9ee469768def10b2350e517e6b61e14c52874c0cb1）
- https://raw.githubusercontent.com/webagent-cloud/webagent/HEAD/LICENSE（获取于 2026-10-20T04:44:29Z；SHA-256：8149145076020a5c142fb8fd03463a2da2cadce98aa703ac6746f40cb5ee8f6b）
