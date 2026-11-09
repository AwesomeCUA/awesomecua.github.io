# MolmoPoint-GUISyn

Ai2's synthetic GUI grounding set of about 36K code-rendered desktop, mobile and web screenshots, each with dense element boxes, names and five natural-language intents per element for training pointing models.

- Catalog URL: https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/
- Original source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux, android, ios, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-19T06:17:16Z
- ID: url:a7e3c6c6b37793c3151c

## Limitations

Screenshots are rendered with headless Chromium from HTML that Claude Sonnet 4.6 wrote, so the Windows, macOS, Linux, iOS and Android labels describe simulated interfaces, not captures of real systems; the card says this content is subject to Anthropic's terms. Each example keeps its source HTML and generation metadata. The Hub repository also holds the MolmoPoint paper PDF; the generation pipeline and the companion pointing model are released separately.

- Record JSON: https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/record.json

## Structured profile

- formats: Parquet
- modalities: screenshots, HTML source, bounding boxes, instructions
- splits: desktop train, desktop validation, mobile train, mobile validation, web train, web validation
- supervision: synthetic GUI element annotations, element names, natural-language interaction intents

### Count observations

- ≈ 36,000 screenshots — all three subsets as described in the card prose (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 16,232 screenshot examples — desktop train split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 256 screenshot examples — desktop validation split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 9,830 screenshot examples — web train split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 256 screenshot examples — web validation split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- ≈ 10,500 screenshot examples — mobile subset as described in the card prose (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)

The card metadata gives split sizes for the desktop and web configurations only; the mobile configuration's sizes appear only as the prose figure of 10.5K. The prose figures for desktop (16.6K) and web (10.2K) differ slightly from the metadata split totals (16,488 and 10,086). Each element carries a name, five intents and center/size coordinates; the card reports an average of 54 annotated elements per image. Annotations are LLM-generated and were not human-verified by this review.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting declarations in the same card: the metadata header declares Apache-2.0, while the License section declares ODC-BY and adds that Claude-generated screenshots are subject to Anthropic's terms. The GitHub code license does not resolve the data terms.
  Sources: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md

## Primary evidence

- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md (retrieved 2026-10-19T06:17:16Z; SHA-256 74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd)
- https://huggingface.co/api/datasets/allenai/MolmoPoint-GUISyn/revision/24bb3e990bb1e48796d80ade9dbc858dda695e75 (retrieved 2026-10-19T06:17:16Z; SHA-256 df47b9fad1bfd4ec67013263cd4bfe1be0a32e3f303f2e13be068ac81bdc4101)
- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md (retrieved 2026-10-19T06:17:16Z; SHA-256 74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd)
