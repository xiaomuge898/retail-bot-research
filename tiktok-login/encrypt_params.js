function encryptParams(e, o) {
    var encrypt = function (e) {
        var t, o = [];
        if (void 0 === e)
            return "";
        t = function (e) {
            for (var t, o = e.toString(), n = [], i = 0; i < o.length; i++)
                0 <= (t = o.charCodeAt(i)) && t <= 127 ? n.push(t) : 128 <= t && t <= 2047 ? (n.push(192 | 31 & t >> 6),
                    n.push(128 | 63 & t)) : (2048 <= t && t <= 55295 || 57344 <= t && t <= 65535) && (n.push(224 | 15 & t >> 12),
                        n.push(128 | 63 & t >> 6),
                        n.push(128 | 63 & t));
            for (var a = 0; a < n.length; a++)
                n[a] &= 255;
            return n
        }(e);
        for (var n = 0, i = t.length; n < i; ++n)
            o.push((5 ^ t[n]).toString(16));
        return o.join("")
    }
    var i, a = 0;
    if ("object" != typeof e || !o || o.length <= 0)
        return e;
    for (var r = Object.assign({
        mix_mode: a
    }, e), s = 0, c = o.length; s < c; ++s)
        void 0 !== (i = r[o[s]]) && (a |= 1,
            r[o[s]] = encrypt(i));
    return r.mix_mode = a,
        r
}
