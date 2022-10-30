var j = Object.defineProperty;
var k = (t, e, s) => e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (k(t, typeof e != "symbol" ? e + "" : e, s), s);
import { ref as f, reactive as g, resolveComponent as m, openBlock as d, createBlock as b, withCtx as V, renderSlot as v, createCommentVNode as y, createElementBlock as _, createTextVNode as S, normalizeProps as W, guardReactiveProps as T, createElementVNode as F, withModifiers as A, createVNode as P, mergeProps as w } from "vue";
import h from "axios";
import $ from "moment";
class x {
  constructor() {
    n(this, "loading", f(!1));
    n(this, "result", f([]));
  }
  static create() {
    return new x();
  }
  async search(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${e}/search`, s).catch((r) => {
      throw this.loading.value = !1, r;
    });
    this.result.value = a.result, this.loading.value = !1;
  }
  async restore(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: a } = await h.post(`${e}/restore`, s).catch((r) => {
      throw this.loading.value = !1, r;
    });
    return this.loading.value = !1, a;
  }
}
const p = g({
  default: []
});
function O() {
  return {
    createBag(t) {
      p[t] = [];
    },
    set(t, e = "default") {
      throw t.response && t.response.data && t.response.data.errors && (p[e] = Object.keys(t.response.data.errors).map((a) => ({
        key: a,
        message: t.response.data.errors[a][0]
      }))), t;
    },
    get(t, e = "default") {
      const s = p[e];
      if (!s)
        return {
          message: "",
          variant: ""
        };
      const a = s.find((r) => r.key === t);
      return a ? {
        message: a.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(t, e = "default") {
      if (t) {
        const s = p[e];
        if (!s) {
          console.warn(`Bag ${e} is not defined.`);
          return;
        }
        const a = s.findIndex((r) => r.key === t);
        s.splice(a, 1);
        return;
      }
      p[e] = [];
    }
  };
}
class L {
  constructor(e) {
    n(this, "loadPath", "");
    n(this, "submitPath", "");
    n(this, "bag", "default");
    n(this, "model", g({}));
    n(this, "form", g({}));
    n(this, "original", g({}));
    n(this, "isLoading", f(!1));
    n(this, "isLoaded", f(!0));
    n(this, "isSubmitting", f(!1));
    n(this, "isSubmitted", f(!1));
    n(this, "errors", null);
    this.setPath(e.submitPath), this.loadPath = e.loadPath, this.setErrors(e.errorBag), this.setAttributes(e.form);
  }
  static create(e) {
    return new L(e);
  }
  setPath(e) {
    this.submitPath = e;
  }
  setErrors(e) {
    this.bag = e, this.errors = O(), this.errors.createBag(this.bag);
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
  async submit(e, s, a = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const r = s ? s(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: o } = await h[a.method || "post"](
      e || this.submitPath,
      r,
      a
    ).catch((u) => {
      throw this.isSubmitting.value = !1, this.errors.set(u, this.bag), u;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, o;
  }
  async advancedSubmit(e) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: s } = await Promise.resolve(e(h, this.form)).catch(
      (a) => {
        throw this.isSubmitting.value = !1, this.errors.set(a, this.bag), a;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, s;
  }
  async load(e, s) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: a } = await h.get(e || this.loadPath, {
      params: s
    }).catch((r) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, r;
    });
    return this.setAttributes(a.form), a.model && Object.assign(this.model, a.model), this.isLoading.value = !1, this.isLoaded.value = !0, a;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
class oe {
  constructor() {
    n(this, "structure", {});
    n(this, "query", g({
      items: [],
      perPage: 0,
      total: 0,
      isLoading: !1,
      isLoaded: !1,
      isFilterActive: !1
    }));
    n(this, "params", g({
      page: 1
    }));
    n(this, "router", null);
  }
  static create(e, s = {}, a = {}, r) {
    a = Object.assign(
      { base: "/api/admin", route: `${e}.index` },
      a
    );
    const o = a.base;
    console.log("index", a);
    const u = {
      route: a.route,
      index: a.index || `${o}/${e}/index`,
      destroy: `${o}/${e}/destroy`
    }, i = new this();
    return i.options = a, i.structure = s, i.params = Object.assign(i.params, s), i.router = r, i.urls = u, i;
  }
  async fetch(e) {
    this.query.isLoading = !0, this.query.isLoaded = !1;
    const { data: s } = await h.get(e || this.urls.index, {
      params: this.params
    }).catch((a) => {
      throw this.query.isLoading = !1, a;
    });
    return await this.router.push({ name: this.urls.route, query: this.params }), this.query.isLoading = !1, this.query.isLoaded = !0, s;
  }
  async load(e) {
    const s = await this.fetch(e);
    return Object.assign(this.query, s.query, {
      items: s.query.items.map((a) => ({
        ...a,
        isProcessing: !1
      }))
    }), s;
  }
  onPageChange(e) {
    return this.params.page = e, this.load();
  }
  async action(e, { row: s, index: a, remove: r, method: o }, u = {}) {
    s.isProcessing = !0;
    const i = {
      id: s.id,
      ...u
    };
    if (o === "delete") {
      const { data: l } = await h.delete(e, {
        data: i
      }).catch((q) => {
        throw s.isProcessing = !1, q;
      });
      s.isProcessing = !1, l.row && Object.assign(s, l.row);
    } else {
      const { data: l } = await h.post(e, i).catch((q) => {
        throw s.isProcessing = !1, q;
      });
      s.isProcessing = !1, l.row && Object.assign(s, l.row);
    }
    if (r) {
      const l = await this.fetch();
      if (this.query.items.splice(a, 1), !l.query.items.length) {
        this.params.page--, await this.load();
        return;
      }
      this.query.items.length < l.query.items.length && this.query.items.push(l.query.items[l.query.items.length - 1]);
    }
  }
  destroy(e, s) {
    return this.action(this.urls.destroy, { ...e, remove: !0 }, s);
  }
  async resetFilter(e = null) {
    Object.assign(this.params, this.structure), this.query.isFilterActive = !1, await this.load(e);
  }
}
const c = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [a, r] of e)
    s[a] = r;
  return s;
}, E = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, z = /* @__PURE__ */ S("Submit"), B = /* @__PURE__ */ S("Processing..."), N = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function I(t, e, s, a, r, o) {
  const u = m("o-button");
  return d(), b(u, { disabled: s.loading }, {
    default: V(() => [
      s.loading ? y("", !0) : v(t.$slots, "default", { key: 0 }, () => [
        z
      ]),
      s.loading ? v(t.$slots, "loading", { key: 1 }, () => [
        B
      ]) : y("", !0),
      s.loading ? (d(), _("i", N)) : y("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ne = /* @__PURE__ */ c(E, [["render", I]]), Y = {
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
    add(t) {
      this.items.push(t), this.$emit("update:modelValue", this.items);
    },
    remove(t) {
      this.items.splice(t, 1), this.$emit("update:modelValue", this.items);
    }
  }
}, C = /* @__PURE__ */ F("ul", null, [
  /* @__PURE__ */ F("li")
], -1);
function D(t, e, s, a, r, o) {
  return v(t.$slots, "default", W(T({ add: o.add, remove: o.remove, items: r.items })), () => [
    C
  ]);
}
const ue = /* @__PURE__ */ c(Y, [["render", D]]), J = {
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
    this.modelValue && (this.query = $(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(t) {
      return t ? $(t).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit(
        "update:modelValue",
        this.query ? $(this.query).format(this.submitFormat) : null
      );
    }
  }
};
function M(t, e, s, a, r, o) {
  const u = m("o-datepicker");
  return d(), b(u, {
    modelValue: r.query,
    "onUpdate:modelValue": [
      e[0] || (e[0] = (i) => r.query = i),
      o.updateQuery
    ],
    "date-formatter": o.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const le = /* @__PURE__ */ c(J, [["render", M]]), R = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, U = /* @__PURE__ */ S(" An error occurred. Try again? ");
function Q(t, e, s, a, r, o) {
  const u = m("o-loading"), i = m("o-button");
  return d(), _("div", null, [
    s.form.isLoaded.value ? (d(), _("form", {
      key: 0,
      class: "form",
      onSubmit: e[0] || (e[0] = A((l) => t.$emit("submit"), ["prevent"]))
    }, [
      v(t.$slots, "default")
    ], 32)) : y("", !0),
    P(u, {
      active: s.form.isLoading.value
    }, null, 8, ["active"]),
    !s.form.isLoaded.value && !s.form.isLoading.value ? (d(), b(i, {
      key: 1,
      onClick: e[1] || (e[1] = (l) => s.form.load())
    }, {
      default: V(() => [
        U
      ]),
      _: 1
    })) : y("", !0)
  ]);
}
const de = /* @__PURE__ */ c(R, [["render", Q]]), G = {
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
      const t = new FileReader();
      t.onload = (e) => {
        const s = e.target.result;
        this.$refs.image.src = s, this.width = this.resize ? this.resize.width : s.width, this.height = this.resize ? this.resize.height : s.height;
      }, t.readAsDataURL(this.src);
    },
    loadPath() {
      const t = new Image();
      t.onload = () => {
        this.$refs.image.src = this.src, this.width = this.resize ? this.resize.width : t.width, this.height = this.resize ? this.resize.height : t.height;
      }, t.src = this.src;
    }
  }
}, H = ["width", "height"];
function K(t, e, s, a, r, o) {
  return d(), _("img", {
    ref: "image",
    src: "",
    alt: "",
    width: r.width,
    height: r.height
  }, null, 8, H);
}
const he = /* @__PURE__ */ c(G, [["render", K]]), X = {
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
      errors: O()
    };
  },
  computed: {
    inputAttrs() {
      const t = this.$attrs;
      return Object.keys(t).forEach((e) => {
        ["class"].includes(e) || t[e];
      }), t;
    }
  }
};
function Z(t, e, s, a, r, o) {
  const u = m("o-input"), i = m("o-field");
  return d(), b(i, w({ label: s.label }, a.errors.get(s.name, s.bag)), {
    default: V(() => [
      P(u, w(t.$attrs, {
        onFocus: e[0] || (e[0] = (l) => a.errors.clear(s.name, s.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const me = /* @__PURE__ */ c(X, [["render", Z]]), ee = {
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
      default: (t) => t
    },
    payloadFormatter: {
      type: Function,
      default: (t) => t
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      search: x.create()
    };
  },
  data() {
    return {
      query: []
    };
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result: t } = await this.search.restore(
        this.path,
        this.restoreFormatter({
          values: this.modelValue
        })
      );
      this.query = t, this.$emit(
        "update:modelValue",
        this.query.map((e) => this.formatter(e))
      );
    }
  },
  methods: {
    searchTags(t) {
      return this.search.search(
        this.path,
        this.payloadFormatter({
          value: t,
          exclude: this.query.map((e) => e.id)
        })
      );
    },
    addedTag() {
      const t = this.query.map((e) => this.formatter(e));
      console.log("r", t), this.$emit("update:modelValue", t);
    },
    removedTag() {
      const t = this.query.map((e) => this.formatter(e));
      console.log("r", t), this.$emit("update:modelValue", t);
    },
    reset() {
      this.query = [], this.$emit("update:modelValue", this.query);
    }
  }
};
function te(t, e, s, a, r, o) {
  const u = m("o-inputitems");
  return d(), b(u, w(t.$attrs, {
    modelValue: r.query,
    "onUpdate:modelValue": e[0] || (e[0] = (i) => r.query = i),
    data: a.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: e[1] || (e[1] = (i) => o.addedTag(i)),
    onRemove: e[2] || (e[2] = (i) => o.removedTag(i)),
    onFocus: e[3] || (e[3] = (i) => o.searchTags()),
    onTyping: e[4] || (e[4] = (i) => o.searchTags(i))
  }), null, 16, ["modelValue", "data"]);
}
const ce = /* @__PURE__ */ c(ee, [["render", te]]);
export {
  x as AutoCompleteSearch,
  L as FormBuilder,
  oe as ResourceList,
  ne as WyxosButton,
  ue as WyxosCollection,
  le as WyxosDatepicker,
  de as WyxosForm,
  he as WyxosImage,
  me as WyxosInput,
  ce as WyxosTags,
  O as useFormErrors
};
