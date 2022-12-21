// ==UserScript==
// @name         Minesweeper Reset With "R"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Faster minesweeper.online resetting method
// @author       Anonymous
// @match        https://minesweeper.online/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com
// @grant        none
// ==/UserScript==

(function() {
    var $ = window.jQuery;
    $(document).on("keydown", function (e) {
        if (e.which == 82) {
            G69.n12(!1, !1, !0);
        }
    });
})();
