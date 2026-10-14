typeof window == "undefined" ? window = global : null;
screen = {
    "width": 1707,
    "height": 1067,
    "availWidth": 1707,
    "availHeight": 1027,
    "screenLeft": 0,
    "screenTop": 0
}

document = {}
!function(e) {
    var n = {}
    function u(r) {
        if (n[r]){
            console.log(`加载缓存模块 --> ${r}`)
            return n[r].exports;
        }
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        }
          , o = !0;
        try {
            console.log(`加载的模块是 --> ${typeof r} ---> ${r}`, r in e ? '已加载' : '缺少模块')
            e[r].call(t.exports, t, t.exports, u),
            o = !1
        } finally {
            o && delete n[r]
        }
        return t.l = !0,
        t.exports
    }
    jzq = u;
}({
    0: function(a, c, u) {
        "use strict";

        var f = "5"
          , s = "t"
          , v = "r"
          , h = "i"
          , d = "m"
          , g = "exten"
          , l = "d"
          , p = "\u9ED9"
          , j = "\u0972"
          , m = "\u0969"
          , C = "\u09E5"
          , w = "\u09A2"
          , b = "frag"
          , S = "ment"
          , A = "ofn"
          , y = "Iat"
          , x = "eMt"
          , E = "eg"
          , _ = "isAr"
          , R = "ray"
          , T = "VY["
          , M = ":"
          , L = "u"
          , k = "s"
          , P = "h"
          , V = "l"
          , I = "o"
          , O = "pus"
          , D = "h"
          , Y = "xob"
          , F = "dna"
          , H = "s"
          , W = "st"
          , N = "yl"
          , $ = "e"
          , B = "bo"
          , K = "dy"
          , X = "getAt"
          , J = "tribu"
          , U = "nam"
          , Z = "R]C\x17AL"
          , G = "he"
          , Q = "ad"
          , q = "67,65,74,45,6"
          , z = "54,61,67,4e,6"
          , nn = "1,6d,65";
        function en(r) {
            if (!r)
                return "";
            for (var o = "", i = 40621, a = 0; a < r.length; a++) {
                var c = r.charCodeAt(a) ^ i;
                i = i * a % 256 + 2333,
                o += String.fromCharCode(c);
            }
            return o;
        }
        function tn(i, a) {
            for (var c = [0, 1], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = "f"
                      , s = "o"
                      , v = "r";
                    continue;
                case 1:
                    return i + Math[[f, V, I, s, v].join("")](Math["random"]() * (a - i + 1));
                }
                break;
            }
        }
        c["__esModule"] = true,
        c["now"] = c["isArray"] = c["isFunction"] = c["isString"] = undefined,
        c[[s, v, h, d].join("")] = function(n) {
            return n["replace"](new RegExp("^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$","g"), "");
        }
        ,
        c["each"] = fn,
        c[[g, l].join("")] = function(n) {
            for (var o, a, c = []["slice"][sn([T, M].join(""))](arguments), u = c["length"], f = 1; f < u; f++)
                for (a in o = c[f])
                    o["hasOwnProperty"](a) && (n[a] = o[a]);
            return n;
        }
        ,
        c["filter"] = function(n, e, r) {
            for (var a, c = "p", u = [], f = 0, s = n["length"]; f < s; f++)
                a = n[f],
                e["call"](r, a, f, n) && u[[c, L, k, P].join("")](a);
            return u;
        }
        ,
        c["map"] = function(e, r, a) {
            for (var c = "VY", u = "[:", f = [], s = 0, v = e["length"]; s < v; s++)
                f["push"](r[sn([c, u].join(""))](a, e[s], s, e));
            return f;
        }
        ,
        c["some"] = function(a, c, u) {
            var f = [2, 0, 1, 3]
              , s = 0;
            for (; true; ) {
                switch (f[s++]) {
                case 0:
                    var v = a[sn("Y]Y1AP")];
                    continue;
                case 1:
                    for (; h < v; h++)
                        if (c["call"](u, a[h], h, a))
                            return true;
                    continue;
                case 2:
                    var h = 0;
                    continue;
                case 3:
                    return false;
                }
                break;
            }
        }
        ,
        c["flatten"] = function(e) {
            var r = [];
            return fn(e, function(e) {
                typeof e !== "undefined" && (rn(e) ? r = r["concat"](e) : r["push"](e));
            }),
            r;
        }
        ,
        c["random"] = tn,
        c["toCodeArray"] = function(n) {
            for (var e = [], o = (n += "")["length"], a = 0; a < o; a++)
                e[en("\u9EDD\u0968\u0949\u09F9")](n["charCodeAt"](a));
            return e;
        }
        ,
        c[en([p, j, m, C, w].join(""))] = function(n) {
            return String["fromCharCode"]["apply"](String, n);
        }
        ,
        c["keys"] = function(t) {
            var r = "pu"
              , o = "sh"
              , i = [];
            return fn(t, function(n, t) {
                i[[r, o].join("")](t);
            }),
            i;
        }
        ,
        c["isTouchDevice"] = function() {
            return "ontouchstart" in document["documentElement"];
        }
        ,
        c["propDefined"] = function(o, a) {
            var c = [];
            Object[sn("R]C\x19BVg$ZHR$AAs3F[E?ELX$")] && c[[O, D].join("")](Object["getOwnPropertyDescriptor"](o, a));
            Object["getOwnPropertyDescriptors"] && c["push"](!!Object["getOwnPropertyDescriptors"](o)[a]);
            for (var u = 0; u < c["length"]; u++)
                if (c[u])
                    return true;
            return false;
        }
        ,
        c["isHeadless"] = function() {
            for (var a = [0, 1, 2], c = 0; true; ) {
                switch (a[c++]) {
                case 0:
                    if (navigator["webdriver"])
                        return true;
                    continue;
                case 1:
                    if (new RegExp("Headless","i")[an("tset")](navigator["userAgent"]))
                        return true;
                    continue;
                case 2:
                    try {
                        var u = document["createElement"](an("emarfi"));
                        u[an([Y, F, H].join(""))] = "allow-same-origin allow-scripts",
                        u[[W, N, $].join("")]["display"] = "none",
                        document["body"]["appendChild"](u);
                        var f = !!u["contentWindow"]["navigator"]["webdriver"];
                        return document[[B, K].join("")]["removeChild"](u),
                        f;
                    } catch (s) {
                        return false;
                    }
                    continue;
                }
                break;
            }
        }
        ,
        c[[b, S].join("")] = un,
        c[an([A, y, x, E].join(""))] = function() {
            for (var a = [3, 4, 0, 2, 1, 5, 6], c = 0; true; ) {
                switch (a[c++]) {
                case 0:
                    var u = {
                        "title": encodeURIComponent((document["title"] || "")["substr"](0, 25))
                    };
                    continue;
                case 1:
                    try {
                        u["bodyLength"] = document["body"]["innerHTML"]["length"];
                    } catch (w) {}
                    continue;
                case 2:
                    for (var f = 0; f < m["length"]; f++) {
                        var s = m[f]
                          , v = s[[X, J, d].join("")]([U, g].join(""));
                        if (v && new RegExp("(keyword|description|viewport)")["test"](v)) {
                            var h = s[sn([Z, l].join(""))]("content") || "";
                            h && (u[v] = encodeURIComponent(un(h, 10)));
                        }
                    }
                    continue;
                case 3:
                    var d = "te"
                      , g = "e"
                      , l = "E?WMC3"
                      , p = "c,65,6d,65,6e"
                      , j = ",74,73,42,79,";
                    continue;
                case 4:
                    var m = document["getElementsByTagName"]("meta");
                    continue;
                case 5:
                    try {
                        var C = document[[G, Q].join("")] || document[vn([q, p, j, z, nn].join(""))]("head")[0];
                        u["headLength"] = C["innerHTML"]["length"];
                    } catch (w) {}
                    continue;
                case 6:
                    return u;
                }
                break;
            }
        }
        ;
        u(1),
        c["isString"] = on("String"),
        c["isFunction"] = on("Function");
        var rn = c["isArray"] = Array[[_, R].join("")] || on("Array");
        function on(n) {
            return function(e) {
                return {}["toString"]["call"](e) == "[object " + n + "]";
            }
            ;
        }
        function an(n) {
            return n.split("").reverse().join("");
        }
        function cn(e) {
            if (!e)
                return "";
            for (var t = "", a = 76768, c = 0; c < e.length; c++) {
                var u = e.charCodeAt(c)
                  , f = u ^ a;
                a = u,
                t += String.fromCharCode(f);
            }
            return t;
        }
        c["now"] = Date["now"] || function() {
            return +new Date();
        }
        ;
        function un() {
            var i = arguments["length"] > 0 && arguments[0] !== undefined ? arguments[0] : en("")
              , a = arguments[1];
            if (i["length"] <= a)
                return i;
            var c = tn(0, i["length"] - a);
            return i["substr"](c, a);
        }
        function fn(n, a, c) {
            if (n) {
                var u = 0
                  , f = n[sn("Y]Y1AP")];
                if (f === +f)
                    for (; u < f && a["call"](c, n[u], u, n) !== false; u++)
                        ;
                else
                    for (u in n)
                        if (n["hasOwnProperty"](u) && a["call"](c, n[u], u, n) === false)
                            break;
            }
        }
        function sn(n) {
            if (!n)
                return "";
            for (var i = "", a = ["V", f, "8", "7"].join(""), c = 67604, u = 0; u < n.length; u++) {
                var s = n.charCodeAt(u);
                c = (c + 1) % a.length,
                s ^= a.charCodeAt(c),
                i += String.fromCharCode(s);
            }
            return i;
        }
        function vn(n) {
            if (!n)
                return "";
            var t = [];
            n = n.split(",");
            for (var o = 0; o < n.length; o++)
                t.push(String.fromCharCode(parseInt(n[o], 16)));
            return t.join("");
        }
    },
    1: function(a, c, u) {
        "use strict";

        var f = "n"
          , s = "isFuncti"
          , v = "slic"
          , h = "e"
          , d = "3,74,65,64"
          , g = "_v"
          , l = "al"
          , p = "ue"
          , j = "_r"
          , m = "ected"
          , C = "_"
          , w = "s"
          , b = "t"
          , S = "a"
          , A = "t"
          , y = "e"
          , x = "]"
          , E = "e"
          , _ = "s"
          , R = "l"
          , T = "c";
        function M(e) {
            return e.split("").reverse().join("");
        }
        function L(a, c) {
            var u = "i"
              , f = "e"
              , s = "co"
              , v = "prototyp"
              , h = "e"
              , d = "protot"
              , g = "ype"
              , l = [][[_, R, u, T, f].join("")]
              , p = l["call"](arguments, 2)
              , j = function() {}
              , m = function() {
                var i = "nc"
                  , u = "at";
                return a["apply"](this instanceof j ? this : c, p[[s, i, u].join("")](l[M("llac")](arguments)));
            };
            return j["prototype"] = a[[v, h].join("")],
            m[[d, g].join("")] = new j(),
            m;
        }
        function k(a) {
            for (var c = [2, 0, 3, 4, 1, 5], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = "";
                    continue;
                case 1:
                    for (var s = 0; s < a.length; s++) {
                        var v = a.charCodeAt(s);
                        d = (d + 1) % h.length,
                        v ^= h.charCodeAt(d),
                        f += String.fromCharCode(v);
                    }
                    continue;
                case 2:
                    if (!a)
                        return "";
                    continue;
                case 3:
                    var h = "V587";
                    continue;
                case 4:
                    var d = 67604;
                    continue;
                case 5:
                    return f;
                }
                break;
            }
        }
        function P(e, o, i) {
            return function(a) {
                if ((0,
                V["isFunction"])(o))
                    try {
                        var c = o(a);
                        F[k("G]D9YNR")](e, c);
                    } catch (u) {
                        e["reject"](u);
                    }
                else
                    e[i](a);
            }
            ;
        }
        c[H("5f,5f,65,73,4d,6f,64,75,6c,65")] = true,
        c["Promise"] = Y;
        var V = u(0)
          , I = 0
          , O = 1
          , D = 2;
        function Y(a) {
            for (var c = [7, 5, 0, 1, 6, 4, 3, 2], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    this[[v, h].join("")] = I;
                    continue;
                case 1:
                    this[H("5f,6f,6e,46,75,6c,66,69,6c,6c,65,64")] = [];
                    continue;
                case 2:
                    (0,
                    V[[s, g].join("")])(a) && a(L(this["resolve"], this), L(this["reject"], this));
                    continue;
                case 3:
                    this[[d, f].join("")] = null;
                    continue;
                case 4:
                    this["_value"] = null;
                    continue;
                case 5:
                    if (!(this instanceof Y))
                        return new Y(a);
                    continue;
                case 6:
                    this["_onRejected"] = [];
                    continue;
                case 7:
                    var v = "_st"
                      , h = "ate"
                      , d = "_reaso"
                      , g = "on";
                    continue;
                }
                break;
            }
        }
        var F = {
            "resolve": function(a, c) {
                var u, f = "res";
                if (a !== c) {
                    if ((u = c) && (0,
                    V["isFunction"])(u["then"]))
                        try {
                            c["then"](function(n) {
                                for (var t = [0, 1], c = 0; true; ) {
                                    switch (t[c++]) {
                                    case 0:
                                        var u = "olv"
                                          , s = "e";
                                        continue;
                                    case 1:
                                        F[[f, u, s].join("")](a, n);
                                        continue;
                                    }
                                    break;
                                }
                            }, function(n) {
                                a["reject"](n);
                            });
                        } catch (s) {
                            a["reject"](s);
                        }
                    else
                        a["resolve"](c);
                } else
                    a[M("tcejer")](new TypeError("A promise cannot be resolved with itself."));
            }
        };
        function H(n) {
            if (!n)
                return "";
            var e = [];
            n = n.split(",");
            for (var o = 0; o < n.length; o++)
                e.push(String.fromCharCode(parseInt(n[o], 16)));
            return e.join("");
        }
        function W(t) {
            if (!t)
                return "";
            for (var r = "", o = 76768, a = 0; a < t.length; a++) {
                var c = t.charCodeAt(a)
                  , u = c ^ o;
                o = c,
                r += String.fromCharCode(u);
            }
            return r;
        }
        Y["prototype"] = {
            "constructor": Y,
            "then": function(t, i) {
                var a = new Y();
                return this["_onFulfilled"]["push"](P(a, t, "resolve")),
                this["_onRejected"]["push"](P(a, i, "reject")),
                this["flush"](),
                a;
            },
            "flush": function() {
                var a = "5f,6f,6e,52"
                  , c = ",65,6a,65,6"
                  , u = "ea"
                  , f = "so"
                  , s = "n"
                  , C = "_onRej"
                  , w = this[W("\u2BBF\u2BCC\u2BB8\u2BD9\u2BAD\u2BC8")];
                if (w !== I) {
                    var b = w === O ? this["_onFulfilled"][[v, h].join("")]() : this[H([a, c, d].join(""))]["slice"]()
                      , S = w === O ? this[[g, l, p].join("")] : this[[j, u, f, s].join("")];
                    setTimeout(function() {
                        (0,
                        V["each"])(b, function(n) {
                            try {
                                n(S);
                            } catch (e) {}
                        });
                    }, 0),
                    this["_onFulfilled"] = [],
                    this[[C, m].join("")] = [];
                }
            },
            "resolve": function(o) {
                for (var a = [0, 1, 3, 2], c = 0; true; ) {
                    switch (a[c++]) {
                    case 0:
                        if (this[[C, w, b, S, A, y].join("")] !== I)
                            return;
                        continue;
                    case 1:
                        this["_state"] = O;
                        continue;
                    case 2:
                        this["flush"]();
                        continue;
                    case 3:
                        this["_value"] = o;
                        continue;
                    }
                    break;
                }
            },
            "reject": function(e) {
                this["_state"] === I && (this["_state"] = D,
                this["_reason"] = e,
                this["flush"]());
            },
            "isPending": function() {
                return this["_state"] === I;
            },
            "isFulfilled": function() {
                return this["_state"] === O;
            },
            "isRejected": function() {
                return this[k(["jKC7A", x].join(""))] === D;
            },
            "catch": function(e) {
                return this["then"](null, e);
            },
            "always": function(e) {
                return this["then"](e, e);
            }
        },
        Y["defer"] = function() {
            var n = {};
            return n[H("70,72,6f,6d,69,73,65")] = new Y(function(i, a) {
                n[function(n) {
                    if (!n)
                        return "";
                    for (var e = "", i = 40621, a = 0; a < n.length; a++) {
                        var c = n.charCodeAt(a) ^ i;
                        i = i * a % 256 + 2333,
                        e += String.fromCharCode(c);
                    }
                    return e;
                }("\u9EDF\u0978\u0949\u09FE\u09BC\u092B\u098B")] = i,
                n["reject"] = a;
            }
            ),
            n;
        }
        ,
        Y["race"] = function(t) {
            var a = "promi"
              , c = "se"
              , u = Y[W("\u2B84\u2BE1\u2B87\u2BE2\u2B90")]();
            t["length"];
            return (0,
            V["each"])(t, function(e) {
                e["then"](function(n) {
                    u["resolve"](n);
                }, function(e) {
                    u["reject"](e);
                });
            }),
            u[[a, c].join("")];
        }
        ,
        Y[W("\u2B81\u2BED\u2B81")] = function(a) {
            for (var c = [1, 4, 3, 5, 2, 0], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    return h[k("EJX;\\KR")];
                case 1:
                    var f = "c"
                      , s = "t";
                    continue;
                case 2:
                    (0,
                    V["each"])(a, function(n, a) {
                        var c = "r";
                        n["then"](function(n) {
                            d[a] = n,
                            --v === 0 && h["resolve"](d);
                        }, function(n) {
                            h[[c, "e", "j", E, f, s].join("")](n);
                        });
                    });
                    continue;
                case 3:
                    var v = a[M("htgnel")];
                    continue;
                case 4:
                    var h = Y["defer"]();
                    continue;
                case 5:
                    var d = [];
                    continue;
                }
                break;
            }
        }
        ,
        Y["resolve"] = function(n) {
            return new Y(function(e) {
                e(n);
            }
            );
        }
        ,
        Y["reject"] = function(n) {
            return new Y(function(e, t) {
                t(n);
            }
            );
        }
        ;
    },
    2: function(a, c, u) {
        "use strict";

        var f = "\u9EC0"
          , s = "\u0972"
          , v = "\u094C"
          , h = "\u09F4"
          , d = "u"
          , g = "d"
          , l = "f"
          , p = "i"
          , j = "n"
          , m = "e"
          , C = "S"
          , w = "9";
        function b(e) {
            return S(y(e, 16, 2))["concat"](S(y(e, 0, 2)));
        }
        function S(n) {
            return [y(n, 8), y(n, 0)];
        }
        function A(n) {
            if (!n)
                return "";
            for (var t = "", a = "V587", c = 67604, u = 0; u < n.length; u++) {
                var f = n.charCodeAt(u);
                c = (c + 1) % a.length,
                f ^= a.charCodeAt(c),
                t += String.fromCharCode(f);
            }
            return t;
        }
        function y(a, c, u) {
            var f = "n"
              , s = "e"
              , v = "d";
            return a >> c & Math["pow"](2, (typeof u == [d, f, g, s, l, p, j, m, v].join("") ? 1 : u) * 8) - 1;
        }
        c[function(t) {
            if (!t)
                return "";
            for (var r = "", o = 76768, a = 0; a < t.length; a++) {
                var c = t.charCodeAt(a)
                  , u = c ^ o;
                o = c,
                r += String.fromCharCode(u);
            }
            return r;
        }("\u2BBF\u2BE0\u2B85\u2BF6\u2BBB\u2BD4\u2BB0\u2BC5\u2BA9\u2BCC")] = true,
        c[function(e) {
            if (!e)
                return "";
            for (var o = "", i = 40621, a = 0; a < e.length; a++) {
                var c = e.charCodeAt(a) ^ i;
                i = i * a % 256 + 2333,
                o += String.fromCharCode(c);
            }
            return o;
        }([f, s, v, h].join(""))] = y,
        c["bs2"] = S,
        c["bs4"] = b,
        c["bs8"] = function(a) {
            var c = Math[A([C, "T", "X", w, "G"].join(""))](a / Math["pow"](2, 32))
              , u = a - c * Math["pow"](2, 32);
            return b(c)["concat"](b(u));
        }
        ,
        c[A("WKD")] = function(n) {
            var r = "len"
              , a = "gth"
              , c = [];
            if (!n)
                return c;
            for (var u = 0; u < n[[r, a].join("")]; u++)
                c["push"](n["charCodeAt"](u));
            return c;
        }
        ;
    },
    7: function(a, c, u) {
        "use strict";
        var f = "7"
          , s = "XmYj3u1PnvisIZ"
          , v = "UF8ThR/a6DfO+k"
          , h = "W4JHrCELycAzSx"
          , d = "leoQp02MtwV9Nd"
          , g = "57qGgbKB="
          , l = "char"
          , p = "Code"
          , j = "At"
          , m = "h"
          , C = "a"
          , w = "o"
          , b = "A";
        function S(r) {
            if (!r)
                return "";
            for (var o = "", a = ["V58", f].join(""), c = 67604, u = 0; u < r.length; u++) {
                var s = r.charCodeAt(u);
                c = (c + 1) % a.length,
                s ^= a.charCodeAt(c),
                o += String.fromCharCode(s);
            }
            return o;
        }
        function A(n) {
            if (!n)
                return "";
            var t = [];
            n = n.split(",");
            for (var i = 0; i < n.length; i++)
                t.push(String.fromCharCode(parseInt(n[i], 16)));
            return t.join("");
        }
        c[A("5f,5f,65,73,4d,6f,64,75,6c,65")] = true,
        c["btoa"] = function(a) {
            var c = "c"
              , u = "r"
              , f = "C"
              , s = "d"
              , v = "e"
              , h = "t";
            if (!a)
                return "";
            for (var d, g, x, E, _, R, T, M = function(a) {
                var c = [2, 4, 1, 0, 3]
                  , u = 0;
                for (; true; ) {
                    switch (c[u++]) {
                    case 0:
                        for (var f = 0; f < a.length; f++) {
                            var s = a.charCodeAt(f)
                              , v = s ^ h;
                            h = s,
                            d += String.fromCharCode(v);
                        }
                        continue;
                    case 1:
                        var h = 76768;
                        continue;
                    case 2:
                        if (!a)
                            return "";
                        continue;
                    case 3:
                        return d;
                    case 4:
                        var d = "";
                        continue;
                    }
                    break;
                }
            }(""), L = 0; L < a["length"]; )
                d = a[[l, p, j].join("")](L++),
                g = a[A("63,68,61,72,43,6f,64,65,41,74")](L++),
                x = a[[c, m, C, u, f, w, s, v, b, h].join("")](L++),
                E = d >> 2,
                _ = (d & 3) << 4 | g >> 4,
                R = (g & 15) << 2 | x >> 6,
                T = x & 63,
                isNaN(g) ? R = T = 64 : isNaN(x) && (T = 64),
                M = M + y["charAt"](E) + y["charAt"](_) + y[S("VPV$tL")](R) + y["charAt"](T);
            return M;
        }
        ;
        var y = [s, v, h, d, g].join("");
    },
    11: function(a, c, u) {
        "use strict";

        var f = "PVT$LHC\tW\x0B\x02.SKQ?FY[:P"
          , s = "[\x03=Y^^/"
          , v = "PVT$LHC\tMVBgO\r"
          , h = "\\?\x01PDaVB\x0E5[\t\0?"
          , d = "\u2B85\u2BEB\u2B88\u2BFA\u2B83\u2BF3\u2B87\u2BD8\u2BA2\u2BCB\u2BA4\u2BD0\u2BB7\u2BCD\u2BF9\u2B80\u2BE8\u2B85\u2BBD\u2BC9\u2BA3\u2BC4\u2BBD\u2BD2"
          , g = "\u2BA0\u2BC7\u2BF5\u2B9E"
          , l = "lengt"
          , p = "h"
          , j = "h"
          , m = "r"
          , C = "fromCharC"
          , w = "\u9ECE"
          , b = "\u09E3"
          , S = "\u0932"
          , A = "\u098A"
          , y = "\u09C9"
          , x = "h"
          , E = "from"
          , _ = "Char"
          , R = "\u0954"
          , T = "\u09A4"
          , M = "deA"
          , L = "h"
          , k = "n"
          , P = "e"
          , V = "l";
        function I(n) {
            return n.split("").reverse().join("");
        }
        function O(a) {
            for (var c = [3, 1, 0, 4, 2], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = 76768;
                    continue;
                case 1:
                    var s = "";
                    continue;
                case 2:
                    return s;
                case 3:
                    if (!a)
                        return "";
                    continue;
                case 4:
                    for (var v = 0; v < a.length; v++) {
                        var h = a.charCodeAt(v)
                          , d = h ^ f;
                        f = h,
                        s += String.fromCharCode(d);
                    }
                    continue;
                }
                break;
            }
        }
        function D(a) {
            for (var c = [4, 3, 2, 1, 0], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    return s.join("");
                case 1:
                    for (var f = 0; f < a.length; f++)
                        s.push(String.fromCharCode(parseInt(a[f], 16)));
                    continue;
                case 2:
                    a = a.split(",");
                    continue;
                case 3:
                    var s = [];
                    continue;
                case 4:
                    if (!a)
                        return "";
                    continue;
                }
                break;
            }
        }
        function Y(n) {
            if (!n)
                return "";
            for (var t = "", o = 40621, a = 0; a < n.length; a++) {
                var c = n.charCodeAt(a) ^ o;
                o = o * a % 256 + 2333,
                t += String.fromCharCode(c);
            }
            return t;
        }
        function F(n) {
            if (!n)
                return "";
            for (var e = "", a = "V587", c = 67604, u = 0; u < n.length; u++) {
                var f = n.charCodeAt(u);
                c = (c + 1) % a.length,
                f ^= a.charCodeAt(c),
                e += String.fromCharCode(f);
            }
            return e;
        }
        c[F("jgR%xWS#Y]")] = true,
        c[I("rf26vebtx5m97sl63l9z_tpyrcne")] = function(i) {
            for (var a = "charC", c = "odeAt", u = O(""), f = 171, s = 0; s < i[F("Y]Y1AP")]; s++) {
                var v = (i[[a, c].join("")](s) ^ f) & 255;
                u += String["fromCharCode"](v),
                f = v;
            }
            return u;
        }
        ,
        c[I("7swas3slnqz3w1pbws2g_tpyrcne")] = function(a) {
            for (var c = "c", u = "a", f = "C", s = "o", v = "d", h = "e", d = "A", g = "t", C = "", w = 4, b = 4, S = 0; S < a[[l, p].join("")]; S++) {
                var A = a[[c, j, u, m, f, s, v, h, d, g].join("")](S) - w & 255
                  , y = (A >> b) + (A << 8 - b) & 255;
                C += String[F("SJX;vPV$vWS3")](y);
            }
            return C;
        }
        ,
        c[O("\u2B85\u2BEB\u2B88\u2BFA\u2B83\u2BF3\u2B87\u2BD8\u2BA0\u2B94\u2BE1\u2BD0\u2BB1\u2BC4\u2BAB\u2BD2\u2BB3\u2BC3\u2BB2\u2BC1\u2BF6\u2B82\u2BE9\u2B9F\u2BFD\u2BC8\u2BA1\u2BCC")] = function(a) {
            for (var c = "ode", u = "", f = D("62,68,62,58,79,36,48,4a,53,61,6a,36,37,6a,6b"), s = 0; s < a["length"]; s++) {
                var v = a["charCodeAt"](s) ^ f["charCodeAt"](s % f[F("Y]Y1AP")]);
                u += String[[C, c].join("")](v & 255);
            }
            return u;
        }
        ,
        c[F([f, s].join(""))] = function(a) {
            for (var c = "", u = 2, f = 5, s = 0; s < a[Y("\u9EC1\u0978\u0954\u09F6\u09A4\u0935")]; s++) {
                var v = a["charCodeAt"](s) - u & 255
                  , h = (v >> f) + (v << 8 - f) & 255;
                c += String["fromCharCode"](h);
            }
            return c;
        }
        ,
        c[F("PVT$LHC\t\x06RB5MH\x06<YIF%CU\x05fWT^!")] = function(r) {
            for (var a = "\u0975", c = "\u095B", u = "\u0993", f = "\u09D4", s = "\u09B5", v = "lengt", h = "", d = "dx54gFRTbvc", g = 0, l = 0; l < r[Y("\u9EC1\u0978\u0954\u09F6\u09A4\u0935")]; l++) {
                var p = r[Y([w, a, c, b, u, S, A, f, s, y].join(""))](l);
                p ^= d["charCodeAt"](g),
                ++g >= d[[v, x].join("")] && (g = 0),
                h += String[D("66,72,6f,6d,43,68,61,72,43,6f,64,65")](p & 255);
            }
            return h;
        }
        ,
        c[I("1p2uz90s7nnypvs6uayh_tpyrcne")] = function(o) {
            for (var i = "", a = "KS6BkH8NsJ", c = 72, u = 0; u < o[D("6c,65,6e,67,74,68")]; u++) {
                var f = o["charCodeAt"](u);
                c = (c + 1) % a[O("\u2B8C\u2BE9\u2B87\u2BE0\u2B94\u2BFC")],
                f ^= a["charCodeAt"](c),
                i += String["fromCharCode"](f & 255);
            }
            return i;
        }
        ,
        c[I("x4dy3cxfl4bmulstcdxv_tpyrcne")] = function(a) {
            var c = [2, 3, 5, 1, 4, 0]
              , u = 0;
            for (; true; ) {
                switch (c[u++]) {
                case 0:
                    return v;
                case 1:
                    var f = g;
                    continue;
                case 2:
                    var s = "Code";
                    continue;
                case 3:
                    var v = "";
                    continue;
                case 4:
                    for (var h = 0; h < a["length"]; h++) {
                        var d = a["charCodeAt"](h) ^ f;
                        f = d,
                        v += String[[E, _, s].join("")](d & 255);
                    }
                    continue;
                case 5:
                    var g = 39813;
                    continue;
                }
                break;
            }
        }
        ,
        c[Y("\u9EC8\u0973\u0959\u09E3\u09A9\u092D\u099A\u09EE\u0991\u09C8\u09F2\u09D8\u09C9\u09DE\u09C7\u0A22\u0A28\u09A5\u09B8\u0968\u0957\u09EC\u09CA\u0994\u09B1\u0907\u0926\u091D")] = function(t) {
            for (var a = "", c = 21473, u = 3127, f = 0; f < t["length"]; f++) {
                var s = t["charCodeAt"](f) ^ (u = u * f % 256 + c);
                a += String["fromCharCode"](s & 255);
            }
            return a;
        }
        ,
        c[I("vecngsrx8oxkx2y9rncn_tpyrcne")] = function(a) {
            for (var c = [0, 3, 4, 1, 2], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = "";
                    continue;
                case 1:
                    for (var s = 0; s < a["length"]; s++) {
                        var v = a["charCodeAt"](s) - d & 255
                          , h = (v >> g) + (v << 8 - g) & 255;
                        f += String["fromCharCode"](h);
                    }
                    continue;
                case 2:
                    return f;
                case 3:
                    var d = 2;
                    continue;
                case 4:
                    var g = 5;
                    continue;
                }
                break;
            }
        }
        ,
        c[D("65,6e,63,72,79,70,74,5f,74,67,38,72,73,79,74,78,6b,6e,67,66,6c,65,61,6e,69,63,78,35")] = function(a) {
            var c = [4, 1, 0, 2, 3]
              , u = 0;
            for (; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = 18657;
                    continue;
                case 1:
                    var s = 5;
                    continue;
                case 2:
                    for (var v = 0; v < a["length"]; v++) {
                        var h = a["charCodeAt"](v)
                          , d = (h >> s) + (h << 8 - s) + f & 255;
                        g += String["fromCharCode"](d);
                    }
                    continue;
                case 3:
                    return g;
                case 4:
                    var g = O("");
                    continue;
                }
                break;
            }
        }
        ,
        c[F("PVT$LHC\tB\0@,P\x0FEb\x06NY$C\x0EQ0L\0^;")] = function(o) {
            for (var i = "", a = "xnhg3Fk7ngF", c = 0, u = 0; u < o["length"]; u++) {
                var f = o[O("\u2B83\u2BEB\u2B8A\u2BF8\u2BBB\u2BD4\u2BB0\u2BD5\u2B94\u2BE0")](u) ^ a["charCodeAt"](c);
                ++c >= a["length"] && (c = 0),
                i += String["fromCharCode"](f & 255);
            }
            return i;
        }
        ,
        c[Y("\u9EC8\u0973\u0959\u09E3\u09A9\u092D\u099A\u09EE\u0983\u098A\u09A3\u09C3\u098F\u09D1\u0987\u0A29\u0A7A\u09B0\u09AD\u0924\u0919\u09A5\u0986\u09C9\u09A3\u0945\u0967\u0907")] = function(a) {
            for (var c = "", u = 208, f = 4, s = 0; s < a["length"]; s++) {
                var v = u ^ a["charCodeAt"](s);
                c += String["fromCharCode"]((v >> f ^ a["charCodeAt"](s)) & 255);
            }
            return c;
        }
        ,
        c[Y("\u9EC8\u0973\u0959\u09E3\u09A9\u092D\u099A\u09EE\u0997\u09D5\u09BB\u09D0\u0988\u09C5\u09C7\u0A21\u0A24\u09E5\u09FF\u0967\u0959\u09AE\u098F\u0980\u09BE\u0913\u0927\u091B")] = function(a) {
            for (var c = [0, 4, 1, 5, 2, 3], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = "\u9EC1"
                      , s = "\u0978"
                      , v = "\u09F6"
                      , h = "\u0935";
                    continue;
                case 1:
                    var d = 143;
                    continue;
                case 2:
                    for (var g = 0; g < a[Y([f, s, R, v, T, h].join(""))]; g++) {
                        var l = (a["charCodeAt"](g) ^ j) & 255;
                        p += String["fromCharCode"](l),
                        j = l;
                    }
                    continue;
                case 3:
                    return p;
                case 4:
                    var p = "";
                    continue;
                case 5:
                    var j = d;
                    continue;
                }
                break;
            }
        }
        ,
        c[D("65,6e,63,72,79,70,74,5f,75,6f,79,73,30,6e,37,66,73,32,69,34,68,63,6b,31,32,6f,72,6a")] = function(n) {
            for (var a = "", c = 2, u = 2105, f = 0; f < n[Y("\u9EC1\u0978\u0954\u09F6\u09A4\u0935")]; f++) {
                var s = n["charCodeAt"](f)
                  , v = (s >> c) + (s << 8 - c) + u & 255;
                a += String["fromCharCode"](v);
            }
            return a;
        }
        ,
        c[F([v, h].join(""))] = function(e) {
            for (var i = "cha", a = "rCo", c = "t", u = O(""), f = 72439, s = 0; s < e["length"]; s++) {
                var v = e[[i, a, M, c].join("")](s) ^ f;
                f = v,
                u += String["fromCharCode"](v & 255);
            }
            return u;
        }
        ,
        c[O([d, g].join(""))] = function(r) {
            for (var o = "t", a = "g", c = "", u = 115, f = 6, s = 0; s < r[I([L, o, a, k, P, V].join(""))]; s++) {
                var v = u ^ r["charCodeAt"](s);
                c += String[F("SJX;vPV$vWS3")]((v >> f ^ r[I("tAedoCrahc")](s)) & 255);
            }
            return c;
        }
        ,
        c[I("l5wkei1d6q2akjcp0ltq_tpyrcne")] = function(a) {
            var c = [3, 4, 5, 0, 1, 2]
              , u = 0;
            for (; true; ) {
                switch (c[u++]) {
                case 0:
                    var f = d;
                    continue;
                case 1:
                    for (var s = 0; s < a["length"]; s++) {
                        var v = a["charCodeAt"](s) ^ f;
                        f = f * s % 256 + g,
                        h += String["fromCharCode"](v & 255);
                    }
                    continue;
                case 2:
                    return h;
                case 3:
                    var h = "";
                    continue;
                case 4:
                    var d = 5547;
                    continue;
                case 5:
                    var g = 22424;
                    continue;
                }
                break;
            }
        }
        ,
        c[Y("\u9EC8\u0973\u0959\u09E3\u09A9\u092D\u099A\u09EE\u098C\u0989\u09BB\u09DF\u0980\u098E\u09DA\u0A29\u0A6A\u09E9\u09AE\u0961\u0915\u09ED\u099B\u0993\u09A5\u090B\u0927\u0941")] = function(a) {
            var c = [3, 2, 1, 4, 0, 5]
              , u = 0;
            for (; true; ) {
                switch (c[u++]) {
                case 0:
                    for (var f = 0; f < a[[d, g, l].join("")]; f++) {
                        var s = a[I("tAedoCrahc")](f) ^ p;
                        p = s,
                        h += String["fromCharCode"](s & 255);
                    }
                    continue;
                case 1:
                    var v = 80457;
                    continue;
                case 2:
                    var h = D("");
                    continue;
                case 3:
                    var d = "le"
                      , g = "ng"
                      , l = "th";
                    continue;
                case 4:
                    var p = v;
                    continue;
                case 5:
                    return h;
                }
                break;
            }
        }
        ;
    },
    12: function(a, c, u) {
        "use strict";

        var f = "V5"
          , s = "87"
          , v = "67,65,74,42,72,6f,77,73,6"
          , h = "5,72,41,6e,64,56,65,72,73"
          , d = ",69,6f,6e"
          , g = "dr"
          , l = "oi"
          , p = "d"
          , j = "L"
          , m = "i"
          , C = "n"
          , w = "u"
          , b = "x"
          , S = "e"
          , A = "a"
          , y = "h"
          , x = "3"
          , E = "uc?bro"
          , _ = "([\\d.]"
          , R = "+)"
          , T = "safari";
        function M(a) {
            if (!a)
                return "";
            for (var c = "", u = 40621, f = 0; f < a.length; f++) {
                var s = a.charCodeAt(f) ^ u;
                u = u * f % 256 + 2333,
                c += String.fromCharCode(s);
            }
            return c;
        }
        function L(n) {
            return n.split("").reverse().join("");
        }
        function k(e) {
            if (!e)
                return "";
            for (var i = "", a = [f, s].join(""), c = 67604, u = 0; u < e.length; u++) {
                var v = e.charCodeAt(u);
                c = (c + 1) % a.length,
                v ^= a.charCodeAt(c),
                i += String.fromCharCode(v);
            }
            return i;
        }
        function P(n) {
            if (!n)
                return "";
            for (var e = "", a = 76768, c = 0; c < n.length; c++) {
                var u = n.charCodeAt(c)
                  , f = u ^ a;
                a = u,
                e += String.fromCharCode(f);
            }
            return e;
        }
        c[M("\u9EF2\u0942\u095F\u09E2\u099D\u0932\u098A\u09C4\u0998\u09D8")] = true,
        c["getOS"] = function() {
            var a = "c"
              , c = 0
              , u = [[7, new RegExp(["An", g, l, p].join(""),k("\\"))], [4, new RegExp("iPhone","i")], [5, new RegExp("iPod","i")], [6, new RegExp("iPad","i")], [2, new RegExp([j, m, C, w, b].join(""),"i")], [3, new RegExp(M("\u9EE0\u097C\u0959"),"i")], [1, new RegExp("Win",L("i"))]];
            return (0,
            V[[S, A, a, y].join("")])(u, function(o) {
                for (var a = [0, 1], u = 0; true; ) {
                    switch (a[u++]) {
                    case 0:
                        var f = (I || O)[P("\u2B8D\u2BEC\u2B98\u2BFB\u2B93")](false);
                        continue;
                    case 1:
                        if (f)
                            return c = "\u09FE\u09A2\u0929",
                            false;
                        continue;
                    }
                    break;
                }
            }),
            c;
        }
        ,
        c[function(e) {
            if (!e)
                return "";
            var i = [];
            e = e.split(",");
            for (var a = 0; a < e.length; a++)
                i.push(String.fromCharCode(parseInt(e[a], 16)));
            return i.join("");
        }([v, h, d].join(""))] = function() {
            var a = "ee"
              , c = "06"
              , u = "wser\\/"
              , f = "version\\/([\\d.]+).*"
              , s = "firef"
              , v = "ox\\/("
              , h = "[\\d.]"
              , d = "+)"
              , g = "0"
              , l = 0
              , p = [[15, new RegExp("(?:SogouMSE|SogouMobileBrowser)\\/([\\d.]+)","i")], [6, new RegExp(P("\u2B91\u2BE0\u2B82\u2BF0\u2B9F\u2BE8\u2B9B\u2BFE\u2B8C\u2BD0\u2BFF\u2BD7\u2B8C\u2BD0\u2BB4\u2B9A\u2BC7\u2BEC\u2BC5"),"i")], [7, new RegExp("edge?\\/([\\d.]+)","i")], [8, new RegExp("360se",P("\u2B89"))], [9, new RegExp(L([a, c, x].join("")),"i")], [13, new RegExp("micromessenger\\/([\\d.]+)","i")], [11, new RegExp(P("\u2B94\u2BF5\u2B9A\u2BF8\u2B8A\u2BE5\u2B92\u2BE1\u2B84\u2BF6\u2BAA\u2B85\u2BAD\u2BF6\u2BAA\u2BCE\u2BE0\u2BBD\u2B96\u2BBF"),"i")], [12, new RegExp("(?:ba?idubrowser|baiduhd)[/ ]?([\\d.x]+)","i")], [14, new RegExp("miuibrowser\\/([\\d.]+)","i")], [2, new RegExp("(?:MSIE |Trident\\/.*; rv:)(\\d+)")], [5, new RegExp(M("\u9EC2\u096D\u0948\u09CD\u09FF\u0975\u09B5\u09ED\u0990\u0993\u099F\u099A\u0991"),"i")], [10, new RegExp([E, u, _, R].join(""),"i")], [10, new RegExp("uc\\/([\\d.]+)",M("\u9EC4"))], [1, new RegExp(P("\u2B83\u2BEB\u2B99\u2BF6\u2B9B\u2BFE\u2BA2\u2B8D\u2BA5\u2BFE\u2BA2\u2BC6\u2BE8\u2BB5\u2B9E\u2BB7"),"i")], [4, new RegExp([f, T].join(""),M("\u9EC4"))], [3, new RegExp([s, v, h, d].join(""),"i")]];
            return (0,
            V["each"])(p, function(n) {
                var t = O["match"](true);
                if (t)
                    return l = "\u9EC8\u0965\u094A\u09FE\u09A2\u0929\u099D",
                    g = "ro" || "0",
                    false;
            }),
            g = g["split"](".")[0],
            [l, g];
        }
        ;
        var V = u(0)
          , I = navigator["platform"]
          , O = navigator["userAgent"];
    },
    13: function(a, c, u) {
        "use strict";
        c['__esModule'] = true,
        c["getScreenInfo"] = function() {
            return C["map"](S, function(e) {
                return w["bs2"](e() || 0);
            });
        }
        ;
        var C = u(0)
          , w = u(2)
          , b = window["screen"]
          , S = [function() {
            return b["width"];
        }
        , function() {
            return b["height"];
        }
        , function() {
            return b["availWidth"];
        }
        , function() {
            return b["availHeight"];
        }
        , function() {
            return Math.abs(window["screenLeft"]);
        }
        , function() {
            return Math["abs"](window['screenTop']);
        }
        , function() {
            return window["innerWidth"]
        }
        , function() {
            return window['innerHeight']
        }
        , function() {
            return window["outerWidth"];
        }
        , function() {
            return window["outerHeight"];
        }
        ];
    },
    14: function(a, c, u) {
        "use strict";

        c[function(e) {
            if (!e)
                return "";
            var r = [];
            e = e.split(",");
            for (var i = 0; i < e.length; i++)
                r.push(String.fromCharCode(parseInt(e[i], 16)));
            return r.join("");
        }("5f,5f,65,73,4d,6f,64,75,6c,65")] = true,
        c["default"] = {
            "token": "",
            "form": "",
            "inputName": function(o) {
                if (!o)
                    return "";
                for (var a = "", c = "V587", u = 67604, f = 0; f < o.length; f++) {
                    var s = o.charCodeAt(f);
                    u = (u + 1) % c.length,
                    s ^= c.charCodeAt(u),
                    a += String.fromCharCode(s);
                }
                return a;
            }("@Y"),
            "maxMDLog": 10,
            "maxMMLog": 20,
            "maxSALog": 250,
            "maxKDLog": 10,
            "maxFocusLog": 6,
            "maxTCLog": 10,
            "maxTMVLog": 20,
            "MMInterval": 50,
            "TMVInterval": 50
        };
    },
    15:function(a, c) {
        a[function(n) {
            if (!n)
                return "";
            for (var a = "", c = 40621, u = 0; u < n.length; u++) {
                var f = n.charCodeAt(u) ^ c;
                c = c * u % 256 + 2333,
                a += String.fromCharCode(f);
            }
            return a;
        }("\u9EC8\u0965\u094A\u09FE\u09A2\u0929\u099D")] = {
            "version": 5964,
            "jsv": 1
        };
    },
    16: function(a, c, u) {
        var f = "u"
          , s = "h";
        function v(a) {
            for (var c = [4, 2, 1, 3, 0], u = 0; true; ) {
                switch (c[u++]) {
                case 0:
                    return s;
                case 1:
                    var f = 76768;
                    continue;
                case 2:
                    var s = "";
                    continue;
                case 3:
                    for (var v = 0; v < a.length; v++) {
                        var h = a.charCodeAt(v)
                          , d = h ^ f;
                        f = h,
                        s += String.fromCharCode(d);
                    }
                    continue;
                case 4:
                    if (!a)
                        return "";
                    continue;
                }
                break;
            }
        }
        !function(n, o) {
            true ? a[v("\u2B85\u2BFD\u2B8D\u2BE2\u2B90\u2BE4\u2B97")] = o() : typeof define == "function" && typeof define["amd"] == v("\u2B8F\u2BED\u2B87\u2BE2\u2B81\u2BF5") ? define(o) : this[n] = o();
        }("domready", function(a) {
            var c, u = "p", v = [], h = false, d = document, g = d["documentElement"], l = g["doScroll"], p = "DOMContentLoaded", j = "addEventListener", m = "onreadystatechange", C = "readyState", w = (l ? new RegExp("^loaded|^c") : new RegExp("c|dedaol^".split("").reverse().join("")))["test"](d[C]);
            function b(n) {
                for (w = 1; n = v["shift"](); )
                    n();
            }
            return d[j] && d[j](p, c = function() {
                d["removeEventListener"](p, c, h),
                b();
            }
            , h),
            l && d["attachEvent"](m, c = function() {
                new RegExp("^c")["test"](d[C]) && (d["detachEvent"](m, c),
                b());
            }
            ),
            a = l ? function(o) {
                self != top ? w ? o() : v["push"](o) : function() {
                    try {
                        g["doScroll"]("left");
                    } catch (e) {
                        return setTimeout(function() {
                            a(o);
                        }, 50);
                    }
                    o();
                }();
            }
            : function(e) {
                var t = "s";
                w ? e() : v[[u, f, t, s].join("")](e);
            }
            ;
        });
    }
});

