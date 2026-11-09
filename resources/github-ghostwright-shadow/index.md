# Shadow

macOS app that records screen, audio, input events and accessibility trees on-device, builds searchable episodes, and replays learned procedures through AX-first grounding with a LoRA-tuned ShowUI-2B fallback.

- Catalog URL: https://awesomecua.com/resources/github-ghostwright-shadow/
- Original source: https://github.com/ghostwright/shadow
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: recording, data-generation, grounding, memory, screen-understanding
- Evidence checked: 2026-10-20T08:22:38Z
- ID: github:ghostwright/shadow

## Limitations

Requires Apple Silicon, macOS 14 or later and a source build (Swift 6, Rust, XcodeGen). GroundingOracle.swift resolves targets for the Mimicry replay system in four steps: exact accessibility-tree match, fuzzy accessibility match, a local ShowUI-2B model on MLX over a live screenshot, then a vision-model escalation. TrainingDataGenerator.swift turns recorded (screenshot, accessibility state, click) tuples into JSONL grounding examples, and LoRATrainer.swift fine-tunes ShowUI-2B on them through the mlx-vlm Python package once enough new tuples accumulate. The README describes the capture of fourteen signal types, on-device Qwen and Whisper models, a 26-tool agent runtime, and points to a separate computer-use engine from the same publisher for full computer use. Cloud model features are optional with the user's own API key.

- Record JSON: https://awesomecua.com/resources/github-ghostwright-shadow/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/ghostwright/shadow/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ghostwright/shadow/HEAD/README.md (retrieved 2026-10-20T08:22:38Z; SHA-256 019cacc0c585b5c26ba2a4f7fc72cec2fdb43fa02fdecdad1c0904a3fadbcbb4)
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/README.md (retrieved 2026-10-20T08:22:15Z; SHA-256 019cacc0c585b5c26ba2a4f7fc72cec2fdb43fa02fdecdad1c0904a3fadbcbb4)
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/GroundingOracle.swift (retrieved 2026-10-20T08:22:15Z; SHA-256 d9e2ec54f562462e713558ca72adf8aab7c141e3fd8b2537c480ff0bf206c00f)
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/LoRATrainer.swift (retrieved 2026-10-20T08:22:15Z; SHA-256 c74efecb59f211eaf572a0756133bbd94ff087bac340f7e47ecb3b5436acc54f)
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/TrainingDataGenerator.swift (retrieved 2026-10-20T08:22:16Z; SHA-256 1550f777dfb4df1cf5ff47f1ca58bac0c928a60e2214c08baad74143e1ff5207)
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/LICENSE (retrieved 2026-10-20T08:22:16Z; SHA-256 8c578527d5aac83a4efb4f3a19969bae14853e0f5b0646ae59afff3dc90d36fa)
- https://raw.githubusercontent.com/ghostwright/shadow/HEAD/LICENSE (retrieved 2026-10-20T08:22:40Z; SHA-256 8c578527d5aac83a4efb4f3a19969bae14853e0f5b0646ae59afff3dc90d36fa)
