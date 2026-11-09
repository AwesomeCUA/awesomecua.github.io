# MoCon

Icon and text bounding-box annotations for 10,364 mobile app screenshots, with 154 icon classes and font-family text labels in LabelMe JSON and train, val and test splits; images not included.

- Catalog URL: https://awesomecua.com/resources/url-c7489f15e7883a695832/
- Original source: https://huggingface.co/datasets/OpenDFM/MoCon
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-10-18T16:15:57Z
- ID: url:c7489f15e7883a695832

## Limitations

The card, shared with its sibling crawl release, carries only the license, links and citation requests, and the pre-release PDF it links is a two-page announcement framed around mobile GUI agents without methods or statistics. Contents were read from the 15.6 MB mocondata.zip (SHA-256 98463d69…, matching the Hub LFS object): one LabelMe 4.5.9 JSON file per screenshot whose imagePath names a JPEG that is not in the repository and whose imageData is empty. A script counted 364,352 rectangles: 212,342 labelled icon with one of the 154 icon.csv classes (in Chinese or English) and 152,010 text boxes labelled with a font family (sans, fantasy, serif, cursive, mono or math) and the transcribed text. Image sizes are mostly 1080×1920 and 540×960 portrait. No operating system is named, so the environment stays unspecified. CC BY-NC-SA 4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-c7489f15e7883a695832/record.json

## Structured profile

- formats: LabelMe JSON, ZIP, CSV
- modalities: bounding-box annotations, UI text transcriptions
- splits: train, val, test
- supervision: icon bounding boxes with class labels, text bounding boxes with transcribed text and font-family labels

### Count observations

- 6,972 annotated screenshots — MoCon train split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 1,143 annotated screenshots — MoCon val split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 2,249 annotated screenshots — MoCon test split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 154 icon classes — icon.csv class table (Chinese and English names) (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv)

split.csv assigns each of the 10,364 annotation IDs to exactly one split, and the IDs match the JSON file names in mocondata.zip one to one. Screenshot images are referenced by file name but not released, so the annotations cannot be paired with pixels from this repository alone. The publisher states no counts; all counts were computed from the released files.

## License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd)
- https://huggingface.co/api/datasets/OpenDFM/MoCon (retrieved 2026-10-18T16:15:56Z; SHA-256 9ddd265eeda4ed7439927fefd24805573c46fb9ee072341b8129a377d720f8f5)
- https://huggingface.co/api/datasets/OpenDFM/MoCon/tree/e37127c9ad04ccd5a1381aa60054683eda8a5462 (retrieved 2026-10-18T16:16:12Z; SHA-256 4cbfe0afb8a5b37901a986d9bfcb38c2e6bd9455eebdb95879039c15c205d6a9)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv (retrieved 2026-10-18T16:15:58Z; SHA-256 281c3b35f822b9e7b278552c663718df17ba698fccc8ef65ef29280cbae2dd18)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv (retrieved 2026-10-18T16:15:59Z; SHA-256 409e9b424de315eafd248f80030221b70c4f372355f88b1ce36b076c52db1ef5)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/MoGUI_Paper_v0.1.pdf (retrieved 2026-10-18T16:16:00Z; SHA-256 5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5)
- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd)
