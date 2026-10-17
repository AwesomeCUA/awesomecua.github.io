# OS-Map

An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.

- Catalog URL: https://awesomecua.github.io/resources/github-os-copilot-os-map/
- Original source: https://github.com/OS-Copilot/OS-Map
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon, cross-app
- Evidence checked: 2026-10-17T09:12:14Z
- ID: github:os-copilot/os-map

## Limitations

Public task manifests, agent runner and evaluator code are present, and the linked ungated Hub manifest lists Ubuntu0.zip and task files. The main setup supports x86 VMware Workstation and says ARM/Docker alternatives are still in development. An inherited evaluation-examples README still mentions Windows 10 and under-construction status; those statements are retained as a documentation inconsistency, not interpreted as verified Windows support. The manifest has 416 category/task references but 412 globally distinct ID strings.

- Record JSON: https://awesomecua.github.io/resources/github-os-copilot-os-map/record.json

## Structured profile

- actions: actions executed by the OSWorld-derived DesktopEnv
- evaluation: Task configurations provide evaluators for application/system state, using an OSWorld-derived runtime.
- focus: breadth of desktop task coverage, depth of desktop task execution
- observations: desktop observations from an Ubuntu virtual machine
- setting: interactive

### Count observations

- 416 category/task references — evaluation_examples/all.json (computed) (computed; source: https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json)

416 category/task pairs are unique, but only 412 bare ID strings are unique across categories. This is a manifest-reference count, not a claim of 416 semantically distinct tasks. Main runtime documentation specifies Ubuntu; the subdirectory README retains older Windows-only wording.

## License declarations

- code: MIT — https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code LICENSE; no license is inferred for the VM image or bundled third-party applications.
  Sources: https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/README.md (retrieved 2026-10-17T09:12:14Z; SHA-256 fc9f3c8d9fffdff8b51e312b013be0d9fdfc10e57fdc2ec4a8a8d012c4b42475)
- https://api.github.com/repos/OS-Copilot/OS-Map (retrieved 2026-10-17T09:12:14Z; SHA-256 d6c91b4910e92f40cc694b4cb6467c1a20f42c0c14047b95a1e777aca0892677)
- https://api.github.com/repos/OS-Copilot/OS-Map/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:07Z; SHA-256 41342157c53f28ad2729137491930225ac11da922e7b16762e84ac958a2e9d28)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE (retrieved 2026-10-17T09:14:07Z; SHA-256 1dd924135cbf0a85ce72d75025259adb7b849970d400af4ed854327a34e7ee41)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json (retrieved 2026-10-17T09:17:22Z; SHA-256 4199af4c8bc60451079d8a2e7598ab7386bd82b0d5c9ad7e6927d6cb8e03ad6f)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/README.md (retrieved 2026-10-17T09:17:22Z; SHA-256 a6b60d5721cfdd26416e7d0ae3192360896427a97ccb3793812cc150e9cd7126)
- https://huggingface.co/api/datasets/os-map/OSMAP (retrieved 2026-10-17T09:14:16Z; SHA-256 d2da837872b123f2927a069a020aeb14fb4b22148599c9f2e8b6689ee444ec88)
