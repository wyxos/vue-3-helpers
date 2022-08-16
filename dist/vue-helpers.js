var Sn = Object.defineProperty;
var Vn = (e, t, n) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => (Vn(e, typeof t != "symbol" ? t + "" : t, n), n);
import ue from "axios";
import He from "moment";
function xn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function ze(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = D(r) ? In(r) : ze(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else {
    if (D(e))
      return e;
    if (x(e))
      return e;
  }
}
const $n = /;(?![^(]*\))/g, Dn = /:(.+)/;
function In(e) {
  const t = {};
  return e.split($n).forEach((n) => {
    if (n) {
      const r = n.split(Dn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function We(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const r = We(e[n]);
      r && (t += r + " ");
    }
  else if (x(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Rn(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !D(t) && (e.class = We(t)), n && (e.style = ze(n)), e;
}
const V = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Cn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], zt = () => {
}, Pn = /^on[^a-z]/, Tn = (e) => Pn.test(e), F = Object.assign, Fn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mn = Object.prototype.hasOwnProperty, h = (e, t) => Mn.call(e, t), m = Array.isArray, se = (e) => qe(e) === "[object Map]", An = (e) => qe(e) === "[object Set]", v = (e) => typeof e == "function", D = (e) => typeof e == "string", ot = (e) => typeof e == "symbol", x = (e) => e !== null && typeof e == "object", jn = (e) => x(e) && v(e.then) && v(e.catch), zn = Object.prototype.toString, qe = (e) => zn.call(e), Wt = (e) => qe(e).slice(8, -1), Wn = (e) => qe(e) === "[object Object]", it = (e) => D(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, qn = /-(\w)/g, $e = qt((e) => e.replace(qn, (t, n) => n ? n.toUpperCase() : "")), De = qt((e) => e.charAt(0).toUpperCase() + e.slice(1)), he = (e, t) => !Object.is(e, t), Kn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Nt;
const Bn = () => Nt || (Nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Hn;
function Un(e, t = Hn) {
  t && t.active && t.effects.push(e);
}
const me = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Kt = (e) => (e.w & W) > 0, Bt = (e) => (e.n & W) > 0, Ln = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= W;
}, Jn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      Kt(s) && !Bt(s) ? s.delete(e) : t[n++] = s, s.w &= ~W, s.n &= ~W;
    }
    t.length = n;
  }
}, Je = /* @__PURE__ */ new WeakMap();
let le = 0, W = 1;
const Ye = 30;
let N;
const U = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ge = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Yn {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Un(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = N, n = z;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = N, N = this, z = !0, W = 1 << ++le, le <= Ye ? Ln(this) : Ot(this), this.fn();
    } finally {
      le <= Ye && Jn(this), W = 1 << --le, N = this.parent, z = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    N === this ? this.deferStop = !0 : this.active && (Ot(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ot(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let z = !0;
const Ht = [];
function Ut() {
  Ht.push(z), z = !1;
}
function Lt() {
  const e = Ht.pop();
  z = e === void 0 ? !0 : e;
}
function I(e, t, n) {
  if (z && N) {
    let r = Je.get(e);
    r || Je.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = me());
    const o = process.env.NODE_ENV !== "production" ? { effect: N, target: e, type: t, key: n } : void 0;
    Qe(s, o);
  }
}
function Qe(e, t) {
  let n = !1;
  le <= Ye ? Bt(e) || (e.n |= W, n = !Kt(e)) : n = !e.has(N), n && (e.add(N), N.deps.push(e), process.env.NODE_ENV !== "production" && N.onTrack && N.onTrack(Object.assign({ effect: N }, t)));
}
function q(e, t, n, r, s, o) {
  const i = Je.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && m(e))
    i.forEach((d, p) => {
      (p === "length" || p >= r) && c.push(d);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        m(e) ? it(n) && c.push(i.get("length")) : (c.push(i.get(U)), se(e) && c.push(i.get(Ge)));
        break;
      case "delete":
        m(e) || (c.push(i.get(U)), se(e) && c.push(i.get(Ge)));
        break;
      case "set":
        se(e) && c.push(i.get(U));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: s, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? te(c[0], l) : te(c[0]));
  else {
    const d = [];
    for (const p of c)
      p && d.push(...p);
    process.env.NODE_ENV !== "production" ? te(me(d), l) : te(me(d));
  }
}
function te(e, t) {
  const n = m(e) ? e : [...e];
  for (const r of n)
    r.computed && vt(r, t);
  for (const r of n)
    r.computed || vt(r, t);
}
function vt(e, t) {
  (e !== N || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(F({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Gn = /* @__PURE__ */ xn("__proto__,__v_isRef,__isVue"), Jt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ot)
), Qn = /* @__PURE__ */ ct(), Xn = /* @__PURE__ */ ct(!0), Zn = /* @__PURE__ */ ct(!0, !0), St = /* @__PURE__ */ kn();
function kn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = f(this);
      for (let o = 0, i = this.length; o < i; o++)
        I(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(f)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ut();
      const r = f(this)[t].apply(this, n);
      return Lt(), r;
    };
  }), e;
}
function ct(e = !1, t = !1) {
  return function(r, s, o) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && o === (e ? t ? Zt : Xt : t ? mr : Qt).get(r))
      return r;
    const i = m(r);
    if (!e && i && h(St, s))
      return Reflect.get(St, s, o);
    const c = Reflect.get(r, s, o);
    return (ot(s) ? Jt.has(s) : Gn(s)) || (e || I(r, "get", s), t) ? c : y(c) ? i && it(s) ? c : c.value : x(c) ? e ? kt(c) : oe(c) : c;
  };
}
const er = /* @__PURE__ */ tr();
function tr(e = !1) {
  return function(n, r, s, o) {
    let i = n[r];
    if (Q(i) && y(i) && !y(s))
      return !1;
    if (!e && !Q(s) && (Xe(s) || (s = f(s), i = f(i)), !m(n) && y(i) && !y(s)))
      return i.value = s, !0;
    const c = m(n) && it(r) ? Number(r) < n.length : h(n, r), l = Reflect.set(n, r, s, o);
    return n === f(o) && (c ? he(s, i) && q(n, "set", r, s, i) : q(n, "add", r, s)), l;
  };
}
function nr(e, t) {
  const n = h(e, t), r = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && q(e, "delete", t, void 0, r), s;
}
function rr(e, t) {
  const n = Reflect.has(e, t);
  return (!ot(t) || !Jt.has(t)) && I(e, "has", t), n;
}
function sr(e) {
  return I(e, "iterate", m(e) ? "length" : U), Reflect.ownKeys(e);
}
const or = {
  get: Qn,
  set: er,
  deleteProperty: nr,
  has: rr,
  ownKeys: sr
}, Yt = {
  get: Xn,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && yt(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && yt(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ir = /* @__PURE__ */ F({}, Yt, {
  get: Zn
}), at = (e) => e, Ke = (e) => Reflect.getPrototypeOf(e);
function we(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = f(e), o = f(t);
  n || (t !== o && I(s, "get", t), I(s, "get", o));
  const { has: i } = Ke(s), c = r ? at : n ? ft : ge;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function Ne(e, t = !1) {
  const n = this.__v_raw, r = f(n), s = f(e);
  return t || (e !== s && I(r, "has", e), I(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ye(e, t = !1) {
  return e = e.__v_raw, !t && I(f(e), "iterate", U), Reflect.get(e, "size", e);
}
function Vt(e) {
  e = f(e);
  const t = f(this);
  return Ke(t).has.call(t, e) || (t.add(e), q(t, "add", e, e)), this;
}
function xt(e, t) {
  t = f(t);
  const n = f(this), { has: r, get: s } = Ke(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Gt(n, r, e) : (e = f(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? he(t, i) && q(n, "set", e, t, i) : q(n, "add", e, t), this;
}
function $t(e) {
  const t = f(this), { has: n, get: r } = Ke(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Gt(t, n, e) : (e = f(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && q(t, "delete", e, void 0, o), i;
}
function Dt() {
  const e = f(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? se(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && q(e, "clear", void 0, void 0, n), r;
}
function Oe(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = f(i), l = t ? at : e ? ft : ge;
    return !e && I(c, "iterate", U), i.forEach((d, p) => r.call(s, l(d), l(p), o));
  };
}
function ve(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = f(s), i = se(o), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...r), p = n ? at : t ? ft : ge;
    return !t && I(o, "iterate", l ? Ge : U), {
      next() {
        const { value: a, done: u } = d.next();
        return u ? { value: a, done: u } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: u
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function A(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${De(e)} operation ${n}failed: target is readonly.`, f(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function cr() {
  const e = {
    get(o) {
      return we(this, o);
    },
    get size() {
      return ye(this);
    },
    has: Ne,
    add: Vt,
    set: xt,
    delete: $t,
    clear: Dt,
    forEach: Oe(!1, !1)
  }, t = {
    get(o) {
      return we(this, o, !1, !0);
    },
    get size() {
      return ye(this);
    },
    has: Ne,
    add: Vt,
    set: xt,
    delete: $t,
    clear: Dt,
    forEach: Oe(!1, !0)
  }, n = {
    get(o) {
      return we(this, o, !0);
    },
    get size() {
      return ye(this, !0);
    },
    has(o) {
      return Ne.call(this, o, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: Oe(!0, !1)
  }, r = {
    get(o) {
      return we(this, o, !0, !0);
    },
    get size() {
      return ye(this, !0);
    },
    has(o) {
      return Ne.call(this, o, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: Oe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ve(o, !1, !1), n[o] = ve(o, !0, !1), t[o] = ve(o, !1, !0), r[o] = ve(o, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
const [ar, lr, ur, fr] = /* @__PURE__ */ cr();
function lt(e, t) {
  const n = t ? e ? fr : ur : e ? lr : ar;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(h(n, s) && s in r ? n : r, s, o);
}
const dr = {
  get: /* @__PURE__ */ lt(!1, !1)
}, pr = {
  get: /* @__PURE__ */ lt(!0, !1)
}, hr = {
  get: /* @__PURE__ */ lt(!0, !0)
};
function Gt(e, t, n) {
  const r = f(n);
  if (r !== n && t.call(e, r)) {
    const s = Wt(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Qt = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap();
function gr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gr(Wt(e));
}
function oe(e) {
  return Q(e) ? e : ut(e, !1, or, dr, Qt);
}
function kt(e) {
  return ut(e, !0, Yt, pr, Xt);
}
function Se(e) {
  return ut(e, !0, ir, hr, Zt);
}
function ut(e, t, n, r, s) {
  if (!x(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = _r(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? r : n);
  return s.set(e, c), c;
}
function L(e) {
  return Q(e) ? L(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Q(e) {
  return !!(e && e.__v_isReadonly);
}
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
function Ze(e) {
  return L(e) || Q(e);
}
function f(e) {
  const t = e && e.__v_raw;
  return t ? f(t) : e;
}
function Er(e) {
  return Kn(e, "__v_skip", !0), e;
}
const ge = (e) => x(e) ? oe(e) : e, ft = (e) => x(e) ? kt(e) : e;
function br(e) {
  z && N && (e = f(e), process.env.NODE_ENV !== "production" ? Qe(e.dep || (e.dep = me()), {
    target: e,
    type: "get",
    key: "value"
  }) : Qe(e.dep || (e.dep = me())));
}
function wr(e, t) {
  e = f(e), e.dep && (process.env.NODE_ENV !== "production" ? te(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : te(e.dep));
}
function y(e) {
  return !!(e && e.__v_isRef === !0);
}
function ne(e) {
  return Nr(e, !1);
}
function Nr(e, t) {
  return y(e) ? e : new yr(e, t);
}
class yr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : f(t), this._value = n ? t : ge(t);
  }
  get value() {
    return br(this), this._value;
  }
  set value(t) {
    t = this.__v_isShallow ? t : f(t), he(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : ge(t), wr(this, t));
  }
}
function Or(e) {
  return y(e) ? e.value : e;
}
const vr = {
  get: (e, t, n) => Or(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return y(s) && !y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Sr(e) {
  return L(e) ? e : new Proxy(e, vr);
}
const J = [];
function Vr(e) {
  J.push(e);
}
function xr() {
  J.pop();
}
function b(e, ...t) {
  Ut();
  const n = J.length ? J[J.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = $r();
  if (r)
    Y(r, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: o }) => `at <${bn(n, o.type)}>`).join(`
`),
      s
    ]);
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Dr(s)), console.warn(...o);
  }
  Lt();
}
function $r() {
  let e = J[J.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Dr(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Ir(n));
  }), t;
}
function Ir({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${bn(e.component, e.type, r)}`, o = ">" + n;
  return e.props ? [s, ...Rr(e.props), o] : [s + o];
}
function Rr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...en(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function en(e, t, n) {
  return D(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : y(t) ? (t = en(e, f(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : v(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = f(t), n ? t : [`${e}=`, t]);
}
const tn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Y(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    nn(o, t, n);
  }
  return s;
}
function ke(e, t, n, r) {
  if (v(e)) {
    const o = Y(e, t, n, r);
    return o && jn(o) && o.catch((i) => {
      nn(i, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(ke(e[o], t, n, r));
  return s;
}
function nn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? tn[n] : n;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Y(l, null, 10, [e, i, c]);
      return;
    }
  }
  Cr(e, n, s, r);
}
function Cr(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = tn[t];
    if (n && Vr(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && xr(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ie = !1, et = !1;
const C = [];
let j = 0;
const fe = [];
let ee = null, K = 0;
const de = [];
let M = null, B = 0;
const rn = /* @__PURE__ */ Promise.resolve();
let dt = null, tt = null;
const Pr = 100;
function Tr(e) {
  const t = dt || rn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fr(e) {
  let t = j + 1, n = C.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    _e(C[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function sn(e) {
  (!C.length || !C.includes(e, Ie && e.allowRecurse ? j + 1 : j)) && e !== tt && (e.id == null ? C.push(e) : C.splice(Fr(e.id), 0, e), on());
}
function on() {
  !Ie && !et && (et = !0, dt = rn.then(ln));
}
function cn(e, t, n, r) {
  m(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e), on();
}
function Mr(e) {
  cn(e, ee, fe, K);
}
function an(e) {
  cn(e, M, de, B);
}
function pt(e, t = null) {
  if (fe.length) {
    for (tt = t, ee = [...new Set(fe)], fe.length = 0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), K = 0; K < ee.length; K++)
      process.env.NODE_ENV !== "production" && ht(e, ee[K]) || ee[K]();
    ee = null, K = 0, tt = null, pt(e, t);
  }
}
function Ar(e) {
  if (pt(), de.length) {
    const t = [...new Set(de)];
    if (de.length = 0, M) {
      M.push(...t);
      return;
    }
    for (M = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), M.sort((n, r) => _e(n) - _e(r)), B = 0; B < M.length; B++)
      process.env.NODE_ENV !== "production" && ht(e, M[B]) || M[B]();
    M = null, B = 0;
  }
}
const _e = (e) => e.id == null ? 1 / 0 : e.id;
function ln(e) {
  et = !1, Ie = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), pt(e), C.sort((n, r) => _e(n) - _e(r));
  const t = process.env.NODE_ENV !== "production" ? (n) => ht(e, n) : zt;
  try {
    for (j = 0; j < C.length; j++) {
      const n = C[j];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Y(n, null, 14);
      }
    }
  } finally {
    j = 0, C.length = 0, Ar(e), Ie = !1, dt = null, (C.length || fe.length || de.length) && ln(e);
  }
}
function ht(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Pr) {
      const r = t.ownerInstance, s = r && bt(r.type);
      return b(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
const ce = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Bn().__VUE_HMR_RUNTIME__ = {
  createRecord: Ue(jr),
  rerender: Ue(zr),
  reload: Ue(Wr)
});
const Re = /* @__PURE__ */ new Map();
function jr(e, t) {
  return Re.has(e) ? !1 : (Re.set(e, {
    initialDef: pe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pe(e) {
  return wn(e) ? e.__vccOpts : e;
}
function zr(e, t) {
  const n = Re.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, pe(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Wr(e, t) {
  const n = Re.get(e);
  if (!n)
    return;
  t = pe(t), It(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = pe(s.type);
    ce.has(o) || (o !== n.initialDef && It(o, t), ce.add(o)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (ce.add(o), s.ceReload(t.styles), ce.delete(o)) : s.parent ? (sn(s.parent.update), s.parent.type.__asyncLoader && s.parent.ceReload && s.parent.ceReload(t.styles)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  an(() => {
    for (const s of r)
      ce.delete(pe(s.type));
  });
}
function It(e, t) {
  F(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ue(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
function qr(e, ...t) {
}
const Kr = /* @__PURE__ */ Br("component:updated");
function Br(e) {
  return (t) => {
    qr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
let O = null, un = null;
function Rt(e) {
  const t = O;
  return O = e, un = e && e.type.__scopeId || null, t;
}
function mt(e, t = O, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && At(-1);
    const o = Rt(t), i = e(...s);
    return Rt(o), r._d && At(1), process.env.NODE_ENV !== "production" && Kr(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
const Hr = (e) => e.__isSuspense;
function Ur(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : an(e);
}
const Ct = {};
function Lr(e, t, { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = V) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (g) => {
    b("Invalid watch source: ", g, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = G;
  let d, p = !1, a = !1;
  if (y(e) ? (d = () => e.value, p = Xe(e)) : L(e) ? (d = () => e, r = !0) : m(e) ? (a = !0, p = e.some((g) => L(g) || Xe(g)), d = () => e.map((g) => {
    if (y(g))
      return g.value;
    if (L(g))
      return re(g);
    if (v(g))
      return Y(g, l, 2);
    process.env.NODE_ENV !== "production" && c(g);
  })) : v(e) ? t ? d = () => Y(e, l, 2) : d = () => {
    if (!(l && l.isUnmounted))
      return u && u(), ke(e, l, 3, [_]);
  } : (d = zt, process.env.NODE_ENV !== "production" && c(e)), t && r) {
    const g = d;
    d = () => re(g());
  }
  let u, _ = (g) => {
    u = $.onStop = () => {
      Y(g, l, 4);
    };
  }, E = a ? [] : Ct;
  const R = () => {
    if (!!$.active)
      if (t) {
        const g = $.run();
        (r || p || (a ? g.some((On, vn) => he(On, E[vn])) : he(g, E))) && (u && u(), ke(t, l, 3, [
          g,
          E === Ct ? void 0 : E,
          _
        ]), E = g);
      } else
        $.run();
  };
  R.allowRecurse = !!t;
  let be;
  s === "sync" ? be = R : s === "post" ? be = () => Mt(R, l && l.suspense) : be = () => Mr(R);
  const $ = new Yn(d, be);
  return process.env.NODE_ENV !== "production" && ($.onTrack = o, $.onTrigger = i), t ? n ? R() : E = $.run() : s === "post" ? Mt($.run.bind($), l && l.suspense) : $.run(), () => {
    $.stop(), l && l.scope && Fn(l.scope.effects, $);
  };
}
function Jr(e, t, n) {
  const r = this.proxy, s = D(e) ? e.includes(".") ? Yr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  v(t) ? o = t : (o = t.handler, n = t);
  const i = G;
  jt(this);
  const c = Lr(s, o.bind(r), n);
  return i ? jt(i) : as(), c;
}
function Yr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function re(e, t) {
  if (!x(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), y(e))
    re(e.value, t);
  else if (m(e))
    for (let n = 0; n < e.length; n++)
      re(e[n], t);
  else if (An(e) || se(e))
    e.forEach((n) => {
      re(n, t);
    });
  else if (Wn(e))
    for (const n in e)
      re(e[n], t);
  return e;
}
const Gr = (e) => !!e.type.__asyncLoader, nt = "components";
function X(e, t) {
  return Xr(nt, e, !0, t) || e;
}
const Qr = Symbol();
function Xr(e, t, n = !0, r = !1) {
  const s = O || G;
  if (s) {
    const o = s.type;
    if (e === nt) {
      const c = bt(o, !1);
      if (c && (c === t || c === $e(t) || c === De($e(t))))
        return o;
    }
    const i = Pt(s[e] || o[e], t) || Pt(s.appContext[e], t);
    if (!i && r)
      return o;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const c = e === nt ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      b(`Failed to resolve ${e.slice(0, -1)}: ${t}${c}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && b(`resolve${De(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Pt(e, t) {
  return e && (e[t] || e[$e(t)] || e[De($e(t))]);
}
function gt(e, t, n = {}, r, s) {
  if (O.isCE || O.parent && Gr(O.parent) && O.parent.isCE)
    return ie("slot", t === "default" ? null : { name: t }, r && r());
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (b("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), o = () => []), o && o._c && (o._d = !1), T();
  const i = o && fn(o(n)), c = Z(Be, { key: n.key || `_${t}` }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
  return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function fn(e) {
  return e.some((t) => pn(t) ? !(t.type === Te || t.type === Be && !fn(t.children)) : !0) ? e : null;
}
const rt = (e) => e ? ls(e) ? us(e) || e.proxy : rt(e.parent) : null, Ce = /* @__PURE__ */ F(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Se(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Se(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Se(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Se(e.refs) : e.refs,
  $parent: (e) => rt(e.parent),
  $root: (e) => rt(e.root),
  $emit: (e) => e.emit,
  $options: (e) => es(e),
  $forceUpdate: (e) => e.f || (e.f = () => sn(e.update)),
  $nextTick: (e) => e.n || (e.n = Tr.bind(e.proxy)),
  $watch: (e) => Jr.bind(e)
}), Zr = (e) => e === "_" || e === "$", kr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && r !== V && r.__isScriptSetup && h(r, t))
      return r[t];
    let d;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (r !== V && h(r, t))
          return i[t] = 1, r[t];
        if (s !== V && h(s, t))
          return i[t] = 2, s[t];
        if ((d = e.propsOptions[0]) && h(d, t))
          return i[t] = 3, o[t];
        if (n !== V && h(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const p = Ce[t];
    let a, u;
    if (p)
      return t === "$attrs" && (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0), p(e);
    if ((a = c.__cssModules) && (a = a[t]))
      return a;
    if (n !== V && h(n, t))
      return i[t] = 4, n[t];
    if (u = l.config.globalProperties, h(u, t))
      return u[t];
    process.env.NODE_ENV !== "production" && O && (!D(t) || t.indexOf("__v") !== 0) && (s !== V && Zr(t[0]) && h(s, t) ? b(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === O && b(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return s !== V && h(s, t) ? (s[t] = n, !0) : r !== V && h(r, t) ? (r[t] = n, !0) : h(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } }, i) {
    let c;
    return !!n[i] || e !== V && h(e, i) || t !== V && h(t, i) || (c = o[0]) && h(c, i) || h(r, i) || h(Ce, i) || h(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : h(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (kr.ownKeys = (e) => (b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function es(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, c = o.get(t);
  let l;
  return c ? l = c : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((d) => Pe(l, d, i, !0)), Pe(l, t, i)), o.set(t, l), l;
}
function Pe(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Pe(e, o, n, !0), s && s.forEach((i) => Pe(e, i, n, !0));
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = ts[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ts = {
  data: Tt,
  props: H,
  emits: H,
  methods: H,
  computed: H,
  beforeCreate: w,
  created: w,
  beforeMount: w,
  mounted: w,
  beforeUpdate: w,
  updated: w,
  beforeDestroy: w,
  beforeUnmount: w,
  destroyed: w,
  unmounted: w,
  activated: w,
  deactivated: w,
  errorCaptured: w,
  serverPrefetch: w,
  components: H,
  directives: H,
  watch: rs,
  provide: Tt,
  inject: ns
};
function Tt(e, t) {
  return t ? e ? function() {
    return F(v(e) ? e.call(this, this) : e, v(t) ? t.call(this, this) : t);
  } : t : e;
}
function ns(e, t) {
  return H(Ft(e), Ft(t));
}
function Ft(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function w(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function H(e, t) {
  return e ? F(F(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function rs(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = F(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = w(e[r], t[r]);
  return n;
}
const Mt = Ur, ss = (e) => e.__isTeleport, Be = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), os = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Te = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const Ve = [];
let P = null;
function T(e = !1) {
  Ve.push(P = e ? null : []);
}
function is() {
  Ve.pop(), P = Ve[Ve.length - 1] || null;
}
let Ee = 1;
function At(e) {
  Ee += e;
}
function dn(e) {
  return e.dynamicChildren = Ee > 0 ? P || Cn : null, is(), Ee > 0 && P && P.push(e), e;
}
function Fe(e, t, n, r, s, o) {
  return dn(Me(e, t, n, r, s, o, !0));
}
function Z(e, t, n, r, s) {
  return dn(ie(e, t, n, r, s, !0));
}
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const cs = (...e) => gn(...e), hn = "__vInternal", mn = ({ key: e }) => e != null ? e : null, xe = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? D(e) || y(e) || v(e) ? { i: O, r: e, k: t, f: !!n } : e : null;
function Me(e, t = null, n = null, r = 0, s = null, o = e === Be ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mn(t),
    ref: t && xe(t),
    scopeId: un,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null
  };
  return c ? (Et(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= D(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && b("VNode created with invalid key (NaN). VNode type:", l.type), Ee > 0 && !i && P && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && P.push(l), l;
}
const ie = process.env.NODE_ENV !== "production" ? cs : gn;
function gn(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Qr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = Te), pn(e)) {
    const c = Ae(e, t, !0);
    return n && Et(c, n), Ee > 0 && !o && P && (c.shapeFlag & 6 ? P[P.indexOf(e)] = c : P.push(c)), c.patchFlag |= -2, c;
  }
  if (wn(e) && (e = e.__vccOpts), t) {
    t = _n(t);
    let { class: c, style: l } = t;
    c && !D(c) && (t.class = We(c)), x(l) && (Ze(l) && !m(l) && (l = F({}, l)), t.style = ze(l));
  }
  const i = D(e) ? 1 : Hr(e) ? 128 : ss(e) ? 64 : x(e) ? 4 : v(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ze(e) && (e = f(e), b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Me(e, t, n, r, s, i, o, !0);
}
function _n(e) {
  return e ? Ze(e) || hn in e ? F({}, e) : e : null;
}
function Ae(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e, c = t ? je(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && mn(c),
    ref: t && t.ref ? n && s ? m(s) ? s.concat(xe(t)) : [s, xe(t)] : xe(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && m(i) ? i.map(En) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Be ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ae(e.ssContent),
    ssFallback: e.ssFallback && Ae(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function En(e) {
  const t = Ae(e);
  return m(e.children) && (t.children = e.children.map(En)), t;
}
function _t(e = " ", t = 0) {
  return ie(os, null, e, t);
}
function st(e = "", t = !1) {
  return t ? (T(), Z(Te, null, e)) : ie(Te, null, e);
}
function Et(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Et(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(hn in t) ? t._ctx = O : s === 3 && O && (O.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    v(t) ? (t = { default: t, _ctx: O }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [_t(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function je(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = We([t.class, r.class]));
      else if (s === "style")
        t.style = ze([t.style, r.style]);
      else if (Tn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(m(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
let G = null;
const jt = (e) => {
  G = e, e.scope.on();
}, as = () => {
  G && G.scope.off(), G = null;
};
function ls(e) {
  return e.vnode.shapeFlag & 4;
}
function us(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Sr(Er(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ce)
          return Ce[n](e);
      }
    }));
}
const fs = /(?:^|[-_])(\w)/g, ds = (e) => e.replace(fs, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function bt(e, t = !0) {
  return v(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bn(e, t, n = !1) {
  let r = bt(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return r ? ds(r) : n ? "App" : "Anonymous";
}
function wn(e) {
  return v(e) && "__vccOpts" in e;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Le(e) {
  return !!(e && e.__v_isShallow);
}
function ps() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, s = {
    header(a) {
      return x(a) ? a.__isVue ? ["div", e, "VueInstance"] : y(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        c(a.value),
        ">"
      ] : L(a) ? [
        "div",
        {},
        ["span", e, Le(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${Q(a) ? " (readonly)" : ""}`
      ] : Q(a) ? [
        "div",
        {},
        ["span", e, Le(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const u = [];
    a.type.props && a.props && u.push(i("props", f(a.props))), a.setupState !== V && u.push(i("setup", a.setupState)), a.data !== V && u.push(i("data", f(a.data)));
    const _ = l(a, "computed");
    _ && u.push(i("computed", _));
    const E = l(a, "inject");
    return E && u.push(i("injected", E)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), u;
  }
  function i(a, u) {
    return u = F({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          c(u[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, u = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", r, a] : x(a) ? ["object", { object: u ? f(a) : a }] : ["span", n, String(a)];
  }
  function l(a, u) {
    const _ = a.type;
    if (v(_))
      return;
    const E = {};
    for (const R in a.ctx)
      d(_, R, u) && (E[R] = a.ctx[R]);
    return E;
  }
  function d(a, u, _) {
    const E = a[_];
    if (m(E) && E.includes(u) || x(E) && u in E || a.extends && d(a.extends, u, _) || a.mixins && a.mixins.some((R) => d(R, u, _)))
      return !0;
  }
  function p(a) {
    return Le(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const hs = ["ctrl", "shift", "alt", "meta"], ms = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => hs.some((n) => e[`${n}Key`] && !t.includes(n))
}, gs = (e, t) => (n, ...r) => {
  for (let s = 0; s < t.length; s++) {
    const o = ms[t[s]];
    if (o && o(n, t))
      return;
  }
  return e(n, ...r);
};
function _s() {
  ps();
}
process.env.NODE_ENV !== "production" && _s();
class wt {
  constructor() {
    S(this, "loading", ne(!1));
    S(this, "result", ne([]));
  }
  static create() {
    return new wt();
  }
  async search(t, n) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await ue.post(`${t}/search`, n).catch((s) => {
      throw this.loading.value = !1, s;
    });
    this.result.value = r.result, this.loading.value = !1;
  }
  async restore(t, n) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await ue.post(`${t}/restore`, n).catch((s) => {
      throw this.loading.value = !1, s;
    });
    return this.loading.value = !1, r;
  }
}
const ae = oe({
  default: []
});
function Nn() {
  return {
    createBag(e) {
      ae[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (ae[t] = Object.keys(e.response.data.errors).map(
        (r) => ({
          key: r,
          message: e.response.data.errors[r][0]
        })
      )), e;
    },
    get(e, t = "default") {
      const n = ae[t];
      if (!n)
        return;
      const r = n.find((s) => s.key === e);
      if (!!r)
        return {
          message: r.message,
          variant: "danger"
        };
    },
    clear(e, t = "default") {
      if (e) {
        const n = ae[t];
        if (!n) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const r = n.findIndex((s) => s.key === e);
        n.splice(r, 1);
        return;
      }
      ae[t] = [];
    }
  };
}
class yn {
  constructor(t) {
    S(this, "loadPath", "");
    S(this, "submitPath", "");
    S(this, "bag", "default");
    S(this, "model", oe({}));
    S(this, "form", oe({}));
    S(this, "original", oe({}));
    S(this, "isLoading", ne(!1));
    S(this, "isLoaded", ne(!0));
    S(this, "isSubmitting", ne(!1));
    S(this, "isSubmitted", ne(!1));
    S(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.errorBag), this.setAttributes(t.form);
  }
  static create(t) {
    return new yn(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t, this.errors = Nn(), this.errors.createBag(this.bag);
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
  async submit(t, n, r = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const s = n ? n(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: o } = await ue.post(t || this.submitPath, s, r).catch((i) => {
      throw this.isSubmitting.value = !1, this.errors.set(i, this.bag), i;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, o;
  }
  async advancedSubmit(t) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: n } = await Promise.resolve(t(ue, this.form)).catch(
      (r) => {
        throw this.isSubmitting.value = !1, this.errors.set(r, this.bag), r;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, n;
  }
  async load(t, n) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: r } = await ue.get(this.loadPath ? this.loadPath : t, {
      params: n
    }).catch((s) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, s;
    });
    return this.setAttributes(r.form), r.model && Object.assign(this.model, r.model), this.isLoading.value = !1, this.isLoaded.value = !0, r;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
const k = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Es = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, bs = /* @__PURE__ */ _t("Button content"), ws = {
  key: 0,
  class: "fas fa-spinner fa-spin"
};
function Ns(e, t, n, r, s, o) {
  const i = X("o-button");
  return T(), Z(i, { disabled: n.loading }, {
    default: mt(() => [
      gt(e.$slots, "default", {}, () => [
        bs
      ]),
      n.loading ? (T(), Fe("i", ws)) : st("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const Ws = /* @__PURE__ */ k(Es, [["render", Ns]]), ys = {
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
}, Os = /* @__PURE__ */ Me("ul", null, [
  /* @__PURE__ */ Me("li")
], -1);
function vs(e, t, n, r, s, o) {
  return gt(e.$slots, "default", Rn(_n({ add: o.add, remove: o.remove, items: s.items })), () => [
    Os
  ]);
}
const qs = /* @__PURE__ */ k(ys, [["render", vs]]), Ss = {
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
    this.modelValue && (this.query = He(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(e) {
      return e ? He(e).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit("update:modelValue", this.query ? He(this.query).format(this.submitFormat) : null);
    }
  }
};
function Vs(e, t, n, r, s, o) {
  const i = X("o-datepicker");
  return T(), Z(i, {
    modelValue: s.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (c) => s.query = c),
      o.updateQuery
    ],
    "date-formatter": o.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const Ks = /* @__PURE__ */ k(Ss, [["render", Vs]]), xs = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, $s = /* @__PURE__ */ _t(" An error occurred. Try again? ");
function Ds(e, t, n, r, s, o) {
  const i = X("o-loading"), c = X("o-button");
  return T(), Fe("div", null, [
    n.form.isLoaded.value ? (T(), Fe("form", {
      key: 0,
      onSubmit: t[0] || (t[0] = gs((l) => e.$emit("submit"), ["prevent"]))
    }, [
      gt(e.$slots, "default")
    ], 32)) : st("", !0),
    ie(i, {
      active: n.form.isLoading.value
    }, null, 8, ["active"]),
    !n.form.isLoaded.value && !n.form.isLoading.value ? (T(), Z(c, {
      key: 1,
      onClick: t[1] || (t[1] = (l) => n.form.load())
    }, {
      default: mt(() => [
        $s
      ]),
      _: 1
    })) : st("", !0)
  ]);
}
const Bs = /* @__PURE__ */ k(xs, [["render", Ds]]), Is = {
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
        this.$refs.image.src = t.target.result;
      }, e.readAsDataURL(this.src);
    },
    loadPath() {
      const e = new Image();
      e.onload = () => {
        this.$refs.image.src = this.src, this.width = this.resize ? this.resize.width : e.width, this.height = this.height ? this.resize.height : e.height;
      }, e.src = this.src;
    }
  }
}, Rs = ["width", "height"];
function Cs(e, t, n, r, s, o) {
  return T(), Fe("img", {
    ref: "image",
    src: "",
    alt: "",
    width: s.width,
    height: s.height
  }, null, 8, Rs);
}
const Hs = /* @__PURE__ */ k(Is, [["render", Cs]]), Ps = {
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
      default: "default"
    }
  },
  setup() {
    return {
      errors: Nn()
    };
  }
};
function Ts(e, t, n, r, s, o) {
  const i = X("o-input"), c = X("o-field");
  return T(), Z(c, je({ label: n.label }, r.errors.get(n.name, n.bag)), {
    default: mt(() => [
      ie(i, je(e.$attrs, {
        onFocus: t[0] || (t[0] = (l) => r.errors.clear(n.name, n.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const Us = /* @__PURE__ */ k(Ps, [["render", Ts]]), Fs = {
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
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      search: wt.create()
    };
  },
  data() {
    return {
      query: []
    };
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result: e } = await this.search.restore(this.path, {
        values: this.modelValue
      });
      this.query = e, this.$emit(
        "update:modelValue",
        this.query.map((t) => this.formatter(t))
      );
    }
  },
  methods: {
    searchTags(e) {
      return this.search.search(this.path, {
        value: e,
        type: "service-category",
        exclude: this.query.map((t) => t.id)
      });
    },
    addedTag() {
      this.$emit(
        "update:modelValue",
        this.query.map((e) => this.formatter(e))
      );
    },
    removedTag() {
      this.$emit(
        "update:modelValue",
        this.query.map((e) => this.formatter(e))
      );
    }
  }
};
function Ms(e, t, n, r, s, o) {
  const i = X("o-inputitems");
  return T(), Z(i, je(e.$attrs, {
    modelValue: s.query,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => s.query = c),
    data: r.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (c) => o.addedTag(c)),
    onRemove: t[2] || (t[2] = (c) => o.removedTag(c)),
    onFocus: t[3] || (t[3] = (c) => o.searchTags()),
    onTyping: t[4] || (t[4] = (c) => o.searchTags(c))
  }), null, 16, ["modelValue", "data"]);
}
const Ls = /* @__PURE__ */ k(Fs, [["render", Ms]]);
export {
  wt as AutoCompleteSearch,
  yn as FormBuilder,
  Ws as WyxosButton,
  qs as WyxosCollection,
  Ks as WyxosDatepicker,
  Bs as WyxosForm,
  Hs as WyxosImage,
  Us as WyxosInput,
  Ls as WyxosTags,
  Nn as useFormErrors
};
