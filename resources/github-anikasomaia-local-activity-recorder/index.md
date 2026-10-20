# Activity Recorder

Windows tray utility that records primary-display screenshots, keyboard key codes and mouse events as local JPEG and JSON files for training-data collection.

- Catalog URL: https://awesomecua.github.io/resources/github-anikasomaia-local-activity-recorder/
- Original source: https://github.com/anikasomaia/local-activity-recorder
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: recording, data-generation
- Evidence checked: 2026-10-20T11:57:15.716415+00:00
- ID: github:anikasomaia/local-activity-recorder

## Limitations

Recording is started and stopped from the tray; screenshots use a five-second timer. The manual Upload Data action uses a built-in third-party demonstration endpoint unless changed in code, sending recorded files as base64 JSON. Successful uploads move files into uploaded subfolders rather than delete them; no automatic expiry policy was found in the inspected capture/upload path. Sensitive-application filters are listed as future work. The README's .NET version requirements are inconsistent, and long-session behavior was not established. No license declaration was found in the inspected files or complete tree's license-file names, so code permission remains unknown. No activity was captured and no uploader or executable was run.

- Record JSON: https://awesomecua.github.io/resources/github-anikasomaia-local-activity-recorder/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No license declaration was found in the inspected README/C# files, and the complete pinned tree has no LICENSE, LICENCE or COPYING-named file. Public source access does not establish reuse permission.
  Sources: https://api.github.com/repos/anikasomaia/local-activity-recorder/git/trees/f7ec5b6ecf0ba1bfe6362d7f2bfb0f1af5ac6bc7?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/README.md (retrieved 2026-10-20T11:57:15.716415+00:00; SHA-256 440e0e43026ba7a20eaca17507cec33bd697d8b1eed6fb056be34136b3f4f76f)
- https://api.github.com/search/repositories?q=topic%3Acomputer-use-agents+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:41.685729+00:00; SHA-256 90c30399c8aa5031f82164978bc12eae3bebba172758d20877a87fec53566c12)
- https://api.github.com/repos/anikasomaia/local-activity-recorder/commits/master (retrieved 2026-10-20T11:54:07.061516+00:00; SHA-256 f5b501fa132163d749c6695d81c76d45fdff2888ea890e31cbaa9bc4172fed3b)
- https://api.github.com/repos/anikasomaia/local-activity-recorder/git/trees/f7ec5b6ecf0ba1bfe6362d7f2bfb0f1af5ac6bc7?recursive=1 (retrieved 2026-10-20T11:56:33.833893+00:00; SHA-256 ee9e5899d1f150982eb05ca1f8794406cef0ffc80eb8223811b504ff972370c1)
- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/Program.cs (retrieved 2026-10-20T12:05:00.168119+00:00; SHA-256 ce3022b4016d140eac554e392dbe42f54ffb3e8098b03e2bf72e92ff49c5d084)
- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/DataUploader.cs (retrieved 2026-10-20T12:05:03.421222+00:00; SHA-256 e70e2e68b5dd586e5ad0fb0b12c8b937b4614bd5237bac61d03d22144c4751f4)
