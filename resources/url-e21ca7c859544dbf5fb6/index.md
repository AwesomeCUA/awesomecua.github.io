# OmniParser v2 model bundle

A screen-parsing weight bundle containing icon-region detectors and an icon captioner for converting screenshots into agent-readable interface elements.

- Catalog URL: https://awesomecua.github.io/resources/url-e21ca7c859544dbf5fb6/
- Original source: https://huggingface.co/microsoft/OmniParser-v2.0
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-16T06:36:04Z
- ID: url:e21ca7c859544dbf5fb6

## Limitations

The manifest contains icon_detect/model.pt, icon_detect_v3/model.pt and icon_caption/model.safetensors. Licenses differ by folder: original YOLOv8 detector AGPL-3.0; YOLOv9-E detector and Florence-2 captioner MIT. The card’s top-level MIT metadata must not cover the entire bundle. Components remain one resource; no binaries were executed.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Mixed by component: icon_detect = AGPL-3.0; icon_detect_v3 = MIT; icon_caption = MIT — https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md

- weights review: The top-level Hub metadata says MIT, but the same card and folder licenses distinguish the original detector from the new detector and captioner. Preserve one model-bundle identity with a mixed license declaration.
  Sources: https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/microsoft/OmniParser/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 f4ebaafcc0ab0b9e9cc55cb587678e5c83a5bbd64469fb2cc52bc63843c5cc6d)
- https://huggingface.co/api/models/microsoft/OmniParser-v2.0 (retrieved 2026-10-17T04:03:41Z; SHA-256 1ea8af0cfd9cd716de8af8b78b2451470e1e1f22233a7286c5f40e1f496dc4be)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md (retrieved 2026-10-17T04:03:41Z; SHA-256 6ae154d65bfc2755703440be02acf63a37b741a1101b7c42b666da93a4ed2310)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE (retrieved 2026-10-17T04:09:13Z; SHA-256 4df3c306dddaaf4baffdff5ca820cc679ac8cd6dc263c6a74517783e42fa7a3b)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE (retrieved 2026-10-17T04:06:57Z; SHA-256 646f8936b8ddcd14e13e578ff6857e368780b0d1a4f6066bee89211923a373e2)
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE (retrieved 2026-10-17T04:09:13Z; SHA-256 d9a1b1e30d633d5732ea18e3cba9538d293ebc53e1a9e4e96ab739e0c5c4f1cb)