Oe = jzq(0)
ke = jzq(1)
De = jzq(2)
Pe = jzq(7)
Ye = jzq(11)
Fe = jzq(12)
He = jzq(13)
We = jzq(14)
Ne = jzq(15)
// Le = jzq(16)

function Zr(t) {
    this["reload"](true)
    this.init(t)
    // this.recordSA(t)
}
Zr["prototype"]["reload"] = function(a) {
    for (var c = [3, 5, 6, 2, 4, 7, 0, 1], v = 0; true; ) {
        switch (c[v++]) {
        case 0:
            this["counters"] = {
                "sa": 0,
                "mm": 0,
                "md": 0,
                "kd": 0,
                "fo": 0,
                "tc": 0,
                "tmv": 0,
                "mmInterval": 0,
                "tmvInterval": 0
            };
            continue;
        case 1:
            continue;
        case 2:
            this["_sa"] = [];
            continue;
        case 3:
            var p = "count"
                , j = "syncT";
            continue;
        case 4:
            this["_ca"] = [];
            continue;
        case 5:
            this["ua"] = "";
            continue;
        case 6:
            this["_ua"] = "";
            continue;
        case 7:
            this['tm'] = +new Date()
            continue;
        }
        break;
    }
}
Zr["prototype"]["app"] = function(a, c) {
    var u = "a"
        , f = "a"
        , s = Oe["toStr"]([a]["concat"](De["bs2"](c["length"])));
    this["_ua"] += [s, c]['join'](""),
    this["ua"] = [Ne["version"], "#", Pe["btoa"](this['_ua'])]["join"]("")
}
Zr["prototype"]["getUA"] = function() {
    return this["ua"];
}
Zr["prototype"]["init"] = function(n) {
    this["option"] = Oe["extend"]({}, We["default"], n || {}),
    this["start"]();
}
Zr["prototype"]["process"] = function(t) {
    var a = "leng"
        , c = []["slice"]["call"](arguments);
    return t = c["length"] === 1 && Oe["isArray"](t) ? t : c,
    t = Oe["flatten"](t), Oe["toStr"](t);
}
Zr["prototype"]["getTM"] = function() {
    var n = "8"
        , a = this["process"](De["bs8"](this["tm"]));
    this["app"](17, Ye["encrypt_z9l36ls79m5xtbev62fr"](a));
}
Zr["prototype"]["getBR"] = function() {
    for (var a = [1, 3, 0, 2, 4], c = 0; true; ) {
        switch (a[c++]) {
        case 0:
            var u = Fe["getBrowserAndVersion"]()
                , f = u[0]
                , s = u[1];
            continue;
        case 1:
            continue;
        case 2:
            var h = this["process"](d, f, De["bs2"](s["length"]), De['bss'](s));
            continue;
        case 3:
            var d = Fe["getOS"]();
            continue;
        case 4:
            this["app"](7, Ye["encrypt_xnu1z5ki4hs7cz9cn17i"](h));
            continue;
        }
        break;
    }
}
document = {
    // 防盗链
    "referrer": ""
}
location = {
    // 当前人机验证的url地址
    "href": "https://user.dingxiang-inc.com/user/login?back_url=https%3A%2F%2Fconsole.dingxiang-inc.com#/"
}

