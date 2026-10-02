Low-tech solution to fixing desync issues during Bluesky video playback. Works by replacing the faulty fastSeek function with a simple setter.

Requires a userscript manager, such as Tampermonkey or Violentmonkey. Add the attached user.js script or create a new script and copy-paste the following content:

```
// ==UserScript==
// @name         Bluesky Seek Fix
// @match        https://bsky.app/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

HTMLMediaElement.prototype.fastSeek = function(time) {
    this.currentTime = time;
};
```

Reload affected pages and validate the script is enabled and running.

This is a known issue reported as issue #8798 in the official Bluesky repository. After it has been patched, you should probably remove this fix.

Tested with Firefox 146 on Windows 11.