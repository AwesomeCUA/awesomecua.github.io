# Pix2Struct base (pretrained)

Pretrained base-size Pix2Struct checkpoint in Transformers format, learned by parsing masked web page screenshots into simplified HTML and released only as a starting point for fine-tuning.

- Catalog URL: https://awesomecua.com/resources/url-bb1440d051c68455a72e/
- Original source: https://huggingface.co/google/pix2struct-base
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-18T16:07:20Z
- ID: url:bb1440d051c68455a72e

## Limitations

Adjacent: a general visual-language pretraining checkpoint, not an agent or a UI-specific fine-tune. The card calls it the pretrained version of Pix2Struct for fine-tuning only, quotes the paper abstract, shows the T5X-to-Transformers conversion script, and says the weights were contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada. Hub API at revision 4605659e lists model.safetensors and pytorch_model.bin in the Pix2StructForConditionalGeneration architecture, with 282,285,696 F32 parameters reported for the safetensors file; the repository is not gated. The card gives no scores and does not link the Pix2Struct code repository, so no family relation is recorded. The card declares Apache-2.0 for the checkpoint; no pretraining data is part of this release.

- Record JSON: https://awesomecua.com/resources/url-bb1440d051c68455a72e/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md

## Primary evidence

- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md (retrieved 2026-10-18T16:07:20Z; SHA-256 4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e)
- https://huggingface.co/api/models/google/pix2struct-base/revision/4605659ec5d82c985955ebdea8210f32fe54a682 (retrieved 2026-10-18T16:07:04Z; SHA-256 bb1962674cf165e80a32f358c4bc2b79714eaa0eb0b79145174e4dbf17d2bad2)
- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md (retrieved 2026-10-18T16:07:20Z; SHA-256 4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e)
