# Pix to App

A Python pipeline that turns a mobile app screenshot into an Android project, using Canny edge contours for the view hierarchy, Tesseract OCR for text and generated layout, style, color and string XML.

- Catalog URL: https://awesomecua.com/resources/github-soumikmohianuta-pixtoapp/
- Original source: https://github.com/soumikmohianuta/pixtoapp
- Kind: tool
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, ui-design
- Evidence checked: 2026-11-10T03:01:00Z
- ID: github:soumikmohianuta/pixtoapp

## Limitations

Dependencies are Tesseract OCR, OpenCV, stringtemplate3 and ANTLR, plus a JDK and the Android SDK for the template project; the setup instructions target Windows. The input image path is set in screenshotProcessor.py, which writes activity_main.xml and resource files into the generated project.

- Record JSON: https://awesomecua.com/resources/github-soumikmohianuta-pixtoapp/record.json

## License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/f103a580e015ef7779998f14c9533a238a4bf1d1/README.md (retrieved 2026-11-10T03:01:00Z; SHA-256 41f05c7fb074c4c6f0a1782bdcc82b1517992457cbc326a7476bae8cfde20253)
- https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/HEAD/LICENSE (retrieved 2026-11-10T02:08:20Z; SHA-256 5151d031acfca7100a2cd4108525507093c15c0d52a542e03dd2783ab06d533a)
