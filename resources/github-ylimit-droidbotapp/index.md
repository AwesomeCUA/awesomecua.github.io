# droidbotApp

Android companion app for the DroidBot test input generator that registers an input method service; DroidBot sends text by broadcast intent over adb and the service enters it into the focused text field.

- Catalog URL: https://awesomecua.com/resources/github-ylimit-droidbotapp/
- Original source: https://github.com/ylimit/droidbotApp
- Kind: tool
- Review: curated
- Scope: adjacent
- Environments: android
- Topics: automation
- Evidence checked: 2026-11-10T03:01:00Z
- ID: github:ylimit/droidbotapp

## Limitations

The app contains DroidBotIME, a settings activity and a commented-out patch for the PrivacyStreams accessibility service; building it requires importing the PrivacyStreams Android SDK. DroidBot's droidbot_ime.py adapter enables the service with adb ime commands.

- Record JSON: https://awesomecua.com/resources/github-ylimit-droidbotapp/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/yuanchun-li/droidbotApp/3ddafe86be3dfb31085c070b5e3b0e8dc197ba78/README.md (retrieved 2026-11-10T03:01:00Z; SHA-256 a4d4d32c3d59a534fadc1d5a849dede17777f5efe5221559166afab90257f2f2)
