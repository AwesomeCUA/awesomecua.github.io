# MONDAY annotations

Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.

- Catalog URL: https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/
- Original source: https://huggingface.co/datasets/runamu/MONDAY
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: data-generation, mobile-navigation, video, imitation-learning
- Evidence checked: 2026-10-17T12:32:07Z
- ID: url:570654ff67ecefa2b955

## Limitations

The ungated Hub publishes four Parquet splits containing video identifiers and annotations. Original videos and extracted screenshots must be obtained separately; the code README explains that consumers download source videos from YouTube. A Windows Mobile unseen-OS test split is documented but is not labeled desktop Windows here. The companion code has an Apache-2.0 file, while the data card declares no data license and the repository defers third-party materials to original terms. Training scripts, pretrained checkpoints and the full generation pipeline remain planned updates.

- Record JSON: https://awesomecua.github.io/resources/url-570654ff67ecefa2b955/record.json

## Structured profile

- formats: Parquet
- modalities: text, timestamps, bounding boxes, action labels
- splits: train, validation, test, test_unseen_os
- supervision: video-derived scene and action annotations

### Count observations

- 19,725 video annotation records — train split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 495 video annotation records — validation split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 100 video annotation records — test split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 50 video annotation records — test_unseen_os split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 333,000 detected scenes — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 313,000 identified actions — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)

Split counts are video-annotation rows; scene and action totals are rounded publisher reports and are not added to row counts. Source videos/images are not included in the Hub files.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No dataset-license declaration in the inspected card; Apache-2.0 applies to companion code and is not transferred to YouTube content or this annotation package.
  Sources: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE

## Primary evidence

- https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 62a346fd0d328deb5b56a652c8581850b0c8120f5c77e53b33f24b9baf937adb)
- https://huggingface.co/api/datasets/runamu/MONDAY (retrieved 2026-10-17T12:32:07Z; SHA-256 f55c319a70c8ff988049363dc8fc266a9f1b1a09b8ac7096ee573f962e8f9492)
- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md (retrieved 2026-10-17T12:30:53Z; SHA-256 cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc)
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE (retrieved 2026-10-17T12:34:09Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
