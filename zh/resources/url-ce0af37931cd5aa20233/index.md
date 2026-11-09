# Tongyi UI Agent API

阿里云 Model Studio API 根据截图和任务返回下一步 GUI 动作及其推理，提供移动端流程和由规划、执行、反思及记忆智能体组成的 PC 端流程。

- 目录页面：https://awesomecua.com/zh/resources/url-ce0af37931cd5aa20233/
- English：https://awesomecua.com/resources/url-ce0af37931cd5aa20233/index.md
- 原始来源：https://help.aliyun.com/zh/model-studio/ui-agent-api
- 类型：产品
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows
- 主题：手机操作、自动化、规划、自我反思
- 证据核查日期：2026-10-19T06:31:54Z
- ID：url:ce0af37931cd5aa20233

## 范围记录

The page (version V0.0.1) documents a DashScope endpoint for the gui-owl app that takes a screenshot URL, a task instruction, a session ID and optional operation hints (add_info), and returns the next action, such as a click or swipe with screen coordinates, with a thought and an explanation. Requests set device_type to mobile or pc and use the model pre-gui_owl_7b; the PC pipeline also names worker, manager, reflector and notetaker models and can enable the reflection and memory agents. The page states that the agent targets phones, in-car systems, TVs and PCs, names no mobile operating system, and lists usage as free for a limited time. The X-PLUG/MobileAgent README links this page as a limited-time free Mobile-Agent-v3 API; the page itself names no paper or released checkpoint, so no relation to the Mobile-Agent or GUI-Owl records is asserted. The receipt uses the Markdown export because the HTML embeds a per-request tracking ID.

- 完整记录 JSON：https://awesomecua.com/resources/url-ce0af37931cd5aa20233/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://help.aliyun.com/zh/model-studio/ui-agent-api.md（获取于 2026-10-19T06:31:54Z；SHA-256：cb5bc5f73accb2e5e73cc3e1043ca741f371e50ea4784ddf6b207dfd5a66506a）
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/11cea575561fb7800b5fb6b6cafa56f7a91de11f/README.md（获取于 2026-10-19T06:31:53Z；SHA-256：ca402ffd3b05f72a6d72f47de52c962f92e410749a77939044f3301d4330af16）
