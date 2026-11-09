# native-devtools-mcp

Local Rust MCP server for operating macOS and Windows apps, Chrome or Electron pages over CDP, and Android devices over ADB, with screenshots, OCR, accessibility lookup, input and template matching.

- Catalog URL: https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/
- Original source: https://github.com/vectora-foundry/native-devtools-mcp
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, android, web
- Topics: tool-integration, automation, screen-understanding, recording
- Evidence checked: 2026-10-20T08:00:27Z
- ID: github:vectora-foundry/native-devtools-mcp

## Limitations

Distributed through npm (npx native-devtools-mcp; version 0.10.1 in npm/package.json and Cargo.toml at the inspected commit) and as a signed macOS app for Claude Desktop. On macOS it can walk the Accessibility tree and dispatch AXPress, value and selection changes without moving the cursor (src/macos/ax.rs), besides CGEvent input and Vision OCR; Windows uses SendInput, UI Automation and Windows Media OCR. Chrome and Electron pages are driven through the Chrome DevTools Protocol with chromiumoxide (src/cdp/mod.rs), and Android through adb shell input and uiautomator (src/android/input.rs). Optional start_recording captures window frames and hover tracking reports dwell-filtered pointer positions with the element under them (src/tools/hover_tracker.rs). The README limits support to platforms other than Linux and iOS. The server contains no model or agent loop; an MCP client supplies the agent.

- Record JSON: https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/README.md (retrieved 2026-10-20T08:00:27Z; SHA-256 98a05a45218d4643999df366eaf07fa1128a31ecf0611bebfebc872fb10f1010)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/README.md (retrieved 2026-10-20T07:59:57Z; SHA-256 98a05a45218d4643999df366eaf07fa1128a31ecf0611bebfebc872fb10f1010)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/npm/package.json (retrieved 2026-10-20T07:59:58Z; SHA-256 a8650625acf7a0665e98aca042884f9f48cd08da2963b7aef963fd119bb1138e)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/Cargo.toml (retrieved 2026-10-20T07:59:58Z; SHA-256 760450540ed7ce983d0bee6716a010c5758a09c592fc8c8d78529769df08cb40)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/macos/ax.rs (retrieved 2026-10-20T07:59:58Z; SHA-256 244a9b287ef5bce86bd0578b54ce065f72a837025f083677a7df76e6ddbd0318)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/cdp/mod.rs (retrieved 2026-10-20T08:00:00Z; SHA-256 ca0ec9d8b32336cca7ed726a883e70bbbca368ce2547efce247af2e2c5a9c998)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/android/input.rs (retrieved 2026-10-20T07:59:59Z; SHA-256 1e0814adeb0adeb45e76d0d6c613b04e63dc3e4a186b0fd4ff0e76996b1ced36)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/tools/hover_tracker.rs (retrieved 2026-10-20T08:00:00Z; SHA-256 2c1ab7c72d82a40829aa07870d446175fd52eebb0f95376cc3c50ebbc9bfe33e)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/LICENSE (retrieved 2026-10-20T08:00:00Z; SHA-256 1813232deb7c18ae02acefcfa7bf01d4753798c2707d61a35ba954ee471e2513)
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/LICENSE (retrieved 2026-10-20T08:00:30Z; SHA-256 1813232deb7c18ae02acefcfa7bf01d4753798c2707d61a35ba954ee471e2513)
