# WinDOM code

GUI-grounding training and evaluation code with same-family distillation, GRPO recipes and point-in-box scoring, using a Windows-style web environment.

- Catalog URL: https://awesomecua.github.io/resources/github-chenghengli-windom/
- Original source: https://github.com/ChenghengLi/WinDOM
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, imitation-learning, reinforcement-learning, evaluation
- Evidence checked: 2026-10-20T11:51:34.292633Z
- ID: github:chenghengli/windom

## Limitations

The Windows-style environment is win11React in Playwright, not native Windows control. The repository documents its predecessor trajectory pipeline but explicitly omits the final corpus harvester. The inspected ScreenSpot evaluator defaults to a privileged ground-truth-center demonstration; --no-demo and --official-prompt select other modes, so evaluation results require their prompt and coordinate settings. Linked datasets, weights and reported scores were not independently verified; MIT applies to inspected repository code.

- Record JSON: https://awesomecua.github.io/resources/github-chenghengli-windom/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected root LICENSE is complete MIT text for repository code. The local data README says same as parent repository, but the linked Hub dataset/model cards and artifacts were not inspected; their licenses are not inferred.
  Sources: https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/README.md (retrieved 2026-10-20T11:51:34.292633Z; SHA-256 7cda5207d8882bc8dedaefb93d2ccf54b310354917283b8f4890fffdc5764958)
- https://api.github.com/search/repositories?q=topic%3Agui-grounding+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:53.470789+00:00; SHA-256 3d76d934e98641746085772b98ee17059749f980a616435498a7ad483bd4cec1)
- https://github.com/ChenghengLi/WinDOM (retrieved 2026-10-20T11:50:58.795155Z; SHA-256 08b89c5e6143afa4c0cdde95f8ec016d9033ee004f7631fadd4457144c2b87c9)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/data/README.md (retrieved 2026-10-20T11:52:41.278660Z; SHA-256 09488140d35408cc11bb9c12b1bb435b21814cf6525937a8309475c9326c4004)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/src/windom/training/sfd_4b.py (retrieved 2026-10-20T11:52:45.091369Z; SHA-256 0ee33b1e416ea4c5d8834688e6f42fbd15ef493f1b82398d3bb985838cbdffb9)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/src/windom/evaluation/screenspot.py (retrieved 2026-10-20T11:52:48.511963Z; SHA-256 c481b2f91f2d82bf801632da6ab6cce01bc42c780104d743156c272942d2cef3)
- https://raw.githubusercontent.com/ChenghengLi/WinDOM/ab52acffe2003fd0c98943a542b4114ef929de0d/LICENSE (retrieved 2026-10-20T11:51:44.940106Z; SHA-256 d5a37ff86df9b231440ab1bcf3ecf77304a0a53e772182cdb622a3ab5d043447)