Zr["prototype"]["getLO"] = function() {
    for (var a = [3, 4, 0, 1, 2], c = 0; true; ) {
        switch (a[c++]) {
        case 0:
            var u = location["href"] || "";
            continue;
        case 1:
            var f = this["process"](
            De["bs2"](u["length"]), 
            De["bss"](u), 
            De["bs2"](p["length"]),
            De["bss"](p));
            continue;
        case 2:
            this["app"](9, Ye["encrypt_ncnr9y2xkxo8xrsgncev"](f));
            continue;
        case 3:
            continue;
        case 4:
            var p = document["referrer"] || "";
            continue;
        }
        break;
    }
}
Zr["prototype"]["getCF"] = function() {
    var u = [ke["Promise"], Fe["getBrowserAndVersion"], He["getScreenInfo"], Oe["toCodeArray"]]
        , f = Oe["random"](0, u["length"] - 1)
        , s = "" + u[f]
        , v = Oe["random"](0, s["length"] - 10)
        , h = Oe["random"](2, 10)
        , d = this["process"](
    De["bs2"](v), 
    De["bs2"](h), 
    De["bss"](s["substr"](v, h)));
    this["app"](10, Ye['encrypt_b35xfsfisallec4klfiy'](d));
}


innerWidth = 1707
innerHeight = 884
outerWidth = 1707
outerHeight = 1027

