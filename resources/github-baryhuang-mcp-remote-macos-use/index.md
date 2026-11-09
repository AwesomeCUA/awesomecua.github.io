# mcp-remote-macos-use

MCP server that lets an LLM client such as Claude Desktop control a remote Mac through its built-in Screen Sharing, returning screenshots and sending scaled mouse, keyboard, scroll and drag actions over VNC.

- Catalog URL: https://awesomecua.com/resources/github-baryhuang-mcp-remote-macos-use/
- Original source: https://github.com/baryhuang/mcp-remote-macos-use
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, tool-integration
- Evidence checked: 2026-10-20T08:11:35Z
- ID: github:baryhuang/mcp-remote-macos-use

## Limitations

Python MCP server published by baryhuang and distributed as the Docker image buryhuang/mcp-remote-macos-use; the target Mac needs only Screen Sharing enabled, with host, username and password passed as environment variables. Its own RFB client (src/vnc_client.py) supports only Apple Authentication (protocol 30). server.py registers eight tools: remote_macos_get_screen (a PNG screenshot), send_keys, mouse_move, mouse_click, mouse_double_click, mouse_scroll, mouse_drag_n_drop and open_application; action handlers scale the client's coordinates to the remote screen size, and open_application types the app name into Spotlight (Command+Space, text, Return). An optional LiveKit handler adds WebRTC screen sharing when LiveKit variables are set. The server has no model of its own; the MCP client's model decides the actions. Root LICENSE is MIT (copyright peakmojo); not a fork, not archived; the default branch was last committed on 30 April 2025. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-baryhuang-mcp-remote-macos-use/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/README.md (retrieved 2026-10-20T08:11:35Z; SHA-256 3ee2f530a8510852966e65f7448b9f7bd2d9e884169a4c8248e20f081890e39a)
- https://api.github.com/repos/baryhuang/mcp-remote-macos-use/git/trees/58c13c785ce76ad1d37975e9b7aa32303b8d7c22?recursive=1 (retrieved 2026-10-20T08:11:12Z; SHA-256 64c98d12fc1ba2171e88bd55081e4233ea6039964d59e9e8338a879c8af63859)
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/LICENSE (retrieved 2026-10-20T08:11:13Z; SHA-256 03e479d063b4b320ebd9a2965f14132875f14b0194f9575e22ac04407f7e0dc4)
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/mcp_remote_macos_use/server.py (retrieved 2026-10-20T08:11:14Z; SHA-256 20a0d5ef8a6a3be78beb638730a8f555f6ca89cbc1535b879f780241e0ef3e51)
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/action_handlers.py (retrieved 2026-10-20T08:11:14Z; SHA-256 75f99ba319d16467b8662fc5b29b361f0227a96c94a66392107203b9ab50b6cf)
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/58c13c785ce76ad1d37975e9b7aa32303b8d7c22/src/vnc_client.py (retrieved 2026-10-20T08:11:15Z; SHA-256 b61ee6ab59def44c2297e72f1502ec1a17f6b6d3bc79c4e0de5a03b0041c0ee5)
- https://raw.githubusercontent.com/baryhuang/mcp-remote-macos-use/HEAD/LICENSE (retrieved 2026-10-20T08:11:40Z; SHA-256 03e479d063b4b320ebd9a2965f14132875f14b0194f9575e22ac04407f7e0dc4)
