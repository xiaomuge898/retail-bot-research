typeof global === 'undefined' ? null : window = global;

; (function (e) {
    e.fp = _0x28c2a9;
    e.cb = _0x62692;
    e.NECaptchaValidate = _0xab267f;
    e.sliderVerifyCaptcha = sliderVerifyCaptcha;
    e.textClickVerifyCaptcha = textClickVerifyCaptcha;

    // 写死即可
    let _0x345f2f = {
        "__SBOX__": "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
        "__SEED_KEY__": "fd6a43ae25f74398b61c03c83be37449",
        "__ROUND_KEY__": "037606da0296055c"
    }, _0xfc0aff = {
        "__BASE64_ALPHABET__": 'MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo',
        "__BASE64_PADDING__": '7'
    }
    var _0x4f1fd4 = 2
        , _0x31fd11 = 2
        , _0x356810 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
        , _0x3f7f1a = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
        , _0x5d3a89 = [-9, -84, -50, 59, 115, 102, 57, 125, 94, -15, 15, 2, -72, -98, -79, 38, -56, -49, 76, -26, -117, 60, 90, 9, -107, -12, -71, -100, 63, 42, -18, 28, -120, -11, 33, 45, 79, 92, 37, 97, 4, 58, 98, 84, -97, -88, 95, -104, -13, -89, 78, -90, 119, -66, 13, -5, 29, -116, -4, -81, 27, 40, -59, -43, 85, 48, -74, 109, -64, 26, 67, -33, -115, 0, -37, -102, 88, -48, 127, -86, 41, 105, -2, 122, -42, 112, -94, 81, -31, -65, -101, -14, 65, 49, -67, -114, -103, -87, -19, 104, 66, -73, -34, -78, -45, -27, -109, -108, 47, 61, 86, 43, -54, 25, 64, -35, -44, 53, -112, 36, 73, 89, -82, 51, -32, 39, -83, 80, -85, -111, 12, -58, 103, -76, -46, -127, 34, 1, -99, 14, -57, 110, 106, 93, -52, 11, 113, 20, -106, 75, 62, -69, -39, -55, -119, 126, 114, 123, 10, 77, -121, -8, 74, 21, -93, 17, -61, -21, -105, -126, 18, 124, -17, 52, -10, -77, -24, -22, 120, -95, -25, 96, -110, 22, -23, 69, -125, -128, -47, -38, -1, 3, -20, 100, 68, 101, 5, 117, -122, 44, -51, -36, -41, 24, -80, 30, 82, -63, -40, -92, 91, -6, -53, -124, -62, -28, 111, 19, 50, 108, 70, -68, -29, -75, 99, -91, -60, -70, 71, -118, -3, 83, 87, -7, 32, 55, 31, -123, 121, 107, -113, 46, -30, 118, 54, 23, 116, -16, 7, 6, 35, 16, -96, 56, 72, 8]
        , _0x492948 = 64
        , _0x4cf791 = 64
        , _0x2ac605 = 4
        , _0x24d8dd = 4
        , _0x17d4df = "14731255234d414cF91356d684E4E8F5F56c8f1bc"
        , _0x47a393 = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA"
        , _0x336e9e = _0x47a393["length"]
        , _0x315b7e = 900000;
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
    function _0x62692() {
        var _0x28d664 = {};
        _0x28d664["suffix"] = "m25b40", _0x28d664["code"] = "vfnv46", _0x28d664["pos"] = [1, 10, 12, 13, 26, 31];
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
    function _0x127d20(_0x4d549e) {
        var _0x4b0021 = {};
        _0x4b0021["\\"] = "-",
            _0x4b0021["/"] = "_",
            _0x4b0021["+"] = "*";
        var _0x40c0f0 = _0x4b0021;
        return _0x4d549e["replace"](/[\\/+]/g, function (_0xe86ca2) {
            return _0x40c0f0[_0xe86ca2];
        });
    }
    function _0x140942(_0x374741, _0x8a6edc) {
        if (_0x374741 <= 0)
            return [0];
        for (var _0x3c58e8 = [], _0x2b40f2 = 0; _0x2b40f2 < _0x374741; _0x2b40f2++)
            _0x3c58e8["push"](_0x8a6edc);
        return _0x3c58e8;
    }
    function _0x1c8398(_0x3d6d24) {
        var _0x1799d2 = ["v", "fp", "u", "h", "ec", "em", "icp"]
            , _0x156928 = "";
        if (null == _0x3d6d24 || void 0 == _0x3d6d24)
            return _0x3d6d24;
        if (("undefined" == typeof _0x3d6d24 ? "undefined" : _0x2ba902(_0x3d6d24)) == ["ob", "je", "ct"]["join"]("")) {
            _0x156928 += "{";
            for (var _0x48ae40 = 0; _0x48ae40 < _0x1799d2["length"]; _0x48ae40++)
                if (_0x3d6d24["hasOwnProperty"](_0x1799d2[_0x48ae40])) {
                    var _0x4ef296 = "'" + _0x1799d2[_0x48ae40] + "':'"
                        , _0x5a5ecc = "" + _0x3d6d24[_0x1799d2[_0x48ae40]];
                    _0x5a5ecc = null == _0x5a5ecc || void 0 == _0x5a5ecc ? _0x5a5ecc : _0x5a5ecc["replace"](/'/g, "\\'")["replace"](/"/g, "\""),
                        _0x156928 += _0x4ef296 + _0x5a5ecc + "',";
                }
            return _0x156928["charAt"](_0x156928["length"] - 1) == "," && (_0x156928 = _0x156928["substring"](0, _0x156928["length"] - 1)),
                _0x156928 += "}";
        }
        return null;
    }
    function _0x24ddd4(_0xc57d8f) {
        var _0x42f8dc = 4294967295;
        if (null != _0xc57d8f) {
            for (var _0x179df2 = 0; _0x179df2 < _0xc57d8f["length"]; _0x179df2++)
                _0x42f8dc = _0x42f8dc >>> 8 ^ _0x3f7f1a[(_0x42f8dc ^ _0xc57d8f[_0x179df2]) & 255];
        }
        if (_0xc57d8f = _0x538bb0(_0x42f8dc ^ 4294967295),
            _0x42f8dc = _0xc57d8f["length"],
            null == _0xc57d8f || _0x42f8dc < 0)
            _0xc57d8f = new String("");
        else {
            _0x179df2 = [];
            for (var _0x19d713 = 0; _0x19d713 < _0x42f8dc; _0x19d713++)
                _0x179df2["push"](_0x493d33(_0xc57d8f[_0x19d713]));
            _0xc57d8f = _0x179df2["join"]("");
        }
        return _0xc57d8f;
    }
    function _0x493d33(_0x316ebf) {
        var _0x4b8e72 = [];
        return _0x4b8e72["push"](_0x356810[_0x316ebf >>> 4 & 15]),
            _0x4b8e72["push"](_0x356810[_0x316ebf & 15]),
            _0x4b8e72["join"]("");
    }
    function _0x34a415(_0x1c42ee) {
        var _0x4bd1db = [];
        if (null == _0x1c42ee || void 0 == _0x1c42ee || _0x1c42ee["length"] == 0)
            return _0x110e77(_0x4cf791);
        if (_0x1c42ee["length"] >= _0x4cf791) {
            _0x4bd1db = 0;
            var _0x40e585 = [];
            if (null != _0x1c42ee && _0x1c42ee["length"] != 0) {
                if (_0x1c42ee["length"] < _0x4cf791)
                    throw Error("1003");
                for (var _0xbfcb07 = 0; _0xbfcb07 < _0x4cf791; _0xbfcb07++)
                    _0x40e585[_0xbfcb07] = _0x1c42ee[_0x4bd1db + _0xbfcb07];
            }
            return _0x40e585;
        }
        for (_0x40e585 = 0; _0x40e585 < _0x4cf791; _0x40e585++)
            _0x4bd1db[_0x40e585] = _0x1c42ee[_0x40e585 % _0x1c42ee["length"]];
        return _0x4bd1db;
    }
    function _0x3346f1(_0x8bede2, _0x3763c1) {
        return _0x8bede2 = _0x10df53(_0x8bede2),
            _0x3763c1 = _0x10df53(_0x3763c1),
            _0x10df53(_0x8bede2 ^ _0x3763c1);
    }
    function _0x6f77f5(_0x17bd6a, _0x4612ad, _0x492c73, _0x45c63b, _0x107c5a) {
        if (null == _0x17bd6a || _0x17bd6a["length"] == 0)
            return _0x492c73;
        if (null == _0x492c73)
            throw Error("1004");
        if (_0x17bd6a["length"] < _0x107c5a)
            throw Error("1003");
        for (var _0xb91c67 = 0; _0xb91c67 < _0x107c5a; _0xb91c67++)
            _0x492c73[_0x45c63b + _0xb91c67] = _0x17bd6a[_0x4612ad + _0xb91c67];
        return _0x492c73;
    }
    function _0x2055e1(_0xb031b3, _0x2a082d) {
        return _0x10df53(_0xb031b3 + _0x2a082d);
    }
    function _0x45222a(_0x46fcd5) {
        if (null == _0x46fcd5)
            return null;
        for (var _0x424296 = [], _0x20360f = 0, _0x5e1c4e = _0x46fcd5["length"]; _0x20360f < _0x5e1c4e; _0x20360f++) {
            var _0x1978e6 = _0x46fcd5[_0x20360f];
            _0x424296[_0x20360f] = _0x5d3a89[(_0x1978e6 >>> 4 & 15) * 16 + (_0x1978e6 & 15)];
        }
        return _0x424296;
    }
     function _0x3d9f27(_0x3b592f, _0x541140, _0x2cba10) {
        var _0x1da97c = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"]
            , _0x113e01 = "F"
            , _0x29a907 = [];
        if (_0x2cba10 == 1) {
            _0x2cba10 = _0x3b592f[_0x541140];
            var _0x3d4d6f = 0;
            _0x29a907["push"](_0x1da97c[_0x2cba10 >>> 2 & 63]),
                _0x29a907["push"](_0x1da97c[(_0x2cba10 << 4 & 48) + (_0x3d4d6f >>> 4 & 15)]),
                _0x29a907["push"](_0x113e01),
                _0x29a907["push"](_0x113e01);
        } else {
            if (_0x2cba10 == 2)
                _0x2cba10 = _0x3b592f[_0x541140],
                    _0x3d4d6f = _0x3b592f[_0x541140 + 1],
                    _0x3b592f = 0,
                    _0x29a907["push"](_0x1da97c[_0x2cba10 >>> 2 & 63]),
                    _0x29a907["push"](_0x1da97c[(_0x2cba10 << 4 & 48) + (_0x3d4d6f >>> 4 & 15)]),
                    _0x29a907["push"](_0x1da97c[(_0x3d4d6f << 2 & 60) + (_0x3b592f >>> 6 & 3)]),
                    _0x29a907["push"](_0x113e01);
            else {
                if (_0x2cba10 != 3)
                    throw Error("1010");
                _0x2cba10 = _0x3b592f[_0x541140],
                    _0x3d4d6f = _0x3b592f[_0x541140 + 1],
                    _0x3b592f = _0x3b592f[_0x541140 + 2],
                    _0x29a907["push"](_0x1da97c[_0x2cba10 >>> 2 & 63]),
                    _0x29a907["push"](_0x1da97c[(_0x2cba10 << 4 & 48) + (_0x3d4d6f >>> 4 & 15)]),
                    _0x29a907["push"](_0x1da97c[(_0x3d4d6f << 2 & 60) + (_0x3b592f >>> 6 & 3)]),
                    _0x29a907["push"](_0x1da97c[_0x3b592f & 63]);
            }
        }
        return _0x29a907["join"]("");
    }
    function _0x314b89(_0x251f87, _0x2650b3) {
        if (null == _0x251f87 || null == _0x2650b3 || _0x251f87["length"] != _0x2650b3["length"])
            return _0x251f87;
        for (var _0x121ded = [], _0x516521 = 0, _0x46f6d2 = _0x251f87["length"]; _0x516521 < _0x46f6d2; _0x516521++)
            _0x121ded[_0x516521] = _0x3346f1(_0x251f87[_0x516521], _0x2650b3[_0x516521]);
        return _0x121ded;
    }
    function _0x4178ff(_0x46cfdd) {
        if (null == _0x46cfdd || void 0 == _0x46cfdd)
            return _0x46cfdd;
        _0x46cfdd = encodeURIComponent(_0x46cfdd);
        for (var _0x5f5876 = [], _0x505ed6 = _0x46cfdd["length"], _0x4252ad = 0; _0x4252ad < _0x505ed6; _0x4252ad++)
            if (_0x46cfdd["charAt"](_0x4252ad) == "%") {
                if (!(_0x4252ad + 2 < _0x505ed6))
                    throw Error("1009");
                _0x5f5876["push"](_0x23ca5c(_0x46cfdd["charAt"](++_0x4252ad) + "" + _0x46cfdd["charAt"](++_0x4252ad))[0]);
            } else
                _0x5f5876["push"](_0x46cfdd["charCodeAt"](_0x4252ad));
        return _0x5f5876;
    }
    function _0x538bb0(_0x462a02) {
        var _0x2ec9b2 = [];
        return _0x2ec9b2[0] = _0x462a02 >>> 24 & 255,
            _0x2ec9b2[1] = _0x462a02 >>> 16 & 255,
            _0x2ec9b2[2] = _0x462a02 >>> 8 & 255,
            _0x2ec9b2[3] = _0x462a02 & 255,
            _0x2ec9b2;
    }
    function _0x10df53(_0x4e8c7f) {
        if (_0x4e8c7f < -128)
            return _0x10df53(128 - (-128 - _0x4e8c7f));
        if (_0x4e8c7f >= -128 && _0x4e8c7f <= 127)
            return _0x4e8c7f;
        if (_0x4e8c7f > 127)
            return _0x10df53(-129 + _0x4e8c7f - 127);
        throw Error("1001");
    }
    function _0x23ca5c(_0x301b3c) {
        if (null == _0x301b3c || _0x301b3c["length"] == 0)
            return [];
        _0x301b3c = new String(_0x301b3c);
        for (var _0x3e48a0 = [], _0x4a0094 = _0x301b3c["length"] / 2, _0x17d35f = 0, _0x4dae75 = 0; _0x4dae75 < _0x4a0094; _0x4dae75++) {
            var _0x1f56fd = parseInt(_0x301b3c["charAt"](_0x17d35f++), 16) << 4
                , _0x5222da = parseInt(_0x301b3c["charAt"](_0x17d35f++), 16);
            _0x3e48a0[_0x4dae75] = _0x10df53(_0x1f56fd + _0x5222da);
        }
        return _0x3e48a0;
    }
    var _0x2ba902 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x554e49) {
        return typeof _0x554e49;
    }
        : function (_0x23e2e0) {
            return _0x23e2e0 && "function" == typeof Symbol && _0x23e2e0["constructor"] === Symbol && _0x23e2e0 !== Symbol["prototype"] ? "symbol" : typeof _0x23e2e0;
        }
        ;
    function _0x57a093(_0x450e08, _0x2220aa, _0x18d0d, _0x3bb68e) {
        if (_0x450e08 = "" + _0x450e08,
        _0x450e08["length"] > _0x18d0d)
            throw Error("1111");
        if (_0x450e08["length"] == _0x18d0d)
            return _0x450e08;
        var _0x3c49ba = [];
        _0x2220aa || _0x3c49ba["push"](_0x450e08);
        for (var _0x8a48ca = _0x450e08["length"]; _0x8a48ca < _0x18d0d; _0x8a48ca++)
            _0x3c49ba["push"](_0x3bb68e);
        return _0x2220aa && _0x3c49ba["push"](_0x450e08),
        _0x3c49ba["join"]("");
    }
    function _0xc28485(_0x267269, _0x13d44a) {
        if (_0x267269 < 0 || _0x267269 >= 10)
            throw Error("1110");
        _0x13d44a = _0x140942(_0x13d44a, "0"),
        _0x267269 = "" + _0x267269;
        for (var _0x3d5c0e = 0, _0x1404a0 = 0; _0x3d5c0e < _0x13d44a["length"] && _0x1404a0 < _0x267269["length"]; _0x1404a0++)
            _0x267269["charAt"](_0x1404a0) != "." && (_0x13d44a[_0x3d5c0e++] = _0x267269["charAt"](_0x1404a0));
        return parseInt(_0x13d44a["join"](""));
    }
    function _0xab267f(_0x3a5029, _0x4c2e3c, _0x10ac06) {
        var _0x448995 = _0x127d20(_0x3ebd00(_0x3a5029 + "::" + _0x4c2e3c))
            , _0x397f47 = _0x10ac06 ? _0x10ac06 + "_" + _0x448995 : _0x448995;
        return _0x397f47 + "_v_i_1";
    }
    function _0x354f80(_0x2091f5) {
        var _0x23568a, _0x58f0f8 = 31, _0x3a9ae7 = _0x2091f5["length"] & 3, _0x59a2cf = _0x2091f5["length"] - _0x3a9ae7, _0x33125b = _0x58f0f8;
        _0x58f0f8 = 3432918353;
        var _0x274c8f = 461845907;
        for (_0x23568a = 0; _0x23568a < _0x59a2cf; ) {
            var _0xe4a1d6 = _0x2091f5["charCodeAt"](_0x23568a) & 255 | (_0x2091f5["charCodeAt"](++_0x23568a) & 255) << 8 | (_0x2091f5["charCodeAt"](++_0x23568a) & 255) << 16 | (_0x2091f5["charCodeAt"](++_0x23568a) & 255) << 24;
            ++_0x23568a,
            _0xe4a1d6 = (_0xe4a1d6 & 65535) * _0x58f0f8 + (((_0xe4a1d6 >>> 16) * _0x58f0f8 & 65535) << 16) & 4294967295,
            _0xe4a1d6 = _0xe4a1d6 << 15 | _0xe4a1d6 >>> 17,
            _0xe4a1d6 = (_0xe4a1d6 & 65535) * _0x274c8f + (((_0xe4a1d6 >>> 16) * _0x274c8f & 65535) << 16) & 4294967295,
            _0x33125b ^= _0xe4a1d6,
            _0x33125b = _0x33125b << 13 | _0x33125b >>> 19,
            _0x33125b = (_0x33125b & 65535) * 5 + (((_0x33125b >>> 16) * 5 & 65535) << 16) & 4294967295,
            _0x33125b = (_0x33125b & 65535) + 27492 + (((_0x33125b >>> 16) + 58964 & 65535) << 16);
        }
        switch (_0xe4a1d6 = 0,
        _0x3a9ae7) {
        case 3:
            _0xe4a1d6 ^= (_0x2091f5["charCodeAt"](_0x23568a + 2) & 255) << 16;
        case 2:
            _0xe4a1d6 ^= (_0x2091f5["charCodeAt"](_0x23568a + 1) & 255) << 8;
        case 1:
            _0xe4a1d6 ^= _0x2091f5["charCodeAt"](_0x23568a) & 255,
            _0xe4a1d6 = (_0xe4a1d6 & 65535) * _0x58f0f8 + (((_0xe4a1d6 >>> 16) * _0x58f0f8 & 65535) << 16) & 4294967295,
            _0xe4a1d6 = _0xe4a1d6 << 15 | _0xe4a1d6 >>> 17,
            _0xe4a1d6 = (_0xe4a1d6 & 65535) * _0x274c8f + (((_0xe4a1d6 >>> 16) * _0x274c8f & 65535) << 16) & 4294967295,
            _0x33125b ^= _0xe4a1d6;
        }
        _0x33125b ^= _0x2091f5["length"],
        _0x33125b ^= _0x33125b >>> 16,
        _0x33125b = (_0x33125b & 65535) * 2246822507 + (((_0x33125b >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
        _0x33125b ^= _0x33125b >>> 13,
        _0x33125b = (_0x33125b & 65535) * 3266489909 + (((_0x33125b >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
        _0x33125b ^= _0x33125b >>> 16,
        _0x2091f5 = _0x33125b >>> 0,
        _0x3a9ae7 = [],
        _0x3a9ae7["push"](_0x2091f5);
        for (var _0x1246cf, _0x23917f = _0x2091f5 + "", _0x13e171 = 0, _0x132d82 = 0, _0xbbc831 = 0; _0xbbc831 < _0x23917f["length"]; _0xbbc831++)
            try {
                var _0xfc393d = parseInt(_0x23917f["charAt"](_0xbbc831) + "");
                _0x13e171 = _0xfc393d || _0xfc393d === 0 ? _0x13e171 + _0xfc393d : _0x13e171 + 1,
                _0x132d82++;
            } catch (_0x3fb513) {
                _0x13e171 += 1,
                _0x132d82++;
            }
        _0x132d82 = _0x132d82 == 0 ? 1 : _0x132d82,
        _0x1246cf = _0xc28485(_0x13e171 * 1 / _0x132d82, _0x4f1fd4);
        for (var _0x1809e6, _0x3f13bb = Math["floor"](_0x1246cf / Math["pow"](10, _0x4f1fd4 - 1)), _0x2287a2 = _0x2091f5 + "", _0x329fef = 0, _0x29bc4a = 0, _0x18610e = 0, _0x4e5fb8 = 0, _0x3bc632 = 0; _0x3bc632 < _0x2287a2["length"]; _0x3bc632++)
            try {
                var _0x66655a = parseInt(_0x2287a2["charAt"](_0x3bc632) + "");
                _0x66655a || _0x66655a === 0 ? _0x66655a < _0x3f13bb ? (_0x29bc4a++,
                _0x329fef += _0x66655a) : (_0x4e5fb8++,
                _0x18610e += _0x66655a) : (_0x4e5fb8++,
                _0x18610e += _0x3f13bb);
            } catch (_0x1b4a8b) {
                _0x4e5fb8++,
                _0x18610e += _0x3f13bb;
            }
        _0x4e5fb8 = _0x4e5fb8 == 0 ? 1 : _0x4e5fb8,
        _0x29bc4a = _0x29bc4a == 0 ? 1 : _0x29bc4a,
        _0x1809e6 = _0xc28485(_0x18610e * 1 / _0x4e5fb8 - _0x329fef * 1 / _0x29bc4a, _0x31fd11),
        _0x3a9ae7["push"](_0x57a093(_0x1246cf, !0, _0x4f1fd4, "0")),
        _0x3a9ae7["push"](_0x57a093(_0x1809e6, !0, _0x31fd11, "0"));
        return _0x3a9ae7["join"]("");
    }
    function _0x3f6f3f(_0x4bf67a) {
        for (var _0x3686e4 = [], _0x1d5574 = 0; _0x1d5574 < _0x4bf67a; _0x1d5574++) {
            var _0x337dbd = Math["random"]() * _0x336e9e;
            _0x337dbd = Math["floor"](_0x337dbd),
                _0x3686e4["push"](_0x47a393["charAt"](_0x337dbd));
        }
        return _0x3686e4["join"]("");
    }
    function _0x28c2a9(host, kind='') {
        var _0x7265d3 = {};
        _0x7265d3["v"] = "v1.1";
        var _0x5f067c = !0
            , _0x548794 = _0x7265d3
            , _0x155fa5 = null;
        _0x155fa5 && (_0x548794["icp"] = _0x155fa5),
            _0x155fa5 = null,
            _0x548794["h"] = host;
        var _0x1d3f57 = new window["Date"]()["getTime"]() + _0x315b7e
            , _0x5a0e0d = _0x1d3f57 + 1174;
        _0x548794["u"] = _0x3f6f3f(3) + _0x1d3f57 + _0x3f6f3f(3);
        var _0x1b360a = {};
        _0x1b360a["b"] = !1, _0x1b360a["a"] = !1;
        const hash = Array.from(
            { length: 256 },
            () => (Math.random() * 9999 | 0).toString(32)
        ).join('');
        if (kind.length < 1)kind = hash;
        if (kind.length < 200){kind = kind + [...Array(201).keys()].join('')}
        var _0x5ecc4a = [
            _0x354f80(kind),
            _0x354f80(kind.split('').reverse().join(''))
            
        ];
        console.log("指纹", _0x5ecc4a)
        null != _0x5ecc4a && void 0 != _0x5ecc4a && _0x5ecc4a["length"] > 0 ? _0x548794["fp"] = _0x5ecc4a["join"](",") : (_0x548794["fp"] = _0x32c3af("0", 10),
            _0x548794["ec"] = "1",
            _0x5f067c = !1);

        var _0x11ee50 = _0x155fa5 = _0x1c8398(_0x548794);
        _0x548794 = _0x17d4df
        null != _0x11ee50 && void 0 != _0x11ee50 || (_0x11ee50 = ""),
            _0x5ecc4a = _0x11ee50;
        var _0xd4eb7e = _0x24ddd4(null == _0x11ee50 ? [] : _0x4178ff(_0x11ee50))
            , _0x511709 = _0x4178ff(_0x5ecc4a + _0xd4eb7e)
            , _0x9a4441 = _0x4178ff(_0x548794);
        null == _0x511709 && (_0x511709 = []),
            _0xd4eb7e = [];
        for (var _0x17f108 = 0; _0x17f108 < _0x24d8dd; _0x17f108++) {
            var _0x462e32 = Math["random"]() * 256;
            _0x462e32 = Math["floor"](_0x462e32),
                _0xd4eb7e[_0x17f108] = _0x10df53(_0x462e32);
        }
        if (_0x9a4441 = _0x34a415(_0x9a4441),
            _0x9a4441 = _0x314b89(_0x9a4441, _0x34a415(_0xd4eb7e)),
            _0x17f108 = _0x9a4441 = _0x34a415(_0x9a4441),
            _0x462e32 = _0x511709,
            null == _0x462e32 || void 0 == _0x462e32 || _0x462e32["length"] == 0)
            var _0x539a57 = _0x110e77(_0x492948);
        else {
            var _0x92b403 = _0x462e32["length"]
                , _0x51546e = _0x92b403 % _0x492948 <= _0x492948 - _0x2ac605 ? _0x492948 - _0x92b403 % _0x492948 - _0x2ac605 : _0x492948 * 2 - _0x92b403 % _0x492948 - _0x2ac605;
            _0x511709 = [],
                _0x6f77f5(_0x462e32, 0, _0x511709, 0, _0x92b403);
            for (var _0x162485 = 0; _0x162485 < _0x51546e; _0x162485++)
                _0x511709[_0x92b403 + _0x162485] = 0;
            var _0x28e797 = _0x538bb0(_0x92b403);
            _0x6f77f5(_0x28e797, 0, _0x511709, _0x92b403 + _0x51546e, _0x2ac605),
                _0x539a57 = _0x511709;
        }
        if (_0x92b403 = _0x539a57,
            null == _0x92b403 || _0x92b403["length"] % _0x492948 != 0)
            throw Error("1005");
        _0x539a57 = [];
        for (var _0x18d3ae = 0, _0x46092d = _0x92b403["length"] / _0x492948, _0x63c3c5 = 0; _0x63c3c5 < _0x46092d; _0x63c3c5++) {
            _0x539a57[_0x63c3c5] = [];
            for (var _0x3cbf3d = 0; _0x3cbf3d < _0x492948; _0x3cbf3d++)
                _0x539a57[_0x63c3c5][_0x3cbf3d] = _0x92b403[_0x18d3ae++];
        }
        _0x18d3ae = [],
            _0x6f77f5(_0xd4eb7e, 0, _0x18d3ae, 0, _0x24d8dd);
        for (var _0x2eadd2 = _0x539a57["length"], _0x514e6c = 0; _0x514e6c < _0x2eadd2; _0x514e6c++) {
            var _0x215aa7 = _0x539a57[_0x514e6c];
            if (null == _0x215aa7)
                var _0x19193b = null;
            else {
                var _0x56f8a1 = _0x10df53(37);
                _0x46092d = [];
                for (var _0x4d0061 = _0x215aa7["length"], _0x28c292 = 0; _0x28c292 < _0x4d0061; _0x28c292++)
                    _0x46092d["push"](_0x3346f1(_0x215aa7[_0x28c292], _0x56f8a1));
                _0x19193b = _0x46092d;
            }
            if (_0x46092d = _0x19193b,
                null == _0x46092d)
                var _0x2573f1 = null;
            else {
                var _0x4ade5a = _0x10df53(35);
                _0x63c3c5 = [];
                for (var _0x64e9a7 = _0x46092d["length"], _0x2f56a3 = 0; _0x2f56a3 < _0x64e9a7; _0x2f56a3++)
                    _0x63c3c5["push"](_0x3346f1(_0x46092d[_0x2f56a3], _0x4ade5a--));
                _0x2573f1 = _0x63c3c5;
            }
            if (_0x46092d = _0x2573f1,
                null == _0x46092d)
                var _0x74a09a = null;
            else {
                var _0x5de767 = _0x10df53(-44);
                _0x63c3c5 = [];
                for (var _0x415d4f = _0x46092d["length"], _0x55e5a8 = 0; _0x55e5a8 < _0x415d4f; _0x55e5a8++)
                    _0x63c3c5["push"](_0x2055e1(_0x46092d[_0x55e5a8], _0x5de767++));
                _0x74a09a = _0x63c3c5;
            }
            var _0x47be8c = _0x314b89(_0x74a09a, _0x9a4441);
            if (_0x46092d = _0x47be8c,
                _0x63c3c5 = _0x17f108,
                null == _0x46092d)
                var _0x13ad86 = null;
            else {
                if (null == _0x63c3c5)
                    _0x13ad86 = _0x46092d;
                else {
                    _0x3cbf3d = [];
                    for (var _0x16fc88 = _0x63c3c5["length"], _0x1493a1 = 0, _0x5f10f3 = _0x46092d["length"]; _0x1493a1 < _0x5f10f3; _0x1493a1++)
                        _0x3cbf3d[_0x1493a1] = _0x10df53(_0x46092d[_0x1493a1] + _0x63c3c5[_0x1493a1 % _0x16fc88]);
                    _0x13ad86 = _0x3cbf3d;
                }
            }
            _0x47be8c = _0x314b89(_0x13ad86, _0x17f108);
            var _0x4d5154 = _0x45222a(_0x47be8c);
            _0x4d5154 = _0x45222a(_0x4d5154),
                _0x6f77f5(_0x4d5154, 0, _0x18d3ae, _0x514e6c * _0x492948 + _0x24d8dd, _0x492948),
                _0x17f108 = _0x4d5154;
        }
        if (null == _0x18d3ae || void 0 == _0x18d3ae)
            var _0x5a21c4 = null;
        else {
            if (_0x18d3ae["length"] == 0)
                _0x5a21c4 = "";
            else {
                var _0x343c93 = 3;
                _0x2eadd2 = [];
                for (var _0x49bcda = 0; _0x49bcda < _0x18d3ae["length"];) {
                    if (!(_0x49bcda + _0x343c93 <= _0x18d3ae["length"])) {
                        _0x2eadd2["push"](_0x3d9f27(_0x18d3ae, _0x49bcda, _0x18d3ae["length"] - _0x49bcda));
                        break;
                    }
                    _0x2eadd2["push"](_0x3d9f27(_0x18d3ae, _0x49bcda, _0x343c93)),
                        _0x49bcda += _0x343c93;
                }
                _0x5a21c4 = _0x2eadd2["join"]("");
            }
        }
        _0x155fa5 = _0x5a21c4;
        _0x155fa5 = _0x155fa5 + ":" + _0x1d3f57;
        return _0x155fa5;
    }
    function _0x16ff0d(_0x3741e1) {
        var _0x3abb26 = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
            , _0x48fa5f = "3";
        return _0x4c4b3e(_0x3741e1, _0x3abb26, _0x48fa5f);
    }
    function _0x3855dc(_0x195362, _0x3ca67b) {
        var _0x21a5d1 = _0x312bea(_0x3ca67b)
            , _0x321da7 = _0x312bea(_0x195362);
        return _0x16ff0d(_0x5b1ad2(_0x21a5d1, _0x321da7));
    }
    function _0x25962c() {
        var _0x184bbc = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : []
            , _0x3e4ccb = []
            , _0x289958 = []
            , _0x325f0f = [];
        if (!Array["isArray"](_0x184bbc) || _0x184bbc["length"] <= 2)
            return [_0x3e4ccb, _0x289958, _0x325f0f];
        for (var _0x5c3ca6 = 0; _0x5c3ca6 < _0x184bbc["length"]; _0x5c3ca6++) {
            var _0x1611c9 = _0x184bbc[_0x5c3ca6];
            _0x3e4ccb["push"](_0x1611c9[0]),
            _0x289958["push"](_0x1611c9[1]),
            _0x325f0f["push"](_0x1611c9[2]);
        }
        return [_0x3e4ccb, _0x289958, _0x325f0f];
    }
    var _0x3f5df2 = function() {
        function _0x1c675f(_0x3fcabb, _0x24ac0f) {
            var _0x12b31c = []
                , _0x33083e = !0
                , _0x5667a2 = !1
                , _0x598755 = void 0;
            try {
                for (var _0x483555, _0xfa17cf = _0x3fcabb[Symbol["iterator"]](); !(_0x33083e = (_0x483555 = _0xfa17cf["next"]())["done"]) && (_0x12b31c["push"](_0x483555["value"]),
                !_0x24ac0f || _0x12b31c["length"] !== _0x24ac0f); _0x33083e = !0)
                    ;
            } catch (_0x1f3b9c) {
                _0x5667a2 = !0,
                _0x598755 = _0x1f3b9c;
            } finally {
                try {
                    !_0x33083e && _0xfa17cf["return"] && _0xfa17cf["return"]();
                } finally {
                    if (_0x5667a2)
                        throw _0x598755;
                }
            }
            return _0x12b31c;
        }
        return function(_0x4dd733, _0x5e278f) {
            if (Array["isArray"](_0x4dd733))
                return _0x4dd733;
            if (Symbol["iterator"] in Object(_0x4dd733))
                return _0x1c675f(_0x4dd733, _0x5e278f);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        ;
    }();
    function _0x5bf768(_0x7a3b6b, _0x1ca524) {
        for (var _0x5521d6 = [], _0x5a095b = [], _0xc60f20 = 0; _0xc60f20 < _0x7a3b6b["length"] - 1; _0xc60f20++)
            _0x5521d6["push"](_0x7a3b6b[_0xc60f20 + 1] - _0x7a3b6b[_0xc60f20]),
            _0x5a095b["push"](_0x1ca524[_0xc60f20 + 1] - _0x1ca524[_0xc60f20]);
        for (var _0x1656b1 = [], _0x3ff17b = 0; _0x3ff17b < _0x5a095b["length"]; _0x3ff17b++)
            _0x1656b1["push"](_0x5a095b[_0x3ff17b] / _0x5521d6[_0x3ff17b]);
        return _0x1656b1;
    }
    function _0x137d36(_0x4db3dd, _0x1e6fb1, _0x1fa313) {
        for (var _0x57c02f = _0x5bf768(_0x1fa313, _0x4db3dd), _0x59eca4 = _0x5bf768(_0x1fa313, _0x1e6fb1), _0xe06a5c = [], _0x4264a5 = 0; _0x4264a5 < _0x4db3dd["length"]; _0x4264a5++) {
            var _0x5eeae3 = Math["sqrt"](Math["pow"](_0x4db3dd[_0x4264a5], 2) + Math["pow"](_0x1e6fb1[_0x4264a5], 2));
            _0xe06a5c["push"](_0x5eeae3);
        }
        var _0x26b5b3 = _0x5bf768(_0x1fa313, _0xe06a5c);
        return [_0x57c02f, _0x59eca4, _0x26b5b3];
    }
    function _0x314b69(_0x2a8798, _0x31fffa, _0x97dd1d, _0x54f42d) {
        var _0x36a304 = _0x54f42d["slice"](0, -1)
            , _0x1e5758 = _0x5bf768(_0x36a304, _0x2a8798)
            , _0x4490c7 = _0x5bf768(_0x36a304, _0x31fffa)
            , _0x45b5dd = _0x5bf768(_0x36a304, _0x97dd1d);
        return [_0x1e5758, _0x4490c7, _0x45b5dd];
    }
    function _0x3ce934(_0x2646e0) {
        for (var _0x23f185 = [], _0x114811 = _0x2646e0["length"], _0x43de3c = 0; _0x43de3c < _0x114811; _0x43de3c++)
            _0x23f185["indexOf"](_0x2646e0[_0x43de3c]) === -1 && _0x23f185["push"](_0x2646e0[_0x43de3c]);
        return _0x23f185;
    }
    function _0x294ca4(_0x19dd9c) {
        return parseFloat(_0x19dd9c["toFixed"](4));
    }
    function _0x3f218a(_0x38ff62) {
        for (var _0x3626f0 = 0, _0x1cb23a = _0x38ff62["length"], _0x46247c = 0; _0x46247c < _0x1cb23a; _0x46247c++)
            _0x3626f0 += _0x38ff62[_0x46247c];
        return _0x3626f0 / _0x1cb23a;
    }
    function _0x25dcad(_0x21b325) {
        for (var _0x333fc4 = _0x3f218a(_0x21b325), _0x552e6a = _0x21b325["length"], _0x2b6187 = [], _0x4133f3 = 0; _0x4133f3 < _0x552e6a; _0x4133f3++) {
            var _0x6ccea6 = _0x21b325[_0x4133f3] - _0x333fc4;
            _0x2b6187["push"](Math["pow"](_0x6ccea6, 2));
        }
        for (var _0x17b5e3 = 0, _0x39fb29 = 0; _0x39fb29 < _0x2b6187["length"]; _0x39fb29++)
            _0x2b6187[_0x39fb29] && (_0x17b5e3 += _0x2b6187[_0x39fb29]);
        return Math["sqrt"](_0x17b5e3 / _0x552e6a);
    }
    function _0x427b4d(_0x10041e) {
        if (Array["isArray"](_0x10041e)) {
            for (var _0x2d11f3 = 0, _0x4c2a7a = Array(_0x10041e["length"]); _0x2d11f3 < _0x10041e["length"]; _0x2d11f3++)
                _0x4c2a7a[_0x2d11f3] = _0x10041e[_0x2d11f3];
            return _0x4c2a7a;
        }
        return Array["from"](_0x10041e);
    }
    function _0x2989d7(_0x7072c6, _0x3cf5e0) {
        var _0x3fe479 = _0x7072c6["sort"](function(_0x29ebe4, _0x5da1c0) {
            return _0x29ebe4 - _0x5da1c0;
        });
        if (_0x3cf5e0 <= 0)
            return _0x3fe479[0];
        if (_0x3cf5e0 >= 100)
            return _0x3fe479[_0x3fe479["length"] - 1];
        var _0x52cb77 = Math["floor"]((_0x3fe479["length"] - 1) * (_0x3cf5e0 / 100))
            , _0x14e4fc = _0x3fe479[_0x52cb77]
            , _0x3fbd2c = _0x3fe479[_0x52cb77 + 1];
        return _0x14e4fc + (_0x3fbd2c - _0x14e4fc) * ((_0x3fe479["length"] - 1) * (_0x3cf5e0 / 100) - _0x52cb77);
    }
    function _0x6e07ce() {
        var _0x3e9e60 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!Array["isArray"](_0x3e9e60) || _0x3e9e60["length"] <= 2)
            return [];
        var _0x1783c2 = _0x25962c(_0x3e9e60)
            , _0x3cddfe = _0x3f5df2(_0x1783c2, 3)
            , _0x3652a2 = _0x3cddfe[0]
            , _0x1741af = _0x3cddfe[1]
            , _0x10b689 = _0x3cddfe[2]
            , _0x3c92a4 = _0x137d36(_0x3652a2, _0x1741af, _0x10b689)
            , _0x26bf56 = _0x3f5df2(_0x3c92a4, 3)
            , _0x4bdeca = _0x26bf56[0]
            , _0x505ef3 = _0x26bf56[1]
            , _0x3561d9 = _0x26bf56[2]
            , _0x339411 = _0x314b69(_0x4bdeca, _0x505ef3, _0x3561d9, _0x10b689)
            , _0x4a044b = _0x3f5df2(_0x339411, 3)
            , _0x1b0144 = _0x4a044b[0]
            , _0x924df7 = _0x4a044b[1]
            , _0x1800ae = _0x4a044b[2]
            , _0x186f91 = _0x3ce934(_0x3652a2)["length"]
            , _0x2a2456 = _0x3ce934(_0x1741af)["length"]
            , _0x414360 = _0x294ca4(_0x3f218a(_0x1741af))
            , _0x15d08b = _0x294ca4(_0x25dcad(_0x1741af))
            , _0x304b7b = _0x3652a2["length"]
            , _0x5e098d = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x4bdeca)))
            , _0x240bcf = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x4bdeca)))
            , _0xee7aab = _0x294ca4(_0x3f218a(_0x4bdeca))
            , _0x45d8eb = _0x294ca4(_0x25dcad(_0x4bdeca))
            , _0x48cbca = _0x3ce934(_0x4bdeca)["length"]
            , _0x1a923f = _0x294ca4(_0x2989d7(_0x4bdeca, 25))
            , _0x39e99f = _0x294ca4(_0x2989d7(_0x4bdeca, 75))
            , _0x1cb164 = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x505ef3)))
            , _0x450d8b = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x505ef3)))
            , _0x10adc5 = _0x294ca4(_0x3f218a(_0x505ef3))
            , _0x2c2b5b = _0x294ca4(_0x25dcad(_0x505ef3))
            , _0x12e2d9 = _0x3ce934(_0x505ef3)["length"]
            , _0x41e493 = _0x294ca4(_0x2989d7(_0x505ef3, 25))
            , _0x47d1aa = _0x294ca4(_0x2989d7(_0x505ef3, 75))
            , _0x28bff2 = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x3561d9)))
            , _0x287b1f = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x3561d9)))
            , _0x747f20 = _0x294ca4(_0x3f218a(_0x3561d9))
            , _0x5e46bd = _0x294ca4(_0x25dcad(_0x3561d9))
            , _0x57faee = _0x3ce934(_0x3561d9)["length"]
            , _0x42328c = _0x294ca4(_0x2989d7(_0x3561d9, 25))
            , _0x2333c4 = _0x294ca4(_0x2989d7(_0x3561d9, 75))
            , _0x122514 = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x1b0144)))
            , _0x164b34 = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x1b0144)))
            , _0x214d10 = _0x294ca4(_0x3f218a(_0x1b0144))
            , _0x43b9aa = _0x294ca4(_0x25dcad(_0x1b0144))
            , _0x2f22b3 = _0x3ce934(_0x1b0144)["length"]
            , _0x29e482 = _0x294ca4(_0x2989d7(_0x1b0144, 25))
            , _0x2807fa = _0x294ca4(_0x2989d7(_0x1b0144, 75))
            , _0xe7d5c9 = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x924df7)))
            , _0x136324 = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x924df7)))
            , _0x406b24 = _0x294ca4(_0x3f218a(_0x924df7))
            , _0x41fe7b = _0x294ca4(_0x25dcad(_0x924df7))
            , _0x486d6e = _0x3ce934(_0x924df7)["length"]
            , _0x583bdc = _0x294ca4(_0x2989d7(_0x924df7, 25))
            , _0x3bac9f = _0x294ca4(_0x2989d7(_0x924df7, 75))
            , _0x16acae = _0x294ca4(Math["min"]["apply"](Math, _0x427b4d(_0x1800ae)))
            , _0x3dc5f4 = _0x294ca4(Math["max"]["apply"](Math, _0x427b4d(_0x1800ae)))
            , _0x2606ce = _0x294ca4(_0x3f218a(_0x1800ae))
            , _0x25927a = _0x294ca4(_0x25dcad(_0x1800ae))
            , _0x1a3f80 = _0x3ce934(_0x1800ae)["length"]
            , _0x379905 = _0x294ca4(_0x2989d7(_0x1800ae, 25))
            , _0x5ca163 = _0x294ca4(_0x2989d7(_0x1800ae, 75));
        return [_0x186f91, _0x2a2456, _0x414360, _0x15d08b, _0x304b7b, _0x5e098d, _0x240bcf, _0xee7aab, _0x45d8eb, _0x48cbca, _0x1a923f, _0x39e99f, _0x1cb164, _0x450d8b, _0x10adc5, _0x2c2b5b, _0x12e2d9, _0x41e493, _0x47d1aa, _0x28bff2, _0x287b1f, _0x747f20, _0x5e46bd, _0x57faee, _0x42328c, _0x2333c4, _0x122514, _0x164b34, _0x214d10, _0x43b9aa, _0x2f22b3, _0x29e482, _0x2807fa, _0xe7d5c9, _0x136324, _0x406b24, _0x41fe7b, _0x486d6e, _0x583bdc, _0x3bac9f, _0x16acae, _0x3dc5f4, _0x2606ce, _0x25927a, _0x1a3f80, _0x379905, _0x5ca163];
    }

    function sliderVerifyCaptcha(atomTraceData, token){
        // 轨迹数组加密（官方在收集轨迹时就已经加密了）
        // 将正常的轨迹数组复制并全部加密
        var traceData = atomTraceData.map((e)=>{return _0x3855dc(token, e+"")})
        
        var _0x4a4a62 = _0x11cfc7["sample"](traceData, 50)
        var _0x15278a = _0x3ebd00(_0x3855dc(token, (atomTraceData.at(-1)[0] - 11) / 320 * 100 + ""))
        var _0x4d98f2 = _0x6e07ce(_0x11cfc7["unique2DArray"](atomTraceData, 2));

        return JSON.stringify({
            "d": _0x3ebd00(_0x4a4a62["join"](":")),
            "m": "",
            "p": _0x15278a,
            "f": _0x3ebd00(_0x3855dc(token, _0x4d98f2["join"](","))),
            "ext": _0x3ebd00(_0x3855dc(token, 1 + "," + traceData.length))
        })
    }
    function coordinate(atomTraceData){
        var s = atomTraceData.at(-1)[0]
        // 移动像素在20以内
        if (20 >= s){
            return s - (s + s % 2) / 2
        }
        if (s > 259){
            return s - 11 - (s - 259 + (s - 259) % 2) / 2
        }
        return s - 11
    }
    function sliderVerifyCaptcha(atomTraceData, token){
        // 轨迹数组加密（官方在收集轨迹时就已经加密了）
        // 将正常的轨迹数组复制并全部加密
        var traceData = atomTraceData.map((e)=>{return _0x3855dc(token, e+"")})
        
        var _0x4a4a62 = _0x11cfc7["sample"](traceData, 50)
        var _0x15278a = _0x3ebd00(_0x3855dc(token, coordinate(atomTraceData) / 320 * 100 + ""))
        var _0x4d98f2 = _0x6e07ce(_0x11cfc7["unique2DArray"](atomTraceData, 2));

        return JSON.stringify({
            "d": _0x3ebd00(_0x4a4a62["join"](":")),
            "m": "",
            "p": _0x15278a,
            "f": _0x3ebd00(_0x3855dc(token, _0x4d98f2["join"](","))),
            "ext": _0x3ebd00(_0x3855dc(token, 1 + "," + traceData.length))
        })
    }
    
    function textClickVerifyCaptcha(atomTraceData, pointsStack, token){
        // 轨迹数组加密（官方在收集轨迹时就已经加密了）
        // 将正常的轨迹数组复制并全部加密
        var atomTraceData = atomTraceData.map((e)=>{return _0x3855dc(token, e+"")})
        var pointsStack = pointsStack.map((e)=>{return _0x3855dc(token, e+"")})
        var _0x4a4a62 = _0x11cfc7["sample"](traceData, 50)
        return JSON.stringify({
            "d": "",
            "m": _0x3ebd00(_0x11cfc7["sample"](atomTraceData, 50)["join"](":")),
            "p": _0x3ebd00(_0x4a4a62["join"](":")),
            "ext": _0x3ebd00(_0x3855dc(token, 3 + "," + atomTraceData["length"]))
        })
    }

})(window)