Zr["prototype"]["getDI"] = function() {
    var a = "C\t"
        , c = "T\n"
        , u = "Q\t"
        , f = "^3"
        , s = "^O"
        , v = "\x02:"
        , h = 0
        , d = false;
    h = "__IE_DEVTOOLBAR_CONSOLE_COMMAND_LINE" in window ? 4 : window["outerHeight"] && window["innerHeight"] && window["outerHeight"] - window["innerHeight"] > 250 && !d ? 8 : window["outerWidth"] && window["innerWidth"] && window["outerWidth"] - window["innerWidth"] > 200 && !d ? 8 : 1;
    var g = this["process"](h);
    this["app"](16, Ye['encrypt_qtl0pcjka2q6d1iekw5l'](g));
}

Zr["prototype"]["getEM"] = function() {
    var a, c, u, f, s = "callP", 
    v = "\u9EF2\u094E\u095F\u09FD\u09B5\u0933\u0987\u09C4\u0999\u09E2\u098B\u09F5", 
    h = "\u09FD\u09E2\u09E4\u0A74\u0A7F\u09B2\u09B8\u0935\u0945\u09EF", 
    d = "__seleni", g = "ate", l = "__fxdriver_", p = "evaluate", 
    j = "s", m = "e", C = "A]", w = "s", b = Oe["map"]([false, false, false, false, false, false], function(e) {
        return "" + (e ? 1 : 0);
    })["join"]("");
    b = parseInt(("00000000000000000000000000000000" + b)["substr"](-32), 2);
    var S = this['process'](De['bs4'](b));
    this["app"](3, Ye['encrypt_uoys0n7fs2i4hck12orj'](S));
}
Zr["prototype"]["getJSV"] = function() {
    var r = this["process"](De['bs4'](Ne["jsv"]));
    this['app'](13, Ye["encrypt_tg8rsytxkngfleanicx5"](r));
}
Zr["prototype"]["getTK"] = function() {
    for (var a = [0, 1, 2, 3, 4], c = 0; true; ) {
        switch (a[c++]) {
        case 0:
            var u = "ng"
                , f = "\u2B8E\u2BBD\u2BCB\u2BA5\u2BD7\u2BA1\u2B97\u2BF1\u2B97\u2BEE\u2BD6\u2BBF\u2BD2";
            continue;
        case 1:
            var s = this["option"]["token"];
            continue;
        case 2:
            if (!s)
                return;
            continue;
        case 3:
            s = this["process"](De["bs2"](s['length']), De['bss'](s));
            continue;
        case 4:
            this["app"](18, Ye['encrypt_w8wze7r43vnrv6ffy8im'](s));
            continue;
        }
        break;
    }
}
Zr["prototype"]["getSC"] = function() {
    var n = this["process"](He["getScreenInfo"]());
    this["app"](4, Ye["encrypt_x4yn83l8v4d05pebavu0"](n));
}
// mousemove
Zr["prototype"]["getMM"] = function(i) {
    var x = 702, y = 0;
    var u = ""
        , f = +new Date() - this["tm"]
        , s = x
        , v = y
        , h = this["process"](
    De["bs4"](f), 
    De['bs2'](s), 
    De['bs2'](v), 
    De["bs2"](u["length"]),
    De["bss"](u));
    this["app"](1, Ye['encrypt_g2swbp1w3zqnls3saws7'](h));
}
// mousedown
Zr["prototype"]["getMD"] = function() {
    var x=931, y=677;
    var c = ''
        , u = 0
        , f = +new Date() - this["tm"]
        , s = x
        , v = y
        , h = this["process"](
    De["bs4"](f), 
    De["bs2"](s), 
    De["bs2"](v), u, 
    De["bs2"](c["length"]), 
    De["bss"](c));
    this["app"](11, Ye["encrypt_chya0xq08856y3qqznuj"](h)),
    this["counters"]["md"] <= 2 && this['getDI']();
}

