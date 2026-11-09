# OpenAI Computer Use Sample Apps

OpenAI reference agents that drive a browser through Playwright JavaScript or a desktop through PyAutoGUI Python, with the model writing code via the Responses API, plus mock kanban, paint and booking labs.

- Catalog URL: https://awesomecua.com/resources/github-openai-openai-cua-sample-app/
- Original source: https://github.com/openai/openai-cua-sample-app
- Kind: agent
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: tool-integration, web-navigation, observability
- Evidence checked: 2026-10-18T11:14:13Z
- ID: github:openai/openai-cua-sample-app

## Limitations

The repository (ID 946708780, created 2025-03-11) keeps its original name and a description about using CUA through the API, but the inspected README and python-app/app/responses_loop.py now drive the model through persistent code-execution function tools (exec_py for PyAutoGUI; a JavaScript worker for Playwright) rather than the computer-use tool, so no relation to the OpenAI CUA model record is asserted. The default model is configurable. Each run copies a lab template and records screenshots and a replay trace. The README states that generated code runs with user permissions, without an operating-system sandbox or OpenAI's production action-review controls, and that a final answer does not prove task success. MIT applies to the sample code.

- Record JSON: https://awesomecua.com/resources/github-openai-openai-cua-sample-app/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/openai/openai-cua-sample-app/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/openai/openai-cua-sample-app/HEAD/README.md (retrieved 2026-10-18T11:14:13Z; SHA-256 46a7e27a2b7ba6bfea22349ff05e9acebf82eb06258817a4b42155b82fedd17c)
- https://api.github.com/repos/openai/openai-cua-sample-app (retrieved 2026-10-18T11:14:42Z; SHA-256 60ffbe86c794b4fad2fea1c8926f43dae9b0d590107dbeef26d1bf556e23e8bd)
- https://api.github.com/repos/openai/openai-cua-sample-app/git/trees/main?recursive=1 (retrieved 2026-10-18T11:14:45Z; SHA-256 ab019f99571d9ab49c6282b250f8e22f78de9fce5b23f8580ddf904c1b1572f2)
- https://raw.githubusercontent.com/openai/openai-cua-sample-app/HEAD/python-app/app/responses_loop.py (retrieved 2026-10-18T11:15:00Z; SHA-256 bba5f3c71f4a56fe6ad4ce6eded667e88ed32f3af9dae962a312823599a018b5)
- https://raw.githubusercontent.com/openai/openai-cua-sample-app/HEAD/LICENSE (retrieved 2026-10-18T11:14:48Z; SHA-256 13df7812ca53ecaae1cb4a868844bb598373047ae1d580e4debfbef1dd5b6915)
- https://raw.githubusercontent.com/openai/openai-cua-sample-app/HEAD/LICENSE (retrieved 2026-10-18T11:14:48Z; SHA-256 13df7812ca53ecaae1cb4a868844bb598373047ae1d580e4debfbef1dd5b6915)
