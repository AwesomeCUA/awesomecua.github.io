# DomA

DomA 浏览器智能体 Chrome 和 Edge 扩展的公开源码版：通过带标记的截图和元素列表观察网页，以 DOM 事件和 CDP 点击操作，并经 MCP 提供工具。

- 目录页面：https://awesomecua.com/zh/resources/github-dom-actions-doma/
- English：https://awesomecua.com/resources/github-dom-actions-doma/index.md
- 原始来源：https://github.com/dom-actions/doma
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化、工具集成
- 证据核查日期：2026-10-18T15:43:31Z
- ID：github:dom-actions/doma

## 范围记录

The README presents DomA as a browser agent from Stay Browser, and the LICENSE notice names Dom Actions; the commercial store build adds video download, a userscript manager and ad blocking on top of this core. The service worker implements browser_* tools (tabs, navigation, page content, element lists, click, text click, type, select, scroll, script execution, clipboard). browser_screenshot tags up to 150 visible interactive elements with data-som-idx and composites numbers and borders onto a clean viewport capture, grouping the overflow into areas A1 to A5; clicks fall back to CDP Input.dispatchMouseEvent through chrome.debugger. With the Jev switch on, a high-confidence Jev decision can execute a click or type without sending the image to the LLM. Models are user-supplied OpenAI-compatible endpoints. An MCP bridge (stdio server plus a local daemon on ports 3846/3847) and a CLI let Cursor, Claude or OpenClaw drive the extension.

- 完整记录 JSON：https://awesomecua.com/resources/github-dom-actions-doma/record.json

## 许可证信息

- 代码：PolyForm-Shield-1.0.0 — https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Root LICENSE is the PolyForm Shield License 1.0.0 with a 2026 Dom Actions required notice; it is source-available, not an OSI open-source license, and forbids using the software to compete with DomA. It covers the extension code only.
  来源：https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE

## 一手证据

- https://raw.githubusercontent.com/dom-actions/doma/HEAD/README.md（获取于 2026-10-18T15:43:31Z；SHA-256：21a62e98c89f6ccb50a036918275682f938274d796521679c3bcfe292d86b38e）
- https://api.github.com/repos/dom-actions/doma/git/commits/fe3afa7a04d7a2f719e9da82c6b61502504819ce（获取于 2026-10-18T15:43:09Z；SHA-256：00ac80e84f1bd15742dd72997399cad933cdd2edb0e9b6b51a1aa2143980534c）
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/src/services/chat/browserTools.ts（获取于 2026-10-18T15:43:09Z；SHA-256：5b33ef1d33d7037bbfc9dafb574a07df61e1cdcffd02ac67a04e1fdf270146fa）
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/mcp-bridge/README.md（获取于 2026-10-18T15:43:10Z；SHA-256：a3ee5ff8d8a87b04e6541b838e2d4781bb8b26f3a5c3f11e020f772ec3449bc2）
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE（获取于 2026-10-18T15:43:10Z；SHA-256：cc25b07935368ad2a6e962d4b60643c0da6bc57948f5265c1256beb269266660）
