var proprietary_code = function () {
    var t = null;
    try {
        t = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])),{}).exports
    } catch (e) {}
    function n(e, t, n) {
        this.low = 0 | e,
        this.high = 0 | t,
        this.unsigned = !!n
    }
    function o(e) {
        return !0 === (e && e.__isLong__)
    }
    n.prototype.__isLong__,
    Object.defineProperty(n.prototype, "__isLong__", {
        value: !0
    }),
    n.isLong = o;
    var r = {}
        , i = {};
    function s(e, t) {
        var n, o, s;
        return t ? (s = 0 <= (e >>>= 0) && e < 256) && (o = i[e]) ? o : (n = c(e, (0 | e) < 0 ? -1 : 0, !0),
        s && (i[e] = n),
        n) : (s = -128 <= (e |= 0) && e < 128) && (o = r[e]) ? o : (n = c(e, e < 0 ? -1 : 0, !1),
        s && (r[e] = n),
        n)
    }
    function a(e, t) {
        if (isNaN(e))
            return t ? v : m;
        if (t) {
            if (e < 0)
                return v;
            if (e >= h)
                return k
        } else {
            if (e <= -f)
                return x;
            if (e + 1 >= f)
                return w
        }
        return e < 0 ? a(-e, t).neg() : c(e % p | 0, e / p | 0, t)
    }
    function c(e, t, o) {
        return new n(e,t,o)
    }
    n.fromInt = s,
    n.fromNumber = a,
    n.fromBits = c;
    var l = Math.pow;
    function u(e, t, n) {
        if (0 === e.length)
            throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e)
            return m;
        if ("number" == typeof t ? (n = t,
        t = !1) : t = !!t,
        (n = n || 10) < 2 || 36 < n)
            throw RangeError("radix");
        var o;
        if ((o = e.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === o)
            return u(e.substring(1), t, n).neg();
        for (var r = a(l(n, 8)), i = m, s = 0; s < e.length; s += 8) {
            var c = Math.min(8, e.length - s)
                , d = parseInt(e.substring(s, s + c), n);
            if (c < 8) {
                var p = a(l(n, c));
                i = i.mul(p).add(a(d))
            } else
                i = (i = i.mul(r)).add(a(d))
        }
        return i.unsigned = t,
        i
    }
    function d(e, t) {
        return "number" == typeof e ? a(e, t) : "string" == typeof e ? u(e, t) : c(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
    }
    n.fromString = u,
    n.fromValue = d;
    var p = 4294967296
        , h = p * p
        , f = h / 2
        , _ = s(1 << 24)
        , m = s(0);
    n.ZERO = m;
    var v = s(0, !0);
    n.UZERO = v;
    var g = s(1);
    n.ONE = g;
    var y = s(1, !0);
    n.UONE = y;
    var b = s(-1);
    n.NEG_ONE = b;
    var w = c(-1, 2147483647, !1);
    n.MAX_VALUE = w;
    var k = c(-1, -1, !0);
    n.MAX_UNSIGNED_VALUE = k;
    var x = c(0, -2147483648, !1);
    n.MIN_VALUE = x;
    var O = n.prototype;
    O.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    O.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * p + (this.low >>> 0) : this.high * p + (this.low >>> 0)
    }
    ,
    O.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.eq(x)) {
                var t = a(e)
                    , n = this.div(t)
                    , o = n.mul(t).sub(this);
                return n.toString(e) + o.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        for (var r = a(l(e, 6), this.unsigned), i = this, s = ""; ; ) {
            var c = i.div(r)
                , u = (i.sub(c.mul(r)).toInt() >>> 0).toString(e);
            if ((i = c).isZero())
                return u + s;
            for (; u.length < 6; )
                u = "0" + u;
            s = "" + u + s
        }
    }
    ,
    O.getHighBits = function() {
        return this.high
    }
    ,
    O.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    O.getLowBits = function() {
        return this.low
    }
    ,
    O.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    O.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(x) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && !(e & 1 << t); t--)
            ;
        return 0 != this.high ? t + 33 : t + 1
    }
    ,
    O.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    O.eqz = O.isZero,
    O.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    O.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    O.isOdd = function() {
        return !(1 & ~this.low)
    }
    ,
    O.isEven = function() {
        return !(1 & this.low)
    }
    ,
    O.equals = function(e) {
        return o(e) || (e = d(e)),
        (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
    }
    ,
    O.eq = O.equals,
    O.notEquals = function(e) {
        return !this.eq(e)
    }
    ,
    O.neq = O.notEquals,
    O.ne = O.notEquals,
    O.lessThan = function(e) {
        return this.comp(e) < 0
    }
    ,
    O.lt = O.lessThan,
    O.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }
    ,
    O.lte = O.lessThanOrEqual,
    O.le = O.lessThanOrEqual,
    O.greaterThan = function(e) {
        return this.comp(e) > 0
    }
    ,
    O.gt = O.greaterThan,
    O.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }
    ,
    O.gte = O.greaterThanOrEqual,
    O.ge = O.greaterThanOrEqual,
    O.compare = function(e) {
        if (o(e) || (e = d(e)),
        this.eq(e))
            return 0;
        var t = this.isNegative()
            , n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }
    ,
    O.comp = O.compare,
    O.negate = function() {
        return !this.unsigned && this.eq(x) ? x : this.not().add(g)
    }
    ,
    O.neg = O.negate,
    O.add = function(e) {
        o(e) || (e = d(e));
        var t = this.high >>> 16
            , n = 65535 & this.high
            , r = this.low >>> 16
            , i = 65535 & this.low
            , s = e.high >>> 16
            , a = 65535 & e.high
            , l = e.low >>> 16
            , u = 0
            , p = 0
            , h = 0
            , f = 0;
        return h += (f += i + (65535 & e.low)) >>> 16,
        p += (h += r + l) >>> 16,
        u += (p += n + a) >>> 16,
        u += t + s,
        c((h &= 65535) << 16 | (f &= 65535), (u &= 65535) << 16 | (p &= 65535), this.unsigned)
    }
    ,
    O.subtract = function(e) {
        return o(e) || (e = d(e)),
        this.add(e.neg())
    }
    ,
    O.sub = O.subtract,
    O.multiply = function(e) {
        if (this.isZero())
            return m;
        if (o(e) || (e = d(e)),
        t)
            return c(t.mul(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned);
        if (e.isZero())
            return m;
        if (this.eq(x))
            return e.isOdd() ? x : m;
        if (e.eq(x))
            return this.isOdd() ? x : m;
        if (this.isNegative())
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative())
            return this.mul(e.neg()).neg();
        if (this.lt(_) && e.lt(_))
            return a(this.toNumber() * e.toNumber(), this.unsigned);
        var n = this.high >>> 16
            , r = 65535 & this.high
            , i = this.low >>> 16
            , s = 65535 & this.low
            , l = e.high >>> 16
            , u = 65535 & e.high
            , p = e.low >>> 16
            , h = 65535 & e.low
            , f = 0
            , v = 0
            , g = 0
            , y = 0;
        return g += (y += s * h) >>> 16,
        v += (g += i * h) >>> 16,
        g &= 65535,
        v += (g += s * p) >>> 16,
        f += (v += r * h) >>> 16,
        v &= 65535,
        f += (v += i * p) >>> 16,
        v &= 65535,
        f += (v += s * u) >>> 16,
        f += n * h + r * p + i * u + s * l,
        c((g &= 65535) << 16 | (y &= 65535), (f &= 65535) << 16 | (v &= 65535), this.unsigned)
    }
    ,
    O.mul = O.multiply,
    O.divide = function(e) {
        if (o(e) || (e = d(e)),
        e.isZero())
            throw Error("division by zero");
        var n, r, i;
        if (t)
            return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? c((this.unsigned ? t.div_u : t.div_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this;
        if (this.isZero())
            return this.unsigned ? v : m;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()),
            e.gt(this))
                return v;
            if (e.gt(this.shru(1)))
                return y;
            i = v
        } else {
            if (this.eq(x))
                return e.eq(g) || e.eq(b) ? x : e.eq(x) ? g : (n = this.shr(1).div(e).shl(1)).eq(m) ? e.isNegative() ? g : b : (r = this.sub(e.mul(n)),
                i = n.add(r.div(e)));
            if (e.eq(x))
                return this.unsigned ? v : m;
            if (this.isNegative())
                return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative())
                return this.div(e.neg()).neg();
            i = m
        }
        for (r = this; r.gte(e); ) {
            n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            for (var s = Math.ceil(Math.log(n) / Math.LN2), u = s <= 48 ? 1 : l(2, s - 48), p = a(n), h = p.mul(e); h.isNegative() || h.gt(r); )
                h = (p = a(n -= u, this.unsigned)).mul(e);
            p.isZero() && (p = g),
            i = i.add(p),
            r = r.sub(h)
        }
        return i
    }
    ,
    O.div = O.divide,
    O.modulo = function(e) {
        return o(e) || (e = d(e)),
        t ? c((this.unsigned ? t.rem_u : t.rem_s)(this.low, this.high, e.low, e.high), t.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
    }
    ,
    O.mod = O.modulo,
    O.rem = O.modulo,
    O.not = function() {
        return c(~this.low, ~this.high, this.unsigned)
    }
    ,
    O.and = function(e) {
        return o(e) || (e = d(e)),
        c(this.low & e.low, this.high & e.high, this.unsigned)
    }
    ,
    O.or = function(e) {
        return o(e) || (e = d(e)),
        c(this.low | e.low, this.high | e.high, this.unsigned)
    }
    ,
    O.xor = function(e) {
        return o(e) || (e = d(e)),
        c(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }
    ,
    O.shiftLeft = function(e) {
        return o(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? c(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : c(0, this.low << e - 32, this.unsigned)
    }
    ,
    O.shl = O.shiftLeft,
    O.shiftRight = function(e) {
        return o(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? c(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : c(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    O.shr = O.shiftRight,
    O.shiftRightUnsigned = function(e) {
        if (o(e) && (e = e.toInt()),
        0 === (e &= 63))
            return this;
        var t = this.high;
        return e < 32 ? c(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : c(32 === e ? t : t >>> e - 32, 0, this.unsigned)
    }
    ,
    O.shru = O.shiftRightUnsigned,
    O.shr_u = O.shiftRightUnsigned,
    O.toSigned = function() {
        return this.unsigned ? c(this.low, this.high, !1) : this
    }
    ,
    O.toUnsigned = function() {
        return this.unsigned ? this : c(this.low, this.high, !0)
    }
    ,
    O.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }
    ,
    O.toBytesLE = function() {
        var e = this.high
            , t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }
    ,
    O.toBytesBE = function() {
        var e = this.high
            , t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }
    ,
    n.fromBytes = function(e, t, o) {
        return o ? n.fromBytesLE(e, t) : n.fromBytesBE(e, t)
    }
    ,
    n.fromBytesLE = function(e, t) {
        return new n(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24,e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24,t)
    }
    ,
    n.fromBytesBE = function(e, t) {
        return new n(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3],t)
    }
    return n;
}();
