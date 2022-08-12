var W = Object.defineProperty;
var k = (t, e, s) => e in t ? W(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (k(t, typeof e != "symbol" ? e + "" : e, s), s);
import { ref as h, reactive as p, resolveComponent as d, openBlock as l, createBlock as g, withCtx as $, renderSlot as V, createElementBlock as y, createCommentVNode as _, createTextVNode as q, normalizeProps as L, guardReactiveProps as T, createElementVNode as x, withModifiers as B, createVNode as F, mergeProps as v } from "vue";
import f from "axios";
import b from "moment";
class S {
  constructor() {
    n(this, "loading", h(!1));
    n(this, "result", h([]));
  }
  static create() {
    return new S();
  }
  async search(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await f.post(`${e}/search`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    this.result.value = r.result, this.loading.value = !1;
  }
  async restore(e, s) {
    this.loading.value = !0, this.result.value = [];
    const { data: r } = await f.post(`${e}/restore`, s).catch((a) => {
      throw this.loading.value = !1, a;
    });
    return this.loading.value = !1, r;
  }
}
const c = p({
  default: []
});
function P() {
  return {
    createBag(t) {
      c[t] = [];
    },
    set(t, e = "default") {
      throw t.response && t.response.data && t.response.data.errors && (c[e] = Object.keys(t.response.data.errors).map(
        (r) => ({
          key: r,
          message: t.response.data.errors[r][0]
        })
      )), t;
    },
    get(t, e = "default") {
      const s = c[e];
      if (!s)
        return;
      const r = s.find((a) => a.key === t);
      if (!!r)
        return {
          message: r.message,
          variant: "danger"
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
class O {
  constructor(e) {
    n(this, "loadPath", "");
    n(this, "submitPath", "");
    n(this, "bag", "default");
    n(this, "model", p({}));
    n(this, "form", p({}));
    n(this, "original", p({}));
    n(this, "isLoading", h(!1));
    n(this, "isLoaded", h(!0));
    n(this, "isSubmitting", h(!1));
    n(this, "isSubmitted", h(!1));
    n(this, "errors", null);
    this.setPath(e.submitPath), this.loadPath = e.loadPath, this.setErrors(e.errorBag), this.setAttributes(e.form);
  }
  static create(e) {
    return new O(e);
  }
  setPath(e) {
    this.submitPath = e;
  }
  setErrors(e) {
    this.bag = e, this.errors = P(), this.errors.createBag(this.bag);
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
    const a = s ? s(Object.assign({}, this.form)) : JSON.parse(JSON.stringify(this.form)), { data: i } = await f.post(e || this.submitPath, a, r).catch((u) => {
      throw this.isSubmitting.value = !1, this.errors.set(u, this.bag), u;
    });
    return this.errors.clear(null, this.bag), Object.assign(this.original, JSON.parse(JSON.stringify(this.form))), this.isSubmitting.value = !1, this.isSubmitted.value = !0, i;
  }
  async advancedSubmit(e) {
    this.isSubmitting.value = !0, this.isSubmitted.value = !1;
    const { data: s } = await Promise.resolve(e(f, this.form)).catch(
      (r) => {
        throw this.isSubmitting.value = !1, this.errors.set(r, this.bag), r;
      }
    );
    return this.isSubmitting.value = !1, this.isSubmitted.value = !0, s;
  }
  async load(e, s) {
    this.isLoading.value = !0, this.isLoaded.value = !1;
    const { data: r } = await f.get(this.loadPath ? this.loadPath : e, {
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
const m = (t, e) => {
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
}, j = /* @__PURE__ */ q("Button content"), N = {
  key: 0,
  class: "fas fa-spinner fa-spin"
};
function A(t, e, s, r, a, i) {
  const u = d("o-button");
  return l(), g(u, { disabled: s.loading }, {
    default: $(() => [
      V(t.$slots, "default", {}, () => [
        j
      ]),
      s.loading ? (l(), y("i", N)) : _("", !0)
    ]),
    _: 3
  }, 8, ["disabled"]);
}
const ae = /* @__PURE__ */ m(E, [["render", A]]), I = {
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
}, Y = /* @__PURE__ */ x("ul", null, [
  /* @__PURE__ */ x("li")
], -1);
function D(t, e, s, r, a, i) {
  return V(t.$slots, "default", L(T({ add: i.add, remove: i.remove, items: a.items })), () => [
    Y
  ]);
}
const ie = /* @__PURE__ */ m(I, [["render", D]]), C = {
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
    this.modelValue && (this.query = b(this.modelValue, this.submitFormat)._d);
  },
  methods: {
    dateFormatter(t) {
      return t ? b(t).format(this.displayFormat) : null;
    },
    updateQuery() {
      this.$emit("update:modelValue", this.query ? b(this.query).format(this.submitFormat) : null);
    }
  }
};
function J(t, e, s, r, a, i) {
  const u = d("o-datepicker");
  return l(), g(u, {
    modelValue: a.query,
    "onUpdate:modelValue": [
      e[0] || (e[0] = (o) => a.query = o),
      i.updateQuery
    ],
    "date-formatter": i.dateFormatter
  }, null, 8, ["modelValue", "date-formatter", "onUpdate:modelValue"]);
}
const oe = /* @__PURE__ */ m(C, [["render", J]]), z = {
  name: "WyxosForm",
  props: {
    form: {
      type: Object,
      required: !0
    }
  },
  emits: ["submit"]
}, M = /* @__PURE__ */ q(" An error occurred. Try again? ");
function R(t, e, s, r, a, i) {
  const u = d("o-loading"), o = d("o-button");
  return l(), y("div", null, [
    s.form.isLoaded.value ? (l(), y("form", {
      key: 0,
      onSubmit: e[0] || (e[0] = B((w) => t.$emit("submit"), ["prevent"]))
    }, [
      V(t.$slots, "default")
    ], 32)) : _("", !0),
    F(u, {
      active: s.form.isLoading.value
    }, null, 8, ["active"]),
    !s.form.isLoaded.value && !s.form.isLoading.value ? (l(), g(o, {
      key: 1,
      onClick: e[1] || (e[1] = (w) => s.form.load())
    }, {
      default: $(() => [
        M
      ]),
      _: 1
    })) : _("", !0)
  ]);
}
const ne = /* @__PURE__ */ m(z, [["render", R]]), U = {
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
        this.$refs.image.src = e.target.result;
      }, t.readAsDataURL(this.src);
    },
    loadPath() {
      const t = new Image();
      t.onload = () => {
        this.$refs.image.src = this.src, this.width = this.resize ? this.resize.width : t.width, this.height = this.height ? this.resize.height : t.height;
      }, t.src = this.src;
    }
  }
}, Q = ["width", "height"];
function G(t, e, s, r, a, i) {
  return l(), y("img", {
    ref: "image",
    src: "",
    alt: "",
    width: a.width,
    height: a.height
  }, null, 8, Q);
}
const ue = /* @__PURE__ */ m(U, [["render", G]]), H = {
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
      errors: P()
    };
  }
};
function K(t, e, s, r, a, i) {
  const u = d("o-input"), o = d("o-field");
  return l(), g(o, v({ label: s.label }, r.errors.get(s.name, s.bag)), {
    default: $(() => [
      F(u, v(t.$attrs, {
        onFocus: e[0] || (e[0] = (w) => r.errors.clear(s.name, s.bag))
      }), null, 16)
    ]),
    _: 1
  }, 16, ["label"]);
}
const le = /* @__PURE__ */ m(H, [["render", K]]), X = {
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
function Z(t, e, s, r, a, i) {
  const u = d("o-inputitems");
  return l(), g(u, v(t.$attrs, {
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
const de = /* @__PURE__ */ m(X, [["render", Z]]);
export {
  S as AutoCompleteSearch,
  O as FormBuilder,
  ae as WyxosButton,
  ie as WyxosCollection,
  oe as WyxosDatepicker,
  ne as WyxosForm,
  ue as WyxosImage,
  le as WyxosInput,
  de as WyxosTags,
  P as formErrors
};