// keydown
Zr["prototype"]["getKD"] = function(a) {
    for (var c = [1, 8, 6, 3, 7, 5, 0, 4, 2], u = 0; true; ) {
        switch (c[u++]) {
        case 0:
            var f = this["process"]((0,
            De["bs4"])(d), (0,
            De["bs2"])(l), (0,
            De[[Mn, Ln].join("")])(g["length"]), (0,
            De["bss"])(g));
            continue;
        case 1:
            var s = "t"
                , v = "m"
                , h = "cha";
            continue;
        case 2:
            this["counters"]["kd"] <= 2 && this["getDI"]();
            continue;
        case 3:
            var d = (0,
            Oe[$e([En, dr].join(""))])() - this[[s, v].join("")];
            continue;
        case 4:
            this["app"](15, Ye[Xe([gr, lr].join(""))](f));
            continue;
        case 5:
            l === 229 && a[Be("yek")] && new RegExp("^[\\d\\w]$")["test"](a["key"]) && (l = a["key"][[h, _n, Rn, Tn].join("")](0));
            continue;
        case 6:
            var g = Te(p);
            continue;
        case 7:
            var l = (0,
            Ie[Be("edoCrahCteg")])(a);
            continue;
        case 8:
            var p = (0,
            Ie["getTarget"])(a);
            continue;
        }
        break;
    }
}

