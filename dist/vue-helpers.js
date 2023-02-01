var pa = Object.defineProperty;
var _a = (e, t, r) => t in e ? pa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var O = (e, t, r) => (_a(e, typeof t != "symbol" ? t + "" : t, r), r);
import { reactive as oe, ref as Er, resolveComponent as de, openBlock as Q, createBlock as We, withCtx as Pe, renderSlot as pt, createCommentVNode as Je, createElementBlock as _t, createTextVNode as Ke, normalizeProps as ga, guardReactiveProps as wa, createElementVNode as Ze, withModifiers as va, createVNode as gt, mergeProps as hr, toDisplayString as ut } from "vue";
function Sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zs = { exports: {} }, Fr = { exports: {} }, Js = function(t, r) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return t.apply(r, n);
  };
}, ba = Js, Pr = Object.prototype.toString, Nr = function(e) {
  return function(t) {
    var r = Pr.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Oe(e) {
  return e = e.toLowerCase(), function(r) {
    return Nr(r) === e;
  };
}
function Ar(e) {
  return Array.isArray(e);
}
function wt(e) {
  return typeof e > "u";
}
function Oa(e) {
  return e !== null && !wt(e) && e.constructor !== null && !wt(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Zs = Oe("ArrayBuffer");
function Da(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zs(e.buffer), t;
}
function ka(e) {
  return typeof e == "string";
}
function Ma(e) {
  return typeof e == "number";
}
function Qs(e) {
  return e !== null && typeof e == "object";
}
function ft(e) {
  if (Nr(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var xa = Oe("Date"), Ta = Oe("File"), Ra = Oe("Blob"), Ya = Oe("FileList");
function Cr(e) {
  return Pr.call(e) === "[object Function]";
}
function Ea(e) {
  return Qs(e) && Cr(e.pipe);
}
function Fa(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Pr.call(e) === t || Cr(e.toString) && e.toString() === t);
}
var Pa = Oe("URLSearchParams");
function Na(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Aa() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Lr(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ar(e))
      for (var r = 0, s = e.length; r < s; r++)
        t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
}
function cr() {
  var e = {};
  function t(n, a) {
    ft(e[a]) && ft(n) ? e[a] = cr(e[a], n) : ft(n) ? e[a] = cr({}, n) : Ar(n) ? e[a] = n.slice() : e[a] = n;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Lr(arguments[r], t);
  return e;
}
function Ca(e, t, r) {
  return Lr(t, function(n, a) {
    r && typeof n == "function" ? e[a] = ba(n, r) : e[a] = n;
  }), e;
}
function La(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Ua(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Wa(e, t, r) {
  var s, n, a, i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), n = s.length; n-- > 0; )
      a = s[n], i[a] || (t[a] = e[a], i[a] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function Ia(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function $a(e) {
  if (!e)
    return null;
  var t = e.length;
  if (wt(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var qa = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), F = {
  isArray: Ar,
  isArrayBuffer: Zs,
  isBuffer: Oa,
  isFormData: Fa,
  isArrayBufferView: Da,
  isString: ka,
  isNumber: Ma,
  isObject: Qs,
  isPlainObject: ft,
  isUndefined: wt,
  isDate: xa,
  isFile: Ta,
  isBlob: Ra,
  isFunction: Cr,
  isStream: Ea,
  isURLSearchParams: Pa,
  isStandardBrowserEnv: Aa,
  forEach: Lr,
  merge: cr,
  extend: Ca,
  trim: Na,
  stripBOM: La,
  inherits: Ua,
  toFlatObject: Wa,
  kindOf: Nr,
  kindOfTest: Oe,
  endsWith: Ia,
  toArray: $a,
  isTypedArray: qa,
  isFileList: Ya
}, Te = F;
function ys(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Xs = function(t, r, s) {
  if (!r)
    return t;
  var n;
  if (s)
    n = s(r);
  else if (Te.isURLSearchParams(r))
    n = r.toString();
  else {
    var a = [];
    Te.forEach(r, function(u, c) {
      u === null || typeof u > "u" || (Te.isArray(u) ? c = c + "[]" : u = [u], Te.forEach(u, function(w) {
        Te.isDate(w) ? w = w.toISOString() : Te.isObject(w) && (w = JSON.stringify(w)), a.push(ys(c) + "=" + ys(w));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return t;
}, ja = F;
function Mt() {
  this.handlers = [];
}
Mt.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Mt.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Mt.prototype.forEach = function(t) {
  ja.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var Va = Mt, Ha = F, Ba = function(t, r) {
  Ha.forEach(t, function(n, a) {
    a !== r && a.toUpperCase() === r.toUpperCase() && (t[r] = n, delete t[a]);
  });
}, Ks = F;
function Le(e, t, r, s, n) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n);
}
Ks.inherits(Le, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var en = Le.prototype, tn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  tn[e] = { value: e };
});
Object.defineProperties(Le, tn);
Object.defineProperty(en, "isAxiosError", { value: !0 });
Le.from = function(e, t, r, s, n, a) {
  var i = Object.create(en);
  return Ks.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), Le.call(i, e.message, t, r, s, n), i.name = e.name, a && Object.assign(i, a), i;
};
var Ie = Le, rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Bt, ps;
function sn() {
  if (ps)
    return Bt;
  ps = 1;
  var e = F;
  function t(r, s) {
    s = s || new FormData();
    var n = [];
    function a(o) {
      return o === null ? "" : e.isDate(o) ? o.toISOString() : e.isArrayBuffer(o) || e.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
    }
    function i(o, u) {
      if (e.isPlainObject(o) || e.isArray(o)) {
        if (n.indexOf(o) !== -1)
          throw Error("Circular reference detected in " + u);
        n.push(o), e.forEach(o, function(m, w) {
          if (!e.isUndefined(m)) {
            var h = u ? u + "." + w : w, C;
            if (m && !u && typeof m == "object") {
              if (e.endsWith(w, "{}"))
                m = JSON.stringify(m);
              else if (e.endsWith(w, "[]") && (C = e.toArray(m))) {
                C.forEach(function(ot) {
                  !e.isUndefined(ot) && s.append(h, a(ot));
                });
                return;
              }
            }
            i(m, h);
          }
        }), n.pop();
      } else
        s.append(u, a(o));
    }
    return i(r), s;
  }
  return Bt = t, Bt;
}
var Gt, _s;
function Ga() {
  if (_s)
    return Gt;
  _s = 1;
  var e = Ie;
  return Gt = function(r, s, n) {
    var a = n.config.validateStatus;
    !n.status || !a || a(n.status) ? r(n) : s(new e(
      "Request failed with status code " + n.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, Gt;
}
var zt, gs;
function za() {
  if (gs)
    return zt;
  gs = 1;
  var e = F;
  return zt = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, n, a, i, o, u) {
        var c = [];
        c.push(s + "=" + encodeURIComponent(n)), e.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()), e.isString(i) && c.push("path=" + i), e.isString(o) && c.push("domain=" + o), u === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(s) {
        var n = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(s) {
        this.write(s, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), zt;
}
var Ja = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, Za = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, Qa = Ja, Xa = Za, nn = function(t, r) {
  return t && !Qa(r) ? Xa(t, r) : r;
}, Jt, ws;
function Ka() {
  if (ws)
    return Jt;
  ws = 1;
  var e = F, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Jt = function(s) {
    var n = {}, a, i, o;
    return s && e.forEach(s.split(`
`), function(c) {
      if (o = c.indexOf(":"), a = e.trim(c.substr(0, o)).toLowerCase(), i = e.trim(c.substr(o + 1)), a) {
        if (n[a] && t.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? n[a] = (n[a] ? n[a] : []).concat([i]) : n[a] = n[a] ? n[a] + ", " + i : i;
      }
    }), n;
  }, Jt;
}
var Zt, vs;
function ei() {
  if (vs)
    return Zt;
  vs = 1;
  var e = F;
  return Zt = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), n;
    function a(i) {
      var o = i;
      return r && (s.setAttribute("href", o), o = s.href), s.setAttribute("href", o), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return n = a(window.location.href), function(o) {
      var u = e.isString(o) ? a(o) : o;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Zt;
}
var Qt, Ss;
function xt() {
  if (Ss)
    return Qt;
  Ss = 1;
  var e = Ie, t = F;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Qt = r, Qt;
}
var Xt, bs;
function ti() {
  return bs || (bs = 1, Xt = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Xt;
}
var Kt, Os;
function Ds() {
  if (Os)
    return Kt;
  Os = 1;
  var e = F, t = Ga(), r = za(), s = Xs, n = nn, a = Ka(), i = ei(), o = rn, u = Ie, c = xt(), m = ti();
  return Kt = function(h) {
    return new Promise(function(ot, ke) {
      var je = h.data, Ve = h.headers, He = h.responseType, Me;
      function hs() {
        h.cancelToken && h.cancelToken.unsubscribe(Me), h.signal && h.signal.removeEventListener("abort", Me);
      }
      e.isFormData(je) && e.isStandardBrowserEnv() && delete Ve["Content-Type"];
      var p = new XMLHttpRequest();
      if (h.auth) {
        var ca = h.auth.username || "", ma = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        Ve.Authorization = "Basic " + btoa(ca + ":" + ma);
      }
      var jt = n(h.baseURL, h.url);
      p.open(h.method.toUpperCase(), s(jt, h.params, h.paramsSerializer), !0), p.timeout = h.timeout;
      function cs() {
        if (!!p) {
          var H = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null, xe = !He || He === "text" || He === "json" ? p.responseText : p.response, we = {
            data: xe,
            status: p.status,
            statusText: p.statusText,
            headers: H,
            config: h,
            request: p
          };
          t(function(Ht) {
            ot(Ht), hs();
          }, function(Ht) {
            ke(Ht), hs();
          }, we), p = null;
        }
      }
      if ("onloadend" in p ? p.onloadend = cs : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(cs);
      }, p.onabort = function() {
        !p || (ke(new u("Request aborted", u.ECONNABORTED, h, p)), p = null);
      }, p.onerror = function() {
        ke(new u("Network Error", u.ERR_NETWORK, h, p, p)), p = null;
      }, p.ontimeout = function() {
        var xe = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded", we = h.transitional || o;
        h.timeoutErrorMessage && (xe = h.timeoutErrorMessage), ke(new u(
          xe,
          we.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          h,
          p
        )), p = null;
      }, e.isStandardBrowserEnv()) {
        var ms = (h.withCredentials || i(jt)) && h.xsrfCookieName ? r.read(h.xsrfCookieName) : void 0;
        ms && (Ve[h.xsrfHeaderName] = ms);
      }
      "setRequestHeader" in p && e.forEach(Ve, function(xe, we) {
        typeof je > "u" && we.toLowerCase() === "content-type" ? delete Ve[we] : p.setRequestHeader(we, xe);
      }), e.isUndefined(h.withCredentials) || (p.withCredentials = !!h.withCredentials), He && He !== "json" && (p.responseType = h.responseType), typeof h.onDownloadProgress == "function" && p.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (Me = function(H) {
        !p || (ke(!H || H && H.type ? new c() : H), p.abort(), p = null);
      }, h.cancelToken && h.cancelToken.subscribe(Me), h.signal && (h.signal.aborted ? Me() : h.signal.addEventListener("abort", Me))), je || (je = null);
      var Vt = m(jt);
      if (Vt && ["http", "https", "file"].indexOf(Vt) === -1) {
        ke(new u("Unsupported protocol " + Vt + ":", u.ERR_BAD_REQUEST, h));
        return;
      }
      p.send(je);
    });
  }, Kt;
}
var er, ks;
function ri() {
  return ks || (ks = 1, er = null), er;
}
var E = F, Ms = Ba, xs = Ie, si = rn, ni = sn(), ai = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ts(e, t) {
  !E.isUndefined(e) && E.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function ii() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ds()), e;
}
function oi(e, t, r) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Tt = {
  transitional: si,
  adapter: ii(),
  transformRequest: [function(t, r) {
    if (Ms(r, "Accept"), Ms(r, "Content-Type"), E.isFormData(t) || E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return Ts(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = E.isObject(t), n = r && r["Content-Type"], a;
    if ((a = E.isFileList(t)) || s && n === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return ni(a ? { "files[]": t } : t, i && new i());
    } else if (s || n === "application/json")
      return Ts(r, "application/json"), oi(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || Tt.transitional, s = r && r.silentJSONParsing, n = r && r.forcedJSONParsing, a = !s && this.responseType === "json";
    if (a || n && E.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? xs.from(i, xs.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ri()
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
E.forEach(["delete", "get", "head"], function(t) {
  Tt.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function(t) {
  Tt.headers[t] = E.merge(ai);
});
var Ur = Tt, ui = F, li = Ur, di = function(t, r, s) {
  var n = this || li;
  return ui.forEach(s, function(i) {
    t = i.call(n, t, r);
  }), t;
}, tr, Rs;
function an() {
  return Rs || (Rs = 1, tr = function(t) {
    return !!(t && t.__CANCEL__);
  }), tr;
}
var Ys = F, rr = di, fi = an(), hi = Ur, ci = xt();
function sr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ci();
}
var mi = function(t) {
  sr(t), t.headers = t.headers || {}, t.data = rr.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = Ys.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), Ys.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete t.headers[n];
    }
  );
  var r = t.adapter || hi.adapter;
  return r(t).then(function(n) {
    return sr(t), n.data = rr.call(
      t,
      n.data,
      n.headers,
      t.transformResponse
    ), n;
  }, function(n) {
    return fi(n) || (sr(t), n && n.response && (n.response.data = rr.call(
      t,
      n.response.data,
      n.response.headers,
      t.transformResponse
    ))), Promise.reject(n);
  });
}, W = F, on = function(t, r) {
  r = r || {};
  var s = {};
  function n(m, w) {
    return W.isPlainObject(m) && W.isPlainObject(w) ? W.merge(m, w) : W.isPlainObject(w) ? W.merge({}, w) : W.isArray(w) ? w.slice() : w;
  }
  function a(m) {
    if (W.isUndefined(r[m])) {
      if (!W.isUndefined(t[m]))
        return n(void 0, t[m]);
    } else
      return n(t[m], r[m]);
  }
  function i(m) {
    if (!W.isUndefined(r[m]))
      return n(void 0, r[m]);
  }
  function o(m) {
    if (W.isUndefined(r[m])) {
      if (!W.isUndefined(t[m]))
        return n(void 0, t[m]);
    } else
      return n(void 0, r[m]);
  }
  function u(m) {
    if (m in r)
      return n(t[m], r[m]);
    if (m in t)
      return n(void 0, t[m]);
  }
  var c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u
  };
  return W.forEach(Object.keys(t).concat(Object.keys(r)), function(w) {
    var h = c[w] || a, C = h(w);
    W.isUndefined(C) && h !== u || (s[w] = C);
  }), s;
}, nr, Es;
function un() {
  return Es || (Es = 1, nr = {
    version: "0.27.2"
  }), nr;
}
var yi = un().version, me = Ie, Wr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Wr[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Fs = {};
Wr.transitional = function(t, r, s) {
  function n(a, i) {
    return "[Axios v" + yi + "] Transitional option '" + a + "'" + i + (s ? ". " + s : "");
  }
  return function(a, i, o) {
    if (t === !1)
      throw new me(
        n(i, " has been removed" + (r ? " in " + r : "")),
        me.ERR_DEPRECATED
      );
    return r && !Fs[i] && (Fs[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, o) : !0;
  };
};
function pi(e, t, r) {
  if (typeof e != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), n = s.length; n-- > 0; ) {
    var a = s[n], i = t[a];
    if (i) {
      var o = e[a], u = o === void 0 || i(o, a, e);
      if (u !== !0)
        throw new me("option " + a + " must be " + u, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new me("Unknown option " + a, me.ERR_BAD_OPTION);
  }
}
var _i = {
  assertOptions: pi,
  validators: Wr
}, ln = F, gi = Xs, Ps = Va, Ns = mi, Rt = on, wi = nn, dn = _i, Re = dn.validators;
function Ue(e) {
  this.defaults = e, this.interceptors = {
    request: new Ps(),
    response: new Ps()
  };
}
Ue.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Rt(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && dn.assertOptions(s, {
    silentJSONParsing: Re.transitional(Re.boolean),
    forcedJSONParsing: Re.transitional(Re.boolean),
    clarifyTimeoutError: Re.transitional(Re.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(C) {
    typeof C.runWhen == "function" && C.runWhen(r) === !1 || (a = a && C.synchronous, n.unshift(C.fulfilled, C.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function(C) {
    i.push(C.fulfilled, C.rejected);
  });
  var o;
  if (!a) {
    var u = [Ns, void 0];
    for (Array.prototype.unshift.apply(u, n), u = u.concat(i), o = Promise.resolve(r); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var c = r; n.length; ) {
    var m = n.shift(), w = n.shift();
    try {
      c = m(c);
    } catch (h) {
      w(h);
      break;
    }
  }
  try {
    o = Ns(c);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; i.length; )
    o = o.then(i.shift(), i.shift());
  return o;
};
Ue.prototype.getUri = function(t) {
  t = Rt(this.defaults, t);
  var r = wi(t.baseURL, t.url);
  return gi(r, t.params, t.paramsSerializer);
};
ln.forEach(["delete", "get", "head", "options"], function(t) {
  Ue.prototype[t] = function(r, s) {
    return this.request(Rt(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
ln.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(a, i, o) {
      return this.request(Rt(o || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  Ue.prototype[t] = r(), Ue.prototype[t + "Form"] = r(!0);
});
var vi = Ue, ar, As;
function Si() {
  if (As)
    return ar;
  As = 1;
  var e = xt();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(i) {
      s = i;
    });
    var n = this;
    this.promise.then(function(a) {
      if (!!n._listeners) {
        var i, o = n._listeners.length;
        for (i = 0; i < o; i++)
          n._listeners[i](a);
        n._listeners = null;
      }
    }), this.promise.then = function(a) {
      var i, o = new Promise(function(u) {
        n.subscribe(u), i = u;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, r(function(i) {
      n.reason || (n.reason = new e(i), s(n.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, t.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var n = this._listeners.indexOf(s);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, t.source = function() {
    var s, n = new t(function(i) {
      s = i;
    });
    return {
      token: n,
      cancel: s
    };
  }, ar = t, ar;
}
var ir, Cs;
function bi() {
  return Cs || (Cs = 1, ir = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), ir;
}
var or, Ls;
function Oi() {
  if (Ls)
    return or;
  Ls = 1;
  var e = F;
  return or = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, or;
}
var Us = F, Di = Js, ht = vi, ki = on, Mi = Ur;
function fn(e) {
  var t = new ht(e), r = Di(ht.prototype.request, t);
  return Us.extend(r, ht.prototype, t), Us.extend(r, t), r.create = function(n) {
    return fn(ki(e, n));
  }, r;
}
var U = fn(Mi);
U.Axios = ht;
U.CanceledError = xt();
U.CancelToken = Si();
U.isCancel = an();
U.VERSION = un().version;
U.toFormData = sn();
U.AxiosError = Ie;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = bi();
U.isAxiosError = Oi();
Fr.exports = U;
Fr.exports.default = U;
(function(e) {
  e.exports = Fr.exports;
})(zs);
const ue = /* @__PURE__ */ Sa(zs.exports);
class ne {
  constructor() {
    O(this, "state", oe({
      isLoading: !1,
      isLoaded: !1,
      isFailure: !1
    }));
  }
  get isLoading() {
    return this.state.isLoading;
  }
  get isLoaded() {
    return this.state.isLoaded;
  }
  get isFailure() {
    return this.state.isFailure;
  }
  isState(t) {
    return this.state[t];
  }
  loading() {
    Object.assign(this.state, {
      isLoading: !0,
      isLoaded: !1,
      isFailure: !1
    });
  }
  loaded() {
    Object.assign(this.state, {
      isLoading: !1,
      isLoaded: !0,
      isFailure: !1
    });
  }
  failed() {
    Object.assign(this.state, {
      isLoading: !1,
      isLoaded: !1,
      isFailure: !0
    });
  }
}
class Yt {
  constructor(t = {}) {
    O(this, "state", new ne());
    O(this, "result", Er([]));
    O(this, "timeout", null);
    O(this, "options", {
      url: null,
      payload: null,
      field: null
    });
    Object.assign(this.options, t);
  }
  static create(t) {
    return new Yt(t);
  }
  search(t) {
    return this.customSearch({ payload: { value: t } });
  }
  async customSearch({ url: t, payload: r }) {
    this.timeout && (this.controller.abort(), clearTimeout(this.timeout)), this.controller = new AbortController(), this.timeout = setTimeout(async () => {
      this.state.loading(), this.result.value = [];
      const s = t || this.options.url, { data: n } = await ue.post(`${s}/search`, r || this.options.payload, {
        signal: this.controller.signal
      }).catch((a) => {
        throw this.state.failed(), a;
      });
      this.result.value = n.result, this.state.loaded();
    }, 500);
  }
  async restore(t, r) {
    this.state.loading(), this.result.value = [];
    const s = t || this.options.url, { data: n } = await ue.post(`${s}/restore`, r || this.options.payload).catch((a) => {
      throw this.state.failed(), a;
    });
    return this.state.loaded(), n;
  }
  getConfig() {
    return {
      data: this.result.value,
      field: this.options.field
    };
  }
}
const Be = oe({
  default: []
});
function Ir() {
  return {
    createBag(e) {
      Be[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (Be[t] = Object.keys(e.response.data.errors).map((s) => ({
        key: s,
        message: e.response.data.errors[s][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = Be[t];
      if (!r)
        return {
          message: "",
          variant: ""
        };
      const s = r.find((n) => Array.isArray(e) ? e.includes(n.key) : n.key === e);
      return s ? {
        message: s.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(e, t = "default") {
      if (e) {
        const r = Be[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const s = r.findIndex((n) => n.key === e);
        r.splice(s, 1);
        return;
      }
      Be[t] = [];
    }
  };
}
class hn {
  constructor(t) {
    O(this, "loadPath", "");
    O(this, "submitPath", "");
    O(this, "submitMethod", "post");
    O(this, "bag", "");
    O(this, "model", oe({}));
    O(this, "form", oe({}));
    O(this, "original", {});
    O(this, "errors", null);
    O(this, "states", {
      load: new ne(),
      submit: new ne()
    });
    return this.setPath(t.submitPath), this.submitMethod = t.submitMethod, this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form), this.states.load.loaded(), new Proxy(this, {
      get(r, s, n) {
        return Reflect.has(r, s) ? Reflect.get(r, s, n) : s in r.form ? r.form[s] : null;
      },
      set(r, s, n, a) {
        return Reflect.has(r, s) ? Reflect.set(r, s, n, a) : s in r.form ? (r.form[s] = n, !0) : null;
      }
    });
  }
  static create(t) {
    return new this(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = Ir(), this.errors.createBag(this.bag);
  }
  setAttributes(t) {
    Object.assign(this.original, t), Object.assign(this.form, t);
  }
  getError(t) {
    return this.errors.get(t, this.bag);
  }
  clearError(t) {
    this.errors.clear(t, this.bag);
  }
  async submit(t) {
    const {
      path: r,
      formatter: s,
      config: n = {}
    } = t || {};
    this.errors.clear(null, this.bag), this.states.submit.loading();
    const a = JSON.parse(JSON.stringify(this.form)), i = s ? s(this.form) : a, o = r || this.submitPath;
    if (!o)
      throw this.states.submit.failed(), Error("No url defined.");
    const u = (n == null ? void 0 : n.method) || this.submitMethod || "post", { data: c } = await ue[u](
      o,
      i,
      n
    ).catch((m) => {
      throw this.states.submit.failed(), this.errors.set(m, this.bag), m;
    });
    return this.errors.clear(null, this.bag), this.states.submit.loaded(), c;
  }
  async advancedSubmit(t) {
    this.states.submit.loading();
    const { data: r } = await Promise.resolve(t(ue, this.form)).catch(
      (s) => {
        throw this.states.submit.failed(), this.errors.set(s, this.bag), s;
      }
    );
    return this.states.submit.loaded(), r;
  }
  async load(t) {
    const {
      path: r,
      params: s
    } = t || {};
    this.states.load.loading();
    const n = r || this.loadPath;
    if (!n)
      throw this.states.load.failed(), Error("Url is not defined for the load method.");
    const { data: a } = await ue.get(n, {
      params: s
    }).catch((i) => {
      throw this.states.load.failed(), i;
    });
    return this.setAttributes(a.form), a.model && Object.assign(this.model, a.model), this.states.load.loaded(), a;
  }
  reset() {
    Object.assign(this.form, this.original);
  }
  get isSubmitting() {
    return this.states.submit.isLoading;
  }
  get isSubmitted() {
    return this.states.submit.isLoaded;
  }
  get isSubmitFailed() {
    return this.states.submit.isFailure;
  }
  get isLoading() {
    return this.states.load.isLoading;
  }
  get isLoaded() {
    return this.states.load.isLoaded;
  }
  get isFailure() {
    return this.states.load.isFailure;
  }
}
class xi {
  constructor() {
    O(this, "structure", {});
    O(this, "query", oe({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    O(this, "params", oe({
      page: 1
    }));
    O(this, "router", null);
  }
  static create(t, r = {}, s = {}, n) {
    s = Object.assign(
      { base: "/api/admin", route: `${t}.index` },
      s
    );
    const a = s.base, i = {
      route: s.route,
      index: s.index || `${a}/${t}/index`,
      destroy: `${a}/${t}/destroy`
    }, o = new this();
    return o.options = s, o.structure = r, o.params = Object.assign(o.params, r), o.router = n, o.urls = i, o;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: r } = await ue.get(t || this.urls.index, {
      params: this.params
    }).catch((s) => {
      throw this.query.isLoading = !1, s;
    });
    return await this.router.push({ name: this.urls.route, query: this.params }), this.query.isLoading = !1, this.query.isLoaded = !0, r;
  }
  async load(t) {
    const r = await this.fetch(t);
    return Object.assign(this.query, r.query, {
      items: r.query.items.map((s) => ({
        ...s,
        isProcessing: !1
      }))
    }), r;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async action(t, { row: r, index: s, remove: n, method: a }, i = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...i
    };
    if (a === "delete") {
      const { data: u } = await ue.delete(t, {
        data: o
      }).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await ue.post(t, o).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    }
    if (n) {
      const u = await this.fetch();
      if (this.query.items.splice(s, 1), !u.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < u.query.items.length && this.query.items.push(u.query.items[u.query.items.length - 1]);
    }
  }
  destroy(t, r) {
    return this.action(this.urls.destroy, { ...t, remove: !0 }, r);
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(t);
  }
}
const cn = "%[a-f0-9]{2}", Ws = new RegExp("(" + cn + ")|([^%]+?)", "gi"), Is = new RegExp("(" + cn + ")+", "gi");
function mr(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  const r = e.slice(0, t), s = e.slice(t);
  return Array.prototype.concat.call([], mr(r), mr(s));
}
function Ti(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let t = e.match(Ws) || [];
    for (let r = 1; r < t.length; r++)
      e = mr(t, r).join(""), t = e.match(Ws) || [];
    return e;
  }
}
function Ri(e) {
  const t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  };
  let r = Is.exec(e);
  for (; r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      const n = Ti(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = Is.exec(e);
  }
  t["%C2"] = "\uFFFD";
  const s = Object.keys(t);
  for (const n of s)
    e = e.replace(new RegExp(n, "g"), t[n]);
  return e;
}
function Yi(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return decodeURIComponent(e);
  } catch {
    return Ri(e);
  }
}
function mn(e, t) {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || t === "")
    return [];
  const r = e.indexOf(t);
  return r === -1 ? [] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}
function Ei(e, t) {
  const r = {};
  if (Array.isArray(t))
    for (const s of t) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      n != null && n.enumerable && Object.defineProperty(r, s, n);
    }
  else
    for (const s of Reflect.ownKeys(e)) {
      const n = Object.getOwnPropertyDescriptor(e, s);
      if (n.enumerable) {
        const a = e[s];
        t(s, a, e) && Object.defineProperty(r, s, n);
      }
    }
  return r;
}
const Fi = (e) => e == null, Pi = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), yr = Symbol("encodeFragmentIdentifier");
function Ni(e) {
  switch (e.arrayFormat) {
    case "index":
      return (t) => (r, s) => {
        const n = r.length;
        return s === void 0 || e.skipNull && s === null || e.skipEmptyString && s === "" ? r : s === null ? [
          ...r,
          [R(t, e), "[", n, "]"].join("")
        ] : [
          ...r,
          [R(t, e), "[", R(n, e), "]=", R(s, e)].join("")
        ];
      };
    case "bracket":
      return (t) => (r, s) => s === void 0 || e.skipNull && s === null || e.skipEmptyString && s === "" ? r : s === null ? [
        ...r,
        [R(t, e), "[]"].join("")
      ] : [
        ...r,
        [R(t, e), "[]=", R(s, e)].join("")
      ];
    case "colon-list-separator":
      return (t) => (r, s) => s === void 0 || e.skipNull && s === null || e.skipEmptyString && s === "" ? r : s === null ? [
        ...r,
        [R(t, e), ":list="].join("")
      ] : [
        ...r,
        [R(t, e), ":list=", R(s, e)].join("")
      ];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (r) => (s, n) => n === void 0 || e.skipNull && n === null || e.skipEmptyString && n === "" ? s : (n = n === null ? "" : n, s.length === 0 ? [[R(r, e), t, R(n, e)].join("")] : [[s, R(n, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (t) => (r, s) => s === void 0 || e.skipNull && s === null || e.skipEmptyString && s === "" ? r : s === null ? [
        ...r,
        R(t, e)
      ] : [
        ...r,
        [R(t, e), "=", R(s, e)].join("")
      ];
  }
}
function Ai(e) {
  let t;
  switch (e.arrayFormat) {
    case "index":
      return (r, s, n) => {
        if (t = /\[(\d*)]$/.exec(r), r = r.replace(/\[\d*]$/, ""), !t) {
          n[r] = s;
          return;
        }
        n[r] === void 0 && (n[r] = {}), n[r][t[1]] = s;
      };
    case "bracket":
      return (r, s, n) => {
        if (t = /(\[])$/.exec(r), r = r.replace(/\[]$/, ""), !t) {
          n[r] = s;
          return;
        }
        if (n[r] === void 0) {
          n[r] = [s];
          return;
        }
        n[r] = [...n[r], s];
      };
    case "colon-list-separator":
      return (r, s, n) => {
        if (t = /(:list)$/.exec(r), r = r.replace(/:list$/, ""), !t) {
          n[r] = s;
          return;
        }
        if (n[r] === void 0) {
          n[r] = [s];
          return;
        }
        n[r] = [...n[r], s];
      };
    case "comma":
    case "separator":
      return (r, s, n) => {
        const a = typeof s == "string" && s.includes(e.arrayFormatSeparator), i = typeof s == "string" && !a && se(s, e).includes(e.arrayFormatSeparator);
        s = i ? se(s, e) : s;
        const o = a || i ? s.split(e.arrayFormatSeparator).map((u) => se(u, e)) : s === null ? s : se(s, e);
        n[r] = o;
      };
    case "bracket-separator":
      return (r, s, n) => {
        const a = /(\[])$/.test(r);
        if (r = r.replace(/\[]$/, ""), !a) {
          n[r] = s && se(s, e);
          return;
        }
        const i = s === null ? [] : s.split(e.arrayFormatSeparator).map((o) => se(o, e));
        if (n[r] === void 0) {
          n[r] = i;
          return;
        }
        n[r] = [...n[r], ...i];
      };
    default:
      return (r, s, n) => {
        if (n[r] === void 0) {
          n[r] = s;
          return;
        }
        n[r] = [...[n[r]].flat(), s];
      };
  }
}
function yn(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function R(e, t) {
  return t.encode ? t.strict ? Pi(e) : encodeURIComponent(e) : e;
}
function se(e, t) {
  return t.decode ? Yi(e) : e;
}
function pn(e) {
  return Array.isArray(e) ? e.sort() : typeof e == "object" ? pn(Object.keys(e)).sort((t, r) => Number(t) - Number(r)).map((t) => e[t]) : e;
}
function _n(e) {
  const t = e.indexOf("#");
  return t !== -1 && (e = e.slice(0, t)), e;
}
function Ci(e) {
  let t = "";
  const r = e.indexOf("#");
  return r !== -1 && (t = e.slice(r)), t;
}
function $s(e, t) {
  return t.parseNumbers && !Number.isNaN(Number(e)) && typeof e == "string" && e.trim() !== "" ? e = Number(e) : t.parseBooleans && e !== null && (e.toLowerCase() === "true" || e.toLowerCase() === "false") && (e = e.toLowerCase() === "true"), e;
}
function $r(e) {
  e = _n(e);
  const t = e.indexOf("?");
  return t === -1 ? "" : e.slice(t + 1);
}
function qr(e, t) {
  t = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...t
  }, yn(t.arrayFormatSeparator);
  const r = Ai(t), s = /* @__PURE__ */ Object.create(null);
  if (typeof e != "string" || (e = e.trim().replace(/^[?#&]/, ""), !e))
    return s;
  for (const n of e.split("&")) {
    if (n === "")
      continue;
    const a = t.decode ? n.replace(/\+/g, " ") : n;
    let [i, o] = mn(a, "=");
    i === void 0 && (i = a), o = o === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : se(o, t), r(se(i, t), o, s);
  }
  for (const [n, a] of Object.entries(s))
    if (typeof a == "object" && a !== null)
      for (const [i, o] of Object.entries(a))
        a[i] = $s(o, t);
    else
      s[n] = $s(a, t);
  return t.sort === !1 ? s : (t.sort === !0 ? Object.keys(s).sort() : Object.keys(s).sort(t.sort)).reduce((n, a) => {
    const i = s[a];
    return Boolean(i) && typeof i == "object" && !Array.isArray(i) ? n[a] = pn(i) : n[a] = i, n;
  }, /* @__PURE__ */ Object.create(null));
}
function gn(e, t) {
  if (!e)
    return "";
  t = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...t
  }, yn(t.arrayFormatSeparator);
  const r = (i) => t.skipNull && Fi(e[i]) || t.skipEmptyString && e[i] === "", s = Ni(t), n = {};
  for (const [i, o] of Object.entries(e))
    r(i) || (n[i] = o);
  const a = Object.keys(n);
  return t.sort !== !1 && a.sort(t.sort), a.map((i) => {
    const o = e[i];
    return o === void 0 ? "" : o === null ? R(i, t) : Array.isArray(o) ? o.length === 0 && t.arrayFormat === "bracket-separator" ? R(i, t) + "[]" : o.reduce(s(i), []).join("&") : R(i, t) + "=" + R(o, t);
  }).filter((i) => i.length > 0).join("&");
}
function wn(e, t) {
  var n, a;
  t = {
    decode: !0,
    ...t
  };
  let [r, s] = mn(e, "#");
  return r === void 0 && (r = e), {
    url: (a = (n = r == null ? void 0 : r.split("?")) == null ? void 0 : n[0]) != null ? a : "",
    query: qr($r(e), t),
    ...t && t.parseFragmentIdentifier && s ? { fragmentIdentifier: se(s, t) } : {}
  };
}
function vn(e, t) {
  t = {
    encode: !0,
    strict: !0,
    [yr]: !0,
    ...t
  };
  const r = _n(e.url).split("?")[0] || "", s = $r(e.url), n = {
    ...qr(s, { sort: !1 }),
    ...e.query
  };
  let a = gn(n, t);
  a && (a = `?${a}`);
  let i = Ci(e.url);
  if (e.fragmentIdentifier) {
    const o = new URL(r);
    o.hash = e.fragmentIdentifier, i = t[yr] ? o.hash : `#${e.fragmentIdentifier}`;
  }
  return `${r}${a}${i}`;
}
function Sn(e, t, r) {
  r = {
    parseFragmentIdentifier: !0,
    [yr]: !1,
    ...r
  };
  const { url: s, query: n, fragmentIdentifier: a } = wn(e, r);
  return vn({
    url: s,
    query: Ei(n, t),
    fragmentIdentifier: a
  }, r);
}
function Li(e, t, r) {
  const s = Array.isArray(t) ? (n) => !t.includes(n) : (n, a) => !t(n, a);
  return Sn(e, s, r);
}
const qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  extract: $r,
  parse: qr,
  stringify: gn,
  parseUrl: wn,
  stringifyUrl: vn,
  pick: Sn,
  exclude: Li
}, Symbol.toStringTag, { value: "Module" }));
class jr {
  constructor() {
    O(this, "api", null);
    O(this, "baseUrl", null);
    O(this, "structure", null);
    O(this, "options", null);
    O(this, "states", {
      fetch: new ne(),
      filter: new ne()
    });
    O(this, "query", oe({
      items: [],
      perPage: 0,
      total: 0
    }));
    O(this, "params", oe({
      page: 1
    }));
    O(this, "state", oe({
      isFilterActive: !1
    }));
  }
  static create(t, r) {
    if (!r)
      throw Error("Listing options have not been provided.");
    const s = new jr();
    if (!t)
      throw Error("Structure of search query required.");
    return s.structure = Object.assign({}, JSON.parse(JSON.stringify(t))), s.options = Object.assign({
      enableSearchUpdate: !0,
      transformItem: (n) => n
    }, r), Object.assign(s.params, t), s.options.enableSearchUpdate && s.mergeSearch(), s.baseUrl = r.baseUrl, s.api = ue.create(r.axios || {}), s;
  }
  mergeSearch() {
    const t = qs.parse(window.location.search);
    Object.assign(this.params, this.structure, t);
  }
  tableConfig() {
    return {
      data: this.query.items,
      total: this.query.total,
      perPage: this.query.perPage,
      loading: this.isLoading
    };
  }
  async fetch(t) {
    this.states.fetch.loading();
    const r = JSON.parse(JSON.stringify(this.params)), s = t || this.baseUrl, { data: n } = await this.api.get(s, {
      params: r
    }).catch((a) => {
      throw this.states.fetch.failed(), a;
    });
    return this.states.fetch.loaded(), this.options.enableSearchUpdate && this.refreshUrl(), n;
  }
  async reload(t) {
    const { data: r } = await this.api.get(t || this.baseUrl, {
      params: JSON.parse(JSON.stringify(this.params))
    });
    return Object.assign(this.query, r.query, {
      items: r.query.items.map((s) => this.transformItem(s))
    }), r;
  }
  refreshUrl() {
    const t = window.location.href.replace(/\?.*/, ""), r = JSON.parse(JSON.stringify(this.params)), s = t + "?" + qs.stringify(r);
    window.history.replaceState({}, "", s);
  }
  push(t) {
    this.query.items.push(
      this.transformItem(
        t
      )
    );
  }
  transformItem(t) {
    return this.options.transformItem({
      ...t,
      states: {
        delete: new ne(),
        patch: new ne()
      }
    });
  }
  async load(t) {
    const r = await this.fetch(t);
    if (!r.query || !r.query.items)
      throw this.states.fetch.failed(), Error("Response format is invalid.");
    return Object.assign(this.query, r.query, {
      items: r.query.items.map((s) => this.transformItem(s))
    }), r;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async patch(t) {
    const { path: r, props: s, attributes: n } = t, { row: a, index: i } = s, o = {
      id: a.id,
      ...n
    }, { data: u } = await this.api.patch(r || this.baseUrl, o).catch((m) => {
      throw m;
    });
    return u.patch && Object.assign(a, u.patch), (await this.fetch()).query.items.length || (this.params.page--, await this.load()), u;
  }
  async delete(t) {
    const { path: r, props: s, attributes: n } = t, { row: a, index: i } = s, o = {
      id: a.id,
      ...n
    };
    a.states.delete.loading();
    const { data: u } = await this.api.delete(r || this.baseUrl, {
      data: o
    }).catch((m) => {
      throw a.states.delete.failed(), m;
    });
    a.states.delete.loaded(), u.row && Object.assign(a, u.row);
    const c = await this.fetch();
    if (this.query.items.splice(i, 1), !c.query.items.length)
      return this.params.page--, await this.load(), u;
    if (this.query.items.length < c.query.items.length) {
      const m = c.query.items[c.query.items.length - 1];
      this.push(m);
    }
    return u;
  }
  get isLoading() {
    return this.states.fetch.isLoading;
  }
  get isLoaded() {
    return this.states.fetch.isLoaded;
  }
  get isFailure() {
    return this.states.fetch.isFailure;
  }
  get isFilterLoading() {
    return this.states.filter.isLoading;
  }
  get isFilterActive() {
    return this.state.isFilterActive;
  }
  async applyFilter() {
    await this.load(), this.state.isFilterActive = !1;
  }
  showFilter() {
    this.state.isFilterActive = !0;
  }
  cancelFilter() {
    this.state.isFilterActive = !1;
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.state.isFilterActive = !1, await this.load(t);
  }
}
const ge = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, n] of t)
    r[s] = n;
  return r;
}, Ui = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, Wi = /* @__PURE__ */ Ke("Submit"), Ii = /* @__PURE__ */ Ke("Processing..."), $i = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function qi(e, t, r, s, n, a) {
  const i = de("o-button");
  return Q(), We(i, { disabled: r.loading }, {
    default: Pe(() => [
      r.loading ? Je("", !0) : pt(e.$slots, "default", { key: 0 }, () => [
        Wi
      ]),
      r.loading ? pt(e.$slots, "loading", { key: 1 }, () => [
        Ii
      ]) : Je("", !0),
      r.loading ? (Q(), _t("i", $i)) : Je("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const pr = /* @__PURE__ */ ge(Ui, [["render", qi]]), ji = {
  name: "WyxosCollection",
  props: {
    modelValue: {
      required: !0,
      type: Array
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.items = this.modelValue;
  },
  methods: {
    add(e) {
      this.items.push(e), this.$emit("update:modelValue", this.items);
    },
    remove(e) {
      this.items.splice(e, 1), this.$emit("update:modelValue", this.items);
    }
  }
}, Vi = /* @__PURE__ */ Ze("ul", null, [
  /* @__PURE__ */ Ze("li")
], -1);
function Hi(e, t, r, s, n, a) {
  return pt(e.$slots, "default", ga(wa({ add: a.add, remove: a.remove, items: n.items })), () => [
    Vi
  ]);
}
const _r = /* @__PURE__ */ ge(ji, [["render", Hi]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var bn;
function d() {
  return bn.apply(null, arguments);
}
function Bi(e) {
  bn = e;
}
function G(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function be(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Vr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function L(e) {
  return e === void 0;
}
function fe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function st(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function On(e, t) {
  var r = [], s, n = e.length;
  for (s = 0; s < n; ++s)
    r.push(t(e[s], s));
  return r;
}
function ye(e, t) {
  for (var r in t)
    S(t, r) && (e[r] = t[r]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function K(e, t, r, s) {
  return Gn(e, t, r, s, !0).utc();
}
function Gi() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function _(e) {
  return e._pf == null && (e._pf = Gi()), e._pf;
}
var gr;
Array.prototype.some ? gr = Array.prototype.some : gr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function Hr(e) {
  if (e._isValid == null) {
    var t = _(e), r = gr.call(t.parsedDateParts, function(n) {
      return n != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function Et(e) {
  var t = K(NaN);
  return e != null ? ye(_(t), e) : _(t).userInvalidated = !0, t;
}
var js = d.momentProperties = [], ur = !1;
function Br(e, t) {
  var r, s, n, a = js.length;
  if (L(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), L(t._i) || (e._i = t._i), L(t._f) || (e._f = t._f), L(t._l) || (e._l = t._l), L(t._strict) || (e._strict = t._strict), L(t._tzm) || (e._tzm = t._tzm), L(t._isUTC) || (e._isUTC = t._isUTC), L(t._offset) || (e._offset = t._offset), L(t._pf) || (e._pf = _(t)), L(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      s = js[r], n = t[s], L(n) || (e[s] = n);
  return e;
}
function nt(e) {
  Br(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ur === !1 && (ur = !0, d.updateOffset(this), ur = !1);
}
function z(e) {
  return e instanceof nt || e != null && e._isAMomentObject != null;
}
function Dn(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function j(e, t) {
  var r = !0;
  return ye(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), r) {
      var s = [], n, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (n += i + ": " + arguments[0][i] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        s.push(n);
      }
      Dn(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Vs = {};
function kn(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Vs[e] || (Dn(t), Vs[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function ee(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function zi(e) {
  var t, r;
  for (r in e)
    S(e, r) && (t = e[r], ee(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function wr(e, t) {
  var r = ye({}, e), s;
  for (s in t)
    S(t, s) && (be(e[s]) && be(t[s]) ? (r[s] = {}, ye(r[s], e[s]), ye(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    S(e, s) && !S(t, s) && be(e[s]) && (r[s] = ye({}, r[s]));
  return r;
}
function Gr(e) {
  e != null && this.set(e);
}
var vr;
Object.keys ? vr = Object.keys : vr = function(e) {
  var t, r = [];
  for (t in e)
    S(e, t) && r.push(t);
  return r;
};
var Ji = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Zi(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ee(s) ? s.call(t, r) : s;
}
function X(e, t, r) {
  var s = "" + Math.abs(e), n = t - s.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
}
var zr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, lt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, lr = {}, Ne = {};
function y(e, t, r, s) {
  var n = s;
  typeof s == "string" && (n = function() {
    return this[s]();
  }), e && (Ne[e] = n), t && (Ne[t[0]] = function() {
    return X(n.apply(this, arguments), t[1], t[2]);
  }), r && (Ne[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function Qi(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Xi(e) {
  var t = e.match(zr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Ne[t[r]] ? t[r] = Ne[t[r]] : t[r] = Qi(t[r]);
  return function(n) {
    var a = "", i;
    for (i = 0; i < s; i++)
      a += ee(t[i]) ? t[i].call(n, e) : t[i];
    return a;
  };
}
function ct(e, t) {
  return e.isValid() ? (t = Mn(t, e.localeData()), lr[t] = lr[t] || Xi(t), lr[t](e)) : e.localeData().invalidDate();
}
function Mn(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (lt.lastIndex = 0; r >= 0 && lt.test(e); )
    e = e.replace(
      lt,
      s
    ), lt.lastIndex = 0, r -= 1;
  return e;
}
var Ki = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function eo(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(zr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var to = "Invalid date";
function ro() {
  return this._invalidDate;
}
var so = "%d", no = /\d{1,2}/;
function ao(e) {
  return this._ordinal.replace("%d", e);
}
var io = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function oo(e, t, r, s) {
  var n = this._relativeTime[r];
  return ee(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function uo(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ee(r) ? r(t) : r.replace(/%s/i, t);
}
var Qe = {};
function N(e, t) {
  var r = e.toLowerCase();
  Qe[r] = Qe[r + "s"] = Qe[t] = e;
}
function V(e) {
  return typeof e == "string" ? Qe[e] || Qe[e.toLowerCase()] : void 0;
}
function Jr(e) {
  var t = {}, r, s;
  for (s in e)
    S(e, s) && (r = V(s), r && (t[r] = e[s]));
  return t;
}
var xn = {};
function A(e, t) {
  xn[e] = t;
}
function lo(e) {
  var t = [], r;
  for (r in e)
    S(e, r) && t.push({ unit: r, priority: xn[r] });
  return t.sort(function(s, n) {
    return s.priority - n.priority;
  }), t;
}
function Ft(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function g(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = q(t)), r;
}
function $e(e, t) {
  return function(r) {
    return r != null ? (Tn(this, e, r), d.updateOffset(this, t), this) : vt(this, e);
  };
}
function vt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Tn(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Ft(e.year()) && e.month() === 1 && e.date() === 29 ? (r = g(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Ut(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function fo(e) {
  return e = V(e), ee(this[e]) ? this[e]() : this;
}
function ho(e, t) {
  if (typeof e == "object") {
    e = Jr(e);
    var r = lo(e), s, n = r.length;
    for (s = 0; s < n; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = V(e), ee(this[e]))
    return this[e](t);
  return this;
}
var Rn = /\d/, $ = /\d\d/, Yn = /\d{3}/, Zr = /\d{4}/, Pt = /[+-]?\d{6}/, M = /\d\d?/, En = /\d\d\d\d?/, Fn = /\d\d\d\d\d\d?/, Nt = /\d{1,3}/, Qr = /\d{1,4}/, At = /[+-]?\d{1,6}/, qe = /\d+/, Ct = /[+-]?\d+/, co = /Z|[+-]\d\d:?\d\d/gi, Lt = /Z|[+-]\d\d(?::?\d\d)?/gi, mo = /[+-]?\d+(\.\d{1,3})?/, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, St;
St = {};
function f(e, t, r) {
  St[e] = ee(t) ? t : function(s, n) {
    return s && r ? r : t;
  };
}
function yo(e, t) {
  return S(St, e) ? St[e](t._strict, t._locale) : new RegExp(po(e));
}
function po(e) {
  return I(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, n, a) {
        return r || s || n || a;
      }
    )
  );
}
function I(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Sr = {};
function D(e, t) {
  var r, s = t, n;
  for (typeof e == "string" && (e = [e]), fe(t) && (s = function(a, i) {
    i[t] = g(a);
  }), n = e.length, r = 0; r < n; r++)
    Sr[e[r]] = s;
}
function it(e, t) {
  D(e, function(r, s, n, a) {
    n._w = n._w || {}, t(r, n._w, n, a);
  });
}
function _o(e, t, r) {
  t != null && S(Sr, e) && Sr[e](t, r._a, r, e);
}
var P = 0, ae = 1, Z = 2, Y = 3, B = 4, ie = 5, Se = 6, go = 7, wo = 8;
function vo(e, t) {
  return (e % t + t) % t;
}
var T;
Array.prototype.indexOf ? T = Array.prototype.indexOf : T = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ut(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = vo(t, 12);
  return e += (t - r) / 12, r === 1 ? Ft(e) ? 29 : 28 : 31 - r % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
N("month", "M");
A("month", 8);
f("M", M);
f("MM", M, $);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
D(["M", "MM"], function(e, t) {
  t[ae] = g(e) - 1;
});
D(["MMM", "MMMM"], function(e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? t[ae] = n : _(r).invalidMonth = e;
});
var So = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Pn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Nn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, bo = at, Oo = at;
function Do(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Nn).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function ko(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Nn.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Mo(e, t, r) {
  var s, n, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      a = K([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = T.call(this._shortMonthsParse, i), n !== -1 ? n : null) : (n = T.call(this._longMonthsParse, i), n !== -1 ? n : null) : t === "MMM" ? (n = T.call(this._shortMonthsParse, i), n !== -1 ? n : (n = T.call(this._longMonthsParse, i), n !== -1 ? n : null)) : (n = T.call(this._longMonthsParse, i), n !== -1 ? n : (n = T.call(this._shortMonthsParse, i), n !== -1 ? n : null));
}
function xo(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact)
    return Mo.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (n = K([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function An(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = g(t);
    else if (t = e.localeData().monthsParse(t), !fe(t))
      return e;
  }
  return r = Math.min(e.date(), Ut(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Cn(e) {
  return e != null ? (An(this, e), d.updateOffset(this, !0), this) : vt(this, "Month");
}
function To() {
  return Ut(this.year(), this.month());
}
function Ro(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || Ln.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = bo), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Yo(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || Ln.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Oo), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ln() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], s = [], n, a;
  for (n = 0; n < 12; n++)
    a = K([2e3, n]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), s.sort(e), n = 0; n < 12; n++)
    t[n] = I(t[n]), r[n] = I(r[n]);
  for (n = 0; n < 24; n++)
    s[n] = I(s[n]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? X(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
N("year", "y");
A("year", 1);
f("Y", Ct);
f("YY", M, $);
f("YYYY", Qr, Zr);
f("YYYYY", At, Pt);
f("YYYYYY", At, Pt);
D(["YYYYY", "YYYYYY"], P);
D("YYYY", function(e, t) {
  t[P] = e.length === 2 ? d.parseTwoDigitYear(e) : g(e);
});
D("YY", function(e, t) {
  t[P] = d.parseTwoDigitYear(e);
});
D("Y", function(e, t) {
  t[P] = parseInt(e, 10);
});
function Xe(e) {
  return Ft(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return g(e) + (g(e) > 68 ? 1900 : 2e3);
};
var Un = $e("FullYear", !0);
function Eo() {
  return Ft(this.year());
}
function Fo(e, t, r, s, n, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, n, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, n, a, i), o;
}
function et(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function bt(e, t, r) {
  var s = 7 + t - r, n = (7 + et(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function Wn(e, t, r, s, n) {
  var a = (7 + r - s) % 7, i = bt(e, s, n), o = 1 + 7 * (t - 1) + a + i, u, c;
  return o <= 0 ? (u = e - 1, c = Xe(u) + o) : o > Xe(e) ? (u = e + 1, c = o - Xe(e)) : (u = e, c = o), {
    year: u,
    dayOfYear: c
  };
}
function tt(e, t, r) {
  var s = bt(e.year(), t, r), n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, a, i;
  return n < 1 ? (i = e.year() - 1, a = n + le(i, t, r)) : n > le(e.year(), t, r) ? (a = n - le(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = n), {
    week: a,
    year: i
  };
}
function le(e, t, r) {
  var s = bt(e, t, r), n = bt(e + 1, t, r);
  return (Xe(e) - s + n) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
N("week", "w");
N("isoWeek", "W");
A("week", 5);
A("isoWeek", 5);
f("w", M);
f("ww", M, $);
f("W", M);
f("WW", M, $);
it(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = g(e);
  }
);
function Po(e) {
  return tt(e, this._week.dow, this._week.doy).week;
}
var No = {
  dow: 0,
  doy: 6
};
function Ao() {
  return this._week.dow;
}
function Co() {
  return this._week.doy;
}
function Lo(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Uo(e) {
  var t = tt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
N("day", "d");
N("weekday", "e");
N("isoWeekday", "E");
A("day", 11);
A("weekday", 11);
A("isoWeekday", 11);
f("d", M);
f("e", M);
f("E", M);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
it(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? t.d = n : _(r).invalidWeekday = e;
});
it(["d", "e", "E"], function(e, t, r, s) {
  t[s] = g(e);
});
function Wo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Io(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Xr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var $o = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), In = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), qo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), jo = at, Vo = at, Ho = at;
function Bo(e, t) {
  var r = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Xr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Go(e) {
  return e === !0 ? Xr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function zo(e) {
  return e === !0 ? Xr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Jo(e, t, r) {
  var s, n, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      a = K([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = T.call(this._weekdaysParse, i), n !== -1 ? n : null) : t === "ddd" ? (n = T.call(this._shortWeekdaysParse, i), n !== -1 ? n : null) : (n = T.call(this._minWeekdaysParse, i), n !== -1 ? n : null) : t === "dddd" ? (n = T.call(this._weekdaysParse, i), n !== -1 || (n = T.call(this._shortWeekdaysParse, i), n !== -1) ? n : (n = T.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : t === "ddd" ? (n = T.call(this._shortWeekdaysParse, i), n !== -1 || (n = T.call(this._weekdaysParse, i), n !== -1) ? n : (n = T.call(this._minWeekdaysParse, i), n !== -1 ? n : null)) : (n = T.call(this._minWeekdaysParse, i), n !== -1 || (n = T.call(this._weekdaysParse, i), n !== -1) ? n : (n = T.call(this._shortWeekdaysParse, i), n !== -1 ? n : null));
}
function Zo(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact)
    return Jo.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (n = K([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function Qo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Wo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Xo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ko(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Io(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function eu(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = jo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function tu(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Vo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ru(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Kr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ho), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Kr() {
  function e(m, w) {
    return w.length - m.length;
  }
  var t = [], r = [], s = [], n = [], a, i, o, u, c;
  for (a = 0; a < 7; a++)
    i = K([2e3, 1]).day(a), o = I(this.weekdaysMin(i, "")), u = I(this.weekdaysShort(i, "")), c = I(this.weekdays(i, "")), t.push(o), r.push(u), s.push(c), n.push(o), n.push(u), n.push(c);
  t.sort(e), r.sort(e), s.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function es() {
  return this.hours() % 12 || 12;
}
function su() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, es);
y("k", ["kk", 2], 0, su);
y("hmm", 0, 0, function() {
  return "" + es.apply(this) + X(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + es.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2);
});
function $n(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
$n("a", !0);
$n("A", !1);
N("hour", "h");
A("hour", 13);
function qn(e, t) {
  return t._meridiemParse;
}
f("a", qn);
f("A", qn);
f("H", M);
f("h", M);
f("k", M);
f("HH", M, $);
f("hh", M, $);
f("kk", M, $);
f("hmm", En);
f("hmmss", Fn);
f("Hmm", En);
f("Hmmss", Fn);
D(["H", "HH"], Y);
D(["k", "kk"], function(e, t, r) {
  var s = g(e);
  t[Y] = s === 24 ? 0 : s;
});
D(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
D(["h", "hh"], function(e, t, r) {
  t[Y] = g(e), _(r).bigHour = !0;
});
D("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[Y] = g(e.substr(0, s)), t[B] = g(e.substr(s)), _(r).bigHour = !0;
});
D("hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[Y] = g(e.substr(0, s)), t[B] = g(e.substr(s, 2)), t[ie] = g(e.substr(n)), _(r).bigHour = !0;
});
D("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[Y] = g(e.substr(0, s)), t[B] = g(e.substr(s));
});
D("Hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[Y] = g(e.substr(0, s)), t[B] = g(e.substr(s, 2)), t[ie] = g(e.substr(n));
});
function nu(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var au = /[ap]\.?m?\.?/i, iu = $e("Hours", !0);
function ou(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var jn = {
  calendar: Ji,
  longDateFormat: Ki,
  invalidDate: to,
  ordinal: so,
  dayOfMonthOrdinalParse: no,
  relativeTime: io,
  months: So,
  monthsShort: Pn,
  week: No,
  weekdays: $o,
  weekdaysMin: qo,
  weekdaysShort: In,
  meridiemParse: au
}, x = {}, Ge = {}, rt;
function uu(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function Hs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function lu(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (a = Hs(e[t]).split("-"), r = a.length, s = Hs(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (n = Wt(a.slice(0, r).join("-")), n)
        return n;
      if (s && s.length >= r && uu(a, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return rt;
}
function du(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Wt(e) {
  var t = null, r;
  if (x[e] === void 0 && typeof module < "u" && module && module.exports && du(e))
    try {
      t = rt._abbr, r = require, r("./locale/" + e), _e(t);
    } catch {
      x[e] = null;
    }
  return x[e];
}
function _e(e, t) {
  var r;
  return e && (L(t) ? r = he(e) : r = ts(e, t), r ? rt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), rt._abbr;
}
function ts(e, t) {
  if (t !== null) {
    var r, s = jn;
    if (t.abbr = e, x[e] != null)
      kn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = x[e]._config;
    else if (t.parentLocale != null)
      if (x[t.parentLocale] != null)
        s = x[t.parentLocale]._config;
      else if (r = Wt(t.parentLocale), r != null)
        s = r._config;
      else
        return Ge[t.parentLocale] || (Ge[t.parentLocale] = []), Ge[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return x[e] = new Gr(wr(s, t)), Ge[e] && Ge[e].forEach(function(n) {
      ts(n.name, n.config);
    }), _e(e), x[e];
  } else
    return delete x[e], null;
}
function fu(e, t) {
  if (t != null) {
    var r, s, n = jn;
    x[e] != null && x[e].parentLocale != null ? x[e].set(wr(x[e]._config, t)) : (s = Wt(e), s != null && (n = s._config), t = wr(n, t), s == null && (t.abbr = e), r = new Gr(t), r.parentLocale = x[e], x[e] = r), _e(e);
  } else
    x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === _e() && _e(e)) : x[e] != null && delete x[e]);
  return x[e];
}
function he(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return rt;
  if (!G(e)) {
    if (t = Wt(e), t)
      return t;
    e = [e];
  }
  return lu(e);
}
function hu() {
  return vr(x);
}
function rs(e) {
  var t, r = e._a;
  return r && _(e).overflow === -2 && (t = r[ae] < 0 || r[ae] > 11 ? ae : r[Z] < 1 || r[Z] > Ut(r[P], r[ae]) ? Z : r[Y] < 0 || r[Y] > 24 || r[Y] === 24 && (r[B] !== 0 || r[ie] !== 0 || r[Se] !== 0) ? Y : r[B] < 0 || r[B] > 59 ? B : r[ie] < 0 || r[ie] > 59 ? ie : r[Se] < 0 || r[Se] > 999 ? Se : -1, _(e)._overflowDayOfYear && (t < P || t > Z) && (t = Z), _(e)._overflowWeeks && t === -1 && (t = go), _(e)._overflowWeekday && t === -1 && (t = wo), _(e).overflow = t), e;
}
var cu = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, mu = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, yu = /Z|[+-]\d\d(?::?\d\d)?/, dt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], dr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], pu = /^\/?Date\((-?\d+)/i, _u = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, gu = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Vn(e) {
  var t, r, s = e._i, n = cu.exec(s) || mu.exec(s), a, i, o, u, c = dt.length, m = dr.length;
  if (n) {
    for (_(e).iso = !0, t = 0, r = c; t < r; t++)
      if (dt[t][1].exec(n[1])) {
        i = dt[t][0], a = dt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = m; t < r; t++)
        if (dr[t][1].exec(n[3])) {
          o = (n[2] || " ") + dr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (yu.exec(n[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), ns(e);
  } else
    e._isValid = !1;
}
function wu(e, t, r, s, n, a) {
  var i = [
    vu(e),
    Pn.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function vu(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Su(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function bu(e, t, r) {
  if (e) {
    var s = In.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== n)
      return _(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Ou(e, t, r) {
  if (e)
    return gu[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), n = s % 100, a = (s - n) / 100;
  return a * 60 + n;
}
function Hn(e) {
  var t = _u.exec(Su(e._i)), r;
  if (t) {
    if (r = wu(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !bu(t[1], r, e))
      return;
    e._a = r, e._tzm = Ou(t[8], t[9], t[10]), e._d = et.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Du(e) {
  var t = pu.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (Vn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Hn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = j(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ee(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function ku(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ss(e) {
  var t, r, s = [], n, a, i;
  if (!e._d) {
    for (n = ku(e), e._w && e._a[Z] == null && e._a[ae] == null && Mu(e), e._dayOfYear != null && (i = Ee(e._a[P], n[P]), (e._dayOfYear > Xe(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), r = et(i, 0, e._dayOfYear), e._a[ae] = r.getUTCMonth(), e._a[Z] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Y] === 24 && e._a[B] === 0 && e._a[ie] === 0 && e._a[Se] === 0 && (e._nextDay = !0, e._a[Y] = 0), e._d = (e._useUTC ? et : Fo).apply(
      null,
      s
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Y] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (_(e).weekdayMismatch = !0);
  }
}
function Mu(e) {
  var t, r, s, n, a, i, o, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = Ee(
    t.GG,
    e._a[P],
    tt(k(), 1, 4).year
  ), s = Ee(t.W, 1), n = Ee(t.E, 1), (n < 1 || n > 7) && (u = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, c = tt(k(), a, i), r = Ee(t.gg, e._a[P], c.year), s = Ee(t.w, c.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (u = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : n = a), s < 1 || s > le(r, a, i) ? _(e)._overflowWeeks = !0 : u != null ? _(e)._overflowWeekday = !0 : (o = Wn(r, s, n, a, i), e._a[P] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function ns(e) {
  if (e._f === d.ISO_8601) {
    Vn(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    Hn(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, r, s, n, a, i, o = t.length, u = 0, c, m;
  for (n = Mn(e._f, e._locale).match(zr) || [], m = n.length, r = 0; r < m; r++)
    a = n[r], s = (t.match(yo(a, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Ne[a] ? (s ? _(e).empty = !1 : _(e).unusedTokens.push(a), _o(a, s, e)) : e._strict && !s && _(e).unusedTokens.push(a);
  _(e).charsLeftOver = o - u, t.length > 0 && _(e).unusedInput.push(t), e._a[Y] <= 12 && _(e).bigHour === !0 && e._a[Y] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[Y] = xu(
    e._locale,
    e._a[Y],
    e._meridiem
  ), c = _(e).era, c !== null && (e._a[P] = e._locale.erasConvertYear(c, e._a[P])), ss(e), rs(e);
}
function xu(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Tu(e) {
  var t, r, s, n, a, i, o = !1, u = e._f.length;
  if (u === 0) {
    _(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (n = 0; n < u; n++)
    a = 0, i = !1, t = Br({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], ns(t), Hr(t) && (i = !0), a += _(t).charsLeftOver, a += _(t).unusedTokens.length * 10, _(t).score = a, o ? a < s && (s = a, r = t) : (s == null || a < s || i) && (s = a, r = t, i && (o = !0));
  ye(e, r || t);
}
function Ru(e) {
  if (!e._d) {
    var t = Jr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = On(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), ss(e);
  }
}
function Yu(e) {
  var t = new nt(rs(Bn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Bn(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || he(e._l), t === null || r === void 0 && t === "" ? Et({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new nt(rs(t)) : (st(t) ? e._d = t : G(r) ? Tu(e) : r ? ns(e) : Eu(e), Hr(e) || (e._d = null), e));
}
function Eu(e) {
  var t = e._i;
  L(t) ? e._d = new Date(d.now()) : st(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Du(e) : G(t) ? (e._a = On(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), ss(e)) : be(t) ? Ru(e) : fe(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function Gn(e, t, r, s, n) {
  var a = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (be(e) && Vr(e) || G(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = r, a._i = e, a._f = t, a._strict = s, Yu(a);
}
function k(e, t, r, s) {
  return Gn(e, t, r, s, !1);
}
var Fu = j(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Et();
  }
), Pu = j(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Et();
  }
);
function zn(e, t) {
  var r, s;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return k();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Nu() {
  var e = [].slice.call(arguments, 0);
  return zn("isBefore", e);
}
function Au() {
  var e = [].slice.call(arguments, 0);
  return zn("isAfter", e);
}
var Cu = function() {
  return Date.now ? Date.now() : +new Date();
}, ze = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Lu(e) {
  var t, r = !1, s, n = ze.length;
  for (t in e)
    if (S(e, t) && !(T.call(ze, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[ze[s]]) {
      if (r)
        return !1;
      parseFloat(e[ze[s]]) !== g(e[ze[s]]) && (r = !0);
    }
  return !0;
}
function Uu() {
  return this._isValid;
}
function Wu() {
  return J(NaN);
}
function It(e) {
  var t = Jr(e), r = t.year || 0, s = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, m = t.millisecond || 0;
  this._isValid = Lu(t), this._milliseconds = +m + c * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +n + s * 3 + r * 12, this._data = {}, this._locale = he(), this._bubble();
}
function mt(e) {
  return e instanceof It;
}
function br(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Iu(e, t, r) {
  var s = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && g(e[i]) !== g(t[i])) && a++;
  return a + n;
}
function Jn(e, t) {
  y(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + X(~~(r / 60), 2) + t + X(~~r % 60, 2);
  });
}
Jn("Z", ":");
Jn("ZZ", "");
f("Z", Lt);
f("ZZ", Lt);
D(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = as(Lt, e);
});
var $u = /([\+\-]|\d\d)/gi;
function as(e, t) {
  var r = (t || "").match(e), s, n, a;
  return r === null ? null : (s = r[r.length - 1] || [], n = (s + "").match($u) || ["-", 0, 0], a = +(n[1] * 60) + g(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function is(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (z(e) || st(e) ? e.valueOf() : k(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), d.updateOffset(r, !1), r) : k(e).local();
}
function Or(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function qu(e, t, r) {
  var s = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = as(Lt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = Or(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? Xn(
      this,
      J(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : Or(this);
}
function ju(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Vu(e) {
  return this.utcOffset(0, e);
}
function Hu(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Or(this), "m")), this;
}
function Bu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = as(co, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Gu(e) {
  return this.isValid() ? (e = e ? k(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function zu() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ju() {
  if (!L(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Br(e, this), e = Bn(e), e._a ? (t = e._isUTC ? K(e._a) : k(e._a), this._isDSTShifted = this.isValid() && Iu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Zu() {
  return this.isValid() ? !this._isUTC : !1;
}
function Qu() {
  return this.isValid() ? this._isUTC : !1;
}
function Zn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Xu = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ku = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function J(e, t) {
  var r = e, s = null, n, a, i;
  return mt(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : fe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = Xu.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: g(s[Z]) * n,
    h: g(s[Y]) * n,
    m: g(s[B]) * n,
    s: g(s[ie]) * n,
    ms: g(br(s[Se] * 1e3)) * n
  }) : (s = Ku.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: ve(s[2], n),
    M: ve(s[3], n),
    w: ve(s[4], n),
    d: ve(s[5], n),
    h: ve(s[6], n),
    m: ve(s[7], n),
    s: ve(s[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = el(
    k(r.from),
    k(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new It(r), mt(e) && S(e, "_locale") && (a._locale = e._locale), mt(e) && S(e, "_isValid") && (a._isValid = e._isValid), a;
}
J.fn = It.prototype;
J.invalid = Wu;
function ve(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Bs(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function el(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = is(t, e), e.isBefore(t) ? r = Bs(e, t) : (r = Bs(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Qn(e, t) {
  return function(r, s) {
    var n, a;
    return s !== null && !isNaN(+s) && (kn(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = s, s = a), n = J(r, s), Xn(this, n, e), this;
  };
}
function Xn(e, t, r, s) {
  var n = t._milliseconds, a = br(t._days), i = br(t._months);
  !e.isValid() || (s = s == null ? !0 : s, i && An(e, vt(e, "Month") + i * r), a && Tn(e, "Date", vt(e, "Date") + a * r), n && e._d.setTime(e._d.valueOf() + n * r), s && d.updateOffset(e, a || i));
}
var tl = Qn(1, "add"), rl = Qn(-1, "subtract");
function Kn(e) {
  return typeof e == "string" || e instanceof String;
}
function sl(e) {
  return z(e) || st(e) || Kn(e) || fe(e) || al(e) || nl(e) || e === null || e === void 0;
}
function nl(e) {
  var t = be(e) && !Vr(e), r = !1, s = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, a, i = s.length;
  for (n = 0; n < i; n += 1)
    a = s[n], r = r || S(e, a);
  return t && r;
}
function al(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !fe(s) && Kn(e);
  }).length === 0), t && r;
}
function il(e) {
  var t = be(e) && !Vr(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < s.length; n += 1)
    a = s[n], r = r || S(e, a);
  return t && r;
}
function ol(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function ul(e, t) {
  arguments.length === 1 && (arguments[0] ? sl(arguments[0]) ? (e = arguments[0], t = void 0) : il(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || k(), s = is(r, this).startOf("day"), n = d.calendarFormat(this, s) || "sameElse", a = t && (ee(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, k(r))
  );
}
function ll() {
  return new nt(this);
}
function dl(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function fl(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function hl(e, t, r, s) {
  var n = z(e) ? e : k(e), a = z(t) ? t : k(t);
  return this.isValid() && n.isValid() && a.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function cl(e, t) {
  var r = z(e) ? e : k(e), s;
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function ml(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function yl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function pl(e, t, r) {
  var s, n, a;
  if (!this.isValid())
    return NaN;
  if (s = is(e, this), !s.isValid())
    return NaN;
  switch (n = (s.utcOffset() - this.utcOffset()) * 6e4, t = V(t), t) {
    case "year":
      a = yt(this, s) / 12;
      break;
    case "month":
      a = yt(this, s);
      break;
    case "quarter":
      a = yt(this, s) / 3;
      break;
    case "second":
      a = (this - s) / 1e3;
      break;
    case "minute":
      a = (this - s) / 6e4;
      break;
    case "hour":
      a = (this - s) / 36e5;
      break;
    case "day":
      a = (this - s - n) / 864e5;
      break;
    case "week":
      a = (this - s - n) / 6048e5;
      break;
    default:
      a = this - s;
  }
  return r ? a : q(a);
}
function yt(e, t) {
  if (e.date() < t.date())
    return -yt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), n, a;
  return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function _l() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function gl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ct(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ee(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ct(r, "Z")) : ct(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function wl() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + s + n + a);
}
function vl(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = ct(this, e);
  return this.localeData().postformat(t);
}
function Sl(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? J({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function bl(e) {
  return this.from(k(), e);
}
function Ol(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? J({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Dl(e) {
  return this.to(k(), e);
}
function ea(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = he(e), t != null && (this._locale = t), this);
}
var ta = j(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ra() {
  return this._locale;
}
var Ot = 1e3, Ae = 60 * Ot, Dt = 60 * Ae, sa = (365 * 400 + 97) * 24 * Dt;
function Ce(e, t) {
  return (e % t + t) % t;
}
function na(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - sa : new Date(e, t, r).valueOf();
}
function aa(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - sa : Date.UTC(e, t, r);
}
function kl(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? aa : na, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ce(
        t + (this._isUTC ? 0 : this.utcOffset() * Ae),
        Dt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ce(t, Ae);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ce(t, Ot);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Ml(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? aa : na, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Dt - Ce(
        t + (this._isUTC ? 0 : this.utcOffset() * Ae),
        Dt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ae - Ce(t, Ae) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ot - Ce(t, Ot) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function xl() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Tl() {
  return Math.floor(this.valueOf() / 1e3);
}
function Rl() {
  return new Date(this.valueOf());
}
function Yl() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function El() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Fl() {
  return this.isValid() ? this.toISOString() : null;
}
function Pl() {
  return Hr(this);
}
function Nl() {
  return ye({}, _(this));
}
function Al() {
  return _(this).overflow;
}
function Cl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
f("N", os);
f("NN", os);
f("NNN", os);
f("NNNN", Gl);
f("NNNNN", zl);
D(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var n = r._locale.erasParse(e, s, r._strict);
    n ? _(r).era = n : _(r).invalidEra = e;
  }
);
f("y", qe);
f("yy", qe);
f("yyy", qe);
f("yyyy", qe);
f("yo", Jl);
D(["y", "yy", "yyy", "yyyy"], P);
D(["yo"], function(e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[P] = r._locale.eraYearOrdinalParse(e, n) : t[P] = parseInt(e, 10);
});
function Ll(e, t) {
  var r, s, n, a = this._eras || he("en")._eras;
  for (r = 0, s = a.length; r < s; ++r) {
    switch (typeof a[r].since) {
      case "string":
        n = d(a[r].since).startOf("day"), a[r].since = n.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        n = d(a[r].until).startOf("day").valueOf(), a[r].until = n.valueOf();
        break;
    }
  }
  return a;
}
function Ul(e, t, r) {
  var s, n, a = this.eras(), i, o, u;
  for (e = e.toUpperCase(), s = 0, n = a.length; s < n; ++s)
    if (i = a[s].name.toUpperCase(), o = a[s].abbr.toUpperCase(), u = a[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return a[s];
          break;
        case "NNNN":
          if (i === e)
            return a[s];
          break;
        case "NNNNN":
          if (u === e)
            return a[s];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return a[s];
}
function Wl(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * r;
}
function Il() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function $l() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function ql() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function jl() {
  var e, t, r, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return (this.year() - d(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Vl(e) {
  return S(this, "_erasNameRegex") || us.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Hl(e) {
  return S(this, "_erasAbbrRegex") || us.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Bl(e) {
  return S(this, "_erasNarrowRegex") || us.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function os(e, t) {
  return t.erasAbbrRegex(e);
}
function Gl(e, t) {
  return t.erasNameRegex(e);
}
function zl(e, t) {
  return t.erasNarrowRegex(e);
}
function Jl(e, t) {
  return t._eraYearOrdinalRegex || qe;
}
function us() {
  var e = [], t = [], r = [], s = [], n, a, i = this.eras();
  for (n = 0, a = i.length; n < a; ++n)
    t.push(I(i[n].name)), e.push(I(i[n].abbr)), r.push(I(i[n].narrow)), s.push(I(i[n].name)), s.push(I(i[n].abbr)), s.push(I(i[n].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function $t(e, t) {
  y(0, [e, e.length], 0, t);
}
$t("gggg", "weekYear");
$t("ggggg", "weekYear");
$t("GGGG", "isoWeekYear");
$t("GGGGG", "isoWeekYear");
N("weekYear", "gg");
N("isoWeekYear", "GG");
A("weekYear", 1);
A("isoWeekYear", 1);
f("G", Ct);
f("g", Ct);
f("GG", M, $);
f("gg", M, $);
f("GGGG", Qr, Zr);
f("gggg", Qr, Zr);
f("GGGGG", At, Pt);
f("ggggg", At, Pt);
it(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = g(e);
  }
);
it(["gg", "GG"], function(e, t, r, s) {
  t[s] = d.parseTwoDigitYear(e);
});
function Zl(e) {
  return ia.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ql(e) {
  return ia.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Xl() {
  return le(this.year(), 1, 4);
}
function Kl() {
  return le(this.isoWeekYear(), 1, 4);
}
function ed() {
  var e = this.localeData()._week;
  return le(this.year(), e.dow, e.doy);
}
function td() {
  var e = this.localeData()._week;
  return le(this.weekYear(), e.dow, e.doy);
}
function ia(e, t, r, s, n) {
  var a;
  return e == null ? tt(this, s, n).year : (a = le(e, s, n), t > a && (t = a), rd.call(this, e, t, r, s, n));
}
function rd(e, t, r, s, n) {
  var a = Wn(e, t, r, s, n), i = et(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
N("quarter", "Q");
A("quarter", 7);
f("Q", Rn);
D("Q", function(e, t) {
  t[ae] = (g(e) - 1) * 3;
});
function sd(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
N("date", "D");
A("date", 9);
f("D", M);
f("DD", M, $);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
D(["D", "DD"], Z);
D("Do", function(e, t) {
  t[Z] = g(e.match(M)[0]);
});
var oa = $e("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
A("dayOfYear", 4);
f("DDD", Nt);
f("DDDD", Yn);
D(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = g(e);
});
function nd(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
N("minute", "m");
A("minute", 14);
f("m", M);
f("mm", M, $);
D(["m", "mm"], B);
var ad = $e("Minutes", !1);
y("s", ["ss", 2], 0, "second");
N("second", "s");
A("second", 15);
f("s", M);
f("ss", M, $);
D(["s", "ss"], ie);
var id = $e("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
N("millisecond", "ms");
A("millisecond", 16);
f("S", Nt, Rn);
f("SS", Nt, $);
f("SSS", Nt, Yn);
var pe, ua;
for (pe = "SSSS"; pe.length <= 9; pe += "S")
  f(pe, qe);
function od(e, t) {
  t[Se] = g(("0." + e) * 1e3);
}
for (pe = "S"; pe.length <= 9; pe += "S")
  D(pe, od);
ua = $e("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function ud() {
  return this._isUTC ? "UTC" : "";
}
function ld() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = nt.prototype;
l.add = tl;
l.calendar = ul;
l.clone = ll;
l.diff = pl;
l.endOf = Ml;
l.format = vl;
l.from = Sl;
l.fromNow = bl;
l.to = Ol;
l.toNow = Dl;
l.get = fo;
l.invalidAt = Al;
l.isAfter = dl;
l.isBefore = fl;
l.isBetween = hl;
l.isSame = cl;
l.isSameOrAfter = ml;
l.isSameOrBefore = yl;
l.isValid = Pl;
l.lang = ta;
l.locale = ea;
l.localeData = ra;
l.max = Pu;
l.min = Fu;
l.parsingFlags = Nl;
l.set = ho;
l.startOf = kl;
l.subtract = rl;
l.toArray = Yl;
l.toObject = El;
l.toDate = Rl;
l.toISOString = gl;
l.inspect = wl;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Fl;
l.toString = _l;
l.unix = Tl;
l.valueOf = xl;
l.creationData = Cl;
l.eraName = Il;
l.eraNarrow = $l;
l.eraAbbr = ql;
l.eraYear = jl;
l.year = Un;
l.isLeapYear = Eo;
l.weekYear = Zl;
l.isoWeekYear = Ql;
l.quarter = l.quarters = sd;
l.month = Cn;
l.daysInMonth = To;
l.week = l.weeks = Lo;
l.isoWeek = l.isoWeeks = Uo;
l.weeksInYear = ed;
l.weeksInWeekYear = td;
l.isoWeeksInYear = Xl;
l.isoWeeksInISOWeekYear = Kl;
l.date = oa;
l.day = l.days = Qo;
l.weekday = Xo;
l.isoWeekday = Ko;
l.dayOfYear = nd;
l.hour = l.hours = iu;
l.minute = l.minutes = ad;
l.second = l.seconds = id;
l.millisecond = l.milliseconds = ua;
l.utcOffset = qu;
l.utc = Vu;
l.local = Hu;
l.parseZone = Bu;
l.hasAlignedHourOffset = Gu;
l.isDST = zu;
l.isLocal = Zu;
l.isUtcOffset = Qu;
l.isUtc = Zn;
l.isUTC = Zn;
l.zoneAbbr = ud;
l.zoneName = ld;
l.dates = j(
  "dates accessor is deprecated. Use date instead.",
  oa
);
l.months = j(
  "months accessor is deprecated. Use month instead",
  Cn
);
l.years = j(
  "years accessor is deprecated. Use year instead",
  Un
);
l.zone = j(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ju
);
l.isDSTShifted = j(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ju
);
function dd(e) {
  return k(e * 1e3);
}
function fd() {
  return k.apply(null, arguments).parseZone();
}
function la(e) {
  return e;
}
var b = Gr.prototype;
b.calendar = Zi;
b.longDateFormat = eo;
b.invalidDate = ro;
b.ordinal = ao;
b.preparse = la;
b.postformat = la;
b.relativeTime = oo;
b.pastFuture = uo;
b.set = zi;
b.eras = Ll;
b.erasParse = Ul;
b.erasConvertYear = Wl;
b.erasAbbrRegex = Hl;
b.erasNameRegex = Vl;
b.erasNarrowRegex = Bl;
b.months = Do;
b.monthsShort = ko;
b.monthsParse = xo;
b.monthsRegex = Yo;
b.monthsShortRegex = Ro;
b.week = Po;
b.firstDayOfYear = Co;
b.firstDayOfWeek = Ao;
b.weekdays = Bo;
b.weekdaysMin = zo;
b.weekdaysShort = Go;
b.weekdaysParse = Zo;
b.weekdaysRegex = eu;
b.weekdaysShortRegex = tu;
b.weekdaysMinRegex = ru;
b.isPM = nu;
b.meridiem = ou;
function kt(e, t, r, s) {
  var n = he(), a = K().set(s, t);
  return n[r](a, e);
}
function da(e, t, r) {
  if (fe(e) && (t = e, e = void 0), e = e || "", t != null)
    return kt(e, t, r, "month");
  var s, n = [];
  for (s = 0; s < 12; s++)
    n[s] = kt(e, s, r, "month");
  return n;
}
function ls(e, t, r, s) {
  typeof e == "boolean" ? (fe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, fe(t) && (r = t, t = void 0), t = t || "");
  var n = he(), a = e ? n._week.dow : 0, i, o = [];
  if (r != null)
    return kt(t, (r + a) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = kt(t, (i + a) % 7, s, "day");
  return o;
}
function hd(e, t) {
  return da(e, t, "months");
}
function cd(e, t) {
  return da(e, t, "monthsShort");
}
function md(e, t, r) {
  return ls(e, t, r, "weekdays");
}
function yd(e, t, r) {
  return ls(e, t, r, "weekdaysShort");
}
function pd(e, t, r) {
  return ls(e, t, r, "weekdaysMin");
}
_e("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = g(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
d.lang = j(
  "moment.lang is deprecated. Use moment.locale instead.",
  _e
);
d.langData = j(
  "moment.langData is deprecated. Use moment.localeData instead.",
  he
);
var te = Math.abs;
function _d() {
  var e = this._data;
  return this._milliseconds = te(this._milliseconds), this._days = te(this._days), this._months = te(this._months), e.milliseconds = te(e.milliseconds), e.seconds = te(e.seconds), e.minutes = te(e.minutes), e.hours = te(e.hours), e.months = te(e.months), e.years = te(e.years), this;
}
function fa(e, t, r, s) {
  var n = J(t, r);
  return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
}
function gd(e, t) {
  return fa(this, e, t, 1);
}
function wd(e, t) {
  return fa(this, e, t, -1);
}
function Gs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function vd() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, n, a, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Gs(Dr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, n = q(e / 1e3), s.seconds = n % 60, a = q(n / 60), s.minutes = a % 60, i = q(a / 60), s.hours = i % 24, t += q(i / 24), u = q(ha(t)), r += u, t -= Gs(Dr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function ha(e) {
  return e * 4800 / 146097;
}
function Dr(e) {
  return e * 146097 / 4800;
}
function Sd(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = V(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + ha(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Dr(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function bd() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + g(this._months / 12) * 31536e6 : NaN;
}
function ce(e) {
  return function() {
    return this.as(e);
  };
}
var Od = ce("ms"), Dd = ce("s"), kd = ce("m"), Md = ce("h"), xd = ce("d"), Td = ce("w"), Rd = ce("M"), Yd = ce("Q"), Ed = ce("y");
function Fd() {
  return J(this);
}
function Pd(e) {
  return e = V(e), this.isValid() ? this[e + "s"]() : NaN;
}
function De(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Nd = De("milliseconds"), Ad = De("seconds"), Cd = De("minutes"), Ld = De("hours"), Ud = De("days"), Wd = De("months"), Id = De("years");
function $d() {
  return q(this.days() / 7);
}
var re = Math.round, Fe = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function qd(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function jd(e, t, r, s) {
  var n = J(e).abs(), a = re(n.as("s")), i = re(n.as("m")), o = re(n.as("h")), u = re(n.as("d")), c = re(n.as("M")), m = re(n.as("w")), w = re(n.as("y")), h = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (h = h || m <= 1 && ["w"] || m < r.w && ["ww", m]), h = h || c <= 1 && ["M"] || c < r.M && ["MM", c] || w <= 1 && ["y"] || ["yy", w], h[2] = t, h[3] = +e > 0, h[4] = s, qd.apply(null, h);
}
function Vd(e) {
  return e === void 0 ? re : typeof e == "function" ? (re = e, !0) : !1;
}
function Hd(e, t) {
  return Fe[e] === void 0 ? !1 : t === void 0 ? Fe[e] : (Fe[e] = t, e === "s" && (Fe.ss = t - 1), !0);
}
function Bd(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Fe, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Fe, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), n = this.localeData(), a = jd(this, !r, s, n), r && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var fr = Math.abs;
function Ye(e) {
  return (e > 0) - (e < 0) || +e;
}
function qt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = fr(this._milliseconds) / 1e3, t = fr(this._days), r = fr(this._months), s, n, a, i, o = this.asSeconds(), u, c, m, w;
  return o ? (s = q(e / 60), n = q(s / 60), e %= 60, s %= 60, a = q(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", c = Ye(this._months) !== Ye(o) ? "-" : "", m = Ye(this._days) !== Ye(o) ? "-" : "", w = Ye(this._milliseconds) !== Ye(o) ? "-" : "", u + "P" + (a ? c + a + "Y" : "") + (r ? c + r + "M" : "") + (t ? m + t + "D" : "") + (n || s || e ? "T" : "") + (n ? w + n + "H" : "") + (s ? w + s + "M" : "") + (e ? w + i + "S" : "")) : "P0D";
}
var v = It.prototype;
v.isValid = Uu;
v.abs = _d;
v.add = gd;
v.subtract = wd;
v.as = Sd;
v.asMilliseconds = Od;
v.asSeconds = Dd;
v.asMinutes = kd;
v.asHours = Md;
v.asDays = xd;
v.asWeeks = Td;
v.asMonths = Rd;
v.asQuarters = Yd;
v.asYears = Ed;
v.valueOf = bd;
v._bubble = vd;
v.clone = Fd;
v.get = Pd;
v.milliseconds = Nd;
v.seconds = Ad;
v.minutes = Cd;
v.hours = Ld;
v.days = Ud;
v.weeks = $d;
v.months = Wd;
v.years = Id;
v.humanize = Bd;
v.toISOString = qt;
v.toString = qt;
v.toJSON = qt;
v.locale = ea;
v.localeData = ra;
v.toIsoString = j(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  qt
);
v.lang = ta;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", Ct);
f("X", mo);
D("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
D("x", function(e, t, r) {
  r._d = new Date(g(e));
});
//! moment.js
d.version = "2.29.4";
Bi(k);
d.fn = l;
d.min = Nu;
d.max = Au;
d.now = Cu;
d.utc = K;
d.unix = dd;
d.months = hd;
d.isDate = st;
d.locale = _e;
d.invalid = Et;
d.duration = J;
d.isMoment = z;
d.weekdays = md;
d.parseZone = fd;
d.localeData = he;
d.isDuration = mt;
d.monthsShort = cd;
d.weekdaysMin = pd;
d.defineLocale = ts;
d.updateLocale = fu;
d.locales = hu;
d.weekdaysShort = yd;
d.normalizeUnits = V;
d.relativeTimeRounding = Vd;
d.relativeTimeThreshold = Hd;
d.calendarFormat = ol;
d.prototype = l;
d.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
const Gd = {
  name: "WyxosDatepicker",
  props: {
    modelValue: {
      required: !0,
      type: [null, String]
    },
    displayFormat: {
      type: String,
      default: "DD/MM/YYYY"
    },
    submitFormat: {
      type: String,
      default: "YYYY-MM-DD"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      query: null
    };
  },
  mounted() {
    this.modelValue && (this.query = d(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(e) {
      return e ? d(e).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit(
        "update:modelValue",
        this.query ? d(this.query).format(this.submitFormat) : null
      );
    }
  }
};
function zd(e, t, r, s, n, a) {
  const i = de("o-datepicker");
  return Q(), We(i, {
    modelValue: n.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => n.query = o),
      a.updateQuery
    ],
    "date-formatter": a.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const kr = /* @__PURE__ */ ge(Gd, [["render", zd]]), Jd = {
  name: "WyxosForm",
  props: {
    form: {
      type: hn,
      required: !0
    }
  },
  emits: ["submit"]
}, Zd = /* @__PURE__ */ Ke(" An error occurred. Try again? ");
function Qd(e, t, r, s, n, a) {
  const i = de("o-loading"), o = de("o-button");
  return Q(), _t("div", null, [
    r.form.isLoaded ? (Q(), _t("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = va((u) => e.$emit("submit"), ["prevent"]))
    }, [
      pt(e.$slots, "default")
    ], 32)) : Je("", !0),
    gt(i, {
      active: r.form.isLoading
    }, null, 8, ["active"]),
    r.form.isFailure ? (Q(), We(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: Pe(() => [
        Zd
      ]),
      _: 1
    })) : Je("", !0)
  ]);
}
const Mr = /* @__PURE__ */ ge(Jd, [["render", Qd]]), Xd = {
  name: "WyxosImage",
  props: {
    src: {
      type: [File, String],
      required: !0
    },
    resize: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      return typeof this.src == "object" ? this.loadFile() : this.loadPath();
    },
    loadFile() {
      const e = new FileReader();
      e.onload = (t) => {
        const r = t.target.result;
        this.$refs.image.src = r, this.width = this.resize ? this.resize.width : r.width, this.height = this.resize ? this.resize.height : r.height;
      }, e.readAsDataURL(this.src);
    },
    loadPath() {
      const e = new Image();
      e.onload = () => {
        this.$refs.image.src = this.src, this.width = this.resize ? this.resize.width : e.width, this.height = this.resize ? this.resize.height : e.height;
      }, e.src = this.src;
    }
  }
}, Kd = ["width", "height"];
function ef(e, t, r, s, n, a) {
  return Q(), _t("img", {
    ref: "image",
    src: "",
    alt: "",
    width: n.width,
    height: n.height
  }, null, 8, Kd);
}
const xr = /* @__PURE__ */ ge(Xd, [["render", ef]]), tf = {
  name: "WyxosInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: !0
    },
    bag: {
      type: String,
      default: () => "default"
    }
  },
  setup() {
    return {
      errors: Ir()
    };
  },
  computed: {
    inputAttrs() {
      const e = this.$attrs;
      return Object.keys(e).forEach((t) => {
        ["class"].includes(t) || e[t];
      }), e;
    }
  }
};
function rf(e, t, r, s, n, a) {
  const i = de("o-input"), o = de("o-field");
  return Q(), We(o, hr({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: Pe(() => [
      gt(i, hr(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => s.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const Tr = /* @__PURE__ */ ge(tf, [["render", rf]]), sf = {
  name: "WyxosTags",
  props: {
    path: {
      type: String,
      required: !0
    },
    modelValue: {
      type: Array,
      required: !0
    },
    formatter: {
      type: Function,
      required: !0
    },
    excludeFormatter: {
      type: Function,
      default: null
    },
    restoreFormatter: {
      type: Function,
      default: (e) => e
    },
    payloadFormatter: {
      type: Function,
      default: (e) => e
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      search: Yt.create()
    };
  },
  data() {
    return {
      query: []
    };
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result: e } = await this.search.restore(
        this.path,
        this.restoreFormatter({
          values: this.modelValue
        })
      );
      this.query = e, this.$emit(
        "update:modelValue",
        this.query.map((t) => this.formatter(t))
      );
    }
  },
  methods: {
    searchTags(e) {
      return this.search.customSearch(
        {
          url: this.path,
          payload: this.payloadFormatter({
            value: e,
            exclude: this.query.map((t) => t.id)
          })
        }
      );
    },
    addedTag() {
      const e = this.query.map((t) => this.formatter(t));
      this.$emit("update:modelValue", e);
    },
    removedTag() {
      const e = this.query.map((t) => this.formatter(t));
      this.$emit("update:modelValue", e);
    },
    reset() {
      this.query = [], this.$emit("update:modelValue", this.query);
    },
    addItem() {
      this.$refs.tagInput.addItem();
    }
  }
};
function nf(e, t, r, s, n, a) {
  const i = de("o-inputitems");
  return Q(), We(i, hr({
    icon: "add",
    onIconClick: t[0] || (t[0] = (o) => a.addItem()),
    ref: "tagInput"
  }, e.$attrs, {
    modelValue: n.query,
    "onUpdate:modelValue": t[1] || (t[1] = (o) => n.query = o),
    data: s.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[2] || (t[2] = (o) => a.addedTag(o)),
    onRemove: t[3] || (t[3] = (o) => a.removedTag(o)),
    onFocus: t[4] || (t[4] = (o) => a.searchTags()),
    onTyping: t[5] || (t[5] = (o) => a.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const Rr = /* @__PURE__ */ ge(sf, [["render", nf]]), af = {
  name: "WyxosPrompt",
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    },
    confirmText: {
      type: String
    },
    cancelText: {
      type: String
    },
    loading: {
      type: Boolean
    },
    callback: {
      type: Function
    }
  },
  setup() {
    return {
      state: new ne()
    };
  },
  methods: {
    async proceed() {
      this.callback && (this.state.loading(), await this.callback().catch((e) => {
        throw this.state.failed(), e;
      }), this.state.loaded()), this.$emit("close", { action: !0 });
    }
  }
}, of = { class: "button-group" };
function uf(e, t, r, s, n, a) {
  const i = de("wyxos-button"), o = de("o-modal");
  return Q(), We(o, { active: !0 }, {
    default: Pe(() => [
      Ze("h2", null, ut(r.title), 1),
      Ze("p", null, ut(r.message), 1),
      Ze("div", of, [
        gt(i, {
          "native-type": "button",
          disabled: s.state.isLoading,
          onClick: t[0] || (t[0] = (u) => e.$emit("close", { action: !1 }))
        }, {
          default: Pe(() => [
            Ke(ut(r.cancelText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        gt(i, {
          "native-type": "button",
          loading: s.state.isLoading,
          onClick: t[1] || (t[1] = (u) => a.proceed())
        }, {
          default: Pe(() => [
            Ke(ut(r.confirmText), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ])
    ]),
    _: 1
  });
}
const Yr = /* @__PURE__ */ ge(af, [["render", uf]]);
class ds {
  constructor() {
    O(this, "state", Er(!1));
  }
  show() {
    this.state.value = !0;
  }
  get isVisible() {
    return this.state.value;
  }
  hide() {
    this.state.value = !1;
  }
  static create() {
    return new ds();
  }
}
class fs {
  constructor(t) {
    O(this, "active", Er(null));
    O(this, "callbacks", {});
    this.active.value = t;
  }
  isActive(t) {
    return this.active.value === t;
  }
  onChange(t) {
    this.callbacks = t;
  }
  activeClass(t, r) {
    return {
      class: this.isActive(t) ? r : []
    };
  }
  activate(t) {
    this.active.value = t, this.callbacks[t] && this.callbacks[t]();
  }
  static create(t) {
    return new fs(t);
  }
}
const lf = (e) => {
  e.component(pr.name, pr), e.component(_r.name, _r), e.component(kr.name, kr), e.component(Mr.name, Mr), e.component(xr.name, xr), e.component(Tr.name, Tr), e.component(Yr.name, Yr), e.component(Rr.name, Rr);
}, hf = {
  Search: Yt,
  FormBuilder: hn,
  ResourceList: xi,
  Listing: jr,
  LoadState: ne,
  Modal: ds,
  Tab: fs,
  useFormErrors: Ir,
  WyxosButton: pr,
  WyxosCollection: _r,
  WyxosDatepicker: kr,
  WyxosForm: Mr,
  WyxosImage: xr,
  WyxosInput: Tr,
  WyxosTags: Rr,
  WyxosPrompt: Yr,
  install: lf
};
export {
  hn as FormBuilder,
  jr as Listing,
  ne as LoadState,
  ds as Modal,
  xi as ResourceList,
  Yt as Search,
  fs as Tab,
  pr as WyxosButton,
  _r as WyxosCollection,
  kr as WyxosDatepicker,
  Mr as WyxosForm,
  xr as WyxosImage,
  Tr as WyxosInput,
  Yr as WyxosPrompt,
  Rr as WyxosTags,
  hf as default,
  lf as install,
  Ir as useFormErrors
};
