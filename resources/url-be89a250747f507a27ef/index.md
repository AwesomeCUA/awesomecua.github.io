# MoGUI

Android app GUI crawl with per-app navigation graphs that link screen IDs through the UI action taken, plus 200 archive shards of the captured screens.

- Catalog URL: https://awesomecua.com/resources/url-be89a250747f507a27ef/
- Original source: https://huggingface.co/datasets/OpenDFM/MoGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, data-generation, mobile-navigation
- Evidence checked: 2026-10-19T06:19:12Z
- ID: url:be89a250747f507a27ef

## Limitations

The card carries only the license, links and citation requests (MobA, META-GUI, CAM-GUI and a MoGUI/MoCon technical report); the complete report it announces as coming soon is not linked, so no paper relation is recorded. The repository's MoGUI_Paper_v0.1.pdf is a two-page pre-release announcement without methods or statistics. Android is established by the metadata: Google Play package names, android.widget element classes and Android permission-controller screens. At revision 19639219 the manifest holds 200 metadata JSON shards, 200 moguidata tar.gz shards totalling about 1.14 TB, and an apk_infos.json file of Google Play listing fields per package. Metadata shard 1 alone holds navigation graphs for 1,084 app packages listing 13,726 valid screens; other shards were not counted. A streamed read of the start of the first tar.gz shard showed per-app folders of PNG screenshots with same-named XML files; the archives were not downloaded. CC BY-NC-SA 4.0 is the card's data declaration and does not establish rights to the third-party apps shown. The sibling MoCon dataset is a separate release.

- Record JSON: https://awesomecua.com/resources/url-be89a250747f507a27ef/record.json

## Structured profile

- formats: JSON, tar.gz archives, PNG, XML
- modalities: UI action strings naming element text, package, widget class and bounds, screenshots (seen in a partial archive read), XML view hierarchies (seen in a partial archive read)
- splits: not recorded
- supervision: crawled screen-transition navigation graphs

### Count observations

No count recorded.

Each metadata shard maps an app package to a root screen, a valid-screen list and a navigation graph whose nodes are screen hashes with next screens and the triggering actions. No total app, screen or transition count is stated by the publisher; only metadata shard 1 was counted, and file counts are not sample counts.

## License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md (retrieved 2026-10-19T06:19:12Z; SHA-256 bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8)
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/revision/19639219617d083a03e24842fc620e010cc63189 (retrieved 2026-10-19T06:19:11Z; SHA-256 aa4356912f147cade9b4f9067103beff80dc594f7b6562f6ae61ac4b9ef9bb71)
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/metadata/data_00001_of_00200.json (retrieved 2026-10-18T16:04:11Z; SHA-256 758a3c377b240a779d73b96b4c2ac5a185c99e0dc04bbda5d4dbcaa3ae59f166)
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/tree/19639219617d083a03e24842fc620e010cc63189/moguidata (retrieved 2026-10-18T16:04:13Z; SHA-256 a518ed2d7726225d4c399bdd06c3d9e1a5333425b6dd86446e3d22f2fef1a007)
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/MoGUI_Paper_v0.1.pdf (retrieved 2026-10-18T16:04:23Z; SHA-256 5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5)
- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md (retrieved 2026-10-19T06:19:12Z; SHA-256 bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8)