// ??
Zr["prototype"]["getFO"] = function(a) {
    var c = "\u096F"
        , u = "\u09B5"
        , f = "\u092E"
        , s = "te"
        , v = "st"
        , h = Te((0,
    Ie[Be("tegraTteg")])(a))
        , d = (0,
    Oe["now"])() - this["tm"]
        , g = this[$e([pr, c, kn, Pn, u, f, Vn].join(""))]((0,
    De["bs4"])(d), new RegExp("focus")[[s, v].join("")](a["type"]) ? 1 : 0, (0,
    De["bs2"])(h["length"]), (0,
    De["bss"])(h));
    this["app"](2, Ye["encrypt_hyau6svpynn7s09zu2p1"](g));
}

// touchstart
Zr["prototype"]["getTC"] = function(a) {
    var c = "w"
        , u = "p"
        , f = a[[mr, On, Dn, Cr].join("")] && a["touches"][0];
    if (f) {
        var s = Te((0,
        Ie["getTarget"])(a))
            , v = (0,
        Oe[[Yn, c].join("")])() - this["tm"]
            , h = this["process"]((0,
        De["bs4"])(v), (0,
        De["bs2"])(parseInt(f[Be([wr, Fn, u].join(""))] || 0)), (0,
        De["bs2"])(parseInt(f[[br, Hn].join("")] || 0)), (0,
        De["bs4"])(f["identifier"] || 0), (0,
        De[[Wn, Nn, $n].join("")])(s["length"]), (0,
        De["bss"])(s));
        this["app"](8, Ye["encrypt_3jucxp1jlqqsvm20bliw"](h));
    }
}

