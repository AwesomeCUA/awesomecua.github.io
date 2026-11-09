# OS-Genesis 4B WA

The WebArena-oriented InternVL2-4B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.

- Catalog URL: https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:02:38Z
- ID: url:807dadc7dc4ba995bbbe

## Limitations

Hub API at revision 511f2ec2 lists two BF16 safetensors shards (about 4.15B parameters) in the InternVLChatModel architecture, with custom InternVL and Phi-3 modeling files; the repository is publicly accessible. The card declares Apache-2.0 and OpenGVLab/InternVL2-4B as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md (retrieved 2026-10-18T16:02:38Z; SHA-256 bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-WA/revision/511f2ec231a517e79d1f913524b9b652dfc5b98e (retrieved 2026-10-18T16:02:18Z; SHA-256 b8957e2835af052bab25c3fa939601d3fd5fd3d59f48bc1807aadfd4c3ab3df5)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:02:18Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md (retrieved 2026-10-18T16:02:38Z; SHA-256 bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea)
