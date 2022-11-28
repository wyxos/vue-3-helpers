var Aa = Object.defineProperty;
var La = (e, t, r) => t in e ? Aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => (La(e, typeof t != "symbol" ? t + "" : t, r), r);
import { ref as Re, reactive as ce, resolveComponent as ge, openBlock as ae, createBlock as Xe, withCtx as cr, renderSlot as dt, createCommentVNode as Be, createElementBlock as ft, createTextVNode as mr, normalizeProps as Wa, guardReactiveProps as Ua, createElementVNode as zr, withModifiers as Ia, createVNode as Ds, mergeProps as ar } from "vue";
function qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ks = { exports: {} }, yr = { exports: {} }, bs = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), n = 0; n < a.length; n++)
      a[n] = arguments[n];
    return t.apply(r, a);
  };
}, $a = bs, _r = Object.prototype.toString, pr = function(e) {
  return function(t) {
    var r = _r.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function we(e) {
  return e = e.toLowerCase(), function(r) {
    return pr(r) === e;
  };
}
function vr(e) {
  return Array.isArray(e);
}
function ht(e) {
  return typeof e > "u";
}
function Va(e) {
  return e !== null && !ht(e) && e.constructor !== null && !ht(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ms = we("ArrayBuffer");
function Ha(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ms(e.buffer), t;
}
function ja(e) {
  return typeof e == "string";
}
function Ba(e) {
  return typeof e == "number";
}
function Ys(e) {
  return e !== null && typeof e == "object";
}
function nt(e) {
  if (pr(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Ga = we("Date"), za = we("File"), Za = we("Blob"), Ja = we("FileList");
function gr(e) {
  return _r.call(e) === "[object Function]";
}
function Qa(e) {
  return Ys(e) && gr(e.pipe);
}
function Xa(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || _r.call(e) === t || gr(e.toString) && e.toString() === t);
}
var Ka = we("URLSearchParams");
function en(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function tn() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function wr(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), vr(e))
      for (var r = 0, s = e.length; r < s; r++)
        t.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
}
function nr() {
  var e = {};
  function t(a, n) {
    nt(e[n]) && nt(a) ? e[n] = nr(e[n], a) : nt(a) ? e[n] = nr({}, a) : vr(a) ? e[n] = a.slice() : e[n] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    wr(arguments[r], t);
  return e;
}
function rn(e, t, r) {
  return wr(t, function(a, n) {
    r && typeof a == "function" ? e[n] = $a(a, r) : e[n] = a;
  }), e;
}
function sn(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function an(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function nn(e, t, r) {
  var s, a, n, i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      n = s[a], i[n] || (t[n] = e[n], i[n] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function on(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function un(e) {
  if (!e)
    return null;
  var t = e.length;
  if (ht(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var ln = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), E = {
  isArray: vr,
  isArrayBuffer: Ms,
  isBuffer: Va,
  isFormData: Xa,
  isArrayBufferView: Ha,
  isString: ja,
  isNumber: Ba,
  isObject: Ys,
  isPlainObject: nt,
  isUndefined: ht,
  isDate: Ga,
  isFile: za,
  isBlob: Za,
  isFunction: gr,
  isStream: Qa,
  isURLSearchParams: Ka,
  isStandardBrowserEnv: tn,
  forEach: wr,
  merge: nr,
  extend: rn,
  trim: en,
  stripBOM: sn,
  inherits: an,
  toFlatObject: nn,
  kindOf: pr,
  kindOfTest: we,
  endsWith: on,
  toArray: un,
  isTypedArray: ln,
  isFileList: Ja
}, Me = E;
function Zr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ts = function(t, r, s) {
  if (!r)
    return t;
  var a;
  if (s)
    a = s(r);
  else if (Me.isURLSearchParams(r))
    a = r.toString();
  else {
    var n = [];
    Me.forEach(r, function(u, c) {
      u === null || typeof u > "u" || (Me.isArray(u) ? c = c + "[]" : u = [u], Me.forEach(u, function(g) {
        Me.isDate(g) ? g = g.toISOString() : Me.isObject(g) && (g = JSON.stringify(g)), n.push(Zr(c) + "=" + Zr(g));
      }));
    }), a = n.join("&");
  }
  if (a) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, dn = E;
function gt() {
  this.handlers = [];
}
gt.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
gt.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
gt.prototype.forEach = function(t) {
  dn.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var fn = gt, hn = E, cn = function(t, r) {
  hn.forEach(t, function(a, n) {
    n !== r && n.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[n]);
  });
}, xs = E;
function Ce(e, t, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
xs.inherits(Ce, Error, {
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
var Rs = Ce.prototype, Es = {};
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
  Es[e] = { value: e };
});
Object.defineProperties(Ce, Es);
Object.defineProperty(Rs, "isAxiosError", { value: !0 });
Ce.from = function(e, t, r, s, a, n) {
  var i = Object.create(Rs);
  return xs.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), Ce.call(i, e.message, t, r, s, a), i.name = e.name, n && Object.assign(i, n), i;
};
var Le = Ce, Ps = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, j = E;
function mn(e, t) {
  t = t || new FormData();
  var r = [];
  function s(n) {
    return n === null ? "" : j.isDate(n) ? n.toISOString() : j.isArrayBuffer(n) || j.isTypedArray(n) ? typeof Blob == "function" ? new Blob([n]) : Buffer.from(n) : n;
  }
  function a(n, i) {
    if (j.isPlainObject(n) || j.isArray(n)) {
      if (r.indexOf(n) !== -1)
        throw Error("Circular reference detected in " + i);
      r.push(n), j.forEach(n, function(u, c) {
        if (!j.isUndefined(u)) {
          var y = i ? i + "." + c : c, g;
          if (u && !i && typeof u == "object") {
            if (j.endsWith(c, "{}"))
              u = JSON.stringify(u);
            else if (j.endsWith(c, "[]") && (g = j.toArray(u))) {
              g.forEach(function(h) {
                !j.isUndefined(h) && t.append(y, s(h));
              });
              return;
            }
          }
          a(u, y);
        }
      }), r.pop();
    } else
      t.append(i, s(n));
  }
  return a(e), t;
}
var Ns = mn, Ut, Jr;
function yn() {
  if (Jr)
    return Ut;
  Jr = 1;
  var e = Le;
  return Ut = function(r, s, a) {
    var n = a.config.validateStatus;
    !a.status || !n || n(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ut;
}
var It, Qr;
function _n() {
  if (Qr)
    return It;
  Qr = 1;
  var e = E;
  return It = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, n, i, o, u) {
        var c = [];
        c.push(s + "=" + encodeURIComponent(a)), e.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), e.isString(i) && c.push("path=" + i), e.isString(o) && c.push("domain=" + o), u === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(s) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
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
  }(), It;
}
var pn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, vn = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, gn = pn, wn = vn, Fs = function(t, r) {
  return t && !gn(r) ? wn(t, r) : r;
}, qt, Xr;
function Sn() {
  if (Xr)
    return qt;
  Xr = 1;
  var e = E, t = [
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
  return qt = function(s) {
    var a = {}, n, i, o;
    return s && e.forEach(s.split(`
`), function(c) {
      if (o = c.indexOf(":"), n = e.trim(c.substr(0, o)).toLowerCase(), i = e.trim(c.substr(o + 1)), n) {
        if (a[n] && t.indexOf(n) >= 0)
          return;
        n === "set-cookie" ? a[n] = (a[n] ? a[n] : []).concat([i]) : a[n] = a[n] ? a[n] + ", " + i : i;
      }
    }), a;
  }, qt;
}
var $t, Kr;
function On() {
  if (Kr)
    return $t;
  Kr = 1;
  var e = E;
  return $t = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function n(i) {
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
    return a = n(window.location.href), function(o) {
      var u = e.isString(o) ? n(o) : o;
      return u.protocol === a.protocol && u.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), $t;
}
var Vt, es;
function wt() {
  if (es)
    return Vt;
  es = 1;
  var e = Le, t = E;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Vt = r, Vt;
}
var Ht, ts;
function Dn() {
  return ts || (ts = 1, Ht = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Ht;
}
var jt, rs;
function ss() {
  if (rs)
    return jt;
  rs = 1;
  var e = E, t = yn(), r = _n(), s = Ts, a = Fs, n = Sn(), i = On(), o = Ps, u = Le, c = wt(), y = Dn();
  return jt = function(h) {
    return new Promise(function(Pa, De) {
      var Ie = h.data, qe = h.headers, $e = h.responseType, ke;
      function jr() {
        h.cancelToken && h.cancelToken.unsubscribe(ke), h.signal && h.signal.removeEventListener("abort", ke);
      }
      e.isFormData(Ie) && e.isStandardBrowserEnv() && delete qe["Content-Type"];
      var _ = new XMLHttpRequest();
      if (h.auth) {
        var Na = h.auth.username || "", Fa = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        qe.Authorization = "Basic " + btoa(Na + ":" + Fa);
      }
      var At = a(h.baseURL, h.url);
      _.open(h.method.toUpperCase(), s(At, h.params, h.paramsSerializer), !0), _.timeout = h.timeout;
      function Br() {
        if (!!_) {
          var H = "getAllResponseHeaders" in _ ? n(_.getAllResponseHeaders()) : null, be = !$e || $e === "text" || $e === "json" ? _.responseText : _.response, ye = {
            data: be,
            status: _.status,
            statusText: _.statusText,
            headers: H,
            config: h,
            request: _
          };
          t(function(Wt) {
            Pa(Wt), jr();
          }, function(Wt) {
            De(Wt), jr();
          }, ye), _ = null;
        }
      }
      if ("onloadend" in _ ? _.onloadend = Br : _.onreadystatechange = function() {
        !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(Br);
      }, _.onabort = function() {
        !_ || (De(new u("Request aborted", u.ECONNABORTED, h, _)), _ = null);
      }, _.onerror = function() {
        De(new u("Network Error", u.ERR_NETWORK, h, _, _)), _ = null;
      }, _.ontimeout = function() {
        var be = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded", ye = h.transitional || o;
        h.timeoutErrorMessage && (be = h.timeoutErrorMessage), De(new u(
          be,
          ye.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          h,
          _
        )), _ = null;
      }, e.isStandardBrowserEnv()) {
        var Gr = (h.withCredentials || i(At)) && h.xsrfCookieName ? r.read(h.xsrfCookieName) : void 0;
        Gr && (qe[h.xsrfHeaderName] = Gr);
      }
      "setRequestHeader" in _ && e.forEach(qe, function(be, ye) {
        typeof Ie > "u" && ye.toLowerCase() === "content-type" ? delete qe[ye] : _.setRequestHeader(ye, be);
      }), e.isUndefined(h.withCredentials) || (_.withCredentials = !!h.withCredentials), $e && $e !== "json" && (_.responseType = h.responseType), typeof h.onDownloadProgress == "function" && _.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (ke = function(H) {
        !_ || (De(!H || H && H.type ? new c() : H), _.abort(), _ = null);
      }, h.cancelToken && h.cancelToken.subscribe(ke), h.signal && (h.signal.aborted ? ke() : h.signal.addEventListener("abort", ke))), Ie || (Ie = null);
      var Lt = y(At);
      if (Lt && ["http", "https", "file"].indexOf(Lt) === -1) {
        De(new u("Unsupported protocol " + Lt + ":", u.ERR_BAD_REQUEST, h));
        return;
      }
      _.send(Ie);
    });
  }, jt;
}
var Bt, as;
function kn() {
  return as || (as = 1, Bt = null), Bt;
}
var R = E, ns = cn, is = Le, bn = Ps, Mn = Ns, Yn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function os(e, t) {
  !R.isUndefined(e) && R.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Tn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ss()), e;
}
function xn(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var St = {
  transitional: bn,
  adapter: Tn(),
  transformRequest: [function(t, r) {
    if (ns(r, "Accept"), ns(r, "Content-Type"), R.isFormData(t) || R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return os(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = R.isObject(t), a = r && r["Content-Type"], n;
    if ((n = R.isFileList(t)) || s && a === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return Mn(n ? { "files[]": t } : t, i && new i());
    } else if (s || a === "application/json")
      return os(r, "application/json"), xn(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || St.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, n = !s && this.responseType === "json";
    if (n || a && R.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (n)
          throw i.name === "SyntaxError" ? is.from(i, is.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: kn()
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
R.forEach(["delete", "get", "head"], function(t) {
  St.headers[t] = {};
});
R.forEach(["post", "put", "patch"], function(t) {
  St.headers[t] = R.merge(Yn);
});
var Sr = St, Rn = E, En = Sr, Pn = function(t, r, s) {
  var a = this || En;
  return Rn.forEach(s, function(i) {
    t = i.call(a, t, r);
  }), t;
}, Gt, us;
function Cs() {
  return us || (us = 1, Gt = function(t) {
    return !!(t && t.__CANCEL__);
  }), Gt;
}
var ls = E, zt = Pn, Nn = Cs(), Fn = Sr, Cn = wt();
function Zt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Cn();
}
var An = function(t) {
  Zt(t), t.headers = t.headers || {}, t.data = zt.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = ls.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), ls.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete t.headers[a];
    }
  );
  var r = t.adapter || Fn.adapter;
  return r(t).then(function(a) {
    return Zt(t), a.data = zt.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return Nn(a) || (Zt(t), a && a.response && (a.response.data = zt.call(
      t,
      a.response.data,
      a.response.headers,
      t.transformResponse
    ))), Promise.reject(a);
  });
}, L = E, As = function(t, r) {
  r = r || {};
  var s = {};
  function a(y, g) {
    return L.isPlainObject(y) && L.isPlainObject(g) ? L.merge(y, g) : L.isPlainObject(g) ? L.merge({}, g) : L.isArray(g) ? g.slice() : g;
  }
  function n(y) {
    if (L.isUndefined(r[y])) {
      if (!L.isUndefined(t[y]))
        return a(void 0, t[y]);
    } else
      return a(t[y], r[y]);
  }
  function i(y) {
    if (!L.isUndefined(r[y]))
      return a(void 0, r[y]);
  }
  function o(y) {
    if (L.isUndefined(r[y])) {
      if (!L.isUndefined(t[y]))
        return a(void 0, t[y]);
    } else
      return a(void 0, r[y]);
  }
  function u(y) {
    if (y in r)
      return a(t[y], r[y]);
    if (y in t)
      return a(void 0, t[y]);
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
  return L.forEach(Object.keys(t).concat(Object.keys(r)), function(g) {
    var h = c[g] || n, I = h(g);
    L.isUndefined(I) && h !== u || (s[g] = I);
  }), s;
}, Jt, ds;
function Ls() {
  return ds || (ds = 1, Jt = {
    version: "0.27.2"
  }), Jt;
}
var Ln = Ls().version, de = Le, Or = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Or[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var fs = {};
Or.transitional = function(t, r, s) {
  function a(n, i) {
    return "[Axios v" + Ln + "] Transitional option '" + n + "'" + i + (s ? ". " + s : "");
  }
  return function(n, i, o) {
    if (t === !1)
      throw new de(
        a(i, " has been removed" + (r ? " in " + r : "")),
        de.ERR_DEPRECATED
      );
    return r && !fs[i] && (fs[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, i, o) : !0;
  };
};
function Wn(e, t, r) {
  if (typeof e != "object")
    throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var n = s[a], i = t[n];
    if (i) {
      var o = e[n], u = o === void 0 || i(o, n, e);
      if (u !== !0)
        throw new de("option " + n + " must be " + u, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new de("Unknown option " + n, de.ERR_BAD_OPTION);
  }
}
var Un = {
  assertOptions: Wn,
  validators: Or
}, Ws = E, In = Ts, hs = fn, cs = An, Ot = As, qn = Fs, Us = Un, Ye = Us.validators;
function Ae(e) {
  this.defaults = e, this.interceptors = {
    request: new hs(),
    response: new hs()
  };
}
Ae.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ot(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Us.assertOptions(s, {
    silentJSONParsing: Ye.transitional(Ye.boolean),
    forcedJSONParsing: Ye.transitional(Ye.boolean),
    clarifyTimeoutError: Ye.transitional(Ye.boolean)
  }, !1);
  var a = [], n = !0;
  this.interceptors.request.forEach(function(I) {
    typeof I.runWhen == "function" && I.runWhen(r) === !1 || (n = n && I.synchronous, a.unshift(I.fulfilled, I.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function(I) {
    i.push(I.fulfilled, I.rejected);
  });
  var o;
  if (!n) {
    var u = [cs, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(i), o = Promise.resolve(r); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var c = r; a.length; ) {
    var y = a.shift(), g = a.shift();
    try {
      c = y(c);
    } catch (h) {
      g(h);
      break;
    }
  }
  try {
    o = cs(c);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; i.length; )
    o = o.then(i.shift(), i.shift());
  return o;
};
Ae.prototype.getUri = function(t) {
  t = Ot(this.defaults, t);
  var r = qn(t.baseURL, t.url);
  return In(r, t.params, t.paramsSerializer);
};
Ws.forEach(["delete", "get", "head", "options"], function(t) {
  Ae.prototype[t] = function(r, s) {
    return this.request(Ot(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
Ws.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(n, i, o) {
      return this.request(Ot(o || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: i
      }));
    };
  }
  Ae.prototype[t] = r(), Ae.prototype[t + "Form"] = r(!0);
});
var $n = Ae, Qt, ms;
function Vn() {
  if (ms)
    return Qt;
  ms = 1;
  var e = wt();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(i) {
      s = i;
    });
    var a = this;
    this.promise.then(function(n) {
      if (!!a._listeners) {
        var i, o = a._listeners.length;
        for (i = 0; i < o; i++)
          a._listeners[i](n);
        a._listeners = null;
      }
    }), this.promise.then = function(n) {
      var i, o = new Promise(function(u) {
        a.subscribe(u), i = u;
      }).then(n);
      return o.cancel = function() {
        a.unsubscribe(i);
      }, o;
    }, r(function(i) {
      a.reason || (a.reason = new e(i), s(a.reason));
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
      var a = this._listeners.indexOf(s);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, t.source = function() {
    var s, a = new t(function(i) {
      s = i;
    });
    return {
      token: a,
      cancel: s
    };
  }, Qt = t, Qt;
}
var Xt, ys;
function Hn() {
  return ys || (ys = 1, Xt = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), Xt;
}
var Kt, _s;
function jn() {
  if (_s)
    return Kt;
  _s = 1;
  var e = E;
  return Kt = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Kt;
}
var ps = E, Bn = bs, it = $n, Gn = As, zn = Sr;
function Is(e) {
  var t = new it(e), r = Bn(it.prototype.request, t);
  return ps.extend(r, it.prototype, t), ps.extend(r, t), r.create = function(a) {
    return Is(Gn(e, a));
  }, r;
}
var A = Is(zn);
A.Axios = it;
A.CanceledError = wt();
A.CancelToken = Vn();
A.isCancel = Cs();
A.VERSION = Ls().version;
A.toFormData = Ns;
A.AxiosError = Le;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = Hn();
A.isAxiosError = jn();
yr.exports = A;
yr.exports.default = A;
(function(e) {
  e.exports = yr.exports;
})(ks);
const ne = /* @__PURE__ */ qa(ks.exports);
class Dt {
  constructor() {
    Y(this, "loading", Re(!1));
    Y(this, "result", Re([]));
  }
  static create() {
    return new Dt();
  }
  async search(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: s } = await ne.post(`${t}/search`, r).catch((a) => {
      throw this.loading.value = !1, a;
    });
    this.result.value = s.result, this.loading.value = !1;
  }
  async restore(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: s } = await ne.post(`${t}/restore`, r).catch((a) => {
      throw this.loading.value = !1, a;
    });
    return this.loading.value = !1, s;
  }
}
const Ve = ce({
  default: []
});
function Dr() {
  return {
    createBag(e) {
      Ve[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (Ve[t] = Object.keys(e.response.data.errors).map((s) => ({
        key: s,
        message: e.response.data.errors[s][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = Ve[t];
      if (!r)
        return {
          message: "",
          variant: ""
        };
      const s = r.find((a) => a.key === e);
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
        const r = Ve[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const s = r.findIndex((a) => a.key === e);
        r.splice(s, 1);
        return;
      }
      Ve[t] = [];
    }
  };
}
class kr {
  constructor(t) {
    Y(this, "loadPath", "");
    Y(this, "submitPath", "");
    Y(this, "bag", "");
    Y(this, "model", ce({}));
    Y(this, "form", ce({}));
    Y(this, "original", ce({}));
    Y(this, "isLoading", Re(!1));
    Y(this, "isLoaded", Re(!0));
    Y(this, "isSubmitting", Re(!1));
    Y(this, "isSubmitted", Re(!1));
    Y(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form);
  }
  static create(t) {
    return new kr(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = Dr(), this.errors.createBag(this.bag);
  }
  setAttributes(t) {
    Object.assign(this.form, t), Object.assign(this.original, t);
  }
  getError(t) {
    return this.errors.get(t, this.bag);
  }
  clearError(t) {
    this.errors.clear(t, this.bag);
  }
  async submit(t, r, s = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const a = r ? r(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: n } = await ne[s.method || "post"](
      t || this.submitPath,
      a,
      s
    ).catch((i) => {
      throw this.isSubmitting.value = !1, this.errors.set(i, this.bag), i;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, n;
  }
  async advancedSubmit(t) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: r } = await Promise.resolve(t(ne, this.form)).catch(
      (s) => {
        throw this.isSubmitting.value = !1, this.errors.set(s, this.bag), s;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, r;
  }
  async load(t, r) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: s } = await ne.get(t || this.loadPath, {
      params: r
    }).catch((a) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, a;
    });
    return this.setAttributes(s.form), s.model && Object.assign(this.model, s.model), this.isLoading.value = !1, this.isLoaded.value = !0, s;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
class Zn {
  constructor() {
    Y(this, "structure", {});
    Y(this, "query", ce({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    Y(this, "params", ce({
      page: 1
    }));
    Y(this, "router", null);
  }
  static create(t, r = {}, s = {}, a) {
    s = Object.assign(
      { base: "/api/admin", route: `${t}.index` },
      s
    );
    const n = s.base, i = {
      route: s.route,
      index: s.index || `${n}/${t}/index`,
      destroy: `${n}/${t}/destroy`
    }, o = new this();
    return o.options = s, o.structure = r, o.params = Object.assign(o.params, r), o.router = a, o.urls = i, o;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: r } = await ne.get(t || this.urls.index, {
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
  async action(t, { row: r, index: s, remove: a, method: n }, i = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...i
    };
    if (n === "delete") {
      const { data: u } = await ne.delete(t, {
        data: o
      }).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await ne.post(t, o).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    }
    if (a) {
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
class Jn {
  constructor() {
    Y(this, "api", null);
    Y(this, "structure", null);
    Y(this, "query", ce({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    Y(this, "params", ce({
      page: 1
    }));
  }
  static create(t, r) {
    const s = new this();
    return s.structure = () => Object.assign({}, t), Object.assign(s.params, t), s.api = ne.create(r.axios || {}), s;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: r } = await this.api.get(t, {
      params: this.params
    }).catch((s) => {
      throw this.query.isLoading = !1, s;
    });
    return this.query.isLoading = !1, this.query.isLoaded = !0, r;
  }
  async load(t) {
    const r = await this.fetch(t, {
      params: this.params
    });
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
  async action(t, { item: { row: r, index: s }, remove: a, method: n }, i = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...i
    };
    if (n === "delete") {
      const { data: u } = await this.api.delete(t, {
        data: o
      }).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await this.api.post(t, o).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    }
    if (a) {
      const u = await this.fetch();
      if (this.query.items.splice(s, 1), !u.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < u.query.items.length && this.query.items.push(u.query.items[u.query.items.length - 1]);
    }
  }
  destroy(t, r, s) {
    return this.action(t, { ...r, remove: !0 }, s);
  }
  openFilter() {
    this.query.isFilterActive = !0;
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(t);
  }
}
const Se = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of t)
    r[s] = a;
  return r;
}, Qn = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, Xn = /* @__PURE__ */ mr("Submit"), Kn = /* @__PURE__ */ mr("Processing..."), ei = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function ti(e, t, r, s, a, n) {
  const i = ge("o-button");
  return ae(), Xe(i, { disabled: r.loading }, {
    default: cr(() => [
      r.loading ? Be("", !0) : dt(e.$slots, "default", { key: 0 }, () => [
        Xn
      ]),
      r.loading ? dt(e.$slots, "loading", { key: 1 }, () => [
        Kn
      ]) : Be("", !0),
      r.loading ? (ae(), ft("i", ei)) : Be("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ri = /* @__PURE__ */ Se(Qn, [["render", ti]]), si = {
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
}, ai = /* @__PURE__ */ zr("ul", null, [
  /* @__PURE__ */ zr("li")
], -1);
function ni(e, t, r, s, a, n) {
  return dt(e.$slots, "default", Wa(Ua({ add: n.add, remove: n.remove, items: a.items })), () => [
    ai
  ]);
}
const ii = /* @__PURE__ */ Se(si, [["render", ni]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var qs;
function d() {
  return qs.apply(null, arguments);
}
function oi(e) {
  qs = e;
}
function G(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ve(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function br(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function C(e) {
  return e === void 0;
}
function oe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ke(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function $s(e, t) {
  var r = [], s, a = e.length;
  for (s = 0; s < a; ++s)
    r.push(t(e[s], s));
  return r;
}
function fe(e, t) {
  for (var r in t)
    S(t, r) && (e[r] = t[r]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function X(e, t, r, s) {
  return ha(e, t, r, s, !0).utc();
}
function ui() {
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
function p(e) {
  return e._pf == null && (e._pf = ui()), e._pf;
}
var ir;
Array.prototype.some ? ir = Array.prototype.some : ir = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function Mr(e) {
  if (e._isValid == null) {
    var t = p(e), r = ir.call(t.parsedDateParts, function(a) {
      return a != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function kt(e) {
  var t = X(NaN);
  return e != null ? fe(p(t), e) : p(t).userInvalidated = !0, t;
}
var vs = d.momentProperties = [], er = !1;
function Yr(e, t) {
  var r, s, a, n = vs.length;
  if (C(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), C(t._i) || (e._i = t._i), C(t._f) || (e._f = t._f), C(t._l) || (e._l = t._l), C(t._strict) || (e._strict = t._strict), C(t._tzm) || (e._tzm = t._tzm), C(t._isUTC) || (e._isUTC = t._isUTC), C(t._offset) || (e._offset = t._offset), C(t._pf) || (e._pf = p(t)), C(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      s = vs[r], a = t[s], C(a) || (e[s] = a);
  return e;
}
function et(e) {
  Yr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), er === !1 && (er = !0, d.updateOffset(this), er = !1);
}
function z(e) {
  return e instanceof et || e != null && e._isAMomentObject != null;
}
function Vs(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function $(e, t) {
  var r = !0;
  return fe(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), r) {
      var s = [], a, n, i, o = arguments.length;
      for (n = 0; n < o; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        s.push(a);
      }
      Vs(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var gs = {};
function Hs(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), gs[e] || (Vs(t), gs[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function K(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function li(e) {
  var t, r;
  for (r in e)
    S(e, r) && (t = e[r], K(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function or(e, t) {
  var r = fe({}, e), s;
  for (s in t)
    S(t, s) && (ve(e[s]) && ve(t[s]) ? (r[s] = {}, fe(r[s], e[s]), fe(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    S(e, s) && !S(t, s) && ve(e[s]) && (r[s] = fe({}, r[s]));
  return r;
}
function Tr(e) {
  e != null && this.set(e);
}
var ur;
Object.keys ? ur = Object.keys : ur = function(e) {
  var t, r = [];
  for (t in e)
    S(e, t) && r.push(t);
  return r;
};
var di = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function fi(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return K(s) ? s.call(t, r) : s;
}
function Q(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var xr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, st = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, tr = {}, Pe = {};
function m(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Pe[e] = a), t && (Pe[t[0]] = function() {
    return Q(a.apply(this, arguments), t[1], t[2]);
  }), r && (Pe[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function hi(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ci(e) {
  var t = e.match(xr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Pe[t[r]] ? t[r] = Pe[t[r]] : t[r] = hi(t[r]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < s; i++)
      n += K(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function ot(e, t) {
  return e.isValid() ? (t = js(t, e.localeData()), tr[t] = tr[t] || ci(t), tr[t](e)) : e.localeData().invalidDate();
}
function js(e, t) {
  var r = 5;
  function s(a) {
    return t.longDateFormat(a) || a;
  }
  for (st.lastIndex = 0; r >= 0 && st.test(e); )
    e = e.replace(
      st,
      s
    ), st.lastIndex = 0, r -= 1;
  return e;
}
var mi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function yi(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(xr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var _i = "Invalid date";
function pi() {
  return this._invalidDate;
}
var vi = "%d", gi = /\d{1,2}/;
function wi(e) {
  return this._ordinal.replace("%d", e);
}
var Si = {
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
function Oi(e, t, r, s) {
  var a = this._relativeTime[r];
  return K(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function Di(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return K(r) ? r(t) : r.replace(/%s/i, t);
}
var Ge = {};
function N(e, t) {
  var r = e.toLowerCase();
  Ge[r] = Ge[r + "s"] = Ge[t] = e;
}
function V(e) {
  return typeof e == "string" ? Ge[e] || Ge[e.toLowerCase()] : void 0;
}
function Rr(e) {
  var t = {}, r, s;
  for (s in e)
    S(e, s) && (r = V(s), r && (t[r] = e[s]));
  return t;
}
var Bs = {};
function F(e, t) {
  Bs[e] = t;
}
function ki(e) {
  var t = [], r;
  for (r in e)
    S(e, r) && t.push({ unit: r, priority: Bs[r] });
  return t.sort(function(s, a) {
    return s.priority - a.priority;
  }), t;
}
function bt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = q(t)), r;
}
function We(e, t) {
  return function(r) {
    return r != null ? (Gs(this, e, r), d.updateOffset(this, t), this) : ct(this, e);
  };
}
function ct(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Gs(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && bt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Et(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function bi(e) {
  return e = V(e), K(this[e]) ? this[e]() : this;
}
function Mi(e, t) {
  if (typeof e == "object") {
    e = Rr(e);
    var r = ki(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = V(e), K(this[e]))
    return this[e](t);
  return this;
}
var zs = /\d/, U = /\d\d/, Zs = /\d{3}/, Er = /\d{4}/, Mt = /[+-]?\d{6}/, b = /\d\d?/, Js = /\d\d\d\d?/, Qs = /\d\d\d\d\d\d?/, Yt = /\d{1,3}/, Pr = /\d{1,4}/, Tt = /[+-]?\d{1,6}/, Ue = /\d+/, xt = /[+-]?\d+/, Yi = /Z|[+-]\d\d:?\d\d/gi, Rt = /Z|[+-]\d\d(?::?\d\d)?/gi, Ti = /[+-]?\d+(\.\d{1,3})?/, tt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, mt;
mt = {};
function f(e, t, r) {
  mt[e] = K(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function xi(e, t) {
  return S(mt, e) ? mt[e](t._strict, t._locale) : new RegExp(Ri(e));
}
function Ri(e) {
  return W(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, a, n) {
        return r || s || a || n;
      }
    )
  );
}
function W(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var lr = {};
function D(e, t) {
  var r, s = t, a;
  for (typeof e == "string" && (e = [e]), oe(t) && (s = function(n, i) {
    i[t] = v(n);
  }), a = e.length, r = 0; r < a; r++)
    lr[e[r]] = s;
}
function rt(e, t) {
  D(e, function(r, s, a, n) {
    a._w = a._w || {}, t(r, a._w, a, n);
  });
}
function Ei(e, t, r) {
  t != null && S(lr, e) && lr[e](t, r._a, r, e);
}
var P = 0, re = 1, J = 2, x = 3, B = 4, se = 5, pe = 6, Pi = 7, Ni = 8;
function Fi(e, t) {
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
function Et(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Fi(t, 12);
  return e += (t - r) / 12, r === 1 ? bt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
m("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
m("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
m("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
N("month", "M");
F("month", 8);
f("M", b);
f("MM", b, U);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
D(["M", "MM"], function(e, t) {
  t[re] = v(e) - 1;
});
D(["MMM", "MMMM"], function(e, t, r, s) {
  var a = r._locale.monthsParse(e, s, r._strict);
  a != null ? t[re] = a : p(r).invalidMonth = e;
});
var Ci = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Xs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ks = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ai = tt, Li = tt;
function Wi(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ks).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function Ui(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ks.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ii(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      n = X([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function qi(e, t, r) {
  var s, a, n;
  if (this._monthsParseExact)
    return Ii.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (a = X([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(n.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function ea(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !oe(t))
      return e;
  }
  return r = Math.min(e.date(), Et(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function ta(e) {
  return e != null ? (ea(this, e), d.updateOffset(this, !0), this) : ct(this, "Month");
}
function $i() {
  return Et(this.year(), this.month());
}
function Vi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || ra.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Ai), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Hi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || ra.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Li), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ra() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], s = [], a, n;
  for (a = 0; a < 12; a++)
    n = X([2e3, a]), t.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
  for (t.sort(e), r.sort(e), s.sort(e), a = 0; a < 12; a++)
    t[a] = W(t[a]), r[a] = W(r[a]);
  for (a = 0; a < 24; a++)
    s[a] = W(s[a]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
m("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Q(e, 4) : "+" + e;
});
m(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
m(0, ["YYYY", 4], 0, "year");
m(0, ["YYYYY", 5], 0, "year");
m(0, ["YYYYYY", 6, !0], 0, "year");
N("year", "y");
F("year", 1);
f("Y", xt);
f("YY", b, U);
f("YYYY", Pr, Er);
f("YYYYY", Tt, Mt);
f("YYYYYY", Tt, Mt);
D(["YYYYY", "YYYYYY"], P);
D("YYYY", function(e, t) {
  t[P] = e.length === 2 ? d.parseTwoDigitYear(e) : v(e);
});
D("YY", function(e, t) {
  t[P] = d.parseTwoDigitYear(e);
});
D("Y", function(e, t) {
  t[P] = parseInt(e, 10);
});
function ze(e) {
  return bt(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var sa = We("FullYear", !0);
function ji() {
  return bt(this.year());
}
function Bi(e, t, r, s, a, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, a, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, a, n, i), o;
}
function Ze(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function yt(e, t, r) {
  var s = 7 + t - r, a = (7 + Ze(e, 0, s).getUTCDay() - t) % 7;
  return -a + s - 1;
}
function aa(e, t, r, s, a) {
  var n = (7 + r - s) % 7, i = yt(e, s, a), o = 1 + 7 * (t - 1) + n + i, u, c;
  return o <= 0 ? (u = e - 1, c = ze(u) + o) : o > ze(e) ? (u = e + 1, c = o - ze(e)) : (u = e, c = o), {
    year: u,
    dayOfYear: c
  };
}
function Je(e, t, r) {
  var s = yt(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + ie(i, t, r)) : a > ie(e.year(), t, r) ? (n = a - ie(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function ie(e, t, r) {
  var s = yt(e, t, r), a = yt(e + 1, t, r);
  return (ze(e) - s + a) / 7;
}
m("w", ["ww", 2], "wo", "week");
m("W", ["WW", 2], "Wo", "isoWeek");
N("week", "w");
N("isoWeek", "W");
F("week", 5);
F("isoWeek", 5);
f("w", b);
f("ww", b, U);
f("W", b);
f("WW", b, U);
rt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = v(e);
  }
);
function Gi(e) {
  return Je(e, this._week.dow, this._week.doy).week;
}
var zi = {
  dow: 0,
  doy: 6
};
function Zi() {
  return this._week.dow;
}
function Ji() {
  return this._week.doy;
}
function Qi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Xi(e) {
  var t = Je(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
m("d", 0, "do", "day");
m("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
m("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
m("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
m("e", 0, 0, "weekday");
m("E", 0, 0, "isoWeekday");
N("day", "d");
N("weekday", "e");
N("isoWeekday", "E");
F("day", 11);
F("weekday", 11);
F("isoWeekday", 11);
f("d", b);
f("e", b);
f("E", b);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
rt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var a = r._locale.weekdaysParse(e, s, r._strict);
  a != null ? t.d = a : p(r).invalidWeekday = e;
});
rt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = v(e);
});
function Ki(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function eo(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Nr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var to = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), na = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ro = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), so = tt, ao = tt, no = tt;
function io(e, t) {
  var r = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Nr(r, this._week.dow) : e ? r[e.day()] : r;
}
function oo(e) {
  return e === !0 ? Nr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function uo(e) {
  return e === !0 ? Nr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function lo(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      n = X([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = T.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = T.call(this._weekdaysParse, i), a !== -1 || (a = T.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, i), a !== -1 || (a = T.call(this._weekdaysParse, i), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = T.call(this._minWeekdaysParse, i), a !== -1 || (a = T.call(this._weekdaysParse, i), a !== -1) ? a : (a = T.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function fo(e, t, r) {
  var s, a, n;
  if (this._weekdaysParseExact)
    return lo.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (a = X([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[s] = new RegExp(n.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function ho(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ki(e, this.localeData()), this.add(e - t, "d")) : t;
}
function co(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function mo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = eo(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function yo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = so), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function _o(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ao), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function po(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = no), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Fr() {
  function e(y, g) {
    return g.length - y.length;
  }
  var t = [], r = [], s = [], a = [], n, i, o, u, c;
  for (n = 0; n < 7; n++)
    i = X([2e3, 1]).day(n), o = W(this.weekdaysMin(i, "")), u = W(this.weekdaysShort(i, "")), c = W(this.weekdays(i, "")), t.push(o), r.push(u), s.push(c), a.push(o), a.push(u), a.push(c);
  t.sort(e), r.sort(e), s.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function Cr() {
  return this.hours() % 12 || 12;
}
function vo() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Cr);
m("k", ["kk", 2], 0, vo);
m("hmm", 0, 0, function() {
  return "" + Cr.apply(this) + Q(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Cr.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
});
m("Hmm", 0, 0, function() {
  return "" + this.hours() + Q(this.minutes(), 2);
});
m("Hmmss", 0, 0, function() {
  return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
});
function ia(e, t) {
  m(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ia("a", !0);
ia("A", !1);
N("hour", "h");
F("hour", 13);
function oa(e, t) {
  return t._meridiemParse;
}
f("a", oa);
f("A", oa);
f("H", b);
f("h", b);
f("k", b);
f("HH", b, U);
f("hh", b, U);
f("kk", b, U);
f("hmm", Js);
f("hmmss", Qs);
f("Hmm", Js);
f("Hmmss", Qs);
D(["H", "HH"], x);
D(["k", "kk"], function(e, t, r) {
  var s = v(e);
  t[x] = s === 24 ? 0 : s;
});
D(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
D(["h", "hh"], function(e, t, r) {
  t[x] = v(e), p(r).bigHour = !0;
});
D("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s)), p(r).bigHour = !0;
});
D("hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[se] = v(e.substr(a)), p(r).bigHour = !0;
});
D("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s));
});
D("Hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[se] = v(e.substr(a));
});
function go(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var wo = /[ap]\.?m?\.?/i, So = We("Hours", !0);
function Oo(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ua = {
  calendar: di,
  longDateFormat: mi,
  invalidDate: _i,
  ordinal: vi,
  dayOfMonthOrdinalParse: gi,
  relativeTime: Si,
  months: Ci,
  monthsShort: Xs,
  week: zi,
  weekdays: to,
  weekdaysMin: ro,
  weekdaysShort: na,
  meridiemParse: wo
}, M = {}, He = {}, Qe;
function Do(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function ws(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ko(e) {
  for (var t = 0, r, s, a, n; t < e.length; ) {
    for (n = ws(e[t]).split("-"), r = n.length, s = ws(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = Pt(n.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && Do(n, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Qe;
}
function bo(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Pt(e) {
  var t = null, r;
  if (M[e] === void 0 && typeof module < "u" && module && module.exports && bo(e))
    try {
      t = Qe._abbr, r = require, r("./locale/" + e), me(t);
    } catch {
      M[e] = null;
    }
  return M[e];
}
function me(e, t) {
  var r;
  return e && (C(t) ? r = ue(e) : r = Ar(e, t), r ? Qe = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Qe._abbr;
}
function Ar(e, t) {
  if (t !== null) {
    var r, s = ua;
    if (t.abbr = e, M[e] != null)
      Hs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = M[e]._config;
    else if (t.parentLocale != null)
      if (M[t.parentLocale] != null)
        s = M[t.parentLocale]._config;
      else if (r = Pt(t.parentLocale), r != null)
        s = r._config;
      else
        return He[t.parentLocale] || (He[t.parentLocale] = []), He[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return M[e] = new Tr(or(s, t)), He[e] && He[e].forEach(function(a) {
      Ar(a.name, a.config);
    }), me(e), M[e];
  } else
    return delete M[e], null;
}
function Mo(e, t) {
  if (t != null) {
    var r, s, a = ua;
    M[e] != null && M[e].parentLocale != null ? M[e].set(or(M[e]._config, t)) : (s = Pt(e), s != null && (a = s._config), t = or(a, t), s == null && (t.abbr = e), r = new Tr(t), r.parentLocale = M[e], M[e] = r), me(e);
  } else
    M[e] != null && (M[e].parentLocale != null ? (M[e] = M[e].parentLocale, e === me() && me(e)) : M[e] != null && delete M[e]);
  return M[e];
}
function ue(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Qe;
  if (!G(e)) {
    if (t = Pt(e), t)
      return t;
    e = [e];
  }
  return ko(e);
}
function Yo() {
  return ur(M);
}
function Lr(e) {
  var t, r = e._a;
  return r && p(e).overflow === -2 && (t = r[re] < 0 || r[re] > 11 ? re : r[J] < 1 || r[J] > Et(r[P], r[re]) ? J : r[x] < 0 || r[x] > 24 || r[x] === 24 && (r[B] !== 0 || r[se] !== 0 || r[pe] !== 0) ? x : r[B] < 0 || r[B] > 59 ? B : r[se] < 0 || r[se] > 59 ? se : r[pe] < 0 || r[pe] > 999 ? pe : -1, p(e)._overflowDayOfYear && (t < P || t > J) && (t = J), p(e)._overflowWeeks && t === -1 && (t = Pi), p(e)._overflowWeekday && t === -1 && (t = Ni), p(e).overflow = t), e;
}
var To = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, xo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ro = /Z|[+-]\d\d(?::?\d\d)?/, at = [
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
], rr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Eo = /^\/?Date\((-?\d+)/i, Po = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, No = {
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
function la(e) {
  var t, r, s = e._i, a = To.exec(s) || xo.exec(s), n, i, o, u, c = at.length, y = rr.length;
  if (a) {
    for (p(e).iso = !0, t = 0, r = c; t < r; t++)
      if (at[t][1].exec(a[1])) {
        i = at[t][0], n = at[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = y; t < r; t++)
        if (rr[t][1].exec(a[3])) {
          o = (a[2] || " ") + rr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Ro.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), Ur(e);
  } else
    e._isValid = !1;
}
function Fo(e, t, r, s, a, n) {
  var i = [
    Co(e),
    Xs.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Co(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Ao(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Lo(e, t, r) {
  if (e) {
    var s = na.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== a)
      return p(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Wo(e, t, r) {
  if (e)
    return No[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, n = (s - a) / 100;
  return n * 60 + a;
}
function da(e) {
  var t = Po.exec(Ao(e._i)), r;
  if (t) {
    if (r = Fo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Lo(t[1], r, e))
      return;
    e._a = r, e._tzm = Wo(t[8], t[9], t[10]), e._d = Ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Uo(e) {
  var t = Eo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (la(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (da(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = $(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function xe(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function Io(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Wr(e) {
  var t, r, s = [], a, n, i;
  if (!e._d) {
    for (a = Io(e), e._w && e._a[J] == null && e._a[re] == null && qo(e), e._dayOfYear != null && (i = xe(e._a[P], a[P]), (e._dayOfYear > ze(i) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), r = Ze(i, 0, e._dayOfYear), e._a[re] = r.getUTCMonth(), e._a[J] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[x] === 24 && e._a[B] === 0 && e._a[se] === 0 && e._a[pe] === 0 && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Ze : Bi).apply(
      null,
      s
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (p(e).weekdayMismatch = !0);
  }
}
function qo(e) {
  var t, r, s, a, n, i, o, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = xe(
    t.GG,
    e._a[P],
    Je(k(), 1, 4).year
  ), s = xe(t.W, 1), a = xe(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, c = Je(k(), n, i), r = xe(t.gg, e._a[P], c.year), s = xe(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (u = !0)) : a = n), s < 1 || s > ie(r, n, i) ? p(e)._overflowWeeks = !0 : u != null ? p(e)._overflowWeekday = !0 : (o = aa(r, s, a, n, i), e._a[P] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Ur(e) {
  if (e._f === d.ISO_8601) {
    la(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    da(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, r, s, a, n, i, o = t.length, u = 0, c, y;
  for (a = js(e._f, e._locale).match(xr) || [], y = a.length, r = 0; r < y; r++)
    n = a[r], s = (t.match(xi(n, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && p(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Pe[n] ? (s ? p(e).empty = !1 : p(e).unusedTokens.push(n), Ei(n, s, e)) : e._strict && !s && p(e).unusedTokens.push(n);
  p(e).charsLeftOver = o - u, t.length > 0 && p(e).unusedInput.push(t), e._a[x] <= 12 && p(e).bigHour === !0 && e._a[x] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[x] = $o(
    e._locale,
    e._a[x],
    e._meridiem
  ), c = p(e).era, c !== null && (e._a[P] = e._locale.erasConvertYear(c, e._a[P])), Wr(e), Lr(e);
}
function $o(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Vo(e) {
  var t, r, s, a, n, i, o = !1, u = e._f.length;
  if (u === 0) {
    p(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    n = 0, i = !1, t = Yr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ur(t), Mr(t) && (i = !0), n += p(t).charsLeftOver, n += p(t).unusedTokens.length * 10, p(t).score = n, o ? n < s && (s = n, r = t) : (s == null || n < s || i) && (s = n, r = t, i && (o = !0));
  fe(e, r || t);
}
function Ho(e) {
  if (!e._d) {
    var t = Rr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = $s(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), Wr(e);
  }
}
function jo(e) {
  var t = new et(Lr(fa(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function fa(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || ue(e._l), t === null || r === void 0 && t === "" ? kt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new et(Lr(t)) : (Ke(t) ? e._d = t : G(r) ? Vo(e) : r ? Ur(e) : Bo(e), Mr(e) || (e._d = null), e));
}
function Bo(e) {
  var t = e._i;
  C(t) ? e._d = new Date(d.now()) : Ke(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Uo(e) : G(t) ? (e._a = $s(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Wr(e)) : ve(t) ? Ho(e) : oe(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ha(e, t, r, s, a) {
  var n = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (ve(e) && br(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = r, n._i = e, n._f = t, n._strict = s, jo(n);
}
function k(e, t, r, s) {
  return ha(e, t, r, s, !1);
}
var Go = $(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : kt();
  }
), zo = $(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : kt();
  }
);
function ca(e, t) {
  var r, s;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return k();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Zo() {
  var e = [].slice.call(arguments, 0);
  return ca("isBefore", e);
}
function Jo() {
  var e = [].slice.call(arguments, 0);
  return ca("isAfter", e);
}
var Qo = function() {
  return Date.now ? Date.now() : +new Date();
}, je = [
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
function Xo(e) {
  var t, r = !1, s, a = je.length;
  for (t in e)
    if (S(e, t) && !(T.call(je, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < a; ++s)
    if (e[je[s]]) {
      if (r)
        return !1;
      parseFloat(e[je[s]]) !== v(e[je[s]]) && (r = !0);
    }
  return !0;
}
function Ko() {
  return this._isValid;
}
function eu() {
  return Z(NaN);
}
function Nt(e) {
  var t = Rr(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, y = t.millisecond || 0;
  this._isValid = Xo(t), this._milliseconds = +y + c * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = ue(), this._bubble();
}
function ut(e) {
  return e instanceof Nt;
}
function dr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function tu(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && v(e[i]) !== v(t[i])) && n++;
  return n + a;
}
function ma(e, t) {
  m(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + Q(~~(r / 60), 2) + t + Q(~~r % 60, 2);
  });
}
ma("Z", ":");
ma("ZZ", "");
f("Z", Rt);
f("ZZ", Rt);
D(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(Rt, e);
});
var ru = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), s, a, n;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(ru) || ["-", 0, 0], n = +(a[1] * 60) + v(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function qr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (z(e) || Ke(e) ? e.valueOf() : k(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), d.updateOffset(r, !1), r) : k(e).local();
}
function fr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function su(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(Rt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = fr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? pa(
      this,
      Z(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : fr(this);
}
function au(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function nu(e) {
  return this.utcOffset(0, e);
}
function iu(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fr(this), "m")), this;
}
function ou() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(Yi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function uu(e) {
  return this.isValid() ? (e = e ? k(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function lu() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function du() {
  if (!C(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Yr(e, this), e = fa(e), e._a ? (t = e._isUTC ? X(e._a) : k(e._a), this._isDSTShifted = this.isValid() && tu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function fu() {
  return this.isValid() ? !this._isUTC : !1;
}
function hu() {
  return this.isValid() ? this._isUTC : !1;
}
function ya() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var cu = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, mu = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Z(e, t) {
  var r = e, s = null, a, n, i;
  return ut(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : oe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = cu.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: v(s[J]) * a,
    h: v(s[x]) * a,
    m: v(s[B]) * a,
    s: v(s[se]) * a,
    ms: v(dr(s[pe] * 1e3)) * a
  }) : (s = mu.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: _e(s[2], a),
    M: _e(s[3], a),
    w: _e(s[4], a),
    d: _e(s[5], a),
    h: _e(s[6], a),
    m: _e(s[7], a),
    s: _e(s[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = yu(
    k(r.from),
    k(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new Nt(r), ut(e) && S(e, "_locale") && (n._locale = e._locale), ut(e) && S(e, "_isValid") && (n._isValid = e._isValid), n;
}
Z.fn = Nt.prototype;
Z.invalid = eu;
function _e(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Ss(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function yu(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = qr(t, e), e.isBefore(t) ? r = Ss(e, t) : (r = Ss(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function _a(e, t) {
  return function(r, s) {
    var a, n;
    return s !== null && !isNaN(+s) && (Hs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = s, s = n), a = Z(r, s), pa(this, a, e), this;
  };
}
function pa(e, t, r, s) {
  var a = t._milliseconds, n = dr(t._days), i = dr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, i && ea(e, ct(e, "Month") + i * r), n && Gs(e, "Date", ct(e, "Date") + n * r), a && e._d.setTime(e._d.valueOf() + a * r), s && d.updateOffset(e, n || i));
}
var _u = _a(1, "add"), pu = _a(-1, "subtract");
function va(e) {
  return typeof e == "string" || e instanceof String;
}
function vu(e) {
  return z(e) || Ke(e) || va(e) || oe(e) || wu(e) || gu(e) || e === null || e === void 0;
}
function gu(e) {
  var t = ve(e) && !br(e), r = !1, s = [
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
  ], a, n, i = s.length;
  for (a = 0; a < i; a += 1)
    n = s[a], r = r || S(e, n);
  return t && r;
}
function wu(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !oe(s) && va(e);
  }).length === 0), t && r;
}
function Su(e) {
  var t = ve(e) && !br(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < s.length; a += 1)
    n = s[a], r = r || S(e, n);
  return t && r;
}
function Ou(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Du(e, t) {
  arguments.length === 1 && (arguments[0] ? vu(arguments[0]) ? (e = arguments[0], t = void 0) : Su(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || k(), s = qr(r, this).startOf("day"), a = d.calendarFormat(this, s) || "sameElse", n = t && (K(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, k(r))
  );
}
function ku() {
  return new et(this);
}
function bu(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Mu(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Yu(e, t, r, s) {
  var a = z(e) ? e : k(e), n = z(t) ? t : k(t);
  return this.isValid() && a.isValid() && n.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s[1] === ")" ? this.isBefore(n, r) : !this.isAfter(n, r))) : !1;
}
function Tu(e, t) {
  var r = z(e) ? e : k(e), s;
  return this.isValid() && r.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function xu(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Ru(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Eu(e, t, r) {
  var s, a, n;
  if (!this.isValid())
    return NaN;
  if (s = qr(e, this), !s.isValid())
    return NaN;
  switch (a = (s.utcOffset() - this.utcOffset()) * 6e4, t = V(t), t) {
    case "year":
      n = lt(this, s) / 12;
      break;
    case "month":
      n = lt(this, s);
      break;
    case "quarter":
      n = lt(this, s) / 3;
      break;
    case "second":
      n = (this - s) / 1e3;
      break;
    case "minute":
      n = (this - s) / 6e4;
      break;
    case "hour":
      n = (this - s) / 36e5;
      break;
    case "day":
      n = (this - s - a) / 864e5;
      break;
    case "week":
      n = (this - s - a) / 6048e5;
      break;
    default:
      n = this - s;
  }
  return r ? n : q(n);
}
function lt(e, t) {
  if (e.date() < t.date())
    return -lt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), a, n;
  return t - s < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - s) / (s - a)) : (a = e.clone().add(r + 1, "months"), n = (t - s) / (a - s)), -(r + n) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Pu() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Nu(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ot(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : K(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ot(r, "Z")) : ot(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Fu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + s + a + n);
}
function Cu(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = ot(this, e);
  return this.localeData().postformat(t);
}
function Au(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? Z({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Lu(e) {
  return this.from(k(), e);
}
function Wu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? Z({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Uu(e) {
  return this.to(k(), e);
}
function ga(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ue(e), t != null && (this._locale = t), this);
}
var wa = $(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Sa() {
  return this._locale;
}
var _t = 1e3, Ne = 60 * _t, pt = 60 * Ne, Oa = (365 * 400 + 97) * 24 * pt;
function Fe(e, t) {
  return (e % t + t) % t;
}
function Da(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Oa : new Date(e, t, r).valueOf();
}
function ka(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Oa : Date.UTC(e, t, r);
}
function Iu(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ka : Da, e) {
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
      t = this._d.valueOf(), t -= Fe(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        pt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Fe(t, Ne);
      break;
    case "second":
      t = this._d.valueOf(), t -= Fe(t, _t);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function qu(e) {
  var t, r;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ka : Da, e) {
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
      t = this._d.valueOf(), t += pt - Fe(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        pt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ne - Fe(t, Ne) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += _t - Fe(t, _t) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function $u() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Vu() {
  return Math.floor(this.valueOf() / 1e3);
}
function Hu() {
  return new Date(this.valueOf());
}
function ju() {
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
function Bu() {
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
function Gu() {
  return this.isValid() ? this.toISOString() : null;
}
function zu() {
  return Mr(this);
}
function Zu() {
  return fe({}, p(this));
}
function Ju() {
  return p(this).overflow;
}
function Qu() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
m("N", 0, 0, "eraAbbr");
m("NN", 0, 0, "eraAbbr");
m("NNN", 0, 0, "eraAbbr");
m("NNNN", 0, 0, "eraName");
m("NNNNN", 0, 0, "eraNarrow");
m("y", ["y", 1], "yo", "eraYear");
m("y", ["yy", 2], 0, "eraYear");
m("y", ["yyy", 3], 0, "eraYear");
m("y", ["yyyy", 4], 0, "eraYear");
f("N", $r);
f("NN", $r);
f("NNN", $r);
f("NNNN", ul);
f("NNNNN", ll);
D(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var a = r._locale.erasParse(e, s, r._strict);
    a ? p(r).era = a : p(r).invalidEra = e;
  }
);
f("y", Ue);
f("yy", Ue);
f("yyy", Ue);
f("yyyy", Ue);
f("yo", dl);
D(["y", "yy", "yyy", "yyyy"], P);
D(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[P] = r._locale.eraYearOrdinalParse(e, a) : t[P] = parseInt(e, 10);
});
function Xu(e, t) {
  var r, s, a, n = this._eras || ue("en")._eras;
  for (r = 0, s = n.length; r < s; ++r) {
    switch (typeof n[r].since) {
      case "string":
        a = d(n[r].since).startOf("day"), n[r].since = a.valueOf();
        break;
    }
    switch (typeof n[r].until) {
      case "undefined":
        n[r].until = 1 / 0;
        break;
      case "string":
        a = d(n[r].until).startOf("day").valueOf(), n[r].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Ku(e, t, r) {
  var s, a, n = this.eras(), i, o, u;
  for (e = e.toUpperCase(), s = 0, a = n.length; s < a; ++s)
    if (i = n[s].name.toUpperCase(), o = n[s].abbr.toUpperCase(), u = n[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return n[s];
          break;
        case "NNNN":
          if (i === e)
            return n[s];
          break;
        case "NNNNN":
          if (u === e)
            return n[s];
          break;
      }
    else if ([i, o, u].indexOf(e) >= 0)
      return n[s];
}
function el(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * r;
}
function tl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function rl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function sl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function al() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - d(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function nl(e) {
  return S(this, "_erasNameRegex") || Vr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function il(e) {
  return S(this, "_erasAbbrRegex") || Vr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ol(e) {
  return S(this, "_erasNarrowRegex") || Vr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function $r(e, t) {
  return t.erasAbbrRegex(e);
}
function ul(e, t) {
  return t.erasNameRegex(e);
}
function ll(e, t) {
  return t.erasNarrowRegex(e);
}
function dl(e, t) {
  return t._eraYearOrdinalRegex || Ue;
}
function Vr() {
  var e = [], t = [], r = [], s = [], a, n, i = this.eras();
  for (a = 0, n = i.length; a < n; ++a)
    t.push(W(i[a].name)), e.push(W(i[a].abbr)), r.push(W(i[a].narrow)), s.push(W(i[a].name)), s.push(W(i[a].abbr)), s.push(W(i[a].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
m(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
m(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ft(e, t) {
  m(0, [e, e.length], 0, t);
}
Ft("gggg", "weekYear");
Ft("ggggg", "weekYear");
Ft("GGGG", "isoWeekYear");
Ft("GGGGG", "isoWeekYear");
N("weekYear", "gg");
N("isoWeekYear", "GG");
F("weekYear", 1);
F("isoWeekYear", 1);
f("G", xt);
f("g", xt);
f("GG", b, U);
f("gg", b, U);
f("GGGG", Pr, Er);
f("gggg", Pr, Er);
f("GGGGG", Tt, Mt);
f("ggggg", Tt, Mt);
rt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = v(e);
  }
);
rt(["gg", "GG"], function(e, t, r, s) {
  t[s] = d.parseTwoDigitYear(e);
});
function fl(e) {
  return ba.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function hl(e) {
  return ba.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function cl() {
  return ie(this.year(), 1, 4);
}
function ml() {
  return ie(this.isoWeekYear(), 1, 4);
}
function yl() {
  var e = this.localeData()._week;
  return ie(this.year(), e.dow, e.doy);
}
function _l() {
  var e = this.localeData()._week;
  return ie(this.weekYear(), e.dow, e.doy);
}
function ba(e, t, r, s, a) {
  var n;
  return e == null ? Je(this, s, a).year : (n = ie(e, s, a), t > n && (t = n), pl.call(this, e, t, r, s, a));
}
function pl(e, t, r, s, a) {
  var n = aa(e, t, r, s, a), i = Ze(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
m("Q", 0, "Qo", "quarter");
N("quarter", "Q");
F("quarter", 7);
f("Q", zs);
D("Q", function(e, t) {
  t[re] = (v(e) - 1) * 3;
});
function vl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
m("D", ["DD", 2], "Do", "date");
N("date", "D");
F("date", 9);
f("D", b);
f("DD", b, U);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
D(["D", "DD"], J);
D("Do", function(e, t) {
  t[J] = v(e.match(b)[0]);
});
var Ma = We("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
F("dayOfYear", 4);
f("DDD", Yt);
f("DDDD", Zs);
D(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = v(e);
});
function gl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
m("m", ["mm", 2], 0, "minute");
N("minute", "m");
F("minute", 14);
f("m", b);
f("mm", b, U);
D(["m", "mm"], B);
var wl = We("Minutes", !1);
m("s", ["ss", 2], 0, "second");
N("second", "s");
F("second", 15);
f("s", b);
f("ss", b, U);
D(["s", "ss"], se);
var Sl = We("Seconds", !1);
m("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
m(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
m(0, ["SSS", 3], 0, "millisecond");
m(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
m(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
m(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
m(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
m(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
m(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
N("millisecond", "ms");
F("millisecond", 16);
f("S", Yt, zs);
f("SS", Yt, U);
f("SSS", Yt, Zs);
var he, Ya;
for (he = "SSSS"; he.length <= 9; he += "S")
  f(he, Ue);
function Ol(e, t) {
  t[pe] = v(("0." + e) * 1e3);
}
for (he = "S"; he.length <= 9; he += "S")
  D(he, Ol);
Ya = We("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function Dl() {
  return this._isUTC ? "UTC" : "";
}
function kl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = et.prototype;
l.add = _u;
l.calendar = Du;
l.clone = ku;
l.diff = Eu;
l.endOf = qu;
l.format = Cu;
l.from = Au;
l.fromNow = Lu;
l.to = Wu;
l.toNow = Uu;
l.get = bi;
l.invalidAt = Ju;
l.isAfter = bu;
l.isBefore = Mu;
l.isBetween = Yu;
l.isSame = Tu;
l.isSameOrAfter = xu;
l.isSameOrBefore = Ru;
l.isValid = zu;
l.lang = wa;
l.locale = ga;
l.localeData = Sa;
l.max = zo;
l.min = Go;
l.parsingFlags = Zu;
l.set = Mi;
l.startOf = Iu;
l.subtract = pu;
l.toArray = ju;
l.toObject = Bu;
l.toDate = Hu;
l.toISOString = Nu;
l.inspect = Fu;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Gu;
l.toString = Pu;
l.unix = Vu;
l.valueOf = $u;
l.creationData = Qu;
l.eraName = tl;
l.eraNarrow = rl;
l.eraAbbr = sl;
l.eraYear = al;
l.year = sa;
l.isLeapYear = ji;
l.weekYear = fl;
l.isoWeekYear = hl;
l.quarter = l.quarters = vl;
l.month = ta;
l.daysInMonth = $i;
l.week = l.weeks = Qi;
l.isoWeek = l.isoWeeks = Xi;
l.weeksInYear = yl;
l.weeksInWeekYear = _l;
l.isoWeeksInYear = cl;
l.isoWeeksInISOWeekYear = ml;
l.date = Ma;
l.day = l.days = ho;
l.weekday = co;
l.isoWeekday = mo;
l.dayOfYear = gl;
l.hour = l.hours = So;
l.minute = l.minutes = wl;
l.second = l.seconds = Sl;
l.millisecond = l.milliseconds = Ya;
l.utcOffset = su;
l.utc = nu;
l.local = iu;
l.parseZone = ou;
l.hasAlignedHourOffset = uu;
l.isDST = lu;
l.isLocal = fu;
l.isUtcOffset = hu;
l.isUtc = ya;
l.isUTC = ya;
l.zoneAbbr = Dl;
l.zoneName = kl;
l.dates = $(
  "dates accessor is deprecated. Use date instead.",
  Ma
);
l.months = $(
  "months accessor is deprecated. Use month instead",
  ta
);
l.years = $(
  "years accessor is deprecated. Use year instead",
  sa
);
l.zone = $(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  au
);
l.isDSTShifted = $(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  du
);
function bl(e) {
  return k(e * 1e3);
}
function Ml() {
  return k.apply(null, arguments).parseZone();
}
function Ta(e) {
  return e;
}
var O = Tr.prototype;
O.calendar = fi;
O.longDateFormat = yi;
O.invalidDate = pi;
O.ordinal = wi;
O.preparse = Ta;
O.postformat = Ta;
O.relativeTime = Oi;
O.pastFuture = Di;
O.set = li;
O.eras = Xu;
O.erasParse = Ku;
O.erasConvertYear = el;
O.erasAbbrRegex = il;
O.erasNameRegex = nl;
O.erasNarrowRegex = ol;
O.months = Wi;
O.monthsShort = Ui;
O.monthsParse = qi;
O.monthsRegex = Hi;
O.monthsShortRegex = Vi;
O.week = Gi;
O.firstDayOfYear = Ji;
O.firstDayOfWeek = Zi;
O.weekdays = io;
O.weekdaysMin = uo;
O.weekdaysShort = oo;
O.weekdaysParse = fo;
O.weekdaysRegex = yo;
O.weekdaysShortRegex = _o;
O.weekdaysMinRegex = po;
O.isPM = go;
O.meridiem = Oo;
function vt(e, t, r, s) {
  var a = ue(), n = X().set(s, t);
  return a[r](n, e);
}
function xa(e, t, r) {
  if (oe(e) && (t = e, e = void 0), e = e || "", t != null)
    return vt(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = vt(e, s, r, "month");
  return a;
}
function Hr(e, t, r, s) {
  typeof e == "boolean" ? (oe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, oe(t) && (r = t, t = void 0), t = t || "");
  var a = ue(), n = e ? a._week.dow : 0, i, o = [];
  if (r != null)
    return vt(t, (r + n) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = vt(t, (i + n) % 7, s, "day");
  return o;
}
function Yl(e, t) {
  return xa(e, t, "months");
}
function Tl(e, t) {
  return xa(e, t, "monthsShort");
}
function xl(e, t, r) {
  return Hr(e, t, r, "weekdays");
}
function Rl(e, t, r) {
  return Hr(e, t, r, "weekdaysShort");
}
function El(e, t, r) {
  return Hr(e, t, r, "weekdaysMin");
}
me("en", {
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
    var t = e % 10, r = v(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
d.lang = $(
  "moment.lang is deprecated. Use moment.locale instead.",
  me
);
d.langData = $(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ue
);
var ee = Math.abs;
function Pl() {
  var e = this._data;
  return this._milliseconds = ee(this._milliseconds), this._days = ee(this._days), this._months = ee(this._months), e.milliseconds = ee(e.milliseconds), e.seconds = ee(e.seconds), e.minutes = ee(e.minutes), e.hours = ee(e.hours), e.months = ee(e.months), e.years = ee(e.years), this;
}
function Ra(e, t, r, s) {
  var a = Z(t, r);
  return e._milliseconds += s * a._milliseconds, e._days += s * a._days, e._months += s * a._months, e._bubble();
}
function Nl(e, t) {
  return Ra(this, e, t, 1);
}
function Fl(e, t) {
  return Ra(this, e, t, -1);
}
function Os(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Cl() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, n, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Os(hr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = q(e / 1e3), s.seconds = a % 60, n = q(a / 60), s.minutes = n % 60, i = q(n / 60), s.hours = i % 24, t += q(i / 24), u = q(Ea(t)), r += u, t -= Os(hr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function Ea(e) {
  return e * 4800 / 146097;
}
function hr(e) {
  return e * 146097 / 4800;
}
function Al(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = V(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Ea(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(hr(this._months)), e) {
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
function Ll() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function le(e) {
  return function() {
    return this.as(e);
  };
}
var Wl = le("ms"), Ul = le("s"), Il = le("m"), ql = le("h"), $l = le("d"), Vl = le("w"), Hl = le("M"), jl = le("Q"), Bl = le("y");
function Gl() {
  return Z(this);
}
function zl(e) {
  return e = V(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Oe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Zl = Oe("milliseconds"), Jl = Oe("seconds"), Ql = Oe("minutes"), Xl = Oe("hours"), Kl = Oe("days"), ed = Oe("months"), td = Oe("years");
function rd() {
  return q(this.days() / 7);
}
var te = Math.round, Ee = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function sd(e, t, r, s, a) {
  return a.relativeTime(t || 1, !!r, e, s);
}
function ad(e, t, r, s) {
  var a = Z(e).abs(), n = te(a.as("s")), i = te(a.as("m")), o = te(a.as("h")), u = te(a.as("d")), c = te(a.as("M")), y = te(a.as("w")), g = te(a.as("y")), h = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (h = h || y <= 1 && ["w"] || y < r.w && ["ww", y]), h = h || c <= 1 && ["M"] || c < r.M && ["MM", c] || g <= 1 && ["y"] || ["yy", g], h[2] = t, h[3] = +e > 0, h[4] = s, sd.apply(null, h);
}
function nd(e) {
  return e === void 0 ? te : typeof e == "function" ? (te = e, !0) : !1;
}
function id(e, t) {
  return Ee[e] === void 0 ? !1 : t === void 0 ? Ee[e] : (Ee[e] = t, e === "s" && (Ee.ss = t - 1), !0);
}
function od(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ee, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ee, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), n = ad(this, !r, s, a), r && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var sr = Math.abs;
function Te(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ct() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = sr(this._milliseconds) / 1e3, t = sr(this._days), r = sr(this._months), s, a, n, i, o = this.asSeconds(), u, c, y, g;
  return o ? (s = q(e / 60), a = q(s / 60), e %= 60, s %= 60, n = q(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", c = Te(this._months) !== Te(o) ? "-" : "", y = Te(this._days) !== Te(o) ? "-" : "", g = Te(this._milliseconds) !== Te(o) ? "-" : "", u + "P" + (n ? c + n + "Y" : "") + (r ? c + r + "M" : "") + (t ? y + t + "D" : "") + (a || s || e ? "T" : "") + (a ? g + a + "H" : "") + (s ? g + s + "M" : "") + (e ? g + i + "S" : "")) : "P0D";
}
var w = Nt.prototype;
w.isValid = Ko;
w.abs = Pl;
w.add = Nl;
w.subtract = Fl;
w.as = Al;
w.asMilliseconds = Wl;
w.asSeconds = Ul;
w.asMinutes = Il;
w.asHours = ql;
w.asDays = $l;
w.asWeeks = Vl;
w.asMonths = Hl;
w.asQuarters = jl;
w.asYears = Bl;
w.valueOf = Ll;
w._bubble = Cl;
w.clone = Gl;
w.get = zl;
w.milliseconds = Zl;
w.seconds = Jl;
w.minutes = Ql;
w.hours = Xl;
w.days = Kl;
w.weeks = rd;
w.months = ed;
w.years = td;
w.humanize = od;
w.toISOString = Ct;
w.toString = Ct;
w.toJSON = Ct;
w.locale = ga;
w.localeData = Sa;
w.toIsoString = $(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ct
);
w.lang = wa;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
f("x", xt);
f("X", Ti);
D("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
D("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
d.version = "2.29.4";
oi(k);
d.fn = l;
d.min = Zo;
d.max = Jo;
d.now = Qo;
d.utc = X;
d.unix = bl;
d.months = Yl;
d.isDate = Ke;
d.locale = me;
d.invalid = kt;
d.duration = Z;
d.isMoment = z;
d.weekdays = xl;
d.parseZone = Ml;
d.localeData = ue;
d.isDuration = ut;
d.monthsShort = Tl;
d.weekdaysMin = El;
d.defineLocale = Ar;
d.updateLocale = Mo;
d.locales = Yo;
d.weekdaysShort = Rl;
d.normalizeUnits = V;
d.relativeTimeRounding = nd;
d.relativeTimeThreshold = id;
d.calendarFormat = Ou;
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
const ud = {
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
function ld(e, t, r, s, a, n) {
  const i = ge("o-datepicker");
  return ae(), Xe(i, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const dd = /* @__PURE__ */ Se(ud, [["render", ld]]), fd = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, hd = /* @__PURE__ */ mr(" An error occurred. Try again? ");
function cd(e, t, r, s, a, n) {
  const i = ge("o-loading"), o = ge("o-button");
  return ae(), ft("div", null, [
    r.form.isLoaded.value ? (ae(), ft("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = Ia((u) => e.$emit("submit"), ["prevent"]))
    }, [
      dt(e.$slots, "default")
    ], 32)) : Be("", !0),
    Ds(i, {
      active: r.form.isLoading.value
    }, null, 8, ["active"]),
    !r.form.isLoaded.value && !r.form.isLoading.value ? (ae(), Xe(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: cr(() => [
        hd
      ]),
      _: 1
    })) : Be("", !0)
  ]);
}
const md = /* @__PURE__ */ Se(fd, [["render", cd]]), yd = {
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
}, _d = ["width", "height"];
function pd(e, t, r, s, a, n) {
  return ae(), ft("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, _d);
}
const vd = /* @__PURE__ */ Se(yd, [["render", pd]]), gd = {
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
      errors: Dr()
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
function wd(e, t, r, s, a, n) {
  const i = ge("o-input"), o = ge("o-field");
  return ae(), Xe(o, ar({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: cr(() => [
      Ds(i, ar(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => s.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const Sd = /* @__PURE__ */ Se(gd, [["render", wd]]), Od = {
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
      search: Dt.create()
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
      return this.search.search(
        this.path,
        this.payloadFormatter({
          value: e,
          exclude: this.query.map((t) => t.id)
        })
      );
    },
    addedTag() {
      const e = this.query.map((t) => this.formatter(t));
      console.log("r", e), this.$emit("update:modelValue", e);
    },
    removedTag() {
      const e = this.query.map((t) => this.formatter(t));
      console.log("r", e), this.$emit("update:modelValue", e);
    },
    reset() {
      this.query = [], this.$emit("update:modelValue", this.query);
    }
  }
};
function Dd(e, t, r, s, a, n) {
  const i = ge("o-inputitems");
  return ae(), Xe(i, ar(e.$attrs, {
    modelValue: a.query,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => a.query = o),
    data: s.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (o) => n.addedTag(o)),
    onRemove: t[2] || (t[2] = (o) => n.removedTag(o)),
    onFocus: t[3] || (t[3] = (o) => n.searchTags()),
    onTyping: t[4] || (t[4] = (o) => n.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const kd = /* @__PURE__ */ Se(Od, [["render", Dd]]), Yd = {
  AutoCompleteSearch: Dt,
  FormBuilder: kr,
  ResourceList: Zn,
  Listing: Jn,
  useFormErrors: Dr,
  WyxosButton: ri,
  WyxosCollection: ii,
  WyxosDatepicker: dd,
  WyxosForm: md,
  WyxosImage: vd,
  WyxosInput: Sd,
  WyxosTags: kd
};
export {
  Dt as AutoCompleteSearch,
  kr as FormBuilder,
  Jn as Listing,
  Zn as ResourceList,
  ri as WyxosButton,
  ii as WyxosCollection,
  dd as WyxosDatepicker,
  md as WyxosForm,
  vd as WyxosImage,
  Sd as WyxosInput,
  kd as WyxosTags,
  Yd as default,
  Dr as useFormErrors
};
