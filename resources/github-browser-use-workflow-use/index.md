# Workflow Use

Turns a recorded browser session or a Browser Use agent run into a parameterized workflow file that replays deterministically with Playwright, falling back to an LLM agent when a step fails.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-workflow-use/
- Original source: https://github.com/browser-use/workflow-use
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: workflow, recording, automation, web-navigation
- Evidence checked: 2026-10-18T11:13:42Z
- ID: github:browser-use/workflow-use

## Limitations

Scope is adjacent because the main path records and replays deterministic browser workflows (described as RPA 2.0); agent involvement is limited to generating a workflow from one Browser Use run and to fallback or self-healing steps, which the README marks as early and still being improved. The tree contains a Chrome recording extension, a Python workflow package (recorder, builder, healing, MCP, storage), a FastAPI backend and a web UI. The README advises against production use. The LICENSE file is the GNU AGPL v3 text with the Free Software Foundation copyright line replaced by a Browser Use Inc. notice. GitHub reports AGPL-3.0, but the catalog's verbatim-header rule leaves the code license unrecorded.

- Record JSON: https://awesomecua.com/resources/github-browser-use-workflow-use/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/README.md (retrieved 2026-10-18T11:13:42Z; SHA-256 d87cca0c2041e2d10c4643dc04d21fc142dddd6c3bea7b208e57fed4474363d2)
- https://api.github.com/repos/browser-use/workflow-use (retrieved 2026-10-18T11:13:56Z; SHA-256 dbc5758062bbadb6b2583e63c95d43bd4c544c8898bf1019d960b1435a5e0057)
- https://api.github.com/repos/browser-use/workflow-use/git/trees/main?recursive=1 (retrieved 2026-10-18T11:13:56Z; SHA-256 11a372bee17b5888e7a8378c373fc2bc42aa50dd968317b2643c8a0cbc550641)
- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/LICENSE (retrieved 2026-10-18T11:13:58Z; SHA-256 d0244248ae3e9cc081ff0d0010aaae97fc89d2a4bce58fd93a137ab26c268989)
