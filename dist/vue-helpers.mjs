var j = Object.defineProperty;
var k = (s, e, t) => e in s ? j(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var u = (s, e, t) => (k(s, typeof e != "symbol" ? e + "" : e, t), t);
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
  async search(e, t) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${e}/search`, t).catch((i) => {
      throw this.loading.value = !1, i;
    });
    this.result.value = a.result, this.loading.value = !1;
  }
  async restore(e, t) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${e}/restore`, t).catch((i) => {
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
    set(s, e = "default") {
      throw s.response && s.response.data && s.response.data.errors && (y[e] = Object.keys(s.response.data.errors).map((a) => ({
        key: a,
        message: s.response.data.errors[a][0]
      }))), s;
    },
    get(s, e = "default") {
      const t = y[e];
      if (!t)
        return {
          message: "",
          variant: ""
        };
      const a = t.find((i) => i.key === s);
      return a ? {
        message: a.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(s, e = "default") {
      if (s) {
        const t = y[e];
        if (!t) {
          console.warn(`Bag ${e} is not defined.`);
          return;
        }
        const a = t.findIndex((i) => i.key === s);
        t.splice(a, 1);
        return;
      }
      y[e] = [];
    }
  };
}
class O {
  constructor(e) {
    u(this, "loadPath", "");
    u(this, "submitPath", "");
    u(this, "bag", "default");
    u(this, "model", c({}));
    u(this, "form", c({}));
    u(this, "original", c({}));
    u(this, "isLoading", p(!1));
    u(this, "isLoaded", p(!0));
    u(this, "isSubmitting", p(!1));
    u(this, "isSubmitted", p(!1));
    u(this, "errors", null);
    this.setPath(e.submitPath), this.loadPath = e.loadPath, this.setErrors(e.errorBag), this.setAttributes(e.form);
  }
  static create(e) {
    return new O(e);
  }
  setPath(e) {
    this.submitPath = e;
  }
  setErrors(e) {
    this.bag = e, this.errors = L(), this.errors.createBag(this.bag);
  }
  setAttributes(e) {
    Object.assign(this.form, e), Object.assign(this.original, e);
  }
  getError(e) {
    return this.errors.get(e, this.bag);
  }
  clearError(e) {
    this.errors.clear(e, this.bag);
  }
  async submit(e, t, a = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const i = t ? t(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: n } = await h[a.method || "post"](
      e || this.submitPath,
      i,
      a
    ).catch((l) => {
      throw this.isSubmitting.value = !1, this.errors.set(l, this.bag), l;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, n;
  }
  async advancedSubmit(e) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: t } = await Promise.resolve(e(h, this.form)).catch(
      (a) => {
        throw this.isSubmitting.value = !1, this.errors.set(a, this.bag), a;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, t;
  }
  async load(e, t) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: a } = await h.get(e || this.loadPath, {
      params: t
    }).catch((i) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, i;
    });
    return this.setAttributes(a.form), a.model && Object.assign(this.model, a.model), this.isLoading.value = !1, this.isLoaded.value = !0, a;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
class oe {
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
  static create(e, t = {}, a = {}, i) {
    a = Object.assign(
      { base: "/api/admin", route: `${e}.index` },
      a
    );
    const n = a.base, l = {
      route: a.route,
      index: a.index || `${n}/${e}/index`,
      destroy: `${n}/${e}/destroy`
    }, r = new this();
    return r.options = a, r.structure = t, r.params = Object.assign(r.params, t), r.router = i, r.urls = l, r;
  }
  async fetch(e) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: t } = await h.get(e || this.urls.index, {
      params: this.params
    }).catch((a) => {
      throw this.query.isLoading = !1, a;
    });
    return await this.router.push({ name: this.urls.route, query: this.params }), this.query.isLoading = !1, this.query.isLoaded = !0, t;
  }
  async load(e) {
    const t = await this.fetch(e);
    return Object.assign(this.query, t.query, {
      items: t.query.items.map((a) => ({
        ...a,
        isProcessing: !1
      }))
    }), t;
  }
  onPageChange(e) {
    return this.params.page = e, this.load();
  }
  async action(e, { row: t, index: a, remove: i, method: n }, l = {}) {
    t.isProcessing = !0;
    const r = {
      id: t.id,
      ...l
    };
    if (n === "delete") {
      const { data: o } = await h.delete(e, {
        data: r
      }).catch((m) => {
        throw t.isProcessing = !1, m;
      });
      t.isProcessing = !1, o.row && Object.assign(t, o.row);
    } else {
      const { data: o } = await h.post(e, r).catch((m) => {
        throw t.isProcessing = !1, m;
      });
      t.isProcessing = !1, o.row && Object.assign(t, o.row);
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
  destroy(e, t) {
    return this.action(this.urls.destroy, { ...e, remove: !0 }, t);
  }
  async resetFilter(e = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(e);
  }
}
class ne {
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
  static create(e, t) {
    const a = new this();
    return a.structure = () => Object.assign({}, e), Object.assign(a.params, e), a.api = h.create(t.axios || {}), a;
  }
  async fetch(e) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: t } = await this.api.get(e).catch((a) => {
      throw this.query.isLoading = !1, a;
    });
    return this.query.isLoading = !1, this.query.isLoaded = !0, t;
  }
  async load(e) {
    const t = await this.fetch(e);
    return Object.assign(this.query, t.query, {
      items: t.query.items.map((a) => ({
        ...a,
        isProcessing: !1
      }))
    }), t;
  }
  onPageChange(e) {
    return this.params.page = e, this.load();
  }
  async action(e, { item: { row: t, index: a }, remove: i, method: n }, l = {}) {
    t.isProcessing = !0;
    const r = {
      id: t.id,
      ...l
    };
    if (n === "delete") {
      const { data: o } = await this.api.delete(e, {
        data: r
      }).catch((m) => {
        throw t.isProcessing = !1, m;
      });
      t.isProcessing = !1, o.row && Object.assign(t, o.row);
    } else {
      const { data: o } = await this.api.post(e, r).catch((m) => {
        throw t.isProcessing = !1, m;
      });
      t.isProcessing = !1, o.row && Object.assign(t, o.row);
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
  destroy(e, t, a) {
    return this.action(e, { ...t, remove: !0 }, a);
  }
  openFilter() {
    this.query.isFilterActive = !0;
  }
  async resetFilter(e = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(e);
  }
}
const f = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [a, i] of e)
    t[a] = i;
  return t;
}, E = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, z = /* @__PURE__ */ P("Submit"), B = /* @__PURE__ */ P("Processing..."), N = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function C(s, e, t, a, i, n) {
  const l = g("o-button");
  return d(), v(l, { disabled: t.loading }, {
    default: F(() => [
      t.loading ? b("", !0) : q(s.$slots, "default", { key: 0 }, () => [
        z
      ]),
      t.loading ? q(s.$slots, "loading", { key: 1 }, () => [
        B
      ]) : b("", !0),
      t.loading ? (d(), _("i", N)) : b("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ue = /* @__PURE__ */ f(E, [["render", C]]), I = {
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
function D(s, e, t, a, i, n) {
  return q(s.$slots, "default", A(W({ add: n.add, remove: n.remove, items: i.items })), () => [
    Y
  ]);
}
const le = /* @__PURE__ */ f(I, [["render", D]]), J = {
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
function M(s, e, t, a, i, n) {
  const l = g("o-datepicker");
  return d(), v(l, {
    modelValue: i.query,
    "onUpdate:modelValue": [
      e[0] || (e[0] = (r) => i.query = r),
      n.updateQuery
    ],
    "date-formatter": n.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const de = /* @__PURE__ */ f(J, [["render", M]]), R = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, U = /* @__PURE__ */ P(" An error occurred. Try again? ");
function Q(s, e, t, a, i, n) {
  const l = g("o-loading"), r = g("o-button");
  return d(), _("div", null, [
    t.form.isLoaded.value ? (d(), _("form", {
      key: 0,
      class: "form",
      onSubmit: e[0] || (e[0] = T((o) => s.$emit("submit"), ["prevent"]))
    }, [
      q(s.$slots, "default")
    ], 32)) : b("", !0),
    x(l, {
      active: t.form.isLoading.value
    }, null, 8, ["active"]),
    !t.form.isLoaded.value && !t.form.isLoading.value ? (d(), v(r, {
      key: 1,
      onClick: e[1] || (e[1] = (o) => t.form.load())
    }, {
      default: F(() => [
        U
      ]),
      _: 1
    })) : b("", !0)
  ]);
}
const he = /* @__PURE__ */ f(R, [["render", Q]]), G = {
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
      s.onload = (e) => {
        const t = e.target.result;
        this.$refs.image.src = t, this.width = this.resize ? this.resize.width : t.width, this.height = this.resize ? this.resize.height : t.height;
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
function K(s, e, t, a, i, n) {
  return d(), _("img", {
    ref: "image",
    src: "",
    alt: "",
    width: i.width,
    height: i.height
  }, null, 8, H);
}
const ce = /* @__PURE__ */ f(G, [["render", K]]), X = {
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
      errors: L()
    };
  },
  computed: {
    inputAttrs() {
      const s = this.$attrs;
      return Object.keys(s).forEach((e) => {
        ["class"].includes(e) || s[e];
      }), s;
    }
  }
};
function Z(s, e, t, a, i, n) {
  const l = g("o-input"), r = g("o-field");
  return d(), v(r, $({ label: t.label }, a.errors.get(t.name, t.bag)), {
    default: F(() => [
      x(l, $(s.$attrs, {
        onFocus: e[0] || (e[0] = (o) => a.errors.clear(t.name, t.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const me = /* @__PURE__ */ f(X, [["render", Z]]), ee = {
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
        this.query.map((e) => this.formatter(e))
      );
    }
  },
  methods: {
    searchTags(s) {
      return this.search.search(
        this.path,
        this.payloadFormatter({
          value: s,
          exclude: this.query.map((e) => e.id)
        })
      );
    },
    addedTag() {
      const s = this.query.map((e) => this.formatter(e));
      console.log("r", s), this.$emit("update:modelValue", s);
    },
    removedTag() {
      const s = this.query.map((e) => this.formatter(e));
      console.log("r", s), this.$emit("update:modelValue", s);
    },
    reset() {
      this.query = [], this.$emit("update:modelValue", this.query);
    }
  }
};
function te(s, e, t, a, i, n) {
  const l = g("o-inputitems");
  return d(), v(l, $(s.$attrs, {
    modelValue: i.query,
    "onUpdate:modelValue": e[0] || (e[0] = (r) => i.query = r),
    data: a.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: e[1] || (e[1] = (r) => n.addedTag(r)),
    onRemove: e[2] || (e[2] = (r) => n.removedTag(r)),
    onFocus: e[3] || (e[3] = (r) => n.searchTags()),
    onTyping: e[4] || (e[4] = (r) => n.searchTags(r))
  }), null, 16, ["modelValue", "data"]);
}
const ge = /* @__PURE__ */ f(ee, [["render", te]]);
export {
  V as AutoCompleteSearch,
  O as FormBuilder,
  ne as Listing,
  oe as ResourceList,
  ue as WyxosButton,
  le as WyxosCollection,
  de as WyxosDatepicker,
  he as WyxosForm,
  ce as WyxosImage,
  me as WyxosInput,
  ge as WyxosTags,
  L as useFormErrors
};
