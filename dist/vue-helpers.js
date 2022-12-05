var Ca = Object.defineProperty;
var Wa = (e, t, r) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => (Wa(e, typeof t != "symbol" ? t + "" : t, r), r);
import { ref as zr, reactive as Q, resolveComponent as ge, openBlock as ne, createBlock as Qe, withCtx as cr, renderSlot as lt, createCommentVNode as He, createElementBlock as dt, createTextVNode as mr, normalizeProps as Ua, guardReactiveProps as Ia, createElementVNode as Zr, withModifiers as qa, createVNode as ks, mergeProps as sr } from "vue";
function $a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bs = { exports: {} }, yr = { exports: {} }, Ms = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), n = 0; n < a.length; n++)
      a[n] = arguments[n];
    return t.apply(r, a);
  };
}, ja = Ms, _r = Object.prototype.toString, pr = function(e) {
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
function ft(e) {
  return typeof e > "u";
}
function Va(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ys = we("ArrayBuffer");
function Ha(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ys(e.buffer), t;
}
function Ba(e) {
  return typeof e == "string";
}
function Ga(e) {
  return typeof e == "number";
}
function Ts(e) {
  return e !== null && typeof e == "object";
}
function at(e) {
  if (pr(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var za = we("Date"), Za = we("File"), Ja = we("Blob"), Qa = we("FileList");
function gr(e) {
  return _r.call(e) === "[object Function]";
}
function Xa(e) {
  return Ts(e) && gr(e.pipe);
}
function Ka(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || _r.call(e) === t || gr(e.toString) && e.toString() === t);
}
var en = we("URLSearchParams");
function tn(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function rn() {
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
function ar() {
  var e = {};
  function t(a, n) {
    at(e[n]) && at(a) ? e[n] = ar(e[n], a) : at(a) ? e[n] = ar({}, a) : vr(a) ? e[n] = a.slice() : e[n] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    wr(arguments[r], t);
  return e;
}
function sn(e, t, r) {
  return wr(t, function(a, n) {
    r && typeof a == "function" ? e[n] = ja(a, r) : e[n] = a;
  }), e;
}
function an(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function nn(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function on(e, t, r) {
  var s, a, n, i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      n = s[a], i[n] || (t[n] = e[n], i[n] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function un(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function ln(e) {
  if (!e)
    return null;
  var t = e.length;
  if (ft(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var dn = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), P = {
  isArray: vr,
  isArrayBuffer: Ys,
  isBuffer: Va,
  isFormData: Ka,
  isArrayBufferView: Ha,
  isString: Ba,
  isNumber: Ga,
  isObject: Ts,
  isPlainObject: at,
  isUndefined: ft,
  isDate: za,
  isFile: Za,
  isBlob: Ja,
  isFunction: gr,
  isStream: Xa,
  isURLSearchParams: en,
  isStandardBrowserEnv: rn,
  forEach: wr,
  merge: ar,
  extend: sn,
  trim: tn,
  stripBOM: an,
  inherits: nn,
  toFlatObject: on,
  kindOf: pr,
  kindOfTest: we,
  endsWith: un,
  toArray: ln,
  isTypedArray: dn,
  isFileList: Qa
}, Me = P;
function Jr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var xs = function(t, r, s) {
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
        Me.isDate(g) ? g = g.toISOString() : Me.isObject(g) && (g = JSON.stringify(g)), n.push(Jr(c) + "=" + Jr(g));
      }));
    }), a = n.join("&");
  }
  if (a) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, fn = P;
function vt() {
  this.handlers = [];
}
vt.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
vt.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
vt.prototype.forEach = function(t) {
  fn.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var hn = vt, cn = P, mn = function(t, r) {
  cn.forEach(t, function(a, n) {
    n !== r && n.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[n]);
  });
}, Rs = P;
function Fe(e, t, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Rs.inherits(Fe, Error, {
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
var Ps = Fe.prototype, Es = {};
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
Object.defineProperties(Fe, Es);
Object.defineProperty(Ps, "isAxiosError", { value: !0 });
Fe.from = function(e, t, r, s, a, n) {
  var i = Object.create(Ps);
  return Rs.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), Fe.call(i, e.message, t, r, s, a), i.name = e.name, n && Object.assign(i, n), i;
};
var Le = Fe, Ns = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H = P;
function yn(e, t) {
  t = t || new FormData();
  var r = [];
  function s(n) {
    return n === null ? "" : H.isDate(n) ? n.toISOString() : H.isArrayBuffer(n) || H.isTypedArray(n) ? typeof Blob == "function" ? new Blob([n]) : Buffer.from(n) : n;
  }
  function a(n, i) {
    if (H.isPlainObject(n) || H.isArray(n)) {
      if (r.indexOf(n) !== -1)
        throw Error("Circular reference detected in " + i);
      r.push(n), H.forEach(n, function(u, c) {
        if (!H.isUndefined(u)) {
          var y = i ? i + "." + c : c, g;
          if (u && !i && typeof u == "object") {
            if (H.endsWith(c, "{}"))
              u = JSON.stringify(u);
            else if (H.endsWith(c, "[]") && (g = H.toArray(u))) {
              g.forEach(function(h) {
                !H.isUndefined(h) && t.append(y, s(h));
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
var Fs = yn, Wt, Qr;
function _n() {
  if (Qr)
    return Wt;
  Qr = 1;
  var e = Le;
  return Wt = function(r, s, a) {
    var n = a.config.validateStatus;
    !a.status || !n || n(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Wt;
}
var Ut, Xr;
function pn() {
  if (Xr)
    return Ut;
  Xr = 1;
  var e = P;
  return Ut = e.isStandardBrowserEnv() ? function() {
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
  }(), Ut;
}
var vn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, gn = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, wn = vn, Sn = gn, As = function(t, r) {
  return t && !wn(r) ? Sn(t, r) : r;
}, It, Kr;
function On() {
  if (Kr)
    return It;
  Kr = 1;
  var e = P, t = [
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
  return It = function(s) {
    var a = {}, n, i, o;
    return s && e.forEach(s.split(`
`), function(c) {
      if (o = c.indexOf(":"), n = e.trim(c.substr(0, o)).toLowerCase(), i = e.trim(c.substr(o + 1)), n) {
        if (a[n] && t.indexOf(n) >= 0)
          return;
        n === "set-cookie" ? a[n] = (a[n] ? a[n] : []).concat([i]) : a[n] = a[n] ? a[n] + ", " + i : i;
      }
    }), a;
  }, It;
}
var qt, es;
function Dn() {
  if (es)
    return qt;
  es = 1;
  var e = P;
  return qt = e.isStandardBrowserEnv() ? function() {
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
  }(), qt;
}
var $t, ts;
function gt() {
  if (ts)
    return $t;
  ts = 1;
  var e = Le, t = P;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), $t = r, $t;
}
var jt, rs;
function kn() {
  return rs || (rs = 1, jt = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), jt;
}
var Vt, ss;
function as() {
  if (ss)
    return Vt;
  ss = 1;
  var e = P, t = _n(), r = pn(), s = xs, a = As, n = On(), i = Dn(), o = Ns, u = Le, c = gt(), y = kn();
  return Vt = function(h) {
    return new Promise(function(Na, De) {
      var Ue = h.data, Ie = h.headers, qe = h.responseType, ke;
      function Hr() {
        h.cancelToken && h.cancelToken.unsubscribe(ke), h.signal && h.signal.removeEventListener("abort", ke);
      }
      e.isFormData(Ue) && e.isStandardBrowserEnv() && delete Ie["Content-Type"];
      var _ = new XMLHttpRequest();
      if (h.auth) {
        var Fa = h.auth.username || "", Aa = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        Ie.Authorization = "Basic " + btoa(Fa + ":" + Aa);
      }
      var At = a(h.baseURL, h.url);
      _.open(h.method.toUpperCase(), s(At, h.params, h.paramsSerializer), !0), _.timeout = h.timeout;
      function Br() {
        if (!!_) {
          var V = "getAllResponseHeaders" in _ ? n(_.getAllResponseHeaders()) : null, be = !qe || qe === "text" || qe === "json" ? _.responseText : _.response, ye = {
            data: be,
            status: _.status,
            statusText: _.statusText,
            headers: V,
            config: h,
            request: _
          };
          t(function(Ct) {
            Na(Ct), Hr();
          }, function(Ct) {
            De(Ct), Hr();
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
        Gr && (Ie[h.xsrfHeaderName] = Gr);
      }
      "setRequestHeader" in _ && e.forEach(Ie, function(be, ye) {
        typeof Ue > "u" && ye.toLowerCase() === "content-type" ? delete Ie[ye] : _.setRequestHeader(ye, be);
      }), e.isUndefined(h.withCredentials) || (_.withCredentials = !!h.withCredentials), qe && qe !== "json" && (_.responseType = h.responseType), typeof h.onDownloadProgress == "function" && _.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (ke = function(V) {
        !_ || (De(!V || V && V.type ? new c() : V), _.abort(), _ = null);
      }, h.cancelToken && h.cancelToken.subscribe(ke), h.signal && (h.signal.aborted ? ke() : h.signal.addEventListener("abort", ke))), Ue || (Ue = null);
      var Lt = y(At);
      if (Lt && ["http", "https", "file"].indexOf(Lt) === -1) {
        De(new u("Unsupported protocol " + Lt + ":", u.ERR_BAD_REQUEST, h));
        return;
      }
      _.send(Ue);
    });
  }, Vt;
}
var Ht, ns;
function bn() {
  return ns || (ns = 1, Ht = null), Ht;
}
var R = P, is = mn, os = Le, Mn = Ns, Yn = Fs, Tn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function us(e, t) {
  !R.isUndefined(e) && R.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function xn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = as()), e;
}
function Rn(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var wt = {
  transitional: Mn,
  adapter: xn(),
  transformRequest: [function(t, r) {
    if (is(r, "Accept"), is(r, "Content-Type"), R.isFormData(t) || R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return us(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = R.isObject(t), a = r && r["Content-Type"], n;
    if ((n = R.isFileList(t)) || s && a === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return Yn(n ? { "files[]": t } : t, i && new i());
    } else if (s || a === "application/json")
      return us(r, "application/json"), Rn(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || wt.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, n = !s && this.responseType === "json";
    if (n || a && R.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (n)
          throw i.name === "SyntaxError" ? os.from(i, os.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: bn()
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
  wt.headers[t] = {};
});
R.forEach(["post", "put", "patch"], function(t) {
  wt.headers[t] = R.merge(Tn);
});
var Sr = wt, Pn = P, En = Sr, Nn = function(t, r, s) {
  var a = this || En;
  return Pn.forEach(s, function(i) {
    t = i.call(a, t, r);
  }), t;
}, Bt, ls;
function Ls() {
  return ls || (ls = 1, Bt = function(t) {
    return !!(t && t.__CANCEL__);
  }), Bt;
}
var ds = P, Gt = Nn, Fn = Ls(), An = Sr, Ln = gt();
function zt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ln();
}
var Cn = function(t) {
  zt(t), t.headers = t.headers || {}, t.data = Gt.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = ds.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), ds.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete t.headers[a];
    }
  );
  var r = t.adapter || An.adapter;
  return r(t).then(function(a) {
    return zt(t), a.data = Gt.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return Fn(a) || (zt(t), a && a.response && (a.response.data = Gt.call(
      t,
      a.response.data,
      a.response.headers,
      t.transformResponse
    ))), Promise.reject(a);
  });
}, C = P, Cs = function(t, r) {
  r = r || {};
  var s = {};
  function a(y, g) {
    return C.isPlainObject(y) && C.isPlainObject(g) ? C.merge(y, g) : C.isPlainObject(g) ? C.merge({}, g) : C.isArray(g) ? g.slice() : g;
  }
  function n(y) {
    if (C.isUndefined(r[y])) {
      if (!C.isUndefined(t[y]))
        return a(void 0, t[y]);
    } else
      return a(t[y], r[y]);
  }
  function i(y) {
    if (!C.isUndefined(r[y]))
      return a(void 0, r[y]);
  }
  function o(y) {
    if (C.isUndefined(r[y])) {
      if (!C.isUndefined(t[y]))
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
  return C.forEach(Object.keys(t).concat(Object.keys(r)), function(g) {
    var h = c[g] || n, I = h(g);
    C.isUndefined(I) && h !== u || (s[g] = I);
  }), s;
}, Zt, fs;
function Ws() {
  return fs || (fs = 1, Zt = {
    version: "0.27.2"
  }), Zt;
}
var Wn = Ws().version, fe = Le, Or = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Or[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var hs = {};
Or.transitional = function(t, r, s) {
  function a(n, i) {
    return "[Axios v" + Wn + "] Transitional option '" + n + "'" + i + (s ? ". " + s : "");
  }
  return function(n, i, o) {
    if (t === !1)
      throw new fe(
        a(i, " has been removed" + (r ? " in " + r : "")),
        fe.ERR_DEPRECATED
      );
    return r && !hs[i] && (hs[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, i, o) : !0;
  };
};
function Un(e, t, r) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var n = s[a], i = t[n];
    if (i) {
      var o = e[n], u = o === void 0 || i(o, n, e);
      if (u !== !0)
        throw new fe("option " + n + " must be " + u, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new fe("Unknown option " + n, fe.ERR_BAD_OPTION);
  }
}
var In = {
  assertOptions: Un,
  validators: Or
}, Us = P, qn = xs, cs = hn, ms = Cn, St = Cs, $n = As, Is = In, Ye = Is.validators;
function Ae(e) {
  this.defaults = e, this.interceptors = {
    request: new cs(),
    response: new cs()
  };
}
Ae.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = St(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Is.assertOptions(s, {
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
    var u = [ms, void 0];
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
    o = ms(c);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; i.length; )
    o = o.then(i.shift(), i.shift());
  return o;
};
Ae.prototype.getUri = function(t) {
  t = St(this.defaults, t);
  var r = $n(t.baseURL, t.url);
  return qn(r, t.params, t.paramsSerializer);
};
Us.forEach(["delete", "get", "head", "options"], function(t) {
  Ae.prototype[t] = function(r, s) {
    return this.request(St(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
Us.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(n, i, o) {
      return this.request(St(o || {}, {
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
var jn = Ae, Jt, ys;
function Vn() {
  if (ys)
    return Jt;
  ys = 1;
  var e = gt();
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
  }, Jt = t, Jt;
}
var Qt, _s;
function Hn() {
  return _s || (_s = 1, Qt = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), Qt;
}
var Xt, ps;
function Bn() {
  if (ps)
    return Xt;
  ps = 1;
  var e = P;
  return Xt = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Xt;
}
var vs = P, Gn = Ms, nt = jn, zn = Cs, Zn = Sr;
function qs(e) {
  var t = new nt(e), r = Gn(nt.prototype.request, t);
  return vs.extend(r, nt.prototype, t), vs.extend(r, t), r.create = function(a) {
    return qs(zn(e, a));
  }, r;
}
var L = qs(Zn);
L.Axios = nt;
L.CanceledError = gt();
L.CancelToken = Vn();
L.isCancel = Ls();
L.VERSION = Ws().version;
L.toFormData = Fs;
L.AxiosError = Le;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = Hn();
L.isAxiosError = Bn();
yr.exports = L;
yr.exports.default = L;
(function(e) {
  e.exports = yr.exports;
})(bs);
const ie = /* @__PURE__ */ $a(bs.exports);
class Ot {
  constructor() {
    Y(this, "loading", zr(!1));
    Y(this, "result", zr([]));
  }
  static create() {
    return new Ot();
  }
  async search(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: s } = await ie.post(`${t}/search`, r).catch((a) => {
      throw this.loading.value = !1, a;
    });
    this.result.value = s.result, this.loading.value = !1;
  }
  async restore(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: s } = await ie.post(`${t}/restore`, r).catch((a) => {
      throw this.loading.value = !1, a;
    });
    return this.loading.value = !1, s;
  }
}
const $e = Q({
  default: []
});
function Dr() {
  return {
    createBag(e) {
      $e[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && ($e[t] = Object.keys(e.response.data.errors).map((s) => ({
        key: s,
        message: e.response.data.errors[s][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = $e[t];
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
        const r = $e[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const s = r.findIndex((a) => a.key === e);
        r.splice(s, 1);
        return;
      }
      $e[t] = [];
    }
  };
}
class nr {
  constructor() {
    Y(this, "state", Q({
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
class kr {
  constructor(t) {
    Y(this, "loadPath", "");
    Y(this, "submitPath", "");
    Y(this, "bag", "");
    Y(this, "model", Q({}));
    Y(this, "form", Q({}));
    Y(this, "original", Q({}));
    Y(this, "errors", null);
    Y(this, "state", new nr());
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
    this.errors.clear(null, this.bag), this.state.loading();
    const a = r ? r(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: n } = await ie[s.method || "post"](
      t || this.submitPath,
      a,
      s
    ).catch((i) => {
      throw this.state.failed(), this.errors.set(i, this.bag), i;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.state.loaded(), n;
  }
  async advancedSubmit(t) {
    this.state.loading();
    const { data: r } = await Promise.resolve(t(ie, this.form)).catch(
      (s) => {
        throw this.state.failed(), this.errors.set(s, this.bag), s;
      }
    );
    return this.state.loaded(), r;
  }
  async load(t, r) {
    this.state.loading();
    const { data: s } = await ie.get(t || this.loadPath, {
      params: r
    }).catch((a) => {
      throw this.state.failed(), a;
    });
    return this.setAttributes(s.form), s.model && Object.assign(this.model, s.model), this.state.loaded(), s;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
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
}
class Jn {
  constructor() {
    Y(this, "structure", {});
    Y(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    Y(this, "params", Q({
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
    const { data: r } = await ie.get(t || this.urls.index, {
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
      const { data: u } = await ie.delete(t, {
        data: o
      }).catch((c) => {
        throw r.isProcessing = !1, c;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await ie.post(t, o).catch((c) => {
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
class Qn {
  constructor() {
    Y(this, "api", null);
    Y(this, "baseUrl", null);
    Y(this, "structure", null);
    Y(this, "states", {
      fetch: new nr(),
      filter: new nr()
    });
    Y(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0
    }));
    Y(this, "params", Q({
      page: 1
    }));
    Y(this, "state", Q({
      isFilterActive: !1
    }));
  }
  static create(t, r) {
    const s = new this();
    return s.structure = Object.assign({}, t), Object.assign(s.params, t), s.api = ie.create(r.axios || {}), s.baseUrl = r.baseUrl, s;
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
    const { data: r } = await this.api.get(t || this.baseUrl, {
      params: this.params
    }).catch((i) => {
      throw this.states.fetch.failed(), i;
    });
    this.states.fetch.loaded();
    const s = window.location.href.replace(/\?.*/, ""), a = new URLSearchParams(this.params), n = s + "?" + a.toString();
    return window.history.pushState({}, "", n), r;
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
const Se = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of t)
    r[s] = a;
  return r;
}, Xn = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, Kn = /* @__PURE__ */ mr("Submit"), ei = /* @__PURE__ */ mr("Processing..."), ti = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function ri(e, t, r, s, a, n) {
  const i = ge("o-button");
  return ne(), Qe(i, { disabled: r.loading }, {
    default: cr(() => [
      r.loading ? He("", !0) : lt(e.$slots, "default", { key: 0 }, () => [
        Kn
      ]),
      r.loading ? lt(e.$slots, "loading", { key: 1 }, () => [
        ei
      ]) : He("", !0),
      r.loading ? (ne(), dt("i", ti)) : He("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const si = /* @__PURE__ */ Se(Xn, [["render", ri]]), ai = {
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
}, ni = /* @__PURE__ */ Zr("ul", null, [
  /* @__PURE__ */ Zr("li")
], -1);
function ii(e, t, r, s, a, n) {
  return lt(e.$slots, "default", Ua(Ia({ add: n.add, remove: n.remove, items: a.items })), () => [
    ni
  ]);
}
const oi = /* @__PURE__ */ Se(ai, [["render", ii]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var $s;
function d() {
  return $s.apply(null, arguments);
}
function ui(e) {
  $s = e;
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
function A(e) {
  return e === void 0;
}
function ue(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Xe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function js(e, t) {
  var r = [], s, a = e.length;
  for (s = 0; s < a; ++s)
    r.push(t(e[s], s));
  return r;
}
function he(e, t) {
  for (var r in t)
    S(t, r) && (e[r] = t[r]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function K(e, t, r, s) {
  return ca(e, t, r, s, !0).utc();
}
function li() {
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
  return e._pf == null && (e._pf = li()), e._pf;
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
function Dt(e) {
  var t = K(NaN);
  return e != null ? he(p(t), e) : p(t).userInvalidated = !0, t;
}
var gs = d.momentProperties = [], Kt = !1;
function Yr(e, t) {
  var r, s, a, n = gs.length;
  if (A(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), A(t._i) || (e._i = t._i), A(t._f) || (e._f = t._f), A(t._l) || (e._l = t._l), A(t._strict) || (e._strict = t._strict), A(t._tzm) || (e._tzm = t._tzm), A(t._isUTC) || (e._isUTC = t._isUTC), A(t._offset) || (e._offset = t._offset), A(t._pf) || (e._pf = p(t)), A(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      s = gs[r], a = t[s], A(a) || (e[s] = a);
  return e;
}
function Ke(e) {
  Yr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Kt === !1 && (Kt = !0, d.updateOffset(this), Kt = !1);
}
function z(e) {
  return e instanceof Ke || e != null && e._isAMomentObject != null;
}
function Vs(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function $(e, t) {
  var r = !0;
  return he(function() {
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
var ws = {};
function Hs(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), ws[e] || (Vs(t), ws[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function ee(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function di(e) {
  var t, r;
  for (r in e)
    S(e, r) && (t = e[r], ee(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function or(e, t) {
  var r = he({}, e), s;
  for (s in t)
    S(t, s) && (ve(e[s]) && ve(t[s]) ? (r[s] = {}, he(r[s], e[s]), he(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    S(e, s) && !S(t, s) && ve(e[s]) && (r[s] = he({}, r[s]));
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
var fi = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function hi(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ee(s) ? s.call(t, r) : s;
}
function X(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var xr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, rt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, er = {}, Pe = {};
function m(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Pe[e] = a), t && (Pe[t[0]] = function() {
    return X(a.apply(this, arguments), t[1], t[2]);
  }), r && (Pe[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function ci(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function mi(e) {
  var t = e.match(xr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Pe[t[r]] ? t[r] = Pe[t[r]] : t[r] = ci(t[r]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < s; i++)
      n += ee(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function it(e, t) {
  return e.isValid() ? (t = Bs(t, e.localeData()), er[t] = er[t] || mi(t), er[t](e)) : e.localeData().invalidDate();
}
function Bs(e, t) {
  var r = 5;
  function s(a) {
    return t.longDateFormat(a) || a;
  }
  for (rt.lastIndex = 0; r >= 0 && rt.test(e); )
    e = e.replace(
      rt,
      s
    ), rt.lastIndex = 0, r -= 1;
  return e;
}
var yi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function _i(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(xr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var pi = "Invalid date";
function vi() {
  return this._invalidDate;
}
var gi = "%d", wi = /\d{1,2}/;
function Si(e) {
  return this._ordinal.replace("%d", e);
}
var Oi = {
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
function Di(e, t, r, s) {
  var a = this._relativeTime[r];
  return ee(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function ki(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ee(r) ? r(t) : r.replace(/%s/i, t);
}
var Be = {};
function N(e, t) {
  var r = e.toLowerCase();
  Be[r] = Be[r + "s"] = Be[t] = e;
}
function j(e) {
  return typeof e == "string" ? Be[e] || Be[e.toLowerCase()] : void 0;
}
function Rr(e) {
  var t = {}, r, s;
  for (s in e)
    S(e, s) && (r = j(s), r && (t[r] = e[s]));
  return t;
}
var Gs = {};
function F(e, t) {
  Gs[e] = t;
}
function bi(e) {
  var t = [], r;
  for (r in e)
    S(e, r) && t.push({ unit: r, priority: Gs[r] });
  return t.sort(function(s, a) {
    return s.priority - a.priority;
  }), t;
}
function kt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = q(t)), r;
}
function Ce(e, t) {
  return function(r) {
    return r != null ? (zs(this, e, r), d.updateOffset(this, t), this) : ht(this, e);
  };
}
function ht(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function zs(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && kt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Rt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Mi(e) {
  return e = j(e), ee(this[e]) ? this[e]() : this;
}
function Yi(e, t) {
  if (typeof e == "object") {
    e = Rr(e);
    var r = bi(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = j(e), ee(this[e]))
    return this[e](t);
  return this;
}
var Zs = /\d/, U = /\d\d/, Js = /\d{3}/, Pr = /\d{4}/, bt = /[+-]?\d{6}/, b = /\d\d?/, Qs = /\d\d\d\d?/, Xs = /\d\d\d\d\d\d?/, Mt = /\d{1,3}/, Er = /\d{1,4}/, Yt = /[+-]?\d{1,6}/, We = /\d+/, Tt = /[+-]?\d+/, Ti = /Z|[+-]\d\d:?\d\d/gi, xt = /Z|[+-]\d\d(?::?\d\d)?/gi, xi = /[+-]?\d+(\.\d{1,3})?/, et = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ct;
ct = {};
function f(e, t, r) {
  ct[e] = ee(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function Ri(e, t) {
  return S(ct, e) ? ct[e](t._strict, t._locale) : new RegExp(Pi(e));
}
function Pi(e) {
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
  for (typeof e == "string" && (e = [e]), ue(t) && (s = function(n, i) {
    i[t] = v(n);
  }), a = e.length, r = 0; r < a; r++)
    lr[e[r]] = s;
}
function tt(e, t) {
  D(e, function(r, s, a, n) {
    a._w = a._w || {}, t(r, a._w, a, n);
  });
}
function Ei(e, t, r) {
  t != null && S(lr, e) && lr[e](t, r._a, r, e);
}
var E = 0, se = 1, J = 2, x = 3, B = 4, ae = 5, pe = 6, Ni = 7, Fi = 8;
function Ai(e, t) {
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
function Rt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Ai(t, 12);
  return e += (t - r) / 12, r === 1 ? kt(e) ? 29 : 28 : 31 - r % 7 % 2;
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
  t[se] = v(e) - 1;
});
D(["MMM", "MMMM"], function(e, t, r, s) {
  var a = r._locale.monthsParse(e, s, r._strict);
  a != null ? t[se] = a : p(r).invalidMonth = e;
});
var Li = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ks = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ea = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ci = et, Wi = et;
function Ui(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ea).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function Ii(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ea.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function qi(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      n = K([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = T.call(this._longMonthsParse, i), a !== -1 ? a : (a = T.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function $i(e, t, r) {
  var s, a, n;
  if (this._monthsParseExact)
    return qi.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (a = K([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
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
function ta(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !ue(t))
      return e;
  }
  return r = Math.min(e.date(), Rt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function ra(e) {
  return e != null ? (ta(this, e), d.updateOffset(this, !0), this) : ht(this, "Month");
}
function ji() {
  return Rt(this.year(), this.month());
}
function Vi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || sa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Ci), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Hi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || sa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Wi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function sa() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], s = [], a, n;
  for (a = 0; a < 12; a++)
    n = K([2e3, a]), t.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
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
  return e <= 9999 ? X(e, 4) : "+" + e;
});
m(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
m(0, ["YYYY", 4], 0, "year");
m(0, ["YYYYY", 5], 0, "year");
m(0, ["YYYYYY", 6, !0], 0, "year");
N("year", "y");
F("year", 1);
f("Y", Tt);
f("YY", b, U);
f("YYYY", Er, Pr);
f("YYYYY", Yt, bt);
f("YYYYYY", Yt, bt);
D(["YYYYY", "YYYYYY"], E);
D("YYYY", function(e, t) {
  t[E] = e.length === 2 ? d.parseTwoDigitYear(e) : v(e);
});
D("YY", function(e, t) {
  t[E] = d.parseTwoDigitYear(e);
});
D("Y", function(e, t) {
  t[E] = parseInt(e, 10);
});
function Ge(e) {
  return kt(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var aa = Ce("FullYear", !0);
function Bi() {
  return kt(this.year());
}
function Gi(e, t, r, s, a, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, a, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, a, n, i), o;
}
function ze(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function mt(e, t, r) {
  var s = 7 + t - r, a = (7 + ze(e, 0, s).getUTCDay() - t) % 7;
  return -a + s - 1;
}
function na(e, t, r, s, a) {
  var n = (7 + r - s) % 7, i = mt(e, s, a), o = 1 + 7 * (t - 1) + n + i, u, c;
  return o <= 0 ? (u = e - 1, c = Ge(u) + o) : o > Ge(e) ? (u = e + 1, c = o - Ge(e)) : (u = e, c = o), {
    year: u,
    dayOfYear: c
  };
}
function Ze(e, t, r) {
  var s = mt(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + oe(i, t, r)) : a > oe(e.year(), t, r) ? (n = a - oe(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function oe(e, t, r) {
  var s = mt(e, t, r), a = mt(e + 1, t, r);
  return (Ge(e) - s + a) / 7;
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
tt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = v(e);
  }
);
function zi(e) {
  return Ze(e, this._week.dow, this._week.doy).week;
}
var Zi = {
  dow: 0,
  doy: 6
};
function Ji() {
  return this._week.dow;
}
function Qi() {
  return this._week.doy;
}
function Xi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ki(e) {
  var t = Ze(this, 1, 4).week;
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
tt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var a = r._locale.weekdaysParse(e, s, r._strict);
  a != null ? t.d = a : p(r).invalidWeekday = e;
});
tt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = v(e);
});
function eo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function to(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Nr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ro = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ia = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), so = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ao = et, no = et, io = et;
function oo(e, t) {
  var r = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Nr(r, this._week.dow) : e ? r[e.day()] : r;
}
function uo(e) {
  return e === !0 ? Nr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function lo(e) {
  return e === !0 ? Nr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function fo(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      n = K([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = T.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = T.call(this._weekdaysParse, i), a !== -1 || (a = T.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, i), a !== -1 || (a = T.call(this._weekdaysParse, i), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = T.call(this._minWeekdaysParse, i), a !== -1 || (a = T.call(this._weekdaysParse, i), a !== -1) ? a : (a = T.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function ho(e, t, r) {
  var s, a, n;
  if (this._weekdaysParseExact)
    return fo.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (a = K([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
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
function co(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = eo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function mo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function yo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = to(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function _o(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = ao), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function po(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = no), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function vo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = io), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Fr() {
  function e(y, g) {
    return g.length - y.length;
  }
  var t = [], r = [], s = [], a = [], n, i, o, u, c;
  for (n = 0; n < 7; n++)
    i = K([2e3, 1]).day(n), o = W(this.weekdaysMin(i, "")), u = W(this.weekdaysShort(i, "")), c = W(this.weekdays(i, "")), t.push(o), r.push(u), s.push(c), a.push(o), a.push(u), a.push(c);
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
function Ar() {
  return this.hours() % 12 || 12;
}
function go() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Ar);
m("k", ["kk", 2], 0, go);
m("hmm", 0, 0, function() {
  return "" + Ar.apply(this) + X(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Ar.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
});
m("Hmm", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2);
});
m("Hmmss", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2);
});
function oa(e, t) {
  m(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
oa("a", !0);
oa("A", !1);
N("hour", "h");
F("hour", 13);
function ua(e, t) {
  return t._meridiemParse;
}
f("a", ua);
f("A", ua);
f("H", b);
f("h", b);
f("k", b);
f("HH", b, U);
f("hh", b, U);
f("kk", b, U);
f("hmm", Qs);
f("hmmss", Xs);
f("Hmm", Qs);
f("Hmmss", Xs);
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
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ae] = v(e.substr(a)), p(r).bigHour = !0;
});
D("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s));
});
D("Hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[x] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ae] = v(e.substr(a));
});
function wo(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var So = /[ap]\.?m?\.?/i, Oo = Ce("Hours", !0);
function Do(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var la = {
  calendar: fi,
  longDateFormat: yi,
  invalidDate: pi,
  ordinal: gi,
  dayOfMonthOrdinalParse: wi,
  relativeTime: Oi,
  months: Li,
  monthsShort: Ks,
  week: Zi,
  weekdays: ro,
  weekdaysMin: so,
  weekdaysShort: ia,
  meridiemParse: So
}, M = {}, je = {}, Je;
function ko(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function Ss(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function bo(e) {
  for (var t = 0, r, s, a, n; t < e.length; ) {
    for (n = Ss(e[t]).split("-"), r = n.length, s = Ss(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = Pt(n.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && ko(n, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Je;
}
function Mo(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Pt(e) {
  var t = null, r;
  if (M[e] === void 0 && typeof module < "u" && module && module.exports && Mo(e))
    try {
      t = Je._abbr, r = require, r("./locale/" + e), me(t);
    } catch {
      M[e] = null;
    }
  return M[e];
}
function me(e, t) {
  var r;
  return e && (A(t) ? r = le(e) : r = Lr(e, t), r ? Je = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Je._abbr;
}
function Lr(e, t) {
  if (t !== null) {
    var r, s = la;
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
        return je[t.parentLocale] || (je[t.parentLocale] = []), je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return M[e] = new Tr(or(s, t)), je[e] && je[e].forEach(function(a) {
      Lr(a.name, a.config);
    }), me(e), M[e];
  } else
    return delete M[e], null;
}
function Yo(e, t) {
  if (t != null) {
    var r, s, a = la;
    M[e] != null && M[e].parentLocale != null ? M[e].set(or(M[e]._config, t)) : (s = Pt(e), s != null && (a = s._config), t = or(a, t), s == null && (t.abbr = e), r = new Tr(t), r.parentLocale = M[e], M[e] = r), me(e);
  } else
    M[e] != null && (M[e].parentLocale != null ? (M[e] = M[e].parentLocale, e === me() && me(e)) : M[e] != null && delete M[e]);
  return M[e];
}
function le(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Je;
  if (!G(e)) {
    if (t = Pt(e), t)
      return t;
    e = [e];
  }
  return bo(e);
}
function To() {
  return ur(M);
}
function Cr(e) {
  var t, r = e._a;
  return r && p(e).overflow === -2 && (t = r[se] < 0 || r[se] > 11 ? se : r[J] < 1 || r[J] > Rt(r[E], r[se]) ? J : r[x] < 0 || r[x] > 24 || r[x] === 24 && (r[B] !== 0 || r[ae] !== 0 || r[pe] !== 0) ? x : r[B] < 0 || r[B] > 59 ? B : r[ae] < 0 || r[ae] > 59 ? ae : r[pe] < 0 || r[pe] > 999 ? pe : -1, p(e)._overflowDayOfYear && (t < E || t > J) && (t = J), p(e)._overflowWeeks && t === -1 && (t = Ni), p(e)._overflowWeekday && t === -1 && (t = Fi), p(e).overflow = t), e;
}
var xo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ro = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Po = /Z|[+-]\d\d(?::?\d\d)?/, st = [
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
], tr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Eo = /^\/?Date\((-?\d+)/i, No = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Fo = {
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
function da(e) {
  var t, r, s = e._i, a = xo.exec(s) || Ro.exec(s), n, i, o, u, c = st.length, y = tr.length;
  if (a) {
    for (p(e).iso = !0, t = 0, r = c; t < r; t++)
      if (st[t][1].exec(a[1])) {
        i = st[t][0], n = st[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = y; t < r; t++)
        if (tr[t][1].exec(a[3])) {
          o = (a[2] || " ") + tr[t][0];
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
      if (Po.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), Ur(e);
  } else
    e._isValid = !1;
}
function Ao(e, t, r, s, a, n) {
  var i = [
    Lo(e),
    Ks.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Lo(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Co(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Wo(e, t, r) {
  if (e) {
    var s = ia.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== a)
      return p(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Uo(e, t, r) {
  if (e)
    return Fo[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, n = (s - a) / 100;
  return n * 60 + a;
}
function fa(e) {
  var t = No.exec(Co(e._i)), r;
  if (t) {
    if (r = Ao(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Wo(t[1], r, e))
      return;
    e._a = r, e._tzm = Uo(t[8], t[9], t[10]), e._d = ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Io(e) {
  var t = Eo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (da(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (fa(e), e._isValid === !1)
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
function qo(e) {
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
    for (a = qo(e), e._w && e._a[J] == null && e._a[se] == null && $o(e), e._dayOfYear != null && (i = xe(e._a[E], a[E]), (e._dayOfYear > Ge(i) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), r = ze(i, 0, e._dayOfYear), e._a[se] = r.getUTCMonth(), e._a[J] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[x] === 24 && e._a[B] === 0 && e._a[ae] === 0 && e._a[pe] === 0 && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? ze : Gi).apply(
      null,
      s
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (p(e).weekdayMismatch = !0);
  }
}
function $o(e) {
  var t, r, s, a, n, i, o, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = xe(
    t.GG,
    e._a[E],
    Ze(k(), 1, 4).year
  ), s = xe(t.W, 1), a = xe(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, c = Ze(k(), n, i), r = xe(t.gg, e._a[E], c.year), s = xe(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (u = !0)) : a = n), s < 1 || s > oe(r, n, i) ? p(e)._overflowWeeks = !0 : u != null ? p(e)._overflowWeekday = !0 : (o = na(r, s, a, n, i), e._a[E] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Ur(e) {
  if (e._f === d.ISO_8601) {
    da(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    fa(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, r, s, a, n, i, o = t.length, u = 0, c, y;
  for (a = Bs(e._f, e._locale).match(xr) || [], y = a.length, r = 0; r < y; r++)
    n = a[r], s = (t.match(Ri(n, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && p(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Pe[n] ? (s ? p(e).empty = !1 : p(e).unusedTokens.push(n), Ei(n, s, e)) : e._strict && !s && p(e).unusedTokens.push(n);
  p(e).charsLeftOver = o - u, t.length > 0 && p(e).unusedInput.push(t), e._a[x] <= 12 && p(e).bigHour === !0 && e._a[x] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[x] = jo(
    e._locale,
    e._a[x],
    e._meridiem
  ), c = p(e).era, c !== null && (e._a[E] = e._locale.erasConvertYear(c, e._a[E])), Wr(e), Cr(e);
}
function jo(e, t, r) {
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
  he(e, r || t);
}
function Ho(e) {
  if (!e._d) {
    var t = Rr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = js(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), Wr(e);
  }
}
function Bo(e) {
  var t = new Ke(Cr(ha(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ha(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || le(e._l), t === null || r === void 0 && t === "" ? Dt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new Ke(Cr(t)) : (Xe(t) ? e._d = t : G(r) ? Vo(e) : r ? Ur(e) : Go(e), Mr(e) || (e._d = null), e));
}
function Go(e) {
  var t = e._i;
  A(t) ? e._d = new Date(d.now()) : Xe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Io(e) : G(t) ? (e._a = js(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Wr(e)) : ve(t) ? Ho(e) : ue(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ca(e, t, r, s, a) {
  var n = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (ve(e) && br(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = r, n._i = e, n._f = t, n._strict = s, Bo(n);
}
function k(e, t, r, s) {
  return ca(e, t, r, s, !1);
}
var zo = $(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Dt();
  }
), Zo = $(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Dt();
  }
);
function ma(e, t) {
  var r, s;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return k();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Jo() {
  var e = [].slice.call(arguments, 0);
  return ma("isBefore", e);
}
function Qo() {
  var e = [].slice.call(arguments, 0);
  return ma("isAfter", e);
}
var Xo = function() {
  return Date.now ? Date.now() : +new Date();
}, Ve = [
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
function Ko(e) {
  var t, r = !1, s, a = Ve.length;
  for (t in e)
    if (S(e, t) && !(T.call(Ve, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < a; ++s)
    if (e[Ve[s]]) {
      if (r)
        return !1;
      parseFloat(e[Ve[s]]) !== v(e[Ve[s]]) && (r = !0);
    }
  return !0;
}
function eu() {
  return this._isValid;
}
function tu() {
  return Z(NaN);
}
function Et(e) {
  var t = Rr(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, y = t.millisecond || 0;
  this._isValid = Ko(t), this._milliseconds = +y + c * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = le(), this._bubble();
}
function ot(e) {
  return e instanceof Et;
}
function dr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ru(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && v(e[i]) !== v(t[i])) && n++;
  return n + a;
}
function ya(e, t) {
  m(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + X(~~(r / 60), 2) + t + X(~~r % 60, 2);
  });
}
ya("Z", ":");
ya("ZZ", "");
f("Z", xt);
f("ZZ", xt);
D(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(xt, e);
});
var su = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), s, a, n;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(su) || ["-", 0, 0], n = +(a[1] * 60) + v(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function qr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (z(e) || Xe(e) ? e.valueOf() : k(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), d.updateOffset(r, !1), r) : k(e).local();
}
function fr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function au(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(xt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = fr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? va(
      this,
      Z(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : fr(this);
}
function nu(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function iu(e) {
  return this.utcOffset(0, e);
}
function ou(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fr(this), "m")), this;
}
function uu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(Ti, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function lu(e) {
  return this.isValid() ? (e = e ? k(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function du() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function fu() {
  if (!A(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Yr(e, this), e = ha(e), e._a ? (t = e._isUTC ? K(e._a) : k(e._a), this._isDSTShifted = this.isValid() && ru(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function hu() {
  return this.isValid() ? !this._isUTC : !1;
}
function cu() {
  return this.isValid() ? this._isUTC : !1;
}
function _a() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var mu = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, yu = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Z(e, t) {
  var r = e, s = null, a, n, i;
  return ot(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ue(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = mu.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: v(s[J]) * a,
    h: v(s[x]) * a,
    m: v(s[B]) * a,
    s: v(s[ae]) * a,
    ms: v(dr(s[pe] * 1e3)) * a
  }) : (s = yu.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: _e(s[2], a),
    M: _e(s[3], a),
    w: _e(s[4], a),
    d: _e(s[5], a),
    h: _e(s[6], a),
    m: _e(s[7], a),
    s: _e(s[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = _u(
    k(r.from),
    k(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new Et(r), ot(e) && S(e, "_locale") && (n._locale = e._locale), ot(e) && S(e, "_isValid") && (n._isValid = e._isValid), n;
}
Z.fn = Et.prototype;
Z.invalid = tu;
function _e(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Os(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function _u(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = qr(t, e), e.isBefore(t) ? r = Os(e, t) : (r = Os(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function pa(e, t) {
  return function(r, s) {
    var a, n;
    return s !== null && !isNaN(+s) && (Hs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = s, s = n), a = Z(r, s), va(this, a, e), this;
  };
}
function va(e, t, r, s) {
  var a = t._milliseconds, n = dr(t._days), i = dr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, i && ta(e, ht(e, "Month") + i * r), n && zs(e, "Date", ht(e, "Date") + n * r), a && e._d.setTime(e._d.valueOf() + a * r), s && d.updateOffset(e, n || i));
}
var pu = pa(1, "add"), vu = pa(-1, "subtract");
function ga(e) {
  return typeof e == "string" || e instanceof String;
}
function gu(e) {
  return z(e) || Xe(e) || ga(e) || ue(e) || Su(e) || wu(e) || e === null || e === void 0;
}
function wu(e) {
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
function Su(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !ue(s) && ga(e);
  }).length === 0), t && r;
}
function Ou(e) {
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
function Du(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function ku(e, t) {
  arguments.length === 1 && (arguments[0] ? gu(arguments[0]) ? (e = arguments[0], t = void 0) : Ou(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || k(), s = qr(r, this).startOf("day"), a = d.calendarFormat(this, s) || "sameElse", n = t && (ee(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, k(r))
  );
}
function bu() {
  return new Ke(this);
}
function Mu(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Yu(e, t) {
  var r = z(e) ? e : k(e);
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Tu(e, t, r, s) {
  var a = z(e) ? e : k(e), n = z(t) ? t : k(t);
  return this.isValid() && a.isValid() && n.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s[1] === ")" ? this.isBefore(n, r) : !this.isAfter(n, r))) : !1;
}
function xu(e, t) {
  var r = z(e) ? e : k(e), s;
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Ru(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Pu(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Eu(e, t, r) {
  var s, a, n;
  if (!this.isValid())
    return NaN;
  if (s = qr(e, this), !s.isValid())
    return NaN;
  switch (a = (s.utcOffset() - this.utcOffset()) * 6e4, t = j(t), t) {
    case "year":
      n = ut(this, s) / 12;
      break;
    case "month":
      n = ut(this, s);
      break;
    case "quarter":
      n = ut(this, s) / 3;
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
function ut(e, t) {
  if (e.date() < t.date())
    return -ut(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), a, n;
  return t - s < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - s) / (s - a)) : (a = e.clone().add(r + 1, "months"), n = (t - s) / (a - s)), -(r + n) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Nu() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Fu(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? it(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ee(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", it(r, "Z")) : it(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Au() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + s + a + n);
}
function Lu(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = it(this, e);
  return this.localeData().postformat(t);
}
function Cu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? Z({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Wu(e) {
  return this.from(k(), e);
}
function Uu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? Z({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Iu(e) {
  return this.to(k(), e);
}
function wa(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = le(e), t != null && (this._locale = t), this);
}
var Sa = $(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Oa() {
  return this._locale;
}
var yt = 1e3, Ee = 60 * yt, _t = 60 * Ee, Da = (365 * 400 + 97) * 24 * _t;
function Ne(e, t) {
  return (e % t + t) % t;
}
function ka(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Da : new Date(e, t, r).valueOf();
}
function ba(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Da : Date.UTC(e, t, r);
}
function qu(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ba : ka, e) {
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
      t = this._d.valueOf(), t -= Ne(
        t + (this._isUTC ? 0 : this.utcOffset() * Ee),
        _t
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ne(t, Ee);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ne(t, yt);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function $u(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ba : ka, e) {
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
      t = this._d.valueOf(), t += _t - Ne(
        t + (this._isUTC ? 0 : this.utcOffset() * Ee),
        _t
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ee - Ne(t, Ee) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += yt - Ne(t, yt) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function ju() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Vu() {
  return Math.floor(this.valueOf() / 1e3);
}
function Hu() {
  return new Date(this.valueOf());
}
function Bu() {
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
function Gu() {
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
function zu() {
  return this.isValid() ? this.toISOString() : null;
}
function Zu() {
  return Mr(this);
}
function Ju() {
  return he({}, p(this));
}
function Qu() {
  return p(this).overflow;
}
function Xu() {
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
f("NNNN", ll);
f("NNNNN", dl);
D(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var a = r._locale.erasParse(e, s, r._strict);
    a ? p(r).era = a : p(r).invalidEra = e;
  }
);
f("y", We);
f("yy", We);
f("yyy", We);
f("yyyy", We);
f("yo", fl);
D(["y", "yy", "yyy", "yyyy"], E);
D(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[E] = r._locale.eraYearOrdinalParse(e, a) : t[E] = parseInt(e, 10);
});
function Ku(e, t) {
  var r, s, a, n = this._eras || le("en")._eras;
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
function el(e, t, r) {
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
function tl(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * r;
}
function rl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function sl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function al() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function nl() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - d(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function il(e) {
  return S(this, "_erasNameRegex") || jr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ol(e) {
  return S(this, "_erasAbbrRegex") || jr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ul(e) {
  return S(this, "_erasNarrowRegex") || jr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function $r(e, t) {
  return t.erasAbbrRegex(e);
}
function ll(e, t) {
  return t.erasNameRegex(e);
}
function dl(e, t) {
  return t.erasNarrowRegex(e);
}
function fl(e, t) {
  return t._eraYearOrdinalRegex || We;
}
function jr() {
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
function Nt(e, t) {
  m(0, [e, e.length], 0, t);
}
Nt("gggg", "weekYear");
Nt("ggggg", "weekYear");
Nt("GGGG", "isoWeekYear");
Nt("GGGGG", "isoWeekYear");
N("weekYear", "gg");
N("isoWeekYear", "GG");
F("weekYear", 1);
F("isoWeekYear", 1);
f("G", Tt);
f("g", Tt);
f("GG", b, U);
f("gg", b, U);
f("GGGG", Er, Pr);
f("gggg", Er, Pr);
f("GGGGG", Yt, bt);
f("ggggg", Yt, bt);
tt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = v(e);
  }
);
tt(["gg", "GG"], function(e, t, r, s) {
  t[s] = d.parseTwoDigitYear(e);
});
function hl(e) {
  return Ma.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function cl(e) {
  return Ma.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ml() {
  return oe(this.year(), 1, 4);
}
function yl() {
  return oe(this.isoWeekYear(), 1, 4);
}
function _l() {
  var e = this.localeData()._week;
  return oe(this.year(), e.dow, e.doy);
}
function pl() {
  var e = this.localeData()._week;
  return oe(this.weekYear(), e.dow, e.doy);
}
function Ma(e, t, r, s, a) {
  var n;
  return e == null ? Ze(this, s, a).year : (n = oe(e, s, a), t > n && (t = n), vl.call(this, e, t, r, s, a));
}
function vl(e, t, r, s, a) {
  var n = na(e, t, r, s, a), i = ze(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
m("Q", 0, "Qo", "quarter");
N("quarter", "Q");
F("quarter", 7);
f("Q", Zs);
D("Q", function(e, t) {
  t[se] = (v(e) - 1) * 3;
});
function gl(e) {
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
var Ya = Ce("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
F("dayOfYear", 4);
f("DDD", Mt);
f("DDDD", Js);
D(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = v(e);
});
function wl(e) {
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
var Sl = Ce("Minutes", !1);
m("s", ["ss", 2], 0, "second");
N("second", "s");
F("second", 15);
f("s", b);
f("ss", b, U);
D(["s", "ss"], ae);
var Ol = Ce("Seconds", !1);
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
f("S", Mt, Zs);
f("SS", Mt, U);
f("SSS", Mt, Js);
var ce, Ta;
for (ce = "SSSS"; ce.length <= 9; ce += "S")
  f(ce, We);
function Dl(e, t) {
  t[pe] = v(("0." + e) * 1e3);
}
for (ce = "S"; ce.length <= 9; ce += "S")
  D(ce, Dl);
Ta = Ce("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function kl() {
  return this._isUTC ? "UTC" : "";
}
function bl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Ke.prototype;
l.add = pu;
l.calendar = ku;
l.clone = bu;
l.diff = Eu;
l.endOf = $u;
l.format = Lu;
l.from = Cu;
l.fromNow = Wu;
l.to = Uu;
l.toNow = Iu;
l.get = Mi;
l.invalidAt = Qu;
l.isAfter = Mu;
l.isBefore = Yu;
l.isBetween = Tu;
l.isSame = xu;
l.isSameOrAfter = Ru;
l.isSameOrBefore = Pu;
l.isValid = Zu;
l.lang = Sa;
l.locale = wa;
l.localeData = Oa;
l.max = Zo;
l.min = zo;
l.parsingFlags = Ju;
l.set = Yi;
l.startOf = qu;
l.subtract = vu;
l.toArray = Bu;
l.toObject = Gu;
l.toDate = Hu;
l.toISOString = Fu;
l.inspect = Au;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = zu;
l.toString = Nu;
l.unix = Vu;
l.valueOf = ju;
l.creationData = Xu;
l.eraName = rl;
l.eraNarrow = sl;
l.eraAbbr = al;
l.eraYear = nl;
l.year = aa;
l.isLeapYear = Bi;
l.weekYear = hl;
l.isoWeekYear = cl;
l.quarter = l.quarters = gl;
l.month = ra;
l.daysInMonth = ji;
l.week = l.weeks = Xi;
l.isoWeek = l.isoWeeks = Ki;
l.weeksInYear = _l;
l.weeksInWeekYear = pl;
l.isoWeeksInYear = ml;
l.isoWeeksInISOWeekYear = yl;
l.date = Ya;
l.day = l.days = co;
l.weekday = mo;
l.isoWeekday = yo;
l.dayOfYear = wl;
l.hour = l.hours = Oo;
l.minute = l.minutes = Sl;
l.second = l.seconds = Ol;
l.millisecond = l.milliseconds = Ta;
l.utcOffset = au;
l.utc = iu;
l.local = ou;
l.parseZone = uu;
l.hasAlignedHourOffset = lu;
l.isDST = du;
l.isLocal = hu;
l.isUtcOffset = cu;
l.isUtc = _a;
l.isUTC = _a;
l.zoneAbbr = kl;
l.zoneName = bl;
l.dates = $(
  "dates accessor is deprecated. Use date instead.",
  Ya
);
l.months = $(
  "months accessor is deprecated. Use month instead",
  ra
);
l.years = $(
  "years accessor is deprecated. Use year instead",
  aa
);
l.zone = $(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  nu
);
l.isDSTShifted = $(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  fu
);
function Ml(e) {
  return k(e * 1e3);
}
function Yl() {
  return k.apply(null, arguments).parseZone();
}
function xa(e) {
  return e;
}
var O = Tr.prototype;
O.calendar = hi;
O.longDateFormat = _i;
O.invalidDate = vi;
O.ordinal = Si;
O.preparse = xa;
O.postformat = xa;
O.relativeTime = Di;
O.pastFuture = ki;
O.set = di;
O.eras = Ku;
O.erasParse = el;
O.erasConvertYear = tl;
O.erasAbbrRegex = ol;
O.erasNameRegex = il;
O.erasNarrowRegex = ul;
O.months = Ui;
O.monthsShort = Ii;
O.monthsParse = $i;
O.monthsRegex = Hi;
O.monthsShortRegex = Vi;
O.week = zi;
O.firstDayOfYear = Qi;
O.firstDayOfWeek = Ji;
O.weekdays = oo;
O.weekdaysMin = lo;
O.weekdaysShort = uo;
O.weekdaysParse = ho;
O.weekdaysRegex = _o;
O.weekdaysShortRegex = po;
O.weekdaysMinRegex = vo;
O.isPM = wo;
O.meridiem = Do;
function pt(e, t, r, s) {
  var a = le(), n = K().set(s, t);
  return a[r](n, e);
}
function Ra(e, t, r) {
  if (ue(e) && (t = e, e = void 0), e = e || "", t != null)
    return pt(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = pt(e, s, r, "month");
  return a;
}
function Vr(e, t, r, s) {
  typeof e == "boolean" ? (ue(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, ue(t) && (r = t, t = void 0), t = t || "");
  var a = le(), n = e ? a._week.dow : 0, i, o = [];
  if (r != null)
    return pt(t, (r + n) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = pt(t, (i + n) % 7, s, "day");
  return o;
}
function Tl(e, t) {
  return Ra(e, t, "months");
}
function xl(e, t) {
  return Ra(e, t, "monthsShort");
}
function Rl(e, t, r) {
  return Vr(e, t, r, "weekdays");
}
function Pl(e, t, r) {
  return Vr(e, t, r, "weekdaysShort");
}
function El(e, t, r) {
  return Vr(e, t, r, "weekdaysMin");
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
  le
);
var te = Math.abs;
function Nl() {
  var e = this._data;
  return this._milliseconds = te(this._milliseconds), this._days = te(this._days), this._months = te(this._months), e.milliseconds = te(e.milliseconds), e.seconds = te(e.seconds), e.minutes = te(e.minutes), e.hours = te(e.hours), e.months = te(e.months), e.years = te(e.years), this;
}
function Pa(e, t, r, s) {
  var a = Z(t, r);
  return e._milliseconds += s * a._milliseconds, e._days += s * a._days, e._months += s * a._months, e._bubble();
}
function Fl(e, t) {
  return Pa(this, e, t, 1);
}
function Al(e, t) {
  return Pa(this, e, t, -1);
}
function Ds(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ll() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, n, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Ds(hr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = q(e / 1e3), s.seconds = a % 60, n = q(a / 60), s.minutes = n % 60, i = q(n / 60), s.hours = i % 24, t += q(i / 24), u = q(Ea(t)), r += u, t -= Ds(hr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function Ea(e) {
  return e * 4800 / 146097;
}
function hr(e) {
  return e * 146097 / 4800;
}
function Cl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = j(e), e === "month" || e === "quarter" || e === "year")
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
function Wl() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function de(e) {
  return function() {
    return this.as(e);
  };
}
var Ul = de("ms"), Il = de("s"), ql = de("m"), $l = de("h"), jl = de("d"), Vl = de("w"), Hl = de("M"), Bl = de("Q"), Gl = de("y");
function zl() {
  return Z(this);
}
function Zl(e) {
  return e = j(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Oe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Jl = Oe("milliseconds"), Ql = Oe("seconds"), Xl = Oe("minutes"), Kl = Oe("hours"), ed = Oe("days"), td = Oe("months"), rd = Oe("years");
function sd() {
  return q(this.days() / 7);
}
var re = Math.round, Re = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function ad(e, t, r, s, a) {
  return a.relativeTime(t || 1, !!r, e, s);
}
function nd(e, t, r, s) {
  var a = Z(e).abs(), n = re(a.as("s")), i = re(a.as("m")), o = re(a.as("h")), u = re(a.as("d")), c = re(a.as("M")), y = re(a.as("w")), g = re(a.as("y")), h = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (h = h || y <= 1 && ["w"] || y < r.w && ["ww", y]), h = h || c <= 1 && ["M"] || c < r.M && ["MM", c] || g <= 1 && ["y"] || ["yy", g], h[2] = t, h[3] = +e > 0, h[4] = s, ad.apply(null, h);
}
function id(e) {
  return e === void 0 ? re : typeof e == "function" ? (re = e, !0) : !1;
}
function od(e, t) {
  return Re[e] === void 0 ? !1 : t === void 0 ? Re[e] : (Re[e] = t, e === "s" && (Re.ss = t - 1), !0);
}
function ud(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Re, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Re, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), n = nd(this, !r, s, a), r && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var rr = Math.abs;
function Te(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ft() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = rr(this._milliseconds) / 1e3, t = rr(this._days), r = rr(this._months), s, a, n, i, o = this.asSeconds(), u, c, y, g;
  return o ? (s = q(e / 60), a = q(s / 60), e %= 60, s %= 60, n = q(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", c = Te(this._months) !== Te(o) ? "-" : "", y = Te(this._days) !== Te(o) ? "-" : "", g = Te(this._milliseconds) !== Te(o) ? "-" : "", u + "P" + (n ? c + n + "Y" : "") + (r ? c + r + "M" : "") + (t ? y + t + "D" : "") + (a || s || e ? "T" : "") + (a ? g + a + "H" : "") + (s ? g + s + "M" : "") + (e ? g + i + "S" : "")) : "P0D";
}
var w = Et.prototype;
w.isValid = eu;
w.abs = Nl;
w.add = Fl;
w.subtract = Al;
w.as = Cl;
w.asMilliseconds = Ul;
w.asSeconds = Il;
w.asMinutes = ql;
w.asHours = $l;
w.asDays = jl;
w.asWeeks = Vl;
w.asMonths = Hl;
w.asQuarters = Bl;
w.asYears = Gl;
w.valueOf = Wl;
w._bubble = Ll;
w.clone = zl;
w.get = Zl;
w.milliseconds = Jl;
w.seconds = Ql;
w.minutes = Xl;
w.hours = Kl;
w.days = ed;
w.weeks = sd;
w.months = td;
w.years = rd;
w.humanize = ud;
w.toISOString = Ft;
w.toString = Ft;
w.toJSON = Ft;
w.locale = wa;
w.localeData = Oa;
w.toIsoString = $(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ft
);
w.lang = Sa;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
f("x", Tt);
f("X", xi);
D("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
D("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
d.version = "2.29.4";
ui(k);
d.fn = l;
d.min = Jo;
d.max = Qo;
d.now = Xo;
d.utc = K;
d.unix = Ml;
d.months = Tl;
d.isDate = Xe;
d.locale = me;
d.invalid = Dt;
d.duration = Z;
d.isMoment = z;
d.weekdays = Rl;
d.parseZone = Yl;
d.localeData = le;
d.isDuration = ot;
d.monthsShort = xl;
d.weekdaysMin = El;
d.defineLocale = Lr;
d.updateLocale = Yo;
d.locales = To;
d.weekdaysShort = Pl;
d.normalizeUnits = j;
d.relativeTimeRounding = id;
d.relativeTimeThreshold = od;
d.calendarFormat = Du;
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
const ld = {
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
function dd(e, t, r, s, a, n) {
  const i = ge("o-datepicker");
  return ne(), Qe(i, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const fd = /* @__PURE__ */ Se(ld, [["render", dd]]), hd = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, cd = /* @__PURE__ */ mr(" An error occurred. Try again? ");
function md(e, t, r, s, a, n) {
  const i = ge("o-loading"), o = ge("o-button");
  return ne(), dt("div", null, [
    r.form.isLoaded.value ? (ne(), dt("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = qa((u) => e.$emit("submit"), ["prevent"]))
    }, [
      lt(e.$slots, "default")
    ], 32)) : He("", !0),
    ks(i, {
      active: r.form.isLoading.value
    }, null, 8, ["active"]),
    !r.form.isLoaded.value && !r.form.isLoading.value ? (ne(), Qe(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: cr(() => [
        cd
      ]),
      _: 1
    })) : He("", !0)
  ]);
}
const yd = /* @__PURE__ */ Se(hd, [["render", md]]), _d = {
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
}, pd = ["width", "height"];
function vd(e, t, r, s, a, n) {
  return ne(), dt("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, pd);
}
const gd = /* @__PURE__ */ Se(_d, [["render", vd]]), wd = {
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
function Sd(e, t, r, s, a, n) {
  const i = ge("o-input"), o = ge("o-field");
  return ne(), Qe(o, sr({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: cr(() => [
      ks(i, sr(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => s.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const Od = /* @__PURE__ */ Se(wd, [["render", Sd]]), Dd = {
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
      search: Ot.create()
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
function kd(e, t, r, s, a, n) {
  const i = ge("o-inputitems");
  return ne(), Qe(i, sr(e.$attrs, {
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
const bd = /* @__PURE__ */ Se(Dd, [["render", kd]]), Td = {
  AutoCompleteSearch: Ot,
  FormBuilder: kr,
  ResourceList: Jn,
  Listing: Qn,
  useFormErrors: Dr,
  WyxosButton: si,
  WyxosCollection: oi,
  WyxosDatepicker: fd,
  WyxosForm: yd,
  WyxosImage: gd,
  WyxosInput: Od,
  WyxosTags: bd
};
export {
  Ot as AutoCompleteSearch,
  kr as FormBuilder,
  Qn as Listing,
  Jn as ResourceList,
  si as WyxosButton,
  oi as WyxosCollection,
  fd as WyxosDatepicker,
  yd as WyxosForm,
  gd as WyxosImage,
  Od as WyxosInput,
  bd as WyxosTags,
  Td as default,
  Dr as useFormErrors
};
