# Screen Annotation

Google Research release of ScreenAI's Screen Annotation data: train, validation and test CSVs that describe the UI elements of Rico mobile screens by type, box coordinates, on-screen text and image captions.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/
- Original source: https://github.com/google-research-datasets/screen_annotation
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:32:42Z
- ID: github:google-research-datasets/screen_annotation

## Limitations

Each CSV row pairs a Rico screen ID with one text serialization of the screen's UI elements, nested by containment; screenshots are not redistributed and come from Rico, which the Rico paper describes as Android apps. The README says the labels were produced automatically and then verified and corrected by human raters, and that the splits follow Screen2Words. Its per-split figures (15,743, 2,364 and 4,310 screenshots) are larger than the rows in the CSVs at commit 053a4a1c: 15,548 train, 2,311 valid and 4,217 test. The README names the columns image_id and label, while the files use screen_id and screen_annotation. CC BY 4.0 is the README's dataset declaration; the repository has no LICENSE file, and Rico screenshots keep their own terms.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/record.json

## Structured profile

- formats: CSV
- modalities: text annotations, bounding-box coordinates, Rico screen IDs
- splits: train, valid, test
- supervision: screen annotation: UI element type, location, text and image description

### Count observations

- 15,743 screenshots — train split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 2,364 screenshots — validation split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 4,310 screenshots — test split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 2,311 annotated screens (CSV rows) — valid.csv at commit 053a4a1c (computed) (computed; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv)
- 4,217 annotated screens (CSV rows) — test.csv at commit 053a4a1c (computed) (computed; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv)

The README's split sizes count screenshots; the CSV row counts count annotated screens, one row per screen ID. train.csv holds 15,548 rows at the same commit. Labels were machine-generated and then verified and corrected by human raters, according to the README.

## License declarations

- code: not recorded
- data: CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md
- document: not recorded
- weights: not recorded

- data review: The README states that the dataset is licensed under CC BY 4.0; Rico screenshots keep their own terms.
  Sources: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md

## Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md (retrieved 2026-10-18T12:32:42Z; SHA-256 db749dd869ced469a63b403173d9a69593778afc4afb43aacde4f2149d0485f9)
- https://api.github.com/repos/google-research-datasets/screen_annotation/git/trees/053a4a1c4737969def99fd36084d7adf3715798f?recursive=1 (retrieved 2026-10-18T12:32:43Z; SHA-256 ca12adf80ac7aa1efa98dab82d3a533fb40b49eeb8510f28df696788efa5236a)
- https://danafergan.com/publications/deka2017rico.pdf (retrieved 2026-10-18T12:33:11Z; SHA-256 a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84)
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv (retrieved 2026-10-18T12:32:44Z; SHA-256 a1f5928168d2dc71e70f41f8dcd7cc8f855d76bde709ddfd4b58e4660aa18457)
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv (retrieved 2026-10-18T12:32:44Z; SHA-256 db247ac02ce875c49c3429ae0bdfef0039cacc663598c61b7541f24342537f98)
