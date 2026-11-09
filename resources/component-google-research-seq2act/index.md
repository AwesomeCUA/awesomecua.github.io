# Seq2act code (google-research)

TensorFlow code for mapping natural-language instructions to Android UI action sequences, with phrase-tuple extraction and grounding models and pipelines for AndroidHowTo, RicoSCA and PixelHelp.

- Catalog URL: https://awesomecua.com/resources/component-google-research-seq2act/
- Original source: https://github.com/google-research/google-research/tree/master/seq2act
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: action-prediction, grounding, data-generation, mobile-navigation
- Evidence checked: 2026-10-18T10:58:37Z
- ID: component:google-research/seq2act

## Limitations

Scoped to the seq2act directory of the google-research monorepo. The README says AndroidHowTo and PixelHelp were re-created from public sources and give slightly different results than the paper; the data are generated or downloaded separately, and a pre-trained end-to-end grounding checkpoint is linked from Cloud Storage. The monorepo's Apache-2.0 LICENSE is recorded for code only and does not establish terms for the datasets or the checkpoint. github.com/deepneuralmachine/seq2act-tensorflow is an unofficial 2020 copy of this directory.

- Record JSON: https://awesomecua.com/resources/component-google-research-seq2act/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/seq2act/README.md (retrieved 2026-10-18T10:58:37Z; SHA-256 9972cfb5234025fa8a62d402dcd3479deec21fbb87cce428d5c235bda4bb6dd8)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-18T10:58:46Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
