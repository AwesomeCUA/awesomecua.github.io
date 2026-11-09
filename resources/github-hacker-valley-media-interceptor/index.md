# Interceptor

CLI and MCP server that lets agents operate the user's signed-in Chrome, Brave or Safari, native apps via accessibility on macOS, Windows and Linux, and a physical iPhone through an XCUITest runner.

- Catalog URL: https://awesomecua.com/resources/github-hacker-valley-media-interceptor/
- Original source: https://github.com/Hacker-Valley-Media/Interceptor
- Kind: tool
- Review: curated
- Scope: core
- Environments: web, desktop, macos, windows, linux, ios
- Topics: tool-integration, recording, workflow
- Evidence checked: 2026-10-19T06:19:26Z
- ID: github:hacker-valley-media/interceptor

## Limitations

Source-available under the Elastic License 2.0 with separate commercial terms; GitHub reports NOASSERTION. Browser work goes through Interceptor's own extension and can also read page traffic and rich-editor scenes. macOS release packages target Apple silicon and the native bridge needs macOS 15+; Windows 11 24H2+ and Linux Full packages add native app control. iPhone automation needs a paired iPhone in Developer Mode, a Mac and Xcode with a developer team. Browser and Mac sessions can be recorded and exported as replay plans. No model API key is required; the calling agent supplies the model.

- Record JSON: https://awesomecua.com/resources/github-hacker-valley-media-interceptor/record.json

## License declarations

- code: Elastic-2.0 — https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: GitHub reports NOASSERTION, but the LICENSE file is the Elastic License 2.0 text with a Hacker Valley Media copyright line and package.json declares Elastic-2.0; this is source-available, not an open-source license.
  Sources: https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/LICENSE, https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/COMMERCIAL.md

## Primary evidence

- https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/HEAD/README.md (retrieved 2026-10-19T06:19:26Z; SHA-256 c20e45ece8cdcc72c0f6dc723520ebd760cb113456b908b3e63a0bc0406dc550)
- https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/package.json (retrieved 2026-10-18T12:01:23Z; SHA-256 7a23b4094988d23f799f53322de113577bffe3f950f2395aa68f5d01eecc7b32)
- https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/LICENSE (retrieved 2026-10-18T12:01:23Z; SHA-256 e70a75b8857ef54c9b8e895dc9d7883296f0180dd95911ec6737ccdda059ed4e)
- https://raw.githubusercontent.com/Hacker-Valley-Media/Interceptor/250c6b1cf8b3056b3741a6954f1d10b5f2ad5ae4/COMMERCIAL.md (retrieved 2026-10-18T12:01:23Z; SHA-256 3680d7b1c255796a5b48a1abf909cae754693ed73b6b8eac8c3040dcdc605c3a)
