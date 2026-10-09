typeof global === 'undefined' ? null : window = global;

; (function (e) {
    e.cb = _0x62692

    // 写死即可
    let _0x345f2f = {
        "__SBOX__": "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
        "__SEED_KEY__": "fd6a43ae25f74398b61c03c83be37449",
        "__ROUND_KEY__": "037606da0296055c"
    }, _0xfc0aff = {
        "__BASE64_ALPHABET__": 'MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo',
        "__BASE64_PADDING__": '7'
    }

    var _0x5bf327 = _0x345f2f["__SBOX__"],
        _0x38f130 = _0x345f2f["__SEED_KEY__"],
        _0x2c3029 = _0x345f2f["__ROUND_KEY__"],
        _0x3c38ba = _0xfc0aff["__BASE64_ALPHABET__"],
        _0x453667 = _0xfc0aff["__BASE64_PADDING__"];
    var _0x54d28b = function () {
        function _0x79531f(_0x3f2294, _0x2a9417) {
            var _0x3a4bcc = [],
                _0x2663aa = !0,
                _0x15b915 = !1,
                _0x35905c = void 0;
            try {
                for (var _0x1ec1f2, _0xd1634c = _0x3f2294[Symbol["iterator"]](); !(_0x2663aa = (_0x1ec1f2 = _0xd1634c["next"]())["done"]) && (_0x3a4bcc["push"](_0x1ec1f2["value"]), !_0x2a9417 || _0x3a4bcc["length"] !== _0x2a9417); _0x2663aa = !0);
            } catch (_0x526f6a) {
                _0x15b915 = !0, _0x35905c = _0x526f6a;
            } finally {
                try {
                    !_0x2663aa && _0xd1634c["return"] && _0xd1634c["return"]();
                } finally {
                    if (_0x15b915) throw _0x35905c;
                }
            }
            return _0x3a4bcc;
        }
        return function (_0x5284f1, _0x31d786) {
            if (Array["isArray"](_0x5284f1)) return _0x5284f1;
            if (Symbol["iterator"] in Object(_0x5284f1)) return _0x79531f(_0x5284f1, _0x31d786);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }()
    function _0x3c6402() {
        for (var _0x575305 = [], _0x2e4e47 = 0; _0x2e4e47 < 4; _0x2e4e47++) _0x575305[_0x2e4e47] = _0x3ab4e1(Math["floor"](256 * Math["random"]()));
        return _0x575305;
    }
    function _0x3ab4e1(_0x123f7c) {
        return _0x123f7c < -128 ? _0x3ab4e1(256 + _0x123f7c) : _0x123f7c > 127 ? _0x3ab4e1(_0x123f7c - 256) : _0x123f7c;
    }
    function _0x5b1ad2() {
        for (var _0x1f7d8a = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], _0x1aa59b = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], _0x323c5c = [], _0x36e8f3 = _0x1aa59b["length"], _0x163284 = 0, _0x29951a = _0x1f7d8a["length"]; _0x163284 < _0x29951a; _0x163284++) _0x323c5c[_0x163284] = _0x9e274a(_0x1f7d8a[_0x163284], _0x1aa59b[_0x163284 % _0x36e8f3]);
        return _0x323c5c;
    }
    function _0x17d8ba(_0x48bedf) {
        var _0x377ae6 = [];
        if (!_0x48bedf["length"]) return _0x456279(64);
        if (_0x48bedf["length"] >= 64) return _0x48bedf["splice"](0, 64);
        for (var _0x3657d8 = 0; _0x3657d8 < 64; _0x3657d8++) _0x377ae6[_0x3657d8] = _0x48bedf[_0x3657d8 % _0x48bedf["length"]];
        return _0x377ae6;
    }
    function _0x37afb7() {
        var _0x226bcd = _0x312bea(_0x38f130),
            _0x2428ae = _0x3c6402();
        return _0x226bcd = _0x17d8ba(_0x226bcd), _0x226bcd = _0x5b1ad2(_0x226bcd, _0x17d8ba(_0x2428ae)), _0x226bcd = _0x17d8ba(_0x226bcd), [_0x226bcd, _0x2428ae];
    }
    function _0x312bea(_0x58c381) {
        _0x58c381 = window["encodeURIComponent"](_0x58c381);
        for (var _0x1f799f = [], _0x1dc5b7 = 0, _0x4d8a35 = _0x58c381["length"]; _0x1dc5b7 < _0x4d8a35; _0x1dc5b7++) "%" === _0x58c381["charAt"](_0x1dc5b7) ? _0x1dc5b7 + 2 < _0x4d8a35 && _0x1f799f["push"](_0x18c57a("" + _0x58c381["charAt"](++_0x1dc5b7) + _0x58c381["charAt"](++_0x1dc5b7))[0]) : _0x1f799f["push"](_0x3ab4e1(_0x58c381["charCodeAt"](_0x1dc5b7)));
        return _0x1f799f;
    }
    function _0x50d2f1(_0x594355) {
        var _0x2c539a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        return "" + _0x2c539a[_0x594355 >>> 4 & 15] + _0x2c539a[15 & _0x594355];
    }
    function _0x18e809(_0x56f763) {
        return _0x56f763["map"](function (_0x292b71) {
            return _0x50d2f1(_0x292b71);
        })["join"]("");
    }
    function _0x1128f7(_0x35af7d) {
        var _0x3ac504 = [];
        return _0x3ac504[0] = _0x3ab4e1(_0x35af7d >>> 24 & 255), _0x3ac504[1] = _0x3ab4e1(_0x35af7d >>> 16 & 255), _0x3ac504[2] = _0x3ab4e1(_0x35af7d >>> 8 & 255), _0x3ac504[3] = _0x3ab4e1(255 & _0x35af7d), _0x3ac504;
    }
    function _0xeebe90(_0x3311dc) {
        return _0x18e809(_0x1128f7(_0x3311dc));
    }
    function _0x1afea9(_0x5ceff0) {
        for (var _0x3e512c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], _0x61df2f = 4294967295, _0x1ac134 = 0, _0x5ac044 = _0x5ceff0["length"]; _0x1ac134 < _0x5ac044; _0x1ac134++) _0x61df2f = _0x61df2f >>> 8 ^ _0x3e512c[255 & (_0x61df2f ^ _0x5ceff0[_0x1ac134])];
        return _0xeebe90(4294967295 ^ _0x61df2f);
    }
    function _0x242d4e(_0x43e6c7, _0x7f1961, _0xd2fd68, _0x58f0ca, _0x54be81) {
        for (var _0x2a48fb = 0, _0x337335 = _0x43e6c7["length"]; _0x2a48fb < _0x54be81; _0x2a48fb++) _0x7f1961 + _0x2a48fb < _0x337335 && (_0xd2fd68[_0x58f0ca + _0x2a48fb] = _0x43e6c7[_0x7f1961 + _0x2a48fb]);
        return _0xd2fd68;
    }
    function _0x5dfb84(_0x3dbb4d) {
        if (!_0x3dbb4d["length"]) return _0x456279(64);
        var _0x3a78eb = [],
            _0xa40fcf = _0x3dbb4d["length"],
            _0x4b6935 = _0xa40fcf % 64 <= 60 ? 64 - _0xa40fcf % 64 - 4 : 128 - _0xa40fcf % 64 - 4;
        _0x242d4e(_0x3dbb4d, 0, _0x3a78eb, 0, _0xa40fcf);
        for (var _0x1b084a = 0; _0x1b084a < _0x4b6935; _0x1b084a++) _0x3a78eb[_0xa40fcf + _0x1b084a] = 0;
        return _0x242d4e(_0x1128f7(_0xa40fcf), 0, _0x3a78eb, _0xa40fcf + _0x4b6935, 4), _0x3a78eb;
    }
    function _0x121dbc(_0x46801c) {
        if (Array["isArray"](_0x46801c)) {
            for (var _0x2a6148 = 0, _0x54ad8b = Array(_0x46801c["length"]); _0x2a6148 < _0x46801c["length"]; _0x2a6148++) _0x54ad8b[_0x2a6148] = _0x46801c[_0x2a6148];
            return _0x54ad8b;
        }
        return Array["from"](_0x46801c);
    }
    function _0x541d79(_0xe063b1) {
        if (_0xe063b1["length"] % 64 !== 0) return [];
        for (var _0x50152a = [], _0x2ded49 = _0xe063b1["length"] / 64, _0xfe078f = 0, _0x42c2fc = 0; _0xfe078f < _0x2ded49; _0xfe078f++) {
            _0x50152a[_0xfe078f] = [];
            for (var _0x58de22 = 0; _0x58de22 < 64; _0x58de22++) _0x50152a[_0xfe078f][_0x58de22] = _0xe063b1[_0x42c2fc++];
        }
        return _0x50152a;
    }
    function _0x54cf1d() {
        for (var _0x1f7d8a = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], _0x1aa59b = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], _0x323c5c = [], _0x36e8f3 = _0x1aa59b["length"], _0x163284 = 0, _0x29951a = _0x1f7d8a["length"]; _0x163284 < _0x29951a; _0x163284++) _0x323c5c[_0x163284] = _0x9e274a(_0x1f7d8a[_0x163284], _0x1aa59b[_0x163284 % _0x36e8f3]);
        return _0x323c5c;
    }
    function _0x509c46(_0x87e132) {
        var _0x11eaac = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return _0x11eaac + 256 >= 0 ? _0x87e132 : [];
    }
    function _0x5dd6b9(_0x3dba95, _0x15726f) {
        if (!_0x3dba95["length"]) return [];
        _0x15726f = _0x3ab4e1(_0x15726f);
        for (var _0x528864 = [], _0x29285d = 0, _0x4f9cdf = _0x3dba95["length"]; _0x29285d < _0x4f9cdf; _0x29285d++) _0x528864["push"](_0x9e274a(_0x3dba95[_0x29285d], _0x15726f));
        return _0x528864;
    }
    function _0x1d8917(_0x30345b, _0x1f8efc) {
        if (!_0x30345b["length"]) return [];
        _0x1f8efc = _0x3ab4e1(_0x1f8efc);
        for (var _0x57e2ab = [], _0x111936 = 0, _0x5f2e9f = _0x30345b["length"]; _0x111936 < _0x5f2e9f; _0x111936++) _0x57e2ab["push"](_0x6470c6(_0x30345b[_0x111936], _0x1f8efc));
        return _0x57e2ab;
    }
    function _0x9e274a(_0x329010, _0x3bf92c) {
        return _0x3ab4e1(_0x3ab4e1(_0x329010) ^ _0x3ab4e1(_0x3bf92c));
    }
    function _0x5995f1(_0x29a89a, _0x406ef) {
        if (!_0x29a89a["length"]) return [];
        _0x406ef = _0x3ab4e1(_0x406ef);
        for (var _0x2cf723 = [], _0x275b04 = 0, _0x1900a5 = _0x29a89a["length"]; _0x275b04 < _0x1900a5; _0x275b04++) _0x2cf723["push"](_0x9e274a(_0x29a89a[_0x275b04], _0x406ef++));
        return _0x2cf723;
    }
    function _0x6470c6(_0x5bd65c, _0x55be37) {
        return _0x3ab4e1(_0x5bd65c + _0x55be37);
    }
    function _0x446610(_0x1f5e4b, _0x58b429) {
        if (!_0x1f5e4b["length"]) return [];
        _0x58b429 = _0x3ab4e1(_0x58b429);
        for (var _0x558c8d = [], _0x22049f = 0, _0x434669 = _0x1f5e4b["length"]; _0x22049f < _0x434669; _0x22049f++) _0x558c8d["push"](_0x6470c6(_0x1f5e4b[_0x22049f], _0x58b429++));
        return _0x558c8d;
    }
    function _0x20f9c7(_0x13fe29, _0x11b7eb) {
        if (!_0x13fe29["length"]) return [];
        _0x11b7eb = _0x3ab4e1(_0x11b7eb);
        for (var _0x4d1486 = [], _0x363957 = 0, _0x589fe3 = _0x13fe29["length"]; _0x363957 < _0x589fe3; _0x363957++) _0x4d1486["push"](_0x9e274a(_0x13fe29[_0x363957], _0x11b7eb--));
        return _0x4d1486;
    }
    function _0x23c1c7(_0x4fd85a, _0x2a6c93) {
        if (!_0x4fd85a["length"]) return [];
        _0x2a6c93 = _0x3ab4e1(_0x2a6c93);
        for (var _0x432856 = [], _0x3a806a = 0, _0x1dfc51 = _0x4fd85a["length"]; _0x3a806a < _0x1dfc51; _0x3a806a++) _0x432856["push"](_0x6470c6(_0x4fd85a[_0x3a806a], _0x2a6c93--));
        return _0x432856;
    }
    function _0x2b2f70() {
        var _0x4036c0 = "NECaptchaSafeWindow",
            _0x5423c2 = function (_0x329170) {
                var _0x111d07 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                return _0x329170 && "function" == typeof _0x329170["parseInt"] ? _0x329170 : _0x111d07;
            },
            _0x19c62c = function () {
                var _0x377d02 = document["getElementById"](_0x4036c0);
                _0x377d02 && (document["body"]["removeChild"](_0x377d02), _0x377d02 = null);
            };
        var _0x42a588 = _0x5423c2(window),
            _0x2b9d92 = {};
        return _0x2b9d92["safeGlobal"] = _0x42a588, _0x2b9d92["destroy"] = _0x19c62c, _0x2b9d92;
    }
    function _0x1ca2ea(_0x269aac) {
        _0x269aac = "" + _0x269aac;
        var _0x4f1d0a = _0x2b2f70(),
            _0x11a662 = _0x4f1d0a["safeGlobal"],
            _0x2806f1 = _0x11a662["parseInt"](_0x269aac["charAt"](0), 16) << 4,
            _0x10bb01 = _0x11a662["parseInt"](_0x269aac["charAt"](1), 16);
        return _0x3ab4e1(_0x2806f1 + _0x10bb01);
    }
    function _0x34ece2(_0x504715) {
        for (var _0x6c64fe = [_0x509c46, _0x5dd6b9, _0x1d8917, _0x5995f1, _0x446610, _0x20f9c7, _0x23c1c7], _0x1879be = _0x2c3029, _0x116e73 = 0, _0x2f4b17 = _0x1879be["length"]; _0x116e73 < _0x2f4b17;) {
            var _0x3488ec = _0x1879be["substring"](_0x116e73, _0x116e73 + 4),
                _0x17acd8 = _0x1ca2ea(_0x3488ec["substring"](0, 2)),
                _0x2af631 = _0x1ca2ea(_0x3488ec["substring"](2, 4));
            _0x504715 = _0x6c64fe[_0x17acd8](_0x504715, _0x2af631), _0x116e73 += 4;
        }
        return _0x504715;
    }
    function _0x474f75() {
        for (var _0x59e594 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], _0x3b650e = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], _0x30f3a0 = [], _0x5634c9 = _0x3b650e["length"], _0xe8c4ff = 0, _0x156f5c = _0x59e594["length"]; _0xe8c4ff < _0x156f5c; _0xe8c4ff++) _0x30f3a0[_0xe8c4ff] = _0x6470c6(_0x59e594[_0xe8c4ff], _0x3b650e[_0xe8c4ff % _0x5634c9]);
        return _0x30f3a0;
    }
    function _0x18c57a(_0x210854) {
        _0x210854 = "" + _0x210854;
        for (var _0x52ac6c = [], _0x4796ec = _0x2b2f70(), _0x38d6c3 = _0x4796ec["safeGlobal"], _0x2dee12 = 0, _0x648db6 = 0, _0x1b76cb = _0x210854["length"] / 2; _0x2dee12 < _0x1b76cb; _0x2dee12++) {
            var _0x47cc6f = _0x38d6c3["parseInt"](_0x210854["charAt"](_0x648db6++), 16) << 4,
                _0x2eb20e = _0x38d6c3["parseInt"](_0x210854["charAt"](_0x648db6++), 16);
            _0x52ac6c[_0x2dee12] = _0x3ab4e1(_0x47cc6f + _0x2eb20e);
        }
        return _0x52ac6c;
    }
    function _0x1556d2(_0x21336a) {
        var _0x5a7120 = _0x18c57a(_0x5bf327),
            _0x560bb0 = function (_0x49e758) {
                return _0x5a7120[16 * (_0x49e758 >>> 4 & 15) + (15 & _0x49e758)];
            };
        if (!_0x21336a["length"]) return [];
        for (var _0x14ac5a = [], _0x388c81 = 0, _0x3c5707 = _0x21336a["length"]; _0x388c81 < _0x3c5707; _0x388c81++) _0x14ac5a[_0x388c81] = _0x560bb0(_0x21336a[_0x388c81]);
        return _0x14ac5a;
    }
    function _0x2d84c6(_0x12e0be, _0xf9a27, _0x14e922) {
        var _0x29e402 = void 0,
            _0x4d9552 = void 0,
            _0x29e17e = void 0,
            _0x4bc45e = [];
        switch (_0x12e0be["length"]) {
            case 1:
                _0x29e402 = _0x12e0be[0], _0x4d9552 = _0x29e17e = 0, _0x4bc45e["push"](_0xf9a27[_0x29e402 >>> 2 & 63], _0xf9a27[(_0x29e402 << 4 & 48) + (_0x4d9552 >>> 4 & 15)], _0x14e922, _0x14e922);
                break;
            case 2:
                _0x29e402 = _0x12e0be[0], _0x4d9552 = _0x12e0be[1], _0x29e17e = 0, _0x4bc45e["push"](_0xf9a27[_0x29e402 >>> 2 & 63], _0xf9a27[(_0x29e402 << 4 & 48) + (_0x4d9552 >>> 4 & 15)], _0xf9a27[(_0x4d9552 << 2 & 60) + (_0x29e17e >>> 6 & 3)], _0x14e922);
                break;
            case 3:
                _0x29e402 = _0x12e0be[0], _0x4d9552 = _0x12e0be[1], _0x29e17e = _0x12e0be[2], _0x4bc45e["push"](_0xf9a27[_0x29e402 >>> 2 & 63], _0xf9a27[(_0x29e402 << 4 & 48) + (_0x4d9552 >>> 4 & 15)], _0xf9a27[(_0x4d9552 << 2 & 60) + (_0x29e17e >>> 6 & 3)], _0xf9a27[63 & _0x29e17e]);
                break;
            default:
                return "";
        }
        return _0x4bc45e["join"]("");
    }
    function _0x4c4b3e(_0x368459, _0xcf7f71, _0x4a9800) {
        if (!_0x368459 || 0 === _0x368459["length"]) return "";
        for (var _0x402ac6 = 0, _0x373bfd = []; _0x402ac6 < _0x368459["length"];) {
            if (!(_0x402ac6 + 3 <= _0x368459["length"])) {
                var _0x38562e = _0x368459["slice"](_0x402ac6);
                _0x373bfd["push"](_0x2d84c6(_0x38562e, _0xcf7f71, _0x4a9800));
                break;
            }
            var _0x2627da = _0x368459["slice"](_0x402ac6, _0x402ac6 + 3);
            _0x373bfd["push"](_0x2d84c6(_0x2627da, _0xcf7f71, _0x4a9800)), _0x402ac6 += 3;
        }
        return _0x373bfd["join"]("");
    }
    function _0x491e42(_0x5f2b73, _0x510e5b, _0x474672) {
        var _0x33d08a = void 0 !== _0x510e5b && null !== _0x510e5b ? _0x510e5b : _0x3c38ba,
            _0x1afba0 = void 0 !== _0x474672 && null !== _0x474672 ? _0x474672 : _0x453667;
        return _0x4c4b3e(_0x5f2b73, _0x33d08a["split"](""), _0x1afba0);
    }
    function _0x3ebd00(_0x1b0494) {
        for (var _0x1c8e88 = _0x312bea(_0x1b0494), _0x45dc26 = _0x37afb7(), _0x9181b5 = _0x54d28b(_0x45dc26, 2), _0x51196b = _0x9181b5[0], _0x334cfd = _0x9181b5[1], _0x28b0cc = _0x312bea(_0x1afea9(_0x1c8e88)), _0x519a2a = _0x5dfb84([]["concat"](_0x121dbc(_0x1c8e88), _0x121dbc(_0x28b0cc))), _0x5e1d80 = _0x541d79(_0x519a2a), _0x7fbfd6 = []["concat"](_0x121dbc(_0x334cfd)), _0x18fc8a = _0x51196b, _0x3ae677 = 0, _0x161154 = _0x5e1d80["length"]; _0x3ae677 < _0x161154; _0x3ae677++) {
            var _0x24a8ff = _0x54cf1d(_0x34ece2(_0x5e1d80[_0x3ae677]), _0x51196b),
                _0x435af1 = _0x474f75(_0x24a8ff, _0x18fc8a);
            _0x24a8ff = _0x54cf1d(_0x435af1, _0x18fc8a), _0x18fc8a = _0x1556d2(_0x1556d2(_0x24a8ff)), _0x242d4e(_0x18fc8a, 0, _0x7fbfd6, 64 * _0x3ae677 + 4, 64);
        }
        return _0x491e42(_0x7fbfd6);
    }
    function _0x62692() {
        var _0x28d664 = {};
        _0x28d664["suffix"] = "m25b40", _0x28d664["code"] = "vfnv46", _0x28d664["pos"] = [1, 10, 12, 13, 26, 31];
        const _0x11cfc7 = function (_0x3f9312, _0x4d0904) {
            var _0xdc2882 = {}["toString"],
                _0x4ffbfd = "ujg3ps2znyw",
                _0x148293 = {
                    "slice": function (_0x182149, _0x566683, _0x1c54e4) {
                        for (var _0x111d78 = [], _0x58daa9 = _0x566683 || 0, _0x39dab3 = _0x1c54e4 || _0x182149["length"]; _0x58daa9 < _0x39dab3; _0x58daa9++) _0x111d78["push"](_0x58daa9);
                        return _0x111d78;
                    },
                    "getObjKey": function (_0x453521, _0x1c2c5f) {
                        for (var _0x24f6d4 in _0x453521) if (_0x453521["hasOwnProperty"](_0x24f6d4) && _0x453521[_0x24f6d4] === _0x1c2c5f) return _0x24f6d4;
                    },
                    "typeOf": function (_0x289fc3) {
                        return null == _0x289fc3 ? String(_0x289fc3) : _0xdc2882["call"](_0x289fc3)["slice"](8, -1)["toLowerCase"]();
                    },
                    "isFn": function (_0x7e7208) {
                        return "function" == typeof _0x7e7208;
                    },
                    "log": function (_0x72ec12, _0x3bea3e) {
                        var _0x4c8ed6 = ["info", "warn", "error"];
                        return "string" == typeof _0x72ec12 && ~_0x4c8ed6["indexOf"](_0x72ec12) ? void (console && console[_0x72ec12]("[NECaptcha] " + _0x3bea3e)) : void _0x148293["error"]("util.log(type, msg): \"type\" must be one string of " + _0x4c8ed6["toString"]());
                    },
                    "warn": function (_0x17a96a) {
                        _0x148293["log"]("warn", _0x17a96a);
                    },
                    "error": function (_0x4a5640) {
                        _0x148293["log"]("error", _0x4a5640);
                    },
                    "assert": function (_0x50f82a, _0x37f198) {
                        if (!_0x50f82a) throw new Error("[NECaptcha] " + _0x37f198);
                    },
                    "msie": function _0x3ee98c() {
                        var _0x5e7df5 = navigator["userAgent"],
                            _0x594b99 = parseInt((/msie (\d+)/["exec"](_0x5e7df5["toLowerCase"]()) || [])[1]);
                        return isNaN(_0x594b99) && (_0x594b99 = parseInt((/trident\/.*; rv:(\d+)/["exec"](_0x5e7df5["toLowerCase"]()) || [])[1])), _0x594b99;
                    },
                    "now": function () {
                        return new Date()["getTime"]();
                    },
                    "getIn": function (_0x1d1045, _0x4ca40a, _0x174f2f) {
                        if ("[object Object]" !== Object["prototype"]["toString"]["call"](_0x1d1045)) return _0x174f2f;
                        "string" == typeof _0x4ca40a && (_0x4ca40a = _0x4ca40a["split"]("."));
                        for (var _0x2cab00 = 0, _0x58cb9b = _0x4ca40a["length"]; _0x2cab00 < _0x58cb9b; _0x2cab00++) {
                            var _0x3597b5 = _0x4ca40a[_0x2cab00];
                            if (_0x2cab00 < _0x58cb9b - 1 && !_0x1d1045[_0x3597b5]) return _0x174f2f;
                            _0x1d1045 = _0x1d1045[_0x3597b5];
                        }
                        return _0x1d1045;
                    },
                    "raf": function _0x137034(_0x1b657f) {
                        var _0xa22aaf = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || function (_0x4ddb6f) {
                            window["setTimeout"](_0x4ddb6f, 16);
                        };
                        _0xa22aaf(_0x1b657f);
                    },
                    "nextFrame": function (_0x12fb5f) {
                        _0x148293["raf"](function () {
                            return _0x148293["raf"](_0x12fb5f);
                        });
                    },
                    "sample": function (_0x4f8a50, _0x2720fb) {
                        var _0x1f84b9 = _0x4f8a50["length"];
                        if (_0x1f84b9 <= _0x2720fb) return _0x4f8a50;
                        for (var _0x35f7ff = [], _0x446efa = 0, _0x171ba7 = 0; _0x171ba7 < _0x1f84b9; _0x171ba7++) _0x171ba7 >= _0x446efa * (_0x1f84b9 - 1) / (_0x2720fb - 1) && (_0x35f7ff["push"](_0x4f8a50[_0x171ba7]), _0x446efa += 1);
                        return _0x35f7ff;
                    },
                    "template": function (_0x42b80e, _0x48bd17) {
                        var _0x284539 = {};
                        _0x284539["start"] = "<%", _0x284539["end"] = "%>", _0x284539["interpolate"] = /<%=(.+?)%>/g;
                        var _0x5abe64 = function (_0x1ff148) {
                            return _0x1ff148["replace"](/([.*+?^${}()|[\]\/\\])/g, "\\$1");
                        },
                            _0x1fe217 = _0x284539,
                            _0x3c73b8 = _0x1fe217,
                            _0x54e0e4 = new RegExp("'(?=[^" + _0x3c73b8["end"]["substr"](0, 1) + "]*" + _0x5abe64(_0x3c73b8["end"]) + ")", "g"),
                            _0x55626a = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + _0x42b80e["replace"](/[\r\t\n]/g, " ")["replace"](_0x54e0e4, "\t")["split"]("'")["join"]("\\'")["split"]("\t")["join"]("'")["replace"](_0x3c73b8["interpolate"], "',$1,'")["split"](_0x3c73b8["start"])["join"]("');")["split"](_0x3c73b8["end"])["join"]("p.push('") + "');}return p.join('');");
                        return _0x48bd17 ? _0x55626a(_0x48bd17) : _0x55626a;
                    },
                    "uuid": function _0x2b4c4d(_0x5aa56e, _0x3bfa37) {
                        var _0x171c6a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"["split"](""),
                            _0xaa2517 = [],
                            _0x3a6676 = void 0;
                        if (_0x3bfa37 = _0x3bfa37 || _0x171c6a["length"], _0x5aa56e) {
                            for (_0x3a6676 = 0; _0x3a6676 < _0x5aa56e; _0x3a6676++) _0xaa2517[_0x3a6676] = _0x171c6a[0 | Math["random"]() * _0x3bfa37];
                        } else {
                            var _0x4fe738 = void 0;
                            for (_0xaa2517[8] = _0xaa2517[13] = _0xaa2517[18] = _0xaa2517[23] = "-", _0xaa2517[14] = "4", _0x3a6676 = 0; _0x3a6676 < 36; _0x3a6676++) _0xaa2517[_0x3a6676] || (_0x4fe738 = 0 | 16 * Math["random"](), _0xaa2517[_0x3a6676] = _0x171c6a[19 === _0x3a6676 ? 3 & _0x4fe738 | 8 : _0x4fe738]);
                        }
                        return _0xaa2517["join"]("");
                    },
                    "reverse": function (_0x5c0f77) {
                        return Array["isArray"](_0x5c0f77) ? _0x5c0f77["reverse"]() : "string" === _0x148293["typeOf"](_0x5c0f77) ? _0x5c0f77["split"]("")["reverse"]()["join"]("") : _0x5c0f77;
                    },
                    "encodeUrlParams": function (_0x21a041) {
                        var _0x3693ae = [];
                        for (var _0xfe4e89 in _0x21a041) _0x21a041["hasOwnProperty"](_0xfe4e89) && _0x3693ae["push"](window["encodeURIComponent"](_0xfe4e89) + "=" + window["encodeURIComponent"](_0x21a041[_0xfe4e89]));
                        return _0x3693ae["join"]("&");
                    },
                    "adsorb": function (_0x619d8d, _0x2f9030, _0x43bcc7) {
                        return void 0 === _0x2f9030 || null === _0x2f9030 || void 0 === _0x43bcc7 || null === _0x43bcc7 ? _0x619d8d : Math["max"](Math["min"](_0x619d8d, _0x43bcc7), _0x2f9030);
                    },
                    "unique2DArray": function (_0x201038) {
                        var _0x56a8ee = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (!Array["isArray"](_0x201038)) return _0x201038;
                        for (var _0x61ed54 = {}, _0xcd81a8 = [], _0xead976 = 0, _0x4fef16 = _0x201038["length"]; _0xead976 < _0x4fef16; _0xead976++) {
                            var _0x125813 = _0x201038[_0xead976][_0x56a8ee];
                            null === _0x125813 || void 0 === _0x125813 || _0x61ed54[_0x125813] || (_0x61ed54[_0x125813] = !0, _0xcd81a8["push"](_0x201038[_0xead976]));
                        }
                        return _0xcd81a8;
                    },
                    "setDeviceToken": function (_0x55dcb9) {
                        try {
                            window["localStorage"]["setItem"](_0x4ffbfd, _0x55dcb9);
                        } catch (_0x29b015) {
                            return null;
                        }
                    },
                    "getDeviceToken": function () {
                        try {
                            var _0x281e33 = window["localStorage"]["getItem"](_0x4ffbfd);
                            return _0x281e33;
                        } catch (_0x5acec3) {
                            return null;
                        }
                    }
                };
            return _0x148293;
        }()
        var _0x183b74 = _0x28d664 || {},
            _0x86f269 = _0x183b74["code"],
            _0x22d54d = _0x183b74["pos"],
            _0x58ee17 = _0x11cfc7["uuid"](32);
        if (_0x86f269 && _0x22d54d && Array["isArray"](_0x22d54d)) {
            for (var _0x56eeac = _0x58ee17["split"](""), _0x3d43fc = 0; _0x3d43fc < _0x22d54d["length"]; _0x3d43fc++) _0x56eeac[_0x22d54d[_0x3d43fc]] = _0x86f269["charAt"](_0x3d43fc);
            _0x58ee17 = _0x56eeac["join"]("");
        }
        return _0x3ebd00(_0x58ee17);
    }
})(window)

/*
逆向可测试网站地址https://www.xiaoshouyi.com/register 或 https://dun.163.com/trial/jigsaw
版本：version 2.28.5
参数位数：92位
执行环境：Node / 浏览器
补环境：无须补环境
扣代码的日期：2026-10-09
代码更新日期：2026-10-09
*/

console.log(cb())
// ilaDIXVeuECwjFxqN4w+pQ16PQclrl0zVOd90JP4HIl8U59XeDpYIE50rtnCSlB/uaDzhizup00UrQzcjTdNszoUhYQ7