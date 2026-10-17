# UICrit

Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.

- Catalog URL: https://awesomecua.github.io/resources/github-google-research-datasets-uicrit/
- Original source: https://github.com/google-research-datasets/uicrit
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, ui-design, evaluation
- Evidence checked: 2026-10-17T02:02:45Z
- ID: github:google-research-datasets/uicrit

## Limitations

The published CSV contains critique text, normalized boxes, ratings and RICO IDs; screenshots are referenced through RICO. The README explicitly licenses the work CC-BY-4.0. Its current 1,000-screen, 11,344-critique release differs from the original paper population. The README cites an ACM DOI rather than an arXiv ID, so no paper relation is asserted here. Its README establishes mobile interfaces without naming an operating system.

- Record JSON: https://awesomecua.github.io/resources/github-google-research-datasets-uicrit/record.json

## Structured profile

- formats: CSV
- modalities: text, bounding boxes, quality ratings
- splits: not recorded
- supervision: design critique, region localization, quality rating

### Count observations

- 1,000 mobile UI screens — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)
- 11,344 design critiques — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)

Publisher-reported current release, separate from the smaller original-paper population. Screenshot pixels are obtained through referenced RICO IDs.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md (retrieved 2026-10-17T02:02:45Z; SHA-256 345ff7003120f146016741099dd57b9b1a9ffc54ce1fc90f4d16d61e31d379e6)
- https://api.github.com/repos/google-research-datasets/uicrit (retrieved 2026-10-17T02:02:45Z; SHA-256 5579bbbc622a2f9fa1f77b509c1ece17af023b8c14b53aa48dcc41288a5852f2)
- https://api.github.com/repos/google-research-datasets/uicrit/contents (retrieved 2026-10-17T02:02:45Z; SHA-256 8e790a53de8c40aa14f9e49aebf42b077e6a172a6841f38c7c6851af57b0617a)
