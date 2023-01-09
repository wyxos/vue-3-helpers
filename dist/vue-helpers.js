var Ja = Object.defineProperty;
var Za = (e, t, r) => t in e ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var O = (e, t, r) => (Za(e, typeof t != "symbol" ? t + "" : t, r), r);
import { reactive as ie, ref as gr, resolveComponent as le, openBlock as Q, createBlock as We, withCtx as Pe, renderSlot as mt, createCommentVNode as ze, createElementBlock as yt, createTextVNode as Xe, normalizeProps as Qa, guardReactiveProps as Xa, createElementVNode as Je, withModifiers as Ka, createVNode as pt, mergeProps as dr, toDisplayString as it } from "vue";
function en(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ts = { exports: {} }, wr = { exports: {} }, Rs = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), n = 0; n < a.length; n++)
      a[n] = arguments[n];
    return t.apply(r, a);
  };
}, tn = Rs, Sr = Object.prototype.toString, br = function(e) {
  return function(t) {
    var r = Sr.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function be(e) {
  return e = e.toLowerCase(), function(r) {
    return br(r) === e;
  };
}
function Or(e) {
  return Array.isArray(e);
}
function _t(e) {
  return typeof e > "u";
}
function rn(e) {
  return e !== null && !_t(e) && e.constructor !== null && !_t(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Es = be("ArrayBuffer");
function sn(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Es(e.buffer), t;
}
function an(e) {
  return typeof e == "string";
}
function nn(e) {
  return typeof e == "number";
}
function Ps(e) {
  return e !== null && typeof e == "object";
}
function lt(e) {
  if (br(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var on = be("Date"), un = be("File"), ln = be("Blob"), dn = be("FileList");
function kr(e) {
  return Sr.call(e) === "[object Function]";
}
function hn(e) {
  return Ps(e) && kr(e.pipe);
}
function fn(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Sr.call(e) === t || kr(e.toString) && e.toString() === t);
}
var cn = be("URLSearchParams");
function mn(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function yn() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Dr(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Or(e))
      for (var r = 0, s = e.length; r < s; r++)
        t.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
}
function hr() {
  var e = {};
  function t(a, n) {
    lt(e[n]) && lt(a) ? e[n] = hr(e[n], a) : lt(a) ? e[n] = hr({}, a) : Or(a) ? e[n] = a.slice() : e[n] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Dr(arguments[r], t);
  return e;
}
function pn(e, t, r) {
  return Dr(t, function(a, n) {
    r && typeof a == "function" ? e[n] = tn(a, r) : e[n] = a;
  }), e;
}
function _n(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function vn(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function gn(e, t, r) {
  var s, a, n, i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      n = s[a], i[n] || (t[n] = e[n], i[n] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function wn(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function Sn(e) {
  if (!e)
    return null;
  var t = e.length;
  if (_t(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var bn = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), E = {
  isArray: Or,
  isArrayBuffer: Es,
  isBuffer: rn,
  isFormData: fn,
  isArrayBufferView: sn,
  isString: an,
  isNumber: nn,
  isObject: Ps,
  isPlainObject: lt,
  isUndefined: _t,
  isDate: on,
  isFile: un,
  isBlob: ln,
  isFunction: kr,
  isStream: hn,
  isURLSearchParams: cn,
  isStandardBrowserEnv: yn,
  forEach: Dr,
  merge: hr,
  extend: pn,
  trim: mn,
  stripBOM: _n,
  inherits: vn,
  toFlatObject: gn,
  kindOf: br,
  kindOfTest: be,
  endsWith: wn,
  toArray: Sn,
  isTypedArray: bn,
  isFileList: dn
}, xe = E;
function ts(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ns = function(t, r, s) {
  if (!r)
    return t;
  var a;
  if (s)
    a = s(r);
  else if (xe.isURLSearchParams(r))
    a = r.toString();
  else {
    var n = [];
    xe.forEach(r, function(u, h) {
      u === null || typeof u > "u" || (xe.isArray(u) ? h = h + "[]" : u = [u], xe.forEach(u, function(g) {
        xe.isDate(g) ? g = g.toISOString() : xe.isObject(g) && (g = JSON.stringify(g)), n.push(ts(h) + "=" + ts(g));
      }));
    }), a = n.join("&");
  }
  if (a) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, On = E;
function kt() {
  this.handlers = [];
}
kt.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
kt.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
kt.prototype.forEach = function(t) {
  On.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var kn = kt, Dn = E, Mn = function(t, r) {
  Dn.forEach(t, function(a, n) {
    n !== r && n.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[n]);
  });
}, Fs = E;
function Ce(e, t, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Fs.inherits(Ce, Error, {
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
var As = Ce.prototype, Cs = {};
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
  Cs[e] = { value: e };
});
Object.defineProperties(Ce, Cs);
Object.defineProperty(As, "isAxiosError", { value: !0 });
Ce.from = function(e, t, r, s, a, n) {
  var i = Object.create(As);
  return Fs.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), Ce.call(i, e.message, t, r, s, a), i.name = e.name, n && Object.assign(i, n), i;
};
var Ue = Ce, Ls = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H = E;
function xn(e, t) {
  t = t || new FormData();
  var r = [];
  function s(n) {
    return n === null ? "" : H.isDate(n) ? n.toISOString() : H.isArrayBuffer(n) || H.isTypedArray(n) ? typeof Blob == "function" ? new Blob([n]) : Buffer.from(n) : n;
  }
  function a(n, i) {
    if (H.isPlainObject(n) || H.isArray(n)) {
      if (r.indexOf(n) !== -1)
        throw Error("Circular reference detected in " + i);
      r.push(n), H.forEach(n, function(u, h) {
        if (!H.isUndefined(u)) {
          var m = i ? i + "." + h : h, g;
          if (u && !i && typeof u == "object") {
            if (H.endsWith(h, "{}"))
              u = JSON.stringify(u);
            else if (H.endsWith(h, "[]") && (g = H.toArray(u))) {
              g.forEach(function(c) {
                !H.isUndefined(c) && t.append(m, s(c));
              });
              return;
            }
          }
          a(u, m);
        }
      }), r.pop();
    } else
      t.append(i, s(n));
  }
  return a(e), t;
}
var Ws = xn, Ht, rs;
function Yn() {
  if (rs)
    return Ht;
  rs = 1;
  var e = Ue;
  return Ht = function(r, s, a) {
    var n = a.config.validateStatus;
    !a.status || !n || n(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ht;
}
var Bt, ss;
function Tn() {
  if (ss)
    return Bt;
  ss = 1;
  var e = E;
  return Bt = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, n, i, o, u) {
        var h = [];
        h.push(s + "=" + encodeURIComponent(a)), e.isNumber(n) && h.push("expires=" + new Date(n).toGMTString()), e.isString(i) && h.push("path=" + i), e.isString(o) && h.push("domain=" + o), u === !0 && h.push("secure"), document.cookie = h.join("; ");
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
  }(), Bt;
}
var Rn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, En = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, Pn = Rn, Nn = En, Us = function(t, r) {
  return t && !Pn(r) ? Nn(t, r) : r;
}, Gt, as;
function Fn() {
  if (as)
    return Gt;
  as = 1;
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
  return Gt = function(s) {
    var a = {}, n, i, o;
    return s && e.forEach(s.split(`
`), function(h) {
      if (o = h.indexOf(":"), n = e.trim(h.substr(0, o)).toLowerCase(), i = e.trim(h.substr(o + 1)), n) {
        if (a[n] && t.indexOf(n) >= 0)
          return;
        n === "set-cookie" ? a[n] = (a[n] ? a[n] : []).concat([i]) : a[n] = a[n] ? a[n] + ", " + i : i;
      }
    }), a;
  }, Gt;
}
var zt, ns;
function An() {
  if (ns)
    return zt;
  ns = 1;
  var e = E;
  return zt = e.isStandardBrowserEnv() ? function() {
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
  }(), zt;
}
var Jt, is;
function Dt() {
  if (is)
    return Jt;
  is = 1;
  var e = Ue, t = E;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Jt = r, Jt;
}
var Zt, os;
function Cn() {
  return os || (os = 1, Zt = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Zt;
}
var Qt, us;
function ls() {
  if (us)
    return Qt;
  us = 1;
  var e = E, t = Yn(), r = Tn(), s = Ns, a = Us, n = Fn(), i = An(), o = Ls, u = Ue, h = Dt(), m = Cn();
  return Qt = function(c) {
    return new Promise(function(Ha, ke) {
      var $e = c.data, je = c.headers, Ve = c.responseType, De;
      function Xr() {
        c.cancelToken && c.cancelToken.unsubscribe(De), c.signal && c.signal.removeEventListener("abort", De);
      }
      e.isFormData($e) && e.isStandardBrowserEnv() && delete je["Content-Type"];
      var p = new XMLHttpRequest();
      if (c.auth) {
        var Ba = c.auth.username || "", Ga = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
        je.Authorization = "Basic " + btoa(Ba + ":" + Ga);
      }
      var $t = a(c.baseURL, c.url);
      p.open(c.method.toUpperCase(), s($t, c.params, c.paramsSerializer), !0), p.timeout = c.timeout;
      function Kr() {
        if (!!p) {
          var V = "getAllResponseHeaders" in p ? n(p.getAllResponseHeaders()) : null, Me = !Ve || Ve === "text" || Ve === "json" ? p.responseText : p.response, ve = {
            data: Me,
            status: p.status,
            statusText: p.statusText,
            headers: V,
            config: c,
            request: p
          };
          t(function(Vt) {
            Ha(Vt), Xr();
          }, function(Vt) {
            ke(Vt), Xr();
          }, ve), p = null;
        }
      }
      if ("onloadend" in p ? p.onloadend = Kr : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(Kr);
      }, p.onabort = function() {
        !p || (ke(new u("Request aborted", u.ECONNABORTED, c, p)), p = null);
      }, p.onerror = function() {
        ke(new u("Network Error", u.ERR_NETWORK, c, p, p)), p = null;
      }, p.ontimeout = function() {
        var Me = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded", ve = c.transitional || o;
        c.timeoutErrorMessage && (Me = c.timeoutErrorMessage), ke(new u(
          Me,
          ve.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          c,
          p
        )), p = null;
      }, e.isStandardBrowserEnv()) {
        var es = (c.withCredentials || i($t)) && c.xsrfCookieName ? r.read(c.xsrfCookieName) : void 0;
        es && (je[c.xsrfHeaderName] = es);
      }
      "setRequestHeader" in p && e.forEach(je, function(Me, ve) {
        typeof $e > "u" && ve.toLowerCase() === "content-type" ? delete je[ve] : p.setRequestHeader(ve, Me);
      }), e.isUndefined(c.withCredentials) || (p.withCredentials = !!c.withCredentials), Ve && Ve !== "json" && (p.responseType = c.responseType), typeof c.onDownloadProgress == "function" && p.addEventListener("progress", c.onDownloadProgress), typeof c.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", c.onUploadProgress), (c.cancelToken || c.signal) && (De = function(V) {
        !p || (ke(!V || V && V.type ? new h() : V), p.abort(), p = null);
      }, c.cancelToken && c.cancelToken.subscribe(De), c.signal && (c.signal.aborted ? De() : c.signal.addEventListener("abort", De))), $e || ($e = null);
      var jt = m($t);
      if (jt && ["http", "https", "file"].indexOf(jt) === -1) {
        ke(new u("Unsupported protocol " + jt + ":", u.ERR_BAD_REQUEST, c));
        return;
      }
      p.send($e);
    });
  }, Qt;
}
var Xt, ds;
function Ln() {
  return ds || (ds = 1, Xt = null), Xt;
}
var R = E, hs = Mn, fs = Ue, Wn = Ls, Un = Ws, In = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cs(e, t) {
  !R.isUndefined(e) && R.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function qn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ls()), e;
}
function $n(e, t, r) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Mt = {
  transitional: Wn,
  adapter: qn(),
  transformRequest: [function(t, r) {
    if (hs(r, "Accept"), hs(r, "Content-Type"), R.isFormData(t) || R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return cs(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = R.isObject(t), a = r && r["Content-Type"], n;
    if ((n = R.isFileList(t)) || s && a === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return Un(n ? { "files[]": t } : t, i && new i());
    } else if (s || a === "application/json")
      return cs(r, "application/json"), $n(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || Mt.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, n = !s && this.responseType === "json";
    if (n || a && R.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (n)
          throw i.name === "SyntaxError" ? fs.from(i, fs.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ln()
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
  Mt.headers[t] = {};
});
R.forEach(["post", "put", "patch"], function(t) {
  Mt.headers[t] = R.merge(In);
});
var Mr = Mt, jn = E, Vn = Mr, Hn = function(t, r, s) {
  var a = this || Vn;
  return jn.forEach(s, function(i) {
    t = i.call(a, t, r);
  }), t;
}, Kt, ms;
function Is() {
  return ms || (ms = 1, Kt = function(t) {
    return !!(t && t.__CANCEL__);
  }), Kt;
}
var ys = E, er = Hn, Bn = Is(), Gn = Mr, zn = Dt();
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new zn();
}
var Jn = function(t) {
  tr(t), t.headers = t.headers || {}, t.data = er.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = ys.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), ys.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete t.headers[a];
    }
  );
  var r = t.adapter || Gn.adapter;
  return r(t).then(function(a) {
    return tr(t), a.data = er.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return Bn(a) || (tr(t), a && a.response && (a.response.data = er.call(
      t,
      a.response.data,
      a.response.headers,
      t.transformResponse
    ))), Promise.reject(a);
  });
}, L = E, qs = function(t, r) {
  r = r || {};
  var s = {};
  function a(m, g) {
    return L.isPlainObject(m) && L.isPlainObject(g) ? L.merge(m, g) : L.isPlainObject(g) ? L.merge({}, g) : L.isArray(g) ? g.slice() : g;
  }
  function n(m) {
    if (L.isUndefined(r[m])) {
      if (!L.isUndefined(t[m]))
        return a(void 0, t[m]);
    } else
      return a(t[m], r[m]);
  }
  function i(m) {
    if (!L.isUndefined(r[m]))
      return a(void 0, r[m]);
  }
  function o(m) {
    if (L.isUndefined(r[m])) {
      if (!L.isUndefined(t[m]))
        return a(void 0, t[m]);
    } else
      return a(void 0, r[m]);
  }
  function u(m) {
    if (m in r)
      return a(t[m], r[m]);
    if (m in t)
      return a(void 0, t[m]);
  }
  var h = {
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
    var c = h[g] || n, I = c(g);
    L.isUndefined(I) && c !== u || (s[g] = I);
  }), s;
}, rr, ps;
function $s() {
  return ps || (ps = 1, rr = {
    version: "0.27.2"
  }), rr;
}
var Zn = $s().version, ce = Ue, xr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  xr[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var _s = {};
xr.transitional = function(t, r, s) {
  function a(n, i) {
    return "[Axios v" + Zn + "] Transitional option '" + n + "'" + i + (s ? ". " + s : "");
  }
  return function(n, i, o) {
    if (t === !1)
      throw new ce(
        a(i, " has been removed" + (r ? " in " + r : "")),
        ce.ERR_DEPRECATED
      );
    return r && !_s[i] && (_s[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, i, o) : !0;
  };
};
function Qn(e, t, r) {
  if (typeof e != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var n = s[a], i = t[n];
    if (i) {
      var o = e[n], u = o === void 0 || i(o, n, e);
      if (u !== !0)
        throw new ce("option " + n + " must be " + u, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ce("Unknown option " + n, ce.ERR_BAD_OPTION);
  }
}
var Xn = {
  assertOptions: Qn,
  validators: xr
}, js = E, Kn = Ns, vs = kn, gs = Jn, xt = qs, ei = Us, Vs = Xn, Ye = Vs.validators;
function Le(e) {
  this.defaults = e, this.interceptors = {
    request: new vs(),
    response: new vs()
  };
}
Le.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = xt(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Vs.assertOptions(s, {
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
    var u = [gs, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(i), o = Promise.resolve(r); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var h = r; a.length; ) {
    var m = a.shift(), g = a.shift();
    try {
      h = m(h);
    } catch (c) {
      g(c);
      break;
    }
  }
  try {
    o = gs(h);
  } catch (c) {
    return Promise.reject(c);
  }
  for (; i.length; )
    o = o.then(i.shift(), i.shift());
  return o;
};
Le.prototype.getUri = function(t) {
  t = xt(this.defaults, t);
  var r = ei(t.baseURL, t.url);
  return Kn(r, t.params, t.paramsSerializer);
};
js.forEach(["delete", "get", "head", "options"], function(t) {
  Le.prototype[t] = function(r, s) {
    return this.request(xt(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
js.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(n, i, o) {
      return this.request(xt(o || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: n,
        data: i
      }));
    };
  }
  Le.prototype[t] = r(), Le.prototype[t + "Form"] = r(!0);
});
var ti = Le, sr, ws;
function ri() {
  if (ws)
    return sr;
  ws = 1;
  var e = Dt();
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
  }, sr = t, sr;
}
var ar, Ss;
function si() {
  return Ss || (Ss = 1, ar = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), ar;
}
var nr, bs;
function ai() {
  if (bs)
    return nr;
  bs = 1;
  var e = E;
  return nr = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, nr;
}
var Os = E, ni = Rs, dt = ti, ii = qs, oi = Mr;
function Hs(e) {
  var t = new dt(e), r = ni(dt.prototype.request, t);
  return Os.extend(r, dt.prototype, t), Os.extend(r, t), r.create = function(a) {
    return Hs(ii(e, a));
  }, r;
}
var C = Hs(oi);
C.Axios = dt;
C.CanceledError = Dt();
C.CancelToken = ri();
C.isCancel = Is();
C.VERSION = $s().version;
C.toFormData = Ws;
C.AxiosError = Ue;
C.Cancel = C.CanceledError;
C.all = function(t) {
  return Promise.all(t);
};
C.spread = si();
C.isAxiosError = ai();
wr.exports = C;
wr.exports.default = C;
(function(e) {
  e.exports = wr.exports;
})(Ts);
const oe = /* @__PURE__ */ en(Ts.exports);
class se {
  constructor() {
    O(this, "state", ie({
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
    O(this, "state", new se());
    O(this, "result", gr([]));
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
    return this.customSearch({ payload: t });
  }
  async customSearch({ url: t, payload: r }) {
    this.state.loading(), this.result.value = [];
    const s = t || this.options.url, { data: a } = await oe.post(`${s}/search`, r || this.options.payload).catch((n) => {
      throw this.state.failed(), n;
    });
    this.result.value = a.result, this.state.loaded();
  }
  async restore(t, r) {
    this.state.loading(), this.result.value = [];
    const s = t || this.options.url, { data: a } = await oe.post(`${s}/restore`, r || this.options.payload).catch((n) => {
      throw this.state.failed(), n;
    });
    return this.state.loaded(), a;
  }
  getConfig() {
    return {
      data: this.result.value,
      field: this.options.field
    };
  }
}
const He = ie({
  default: []
});
function Yr() {
  return {
    createBag(e) {
      He[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (He[t] = Object.keys(e.response.data.errors).map((s) => ({
        key: s,
        message: e.response.data.errors[s][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = He[t];
      if (!r)
        return {
          message: "",
          variant: ""
        };
      const s = r.find((a) => Array.isArray(e) ? e.includes(a.key) : a.key === e);
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
        const r = He[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const s = r.findIndex((a) => a.key === e);
        r.splice(s, 1);
        return;
      }
      He[t] = [];
    }
  };
}
class Tt {
  constructor(t) {
    O(this, "loadPath", "");
    O(this, "submitPath", "");
    O(this, "submitMethod", "post");
    O(this, "bag", "");
    O(this, "model", ie({}));
    O(this, "form", ie({}));
    O(this, "original", {});
    O(this, "errors", null);
    O(this, "states", {
      load: new se(),
      submit: new se()
    });
    this.setPath(t.submitPath), this.submitMethod = t.submitMethod, this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form), this.states.load.loaded();
  }
  static create(t) {
    return new Proxy(new Tt(t), {
      get(r, s, a) {
        return Reflect.has(r, s) ? Reflect.get(r, s, a) : s in r.form ? r.form[s] : null;
      },
      set(r, s, a, n) {
        return Reflect.has(r, s) ? Reflect.set(r, s, a, n) : s in r.form ? (r.form[s] = a, !0) : null;
      }
    });
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = Yr(), this.errors.createBag(this.bag);
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
      config: a = {}
    } = t || {};
    this.errors.clear(null, this.bag), this.states.submit.loading();
    const n = JSON.parse(JSON.stringify(this.form)), i = s ? s(n) : n, o = r || this.submitPath;
    if (!o)
      throw this.states.submit.failed(), Error("No url defined.");
    const u = (a == null ? void 0 : a.method) || this.submitMethod || "post", { data: h } = await oe[u](
      o,
      i,
      a
    ).catch((m) => {
      throw this.states.submit.failed(), this.errors.set(m, this.bag), m;
    });
    return this.errors.clear(null, this.bag), this.states.submit.loaded(), h;
  }
  async advancedSubmit(t) {
    this.states.submit.loading();
    const { data: r } = await Promise.resolve(t(oe, this.form)).catch(
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
    const a = r || this.loadPath;
    if (!a)
      throw this.states.load.failed(), Error("Url is not defined for the load method.");
    const { data: n } = await oe.get(a, {
      params: s
    }).catch((i) => {
      throw this.states.load.failed(), i;
    });
    return this.setAttributes(n.form), n.model && Object.assign(this.model, n.model), this.states.load.loaded(), n;
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
class ui {
  constructor() {
    O(this, "structure", {});
    O(this, "query", ie({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    O(this, "params", ie({
      page: 1
    }));
    O(this, "router", null);
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
    const { data: r } = await oe.get(t || this.urls.index, {
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
      const { data: u } = await oe.delete(t, {
        data: o
      }).catch((h) => {
        throw r.isProcessing = !1, h;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await oe.post(t, o).catch((h) => {
        throw r.isProcessing = !1, h;
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
class Tr {
  constructor() {
    O(this, "api", null);
    O(this, "baseUrl", null);
    O(this, "structure", null);
    O(this, "options", null);
    O(this, "states", {
      fetch: new se(),
      filter: new se()
    });
    O(this, "query", ie({
      items: [],
      perPage: 0,
      total: 0
    }));
    O(this, "params", ie({
      page: 1
    }));
    O(this, "state", ie({
      isFilterActive: !1
    }));
  }
  static create(t, r) {
    if (!r)
      throw Error("Listing options have not been provided.");
    const s = new Tr();
    if (!t)
      throw Error("Structure of search query required.");
    return s.structure = Object.assign({}, JSON.parse(JSON.stringify(t))), s.options = Object.assign({
      enableSearchUpdate: !0,
      transformItem: (a) => a
    }, r), Object.assign(s.params, t), s.options.enableSearchUpdate && s.mergeSearch(), s.baseUrl = r.baseUrl, s.api = oe.create(r.axios || {}), s;
  }
  mergeSearch() {
    const t = new URLSearchParams(window.location.search.substring(1)), r = {};
    for (const [s, a] of t.entries())
      a && a !== "null" && (r[s] = a);
    Object.assign(this.params, this.structure, r);
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
    const r = JSON.parse(JSON.stringify(this.params));
    console.log(r);
    const s = t || this.baseUrl, { data: a } = await this.api.get(s, {
      params: r
    }).catch((n) => {
      throw this.states.fetch.failed(), n;
    });
    return this.states.fetch.loaded(), this.options.enableSearchUpdate && this.refreshUrl(), a;
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
    const t = window.location.href.replace(/\?.*/, ""), r = new URLSearchParams(JSON.parse(JSON.stringify(this.params))), s = t + "?" + r.toString();
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
        delete: new se(),
        patch: new se()
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
    const { path: r, props: s, attributes: a } = t, { row: n, index: i } = s, o = {
      id: n.id,
      ...a
    }, { data: u } = await this.api.patch(r || this.baseUrl, o).catch((m) => {
      throw m;
    });
    return u.patch && Object.assign(n, u.patch), (await this.fetch()).query.items.length || (this.params.page--, await this.load()), u;
  }
  async delete(t) {
    const { path: r, props: s, attributes: a } = t, { row: n, index: i } = s, o = {
      id: n.id,
      ...a
    };
    n.states.delete.loading();
    const { data: u } = await this.api.delete(r || this.baseUrl, {
      data: o
    }).catch((m) => {
      throw n.states.delete.failed(), m;
    });
    n.states.delete.loaded(), u.row && Object.assign(n, u.row);
    const h = await this.fetch();
    if (this.query.items.splice(i, 1), !h.query.items.length)
      return this.params.page--, await this.load(), u;
    if (this.query.items.length < h.query.items.length) {
      const m = h.query.items[h.query.items.length - 1];
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
const _e = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of t)
    r[s] = a;
  return r;
}, li = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, di = /* @__PURE__ */ Xe("Submit"), hi = /* @__PURE__ */ Xe("Processing..."), fi = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function ci(e, t, r, s, a, n) {
  const i = le("o-button");
  return Q(), We(i, { disabled: r.loading }, {
    default: Pe(() => [
      r.loading ? ze("", !0) : mt(e.$slots, "default", { key: 0 }, () => [
        di
      ]),
      r.loading ? mt(e.$slots, "loading", { key: 1 }, () => [
        hi
      ]) : ze("", !0),
      r.loading ? (Q(), yt("i", fi)) : ze("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const Bs = /* @__PURE__ */ _e(li, [["render", ci]]), mi = {
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
}, yi = /* @__PURE__ */ Je("ul", null, [
  /* @__PURE__ */ Je("li")
], -1);
function pi(e, t, r, s, a, n) {
  return mt(e.$slots, "default", Qa(Xa({ add: n.add, remove: n.remove, items: a.items })), () => [
    yi
  ]);
}
const Gs = /* @__PURE__ */ _e(mi, [["render", pi]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var zs;
function d() {
  return zs.apply(null, arguments);
}
function _i(e) {
  zs = e;
}
function G(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Se(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Rr(e) {
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
function de(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function rt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Js(e, t) {
  var r = [], s, a = e.length;
  for (s = 0; s < a; ++s)
    r.push(t(e[s], s));
  return r;
}
function me(e, t) {
  for (var r in t)
    S(t, r) && (e[r] = t[r]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function K(e, t, r, s) {
  return ga(e, t, r, s, !0).utc();
}
function vi() {
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
  return e._pf == null && (e._pf = vi()), e._pf;
}
var fr;
Array.prototype.some ? fr = Array.prototype.some : fr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function Er(e) {
  if (e._isValid == null) {
    var t = _(e), r = fr.call(t.parsedDateParts, function(a) {
      return a != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function Rt(e) {
  var t = K(NaN);
  return e != null ? me(_(t), e) : _(t).userInvalidated = !0, t;
}
var ks = d.momentProperties = [], ir = !1;
function Pr(e, t) {
  var r, s, a, n = ks.length;
  if (A(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), A(t._i) || (e._i = t._i), A(t._f) || (e._f = t._f), A(t._l) || (e._l = t._l), A(t._strict) || (e._strict = t._strict), A(t._tzm) || (e._tzm = t._tzm), A(t._isUTC) || (e._isUTC = t._isUTC), A(t._offset) || (e._offset = t._offset), A(t._pf) || (e._pf = _(t)), A(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      s = ks[r], a = t[s], A(a) || (e[s] = a);
  return e;
}
function st(e) {
  Pr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ir === !1 && (ir = !0, d.updateOffset(this), ir = !1);
}
function z(e) {
  return e instanceof st || e != null && e._isAMomentObject != null;
}
function Zs(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function $(e, t) {
  var r = !0;
  return me(function() {
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
      Zs(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ds = {};
function Qs(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Ds[e] || (Zs(t), Ds[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function ee(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function gi(e) {
  var t, r;
  for (r in e)
    S(e, r) && (t = e[r], ee(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function cr(e, t) {
  var r = me({}, e), s;
  for (s in t)
    S(t, s) && (Se(e[s]) && Se(t[s]) ? (r[s] = {}, me(r[s], e[s]), me(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    S(e, s) && !S(t, s) && Se(e[s]) && (r[s] = me({}, r[s]));
  return r;
}
function Nr(e) {
  e != null && this.set(e);
}
var mr;
Object.keys ? mr = Object.keys : mr = function(e) {
  var t, r = [];
  for (t in e)
    S(e, t) && r.push(t);
  return r;
};
var wi = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Si(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ee(s) ? s.call(t, r) : s;
}
function X(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var Fr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ot = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, or = {}, Ne = {};
function y(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Ne[e] = a), t && (Ne[t[0]] = function() {
    return X(a.apply(this, arguments), t[1], t[2]);
  }), r && (Ne[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function bi(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Oi(e) {
  var t = e.match(Fr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Ne[t[r]] ? t[r] = Ne[t[r]] : t[r] = bi(t[r]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < s; i++)
      n += ee(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function ht(e, t) {
  return e.isValid() ? (t = Xs(t, e.localeData()), or[t] = or[t] || Oi(t), or[t](e)) : e.localeData().invalidDate();
}
function Xs(e, t) {
  var r = 5;
  function s(a) {
    return t.longDateFormat(a) || a;
  }
  for (ot.lastIndex = 0; r >= 0 && ot.test(e); )
    e = e.replace(
      ot,
      s
    ), ot.lastIndex = 0, r -= 1;
  return e;
}
var ki = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Di(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Fr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var Mi = "Invalid date";
function xi() {
  return this._invalidDate;
}
var Yi = "%d", Ti = /\d{1,2}/;
function Ri(e) {
  return this._ordinal.replace("%d", e);
}
var Ei = {
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
function Pi(e, t, r, s) {
  var a = this._relativeTime[r];
  return ee(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function Ni(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ee(r) ? r(t) : r.replace(/%s/i, t);
}
var Ze = {};
function N(e, t) {
  var r = e.toLowerCase();
  Ze[r] = Ze[r + "s"] = Ze[t] = e;
}
function j(e) {
  return typeof e == "string" ? Ze[e] || Ze[e.toLowerCase()] : void 0;
}
function Ar(e) {
  var t = {}, r, s;
  for (s in e)
    S(e, s) && (r = j(s), r && (t[r] = e[s]));
  return t;
}
var Ks = {};
function F(e, t) {
  Ks[e] = t;
}
function Fi(e) {
  var t = [], r;
  for (r in e)
    S(e, r) && t.push({ unit: r, priority: Ks[r] });
  return t.sort(function(s, a) {
    return s.priority - a.priority;
  }), t;
}
function Et(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = q(t)), r;
}
function Ie(e, t) {
  return function(r) {
    return r != null ? (ea(this, e, r), d.updateOffset(this, t), this) : vt(this, e);
  };
}
function vt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function ea(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Et(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Lt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Ai(e) {
  return e = j(e), ee(this[e]) ? this[e]() : this;
}
function Ci(e, t) {
  if (typeof e == "object") {
    e = Ar(e);
    var r = Fi(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = j(e), ee(this[e]))
    return this[e](t);
  return this;
}
var ta = /\d/, U = /\d\d/, ra = /\d{3}/, Cr = /\d{4}/, Pt = /[+-]?\d{6}/, M = /\d\d?/, sa = /\d\d\d\d?/, aa = /\d\d\d\d\d\d?/, Nt = /\d{1,3}/, Lr = /\d{1,4}/, Ft = /[+-]?\d{1,6}/, qe = /\d+/, At = /[+-]?\d+/, Li = /Z|[+-]\d\d:?\d\d/gi, Ct = /Z|[+-]\d\d(?::?\d\d)?/gi, Wi = /[+-]?\d+(\.\d{1,3})?/, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, gt;
gt = {};
function f(e, t, r) {
  gt[e] = ee(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function Ui(e, t) {
  return S(gt, e) ? gt[e](t._strict, t._locale) : new RegExp(Ii(e));
}
function Ii(e) {
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
var yr = {};
function k(e, t) {
  var r, s = t, a;
  for (typeof e == "string" && (e = [e]), de(t) && (s = function(n, i) {
    i[t] = v(n);
  }), a = e.length, r = 0; r < a; r++)
    yr[e[r]] = s;
}
function nt(e, t) {
  k(e, function(r, s, a, n) {
    a._w = a._w || {}, t(r, a._w, a, n);
  });
}
function qi(e, t, r) {
  t != null && S(yr, e) && yr[e](t, r._a, r, e);
}
var P = 0, ae = 1, Z = 2, T = 3, B = 4, ne = 5, we = 6, $i = 7, ji = 8;
function Vi(e, t) {
  return (e % t + t) % t;
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Lt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Vi(t, 12);
  return e += (t - r) / 12, r === 1 ? Et(e) ? 29 : 28 : 31 - r % 7 % 2;
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
F("month", 8);
f("M", M);
f("MM", M, U);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
k(["M", "MM"], function(e, t) {
  t[ae] = v(e) - 1;
});
k(["MMM", "MMMM"], function(e, t, r, s) {
  var a = r._locale.monthsParse(e, s, r._strict);
  a != null ? t[ae] = a : _(r).invalidMonth = e;
});
var Hi = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), na = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ia = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Bi = at, Gi = at;
function zi(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ia).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function Ji(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ia.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Zi(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      n = K([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Qi(e, t, r) {
  var s, a, n;
  if (this._monthsParseExact)
    return Zi.call(this, e, t, r);
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
function oa(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !de(t))
      return e;
  }
  return r = Math.min(e.date(), Lt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function ua(e) {
  return e != null ? (oa(this, e), d.updateOffset(this, !0), this) : vt(this, "Month");
}
function Xi() {
  return Lt(this.year(), this.month());
}
function Ki(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || la.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Bi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function eo(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || la.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Gi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function la() {
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
F("year", 1);
f("Y", At);
f("YY", M, U);
f("YYYY", Lr, Cr);
f("YYYYY", Ft, Pt);
f("YYYYYY", Ft, Pt);
k(["YYYYY", "YYYYYY"], P);
k("YYYY", function(e, t) {
  t[P] = e.length === 2 ? d.parseTwoDigitYear(e) : v(e);
});
k("YY", function(e, t) {
  t[P] = d.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[P] = parseInt(e, 10);
});
function Qe(e) {
  return Et(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var da = Ie("FullYear", !0);
function to() {
  return Et(this.year());
}
function ro(e, t, r, s, a, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, a, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, a, n, i), o;
}
function Ke(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function wt(e, t, r) {
  var s = 7 + t - r, a = (7 + Ke(e, 0, s).getUTCDay() - t) % 7;
  return -a + s - 1;
}
function ha(e, t, r, s, a) {
  var n = (7 + r - s) % 7, i = wt(e, s, a), o = 1 + 7 * (t - 1) + n + i, u, h;
  return o <= 0 ? (u = e - 1, h = Qe(u) + o) : o > Qe(e) ? (u = e + 1, h = o - Qe(e)) : (u = e, h = o), {
    year: u,
    dayOfYear: h
  };
}
function et(e, t, r) {
  var s = wt(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + ue(i, t, r)) : a > ue(e.year(), t, r) ? (n = a - ue(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function ue(e, t, r) {
  var s = wt(e, t, r), a = wt(e + 1, t, r);
  return (Qe(e) - s + a) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
N("week", "w");
N("isoWeek", "W");
F("week", 5);
F("isoWeek", 5);
f("w", M);
f("ww", M, U);
f("W", M);
f("WW", M, U);
nt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = v(e);
  }
);
function so(e) {
  return et(e, this._week.dow, this._week.doy).week;
}
var ao = {
  dow: 0,
  doy: 6
};
function no() {
  return this._week.dow;
}
function io() {
  return this._week.doy;
}
function oo(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function uo(e) {
  var t = et(this, 1, 4).week;
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
F("day", 11);
F("weekday", 11);
F("isoWeekday", 11);
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
nt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var a = r._locale.weekdaysParse(e, s, r._strict);
  a != null ? t.d = a : _(r).invalidWeekday = e;
});
nt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = v(e);
});
function lo(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ho(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Wr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var fo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), fa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), co = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), mo = at, yo = at, po = at;
function _o(e, t) {
  var r = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Wr(r, this._week.dow) : e ? r[e.day()] : r;
}
function vo(e) {
  return e === !0 ? Wr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function go(e) {
  return e === !0 ? Wr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function wo(e, t, r) {
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
  return r ? t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 || (a = Y.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function So(e, t, r) {
  var s, a, n;
  if (this._weekdaysParseExact)
    return wo.call(this, e, t, r);
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
function bo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = lo(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Oo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ko(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ho(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Do(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ur.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = mo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Mo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ur.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = yo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function xo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ur.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = po), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ur() {
  function e(m, g) {
    return g.length - m.length;
  }
  var t = [], r = [], s = [], a = [], n, i, o, u, h;
  for (n = 0; n < 7; n++)
    i = K([2e3, 1]).day(n), o = W(this.weekdaysMin(i, "")), u = W(this.weekdaysShort(i, "")), h = W(this.weekdays(i, "")), t.push(o), r.push(u), s.push(h), a.push(o), a.push(u), a.push(h);
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
function Ir() {
  return this.hours() % 12 || 12;
}
function Yo() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, Ir);
y("k", ["kk", 2], 0, Yo);
y("hmm", 0, 0, function() {
  return "" + Ir.apply(this) + X(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + Ir.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2);
});
function ca(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ca("a", !0);
ca("A", !1);
N("hour", "h");
F("hour", 13);
function ma(e, t) {
  return t._meridiemParse;
}
f("a", ma);
f("A", ma);
f("H", M);
f("h", M);
f("k", M);
f("HH", M, U);
f("hh", M, U);
f("kk", M, U);
f("hmm", sa);
f("hmmss", aa);
f("Hmm", sa);
f("Hmmss", aa);
k(["H", "HH"], T);
k(["k", "kk"], function(e, t, r) {
  var s = v(e);
  t[T] = s === 24 ? 0 : s;
});
k(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
k(["h", "hh"], function(e, t, r) {
  t[T] = v(e), _(r).bigHour = !0;
});
k("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s)), _(r).bigHour = !0;
});
k("hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ne] = v(e.substr(a)), _(r).bigHour = !0;
});
k("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s));
});
k("Hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ne] = v(e.substr(a));
});
function To(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ro = /[ap]\.?m?\.?/i, Eo = Ie("Hours", !0);
function Po(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ya = {
  calendar: wi,
  longDateFormat: ki,
  invalidDate: Mi,
  ordinal: Yi,
  dayOfMonthOrdinalParse: Ti,
  relativeTime: Ei,
  months: Hi,
  monthsShort: na,
  week: ao,
  weekdays: fo,
  weekdaysMin: co,
  weekdaysShort: fa,
  meridiemParse: Ro
}, x = {}, Be = {}, tt;
function No(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function Ms(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Fo(e) {
  for (var t = 0, r, s, a, n; t < e.length; ) {
    for (n = Ms(e[t]).split("-"), r = n.length, s = Ms(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = Wt(n.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && No(n, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return tt;
}
function Ao(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Wt(e) {
  var t = null, r;
  if (x[e] === void 0 && typeof module < "u" && module && module.exports && Ao(e))
    try {
      t = tt._abbr, r = require, r("./locale/" + e), pe(t);
    } catch {
      x[e] = null;
    }
  return x[e];
}
function pe(e, t) {
  var r;
  return e && (A(t) ? r = he(e) : r = qr(e, t), r ? tt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), tt._abbr;
}
function qr(e, t) {
  if (t !== null) {
    var r, s = ya;
    if (t.abbr = e, x[e] != null)
      Qs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = x[e]._config;
    else if (t.parentLocale != null)
      if (x[t.parentLocale] != null)
        s = x[t.parentLocale]._config;
      else if (r = Wt(t.parentLocale), r != null)
        s = r._config;
      else
        return Be[t.parentLocale] || (Be[t.parentLocale] = []), Be[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return x[e] = new Nr(cr(s, t)), Be[e] && Be[e].forEach(function(a) {
      qr(a.name, a.config);
    }), pe(e), x[e];
  } else
    return delete x[e], null;
}
function Co(e, t) {
  if (t != null) {
    var r, s, a = ya;
    x[e] != null && x[e].parentLocale != null ? x[e].set(cr(x[e]._config, t)) : (s = Wt(e), s != null && (a = s._config), t = cr(a, t), s == null && (t.abbr = e), r = new Nr(t), r.parentLocale = x[e], x[e] = r), pe(e);
  } else
    x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === pe() && pe(e)) : x[e] != null && delete x[e]);
  return x[e];
}
function he(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return tt;
  if (!G(e)) {
    if (t = Wt(e), t)
      return t;
    e = [e];
  }
  return Fo(e);
}
function Lo() {
  return mr(x);
}
function $r(e) {
  var t, r = e._a;
  return r && _(e).overflow === -2 && (t = r[ae] < 0 || r[ae] > 11 ? ae : r[Z] < 1 || r[Z] > Lt(r[P], r[ae]) ? Z : r[T] < 0 || r[T] > 24 || r[T] === 24 && (r[B] !== 0 || r[ne] !== 0 || r[we] !== 0) ? T : r[B] < 0 || r[B] > 59 ? B : r[ne] < 0 || r[ne] > 59 ? ne : r[we] < 0 || r[we] > 999 ? we : -1, _(e)._overflowDayOfYear && (t < P || t > Z) && (t = Z), _(e)._overflowWeeks && t === -1 && (t = $i), _(e)._overflowWeekday && t === -1 && (t = ji), _(e).overflow = t), e;
}
var Wo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Uo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Io = /Z|[+-]\d\d(?::?\d\d)?/, ut = [
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
], ur = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], qo = /^\/?Date\((-?\d+)/i, $o = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, jo = {
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
function pa(e) {
  var t, r, s = e._i, a = Wo.exec(s) || Uo.exec(s), n, i, o, u, h = ut.length, m = ur.length;
  if (a) {
    for (_(e).iso = !0, t = 0, r = h; t < r; t++)
      if (ut[t][1].exec(a[1])) {
        i = ut[t][0], n = ut[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = m; t < r; t++)
        if (ur[t][1].exec(a[3])) {
          o = (a[2] || " ") + ur[t][0];
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
      if (Io.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), Vr(e);
  } else
    e._isValid = !1;
}
function Vo(e, t, r, s, a, n) {
  var i = [
    Ho(e),
    na.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Ho(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Bo(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Go(e, t, r) {
  if (e) {
    var s = fa.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== a)
      return _(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function zo(e, t, r) {
  if (e)
    return jo[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, n = (s - a) / 100;
  return n * 60 + a;
}
function _a(e) {
  var t = $o.exec(Bo(e._i)), r;
  if (t) {
    if (r = Vo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Go(t[1], r, e))
      return;
    e._a = r, e._tzm = zo(t[8], t[9], t[10]), e._d = Ke.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Jo(e) {
  var t = qo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (pa(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (_a(e), e._isValid === !1)
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
function Re(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function Zo(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function jr(e) {
  var t, r, s = [], a, n, i;
  if (!e._d) {
    for (a = Zo(e), e._w && e._a[Z] == null && e._a[ae] == null && Qo(e), e._dayOfYear != null && (i = Re(e._a[P], a[P]), (e._dayOfYear > Qe(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), r = Ke(i, 0, e._dayOfYear), e._a[ae] = r.getUTCMonth(), e._a[Z] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[T] === 24 && e._a[B] === 0 && e._a[ne] === 0 && e._a[we] === 0 && (e._nextDay = !0, e._a[T] = 0), e._d = (e._useUTC ? Ke : ro).apply(
      null,
      s
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[T] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (_(e).weekdayMismatch = !0);
  }
}
function Qo(e) {
  var t, r, s, a, n, i, o, u, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = Re(
    t.GG,
    e._a[P],
    et(D(), 1, 4).year
  ), s = Re(t.W, 1), a = Re(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, h = et(D(), n, i), r = Re(t.gg, e._a[P], h.year), s = Re(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (u = !0)) : a = n), s < 1 || s > ue(r, n, i) ? _(e)._overflowWeeks = !0 : u != null ? _(e)._overflowWeekday = !0 : (o = ha(r, s, a, n, i), e._a[P] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Vr(e) {
  if (e._f === d.ISO_8601) {
    pa(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    _a(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, r, s, a, n, i, o = t.length, u = 0, h, m;
  for (a = Xs(e._f, e._locale).match(Fr) || [], m = a.length, r = 0; r < m; r++)
    n = a[r], s = (t.match(Ui(n, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Ne[n] ? (s ? _(e).empty = !1 : _(e).unusedTokens.push(n), qi(n, s, e)) : e._strict && !s && _(e).unusedTokens.push(n);
  _(e).charsLeftOver = o - u, t.length > 0 && _(e).unusedInput.push(t), e._a[T] <= 12 && _(e).bigHour === !0 && e._a[T] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[T] = Xo(
    e._locale,
    e._a[T],
    e._meridiem
  ), h = _(e).era, h !== null && (e._a[P] = e._locale.erasConvertYear(h, e._a[P])), jr(e), $r(e);
}
function Xo(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Ko(e) {
  var t, r, s, a, n, i, o = !1, u = e._f.length;
  if (u === 0) {
    _(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    n = 0, i = !1, t = Pr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Vr(t), Er(t) && (i = !0), n += _(t).charsLeftOver, n += _(t).unusedTokens.length * 10, _(t).score = n, o ? n < s && (s = n, r = t) : (s == null || n < s || i) && (s = n, r = t, i && (o = !0));
  me(e, r || t);
}
function eu(e) {
  if (!e._d) {
    var t = Ar(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Js(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), jr(e);
  }
}
function tu(e) {
  var t = new st($r(va(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function va(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || he(e._l), t === null || r === void 0 && t === "" ? Rt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new st($r(t)) : (rt(t) ? e._d = t : G(r) ? Ko(e) : r ? Vr(e) : ru(e), Er(e) || (e._d = null), e));
}
function ru(e) {
  var t = e._i;
  A(t) ? e._d = new Date(d.now()) : rt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Jo(e) : G(t) ? (e._a = Js(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), jr(e)) : Se(t) ? eu(e) : de(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ga(e, t, r, s, a) {
  var n = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Se(e) && Rr(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = r, n._i = e, n._f = t, n._strict = s, tu(n);
}
function D(e, t, r, s) {
  return ga(e, t, r, s, !1);
}
var su = $(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Rt();
  }
), au = $(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Rt();
  }
);
function wa(e, t) {
  var r, s;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return D();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function nu() {
  var e = [].slice.call(arguments, 0);
  return wa("isBefore", e);
}
function iu() {
  var e = [].slice.call(arguments, 0);
  return wa("isAfter", e);
}
var ou = function() {
  return Date.now ? Date.now() : +new Date();
}, Ge = [
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
function uu(e) {
  var t, r = !1, s, a = Ge.length;
  for (t in e)
    if (S(e, t) && !(Y.call(Ge, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < a; ++s)
    if (e[Ge[s]]) {
      if (r)
        return !1;
      parseFloat(e[Ge[s]]) !== v(e[Ge[s]]) && (r = !0);
    }
  return !0;
}
function lu() {
  return this._isValid;
}
function du() {
  return J(NaN);
}
function Ut(e) {
  var t = Ar(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, h = t.second || 0, m = t.millisecond || 0;
  this._isValid = uu(t), this._milliseconds = +m + h * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = he(), this._bubble();
}
function ft(e) {
  return e instanceof Ut;
}
function pr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function hu(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && v(e[i]) !== v(t[i])) && n++;
  return n + a;
}
function Sa(e, t) {
  y(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + X(~~(r / 60), 2) + t + X(~~r % 60, 2);
  });
}
Sa("Z", ":");
Sa("ZZ", "");
f("Z", Ct);
f("ZZ", Ct);
k(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Hr(Ct, e);
});
var fu = /([\+\-]|\d\d)/gi;
function Hr(e, t) {
  var r = (t || "").match(e), s, a, n;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(fu) || ["-", 0, 0], n = +(a[1] * 60) + v(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Br(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (z(e) || rt(e) ? e.valueOf() : D(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), d.updateOffset(r, !1), r) : D(e).local();
}
function _r(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function cu(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Hr(Ct, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = _r(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? ka(
      this,
      J(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : _r(this);
}
function mu(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function yu(e) {
  return this.utcOffset(0, e);
}
function pu(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_r(this), "m")), this;
}
function _u() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Hr(Li, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function vu(e) {
  return this.isValid() ? (e = e ? D(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function gu() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function wu() {
  if (!A(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Pr(e, this), e = va(e), e._a ? (t = e._isUTC ? K(e._a) : D(e._a), this._isDSTShifted = this.isValid() && hu(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Su() {
  return this.isValid() ? !this._isUTC : !1;
}
function bu() {
  return this.isValid() ? this._isUTC : !1;
}
function ba() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ou = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ku = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function J(e, t) {
  var r = e, s = null, a, n, i;
  return ft(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : de(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = Ou.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: v(s[Z]) * a,
    h: v(s[T]) * a,
    m: v(s[B]) * a,
    s: v(s[ne]) * a,
    ms: v(pr(s[we] * 1e3)) * a
  }) : (s = ku.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: ge(s[2], a),
    M: ge(s[3], a),
    w: ge(s[4], a),
    d: ge(s[5], a),
    h: ge(s[6], a),
    m: ge(s[7], a),
    s: ge(s[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = Du(
    D(r.from),
    D(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new Ut(r), ft(e) && S(e, "_locale") && (n._locale = e._locale), ft(e) && S(e, "_isValid") && (n._isValid = e._isValid), n;
}
J.fn = Ut.prototype;
J.invalid = du;
function ge(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function xs(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Du(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Br(t, e), e.isBefore(t) ? r = xs(e, t) : (r = xs(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Oa(e, t) {
  return function(r, s) {
    var a, n;
    return s !== null && !isNaN(+s) && (Qs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = s, s = n), a = J(r, s), ka(this, a, e), this;
  };
}
function ka(e, t, r, s) {
  var a = t._milliseconds, n = pr(t._days), i = pr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, i && oa(e, vt(e, "Month") + i * r), n && ea(e, "Date", vt(e, "Date") + n * r), a && e._d.setTime(e._d.valueOf() + a * r), s && d.updateOffset(e, n || i));
}
var Mu = Oa(1, "add"), xu = Oa(-1, "subtract");
function Da(e) {
  return typeof e == "string" || e instanceof String;
}
function Yu(e) {
  return z(e) || rt(e) || Da(e) || de(e) || Ru(e) || Tu(e) || e === null || e === void 0;
}
function Tu(e) {
  var t = Se(e) && !Rr(e), r = !1, s = [
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
function Ru(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !de(s) && Da(e);
  }).length === 0), t && r;
}
function Eu(e) {
  var t = Se(e) && !Rr(e), r = !1, s = [
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
function Pu(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function Nu(e, t) {
  arguments.length === 1 && (arguments[0] ? Yu(arguments[0]) ? (e = arguments[0], t = void 0) : Eu(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || D(), s = Br(r, this).startOf("day"), a = d.calendarFormat(this, s) || "sameElse", n = t && (ee(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, D(r))
  );
}
function Fu() {
  return new st(this);
}
function Au(e, t) {
  var r = z(e) ? e : D(e);
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Cu(e, t) {
  var r = z(e) ? e : D(e);
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Lu(e, t, r, s) {
  var a = z(e) ? e : D(e), n = z(t) ? t : D(t);
  return this.isValid() && a.isValid() && n.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s[1] === ")" ? this.isBefore(n, r) : !this.isAfter(n, r))) : !1;
}
function Wu(e, t) {
  var r = z(e) ? e : D(e), s;
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Uu(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Iu(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function qu(e, t, r) {
  var s, a, n;
  if (!this.isValid())
    return NaN;
  if (s = Br(e, this), !s.isValid())
    return NaN;
  switch (a = (s.utcOffset() - this.utcOffset()) * 6e4, t = j(t), t) {
    case "year":
      n = ct(this, s) / 12;
      break;
    case "month":
      n = ct(this, s);
      break;
    case "quarter":
      n = ct(this, s) / 3;
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
function ct(e, t) {
  if (e.date() < t.date())
    return -ct(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), a, n;
  return t - s < 0 ? (a = e.clone().add(r - 1, "months"), n = (t - s) / (s - a)) : (a = e.clone().add(r + 1, "months"), n = (t - s) / (a - s)), -(r + n) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function $u() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function ju(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ht(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ee(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ht(r, "Z")) : ht(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Vu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + s + a + n);
}
function Hu(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = ht(this, e);
  return this.localeData().postformat(t);
}
function Bu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || D(e).isValid()) ? J({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Gu(e) {
  return this.from(D(), e);
}
function zu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || D(e).isValid()) ? J({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ju(e) {
  return this.to(D(), e);
}
function Ma(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = he(e), t != null && (this._locale = t), this);
}
var xa = $(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ya() {
  return this._locale;
}
var St = 1e3, Fe = 60 * St, bt = 60 * Fe, Ta = (365 * 400 + 97) * 24 * bt;
function Ae(e, t) {
  return (e % t + t) % t;
}
function Ra(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Ta : new Date(e, t, r).valueOf();
}
function Ea(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Ta : Date.UTC(e, t, r);
}
function Zu(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ea : Ra, e) {
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
      t = this._d.valueOf(), t -= Ae(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        bt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ae(t, Fe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ae(t, St);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Qu(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ea : Ra, e) {
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
      t = this._d.valueOf(), t += bt - Ae(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        bt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Fe - Ae(t, Fe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += St - Ae(t, St) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Xu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ku() {
  return Math.floor(this.valueOf() / 1e3);
}
function el() {
  return new Date(this.valueOf());
}
function tl() {
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
function rl() {
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
function sl() {
  return this.isValid() ? this.toISOString() : null;
}
function al() {
  return Er(this);
}
function nl() {
  return me({}, _(this));
}
function il() {
  return _(this).overflow;
}
function ol() {
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
f("N", Gr);
f("NN", Gr);
f("NNN", Gr);
f("NNNN", vl);
f("NNNNN", gl);
k(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var a = r._locale.erasParse(e, s, r._strict);
    a ? _(r).era = a : _(r).invalidEra = e;
  }
);
f("y", qe);
f("yy", qe);
f("yyy", qe);
f("yyyy", qe);
f("yo", wl);
k(["y", "yy", "yyy", "yyyy"], P);
k(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[P] = r._locale.eraYearOrdinalParse(e, a) : t[P] = parseInt(e, 10);
});
function ul(e, t) {
  var r, s, a, n = this._eras || he("en")._eras;
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
function ll(e, t, r) {
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
function dl(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * r;
}
function hl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function fl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function cl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function ml() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - d(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function yl(e) {
  return S(this, "_erasNameRegex") || zr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function pl(e) {
  return S(this, "_erasAbbrRegex") || zr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function _l(e) {
  return S(this, "_erasNarrowRegex") || zr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Gr(e, t) {
  return t.erasAbbrRegex(e);
}
function vl(e, t) {
  return t.erasNameRegex(e);
}
function gl(e, t) {
  return t.erasNarrowRegex(e);
}
function wl(e, t) {
  return t._eraYearOrdinalRegex || qe;
}
function zr() {
  var e = [], t = [], r = [], s = [], a, n, i = this.eras();
  for (a = 0, n = i.length; a < n; ++a)
    t.push(W(i[a].name)), e.push(W(i[a].abbr)), r.push(W(i[a].narrow)), s.push(W(i[a].name)), s.push(W(i[a].abbr)), s.push(W(i[a].narrow));
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
function It(e, t) {
  y(0, [e, e.length], 0, t);
}
It("gggg", "weekYear");
It("ggggg", "weekYear");
It("GGGG", "isoWeekYear");
It("GGGGG", "isoWeekYear");
N("weekYear", "gg");
N("isoWeekYear", "GG");
F("weekYear", 1);
F("isoWeekYear", 1);
f("G", At);
f("g", At);
f("GG", M, U);
f("gg", M, U);
f("GGGG", Lr, Cr);
f("gggg", Lr, Cr);
f("GGGGG", Ft, Pt);
f("ggggg", Ft, Pt);
nt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = v(e);
  }
);
nt(["gg", "GG"], function(e, t, r, s) {
  t[s] = d.parseTwoDigitYear(e);
});
function Sl(e) {
  return Pa.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function bl(e) {
  return Pa.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ol() {
  return ue(this.year(), 1, 4);
}
function kl() {
  return ue(this.isoWeekYear(), 1, 4);
}
function Dl() {
  var e = this.localeData()._week;
  return ue(this.year(), e.dow, e.doy);
}
function Ml() {
  var e = this.localeData()._week;
  return ue(this.weekYear(), e.dow, e.doy);
}
function Pa(e, t, r, s, a) {
  var n;
  return e == null ? et(this, s, a).year : (n = ue(e, s, a), t > n && (t = n), xl.call(this, e, t, r, s, a));
}
function xl(e, t, r, s, a) {
  var n = ha(e, t, r, s, a), i = Ke(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
N("quarter", "Q");
F("quarter", 7);
f("Q", ta);
k("Q", function(e, t) {
  t[ae] = (v(e) - 1) * 3;
});
function Yl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
N("date", "D");
F("date", 9);
f("D", M);
f("DD", M, U);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], Z);
k("Do", function(e, t) {
  t[Z] = v(e.match(M)[0]);
});
var Na = Ie("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
F("dayOfYear", 4);
f("DDD", Nt);
f("DDDD", ra);
k(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = v(e);
});
function Tl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
N("minute", "m");
F("minute", 14);
f("m", M);
f("mm", M, U);
k(["m", "mm"], B);
var Rl = Ie("Minutes", !1);
y("s", ["ss", 2], 0, "second");
N("second", "s");
F("second", 15);
f("s", M);
f("ss", M, U);
k(["s", "ss"], ne);
var El = Ie("Seconds", !1);
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
F("millisecond", 16);
f("S", Nt, ta);
f("SS", Nt, U);
f("SSS", Nt, ra);
var ye, Fa;
for (ye = "SSSS"; ye.length <= 9; ye += "S")
  f(ye, qe);
function Pl(e, t) {
  t[we] = v(("0." + e) * 1e3);
}
for (ye = "S"; ye.length <= 9; ye += "S")
  k(ye, Pl);
Fa = Ie("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function Nl() {
  return this._isUTC ? "UTC" : "";
}
function Fl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = st.prototype;
l.add = Mu;
l.calendar = Nu;
l.clone = Fu;
l.diff = qu;
l.endOf = Qu;
l.format = Hu;
l.from = Bu;
l.fromNow = Gu;
l.to = zu;
l.toNow = Ju;
l.get = Ai;
l.invalidAt = il;
l.isAfter = Au;
l.isBefore = Cu;
l.isBetween = Lu;
l.isSame = Wu;
l.isSameOrAfter = Uu;
l.isSameOrBefore = Iu;
l.isValid = al;
l.lang = xa;
l.locale = Ma;
l.localeData = Ya;
l.max = au;
l.min = su;
l.parsingFlags = nl;
l.set = Ci;
l.startOf = Zu;
l.subtract = xu;
l.toArray = tl;
l.toObject = rl;
l.toDate = el;
l.toISOString = ju;
l.inspect = Vu;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = sl;
l.toString = $u;
l.unix = Ku;
l.valueOf = Xu;
l.creationData = ol;
l.eraName = hl;
l.eraNarrow = fl;
l.eraAbbr = cl;
l.eraYear = ml;
l.year = da;
l.isLeapYear = to;
l.weekYear = Sl;
l.isoWeekYear = bl;
l.quarter = l.quarters = Yl;
l.month = ua;
l.daysInMonth = Xi;
l.week = l.weeks = oo;
l.isoWeek = l.isoWeeks = uo;
l.weeksInYear = Dl;
l.weeksInWeekYear = Ml;
l.isoWeeksInYear = Ol;
l.isoWeeksInISOWeekYear = kl;
l.date = Na;
l.day = l.days = bo;
l.weekday = Oo;
l.isoWeekday = ko;
l.dayOfYear = Tl;
l.hour = l.hours = Eo;
l.minute = l.minutes = Rl;
l.second = l.seconds = El;
l.millisecond = l.milliseconds = Fa;
l.utcOffset = cu;
l.utc = yu;
l.local = pu;
l.parseZone = _u;
l.hasAlignedHourOffset = vu;
l.isDST = gu;
l.isLocal = Su;
l.isUtcOffset = bu;
l.isUtc = ba;
l.isUTC = ba;
l.zoneAbbr = Nl;
l.zoneName = Fl;
l.dates = $(
  "dates accessor is deprecated. Use date instead.",
  Na
);
l.months = $(
  "months accessor is deprecated. Use month instead",
  ua
);
l.years = $(
  "years accessor is deprecated. Use year instead",
  da
);
l.zone = $(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  mu
);
l.isDSTShifted = $(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  wu
);
function Al(e) {
  return D(e * 1e3);
}
function Cl() {
  return D.apply(null, arguments).parseZone();
}
function Aa(e) {
  return e;
}
var b = Nr.prototype;
b.calendar = Si;
b.longDateFormat = Di;
b.invalidDate = xi;
b.ordinal = Ri;
b.preparse = Aa;
b.postformat = Aa;
b.relativeTime = Pi;
b.pastFuture = Ni;
b.set = gi;
b.eras = ul;
b.erasParse = ll;
b.erasConvertYear = dl;
b.erasAbbrRegex = pl;
b.erasNameRegex = yl;
b.erasNarrowRegex = _l;
b.months = zi;
b.monthsShort = Ji;
b.monthsParse = Qi;
b.monthsRegex = eo;
b.monthsShortRegex = Ki;
b.week = so;
b.firstDayOfYear = io;
b.firstDayOfWeek = no;
b.weekdays = _o;
b.weekdaysMin = go;
b.weekdaysShort = vo;
b.weekdaysParse = So;
b.weekdaysRegex = Do;
b.weekdaysShortRegex = Mo;
b.weekdaysMinRegex = xo;
b.isPM = To;
b.meridiem = Po;
function Ot(e, t, r, s) {
  var a = he(), n = K().set(s, t);
  return a[r](n, e);
}
function Ca(e, t, r) {
  if (de(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ot(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = Ot(e, s, r, "month");
  return a;
}
function Jr(e, t, r, s) {
  typeof e == "boolean" ? (de(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, de(t) && (r = t, t = void 0), t = t || "");
  var a = he(), n = e ? a._week.dow : 0, i, o = [];
  if (r != null)
    return Ot(t, (r + n) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ot(t, (i + n) % 7, s, "day");
  return o;
}
function Ll(e, t) {
  return Ca(e, t, "months");
}
function Wl(e, t) {
  return Ca(e, t, "monthsShort");
}
function Ul(e, t, r) {
  return Jr(e, t, r, "weekdays");
}
function Il(e, t, r) {
  return Jr(e, t, r, "weekdaysShort");
}
function ql(e, t, r) {
  return Jr(e, t, r, "weekdaysMin");
}
pe("en", {
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
  pe
);
d.langData = $(
  "moment.langData is deprecated. Use moment.localeData instead.",
  he
);
var te = Math.abs;
function $l() {
  var e = this._data;
  return this._milliseconds = te(this._milliseconds), this._days = te(this._days), this._months = te(this._months), e.milliseconds = te(e.milliseconds), e.seconds = te(e.seconds), e.minutes = te(e.minutes), e.hours = te(e.hours), e.months = te(e.months), e.years = te(e.years), this;
}
function La(e, t, r, s) {
  var a = J(t, r);
  return e._milliseconds += s * a._milliseconds, e._days += s * a._days, e._months += s * a._months, e._bubble();
}
function jl(e, t) {
  return La(this, e, t, 1);
}
function Vl(e, t) {
  return La(this, e, t, -1);
}
function Ys(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Hl() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, n, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Ys(vr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = q(e / 1e3), s.seconds = a % 60, n = q(a / 60), s.minutes = n % 60, i = q(n / 60), s.hours = i % 24, t += q(i / 24), u = q(Wa(t)), r += u, t -= Ys(vr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function Wa(e) {
  return e * 4800 / 146097;
}
function vr(e) {
  return e * 146097 / 4800;
}
function Bl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = j(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Wa(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(vr(this._months)), e) {
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
function Gl() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function fe(e) {
  return function() {
    return this.as(e);
  };
}
var zl = fe("ms"), Jl = fe("s"), Zl = fe("m"), Ql = fe("h"), Xl = fe("d"), Kl = fe("w"), ed = fe("M"), td = fe("Q"), rd = fe("y");
function sd() {
  return J(this);
}
function ad(e) {
  return e = j(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Oe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var nd = Oe("milliseconds"), id = Oe("seconds"), od = Oe("minutes"), ud = Oe("hours"), ld = Oe("days"), dd = Oe("months"), hd = Oe("years");
function fd() {
  return q(this.days() / 7);
}
var re = Math.round, Ee = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function cd(e, t, r, s, a) {
  return a.relativeTime(t || 1, !!r, e, s);
}
function md(e, t, r, s) {
  var a = J(e).abs(), n = re(a.as("s")), i = re(a.as("m")), o = re(a.as("h")), u = re(a.as("d")), h = re(a.as("M")), m = re(a.as("w")), g = re(a.as("y")), c = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (c = c || m <= 1 && ["w"] || m < r.w && ["ww", m]), c = c || h <= 1 && ["M"] || h < r.M && ["MM", h] || g <= 1 && ["y"] || ["yy", g], c[2] = t, c[3] = +e > 0, c[4] = s, cd.apply(null, c);
}
function yd(e) {
  return e === void 0 ? re : typeof e == "function" ? (re = e, !0) : !1;
}
function pd(e, t) {
  return Ee[e] === void 0 ? !1 : t === void 0 ? Ee[e] : (Ee[e] = t, e === "s" && (Ee.ss = t - 1), !0);
}
function _d(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ee, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ee, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), n = md(this, !r, s, a), r && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var lr = Math.abs;
function Te(e) {
  return (e > 0) - (e < 0) || +e;
}
function qt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = lr(this._milliseconds) / 1e3, t = lr(this._days), r = lr(this._months), s, a, n, i, o = this.asSeconds(), u, h, m, g;
  return o ? (s = q(e / 60), a = q(s / 60), e %= 60, s %= 60, n = q(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", h = Te(this._months) !== Te(o) ? "-" : "", m = Te(this._days) !== Te(o) ? "-" : "", g = Te(this._milliseconds) !== Te(o) ? "-" : "", u + "P" + (n ? h + n + "Y" : "") + (r ? h + r + "M" : "") + (t ? m + t + "D" : "") + (a || s || e ? "T" : "") + (a ? g + a + "H" : "") + (s ? g + s + "M" : "") + (e ? g + i + "S" : "")) : "P0D";
}
var w = Ut.prototype;
w.isValid = lu;
w.abs = $l;
w.add = jl;
w.subtract = Vl;
w.as = Bl;
w.asMilliseconds = zl;
w.asSeconds = Jl;
w.asMinutes = Zl;
w.asHours = Ql;
w.asDays = Xl;
w.asWeeks = Kl;
w.asMonths = ed;
w.asQuarters = td;
w.asYears = rd;
w.valueOf = Gl;
w._bubble = Hl;
w.clone = sd;
w.get = ad;
w.milliseconds = nd;
w.seconds = id;
w.minutes = od;
w.hours = ud;
w.days = ld;
w.weeks = fd;
w.months = dd;
w.years = hd;
w.humanize = _d;
w.toISOString = qt;
w.toString = qt;
w.toJSON = qt;
w.locale = Ma;
w.localeData = Ya;
w.toIsoString = $(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  qt
);
w.lang = xa;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", At);
f("X", Wi);
k("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
d.version = "2.29.4";
_i(D);
d.fn = l;
d.min = nu;
d.max = iu;
d.now = ou;
d.utc = K;
d.unix = Al;
d.months = Ll;
d.isDate = rt;
d.locale = pe;
d.invalid = Rt;
d.duration = J;
d.isMoment = z;
d.weekdays = Ul;
d.parseZone = Cl;
d.localeData = he;
d.isDuration = ft;
d.monthsShort = Wl;
d.weekdaysMin = ql;
d.defineLocale = qr;
d.updateLocale = Co;
d.locales = Lo;
d.weekdaysShort = Il;
d.normalizeUnits = j;
d.relativeTimeRounding = yd;
d.relativeTimeThreshold = pd;
d.calendarFormat = Pu;
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
const vd = {
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
function gd(e, t, r, s, a, n) {
  const i = le("o-datepicker");
  return Q(), We(i, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const Ua = /* @__PURE__ */ _e(vd, [["render", gd]]), wd = {
  name: "WyxosForm",
  props: {
    form: {
      type: Tt,
      required: !0
    }
  },
  emits: ["submit"]
}, Sd = /* @__PURE__ */ Xe(" An error occurred. Try again? ");
function bd(e, t, r, s, a, n) {
  const i = le("o-loading"), o = le("o-button");
  return Q(), yt("div", null, [
    r.form.isLoaded ? (Q(), yt("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = Ka((u) => e.$emit("submit"), ["prevent"]))
    }, [
      mt(e.$slots, "default")
    ], 32)) : ze("", !0),
    pt(i, {
      active: r.form.isLoading
    }, null, 8, ["active"]),
    r.form.isFailure ? (Q(), We(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: Pe(() => [
        Sd
      ]),
      _: 1
    })) : ze("", !0)
  ]);
}
const Ia = /* @__PURE__ */ _e(wd, [["render", bd]]), Od = {
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
}, kd = ["width", "height"];
function Dd(e, t, r, s, a, n) {
  return Q(), yt("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, kd);
}
const qa = /* @__PURE__ */ _e(Od, [["render", Dd]]), Md = {
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
      errors: Yr()
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
function xd(e, t, r, s, a, n) {
  const i = le("o-input"), o = le("o-field");
  return Q(), We(o, dr({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: Pe(() => [
      pt(i, dr(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => s.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const $a = /* @__PURE__ */ _e(Md, [["render", xd]]), Yd = {
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
    }
  }
};
function Td(e, t, r, s, a, n) {
  const i = le("o-inputitems");
  return Q(), We(i, dr(e.$attrs, {
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
const ja = /* @__PURE__ */ _e(Yd, [["render", Td]]), Rd = {
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
      state: new se()
    };
  },
  methods: {
    async proceed() {
      this.callback && (this.state.loading(), await this.callback().catch((e) => {
        throw this.state.failed(), e;
      }), this.state.loaded()), this.$emit("close", { action: !0 });
    }
  }
}, Ed = { class: "button-group" };
function Pd(e, t, r, s, a, n) {
  const i = le("wyxos-button"), o = le("o-modal");
  return Q(), We(o, { active: !0 }, {
    default: Pe(() => [
      Je("h2", null, it(r.title), 1),
      Je("p", null, it(r.message), 1),
      Je("div", Ed, [
        pt(i, {
          "native-type": "button",
          disabled: s.state.isLoading,
          onClick: t[0] || (t[0] = (u) => e.$emit("close", { action: !1 }))
        }, {
          default: Pe(() => [
            Xe(it(r.cancelText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        pt(i, {
          "native-type": "button",
          loading: s.state.isLoading,
          onClick: t[1] || (t[1] = (u) => n.proceed())
        }, {
          default: Pe(() => [
            Xe(it(r.confirmText), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ])
    ]),
    _: 1
  });
}
const Va = /* @__PURE__ */ _e(Rd, [["render", Pd]]);
class Zr {
  constructor() {
    O(this, "state", gr(!1));
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
    return new Zr();
  }
}
class Qr {
  constructor(t) {
    O(this, "active", gr(null));
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
    return new Qr(t);
  }
}
const Nd = (e) => {
  e.component("wyxos-button", Bs), e.component("wyxos-collection", Gs), e.component("wyxos-datepicker", Ua), e.component("wyxos-form", Ia), e.component("wyxos-image", qa), e.component("wyxos-input", $a), e.component("wyxos-tags", ja), e.component("wyxos-prompt", Va);
}, Cd = {
  Search: Yt,
  FormBuilder: Tt,
  ResourceList: ui,
  Listing: Tr,
  LoadState: se,
  Modal: Zr,
  useFormErrors: Yr,
  WyxosButton: Bs,
  WyxosCollection: Gs,
  WyxosDatepicker: Ua,
  WyxosForm: Ia,
  WyxosImage: qa,
  WyxosInput: $a,
  WyxosTags: ja,
  WyxosPrompt: Va,
  Tab: Qr,
  install: Nd
};
export {
  Tt as FormBuilder,
  Tr as Listing,
  se as LoadState,
  Zr as Modal,
  ui as ResourceList,
  Yt as Search,
  Qr as Tab,
  Bs as WyxosButton,
  Gs as WyxosCollection,
  Ua as WyxosDatepicker,
  Ia as WyxosForm,
  qa as WyxosImage,
  $a as WyxosInput,
  Va as WyxosPrompt,
  ja as WyxosTags,
  Cd as default,
  Nd as install,
  Yr as useFormErrors
};