console.log("【fp】 -> ", fp("www.xiaoshouyi.com", '65346234624234657'))

console.log("【cb】 -> ", cb())
// ilaDIXVeuECwjFxqN4w+pQ16PQclrl0zVOd90JP4HIl8U59XeDpYIE50rtnCSlB/uaDzhizup00UrQzcjTdNszoUhYQ7



// 人机验证成功后的，后端返回的 validate 字段
var validate = "4SgxNJb6DxQ1SjniX8sKbSx+1UlP0j8mdZ0uHoOZqVoiDtn4tHNiMB9hz44xdc5xa+2FCN3/SWD+6r37VbBEs6aX8vxi1nEGavKg6FY9hUuh7WBrNN4K62XtcU+fPGTjHsjM2+X+P2OslGqmWdzkQw9zJL3XqHyDJec6lK8kN6U="
// 人机验证请求所使用的同一个 fp 参数值（注意不能重新生成，要使用人机验证时所用的fp参数）
var fp_data = "v+tw2ufcwJNikvRhcSOvgYWxBwn6+M6Y4hNpB9hC/Z1DptTmn4iyohlEaIu+InhBvP2VL4R1ilALXAwn45/BsQICTHIwHTjhR9wQw0DlKDu8Wch1LxGSKA1AmvfOqKsXfUMUA4zX9aa04sK3iY6HSuMPQ3/AuD1ZpUG5xjUoYEHRmyOR:1791509523291"
// 固定
var _0x581c8f = "CN31"

