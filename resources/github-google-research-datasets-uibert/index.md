# UIBert AppSim and RefExp annotations

Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.

- Catalog URL: https://awesomecua.github.io/resources/github-google-research-datasets-uibert/
- Original source: https://github.com/google-research-datasets/uibert
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:google-research-datasets/uibert

## Limitations

The archived repository retains TFRecord train/dev/test files for AppSim and RefExp. These are annotation and UI-structure records with Rico image identifiers, not a republished complete screenshot collection or a UIBert checkpoint. The README’s 72k figure describes the upstream Rico source, not the number of released AppSim/RefExp examples; no sample total is inferred. The publisher explicitly assigns CC-BY-4.0 to these datasets.

- Record JSON: https://awesomecua.github.io/resources/github-google-research-datasets-uibert/record.json

## Structured profile

- formats: TFRecord
- modalities: text, bounding boxes, UI hierarchy metadata, Rico image identifiers
- splits: AppSim train/dev/test, RefExp train/dev/test
- supervision: similar UI element retrieval, referring-expression component retrieval

### Count observations

No count recorded.

Original UI images are retrieved separately by Rico IDs. No release-specific sample count is established.

## License declarations

- code: not recorded
- data: CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md
- document: not recorded
- weights: not recorded

- data review: The README explicitly says the datasets are licensed under CC BY 4.0; original Rico materials keep their source terms.
  Sources: https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md

## Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 45d1ca0f5c727cf58b2671dc5579f0628f4d78e07b977a5d8b018295c6fe1f58)
- https://api.github.com/repos/google-research-datasets/uibert (retrieved 2026-10-17T12:30:54Z; SHA-256 24a7838d425bdae363a7d5872702996b22068c1f0e47be274fdfbc4b0e20144f)
- https://api.github.com/repos/google-research-datasets/uibert/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 9a6fc19c6b407309943fe645f4addb3d032f153856976c4f8d7a8cfb6d2ffe6b)
- https://interactionmining.org/rico (retrieved 2026-10-17T12:36:55Z; SHA-256 f752ebfb2598b7f848d343f428502b28e0f591f27849ab707f14bee398d4eb8d)
