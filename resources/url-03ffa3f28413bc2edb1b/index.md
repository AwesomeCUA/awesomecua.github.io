---
title: "Mind2Web-Live (dataset) | AwesomeCUA"
url: https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/
updated: 2026-10-18
type: dataset
lang: en
---

# Mind2Web-Live

Task files for the WebCanvas live-web benchmark: 438 training and 104 test tasks derived from Mind2Web, each with key-node checks on URLs or page elements that score intermediate progress.

- Catalog URL: https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/
- Original source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-18T15:45:39Z
- ID: url:03ffa3f28413bc2edb1b

## Limitations

The files hold task instructions, reference task lengths and key-node evaluation functions (URL inclusion or exact match, element path and value matches, and semantic URL and value matches); trajectories and page snapshots are separate data types. Agents run on live websites through the WebCanvas framework, so results depend on site changes, location and time. The test file was revised on 2024-10-24; the 2024-05-28 test file stays under old_version with 104 tasks and 444 key nodes, which with the 1,995 training key nodes gives the 2,439 states the WebCanvas README reports. The card itself links only the WebCanvas repository and declares CC-BY-4.0.

- Record JSON: https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/record.json

## Structured profile

- Formats: JSON
- Modalities: task instructions, URL and page-element evaluation functions
- Splits: train (2024-05-28 file), test (2024-10-24 file)
- Supervision: key-node evaluation annotations, reference task lengths

### Count observations

- 438 tasks — train file mind2web-live_train_20240528.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json)
- 1,995 key-node evaluation entries — train file mind2web-live_train_20240528.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json)
- 104 tasks — test file mind2web-live_test_20241024.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json)
- 443 key-node evaluation entries — test file mind2web-live_test_20241024.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json)
- 542 tasks — original Mind2Web-Live release as described in the WebCanvas README (reported; source: https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md)

Tasks and key-node evaluation entries are different units. The revised test file has one fewer key node than the original 2024-05-28 test file.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live (retrieved 2026-10-18T15:45:39Z; SHA-256 1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/raw/160677b57f6a608e6d63b51849a33d2920b35588/README.md (retrieved 2026-10-18T15:45:39Z; SHA-256 8ac014447b87cd4450289e5e3b3254e0f8ad9a90d31e76b0efcb70c402aaa80e)
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md (retrieved 2026-10-18T15:45:39Z; SHA-256 5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json (retrieved 2026-10-18T15:45:39Z; SHA-256 026adb028cc07f72e39af0952c8770fa630d59ea8ceffb4dc4fab5e01fd57b35)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json (retrieved 2026-10-18T15:45:40Z; SHA-256 abc2032302fed1ac801539ecc6003dd73ff0aafe824aaf9450e4e504a8ff83f2)
- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live (retrieved 2026-10-18T15:45:39Z; SHA-256 1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d)