const date = NECaptchaValidate(validate, fp_data, _0x581c8f)
console.log("【NECaptchaValidate】 -> ", date)


// 滑块 data 参数
var atomTraceData = [[4,0,6,1],[4,0,8,1],[5,0,9,1],[6,1,10,1],[6,1,11,1],[6,1,13,1],[7,1,14,1],[8,1,15,1],[8,1,16,1],[9,2,17,1],[10,2,18,1],[10,2,19,1],[11,2,21,1],[12,2,22,1],[12,2,23,1],[13,2,24,1],[14,2,26,1],[14,3,26,1],[15,3,28,1],[16,3,29,1],[16,3,30,1],[18,3,31,1],[18,3,32,1],[19,4,33,1],[20,4,35,1],[20,4,36,1],[21,4,37,1],[22,4,38,1],[22,5,39,1],[22,5,40,1],[23,5,41,1],[24,5,43,1],[24,5,44,1],[25,6,45,1],[26,6,46,1],[26,6,47,1],[27,6,48,1],[27,7,49,1],[28,7,50,1],[28,7,51,1],[29,7,52,1],[30,7,53,1],[30,7,54,1],[31,7,55,1],[31,8,56,1],[32,8,58,1],[32,8,59,1],[33,8,60,1],[34,9,61,1],[34,9,62,1],[34,9,63,1],[35,9,64,1],[36,9,65,1],[36,10,66,1],[37,10,68,1],[38,10,69,1],[38,10,70,1],[39,10,73,1],[40,10,74,1],[40,10,76,1],[41,10,77,1],[42,11,78,1],[42,11,80,1],[43,11,83,1],[44,11,84,1],[44,11,85,1],[44,12,87,1],[45,12,90,1],[46,12,91,1],[46,12,93,1],[46,13,94,1],[47,13,97,1],[48,13,101,1],[48,13,102,1],[49,13,105,1],[50,13,107,1],[50,13,108,1],[50,14,110,1],[50,14,112,1],[51,14,119,1],[52,14,122,1],[52,14,125,1],[52,15,131,1],[52,15,134,1],[53,15,135,1],[54,15,140,1],[54,15,146,1],[55,15,150,1],[56,15,159,1],[56,16,160,1],[56,16,161,1],[57,16,163,1],[58,16,166,1],[58,16,173,1],[58,17,176,1],[59,17,177,1],[60,17,179,1],[60,17,186,1],[60,17,187,1],[61,17,188,1],[62,17,193,1],[62,18,199,1],[62,18,200,1],[63,18,206,1],[64,18,208,1],[64,18,213,1],[65,18,217,1],[66,18,219,1],[66,19,220,1],[66,19,225,1],[66,19,230,1],[67,19,236,1],[68,19,238,1],[68,20,241,1],[68,20,242,1],[68,21,251,1],[69,21,254,1],[70,21,260,1],[70,21,268,1],[70,21,273,1],[71,21,278,1],[72,22,291,1],[72,22,292,1],[73,22,296,1],[74,22,300,1],[74,23,307,1],[74,23,310,1],[75,23,313,1],[76,23,316,1],[76,23,319,1],[77,23,322,1],[77,24,327,1],[78,24,332,1],[78,24,335,1],[78,25,341,1],[79,25,342,1],[80,25,345,1],[80,25,348,1],[80,25,355,1],[81,25,359,1],[81,26,367,1],[82,26,373,1],[82,26,374,1],[82,27,383,1],[83,27,385,1],[84,27,390,1],[84,27,396,1],[85,27,402,1],[85,27,409,1],[85,28,414,1],[86,28,420,1],[86,28,425,1],[87,28,429,1],[88,29,442,1],[88,29,444,1],[88,29,461,1],[89,29,462,1],[90,29,487,1],[90,29,488,1],[91,29,491,1],[91,30,503,1],[92,30,507,1],[92,30,512,1],[93,30,518,1],[93,31,523,1],[94,31,533,1],[94,31,536,1],[94,31,546,1],[95,31,555,1],[95,32,560,1],[96,32,572,1],[96,32,589,1],[96,33,600,1],[97,33,611,1],[97,33,616,1],[98,33,617,1],[98,33,625,1],[99,33,634,1],[100,33,638,1],[100,34,649,1],[100,34,651,1],[100,35,692,1],[101,35,715,1],[102,35,727,1],[102,35,736,1],[102,35,741,1],[103,35,755,1],[103,36,760,1],[104,36,767,1],[104,37,775,1],[104,37,791,1],[105,37,826,1],[105,37,830,1],[106,37,858,1],[106,38,859,1],[106,38,861,1],[106,39,877,1],[107,39,887,1]]
var token = "5484f35e933f4955aff4b91b0bfbc5eb"
var traceData = sliderVerifyCaptcha(atomTraceData, token);
console.log("【data】 -> ",traceData)


