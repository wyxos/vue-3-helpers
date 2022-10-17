var k = Object.defineProperty;
var W = (t, e, s) => e in t ? k(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (W(t, typeof e != "symbol" ? e + "" : e, s), s);
import { ref as m, reactive as y, resolveComponent as d, openBlock as l, createBlock as p, withCtx as V, renderSlot as b, createCommentVNode as f, createElementBlock as _, createTextVNode as w, normalizeProps as L, guardReactiveProps as T, createElementVNode as q, withModifiers as j, createVNode as F, mergeProps as $ } from "vue";
import g from "axios";
import v from "moment";
class S {
  constructor() {
    n(this, "loading", m(!1));
    n(this, "result", m([]));
  }
  static create() {
    return new S();
  }
  async search(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await g.post(`${e}/search`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    this.result.value = r.result, this.loading.value = !1;
  }
  async restore(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await g.post(`${e}/restore`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    return this.loading.value = !1, r;
  }
}
const c = y({
  default: []
});
function O() {
  return {
    createBag(t) {
      c[t] = [];
    },
    set(t, e = "default") {
      throw t.response && t.response.data && t.response.data.errors && (c[e] = Object.keys(t.response.data.errors).map((r) => ({
        key: r,
        message: t.response.data.errors[r][0]
      }))), t;
    },
    get(t, e = "default") {
      const s = c[e];
      if (!s)
        return {
          message: "",
          variant: ""
        };
      const r = s.find((a) => a.key === t);
      return r ? {
        message: r.message,
        variant: "danger"
      } : {
        message: "",
        variant: ""
      };
    },
    clear(t, e = "default") {
      if (t) {
        const s = c[e];
        if (!s) {
          console.warn(`Bag ${e} is not defined.`);
          return;
        }
        const r = s.findIndex((a) => a.key === t);
        s.splice(r, 1);
        return;
      }
      c[e] = [];
    }
  };
}
class P {
  constructor(e) {
    n(this, "loadPath", "");
    n(this, "submitPath", "");
    n(this, "bag", "default");
    n(this, "model", y({}));
    n(this, "form", y({}));
    n(this, "original", y({}));
    n(this, "isLoading", m(!1));
    n(this, "isLoaded", m(!0));
    n(this, "isSubmitting", m(!1));
    n(this, "isSubmitted", m(!1));
    n(this, "errors", null);
    this.setPath(e.submitPath), this.loadPath = e.loadPath, this.setErrors(e.errorBag), this.setAttributes(e.form);
  }
  static create(e) {
    return new P(e);
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
  async submit(e, s, r = {}) {
    this.errors.clear(null, this.bag), this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const a = s ? s(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: i } = await g.post(e || this.submitPath, a, r).catch((u) => {
      throw this.isSubmitting.value = !1, this.errors.set(u, this.bag), u;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, i;
  }
  async advancedSubmit(e) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: s } = await Promise.resolve(e(g, this.form)).catch(
      (r) => {
        throw this.isSubmitting.value = !1, this.errors.set(r, this.bag), r;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, s;
  }
  async load(e, s) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: r } = await g.get(e || this.loadPath, {
      params: s
    }).catch((a) => {
      throw this.isLoading.value = !1, this.isLoaded.value = !1, a;
    });
    return this.setAttributes(r.form), r.model && Object.assign(this.model, r.model), this.isLoading.value = !1, this.isLoaded.value = !0, r;
  }
  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)));
  }
}
const h = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [r, a] of e)
    s[r] = a;
  return s;
}, E = {
  name: "WyxosButton",
  props: {
    loading: {
      default: !1,
      type: Boolean
    }
  }
}, z = /* @__PURE__ */ w("Submit"), B = /* @__PURE__ */ w("Processing..."), N = {
  key: 2,
  class: "fas fa-spinner fa-spin"
};
function A(t, e, s, r, a, i) {
  const u = d("o-button");
  return l(), p(u, { disabled: s.loading }, {
    default: V(() => [
      s.loading ? f("", !0) : b(t.$slots, "default", { key: 0 }, () => [
        z
      ]),
      s.loading ? b(t.$slots, "loading", { key: 1 }, () => [
        B
      ]) : f("", !0),
      s.loading ? (l(), _("i", N)) : f("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ie = /* @__PURE__ */ h(E, [["render", A]]), I = {
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
}, Y = /* @__PURE__ */ q("ul", null, [
  /* @__PURE__ */ q("li")
], -1);
function D(t, e, s, r, a, i) {
  return b(t.$slots, "default", L(T({ add: i.add, remove: i.remove, items: a.items })), () => [
    Y
  ]);
}
const oe = /* @__PURE__ */ h(I, [["render", D]]), C = {
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
    this.modelValue && (this.query = v(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(t) {
      return t ? v(t).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit(
        "update:modelValue",
        this.query ? v(this.query).format(this.submitFormat) : null
      );
    }
  }
};
function J(t, e, s, r, a, i) {
  const u = d("o-datepicker");
  return l(), p(u, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      e[0] || (e[0] = (o) => a.query = o),
      i.updateQuery
    ],
    "date-formatter": i.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const ne = /* @__PURE__ */ h(C, [["render", J]]), M = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, R = /* @__PURE__ */ w(" An error occurred. Try again? ");
function U(t, e, s, r, a, i) {
  const u = d("o-loading"), o = d("o-button");
  return l(), _("div", null, [
    s.form.isLoaded.value ? (l(), _("form", {
      key: 0,
      class: "form",
      onSubmit: e[0] || (e[0] = j((x) => t.$emit("submit"), ["prevent"]))
    }, [
      b(t.$slots, "default")
    ], 32)) : f("", !0),
    F(u, {
      active: s.form.isLoading.value
    }, null, 8, ["active"]),
    !s.form.isLoaded.value && !s.form.isLoading.value ? (l(), p(o, {
      key: 1,
      onClick: e[1] || (e[1] = (x) => s.form.load())
    }, {
      default: V(() => [
        R
      ]),
      _: 1
    })) : f("", !0)
  ]);
}
const ue = /* @__PURE__ */ h(M, [["render", U]]), Q = {
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
}, G = ["width", "height"];
function H(t, e, s, r, a, i) {
  return l(), _("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, G);
}
const le = /* @__PURE__ */ h(Q, [["render", H]]), K = {
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
function X(t, e, s, r, a, i) {
  const u = d("o-input"), o = d("o-field");
  return l(), p(o, $({ label: s.label }, r.errors.get(s.name, s.bag)), {
    default: V(() => [
      F(u, $(t.$attrs, {
        onFocus: e[0] || (e[0] = (x) => r.errors.clear(s.name, s.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const de = /* @__PURE__ */ h(K, [["render", X]]), Z = {
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
      search: S.create()
    };
  },
  data() {
    return {
      query: []
    };
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result: t } = await this.search.restore(this.path, {
        values: this.modelValue
      });
      this.query = t, this.$emit(
        "update:modelValue",
        this.query.map((e) => this.formatter(e))
      );
    }
  },
  methods: {
    searchTags(t) {
      return this.search.search(this.path, {
        value: t,
        type: "service-category",
        exclude: this.query.map((e) => e.id)
      });
    },
    addedTag() {
      this.$emit(
        "update:modelValue",
        this.query.map((t) => this.formatter(t))
      );
    },
    removedTag() {
      this.$emit(
        "update:modelValue",
        this.query.map((t) => this.formatter(t))
      );
    }
  }
};
function ee(t, e, s, r, a, i) {
  const u = d("o-inputitems");
  return l(), p(u, $(t.$attrs, {
    modelValue: a.query,
    "onUpdate:modelValue": e[0] || (e[0] = (o) => a.query = o),
    data: r.search.result.value,
    "open-on-focus": !0,
    autocomplete: "",
    onAdd: e[1] || (e[1] = (o) => i.addedTag(o)),
    onRemove: e[2] || (e[2] = (o) => i.removedTag(o)),
    onFocus: e[3] || (e[3] = (o) => i.searchTags()),
    onTyping: e[4] || (e[4] = (o) => i.searchTags(o))
  }), null, 16, ["modelValue", "data"]);
}
const he = /* @__PURE__ */ h(Z, [["render", ee]]);
export {
  S as AutoCompleteSearch,
  P as FormBuilder,
  ie as WyxosButton,
  oe as WyxosCollection,
  ne as WyxosDatepicker,
  ue as WyxosForm,
  le as WyxosImage,
  de as WyxosInput,
  he as WyxosTags,
  O as useFormErrors
};
