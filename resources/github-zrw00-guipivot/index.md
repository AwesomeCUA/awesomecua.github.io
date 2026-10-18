# GUIPivot

Query-inference training tools connecting screenshot grounding with GUI action reasoning, including preprocessing, query refinement and offline single-step evaluation on AndroidControl and AITZ.

- Catalog URL: https://awesomecua.github.io/resources/github-zrw00-guipivot/
- Original source: https://github.com/ZrW00/GUIPivot
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, planning, imitation-learning
- Evidence checked: 2026-10-18T12:02:55.267942+00:00
- ID: github:zrw00/guipivot

## Limitations

The repository releases preprocessing/refinement/evaluation code and multipart ShareGPT-format JSON annotations. Evaluation matches recorded single-step action predictions on AndroidControl and AITZ; it does not run live device tasks. The README links a UIBERT training-JSON path that is not a standalone file in this revision; annotations are packaged in data/GUI.z01, data/GUI.z02 and data/GUI.zip. Original UIBERT/OS-Atlas, AITZ and AndroidControl images must be obtained separately. This entry does not claim a released trained checkpoint or transfer the GPL-3.0 code license to third-party datasets and images.

- Record JSON: https://awesomecua.github.io/resources/github-zrw00-guipivot/record.json

## License declarations

- code: GPL-3.0 — https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository GNU GPL version 3 license for code; no data or pretrained-weight license inferred.
  Sources: https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/README.md (retrieved 2026-10-18T12:02:55.267942+00:00; SHA-256 77384ff1dfceac74f2e60af56b016a815963481f9e41a29915698777f55e828e)
- https://api.github.com/repos/ZrW00/GUIPivot (retrieved 2026-10-18T11:25:27+00:00; SHA-256 3d57dc43db78620832e41416e4bfb7ae445afe782e5538d85a9784a8f1e5e4eb)
- https://api.github.com/repos/ZrW00/GUIPivot/git/trees/b02e8efdbe02ab82169a2c54d724e33b4037330e?recursive=1 (retrieved 2026-10-18T12:02:54.310430+00:00; SHA-256 a4d3ddbb2b2f4a936c9bc1a1c388b9870dbc5d2c61ff6841a1082b884f5c54e9)
- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/LICENSE (retrieved 2026-10-18T12:03:28.611747+00:00; SHA-256 3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986)
- https://arxiv.org/html/2503.00401v2 (retrieved 2026-10-18T12:02:36.501726+00:00; SHA-256 25e5282e7d85bca133fc77e294cd95d90e4ae65b0d8796cd7c49f53a633b4893)
- https://raw.githubusercontent.com/ZrW00/GUIPivot/b02e8efdbe02ab82169a2c54d724e33b4037330e/data/dataset_info.json (retrieved 2026-10-18T12:03:30.911159+00:00; SHA-256 9b5b196e065be2ebc05169a68710b8a6e1bd3b6eb663c68bb449234dbb7a45af)
