# WebSentinel detection demo

Demo of WebSentinel's context check: GPT-4o judges pre-extracted pop-up, email and message HTML segments from 144 injected webpage samples against the page context and reports how many it misses.

- Catalog URL: https://awesomecua.com/resources/github-wxl-lxw-websentinel/
- Original source: https://github.com/wxl-lxw/WebSentinel
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, web-navigation
- Evidence checked: 2026-10-18T15:39:22Z
- ID: github:wxl-lxw/websentinel

## Limitations

The repository holds only README, a figure, demo/detection.py and demo/VPI_data.json; the README's section on running WebSentinel says TBD. The script formats one analyzer prompt per sample (114 pop-up, 20 email and 10 message segments, counted with a script), calls the OpenAI Responses API with gpt-4o, and prints the share labelled clean as the false-negative rate. Segment extraction from raw pages is not included, and no clean pages are in the demo data. No license file was found; neither a code nor a data license is inferred.

- Record JSON: https://awesomecua.com/resources/github-wxl-lxw-websentinel/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected tree has no license file and GitHub reports no license.
  Sources: https://api.github.com/repos/wxl-lxw/WebSentinel/git/trees/2576819df5d1ca90005ca231ac7ce9a555b4c143?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/HEAD/README.md (retrieved 2026-10-18T15:39:22Z; SHA-256 d3ebab871167be3344f3e8fff3bbff10e0b8f60a1953a1896c8ea86566ed6a41)
- https://api.github.com/repos/wxl-lxw/WebSentinel (retrieved 2026-10-18T15:39:01Z; SHA-256 bc8ab177d88e62d54e90e8138a488044b473ddb9460fdbbf11d48e2f99708fce)
- https://api.github.com/repos/wxl-lxw/WebSentinel/git/trees/2576819df5d1ca90005ca231ac7ce9a555b4c143?recursive=1 (retrieved 2026-10-18T15:39:01Z; SHA-256 3a3e1d98bcb2402cb159f53ba89ee4d0416c7f59386f0382178beae8309088b6)
- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/2576819df5d1ca90005ca231ac7ce9a555b4c143/demo/detection.py (retrieved 2026-10-18T15:39:03Z; SHA-256 1265598a3bd94ede6ac255856904fa72d51d5e4968e2d55cf2fe4bd691d75ce2)
- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/2576819df5d1ca90005ca231ac7ce9a555b4c143/demo/VPI_data.json (retrieved 2026-10-18T15:39:03Z; SHA-256 b1268e0fb59f98e0b402ead8ec243370923c43a2af6e36343eddc9e98124adbf)
