# mcp-remote-macos-use

MCP 服务器让 Claude Desktop 等 LLM 客户端经 Mac 内置 Screen Sharing 控制远程 Mac，通过 VNC 返回截图并发送按比例缩放的鼠标、键盘、滚动和拖动操作。

- 目录页面：https://awesomecua.com/zh/resources/github-baryhuang-mcp-remote-macos-use/
- English：https://awesomecua.com/resources/github-baryhuang-mcp-remote-macos-use/index.md
- 原始来源：https://github.com/baryhuang/mcp-remote-macos-use
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：自动化、工具集成
- 证据核查日期：2026-10-20T08:11:35Z
- ID：github:baryhuang/mcp-remote-macos-use

## 范围记录

Python MCP server published by baryhuang and distributed as the Docker image buryhuang/mcp-remote-macos-use; the target Mac needs only Screen Sharing enabled, with host, username and password passed as environment variables. Its own RFB client (src/vnc_client.py) supports only Apple Authentication (protocol 30). server.py registers eight tools: remote_macos_get_screen (a PNG screenshot), send_keys, mouse_move, mouse_click, mouse_double_click, mouse_scroll, mouse_drag_n_drop and open_application; action handlers scale the client's coordinates to the remote screen size, and open_application types the app name into Spotlight (Command+Space, text, Return). An optional LiveKit handler adds WebRTC screen sharing when LiveKit variables are set. The server has no model of its own; the MCP client's model decides the actions. Root LICENSE is MIT (copyright peakmojo); the default branch was last committed on 30 April 2025.

- 完整记录 JSON：https://awesomecua.com/resources/github-baryhuang-mcp-remote-macos-use/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/README.md（获取于 2026-10-20T08:11:35Z；SHA-256：3ee2f530a8510852966e65f7448b9f7bd2d9e884169a4c8248e20f081890e39a）
- https://api.github.com/repos/baryhuang/mcp-remote-macos-use/git/trees/58c13c785ce76ad1d37975e9b7aa32303b8d7c22?recursive=1（获取于 2026-10-20T08:11:12Z；SHA-256：64c98d12fc1ba2171e88bd55081e4233ea6039964d59e9e8338a879c8af63859）
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/LICENSE（获取于 2026-10-20T08:11:13Z；SHA-256：03e479d063b4b320ebd9a2965f14132875f14b0194f9575e22ac04407f7e0dc4）
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/mcp_remote_macos_use/server.py（获取于 2026-10-20T08:11:14Z；SHA-256：20a0d5ef8a6a3be78beb638730a8f555f6ca89cbc1535b879f780241e0ef3e51）
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/action_handlers.py（获取于 2026-10-20T08:11:14Z；SHA-256：75f99ba319d16467b8662fc5b29b361f0227a96c94a66392107203b9ab50b6cf）
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/vnc_client.py（获取于 2026-10-20T08:11:15Z；SHA-256：b61ee6ab59def44c2297e72f1502ec1a17f6b6d3bc79c4e0de5a03b0041c0ee5）
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/LICENSE（获取于 2026-10-20T08:11:40Z；SHA-256：03e479d063b4b320ebd9a2965f14132875f14b0194f9575e22ac04407f7e0dc4）