// 文字点选 data 参数
var atomTraceData = [[101,42,21,0],[100,42,23,0],[100,43,23,0],[100,44,24,0],[99,44,25,0],[99,45,27,0],[99,46,28,0],[98,47,30,0],[98,48,31,0],[97,49,34,0],[97,50,34,0],[97,52,36,0],[96,53,37,0],[96,54,38,0],[96,56,39,0],[95,57,41,0],[95,58,42,0],[94,60,44,0],[93,61,46,0],[93,62,46,0],[93,64,47,0],[93,65,48,0],[92,68,53,0],[92,69,53,0],[91,71,54,0],[91,74,57,0],[91,75,58,0],[90,76,59,0],[90,77,60,0],[89,78,61,0],[89,79,62,0],[89,80,63,0],[89,81,65,0],[89,82,66,0],[89,83,67,0],[88,84,68,0],[87,86,69,0],[87,87,70,0],[87,88,71,0],[87,89,72,0],[87,90,74,0],[87,92,76,0],[86,93,78,0],[86,94,79,0],[85,94,80,0],[85,95,81,0],[85,96,82,0],[85,97,84,0],[85,98,85,0],[85,99,86,0],[85,100,88,0],[85,101,91,0],[85,102,92,0],[85,103,95,0],[85,104,98,0],[85,105,101,0],[85,106,103,0],[85,107,108,0],[85,108,113,0],[85,109,120,0],[85,110,121,0],[85,111,133,0],[85,112,136,0],[85,113,151,0],[85,114,155,0],[86,115,176,0],[87,115,179,0],[86,115,270,0],[85,115,270,0],[84,115,278,0],[84,114,280,0],[83,114,281,0],[82,114,283,0],[81,114,284,0],[81,113,287,0],[80,112,289,0],[79,112,291,0],[79,111,293,0],[78,111,294,0],[77,111,296,0],[76,110,299,0],[75,109,301,0],[75,108,302,0],[74,108,304,0],[73,108,306,0],[73,107,309,0],[73,106,311,0],[72,106,312,0],[71,106,313,0],[70,105,316,0],[70,104,318,0],[69,104,319,0],[68,104,323,0],[67,103,325,0],[67,102,328,0],[66,102,331,0],[65,102,332,0],[65,101,335,0],[64,101,339,0],[64,100,342,0],[63,100,343,0],[62,100,349,0],[61,100,351,0],[61,99,358,0],[61,98,364,0],[60,98,365,0],[59,98,370,0],[59,97,381,0],[58,97,383,0],[57,97,400,0],[57,96,407,0],[57,96,434,0],[58,96,583,0],[59,96,584,0],[60,96,587,0],[61,96,589,0],[62,96,593,0],[63,96,594,0],[64,96,596,0],[65,96,598,0],[66,96,601,0],[67,96,602,0],[68,96,603,0],[69,96,604,0],[70,96,607,0],[71,96,608,0],[72,96,609,0],[73,96,610,0],[73,97,612,0],[75,97,613,0],[76,97,615,0],[77,97,616,0],[78,97,617,0],[79,97,618,0],[80,97,619,0],[81,98,620,0],[82,98,621,0],[83,98,622,0],[84,98,623,0],[85,98,624,0],[87,98,625,0],[88,98,627,0],[89,98,628,0],[90,98,629,0],[91,98,630,0],[93,99,631,0],[94,100,633,0],[95,100,634,0],[97,100,635,0],[99,100,636,0],[100,100,637,0],[101,100,638,0],[103,100,639,0],[104,100,641,0],[105,100,642,0],[107,100,643,0],[107,101,644,0],[109,101,646,0],[110,101,646,0],[111,101,648,0],[113,101,649,0],[113,102,650,0],[115,102,651,0],[117,102,652,0],[119,102,654,0],[120,102,655,0],[121,102,657,0],[122,102,658,0],[123,102,659,0],[125,102,660,0],[127,103,662,0],[128,103,664,0],[129,103,665,0],[130,103,666,0],[131,103,667,0],[133,103,669,0],[134,103,670,0],[135,104,671,0],[137,104,673,0],[138,104,675,0],[139,104,676,0],[140,104,677,0],[141,104,678,0],[143,104,680,0],[144,104,682,0],[145,104,684,0],[147,104,685,0],[149,105,687,0],[150,105,689,0],[151,105,690,0],[152,105,692,0],[153,105,693,0],[154,105,694,0],[155,106,695,0],[156,106,697,0],[157,106,698,0],[158,106,699,0],[159,106,700,0],[161,106,702,0],[162,106,703,0],[163,106,704,0],[165,106,706,0],[166,106,708,0],[167,106,709,0],[168,106,710,0],[169,106,713,0],[171,106,713,0],[173,106,715,0],[174,106,717,0],[175,106,718,0],[177,106,719,0],[178,107,720,0],[179,107,721,0],[180,107,722,0],[181,107,723,0],[182,107,724,0],[183,107,725,0],[184,107,726,0],[185,107,727,0],[187,107,729,0],[188,107,730,0],[189,107,731,0],[190,107,733,0],[191,107,734,0],[192,107,735,0],[193,108,736,0],[195,108,737,0],[196,108,738,0],[197,108,739,0],[198,108,740,0],[199,108,741,0],[200,108,743,0],[201,108,744,0],[202,108,746,0],[203,109,747,0],[204,109,748,0],[205,109,750,0],[206,109,751,0],[207,109,752,0],[208,110,753,0],[209,110,754,0],[210,110,757,0],[211,110,758,0],[212,110,760,0],[213,110,761,0],[214,110,764,0],[215,110,767,0],[216,110,769,0],[217,110,771,0],[217,111,773,0],[218,111,778,0],[219,111,785,0],[220,111,824,0],[221,111,832,0],[221,112,834,0],[222,112,846,0],[223,112,848,0],[224,112,853,0],[225,112,857,0],[225,113,861,0],[226,113,868,0],[227,113,869,0],[227,114,874,0],[228,114,878,0],[229,114,879,0],[230,114,887,0],[230,115,887,0],[231,115,890,0],[231,116,892,0],[232,116,893,0],[233,116,894,0],[234,116,901,0],[235,116,902,0],[236,116,905,0],[237,116,911,0],[238,116,915,0],[238,117,917,0],[239,117,918,0],[239,118,922,0],[240,118,924,0],[241,118,927,0],[242,118,942,0],[243,118,943,0],[244,118,949,0],[245,118,956,0],[246,118,963,0],[247,118,966,0],[248,118,972,0],[249,118,979,0],[250,118,984,0],[251,118,987,0],[252,118,994,0],[253,118,1001,0],[254,118,1020,0],[254,118,1052,0]]
var pointsStack = [[101,41,0],[57,96,526],[254,118,1146]]
var token = "5484f35e933f4955aff4b91b0bfbc5eb"
var traceData = textClickVerifyCaptcha(atomTraceData, pointsStack, token);
console.log("【data】 -> ",traceData)