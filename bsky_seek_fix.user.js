// ==UserScript==
// @name         Bluesky Seek Fix
// @match        https://bsky.app/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

HTMLMediaElement.prototype.fastSeek = function(time) {
    this.currentTime = time;
};