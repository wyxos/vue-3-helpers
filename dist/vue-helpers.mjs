var vo = Object.defineProperty;
var wo = (e, t, r) => t in e ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var k = (e, t, r) => (wo(e, typeof t != "symbol" ? t + "" : t, r), r);
function So(e, t) {
  const r = /* @__PURE__ */ Object.create(null), n = e.split(",");
  for (let s = 0; s < n.length; s++)
    r[n[s]] = !0;
  return t ? (s) => !!r[s.toLowerCase()] : (s) => !!r[s];
}
function Rr(e) {
  if (Y(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = ne(n) ? Do(n) : Rr(n);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else {
    if (ne(e))
      return e;
    if (ee(e))
      return e;
  }
}
const Oo = /;(?![^(]*\))/g, bo = /:(.+)/;
function Do(e) {
  const t = {};
  return e.split(Oo).forEach((r) => {
    if (r) {
      const n = r.split(bo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Tr(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (Y(e))
    for (let r = 0; r < e.length; r++) {
      const n = Tr(e[r]);
      n && (t += n + " ");
    }
  else if (ee(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function Eo(e) {
  if (!e)
    return null;
  let { class: t, style: r } = e;
  return t && !ne(t) && (e.class = Tr(t)), r && (e.style = Rr(r)), e;
}
const Q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Mo = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ri = () => {
}, No = /^on[^a-z]/, xo = (e) => No.test(e), de = Object.assign, Ro = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, To = Object.prototype.hasOwnProperty, P = (e, t) => To.call(e, t), Y = Array.isArray, _t = (e) => kr(e) === "[object Map]", ko = (e) => kr(e) === "[object Set]", G = (e) => typeof e == "function", ne = (e) => typeof e == "string", qn = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Po = (e) => ee(e) && G(e.then) && G(e.catch), Yo = Object.prototype.toString, kr = (e) => Yo.call(e), Ti = (e) => kr(e).slice(8, -1), Co = (e) => kr(e) === "[object Object]", Hn = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ki = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Fo = /-(\w)/g, cr = ki((e) => e.replace(Fo, (t, r) => r ? r.toUpperCase() : "")), fr = ki((e) => e.charAt(0).toUpperCase() + e.slice(1)), At = (e, t) => !Object.is(e, t), Ao = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
};
let Fs;
const Io = () => Fs || (Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function As(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Vo;
function $o(e, t = Vo) {
  t && t.active && t.effects.push(e);
}
const It = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Pi = (e) => (e.w & We) > 0, Yi = (e) => (e.n & We) > 0, Wo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= We;
}, Lo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let r = 0;
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      Pi(s) && !Yi(s) ? s.delete(e) : t[r++] = s, s.w &= ~We, s.n &= ~We;
    }
    t.length = r;
  }
}, En = /* @__PURE__ */ new WeakMap();
let Rt = 0, We = 1;
const Mn = 30;
let H;
const Ge = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Nn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Uo {
  constructor(t, r = null, n) {
    this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, $o(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = H, r = Ve;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = H, H = this, Ve = !0, We = 1 << ++Rt, Rt <= Mn ? Wo(this) : Is(this), this.fn();
    } finally {
      Rt <= Mn && Lo(this), We = 1 << --Rt, H = this.parent, Ve = r, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    H === this ? this.deferStop = !0 : this.active && (Is(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Is(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++)
      t[r].delete(e);
    t.length = 0;
  }
}
let Ve = !0;
const Ci = [];
function Fi() {
  Ci.push(Ve), Ve = !1;
}
function Ai() {
  const e = Ci.pop();
  Ve = e === void 0 ? !0 : e;
}
function se(e, t, r) {
  if (Ve && H) {
    let n = En.get(e);
    n || En.set(e, n = /* @__PURE__ */ new Map());
    let s = n.get(r);
    s || n.set(r, s = It());
    const i = process.env.NODE_ENV !== "production" ? { effect: H, target: e, type: t, key: r } : void 0;
    xn(s, i);
  }
}
function xn(e, t) {
  let r = !1;
  Rt <= Mn ? Yi(e) || (e.n |= We, r = !Pi(e)) : r = !e.has(H), r && (e.add(H), H.deps.push(e), process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(Object.assign({ effect: H }, t)));
}
function Le(e, t, r, n, s, i) {
  const a = En.get(e);
  if (!a)
    return;
  let o = [];
  if (t === "clear")
    o = [...a.values()];
  else if (r === "length" && Y(e))
    a.forEach((f, h) => {
      (h === "length" || h >= n) && o.push(f);
    });
  else
    switch (r !== void 0 && o.push(a.get(r)), t) {
      case "add":
        Y(e) ? Hn(r) && o.push(a.get("length")) : (o.push(a.get(Ge)), _t(e) && o.push(a.get(Nn)));
        break;
      case "delete":
        Y(e) || (o.push(a.get(Ge)), _t(e) && o.push(a.get(Nn)));
        break;
      case "set":
        _t(e) && o.push(a.get(Ge));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: r, newValue: n, oldValue: s, oldTarget: i } : void 0;
  if (o.length === 1)
    o[0] && (process.env.NODE_ENV !== "production" ? dt(o[0], u) : dt(o[0]));
  else {
    const f = [];
    for (const h of o)
      h && f.push(...h);
    process.env.NODE_ENV !== "production" ? dt(It(f), u) : dt(It(f));
  }
}
function dt(e, t) {
  const r = Y(e) ? e : [...e];
  for (const n of r)
    n.computed && Vs(n, t);
  for (const n of r)
    n.computed || Vs(n, t);
}
function Vs(e, t) {
  (e !== H || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(de({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const jo = /* @__PURE__ */ So("__proto__,__v_isRef,__isVue"), Ii = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qn)
), qo = /* @__PURE__ */ zn(), Ho = /* @__PURE__ */ zn(!0), zo = /* @__PURE__ */ zn(!0, !0), $s = /* @__PURE__ */ Bo();
function Bo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = S(this);
      for (let i = 0, a = this.length; i < a; i++)
        se(n, "get", i + "");
      const s = n[t](...r);
      return s === -1 || s === !1 ? n[t](...r.map(S)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      Fi();
      const n = S(this)[t].apply(this, r);
      return Ai(), n;
    };
  }), e;
}
function zn(e = !1, t = !1) {
  return function(n, s, i) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && i === (e ? t ? Ui : Li : t ? lu : Wi).get(n))
      return n;
    const a = Y(n);
    if (!e && a && P($s, s))
      return Reflect.get($s, s, i);
    const o = Reflect.get(n, s, i);
    return (qn(s) ? Ii.has(s) : jo(s)) || (e || se(n, "get", s), t) ? o : z(o) ? a && Hn(s) ? o : o.value : ee(o) ? e ? ji(o) : ge(o) : o;
  };
}
const Go = /* @__PURE__ */ Jo();
function Jo(e = !1) {
  return function(r, n, s, i) {
    let a = r[n];
    if (et(a) && z(a) && !z(s))
      return !1;
    if (!e && !et(s) && (Rn(s) || (s = S(s), a = S(a)), !Y(r) && z(a) && !z(s)))
      return a.value = s, !0;
    const o = Y(r) && Hn(n) ? Number(n) < r.length : P(r, n), u = Reflect.set(r, n, s, i);
    return r === S(i) && (o ? At(s, a) && Le(r, "set", n, s, a) : Le(r, "add", n, s)), u;
  };
}
function Zo(e, t) {
  const r = P(e, t), n = e[t], s = Reflect.deleteProperty(e, t);
  return s && r && Le(e, "delete", t, void 0, n), s;
}
function Ko(e, t) {
  const r = Reflect.has(e, t);
  return (!qn(t) || !Ii.has(t)) && se(e, "has", t), r;
}
function Qo(e) {
  return se(e, "iterate", Y(e) ? "length" : Ge), Reflect.ownKeys(e);
}
const Xo = {
  get: qo,
  set: Go,
  deleteProperty: Zo,
  has: Ko,
  ownKeys: Qo
}, Vi = {
  get: Ho,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && As(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && As(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, eu = /* @__PURE__ */ de({}, Vi, {
  get: zo
}), Bn = (e) => e, Pr = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const s = S(e), i = S(t);
  r || (t !== i && se(s, "get", t), se(s, "get", i));
  const { has: a } = Pr(s), o = n ? Bn : r ? Zn : Vt;
  if (a.call(s, t))
    return o(e.get(t));
  if (a.call(s, i))
    return o(e.get(i));
  e !== s && e.get(t);
}
function Zt(e, t = !1) {
  const r = this.__v_raw, n = S(r), s = S(e);
  return t || (e !== s && se(n, "has", e), se(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s);
}
function Kt(e, t = !1) {
  return e = e.__v_raw, !t && se(S(e), "iterate", Ge), Reflect.get(e, "size", e);
}
function Ws(e) {
  e = S(e);
  const t = S(this);
  return Pr(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function Ls(e, t) {
  t = S(t);
  const r = S(this), { has: n, get: s } = Pr(r);
  let i = n.call(r, e);
  i ? process.env.NODE_ENV !== "production" && $i(r, n, e) : (e = S(e), i = n.call(r, e));
  const a = s.call(r, e);
  return r.set(e, t), i ? At(t, a) && Le(r, "set", e, t, a) : Le(r, "add", e, t), this;
}
function Us(e) {
  const t = S(this), { has: r, get: n } = Pr(t);
  let s = r.call(t, e);
  s ? process.env.NODE_ENV !== "production" && $i(t, r, e) : (e = S(e), s = r.call(t, e));
  const i = n ? n.call(t, e) : void 0, a = t.delete(e);
  return s && Le(t, "delete", e, void 0, i), a;
}
function js() {
  const e = S(this), t = e.size !== 0, r = process.env.NODE_ENV !== "production" ? _t(e) ? new Map(e) : new Set(e) : void 0, n = e.clear();
  return t && Le(e, "clear", void 0, void 0, r), n;
}
function Qt(e, t) {
  return function(n, s) {
    const i = this, a = i.__v_raw, o = S(a), u = t ? Bn : e ? Zn : Vt;
    return !e && se(o, "iterate", Ge), a.forEach((f, h) => n.call(s, u(f), u(h), i));
  };
}
function Xt(e, t, r) {
  return function(...n) {
    const s = this.__v_raw, i = S(s), a = _t(i), o = e === "entries" || e === Symbol.iterator && a, u = e === "keys" && a, f = s[e](...n), h = r ? Bn : t ? Zn : Vt;
    return !t && se(i, "iterate", u ? Nn : Ge), {
      next() {
        const { value: l, done: c } = f.next();
        return c ? { value: l, done: c } : {
          value: o ? [h(l[0]), h(l[1])] : h(l),
          done: c
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ye(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${fr(e)} operation ${r}failed: target is readonly.`, S(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function tu() {
  const e = {
    get(i) {
      return Jt(this, i);
    },
    get size() {
      return Kt(this);
    },
    has: Zt,
    add: Ws,
    set: Ls,
    delete: Us,
    clear: js,
    forEach: Qt(!1, !1)
  }, t = {
    get(i) {
      return Jt(this, i, !1, !0);
    },
    get size() {
      return Kt(this);
    },
    has: Zt,
    add: Ws,
    set: Ls,
    delete: Us,
    clear: js,
    forEach: Qt(!1, !0)
  }, r = {
    get(i) {
      return Jt(this, i, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(i) {
      return Zt.call(this, i, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: Qt(!0, !1)
  }, n = {
    get(i) {
      return Jt(this, i, !0, !0);
    },
    get size() {
      return Kt(this, !0);
    },
    has(i) {
      return Zt.call(this, i, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: Qt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = Xt(i, !1, !1), r[i] = Xt(i, !0, !1), t[i] = Xt(i, !1, !0), n[i] = Xt(i, !0, !0);
  }), [
    e,
    r,
    t,
    n
  ];
}
const [ru, nu, su, iu] = /* @__PURE__ */ tu();
function Gn(e, t) {
  const r = t ? e ? iu : su : e ? nu : ru;
  return (n, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(P(r, s) && s in n ? r : n, s, i);
}
const au = {
  get: /* @__PURE__ */ Gn(!1, !1)
}, ou = {
  get: /* @__PURE__ */ Gn(!0, !1)
}, uu = {
  get: /* @__PURE__ */ Gn(!0, !0)
};
function $i(e, t, r) {
  const n = S(r);
  if (n !== r && t.call(e, n)) {
    const s = Ti(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Wi = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap();
function cu(e) {
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
function fu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cu(Ti(e));
}
function ge(e) {
  return et(e) ? e : Jn(e, !1, Xo, au, Wi);
}
function ji(e) {
  return Jn(e, !0, Vi, ou, Li);
}
function er(e) {
  return Jn(e, !0, eu, uu, Ui);
}
function Jn(e, t, r, n, s) {
  if (!ee(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const a = fu(e);
  if (a === 0)
    return e;
  const o = new Proxy(e, a === 2 ? n : r);
  return s.set(e, o), o;
}
function Je(e) {
  return et(e) ? Je(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function Rn(e) {
  return !!(e && e.__v_isShallow);
}
function Tn(e) {
  return Je(e) || et(e);
}
function S(e) {
  const t = e && e.__v_raw;
  return t ? S(t) : e;
}
function du(e) {
  return Ao(e, "__v_skip", !0), e;
}
const Vt = (e) => ee(e) ? ge(e) : e, Zn = (e) => ee(e) ? ji(e) : e;
function hu(e) {
  Ve && H && (e = S(e), process.env.NODE_ENV !== "production" ? xn(e.dep || (e.dep = It()), {
    target: e,
    type: "get",
    key: "value"
  }) : xn(e.dep || (e.dep = It())));
}
function pu(e, t) {
  e = S(e), e.dep && (process.env.NODE_ENV !== "production" ? dt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : dt(e.dep));
}
function z(e) {
  return !!(e && e.__v_isRef === !0);
}
function ht(e) {
  return mu(e, !1);
}
function mu(e, t) {
  return z(e) ? e : new _u(e, t);
}
class _u {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : S(t), this._value = r ? t : Vt(t);
  }
  get value() {
    return hu(this), this._value;
  }
  set value(t) {
    t = this.__v_isShallow ? t : S(t), At(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Vt(t), pu(this, t));
  }
}
function yu(e) {
  return z(e) ? e.value : e;
}
const gu = {
  get: (e, t, r) => yu(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const s = e[t];
    return z(s) && !z(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function vu(e) {
  return Je(e) ? e : new Proxy(e, gu);
}
const Ze = [];
function wu(e) {
  Ze.push(e);
}
function Su() {
  Ze.pop();
}
function $(e, ...t) {
  Fi();
  const r = Ze.length ? Ze[Ze.length - 1].component : null, n = r && r.appContext.config.warnHandler, s = Ou();
  if (n)
    Ke(n, r, 11, [
      e + t.join(""),
      r && r.proxy,
      s.map(({ vnode: i }) => `at <${ua(r, i.type)}>`).join(`
`),
      s
    ]);
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    s.length && i.push(`
`, ...bu(s)), console.warn(...i);
  }
  Ai();
}
function Ou() {
  let e = Ze[Ze.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function bu(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Du(r));
  }), t;
}
function Du({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, s = ` at <${ua(e.component, e.type, n)}`, i = ">" + r;
  return e.props ? [s, ...Eu(e.props), i] : [s + i];
}
function Eu(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...qi(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function qi(e, t, r) {
  return ne(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : z(t) ? (t = qi(e, S(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : G(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = S(t), r ? t : [`${e}=`, t]);
}
const Hi = {
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
function Ke(e, t, r, n) {
  let s;
  try {
    s = n ? e(...n) : e();
  } catch (i) {
    zi(i, t, r);
  }
  return s;
}
function kn(e, t, r, n) {
  if (G(e)) {
    const i = Ke(e, t, r, n);
    return i && Po(i) && i.catch((a) => {
      zi(a, t, r);
    }), i;
  }
  const s = [];
  for (let i = 0; i < e.length; i++)
    s.push(kn(e[i], t, r, n));
  return s;
}
function zi(e, t, r, n = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const a = t.proxy, o = process.env.NODE_ENV !== "production" ? Hi[r] : r;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, a, o) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ke(u, null, 10, [e, a, o]);
      return;
    }
  }
  Mu(e, r, s, n);
}
function Mu(e, t, r, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Hi[t];
    if (r && wu(r), $(`Unhandled error${s ? ` during execution of ${s}` : ""}`), r && Su(), n)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let dr = !1, Pn = !1;
const ue = [];
let Fe = 0;
const Tt = [];
let ct = null, qe = 0;
const kt = [];
let be = null, He = 0;
const Bi = /* @__PURE__ */ Promise.resolve();
let Kn = null, Yn = null;
const Nu = 100;
function xu(e) {
  const t = Kn || Bi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ru(e) {
  let t = Fe + 1, r = ue.length;
  for (; t < r; ) {
    const n = t + r >>> 1;
    $t(ue[n]) < e ? t = n + 1 : r = n;
  }
  return t;
}
function Gi(e) {
  (!ue.length || !ue.includes(e, dr && e.allowRecurse ? Fe + 1 : Fe)) && e !== Yn && (e.id == null ? ue.push(e) : ue.splice(Ru(e.id), 0, e), Ji());
}
function Ji() {
  !dr && !Pn && (Pn = !0, Kn = Bi.then(Qi));
}
function Zi(e, t, r, n) {
  Y(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), Ji();
}
function Tu(e) {
  Zi(e, ct, Tt, qe);
}
function Ki(e) {
  Zi(e, be, kt, He);
}
function Qn(e, t = null) {
  if (Tt.length) {
    for (Yn = t, ct = [...new Set(Tt)], Tt.length = 0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), qe = 0; qe < ct.length; qe++)
      process.env.NODE_ENV !== "production" && Xn(e, ct[qe]) || ct[qe]();
    ct = null, qe = 0, Yn = null, Qn(e, t);
  }
}
function ku(e) {
  if (Qn(), kt.length) {
    const t = [...new Set(kt)];
    if (kt.length = 0, be) {
      be.push(...t);
      return;
    }
    for (be = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), be.sort((r, n) => $t(r) - $t(n)), He = 0; He < be.length; He++)
      process.env.NODE_ENV !== "production" && Xn(e, be[He]) || be[He]();
    be = null, He = 0;
  }
}
const $t = (e) => e.id == null ? 1 / 0 : e.id;
function Qi(e) {
  Pn = !1, dr = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Qn(e), ue.sort((r, n) => $t(r) - $t(n));
  const t = process.env.NODE_ENV !== "production" ? (r) => Xn(e, r) : Ri;
  try {
    for (Fe = 0; Fe < ue.length; Fe++) {
      const r = ue[Fe];
      if (r && r.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(r))
          continue;
        Ke(r, null, 14);
      }
    }
  } finally {
    Fe = 0, ue.length = 0, ku(e), dr = !1, Kn = null, (ue.length || Tt.length || kt.length) && Qi(e);
  }
}
function Xn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const r = e.get(t);
    if (r > Nu) {
      const n = t.ownerInstance, s = n && rs(n.type);
      return $(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, r + 1);
  }
}
const Et = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Io().__VUE_HMR_RUNTIME__ = {
  createRecord: tn(Pu),
  rerender: tn(Yu),
  reload: tn(Cu)
});
const hr = /* @__PURE__ */ new Map();
function Pu(e, t) {
  return hr.has(e) ? !1 : (hr.set(e, {
    initialDef: Pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pt(e) {
  return la(e) ? e.__vccOpts : e;
}
function Yu(e, t) {
  const r = hr.get(e);
  !r || (r.initialDef.render = t, [...r.instances].forEach((n) => {
    t && (n.render = t, Pt(n.type).render = t), n.renderCache = [], n.update();
  }));
}
function Cu(e, t) {
  const r = hr.get(e);
  if (!r)
    return;
  t = Pt(t), qs(r.initialDef, t);
  const n = [...r.instances];
  for (const s of n) {
    const i = Pt(s.type);
    Et.has(i) || (i !== r.initialDef && qs(i, t), Et.add(i)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Et.add(i), s.ceReload(t.styles), Et.delete(i)) : s.parent ? (Gi(s.parent.update), s.parent.type.__asyncLoader && s.parent.ceReload && s.parent.ceReload(t.styles)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Ki(() => {
    for (const s of n)
      Et.delete(Pt(s.type));
  });
}
function qs(e, t) {
  de(e, t);
  for (const r in e)
    r !== "__file" && !(r in t) && delete e[r];
}
function tn(e) {
  return (t, r) => {
    try {
      return e(t, r);
    } catch (n) {
      console.error(n), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
function Fu(e, ...t) {
}
const Au = /* @__PURE__ */ Iu("component:updated");
function Iu(e) {
  return (t) => {
    Fu(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
let B = null, Xi = null;
function Hs(e) {
  const t = B;
  return B = e, Xi = e && e.type.__scopeId || null, t;
}
function es(e, t = B, r) {
  if (!t || e._n)
    return e;
  const n = (...s) => {
    n._d && Ks(-1);
    const i = Hs(t), a = e(...s);
    return Hs(i), n._d && Ks(1), process.env.NODE_ENV !== "production" && Au(t), a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
const Vu = (e) => e.__isSuspense;
function $u(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Ki(e);
}
const zs = {};
function Wu(e, t, { immediate: r, deep: n, flush: s, onTrack: i, onTrigger: a } = Q) {
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && $('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), n !== void 0 && $('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const o = (M) => {
    $("Invalid watch source: ", M, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Qe;
  let f, h = !1, l = !1;
  if (z(e) ? (f = () => e.value, h = Rn(e)) : Je(e) ? (f = () => e, n = !0) : Y(e) ? (l = !0, h = e.some((M) => Je(M) || Rn(M)), f = () => e.map((M) => {
    if (z(M))
      return M.value;
    if (Je(M))
      return pt(M);
    if (G(M))
      return Ke(M, u, 2);
    process.env.NODE_ENV !== "production" && o(M);
  })) : G(e) ? t ? f = () => Ke(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return c && c(), kn(e, u, 3, [w]);
  } : (f = Ri, process.env.NODE_ENV !== "production" && o(e)), t && n) {
    const M = f;
    f = () => pt(M());
  }
  let c, w = (M) => {
    c = I.onStop = () => {
      Ke(M, u, 4);
    };
  }, T = l ? [] : zs;
  const A = () => {
    if (!!I.active)
      if (t) {
        const M = I.run();
        (n || h || (l ? M.some((Pe, Gt) => At(Pe, T[Gt])) : At(M, T))) && (c && c(), kn(t, u, 3, [
          M,
          T === zs ? void 0 : T,
          w
        ]), T = M);
      } else
        I.run();
  };
  A.allowRecurse = !!t;
  let _e;
  s === "sync" ? _e = A : s === "post" ? _e = () => Zs(A, u && u.suspense) : _e = () => Tu(A);
  const I = new Uo(f, _e);
  return process.env.NODE_ENV !== "production" && (I.onTrack = i, I.onTrigger = a), t ? r ? A() : T = I.run() : s === "post" ? Zs(I.run.bind(I), u && u.suspense) : I.run(), () => {
    I.stop(), u && u.scope && Ro(u.scope.effects, I);
  };
}
function Lu(e, t, r) {
  const n = this.proxy, s = ne(e) ? e.includes(".") ? Uu(n, e) : () => n[e] : e.bind(n, n);
  let i;
  G(t) ? i = t : (i = t.handler, r = t);
  const a = Qe;
  Qs(this);
  const o = Wu(s, i.bind(n), r);
  return a ? Qs(a) : rl(), o;
}
function Uu(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < r.length && n; s++)
      n = n[r[s]];
    return n;
  };
}
function pt(e, t) {
  if (!ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), z(e))
    pt(e.value, t);
  else if (Y(e))
    for (let r = 0; r < e.length; r++)
      pt(e[r], t);
  else if (ko(e) || _t(e))
    e.forEach((r) => {
      pt(r, t);
    });
  else if (Co(e))
    for (const r in e)
      pt(e[r], t);
  return e;
}
const ju = (e) => !!e.type.__asyncLoader, Cn = "components";
function tt(e, t) {
  return Hu(Cn, e, !0, t) || e;
}
const qu = Symbol();
function Hu(e, t, r = !0, n = !1) {
  const s = B || Qe;
  if (s) {
    const i = s.type;
    if (e === Cn) {
      const o = rs(i, !1);
      if (o && (o === t || o === cr(t) || o === fr(cr(t))))
        return i;
    }
    const a = Bs(s[e] || i[e], t) || Bs(s.appContext[e], t);
    if (!a && n)
      return i;
    if (process.env.NODE_ENV !== "production" && r && !a) {
      const o = e === Cn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      $(`Failed to resolve ${e.slice(0, -1)}: ${t}${o}`);
    }
    return a;
  } else
    process.env.NODE_ENV !== "production" && $(`resolve${fr(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Bs(e, t) {
  return e && (e[t] || e[cr(t)] || e[fr(cr(t))]);
}
function pr(e, t, r = {}, n, s) {
  if (B.isCE || B.parent && ju(B.parent) && B.parent.isCE)
    return St("slot", t === "default" ? null : { name: t }, n && n());
  let i = e[t];
  process.env.NODE_ENV !== "production" && i && i.length > 1 && ($("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), i = () => []), i && i._c && (i._d = !1), fe();
  const a = i && ea(i(r)), o = rt(Yr, { key: r.key || `_${t}` }, a || (n ? n() : []), a && e._ === 1 ? 64 : -2);
  return !s && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), i && i._c && (i._d = !0), o;
}
function ea(e) {
  return e.some((t) => ra(t) ? !(t.type === yr || t.type === Yr && !ea(t.children)) : !0) ? e : null;
}
const Fn = (e) => e ? nl(e) ? sl(e) || e.proxy : Fn(e.parent) : null, mr = /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? er(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? er(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? er(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? er(e.refs) : e.refs,
  $parent: (e) => Fn(e.parent),
  $root: (e) => Fn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Gu(e),
  $forceUpdate: (e) => e.f || (e.f = () => Gi(e.update)),
  $nextTick: (e) => e.n || (e.n = xu.bind(e.proxy)),
  $watch: (e) => Lu.bind(e)
}), zu = (e) => e === "_" || e === "$", Bu = {
  get({ _: e }, t) {
    const { ctx: r, setupState: n, data: s, props: i, accessCache: a, type: o, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && n !== Q && n.__isScriptSetup && P(n, t))
      return n[t];
    let f;
    if (t[0] !== "$") {
      const w = a[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return i[t];
        }
      else {
        if (n !== Q && P(n, t))
          return a[t] = 1, n[t];
        if (s !== Q && P(s, t))
          return a[t] = 2, s[t];
        if ((f = e.propsOptions[0]) && P(f, t))
          return a[t] = 3, i[t];
        if (r !== Q && P(r, t))
          return a[t] = 4, r[t];
        a[t] = 0;
      }
    }
    const h = mr[t];
    let l, c;
    if (h)
      return t === "$attrs" && (se(e, "get", t), process.env.NODE_ENV !== "production" && void 0), h(e);
    if ((l = o.__cssModules) && (l = l[t]))
      return l;
    if (r !== Q && P(r, t))
      return a[t] = 4, r[t];
    if (c = u.config.globalProperties, P(c, t))
      return c[t];
    process.env.NODE_ENV !== "production" && B && (!ne(t) || t.indexOf("__v") !== 0) && (s !== Q && zu(t[0]) && P(s, t) ? $(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === B && $(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: s, ctx: i } = e;
    return s !== Q && P(s, t) ? (s[t] = r, !0) : n !== Q && P(n, t) ? (n[t] = r, !0) : P(e.props, t) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : i[t] = r, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: s, propsOptions: i } }, a) {
    let o;
    return !!r[a] || e !== Q && P(e, a) || t !== Q && P(t, a) || (o = i[0]) && P(o, a) || P(n, a) || P(mr, a) || P(s.config.globalProperties, a);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : P(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
process.env.NODE_ENV !== "production" && (Bu.ownKeys = (e) => ($("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Gu(e) {
  const t = e.type, { mixins: r, extends: n } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: a } } = e.appContext, o = i.get(t);
  let u;
  return o ? u = o : !s.length && !r && !n ? u = t : (u = {}, s.length && s.forEach((f) => _r(u, f, a, !0)), _r(u, t, a)), i.set(t, u), u;
}
function _r(e, t, r, n = !1) {
  const { mixins: s, extends: i } = t;
  i && _r(e, i, r, !0), s && s.forEach((a) => _r(e, a, r, !0));
  for (const a in t)
    if (n && a === "expose")
      process.env.NODE_ENV !== "production" && $('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const o = Ju[a] || r && r[a];
      e[a] = o ? o(e[a], t[a]) : t[a];
    }
  return e;
}
const Ju = {
  data: Gs,
  props: ze,
  emits: ze,
  methods: ze,
  computed: ze,
  beforeCreate: q,
  created: q,
  beforeMount: q,
  mounted: q,
  beforeUpdate: q,
  updated: q,
  beforeDestroy: q,
  beforeUnmount: q,
  destroyed: q,
  unmounted: q,
  activated: q,
  deactivated: q,
  errorCaptured: q,
  serverPrefetch: q,
  components: ze,
  directives: ze,
  watch: Ku,
  provide: Gs,
  inject: Zu
};
function Gs(e, t) {
  return t ? e ? function() {
    return de(G(e) ? e.call(this, this) : e, G(t) ? t.call(this, this) : t);
  } : t : e;
}
function Zu(e, t) {
  return ze(Js(e), Js(t));
}
function Js(e) {
  if (Y(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ze(e, t) {
  return e ? de(de(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Ku(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = de(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = q(e[n], t[n]);
  return r;
}
const Zs = $u, Qu = (e) => e.__isTeleport, Yr = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Xu = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), yr = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
const nr = [];
let le = null;
function fe(e = !1) {
  nr.push(le = e ? null : []);
}
function el() {
  nr.pop(), le = nr[nr.length - 1] || null;
}
let Wt = 1;
function Ks(e) {
  Wt += e;
}
function ta(e) {
  return e.dynamicChildren = Wt > 0 ? le || Mo : null, el(), Wt > 0 && le && le.push(e), e;
}
function gr(e, t, r, n, s, i) {
  return ta(vr(e, t, r, n, s, i, !0));
}
function rt(e, t, r, n, s) {
  return ta(St(e, t, r, n, s, !0));
}
function ra(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const tl = (...e) => ia(...e), na = "__vInternal", sa = ({ key: e }) => e != null ? e : null, sr = ({ ref: e, ref_key: t, ref_for: r }) => e != null ? ne(e) || z(e) || G(e) ? { i: B, r: e, k: t, f: !!r } : e : null;
function vr(e, t = null, r = null, n = 0, s = null, i = e === Yr ? 0 : 1, a = !1, o = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sa(t),
    ref: t && sr(t),
    scopeId: Xi,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null
  };
  return o ? (ts(u, r), i & 128 && e.normalize(u)) : r && (u.shapeFlag |= ne(r) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && $("VNode created with invalid key (NaN). VNode type:", u.type), Wt > 0 && !a && le && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && le.push(u), u;
}
const St = process.env.NODE_ENV !== "production" ? tl : ia;
function ia(e, t = null, r = null, n = 0, s = null, i = !1) {
  if ((!e || e === qu) && (process.env.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = yr), ra(e)) {
    const o = wr(e, t, !0);
    return r && ts(o, r), Wt > 0 && !i && le && (o.shapeFlag & 6 ? le[le.indexOf(e)] = o : le.push(o)), o.patchFlag |= -2, o;
  }
  if (la(e) && (e = e.__vccOpts), t) {
    t = aa(t);
    let { class: o, style: u } = t;
    o && !ne(o) && (t.class = Tr(o)), ee(u) && (Tn(u) && !Y(u) && (u = de({}, u)), t.style = Rr(u));
  }
  const a = ne(e) ? 1 : Vu(e) ? 128 : Qu(e) ? 64 : ee(e) ? 4 : G(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && a & 4 && Tn(e) && (e = S(e), $("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), vr(e, t, r, n, s, a, i, !0);
}
function aa(e) {
  return e ? Tn(e) || na in e ? de({}, e) : e : null;
}
function wr(e, t, r = !1) {
  const { props: n, ref: s, patchFlag: i, children: a } = e, o = t ? Sr(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: o,
    key: o && sa(o),
    ref: t && t.ref ? r && s ? Y(s) ? s.concat(sr(t)) : [s, sr(t)] : sr(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && Y(a) ? a.map(oa) : a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Yr ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wr(e.ssContent),
    ssFallback: e.ssFallback && wr(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function oa(e) {
  const t = wr(e);
  return Y(e.children) && (t.children = e.children.map(oa)), t;
}
function Cr(e = " ", t = 0) {
  return St(Xu, null, e, t);
}
function Yt(e = "", t = !1) {
  return t ? (fe(), rt(yr, null, e)) : St(yr, null, e);
}
function ts(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ts(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !(na in t) ? t._ctx = B : s === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    G(t) ? (t = { default: t, _ctx: B }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Cr(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Sr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = Tr([t.class, n.class]));
      else if (s === "style")
        t.style = Rr([t.style, n.style]);
      else if (xo(s)) {
        const i = t[s], a = n[s];
        a && i !== a && !(Y(i) && i.includes(a)) && (t[s] = i ? [].concat(i, a) : a);
      } else
        s !== "" && (t[s] = n[s]);
  }
  return t;
}
let Qe = null;
const Qs = (e) => {
  Qe = e, e.scope.on();
}, rl = () => {
  Qe && Qe.scope.off(), Qe = null;
};
function nl(e) {
  return e.vnode.shapeFlag & 4;
}
function sl(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(vu(du(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in mr)
          return mr[r](e);
      }
    }));
}
const il = /(?:^|[-_])(\w)/g, al = (e) => e.replace(il, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function rs(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ua(e, t, r = !1) {
  let n = rs(t);
  if (!n && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (n = s[1]);
  }
  if (!n && e && e.parent) {
    const s = (i) => {
      for (const a in i)
        if (i[a] === t)
          return a;
    };
    n = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return n ? al(n) : r ? "App" : "Anonymous";
}
function la(e) {
  return G(e) && "__vccOpts" in e;
}
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function ol() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, r = { style: "color:#b62e24" }, n = { style: "color:#9d288c" }, s = {
    header(l) {
      return ee(l) ? l.__isVue ? ["div", e, "VueInstance"] : z(l) ? [
        "div",
        {},
        ["span", e, h(l)],
        "<",
        o(l.value),
        ">"
      ] : Je(l) ? [
        "div",
        {},
        ["span", e, rn(l) ? "ShallowReactive" : "Reactive"],
        "<",
        o(l),
        `>${et(l) ? " (readonly)" : ""}`
      ] : et(l) ? [
        "div",
        {},
        ["span", e, rn(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        o(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...i(l.$)
        ];
    }
  };
  function i(l) {
    const c = [];
    l.type.props && l.props && c.push(a("props", S(l.props))), l.setupState !== Q && c.push(a("setup", l.setupState)), l.data !== Q && c.push(a("data", S(l.data)));
    const w = u(l, "computed");
    w && c.push(a("computed", w));
    const T = u(l, "inject");
    return T && c.push(a("injected", T)), c.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), c;
  }
  function a(l, c) {
    return c = de({}, c), Object.keys(c).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(c).map((w) => [
          "div",
          {},
          ["span", n, w + ": "],
          o(c[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function o(l, c = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", r, JSON.stringify(l)] : typeof l == "boolean" ? ["span", n, l] : ee(l) ? ["object", { object: c ? S(l) : l }] : ["span", r, String(l)];
  }
  function u(l, c) {
    const w = l.type;
    if (G(w))
      return;
    const T = {};
    for (const A in l.ctx)
      f(w, A, c) && (T[A] = l.ctx[A]);
    return T;
  }
  function f(l, c, w) {
    const T = l[w];
    if (Y(T) && T.includes(c) || ee(T) && c in T || l.extends && f(l.extends, c, w) || l.mixins && l.mixins.some((A) => f(A, c, w)))
      return !0;
  }
  function h(l) {
    return rn(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const ul = ["ctrl", "shift", "alt", "meta"], ll = {
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
  exact: (e, t) => ul.some((r) => e[`${r}Key`] && !t.includes(r))
}, cl = (e, t) => (r, ...n) => {
  for (let s = 0; s < t.length; s++) {
    const i = ll[t[s]];
    if (i && i(r, t))
      return;
  }
  return e(r, ...n);
};
function fl() {
  ol();
}
process.env.NODE_ENV !== "production" && fl();
function dl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ca = { exports: {} }, ns = { exports: {} }, fa = function(t, r) {
  return function() {
    for (var s = new Array(arguments.length), i = 0; i < s.length; i++)
      s[i] = arguments[i];
    return t.apply(r, s);
  };
}, hl = fa, ss = Object.prototype.toString, is = function(e) {
  return function(t) {
    var r = ss.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function nt(e) {
  return e = e.toLowerCase(), function(r) {
    return is(r) === e;
  };
}
function as(e) {
  return Array.isArray(e);
}
function Or(e) {
  return typeof e > "u";
}
function pl(e) {
  return e !== null && !Or(e) && e.constructor !== null && !Or(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var da = nt("ArrayBuffer");
function ml(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && da(e.buffer), t;
}
function _l(e) {
  return typeof e == "string";
}
function yl(e) {
  return typeof e == "number";
}
function ha(e) {
  return e !== null && typeof e == "object";
}
function ir(e) {
  if (is(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var gl = nt("Date"), vl = nt("File"), wl = nt("Blob"), Sl = nt("FileList");
function os(e) {
  return ss.call(e) === "[object Function]";
}
function Ol(e) {
  return ha(e) && os(e.pipe);
}
function bl(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ss.call(e) === t || os(e.toString) && e.toString() === t);
}
var Dl = nt("URLSearchParams");
function El(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Ml() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function us(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), as(e))
      for (var r = 0, n = e.length; r < n; r++)
        t.call(null, e[r], r, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function An() {
  var e = {};
  function t(s, i) {
    ir(e[i]) && ir(s) ? e[i] = An(e[i], s) : ir(s) ? e[i] = An({}, s) : as(s) ? e[i] = s.slice() : e[i] = s;
  }
  for (var r = 0, n = arguments.length; r < n; r++)
    us(arguments[r], t);
  return e;
}
function Nl(e, t, r) {
  return us(t, function(s, i) {
    r && typeof s == "function" ? e[i] = hl(s, r) : e[i] = s;
  }), e;
}
function xl(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Rl(e, t, r, n) {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Tl(e, t, r) {
  var n, s, i, a = {};
  t = t || {};
  do {
    for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
      i = n[s], a[i] || (t[i] = e[i], a[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function kl(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var n = e.indexOf(t, r);
  return n !== -1 && n === r;
}
function Pl(e) {
  if (!e)
    return null;
  var t = e.length;
  if (Or(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var Yl = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), W = {
  isArray: as,
  isArrayBuffer: da,
  isBuffer: pl,
  isFormData: bl,
  isArrayBufferView: ml,
  isString: _l,
  isNumber: yl,
  isObject: ha,
  isPlainObject: ir,
  isUndefined: Or,
  isDate: gl,
  isFile: vl,
  isBlob: wl,
  isFunction: os,
  isStream: Ol,
  isURLSearchParams: Dl,
  isStandardBrowserEnv: Ml,
  forEach: us,
  merge: An,
  extend: Nl,
  trim: El,
  stripBOM: xl,
  inherits: Rl,
  toFlatObject: Tl,
  kindOf: is,
  kindOfTest: nt,
  endsWith: kl,
  toArray: Pl,
  isTypedArray: Yl,
  isFileList: Sl
}, ot = W;
function Xs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var pa = function(t, r, n) {
  if (!r)
    return t;
  var s;
  if (n)
    s = n(r);
  else if (ot.isURLSearchParams(r))
    s = r.toString();
  else {
    var i = [];
    ot.forEach(r, function(u, f) {
      u === null || typeof u > "u" || (ot.isArray(u) ? f = f + "[]" : u = [u], ot.forEach(u, function(l) {
        ot.isDate(l) ? l = l.toISOString() : ot.isObject(l) && (l = JSON.stringify(l)), i.push(Xs(f) + "=" + Xs(l));
      }));
    }), s = i.join("&");
  }
  if (s) {
    var a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}, Cl = W;
function Fr() {
  this.handlers = [];
}
Fr.prototype.use = function(t, r, n) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
Fr.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Fr.prototype.forEach = function(t) {
  Cl.forEach(this.handlers, function(n) {
    n !== null && t(n);
  });
};
var Fl = Fr, Al = W, Il = function(t, r) {
  Al.forEach(t, function(s, i) {
    i !== r && i.toUpperCase() === r.toUpperCase() && (t[r] = s, delete t[i]);
  });
}, nn, ei;
function Ot() {
  if (ei)
    return nn;
  ei = 1;
  var e = W;
  function t(s, i, a, o, u) {
    Error.call(this), this.message = s, this.name = "AxiosError", i && (this.code = i), a && (this.config = a), o && (this.request = o), u && (this.response = u);
  }
  e.inherits(t, Error, {
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
  var r = t.prototype, n = {};
  return [
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
  ].forEach(function(s) {
    n[s] = { value: s };
  }), Object.defineProperties(t, n), Object.defineProperty(r, "isAxiosError", { value: !0 }), t.from = function(s, i, a, o, u, f) {
    var h = Object.create(r);
    return e.toFlatObject(s, h, function(c) {
      return c !== Error.prototype;
    }), t.call(h, s.message, i, a, o, u), h.name = s.name, f && Object.assign(h, f), h;
  }, nn = t, nn;
}
var ma = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sn, ti;
function _a() {
  if (ti)
    return sn;
  ti = 1;
  var e = W;
  function t(r, n) {
    n = n || new FormData();
    var s = [];
    function i(o) {
      return o === null ? "" : e.isDate(o) ? o.toISOString() : e.isArrayBuffer(o) || e.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
    }
    function a(o, u) {
      if (e.isPlainObject(o) || e.isArray(o)) {
        if (s.indexOf(o) !== -1)
          throw Error("Circular reference detected in " + u);
        s.push(o), e.forEach(o, function(h, l) {
          if (!e.isUndefined(h)) {
            var c = u ? u + "." + l : l, w;
            if (h && !u && typeof h == "object") {
              if (e.endsWith(l, "{}"))
                h = JSON.stringify(h);
              else if (e.endsWith(l, "[]") && (w = e.toArray(h))) {
                w.forEach(function(T) {
                  !e.isUndefined(T) && n.append(c, i(T));
                });
                return;
              }
            }
            a(h, c);
          }
        }), s.pop();
      } else
        n.append(u, i(o));
    }
    return a(r), n;
  }
  return sn = t, sn;
}
var an, ri;
function Vl() {
  if (ri)
    return an;
  ri = 1;
  var e = Ot();
  return an = function(r, n, s) {
    var i = s.config.validateStatus;
    !s.status || !i || i(s.status) ? r(s) : n(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, an;
}
var on, ni;
function $l() {
  if (ni)
    return on;
  ni = 1;
  var e = W;
  return on = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(n, s, i, a, o, u) {
        var f = [];
        f.push(n + "=" + encodeURIComponent(s)), e.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()), e.isString(a) && f.push("path=" + a), e.isString(o) && f.push("domain=" + o), u === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(n) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
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
  }(), on;
}
var Wl = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, Ll = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, Ul = Wl, jl = Ll, ya = function(t, r) {
  return t && !Ul(r) ? jl(t, r) : r;
}, un, si;
function ql() {
  if (si)
    return un;
  si = 1;
  var e = W, t = [
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
  return un = function(n) {
    var s = {}, i, a, o;
    return n && e.forEach(n.split(`
`), function(f) {
      if (o = f.indexOf(":"), i = e.trim(f.substr(0, o)).toLowerCase(), a = e.trim(f.substr(o + 1)), i) {
        if (s[i] && t.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? s[i] = (s[i] ? s[i] : []).concat([a]) : s[i] = s[i] ? s[i] + ", " + a : a;
      }
    }), s;
  }, un;
}
var ln, ii;
function Hl() {
  if (ii)
    return ln;
  ii = 1;
  var e = W;
  return ln = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), s;
    function i(a) {
      var o = a;
      return r && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return s = i(window.location.href), function(o) {
      var u = e.isString(o) ? i(o) : o;
      return u.protocol === s.protocol && u.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), ln;
}
var cn, ai;
function Ar() {
  if (ai)
    return cn;
  ai = 1;
  var e = Ot(), t = W;
  function r(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), cn = r, cn;
}
var fn, oi;
function zl() {
  return oi || (oi = 1, fn = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), fn;
}
var dn, ui;
function li() {
  if (ui)
    return dn;
  ui = 1;
  var e = W, t = Vl(), r = $l(), n = pa, s = ya, i = ql(), a = Hl(), o = ma, u = Ot(), f = Ar(), h = zl();
  return dn = function(c) {
    return new Promise(function(T, A) {
      var _e = c.data, I = c.headers, M = c.responseType, Pe;
      function Gt() {
        c.cancelToken && c.cancelToken.unsubscribe(Pe), c.signal && c.signal.removeEventListener("abort", Pe);
      }
      e.isFormData(_e) && e.isStandardBrowserEnv() && delete I["Content-Type"];
      var y = new XMLHttpRequest();
      if (c.auth) {
        var _o = c.auth.username || "", yo = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "";
        I.Authorization = "Basic " + btoa(_o + ":" + yo);
      }
      var Qr = s(c.baseURL, c.url);
      y.open(c.method.toUpperCase(), n(Qr, c.params, c.paramsSerializer), !0), y.timeout = c.timeout;
      function Ys() {
        if (!!y) {
          var oe = "getAllResponseHeaders" in y ? i(y.getAllResponseHeaders()) : null, at = !M || M === "text" || M === "json" ? y.responseText : y.response, Ue = {
            data: at,
            status: y.status,
            statusText: y.statusText,
            headers: oe,
            config: c,
            request: y
          };
          t(function(en) {
            T(en), Gt();
          }, function(en) {
            A(en), Gt();
          }, Ue), y = null;
        }
      }
      if ("onloadend" in y ? y.onloadend = Ys : y.onreadystatechange = function() {
        !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(Ys);
      }, y.onabort = function() {
        !y || (A(new u("Request aborted", u.ECONNABORTED, c, y)), y = null);
      }, y.onerror = function() {
        A(new u("Network Error", u.ERR_NETWORK, c, y, y)), y = null;
      }, y.ontimeout = function() {
        var at = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded", Ue = c.transitional || o;
        c.timeoutErrorMessage && (at = c.timeoutErrorMessage), A(new u(
          at,
          Ue.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          c,
          y
        )), y = null;
      }, e.isStandardBrowserEnv()) {
        var Cs = (c.withCredentials || a(Qr)) && c.xsrfCookieName ? r.read(c.xsrfCookieName) : void 0;
        Cs && (I[c.xsrfHeaderName] = Cs);
      }
      "setRequestHeader" in y && e.forEach(I, function(at, Ue) {
        typeof _e > "u" && Ue.toLowerCase() === "content-type" ? delete I[Ue] : y.setRequestHeader(Ue, at);
      }), e.isUndefined(c.withCredentials) || (y.withCredentials = !!c.withCredentials), M && M !== "json" && (y.responseType = c.responseType), typeof c.onDownloadProgress == "function" && y.addEventListener("progress", c.onDownloadProgress), typeof c.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", c.onUploadProgress), (c.cancelToken || c.signal) && (Pe = function(oe) {
        !y || (A(!oe || oe && oe.type ? new f() : oe), y.abort(), y = null);
      }, c.cancelToken && c.cancelToken.subscribe(Pe), c.signal && (c.signal.aborted ? Pe() : c.signal.addEventListener("abort", Pe))), _e || (_e = null);
      var Xr = h(Qr);
      if (Xr && ["http", "https", "file"].indexOf(Xr) === -1) {
        A(new u("Unsupported protocol " + Xr + ":", u.ERR_BAD_REQUEST, c));
        return;
      }
      y.send(_e);
    });
  }, dn;
}
var hn, ci;
function Bl() {
  return ci || (ci = 1, hn = null), hn;
}
var V = W, fi = Il, di = Ot(), Gl = ma, Jl = _a(), Zl = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function hi(e, t) {
  !V.isUndefined(e) && V.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function Kl() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = li()), e;
}
function Ql(e, t, r) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
var Ir = {
  transitional: Gl,
  adapter: Kl(),
  transformRequest: [function(t, r) {
    if (fi(r, "Accept"), fi(r, "Content-Type"), V.isFormData(t) || V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return hi(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var n = V.isObject(t), s = r && r["Content-Type"], i;
    if ((i = V.isFileList(t)) || n && s === "multipart/form-data") {
      var a = this.env && this.env.FormData;
      return Jl(i ? { "files[]": t } : t, a && new a());
    } else if (n || s === "application/json")
      return hi(r, "application/json"), Ql(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || Ir.transitional, n = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, i = !n && this.responseType === "json";
    if (i || s && V.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? di.from(a, di.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Bl()
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
V.forEach(["delete", "get", "head"], function(t) {
  Ir.headers[t] = {};
});
V.forEach(["post", "put", "patch"], function(t) {
  Ir.headers[t] = V.merge(Zl);
});
var ls = Ir, Xl = W, ec = ls, tc = function(t, r, n) {
  var s = this || ec;
  return Xl.forEach(n, function(a) {
    t = a.call(s, t, r);
  }), t;
}, pn, pi;
function ga() {
  return pi || (pi = 1, pn = function(t) {
    return !!(t && t.__CANCEL__);
  }), pn;
}
var mi = W, mn = tc, rc = ga(), nc = ls, sc = Ar();
function _n(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new sc();
}
var ic = function(t) {
  _n(t), t.headers = t.headers || {}, t.data = mn.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = mi.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), mi.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete t.headers[s];
    }
  );
  var r = t.adapter || nc.adapter;
  return r(t).then(function(s) {
    return _n(t), s.data = mn.call(
      t,
      s.data,
      s.headers,
      t.transformResponse
    ), s;
  }, function(s) {
    return rc(s) || (_n(t), s && s.response && (s.response.data = mn.call(
      t,
      s.response.data,
      s.response.headers,
      t.transformResponse
    ))), Promise.reject(s);
  });
}, K = W, va = function(t, r) {
  r = r || {};
  var n = {};
  function s(h, l) {
    return K.isPlainObject(h) && K.isPlainObject(l) ? K.merge(h, l) : K.isPlainObject(l) ? K.merge({}, l) : K.isArray(l) ? l.slice() : l;
  }
  function i(h) {
    if (K.isUndefined(r[h])) {
      if (!K.isUndefined(t[h]))
        return s(void 0, t[h]);
    } else
      return s(t[h], r[h]);
  }
  function a(h) {
    if (!K.isUndefined(r[h]))
      return s(void 0, r[h]);
  }
  function o(h) {
    if (K.isUndefined(r[h])) {
      if (!K.isUndefined(t[h]))
        return s(void 0, t[h]);
    } else
      return s(void 0, r[h]);
  }
  function u(h) {
    if (h in r)
      return s(t[h], r[h]);
    if (h in t)
      return s(void 0, t[h]);
  }
  var f = {
    url: a,
    method: a,
    data: a,
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
  return K.forEach(Object.keys(t).concat(Object.keys(r)), function(l) {
    var c = f[l] || i, w = c(l);
    K.isUndefined(w) && c !== u || (n[l] = w);
  }), n;
}, yn, _i;
function wa() {
  return _i || (_i = 1, yn = {
    version: "0.27.2"
  }), yn;
}
var ac = wa().version, Ce = Ot(), cs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  cs[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var yi = {};
cs.transitional = function(t, r, n) {
  function s(i, a) {
    return "[Axios v" + ac + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return function(i, a, o) {
    if (t === !1)
      throw new Ce(
        s(a, " has been removed" + (r ? " in " + r : "")),
        Ce.ERR_DEPRECATED
      );
    return r && !yi[a] && (yi[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, o) : !0;
  };
};
function oc(e, t, r) {
  if (typeof e != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), s = n.length; s-- > 0; ) {
    var i = n[s], a = t[i];
    if (a) {
      var o = e[i], u = o === void 0 || a(o, i, e);
      if (u !== !0)
        throw new Ce("option " + i + " must be " + u, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ce("Unknown option " + i, Ce.ERR_BAD_OPTION);
  }
}
var uc = {
  assertOptions: oc,
  validators: cs
}, Sa = W, lc = pa, gi = Fl, vi = ic, Vr = va, cc = ya, Oa = uc, ut = Oa.validators;
function wt(e) {
  this.defaults = e, this.interceptors = {
    request: new gi(),
    response: new gi()
  };
}
wt.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Vr(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var n = r.transitional;
  n !== void 0 && Oa.assertOptions(n, {
    silentJSONParsing: ut.transitional(ut.boolean),
    forcedJSONParsing: ut.transitional(ut.boolean),
    clarifyTimeoutError: ut.transitional(ut.boolean)
  }, !1);
  var s = [], i = !0;
  this.interceptors.request.forEach(function(w) {
    typeof w.runWhen == "function" && w.runWhen(r) === !1 || (i = i && w.synchronous, s.unshift(w.fulfilled, w.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function(w) {
    a.push(w.fulfilled, w.rejected);
  });
  var o;
  if (!i) {
    var u = [vi, void 0];
    for (Array.prototype.unshift.apply(u, s), u = u.concat(a), o = Promise.resolve(r); u.length; )
      o = o.then(u.shift(), u.shift());
    return o;
  }
  for (var f = r; s.length; ) {
    var h = s.shift(), l = s.shift();
    try {
      f = h(f);
    } catch (c) {
      l(c);
      break;
    }
  }
  try {
    o = vi(f);
  } catch (c) {
    return Promise.reject(c);
  }
  for (; a.length; )
    o = o.then(a.shift(), a.shift());
  return o;
};
wt.prototype.getUri = function(t) {
  t = Vr(this.defaults, t);
  var r = cc(t.baseURL, t.url);
  return lc(r, t.params, t.paramsSerializer);
};
Sa.forEach(["delete", "get", "head", "options"], function(t) {
  wt.prototype[t] = function(r, n) {
    return this.request(Vr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
Sa.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, o) {
      return this.request(Vr(o || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  wt.prototype[t] = r(), wt.prototype[t + "Form"] = r(!0);
});
var fc = wt, gn, wi;
function dc() {
  if (wi)
    return gn;
  wi = 1;
  var e = Ar();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    var s = this;
    this.promise.then(function(i) {
      if (!!s._listeners) {
        var a, o = s._listeners.length;
        for (a = 0; a < o; a++)
          s._listeners[a](i);
        s._listeners = null;
      }
    }), this.promise.then = function(i) {
      var a, o = new Promise(function(u) {
        s.subscribe(u), a = u;
      }).then(i);
      return o.cancel = function() {
        s.unsubscribe(a);
      }, o;
    }, r(function(a) {
      s.reason || (s.reason = new e(a), n(s.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, t.prototype.unsubscribe = function(n) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(n);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, t.source = function() {
    var n, s = new t(function(a) {
      n = a;
    });
    return {
      token: s,
      cancel: n
    };
  }, gn = t, gn;
}
var vn, Si;
function hc() {
  return Si || (Si = 1, vn = function(t) {
    return function(n) {
      return t.apply(null, n);
    };
  }), vn;
}
var wn, Oi;
function pc() {
  if (Oi)
    return wn;
  Oi = 1;
  var e = W;
  return wn = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, wn;
}
var bi = W, mc = fa, ar = fc, _c = va, yc = ls;
function ba(e) {
  var t = new ar(e), r = mc(ar.prototype.request, t);
  return bi.extend(r, ar.prototype, t), bi.extend(r, t), r.create = function(s) {
    return ba(_c(e, s));
  }, r;
}
var Z = ba(yc);
Z.Axios = ar;
Z.CanceledError = Ar();
Z.CancelToken = dc();
Z.isCancel = ga();
Z.VERSION = wa().version;
Z.toFormData = _a();
Z.AxiosError = Ot();
Z.Cancel = Z.CanceledError;
Z.all = function(t) {
  return Promise.all(t);
};
Z.spread = hc();
Z.isAxiosError = pc();
ns.exports = Z;
ns.exports.default = Z;
(function(e) {
  e.exports = ns.exports;
})(ca);
const Ne = /* @__PURE__ */ dl(ca.exports);
class $r {
  constructor() {
    k(this, "loading", ht(!1));
    k(this, "result", ht([]));
  }
  static create() {
    return new $r();
  }
  async search(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: n } = await Ne.post(`${t}/search`, r).catch((s) => {
      throw this.loading.value = !1, s;
    });
    this.result.value = n.result, this.loading.value = !1;
  }
  async restore(t, r) {
    this.loading.value = !0, this.result.value = [];
    const { data: n } = await Ne.post(`${t}/restore`, r).catch((s) => {
      throw this.loading.value = !1, s;
    });
    return this.loading.value = !1, n;
  }
}
const Mt = ge({
  default: []
});
function fs() {
  return {
    createBag(e) {
      Mt[e] = [];
    },
    set(e, t = "default") {
      throw e.response && e.response.data && e.response.data.errors && (Mt[t] = Object.keys(e.response.data.errors).map((n) => ({
        key: n,
        message: e.response.data.errors[n][0]
      }))), e;
    },
    get(e, t = "default") {
      const r = Mt[t];
      if (!r)
        return {
          message: "",
          variant: ""
        };
      const n = r.find((s) => s.key === e);
      return n ? {
        message: n.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(e, t = "default") {
      if (e) {
        const r = Mt[t];
        if (!r) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const n = r.findIndex((s) => s.key === e);
        r.splice(n, 1);
        return;
      }
      Mt[t] = [];
    }
  };
}
class ds {
  constructor(t) {
    k(this, "loadPath", "");
    k(this, "submitPath", "");
    k(this, "bag", "");
    k(this, "model", ge({}));
    k(this, "form", ge({}));
    k(this, "original", ge({}));
    k(this, "isLoading", ht(!1));
    k(this, "isLoaded", ht(!0));
    k(this, "isSubmitting", ht(!1));
    k(this, "isSubmitted", ht(!1));
    k(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form);
  }
  static create(t) {
    return new ds(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = fs(), this.errors.createBag(this.bag);
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
  async submit(t, r, n = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const s = r ? r(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: i } = await Ne[n.method || "post"](
      t || this.submitPath,
      s,
      n
    ).catch((a) => {
      throw this.isSubmitting.value = !1, this.errors.set(a, this.bag), a;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, i;
  }
  async advancedSubmit(t) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: r } = await Promise.resolve(t(Ne, this.form)).catch(
      (n) => {
        throw this.isSubmitting.value = !1, this.errors.set(n, this.bag), n;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, r;
  }
  async load(t, r) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: n } = await Ne.get(t || this.loadPath, {
      params: r
    }).catch((s) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, s;
    });
    return this.setAttributes(n.form), n.model && Object.assign(this.model, n.model), this.isLoading.value = !1, this.isLoaded.value = !0, n;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
class gc {
  constructor() {
    k(this, "structure", {});
    k(this, "query", ge({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    k(this, "params", ge({
      page: 1
    }));
    k(this, "router", null);
  }
  static create(t, r = {}, n = {}, s) {
    n = Object.assign(
      { base: "/api/admin", route: `${t}.index` },
      n
    );
    const i = n.base, a = {
      route: n.route,
      index: n.index || `${i}/${t}/index`,
      destroy: `${i}/${t}/destroy`
    }, o = new this();
    return o.options = n, o.structure = r, o.params = Object.assign(o.params, r), o.router = s, o.urls = a, o;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: r } = await Ne.get(t || this.urls.index, {
      params: this.params
    }).catch((n) => {
      throw this.query.isLoading = !1, n;
    });
    return await this.router.push({ name: this.urls.route, query: this.params }), this.query.isLoading = !1, this.query.isLoaded = !0, r;
  }
  async load(t) {
    const r = await this.fetch(t);
    return Object.assign(this.query, r.query, {
      items: r.query.items.map((n) => ({
        ...n,
        isProcessing: !1
      }))
    }), r;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async action(t, { row: r, index: n, remove: s, method: i }, a = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...a
    };
    if (i === "delete") {
      const { data: u } = await Ne.delete(t, {
        data: o
      }).catch((f) => {
        throw r.isProcessing = !1, f;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await Ne.post(t, o).catch((f) => {
        throw r.isProcessing = !1, f;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    }
    if (s) {
      const u = await this.fetch();
      if (this.query.items.splice(n, 1), !u.query.items.length) {
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
class vc {
  constructor() {
    k(this, "api", null);
    k(this, "structure", null);
    k(this, "query", ge({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    k(this, "params", ge({
      page: 1
    }));
  }
  static create(t, r) {
    const n = new this();
    return n.structure = () => Object.assign({}, t), Object.assign(n.params, t), n.api = Ne.create(r.axios || {}), n;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: r } = await this.api.get(t, {
      params: this.params
    }).catch((n) => {
      throw this.query.isLoading = !1, n;
    });
    return this.query.isLoading = !1, this.query.isLoaded = !0, r;
  }
  async load(t) {
    const r = await this.fetch(t, {
      params: this.params
    });
    return Object.assign(this.query, r.query, {
      items: r.query.items.map((n) => ({
        ...n,
        isProcessing: !1
      }))
    }), r;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async action(t, { item: { row: r, index: n }, remove: s, method: i }, a = {}) {
    r.isProcessing = !0;
    const o = {
      id: r.id,
      ...a
    };
    if (i === "delete") {
      const { data: u } = await this.api.delete(t, {
        data: o
      }).catch((f) => {
        throw r.isProcessing = !1, f;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    } else {
      const { data: u } = await this.api.post(t, o).catch((f) => {
        throw r.isProcessing = !1, f;
      });
      r.isProcessing = !1, u.row && Object.assign(r, u.row);
    }
    if (s) {
      const u = await this.fetch();
      if (this.query.items.splice(n, 1), !u.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < u.query.items.length && this.query.items.push(u.query.items[u.query.items.length - 1]);
    }
  }
  destroy(t, r, n) {
    return this.action(t, { ...r, remove: !0 }, n);
  }
  openFilter() {
    this.query.isFilterActive = !0;
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(t);
  }
}
const st = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, wc = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, Sc = /* @__PURE__ */ Cr("Submit"), Oc = /* @__PURE__ */ Cr("Processing..."), bc = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function Dc(e, t, r, n, s, i) {
  const a = tt("o-button");
  return fe(), rt(a, { disabled: r.loading }, {
    default: es(() => [
      r.loading ? Yt("", !0) : pr(e.$slots, "default", { key: 0 }, () => [
        Sc
      ]),
      r.loading ? pr(e.$slots, "loading", { key: 1 }, () => [
        Oc
      ]) : Yt("", !0),
      r.loading ? (fe(), gr("i", bc)) : Yt("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const Ec = /* @__PURE__ */ st(wc, [["render", Dc]]), Mc = {
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
}, Nc = /* @__PURE__ */ vr("ul", null, [
  /* @__PURE__ */ vr("li")
], -1);
function xc(e, t, r, n, s, i) {
  return pr(e.$slots, "default", Eo(aa({ add: i.add, remove: i.remove, items: s.items })), () => [
    Nc
  ]);
}
const Rc = /* @__PURE__ */ st(Mc, [["render", xc]]);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Da;
function p() {
  return Da.apply(null, arguments);
}
function Tc(e) {
  Da = e;
}
function he(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Xe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function b(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function hs(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (b(e, t))
      return !1;
  return !0;
}
function J(e) {
  return e === void 0;
}
function Re(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function qt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ea(e, t) {
  var r = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    r.push(t(e[n], n));
  return r;
}
function Ae(e, t) {
  for (var r in t)
    b(t, r) && (e[r] = t[r]);
  return b(t, "toString") && (e.toString = t.toString), b(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function we(e, t, r, n) {
  return Ja(e, t, r, n, !0).utc();
}
function kc() {
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
function g(e) {
  return e._pf == null && (e._pf = kc()), e._pf;
}
var In;
Array.prototype.some ? In = Array.prototype.some : In = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function ps(e) {
  if (e._isValid == null) {
    var t = g(e), r = In.call(t.parsedDateParts, function(s) {
      return s != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Wr(e) {
  var t = we(NaN);
  return e != null ? Ae(g(t), e) : g(t).userInvalidated = !0, t;
}
var Di = p.momentProperties = [], Sn = !1;
function ms(e, t) {
  var r, n, s, i = Di.length;
  if (J(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), J(t._i) || (e._i = t._i), J(t._f) || (e._f = t._f), J(t._l) || (e._l = t._l), J(t._strict) || (e._strict = t._strict), J(t._tzm) || (e._tzm = t._tzm), J(t._isUTC) || (e._isUTC = t._isUTC), J(t._offset) || (e._offset = t._offset), J(t._pf) || (e._pf = g(t)), J(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      n = Di[r], s = t[n], J(s) || (e[n] = s);
  return e;
}
function Ht(e) {
  ms(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Sn === !1 && (Sn = !0, p.updateOffset(this), Sn = !1);
}
function pe(e) {
  return e instanceof Ht || e != null && e._isAMomentObject != null;
}
function Ma(e) {
  p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ie(e, t) {
  var r = !0;
  return Ae(function() {
    if (p.deprecationHandler != null && p.deprecationHandler(null, e), r) {
      var n = [], s, i, a, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (s = "", typeof arguments[i] == "object") {
          s += `
[` + i + "] ";
          for (a in arguments[0])
            b(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[i];
        n.push(s);
      }
      Ma(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ei = {};
function Na(e, t) {
  p.deprecationHandler != null && p.deprecationHandler(e, t), Ei[e] || (Ma(t), Ei[e] = !0);
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;
function Se(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Pc(e) {
  var t, r;
  for (r in e)
    b(e, r) && (t = e[r], Se(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Vn(e, t) {
  var r = Ae({}, e), n;
  for (n in t)
    b(t, n) && (Xe(e[n]) && Xe(t[n]) ? (r[n] = {}, Ae(r[n], e[n]), Ae(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    b(e, n) && !b(t, n) && Xe(e[n]) && (r[n] = Ae({}, r[n]));
  return r;
}
function _s(e) {
  e != null && this.set(e);
}
var $n;
Object.keys ? $n = Object.keys : $n = function(e) {
  var t, r = [];
  for (t in e)
    b(e, t) && r.push(t);
  return r;
};
var Yc = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Cc(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return Se(n) ? n.call(t, r) : n;
}
function ve(e, t, r) {
  var n = "" + Math.abs(e), s = t - n.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var ys = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, tr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, On = {}, yt = {};
function _(e, t, r, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (yt[e] = s), t && (yt[t[0]] = function() {
    return ve(s.apply(this, arguments), t[1], t[2]);
  }), r && (yt[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Fc(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ac(e) {
  var t = e.match(ys), r, n;
  for (r = 0, n = t.length; r < n; r++)
    yt[t[r]] ? t[r] = yt[t[r]] : t[r] = Fc(t[r]);
  return function(s) {
    var i = "", a;
    for (a = 0; a < n; a++)
      i += Se(t[a]) ? t[a].call(s, e) : t[a];
    return i;
  };
}
function or(e, t) {
  return e.isValid() ? (t = xa(t, e.localeData()), On[t] = On[t] || Ac(t), On[t](e)) : e.localeData().invalidDate();
}
function xa(e, t) {
  var r = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (tr.lastIndex = 0; r >= 0 && tr.test(e); )
    e = e.replace(
      tr,
      n
    ), tr.lastIndex = 0, r -= 1;
  return e;
}
var Ic = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Vc(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(ys).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var $c = "Invalid date";
function Wc() {
  return this._invalidDate;
}
var Lc = "%d", Uc = /\d{1,2}/;
function jc(e) {
  return this._ordinal.replace("%d", e);
}
var qc = {
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
function Hc(e, t, r, n) {
  var s = this._relativeTime[r];
  return Se(s) ? s(e, t, r, n) : s.replace(/%d/i, e);
}
function zc(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return Se(r) ? r(t) : r.replace(/%s/i, t);
}
var Ct = {};
function U(e, t) {
  var r = e.toLowerCase();
  Ct[r] = Ct[r + "s"] = Ct[t] = e;
}
function ae(e) {
  return typeof e == "string" ? Ct[e] || Ct[e.toLowerCase()] : void 0;
}
function gs(e) {
  var t = {}, r, n;
  for (n in e)
    b(e, n) && (r = ae(n), r && (t[r] = e[n]));
  return t;
}
var Ra = {};
function j(e, t) {
  Ra[e] = t;
}
function Bc(e) {
  var t = [], r;
  for (r in e)
    b(e, r) && t.push({ unit: r, priority: Ra[r] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
function Lr(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function re(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function v(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = re(t)), r;
}
function bt(e, t) {
  return function(r) {
    return r != null ? (Ta(this, e, r), p.updateOffset(this, t), this) : br(this, e);
  };
}
function br(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ta(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && Lr(e.year()) && e.month() === 1 && e.date() === 29 ? (r = v(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Br(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function Gc(e) {
  return e = ae(e), Se(this[e]) ? this[e]() : this;
}
function Jc(e, t) {
  if (typeof e == "object") {
    e = gs(e);
    var r = Bc(e), n, s = r.length;
    for (n = 0; n < s; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = ae(e), Se(this[e]))
    return this[e](t);
  return this;
}
var ka = /\d/, te = /\d\d/, Pa = /\d{3}/, vs = /\d{4}/, Ur = /[+-]?\d{6}/, x = /\d\d?/, Ya = /\d\d\d\d?/, Ca = /\d\d\d\d\d\d?/, jr = /\d{1,3}/, ws = /\d{1,4}/, qr = /[+-]?\d{1,6}/, Dt = /\d+/, Hr = /[+-]?\d+/, Zc = /Z|[+-]\d\d:?\d\d/gi, zr = /Z|[+-]\d\d(?::?\d\d)?/gi, Kc = /[+-]?\d+(\.\d{1,3})?/, zt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Dr;
Dr = {};
function m(e, t, r) {
  Dr[e] = Se(t) ? t : function(n, s) {
    return n && r ? r : t;
  };
}
function Qc(e, t) {
  return b(Dr, e) ? Dr[e](t._strict, t._locale) : new RegExp(Xc(e));
}
function Xc(e) {
  return X(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, s, i) {
        return r || n || s || i;
      }
    )
  );
}
function X(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Wn = {};
function E(e, t) {
  var r, n = t, s;
  for (typeof e == "string" && (e = [e]), Re(t) && (n = function(i, a) {
    a[t] = v(i);
  }), s = e.length, r = 0; r < s; r++)
    Wn[e[r]] = n;
}
function Bt(e, t) {
  E(e, function(r, n, s, i) {
    s._w = s._w || {}, t(r, s._w, s, i);
  });
}
function ef(e, t, r) {
  t != null && b(Wn, e) && Wn[e](t, r._a, r, e);
}
var L = 0, Ee = 1, ye = 2, F = 3, ce = 4, Me = 5, Be = 6, tf = 7, rf = 8;
function nf(e, t) {
  return (e % t + t) % t;
}
var C;
Array.prototype.indexOf ? C = Array.prototype.indexOf : C = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Br(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = nf(t, 12);
  return e += (t - r) / 12, r === 1 ? Lr(e) ? 29 : 28 : 31 - r % 7 % 2;
}
_("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
_("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
_("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
U("month", "M");
j("month", 8);
m("M", x);
m("MM", x, te);
m("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
m("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
E(["M", "MM"], function(e, t) {
  t[Ee] = v(e) - 1;
});
E(["MMM", "MMMM"], function(e, t, r, n) {
  var s = r._locale.monthsParse(e, n, r._strict);
  s != null ? t[Ee] = s : g(r).invalidMonth = e;
});
var sf = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Fa = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Aa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, af = zt, of = zt;
function uf(e, t) {
  return e ? he(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Aa).test(t) ? "format" : "standalone"][e.month()] : he(this._months) ? this._months : this._months.standalone;
}
function lf(e, t) {
  return e ? he(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Aa.test(t) ? "format" : "standalone"][e.month()] : he(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function cf(e, t, r) {
  var n, s, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      i = we([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = C.call(this._shortMonthsParse, a), s !== -1 ? s : null) : (s = C.call(this._longMonthsParse, a), s !== -1 ? s : null) : t === "MMM" ? (s = C.call(this._shortMonthsParse, a), s !== -1 ? s : (s = C.call(this._longMonthsParse, a), s !== -1 ? s : null)) : (s = C.call(this._longMonthsParse, a), s !== -1 ? s : (s = C.call(this._shortMonthsParse, a), s !== -1 ? s : null));
}
function ff(e, t, r) {
  var n, s, i;
  if (this._monthsParseExact)
    return cf.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = we([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function Ia(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = v(t);
    else if (t = e.localeData().monthsParse(t), !Re(t))
      return e;
  }
  return r = Math.min(e.date(), Br(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Va(e) {
  return e != null ? (Ia(this, e), p.updateOffset(this, !0), this) : br(this, "Month");
}
function df() {
  return Br(this.year(), this.month());
}
function hf(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || $a.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = af), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function pf(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || $a.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = of), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function $a() {
  function e(a, o) {
    return o.length - a.length;
  }
  var t = [], r = [], n = [], s, i;
  for (s = 0; s < 12; s++)
    i = we([2e3, s]), t.push(this.monthsShort(i, "")), r.push(this.months(i, "")), n.push(this.months(i, "")), n.push(this.monthsShort(i, ""));
  for (t.sort(e), r.sort(e), n.sort(e), s = 0; s < 12; s++)
    t[s] = X(t[s]), r[s] = X(r[s]);
  for (s = 0; s < 24; s++)
    n[s] = X(n[s]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
_("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ve(e, 4) : "+" + e;
});
_(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
_(0, ["YYYY", 4], 0, "year");
_(0, ["YYYYY", 5], 0, "year");
_(0, ["YYYYYY", 6, !0], 0, "year");
U("year", "y");
j("year", 1);
m("Y", Hr);
m("YY", x, te);
m("YYYY", ws, vs);
m("YYYYY", qr, Ur);
m("YYYYYY", qr, Ur);
E(["YYYYY", "YYYYYY"], L);
E("YYYY", function(e, t) {
  t[L] = e.length === 2 ? p.parseTwoDigitYear(e) : v(e);
});
E("YY", function(e, t) {
  t[L] = p.parseTwoDigitYear(e);
});
E("Y", function(e, t) {
  t[L] = parseInt(e, 10);
});
function Ft(e) {
  return Lr(e) ? 366 : 365;
}
p.parseTwoDigitYear = function(e) {
  return v(e) + (v(e) > 68 ? 1900 : 2e3);
};
var Wa = bt("FullYear", !0);
function mf() {
  return Lr(this.year());
}
function _f(e, t, r, n, s, i, a) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, s, i, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, s, i, a), o;
}
function Lt(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Er(e, t, r) {
  var n = 7 + t - r, s = (7 + Lt(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function La(e, t, r, n, s) {
  var i = (7 + r - n) % 7, a = Er(e, n, s), o = 1 + 7 * (t - 1) + i + a, u, f;
  return o <= 0 ? (u = e - 1, f = Ft(u) + o) : o > Ft(e) ? (u = e + 1, f = o - Ft(e)) : (u = e, f = o), {
    year: u,
    dayOfYear: f
  };
}
function Ut(e, t, r) {
  var n = Er(e.year(), t, r), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, i, a;
  return s < 1 ? (a = e.year() - 1, i = s + xe(a, t, r)) : s > xe(e.year(), t, r) ? (i = s - xe(e.year(), t, r), a = e.year() + 1) : (a = e.year(), i = s), {
    week: i,
    year: a
  };
}
function xe(e, t, r) {
  var n = Er(e, t, r), s = Er(e + 1, t, r);
  return (Ft(e) - n + s) / 7;
}
_("w", ["ww", 2], "wo", "week");
_("W", ["WW", 2], "Wo", "isoWeek");
U("week", "w");
U("isoWeek", "W");
j("week", 5);
j("isoWeek", 5);
m("w", x);
m("ww", x, te);
m("W", x);
m("WW", x, te);
Bt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = v(e);
  }
);
function yf(e) {
  return Ut(e, this._week.dow, this._week.doy).week;
}
var gf = {
  dow: 0,
  doy: 6
};
function vf() {
  return this._week.dow;
}
function wf() {
  return this._week.doy;
}
function Sf(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Of(e) {
  var t = Ut(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
_("d", 0, "do", "day");
_("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
_("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
_("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
_("e", 0, 0, "weekday");
_("E", 0, 0, "isoWeekday");
U("day", "d");
U("weekday", "e");
U("isoWeekday", "E");
j("day", 11);
j("weekday", 11);
j("isoWeekday", 11);
m("d", x);
m("e", x);
m("E", x);
m("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
m("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
m("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Bt(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var s = r._locale.weekdaysParse(e, n, r._strict);
  s != null ? t.d = s : g(r).invalidWeekday = e;
});
Bt(["d", "e", "E"], function(e, t, r, n) {
  t[n] = v(e);
});
function bf(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Df(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ss(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ef = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ua = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Mf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Nf = zt, xf = zt, Rf = zt;
function Tf(e, t) {
  var r = he(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ss(r, this._week.dow) : e ? r[e.day()] : r;
}
function kf(e) {
  return e === !0 ? Ss(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Pf(e) {
  return e === !0 ? Ss(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Yf(e, t, r) {
  var n, s, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      i = we([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = C.call(this._weekdaysParse, a), s !== -1 ? s : null) : t === "ddd" ? (s = C.call(this._shortWeekdaysParse, a), s !== -1 ? s : null) : (s = C.call(this._minWeekdaysParse, a), s !== -1 ? s : null) : t === "dddd" ? (s = C.call(this._weekdaysParse, a), s !== -1 || (s = C.call(this._shortWeekdaysParse, a), s !== -1) ? s : (s = C.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : t === "ddd" ? (s = C.call(this._shortWeekdaysParse, a), s !== -1 || (s = C.call(this._weekdaysParse, a), s !== -1) ? s : (s = C.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : (s = C.call(this._minWeekdaysParse, a), s !== -1 || (s = C.call(this._weekdaysParse, a), s !== -1) ? s : (s = C.call(this._shortWeekdaysParse, a), s !== -1 ? s : null));
}
function Cf(e, t, r) {
  var n, s, i;
  if (this._weekdaysParseExact)
    return Yf.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = we([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Ff(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = bf(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Af(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function If(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Df(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Vf(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = Nf), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function $f(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xf), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Wf(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rf), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Os() {
  function e(h, l) {
    return l.length - h.length;
  }
  var t = [], r = [], n = [], s = [], i, a, o, u, f;
  for (i = 0; i < 7; i++)
    a = we([2e3, 1]).day(i), o = X(this.weekdaysMin(a, "")), u = X(this.weekdaysShort(a, "")), f = X(this.weekdays(a, "")), t.push(o), r.push(u), n.push(f), s.push(o), s.push(u), s.push(f);
  t.sort(e), r.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function bs() {
  return this.hours() % 12 || 12;
}
function Lf() {
  return this.hours() || 24;
}
_("H", ["HH", 2], 0, "hour");
_("h", ["hh", 2], 0, bs);
_("k", ["kk", 2], 0, Lf);
_("hmm", 0, 0, function() {
  return "" + bs.apply(this) + ve(this.minutes(), 2);
});
_("hmmss", 0, 0, function() {
  return "" + bs.apply(this) + ve(this.minutes(), 2) + ve(this.seconds(), 2);
});
_("Hmm", 0, 0, function() {
  return "" + this.hours() + ve(this.minutes(), 2);
});
_("Hmmss", 0, 0, function() {
  return "" + this.hours() + ve(this.minutes(), 2) + ve(this.seconds(), 2);
});
function ja(e, t) {
  _(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ja("a", !0);
ja("A", !1);
U("hour", "h");
j("hour", 13);
function qa(e, t) {
  return t._meridiemParse;
}
m("a", qa);
m("A", qa);
m("H", x);
m("h", x);
m("k", x);
m("HH", x, te);
m("hh", x, te);
m("kk", x, te);
m("hmm", Ya);
m("hmmss", Ca);
m("Hmm", Ya);
m("Hmmss", Ca);
E(["H", "HH"], F);
E(["k", "kk"], function(e, t, r) {
  var n = v(e);
  t[F] = n === 24 ? 0 : n;
});
E(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
E(["h", "hh"], function(e, t, r) {
  t[F] = v(e), g(r).bigHour = !0;
});
E("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[F] = v(e.substr(0, n)), t[ce] = v(e.substr(n)), g(r).bigHour = !0;
});
E("hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[F] = v(e.substr(0, n)), t[ce] = v(e.substr(n, 2)), t[Me] = v(e.substr(s)), g(r).bigHour = !0;
});
E("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[F] = v(e.substr(0, n)), t[ce] = v(e.substr(n));
});
E("Hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[F] = v(e.substr(0, n)), t[ce] = v(e.substr(n, 2)), t[Me] = v(e.substr(s));
});
function Uf(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var jf = /[ap]\.?m?\.?/i, qf = bt("Hours", !0);
function Hf(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ha = {
  calendar: Yc,
  longDateFormat: Ic,
  invalidDate: $c,
  ordinal: Lc,
  dayOfMonthOrdinalParse: Uc,
  relativeTime: qc,
  months: sf,
  monthsShort: Fa,
  week: gf,
  weekdays: Ef,
  weekdaysMin: Mf,
  weekdaysShort: Ua,
  meridiemParse: jf
}, R = {}, Nt = {}, jt;
function zf(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Mi(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Bf(e) {
  for (var t = 0, r, n, s, i; t < e.length; ) {
    for (i = Mi(e[t]).split("-"), r = i.length, n = Mi(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (s = Gr(i.slice(0, r).join("-")), s)
        return s;
      if (n && n.length >= r && zf(i, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return jt;
}
function Gf(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Gr(e) {
  var t = null, r;
  if (R[e] === void 0 && typeof module < "u" && module && module.exports && Gf(e))
    try {
      t = jt._abbr, r = require, r("./locale/" + e), $e(t);
    } catch {
      R[e] = null;
    }
  return R[e];
}
function $e(e, t) {
  var r;
  return e && (J(t) ? r = Te(e) : r = Ds(e, t), r ? jt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), jt._abbr;
}
function Ds(e, t) {
  if (t !== null) {
    var r, n = Ha;
    if (t.abbr = e, R[e] != null)
      Na(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = R[e]._config;
    else if (t.parentLocale != null)
      if (R[t.parentLocale] != null)
        n = R[t.parentLocale]._config;
      else if (r = Gr(t.parentLocale), r != null)
        n = r._config;
      else
        return Nt[t.parentLocale] || (Nt[t.parentLocale] = []), Nt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return R[e] = new _s(Vn(n, t)), Nt[e] && Nt[e].forEach(function(s) {
      Ds(s.name, s.config);
    }), $e(e), R[e];
  } else
    return delete R[e], null;
}
function Jf(e, t) {
  if (t != null) {
    var r, n, s = Ha;
    R[e] != null && R[e].parentLocale != null ? R[e].set(Vn(R[e]._config, t)) : (n = Gr(e), n != null && (s = n._config), t = Vn(s, t), n == null && (t.abbr = e), r = new _s(t), r.parentLocale = R[e], R[e] = r), $e(e);
  } else
    R[e] != null && (R[e].parentLocale != null ? (R[e] = R[e].parentLocale, e === $e() && $e(e)) : R[e] != null && delete R[e]);
  return R[e];
}
function Te(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return jt;
  if (!he(e)) {
    if (t = Gr(e), t)
      return t;
    e = [e];
  }
  return Bf(e);
}
function Zf() {
  return $n(R);
}
function Es(e) {
  var t, r = e._a;
  return r && g(e).overflow === -2 && (t = r[Ee] < 0 || r[Ee] > 11 ? Ee : r[ye] < 1 || r[ye] > Br(r[L], r[Ee]) ? ye : r[F] < 0 || r[F] > 24 || r[F] === 24 && (r[ce] !== 0 || r[Me] !== 0 || r[Be] !== 0) ? F : r[ce] < 0 || r[ce] > 59 ? ce : r[Me] < 0 || r[Me] > 59 ? Me : r[Be] < 0 || r[Be] > 999 ? Be : -1, g(e)._overflowDayOfYear && (t < L || t > ye) && (t = ye), g(e)._overflowWeeks && t === -1 && (t = tf), g(e)._overflowWeekday && t === -1 && (t = rf), g(e).overflow = t), e;
}
var Kf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qf = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xf = /Z|[+-]\d\d(?::?\d\d)?/, rr = [
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
], bn = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ed = /^\/?Date\((-?\d+)/i, td = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, rd = {
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
function za(e) {
  var t, r, n = e._i, s = Kf.exec(n) || Qf.exec(n), i, a, o, u, f = rr.length, h = bn.length;
  if (s) {
    for (g(e).iso = !0, t = 0, r = f; t < r; t++)
      if (rr[t][1].exec(s[1])) {
        a = rr[t][0], i = rr[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = h; t < r; t++)
        if (bn[t][1].exec(s[3])) {
          o = (s[2] || " ") + bn[t][0];
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
    if (s[4])
      if (Xf.exec(s[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (o || "") + (u || ""), Ns(e);
  } else
    e._isValid = !1;
}
function nd(e, t, r, n, s, i) {
  var a = [
    sd(e),
    Fa.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function sd(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function id(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ad(e, t, r) {
  if (e) {
    var n = Ua.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return g(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function od(e, t, r) {
  if (e)
    return rd[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), s = n % 100, i = (n - s) / 100;
  return i * 60 + s;
}
function Ba(e) {
  var t = td.exec(id(e._i)), r;
  if (t) {
    if (r = nd(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ad(t[1], r, e))
      return;
    e._a = r, e._tzm = od(t[8], t[9], t[10]), e._d = Lt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ud(e) {
  var t = ed.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (za(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ba(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : p.createFromInputFallback(e);
}
p.createFromInputFallback = ie(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ft(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function ld(e) {
  var t = new Date(p.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ms(e) {
  var t, r, n = [], s, i, a;
  if (!e._d) {
    for (s = ld(e), e._w && e._a[ye] == null && e._a[Ee] == null && cd(e), e._dayOfYear != null && (a = ft(e._a[L], s[L]), (e._dayOfYear > Ft(a) || e._dayOfYear === 0) && (g(e)._overflowDayOfYear = !0), r = Lt(a, 0, e._dayOfYear), e._a[Ee] = r.getUTCMonth(), e._a[ye] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[F] === 24 && e._a[ce] === 0 && e._a[Me] === 0 && e._a[Be] === 0 && (e._nextDay = !0, e._a[F] = 0), e._d = (e._useUTC ? Lt : _f).apply(
      null,
      n
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[F] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (g(e).weekdayMismatch = !0);
  }
}
function cd(e) {
  var t, r, n, s, i, a, o, u, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, r = ft(
    t.GG,
    e._a[L],
    Ut(N(), 1, 4).year
  ), n = ft(t.W, 1), s = ft(t.E, 1), (s < 1 || s > 7) && (u = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, f = Ut(N(), i, a), r = ft(t.gg, e._a[L], f.year), n = ft(t.w, f.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (u = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : s = i), n < 1 || n > xe(r, i, a) ? g(e)._overflowWeeks = !0 : u != null ? g(e)._overflowWeekday = !0 : (o = La(r, n, s, i, a), e._a[L] = o.year, e._dayOfYear = o.dayOfYear);
}
p.ISO_8601 = function() {
};
p.RFC_2822 = function() {
};
function Ns(e) {
  if (e._f === p.ISO_8601) {
    za(e);
    return;
  }
  if (e._f === p.RFC_2822) {
    Ba(e);
    return;
  }
  e._a = [], g(e).empty = !0;
  var t = "" + e._i, r, n, s, i, a, o = t.length, u = 0, f, h;
  for (s = xa(e._f, e._locale).match(ys) || [], h = s.length, r = 0; r < h; r++)
    i = s[r], n = (t.match(Qc(i, e)) || [])[0], n && (a = t.substr(0, t.indexOf(n)), a.length > 0 && g(e).unusedInput.push(a), t = t.slice(
      t.indexOf(n) + n.length
    ), u += n.length), yt[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), ef(i, n, e)) : e._strict && !n && g(e).unusedTokens.push(i);
  g(e).charsLeftOver = o - u, t.length > 0 && g(e).unusedInput.push(t), e._a[F] <= 12 && g(e).bigHour === !0 && e._a[F] > 0 && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[F] = fd(
    e._locale,
    e._a[F],
    e._meridiem
  ), f = g(e).era, f !== null && (e._a[L] = e._locale.erasConvertYear(f, e._a[L])), Ms(e), Es(e);
}
function fd(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function dd(e) {
  var t, r, n, s, i, a, o = !1, u = e._f.length;
  if (u === 0) {
    g(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (s = 0; s < u; s++)
    i = 0, a = !1, t = ms({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Ns(t), ps(t) && (a = !0), i += g(t).charsLeftOver, i += g(t).unusedTokens.length * 10, g(t).score = i, o ? i < n && (n = i, r = t) : (n == null || i < n || a) && (n = i, r = t, a && (o = !0));
  Ae(e, r || t);
}
function hd(e) {
  if (!e._d) {
    var t = gs(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Ea(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Ms(e);
  }
}
function pd(e) {
  var t = new Ht(Es(Ga(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ga(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Te(e._l), t === null || r === void 0 && t === "" ? Wr({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), pe(t) ? new Ht(Es(t)) : (qt(t) ? e._d = t : he(r) ? dd(e) : r ? Ns(e) : md(e), ps(e) || (e._d = null), e));
}
function md(e) {
  var t = e._i;
  J(t) ? e._d = new Date(p.now()) : qt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ud(e) : he(t) ? (e._a = Ea(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Ms(e)) : Xe(t) ? hd(e) : Re(t) ? e._d = new Date(t) : p.createFromInputFallback(e);
}
function Ja(e, t, r, n, s) {
  var i = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Xe(e) && hs(e) || he(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = r, i._i = e, i._f = t, i._strict = n, pd(i);
}
function N(e, t, r, n) {
  return Ja(e, t, r, n, !1);
}
var _d = ie(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = N.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Wr();
  }
), yd = ie(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = N.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Wr();
  }
);
function Za(e, t) {
  var r, n;
  if (t.length === 1 && he(t[0]) && (t = t[0]), !t.length)
    return N();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function gd() {
  var e = [].slice.call(arguments, 0);
  return Za("isBefore", e);
}
function vd() {
  var e = [].slice.call(arguments, 0);
  return Za("isAfter", e);
}
var wd = function() {
  return Date.now ? Date.now() : +new Date();
}, xt = [
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
function Sd(e) {
  var t, r = !1, n, s = xt.length;
  for (t in e)
    if (b(e, t) && !(C.call(xt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[xt[n]]) {
      if (r)
        return !1;
      parseFloat(e[xt[n]]) !== v(e[xt[n]]) && (r = !0);
    }
  return !0;
}
function Od() {
  return this._isValid;
}
function bd() {
  return me(NaN);
}
function Jr(e) {
  var t = gs(e), r = t.year || 0, n = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, f = t.second || 0, h = t.millisecond || 0;
  this._isValid = Sd(t), this._milliseconds = +h + f * 1e3 + u * 6e4 + o * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = Te(), this._bubble();
}
function ur(e) {
  return e instanceof Jr;
}
function Ln(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Dd(e, t, r) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < n; a++)
    (r && e[a] !== t[a] || !r && v(e[a]) !== v(t[a])) && i++;
  return i + s;
}
function Ka(e, t) {
  _(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + ve(~~(r / 60), 2) + t + ve(~~r % 60, 2);
  });
}
Ka("Z", ":");
Ka("ZZ", "");
m("Z", zr);
m("ZZ", zr);
E(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = xs(zr, e);
});
var Ed = /([\+\-]|\d\d)/gi;
function xs(e, t) {
  var r = (t || "").match(e), n, s, i;
  return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(Ed) || ["-", 0, 0], i = +(s[1] * 60) + v(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
}
function Rs(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (pe(e) || qt(e) ? e.valueOf() : N(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), p.updateOffset(r, !1), r) : N(e).local();
}
function Un(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
p.updateOffset = function() {
};
function Md(e, t, r) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = xs(zr, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = Un(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? eo(
      this,
      me(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Un(this);
}
function Nd(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function xd(e) {
  return this.utcOffset(0, e);
}
function Rd(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Un(this), "m")), this;
}
function Td() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = xs(Zc, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function kd(e) {
  return this.isValid() ? (e = e ? N(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Pd() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Yd() {
  if (!J(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ms(e, this), e = Ga(e), e._a ? (t = e._isUTC ? we(e._a) : N(e._a), this._isDSTShifted = this.isValid() && Dd(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Cd() {
  return this.isValid() ? !this._isUTC : !1;
}
function Fd() {
  return this.isValid() ? this._isUTC : !1;
}
function Qa() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ad = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Id = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function me(e, t) {
  var r = e, n = null, s, i, a;
  return ur(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Re(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = Ad.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: v(n[ye]) * s,
    h: v(n[F]) * s,
    m: v(n[ce]) * s,
    s: v(n[Me]) * s,
    ms: v(Ln(n[Be] * 1e3)) * s
  }) : (n = Id.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: je(n[2], s),
    M: je(n[3], s),
    w: je(n[4], s),
    d: je(n[5], s),
    h: je(n[6], s),
    m: je(n[7], s),
    s: je(n[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (a = Vd(
    N(r.from),
    N(r.to)
  ), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new Jr(r), ur(e) && b(e, "_locale") && (i._locale = e._locale), ur(e) && b(e, "_isValid") && (i._isValid = e._isValid), i;
}
me.fn = Jr.prototype;
me.invalid = bd;
function je(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Ni(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Vd(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Rs(t, e), e.isBefore(t) ? r = Ni(e, t) : (r = Ni(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Xa(e, t) {
  return function(r, n) {
    var s, i;
    return n !== null && !isNaN(+n) && (Na(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = n, n = i), s = me(r, n), eo(this, s, e), this;
  };
}
function eo(e, t, r, n) {
  var s = t._milliseconds, i = Ln(t._days), a = Ln(t._months);
  !e.isValid() || (n = n == null ? !0 : n, a && Ia(e, br(e, "Month") + a * r), i && Ta(e, "Date", br(e, "Date") + i * r), s && e._d.setTime(e._d.valueOf() + s * r), n && p.updateOffset(e, i || a));
}
var $d = Xa(1, "add"), Wd = Xa(-1, "subtract");
function to(e) {
  return typeof e == "string" || e instanceof String;
}
function Ld(e) {
  return pe(e) || qt(e) || to(e) || Re(e) || jd(e) || Ud(e) || e === null || e === void 0;
}
function Ud(e) {
  var t = Xe(e) && !hs(e), r = !1, n = [
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
  ], s, i, a = n.length;
  for (s = 0; s < a; s += 1)
    i = n[s], r = r || b(e, i);
  return t && r;
}
function jd(e) {
  var t = he(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !Re(n) && to(e);
  }).length === 0), t && r;
}
function qd(e) {
  var t = Xe(e) && !hs(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, i;
  for (s = 0; s < n.length; s += 1)
    i = n[s], r = r || b(e, i);
  return t && r;
}
function Hd(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function zd(e, t) {
  arguments.length === 1 && (arguments[0] ? Ld(arguments[0]) ? (e = arguments[0], t = void 0) : qd(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || N(), n = Rs(r, this).startOf("day"), s = p.calendarFormat(this, n) || "sameElse", i = t && (Se(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    i || this.localeData().calendar(s, this, N(r))
  );
}
function Bd() {
  return new Ht(this);
}
function Gd(e, t) {
  var r = pe(e) ? e : N(e);
  return this.isValid() && r.isValid() ? (t = ae(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Jd(e, t) {
  var r = pe(e) ? e : N(e);
  return this.isValid() && r.isValid() ? (t = ae(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function Zd(e, t, r, n) {
  var s = pe(e) ? e : N(e), i = pe(t) ? t : N(t);
  return this.isValid() && s.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function Kd(e, t) {
  var r = pe(e) ? e : N(e), n;
  return this.isValid() && r.isValid() ? (t = ae(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Qd(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Xd(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function eh(e, t, r) {
  var n, s, i;
  if (!this.isValid())
    return NaN;
  if (n = Rs(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = ae(t), t) {
    case "year":
      i = lr(this, n) / 12;
      break;
    case "month":
      i = lr(this, n);
      break;
    case "quarter":
      i = lr(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - s) / 864e5;
      break;
    case "week":
      i = (this - n - s) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return r ? i : re(i);
}
function lr(e, t) {
  if (e.date() < t.date())
    return -lr(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), s, i;
  return t - n < 0 ? (s = e.clone().add(r - 1, "months"), i = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), i = (t - n) / (s - n)), -(r + i) || 0;
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function th() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function rh(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? or(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Se(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", or(r, "Z")) : or(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function nh() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, s, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + n + s + i);
}
function sh(e) {
  e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
  var t = or(this, e);
  return this.localeData().postformat(t);
}
function ih(e, t) {
  return this.isValid() && (pe(e) && e.isValid() || N(e).isValid()) ? me({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ah(e) {
  return this.from(N(), e);
}
function oh(e, t) {
  return this.isValid() && (pe(e) && e.isValid() || N(e).isValid()) ? me({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function uh(e) {
  return this.to(N(), e);
}
function ro(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Te(e), t != null && (this._locale = t), this);
}
var no = ie(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function so() {
  return this._locale;
}
var Mr = 1e3, gt = 60 * Mr, Nr = 60 * gt, io = (365 * 400 + 97) * 24 * Nr;
function vt(e, t) {
  return (e % t + t) % t;
}
function ao(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - io : new Date(e, t, r).valueOf();
}
function oo(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - io : Date.UTC(e, t, r);
}
function lh(e) {
  var t, r;
  if (e = ae(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? oo : ao, e) {
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
      t = this._d.valueOf(), t -= vt(
        t + (this._isUTC ? 0 : this.utcOffset() * gt),
        Nr
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= vt(t, gt);
      break;
    case "second":
      t = this._d.valueOf(), t -= vt(t, Mr);
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function ch(e) {
  var t, r;
  if (e = ae(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? oo : ao, e) {
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
      t = this._d.valueOf(), t += Nr - vt(
        t + (this._isUTC ? 0 : this.utcOffset() * gt),
        Nr
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += gt - vt(t, gt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Mr - vt(t, Mr) - 1;
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function fh() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function dh() {
  return Math.floor(this.valueOf() / 1e3);
}
function hh() {
  return new Date(this.valueOf());
}
function ph() {
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
function mh() {
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
function _h() {
  return this.isValid() ? this.toISOString() : null;
}
function yh() {
  return ps(this);
}
function gh() {
  return Ae({}, g(this));
}
function vh() {
  return g(this).overflow;
}
function wh() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
_("N", 0, 0, "eraAbbr");
_("NN", 0, 0, "eraAbbr");
_("NNN", 0, 0, "eraAbbr");
_("NNNN", 0, 0, "eraName");
_("NNNNN", 0, 0, "eraNarrow");
_("y", ["y", 1], "yo", "eraYear");
_("y", ["yy", 2], 0, "eraYear");
_("y", ["yyy", 3], 0, "eraYear");
_("y", ["yyyy", 4], 0, "eraYear");
m("N", Ts);
m("NN", Ts);
m("NNN", Ts);
m("NNNN", kh);
m("NNNNN", Ph);
E(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? g(r).era = s : g(r).invalidEra = e;
  }
);
m("y", Dt);
m("yy", Dt);
m("yyy", Dt);
m("yyyy", Dt);
m("yo", Yh);
E(["y", "yy", "yyy", "yyyy"], L);
E(["yo"], function(e, t, r, n) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[L] = r._locale.eraYearOrdinalParse(e, s) : t[L] = parseInt(e, 10);
});
function Sh(e, t) {
  var r, n, s, i = this._eras || Te("en")._eras;
  for (r = 0, n = i.length; r < n; ++r) {
    switch (typeof i[r].since) {
      case "string":
        s = p(i[r].since).startOf("day"), i[r].since = s.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        s = p(i[r].until).startOf("day").valueOf(), i[r].until = s.valueOf();
        break;
    }
  }
  return i;
}
function Oh(e, t, r) {
  var n, s, i = this.eras(), a, o, u;
  for (e = e.toUpperCase(), n = 0, s = i.length; n < s; ++n)
    if (a = i[n].name.toUpperCase(), o = i[n].abbr.toUpperCase(), u = i[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[n];
          break;
        case "NNNN":
          if (a === e)
            return i[n];
          break;
        case "NNNNN":
          if (u === e)
            return i[n];
          break;
      }
    else if ([a, o, u].indexOf(e) >= 0)
      return i[n];
}
function bh(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * r;
}
function Dh() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function Eh() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function Mh() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function Nh() {
  var e, t, r, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - p(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function xh(e) {
  return b(this, "_erasNameRegex") || ks.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Rh(e) {
  return b(this, "_erasAbbrRegex") || ks.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Th(e) {
  return b(this, "_erasNarrowRegex") || ks.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ts(e, t) {
  return t.erasAbbrRegex(e);
}
function kh(e, t) {
  return t.erasNameRegex(e);
}
function Ph(e, t) {
  return t.erasNarrowRegex(e);
}
function Yh(e, t) {
  return t._eraYearOrdinalRegex || Dt;
}
function ks() {
  var e = [], t = [], r = [], n = [], s, i, a = this.eras();
  for (s = 0, i = a.length; s < i; ++s)
    t.push(X(a[s].name)), e.push(X(a[s].abbr)), r.push(X(a[s].narrow)), n.push(X(a[s].name)), n.push(X(a[s].abbr)), n.push(X(a[s].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
_(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
_(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Zr(e, t) {
  _(0, [e, e.length], 0, t);
}
Zr("gggg", "weekYear");
Zr("ggggg", "weekYear");
Zr("GGGG", "isoWeekYear");
Zr("GGGGG", "isoWeekYear");
U("weekYear", "gg");
U("isoWeekYear", "GG");
j("weekYear", 1);
j("isoWeekYear", 1);
m("G", Hr);
m("g", Hr);
m("GG", x, te);
m("gg", x, te);
m("GGGG", ws, vs);
m("gggg", ws, vs);
m("GGGGG", qr, Ur);
m("ggggg", qr, Ur);
Bt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = v(e);
  }
);
Bt(["gg", "GG"], function(e, t, r, n) {
  t[n] = p.parseTwoDigitYear(e);
});
function Ch(e) {
  return uo.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Fh(e) {
  return uo.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ah() {
  return xe(this.year(), 1, 4);
}
function Ih() {
  return xe(this.isoWeekYear(), 1, 4);
}
function Vh() {
  var e = this.localeData()._week;
  return xe(this.year(), e.dow, e.doy);
}
function $h() {
  var e = this.localeData()._week;
  return xe(this.weekYear(), e.dow, e.doy);
}
function uo(e, t, r, n, s) {
  var i;
  return e == null ? Ut(this, n, s).year : (i = xe(e, n, s), t > i && (t = i), Wh.call(this, e, t, r, n, s));
}
function Wh(e, t, r, n, s) {
  var i = La(e, t, r, n, s), a = Lt(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
_("Q", 0, "Qo", "quarter");
U("quarter", "Q");
j("quarter", 7);
m("Q", ka);
E("Q", function(e, t) {
  t[Ee] = (v(e) - 1) * 3;
});
function Lh(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
_("D", ["DD", 2], "Do", "date");
U("date", "D");
j("date", 9);
m("D", x);
m("DD", x, te);
m("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
E(["D", "DD"], ye);
E("Do", function(e, t) {
  t[ye] = v(e.match(x)[0]);
});
var lo = bt("Date", !0);
_("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
U("dayOfYear", "DDD");
j("dayOfYear", 4);
m("DDD", jr);
m("DDDD", Pa);
E(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = v(e);
});
function Uh(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
_("m", ["mm", 2], 0, "minute");
U("minute", "m");
j("minute", 14);
m("m", x);
m("mm", x, te);
E(["m", "mm"], ce);
var jh = bt("Minutes", !1);
_("s", ["ss", 2], 0, "second");
U("second", "s");
j("second", 15);
m("s", x);
m("ss", x, te);
E(["s", "ss"], Me);
var qh = bt("Seconds", !1);
_("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
_(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
_(0, ["SSS", 3], 0, "millisecond");
_(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
_(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
_(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
_(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
_(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
_(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
U("millisecond", "ms");
j("millisecond", 16);
m("S", jr, ka);
m("SS", jr, te);
m("SSS", jr, Pa);
var Ie, co;
for (Ie = "SSSS"; Ie.length <= 9; Ie += "S")
  m(Ie, Dt);
function Hh(e, t) {
  t[Be] = v(("0." + e) * 1e3);
}
for (Ie = "S"; Ie.length <= 9; Ie += "S")
  E(Ie, Hh);
co = bt("Milliseconds", !1);
_("z", 0, 0, "zoneAbbr");
_("zz", 0, 0, "zoneName");
function zh() {
  return this._isUTC ? "UTC" : "";
}
function Bh() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = Ht.prototype;
d.add = $d;
d.calendar = zd;
d.clone = Bd;
d.diff = eh;
d.endOf = ch;
d.format = sh;
d.from = ih;
d.fromNow = ah;
d.to = oh;
d.toNow = uh;
d.get = Gc;
d.invalidAt = vh;
d.isAfter = Gd;
d.isBefore = Jd;
d.isBetween = Zd;
d.isSame = Kd;
d.isSameOrAfter = Qd;
d.isSameOrBefore = Xd;
d.isValid = yh;
d.lang = no;
d.locale = ro;
d.localeData = so;
d.max = yd;
d.min = _d;
d.parsingFlags = gh;
d.set = Jc;
d.startOf = lh;
d.subtract = Wd;
d.toArray = ph;
d.toObject = mh;
d.toDate = hh;
d.toISOString = rh;
d.inspect = nh;
typeof Symbol < "u" && Symbol.for != null && (d[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
d.toJSON = _h;
d.toString = th;
d.unix = dh;
d.valueOf = fh;
d.creationData = wh;
d.eraName = Dh;
d.eraNarrow = Eh;
d.eraAbbr = Mh;
d.eraYear = Nh;
d.year = Wa;
d.isLeapYear = mf;
d.weekYear = Ch;
d.isoWeekYear = Fh;
d.quarter = d.quarters = Lh;
d.month = Va;
d.daysInMonth = df;
d.week = d.weeks = Sf;
d.isoWeek = d.isoWeeks = Of;
d.weeksInYear = Vh;
d.weeksInWeekYear = $h;
d.isoWeeksInYear = Ah;
d.isoWeeksInISOWeekYear = Ih;
d.date = lo;
d.day = d.days = Ff;
d.weekday = Af;
d.isoWeekday = If;
d.dayOfYear = Uh;
d.hour = d.hours = qf;
d.minute = d.minutes = jh;
d.second = d.seconds = qh;
d.millisecond = d.milliseconds = co;
d.utcOffset = Md;
d.utc = xd;
d.local = Rd;
d.parseZone = Td;
d.hasAlignedHourOffset = kd;
d.isDST = Pd;
d.isLocal = Cd;
d.isUtcOffset = Fd;
d.isUtc = Qa;
d.isUTC = Qa;
d.zoneAbbr = zh;
d.zoneName = Bh;
d.dates = ie(
  "dates accessor is deprecated. Use date instead.",
  lo
);
d.months = ie(
  "months accessor is deprecated. Use month instead",
  Va
);
d.years = ie(
  "years accessor is deprecated. Use year instead",
  Wa
);
d.zone = ie(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Nd
);
d.isDSTShifted = ie(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Yd
);
function Gh(e) {
  return N(e * 1e3);
}
function Jh() {
  return N.apply(null, arguments).parseZone();
}
function fo(e) {
  return e;
}
var D = _s.prototype;
D.calendar = Cc;
D.longDateFormat = Vc;
D.invalidDate = Wc;
D.ordinal = jc;
D.preparse = fo;
D.postformat = fo;
D.relativeTime = Hc;
D.pastFuture = zc;
D.set = Pc;
D.eras = Sh;
D.erasParse = Oh;
D.erasConvertYear = bh;
D.erasAbbrRegex = Rh;
D.erasNameRegex = xh;
D.erasNarrowRegex = Th;
D.months = uf;
D.monthsShort = lf;
D.monthsParse = ff;
D.monthsRegex = pf;
D.monthsShortRegex = hf;
D.week = yf;
D.firstDayOfYear = wf;
D.firstDayOfWeek = vf;
D.weekdays = Tf;
D.weekdaysMin = Pf;
D.weekdaysShort = kf;
D.weekdaysParse = Cf;
D.weekdaysRegex = Vf;
D.weekdaysShortRegex = $f;
D.weekdaysMinRegex = Wf;
D.isPM = Uf;
D.meridiem = Hf;
function xr(e, t, r, n) {
  var s = Te(), i = we().set(n, t);
  return s[r](i, e);
}
function ho(e, t, r) {
  if (Re(e) && (t = e, e = void 0), e = e || "", t != null)
    return xr(e, t, r, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = xr(e, n, r, "month");
  return s;
}
function Ps(e, t, r, n) {
  typeof e == "boolean" ? (Re(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Re(t) && (r = t, t = void 0), t = t || "");
  var s = Te(), i = e ? s._week.dow : 0, a, o = [];
  if (r != null)
    return xr(t, (r + i) % 7, n, "day");
  for (a = 0; a < 7; a++)
    o[a] = xr(t, (a + i) % 7, n, "day");
  return o;
}
function Zh(e, t) {
  return ho(e, t, "months");
}
function Kh(e, t) {
  return ho(e, t, "monthsShort");
}
function Qh(e, t, r) {
  return Ps(e, t, r, "weekdays");
}
function Xh(e, t, r) {
  return Ps(e, t, r, "weekdaysShort");
}
function ep(e, t, r) {
  return Ps(e, t, r, "weekdaysMin");
}
$e("en", {
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
p.lang = ie(
  "moment.lang is deprecated. Use moment.locale instead.",
  $e
);
p.langData = ie(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Te
);
var Oe = Math.abs;
function tp() {
  var e = this._data;
  return this._milliseconds = Oe(this._milliseconds), this._days = Oe(this._days), this._months = Oe(this._months), e.milliseconds = Oe(e.milliseconds), e.seconds = Oe(e.seconds), e.minutes = Oe(e.minutes), e.hours = Oe(e.hours), e.months = Oe(e.months), e.years = Oe(e.years), this;
}
function po(e, t, r, n) {
  var s = me(t, r);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function rp(e, t) {
  return po(this, e, t, 1);
}
function np(e, t) {
  return po(this, e, t, -1);
}
function xi(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function sp() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, s, i, a, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += xi(jn(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = re(e / 1e3), n.seconds = s % 60, i = re(s / 60), n.minutes = i % 60, a = re(i / 60), n.hours = a % 24, t += re(a / 24), u = re(mo(t)), r += u, t -= xi(jn(u)), o = re(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this;
}
function mo(e) {
  return e * 4800 / 146097;
}
function jn(e) {
  return e * 146097 / 4800;
}
function ip(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = ae(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + mo(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(jn(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ap() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + v(this._months / 12) * 31536e6 : NaN;
}
function ke(e) {
  return function() {
    return this.as(e);
  };
}
var op = ke("ms"), up = ke("s"), lp = ke("m"), cp = ke("h"), fp = ke("d"), dp = ke("w"), hp = ke("M"), pp = ke("Q"), mp = ke("y");
function _p() {
  return me(this);
}
function yp(e) {
  return e = ae(e), this.isValid() ? this[e + "s"]() : NaN;
}
function it(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var gp = it("milliseconds"), vp = it("seconds"), wp = it("minutes"), Sp = it("hours"), Op = it("days"), bp = it("months"), Dp = it("years");
function Ep() {
  return re(this.days() / 7);
}
var De = Math.round, mt = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Mp(e, t, r, n, s) {
  return s.relativeTime(t || 1, !!r, e, n);
}
function Np(e, t, r, n) {
  var s = me(e).abs(), i = De(s.as("s")), a = De(s.as("m")), o = De(s.as("h")), u = De(s.as("d")), f = De(s.as("M")), h = De(s.as("w")), l = De(s.as("y")), c = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || a <= 1 && ["m"] || a < r.m && ["mm", a] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (c = c || h <= 1 && ["w"] || h < r.w && ["ww", h]), c = c || f <= 1 && ["M"] || f < r.M && ["MM", f] || l <= 1 && ["y"] || ["yy", l], c[2] = t, c[3] = +e > 0, c[4] = n, Mp.apply(null, c);
}
function xp(e) {
  return e === void 0 ? De : typeof e == "function" ? (De = e, !0) : !1;
}
function Rp(e, t) {
  return mt[e] === void 0 ? !1 : t === void 0 ? mt[e] : (mt[e] = t, e === "s" && (mt.ss = t - 1), !0);
}
function Tp(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = mt, s, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, mt, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), i = Np(this, !r, n, s), r && (i = s.pastFuture(+this, i)), s.postformat(i);
}
var Dn = Math.abs;
function lt(e) {
  return (e > 0) - (e < 0) || +e;
}
function Kr() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Dn(this._milliseconds) / 1e3, t = Dn(this._days), r = Dn(this._months), n, s, i, a, o = this.asSeconds(), u, f, h, l;
  return o ? (n = re(e / 60), s = re(n / 60), e %= 60, n %= 60, i = re(r / 12), r %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", f = lt(this._months) !== lt(o) ? "-" : "", h = lt(this._days) !== lt(o) ? "-" : "", l = lt(this._milliseconds) !== lt(o) ? "-" : "", u + "P" + (i ? f + i + "Y" : "") + (r ? f + r + "M" : "") + (t ? h + t + "D" : "") + (s || n || e ? "T" : "") + (s ? l + s + "H" : "") + (n ? l + n + "M" : "") + (e ? l + a + "S" : "")) : "P0D";
}
var O = Jr.prototype;
O.isValid = Od;
O.abs = tp;
O.add = rp;
O.subtract = np;
O.as = ip;
O.asMilliseconds = op;
O.asSeconds = up;
O.asMinutes = lp;
O.asHours = cp;
O.asDays = fp;
O.asWeeks = dp;
O.asMonths = hp;
O.asQuarters = pp;
O.asYears = mp;
O.valueOf = ap;
O._bubble = sp;
O.clone = _p;
O.get = yp;
O.milliseconds = gp;
O.seconds = vp;
O.minutes = wp;
O.hours = Sp;
O.days = Op;
O.weeks = Ep;
O.months = bp;
O.years = Dp;
O.humanize = Tp;
O.toISOString = Kr;
O.toString = Kr;
O.toJSON = Kr;
O.locale = ro;
O.localeData = so;
O.toIsoString = ie(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Kr
);
O.lang = no;
_("X", 0, 0, "unix");
_("x", 0, 0, "valueOf");
m("x", Hr);
m("X", Kc);
E("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
E("x", function(e, t, r) {
  r._d = new Date(v(e));
});
//! moment.js
p.version = "2.29.4";
Tc(N);
p.fn = d;
p.min = gd;
p.max = vd;
p.now = wd;
p.utc = we;
p.unix = Gh;
p.months = Zh;
p.isDate = qt;
p.locale = $e;
p.invalid = Wr;
p.duration = me;
p.isMoment = pe;
p.weekdays = Qh;
p.parseZone = Jh;
p.localeData = Te;
p.isDuration = ur;
p.monthsShort = Kh;
p.weekdaysMin = ep;
p.defineLocale = Ds;
p.updateLocale = Jf;
p.locales = Zf;
p.weekdaysShort = Xh;
p.normalizeUnits = ae;
p.relativeTimeRounding = xp;
p.relativeTimeThreshold = Rp;
p.calendarFormat = Hd;
p.prototype = d;
p.HTML5_FMT = {
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
const kp = {
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
    this.modelValue && (this.query = p(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(e) {
      return e ? p(e).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit(
        "update:modelValue",
        this.query ? p(this.query).format(this.submitFormat) : null
      );
    }
  }
};
function Pp(e, t, r, n, s, i) {
  const a = tt("o-datepicker");
  return fe(), rt(a, {
    modelValue: s.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (o) => s.query = o),
      i.updateQuery
    ],
    "date-formatter": i.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const Yp = /* @__PURE__ */ st(kp, [["render", Pp]]), Cp = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, Fp = /* @__PURE__ */ Cr(" An error occurred. Try again? ");
function Ap(e, t, r, n, s, i) {
  const a = tt("o-loading"), o = tt("o-button");
  return fe(), gr("div", null, [
    r.form.isLoaded.value ? (fe(), gr("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = cl((u) => e.$emit("submit"), ["prevent"]))
    }, [
      pr(e.$slots, "default")
    ], 32)) : Yt("", !0),
    St(a, {
      active: r.form.isLoading.value
    }, null, 8, ["active"]),
    !r.form.isLoaded.value && !r.form.isLoading.value ? (fe(), rt(o, {
      key: 1,
      onClick: t[1] || (t[1] = (u) => r.form.load())
    }, {
      default: es(() => [
        Fp
      ]),
      _: 1
    })) : Yt("", !0)
  ]);
}
const Ip = /* @__PURE__ */ st(Cp, [["render", Ap]]), Vp = {
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
}, $p = ["width", "height"];
function Wp(e, t, r, n, s, i) {
  return fe(), gr("img", {
    ref: "image",
    src: "",
    alt: "",
    width: s.width,
    height: s.height
  }, null, 8, $p);
}
const Lp = /* @__PURE__ */ st(Vp, [["render", Wp]]), Up = {
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
      errors: fs()
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
function jp(e, t, r, n, s, i) {
  const a = tt("o-input"), o = tt("o-field");
  return fe(), rt(o, Sr({ label: r.label }, n.errors.get(r.name, r.bag)), {
    default: es(() => [
      St(a, Sr(e.$attrs, {
        onFocus: t[0] || (t[0] = (u) => n.errors.clear(r.name, r.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const qp = /* @__PURE__ */ st(Up, [["render", jp]]), Hp = {
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
      search: $r.create()
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
function zp(e, t, r, n, s, i) {
  const a = tt("o-inputitems");
  return fe(), rt(a, Sr(e.$attrs, {
    modelValue: s.query,
    "onUpdate:modelValue": t[0] || (t[0] = (o) => s.query = o),
    data: n.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (o) => i.addedTag(o)),
    onRemove: t[2] || (t[2] = (o) => i.removedTag(o)),
    onFocus: t[3] || (t[3] = (o) => i.searchTags()),
    onTyping: t[4] || (t[4] = (o) => i.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const Bp = /* @__PURE__ */ st(Hp, [["render", zp]]), Jp = {
  AutoCompleteSearch: $r,
  FormBuilder: ds,
  ResourceList: gc,
  Listing: vc,
  useFormErrors: fs,
  WyxosButton: Ec,
  WyxosCollection: Rc,
  WyxosDatepicker: Yp,
  WyxosForm: Ip,
  WyxosImage: Lp,
  WyxosInput: qp,
  WyxosTags: Bp
};
export {
  $r as AutoCompleteSearch,
  ds as FormBuilder,
  vc as Listing,
  gc as ResourceList,
  Ec as WyxosButton,
  Rc as WyxosCollection,
  Yp as WyxosDatepicker,
  Ip as WyxosForm,
  Lp as WyxosImage,
  qp as WyxosInput,
  Bp as WyxosTags,
  Jp as default,
  fs as useFormErrors
};
