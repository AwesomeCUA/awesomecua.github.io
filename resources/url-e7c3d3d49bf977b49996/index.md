# Two-Box Judge GUI Dataset

Training data for BAMI's local correction model: pairs of cropped GUI screenshots that each highlight one candidate box, with a click command and an automatic label for the box that fits it.

- Catalog URL: https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/
- Original source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, windows, macos
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T15:35:11Z
- ID: url:e7c3d3d49bf977b49996

## Limitations

In each sample, the first crop marks the grounding model's initial box and the second the box found after masking and regrounding; both are crops around the candidate. Labels come from IoU of at least 0.5 or a center point inside the ground-truth box, with box 1 chosen when both or neither qualify, so the classes are imbalanced. The card names GUIAct web data and an unnamed Windows/macOS desktop set as sources. The 12,849-sample validation split that the card and dataset_infos.json report is not in the repository at revision a09c08da, although the bundled loader expects a validation folder. Apache-2.0 is the card's data declaration and does not settle rights in the upstream screenshots. Appendix C.3 of the BAMI paper (v1 HTML) describes training its LoRA Qwen3-VL-8B corrector on 128,487 such samples.

- Record JSON: https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/record.json

## Structured profile

- formats: Parquet metadata, PNG images
- modalities: cropped GUI screenshots with a highlighted candidate box, natural-language click commands
- splits: train
- supervision: automatically derived choice between two candidate boxes against ground truth

### Count observations

- 115,638 two-box samples — train/metadata.parquet at revision a09c08da (106,350 labeled box 1, 9,288 labeled box 2) (computed) (computed; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet)
- 12,849 two-box samples — validation split as reported; no validation files at revision a09c08da (reported; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json)
- 128,487 two-box samples — train plus validation as reported by dataset_infos.json and the card (reported; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json)

Each sample has two image files, so image and sample counts differ. The train metadata has 27,934 distinct command strings; per its original-path columns, 98,369 train rows come from a desktop-named source folder and 17,269 from another folder. The card's per-source figures (about 70K GUIAct and 423K desktop samples) describe the pool before balancing; this release is the balanced set.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md (retrieved 2026-10-18T15:35:11Z; SHA-256 962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99)
- https://huggingface.co/api/datasets/THU-BoZhang/two-box-judge-gui/revision/a09c08daed473ad1154414021a3d724d68deeb37 (retrieved 2026-10-18T15:33:04Z; SHA-256 54e36fe240316a7266800b025607da2d10a4aff3f1bcfc814d956a6f1bee4dd5)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json (retrieved 2026-10-18T15:33:04Z; SHA-256 96259003534aa7368a090f5c71b8da188c0ffbacf5af04ae52f3252b3a189549)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet (retrieved 2026-10-18T15:33:04Z; SHA-256 fabf1525a1e7ad6eac27f6c3c67a24ea1e5881b39cb1e94745a1455558c5ae91)
- https://arxiv.org/html/2605.06664v1 (retrieved 2026-10-18T15:33:04Z; SHA-256 2b2685f4f68842335f3357e1f1670c00a1183ad7c629cc43fe21bca40eb1ecfb)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md (retrieved 2026-10-18T15:35:11Z; SHA-256 962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99)
