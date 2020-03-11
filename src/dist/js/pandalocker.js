window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a)
                if (t[a[d]] !== c) return "pfx" == b ? a[d] : !0;
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.substr(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = c[d] in u;
                return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (/^(url|email)$/.test(e) ? d = u.checkValidity && u.checkValidity() === !1 : /^color$/.test(e) ? (q.appendChild(u), q.offsetWidth, d = u.value != v, q.removeChild(u)) : d = u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.5.3",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i = b.createElement("div"),
                    j = b.body,
                    k = j ? j : b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), i.appendChild(h);
                return f = ["&#173;", "<style>", a, "</style>"].join(""), i.id = r, k.innerHTML += f, k.appendChild(i), j || (k.style.background = "", q.appendChild(k)), g = c(i, a), j ? i.parentNode.removeChild(i) : k.parentNode.removeChild(k), !!g
            },
            I = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            J = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            K = {}.hasOwnProperty;
        m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return K.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        });
        ! function(c, d) {
            var e = c.join(""),
                f = d.length;
            H(e, function(c, d) {
                for (var e = b.styleSheets[b.styleSheets.length - 1], g = e ? e.cssRules && e.cssRules[0] ? e.cssRules[0].cssText : e.cssText || "" : "", h = c.childNodes, i = {}; f--;) i[h[f].id] = h[f];
                o.touch = "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch || 9 === (i.touch && i.touch.offsetTop), o.csstransforms3d = 9 === (i.csstransforms3d && i.csstransforms3d.offsetLeft) && 3 === i.csstransforms3d.offsetHeight, o.generatedcontent = (i.generatedcontent && i.generatedcontent.offsetHeight) >= 1, o.fontface = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }, f, d)
        }(['@font-face {font-family:"font";src:url("https://")}', ["@media (", x.join("touch-enabled),("), r, ")", "{#touch{top:9px;position:absolute}}"].join(""), ["@media (", x.join("transform-3d),("), r, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""), ['#generatedcontent:after{content:"', v, '";visibility:hidden}'].join("")], ["fontface", "touch", "csstransforms3d", "generatedcontent"]);
        C.flexbox = function() {
            return j("flexOrder")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, C.canvastext = function() {
            return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
        }, C.webgl = function() {
            try {
                var d, e = b.createElement("canvas");
                d = !(!a.WebGLRenderingContext || !e.getContext("experimental-webgl") && !e.getContext("webgl")), e = c
            } catch (f) {
                d = !1
            }
            return d
        }, C.touch = function() {
            return o.touch
        }, C.geolocation = function() {
            return !!navigator.geolocation
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !!a.history && !!history.pushState
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            for (var b = -1, c = z.length; ++b < c;)
                if (a[z[b] + "WebSocket"]) return !0;
            return "WebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && (a = o.csstransforms3d), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            return o.fontface
        }, C.generatedcontent = function() {
            return o.generatedcontent
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, q.className += " " + (b ? "" : "no-") + a, o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = k.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = {},
                        c = a.createElement,
                        e = a.createDocumentFragment,
                        f = e();
                    a.createElement = function(a) {
                        var d = (b[a] || (b[a] = c(a))).cloneNode();
                        return k.shivMethods && d.canHaveChildren && !j.test(a) ? f.appendChild(d) : d
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                        return b[a] = c(a), f.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(k, f)
                }

                function f(a) {
                    var b;
                    return a.documentShived ? a : (k.shivCSS && !g && (b = !!c(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), h || (b = !e(a)), b && (a.documentShived = b), a)
                }
                var g, h, i = a.html5 || {},
                    j = /^<|^(?:button|form|map|select|textarea)$/i;
                ! function() {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>", g = "hidden" in a, h = 1 == a.childNodes.length || function() {
                        try {
                            b.createElement("a")
                        } catch (a) {
                            return !0
                        }
                        var c = b.createDocumentFragment();
                        return "undefined" == typeof c.cloneNode || "undefined" == typeof c.createDocumentFragment || "undefined" == typeof c.createElement
                    }()
                }();
                var k = {
                    elements: i.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: i.shivCSS !== !1,
                    shivMethods: i.shivMethods !== !1,
                    type: "default",
                    shivDocument: f
                };
                a.html5 = k, f(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
                return b ? j(a, b, c) : j(a, "pfx")
            }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = {},
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = [], l = b.createElement(a)), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, i) {
                var j = b(a),
                    l = j.autoCallback;
                j.url.split(".").pop().split("?").shift(), j.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h), j.instead ? j.instead(a, e, f, g, i) : (A[j.url] ? j.noexec = !0 : A[j.url] = 1, f.load(j.url, j.forceCSS || !j.forceJS && "css" == j.url.split(".").pop().split("?").shift() ? "c" : c, j.noexec, j.attrs, j.timeout), (d(e) || d(l)) && f.load(function() {
                    k(), e && e(j.origUrl, i, g), l && l(j.origUrl, i, g), A[j.url] = 2
                })))
            }

            function i(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var j, l, n = this.yepnope.loader;
            if (e(a)) g(a, 0, n, 0);
            else if (y(a))
                for (j = 0; j < a.length; j++) l = a[j], e(l) ? g(l, 0, n, 0) : y(l) ? m(l) : Object(l) === l && i(l, n);
            else Object(a) === a && i(a, n)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, window.matchMedia = window.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function(a) {
                return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 == f.offsetWidth, c.removeChild(e), {
                    matches: b,
                    media: a
                }
            }
    }(document),
    function(a) {
        function b() {
            u(!0)
        }
        if (a.respond = {}, respond.update = function() {}, respond.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches, !respond.mediaQueriesSupported) {
            var c, d, e, f = a.document,
                g = f.documentElement,
                h = [],
                i = [],
                j = [],
                k = {},
                l = 30,
                m = f.getElementsByTagName("head")[0] || g,
                n = f.getElementsByTagName("base")[0],
                o = m.getElementsByTagName("link"),
                p = [],
                q = function() {
                    for (var b, c, d, e, f = o, g = f.length, h = 0; g > h; h++) b = f[h], c = b.href, d = b.media, e = b.rel && "stylesheet" === b.rel.toLowerCase(), c && e && !k[c] && (b.styleSheet && b.styleSheet.rawCssText ? (s(b.styleSheet.rawCssText, c, d), k[c] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(c) && !n || c.replace(RegExp.$1, "").split("/")[0] === a.location.host) && p.push({
                        href: c,
                        media: d
                    }));
                    r()
                },
                r = function() {
                    if (p.length) {
                        var a = p.shift();
                        v(a.href, function(b) {
                            s(b, a.href, a.media), k[a.href] = !0, r()
                        })
                    }
                },
                s = function(a, b, c) {
                    var d, e, f, g, j, k = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
                        l = k && k.length || 0,
                        b = b.substring(0, b.lastIndexOf("/")),
                        m = function(a) {
                            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
                        },
                        n = !l && c,
                        o = 0;
                    for (b.length && (b += "/"), n && (l = 1); l > o; o++)
                        for (d = 0, n ? (e = c, i.push(m(a))) : (e = k[o].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, i.push(RegExp.$2 && m(RegExp.$2))), g = e.split(","), j = g.length; j > d; d++) f = g[d], h.push({
                            media: f.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                            rules: i.length - 1,
                            hasquery: f.indexOf("(") > -1,
                            minw: f.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: f.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        });
                    u()
                },
                t = function() {
                    var a, b = f.createElement("div"),
                        c = f.body,
                        d = !1;
                    return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = d = f.createElement("body"), c.style.background = "none"), c.appendChild(b), g.insertBefore(c, g.firstChild), a = b.offsetWidth, d ? g.removeChild(c) : c.removeChild(b), a = e = parseFloat(a)
                },
                u = function(a) {
                    var b = "clientWidth",
                        k = g[b],
                        n = "CSS1Compat" === f.compatMode && k || f.body[b] || k,
                        p = {},
                        q = o[o.length - 1],
                        r = (new Date).getTime();
                    if (a && c && l > r - c) return clearTimeout(d), d = setTimeout(u, l), void 0;
                    c = r;
                    for (var s in h) {
                        var v = h[s],
                            w = v.minw,
                            x = v.maxw,
                            y = null === w,
                            z = null === x,
                            A = "em";
                        w && (w = parseFloat(w) * (w.indexOf(A) > -1 ? e || t() : 1)), x && (x = parseFloat(x) * (x.indexOf(A) > -1 ? e || t() : 1)), v.hasquery && (y && z || !(y || n >= w) || !(z || x >= n)) || (p[v.media] || (p[v.media] = []), p[v.media].push(i[v.rules]))
                    }
                    for (var s in j) j[s] && j[s].parentNode === m && m.removeChild(j[s]);
                    for (var s in p) {
                        var B = f.createElement("style"),
                            C = p[s].join("\n");
                        B.type = "text/css", B.media = s, m.insertBefore(B, q.nextSibling), B.styleSheet ? B.styleSheet.cssText = C : B.appendChild(f.createTextNode(C)), j.push(B)
                    }
                },
                v = function(a, b) {
                    var c = w();
                    c && (c.open("GET", a, !0), c.onreadystatechange = function() {
                        4 != c.readyState || 200 != c.status && 304 != c.status || b(c.responseText)
                    }, 4 != c.readyState && c.send(null))
                },
                w = function() {
                    var a = !1;
                    try {
                        a = new XMLHttpRequest
                    } catch (b) {
                        a = new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    return function() {
                        return a
                    }
                }();
            q(), respond.update = q, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
        }
    }(this),
    function(a, b) {
        function c(a) {
            return J.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }

        function d(a) {
            if (!sc[a]) {
                var b = G.body,
                    c = J("<" + a + ">").appendTo(b),
                    d = c.css("display");
                c.remove(), ("none" === d || "" === d) && (oc || (oc = G.createElement("iframe"), oc.frameBorder = oc.width = oc.height = 0), b.appendChild(oc), pc && oc.createElement || (pc = (oc.contentWindow || oc.contentDocument).document, pc.write((J.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), pc.close()), c = pc.createElement(a), pc.body.appendChild(c), d = J.css(c, "display"), b.removeChild(oc)), sc[a] = d
            }
            return sc[a]
        }

        function e(a, b) {
            var c = {};
            return J.each(vc.concat.apply([], vc.slice(0, b)), function() {
                c[this] = a
            }), c
        }

        function f() {
            rc = b
        }

        function g() {
            return setTimeout(f, 0), rc = J.now()
        }

        function h() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function i() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function j(a, c) {
            a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d, e, f, g, h, i, j, k, l = a.dataTypes,
                m = {},
                n = l.length,
                o = l[0];
            for (d = 1; n > d; d++) {
                if (1 === d)
                    for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
                if (g = o, o = l[d], "*" === o) o = g;
                else if ("*" !== g && g !== o) {
                    if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                        k = b;
                        for (j in m)
                            if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                                j = m[j], j === !0 ? i = k : k === !0 && (i = j);
                                break
                            }
                    }!i && !k && J.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)))
                }
            }
            return c
        }

        function k(a, c, d) {
            var e, f, g, h, i = a.contents,
                j = a.dataTypes,
                k = a.responseFields;
            for (f in k) f in d && (c[k[f]] = d[f]);
            for (;
                "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
            if (e)
                for (f in i)
                    if (i[f] && i[f].test(e)) {
                        j.unshift(f);
                        break
                    } if (j[0] in d) g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
        }

        function l(a, b, c, d) {
            if (J.isArray(b)) J.each(b, function(b, e) {
                c || Sb.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== J.type(b)) d(a, b);
            else
                for (var e in b) l(a + "[" + e + "]", b[e], c, d)
        }

        function m(a, c) {
            var d, e, f = J.ajaxSettings.flatOptions || {};
            for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
            e && J.extend(!0, a, e)
        }

        function n(a, c, d, e, f, g) {
            f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
            for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === fc; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
            return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)), h
        }

        function o(a) {
            return function(b, c) {
                if ("string" != typeof b && (c = b, b = "*"), J.isFunction(c))
                    for (var d, e, f, g = b.toLowerCase().split(bc), h = 0, i = g.length; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
            }
        }

        function p(a, b, c) {
            var d = "width" === b ? a.offsetWidth : a.offsetHeight,
                e = "width" === b ? 1 : 0,
                f = 4;
            if (d > 0) {
                if ("border" !== c)
                    for (; f > e; e += 2) c || (d -= parseFloat(J.css(a, "padding" + Ob[e])) || 0), "margin" === c ? d += parseFloat(J.css(a, c + Ob[e])) || 0 : d -= parseFloat(J.css(a, "border" + Ob[e] + "Width")) || 0;
                return d + "px"
            }
            if (d = Db(a, b), (0 > d || null == d) && (d = a.style[b]), Kb.test(d)) return d;
            if (d = parseFloat(d) || 0, c)
                for (; f > e; e += 2) d += parseFloat(J.css(a, "padding" + Ob[e])) || 0, "padding" !== c && (d += parseFloat(J.css(a, "border" + Ob[e] + "Width")) || 0), "margin" === c && (d += parseFloat(J.css(a, c + Ob[e])) || 0);
            return d + "px"
        }

        function q(a) {
            var b = G.createElement("div");
            return Cb.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
        }

        function r(a) {
            var b = (a.nodeName || "").toLowerCase();
            "input" === b ? s(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), s)
        }

        function s(a) {
            ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
        }

        function t(a) {
            return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
        }

        function u(a, b) {
            var c;
            1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
        }

        function v(a, b) {
            if (1 === b.nodeType && J.hasData(a)) {
                var c, d, e, f = J._data(a),
                    g = J._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) J.event.add(b, c, h[c][d])
                }
                g.data && (g.data = J.extend({}, g.data))
            }
        }

        function w(a) {
            return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function x(a) {
            var b = ob.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function y(a, b, c) {
            if (b = b || 0, J.isFunction(b)) return J.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
            if (b.nodeType) return J.grep(a, function(a) {
                return a === b === c
            });
            if ("string" == typeof b) {
                var d = J.grep(a, function(a) {
                    return 1 === a.nodeType
                });
                if (kb.test(b)) return J.filter(b, d, !c);
                b = J.filter(b, d)
            }
            return J.grep(a, function(a) {
                return J.inArray(a, b) >= 0 === c
            })
        }

        function z(a) {
            return !a || !a.parentNode || 11 === a.parentNode.nodeType
        }

        function A() {
            return !0
        }

        function B() {
            return !1
        }

        function C(a, b, c) {
            var d = b + "defer",
                e = b + "queue",
                f = b + "mark",
                g = J._data(a, d);
            !(!g || "queue" !== c && J._data(a, e) || "mark" !== c && J._data(a, f) || !setTimeout(function() {
                !J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire())
            }, 0))
        }

        function D(a) {
            for (var b in a)
                if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function E(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(N, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : J.isNumeric(d) ? +d : M.test(d) ? J.parseJSON(d) : d
                    } catch (f) {}
                    J.data(a, c, d)
                } else d = b
            }
            return d
        }

        function F(a) {
            var b, c, d = K[a] = {};
            for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
            return d
        }
        var G = a.document,
            H = a.navigator,
            I = a.location,
            J = function() {
                function c() {
                    if (!h.isReady) {
                        try {
                            G.documentElement.doScroll("left")
                        } catch (a) {
                            return setTimeout(c, 1), void 0
                        }
                        h.ready()
                    }
                }
                var d, e, f, g, h = function(a, b) {
                        return new h.fn.init(a, b, d)
                    },
                    i = a.jQuery,
                    j = a.$,
                    k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    l = /\S/,
                    m = /^\s+/,
                    n = /\s+$/,
                    o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    p = /^[\],:{}\s]*$/,
                    q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    s = /(?:^|:|,)(?:\s*\[)+/g,
                    t = /(webkit)[ \/]([\w.]+)/,
                    u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    v = /(msie) ([\w.]+)/,
                    w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    x = /-([a-z]|[0-9])/gi,
                    y = /^-ms-/,
                    z = function(a, b) {
                        return (b + "").toUpperCase()
                    },
                    A = H.userAgent,
                    B = Object.prototype.toString,
                    C = Object.prototype.hasOwnProperty,
                    D = Array.prototype.push,
                    E = Array.prototype.slice,
                    F = String.prototype.trim,
                    I = Array.prototype.indexOf,
                    J = {};
                return h.fn = h.prototype = {
                    constructor: h,
                    init: function(a, c, d) {
                        var e, f, g, i;
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                        if ("body" === a && !c && G.body) return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
                        if ("string" == typeof a) {
                            if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
                                if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : G, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                                if (f = G.getElementById(e[2]), f && f.parentNode) {
                                    if (f.id !== e[2]) return d.find(a);
                                    this.length = 1, this[0] = f
                                }
                                return this.context = G, this.selector = a, this
                            }
                            return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                        }
                        return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return E.call(this, 0)
                    },
                    get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                    },
                    pushStack: function(a, b, c) {
                        var d = this.constructor();
                        return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                    },
                    each: function(a, b) {
                        return h.each(this, a, b)
                    },
                    ready: function(a) {
                        return h.bindReady(), f.add(a), this
                    },
                    eq: function(a) {
                        return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(h.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: D,
                    sort: [].sort,
                    splice: [].splice
                }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                    var a, c, d, e, f, g, i = arguments[0] || {},
                        j = 1,
                        k = arguments.length,
                        l = !1;
                    for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++)
                        if (null != (a = arguments[j]))
                            for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                    return i
                }, h.extend({
                    noConflict: function(b) {
                        return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? h.readyWait++ : h.ready(!0)
                    },
                    ready: function(a) {
                        if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                            if (!G.body) return setTimeout(h.ready, 1);
                            if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                            f.fireWith(G, [h]), h.fn.trigger && h(G).trigger("ready").off("ready")
                        }
                    },
                    bindReady: function() {
                        if (!f) {
                            if (f = h.Callbacks("once memory"), "complete" === G.readyState) return setTimeout(h.ready, 1);
                            if (G.addEventListener) G.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                            else if (G.attachEvent) {
                                G.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                                var b = !1;
                                try {
                                    b = null == a.frameElement
                                } catch (d) {}
                                G.documentElement.doScroll && b && c()
                            }
                        }
                    },
                    isFunction: function(a) {
                        return "function" === h.type(a)
                    },
                    isArray: Array.isArray || function(a) {
                        return "array" === h.type(a)
                    },
                    isWindow: function(a) {
                        return null != a && a == a.window
                    },
                    isNumeric: function(a) {
                        return !isNaN(parseFloat(a)) && isFinite(a)
                    },
                    type: function(a) {
                        return null == a ? String(a) : J[B.call(a)] || "object"
                    },
                    isPlainObject: function(a) {
                        if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (c) {
                            return !1
                        }
                        var d;
                        for (d in a);
                        return d === b || C.call(a, d)
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    },
                    error: function(a) {
                        throw new Error(a)
                    },
                    parseJSON: function(b) {
                        return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : (h.error("Invalid JSON: " + b), void 0)) : null
                    },
                    parseXML: function(c) {
                        if ("string" != typeof c || !c) return null;
                        var d, e;
                        try {
                            a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                        } catch (f) {
                            d = b
                        }
                        return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c), d
                    },
                    noop: function() {},
                    globalEval: function(b) {
                        b && l.test(b) && (a.execScript || function(b) {
                            a.eval.call(a, b)
                        })(b)
                    },
                    camelCase: function(a) {
                        return a.replace(y, "ms-").replace(x, z)
                    },
                    nodeName: function(a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            i = g === b || h.isFunction(a);
                        if (d)
                            if (i) {
                                for (e in a)
                                    if (c.apply(a[e], d) === !1) break
                            } else
                                for (; g > f && c.apply(a[f++], d) !== !1;);
                        else if (i) {
                            for (e in a)
                                if (c.call(a[e], e, a[e]) === !1) break
                        } else
                            for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                        return a
                    },
                    trim: F ? function(a) {
                        return null == a ? "" : F.call(a)
                    } : function(a) {
                        return null == a ? "" : (a + "").replace(m, "").replace(n, "")
                    },
                    makeArray: function(a, b) {
                        var c = b || [];
                        if (null != a) {
                            var d = h.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                        }
                        return c
                    },
                    inArray: function(a, b, c) {
                        var d;
                        if (b) {
                            if (I) return I.call(b, a, c);
                            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                                if (c in b && b[c] === a) return c
                        }
                        return -1
                    },
                    merge: function(a, c) {
                        var d = a.length,
                            e = 0;
                        if ("number" == typeof c.length)
                            for (var f = c.length; f > e; e++) a[d++] = c[e];
                        else
                            for (; c[e] !== b;) a[d++] = c[e++];
                        return a.length = d, a
                    },
                    grep: function(a, b, c) {
                        var d, e = [];
                        c = !!c;
                        for (var f = 0, g = a.length; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                        return e
                    },
                    map: function(a, c, d) {
                        var e, f, g = [],
                            i = 0,
                            j = a.length,
                            k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                        if (k)
                            for (; j > i; i++) e = c(a[i], i, d), null != e && (g[g.length] = e);
                        else
                            for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                        return g.concat.apply([], g)
                    },
                    guid: 1,
                    proxy: function(a, c) {
                        if ("string" == typeof c) {
                            var d = a[c];
                            c = a, a = d
                        }
                        if (!h.isFunction(a)) return b;
                        var e = E.call(arguments, 2),
                            f = function() {
                                return a.apply(c, e.concat(E.call(arguments)))
                            };
                        return f.guid = a.guid = a.guid || f.guid || h.guid++, f
                    },
                    access: function(a, c, d, e, f, g, i) {
                        var j, k = null == d,
                            l = 0,
                            m = a.length;
                        if (d && "object" == typeof d) {
                            for (l in d) h.access(a, c, l, d[l], 1, g, e);
                            f = 1
                        } else if (e !== b) {
                            if (j = i === b && h.isFunction(e), k && (j ? (j = c, c = function(a, b, c) {
                                    return j.call(h(a), c)
                                }) : (c.call(a, e), c = null)), c)
                                for (; m > l; l++) c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
                            f = 1
                        }
                        return f ? a : k ? c.call(a) : m ? c(a[0], d) : g
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(a) {
                        a = a.toLowerCase();
                        var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                        return {
                            browser: b[1] || "",
                            version: b[2] || "0"
                        }
                    },
                    sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }
                        h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                            return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                        }, a.fn.init.prototype = a.fn;
                        var b = a(G);
                        return a
                    },
                    browser: {}
                }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                    J["[object " + b + "]"] = b.toLowerCase()
                }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test("Â ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(G), G.addEventListener ? g = function() {
                    G.removeEventListener("DOMContentLoaded", g, !1), h.ready()
                } : G.attachEvent && (g = function() {
                    "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready())
                }), h
            }(),
            K = {};
        J.Callbacks = function(a) {
            a = a ? K[a] || F(a) : {};
            var c, d, e, f, g, h, i = [],
                j = [],
                k = function(b) {
                    var c, d, e, f;
                    for (c = 0, d = b.length; d > c; c++) e = b[c], f = J.type(e), "array" === f ? k(e) : "function" === f && (!a.unique || !m.has(e)) && i.push(e)
                },
                l = function(b, k) {
                    for (k = k || [], c = !a.memory || [b, k], d = !0, e = !0, h = f || 0, f = 0, g = i.length; i && g > h; h++)
                        if (i[h].apply(b, k) === !1 && a.stopOnFalse) {
                            c = !0;
                            break
                        } e = !1, i && (a.once ? c === !0 ? m.disable() : i = [] : j && j.length && (c = j.shift(), m.fireWith(c[0], c[1])))
                },
                m = {
                    add: function() {
                        if (i) {
                            var a = i.length;
                            k(arguments), e ? g = i.length : c && c !== !0 && (f = a, l(c[0], c[1]))
                        }
                        return this
                    },
                    remove: function() {
                        if (i)
                            for (var b = arguments, c = 0, d = b.length; d > c; c++)
                                for (var f = 0; f < i.length && (b[c] !== i[f] || (e && g >= f && (g--, h >= f && h--), i.splice(f--, 1), !a.unique)); f++);
                        return this
                    },
                    has: function(a) {
                        if (i)
                            for (var b = 0, c = i.length; c > b; b++)
                                if (a === i[b]) return !0;
                        return !1
                    },
                    empty: function() {
                        return i = [], this
                    },
                    disable: function() {
                        return i = j = c = b, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = b, (!c || c === !0) && m.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(b, d) {
                        return j && (e ? a.once || j.push([b, d]) : (!a.once || !c) && l(b, d)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return m
        };
        var L = [].slice;
        J.extend({
            Deferred: function(a) {
                var b, c = J.Callbacks("once memory"),
                    d = J.Callbacks("once memory"),
                    e = J.Callbacks("memory"),
                    f = "pending",
                    g = {
                        resolve: c,
                        reject: d,
                        notify: e
                    },
                    h = {
                        done: c.add,
                        fail: d.add,
                        progress: e.add,
                        state: function() {
                            return f
                        },
                        isResolved: c.fired,
                        isRejected: d.fired,
                        then: function(a, b, c) {
                            return i.done(a).fail(b).progress(c), this
                        },
                        always: function() {
                            return i.done.apply(i, arguments).fail.apply(i, arguments), this
                        },
                        pipe: function(a, b, c) {
                            return J.Deferred(function(d) {
                                J.each({
                                    done: [a, "resolve"],
                                    fail: [b, "reject"],
                                    progress: [c, "notify"]
                                }, function(a, b) {
                                    var c, e = b[0],
                                        f = b[1];
                                    J.isFunction(e) ? i[a](function() {
                                        c = e.apply(this, arguments), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
                                    }) : i[a](d[f])
                                })
                            }).promise()
                        },
                        promise: function(a) {
                            if (null == a) a = h;
                            else
                                for (var b in h) a[b] = h[b];
                            return a
                        }
                    },
                    i = h.promise({});
                for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
                return i.done(function() {
                    f = "resolved"
                }, d.disable, e.lock).fail(function() {
                    f = "rejected"
                }, c.disable, e.lock), a && a.call(i, i), i
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        g[a] = arguments.length > 1 ? L.call(arguments, 0) : b, i.notifyWith(j, g)
                    }
                }

                function c(a) {
                    return function(b) {
                        d[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --h || i.resolveWith(i, d)
                    }
                }
                var d = L.call(arguments, 0),
                    e = 0,
                    f = d.length,
                    g = Array(f),
                    h = f,
                    i = 1 >= f && a && J.isFunction(a.promise) ? a : J.Deferred(),
                    j = i.promise();
                if (f > 1) {
                    for (; f > e; e++) d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                    h || i.resolveWith(i, d)
                } else i !== a && i.resolveWith(i, f ? [a] : []);
                return j
            }
        }), J.support = function() {
            {
                var b, c, d, e, f, g, h, i, j, k, l, m = G.createElement("div");
                G.documentElement
            }
            if (m.setAttribute("className", "t"), m.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
            e = G.createElement("select"), f = e.appendChild(G.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
                leadingWhitespace: 3 === m.firstChild.nodeType,
                tbody: !m.getElementsByTagName("tbody").length,
                htmlSerialize: !!m.getElementsByTagName("link").length,
                style: /top/.test(d.getAttribute("style")),
                hrefNormalized: "/a" === d.getAttribute("href"),
                opacity: /^0.55/.test(d.style.opacity),
                cssFloat: !!d.style.cssFloat,
                checkOn: "on" === g.value,
                optSelected: f.selected,
                getSetAttribute: "t" !== m.className,
                enctype: !!G.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            }, J.boxModel = b.boxModel = "CSS1Compat" === G.compatMode, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
            try {
                delete m.test
            } catch (n) {
                b.deleteExpando = !1
            }
            if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", function() {
                    b.noCloneEvent = !1
                }), m.cloneNode(!0).fireEvent("onclick")), g = G.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = G.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
                for (k in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) j = "on" + k, l = j in m, l || (m.setAttribute(j, "return;"), l = "function" == typeof m[j]), b[k + "Bubbles"] = l;
            return h.removeChild(m), h = e = f = m = g = null, J(function() {
                var c, d, e, f, g, h, j, k, n, o, p, q, r = G.getElementsByTagName("body")[0];
                !r || (j = 1, q = "padding:0;margin:0;border:", o = "position:absolute;top:0;left:0;width:1px;height:1px;", p = q + "0;visibility:hidden;", k = "style='" + o + q + "5px solid #000;", n = "<div " + k + "display:block;'><div style='" + q + "0;display:block;overflow:hidden;'></div></div><table " + k + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", c = G.createElement("div"), c.style.cssText = p + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(c, r.firstChild), m = G.createElement("div"), c.appendChild(m), m.innerHTML = "<table><tr><td style='" + q + "0;display:none'></td><td>t</td></tr></table>", i = m.getElementsByTagName("td"), l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", b.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, a.getComputedStyle && (m.innerHTML = "", h = G.createElement("div"), h.style.width = "0", h.style.marginRight = "0", m.style.width = "2px", m.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                    marginRight: 0
                }).marginRight, 10) || 0)), "undefined" != typeof m.style.zoom && (m.innerHTML = "", m.style.width = m.style.padding = "1px", m.style.border = 0, m.style.overflow = "hidden", m.style.display = "inline", m.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.style.overflow = "visible", m.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = 3 !== m.offsetWidth), m.style.cssText = o + p, m.innerHTML = n, d = m.firstChild, e = d.firstChild, f = d.nextSibling.firstChild.firstChild, g = {
                    doesNotAddBorder: 5 !== e.offsetTop,
                    doesAddBorderForTableAndCells: 5 === f.offsetTop
                }, e.style.position = "fixed", e.style.top = "20px", g.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, g.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, a.getComputedStyle && (m.style.marginTop = "1%", b.pixelMargin = "1%" !== (a.getComputedStyle(m, null) || {
                    marginTop: 0
                }).marginTop), "undefined" != typeof c.style.zoom && (c.style.zoom = 1), r.removeChild(c), h = m = c = null, J.extend(b, g))
            }), b
        }();
        var M = /^(?:\{.*\}|\[.*\])$/,
            N = /([A-Z])/g;
        J.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !!a && !D(a)
            },
            data: function(a, c, d, e) {
                if (J.acceptData(a)) {
                    var f, g, h, i = J.expando,
                        j = "string" == typeof c,
                        k = a.nodeType,
                        l = k ? J.cache : a,
                        m = k ? a[i] : a[i] && i,
                        n = "events" === c;
                    if (!(m && l[m] && (n || e || l[m].data) || !j || d !== b)) return;
                    return m || (k ? a[i] = m = ++J.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = J.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = J.extend(l[m], c) : l[m].data = J.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[J.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h)
                }
            },
            removeData: function(a, b, c) {
                if (J.acceptData(a)) {
                    var d, e, f, g = J.expando,
                        h = a.nodeType,
                        i = h ? J.cache : a,
                        j = h ? a[g] : g;
                    if (!i[j]) return;
                    if (b && (d = c ? i[j] : i[j].data)) {
                        J.isArray(b) || (b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                        if (!(c ? D : J.isEmptyObject)(d)) return
                    }
                    if (!c && (delete i[j].data, !D(i[j]))) return;
                    J.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (J.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
                }
            },
            _data: function(a, b, c) {
                return J.data(a, b, c, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = J.noData[a.nodeName.toLowerCase()];
                    if (b) return b !== !0 && a.getAttribute("classid") === b
                }
                return !0
            }
        }), J.fn.extend({
            data: function(a, c) {
                var d, e, f, g, h, i = this[0],
                    j = 0,
                    k = null;
                if (a === b) {
                    if (this.length && (k = J.data(i), 1 === i.nodeType && !J._data(i, "parsedAttrs"))) {
                        for (f = i.attributes, h = f.length; h > j; j++) g = f[j].name, 0 === g.indexOf("data-") && (g = J.camelCase(g.substring(5)), E(i, g, k[g]));
                        J._data(i, "parsedAttrs", !0)
                    }
                    return k
                }
                return "object" == typeof a ? this.each(function() {
                    J.data(this, a)
                }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", J.access(this, function(c) {
                    return c === b ? (k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = J.data(i, a), k = E(i, a, k)), k === b && d[1] ? this.data(d[0]) : k) : (d[1] = c, this.each(function() {
                        var b = J(this);
                        b.triggerHandler("setData" + e, d), J.data(this, a, c), b.triggerHandler("changeData" + e, d)
                    }), void 0)
                }, null, c, arguments.length > 1, null, !1))
            },
            removeData: function(a) {
                return this.each(function() {
                    J.removeData(this, a)
                })
            }
        }), J.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark", J._data(a, b, (J._data(a, b) || 0) + 1))
            },
            _unmark: function(a, b, c) {
                if (a !== !0 && (c = b, b = a, a = !1), b) {
                    c = c || "fx";
                    var d = c + "mark",
                        e = a ? 0 : (J._data(b, d) || 1) - 1;
                    e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, "mark"))
                }
            },
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = J.queue(a, b),
                    d = c.shift(),
                    e = {};
                "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), J._data(a, b + ".run", e), d.call(a, function() {
                    J.dequeue(a, b)
                }, e)), c.length || (J.removeData(a, b + "queue " + b + ".run", !0), C(a, b, "queue"))
            }
        }), J.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? J.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = J.queue(this, a, c);
                    "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    J.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = J.fx ? J.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                function d() {
                    --i || f.resolveWith(g, [g])
                }
                "string" != typeof a && (c = a, a = b), a = a || "fx";
                for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0)) && (i++, e.add(d));
                return d(), f.promise(c)
            }
        });
        var O, P, Q, R = /[\n\t\r]/g,
            S = /\s+/,
            T = /\r/g,
            U = /^(?:button|input)$/i,
            V = /^(?:button|input|object|select|textarea)$/i,
            W = /^a(?:rea)?$/i,
            X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Y = J.support.getSetAttribute;
        J.fn.extend({
            attr: function(a, b) {
                return J.access(this, J.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    J.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return J.access(this, J.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = J.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = b, delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g, h;
                if (J.isFunction(a)) return this.each(function(b) {
                    J(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a)
                    for (b = a.split(S), c = 0, d = this.length; d > c; c++)
                        if (e = this[c], 1 === e.nodeType)
                            if (e.className || 1 !== b.length) {
                                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                                e.className = J.trim(f)
                            } else e.className = a;
                return this
            },
            removeClass: function(a) {
                var c, d, e, f, g, h, i;
                if (J.isFunction(a)) return this.each(function(b) {
                    J(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a || a === b)
                    for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++)
                        if (f = this[d], 1 === f.nodeType && f.className)
                            if (a) {
                                for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                                f.className = J.trim(g)
                            } else f.className = "";
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    d = "boolean" == typeof b;
                return J.isFunction(a) ? this.each(function(c) {
                    J(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var e, f = 0, g = J(this), h = b, i = a.split(S); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                    else("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1) return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, f = this[0];
                return arguments.length ? (e = J.isFunction(a), this.each(function(d) {
                    var f, g = J(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : J.isArray(f) && (f = J.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), c = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                })) : f ? (c = J.valHooks[f.type] || J.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(T, "") : null == d ? "" : d)) : void 0
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, f = a.selectedIndex,
                            g = [],
                            h = a.options,
                            i = "select-one" === a.type;
                        if (0 > f) return null;
                        for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                            if (e = h[c], !(!e.selected || (J.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || e.parentNode.disabled && J.nodeName(e.parentNode, "optgroup"))) {
                                if (b = J(e).val(), i) return b;
                                g.push(b)
                            } return i && !g.length && h.length ? J(h[f]).val() : g
                    },
                    set: function(a, b) {
                        var c = J.makeArray(b);
                        return J(a).find("option").each(function() {
                            this.selected = J.inArray(J(this).val(), c) >= 0
                        }), c.length || (a.selectedIndex = -1), c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                return a && 3 !== i && 8 !== i && 2 !== i ? e && c in J.attrFn ? J(a)[c](d) : "undefined" == typeof a.getAttribute ? J.prop(a, c, d) : (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P : O)), d !== b ? null === d ? (J.removeAttr(a, c), void 0) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)) : void 0
            },
            removeAttr: function(a, b) {
                var c, d, e, f, g, h = 0;
                if (b && 1 === a.nodeType)
                    for (d = b.toLowerCase().split(S), f = d.length; f > h; h++) e = d[h], e && (c = J.propFix[e] || e, g = X.test(e), g || J.attr(a, e, ""), a.removeAttribute(Y ? e : c), g && c in a && (a[c] = !1))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (U.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                        else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        return O && J.nodeName(a, "button") ? O.set(a, b, c) : (a.value = b, void 0)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }), J.attrHooks.tabindex = J.propHooks.tabIndex, P = {
            get: function(a, c) {
                var d, e = J.prop(a, c);
                return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
            }
        }, Y || (Q = {
            name: !0,
            id: !0,
            coords: !0
        }, O = J.valHooks.button = {
            get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c), d && (Q[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || (d = G.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
            }
        }, J.attrHooks.tabindex.set = O.set, J.each(["width", "height"], function(a, b) {
            J.attrHooks[b] = J.extend(J.attrHooks[b], {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            })
        }), J.attrHooks.contenteditable = {
            get: O.get,
            set: function(a, b, c) {
                "" === b && (b = "false"), O.set(a, b, c)
            }
        }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(a, c) {
            J.attrHooks[c] = J.extend(J.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return null === d ? b : d
                }
            })
        }), J.support.style || (J.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = J.extend(J.valHooks[this], {
                set: function(a, b) {
                    return J.isArray(b) ? a.checked = J.inArray(J(a).val(), b) >= 0 : void 0
                }
            })
        });
        var Z = /^(?:textarea|input|select)$/i,
            $ = /^([^\.]*)?(?:\.(.+))?$/,
            _ = /(?:^|\s)hover(\.\S+)?\b/,
            ab = /^key/,
            bb = /^(?:mouse|contextmenu)|click/,
            cb = /^(?:focusinfocus|focusoutblur)$/,
            db = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
            eb = function(a) {
                var b = db.exec(a);
                return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
            },
            fb = function(a, b) {
                var c = a.attributes || {};
                return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
            },
            gb = function(a) {
                return J.event.special.hover ? a : a.replace(_, "mouseenter$1 mouseleave$1")
            };
        J.event = {
                add: function(a, c, d, e, f) {
                    var g, h, i, j, k, l, m, n, o, p, q;
                    if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
                        for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                                return "undefined" == typeof J || a && J.event.triggered === a.type ? b : J.event.dispatch.apply(h.elem, arguments)
                            }, h.elem = a), c = J.trim(gb(c)).split(" "), j = 0; j < c.length; j++) k = $.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = J.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = J.event.special[l] || {}, n = J.extend({
                            type: l,
                            origType: k[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: f,
                            quick: f && eb(f),
                            namespace: m.join(".")
                        }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), J.event.global[l] = !0;
                        a = null
                    }
                },
                global: {},
                remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a);
                    if (r && (m = r.events)) {
                        for (b = J.trim(gb(b || "")).split(" "), f = 0; f < b.length; f++)
                            if (g = $.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                                for (n = J.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], !(!e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, !n.remove || !n.remove.call(a, q)));
                                0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && J.removeEvent(a, h, r.handle), delete m[h])
                            } else
                                for (h in m) J.event.remove(a, h + b[f], c, d, !0);
                        J.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), J.removeData(a, ["events", "handle"], !0))
                    }
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(c, d, e, f) {
                    if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                        var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                            r = [];
                        if (cb.test(q + J.event.triggered)) return;
                        if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q]) return;
                        if (c = "object" == typeof c ? c[J.expando] ? c : new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
                            g = J.cache;
                            for (i in g) g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
                            return
                        }
                        if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1) return;
                        if (o = [
                                [e, m.bindType || q]
                            ], !f && !m.noBubble && !J.isWindow(e)) {
                            for (p = m.delegateType || q, j = cb.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                            k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                        }
                        for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                        return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && J.nodeName(e, "a") || !J.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || J.isWindow(e) || (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, !k || !(e[l] = k))), c.result
                    }
                },
                dispatch: function(c) {
                    c = J.event.fix(c || a.event);
                    var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, "events") || {})[c.type] || [],
                        o = n.delegateCount,
                        p = [].slice.call(arguments, 0),
                        q = !c.exclusive && !c.namespace,
                        r = J.event.special[c.type] || {},
                        s = [];
                    if (p[0] = c, c.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, c) !== !1) {
                        if (o && (!c.button || "click" !== c.type))
                            for (g = J(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this)
                                if (f.disabled !== !0) {
                                    for (i = {}, k = [], g[0] = f, d = 0; o > d; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? fb(f, l.quick) : g.is(m)), i[m] && k.push(l);
                                    k.length && s.push({
                                        elem: f,
                                        matches: k
                                    })
                                } for (n.length > o && s.push({
                                elem: this,
                                matches: n.slice(o)
                            }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
                            for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((J.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                        return r.postDispatch && r.postDispatch.call(this, c), c.result
                    }
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(a, c) {
                        var d, e, f, g = c.button,
                            h = c.fromElement;
                        return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                    }
                },
                fix: function(a) {
                    if (a[J.expando]) return a;
                    var c, d, e = a,
                        f = J.event.fixHooks[a.type] || {},
                        g = f.props ? this.props.concat(f.props) : this.props;
                    for (a = J.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
                    return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
                },
                special: {
                    ready: {
                        setup: J.bindReady
                    },
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(a, b, c) {
                            J.isWindow(this) && (this.onbeforeunload = c)
                        },
                        teardown: function(a, b) {
                            this.onbeforeunload === b && (this.onbeforeunload = null)
                        }
                    }
                },
                simulate: function(a, b, c, d) {
                    var e = J.extend(new J.Event, c, {
                        type: a,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
                }
            }, J.event.handle = J.event.dispatch, J.removeEvent = G.removeEventListener ? function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            } : function(a, b, c) {
                a.detachEvent && a.detachEvent("on" + b, c)
            }, J.Event = function(a, b) {
                return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? A : B) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b)
            }, J.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = A;
                    var a = this.originalEvent;
                    !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                },
                stopPropagation: function() {
                    this.isPropagationStopped = A;
                    var a = this.originalEvent;
                    !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = A, this.stopPropagation()
                },
                isDefaultPrevented: B,
                isPropagationStopped: B,
                isImmediatePropagationStopped: B
            }, J.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(a, b) {
                J.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        {
                            var c, d = this,
                                e = a.relatedTarget,
                                f = a.handleObj;
                            f.selector
                        }
                        return (!e || e !== d && !J.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                    }
                }
            }), J.support.submitBubbles || (J.event.special.submit = {
                setup: function() {
                    return J.nodeName(this, "form") ? !1 : (J.event.add(this, "click._submit keypress._submit", function(a) {
                        var c = a.target,
                            d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form : b;
                        d && !d._submit_attached && (J.event.add(d, "submit._submit", function(a) {
                            a._submit_bubble = !0
                        }), d._submit_attached = !0)
                    }), void 0)
                },
                postDispatch: function(a) {
                    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && J.event.simulate("submit", this.parentNode, a, !0))
                },
                teardown: function() {
                    return J.nodeName(this, "form") ? !1 : (J.event.remove(this, "._submit"), void 0)
                }
            }), J.support.changeBubbles || (J.event.special.change = {
                setup: function() {
                    return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }), J.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, J.event.simulate("change", this, a, !0))
                    })), !1) : (J.event.add(this, "beforeactivate._change", function(a) {
                        var b = a.target;
                        Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, "change._change", function(a) {
                            this.parentNode && !a.isSimulated && !a.isTrigger && J.event.simulate("change", this.parentNode, a, !0)
                        }), b._change_attached = !0)
                    }), void 0)
                },
                handle: function(a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return J.event.remove(this, "._change"), Z.test(this.nodeName)
                }
            }), J.support.focusinBubbles || J.each({
                focus: "focusin",
                blur: "focusout"
            }, function(a, b) {
                var c = 0,
                    d = function(a) {
                        J.event.simulate(b, a.target, J.event.fix(a), !0)
                    };
                J.event.special[b] = {
                    setup: function() {
                        0 === c++ && G.addEventListener(a, d, !0)
                    },
                    teardown: function() {
                        0 === --c && G.removeEventListener(a, d, !0)
                    }
                }
            }), J.fn.extend({
                on: function(a, c, d, e, f) {
                    var g, h;
                    if ("object" == typeof a) {
                        "string" != typeof c && (d = d || c, c = b);
                        for (h in a) this.on(h, c, d, a[h], f);
                        return this
                    }
                    if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = B;
                    else if (!e) return this;
                    return 1 === f && (g = e, e = function(a) {
                        return J().off(a), g.apply(this, arguments)
                    }, e.guid = g.guid || (g.guid = J.guid++)), this.each(function() {
                        J.event.add(this, a, e, d, c)
                    })
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function(a, c, d) {
                    if (a && a.preventDefault && a.handleObj) {
                        var e = a.handleObj;
                        return J(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
                    }
                    if ("object" == typeof a) {
                        for (var f in a) this.off(f, c, a[f]);
                        return this
                    }
                    return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = B), this.each(function() {
                        J.event.remove(this, a, d, c)
                    })
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                live: function(a, b, c) {
                    return J(this.context).on(a, this.selector, b, c), this
                },
                die: function(a, b) {
                    return J(this.context).off(a, this.selector || "**", b), this
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        J.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0
                },
                toggle: function(a) {
                    var b = arguments,
                        c = a.guid || J.guid++,
                        d = 0,
                        e = function(c) {
                            var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
                            return J._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                        };
                    for (e.guid = c; d < b.length;) b[d++].guid = c;
                    return this.click(e)
                },
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                J.fn[b] = function(a, c) {
                    return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }, J.attrFn && (J.attrFn[b] = !0), ab.test(b) && (J.event.fixHooks[b] = J.event.keyHooks), bb.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks)
            }),
            function() {
                function a(a, b, c, d, f, g) {
                    for (var h = 0, i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) {
                                    k = d[j.sizset];
                                    break
                                }
                                if (1 === j.nodeType)
                                    if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                        if (j === b) {
                                            k = !0;
                                            break
                                        }
                                    } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                                j = j[a]
                            }
                            d[h] = k
                        }
                    }
                }

                function c(a, b, c, d, f, g) {
                    for (var h = 0, i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) {
                                    k = d[j.sizset];
                                    break
                                }
                                if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                    k = j;
                                    break
                                }
                                j = j[a]
                            }
                            d[h] = k
                        }
                    }
                }
                var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    e = "sizcache" + (Math.random() + "").replace(".", ""),
                    f = 0,
                    g = Object.prototype.toString,
                    h = !1,
                    i = !0,
                    j = /\\/g,
                    k = /\r\n/g,
                    l = /\W/;
                [0, 0].sort(function() {
                    return i = !1, 0
                });
                var m = function(a, b, c, e) {
                    c = c || [], b = b || G;
                    var f = b;
                    if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                    if (!a || "string" != typeof a) return c;
                    var h, i, j, k, l, n, q, r, t = !0,
                        u = m.isXML(b),
                        v = [],
                        x = a;
                    do
                        if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                            k = h[3];
                            break
                        } while (h);
                    if (v.length > 1 && p.exec(a))
                        if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                        else
                            for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
                    else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                        for (l = e ? {
                                expr: v.pop(),
                                set: s(e)
                            } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
                    else j = v = [];
                    if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                        if (t)
                            if (b && 1 === b.nodeType)
                                for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                            else
                                for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                    else c.push.apply(c, j);
                    else s(j, c);
                    return k && (m(k, f, c, e), m.uniqueSort(c)), c
                };
                m.uniqueSort = function(a) {
                    if (u && (h = i, a.sort(u), h))
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                    return a
                }, m.matches = function(a, b) {
                    return m(a, null, null, b)
                }, m.matchesSelector = function(a, b) {
                    return m(b, null, null, [a]).length > 0
                }, m.find = function(a, b, c) {
                    var d, e, f, g, h, i;
                    if (!a) return [];
                    for (e = 0, f = o.order.length; f > e; e++)
                        if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                            a = a.replace(o.match[h], "");
                            break
                        } return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                        set: d,
                        expr: a
                    }
                }, m.filter = function(a, c, d, e) {
                    for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                        for (h in o.filter)
                            if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                                if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                                if (s === r && (r = []), o.preFilter[h])
                                    if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                        if (f === !0) continue
                                    } else g = i = !0;
                                if (f)
                                    for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                                if (i !== b) {
                                    if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                    break
                                }
                            } if (a === q) {
                            if (null != g) break;
                            m.error(a)
                        }
                        q = a
                    }
                    return s
                }, m.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                };
                var n = m.getText = function(a) {
                        var b, c, d = a.nodeType,
                            e = "";
                        if (d) {
                            if (1 === d || 9 === d || 11 === d) {
                                if ("string" == typeof a.textContent) return a.textContent;
                                if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                                for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                            } else if (3 === d || 4 === d) return a.nodeValue
                        } else
                            for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                        return e
                    },
                    o = m.selectors = {
                        order: ["ID", "NAME", "TAG"],
                        match: {
                            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                        },
                        leftMatch: {},
                        attrMap: {
                            "class": "className",
                            "for": "htmlFor"
                        },
                        attrHandle: {
                            href: function(a) {
                                return a.getAttribute("href")
                            },
                            type: function(a) {
                                return a.getAttribute("type")
                            }
                        },
                        relative: {
                            "+": function(a, b) {
                                var c = "string" == typeof b,
                                    d = c && !l.test(b),
                                    e = c && !d;
                                d && (b = b.toLowerCase());
                                for (var f, g = 0, h = a.length; h > g; g++)
                                    if (f = a[g]) {
                                        for (;
                                            (f = f.previousSibling) && 1 !== f.nodeType;);
                                        a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                    } e && m.filter(b, a, !0)
                            },
                            ">": function(a, b) {
                                var c, d = "string" == typeof b,
                                    e = 0,
                                    f = a.length;
                                if (d && !l.test(b)) {
                                    for (b = b.toLowerCase(); f > e; e++)
                                        if (c = a[e]) {
                                            var g = c.parentNode;
                                            a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                        }
                                } else {
                                    for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                    d && m.filter(b, a, !0)
                                }
                            },
                            "": function(b, d, e) {
                                var g, h = f++,
                                    i = a;
                                "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, e)
                            },
                            "~": function(b, d, e) {
                                var g, h = f++,
                                    i = a;
                                "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, e)
                            }
                        },
                        find: {
                            ID: function(a, b, c) {
                                if ("undefined" != typeof b.getElementById && !c) {
                                    var d = b.getElementById(a[1]);
                                    return d && d.parentNode ? [d] : []
                                }
                            },
                            NAME: function(a, b) {
                                if ("undefined" != typeof b.getElementsByName) {
                                    for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                    return 0 === c.length ? null : c
                                }
                            },
                            TAG: function(a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                            }
                        },
                        preFilter: {
                            CLASS: function(a, b, c, d, e, f) {
                                if (a = " " + a[1].replace(j, "") + " ", f) return a;
                                for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                                return !1
                            },
                            ID: function(a) {
                                return a[1].replace(j, "")
                            },
                            TAG: function(a) {
                                return a[1].replace(j, "").toLowerCase()
                            },
                            CHILD: function(a) {
                                if ("nth" === a[1]) {
                                    a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                    a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                                } else a[2] && m.error(a[0]);
                                return a[0] = f++, a
                            },
                            ATTR: function(a, b, c, d, e, f) {
                                var g = a[1] = a[1].replace(j, "");
                                return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                            },
                            PSEUDO: function(a, b, c, e, f) {
                                if ("not" === a[1]) {
                                    if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                        var g = m.filter(a[3], b, c, !0 ^ f);
                                        return c || e.push.apply(e, g), !1
                                    }
                                    a[3] = m(a[3], null, null, b)
                                } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                                return a
                            },
                            POS: function(a) {
                                return a.unshift(!0), a
                            }
                        },
                        filters: {
                            enabled: function(a) {
                                return a.disabled === !1 && "hidden" !== a.type
                            },
                            disabled: function(a) {
                                return a.disabled === !0
                            },
                            checked: function(a) {
                                return a.checked === !0
                            },
                            selected: function(a) {
                                return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                            },
                            parent: function(a) {
                                return !!a.firstChild
                            },
                            empty: function(a) {
                                return !a.firstChild
                            },
                            has: function(a, b, c) {
                                return !!m(c[3], a).length
                            },
                            header: function(a) {
                                return /h\d/i.test(a.nodeName)
                            },
                            text: function(a) {
                                var b = a.getAttribute("type"),
                                    c = a.type;
                                return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                            },
                            radio: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                            },
                            checkbox: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                            },
                            file: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "file" === a.type
                            },
                            password: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "password" === a.type
                            },
                            submit: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "submit" === a.type
                            },
                            image: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "image" === a.type
                            },
                            reset: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "reset" === a.type
                            },
                            button: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && "button" === a.type || "button" === b
                            },
                            input: function(a) {
                                return /input|select|textarea|button/i.test(a.nodeName)
                            },
                            focus: function(a) {
                                return a === a.ownerDocument.activeElement
                            }
                        },
                        setFilters: {
                            first: function(a, b) {
                                return 0 === b
                            },
                            last: function(a, b, c, d) {
                                return b === d.length - 1
                            },
                            even: function(a, b) {
                                return b % 2 === 0
                            },
                            odd: function(a, b) {
                                return b % 2 === 1
                            },
                            lt: function(a, b, c) {
                                return b < c[3] - 0
                            },
                            gt: function(a, b, c) {
                                return b > c[3] - 0
                            },
                            nth: function(a, b, c) {
                                return c[3] - 0 === b
                            },
                            eq: function(a, b, c) {
                                return c[3] - 0 === b
                            }
                        },
                        filter: {
                            PSEUDO: function(a, b, c, d) {
                                var e = b[1],
                                    f = o.filters[e];
                                if (f) return f(a, c, b, d);
                                if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                                if ("not" === e) {
                                    for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                        if (g[h] === a) return !1;
                                    return !0
                                }
                                m.error(e)
                            },
                            CHILD: function(a, b) {
                                var c, d, f, g, h, i, j = b[1],
                                    k = a;
                                switch (j) {
                                    case "only":
                                    case "first":
                                        for (; k = k.previousSibling;)
                                            if (1 === k.nodeType) return !1;
                                        if ("first" === j) return !0;
                                        k = a;
                                    case "last":
                                        for (; k = k.nextSibling;)
                                            if (1 === k.nodeType) return !1;
                                        return !0;
                                    case "nth":
                                        if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                        if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                            for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                            g[e] = f
                                        }
                                        return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0
                                }
                            },
                            ID: function(a, b) {
                                return 1 === a.nodeType && a.getAttribute("id") === b
                            },
                            TAG: function(a, b) {
                                return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                            },
                            CLASS: function(a, b) {
                                return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                            },
                            ATTR: function(a, b) {
                                var c = b[1],
                                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                    e = d + "",
                                    f = b[2],
                                    g = b[4];
                                return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                            },
                            POS: function(a, b, c, d) {
                                var e = b[2],
                                    f = o.setFilters[e];
                                return f ? f(a, c, b, d) : void 0
                            }
                        }
                    },
                    p = o.match.POS,
                    q = function(a, b) {
                        return "\\" + (b - 0 + 1)
                    };
                for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
                o.match.globalPOS = p;
                var s = function(a, b) {
                    return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
                };
                try {
                    Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
                } catch (t) {
                    s = function(a, b) {
                        var c = 0,
                            d = b || [];
                        if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                        else if ("number" == typeof a.length)
                            for (var e = a.length; e > c; c++) d.push(a[c]);
                        else
                            for (; a[c]; c++) d.push(a[c]);
                        return d
                    }
                }
                var u, v;
                G.documentElement.compareDocumentPosition ? u = function(a, b) {
                        return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : (u = function(a, b) {
                        if (a === b) return h = !0, 0;
                        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                        var c, d, e = [],
                            f = [],
                            g = a.parentNode,
                            i = b.parentNode,
                            j = g;
                        if (g === i) return v(a, b);
                        if (!g) return -1;
                        if (!i) return 1;
                        for (; j;) e.unshift(j), j = j.parentNode;
                        for (j = i; j;) f.unshift(j), j = j.parentNode;
                        c = e.length, d = f.length;
                        for (var k = 0; c > k && d > k; k++)
                            if (e[k] !== f[k]) return v(e[k], f[k]);
                        return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                    }, v = function(a, b, c) {
                        if (a === b) return c;
                        for (var d = a.nextSibling; d;) {
                            if (d === b) return -1;
                            d = d.nextSibling
                        }
                        return 1
                    }),
                    function() {
                        var a = G.createElement("div"),
                            c = "script" + (new Date).getTime(),
                            d = G.documentElement;
                        a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), G.getElementById(c) && (o.find.ID = function(a, c, d) {
                            if ("undefined" != typeof c.getElementById && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                            }
                        }, o.filter.ID = function(a, b) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return 1 === a.nodeType && c && c.nodeValue === b
                        }), d.removeChild(a), d = a = null
                    }(),
                    function() {
                        var a = G.createElement("div");
                        a.appendChild(G.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if ("*" === a[1]) {
                                for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                                c = d
                            }
                            return c
                        }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                            return a.getAttribute("href", 2)
                        }), a = null
                    }(), G.querySelectorAll && function() {
                        var a = m,
                            b = G.createElement("div"),
                            c = "__sizzle__";
                        if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                            m = function(b, d, e, f) {
                                if (d = d || G, !f && !m.isXML(d)) {
                                    var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                    if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                        if (g[1]) return s(d.getElementsByTagName(b), e);
                                        if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                                    }
                                    if (9 === d.nodeType) {
                                        if ("body" === b && d.body) return s([d.body], e);
                                        if (g && g[3]) {
                                            var h = d.getElementById(g[3]);
                                            if (!h || !h.parentNode) return s([], e);
                                            if (h.id === g[3]) return s([h], e)
                                        }
                                        try {
                                            return s(d.querySelectorAll(b), e)
                                        } catch (i) {}
                                    } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                        var j = d,
                                            k = d.getAttribute("id"),
                                            l = k || c,
                                            n = d.parentNode,
                                            p = /^\s*[+~]/.test(b);
                                        k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
                                        try {
                                            if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                                        } catch (q) {} finally {
                                            k || j.removeAttribute("id")
                                        }
                                    }
                                }
                                return a(b, d, e, f)
                            };
                            for (var d in a) m[d] = a[d];
                            b = null
                        }
                    }(),
                    function() {
                        var a = G.documentElement,
                            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                        if (b) {
                            var c = !b.call(G.createElement("div"), "div"),
                                d = !1;
                            try {
                                b.call(G.documentElement, "[test!='']:sizzle")
                            } catch (e) {
                                d = !0
                            }
                            m.matchesSelector = function(a, e) {
                                if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                    if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                        var f = b.call(a, e);
                                        if (f || !c || a.document && 11 !== a.document.nodeType) return f
                                    }
                                } catch (g) {}
                                return m(e, null, null, [a]).length > 0
                            }
                        }
                    }(),
                    function() {
                        var a = G.createElement("div");
                        if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                            if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                            o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                            }, a = null
                        }
                    }(), m.contains = G.documentElement.contains ? function(a, b) {
                        return a !== b && (a.contains ? a.contains(b) : !0)
                    } : G.documentElement.compareDocumentPosition ? function(a, b) {
                        return !!(16 & a.compareDocumentPosition(b))
                    } : function() {
                        return !1
                    }, m.isXML = function(a) {
                        var b = (a ? a.ownerDocument || a : 0).documentElement;
                        return b ? "HTML" !== b.nodeName : !1
                    };
                var w = function(a, b, c) {
                    for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
                    a = o.relative[a] ? a + "*" : a;
                    for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                    return m.filter(f, e)
                };
                m.attr = J.attr, m.selectors.attrMap = {}, J.find = m, J.expr = m.selectors, J.expr[":"] = J.expr.filters, J.unique = m.uniqueSort, J.text = m.getText, J.isXMLDoc = m.isXML, J.contains = m.contains
            }();
        var hb = /Until$/,
            ib = /^(?:parents|prevUntil|prevAll)/,
            jb = /,/,
            kb = /^.[^:#\[\.,]*$/,
            lb = Array.prototype.slice,
            mb = J.expr.match.globalPOS,
            nb = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.fn.extend({
            find: function(a) {
                var b, c, d = this;
                if ("string" != typeof a) return J(a).filter(function() {
                    for (b = 0, c = d.length; c > b; b++)
                        if (J.contains(d[b], this)) return !0
                });
                var e, f, g, h = this.pushStack("", "find", a);
                for (b = 0, c = this.length; c > b; b++)
                    if (e = h.length, J.find(a, this[b], h), b > 0)
                        for (f = e; f < h.length; f++)
                            for (g = 0; e > g; g++)
                                if (h[g] === h[f]) {
                                    h.splice(f--, 1);
                                    break
                                } return h
            },
            has: function(a) {
                var b = J(a);
                return this.filter(function() {
                    for (var a = 0, c = b.length; c > a; a++)
                        if (J.contains(this, b[a])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(y(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(y(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && ("string" == typeof a ? mb.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c, d, e = [],
                    f = this[0];
                if (J.isArray(a)) {
                    for (var g = 1; f && f.ownerDocument && f !== b;) {
                        for (c = 0; c < a.length; c++) J(f).is(a[c]) && e.push({
                            selector: a[c],
                            elem: f,
                            level: g
                        });
                        f = f.parentNode, g++
                    }
                    return e
                }
                var h = mb.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
                for (c = 0, d = this.length; d > c; c++)
                    for (f = this[c]; f;) {
                        if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
                            e.push(f);
                            break
                        }
                        if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
                    }
                return e = e.length > 1 ? J.unique(e) : e, this.pushStack(e, "closest", a)
            },
            index: function(a) {
                return a ? "string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
                    d = J.merge(this.get(), c);
                return this.pushStack(z(c[0]) || z(d[0]) ? d : J.unique(d))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }), J.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return J.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return J.dir(a, "parentNode", c)
            },
            next: function(a) {
                return J.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return J.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return J.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return J.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return J.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return J.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return J.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return J.sibling(a.firstChild)
            },
            contents: function(a) {
                return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes)
            }
        }, function(a, b) {
            J.fn[a] = function(c, d) {
                var e = J.map(this, b, c);
                return hb.test(a) || (d = c), d && "string" == typeof d && (e = J.filter(d, e)), e = this.length > 1 && !nb[a] ? J.unique(e) : e, (this.length > 1 || jb.test(d)) && ib.test(a) && (e = e.reverse()), this.pushStack(e, a, lb.call(arguments).join(","))
            }
        }), J.extend({
            filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"), 1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
            },
            dir: function(a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
                return e
            },
            nth: function(a, b, c) {
                b = b || 1;
                for (var d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c]);
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            pb = / jQuery\d+="(?:\d+|null)"/g,
            qb = /^\s+/,
            rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            sb = /<([\w:]+)/,
            tb = /<tbody/i,
            ub = /<|&#?\w+;/,
            vb = /<(?:script|style)/i,
            wb = /<(?:script|object|embed|option|style)/i,
            xb = new RegExp("<(?:" + ob + ")[\\s/>]", "i"),
            yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            zb = /\/(java|ecma)script/i,
            Ab = /^\s*<!(?:\[CDATA\[|\-\-)/,
            Bb = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            Cb = x(G);
        Bb.optgroup = Bb.option, Bb.tbody = Bb.tfoot = Bb.colgroup = Bb.caption = Bb.thead, Bb.th = Bb.td, J.support.htmlSerialize || (Bb._default = [1, "div<div>", "</div>"]), J.fn.extend({
            text: function(a) {
                return J.access(this, function(a) {
                    return a === b ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (J.isFunction(a)) return this.each(function(b) {
                    J(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return J.isFunction(a) ? this.each(function(b) {
                    J(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = J(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = J.isFunction(a);
                return this.each(function(c) {
                    J(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = J.clean(arguments);
                    return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    return a.push.apply(a, J.clean(arguments)), a
                }
            },
            remove: function(a, b) {
                for (var c, d = 0; null != (c = this[d]); d++)(!a || J.filter(a, [c]).length) && (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return J.clone(this, a, b)
                })
            },
            html: function(a) {
                return J.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(pb, "") : null;
                    if (!("string" != typeof a || vb.test(a) || !J.support.leadingWhitespace && qb.test(a) || Bb[(sb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(rb, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function(b) {
                    var c = J(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                }) : ("string" != typeof a && (a = J(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    J(this).remove(), b ? J(b).before(a) : J(c).append(a)
                })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                var e, f, g, h, i = a[0],
                    j = [];
                if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && yb.test(i)) return this.each(function() {
                    J(this).domManip(a, c, d, !0)
                });
                if (J.isFunction(i)) return this.each(function(e) {
                    var f = J(this);
                    a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                });
                if (this[0]) {
                    if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                            fragment: h
                        } : J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) {
                        c = c && J.nodeName(f, "tr");
                        for (var k = 0, l = this.length, m = l - 1; l > k; k++) d.call(c ? w(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? J.clone(g, !0, !0) : g)
                    }
                    j.length && J.each(j, function(a, b) {
                        b.src ? J.ajax({
                            type: "GET",
                            global: !1,
                            url: b.src,
                            async: !1,
                            dataType: "script"
                        }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ab, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }), J.buildFragment = function(a, b, c) {
            var d, e, f, g, h = a[0];
            return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), 1 === a.length && "string" == typeof h && h.length < 512 && g === G && "<" === h.charAt(0) && !wb.test(h) && (J.support.checkClone || !yb.test(h)) && (J.support.html5Clone || !xb.test(h)) && (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[h] = f ? d : 1), {
                fragment: d,
                cacheable: e
            }
        }, J.fragments = {}, J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            J.fn[a] = function(c) {
                var d = [],
                    e = J(c),
                    f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
                for (var g = 0, h = e.length; h > g; g++) {
                    var i = (g > 0 ? this.clone(!0) : this).get();
                    J(e[g])[b](i), d = d.concat(i)
                }
                return this.pushStack(d, a, e.selector)
            }
        }), J.extend({
            clone: function(a, b, c) {
                var d, e, f, g = J.support.html5Clone || J.isXMLDoc(a) || !xb.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : q(a);
                if (!(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a)))
                    for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f) e[f] && u(d[f], e[f]);
                if (b && (v(a, g), c))
                    for (d = t(a), e = t(g), f = 0; d[f]; ++f) v(d[f], e[f]);
                return d = e = null, g
            },
            clean: function(a, b, c, d) {
                var e, f, g, h = [];
                b = b || G, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
                for (var i, j = 0; null != (i = a[j]); j++)
                    if ("number" == typeof i && (i += ""), i) {
                        if ("string" == typeof i)
                            if (ub.test(i)) {
                                i = i.replace(rb, "<$1></$2>");
                                var k, l = (sb.exec(i) || ["", ""])[1].toLowerCase(),
                                    m = Bb[l] || Bb._default,
                                    n = m[0],
                                    o = b.createElement("div"),
                                    p = Cb.childNodes;
                                for (b === G ? Cb.appendChild(o) : x(b).appendChild(o), o.innerHTML = m[1] + i + m[2]; n--;) o = o.lastChild;
                                if (!J.support.tbody) {
                                    var q = tb.test(i),
                                        s = "table" !== l || q ? "<table>" !== m[1] || q ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
                                    for (g = s.length - 1; g >= 0; --g) J.nodeName(s[g], "tbody") && !s[g].childNodes.length && s[g].parentNode.removeChild(s[g])
                                }!J.support.leadingWhitespace && qb.test(i) && o.insertBefore(b.createTextNode(qb.exec(i)[0]), o.firstChild), i = o.childNodes, o && (o.parentNode.removeChild(o), p.length > 0 && (k = p[p.length - 1], k && k.parentNode && k.parentNode.removeChild(k)))
                            } else i = b.createTextNode(i);
                        var t;
                        if (!J.support.appendChecked)
                            if (i[0] && "number" == typeof(t = i.length))
                                for (g = 0; t > g; g++) r(i[g]);
                            else r(i);
                        i.nodeType ? h.push(i) : h = J.merge(h, i)
                    } if (c)
                    for (e = function(a) {
                            return !a.type || zb.test(a.type)
                        }, j = 0; h[j]; j++)
                        if (f = h[j], d && J.nodeName(f, "script") && (!f.type || zb.test(f.type))) d.push(f.parentNode ? f.parentNode.removeChild(f) : f);
                        else {
                            if (1 === f.nodeType) {
                                var u = J.grep(f.getElementsByTagName("script"), e);
                                h.splice.apply(h, [j + 1, 0].concat(u))
                            }
                            c.appendChild(f)
                        } return h
            },
            cleanData: function(a) {
                for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                    if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
                        if (b = e[c], b && b.events) {
                            for (var i in b.events) f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c]
                    }
            }
        });
        var Db, Eb, Fb, Gb = /alpha\([^)]*\)/i,
            Hb = /opacity=([^)]*)/,
            Ib = /([A-Z]|^ms)/g,
            Jb = /^[\-+]?(?:\d*\.)?\d+$/i,
            Kb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
            Lb = /^([\-+])=([\-+.\de]+)/,
            Mb = /^margin/,
            Nb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ob = ["Top", "Right", "Bottom", "Left"];
        J.fn.css = function(a, c) {
            return J.access(this, function(a, c, d) {
                return d !== b ? J.style(a, c, d) : J.css(a, c)
            }, a, c, arguments.length > 1)
        }, J.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Db(a, "opacity");
                            return "" === c ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h = J.camelCase(c),
                        i = a.style,
                        j = J.cssHooks[h];
                    if (c = J.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                    if (g = typeof d, "string" === g && (f = Lb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d)) return;
                    if ("number" === g && !J.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)) try {
                        i[c] = d
                    } catch (k) {}
                }
            },
            css: function(a, c, d) {
                var e, f;
                return c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Db ? Db(a, c) : void 0
            },
            swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) f[e] = a.style[e], a.style[e] = b[e];
                d = c.call(a);
                for (e in b) a.style[e] = f[e];
                return d
            }
        }), J.curCSS = J.css, G.defaultView && G.defaultView.getComputedStyle && (Eb = function(a, b) {
            var c, d, e, f, g = a.style;
            return b = b.replace(Ib, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" === c && !J.contains(a.ownerDocument.documentElement, a) && (c = J.style(a, b))), !J.support.pixelMargin && e && Mb.test(b) && Kb.test(c) && (f = g.width, g.width = c, c = e.width, g.width = f), c
        }), G.documentElement.currentStyle && (Fb = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b],
                g = a.style;
            return null == f && g && (e = g[b]) && (f = e), Kb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
        }), Db = Eb || Fb, J.each(["height", "width"], function(a, b) {
            J.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 !== a.offsetWidth ? p(a, b, d) : J.swap(a, Nb, function() {
                        return p(a, b, d)
                    }) : void 0
                },
                set: function(a, b) {
                    return Jb.test(b) ? b + "px" : b
                }
            }
        }), J.support.opacity || (J.cssHooks.opacity = {
            get: function(a, b) {
                return Hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, b >= 1 && "" === J.trim(f.replace(Gb, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Gb.test(f) ? f.replace(Gb, e) : f + " " + e)
            }
        }), J(function() {
            J.support.reliableMarginRight || (J.cssHooks.marginRight = {
                get: function(a, b) {
                    return J.swap(a, {
                        display: "inline-block"
                    }, function() {
                        return b ? Db(a, "margin-right") : a.style.marginRight
                    })
                }
            })
        }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight;
            return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || J.css(a, "display"))
        }, J.expr.filters.visible = function(a) {
            return !J.expr.filters.hidden(a)
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            J.cssHooks[a + b] = {
                expand: function(c) {
                    var d, e = "string" == typeof c ? c.split(" ") : [c],
                        f = {};
                    for (d = 0; 4 > d; d++) f[a + Ob[d] + b] = e[d] || e[d - 2] || e[0];
                    return f
                }
            }
        });
        var Pb, Qb, Rb = /%20/g,
            Sb = /\[\]$/,
            Tb = /\r?\n/g,
            Ub = /#.*$/,
            Vb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Xb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Yb = /^(?:GET|HEAD)$/,
            Zb = /^\/\//,
            $b = /\?/,
            _b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ac = /^(?:select|textarea)/i,
            bc = /\s+/,
            cc = /([?&])_=[^&]*/,
            dc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            ec = J.fn.load,
            fc = {},
            gc = {},
            hc = ["*/"] + ["*"];
        try {
            Pb = I.href
        } catch (ic) {
            Pb = G.createElement("a"), Pb.href = "", Pb = Pb.href
        }
        Qb = dc.exec(Pb.toLowerCase()) || [], J.fn.extend({
            load: function(a, c, d) {
                if ("string" != typeof a && ec) return ec.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var g = "GET";
                c && (J.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
                var h = this;
                return J.ajax({
                    url: a,
                    type: g,
                    dataType: "html",
                    data: c,
                    complete: function(a, b, c) {
                        c = a.responseText, a.isResolved() && (a.done(function(a) {
                            c = a
                        }), h.html(f ? J("<div>").append(c.replace(_b, "")).find(f) : c)), d && h.each(d, [c, b, a])
                    }
                }), this
            },
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? J.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || ac.test(this.nodeName) || Wb.test(this.type))
                }).map(function(a, b) {
                    var c = J(this).val();
                    return null == c ? null : J.isArray(c) ? J.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Tb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Tb, "\r\n")
                    }
                }).get()
            }
        }), J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            J.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), J.each(["get", "post"], function(a, c) {
            J[c] = function(a, d, e, f) {
                return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: f
                })
            }
        }), J.extend({
            getScript: function(a, c) {
                return J.get(a, b, c, "script")
            },
            getJSON: function(a, b, c) {
                return J.get(a, b, c, "json")
            },
            ajaxSetup: function(a, b) {
                return b ? m(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings), m(a, b), a
            },
            ajaxSettings: {
                url: Pb,
                isLocal: Xb.test(Qb[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": hc
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: o(fc),
            ajaxTransport: o(gc),
            ajax: function(a, c) {
                function d(a, c, d, g) {
                    if (2 !== x) {
                        x = 2, i && clearTimeout(i), h = b, f = g || "", y.readyState = a > 0 ? 4 : 0;
                        var l, n, o, v, w, z = c,
                            A = d ? k(p, y, d) : b;
                        if (a >= 200 && 300 > a || 304 === a)
                            if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (J.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (J.etag[e] = w)), 304 === a) z = "notmodified", l = !0;
                            else try {
                                n = j(p, A), z = "success", l = !0
                            } catch (B) {
                                z = "parsererror", o = B
                            } else o = z, (!z || a) && (z = "error", 0 > a && (a = 0));
                        y.status = a, y.statusText = "" + (c || z), l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]), y.statusCode(u), u = b, m && r.trigger("ajax" + (l ? "Success" : "Error"), [y, p, l ? n : o]), t.fireWith(q, [y, z]), m && (r.trigger("ajaxComplete", [y, p]), --J.active || J.event.trigger("ajaxStop"))
                    }
                }
                "object" == typeof a && (c = a, a = b), c = c || {};
                var e, f, g, h, i, l, m, o, p = J.ajaxSetup({}, c),
                    q = p.context || p,
                    r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event,
                    s = J.Deferred(),
                    t = J.Callbacks("once memory"),
                    u = p.statusCode || {},
                    v = {},
                    w = {},
                    x = 0,
                    y = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!x) {
                                var c = a.toLowerCase();
                                a = w[c] = w[c] || a, v[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? f : null
                        },
                        getResponseHeader: function(a) {
                            var c;
                            if (2 === x) {
                                if (!g)
                                    for (g = {}; c = Vb.exec(f);) g[c[1].toLowerCase()] = c[2];
                                c = g[a.toLowerCase()]
                            }
                            return c === b ? null : c
                        },
                        overrideMimeType: function(a) {
                            return x || (p.mimeType = a), this
                        },
                        abort: function(a) {
                            return a = a || "abort", h && h.abort(a), d(0, a), this
                        }
                    };
                if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
                        if (a) {
                            var b;
                            if (2 > x)
                                for (b in a) u[b] = [u[b], a[b]];
                            else b = a[y.status], y.then(b, b)
                        }
                        return this
                    }, p.url = ((a || p.url) + "").replace(Ub, "").replace(Zb, Qb[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(bc), null == p.crossDomain && (l = dc.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Qb[1] && l[2] == Qb[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Qb[3] || ("http:" === Qb[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), n(fc, p, c, y), 2 === x) return !1;
                if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Yb.test(p.type), m && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += ($b.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
                    var z = J.now(),
                        A = p.url.replace(cc, "$1_=" + z);
                    p.url = A + (A === p.url ? ($b.test(p.url) ? "&" : "?") + "_=" + z : "")
                }(p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType), p.ifModified && (e = e || p.url, J.lastModified[e] && y.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && y.setRequestHeader("If-None-Match", J.etag[e])), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + hc + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(), !1;
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) y[o](p[o]);
                if (h = n(gc, p, c, y)) {
                    y.readyState = 1, m && r.trigger("ajaxSend", [y, p]), p.async && p.timeout > 0 && (i = setTimeout(function() {
                        y.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, h.send(v, d)
                    } catch (B) {
                        if (!(2 > x)) throw B;
                        d(-1, B)
                    }
                } else d(-1, "No Transport");
                return y
            },
            param: function(a, c) {
                var d = [],
                    e = function(a, b) {
                        b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a)) J.each(a, function() {
                    e(this.name, this.value)
                });
                else
                    for (var f in a) l(f, a[f], c, e);
                return d.join("&").replace(Rb, "+")
            }
        }), J.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var jc = J.now(),
            kc = /(\=)\?(&|$)|\?\?/i;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return J.expando + "_" + jc++
            }
        }), J.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e = "string" == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (kc.test(b.url) || e && kc.test(b.data))) {
                var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                    h = a[g],
                    i = b.url,
                    j = b.data,
                    k = "$1" + g + "$2";
                return b.jsonp !== !1 && (i = i.replace(kc, k), b.url === i && (e && (j = j.replace(kc, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
                    f = [a]
                }, d.always(function() {
                    a[g] = h, f && J.isFunction(h) && a[g](f[0])
                }), b.converters["script json"] = function() {
                    return f || J.error(g + " was not called"), f[0]
                }, b.dataTypes[0] = "json", "script"
            }
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    return J.globalEval(a), a
                }
            }
        }), J.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), J.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
                return {
                    send: function(e, f) {
                        c = G.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                            (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                        }, d.insertBefore(c, d.firstChild)
                    },
                    abort: function() {
                        c && c.onload(0, 1)
                    }
                }
            }
        });
        var lc, mc = a.ActiveXObject ? function() {
                for (var a in lc) lc[a](0, 1)
            } : !1,
            nc = 0;
        J.ajaxSettings.xhr = a.ActiveXObject ? function() {
                return !this.isLocal && i() || h()
            } : i,
            function(a) {
                J.extend(J.support, {
                    ajax: !!a,
                    cors: !!a && "withCredentials" in a
                })
            }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(c) {
                if (!c.crossDomain || J.support.cors) {
                    var d;
                    return {
                        send: function(e, f) {
                            var g, h, i = c.xhr();
                            if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                                for (h in c.xhrFields) i[h] = c.xhrFields[h];
                            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (h in e) i.setRequestHeader(h, e[h])
                            } catch (j) {}
                            i.send(c.hasContent && c.data || null), d = function(a, e) {
                                var h, j, k, l, m;
                                try {
                                    if (d && (e || 4 === i.readyState))
                                        if (d = b, g && (i.onreadystatechange = J.noop, mc && delete lc[g]), e) 4 !== i.readyState && i.abort();
                                        else {
                                            h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                            try {
                                                l.text = i.responseText
                                            } catch (a) {}
                                            try {
                                                j = i.statusText
                                            } catch (n) {
                                                j = ""
                                            }
                                            h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                        }
                                } catch (o) {
                                    e || f(-1, o)
                                }
                                l && f(h, j, l, k)
                            }, c.async && 4 !== i.readyState ? (g = ++nc, mc && (lc || (lc = {}, J(a).unload(mc)), lc[g] = d), i.onreadystatechange = d) : d()
                        },
                        abort: function() {
                            d && d(0, 1)
                        }
                    }
                }
            });
        var oc, pc, qc, rc, sc = {},
            tc = /^(?:toggle|show|hide)$/,
            uc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            vc = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ];
        J.fn.extend({
            show: function(a, b, c) {
                var f, g;
                if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
                for (var h = 0, i = this.length; i > h; h++) f = this[h], f.style && (g = f.style.display, !J._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), ("" === g && "none" === J.css(f, "display") || !J.contains(f.ownerDocument.documentElement, f)) && J._data(f, "olddisplay", d(f.nodeName)));
                for (h = 0; i > h; h++) f = this[h], f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = J._data(f, "olddisplay") || ""));
                return this
            },
            hide: function(a, b, c) {
                if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
                for (var d, f, g = 0, h = this.length; h > g; g++) d = this[g], d.style && (f = J.css(d, "display"), "none" !== f && !J._data(d, "olddisplay") && J._data(d, "olddisplay", f));
                for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
                return this
            },
            _toggle: J.fn.toggle,
            toggle: function(a, b, c) {
                var d = "boolean" == typeof a;
                return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                    var b = d ? a : J(this).is(":hidden");
                    J(this)[b ? "show" : "hide"]()
                }) : this.animate(e("toggle", 3), a, b, c), this
            },
            fadeTo: function(a, b, c, d) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, e) {
                function f() {
                    g.queue === !1 && J._mark(this);
                    var b, c, e, f, h, i, j, k, l, m, n, o = J.extend({}, g),
                        p = 1 === this.nodeType,
                        q = p && J(this).is(":hidden");
                    o.animatedProperties = {};
                    for (e in a)
                        if (b = J.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), (h = J.cssHooks[b]) && "expand" in h) {
                            i = h.expand(a[b]), delete a[b];
                            for (e in i) e in a || (a[e] = i[e])
                        } for (b in a) {
                        if (c = a[b], J.isArray(c) ? (o.animatedProperties[b] = c[1], c = a[b] = c[0]) : o.animatedProperties[b] = o.specialEasing && o.specialEasing[b] || o.easing || "swing", "hide" === c && q || "show" === c && !q) return o.complete.call(this);
                        p && ("height" === b || "width" === b) && (o.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != o.overflow && (this.style.overflow = "hidden");
                    for (e in a) f = new J.fx(this, o, e), c = a[e], tc.test(c) ? (n = J._data(this, "toggle" + e) || ("toggle" === c ? q ? "show" : "hide" : 0), n ? (J._data(this, "toggle" + e, "show" === n ? "hide" : "show"), f[n]()) : f[c]()) : (j = uc.exec(c), k = f.cur(), j ? (l = parseFloat(j[2]), m = j[3] || (J.cssNumber[e] ? "" : "px"), "px" !== m && (J.style(this, e, (l || 1) + m), k = (l || 1) / f.cur() * k, J.style(this, e, k + m)), j[1] && (l = ("-=" === j[1] ? -1 : 1) * l + k), f.custom(k, l, m)) : f.custom(k, c, ""));
                    return !0
                }
                var g = J.speed(b, c, e);
                return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = J.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
            },
            stop: function(a, c, d) {
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    function b(a, b, c) {
                        var e = b[c];
                        J.removeData(a, c, !0), e.stop(d)
                    }
                    var c, e = !1,
                        f = J.timers,
                        g = J._data(this);
                    if (d || J._unmark(!0, this), null == a)
                        for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                    else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                    for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                    (!d || !e) && J.dequeue(this, a)
                })
            }
        }), J.each({
            slideDown: e("show", 1),
            slideUp: e("hide", 1),
            slideToggle: e("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            J.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), J.extend({
            speed: function(a, b, c) {
                var d = a && "object" == typeof a ? J.extend({}, a) : {
                    complete: c || !c && b || J.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !J.isFunction(b) && b
                };
                return d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) {
                    J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this)
                }, d
            },
            easing: {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return -Math.cos(a * Math.PI) / 2 + .5
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
            }
        }), J.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this)
            },
            cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a, b = J.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
            },
            custom: function(a, c, d) {
                function e(a) {
                    return f.step(a)
                }
                var f = this,
                    h = J.fx;
                this.startTime = rc || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (J.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
                    J._data(f.elem, "fxshow" + f.prop) === b && (f.options.hide ? J._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && J._data(f.elem, "fxshow" + f.prop, f.end))
                }, e() && J.timers.push(e) && !qc && (qc = setInterval(h.tick, h.interval))
            },
            show: function() {
                var a = J._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = a || J.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), J(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b, c, d, e = rc || g(),
                    f = !0,
                    h = this.elem,
                    i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                    if (f) {
                        if (null != i.overflow && !J.support.shrinkWrapBlocks && J.each(["", "X", "Y"], function(a, b) {
                                h.style["overflow" + b] = i.overflow[a]
                            }), i.hide && J(h).hide(), i.hide || i.show)
                            for (b in i.animatedProperties) J.style(h, b, i.orig[b]), J.removeData(h, "fxshow" + b, !0), J.removeData(h, "toggle" + b, !0);
                        d = i.complete, d && (i.complete = !1, d.call(h))
                    }
                    return !1
                }
                return 1 / 0 == i.duration ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }, J.extend(J.fx, {
            tick: function() {
                for (var a, b = J.timers, c = 0; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
                b.length || J.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(qc), qc = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    J.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
                }
            }
        }), J.each(vc.concat.apply([], vc), function(a, b) {
            b.indexOf("margin") && (J.fx.step[b] = function(a) {
                J.style(a.elem, b, Math.max(0, a.now) + a.unit)
            })
        }), J.expr && J.expr.filters && (J.expr.filters.animated = function(a) {
            return J.grep(J.timers, function(b) {
                return a === b.elem
            }).length
        });
        var wc, xc = /^t(?:able|d|h)$/i,
            yc = /^(?:body|html)$/i;
        wc = "getBoundingClientRect" in G.documentElement ? function(a, b, d, e) {
            try {
                e = a.getBoundingClientRect()
            } catch (f) {}
            if (!e || !J.contains(d, a)) return e ? {
                top: e.top,
                left: e.left
            } : {
                top: 0,
                left: 0
            };
            var g = b.body,
                h = c(b),
                i = d.clientTop || g.clientTop || 0,
                j = d.clientLeft || g.clientLeft || 0,
                k = h.pageYOffset || J.support.boxModel && d.scrollTop || g.scrollTop,
                l = h.pageXOffset || J.support.boxModel && d.scrollLeft || g.scrollLeft,
                m = e.top + k - i,
                n = e.left + l - j;
            return {
                top: m,
                left: n
            }
        } : function(a, b, c) {
            for (var d, e = a.offsetParent, f = a, g = b.body, h = b.defaultView, i = h ? h.getComputedStyle(a, null) : a.currentStyle, j = a.offsetTop, k = a.offsetLeft;
                (a = a.parentNode) && a !== g && a !== c && (!J.support.fixedPosition || "fixed" !== i.position);) d = h ? h.getComputedStyle(a, null) : a.currentStyle, j -= a.scrollTop, k -= a.scrollLeft, a === e && (j += a.offsetTop, k += a.offsetLeft, J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !xc.test(a.nodeName)) && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), f = e, e = a.offsetParent), J.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), i = d;
            return ("relative" === i.position || "static" === i.position) && (j += g.offsetTop, k += g.offsetLeft), J.support.fixedPosition && "fixed" === i.position && (j += Math.max(c.scrollTop, g.scrollTop), k += Math.max(c.scrollLeft, g.scrollLeft)), {
                top: j,
                left: k
            }
        }, J.fn.offset = function(a) {
            if (arguments.length) return a === b ? this : this.each(function(b) {
                J.offset.setOffset(this, a, b)
            });
            var c = this[0],
                d = c && c.ownerDocument;
            return d ? c === d.body ? J.offset.bodyOffset(c) : wc(c, d, d.documentElement) : null
        }, J.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0), {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = J.css(a, "position");
                "static" === d && (a.style.position = "relative");
                var e, f, g = J(a),
                    h = g.offset(),
                    i = J.css(a, "top"),
                    j = J.css(a, "left"),
                    k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1,
                    l = {},
                    m = {};
                k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), J.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
            }
        }, J.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = yc.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                return c.top -= parseFloat(J.css(a, "marginTop")) || 0, c.left -= parseFloat(J.css(a, "marginLeft")) || 0, d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || G.body; a && !yc.test(a.nodeName) && "static" === J.css(a, "position");) a = a.offsetParent;
                    return a
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, d) {
            var e = /Y/.test(d);
            J.fn[a] = function(f) {
                return J.access(this, function(a, f, g) {
                    var h = c(a);
                    return g === b ? h ? d in h ? h[d] : J.support.boxModel && h.document.documentElement[f] || h.document.body[f] : a[f] : (h ? h.scrollTo(e ? J(h).scrollLeft() : g, e ? g : J(h).scrollTop()) : a[f] = g, void 0)
                }, a, f, arguments.length, null)
            }
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            var d = "client" + a,
                e = "scroll" + a,
                f = "offset" + a;
            J.fn["inner" + a] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(J.css(a, c, "padding")) : this[c]() : null
            }, J.fn["outer" + a] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(J.css(b, c, a ? "margin" : "border")) : this[c]() : null
            }, J.fn[c] = function(a) {
                return J.access(this, function(a, c, g) {
                    var h, i, j, k;
                    return J.isWindow(a) ? (h = a.document, i = h.documentElement[d], J.support.boxModel && i || h.body && h.body[d] || i) : 9 === a.nodeType ? (h = a.documentElement, h[d] >= h[e] ? h[d] : Math.max(a.body[e], h[e], a.body[f], h[f])) : g === b ? (j = J.css(a, c), k = parseFloat(j), J.isNumeric(k) ? k : j) : (J(a).css(c, g), void 0)
                }, c, a, arguments.length, null)
            }
        }), a.jQuery = a.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return J
        })
    }(window),
    function(a, b) {
        var c = 0,
            d = Array.prototype.slice,
            e = a.cleanData;
        a.cleanData = function(b) {
            for (var c, d = 0; null != (c = b[d]); d++) try {
                a(c).triggerHandler("remove")
            } catch (f) {}
            e(b)
        }, a.widget = function(b, c, d) {
            var e, f, g, h, i = b.split(".")[0];
            b = b.split(".")[1], e = i + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                return !!a.data(b, e)
            }, a[i] = a[i] || {}, f = a[i][b], g = a[i][b] = function(a, b) {
                return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, e) {
                a.isFunction(e) && (d[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        },
                        d = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = d, b = e.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }())
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: h.widgetEventPrefix || b
            }, d, {
                constructor: g,
                namespace: i,
                widgetName: b,
                widgetBaseClass: e,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
        }, a.widget.extend = function(c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
                for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function(c, e) {
            var f = e.prototype.widgetFullName;
            a.fn[c] = function(g) {
                var h = "string" == typeof g,
                    i = d.call(arguments, 1),
                    j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function() {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                }) : this.each(function() {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : new e(g, this)
                }), j
            }
        }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetName, this), a.data(d, this.widgetFullName, this), this._on(this.element, {
                    remove: function(a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function() {
                return this.element
            },
            option: function(c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof c)
                    if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                        for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                        if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                        f[c] = d
                    } else {
                        if (d === b) return this.options[c] === b ? null : this.options[c];
                        h[c] = d
                    } return this._setOptions(h), this
            },
            _setOptions: function(a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function(a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(b, c) {
                var d, e = this;
                c ? (b = d = a(b), this.bindings = this.bindings.add(b)) : (c = b, b = this.element, d = this.widget()), a.each(c, function(c, f) {
                    function g() {
                        return e.options.disabled === !0 || a(this).hasClass("ui-state-disabled") ? void 0 : ("string" == typeof f ? e[f] : f).apply(e, arguments)
                    }
                    "string" != typeof f && (g.guid = f.guid = f.guid || g.guid || a.guid++);
                    var h = c.match(/^(\w+)\s*(.*)$/),
                        i = h[1] + e.eventNamespace,
                        j = h[2];
                    j ? d.delegate(j, i, g) : b.bind(i, g)
                })
            },
            _off: function(a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function(a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function(b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function(b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function(b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent, f)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(b, c) {
            a.Widget.prototype["_" + b] = function(d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && (a.effects.effect[h] || a.uiBackCompat !== !1 && a.effects[h]) ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.uiBackCompat !== !1 && (a.Widget.prototype._getCreateOptions = function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        })
    }(jQuery), jQuery.effects || function(a, b) {
        var c = a.uiBackCompat !== !1,
            d = "ui-effects-";
        a.effects = {
                effect: {}
            },
            function(b, c) {
                function d(a, b, c) {
                    var d = m[b.type] || {};
                    return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
                }

                function e(a) {
                    var c = k(),
                        d = c._rgba = [];
                    return a = a.toLowerCase(), p(j, function(b, e) {
                        var f, g = e.re.exec(a),
                            h = g && e.parse(g),
                            i = e.space || "rgba";
                        return h ? (f = c[i](h), c[l[i].cache] = f[l[i].cache], d = c._rgba = f._rgba, !1) : void 0
                    }), d.length ? ("0,0,0,0" === d.join() && b.extend(d, g.transparent), c) : g[a]
                }

                function f(a, b, c) {
                    return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
                }
                var g, h = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                    i = /^([\-+])=\s*(\d+\.?\d*)/,
                    j = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [a[1], a[2], a[3], a[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(a) {
                            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(a) {
                            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(a) {
                            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(a) {
                            return [a[1], a[2] / 100, a[3] / 100, a[4]]
                        }
                    }],
                    k = b.Color = function(a, c, d, e) {
                        return new b.Color.fn.parse(a, c, d, e)
                    },
                    l = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    m = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    n = k.support = {},
                    o = b("<p>")[0],
                    p = b.each;
                o.style.cssText = "background-color:rgba(1,1,1,.5)", n.rgba = o.style.backgroundColor.indexOf("rgba") > -1, p(l, function(a, b) {
                    b.cache = "_" + a, b.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), k.fn = b.extend(k.prototype, {
                    parse: function(f, h, i, j) {
                        if (f === c) return this._rgba = [null, null, null, null], this;
                        (f.jquery || f.nodeType) && (f = b(f).css(h), h = c);
                        var m = this,
                            n = b.type(f),
                            o = this._rgba = [];
                        return h !== c && (f = [f, h, i, j], n = "array"), "string" === n ? this.parse(e(f) || g._default) : "array" === n ? (p(l.rgba.props, function(a, b) {
                            o[b.idx] = d(f[b.idx], b)
                        }), this) : "object" === n ? (f instanceof k ? p(l, function(a, b) {
                            f[b.cache] && (m[b.cache] = f[b.cache].slice())
                        }) : p(l, function(b, c) {
                            var e = c.cache;
                            p(c.props, function(a, b) {
                                if (!m[e] && c.to) {
                                    if ("alpha" === a || null == f[a]) return;
                                    m[e] = c.to(m._rgba)
                                }
                                m[e][b.idx] = d(f[a], b, !0)
                            }), m[e] && a.inArray(null, m[e].slice(0, 3)) < 0 && (m[e][3] = 1, c.from && (m._rgba = c.from(m[e])))
                        }), this) : void 0
                    },
                    is: function(a) {
                        var b = k(a),
                            c = !0,
                            d = this;
                        return p(l, function(a, e) {
                            var f, g = b[e.cache];
                            return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], p(e.props, function(a, b) {
                                return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                            })), c
                        }), c
                    },
                    _space: function() {
                        var a = [],
                            b = this;
                        return p(l, function(c, d) {
                            b[d.cache] && a.push(c)
                        }), a.pop()
                    },
                    transition: function(a, b) {
                        var c = k(a),
                            e = c._space(),
                            f = l[e],
                            g = 0 === this.alpha() ? k("transparent") : this,
                            h = g[f.cache] || f.to(g._rgba),
                            i = h.slice();
                        return c = c[f.cache], p(f.props, function(a, e) {
                            var f = e.idx,
                                g = h[f],
                                j = c[f],
                                k = m[e.type] || {};
                            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = d((j - g) * b + g, e)))
                        }), this[e](i)
                    },
                    blend: function(a) {
                        if (1 === this._rgba[3]) return this;
                        var c = this._rgba.slice(),
                            d = c.pop(),
                            e = k(a)._rgba;
                        return k(b.map(c, function(a, b) {
                            return (1 - d) * e[b] + d * a
                        }))
                    },
                    toRgbaString: function() {
                        var a = "rgba(",
                            c = b.map(this._rgba, function(a, b) {
                                return null == a ? b > 2 ? 1 : 0 : a
                            });
                        return 1 === c[3] && (c.pop(), a = "rgb("), a + c.join() + ")"
                    },
                    toHslaString: function() {
                        var a = "hsla(",
                            c = b.map(this.hsla(), function(a, b) {
                                return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                            });
                        return 1 === c[3] && (c.pop(), a = "hsl("), a + c.join() + ")"
                    },
                    toHexString: function(a) {
                        var c = this._rgba.slice(),
                            d = c.pop();
                        return a && c.push(~~(255 * d)), "#" + b.map(c, function(a) {
                            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), k.fn.parse.prototype = k.fn, l.hsla.to = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b, c, d = a[0] / 255,
                        e = a[1] / 255,
                        f = a[2] / 255,
                        g = a[3],
                        h = Math.max(d, e, f),
                        i = Math.min(d, e, f),
                        j = h - i,
                        k = h + i,
                        l = .5 * k;
                    return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === l || 1 === l ? l : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
                }, l.hsla.from = function(a) {
                    if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                    var b = a[0] / 360,
                        c = a[1],
                        d = a[2],
                        e = a[3],
                        g = .5 >= d ? d * (1 + c) : d + c - d * c,
                        h = 2 * d - g;
                    return [Math.round(255 * f(h, g, b + 1 / 3)), Math.round(255 * f(h, g, b)), Math.round(255 * f(h, g, b - 1 / 3)), e]
                }, p(l, function(a, e) {
                    var f = e.props,
                        g = e.cache,
                        h = e.to,
                        j = e.from;
                    k.fn[a] = function(a) {
                        if (h && !this[g] && (this[g] = h(this._rgba)), a === c) return this[g].slice();
                        var e, i = b.type(a),
                            l = "array" === i || "object" === i ? a : arguments,
                            m = this[g].slice();
                        return p(f, function(a, b) {
                            var c = l["object" === i ? a : b.idx];
                            null == c && (c = m[b.idx]), m[b.idx] = d(c, b)
                        }), j ? (e = k(j(m)), e[g] = m, e) : k(m)
                    }, p(f, function(c, d) {
                        k.fn[c] || (k.fn[c] = function(e) {
                            var f, g = b.type(e),
                                h = "alpha" === c ? this._hsla ? "hsla" : "rgba" : a,
                                j = this[h](),
                                k = j[d.idx];
                            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = b.type(e)), null == e && d.empty ? this : ("string" === g && (f = i.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[d.idx] = e, this[h](j)))
                        })
                    })
                }), p(h, function(a, c) {
                    b.cssHooks[c] = {
                        set: function(a, d) {
                            var f, g, h = "";
                            if ("string" !== b.type(d) || (f = e(d))) {
                                if (d = k(f || d), !n.rgba && 1 !== d._rgba[3]) {
                                    for (g = "backgroundColor" === c ? a.parentNode : a;
                                        ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = b.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {}
                                    d = d.blend(h && "transparent" !== h ? h : "_default")
                                }
                                d = d.toRgbaString()
                            }
                            try {
                                a.style[c] = d
                            } catch (j) {}
                        }
                    }, b.fx.step[c] = function(a) {
                        a.colorInit || (a.start = k(a.elem, c), a.end = k(a.end), a.colorInit = !0), b.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
                    }
                }), b.cssHooks.borderColor = {
                    expand: function(a) {
                        var b = {};
                        return p(["Top", "Right", "Bottom", "Left"], function(c, d) {
                            b["border" + d + "Color"] = a
                        }), b
                    }
                }, g = b.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function c() {
                    var b, c, d = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                        e = {};
                    if (d && d.length && d[0] && d[d[0]])
                        for (c = d.length; c--;) b = d[c], "string" == typeof d[b] && (e[a.camelCase(b)] = d[b]);
                    else
                        for (b in d) "string" == typeof d[b] && (e[b] = d[b]);
                    return e
                }

                function d(b, c) {
                    var d, e, g = {};
                    for (d in c) e = c[d], b[d] !== e && !f[d] && (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e);
                    return g
                }
                var e = ["add", "remove", "toggle"],
                    f = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                    a.fx.step[c] = function(a) {
                        ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), a.setAttr = !0)
                    }
                }), a.effects.animateClass = function(b, f, g, h) {
                    var i = a.speed(f, g, h);
                    return this.queue(function() {
                        var f, g = a(this),
                            h = g.attr("class") || "",
                            j = i.children ? g.find("*").andSelf() : g;
                        j = j.map(function() {
                            var b = a(this);
                            return {
                                el: b,
                                start: c.call(this)
                            }
                        }), f = function() {
                            a.each(e, function(a, c) {
                                b[c] && g[c + "Class"](b[c])
                            })
                        }, f(), j = j.map(function() {
                            return this.end = c.call(this.el[0]), this.diff = d(this.start, this.end), this
                        }), g.attr("class", h), j = j.map(function() {
                            var b = this,
                                c = a.Deferred(),
                                d = jQuery.extend({}, i, {
                                    queue: !1,
                                    complete: function() {
                                        c.resolve(b)
                                    }
                                });
                            return this.el.animate(this.diff, d), c.promise()
                        }), a.when.apply(a, j.get()).done(function() {
                            f(), a.each(arguments, function() {
                                var b = this.el;
                                a.each(this.diff, function(a) {
                                    b.css(a, "")
                                })
                            }), i.complete.call(g[0])
                        })
                    })
                }, a.fn.extend({
                    _addClass: a.fn.addClass,
                    addClass: function(b, c, d, e) {
                        return c ? a.effects.animateClass.call(this, {
                            add: b
                        }, c, d, e) : this._addClass(b)
                    },
                    _removeClass: a.fn.removeClass,
                    removeClass: function(b, c, d, e) {
                        return c ? a.effects.animateClass.call(this, {
                            remove: b
                        }, c, d, e) : this._removeClass(b)
                    },
                    _toggleClass: a.fn.toggleClass,
                    toggleClass: function(c, d, e, f, g) {
                        return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.call(this, d ? {
                            add: c
                        } : {
                            remove: c
                        }, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {
                            toggle: c
                        }, d, e, f)
                    },
                    switchClass: function(b, c, d, e, f) {
                        return a.effects.animateClass.call(this, {
                            add: c,
                            remove: b
                        }, d, e, f)
                    }
                })
            }(),
            function() {
                function e(b, c, d, e) {
                    return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                        effect: b
                    }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                }

                function f(b) {
                    return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? !1 : c && a.effects[b] ? !1 : !0
                }
                a.extend(a.effects, {
                    version: "1.9.1",
                    save: function(a, b) {
                        for (var c = 0; c < b.length; c++) null !== b[c] && a.data(d + b[c], a[0].style[b[c]])
                    },
                    restore: function(a, c) {
                        var e, f;
                        for (f = 0; f < c.length; f++) null !== c[f] && (e = a.data(d + c[f]), e === b && (e = ""), a.css(c[f], e))
                    },
                    setMode: function(a, b) {
                        return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                    },
                    getBaseline: function(a, b) {
                        var c, d;
                        switch (a[0]) {
                            case "top":
                                c = 0;
                                break;
                            case "middle":
                                c = .5;
                                break;
                            case "bottom":
                                c = 1;
                                break;
                            default:
                                c = a[0] / b.height
                        }
                        switch (a[1]) {
                            case "left":
                                d = 0;
                                break;
                            case "center":
                                d = .5;
                                break;
                            case "right":
                                d = 1;
                                break;
                            default:
                                d = a[1] / b.width
                        }
                        return {
                            x: d,
                            y: c
                        }
                    },
                    createWrapper: function(b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                        var c = {
                                width: b.outerWidth(!0),
                                height: b.outerHeight(!0),
                                "float": b.css("float")
                            },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            e = {
                                width: b.width(),
                                height: b.height()
                            },
                            f = document.activeElement;
                        try {
                            f.id
                        } catch (g) {
                            f = document.body
                        }
                        return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                            position: "relative"
                        }), b.css({
                            position: "relative"
                        })) : (a.extend(c, {
                            position: b.css("position"),
                            zIndex: b.css("z-index")
                        }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                            c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                        }), b.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), b.css(e), d.css(c).show()
                    },
                    removeWrapper: function(b) {
                        var c = document.activeElement;
                        return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                    },
                    setTransition: function(b, c, d, e) {
                        return e = e || {}, a.each(c, function(a, c) {
                            var f = b.cssUnit(c);
                            f[0] > 0 && (e[c] = f[0] * d + f[1])
                        }), e
                    }
                }), a.fn.extend({
                    effect: function() {
                        function b(b) {
                            function c() {
                                a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                            }
                            var e = a(this),
                                f = d.complete,
                                g = d.mode;
                            (e.is(":hidden") ? "hide" === g : "show" === g) ? c(): h.call(e[0], d, c)
                        }
                        var d = e.apply(this, arguments),
                            f = d.mode,
                            g = d.queue,
                            h = a.effects.effect[d.effect],
                            i = !h && c && a.effects[d.effect];
                        return a.fx.off || !h && !i ? f ? this[f](d.duration, d.complete) : this.each(function() {
                            d.complete && d.complete.call(this)
                        }) : h ? g === !1 ? this.each(b) : this.queue(g || "fx", b) : i.call(this, {
                            options: d,
                            duration: d.duration,
                            callback: d.complete,
                            mode: d.mode
                        })
                    },
                    _show: a.fn.show,
                    show: function(a) {
                        if (f(a)) return this._show.apply(this, arguments);
                        var b = e.apply(this, arguments);
                        return b.mode = "show", this.effect.call(this, b)
                    },
                    _hide: a.fn.hide,
                    hide: function(a) {
                        if (f(a)) return this._hide.apply(this, arguments);
                        var b = e.apply(this, arguments);
                        return b.mode = "hide", this.effect.call(this, b)
                    },
                    __toggle: a.fn.toggle,
                    toggle: function(b) {
                        if (f(b) || "boolean" == typeof b || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                        var c = e.apply(this, arguments);
                        return c.mode = "toggle", this.effect.call(this, c)
                    },
                    cssUnit: function(b) {
                        var c = this.css(b),
                            d = [];
                        return a.each(["em", "px", "%", "pt"], function(a, b) {
                            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                        }), d
                    }
                })
            }(),
            function() {
                var b = {};
                a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                    b[c] = function(b) {
                        return Math.pow(b, a + 2)
                    }
                }), a.extend(b, {
                    Sine: function(a) {
                        return 1 - Math.cos(a * Math.PI / 2)
                    },
                    Circ: function(a) {
                        return 1 - Math.sqrt(1 - a * a)
                    },
                    Elastic: function(a) {
                        return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(a) {
                        return a * a * (3 * a - 2)
                    },
                    Bounce: function(a) {
                        for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                    }
                }), a.each(b, function(b, c) {
                    a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                        return 1 - c(1 - a)
                    }, a.easing["easeInOut" + b] = function(a) {
                        return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function(a) {
        a.effects.effect.highlight = function(b, c) {
            var d = a(this),
                e = ["backgroundImage", "backgroundColor", "opacity"],
                f = a.effects.setMode(d, b.mode || "show"),
                g = {
                    backgroundColor: d.css("backgroundColor")
                };
            "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
                backgroundImage: "none",
                backgroundColor: b.color || "#ffff99"
            }).animate(g, {
                queue: !1,
                duration: b.duration,
                easing: b.easing,
                complete: function() {
                    "hide" === f && d.hide(), a.effects.restore(d, e), c()
                }
            })
        }
    }(jQuery),
    function(a) {
        function b(a) {
            return "object" == typeof a ? a : {
                top: a,
                left: a
            }
        }
        var c = a.scrollTo = function(b, c, d) {
            a(window).scrollTo(b, c, d)
        };
        c.defaults = {
            axis: "xy",
            duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, c.window = function() {
            return a(window)._scrollable()
        }, a.fn._scrollable = function() {
            return this.map(function() {
                var b = this,
                    c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!c) return b;
                var d = (b.contentWindow || b).document || b.ownerDocument || b;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
            })
        }, a.fn.scrollTo = function(d, e, f) {
            return "object" == typeof e && (f = e, e = 0), "function" == typeof f && (f = {
                onAfter: f
            }), "max" == d && (d = 9e9), f = a.extend({}, c.defaults, f), e = e || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (e /= 2), f.offset = b(f.offset), f.over = b(f.over), this._scrollable().each(function() {
                function g(a) {
                    j.animate(l, e, f.easing, a && function() {
                        a.call(this, d, f)
                    })
                }
                if (null != d) {
                    var h, i = this,
                        j = a(i),
                        k = d,
                        l = {},
                        m = j.is("html,body");
                    switch (typeof k) {
                        case "number":
                        case "string":
                            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                                k = b(k);
                                break
                            }
                            if (k = a(k, this), !k.length) return;
                        case "object":
                            (k.is || k.style) && (h = (k = a(k)).offset())
                    }
                    a.each(f.axis.split(""), function(a, b) {
                        var d = "x" == b ? "Left" : "Top",
                            e = d.toLowerCase(),
                            n = "scroll" + d,
                            o = i[n],
                            p = c.max(i, b);
                        if (h) l[n] = h[e] + (m ? 0 : o - j.offset()[e]), f.margin && (l[n] -= parseInt(k.css("margin" + d)) || 0, l[n] -= parseInt(k.css("border" + d + "Width")) || 0), l[n] += f.offset[e] || 0, f.over[e] && (l[n] += k["x" == b ? "width" : "height"]() * f.over[e]);
                        else {
                            var q = k[e];
                            l[n] = q.slice && "%" == q.slice(-1) ? parseFloat(q) / 100 * p : q
                        }
                        f.limit && /^\d+$/.test(l[n]) && (l[n] = l[n] <= 0 ? 0 : Math.min(l[n], p)), !a && f.queue && (o != l[n] && g(f.onAfterFirst), delete l[n])
                    }), g(f.onAfter)
                }
            }).end()
        }, c.max = function(b, c) {
            var d = "x" == c ? "Width" : "Height",
                e = "scroll" + d;
            if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
            var f = "client" + d,
                g = b.ownerDocument.documentElement,
                h = b.ownerDocument.body;
            return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
        }
    }(jQuery), ! function(a) {
        "use strict";

        function b(b, c) {
            var d, e = a.proxy(this.process, this),
                f = a(b).is("body") ? a(window) : a(b);
            this.options = a.extend({}, a.fn.scrollspy.defaults, c), a(window).on("scroll.scroll-spy.data-api", e), this.$scrollElement = f, this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " li > a", this.$body = a("body"), this.refresh(), this.process()
        }
        b.prototype = {
            constructor: b,
            refresh: function() {
                var b, c = this;
                this.offsets = a([]), this.targets = a([]), b = this.$body.find(this.selector).map(function() {
                    var b = a(this),
                        c = b.data("target") || b.attr("href"),
                        d = /^#\w/.test(c) && a(c);
                    return d && d.length && [
                        [d.offset().top, c]
                    ] || null
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).each(function() {
                    c.offsets.push(this[0]), c.targets.push(this[1])
                })
            },
            process: function() {
                var b, c = a(window).scrollTop() + this.options.offset,
                    d = this.offsets,
                    e = this.targets,
                    f = this.activeTarget;
                for (b = d.length; b--;) f != e[b] && c >= d[b] && (!d[b + 1] || c <= d[b + 1]) && this.activate(e[b])
            },
            activate: function(b) {
                var c, d;
                this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
            }
        }, a.fn.scrollspy = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
            offset: 10
        }
    }(window.jQuery),
    function(a) {
        a.widget("onepress.fixedscroll", {
            options: {
                bottomBorder: null
            },
            _create: function() {
                var a = this,
                    b = function() {
                        return /webOS|Android|iPad|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
                    };
                b() || (this._css = {
                    position: a.element.css("position"),
                    top: a.element.css("top")
                }, this._elementOffsets = this.element.offset(), this._elementHeight = this.element.outerHeight(), this._elementWidth = this.element.outerWidth(), this._parentOffsets = this.element.parent().offset(), this.element.width(this.element.width), this.options.bottomBorder && (this._isBottomBorder = !0, this._bottomBorder = this.options.bottomBorder.offset().top + this.options.bottomBorder.outerHeight()), this._createPlaceholder(), this._initHadlers())
            },
            _createPlaceholder: function() {
                this._placeholderMarkup = a("<div class='markup'></div>").width(this.element.outerWidth(!0)).height(this.element.outerHeight(!0)).css("float", this.element.css("float"))
            },
            _initHadlers: function() {
                this._initScrollHandler()
            },
            _initScrollHandler: function() {
                var b = this;
                a(window).scroll(function() {
                    var c = a(window).scrollTop();
                    b._alreadyFixed && (b._isBottomBorder && "b" != b._fixType && c + b._elementHeight > b._bottomBorder ? (b.element.css({
                        position: "absolute",
                        top: b._bottomBorder - b._elementHeight - b._parentOffsets.top + "px"
                    }), b._fixType = "b") : "t" != b._fixType && c + b._elementHeight <= b._bottomBorder && (b.element.css({
                        position: "fixed",
                        top: "0px"
                    }), b._fixType = "t")), c > b._elementOffsets.top && !b._alreadyFixed ? (b.element.css({
                        position: "fixed",
                        top: "0px",
                        width: b.element.width()
                    }), b.placeholder = b._placeholderMarkup.clone(), b.placeholder.insertAfter(b.element), b._alreadyFixed = !0) : c <= b._elementOffsets.top && b._alreadyFixed && (b.element.css({
                        position: b._css.position,
                        top: b._css.top
                    }), b.placeholder && (b.placeholder.remove(), b.placeholder = null), b._alreadyFixed = !1)
                })
            }
        })
    }(jQuery),
    function(a) {
        a.pandalocker || (a.pandalocker = {}), a.pandalocker.lang || (a.pandalocker.lang = {}), a.pandalocker.lang.defaults || (a.pandalocker.lang.defaults = {}), a.pandalocker.lang.defaults = {
            confirm_screen_title: "Please Confirm Your Email",
            confirm_screen_instructiont: "We have sent a confirmation email to {email}. Please click on the confirmation link in the email to reveal the content.",
            confirm_screen_note1: "The content will be unlocked automatically within 10 seconds after confirmation.",
            confirm_screen_note2: "Note delivering the email may take several minutes.",
            confirm_screen_cancel: "(cancel)",
            confirm_screen_open: "Open my inbox on {service}",
            onestep_screen_title: "One Step To Complete",
            onestep_screen_instructiont: "Please enter your email below to continue.",
            onestep_screen_button: "OK, complete",
            signin_long: "Sign in via {name}",
            signin_short: "via {name}",
            signin_facebook_name: "Facebook",
            signin_twitter_name: "Twitter",
            signin_google_name: "Google",
            signin_linkedin_name: "LinkedIn",
            misc_data_processing: "Processing data, please wait...",
            misc_or_enter_email: "or enter your email manually to sign in",
            misc_enter_your_name: "enter your name",
            misc_enter_your_email: "enter your email address",
            misc_your_agree_with: "By clicking on the button(s), you agree with {links}",
            misc_terms_of_use: "Terms of Use",
            misc_privacy_policy: "Privacy Policy",
            misc_or_wait: "or wait {timer}s",
            misc_close: "Close",
            misc_or: "OR",
            errors_empty_email: "Please enter your email address.",
            errors_inorrect_email: "It seems you entered an incorrect email address. Please check it.",
            errors_empty_name: "Please enter your name.",
            errors_empty_field: "Please fill this field.",
            errors_invalid_value: "Invalid value. Please check the value you entered.",
            errors_invalid_date: "Please enter a valid date.",
            errors_invalid_month: "Please enter a valid month number (between 01 and 12).",
            errors_invalid_day: "Please enter a valid day number (between 01 and 31).",
            errors_subscription_canceled: "You have canceled your subscription.",
            errors_not_signed_in: "Sorry, but you have not signed in. Please try again.",
            res_errors_not_granted: "Sorry, but you have not granted all the required permissions ({permissions}). Please try again.",
            error: "error",
            noSpam: "Your email address is 100% safe from spam!",
            errors: {
                ajaxError: "Unexpected ajax error. Please check the console log to get more details.",
                unableToLoadSDK: 'Unable to load SDK script for "{0}" due to the error "{1}". Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) or usage of private tabs in FireFox may cause this issue. Turn them off and try again.',
                unableToCreateControl: "Unable to create ({0}). Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) can cause this issue. Turn them off and try again.",
                invlidFacebookAppId: "Invalid App ID or given URL is not allowed by the Application configuration: One or more of the given URLs is not allowed by the App's settings.  It must match the Website URL or Canvas URL, or the domain must be a subdomain of one of the App's domains.",
                emptyFBAppIdError: "Please set your Facebook App ID.",
                emptyTwitterFollowUrlError: "Please set an URL of your Twitter profile.",
                tweetNotFound: "Please make sure that you have posted the tweet. Unfortunately we have not manage to find the tweet in your account.",
                followingNotFound: "Please make sure that you have followed us. Unfortunately we have not manage to find you in the list of followers.",
                unsupportedTwitterTweetLayout: "The Twitter Tweet Button doesn't support the vertical layout. Please remove the Tweet button or select another theme.",
                unsupportedTwitterFollowLayout: "The Twitter Follow Button doesn't support the vertical layout. Please remove the Follow button or select another theme.",
                emptyYoutubeChannelId: "Please set your Youtube Channel ID.",
                emptyGoogleClientId: "Please set your Google Client ID.",
                unsupportedYoutubeSubscribeLayout: "The Youtube Subscribe Button doesn't support the vertical layout. Please remove the Subscribe button or select another theme."
            },
            scopes: {
                signinLocker: {
                    defaultHeader: "Sing In To Unlock This Content",
                    defaultMessage: "Please sign in. Just click one of the buttons below to get instant access.",
                    btnSubscribe: "sign in to unlock",
                    viaSignInLong: "{long}",
                    viaSignInShort: "{short}"
                },
                emailLocker: {
                    defaultHeader: "This Content Is Only For Subscribers",
                    defaultMessage: "Please subscribe to unlock this content. Just enter your email.",
                    btnSubscribe: "subscribe to unlock",
                    viaSignInLong: "{short}",
                    viaSignInShort: "{name}"
                },
                socialLocker: {
                    defaultHeader:      "Sharing is caring",
                    defaultMessage:     "Please support us, use one of the buttons below to download the Adminmart."
                }
            },
            connectButtons: {
                defaultMessage: "subscribe via your social profile by one click",
                facebook: {},
                google: {
                    clientIdMissed: "The Google Client ID is not set. You need to generate a client ID before using the button.",
                    unexpectedError: "Unable to sign in. Unexpected error occurred: {0}"
                },
                twitter: {
                    proxyEmpty: "The proxy URL is empty. The proxy is used to call Twitter API."
                },
                linkedin: {
                    clientIdMissed: "The LinkedIn Client ID or Client Secret is not set. You need to set these settings before using the button."
                },
                defaultSeparator: "or",
                errorYouTubeChannelMissed: "Please set an ID of your Youtube channel to subscribe.",
                errorLinkedInCompanyNotFound: "The LinkedIn company '{0}' not found.",
                errorLinkedInCompanyMissed: "Please specify the LinkedIn company ID or name to follow.",
                errorTwitterUserMissed: "Please specify the Twitter user name to follow.",
                errorTwitterMessageMissed: "Please specify the message to tweet."
            },
            subscription: {
                defaultText: "Cannot sign in via social networks? Enter your email manually.",
                defaultButtonText: "done, sign in to unlock"
            },
            socialButtons: {
                facebookLike: "like us",
                facebookShare: "share",
                twitterTweet: "tweet",
                twitterFollow: "follow us",
                googlePlus: "+1 us",
                googleShare: "share",
                youtubeSubscribe: "subscribe",
                linkedinShare: "share"
            }
        }, a.pandalocker.lang = a.pandalocker.lang.defaults, window.__pandalockers && window.__pandalockers.lang && (a.pandalocker.lang = a.extend(a.pandalocker.lang, window.__pandalockers.lang), window.__pandalockers.lang = null)
    }(jQuery),
    function(a) {
        a.pandalocker.themes || (a.pandalocker.themes = {}), a.pandalocker.themes["great-attractor"] = {}, a.pandalocker.themes["friendly-giant"] = {
            theme: {
                fonts: [{
                    name: "Open Sans",
                    styles: ["400", "700"]
                }]
            }
        }, a.pandalocker.themes["dark-force"] = {
            theme: {
                fonts: [{
                    name: "Montserrat",
                    styles: ["400", "700"]
                }]
            }
        }, a.pandalocker.themes.starter = {
            socialButtons: {
                layout: "horizontal",
                counter: !0,
                flip: !1
            }
        }, a.pandalocker.themes.secrets = {
            socialButtons: {
                layout: "horizontal",
                counter: !0,
                flip: !0
            }
        }, a.pandalocker.themes.dandyish = {
            socialButtons: {
                unsupported: ["twitter-follow"],
                layout: "vertical",
                counter: !0,
                flip: !1
            }
        }, a.pandalocker.themes.glass = {
            socialButtons: {
                layout: "horizontal",
                counter: !0,
                flip: !1
            }
        }, a.pandalocker.themes.flat = {
            socialButtons: {
                layout: "horizontal",
                counter: !0,
                flip: !0
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker || (a.pandalocker = {}), a.pandalocker.data || (a.pandalocker.data = {}), a.pandalocker.entity || (a.pandalocker.entity = {}), a.pandalocker.groups || (a.pandalocker.groups = {}), a.pandalocker.controls || (a.pandalocker.controls = {}), a.pandalocker.tools || (a.pandalocker.tools = {}), a.pandalocker.storages || (a.pandalocker.storages = {}), a.pandalocker.services || (a.pandalocker.services = {}), a.pandalocker.extras || (a.pandalocker.extras = {}), a.pandalocker.controls["social-buttons"] || (a.pandalocker.controls["social-buttons"] = {}), a.pandalocker.controls["connect-buttons"] || (a.pandalocker.controls["connect-buttons"] = {}), a.pandalocker.controls.subscription || (a.pandalocker.controls.subscription = {})
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker || (a.pandalocker = {}), a.pandalocker.filters = a.pandalocker.filters || {
            _items: {},
            _priorities: {},
            run: function(a, b) {
                var c = b && b.length > 0 ? b[0] : null;
                if (!this._items[a]) return c;
                for (var d in this._priorities[a])
                    if (this._priorities[a].hasOwnProperty(d))
                        for (var e = this._priorities[a][d], f = 0; f < this._items[a][e].length; f++) {
                            var g = this._items[a][e][f];
                            c = g.apply(g, b)
                        }
                return c
            },
            add: function(b, c, d) {
                d || (d = 10), this._items[b] || (this._items[b] = {}), this._items[b][d] || (this._items[b][d] = []), this._items[b][d].push(c), this._priorities[b] || (this._priorities[b] = []), -1 === a.inArray(d, this._priorities[b]) && this._priorities[b].push(d), this._priorities[b].sort(function(a, b) {
                    return a - b
                })
            }
        }, a.pandalocker.hooks = a.pandalocker.hooks || {
            run: function(b, c) {
                a.pandalocker.filters.run(b, c)
            },
            add: function(b, c, d) {
                a.pandalocker.filters.add(b, c, d)
            }
        }
    }(jQuery),
    function(a, b, c) {
        "use strict";
        c.pandalocker || (c.pandalocker = {}), c.pandalocker.deferred = c.Deferred || function() {
            var a = {
                done: [],
                fail: [],
                always: []
            };
            this.resolved = !1, this.rejected = !1, this.arg1 = null, this.arg2 = null, this.resolve = function(b, c) {
                if (this.resolved || this.rejected) return this;
                this.resolved = !0, this.arg1 = b, this.arg2 = c;
                for (var d = 0; d < a.done.length; d++) a.done[d](b, c);
                for (var d = 0; d < a.always.length; d++) a.always[d](b, c);
                return this
            }, this.reject = function(b, c) {
                if (this.resolved || this.rejected) return this;
                this.rejected = !0, this.arg1 = b, this.arg2 = c;
                for (var d = 0; d < a.fail.length; d++) a.fail[d](b, c);
                for (var d = 0; d < a.always.length; d++) a.always[d](b, c);
                return this
            }, this.done = this.success = function(b) {
                return this.resolved ? b && b(this.arg1, this.arg2) : a.done.push(b), this
            }, this.fail = this.error = function(b) {
                return this.rejected ? b && b(this.arg1, this.arg2) : a.fail.push(b), this
            }, this.always = function(b) {
                return this.resolved || this.rejected ? b && b(this.arg1, this.arg2) : a.always.push(b), this
            }, this.promise = function() {
                return this
            }
        }
    }(window, document, jQuery),
    function(a) {
        "use strict";
        a.pandalocker.tools || (a.pandalocker.tools = {}), a.pandalocker.tools.extend = function(b) {
            function c() {}
            return c.prototype = a.extend(!0, {}, b), new c
        }, a.pandalocker.error = function(a) {
            this.onpsl = !0, this.message = a
        }, a.pandalocker.tools.normilizeHtmlOption = function(b) {
            return b ? "function" == typeof b ? b(this) : "string" == typeof b ? a("<div>" + b + "</div>") : "object" == typeof b ? b.clone() : b : b
        }, a.pandalocker.tools.diffArrays = function(b, c) {
            return a.grep(b, function(b) {
                return -1 == a.inArray(b, c)
            })
        }, a.pandalocker.tools.unionArrays = function(b, c) {
            return a.grep(b, function(b) {
                return -1 !== a.inArray(b, c)
            })
        }, a.pandalocker.tools.cookie = a.pandalocker.tools.cookie || function(b, c, d) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(c)) || null === c || void 0 === c)) {
                if (d = a.extend({}, d), (null === c || void 0 === c) && (d.expires = -1), "number" == typeof d.expires) {
                    var e = d.expires,
                        f = d.expires = new Date;
                    f.setDate(f.getDate() + e)
                }
                return c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
            }
            d = c || {};
            for (var g, h = d.raw ? function(a) {
                    return a
                } : decodeURIComponent, i = document.cookie.split("; "), j = 0; g = i[j] && i[j].split("="); j++)
                if (h(g[0]) === b) return h(g[1] || "");
            return null
        }, a.pandalocker.tools.hash = a.pandalocker.tools.hash || function(a) {
            var b = 0;
            if (!a || 0 === a.length) return b;
            for (var c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b = (b << 5) - b + d, b &= b
            }
            return b = b.toString(16), b = b.replace("-", "0")
        }, a.pandalocker.tools.has3d = a.pandalocker.tools.has3d || function() {
            var a, b = document.createElement("p"),
                c = {
                    WebkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    MSTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    Transform: "transform"
                };
            b.className = "onp-sl-always-visible", document.body.insertBefore(b, null);
            for (var d in c) void 0 !== b.style[d] && (b.style[d] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(c[d]));
            return document.body.removeChild(b), void 0 !== a && a.length > 0 && "none" !== a
        }, a.pandalocker.tools.canBlur = a.pandalocker.tools.canBlur || function() {
            var a = document.createElement("div");
            a.style.cssText = _browserPrefixes.join("filter:blur(2px); ");
            var b = !!a.style.length && (void 0 === document.documentMode || document.documentMode > 9);
            if (b) return !0;
            try {
                b = void 0 !== typeof SVGFEColorMatrixElement && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
            } catch (c) {}
            return b
        }, a.pandalocker.isTouch = a.pandalocker.isTouch || function() {
            return !!("ontouchstart" in window) || !!("onmsgesturechange" in window)
        }, a.pandalocker.widget = function(b, c) {
            var d = {
                createWidget: function(d, e) {
                    var f = a.extend(!0, {}, c);
                    if (f.element = a(d), "BODY" == d.tagName) {
                        var g = '<div class="onp-sl-body-inner-wrap"></div>';
                        a("body").wrapInner(g), f.element = a(".onp-sl-body-inner-wrap")
                    }
                    f.options = a.extend(!0, f.options, e), f._init && f._init(), f._create && f._create(), a.data(d, "plugin_" + b, f)
                },
                callMethod: function(a, b) {
                    return a[b] && a[b]()
                }
            };
            a.fn[b] = function() {
                var c = arguments,
                    e = arguments.length,
                    f = this;
                return this.each(function() {
                    var g = a.data(this, "plugin_" + b);
                    !g && 1 >= e ? d.createWidget(this, e ? c[0] : !1) : 1 == e && (f = d.callMethod(g, c[0]))
                }), f
            }
        }, a.pandalocker.detectBrowser = a.pandalocker.detectBrowser || function() {
            function b() {
                var a = -1;
                if ("Microsoft Internet Explorer" == navigator.appName) {
                    var b = navigator.userAgent,
                        c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                    null != c.exec(b) && (a = parseFloat(RegExp.$1))
                } else if ("Netscape" == navigator.appName) {
                    var b = navigator.userAgent,
                        c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                    null != c.exec(b) && (a = parseFloat(RegExp.$1))
                }
                return a
            }
            var c = jQuery.uaMatch || function(a) {
                    a = a.toLowerCase();
                    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                d = c(navigator.userAgent);
            a.pandalocker.browser = {}, d.browser && (a.pandalocker.browser[d.browser] = !0, a.pandalocker.browser.version = d.version);
            var e = b();
            e > 0 && (a.pandalocker.browser.msie = !0, a.pandalocker.browser.version = e), a.pandalocker.browser.chrome ? a.pandalocker.browser.webkit = !0 : a.pandalocker.browser.webkit && (a.pandalocker.browser.safari = !0)
        }, a.pandalocker.detectBrowser(), a.pandalocker.tools.camelCase = function(a) {
            return a.toLowerCase().replace(/-(.)/g, function(a, b) {
                return b.toUpperCase()
            })
        }, a.pandalocker.tools.capitaliseFirstLetter = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }, a.pandalocker.tools.isMobile = function() {
            return /webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent) ? !0 : !1
        }, a.pandalocker.tools.isTabletOrMobile = function() {
            return /webOS|iPhone|iPad|Android|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
        }, a.pandalocker.tools.isInAppBrowser = function() {
            return a.pandalocker.tools.getInAppBrowser() ? !0 : !1
        }, a.pandalocker.tools.getInAppBrowser = function() {
            return /FBAN|FBAV/i.test(navigator.userAgent) ? "Facebook In-App browser" : /Instagram/i.test(navigator.userAgent) ? "Instagram In-App browser" : /Twitter/i.test(navigator.userAgent) ? "Twitter In-App browser" : /VKAndroid/i.test(navigator.userAgent) ? "VK In-App browser" : !1
        }, a.pandalocker.tools.updateQueryStringParameter = function(a, b, c) {
            var d = new RegExp("([?&])" + b + "=.*?(&|$)", "i"),
                e = -1 !== a.indexOf("?") ? "&" : "?";
            return a.match(d) ? a.replace(d, "$1" + b + "=" + c + "$2") : a + e + b + "=" + c
        }, a.pandalocker.tools.isValidEmailAddress = function(a) {
            var b = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return b.test(a)
        }, a.pandalocker.tools.isValidUrl = function(a) {
            var b = new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
            return b.test(a)
        }, a.pandalocker.tools.findLeftWindowBoundry = function() {
            return window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0
        }, a.pandalocker.tools.findTopWindowBoundry = function() {
            return window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0
        }, a.pandalocker.tools.extractJSON = function(b) {
            var c, d, e;
            c = b.indexOf("{", c + 1);
            do {
                if (d = b.lastIndexOf("}"), c >= d) return null;
                do {
                    e = b.substring(c, d + 1);
                    try {
                        var f = a.parseJSON(e);
                        if (f) return f
                    } catch (g) {}
                    d = b.substr(0, d).lastIndexOf("}")
                } while (d > c);
                c = b.indexOf("{", c + 1)
            } while (-1 != c);
            return !1
        }, a.pandalocker.tools.saveValue = function(b, c, d) {
            if (localStorage && localStorage.setItem) try {
                localStorage.setItem(b, c)
            } catch (e) {
                a.pandalocker.tools.cookie(b, c, {
                    expires: d,
                    path: "/"
                })
            } else a.pandalocker.tools.cookie(b, c, {
                expires: d,
                path: "/"
            })
        }, a.pandalocker.tools.getValue = function(b, c) {
            var d = localStorage && localStorage.getItem && localStorage.getItem(b);
            return d || (d = a.pandalocker.tools.cookie(b)), d ? d : c
        }, a.pandalocker.tools.guid = function() {
            var a = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.sdk = a.pandalocker.sdk || {
            _ready: {},
            _connected: {},
            _error: {},
            getSDK: function(b) {
                return b = a.pandalocker.tools.camelCase(b), a.pandalocker.sdk[b] ? a.pandalocker.sdk[b] : null
            },
            isConnected: function(b) {
                if (a("#" + b.scriptId).length > 0) return !0;
                var c = !1;
                return a("script").each(function() {
                    var d = a(this).attr("src");
                    return d ? (c = -1 !== d.indexOf(b.url), c ? (a(this).attr("id", b.scriptId), !1) : void 0) : !0
                }), c
            },
            getLoadingScript: function(b) {
                var c = a("#" + b.scriptId),
                    d = a("script[src='*" + b.url + "']");
                return c.length > 0 ? c : d
            },
            isLoaded: function(a) {
                return this.isConnected(a) && a.isLoaded && a.isLoaded()
            },
            connect: function(b, c, d) {
                var e = this,
                    f = this.getSDK(b),
                    g = new a.pandalocker.deferred;
                if (!f) return console && console.log("Invalide SDK name: " + b), g.reject("invalide-sdk"), g.promise();
                if (f.options = c, setTimeout(function() {
                        var a = f.isLoaded();
                        a ? e.setup && e.setup() : (e._connected[b] = !1, g.reject("timeout"))
                    }, d), this._ready[b]) return g.resolve(), g.promise();
                if (a(document).bind(b + "-init", function() {
                        g.resolve()
                    }), a(document).bind(b + "-error", function(a, c) {
                        e._error[b] = !0, g.reject(c)
                    }), this._connected[b] && !e._error[b]) return g.promise();
                f.createEvents || (f.createEvents = function() {
                    var b = f.isLoaded(),
                        c = function() {
                            a(document).trigger(f.name + "-init")
                        };
                    return b ? (c(), void 0) : (a(document).bind(f.name + "-script-loaded", function() {
                        c()
                    }), void 0)
                }), f.prepare && f.prepare();
                var h = f.isLoaded(),
                    i = this.isConnected(f);
                if (a(document).bind(b + "-init", function() {
                        e._ready[b] = !0
                    }), this._connected[b] || f.createEvents(), !i || e._error[b]) {
                    if (e._error[b]) {
                        var j = this.getLoadingScript(f);
                        j && j.remove()
                    }
                    var k = function() {
                        var a = document.createElement("script");
                        a.type = "text/javascript", a.id = f.scriptId, a.src = f.url;
                        var b = f.getScriptBody ? f.getScriptBody() : null;
                        b && (a.innerHtml = b);
                        var c = document.getElementsByTagName("body")[0];
                        c.appendChild(a)
                    };
                    k()
                }
                if (!h) {
                    var j = this.getLoadingScript(f)[0];
                    j.onerror = function(b) {
                        console && console.log("Failed to load SDK script:"), console && console.log(b), a(document).trigger(f.name + "-error", ["blocked"])
                    }, j.onreadystatechange = j.onload = function() {
                        var b = j.readyState;
                        (!b || /loaded|complete/.test(b)) && (a(document).trigger(f.name + "-script-loaded"), a(document).unbind(f.name + "-script-loaded"))
                    }
                }
                return setTimeout(function() {
                    var b = f.isLoaded();
                    b || a(document).trigger(f.name + "-error", ["timeout"])
                }, d), this._connected[b] = !0, g.promise()
            }
        }
    }(jQuery),
    function(a) {
        var b = function() {
            var a = this;
            return a && a.hasOwnProperty && a instanceof b || (a = new b), a._init.apply(a, arguments)
        };
        ! function() {
            var a, c, d, e = "absolute",
                f = "relative",
                g = ":",
                h = "//",
                i = "@",
                j = ".",
                k = "/",
                l = "..",
                m = "../",
                n = "?",
                o = "=",
                p = "&",
                q = "#",
                r = "",
                s = "type",
                t = "scheme",
                u = "userInfo",
                v = "host",
                w = "port",
                x = "path",
                y = "query",
                z = "fragment",
                A = /^(?:(https?:\/\/|\/\/)|(\/|\?|#)|[^;:@=\.\s])/i,
                B = /^(?:(https?):\/\/|\/\/)(?:([^:@\s]+:?[^:@\s]+?)@)?((?:[^;:@=\/\?\.\s]+\.)+[A-Za-z0-9\-]{2,})(?::(\d+))?(?=\/|\?|#|$)([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,
                C = /^([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,
                D = "object",
                E = "string",
                F = /^\s+|\s+$/g;
            a = String.prototype.trim ? function(a) {
                return a && a.trim ? a.trim() : a
            } : function(a) {
                try {
                    return a.replace(F, r)
                } catch (b) {
                    return a
                }
            }, c = function(a) {
                return a && typeof a === D
            }, d = function(a) {
                return typeof a === E
            }, b.ABSOLUTE = e, b.RELATIVE = f, b.normalize = function(a) {
                return new b(a).toString()
            }, b.resolve = function(a, c) {
                return new b(a).resolve(c).toString()
            }, b.prototype = {
                _init: function(a) {
                    return this.constructor = b, a = d(a) ? a : a instanceof b ? a.toString() : null, this._original = a, this._url = {}, this._isValid = this._parse(a), this
                },
                toString: function() {
                    var a = this._url,
                        b = [],
                        c = a[s],
                        d = a[t],
                        f = a[x],
                        i = a[y],
                        j = a[z];
                    return c === e && (b.push(d ? d + g + h : h, this.authority()), f && 0 !== f.indexOf(k) && (f = k + f)), b.push(f, i ? n + this.queryString() : r, j ? q + j : r), b.join(r)
                },
                original: function() {
                    return this._original
                },
                isValid: function() {
                    return this._isValid
                },
                isAbsolute: function() {
                    return this._url[s] === e
                },
                isRelative: function() {
                    return this._url[s] === f
                },
                isHostRelative: function() {
                    var a = this._url[x];
                    return this.isRelative() && a && 0 === a.indexOf(k)
                },
                type: function() {
                    return this._url[s]
                },
                scheme: function(a) {
                    return arguments.length ? this._set(t, a) : this._url[t]
                },
                userInfo: function(a) {
                    return arguments.length ? this._set(u, a) : this._url[u]
                },
                host: function(a) {
                    return arguments.length ? this._set(v, a) : this._url[v]
                },
                domain: function() {
                    var a = this._url[v];
                    return a ? a.split(j).slice(-2).join(j) : void 0
                },
                port: function(a) {
                    return arguments.length ? this._set(w, a) : this._url[w]
                },
                authority: function() {
                    var a = this._url,
                        b = a[u],
                        c = a[v],
                        d = a[w];
                    return [b ? b + i : r, c, d ? g + d : r].join(r)
                },
                path: function(a) {
                    return arguments.length ? this._set(x, a) : this._url[x]
                },
                query: function(a) {
                    return arguments.length ? this._set(y, a) : this._url[y]
                },
                queryString: function(a) {
                    if (arguments.length) return this._set(y, this._parseQuery(a));
                    a = r;
                    var b, c, d = this._url[y];
                    if (d)
                        for (b = 0, c = d.length; c > b; b++) a += d[b].join(o), c - 1 > b && (a += p);
                    return a
                },
                fragment: function(a) {
                    return arguments.length ? this._set(z, a) : this._url[z]
                },
                resolve: function(a) {
                    a = a instanceof b ? a : new b(a);
                    var c, d;
                    return this.isValid() && a.isValid() ? a.isAbsolute() ? this.isAbsolute() ? a.scheme() ? a : new b(a).scheme(this.scheme()) : a : (c = new b(this.isAbsolute() ? this : null), a.path() ? (d = a.isHostRelative() || !this.path() ? a.path() : this.path().substring(0, this.path().lastIndexOf(k) + 1) + a.path(), c.path(this._normalizePath(d)).query(a.query()).fragment(a.fragment())) : a.query() ? c.query(a.query()).fragment(a.fragment()) : a.fragment() && c.fragment(a.fragment()), c) : this
                },
                reduce: function(a) {
                    a = a instanceof b ? a : new b(a);
                    var c = this.resolve(a);
                    return this.isAbsolute() && c.isAbsolute() && c.scheme() === this.scheme() && c.authority() === this.authority() && c.scheme(null).userInfo(null).host(null).port(null), c
                },
                _parse: function(b, c) {
                    if (b = a(b), !(d(b) && b.length > 0)) return !1;
                    var g, h;
                    switch (c || (c = b.match(A), c = c ? c[1] ? e : c[2] ? f : null : null), c) {
                        case e:
                            g = b.match(B), g && (h = {}, h[s] = e, h[t] = g[1] ? g[1].toLowerCase() : void 0, h[u] = g[2], h[v] = g[3].toLowerCase(), h[w] = g[4] ? parseInt(g[4], 10) : void 0, h[x] = g[5] || k, h[y] = this._parseQuery(g[6]), h[z] = g[7]);
                            break;
                        case f:
                            g = b.match(C), g && (h = {}, h[s] = f, h[x] = g[1], h[y] = this._parseQuery(g[2]), h[z] = g[3]);
                            break;
                        default:
                            return this._parse(b, e) || this._parse(b, f)
                    }
                    return h ? (this._url = h, !0) : !1
                },
                _parseQuery: function(b) {
                    if (d(b)) {
                        b = a(b);
                        var c, e, f, g = [],
                            h = b.split(p);
                        for (e = 0, f = h.length; f > e; e++) h[e] && (c = h[e].split(o), g.push(c[1] ? c : [c[0]]));
                        return g
                    }
                },
                _set: function(a, b) {
                    return this._url[a] = b, !b || a !== t && a !== u && a !== v && a !== w || (this._url[s] = e), b || a !== v || (this._url[s] = f), this._isValid = this._parse(this.toString()), this
                },
                _normalizePath: function(a) {
                    var b, c, d, e, f, g;
                    if (a.indexOf(m) > -1) {
                        for (b = a.split(k), d = [], f = 0, g = b.length; g > f; f++) c = b[f], c === l ? d.pop() : c && d.push(c);
                        e = d.join(k), a[0] === k && (e = k + e), a[a.length - 1] === k && e.length > 1 && (e += k)
                    } else e = a;
                    return e
                }
            }
        }(), a.pandalocker || (a.pandalocker = {}), a.pandalocker.tools || (a.pandalocker.tools = {}), a.pandalocker.tools.URL = b
    }(jQuery),
    function(a, b, c) {
        "use strict";
        var d = {
                filterId: 0
            },
            e = " -webkit- -moz- -o- -ms- ".split(" "),
            f = function() {
                var a = b.createElement("div");
                return a.style.cssText = e.join("filter:blur(2px); "), !!a.style.length && (void 0 === b.documentMode || b.documentMode > 9)
            },
            g = function() {
                var a = !1;
                try {
                    a = void 0 !== typeof SVGFEColorMatrixElement && 2 == SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE
                } catch (b) {}
                return a
            },
            h = function(e, h) {
                var i, j, k, l = {
                        intensity: 5,
                        forceSVGUrl: !1,
                        animationOptions: {
                            duration: 1e3,
                            easing: "linear"
                        }
                    },
                    m = c.extend(l, h),
                    n = {},
                    o = function(a) {
                        if (n[a] || "" === n[a]) return n[a] + a;
                        for (var c = b.createElement("div"), d = ["", "Moz", "Webkit", "O", "ms", "Khtml"], e = 0; e < d.length; e++)
                            if ("undefined" != typeof c.style[d[e] + a]) return n[a] = d[e], d[e] + a;
                        return a.toLowerCase()
                    },
                    p = {
                        cssfilters: f(),
                        svgfilters: g()
                    },
                    q = !1,
                    r = o("Filter"),
                    s = function(a) {
                        return b.createElementNS("http://www.w3.org/2000/svg", a)
                    },
                    t = function() {
                        var a = s("svg"),
                            b = s("filter");
                        i = s("feGaussianBlur"), a.setAttribute("style", "position:absolute"), a.setAttribute("width", "0"), a.setAttribute("height", "0"), b.setAttribute("id", "blur-effect-id-" + d.filterId), b.appendChild(i), a.appendChild(b), c("body").append(a)
                    };
                return this.$elm = e instanceof c ? e : c(e), this.init = function() {
                    return p.svgfilters && t(), j = d.filterId, d.filterId++, this
                }, this.blur = function() {
                    var b, c = a.location,
                        d = m.forceSVGUrl ? c.protocol + "//" + c.host + c.pathname : "";
                    return p.cssfilters ? b = "blur(" + m.intensity + "px)" : p.svgfilters ? (i.setAttribute("stdDeviation", m.intensity), b = "url(" + d + "#blur-effect-id-" + j + ")") : b = "progid:DXImageTransform.Microsoft.Blur(pixelradius=" + m.intensity + ")", this.$elm[0].style[r] = b, q = !0, this
                }, this.animate = function(a, b) {
                    if ("number" != typeof a) throw typeof a + " is not a valid number to animate the blur";
                    if (0 > a) throw "I can animate only positive numbers";
                    var d = new c.Deferred;
                    return k && k.stop(!0, !0), k = new c.Animation(m, {
                        intensity: a
                    }, c.extend(m.animationOptions, b)).progress(c.proxy(this.blur, this)).done(d.resolve), d.promise()
                }, this.unblur = function() {
                    return this.$elm.css(r, "none"), this.$elm[0].style[r] = "none", q = !1, this
                }, this.toggleblur = function() {
                    return q ? this.unblur() : this.blur(), this
                }, this.destroy = function() {
                    p.svgfilters && c("filter#blur-effect-id-" + j).parent().remove(), this.unblur();
                    for (var a in this) delete this[a];
                    return this
                }, this.init()
            };
        c.fn.Vague = function(a) {
            return new h(this, a)
        }, c.pandalocker.tools.supportBlurring = function() {
            return c.pandalocker.browser.msie && c.pandalocker.browser.version > 9 && c.pandalocker.browser.msie < 12 ? !1 : f() || g() ? !0 : !1
        }
    }(window, document, jQuery),
    function(a) {
        "use strict";
        a.pandalocker.storages.defaultStateStorage = function(b) {
            var c = b.options;
            this.demo = c.demo, this.useCookies = c.locker.useCookies, this.expires = c.locker.expires, this.isUnlocked = function(a) {
                return this.demo ? !1 : this._getValue(a) ? !0 : !1
            }, this.isLocked = function(a) {
                return !this.isUnlocked(a)
            }, this.requestState = function(a, b) {
                return this.demo ? b("locked") : (b(this.isUnlocked(a) ? "unlocked" : "locked"), void 0)
            }, this.setState = function(a, b) {
                if (this.demo) return !0;
                try {
                    return "unlocked" === b ? this._setValue(a) : this._removeValue(a)
                } catch (c) {
                    console && console.log(c)
                }
            }, this._setValue = function(b) {
                if (!b) return !1;
                var c = !0,
                    d = 1e4;
                if (this.expires) {
                    var e = new Date,
                        f = e.getTime(),
                        g = f + 1e3 * this.expires;
                    d = Math.ceil(this.expires / 86400), c = JSON.stringify({
                        expires: g
                    })
                }
                var h = !0;
                if (localStorage && !this.useCookies) {
                    h = !1;
                    try {
                        localStorage.setItem(b, c)
                    } catch (i) {
                        console && console.log(i), h = !0
                    }
                }
                return h && a.pandalocker.tools.cookie(b, c, {
                    expires: d,
                    path: "/"
                }), !0
            }, this._getValue = function(b) {
                if (!b) return !1;
                var c = localStorage && !this.useCookies && localStorage.getItem(b);
                if (c || (c = a.pandalocker.tools.cookie(b)), c) try {
                    var d = JSON.parse(c);
                    if (d && d.expires) {
                        var e = new Date;
                        return d.expires > e
                    }
                    return !0
                } catch (f) {
                    return !0
                }
            }, this._removeValue = function(b) {
                return b ? (localStorage && localStorage.removeItem(b), a.pandalocker.tools.cookie(b, null), void 0) : !1
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.services.visibility = function() {
            this.canLock = function(a) {
                if (!a) return !0;
                for (var b in a) {
                    var c = a[b],
                        d = this.isVisible(c);
                    if (!d) return !1
                }
                return !0
            }, this.isVisible = function(a) {
                if (!a.conditions) return !0;
                var b = this.matchFilter(a),
                    c = a.type || "showif";
                return "showif" === c ? b : "hideif" === c ? !b : void 0
            }, this.matchFilter = function(a) {
                var b = !0;
                for (var c in a.conditions) {
                    var d = a.conditions[c],
                        e = this.matchScope(d);
                    e || (b = !1)
                }
                return b
            }, this.matchScope = function(a) {
                var b = !1;
                if (!a.conditions) return !0;
                for (var c in a.conditions) {
                    var d = a.conditions[c],
                        e = this.matchCondition(d);
                    e && (b = !0)
                }
                return b
            }, this.matchCondition = function(a) {
                var b = a.param,
                    c = a.operator,
                    d = a.value,
                    e = a.type || "text",
                    f = this.getValueProvider(b);
                if (!f) return console && console.log('[visibility]: the value provider "%s" not found.'.replace("%s", b)), !0;
                var g = f.getValue(a);
                return null === g ? (console && console.log('[visibility]: the value returned from the provider "%s" equals to null.'.replace("%s", b)), !0) : f.compare ? f.compare(c, d, g, e) : this.compare(c, d, g, e)
            }, this.getValueProvider = function(b) {
                var c = a.pandalocker.services.visibilityProviders[b];
                return c = a.pandalocker.filters.run("visibility-value-provider", [c, b])
            }, this.compare = function(b, c, d, e) {
                var f = "date" === e && ("equals" === b || "notequal" === b);
                switch (c = this.castValue(c, e, f ? "range" : null), d = this.castValue(d, e), b) {
                    case "equals":
                        return a.isArray(d) ? a.inArray(c, d) > -1 : c.range ? d > c.start && d < c.end : c === d;
                    case "notequal":
                        return a.isArray(d) ? -1 === a.inArray(c, d) : c.range ? !(d > c.start && d < c.end) : c !== d;
                    case "less":
                    case "older":
                        return c > d;
                    case "greater":
                    case "younger":
                        return d > c;
                    case "contains":
                        return d.indexOf(c) > -1;
                    case "notcontain":
                        return -1 === d.indexOf(c);
                    case "between":
                        return d >= c.start && d <= c.end
                }
                return !0
            }, this.castValue = function(b, c, d) {
                if (null === b) return b;
                if (a.isArray(b)) {
                    for (var e = 0; e < b.length; e++) b[e] = this.castValue(b[e], c);
                    return b
                }
                if ("undefined" != typeof b.start) {
                    var f = this.castValue(b.start, c, "start"),
                        g = this.castValue(b.end, c, "end");
                    return "relative" === b.start.type ? (b.end = f, b.start = g) : (b.end = g, b.start = f), b
                }
                switch (c) {
                    case "text":
                    case "select":
                        return "" + b;
                    case "integer":
                        return parseInt(b);
                    case "date":
                        return this.castToDate(b, d)
                }
            }, this.castToDate = function(a, b) {
                var c = (new Date).getTime();
                if ("relative" === a.type) {
                    var d = parseInt(a.unitsCount);
                    switch (a.units) {
                        case "seconds":
                            var e = c - 1e3 * d;
                            break;
                        case "minutes":
                            var e = c - 60 * d * 1e3;
                            break;
                        case "hours":
                            var e = c - 60 * d * 60 * 1e3;
                            break;
                        case "days":
                            var e = c - 60 * d * 60 * 24 * 1e3;
                            break;
                        case "weeks":
                            var e = c - 60 * d * 60 * 24 * 7 * 1e3;
                            break;
                        case "months":
                            var e = c - 60 * d * 60 * 24 * 30 * 1e3;
                            break;
                        case "years":
                            var e = c - 60 * d * 60 * 24 * 365 * 1e3
                    }
                    if ("range" !== b) return e;
                    var f = {
                        range: !0,
                        end: e,
                        start: 0
                    };
                    switch (a.units) {
                        case "seconds":
                            f.start = f.end - 1e3;
                            break;
                        case "minutes":
                            f.start = f.end - 6e4;
                            break;
                        case "hours":
                            f.start = f.end - 36e5;
                            break;
                        case "days":
                            f.start = f.end - 864e5;
                            break;
                        case "weeks":
                            f.start = f.end - 6048e5;
                            break;
                        case "months":
                            f.start = f.end - 2592e6;
                            break;
                        case "years":
                            f.start = f.end - 31536e6
                    }
                    return f
                }
                if ("range" === b) {
                    var g = new Date(a),
                        h = g.getUTCDate(),
                        i = g.getUTCMonth(),
                        j = g.getUTCFullYear();
                    return {
                        range: !0,
                        start: Date.UTC(j, i, h),
                        end: Date.UTC(j, i, h, 23, 59, 59, 999)
                    }
                }
                return a
            }
        }, a.pandalocker.services.visibilityProviders = {}, a.pandalocker.services.visibilityProviders["user-mobile"] = {
            getValue: function() {
                return a.pandalocker.tools.isMobile() ? "yes" : "no"
            }
        }, a.pandalocker.services.visibilityProviders["location-page"] = {
            getValue: function() {
                return window.location.href
            }
        }, a.pandalocker.services.visibilityProviders["location-referrer"] = {
            getValue: function() {
                return document.referrer
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.services.subscription = function(b) {
            this.id = b.id, this.serviceOptions = b, this.cookieName = "opanda_" + b.name + "_" + b.service + "_" + b.listId, this.checkingInterval = b.checkingInterval || 1e4, this._call = function(b, c, d) {
                var e = this,
                    f = {};
                f.opandaIdentityData = c, f.opandaServiceData = d, f.opandaHandler = "subscription", f.opandaRequestType = b, f.opandaService = this.serviceOptions.service, f.opandaListId = this.serviceOptions.listId, f.opandaDoubleOptin = this.serviceOptions.doubleOptin, f.opandaConfirm = this.serviceOptions.confirm, f.opandaRequireName = this.serviceOptions.requireName, f = a.pandalocker.filters.run(this.id + ".ajax-data", [f]), f = a.pandalocker.filters.run(this.id + ".subscribe.ajax-data", [f]), this.serviceOptions.parentId && (f = a.pandalocker.filters.apply("subscription-data-" + this.serviceOptions.parentId, f));
                var g = new a.pandalocker.deferred,
                    h = function(a) {
                        a && a.readyState < 4 || console && console.log && (console.log("Invalide ajax response:"), console.log(a.responseText), g.reject(a))
                    },
                    i = a.ajax({
                        type: "POST",
                        dataType: "text",
                        url: e.serviceOptions.proxy,
                        data: f,
                        error: function() {
                            h(i)
                        },
                        success: function(b) {
                            var c = a.pandalocker.tools.extractJSON(b);
                            return c ? (g.resolve(c), void 0) : h(i)
                        }
                    });
                return g.promise()
            }, this.subscribe = function(b, c) {
                var d = this,
                    e = new a.Deferred;
                return this._call("subscribe", b, c).done(function(a) {
                    return console.log(a), a && a.error ? (e.reject(a), void 0) : a && "subscribed" === a.status ? (e.resolve(a), void 0) : d.serviceOptions.doubleOptin && d.serviceOptions.confirm ? (d._setWaitingStatus(b), e.notify("waiting-confirmation"), d.waitSubscription(b).done(function(a) {
                        e.resolve(a)
                    }).fail(function(a) {
                        e.reject(a)
                    }).always(function() {
                        d._removeWaitingStatus()
                    }), void 0) : (e.resolve(a), void 0)
                }).fail(function(b) {
                    b && b.readyState < 4 || e.reject({
                        error: a.pandalocker.lang.errors.ajaxError
                    })
                }), e.promise()
            }, this.waitSubscription = function(b) {
                var c = this,
                    d = new a.Deferred;
                return this._waitingConfirmationResult = d, c._isCanceled ? (c._isCanceled = !1, void 0) : (this.check(b).done(function(a) {
                    return c._isCanceled ? (c._isCanceled = !1, void 0) : (console && console.log && console.log("waiting subscription..."), console && console.log && console.log(a), a && "subscribed" === a.status ? (d.resolve(a), void 0) : (setTimeout(function() {
                        var a = c.waitSubscription(b);
                        a && (a.done(function(a) {
                            d.resolve(a)
                        }), a.fail(function(a) {
                            d.reject(a)
                        }))
                    }, c.checkingInterval), void 0))
                }).fail(function(a) {
                    return c._isCanceled ? (c._isCanceled = !1, void 0) : (d.reject(a), void 0)
                }), d.promise())
            }, this.check = function(b) {
                var c = new a.Deferred;
                return this._call("check", b).done(function(a) {
                    return a.error ? (c.reject(a), void 0) : (c.resolve(a), void 0)
                }).fail(function(b) {
                    b && b.readyState < 4 || c.reject({
                        error: a.pandalocker.lang.errors.ajaxError
                    })
                }), c.promise()
            }, this.cancel = function() {
                this._isCanceled = !0, this._removeWaitingStatus(), this._waitingConfirmationResult && (this._waitingConfirmationResult.reject({
                    error: a.pandalocker.lang.errors_subscription_canceled
                }), this._waitingConfirmationResult = null)
            }, this._setWaitingStatus = function(b) {
                var c = JSON.stringify(b);
                if (localStorage && localStorage.setItem) try {
                    localStorage.setItem(this.cookieName, c)
                } catch (d) {
                    a.pandalocker.tools.cookie(this.cookieName, c, {
                        expires: 365,
                        path: "/"
                    })
                } else a.pandalocker.tools.cookie(this.cookieName, c, {
                    expires: 365,
                    path: "/"
                })
            }, this._removeWaitingStatus = function() {
                localStorage && localStorage.removeItem && localStorage.removeItem(this.cookieName), a.pandalocker.tools.cookie(this.cookieName, !1, {
                    expires: 0,
                    path: "/"
                })
            }, this.isWaitingSubscription = function() {
                var a = this.getWaitingIdentityData();
                return a ? !0 : !1
            }, this.getWaitingIdentityData = function() {
                var b = localStorage && localStorage.getItem && localStorage.getItem(this.cookieName);
                return b || (b = a.pandalocker.tools.cookie(this.cookieName)), b ? JSON.parse(b) : b
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.extras || (a.pandalocker.extras = {}), a.pandalocker.extras.interrelation = {
            init: function() {
                var a = this.options.locker && this.options.locker.scope;
                if (a) {
                    var b = this;
                    this.addHook("state-changed", function(c, d) {
                        if ("unlocked" === d) {
                            var e = b._getStateStorage(),
                                f = "scope_" + a;
                            e.setState(f, "unlocked")
                        }
                    }), this.addFilter("functions-requesting-state", function(c) {
                        return c.push(function(c) {
                            var d = b._getStateStorage(),
                                e = "scope_" + a;
                            d.requestState(e, function(a) {
                                c(a)
                            })
                        }), c
                    }), this.addHook("unlocked", function(c, d) {
                        "button" === d && b.runHook("unlocked-by-scope-" + a, [], !0)
                    }), this.addHook("unlocked-by-scope-" + a, function(a) {
                        a !== b && b.unlock("scope")
                    }, 10, !0)
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.extras || (a.pandalocker.extras = {}), a.pandalocker.extras.googleAnalytics = {
            init: function() {
                if (this.options.googleAnalytics) {
                    this.addHook("unlocked", function(b, c, d, e) {
                        if (window._gaq || window.ga)
                            if (e || (e = window.location.href), "button" === c) {
                                var f = null;
                                f = "facebook-like" === d ? "Facebook Like" : "facebook-share" === d ? "Facebook Share" : "twitter-tweet" === d ? "Twitter Tweet" : "twitter-follow" === d ? "Twitter Follow" : "google-plus" === d ? "Google Plus" : "google-share" === d ? "Google Share" : "linkedin-share" === d ? "LinkedIn Share" : "google-youtube" === d ? "Google Youtube" : "facebook" === d ? "Facebook Sign-In" : "twitter" === d ? "Twitter Sign-In" : "google" === d ? "Google Sign-In" : "linkedin" === d ? "LinkedIn Sign-In" : "form" === d ? "Opt-In Form" : d.substr(0, 1).toUpperCase() + d.substr(1), a("Lockers", "Unlocked (Total)", e), a("Lockers ", "Unlocked via " + f, e)
                            } else "timer" === c ? (a("Lockers", "Skipped (Total)", e), a("Lockers ", "Skipped via Timer", e)) : "cross" === c && (a("Lockers", "Skipped (Total)", e), a("Lockers ", "Skipped via Cross", e))
                    });
                    var a = function(a, b, c) {
                        window.ga ? window.ga("send", "event", a, b, c) : window._gaq.push(["_trackEvent", a, b, c])
                    }
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.extras || (a.pandalocker.extras = {}), a.pandalocker.extras.na = {
            init: function() {
                var a = this,
                    b = 0,
                    c = 0,
                    d = {},
                    e = function() {
                        for (var b = 0, c = 0; c < a._groups.length; c++)
                            for (var d = 0; d < a._groups[c].controls.length; d++) b++;
                        return b
                    };
                this.addHook("control-error", function(f, g, h) {
                    b || (b = e(), c = b);
                    var i = h + "-" + g;
                    d[i] || (d[i] = !0, c--, c > 0 || (a.runHook("na"), "show-content" === a.options.locker.naMode && a.unlock("na")))
                })
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = {};
        b.init = function(b, c) {
            var d = a.extend(!0, {}, this._defaults);
            if (this.options = a.extend(!0, d, c), this.groupOptions = b.options, this.lockerOptions = b.locker.options, this.lang = b.lang, this.group = b, this.locker = b.locker, this.groupOptions.senderName && (this.senderName = this.groupOptions.senderName), !this.name) throw new Error('The property "name" cannot be empty for the control.');
            this.options.proxy = this.options.proxy || this.groupOptions.proxy || this.lockerOptions.proxy, this.setup && this.setup(), this.setupHooks && this.setupHooks(), this.prepareOptions && this.prepareOptions()
        }, b._defaults = {}, b.renderControl = function(b) {
            this.control = a(this.tag || "<div>").addClass("onp-sl-control").addClass("onp-sl-" + this.name).appendTo(b), this.innerWrap = a("<div></div>").addClass("onp-sl-control-inner-wrap").appendTo(this.control), this._isRendered = !0, this._hasError() && this.showError(), this.render(this.innerWrap)
        }, b.render = function() {
            throw new Error("The control should implement the method 'render'")
        }, b.unlock = function(a, b, c) {
            this.setState("unlocked"), this.group.unlock(a || "button", b || this.senderName || this.name, c)
        }, b.addClassToLocker = function(a) {
            this.group.addClassToLocker(a)
        }, b._trackWindow = function(a, b) {
            var c = window.open;
            window.open = function(d, e, f) {
                var g = c(d, e, f);
                if (!d) return g;
                if (-1 === d.indexOf(a)) return g;
                var h = setInterval(function() {
                    g && g.closed === !1 || (clearInterval(h), b && b())
                }, 300);
                return g
            }
        }, b.requestState = function(a) {
            var b = this._getStateStorage();
            b.requestState(this._getStorageIdentity(), a)
        }, b.setState = function(a, b) {
            var c = this._getStateStorage();
            c.setState(this._getStorageIdentity(), a, b), this.group.setState(a, "button", this.name)
        }, b._getStorageIdentity = function() {
            return "control_" + this.name
        }, b._getStateStorage = function() {
            return this.locker._getStateStorage()
        }, b._setLoadingState = function(a) {
            this._stateSender || (this._stateSender = a, this.control.addClass("onp-sl-state-loading"), this._isLoadingState = !0)
        }, b._removeLoadingState = function(a) {
            this._stateSender && this._stateSender !== a || (this._stateSender = null, this.control.removeClass("onp-sl-state-loading"), this._isLoadingState = !1)
        }, b._isLoading = function() {
            return this._isLoadingState
        }, b._setError = function(a) {
            this._error || (this._error = a)
        }, b._hasError = function() {
            return this._error ? !0 : !1
        }, b.showError = function(a, b) {
            var c = this;
            if (this.runHook("control-error", [c.name, c.group.name]), c.group.onControlError && c.group.onControlError(c.name), !this._isRendered) return this._setError(a), void 0;
            var b = b || this.innerWrap,
                a = a || this._error;
            if (!this.control.hasClass("onp-sl-state-error")) {
                this.control.removeClass("onp-sl-state-loading").addClass("onp-sl-state-error");
                var d = this.createErrorMarkup(a).appendTo(b);
                d.find(".onp-sl-error-title").click(function() {
                    return c.group.showError(c.name, a), !1
                })
            }
        }, b.createErrorMarkup = function() {
            return a("<div class='onp-sl-error-body'><a href='#' class='onp-sl-error-title'>" + a.pandalocker.lang.error + "</a></div>")
        }, b.showNotice = function(a, b) {
            this.group.showNotice(a, null, b)
        }, b.addHook = function(a, b, c) {
            return this.group.addHook(a, b, c)
        }, b.runHook = function(a, b) {
            return this.group.runHook(a, b)
        }, b.addFilter = function(a, b, c) {
            return this.group.addFilter(a, b, c)
        }, b.applyFilters = function(a, b, c) {
            return this.group.applyFilters(a, b, c)
        }, b.requireSdk = function(b, c) {
            var d = this,
                e = new a.pandalocker.deferred;
            if (!b) return e.resolve(), e.promise();
            var f = this.group.options.loadingTimeout || this.lockerOptions.locker.loadingTimeout || 2e4,
                g = d.attemptToLoad(b, c || {}, 5, f);
            return g.done(function() {
                e.resolve()
            }), g.fail(function(c) {
                var d = a.pandalocker.lang.errors.unableToLoadSDK.replace("{0}", b).replace("{1}", c);
                e.reject(d)
            }), e.promise()
        }, b.attemptToLoad = function(b, c, d, e) {
            var f = this;
            d || (d = 5);
            var g = new a.pandalocker.deferred,
                h = a.pandalocker.sdk.connect(b, c || {}, e);
            return h.done(function() {
                g.resolve()
            }), h.fail(function(a) {
                console.log('Failed to load SDK script "' + b + '" due to the error "' + a + '". ' + d + " attempts left."), "timeout" !== a && "blocked" !== a && g.reject(a), 0 >= d - 1 ? g.reject(a) : f.attemptToLoad(b, c, d - 1, e).done(function() {
                    g.resolve()
                }).fail(function() {
                    g.reject(a)
                })
            }), g.promise()
        }, b.verifyButton = function() {
            var b = this,
                c = new a.pandalocker.deferred,
                d = b.verification.timeout,
                e = function() {
                    if ((b.customVerifyButton && !b.customVerifyButton() || 0 === b.control.find(b.verification.container).length) && d >= 0) setTimeout(function() {
                        e()
                    }, 500), d -= 500;
                    else {
                        if (0 >= d) {
                            var f = a.pandalocker.lang.errors.unableToCreateControl.replace("{0}", b.networkName);
                            return c.reject(f)
                        }
                        c.resolve()
                    }
                };
            return e(), c.promise()
        }, b.showScreen = function(a, b) {
            this.group.showScreen(a, b)
        }, a.pandalocker.entity.control = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.control);
        b.setup = function() {
            var b = this;
            this.options.actions = this.options.actions || [];
            var c = !1;
            for (var d in this.options.actions) "subscribe" === this.options.actions[d] && (this.options.actions.splice(d, 1), c = !0);
            c && this.options.actions.push("subscribe"), this.groupOptions.actions && (this.options.actions = a.extend(this.options.actions, this.groupOptions.actions));
            for (var e = 0; e < this.options.actions.length; e++) {
                var f = a.pandalocker.tools.camelCase(this.options.actions[e]);
                this.options[f] = this.options[f] || {};
                var g = f + "Options";
                this.groupOptions[g] && (this.options[f] = a.extend(!0, this.options[f], this.groupOptions[g]));
                var h = f + "ActionOptions";
                this.lockerOptions[h] && (this.options[f] = a.extend(!0, this.options[f], this.lockerOptions[h]))
            }
            if (this.options.proxy = this.options.proxy || this.groupOptions.proxy || this.lockerOptions.proxy, this.options.lazy = this.options.lazy || this.groupOptions.lazy || this.lockerOptions.lazy, c) {
                var i = {
                        id: b.locker.id,
                        proxy: b.lockerOptions.proxy,
                        name: b.name,
                        listId: b.options[f].listId,
                        service: b.options[f].service,
                        doubleOptin: b.options[f].doubleOptin,
                        confirm: b.options[f].confirm,
                        requireName: b.options[f].requireName || !1
                    },
                    j = new a.pandalocker.services.subscription(i);
                this.subscriptionService = b.applyFilters("get-default-subscription-service", j)
            }
        }, b.runActions = function(b, c, d) {
            var e = new a.Deferred,
                f = this;
            if (!this._actionsDone) {
                this._actionsDone = !0;
                var g = this.options.actions.slice();
                d && this.showScreen("data-processing");
                var h = function() {
                    var i = g.shift();
                    if (!i) return e.resolve(), f.unlock(), void 0;
                    var j = f.options[a.pandalocker.tools.camelCase(i)],
                        k = a.pandalocker.tools.camelCase("run-" + i + "-action");
                    if (!f[k]) throw e.reject(), f._actionsDone = !1, new Error("The action '" + k + "' not found.");
                    f[k](b, c, j, d, function(a) {
                        return "error" === a ? (f.runHook("raw-error"), e.reject(a), f._actionsDone = !1, f.showScreen("default")) : (h(), void 0)
                    })
                };
                return h(), e.promise()
            }
        }, b.runSubscribeAction = function(b, c, d, e, f) {
            var g = this;
            console.log("serviceData = "), console.log(c);
            var h = function() {
                e && g.showScreen("data-processing");
                var a = g.subscriptionService.subscribe(b, c);
                g._setupSubscriptionHooks(a, b), a.fail(function() {
                    f("error")
                })
            };
            return b.email ? (h(), void 0) : this.showScreen("enter-email", {
                header: a.pandalocker.lang.onestep_screen_title,
                message: a.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: a.pandalocker.lang.onestep_screen_button,
                note: a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText || g.groupOptions.text.noSpamText || a.pandalocker.lang.noSpam),
                callback: function(a) {
                    b.email = a, h()
                }
            })
        }, b.runSignupAction = function(b, c, d, e, f) {
            var g = this,
                h = function() {
                    e && g.showScreen("data-processing");
                    var c = {};
                    return c.opandaIdentityData = b, c.opandaHandler = "signup", c = a.pandalocker.filters.run(g.locker.id + ".ajax-data", [c]), c = a.pandalocker.filters.run(g.locker.id + ".signup.ajax-data", [c]), a.ajax({
                        type: "POST",
                        dataType: "json",
                        url: g.lockerOptions.proxy,
                        data: c,
                        success: function() {
                            f()
                        },
                        error: function(a) {
                            a && a.readyState < 4 || (g.showScreen("default"), g.showError("Unable to sign in, the ajax error occurred."), f("error"), console && console.log && (console.log("Invalide ajax response:"), console.log(a.responseText)))
                        }
                    })
                };
            return b.email ? (h(), void 0) : this.showScreen("enter-email", {
                header: a.pandalocker.lang.onestep_screen_title,
                message: a.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: a.pandalocker.lang.onestep_screen_button,
                note: a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText || g.groupOptions.text.noSpamText || a.pandalocker.lang.noSpam),
                callback: function(a) {
                    b.email = a, h()
                }
            })
        }, b.runLeadAction = function(b, c, d, e, f) {
            var g = this,
                h = function() {
                    e && g.showScreen("data-processing");
                    var c = {};
                    return c.opandaIdentityData = b, c.opandaHandler = "lead", c = a.pandalocker.filters.run(g.locker.id + ".ajax-data", [c]), c = a.pandalocker.filters.run(g.locker.id + ".lead.ajax-data", [c]), a.ajax({
                        type: "POST",
                        dataType: "json",
                        url: g.lockerOptions.proxy,
                        data: c,
                        success: function() {
                            f()
                        },
                        error: function(a) {
                            a && a.readyState < 4 || (g.showScreen("default"), g.showError("Unable to sign in, the ajax error occurred."), f("error"), console && console.log && (console.log("Invalide ajax response:"), console.log(a.responseText)))
                        }
                    })
                };
            return b.email ? (h(), void 0) : this.showScreen("enter-email", {
                header: a.pandalocker.lang.onestep_screen_title,
                message: a.pandalocker.lang.onestep_screen_instructiont,
                buttonTitle: a.pandalocker.lang.onestep_screen_button,
                note: a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText || g.groupOptions.text.noSpamText || a.pandalocker.lang.noSpam),
                callback: function(a) {
                    b.email = a, h()
                }
            })
        }, b._checkWaitingSubscription = function() {
            if (this.subscriptionService && this.subscriptionService.isWaitingSubscription()) {
                var a = this.subscriptionService.getWaitingIdentityData(),
                    b = this.subscriptionService.waitSubscription(a);
                this._setupSubscriptionHooks(b, a);
                var c = this;
                this.showScreen("email-confirmation", {
                    service: c.subscriptionService,
                    email: a.email
                })
            }
        }, b._setupSubscriptionHooks = function(a, b) {
            var c = this;
            return a.done(function() {
                c.unlock()
            }), a.fail(function(a) {
                c.runHook("raw-error"), c.showNotice(a.error), c.showScreen("default"), a.detailed && console && console.log && console.log(a.detailed)
            }), a.always(function() {
                c.subscriptionService._removeWaitingStatus()
            }), a.progress(function(a) {
                c.showScreen("email-confirmation", {
                    service: c.subscriptionService,
                    email: b.email
                })
            }), a
        }, a.pandalocker.entity.actionControl = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = {};
        b._defaults = {}, b.init = function(b, c) {
            var d = this;
            this.locker = b, this.lockerOptions = b.options, this.lang = b.lang, "socialLocker" == b.langScope && "connect-buttons" == this.name && (b.langScope = "signinLocker", this.lang = b.lang = a.pandalocker.lang.scopes[b.langScope]), "socialLocker" == b.langScope && "email-locker" == this.name && (b.langScope = "emailLocker", this.lang = b.lang = a.pandalocker.lang.scopes[b.langScope]), c || (c = {});
            var e = a.extend(!0, {}, this._defaults);
            this.options = a.extend(!0, e, c);
            for (var f in c) c.hasOwnProperty(f) && a.isArray(c[f]) && (this.options[f] = c[f]);
            if (this.isFirst = 1 === c.index, this.isLast = c.index === this.lockerOptions.groups.order.length, this.isSingle = 1 === this.lockerOptions.groups.order.length, "object" != typeof this.options.text && (this.options.text = {
                    message: d.options.text
                }), this.isFirst && (this.options.text.header = "" === this.options.text.header ? "" : this.options.text.header || this.lang.defaultHeader, this.options.text.message = "" === this.options.text.message ? "" : this.options.text.message || this.lang.defaultMessage), this.options.text.header = a.pandalocker.tools.normilizeHtmlOption(this.options.text.header), this.options.text.message = a.pandalocker.tools.normilizeHtmlOption(this.options.text.message), this.options.text.footer = a.pandalocker.tools.normilizeHtmlOption(this.options.text.footer), !1 !== this.options.separator) {
                var g = a.isPlainObject(this.options.separator) ? this.options.separator : {
                    type: "line",
                    title: d.options.separator
                };
                g.type = g.type || "line", this.options.separator = g
            }
            this.childInit && this.childInit(), this.setup && this.setup(), this.setupHooks && this.setupHooks(), this.prepareOptions && this.prepareOptions();
            try {
                this.createControls()
            } catch (h) {
                if (!h.onpsl) throw h;
                this.showError(this.name, h.message)
            }
        }, b.createControls = function() {
            this.controls = [];
            for (var b = 0; b < this.options.order.length; b++) {
                var c = this.options.order[b];
                if ("string" == typeof c) {
                    if (!a.pandalocker.controls[this.name][c]) throw new a.pandalocker.error('Control "' + c + '" not found in the group "' + this.name + '"');
                    var d = this.createControl(c);
                    this.controls.push(d)
                }
            }
        }, b.createControl = function(b) {
            var c = a.pandalocker.tools.extend(a.pandalocker.controls[this.name][b]),
                d = a.pandalocker.tools.camelCase(b),
                e = this.options[d] || {};
            return c.init(this, e), c
        }, b.requestState = function(a) {
            for (var b = this.controls.length, c = "locked", d = 0; d < this.controls.length; d++) this.controls[d].requestState(function(d) {
                b--, "unlocked" === d && (c = d), 0 >= b && a(c)
            })
        }, b.canLock = function() {
            return !0
        }, b.renderGroup = function(b) {
            var c = a("<div class='onp-sl-group onp-sl-" + this.name + "'></div>");
            c.appendTo(b);
            var d = a("<div class='onp-sl-group-inner-wrap'></div>");
            if (d.appendTo(c), this.isFirst ? c.addClass("onp-sl-first-group") : this.isLast ? c.addClass("onp-sl-last-group") : c.addClass("onp-sl-middle-group"), c.addClass(this.isSingle ? "onp-sl-single-group" : "onp-sl-not-single-group"), c.addClass("onp-sl-group-index-" + this.options.index), this.element = c, this.innerWrap = d, this.renderSeparator(), this.options.text.header || this.options.text.message) {
                var e = a("<div class='onp-sl-text'></div>").appendTo(this.innerWrap);
                this.options.text.header && e.append(this.options.text.header.addClass("onp-sl-header onp-sl-strong").clone()), this.options.text.message && e.append(this.options.text.message.addClass("onp-sl-message").clone())
            }
            this._isRendered = !0, this.render(this.innerWrap)
        }, b.render = function() {
            this.renderControls(this.innerWrap)
        }, b.unlock = function(a, b, c) {
            this.locker.unlock(a, b, c)
        }, b.setState = function(a, b, c) {
            this.locker.setState(a, b || "group", c || this.name)
        }, b.renderControls = function(a) {
            for (var b = 0; b < this.controls.length; b++) this.controls[b].renderControl(a)
        }, b.showError = function(b, c) {
            if (this._isRendered) {
                if (this.element.find(".onp-sl-group-error").remove(), this._currentErrorFor === b) this.element.find(".onp-sl-group-error").remove(), this._currentErrorFor = null;
                else {
                    var d = a("<div class='onp-sl-group-error'>" + c + "</div>");
                    this.innerWrap.append(d), this._currentErrorFor = b
                }
                this.runHook("size-changed")
            } else this.locker._showError(b, c)
        }, b.addClassToLocker = function(a) {
            this.locker._addClass(a)
        }, b.showNotice = function(b, c, d) {
            var e = this;
            this.element.find(".onp-sl-group-notice").remove();
            var f = a("<div class='onp-sl-group-notice'>" + b + "</div>").hide();
            this.innerWrap.append(f), f.fadeIn(500, function() {
                e.runHook("size-changed")
            }), c || (c = 7e3), setTimeout(function() {
                f.length && f.fadeOut(800, function() {
                    f.remove(), d && d(), e.runHook("size-changed")
                })
            }, c)
        }, b.renderSeparator = function() {
            if (!this.isFirst && this.options.separator !== !1) {
                var b = this,
                    c = this.options.separator,
                    d = c.type;
                this.element.addClass("onp-sl-has-separator").addClass("onp-sl-has-" + d + "-separator");
                var e = a("<div class='onp-sl-group-separator onp-sl-" + d + "-separator'></div>"),
                    f = "hiding-link" === d ? "<a href='#'></a>" : "<span></span>",
                    g = a(f).addClass("onp-sl-title").appendTo(e);
                if (g.html(c.title || a.pandalocker.lang.misc_or), e.appendTo(this.innerWrap), "hiding-link" === d) {
                    this.element.addClass("onp-sl-separator-hides");
                    var h = a("<div class='onp-sl-hiding-link-container' style='display: none;'></div>");
                    h.appendTo(this.innerWrap), this.innerWrap = h, g.click(function() {
                        return b.element.removeClass("onp-sl-separator-hides"), b.element.addClass("onp-sl-separator-shows"), e.hide(), h.fadeIn(500), b.runHook("size-changed"), !1
                    })
                }
            }
        }, b.addHook = function(a, b, c) {
            return this.locker.addHook(a, b, c)
        }, b.runHook = function(a, b) {
            return this.locker.runHook(a, b)
        }, b.addFilter = function(a, b, c) {
            return this.locker.addFilter(a, b, c)
        }, b.applyFilters = function(a, b, c) {
            return this.locker.applyFilters(a, b, c)
        }, b.showScreen = function(a, b) {
            this.locker._showScreen(a, b)
        }, b.registerScreen = function(a, b) {
            this.locker._registerScreen(a, b)
        }, a.pandalocker.entity.group = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.group);
        b._defaults = {
            url: null,
            layout: "horizontal",
            flip: !1,
            order: ["twitter-tweet", "facebook-like"],
            behaviorOnError: "show_error",
            behaviorError: "Unable to create Social Buttons. Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock, Adguard etc.) or usage of private tabs in FireFox may cause this issue. Turn them off and try again.",
            counters: !0,
            facebook: {
                version: "v2.5",
                like: {
                    title: a.pandalocker.lang.socialButtons.facebookLike
                },
                share: {
                    title: a.pandalocker.lang.socialButtons.facebookShare
                }
            },
            twitter: {
                tweet: {
                    title: a.pandalocker.lang.socialButtons.twitterTweet
                },
                follow: {
                    title: a.pandalocker.lang.socialButtons.twitterFollow
                }
            },
            google: {
                plus: {
                    title: a.pandalocker.lang.socialButtons.googlePlus
                },
                share: {
                    title: a.pandalocker.lang.socialButtons.googleShare
                }
            },
            youtube: {
                title: a.pandalocker.lang.socialButtons.youtubeSubscribe
            },
            linkedin: {
                share: {
                    title: a.pandalocker.lang.socialButtons.linkedinShare
                }
            }
        }, b.name = "social-buttons", b.prepareOptions = function() {
            this.options.lang = this.locker.options.lang, "horizontal" !== this.options.layout && "vertical" !== this.options.layout && (this.options.layout = "horizontal"), this.options.url = this.options.url || this.locker.options.url, this.locker.options.buttons && (this.locker.options.buttons.order && (this.options.order = this.locker.options.buttons.order), "undefined" != typeof this.locker.options.buttons.counters && (this.options.counters = this.locker.options.buttons.counters)), this.locker.options.facebook && (this.options.facebook = a.extend(!0, this.options.facebook, this.locker.options.facebook)), this.locker.options.twitter && (this.options.twitter = a.extend(!0, this.options.twitter, this.locker.options.twitter)), this.locker.options.google && (this.options.google = a.extend(!0, this.options.google, this.locker.options.google)), this.locker.options.linkedin && (this.options.linkedin = a.extend(!0, this.options.linkedin, this.locker.options.linkedin)), this.locker.options.youtube && (this.options.youtube = a.extend(!0, this.options.youtube, this.locker.options.youtube))
        }, b.render = function() {
            this._groupIsRendered = !0, this.element.addClass(this.options.counters ? "onp-sl-has-counters" : "onp-sl-no-counters"), this.element.addClass("onp-sl-" + this.options.layout), this.element.addClass("onp-sl-lang-" + this.options.lang), this._loadedButtons = a.extend([], this.options.order), this.renderControls(this.innerWrap)
        }, b._loadedButtons = [], b.onControlError = function(a) {
            if (this._groupIsRendered) {
                var b = jQuery.inArray(a, this._loadedButtons);
                this._loadedButtons.splice(b, 1), 0 === this._loadedButtons.length && ("show_error" === this.options.behaviorOnError ? this.showError("adblock", this.options.behaviorError) : this.locker.unlock("error"))
            }
        }, b.createControl = function(b) {
            var c = a.pandalocker.tools.extend(a.pandalocker.controls[this.name][b]),
                d = b.split("-"),
                e = 2 === d.length ? d[0] : null,
                f = 2 === d.length ? d[1] : d[0],
                g = {};
            e ? (this.options[e] && (g = a.extend({}, this.options[e])), this.options[e][f] && (g = a.extend(g, this.options[e][f]))) : this.options[f] && (g = a.extend(g, this.options[f]));
            var h = e ? this.options[e] : {};
            return h.lang = this.options.lang, h.counters = this.options.counters, h.url = h.url || this.options.url, c.init(this, g, h), c
        }, b.canLock = function() {
            return 0 === this.options.order.length ? !1 : !0
        }, a.pandalocker.groups["social-buttons"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.control);
        b.init = function(b, c, d) {
            this.networkOptions = d;
            var e = this.name.split("-");
            this.networkName = this.sdk ? this.sdk : 2 === e.length ? e[0] : null, this.buttonName = 2 === e.length ? e[1] : e[0], a.pandalocker.entity.control.init.call(this, b, c), this._ssIdentity = this.networkName ? "page_" + a.pandalocker.tools.hash(this.url) + "_hash_" + this.networkName + "-" + this.buttonName : "page_" + a.pandalocker.tools.hash(this.url) + "_hash_" + this.buttonName
        }, b._extractUrl = function() {
            return a.pandalocker.tools.URL.normalize(this.options.url || this.networkOptions.url || window.location.href)
        }, b.render = function(b) {
            var c = this;
            if (this.networkName && this.control.addClass("onp-sl-" + this.networkName), this.container = a("<div class='onp-sl-social-button onp-sl-social-button-" + this.name + "'></div>"), this.container.appendTo(b), !this._hasError()) {
                this._setLoadingState();
                var d = function() {
                    var a = c.requireSdk(c.networkName, c.networkOptions);
                    a.fail(function(a) {
                        c._removeLoadingState(), c.showError(a)
                    }), a.done(function() {
                        c.setupEvents(), c.renderButton(c.container), c.verifyButton().always(function() {
                            c._removeLoadingState()
                        }).fail(function(a) {
                            c.showError(a)
                        })
                    })
                };
                this.locker.options.lazy ? this.addHook("raw-impress", function() {
                    c._rendered || (c._rendered = !0, d())
                }) : d()
            }
            this._addFlipEffect()
        }, b._addFlipEffect = function() {
            var b = this.control,
                c = this.innerWrap,
                d = this.group.options.flip,
                e = a.pandalocker.tools.has3d();
            if (d && e && b.addClass("onp-sl-flip") || b.addClass("onp-sl-no-flip"), !d) return !0;
            var f = this.options.title || (this.networkName ? a.pandalocker.lang[this.networkName + "_" + this.buttonName] : a.pandalocker.lang[this.networkName]),
                g = a("<a href='#'></a>").addClass("onp-sl-button-overlay").append(a("<div class='onp-sl-overlay-back'></div>")).append(a("<div class='onp-sl-overlay-front'></div>").append(a("<div class='onp-sl-overlay-icon'></div>")).append(a("<div class='onp-sl-overlay-line'></div>")).append(a("<div class='onp-sl-overlay-text'>" + f + "</div>"))).append(a("<div class='onp-sl-overlay-header'></div>"));
            g.prependTo(c), e || b.hover(function() {
                var b = a(this).find(".onp-sl-button-overlay");
                b.stop().animate({
                    opacity: 0
                }, 200, function() {
                    b.hide()
                })
            }, function() {
                var b = a(this).find(".onp-sl-button-overlay").show();
                b.stop().animate({
                    opacity: 1
                }, 200)
            }), a.pandalocker.isTouch() && (e ? g.click(function() {
                return b.hasClass("onp-sl-flip-hover") ? b.removeClass("onp-sl-flip-hover") : (a(".onp-sl-flip-hover").removeClass("onp-sl-flip-hover"), b.addClass("onp-sl-flip-hover")), !1
            }) : g.click(function() {
                var b = a(this);
                return b.stop().animate({
                    opacity: 0
                }, 200, function() {
                    b.hide()
                }), !1
            })), this.group._buttonsZIndex || (this.group._buttonsZIndex = 54), this.group._buttonsZIndex = this.group._buttonsZIndex - 4;
            var h = this.group._buttonsZIndex;
            b.css("z-index", h), g && (g.css("z-index", h), g.find(".onp-sl-overlay-front").css("z-index", 1), g.find(".onp-sl-overlay-back").css("z-index", -1), g.find(".onp-sl-overlay-header").css("z-index", 1))
        }, b._getStorageIdentity = function() {
            return this._ssIdentity
        }, b.verification = {
            container: "iframe",
            timeout: 5e3
        }, a.pandalocker.entity.socialButton = b
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.facebook = a.pandalocker.sdk.facebook || {
            name: "facebook",
            url1: "//connect.facebook.net/{lang}/all.js",
            url2: "//connect.facebook.net/{lang}/sdk.js",
            scriptId: "facebook-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return "object" == typeof window.FB
            },
            prepare: function() {
                0 === a("#fb-root").length && a("<div id='fb-root'></div>").appendTo(a("body"));
                var b = this.options && this.options.lang || "en_US";
                this.url1 = this.url1.replace("{lang}", b), this.url2 = this.url2.replace("{lang}", b), this.url = "v1.0" === this.options.version ? this.url1 : this.url2
            },
            _setup: !1,
            setup: function() {
                if (!this._setup) {
                    var b = this;
                    window.FB.init({
                        appId: b.options && b.options.appId || null,
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        version: b.options.version
                    }), window.FB.Event.subscribe("edge.create", function(b) {
                        a(document).trigger("onp-sl-facebook-like", [b])
                    }), window.FB.init = function() {}, a(document).trigger(b.name + "-init"), this._setup = !0
                }
            },
            createEvents: function() {
                var a = this,
                    b = this.isLoaded();
                if (b) a.setup();
                else {
                    if (window.fbAsyncInit) var c = window.fbAsyncInit;
                    window.fbAsyncInit = function() {
                        a.setup(), c && c(), window.fbAsyncInit = function() {}
                    }
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.twitter = a.pandalocker.sdk.twitter || {
            name: "twitter",
            url: "//platform.twitter.com/widgets.js",
            scriptId: "twitter-wjs",
            timeout: 1e4,
            isLoaded: function() {
                return "undefined" != typeof window.__twttrlr
            },
            createEvents: function() {
                var b = this,
                    c = this.isLoaded(),
                    d = function() {
                        a(document).trigger(b.name + "-init")
                    };
                return c ? (d(), void 0) : (window.twttr || (window.twttr = {}), window.twttr.ready || (window.twttr = a.extend(window.twttr, {
                    _e: [],
                    ready: function(a) {
                        this._e.push(a)
                    }
                })), twttr.ready(function() {
                    d()
                }), void 0)
            },
            prepare: function() {
                var b = function(b) {
                    return (b || b.data) && "string" == typeof b.data ? -1 !== b.data.indexOf(':["tweet"') ? a(document).trigger("onp-sl-twitter-tweet") : -1 !== b.data.indexOf(':["follow"') ? a(document).trigger("onp-sl-twitter-follow") : void 0 : void 0
                };
                window.addEventListener ? window.addEventListener("message", b, !1) : window.attachEvent("onmessage", b)
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.google = a.pandalocker.sdk.google || {
            name: "google",
            url: "//apis.google.com/js/plusone.js",
            scriptId: "google-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return "object" == typeof window.gapi
            },
            prepare: function() {
                var b = this;
                b.notAuthed = !1;
                var c = this.options && this.options.lang || "en";
                if (window.___gcfg = window.___gcfg || {
                        lang: c
                    }, window.OPanda_GooglePlusOne_Callback = function(b) {
                        "on" === b.state && a(document).trigger("onp-sl-google-plus", [b.href])
                    }, window.OPanda_GoogleShare_StartInteraction = function(b) {
                        a.pandalocker.data.__googleShareUrl = b.id
                    }, !a.pandalocker.tools.isTabletOrMobile()) {
                    var d = function(c) {
                        if ((c || c.data) && "string" == typeof c.data && -1 === c.data.indexOf("oauth2relay")) {
                            if (-1 !== c.data.indexOf("::drefresh")) return b.notAuthed = !0, void 0;
                            if (-1 !== c.data.indexOf("::_g_wasClosed") || -1 !== c.data.indexOf("::_g_closeMe")) {
                                if (b.notAuthed) return b.notAuthed = !1, void 0;
                                a(document).trigger("onp-sl-google-share")
                            }
                        }
                    };
                    window.addEventListener ? window.addEventListener("message", d, !1) : window.attachEvent("onmessage", d)
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.googleClient = a.pandalocker.sdk.googleClient || {
            name: "google-client",
            url: "//apis.google.com/js/client:platform.js?onload=OPanda_GoogleClient_Callback",
            scriptId: "google-client-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return window.gapi && "object" == typeof window.gapi.auth
            },
            prepare: function() {
                var b = this;
                window.OPanda_GoogleClient_Callback = function() {
                    a(document).trigger(b.name + "-script-loaded")
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.linkedin = a.pandalocker.sdk.linkedin || {
            name: "linkedin",
            url: "//platform.linkedin.com/in.js",
            scriptId: "linkedin-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return "object" == typeof window.IN
            },
            prepare: function() {
                window.OPanda_LinkedinShare_Callback = function(b) {
                    a(document).trigger("onp-sl-linkedin-share", [b])
                };
                var b = window.open;
                window.open = function(c, d, e) {
                    var f = b(c, d, e);
                    if (!f) return f;
                    var g = d || f.name;
                    return g ? "easyXDM_IN" !== g.substring(0, 10) ? f : (a.pandalocker.sdk.linkedin._activePopup = f, void 0) : f
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "facebook-like", b._defaults = {
            url: null,
            layout: "button_count",
            width: null,
            verbToDisplay: "like",
            colorScheme: "light",
            font: "tahoma",
            ref: null,
            theConfirmIssue: !1
        }, b.prepareOptions = function() {
            this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.options.layout = "box_count" : this.groupOptions.counters || (this.options.layout = "button")
        }, b.setupHooks = function() {
            var a = this;
            this.addHook("markup-created", function() {
                a._startTrackIFrameSizes()
            }), this.addHook("before-show-content", function() {
                a._stopTrackIFrameSizes()
            })
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-facebook-like", function(c, d) {
                b.url === a.pandalocker.tools.URL.normalize(d) && b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            this.button = a("<div></div>").appendTo(b), this.button.attr("data-show-faces", !1), this.button.attr("data-send", !1), this.button.attr("data-href", this.url), this.options.font && this.button.attr("data-font", this.options.font), this.options.colorScheme && this.button.attr("data-colorscheme", this.options.colorScheme), this.options.ref && this.button.attr("data-ref", this.options.ref), this.options.width && this.button.attr("data-width", this.options.width), this.options.layout && this.button.attr("data-layout", this.options.layout), this.options.verbToDisplay && this.button.attr("data-action", this.options.verbToDisplay), this.button.addClass("fb-like"), window.FB.XFBML.parse(b[0])
        }, b.customVerifyButton = function() {
            var a = this;
            if (this.customVerification = !1, 0 === a.control.find(a.verification.container).length) return !1;
            var b = a.control.find(a.verification.container).attr("style"),
                c = /height:\s*(\d+)px/i,
                d = c.exec(b);
            return d && d[1] && 0 !== parseInt(d[1]) ? !0 : !1
        }, b._startTrackIFrameSizes = function() {
            if (!this.options.theConfirmIssue) {
                var b = this;
                this._trackIFrameTimer = null, this.locker.locker.hover(function() {
                    var c = b.control.find("iframe");
                    c.length && (b._trackIFrameTimer = setInterval(function() {
                        var d = parseInt(c[0].style.height);
                        d || (d = c.height()), d > 200 && (b._stopTrackIFrameSizes(), a(document).trigger("onp-sl-facebook-like", [b.url]))
                    }, 500))
                }, function() {
                    b._stopTrackIFrameSizes()
                })
            }
        }, b._stopTrackIFrameSizes = function() {
            this._trackIFrameTimer && clearInterval(this._trackIFrameTimer)
        }, a.pandalocker.controls["social-buttons"]["facebook-like"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "facebook-share", b._defaults = {
            url: null,
            layout: "button_count",
            count: "standard",
            lang: "en_US",
            width: null,
            shareDialog: !1,
            name: null,
            caption: null,
            description: null,
            image: null,
            unlock: null
        }, b.prepareOptions = function() {
            return this.url = this._extractUrl(), this.options.appId && "117100935120196" != this.options.appId ? ("vertical" === this.groupOptions.layout ? this.options.layout = "box_count" : this.groupOptions.counters || (this.options.layout = "button"), void 0) : (this.showError(a.pandalocker.lang.errors.emptyFBAppIdError), !1)
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-facebook-share", function(c, d) {
                b.url === a.pandalocker.tools.URL.normalize(d) && b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a("<div></div>").appendTo(b), this.button.attr("data-href", this.url), this.options.width && this.button.attr("data-width", this.options.width), this.options.layout && (this.button.attr("data-layout", this.options.layout), this.button.attr("data-type", this.options.layout));
            var d = a("<div class='onp-sl-facebook-share-overlay'></div>").appendTo(b);
            c.options.shareDialog ? d.click(function() {
                return FB.ui({
                    method: "share",
                    href: c.url,
                    display: "popup"
                }, function(b) {
                    return console && console.log && console.log("AX12:"), console && console.log && console.log(b), a.pandalocker.tools.isTabletOrMobile() && "undefined" == typeof b || null === b ? (a(document).trigger("onp-sl-facebook-share", [c.url]), void 0) : ("undefined" != typeof b && null !== b && ("object" == typeof b && b.error_code && b.error_code > 0 || a(document).trigger("onp-sl-facebook-share", [c.url])), void 0)
                }), !1
            }) : d.click(function() {
                return FB.ui({
                    method: "feed",
                    name: c.options.name,
                    link: c.url,
                    picture: c.options.image,
                    caption: c.options.caption,
                    description: c.options.description
                }, function(b) {
                    return console && console.log && console.log("AX12:"), console && console.log && console.log(b), a.pandalocker.tools.isTabletOrMobile() && "undefined" == typeof b || null === b ? (a(document).trigger("onp-sl-facebook-share", [c.url]), void 0) : ("undefined" != typeof b && null !== b && ("object" == typeof b && b.error_code && b.error_code > 0 || a(document).trigger("onp-sl-facebook-share", [c.url])), void 0)
                }), !1
            }), this.button.addClass("fb-share-button"), window.FB.XFBML.parse(b[0])
        }, b.customVerifyButton = function() {
            var a = this;
            if (this.customVerification = !1, 0 === a.control.find(a.verification.container).length) return !1;
            var b = a.control.find(a.verification.container).attr("style"),
                c = /height:\s*(\d+)px/i,
                d = c.exec(b);
            return d && d[1] && 0 !== parseInt(d[1]) ? !0 : !1
        }, a.pandalocker.controls["social-buttons"]["facebook-share"] = b
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.data || (a.pandalocker.data = {}), a.pandalocker.data.__tweetedUrl = null, a.pandalocker.data.__tweetWindow = null;
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "twitter-tweet", b.verification = {
            container: "iframe",
            timeout: 5e3
        }, b._defaults = {
            doubleCheck: !1,
            url: null,
            text: null,
            via: null,
            related: null,
            count: "horizontal",
            lang: "en",
            counturl: null,
            size: "medium"
        }, b.prepareOptions = function() {
            if (!this.options.url && !this.networkOptions.url && a("link[rel='canonical']").length > 0 && (this.options.url = a("link[rel='canonical']").attr("href")), this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.showError(a.pandalocker.lang.errors.unsupportedTwitterTweetLayout) : this.groupOptions.counters || (this.options.count = "none"), this.groupOptions.lang) {
                var b = this.groupOptions.lang.split("_");
                this.options.lang = b[0]
            }
            if (!this.options.text) {
                var c = a("title");
                this.options.text = c.length > 0 ? a(c[0]).text() : ""
            }
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-twitter-tweet", function() {
                b.url === a.pandalocker.data.__tweetedUrl && (a.pandalocker.data.__tweetWindow && a.pandalocker.data.__tweetWindow.close && a.pandalocker.data.__tweetWindow.close(), a.pandalocker.data.__tweetWindow = null, b.unlock("button", b.name, b.url))
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a('<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>').appendTo(b), this.button.attr("data-url", this.url), this.button.attr("data-show-count", this.options.showCount), this.options.via && this.button.attr("data-via", this.options.via), this.options.text && this.button.attr("data-text", this.options.text), this.options.lang && this.button.attr("data-lang", this.options.lang), this.options.hashtags && this.button.attr("data-hashtags", this.options.hashtags), this.options.size && this.button.attr("data-size", this.options.size), this.options.dnt && this.button.attr("data-dnt", this.options.dnt);
            var d = a("<div class='onp-sl-feature-overlay'></div>").appendTo(b);
            d.click(function() {
                var b = c.tweet(c.options.doubleCheck);
                b.done(function() {
                    a(document).trigger("onp-sl-twitter-tweet", [c.url])
                })
            }), b.data("url-to-verify", c.url);
            var e = 5,
                f = function() {
                    if (!(b.find("iframe").length > 0))
                        if (window.twttr.widgets && window.twttr.widgets.load) window.twttr.widgets.load(b[0]);
                        else {
                            if (0 >= e) return;
                            e--, setTimeout(function() {
                                f()
                            }, 1e3)
                        }
                };
            f()
        }, b.tweet = function(b) {
            var c = this,
                d = a.Deferred();
            if (b) return this.connect(function() {
                var b = c.tweet(!1);
                b.done(function() {
                    var b = c.checkTweet(c.url);
                    b.done(function() {
                        d.resolve()
                    }), b.fail(function() {
                        c.showNotice(a.pandalocker.lang.errors.tweetNotFound)
                    })
                })
            }), d;
            var e = [];
            if (c.options.text) {
                var f = encodeURI(c.options.text);
                f = f.replace(/#/g, "%23"), f = f.replace(/\|/g, "-"), f = f.replace(/\&/g, "%26"), e.push(["text", f])
            }
            c.options.hashtags && e.push(["hashtags", c.options.hashtags]), c.options.via && e.push(["via", c.options.via]), c.options.related && e.push(["via", c.options.related]), e.push(["url", c.url]), a.pandalocker.data.__tweetedUrl = c.url;
            var g = a.pandalocker.tools.URL().scheme("http").host("twitter.com").path("/intent/tweet").query(e).toString(),
                h = 550,
                i = 420,
                j = screen.width ? screen.width / 2 - h / 2 + a.pandalocker.tools.findLeftWindowBoundry() : 0,
                k = screen.height ? screen.height / 2 - i / 2 + a.pandalocker.tools.findTopWindowBoundry() : 0;
            return a.pandalocker.data.__twitterAuth && a.pandalocker.data.__twitterAuth.closed === !1 ? (a.pandalocker.data.__twitterAuth.updateState(g, h, i, j, k), a.pandalocker.data.__tweetWindow = a.pandalocker.data.__twitterAuth, a.pandalocker.data.__twitterAuth = null) : a.pandalocker.data.__tweetWindow = window.open(g, "TwitterTweetWindow", "width=" + h + ",height=" + i + ",left=" + j + ",top=" + k), setTimeout(function() {
                var b = setInterval(function() {
                    a.pandalocker.data.__tweetWindow && a.pandalocker.data.__tweetWindow.closed === !1 || (clearInterval(b), d.resolve())
                }, 200)
            }, 200), d.promise()
        }, b.connect = function(b) {
            var c = this;
            if (a.pandalocker.data.twitterOAuthReady) a.pandalocker.data.__twitterAuthIdentityData ? b(a.pandalocker.data.__twitterAuthIdentityData, c._getServiceData()) : this._identify(function(a) {
                b(a, c._getServiceData())
            });
            else {
                var d = {
                        opandaHandler: "twitter",
                        opandaRequestType: "init",
                        opandaKeepOpen: !0,
                        opandaReadOnly: !0
                    },
                    e = a.pandalocker.tools.cookie("opanda_twid");
                e && "null" !== e && (d.opandaVisitorId = e);
                var f = c.options.proxy;
                for (var g in d) d.hasOwnProperty(g) && (f = a.pandalocker.tools.updateQueryStringParameter(f, g, d[g]));
                c._trackWindow("opandaHandler=twitter", function() {
                    setTimeout(function() {
                        a.pandalocker.data.twitterOAuthReady || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                    }, 500)
                });
                var h = 500,
                    i = 610,
                    j = screen.width ? screen.width / 2 - h / 2 + a.pandalocker.tools.findLeftWindowBoundry() : 0,
                    k = screen.height ? screen.height / 2 - i / 2 + a.pandalocker.tools.findTopWindowBoundry() : 0;
                a.pandalocker.data.__twitterAuth = window.open(f, "Twitter Tweet", "width=" + h + ",height=" + i + ",left=" + j + ",top=" + k + ",resizable=yes,scrollbars=yes,status=yes"), window.OPanda_TwitterOAuthCompleted = function(d) {
                    a.pandalocker.data.twitterOAuthReady = !0, c._saveVisitorId(d), c.connect(b)
                }, window.OPanda_TwitterOAuthDenied = function(b) {
                    c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in), c._saveVisitorId(b)
                }
            }
        }, b._saveVisitorId = function(b) {
            this._visitorId = b, a.pandalocker.data.__twitterVisitorId = b, a.pandalocker.tools.cookie("opanda_twid", b, {
                expires: 1e3,
                path: "/"
            })
        }, b._getServiceData = function() {
            return {
                visitorId: a.pandalocker.data.__twitterVisitorId
            }
        }, b._identify = function(b) {
            var c = this,
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: c.options.proxy,
                    data: {
                        opandaHandler: "twitter",
                        opandaRequestType: "user_info",
                        opandaVisitorId: a.pandalocker.data.__twitterVisitorId,
                        opandaReadOnly: !0
                    },
                    success: function(c) {
                        console.log(c), (!c || c.error || c.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText);
                        var e = {};
                        e.displayName = c.screen_name, e.twitterUrl = "https://twitter.com/" + c.screen_name, c.profile_image_url && (e.image = c.profile_image_url.replace("_normal", "")), a.pandalocker.data.__twitterAuthIdentityData = e, b(e)
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), b({})
                    }
                })
        }, b.checkTweet = function() {
            var b = this,
                c = a.Deferred(),
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: b.options.proxy,
                    data: {
                        opandaHandler: "twitter",
                        opandaRequestType: "get_tweets",
                        opandaVisitorId: a.pandalocker.data.__twitterVisitorId,
                        opandaReadOnly: !0
                    },
                    success: function(a) {
                        (!a || a.error || a.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText);
                        for (var e = 0; e < a.length; e++)
                            if (a[e].entities)
                                for (var f = 0; f < a[e].entities.urls.length; f++)
                                    if (a[e].entities.urls[f] && a[e].entities.urls[f].expanded_url === b.url) return c.resolve(), void 0;
                        c.reject()
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), callback({})
                    }
                });
            return c.promise()
        }, a.pandalocker.controls["social-buttons"]["twitter-tweet"] = b
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.data || (a.pandalocker.data = {}), a.pandalocker.data.__followedUrl = null, a.pandalocker.data.__followWindow = null;
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "twitter-follow", b.verification = {
            container: "iframe",
            timeout: 6e5
        }, b._defaults = {
            doubleCheck: !1,
            url: null,
            hideScreenName: !1,
            showCount: !0,
            lang: "en",
            size: "medium"
        }, b.prepareOptions = function() {
            if (!this.options.url || -1 === this.options.url.indexOf("twitter")) return this.showError(a.pandalocker.lang.errors.emptyTwitterFollowUrlError), !1;
            if (this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.showError(a.pandalocker.lang.errors.unsupportedTwitterFollowLayout) : this.groupOptions.counters || (this.options.showCount = !1), this.groupOptions.lang) {
                var b = this.groupOptions.lang.split("_");
                this.options.lang = b[0]
            }
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-twitter-follow", function() {
                b.url === a.pandalocker.data.__followedUrl && (a.pandalocker.data.__followWindow && a.pandalocker.data.__followWindow.close && a.pandalocker.data.__followWindow.close(), a.pandalocker.data.__followWindow = null, b.unlock("button", b.name, b.url))
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a('<a href="https://twitter.com/share" class="twitter-follow-button">Follow</a>').appendTo(b), this.button.attr("href", this.url), this.button.attr("data-show-count", this.options.showCount), this.options.showCount && this.button.attr("data-show-count", this.options.showCount), this.options.lang && this.button.attr("data-lang", this.options.lang), this.options.alignment && this.button.attr("data-alignment", this.options.alignment), this.options.size && this.button.attr("data-size", this.options.size), this.options.dnt && this.button.attr("data-dnt", this.options.dnt), this.options.hideScreenName && this.button.attr("data-show-screen-name", !1);
            var d = a("<div class='onp-sl-feature-overlay'></div>").appendTo(b);
            d.click(function() {
                var b = c.follow(c.options.doubleCheck);
                return b.done(function() {
                    a(document).trigger("onp-sl-twitter-follow", [c.url])
                }), !1
            }), b.data("url-to-verify", c.url);
            var e = 5,
                f = function() {
                    if (!(b.find("iframe").length > 0))
                        if (window.twttr.widgets && window.twttr.widgets.load) window.twttr.widgets.load(b[0]);
                        else {
                            if (0 >= e) return;
                            e--, setTimeout(function() {
                                f()
                            }, 1e3)
                        }
                };
            f()
        }, b.follow = function(b) {
            var c = this,
                d = a.Deferred();
            if (b) return this.connect(function() {
                var b = c.follow(!1);
                b.done(function() {
                    var b = c.checkFollower(c.url);
                    b.done(function() {
                        d.resolve()
                    }), b.fail(function() {
                        c.showNotice(a.pandalocker.lang.errors.followingNotFound)
                    })
                })
            }), d;
            var e = [];
            a.pandalocker.data.__followedUrl = c.url;
            var f = c.url.split("/");
            c.screenName = f[f.length - 1], e.push(["screen_name", c.screenName]);
            var g = a.pandalocker.tools.URL().scheme("http").host("twitter.com").path("/intent/follow").query(e).toString(),
                h = 550,
                i = 530,
                j = screen.width ? screen.width / 2 - h / 2 + a.pandalocker.tools.findLeftWindowBoundry() : 0,
                k = screen.height ? screen.height / 2 - i / 2 + a.pandalocker.tools.findTopWindowBoundry() : 0;
            return a.pandalocker.data.__twitterAuth && a.pandalocker.data.__twitterAuth.closed === !1 ? (a.pandalocker.data.__twitterAuth.updateState(g, h, i, j, k), a.pandalocker.data.__followWindow = a.pandalocker.data.__twitterAuth, a.pandalocker.data.__twitterAuth = null) : a.pandalocker.data.__followWindow = window.open(g, "TwitterFollowWindow", "width=" + h + ",height=" + i + ",left=" + j + ",top=" + k), setTimeout(function() {
                var b = setInterval(function() {
                    a.pandalocker.data.__followWindow && a.pandalocker.data.__followWindow.closed === !1 || (clearInterval(b), d.resolve())
                }, 200)
            }, 200), d.promise()
        }, b.connect = function(b) {
            var c = this;
            if (a.pandalocker.data.twitterOAuthReady) a.pandalocker.data.__twitterAuthIdentityData ? b(a.pandalocker.data.__twitterAuthIdentityData, c._getServiceData()) : this._identify(function(a) {
                b(a, c._getServiceData())
            });
            else {
                var d = {
                        opandaHandler: "twitter",
                        opandaRequestType: "init",
                        opandaKeepOpen: !0,
                        opandaReadOnly: !0
                    },
                    e = a.pandalocker.tools.cookie("opanda_twid");
                e && "null" !== e && (d.opandaVisitorId = e);
                var f = c.options.proxy;
                for (var g in d) d.hasOwnProperty(g) && (f = a.pandalocker.tools.updateQueryStringParameter(f, g, d[g]));
                c._trackWindow("opandaHandler=twitter", function() {
                    setTimeout(function() {
                        a.pandalocker.data.twitterOAuthReady || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                    }, 500)
                });
                var h = 500,
                    i = 610,
                    j = screen.width ? screen.width / 2 - h / 2 + a.pandalocker.tools.findLeftWindowBoundry() : 0,
                    k = screen.height ? screen.height / 2 - i / 2 + a.pandalocker.tools.findTopWindowBoundry() : 0;
                a.pandalocker.data.__twitterAuth = window.open(f, "Twitter Follow", "width=" + h + ",height=" + i + ",left=" + j + ",top=" + k + ",resizable=yes,scrollbars=yes,status=yes"), window.OPanda_TwitterOAuthCompleted = function(d) {
                    a.pandalocker.data.twitterOAuthReady = !0, c._saveVisitorId(d), c.connect(b)
                }, window.OPanda_TwitterOAuthDenied = function(b) {
                    c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in), c._saveVisitorId(b)
                }
            }
        }, b._saveVisitorId = function(b) {
            this._visitorId = b, a.pandalocker.data.__twitterVisitorId = b, a.pandalocker.tools.cookie("opanda_twid", b, {
                expires: 1e3,
                path: "/"
            })
        }, b._getServiceData = function() {
            return {
                visitorId: a.pandalocker.data.__twitterVisitorId
            }
        }, b._identify = function(b) {
            var c = this,
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: c.options.proxy,
                    data: {
                        opandaHandler: "twitter",
                        opandaRequestType: "user_info",
                        opandaVisitorId: a.pandalocker.data.__twitterVisitorId,
                        opandaReadOnly: !0
                    },
                    success: function(c) {
                        console.log(c), (!c || c.error || c.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText);
                        var e = {};
                        e.displayName = c.screen_name, e.twitterUrl = "https://twitter.com/" + c.screen_name, c.profile_image_url && (e.image = c.profile_image_url.replace("_normal", "")), a.pandalocker.data.__twitterAuthIdentityData = e, b(e)
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), b({})
                    }
                })
        }, b.checkFollower = function() {
            var b = this,
                c = a.Deferred(),
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: b.options.proxy,
                    data: {
                        opandaHandler: "twitter",
                        opandaRequestType: "get_followers",
                        opandaSceenName: b.screenName,
                        opandaVisitorId: a.pandalocker.data.__twitterVisitorId,
                        opandaReadOnly: !0
                    },
                    success: function(a) {
                        if ((!a || a.error || a.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText), a[0])
                            for (var b = 0; b < a[0].connections.length; b++)
                                if ("following" === a[0].connections[b]) return c.resolve(), void 0;
                        c.reject()
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), callback({})
                    }
                });
            return c.promise()
        }, a.pandalocker.controls["social-buttons"]["twitter-follow"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "google-plus", b._defaults = {
            url: null,
            lang: "en-US",
            size: "medium",
            width: null,
            align: "left",
            clientId: null,
            calltoactionlabel: "RECOMMEND",
            prefilltext: null
        }, b.prepareOptions = function() {
            return this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.options.size = "tall" : this.groupOptions.counters || (this.options.annotation = "none"), this.options.clientId ? void 0 : (this.showError(a.pandalocker.lang.errors.emptyGoogleClientId), !1)
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-google-plus", function(c, d) {
                b.url === a.pandalocker.tools.URL.normalize(d) && b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a("<div></div>").appendTo(b), this.button.attr("data-href", this.url), this.options.size && this.button.attr("data-size", this.options.size), this.options.annotation && this.button.attr("data-annotation", this.options.annotation), this.options.align && this.button.attr("data-align", this.options.align), this.options.expandTo && this.button.attr("data-expandTo", this.options.expandTo), this.options.recommendations && this.button.attr("data-recommendations", this.options.recommendations), this.button.attr("data-callback", "OPanda_GooglePlusOne_Callback"), this.button.addClass("g-plusone");
            var d = a("<div class='onp-sl-feature-overlay g-interactivepost'></div>").appendTo(b);
            d.attr("data-contenturl", this.url), d.attr("data-clientid", this.options.clientId), d.attr("data-cookiepolicy", "none"), d.attr("data-calltoactionurl", this.url), this.options.calltoactionlabel && d.attr("data-calltoactionlabel", this.options.calltoactionlabel), this.options.prefilltext && d.attr("data-prefilltext", this.options.prefilltext);
            var e = a.pandalocker.tools.hash(this.url),
                f = "googleOnShareCallback" + e;
            d.attr("data-onshare", f), window[f] || (window[f] = function(b) {
                b && "shared" === b.action && a(document).trigger("onp-sl-google-plus", [c.url])
            }), setTimeout(function() {
                window.gapi.plusone.go(b[0]), window.gapi.interactivepost.go(b[0])
            }, 100)
        }, a.pandalocker.controls["social-buttons"]["google-plus"] = b
    }(jQuery),
    function(a) {
        "use strict";
        a.pandalocker.data || (a.pandalocker.data = {}), a.pandalocker.data.__googleShareUrl = null;
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "google-share", b._defaults = {
            url: null,
            lang: "en-US",
            size: null,
            width: null,
            align: "left",
            clientId: null,
            calltoactionlabel: "RECOMMEND",
            prefilltext: null
        }, b.prepareOptions = function() {
            return this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.options.size = "tall" : this.groupOptions.counters || (this.options.annotation = "none"), this.options.clientId ? void 0 : (this.showError(a.pandalocker.lang.errors.emptyGoogleClientId), !1)
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-google-share", function(c, d) {
                var e = d || a.pandalocker.data.__googleShareUrl;
                b.url === a.pandalocker.tools.URL.normalize(e) && b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a("<div></div>").appendTo(b), this.button.attr("data-href", this.url), this.options.size && this.button.attr("data-size", this.options.size), this.options.align && this.button.attr("data-align", this.options.align), this.options.width && this.button.attr("data-width", this.options.width), this.button.addClass("g-plus").attr("data-action", "share");
            var d = a("<div class='onp-sl-feature-overlay g-interactivepost'></div>").appendTo(b);
            d.attr("data-contenturl", this.url), d.attr("data-clientid", this.options.clientId), d.attr("data-cookiepolicy", "none"), d.attr("data-calltoactionurl", this.url), this.options.calltoactionlabel && d.attr("data-calltoactionlabel", this.options.calltoactionlabel), this.options.prefilltext && d.attr("data-prefilltext", this.options.prefilltext);
            var e = a.pandalocker.tools.hash(this.url),
                f = "googleOnShareCallback" + e;
            d.attr("data-onshare", f), window[f] || (window[f] = function(b) {
                b && "shared" === b.action && a(document).trigger("onp-sl-google-share", [c.url])
            }), setTimeout(function() {
                window.gapi.plus.go(b[0]), window.gapi.interactivepost.go(b[0])
            }, 100)
        }, a.pandalocker.controls["social-buttons"]["google-share"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "youtube-subscribe", b.sdk = "google-client", b._defaults = {
            clientId: null,
            channelId: null,
            layout: "default",
            count: "default"
        }, b._extractUrl = function() {
            return this.options.channelId
        }, b.prepareOptions = function() {
            this.url = this._extractUrl(), this.options.channelId || this.showError(a.pandalocker.lang.errors.emptyYoutubeChannelId), this.options.clientId || this.showError(a.pandalocker.lang.errors.emptyGoogleClientId), "vertical" === this.groupOptions.layout ? this.showError(a.pandalocker.lang.errors.unsupportedYoutubeSubscribeLayout) : this.groupOptions.counters || (this.options.count = "hidden")
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-youtube-subscribe", function() {
                b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a("<div></div>").appendTo(b), this.button.attr("data-channelid", this.options.channelId), this.button.attr("data-layout", this.options.layout), this.button.attr("data-count", this.options.count), this.button.addClass("g-ytsubscribe"), setTimeout(function() {
                window.gapi.ytsubscribe.go(b[0])
            }, 100);
            var d = a("<div class='onp-sl-youtube-subscribe-overlay'></div>").appendTo(b);
            d.click(function() {
                return c.authorize(!1, function(b) {
                    return "immediate_failed" !== b.error ? b && b.status.signed_in ? (c.subscribe(), void 0) : (c.showNotice(a.pandalocker.lang.errors_not_signed_in), void 0) : void 0
                }), !1
            })
        }, b.authorize = function(a, b) {
            var c = this,
                d = {};
            d.client_id = c.options.clientId, d.immediate = a, d.scope = "https://www.googleapis.com/auth/youtube", gapi.auth.authorize(d, b)
        }, b.subscribe = function() {
            var b = this;
            gapi.client.load("youtube", "v3", function() {
                var c = gapi.client.youtube.subscriptions.insert({
                    part: "snippet",
                    resource: {
                        snippet: {
                            resourceId: {
                                kind: "youtube#channel",
                                channelId: b.options.channelId
                            }
                        }
                    }
                });
                c.execute(function(c) {
                    return c.error && "subscriptionDuplicate" != c.error.data[0].reason ? b.showNotice(c.error.data[0].message) : (a(document).trigger("onp-sl-youtube-subscribe"), void 0)
                })
            })
        }, a.pandalocker.controls["social-buttons"]["youtube-subscribe"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);
        b.name = "linkedin-share", b.verification.container = ".IN-widget", b.verification.timeout = 5e3, b._defaults = {
            url: null,
            counter: "right"
        }, b.prepareOptions = function() {
            this.url = this._extractUrl(), "vertical" === this.groupOptions.layout ? this.options.counter = "top" : this.groupOptions.counters || (this.options.counter = "none")
        }, b.setupEvents = function() {
            var b = this;
            a(document).bind("onp-sl-linkedin-share", function(c, d) {
                b.url === a.pandalocker.tools.URL.normalize(d) && b.unlock("button", b.name, b.url)
            })
        }, b.renderButton = function(b) {
            var c = this;
            this.button = a('<script type="IN/Share" data-onsuccess="OPanda_LinkedinShare_Callback" data-success="OPanda_LinkedinShare_Callback" data-onSuccess="OPanda_LinkedinShare_Callback"></script>'), this.options.counter && this.button.attr("data-counter", this.options.counter), this.button.attr("data-url", this.url), this.button.appendTo(b), IN.init(), IN.parse && IN.parse(this.button[0]), b.click(function() {
                setTimeout(function() {
                    if (a.pandalocker.sdk.linkedin._activePopup) {
                        var b = a.pandalocker.sdk.linkedin._activePopup;
                        a.pandalocker.sdk.linkedin._activePopup = !1;
                        var d = setInterval(function() {
                            b && b.closed === !1 || (clearInterval(d), a(document).trigger("onp-sl-linkedin-share", [c.url]))
                        }, 200)
                    }
                }, 200)
            })
        }, a.pandalocker.controls["social-buttons"]["linkedin-share"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.group);
        b._defaults = {
            order: ["facebook", "twitter", "google"],
            facebook: {
                version: "v2.5"
            },
            twitter: {},
            google: {},
            linkedin: {}
        }, b.name = "connect-buttons", b.setup = function() {
            this.isFirst || (this.options.text.message = this.options.text.message || a.pandalocker.lang.connectButtons.defaultMessage, this.options.text.message = a.pandalocker.tools.normilizeHtmlOption(this.options.text.message))
        }, a.pandalocker.groups["connect-buttons"] = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.actionControl);
        b.tag = '<a href="#"></a>', b.render = function(b) {
            var c = this;
            if (this.sdk = this.sdk || this.name, this.control.addClass("onp-sl-button"), this.icon = a("<div class='onp-sl-icon'></div>"), this.icon.appendTo(b), this.container = a("<div class='onp-sl-connect-button onp-sl-social-button-" + this.name + "'></div>"), this.container.appendTo(b), !this._hasError()) {
                this._lockLoadingState();
                var d = function() {
                    var a = c.requireSdk(c.sdk, c.options);
                    a.fail(function(a) {
                        c._unlockLoadingState(), c.showError(a)
                    }), a.done(function() {
                        c.setupEvents && c.setupEvents(), c.renderButton(c.container)
                    })
                };
                this.locker.options.lazy ? this.addHook("raw-impress", function() {
                    c._rendered || (c._rendered = !0, d())
                }) : d()
            }
            this.handleClick(), this._checkWaitingSubscription()
        }, b.processButtonTitle = function(b, c) {
            var d = b.replace("{long}", a.pandalocker.lang.signin_long);
            return d = d.replace("{short}", a.pandalocker.lang.signin_short), d = d.replace("{name}", c)
        }, b.handleClick = function() {
            var a = this;
            this.control.click(function() {
                return a.runHook("raw-interaction"), a._hasError() || a._isLoading() ? void 0 : (a.connect(function(b, c) {
                    a.runActions(b, c, !0)
                }), !1)
            })
        }, b._lockLoadingState = function() {
            this._setLoadingState("connect-button")
        }, b._unlockLoadingState = function() {
            this._removeLoadingState("connect-button")
        }, b.connect = function() {
            throw new Error("The control should implement the method 'connect'")
        }, b._getStorageIdentity = function() {
            return "opanda_" + a.pandalocker.tools.hash(this.name) + "_hash_" + this.name
        }, a.pandalocker.entity.connectButton = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);
        b.name = "facebook", b._defaults = {}, b.prepareOptions = function() {
            this.permissions = ["public_profile", "email"], this.restPermissions = this.permissions, this.declinedPermissions = []
        }, b.renderButton = function(b) {
            var c = this,
                d = this.processButtonTitle(this.lang.viaSignInLong, a.pandalocker.lang.signin_facebook_name),
                e = this.processButtonTitle(this.lang.viaSignInShort, a.pandalocker.lang.signin_facebook_name);
            this.longTitle = a("<span class='onp-sl-long'>" + d + "</span>").appendTo(b), this.shortTtle = a("<span class='onp-sl-short'>" + e + "</span>").appendTo(b);
            var f = this.groupOptions.loadingTimeout || 2e4,
                g = !1;
            setTimeout(function() {
                g || c.showError(a.pandalocker.lang.errors.invlidFacebookAppId)
            }, f), this._getLoginStatus(function() {
                g = !0, c._unlockLoadingState()
            })
        }, b.connect = function(b) {
            var c = this;
            if ("connected" === c._status && !this.restPermissions.length) return this._identify(function(a) {
                b(a, c._serviceData)
            });
            var d = {
                scope: c.restPermissions.join(",")
            };
            c.declinedPermissions.length > 0 && (d.auth_type = "rerequest");
            var e = !1;
            c._trackWindow("facebook.com/dialog/oauth", function() {
                setTimeout(function() {
                    e || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                }, 500)
            }), FB.login(function(d) {
                e = !0, c._checkPermissions(d, function() {
                    return "connected" !== c._status ? (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in), void 0) : c.restPermissions.length ? (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.res_errors_not_granted.replace("{permissions}", c.restPermissions.join(", "))), void 0) : c._identify(function(a) {
                        b(a, c._serviceData)
                    })
                })
            }, d)
        }, b._getLoginStatus = function(a) {
            var b = this;
            FB.getLoginStatus(function(c) {
                b._checkPermissions(c, a)
            })
        }, b._checkPermissions = function(b, c) {
            var d = this;
            return this._status = b.status, this._serviceData = b, b && "connected" === this._status ? (FB.api("/me/permissions", function(b) {
                if (b && b.data) {
                    if (!b.data[0] || b.data[0].permission || b.data[0].status) {
                        var e = a.grep(b.data, function(a) {
                                return "granted" !== a.status
                            }),
                            f = a.grep(b.data, function(a) {
                                return "granted" == a.status
                            });
                        e = a.map(e, function(a) {
                            return a.permission
                        }), f = a.map(f, function(a) {
                            return a.permission
                        })
                    } else {
                        var f = [],
                            e = [];
                        for (var g in b.data[0]) b.data[0][g] ? f.push(g) : e.push(g)
                    }
                    d.restPermissions = a.pandalocker.tools.diffArrays(d.permissions, f), d.declinedPermissions = a.pandalocker.tools.unionArrays(d.restPermissions, e), c && c()
                }
            }), void 0) : (c && c(), void 0)
        }, b._identify = function(a) {
            FB.api("/me?fields=email,first_name,last_name,gender,link", function(b) {
                var c = {};
                return b ? (c.source = "facebook", c.email = b.email, c.displayName = b.first_name + " " + b.last_name, c.name = b.first_name, c.family = b.last_name, c.gender = b.gender, c.facebookUrl = b.link, c.image = "https://graph.facebook.com/" + b.id + "/picture?type=large", c.social = !0, c.facebookId = b.id, a(c), void 0) : a(c)
            })
        }, a.pandalocker.controls["connect-buttons"].facebook = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);
        b.name = "google", b.sdk = "google-client", b._defaults = {}, b.prepareOptions = function() {
            return this.options.clientId ? (this.permissions = ["https://www.googleapis.com/auth/userinfo.profile"], this.permissions.push("https://www.googleapis.com/auth/userinfo.email"), -1 === a.inArray("youtube-subscribe", this.options.actions) || (this.permissions.push("https://www.googleapis.com/auth/youtube"), this.options.youtubeSubscribe && this.options.youtubeSubscribe.channelId) ? (this.restPermissions = this.permissions, this.declinedPermissions = [], void 0) : this.showError(a.pandalocker.lang.connectButtons.errorYouTubeChannelMissed)) : (this.showError(a.pandalocker.lang.connectButtons.google.clientIdMissed), void 0)
        }, b.renderButton = function(b) {
            var c = this.processButtonTitle(this.lang.viaSignInLong, a.pandalocker.lang.signin_google_name),
                d = this.processButtonTitle(this.lang.viaSignInShort, a.pandalocker.lang.signin_google_name);
            this.longTitle = a("<span class='onp-sl-long'>" + c + "</span>").appendTo(b), this.shortTtle = a("<span class='onp-sl-short'>" + d + "</span>").appendTo(b), this._unlockLoadingState()
        }, b.connect = function(b) {
            var c = this,
                d = !1,
                e = {
                    callback: function(e) {
                        return "immediate_failed" !== e.error ? (d = !0, e && e.status.signed_in ? c._identify(function(d, f) {
                            return "error" === d ? (c.showNotice(a.pandalocker.lang.connectButtons.google.unexpectedError.replace("{0}", f)), void 0) : (b(f, e), void 0)
                        }) : (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in), void 0)) : void 0
                    }
                };
            if (e.clientid = this.options.clientId, e.cookiepolicy = "single_host_origin", e.scope = this.permissions.join(" "), this.options.share) {
                var f = a.pandalocker.tools.capitaliseFirstLetter(this.options.share.type || "add");
                e.requestvisibleactions = "http://schema.org/" + f + "Action"
            }
            c._trackWindow("google.com/o/oauth2", function() {
                setTimeout(function() {
                    d || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                }, 500)
            }), console.log(e), gapi.auth.signIn(e)
        }, b._identify = function(a) {
            gapi.client.load("plus", "v1").then(function() {
                gapi.client.plus.people.get({
                    userId: "me"
                }).then(function(b) {
                    var c = {};
                    return b && b.result ? (c.source = "google", c.email = b.result.emails && b.result.emails[0] && b.result.emails[0].value, c.displayName = b.result.displayName, c.name = b.result.name && b.result.name.givenName, c.family = b.result.name && b.result.name.familyName, c.gender = b.result.gender, c.googleUrl = b.result.url, c.social = !0, b.result.image && b.result.image.url && (c.image = b.result.image.url.replace(/\?sz=\d+/gi, "")), a("success", c), void 0) : a("error", c)
                }, function(b) {
                    a("error", b.result.error.message)
                })
            })
        }, b.runYoutubeSubscribeAction = function(a, b, c, d, e) {
            var f = this;
            gapi.client.load("youtube", "v3", function() {
                var a = gapi.client.youtube.subscriptions.insert({
                    part: "snippet",
                    resource: {
                        snippet: {
                            resourceId: {
                                kind: "youtube#channel",
                                channelId: f.options.youtubeSubscribe.channelId
                            }
                        }
                    }
                });
                a.execute(function(a) {
                    return a && a.error ? a.error.data && a.error.data[0] && "subscriptionDuplicate" === a.error.data[0].reason ? (e(), void 0) : (console && console.log && console.log(a), f.showError(a.error.message), e("error"), void 0) : (f.runHook("got-youtube-subscriber", [a]), e(), void 0)
                })
            })
        }, a.pandalocker.controls["connect-buttons"].google = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);
        b.name = "twitter", b._defaults = {}, b.prepareOptions = function() {
            return this.options.proxy ? -1 === a.inArray("follow", this.options.actions) || this.options.follow && this.options.follow.user ? -1 === a.inArray("tweet", this.options.actions) || this.options.tweet && this.options.tweet.message ? void 0 : this.showError(a.pandalocker.lang.connectButtons.errorTwitterMessageMissed) : this.showError(a.pandalocker.lang.connectButtons.errorTwitterUserMissed) : (this.showError(a.pandalocker.lang.connectButtons.twitter.proxyEmpty), void 0)
        }, b.renderButton = function(b) {
            var c = this,
                d = this.processButtonTitle(this.lang.viaSignInLong, a.pandalocker.lang.signin_twitter_name),
                e = this.processButtonTitle(this.lang.viaSignInShort, a.pandalocker.lang.signin_twitter_name);
            this.longTitle = a("<span class='onp-sl-long'>" + d + "</span>").appendTo(b), this.shortTtle = a("<span class='onp-sl-short'>" + e + "</span>").appendTo(b), c._unlockLoadingState()
        }, b.connect = function(b) {
            var c = this;
            if (a.pandalocker.data.twitterOAuthReady) this._identify(function(a) {
                b(a, c._getServiceData())
            });
            else {
                var d = a.extend(!0, {}, c.options);
                delete d.proxy;
                var e = {
                        opandaHandler: "twitter",
                        opandaRequestType: "init",
                        opandaTwitterOptions: JSON.stringify(d)
                    },
                    f = a.pandalocker.tools.cookie("opanda_twid");
                f && "null" !== f && (e.opandaVisitorId = f);
                var g = c.options.proxy;
                for (var h in e) e.hasOwnProperty(h) && (g = a.pandalocker.tools.updateQueryStringParameter(g, h, e[h]));
                c._trackWindow("opandaHandler=twitter", function() {
                    setTimeout(function() {
                        a.pandalocker.data.twitterOAuthReady || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                    }, 500)
                }); {
                    window.open(g, "Twitter Sign-In", "width=500,height=450,resizable=yes,scrollbars=yes,status=yes")
                }
                window.OPanda_TwitterOAuthCompleted = function(d) {
                    a.pandalocker.data.twitterOAuthReady = !0, c._saveVisitorId(d), c.connect(b)
                }, window.OPanda_TwitterOAuthDenied = function(b) {
                    c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in), c._saveVisitorId(b)
                }
            }
        }, b._saveVisitorId = function(b) {
            this._visitorId = b, a.pandalocker.tools.cookie("opanda_twid", b, {
                expires: 1e3,
                path: "/"
            })
        }, b._getServiceData = function() {
            var a = this;
            return {
                visitorId: a._visitorId
            }
        }, b._identify = function(b) {
            var c = this,
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: c.options.proxy,
                    data: {
                        opandaHandler: "twitter",
                        opandaRequestType: "user_info",
                        opandaVisitorId: c._visitorId
                    },
                    success: function(a) {
                        (!a || a.error || a.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText);
                        var c = {};
                        if (!a) return b(c);
                        if (a.name) {
                            var e = a.name.split(" ", 2);
                            2 === e.length ? (c.name = e[0], c.family = e[1]) : c.name = a.name
                        } else c.name = a.name;
                        c.source = "twitter", c.email = a.email, c.displayName = a.screen_name, c.twitterUrl = "https://twitter.com/" + a.screen_name, a.profile_image_url && (c.image = a.profile_image_url.replace("_normal", "")), b(c)
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), b({})
                    }
                })
        }, b.runFollowAction = function(b, c, d, e, f) {
            var g = this,
                h = {
                    opandaHandler: "twitter",
                    opandaRequestType: "follow",
                    opandaVisitorId: g._visitorId,
                    opandaFollowTo: d.user,
                    opandaNotifications: d.notifications
                };
            h = a.pandalocker.filters.run(g.locker.id + ".ajax-data", [h]), h = a.pandalocker.filters.run(g.locker.id + ".twitter-follow.ajax-data", [h]);
            var i = a.ajax({
                type: "POST",
                dataType: "json",
                url: g.options.proxy,
                data: h
            });
            i.success(function(a) {
                return (!a || a.error || a.errors) && console && console.log && console.log("Unable to follow: " + i.responseText), a && a.error ? (g.showScreen("default"), g.showNotice("Unable to perform the follow action due to the error: " + a.error), void 0) : (f(), void 0)
            }), i.error(function() {
                g.showScreen("default"), g.showNotice("Unable to perform the follow action due to the unexpected error. See the logs for more details."), console && console.log && console.log("Unable to follow: " + i.responseText)
            })
        }, b.runTweetAction = function(b, c, d, e, f) {
            var g = this,
                h = {
                    opandaHandler: "twitter",
                    opandaRequestType: "tweet",
                    opandaVisitorId: g._visitorId,
                    opandaTweetMessage: d.message
                };
            h = a.pandalocker.filters.run(g.locker.id + ".ajax-data", [h]), h = a.pandalocker.filters.run(g.locker.id + ".twitter-tweet.ajax-data", [h]);
            var i = a.ajax({
                type: "POST",
                dataType: "json",
                url: g.options.proxy,
                data: h
            });
            i.success(function(a) {
                return (!a || a.error || a.errors) && console && console.log && console.log("Unable to tweet: " + i.responseText), a && a.error ? (g.showScreen("default"), g.showNotice("Unable to perform the tweet action due to the error: " + a.error), void 0) : (f(), void 0)
            }), i.error(function() {
                g.showScreen("default"), g.showNotice("Unable to perform the tweet action due to the unexpected error. See the logs for more details."), console && console.log && console.log("Unable to follow: " + i.responseText)
            })
        }, a.pandalocker.controls["connect-buttons"].twitter = b
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);
        b.name = "linkedin", b._defaults = {}, b.prepareOptions = function() {
            return this.options.clientId ? void 0 : (this.showError(a.pandalocker.lang.connectButtons.linkedin.clientIdMissed), void 0)
        }, b.renderButton = function(b) {
            var c = this,
                d = this.processButtonTitle(this.lang.viaSignInLong, a.pandalocker.lang.signin_linkedin_name),
                e = this.processButtonTitle(this.lang.viaSignInShort, a.pandalocker.lang.signin_linkedin_name);
            this.longTitle = a("<span class='onp-sl-long'>" + d + "</span>").appendTo(b), this.shortTtle = a("<span class='onp-sl-short'>" + e + "</span>").appendTo(b), c._unlockLoadingState()
        }, b.connect = function(b) {
            var c = this;
            if (a.pandalocker.data.linkedInOAuthReady) this._identify(function(a) {
                b(a, c._getServiceData())
            });
            else {
                var d = a.extend(!0, {}, c.options);
                delete d.proxy;
                var e = {
                        opandaHandler: "linkedin",
                        opandaRequestType: "init",
                        opandaLinkedinOptions: JSON.stringify(d)
                    },
                    f = c.options.proxy;
                for (var g in e) e.hasOwnProperty(g) && (f = a.pandalocker.tools.updateQueryStringParameter(f, g, e[g]));
                c._trackWindow("opandaHandler=linkedin", function() {
                    setTimeout(function() {
                        a.pandalocker.data.linkedInOAuthReady || (c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in))
                    }, 500)
                }); {
                    window.open(f, "LinkedIn Sign-In", "width=500,height=450,resizable=yes,scrollbars=yes,status=yes")
                }
                window.OPanda_LinkedInOAuthCompleted = function(d) {
                    a.pandalocker.data.linkedInOAuthReady = !0, c._accessToken = d, c.connect(b)
                }, window.OPanda_LinkedInOAuthDenied = function() {
                    c.runHook("raw-social-app-declined"), c.showNotice(a.pandalocker.lang.errors_not_signed_in)
                }
            }
        }, b._getServiceData = function() {
            var a = this;
            return {
                accessToken: a._accessToken
            }
        }, b._identify = function(b) {
            var c = this,
                d = a.ajax({
                    type: "POST",
                    dataType: "json",
                    url: c.options.proxy,
                    data: {
                        opandaHandler: "linkedin",
                        opandaRequestType: "user_info",
                        opandaAccessToken: c._accessToken
                    },
                    success: function(a) {
                        (!a || a.error || a.errors) && console && console.log && console.log("Unable to get the user data: " + d.responseText);
                        var c = {};
                        return a ? (c.source = "linkedin", c.email = a.emailAddress, c.displayName = a.firstName + " " + a.lastName, c.name = a.firstName, c.family = a.lastName, c.linkedinUrl = a.publicProfileUrl, c.social = !0, a.pictureUrls && a.pictureUrls.values && (c.image = a.pictureUrls.values[0]), b(c), void 0) : b(c)
                    },
                    error: function() {
                        console && console.log && console.log("Unable to get the user data: " + d.responseText), b({})
                    }
                })
        }, a.pandalocker.controls["connect-buttons"].linkedin = b
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.googleClient = a.pandalocker.sdk.googleClient || {
            name: "google-client",
            url: "//apis.google.com/js/client:platform.js?onload=OPanda_GoogleClient_Callback",
            scriptId: "google-client-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return window.gapi && "object" == typeof window.gapi.auth
            },
            prepare: function() {
                var b = this;
                window.OPanda_GoogleClient_Callback = function() {
                    a(document).trigger(b.name + "-script-loaded")
                }
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a.onepress || (a.onepress = {}), a.pandalocker.sdk || (a.pandalocker.sdk = {}), a.pandalocker.sdk.linkedinConnect = a.pandalocker.sdk.linkedinConnect || {
            name: "linkedin-connect",
            url: "//platform.linkedin.com/in.js?async=true",
            scriptId: "linkedin-jssdk",
            timeout: 1e4,
            isLoaded: function() {
                return "object" == typeof window.IN
            },
            prepare: function() {
                window.OPanda_LinkedinShare_Callback = function(b) {
                    a(document).trigger("onp-sl-linkedin-share", [b])
                }
            },
            createEvents: function() {
                var b = this,
                    c = this.isLoaded(),
                    d = function() {
                        window.IN.init({
                            api_key: b.options.apiKey
                        }), window.IN.init = function() {}, a(document).trigger(b.name + "-init")
                    };
                return c ? (d(), void 0) : (a(document).bind(b.name + "-script-loaded", function() {
                    d()
                }), void 0)
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = a.pandalocker.tools.extend(a.pandalocker.entity.group);
        b._defaults = {
            order: ["form"],
            text: a.pandalocker.lang.subscription.defaultText,
            separator: {
                type: "hiding-link",
                title: a.pandalocker.lang.misc_or_enter_email
            }
        }, b.name = "subscription", a.pandalocker.groups.subscription = b
    }(jQuery),
    function($) {
        "use strict";
        var form = $.pandalocker.tools.extend($.pandalocker.entity.actionControl);
        form.name = "form", form._defaults = {
            type: "email-form",
            fields: null,
            unlocksPerPage: !1
        }, form.setup = function() {
            this.options.actions && 0 !== this.options.actions.length || (this.options.actions = ["subscribe"]), $.pandalocker.entity.actionControl.setup.apply(this), this.options.requireName = this.options.requireName || this.options.subscribe && this.options.subscribe.requireName, this.advancedValidation = !0, "email-form" === this.options.type ? (this.advancedValidation = !1, this.options.fields = [{
                id: "email",
                type: "email",
                placeholder: $.pandalocker.lang.errors_empty_email,
                req: !0
            }]) : "name-email-form" === this.options.type && (this.advancedValidation = !0, this.options.fields = [{
                id: "fullname",
                type: "text",
                placeholder: $.pandalocker.lang.misc_enter_your_name,
                req: !0
            }, {
                id: "email",
                type: "email",
                placeholder: $.pandalocker.lang.misc_enter_your_email,
                req: !0
            }])
        }, form._memorize = function(a, b) {
            var c = "opanda_" + a;
            if (localStorage && localStorage.setItem) try {
                localStorage.setItem(c, b)
            } catch (d) {
                $.pandalocker.tools.cookie(c, b, {
                    expires: 365,
                    path: "/"
                })
            } else $.pandalocker.tools.cookie(c, b, {
                expires: 365,
                path: "/"
            })
        }, form._getFromMemory = function(a) {
            var b = "opanda_" + a,
                c = localStorage && localStorage.getItem && localStorage.getItem(b);
            return c || (c = $.pandalocker.tools.cookie(b)), c
        }, form.submit = function() {
            var a = this;
            if (!this.validate()) return !1;
            if (this.options.preview) return console.log(this.getValues()), this.showNotice(window.bizpanda && window.bizpanda.res && window.bizpanda.res["subscription-preview-mode"] || "The locker is in the preview mode. The subscription does not work here."), void 0;
            var b = this.$button.text();
            this.$button.addClass("load").prop("disabled", !0), this.$button.html("&nbsp;");
            var c = a.runActions(this.getValues(), {});
            c.fail(function() {
                a.$button.removeClass("load").removeProp("disabled"), a.$button.text(b)
            })
        }, form.getValues = function() {
            var a = this,
                b = this.options.fields,
                c = {};
            return $.each(b, function(b, d) {
                d && d.type && d.id && (c[d.id] = a.getFieldValue(d))
            }), c
        }, form.getFieldValue = function(a) {
            var b = a.type,
                c = $.pandalocker.hooks.run("get-field-value-" + b, [a]);
            if ("undefined" != typeof c) return c;
            "email" === a.id ? this._memorize("email", $.trim(a._$input.val())) : "fullname" === a.id && this._memorize("fullname", $.trim(a._$input.val()));
            var d = $.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(b)),
                e = "get" + d + "Value";
            return this[e] ? this[e](a) : a._$input ? $.trim(a._$input.val()) : null
        }, form.getDateValue = function(a) {
            return $.pandalocker.tools.isTabletOrMobile() ? $.trim(a._$input.val()) : a._$input.data("value")
        }, form.getCheckboxValue = function(a) {
            return a._$input.is(":checked") ? a.onValue : a.offValue
        }, form.validate = function() {
            var a = this,
                b = this.options.fields,
                c = !0;
            return $.each(b, function(b, d) {
                a.advancedValidation && d._$input && d._$input.bind("change keyup blur", function() {
                    a.validateField(d)
                }), a.validateField(d) || (c = !1)
            }), c
        }, form.validateField = function(field) {
            var type = field.type;
            this.hideValidationErrors(field);
            var result = $.pandalocker.hooks.run("validate-field-" + type, [field]);
            if ("undefined" != typeof result) return result;
            var typeName = $.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(type)),
                method = "validate" + typeName,
                res = this[method] ? this[method](field) : !0;
            if (res && field.validation && (field.req || !field.req && $.trim(field._$input.val()))) {
                var value = $.trim(field._$input.val()),
                    expression = null,
                    validationError = field.validationError;
                if (field.validation instanceof RegExp) expression = field.validation;
                else {
                    var regexp = new RegExp("^/.*?/[ims]*$");
                    if (regexp.test(field.validation)) eval("expression = " + field.validation);
                    else if ("month/day/year" === field.validation) {
                        expression = /^\d\d\/\d\d\/\d\d\d\d$/;
                        var parts = value.split("/");
                        if (parts.length < 3) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_date), !1;
                        var month = parseInt(parts[0]),
                            day = parseInt(parts[1]),
                            year = parseInt(parts[2]);
                        if (1 > month || month > 12) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_month), !1;
                        if (1 > day || day > 31) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_day), !1
                    } else if ("month/year" === field.validation) {
                        expression = /^\d\d\/\d\d\d\d$/;
                        var parts = value.split("/");
                        if (parts.length < 2) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_date), !1;
                        var month = parseInt(parts[0]),
                            year = parseInt(parts[1]);
                        if (1 > month || month > 12) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_month), !1
                    } else if ("month" === field.validation) {
                        var month = parseInt(value);
                        if (1 > month || month > 12) return this.showValidationError(field, $.pandalocker.lang.errors_invalid_month), !1
                    } else expression = "year" === field.validation ? /^\d\d\d\d$/ : new RegExp(field.validation)
                }
                if (expression && !expression.test(value)) return this.showValidationError(field, validationError ? validationError : $.pandalocker.lang.errors_invalid_value), !1
            }
            return this.runHook("size-changed"), res
        }, form.validateText = function(a, b) {
            var c = $.trim(a._$input.val());
            return !a.req || c && c.length ? !0 : ("fullname" === a.id ? b = $.pandalocker.lang.errors_empty_name : "email" === a.id && (b = $.pandalocker.lang.errors_empty_email), this.showValidationError(a, b ? b : $.pandalocker.lang.errors_empty_field), !1)
        }, form.validateHidden = function() {
            return !0
        }, form.validateDate = function(a) {
            var b = this.validateText(a);
            return b ? !0 : b
        }, form.validateEmail = function(a) {
            var b = this.validateText(a);
            if (!b) return b;
            var c = $.trim(a._$input.val());
            return $.pandalocker.tools.isValidEmailAddress(c) ? !0 : (this.showValidationError(a, $.pandalocker.lang.errors_inorrect_email), !1)
        }, form.validatePhone = function(a) {
            return this.validateText(a)
        }, form.validateUrl = function(a) {
            var b = this.validateText(a);
            if (!b) return b;
            var c = $.trim(a._$input.val());
            return $.pandalocker.tools.isValidUrl(c) ? !0 : (this.showValidationError(a, "Please enter a valid URL."), !1)
        }, form.validateBirthday = function(a) {
            var b = this.validateText(a);
            if (!b) return b;
            var c = $.trim(a._$input.val()),
                d = c.split("/");
            if (d.length < 2) return this.showValidationError(a, "Please enter a valid date."), !1;
            var e = parseInt(d[1]),
                f = parseInt(d[0]);
            if ("mm/dd" === a.maskPlaceholder) var e = parseInt(d[0]),
                f = parseInt(d[1]);
            return 1 > f || f > 31 ? (this.showValidationError(a, "Please enter a valid date."), !1) : 1 > e || e > 12 ? (this.showValidationError(a, "Please enter a valid date."), !1) : !0
        }, form.validateInteger = function(a) {
            var b = this.validateText(a);
            if (!b) return b;
            var c = $.trim(a._$input.val());
            return c || a.req ? (c = parseInt(c), isNaN(c) ? (this.showValidationError(a, "Please enter an integer number."), !1) : a.min && c < a.min ? (this.showValidationError(a, "Please enter a number greater than or equal to {0}.".replace("{0}", a.min)), !1) : a.max && c > a.max ? (this.showValidationError(a, "Please enter a number less than or equal to {0}.".replace("{0}", a.max)), !1) : !0) : !0
        }, form.validateCheckbox = function(a) {
            var b = a._$input.is(":checked");
            return a.req && !b ? (this.showValidationError(a, "Please mark this checkbox to continue."), !1) : !0
        }, form.showValidationError = function(a, b) {
            var c = a._$wrap,
                d = this;
            if (this.advancedValidation) {
                var e = $('<div class="onp-sl-validation-error"></div>').html(b);
                c.append(e), c.addClass("onp-sl-error-state")
            } else {
                if (this._validationErrorShown) return;
                this._validationErrorShown = !0, this.showNotice(b, function() {
                    d._validationErrorShown = !1
                })
            }
        }, form.hideValidationErrors = function(a) {
            if (this.advancedValidation) {
                var b = a._$wrap;
                b.find(".onp-sl-validation-error").remove(), b.removeClass("onp-sl-error-state")
            }
        }, form.render = function(a) {
            var b = this;
            this.options.fields && this.options.fields.length > 1 && this.addClassToLocker("onp-sl-custom-form");
            var c = this.options.fields;
            for (var d in c)
                if (c.hasOwnProperty(d)) {
                    var e = c[d];
                    e && e.type && (e._$input = this.renderField(a, e))
                } a.find("input").keypress(function(a) {
                13 === a.which && b.control.find(".onp-sl-submit").click()
            }), this.$button = this.renderSubmitButton(a), this._checkWaitingSubscription()
        }, form.renderSubmitButton = function(a) {
            var b = this,
                c = this.options.buttonText || this.groupOptions.text.buttonText || this.lang.btnSubscribe,
                d = $.pandalocker.tools.normilizeHtmlOption(this.options.noSpamText || this.groupOptions.text.noSpamText || $.pandalocker.lang.noSpam),
                e = $("<div></div>").addClass("onp-sl-field").addClass("onp-sl-field-submit"),
                f = $("<button class='onp-sl-button onp-sl-form-button onp-sl-submit'>" + c + "</button>");
            return this.group.isFirst && f.addClass("onp-sl-button-primary"), f.appendTo(e), d.addClass("onp-sl-note").addClass("onp-sl-nospa"), d.appendTo(e), f.click(function() {
                return b.submit(), !1
            }), e.appendTo(a), f
        }, form.renderField = function(a, b) {
            var c = b.type,
                d = b.id,
                e = $("<div class='onp-sl-field'></div>");
            if (b._$wrap = e, d && e.addClass("onp-sl-field-" + d), c && e.addClass("onp-sl-field-" + c), b.title && "hidden" !== c) {
                var f = $("<div class='onp-sl-field-title'></div>");
                f.html(b.title), f.appendTo(e)
            }
            e.appendTo(a);
            var g = $("<div class='onp-sl-field-control'></div>");
            g.appendTo(e);
            var h = $.pandalocker.hooks.run("render-" + c, [a, b]);
            if (h) return h;
            var i = $.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(c)),
                j = "render" + i;
            if (!this[j]) return this.showError('Cannot render a field of the type "' + c + '".');
            var k = this[j](g, b);
            return "email" === b.id ? k.val(this._getFromMemory("email")) : "fullname" === b.id && k.val(this._getFromMemory("fullname")), k
        }, form.renderEmail = function(a, b) {
            return this.renderText(a, b, "text", "email")
        }, form.renderPhone = function(a, b) {
            return this.renderText(a, b, "text", "phone")
        }, form.renderUrl = function(a, b) {
            return this.renderText(a, b, "text", "website")
        }, form.renderInteger = function(a, b) {
            return this.renderText(a, b, "text", "interger")
        }, form.renderHidden = function(a, b) {
            var c = $("<input type='hidden' id='onp-sl-input-" + b.id + "' />");
            return b.value && c.attr("value", b.value), c.appendTo(a), c
        }, form.renderBirthday = function(a, b) {
            return b.mask || (b.mask = "99/99"), b.maskPlaceholder || (b.maskPlaceholder = "dd/mm"), this.renderText(a, b, "text", "birthday")
        }, form.renderDate = function(a, b) {
            if ($.pandalocker.tools.isTabletOrMobile()) return this.renderText(a, b, "date");
            var c = this.renderText(a, b, "text");
            if (!window.Pikaday) return this.showError('Unable to create a field of the type "date" due to the lib Pikaday not found.');
            c.attr("readOnly", "true");
            new Pikaday({
                field: c[0],
                container: a[0],
                format: "DD MMM YYYY",
                onSelect: function() {
                    c.data("value", this.getMoment().format("YYYY-MM-DD"))
                }
            });
            return c
        }, form.renderText = function(a, b, c, d) {
            if (b.icon) {
                var e = b.iconPosition || "right";
                if ("none" !== e) {
                    var f = $("<i class='onp-sl-icon'></i>").addClass(b.icon);
                    "right" === e ? f.addClass("onp-sl-icon-append") : f.addClass("onp-sl-icon-prepend"), f.appendTo(a)
                }
            }
            c || (c = "text"), b.password && (c = "password");
            var g = $("<input type='" + c + "' class='onp-sl-input' id='onp-sl-input-" + b.id + "' />");
            if (b.placeholder && g.attr("placeholder", b.placeholder), b.value && g.attr("value", b.value), d && g.attr("name", d), b.mask) {
                if (!$.mask) return this.showError("Unable to create a masked input, the lib not found");
                var h = {};
                b.maskPlaceholder && (h.placeholder = b.maskPlaceholder), g.mask(b.mask, h)
            }
            return g.appendTo(a), g
        }, form.renderCheckbox = function(a, b) {
            var c = $("<label></lable>"),
                d = $("<input type='checkbox' />");
            d.appendTo(c), b.markedByDefault && d.attr("checked", "checked");
            var e = $("<span class='onp-sl-checkbox' id='onp-sl-input-" + b.id + "' />");
            e.appendTo(c);
            var f = $("<span></span>");
            return b.description && f.html(b.description), f.appendTo(c), c.appendTo(a), d
        }, form.renderDropdown = function(a, b) {
            var c = $("<select class='onp-sl-input onp-sl-dropdown'></select>"),
                d = $("<i></i>");
            for (var e in b.choices) {
                var f = $("<option></option>").attr("value", b.choices[e]).text(b.choices[e]);
                f.appendTo(c)
            }
            return c.appendTo(a), d.appendTo(a), c
        }, form.renderSeparator = function() {
            return null
        }, form.renderHtml = function(a, b) {
            return a.html(b.html), null
        }, form.renderLabel = function(a, b) {
            return a.html(b.text), null
        }, form._getStorageIdentity = function() {
            var a = "";
            if (this.options.unlocksPerPage) {
                var b = $.pandalocker.tools.URL.normalize(this.options.url || window.location.href);
                a = "opanda_" + $.pandalocker.tools.hash(b) + "_hash_" + this.name
            } else a = "opanda_" + $.pandalocker.tools.hash(this.options.listId + this.options.service) + "_hash_" + this.name;
            return a = $.pandalocker.filters.run("subscription-form-get-storage-identity", [a])
        }, $.pandalocker.controls.subscription.form = form
    }(jQuery),
    function(a) {
        "use strict";
        a.fn.pandalocker || (a.pandalocker.widget("pandalocker", {
            options: {},
            _isLocked: !1,
            _defaults: {
                text: {
                    header: null,
                    message: null
                },
                theme: {
                    name: "starter"
                },
                lang: "en_US",
                groups: {
                    order: ["social-buttons"],
                    union: "or"
                },
                terms: !1,
                privacyPolicy: !1,
                termsPopup: !1,
                connectButtons: {},
                socialButtons: {},
                overlap: {
                    mode: "full",
                    position: "middle",
                    intensity: 5,
                    altMode: "transparence"
                },
                cssClass: null,
                demo: !1,
                highlight: !0,
                googleAnalytics: !1,
                locker: {
                    off: !1,
                    stepByStep: !1,
                    close: !1,
                    timer: 0,
                    mobile: !0,
                    expires: !1,
                    useCookies: !1,
                    scope: !1,
                    loadingTimeout: 1e3,
                    tumbler: !0,
                    tumblerInterval: 500,
                    naMode: "show-error",
                    visibility: [],
                    inAppBrowsers: "visible_with_warning",
                    inAppBrowsersWarning: "You are viewing this page in the {browser}. The locker may work incorrectly in this browser. Please open this page in a standard browser."
                },
                subscribeActionOptions: {},
                content: null,
                proxy: null
            },
            getState: function() {
                return this._isLocked ? "locked" : "unlocked"
            },
            _create: function() {
                var a = this;
                this.id = this.options.id || this._generteId(), this._prepareOptions(), this._setupVariables(), this._initExtras(), this._initHooks(), this._initGroups(), this._initScreens(), this._setupVisitorId(), this.runHook("init"), this._canLock() && this.requestState(function(b) {
                    "locked" === b ? a._lock() : a._unlock("provider")
                })
            },
            _generteId: function() {
                for (var a = "", b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", c = 0; 5 > c; c++) a += b.charAt(Math.floor(Math.random() * b.length));
                return a
            },
            _prepareOptions: function() {
                var b = this,
                    c = a.extend(!0, {}, this._defaults);
                c = this.applyFilters("filter-default-options", c), this.options.theme && !a.isPlainObject(this.options.theme) && (this.options.theme = {
                    name: b.options.theme
                }), "object" != typeof this.options.theme && (this.options.theme = {
                    name: b.options.theme
                });
                var d = this.options.theme.name || this._defaults.theme;
                a.pandalocker.themes[d] && (c = a.extend(!0, {}, c, a.pandalocker.themes[d]));
                var e = a.extend(!0, c, this.options);
                a.isArray(e.groups) && (e.groups = a.extend(!0, {}, c.groups, {
                    order: e.groups
                })), e.locker.timer = parseInt(e.locker.timer), 0 === e.locker.timer && (e.locker.timer = null), this.options = this.applyFilters("filter-options", e), "blurring" !== this.options.overlap.mode || a.pandalocker.tools.supportBlurring() || (this.options.overlap.mode = this.options.overlap.altMode)
            },
            _setupVariables: function() {
                if (this.style = "onp-sl-" + this.options.theme.name, this.overlap = "full" === this.options.overlap.mode ? !1 : this.options.overlap.mode, this.groupUnion = this.options.groups.union, this.options.groups.order.length > 0) switch (this.options.groups.order[0]) {
                    case "connect-buttons":
                        this.lockerType = "signin-locker", this.langScope = "signinLocker";
                        break;
                    case "subscription":
                        this.lockerType = "email-locker", this.langScope = "emailLocker";
                        break;
                    default:
                        this.lockerType = "social-locker", this.langScope = "socialLocker"
                }
                this.lang = a.pandalocker.lang.scopes[this.langScope]
            },
            _initExtras: function() {
                for (var b in a.pandalocker.extras) a.pandalocker.extras.hasOwnProperty(b) && a.pandalocker.extras[b].init && a.pandalocker.extras[b].init.apply(this)
            },
            _initHooks: function() {
                var a = this,
                    b = !1,
                    c = !1,
                    d = !1,
                    e = !1;
                this.addHook("raw-interaction", function() {
                    e && (b || (b = !0, a.runHook("interaction")))
                }), this.addHook("raw-error", function() {
                    e && (c || (c = !0, a.runHook("error")))
                }), this.addHook("raw-impress", function() {
                    "default" === a._currentScreenName && (e = !0, a.runHook("impress"))
                }), this.addHook("raw-social-app-declined", function() {
                    e && (d || (d = !0, a.runHook("social-app-declined")))
                })
            },
            _initGroups: function() {
                this._groups = [];
                for (var b = 0; b < this.options.groups.order.length; b++) {
                    var c = this.options.groups.order[b],
                        d = a.pandalocker.tools.camelCase(c),
                        e = this.options[d] || {};
                    if (0 == b && (e.text = this.options.text), !a.pandalocker.groups[c]) return this._showError("core", 'The control group "' + c + '" not found.'), void 0;
                    var f = a.pandalocker.tools.extend(a.pandalocker.groups[c]);
                    e.index = parseInt(b) + 1, f.init(this, e), this._groups[b] = f
                }
            },
            _setupVisitorId: function() {
                this.vid = a.pandalocker.tools.getValue("opanda_vid"), this.vid || (this.vid = a.pandalocker.tools.guid(), a.pandalocker.tools.saveValue("opanda_vid", this.vid, 365))
            },
            _canLock: function() {
                if (a.pandalocker.browser.msie && 7 === parseInt(a.pandalocker.browser.version, 10)) return this._unlock("ie7"), !1;
                if (this.options.locker.visibility) {
                    var b = new a.pandalocker.services.visibility;
                    if (!b.canLock(this.options.locker.visibility)) return this._unlock("visibility"), !1
                }
                if (!this.options.locker.mobile && a.pandalocker.tools.isMobile()) return this._unlock("mobile"), !1;
                if ("hidden" === !this.options.locker.inAppBrowsers && a.pandalocker.tools.isInAppBrowser()) return this._unlock("inapp"), !1;
                for (var c = 0, d = 0; d < this._groups.length; d++)
                    if (!this._groups[d].canLock()) {
                        if ("or" === this.groupUnion) return this._unlock("group"), !1;
                        c++
                    } return c === this._groups.length ? (this._unlock("group"), !1) : !0
            },
            requestState: function(a) {
                var b = this,
                    c = function(a) {
                        for (var c = b._groups.length, d = "locked", e = 0; e < b._groups.length; e++) b._groups[e].requestState(function(b) {
                            c--, "unlocked" === b && (d = b), 0 >= c && a(d)
                        })
                    },
                    d = [];
                d = this.applyFilters("functions-requesting-state", d), d.push(c);
                var e = function() {
                    var b = d.shift();
                    return b ? (b(function(b) {
                        return "unlocked" === b ? a(b) : (e(), void 0)
                    }), void 0) : a("locked")
                };
                e()
            },
            setState: function(a, b, c) {
                this.runHook("state-changed", [a, b, c])
            },
            _getStateStorage: function() {
                return this._stateStorage ? this._stateStorage : (this._stateStorage = this.applyFilters("get-default-state-storage", new a.pandalocker.storages.defaultStateStorage(this)), this._stateStorage)
            },
            _showError: function(a, b) {
                this._error = !0, this._errorText = b, this.locker && this.locker.hide(), this.element.html("<strong>[Error]: " + b + "</strong>"), this.element.show().addClass("onp-sl-locker-error"), this.runHook("size-changed")
            },
            addHook: function(b, c, d, e) {
                a.pandalocker.hooks.add(this.id + "." + b, c, d), e && a.pandalocker.hooks.add(b, c, d)
            },
            runHook: function(b, c, d) {
                c || (c = []), c.unshift(this), a.pandalocker.hooks.run(this.id + "." + b, c), d && a.pandalocker.hooks.run(b, c), this.element.trigger("opanda-" + b, c);
                var e = c.slice(),
                    f = {};
                f.lockId = this.id, f.visitorId = this.vid, f.locker = this.locker, f.content = this.element, e.unshift(f), a.pandalocker.hooks.run("opanda-" + b, e)
            },
            addFilter: function(b, c, d) {
                a.pandalocker.filters.add(this.id + "." + b, c, d)
            },
            applyFilters: function(b, c, d, e) {
                d || (d = []), a.isArray(d) || (d = [d]), d.unshift(this), d.unshift(c);
                var f = a.pandalocker.filters.run(this.id + "." + b, d);
                return d[0] = f, e && (f = a.pandalocker.filters.run(b, d)), f
            },
            screens: {},
            _screenFactory: {},
            _showScreen: function(b, c) {
                if (!this._screenFactory[b] && !this.screens[b]) throw new a.pandalocker.error('The screen "' + b + '" not found in the group "' + this.name + '"');
                var d = this;
                if (this._currentScreenName = b, this.innerWrap.find(".onp-sl-screen").hide(), this.screens[b]) return this.screens[b].show(), d.runHook("size-changed"), void 0;
                var e = a("<div class='onp-sl-screen onp-sl-non-default-screen onp-sl-screen-" + b + "'></div>").appendTo(this.innerWrap).hide();
                this.screens[b] = this._screenFactory[b](e, c), e.fadeIn(300, function() {
                    d.runHook("size-changed")
                })
            },
            _registerScreen: function(a, b) {
                this._screenFactory[a] = b
            },
            _initScreens: function() {
                var b = this;
                this._currentScreenName = "default", this._registerScreen("enter-email", function(b, c) {
                    var d = a('<div class="onp-sl-text"></div>');
                    if (b.append(d), c.header) {
                        var e = a('<div class="onp-sl-header onp-sl-strong">' + c.header + "</div>");
                        d.append(e)
                    }
                    if (c.message) {
                        var f = a('<div class="onp-sl-message">' + c.message + "</div>");
                        d.append(f)
                    }
                    var g = a('<div class="onp-sl-control"></div>');
                    b.append(g);
                    var h = {};
                    h.email = {
                        name: "email",
                        type: "text",
                        placeholder: a.pandalocker.lang.misc_enter_your_email
                    }, h.submit = {
                        name: "submit",
                        type: "submit",
                        title: c.buttonTitle
                    };
                    for (var i in h) {
                        var j = h[i].type,
                            k = h[i].title,
                            l = h[i].value || c.fields && c.fields[i] && c.fields[i].value,
                            m = a("<div></div>").addClass("onp-sl-field").addClass("onp-sl-field-" + i).addClass("onp-sl-field-type-" + j);
                        if ("text" === j || "email" === j) {
                            var n = a("<input type='" + j + "' name='" + i + "' class='onp-sl-input' id='onp-sl-input-" + i + "' />");
                            h[i].placeholder && n.attr("placeholder", h[i].placeholder), l && n.attr("value", l), n.appendTo(m)
                        }
                        if ("submit" === j) {
                            var n = a("<button class='onp-sl-button onp-sl-form-button onp-sl-submit'>" + k + "</button>");
                            n.addClass("onp-sl-button-primary"), n.appendTo(m)
                        }
                        m.appendTo(g)
                    }
                    if (c.note) {
                        var o = a("<div class='onp-sl-note onp-sl-nospam'></div>").html(c.note);
                        o.appendTo(m)
                    }
                    b.find(".onp-sl-submit").click(function() {
                        var d = function(c, d) {
                                b.find(".onp-sl-group-notice").remove();
                                var e = a("<div class='onp-sl-group-notice'>" + c + "</div>").hide();
                                b.append(e), e.fadeIn(500), d || (d = 7e3), setTimeout(function() {
                                    e.length && e.fadeOut(800, function() {
                                        e.remove()
                                    })
                                }, d)
                            },
                            e = (a(this), a.trim(b.find("#onp-sl-input-email").val()));
                        return e && e.length ? a.pandalocker.tools.isValidEmailAddress(e) ? (c.callback && c.callback(e), void 0) : (d(a.pandalocker.lang.errors_inorrect_email), void 0) : (d(a.pandalocker.lang.errors_empty_email), void 0)
                    })
                }), this._registerScreen("data-processing", function(b) {
                    b.append(a("<div class='onp-sl-process-spin'></div>")), b.append(a("<div class='onp-sl-processing-sreen-text'>" + a.pandalocker.lang.misc_data_processing + "</div>"))
                }), this._registerScreen("email-confirmation", function(c, d) {
                    var e = a('<div class="onp-sl-screen-message"></div>'),
                        f = a("<div class='onp-sl-header'></div>").html(a.pandalocker.lang.confirm_screen_title),
                        g = a("<div class='onp-sl-message'></div>"),
                        h = a("<p></p>").html(a.pandalocker.lang.confirm_screen_instructiont.replace("{email}", "<strong>" + d.email + '</strong> <a href="#" class="onp-sl-cancel">' + a.pandalocker.lang.confirm_screen_cancel + "</a>")),
                        i = a('<p class="onp-sl-highlight"></p>').html(a.pandalocker.lang.confirm_screen_note1),
                        j = a('<p class="onp-sl-note"></p>').html(a.pandalocker.lang.confirm_screen_note2),
                        k = h.find(".onp-sl-cancel");
                    k.click(function() {
                        return d.service.cancel(), b._showScreen("default"), !1
                    }), g.append(h), g.append(i), e.append(f), e.append(g), c.append(e);
                    var l = d.email.split("@"),
                        m = null;
                    if (l[1].indexOf("gmail") >= 0 ? m = {
                            url: "https://mail.google.com/mail/?tab=wm",
                            icon: "0px 0px",
                            title: "Gmail"
                        } : l[1].indexOf("yahoo") >= 0 ? m = {
                            url: "https://mail.yahoo.com/",
                            icon: "0px -70px",
                            title: "Yahoo!"
                        } : l[1].indexOf("hotmail") >= 0 ? m = {
                            url: "https://hotmail.com/",
                            icon: " 0px -140px",
                            title: "Hotmail"
                        } : l[1].indexOf("outlook") >= 0 && (m = {
                            url: "http://www.outlook.com/",
                            icon: " 0px -140px",
                            title: "Outlook"
                        }), m) {
                        var n = a('<a class="onp-sl-button onp-sl-form-button onp-sl-form-button-sm onp-sl-open"></a>').html(a.pandalocker.lang.confirm_screen_open.replace("{service}", m.title));
                        if (n.attr("href", m.url), n.attr("target", "_blank"), m.icon) {
                            n.addClass("onp-sl-has-icon");
                            var o = a('<i class="onp-sl-icon"></i>').prependTo(n);
                            o.css("background-position", m.icon)
                        }
                        var p = a("<div class='onp-sl-open-button-wrap'></div>");
                        p.append(n), c.append(p)
                    }
                    c.append(j)
                })
            },
            _lock: function() {
                var a = this;
                this._isLocked || (this._markupIsCreated || this._createMarkup(), this.overlap ? (this.overlapLockerBox.fadeIn(1e3, function() {
                    a._updateLockerPosition()
                }), a._updateLockerPosition()) : (this.element.hide(), this.locker.fadeIn(1e3)), this._isLocked = !0, this.runHook("lock"), this.runHook("locked"), setTimeout(function() {
                    a._startTrackVisability()
                }, 1500))
            },
            _unlock: function(a, b, c) {
                if (!this.options.locker.off) {
                    if (!this._isLocked) return this.runHook("cancel", [a]), this._showContent("button" === a), !1;
                    this._showContent(!0), this._isLocked = !1, this.runHook("unlock", [a, b, c]), this.runHook("unlocked", [a, b, c])
                }
            },
            lock: function(a) {
                this._lock(a || "api")
            },
            unlock: function(a, b, c) {
                this._unlock(a || "api", b, c)
            },
            _createMarkup: function() {
                var b = this;
                this._loadFonts();
                var c = this.element.parent().is("a") ? this.element.parent() : this.element;
                c.addClass("onp-sl-content");
                var d = a.pandalocker.browser.mozilla && "mozilla" || a.pandalocker.browser.opera && "opera" || a.pandalocker.browser.webkit && "webkit" || "msie";
                this.locker = a("<div class='onp-sl onp-sl-" + d + "'></div>"), this.outerWrap = a("<div class='onp-sl-outer-wrap'></div>").appendTo(this.locker), this.innerWrap = a("<div class='onp-sl-inner-wrap'></div>").appendTo(this.outerWrap);
                var e = a("<div class='onp-sl-screen onp-sl-screen-default'></div>").appendTo(this.innerWrap);
                this.screens["default"] = this.defaultScreen = e, this.locker.addClass(this.style), this.locker.addClass("onp-sl-" + this.lockerType), this.locker.addClass("onp-sl-" + this.options.groups.order[0] + "-frist"), this.locker.addClass(1 === this.options.groups.order.length ? "onp-sl-contains-single-group" : "onp-sl-contains-many-groups");
                for (var f = 0; f < this.options.groups.order.length; f++) this.locker.addClass("onp-sl-" + this.options.groups.order[f] + "-enabled");
                if (a.pandalocker.isTouch() ? this.locker.addClass("onp-sl-touch") : this.locker.addClass("onp-sl-no-touch"), this.options.cssClass && this.locker.addClass(this.options.cssClass), this.overlap) {
                    c.addClass("onp-sl-overlap-mode");
                    var g = this.element.css("display"),
                        h = c;
                    if ("blurring" === this.overlap || c.is("img") || c.is("iframe") || c.is("object") || "block" !== g && "inline-block" !== g) {
                        h = a('<div class="onp-sl-content-wrap"></div>'), h.insertAfter(c), h.append(c);
                        var i = c.css("margin");
                        h.css({
                            margin: i
                        }), c.css({
                            margin: "0"
                        }), b.addHook("unlock", function() {
                            h.css({
                                margin: i
                            })
                        })
                    }
                    c.show(), this.element.show(), "blurring" === this.overlap && (this.blurArea = a("<div class='onp-sl-blur-area'></div>"), this.blurArea.insertAfter(c), this.blurArea.append(c), c = this.blurArea);
                    var j = h.css("position");
                    "static" === j && h.css("position", "relative");
                    var k = c.is("iframe") && c || c.find("iframe");
                    if (1 === k.length && "absolute" === k.css("position")) {
                        var l = !c.is(k) && !k.parent().is(c) && "relative" === k.parent().css("position");
                        l || (h.css({
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: k.css("top"),
                            left: k.css("left"),
                            right: k.css("right"),
                            bottom: k.css("bottom"),
                            margin: k.css("margin")
                        }), k.css({
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: "auto"
                        }))
                    }
                    this.overlapLockerBox = a("<div class='onp-sl-overlap-locker-box'></div>").hide(), this.overlapLockerBox.addClass("onp-sl-position-" + this.options.overlap.position), this.overlapLockerBox.append(this.locker), this.overlapBox = a("<div class='onp-sl-overlap-box'></div>"), this.overlapBox.append(this.overlapLockerBox), this.overlapBox.addClass("onp-sl-" + this.overlap + "-mode"), this.overlapBox.addClass(this.style + "-theme");
                    var m = a("<div class='onp-sl-overlap-background'></div>");
                    if (this.overlapBox.append(m), h.append(this.overlapBox), this.containerToTrackSize = h, "blurring" === this.overlap) {
                        var n = this.options.overlap && this.options.overlap.intensity || 5;
                        this.blurArea = this.blurArea.Vague({
                            intensity: n,
                            forceSVGUrl: !1
                        }), this.blurArea.blur()
                    }
                    a(window).resize(function() {
                        b._updateLockerPosition()
                    }), this.addHook("size-changed", function() {
                        b._updateLockerPosition()
                    }), "scroll" === this.options.overlap.position && a(window).scroll(function() {
                        b._updateLockerPositionOnScrolling()
                    })
                } else this.locker.hide(), this.locker.insertAfter(c);
                this._markupIsCreated = !0, this.runHook("markup-created"), this.locker.click(function() {
                    b.runHook("raw-interaction")
                }), this._isLockerVisible = this.locker.parent().is(":visible"), this._isLockerVisible || (this.options.lazy = !0);
                for (var o = 0; o < this._groups.length; o++) this._groups[o].renderGroup(e);
                if ((this.options.terms || this.options.privacyPolicy) && this._createTerms(), this.options.locker.close && this._createClosingCross(), this.options.locker.timer && this._createTimer(), "visible_with_warning" === this.options.locker.inAppBrowsers && this.options.locker.inAppBrowsersWarning && a.pandalocker.tools.isInAppBrowser()) {
                    var p = this.options.locker.inAppBrowsersWarning;
                    p = p.replace("{browser}", "<strong>" + a.pandalocker.tools.getInAppBrowser() + "</strong>");
                    var q = a("<div class='onp-sl-group-notice'>" + p + "</div>");
                    e.find(".onp-sl-group").append(q)
                }
            },
            _addClass: function(a) {
                this.locker.addClass(a)
            },
            _loadFonts: function() {
                if (this.options.theme.fonts && this.options.theme.fonts.length)
                    for (var b = "https:" === document.location.protocol ? "https" : "http", c = b + "://fonts.googleapis.com/css", d = 0; d < this.options.theme.fonts.length; d++) {
                        var e = this.options.theme.fonts[d],
                            f = e.name;
                        e.styles && e.styles.length && (f = f + ":" + e.styles.join(","));
                        var g = a.pandalocker.tools.updateQueryStringParameter(c, "family", f);
                        e.subset && e.subset.length && (g = a.pandalocker.tools.updateQueryStringParameter(g, "subset", e.subset.join(",")));
                        var h = a.pandalocker.tools.hash(g);
                        a("#onp-sl-font-" + h).length > 0 || a('<link id="onp-sl-font-' + h + '" rel="stylesheet" type="text/css" href="' + g + '" >').appendTo("head")
                    }
            },
            _updateLockerPosition: function() {
                if (this.overlap) {
                    var a = this,
                        b = this.containerToTrackSize.outerHeight();
                    "undefined" == typeof this.contentMinTopMargin && (this.contentMinTopMargin = parseInt(this.containerToTrackSize.css("marginTop"))), "undefined" == typeof this.contentMinBottomMargin && (this.contentMinBottomMargin = parseInt(this.containerToTrackSize.css("marginBottom")));
                    var c = this.locker.outerHeight();
                    if (c > b) {
                        var d = parseInt((c - b) / 2) + 20,
                            e = this.contentMinTopMargin < d ? d : this.contentMinTopMargin,
                            f = this.contentMinBottomMargin < d ? d : this.contentMinBottomMargin;
                        this.containerToTrackSize.css({
                            marginTop: e + "px",
                            marginBottom: f + "px"
                        })
                    }
                    if ("top" === this.options.overlap.position || "scroll" === this.options.overlap.position) {
                        var g = this.overlapBox.outerWidth(),
                            h = this.locker.outerWidth(),
                            i = this.overlapBox.outerHeight(),
                            j = this.options.overlap.offset;
                        j || (j = Math.floor((g - h) / 2), 10 >= j && (j = 10)), 2 * j + c > i && (j = Math.floor((i - c) / 2)), this.overlapLockerBox.css("marginTop", j + "px"), "scroll" === this.options.overlap.position && (this._baseOffset = j, this._updateLockerPositionOnScrolling(function(b, c) {
                            if ("middle-scroll" === b) {
                                var d = parseInt(a.overlapLockerBox.css("top"));
                                0 === d && a.overlapLockerBox.css("top", c)
                            }
                        }))
                    }
                    return "middle" === this.options.overlap.position ? (this.overlapLockerBox.css("marginTop", "-" + Math.floor(this.overlapLockerBox.innerHeight() / 2) + "px"), void 0) : void 0
                }
            },
            _updateLockerPositionOnScrolling: function(b) {
                var c = this,
                    d = this.overlapBox.offset(),
                    e = d.top,
                    f = d.left,
                    g = d.top + this.overlapBox.outerHeight(),
                    h = this.overlapBox.outerWidth(),
                    i = this.overlapBox.outerHeight(),
                    j = this.locker.outerHeight();
                if (!(2 * this._baseOffset + j + 10 >= i)) {
                    var k = a(document).scrollTop(),
                        l = 20;
                    if (k + 2 * l > e && k - 2 * l + a(window).height() < g) {
                        var m = Math.floor(a(window).height() / 2 - j / 2);
                        b && b("middle-scroll", m);
                        var n = parseInt(this.overlapLockerBox.css("top"));
                        return this.overlapLockerBox.css("position", "fixed").css("left", f + "px").css("width", h + "px").css("bottom", "auto").css("margin-top", "0px"), n != m && (this._animateBusy || (this._animateBusy = !0, this.overlapLockerBox.animate({
                            top: m + "px"
                        }, 150, function() {
                            c._animateBusy = !1
                        }))), void 0
                    }
                    return k + j + 2 * this._baseOffset + l > g ? (this.overlapLockerBox.css("position", "absolute").css("top", "auto").css("left", "0px").css("width", "auto").css("bottom", this._baseOffset + "px").css("margin-top", "0px"), void 0) : k + l > e ? (this.overlapLockerBox.css("position", "fixed").css("top", this._baseOffset + l + "px").css("left", f + "px").css("width", h + "px").css("bottom", "auto").css("margin-top", "0px"), void 0) : (this.overlapLockerBox.css("position", "absolute").css("top", "0px").css("left", "0px").css("bottom", "auto").css("width", "auto").css("margin-top", this._baseOffset + "px"), void 0)
                }
            },
            _startTrackVisability: function() {
                var b = this,
                    c = this.locker[0];
                this._trackVisabilityStoppped = !1, c.getBoundingClientRect || this.runHook("raw-impress");
                var d = a(window).height(),
                    e = a(window).width(),
                    f = function() {
                        if (!b._trackVisabilityStoppped) {
                            if (!c) return b._stopTrackVisability(), void 0;
                            var a = c.getBoundingClientRect(),
                                f = a.height / 2,
                                g = a.width / 2;
                            a.top + f > 0 && a.bottom - f <= d && a.left + g && a.right - g <= e && (b.runHook("raw-impress"), b._stopTrackVisability())
                        }
                    };
                a(window).bind("resize.visability.opanda", function() {
                    b._trackVisabilityStoppped || (d = a(window).height(), e = a(window).width())
                }), a(window).bind("resize.visability.opanda scroll.visability.opanda", function() {
                    b._trackVisabilityStoppped || f()
                }), this._isLockerVisible || (a("a, button").add(a(document)).bind("click.visability.opanda", function() {
                    b._trackVisabilityStoppped || setTimeout(function() {
                        f()
                    }, 200)
                }), this.addHook("raw-impress", function() {
                    b._isLockerVisible = !0, b._trackVisabilityStoppped = !0
                })), f()
            },
            _stopTrackVisability: function() {
                this._trackVisabilityStoppped = !0
            },
            _createClosingCross: function() {
                var b = this;
                a("<div class='onp-sl-cross' title='" + a.pandalocker.lang.misc_close + "' />").prependTo(this.locker).click(function() {
                    b.close && b.close(b) || b._unlock("cross", !0)
                })
            },
            _createTimer: function() {
                this.timer = a("<span class='onp-sl-timer'></span>");
                var b = a.pandalocker.lang.misc_or_wait;
                b = b.replace("{timer}", a("<span class='onp-sl-timer-counter'>" + this.options.locker.timer + "</span>")[0].outerHTML), this.timerLabel = a("<span class='onp-sl-timer-label'></span>").html(b).appendTo(this.timer), this.timerCounter = this.timerLabel.find(".onp-sl-timer-counter"), this.timer.appendTo(this.locker), this.counter = this.options.locker.timer, this._kickTimer()
            },
            _kickTimer: function() {
                var b = this;
                setTimeout(function() {
                    if (b._isLocked)
                        if (b.counter--, b.counter <= 0) b._unlock("timer");
                        else {
                            if (b.timerCounter.text(b.counter), a.pandalocker.browser.opera) {
                                var c = b.timerCounter.clone();
                                c.insertAfter(b.timerCounter), b.timerCounter.remove(), b.timerCounter = c
                            }
                            b._kickTimer()
                        }
                }, 1e3)
            },
            _createTerms: function() {
                this.locker.addClass("onp-sl-has-terms"), this.terms = a("<div class='onp-sl-terms'></div>").appendTo(this.defaultScreen), this.termsInnerWrap = a("<div class='onp-sl-terms-inner-wrap'></div>").appendTo(this.terms);
                var b = a.pandalocker.lang.misc_your_agree_with,
                    c = "";
                if (this.options.terms && (c = a("<a target='_black' class='onp-sl-link'>" + a.pandalocker.lang.misc_terms_of_use + "</a>").attr("href", this.options.terms)[0].outerHTML), this.options.privacyPolicy && (this.options.terms && (c += ", "), c += a("<a target='_black' class='onp-sl-link'>" + a.pandalocker.lang.misc_privacy_policy + "</a>").attr("href", this.options.privacyPolicy)[0].outerHTML), c && (b = b.replace("{links}", c)), this.termsInnerWrap.html(b), this.options.termsPopup) {
                    var d = this.options.termsPopup.width || 550,
                        e = this.options.termsPopup.height || 400;
                    this.termsInnerWrap.find(".onp-sl-link").click(function() {
                        var b = a(this).attr("href");
                        return window.open(b, "bizpanda_policies", "width=" + d + ",height=" + e + ",resizable=yes,scrollbars=yes"), !1
                    })
                }
            },
            _showContent: function(b) {
                var c = this;
                this.runHook("before-show-content");
                var d = function() {
                    c.overlap ? (c.overlapBox && c.overlapBox.hide(), c.blurArea && c.blurArea.unblur()) : c.locker && c.locker.hide(), c.locker && c.locker.hide(), b ? c.element.fadeIn(1e3, function() {
                        c.options.highlight && c.element.effect && c.element.effect("highlight", {
                            color: "#fffbcc"
                        }, 800)
                    }) : c.element.show(), c.runHook("after-show-content")
                };
                if (this.options.content)
                    if ("string" == typeof this.options.content) this.element.html(this.options.content), d();
                    else if ("object" != typeof this.options.content || this.options.content.url)
                    if ("object" == typeof this.options.content && this.options.content.url) {
                        var e = a.extend(!0, {}, this.options.content),
                            f = e.success,
                            g = e.complete,
                            h = e.error;
                        e.success = function(a, b, e) {
                            f ? f(c, a, b, e) : c.element.html(a), d()
                        }, e.error = function(a, b, d) {
                            c._showError("ajax", "An error is triggered during the ajax request! Text: " + b + " " + d), h && h(a, b, d)
                        }, e.complete = function(a, b) {
                            g && g(a, b)
                        }, a.ajax(e)
                    } else d();
                else this.element.append(this.options.content.clone().show()), d();
                else d()
            }
        }), a.fn.sociallocker = function(b) {
            return a(this).pandalocker(b)
        })
    }(jQuery),
    function(a) {
        a(function() {
            setTimeout(function() {
                a("#sidebar .float-wrap").fixedscroll({
                    bottomBorder: a("#workarea .container")
                }), a("#workarea").scrollspy({
                    target: "#examples-navigation"
                })
            }, 5e3), a("#examples-navigation a").click(function() {
                var b = a(this);
                return a.scrollTo(b.attr("href"), 700), !1
            })
        })
    }(jQuery), jQuery(document).ready(function(a) {
        a("#in-action .to-lock").sociallocker({
            text: {
                header: "This content is locked!",
                message: "Yes, this is Social Locker. Just try it, click on one of the buttons."
            },
            theme: "secrets",
            buttons: {
                order: ["twitter-tweet", "facebook-like", "google-plus"]
            },
            twitter: {
                tweet: {
                    url: "http://codecanyon.net/item/social-locker-for-wordpress/3667715",
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                }
            },
            facebook: {
                like: {
                    url: "https://www.facebook.com/OnePressMedia"
                },
                appId: "697830380336695"
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com",
                plus: {
                    url: "http://codecanyon.net/item/social-locker-for-wordpress/3667715"
                }
            }
        })
    }), jQuery(document).ready(function(a) {
        a("#made-to-impress .to-lock-1").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            buttons: {
                order: ["facebook-share", "twitter-tweet", "google-plus"]
            },
            text: "<strong>You can put any message here!</strong><br />Change the locker appearance just by adding some CSS rules.",
            facebook: {
                appId: "697830380336695"
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            twitter: {
                tweet: {
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                }
            }
        }), a("#made-to-impress .to-lock-2").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            theme: "flat",
            buttons: {
                order: ["twitter-tweet", "facebook-share", "google-plus"]
            },
            text: {
                header: "This content is locked!",
                message: "This is one of the professionally designed themes!"
            },
            facebook: {
                appId: "697830380336695",
                share: {
                    url: "http://codecanyon.net/user/OnePress/portfolio?" + Math.random()
                }
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com",
                plus: {
                    title: "share"
                }
            },
            twitter: {
                tweet: {
                    title: "share",
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                }
            }
        }), a("#made-to-impress .to-lock-3").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            theme: "dandyish",
            buttons: {
                order: ["facebook-like", "facebook-share"]
            },
            text: {
                header: "This content is locked!",
                message: "This is one of the professionally designed themes!"
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            facebook: {
                appId: "697830380336695",
                url: "http://codecanyon.net/user/OnePress/portfolio?" + Math.random()
            },
            twitter: {
                tweet: {
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                }
            }
        }), a("#made-to-impress .to-lock-4").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            theme: "glass",
            text: {
                header: "This content is locked!",
                message: "This is one of the professionally designed themes!"
            },
            buttons: {
                order: ["twitter-follow", "twitter-tweet"]
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            twitter: {
                tweet: {
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                },
                follow: {
                    url: "https://twitter.com/byonepress"
                }
            }
        })
    }), jQuery(document).ready(function(a) {
        a("#blur-make-transparent .to-lock").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            overlap: {
                mode: "blurring"
            },
            theme: "secrets",
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            facebook: {
                appId: "697830380336695",
                share: {
                    url: "http://codecanyon.net/user/OnePress/portfolio?" + Math.random()
                }
            },
            twitter: {
                tweet: {
                    text: "Drive traffic, build quality followers and improve your website ranking via #sociallocker @byonepress!"
                }
            }
        })
    }), jQuery(document).ready(function(a) {
        a("#highly-configurable .to-lock").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            text: {
                header: "This content is locked!",
                message: "To unlock the content, use one of the social buttons below. Thank you for your support and love."
            },
            buttons: {
                order: ["facebook-share", "twitter-tweet"]
            },
            theme: "my-custom",
            googleAnalytics: !0,
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            facebook: {
                appId: "697830380336695",
                share: {
                    url: "http://codecanyon.net/user/OnePress/portfolio?" + Math.random()
                }
            },
            twitter: {
                tweet: {
                    text: "Check out #onepress portfolio!"
                }
            }
        })
    }), jQuery(document).ready(function(a) {
        a("#helper-tools .to-lock").sociallocker({
            url: "http://byonepress.com?" + Math.random(),
            theme: "glass",
            googleAnalytics: !0,
            locker: {
                close: !0,
                timer: 500
            },
            google: {
                clientId: "959106316043-n6dcllcul0mjo9nibuohji2uugk8n98f.apps.googleusercontent.com"
            },
            facebook: {
                appId: "697830380336695"
            },
            twitter: {
                tweet: {
                    text: "Check out #onepress portfolio!"
                }
            }
        })
    });