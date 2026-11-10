# OSWorld 2.0 trajectories

XLang's gated release of OSWorld 2.0 agent runs: 21 ZIP result archives named by model and run settings, plus per-task trajectory JSONL, step screenshots, results and logs for seven model runs.

- Catalog URL: https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/
- Original source: https://huggingface.co/datasets/xlangai/osworld2.0-trajectory
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon
- Evidence checked: 2026-10-18T12:07:35Z
- ID: url:3b4e6c30e1d095c22771

## Limitations

The repository is gated with automatic approval; its card could not be read without accepting the gate, and the Hub API carries no card metadata or license. The OSWorld-V2 README links it as the benchmark's trajectory download beside a hosted trajectory viewer. Some archive names carry the v2.1 label, a release the README dates after the paper, and step budgets of 150, 300 or 500; the runs include evaluations beyond the paper.

- Record JSON: https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/record.json

## Structured profile

- Formats: ZIP archives, PNG, JSONL, JSON, text logs
- Modalities: screenshots, trajectory logs, result files, API usage records
- Splits: not recorded
- Supervision: agent run trajectories, evaluation results

### Count observations

- 21 ZIP result archives — repository root at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0)
- 7 model run folders — website_demo folder at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo)
- 108 task folders — website_demo/MiniMax-M3/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks)
- 108 task folders — website_demo/claude-opus-4-7/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks)
- 108 task folders — website_demo/claude-sonnet-4-6-max/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks)
- 108 task folders — website_demo/claude-sonnet-4-6-medium/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks)
- 108 task folders — website_demo/gpt-5.5/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks)
- 107 task folders — website_demo/gpt-5.6/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks)
- 108 task folders — website_demo/qwen3.7/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks)

Counts come from the Hub tree listings at the pinned revision. A task folder is one model's run of one task; folders across models overlap by task, with 107 folders for gpt-5.6 and 108 for the others. The inspected folder website_demo/MiniMax-M3/tasks/001 holds traj.jsonl, 501 PNG step screenshots, result and per-step-budget result files, eval and runtime logs, checkpoint results and API usage. ZIP archive contents and their trajectory counts are unknown.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No data-license declaration is readable: the card is behind the access gate and the Hub API has no card metadata.
  Sources: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory

## Primary evidence

- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory (retrieved 2026-10-18T12:07:35Z; SHA-256 691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md (retrieved 2026-10-18T12:07:36Z; SHA-256 0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0 (retrieved 2026-10-18T12:07:36Z; SHA-256 ea47577538434f9f4095efec3ab5df156cdb90132c4b226c64c53ba861a34fbe)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo (retrieved 2026-10-18T12:07:37Z; SHA-256 9049b14cdecc2be6a23eae60362769f2eea4284454f3d35a0a0e6d20a86a2bf0)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 e66da738b64af2d79bbae9f75befa2423c6e2bdb00941c7f12afb58d9413c083)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 4e51c4903cc95fb305a39e4f6eb5d496aa5c67f47c499f6185d922fac6cd4bc3)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 24e4bd257eb6a7a0b015227b726057f587fd617d26878d88208d1871877169be)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 7892c77e47a846b79191df5dd94b44671c96343d34ca0dc13685300b36592253)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 842dee0c38022622e0b6f226fc78fb83ff18e28ee7debe21c81717ea0cb50388)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks (retrieved 2026-10-18T12:07:38Z; SHA-256 adf4626b61ff2cdffe049d18ac335b9abb31b5d80c52a7053e3f4a26ca4248a6)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks (retrieved 2026-10-18T12:07:38Z; SHA-256 1ce80893f5c161008d75aba19ddc25db10b169c9b5047a9530668bf5b72768e7)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks/001 (retrieved 2026-10-18T12:07:38Z; SHA-256 2381fce2e44ea97602a22d0dac4f6a2879860e04800bfd3f0552eb3e6ace38d5)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory (retrieved 2026-10-18T12:07:35Z; SHA-256 691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea)
