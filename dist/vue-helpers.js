var Ca = Object.defineProperty;
var Wa = (e, t, r) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var b = (e, t, r) => (Wa(e, typeof t != "symbol" ? t + "" : t, r), r);
import { ref as Re, reactive as Q, resolveComponent as ge, openBlock as ie, createBlock as Xe, withCtx as cr, renderSlot as dt, createCommentVNode as Be, createElementBlock as ft, createTextVNode as mr, normalizeProps as Ua, guardReactiveProps as Ia, createElementVNode as zr, withModifiers as qa, createVNode as bs, mergeProps as ar } from "vue";
function $a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ks = { exports: {} }, yr = { exports: {} }, Ms = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
      a[i] = arguments[i];
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
function ht(e) {
  return typeof e > "u";
}
function Va(e) {
  return e !== null && !ht(e) && e.constructor !== null && !ht(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
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
function it(e) {
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
var ei = we("URLSearchParams");
function ti(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function ri() {
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
function ir() {
  var e = {};
  function t(a, i) {
    it(e[i]) && it(a) ? e[i] = ir(e[i], a) : it(a) ? e[i] = ir({}, a) : vr(a) ? e[i] = a.slice() : e[i] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    wr(arguments[r], t);
  return e;
}
function si(e, t, r) {
  return wr(t, function(a, i) {
    r && typeof a == "function" ? e[i] = ja(a, r) : e[i] = a;
  }), e;
}
function ai(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function ii(e, t, r, s) {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function ni(e, t, r) {
  var s, a, i, n = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], n[i] || (t[i] = e[i], n[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function oi(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var s = e.indexOf(t, r);
  return s !== -1 && s === r;
}
function ui(e) {
  if (!e)
    return null;
  var t = e.length;
  if (ht(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var li = function(e) {
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
  isPlainObject: it,
  isUndefined: ht,
  isDate: za,
  isFile: Za,
  isBlob: Ja,
  isFunction: gr,
  isStream: Xa,
  isURLSearchParams: ei,
  isStandardBrowserEnv: ri,
  forEach: wr,
  merge: ir,
  extend: si,
  trim: ti,
  stripBOM: ai,
  inherits: ii,
  toFlatObject: ni,
  kindOf: pr,
  kindOfTest: we,
  endsWith: oi,
  toArray: ui,
  isTypedArray: li,
  isFileList: Qa
}, Me = P;
function Zr(e) {
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
    var i = [];
    Me.forEach(r, function(u, c) {
      u === null || typeof u > "u" || (Me.isArray(u) ? c = c + "[]" : u = [u], Me.forEach(u, function(g) {
        Me.isDate(g) ? g = g.toISOString() : Me.isObject(g) && (g = JSON.stringify(g)), i.push(Zr(c) + "=" + Zr(g));
      }));
    }), a = i.join("&");
  }
  if (a) {
    var n = t.indexOf("#");
    n !== -1 && (t = t.slice(0, n)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, di = P;
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
  di.forEach(this.handlers, function(s) {
    s !== null && t(s);
  });
};
var fi = gt, hi = P, ci = function(t, r) {
  hi.forEach(t, function(a, i) {
    i !== r && i.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[i]);
  });
}, Rs = P;
function Le(e, t, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Rs.inherits(Le, Error, {
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
var Ps = Le.prototype, Es = {};
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
Object.defineProperties(Le, Es);
Object.defineProperty(Ps, "isAxiosError", { value: !0 });
Le.from = function(e, t, r, s, a, i) {
  var n = Object.create(Ps);
  return Rs.toFlatObject(e, n, function(u) {
    return u !== Error.prototype;
  }), Le.call(n, e.message, t, r, s, a), n.name = e.name, i && Object.assign(n, i), n;
};
var Ce = Le, Ns = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H = P;
function mi(e, t) {
  t = t || new FormData();
  var r = [];
  function s(i) {
    return i === null ? "" : H.isDate(i) ? i.toISOString() : H.isArrayBuffer(i) || H.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function a(i, n) {
    if (H.isPlainObject(i) || H.isArray(i)) {
      if (r.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + n);
      r.push(i), H.forEach(i, function(u, c) {
        if (!H.isUndefined(u)) {
          var y = n ? n + "." + c : c, g;
          if (u && !n && typeof u == "object") {
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
      t.append(n, s(i));
  }
  return a(e), t;
}
var Fs = mi, Ut, Jr;
function yi() {
  if (Jr)
    return Ut;
  Jr = 1;
  var e = Ce;
  return Ut = function(r, s, a) {
    var i = a.config.validateStatus;
    !a.status || !i || i(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ut;
}
var It, Qr;
function _i() {
  if (Qr)
    return It;
  Qr = 1;
  var e = P;
  return It = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, i, n, o, u) {
        var c = [];
        c.push(s + "=" + encodeURIComponent(a)), e.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), e.isString(n) && c.push("path=" + n), e.isString(o) && c.push("domain=" + o), u === !0 && c.push("secure"), document.cookie = c.join("; ");
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
var pi = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, vi = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, gi = pi, wi = vi, Ls = function(t, r) {
  return t && !gi(r) ? wi(t, r) : r;
}, qt, Xr;
function Si() {
  if (Xr)
    return qt;
  Xr = 1;
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
  return qt = function(s) {
    var a = {}, i, n, o;
    return s && e.forEach(s.split(`
`), function(c) {
      if (o = c.indexOf(":"), i = e.trim(c.substr(0, o)).toLowerCase(), n = e.trim(c.substr(o + 1)), i) {
        if (a[i] && t.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? a[i] = (a[i] ? a[i] : []).concat([n]) : a[i] = a[i] ? a[i] + ", " + n : n;
      }
    }), a;
  }, qt;
}
var $t, Kr;
function Oi() {
  if (Kr)
    return $t;
  Kr = 1;
  var e = P;
  return $t = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function i(n) {
      var o = n;
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
    return a = i(window.location.href), function(o) {
      var u = e.isString(o) ? i(o) : o;
      return u.protocol === a.protocol && u.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), $t;
}
var jt, es;
function wt() {
  if (es)
    return jt;
  es = 1;
  var e = Ce, t = P;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), jt = r, jt;
}
var Vt, ts;
function Di() {
  return ts || (ts = 1, Vt = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Vt;
}
var Ht, rs;
function ss() {
  if (rs)
    return Ht;
  rs = 1;
  var e = P, t = yi(), r = _i(), s = xs, a = Ls, i = Si(), n = Oi(), o = Ns, u = Ce, c = wt(), y = Di();
  return Ht = function(h) {
    return new Promise(function(Na, De) {
      var Ie = h.data, qe = h.headers, $e = h.responseType, be;
      function Hr() {
        h.cancelToken && h.cancelToken.unsubscribe(be), h.signal && h.signal.removeEventListener("abort", be);
      }
      e.isFormData(Ie) && e.isStandardBrowserEnv() && delete qe["Content-Type"];
      var _ = new XMLHttpRequest();
      if (h.auth) {
        var Fa = h.auth.username || "", La = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        qe.Authorization = "Basic " + btoa(Fa + ":" + La);
      }
      var At = a(h.baseURL, h.url);
      _.open(h.method.toUpperCase(), s(At, h.params, h.paramsSerializer), !0), _.timeout = h.timeout;
      function Br() {
        if (!!_) {
          var V = "getAllResponseHeaders" in _ ? i(_.getAllResponseHeaders()) : null, ke = !$e || $e === "text" || $e === "json" ? _.responseText : _.response, ye = {
            data: ke,
            status: _.status,
            statusText: _.statusText,
            headers: V,
            config: h,
            request: _
          };
          t(function(Wt) {
            Na(Wt), Hr();
          }, function(Wt) {
            De(Wt), Hr();
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
        var ke = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded", ye = h.transitional || o;
        h.timeoutErrorMessage && (ke = h.timeoutErrorMessage), De(new u(
          ke,
          ye.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          h,
          _
        )), _ = null;
      }, e.isStandardBrowserEnv()) {
        var Gr = (h.withCredentials || n(At)) && h.xsrfCookieName ? r.read(h.xsrfCookieName) : void 0;
        Gr && (qe[h.xsrfHeaderName] = Gr);
      }
      "setRequestHeader" in _ && e.forEach(qe, function(ke, ye) {
        typeof Ie > "u" && ye.toLowerCase() === "content-type" ? delete qe[ye] : _.setRequestHeader(ye, ke);
      }), e.isUndefined(h.withCredentials) || (_.withCredentials = !!h.withCredentials), $e && $e !== "json" && (_.responseType = h.responseType), typeof h.onDownloadProgress == "function" && _.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && _.upload && _.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (be = function(V) {
        !_ || (De(!V || V && V.type ? new c() : V), _.abort(), _ = null);
      }, h.cancelToken && h.cancelToken.subscribe(be), h.signal && (h.signal.aborted ? be() : h.signal.addEventListener("abort", be))), Ie || (Ie = null);
      var Ct = y(At);
      if (Ct && ["http", "https", "file"].indexOf(Ct) === -1) {
        De(new u("Unsupported protocol " + Ct + ":", u.ERR_BAD_REQUEST, h));
        return;
      }
      _.send(Ie);
    });
  }, Ht;
}
var Bt, as;
function bi() {
  return as || (as = 1, Bt = null), Bt;
}
var R = P, is = ci, ns = Ce, ki = Ns, Mi = Fs, Yi = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function os(e, t) {
  !R.isUndefined(e) && R.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Ti() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ss()), e;
}
function xi(e, t, r) {
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
  transitional: ki,
  adapter: Ti(),
  transformRequest: [function(t, r) {
    if (is(r, "Accept"), is(r, "Content-Type"), R.isFormData(t) || R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return os(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var s = R.isObject(t), a = r && r["Content-Type"], i;
    if ((i = R.isFileList(t)) || s && a === "multipart/form-data") {
      var n = this.env && this.env.FormData;
      return Mi(i ? { "files[]": t } : t, n && new n());
    } else if (s || a === "application/json")
      return os(r, "application/json"), xi(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || St.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, i = !s && this.responseType === "json";
    if (i || a && R.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (n) {
        if (i)
          throw n.name === "SyntaxError" ? ns.from(n, ns.ERR_BAD_RESPONSE, this, null, this.response) : n;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: bi()
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
  St.headers[t] = R.merge(Yi);
});
var Sr = St, Ri = P, Pi = Sr, Ei = function(t, r, s) {
  var a = this || Pi;
  return Ri.forEach(s, function(n) {
    t = n.call(a, t, r);
  }), t;
}, Gt, us;
function As() {
  return us || (us = 1, Gt = function(t) {
    return !!(t && t.__CANCEL__);
  }), Gt;
}
var ls = P, zt = Ei, Ni = As(), Fi = Sr, Li = wt();
function Zt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Li();
}
var Ai = function(t) {
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
  var r = t.adapter || Fi.adapter;
  return r(t).then(function(a) {
    return Zt(t), a.data = zt.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return Ni(a) || (Zt(t), a && a.response && (a.response.data = zt.call(
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
  function i(y) {
    if (C.isUndefined(r[y])) {
      if (!C.isUndefined(t[y]))
        return a(void 0, t[y]);
    } else
      return a(t[y], r[y]);
  }
  function n(y) {
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
    url: n,
    method: n,
    data: n,
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
    var h = c[g] || i, I = h(g);
    C.isUndefined(I) && h !== u || (s[g] = I);
  }), s;
}, Jt, ds;
function Ws() {
  return ds || (ds = 1, Jt = {
    version: "0.27.2"
  }), Jt;
}
var Ci = Ws().version, fe = Ce, Or = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Or[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var fs = {};
Or.transitional = function(t, r, s) {
  function a(i, n) {
    return "[Axios v" + Ci + "] Transitional option '" + i + "'" + n + (s ? ". " + s : "");
  }
  return function(i, n, o) {
    if (t === !1)
      throw new fe(
        a(n, " has been removed" + (r ? " in " + r : "")),
        fe.ERR_DEPRECATED
      );
    return r && !fs[n] && (fs[n] = !0, console.warn(
      a(
        n,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, n, o) : !0;
  };
};
function Wi(e, t, r) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var i = s[a], n = t[i];
    if (n) {
      var o = e[i], u = o === void 0 || n(o, i, e);
      if (u !== !0)
        throw new fe("option " + i + " must be " + u, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
var Ui = {
  assertOptions: Wi,
  validators: Or
}, Us = P, Ii = xs, hs = fi, cs = Ai, Ot = Cs, qi = Ls, Is = Ui, Ye = Is.validators;
function Ae(e) {
  this.defaults = e, this.interceptors = {
    request: new hs(),
    response: new hs()
  };
}
Ae.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ot(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Is.assertOptions(s, {
    silentJSONParsing: Ye.transitional(Ye.boolean),
    forcedJSONParsing: Ye.transitional(Ye.boolean),
    clarifyTimeoutError: Ye.transitional(Ye.boolean)
  }, !1);
  var a = [], i = !0;
  this.interceptors.request.forEach(function(I) {
    typeof I.runWhen == "function" && I.runWhen(r) === !1 || (i = i && I.synchronous, a.unshift(I.fulfilled, I.rejected));
  });
  var n = [];
  this.interceptors.response.forEach(function(I) {
    n.push(I.fulfilled, I.rejected);
  });
  var o;
  if (!i) {
    var u = [cs, void 0];
    for (Array.prototype.unshift.apply(u, a), u = u.concat(n), o = Promise.resolve(r); u.length; )
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
  for (; n.length; )
    o = o.then(n.shift(), n.shift());
  return o;
};
Ae.prototype.getUri = function(t) {
  t = Ot(this.defaults, t);
  var r = qi(t.baseURL, t.url);
  return Ii(r, t.params, t.paramsSerializer);
};
Us.forEach(["delete", "get", "head", "options"], function(t) {
  Ae.prototype[t] = function(r, s) {
    return this.request(Ot(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
Us.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(i, n, o) {
      return this.request(Ot(o || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: n
      }));
    };
  }
  Ae.prototype[t] = r(), Ae.prototype[t + "Form"] = r(!0);
});
var $i = Ae, Qt, ms;
function ji() {
  if (ms)
    return Qt;
  ms = 1;
  var e = wt();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(n) {
      s = n;
    });
    var a = this;
    this.promise.then(function(i) {
      if (!!a._listeners) {
        var n, o = a._listeners.length;
        for (n = 0; n < o; n++)
          a._listeners[n](i);
        a._listeners = null;
      }
    }), this.promise.then = function(i) {
      var n, o = new Promise(function(u) {
        a.subscribe(u), n = u;
      }).then(i);
      return o.cancel = function() {
        a.unsubscribe(n);
      }, o;
    }, r(function(n) {
      a.reason || (a.reason = new e(n), s(a.reason));
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
    var s, a = new t(function(n) {
      s = n;
    });
    return {
      token: a,
      cancel: s
    };
  }, Qt = t, Qt;
}
var Xt, ys;
function Vi() {
  return ys || (ys = 1, Xt = function(t) {
    return function(s) {
      return t.apply(null, s);
    };
  }), Xt;
}
var Kt, _s;
function Hi() {
  if (_s)
    return Kt;
  _s = 1;
  var e = P;
  return Kt = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Kt;
}
var ps = P, Bi = Ms, nt = $i, Gi = Cs, zi = Sr;
function qs(e) {
  var t = new nt(e), r = Bi(nt.prototype.request, t);
  return ps.extend(r, nt.prototype, t), ps.extend(r, t), r.create = function(a) {
    return qs(Gi(e, a));
  }, r;
}
var A = qs(zi);
A.Axios = nt;
A.CanceledError = wt();
A.CancelToken = ji();
A.isCancel = As();
A.VERSION = Ws().version;
A.toFormData = Fs;
A.AxiosError = Ce;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = Vi();
A.isAxiosError = Hi();
yr.exports = A;
yr.exports.default = A;
(function(e) {
  e.exports = yr.exports;
})(ks);
const ne = /* @__PURE__ */ $a(ks.exports);
class Dt {
  constructor() {
    b(this, "loading", Re(!1));
    b(this, "result", Re([]));
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
const je = Q({
  default: []
});
function Dr() {
  return {
    createBag(e) {
      je[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (je[t] = Object.keys(e.response.data.errors).map((s) => ({
        key: s,
        message: e.response.data.errors[s][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = je[t];
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
        const r = je[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const s = r.findIndex((a) => a.key === e);
        r.splice(s, 1);
        return;
      }
      je[t] = [];
    }
  };
}
class br {
  constructor(t) {
    b(this, "loadPath", "");
    b(this, "submitPath", "");
    b(this, "bag", "");
    b(this, "model", Q({}));
    b(this, "form", Q({}));
    b(this, "original", Q({}));
    b(this, "isLoading", Re(!1));
    b(this, "isLoaded", Re(!0));
    b(this, "isSubmitting", Re(!1));
    b(this, "isSubmitted", Re(!1));
    b(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form);
  }
  static create(t) {
    return new br(t);
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
    const a = r ? r(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: i } = await ne[s.method || "post"](
      t || this.submitPath,
      a,
      s
    ).catch((n) => {
      throw this.isSubmitting.value = !1, this.errors.set(n, this.bag), n;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, i;
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
class Zi {
  constructor() {
    b(this, "structure", {});
    b(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    b(this, "params", Q({
      page: 1
    }));
    b(this, "router", null);
  }
  static create(t, r = {}, s = {}, a) {
    s = Object.assign(
      { base: "/api/admin", route: `${t}.index` },
      s
    );
    const i = s.base, n = {
      route: s.route,
      index: s.index || `${i}/${t}/index`,
      destroy: `${i}/${t}/destroy`
    }, o = new this();
    return o.options = s, o.structure = r, o.params = Object.assign(o.params, r), o.router = a, o.urls = n, o;
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
  async action(t, { row: r, index: s, remove: a, method: i }, n = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...n
    };
    if (i === "delete") {
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
class vs {
  constructor() {
    b(this, "state", Q({
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
class Ji {
  constructor() {
    b(this, "api", null);
    b(this, "baseUrl", null);
    b(this, "structure", null);
    b(this, "states", {
      fetch: new vs(),
      filter: new vs()
    });
    b(this, "query", Q({
      items: [],
      perPage: 0,
      total: 0
    }));
    b(this, "params", Q({
      page: 1
    }));
    b(this, "state", Q({
      isFilterActive: !1
    }));
  }
  static create(t, r) {
    const s = new this();
    return s.structure = Object.assign({}, t), Object.assign(s.params, t), s.api = ne.create(r.axios || {}), s.baseUrl = r.baseUrl, s;
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
    }).catch((n) => {
      throw this.states.fetch.failed(), n;
    });
    this.states.fetch.loaded();
    const s = window.location.href.replace(/\?.*/, ""), a = new URLSearchParams(this.params), i = s + "?" + a.toString();
    return window.history.pushState({}, "", i), r;
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
  async action(t, { item: { row: r, index: s }, remove: a, method: i }, n = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...n
    };
    if (i === "delete") {
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
}, Qi = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, Xi = /* @__PURE__ */ mr("Submit"), Ki = /* @__PURE__ */ mr("Processing..."), en = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function tn(e, t, r, s, a, i) {
  const n = ge("o-button");
  return ie(), Xe(n, { disabled: r.loading }, {
    default: cr(() => [
      r.loading ? Be("", !0) : dt(e.$slots, "default", { key: 0 }, () => [
        Xi
      ]),
      r.loading ? dt(e.$slots, "loading", { key: 1 }, () => [
        Ki
      ]) : Be("", !0),
      r.loading ? (ie(), ft("i", en)) : Be("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const rn = /* @__PURE__ */ Se(Qi, [["render", tn]]), sn = {
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
}, an = /* @__PURE__ */ zr("ul", null, [
  /* @__PURE__ */ zr("li")
], -1);
function nn(e, t, r, s, a, i) {
  return dt(e.$slots, "default", Ua(Ia({ add: i.add, remove: i.remove, items: a.items })), () => [
    an
  ]);
}
const on = /* @__PURE__ */ Se(sn, [["render", nn]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var $s;
function d() {
  return $s.apply(null, arguments);
}
function un(e) {
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
function kr(e) {
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
function ue(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ke(e) {
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
function ln() {
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
  return e._pf == null && (e._pf = ln()), e._pf;
}
var nr;
Array.prototype.some ? nr = Array.prototype.some : nr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function Mr(e) {
  if (e._isValid == null) {
    var t = p(e), r = nr.call(t.parsedDateParts, function(a) {
      return a != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function bt(e) {
  var t = K(NaN);
  return e != null ? he(p(t), e) : p(t).userInvalidated = !0, t;
}
var gs = d.momentProperties = [], er = !1;
function Yr(e, t) {
  var r, s, a, i = gs.length;
  if (L(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), L(t._i) || (e._i = t._i), L(t._f) || (e._f = t._f), L(t._l) || (e._l = t._l), L(t._strict) || (e._strict = t._strict), L(t._tzm) || (e._tzm = t._tzm), L(t._isUTC) || (e._isUTC = t._isUTC), L(t._offset) || (e._offset = t._offset), L(t._pf) || (e._pf = p(t)), L(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      s = gs[r], a = t[s], L(a) || (e[s] = a);
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
  return he(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), r) {
      var s = [], a, i, n, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (n in arguments[0])
            S(arguments[0], n) && (a += n + ": " + arguments[0][n] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
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
function dn(e) {
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
var fn = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function hn(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ee(s) ? s.call(t, r) : s;
}
function X(e, t, r) {
  var s = "" + Math.abs(e), a = t - s.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s;
}
var xr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, st = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, tr = {}, Ee = {};
function m(e, t, r, s) {
  var a = s;
  typeof s == "string" && (a = function() {
    return this[s]();
  }), e && (Ee[e] = a), t && (Ee[t[0]] = function() {
    return X(a.apply(this, arguments), t[1], t[2]);
  }), r && (Ee[r] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function cn(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function mn(e) {
  var t = e.match(xr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Ee[t[r]] ? t[r] = Ee[t[r]] : t[r] = cn(t[r]);
  return function(a) {
    var i = "", n;
    for (n = 0; n < s; n++)
      i += ee(t[n]) ? t[n].call(a, e) : t[n];
    return i;
  };
}
function ot(e, t) {
  return e.isValid() ? (t = Bs(t, e.localeData()), tr[t] = tr[t] || mn(t), tr[t](e)) : e.localeData().invalidDate();
}
function Bs(e, t) {
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
var yn = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function _n(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(xr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var pn = "Invalid date";
function vn() {
  return this._invalidDate;
}
var gn = "%d", wn = /\d{1,2}/;
function Sn(e) {
  return this._ordinal.replace("%d", e);
}
var On = {
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
function Dn(e, t, r, s) {
  var a = this._relativeTime[r];
  return ee(a) ? a(e, t, r, s) : a.replace(/%d/i, e);
}
function bn(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ee(r) ? r(t) : r.replace(/%s/i, t);
}
var Ge = {};
function N(e, t) {
  var r = e.toLowerCase();
  Ge[r] = Ge[r + "s"] = Ge[t] = e;
}
function j(e) {
  return typeof e == "string" ? Ge[e] || Ge[e.toLowerCase()] : void 0;
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
function kn(e) {
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
function We(e, t) {
  return function(r) {
    return r != null ? (zs(this, e, r), d.updateOffset(this, t), this) : ct(this, e);
  };
}
function ct(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function zs(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && kt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Pt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Mn(e) {
  return e = j(e), ee(this[e]) ? this[e]() : this;
}
function Yn(e, t) {
  if (typeof e == "object") {
    e = Rr(e);
    var r = kn(e), s, a = r.length;
    for (s = 0; s < a; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = j(e), ee(this[e]))
    return this[e](t);
  return this;
}
var Zs = /\d/, U = /\d\d/, Js = /\d{3}/, Pr = /\d{4}/, Mt = /[+-]?\d{6}/, M = /\d\d?/, Qs = /\d\d\d\d?/, Xs = /\d\d\d\d\d\d?/, Yt = /\d{1,3}/, Er = /\d{1,4}/, Tt = /[+-]?\d{1,6}/, Ue = /\d+/, xt = /[+-]?\d+/, Tn = /Z|[+-]\d\d:?\d\d/gi, Rt = /Z|[+-]\d\d(?::?\d\d)?/gi, xn = /[+-]?\d+(\.\d{1,3})?/, tt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, mt;
mt = {};
function f(e, t, r) {
  mt[e] = ee(t) ? t : function(s, a) {
    return s && r ? r : t;
  };
}
function Rn(e, t) {
  return S(mt, e) ? mt[e](t._strict, t._locale) : new RegExp(Pn(e));
}
function Pn(e) {
  return W(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, a, i) {
        return r || s || a || i;
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
  for (typeof e == "string" && (e = [e]), ue(t) && (s = function(i, n) {
    n[t] = v(i);
  }), a = e.length, r = 0; r < a; r++)
    lr[e[r]] = s;
}
function rt(e, t) {
  D(e, function(r, s, a, i) {
    a._w = a._w || {}, t(r, a._w, a, i);
  });
}
function En(e, t, r) {
  t != null && S(lr, e) && lr[e](t, r._a, r, e);
}
var E = 0, se = 1, J = 2, x = 3, B = 4, ae = 5, pe = 6, Nn = 7, Fn = 8;
function Ln(e, t) {
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
function Pt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Ln(t, 12);
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
f("M", M);
f("MM", M, U);
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
var An = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ks = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ea = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Cn = tt, Wn = tt;
function Un(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ea).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function In(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ea.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function qn(e, t, r) {
  var s, a, i, n = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      i = K([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (a = T.call(this._shortMonthsParse, n), a !== -1 ? a : null) : (a = T.call(this._longMonthsParse, n), a !== -1 ? a : null) : t === "MMM" ? (a = T.call(this._shortMonthsParse, n), a !== -1 ? a : (a = T.call(this._longMonthsParse, n), a !== -1 ? a : null)) : (a = T.call(this._longMonthsParse, n), a !== -1 ? a : (a = T.call(this._shortMonthsParse, n), a !== -1 ? a : null));
}
function $n(e, t, r) {
  var s, a, i;
  if (this._monthsParseExact)
    return qn.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (a = K([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
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
  return r = Math.min(e.date(), Pt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function ra(e) {
  return e != null ? (ta(this, e), d.updateOffset(this, !0), this) : ct(this, "Month");
}
function jn() {
  return Pt(this.year(), this.month());
}
function Vn(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || sa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Cn), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Hn(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || sa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Wn), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function sa() {
  function e(n, o) {
    return o.length - n.length;
  }
  var t = [], r = [], s = [], a, i;
  for (a = 0; a < 12; a++)
    i = K([2e3, a]), t.push(this.monthsShort(i, "")), r.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
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
f("Y", xt);
f("YY", M, U);
f("YYYY", Er, Pr);
f("YYYYY", Tt, Mt);
f("YYYYYY", Tt, Mt);
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
function ze(e) {
  return kt(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var aa = We("FullYear", !0);
function Bn() {
  return kt(this.year());
}
function Gn(e, t, r, s, a, i, n) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, s, a, i, n), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, s, a, i, n), o;
}
function Ze(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function yt(e, t, r) {
  var s = 7 + t - r, a = (7 + Ze(e, 0, s).getUTCDay() - t) % 7;
  return -a + s - 1;
}
function ia(e, t, r, s, a) {
  var i = (7 + r - s) % 7, n = yt(e, s, a), o = 1 + 7 * (t - 1) + i + n, u, c;
  return o <= 0 ? (u = e - 1, c = ze(u) + o) : o > ze(e) ? (u = e + 1, c = o - ze(e)) : (u = e, c = o), {
    year: u,
    dayOfYear: c
  };
}
function Je(e, t, r) {
  var s = yt(e.year(), t, r), a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, i, n;
  return a < 1 ? (n = e.year() - 1, i = a + oe(n, t, r)) : a > oe(e.year(), t, r) ? (i = a - oe(e.year(), t, r), n = e.year() + 1) : (n = e.year(), i = a), {
    week: i,
    year: n
  };
}
function oe(e, t, r) {
  var s = yt(e, t, r), a = yt(e + 1, t, r);
  return (ze(e) - s + a) / 7;
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
rt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = v(e);
  }
);
function zn(e) {
  return Je(e, this._week.dow, this._week.doy).week;
}
var Zn = {
  dow: 0,
  doy: 6
};
function Jn() {
  return this._week.dow;
}
function Qn() {
  return this._week.doy;
}
function Xn(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Kn(e) {
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
rt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var a = r._locale.weekdaysParse(e, s, r._strict);
  a != null ? t.d = a : p(r).invalidWeekday = e;
});
rt(["d", "e", "E"], function(e, t, r, s) {
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
var ro = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), na = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), so = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ao = tt, io = tt, no = tt;
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
  var s, a, i, n = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      i = K([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (a = T.call(this._weekdaysParse, n), a !== -1 ? a : null) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, n), a !== -1 ? a : null) : (a = T.call(this._minWeekdaysParse, n), a !== -1 ? a : null) : t === "dddd" ? (a = T.call(this._weekdaysParse, n), a !== -1 || (a = T.call(this._shortWeekdaysParse, n), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : t === "ddd" ? (a = T.call(this._shortWeekdaysParse, n), a !== -1 || (a = T.call(this._weekdaysParse, n), a !== -1) ? a : (a = T.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : (a = T.call(this._minWeekdaysParse, n), a !== -1 || (a = T.call(this._weekdaysParse, n), a !== -1) ? a : (a = T.call(this._shortWeekdaysParse, n), a !== -1 ? a : null));
}
function ho(e, t, r) {
  var s, a, i;
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
    )), this._weekdaysParse[s] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
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
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = io), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function vo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Fr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = no), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Fr() {
  function e(y, g) {
    return g.length - y.length;
  }
  var t = [], r = [], s = [], a = [], i, n, o, u, c;
  for (i = 0; i < 7; i++)
    n = K([2e3, 1]).day(i), o = W(this.weekdaysMin(n, "")), u = W(this.weekdaysShort(n, "")), c = W(this.weekdays(n, "")), t.push(o), r.push(u), s.push(c), a.push(o), a.push(u), a.push(c);
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
function Lr() {
  return this.hours() % 12 || 12;
}
function go() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Lr);
m("k", ["kk", 2], 0, go);
m("hmm", 0, 0, function() {
  return "" + Lr.apply(this) + X(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Lr.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2);
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
f("H", M);
f("h", M);
f("k", M);
f("HH", M, U);
f("hh", M, U);
f("kk", M, U);
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
var So = /[ap]\.?m?\.?/i, Oo = We("Hours", !0);
function Do(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var la = {
  calendar: fn,
  longDateFormat: yn,
  invalidDate: pn,
  ordinal: gn,
  dayOfMonthOrdinalParse: wn,
  relativeTime: On,
  months: An,
  monthsShort: Ks,
  week: Zn,
  weekdays: ro,
  weekdaysMin: so,
  weekdaysShort: na,
  meridiemParse: So
}, Y = {}, Ve = {}, Qe;
function bo(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function Ss(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ko(e) {
  for (var t = 0, r, s, a, i; t < e.length; ) {
    for (i = Ss(e[t]).split("-"), r = i.length, s = Ss(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (a = Et(i.slice(0, r).join("-")), a)
        return a;
      if (s && s.length >= r && bo(i, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Qe;
}
function Mo(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Et(e) {
  var t = null, r;
  if (Y[e] === void 0 && typeof module < "u" && module && module.exports && Mo(e))
    try {
      t = Qe._abbr, r = require, r("./locale/" + e), me(t);
    } catch {
      Y[e] = null;
    }
  return Y[e];
}
function me(e, t) {
  var r;
  return e && (L(t) ? r = le(e) : r = Ar(e, t), r ? Qe = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Qe._abbr;
}
function Ar(e, t) {
  if (t !== null) {
    var r, s = la;
    if (t.abbr = e, Y[e] != null)
      Hs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = Y[e]._config;
    else if (t.parentLocale != null)
      if (Y[t.parentLocale] != null)
        s = Y[t.parentLocale]._config;
      else if (r = Et(t.parentLocale), r != null)
        s = r._config;
      else
        return Ve[t.parentLocale] || (Ve[t.parentLocale] = []), Ve[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Y[e] = new Tr(or(s, t)), Ve[e] && Ve[e].forEach(function(a) {
      Ar(a.name, a.config);
    }), me(e), Y[e];
  } else
    return delete Y[e], null;
}
function Yo(e, t) {
  if (t != null) {
    var r, s, a = la;
    Y[e] != null && Y[e].parentLocale != null ? Y[e].set(or(Y[e]._config, t)) : (s = Et(e), s != null && (a = s._config), t = or(a, t), s == null && (t.abbr = e), r = new Tr(t), r.parentLocale = Y[e], Y[e] = r), me(e);
  } else
    Y[e] != null && (Y[e].parentLocale != null ? (Y[e] = Y[e].parentLocale, e === me() && me(e)) : Y[e] != null && delete Y[e]);
  return Y[e];
}
function le(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Qe;
  if (!G(e)) {
    if (t = Et(e), t)
      return t;
    e = [e];
  }
  return ko(e);
}
function To() {
  return ur(Y);
}
function Cr(e) {
  var t, r = e._a;
  return r && p(e).overflow === -2 && (t = r[se] < 0 || r[se] > 11 ? se : r[J] < 1 || r[J] > Pt(r[E], r[se]) ? J : r[x] < 0 || r[x] > 24 || r[x] === 24 && (r[B] !== 0 || r[ae] !== 0 || r[pe] !== 0) ? x : r[B] < 0 || r[B] > 59 ? B : r[ae] < 0 || r[ae] > 59 ? ae : r[pe] < 0 || r[pe] > 999 ? pe : -1, p(e)._overflowDayOfYear && (t < E || t > J) && (t = J), p(e)._overflowWeeks && t === -1 && (t = Nn), p(e)._overflowWeekday && t === -1 && (t = Fn), p(e).overflow = t), e;
}
var xo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ro = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Po = /Z|[+-]\d\d(?::?\d\d)?/, at = [
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
  var t, r, s = e._i, a = xo.exec(s) || Ro.exec(s), i, n, o, u, c = at.length, y = rr.length;
  if (a) {
    for (p(e).iso = !0, t = 0, r = c; t < r; t++)
      if (at[t][1].exec(a[1])) {
        n = at[t][0], i = at[t][2] !== !1;
        break;
      }
    if (n == null) {
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
    if (!i && o != null) {
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
    e._f = n + (o || "") + (u || ""), Ur(e);
  } else
    e._isValid = !1;
}
function Lo(e, t, r, s, a, i) {
  var n = [
    Ao(e),
    Ks.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(a, 10)
  ];
  return i && n.push(parseInt(i, 10)), n;
}
function Ao(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Co(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Wo(e, t, r) {
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
function Uo(e, t, r) {
  if (e)
    return Fo[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), a = s % 100, i = (s - a) / 100;
  return i * 60 + a;
}
function fa(e) {
  var t = No.exec(Co(e._i)), r;
  if (t) {
    if (r = Lo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Wo(t[1], r, e))
      return;
    e._a = r, e._tzm = Uo(t[8], t[9], t[10]), e._d = Ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
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
  var t, r, s = [], a, i, n;
  if (!e._d) {
    for (a = qo(e), e._w && e._a[J] == null && e._a[se] == null && $o(e), e._dayOfYear != null && (n = xe(e._a[E], a[E]), (e._dayOfYear > ze(n) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), r = Ze(n, 0, e._dayOfYear), e._a[se] = r.getUTCMonth(), e._a[J] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[x] === 24 && e._a[B] === 0 && e._a[ae] === 0 && e._a[pe] === 0 && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Ze : Gn).apply(
      null,
      s
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (p(e).weekdayMismatch = !0);
  }
}
function $o(e) {
  var t, r, s, a, i, n, o, u, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, n = 4, r = xe(
    t.GG,
    e._a[E],
    Je(k(), 1, 4).year
  ), s = xe(t.W, 1), a = xe(t.E, 1), (a < 1 || a > 7) && (u = !0)) : (i = e._locale._week.dow, n = e._locale._week.doy, c = Je(k(), i, n), r = xe(t.gg, e._a[E], c.year), s = xe(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (u = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : a = i), s < 1 || s > oe(r, i, n) ? p(e)._overflowWeeks = !0 : u != null ? p(e)._overflowWeekday = !0 : (o = ia(r, s, a, i, n), e._a[E] = o.year, e._dayOfYear = o.dayOfYear);
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
  var t = "" + e._i, r, s, a, i, n, o = t.length, u = 0, c, y;
  for (a = Bs(e._f, e._locale).match(xr) || [], y = a.length, r = 0; r < y; r++)
    i = a[r], s = (t.match(Rn(i, e)) || [])[0], s && (n = t.substr(0, t.indexOf(s)), n.length > 0 && p(e).unusedInput.push(n), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Ee[i] ? (s ? p(e).empty = !1 : p(e).unusedTokens.push(i), En(i, s, e)) : e._strict && !s && p(e).unusedTokens.push(i);
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
  var t, r, s, a, i, n, o = !1, u = e._f.length;
  if (u === 0) {
    p(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < u; a++)
    i = 0, n = !1, t = Yr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ur(t), Mr(t) && (n = !0), i += p(t).charsLeftOver, i += p(t).unusedTokens.length * 10, p(t).score = i, o ? i < s && (s = i, r = t) : (s == null || i < s || n) && (s = i, r = t, n && (o = !0));
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
  var t = new et(Cr(ha(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ha(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || le(e._l), t === null || r === void 0 && t === "" ? bt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new et(Cr(t)) : (Ke(t) ? e._d = t : G(r) ? Vo(e) : r ? Ur(e) : Go(e), Mr(e) || (e._d = null), e));
}
function Go(e) {
  var t = e._i;
  L(t) ? e._d = new Date(d.now()) : Ke(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Io(e) : G(t) ? (e._a = js(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Wr(e)) : ve(t) ? Ho(e) : ue(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ca(e, t, r, s, a) {
  var i = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (ve(e) && kr(e) || G(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = r, i._i = e, i._f = t, i._strict = s, Bo(i);
}
function k(e, t, r, s) {
  return ca(e, t, r, s, !1);
}
var zo = $(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : bt();
  }
), Zo = $(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = k.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : bt();
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
}, He = [
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
  var t, r = !1, s, a = He.length;
  for (t in e)
    if (S(e, t) && !(T.call(He, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < a; ++s)
    if (e[He[s]]) {
      if (r)
        return !1;
      parseFloat(e[He[s]]) !== v(e[He[s]]) && (r = !0);
    }
  return !0;
}
function eu() {
  return this._isValid;
}
function tu() {
  return Z(NaN);
}
function Nt(e) {
  var t = Rr(e), r = t.year || 0, s = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, n = t.day || 0, o = t.hour || 0, u = t.minute || 0, c = t.second || 0, y = t.millisecond || 0;
  this._isValid = Ko(t), this._milliseconds = +y + c * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +n + i * 7, this._months = +a + s * 3 + r * 12, this._data = {}, this._locale = le(), this._bubble();
}
function ut(e) {
  return e instanceof Nt;
}
function dr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ru(e, t, r) {
  var s = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, n;
  for (n = 0; n < s; n++)
    (r && e[n] !== t[n] || !r && v(e[n]) !== v(t[n])) && i++;
  return i + a;
}
function ya(e, t) {
  m(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + X(~~(r / 60), 2) + t + X(~~r % 60, 2);
  });
}
ya("Z", ":");
ya("ZZ", "");
f("Z", Rt);
f("ZZ", Rt);
D(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(Rt, e);
});
var su = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), s, a, i;
  return r === null ? null : (s = r[r.length - 1] || [], a = (s + "").match(su) || ["-", 0, 0], i = +(a[1] * 60) + v(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
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
function au(e, t, r) {
  var s = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(Rt, e), e === null)
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
function iu(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function nu(e) {
  return this.utcOffset(0, e);
}
function ou(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fr(this), "m")), this;
}
function uu() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(Tn, this._i);
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
  if (!L(this._isDSTShifted))
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
  var r = e, s = null, a, i, n;
  return ut(e) ? r = {
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
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (n = _u(
    k(r.from),
    k(r.to)
  ), r = {}, r.ms = n.milliseconds, r.M = n.months), i = new Nt(r), ut(e) && S(e, "_locale") && (i._locale = e._locale), ut(e) && S(e, "_isValid") && (i._isValid = e._isValid), i;
}
Z.fn = Nt.prototype;
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
    var a, i;
    return s !== null && !isNaN(+s) && (Hs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = s, s = i), a = Z(r, s), va(this, a, e), this;
  };
}
function va(e, t, r, s) {
  var a = t._milliseconds, i = dr(t._days), n = dr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, n && ta(e, ct(e, "Month") + n * r), i && zs(e, "Date", ct(e, "Date") + i * r), a && e._d.setTime(e._d.valueOf() + a * r), s && d.updateOffset(e, i || n));
}
var pu = pa(1, "add"), vu = pa(-1, "subtract");
function ga(e) {
  return typeof e == "string" || e instanceof String;
}
function gu(e) {
  return z(e) || Ke(e) || ga(e) || ue(e) || Su(e) || wu(e) || e === null || e === void 0;
}
function wu(e) {
  var t = ve(e) && !kr(e), r = !1, s = [
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
  ], a, i, n = s.length;
  for (a = 0; a < n; a += 1)
    i = s[a], r = r || S(e, i);
  return t && r;
}
function Su(e) {
  var t = G(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !ue(s) && ga(e);
  }).length === 0), t && r;
}
function Ou(e) {
  var t = ve(e) && !kr(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < s.length; a += 1)
    i = s[a], r = r || S(e, i);
  return t && r;
}
function Du(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function bu(e, t) {
  arguments.length === 1 && (arguments[0] ? gu(arguments[0]) ? (e = arguments[0], t = void 0) : Ou(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || k(), s = qr(r, this).startOf("day"), a = d.calendarFormat(this, s) || "sameElse", i = t && (ee(t[a]) ? t[a].call(this, r) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, k(r))
  );
}
function ku() {
  return new et(this);
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
  var a = z(e) ? e : k(e), i = z(t) ? t : k(t);
  return this.isValid() && a.isValid() && i.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(a, r) : !this.isBefore(a, r)) && (s[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
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
  var s, a, i;
  if (!this.isValid())
    return NaN;
  if (s = qr(e, this), !s.isValid())
    return NaN;
  switch (a = (s.utcOffset() - this.utcOffset()) * 6e4, t = j(t), t) {
    case "year":
      i = lt(this, s) / 12;
      break;
    case "month":
      i = lt(this, s);
      break;
    case "quarter":
      i = lt(this, s) / 3;
      break;
    case "second":
      i = (this - s) / 1e3;
      break;
    case "minute":
      i = (this - s) / 6e4;
      break;
    case "hour":
      i = (this - s) / 36e5;
      break;
    case "day":
      i = (this - s - a) / 864e5;
      break;
    case "week":
      i = (this - s - a) / 6048e5;
      break;
    default:
      i = this - s;
  }
  return r ? i : q(i);
}
function lt(e, t) {
  if (e.date() < t.date())
    return -lt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), a, i;
  return t - s < 0 ? (a = e.clone().add(r - 1, "months"), i = (t - s) / (s - a)) : (a = e.clone().add(r + 1, "months"), i = (t - s) / (a - s)), -(r + i) || 0;
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
  return r.year() < 0 || r.year() > 9999 ? ot(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ee(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ot(r, "Z")) : ot(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Lu() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + s + a + i);
}
function Au(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = ot(this, e);
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
var _t = 1e3, Ne = 60 * _t, pt = 60 * Ne, Da = (365 * 400 + 97) * 24 * pt;
function Fe(e, t) {
  return (e % t + t) % t;
}
function ba(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Da : new Date(e, t, r).valueOf();
}
function ka(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Da : Date.UTC(e, t, r);
}
function qu(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ka : ba, e) {
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
function $u(e) {
  var t, r;
  if (e = j(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? ka : ba, e) {
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
f("y", Ue);
f("yy", Ue);
f("yyy", Ue);
f("yyyy", Ue);
f("yo", fl);
D(["y", "yy", "yyy", "yyyy"], E);
D(["yo"], function(e, t, r, s) {
  var a;
  r._locale._eraYearOrdinalRegex && (a = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[E] = r._locale.eraYearOrdinalParse(e, a) : t[E] = parseInt(e, 10);
});
function Ku(e, t) {
  var r, s, a, i = this._eras || le("en")._eras;
  for (r = 0, s = i.length; r < s; ++r) {
    switch (typeof i[r].since) {
      case "string":
        a = d(i[r].since).startOf("day"), i[r].since = a.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        a = d(i[r].until).startOf("day").valueOf(), i[r].until = a.valueOf();
        break;
    }
  }
  return i;
}
function el(e, t, r) {
  var s, a, i = this.eras(), n, o, u;
  for (e = e.toUpperCase(), s = 0, a = i.length; s < a; ++s)
    if (n = i[s].name.toUpperCase(), o = i[s].abbr.toUpperCase(), u = i[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[s];
          break;
        case "NNNN":
          if (n === e)
            return i[s];
          break;
        case "NNNNN":
          if (u === e)
            return i[s];
          break;
      }
    else if ([n, o, u].indexOf(e) >= 0)
      return i[s];
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
function il() {
  var e, t, r, s, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = a[e].since <= a[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
      return (this.year() - d(a[e].since).year()) * r + a[e].offset;
  return this.year();
}
function nl(e) {
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
  return t._eraYearOrdinalRegex || Ue;
}
function jr() {
  var e = [], t = [], r = [], s = [], a, i, n = this.eras();
  for (a = 0, i = n.length; a < i; ++a)
    t.push(W(n[a].name)), e.push(W(n[a].abbr)), r.push(W(n[a].narrow)), s.push(W(n[a].name)), s.push(W(n[a].abbr)), s.push(W(n[a].narrow));
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
f("GG", M, U);
f("gg", M, U);
f("GGGG", Er, Pr);
f("gggg", Er, Pr);
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
  var i;
  return e == null ? Je(this, s, a).year : (i = oe(e, s, a), t > i && (t = i), vl.call(this, e, t, r, s, a));
}
function vl(e, t, r, s, a) {
  var i = ia(e, t, r, s, a), n = Ze(i.year, 0, i.dayOfYear);
  return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this;
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
f("D", M);
f("DD", M, U);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
D(["D", "DD"], J);
D("Do", function(e, t) {
  t[J] = v(e.match(M)[0]);
});
var Ya = We("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
N("dayOfYear", "DDD");
F("dayOfYear", 4);
f("DDD", Yt);
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
f("m", M);
f("mm", M, U);
D(["m", "mm"], B);
var Sl = We("Minutes", !1);
m("s", ["ss", 2], 0, "second");
N("second", "s");
F("second", 15);
f("s", M);
f("ss", M, U);
D(["s", "ss"], ae);
var Ol = We("Seconds", !1);
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
f("S", Yt, Zs);
f("SS", Yt, U);
f("SSS", Yt, Js);
var ce, Ta;
for (ce = "SSSS"; ce.length <= 9; ce += "S")
  f(ce, Ue);
function Dl(e, t) {
  t[pe] = v(("0." + e) * 1e3);
}
for (ce = "S"; ce.length <= 9; ce += "S")
  D(ce, Dl);
Ta = We("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function bl() {
  return this._isUTC ? "UTC" : "";
}
function kl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = et.prototype;
l.add = pu;
l.calendar = bu;
l.clone = ku;
l.diff = Eu;
l.endOf = $u;
l.format = Au;
l.from = Cu;
l.fromNow = Wu;
l.to = Uu;
l.toNow = Iu;
l.get = Mn;
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
l.set = Yn;
l.startOf = qu;
l.subtract = vu;
l.toArray = Bu;
l.toObject = Gu;
l.toDate = Hu;
l.toISOString = Fu;
l.inspect = Lu;
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
l.eraYear = il;
l.year = aa;
l.isLeapYear = Bn;
l.weekYear = hl;
l.isoWeekYear = cl;
l.quarter = l.quarters = gl;
l.month = ra;
l.daysInMonth = jn;
l.week = l.weeks = Xn;
l.isoWeek = l.isoWeeks = Kn;
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
l.utc = nu;
l.local = ou;
l.parseZone = uu;
l.hasAlignedHourOffset = lu;
l.isDST = du;
l.isLocal = hu;
l.isUtcOffset = cu;
l.isUtc = _a;
l.isUTC = _a;
l.zoneAbbr = bl;
l.zoneName = kl;
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
  iu
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
O.calendar = hn;
O.longDateFormat = _n;
O.invalidDate = vn;
O.ordinal = Sn;
O.preparse = xa;
O.postformat = xa;
O.relativeTime = Dn;
O.pastFuture = bn;
O.set = dn;
O.eras = Ku;
O.erasParse = el;
O.erasConvertYear = tl;
O.erasAbbrRegex = ol;
O.erasNameRegex = nl;
O.erasNarrowRegex = ul;
O.months = Un;
O.monthsShort = In;
O.monthsParse = $n;
O.monthsRegex = Hn;
O.monthsShortRegex = Vn;
O.week = zn;
O.firstDayOfYear = Qn;
O.firstDayOfWeek = Jn;
O.weekdays = oo;
O.weekdaysMin = lo;
O.weekdaysShort = uo;
O.weekdaysParse = ho;
O.weekdaysRegex = _o;
O.weekdaysShortRegex = po;
O.weekdaysMinRegex = vo;
O.isPM = wo;
O.meridiem = Do;
function vt(e, t, r, s) {
  var a = le(), i = K().set(s, t);
  return a[r](i, e);
}
function Ra(e, t, r) {
  if (ue(e) && (t = e, e = void 0), e = e || "", t != null)
    return vt(e, t, r, "month");
  var s, a = [];
  for (s = 0; s < 12; s++)
    a[s] = vt(e, s, r, "month");
  return a;
}
function Vr(e, t, r, s) {
  typeof e == "boolean" ? (ue(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, ue(t) && (r = t, t = void 0), t = t || "");
  var a = le(), i = e ? a._week.dow : 0, n, o = [];
  if (r != null)
    return vt(t, (r + i) % 7, s, "day");
  for (n = 0; n < 7; n++)
    o[n] = vt(t, (n + i) % 7, s, "day");
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
function Ll(e, t) {
  return Pa(this, e, t, -1);
}
function Ds(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Al() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, a, i, n, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Ds(hr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, a = q(e / 1e3), s.seconds = a % 60, i = q(a / 60), s.minutes = i % 60, n = q(i / 60), s.hours = n % 24, t += q(n / 24), u = q(Ea(t)), r += u, t -= Ds(hr(u)), o = q(r / 12), r %= 12, s.days = t, s.months = r, s.years = o, this;
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
var re = Math.round, Pe = {
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
function id(e, t, r, s) {
  var a = Z(e).abs(), i = re(a.as("s")), n = re(a.as("m")), o = re(a.as("h")), u = re(a.as("d")), c = re(a.as("M")), y = re(a.as("w")), g = re(a.as("y")), h = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || n <= 1 && ["m"] || n < r.m && ["mm", n] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (h = h || y <= 1 && ["w"] || y < r.w && ["ww", y]), h = h || c <= 1 && ["M"] || c < r.M && ["MM", c] || g <= 1 && ["y"] || ["yy", g], h[2] = t, h[3] = +e > 0, h[4] = s, ad.apply(null, h);
}
function nd(e) {
  return e === void 0 ? re : typeof e == "function" ? (re = e, !0) : !1;
}
function od(e, t) {
  return Pe[e] === void 0 ? !1 : t === void 0 ? Pe[e] : (Pe[e] = t, e === "s" && (Pe.ss = t - 1), !0);
}
function ud(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Pe, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Pe, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), a = this.localeData(), i = id(this, !r, s, a), r && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var sr = Math.abs;
function Te(e) {
  return (e > 0) - (e < 0) || +e;
}
function Lt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = sr(this._milliseconds) / 1e3, t = sr(this._days), r = sr(this._months), s, a, i, n, o = this.asSeconds(), u, c, y, g;
  return o ? (s = q(e / 60), a = q(s / 60), e %= 60, s %= 60, i = q(r / 12), r %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", c = Te(this._months) !== Te(o) ? "-" : "", y = Te(this._days) !== Te(o) ? "-" : "", g = Te(this._milliseconds) !== Te(o) ? "-" : "", u + "P" + (i ? c + i + "Y" : "") + (r ? c + r + "M" : "") + (t ? y + t + "D" : "") + (a || s || e ? "T" : "") + (a ? g + a + "H" : "") + (s ? g + s + "M" : "") + (e ? g + n + "S" : "")) : "P0D";
}
var w = Nt.prototype;
w.isValid = eu;
w.abs = Nl;
w.add = Fl;
w.subtract = Ll;
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
w._bubble = Al;
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
w.toISOString = Lt;
w.toString = Lt;
w.toJSON = Lt;
w.locale = wa;
w.localeData = Oa;
w.toIsoString = $(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Lt
);
w.lang = Sa;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
f("x", xt);
f("X", xn);
D("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
D("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
d.version = "2.29.4";
un(k);
d.fn = l;
d.min = Jo;
d.max = Qo;
d.now = Xo;
d.utc = K;
d.unix = Ml;
d.months = Tl;
d.isDate = Ke;
d.locale = me;
d.invalid = bt;
d.duration = Z;
d.isMoment = z;
d.weekdays = Rl;
d.parseZone = Yl;
d.localeData = le;
d.isDuration = ut;
d.monthsShort = xl;
d.weekdaysMin = El;
d.defineLocale = Ar;
d.updateLocale = Yo;
d.locales = To;
d.weekdaysShort = Pl;
d.normalizeUnits = j;
d.relativeTimeRounding = nd;
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
function dd(e, t, r, s, a, i) {
  const n = ge("o-datepicker");
  return ie(), Xe(n, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => a.query = o),
      i.updateQuery
    ],
    "date-formatter": i.dateFormatter
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
function md(e, t, r, s, a, i) {
  const n = ge("o-loading"), o = ge("o-button");
  return ie(), ft("div", null, [
    r.form.isLoaded.value ? (ie(), ft("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = qa((u) => e.$emit("submit"), ["prevent"]))
    }, [
      dt(e.$slots, "default")
    ], 32)) : Be("", !0),
    bs(n, {
      active: r.form.isLoading.value
    }, null, 8, ["active"]),
    !r.form.isLoaded.value && !r.form.isLoading.value ? (ie(), Xe(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: cr(() => [
        cd
      ]),
      _: 1
    })) : Be("", !0)
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
function vd(e, t, r, s, a, i) {
  return ie(), ft("img", {
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
function Sd(e, t, r, s, a, i) {
  const n = ge("o-input"), o = ge("o-field");
  return ie(), Xe(o, ar({ label: r.label }, s.errors.get(r.name, r.bag)), {
    default: cr(() => [
      bs(n, ar(e.$attrs, {
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
function bd(e, t, r, s, a, i) {
  const n = ge("o-inputitems");
  return ie(), Xe(n, ar(e.$attrs, {
    modelValue: a.query,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => a.query = o),
    data: s.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (o) => i.addedTag(o)),
    onRemove: t[2] || (t[2] = (o) => i.removedTag(o)),
    onFocus: t[3] || (t[3] = (o) => i.searchTags()),
    onTyping: t[4] || (t[4] = (o) => i.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const kd = /* @__PURE__ */ Se(Dd, [["render", bd]]), Td = {
  AutoCompleteSearch: Dt,
  FormBuilder: br,
  ResourceList: Zi,
  Listing: Ji,
  useFormErrors: Dr,
  WyxosButton: rn,
  WyxosCollection: on,
  WyxosDatepicker: fd,
  WyxosForm: yd,
  WyxosImage: gd,
  WyxosInput: Od,
  WyxosTags: kd
};
export {
  Dt as AutoCompleteSearch,
  br as FormBuilder,
  Ji as Listing,
  Zi as ResourceList,
  rn as WyxosButton,
  on as WyxosCollection,
  fd as WyxosDatepicker,
  yd as WyxosForm,
  gd as WyxosImage,
  Od as WyxosInput,
  kd as WyxosTags,
  Td as default,
  Dr as useFormErrors
};
