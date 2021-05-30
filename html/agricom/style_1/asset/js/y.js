! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        k = C.document,
        c = n.slice,
        g = n.concat,
        a = n.push,
        i = n.indexOf,
        r = {},
        o = r.toString,
        h = r.hasOwnProperty,
        v = {},
        s = "2.2.4",
        E = function(e, t) {
            return new E.fn.init(e, t)
        },
        u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        f = /-([\da-z])/gi;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: s,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || E.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (i = E.isArray(r))) ? (o = i ? (i = !1, n && E.isArray(n) ? n : []) : n && E.isPlainObject(n) ? n : {}, s[t] = E.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, E.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === E.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !E.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== E.type(e) || e.nodeType || E.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = E.trim(e)) && (1 === e.indexOf("use strict") ? ((t = k.createElement("script")).text = e, k.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(f, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(u, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), E.isFunction(e) ? (r = c.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i) : void 0
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = n[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }

        function i() {
            T()
        }
        var e, h, b, o, s, g, p, v, w, u, l, T, C, a, k, m, c, d, y, E = "sizzle" + 1 * new Date,
            x = n.document,
            N = 0,
            r = 0,
            S = ie(),
            j = ie(),
            D = ie(),
            A = function(e, t) {
                return e === t && (l = !0), 0
            },
            q = {}.hasOwnProperty,
            t = [],
            L = t.pop,
            H = t.push,
            O = t.push,
            F = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            _ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            X = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp($),
            Y = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig");
        try {
            O.apply(t = F.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    H.apply(e, F.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, k)) {
                if (11 !== d && (l = Z.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(i)), n
                    } if (h.qsa && !D[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, "\\$&") : t.setAttribute("id", a = E), o = (c = g(e)).length, u = Y.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = u + " " + he(c[o]);
                        f = c.join(","), p = ee.test(e) && pe(t.parentNode) || t
                    }
                    if (f) try {
                        return O.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace(_, "$1"), t, n, r)
        }

        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[E] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(s) {
            return oe(function(o) {
                return o = +o, oe(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, s = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = re.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, k = !s(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), h.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = K.test(C.getElementsByClassName), h.getById = se(function(e) {
                    return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), h.getById ? (b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(ne, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var n = e.replace(ne, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && k ? t.getElementsByClassName(e) : void 0
                }, c = [], m = [], (h.qsa = K.test(C.querySelectorAll)) && (se(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                }), se(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = K.test(d = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && se(function(e) {
                    h.disconnectedMatch = d.call(e, "div"), d.call(e, "[s!='']:x"), c.push("!=", $)
                }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? ue(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                }), C
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(U, "='$1']"), h.matchesSelector && k && !D[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
                    var n = d.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(A), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = re.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = re.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, u, l = m != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (m) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [N, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]), s !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            a = p(e.replace(_, "$1"));
                        return a[E] ? oe(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(ne, f),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return Y.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ne, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = le(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = ce(e);

        function de() {}

        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ge(a, e, t) {
            var u = e.dir,
                l = t && "parentNode" === u,
                c = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || l) return a(e, t, n)
            } : function(e, t, n) {
                var r, i, o, s = [N, c];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) {
                            if ((r = (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === N && r[1] === c) return s[2] = r[2];
                            if ((i[u] = s)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function ve(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function me(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function ye(d, h, g, v, m, e) {
            return v && !v[E] && (v = ye(v)), m && !m[E] && (m = ye(m, e)), oe(function(e, t, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : me(c, a, d, n, r),
                    p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = me(p, u), v(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = m ? P(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = me(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : O.apply(t, p)
            })
        }

        function xe(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ge(function(e) {
                    return e === i
                }, s, !0), l = ge(function(e) {
                    return -1 < P(i, e)
                }, s, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; a < r; a++)
                if (t = b.relative[e[a].type]) c = [ge(ve(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < r && !b.relative[e[n].type]; n++);
                        return ye(1 < a && ve(c), 1 < a && he(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(_, "$1"), t, a < n && xe(e.slice(a, n)), n < r && xe(e = e.slice(n)), n < r && he(e))
                    }
                    c.push(t)
                } return ve(c)
        }
        return de.prototype = b.filters = b.pseudos, b.setFilters = new de, g = re.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, l = j[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = X.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(_, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = G[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : j(e, a).slice(0)
        }, p = re.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = D[e + " "];
            if (!o) {
                for (t || (t = g(e)), n = t.length; n--;)(o = xe(t[n]))[E] ? r.push(o) : i.push(o);
                (o = D(e, function(v, m) {
                    function e(e, t, n, r, i) {
                        var o, s, a, u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            p = w,
                            d = e || x && b.find.TAG("*", i),
                            h = N += null == p ? 1 : Math.random() || .1,
                            g = d.length;
                        for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                            if (x && o) {
                                for (s = 0, t || o.ownerDocument === C || (T(o), n = !k); a = v[s++];)
                                    if (a(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    } i && (N = h)
                            }
                            y && ((o = !a && o) && u--, e && c.push(o))
                        }
                        if (u += l, y && l !== u) {
                            for (s = 0; a = m[s++];) a(c, f, t, n);
                            if (e) {
                                if (0 < u)
                                    for (; l--;) c[l] || f[l] || (f[l] = L.call(r));
                                f = me(f)
                            }
                            O.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && re.uniqueSort(r)
                        }
                        return i && (N = h, w = p), c
                    }
                    var y = 0 < m.length,
                        x = 0 < v.length;
                    return y ? oe(e) : e
                }(i, r))).selector = e
            }
            return o
        }, v = re.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ne, f), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (r = u(s.matches[0].replace(ne, f), ee.test(o[0].type) && pe(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && he(o))) return O.apply(n, r), n;
                        break
                    }
            }
            return (l || p(e, c))(r, t, !k, n, !t || ee.test(e) && pe(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(A).join("") === E, h.detectDuplicates = !!l, T(), h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(R, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), re
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains;

    function m(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e)
            } return r
    }

    function y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var x = E.expr.match.needsContext,
        b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function T(e, n, r) {
        if (E.isFunction(n)) return E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return E.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        })
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) E.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? E.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && x.test(e) ? E(e) : e || [], !1).length
        }
    });
    var N, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this));
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), b.test(r[1]) && E.isPlainObject(t))
                for (r in t) E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = k.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = k, this.selector = e, this
    }).prototype = E.fn, N = E(k);
    var j = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return m(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return m(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return m(e, "nextSibling")
        },
        prevAll: function(e) {
            return m(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return m(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return m(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || E.merge([], e.childNodes)
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (D[r] || E.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q, L = /\S+/g;

    function H() {
        k.removeEventListener("DOMContentLoaded", H), C.removeEventListener("load", H), E.ready()
    }
    E.Callbacks = function(r) {
        r = "string" == typeof r ? function(e) {
            var n = {};
            return E.each(e.match(L) || [], function(e, t) {
                n[t] = !0
            }), n
        }(r) : E.extend({}, r);

        function n() {
            for (o = r.once, t = i = !0; a.length; u = -1)
                for (e = a.shift(); ++u < s.length;) !1 === s[u].apply(e[0], e[1]) && r.stopOnFalse && (u = s.length, e = !1);
            r.memory || (e = !1), i = !1, o && (s = e ? [] : "")
        }
        var i, e, t, o, s = [],
            a = [],
            u = -1,
            l = {
                add: function() {
                    return s && (e && !i && (u = s.length - 1, a.push(e)), function n(e) {
                        E.each(e, function(e, t) {
                            E.isFunction(t) ? r.unique && l.has(t) || s.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                        })
                    }(arguments), e && !i && n()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = e = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], e || (s = e = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || n()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return l
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", E.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", E.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = E.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, E.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0,
                s = c.call(arguments),
                a = s.length,
                u = 1 !== a || e && E.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : E.Deferred();
            if (1 < a)
                for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && E.isFunction(s[o].promise) ? s[o].promise().progress(t(o, n, i)).done(t(o, r, s)).fail(l.reject) : --u;
            return u || l.resolveWith(r, s), l.promise()
        }
    }), E.fn.ready = function(e) {
        return E.ready.promise().done(e), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? E.readyWait++ : E.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || (q.resolveWith(k, [E]), E.fn.triggerHandler && (E(k).triggerHandler("ready"), E(k).off("ready"))))
        }
    }), E.ready.promise = function(e) {
        return q || (q = E.Deferred(), "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", H), C.addEventListener("load", H))), q.promise(e)
    }, E.ready.promise();

    function O(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    var F = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === E.type(n))
            for (a in i = !0, n) F(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, E.isFunction(r) || (s = !0), l && (t = s ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                return l.call(E(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };

    function P() {
        this.expando = E.expando + P.uid++
    }
    P.uid = 1, P.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!O(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, E.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    n = (r = E.isArray(t) ? t.concat(t.map(E.camelCase)) : (i = E.camelCase(t), t in o ? [t, i] : (r = i) in o ? [r] : r.match(L) || [])).length;
                    for (; n--;) delete o[r[n]]
                }
                void 0 !== t && !E.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var R = new P,
        M = new P,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        W = /[A-Z]/g;

    function $(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? E.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    }), E.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                M.set(this, r)
            }) : F(this, function(t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = M.get(o, r) || M.get(o, r.replace(W, "-$&").toLowerCase()))) return e;
                    if (n = E.camelCase(r), void 0 !== (e = M.get(o, n))) return e;
                    if (void 0 !== (e = $(o, n, void 0))) return e
                } else n = E.camelCase(r), this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && M.set(this, r, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = M.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = E.camelCase(n.slice(5)), $(o, n, i[n])));
                R.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || E.isArray(n) ? r = R.access(e, t, E.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = E.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(r = R.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });

    function B(e, t) {
        return e = t || e, "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
    }
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        z = ["Top", "Right", "Bottom", "Left"];

    function U(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return E.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || "px" !== l && +u) && X.exec(E.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", E.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], n) : n
    }

    function K(e, t) {
        for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === E.type(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Y.exec(o) || ["", ""])[1].toLowerCase(), u = Q[a] || Q._default, s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            E.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = E.contains(o.ownerDocument, o), s = J(f.appendChild(o), "script"), l && K(s), n)
            for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
        return f
    }
    Z = k.createDocumentFragment().appendChild(k.createElement("div")), (ee = k.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        oe = /^([^.]*)(?:\.(.+)|)/;

    function se() {
        return !0
    }

    function ae() {
        return !1
    }

    function ue() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function le(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) le(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return E().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(L) || [""]).length; l--;) d = g = (a = oe.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(L) || [""]).length; l--;)
                    if (d = g = (a = oe.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e);
            var t, n, r, i, o, s = [],
                a = c.call(arguments),
                u = (R.get(this, "events") || {})[e.type] || [],
                l = E.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = E.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || k).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[E.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new E.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = k), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ue() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ue() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && E.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        return this instanceof E.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), void(this[E.expando] = !0)) : new E.Event(e, t)
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                E.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        fe = /<script|<style|<link/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ve(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function me(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), s = R.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
            M.hasData(e) && (a = M.access(e), u = E.extend({}, a), M.set(t, u))
        }
    }

    function xe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = E.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), xe(t, r, i, o)
        });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = E.map(J(e, "script"), ve)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), a && E.merge(s, J(u, "script"))), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, E.map(s, me), c = 0; c < a; c++) u = s[c], G.test(u.type || "") && !R.access(u, "globalEval") && E.contains(l, u) && (u.src ? E._evalUrl && E._evalUrl(u.src) : E.globalEval(u.textContent.replace(he, "")))
        }
        return n
    }

    function be(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(J(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && K(J(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = E.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = J(c), r = 0, i = (o = J(e)).length; r < i; r++) a = o[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && V.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || J(e), s = s || J(c), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
                else ye(e, c);
            return 0 < (s = J(c, "script")).length && K(s, !f && J(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (O(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }), E.fn.extend({
        domManip: xe,
        detach: function(e) {
            return be(this, e, !0)
        },
        remove: function(e) {
            return be(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return xe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return xe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return xe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return xe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(J(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !Q[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(J(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return xe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(J(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, Te = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body),
            r = E.css(n[0], "display");
        return n.detach(), r
    }

    function ke(e) {
        var t = k,
            n = Te[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Te[e] = n), n
    }

    function Ee(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    }
    var Ne = /^margin/,
        Se = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        je = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        De = k.documentElement;

    function Ae(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || je(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)), n && !v.pixelMarginRight() && Se.test(s) && Ne.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, r, i, o = k.createElement("div"),
            s = k.createElement("div");
        if (s.style) {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", De.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, De.removeChild(o)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), E.extend(v, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), r
                },
                reliableMarginLeft: function() {
                    return null == n && e(), i
                },
                reliableMarginRight: function() {
                    var e, t = s.appendChild(k.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", De.appendChild(o), e = !parseFloat(C.getComputedStyle(t).marginRight), De.removeChild(o), s.removeChild(t), e
                }
            })
        }
    }();
    var Le = /^(none|table(?!-c[ea]).+)/,
        He = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "O", "Moz", "ms"],
        Pe = k.createElement("div").style;

    function Re(e) {
        if (e in Pe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
            if ((e = Fe[n] + t) in Pe) return e
    }

    function Me(e, t, n) {
        var r = X.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ie(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += E.css(e, n + z[o], !0, i)), r ? ("content" === n && (s -= E.css(e, "padding" + z[o], !0, i)), "margin" !== n && (s -= E.css(e, "border" + z[o] + "Width", !0, i))) : (s += E.css(e, "padding" + z[o], !0, i), "padding" !== n && (s += E.css(e, "border" + z[o] + "Width", !0, i)));
        return s
    }

    function We(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = je(e),
            s = "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]), Se.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ie(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function $e(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && B(r) && (o[s] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = B(r), "none" === n && i || R.set(r, "olddisplay", i ? n : E.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Be(e, t, n, r, i) {
        return new Be.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ae(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = E.camelCase(t),
                    u = e.style;
                return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = X.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = E.camelCase(t);
            return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ae(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                return t ? Le.test(E.css(e, "display")) && 0 === e.offsetWidth ? Ee(e, He, function() {
                    return We(e, s, n)
                }) : We(e, s, n) : void 0
            },
            set: function(e, t, n) {
                var r, i = n && je(e),
                    o = n && Ie(e, s, n, "border-box" === E.css(e, "boxSizing", !1, i), i);
                return o && (r = X.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), Me(0, t, o)
            }
        }
    }), E.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Ae(e, "marginLeft")) || e.getBoundingClientRect().left - Ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), E.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
        return t ? Ee(e, {
            display: "inline-block"
        }, Ae, [e, "marginRight"]) : void 0
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + z[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Ne.test(i) || (E.cssHooks[i + o].set = Me)
    }), E.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (E.isArray(t)) {
                    for (r = je(e), i = t.length; s < i; s++) o[t[s]] = E.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return $e(this, !0)
        },
        hide: function() {
            return $e(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                B(this) ? E(this).show() : E(this).hide()
            })
        }
    }), ((E.Tween = Be).prototype = {
        constructor: Be,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Be.propHooks[this.prop];
            return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Be.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Be.propHooks._default.set(this), this
        }
    }).init.prototype = Be.prototype, (Be.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Be.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = Be.prototype.init, E.fx.step = {};
    var _e, Xe, ze, Ue, Ve, Ye = /^(?:toggle|show|hide)$/,
        Ge = /queueHooks$/;

    function Qe() {
        return C.setTimeout(function() {
            _e = void 0
        }), _e = E.now()
    }

    function Je(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ke(e, t, n) {
        for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ze(o, e, t) {
        var n, s, r = 0,
            i = Ze.prefilters.length,
            a = E.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (s) return !1;
                for (var e = _e || Qe(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return a.notifyWith(o, [l, n, t]), n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
            },
            l = a.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: _e || Qe(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = E.camelCase(n)], o = e[n], E.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = E.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = Ze.prefilters[r].call(l, o, c, l.opts)) return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)), n;
        return E.map(c, Ke, l), E.isFunction(l.opts.start) && l.opts.start.call(o, l), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, X.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = E.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; r < i; r++) n = e[r], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = t.style,
                d = t.nodeType && B(t),
                h = R.get(t, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, E.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = E.css(t, "display")) ? R.get(t, "olddisplay") || ke(t.nodeName) : l) && "none" === E.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], Ye.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0
                    }
                    f[r] = h && h[r] || E.style(t, r)
                } else l = void 0;
            if (E.isEmptyObject(f)) "inline" === ("none" === l ? ke(t.nodeName) : l) && (p.display = l);
            else
                for (r in h ? "hidden" in h && (d = h.hidden) : h = R.access(t, "fxshow", {}), o && (h.hidden = !d), d ? E(t).show() : c.done(function() {
                        E(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in R.remove(t, "fxshow"), f) E.style(t, e, f[e])
                    }), f) s = Ke(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || E.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !E.isFunction(t) && t
        };
        return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            E.isFunction(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = Ze(this, E.extend({}, t), s);
                (o || R.get(this, "finish")) && e.stop(!0)
            }
            var o = E.isEmptyObject(t),
                s = E.speed(e, n, r);
            return i.finish = i, o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = R.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = R.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Je(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (_e = E.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), _e = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), e() ? E.fx.start() : E.timers.pop()
    }, E.fx.interval = 13, E.fx.start = function() {
        Xe || (Xe = C.setInterval(E.fx.tick, E.fx.interval))
    }, E.fx.stop = function() {
        C.clearInterval(Xe), Xe = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ze = k.createElement("input"), Ue = k.createElement("select"), Ve = Ue.appendChild(k.createElement("option")), ze.type = "checkbox", v.checkOn = "" !== ze.value, v.optSelected = Ve.selected, Ue.disabled = !0, v.optDisabled = !Ve.disabled, (ze = k.createElement("input")).value = "t", ze.type = "radio", v.radioValue = "t" === ze.value;
    var et, tt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return F(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(), i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = E.propFix[n] || n, E.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), et = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = tt[t] || E.find.attr;
        tt[t] = function(e, t, n) {
            var r, i;
            return n || (i = tt[t], tt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, tt[t] = i), r
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        rt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return F(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    });
    var it = /[\t\r\n\f]/g;

    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, ot(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, ot(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, ot(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" == o)
                    for (t = 0, n = E(this), r = i.match(L) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" != o || ((e = ot(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var st = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(st, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : E.trim(E.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                return E.isArray(t) ? e.checked = -1 < E.inArray(E(e).val(), t) : void 0
            }
        }, v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || k],
                p = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !ut.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !E.isWindow(n)) {
                    for (a = c.delegateType || p, ut.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || p, (l = (R.get(o, "events") || {})[e.type] && R.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && O(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !O(n) || u && E.isFunction(n[p]) && !E.isWindow(n) && ((s = n[u]) && (n[u] = null), n[E.event.triggered = p](), E.event.triggered = void 0, s && (n[u] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? E.event.trigger(e, t, n, !0) : void 0
        }
    }), E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in C, v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        }
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r);
                t || e.addEventListener(n, i, !0), R.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r) - 1;
                t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0), R.remove(e, r))
            }
        }
    });
    var lt = C.location,
        ct = E.now(),
        ft = /\?/;
    E.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/,
        dt = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        mt = {},
        yt = {},
        xt = "*/".concat("*"),
        bt = k.createElement("a");

    function wt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (E.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Tt(t, i, o, s) {
        var a = {},
            u = t === yt;

        function l(e) {
            var r;
            return a[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Ct(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    bt.href = lt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, E.ajaxSettings), t) : Ct(E.ajaxSettings, e)
        },
        ajaxPrefilter: wt(mt),
        ajaxTransport: wt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, i, g = E.ajaxSetup({}, t),
                v = g.context || g,
                m = g.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                y = E.Deferred(),
                x = E.Callbacks("once memory"),
                b = g.statusCode || {},
                o = {},
                s = {},
                w = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = ht.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || lt.href) + "").replace(pt, "").replace(vt, lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = bt.protocol + "//" + bt.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Tt(mt, g, t, T), 2 === w) return T;
            for (i in (h = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ft.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = dt.test(f) ? f.replace(dt, "$1_=" + ct++) : f + (ft.test(f) ? "&" : "?") + "_=" + ct++)), g.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w)) return T.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](g[i]);
            if (c = Tt(yt, g, t, T)) {
                if (T.readyState = 1, h && m.trigger("ajaxSend", [T, g]), 2 === w) return T;
                g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, c.send(o, u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, s, a, u, l = t;
                2 !== w && (w = 2, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(g, T, n)), a = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, T, i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]), T.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), x.fireWith(v, [T, l]), h && (m.trigger("ajaxComplete", [T, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function(e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, E.fn.extend({
        wrapAll: function(t) {
            var e;
            return E.isFunction(t) ? this.each(function(e) {
                E(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return E.isFunction(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = E.isFunction(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
            }).end()
        }
    }), E.expr.filters.hidden = function(e) {
        return !E.expr.filters.visible(e)
    }, E.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var kt = /%20/g,
        Et = /\[\]$/,
        Nt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (E.isArray(e)) E.each(e, function(e, t) {
            r || Et.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== E.type(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        function n(e, t) {
            t = E.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) Dt(r, e[r], t, n);
        return i.join("&").replace(kt, "+")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : E.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    }), E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var At = {
            0: 200,
            1223: 204
        },
        qt = E.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, E.ajaxTransport(function(i) {
        var o, s;
        return v.cors || qt && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        } : void 0
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = E("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Lt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || E.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Lt.push(r)), o && E.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), E.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || k;
        var r = b.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ne([e], t, i), i && i.length && E(i).remove(), E.merge([], r.childNodes))
    };
    var Ot = E.fn.load;

    function Ft(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    E.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = E.trim(e.slice(a)), e = e.slice(0, a)), E.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.expr.filters.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, r.left) : (s = parseFloat(o) || 0, parseFloat(u) || 0), E.isFunction(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, E.contains(e, r) ? (i = r.getBoundingClientRect(), n = Ft(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === E.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E.nodeName(e[0], "html") || (r = e.offset()), r.top += E.css(e[0], "borderTopWidth", !0), r.left += E.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - E.css(n, "marginTop", !0),
                    left: t.left - r.left - E.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || De
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r = Ft(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
            return t ? (t = Ae(e, n), Se.test(t) ? E(e).position()[n] + "px" : t) : void 0
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        E.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, e) {
            E.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), E.fn.andSelf = E.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Pt = C.jQuery,
        Rt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Rt), e && C.jQuery === E && (C.jQuery = Pt), E
    }, e || (C.jQuery = C.$ = E), E
});
//# sourceMappingURL=jquery-2.2.4.min.js.map