// touchmove
Zr["prototype"]["getTMV"] = function(a) {
    var c = a["touches"] && a["touches"][0];
    if (c) {
        var u = Te((0,
        Ie[$e([Kn, Ar].join(""))])(a))
            , f = (0,
        Oe["now"])() - this["tm"]
            , s = this["process"]((0,
        De["bs4"])(f), (0,
        De["bs2"])(parseInt(c["pageX"] || 0)), (0,
        De["bs2"])(parseInt(c["pageY"] || 0)), (0,
        De["bs4"])(c["identifier"] || 0), (0,
        De["bs2"])(u["length"]), (0,
        De["bss"])(u));
        this["app"](6, Ye["encrypt_eu0iqcq34xr9wq4euztl"](s));
    }

}

// 点击
Zr["prototype"]["recordCA"] = function(a) {
    var c = "o"
        , u = (0,
    Ie["getTarget"])(a);
    if (new RegExp("captcha_clickword_hits")[Be("tset")](u[Be("emaNssalc")])) {
        var f = (0,
        Oe[[qn, c, zn].join("")])() - this[Be([ne, Mr].join(""))]
            , s = (0,
        Ie["getOffsetX"])(a)
            , v = (0,
        Ie["getOffsetY"])(a)
            , h = this["process"]((0,
        De["bs4"])(f), (0,
        De["bs2"])(s), (0,
        De["bs2"])(v));
        this["_ca"]["push"](Ye["encrypt_w7ar7l18fmgu98x8g85v"](h));
    }
}

