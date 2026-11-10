# AUV

Rust toolkit, CLI and MCP server for scripting reusable GUI operations on macOS, Linux and Windows, with native input drivers, accessibility trees, OCR and traced, verifiable action results.

- Catalog URL: https://awesomecua.com/resources/github-moeru-ai-auv/
- Original source: https://github.com/moeru-ai/auv
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, windows
- Topics: automation, efficiency, screen-understanding, observability
- Evidence checked: 2026-10-20T08:06:29Z
- ID: github:moeru-ai/auv

## Limitations

The README describes AUV as tooling that agents call, with no agent or harness of its own: an agent calls the auv CLI or the MCP server, or writes reusable Rust or JavaScript/TypeScript operations against the versioned Protobuf/gRPC daemon API; a first-party Python SDK is listed as planned. The capability matrix lists native desktop drivers for macOS, Linux and Windows, with Android and iOS planned, and background pointer input on macOS only. Integrations under supported/ cover desktop apps such as Apple Music and games such as Balatro. evals/osworld only provisions an OSWorld Ubuntu desktop on Kubernetes; its README leaves task setup, evaluation and AUV pairing as separate work. The workspace version in Cargo.toml at the inspected commit is 0.0.35.

- Record JSON: https://awesomecua.com/resources/github-moeru-ai-auv/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/moeru-ai/auv/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/moeru-ai/auv/HEAD/README.md (retrieved 2026-10-20T08:06:29Z; SHA-256 6c7b3dd73e2ff75912be373e933151a9e9643c5b3ab057f36d6c2e5d9284a308)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/README.md (retrieved 2026-10-20T08:05:44Z; SHA-256 6c7b3dd73e2ff75912be373e933151a9e9643c5b3ab057f36d6c2e5d9284a308)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/Cargo.toml (retrieved 2026-10-20T08:05:45Z; SHA-256 ef446d78239d4bfd0500dfcfcb58313bb2e4810e451347c4acd519674bcc05df)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/crates/auv-cli/src/commands/mcp.rs (retrieved 2026-10-20T08:05:45Z; SHA-256 ef9377f010deebada3a77f64608ff316e10aed4b0065aa276e90b5ab3c52ff82)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/evals/osworld/README.md (retrieved 2026-10-20T08:05:45Z; SHA-256 4dab629cf654eff7abc8425829415eb1f2aa429ac29d6c95f89dd3785df0813c)
- https://raw.githubusercontent.com/moeru-ai/auv/11d9e256956d8836e83b48c9eedfaab722ad5c3d/LICENSE (retrieved 2026-10-20T08:05:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/moeru-ai/auv/HEAD/LICENSE (retrieved 2026-10-20T08:06:33Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
