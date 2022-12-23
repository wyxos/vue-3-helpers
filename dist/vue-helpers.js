var Wa = Object.defineProperty;
var Ua = (e, t, r) => t in e ? Wa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var D = (e, t, r) => (Ua(e, typeof t != "symbol" ? t + "" : t, r), r);
import { ref as Qr, reactive as Q, resolveComponent as ue, openBlock as X, createBlock as We, withCtx as Pe, renderSlot as mt, createCommentVNode as ze, createElementBlock as yt, createTextVNode as Xe, normalizeProps as Ia, guardReactiveProps as qa, createElementVNode as Je, withModifiers as $a, createVNode as _t, mergeProps as dr, toDisplayString as it } from "vue";
function ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ms = { exports: {} }, gr = { exports: {} }, xs = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), n = 0; n < a.length; n++)
      a[n] = arguments[n];
    return t.apply(r, a);
  };
}, Va = xs, wr = Object.prototype.toString, Sr = function(e) {
  return function(t) {
    var r = wr.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Oe(e) {
  return e = e.toLowerCase(), function(r) {
    return Sr(r) === e;
  };
}
function Or(e) {
  return Array.isArray(e);
}
function pt(e) {
  return typeof e > "u";
}
function Ha(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ys = Oe("ArrayBuffer");
function Ba(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ys(e.buffer), t;
}
function Ga(e) {
  return typeof e == "string";
}
function za(e) {
  return typeof e == "number";
}
function Ts(e) {
  return e !== null && typeof e == "object";
}
function lt(e) {
  if (Sr(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Ja = Oe("Date"), Za = Oe("File"), Qa = Oe("Blob"), Xa = Oe("FileList");
function br(e) {
  return wr.call(e) === "[object Function]";
}
function Ka(e) {
  return Ts(e) && br(e.pipe);
}
function en(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || wr.call(e) === t || br(e.toString) && e.toString() === t);
}
var tn = Oe("URLSearchParams");
function rn(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function sn() {
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
function an(e, t, r) {
  return Dr(t, function(a, n) {
    r && typeof a == "function" ? e[n] = Va(a, r) : e[n] = a;
  }), e;
}
function nn(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function on(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function un(e, t, r) {
  var s, a, n, i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      n = s[a], i[n] || (t[n] = e[n], i[n] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function ln(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function dn(e) {
  if (!e)
    return null;
  var t = e.length;
  if (pt(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var hn = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), E = {
  isArray: Or,
  isArrayBuffer: Ys,
  isBuffer: Ha,
  isFormData: en,
  isArrayBufferView: Ba,
  isString: Ga,
  isNumber: za,
  isObject: Ts,
  isPlainObject: lt,
  isUndefined: pt,
  isDate: Ja,
  isFile: Za,
  isBlob: Qa,
  isFunction: br,
  isStream: Ka,
  isURLSearchParams: tn,
  isStandardBrowserEnv: sn,
  forEach: Dr,
  merge: hr,
  extend: an,
  trim: rn,
  stripBOM: nn,
  inherits: on,
  toFlatObject: un,
  kindOf: Sr,
  kindOfTest: Oe,
  endsWith: ln,
  toArray: dn,
  isTypedArray: hn,
  isFileList: Xa
}, xe = E;
function Xr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Rs = function(t, r, s) {
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
        xe.isDate(g) ? g = g.toISOString() : xe.isObject(g) && (g = JSON.stringify(g)), n.push(Xr(h) + "=" + Xr(g));
      }));
    }), a = n.join("&");
  }
  if (a) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, fn = E;
function Dt() {
  this.handlers = [];
}
Dt.prototype.use = function(t, r, s) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Dt.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Dt.prototype.forEach = function(t) {
  fn.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var cn = Dt, mn = E, yn = function(t, r) {
  mn.forEach(t, function(a, n) {
    n !== r && n.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[n]);
  });
}, Es = E;
function Ce(e, t, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Es.inherits(Ce, Error, {
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
var Ps = Ce.prototype, Ns = {};
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
  Ns[e] = { value: e };
});
Object.defineProperties(Ce, Ns);
Object.defineProperty(Ps, "isAxiosError", { value: !0 });
Ce.from = function(e, t, r, s, a, n) {
  var i = Object.create(Ps);
  return Es.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), Ce.call(i, e.message, t, r, s, a), i.name = e.name, n && Object.assign(i, n), i;
};
var Ue = Ce, Fs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H = E;
function _n(e, t) {
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
          var y = i ? i + "." + h : h, g;
          if (u && !i && typeof u == "object") {
            if (H.endsWith(h, "{}"))
              u = JSON.stringify(u);
            else if (H.endsWith(h, "[]") && (g = H.toArray(u))) {
              g.forEach(function(c) {
                !H.isUndefined(c) && t.append(y, s(c));
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
var Ls = _n, Ht, Kr;
function pn() {
  if (Kr)
    return Ht;
  Kr = 1;
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
var Bt, es;
function vn() {
  if (es)
    return Bt;
  es = 1;
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
var gn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, wn = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, Sn = gn, On = wn, Cs = function(t, r) {
  return t && !Sn(r) ? On(t, r) : r;
}, Gt, ts;
function bn() {
  if (ts)
    return Gt;
  ts = 1;
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
var zt, rs;
function Dn() {
  if (rs)
    return zt;
  rs = 1;
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
var Jt, ss;
function kt() {
  if (ss)
    return Jt;
  ss = 1;
  var e = Ue, t = E;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Jt = r, Jt;
}
var Zt, as;
function kn() {
  return as || (as = 1, Zt = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Zt;
}
var Qt, ns;
function is() {
  if (ns)
    return Qt;
  ns = 1;
  var e = E, t = pn(), r = vn(), s = Rs, a = Cs, n = bn(), i = Dn(), o = Fs, u = Ue, h = kt(), y = kn();
  return Qt = function(c) {
    return new Promise(function(Fa, De) {
      var $e = c.data, je = c.headers, Ve = c.responseType, ke;
      function zr() {
        c.cancelToken && c.cancelToken.unsubscribe(ke), c.signal && c.signal.removeEventListener("abort", ke);
      }
      e.isFormData($e) && e.isStandardBrowserEnv() && delete je["Content-Type"];
      var _ = new XMLHttpRequest();
      if (c.auth) {
        var La = c.auth.username || "", Ca = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
        je.Authorization = "Basic " + btoa(La + ":" + Ca);
      }
      var $t = a(c.baseURL, c.url);
      _.open(c.method.toUpperCase(), s($t, c.params, c.paramsSerializer), !0), _.timeout = c.timeout;
      function Jr() {
        if (!!_) {
          var V = "getAllResponseHeaders" in _ ? n(_.getAllResponseHeaders()) : null, Me = !Ve || Ve === "text" || Ve === "json" ? _.responseText : _.response, ve = {
            data: Me,
            status: _.status,
            statusText: _.statusText,
            headers: V,
            config: c,
            request: _
          };
          t(function(Vt) {
            Fa(Vt), zr();
          }, function(Vt) {
            De(Vt), zr();
          }, ve), _ = null;
        }
      }
      if ("onloadend" in _ ? _.onloadend = Jr : _.onreadystatechange = function() {
        !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(Jr);
      }, _.onabort = function() {
        !_ || (De(new u("Request aborted", u.ECONNABORTED, c, _)), _ = null);
      }, _.onerror = function() {
        De(new u("Network Error", u.ERR_NETWORK, c, _, _)), _ = null;
      }, _.ontimeout = function() {
        var Me = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded", ve = c.transitional || o;
        c.timeoutErrorMessage && (Me = c.timeoutErrorMessage), De(new u(
          Me,
          ve.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          c,
          _
        )), _ = null;
      }, e.isStandardBrowserEnv()) {
        var Zr = (c.withCredentials || i($t)) && c.xsrfCookieName ? r.read(c.xsrfCookieName) : void 0;
        Zr && (je[c.xsrfHeaderName] = Zr);
      }
      "setRequestHeader" in _ && e.forEach(je, function(Me, ve) {
        typeof $e > "u" && ve.toLowerCase() === "content-type" ? delete je[ve] : _.setRequestHeader(ve, Me);
      }), e.isUndefined(c.withCredentials) || (_.withCredentials = !!c.withCredentials), Ve && Ve !== "json" && (_.responseType = c.responseType), typeof c.onDownloadProgress == "function" && _.addEventListener("progress", c.onDownloadProgress), typeof c.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", c.onUploadProgress), (c.cancelToken || c.signal) && (ke = function(V) {
        !_ || (De(!V || V && V.type ? new h() : V), _.abort(), _ = null);
      }, c.cancelToken && c.cancelToken.subscribe(ke), c.signal && (c.signal.aborted ? ke() : c.signal.addEventListener("abort", ke))), $e || ($e = null);
      var jt = y($t);
      if (jt && ["http", "https", "file"].indexOf(jt) === -1) {
        De(new u("Unsupported protocol " + jt + ":", u.ERR_BAD_REQUEST, c));
        return;
      }
      _.send($e);
    });
  }, Qt;
}
var Xt, os;
function Mn() {
  return os || (os = 1, Xt = null), Xt;
}
var R = E, us = yn, ls = Ue, xn = Fs, Yn = Ls, Tn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ds(e, t) {
  !R.isUndefined(e) && R.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Rn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = is()), e;
}
function En(e, t, r) {
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
  transitional: xn,
  adapter: Rn(),
  transformRequest: [function(t, r) {
    if (us(r, "Accept"), us(r, "Content-Type"), R.isFormData(t) || R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return ds(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = R.isObject(t), a = r && r["Content-Type"], n;
    if ((n = R.isFileList(t)) || s && a === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return Yn(n ? { "files[]": t } : t, i && new i());
    } else if (s || a === "application/json")
      return ds(r, "application/json"), En(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || Mt.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, n = !s && this.responseType === "json";
    if (n || a && R.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (n)
          throw i.name === "SyntaxError" ? ls.from(i, ls.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Mn()
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
  Mt.headers[t] = R.merge(Tn);
});
var kr = Mt, Pn = E, Nn = kr, Fn = function(t, r, s) {
  var a = this || Nn;
  return Pn.forEach(s, function(i) {
    t = i.call(a, t, r);
  }), t;
}, Kt, hs;
function As() {
  return hs || (hs = 1, Kt = function(t) {
    return !!(t && t.__CANCEL__);
  }), Kt;
}
var fs = E, er = Fn, Ln = As(), Cn = kr, An = kt();
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new An();
}
var Wn = function(t) {
  tr(t), t.headers = t.headers || {}, t.data = er.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = fs.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), fs.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete t.headers[a];
    }
  );
  var r = t.adapter || Cn.adapter;
  return r(t).then(function(a) {
    return tr(t), a.data = er.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return Ln(a) || (tr(t), a && a.response && (a.response.data = er.call(
      t,
      a.response.data,
      a.response.headers,
      t.transformResponse
    ))), Promise.reject(a);
  });
}, A = E, Ws = function(t, r) {
  r = r || {};
  var s = {};
  function a(y, g) {
    return A.isPlainObject(y) && A.isPlainObject(g) ? A.merge(y, g) : A.isPlainObject(g) ? A.merge({}, g) : A.isArray(g) ? g.slice() : g;
  }
  function n(y) {
    if (A.isUndefined(r[y])) {
      if (!A.isUndefined(t[y]))
        return a(void 0, t[y]);
    } else
      return a(t[y], r[y]);
  }
  function i(y) {
    if (!A.isUndefined(r[y]))
      return a(void 0, r[y]);
  }
  function o(y) {
    if (A.isUndefined(r[y])) {
      if (!A.isUndefined(t[y]))
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
  return A.forEach(Object.keys(t).concat(Object.keys(r)), function(g) {
    var c = h[g] || n, I = c(g);
    A.isUndefined(I) && c !== u || (s[g] = I);
  }), s;
}, rr, cs;
function Us() {
  return cs || (cs = 1, rr = {
    version: "0.27.2"
  }), rr;
}
var Un = Us().version, fe = Ue, Mr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Mr[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var ms = {};
Mr.transitional = function(t, r, s) {
  function a(n, i) {
    return "[Axios v" + Un + "] Transitional option '" + n + "'" + i + (s ? ". " + s : "");
  }
  return function(n, i, o) {
    if (t === !1)
      throw new fe(
        a(i, " has been removed" + (r ? " in " + r : "")),
        fe.ERR_DEPRECATED
      );
    return r && !ms[i] && (ms[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(n, i, o) : !0;
  };
};
function In(e, t, r) {
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
var qn = {
  assertOptions: In,
  validators: Mr
}, Is = E, $n = Rs, ys = cn, _s = Wn, xt = Ws, jn = Cs, qs = qn, Ye = qs.validators;
function Ae(e) {
  this.defaults = e, this.interceptors = {
    request: new ys(),
    response: new ys()
  };
}
Ae.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = xt(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && qs.assertOptions(s, {
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
    var u = [_s, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(i), o = Promise.resolve(r); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var h = r; a.length; ) {
    var y = a.shift(), g = a.shift();
    try {
      h = y(h);
    } catch (c) {
      g(c);
      break;
    }
  }
  try {
    o = _s(h);
  } catch (c) {
    return Promise.reject(c);
  }
  for (; i.length; )
    o = o.then(i.shift(), i.shift());
  return o;
};
Ae.prototype.getUri = function(t) {
  t = xt(this.defaults, t);
  var r = jn(t.baseURL, t.url);
  return $n(r, t.params, t.paramsSerializer);
};
Is.forEach(["delete", "get", "head", "options"], function(t) {
  Ae.prototype[t] = function(r, s) {
    return this.request(xt(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
Is.forEach(["post", "put", "patch"], function(t) {
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
  Ae.prototype[t] = r(), Ae.prototype[t + "Form"] = r(!0);
});
var Vn = Ae, sr, ps;
function Hn() {
  if (ps)
    return sr;
  ps = 1;
  var e = kt();
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
var ar, vs;
function Bn() {
  return vs || (vs = 1, ar = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), ar;
}
var nr, gs;
function Gn() {
  if (gs)
    return nr;
  gs = 1;
  var e = E;
  return nr = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, nr;
}
var ws = E, zn = xs, dt = Vn, Jn = Ws, Zn = kr;
function $s(e) {
  var t = new dt(e), r = zn(dt.prototype.request, t);
  return ws.extend(r, dt.prototype, t), ws.extend(r, t), r.create = function(a) {
    return $s(Jn(e, a));
  }, r;
}
var C = $s(Zn);
C.Axios = dt;
C.CanceledError = kt();
C.CancelToken = Hn();
C.isCancel = As();
C.VERSION = Us().version;
C.toFormData = Ls;
C.AxiosError = Ue;
C.Cancel = C.CanceledError;
C.all = function(t) {
  return Promise.all(t);
};
C.spread = Bn();
C.isAxiosError = Gn();
gr.exports = C;
gr.exports.default = C;
(function(e) {
  e.exports = gr.exports;
})(Ms);
const ie = /* @__PURE__ */ ja(Ms.exports);
class Yt {
  constructor() {
    D(this, "loading", Qr(!1));
    D(this, "result", Qr([]));
  }
  static create() {
    return new Yt();
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
const He = Q({
  default: []
});
function xr() {
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
class ce {
  constructor() {
    D(this, "state", Q({
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
class Tt {
  constructor(t) {
    D(this, "loadPath", "");
    D(this, "submitPath", "");
    D(this, "submitMethod", "post");
    D(this, "bag", "");
    D(this, "model", Q({}));
    D(this, "form", Q({}));
    D(this, "original", Q({}));
    D(this, "errors", null);
    D(this, "states", {
      load: new ce(),
      submit: new ce()
    });
    this.setPath(t.submitPath), this.submitMethod = t.submitMethod, this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form), this.states.load.loaded();
  }
  static create(t) {
    return new Proxy(new Tt(t), {
      get(r, s, a) {
        return Reflect.has(r, s) ? Reflect.get(r, s, a) : s in r.form ? r.form[s] : null;
      },
      set(r, s, a, n) {
        return Reflect.has(r, s) ? Reflect.set(r, s, a, n) : s in r.form ? r.form[s] = a : null;
      }
    });
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = xr(), this.errors.createBag(this.bag);
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
    this.errors.clear(null, this.bag), this.states.submit.loading();
    const a = r ? r(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: n } = await ie[s.method || "post"](
      t || this.submitPath,
      a,
      s
    ).catch((i) => {
      throw this.states.submit.failed(), this.errors.set(i, this.bag), i;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.states.submit.loaded(), n;
  }
  async advancedSubmit(t) {
    this.states.submit.loading();
    const { data: r } = await Promise.resolve(t(ie, this.form)).catch(
      (s) => {
        throw this.states.submit.failed(), this.errors.set(s, this.bag), s;
      }
    );
    return this.states.submit.loaded(), r;
  }
  async load(t, r) {
    this.states.load.loading();
    const { data: s } = await ie.get(t || this.loadPath, {
      params: r
    }).catch((a) => {
      throw this.states.load.failed(), a;
    });
    return this.setAttributes(s.form), s.model && Object.assign(this.model, s.model), this.states.load.loaded(), s;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
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
class Qn {
  constructor() {
    D(this, "structure", {});
    D(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    D(this, "params", Q({
      page: 1
    }));
    D(this, "router", null);
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
      }).catch((h) => {
        throw r.isProcessing = !1, h;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await ie.post(t, o).catch((h) => {
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
class Xn {
  constructor() {
    D(this, "api", null);
    D(this, "baseUrl", null);
    D(this, "structure", null);
    D(this, "options", null);
    D(this, "states", {
      fetch: new ce(),
      filter: new ce()
    });
    D(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0
    }));
    D(this, "params", Q({
      page: 1
    }));
    D(this, "state", Q({
      isFilterActive: !1
    }));
  }
  static create(t, r) {
    const s = new this();
    if (!t)
      throw Error("Structure of search query required.");
    return s.structure = Object.assign({}, t), s.options = Object.assign({
      enableSearchUpdate: !0,
      transformItems: (a) => a
    }, r), Object.assign(s.params, t), s.options.enableSearchUpdate && s.mergeSearch(), s.baseUrl = r.baseUrl, s.api = ie.create(r.axios || {}), s;
  }
  mergeSearch() {
    const t = new URLSearchParams(window.location.search.substring(1)), r = {};
    for (const [s, a] of t.entries())
      r[s] = a;
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
    const { data: r } = await this.api.get(t || this.baseUrl, {
      params: JSON.parse(JSON.stringify(this.params))
    }).catch((s) => {
      throw this.states.fetch.failed(), s;
    });
    return this.states.fetch.loaded(), this.options.enableSearchUpdate && this.refreshUrl(), r;
  }
  refreshUrl() {
    const t = window.location.href.replace(/\?.*/, ""), r = new URLSearchParams(JSON.parse(JSON.stringify(this.params))), s = t + "?" + r.toString();
    window.history.pushState({}, "", s);
  }
  transformItem(t) {
    return this.options.transformItems({
      ...t,
      states: {
        delete: new ce(),
        patch: new ce()
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
    const { path: r, action: s, attributes: a } = t, { row: n, index: i } = s, o = {
      id: n.id,
      ...a
    }, { data: u } = await this.api.delete(r || this.baseUrl, {
      data: o
    }).catch((h) => {
      throw h;
    });
    u.row && Object.assign(n, u.row);
  }
  async delete(t) {
    const { path: r, action: s, attributes: a } = t, { row: n, index: i } = s, o = {
      id: n.id,
      ...a
    };
    n.states.delete.loading();
    const { data: u } = await this.api.delete(r || this.baseUrl, {
      data: o
    }).catch((y) => {
      throw n.states.delete.failed(), y;
    });
    n.states.delete.loaded(), u.row && Object.assign(n, u.row);
    const h = await this.fetch();
    if (this.query.items.splice(i, 1), !h.query.items.length) {
      this.params.page--, await this.load();
      return;
    }
    if (this.query.items.length < h.query.items.length) {
      const y = h.query.items[h.query.items.length - 1];
      this.query.items.push(
        this.transformItem(
          y
        )
      );
    }
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
const pe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of t)
    r[s] = a;
  return r;
}, Kn = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, ei = /* @__PURE__ */ Xe("Submit"), ti = /* @__PURE__ */ Xe("Processing..."), ri = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function si(e, t, r, s, a, n) {
  const i = ue("o-button");
  return X(), We(i, { disabled: r.loading }, {
    default: Pe(() => [
      r.loading ? ze("", !0) : mt(e.$slots, "default", { key: 0 }, () => [
        ei
      ]),
      r.loading ? mt(e.$slots, "loading", { key: 1 }, () => [
        ti
      ]) : ze("", !0),
      r.loading ? (X(), yt("i", ri)) : ze("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ai = /* @__PURE__ */ pe(Kn, [["render", si]]), ni = {
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
}, ii = /* @__PURE__ */ Je("ul", null, [
  /* @__PURE__ */ Je("li")
], -1);
function oi(e, t, r, s, a, n) {
  return mt(e.$slots, "default", Ia(qa({ add: n.add, remove: n.remove, items: a.items })), () => [
    ii
  ]);
}
const ui = /* @__PURE__ */ pe(ni, [["render", oi]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var js;
function d() {
  return js.apply(null, arguments);
}
function li(e) {
  js = e;
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
function Yr(e) {
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
function le(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function rt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Vs(e, t) {
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
function ee(e, t, r, s) {
  return ma(e, t, r, s, !0).utc();
}
function di() {
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
  return e._pf == null && (e._pf = di()), e._pf;
}
var fr;
Array.prototype.some ? fr = Array.prototype.some : fr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function Tr(e) {
  if (e._isValid == null) {
    var t = p(e), r = fr.call(t.parsedDateParts, function(a) {
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
  var t = ee(NaN);
  return e != null ? me(p(t), e) : p(t).userInvalidated = !0, t;
}
var Ss = d.momentProperties = [], ir = !1;
function Rr(e, t) {
  var r, s, a, n = Ss.length;
  if (L(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), L(t._i) || (e._i = t._i), L(t._f) || (e._f = t._f), L(t._l) || (e._l = t._l), L(t._strict) || (e._strict = t._strict), L(t._tzm) || (e._tzm = t._tzm), L(t._isUTC) || (e._isUTC = t._isUTC), L(t._offset) || (e._offset = t._offset), L(t._pf) || (e._pf = p(t)), L(t._locale) || (e._locale = t._locale), n > 0)
    for (r = 0; r < n; r++)
      s = Ss[r], a = t[s], L(a) || (e[s] = a);
  return e;
}
function st(e) {
  Rr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ir === !1 && (ir = !0, d.updateOffset(this), ir = !1);
}
function z(e) {
  return e instanceof st || e != null && e._isAMomentObject != null;
}
function Hs(e) {
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
      Hs(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Os = {};
function Bs(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Os[e] || (Hs(t), Os[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function te(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function hi(e) {
  var t, r;
  for (r in e)
    S(e, r) && (t = e[r], te(t) ? this[r] = t : this["_" + r] = t);
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
function Er(e) {
  e != null && this.set(e);
}
var mr;
Object.keys ? mr = Object.keys : mr = function(e) {
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
function ci(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return te(s) ? s.call(t, r) : s;
}
function K(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, n = e >= 0;
  return (n ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var Pr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ot = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, or = {}, Ne = {};
function m(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Ne[e] = a), t && (Ne[t[0]] = function() {
    return K(a.apply(this, arguments), t[1], t[2]);
  }), r && (Ne[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function mi(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function yi(e) {
  var t = e.match(Pr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Ne[t[r]] ? t[r] = Ne[t[r]] : t[r] = mi(t[r]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < s; i++)
      n += te(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function ht(e, t) {
  return e.isValid() ? (t = Gs(t, e.localeData()), or[t] = or[t] || yi(t), or[t](e)) : e.localeData().invalidDate();
}
function Gs(e, t) {
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
var _i = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function pi(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Pr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var vi = "Invalid date";
function gi() {
  return this._invalidDate;
}
var wi = "%d", Si = /\d{1,2}/;
function Oi(e) {
  return this._ordinal.replace("%d", e);
}
var bi = {
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
  return te(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function ki(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return te(r) ? r(t) : r.replace(/%s/i, t);
}
var Ze = {};
function N(e, t) {
  var r = e.toLowerCase();
  Ze[r] = Ze[r + "s"] = Ze[t] = e;
}
function j(e) {
  return typeof e == "string" ? Ze[e] || Ze[e.toLowerCase()] : void 0;
}
function Nr(e) {
  var t = {}, r, s;
  for (s in e)
    S(e, s) && (r = j(s), r && (t[r] = e[s]));
  return t;
}
var zs = {};
function F(e, t) {
  zs[e] = t;
}
function Mi(e) {
  var t = [], r;
  for (r in e)
    S(e, r) && t.push({ unit: r, priority: zs[r] });
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
    return r != null ? (Js(this, e, r), d.updateOffset(this, t), this) : vt(this, e);
  };
}
function vt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Js(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Et(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    At(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function xi(e) {
  return e = j(e), te(this[e]) ? this[e]() : this;
}
function Yi(e, t) {
  if (typeof e == "object") {
    e = Nr(e);
    var r = Mi(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = j(e), te(this[e]))
    return this[e](t);
  return this;
}
var Zs = /\d/, U = /\d\d/, Qs = /\d{3}/, Fr = /\d{4}/, Pt = /[+-]?\d{6}/, M = /\d\d?/, Xs = /\d\d\d\d?/, Ks = /\d\d\d\d\d\d?/, Nt = /\d{1,3}/, Lr = /\d{1,4}/, Ft = /[+-]?\d{1,6}/, qe = /\d+/, Lt = /[+-]?\d+/, Ti = /Z|[+-]\d\d:?\d\d/gi, Ct = /Z|[+-]\d\d(?::?\d\d)?/gi, Ri = /[+-]?\d+(\.\d{1,3})?/, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, gt;
gt = {};
function f(e, t, r) {
  gt[e] = te(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function Ei(e, t) {
  return S(gt, e) ? gt[e](t._strict, t._locale) : new RegExp(Pi(e));
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
var yr = {};
function b(e, t) {
  var r, s = t, a;
  for (typeof e == "string" && (e = [e]), le(t) && (s = function(n, i) {
    i[t] = v(n);
  }), a = e.length, r = 0; r < a; r++)
    yr[e[r]] = s;
}
function nt(e, t) {
  b(e, function(r, s, a, n) {
    a._w = a._w || {}, t(r, a._w, a, n);
  });
}
function Ni(e, t, r) {
  t != null && S(yr, e) && yr[e](t, r._a, r, e);
}
var P = 0, ae = 1, Z = 2, T = 3, B = 4, ne = 5, we = 6, Fi = 7, Li = 8;
function Ci(e, t) {
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
function At(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Ci(t, 12);
  return e += (t - r) / 12, r === 1 ? Et(e) ? 29 : 28 : 31 - r % 7 % 2;
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
f("M", M);
f("MM", M, U);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
b(["M", "MM"], function(e, t) {
  t[ae] = v(e) - 1;
});
b(["MMM", "MMMM"], function(e, t, r, s) {
  var a = r._locale.monthsParse(e, s, r._strict);
  a != null ? t[ae] = a : p(r).invalidMonth = e;
});
var Ai = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ea = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ta = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Wi = at, Ui = at;
function Ii(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ta).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function qi(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ta.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function $i(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      n = ee([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function ji(e, t, r) {
  var s, a, n;
  if (this._monthsParseExact)
    return $i.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (a = ee([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
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
function ra(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !le(t))
      return e;
  }
  return r = Math.min(e.date(), At(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function sa(e) {
  return e != null ? (ra(this, e), d.updateOffset(this, !0), this) : vt(this, "Month");
}
function Vi() {
  return At(this.year(), this.month());
}
function Hi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || aa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Wi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Bi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || aa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Ui), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function aa() {
  function e(i, o) {
    return o.length - i.length;
  }
  var t = [], r = [], s = [], a, n;
  for (a = 0; a < 12; a++)
    n = ee([2e3, a]), t.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
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
  return e <= 9999 ? K(e, 4) : "+" + e;
});
m(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
m(0, ["YYYY", 4], 0, "year");
m(0, ["YYYYY", 5], 0, "year");
m(0, ["YYYYYY", 6, !0], 0, "year");
N("year", "y");
F("year", 1);
f("Y", Lt);
f("YY", M, U);
f("YYYY", Lr, Fr);
f("YYYYY", Ft, Pt);
f("YYYYYY", Ft, Pt);
b(["YYYYY", "YYYYYY"], P);
b("YYYY", function(e, t) {
  t[P] = e.length === 2 ? d.parseTwoDigitYear(e) : v(e);
});
b("YY", function(e, t) {
  t[P] = d.parseTwoDigitYear(e);
});
b("Y", function(e, t) {
  t[P] = parseInt(e, 10);
});
function Qe(e) {
  return Et(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var na = Ie("FullYear", !0);
function Gi() {
  return Et(this.year());
}
function zi(e, t, r, s, a, n, i) {
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
function ia(e, t, r, s, a) {
  var n = (7 + r - s) % 7, i = wt(e, s, a), o = 1 + 7 * (t - 1) + n + i, u, h;
  return o <= 0 ? (u = e - 1, h = Qe(u) + o) : o > Qe(e) ? (u = e + 1, h = o - Qe(e)) : (u = e, h = o), {
    year: u,
    dayOfYear: h
  };
}
function et(e, t, r) {
  var s = wt(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + oe(i, t, r)) : a > oe(e.year(), t, r) ? (n = a - oe(e.year(), t, r), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function oe(e, t, r) {
  var s = wt(e, t, r), a = wt(e + 1, t, r);
  return (Qe(e) - s + a) / 7;
}
m("w", ["ww", 2], "wo", "week");
m("W", ["WW", 2], "Wo", "isoWeek");
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
function Ji(e) {
  return et(e, this._week.dow, this._week.doy).week;
}
var Zi = {
  dow: 0,
  doy: 6
};
function Qi() {
  return this._week.dow;
}
function Xi() {
  return this._week.doy;
}
function Ki(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function eo(e) {
  var t = et(this, 1, 4).week;
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
  a != null ? t.d = a : p(r).invalidWeekday = e;
});
nt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = v(e);
});
function to(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ro(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Cr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var so = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), oa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ao = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), no = at, io = at, oo = at;
function uo(e, t) {
  var r = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Cr(r, this._week.dow) : e ? r[e.day()] : r;
}
function lo(e) {
  return e === !0 ? Cr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ho(e) {
  return e === !0 ? Cr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function fo(e, t, r) {
  var s, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      n = ee([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 || (a = Y.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function co(e, t, r) {
  var s, a, n;
  if (this._weekdaysParseExact)
    return fo.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (a = ee([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
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
function mo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = to(e, this.localeData()), this.add(e - t, "d")) : t;
}
function yo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function _o(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ro(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function po(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ar.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = no), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function vo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ar.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = io), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function go(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Ar.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = oo), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ar() {
  function e(y, g) {
    return g.length - y.length;
  }
  var t = [], r = [], s = [], a = [], n, i, o, u, h;
  for (n = 0; n < 7; n++)
    i = ee([2e3, 1]).day(n), o = W(this.weekdaysMin(i, "")), u = W(this.weekdaysShort(i, "")), h = W(this.weekdays(i, "")), t.push(o), r.push(u), s.push(h), a.push(o), a.push(u), a.push(h);
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
function Wr() {
  return this.hours() % 12 || 12;
}
function wo() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Wr);
m("k", ["kk", 2], 0, wo);
m("hmm", 0, 0, function() {
  return "" + Wr.apply(this) + K(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Wr.apply(this) + K(this.minutes(), 2) + K(this.seconds(), 2);
});
m("Hmm", 0, 0, function() {
  return "" + this.hours() + K(this.minutes(), 2);
});
m("Hmmss", 0, 0, function() {
  return "" + this.hours() + K(this.minutes(), 2) + K(this.seconds(), 2);
});
function ua(e, t) {
  m(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ua("a", !0);
ua("A", !1);
N("hour", "h");
F("hour", 13);
function la(e, t) {
  return t._meridiemParse;
}
f("a", la);
f("A", la);
f("H", M);
f("h", M);
f("k", M);
f("HH", M, U);
f("hh", M, U);
f("kk", M, U);
f("hmm", Xs);
f("hmmss", Ks);
f("Hmm", Xs);
f("Hmmss", Ks);
b(["H", "HH"], T);
b(["k", "kk"], function(e, t, r) {
  var s = v(e);
  t[T] = s === 24 ? 0 : s;
});
b(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
b(["h", "hh"], function(e, t, r) {
  t[T] = v(e), p(r).bigHour = !0;
});
b("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s)), p(r).bigHour = !0;
});
b("hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ne] = v(e.substr(a)), p(r).bigHour = !0;
});
b("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s));
});
b("Hmmss", function(e, t, r) {
  var s = e.length - 4, a = e.length - 2;
  t[T] = v(e.substr(0, s)), t[B] = v(e.substr(s, 2)), t[ne] = v(e.substr(a));
});
function So(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Oo = /[ap]\.?m?\.?/i, bo = Ie("Hours", !0);
function Do(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var da = {
  calendar: fi,
  longDateFormat: _i,
  invalidDate: vi,
  ordinal: wi,
  dayOfMonthOrdinalParse: Si,
  relativeTime: bi,
  months: Ai,
  monthsShort: ea,
  week: Zi,
  weekdays: so,
  weekdaysMin: ao,
  weekdaysShort: oa,
  meridiemParse: Oo
}, x = {}, Be = {}, tt;
function ko(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function bs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Mo(e) {
  for (var t = 0, r, s, a, n; t < e.length; ) {
    for (n = bs(e[t]).split("-"), r = n.length, s = bs(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = Wt(n.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && ko(n, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return tt;
}
function xo(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Wt(e) {
  var t = null, r;
  if (x[e] === void 0 && typeof module < "u" && module && module.exports && xo(e))
    try {
      t = tt._abbr, r = require, r("./locale/" + e), _e(t);
    } catch {
      x[e] = null;
    }
  return x[e];
}
function _e(e, t) {
  var r;
  return e && (L(t) ? r = de(e) : r = Ur(e, t), r ? tt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), tt._abbr;
}
function Ur(e, t) {
  if (t !== null) {
    var r, s = da;
    if (t.abbr = e, x[e] != null)
      Bs(
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
    return x[e] = new Er(cr(s, t)), Be[e] && Be[e].forEach(function(a) {
      Ur(a.name, a.config);
    }), _e(e), x[e];
  } else
    return delete x[e], null;
}
function Yo(e, t) {
  if (t != null) {
    var r, s, a = da;
    x[e] != null && x[e].parentLocale != null ? x[e].set(cr(x[e]._config, t)) : (s = Wt(e), s != null && (a = s._config), t = cr(a, t), s == null && (t.abbr = e), r = new Er(t), r.parentLocale = x[e], x[e] = r), _e(e);
  } else
    x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === _e() && _e(e)) : x[e] != null && delete x[e]);
  return x[e];
}
function de(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return tt;
  if (!G(e)) {
    if (t = Wt(e), t)
      return t;
    e = [e];
  }
  return Mo(e);
}
function To() {
  return mr(x);
}
function Ir(e) {
  var t, r = e._a;
  return r && p(e).overflow === -2 && (t = r[ae] < 0 || r[ae] > 11 ? ae : r[Z] < 1 || r[Z] > At(r[P], r[ae]) ? Z : r[T] < 0 || r[T] > 24 || r[T] === 24 && (r[B] !== 0 || r[ne] !== 0 || r[we] !== 0) ? T : r[B] < 0 || r[B] > 59 ? B : r[ne] < 0 || r[ne] > 59 ? ne : r[we] < 0 || r[we] > 999 ? we : -1, p(e)._overflowDayOfYear && (t < P || t > Z) && (t = Z), p(e)._overflowWeeks && t === -1 && (t = Fi), p(e)._overflowWeekday && t === -1 && (t = Li), p(e).overflow = t), e;
}
var Ro = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Eo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Po = /Z|[+-]\d\d(?::?\d\d)?/, ut = [
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
], No = /^\/?Date\((-?\d+)/i, Fo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Lo = {
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
function ha(e) {
  var t, r, s = e._i, a = Ro.exec(s) || Eo.exec(s), n, i, o, u, h = ut.length, y = ur.length;
  if (a) {
    for (p(e).iso = !0, t = 0, r = h; t < r; t++)
      if (ut[t][1].exec(a[1])) {
        i = ut[t][0], n = ut[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, r = y; t < r; t++)
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
      if (Po.exec(a[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (u || ""), $r(e);
  } else
    e._isValid = !1;
}
function Co(e, t, r, s, a, n) {
  var i = [
    Ao(e),
    ea.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Ao(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Wo(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Uo(e, t, r) {
  if (e) {
    var s = oa.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== a)
      return p(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Io(e, t, r) {
  if (e)
    return Lo[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, n = (s - a) / 100;
  return n * 60 + a;
}
function fa(e) {
  var t = Fo.exec(Wo(e._i)), r;
  if (t) {
    if (r = Co(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Uo(t[1], r, e))
      return;
    e._a = r, e._tzm = Io(t[8], t[9], t[10]), e._d = Ke.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function qo(e) {
  var t = No.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (ha(e), e._isValid === !1)
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
function Re(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function $o(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function qr(e) {
  var t, r, s = [], a, n, i;
  if (!e._d) {
    for (a = $o(e), e._w && e._a[Z] == null && e._a[ae] == null && jo(e), e._dayOfYear != null && (i = Re(e._a[P], a[P]), (e._dayOfYear > Qe(i) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), r = Ke(i, 0, e._dayOfYear), e._a[ae] = r.getUTCMonth(), e._a[Z] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[T] === 24 && e._a[B] === 0 && e._a[ne] === 0 && e._a[we] === 0 && (e._nextDay = !0, e._a[T] = 0), e._d = (e._useUTC ? Ke : zi).apply(
      null,
      s
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[T] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (p(e).weekdayMismatch = !0);
  }
}
function jo(e) {
  var t, r, s, a, n, i, o, u, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, r = Re(
    t.GG,
    e._a[P],
    et(k(), 1, 4).year
  ), s = Re(t.W, 1), a = Re(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, h = et(k(), n, i), r = Re(t.gg, e._a[P], h.year), s = Re(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (u = !0)) : a = n), s < 1 || s > oe(r, n, i) ? p(e)._overflowWeeks = !0 : u != null ? p(e)._overflowWeekday = !0 : (o = ia(r, s, a, n, i), e._a[P] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function $r(e) {
  if (e._f === d.ISO_8601) {
    ha(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    fa(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, r, s, a, n, i, o = t.length, u = 0, h, y;
  for (a = Gs(e._f, e._locale).match(Pr) || [], y = a.length, r = 0; r < y; r++)
    n = a[r], s = (t.match(Ei(n, e)) || [])[0], s && (i = t.substr(0, t.indexOf(s)), i.length > 0 && p(e).unusedInput.push(i), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Ne[n] ? (s ? p(e).empty = !1 : p(e).unusedTokens.push(n), Ni(n, s, e)) : e._strict && !s && p(e).unusedTokens.push(n);
  p(e).charsLeftOver = o - u, t.length > 0 && p(e).unusedInput.push(t), e._a[T] <= 12 && p(e).bigHour === !0 && e._a[T] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[T] = Vo(
    e._locale,
    e._a[T],
    e._meridiem
  ), h = p(e).era, h !== null && (e._a[P] = e._locale.erasConvertYear(h, e._a[P])), qr(e), Ir(e);
}
function Vo(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Ho(e) {
  var t, r, s, a, n, i, o = !1, u = e._f.length;
  if (u === 0) {
    p(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    n = 0, i = !1, t = Rr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], $r(t), Tr(t) && (i = !0), n += p(t).charsLeftOver, n += p(t).unusedTokens.length * 10, p(t).score = n, o ? n < s && (s = n, r = t) : (s == null || n < s || i) && (s = n, r = t, i && (o = !0));
  me(e, r || t);
}
function Bo(e) {
  if (!e._d) {
    var t = Nr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Vs(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), qr(e);
  }
}
function Go(e) {
  var t = new st(Ir(ca(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ca(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || de(e._l), t === null || r === void 0 && t === "" ? Rt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new st(Ir(t)) : (rt(t) ? e._d = t : G(r) ? Ho(e) : r ? $r(e) : zo(e), Tr(e) || (e._d = null), e));
}
function zo(e) {
  var t = e._i;
  L(t) ? e._d = new Date(d.now()) : rt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? qo(e) : G(t) ? (e._a = Vs(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), qr(e)) : Se(t) ? Bo(e) : le(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ma(e, t, r, s, a) {
  var n = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Se(e) && Yr(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = r, n._i = e, n._f = t, n._strict = s, Go(n);
}
function k(e, t, r, s) {
  return ma(e, t, r, s, !1);
}
var Jo = $(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Rt();
  }
), Zo = $(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Rt();
  }
);
function ya(e, t) {
  var r, s;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return k();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Qo() {
  var e = [].slice.call(arguments, 0);
  return ya("isBefore", e);
}
function Xo() {
  var e = [].slice.call(arguments, 0);
  return ya("isAfter", e);
}
var Ko = function() {
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
function eu(e) {
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
function tu() {
  return this._isValid;
}
function ru() {
  return J(NaN);
}
function Ut(e) {
  var t = Nr(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, u = t.minute || 0, h = t.second || 0, y = t.millisecond || 0;
  this._isValid = eu(t), this._milliseconds = +y + h * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = de(), this._bubble();
}
function ft(e) {
  return e instanceof Ut;
}
function _r(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function su(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < s; i++)
    (r && e[i] !== t[i] || !r && v(e[i]) !== v(t[i])) && n++;
  return n + a;
}
function _a(e, t) {
  m(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + K(~~(r / 60), 2) + t + K(~~r % 60, 2);
  });
}
_a("Z", ":");
_a("ZZ", "");
f("Z", Ct);
f("ZZ", Ct);
b(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = jr(Ct, e);
});
var au = /([\+\-]|\d\d)/gi;
function jr(e, t) {
  var r = (t || "").match(e), s, a, n;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(au) || ["-", 0, 0], n = +(a[1] * 60) + v(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Vr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (z(e) || rt(e) ? e.valueOf() : k(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), d.updateOffset(r, !1), r) : k(e).local();
}
function pr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function nu(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = jr(Ct, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (a = pr(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? ga(
      this,
      J(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : pr(this);
}
function iu(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function ou(e) {
  return this.utcOffset(0, e);
}
function uu(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(pr(this), "m")), this;
}
function lu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = jr(Ti, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function du(e) {
  return this.isValid() ? (e = e ? k(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function hu() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function fu() {
  if (!L(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Rr(e, this), e = ca(e), e._a ? (t = e._isUTC ? ee(e._a) : k(e._a), this._isDSTShifted = this.isValid() && su(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function cu() {
  return this.isValid() ? !this._isUTC : !1;
}
function mu() {
  return this.isValid() ? this._isUTC : !1;
}
function pa() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var yu = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, _u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function J(e, t) {
  var r = e, s = null, a, n, i;
  return ft(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : le(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = yu.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: v(s[Z]) * a,
    h: v(s[T]) * a,
    m: v(s[B]) * a,
    s: v(s[ne]) * a,
    ms: v(_r(s[we] * 1e3)) * a
  }) : (s = _u.exec(e)) ? (a = s[1] === "-" ? -1 : 1, r = {
    y: ge(s[2], a),
    M: ge(s[3], a),
    w: ge(s[4], a),
    d: ge(s[5], a),
    h: ge(s[6], a),
    m: ge(s[7], a),
    s: ge(s[8], a)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = pu(
    k(r.from),
    k(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), n = new Ut(r), ft(e) && S(e, "_locale") && (n._locale = e._locale), ft(e) && S(e, "_isValid") && (n._isValid = e._isValid), n;
}
J.fn = Ut.prototype;
J.invalid = ru;
function ge(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Ds(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function pu(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Vr(t, e), e.isBefore(t) ? r = Ds(e, t) : (r = Ds(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function va(e, t) {
  return function(r, s) {
    var a, n;
    return s !== null && !isNaN(+s) && (Bs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = r, r = s, s = n), a = J(r, s), ga(this, a, e), this;
  };
}
function ga(e, t, r, s) {
  var a = t._milliseconds, n = _r(t._days), i = _r(t._months);
  !e.isValid() || (s = s == null ? !0 : s, i && ra(e, vt(e, "Month") + i * r), n && Js(e, "Date", vt(e, "Date") + n * r), a && e._d.setTime(e._d.valueOf() + a * r), s && d.updateOffset(e, n || i));
}
var vu = va(1, "add"), gu = va(-1, "subtract");
function wa(e) {
  return typeof e == "string" || e instanceof String;
}
function wu(e) {
  return z(e) || rt(e) || wa(e) || le(e) || Ou(e) || Su(e) || e === null || e === void 0;
}
function Su(e) {
  var t = Se(e) && !Yr(e), r = !1, s = [
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
function Ou(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !le(s) && wa(e);
  }).length === 0), t && r;
}
function bu(e) {
  var t = Se(e) && !Yr(e), r = !1, s = [
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
  arguments.length === 1 && (arguments[0] ? wu(arguments[0]) ? (e = arguments[0], t = void 0) : bu(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || k(), s = Vr(r, this).startOf("day"), a = d.calendarFormat(this, s) || "sameElse", n = t && (te(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, k(r))
  );
}
function Mu() {
  return new st(this);
}
function xu(e, t) {
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
function Ru(e, t) {
  var r = z(e) ? e : k(e), s;
  return this.isValid() && r.isValid() ? (t = j(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Eu(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Pu(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Nu(e, t, r) {
  var s, a, n;
  if (!this.isValid())
    return NaN;
  if (s = Vr(e, this), !s.isValid())
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
function Fu() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Lu(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? ht(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : te(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ht(r, "Z")) : ht(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Cu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(r + s + a + n);
}
function Au(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = ht(this, e);
  return this.localeData().postformat(t);
}
function Wu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? J({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Uu(e) {
  return this.from(k(), e);
}
function Iu(e, t) {
  return this.isValid() && (z(e) && e.isValid() || k(e).isValid()) ? J({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function qu(e) {
  return this.to(k(), e);
}
function Sa(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = de(e), t != null && (this._locale = t), this);
}
var Oa = $(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ba() {
  return this._locale;
}
var St = 1e3, Fe = 60 * St, Ot = 60 * Fe, Da = (365 * 400 + 97) * 24 * Ot;
function Le(e, t) {
  return (e % t + t) % t;
}
function ka(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Da : new Date(e, t, r).valueOf();
}
function Ma(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Da : Date.UTC(e, t, r);
}
function $u(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ma : ka, e) {
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
      t = this._d.valueOf(), t -= Le(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        Ot
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Le(t, Fe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Le(t, St);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function ju(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ma : ka, e) {
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
      t = this._d.valueOf(), t += Ot - Le(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        Ot
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Fe - Le(t, Fe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += St - Le(t, St) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Vu() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Hu() {
  return Math.floor(this.valueOf() / 1e3);
}
function Bu() {
  return new Date(this.valueOf());
}
function Gu() {
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
function zu() {
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
function Ju() {
  return this.isValid() ? this.toISOString() : null;
}
function Zu() {
  return Tr(this);
}
function Qu() {
  return me({}, p(this));
}
function Xu() {
  return p(this).overflow;
}
function Ku() {
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
f("N", Hr);
f("NN", Hr);
f("NNN", Hr);
f("NNNN", dl);
f("NNNNN", hl);
b(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var a = r._locale.erasParse(e, s, r._strict);
    a ? p(r).era = a : p(r).invalidEra = e;
  }
);
f("y", qe);
f("yy", qe);
f("yyy", qe);
f("yyyy", qe);
f("yo", fl);
b(["y", "yy", "yyy", "yyyy"], P);
b(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[P] = r._locale.eraYearOrdinalParse(e, a) : t[P] = parseInt(e, 10);
});
function el(e, t) {
  var r, s, a, n = this._eras || de("en")._eras;
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
function tl(e, t, r) {
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
function rl(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * r;
}
function sl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function al() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function nl() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function il() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - d(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function ol(e) {
  return S(this, "_erasNameRegex") || Br.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function ul(e) {
  return S(this, "_erasAbbrRegex") || Br.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ll(e) {
  return S(this, "_erasNarrowRegex") || Br.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Hr(e, t) {
  return t.erasAbbrRegex(e);
}
function dl(e, t) {
  return t.erasNameRegex(e);
}
function hl(e, t) {
  return t.erasNarrowRegex(e);
}
function fl(e, t) {
  return t._eraYearOrdinalRegex || qe;
}
function Br() {
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
function It(e, t) {
  m(0, [e, e.length], 0, t);
}
It("gggg", "weekYear");
It("ggggg", "weekYear");
It("GGGG", "isoWeekYear");
It("GGGGG", "isoWeekYear");
N("weekYear", "gg");
N("isoWeekYear", "GG");
F("weekYear", 1);
F("isoWeekYear", 1);
f("G", Lt);
f("g", Lt);
f("GG", M, U);
f("gg", M, U);
f("GGGG", Lr, Fr);
f("gggg", Lr, Fr);
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
function cl(e) {
  return xa.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ml(e) {
  return xa.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function yl() {
  return oe(this.year(), 1, 4);
}
function _l() {
  return oe(this.isoWeekYear(), 1, 4);
}
function pl() {
  var e = this.localeData()._week;
  return oe(this.year(), e.dow, e.doy);
}
function vl() {
  var e = this.localeData()._week;
  return oe(this.weekYear(), e.dow, e.doy);
}
function xa(e, t, r, s, a) {
  var n;
  return e == null ? et(this, s, a).year : (n = oe(e, s, a), t > n && (t = n), gl.call(this, e, t, r, s, a));
}
function gl(e, t, r, s, a) {
  var n = ia(e, t, r, s, a), i = Ke(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
m("Q", 0, "Qo", "quarter");
N("quarter", "Q");
F("quarter", 7);
f("Q", Zs);
b("Q", function(e, t) {
  t[ae] = (v(e) - 1) * 3;
});
function wl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
m("D", ["DD", 2], "Do", "date");
N("date", "D");
F("date", 9);
f("D", M);
f("DD", M, U);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
b(["D", "DD"], Z);
b("Do", function(e, t) {
  t[Z] = v(e.match(M)[0]);
});
var Ya = Ie("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
F("dayOfYear", 4);
f("DDD", Nt);
f("DDDD", Qs);
b(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = v(e);
});
function Sl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
m("m", ["mm", 2], 0, "minute");
N("minute", "m");
F("minute", 14);
f("m", M);
f("mm", M, U);
b(["m", "mm"], B);
var Ol = Ie("Minutes", !1);
m("s", ["ss", 2], 0, "second");
N("second", "s");
F("second", 15);
f("s", M);
f("ss", M, U);
b(["s", "ss"], ne);
var bl = Ie("Seconds", !1);
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
f("S", Nt, Zs);
f("SS", Nt, U);
f("SSS", Nt, Qs);
var ye, Ta;
for (ye = "SSSS"; ye.length <= 9; ye += "S")
  f(ye, qe);
function Dl(e, t) {
  t[we] = v(("0." + e) * 1e3);
}
for (ye = "S"; ye.length <= 9; ye += "S")
  b(ye, Dl);
Ta = Ie("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function kl() {
  return this._isUTC ? "UTC" : "";
}
function Ml() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = st.prototype;
l.add = vu;
l.calendar = ku;
l.clone = Mu;
l.diff = Nu;
l.endOf = ju;
l.format = Au;
l.from = Wu;
l.fromNow = Uu;
l.to = Iu;
l.toNow = qu;
l.get = xi;
l.invalidAt = Xu;
l.isAfter = xu;
l.isBefore = Yu;
l.isBetween = Tu;
l.isSame = Ru;
l.isSameOrAfter = Eu;
l.isSameOrBefore = Pu;
l.isValid = Zu;
l.lang = Oa;
l.locale = Sa;
l.localeData = ba;
l.max = Zo;
l.min = Jo;
l.parsingFlags = Qu;
l.set = Yi;
l.startOf = $u;
l.subtract = gu;
l.toArray = Gu;
l.toObject = zu;
l.toDate = Bu;
l.toISOString = Lu;
l.inspect = Cu;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Ju;
l.toString = Fu;
l.unix = Hu;
l.valueOf = Vu;
l.creationData = Ku;
l.eraName = sl;
l.eraNarrow = al;
l.eraAbbr = nl;
l.eraYear = il;
l.year = na;
l.isLeapYear = Gi;
l.weekYear = cl;
l.isoWeekYear = ml;
l.quarter = l.quarters = wl;
l.month = sa;
l.daysInMonth = Vi;
l.week = l.weeks = Ki;
l.isoWeek = l.isoWeeks = eo;
l.weeksInYear = pl;
l.weeksInWeekYear = vl;
l.isoWeeksInYear = yl;
l.isoWeeksInISOWeekYear = _l;
l.date = Ya;
l.day = l.days = mo;
l.weekday = yo;
l.isoWeekday = _o;
l.dayOfYear = Sl;
l.hour = l.hours = bo;
l.minute = l.minutes = Ol;
l.second = l.seconds = bl;
l.millisecond = l.milliseconds = Ta;
l.utcOffset = nu;
l.utc = ou;
l.local = uu;
l.parseZone = lu;
l.hasAlignedHourOffset = du;
l.isDST = hu;
l.isLocal = cu;
l.isUtcOffset = mu;
l.isUtc = pa;
l.isUTC = pa;
l.zoneAbbr = kl;
l.zoneName = Ml;
l.dates = $(
  "dates accessor is deprecated. Use date instead.",
  Ya
);
l.months = $(
  "months accessor is deprecated. Use month instead",
  sa
);
l.years = $(
  "years accessor is deprecated. Use year instead",
  na
);
l.zone = $(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  iu
);
l.isDSTShifted = $(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  fu
);
function xl(e) {
  return k(e * 1e3);
}
function Yl() {
  return k.apply(null, arguments).parseZone();
}
function Ra(e) {
  return e;
}
var O = Er.prototype;
O.calendar = ci;
O.longDateFormat = pi;
O.invalidDate = gi;
O.ordinal = Oi;
O.preparse = Ra;
O.postformat = Ra;
O.relativeTime = Di;
O.pastFuture = ki;
O.set = hi;
O.eras = el;
O.erasParse = tl;
O.erasConvertYear = rl;
O.erasAbbrRegex = ul;
O.erasNameRegex = ol;
O.erasNarrowRegex = ll;
O.months = Ii;
O.monthsShort = qi;
O.monthsParse = ji;
O.monthsRegex = Bi;
O.monthsShortRegex = Hi;
O.week = Ji;
O.firstDayOfYear = Xi;
O.firstDayOfWeek = Qi;
O.weekdays = uo;
O.weekdaysMin = ho;
O.weekdaysShort = lo;
O.weekdaysParse = co;
O.weekdaysRegex = po;
O.weekdaysShortRegex = vo;
O.weekdaysMinRegex = go;
O.isPM = So;
O.meridiem = Do;
function bt(e, t, r, s) {
  var a = de(), n = ee().set(s, t);
  return a[r](n, e);
}
function Ea(e, t, r) {
  if (le(e) && (t = e, e = void 0), e = e || "", t != null)
    return bt(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = bt(e, s, r, "month");
  return a;
}
function Gr(e, t, r, s) {
  typeof e == "boolean" ? (le(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, le(t) && (r = t, t = void 0), t = t || "");
  var a = de(), n = e ? a._week.dow : 0, i, o = [];
  if (r != null)
    return bt(t, (r + n) % 7, s, "day");
  for (i = 0; i < 7; i++)
    o[i] = bt(t, (i + n) % 7, s, "day");
  return o;
}
function Tl(e, t) {
  return Ea(e, t, "months");
}
function Rl(e, t) {
  return Ea(e, t, "monthsShort");
}
function El(e, t, r) {
  return Gr(e, t, r, "weekdays");
}
function Pl(e, t, r) {
  return Gr(e, t, r, "weekdaysShort");
}
function Nl(e, t, r) {
  return Gr(e, t, r, "weekdaysMin");
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
    var t = e % 10, r = v(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
d.lang = $(
  "moment.lang is deprecated. Use moment.locale instead.",
  _e
);
d.langData = $(
  "moment.langData is deprecated. Use moment.localeData instead.",
  de
);
var re = Math.abs;
function Fl() {
  var e = this._data;
  return this._milliseconds = re(this._milliseconds), this._days = re(this._days), this._months = re(this._months), e.milliseconds = re(e.milliseconds), e.seconds = re(e.seconds), e.minutes = re(e.minutes), e.hours = re(e.hours), e.months = re(e.months), e.years = re(e.years), this;
}
function Pa(e, t, r, s) {
  var a = J(t, r);
  return e._milliseconds += s * a._milliseconds, e._days += s * a._days, e._months += s * a._months, e._bubble();
}
function Ll(e, t) {
  return Pa(this, e, t, 1);
}
function Cl(e, t) {
  return Pa(this, e, t, -1);
}
function ks(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Al() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, n, i, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ks(vr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = q(e / 1e3), s.seconds = a % 60, n = q(a / 60), s.minutes = n % 60, i = q(n / 60), s.hours = i % 24, t += q(i / 24), u = q(Na(t)), r += u, t -= ks(vr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
}
function Na(e) {
  return e * 4800 / 146097;
}
function vr(e) {
  return e * 146097 / 4800;
}
function Wl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = j(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + Na(t), e) {
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
function Ul() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function he(e) {
  return function() {
    return this.as(e);
  };
}
var Il = he("ms"), ql = he("s"), $l = he("m"), jl = he("h"), Vl = he("d"), Hl = he("w"), Bl = he("M"), Gl = he("Q"), zl = he("y");
function Jl() {
  return J(this);
}
function Zl(e) {
  return e = j(e), this.isValid() ? this[e + "s"]() : NaN;
}
function be(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ql = be("milliseconds"), Xl = be("seconds"), Kl = be("minutes"), ed = be("hours"), td = be("days"), rd = be("months"), sd = be("years");
function ad() {
  return q(this.days() / 7);
}
var se = Math.round, Ee = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function nd(e, t, r, s, a) {
  return a.relativeTime(t || 1, !!r, e, s);
}
function id(e, t, r, s) {
  var a = J(e).abs(), n = se(a.as("s")), i = se(a.as("m")), o = se(a.as("h")), u = se(a.as("d")), h = se(a.as("M")), y = se(a.as("w")), g = se(a.as("y")), c = n <= r.ss && ["s", n] || n < r.s && ["ss", n] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (c = c || y <= 1 && ["w"] || y < r.w && ["ww", y]), c = c || h <= 1 && ["M"] || h < r.M && ["MM", h] || g <= 1 && ["y"] || ["yy", g], c[2] = t, c[3] = +e > 0, c[4] = s, nd.apply(null, c);
}
function od(e) {
  return e === void 0 ? se : typeof e == "function" ? (se = e, !0) : !1;
}
function ud(e, t) {
  return Ee[e] === void 0 ? !1 : t === void 0 ? Ee[e] : (Ee[e] = t, e === "s" && (Ee.ss = t - 1), !0);
}
function ld(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ee, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ee, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), n = id(this, !r, s, a), r && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var lr = Math.abs;
function Te(e) {
  return (e > 0) - (e < 0) || +e;
}
function qt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = lr(this._milliseconds) / 1e3, t = lr(this._days), r = lr(this._months), s, a, n, i, o = this.asSeconds(), u, h, y, g;
  return o ? (s = q(e / 60), a = q(s / 60), e %= 60, s %= 60, n = q(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", h = Te(this._months) !== Te(o) ? "-" : "", y = Te(this._days) !== Te(o) ? "-" : "", g = Te(this._milliseconds) !== Te(o) ? "-" : "", u + "P" + (n ? h + n + "Y" : "") + (r ? h + r + "M" : "") + (t ? y + t + "D" : "") + (a || s || e ? "T" : "") + (a ? g + a + "H" : "") + (s ? g + s + "M" : "") + (e ? g + i + "S" : "")) : "P0D";
}
var w = Ut.prototype;
w.isValid = tu;
w.abs = Fl;
w.add = Ll;
w.subtract = Cl;
w.as = Wl;
w.asMilliseconds = Il;
w.asSeconds = ql;
w.asMinutes = $l;
w.asHours = jl;
w.asDays = Vl;
w.asWeeks = Hl;
w.asMonths = Bl;
w.asQuarters = Gl;
w.asYears = zl;
w.valueOf = Ul;
w._bubble = Al;
w.clone = Jl;
w.get = Zl;
w.milliseconds = Ql;
w.seconds = Xl;
w.minutes = Kl;
w.hours = ed;
w.days = td;
w.weeks = ad;
w.months = rd;
w.years = sd;
w.humanize = ld;
w.toISOString = qt;
w.toString = qt;
w.toJSON = qt;
w.locale = Sa;
w.localeData = ba;
w.toIsoString = $(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  qt
);
w.lang = Oa;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
f("x", Lt);
f("X", Ri);
b("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
b("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
d.version = "2.29.4";
li(k);
d.fn = l;
d.min = Qo;
d.max = Xo;
d.now = Ko;
d.utc = ee;
d.unix = xl;
d.months = Tl;
d.isDate = rt;
d.locale = _e;
d.invalid = Rt;
d.duration = J;
d.isMoment = z;
d.weekdays = El;
d.parseZone = Yl;
d.localeData = de;
d.isDuration = ft;
d.monthsShort = Rl;
d.weekdaysMin = Nl;
d.defineLocale = Ur;
d.updateLocale = Yo;
d.locales = To;
d.weekdaysShort = Pl;
d.normalizeUnits = j;
d.relativeTimeRounding = od;
d.relativeTimeThreshold = ud;
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
const dd = {
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
function hd(e, t, r, s, a, n) {
  const i = ue("o-datepicker");
  return X(), We(i, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const fd = /* @__PURE__ */ pe(dd, [["render", hd]]), cd = {
  name: "WyxosForm",
  props: {
    form: {
      type: Tt,
      required: !0
    }
  },
  emits: ["submit"]
}, md = /* @__PURE__ */ Xe(" An error occurred. Try again? ");
function yd(e, t, r, s, a, n) {
  const i = ue("o-loading"), o = ue("o-button");
  return X(), yt("div", null, [
    r.form.isLoaded ? (X(), yt("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = $a((u) => e.$emit("submit"), ["prevent"]))
    }, [
      mt(e.$slots, "default")
    ], 32)) : ze("", !0),
    _t(i, {
      active: r.form.isLoading
    }, null, 8, ["active"]),
    !r.form.isLoaded && !r.form.isLoading ? (X(), We(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: Pe(() => [
        md
      ]),
      _: 1
    })) : ze("", !0)
  ]);
}
const _d = /* @__PURE__ */ pe(cd, [["render", yd]]), pd = {
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
}, vd = ["width", "height"];
function gd(e, t, r, s, a, n) {
  return X(), yt("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, vd);
}
const wd = /* @__PURE__ */ pe(pd, [["render", gd]]), Sd = {
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
      errors: xr()
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
function Od(e, t, r, s, a, n) {
  const i = ue("o-input"), o = ue("o-field");
  return X(), We(o, dr({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: Pe(() => [
      _t(i, dr(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => s.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const bd = /* @__PURE__ */ pe(Sd, [["render", Od]]), Dd = {
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
  const i = ue("o-inputitems");
  return X(), We(i, dr(e.$attrs, {
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
const Md = /* @__PURE__ */ pe(Dd, [["render", kd]]), xd = {
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
      state: new ce()
    };
  },
  methods: {
    async proceed() {
      this.callback && (this.state.loading(), await this.callback().catch((e) => {
        throw this.state.failed(), e;
      }), this.state.loaded()), this.$emit("close", { action: !0 });
    }
  }
}, Yd = { class: "button-group" };
function Td(e, t, r, s, a, n) {
  const i = ue("wyxos-button"), o = ue("o-modal");
  return X(), We(o, { active: !0 }, {
    default: Pe(() => [
      Je("h2", null, it(r.title), 1),
      Je("p", null, it(r.message), 1),
      Je("div", Yd, [
        _t(i, {
          "native-type": "button",
          disabled: s.state.isLoading,
          onClick: t[0] || (t[0] = (u) => e.$emit("close", { action: !1 }))
        }, {
          default: Pe(() => [
            Xe(it(r.cancelText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        _t(i, {
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
const Rd = /* @__PURE__ */ pe(xd, [["render", Td]]), Nd = {
  AutoCompleteSearch: Yt,
  FormBuilder: Tt,
  ResourceList: Qn,
  Listing: Xn,
  LoadState: ce,
  useFormErrors: xr,
  WyxosButton: ai,
  WyxosCollection: ui,
  WyxosDatepicker: fd,
  WyxosForm: _d,
  WyxosImage: wd,
  WyxosInput: bd,
  WyxosTags: Md,
  WyxosPrompt: Rd
};
export {
  Yt as AutoCompleteSearch,
  Tt as FormBuilder,
  Xn as Listing,
  ce as LoadState,
  Qn as ResourceList,
  ai as WyxosButton,
  ui as WyxosCollection,
  fd as WyxosDatepicker,
  _d as WyxosForm,
  wd as WyxosImage,
  bd as WyxosInput,
  Rd as WyxosPrompt,
  Md as WyxosTags,
  Nd as default,
  xr as useFormErrors
};
