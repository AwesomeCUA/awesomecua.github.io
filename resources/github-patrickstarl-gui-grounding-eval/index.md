# GUI Grounding Evaluation Harness

ScreenSpot-Pro evaluation harness with explicit coordinate transforms, prompt and crop-based inference comparisons, and per-sample grounding accuracy and cost records.

- Catalog URL: https://awesomecua.github.io/resources/github-patrickstarl-gui-grounding-eval/
- Original source: https://github.com/PatrickStarL/gui-grounding-eval
- Kind: tool
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, evaluation, efficiency
- Evidence checked: 2026-10-20T11:51:38.123692Z
- ID: github:patrickstarl/gui-grounding-eval

## Limitations

This is an independent harness using ScreenSpot-Pro, not a new dataset or verified leaderboard entry. The read code maps points back to original-image coordinates and scores point-in-box hits; documentation limits comparisons by prompt, model, subset and provider behavior. No OS support, code license or external data/weight license was established in this bounded review. Model calls, tests and reported results were not executed or reproduced.

- Record JSON: https://awesomecua.github.io/resources/github-patrickstarl-gui-grounding-eval/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/README.md (retrieved 2026-10-20T11:51:38.123692Z; SHA-256 3226df7608039522072e59d459094fc45be9c5a6be7ea0d7ad76ddf9723a3aea)
- https://api.github.com/search/repositories?q=topic%3Agui-grounding+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:53.470789+00:00; SHA-256 3d76d934e98641746085772b98ee17059749f980a616435498a7ad483bd4cec1)
- https://github.com/PatrickStarL/gui-grounding-eval (retrieved 2026-10-20T11:51:05.389053Z; SHA-256 4fe6f65a21586dde0bf8b64f8c49e5c583b320bf5e0c2b8253baf2cd3fcfc5d2)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/metrics.py (retrieved 2026-10-20T11:53:32.022035Z; SHA-256 c3eb1708b7d57dcde7478ca2f5063241b1ab567b2ba2ba28b9956b043da2b6c2)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/geometry.py (retrieved 2026-10-20T11:53:35.461491Z; SHA-256 66fa5940f0c4f6265cb162cb0596402848dd2a49fd48b07ee950dc866b8730a5)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/runner.py (retrieved 2026-10-20T11:53:38.931130Z; SHA-256 f83bc0632a616e7b01c8a46b0e435733f0cc47b4a19f0c709b221eaee8a0db5f)
