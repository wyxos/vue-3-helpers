var j = Object.defineProperty;
var k = (s, t, e) => t in s ? j(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var u = (s, t, e) => (k(s, typeof t != "symbol" ? t + "" : t, e), e);
import { ref as p, reactive as c, resolveComponent as g, openBlock as d, createBlock as v, withCtx as F, renderSlot as q, createCommentVNode as b, createElementBlock as _, createTextVNode as P, normalizeProps as A, guardReactiveProps as W, createElementVNode as S, withModifiers as T, createVNode as x, mergeProps as $ } from "vue";
import h from "axios";
import w from "moment";
class V {
  constructor() {
    u(this, "loading", p(!1));
    u(this, "result", p([]));
  }
  static create() {
    return new V();
  }
  async search(t, e) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${t}/search`, e).catch((i) => {
      throw this.loading.value = !1, i;
    });
    this.result.value = a.result, this.loading.value = !1;
  }
  async restore(t, e) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${t}/restore`, e).catch((i) => {
      throw this.loading.value = !1, i;
    });
    return this.loading.value = !1, a;
  }
}
const y = c({
  default: []
});
function L() {
  return {
    createBag(s) {
      y[s] = [];
    },
    set(s, t = "default") {
      throw s.response && s.response.data && s.response.data.errors && (y[t] = Object.keys(s.response.data.errors).map((a) => ({
        key: a,
        message: s.response.data.errors[a][0]
      }))), s;
    },
    get(s, t = "default") {
      const e = y[t];
      if (!e)
        return {
          message: "",
          variant: ""
        };
      const a = e.find((i) => i.key === s);
      return a ? {
        message: a.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(s, t = "default") {
      if (s) {
        const e = y[t];
        if (!e) {
          console.warn(`Bag ${t} is not defined.`);
          return;
        }
        const a = e.findIndex((i) => i.key === s);
        e.splice(a, 1);
        return;
      }
      y[t] = [];
    }
  };
}
class O {
  constructor(t) {
    u(this, "loadPath", "");
    u(this, "submitPath", "");
    u(this, "bag", "");
    u(this, "model", c({}));
    u(this, "form", c({}));
    u(this, "original", c({}));
    u(this, "isLoading", p(!1));
    u(this, "isLoaded", p(!0));
    u(this, "isSubmitting", p(!1));
    u(this, "isSubmitted", p(!1));
    u(this, "errors", null);
    this.setPath(t.submitPath), this.loadPath = t.loadPath, this.setErrors(t.bag), this.setAttributes(t.form);
  }
  static create(t) {
    return new O(t);
  }
  setPath(t) {
    this.submitPath = t;
  }
  setErrors(t) {
    this.bag = t || "default", this.errors = L(), this.errors.createBag(this.bag);
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
  async submit(t, e, a = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const i = e ? e(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: n } = await h[a.method || "post"](
      t || this.submitPath,
      i,
      a
    ).catch((l) => {
      throw this.isSubmitting.value = !1, this.errors.set(l, this.bag), l;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, n;
  }
  async advancedSubmit(t) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: e } = await Promise.resolve(t(h, this.form)).catch(
      (a) => {
        throw this.isSubmitting.value = !1, this.errors.set(a, this.bag), a;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, e;
  }
  async load(t, e) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: a } = await h.get(t || this.loadPath, {
      params: e
    }).catch((i) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, i;
    });
    return this.setAttributes(a.form), a.model && Object.assign(this.model, a.model), this.isLoading.value = !1, this.isLoaded.value = !0, a;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
class ot {
  constructor() {
    u(this, "structure", {});
    u(this, "query", c({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    u(this, "params", c({
      page: 1
    }));
    u(this, "router", null);
  }
  static create(t, e = {}, a = {}, i) {
    a = Object.assign(
      { base: "/api/admin", route: `${t}.index` },
      a
    );
    const n = a.base, l = {
      route: a.route,
      index: a.index || `${n}/${t}/index`,
      destroy: `${n}/${t}/destroy`
    }, r = new this();
    return r.options = a, r.structure = e, r.params = Object.assign(r.params, e), r.router = i, r.urls = l, r;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: e } = await h.get(t || this.urls.index, {
      params: this.params
    }).catch((a) => {
      throw this.query.isLoading = !1, a;
    });
    return await this.router.push({ name: this.urls.route, query: this.params }), this.query.isLoading = !1, this.query.isLoaded = !0, e;
  }
  async load(t) {
    const e = await this.fetch(t);
    return Object.assign(this.query, e.query, {
      items: e.query.items.map((a) => ({
        ...a,
        isProcessing: !1
      }))
    }), e;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async action(t, { row: e, index: a, remove: i, method: n }, l = {}) {
    e.isProcessing = !0;
    const r = {
      id: e.id,
      ...l
    };
    if (n === "delete") {
      const { data: o } = await h.delete(t, {
        data: r
      }).catch((m) => {
        throw e.isProcessing = !1, m;
      });
      e.isProcessing = !1, o.row && Object.assign(e, o.row);
    } else {
      const { data: o } = await h.post(t, r).catch((m) => {
        throw e.isProcessing = !1, m;
      });
      e.isProcessing = !1, o.row && Object.assign(e, o.row);
    }
    if (i) {
      const o = await this.fetch();
      if (this.query.items.splice(a, 1), !o.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < o.query.items.length && this.query.items.push(o.query.items[o.query.items.length - 1]);
    }
  }
  destroy(t, e) {
    return this.action(this.urls.destroy, { ...t, remove: !0 }, e);
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(t);
  }
}
class nt {
  constructor() {
    u(this, "api", null);
    u(this, "structure", null);
    u(this, "query", c({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    u(this, "params", c({
      page: 1
    }));
  }
  static create(t, e) {
    const a = new this();
    return a.structure = () => Object.assign({}, t), Object.assign(a.params, t), a.api = h.create(e.axios || {}), a;
  }
  async fetch(t) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: e } = await this.api.get(t, {
      params: this.params
    }).catch((a) => {
      throw this.query.isLoading = !1, a;
    });
    return this.query.isLoading = !1, this.query.isLoaded = !0, e;
  }
  async load(t) {
    const e = await this.fetch(t, {
      params: this.params
    });
    return Object.assign(this.query, e.query, {
      items: e.query.items.map((a) => ({
        ...a,
        isProcessing: !1
      }))
    }), e;
  }
  onPageChange(t) {
    return this.params.page = t, this.load();
  }
  async action(t, { item: { row: e, index: a }, remove: i, method: n }, l = {}) {
    e.isProcessing = !0;
    const r = {
      id: e.id,
      ...l
    };
    if (n === "delete") {
      const { data: o } = await this.api.delete(t, {
        data: r
      }).catch((m) => {
        throw e.isProcessing = !1, m;
      });
      e.isProcessing = !1, o.row && Object.assign(e, o.row);
    } else {
      const { data: o } = await this.api.post(t, r).catch((m) => {
        throw e.isProcessing = !1, m;
      });
      e.isProcessing = !1, o.row && Object.assign(e, o.row);
    }
    if (i) {
      const o = await this.fetch();
      if (this.query.items.splice(a, 1), !o.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < o.query.items.length && this.query.items.push(o.query.items[o.query.items.length - 1]);
    }
  }
  destroy(t, e, a) {
    return this.action(t, { ...e, remove: !0 }, a);
  }
  openFilter() {
    this.query.isFilterActive = !0;
  }
  async resetFilter(t = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(t);
  }
}
const f = (s, t) => {
  const e = s.__vccOpts || s;
  for (const [a, i] of t)
    e[a] = i;
  return e;
}, E = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, z = /* @__PURE__ */ P("Submit"), N = /* @__PURE__ */ P("Processing..."), B = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function C(s, t, e, a, i, n) {
  const l = g("o-button");
  return d(), v(l, { disabled: e.loading }, {
    default: F(() => [
      e.loading ? b("", !0) : q(s.$slots, "default", { key: 0 }, () => [
        z
      ]),
      e.loading ? q(s.$slots, "loading", { key: 1 }, () => [
        N
      ]) : b("", !0),
      e.loading ? (d(), _("i", B)) : b("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ut = /* @__PURE__ */ f(E, [["render", C]]), I = {
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
    add(s) {
      this.items.push(s), this.$emit("update:modelValue", this.items);
    },
    remove(s) {
      this.items.splice(s, 1), this.$emit("update:modelValue", this.items);
    }
  }
}, Y = /* @__PURE__ */ S("ul", null, [
  /* @__PURE__ */ S("li")
], -1);
function D(s, t, e, a, i, n) {
  return q(s.$slots, "default", A(W({ add: n.add, remove: n.remove, items: i.items })), () => [
    Y
  ]);
}
const lt = /* @__PURE__ */ f(I, [["render", D]]), J = {
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
    this.modelValue && (this.query = w(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(s) {
      return s ? w(s).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit(
        "update:modelValue",
        this.query ? w(this.query).format(this.submitFormat) : null
      );
    }
  }
};
function M(s, t, e, a, i, n) {
  const l = g("o-datepicker");
  return d(), v(l, {
    modelValue: i.query,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (r) => i.query = r),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const dt = /* @__PURE__ */ f(J, [["render", M]]), R = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, U = /* @__PURE__ */ P(" An error occurred. Try again? ");
function Q(s, t, e, a, i, n) {
  const l = g("o-loading"), r = g("o-button");
  return d(), _("div", null, [
    e.form.isLoaded.value ? (d(), _("form", {
      key: 0,
      class: "form",
      onSubmit: t[0] || (t[0] = T((o) => s.$emit("submit"), ["prevent"]))
    }, [
      q(s.$slots, "default")
    ], 32)) : b("", !0),
    x(l, {
      active: e.form.isLoading.value
    }, null, 8, ["active"]),
    !e.form.isLoaded.value && !e.form.isLoading.value ? (d(), v(r, {
      key: 1,
      onClick: t[1] || (t[1] = (o) => e.form.load())
    }, {
      default: F(() => [
        U
      ]),
      _: 1
    })) : b("", !0)
  ]);
}
const ht = /* @__PURE__ */ f(R, [["render", Q]]), G = {
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
      const s = new FileReader();
      s.onload = (t) => {
        const e = t.target.result;
        this.$refs.image.src = e, this.width = this.resize ? this.resize.width : e.width, this.height = this.resize ? this.resize.height : e.height;
      }, s.readAsDataURL(this.src);
    },
    loadPath() {
      const s = new Image();
      s.onload = () => {
        this.$refs.image.src = this.src, this.width = this.resize ? this.resize.width : s.width, this.height = this.resize ? this.resize.height : s.height;
      }, s.src = this.src;
    }
  }
}, H = ["width", "height"];
function K(s, t, e, a, i, n) {
  return d(), _("img", {
    ref: "image",
    src: "",
    alt: "",
    width: i.width,
    height: i.height
  }, null, 8, H);
}
const ct = /* @__PURE__ */ f(G, [["render", K]]), X = {
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
      errors: L()
    };
  },
  computed: {
    inputAttrs() {
      const s = this.$attrs;
      return Object.keys(s).forEach((t) => {
        ["class"].includes(t) || s[t];
      }), s;
    }
  }
};
function Z(s, t, e, a, i, n) {
  const l = g("o-input"), r = g("o-field");
  return d(), v(r, $({ label: e.label }, a.errors.get(e.name, e.bag)), {
    default: F(() => [
      x(l, $(s.$attrs, {
        onFocus: t[0] || (t[0] = (o) => a.errors.clear(e.name, e.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const mt = /* @__PURE__ */ f(X, [["render", Z]]), tt = {
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
      default: (s) => s
    },
    payloadFormatter: {
      type: Function,
      default: (s) => s
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      search: V.create()
    };
  },
  data() {
    return {
      query: []
    };
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result: s } = await this.search.restore(
        this.path,
        this.restoreFormatter({
          values: this.modelValue
        })
      );
      this.query = s, this.$emit(
        "update:modelValue",
        this.query.map((t) => this.formatter(t))
      );
    }
  },
  methods: {
    searchTags(s) {
      return this.search.search(
        this.path,
        this.payloadFormatter({
          value: s,
          exclude: this.query.map((t) => t.id)
        })
      );
    },
    addedTag() {
      const s = this.query.map((t) => this.formatter(t));
      console.log("r", s), this.$emit("update:modelValue", s);
    },
    removedTag() {
      const s = this.query.map((t) => this.formatter(t));
      console.log("r", s), this.$emit("update:modelValue", s);
    },
    reset() {
      this.query = [], this.$emit("update:modelValue", this.query);
    }
  }
};
function et(s, t, e, a, i, n) {
  const l = g("o-inputitems");
  return d(), v(l, $(s.$attrs, {
    modelValue: i.query,
    "onUpdate:modelValue": t[0] || (t[0] = (r) => i.query = r),
    data: a.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: t[1] || (t[1] = (r) => n.addedTag(r)),
    onRemove: t[2] || (t[2] = (r) => n.removedTag(r)),
    onFocus: t[3] || (t[3] = (r) => n.searchTags()),
    onTyping: t[4] || (t[4] = (r) => n.searchTags(r))
  }), null, 16, ["modelValue", "data"]);
}
const gt = /* @__PURE__ */ f(tt, [["render", et]]);
export {
  V as AutoCompleteSearch,
  O as FormBuilder,
  nt as Listing,
  ot as ResourceList,
  ut as WyxosButton,
  lt as WyxosCollection,
  dt as WyxosDatepicker,
  ht as WyxosForm,
  ct as WyxosImage,
  mt as WyxosInput,
  gt as WyxosTags,
  L as useFormErrors
};
