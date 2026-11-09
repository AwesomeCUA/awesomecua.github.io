# LongHorizonUI

Code for the LongHorizonUI Android agent: OCR plus OmniParser icon detection yields numbered element boxes for an LLM, and failed taps fall back from element index to relative and absolute points with rollback.

- Catalog URL: https://awesomecua.com/resources/github-kane2kang-longhorizonui/
- Original source: https://github.com/kane2kang/LongHorizonUI
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: long-horizon, mobile-navigation, screen-understanding, self-reflection
- Evidence checked: 2026-10-20T07:39:57Z
- ID: github:kane2kang/longhorizonui

## Limitations

Code release of the ICLR 2026 paper "LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent" (the repository description says ICLR2026; the README cites it with anonymous authors and no link). Each screenshot passes through RapidOCR, the OmniParser v2 YOLO icon detector (downloaded from microsoft/OmniParser-v2.0 on first use) and template matching when an icon template directory is set; the merged elements are drawn as numbered boxes, and that annotated screenshot with a step prompt is what the Gemini, Azure OpenAI or OpenAI model receives. Actions are click, long press, swipe, drag, text input and key press. With the fallback cascade on (the default), an element-index target that fails is retried as a relative point inside the box and then as absolute coordinates with jitter; a progress monitor can roll back to the last committed snapshot, at most three times per task. The README documents only the offline mode, which replays a task's recorded screenshot sequence with either the task description or step-by-step instructions. run.py also has a live subcommand that lists USB-connected devices, but at the reviewed commit AndroidContext never opens a device connection (its context stays None), so device actions return without acting. The repository also has a Gradio app, agents that turn recorded taps and swipes into step descriptions, a scrcpy-based Android recording tool, step-level evaluation scripts and the project page source. The LongGUIBench dataset is not released (the README link is a placeholder), the requirements.txt the README installs from is not in the tree, and the README's Apache-2.0 badge and LICENSE link are not backed by a license file. Not a fork, not archived; no release. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-kane2kang-longhorizonui/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README shows an Apache-2.0 badge and links a LICENSE file, but the complete tree at the reviewed commit has no license file, so no grant is established.
  Sources: https://api.github.com/repos/kane2kang/LongHorizonUI/git/trees/2c825a35507b8ae7df8b705517658bf477f36e71?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/HEAD/README.md (retrieved 2026-10-20T07:39:57Z; SHA-256 750acfce145a8d8c898b11bf0f213790f472689a0677b26e077d78ea8696cfc1)
- https://api.github.com/repos/kane2kang/LongHorizonUI/git/trees/2c825a35507b8ae7df8b705517658bf477f36e71?recursive=1 (retrieved 2026-10-20T04:25:52Z; SHA-256 de838e1b7bfa6653226a9716f3044a6d4979fbc1b8bed4522f8f95ea08e78888)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/run.py (retrieved 2026-10-20T04:25:53Z; SHA-256 abb611e5ae9d2084ccfc310cf9181d30cfc1decaffd4e0ec69554b2a8db13194)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/LonghorizonAgent/system/android_context.py (retrieved 2026-10-20T04:25:54Z; SHA-256 dddc23d669881d1aa843adcf67a59f5975634618dfb8a80c6cda43b07c978342)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/LonghorizonAgent/system/system_context.py (retrieved 2026-10-20T04:25:54Z; SHA-256 d0783083508093c9618f83f7a217b442d1e2cb075442a2b6e8d155e1ed712474)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/LonghorizonAgent/perception/models/icon_detect_model.py (retrieved 2026-10-20T04:25:54Z; SHA-256 78c28fb8f5d565327b20d7f745974cb4634ff4076bdf2239a220a71c7f43baac)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/LonghorizonAgent/controller/android_controller.py (retrieved 2026-10-20T04:25:54Z; SHA-256 3c40b1df63a851f10926eaaf0c94b614c3b36fbabfb978b5606f757b98dcf28c)
- https://raw.githubusercontent.com/kane2kang/LongHorizonUI/2c825a35507b8ae7df8b705517658bf477f36e71/LonghorizonAgent/agent/auto_execution_agent.py (retrieved 2026-10-20T04:25:54Z; SHA-256 abe1aeb53eef647c1626e3140045b3b7728a1b3dde9abb42c5267e0ddf11d1f3)