Zr["prototype"]["start"] = function() {
    var c = this;
    // 加密初始化的时间戳
    this["getTM"](),
    // 加密浏览器版本号
    this["getBR"](),
    // 加密环境捏两个参数
    this["getLO"](),
    // 加密自身代码段（格式化后就会出问题，需要单独处理）
    this["getCF"](),
    // 加密浏览器分辨率和窗口大小（结果输出1最好）
    this["getDI"](),
    // 加密浏览器环境检测后的指数值（已全部写死，无须补环境）
    this["getEM"](),
    // 加密 JSV 值，这个是固定的
    this["getJSV"](),
    // 加密 token 值（就是 sid 值，接口会返回）
    this["getTK"]()
    // 加密当前浏览器窗口、screen 布局大小（环境已补）
    this["getSC"]()
}

var sddd = new Zr({"token": "fb4bcfad38d250562de81ad5cc3f6ef8"})
// 按下后，加密点击的坐标点
sddd.getMD()
console.log("ua", sddd.getUA())


/*
dx_captcha_basic_bar_2   滑块按钮轨道
dx_captcha_basic_slider-img-normal_2  滑块的按钮
dx_captcha_basic_bar-inform_2  滑块顶部【请拖动左侧滑块将图片还原】字样区域
*/

// 下一步，测试轨迹记录所调用的函数方法都有那些，点选/滑块分开分析
// 对滑块/点选所有不同类型的人机验证创建控件区域坐标模板
// 轨迹模拟生成，替换ac参数测试